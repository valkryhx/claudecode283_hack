// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { H, OKn, MKn, q, rIo, q2s } from "B:/~BUN/root/chunk-game8aqv.js";
import { f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { We, d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { m } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { dt, gjn, yjn, Yt, Me } from "B:/~BUN/root/chunk-9kvvd0hy.js";
import { bu } from "B:/~BUN/root/chunk-5h4fwkjy.js";
import { _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Nr } from "B:/~BUN/root/chunk-eev762xg.js";
import { Cj, VA } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { Hu } from "B:/~BUN/root/chunk-x6frvp1m.js";
import { Fp, _f } from "B:/~BUN/root/chunk-65j2302z.js";
import { le } from "B:/~BUN/root/chunk-begxsvab.js";
import { NA, Ol } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { ZNe, gi, Qr, _r, v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { mt } from "B:/~BUN/root/chunk-d10hhz4p.js";
import { yr, mn } from "B:/~BUN/root/chunk-44q965xg.js";
import { WDr, xR } from "B:/~BUN/root/chunk-vmcmhkh2.js";
import { se, bg, Hy, XFn, ru, Tht } from "B:/~BUN/root/chunk-9bs2y8fc.js";
import { co, Iee } from "B:/~BUN/root/chunk-tjfmeakx.js";
import { cGi } from "B:/~BUN/root/chunk-36r971cb.js";
import { Fs } from "B:/~BUN/root/chunk-fkcdzerj.js";
import { ze } from "B:/~BUN/root/chunk-xwzn0yxv.js";
import { kt } from "B:/~BUN/root/chunk-86hj8bna.js";
import { Je } from "B:/~BUN/root/chunk-9wbhv9z5.js";
class A {
  texts = new Map();
  readingForCalls = new Map();
  lastReadForCalls = Promise.resolve(void 0);
}
class N {
  syncPromise = null;
  firstSyncPromise = null;
  firstListDeferred = null;
  firstRoundSettled = !1;
  firstRoundEmitted = !1;
  resyncTimer = null;
  resyncRunRound = null;
  resyncArmed = null;
  stopAwaitingActivity = null;
  consecutiveFailedRounds = 0;
  failedLandings = new Map();
  lostRowsRecheckMs = 100;
  bucketGeneration = null;
  hidingFoldersGone = new Set();
  pendingDownloads = new Map();
  placeholders = new Map();
  listedSkills = new Map();
  textAlone = !1;
  catalogAlone = !1;
  listedOwnerships = new Map();
  listedSkillsAnswer = "none_yet";
  listNeverStarted = !1;
  lastRoundCouldNotAsk = !1;
  hostMountKinds = new Map();
  hostMountWorkOutstanding = null;
  hostMountWorkStartedAt = 0;
  hostMountWorkIsCatalogs = !1;
  hostCatalog = new A();
  missingSkillResyncAt = -1 / 0;
  missingSkillResync = null;
  reset() {
    if (this.syncPromise = null, this.firstSyncPromise = null, this.firstListDeferred = null, this.firstRoundEmitted = !1, this.firstRoundSettled = !1, MKn(!1), OKn(!1), this.resyncTimer) clearTimeout(this.resyncTimer), this.resyncTimer = null;
    this.resyncRunRound = null, this.resyncArmed = null, this.stopAwaitingActivity?.(), this.consecutiveFailedRounds = 0, this.failedLandings.clear(), this.hidingFoldersGone = new Set(), this.lostRowsRecheckMs = 100, this.bucketGeneration = null, this.listedSkills.clear(), this.textAlone = !1, this.catalogAlone = !1, this.listedOwnerships.clear(), this.listedSkillsAnswer = "none_yet", this.listNeverStarted = !1, this.lastRoundCouldNotAsk = !1, this.hostMountKinds.clear(), this.hostMountWorkOutstanding = null, this.hostMountWorkStartedAt = 0, this.hostMountWorkIsCatalogs = !1, this.hostCatalog = new A(), this.pendingDownloads.clear(), this.placeholders.clear(), this.missingSkillResyncAt = -1 / 0, this.missingSkillResync = null;
  }
}
var ce = new W(() => new N());
function kf() {
  return ce.of(H().host);
}
function Xvs(e) {
  if (e.loadedFrom === void 0) return Boolean(e.isMcp);
  switch (e.loadedFrom) {
    case "skills":
    case "commands_DEPRECATED":
    case "plugin":
    case "managed":
    case "bundled":
      return !1;
    case "syncedSkills":
    case "mcp":
    case "memoryStore":
    case "attachedFolder":
      return !0;
  }
}
function yht(e) {
  if (e.loadedFrom === "syncedSkills") return !_ht() || kf().textAlone;
  return Xvs(e);
}
function _ht() {
  return Boolean(i.CLAUDE_CODE_REMOTE) || Boolean(i.CLAUDE_CODE_IS_COWORK) || Fp();
}
function Ezi() {
  return {
    hooks: void 0,
    allowedTools: [],
    disallowedTools: [],
    executionContext: void 0,
    agent: void 0,
    background: void 0,
    model: void 0,
    effort: void 0,
    shell: void 0,
    paths: void 0,
    fallback: void 0,
    createdBy: void 0,
    displayName: void 0,
    metadata: void 0
  };
}
function Jvs(e) {
  return {
    description: w(e.description),
    argumentHint: e.argumentHint === void 0 ? void 0 : w(e.argumentHint),
    whenToUse: e.whenToUse === void 0 ? void 0 : w(e.whenToUse),
    argumentNames: e.argumentNames.map(w)
  };
}
function xNt(e) {
  return {
    ...Jvs(e),
    argumentHint: e.argumentHint === void 0 ? void 0 : U(e.argumentHint)
  };
}
function Tzi(e) {
  return {
    ...xNt(e),
    displayName: ge(e.displayName),
    fallback: void 0
  };
}
function ge(e) {
  return e === void 0 ? void 0 : $ue(e);
}
function $ue(e) {
  return Cj(VA(e, " "));
}
function w(e) {
  return Cj(U(e));
}
function U(e) {
  return VA(e, " ", {
    keepSpelledJoiners: !0
  });
}
function PNt(e) {
  return $ue(e).replaceAll('"', "&quot;");
}
function pgo(e) {
  return Cj(e.replace(/[\p{Cc}\p{Cs}]/gu, o => o === "\t" || o === `
` || o === "\r" ? o : ""));
}
var Qvs = Symbol("check does not decide"),
  fe = new Je(() => new Map()),
  j = new Je(() => new Map()),
  B = new Je(() => new Set()),
  ye = 256;
function Zvs(e, o) {
  if (e === void 0 || o === "") return;
  let t = B.of(e);
  if (t.add(o), t.size > ye) {
    let [n] = t;
    if (n !== void 0) t.delete(n);
  }
}
function V(e, o) {
  return e !== void 0 && (j.peek(e)?.has(o) ?? !1);
}
function Czi(e, o) {
  return e !== void 0 && (B.peek(e)?.delete(o) ?? !1);
}
function FCe(e, o) {
  let t = e && j.peek(e)?.get(o);
  return t && Sse(e, o) === t.runner ? t.check : void 0;
}
function Sse(e, o) {
  return e && fe.peek(e)?.get(o);
}
var Se = [Me, kt, ze, Yt, dt, gi, Qr, _r, bu, Fs],
  Te = new Set(Se);
function Iv(e) {
  return Te.has(e) && q();
}
function G(e, o) {
  if (!Iv(e)) return;
  throw m("native_tool_never_runs_here", e, {
    has_session: o !== void 0
  }), new NeverRunsInThisProcessError(`${e} is unavailable: this session runs file and shell tools only in its cloud environment, and this call could not be sent there. Retrying will not help.`);
}
var z = {
  result: !0
};
class NativeToolElsewhereError extends Error {
  code;
  constructor(e, o) {
    super(e);
    this.code = o;
    this.name = "NativeToolElsewhereError";
  }
}
class NeverRunsInThisProcessError extends Error {
  constructor(e) {
    super(e);
    this.name = "NeverRunsInThisProcessError";
  }
}
async function Q(e, o, t, n, s, u, r) {
  let a;
  try {
    a = (await o(e.name, t, n, s)) ?? {};
  } catch (error) {
    if (error instanceof NativeToolElsewhereError || We(error)) throw error;
    let value = $ue(Hu(d(error), 2000));
    if (error instanceof Error && Object.isExtensible(error)) throw Object.defineProperty(error, "message", {
      value: value,
      writable: !0,
      configurable: !0
    }), error;
    throw new NativeToolElsewhereError(value);
  }
  let {
      output: output,
      afterRead: afterRead,
      subagentFrameResult: subagentFrameResult,
      fieldsFromThisSide: fieldsFromThisSide
    } = a,
    S = (e.outputSchemaAcrossProcesses ?? e.outputSchema)?.safeParse(output);
  if (S?.success !== !0) {
    afterRead?.unreadable();
    let T = e.isReadOnly?.(t) === !0 && e.name !== bu;
    throw new NativeToolElsewhereError(T ? `${e.name} ran, but its result could not be read. It changes nothing, so it is safe to run again.` : `${e.name} ran, but its result could not be read. Check its effect before running it again.`, "ANSWER_LOST");
  }
  afterRead?.ok();
  let k = fieldsFromThisSide === void 0 ? S.data : {
      ...S.data,
      ...fieldsFromThisSide
    },
    P = e.fromAnotherProcess?.(k, t, u, r) ?? {},
    newMessages = P.newMessages ?? [];
  return {
    data: P.data ?? k,
    ...(newMessages.length > 0 && {
      newMessages: newMessages
    }),
    ...(subagentFrameResult !== void 0 && {
      subagentFrameResult: subagentFrameResult
    })
  };
}
function _g(e) {
  return e.options.refreshMcpClients?.() ?? e.getMcp?.().clients ?? e.options.mcpClients;
}
function J2(e) {
  if (!e) return;
  let o = e.find(item => item.type === "connected" && item.name === "ide");
  return o?.type === "connected" ? o : void 0;
}
function dO() {
  return M() && rIo();
}
function U_e() {
  return !1;
}
function Rzi(e) {
  return e === "proactive" && dO();
}
function wse() {
  return M() && q2s();
}
function M() {
  return !Nr() && !i.CLAUDE_CODE_DISABLE_ATTACHMENTS;
}
function Btn() {
  if (!M()) return "session_excluded";
  return rIo() ? void 0 : "gate_off";
}
function mgo() {
  return "bare, or attachments disabled";
}
function Azi({
  level: level,
  source: source,
  entryMode: entryMode,
  entryModeDecidedByLevel: n
}) {
  l("tengu_proactivity_startup", {
    level: f(level),
    source: f(source),
    entry_mode: f(entryMode),
    entry_mode_decided_by_level: n
  });
}
function wee({
  getProactivityLevel: getProactivityLevel
}) {
  if (dO()) return getProactivityLevel();
  return;
}
function jtn(e) {
  let o = {
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
    get pluginSteered() {
      return e.pluginSteered;
    },
    get forRemoteExecution() {
      return e.forRemoteExecution;
    },
    get spawnedByWorkflowRunId() {
      return e.spawnedByWorkflowRunId;
    },
    get hookServesModel() {
      return e.hookServesModel;
    },
    get pluginUnnamed() {
      return e.pluginUnnamed;
    },
    get innerCall() {
      return e.innerCall;
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
    get hasSpendCap() {
      return e.options.maxBudgetUsd !== void 0;
    },
    get messageClientPlatform() {
      return e.options.messageClientPlatform;
    },
    mcpClients: () => [..._g(e)],
    get turnMcpClients() {
      return e.options.mcpClients;
    },
    get isolationLatch() {
      return e.isolationLatch;
    },
    permissions: () => se(e),
    get setToolPermissionContext() {
      return e.setToolPermissionContext;
    },
    get appendSystemMessage() {
      return e.appendSystemMessage;
    },
    mainLoopModel: () => e.options.mainLoopModel,
    model: () => ru(e),
    autoCompactWindow: () => e.options.autoCompactWindow,
    contextRoom: () => e.contextRoom,
    effort: () => Hy(e),
    effortLayerOverride: () => bg(e.permissionLayers),
    helperEffortFor: t => XFn(e, t),
    thinkingConfig: () => Tht(e),
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
      let s = t(n);
      return s.sendMessagePins === n.sendMessagePins ? n : {
        ...n,
        sendMessagePins: s.sendMessagePins
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
    proactivityLevel: () => wee(e),
    replBridgeEnabled: () => e.getAppState().replBridgeEnabled,
    todos: {
      get: t => e.getAppState().todos[t],
      set: (t, n) => e.setAppState(s => ({
        ...s,
        todos: {
          ...s.todos,
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
          isNonInteractiveSession: e.options.isNonInteractiveSession,
          mainLoopModel: e.options.mainLoopModel
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
    get queryTracking() {
      return e.queryTracking;
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
      let s = t(n);
      if (s.teamContext === n.teamContext && s.ultraplanSessionUrl === n.ultraplanSessionUrl) return n;
      return {
        ...n,
        teamContext: s.teamContext,
        ultraplanSessionUrl: s.ultraplanSessionUrl
      };
    }),
    messages: () => e.messages,
    sentToolDescription: t => e.sentToolDescription?.(t),
    inheritedMcpSkillMessages: () => e.inheritedMcpSkillMessages,
    get requestDialog() {
      return e.requestDialog;
    },
    recordQueuedGoalOrigin: (t, n) => cGi(e.setAppState, t, n)
  };
  if (le()) Object.defineProperty(o, "primitiveToolGrant", {
    get: () => e.primitiveToolGrant,
    enumerable: !0
  }), Object.defineProperty(o, "replScriptCall", {
    get: () => e.replScriptCall,
    enumerable: !0
  }), Object.defineProperty(o, "deliveryTurn", {
    value: () => {
      let t = e.getAppState();
      return {
        chainId: e.queryTracking?.chainId,
        mode: t.toolPermissionContext.mode,
        fastMode: t.fastMode ?? !1
      };
    },
    enumerable: !0
  });
  return o;
}
import { createHash as Ce } from "crypto";
function hgo(e) {
  return !!e && (e.startsWith(gjn.slice(0, -2)) || e.startsWith(yjn.slice(0, -2))) && !e.includes("..") && e.endsWith("/**");
}
function Y(e) {
  let o = [gjn, yjn].map(item => `${item.slice(0, -2)}skills/`).find(item => e.startsWith(item));
  if (o === void 0 || !e.endsWith("/**")) return !1;
  let t = e.slice(o.length, -3);
  return /^[A-Za-z0-9_-][A-Za-z0-9._-]*$/.test(t) && !t.includes("..") && Ol(t) !== "synced";
}
var J = "approvalSurface";
function xzi(e) {
  return typeof e === "object" && e !== null && "behavior" in e && e.behavior === "allow" && J in e && e[J] === "host_dialog";
}
function X(e, o) {
  let {
    file_path: file_path
  } = o;
  if (typeof file_path !== "string") return;
  let n;
  if (e === dt) {
    let {
      old_string: old_string,
      new_string: new_string
    } = o;
    if (typeof old_string !== "string" || typeof new_string !== "string") return;
    n = [e, mt(file_path), old_string, new_string, NA(o.replace_all) === !0];
  } else if (e === Yt) {
    let {
      content: content
    } = o;
    if (typeof content !== "string") return;
    n = [e, mt(file_path), content];
  } else return;
  return Ce("sha256").update(_(n)).digest("hex");
}
var h = new Je(() => ({
  calls: new Map(),
  hostAttests: !1
}));
function ggo() {
  return !1;
}
function eEs() {
  return _f() && v("tengu_vscode_card_message_approval", !0) === !0;
}
function Z() {
  return ggo() ? "desktop" : eEs() ? "vscode" : void 0;
}
function Pzi() {
  return Z() !== void 0;
}
function Ozi(e, o, t) {
  let card = Z();
  if (o !== "" && card !== void 0) {
    let s = h.of(e),
      file_path_2 = t.input.file_path;
    if (s.calls.set(o, {
      card: card,
      toolName: t.toolName,
      filePath: typeof file_path_2 === "string" ? mt(file_path_2) : void 0,
      writeDigest: X(t.toolName, t.input)
    }), card === "desktop") s.hostAttests = !0;
  }
}
function Izi(e) {
  return h.peek(e)?.hostAttests === !0 && ggo();
}
var E = new Je(() => ({
  byToolUse: new Map()
}));
function ONt(e, o, t) {
  let {
    byToolUse: byToolUse
  } = E.of(e);
  byToolUse.set(o, [...(byToolUse.get(o) ?? []), t]);
}
function kse(e, o) {
  if (e !== void 0) {
    h.peek(e)?.calls.delete(o);
    let t = E.peek(e)?.byToolUse.get(o);
    if (t !== void 0) {
      E.peek(e)?.byToolUse.delete(o);
      for (let n of t) n();
    }
  }
}
function Mzi(e, o) {
  return tEs(e, o) === "desktop" ? "host_dialog" : void 0;
}
function tEs(e, o) {
  return h.peek(e)?.calls.get(o)?.card;
}
function Dzi(e, o, t) {
  if (o === void 0 || t.toolName !== Yt && t.toolName !== dt) return !1;
  let n = h.peek(e)?.calls.get(o);
  return n !== void 0 && n.card === "desktop" && n.toolName === t.toolName && n.filePath === t.absolutePath && n.writeDigest !== void 0 && n.writeDigest === X(t.toolName, t.input);
}
var x = new Set(),
  O = new Je(() => {
    let editRuleContents = new Set();
    return x.add(new WeakRef(editRuleContents)), {
      editRuleContents: editRuleContents
    };
  });
function D(e) {
  return e.flatMap(item => (item.type === "addRules" || item.type === "replaceRules") && item.destination === "session" && item.behavior === "allow" ? item.rules.flatMap(item => item.toolName === dt && item.ruleContent !== void 0 ? [item.ruleContent] : []) : []);
}
function ee() {
  return !1;
}
function oe(e) {
  let o = yr(e);
  return o.toolName === dt && o.ruleContent !== void 0 && hgo(o.ruleContent) && !Y(o.ruleContent);
}
function Lzi(e) {
  if (ee() && (e.type === "addRules" || e.type === "replaceRules") && e.destination === "session" && e.behavior === "allow") {
    let rules = e.rules.filter(item => !oe(mn(item)));
    if (rules.length === e.rules.length) return e;
    return rules.length === 0 && e.type === "addRules" ? void 0 : {
      ...e,
      rules: rules
    };
  }
  return e;
}
function Nzi(e) {
  return ee() ? e.filter(item => !oe(item)) : e;
}
function Fzi(e, o) {
  for (let t of D(o)) O.of(e).editRuleContents.add(t);
}
function Hzi(e, o) {
  let t = O.peek(e)?.editRuleContents;
  if (t === void 0) return;
  for (let n of D(o)) t.delete(n);
}
function $zi(e) {
  let o = D(e);
  if (o.length === 0) return;
  for (let t of x) {
    let n = t.deref();
    if (n === void 0) {
      x.delete(t);
      continue;
    }
    for (let s of o) n.delete(s);
  }
}
function $Tr(e, o, t) {
  let n = O.peek(e)?.editRuleContents;
  if (n === void 0 || n.size === 0) return;
  let s = new Set((t.alwaysAllowRules.session ?? []).flatMap(item => {
    let r = yr(item);
    return r.toolName === dt && r.ruleContent !== void 0 ? [r.ruleContent] : [];
  }));
  for (let u of n) if (!s.has(u)) n.delete(u);
  if (o?.type !== "rule" || o.rule.source !== "session" || o.rule.ruleBehavior !== "allow" || o.rule.ruleValue.toolName !== dt || o.rule.ruleValue.ruleContent === void 0) return;
  return n.has(o.rule.ruleValue.ruleContent) ? "host_dialog" : void 0;
}
async function te(e, o, t, n, s, {
  toolUseId: toolUseId,
  forceDecision: forceDecision,
  reentry: a
}) {
  if (a === void 0) return e(o, s, t, n, toolUseId, forceDecision);
  let c = t.toolDecisions?.has(toolUseId) === !0;
  try {
    return await e(o, s, {
      ...t,
      permissionPhase: a
    }, n, toolUseId, forceDecision);
  } finally {
    if (!c && t.toolDecisions !== void 0) t.toolDecisions.delete(toolUseId);
  }
}
var $d = () => ({
  mode: "default",
  additionalWorkingDirectories: new Map(),
  alwaysAllowRules: {},
  alwaysDenyRules: {},
  alwaysAskRules: {},
  isBypassPermissionsModeAvailable: !1,
  mcpPermissionModeOverrides: {}
});
function UTr(e) {
  let availabilityFallback = e.availabilityFallback;
  return availabilityFallback !== void 0 && availabilityFallback.fallbackModel === e.mainLoopModel ? availabilityFallback.primaryModel : e.mainLoopModel;
}
function ygo(e) {
  let o = UTr(e);
  return o === e.mainLoopModel || ZNe(o) ? o : e.mainLoopModel;
}
function Kq(e) {
  return e.filter(item => item.data?.type !== "hook_progress");
}
function bht(e) {
  return e !== null && typeof e === "object" && "afterResultCommitted" in e && typeof e.afterResultCommitted === "function";
}
function BGe(e, o, t) {
  if (o || !bht(e)) return;
  try {
    e.afterResultCommitted();
  } catch (error) {
    t(error);
  }
}
function ht(e, o) {
  return e.name === o || (e.aliases?.includes(o) ?? !1);
}
function HCe(e, o) {
  return e.name.localeCompare(o.name);
}
var ae;
function Uzi(e) {
  ae = e;
}
function lU() {
  return ae?.();
}
var de;
function Bzi(e) {
  de = e;
}
function BTr() {
  return de?.();
}
var ue;
function jzi(e) {
  ue = e;
}
function Wzi(e, o) {
  return ue?.(e, o);
}
var pe;
function zzi(e) {
  pe = e;
}
function _go(e) {
  return pe?.(e);
}
var weakMap = new WeakMap(),
  weakSet = new WeakSet();
function me(e, o) {
  return o === Iee && e.name === co;
}
function Re(e) {
  let o = new Map();
  for (let t of e) {
    let n = o.get(t.name);
    if (n === void 0 || me(n, t.name)) o.set(t.name, t);
    if (t.aliases) {
      for (let s of t.aliases) if (!o.has(s)) o.set(s, t);
    }
  }
  return o;
}
function wn(e, o, t) {
  let n = t && Object.hasOwn(t, o) ? t[o] : void 0;
  if (n !== void 0 && n !== o) return wn(e, n);
  let s = weakMap.get(e);
  if (s) return s.get(o);
  if (weakSet.has(e)) {
    let r = Re(e);
    return weakMap.set(e, r), r.get(o);
  }
  weakSet.add(e);
  let u = e.find(item => ht(item, o));
  if (u !== void 0 && me(u, o)) return e.find(item => item.name === o) ?? u;
  return u;
}
function Jb(e, o) {
  let t = e.coerceInput?.(o) ?? null;
  return e.inputSchema.safeParse(t === null ? o : t.input);
}
var remoteExecution = Object.freeze({
  supported: !1
});
function Gk(e) {
  return e.remoteExecution ?? remoteExecution;
}
function Gzi(e) {
  return e.backgrounding ?? "never";
}
var he = {
  isEnabled: () => !0,
  isConcurrencySafe: e => !1,
  isReadOnly: e => !1,
  isDestructive: e => !1,
  remoteExecution: remoteExecution,
  toAutoClassifierInput: e => "",
  userFacingName: e => ""
};
function ie(e, o) {
  let proxy = new Proxy({}, {
    get: () => {
      return;
    }
  });
  return o in e(proxy);
}
function dn(e) {
  let o = e.create,
    t = (r, a) => (G(e.name, a), o.call(e, r)),
    n = (r, onProgress, parentMessage, canUseTool, g) => ({
      tool: t(jtn(r), r?.session),
      call: {
        parentMessage: parentMessage,
        userModified: g?.userModified,
        globLimits: g?.globLimits,
        userTypedShellDispatch: g?.userTypedShellDispatch,
        pdfRenderSignal: g?.pdfRenderSignal,
        gitDiffRead: g?.gitDiffRead,
        outsideResultReader: g?.outsideResultReader,
        commandAsWritten: g?.commandAsWritten,
        ...(le() && {
          enclosingToolUseId: g?.enclosingToolUseId
        }),
        smallResultAsked: g?.smallResultAsked,
        callerLogsSharedEvents: g?.callerLogsSharedEvents,
        timing: g?.timing,
        runEngine: (p, S) => p({
          ...S,
          toolUseContext: r.permissionRound === void 0 ? r : {
            ...r,
            permissionRound: void 0
          },
          canUseTool: canUseTool
        }),
        ask: canUseTool && parentMessage ? (p, S) => {
          let k = te(canUseTool, u, S.withdraw === void 0 ? r : {
            ...r,
            abortController: WDr(r.abortController, S.withdraw)
          }, parentMessage, p, S);
          return S.toolUseId === r.toolUseId ? k : k.finally(() => kse(r.session, S.toolUseId));
        } : void 0,
        get toolUseId() {
          return r.toolUseId;
        },
        get signal() {
          return r.abortController.signal;
        },
        get permissionPhase() {
          return r.permissionPhase;
        },
        get permissionRound() {
          return r.permissionRound;
        },
        abort: p => r.abortController.abort(p),
        abortTurn: p => xR(r.abortController).abort(p),
        onProgress: onProgress,
        get innerCall() {
          return r.innerCall;
        },
        get keepsSandboxOn() {
          return r.keepsSandboxOn;
        },
        get shellWallCapMs() {
          return r.shellWallCapMs;
        },
        get promptShellPluginId() {
          return r.promptShellPluginId;
        },
        get fileReadingLimits() {
          return r.fileReadingLimits;
        },
        get sameTurnToolUses() {
          return r.sameTurnToolUses;
        },
        get remoteCall() {
          return r.remoteCall;
        },
        get carriedReadBaseline() {
          return r.carriedReadBaseline;
        },
        get keptBackgroundShells() {
          return r.keptBackgroundShells;
        },
        get inputFromAnotherMachine() {
          return r.inputFromAnotherMachine;
        },
        get permissionSurface() {
          return r.toolUseId === void 0 ? void 0 : r.toolDecisions.get(r.toolUseId)?.surface;
        }
      }
    }),
    s = {
      create: r => t(r, r.session),
      call: (r, a, c, y, g, p) => {
        let S = Sse(a?.session, e.name),
          k = p?.runnerCheckedHere !== void 0 && S !== void 0 && V(a?.session, e.name) ? p.runnerCheckedHere : S;
        if (p?.permissionCheckedFor !== void 0 && p.permissionCheckedFor !== k) return Promise.reject(new NativeToolElsewhereError(`${e.name} was not run: where it runs changed after its permission was checked. Send the call again.`, "NOT_RUN"));
        if (k) return Q(e, k, r, a.abortController.signal, a, p, y?.message.model);
        let {
          tool: tool,
          call: call
        } = n(a, g, y, c, p);
        return tool.call(r, call);
      },
      validateInput: async (r, a) => {
        let c = Sse(a?.session, e.name);
        if (c) {
          let message = c.refusedUnasked?.(r, a);
          return message === void 0 ? z : {
            result: !1,
            message: message,
            errorCode: 1
          };
        }
        let {
          tool: tool_2,
          call: call_2
        } = n(a);
        return tool_2.validateInput ? tool_2.validateInput(r, call_2) : {
          result: !0
        };
      },
      checkPermissions: (updatedInput, a) => {
        let c = Sse(a?.session, e.name);
        if (c) {
          let p = {
            behavior: "passthrough",
            message: `${e.name} requires permission.`
          };
          return c.checkPermissions === void 0 || a.toolUseId === void 0 ? Promise.resolve(p) : c.checkPermissions(u, updatedInput, a).then(S => S ?? p);
        }
        let {
          tool: tool_3,
          call: call_3
        } = n(a);
        return tool_3.checkPermissions ? tool_3.checkPermissions(updatedInput, call_3) : Promise.resolve({
          behavior: "allow",
          updatedInput: updatedInput
        });
      },
      permissionCheckFailureDecision: (r, a) => {
        if (Sse(a?.session, e.name)) return {
          behavior: "deny",
          message: `${e.name} was not run: its permission check could not be completed.`,
          decisionReason: {
            type: "other",
            reason: "permission check failed"
          }
        };
        if (!ie(o, "permissionCheckFailureDecision")) return;
        let {
          tool: tool_4,
          call: call_4
        } = n(a);
        return tool_4.permissionCheckFailureDecision?.(r, call_4);
      },
      deriveObservableInput: async (r, a) => {
        if (Sse(a?.session, e.name) || !ie(o, "deriveObservableInput")) return;
        let {
          tool: tool_5,
          call: call_5
        } = n(a);
        return tool_5.deriveObservableInput?.(r, call_5);
      }
    },
    u = Object.assign(Object.defineProperties({
      ...he,
      userFacingName: () => e.name
    }, Object.getOwnPropertyDescriptors(e)), s);
  return u;
}
function cO(e) {
  let o = e;
  return typeof o.underlyingV1ToolName === "string" && typeof o.entryFieldName === "string" && typeof o.perEntryHookInputs === "function" && typeof o.reassemble === "function";
}
function Mv(e, o) {
  return I(o, e.name) || e.underlyingV1ToolName !== void 0 && I(o, e.underlyingV1ToolName) || e.familyParentToolName !== void 0 && I(o, e.familyParentToolName);
}
function I(e, o) {
  return "has" in e ? e.has(o) : e.includes(o);
}
export { kf, Xvs, yht, _ht, Ezi, Jvs, xNt, Tzi, $ue, PNt, pgo, Qvs, Zvs, Czi, FCe, Sse, Iv, _g, J2, dO, U_e, Rzi, wse, Btn, mgo, Azi, wee, jtn, hgo, xzi, ggo, eEs, Pzi, Ozi, Izi, ONt, kse, Mzi, tEs, Dzi, Lzi, Nzi, Fzi, Hzi, $zi, $Tr, $d, UTr, ygo, Kq, bht, BGe, ht, HCe, Uzi, lU, Bzi, BTr, jzi, Wzi, zzi, _go, wn, Jb, remoteExecution as bgo, Gk, Gzi, dn, cO, Mv };