// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  xe
} from "B:/~BUN/root/chunk-mgxre38x.js";
import {
  Vt,
  Pe,
  X,
  N
} from "B:/~BUN/root/chunk-rnj6pcz5.js";
import {
  CLt
} from "B:/~BUN/root/chunk-aky7m4ay.js";
N();
var fP = Vt(null),
  Mvn = Vt(null),
  Dvn = Vt(null);

function c_t() {
  let e = Pe(Dvn);
  if (!e) throw ReferenceError("useMcpConnections cannot be called outside of an <AppStateProvider />");
  return e
}
var Lvn = Vt(null);

function uU() {
  let e = Pe(Lvn);
  if (!e) throw ReferenceError("useActivePlugins cannot be called outside of an <AppStateProvider />");
  return e
}

function Kw() {
  let e = Pe(Mvn);
  if (!e) throw ReferenceError("useAppStateSession cannot be called outside of an <AppStateProvider />");
  return e
}

function t() {
  let e = Pe(fP);
  if (!e) throw ReferenceError("useAppState/useSetAppState cannot be called outside of an <AppStateProvider />");
  return e
}

function W(e) {
  let n = t();
  return xe(n, e)
}

function dn() {
  return t().setState
}

function Ler() {
  let e = t();
  return X(() => CLt(e.setState), [e])
}

function Ar() {
  return t()
}

function ys(e) {
  return xe(Pe(fP), e)
}
export {
  fP,
  Mvn,
  Dvn,
  c_t,
  Lvn,
  uU,
  Kw,
  W,
  dn,
  Ler,
  Ar,
  ys
};
