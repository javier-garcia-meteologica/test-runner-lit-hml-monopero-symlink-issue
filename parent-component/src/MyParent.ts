import { LitElement, property, html } from 'lit-element';

export class MyParent extends LitElement {
  @property({ type: String }) bar = 'Foo';

  get foo () {
    return html`<span> ${this.bar} </span>`;
  }
}
