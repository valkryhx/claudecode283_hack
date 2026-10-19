// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Cy } from "B:/~BUN/root/chunk-9ka04m0y.js";
import { L, yu, we, dP, Ty, hye, MQ, pet, lV } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { b, c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { x } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Q2, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { qS } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { du } from "B:/~BUN/root/chunk-c44qc88s.js";
import { aEe, Lln, iht, cB, qy, hp, fB, ao, Pr } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { nT, m5, nS, tde } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { ea } from "B:/~BUN/root/chunk-53tmhe2j.js";
import { So, kjn, mj, Tfe, KPe, SN } from "B:/~BUN/root/chunk-q0t5e1bx.js";
import { Xl, Qt } from "B:/~BUN/root/chunk-hkc0g0wr.js";
import { QVn } from "B:/~BUN/root/chunk-nvdqbkrt.js";
import { O1e } from "B:/~BUN/root/chunk-hhgqcegv.js";
import { le } from "B:/~BUN/root/chunk-e7tskyjv.js";
import { _K, gae } from "B:/~BUN/root/chunk-ses0c36n.js";
import { Jwe, gN, Rs, Rie, Gen, PRs } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { wT, tU, oZ, dSe, R0n, A0n, Wit, X8, NAt, GL, Nue, Fue, dq, JAt, VL, FDn, HDn, Ext, ASe, gl, Lhr, c9, Ths, QXt, WSe, nH, p6, guo, Ap, TZ, HJt, $Jt, tpo, w_s, v_s, y6e, k_s, jlt, g_, Re, cf, Ly } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { TC, rMt, Xpe, Aho, $6, $9, IZt, Jpe } from "B:/~BUN/root/chunk-vnmfp48d.js";
import { Xo } from "B:/~BUN/root/chunk-9tkh434c.js";
import { GTt, VTt } from "B:/~BUN/root/chunk-7pf9r0sr.js";
import { A7, pxn, XNe, AR, qA, TKe, JNe } from "B:/~BUN/root/chunk-fbgs9vjp.js";
import { ACt } from "B:/~BUN/root/chunk-62ynkm2y.js";
import { IY } from "B:/~BUN/root/chunk-aatsy169.js";
import { ZAn, exn, txn, g7r, VYt } from "B:/~BUN/root/chunk-d7f7kq5q.js";
import { oxn } from "B:/~BUN/root/chunk-tabp3jhw.js";
import { RFs, go } from "B:/~BUN/root/chunk-y59h61rh.js";
import { rv as name } from "B:/~BUN/root/chunk-hdc8p5sh.js";
import { mb } from "B:/~BUN/root/chunk-97bdq2mm.js";
import { Lae } from "B:/~BUN/root/chunk-0zewma8k.js";
import { Qe } from "B:/~BUN/root/chunk-5k20pvvh.js";
import { o, M, T, u, De, $e, C } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { ye } from "B:/~BUN/root/chunk-shj1mfyk.js";
function D7o(e) {
  return O1e(e) || m5(e.source);
}
function jsr(e) {
  switch (e.type) {
    case "generic-error":
    case "manifest-validation-error":
    case "path-not-found":
      return e.plugin === void 0 ? e.path : void 0;
    default:
      return;
  }
}
var Te = {
  "path-not-found": "path not found",
  "manifest-validation-error": "manifest invalid",
  "dependency-unsatisfied": "unmet dependency",
  "dependency-version-unsatisfied": "unmet dependency"
};
function ve(e) {
  return e.flatMap(item => {
    let category = Te[item.type] ?? "load error",
      s = jsr(item);
    if (s !== void 0) {
      let l = item.type === "generic-error" ? item.manifestName : void 0,
        a = jlt(s, nS(item.source) ?? "");
      return [{
        names: l ? [l, a] : [a],
        category: category
      }];
    }
    return O1e(item) ? [{
      names: [item.plugin],
      category: category
    }] : [];
  });
}
function ce(e, n, r) {
  let s = ve(n);
  if (s.length === 0) return;
  let l = e.indexOf(":"),
    a = l > 0 ? e.slice(0, l) : void 0,
    S = a === void 0 || r.has(a) ? void 0 : s.find(item => item.names.includes(a));
  if (S !== void 0) return `The plugin "${a}" did not load in this session (${S.category}): tell the user the plugin could not be loaded here, not that the skill is not installed.`;
  let _ = L(s.map(item => item.category)).join(", ");
  return `${s.length === 1 ? `1 plugin did not load in this session (${_}); if this skill belongs to it` : `${s.length} plugins did not load in this session (${_}); if this skill belongs to one of them`}, tell the user its plugin could not be loaded here, not that the skill is not installed.`;
}
function renderToolUseMessage({
  skill: skill
}, {
  commands: commands,
  teammateAuthorOf: teammateAuthorOf
}) {
  if (!skill) return null;
  let s = skill.trim(),
    l = s.startsWith("/") ? s.substring(1) : s,
    a = commands?.find(k => k.name === l),
    S = a?.loadedFrom === "commands_DEPRECATED" ? `/${l}` : l,
    _ = teammateAuthorOf?.(a?.type === "prompt" ? a.source : void 0, l) ?? null;
  return _ ? `${S} \xB7 by ${_}` : S;
}
function Ae(e) {
  let n = new Map(),
    r = s => Boolean(s.disableModelInvocation) || X8(s);
  for (let s of e) {
    let l = n.get(s.name);
    if (l === void 0 || r(l) && !r(s) && s.type === "prompt" && !(Tfe(l) && !Tfe(s))) n.set(s.name, s);
  }
  return [...n.values()];
}
function Ce(e) {
  if (!ea().claim(`skill_reserved_namespace_rule_held_back_${e}`)) return;
  p("skill_reserved_namespace", e === "nonholder" ? "nonholder_allow_rule" : "prefix_at_namespace_boundary", {
    interactive: !we(),
    host_prompt: dP() !== void 0
  });
}
async function oe(e) {
  let n = TZ(await Ap(yu(), e.storageV5)),
    r = e.mcpCommands(),
    s = RFs(r.filter(item => item.type === "prompt" && item.loadedFrom === "mcp"), n),
    l = Jwe(),
    a = dq(n, r);
  return Nue(Ae([...a, ...l, ...s]));
}
function de(e, n) {
  let r = e.filter(Fue);
  return n ? Rie(r, lV()) : r;
}
function ge(e, n) {
  return e.type === "prompt" && e.source === "plugin" && e.name !== n && (e.aliases?.includes(n) ?? !1);
}
function ie(e, n, r) {
  let s = r.agentId === void 0,
    command = Rs(e, n);
  if (command !== void 0) {
    let S = ge(command, e) ? de(n, s) : [];
    if (S.includes(command)) {
      let candidates = S.filter(item => ge(item, e) || item.type === "prompt" && item.loadedFrom !== "syncedSkills" && item.name.endsWith(`:${e}`));
      if (candidates.length > 1) return {
        kind: "ambiguous",
        command: void 0,
        candidates: candidates
      };
    }
    return {
      kind: "exact",
      command: command
    };
  }
  if (guo(e) || n.some(item => NAt(item, e))) return {
    kind: "none",
    command: void 0
  };
  let a = PRs(e, de(n, s));
  switch (a.kind) {
    case "unique":
      return {
        kind: "suggestion",
        command: void 0,
        suggestion: a.command
      };
    case "ambiguous":
      return {
        kind: "ambiguous",
        command: void 0,
        candidates: a.candidates
      };
    case "none":
      return {
        kind: "none",
        command: void 0
      };
  }
}
function he(e, n) {
  return e.type === "prompt" && (e.context === "fork" || e.getContext !== void 0 && n.spawnedByForkedSkill === !0) && n.spawnedBySkill === GL(e);
}
async function Ee(e, n, r, s) {
  if (!r.some(item => item.type === "prompt" && item.pluginInfo?.namedFolderYield?.yielded.includes(e) === !0)) return !0;
  let a = await Ap(yu(), s, void 0, !0);
  return Rs(e, a)?.name === n.name;
}
function Me(e, n) {
  if (n.agentId !== void 0) return !1;
  let r = k_s(e);
  for (let s = n.messages.length - 1; s >= n.turnStartIndex; s--) {
    let l = n.messages[s];
    if (l.type !== "user" || l.isMeta || l.isCompactSummary || !qy(l.origin) || l.verifiedSlackHumanTurn === !0 || l.handedOff === !0 || l.textNotTyped === !0) continue;
    let content = l.message.content;
    if (typeof content === "string") {
      if (content.includes(`<${qS}>`)) continue;
    } else if (content.some(item => item.type === "tool_result")) continue;
    if (r.test(Ly(l) ?? "")) return !0;
  }
  return !1;
}
async function Pe(command_2, n, r, context, canUseTool, a, S, _, k) {
  let d = Date.now(),
    agentId = Cy(),
    isBuiltIn = nH().has(n),
    isOfficial = $9(command_2),
    isBundled = command_2.source === "bundled",
    {
      sanitizedName: A,
      skillNameHash: skillNameHash
    } = $6({
      rawName: n,
      canonicalName: command_2.name,
      isMcp: command_2.loadedFrom === "mcp",
      isBuiltIn: isBuiltIn,
      isBundled: isBundled,
      isOfficial: isOfficial
    }),
    query_depth = context.queryTracking?.depth ?? 0,
    U = query_depth > 0 ? "nested-skill" : "claude-proactive",
    j = context.agentId;
  if (command_2.pluginInfo) VL(command_2.pluginInfo.repository, "skill", JAt(command_2, command_2.pluginInfo.pluginManifest.name));
  i("tengu_skill_tool_invocation", {
    command_name: A,
    _PROTO_skill_name: n,
    ...skillNameHash,
    execution_context: b("fork"),
    invocation_trigger: c(U),
    query_depth: query_depth,
    ...(context.queryTracking && {
      query_chain_id: ye(context.queryTracking.chainId)
    }),
    ...Aho(S, S !== void 0 && p6().has(S)),
    ...(j && {
      parent_agent_id: ye(j)
    }),
    ...Xpe(command_2.source, command_2.loadedFrom, command_2.kind, command_2.createdBy),
    ...VTt(command_2.source, n),
    attribution_shown: GTt(context.session, command_2.source, n) !== null,
    skill_content_chars: command_2.contentLength,
    ...!1,
    ...(command_2.pluginInfo && IZt(command_2)),
    ...Jpe(command_2)
  }), rMt(n, command_2, U);
  let B = {
      agentId: agentId,
      parentAgentId: context.agentId,
      depth: hp(context.agentContext) + 1,
      agentType: "subagent",
      isAsync: !1,
      isBackgroundAgent: context.agentContext.agentType === "main" ? !1 : context.agentContext.isBackgroundAgent,
      ...fB(context.agentContext)
    },
    F = ZAn(command_2, context),
    P = F || context.spawnedByWorkflowRunId !== void 0,
    {
      modifiedGetAppState: O,
      contextLayers: contextLayers,
      recordInvocation: N,
      baseAgent: baseAgent,
      promptMessages: promptMessages,
      skillContent: K,
      forkReadFileState: se,
      availableTools: availableTools,
      webFetchReadmissionAllowed: webFetchReadmissionAllowed,
      frozenCommandDenies: frozenCommandDenies
    } = await HJt(command_2, r || "", context, B, {
      replaceCommandRules: P,
      freezeCommandDenies: P,
      deferInvocationRecording: P
    }),
    ee = await VYt(command_2, yu(), {
      options: {
        tools: qA(baseAgent, webFetchReadmissionAllowed ? c9(baseAgent, availableTools, le(context), {
          activeAgents: context.options.agentDefinitions.activeAgents
        }) : availableTools, F, !1, !1, 0, gN(context).mode).resolvedTools,
        spawnedBySkill: GL(command_2)
      },
      storageV5: context.storageV5
    });
  if (ee) promptMessages.push(ee);
  let effort = command_2.getEffort?.(r || "", context) ?? command_2.getDefaultEffort?.(r || "", context)?.value ?? command_2.effort,
    q = effort !== void 0 ? {
      ...baseAgent,
      effort: effort
    } : baseAgent,
    H = [];
  if (t(`SkillTool executing forked skill ${n} with agent ${q.agentType}`), F) {
    let E = await exn({
      agentId: agentId,
      agentDefinition: q,
      command: command_2,
      description: `/${So(command_2)} ${r ?? ""}`.trim(),
      prompt: K,
      promptMessages: promptMessages,
      context: context,
      canUseTool: canUseTool,
      getAppState: O,
      permissionLayers: contextLayers.length > 0 ? [...(context.permissionLayers ?? []), ...contextLayers] : context.permissionLayers,
      readFileState: se,
      availableTools: availableTools,
      webFetchReadmissionAllowed: webFetchReadmissionAllowed,
      spawnedBySkill: GL(command_2),
      recordInvocationOnSuccess: N,
      frozenCommandDenies: frozenCommandDenies
    });
    if (E) return g("skill_invoke"), {
      data: {
        success: !0,
        commandName: n,
        status: "forked",
        background: !0,
        agentId: agentId,
        result: `Running in the background as @${E.name}`
      }
    };
    N();
  }
  let agentContext = {
      ...B,
      subagentName: q.agentType,
      isBuiltIn: gl(q)
    },
    forwardSubagentText = context.options.forwardSubagentText,
    G = (message, prompt) => {
      _?.({
        type: "progress",
        toolUseID: `skill_${a.message.id}`,
        data: {
          message: message,
          type: "skill_progress",
          prompt: prompt,
          agentId: agentId,
          agentType: q.agentType,
          description: command_2.description
        }
      });
    },
    ne = txn({
      agentId: agentId,
      parentAgentId: j,
      spawnDepth: hp(agentContext),
      skillName: So(command_2),
      prompt: K,
      selectedAgent: q,
      taskRegistry: context.taskRegistry,
      toolUseId: context.toolUseId,
      callerAbortController: context.abortController
    }),
    Z = "failed";
  try {
    let E = cf(promptMessages).find(item => item.type === "user");
    if (E) G({
      ...E,
      isMeta: void 0
    }, K);
    let W = !1,
      Se = k?.mark("model");
    for await (let R of AR({
      agentDefinition: q,
      promptMessages: promptMessages,
      turnPrompt: K,
      onModelRestricted: oxn(GL(command_2), _),
      toolUseContext: {
        ...context,
        getAppState: O,
        permissionLayers: contextLayers.length > 0 ? [...(context.permissionLayers ?? []), ...contextLayers] : context.permissionLayers
      },
      canUseTool: canUseTool,
      isAsync: !1,
      querySource: "agent:custom",
      spawnedBySkill: GL(command_2),
      spawnedByForkedSkill: !0,
      model: command_2.model,
      availableTools: availableTools,
      webFetchReadmissionAllowed: webFetchReadmissionAllowed,
      override: {
        agentId: agentId,
        agentContext: agentContext,
        abortController: ne.abortController,
        shareFileHistory: !0,
        readFileState: se
      }
    })) {
      if (R.type === "api_metrics") {
        _?.(R);
        continue;
      }
      if (R.type === "set_in_progress_tool_use_ids" || R.type === "spinner_mode" || R.type === "query_model_change") continue;
      if (H.push(R), A7(R)) {
        if (XNe(context, R)) _?.(pxn(R));
        continue;
      }
      if (R.type !== "assistant" && R.type !== "user") continue;
      if (!_) continue;
      if (R.type === "user" && R.isMeta && !W) continue;
      if (R.type === "assistant") W = !0;
      for (let me of cf([R])) {
        let pe = me.message.content[0];
        if (!forwardSubagentText && pe?.type !== "tool_use" && pe?.type !== "tool_result") continue;
        G(me, "");
      }
    }
    Se?.();
    let ue = TKe(g_(H));
    if (!ue) {
      if (JNe(agentId, context), context.spawnedByWorkflowRunId !== void 0) N();
    }
    let result = WSe(H) + $Jt(H, "Skill execution completed");
    H.length = 0;
    let be = Date.now() - d;
    return t(`SkillTool forked skill ${n} completed in ${be}ms`), g("skill_invoke"), Z = ue ? "failed" : "completed", {
      data: {
        success: !0,
        commandName: n,
        status: "forked",
        agentId: agentId,
        result: result
      }
    };
  } finally {
    ne.remove(Z), pet(agentId);
  }
}
var xe = f(() => u({
    skill: o().describe("The name of a skill from the available-skills list. Do not guess names."),
    args: o().optional().describe("Optional arguments for the skill")
  })),
  Oe = f(() => {
    let e = u({
        success: M().describe("Whether the skill is valid"),
        commandName: o().describe("The name of the skill"),
        allowedTools: T(o()).optional().describe("Tools allowed by this skill"),
        model: o().optional().describe("Resolved model the skill turn runs on when a frontmatter model override took effect; omitted otherwise"),
        status: C("inline").optional().describe("Execution status"),
        readOnly: M().optional().describe("True when the skill instructions were loaded read-only (nothing was executed)")
      }),
      n = u({
        success: M().describe("Whether the skill completed successfully"),
        commandName: o().describe("The name of the skill"),
        status: C("forked").describe("Execution status"),
        agentId: o().describe("The ID of the sub-agent that executed the skill"),
        result: o().describe("The result from the forked skill execution"),
        background: M().optional().describe("True when the sub-agent was launched in the background: `result` describes the launch, and the skill outcome arrives later as a task notification.")
      });
    return $e([e, n]);
  });
function Ne(e) {
  return {
    storageV5: e.storageV5,
    mcpCommands: () => e.getAppState().mcp.commands
  };
}
async function Ue({
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
  if (toolUseContext.agentId !== void 0 && tU(toolUseContext.agentId)) throw m("subagent_launch", "skill_fork_spawner_stop_pending"), Error("This agent has been stopped and its stop is still completing; it cannot launch skills.");
  let _ = skill_2.trim(),
    k = _.startsWith("/") ? _.substring(1) : _,
    activeSkill = toolUseContext.options.activeSkill,
    y = activeSkill ?? toolUseContext.options.spawnedBySkill;
  toolUseContext.options.activeSkill = k;
  let w = Lae(toolUseContext),
    V = !1;
  try {
    let I = await oe(Ne(toolUseContext)),
      A = ie(k, I, toolUseContext);
    if (A.kind === "ambiguous") {
      let E = A.candidates.every(item => Q2(item.name)) ? `: ${A.candidates.map(item => item.name).join(", ")}` : "";
      throw new x(`Skill ${k} now matches several skills${E} \u2014 invoke one by its full name.`, "Skill tool: bare name ambiguous at dispatch");
    }
    let command_3 = A.command;
    if (command_3) toolUseContext.options.activeSkill = GL(command_3);
    if (!w) {
      if (QXt(toolUseContext.session, command_3?.name ?? k, toolUseContext.storageV5, k), command_3?.type === "prompt" && command_3.pluginInfo) TC(command_3.pluginInfo.repository);
    }
    if (command_3?.type === "prompt" && kjn(command_3, args || "", toolUseContext) === "fork" && !w) try {
      return await Pe(command_3, k, args, toolUseContext, canUseTool_2, parentMessage, y, onProgress, timing);
    } finally {
      toolUseContext.options.activeSkill = activeSkill;
    }
    let D = `${toolUseContext.agentId ?? ""}:${command_3?.name ?? k}`,
      U = MQ().get(D),
      {
        processPromptSlashCommand: processPromptSlashCommand
      } = await import("B:/~BUN/root/chunk-yjds479p.js"),
      B = toolUseContext.toolUseId ?? je(parentMessage, go),
      F = B !== void 0 && Lhr(parentMessage.handedOffLive)?.has(B) === !0,
      P = await processPromptSlashCommand(k, args || "", I, toolUseContext, w, F);
    if (!P.shouldQuery) throw m("skill_invoke", "skill_invoke_process_failed"), Error("Command processing failed");
    let allowedTools = w ? [] : P.allowedTools || [],
      skillModel = w ? void 0 : aEe(P.model),
      effort_2 = w ? void 0 : P.effort,
      isBuiltIn_2 = nH().has(k),
      isBundled_2 = command_3?.type === "prompt" && command_3.source === "bundled",
      isOfficial_2 = command_3?.type === "prompt" && $9(command_3),
      {
        sanitizedName: se,
        skillNameHash: skillNameHash_2
      } = $6({
        rawName: k,
        canonicalName: command_3?.name ?? k,
        isMcp: command_3?.loadedFrom === "mcp",
        isBuiltIn: isBuiltIn_2,
        isBundled: isBundled_2,
        isOfficial: isOfficial_2
      }),
      query_depth_2 = toolUseContext.queryTracking?.depth ?? 0,
      re = query_depth_2 > 0 ? "nested-skill" : "claude-proactive",
      agentId_2 = toolUseContext.agentId,
      J = command_3?.type === "prompt" ? command_3.source : void 0,
      skill_body_chars = 0;
    for (let E of P.messages) skill_body_chars += HDn(E)?.length ?? 0;
    if (command_3?.type === "prompt" && command_3.pluginInfo && !w) VL(command_3.pluginInfo.repository, "skill", JAt(command_3, command_3.pluginInfo.pluginManifest.name));
    i("tengu_skill_tool_invocation", {
      command_name: se,
      _PROTO_skill_name: k,
      ...skillNameHash_2,
      execution_context: w ? b("read-only") : b("inline"),
      invocation_trigger: c(re),
      query_depth: query_depth_2,
      ...(toolUseContext.queryTracking && {
        query_chain_id: ye(toolUseContext.queryTracking.chainId)
      }),
      ...Aho(y, y !== void 0 && p6().has(y)),
      ...(agentId_2 && {
        parent_agent_id: ye(agentId_2)
      }),
      ...Xpe(J, command_3?.loadedFrom, command_3?.kind, command_3?.type === "prompt" ? command_3.createdBy : void 0),
      ...VTt(J, k),
      attribution_shown: GTt(toolUseContext.session, J, k) !== null,
      ...(command_3?.type === "prompt" && {
        skill_content_chars: command_3.contentLength
      }),
      skill_body_chars: skill_body_chars,
      ...!1,
      ...(command_3?.type === "prompt" && command_3.pluginInfo && IZt(command_3)),
      ...(command_3?.type === "prompt" && Jpe(command_3))
    }), rMt(k, command_3, re);
    let messages = P.messages.filter(item => {
        if (item.type === "progress") return !1;
        if (item.type === "user" && "message" in item) {
          let content_2 = item.message.content;
          if (typeof content_2 === "string" && content_2.includes(`<${qS}>`)) return !1;
        }
        return !0;
      }),
      te = w ? messages.map(HDn).find(item => item !== null) ?? void 0 : void 0,
      newMessages = ze(Le({
        messages: messages,
        contextMessages: toolUseContext.messages,
        commandName: k,
        args: args,
        priorContent: U?.content ?? te,
        renderedContent: MQ().get(D)?.content ?? te
      }), B);
    t(`SkillTool returning ${newMessages.length} newMessages for skill ${k}`), g("skill_invoke");
    let contextLayers_2 = [];
    if (allowedTools.length > 0) contextLayers_2.push({
      kind: "allowed_tools",
      allowedTools: allowedTools
    });
    let ne = toolUseContext.getAppState(),
      Z = skillModel && iht({
        skillModel: skillModel,
        mode: ne.toolPermissionContext.mode,
        fastMode: ne.fastMode ?? !1
      }) ? Lln(skillModel, toolUseContext.options.mainLoopModel) : void 0;
    if (Z) contextLayers_2.push({
      kind: "model",
      mainLoopModel: Z
    });
    if (effort_2 !== void 0) contextLayers_2.push({
      kind: "effort",
      effort: effort_2
    });
    return V = !0, {
      data: {
        success: !0,
        commandName: k,
        allowedTools: allowedTools.length > 0 ? allowedTools : void 0,
        model: Z,
        ...(w && {
          readOnly: !0
        })
      },
      newMessages: newMessages,
      ...(contextLayers_2.length > 0 && {
        contextLayers: contextLayers_2
      })
    };
  } finally {
    if (w || !V) toolUseContext.options.activeSkill = activeSkill;
  }
}
var Prt = Qt({
    name: go,
    searchHint: "invoke a slash-command skill",
    isEnabled() {
      return !Ty();
    },
    backgrounding: "never",
    maxResultSizeChars: 1e5,
    get inputSchema() {
      return xe();
    },
    get outputSchema() {
      return Oe();
    },
    description: async ({
      skill: skill_3
    }) => `Execute skill: ${skill_3}`,
    prompt: async ({
      model: model,
      leanRewrite: leanRewrite
    }) => Ths({
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
        }) {
          let s = skill_5.trim();
          if (!s) return m("skill_invoke", "skill_invoke_empty_name"), {
            result: !1,
            message: `Invalid skill format: ${skill_5}`,
            errorCode: 1
          };
          let l = s.startsWith("/");
          if (l) i("tengu_skill_tool_slash_prefix", {});
          let rawName = l ? s.substring(1) : s,
            S,
            _ = !1,
            k = await oe(n),
            d = ie(rawName, k, n),
            command_4 = d.command,
            commandName = nT(rawName);
          if (oZ(n.session) && (!command_4 || Wit(command_4)) && (command_4 !== void 0 || A0n(commandName))) {
            let A = await dSe(commandName);
            if (!A.ok) S = A.reason, _ = A.withheld === !0;else k = await oe(n), d = ie(rawName, k, n), command_4 = d.command;
          }
          if (command_4?.type === "prompt" && command_4.loadDefinition !== void 0) await command_4.loadDefinition(), k = await oe(n), d = ie(rawName, k, n), command_4 = d.command;
          if (S !== void 0 && (!command_4 || Wit(command_4))) return m("skill_invoke", _ ? "skill_invoke_withheld" : "skill_invoke_not_materialized"), {
            result: !1,
            message: _ ? `${R0n(rawName)} Proceed without it.` : `Skill ${rawName} could not be downloaded (${S}). Proceed without it.`,
            errorCode: 10
          };
          if (command_4 && ASe(command_4)) return m("skill_invoke", SN(command_4) ? "skill_invoke_host_catalog_withheld" : "skill_invoke_sync_vetoed"), {
            result: !1,
            message: `Unknown skill: ${rawName}`,
            errorCode: 13
          };
          if (!command_4) {
            let A = g7r(k, rawName, n.spawnedBySkill);
            if (A.length > 0) {
              let v = d.kind === "ambiguous" ? d.candidates.filter(item => !NAt(item, rawName) && Q2(item.name)) : [];
              if (d.kind === "ambiguous") i("tengu_skill_tool_suffix_match", {
                candidate_count: d.candidates.length
              });
              return m("skill_invoke", "skill_invoke_not_found"), {
                result: !1,
                message: v.length > 0 ? `Unknown skill: ${rawName}. Several skills match that name: ${[...v, ...A].map(item => item.name).join(", ")} \u2014 invoke one by its full name; the directory-scoped variants apply to the files under their directory.` : `Unknown skill: ${rawName}. Directory-scoped variants exist: ${A.map(item => item.name).join(", ")} \u2014 invoke the variant whose directory contains the files you are working on.`,
                errorCode: 2
              };
            }
            if (d.kind === "suggestion") {
              if (i("tengu_skill_tool_suffix_match", {
                candidate_count: 1
              }), Q2(d.suggestion.name)) return m("skill_invoke", "skill_invoke_not_found"), {
                result: !1,
                message: `Unknown skill: ${rawName}. Did you mean ${d.suggestion.name}? Invoke it by that full name.`,
                errorCode: 2
              };
            }
            if (d.kind === "ambiguous") {
              i("tengu_skill_tool_suffix_match", {
                candidate_count: d.candidates.length
              });
              let v = d.candidates.filter(item => !NAt(item, rawName)),
                N = v.length === 1 ? v[0] : void 0;
              if (v.length > 0 && v.every(item => Q2(item.name))) return m("skill_invoke", "skill_invoke_not_found"), {
                result: !1,
                message: N !== void 0 ? `Unknown skill: ${rawName}. Did you mean ${N.name}? Invoke it by that full name.` : `Unknown skill: ${rawName}. Several skills match that name: ${v.map(item => item.name).join(", ")} \u2014 invoke one by its full name.`,
                errorCode: 2
              };
            }
            let h = tde(rawName, k.map(item => ({
                name: So(item),
                aliases: item.aliases
              })), {
                maxEditDistance: 2
              }),
              isMainSession = n.agentId === void 0,
              U = h === void 0 && commandName !== rawName ? de(k, isMainSession).find(item => item.name === commandName && Gen(item)) : void 0,
              j = U !== void 0 && Q2(commandName) && !mj(commandName) && !he(U, n) && y6e(U, {
                commandName: commandName,
                userTypedThisTurn: !1,
                isMainSession: isMainSession,
                permissionContext: n.permissions()
              }) === null;
            if (j) i("tengu_skill_tool_unprefixed_match", {});
            let B = h ?? (j ? commandName : void 0);
            m("skill_invoke", "skill_invoke_not_found");
            let F = await QVn()?.catch(() => {
                return;
              }),
              P = F && ce(rawName, F.errors, new Set(F.enabled.map(item => item.name))),
              O = B ? `Unknown skill: ${rawName}. Did you mean ${B}?` : `Unknown skill: ${rawName}`;
            return {
              result: !1,
              message: P ? `${O}${B ? "" : "."} ${P}` : O,
              errorCode: 2
            };
          }
          if (he(command_4, n)) return m("skill_invoke", "skill_invoke_fork_recursion"), i("tengu_skill_tool_fork_recursion_blocked", {}), {
            result: !1,
            message: `Skill ${rawName} is already executing in this forked context \u2014 you are the subagent running it. Execute the instructions in the skill body directly instead of re-invoking the ${go} tool.`,
            errorCode: 9
          };
          let V = await Ee(rawName, command_4, k, n.storageV5),
            I = y6e(command_4, {
              commandName: V ? rawName : command_4.name,
              userTypedThisTurn: !Lae(n) && Me(rawName, {
                agentId: n.agentId,
                messages: n.messages(),
                turnStartIndex: n.turnStartIndex
              }) && V,
              isMainSession: n.agentId === void 0,
              permissionContext: void 0
            });
          if (I !== null) {
            switch (I.reason) {
              case "disable_model_invocation":
                {
                  let {
                    sanitizedName: A,
                    skillNameHash: skillNameHash_3
                  } = $6({
                    rawName: rawName,
                    canonicalName: command_4.name,
                    isMcp: command_4.loadedFrom === "mcp",
                    isBuiltIn: nH().has(rawName),
                    isBundled: command_4.type === "prompt" && command_4.source === "bundled",
                    isOfficial: command_4.type === "prompt" && $9(command_4)
                  });
                  m("skill_invoke", "skill_invoke_model_disabled", {
                    command_name: A,
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
                m("skill_invoke", I.hiddenBehindPlugin ? "skill_invoke_hidden_behind_plugin" : I.killSwitchOnly ? "skill_invoke_bundled_skills_disabled" : "skill_invoke_override_disabled");
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
              message: I.message,
              errorCode: I.errorCode
            };
          }
          return {
            result: !0
          };
        },
        async checkPermissions({
          skill: skill_6,
          args: args_2
        }) {
          let l = skill_6.trim(),
            ruleContent = l.startsWith("/") ? l.substring(1) : l,
            S = n.permissions(),
            _ = await oe(n),
            k = ie(ruleContent, _, n),
            command_5 = k.command,
            y = k.kind === "ambiguous" ? k.candidates : [command_5],
            w = gae(S, Prt, "deny");
          for (let [F, rule] of w.entries()) if (y.some(item => tpo(F, ruleContent, item))) return {
            behavior: "deny",
            message: "Skill execution blocked by permission rules",
            decisionReason: {
              type: "rule",
              rule: rule
            }
          };
          let V = gae(S, Prt, "allow"),
            I;
          for (let [rule_3, rule_2] of V.entries()) {
            let O = w_s(rule_3, ruleContent, command_5);
            if (O === "allow") return {
              behavior: "allow",
              updatedInput: {
                skill: skill_6,
                args: args_2
              },
              decisionReason: {
                type: "rule",
                rule: rule_2
              }
            };
            if (O === "held-back-nonholder") I = {
              rule: rule_3,
              kind: "nonholder"
            };else if (O === "held-back-boundary") I ??= {
              rule: rule_3,
              kind: "boundary"
            };
          }
          if (command_5?.type === "prompt" && (Be(command_5) || Lae(n))) return {
            behavior: "allow",
            updatedInput: {
              skill: skill_6,
              args: args_2
            },
            decisionReason: void 0
          };
          let pluginName = command_5?.type === "prompt" && command_5.source === "plugin" ? command_5.pluginInfo?.pluginManifest.name : void 0,
            h = KPe() && mj(ruleContent) && !(command_5 !== void 0 && Tfe(command_5)),
            D = I === void 0 ? void 0 : h ? "nonholder" : I.kind;
          if (D !== void 0 && S.mode !== "bypassPermissions" && _K(S, Prt) === null) Ce(D);
          let reason = I === void 0 || D === void 0 ? void 0 : v_s(I.rule, command_5?.name ?? ruleContent, D === "nonholder" ? {
              kind: "nonholder",
              pluginName: pluginName
            } : {
              kind: "boundary"
            }),
            decisionReason = reason === void 0 ? void 0 : {
              type: "other",
              reason: reason
            };
          if (h) return {
            behavior: "ask",
            message: `Execute skill: ${ruleContent}${reason ? ` \u2014 ${reason}` : ""}`,
            decisionReason: decisionReason,
            suppressAlwaysAllowRule: !0,
            updatedInput: {
              skill: skill_6,
              args: args_2
            },
            metadata: command_5 ? {
              command: command_5
            } : void 0
          };
          let suggestions = [{
            type: "addRules",
            rules: [{
              toolName: go,
              ruleContent: ruleContent
            }],
            behavior: "allow",
            destination: "localSettings"
          }, {
            type: "addRules",
            rules: [{
              toolName: go,
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
            metadata: command_5 ? {
              command: command_5
            } : void 0
          };
        },
        call(input, s) {
          if (!s.runEngine) return Promise.reject(Error("Skill: invoking needs the executor (call.runEngine)"));
          return s.runEngine(Ue, {
            input: input,
            parentMessage: s.parentMessage,
            onProgress: s.onProgress,
            timing: s.timing
          });
        }
      };
    },
    mapToolResultToToolResultBlockParam(e, tool_use_id) {
      if ("status" in e && e.status === "forked") return {
        type: "tool_result",
        tool_use_id: tool_use_id,
        content: e.background ? `Skill "${e.commandName}" launched (forked execution, running in the background).

${e.result}` : `Skill "${e.commandName}" completed (forked execution).

Result:
${e.result}`
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
  Fe = new Set(["type", "progressMessage", "contentLength", "contentHash", "getLoadedSkillMd", "skillFile", "argNames", "model", "effort", "source", "pluginInfo", "serverAttribution", "disableNonInteractive", "skillRoot", "skillDir", "context", "agent", "background", "getPromptForCommand", "getEffort", "getDefaultEffort", "onUserTypedArgs", "getContext", "formatForegroundForkResult", "declaredFields", "pluginSource", "metadata", "createdBy", "fallback", "unqualifiedName", "denyMatchNames", "bareNameReserved", "reservedLabels", "fromHostCatalog", "shedAliases", "name", "description", "menuDescription", "hasUserSpecifiedDescription", "isEnabled", "isHidden", "aliases", "subcommands", "subcommandsBareOnly", "isMcp", "mcpInfo", "argumentHint", "whenToUse", "paths", "version", "disableModelInvocation", "disableBridgeInvocation", "userInvocable", "loadedFrom", "immediate", "userFacingName", "getArgumentCompletions"]);
function Be(e) {
  for (let n of Object.keys(e)) {
    if (Fe.has(n)) continue;
    let r = e[n];
    if (r === void 0 || r === null) continue;
    if (Array.isArray(r) && r.length === 0) continue;
    if (typeof r === "object" && !Array.isArray(r) && Object.keys(r).length === 0) continue;
    return !1;
  }
  return !0;
}
function Le({
  messages: messages_2,
  contextMessages: contextMessages,
  commandName: commandName_2,
  args: args_3,
  priorContent: priorContent,
  renderedContent: renderedContent
}) {
  if (!priorContent || !renderedContent) return messages_2;
  if (messages_2.some(item => item.type === "user" && item.promptShellHandOff !== void 0)) return messages_2;
  let S = Ext(contextMessages, priorContent);
  if (!S) return messages_2;
  if (priorContent !== renderedContent) {
    let content_3 = priorContent.endsWith(FDn) ? `(Re-invocation of /${commandName_2} \u2014 the previously loaded copy was truncated by compaction; the full instructions follow.)` : `(Re-invocation of /${commandName_2} \u2014 the skill instructions were previously loaded; the arguments or dynamic output below are new.)`;
    return [Re({
      content: content_3,
      isMeta: !0
    }), ...messages_2];
  }
  let _ = !1,
    k = messages_2.map(item => {
      if (HDn(item) !== renderedContent) return item;
      return _ = !0, Re({
        content: S === "attachment" ? `Skill /${commandName_2} was loaded earlier (see the invoked-skills reminder above); this is a NEW invocation \u2014 follow those instructions now, including any setup steps.${args_3 ? ` Arguments: ${args_3}` : ""}` : `Skill /${commandName_2} is already loaded above; instructions unchanged.${args_3 ? ` Arguments: ${args_3}` : ""}`,
        isMeta: !0
      });
    });
  if (_) t(`SkillTool eliding byte-identical re-invocation of skill ${commandName_2}`);
  return k;
}
function ze(e, sourceToolUseID) {
  if (!sourceToolUseID) return e;
  return e.map(item => {
    if (item.type === "user") return {
      ...item,
      sourceToolUseID: sourceToolUseID
    };
    return item;
  });
}
function je(e, n) {
  let r = e.message.content.find(item => item.type === "tool_use" && item.name === n);
  return r && r.type === "tool_use" ? r.id : void 0;
}
function We() {
  return cB() === "default" ? " (use the Agent tool instead)" : "";
}
function qe() {
  return `## What Happens in Plan Mode

In plan mode, you'll:
1. Thoroughly explore the codebase using ${wT() && Xl() ? `\`find\`/${ao}, \`grep\`/${Pr}, and ${Qe}` : `${ao}, ${Pr}, and ${Qe}`}
2. Understand existing patterns and architecture
3. Design an implementation approach
4. Present your plan to the user for approval
5. Use ${Xo} if you need to clarify approaches
6. Exit plan mode with ${mb} when ready to implement

`;
}
function Ve() {
  let e = We();
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
   - If you would use ${Xo} to clarify the approach, use EnterPlanMode instead
   - Plan mode lets you explore first, then present options with context

## When NOT to Use This Tool

Only skip EnterPlanMode for simple tasks:
- Single-line or few-line fixes (typos, obvious bugs, small tweaks)
- Adding a single function with clear requirements
- Tasks where the user has given very specific, detailed instructions
- Pure research/exploration tasks${e}

${qe()}## Examples

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
function ke() {
  return Ve();
}
var He = f(() => De({})),
  Ge = f(() => u({
    message: o().describe("Confirmation that plan mode was entered")
  })),
  PEn = Qt({
    name: name,
    searchHint: "switch to plan mode to design an approach before coding",
    backgrounding: "never",
    maxResultSizeChars: 1e5,
    async description() {
      return "Requests permission to enter plan mode for complex tasks requiring exploration and design";
    },
    async prompt() {
      return ke();
    },
    get inputSchema() {
      return He();
    },
    get outputSchema() {
      return Ge();
    },
    userFacingName() {
      return "";
    },
    shouldDefer: !0,
    isEnabled() {
      return IY.isEnabled();
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
        async call(n) {
          if (e.agentId) throw Error("EnterPlanMode tool cannot be used in agent contexts");
          return hye(e.permissions().mode, "plan"), e.setToolPermissionContext(r => du(ACt(r), {
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
4. Use ${Xo} if you need to clarify the approach
5. Design a concrete implementation strategy
6. When ready, use ${mb} to present your plan for approval

Remember: DO NOT write or edit any files yet. This is a read-only exploration and planning phase.`,
        tool_use_id: tool_use_id_2
      };
    }
  });
export { PEn, D7o, jsr, Prt };