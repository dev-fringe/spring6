import { LitElement, html } from 'lit'
import { customElement, property, query } from 'lit/decorators.js'
import { styles } from '../styles/styles'
 
@customElement('fetching-data2')
export class FetchingData2 extends LitElement {

	@property({type : Array}) res = []
	@query('#first') _input : HTMLInputElement
	@query('#last') _last : HTMLInputElement
	
	render() {
		return html`
			${styles}
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
		var json = {
			value : this._input.value, value2 : this._last.value
		}// TODO : form serialize 
		fetch("/postJSON.do",{
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
		  	},
		 	method: 'POST',
		  	body: JSON.stringify(json)
		})
		.then(r => r.json())
		.then(r => this.res = r.results)// api 특성상 res를 이렇게 쎠야 한다. 가독성 떨어짐.  
		.catch(e => console.log(e))
	}
}