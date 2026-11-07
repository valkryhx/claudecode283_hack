// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  CQi,
  Ite
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  Pr,
  hm
} from "B:/~BUN/root/chunk-q78ga0zw.js";
import {
  we
} from "B:/~BUN/root/chunk-r5zmhp23.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  P
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  St
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  Te
} from "B:/~BUN/root/chunk-8f4z6bdn.js";
import {
  jn
} from "B:/~BUN/root/chunk-rr294jrm.js";
import {
  Cg,
  Eie,
  qin,
  yUt,
  y_t,
  Yo,
  __t,
  _Ut,
  spe,
  b_t,
  ZL,
  wJ,
  kJ,
  bUt,
  cDr,
  Yin,
  Rjn,
  S_t,
  Xin
} from "B:/~BUN/root/chunk-smrt7z22.js";
import {
  kc
} from "B:/~BUN/root/chunk-trd3c21n.js";
import {
  g,
  m,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  KS,
  hl,
  $Fe,
  ASe
} from "B:/~BUN/root/chunk-xqymp2nr.js";
import {
  tQr,
  vZo,
  oIt
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  Cn
} from "B:/~BUN/root/chunk-2fedt3ag.js";
import {
  jl
} from "B:/~BUN/root/chunk-rzc1dapy.js";
import {
  rDt,
  c_r,
  u_r,
  OIn,
  f_r,
  IIn,
  a7t,
  Cft
} from "B:/~BUN/root/chunk-mq0pq26y.js";
import {
  IS
} from "B:/~BUN/root/chunk-98qgaht2.js";
import {
  L
} from "B:/~BUN/root/chunk-5ha2avah.js";
var xe = {
    "remote-control": ["allow_remote_control"],
    cloud: ["allow_remote_sessions"],
    unknown: ["allow_remote_control", "allow_remote_sessions"]
  },
  re = {
    featureLabel: "Remote Control and Cloud sessions",
    verb: "are"
  },
  ae = "No organization policy allows sends to this kind of session, so it can't be shown as permitted.";

function eJn(e) {
  if (Te() !== "firstParty" || St()) return {
    cause: "residency"
  };
  if (CQi()) return null;
  let n = import.meta.require("B:/~BUN/root/chunk-d3cxfvj4.js"),
    i = xe[e],
    s = [];
  for (let d of i) {
    let {
      featureLabel: l,
      verb: u
    } = n.policyKeyLabel(d), f = n.policyDeniedReason(d, l, u);
    if (f === null) return null;
    s.push(f)
  }
  let [o] = i;
  if (o === void 0) return {
    cause: "policy",
    reason: ae
  };
  let {
    logOrgPolicyDenied: a
  } = import.meta.require("B:/~BUN/root/chunk-tn9btkf7.js");
  return a(o, "tool"), {
    cause: "policy",
    reason: (e === "unknown" && s.length > 1 ? n.policyDeniedReason(o, re.featureLabel, re.verb) ?? s[0] : s[0]) ?? ae
  }
}

function cTt(e, n, i) {
  let s = Yo(n);
  e((o) => {
    let a = Object.hasOwn(o.sendMessagePins, s) ? o.sendMessagePins[s] : void 0,
      r = a !== void 0 && yUt(a.id) && !yUt(i.id) && (i.claimedSessionIds ?? []).some((d) => qin(d) === a.id) ? a.id : i.id;
    return a?.id === r && a.sock === i.sock ? o : {
      ...o,
      sendMessagePins: {
        ...o.sendMessagePins,
        [s]: {
          id: r,
          name: n,
          ref: S_t(i.kind, r),
          ...i.sock !== void 0 && {
            sock: i.sock
          }
        }
      }
    }
  })
}
var VVr = "Note: messaging a new session for the first time under a previously used name (was it restarted?)";

function tJn(e, n) {
  return `
A session on this machine now named '${n}' reports '${e}' as one of its former names \u2014 if that is the session you meant, it goes by '${n}' now (a rename, not a stop).`
}

function kei(e) {
  return ` A session now named '${e}' reports it as a former name (renamed).`
}
var SWo = "Note: another live session record on this machine currently claims this session's identity (the same conversation open in two places, or a record impersonating it). This went to the socket confirmed earlier in this conversation; if that is unexpected, check with the user before sending it anything sensitive.",
  wWo = "Note: this session has restarted since this conversation last reached it (same session, new process). If you were not expecting that, check with the user before sending it anything sensitive.",
  zst = "another Claude session on this machine";

