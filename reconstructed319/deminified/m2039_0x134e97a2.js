// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { G } from "B:/~BUN/root/chunk-tmdrwqnv.js";
import { x3i, qk, Vt } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { eI } from "B:/~BUN/root/chunk-7hqn9qvm.js";
import { Ic } from "B:/~BUN/root/chunk-c7kw6nqt.js";
import { DRn, w8e } from "B:/~BUN/root/chunk-27h4st9h.js";
import { O, Z, G_, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
j();
function t() {
  let [o, e] = G_(s => s + 1, 0);
  return O(() => x3i(e), []), o;
}
function gWr(o, e) {
  return DRn(o) ?? DRn(e) ?? qk();
}
function YH(o) {
  return Vt(gWr(o.mainLoopModelForSession, o.mainLoopModel));
}
function MPe() {
  let o = G(n => n.mainLoopModel),
    e = G(n => n.mainLoopModelForSession),
    s = eI(),
    i = t(),
    r = Ic();
  return Z(() => w8e(e, o), [e, o, s, r, i]);
}
function Not() {
  let o = G(n => n.mainLoopModel),
    e = G(n => n.mainLoopModelForSession),
    s = eI(),
    i = t(),
    r = Ic();
  return Z(() => gWr(e, o), [e, o, s, r, i]);
}
function Nu() {
  let mainLoopModel = G(n => n.mainLoopModel),
    mainLoopModelForSession = G(n => n.mainLoopModelForSession),
    s = eI(),
    i = t(),
    r = Ic();
  return Z(() => YH({
    mainLoopModel: mainLoopModel,
    mainLoopModelForSession: mainLoopModelForSession
  }), [mainLoopModelForSession, mainLoopModel, s, r, i]);
}
export { gWr, YH, MPe, Not, Nu };