// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { hKe } from "B:/~BUN/root/chunk-5az22yft.js";
import { bt } from "B:/~BUN/root/chunk-ja520myc.js";
import { _a } from "B:/~BUN/root/chunk-5xe4wxb1.js";
var s = 5000;
function M8o(e, negotiationDenylisted) {
  let o = {
    sentAhead: !1,
    negotiationDenylisted: negotiationDenylisted,
    listChangedBeforeHandler: !1,
    handlerRegistered: !1
  };
  return bt().toolsListAhead.set(e, o), o;
}
function Eui(e, t, o) {
  e.page = t, e.pageSentAtMs = o;
}
function Tui(e) {
  if (e.page !== void 0) e.expiry = setTimeout(n, s, e), e.expiry.unref?.();
}
function D8o(e) {
  n(e);
}
function Cui(e) {
  let t = bt().toolsListAhead.get(e);
  if (t?.page === void 0 || t.pageSentAtMs === void 0) return;
  let o = {
    page: t.page,
    sentAtMs: t.pageSentAtMs
  };
  return n(t), o;
}
function Rui(e, t) {
  try {
    let o = bt().toolsListAhead.get(e);
    if (o !== void 0 && o.firstPageMark === void 0) o.firstPageMark = hKe(t) ?? "unmarked";
  } catch {}
}
function Aui(e, t) {
  let o = bt().toolsListAhead.get(e);
  if (o !== void 0) o.earlyAnswer = t;
}
function L8o(e) {
  let t = bt().toolsListAhead.get(e);
  if (t === void 0) return;
  if (n(t), t.sentAhead && !t.handlerRegistered) t.listChangedBeforeHandler = !0;
}
function xui(e) {
  let t = bt().toolsListAhead.get(e);
  if (t === void 0) return !1;
  t.handlerRegistered = !0;
  let listChangedBeforeHandler = t.listChangedBeforeHandler;
  return t.listChangedBeforeHandler = !1, listChangedBeforeHandler;
}
function J4t(e) {
  if (e === void 0) return {};
  return {
    toolsListAhead: e.sentAhead,
    ...(e.earlyAnswer !== void 0 && {
      toolsListAheadEarlyAnswer: f(e.earlyAnswer)
    }),
    ...(e.firstPageMark !== void 0 && {
      toolsListFirstPageMark: f(e.firstPageMark)
    })
  };
}
function Pui(e) {
  let t = bt().toolsListAhead.get(_a(e.client));
  return t === void 0 ? {} : {
    ...J4t(t),
    negotiationDenylisted: t.negotiationDenylisted
  };
}
function n(e) {
  clearTimeout(e.expiry), e.page = void 0, e.pageSentAtMs = void 0, e.expiry = void 0;
}
export { M8o, Eui, Tui, D8o, Cui, Rui, Aui, L8o, xui, J4t, Pui };