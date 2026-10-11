// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { q, j } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { _, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { Hh, Kk } from "B:/~BUN/root/chunk-83yxmdy5.js";
import { Uf, AB, uz } from "B:/~BUN/root/chunk-affnknva.js";
import { o, E, M, ae, C, u, z, A } from "B:/~BUN/root/chunk-n8qdr73v.js";
var S = 4000,
  gvt = 16,
  h = 64,
  mno = f(() => u({
    action: A("yield_artifact_replies"),
    from: o().max(512),
    msg_id: o().min(1).max(128),
    session_id: o().max(512),
    slugs: C(o().max(128)).max(gvt),
    reason: z(["resume", "claim"]).catch("claim"),
    sent_at: E().finite(),
    claimed_at: E().finite().optional(),
    requester: u({
      cwd: ae().optional(),
      tmux: ae().optional()
    }).optional()
  })),
  gno = f(() => u({
    action: A("artifact_replies_yielded"),
    orig_msg_id: o().max(128),
    yielded: ae().optional(),
    not_held: ae().optional(),
    refused: ae().optional()
  })),
  hno = f(() => u({
    action: A("unyield_artifact_replies"),
    orig_msg_id: o().max(128),
    slugs: C(o().max(128)).max(gvt),
    stopped: M().optional()
  })),
  G3t = {
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
var T = new q(() => new k());
function m() {
  return T.of(j().host);
}
function b(e, i) {
  while (e.size > h) {
    let n = e.keys().next().value;
    if (n === void 0) break;
    let r = e.get(n);
    e.delete(n), i?.(r, n);
  }
}
function yno(e, i, n) {
  let timers = n.timers ?? G3t,
    s = m();
  return new Promise(resolve => {
    let a = {
      asked: new Set(i),
      expectPid: n.expectPid,
      sentAt: n.sentAt,
      lost: new Map(),
      resolve: resolve,
      onLate: n.onLate,
      timer: void 0,
      timers: timers
    };
    a.timer = timers.setTimeout(() => {
      if (s.outstanding.get(e) !== a || a.resolve === null) return;
      if (a.resolve = null, resolve({
        kind: "timeout",
        lost: [...a.lost.keys()],
        lostTo: [...a.lost]
      }), a.onLate === void 0) s.outstanding.delete(e);
    }, n.timeoutMs ?? S), s.outstanding.set(e, a), b(s.outstanding, l => {
      l.timers.clearTimeout(l.timer), l.resolve?.({
        kind: "timeout",
        lost: [...l.lost.keys()],
        lostTo: [...l.lost]
      }), l.resolve = null;
    });
  });
}
function _no(e, sentAt) {
  let id = `claim-${sentAt}-${Math.random().toString(36).slice(2)}`,
    r = m(),
    s = {
      id: id,
      slugs: new Set(e),
      sentAt: sentAt,
      lost: new Map(),
      end: () => void r.pendingClaims.delete(id)
    };
  return r.pendingClaims.set(id, s), s;
}
function bno(e) {
  let i = m(),
    n = i.outstanding.get(e);
  if (n === void 0) return [];
  return n.timers.clearTimeout(n.timer), i.outstanding.delete(e), [...n.lost];
}
function Sno(e) {
  return typeof e === "string" && m().outstanding.has(e);
}
function wno(e, i) {
  let n = m(),
    r = n.outstanding.get(e.orig_msg_id);
  if (r === void 0) return !1;
  if (r.expectPid !== void 0 && i !== void 0 && i !== r.expectPid) return p("artifact_live_subscribe", "yield_answer_pid_mismatch"), !1;
  r.timers.clearTimeout(r.timer);
  let s = a => Array.isArray(a) ? a.filter(item => typeof item === "string" && r.asked.has(item)) : [],
    g = e.refused === !0 ? {
      kind: "refused"
    } : {
      kind: "yielded",
      yielded: s(e.yielded),
      notHeld: s(e.not_held)
    };
  if (r.resolve !== null) n.outstanding.delete(e.orig_msg_id), r.resolve({
    ...g,
    lost: [...r.lost.keys()],
    lostTo: [...r.lost]
  });else {
    n.outstanding.delete(e.orig_msg_id), _("artifact_live_subscribe", {
      yield_answer_late: !0
    });
    try {
      r.onLate?.({
        ...g,
        lost: [...r.lost.keys()],
        lostTo: [...r.lost]
      });
    } catch (error) {
      d(error);
    }
  }
  return !0;
}
function Slr(e, i = null) {
  let n = m();
  n.holder = e, n.reverter = i;
}
function P(e, i, n, r) {
  let s = e.delivered.get(i);
  e.delivered.delete(i);
  let pid = r?.pid ?? s?.pid;
  e.delivered.set(i, {
    slugs: new Set([...(s?.slugs ?? []), ...n]),
    pid: pid,
    procStart: r?.procStart ?? s?.procStart
  });
  let a = (l, y) => {
    try {
      e.reverter?.(y, [...l.slugs]);
    } catch (error) {
      d(error);
    }
  };
  while (e.delivered.size > h) {
    let l = [...e.delivered].find(([y, c]) => y !== i && pid !== void 0 && c.pid === pid);
    if (l === void 0) break;
    e.delivered.delete(l[0]), a(l[1], l[0]);
  }
  b(e.delivered, a);
}
function H(e, i) {
  if (e.delivered.size < h) return !1;
  if (i === void 0) return !0;
  for (let n of e.delivered.values()) if (n.pid === i) return !1;
  return !0;
}
function vno(e) {
  return x(m(), e);
}
function x(e, i) {
  let n = [];
  for (let [r, s] of [...e.delivered]) if (s.pid !== void 0 && Hh(s.pid)) n.push(...R(e, r, [...s.slugs], i));
  return D(e), n;
}
function kno(e) {
  let i = m();
  for (let [n, r] of [...i.delivered]) if (r.slugs.delete(e) && r.slugs.size === 0) i.delivered.delete(n);
}
async function D(e) {
  for (let [i, n] of [...e.delivered]) {
    if (n.pid === void 0 || n.procStart === void 0) continue;
    let r;
    try {
      r = await Kk(n.pid, n.procStart);
    } catch {
      r = void 0;
    }
    if (r === !1 && e.delivered.get(i) === n) _("artifact_comments_autoreact", {
      yield_taker_reused: !0
    }), R(e, i, [...n.slugs]);
  }
}
function R(e, i, n, r) {
  let s = e.delivered.get(i);
  if (s === void 0) return [];
  let g = [...n].filter(item => s.slugs.delete(item));
  if (s.slugs.size === 0) e.delivered.delete(i);
  if (g.length === 0) return [];
  try {
    return e.reverter?.(i, g, r) ?? [];
  } catch (error) {
    return d(error), [];
  }
}
function wlr(e, i = null) {
  let n = m();
  n.sendAnswer = e, n.ownAddress = i;
}
function L(e, i) {
  let n = i.claimed_at ?? i.sent_at,
    r = !1,
    s = [...e.pendingClaims.values()];
  for (let [id_2, a] of e.outstanding) if (a.resolve !== null) s.push({
    id: id_2,
    slugs: a.asked,
    sentAt: a.sentAt,
    lost: a.lost
  });
  for (let g of s) {
    if (!i.slugs.some(item => g.slugs.has(item))) continue;
    if (n > g.sentAt || n === g.sentAt && i.from > (e.ownAddress ?? "")) {
      for (let l of i.slugs) if (g.slugs.has(l)) g.lost.set(l, i.from);
    } else r = !0;
  }
  return r ? "refuse" : "proceed";
}
function vlr(e, i, n, r, s) {
  let g = n?.pid,
    a = n?.writeToken,
    l = m(),
    sendAnswer = l.sendAnswer;
  if (sendAnswer === null) return;
  let c;
  if (s?.refuse === !0) c = "refused";else if (r - e.sent_at > S - 500 || e.sent_at > r + 1000 || e.claimed_at !== void 0 && e.claimed_at > e.sent_at + 1000) p("artifact_comments_autoreact", "yield_request_stale"), c = "refused";else if (L(l, e) === "refuse") c = "refused";else if (l.holder === null) c = {
    yielded: [],
    notHeld: [...e.slugs]
  };else try {
    if (x(l, {
      transferring: new Set(e.slugs)
    }), H(l, n?.pid)) p("artifact_comments_autoreact", "yield_table_full"), c = "refused";else c = l.holder({
      msgId: e.msg_id,
      slugs: e.slugs,
      reason: e.reason,
      requester: {
        cwd: e.requester?.cwd,
        tmux: e.requester?.tmux
      }
    });
  } catch (error) {
    d(error), p("artifact_comments_autoreact", "yield_handler_threw"), c = "refused";
  }
  let Y = c === "refused" ? {
      orig_msg_id: e.msg_id,
      yielded: [],
      not_held: [],
      refused: !0
    } : {
      orig_msg_id: e.msg_id,
      yielded: c.yielded.slice(0, gvt),
      not_held: c.notHeld.slice(0, gvt)
    },
    w = c !== "refused" && c.yielded.length > 0 ? c : null;
  if (w !== null) P(l, e.msg_id, w.yielded, n);
  sendAnswer(i, Y, g, a).then(() => w?.onDelivered?.(), v => {
    if (t(`[reply-yield] answer to ${Uf(i)} failed: ${AB(String(v))}`), w === null) return;
    if (!uz(v)) {
      p("artifact_comments_autoreact", "yield_answer_send_ambiguous"), sendAnswer(i, Y, g, a).catch(() => {}), w.onDelivered?.();
      return;
    }
    p("artifact_comments_autoreact", "yield_answer_undelivered"), R(l, e.msg_id, w.yielded);
  });
}
function Eno(e, i) {
  let n = m(),
    r = n.delivered.get(e.orig_msg_id);
  if (r === void 0) return !1;
  if (r.pid !== void 0 && i !== void 0 && i !== r.pid) return p("artifact_comments_autoreact", "unyield_pid_mismatch"), !1;
  let s = R(n, e.orig_msg_id, e.slugs, {
    ...(e.stopped === !0 && {
      stopped: new Set(e.slugs)
    })
  });
  return s.push(...x(n)), _("artifact_comments_autoreact", {
    yield_handed_back: s.length
  }), !0;
}
export { gvt, mno, gno, hno, G3t, yno, _no, bno, Sno, wno, Slr, vno, kno, wlr, vlr, Eno };