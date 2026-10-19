// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { kDo, GC } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { rn } from "B:/~BUN/root/chunk-pjgzz98k.js";
import { Sh, PJ, zWe, HFr, lo, lQe, byt, Zte, c4, BEe, Mge, jMe, Dcn, GUt, jNo, u2s, cQe, Ncn } from "B:/~BUN/root/chunk-e4q58xft.js";
import { Ux, id } from "B:/~BUN/root/chunk-8v3gkznb.js";
import { Ki } from "B:/~BUN/root/chunk-19m6yp46.js";
import { vrn, gX, OEo, IEo } from "B:/~BUN/root/chunk-pwz0pnkt.js";
import { Fyo } from "B:/~BUN/root/chunk-c8j3aby6.js";
import { Ykr as text, Myo, Oct, zUn, GUn, ten, VUn, Lyo, nen, EMt, K3e, ren, jq } from "B:/~BUN/root/chunk-0hq7zw7b.js";
import { XBe } from "B:/~BUN/root/chunk-6xef02qz.js";
import { yoe } from "B:/~BUN/root/chunk-pcra2gst.js";
import { Ub } from "B:/~BUN/root/chunk-p7n9drc0.js";
import { Rn } from "B:/~BUN/root/chunk-hwnj8m4g.js";
import { basename as z } from "path";
function v() {
  return `not reachable with ${Rn}${XBe() ? ` or ${jq}` : ""} from this cloud session`;
}
var B = "Claude Desktop session",
  text_3 = "(session list too long to fetch completely \u2014 sessions beyond the first pages are missing from this listing)";
