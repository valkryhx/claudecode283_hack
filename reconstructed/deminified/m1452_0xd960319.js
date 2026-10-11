// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { qe, we } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { _, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { M$, O } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { n4n } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { O1 } from "B:/~BUN/root/chunk-3wnb3s8p.js";
import { oa } from "B:/~BUN/root/chunk-3jyp964r.js";
import { qt } from "B:/~BUN/root/chunk-9xz983aj.js";
import { xv } from "B:/~BUN/root/chunk-v4qhg3t2.js";
import { Ws } from "B:/~BUN/root/chunk-mmnpv22v.js";
import { Uf, AB, uz, xee, dat, JOt, LV } from "B:/~BUN/root/chunk-affnknva.js";
import { ee } from "B:/~BUN/root/chunk-65tbbnf1.js";
import { gvt, G3t, yno, bno, Slr } from "B:/~BUN/root/chunk-86z0hexb.js";
import { F3t, hlr, u7 } from "B:/~BUN/root/chunk-awyadv01.js";
import { joe, f7, h6t, Zm, bg, zlr, pro, fro, mro, hro, yro, hM, bpe, CU, SZe } from "B:/~BUN/root/chunk-1mdmjaqt.js";
import { hze } from "B:/~BUN/root/chunk-t82zs1e5.js";
import { KSe } from "B:/~BUN/root/chunk-tvk6phkz.js";
import { pz } from "B:/~BUN/root/chunk-ymhw5dt2.js";
import { qi } from "B:/~BUN/root/chunk-vr3kcvgy.js";
import { ua } from "B:/~BUN/root/chunk-358c43wz.js";
var z = 1000,
  Q = 200,
  w = {
    armable: new Set(),
    yielded: new Set(),
    undo: () => {}
  };
