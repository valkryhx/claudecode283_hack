// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Nt } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { b } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Ki } from "B:/~BUN/root/chunk-33tn3weg.js";
import { Yhe } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { Ct, hFt, yFt, wn } from "B:/~BUN/root/chunk-bt3h0syz.js";
import { jx } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { Jn, Mn } from "B:/~BUN/root/chunk-1f9marcm.js";
import { Ye } from "B:/~BUN/root/chunk-qqgpf856.js";
import { me, um, Gf, Vf, $He } from "B:/~BUN/root/chunk-fk6j5yf3.js";
import { qxo } from "B:/~BUN/root/chunk-tqj9zsrn.js";
function Dk(e) {
  return e.options.refreshMcpClients?.() ?? e.getMcp?.().clients ?? e.options.mcpClients;
}
function sN(e) {
  if (!e) return;
  let o = e.find(item => item.type === "connected" && item.name === "ide");
  return o?.type === "connected" ? o : void 0;
}
function mLt(e) {
  return !1;
}
function Lxo() {
  return !1;
}
function N2n(e) {
  return !!e && (e.startsWith(hFt.slice(0, -2)) || e.startsWith(yFt.slice(0, -2))) && !e.includes("..") && e.endsWith("/**");
}
function S(e) {
  let o = [hFt, yFt].map(item => `${item.slice(0, -2)}skills/`).find(item => e.startsWith(item));
  if (o === void 0 || !e.endsWith("/**")) return !1;
  let t = e.slice(o.length, -3);
  return /^[A-Za-z0-9_-][A-Za-z0-9._-]*$/.test(t) && !t.includes("..") && Ki(t) !== "synced";
}
var I = new Nt(() => new Map());
function g(e, o) {
  return e && I.peek(e)?.get(o);
}
var C = {
  result: !0
};
class NativeToolElsewhereError extends Error {
  constructor(e) {
    super(e);
    this.name = "NativeToolElsewhereError";
  }
}
async function k(e, o, t, n) {
  let r = e.outputSchema?.safeParse(await o(e.name, t, n));
  if (r?.success !== !0) throw new NativeToolElsewhereError("the tool ran elsewhere, and what came back is not its output");
  return {
    data: r.data
  };
}
function Nz({
  getProactivityLevel: getProactivityLevel
}) {
  return;
}
function L2n(e) {
  return {
    get agentId() {
      return e.agentId;
    },
    get session() {
      return e.session;
    },
    get storageV5() {
      return e.storageV5;
    },
    get credentials() {
      return e.credentials;
    },
    get queuedNotificationsRegistry() {
      return e.queuedNotificationsRegistry;
    },
    get messageQueue() {
      return e.messageQueue;
    },
    get taskRegistry() {
      return e.taskRegistry;
    },
    get toolState() {
      return e.toolState;
    },
    runTaskHooks: (t, ...n) => t(...n, void 0, e),
    get agentContext() {
      return e.agentContext;
    },
    get hookOrigin() {
      return e.hookOrigin;
    },
    get hookCaller() {
      return e.hookCaller;
    },
    get agentWorktree() {
      return e.agentWorktree;
    },
    get readFileState() {
      return e.readFileState;
    },
    get getFileHistoryState() {
      return e.getFileHistoryState;
    },
    get applyFileHistoryOp() {
      return e.applyFileHistoryOp;
    },
    get dynamicSkillDirTriggers() {
      return e.dynamicSkillDirTriggers;
    },
    get nestedMemoryAttachmentTriggers() {
      return e.nestedMemoryAttachmentTriggers;
    },
    get dedupUnchangedReads() {
      return e.dedupUnchangedReads;
    },
    get setArtifactReadVersion() {
      return e.setArtifactReadVersion;
    },
    get getArtifactReadObservation() {
      return e.getArtifactReadObservation;
    },
    get tools() {
      return e.options.tools;
    },
    get isNonInteractiveSession() {
      return e.options.isNonInteractiveSession;
    },
    mcpClients: () => [...Dk(e)],
    get turnMcpClients() {
      return e.options.mcpClients;
    },
    get isolationLatch() {
      return e.isolationLatch;
    },
    permissions: () => me(e),
    get setToolPermissionContext() {
      return e.setToolPermissionContext;
    },
    get appendSystemMessage() {
      return e.appendSystemMessage;
    },
    mainLoopModel: () => e.options.mainLoopModel,
    model: () => Vf(e),
    effort: () => Gf(e),
    effortLayerOverride: () => um(e.permissionLayers),
    thinkingConfig: () => $He(e),
    resolverState: () => {
      let {
        teamContext: teamContext,
        agentNameRegistry: agentNameRegistry,
        tasks: tasks,
        sendMessagePins: sendMessagePins
      } = e.getAppState();
      return {
        teamContext: teamContext,
        agentNameRegistry: agentNameRegistry,
        tasks: tasks,
        sendMessagePins: sendMessagePins
      };
    },
    setSendMessagePins: t => e.setAppState(n => {
      let r = t(n);
      return r.sendMessagePins === n.sendMessagePins ? n : {
        ...n,
        sendMessagePins: r.sendMessagePins
      };
    }),
    get teammateContext() {
      return e.teammateContext;
    },
    get agentLifecycle() {
      return e.agentLifecycle;
    },
    get toolAliases() {
      return e.options.toolAliases;
    },
    proactivitySetting: () => e.getProactivityLevel(),
    get sessionHooksRegistry() {
      return e.sessionHooksRegistry;
    },
    get refreshTools() {
      return e.options.refreshTools;
    },
    get refreshMcpClients() {
      return e.options.refreshMcpClients;
    },
    get stickyBetas() {
      return e.stickyBetas;
    },
    get agentDefinitions() {
      return e.options.agentDefinitions;
    },
    get appendSystemPrompt() {
      return e.options.appendSystemPrompt;
    },
    proactivityLevel: () => Nz(e),
    replBridgeEnabled: () => e.getAppState().replBridgeEnabled,
    todos: {
      get: t => e.getAppState().todos[t],
      set: (t, n) => e.setAppState(r => ({
        ...r,
        todos: {
          ...r.todos,
          [t]: n
        }
      }))
    },
    markEndedByModel: () => e.setAppState(t => ({
      ...t,
      endedByModel: !0
    })),
    get persistedToolResultFiles() {
      return e.persistedToolResultFiles;
    },
    artifactRead: {
      getAppState: () => e.getAppState(),
      get permissionLayers() {
        return e.permissionLayers;
      },
      get toolDecisions() {
        return e.toolDecisions;
      },
      get forRemoteExecution() {
        return e.forRemoteExecution;
      },
      get forPromptShellCommand() {
        return e.forPromptShellCommand;
      },
      get permissionModeAtRequest() {
        return e.permissionModeAtRequest;
      },
      get agentContext() {
        return e.agentContext;
      },
      get agentId() {
        return e.agentId;
      },
      get artifactRegistries() {
        return e.artifactRegistries;
      },
      get credentials() {
        return e.credentials;
      },
      get messages() {
        return e.messages;
      },
      get persistedToolResultFiles() {
        return e.persistedToolResultFiles;
      },
      get toolUseId() {
        return e.toolUseId;
      },
      get setArtifactContractTarget() {
        return e.setArtifactContractTarget;
      },
      get setArtifactReadVersion() {
        return e.setArtifactReadVersion;
      },
      get getArtifactReadObservation() {
        return e.getArtifactReadObservation;
      },
      get storageV5() {
        return e.storageV5;
      },
      get options() {
        return {
          isNonInteractiveSession: e.options.isNonInteractiveSession
        };
      }
    },
    webBrowser: () => e.getWebBrowser(),
    get setWebBrowserSlice() {
      return e.setWebBrowserSlice;
    },
    shellPermission: {
      getAppState: () => e.getAppState(),
      get permissionLayers() {
        return e.permissionLayers;
      },
      get forRemoteExecution() {
        return e.forRemoteExecution;
      },
      get forPromptShellCommand() {
        return e.forPromptShellCommand;
      },
      get permissionModeAtRequest() {
        return e.permissionModeAtRequest;
      },
      get sessionEnvVars() {
        return e.sessionEnvVars;
      },
      get toolState() {
        return e.toolState;
      },
      get options() {
        return {
          isNonInteractiveSession: e.options.isNonInteractiveSession
        };
      }
    },
    unlayeredPermissions: () => e.getAppState().toolPermissionContext,
    get sessionEnvVars() {
      return e.sessionEnvVars;
    },
    markPrResolvedThisSession: () => e.markPrResolvedThisSession(),
    get emitToolProgress() {
      return e.emitToolProgress;
    },
    mcpState: () => e.getMcp(),
    get turnStartIndex() {
      return e.turnStartIndex;
    },
    get spawnedBySkill() {
      return e.options.spawnedBySkill;
    },
    get spawnedByForkedSkill() {
      return e.options.spawnedByForkedSkill;
    },
    mcpCommands: () => e.getAppState().mcp.commands,
    tasks: () => e.getAppState().tasks,
    namedAgents: () => ({
      agentNameRegistry: e.getAppState().agentNameRegistry
    }),
    setTaskKillState: t => e.setAppState(n => {
      let r = t(n);
      if (r.teamContext === n.teamContext && r.ultraplanSessionUrl === n.ultraplanSessionUrl) return n;
      return {
        ...n,
        teamContext: r.teamContext,
        ultraplanSessionUrl: r.ultraplanSessionUrl
      };
    }),
    messages: () => e.messages,
    get requestDialog() {
      return e.requestDialog;
    },
    recordQueuedGoalOrigin: (t, n) => qxo(e.setAppState, t, n)
  };
}
import { createHash as O } from "crypto";
var R = "approvalSurface";
function Nxo(e) {
  return typeof e === "object" && e !== null && "behavior" in e && e.behavior === "allow" && R in e && e[R] === "host_dialog";
}
function v(e, o) {
  let {
    file_path: file_path
  } = o;
  if (typeof file_path !== "string") return;
  let n;
  if (e === Ct) {
    let {
      old_string: old_string,
      new_string: new_string
    } = o;
    if (typeof old_string !== "string" || typeof new_string !== "string") return;
    n = [e, Ye(file_path), old_string, new_string, jx(o.replace_all) === !0];
  } else if (e === wn) {
    let {
      content: content
    } = o;
    if (typeof content !== "string") return;
    n = [e, Ye(file_path), content];
  } else return;
  return O("sha256").update(b(n)).digest("hex");
}
var c = new Nt(() => ({
  calls: new Map(),
  hostAttests: !1
}));
function H2n() {
  return !1;
}
function Hxo(e, o, t) {
  if (o !== "" && H2n()) {
    let n = c.of(e),
      file_path_2 = t.input.file_path;
    n.calls.set(o, {
      toolName: t.toolName,
      filePath: typeof file_path_2 === "string" ? Ye(file_path_2) : void 0,
      writeDigest: v(t.toolName, t.input)
    }), n.hostAttests = !0;
  }
}
function Fxo(e) {
  return c.peek(e)?.hostAttests === !0 && H2n();
}
function pte(e, o) {
  if (e !== void 0) c.peek(e)?.calls.delete(o);
}
function $xo(e, o, t) {
  if (o === void 0 || t.toolName !== wn && t.toolName !== Ct) return !1;
  let n = c.peek(e)?.calls.get(o);
  return n !== void 0 && n.toolName === t.toolName && n.filePath === t.absolutePath && n.writeDigest !== void 0 && n.writeDigest === v(t.toolName, t.input);
}
var f = new Set(),
  y = new Nt(() => {
    let editRuleContents = new Set();
    return f.add(new WeakRef(editRuleContents)), {
      editRuleContents: editRuleContents
    };
  });
