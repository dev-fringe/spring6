import { LitElement, html } from 'lit-element';
import { customElement, property } from 'lit-element/decorators.js';

@customElement('fetching-data')
export class FetchingData extends LitElement {

  @property({type : Array})
  res = []

  firstUpdated() {
    fetch("/get.do")
      .then((r) => r.json())
      .then((r) => {
        this.res = r.results
      })
  }

  render() {
    const { res } = this;
    return html`
      <ul>
        ${res.map((item) => html` <li>${item.name}</li> `)}
      </ul>
    `
  }
}