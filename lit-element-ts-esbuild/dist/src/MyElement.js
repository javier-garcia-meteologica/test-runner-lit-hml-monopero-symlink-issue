import { __decorate } from "tslib";
import { html, css, property } from 'lit-element';
import { MyParent } from '@web/parent-component';
export class MyElement extends MyParent {
    constructor() {
        super(...arguments);
        this.title = 'Hey there';
        this.counter = 5;
    }
    __increment() {
        this.counter += 1;
    }
    firstUpdated(changedProps) {
        var _a;
        console.log((_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.innerHTML);
        super.firstUpdated(changedProps);
    }
    render() {
        return html `
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
      ${this.foo}
    `;
    }
}
MyElement.styles = css `
    :host {
      display: block;
      padding: 25px;
      color: var(--my-element-text-color, #000);
    }
  `;
__decorate([
    property({ type: String })
], MyElement.prototype, "title", void 0);
__decorate([
    property({ type: Number })
], MyElement.prototype, "counter", void 0);
//# sourceMappingURL=MyElement.js.map