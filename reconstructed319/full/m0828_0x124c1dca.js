// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Ugt
} from "B:/~BUN/root/chunk-3xtmwvra.js";
import {
  Je
} from "B:/~BUN/root/chunk-9wbhv9z5.js";
var r = Ugt("computerUseMcpState", void 0);
class DEt {
  #e;
  constructor(e) {
    this.#e = e
  }
  static over(e) {
    return new DEt(r(e.getState, e.setState))
  }
  get() {
    return this.#e.get()
  }
  update(e) {
    this.#e.set(e)
  }
}
class t {
  owner = void 0;
  acquire(e) {
    if (this.owner) return () => {};
    return this.owner = e, () => {
      if (this.owner === e) this.owner = void 0
    }
  }
}
var P2t = new Je(() => new t);

function _Js(e) {
  return P2t.of(e).owner
}
export {
  DEt,
  P2t,
  _Js
};
