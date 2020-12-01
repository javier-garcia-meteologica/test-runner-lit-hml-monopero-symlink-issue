import { __decorate } from "tslib";
import { LitElement, property, html } from 'lit-element';
export class MyParent extends LitElement {
    constructor() {
        super(...arguments);
        this.bar = 'Foo';
    }
    get foo() {
        return html `<span> ${this.bar} </span>`;
    }
}
__decorate([
    property({ type: String })
], MyParent.prototype, "bar", void 0);
//# sourceMappingURL=MyParent.js.map