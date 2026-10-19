// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  tt,
  qg,
  X3,
  Tl
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  _i
} from "B:/~BUN/root/chunk-8w42v0dp.js";
import {
  mr
} from "B:/~BUN/root/chunk-jkv8n5r0.js";
import {
  fq,
  DR,
  ex,
  _hs
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  l5e,
  tBe
} from "B:/~BUN/root/chunk-dn8rakwm.js";
import {
  dh
} from "B:/~BUN/root/chunk-k382hx6g.js";
import {
  aot
} from "B:/~BUN/root/chunk-sgcv8apk.js";
import {
  Jqe,
  _oe
} from "B:/~BUN/root/chunk-0s60mnx7.js";
import {
  oot
} from "B:/~BUN/root/chunk-8xdjnqdd.js";
import {
  gke
} from "B:/~BUN/root/chunk-b4xxgr0r.js";
async function uar({
  session: s,
  tools: f,
  mainLoopModel: o,
  customSystemPrompt: i,
  excludeDynamicSections: a,
  cacheBreakerPhrase: g,
  analysisOnly: n,
  storageV5: p,
  credentials: c
}) {
  let [m, l, e, t] = await Promise.all([i !== void 0 ? Promise.resolve([]) : ex(f, o, {
    excludeDynamicSections: a,
    analysisOnly: n
  }), DR(s, p, c), i !== void 0 ? Promise.resolve({}) : fq(s, g), a && i === void 0 ? _hs(o, {
    analysisOnly: n
  }) : Promise.resolve({})]);
  if (a) return {
    defaultSystemPrompt: m,
    userContext: {
      ...e,
      ...l,
      ...t
    },
    systemContext: {}
  };
  return {
    defaultSystemPrompt: m,
    userContext: l,
    systemContext: e
  }
}
async function Z9r({
  session: s,
  messageQueue: f,
  tools: o,
  toolCatalog: i,
  commands: a,
  mcpClients: g,
  messages: n,
  turnInProgress: p,
  readFileState: c,
  toolState: m,
  sessionHooks: l,
  getAppState: e,
  setAppState: t,
  customSystemPrompt: d,
  appendSystemPrompt: y,
  excludeDynamicSections: P,
  thinkingConfig: x,
  agents: M,
  storageV5: C,
  credentials: S,
  runQuery: T
}) {
  let r = e(),
    u = qg({
      permissionMode: r.toolPermissionContext.mode,
      mainLoopModel: tt()
    }),
    {
      defaultSystemPrompt: v,
      userContext: b,
      systemContext: j
    } = await uar({
      session: s,
      tools: o,
      mainLoopModel: u,
      customSystemPrompt: d,
      excludeDynamicSections: P,
      cacheBreakerPhrase: r.cacheBreakerPhrase,
      analysisOnly: !0,
      storageV5: C,
      credentials: S
    }),
    R = _i(tBe(l5e(d, v), {
      tools: o,
      appendSystemPrompt: y
    })),
    k = n.at(-1),
    h = p && k?.type === "assistant" && k.message.stop_reason === null ? n.slice(0, -1) : n,
    H = {
      messageQueue: f,
      session: s,
      storageV5: C,
      credentials: S,
      agentContext: Tl(),
      options: {
        commands: a,
        debug: !1,
        mainLoopModel: u,
        tools: o,
        toolCatalog: i,
        verbose: !1,
        thinkingConfig: x ?? (X3() !== !1 ? {
          type: "adaptive"
        } : {
          type: "disabled"
        }),
        mcpClients: g,
        mcpResources: {},
        isNonInteractiveSession: !0,
        runQuery: T,
        agentDefinitions: {
          activeAgents: M,
          allAgents: []
        },
        customSystemPrompt: d,
        ...d !== void 0 && {
          omitGitStatus: !0
        },
        appendSystemPrompt: y,
        autoCompactWindow: r.autoCompactWindow,
        fastMode: r.fastMode,
        cacheBreakerPhrase: r.cacheBreakerPhrase
      },
      abortController: mr(),
      readFileState: c,
      toolState: m,
      toolDecisions: new Map,
      permissionRelays: _oe,
      getAppState: e,
      setAppState: t,
      ...oot(e, t),
      queuedNotificationsRegistry: aot(e, t, s),
      taskRegistry: dh(e, t),
      sessionHooksRegistry: l,
      teammateColors: Jqe(gke(e, t, "teammateColors")),
      rootToolSurface: {
        tools: o,
        mainLoopModel: u
      },
      messages: h,
      turnStartIndex: 0,
      getFileHistoryState: () => {
        return
      },
      applyFileHistoryOp: () => {},
      applyAttributionOp: () => {}
    };
  return {
    systemPrompt: R,
    userContext: b,
    systemContext: j,
    toolUseContext: H,
    forkContextMessages: h,
    advisorModel: r.advisorModel
  }
}
export {
  uar,
  Z9r
};