function byn(e, n, i) {
  if (e === void 0) return {
    message: "",
    display: ""
  };
  let s = n && KS(n) || "an agent in this session";
  return i.oneWay ? {
    message: "; sent under this session's address, not this agent's",
    display: ` (sent by ${s}, under this session's name)`
  } : {
    message: "; sent under this session's address: any reply will be delivered to this session's main conversation, not to this agent",
    display: ` (sent by ${s}; replies go to the main conversation)`
  }
}

function nJn(e) {
  return e === "cloud" ? "a Claude session running in the cloud" : "a Claude session on another machine, over Remote Control"
}
var KVr = "; accepted by the server for that session, but delivery is not confirmed: it has not reported that it can receive cross-session messages and may be on an older version that cannot",
  Ae = " (accepted by the server; delivery not confirmed, that session may be on an older version)",
  Me = "; in that session's inbox, not yet read by its Claude \u2014 a [Cross-session delivery notice] follows if that session holds it (usually a different permission mode) or refuses it",
  Le = "; in that session's inbox, not yet read by its Claude \u2014 that session may hold it (usually a different permission mode) or refuse it, and with no inbox bound here nothing reports back, so never treat silence as agreement";

function kWo(e) {
  return e ? Me : Le
}
var qVr = "; not confirmed read \u2014 that session may hold it (usually a different permission mode) or refuse it, and this route reports nothing back",
  YVr = " (that session's settings decide delivery; no read receipt)";

function vWo(e) {
  return e ? {
    message: KVr,
    display: Ae
  } : {
    message: "",
    display: ""
  }
}

function MVt(e) {
  return `${e.alsoListedRemotely?"; it is also connected via Remote Control":""}${e.remoteNamesakeClaimedLocally?`; a Remote Control or cloud session also named '${e.displayName}' is registered to a session on this machine`:""}${e.searchTruncated?le:""}`
}

function XVr(e, n, i = "live session", s = "delivery") {
  return de(e, `. ${s==="subscription"?"The subscription":"This"} went to the one this conversation confirmed; to switch, re-send with that ${i==="agent"?"agent":"session"}'s 'name [ref]'${n}.`, i)
}

function JVr(e, n = "live session", i = "delivery") {
  return de(e, `; ${i==="subscription"?"the subscription":"this"} went to the one confirmed earlier in this conversation.`, n)
}

function de(e, n, i) {
  let s = e.previouslyPinned ? `
${VVr}` : e.restartedSincePin ? `
${wWo}` : e.identityContested ? `
${SWo}` : "",
    o = e.sameNamedSiblings ? `
Note: ${e.sameNamedSiblings} other ${P(e.sameNamedSiblings,`${i} is`,`${i}s are`)} also named '${e.displayName}'${n}` : "";
  return `${s}${o}`
}

function rJn(e) {
  return `${e.offline?Ee:""}${e.remoteNamesakeClaimedLocally?`; another session also named '${e.displayName}' is registered to a session on this machine`:""}${e.searchTruncated?le:""}`
}
var Ee = "; it is offline right now \u2014 delivery is queued until that machine reconnects";

function EWo(e) {
  return e.localUnavailable && !e.bridgeUnavailable && !e.cloudUnavailable ? "the sessions on this machine could not be listed just now" : e.localUnavailable ? "this machine's and your account's other sessions could not all be checked just now" : "your account's other sessions could not be checked just now"
}

function TWo(e) {
  return `A session on this machine now claims to be '${e}', which was confirmed earlier as a session elsewhere`
}
var le = "; your session list was too long to check completely, so a same-named session beyond what was searched would not have been seen",
  DVt = `
Your session list was too long to check completely, so a session by that name may exist beyond what was searched.`,
  CWo = "your session list was too long to check completely";
