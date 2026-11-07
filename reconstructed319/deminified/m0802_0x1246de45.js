// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { FR } from "B:/~BUN/root/chunk-begxsvab.js";
import { _S } from "B:/~BUN/root/chunk-q78ga0zw.js";
import { Uc, ye, LE, tw, q, Xxe, Bae, Gwt, G5 } from "B:/~BUN/root/chunk-game8aqv.js";
import { b, f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { Ke, R } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { Ao } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { mY } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { sb } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { sm } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { xa, tFe, TBn, rFe, yV, Ph, Cm, SV, Qr, _r } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { rv, xte, ob, YSe } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { yo } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { _e } from "B:/~BUN/root/chunk-4vxp7kvb.js";
import { Su } from "B:/~BUN/root/chunk-3v92y8yw.js";
import { Ts, jhr, $De, D$, ni, Lye, xOn, gPi } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { _g, dn } from "B:/~BUN/root/chunk-y1b1g4ac.js";
import { LX } from "B:/~BUN/root/chunk-7pxn9dsp.js";
import { Ae, NHt } from "B:/~BUN/root/chunk-eds8xkh8.js";
import { q7e } from "B:/~BUN/root/chunk-esnm3r09.js";
import { se } from "B:/~BUN/root/chunk-9bs2y8fc.js";
import { zq, q2, Iue } from "B:/~BUN/root/chunk-detjgwj4.js";
import { mre, tMe, I6t, q8, Jar, o6, ixt, yx, s2, agi, cMe, flr, plr, vxt, pdt, r3t, jB, DQ, o3t, WB, jve, Wve, aW, e9, Vdr, V3t, K3t, PMe, Ed, neo, bwi, URn, zre, uW, XQ, yrs, Zp, Kre, yAn, _An, xfr, Wrs, yvi, _vi, bvi, H8e, Svi, Z8e, jh, Ie, Wh, Hg } from "B:/~BUN/root/chunk-27h4st9h.js";
import { zP, t7t, vTe, Sfs, RZ, yoe, xIn, ETe } from "B:/~BUN/root/chunk-ex2shtaj.js";
import { cs } from "B:/~BUN/root/chunk-kfm993xq.js";
import { hZt } from "B:/~BUN/root/chunk-e8znf4zw.js";
import { UKt, BKt } from "B:/~BUN/root/chunk-bjs1wgty.js";
import { v6e, dI, cI, Lit, E6e } from "B:/~BUN/root/chunk-ra105wwp.js";
import { VCt } from "B:/~BUN/root/chunk-x12sgt91.js";
import { b8 } from "B:/~BUN/root/chunk-3kg80bh2.js";
import { UQn, BQn, jQn, ZVo, pbn } from "B:/~BUN/root/chunk-qnah4hmf.js";
import { OZn } from "B:/~BUN/root/chunk-23ewg8ga.js";
import { Ll } from "B:/~BUN/root/chunk-zy4xrndc.js";
import { $S as name } from "B:/~BUN/root/chunk-bmcb2qbs.js";
import { Vg } from "B:/~BUN/root/chunk-jjs9d8eg.js";
import { pVi, mVi, $r } from "B:/~BUN/root/chunk-xbnyqyft.js";
import { X_e } from "B:/~BUN/root/chunk-tc6a3318.js";
import { ze } from "B:/~BUN/root/chunk-xwzn0yxv.js";
import { o, I, C, u, He, Be, T } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { L } from "B:/~BUN/root/chunk-5ha2avah.js";
var Ee = new Set(["userSettings", "policySettings"]),
  Un = new Set([...Ee, "session"]);
function Gti(e) {
  return q7e(e) || xte(e.source);
}
function PKr(e) {
  switch (e.type) {
    case "generic-error":
    case "manifest-validation-error":
    case "path-not-found":
      return e.plugin === void 0 ? e.path : void 0;
    default:
      return;
  }
}
var Pe = {
  "path-not-found": "path not found",
  "manifest-validation-error": "manifest invalid",
  "dependency-unsatisfied": "unmet dependency",
  "dependency-version-unsatisfied": "unmet dependency"
};
function Le(e) {
  return e.flatMap(item => {
    let category = Pe[item.type] ?? "load error",
      i = PKr(item);
    if (i !== void 0) {
      let d = item.type === "generic-error" ? item.manifestName : void 0,
        k = Z8e(i, ob(item.source) ?? "");
      return [{
        names: d ? [d, k] : [k],
        category: category
      }];
    }
    return q7e(item) ? [{
      names: [item.plugin],
      category: category
    }] : [];
  });
}
function Te(e, n, s) {
  let i = Le(n);
  if (i.length === 0) return;
  let d = e.indexOf(":"),
    k = d > 0 ? e.slice(0, d) : void 0,
    v = k === void 0 || s.has(k) ? void 0 : i.find(item => item.names.includes(k));
  if (v !== void 0) return `The plugin "${k}" did not load in this session (${v.category}): tell the user the plugin could not be loaded here, not that the skill is not installed.`;
  let r = L(i.map(item => item.category)).join(", ");
  return `${i.length === 1 ? `1 plugin did not load in this session (${r}); if this skill belongs to it` : `${i.length} plugins did not load in this session (${r}); if this skill belongs to one of them`}, tell the user its plugin could not be loaded here, not that the skill is not installed.`;
}
function renderToolUseMessage({
  skill: skill
}, {
  commands: commands,
  teammateAuthorOf: teammateAuthorOf
}) {
  if (!skill) return null;
  let i = skill.trim(),
    d = i.startsWith("/") ? i.substring(1) : i,
    k = commands?.find(h => h.name === d),
    v = k?.loadedFrom === "commands_DEPRECATED" ? `/${d}` : d,
    r = teammateAuthorOf?.(k?.type === "prompt" ? k.source : void 0, d) ?? null;
  return r ? `${v} \xB7 by ${r}` : v;
}
function ve() {
  return null;
}
function Oe(e) {
  let n = new Map(),
    s = i => Boolean(i.disableModelInvocation) || DQ(i);
  for (let i of e) {
    let d = n.get(i.name);
    if (d === void 0 || s(d) && !s(i) && i.type === "prompt" && !(tMe(d) && !tMe(i))) n.set(i.name, i);
  }
  return [...n.values()];
}
function Ne(e) {
  if (!xa().claim(`skill_reserved_namespace_rule_held_back_${e}`)) return;
  c("skill_reserved_namespace", e === "nonholder" ? "nonholder_allow_rule" : "prefix_at_namespace_boundary", {
    interactive: !ye(),
    host_prompt: LE() !== void 0
  });
}
async function ue(e) {
  let n = Kre(await Zp(Uc(), e.storageV5)),
    s = e.mcpCommands(),
    i = s.filter(item => item.type === "prompt" && item.loadedFrom === "mcp"),
    d = mVi([...i, ...(ve()?.adoptedMcpSkillCommands(e.mcpClients()) ?? [])], n),
    k = d.slice(0, i.length),
    v = d.slice(i.length),
    r = $De(),
    h = e9(n, s),
    M = Oe([...h, ...r, ...k]);
  return [...jve(M), ...v];
}
function fe(e, n) {
  let s = e.filter(Wve);
  return n ? Lye(s, G5()) : s;
}
function we(e, n) {
  return e.type === "prompt" && e.source === "plugin" && e.name !== n && (e.aliases?.includes(n) ?? !1);
}
function te(e, n, s) {
  let i = s.agentId === void 0,
    d = ni(e, n);
  if (d?.type === "prompt" && d.directoryListingName === e) return {
    kind: "listingName",
    command: void 0,
    listed: d
  };
  if (d !== void 0) {
    let v = we(d, e) ? fe(n, i) : [];
    if (v.includes(d)) {
      let candidates = v.filter(item => we(item, e) || item.type === "prompt" && item.loadedFrom !== "syncedSkills" && item.name.endsWith(`:${e}`));
      if (candidates.length > 1) return {
        kind: "ambiguous",
        command: void 0,
        candidates: candidates
      };
    }
    return {
      kind: "exact",
      command: d
    };
  }
  if (yrs(e) || n.some(item => o3t(item, e))) return {
    kind: "none",
    command: void 0
  };
  let k = gPi(e, fe(n, i));
  switch (k.kind) {
    case "unique":
      return {
        kind: "suggestion",
        command: void 0,
        suggestion: k.command
      };
    case "ambiguous":
      return {
        kind: "ambiguous",
        command: void 0,
        candidates: k.candidates
      };
    case "none":
      return {
        kind: "none",
        command: void 0
      };
  }
}
function Se(e, n) {
  return e.type === "prompt" && (e.context === "fork" || e.getContext !== void 0 && n.spawnedByForkedSkill === !0) && n.spawnedBySkill === WB(e);
}
async function xe(e, n, s, i) {
  if (!s.some(item => item.type === "prompt" && item.pluginInfo?.namedFolderYield?.yielded.includes(e) === !0)) return !0;
  let k = await Zp(Uc(), i, void 0, !0);
  return ni(e, k)?.name === n.name;
}
function Ue(e, n) {
  if (n.agentId !== void 0) return !1;
  let s = Svi(e);
  for (let i = n.messages.length - 1; i >= n.turnStartIndex; i--) {
    let d = n.messages[i];
    if (d.type !== "user" || d.isMeta || d.isCompactSummary || !Ph(d.origin) || d.verifiedSlackHumanTurn === !0 || d.handedOff === !0 || d.textNotTyped === !0) continue;
    let content = d.message.content;
    if (typeof content === "string") {
      if (content.includes(`<${sb}>`)) continue;
    } else if (content.some(item => item.type === "tool_result")) continue;
    if (s.test(Hg(d) ?? "")) return !0;
  }
  return !1;
}
async function $e(command, n, s, context, canUseTool, k, v, r, h) {
  let M = Date.now(),
    agentId = _S(),
    isBuiltIn = uW().has(n),
    isOfficial = yoe(command),
    isBundled = command.source === "bundled",
    {
      sanitizedName: H,
      skillNameHash: skillNameHash
    } = RZ({
      rawName: n,
      canonicalName: command.name,
      isMcp: command.loadedFrom === "mcp",
      isBuiltIn: isBuiltIn,
      isBundled: isBundled,
      isOfficial: isOfficial
    }),
    query_depth = context.queryTracking?.depth ?? 0,
    re = query_depth > 0 ? "nested-skill" : "claude-proactive",
    W = context.agentId;
  if (command.pluginInfo) jB(command.pluginInfo.repository, "skill", r3t(command, command.pluginInfo.pluginManifest.name));
  l("tengu_skill_tool_invocation", {
    command_name: H,
    _PROTO_skill_name: n,
    ...skillNameHash,
    execution_context: b("fork"),
    invocation_trigger: f(re),
    query_depth: query_depth,
    ...(context.queryTracking && {
      query_chain_id: _e(context.queryTracking.chainId)
    }),
    ...Sfs(v, v !== void 0 && XQ().has(v)),
    ...(W && {
      parent_agent_id: _e(W)
    }),
    ...vTe(command.source, command.loadedFrom, command.kind, command.createdBy),
    ...BKt(command.source, n),
    attribution_shown: UKt(context.session, command.source, n) !== null,
    skill_content_chars: command.contentLength,
    ...!1,
    ...(command.pluginInfo && xIn(command)),
    ...ETe(command)
  }), t7t(n, command, re, context.agentContext);
  let j = {
      agentId: agentId,
      parentAgentId: context.agentId,
      depth: Cm(context.agentContext) + 1,
      agentType: "subagent",
      isAsync: !1,
      isBackgroundAgent: context.agentContext.agentType === "main" ? !1 : context.agentContext.isBackgroundAgent,
      ...SV(context.agentContext)
    },
    E = UQn(command, context),
    U = E || context.spawnedByWorkflowRunId !== void 0,
    {
      modifiedGetAppState: Q,
      contextLayers: contextLayers,
      recordInvocation: K,
      baseAgent: baseAgent,
      promptMessages: promptMessages,
      skillContent: D,
      forkReadFileState: X,
      availableTools: availableTools,
      webFetchReadmissionAllowed: webFetchReadmissionAllowed,
      frozenCommandDenies: frozenCommandDenies
    } = await yAn(command, s || "", context, j, {
      replaceCommandRules: U,
      freezeCommandDenies: U,
      deferInvocationRecording: U
    }),
    P = await pbn(command, Uc(), {
      options: {
        tools: cI(baseAgent, webFetchReadmissionAllowed ? zre(baseAgent, availableTools, se(context), {
          activeAgents: context.options.agentDefinitions.activeAgents
        }) : availableTools, E, !1, !1, 0, D$(context).mode).resolvedTools,
        spawnedBySkill: WB(command)
      },
      storageV5: context.storageV5,
      session: context.session
    });
  if (P) promptMessages.push(P);
  let effort = command.getEffort?.(s || "", context) ?? command.getDefaultEffort?.(s || "", context)?.value ?? command.effort,
    J = effort !== void 0 ? {
      ...baseAgent,
      effort: effort
    } : baseAgent,
    Z = [];
  if (t(`SkillTool executing forked skill ${n} with agent ${J.agentType}`), E) {
    let ee = await BQn({
      agentId: agentId,
      agentDefinition: J,
      command: command,
      description: `/${Ts(command)} ${s ?? ""}`.trim(),
      prompt: D,
      promptMessages: promptMessages,
      context: context,
      canUseTool: canUseTool,
      getAppState: Q,
      permissionLayers: contextLayers.length > 0 ? [...(context.permissionLayers ?? []), ...contextLayers] : context.permissionLayers,
      readFileState: X,
      availableTools: availableTools,
      webFetchReadmissionAllowed: webFetchReadmissionAllowed,
      spawnedBySkill: WB(command),
      recordInvocationOnSuccess: K,
      frozenCommandDenies: frozenCommandDenies
    });
    if (ee) return g("skill_invoke"), {
      data: {
        success: !0,
        commandName: n,
        status: "forked",
        background: !0,
        agentId: agentId,
        result: `Running in the background as @${ee.name}`
      }
    };
    K();
  }
  let agentContext = {
      ...j,
      subagentName: J.agentType,
      isBuiltIn: Ed(J)
    },
    forwardSubagentText = context.options.forwardSubagentText,
    de = (message, prompt) => {
      r?.({
        type: "progress",
        toolUseID: `skill_${k.message.id}`,
        data: {
          message: message,
          type: "skill_progress",
          prompt: prompt,
          agentId: agentId,
          agentType: J.agentType,
          description: command.description
        }
      });
    },
    me = jQn({
      agentId: agentId,
      parentAgentId: W,
      spawnDepth: Cm(agentContext),
      skillName: Ts(command),
      prompt: D,
      selectedAgent: J,
      taskRegistry: context.taskRegistry,
      toolUseId: context.toolUseId,
      callerAbortController: context.abortController
    }),
    ne = "failed";
  try {
    let ee = Wh(promptMessages).find(item => item.type === "user");
    if (ee) de({
      ...ee,
      isMeta: void 0
    }, D);
    let oe = !1,
      F = h?.mark("model");
    for await (let x of dI({
      agentDefinition: J,
      promptMessages: promptMessages,
      turnPrompt: D,
      onModelRestricted: OZn(WB(command), r),
      toolUseContext: {
        ...context,
        getAppState: Q,
        permissionLayers: contextLayers.length > 0 ? [...(context.permissionLayers ?? []), ...contextLayers] : context.permissionLayers
      },
      canUseTool: canUseTool,
      isAsync: !1,
      querySource: "agent:custom",
      spawnedBySkill: WB(command),
      spawnedByForkedSkill: !0,
      model: command.model,
      availableTools: availableTools,
      webFetchReadmissionAllowed: webFetchReadmissionAllowed,
      override: {
        agentId: agentId,
        agentContext: agentContext,
        abortController: me.abortController,
        shareFileHistory: !0,
        readFileState: X
      }
    })) {
      if (x.type === "api_metrics") {
        r?.(x);
        continue;
      }
      if (x.type === "set_in_progress_tool_use_ids" || x.type === "spinner_mode" || x.type === "query_model_change") continue;
      if (Z.push(x), q8(x)) {
        if (v6e(context, x)) r?.(Jar(x));
        continue;
      }
      if (x.type !== "assistant" && x.type !== "user") continue;
      if (!r) continue;
      if (x.type === "user" && x.isMeta && !oe) continue;
      if (x.type === "assistant") oe = !0;
      for (let ke of Wh([x])) {
        let Ce = ke.message.content[0];
        if (!forwardSubagentText && Ce?.type !== "tool_use" && Ce?.type !== "tool_result") continue;
        de(ke, "");
      }
    }
    F?.();
    let Y = Lit(jh(Z));
    if (!Y) {
      if (E6e(agentId, context), context.spawnedByWorkflowRunId !== void 0) K();
    }
    let toolsUsedLine = ixt(o6(Z), context.messages),
      result = LX(Z) + _An(Z, "Skill execution completed");
    Z.length = 0;
    let he = Date.now() - M;
    return t(`SkillTool forked skill ${n} completed in ${he}ms`), g("skill_invoke"), ne = Y ? "failed" : "completed", {
      data: {
        success: !0,
        commandName: n,
        status: "forked",
        agentId: agentId,
        result: result,
        ...(toolsUsedLine !== void 0 && {
          toolsUsedLine: toolsUsedLine
        })
      }
    };
  } finally {
    me.remove(ne), Gwt(agentId);
  }
}
var De = p(() => u({
    skill: o().describe("The name of a skill from the available-skills list. Do not guess names."),
    args: o().optional().describe("Optional arguments for the skill")
  })),
  Fe = p(() => {
    let e = u({
        success: I().describe("Whether the skill is valid"),
        commandName: o().describe("The name of the skill"),
        allowedTools: C(o()).optional().describe("Tools allowed by this skill"),
        model: o().optional().describe("Resolved model the skill turn runs on when a frontmatter model override took effect; omitted otherwise"),
        status: T("inline").optional().describe("Execution status"),
        readOnly: I().optional().describe("True when the skill instructions were loaded read-only (nothing was executed)")
      }),
      n = u({
        success: I().describe("Whether the skill completed successfully"),
        commandName: o().describe("The name of the skill"),
        status: T("forked").describe("Execution status"),
        agentId: o().describe("The ID of the sub-agent that executed the skill"),
        result: o().describe("The result from the forked skill execution"),
        background: I().optional().describe("True when the sub-agent was launched in the background: `result` describes the launch, and the skill outcome arrives later as a task notification."),
        toolsUsedLine: o().optional().describe("The tools-used-before-summary line the tool_result opens with: the tools the sub-agent called that this conversation's requests did not yet name")
      });
    return Be([e, n]);
  });
function Ve(e) {
  return {
    storageV5: e.storageV5,
    mcpCommands: () => e.getAppState().mcp.commands,
    mcpClients: () => _g(e)
  };
}
async function je({
  input: {
    skill: skill_2,
    args: args
  },
  toolUseContext: toolUseContext,
  canUseTool: canUseTool_2,
  parentMessage: parentMessage,
  onProgress: onProgress,
  timing: timing
}) {
  if (toolUseContext.agentId !== void 0 && s2(toolUseContext.agentId)) throw m("subagent_launch", "skill_fork_spawner_stop_pending"), Error("This agent has been stopped and its stop is still completing; it cannot launch skills.");
  let r = skill_2.trim(),
    h = r.startsWith("/") ? r.substring(1) : r,
    activeSkill = toolUseContext.options.activeSkill,
    _ = activeSkill ?? toolUseContext.options.spawnedBySkill;
  toolUseContext.options.activeSkill = h;
  let a = X_e(toolUseContext),
    w = !1;
  try {
    let N = await ue(Ve(toolUseContext)),
      H = te(h, N, toolUseContext);
    if (H.kind === "ambiguous") {
      let F = H.candidates.every(item => mY(item.name)) ? `: ${H.candidates.map(item => item.name).join(", ")}` : "";
      throw new R(`Skill ${h} now matches several skills${F} \u2014 invoke one by its full name.`, "Skill tool: bare name ambiguous at dispatch");
    }
    let command_2 = H.command,
      re = null;
    if (command_2) toolUseContext.options.activeSkill = WB(command_2);
    if (!a) {
      if (URn(toolUseContext.session, command_2?.name ?? h, toolUseContext.storageV5, h), command_2?.type === "prompt" && command_2.pluginInfo) zP(command_2.pluginInfo.repository);
    }
    if (command_2?.type === "prompt" && jhr(command_2, args || "", toolUseContext) === "fork" && !a) {
      let F = toolUseContext.hookCaller !== void 0 && !toolUseContext.hookServesModel && toolUseContext.agentId === void 0 ? pdt() : void 0;
      if (F !== void 0) throw new R(`Skill "${h}" was not run: ${F}.`, "A forked skill was not run: a hold on plugins' input stands");
      try {
        return await $e(command_2, h, args, toolUseContext, canUseTool_2, parentMessage, _, onProgress, timing);
      } finally {
        toolUseContext.options.activeSkill = activeSkill;
      }
    }
    let W = `${toolUseContext.agentId ?? ""}:${command_2?.name ?? h}`,
      j = Bae().get(W),
      {
        processPromptSlashCommand: processPromptSlashCommand
      } = await import("B:/~BUN/root/chunk-g56m3kvk.js"),
      U = toolUseContext.toolUseId ?? Xe(parentMessage, $r),
      Q = U !== void 0 && neo(parentMessage.handedOffLive)?.has(U) === !0,
      A = await processPromptSlashCommand(h, args || "", N, toolUseContext, a, Q);
    if (!A.shouldQuery) throw m("skill_invoke", "skill_invoke_process_failed"), Error("Command processing failed");
    let allowedTools = a ? [] : A.allowedTools || [],
      skillModel = a ? void 0 : tFe(A.model),
      effort_2 = a ? void 0 : A.effort,
      isBuiltIn_2 = uW().has(h),
      isBundled_2 = command_2?.type === "prompt" && command_2.source === "bundled",
      isOfficial_2 = command_2?.type === "prompt" && yoe(command_2),
      {
        sanitizedName: y,
        skillNameHash: skillNameHash_2
      } = RZ({
        rawName: h,
        canonicalName: command_2?.name ?? h,
        isMcp: command_2?.loadedFrom === "mcp",
        isBuiltIn: isBuiltIn_2,
        isBundled: isBundled_2,
        isOfficial: isOfficial_2
      }),
      query_depth_2 = toolUseContext.queryTracking?.depth ?? 0,
      ae = query_depth_2 > 0 ? "nested-skill" : "claude-proactive",
      agentId_2 = toolUseContext.agentId,
      Z = command_2?.type === "prompt" ? command_2.source : void 0,
      skill_body_chars = 0;
    for (let F of A.messages) skill_body_chars += V3t(F)?.length ?? 0;
    if (command_2?.type === "prompt" && command_2.pluginInfo && !a) jB(command_2.pluginInfo.repository, "skill", r3t(command_2, command_2.pluginInfo.pluginManifest.name));
    l("tengu_skill_tool_invocation", {
      command_name: y,
      _PROTO_skill_name: h,
      ...skillNameHash_2,
      execution_context: a ? b("read-only") : b("inline"),
      invocation_trigger: f(ae),
      query_depth: query_depth_2,
      ...(toolUseContext.queryTracking && {
        query_chain_id: _e(toolUseContext.queryTracking.chainId)
      }),
      ...Sfs(_, _ !== void 0 && XQ().has(_)),
      ...(agentId_2 && {
        parent_agent_id: _e(agentId_2)
      }),
      ...vTe(Z, command_2?.loadedFrom, command_2?.kind, command_2?.type === "prompt" ? command_2.createdBy : void 0),
      ...BKt(Z, h),
      attribution_shown: UKt(toolUseContext.session, Z, h) !== null,
      ...(command_2?.type === "prompt" && {
        skill_content_chars: command_2.contentLength
      }),
      skill_body_chars: skill_body_chars,
      ...!1,
      ...(command_2?.type === "prompt" && command_2.pluginInfo && xIn(command_2)),
      ...(command_2?.type === "prompt" && ETe(command_2))
    }), t7t(h, command_2, ae, toolUseContext.agentContext);
    let messages = A.messages.filter(item => {
        if (item.type === "progress") return !1;
        if (item.type === "user" && "message" in item) {
          let content_2 = item.message.content;
          if (typeof content_2 === "string" && content_2.includes(`<${sb}>`)) return !1;
        }
        return !0;
      }),
      de = a ? messages.map(V3t).find(item => item !== null) ?? void 0 : void 0,
      newMessages = Qe(Ye({
        messages: messages,
        contextMessages: toolUseContext.messages,
        commandName: h,
        args: args,
        priorContent: j?.content ?? de,
        renderedContent: Bae().get(W)?.content ?? de
      }), U);
    t(`SkillTool returning ${newMessages.length} newMessages for skill ${h}`), g("skill_invoke");
    let contextLayers_2 = [];
    if (allowedTools.length > 0) contextLayers_2.push({
      kind: "allowed_tools",
      allowedTools: allowedTools
    });
    let ee = toolUseContext.getAppState(),
      oe = skillModel && rFe({
        skillModel: skillModel,
        mode: ee.toolPermissionContext.mode,
        fastMode: ee.fastMode ?? !1
      }) ? TBn(skillModel, toolUseContext.options.mainLoopModel) : void 0;
    if (oe) contextLayers_2.push({
      kind: "model",
      mainLoopModel: oe
    });
    if (effort_2 !== void 0) contextLayers_2.push({
      kind: "effort",
      effort: effort_2
    });
    return w = !0, {
      data: {
        success: !0,
        commandName: h,
        allowedTools: allowedTools.length > 0 ? allowedTools : void 0,
        model: oe,
        ...(a && {
          readOnly: !0
        })
      },
      newMessages: newMessages,
      ...(contextLayers_2.length > 0 && {
        contextLayers: contextLayers_2
      })
    };
  } finally {
    if (a || !w) toolUseContext.options.activeSkill = activeSkill;
  }
}
var eit = dn({
    name: $r,
    searchHint: "invoke a slash-command skill",
    isEnabled() {
      return !tw();
    },
    backgrounding: "never",
    maxResultSizeChars: 1e5,
    preserveToolUseResultInSubagents: !0,
    get inputSchema() {
      return De();
    },
    get outputSchema() {
      return Fe();
    },
    description: async ({
      skill: skill_3
    }) => `Execute skill: ${skill_3}`,
    prompt: async ({
      model: model,
      leanRewrite: leanRewrite
    }) => bwi({
      model: model,
      leanRewrite: leanRewrite
    }),
    toAutoClassifierInput: ({
      skill: skill_4
    }) => skill_4 ?? "",
    create(e) {
      let n = e;
      return {
        async validateInput({
          skill: skill_5
        }, {
          signal: signal,
          toolUseId: toolUseId
        }) {
          let k = skill_5.trim();
          if (!k) return m("skill_invoke", "skill_invoke_empty_name"), {
            result: !1,
            message: `Invalid skill format: ${skill_5}`,
            errorCode: 1
          };
          let v = k.startsWith("/");
          if (v) l("tengu_skill_tool_slash_prefix", {});
          let rawName = v ? k.substring(1) : k,
            h,
            M = !1,
            _ = await ue(n),
            a = te(rawName, _, n),
            command_3 = a.command,
            commandName = rv(rawName);
          if (agi(n.session) && (!command_3 || vxt(command_3)) && (command_3 !== void 0 || plr(commandName))) {
            let E = await Ao(cMe(commandName), signal, () => new Ke(Su));
            if (!E.ok) h = E.reason, M = E.withheld === !0;else _ = await ue(n), a = te(rawName, _, n), command_3 = a.command;
          }
          let H = a.kind === "listingName" ? a.listed : command_3,
            S = H?.type === "prompt" ? H.loadDefinition?.() : a.kind === "none" && commandName === rawName && commandName.includes(":") && pVi(commandName) === void 0 ? (await Ae().handedIn)?.readBuilt?.(commandName) : void 0;
          if (S !== void 0) {
            await Ao(S, signal, () => new Ke(Su)), _ = await ue(n), a = te(rawName, _, n);
            let E = a.kind === "none" && H?.type === "prompt" && H.directoryListingName !== void 0 ? te(H.directoryListingName, _, n) : a;
            if (E.kind === "listingName") a = E;
            command_3 = a.command;
          }
          if (command_3?.type === "prompt" && command_3.loadedFrom === "mcp") return {
            result: !1,
            message: `Unknown skill: ${rawName}`,
            errorCode: 2
          };
          if (h !== void 0 && (!command_3 || vxt(command_3))) return m("skill_invoke", M ? "skill_invoke_withheld" : "skill_invoke_not_materialized"), {
            result: !1,
            message: M ? `${flr(rawName)} Proceed without it.` : `Skill ${rawName} could not be downloaded (${h}). Proceed without it.`,
            errorCode: 10
          };
          let re = null;
          if (command_3 && PMe(command_3)) return m("skill_invoke", aW(command_3) ? "skill_invoke_host_catalog_withheld" : "skill_invoke_sync_vetoed"), {
            result: !1,
            message: `Unknown skill: ${rawName}`,
            errorCode: 13
          };
          if (!command_3) {
            let E = rawName === "claude-in-chrome" ? {
                command_name: b("claude-in-chrome")
              } : void 0,
              U = ZVo(_, rawName, n.spawnedBySkill);
            if (U.length > 0) {
              let y = a.kind === "ambiguous" ? a.candidates.filter(item => !o3t(item, rawName) && mY(item.name)) : [];
              if (a.kind === "ambiguous") l("tengu_skill_tool_suffix_match", {
                candidate_count: a.candidates.length
              });
              return m("skill_invoke", "skill_invoke_not_found", E), {
                result: !1,
                message: y.length > 0 ? `Unknown skill: ${rawName}. Several skills match that name: ${[...y, ...U].map(item => item.name).join(", ")} \u2014 invoke one by its full name; the directory-scoped variants apply to the files under their directory.` : `Unknown skill: ${rawName}. Directory-scoped variants exist: ${U.map(item => item.name).join(", ")} \u2014 invoke the variant whose directory contains the files you are working on.`,
                errorCode: 2
              };
            }
            if (a.kind === "listingName") {
              let {
                  listed: listed
                } = a,
                isMainSession = n.agentId === void 0;
              if (fe(_, isMainSession).includes(listed) && mY(listed.name) && !Se(listed, n) && H8e(listed, {
                commandName: listed.name,
                userTypedThisTurn: !1,
                isMainSession: isMainSession,
                permissionContext: n.permissions()
              }) === null) return m("skill_invoke", "skill_invoke_not_found", E), {
                result: !1,
                message: `Unknown skill: ${rawName}. Did you mean ${listed.name}? Invoke it by that full name.`,
                errorCode: 2
              };
            }
            if (a.kind === "suggestion") {
              if (l("tengu_skill_tool_suffix_match", {
                candidate_count: 1
              }), mY(a.suggestion.name)) return m("skill_invoke", "skill_invoke_not_found", E), {
                result: !1,
                message: `Unknown skill: ${rawName}. Did you mean ${a.suggestion.name}? Invoke it by that full name.`,
                errorCode: 2
              };
            }
            if (a.kind === "ambiguous") {
              l("tengu_skill_tool_suffix_match", {
                candidate_count: a.candidates.length
              });
              let y = a.candidates.filter(item => !o3t(item, rawName)),
                O = y.length === 1 ? y[0] : void 0;
              if (y.length > 0 && y.every(item => mY(item.name))) return m("skill_invoke", "skill_invoke_not_found", E), {
                result: !1,
                message: O !== void 0 ? `Unknown skill: ${rawName}. Did you mean ${O.name}? Invoke it by that full name.` : `Unknown skill: ${rawName}. Several skills match that name: ${y.map(item => item.name).join(", ")} \u2014 invoke one by its full name.`,
                errorCode: 2
              };
            }
            let Q = YSe(rawName, _.map(item => ({
                name: Ts(item),
                aliases: item.aliases
              })), {
                maxEditDistance: 2
              }),
              isMainSession_2 = n.agentId === void 0,
              K = Q === void 0 && commandName !== rawName ? fe(_, isMainSession_2).find(item => item.name === commandName && xOn(item)) : void 0,
              V = K !== void 0 && mY(commandName) && !mre(commandName) && !Se(K, n) && H8e(K, {
                commandName: commandName,
                userTypedThisTurn: !1,
                isMainSession: isMainSession_2,
                permissionContext: n.permissions()
              }) === null;
            if (V) l("tengu_skill_tool_unprefixed_match", {});
            let z = Q ?? (V ? commandName : void 0);
            m("skill_invoke", "skill_invoke_not_found", E);
            let D = await NHt()?.catch(() => {
                return;
              }),
              X = D && Te(rawName, D.errors, new Set(D.enabled.map(item => item.name))),
              G = z ? `Unknown skill: ${rawName}. Did you mean ${z}?` : `Unknown skill: ${rawName}`;
            return {
              result: !1,
              message: X ? `${G}${z ? "" : "."} ${X}` : G,
              errorCode: 2
            };
          }
          if (Se(command_3, n)) return m("skill_invoke", "skill_invoke_fork_recursion"), l("tengu_skill_tool_fork_recursion_blocked", {}), {
            result: !1,
            message: `Skill ${rawName} is already executing in this forked context \u2014 you are the subagent running it. Execute the instructions in the skill body directly instead of re-invoking the ${$r} tool.`,
            errorCode: 9
          };
          let W = await xe(rawName, command_3, _, n.storageV5),
            j = H8e(command_3, {
              commandName: W ? rawName : command_3.name,
              userTypedThisTurn: !X_e(n) && Ue(rawName, {
                agentId: n.agentId,
                messages: n.messages(),
                turnStartIndex: n.turnStartIndex
              }) && W,
              isMainSession: n.agentId === void 0,
              permissionContext: void 0
            });
          if (j !== null) {
            switch (j.reason) {
              case "disable_model_invocation":
                {
                  let {
                    sanitizedName: E,
                    skillNameHash: skillNameHash_3
                  } = RZ({
                    rawName: rawName,
                    canonicalName: command_3.name,
                    isMcp: command_3.loadedFrom === "mcp",
                    isBuiltIn: uW().has(rawName),
                    isBundled: command_3.type === "prompt" && command_3.source === "bundled",
                    isOfficial: command_3.type === "prompt" && yoe(command_3)
                  });
                  m("skill_invoke", "skill_invoke_model_disabled", {
                    command_name: E,
                    ...skillNameHash_3
                  });
                  break;
                }
              case "not_loaded":
                m("skill_invoke", "skill_invoke_not_materialized");
                break;
              case "not_allowlisted":
                m("skill_invoke", "skill_invoke_not_allowlisted");
                break;
              case "override_disabled":
                m("skill_invoke", j.hiddenBehindPlugin ? "skill_invoke_hidden_behind_plugin" : j.killSwitchOnly ? "skill_invoke_bundled_skills_disabled" : "skill_invoke_override_disabled");
                break;
              case "not_prompt_type":
                m("skill_invoke", "skill_invoke_not_prompt_type");
                break;
              case "mcp_prompt":
                break;
              case "deny_rule":
                break;
            }
            return {
              result: !1,
              message: j.message,
              errorCode: j.errorCode
            };
          }
          return {
            result: !0
          };
        },
        async checkPermissions(s, i) {
          let {
              skill: skill_6,
              args: args_2
            } = s,
            v = skill_6.trim(),
            ruleContent = v.startsWith("/") ? v.substring(1) : v,
            h = n.permissions(),
            M = await ue(n),
            _ = te(ruleContent, M, n),
            command_4 = _.command,
            w = _.kind === "ambiguous" ? _.candidates : [command_4],
            N = command_4?.type === "prompt" && command_4.loadedFrom === "mcp" ? command_4 : void 0,
            H = N?.mcpSkillEntry?.(),
            S = void 0,
            ie = void 0,
            re = void 0,
            W = Iue(h, eit, "deny"),
            j = void 0;
          for (let [y, rule] of W.entries()) if (Wrs(y, ruleContent, w, void 0) || (void 0)?.test(y) || (void 0)?.names.some(P => xfr(y, P, void 0)) || (void 0)?.listed.some(P => xfr(y, P.name, P))) return {
            behavior: "deny",
            message: "Skill execution blocked by permission rules",
            decisionReason: {
              type: "rule",
              rule: rule
            }
          };
          if (N !== void 0) return {
            behavior: "deny",
            message: `Unknown skill: ${ruleContent}`,
            decisionReason: {
              type: "other",
              reason: `Unknown skill: ${ruleContent}`
            }
          };
          let E = () => I6t() && mre(ruleContent) && !(command_4 !== void 0 && tMe(command_4)),
            U = Iue(h, eit, "ask");
          if (U.size > 0 && zq()) {
            for (let [y, rule_2] of U.entries()) if (w.some(item => yvi(y, ruleContent, item))) return {
              behavior: "ask",
              message: `Execute skill: ${ruleContent}`,
              decisionReason: {
                type: "rule",
                rule: rule_2
              },
              ...((E() || hZt(ruleContent)) && {
                suppressAlwaysAllowRule: !0
              }),
              updatedInput: {
                skill: skill_6,
                args: args_2
              },
              metadata: command_4 ? {
                command: command_4
              } : void 0
            };
          }
          let Q = Iue(h, eit, "allow"),
            A;
          for (let [rule_4, rule_3] of Q.entries()) {
            if (hZt(rule_4)) continue;
            let P = _vi(rule_4, ruleContent, command_4);
            if (P === "allow") return {
              behavior: "allow",
              updatedInput: {
                skill: skill_6,
                args: args_2
              },
              decisionReason: {
                type: "rule",
                rule: rule_3
              }
            };
            if (P === "held-back-nonholder") A = {
              rule: rule_4,
              kind: "nonholder"
            };else if (P === "held-back-boundary") A ??= {
              rule: rule_4,
              kind: "boundary"
            };
          }
          if (command_4?.type === "prompt" && (Ge(command_4) || X_e(n)) && !qe(command_4, n, h)) return {
            behavior: "allow",
            updatedInput: {
              skill: skill_6,
              args: args_2
            },
            decisionReason: void 0
          };
          let pluginName = command_4?.type === "prompt" && command_4.source === "plugin" ? command_4.pluginInfo?.pluginManifest.name : void 0,
            V = E(),
            z = A === void 0 ? void 0 : V ? "nonholder" : A.kind;
          if (z !== void 0 && h.mode !== "bypassPermissions" && q2(h, eit) === null) Ne(z);
          let reason = A === void 0 || z === void 0 ? void 0 : bvi(A.rule, command_4?.name ?? ruleContent, z === "nonholder" ? {
              kind: "nonholder",
              pluginName: pluginName
            } : {
              kind: "boundary"
            }),
            decisionReason = reason === void 0 ? void 0 : {
              type: "other",
              reason: reason
            };
          if (V || hZt(ruleContent)) return {
            behavior: "ask",
            message: `Execute skill: ${ruleContent}${reason ? ` \u2014 ${reason}` : ""}`,
            decisionReason: decisionReason,
            suppressAlwaysAllowRule: !0,
            updatedInput: {
              skill: skill_6,
              args: args_2
            },
            metadata: command_4 ? {
              command: command_4
            } : void 0
          };
          let suggestions = [{
            type: "addRules",
            rules: [{
              toolName: $r,
              ruleContent: ruleContent
            }],
            behavior: "allow",
            destination: "localSettings"
          }, {
            type: "addRules",
            rules: [{
              toolName: $r,
              ruleContent: `${ruleContent}:*`
            }],
            behavior: "allow",
            destination: "localSettings"
          }];
          return {
            behavior: "ask",
            message: `Execute skill: ${ruleContent}${reason ? ` \u2014 ${reason}` : ""}`,
            decisionReason: decisionReason,
            suggestions: suggestions,
            updatedInput: {
              skill: skill_6,
              args: args_2
            },
            metadata: command_4 ? {
              command: command_4
            } : void 0
          };
        },
        call(input, i) {
          if (!i.runEngine) return Promise.reject(Error("Skill: invoking needs the executor (call.runEngine)"));
          return i.runEngine(je, {
            input: input,
            parentMessage: i.parentMessage,
            onProgress: i.onProgress,
            timing: i.timing
          });
        }
      };
    },
    mapToolResultToToolResultBlockParam(e, tool_use_id) {
      if ("status" in e && e.status === "forked") return {
        type: "tool_result",
        tool_use_id: tool_use_id,
        content: (e.toolsUsedLine === void 0 ? "" : `${e.toolsUsedLine}
`) + (e.background ? `Skill "${e.commandName}" launched (forked execution, running in the background).

${e.result}` : `Skill "${e.commandName}" completed (forked execution).

Result:
${e.result}`)
      };
      if ("readOnly" in e && e.readOnly) return {
        type: "tool_result",
        tool_use_id: tool_use_id,
        content: `Loaded skill instructions (read-only): ${e.commandName}. Nothing was executed; delegate execution to a worker.`
      };
      return {
        type: "tool_result",
        tool_use_id: tool_use_id,
        content: `Launching skill: ${e.commandName}`
      };
    },
    renderToolUseMessage: renderToolUseMessage
  }),
  We = new Set(["type", "progressMessage", "contentLength", "contentHash", "getLoadedSkillMd", "skillFile", "argNames", "model", "effort", "source", "pluginInfo", "serverAttribution", "disableNonInteractive", "skillRoot", "skillDir", "context", "agent", "background", "getPromptForCommand", "getEffort", "getDefaultEffort", "onUserTypedArgs", "getContext", "formatForegroundForkResult", "declaredFields", "pluginSource", "metadata", "createdBy", "fallback", "unqualifiedName", "allowlistedByFullNameOnly", "directoryListingName", "bareNameReserved", "reservedLabels", "fromHostCatalog", "shedAliases", "name", "description", "menuDescription", "hasUserSpecifiedDescription", "isEnabled", "isHidden", "aliases", "subcommands", "subcommandsBareOnly", "isMcp", "argumentHint", "whenToUse", "paths", "version", "disableModelInvocation", "disableBridgeInvocation", "userInvocable", "loadedFrom", "immediate", "userFacingName", "getArgumentCompletions"]);
function qe(e, n, s) {
  return FR() && n.replScriptCall === !0 && (yo(s.mode) || s.modeBeforeRewrite !== void 0 && yo(s.modeBeforeRewrite)) && e.type === "prompt" && (e.context !== void 0 || e.agent !== void 0 || e.getContext !== void 0);
}
function Ge(e) {
  for (let n of Object.keys(e)) {
    if (We.has(n)) continue;
    let s = e[n];
    if (s === void 0 || s === null) continue;
    if (Array.isArray(s) && s.length === 0) continue;
    if (typeof s === "object" && !Array.isArray(s) && Object.keys(s).length === 0) continue;
    return !1;
  }
  return !0;
}
function Ye({
  messages: messages_2,
  contextMessages: contextMessages,
  commandName: commandName_2,
  args: args_3,
  priorContent: priorContent,
  renderedContent: renderedContent
}) {
  if (!priorContent || !renderedContent) return messages_2;
  if (messages_2.some(item => item.type === "user" && (item.promptShellHandOff !== void 0 || item.mcpSkill !== void 0))) return messages_2;
  let v = K3t(contextMessages, priorContent);
  if (!v) return messages_2;
  if (priorContent !== renderedContent) {
    let content_3 = priorContent.endsWith(Vdr) ? `(Re-invocation of /${commandName_2} \u2014 the previously loaded copy was truncated by compaction; the full instructions follow.)` : `(Re-invocation of /${commandName_2} \u2014 the skill instructions were previously loaded; the arguments or dynamic output below are new.)`;
    return [Ie({
      content: content_3,
      isMeta: !0
    }), ...messages_2];
  }
  let r = !1,
    h = messages_2.map(item => {
      if (V3t(item) !== renderedContent) return item;
      return r = !0, Ie({
        content: v === "attachment" ? `Skill /${commandName_2} was loaded earlier (see the invoked-skills reminder above); this is a NEW invocation \u2014 follow those instructions now, including any setup steps.${args_3 ? ` Arguments: ${args_3}` : ""}` : `Skill /${commandName_2} is already loaded above; instructions unchanged.${args_3 ? ` Arguments: ${args_3}` : ""}`,
        isMeta: !0
      });
    });
  if (r) t(`SkillTool eliding byte-identical re-invocation of skill ${commandName_2}`);
  return h;
}
function Qe(e, sourceToolUseID) {
  if (!sourceToolUseID) return e;
  return e.map(item => {
    if (item.type === "user") return {
      ...item,
      sourceToolUseID: sourceToolUseID
    };
    return item;
  });
}
function Xe(e, n) {
  let s = e.message.content.find(item => item.type === "tool_use" && item.name === n);
  return s && s.type === "tool_use" ? s.id : void 0;
}
function Je() {
  return yV() === "default" ? " (use the Agent tool instead)" : "";
}
function Ze() {
  return `## What Happens in Plan Mode

In plan mode, you'll:
1. Thoroughly explore the codebase using ${yx() && Ll() ? `\`find\`/${Qr}, \`grep\`/${_r}, and ${ze}` : `${Qr}, ${_r}, and ${ze}`}
2. Understand existing patterns and architecture
3. Design an implementation approach
4. Present your plan to the user for approval
5. Use ${cs} if you need to clarify approaches
6. Exit plan mode with ${Vg} when ready to implement

`;
}
function en() {
  let e = Je();
  return `Use this tool proactively when you're about to start a non-trivial implementation task. Getting user sign-off on your approach before writing code prevents wasted effort and ensures alignment. This tool transitions you into plan mode where you can explore the codebase and design an implementation approach for user approval.

## When to Use This Tool

**Prefer using EnterPlanMode** for implementation tasks unless they're simple. Use it when ANY of these conditions apply:

1. **New Feature Implementation**: Adding meaningful new functionality
   - Example: "Add a logout button" - where should it go? What should happen on click?
   - Example: "Add form validation" - what rules? What error messages?

2. **Multiple Valid Approaches**: The task can be solved in several different ways
   - Example: "Add caching to the API" - could use Redis, in-memory, file-based, etc.
   - Example: "Improve performance" - many optimization strategies possible

3. **Code Modifications**: Changes that affect existing behavior or structure
   - Example: "Update the login flow" - what exactly should change?
   - Example: "Refactor this component" - what's the target architecture?

4. **Architectural Decisions**: The task requires choosing between patterns or technologies
   - Example: "Add real-time updates" - WebSockets vs SSE vs polling
   - Example: "Implement state management" - Redux vs Context vs custom solution

5. **Multi-File Changes**: The task will likely touch more than 2-3 files
   - Example: "Refactor the authentication system"
   - Example: "Add a new API endpoint with tests"

6. **Unclear Requirements**: You need to explore before understanding the full scope
   - Example: "Make the app faster" - need to profile and identify bottlenecks
   - Example: "Fix the bug in checkout" - need to investigate root cause

7. **User Preferences Matter**: The implementation could reasonably go multiple ways
   - If you would use ${cs} to clarify the approach, use EnterPlanMode instead
   - Plan mode lets you explore first, then present options with context

## When NOT to Use This Tool

Only skip EnterPlanMode for simple tasks:
- Single-line or few-line fixes (typos, obvious bugs, small tweaks)
- Adding a single function with clear requirements
- Tasks where the user has given very specific, detailed instructions
- Pure research/exploration tasks${e}

${Ze()}## Examples

### GOOD - Use EnterPlanMode:
User: "Add user authentication to the app"
- Requires architectural decisions (session vs JWT, where to store tokens, middleware structure)

User: "Optimize the database queries"
- Multiple approaches possible, need to profile first, significant impact

User: "Implement dark mode"
- Architectural decision on theme system, affects many components

User: "Add a delete button to the user profile"
- Seems simple but involves: where to place it, confirmation dialog, API call, error handling, state updates

User: "Update the error handling in the API"
- Affects multiple files, user should approve the approach

### BAD - Don't use EnterPlanMode:
User: "Fix the typo in the README"
- Straightforward, no planning needed

User: "Add a console.log to debug this function"
- Simple, obvious implementation

User: "What files handle routing?"
- Research task, not implementation planning

## Important Notes

- This tool REQUIRES user approval - they must consent to entering plan mode
- If unsure whether to use it, err on the side of planning - it's better to get alignment upfront than to redo work
- Users appreciate being consulted before significant changes are made to their codebase
`;
}
function Me() {
  return en();
}
var nn = p(() => He({})),
  on = p(() => u({
    message: o().describe("Confirmation that plan mode was entered")
  })),
  BJn = dn({
    name: name,
    searchHint: "switch to plan mode to design an approach before coding",
    backgrounding: "never",
    maxResultSizeChars: 1e5,
    async description() {
      return "Requests permission to enter plan mode for complex tasks requiring exploration and design";
    },
    async prompt() {
      return Me();
    },
    get inputSchema() {
      return nn();
    },
    get outputSchema() {
      return on();
    },
    userFacingName() {
      return "";
    },
    shouldDefer: !0,
    isEnabled() {
      return b8.isEnabled();
    },
    isConcurrencySafe() {
      return !0;
    },
    isReadOnly() {
      return !0;
    },
    renderToolUseMessage() {
      return null;
    },
    create(e) {
      return {
        async validateInput(n) {
          if (e.agentId) return {
            result: !1,
            message: "Only the main session can enter plan mode.",
            errorCode: 1
          };
          return {
            result: !0
          };
        },
        async checkPermissions(updatedInput) {
          let {
            mode: mode
          } = e.permissions();
          return q() && mode !== "auto" && mode !== "plan" ? {
            behavior: "ask",
            message: "Enter plan mode?",
            updatedInput: updatedInput,
            personOnly: !0,
            decisionReason: {
              type: "safetyCheck",
              reason: "In plan mode, an automatic check may approve read-only actions that you would otherwise be asked about.",
              classifierApprovable: !1
            }
          } : {
            behavior: "allow",
            updatedInput: updatedInput
          };
        },
        async call(n) {
          if (e.agentId) throw Error("EnterPlanMode tool cannot be used in agent contexts");
          return Xxe(e.permissions().mode, "plan"), e.setToolPermissionContext(s => sm(VCt(s), {
            type: "setMode",
            mode: "plan",
            destination: "session"
          })), {
            data: {
              message: "Entered plan mode. You should now focus on exploring the codebase and designing an implementation approach."
            }
          };
        }
      };
    },
    mapToolResultToToolResultBlockParam({
      message: message_2
    }, tool_use_id_2) {
      return {
        type: "tool_result",
        content: `${message_2}

In plan mode, you should:
1. Thoroughly explore the codebase to understand existing patterns
2. Identify similar features and architectural approaches
3. Consider multiple approaches and their trade-offs
4. Use ${cs} if you need to clarify the approach
5. Design a concrete implementation strategy
6. When ready, use ${Vg} to present your plan for approval

Remember: DO NOT write or edit any files yet. This is a read-only exploration and planning phase.`,
        tool_use_id: tool_use_id_2
      };
    }
  });
export { BJn, Gti, PKr, eit };