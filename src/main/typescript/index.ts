import { LitElement, html } from 'lit'
import { customElement, property } from 'lit-element/decorators.js'
import { repeat } from 'lit-html/directives/repeat.js'

@customElement('fetching-data')
export class FetchingData extends LitElement {

	@property()
	res = []
	value = "" 
 
   constructor() {
    super();
	}
  
	render() {
		return html`
		<input type="text"  name="line-1" .value="${this.value}" @input="${this._setValue}">
		<button @click="${this.click}">get</button>
		<ul>
		${repeat(this.res,item => html` <li class="message">${item.name}</li> `)}
		</ul>
		`
	}
	click() {
		console.log(this.value);
		fetch("/get.do?value=" + this.value).then((r) => r.json()).then((r) => {
			this.res = r.results
		})		 
	}
	_setValue(e) { 
		this.value = e.target.value;
	}
} 