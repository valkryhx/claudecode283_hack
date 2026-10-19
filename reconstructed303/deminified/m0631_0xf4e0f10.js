// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Vr } from "B:/~BUN/root/chunk-9ka04m0y.js";
import { Ze, we } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { Ke } from "B:/~BUN/root/chunk-3aez4b53.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { g, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { Q2, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { ne } from "B:/~BUN/root/chunk-nggrknsv.js";
import { _a, Ox, hp, SJe, fB } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { bA } from "B:/~BUN/root/chunk-8v3gkznb.js";
import { d0n, NAt, GL, Fue, z1, gl, zHe, a6, Zat, Rse, Udo, oM, Ap, Re, od, z$e } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { mr, UMe, Ri } from "B:/~BUN/root/chunk-jkv8n5r0.js";
import { vt } from "B:/~BUN/root/chunk-hkc0g0wr.js";
import { le, uc } from "B:/~BUN/root/chunk-e7tskyjv.js";
import { Pp } from "B:/~BUN/root/chunk-7j5tvnqj.js";
import { wdt, Q0 } from "B:/~BUN/root/chunk-k382hx6g.js";
import { $k } from "B:/~BUN/root/chunk-k8twyg23.js";
import { Apt } from "B:/~BUN/root/chunk-0m6vvjrw.js";
import { AR, x7 } from "B:/~BUN/root/chunk-fbgs9vjp.js";
import { Pos } from "B:/~BUN/root/chunk-5nr49wcm.js";
import { KRe } from "B:/~BUN/root/chunk-tabp3jhw.js";
import { zs } from "B:/~BUN/root/chunk-c2nm18xm.js";
import { go } from "B:/~BUN/root/chunk-y59h61rh.js";
import { lte } from "B:/~BUN/root/chunk-q56gve2c.js";
function g7r(o, r, n) {
  return o.filter(item => item.type === "prompt" && NAt(item, r) && Fue(item) && Q2(item.name) && !(item.context === "fork" && n !== void 0 && GL(item) === n));
}
async function VYt(o, r, n) {
  if (o.type !== "prompt" || o.unqualifiedName != null) return null;
  if (z$e().length === 0) return null;
  if (!n.options.tools.some(item => vt(item, go))) return null;
  let s = g7r(await Ap(r, n.storageV5), o.name, n.options.spawnedBySkill);
  if (s.length === 0) return null;
  let l = s.map(item => {
    let e = item.name.slice(0, item.name.length - o.name.length - 1);
    return `- \`${item.name}\` \u2014 for files under ${e}/`;
  });
  return i("tengu_skill_scoped_variant_note", {
    variant_count: s.length
  }), Re({
    content: od([`Directory-scoped variants of the "${o.name}" skill exist in this repo:`, ...l, `The bare name always resolves to this unscoped skill; the variants are reachable only by their exact qualified names. If the files you are working on are under a variant's directory, invoke that variant now with the ${go} tool and follow it instead \u2014 it carries that subtree's own instructions. If your changes span more than one variant's directory, run each matching variant.`].join(`
`)),
    isMeta: !0
  });
}
function ZAn(o, r, n) {
  if (n || r.spawnedByWorkflowRunId !== void 0 || lte() || we()) return !1;
  return o.background ?? !0;
}
async function exn({
  agentId: o,
  agentDefinition: r,
  command: command,
  description: description,
  prompt: l,
  promptMessages: promptMessages,
  context: e,
  canUseTool: canUseTool,
  getAppState: getAppState,
  permissionLayers: permissionLayers,
  readFileState: readFileState,
  availableTools: availableTools,
  webFetchReadmissionAllowed: webFetchReadmissionAllowed,
  spawnedBySkill: d,
  recordInvocationOnSuccess: A,
  frozenCommandDenies: frozenCommandDenies
}) {
  let {
      taskRegistry: taskRegistry
    } = e,
    startTime = Date.now(),
    description_2 = description.length > 50 ? ne(description, 49) + "\u2026" : description,
    S = hp(e.agentContext) + 1,
    v = z1(r.model, uc(e), command.model, le(e).mode),
    _ = () => {
      if (e.abortController.signal.aborted) {
        if (Ri(e.abortController.signal.reason) !== "interrupt") throw new Ke();
      }
      for (let u of Object.values(taskRegistry.all())) if (u.type === "local_agent" && !zs(u.status) && u.forkedSkillName === command.name) return p("subagent_launch", "forked_skill_live_duplicate"), !0;
      return !1;
    };
  if (_()) return null;
  let U = $k();
  if (S > U) return p("subagent_launch", "forked_skill_depth_cap"), null;
  let F = {
    skillName: command.name,
    attributionName: d,
    ...(r.effort !== void 0 && {
      effort: r.effort
    }),
    ...(frozenCommandDenies !== void 0 && frozenCommandDenies.length > 0 && {
      frozenCommandDenies: [...frozenCommandDenies]
    })
  };
  if (!d0n().safeParse(F).success) return p("subagent_launch", "forked_skill_scoping_unpersistable"), null;
  try {
    await Pos(Vr(o), F, e.storageV5);
  } catch (error) {
    return D(error), p("subagent_launch", "forked_skill_scoping_write_failed"), null;
  }
  if (_()) return null;
  let ownerAgentId = a6(e.agentId, taskRegistry) ?? Ze(),
    M = Zat(e, ownerAgentId),
    R = Rse({
      outputFileReadable: oM(e.options.tools),
      ownerCanContinueAgents: M,
      agentId: o,
      ownerAgentId: ownerAgentId,
      parentAgentId: e.agentId,
      spawnDepth: S,
      description: description_2,
      prompt: l,
      model: v,
      selectedAgent: r,
      taskRegistry: taskRegistry,
      toolUseId: e.toolUseId,
      forkedSkillName: command.name,
      sessionScratch: e.session.sessionScratch
    }),
    abortController = R.abortController,
    h = e.agentLifecycle.allocateName(command.name);
  e.agentLifecycle.registerName(h, Vr(o)), Q0(a6(e.agentId, taskRegistry), `agent:${o}`, taskRegistry);
  let agentContext = {
      agentId: o,
      parentAgentId: e.agentId,
      depth: S,
      ...(SJe(e) && {
        spawnedByMainThread: !0
      }),
      parentSessionId: bA(),
      agentType: "subagent",
      subagentName: r.agentType,
      isBuiltIn: gl(r),
      displayName: h,
      isAsync: !0,
      isBackgroundAgent: !0,
      invocationKind: "spawn",
      invocationEmitted: !1,
      ...fB(e.agentContext)
    },
    metadata = {
      prompt: l,
      resolvedAgentModel: v,
      isBuiltInAgent: gl(r),
      startTime: startTime,
      agentType: r.agentType,
      isAsync: !0,
      agentDepth: S,
      callerCanContinueAgents: M,
      source: r.source
    };
  return Ox(agentContext, () => x7({
    taskId: R.agentId,
    abortController: abortController,
    makeStream: (onCacheSafeParams, onQueryProgress, onStreamTokenEstimate) => AR({
      agentDefinition: r,
      promptMessages: promptMessages,
      turnPrompt: l,
      toolUseContext: {
        ...e,
        getAppState: getAppState,
        permissionLayers: permissionLayers
      },
      canUseTool: canUseTool,
      isAsync: !0,
      querySource: "agent:custom",
      spawnedBySkill: d,
      spawnedByForkedSkill: !0,
      model: command.model,
      onModelRestricted: KRe(d, e.appendSystemMessage),
      availableTools: availableTools,
      webFetchReadmissionAllowed: webFetchReadmissionAllowed,
      override: {
        agentId: Vr(o),
        agentContext: agentContext,
        abortController: abortController,
        readFileState: readFileState
      },
      onCacheSafeParams: onCacheSafeParams,
      onQueryProgress: onQueryProgress,
      onStreamTokenEstimate: onStreamTokenEstimate,
      description: description_2,
      name: h
    }),
    metadata: metadata,
    description: description_2,
    toolUseContext: e,
    taskRegistry: taskRegistry,
    agentIdForCleanup: o,
    enableSummarization: !0,
    getWorktreeResult: async () => ({}),
    onTerminalSuccess: A
  })), g("subagent_launch"), {
    agentId: o,
    name: h
  };
}
function D(o) {
  t(`Failed to write forked-skill scoping sidecar: ${o}`);
}
function txn({
  agentId: agentId,
  parentAgentId: parentAgentId,
  spawnDepth: spawnDepth,
  skillName: skillName,
  prompt: prompt,
  selectedAgent: selectedAgent,
  taskRegistry: taskRegistry_2,
  toolUseId: toolUseId,
  callerAbortController: k
}) {
  if (!Apt()) return {
    abortController: k,
    remove() {}
  };
  let abortController_2 = mr(),
    b = UMe(k, abortController_2),
    C = wdt(agentId, abortController_2);
  zHe(agentId);
  let y = `/${skillName}`,
    d = Udo({
      agentId: agentId,
      ownerAgentId: a6(parentAgentId, taskRegistry_2) ?? Ze(),
      parentAgentId: parentAgentId,
      spawnDepth: spawnDepth,
      description: y,
      prompt: prompt,
      selectedAgent: selectedAgent,
      toolUseId: toolUseId,
      abortController: abortController_2,
      forkWorker: !0
    });
  return taskRegistry_2.register(d), {
    abortController: abortController_2,
    remove(A) {
      b(), C(), taskRegistry_2.remove(agentId), Pp(agentId), _a(agentId, abortController_2.signal.aborted ? "stopped" : A, {
        toolUseId: toolUseId,
        summary: y,
        outputFile: d.outputFile,
        skipTranscript: !0,
        ambient: !0
      });
    }
  };
}
export { ZAn, exn, txn, g7r, VYt };