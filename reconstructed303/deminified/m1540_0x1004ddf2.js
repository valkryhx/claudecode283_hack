// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { V } from "B:/~BUN/root/chunk-tgzmva3g.js";
import { bjs, Yb, It } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { k0 } from "B:/~BUN/root/chunk-dyx9ks30.js";
import { hd } from "B:/~BUN/root/chunk-q6bapw2s.js";
import { _Jt, o$e } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { P, Z, ny, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
B();
function t() {
  let [o, e] = ny(s => s + 1, 0);
  return P(() => bjs(e), []), o;
}
function dtr(o, e) {
  return _Jt(o) ?? _Jt(e) ?? Yb();
}
function v0(o) {
  return It(dtr(o.mainLoopModelForSession, o.mainLoopModel));
}
function Kye() {
  let o = V(n => n.mainLoopModel),
    e = V(n => n.mainLoopModelForSession),
    s = k0(),
    i = t(),
    r = hd();
  return Z(() => o$e(e, o), [e, o, s, r, i]);
}
function cVe() {
  let o = V(n => n.mainLoopModel),
    e = V(n => n.mainLoopModelForSession),
    s = k0(),
    i = t(),
    r = hd();
  return Z(() => dtr(e, o), [e, o, s, r, i]);
}
function Pu() {
  let mainLoopModel = V(n => n.mainLoopModel),
    mainLoopModelForSession = V(n => n.mainLoopModelForSession),
    s = k0(),
    i = t(),
    r = hd();
  return Z(() => v0({
    mainLoopModel: mainLoopModel,
    mainLoopModelForSession: mainLoopModelForSession
  }), [mainLoopModelForSession, mainLoopModel, s, r, i]);
}
export { dtr, v0, Kye, cVe, Pu };