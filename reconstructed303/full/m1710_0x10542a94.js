// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  kqs,
  y5
} from "B:/~BUN/root/chunk-8ye9n4fk.js";
import {
  Vr,
  th
} from "B:/~BUN/root/chunk-9ka04m0y.js";
import {
  L
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  je
} from "B:/~BUN/root/chunk-89mss1tj.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  O
} from "B:/~BUN/root/chunk-nggrknsv.js";
import {
  At
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  xe
} from "B:/~BUN/root/chunk-8pmnanyd.js";
import {
  er
} from "B:/~BUN/root/chunk-k9zm82w3.js";
import {
  Sh,
  PJ,
  zUt,
  _yt,
  aQe,
  lo,
  lQe,
  byt,
  Zte,
  dQe,
  qO,
  d4,
  c4,
  Syt,
  V3n,
  GUt,
  Lcn,
  cQe,
  VUt
} from "B:/~BUN/root/chunk-e4q58xft.js";
import {
  id
} from "B:/~BUN/root/chunk-8v3gkznb.js";
import {
  g,
  m,
  p
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  P_,
  Oa,
  jEe,
  Nle
} from "B:/~BUN/root/chunk-v6pbq6dm.js";
import {
  Wmr,
  Qio,
  Ewr
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  vn
} from "B:/~BUN/root/chunk-k382hx6g.js";
import {
  Ki
} from "B:/~BUN/root/chunk-19m6yp46.js";
import {
  Oct,
  zUn,
  GUn,
  ten,
  VUn,
  nen,
  EMt,
  K3e
} from "B:/~BUN/root/chunk-0hq7zw7b.js";
import {
  Ub
} from "B:/~BUN/root/chunk-p7n9drc0.js";
var we = {
    "remote-control": ["allow_remote_control"],
    cloud: ["allow_remote_sessions"],
    unknown: ["allow_remote_control", "allow_remote_sessions"]
  },
  re = {
    featureLabel: "Remote Control and Cloud sessions",
    verb: "are"
  },
  ae = "No organization policy allows sends to this kind of session, so it can't be shown as permitted.";

function _En(e) {
  if (xe() !== "firstParty" || At()) return {
    cause: "residency"
  };
  if (kqs()) return null;
  let n = import.meta.require("B:/~BUN/root/chunk-9hz9jer5.js"),
    i = we[e],
    s = [];
  for (let d of i) {
    let {
      featureLabel: l,
      verb: c
    } = n.policyKeyLabel(d), u = n.policyDeniedReason(d, l, c);
    if (u === null) return null;
    s.push(u)
  }
  let [o] = i;
  if (o === void 0) return {
    cause: "policy",
    reason: ae
  };
  let {
    logOrgPolicyDenied: a
  } = import.meta.require("B:/~BUN/root/chunk-4tk3a6tg.js");
  return a(o, "tool"), {
    cause: "policy",
    reason: (e === "unknown" && s.length > 1 ? n.policyDeniedReason(o, re.featureLabel, re.verb) ?? s[0] : s[0]) ?? ae
  }
}

function Ert(e, n, i) {
  let s = lo(n);
  e((o) => {
    let a = Object.hasOwn(o.sendMessagePins, s) ? o.sendMessagePins[s] : void 0,
      r = a !== void 0 && _yt(a.id) && !_yt(i.id) && (i.claimedSessionIds ?? []).some((d) => zUt(d) === a.id) ? a.id : i.id;
    return a?.id === r && a.sock === i.sock ? o : {
      ...o,
      sendMessagePins: {
        ...o.sendMessagePins,
        [s]: {
          id: r,
          name: n,
          ref: cQe(i.kind, r),
          ...i.sock !== void 0 && {
            sock: i.sock
          }
        }
      }
    }
  })
}
var Osr = "Note: messaging a new session for the first time under a previously used name (was it restarted?)";

function bEn(e, n) {
  return `
A session on this machine now named '${n}' reports '${e}' as one of its former names \u2014 if that is the session you meant, it goes by '${n}' now (a rename, not a stop).`
}

function h7o(e) {
  return ` A session now named '${e}' reports it as a former name (renamed).`
}
var J5r = "Note: another live session record on this machine currently claims this session's identity (the same conversation open in two places, or a record impersonating it). This went to the socket confirmed earlier in this conversation; if that is unexpected, check with the user before sending it anything sensitive.",
  Q5r = "Note: this session has restarted since this conversation last reached it (same session, new process). If you were not expecting that, check with the user before sending it anything sensitive.",
  hqe = "another Claude session on this machine";

