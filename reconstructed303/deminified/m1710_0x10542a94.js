// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { kqs, y5 } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { Vr, th } from "B:/~BUN/root/chunk-9ka04m0y.js";
import { L } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { je } from "B:/~BUN/root/chunk-89mss1tj.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { O } from "B:/~BUN/root/chunk-nggrknsv.js";
import { At } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { xe } from "B:/~BUN/root/chunk-8pmnanyd.js";
import { er } from "B:/~BUN/root/chunk-k9zm82w3.js";
import { Sh, PJ, zUt, _yt, aQe, lo, lQe, byt, Zte, dQe, qO, d4, c4, Syt, V3n, GUt, Lcn, cQe, VUt } from "B:/~BUN/root/chunk-e4q58xft.js";
import { id } from "B:/~BUN/root/chunk-8v3gkznb.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { P_, Oa, jEe, Nle } from "B:/~BUN/root/chunk-v6pbq6dm.js";
import { Wmr, Qio, Ewr } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { vn } from "B:/~BUN/root/chunk-k382hx6g.js";
import { Ki } from "B:/~BUN/root/chunk-19m6yp46.js";
import { Oct, zUn, GUn, ten, VUn, nen, EMt, K3e } from "B:/~BUN/root/chunk-0hq7zw7b.js";
import { Ub } from "B:/~BUN/root/chunk-p7n9drc0.js";
var we = {
    "remote-control": ["allow_remote_control"],
    cloud: ["allow_remote_sessions"],
    unknown: ["allow_remote_control", "allow_remote_sessions"]
  },
  re = {
    featureLabel: "Remote Control and Cloud sessions",
    verb: "are"
  },
  reason = "No organization policy allows sends to this kind of session, so it can't be shown as permitted.";
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
        featureLabel: featureLabel,
        verb: verb
      } = n.policyKeyLabel(d),
      u = n.policyDeniedReason(d, featureLabel, verb);
    if (u === null) return null;
    s.push(u);
  }
  let [o] = i;
  if (o === void 0) return {
    cause: "policy",
    reason: reason
  };
  let {
    logOrgPolicyDenied: logOrgPolicyDenied
  } = import.meta.require("B:/~BUN/root/chunk-4tk3a6tg.js");
  return logOrgPolicyDenied(o, "tool"), {
    cause: "policy",
    reason: (e === "unknown" && s.length > 1 ? n.policyDeniedReason(o, re.featureLabel, re.verb) ?? s[0] : s[0]) ?? reason
  };
}
function Ert(e, name, i) {
  let s = lo(name);
  e(o => {
    let a = Object.hasOwn(o.sendMessagePins, s) ? o.sendMessagePins[s] : void 0,
      id_2 = a !== void 0 && _yt(a.id) && !_yt(i.id) && (i.claimedSessionIds ?? []).some(item => zUt(item) === a.id) ? a.id : i.id;
    return a?.id === id_2 && a.sock === i.sock ? o : {
      ...o,
      sendMessagePins: {
        ...o.sendMessagePins,
        [s]: {
          id: id_2,
          name: name,
          ref: cQe(i.kind, id_2),
          ...(i.sock !== void 0 && {
            sock: i.sock
          })
        }
      }
    };
  });
}
var Osr = "Note: messaging a new session for the first time under a previously used name (was it restarted?)";
function bEn(e, n) {
  return `
A session on this machine now named '${n}' reports '${e}' as one of its former names \u2014 if that is the session you meant, it goes by '${n}' now (a rename, not a stop).`;
}
function h7o(e) {
  return ` A session now named '${e}' reports it as a former name (renamed).`;
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
  };
}
function SEn(e) {
  return e === "cloud" ? "a Claude session running in the cloud" : "a Claude session on another machine, over Remote Control";
}
var message = "; accepted by the server for that session, but delivery is not confirmed: it has not reported that it can receive cross-session messages and may be on an older version that cannot",
  display = " (accepted by the server; delivery not confirmed, that session may be on an older version)",
  Me = "; in that session's inbox, not yet read by its Claude \u2014 a [Cross-session delivery notice] follows if that session holds it (usually a different permission mode) or refuses it",
  Te = "; in that session's inbox, not yet read by its Claude \u2014 that session may hold it (usually a different permission mode) or refuse it, and with no inbox bound here nothing reports back, so never treat silence as agreement";
function Z5r(e) {
  return e ? Me : Te;
}
var Msr = "; not confirmed read \u2014 that session may hold it (usually a different permission mode) or refuse it, and this route reports nothing back",
  Dsr = " (that session's settings decide delivery; no read receipt)";
