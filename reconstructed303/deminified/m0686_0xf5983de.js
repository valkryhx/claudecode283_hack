// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Ae } from "B:/~BUN/root/chunk-jjcfcfrs.js";
import { qt, Ee, Z, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { Wsn } from "B:/~BUN/root/chunk-b4xxgr0r.js";
B();
var TP = qt(null),
  Gnr = qt(null),
  Vnr = qt(null);
function eVt() {
  let e = Ee(Vnr);
  if (!e) throw ReferenceError("useMcpConnections cannot be called outside of an <AppStateProvider />");
  return e;
}
var qnr = qt(null);
function RV() {
  let e = Ee(qnr);
  if (!e) throw ReferenceError("useActivePlugins cannot be called outside of an <AppStateProvider />");
  return e;
}
function kk() {
  let e = Ee(Gnr);
  if (!e) throw ReferenceError("useAppStateSession cannot be called outside of an <AppStateProvider />");
  return e;
}
function t() {
  let e = Ee(TP);
  if (!e) throw ReferenceError("useAppState/useSetAppState cannot be called outside of an <AppStateProvider />");
  return e;
}
function V(e) {
  let n = t();
  return Ae(n, e);
}
function Un() {
  return t().setState;
}
function C4r() {
  let e = t();
  return Z(() => Wsn(e.setState), [e]);
}
function Ar() {
  return t();
}
function Fo(e) {
  return Ae(Ee(TP), e);
}
export { TP, Gnr, Vnr, eVt, qnr, RV, kk, V, Un, C4r, Ar, Fo };