function Pqt(e, n, i) {
  if (e === void 0) return {
    message: "",
    display: ""
  };
  let s = n && P_(n) || "an agent in this session";
  return i.oneWay ? {
    message: "; sent under this session's address, not this agent's",
    display: ` (sent by ${s}, under this session's name)`
  } : {
    message: "; sent under this session's address: any reply will be delivered to this session's main conversation, not to this agent",
    display: ` (sent by ${s}; replies go to the main conversation)`
  }
}

function SEn(e) {
  return e === "cloud" ? "a Claude session running in the cloud" : "a Claude session on another machine, over Remote Control"
}
var Isr = "; accepted by the server for that session, but delivery is not confirmed: it has not reported that it can receive cross-session messages and may be on an older version that cannot",
  Ae = " (accepted by the server; delivery not confirmed, that session may be on an older version)",
  Me = "; in that session's inbox, not yet read by its Claude \u2014 a [Cross-session delivery notice] follows if that session holds it (usually a different permission mode) or refuses it",
  Te = "; in that session's inbox, not yet read by its Claude \u2014 that session may hold it (usually a different permission mode) or refuse it, and with no inbox bound here nothing reports back, so never treat silence as agreement";

function Z5r(e) {
  return e ? Me : Te
}
var Msr = "; not confirmed read \u2014 that session may hold it (usually a different permission mode) or refuse it, and this route reports nothing back",
  Dsr = " (that session's settings decide delivery; no read receipt)";

function e8r(e) {
  return e ? {
    message: Isr,
    display: Ae
  } : {
    message: "",
    display: ""
  }
}

function rEt(e) {
  return `${e.alsoListedRemotely?"; it is also connected via Remote Control":""}${e.remoteNamesakeClaimedLocally?`; a Remote Control or cloud session also named '${e.displayName}' is registered to a session on this machine`:""}${e.searchTruncated?le:""}`
}

function Lsr(e, n, i = "live session", s = "delivery") {
  return de(e, `. ${s==="subscription"?"The subscription":"This"} went to the one this conversation confirmed; to switch, re-send with that ${i==="agent"?"agent":"session"}'s 'name [ref]'${n}.`, i)
}

function Nsr(e, n = "live session", i = "delivery") {
  return de(e, `; ${i==="subscription"?"the subscription":"this"} went to the one confirmed earlier in this conversation.`, n)
}

function de(e, n, i) {
  let s = e.previouslyPinned ? `
${Osr}` : e.restartedSincePin ? `
${Q5r}` : e.identityContested ? `
${J5r}` : "",
    o = e.sameNamedSiblings ? `
Note: ${e.sameNamedSiblings} other ${O(e.sameNamedSiblings,`${i} is`,`${i}s are`)} also named '${e.displayName}'${n}` : "";
  return `${s}${o}`
}

function wEn(e) {
  return `${e.offline?Le:""}${e.remoteNamesakeClaimedLocally?`; another session also named '${e.displayName}' is registered to a session on this machine`:""}${e.searchTruncated?le:""}`
}
var Le = "; it is offline right now \u2014 delivery is queued until that machine reconnects";

function t8r(e) {
  return e.localUnavailable && !e.bridgeUnavailable && !e.cloudUnavailable ? "the sessions on this machine could not be listed just now" : e.localUnavailable ? "this machine's and your account's other sessions could not all be checked just now" : "your account's other sessions could not be checked just now"
}

function n8r(e) {
  return `A session on this machine now claims to be '${e}', which was confirmed earlier as a session elsewhere`
}
var le = "; your session list was too long to check completely, so a same-named session beyond what was searched would not have been seen",
  oEt = `
Your session list was too long to check completely, so a session by that name may exist beyond what was searched.`,
  r8r = "your session list was too long to check completely";
