
import { LitElement, html } from 'lit'
import { customElement, property, query } from 'lit/decorators.js'

@customElement('fetching-data3')
export class FetchingData3 extends LitElement {
	
	render() {
		return html`
		<vaadin-upload target="/api/fileupload"></vaadin-upload>
		`
	}

	handleResponse(e){
	}
}