async function Syn(e, n, i, s, o, a) {
  await rDt({
    refresh: !0,
    credentials: a
  });
  let r = Yo(n),
    d = kc(s.teamContext),
    l = null;
  if (Yin(n)) return {
    kind: "not-found",
    closest: []
  };
  if (typeof i === "string") {
    if (n === Cg) return {
      kind: "main"
    };
    let h = s.teamContext?.teammates ?? {},
      R = Object.entries(h).find(([, v]) => v.name === n),
      x = hm(n) ?? hm(r),
      y = R || x ? void 0 : s.agentNameRegistry.get(n),
      S = x ?? y;
    if (S) return X(s, S, n);
    if (R) return {
      kind: "mailbox",
      recipientName: n,
      memberAgentId: R[0],
      memberIdentitySource: "team-context"
    };
    let ne = wJ(n);
    if (d) {
      if (n === hl) return {
        kind: "mailbox",
        recipientName: n
      };
      if (l = await IS(d, o), ne === null && l !== null) {
        let v = b_t(l, spe(s)).find((p) => p.name === n);
        if (v !== void 0) return {
          kind: "mailbox",
          recipientName: n,
          memberAgentId: v.agentId,
          memberIdentitySource: "roster"
        }
      }
    }
    let Ne = spe(s),
      z = Object.entries(h).find(([v, p]) => (_Ut({
        name: p.name,
        agentId: v
      }, Ne) || !__t(p.name)) && Yo(p.name) === r);
    if (z !== void 0) return {
      kind: "mailbox",
      recipientName: z[1].name,
      memberAgentId: z[0],
      memberIdentitySource: "team-context"
    };
    for (let [v, p] of s.agentNameRegistry)
      if (!__t(v) && Yo(v) === r) return X(s, p, v);
    let T = ne;
    if (T) {
      let [v, p] = await Promise.all([tQr(), Cft(e, a)]), E = v.sessions, W = await ce(e, s.sendMessagePins, Yo(T.name), p, r, vZo(e), a), {
        rows: G,
        unavailable: Se
      } = W, _ = kJ(s, {
        teamFile: l,
        sessions: E,
        cloud: p.sessions,
        bridge: G
      }), w = Yo(T.name), se = (I, K, _e, Pe) => {
        let U = j(I, s);
        return U.kind === "local-session" || U.kind === "cloud-session" ? {
          ...U,
          ...J(U, w, K, {
            socksMirroredRemotely: ye(E, p, _e),
            searchTruncated: p.truncated === !0 || Pe
          }, s.sendMessagePins)
        } : U
      }, ie = me(_, w, T.ref);
      if (ie) return se(ie, _, G, W.truncated);
      let te = Se,
        oe = W.truncated;
      if (G === void 0) {
        let I = await H(e, p, r, a);
        if (te = I.unavailable, oe = I.truncated, I.rows.length > 0) {
          _ = kJ(s, {
            teamFile: l,
            sessions: E,
            cloud: p.sessions,
            bridge: I.rows
          });
          let K = me(_, w, T.ref);
          if (K) return se(K, _, I.rows, I.truncated)
        }
      }
      return {
        ...O(w, _),
        ...be(w, E, _, s.sendMessagePins),
        ...fe(p, te, v.unavailable, {
          remoteTruncated: oe
        }),
        ...C(s.sendMessagePins, [w], Xin(E))
      }
    }
  }
  if (typeof i !== "string") {
    if (i.type === "shutdown_response") return {
      kind: "mailbox",
      recipientName: n
    };
    if (n !== hl && ZL(n)) return O(Yo(n), kJ(s, {
      teamFile: null,
      sessions: []
    }), (y) => y.kind === "teammate");
    if (!d) return {
      kind: "mailbox",
      recipientName: n
    };
    if (n === hl) return {
      kind: "mailbox",
      recipientName: n
    };
    let h = Object.entries(s.teamContext?.teammates ?? {}).filter(([y, S]) => _Ut({
        name: S.name,
        agentId: y
      }, spe(s)) || !__t(S.name)),
      R = h.find(([, y]) => y.name === n);
    if (R) return {
      kind: "mailbox",
      recipientName: n,
      memberAgentId: R[0],
      memberIdentitySource: "team-context"
    };
    if (l = await IS(d, o), wJ(n) === null && l !== null) {
      let y = b_t(l, spe(s)).find((S) => S.name === n);
      if (y !== void 0) return {
        kind: "mailbox",
        recipientName: n,
        memberAgentId: y.agentId,
        memberIdentitySource: "roster"
      }
    }
    let x = h.find(([, y]) => Yo(y.name) === r);
    if (x !== void 0) return {
      kind: "mailbox",
      recipientName: x[1].name,
      memberAgentId: x[0],
      memberIdentitySource: "team-context"
    };
    if (wJ(n) === null && l !== null) {
      let y = cDr(b_t(l, spe(s)), n);
      if (y !== void 0) return {
        kind: "mailbox",
        recipientName: y.name,
        displayName: n,
        memberAgentId: y.agentId,
        memberIdentitySource: "roster"
      }
    }
    if (l === null) return {
      kind: "mailbox",
      recipientName: n
    };
    return O(r, kJ(s, {
      teamFile: l,
      sessions: []
    }), (y) => y.kind === "teammate")
  }
  if (d && l === null) {
    if (ZL(n)) return O(r, kJ(s, {
      teamFile: l,
      sessions: []
    }));
    return {
      kind: "mailbox",
      recipientName: n
    }
  }
  let [u, f] = await Promise.all([tQr(), Cft(e, a)]), b = u.sessions, q = await ce(e, s.sendMessagePins, r, f, r, vZo(e), a), {
    rows: N,
    unavailable: F,
    truncated: Y
  } = q, Q = Xin(b), V = () => ({
    cloudUnavailable: he(f.unavailable),
    bridgeUnavailable: F,
    localClaimedRemoteBodies: Q,
    bridgeSettled: N !== void 0,
    localUnavailable: u.unavailable,
    socksMirroredRemotely: ye(b, f, N),
    searchTruncated: f.truncated === !0 || Y
  }), k = kJ(s, {
    teamFile: l,
    sessions: b,
    cloud: f.sessions,
    bridge: N
  }), M = k.byName.get(r)?.length === 1 ? k.byName.get(r)[0] : void 0, Z = A(s.sendMessagePins, r), Ie = M !== void 0 && Z !== void 0 && Object.hasOwn(s.sendMessagePins, r) && Re(s.sendMessagePins[r], M), Ce = M !== void 0 && (M.kind === "session" || M.kind === "cloud-session") && Z !== "agent" && !Ie;
  if (N === void 0 && Ce) {
    let h = await H(e, f, r, a);
    N = h.rows, F = h.unavailable, Y = h.truncated, k = kJ(s, {
      teamFile: l,
      sessions: b,
      cloud: f.sessions,
      bridge: h.rows
    })
  }
  let ee = ue(k, r, n, s, V());
  if (ee) return ee;
  if (N === void 0) {
    let h = await H(e, f, r, a);
    if (N = h.rows, F = h.unavailable, Y = h.truncated, h.rows.length > 0) {
      k = kJ(s, {
        teamFile: l,
        sessions: b,
        cloud: f.sessions,
        bridge: h.rows
      });
      let R = ue(k, r, n, s, V());
      if (R) return R
    }
  }
  return Be(k, r, s, V()) ?? {
    ...O(r, k),
    ...be(r, b, k, s.sendMessagePins),
    ...fe(f, F, u.unavailable, {
      remoteTruncated: Y
    }),
    ...C(s.sendMessagePins, [r], Q)
  }
}