async function X9r(e, t, credentials) {
  let s = Ki(),
    didFocused = !1;
  if (s) await Oct({
    refresh: !0,
    credentials: credentials
  });
  let r = s ? zUn(e, credentials) : Promise.resolve({
      rows: [],
      failed: !1,
      identityKey: null
    }),
    u = Promise.resolve({
      peers: [],
      warnings: []
    }),
    localListFailed = !1,
    ownEndpointShadowed = !1,
    [p, g, o, m] = await Promise.all([s ? IEo().catch(d => {
      if (d instanceof vrn) return localListFailed = !0, [];
      throw d;
    }) : Promise.resolve([]), r, K3e(e, credentials), u, s && !0 && PJ() ? OEo().then(d => {
      ownEndpointShadowed = d;
    }, () => {}) : Promise.resolve()]),
    peers = p.map(d => ({
      transport: "uds",
      address: `uds:${d.sock}`,
      session: d
    }));
  for (let session of o.sessions) {
    if (Ncn(p, session.id) || yoe(session.id)) continue;
    peers.push({
      transport: "cloud",
      address: void 0,
      session: session
    });
  }
  let h = Lyo(g.rows, p, o.sessions);
  if (!EMt(o.unavailable)) ten(e, g, nen(g.rows, o.sessions));else VUn(e, g);
  for (let session_2 of h) peers.push({
    transport: "bridge",
    address: `bridge:${session_2.id}`,
    session: session_2
  });
  for (let session_3 of m.peers) peers.push({
    transport: "did",
    address: session_3.did,
    session: session_3
  });
  return {
    peers: peers,
    didWarnings: m.warnings,
    didFocused: didFocused,
    bridgeWalkFailed: g.failed || g.identityKey !== null && !GUn(g),
    cloudListFailed: EMt(o.unavailable),
    localListFailed: localListFailed,
    ownEndpointShadowed: ownEndpointShadowed,
    messagingDisabled: !s,
    listTruncated: o.truncated === !0 || g.truncated === !0
  };
}
function V(callerIsSubagent = !1) {
  let sock = gX(),
    name = Dcn(GC()?.name);
  if (!sock || name === null) return null;
  return {
    name: name,
    token: `${name} [${cQe("session", jNo(sock))}]`,
    socketToken: `${name} [${cQe("session", sock)}]`,
    sock: sock,
    callerIsSubagent: callerIsSubagent,
    nameIsUserChosen: Fyo() !== void 0
  };
}
function Y(e, t = [], i = !1) {
  if (!e) return null;
  let s = R(e, t, i),
    n = PJ() && s === e.token ? " Session names and [ref]s listed here normally stay the same when a session restarts or is resumed; if one stops resolving, list again." : "";
  return e.callerIsSubagent ? `This process's main session is ${s} \u2014 the name OTHER sessions use to message it (it is not listed below; from inside this process, address the main conversation as "${Sh}").${n}` : `This session is ${s} \u2014 the name other sessions use to message it (it is not listed below; a message to it would be a message to yourself).${n}`;
}
function R(e, t, i) {
  return u2s(t, e.sock, i) ? e.socketToken : e.token;
}
async function J9r(e, t) {
  let appState = e.getAppState(),
    s = id(appState.teamContext);
  return {
    appState: appState,
    teamFile: s ? await Ub(s, e.storageV5) : null,
    callerTeammateId: e.teammateContext === void 0 ? void 0 : e.agentContext?.agentId === e.teammateContext.agentId ? e.teammateContext.agentId : null,
    self: V(t)
  };
}
function Tni(e, t, {
  didWarnings = [],
  didFocused: didFocused_2 = !1,
  bridgeWalkFailed = !1,
  cloudListFailed = !1,
  localListFailed: localListFailed_2 = !1,
  ownEndpointShadowed: ownEndpointShadowed_2 = !1,
  messagingDisabled = !1,
  listTruncated = !1,
  callerCanSend = !0
} = {}) {
  let sessions = e.flatMap(item => item.transport === "uds" ? [item.session] : []),
    cloud = e.flatMap(item => item.transport === "cloud" ? [item.session] : []),
    a = c4(t.appState, {
      teamFile: t.teamFile,
      sessions: sessions,
      cloud: cloud,
      bridge: bridgeWalkFailed ? [] : e.flatMap(item => item.transport === "bridge" ? [item.session] : [])
    }),
    h = new Map(a.candidates.map(item => [`${item.kind}\x00${item.id}`, item])),
    d = D(t.appState),
    _ = U(t.appState, t.teamFile, t.callerTeammateId),
    O = e.flatMap(item => item.transport === "bridge" ? [item] : []),
    de = e.flatMap(item => item.transport === "did" ? [item.session] : []),
    k = [];
  if (d.length > 0) k.push(te(d, h));
  if (_.length > 0) k.push(se(_, h));
  if (!didFocused_2 && (sessions.length > 0 || cloud.length > 0 || O.length > 0 || bridgeWalkFailed || cloudListFailed || localListFailed_2 || listTruncated)) k.push(ie(sessions, h, cloud, O, bridgeWalkFailed, cloudListFailed, localListFailed_2, listTruncated));
  let E = k.map(item => item.text),
    y = {
      sections: k.filter(item => item.rows.length > 0).map(item => ({
        kind: item.kind,
        total: item.total,
        rows: item.rows.slice(0, Z).map(item => item.agent)
      })),
      notes: k.flatMap(item => item.notes)
    };
  if (messagingDisabled) y.notes.unshift({
    kind: "messaging_disabled",
    text: P
  });
  let b = messagingDisabled ? null : Y(t.self, sessions, ownEndpointShadowed_2);
  if (messagingDisabled && E.length > 0) E.unshift(P);
  let M = !callerCanSend && y.sections.length > 0;
  if (M && messagingDisabled) E.splice(1, 0, x);
  let K = M && !messagingDisabled ? `${x}

` : "";
  if (E.length === 0) {
    if (messagingDisabled) return {
      listing: P,
      ...y
    };
    if (!b) return {
      listing: "No reachable agents.",
      ...y
    };
    if (!callerCanSend) return {
      listing: !didFocused_2 && !bridgeWalkFailed ? `${b}

No reachable agents \u2014 no other Claude session is running on this machine right now.` : `${b}

No other session appears in this listing right now.`,
      ...y
    };
    return {
      listing: !didFocused_2 && !bridgeWalkFailed ? `${b}

No reachable agents \u2014 no other Claude session is running on this machine right now (peer messaging itself is available; a session appears here once it is started).` : `${b}

No other session appears in this listing right now (peer messaging itself is available).`,
      ...y
    };
  }
  return {
    listing: `${K}${b ? `${b}

${E.join(`

`)}` : E.join(`

`)}`,
    ...y
  };
}
function D(e) {
  let t = new Map();
  for (let [n, r] of e.agentNameRegistry) t.set(r, n);
  let i = new Set(Object.values(e.teamContext?.teammates ?? {}).map(item => item.name)),
    s = [];
  for (let n of Object.values(e.tasks)) {
    if (n.type !== "local_agent" || n.agentType === "main-session") continue;
    let r = t.get(n.id);
    s.push({
      agentId: n.id,
      name: r !== void 0 && i.has(r) ? void 0 : r,
      agentType: n.agentType,
      status: n.status,
      startTime: n.startTime
    });
  }
  return s;
}
var x = `None of the agents below can be messaged with ${Rn} from here: it is not among the tools available to you.`,
  P = "Cross-session messaging is switched off in this session right now \u2014 no sessions were listed, and this session is not reachable by name until it is switched back on.",
  text_2 = "(the session list on this machine could not be read just now \u2014 other local sessions may be missing from this listing; a later listing retries)";
