// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { qHr, Rv } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { Zt } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { Om, Nq, m$e, S$r, Rr, g$e, JYe, eY, I1, tY, one, sne, CFt, dpt, v$r, HLo, y$e, AFt } from "B:/~BUN/root/chunk-v4qhg3t2.js";
import { zE, ca } from "B:/~BUN/root/chunk-6spmd6p4.js";
import { Ws } from "B:/~BUN/root/chunk-mmnpv22v.js";
import { XOt, LV, ZAr, exr } from "B:/~BUN/root/chunk-affnknva.js";
import { zEr } from "B:/~BUN/root/chunk-je63fn7b.js";
import { K$n, BEr, rbo, lKe, Gtn, Vtn, ZPt, qtn, WEr, eIt, Nst, pLe, tIt } from "B:/~BUN/root/chunk-jwaej6se.js";
import { O5 } from "B:/~BUN/root/chunk-vynf8wwd.js";
import { ay } from "B:/~BUN/root/chunk-8p6es4nr.js";
import { basename as x } from "path";
var L = "not reachable from this cloud session",
  O = "Claude Desktop session",
  _ = "(session list too long to fetch completely \u2014 sessions beyond the first pages are missing from this listing)";
async function Cor(e, n, credentials) {
  let s = Ws(),
    didFocused = !1;
  if (s) await lKe({
    refresh: !0,
    credentials: credentials
  });
  let d = s ? Gtn(e, credentials) : Promise.resolve({
      rows: [],
      failed: !1,
      identityKey: null
    }),
    c = Promise.resolve({
      peers: [],
      warnings: []
    }),
    localListFailed = !1,
    ownEndpointShadowed = !1,
    [u, l, i, g] = await Promise.all([s ? exr().catch(r => {
      if (r instanceof XOt) return localListFailed = !0, [];
      throw r;
    }) : Promise.resolve([]), d, pLe(e, credentials), c, s && !0 && Nq() ? ZAr().then(r => {
      ownEndpointShadowed = r;
    }, () => {}) : Promise.resolve()]),
    peers = u.map(r => ({
      transport: "uds",
      address: `uds:${r.sock}`,
      session: r
    }));
  for (let session of i.sessions) {
    if (AFt(u, session.id) || O5(session.id)) continue;
    peers.push({
      transport: "cloud",
      address: void 0,
      session: session
    });
  }
  let a = WEr(l.rows, u, i.sessions);
  if (!Nst(i.unavailable)) ZPt(e, l, eIt(l.rows, i.sessions));else qtn(e, l);
  for (let session_2 of a) peers.push({
    transport: "bridge",
    address: `bridge:${session_2.id}`,
    session: session_2
  });
  for (let session_3 of g.peers) peers.push({
    transport: "did",
    address: session_3.did,
    session: session_3
  });
  return {
    peers: peers,
    didWarnings: g.warnings,
    didFocused: didFocused,
    bridgeWalkFailed: l.failed || l.identityKey !== null && !Vtn(l),
    cloudListFailed: Nst(i.unavailable),
    localListFailed: localListFailed,
    ownEndpointShadowed: ownEndpointShadowed,
    messagingDisabled: !s,
    listTruncated: i.truncated === !0 || l.truncated === !0
  };
}
function U(callerIsSubagent = !1) {
  let sock = LV(),
    name = CFt(Rv()?.name);
  if (!sock || name === null) return null;
  return {
    name: name,
    token: `${name} [${y$e("session", v$r(sock))}]`,
    socketToken: `${name} [${y$e("session", sock)}]`,
    sock: sock,
    callerIsSubagent: callerIsSubagent,
    nameIsUserChosen: zEr() !== void 0
  };
}
function H(e, n = [], o = !1) {
  if (!e) return null;
  let s = R(e, n, o),
    t = Nq() && s === e.token ? " Session names and [ref]s listed here normally stay the same when a session restarts or is resumed; if one stops resolving, list again." : "";
  return e.callerIsSubagent ? `This process's main session is ${s} \u2014 the name OTHER sessions use to message it (it is not listed below; from inside this process, address the main conversation as "${Om}").${t}` : `This session is ${s} \u2014 the name other sessions use to message it (it is not listed below; a message to it would be a message to yourself).${t}`;
}
function R(e, n, o) {
  return HLo(n, e.sock, o) ? e.socketToken : e.token;
}
async function Ror(e, n) {
  let appState = e.getAppState(),
    s = ca(appState.teamContext);
  return {
    appState: appState,
    teamFile: s ? await ay(s, e.storageV5) : null,
    callerTeammateId: e.teammateContext === void 0 ? void 0 : e.agentContext?.agentId === e.teammateContext.agentId ? e.teammateContext.agentId : null,
    self: U(n)
  };
}
function aKo(e, n, {
  didWarnings = [],
  didFocused: didFocused_2 = !1,
  bridgeWalkFailed = !1,
  cloudListFailed = !1,
  localListFailed: localListFailed_2 = !1,
  ownEndpointShadowed: ownEndpointShadowed_2 = !1,
  messagingDisabled = !1,
  listTruncated = !1
} = {}) {
  let sessions = e.flatMap(item => item.transport === "uds" ? [item.session] : []),
    cloud = e.flatMap(item => item.transport === "cloud" ? [item.session] : []),
    g = I1(n.appState, {
      teamFile: n.teamFile,
      sessions: sessions,
      cloud: cloud,
      bridge: bridgeWalkFailed ? [] : e.flatMap(item => item.transport === "bridge" ? [item.session] : [])
    }),
    f = new Map(g.candidates.map(item => [`${item.kind}\x00${item.id}`, item])),
    a = F(n.appState),
    r = M(n.appState, n.teamFile, n.callerTeammateId),
    T = e.flatMap(item => item.transport === "bridge" ? [item] : []),
    A = e.flatMap(item => item.transport === "did" ? [item.session] : []),
    b = [];
  if (a.length > 0) b.push(q(a, f));
  if (r.length > 0) b.push(z(r, f));
  if (!didFocused_2 && (sessions.length > 0 || cloud.length > 0 || T.length > 0 || bridgeWalkFailed || cloudListFailed || localListFailed_2 || listTruncated)) b.push(V(sessions, f, cloud, T, bridgeWalkFailed, cloudListFailed, localListFailed_2, listTruncated));
  let P = messagingDisabled ? null : H(n.self, sessions, ownEndpointShadowed_2);
  if (messagingDisabled && b.length > 0) b.unshift(k);
  if (b.length === 0) {
    if (messagingDisabled) return k;
    if (!P) return "No reachable agents.";
    return !didFocused_2 && !bridgeWalkFailed ? `${P}

No reachable agents \u2014 no other Claude session is running on this machine right now (peer messaging itself is available; a session appears here once it is started).` : `${P}

No other session appears in this listing right now (peer messaging itself is available).`;
  }
  return P ? `${P}

${b.join(`

`)}` : b.join(`

`);
}
function F(e) {
  let n = new Map();
  for (let [t, d] of e.agentNameRegistry) n.set(d, t);
  let o = new Set(Object.values(e.teamContext?.teammates ?? {}).map(item => item.name)),
    s = [];
  for (let t of Object.values(e.tasks)) {
    if (t.type !== "local_agent" || t.agentType === "main-session") continue;
    let d = n.get(t.id);
    s.push({
      agentId: t.id,
      name: d !== void 0 && o.has(d) ? void 0 : d,
      agentType: t.agentType,
      status: t.status,
      startTime: t.startTime
    });
  }
  return s;
}
var k = "Cross-session messaging is switched off in this session right now \u2014 no sessions were listed, and this session is not reachable by name until it is switched back on.",
  W = "(the session list on this machine could not be read just now \u2014 other local sessions may be missing from this listing; a later listing retries)";
