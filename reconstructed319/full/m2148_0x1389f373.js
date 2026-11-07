// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  at,
  S_,
  Zee,
  cc
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  Xn
} from "B:/~BUN/root/chunk-vmcmhkh2.js";
import {
  Mpt,
  Xa
} from "B:/~BUN/root/chunk-m8dg5txf.js";
import {
  qM,
  ywi,
  _9,
  bI
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  oXe
} from "B:/~BUN/root/chunk-cxcakgnv.js";
import {
  uy
} from "B:/~BUN/root/chunk-2fedt3ag.js";
import {
  ZTt
} from "B:/~BUN/root/chunk-dsf173dz.js";
import {
  bit,
  Hhe
} from "B:/~BUN/root/chunk-bq1zhyqz.js";
import {
  XTt
} from "B:/~BUN/root/chunk-raq1af4d.js";
import {
  $Ne
} from "B:/~BUN/root/chunk-3xtmwvra.js";
async function i4r({
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
  let [m, l, e, t] = await Promise.all([i !== void 0 ? Promise.resolve([]) : qM(f, o, {
    excludeDynamicSections: a,
    analysisOnly: n
  }), bI(s, p, c), i !== void 0 ? Promise.resolve({}) : _9(s, g), a && i === void 0 ? ywi(o, {
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
async function Z2o({
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
    u = S_({
      permissionMode: r.toolPermissionContext.mode,
      mainLoopModel: at()
    }),
    {
      defaultSystemPrompt: v,
      userContext: b,
      systemContext: j
    } = await i4r({
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
    R = Xa(oXe(Mpt(d, v), {
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
      agentContext: cc(),
      options: {
        commands: a,
        debug: !1,
        mainLoopModel: u,
        tools: o,
        toolCatalog: i,
        verbose: !1,
        thinkingConfig: x ?? (Zee() !== !1 ? {
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
      abortController: Xn(),
      readFileState: c,
      toolState: m,
      toolDecisions: new Map,
      permissionRelays: Hhe,
      getAppState: e,
      setAppState: t,
      ...XTt(e, t),
      queuedNotificationsRegistry: ZTt(e, t, s),
      taskRegistry: uy(e, t),
      sessionHooksRegistry: l,
      teammateColors: bit($Ne(e, t, "teammateColors")),
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
  i4r,
  Z2o
};