async function Oqt(e, n, i, s, o, a) {
  await Oct({
    refresh: !0,
    credentials: a
  });
  let r = lo(n),
    d = id(s.teamContext),
    l = null;
  if (GUt(n)) return {
    kind: "not-found",
    closest: []
  };
  if (typeof i === "string") {
    if (n === Sh) return {
      kind: "main"
    };
    let y = s.teamContext?.teammates ?? {},
      R = Object.entries(y).find(([, v]) => v.name === n),
      P = th(n) ?? th(r),
      b = R || P ? void 0 : s.agentNameRegistry.get(n),
      S = P ?? b;
    if (S) return X(s, S, n);
    if (R) return {
      kind: "mailbox",
      recipientName: n,
      memberAgentId: R[0],
      memberIdentitySource: "team-context"
    };
    let ne = d4(n);
    if (d) {
      if (n === Oa) return {
        kind: "mailbox",
        recipientName: n
      };
      if (l = await Ub(d, o), ne === null && l !== null) {
        let v = dQe(l, Zte(s)).find((h) => h.name === n);
        if (v !== void 0) return {
          kind: "mailbox",
          recipientName: n,
          memberAgentId: v.agentId,
          memberIdentitySource: "roster"
        }
      }
    }
    let Ne = Zte(s),
      z = Object.entries(y).find(([v, h]) => (byt({
        name: h.name,
        agentId: v
      }, Ne) || !lQe(h.name)) && lo(h.name) === r);
    if (z !== void 0) return {
      kind: "mailbox",
      recipientName: z[1].name,
      memberAgentId: z[0],
      memberIdentitySource: "team-context"
    };
    for (let [v, h] of s.agentNameRegistry)
      if (!lQe(v) && lo(v) === r) return X(s, h, v);
    let M = ne;
    if (M) {
      let [v, h] = await Promise.all([Wmr(), K3e(e, a)]), T = v.sessions, W = await ce(e, s.sendMessagePins, lo(M.name), h, r, Qio(e), a), {
        rows: G,
        unavailable: Se
      } = W, _ = c4(s, {
        teamFile: l,
        sessions: T,
        cloud: h.sessions,
        bridge: G
      }), x = lo(M.name), se = (I, K, _e, Pe) => {
        let E = j(I, s);
        return E.kind === "local-session" || E.kind === "cloud-session" ? {
          ...E,
          ...J(E, x, K, {
            socksMirroredRemotely: ye(T, h, _e),
            searchTruncated: h.truncated === !0 || Pe
          }, s.sendMessagePins)
        } : E
      }, ie = me(_, x, M.ref);
      if (ie) return se(ie, _, G, W.truncated);
      let te = Se,
        oe = W.truncated;
      if (G === void 0) {
        let I = await H(e, h, r, a);
        if (te = I.unavailable, oe = I.truncated, I.rows.length > 0) {
          _ = c4(s, {
            teamFile: l,
            sessions: T,
            cloud: h.sessions,
            bridge: I.rows
          });
          let K = me(_, x, M.ref);
          if (K) return se(K, _, I.rows, I.truncated)
        }
      }
      return {
        ...U(x, _),
        ...be(x, T, _, s.sendMessagePins),
        ...fe(h, te, v.unavailable, {
          remoteTruncated: oe
        }),
        ...C(s.sendMessagePins, [x], VUt(T))
      }
    }
  }
  if (typeof i !== "string") {
    if (i.type === "shutdown_response") return {
      kind: "mailbox",
      recipientName: n
    };
    if (n !== Oa && qO(n)) return U(lo(n), c4(s, {
      teamFile: null,
      sessions: []
    }), (b) => b.kind === "teammate");
    if (!d) return {
      kind: "mailbox",
      recipientName: n
    };
    if (n === Oa) return {
      kind: "mailbox",
      recipientName: n
    };
    let y = Object.entries(s.teamContext?.teammates ?? {}).filter(([b, S]) => byt({
        name: S.name,
        agentId: b
      }, Zte(s)) || !lQe(S.name)),
      R = y.find(([, b]) => b.name === n);
    if (R) return {
      kind: "mailbox",
      recipientName: n,
      memberAgentId: R[0],
      memberIdentitySource: "team-context"
    };
    if (l = await Ub(d, o), d4(n) === null && l !== null) {
      let b = dQe(l, Zte(s)).find((S) => S.name === n);
      if (b !== void 0) return {
        kind: "mailbox",
        recipientName: n,
        memberAgentId: b.agentId,
        memberIdentitySource: "roster"
      }
    }
    let P = y.find(([, b]) => lo(b.name) === r);
    if (P !== void 0) return {
      kind: "mailbox",
      recipientName: P[1].name,
      memberAgentId: P[0],
      memberIdentitySource: "team-context"
    };
    if (d4(n) === null && l !== null) {
      let b = V3n(dQe(l, Zte(s)), n);
      if (b !== void 0) return {
        kind: "mailbox",
        recipientName: b.name,
        displayName: n,
        memberAgentId: b.agentId,
        memberIdentitySource: "roster"
      }
    }
    if (l === null) return {
      kind: "mailbox",
      recipientName: n
    };
    return U(r, c4(s, {
      teamFile: l,
      sessions: []
    }), (b) => b.kind === "teammate")
  }
  if (d && l === null) {
    if (qO(n)) return U(r, c4(s, {
      teamFile: l,
      sessions: []
    }));
    return {
      kind: "mailbox",
      recipientName: n
    }
  }
  let [c, u] = await Promise.all([Wmr(), K3e(e, a)]), f = c.sessions, q = await ce(e, s.sendMessagePins, r, u, r, Qio(e), a), {
    rows: N,
    unavailable: F,
    truncated: Y
  } = q, Q = VUt(f), V = () => ({
    cloudUnavailable: he(u.unavailable),
    bridgeUnavailable: F,
    localClaimedRemoteBodies: Q,
    bridgeSettled: N !== void 0,
    localUnavailable: c.unavailable,
    socksMirroredRemotely: ye(f, u, N),
    searchTruncated: u.truncated === !0 || Y
  }), k = c4(s, {
    teamFile: l,
    sessions: f,
    cloud: u.sessions,
    bridge: N
  }), A = k.byName.get(r)?.length === 1 ? k.byName.get(r)[0] : void 0, Z = w(s.sendMessagePins, r), Ie = A !== void 0 && Z !== void 0 && Object.hasOwn(s.sendMessagePins, r) && Re(s.sendMessagePins[r], A), Ce = A !== void 0 && (A.kind === "session" || A.kind === "cloud-session") && Z !== "agent" && !Ie;
  if (N === void 0 && Ce) {
    let y = await H(e, u, r, a);
    N = y.rows, F = y.unavailable, Y = y.truncated, k = c4(s, {
      teamFile: l,
      sessions: f,
      cloud: u.sessions,
      bridge: y.rows
    })
  }
  let ee = ue(k, r, n, s, V());
  if (ee) return ee;
  if (N === void 0) {
    let y = await H(e, u, r, a);
    if (N = y.rows, F = y.unavailable, Y = y.truncated, y.rows.length > 0) {
      k = c4(s, {
        teamFile: l,
        sessions: f,
        cloud: u.sessions,
        bridge: y.rows
      });
      let R = ue(k, r, n, s, V());
      if (R) return R
    }
  }
  return De(k, r, s, V()) ?? {
    ...U(r, k),
    ...be(r, f, k, s.sendMessagePins),
    ...fe(u, F, c.unavailable, {
      remoteTruncated: Y
    }),
    ...C(s.sendMessagePins, [r], Q)
  }
}

