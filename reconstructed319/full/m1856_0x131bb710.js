// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  st,
  Ee
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  g,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  A5
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  zi
} from "B:/~BUN/root/chunk-5bb21frh.js";
import {
  nEo
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  x
} from "B:/~BUN/root/chunk-mwfggkjt.js";
import {
  vJ
} from "B:/~BUN/root/chunk-xqymp2nr.js";
import {
  El
} from "B:/~BUN/root/chunk-pzs4x0zd.js";
import {
  Xt
} from "B:/~BUN/root/chunk-jgwwv4gf.js";
import {
  TO
} from "B:/~BUN/root/chunk-smrt7z22.js";
import {
  ll
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  te
} from "B:/~BUN/root/chunk-6v74v9ar.js";
import {
  jl
} from "B:/~BUN/root/chunk-rzc1dapy.js";
import {
  q_,
  Z9,
  GZ,
  vJe,
  rZt,
  b0n,
  Woe
} from "B:/~BUN/root/chunk-5gm1xyqv.js";
import {
  Ibn,
  uZn,
  zsi,
  Vsi,
  $Ko
} from "B:/~BUN/root/chunk-kss98j6d.js";
import {
  oqt
} from "B:/~BUN/root/chunk-61tvx6vn.js";
import {
  oZn,
  DKo,
  jke
} from "B:/~BUN/root/chunk-z0mc9zd3.js";
import {
  mCt
} from "B:/~BUN/root/chunk-3md6z7eb.js";
import {
  S6e
} from "B:/~BUN/root/chunk-xp5ya8v1.js";
import {
  UOe,
  zhe,
  Ybn,
  mb,
  CS,
  t4o,
  hai,
  gai,
  yai,
  bai,
  Sai,
  VG,
  vBe,
  a$
} from "B:/~BUN/root/chunk-dq64svjd.js";
import {
  qZ
} from "B:/~BUN/root/chunk-x6ny3ghw.js";
var z = 1000,
  Q = 200,
  w = {
    armable: new Set,
    yielded: new Set,
    undo: () => {}
  };
