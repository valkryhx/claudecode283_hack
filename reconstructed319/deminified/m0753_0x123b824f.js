// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { H } from "B:/~BUN/root/chunk-game8aqv.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { g, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { ph, Xy } from "B:/~BUN/root/chunk-xqymp2nr.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { q_, Z9, GZ } from "B:/~BUN/root/chunk-5gm1xyqv.js";
import { o, E, I, oe, C, u, B, T } from "B:/~BUN/root/chunk-4bfd0jkf.js";
var S = 4000,
  Ibn = 16,
  h = 64,
  Bsi = p(() => u({
    action: T("yield_artifact_replies"),
    from: o().max(512),
    msg_id: o().min(1).max(128),
    session_id: o().max(512),
    slugs: C(o().max(128)).max(Ibn),
    reason: B(["resume", "claim"]).catch("claim"),
    sent_at: E().finite(),
    claimed_at: E().finite().optional(),
    requester: u({
      cwd: oe().optional(),
      tmux: oe().optional()
    }).optional()
  })),
  jsi = p(() => u({
    action: T("artifact_replies_yielded"),
    orig_msg_id: o().max(128),
    yielded: oe().optional(),
    not_held: oe().optional(),
    refused: oe().optional()
  })),
  Wsi = p(() => u({
    action: T("unyield_artifact_replies"),
    orig_msg_id: o().max(128),
    slugs: C(o().max(128)).max(Ibn),
    stopped: I().optional()
  })),
  uZn = {
    setTimeout: (e, i) => {
      let n = setTimeout(e, i);
      return n.unref?.(), n;
    },
    clearTimeout: e => clearTimeout(e)
  };