function M(e, n, o) {
  let teamContext = e.teamContext;
  if (!teamContext && !n) return [];
  let t = o === null ? void 0 : o ?? (teamContext ? teamContext.selfAgentId ?? (teamContext.isLeader === !1 ? void 0 : teamContext.leadAgentId) : zE()),
    d = new Map();
  for (let i of Object.values(e.tasks)) if (i.type === "in_process_teammate") d.set(i.identity.agentId, i.isIdle ? "idle" : i.status);
  let c = [],
    h = new Set(t !== void 0 ? [t] : []),
    m = new Set();
  for (let i of e.agentNameRegistry.keys()) m.add(Rr(i));
  let u = eY(e),
    l = (name_2, agentId) => JYe({
      name: name_2,
      agentId: agentId
    }, u) || !g$e(name_2);
  for (let [teammateId, g] of Object.entries(teamContext?.teammates ?? {})) {
    if (h.has(teammateId) || !l(g.name, teammateId)) continue;
    h.add(teammateId);
    let f = g.tmuxPaneId === "in-process" || g.tmuxPaneId === "leader";
    c.push({
      teammateId: teammateId,
      name: g.name,
      agentType: g.agentType,
      status: f ? d.get(teammateId) : void 0,
      backend: f ? "in-process" : "pane",
      since: g.spawnedAt,
      nameShadowed: !1
    });
  }
  for (let i of n?.members ?? []) {
    if (h.has(i.agentId) || !l(i.name, i.agentId)) continue;
    h.add(i.agentId), c.push({
      teammateId: i.agentId,
      name: i.name,
      agentType: i.agentType,
      status: void 0,
      backend: "roster",
      since: i.joinedAt,
      nameShadowed: X(i.name, e, m)
    });
  }
  return c;
}
function X(e, n, o) {
  let s = one(e) ?? e;
  if (!o.has(Rr(s))) return !1;
  return n.agentNameRegistry.has(e) || s !== e ? "unreachable" : "bare-only";
}
function v(e, n) {
  if (typeof e.since !== "number" || !Number.isFinite(e.since) || e.since > n || n - e.since > K) return;
  return `${e.backend === "roster" ? "joined" : "started"} ${w(n - e.since)} ago`;
}
function I(e, n, o = n.length) {
  return `${e} (${o}):
${n.join(`
`)}`;
}
var G = 100,
  N = 100,
  K = 315360000000;
