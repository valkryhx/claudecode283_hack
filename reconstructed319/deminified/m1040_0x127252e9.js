// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { De } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { Je } from "B:/~BUN/root/chunk-9wbhv9z5.js";
class e {
  #e = {
    credentialsPersisted: 0,
    loginCompleted: 0
  };
  #t = De();
  subscribe = t => this.#t.subscribe(t);
  getSnapshot = () => this.#e;
  credentialsPersisted() {
    this.#e = {
      ...this.#e,
      credentialsPersisted: this.#e.credentialsPersisted + 1
    }, this.#t.emit();
  }
  loginCompleted() {
    this.#e = {
      ...this.#e,
      loginCompleted: this.#e.loginCompleted + 1
    }, this.#t.emit();
  }
}
var qj = new Je(() => new e());
export { qj };