function e8r(e) {
  return e ? {
    message: message,
    display: display
  } : {
    message: "",
    display: ""
  };
}
function rEt(e) {
  return `${e.alsoListedRemotely ? "; it is also connected via Remote Control" : ""}${e.remoteNamesakeClaimedLocally ? `; a Remote Control or cloud session also named '${e.displayName}' is registered to a session on this machine` : ""}${e.searchTruncated ? le : ""}`;
}
function Lsr(e, n, i = "live session", s = "delivery") {
  return de(e, `. ${s === "subscription" ? "The subscription" : "This"} went to the one this conversation confirmed; to switch, re-send with that ${i === "agent" ? "agent" : "session"}'s 'name [ref]'${n}.`, i);
}
function Nsr(e, n = "live session", i = "delivery") {
  return de(e, `; ${i === "subscription" ? "the subscription" : "this"} went to the one confirmed earlier in this conversation.`, n);
}
function de(e, n, i) {
  let s = e.previouslyPinned ? `
${Osr}` : e.restartedSincePin ? `
${Q5r}` : e.identityContested ? `
${J5r}` : "",
    o = e.sameNamedSiblings ? `
Note: ${e.sameNamedSiblings} other ${O(e.sameNamedSiblings, `${i} is`, `${i}s are`)} also named '${e.displayName}'${n}` : "";
  return `${s}${o}`;
}
function wEn(e) {
  return `${e.offline ? Le : ""}${e.remoteNamesakeClaimedLocally ? `; another session also named '${e.displayName}' is registered to a session on this machine` : ""}${e.searchTruncated ? le : ""}`;
}
var Le = "; it is offline right now \u2014 delivery is queued until that machine reconnects";
function t8r(e) {
  return e.localUnavailable && !e.bridgeUnavailable && !e.cloudUnavailable ? "the sessions on this machine could not be listed just now" : e.localUnavailable ? "this machine's and your account's other sessions could not all be checked just now" : "your account's other sessions could not be checked just now";
}
function n8r(e) {
  return `A session on this machine now claims to be '${e}', which was confirmed earlier as a session elsewhere`;
}
var le = "; your session list was too long to check completely, so a same-named session beyond what was searched would not have been seen",
  oEt = `
Your session list was too long to check completely, so a session by that name may exist beyond what was searched.`,
  r8r = "your session list was too long to check completely";