function Ue(e, n, i) {
  let s = A(e, n);
  if (s !== "cloud" && s !== "remote-control") return;
  let o = e[n];
  return i.has(jn(o.id)) ? o.name : void 0
}

function Oe(e, n) {
  let i = n[0];
  if (i === void 0 || i.length < 3) return n;
  let s = Object.keys(e).filter((o) => o !== i && o.startsWith(i) && !n.includes(o));
  return s.length === 0 ? n : [...n, ...s]
}

function C(e, n, i) {
  for (let s of Oe(e, n)) {
    let o = Ue(e, s, i);
    if (o !== void 0) return {
      pinnedIdentityClaimedLocally: o
    }
  }
  return {}
}

function A(e, n) {
  let i = Object.hasOwn(e, n) ? e[n] : void 0;
  if (i === void 0) return;
  if (hm(i.id) !== null) return "agent";
  if (i.id.startsWith("cse_")) return "cloud";
  return jn(i.id) !== i.id ? "remote-control" : "local"
}
async function ce(e, n, i, s, o, a, r) {
  let d = a?.rows;
  if (!De(n, i, s.sessions, d)) return {
    rows: d,
    unavailable: void 0,
    truncated: a !== void 0 && a.truncated
  };
  let l = await H(e, s, o, r);
  return {
    rows: l.unavailable === void 0 || d === void 0 ? l.rows : d,
    unavailable: l.unavailable,
    truncated: l.unavailable === void 0 || a === void 0 ? l.truncated : a.truncated
  }
}

