// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { l } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { p } from "B:/~BUN/root/chunk-51n463p1.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { hKe, ATr } from "B:/~BUN/root/chunk-90zbw58x.js";
function tKt(i) {
  let n = {
    entries: new Map(),
    burst: i?.burst ?? 3,
    refillMs: i?.refillMs ?? 1e4,
    retryMs: i?.retryMs ?? 60000,
    isOwnTitle: i?.isOwnTitle ?? (() => !1),
    onRemoteTitleAdopted: i?.onRemoteTitleAdopted ?? (() => {})
  };
  return {
    update: (e, r, s) => h(n, e, r, s),
    noteRemoteTitle: (e, r) => S(n, e, r),
    forget: e => R(n, e),
    hasSent: (e, r) => n.entries.get(e)?.sentTitles.has(r) ?? !1,
    isKnownTitle: (e, r) => n.entries.get(e)?.knownTitles.has(r) ?? !1
  };
}
function c(i, n) {
  let e = i.entries.get(n);
  if (!e) e = {
    lastSentTitle: void 0,
    lastSentOk: !1,
    sentTitles: new Set(),
    knownTitles: new Set(),
    tokens: i.burst,
    refilledAt: Date.now(),
    pending: void 0,
    inFlight: !1,
    timer: void 0,
    retryTimer: void 0,
    sendingRetry: !1,
    suppressed: 0
  }, i.entries.set(n, e);
  return e;
}
function h(i, n, title, opts) {
  let s = c(i, n);
  if (y(s, title, opts)) return T(s), Promise.resolve();
  return new Promise(d => {
    let waiters = [d];
    if (a(s), s.pending || s.inFlight) {
      if (s.suppressed === 0) p("bridge_session_patch", "title_write_coalesced");
      s.suppressed += 1;
    }
    f(s.pending?.waiters), s.pending = {
      title: title,
      opts: opts,
      waiters: waiters
    }, s.sendingRetry = !1, g(i, n);
  });
}
function k(i, n, e) {
  let r = Math.floor((e - n.refilledAt) / i.refillMs);
  if (r > 0) n.tokens = Math.min(i.burst, n.tokens + r), n.refilledAt += r * i.refillMs;
  if (n.tokens === i.burst) n.refilledAt = e;
}
function g(i, n) {
  let e = i.entries.get(n);
  if (!e || e.inFlight || !e.pending) return;
  let r = Date.now();
  if (k(i, e, r), e.tokens <= 0 && !e.pending.opts?.userInitiated) {
    if (!e.timer) {
      let o = Math.max(0, e.refilledAt + i.refillMs - r);
      e.timer = setTimeout(W, o, i, n), e.timer.unref?.();
    }
    return;
  }
  let {
    title: title_2,
    opts: opts_2,
    waiters: waiters_2
  } = e.pending;
  if (e.pending = void 0, y(e, title_2, opts_2) || opts_2?.shouldSend !== void 0 && !opts_2.shouldSend()) {
    a(e), e.sendingRetry = !1, e.suppressed = 0, f(waiters_2);
    return;
  }
  e.tokens = Math.max(0, e.tokens - 1), e.inFlight = !0, e.lastSentTitle = title_2, e.lastSentOk = !1, e.sentTitles.add(title_2), e.knownTitles.add(title_2), a(e);
  let sendingRetry = e.sendingRetry;
  if (e.sendingRetry = !1, e.suppressed > 0) t(`[bridge] title write: sending latest after coalescing ${e.suppressed} update(s)`), e.suppressed = 0;
  ATr(n, title_2, opts_2).then(o => {
    if (o === "landed") e.lastSentTitle = title_2, e.lastSentOk = !0;else if (e.lastSentTitle === title_2) e.lastSentOk = !1;
    if (i.entries.get(n) !== e) return;
    if (o === "failed" && !sendingRetry && !e.retryTimer && !e.pending) e.retryTimer = setTimeout(v, i.retryMs, i, n, title_2, opts_2), e.retryTimer.unref?.();
  }, o => {
    t(`[bridge] title write failed: ${l(o)}`);
  }).finally(() => {
    e.inFlight = !1, f(waiters_2), g(i, n);
  });
}
function W(i, n) {
  let e = i.entries.get(n);
  if (e) e.timer = void 0, g(i, n);
}
function v(i, n, title_3, opts_3) {
  let s = i.entries.get(n);
  if (!s) return;
  if (s.retryTimer = void 0, !m(i, s, n, title_3)) return;
  if (opts_3?.shouldSend !== void 0 && !opts_3.shouldSend()) {
    t("[bridge] title write retry dropped: sending is now barred");
    return;
  }
  hKe(n, {
    baseUrl: opts_3?.baseUrl,
    getAccessToken: opts_3?.getAccessToken,
    credentials: opts_3?.credentials
  }).then(d => {
    if (!m(i, s, n, title_3)) return;
    if (d === null) {
      t("[bridge] title write retry skipped: server state unreadable");
      return;
    }
    if (d.title && !s.knownTitles.has(d.title) && !i.isOwnTitle(n, d.title)) {
      t("[bridge] title write retry dropped: the session was renamed elsewhere"), S(i, n, d.title), i.onRemoteTitleAdopted(n, d.title);
      return;
    }
    s.pending = {
      title: title_3,
      opts: opts_3,
      waiters: []
    }, s.sendingRetry = !0, g(i, n);
  }, d => {
    t(`[bridge] title write retry skipped: ${l(d)}`);
  });
}
function m(i, n, e, r) {
  return i.entries.get(e) === n && n.lastSentTitle === r && !n.lastSentOk && !n.inFlight && !n.pending && !n.retryTimer;
}
function S(i, n, e) {
  let r = c(i, n);
  r.lastSentTitle = e, r.lastSentOk = !0, r.knownTitles.add(e), a(r), T(r);
}
function R(i, n) {
  let e = i.entries.get(n);
  if (!e) return;
  if (e.timer) clearTimeout(e.timer);
  a(e), T(e), i.entries.delete(n);
}
function T(i) {
  f(i.pending?.waiters), i.pending = void 0, i.sendingRetry = !1, i.suppressed = 0;
}
function a(i) {
  if (i.retryTimer) clearTimeout(i.retryTimer), i.retryTimer = void 0;
}
function f(i) {
  for (let n of i ?? []) n();
}
function y(i, n, e) {
  if (i.lastSentTitle !== n) return !1;
  if (i.inFlight || i.retryTimer !== void 0) return !0;
  return i.lastSentOk && !e?.userInitiated;
}
export { tKt };