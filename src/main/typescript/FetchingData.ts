import { LitElement, html } from 'lit'
import { customElement, property, query } from 'lit/decorators.js'
import '@vaadin/vaadin-button/vaadin-button.js'
import '@vaadin/grid/theme/material/vaadin-grid.js';
import '@vaadin/text-field/theme/material/vaadin-text-field.js'
import { styles } from './styles'

@customElement('fetching-data')
class FetchingData extends LitElement {

	@property({type : Array}) res = []
	@query('#first') _input : HTMLInputElement
	@query('#last') _last : HTMLInputElement
	
	render() {
		return html`
			${styles}
			<vaadin-text-field id='first' clear-button-visible></vaadin-text-field>
			<vaadin-text-field id='last' clear-button-visible></vaadin-text-field>
			<vaadin-button @click="${this._post}" theme="normal">POST</vaadin-button>
			<vaadin-grid .items="${this.res}">
			<vaadin-grid-column path="name"></vaadin-grid-column>
		    </vaadin-grid>
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