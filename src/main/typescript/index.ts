import { LitElement, html } from 'lit'
import { customElement, property } from 'lit-element/decorators.js'
import { repeat } from 'lit-html/directives/repeat.js'

@customElement('fetching-data')
export class FetchingData extends LitElement {

	@property({ type: Array })
	res = []
	value : String 
 
	render() {
		return html`
		<input type="text" .value="${this.value || ''}" @input="${this.inputHandler}">
			<button @click="${this.click}">get</button>
			<ul>
			${repeat(this.res,item => html` <li class="message">${item.name}</li> `)}
			</ul>
		`
	}
	click() {
		console.log(this.value);
		fetch("/get.do").then((r) => r.json()).then((r) => {
			this.res = r.results
		})		
		console.log(this.res); 
	}
	inputHandler(e) {
		this.value = e.target.value;
		console.log(this.value);
		this.dispatchEvent(new CustomEvent('value-changed', {
		  detail: this.value
		}));
	  }
} 