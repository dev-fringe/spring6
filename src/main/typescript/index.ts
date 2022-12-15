import { LitElement, html, css } from 'lit-element';
import { customElement, property } from 'lit-element/decorators.js';
import { styles } from './styles';

@customElement('fetching-data')
export class FetchingData extends LitElement {

	@property({ type: Array })
	res = []
 
	firstUpdated() {
		fetch("/get.do").then((r) => r.json()).then((r) => {
			this.res = r.results
		})
	}

	render() {
	const { res } = this;
		return html`
			${styles}
			<ul>
				${res.map((item) => html` <li class="message">${item.name}</li> `)}
			</ul>
		`
	}
}