async function Oqt(e, n, i, s, o, credentials) {
  await Oct({
    refresh: !0,
    credentials: credentials
  });
  let r = lo(n),
    d = id(s.teamContext),
    teamFile = null;
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
      if (teamFile = await Ub(d, o), ne === null && teamFile !== null) {
        let v = dQe(teamFile, Zte(s)).find(item => item.name === n);
        if (v !== void 0) return {
          kind: "mailbox",
          recipientName: n,
          memberAgentId: v.agentId,
          memberIdentitySource: "roster"
        };
      }
    }
    let Ne = Zte(s),
      z = Object.entries(y).find(([agentId, h]) => (byt({
        name: h.name,
        agentId: agentId
      }, Ne) || !lQe(h.name)) && lo(h.name) === r);
    if (z !== void 0) return {
      kind: "mailbox",
      recipientName: z[1].name,
      memberAgentId: z[0],
      memberIdentitySource: "team-context"
    };
    for (let [v, h] of s.agentNameRegistry) if (!lQe(v) && lo(v) === r) return X(s, h, v);
    let M = ne;
    if (M) {
      let [v, h] = await Promise.all([Wmr(), K3e(e, credentials)]),
        sessions = v.sessions,
        W = await ce(e, s.sendMessagePins, lo(M.name), h, r, Qio(e), credentials),
        {
          rows: G,
          unavailable: unavailable
        } = W,
        _ = c4(s, {
          teamFile: teamFile,
          sessions: sessions,
          cloud: h.sessions,
          bridge: G
        }),
        x = lo(M.name),
        se = (I, K, _e, Pe) => {
          let E = j(I, s);
          return E.kind === "local-session" || E.kind === "cloud-session" ? {
            ...E,
            ...J(E, x, K, {
              socksMirroredRemotely: ye(sessions, h, _e),
              searchTruncated: h.truncated === !0 || Pe
            }, s.sendMessagePins)
          } : E;
        },
        ie = me(_, x, M.ref);
      if (ie) return se(ie, _, G, W.truncated);
      let te = unavailable,
        oe = W.truncated;
      if (G === void 0) {
        let I = await H(e, h, r, credentials);
        if (te = I.unavailable, oe = I.truncated, I.rows.length > 0) {
          _ = c4(s, {
            teamFile: teamFile,
            sessions: sessions,
            cloud: h.sessions,
            bridge: I.rows
          });
          let K = me(_, x, M.ref);
          if (K) return se(K, _, I.rows, I.truncated);
        }
      }
      return {
        ...U(x, _),
        ...be(x, sessions, _, s.sendMessagePins),
        ...fe(h, te, v.unavailable, {
          remoteTruncated: oe
        }),
        ...C(s.sendMessagePins, [x], VUt(sessions))
      };
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
    }), b => b.kind === "teammate");
    if (!d) return {
      kind: "mailbox",
      recipientName: n
    };
    if (n === Oa) return {
      kind: "mailbox",
      recipientName: n
    };
    let y = Object.entries(s.teamContext?.teammates ?? {}).filter(([agentId_2, S]) => byt({
        name: S.name,
        agentId: agentId_2
      }, Zte(s)) || !lQe(S.name)),
      R = y.find(([, b]) => b.name === n);
    if (R) return {
      kind: "mailbox",
      recipientName: n,
      memberAgentId: R[0],
      memberIdentitySource: "team-context"
    };
    if (teamFile = await Ub(d, o), d4(n) === null && teamFile !== null) {
      let b = dQe(teamFile, Zte(s)).find(item => item.name === n);
      if (b !== void 0) return {
        kind: "mailbox",
        recipientName: n,
        memberAgentId: b.agentId,
        memberIdentitySource: "roster"
      };
    }
    let P = y.find(([, b]) => lo(b.name) === r);
    if (P !== void 0) return {
      kind: "mailbox",
      recipientName: P[1].name,
      memberAgentId: P[0],
      memberIdentitySource: "team-context"
    };
    if (d4(n) === null && teamFile !== null) {
      let b = V3n(dQe(teamFile, Zte(s)), n);
      if (b !== void 0) return {
        kind: "mailbox",
        recipientName: b.name,
        displayName: n,
        memberAgentId: b.agentId,
        memberIdentitySource: "roster"
      };
    }
    if (teamFile === null) return {
      kind: "mailbox",
      recipientName: n
    };
    return U(r, c4(s, {
      teamFile: teamFile,
      sessions: []
    }), b => b.kind === "teammate");
  }
  if (d && teamFile === null) {
    if (qO(n)) return U(r, c4(s, {
      teamFile: teamFile,
      sessions: []
    }));
    return {
      kind: "mailbox",
      recipientName: n
    };
  }
  let [c, u] = await Promise.all([Wmr(), K3e(e, credentials)]),
    sessions_2 = c.sessions,
    q = await ce(e, s.sendMessagePins, r, u, r, Qio(e), credentials),
    {
      rows: N,
      unavailable: F,
      truncated: Y
    } = q,
    localClaimedRemoteBodies = VUt(sessions_2),
    V = () => ({
      cloudUnavailable: he(u.unavailable),
      bridgeUnavailable: F,
      localClaimedRemoteBodies: localClaimedRemoteBodies,
      bridgeSettled: N !== void 0,
      localUnavailable: c.unavailable,
      socksMirroredRemotely: ye(sessions_2, u, N),
      searchTruncated: u.truncated === !0 || Y
    }),
    k = c4(s, {
      teamFile: teamFile,
      sessions: sessions_2,
      cloud: u.sessions,
      bridge: N
    }),
    A = k.byName.get(r)?.length === 1 ? k.byName.get(r)[0] : void 0,
    Z = w(s.sendMessagePins, r),
    Ie = A !== void 0 && Z !== void 0 && Object.hasOwn(s.sendMessagePins, r) && Re(s.sendMessagePins[r], A),
    Ce = A !== void 0 && (A.kind === "session" || A.kind === "cloud-session") && Z !== "agent" && !Ie;
  if (N === void 0 && Ce) {
    let y = await H(e, u, r, credentials);
    N = y.rows, F = y.unavailable, Y = y.truncated, k = c4(s, {
      teamFile: teamFile,
      sessions: sessions_2,
      cloud: u.sessions,
      bridge: y.rows
    });
  }
  let ee = ue(k, r, n, s, V());
  if (ee) return ee;
  if (N === void 0) {
    let y = await H(e, u, r, credentials);
    if (N = y.rows, F = y.unavailable, Y = y.truncated, y.rows.length > 0) {
      k = c4(s, {
        teamFile: teamFile,
        sessions: sessions_2,
        cloud: u.sessions,
        bridge: y.rows
      });
      let R = ue(k, r, n, s, V());
      if (R) return R;
    }
  }
  return De(k, r, s, V()) ?? {
    ...U(r, k),
    ...be(r, sessions_2, k, s.sendMessagePins),
    ...fe(u, F, c.unavailable, {
      remoteTruncated: Y
    }),
    ...C(s.sendMessagePins, [r], localClaimedRemoteBodies)
  };
}
function Ee(e, n, i) {
  let s = w(e, n);
  if (s !== "cloud" && s !== "remote-control") return;
  let o = e[n];
  return i.has(er(o.id)) ? o.name : void 0;
}
function Ue(e, n) {
  let i = n[0];
  if (i === void 0 || i.length < 3) return n;
  let s = Object.keys(e).filter(item => item !== i && item.startsWith(i) && !n.includes(item));
  return s.length === 0 ? n : [...n, ...s];
}
function C(e, n, i) {
  for (let s of Ue(e, n)) {
    let pinnedIdentityClaimedLocally = Ee(e, s, i);
    if (pinnedIdentityClaimedLocally !== void 0) return {
      pinnedIdentityClaimedLocally: pinnedIdentityClaimedLocally
    };
  }
  return {};
}
function w(e, n) {
  let i = Object.hasOwn(e, n) ? e[n] : void 0;
  if (i === void 0) return;
  if (th(i.id) !== null) return "agent";
  if (i.id.startsWith("cse_")) return "cloud";
  return er(i.id) !== i.id ? "remote-control" : "local";
}
async function ce(e, n, i, s, o, a, r) {
  let rows = a?.rows;
  if (!Oe(n, i, s.sessions, rows)) return {
    rows: rows,
    unavailable: void 0,
    truncated: a !== void 0 && a.truncated
  };
  let l = await H(e, s, o, r);
  return {
    rows: l.unavailable === void 0 || rows === void 0 ? l.rows : rows,
    unavailable: l.unavailable,
    truncated: l.unavailable === void 0 || a === void 0 ? l.truncated : a.truncated
  };
}
function Oe(e, n, i, s) {
  let o = w(e, n);
  if (o !== "remote-control" && o !== "cloud") return !1;
  let a = er(e[n].id);
  if (i.some(item => er(item.id) === a)) return !1;
  return s === void 0 || !s.some(item => er(item.id) === a);
}
function D(e) {
  return {
    ...(e.cloudUnavailable && {
      cloudUnavailable: e.cloudUnavailable
    }),
    ...(e.bridgeUnavailable && {
      bridgeUnavailable: e.bridgeUnavailable
    }),
    ...(e.localUnavailable && {
      localUnavailable: !0
    }),
    ...(e.searchTruncated && {
      searchTruncated: !0
    })
  };
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
          ...(u !== void 0 && {
            previouslyPinned: !0
          }),
          ...J(f, n, e, o, s.sendMessagePins)
        };
      }
      return {
        ...B(r, "exact"),
        ...D(o),
        ...l
      };
    }
    return j(a.candidate, s);
  }
  return;
}
function De(e, n, i, s) {
  if (n.length >= 3) {
    let o = [...e.byName.keys()].filter(item => item.startsWith(n));
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
        };
      }
      if (a.kind === "ambiguous") {
        let l = e.byName.get(o[0]),
          c = ve(i.sendMessagePins, o[0], l, void 0, s, !0);
        if (c) return g("send_message_prefix_match", {
          input_len: n.length,
          index_size: e.candidates.length,
          pinned: 1
        }), ke(c, l, i, o[0], e, s);
        if (l.length === 1) p("send_message_prefix_match", "confirm_required");else m("send_message_prefix_match", "ambiguous_name");
        return {
          ...B(l, "prefix"),
          ...D(s),
          ...C(i.sendMessagePins, [n, o[0]], s.localClaimedRemoteBodies)
        };
      }
      if (s.cloudUnavailable || s.bridgeUnavailable || s.localUnavailable) return p("send_message_prefix_match", s.cloudUnavailable || s.bridgeUnavailable ? "remote_unsearched" : "local_unsearched"), {
        ...B([a.candidate], "prefix"),
        ...D(s),
        ...C(i.sendMessagePins, [n, o[0]], s.localClaimedRemoteBodies)
      };
      return g("send_message_prefix_match", {
        input_len: n.length,
        index_size: e.candidates.length,
        ...(s.searchTruncated && {
          search_truncated: !0
        })
      }), j(a.candidate, i);
    }
    if (o.length > 1) return m("send_message_prefix_match", "ambiguous_prefix"), {
      ...D(s),
      ...C(i.sendMessagePins, [n, ...o], s.localClaimedRemoteBodies),
      ...B(o.flatMap(item => {
        let r = e.byName.get(item),
          d = Syt(e.byName, item);
        return d?.kind === "one" ? [d.candidate] : r;
      }), "prefix")
    };
  }
  return;
}
function me(e, n, i) {
  let s = e.byName.get(n) ?? [],
    o = Syt(e.byName, n);
  return (o?.kind === "one" ? [o.candidate] : s).find(item => item.ref === i);
}
async function H(e, n, i, s) {
  if (Ki()) {
    let o = !EMt(n.unavailable),
      a = zUn(e, s),
      r = await je(a, ge);
    if (r === void 0) {
      if (t(`[bridge:resolve] "${i}": Remote Control population not ready within ${ge}ms (cold) \u2014 not searched, disclosing a hedge`, {
        level: "warn"
      }), o) a.then(l => ten(e, l, nen(l.rows, n.sessions)));
      return {
        rows: [],
        unavailable: "timeout",
        truncated: !1
      };
    }
    if (r.failed || r.identityKey !== null && !GUn(r)) return t(`[bridge:resolve] "${i}": Remote Control walk ${r.failed ? "failed" : "ran under a previous handle"} (cold) \u2014 not searched, disclosing a hedge`, {
      level: "warn"
    }), {
      rows: [],
      unavailable: "fetch_failed",
      truncated: !1
    };
    let rows_2 = nen(r.rows, n.sessions);
    if (o) ten(e, r, rows_2);else VUn(e, r);
    return t(`[bridge:resolve] "${i}": ${r.rows.length} Remote Control rows, ${rows_2.length} listed (cold${o ? ", recorded" : ", not recorded \u2014 cloud list failed"})`), {
      rows: rows_2,
      unavailable: void 0,
      truncated: r.truncated === !0
    };
  }
  return {
    rows: [],
    unavailable: void 0,
    truncated: !1
  };
}
function he(e) {
  return EMt(e) ? e : void 0;
}
function fe(e, bridgeUnavailable, i, {
  remoteTruncated: remoteTruncated
}) {
  return {
    cloudUnavailable: he(e.unavailable),
    ...(bridgeUnavailable !== void 0 && {
      bridgeUnavailable: bridgeUnavailable
    }),
    ...(i && {
      localUnavailable: !0
    }),
    ...((e.truncated === !0 || remoteTruncated) && {
      searchTruncated: !0
    })
  };
}
function X(e, agentId_3, agentName) {
  let s = e.tasks[agentId_3];
  if (vn(s) && !Ewr(s)) {
    if (s.status === "running") return {
      kind: "agent-live",
      agentId: agentId_3,
      agentName: agentName
    };
    if (s.stoppedByUser) return {
      kind: "agent-stopped-by-user",
      agentName: agentName
    };
    return {
      kind: "agent-stopped",
      agentId: agentId_3,
      status: s.status,
      agentName: agentName
    };
  }
  return {
    kind: "agent-evicted",
    agentId: agentId_3,
    agentName: agentName
  };
}
function j(e, n) {
  switch (e.kind) {
    case "main":
      return {
        kind: "main"
      };
    case "teammate":
      return {
        kind: "mailbox",
        recipientName: e.name,
        memberAgentId: e.id,
        memberIdentitySource: e.where === "in-process" ? "team-context" : "roster"
      };
    case "subagent":
      return X(n, Vr(e.id), e.name);
    case "session":
      return {
        kind: "local-session",
        sock: e.sock,
        pinId: Lcn(e),
        ...(e.claimedSessionIds !== void 0 && {
          claimedSessionIds: e.claimedSessionIds
        }),
        displayName: e.name,
        ...(e.hostSessionId !== void 0 && {
          hostSessionId: e.hostSessionId
        })
      };
    case "cloud-session":
    case "bridge-session":
      return {
        kind: "cloud-session",
        via: e.where === "cloud" ? "cloud" : "remote-control",
        refKind: e.kind,
        sessionId: e.id,
        displayName: e.name,
        ...(e.offline && {
          offline: !0
        }),
        ...(e.reportsInbound && {
          reportsInbound: !0
        }),
        ...(e.inboundReportUnavailable && {
          inboundReportUnavailable: !0
        })
      };
  }
}
var pe = 3,
  ge = 5000;