class k {
  outstanding = new Map();
  pendingClaims = new Map();
  holder = null;
  reverter = null;
  sendAnswer = null;
  ownAddress = null;
  delivered = new Map();
  reset() {
    for (let e of this.outstanding.values()) e.timers.clearTimeout(e.timer);
    this.outstanding.clear(), this.pendingClaims.clear(), this.holder = null, this.reverter = null, this.sendAnswer = null, this.ownAddress = null, this.delivered.clear();
  }
}
var b = new W(() => new k());
function y() {
  return b.of(H().host);
}
function A(e, i) {
  while (e.size > h) {
    let n = e.keys().next().value;
    if (n === void 0) break;
    let r = e.get(n);
    e.delete(n), i?.(r, n);
  }
}
function zsi(e, i, n) {
  let timers = n.timers ?? uZn,
    s = y();
  return new Promise(resolve => {
    let d = {
      asked: new Set(i),
      expectPid: n.expectPid,
      sentAt: n.sentAt,
      lost: new Map(),
      resolve: resolve,
      onLate: n.onLate,
      timer: void 0,
      timers: timers
    };
    d.timer = timers.setTimeout(() => {
      if (s.outstanding.get(e) !== d || d.resolve === null) return;
      if (d.resolve = null, resolve({
        kind: "timeout",
        lost: [...d.lost.keys()],
        lostTo: [...d.lost]
      }), d.onLate === void 0) s.outstanding.delete(e);
    }, n.timeoutMs ?? S), s.outstanding.set(e, d), A(s.outstanding, l => {
      l.timers.clearTimeout(l.timer), l.resolve?.({
        kind: "timeout",
        lost: [...l.lost.keys()],
        lostTo: [...l.lost]
      }), l.resolve = null;
    });
  });
}
function Gsi(e, sentAt) {
  let id = `claim-${sentAt}-${Math.random().toString(36).slice(2)}`,
    r = y(),
    s = {
      id: id,
      slugs: new Set(e),
      sentAt: sentAt,
      lost: new Map(),
      end: () => void r.pendingClaims.delete(id)
    };
  return r.pendingClaims.set(id, s), s;
}
function Vsi(e) {
  let i = y(),
    n = i.outstanding.get(e);
  if (n === void 0) return [];
  return n.timers.clearTimeout(n.timer), i.outstanding.delete(e), [...n.lost];
}
function Ksi(e) {
  return typeof e === "string" && y().outstanding.has(e);
}
function qsi(e, i) {
  let n = y(),
    r = n.outstanding.get(e.orig_msg_id);
  if (r === void 0) return !1;
  if (r.expectPid !== void 0 && i !== void 0 && i !== r.expectPid) return c("artifact_live_subscribe", "yield_answer_pid_mismatch"), !1;
  r.timers.clearTimeout(r.timer);
  let s = d => Array.isArray(d) ? d.filter(item => typeof item === "string" && r.asked.has(item)) : [],
    f = e.refused === !0 ? {
      kind: "refused"
    } : {
      kind: "yielded",
      yielded: s(e.yielded),
      notHeld: s(e.not_held)
    };
  if (r.resolve !== null) n.outstanding.delete(e.orig_msg_id), r.resolve({
    ...f,
    lost: [...r.lost.keys()],
    lostTo: [...r.lost]
  });else {
    n.outstanding.delete(e.orig_msg_id), g("artifact_live_subscribe", {
      yield_answer_late: !0
    });
    try {
      r.onLate?.({
        ...f,
        lost: [...r.lost.keys()],
        lostTo: [...r.lost]
      });
    } catch (error) {
      a(error);
    }
  }
  return !0;
}
function $Ko(e, i = null) {
  let n = y();
  n.holder = e, n.reverter = i;
}
function z(e, i, n, r) {
  let s = e.delivered.get(i);
  e.delivered.delete(i);
  let pid = r?.pid ?? s?.pid;
  e.delivered.set(i, {
    slugs: new Set([...(s?.slugs ?? []), ...n]),
    pid: pid,
    procStart: r?.procStart ?? s?.procStart
  });
  let d = (l, _) => {
    try {
      e.reverter?.(_, [...l.slugs]);
    } catch (error) {
      a(error);
    }
  };
  while (e.delivered.size > h) {
    let l = [...e.delivered].find(([_, m]) => _ !== i && pid !== void 0 && m.pid === pid);
    if (l === void 0) break;
    e.delivered.delete(l[0]), d(l[1], l[0]);
  }
  A(e.delivered, d);
}
function P(e, i) {
  if (e.delivered.size < h) return !1;
  if (i === void 0) return !0;
  for (let n of e.delivered.values()) if (n.pid === i) return !1;
  return !0;
}
function Ysi() {
  return x(y());
}
function x(e, i) {
  let n = [];
  for (let [r, s] of [...e.delivered]) if (s.pid !== void 0 && ph(s.pid)) n.push(...R(e, r, [...s.slugs], i));
  return M(e), n;
}
function Xsi(e) {
  let i = y();
  for (let [n, r] of [...i.delivered]) if (r.slugs.delete(e) && r.slugs.size === 0) i.delivered.delete(n);
}
async function M(e) {
  for (let [i, n] of [...e.delivered]) {
    if (n.pid === void 0 || n.procStart === void 0) continue;
    let r;
    try {
      r = await Xy(n.pid, n.procStart);
    } catch {
      r = void 0;
    }
    if (r === !1 && e.delivered.get(i) === n) g("artifact_comments_autoreact", {
      yield_taker_reused: !0
    }), R(e, i, [...n.slugs]);
  }
}
function R(e, i, n, r) {
  let s = e.delivered.get(i);
  if (s === void 0) return [];
  let f = [...n].filter(item => s.slugs.delete(item));
  if (s.slugs.size === 0) e.delivered.delete(i);
  if (f.length === 0) return [];
  try {
    return e.reverter?.(i, f, r) ?? [];
  } catch (error) {
    return a(error), [];
  }
}
function UKo(e, i = null) {
  let n = y();
  n.sendAnswer = e, n.ownAddress = i;
}
function D(e, i) {
  let n = i.claimed_at ?? i.sent_at,
    r = !1,
    s = [...e.pendingClaims.values()];
  for (let [id_2, d] of e.outstanding) if (d.resolve !== null) s.push({
    id: id_2,
    slugs: d.asked,
    sentAt: d.sentAt,
    lost: d.lost
  });
  for (let f of s) {
    if (!i.slugs.some(item => f.slugs.has(item))) continue;
    if (n > f.sentAt || n === f.sentAt && i.from > (e.ownAddress ?? "")) {
      for (let l of i.slugs) if (f.slugs.has(l)) f.lost.set(l, i.from);
    } else r = !0;
  }
  return r ? "refuse" : "proceed";
}
function BKo(e, i, n, r, s) {
  let f = n?.pid,
    d = n?.writeToken,
    l = y(),
    sendAnswer = l.sendAnswer;
  if (sendAnswer === null) return;
  let m;
  if (s?.refuse === !0) m = "refused";else if (r - e.sent_at > S - 500 || e.sent_at > r + 1000 || e.claimed_at !== void 0 && e.claimed_at > e.sent_at + 1000) c("artifact_comments_autoreact", "yield_request_stale"), m = "refused";else if (D(l, e) === "refuse") m = "refused";else if (l.holder === null) m = {
    yielded: [],
    notHeld: [...e.slugs]
  };else try {
    if (x(l, {
      transferring: new Set(e.slugs)
    }), P(l, n?.pid)) c("artifact_comments_autoreact", "yield_table_full"), m = "refused";else m = l.holder({
      msgId: e.msg_id,
      slugs: e.slugs,
      reason: e.reason,
      requester: {
        cwd: e.requester?.cwd,
        tmux: e.requester?.tmux
      }
    });
  } catch (error) {
    a(error), c("artifact_comments_autoreact", "yield_handler_threw"), m = "refused";
  }
  let Y = m === "refused" ? {
      orig_msg_id: e.msg_id,
      yielded: [],
      not_held: [],
      refused: !0
    } : {
      orig_msg_id: e.msg_id,
      yielded: m.yielded.slice(0, Ibn),
      not_held: m.notHeld.slice(0, Ibn)
    },
    w = m !== "refused" && m.yielded.length > 0 ? m : null;
  if (w !== null) z(l, e.msg_id, w.yielded, n);
  sendAnswer(i, Y, f, d).then(() => w?.onDelivered?.(), v => {
    if (t(`[reply-yield] answer to ${q_(i)} failed: ${Z9(String(v))}`), w === null) return;
    if (!GZ(v)) {
      c("artifact_comments_autoreact", "yield_answer_send_ambiguous"), sendAnswer(i, Y, f, d).catch(() => {}), w.onDelivered?.();
      return;
    }
    c("artifact_comments_autoreact", "yield_answer_undelivered"), R(l, e.msg_id, w.yielded);
  });
}
function Jsi(e, i) {
  let n = y(),
    r = n.delivered.get(e.orig_msg_id);
  if (r === void 0) return !1;
  if (r.pid !== void 0 && i !== void 0 && i !== r.pid) return c("artifact_comments_autoreact", "unyield_pid_mismatch"), !1;
  let s = R(n, e.orig_msg_id, e.slugs, {
    ...(e.stopped === !0 && {
      stopped: new Set(e.slugs)
    })
  });
  return s.push(...x(n)), g("artifact_comments_autoreact", {
    yield_handed_back: s.length
  }), !0;
}
export { Ibn, Bsi, jsi, Wsi, uZn, zsi, Gsi, Vsi, Ksi, qsi, $Ko, Ysi, Xsi, UKo, BKo, Jsi };