// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { y, c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { Tj, We, ul, Ke, st, te } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Vm } from "B:/~BUN/root/chunk-bvn0mpsk.js";
import { Y, kr, aA, DC, Gg, KY, DBe, Jmt } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { eu } from "B:/~BUN/root/chunk-17wqwt36.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { ce, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { mm, Wg, vd, up, d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { dK, _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { Y6, WYe } from "B:/~BUN/root/chunk-bt3h0syz.js";
import { Mm, tn, IJ, wY } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { Op } from "B:/~BUN/root/chunk-1f9marcm.js";
import { Ygn, Lt } from "B:/~BUN/root/chunk-339q6g5w.js";
import { gce, $u, e_, co, Sd, pD, vt, Hc, fi, x } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { tNo, nNo, kye } from "B:/~BUN/root/chunk-yehxgs7w.js";
import { qt } from "B:/~BUN/root/chunk-9xz983aj.js";
import { lf, Wc } from "B:/~BUN/root/chunk-1rjcv085.js";
import { Zs, _V, gae, S9, kLe, Nr, qKe, Xrn } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { Po } from "B:/~BUN/root/chunk-6cq25d8x.js";
import { bd, a1 } from "B:/~BUN/root/chunk-mrt797ke.js";
import { w6, Xt, kf, Iw } from "B:/~BUN/root/chunk-3hjtxzqy.js";
import { Rk } from "B:/~BUN/root/chunk-zy5rwsjc.js";
import { Cdn } from "B:/~BUN/root/chunk-gbtzpa3e.js";
import { ule } from "B:/~BUN/root/chunk-2pww2v3x.js";
import { mHe } from "B:/~BUN/root/chunk-d36ctpgs.js";
import { Nk } from "B:/~BUN/root/chunk-t1afcev5.js";
import { me, um, Gf } from "B:/~BUN/root/chunk-fk6j5yf3.js";
import { Ci, gte, $E } from "B:/~BUN/root/chunk-hqrtayw5.js";
import { lk, Vtt, q7, _W, MG, cCt, Y7, v8, Gco, dk, PO, ynt, DP, gve, kQt, i_r, Gnt, LQt, LWo, NWo, Bp, t7t, zRt, KG, YG, HA, yie, HP, pLn, _ie, QRt, kie, GLn, ibr, Trt, TAt, CAt, xM, ty, eme, pxt, Ce, $W, OT, Uie, Y8, bf, eb, $t, tg, Ca, FZt, BO, lB, zie, BZ, on } from "B:/~BUN/root/chunk-3jyp964r.js";
import { Co, Qc, Gin, FNe } from "B:/~BUN/root/chunk-yzpw1mdr.js";
import { b9 } from "B:/~BUN/root/chunk-90zbw58x.js";
import { mIt, Zo } from "B:/~BUN/root/chunk-88mdabet.js";
import { Ql } from "B:/~BUN/root/chunk-1xb1enjd.js";
import { iZe } from "B:/~BUN/root/chunk-4005qhef.js";
import { WSe } from "B:/~BUN/root/chunk-90dp6ktw.js";
import { rk, ST, xOe, JSe } from "B:/~BUN/root/chunk-fwqmqt2f.js";
import { JCn, QCn, ZCn, Moe, w3t, hto, yto } from "B:/~BUN/root/chunk-r9a93egy.js";
import { v3t, mE, fpe } from "B:/~BUN/root/chunk-3a6ntswp.js";
import { k3t, E3t, T3t, Jwt } from "B:/~BUN/root/chunk-6x8k31zb.js";
import { Z3t } from "B:/~BUN/root/chunk-y96pqvt2.js";
import { Oge } from "B:/~BUN/root/chunk-aqngsaqg.js";
import { JL } from "B:/~BUN/root/chunk-gj7av6e0.js";
import { UNe } from "B:/~BUN/root/chunk-h7t9e2fk.js";
import { VB } from "B:/~BUN/root/chunk-zav2qxje.js";
import { GNe } from "B:/~BUN/root/chunk-z9xwt6re.js";
import { hmt } from "B:/~BUN/root/chunk-zhkdb3ds.js";
import { randomUUID as ae } from "crypto";
function xe(e, s, o, l, skillRoot) {
  let f = 0;
  for (let g of Mm) {
    let k = o[g];
    if (!k) continue;
    for (let b of k) for (let D of b.hooks) {
      let onHookSuccess = D.once ? () => {
        t(`Removing one-shot hook for event ${g} in skill '${l}'`), e.remove(s, g, D);
      } : void 0;
      e.add(s, g, b.matcher || "", D, {
        onHookSuccess: onHookSuccess,
        skillRoot: skillRoot
      }), f++;
    }
  }
  if (f > 0) t(`Registered ${f} hooks from skill '${l}'`);
}
function Pe({
  commandName: commandName,
  agentId: agentId,
  isNonInteractiveSession: isNonInteractiveSession,
  setAppState: setAppState,
  credentials: credentials
}) {
  if (agentId !== void 0 || isNonInteractiveSession) return;
  if (vt()) return;
  yto(commandName);
  let f = w3t(credentials);
  if (!QCn(commandName)) return;
  if (ZCn(commandName)) {
    je(commandName, setAppState, credentials);
    return;
  }
  f.then(g => {
    if (ZCn(commandName)) {
      je(commandName, setAppState, credentials);
      return;
    }
    if (!g) return;
    let command = JCn();
    if (!command) return;
    setAppState(b => ({
      ...b,
      fotwClaim: {
        phase: "needs_payment_setup",
        command: command,
        amountMinorUnits: g.amountMinorUnits,
        currency: g.currency
      }
    }));
  });
}
function je(e, s, o) {
  let command_2 = JCn(),
    r = Moe();
  if (!command_2 || !r) return;
  s(f => ({
    ...f,
    fotwClaim: {
      phase: "pending",
      command: command_2,
      amountMinorUnits: r.amountMinorUnits,
      currency: r.currency
    }
  })), hto(e, o).catch(() => ({
    outcome: "failed"
  })).then(f => {
    s(g => {
      let fotwClaim = g.fotwClaim;
      if (!fotwClaim || fotwClaim.command !== command_2) return g;
      if (f.outcome === "granted") return {
        ...g,
        fotwClaim: {
          phase: "granted",
          command: fotwClaim.command,
          amountMinorUnits: f.amountMinorUnits,
          currency: f.currency
        }
      };
      return {
        ...g,
        fotwClaim: {
          ...fotwClaim,
          phase: "failed"
        }
      };
    });
  });
}
var it = {
  teleport: ({
    remoteSessionId: remoteSessionId
  }) => `/teleport pulls a cloud session into a terminal on your own machine, so it can't run from inside this session. To continue this session locally, run claude --teleport ${remoteSessionId} from a checkout of this repository. On claude.ai you can also choose Open in \u2192 Terminal from the session menu, which copies that command.`,
  session: ({
    remoteSessionId: remoteSessionId_2
  }) => `This session is already running as a cloud session: ${Ge(remoteSessionId_2)}. To continue it in your terminal, run claude --teleport ${remoteSessionId_2} from a checkout of this repository.`,
  "remote-control": ({
    remoteSessionId: remoteSessionId_3
  }) => `Remote Control connects a terminal session to claude.ai, and this session is already running as a cloud session: ${Ge(remoteSessionId_3)}.`
};
function Ge(e) {
  return Ql(e, a.SESSION_INGRESS_URL);
}
function at() {
  let CLAUDE_CODE_REMOTE_SESSION_ID = a.CLAUDE_CODE_REMOTE_SESSION_ID;
  if (!CLAUDE_CODE_REMOTE_SESSION_ID) return;
  try {
    return Wc(lf(CLAUDE_CODE_REMOTE_SESSION_ID, "CLAUDE_CODE_REMOTE_SESSION_ID"));
  } catch {
    return;
  }
}
function Re(e, s) {
  let remoteSessionId_4 = at();
  if (!remoteSessionId_4) return;
  let l = Zs(e, s);
  if (!l) return;
  let r = it[l.name];
  return r ? r({
    remoteSessionId: remoteSessionId_4
  }) : void 0;
}
var lt = "tengu_polished_quill_killswitch",
  dt = 40;
