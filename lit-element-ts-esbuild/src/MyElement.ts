import { html, css, property } from 'lit-element';
import { MyParent } from '@web/parent-component';

export class MyElement extends MyParent {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--my-element-text-color, #000);
    }
  `;

  @property({ type: String }) title = 'Hey there';

  @property({ type: Number }) counter = 5;

  __increment() {
    this.counter += 1;
  }

  firstUpdated (changedProps: Map<string | number | symbol, unknown>) {
    console.log(this.shadowRoot?.innerHTML);
    super.firstUpdated(changedProps);
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
      ${this.foo}
    `;
  }
}