function B(e, matchedBy) {
  return {
    kind: "ambiguous",
    candidates: e.slice(0, pe),
    total: e.length,
    matchedBy: matchedBy
  };
}
function be(e, n, i, s) {
  if (!PJ()) return {};
  let o = n.filter(item => aQe(item) && item.sessionId !== void 0 && item.formerNames?.some(u => u.sessionId === item.sessionId && lo(u.name) === e));
  if (o.length !== 1) return {};
  let a = o[0];
  if (n.filter(item => aQe(item) && Nle(item.sock, a.sock)).length !== 1) return {};
  let renamedTo = i.candidates.find(item => item.kind === "session" && item.sock !== void 0 && jEe(item.sock, a.sock));
  if (renamedTo === void 0 || d4(renamedTo.name) !== null || qO(renamedTo.name) || (i.byName.get(lo(renamedTo.name))?.length ?? 0) !== 1) return {};
  let l = Object.hasOwn(s, e) ? s[e] : void 0;
  if (l !== void 0 && l.id !== Lcn(renamedTo)) return {};
  return {
    renamedTo: renamedTo
  };
}
function U(e, n, i) {
  let s = i ? n.candidates.filter(i) : n.candidates,
    o = L(s.map(item => lo(item.name)));
  return {
    kind: "not-found",
    closest: y5(e, o, pe).map(item => s.find(d => lo(d.name) === item))
  };
}
function ve(e, n, i, s, o, a = !1) {
  let r = Object.hasOwn(e, n) ? e[n] : void 0;
  if (r === void 0) return;
  let d = w(e, n);
  if (d === "agent") return;
  let l = d !== "local";
  if (l && o.localClaimedRemoteBodies.has(er(r.id))) return;
  if (d === "cloud" && o.cloudUnavailable || d === "remote-control" && o.bridgeUnavailable || d === "local" && o.localUnavailable || a && (o.cloudUnavailable || o.bridgeUnavailable || o.localUnavailable)) return;
  let c = i.filter(item => (l ? item.kind === "cloud-session" || item.kind === "bridge-session" : item.kind === "session") && item.where !== "in-process"),
    u = c.find(item => Lcn(item) === r.id) ?? c.find(item => Re(r, item));
  if (u === void 0) {
    if (!(l && o.searchTruncated)) p("send_message_pin", "stale");
    return;
  }
  if (s !== void 0 && u.name !== s && i.some(item => item.name === s)) return;
  return g("send_message_pin"), u;
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
    ...(n.length > 1 && {
      sameNamedSiblings: n.length - 1
    }),
    ...J(c, s, o, a, i.sendMessagePins)
  };
}
function ye(e, n, i) {
  let s = new Set([...n.sessions.map(item => er(item.id)), ...(i ?? []).map(item => er(item.id))]);
  return new Set(e.flatMap(item => item.bridgeSessionId !== void 0 && s.has(er(item.bridgeSessionId)) ? [item.sock] : []));
}
function Re(e, n) {
  if (Lcn(n) === e.id) return !0;
  if (e.sock === void 0 || n.kind !== "session" || n.sock === void 0 || !jEe(n.sock, e.sock)) return !1;
  return !_yt(e.id) || n.stableId === void 0 && (n.claimedSessionIds ?? []).some(item => zUt(item) === e.id);
}
function J(e, n, i, s, o) {
  let a = Object.hasOwn(o, n) ? o[n] : void 0;
  return {
    ...(e.kind === "local-session" && a?.sock !== void 0 && a.id === e.pinId && !jEe(a.sock, e.sock) && {
      restartedSincePin: !0
    }),
    ...(e.kind === "local-session" && s.socksMirroredRemotely.has(e.sock) && {
      alsoListedRemotely: !0
    }),
    ...([...(i.remoteNamesClaimedLocally.get(n) ?? [])].some(item => e.kind !== "local-session" || item !== e.sock) && {
      remoteNamesakeClaimedLocally: !0
    }),
    ...(s.searchTruncated && {
      searchTruncated: !0
    })
  };
}
export { _En, Ert, Osr, bEn, h7o, J5r, Q5r, hqe, Pqt, SEn, message as Isr, Z5r, Msr, Dsr, e8r, rEt, Lsr, Nsr, wEn, t8r, n8r, oEt, r8r, Oqt };