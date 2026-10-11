// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  _y,
  Tt,
  qd
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  W
} from "B:/~BUN/root/chunk-h23911wn.js";
import {
  Ba
} from "B:/~BUN/root/chunk-vf07m8qt.js";
import {
  URt,
  Dve
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  R,
  X,
  RE,
  N
} from "B:/~BUN/root/chunk-rnj6pcz5.js";
N();

function cM() {
  let [o, e] = RE((r) => r + 1, 0);
  return R(() => qd(e), []), o
}

function lU(o) {
  return cM(), o()
}
N();

function Ovn(o, e) {
  return URt(o) ?? URt(e) ?? _y()
}

function NQ(o) {
  return Tt(Ovn(o.mainLoopModelForSession, o.mainLoopModel))
}

function eoe() {
  let o = W((n) => n.mainLoopModel),
    e = W((n) => n.mainLoopModelForSession),
    r = cM(),
    s = Ba();
  return X(() => Dve(e, o), [e, o, r, s])
}

function oVt() {
  let o = W((n) => n.mainLoopModel),
    e = W((n) => n.mainLoopModelForSession),
    r = cM(),
    s = Ba();
  return X(() => Ovn(e, o), [e, o, r, s])
}

function rd() {
  let o = W((n) => n.mainLoopModel),
    e = W((n) => n.mainLoopModelForSession),
    r = cM(),
    s = Ba();
  return X(() => NQ({
    mainLoopModel: o,
    mainLoopModelForSession: e
  }), [e, o, r, s])
}
export {
  cM,
  lU,
  Ovn,
  NQ,
  eoe,
  oVt,
  rd
};