function U(e, t, i) {
  let teamContext = e.teamContext;
  if (!teamContext && !t) return [];
  let n = i === null ? void 0 : i ?? (teamContext ? teamContext.selfAgentId ?? (teamContext.isLeader === !1 ? void 0 : teamContext.leadAgentId) : Ux()),
    r = new Map();
  for (let o of Object.values(e.tasks)) if (o.type === "in_process_teammate") r.set(o.identity.agentId, o.isIdle ? "idle" : o.status);
  let u = [],
    f = new Set(n !== void 0 ? [n] : []),
    c = new Set();
  for (let o of e.agentNameRegistry.keys()) c.add(lo(o));
  let p = Zte(e),
    g = (name_2, agentId) => byt({
      name: name_2,
      agentId: agentId
    }, p) || !lQe(name_2);
  for (let [teammateId, m] of Object.entries(teamContext?.teammates ?? {})) {
    if (f.has(teammateId) || !g(m.name, teammateId)) continue;
    f.add(teammateId);
    let a = m.tmuxPaneId === "in-process" || m.tmuxPaneId === "leader";
    u.push({
      teammateId: teammateId,
      name: m.name,
      agentType: m.agentType,
      status: a ? r.get(teammateId) : void 0,
      backend: a ? "in-process" : "pane",
      since: m.spawnedAt,
      nameShadowed: !1
    });
  }
  for (let o of t?.members ?? []) {
    if (f.has(o.agentId) || !g(o.name, o.agentId)) continue;
    f.add(o.agentId), u.push({
      teammateId: o.agentId,
      name: o.name,
      agentType: o.agentType,
      status: void 0,
      backend: "roster",
      since: o.joinedAt,
      nameShadowed: Q(o.name, e, c)
    });
  }
  return u;
}
function Q(e, t, i) {
  let s = Mge(e) ?? e;
  if (!i.has(lo(s))) return !1;
  return t.agentNameRegistry.has(e) || s !== e ? "unreachable" : "bare-only";
}
function H(e, t) {
  if (typeof e.since !== "number" || !Number.isFinite(e.since) || e.since > t || t - e.since > ee) return;
  return `${e.backend === "roster" ? "joined" : "started"} ${T(t - e.since)} ago`;
}
function A(e, t, i = t.length) {
  return `${e} (${i}):
${t.join(`
`)}`;
}
var W = 100,
  F = 100,
  Z = 100,
  ee = 315360000000;
