import { LitElement, html } from 'lit'
import { customElement, property } from 'lit-element/decorators.js'
import { styles } from './styles'

@customElement('fetching-data')
export class FetchingData extends LitElement {
	@property({type : Array}) res = []
	@property({type : String}) value = ""

	render() {
		return html`
			${styles}
			<input type="text"  name="line-1" .value="${this.value}" @input="${this._setValue}">
			<button @click="${this._post}">post</button><br/>
			<table>
				<thead>
					<tr>
						<th>
							Name
						</th> 
					</tr>
				</thead>
				<tbody>
				${this.res.map((item) =>
					html`<tr class="striped"><td>${item.name}</td></tr>`
				)}
				<tbody>
			</table>
		`
	}
	
	_post() {
		fetch("/postJSON.do",{
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
		  	},
		 	method: 'POST',
		  	body: JSON.stringify({value : this.value})
		})
		.then((r) => r.json())
		.then((r) => this.res = r.results)// api 특성상 res를 이렇게 쎠야 한다. 가독성 떨어짐.  
	}

	_setValue(e) { 
		this.value = e.target.value//form serialize 방법
	}
}