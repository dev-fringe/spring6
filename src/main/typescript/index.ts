import { LitElement, html } from 'lit-element';
import { customElement, property } from 'lit-element/decorators.js';

@customElement('manage-properties')
export class BasicSetup extends LitElement {

  @property()
  message?: string;
  count: number = 0;

  render() {
    return html`
      <div>
        <div>
          The message is: ${this.message}, count is: ${this.count}
        </div>
        <div>
          The reversed message is: ${this.reverseMessage(this.message)}
        </div>
      </div>
    `;
  }

  reverseMessage(message) {
    return message
      .split("")
      .reverse()
      .join("");
  }
}