function De(e, n, i, s) {
  let o = A(e, n);
  if (o !== "remote-control" && o !== "cloud") return !1;
  let a = jn(e[n].id);
  if (i.some((r) => jn(r.id) === a)) return !1;
  return s === void 0 || !s.some((r) => jn(r.id) === a)
}

function D(e) {
  return {
    ...e.cloudUnavailable && {
      cloudUnavailable: e.cloudUnavailable
    },
    ...e.bridgeUnavailable && {
      bridgeUnavailable: e.bridgeUnavailable
    },
    ...e.localUnavailable && {
      localUnavailable: !0
    },
    ...e.searchTruncated && {
      searchTruncated: !0
    }
  }
}

function ue(e, n, i, s, o) {
  let a = bUt(e.byName, n, i);
  if (a) {
    if (a.kind === "ambiguous") {
      let r = e.byName.get(n),
        d = ve(s.sendMessagePins, n, r, i, o);
      if (d) return ke(d, r, s, n, e, o);
      let l = C(s.sendMessagePins, [n], o.localClaimedRemoteBodies),
        u = r[0],
        f = A(s.sendMessagePins, n);
      if (r.length === 1 && (u.kind === "session" || u.kind === "cloud-session" || u.kind === "bridge-session") && !o.cloudUnavailable && o.bridgeSettled && !o.bridgeUnavailable && !o.localUnavailable && l.pinnedIdentityClaimedLocally === void 0 && f !== "agent" && !u.derivedName) {
        let b = j(u, s);
        if (b.kind === "local-session" || b.kind === "cloud-session") return {
          ...b,
          exactUnique: !0,
          ...f !== void 0 && {
            previouslyPinned: !0
          },
          ...J(b, n, e, o, s.sendMessagePins)
        }
      }
      return {
        ...B(r, "exact"),
        ...D(o),
        ...l
      }
    }
    return j(a.candidate, s)
  }
  return
}

function Be(e, n, i, s) {
  if (n.length >= 3) {
    let o = [...e.byName.keys()].filter((a) => a.startsWith(n));
    if (o.length === 1) {
      let a = bUt(e.byName, o[0]),
        r = A(i.sendMessagePins, n),
        d = C(i.sendMessagePins, [n], s.localClaimedRemoteBodies).pinnedIdentityClaimedLocally !== void 0;
      if (r !== void 0 && r !== "agent" || d) {
        let l = e.byName.get(o[0]);
        return c("send_message_prefix_match", r !== void 0 && r !== "agent" ? "typed_name_pinned" : "prefix_of_claimed_pin"), {
          ...B(a.kind === "one" ? [a.candidate] : l, "prefix"),
          ...D(s),
          ...C(i.sendMessagePins, [n, o[0]], s.localClaimedRemoteBodies)
        }
      }
      if (a.kind === "ambiguous") {
        let l = e.byName.get(o[0]),
          u = ve(i.sendMessagePins, o[0], l, void 0, s, !0);
        if (u) return g("send_message_prefix_match", {
          input_len: n.length,
          index_size: e.candidates.length,
          pinned: 1
        }), ke(u, l, i, o[0], e, s);
        if (l.length === 1) c("send_message_prefix_match", "confirm_required");
        else m("send_message_prefix_match", "ambiguous_name");
        return {
          ...B(l, "prefix"),
          ...D(s),
          ...C(i.sendMessagePins, [n, o[0]], s.localClaimedRemoteBodies)
        }
      }
      if (s.cloudUnavailable || s.bridgeUnavailable || s.localUnavailable) return c("send_message_prefix_match", s.cloudUnavailable || s.bridgeUnavailable ? "remote_unsearched" : "local_unsearched"), {
        ...B([a.candidate], "prefix"),
        ...D(s),
        ...C(i.sendMessagePins, [n, o[0]], s.localClaimedRemoteBodies)
      };
      return g("send_message_prefix_match", {
        input_len: n.length,
        index_size: e.candidates.length,
        ...s.searchTruncated && {
          search_truncated: !0
        }
      }), j(a.candidate, i)
    }
    if (o.length > 1) return m("send_message_prefix_match", "ambiguous_prefix"), {
      ...D(s),
      ...C(i.sendMessagePins, [n, ...o], s.localClaimedRemoteBodies),
      ...B(o.flatMap((a) => {
        let r = e.byName.get(a),
          d = bUt(e.byName, a);
        return d?.kind === "one" ? [d.candidate] : r
      }), "prefix")
    }
  }
  return
}