function j(e, n, o) {
  let s = n.slice(0, G).map(o),
    t = n.length - s.length;
  if (t > 0) s.push(`  (\u2026 ${t} more not shown)`);
  return `${e} (${n.length}):
${s.join(`
`)}`;
}
function D(e, n, o) {
  let s = e.formerNames?.[0];
  if (s === void 0) return;
  let t = n - s.until;
  if (t < 0 || t >= qHr) return;
  let d = o(s.name);
  return d ? `says it was ${d} until ${w(n - s.until)} ago` : void 0;
}
function E(e, n) {
  return `  ${[e, ...n.filter(item => item !== void 0)].join("  \xB7  ")}`;
}
function q(e, n) {
  let o = Date.now();
  return I("Subagents", e.map(item => {
    let t = item.name ? n.get(`subagent\x00${item.agentId}`) : void 0;
    return E(t ? tY(t) : item.agentId, [item.agentType, item.status, `started ${w(o - item.startTime)} ago`]);
  }));
}
function z(e, n) {
  let o = Date.now();
  return j("Teammates", e, s => {
    let t = s.nameShadowed !== !1 ? void 0 : n.get(`teammate\x00${s.teammateId}`);
    return E(t ? tY(t) : sne(s.name) ?? "(unnamed)", [sne(s.agentType) ?? void 0, sne(s.status) ?? (s.backend === "in-process" ? void 0 : s.backend), v(s, o), s.nameShadowed === "unreachable" ? "not messageable by name while a subagent in this session is registered under that name (the name reaches the subagent)" : s.nameShadowed === "bare-only" ? "message it by this exact name as printed \u2014 no [ref]: a subagent here is registered under a variant spelling of it" : void 0]);
  });
}
function V(e, n, o, s, t, d, c, h) {
  let m = Date.now(),
    u = [...e.map(item => {
      let r = n.get(`session\x00${item.sock}`),
        T = item.tmux !== void 0 && /^[^\s/\\\p{Cc}\p{Cf}]{1,64}$/u.test(item.tmux) && !dpt(item.tmux) ? item.tmux : void 0,
        A = D(item, m, sne);
      return E(r ? tY(r) : sne(item.name || x(item.cwd)) ?? "(untitled)", [A, item.kind, item.status, item.hostSessionId === void 0 ? void 0 : O, T === void 0 ? void 0 : `tmux ${T}`, `started ${w(m - item.startedAt)} ago`]);
    }), ...o.map(item => {
      let r = n.get(`cloud-session\x00${item.id}`);
      return E(r ? tY(r) : sne(item.title) ?? "(untitled)", [item.remoteControl ? K$n : "cloud session", item.offline ? "offline" : C(item.workerStatus, item.workerStatus), item.lastActive === void 0 ? void 0 : `active ${w(m - item.lastActive)} ago`, item.unreachableFromHere ? L : void 0, item.acceptsPeerMessages === !1 ? tIt : void 0]);
    }), ...s.slice(0, N).map(({
      session: session_4
    }) => {
      let r = n.get(`bridge-session\x00${session_4.id}`);
      return E(r ? tY(r) : rbo(session_4.title), [BEr(session_4), B(session_4, session_4.status), session_4.acceptsPeerMessages === !1 ? tIt : void 0]);
    })],
    l = u.length + Math.max(0, s.length - N);
  if (l > u.length) u.push(`  (\u2026 ${l - u.length} more not shown)`);
  let i = u.length > 0 ? I("Peer sessions", u, l) : "",
    g = [...(t ? [s.length > 0 ? "(account session list incomplete just now \u2014 those rows carry no [ref] and are not messageable by name until a later listing completes)" : "(the Remote Control session list for your account did not complete just now \u2014 Remote Control sessions on other machines may be missing from this listing; a later listing retries)"] : []), ...(d ? ["(cloud session list could not be fetched just now \u2014 cloud sessions are missing from this listing; a later listing retries)"] : []), ...(c ? [W] : []), ...(h ? [_] : [])];
  if (g.length === 0) return i;
  let f = `  ${g.join(`
  `)}`;
  return i === "" ? f.trimStart() : `${i}
${f}`;
}
function Aor(e, n, {
  bridgeWalkFailed: bridgeWalkFailed_2 = !1,
  cloudListFailed: cloudListFailed_2 = !1,
  localListFailed: localListFailed_3 = !1,
  ownEndpointShadowed: ownEndpointShadowed_3 = !1,
  messagingDisabled: messagingDisabled_2 = !1,
  listTruncated: listTruncated_2 = !1,
  omitDirectories = !1
} = {}) {
  let u = F(n.appState),
    l = M(n.appState, n.teamFile, n.callerTeammateId),
    i = [];
  if (u.length > 0) i.push(Y(u));
  if (l.length > 0) i.push(J(l));
  if (e.length > 0) i.push(Q(e, omitDirectories));
  if (cloudListFailed_2) i.push("(cloud session list could not be fetched just now \u2014 cloud sessions are missing from this listing; try /list-agents again shortly)");
  if (localListFailed_3) i.push("(the session list on this machine could not be read just now \u2014 other local sessions may be missing from this listing; try /list-agents again shortly)");
  if (bridgeWalkFailed_2) i.push("(the Remote Control session list for your account did not complete just now \u2014 Remote Control sessions on other machines may be missing from this listing; try /list-agents again shortly)");
  if (listTruncated_2) i.push(_);
  let g = e.flatMap(item => item.transport === "uds" ? [item.session] : []),
    f = messagingDisabled_2 || !n.self || omitDirectories && !n.self.nameIsUserChosen ? null : n.self.callerIsSubagent ? `This process's main session: ${R(n.self, g, ownEndpointShadowed_3)} (the name OTHER sessions use for it; from inside this process, address it as "${Om}")` : `This session: ${R(n.self, g, ownEndpointShadowed_3)} (the name other sessions use to message it)`;
  if (omitDirectories && i.length > 0) i.push("(session names and directories not chosen by a human are withheld on this connection \u2014 /rename a session on its own machine to give it an addressable name here)");
  if (messagingDisabled_2 && i.length > 0) i.unshift(k);
  if (i.length === 0) {
    if (messagingDisabled_2) return k;
    return f ? `${f}

No subagents, teammates or other Claude sessions \u2014 no other session is running on this machine right now; peer messaging itself is available.` : "No subagents, teammates or other Claude sessions.";
  }
  return f ? `${f}

${i.join(`

`)}` : i.join(`

`);
}
function Y(e) {
  let n = Date.now();
  return I("Subagents", e.map(item => {
    let s = item.name ? `${item.name}  \xB7  ${item.agentType}` : item.agentType;
    return `  [${item.status}]  \xB7  ${s}  \xB7  started ${w(n - item.startTime)} ago`;
  }));
}
function J(e) {
  let n = Date.now();
  return j("Teammates", e, o => {
    let s = sne(o.name) ?? "(unnamed)",
      t = sne(o.agentType),
      d = t ? `${s}  \xB7  ${t}` : s,
      c = v(o, n),
      h = o.nameShadowed === "unreachable" ? "  \xB7  name held by a subagent here" : o.nameShadowed === "bare-only" ? "  \xB7  exact name only (a subagent holds a variant)" : "";
    return `  [${sne(o.status) ?? o.backend}]  \xB7  ${d}${c ? `  \xB7  ${c}` : ""}${h}`;
  });
}
function C(e, n) {
  return e === "requires_action" ? "waiting on a human" : n;
}
function B(e, n) {
  if (m$e(e)) return C(e.status, n);
  return S$r(e) ? "offline" : n;
}
function y(e) {
  if (!e) return;
  let n = one(e);
  return n === null || n === "untitled session" ? void 0 : n;
}
function Q(e, n = !1) {
  let o = Date.now();
  return I("Other Claude sessions", e.map(item => {
    switch (item.transport) {
      case "uds":
        {
          let session_5 = item.session,
            d = n && session_5.nameSource !== "user" ? void 0 : y(session_5.name),
            c = n ? void 0 : y(session_5.cwd) ?? "(unknown directory)",
            h = n ? void 0 : D(session_5, o, y),
            m = [d, h, c].filter(Boolean).join("  \xB7  ") || "(unnamed session)",
            u = session_5.hostSessionId === void 0 ? "" : `  \xB7  ${O}`;
          return `  [${y(session_5.status) ?? "unknown"}]  \xB7  ${m}${u}  \xB7  started ${w(o - session_5.startedAt)} ago`;
        }
      case "cloud":
        {
          let session_6 = item.session;
          return `  [${session_6.offline ? "offline" : C(session_6.workerStatus, session_6.workerStatus ?? "unknown")}]  \xB7  ${y(session_6.title) ?? "(untitled)"}  \xB7  ${session_6.remoteControl ? K$n : "cloud"}${session_6.unreachableFromHere ? `  \xB7  ${L}` : ""}${session_6.acceptsPeerMessages === !1 ? `  \xB7  ${tIt}` : ""}`;
        }
      case "bridge":
        {
          let session_7 = item.session;
          return `  [${B(session_7, y(session_7.status) ?? "unknown")}]  \xB7  ${y(session_7.title) ?? "(untitled)"}  \xB7  ${BEr(session_7)}${session_7.acceptsPeerMessages === !1 ? `  \xB7  ${tIt}` : ""}`;
        }
      case "did":
        return "";
    }
  }));
}
function w(e) {
  return Zt(Math.max(0, e), {
    mostSignificantOnly: !0
  });
}
export { Cor, Ror, aKo, Aor };