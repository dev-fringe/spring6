import { LitElement, html } from 'lit'
import { customElement, property } from 'lit-element/decorators.js'
import { repeat } from 'lit-html/directives/repeat.js'
import { styles } from './styles'

@customElement('fetching-data')
export class FetchingData extends LitElement {
	@property()
	res = []
	value = ""

	render() {
		return html`
		${styles}
		<input type="text"  name="line-1" .value="${this.value}" @input="${this._setValue}">
		<button @click="${this._post}">post</button>
		<table>
			<thead>
				<tr>
					<th>
						Name
					</th> 
				</tr>
			</thead>
			<tbody>
				${repeat(this.res,item => html`<tr class="striped"><td>${item.name}</td></tr>`)}
			<tbody>
		</table>
		`
	}//repeat또한 가독성.

	_post() {
		fetch("/postJSON.do",{
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
		  	},
		 	method: 'POST',
		  	body: JSON.stringify({value : this.value})
		})// 이것또한 가독성.
		.then(function (r) {
			return r.json();
		})
		.then(function (r) {
			this.res = r.results
		})// res를 이렇게 쎠야 한다. 가독성 떨어짐.  
	}

	_setValue(e) { 
		this.value = e.target.value//form serialize 방법
	}
} 