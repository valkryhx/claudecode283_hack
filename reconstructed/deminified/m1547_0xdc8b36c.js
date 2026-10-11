// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { go, iE } from "B:/~BUN/root/chunk-bvn0mpsk.js";
import { nt } from "B:/~BUN/root/chunk-17wqwt36.js";
import { I } from "B:/~BUN/root/chunk-y04k89s2.js";
import { zye } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { yAe } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { pr } from "B:/~BUN/root/chunk-1rjcv085.js";
import { Om, Nq, cpt, XYe, f$e, Rr, g$e, JYe, eY, h$e, II, P1, I1, QYe, nfn, dpt, RFt, y$e, upt } from "B:/~BUN/root/chunk-v4qhg3t2.js";
import { ca } from "B:/~BUN/root/chunk-6spmd6p4.js";
import { Ty, mi, Bce, hJ } from "B:/~BUN/root/chunk-3wnb3s8p.js";
import { DHn, lFn, Evr } from "B:/~BUN/root/chunk-3jyp964r.js";
import { In } from "B:/~BUN/root/chunk-y39emrp9.js";
import { Ws } from "B:/~BUN/root/chunk-mmnpv22v.js";
import { lKe, Gtn, Vtn, ZPt, qtn, eIt, Nst, pLe } from "B:/~BUN/root/chunk-jwaej6se.js";
import { ay } from "B:/~BUN/root/chunk-8p6es4nr.js";
import { L } from "B:/~BUN/root/chunk-z1enakv9.js";
async function wbt({
  tool: tool,
  input: input,
  ask: ask,
  permissionPhaseRan: permissionPhaseRan,
  recipientLabel: recipientLabel,
  parse: parse
}) {
  if (!(yAe() && !permissionPhaseRan)) return {
    proceed: !0,
    input: input,
    asked: !1
  };
  let d = await ask(input);
  if (d.behavior !== "allow") return {
    proceed: !1,
    asked: !0,
    reason: "denied",
    message: d.behavior === "deny" && d.message ? d.message : `isolatePeerMachines is enabled: sending to ${recipientLabel} needs your approval \u2014 nothing was sent.`
  };
  if (d.updatedInput === void 0) return {
    proceed: !0,
    input: input,
    asked: !0
  };
  let l = parse(d.updatedInput);
  if (!l.success) return {
    proceed: !1,
    asked: !0,
    reason: "bad_shape",
    message: `The permission handler narrowed the input to a shape ${tool.name} does not accept \u2014 nothing was sent.`
  };
  if (l.data.to !== input.to) return {
    proceed: !1,
    asked: !0,
    reason: "recipient_changed",
    message: `The permission handler changed the recipient (from ${recipientLabel}) after this send was resolved \u2014 nothing was sent. Send again to the recipient you intend.`
  };
  if (l.data.message !== void 0 && typeof l.data.message !== "string") return {
    proceed: !1,
    asked: !0,
    reason: "non_text_message",
    message: "The permission handler rewrote the message into a structured (non-text) form, which cannot be sent to another session \u2014 nothing was sent."
  };
  return {
    proceed: !0,
    input: l.data,
    asked: !0
  };
}
function qje(e, name, i) {
  let s = Rr(name);
  e(o => {
    let a = Object.hasOwn(o.sendMessagePins, s) ? o.sendMessagePins[s] : void 0,
      id = a !== void 0 && XYe(a.id) && !XYe(i.id) && (i.claimedSessionIds ?? []).some(item => cpt(item) === a.id) ? a.id : i.id;
    return a?.id === id && a.sock === i.sock ? o : {
      ...o,
      sendMessagePins: {
        ...o.sendMessagePins,
        [s]: {
          id: id,
          name: name,
          ref: y$e(i.kind, id),
          ...(i.sock !== void 0 && {
            sock: i.sock
          })
        }
      }
    };
  });
}
var sEn = "Note: messaging a new session for the first time under a previously used name (was it restarted?)";
function bqt(e, n) {
  return `
A session on this machine now named '${n}' reports '${e}' as one of its former names \u2014 if that is the session you meant, it goes by '${n}' now (a rename, not a stop).`;
}
function IJr(e) {
  return ` A session now named '${e}' reports it as a former name (renamed).`;
}
var wnr = "Note: another live session record on this machine currently claims this session's identity (the same conversation open in two places, or a record impersonating it). This went to the socket confirmed earlier in this conversation; if that is unexpected, check with the user before sending it anything sensitive.",
  vnr = "Note: this session has restarted since this conversation last reached it (same session, new process). If you were not expecting that, check with the user before sending it anything sensitive.",
  xIe = "another Claude session on this machine";