async function Z() {
  let n = (await b0n()).find((r) => r.pid === process.pid);
  return n === void 0 ? void 0 : {
    sessionId: n.sessionId,
    tmux: n.tmux
  }
}
async function hya(e) {
  let n = await ee(e).finally(() => e.claim?.end());
  if (n.kind === "took_over") g("artifact_live_subscribe", {
    took_over: !0,
    holders: e.holders.length,
    armable_count: n.armable.size,
    yielded_count: n.yielded.size
  });
  else c("artifact_live_subscribe", `takeover_${n.kind}`, {
    holders: e.holders.length
  });
  return n
}
async function ee(e) {
  if (!jl()) return {
    ...w,
    kind: "messaging_off"
  };
  let n = Woe();
  if (n === void 0 || e.holders.length === 0) return {
    ...w,
    kind: "no_inbox"
  };
  let r = TO(n),
    a = e.transport?.ownRecord ?? Z,
    s = await a().catch(() => {
      return
    });
  if (s?.sessionId !== e.conversationId) {
    let o = e.transport?.timers ?? uZn;
    await new Promise((d) => void o.setTimeout(d, Q)), s = await a().catch(() => {
      return
    })
  }
  if (s?.sessionId !== e.conversationId) return {
    ...w,
    kind: "registry_stale"
  };
  let l = s.tmux;
  if (e.holdersIncomplete === !0 && !e.alreadyReplying) return {
    ...w,
    kind: "holder_unreachable"
  };
  let p = e.slugs.filter((o) => !(e.claim?.lost.has(o) ?? !1)).slice(0, Ibn);
  if (p.length === 0) return {
    ...w,
    kind: "nothing_freed"
  };
  let h = [];
  for (let o of e.holders) {
    if (o.sock === void 0 || o.sock === "" || !(o.peerFeatures?.includes(nEo) ?? !1) || TO(o.sock) === r || oZn(o.kind)) {
      if (e.alreadyReplying) continue;
      return {
        ...w,
        kind: "holder_unreachable"
      }
    }
    h.push({
      sock: o.sock,
      pid: o.pid
    })
  }
  if (h.length === 0) return {
    ...w,
    kind: "holder_unreachable"
  };
  let u = e.transport?.send ?? rZt,
    f = e.transport?.sendControl ?? vJe,
    I = e.transport?.timers ?? uZn,
    T = e.transport?.now ?? Date.now,
    G = vJ(n),
    Y = (o) => x() !== "windows" ? {
      expectPeerPid: o
    } : {},
    v = [],
    D = new Set,
    {
      wakes: b,
      autoReact: X,
      durable: V
    } = te(),
    W = (o) => {
      for (let d of o.yielded) {
        let i = b.takenFrom.get(d) ?? [];
        if (!i.some((y) => y.msgId === o.msgId)) b.takenFrom.set(d, [...i, {
          sock: o.sock,
          pid: o.pid,
          msgId: o.msgId
        }]);
        if (e.alreadyReplying && (X.userDisarmed || V.stopLatches.isStopped(d) || mb(d) && !CS(d))) isi(d, f)
      }
    },
    U = e.claim?.sentAt ?? T(),
    A = (o, d, i) => {
      let y = i?.precautionary !== void 0 ? [...i.precautionary] : [...o.yielded].filter((m) => d === void 0 || d.has(m));
      if (y.length === 0) return;
      for (let m of y) o.yielded.delete(m);
      g("artifact_live_subscribe", {
        [i?.precautionary !== void 0 ? "takeover_unyield_precautionary" : "takeover_handed_back"]: y.length
      });
      let _ = {
        action: "unyield_artifact_replies",
        orig_msg_id: o.msgId,
        slugs: y,
        ...i?.stopped === !0 && {
          stopped: !0
        }
      };
      f(o.sock, _, Y(o.pid)).catch((m) => {
        if (t(`[reply-yield] unyield to ${q_(o.sock)} failed: ${Z9(String(m))}`), GZ(m) && !El(o.pid)) {
          c("artifact_live_subscribe", "unyield_holder_gone");
          return
        }
        let k = () => void f(o.sock, _, Y(o.pid)).catch(() => {
          c("artifact_live_subscribe", "unyield_send_failed")
        });
        if (GZ(m)) I.setTimeout(k, z);
        else k()
      })
    },
    N = [];
  for (let o of h) {
    let d = qZ(),
      i = {
        sock: o.sock,
        pid: o.pid,
        msgId: d.msg_id,
        yielded: new Set
      };
    v.push(i);
    let y = zsi(d.msg_id, p, {
      sentAt: U,
      expectPid: o.pid,
      ...e.transport?.timeoutMs !== void 0 && {
        timeoutMs: e.transport.timeoutMs
      },
      ...e.transport?.timers !== void 0 && {
        timers: e.transport.timers
      },
      onLate: (_) => {
        if (_.kind !== "yielded") return;
        for (let k of _.yielded) i.yielded.add(k);
        let m = new Map([...e.claim?.lost ?? [], ..._.lostTo]);
        A(i, new Set([...i.yielded].filter((k) => m.has(k) ? q(k, i, m, e.alreadyReplying === !0) : !e.alreadyReplying && !D.has(k)))), W(i)
      }
    });
    N.push((async () => {
      try {
        await u(o.sock, {
          action: "yield_artifact_replies",
          from: G,
          session_id: e.conversationId,
          slugs: p,
          reason: e.reason,
          sent_at: T(),
          claimed_at: U,
          requester: {
            cwd: Ee(),
            ...l !== void 0 && {
              tmux: l
            }
          }
        }, d, Y(o.pid))
      } catch (_) {
        if (GZ(_)) {
          let m = Vsi(d.msg_id),
            k = m.map(([J]) => J);
          return El(o.pid) ? {
            kind: "unreachable",
            lost: k,
            lostTo: m
          } : {
            kind: "gone",
            lost: k,
            lostTo: m
          }
        }
      }
      return y
    })())
  }
  let B = await Promise.all(N),
    P = new Map,
    L = new Map,
    O = new Map,
    S = new Map(e.claim?.lost ?? []),
    C = !0,
    K = !1,
    F = 0;
  B.forEach((o, d) => {
    for (let [i, y] of o.lostTo) S.set(i, y);
    if (o.kind === "gone") return;
    if (F++, o.kind === "unreachable") {
      C = !1;
      return
    }
    if (o.kind === "yielded") {
      for (let i of o.yielded) v[d].yielded.add(i), P.set(i, (P.get(i) ?? 0) + 1);
      for (let i of o.notHeld) L.set(i, (L.get(i) ?? 0) + 1);
      for (let i of new Set([...o.yielded, ...o.notHeld])) O.set(i, (O.get(i) ?? 0) + 1)
    } else if (C = !1, o.kind === "refused") K = !0
  });
  let R = new Set,
    M = new Set;
  if (C && !K)
    for (let o of p) {
      if (S.has(o) || (O.get(o) ?? 0) !== F) continue;
      if ((P.get(o) ?? 0) > 0) R.add(o), M.add(o);
      else if ((L.get(o) ?? 0) === F) R.add(o)
    }
  for (let o of R) D.add(o);
  if (e.alreadyReplying) {
    for (let o of v)
      for (let d of o.yielded)
        if (!S.has(d)) M.add(d)
  }
  for (let o of v) {
    let d = new Set([...o.yielded].filter((i) => S.has(i) ? q(i, o, S, e.alreadyReplying === !0) : !e.alreadyReplying && !R.has(i)));
    if (d.size > 0) A(o, d)
  }
  if (!e.alreadyReplying) B.forEach((o, d) => {
    if (o.kind === "timeout") A(v[d], void 0, {
      precautionary: p
    })
  });
  for (let o of v) W(o);
  return {
    armable: R,
    yielded: M,
    kind: R.size > 0 ? "took_over" : "nothing_freed",
    undo: (o) => {
      for (let i of v) A(i, o);
      let d = new Set(v.map((i) => i.msgId));
      for (let i of o ?? p) {
        let y = (b.takenFrom.get(i) ?? []).filter((_) => !d.has(_.msgId));
        if (y.length > 0) b.takenFrom.set(i, y);
        else b.takenFrom.delete(i)
      }
    }
  }
}

