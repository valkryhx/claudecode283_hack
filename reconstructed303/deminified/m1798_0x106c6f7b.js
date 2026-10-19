// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { Ft, VMe } from "B:/~BUN/root/chunk-ejm0pmyj.js";
import { Ai } from "B:/~BUN/root/chunk-0r89607w.js";
var r = 5000;
function v9r(e, flagSource, negotiationDenylisted, listed) {
  let s = {
    sentAhead: !1,
    flagSource: flagSource,
    negotiationDenylisted: negotiationDenylisted,
    listed: listed,
    listChangedBeforeHandler: !1,
    handlerRegistered: !1
  };
  return Ft().toolsListAhead.set(e, s), s;
}
function Res(e, t, o) {
  e.page = t, e.pageSentAtMs = o;
}
function Aes(e) {
  if (e.page !== void 0) e.expiry = setTimeout(n, r, e), e.expiry.unref?.();
}
function k9r(e) {
  n(e);
}
function xes(e) {
  let t = Ft().toolsListAhead.get(e);
  if (t?.page === void 0 || t.pageSentAtMs === void 0) return;
  let o = {
    page: t.page,
    sentAtMs: t.pageSentAtMs
  };
  return n(t), o;
}
function Pes(e, t) {
  try {
    let o = Ft().toolsListAhead.get(e);
    if (o !== void 0 && o.firstPageMark === void 0) o.firstPageMark = VMe(t) ?? "unmarked";
  } catch {}
}
function Oes(e, t) {
  let o = Ft().toolsListAhead.get(e);
  if (o !== void 0) o.earlyAnswer = t;
}
function E9r(e) {
  let t = Ft().toolsListAhead.get(e);
  if (t === void 0) return;
  if (n(t), t.sentAhead && !t.handlerRegistered) t.listChangedBeforeHandler = !0;
}
function Ies(e) {
  let t = Ft().toolsListAhead.get(e);
  if (t === void 0) return !1;
  t.handlerRegistered = !0;
  let listChangedBeforeHandler = t.listChangedBeforeHandler;
  return t.listChangedBeforeHandler = !1, listChangedBeforeHandler;
}
function vEt(e) {
  if (e === void 0) return {};
  return {
    toolsListAhead: e.sentAhead,
    toolsListAheadListed: e.listed,
    toolsListAheadFlagSource: c(e.flagSource),
    ...(e.earlyAnswer !== void 0 && {
      toolsListAheadEarlyAnswer: c(e.earlyAnswer)
    }),
    ...(e.firstPageMark !== void 0 && {
      toolsListFirstPageMark: c(e.firstPageMark)
    })
  };
}
function Mes(e) {
  let t = Ft().toolsListAhead.get(Ai(e.client));
  return t === void 0 ? {} : {
    ...vEt(t),
    negotiationDenylisted: t.negotiationDenylisted
  };
}
function n(e) {
  clearTimeout(e.expiry), e.page = void 0, e.pageSentAtMs = void 0, e.expiry = void 0;
}
export { v9r, Res, Aes, k9r, xes, Pes, Oes, E9r, Ies, vEt, Mes };