function vbt(e, n, i) {
  if (e === void 0) return {
    message: "",
    display: ""
  };
  let s = n && Ty(n) || "an agent in this session";
  return i.oneWay ? {
    message: "; sent under this session's address, not this agent's",
    display: ` (sent by ${s}, under this session's name)`
  } : {
    message: "; sent under this session's address: any reply will be delivered to this session's main conversation, not to this agent",
    display: ` (sent by ${s}; replies go to the main conversation)`
  };
}
function Sqt(e) {
  return e === "cloud" ? "a Claude session running in the cloud" : "a Claude session on another machine, over Remote Control";
}
var message = "; accepted by the server for that session, but delivery is not confirmed: it has not reported that it can receive cross-session messages and may be on an older version that cannot",
  display = " (accepted by the server; delivery not confirmed, that session may be on an older version)",
  xe = "; queued there \u2014 a [Cross-session delivery notice] follows if that session holds it (different permission mode: its user must approve first) or refuses it",
  _e = "; queued there \u2014 that session may hold it (different permission mode: its user must approve first) or refuse it, and with no inbox bound here nothing reports back, so never treat silence as agreement";
function knr(e) {
  return e ? xe : _e;
}
var aEn = "; not confirmed read \u2014 that session may hold it (different permission mode: its user must approve first) or refuse it, and this route reports nothing back",
  lEn = " (that session's settings decide delivery; no read receipt)";
function Enr(e) {
  return e ? {
    message: message,
    display: display
  } : {
    message: "",
    display: ""
  };
}
function DQe(e) {
  return `${e.alsoListedRemotely ? "; it is also connected via Remote Control" : ""}${e.remoteNamesakeClaimedLocally ? `; a Remote Control or cloud session also named '${e.displayName}' is registered to a session on this machine` : ""}${e.searchTruncated ? ae : ""}`;
}
function cEn(e, n, i = "live session", s = "delivery") {
  return re(e, `. ${s === "subscription" ? "The subscription" : "This"} went to the one this conversation confirmed; to switch, re-send with that ${i === "agent" ? "agent" : "session"}'s 'name [ref]'${n}.`, i);
}
function dEn(e, n = "live session", i = "delivery") {
  return re(e, `; ${i === "subscription" ? "the subscription" : "this"} went to the one confirmed earlier in this conversation.`, n);
}
function re(e, n, i) {
  let s = e.previouslyPinned ? `
${sEn}` : e.restartedSincePin ? `
${vnr}` : e.identityContested ? `
${wnr}` : "",
    o = e.sameNamedSiblings ? `
Note: ${e.sameNamedSiblings} other ${I(e.sameNamedSiblings, `${i} is`, `${i}s are`)} also named '${e.displayName}'${n}` : "";
  return `${s}${o}`;
}
function wqt(e) {
  return `${e.offline ? we : ""}${e.remoteNamesakeClaimedLocally ? `; another session also named '${e.displayName}' is registered to a session on this machine` : ""}${e.searchTruncated ? ae : ""}`;
}
var we = "; it is offline right now \u2014 delivery is queued until that machine reconnects";
function Tnr(e) {
  return e.localUnavailable && !e.bridgeUnavailable && !e.cloudUnavailable ? "the sessions on this machine could not be listed just now" : e.localUnavailable ? "this machine's and your account's other sessions could not all be checked just now" : "your account's other sessions could not be checked just now";
}
function Cnr(e) {
  return `A session on this machine now claims to be '${e}', which was confirmed earlier as a session elsewhere`;
}
var ae = "; your session list was too long to check completely, so a same-named session beyond what was searched would not have been seen",
  LQe = `
Your session list was too long to check completely, so a session by that name may exist beyond what was searched.`,
  Rnr = "your session list was too long to check completely";