function q(e, n, r, a) {
  let s = r.get(e);
  return s !== void 0 && s === vJ(n.sock) || !a && !VG(e)
}

function isi(e, n = vJe) {
  j(e, !0, n)
}

function Lia(e) {
  j(e, !1, vJe)
}

function j(e, n, r) {
  let {
    wakes: a
  } = te(), s = a.takenFrom.get(e);
  if (s === void 0 || VG(e)) return;
  a.takenFrom.delete(e);
  for (let l of s) {
    let p = {
        action: "unyield_artifact_replies",
        orig_msg_id: l.msgId,
        slugs: [e],
        ...n && {
          stopped: !0
        }
      },
      h = x() !== "windows" ? {
        expectPeerPid: l.pid
      } : {};
    r(l.sock, p, h).catch((u) => {
      if (t(`[reply-yield] release to ${q_(l.sock)} failed: ${Z9(String(u))}`), GZ(u) && !El(l.pid)) return;
      let f = () => void r(l.sock, p, h).catch(() => {
        c("artifact_live_subscribe", "takeover_release_failed")
      });
      if (GZ(u)) uZn.setTimeout(f, z);
      else f()
    })
  }
  g("artifact_live_subscribe", {
    [n ? "takeover_stop_notified" : "takeover_released"]: s.length
  })
}

function H(e) {
  let n = e.slice(0, 2),
    r = e.length - n.length;
  return `${n.join(", ")}${r>0?` and ${r} more`:""}`
}

function nKo(e, n, r, a) {
  let s = DKo({
      kind: "interactive",
      ...typeof r.cwd === "string" && {
        cwd: r.cwd
      },
      ...typeof r.tmux === "string" && {
        tmux: r.tmux
      }
    }, a),
    l = n === "resume" ? `the session that just resumed this conversation in ${s}` : `another session of this conversation (${s}), which just published or resumed them there`;
  return `Automatic replies to comments on ${H(e)} moved to ${l}; this session keeps watching for new versions only. To take them back here, publish the Artifact again or ask Claude to resume its replies.`
}

function rKo(e) {
  return `Automatic replies to comments on ${H(e)} are back in this session: the other session of this conversation did not keep them (it could not take them over, or it has since exited).`
}

