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
	}
	_post() {
		fetch("/post.do",
			{headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		  	},
		 	method: 'POST',
		  	body: JSON.stringify({value : this.value})}
		).then((r) => r.json()).then((r) => {//difficult
			this.res = r.results
		})		 
	}
	_setValue(e) { 
		this.value = e.target.value
	}
} 