function me(e, n, i) {
  let s = e.byName.get(n) ?? [],
    o = bUt(e.byName, n);
  return (o?.kind === "one" ? [o.candidate] : s).find((r) => r.ref === i)
}
async function H(e, n, i, s) {
  if (jl()) {
    let o = !a7t(n.unavailable),
      a = c_r(e, s),
      r = await we(a, ge);
    if (r === void 0) {
      if (t(`[bridge:resolve] "${i}": Remote Control population not ready within ${ge}ms (cold) \u2014 not searched, disclosing a hedge`, {
          level: "warn"
        }), o) a.then((l) => OIn(e, l, IIn(l.rows, n.sessions)));
      return {
        rows: [],
        unavailable: "timeout",
        truncated: !1
      }
    }
    if (r.failed || r.identityKey !== null && !u_r(r)) return t(`[bridge:resolve] "${i}": Remote Control walk ${r.failed?"failed":"ran under a previous handle"} (cold) \u2014 not searched, disclosing a hedge`, {
      level: "warn"
    }), {
      rows: [],
      unavailable: "fetch_failed",
      truncated: !1
    };
    let d = IIn(r.rows, n.sessions);
    if (o) OIn(e, r, d);
    else f_r(e, r);
    return t(`[bridge:resolve] "${i}": ${r.rows.length} Remote Control rows, ${d.length} listed (cold${o?", recorded":", not recorded \u2014 cloud list failed"})`), {
      rows: d,
      unavailable: void 0,
      truncated: r.truncated === !0
    }
  }
  return {
    rows: [],
    unavailable: void 0,
    truncated: !1
  }
}

function he(e) {
  return a7t(e) ? e : void 0
}

function fe(e, n, i, {
  remoteTruncated: s
}) {
  return {
    cloudUnavailable: he(e.unavailable),
    ...n !== void 0 && {
      bridgeUnavailable: n
    },
    ...i && {
      localUnavailable: !0
    },
    ...(e.truncated === !0 || s) && {
      searchTruncated: !0
    }
  }
}

function X(e, n, i) {
  let s = e.tasks[n];
  if (Cn(s) && !oIt(s)) {
    if (s.status === "running") return {
      kind: "agent-live",
      agentId: n,
      agentName: i
    };
    if (s.stoppedByUser) return {
      kind: "agent-stopped-by-user",
      agentName: i
    };
    return {
      kind: "agent-stopped",
      agentId: n,
      status: s.status,
      agentName: i
    }
  }
  return {
    kind: "agent-evicted",
    agentId: n,
    agentName: i
  }
}

function j(e, n) {
  switch (e.kind) {
    case "main":
      return {
        kind: "main"
      };
    case "teammate":
      return {
        kind: "mailbox", recipientName: e.name, memberAgentId: e.id, memberIdentitySource: e.where === "in-process" ? "team-context" : "roster"
      };
    case "subagent":
      return X(n, Pr(e.id), e.name);
    case "session":
      return {
        kind: "local-session", sock: e.sock, pinId: Rjn(e), ...e.claimedSessionIds !== void 0 && {
          claimedSessionIds: e.claimedSessionIds
        }, displayName: e.name, ...e.hostSessionId !== void 0 && {
          hostSessionId: e.hostSessionId
        }
      };
    case "cloud-session":
    case "bridge-session":
      return {
        kind: "cloud-session", via: e.where === "cloud" ? "cloud" : "remote-control", refKind: e.kind, sessionId: e.id, displayName: e.name, ...e.offline && {
          offline: !0
        }, ...e.reportsInbound && {
          reportsInbound: !0
        }, ...e.inboundReportUnavailable && {
          inboundReportUnavailable: !0
        }
      }
  }
}
var pe = 3,
  ge = 5000;

function B(e, n) {
  return {
    kind: "ambiguous",
    candidates: e.slice(0, pe),
    total: e.length,
    matchedBy: n
  }
}

