// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  at,
  j,
  Dw
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  dle,
  HIe
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  HW
} from "B:/~BUN/root/chunk-pp80ffk4.js";
class r {
  #e;
  get() {
    return this.#e
  }
  replace(e) {
    this.#e = e
  }
}
var u = new at(() => new r);

function zPr() {
  return u.peek(j())?.get()
}

function pVn() {
  return (dle() && !HIe() ? void 0 : zPr()) ?? (Dw() ? "UTC" : void 0)
}

function URo() {
  let e = new Date,
    n = zPr();
  if (n !== void 0) {
    let t = new Map(HW("en-US", {
      timeZone: n,
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).formatToParts(e).map((o) => [o.type, o.value]));
    return `${t.get("year")}-${t.get("month")}-${t.get("day")}`
  }
  let i = e.getFullYear(),
    a = String(e.getMonth() + 1).padStart(2, "0"),
    d = String(e.getDate()).padStart(2, "0");
  return `${i}-${a}-${d}`
}
class s {
  #e;
  get() {
    return this.#e ??= URo(), this.#e
  }
  clear() {
    this.#e = void 0
  }
  get captured() {
    return this.#e !== void 0
  }
}
var msn = new at(() => new s);

function BRo(e) {
  return msn.of(e).get()
}

function tLs() {
  return BRo(j())
}

function nLs() {
  return new Date().toLocaleString("en-US", {
    month: "long",
    year: "numeric"
  })
}
export {
  zPr,
  pVn,
  URo,
  msn,
  BRo,
  tLs,
  nLs
};