function T(e) {
  return e.flatMap(item => (item.type === "addRules" || item.type === "replaceRules") && item.destination === "session" && item.behavior === "allow" ? item.rules.flatMap(item => item.toolName === Ct && item.ruleContent !== void 0 ? [item.ruleContent] : []) : []);
}
function h() {
  return !1;
}
function A(e) {
  let o = Jn(e);
  return o.toolName === Ct && o.ruleContent !== void 0 && N2n(o.ruleContent) && !S(o.ruleContent);
}
function Uxo(e) {
  if (h() && (e.type === "addRules" || e.type === "replaceRules") && e.destination === "session" && e.behavior === "allow") {
    let rules = e.rules.filter(item => !A(Mn(item)));
    if (rules.length === e.rules.length) return e;
    return rules.length === 0 && e.type === "addRules" ? void 0 : {
      ...e,
      rules: rules
    };
  }
  return e;
}
function Bxo(e) {
  return h() ? e.filter(item => !A(item)) : e;
}
function jxo(e, o) {
  for (let t of T(o)) y.of(e).editRuleContents.add(t);
}
function Wxo(e, o) {
  let t = y.peek(e)?.editRuleContents;
  if (t === void 0) return;
  for (let n of T(o)) t.delete(n);
}
function zxo(e) {
  let o = T(e);
  if (o.length === 0) return;
  for (let t of f) {
    let n = t.deref();
    if (n === void 0) {
      f.delete(t);
      continue;
    }
    for (let r of o) n.delete(r);
  }
}
function gLt(e, o, t) {
  let n = y.peek(e)?.editRuleContents;
  if (n === void 0 || n.size === 0) return;
  let r = new Set((t.alwaysAllowRules.session ?? []).flatMap(item => {
    let i = Jn(item);
    return i.toolName === Ct && i.ruleContent !== void 0 ? [i.ruleContent] : [];
  }));
  for (let s of n) if (!r.has(s)) n.delete(s);
  if (o?.type !== "rule" || o.rule.source !== "session" || o.rule.ruleBehavior !== "allow" || o.rule.ruleValue.toolName !== Ct || o.rule.ruleValue.ruleContent === void 0) return;
  return n.has(o.rule.ruleValue.ruleContent) ? "host_dialog" : void 0;
}
var np = () => ({
  mode: "default",
  additionalWorkingDirectories: new Map(),
  alwaysAllowRules: {},
  alwaysDenyRules: {},
  alwaysAskRules: {},
  isBypassPermissionsModeAvailable: !1,
  mcpPermissionModeOverrides: {}
});
function F2n(e) {
  let availabilityFallback = e.availabilityFallback;
  return availabilityFallback !== void 0 && availabilityFallback.fallbackModel === e.mainLoopModel ? availabilityFallback.primaryModel : e.mainLoopModel;
}
function $2n(e) {
  let o = F2n(e);
  return o === e.mainLoopModel || Yhe(o) ? o : e.mainLoopModel;
}
function oq(e) {
  return e.filter(item => item.data?.type !== "hook_progress");
}
function hLt(e) {
  return e !== null && typeof e === "object" && "afterResultCommitted" in e && typeof e.afterResultCommitted === "function";
}
function Xln(e, o, t) {
  if (o || !hLt(e)) return;
  try {
    e.afterResultCommitted();
  } catch (error) {
    t(error);
  }
}
function zt(e, o) {
  return e.name === o || (e.aliases?.includes(o) ?? !1);
}
function CX(e, o) {
  return e.name.localeCompare(o.name);
}
var E;
function Gxo(e) {
  E = e;
}
function Rle() {
  return E?.();
}
var weakMap = new WeakMap(),
  weakSet = new WeakSet();