async function kbt(e, n, i, s, o, credentials) {
  await lKe({
    refresh: !0,
    credentials: credentials
  });
  let r = Rr(n),
    d = ca(s.teamContext),
    teamFile = null;
  if (dpt(n)) return {
    kind: "not-found",
    closest: []
  };
  if (typeof i === "string") {
    if (n === Om) return {
      kind: "main"
    };
    let b = s.teamContext?.teammates ?? {},
      v = Object.entries(b).find(([, y]) => y.name === n),
      x = iE(n) ?? iE(r),
      g = v || x ? void 0 : s.agentNameRegistry.get(n),
      C = x ?? g;
    if (C) return G(s, C, n);
    if (v) return {
      kind: "mailbox",
      recipientName: n,
      memberAgentId: v[0],
      memberIdentitySource: "team-context"
    };
    let ne = P1(n);
    if (d) {
      if (n === mi) return {
        kind: "mailbox",
        recipientName: n
      };
      if (teamFile = await ay(d, o), ne === null && teamFile !== null) {
        let y = h$e(teamFile, eY(s)).find(item => item.name === n);
        if (y !== void 0) return {
          kind: "mailbox",
          recipientName: n,
          memberAgentId: y.agentId,
          memberIdentitySource: "roster"
        };
      }
    }
    let Re = eY(s),
      K = Object.entries(b).find(([agentId, h]) => (JYe({
        name: h.name,
        agentId: agentId
      }, Re) || !g$e(h.name)) && Rr(h.name) === r);
    if (K !== void 0) return {
      kind: "mailbox",
      recipientName: K[1].name,
      memberAgentId: K[0],
      memberIdentitySource: "team-context"
    };
    for (let [y, h] of s.agentNameRegistry) if (!g$e(y) && Rr(y) === r) return G(s, h, y);
    let M = ne;
    if (M) {
      let [y, h] = await Promise.all([lFn(), pLe(e, credentials)]),
        sessions = y.sessions,
        W = await de(e, s.sendMessagePins, Rr(M.name), h, r, Evr(e), credentials),
        {
          rows: X,
          unavailable: unavailable
        } = W,
        P = I1(s, {
          teamFile: teamFile,
          sessions: sessions,
          cloud: h.sessions,
          bridge: X
        }),
        w = Rr(M.name),
        se = (R, q, Se, Ce) => {
          let U = j(R, s);
          return U.kind === "local-session" || U.kind === "cloud-session" ? {
            ...U,
            ...J(U, w, q, {
              socksMirroredRemotely: ge(sessions, h, Se),
              searchTruncated: h.truncated === !0 || Ce
            }, s.sendMessagePins)
          } : U;
        },
        ie = ce(P, w, M.ref);
      if (ie) return se(ie, P, X, W.truncated);
      let te = unavailable,
        oe = W.truncated;
      if (X === void 0) {
        let R = await H(e, h, r, credentials);
        if (te = R.unavailable, oe = R.truncated, R.rows.length > 0) {
          P = I1(s, {
            teamFile: teamFile,
            sessions: sessions,
            cloud: h.sessions,
            bridge: R.rows
          });
          let q = ce(P, w, M.ref);
          if (q) return se(q, P, R.rows, R.truncated);
        }
      }
      return {
        ...D(w, P),
        ...fe(w, sessions, P, s.sendMessagePins),
        ...ue(h, te, y.unavailable, {
          remoteTruncated: oe
        }),
        ...N(s.sendMessagePins, [w], upt(sessions))
      };
    }
  }
  if (typeof i !== "string") {
    if (i.type === "shutdown_response") return {
      kind: "mailbox",
      recipientName: n
    };
    if (n !== mi && II(n)) return D(Rr(n), I1(s, {
      teamFile: null,
      sessions: []
    }), g => g.kind === "teammate");
    if (!d) return {
      kind: "mailbox",
      recipientName: n
    };
    if (n === mi) return {
      kind: "mailbox",
      recipientName: n
    };
    let b = Object.entries(s.teamContext?.teammates ?? {}).filter(([agentId_2, C]) => JYe({
        name: C.name,
        agentId: agentId_2
      }, eY(s)) || !g$e(C.name)),
      v = b.find(([, g]) => g.name === n);
    if (v) return {
      kind: "mailbox",
      recipientName: n,
      memberAgentId: v[0],
      memberIdentitySource: "team-context"
    };
    if (teamFile = await ay(d, o), P1(n) === null && teamFile !== null) {
      let g = h$e(teamFile, eY(s)).find(item => item.name === n);
      if (g !== void 0) return {
        kind: "mailbox",
        recipientName: n,
        memberAgentId: g.agentId,
        memberIdentitySource: "roster"
      };
    }
    let x = b.find(([, g]) => Rr(g.name) === r);
    if (x !== void 0) return {
      kind: "mailbox",
      recipientName: x[1].name,
      memberAgentId: x[0],
      memberIdentitySource: "team-context"
    };
    if (P1(n) === null && teamFile !== null) {
      let g = nfn(h$e(teamFile, eY(s)), n);
      if (g !== void 0) return {
        kind: "mailbox",
        recipientName: g.name,
        displayName: n,
        memberAgentId: g.agentId,
        memberIdentitySource: "roster"
      };
    }
    if (teamFile === null) return {
      kind: "mailbox",
      recipientName: n
    };
    return D(r, I1(s, {
      teamFile: teamFile,
      sessions: []
    }), g => g.kind === "teammate");
  }
  if (d && teamFile === null) {
    if (II(n)) return D(r, I1(s, {
      teamFile: teamFile,
      sessions: []
    }));
    return {
      kind: "mailbox",
      recipientName: n
    };
  }
  let [c, f] = await Promise.all([lFn(), pLe(e, credentials)]),
    sessions_2 = c.sessions,
    V = await de(e, s.sendMessagePins, r, f, r, Evr(e), credentials),
    {
      rows: S,
      unavailable: F,
      truncated: Y
    } = V,
    localClaimedRemoteBodies = upt(sessions_2),
    z = () => ({
      cloudUnavailable: be(f.unavailable),
      bridgeUnavailable: F,
      localClaimedRemoteBodies: localClaimedRemoteBodies,
      bridgeSettled: S !== void 0,
      localUnavailable: c.unavailable,
      socksMirroredRemotely: ge(sessions_2, f, S),
      searchTruncated: f.truncated === !0 || Y
    }),
    k = I1(s, {
      teamFile: teamFile,
      sessions: sessions_2,
      cloud: f.sessions,
      bridge: S
    }),
    T = k.byName.get(r)?.length === 1 ? k.byName.get(r)[0] : void 0,
    Z = A(s.sendMessagePins, r),
    ve = T !== void 0 && Z !== void 0 && Object.hasOwn(s.sendMessagePins, r) && ke(s.sendMessagePins[r], T),
    Ie = T !== void 0 && (T.kind === "session" || T.kind === "cloud-session") && Z !== "agent" && !ve;
  if (S === void 0 && Ie) {
    let b = await H(e, f, r, credentials);
    S = b.rows, F = b.unavailable, Y = b.truncated, k = I1(s, {
      teamFile: teamFile,
      sessions: sessions_2,
      cloud: f.sessions,
      bridge: b.rows
    });
  }
  let ee = le(k, r, n, s, z());
  if (ee) return ee;
  if (S === void 0) {
    let b = await H(e, f, r, credentials);
    if (S = b.rows, F = b.unavailable, Y = b.truncated, b.rows.length > 0) {
      k = I1(s, {
        teamFile: teamFile,
        sessions: sessions_2,
        cloud: f.sessions,
        bridge: b.rows
      });
      let v = le(k, r, n, s, z());
      if (v) return v;
    }
  }
  return Ee(k, r, s, z()) ?? {
    ...D(r, k),
    ...fe(r, sessions_2, k, s.sendMessagePins),
    ...ue(f, F, c.unavailable, {
      remoteTruncated: Y
    }),
    ...N(s.sendMessagePins, [r], localClaimedRemoteBodies)
  };
}
function Ae(e, n, i) {
  let s = A(e, n);
  if (s !== "cloud" && s !== "remote-control") return;
  let o = e[n];
  return i.has(pr(o.id)) ? o.name : void 0;
}
function Te(e, n) {
  let i = n[0];
  if (i === void 0 || i.length < 3) return n;
  let s = Object.keys(e).filter(item => item !== i && item.startsWith(i) && !n.includes(item));
  return s.length === 0 ? n : [...n, ...s];
}
function N(e, n, i) {
  for (let s of Te(e, n)) {
    let pinnedIdentityClaimedLocally = Ae(e, s, i);
    if (pinnedIdentityClaimedLocally !== void 0) return {
      pinnedIdentityClaimedLocally: pinnedIdentityClaimedLocally
    };
  }
  return {};
}
function A(e, n) {
  let i = Object.hasOwn(e, n) ? e[n] : void 0;
  if (i === void 0) return;
  if (iE(i.id) !== null) return "agent";
  if (i.id.startsWith("cse_")) return "cloud";
  return pr(i.id) !== i.id ? "remote-control" : "local";
}
async function de(e, n, i, s, o, a, r) {
  let rows = a?.rows;
  if (!Me(n, i, s.sessions, rows)) return {
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
function Me(e, n, i, s) {
  let o = A(e, n);
  if (o !== "remote-control" && o !== "cloud") return !1;
  let a = pr(e[n].id);
  if (i.some(item => pr(item.id) === a)) return !1;
  return s === void 0 || !s.some(item => pr(item.id) === a);
}
function O(e) {
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
function le(e, n, i, s, o) {
  let a = QYe(e.byName, n, i);
  if (a) {
    if (a.kind === "ambiguous") {
      let r = e.byName.get(n),
        d = pe(s.sendMessagePins, n, r, i, o);
      if (d) return ye(d, r, s, n, e, o);
      let l = N(s.sendMessagePins, [n], o.localClaimedRemoteBodies),
        c = r[0],
        f = A(s.sendMessagePins, n);
      if (r.length === 1 && (c.kind === "session" || c.kind === "cloud-session" || c.kind === "bridge-session") && !o.cloudUnavailable && o.bridgeSettled && !o.bridgeUnavailable && !o.localUnavailable && l.pinnedIdentityClaimedLocally === void 0 && f !== "agent" && !c.derivedName) {
        let u = j(c, s);
        if (u.kind === "local-session" || u.kind === "cloud-session") return {
          ...u,
          exactUnique: !0,
          ...(f !== void 0 && {
            previouslyPinned: !0
          }),
          ...J(u, n, e, o, s.sendMessagePins)
        };
      }
      return {
        ...B(r, "exact"),
        ...O(o),
        ...l
      };
    }
    return j(a.candidate, s);
  }
  return;
}
function Ee(e, n, i, s) {
  if (n.length >= 3) {
    let o = [...e.byName.keys()].filter(item => item.startsWith(n));
    if (o.length === 1) {
      let a = QYe(e.byName, o[0]),
        r = A(i.sendMessagePins, n),
        d = N(i.sendMessagePins, [n], s.localClaimedRemoteBodies).pinnedIdentityClaimedLocally !== void 0;
      if (r !== void 0 && r !== "agent" || d) {
        let l = e.byName.get(o[0]);
        return p("send_message_prefix_match", r !== void 0 && r !== "agent" ? "typed_name_pinned" : "prefix_of_claimed_pin"), {
          ...B(a.kind === "one" ? [a.candidate] : l, "prefix"),
          ...O(s),
          ...N(i.sendMessagePins, [n, o[0]], s.localClaimedRemoteBodies)
        };
      }
      if (a.kind === "ambiguous") {
        let l = e.byName.get(o[0]),
          c = pe(i.sendMessagePins, o[0], l, void 0, s, !0);
        if (c) return _("send_message_prefix_match", {
          input_len: n.length,
          index_size: e.candidates.length,
          pinned: 1
        }), ye(c, l, i, o[0], e, s);
        if (l.length === 1) p("send_message_prefix_match", "confirm_required");else m("send_message_prefix_match", "ambiguous_name");
        return {
          ...B(l, "prefix"),
          ...O(s),
          ...N(i.sendMessagePins, [n, o[0]], s.localClaimedRemoteBodies)
        };
      }
      if (s.cloudUnavailable || s.bridgeUnavailable || s.localUnavailable) return p("send_message_prefix_match", s.cloudUnavailable || s.bridgeUnavailable ? "remote_unsearched" : "local_unsearched"), {
        ...B([a.candidate], "prefix"),
        ...O(s),
        ...N(i.sendMessagePins, [n, o[0]], s.localClaimedRemoteBodies)
      };
      return _("send_message_prefix_match", {
        input_len: n.length,
        index_size: e.candidates.length,
        ...(s.searchTruncated && {
          search_truncated: !0
        })
      }), j(a.candidate, i);
    }
    if (o.length > 1) return m("send_message_prefix_match", "ambiguous_prefix"), {
      ...O(s),
      ...N(i.sendMessagePins, [n, ...o], s.localClaimedRemoteBodies),
      ...B(o.flatMap(item => {
        let r = e.byName.get(item),
          d = QYe(e.byName, item);
        return d?.kind === "one" ? [d.candidate] : r;
      }), "prefix")
    };
  }
  return;
}
function ce(e, n, i) {
  let s = e.byName.get(n) ?? [],
    o = QYe(e.byName, n);
  return (o?.kind === "one" ? [o.candidate] : s).find(item => item.ref === i);
}
async function H(e, n, i, s) {
  if (Ws()) {
    let o = !Nst(n.unavailable),
      a = Gtn(e, s),
      r = await nt(a, me);
    if (r === void 0) {
      if (t(`[bridge:resolve] "${i}": Remote Control population not ready within ${me}ms (cold) \u2014 not searched, disclosing a hedge`, {
        level: "warn"
      }), o) a.then(l => ZPt(e, l, eIt(l.rows, n.sessions)));
      return {
        rows: [],
        unavailable: "timeout",
        truncated: !1
      };
    }
    if (r.failed || r.identityKey !== null && !Vtn(r)) return t(`[bridge:resolve] "${i}": Remote Control walk ${r.failed ? "failed" : "ran under a previous handle"} (cold) \u2014 not searched, disclosing a hedge`, {
      level: "warn"
    }), {
      rows: [],
      unavailable: "fetch_failed",
      truncated: !1
    };
    let rows_2 = eIt(r.rows, n.sessions);
    if (o) ZPt(e, r, rows_2);else qtn(e, r);
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
function be(e) {
  return Nst(e) ? e : void 0;
}
function ue(e, bridgeUnavailable, i, {
  remoteTruncated: remoteTruncated
}) {
  return {
    cloudUnavailable: be(e.unavailable),
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
function G(e, agentId_3, agentName) {
  let s = e.tasks[agentId_3];
  if (In(s) && !DHn(s)) {
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
      return G(n, go(e.id), e.name);
    case "session":
      return {
        kind: "local-session",
        sock: e.sock,
        pinId: RFt(e),
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
var he = 3,
  me = 5000;
function B(e, matchedBy) {
  return {
    kind: "ambiguous",
    candidates: e.slice(0, he),
    total: e.length,
    matchedBy: matchedBy
  };
}
function fe(e, n, i, s) {
  if (!Nq()) return {};
  let o = n.filter(item => f$e(item) && item.sessionId !== void 0 && item.formerNames?.some(f => f.sessionId === item.sessionId && Rr(f.name) === e));
  if (o.length !== 1) return {};
  let a = o[0];
  if (n.filter(item => f$e(item) && hJ(item.sock, a.sock)).length !== 1) return {};
  let renamedTo = i.candidates.find(item => item.kind === "session" && item.sock !== void 0 && Bce(item.sock, a.sock));
  if (renamedTo === void 0 || P1(renamedTo.name) !== null || II(renamedTo.name) || (i.byName.get(Rr(renamedTo.name))?.length ?? 0) !== 1) return {};
  let l = Object.hasOwn(s, e) ? s[e] : void 0;
  if (l !== void 0 && l.id !== RFt(renamedTo)) return {};
  return {
    renamedTo: renamedTo
  };
}
function D(e, n, i) {
  let s = i ? n.candidates.filter(i) : n.candidates,
    o = L(s.map(item => Rr(item.name)));
  return {
    kind: "not-found",
    closest: zye(e, o, he).map(item => s.find(d => Rr(d.name) === item))
  };
}
function pe(e, n, i, s, o, a = !1) {
  let r = Object.hasOwn(e, n) ? e[n] : void 0;
  if (r === void 0) return;
  let d = A(e, n);
  if (d === "agent") return;
  let l = d !== "local";
  if (l && o.localClaimedRemoteBodies.has(pr(r.id))) return;
  if (d === "cloud" && o.cloudUnavailable || d === "remote-control" && o.bridgeUnavailable || d === "local" && o.localUnavailable || a && (o.cloudUnavailable || o.bridgeUnavailable || o.localUnavailable)) return;
  let c = i.filter(item => (l ? item.kind === "cloud-session" || item.kind === "bridge-session" : item.kind === "session") && item.where !== "in-process"),
    f = c.find(item => RFt(item) === r.id) ?? c.find(item => ke(r, item));
  if (f === void 0) {
    if (!(l && o.searchTruncated)) p("send_message_pin", "stale");
    return;
  }
  if (s !== void 0 && f.name !== s && i.some(item => item.name === s)) return;
  return _("send_message_pin"), f;
}
function ye(e, n, i, s, o, a) {
  let r = j(e, i);
  if (r.kind !== "local-session" && r.kind !== "cloud-session") return r;
  let d = Object.hasOwn(i.sendMessagePins, s) ? i.sendMessagePins[s] : void 0,
    c = r.kind === "local-session" && d !== void 0 && d.id !== r.pinId && d.sock !== void 0 && Bce(d.sock, r.sock) && XYe(d.id) && !XYe(r.pinId) ? {
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
function ge(e, n, i) {
  let s = new Set([...n.sessions.map(item => pr(item.id)), ...(i ?? []).map(item => pr(item.id))]);
  return new Set(e.flatMap(item => item.bridgeSessionId !== void 0 && s.has(pr(item.bridgeSessionId)) ? [item.sock] : []));
}
function ke(e, n) {
  if (RFt(n) === e.id) return !0;
  if (e.sock === void 0 || n.kind !== "session" || n.sock === void 0 || !Bce(n.sock, e.sock)) return !1;
  return !XYe(e.id) || n.stableId === void 0 && (n.claimedSessionIds ?? []).some(item => cpt(item) === e.id);
}
function J(e, n, i, s, o) {
  let a = Object.hasOwn(o, n) ? o[n] : void 0;
  return {
    ...(e.kind === "local-session" && a?.sock !== void 0 && a.id === e.pinId && !Bce(a.sock, e.sock) && {
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
export { wbt, qje, sEn, bqt, IJr, wnr, vnr, xIe, vbt, Sqt, message as iEn, knr, aEn, lEn, Enr, DQe, cEn, dEn, wqt, Tnr, Cnr, LQe, Rnr, kbt };