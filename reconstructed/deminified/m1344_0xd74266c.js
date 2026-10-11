// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { iE } from "B:/~BUN/root/chunk-bvn0mpsk.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { So } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { ca } from "B:/~BUN/root/chunk-6spmd6p4.js";
import { ay } from "B:/~BUN/root/chunk-8p6es4nr.js";
import { vx } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { Rr, $ce, P1, I1, QYe, y$e } from "B:/~BUN/root/chunk-v4qhg3t2.js";
import { uC } from "B:/~BUN/root/chunk-3wnb3s8p.js";
import { pLe } from "B:/~BUN/root/chunk-jwaej6se.js";
import { aFn, kvr } from "B:/~BUN/root/chunk-3jyp964r.js";
import { lo } from "B:/~BUN/root/chunk-988g5svb.js";
import { o, u, A } from "B:/~BUN/root/chunk-n8qdr73v.js";
async function EJr({
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
  let r = E(resolved);
  if (r === null) return {
    kind: "proceed",
    pin: void 0
  };
  let l = Rr(r.name),
    p = Object.hasOwn(appState.sendMessagePins, l) ? appState.sendMessagePins[l] : void 0;
  if (p !== void 0 && p.id === r.id) return {
    kind: "proceed",
    pin: p
  };
  if (p !== void 0) {
    let y = P1(to) !== null;
    if (!y && to === r.name && to !== p.name) return {
      kind: "proceed",
      pin: void 0
    };
    if (!y) {
      let x = ca(appState.teamContext),
        [teamFile, sessions, k] = await Promise.all([x ? ay(x, storageV5) : null, aFn(), pLe(session, credentials)]),
        b = I1(appState, {
          teamFile: teamFile,
          sessions: sessions,
          cloud: k.sessions,
          bridge: kvr(session)
        }),
        S = QYe(b.byName, l);
      return {
        kind: "rebound",
        name: r.name,
        previous: p,
        next: S?.kind === "one" && S.candidate.id === r.id ? S.candidate : void 0
      };
    }
  }
  let pin = {
    id: r.id,
    name: r.name,
    ref: y$e(r.kind, r.id)
  };
  return agentLifecycle.setSendMessagePin(l, pin), {
    kind: "proceed",
    pin: pin
  };
}
function E(e) {
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
var O = f(() => u({
  success: A(!0),
  pin: u({
    name: o().min(1).max(uC),
    id: o().max(1024).refine(e => iE(e) !== null),
    ref: o().regex(new RegExp(`^${$ce}$`))
  })
}));
function cnr(e) {
  let n = new Map(),
    s = new Set();
  for (let i of e) if (i.type === "assistant") {
    let content = i.message.content;
    if (!Array.isArray(content)) continue;
    for (let a of content) if (a.type === "tool_use" && a.name === lo) s.add(a.id);
  } else if (i.type === "user") {
    let content_2 = i.message.content;
    if (!Array.isArray(content_2)) continue;
    if (content_2.find(item => item.type === "tool_result" && !item.is_error && s.has(item.tool_use_id)) === void 0) continue;
    let d = O().safeParse(i.toolUseResult);
    if (!d.success) continue;
    n.set(Rr(d.data.pin.name), {
      id: d.data.pin.id,
      name: d.data.pin.name,
      ref: d.data.pin.ref
    });
  }
  return Object.fromEntries(n);
}
function TJr(e, n) {
  let s = cnr(e);
  return So(s, n) ? null : s;
}
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
function v() {
  let e = vx();
  return {
    setSessionSendRunner: e.set,
    runSessionSend: n => {
      let s = e.get();
      return s ? s(n) : Promise.resolve({
        send: n.raised,
        delivering: delivering
      });
    }
  };
}
var c = v();
var runSessionSend = c.runSessionSend;
var J1o = "Delivered by a plugin hook; nothing else was sent.";
var setSessionSendRunner = c.setSessionSendRunner;
export { EJr, cnr, TJr, delivering as dnr, runSessionSend as X1o, J1o, setSessionSendRunner as Q1o };