function j(e) {
  let o = new Map();
  for (let t of e) {
    if (!o.has(t.name)) o.set(t.name, t);
    if (t.aliases) {
      for (let n of t.aliases) if (!o.has(n)) o.set(n, t);
    }
  }
  return o;
}
function _n(e, o, t) {
  let n = t && Object.hasOwn(t, o) ? t[o] : void 0;
  if (n !== void 0 && n !== o) return _n(e, n);
  let r = weakMap.get(e);
  if (r) return r.get(o);
  if (weakSet.has(e)) {
    let s = j(e);
    return weakMap.set(e, s), s.get(o);
  }
  return weakSet.add(e), e.find(item => zt(item, o));
}
function DS(e, o) {
  let t = e.coerceInput?.(o) ?? null;
  return e.inputSchema.safeParse(t === null ? o : t.input);
}
var remoteExecution = Object.freeze({
  supported: !1
});
function py(e) {
  return e.remoteExecution ?? remoteExecution;
}
function Vxo(e) {
  return e.backgrounding ?? "never";
}
var F = {
  isEnabled: () => !0,
  isConcurrencySafe: e => !1,
  isReadOnly: e => !1,
  isDestructive: e => !1,
  remoteExecution: remoteExecution,
  toAutoClassifierInput: e => "",
  userFacingName: e => ""
};
function L(e, o) {
  let proxy = new Proxy({}, {
    get: () => {
      return;
    }
  });
  return o in e(proxy);
}
function Ft(e) {
  let o = e.create,
    t = (toolUseContext, onProgress, parentMessage, canUseTool, d) => ({
      tool: o.call(e, L2n(toolUseContext)),
      call: {
        parentMessage: parentMessage,
        userModified: d?.userModified,
        globLimits: d?.globLimits,
        userTypedShellDispatch: d?.userTypedShellDispatch,
        pdfRenderSignal: d?.pdfRenderSignal,
        runEngine: (p, u) => p({
          ...u,
          toolUseContext: toolUseContext,
          canUseTool: canUseTool
        }),
        ask: canUseTool && parentMessage ? (p, u) => {
          if (u.detached) return canUseTool(r, p, {
            ...toolUseContext,
            toolUseId: void 0
          }, parentMessage, "");
          let m = canUseTool(r, p, toolUseContext, parentMessage, u.toolUseId, u.forceDecision);
          return u.toolUseId === toolUseContext.toolUseId ? m : m.finally(() => pte(toolUseContext.session, u.toolUseId));
        } : void 0,
        get toolUseId() {
          return toolUseContext.toolUseId;
        },
        get signal() {
          return toolUseContext.abortController.signal;
        },
        abort: p => toolUseContext.abortController.abort(p),
        onProgress: onProgress,
        get innerCall() {
          return toolUseContext.innerCall;
        },
        get shellWallCapMs() {
          return toolUseContext.shellWallCapMs;
        },
        get fileReadingLimits() {
          return toolUseContext.fileReadingLimits;
        },
        get sameTurnToolUses() {
          return toolUseContext.sameTurnToolUses;
        },
        get remoteCall() {
          return toolUseContext.remoteCall;
        },
        get permissionSurface() {
          return toolUseContext.toolUseId === void 0 ? void 0 : toolUseContext.toolDecisions.get(toolUseContext.toolUseId)?.surface;
        }
      }
    }),
    n = {
      call: (s, i, a, l, d, p) => {
        let u = g(i?.session, e.name);
        if (u) return k(e, u, s, i.abortController.signal);
        let {
          tool: tool,
          call: call
        } = t(i, d, l, a, p);
        return tool.call(s, call);
      },
      validateInput: async (s, i) => {
        if (g(i?.session, e.name)) return C;
        let {
          tool: tool_2,
          call: call_2
        } = t(i);
        return tool_2.validateInput ? tool_2.validateInput(s, call_2) : {
          result: !0
        };
      },
      checkPermissions: (updatedInput, i) => {
        if (g(i?.session, e.name)) return Promise.resolve({
          behavior: "passthrough",
          message: `${e.name} requires permission.`
        });
        let {
          tool: tool_3,
          call: call_3
        } = t(i);
        return tool_3.checkPermissions ? tool_3.checkPermissions(updatedInput, call_3) : Promise.resolve({
          behavior: "allow",
          updatedInput: updatedInput
        });
      },
      ...(L(o, "permissionCheckFailureDecision") && {
        permissionCheckFailureDecision: (s, i) => {
          let {
            tool: tool_4,
            call: call_4
          } = t(i);
          return tool_4.permissionCheckFailureDecision?.(s, call_4);
        }
      })
    },
    r = Object.assign(Object.defineProperties({
      ...F,
      userFacingName: () => e.name
    }, Object.getOwnPropertyDescriptors(e)), n);
  return r;
}
function OR(e) {
  let o = e;
  return typeof o.underlyingV1ToolName === "string" && typeof o.entryFieldName === "string" && typeof o.perEntryHookInputs === "function" && typeof o.reassemble === "function";
}
function $b(e, o) {
  let t = "has" in o ? n => o.has(n) : n => o.includes(n);
  return t(e.name) || e.underlyingV1ToolName !== void 0 && t(e.underlyingV1ToolName) || e.familyParentToolName !== void 0 && t(e.familyParentToolName);
}
export { Dk, sN, mLt, Lxo, Nz, L2n, N2n, Nxo, H2n, Hxo, Fxo, pte, $xo, Uxo, Bxo, jxo, Wxo, zxo, gLt, np, F2n, $2n, oq, hLt, Xln, zt, CX, Gxo, Rle, _n, DS, remoteExecution as U2n, py, Vxo, Ft, OR, $b };