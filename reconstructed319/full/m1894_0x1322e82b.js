// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Zs
} from "B:/~BUN/root/chunk-vmcmhkh2.js";
import {
  De
} from "B:/~BUN/root/chunk-vz9zea4j.js";
import {
  Je
} from "B:/~BUN/root/chunk-9wbhv9z5.js";
var t = "repl-ask-declined",
  Pjo = new DOMException(t, "AbortError");

function iyn(e) {
  return e.aborted && Zs(e.reason) === t
}
class o {
  #e = 0;
  #t = De();
  subscribe = (e) => this.#t.subscribe(e);
  getSnapshot = () => this.#e > 0;
  hold() {
    if (this.#e++, this.#e === 1) this.#t.emit();
    let e = !1;
    return () => {
      if (e) return;
      if (e = !0, this.#e--, this.#e === 0) this.#t.emit()
    }
  }
}
var Ojo = new Je(() => new o);
export {
  Pjo,
  iyn,
  Ojo
};