async function Z() {
  let n = (await JOt()).find(item => item.pid === process.pid);
  return n === void 0 ? void 0 : {
    sessionId: n.sessionId,
    tmux: n.tmux
  };
}
async function NKo(e) {
  let n = await te(e).finally(() => e.claim?.end());
  if (n.kind === "took_over") _("artifact_live_subscribe", {
    took_over: !0,
    holders: e.holders.length,
    armable_count: n.armable.size,
    yielded_count: n.yielded.size
  });else p("artifact_live_subscribe", `takeover_${n.kind}`, {
    holders: e.holders.length
  });
  return n;
}
async function te(e) {
  if (!Ws()) return {
    ...w,
    kind: "messaging_off"
  };
  let n = LV();
  if (n === void 0 || e.holders.length === 0) return {
    ...w,
    kind: "no_inbox"
  };
  let r = xv(n),
    a = e.transport?.ownRecord ?? Z,
    s = await a().catch(() => {
      return;
    });
  if (s?.sessionId !== e.conversationId) {
    let o = e.transport?.timers ?? G3t;
    await new Promise(d => void o.setTimeout(d, Q)), s = await a().catch(() => {
      return;
    });
  }
  if (s?.sessionId !== e.conversationId) return {
    ...w,
    kind: "registry_stale"
  };
  let tmux = s.tmux;
  if (e.holdersIncomplete === !0 && !e.alreadyReplying) return {
    ...w,
    kind: "holder_unreachable"
  };
  let f = e.slugs.filter(item => !(e.claim?.lost.has(item) ?? !1)).slice(0, gvt);
  if (f.length === 0) return {
    ...w,
    kind: "nothing_freed"
  };
  let g = [];
  for (let o of e.holders) {
    if (o.sock === void 0 || o.sock === "" || !(o.peerFeatures?.includes(n4n) ?? !1) || xv(o.sock) === r || F3t(o.kind)) {
      if (e.alreadyReplying) continue;
      return {
        ...w,
        kind: "holder_unreachable"
      };
    }
    g.push({
      sock: o.sock,
      pid: o.pid
    });
  }
  if (g.length === 0) return {
    ...w,
    kind: "holder_unreachable"
  };
  let c = e.transport?.send ?? dat,
    u = e.transport?.sendControl ?? xee,
    I = e.transport?.timers ?? G3t,
    T = e.transport?.now ?? Date.now,
    G = O1(n),
    Y = expectPeerPid => O() !== "windows" ? {
      expectPeerPid: expectPeerPid
    } : {},
    v = [],
    D = new Set(),
    {
      wakes: wakes,
      autoReact: autoReact,
      durable: durable
    } = ee(),
    W = o => {
      for (let d of o.yielded) {
        let i = wakes.takenFrom.get(d) ?? [];
        if (!i.some(item => item.msgId === o.msgId)) wakes.takenFrom.set(d, [...i, {
          sock: o.sock,
          pid: o.pid,
          msgId: o.msgId
        }]);
        if (e.alreadyReplying && (autoReact.userDisarmed || durable.stopLatches.isStopped(d) || Zm(d) && !bg(d))) mto(d, u);
      }
    },
    U = e.claim?.sentAt ?? T(),
    A = (o, d, i) => {
      let slugs = i?.precautionary !== void 0 ? [...i.precautionary] : [...o.yielded].filter(item => d === void 0 || d.has(item));
      if (slugs.length === 0) return;
      for (let m of slugs) o.yielded.delete(m);
      _("artifact_live_subscribe", {
        [i?.precautionary !== void 0 ? "takeover_unyield_precautionary" : "takeover_handed_back"]: slugs.length
      });
      let k = {
        action: "unyield_artifact_replies",
        orig_msg_id: o.msgId,
        slugs: slugs,
        ...(i?.stopped === !0 && {
          stopped: !0
        })
      };
      u(o.sock, k, Y(o.pid)).catch(m => {
        if (t(`[reply-yield] unyield to ${Uf(o.sock)} failed: ${AB(String(m))}`), uz(m) && !ua(o.pid)) {
          p("artifact_live_subscribe", "unyield_holder_gone");
          return;
        }
        let h = () => void u(o.sock, k, Y(o.pid)).catch(() => {
          p("artifact_live_subscribe", "unyield_send_failed");
        });
        if (uz(m)) I.setTimeout(h, z);else h();
      });
    },
    N = [];
  for (let o of g) {
    let d = pz(),
      i = {
        sock: o.sock,
        pid: o.pid,
        msgId: d.msg_id,
        yielded: new Set()
      };
    v.push(i);
    let y = yno(d.msg_id, f, {
      sentAt: U,
      expectPid: o.pid,
      ...(e.transport?.timeoutMs !== void 0 && {
        timeoutMs: e.transport.timeoutMs
      }),
      ...(e.transport?.timers !== void 0 && {
        timers: e.transport.timers
      }),
      onLate: k => {
        if (k.kind !== "yielded") return;
        for (let h of k.yielded) i.yielded.add(h);
        let m = new Map([...(e.claim?.lost ?? []), ...k.lostTo]);
        A(i, new Set([...i.yielded].filter(item => m.has(item) ? q(item, i, m, e.alreadyReplying === !0) : !e.alreadyReplying && !D.has(item)))), W(i);
      }
    });
    N.push((async () => {
      try {
        await c(o.sock, {
          action: "yield_artifact_replies",
          from: G,
          session_id: e.conversationId,
          slugs: f,
          reason: e.reason,
          sent_at: T(),
          claimed_at: U,
          requester: {
            cwd: we(),
            ...(tmux !== void 0 && {
              tmux: tmux
            })
          }
        }, d, Y(o.pid));
      } catch (error) {
        if (uz(error)) {
          let lostTo = bno(d.msg_id),
            lost = lostTo.map(([J]) => J);
          return ua(o.pid) ? {
            kind: "unreachable",
            lost: lost,
            lostTo: lostTo
          } : {
            kind: "gone",
            lost: lost,
            lostTo: lostTo
          };
        }
      }
      return y;
    })());
  }
  let B = await Promise.all(N),
    P = new Map(),
    x = new Map(),
    L = new Map(),
    S = new Map(e.claim?.lost ?? []),
    C = !0,
    K = !1,
    F = 0;
  B.forEach((item, index) => {
    for (let [i, y] of item.lostTo) S.set(i, y);
    if (item.kind === "gone") return;
    if (F++, item.kind === "unreachable") {
      C = !1;
      return;
    }
    if (item.kind === "yielded") {
      for (let i of item.yielded) v[index].yielded.add(i), P.set(i, (P.get(i) ?? 0) + 1);
      for (let i of item.notHeld) x.set(i, (x.get(i) ?? 0) + 1);
      for (let i of new Set([...item.yielded, ...item.notHeld])) L.set(i, (L.get(i) ?? 0) + 1);
    } else if (C = !1, item.kind === "refused") K = !0;
  });
  let armable = new Set(),
    yielded = new Set();
  if (C && !K) for (let o of f) {
    if (S.has(o) || (L.get(o) ?? 0) !== F) continue;
    if ((P.get(o) ?? 0) > 0) armable.add(o), yielded.add(o);else if ((x.get(o) ?? 0) === F) armable.add(o);
  }
  for (let o of armable) D.add(o);
  if (e.alreadyReplying) {
    for (let o of v) for (let d of o.yielded) if (!S.has(d)) yielded.add(d);
  }
  for (let o of v) {
    let d = new Set([...o.yielded].filter(item => S.has(item) ? q(item, o, S, e.alreadyReplying === !0) : !e.alreadyReplying && !armable.has(item)));
    if (d.size > 0) A(o, d);
  }
  if (!e.alreadyReplying) B.forEach((item, index) => {
    if (item.kind === "timeout") A(v[index], void 0, {
      precautionary: f
    });
  });
  for (let o of v) W(o);
  return {
    armable: armable,
    yielded: yielded,
    kind: armable.size > 0 ? "took_over" : "nothing_freed",
    undo: o => {
      for (let i of v) A(i, o);
      let d = new Set(v.map(item => item.msgId));
      for (let i of o ?? f) {
        let y = (wakes.takenFrom.get(i) ?? []).filter(item => !d.has(item.msgId));
        if (y.length > 0) wakes.takenFrom.set(i, y);else wakes.takenFrom.delete(i);
      }
    }
  };
}
function q(e, n, r, a) {
  let s = r.get(e);
  return s !== void 0 && s === O1(n.sock) || !a && !hM(e);
}
function mto(e, n = xee) {
  j(e, !0, n);
}
function Fjo(e, n = xee) {
  j(e, !1, n);
}
function j(e, n, r) {
  let {
      wakes: wakes_2
    } = ee(),
    s = wakes_2.takenFrom.get(e);
  if (s === void 0 || hM(e)) return;
  wakes_2.takenFrom.delete(e);
  for (let l of s) {
    let f = {
        action: "unyield_artifact_replies",
        orig_msg_id: l.msgId,
        slugs: [e],
        ...(n && {
          stopped: !0
        })
      },
      g = O() !== "windows" ? {
        expectPeerPid: l.pid
      } : {};
    r(l.sock, f, g).catch(c => {
      if (t(`[reply-yield] release to ${Uf(l.sock)} failed: ${AB(String(c))}`), uz(c) && !ua(l.pid)) return;
      let u = () => void r(l.sock, f, g).catch(() => {
        p("artifact_live_subscribe", "takeover_release_failed");
      });
      if (uz(c)) G3t.setTimeout(u, z);else u();
    });
  }
  _("artifact_live_subscribe", {
    [n ? "takeover_stop_notified" : "takeover_released"]: s.length
  });
}
function H(e) {
  let n = e.slice(0, 2),
    r = e.length - n.length;
  return `${n.join(", ")}${r > 0 ? ` and ${r} more` : ""}`;
}
function Far(e, n, r, a) {
  let s = hlr({
      kind: "interactive",
      ...(typeof r.cwd === "string" && {
        cwd: r.cwd
      }),
      ...(typeof r.tmux === "string" && {
        tmux: r.tmux
      })
    }, a),
    l = n === "resume" ? `the session that just resumed this conversation in ${s}` : `another session of this conversation (${s}), which just published or resumed them there`;
  return `Automatic replies to comments on ${H(e)} moved to ${l}; this session keeps watching for new versions only. To take them back here, publish the Artifact again or ask Claude to resume its replies.`;
}
function $ar(e) {
  return `Automatic replies to comments on ${H(e)} are back in this session: the other session of this conversation did not keep them (it could not take them over, or it has since exited).`;
}
function Uar(e) {
  return `Automatic replies to comments on ${H(e)} were stopped in the other session of this conversation, so they stay off here too. To turn them back on, publish the Artifact again or ask Claude to resume its replies.`;
}
var oe = "Automatic replies to comments on the Artifact(s) this session was answering moved to another session of this same conversation on this machine, at its request; this session keeps its version watch only. Nothing to do \u2014 do not stop or re-arm a watch on your own; a publish the user asks for here takes them back.",
  ne = "The automatic comment replies this session had handed to another session of this conversation were stopped by the user there; they stay stopped here too. Nothing to do unless the user asks to resume them or to publish again.",
  ie = "The automatic comment replies are back with this session: the other session of this conversation did not keep them (it could not take them over, or it has since exited).";