function oKo(e) {
  return `Automatic replies to comments on ${H(e)} were stopped in the other session of this conversation, so they stay off here too. To turn them back on, publish the Artifact again or ask Claude to resume its replies.`
}
var oe = "Automatic replies to comments on the Artifact(s) this session was answering moved to another session of this same conversation on this machine, at its request; this session keeps its version watch only. Nothing to do \u2014 do not stop or re-arm a watch on your own; a publish the user asks for here takes them back.",
  ne = "The automatic comment replies this session had handed to another session of this conversation were stopped by the user there; they stay stopped here too. Nothing to do unless the user asks to resume them or to publish again.",
  ie = "The automatic comment replies are back with this session: the other session of this conversation did not keep them (it could not take them over, or it has since exited).";

function gya(e, n) {
  let r = e === "yielded" ? `Comment replies on ${n} Artifact(s) moved to another session of this conversation` : e === "reverted" ? `Comment replies on ${n} Artifact(s) are back with this session` : `Comment replies on ${n} Artifact(s) were stopped in the other session`,
    a = e === "yielded" ? oe : e === "reverted" ? ie : ne;
  ll({
    value: zi({
      taskType: A5,
      summary: Xt(r),
      body: `
<event>${Xt(a)}</event>`
    }),
    mode: "task-notification",
    passive: !0,
    priority: "next",
    origin: {
      kind: "task-notification",
      source: A5
    },
    agentId: st()
  })
}

function sKo(e) {
  return $Ko((n) => {
    let r = se(n.slugs, n.msgId),
      a = r.newlyYielded;
    if (a.length > 0) g("artifact_comments_autoreact", {
      yielded_to_other_session: a.length
    });
    return {
      yielded: r.yielded,
      notHeld: r.notHeld,
      ...a.length > 0 && {
        onDelivered: () => {
          let s = a.filter((l) => VG(l));
          for (let l of s) hai(l);
          if (s.length > 0) e.yielded(s, n.reason, n.requester)
        }
      }
    }
  }, (n, r, a) => {
    for (let f of r)
      if (a?.stopped?.has(f) ?? !1) bai(f, n);
    let s = new Set(r.filter((f) => Sai(f))),
      l = new Set(r.filter((f) => gai(f))),
      p = re(n, r),
      h = p.filter((f) => l.has(f) && !mb(f) && E(f) && !(a?.transferring?.has(f) ?? !1));
    if (h.length > 0) e.reverted(h);
    let u = p.filter((f) => l.has(f) && s.has(f));
    if (u.length > 0) e.stoppedElsewhere(u);
    return p
  }), () => $Ko(null)
}

function se(e, n) {
  let {
    live: r,
    autoReact: a,
    durable: s
  } = te(), l = [], p = [], h = [];
  for (let u of e) {
    if (VG(u)) {
      t4o(u, n), l.push(u);
      continue
    }
    let f = E(u),
      I = CS(u) && !vBe(u),
      T = a.wakeEnabledMemo !== !1 && !a.userDisarmed && !s.stopLatches.isStopped(u) && (!mb(u) || I);
    if (!f || !T) {
      p.push(u);
      continue
    }
    t4o(u, n), zhe(u), Ybn(u), a$(r, u), l.push(u), h.push(u)
  }
  return {
    yielded: l,
    notHeld: p,
    newlyYielded: h
  }
}

function E(e) {
  let {
    live: n
  } = te(), r = n.supervisors.get(e);
  return r !== void 0 && !r.stopped && r.autoReactWiring !== void 0 || n.inFlightWiredIntent.has(e) || S6e().has(e)
}

function re(e, n) {
  let {
    live: r
  } = te(), a = [];
  for (let s of n) {
    if (!yai(s, e)) continue;
    if (a$(r, s), mb(s) && !CS(s)) mCt(s), isi(s);
    a.push(s);
    let l = r.supervisors.get(s);
    if (!mb(s) && !E(s)) Lia(s);
    let p = UOe(s).lastWakeArgs;
    if (!mb(s) && E(s) && l?.taskId !== void 0 && oqt(l.taskId) && p !== null) jke({
      ...p,
      seed: !1,
      confirm: void 0,
      confirmBase: void 0,
      confirmAfter: void 0,
      reentry: void 0,
      idlePass: void 0,
      suppressSummonStatus: void 0
    })
  }
  if (a.length > 0) g("artifact_comments_autoreact", {
    yield_reverted: a.length
  });
  return a
}
export {
  hya,
  isi,
  Lia,
  nKo,
  rKo,
  oKo,
  gya,
  sKo
};