function ne(e, t, i) {
  let s = t.slice(0, W).map(i),
    n = t.length - s.length;
  if (n > 0) s.push(`  (\u2026 ${n} more not shown)`);
  return `${e} (${t.length}):
${s.join(`
`)}`;
}
function X(e, t, i) {
  let s = e.formerNames?.[0];
  if (s === void 0) return;
  let n = t - s.until;
  if (n < 0 || n >= kDo) return;
  let r = i(s.name);
  return r ? `says it was ${r} until ${T(t - s.until)} ago` : void 0;
}
function L(e, t) {
  let agent = {
      ...e.shown
    },
    s = [e.printed];
  for (let n of t) {
    if (typeof n === "string") {
      s.push(n);
      continue;
    }
    let r = n === void 0 ? void 0 : "type" in n ? n.type : n.status;
    if (n !== void 0 && r !== void 0) agent["type" in n ? "type" : "status"] = r, s.push(n.text ?? r);
  }
  return {
    agent: agent,
    line: `  ${s.join("  \xB7  ")}`
  };
}
function I(e, t, printed) {
  if (e) return {
    shown: {
      name: e.name,
      ref: e.ref
    },
    printed: BEe(e)
  };
  return t === null ? {
    shown: {},
    printed: printed
  } : {
    shown: {
      name: t
    },
    printed: t
  };
}
function C(kind, t, rows, total = rows.length) {
  let n = rows.map(item => item.line);
  if (total > rows.length) n.push(`  (\u2026 ${total - rows.length} more not shown)`);
  return {
    kind: kind,
    total: total,
    rows: rows,
    notes: [],
    text: A(t, n, total)
  };
}
function te(e, t) {
  let i = Date.now();
  return C("subagents", "Subagents", e.map(item => {
    let n = item.name ? t.get(`subagent\x00${item.agentId}`) : void 0;
    return L(n ? {
      shown: {
        name: n.name,
        ref: n.ref,
        id: item.agentId
      },
      printed: BEe(n)
    } : {
      shown: {
        id: item.agentId
      },
      printed: item.agentId
    }, [{
      type: item.agentType
    }, {
      status: item.status
    }, `started ${T(i - item.startTime)} ago`]);
  }));
}
function se(e, t) {
  let i = Date.now(),
    s = e.slice(0, W).map(item => {
      let r = item.nameShadowed !== !1 ? void 0 : t.get(`teammate\x00${item.teammateId}`),
        status = jMe(item.status) ?? void 0;
      return L(I(r, jMe(item.name), "(unnamed)"), [{
        type: jMe(item.agentType) ?? void 0
      }, {
        status: status
      }, status !== void 0 || item.backend === "in-process" ? void 0 : item.backend, H(item, i), item.nameShadowed === "unreachable" ? "not messageable by name while a subagent in this session is registered under that name (the name reaches the subagent)" : item.nameShadowed === "bare-only" ? "message it by this exact name as printed \u2014 no [ref]: a subagent here is registered under a variant spelling of it" : void 0]);
    });
  return C("teammates", "Teammates", s, e.length);
}
function ie(e, t, i, s, n, r, u, f) {
  let c = Date.now(),
    p = [...e.map(item => {
      let h = t.get(`session\x00${item.sock}`),
        d = item.tmux !== void 0 && /^[^\s/\\\p{Cc}\p{Cf}]{1,64}$/u.test(item.tmux) && !GUt(item.tmux) ? item.tmux : void 0,
        _ = X(item, c, jMe);
      return L(I(h, jMe(item.name || z(item.cwd)), "(untitled)"), [_, {
        type: item.kind
      }, {
        status: item.status
      }, item.hostSessionId === void 0 ? void 0 : B, d === void 0 ? void 0 : `tmux ${d}`, `started ${T(c - item.startedAt)} ago`]);
    }), ...i.map(item => {
      let h = t.get(`cloud-session\x00${item.id}`),
        status_2 = item.offline ? "offline" : item.workerStatus;
      return L(I(h, jMe(item.title), "(untitled)"), [item.remoteControl ? {
        type: "remote_control",
        text: text
      } : {
        type: "cloud",
        text: "cloud session"
      }, {
        status: status_2,
        text: N(status_2, status_2)
      }, item.lastActive === void 0 ? void 0 : `active ${T(c - item.lastActive)} ago`, item.unreachableFromHere ? v() : void 0, item.acceptsPeerMessages === !1 ? ren : void 0]);
    }), ...s.slice(0, F).map(({
      session: session_4
    }) => {
      let h = t.get(`bridge-session\x00${session_4.id}`);
      return L(I(h, jMe(session_4.title), "(untitled)"), [{
        type: zWe(session_4) ? "cloud" : "remote_control",
        text: Myo(session_4)
      }, {
        status: HFr(session_4) ? "offline" : session_4.status,
        text: G(session_4, session_4.status)
      }, session_4.acceptsPeerMessages === !1 ? ren : void 0]);
    })],
    g = C("sessions", "Peer sessions", p, p.length + Math.max(0, s.length - F)),
    notes = [];
  if (n) notes.push({
    kind: "account_list_failed",
    text: s.length > 0 ? "(account session list incomplete just now \u2014 those rows carry no [ref] and are not messageable by name until a later listing completes)" : "(the Remote Control session list for your account did not complete just now \u2014 Remote Control sessions on other machines may be missing from this listing; a later listing retries)"
  });
  if (r) notes.push({
    kind: "cloud_list_failed",
    text: "(cloud session list could not be fetched just now \u2014 cloud sessions are missing from this listing; a later listing retries)"
  });
  if (u) notes.push({
    kind: "local_list_failed",
    text: text_2
  });
  if (f) notes.push({
    kind: "list_truncated",
    text: text_3
  });
  if (notes.length === 0) return g;
  let m = notes.map(item => item.text).join(`
  `);
  return {
    ...g,
    notes: notes,
    text: p.length > 0 ? `${g.text}
  ${m}` : m
  };
}
function Q9r(e, t, {
  bridgeWalkFailed: bridgeWalkFailed_2 = !1,
  cloudListFailed: cloudListFailed_2 = !1,
  localListFailed: localListFailed_3 = !1,
  ownEndpointShadowed: ownEndpointShadowed_3 = !1,
  messagingDisabled: messagingDisabled_2 = !1,
  listTruncated: listTruncated_2 = !1,
  omitDirectories = !1
} = {}) {
  let p = D(t.appState),
    g = U(t.appState, t.teamFile, t.callerTeammateId),
    o = [];
  if (p.length > 0) o.push(oe(p));
  if (g.length > 0) o.push(ae(g));
  if (e.length > 0) o.push(re(e, omitDirectories));
  if (cloudListFailed_2) o.push("(cloud session list could not be fetched just now \u2014 cloud sessions are missing from this listing; try /list-agents again shortly)");
  if (localListFailed_3) o.push("(the session list on this machine could not be read just now \u2014 other local sessions may be missing from this listing; try /list-agents again shortly)");
  if (bridgeWalkFailed_2) o.push("(the Remote Control session list for your account did not complete just now \u2014 Remote Control sessions on other machines may be missing from this listing; try /list-agents again shortly)");
  if (listTruncated_2) o.push(text_3);
  let m = e.flatMap(item => item.transport === "uds" ? [item.session] : []),
    a = messagingDisabled_2 || !t.self || omitDirectories && !t.self.nameIsUserChosen ? null : t.self.callerIsSubagent ? `This process's main session: ${R(t.self, m, ownEndpointShadowed_3)} (the name OTHER sessions use for it; from inside this process, address it as "${Sh}")` : `This session: ${R(t.self, m, ownEndpointShadowed_3)} (the name other sessions use to message it)`;
  if (omitDirectories && o.length > 0) o.push("(session names and directories not chosen by a human are withheld on this connection \u2014 /rename a session on its own machine to give it an addressable name here)");
  if (messagingDisabled_2 && o.length > 0) o.unshift(P);
  if (o.length === 0) {
    if (messagingDisabled_2) return P;
    return a ? `${a}

No subagents, teammates or other Claude sessions \u2014 no other session is running on this machine right now; peer messaging itself is available.` : "No subagents, teammates or other Claude sessions.";
  }
  return a ? `${a}

${o.join(`

`)}` : o.join(`

`);
}
function oe(e) {
  let t = Date.now();
  return A("Subagents", e.map(item => {
    let s = item.name ? `${item.name}  \xB7  ${item.agentType}` : item.agentType;
    return `  [${item.status}]  \xB7  ${s}  \xB7  started ${T(t - item.startTime)} ago`;
  }));
}
function ae(e) {
  let t = Date.now();
  return ne("Teammates", e, i => {
    let s = jMe(i.name) ?? "(unnamed)",
      n = jMe(i.agentType),
      r = n ? `${s}  \xB7  ${n}` : s,
      u = H(i, t),
      f = i.nameShadowed === "unreachable" ? "  \xB7  name held by a subagent here" : i.nameShadowed === "bare-only" ? "  \xB7  exact name only (a subagent holds a variant)" : "";
    return `  [${jMe(i.status) ?? i.backend}]  \xB7  ${r}${u ? `  \xB7  ${u}` : ""}${f}`;
  });
}
function N(e, t) {
  return e === "requires_action" ? "waiting on a human" : t;
}
function G(e, t) {
  if (zWe(e)) return N(e.status, t);
  return HFr(e) ? "offline" : t;
}
function S(e) {
  if (!e) return;
  let t = Mge(e);
  return t === null || t === "untitled session" ? void 0 : t;
}
function re(e, t = !1) {
  let i = Date.now();
  return A("Other Claude sessions", e.map(item => {
    switch (item.transport) {
      case "uds":
        {
          let session_5 = item.session,
            r = t && session_5.nameSource !== "user" ? void 0 : S(session_5.name),
            u = t ? void 0 : S(session_5.cwd) ?? "(unknown directory)",
            f = t ? void 0 : X(session_5, i, S),
            c = [r, f, u].filter(Boolean).join("  \xB7  ") || "(unnamed session)",
            p = session_5.hostSessionId === void 0 ? "" : `  \xB7  ${B}`;
          return `  [${S(session_5.status) ?? "unknown"}]  \xB7  ${c}${p}  \xB7  started ${T(i - session_5.startedAt)} ago`;
        }
      case "cloud":
        {
          let session_6 = item.session;
          return `  [${session_6.offline ? "offline" : N(session_6.workerStatus, session_6.workerStatus ?? "unknown")}]  \xB7  ${S(session_6.title) ?? "(untitled)"}  \xB7  ${session_6.remoteControl ? text : "cloud"}${session_6.unreachableFromHere ? `  \xB7  ${v()}` : ""}${session_6.acceptsPeerMessages === !1 ? `  \xB7  ${ren}` : ""}`;
        }
      case "bridge":
        {
          let session_7 = item.session;
          return `  [${G(session_7, S(session_7.status) ?? "unknown")}]  \xB7  ${S(session_7.title) ?? "(untitled)"}  \xB7  ${Myo(session_7)}${session_7.acceptsPeerMessages === !1 ? `  \xB7  ${ren}` : ""}`;
        }
      case "did":
        return "";
    }
  }));
}
function T(e) {
  return rn(Math.max(0, e), {
    mostSignificantOnly: !0
  });
}
export { X9r, J9r, Tni, Q9r };