function be(e, n, i, s) {
  if (!Eie()) return {};
  let o = n.filter((u) => y_t(u) && u.sessionId !== void 0 && u.formerNames?.some((f) => f.sessionId === u.sessionId && Yo(f.name) === e));
  if (o.length !== 1) return {};
  let a = o[0];
  if (n.filter((u) => y_t(u) && ASe(u.sock, a.sock)).length !== 1) return {};
  let d = i.candidates.find((u) => u.kind === "session" && u.sock !== void 0 && $Fe(u.sock, a.sock));
  if (d === void 0 || wJ(d.name) !== null || ZL(d.name) || (i.byName.get(Yo(d.name))?.length ?? 0) !== 1) return {};
  let l = Object.hasOwn(s, e) ? s[e] : void 0;
  if (l !== void 0 && l.id !== Rjn(d)) return {};
  return {
    renamedTo: d
  }
}

function O(e, n, i) {
  let s = i ? n.candidates.filter(i) : n.candidates,
    o = L(s.map((r) => Yo(r.name)));
  return {
    kind: "not-found",
    closest: Ite(e, o, pe).map((r) => s.find((d) => Yo(d.name) === r))
  }
}

function ve(e, n, i, s, o, a = !1) {
  let r = Object.hasOwn(e, n) ? e[n] : void 0;
  if (r === void 0) return;
  let d = A(e, n);
  if (d === "agent") return;
  let l = d !== "local";
  if (l && o.localClaimedRemoteBodies.has(jn(r.id))) return;
  if (d === "cloud" && o.cloudUnavailable || d === "remote-control" && o.bridgeUnavailable || d === "local" && o.localUnavailable || a && (o.cloudUnavailable || o.bridgeUnavailable || o.localUnavailable)) return;
  let u = i.filter((b) => (l ? b.kind === "cloud-session" || b.kind === "bridge-session" : b.kind === "session") && b.where !== "in-process"),
    f = u.find((b) => Rjn(b) === r.id) ?? u.find((b) => Re(r, b));
  if (f === void 0) {
    if (!(l && o.searchTruncated)) c("send_message_pin", "stale");
    return
  }
  if (s !== void 0 && f.name !== s && i.some((b) => b.name === s)) return;
  return g("send_message_pin"), f
}

function ke(e, n, i, s, o, a) {
  let r = j(e, i);
  if (r.kind !== "local-session" && r.kind !== "cloud-session") return r;
  let d = Object.hasOwn(i.sendMessagePins, s) ? i.sendMessagePins[s] : void 0,
    u = r.kind === "local-session" && d !== void 0 && d.id !== r.pinId && d.sock !== void 0 && $Fe(d.sock, r.sock) && yUt(d.id) && !yUt(r.pinId) ? {
      ...r,
      pinId: d.id,
      identityContested: !0
    } : r;
  return {
    ...u,
    ...n.length > 1 && {
      sameNamedSiblings: n.length - 1
    },
    ...J(u, s, o, a, i.sendMessagePins)
  }
}

function ye(e, n, i) {
  let s = new Set([...n.sessions.map((o) => jn(o.id)), ...(i ?? []).map((o) => jn(o.id))]);
  return new Set(e.flatMap((o) => o.bridgeSessionId !== void 0 && s.has(jn(o.bridgeSessionId)) ? [o.sock] : []))
}

function Re(e, n) {
  if (Rjn(n) === e.id) return !0;
  if (e.sock === void 0 || n.kind !== "session" || n.sock === void 0 || !$Fe(n.sock, e.sock)) return !1;
  return !yUt(e.id) || n.stableId === void 0 && (n.claimedSessionIds ?? []).some((i) => qin(i) === e.id)
}

function J(e, n, i, s, o) {
  let a = Object.hasOwn(o, n) ? o[n] : void 0;
  return {
    ...e.kind === "local-session" && a?.sock !== void 0 && a.id === e.pinId && !$Fe(a.sock, e.sock) && {
      restartedSincePin: !0
    },
    ...e.kind === "local-session" && s.socksMirroredRemotely.has(e.sock) && {
      alsoListedRemotely: !0
    },
    ...[...i.remoteNamesClaimedLocally.get(n) ?? []].some((r) => e.kind !== "local-session" || r !== e.sock) && {
      remoteNamesakeClaimedLocally: !0
    },
    ...s.searchTruncated && {
      searchTruncated: !0
    }
  }
}
export {
  eJn,
  cTt,
  VVr,
  tJn,
  kei,
  SWo,
  wWo,
  zst,
  byn,
  nJn,
  KVr,
  kWo,
  qVr,
  YVr,
  vWo,
  MVt,
  XVr,
  JVr,
  rJn,
  EWo,
  TWo,
  DVt,
  CWo,
  Syn
};
