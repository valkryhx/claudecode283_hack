// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { H, Qp } from "B:/~BUN/root/chunk-game8aqv.js";
import { tn } from "B:/~BUN/root/chunk-1fg2bpc3.js";
import { dG, zte } from "B:/~BUN/root/chunk-f9dwrymq.js";
import { nY } from "B:/~BUN/root/chunk-63176a0t.js";
import { Je } from "B:/~BUN/root/chunk-9wbhv9z5.js";
class i {
  #e;
  #t = !1;
  get() {
    return this.#e;
  }
  isAssumed() {
    return this.#t;
  }
  replace(e, t = !1) {
    this.#e = e, this.#t = t;
  }
}
var a = new Je(() => new i());
function Xho() {
  return a.peek(H())?.get();
}
function vTr() {
  return (dG() && !zte() ? void 0 : Xho()) ?? (Qp() ? "UTC" : void 0);
}
function gvs() {
  let date = new Date(),
    timeZone = Xho();
  if (timeZone !== void 0) {
    let o = new Map(nY("en-US", {
      timeZone: timeZone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).formatToParts(date).map(item => [item.type, item.value]));
    return `${o.get("year")}-${o.get("month")}-${o.get("day")}`;
  }
  let n = date.getFullYear(),
    r = String(date.getMonth() + 1).padStart(2, "0"),
    c = String(date.getDate()).padStart(2, "0");
  return `${n}-${r}-${c}`;
}
var TZ = process.env.TZ;
function m(e, t) {
  let n = e;
  return n === "UTC" || n === "Etc/UTC";
}
function mWi() {
  let e = a.peek(H());
  return e?.get() !== void 0 ? e.isAssumed() : tn() && new Date().getTimezoneOffset() === 0 && (m(process.env.TZ, TZ) || Intl.DateTimeFormat().resolvedOptions().timeZone === "UTC");
}
class d {
  #e;
  get() {
    return this.#e ??= gvs(), this.#e;
  }
  clear() {
    this.#e = void 0;
  }
  get captured() {
    return this.#e !== void 0;
  }
}
var TFn = new Je(() => new d());
function yvs(e) {
  return TFn.of(e).get();
}
function hWi() {
  return yvs(H());
}
function gWi() {
  return new Date().toLocaleString("en-US", {
    month: "long",
    year: "numeric"
  });
}
export { Xho, vTr, gvs, mWi, TFn, yvs, hWi, gWi };