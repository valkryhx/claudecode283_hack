// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { ht, Op } from "B:/~BUN/root/chunk-2fccb5hn.js";
import { th } from "B:/~BUN/root/chunk-9ka04m0y.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { Nn } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { id } from "B:/~BUN/root/chunk-8v3gkznb.js";
import { Ub } from "B:/~BUN/root/chunk-p7n9drc0.js";
import { hf } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { lo, qO, BMe, d4, c4, Syt, cQe } from "B:/~BUN/root/chunk-e4q58xft.js";
import { KO } from "B:/~BUN/root/chunk-v6pbq6dm.js";
import { K3e } from "B:/~BUN/root/chunk-0hq7zw7b.js";
import { jmr, Jio, Pat } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { Rn } from "B:/~BUN/root/chunk-hwnj8m4g.js";
import { o, u, U, C } from "B:/~BUN/root/chunk-g3snhg6n.js";
var delivering = Object.freeze({
  delivered: () => {
    return;
  },
  refused: () => {
    return;
  },
  [Symbol.dispose]: () => {
    return;
  }
});
function k() {
  let e = hf();
  return {
    setSessionSendRunner: e.set,
    runSessionSend: t => {
      let r = e.get();
      return r ? r(t) : Promise.resolve({
        send: t.raised,
        delivering: delivering
      });
    }
  };
}
var c = k();
var runSessionSend = c.runSessionSend;
var B5s = "Delivered by a plugin hook; nothing else was sent.";
var setSessionSendRunner = c.setSessionSendRunner;
async function d7o({
  session: session,
  to: to,
  message: message,
  resolved: resolved,
  appState: appState,
  agentLifecycle: agentLifecycle,
  storageV5: storageV5,
  credentials: credentials
}) {
  if (typeof message !== "string") return {
    kind: "proceed",
    pin: void 0
  };
  let a = w(resolved);
  if (a === null) return {
    kind: "proceed",
    pin: void 0
  };
  let l = lo(a.name),
    m = Object.hasOwn(appState.sendMessagePins, l) ? appState.sendMessagePins[l] : void 0;
  if (m !== void 0 && m.id === a.id) return {
    kind: "proceed",
    pin: m
  };
  if (m !== void 0) {
    let y = d4(to) !== null;
    if (!y && to === a.name && to !== m.name) return {
      kind: "proceed",
      pin: void 0
    };
    if (!y) {
      let x = id(appState.teamContext),
        [teamFile, sessions, A] = await Promise.all([x ? Ub(x, storageV5) : null, jmr(), K3e(session, credentials)]),
        _ = c4(appState, {
          teamFile: teamFile,
          sessions: sessions,
          cloud: A.sessions,
          bridge: Jio(session)
        }),
        g = Syt(_.byName, l);
      return {
        kind: "rebound",
        name: a.name,
        previous: m,
        next: g?.kind === "one" && g.candidate.id === a.id ? g.candidate : void 0
      };
    }
  }
  let pin = {
    id: a.id,
    name: a.name,
    ref: cQe(a.kind, a.id)
  };
  return agentLifecycle.setSendMessagePin(l, pin), {
    kind: "proceed",
    pin: pin
  };
}
function w(e) {
  switch (e.kind) {
    case "main":
    case "not-found":
    case "ambiguous":
    case "agent-stopped-by-user":
    case "mailbox":
    case "local-session":
    case "cloud-session":
      return null;
    case "agent-live":
    case "agent-stopped":
    case "agent-evicted":
      return {
        kind: "subagent",
        id: e.agentId,
        name: e.agentName
      };
  }
}
var h = f(() => u({
  success: C(!0),
  pin: u({
    name: o().min(1).max(KO),
    id: o().max(1024).refine(e => th(e) !== null),
    ref: o().regex(new RegExp(`^${BMe}$`))
  })
}));
function $5r(e) {
  let t = new Map(),
    r = new Set();
  for (let d of e) if (d.type === "assistant") {
    let content = d.message.content;
    if (!Array.isArray(content)) continue;
    for (let s of content) if (s.type === "tool_use" && s.name === Rn) r.add(s.id);
  } else if (d.type === "user") {
    let content_2 = d.message.content;
    if (!Array.isArray(content_2)) continue;
    if (content_2.find(item => item.type === "tool_result" && !item.is_error && r.has(item.tool_use_id)) === void 0) continue;
    let i = h().safeParse(d.toolUseResult);
    if (!i.success) continue;
    t.set(lo(i.data.pin.name), {
      id: i.data.pin.id,
      name: i.data.pin.name,
      ref: i.data.pin.ref
    });
  }
  return Object.fromEntries(t);
}
function c7o(e, t) {
  let r = $5r(e);
  return Nn(r, t) ? null : r;
}
var L = f(() => u({
    name: o().regex(Pat).refine(e => !qO(e))
  })),
  D = f(() => u({
    status: U(["async_launched", "completed"]),
    agentId: o()
  }));
function yEn(e, t) {
  let r = new Map(),
    d = new Map();
  for (let n of e) if (n.type === "assistant" && Array.isArray(n.message.content)) {
    for (let s of n.message.content) if (s.type === "tool_use" && (s.name === ht || s.name === Op)) {
      let i = L().safeParse(s.input);
      if (i.success && !t.has(i.data.name)) r.set(s.id, i.data.name);
    }
  } else if (n.type === "user" && Array.isArray(n.message.content)) {
    let [s, ...i] = n.message.content.filter(item => item.type === "tool_result"),
      p = s !== void 0 && i.length === 0 && !s.is_error ? r.get(s.tool_use_id) : void 0;
    if (p === void 0) continue;
    let a = D().safeParse(n.toolUseResult),
      l = a.success ? th(a.data.agentId) : null;
    if (l !== null) d.set(p, l);
  }
  return d.size > 0 ? new Map([...t, ...d]) : null;
}
export { d7o, $5r, c7o, yEn, delivering as U5r, runSessionSend as U5s, B5s, setSessionSendRunner as j5s };