function HKo(e, n) {
  let r = e === "yielded" ? `Comment replies on ${n} Artifact(s) moved to another session of this conversation` : e === "reverted" ? `Comment replies on ${n} Artifact(s) are back with this session` : `Comment replies on ${n} Artifact(s) were stopped in the other session`,
    a = e === "yielded" ? oe : e === "reverted" ? ie : ne;
  oa({
    value: qi({
      taskType: M$,
      summary: qt(r),
      body: `
<event>${qt(a)}</event>`
    }),
    mode: "task-notification",
    passive: !0,
    priority: "next",
    origin: {
      kind: "task-notification",
      source: M$
    },
    agentId: qe()
  });
}
function Bar(e) {
  return Slr(n => {
    let r = se(n.slugs, n.msgId),
      newlyYielded = r.newlyYielded;
    if (newlyYielded.length > 0) _("artifact_comments_autoreact", {
      yielded_to_other_session: newlyYielded.length
    });
    return {
      yielded: r.yielded,
      notHeld: r.notHeld,
      ...(newlyYielded.length > 0 && {
        onDelivered: () => {
          let s = newlyYielded.filter(item => hM(item));
          for (let l of s) pro(l);
          if (s.length > 0) e.yielded(s, n.reason, n.requester);
        }
      })
    };
  }, (n, r, a) => {
    for (let u of r) if (a?.stopped?.has(u) ?? !1) hro(u, n);
    let s = new Set(r.filter(item => yro(item))),
      l = new Set(r.filter(item => fro(item))),
      f = re(n, r),
      g = f.filter(item => l.has(item) && !Zm(item) && E(item) && !(a?.transferring?.has(item) ?? !1));
    if (g.length > 0) e.reverted(g);
    let c = f.filter(item => l.has(item) && s.has(item));
    if (c.length > 0) e.stoppedElsewhere(c);
    return f;
  }), () => Slr(null);
}
function se(e, n) {
  let {
      live: live,
      autoReact: autoReact_2,
      durable: durable_2
    } = ee(),
    yielded_2 = [],
    notHeld = [],
    newlyYielded_2 = [];
  for (let c of e) {
    if (hM(c)) {
      zlr(c, n), yielded_2.push(c);
      continue;
    }
    let u = E(c),
      I = bg(c) && !bpe(c),
      T = autoReact_2.enabledMemo !== !1 && !autoReact_2.userDisarmed && !durable_2.stopLatches.isStopped(c) && (!Zm(c) || I);
    if (!u || !T) {
      notHeld.push(c);
      continue;
    }
    zlr(c, n), f7(c), h6t(c), CU(live, c), yielded_2.push(c), newlyYielded_2.push(c);
  }
  return {
    yielded: yielded_2,
    notHeld: notHeld,
    newlyYielded: newlyYielded_2
  };
}
function E(e) {
  let {
      live: live_2
    } = ee(),
    r = live_2.supervisors.get(e);
  return r !== void 0 && !r.stopped && r.autoReactWiring !== void 0 || live_2.inFlightWiredIntent.has(e) || KSe().has(e);
}
function re(e, n) {
  let {
      live: live_3
    } = ee(),
    a = [];
  for (let s of n) {
    if (!mro(s, e)) continue;
    if (CU(live_3, s), Zm(s) && !bg(s)) hze(s), mto(s);
    a.push(s);
    let l = live_3.supervisors.get(s);
    if (!Zm(s) && !E(s)) Fjo(s);
    let lastWakeArgs = joe(s).lastWakeArgs;
    if (!Zm(s) && E(s) && l?.taskId !== void 0 && SZe(l.taskId) && lastWakeArgs !== null) u7({
      ...lastWakeArgs,
      seed: !1,
      confirm: void 0,
      confirmBase: void 0,
      confirmAfter: void 0,
      reentry: void 0,
      idlePass: void 0,
      suppressSummonStatus: void 0
    });
  }
  if (a.length > 0) _("artifact_comments_autoreact", {
    yield_reverted: a.length
  });
  return a;
}
export { NKo, mto, Fjo, Far, $ar, Uar, HKo, Bar };