function Ee(e, n, i) {
  let s = w(e, n);
  if (s !== "cloud" && s !== "remote-control") return;
  let o = e[n];
  return i.has(er(o.id)) ? o.name : void 0
}

function Ue(e, n) {
  let i = n[0];
  if (i === void 0 || i.length < 3) return n;
  let s = Object.keys(e).filter((o) => o !== i && o.startsWith(i) && !n.includes(o));
  return s.length === 0 ? n : [...n, ...s]
}

function C(e, n, i) {
  for (let s of Ue(e, n)) {
    let o = Ee(e, s, i);
    if (o !== void 0) return {
      pinnedIdentityClaimedLocally: o
    }
  }
  return {}
}

function w(e, n) {
  let i = Object.hasOwn(e, n) ? e[n] : void 0;
  if (i === void 0) return;
  if (th(i.id) !== null) return "agent";
  if (i.id.startsWith("cse_")) return "cloud";
  return er(i.id) !== i.id ? "remote-control" : "local"
}
async function ce(e, n, i, s, o, a, r) {
  let d = a?.rows;
  if (!Oe(n, i, s.sessions, d)) return {
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

function Oe(e, n, i, s) {
  let o = w(e, n);
  if (o !== "remote-control" && o !== "cloud") return !1;
  let a = er(e[n].id);
  if (i.some((r) => er(r.id) === a)) return !1;
  return s === void 0 || !s.some((r) => er(r.id) === a)
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
  let a = Syt(e.byName, n, i);
  if (a) {
    if (a.kind === "ambiguous") {
      let r = e.byName.get(n),
        d = ve(s.sendMessagePins, n, r, i, o);
      if (d) return ke(d, r, s, n, e, o);
      let l = C(s.sendMessagePins, [n], o.localClaimedRemoteBodies),
        c = r[0],
        u = w(s.sendMessagePins, n);
      if (r.length === 1 && (c.kind === "session" || c.kind === "cloud-session" || c.kind === "bridge-session") && !o.cloudUnavailable && o.bridgeSettled && !o.bridgeUnavailable && !o.localUnavailable && l.pinnedIdentityClaimedLocally === void 0 && u !== "agent" && !c.derivedName) {
        let f = j(c, s);
        if (f.kind === "local-session" || f.kind === "cloud-session") return {
          ...f,
          exactUnique: !0,
          ...u !== void 0 && {
            previouslyPinned: !0
          },
          ...J(f, n, e, o, s.sendMessagePins)
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

function De(e, n, i, s) {
  if (n.length >= 3) {
    let o = [...e.byName.keys()].filter((a) => a.startsWith(n));
    if (o.length === 1) {
      let a = Syt(e.byName, o[0]),
        r = w(i.sendMessagePins, n),
        d = C(i.sendMessagePins, [n], s.localClaimedRemoteBodies).pinnedIdentityClaimedLocally !== void 0;
      if (r !== void 0 && r !== "agent" || d) {
        let l = e.byName.get(o[0]);
        return p("send_message_prefix_match", r !== void 0 && r !== "agent" ? "typed_name_pinned" : "prefix_of_claimed_pin"), {
          ...B(a.kind === "one" ? [a.candidate] : l, "prefix"),
          ...D(s),
          ...C(i.sendMessagePins, [n, o[0]], s.localClaimedRemoteBodies)
        }
      }
      if (a.kind === "ambiguous") {
        let l = e.byName.get(o[0]),
          c = ve(i.sendMessagePins, o[0], l, void 0, s, !0);
        if (c) return g("send_message_prefix_match", {
          input_len: n.length,
          index_size: e.candidates.length,
          pinned: 1
        }), ke(c, l, i, o[0], e, s);
        if (l.length === 1) p("send_message_prefix_match", "confirm_required");
        else m("send_message_prefix_match", "ambiguous_name");
        return {
          ...B(l, "prefix"),
          ...D(s),
          ...C(i.sendMessagePins, [n, o[0]], s.localClaimedRemoteBodies)
        }
      }
      if (s.cloudUnavailable || s.bridgeUnavailable || s.localUnavailable) return p("send_message_prefix_match", s.cloudUnavailable || s.bridgeUnavailable ? "remote_unsearched" : "local_unsearched"), {
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
          d = Syt(e.byName, a);
        return d?.kind === "one" ? [d.candidate] : r
      }), "prefix")
    }
  }
  return
}

function me(e, n, i) {
  let s = e.byName.get(n) ?? [],
    o = Syt(e.byName, n);
  return (o?.kind === "one" ? [o.candidate] : s).find((r) => r.ref === i)
}
async function H(e, n, i, s) {
  if (Ki()) {
    let o = !EMt(n.unavailable),
      a = zUn(e, s),
      r = await je(a, ge);
    if (r === void 0) {
      if (t(`[bridge:resolve] "${i}": Remote Control population not ready within ${ge}ms (cold) \u2014 not searched, disclosing a hedge`, {
          level: "warn"
        }), o) a.then((l) => ten(e, l, nen(l.rows, n.sessions)));
      return {
        rows: [],
        unavailable: "timeout",
        truncated: !1
      }
    }
    if (r.failed || r.identityKey !== null && !GUn(r)) return t(`[bridge:resolve] "${i}": Remote Control walk ${r.failed?"failed":"ran under a previous handle"} (cold) \u2014 not searched, disclosing a hedge`, {
      level: "warn"
    }), {
      rows: [],
      unavailable: "fetch_failed",
      truncated: !1
    };
    let d = nen(r.rows, n.sessions);
    if (o) ten(e, r, d);
    else VUn(e, r);
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
  return EMt(e) ? e : void 0
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
  if (vn(s) && !Ewr(s)) {
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
      return X(n, Vr(e.id), e.name);
    case "session":
      return {
        kind: "local-session", sock: e.sock, pinId: Lcn(e), ...e.claimedSessionIds !== void 0 && {
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
  if (!PJ()) return {};
  let o = n.filter((c) => aQe(c) && c.sessionId !== void 0 && c.formerNames?.some((u) => u.sessionId === c.sessionId && lo(u.name) === e));
  if (o.length !== 1) return {};
  let a = o[0];
  if (n.filter((c) => aQe(c) && Nle(c.sock, a.sock)).length !== 1) return {};
  let d = i.candidates.find((c) => c.kind === "session" && c.sock !== void 0 && jEe(c.sock, a.sock));
  if (d === void 0 || d4(d.name) !== null || qO(d.name) || (i.byName.get(lo(d.name))?.length ?? 0) !== 1) return {};
  let l = Object.hasOwn(s, e) ? s[e] : void 0;
  if (l !== void 0 && l.id !== Lcn(d)) return {};
  return {
    renamedTo: d
  }
}

function U(e, n, i) {
  let s = i ? n.candidates.filter(i) : n.candidates,
    o = L(s.map((r) => lo(r.name)));
  return {
    kind: "not-found",
    closest: y5(e, o, pe).map((r) => s.find((d) => lo(d.name) === r))
  }
}

function ve(e, n, i, s, o, a = !1) {
  let r = Object.hasOwn(e, n) ? e[n] : void 0;
  if (r === void 0) return;
  let d = w(e, n);
  if (d === "agent") return;
  let l = d !== "local";
  if (l && o.localClaimedRemoteBodies.has(er(r.id))) return;
  if (d === "cloud" && o.cloudUnavailable || d === "remote-control" && o.bridgeUnavailable || d === "local" && o.localUnavailable || a && (o.cloudUnavailable || o.bridgeUnavailable || o.localUnavailable)) return;
  let c = i.filter((f) => (l ? f.kind === "cloud-session" || f.kind === "bridge-session" : f.kind === "session") && f.where !== "in-process"),
    u = c.find((f) => Lcn(f) === r.id) ?? c.find((f) => Re(r, f));
  if (u === void 0) {
    if (!(l && o.searchTruncated)) p("send_message_pin", "stale");
    return
  }
  if (s !== void 0 && u.name !== s && i.some((f) => f.name === s)) return;
  return g("send_message_pin"), u
}

function ke(e, n, i, s, o, a) {
  let r = j(e, i);
  if (r.kind !== "local-session" && r.kind !== "cloud-session") return r;
  let d = Object.hasOwn(i.sendMessagePins, s) ? i.sendMessagePins[s] : void 0,
    c = r.kind === "local-session" && d !== void 0 && d.id !== r.pinId && d.sock !== void 0 && jEe(d.sock, r.sock) && _yt(d.id) && !_yt(r.pinId) ? {
      ...r,
      pinId: d.id,
      identityContested: !0
    } : r;
  return {
    ...c,
    ...n.length > 1 && {
      sameNamedSiblings: n.length - 1
    },
    ...J(c, s, o, a, i.sendMessagePins)
  }
}

function ye(e, n, i) {
  let s = new Set([...n.sessions.map((o) => er(o.id)), ...(i ?? []).map((o) => er(o.id))]);
  return new Set(e.flatMap((o) => o.bridgeSessionId !== void 0 && s.has(er(o.bridgeSessionId)) ? [o.sock] : []))
}

function Re(e, n) {
  if (Lcn(n) === e.id) return !0;
  if (e.sock === void 0 || n.kind !== "session" || n.sock === void 0 || !jEe(n.sock, e.sock)) return !1;
  return !_yt(e.id) || n.stableId === void 0 && (n.claimedSessionIds ?? []).some((i) => zUt(i) === e.id)
}

function J(e, n, i, s, o) {
  let a = Object.hasOwn(o, n) ? o[n] : void 0;
  return {
    ...e.kind === "local-session" && a?.sock !== void 0 && a.id === e.pinId && !jEe(a.sock, e.sock) && {
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
  _En,
  Ert,
  Osr,
  bEn,
  h7o,
  J5r,
  Q5r,
  hqe,
  Pqt,
  SEn,
  Isr,
  Z5r,
  Msr,
  Dsr,
  e8r,
  rEt,
  Lsr,
  Nsr,
  wEn,
  t8r,
  n8r,
  oEt,
  r8r,
  Oqt
};