function Ve(e) {
  if (!e) return !1;
  return !x(lt, !1);
}
function ze({
  commandName: commandName_2,
  suggestion: suggestion,
  availableCommandNames: availableCommandNames,
  availableCommandCount: availableCommandCount
}) {
  return {
    type: "unknown_command_fallback",
    commandName: GNe(commandName_2) && !WYe(commandName_2) ? commandName_2 : void 0,
    suggestion: suggestion !== void 0 && GNe(suggestion) ? suggestion : void 0,
    availableCommandNames: availableCommandNames.filter(item => GNe(item)).slice(0, dt),
    availableCommandCount: availableCommandCount
  };
}
var mt = new Set(["clear", "resume", "help", "exit", "feedback"]);
function Ywt(e, s) {
  if (!s) return !1;
  return !(e && e.type !== "prompt" && mt.has(e.name));
}
async function qe(e, s, o) {
  let messages = [],
    requestQuery = !1,
    f = e.agentId ? void 0 : e.getAppState().activeGoal;
  try {
    let g = o.executeStopHooks(me(e).mode, e.abortController.signal, void 0, !1, e.agentId, e, [...e.messages, ...s], void 0, "fork_dispatch"),
      k = [];
    for await (let b of g) {
      if (b.timedOut && f && b.hook?.prompt === f.condition) p("goal_met", "evaluator_timeout");
      if (b.message?.type === "attachment") {
        let attachment = b.message.attachment;
        if ("hookEvent" in attachment && attachment.hookEvent === "Stop") {
          if (attachment.type === "hook_non_blocking_error") k.push(attachment.stderr || `Exit code ${attachment.exitCode}`);else if (attachment.type === "hook_error_during_execution") k.push(attachment.content);else if (attachment.type === "hook_system_message") messages.push(b.message);
        }
      }
      if (b.blockingError) messages.push(Ce({
        content: o.getStopHookMessage(b.blockingError),
        isMeta: !0
      })), requestQuery = !0;
      if (b.additionalContexts && b.additionalContexts.length > 0) messages.push(on({
        type: "hook_additional_context",
        content: b.additionalContexts,
        hookName: "Stop",
        toolUseID: `hook-${ae()}`,
        hookEvent: "Stop"
      })), requestQuery = !0;
    }
    if (k.length > 0) messages.push($t(`Stop hook error: ${k.join("; ")}`, "warning"));
  } catch (error) {
    t(`Forked command Stop hooks failed: ${String(error)}`, {
      level: "error"
    });
  }
  if (!requestQuery) try {
    let g = o.executeStopHooks(me(e).mode, e.abortController.signal, void 0, !1, e.agentId, e, [], void 0, "turn_end_reactions");
    for await (let k of g);
  } catch (error) {
    t(`Forked command turn-end reactions failed: ${String(error)}`, {
      level: "error"
    });
  }
  return {
    messages: messages,
    requestQuery: requestQuery
  };
}
async function ut(command_3, s, context, l, r, canUseTool, g, k = [], b, uuid, I, origin, paths) {
  let O = Vm(),
    {
      sanitizedName: Q,
      skillNameHash: skillNameHash
    } = _W({
      rawName: command_3.name,
      canonicalName: command_3.name,
      isMcp: command_3.loadedFrom === "mcp",
      isBuiltIn: BO().has(command_3.name),
      isBundled: command_3.source === "bundled",
      isOfficial: MG(command_3)
    });
  i("tengu_slash_command_forked", {
    command_name: Q,
    ...skillNameHash,
    _PROTO_skill_name: command_3.name,
    invocation_trigger: y("user-slash"),
    ...q7(command_3.source, command_3.loadedFrom, command_3.kind, command_3.createdBy),
    ...iZe(command_3.source, command_3.name),
    ...Y7(command_3)
  });
  let deferInvocationRecording = k3t(command_3, b),
    ge = deferInvocationRecording ? {
      agentId: O,
      parentAgentId: context.agentId,
      depth: Sd(context.agentContext) + 1,
      agentType: "subagent",
      isAsync: !1,
      isBackgroundAgent: context.agentContext && "isBackgroundAgent" in context.agentContext ? context.agentContext.isBackgroundAgent : void 0,
      ...pD(context.agentContext)
    } : void 0,
    {
      skillContent: n,
      modifiedGetAppState: oe,
      contextLayers: contextLayers,
      recordInvocation: j,
      baseAgent: baseAgent,
      promptMessages: promptMessages,
      forkReadFileState: C,
      availableTools: availableTools,
      webFetchReadmissionAllowed: webFetchReadmissionAllowed,
      frozenCommandDenies: frozenCommandDenies
    } = await TAt(command_3, s, context, ge, {
      forkAgentId: O,
      extractAttachments: b ? void 0 : BZ,
      replaceCommandRules: !0,
      replaceDenyRules: !b,
      deferInvocationRecording: deferInvocationRecording
    }),
    permissionLayers = contextLayers.length > 0 ? [...(context.permissionLayers ?? []), ...contextLayers] : context.permissionLayers;
  if (r.length > 0 || l.length > 0) promptMessages.push(Ce({
    content: [...r, ...l],
    isMeta: !0
  }));
  if (paths && paths.length > 0) promptMessages.push(on({
    type: "inlined_image_paths",
    paths: paths
  }));
  let S = await Jwt(command_3, kr(), {
    options: {
      tools: ST(baseAgent, webFetchReadmissionAllowed ? KG(baseAgent, availableTools, me(context), {
        activeAgents: context.options.agentDefinitions.activeAgents
      }) : availableTools, deferInvocationRecording, !1, !1, 0, PO(context).mode).resolvedTools,
      spawnedBySkill: HP(command_3)
    },
    storageV5: context.storageV5
  });
  if (S) promptMessages.push(S);
  promptMessages.push(...k);
  let effort = command_3.getEffort?.(s, context) ?? command_3.getDefaultEffort?.(s, context)?.value ?? command_3.effort,
    H = effort !== void 0 ? {
      ...baseAgent,
      effort: effort
    } : baseAgent,
    N = Ce({
      content: $W({
        inputString: `/${Co(command_3)} ${s}`.trim(),
        precedingInputBlocks: r.length > 0 ? [...r, ...l] : l
      }),
      uuid: uuid,
      origin: origin
    });
  if (await context.makeFileHistorySnapshot?.(N.uuid), t(`Executing forked slash command /${command_3.name} with agent ${H.agentType}`), deferInvocationRecording) {
    I?.markTurnActive(b ? void 0 : `/${Co(command_3)} ${s}`.trim());
    let J;
    try {
      J = await E3t({
        agentId: O,
        agentDefinition: H,
        command: command_3,
        description: `/${Co(command_3)} ${s}`.trim(),
        prompt: n,
        promptMessages: promptMessages,
        context: context,
        canUseTool: canUseTool,
        getAppState: oe,
        permissionLayers: permissionLayers,
        readFileState: C,
        availableTools: availableTools,
        webFetchReadmissionAllowed: webFetchReadmissionAllowed,
        spawnedBySkill: HP(command_3),
        recordInvocationOnSuccess: j,
        frozenCommandDenies: frozenCommandDenies
      });
    } catch (error) {
      if (await I?.settleTurnEnd(null), Ke(error)) return {
        messages: [N, OT({
          toolUse: !1
        })],
        shouldQuery: !1,
        command: command_3,
        aborted: !0,
        forkDispatched: !0
      };
      return {
        messages: [N, Ce({
          content: `<local-command-stderr>${qt(bOe(error, command_3.name, context.session))}</local-command-stderr>`
        })],
        shouldQuery: !1,
        command: command_3,
        threw: !0,
        forkDispatched: !0
      };
    }
    if (J) return await I?.settleTurnEnd(null), {
      messages: [N, tg(`<local-command-stdout>Running in the background as @${dk(tn(J.name))}</local-command-stdout>
` + Gco({
        agentId: J.agentId,
        skillName: command_3.name,
        description: `/${Co(command_3)} ${s}`.trim()
      }))],
      shouldQuery: !1,
      command: command_3,
      forkDispatched: !0
    };
    j();
  }
  let B = [],
    W = [],
    U = `forked-command-${command_3.name}`,
    q = 0,
    he = message => (q++, {
      type: "progress",
      data: {
        message: message,
        type: "agent_progress",
        prompt: n,
        agentId: O,
        agentType: H.agentType,
        isBuiltIn: H.source === "built-in",
        description: command_3.description
      },
      parentToolUseID: U,
      toolUseID: `${U}-${q}`,
      timestamp: new Date().toISOString(),
      uuid: ae()
    }),
    ye = () => {
      context.emitToolProgress?.({
        kind: "agent_progress",
        toolUseId: U,
        progressMessages: [...W]
      });
    };
  I?.markTurnActive(b ? void 0 : `/${Co(command_3)} ${s}`.trim());
  let be = T3t({
      agentId: O,
      parentAgentId: context.agentId,
      spawnDepth: Sd(context.agentContext) + 1,
      skillName: Co(command_3),
      prompt: n,
      selectedAgent: H,
      taskRegistry: context.taskRegistry,
      callerAbortController: context.abortController
    }),
    le = "failed";
  try {
    ye();
    for await (let V of rk({
      agentDefinition: H,
      promptMessages: promptMessages,
      onModelRestricted: Z3t(HP(command_3), context.onQueryEvent),
      toolUseContext: {
        ...context,
        getAppState: oe,
        permissionLayers: permissionLayers
      },
      canUseTool: canUseTool,
      isAsync: !1,
      querySource: "agent:custom",
      spawnedBySkill: HP(command_3),
      spawnedByForkedSkill: !0,
      model: command_3.model,
      availableTools: availableTools,
      webFetchReadmissionAllowed: webFetchReadmissionAllowed,
      override: {
        shareFileHistory: !0,
        agentId: O,
        abortController: be.abortController,
        readFileState: C
      }
    })) {
      if (V.type === "api_metrics" || V.type === "set_in_progress_tool_use_ids" || V.type === "spinner_mode" || V.type === "query_model_change") continue;
      B.push(V);
      let Me = bf([V]);
      if (V.type === "assistant") {
        let delta = kQt(V);
        if (delta > 0) context.onQueryEvent?.({
          type: "response_length",
          op: "add",
          delta: delta
        });
        let we = Me[0];
        if (we && we.type === "assistant") W.push(he(V)), ye();
      }
      if (V.type === "user") {
        let P = Me[0];
        if (P && P.type === "user") W.push(he(P)), ye();
      }
    }
    let J = xOe(ty(B));
    if (!J) JSe(O, context);
    le = J ? "failed" : "completed";
  } catch (error) {
    if (Ke(error)) return await I?.settleTurnEnd(null), {
      messages: [N, OT({
        toolUse: !1
      })],
      shouldQuery: !1,
      command: command_3,
      aborted: !0,
      forkDispatched: !0
    };
    await I?.settleTurnEnd(null);
    let V = await qe(context, B, g);
    return {
      messages: [N, Ce({
        content: `<local-command-stderr>${qt(bOe(error, command_3.name, context.session))}</local-command-stderr>`
      }), ...V.messages],
      shouldQuery: V.requestQuery,
      command: command_3,
      threw: !0,
      forkDispatched: !0
    };
  } finally {
    be.remove(le), DBe(O), context.emitToolProgress?.({
      kind: "clear",
      toolUseId: U
    });
  }
  let resultText = kie(B) + CAt(B, "Command completed");
  t(`Forked slash command /${command_3.name} completed with agent ${O}`), await I?.settleTurnEnd(B);
  let de = await qe(context, B, g);
  return {
    messages: [N, tg(`<local-command-stdout>${dk(resultText)}</local-command-stdout>`), ...de.messages],
    shouldQuery: de.requestQuery,
    command: command_3,
    resultText: resultText,
    forkDispatched: !0
  };
}
var ct = {
  "remote-control": "allow_remote_control",
  ultraplan: "allow_remote_sessions",
  "claude-in-chrome": "allow_claude_browser_extension"
};
function pt(e, s, {
  interactive: interactive
}) {
  let l = zie(),
    r = ule(),
    f = [s, l, r, Cdn()],
    command_4,
    policy;
  for (let R of f) {
    let O = Zs(e, R);
    if (!O) continue;
    let Q = R === l || R === r,
      z = O.policyGate?.policy ?? (Q ? ct[O.name] : void 0);
    if (z) {
      command_4 = O, policy = z;
      break;
    }
  }
  if (!command_4 || !policy) return;
  if (!yie(command_4)) return;
  if (Xt(policy)) {
    if (interactive && !Gg() && Qc(command_4) && Zs(e, s) === void 0) return {
      command: command_4,
      policy: policy,
      reason: nNo(command_4.name),
      kind: "stale_list"
    };
    return;
  }
  let kind = Iw(policy);
  if (!interactive) {
    if (Re(e, zie()) !== void 0) return;
    if (kind !== "org_denied" && _ie(f.flatMap(item => item.filter(item => _V(e, [item])))).length === 0) return;
  }
  let {
      featureLabel: featureLabel,
      verb: verb
    } = w6(policy),
    reason = kind === "cache_miss" ? tNo(featureLabel) : kf(policy, featureLabel, verb);
  if (reason === null || kind === null) return;
  return {
    command: command_4,
    policy: policy,
    reason: reason,
    kind: kind
  };
}
function Xwt(e) {
  return /^[a-zA-Z0-9_][a-zA-Z0-9:_-]*$/.test(e);
}
function bOe(e, s, o) {
  let l = Nr(s, 200),
    r = tn(s);
  if (Ke(e)) {
    if (Po(o)) return t(`${r} aborted: ${String(e)}`), "Interrupted";
    return dk(e instanceof Error ? e.message || "Interrupted" : "Interrupted");
  }
  if (e instanceof Tj) return dk(e.message);
  if (Po(o)) return t(`${r} threw: ${String(e)}`, {
    level: "error"
  }), `${l} failed (detail withheld on this connection)`;
  return dk(String(e));
}
async function FKo(e, precedingInputBlocks, o, l, r, uuid_3, g, k, promptSource, D, I, L, R, O, Q, z, ee, ge, permissionMode, wakeupSource, hostInitiator) {
  using queued = LWo(uuid_3 ?? r.deferredSlashUuid);
  function v(w = [], inputString = e, Z = !1) {
    let ne = ae(),
      promptId = eme(precedingInputBlocks) ? void 0 : ne;
    if (promptId !== void 0) Jmt(promptId);
    let re = Nk(r.options.mainLoopModel, Gf(r), um(r.permissionLayers));
    i("tengu_input_prompt", {
      ...(promptSource && {
        prompt_source: c(promptSource)
      }),
      ...(re && {
        effort_level: c(re)
      }),
      turn_origin: c(pxt(Q)),
      ...zRt({
        wakeupSource: wakeupSource,
        hostInitiator: hostInitiator
      })
    });
    let uuid_2 = uuid_3 || ae();
    Zo("user_prompt", {
      prompt_length: String(inputString.length),
      prompt: mIt(inputString),
      ...(promptId && {
        "prompt.id": promptId
      }),
      "message.uuid": uuid_2
    });
    let _e = Ce({
      content: $W({
        inputString: inputString,
        precedingInputBlocks: precedingInputBlocks
      }),
      uuid: uuid_2,
      permissionMode: permissionMode,
      isMeta: ge || void 0,
      promptSource: promptSource,
      promptId: promptId,
      origin: Q
    });
    if (Q) FZt(_e, Q);
    return {
      messages: [_e, ...l, ...w.map(item => on(item))],
      shouldQuery: !0,
      ...(Z && {
        extractPromptAttachments: !0
      })
    };
  }
  let T = mE(e);
  if (!T) {
    if (i("tengu_input_slash_missing", {}), r.options.isNonInteractiveSession) return v();
    m("cmd_dispatch", "cmd_parse_failed");
    let w = "Commands are in the form `/command [args]`";
    return {
      messages: [Uie(), ...l, Ce({
        content: $W({
          inputString: w,
          precedingInputBlocks: precedingInputBlocks
        })
      })],
      shouldQuery: !1,
      resultText: w
    };
  }
  let {
      commandName: C,
      args: args
    } = T,
    {
      isMcp: isMcp
    } = T,
    h;
  if (L !== void 0) {
    let w = mE(L);
    h = w && w.commandName === T.commandName ? w.args : void 0;
  }
  let u = Zs(C, r.options.commands);
  if (u && !Qc(u)) u = void 0;
  if (!u && !isMcp && args.trim()) {
    let w = args.trimStart(),
      G = w.search(/\s/),
      Z = G === -1 ? w : w.slice(0, G),
      ne = `${C}:${Z}`,
      se = Zs(ne, r.options.commands);
    if (se) u = se, C = ne, args = G === -1 ? "" : w.slice(G + 1).trimStart();
  }
  if (!u && !isMcp && !Gg()) {
    let w = await NWo(C, queued.origin === void 0, r.abortController.signal);
    if (!w && r.abortController.signal.aborted) {
      let G = Ci(r.abortController.signal.reason);
      if (G === "shutdown") return {
        messages: [],
        shouldQuery: !1
      };
      let Z = Zs(C, r.options.commands) ?? Zs(C, zie()),
        ne = gte(G) ? [] : [OT({
          toolUse: !1
        })];
      return fe(queued.origin !== void 0, {
        messages: [...l, Ce({
          content: $W({
            inputString: Z ? Ie(Z, args) : Y8(tn(C), Y6(args)),
            precedingInputBlocks: precedingInputBlocks
          }),
          uuid: uuid_3,
          origin: Q
        }), ...ne],
        shouldQuery: !1
      });
    }
    if (w) u = w, r = {
      ...r,
      options: {
        ...r.options,
        commands: [...r.options.commands, w]
      }
    };
  }
  let S, F;
  if (u && !HA(u)) {
    let w = fpe(u, args);
    if (w) {
      let G = Zs(w.targetName, r.options.commands);
      if (G && Qc(G)) F = `${C} ${w.consumedToken}`, u = G, C = w.targetName, args = w.remainingArgs;else if (u.name === VB) {
        let Z = Xrn();
        if (Z) S = $t(`${Z} Running a local review instead.`, "warning");
      }
    }
  }
  if (u?.loadedFrom === "syncedSkills" && v8()) u = void 0;
  let isBuiltIn = BO().has(C);
  if (Ywt(u, r.getAppState().endedByModel)) {
    let resultText_2 = JL("Claude ended this conversation. Start a new session (or /clear) to continue.");
    return fe(queued.origin !== void 0, {
      messages: [$t(resultText_2, "warning")],
      shouldQuery: !1,
      resultText: resultText_2
    });
  }
  let isBundled = u?.type === "prompt" && u.source === "bundled",
    isOfficial = u?.type === "prompt" && MG(u),
    W = isMcp || u?.type === "prompt" && u.source === "mcp";
  if (!u) {
    let w = !1;
    try {
      await ce().stat(`/${C}`), w = !0;
    } catch {}
    if (Xwt(C) && !w) {
      let G = pt(C, r.options.commands, {
        interactive: !r.options.isNonInteractiveSession
      });
      if (G) {
        let {
          command: command_5,
          policy: policy_2,
          reason: ue,
          kind: kind_2
        } = G;
        if (i("tengu_input_slash_invalid", {
          input_length: C.length,
          had_suggestion: !1,
          policy_denied: kind_2 !== "stale_list"
        }), m("cmd_dispatch", kind_2 === "stale_list" ? "cmd_stale_list" : `cmd_policy_${kind_2}`), kind_2 !== "stale_list") Rk(policy_2, "slash_command");
        let Be = dk(tn(C)),
          ve = !args ? "" : gae(command_5, args) ? "***" : dk(Y6(args));
        if (r.options.isNonInteractiveSession) return fe(queued.origin !== void 0, {
          messages: [...l, tg(`/${Be}${ve ? ` ${ve}` : ""}`), tg(`<local-command-stdout>${ue}</local-command-stdout>`)],
          shouldQuery: !1,
          resultText: ue
        });
        return fe(queued.origin !== void 0, {
          messages: [...l, $t(ue, "warning"), ...(ve && ve !== "***" ? [$t(`Args from /${Be}: ${ve}`, "warning")] : [])],
          shouldQuery: !1,
          resultText: ue
        });
      }
      if (r.options.isNonInteractiveSession && BO().has(C)) {
        let K = zie(),
          resultText_3 = Re(C, K) ?? `/${dk(tn(C))} isn't available in this environment.`;
        i("tengu_input_slash_invalid", {
          input_length: C.length,
          had_suggestion: !1
        }), m("cmd_dispatch", "cmd_unavailable_headless");
        let ue = Zs(C, K),
          pe = !args ? "" : ue !== void 0 && gae(ue, args) ? "***" : dk(Y6(args));
        return fe(queued.origin !== void 0, {
          messages: [...l, tg(`/${dk(tn(C))}${pe ? ` ${pe}` : ""}`), tg(`<local-command-stdout>${resultText_3}</local-command-stdout>`, {
            commandOutcome: {
              kind: "unavailable_headless"
            }
          })],
          shouldQuery: !1,
          resultText: resultText_3
        });
      }
      let Z = r.options.commands.filter(item => !item.isHidden && !HA(item) && Qc(item) && !(item.loadedFrom === "syncedSkills" && DC())),
        fallback_to_model = queued.origin === void 0 && Ve(r.options.isNonInteractiveSession),
        se = fallback_to_model ? Z.filter(item => item.type === "prompt" && !item.disableModelInvocation) : Z,
        suggestion_2 = IJ(C, se.map(item => ({
          name: Co(item),
          aliases: item.aliases
        })), {
          maxEditDistance: 2
        });
      if (i("tengu_input_slash_invalid", {
        input_length: C.length,
        had_suggestion: Boolean(suggestion_2),
        suggestion_distance: suggestion_2 ? wY(C, suggestion_2) : void 0,
        fallback_to_model: fallback_to_model
      }), fallback_to_model) return p("cmd_dispatch", "cmd_unknown_model_fallback"), v([ze({
        commandName: C,
        suggestion: suggestion_2,
        availableCommandNames: se.map(item => Co(item)),
        availableCommandCount: Z.length
      })], WYe(e) ? Y6(e) : e, !0);
      m("cmd_dispatch", "cmd_unknown");
      let ke = Nr(C, 200),
        suggestion_3 = suggestion_2 ? Nr(suggestion_2, 200) : void 0,
        resultText_4 = suggestion_2 ? `Unknown command: /${ke}. Did you mean /${suggestion_3}?` : `Unknown command: /${ke}`;
      if (r.options.isNonInteractiveSession) return fe(queued.origin !== void 0, {
        messages: [...l, tg(`/${ke}${args ? ` ${dk(Y6(args))}` : ""}`), tg(`<local-command-stdout>${resultText_4}</local-command-stdout>`, {
          commandOutcome: {
            kind: "unknown",
            ...(suggestion_3 !== void 0 && {
              suggestion: suggestion_3
            })
          }
        })],
        shouldQuery: !1,
        resultText: resultText_4
      });
      return fe(queued.origin !== void 0, {
        messages: [...l, $t(resultText_4, "warning"), ...(args ? [$t(`Args from unknown skill: ${Y6(args)}`, "warning")] : [])],
        shouldQuery: !1,
        resultText: resultText_4
      });
    }
    return v();
  }
  let command_source = W || u.loadedFrom === "mcp" ? "mcp" : isBuiltIn || u.type === "prompt" && (u.source === "bundled" || u.source === "builtin") ? "builtin" : "custom",
    q = gae(u, args) ? `/${C} ***` : e,
    he = r.deferSlashToEngine?.(u) ?? !1;
  if (!he) {
    let w = ae();
    Jmt(w), Zo("user_prompt", {
      prompt_length: String(q.length),
      prompt: mIt(q),
      "prompt.id": w,
      command_name: command_source === "builtin" || Hc() ? C : command_source,
      command_source: command_source
    });
  }
  let command_7 = u,
    run = w => ht(C, w, r, precedingInputBlocks, o, g, k, uuid_3, D, I, h, F, R, promptSource, O, Q, z, ee);
  if (he) queued.handOn(r.abortController.signal);
  let le = he ? {
      kind: "engine",
      ran: await run(args)
    } : await LQt({
      input: {
        command: Co(command_7),
        args: args,
        origin: i_r({
          submissionOrigin: Q,
          dispatchedOverBridge: r.dispatchedOverBridge,
          promptSource: promptSource
        }),
        presentation: Gnt(r.presentation)
      },
      engine: {
        run: run,
        textOf: w => w.resultText,
        contextOf: w => w.metaTexts,
        retell: retell
      },
      queued: queued,
      signal: r.abortController.signal
    }),
    {
      messages: messages_2,
      shouldQuery: shouldQuery,
      allowedTools: allowedTools,
      disallowedTools: disallowedTools,
      model: model,
      effort: effort_2,
      command: command_6,
      resultText: resultText_5,
      nextInput: nextInput,
      submitNextInput: submitNextInput,
      engineDeferredSlash: engineDeferredSlash,
      forkDispatched: forkDispatched,
      settledInPlace: settledInPlace
    } = le.kind === "engine" ? le.ran : ft(le.text, le.context, {
      command: command_7,
      commandName: C,
      args: args,
      precedingInputBlocks: precedingInputBlocks,
      uuid: uuid_3,
      submissionOrigin: Q,
      isNonInteractiveSession: r.options.isNonInteractiveSession === !0
    });
  if (command_6.type === "prompt" && command_6.pluginInfo) DP(command_6.pluginInfo.repository, "command", ynt(command_6, command_6.pluginInfo.pluginManifest.name));
  let {
    sanitizedName: Ee,
    skillNameHash: skillNameHash_2
  } = _W({
    rawName: C,
    canonicalName: command_6.name,
    isMcp: W || command_6.loadedFrom === "mcp",
    isBuiltIn: isBuiltIn,
    isBundled: isBundled,
    isOfficial: isOfficial
  });
  function Qe() {
    let w = {
      input: Ee,
      ...skillNameHash_2
    };
    if (command_6.type === "prompt" && command_6.pluginInfo) {
      Object.assign(w, cCt(command_6));
      let version = command_6.pluginInfo.pluginManifest.version;
      if (version && MG(command_6)) w.plugin_version = fi(version);
    }
    if (command_6.type === "prompt") Object.assign(w, Y7(command_6));
    i("tengu_input_command", {
      ...w,
      invocation_trigger: y("user-slash"),
      ...zRt({
        wakeupSource: wakeupSource,
        hostInitiator: hostInitiator
      }),
      ...q7(command_6.type === "prompt" ? command_6.source : void 0, command_6.loadedFrom, command_6.kind, command_6.type === "prompt" ? command_6.createdBy : void 0),
      ...iZe(command_6.type === "prompt" ? command_6.source : void 0, C),
      ...(command_6.type === "prompt" && {
        command_content_chars: command_6.contentLength
      }),
      ...(command_6.type === "prompt" && {
        _PROTO_skill_name: command_6.name
      }),
      ...!1
    });
  }
  if (messages_2.length === 0) {
    if (settledInPlace) _("cmd_dispatch");
    return Qe(), {
      messages: [],
      shouldQuery: !1,
      model: model,
      resultText: resultText_5,
      nextInput: nextInput,
      submitNextInput: submitNextInput,
      localCommand: Ee
    };
  }
  if (messages_2.length === 2 && messages_2[1].type === "user" && typeof messages_2[1].message.content === "string" && messages_2[1].message.content.startsWith("Unknown command:")) {
    if (!(e.startsWith("/var") || e.startsWith("/tmp") || e.startsWith("/private"))) i("tengu_input_slash_invalid", {
      input_length: C.length,
      had_suggestion: !1
    }), m("cmd_dispatch", "cmd_unknown");
    return {
      messages: [Uie(), ...messages_2],
      shouldQuery: shouldQuery,
      allowedTools: allowedTools,
      disallowedTools: disallowedTools,
      model: model
    };
  }
  if (!engineDeferredSlash) _("cmd_dispatch"), Qe();
  let rt = messages_2.length > 0 && messages_2[0] && Ca(messages_2[0]),
    Le = shouldQuery || messages_2.every(item => b9(item) || item.type === "system" && item.subtype === "informational" || item.type === "user" && item.isMeta) || rt || engineDeferredSlash ? messages_2 : [Uie(), ...messages_2];
  return {
    messages: S && shouldQuery ? [...Le, S] : Le,
    shouldQuery: shouldQuery,
    allowedTools: allowedTools,
    disallowedTools: disallowedTools,
    model: model,
    effort: effort_2,
    resultText: resultText_5,
    nextInput: nextInput,
    submitNextInput: submitNextInput,
    engineDeferredSlash: engineDeferredSlash,
    forkDispatched: forkDispatched,
    ...(!engineDeferredSlash && {
      localCommand: Ee
    })
  };
}
function ft(resultText_6, s, {
  command: command_8,
  commandName: commandName_3,
  args: args_2,
  precedingInputBlocks: precedingInputBlocks_2,
  uuid: uuid_4,
  submissionOrigin: k,
  isNonInteractiveSession: isNonInteractiveSession_2
}) {
  let D = dK(lB().has(commandName_3) ? commandName_3 : "custom");
  _(D, WSe(command_8.name));
  let I = isNonInteractiveSession_2 || precedingInputBlocks_2.length > 0 || !e_(k),
    metaTexts = s ?? [];
  if (resultText_6 === void 0 && metaTexts.length === 0 && !I) return {
    messages: [],
    shouldQuery: !1,
    command: command_8
  };
  return {
    messages: [I ? Ce({
      content: $W({
        inputString: ie(command_8, args_2),
        precedingInputBlocks: precedingInputBlocks_2
      }),
      uuid: uuid_4,
      origin: k
    }) : tg(ie(command_8, args_2)), ...(resultText_6 === void 0 ? [] : [tg(`<local-command-stdout>${dk(resultText_6)}</local-command-stdout>`, {
      commandRun: S9(command_8, args_2)
    })]), ...metaTexts.map(O => Ce({
      content: O,
      isMeta: !0
    }))],
    shouldQuery: !1,
    command: command_8,
    resultText: resultText_6,
    ...(metaTexts.length > 0 && {
      metaTexts: metaTexts
    })
  };
}
function retell(e, {
  text: text,
  context: context_2
}) {
  if (e.shouldQuery || e.nextInput !== void 0 || e.settledInPlace) return;
  let messages_3 = e.messages;
  if (text !== void 0) {
    let r = e.resultText === void 0 ? -1 : messages_3.findIndex(item => b9(item) && (item.content.startsWith(`<${vd}>`) || item.content.startsWith(`<${up}>`)));
    if (r === -1) return;
    let f = messages_3[r],
      g = f !== void 0 && b9(f) && f.content.startsWith(`<${up}>`) ? up : vd;
    messages_3 = messages_3.with(r, tg(`<${g}>${dk(text)}</${g}>`, f !== void 0 && b9(f) ? {
      commandRun: f.commandRun,
      commandOutcome: f.commandOutcome
    } : void 0));
  }
  if (context_2 !== void 0) {
    if (!(e.metaTexts !== void 0 || messages_3.some(item => b9(item) && (item.content.startsWith(`<${vd}>`) || item.content.startsWith(`<${up}>`))))) return;
    let f = new Map();
    for (let g of e.metaTexts ?? []) f.set(g, (f.get(g) ?? 0) + 1);
    messages_3 = [...messages_3.filter(item => {
      let k = item.type === "user" && item.isMeta && typeof item.message.content === "string" ? item.message.content : void 0,
        b = k === void 0 ? 0 : f.get(k) ?? 0;
      if (k === void 0 || b === 0) return !0;
      return f.set(k, b - 1), !1;
    }), ...context_2.map(g => Ce({
      content: g,
      isMeta: !0
    }))];
  }
  return {
    ...e,
    messages: messages_3,
    resultText: text ?? e.resultText,
    ...((context_2 ?? e.metaTexts) !== void 0 && {
      metaTexts: context_2 ?? e.metaTexts
    })
  };
}
function Fe(command_9, s) {
  let resultText_7 = `/${Co(command_9)} opens an interactive panel and isn't available in this environment. Run it from the Claude Code terminal instead.`;
  return {
    messages: [tg(Ie(command_9, s)), tg(`<local-command-stdout>${resultText_7}</local-command-stdout>`, {
      commandOutcome: {
        kind: "unavailable_headless"
      }
    })],
    shouldQuery: !1,
    command: command_9,
    resultText: resultText_7
  };
}
async function ht(e, trailingArgs_2, o, precedingInputBlocks_3, r, f, canUseTool_2, uuid_5, b, D, I, L, R, O, Q, z, ee, ge) {
  let command_10 = kLe(e, o.options.commands),
    oe = hmt(trailingArgs_2);
  if (oe.some(item => item.kind === "block")) trailingArgs_2 = oe.map(item => item.kind === "text" ? item.text : item.body).join(`

`).trim();
  let E = dK(lB().has(e) ? e : "custom"),
    j = WSe(command_10.name);
  if (!Qc(command_10)) {
    m(E, "cmd_policy_disabled");
    let resultText_8 = `/${dk(tn(e))} isn't available in this session.`;
    if (o.options.isNonInteractiveSession) return {
      messages: [tg(Ie(command_10, trailingArgs_2)), tg(`<local-command-stdout>${resultText_8}</local-command-stdout>`)],
      shouldQuery: !1,
      command: command_10,
      resultText: resultText_8
    };
    return {
      messages: [$t(resultText_8, "warning")],
      shouldQuery: !1,
      command: command_10,
      resultText: resultText_8
    };
  }
  if (HA(command_10)) {
    if (m(E, "cmd_skill_override_off"), o.options.isNonInteractiveSession) {
      let resultText_9 = `Skill "${Nr(command_10.name, 200)}" is disabled via skillOverrides. Remove the override from your settings to run it.`;
      return {
        messages: [tg(Ie(command_10, trailingArgs_2)), tg(`<local-command-stdout>${resultText_9}</local-command-stdout>`)],
        shouldQuery: !1,
        command: command_10,
        resultText: resultText_9
      };
    }
    let resultText_10 = `Skill "${Nr(command_10.name, 200)}" is disabled via skillOverrides. Re-enable it in /skills or remove the override from your settings to run it.`,
      T = !trailingArgs_2 ? "" : gae(command_10, trailingArgs_2) ? "***" : dk(Y6(trailingArgs_2));
    return {
      messages: [$t(resultText_10, "warning"), ...(trailingArgs_2 ? [$t(`Args from disabled skill: ${T}`, "warning")] : [])],
      shouldQuery: !1,
      command: command_10,
      resultText: resultText_10
    };
  }
  if (command_10.type === "prompt" && command_10.userInvocable !== !1) QRt(o.session, command_10.name, o.storageV5);
  if (command_10.type === "prompt" && command_10.pluginInfo) lk(command_10.pluginInfo.repository);
  if (!o.deferSlashToEngine?.(command_10)) Pe({
    commandName: command_10.name,
    agentId: o.agentId,
    isNonInteractiveSession: Boolean(o.options.isNonInteractiveSession),
    setAppState: o.setAppState,
    credentials: o.credentials
  });
  if (command_10.userInvocable === !1) return m(E, "cmd_not_user_invocable"), {
    messages: [Ce({
      content: $W({
        inputString: `/${tn(e)}`,
        precedingInputBlocks: precedingInputBlocks_3
      }),
      uuid: uuid_5
    }), Ce({
      content: `This skill can only be invoked by Claude, not directly by users. Ask Claude to use the "${tn(e)}" skill for you.`
    })],
    shouldQuery: !1,
    command: command_10
  };
  if (command_10.type === "local-jsx" && o.options.isNonInteractiveSession) return m(E, "cmd_local_jsx_headless"), Fe(command_10, trailingArgs_2);
  try {
    switch (command_10.type) {
      case "local-jsx":
        return new Promise(v => {
          let T = !1,
            C = (h, u) => {
              if (T) return;
              if (T = !0, _(E, j), u?.display === "skip") {
                v({
                  messages: [],
                  shouldQuery: !1,
                  command: command_10,
                  nextInput: u?.nextInput,
                  submitNextInput: u?.submitNextInput
                });
                return;
              }
              let S = (u?.metaMessages ?? []).map(H => Ce({
                  content: H,
                  isMeta: !0
                })),
                F = o.presentation === "fullscreen" && typeof h === "string" && h.endsWith(" dismissed");
              v({
                messages: u?.display === "system" ? F ? S : [tg(ie(command_10, trailingArgs_2)), tg(`<local-command-stdout>${dk(String(h))}</local-command-stdout>`, {
                  commandRun: S9(command_10, trailingArgs_2)
                }), ...S] : [Ce({
                  content: $W({
                    inputString: ie(command_10, trailingArgs_2),
                    precedingInputBlocks: precedingInputBlocks_3
                  }),
                  uuid: uuid_5
                }), h ? Ce({
                  content: `<local-command-stdout>${h}</local-command-stdout>`
                }) : Ce({
                  content: `<local-command-stdout>${$u}</local-command-stdout>`
                }), ...S],
                shouldQuery: u?.shouldQuery ?? !1,
                command: command_10,
                nextInput: u?.nextInput,
                submitNextInput: u?.submitNextInput,
                ...(S.length > 0 && {
                  metaTexts: u?.metaMessages
                })
              });
            },
            M = command_10.load ?? o.options.resolveCommandDialog?.(command_10);
          if (!M) {
            m(E, "cmd_local_jsx_no_dialog_resolution"), v(Fe(command_10, trailingArgs_2));
            return;
          }
          let A = FNe(command_10, trailingArgs_2, o.presentation ?? "inline");
          M().then(h => h.call(C, {
            ...o,
            canUseTool: canUseTool_2,
            dispatchedAsImmediate: A,
            submissionOrigin: z
          }, trailingArgs_2, L ?? e)).then(h => {
            if (h == null) return;
            if (T) return;
            let localJsx = o.localJsx;
            if (!localJsx) {
              m(E, "cmd_local_jsx_no_panel_host"), T = !0, v(Fe(command_10, trailingArgs_2));
              return;
            }
            localJsx.show(h, {
              commandName: Co(command_10),
              immediate: A,
              hidesPrompt: !0,
              retireAtTurnBoundary: !0
            }).closed.then(F => {
              if (F === "dismissed" && !T) T = !0, m(E, "cmd_local_jsx_dismissed"), v({
                messages: [],
                shouldQuery: !1,
                command: command_10
              });
            });
          }).catch(h => {
            let u = Ke(h);
            if (u) t(`local-jsx command aborted: ${h instanceof Error ? h.message : String(h)}`);else d(st(te(h), "local-jsx slash command threw"));
            if (m(E, u ? "cmd_local_jsx_aborted" : "cmd_local_jsx_threw"), T) return;
            if (T = !0, u) {
              v({
                messages: [],
                shouldQuery: !1,
                command: command_10
              });
              return;
            }
            v({
              messages: [Ce({
                content: $W({
                  inputString: ie(command_10, trailingArgs_2),
                  precedingInputBlocks: precedingInputBlocks_3
                }),
                uuid: uuid_5
              }), tg(`<local-command-stderr>${qt(dk(bOe(h, command_10.name, o.session)))}</local-command-stderr>`, {
                commandRun: S9(command_10, trailingArgs_2),
                commandOutcome: {
                  kind: "failed"
                }
              })],
              shouldQuery: !1,
              command: command_10
            });
          });
        });
      case "local":
        {
          if (o.deferSlashToEngine?.(command_10)) {
            let C = `/${Co(command_10)} ${trailingArgs_2}`.trim(),
              M = Ce({
                content: $W({
                  inputString: C,
                  precedingInputBlocks: precedingInputBlocks_3
                }),
                uuid: uuid_5
              });
            return {
              messages: [M],
              shouldQuery: !1,
              command: command_10,
              engineDeferredSlash: {
                text: C,
                messageUuid: M.uuid,
                origin: z
              }
            };
          }
          let v = Ce({
              content: $W({
                inputString: ie(command_10, trailingArgs_2),
                precedingInputBlocks: precedingInputBlocks_3
              }),
              uuid: uuid_5
            }),
            T = Lt() && pLn(command_10).workspace;
          if (T) o.applyMessageOp({
            type: "append",
            messages: [v]
          });
          try {
            let C = Uie(),
              A = (await command_10.load()).call(trailingArgs_2, {
                ...o,
                submissionOrigin: z,
                commandMessageUuid: v.uuid
              }, L ?? e),
              h = T ? await eu(A, o.abortController.signal, () => new We()) : await A;
            if (h.type === "text" && h.level === "error") m(E, "cmd_returned_error");else _(E, j);
            if (h.type === "skip") return {
              messages: [],
              shouldQuery: !1,
              command: command_10
            };
            if (h.type === "compact") {
              let F = [C, v, ...(h.displayText ? [Ce({
                  content: `<local-command-stdout>${dk(h.displayText)}</local-command-stdout>`,
                  timestamp: new Date(Date.now() + 100).toISOString()
                })] : [])],
                H = {
                  ...h.compactionResult,
                  messagesToKeep: [...h.compactionResult.messagesToKeep, ...F]
                },
                messages_4 = xM(H);
              return Trt(messages_4), {
                messages: messages_4,
                shouldQuery: !1,
                command: command_10
              };
            }
            if (h.type === "query") return {
              messages: [v, tg(`<local-command-stdout>${dk(h.value)}</local-command-stdout>`, {
                commandRun: S9(command_10, trailingArgs_2)
              }), ...(h.metaMessages ?? []).map(F => Ce({
                content: F,
                isMeta: !0
              })), Ce({
                content: h.prompt,
                isMeta: !0
              })],
              shouldQuery: !0,
              command: command_10,
              resultText: h.value,
              ...(h.metaMessages !== void 0 && {
                metaTexts: h.metaMessages
              })
            };
            let u = h.level === "error" ? "local-command-stderr" : "local-command-stdout",
              S = tg(`<${u}>${dk(h.value)}</${u}>`, {
                contextUsage: h.contextUsage,
                usageReport: h.usageReport,
                commandRun: S9(command_10, trailingArgs_2),
                commandOutcome: h.outcome ?? (h.level === "error" ? {
                  kind: "failed"
                } : void 0)
              });
            if (T) return Ze(o, v, {
              messages: [S],
              shouldQuery: !1,
              command: command_10,
              resultText: h.value
            });
            return {
              messages: [v, S, ...(h.metaMessages ?? []).map(F => Ce({
                content: F,
                isMeta: !0
              }))],
              shouldQuery: !1,
              command: command_10,
              resultText: h.value,
              ...(h.metaMessages !== void 0 && {
                metaTexts: h.metaMessages
              })
            };
          } catch (error) {
            if (Ke(error)) t(`local command aborted: ${error instanceof Error ? error.message : String(error)}`);else d(st(te(error), "local slash command threw"));
            let M = Ke(error);
            if (M && o.abortController.signal.aborted) p(E, "cmd_local_aborted");else m(E, M ? "cmd_local_aborted" : "cmd_local_threw");
            let A = M ? "local-command-stdout" : "local-command-stderr",
              h = T ? Ygn : "Interrupted",
              u = M ? Po(o.session) ? h : error instanceof Error ? error.message || h : h : bOe(error, command_10.name, o.session),
              S = tg(`<${A}>${qt(dk(u))}</${A}>`, M ? void 0 : {
                commandRun: S9(command_10, trailingArgs_2),
                commandOutcome: {
                  kind: "failed"
                }
              });
            if (T) return Ze(o, v, {
              messages: [S],
              shouldQuery: !1,
              command: command_10
            });
            return {
              messages: [v, S],
              shouldQuery: !1,
              command: command_10
            };
          }
        }
      case "prompt":
        {
          if (!(command_10.isMcp && command_10.loadedFrom !== "mcp")) Vtt(command_10.name, command_10, "user-slash");
          let {
              stacked: stacked,
              trailingArgs: trailingArgs,
              capped: capped
            } = command_10.context === "fork" || command_10.getContext !== void 0 || command_10.argsMayContainSlashCommands ? {
              stacked: [],
              trailingArgs: trailingArgs_2,
              capped: !1
            } : yt(trailingArgs_2, I, o.options.commands, b ? D ?? (() => !0) : void 0),
            M = trailingArgs,
            A;
          if (stacked.length > 0) i("tengu_stacked_slash_commands", {
            stacked_count: stacked.length
          });
          try {
            let h = await Je(command_10, M, o);
            if ("blocked" in h) return m(E, "cmd_hook_blocked"), h.blocked;
            if (!o.options.isNonInteractiveSession && !b) {
              if (command_10.onUserTypedArgs?.(M, o), command_10.getEffort?.(M, o) === void 0) {
                let S = command_10.getDefaultEffort?.(M, o)?.notice;
                if (S) A = $t(S, "notice");
              }
            }
            if (Gin(command_10, M, o) === "fork" && !Oge(o)) {
              let text_2 = `/${e} ${trailingArgs_2}`.trim(),
                F = eb([...precedingInputBlocks_3, {
                  type: "text",
                  text: text_2
                }]) ?? text_2;
              if (!Q) throw Error("Forked dispatch requires forkDispatchHookExecutors");
              let H = [],
                N = [];
              for await (let W of Q.executeUserPromptSubmitHooks(F, me(o).mode, o, t7t({
                promptSource: O ?? "typed"
              }))) {
                if (W.message?.type === "progress") continue;
                if (W.message?.type === "attachment") {
                  let attachment_2 = W.message.attachment;
                  if ("hookEvent" in attachment_2 && attachment_2.hookEvent === "UserPromptSubmit") {
                    if (attachment_2.type === "hook_non_blocking_error") N.push(attachment_2.stderr || `Exit code ${attachment_2.exitCode}`);else if (attachment_2.type === "hook_error_during_execution") N.push(attachment_2.content);
                  }
                }
                if (W.blockingError) {
                  m(E, "cmd_prompt_submit_hook_blocked");
                  let U = Q.getUserPromptSubmitHookBlockingMessage(W.blockingError),
                    resultText_11 = W.suppressOriginalPrompt ? U : `${U}

Original prompt: ${F}`;
                  return {
                    messages: [$t(resultText_11, "warning", void 0, !0)],
                    shouldQuery: !1,
                    resultText: resultText_11,
                    command: command_10,
                    forkDispatched: !0
                  };
                }
                if (W.preventContinuation) {
                  let U = W.stopReason ? `Operation stopped by hook: ${W.stopReason}` : "Operation stopped by hook";
                  return m(E, "cmd_prompt_submit_hook_stopped"), {
                    messages: [Ce({
                      content: U
                    }), $t(U, "warning", void 0, !0)],
                    shouldQuery: !1,
                    resultText: U,
                    command: command_10,
                    forkDispatched: !0
                  };
                }
                if (W.additionalContexts && W.additionalContexts.length > 0) H.push(on({
                  type: "hook_additional_context",
                  content: W.additionalContexts,
                  hookName: "UserPromptSubmit",
                  toolUseID: `hook-${ae()}`,
                  hookEvent: "UserPromptSubmit"
                }));
              }
              let B = await ut(command_10, M, o, precedingInputBlocks_3, r, canUseTool_2 ?? Bp, Q, [...h.hookMessages, ...H], b, uuid_5, R, z, ee);
              if (N.length > 0) B.messages.push($t(`UserPromptSubmit hook error: ${N.join("; ")}`, "warning"));
              if (B.aborted) m(E, "cmd_prompt_aborted");else if (B.threw) m(E, "cmd_prompt_threw");else if (_(E, j), A) B.messages.splice(1, 0, A);
              return B;
            }
            let u = await Oe(command_10, M, o, precedingInputBlocks_3, r, uuid_5, h.hookMessages, b, z, ge);
            if (stacked.length > 0 && I !== void 0) {
              let S = u.messages[0];
              if (S?.type === "user" && !S.isMeta) S.stackedOriginalInput = `/${command_10.name} ${I}`;
            }
            for (let S of stacked) try {
              let F = await Je(S, trailingArgs, o);
              if ("blocked" in F) {
                u.messages.push($t(`Stacked skill /${tn(S.name)} blocked by UserPromptExpansion hook`, "warning"));
                continue;
              }
              if (!o.options.isNonInteractiveSession && !b) {
                if (S.onUserTypedArgs?.(trailingArgs, o), S.getEffort?.(trailingArgs, o) === void 0) {
                  let B = S.getDefaultEffort?.(trailingArgs, o)?.notice;
                  if (B) u.messages.push($t(B, "notice"));
                }
              }
              if (Pe({
                commandName: S.name,
                agentId: o.agentId,
                isNonInteractiveSession: Boolean(o.options.isNonInteractiveSession),
                setAppState: o.setAppState,
                credentials: o.credentials
              }), QRt(o.session, S.name, o.storageV5), S.pluginInfo) lk(S.pluginInfo.repository), DP(S.pluginInfo.repository, "command", ynt(S, S.pluginInfo.pluginManifest.name));
              if (!(S.isMcp && S.loadedFrom !== "mcp")) Vtt(S.name, S, "user-slash");
              let H = await Oe(S, trailingArgs, o, [], [], void 0, F.hookMessages, b, z),
                N = H.messages[0];
              if (N?.type === "user" && !N.isMeta) N.stackedExpansion = !0;
              u.messages.push(...H.messages), u.allowedTools = [...(u.allowedTools ?? []), ...(H.allowedTools ?? [])], u.disallowedTools = [...(u.disallowedTools ?? []), ...(H.disallowedTools ?? [])], u.model = H.model ?? u.model, u.effort = H.effort ?? u.effort;
            } catch (error) {
              if (error instanceof We) throw error;
              d(st(te(error), "stacked slash command expansion threw")), u.messages.push($t(`Stacked skill /${tn(S.name)} failed to load: ${bOe(error, S.name, o.session)}`, "warning"));
            }
            if (capped) u.messages.push($t(`Stacked command limit (${et}) reached \u2014 remaining input passed as arguments`, "warning"));
            if (A) u.messages.push(A);
            return _(E, j), u;
          } catch (error) {
            if (Ke(error)) {
              m(E, "cmd_prompt_aborted");
              let messages_5 = [Ce({
                content: $W({
                  inputString: ie(command_10, trailingArgs_2),
                  precedingInputBlocks: precedingInputBlocks_3
                }),
                uuid: uuid_5
              })];
              if (!gte(o.abortController.signal.reason)) messages_5.push(OT({
                toolUse: !1,
                interruptedByShutdown: $E(o.abortController.signal)
              }));
              return {
                messages: messages_5,
                shouldQuery: !1,
                command: command_10
              };
            }
            return m(E, "cmd_prompt_threw"), {
              messages: [Ce({
                content: $W({
                  inputString: ie(command_10, trailingArgs_2),
                  precedingInputBlocks: precedingInputBlocks_3
                }),
                uuid: uuid_5
              }), Ce({
                content: `<local-command-stderr>${qt(bOe(error, command_10.name, o.session))}</local-command-stderr>`
              })],
              shouldQuery: !1,
              command: command_10
            };
          }
        }
    }
  } catch (error) {
    if (error instanceof Tj) return m(E, "cmd_malformed"), {
      messages: [Ce({
        content: $W({
          inputString: error.message,
          precedingInputBlocks: precedingInputBlocks_3
        })
      })],
      shouldQuery: !1,
      command: command_10
    };
    throw error;
  }
}
function ie(e, s) {
  let o = S9(e, s);
  return Y8(o.command, o.args);
}
function Ie(e, s) {
  return Y8(tn(Co(e)), gae(e, s) ? "***" : Y6(s));
}
function fe(e, s) {
  return e ? {
    messages: [],
    shouldQuery: !1
  } : s;
}
var et = 5;
function yt(trailingArgs_3, s, o, l) {
  if (s === void 0 && l === void 0) return {
    stacked: [],
    trailingArgs: trailingArgs_3,
    capped: !1
  };
  let stacked_2 = [],
    trailingArgs_4 = trailingArgs_3,
    g = s,
    capped_2 = !1;
  for (let b = 0;; b++) {
    let D = trailingArgs_4.trimStart();
    if (!D.startsWith("/")) break;
    if (b >= et) {
      capped_2 = !0;
      break;
    }
    let I = mE(D);
    if (!I) break;
    let L = g;
    if (g !== void 0) {
      let O = g.trimStart(),
        Q = O.startsWith("/") ? mE(O) : void 0;
      if (!Q || Q.commandName !== I.commandName) break;
      L = Q.args;
    }
    let R = Zs(I.commandName, o);
    if (!R || R.type !== "prompt" || R.context === "fork" || R.getContext !== void 0 || R.argsMayContainSlashCommands || R.userInvocable === !1 || !Qc(R) || HA(R)) break;
    if (trailingArgs_4 = I.args, g = L, l?.(R)) continue;
    stacked_2.push(R);
  }
  return {
    stacked: stacked_2,
    trailingArgs: trailingArgs_4,
    capped: capped_2
  };
}
function gto(e, s = "loading") {
  return [`<${Wg}>${e}</${Wg}>`, `<${mm}>${e}</${mm}>`, "<skill-format>true</skill-format>"].join(`
`);
}
function $Ko(e, s) {
  return e === gto(s);
}
function Xe(e, s) {
  return [`<${Wg}>${e}</${Wg}>`, `<${mm}>/${e}</${mm}>`, s ? `<command-args>${s}</command-args>` : null].filter(Boolean).join(`
`);
}
function Ye(e, s) {
  if (e.userInvocable !== !1) return Xe(e.name, s);
  if (e.loadedFrom === "skills" || e.loadedFrom === "syncedSkills" || e.loadedFrom === "plugin" || e.loadedFrom === "mcp" || e.loadedFrom === "memoryStore") return gto(e.name, e.progressMessage);
  return Xe(e.name, s);
}
async function Je(command_11, s, o) {
  let hookMessages = [],
    r = s ? `/${command_11.name} ${s}` : `/${command_11.name}`;
  try {
    for await (let f of ibr(command_11.source === "mcp" ? "mcp_prompt" : "slash_command", command_11.name, s, command_11.source, r, me(o).mode, o)) {
      if (f.message?.type === "progress") continue;
      if (f.blockingError) {
        let g = `UserPromptExpansion operation blocked by hook:
${f.blockingError.blockingError}`,
          resultText_12 = f.suppressOriginalPrompt ? g : `${g}

Original prompt: ${r}`;
        return {
          blocked: {
            messages: [$t(resultText_12, "warning", void 0, !0)],
            shouldQuery: !1,
            resultText: resultText_12,
            command: command_11
          }
        };
      }
      if (f.preventContinuation) {
        let g = f.stopReason ? `${kye}: ${f.stopReason}` : kye;
        return {
          blocked: {
            messages: [Ce({
              content: g,
              isMeta: !0
            }), $t(g, "warning", void 0, !0)],
            shouldQuery: !1,
            resultText: g,
            command: command_11
          }
        };
      }
      if (f.additionalContexts?.length) hookMessages.push(on({
        type: "hook_additional_context",
        content: f.additionalContexts,
        hookName: "UserPromptExpansion",
        toolUseID: `hook-${ae()}`,
        hookEvent: "UserPromptExpansion"
      }));
      if (f.message && !(f.message.type === "attachment" && f.message.attachment.type === "hook_success" && f.message.attachment.content === "")) hookMessages.push(f.message);
    }
  } catch (error) {
    if (!(error instanceof ul)) throw error;
    t("UserPromptExpansion hooks cancelled (control stream closed)");
  }
  return {
    hookMessages: hookMessages
  };
}
async function UKo(e, s, o, l, r = !1) {
  let f = Zs(e, o);
  if (!f) throw new Tj(`Unknown command: ${tn(e)}`);
  if (f.type !== "prompt") throw Error(`Unexpected ${f.type} command. Expected 'prompt' command. Use /${e} directly in the main conversation.`);
  return Oe(f, s, l, [], [], void 0, [], void 0, void 0, void 0, r);
}
async function Oe(command_12, planSlugSeed, o, l = [], r = [], uuid_6, g = [], k, origin_2, D, I = !1) {
  if (command_12.loadedFrom === "syncedSkills" && v8()) throw new Tj(`Unknown command: ${tn(command_12.name)}`);
  if (Oge(o) && !I) {
    let content = Ye(command_12, planSlugSeed),
      h = command_12.isMcp && command_12.loadedFrom !== "mcp",
      u = YG(command_12);
    if (command_12.disableModelInvocation || h || u) {
      let N = [h ? `"/${tn(command_12.name)}" is an MCP prompt and cannot run in coordinator mode: the coordinator does not load prompt content, and workers cannot invoke MCP prompts via the ${co} tool.` : `Skill "/${tn(command_12.name)}" is user-invocable only (${command_12.disableModelInvocation ? "disable-model-invocation" : "disabled for model invocation in settings"}) and cannot run in coordinator mode: the coordinator does not load skill content, and workers cannot invoke it via the ${co} tool.`];
      if (command_12.description) N.push(`Description: ${command_12.description}`);
      let B = Object.entries(command_12.subcommands ?? {}).filter(([, U]) => {
        let q = Zs(U, o.options.commands);
        return q !== void 0 && Qc(q) && !q.disableModelInvocation && !YG(q) && !(q.isMcp && q.loadedFrom !== "mcp");
      }).map(([U]) => U);
      if (B.length > 0) N.push(`Note: the subcommands ${B.map(item => `"/${tn(command_12.name)} ${tn(item)}"`).join(", ")} route to their own dedicated commands and DO still work when the user types them directly in the terminal (remote-control clients gate some commands separately).`);
      N.push(`
Do not instruct workers to invoke this via the ${co} tool \u2014 it will be refused. Tell the user that ${B.length > 0 ? `/${tn(command_12.name)} itself (beyond the subcommands above) is` : `the /${tn(command_12.name)} command is`} unavailable in coordinator mode. If \u2014 and only if \u2014 the underlying task is achievable with the tools workers actually hold, you may brief a worker to do that work directly; do not promise this otherwise.`);
      let W = [{
        type: "text",
        text: N.join(`
`)
      }];
      return {
        messages: [Ce({
          content: content,
          uuid: uuid_6,
          origin: origin_2
        }), ...De([Ce({
          content: Ue(r, l, W),
          isMeta: !0
        }), ...g])],
        shouldQuery: !0,
        disallowedTools: Op(command_12.disallowedTools ?? []),
        command: command_12
      };
    }
    let S = [`Skill "/${tn(command_12.name)}" is available for workers.`];
    if (command_12.description) S.push(`Description: ${command_12.description}`);
    if (command_12.whenToUse) S.push(`When to use: ${command_12.whenToUse}`);
    let F = await mHe(command_12);
    if (F.length > 0) S.push(`This skill grants workers additional tool permissions: ${F.map(tn).join(", ")}`);
    S.push(`
Instruct a worker to use this skill by including "Use the /${tn(command_12.name)} skill" in your Agent prompt. The worker has access to the Skill tool and will receive the skill's content and permissions when it invokes it.`);
    let H = [{
      type: "text",
      text: S.join(`
`)
    }];
    return {
      messages: [Ce({
        content: content,
        uuid: uuid_6,
        origin: origin_2
      }), ...De([Ce({
        content: Ue(r, l, H),
        isMeta: !0
      }), ...g])],
      shouldQuery: !0,
      disallowedTools: Op(command_12.disallowedTools ?? []),
      command: command_12
    };
  }
  let L = [],
    R = await GLn(command_12.name, await command_12.getPromptForCommand(planSlugSeed, {
      ...o,
      promptShellHandOff: L,
      ...((k || I) && {
        options: {
          ...o.options,
          ...(k && {
            modelScheduledOrigin: !0
          }),
          ...(I && {
            isSkillPreload: !0,
            readOnlySkillLoad: !0
          })
        }
      })
    })),
    O = (!bd("hooks") || a1(command_12.source)) && !I;
  if (command_12.hooks && O) {
    let A = Y();
    xe(o.sessionHooksRegistry, A, command_12.hooks, command_12.name, command_12.type === "prompt" ? command_12.skillRoot : void 0);
  }
  let Q = command_12.source ? `${command_12.source}:${command_12.name}` : command_12.name,
    z = R.filter(item => item.type === "text").map(item => item.text).join(`

`),
    method = qKe(command_12.name);
  if (!(I && method !== null)) KY(command_12.name, Q, z, o.agentId ?? null);
  if (method && !I) o.applyAttributionOp({
    kind: "recordVerification",
    method: method
  });
  o.options.activeSkill = HP(command_12);
  let content_2 = Ye(command_12, planSlugSeed),
    allowedTools_2 = I ? [] : Op(await mHe(command_12)),
    disallowedTools_2 = Op(command_12.disallowedTools ?? []);
  if (disallowedTools_2.length > 0) v3t(o.setToolPermissionContext, disallowedTools_2, "union");
  let content_3 = Ue(r, l, R),
    T = UNe(command_12) || I || k ? [] : await gve(BZ(R.filter(item => item.type === "text").map(item => item.text).join(" "), o, D ?? null, [], {
      now: () => new Date().toISOString(),
      uuid: () => ae()
    }, o.messages, "repl_main_thread", {
      planSlugSeed: planSlugSeed
    })),
    C = await Jwt(command_12, aA(), o);
  return {
    messages: [Ce({
      content: content_2,
      uuid: uuid_6,
      origin: origin_2
    }), ...De([Ce({
      content: content_3,
      isMeta: !0,
      ...(L.length > 0 && {
        promptShellHandOff: {
          agentId: o.agentId ?? null,
          commands: L
        }
      })
    }), ...(C ? [C] : []), ...T, ...g]), on({
      type: "command_permissions",
      allowedTools: allowedTools_2,
      model: gce(command_12.model)
    })],
    shouldQuery: !0,
    allowedTools: allowedTools_2,
    disallowedTools: disallowedTools_2,
    model: gce(command_12.model),
    effort: command_12.getEffort?.(planSlugSeed, o) ?? command_12.getDefaultEffort?.(planSlugSeed, o)?.value ?? command_12.effort,
    command: command_12
  };
}
function Ue(e, s, o) {
  return e.length > 0 || s.length > 0 ? [...e, ...s, ...o] : o;
}
function Ze(e, s, o) {
  return e.applyMessageOp({
    type: "insert-after-uuid",
    uuid: s.uuid,
    messages: o.messages
  }), {
    ...o,
    messages: [],
    settledInPlace: !0
  };
}
function De(e) {
  return e.map(item => item.type === "user" ? {
    ...item,
    turnCompanion: !0
  } : item);
}
export { Ywt, Xwt, bOe, FKo, gto, $Ko, UKo };