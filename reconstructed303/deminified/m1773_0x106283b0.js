// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { kd, Ve, Ye, H } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Nn } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { g } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { bn, vu, $s, WJe, We, xt } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { mme, yOr, jNs } from "B:/~BUN/root/chunk-hkc0g0wr.js";
import { O6n, US, czs, yge, E } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { pn, Fc, wQ, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { di } from "B:/~BUN/root/chunk-2zk4vqr8.js";
import { es } from "B:/~BUN/root/chunk-pjgzz98k.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { Xg } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { xze, vhe, Tne, Xpn, TBo, P7e, yUr as decisionReason_7, O7e as decisionReason_4 } from "B:/~BUN/root/chunk-8z3a373v.js";
import { Icn, $x } from "B:/~BUN/root/chunk-jkv8n5r0.js";
import { YC } from "B:/~BUN/root/chunk-qp0344nb.js";
import { Ne } from "B:/~BUN/root/chunk-nvdqbkrt.js";
import { Eae, le } from "B:/~BUN/root/chunk-e7tskyjv.js";
import { HBn } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { Hz, pq, c9t, tat, Uue, $ps, Ups, Bue, rxt, yao, tgr, jAe, fgr, ggr, CYe, zue, Gue, L9t, gC, xYe, Fxt, rXt, CLn, ALn, s6, i6, jat, sw, Tse, zat, Gxt, xLn, ET, tdo, td, khs, SNn, V0, Dlt, Tq } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { OY } from "B:/~BUN/root/chunk-708tgcbz.js";
import { SM, c9e, Rj } from "B:/~BUN/root/chunk-c44qc88s.js";
import { b2n, JLt, c3, FC, Bg } from "B:/~BUN/root/chunk-ses0c36n.js";
import { Xo } from "B:/~BUN/root/chunk-9tkh434c.js";
import { NBe } from "B:/~BUN/root/chunk-m3ka5wpr.js";
import { Wq } from "B:/~BUN/root/chunk-351qj2sm.js";
import { yve } from "B:/~BUN/root/chunk-f06s8ws5.js";
import { vU } from "B:/~BUN/root/chunk-nj6es8gv.js";
import { Lkn, Nkn, sQo } from "B:/~BUN/root/chunk-w4ekna5h.js";
import { $L } from "B:/~BUN/root/chunk-62ynkm2y.js";
import { dEt } from "B:/~BUN/root/chunk-2cqyj1va.js";
import { MU } from "B:/~BUN/root/chunk-0k9rq8e2.js";
import { tl } from "B:/~BUN/root/chunk-k8727s7d.js";
import { VBe } from "B:/~BUN/root/chunk-53nfeb6x.js";
import { Nu } from "B:/~BUN/root/chunk-hdc8p5sh.js";
import { mb } from "B:/~BUN/root/chunk-97bdq2mm.js";
import { Cc } from "B:/~BUN/root/chunk-b0487zs4.js";
import { Xx, o, M, oe, u, $e, fe, U, C } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { randomUUID as Me } from "crypto";
function zor(r, e, m) {
  if (a.CLAUDE_CODE_DISABLE_PERMISSION_PROMPT_NOTIFY_HOOKS) return () => {};
  let n = setTimeout((d, storageV5, credentials) => {
    try {
      V0(Hz(), {
        message: `Claude needs your permission to use ${d}`,
        notificationType: "permission_prompt"
      }, {
        storageV5: storageV5,
        credentials: credentials
      }).catch(() => {});
    } catch {}
  }, L9t, r, e, m);
  return n.unref(), () => clearTimeout(n);
}
var co = f(() => u({
    tool_name: o().describe("The name of the tool requesting permission"),
    input: fe(o(), oe()).describe("The input for the tool"),
    tool_use_id: o().optional().describe("The unique tool use request ID")
  })),
  me = f(() => U(["user_temporary", "user_permanent", "user_reject"]).optional().catch(void 0)),
  de = r => u({
    behavior: C("allow"),
    updatedInput: fe(o(), oe()).optional(),
    updatedPermissions: tat(r, "SDK host"),
    toolUseID: o().optional(),
    decisionClassification: me()
  }),
  ce = f(() => u({
    behavior: C("deny"),
    message: o(),
    interrupt: M().optional(),
    toolUseID: o().optional(),
    decisionClassification: me()
  })),
  aqe = f(() => $e([de("refused"), ce()])),
  Se = f(() => $e([de("cut"), ce()]));
function lqe(r) {
  return r === "strict" ? Se() : aqe();
}
var Wor = `Expected {behavior: 'allow', updatedInput?: object} or {behavior: 'deny', message: string}. ${c9t}`;
function j(r, e, m, n, d) {
  if (n.forRemoteExecution === !0 || US(n)) return;
  let s = r && c3(r, e.suppressesAlwaysAllowRule?.(m) === !0 || d ? void 0 : JLt(e, m), le(n));
  if (s && e.suppressesAllPermissionUpdates?.(m) === !0) {
    let p = i6(s);
    return p.length > 0 ? p : void 0;
  }
  return s && (e.suppressesAlwaysAllowRule?.(m) === !0 || d) ? s6(s, e, le(n)) : s;
}
function KVt(r, e, m, input, d, s) {
  switch (r.kind) {
    case "launcher":
      {
        let p = j(e, m, input, d, s);
        if (p?.length) d.setSessionToolPermissionContext(h => SM(h, p)), setImmediate(() => {
          $L.emit();
        }), Rj(p, d.storageV5).catch(l);
        return {
          applied: p ?? [],
          lostTightenings: 0
        };
      }
    case "strict":
      return tgr(r, e, {
        vetoed: () => !1,
        strip: p => j(p, m, input, d, s) ?? [],
        toolName: Cc(m),
        input: input,
        setContext: d.setSessionToolPermissionContext
      });
  }
}
function VLe(r, toolResult, m, n, d, s = m, p = !1) {
  let decisionReason = {
    type: "permissionPromptTool",
    permissionPromptToolName: m.name,
    toolResult: toolResult
  };
  if (toolResult.behavior === "allow") {
    let _ = toolResult.updatedPermissions?.findLast(R => R.type === "setMode")?.mode;
    if (_ === "default" || _ === "acceptEdits") WJe(_);
    switch (r.kind) {
      case "launcher":
        {
          KVt(r, toolResult.updatedPermissions, s, n, d, p);
          let updatedInput = toolResult.updatedInput && Object.keys(toolResult.updatedInput).length > 0 ? toolResult.updatedInput : pq(s.name, n);
          return {
            ...toolResult,
            updatedInput: updatedInput,
            decisionReason: decisionReason
          };
        }
      case "strict":
        {
          let R = $ps(toolResult.updatedInput, n, s),
            c = R === void 0 ? Ups(r, toolResult.updatedInput, n, s) : void 0,
            updatedInput_2 = R ?? c?.input;
          if (updatedInput_2 === void 0) return Bue(s.name, toolResult.toolUseID);
          if (updatedInput_2 !== n && Bg(le(d), s, updatedInput_2, "deny") !== null) return c?.onRefused("deny_rule"), Bue(s.name, toolResult.toolUseID);
          let {
            lostTightenings: lostTightenings
          } = KVt(r, toolResult.updatedPermissions, s, c?.input ?? n, d, p);
          if (lostTightenings > 0) return rxt(s.name, toolResult.toolUseID);
          return {
            ...toolResult,
            updatedInput: updatedInput_2,
            decisionReason: decisionReason
          };
        }
    }
  } else if (toolResult.behavior === "deny" && toolResult.interrupt) t(`SDK permission prompt deny+interrupt: tool=${m.name} message=${toolResult.message}`), $x(d.abortController).abort();
  return {
    ...toolResult,
    decisionReason: decisionReason,
    decideLocation: "ask-path"
  };
}
var Ee = "tengu_cinder_swift";
function jor() {
  return E(Ee, "off") === "interrupt";
}
function Q(r, e) {
  try {
    return r.getToolUseSummary?.(e) ?? r.getActivityDescription?.(e) ?? "";
  } catch (error) {
    return t(`describeToolUseForPush failed: ${error}`, {
      level: "error"
    }), "";
  }
}
function ue(r, e) {
  return pe(r, e)?.card;
}
function pe(r, e) {
  if (!r.requiresUserInteraction?.()) return;
  switch (r.name) {
    case Xo:
      {
        let m = Array.isArray(e?.questions) ? e.questions : [],
          n = m[0],
          d = n?.header || n?.question,
          s = m.length > 1 ? ` (+${m.length - 1} more)` : "";
        return {
          label: "Question",
          body: d ? d + s : "Tap to answer"
        };
      }
    case mb:
      return {
        label: "Plan",
        body: "Plan ready for review"
      };
    case VBe:
      return {
        label: OY(r.name),
        body: ""
      };
    case yve:
      {
        let m = typeof e?.reason === "string" ? es(wQ(Fc(e.reason)), 200).replace(/[\s.!?]+$/u, "") : "";
        return {
          label: "Claude in Chrome",
          body: m ? `Let Claude use your browser for ${m}? Open this task on your computer.` : "Let Claude use your browser? Open this task on your computer.",
          card: {
            title: "Set up Claude in Chrome on your computer",
            description: "Claude wants to use your browser through Claude in Chrome. To set it up, open this task in the Claude app on a computer; any answer here skips it."
          }
        };
      }
    default:
      return {
        label: OY(r.name),
        body: ""
      };
  }
}
function he(r, input_2, tool_use_id, suppressed_request_id, d) {
  let decision_reason_code = Tne(d?.decisionReason),
    p = {
      ...(d?.decisionReason && {
        decision_reason_type: d.decisionReason.type
      }),
      ...(decision_reason_code && {
        decision_reason_code: decision_reason_code
      })
    },
    h = d?.hostDisplay ? {
      label: d.hostDisplay.displayName,
      body: ""
    } : pe(r, input_2);
  if (h) return {
    tool_name: r.name,
    display_tool_name: h.label,
    action_description: h.body,
    raw_command: void 0,
    tool_use_id: tool_use_id,
    request_id: "",
    ...(suppressed_request_id && {
      suppressed_request_id: suppressed_request_id
    }),
    input: input_2,
    ...p
  };
  let raw_command = (r.name === We || r.name === xt) && typeof input_2.command === "string" ? wQ(input_2.command) : void 0,
    action_description = raw_command !== void 0 ? typeof input_2.description === "string" && input_2.description && !Wq(r) && !Nu(input_2) ? wQ(input_2.description) : es(raw_command, YC) : wQ(Q(r, input_2)),
    c = d?.tapToOpenOnly === !0;
  return {
    tool_name: r.name,
    display_tool_name: OY(r.name),
    action_description: action_description,
    raw_command: raw_command,
    tool_use_id: tool_use_id,
    request_id: c ? "" : suppressed_request_id,
    ...(c && suppressed_request_id && {
      suppressed_request_id: suppressed_request_id
    }),
    input: input_2,
    ...p
  };
}
import { isDeepStrictEqual as ve } from "util";
import { isDeepStrictEqual as ye } from "util";
var Oe = 3;
function ge(r) {
  let {
      promise: e,
      resolve: resolve
    } = Promise.withResolvers(),
    {
      ask: ask,
      tool: tool,
      input: input_3,
      toolUseContext: toolUseContext,
      toolUseID: toolUseID,
      isWaiting: isWaiting
    } = r;
  if (!E("tengu_drifting_dream", !1) || r.answers.kind !== "launcher" || r.forced || toolUseContext.hookAskFloor === !0 || ask.personOnly === !0 || toolUseContext.forRemoteExecution === !0 || FC(Cc(tool)) || dEt(ask, tool, toolUseContext)) return {
    allowed: e,
    stop: () => {}
  };
  let R = 0,
    c = A => {
      if (!isWaiting()) return;
      let y = le(toolUseContext);
      if ($s(Xg(tool, y), y.servedCall === !0)) return;
      let w = ++R,
        S = Eae(toolUseContext);
      sw(tool, input_3, {
        ...toolUseContext,
        permissionRound: void 0
      }, r.assistantMessage, toolUseID).then(T => {
        if (!isWaiting() || w !== R) return;
        if (!ye(Eae(toolUseContext), S)) {
          if (A < Oe) c(A + 1);
          return;
        }
        if (T.behavior === "allow" && x(T.decisionReason)) stop(), resolve(T);
      }).catch(T => {
        if (!Ve(T)) l(Ye(H(T), "permissionRecheckSignal: hasPermissionsToUseTool failed for a waiting can_use_tool ask"));
      });
    },
    stop = $L.subscribe(() => c(0));
  if (!ye(Eae(toolUseContext), r.askedUnder)) c(0);
  return {
    allowed: e,
    stop: stop
  };
}
function x(r) {
  switch (r?.type) {
    case "rule":
      return !0;
    case "mode":
      return r.mode === "default" || r.mode === "acceptEdits" || r.mode === "bypassPermissions";
    case "subcommandResults":
      {
        let e = [...r.reasons.values()].filter(item => item.behavior !== "allow" || item.decisionReason?.type !== "other" || item.decisionReason.reason !== vhe);
        return e.length > 0 && e.every(item => item.behavior === "allow" && x(item.decisionReason));
      }
    default:
      return !1;
  }
}
function Pe(r) {
  let decisionReason_2 = r.ask.decisionReason;
  if (decisionReason_2 === void 0 ? r.tool.mcpInfo === void 0 : decisionReason_2.type !== "rule") return;
  try {
    if (_e(r)) return !1;
  } catch (error) {
    if (!Ve(error)) l(error);
    return !1;
  }
  return De(r);
}
function rQo(r) {
  return r.subtype === "can_use_tool" ? {
    ...r,
    server_policy_ask_only: void 0
  } : r;
}
function _e({
  tool: tool_2,
  effectiveInput: effectiveInput,
  ask: ask_2,
  toolUseContext: toolUseContext_2,
  forceDecision: forceDecision
}) {
  let decisionReason_3 = ask_2.decisionReason;
  return tool_2.mcpInfo === void 0 || !(decisionReason_3 === void 0 || zat(decisionReason_3)) || !ke(ask_2, ["decisionReason"]) || forceDecision !== void 0 || toolUseContext_2.hookAskFloor === !0 || toolUseContext_2.forRemoteExecution === !0 || FC(Cc(tool_2)) || dEt(ask_2, tool_2, toolUseContext_2) || tool_2.suppressesAlwaysAllowRule?.(effectiveInput) === !0 || tool_2.suppressesAllPermissionUpdates?.(effectiveInput) === !0 || tool_2.ignoresWholeToolAllowRule?.(effectiveInput) === !0 || toolUseContext_2.remoteCall !== void 0 || toolUseContext_2.requireCanUseTool === !0 || mme(toolUseContext_2.session, tool_2.name) !== void 0 || tool_2.askInputPreparer !== void 0 || He(tool_2, toolUseContext_2) || Gxt(decisionReason_3, tool_2, effectiveInput, toolUseContext_2) || Le(tool_2, toolUseContext_2);
}
async function De(r) {
  try {
    let e = Eae(r.toolUseContext);
    return (await Ce(r)) && ve(Eae(r.toolUseContext), e) && !_e(r);
  } catch (error) {
    if (!Ve(error)) l(error);
    return !1;
  }
}
async function Ce({
  tool: tool_3,
  effectiveInput: effectiveInput_2,
  toolUseContext: toolUseContext_3
}) {
  let n = !1,
    d = await tdo({
      ...tool_3,
      checkPermissions: async (s, p) => {
        let h = await tool_3.checkPermissions(s, p);
        return n ||= h.behavior === "ask", h;
      }
    }, effectiveInput_2, toolUseContext_3);
  return !n && (d.behavior === "allow" ? x(d.decisionReason) : d.behavior === "ask" && ke(d, []));
}
var Ie = ["behavior", "message", "suggestions"];
function ke(r, e) {
  return Object.entries(r).every(([m, n]) => n === void 0 || Ie.includes(m) || e.includes(m));
}
function Le(r, e) {
  return Ne().hooksRespawns.size > 0 || tl("tool.check", {
    ...NBe(r),
    agentId: e.agentId
  }, MU("tool.check")) || Dlt("PermissionRequest") !== "none" || vU("PermissionRequest") || Tq("PermissionRequest", e.sessionHooksRegistry, gC(e, "PermissionRequest", e.session.id));
}
function He(r, e) {
  let m = le(e);
  return $s(Xg(r, m), m.servedCall === !0);
}
function oQo(answers, e) {
  let m = async (tool_4, input_5, toolUseContext_4, assistantMessage, h, forceDecision_2) => {
    let askedUnder = Eae(toolUseContext_4),
      ask_3;
    switch (answers.kind) {
      case "launcher":
        ask_3 = forceDecision_2 ?? (await sw(tool_4, input_5, toolUseContext_4, assistantMessage, h));
        break;
      case "strict":
        ask_3 = forceDecision_2 ?? (await Tse(tool_4, input_5, toolUseContext_4, assistantMessage, h, answers, void 0));
        break;
    }
    if (ask_3.behavior === "allow") return ask_3;
    if (ask_3.behavior === "deny") {
      if (bn() && !toolUseContext_4.abortController.signal.aborted) return vu();
      if (!xze(ask_3)) e.emitPermissionDenied(tool_4.name, h, toolUseContext_4.agentId, ask_3);
      return ask_3;
    }
    let P = Pe({
        tool: tool_4,
        effectiveInput: ask_3.updatedInput ?? input_5,
        ask: ask_3,
        toolUseContext: toolUseContext_4,
        forceDecision: forceDecision_2
      }),
      server_policy_ask_only = typeof P === "object" ? await P : P;
    if (toolUseContext_4.abortController.signal.aborted) return {
      behavior: "deny",
      message: "Tool permission request aborted",
      toolUseID: h,
      decisionReason: decisionReason_4,
      decideLocation: "ask-path"
    };
    if (bn()) return vu();
    if (tool_4.askInputPreparer !== void 0 && !weakSet.has(ask_3) && toolUseContext_4.forRemoteExecution !== !0) {
      let D = await tool_4.askInputPreparer(ask_3.updatedInput ?? input_5, toolUseContext_4, h);
      if (D !== void 0) return qe(m, answers, D, ask_3, tool_4, input_5, toolUseContext_4, assistantMessage, h);
    }
    let input_4 = ask_3.updatedInput ?? input_5,
      w = ask_3.suggestions;
    if (tool_4.name === We && typeof input_4.command === "string" && w?.length && !w.some(item => item.destination !== "session")) w = [...rXt(input_4.command), ...w];
    let abortController = new AbortController(),
      T = toolUseContext_4.abortController.signal,
      v = !1,
      Z = () => {
        if (!bn()) v = !0;
        abortController.abort(T.reason);
      };
    T.addEventListener("abort", Z, {
      once: !0
    });
    let I = Me(),
      ee = czs(toolUseContext_4.agentContext),
      re,
      O,
      B = !1,
      ie;
    try {
      let q = (ask_3.personOnly === !0 || weakSet.has(ask_3) ? Promise.resolve(void 0) : dqe(answers, tool_4, h, input_4, toolUseContext_4, w, ask_3, () => B || T.aborted)).then(outcome => ({
        source: "hook",
        outcome: outcome
      }));
      q.catch(() => {});
      let decisionReason_5 = ask_3.decisionReason,
        tapToOpenOnly = ask_3.localDisplayOnly === !0 || ask_3.personOnly === !0 && decisionReason_5?.type === "classifier";
      if (e.promptShown) {
        let b = he(tool_4, input_4, h, I, {
          tapToOpenOnly: tapToOpenOnly,
          hostDisplay: ask_3.hostDisplay,
          decisionReason: decisionReason_5
        });
        re = ee, e.promptShown(I, b, ee, yge(toolUseContext_4.agentContext));
      }
      let z = td(decisionReason_5),
        Re = tool_4.name === We || tool_4.name === xt,
        be = weakMap.get(ask_3) || (ask_3.metadata && "command" in ask_3.metadata ? ask_3.metadata.command.description : void 0) || (Re && typeof input_4.command === "string" ? typeof input_4.description === "string" && input_4.description ? wQ(input_4.description) : es(wQ(input_4.command), YC) : Q(tool_4, input_4)) || void 0,
        K = ue(tool_4, input_4),
        Y = Wq(tool_4) || tool_4.name === xt && Nu(input_4) ? void 0 : be ?? K?.description,
        decision_reason = jAe(decisionReason_5) ?? (decisionReason_5?.type === "subcommandResults" && z ? td(decisionReason_5, b => !b.classifierApprovable && !fgr(b))?.reason ?? (fgr(z) ? void 0 : z.reason) : void 0),
        hostDisplay = ask_3.hostDisplay,
        V = tapToOpenOnly ? di(pn(decision_reason ?? "")) : "",
        description = hostDisplay ? hostDisplay.description : V && Y && ask_3.localDisplayOnly !== !0 ? `${Y}
${V}` : V || Y,
        Te = FC(Cc(tool_4)),
        te = zor(OY(tool_4.name), toolUseContext_4.storageV5, toolUseContext_4.credentials);
      if (hostDisplay) g("permission_host_worded_ask");
      let F = e.request({
        subtype: "can_use_tool",
        tool_name: tool_4.name,
        ...(tool_4.mcpInfo && {
          mcp_server: HBn(tool_4.mcpInfo)
        }),
        ...(K && {
          title: K.title
        }),
        display_name: hostDisplay?.displayName ?? OY(tool_4.name),
        input: input_4,
        ...(hostDisplay && {
          title: hostDisplay.title
        }),
        ...(description && {
          description: description
        }),
        ...(Te && {
          tool_kind: "browser"
        }),
        permission_suggestions: w,
        blocked_path: ask_3.blockedPath,
        decision_reason: decision_reason,
        decision_reason_type: decisionReason_5?.type,
        decision_reason_code: Tne(decisionReason_5),
        decision_reason_rule_source: decisionReason_5?.type === "rule" ? decisionReason_5.rule.source : void 0,
        ...(decisionReason_5?.type === "hook" && {
          decision_reason_hook_event: sQo(decisionReason_5.hookName, tool_4.name),
          decision_reason_hook_source: Lkn(decisionReason_5.hookSource),
          decision_reason_hook_plugin_id: Nkn(decisionReason_5.hookPluginId)
        }),
        server_policy_ask_only: server_policy_ask_only,
        ...(ask_3.matchedAskRule && {
          matched_ask_rule: {
            source: ask_3.matchedAskRule.source,
            tool_name: ask_3.matchedAskRule.ruleValue.toolName,
            ...(ask_3.matchedAskRule.ruleValue.ruleContent !== void 0 && {
              rule_content: ask_3.matchedAskRule.ruleValue.ruleContent
            })
          }
        }),
        classifier_approvable: z ? !td(decisionReason_5, b => !b.classifierApprovable) : void 0,
        ...((decisionReason_5?.type === "rule" || decisionReason_5?.type === "other" && decisionReason_5.reason === ALn) && tool_4.mcpInfo?.effectiveMaxPermission === "ask" && {
          decision_reason_code: "org_ask_ceiling"
        }),
        tool_use_id: h,
        agent_id: toolUseContext_4.agentId,
        plugin: O6n(toolUseContext_4) ?? (US(toolUseContext_4) ? "" : void 0),
        suppress_always_allow_rule: ask_3.suppressAlwaysAllowRule || tool_4.suppressesAlwaysAllowRule?.(input_4, !E("tengu_valiant_crayon", !1)) === !0 && !(w ?? []).some(item => (item.type === "addRules" || item.type === "replaceRules") && item.behavior === "allow" && item.rules.some(item => item.ruleContent !== void 0)) || void 0,
        default_to_no: ask_3.defaultToNo || void 0,
        provenance_prompt_line: ask_3.provenancePromptLine,
        requires_user_interaction: tool_4.requiresUserInteraction?.() || tapToOpenOnly || hostDisplay !== void 0 || void 0
      }, abortController.signal, I).then(result => ({
        source: "sdk",
        result: result
      }));
      if (F.catch(() => {}), F.then(() => {
        B = !0;
      }, () => {
        B = !0;
      }), e.isPending(I)) O = {
        logContext: {
          tool: tool_4,
          input: input_4,
          messageId: assistantMessage.message.id,
          toolUseID: h,
          permissionMode: le(toolUseContext_4).mode,
          agentContext: toolUseContext_4.agentContext,
          mcpClients: toolUseContext_4.options.mcpClients,
          appliedAllowUpdates: b => {
            switch (answers.kind) {
              case "launcher":
                return j(b, tool_4, input_4, toolUseContext_4, ask_3.suppressAlwaysAllowRule === !0);
              case "strict":
                return;
            }
          }
        },
        shownAtMs: Date.now()
      }, khs(O.logContext, decisionReason_5?.type);
      F.then(te, te);
      let N = await Promise.race([q, F]);
      if (N.source === "hook") {
        if (N.outcome) {
          if (bn() && !v) await vu();
          if (abortController.abort(), O) SNn(O.logContext, {
            kind: "hook",
            behavior: N.outcome.decision.behavior === "allow" ? "allow" : "deny",
            permanent: N.outcome.permanent
          }, O.shownAtMs);
          if (N.outcome.interrupt) t(`Hook interrupt: tool=${tool_4.name} hookMessage=${N.outcome.decision.message}`), $x(toolUseContext_4.abortController).abort();
          return N.outcome.decision;
        }
        let b = ge({
          answers: answers,
          ask: ask_3,
          forced: forceDecision_2 !== void 0,
          askedUnder: askedUnder,
          tool: tool_4,
          input: input_5,
          toolUseContext: toolUseContext_4,
          assistantMessage: assistantMessage,
          toolUseID: h,
          isWaiting: () => e.isPending(I) && !T.aborted
        });
        ie = b.stop;
        let W = await Promise.race([F.then(() => {
          return;
        }), b.allowed]);
        if (W !== void 0 && e.isPending(I)) {
          if (bn() && !v) await vu();
          if (abortController.abort(), CLn(toolUseContext_4, h), O) SNn(O.logContext, {
            kind: "recheck"
          }, O.shownAtMs);
          return W;
        }
      }
      let answer = N.source === "hook" ? (await F).result : N.result;
      if (O) SNn(O.logContext, {
        kind: "host_answer",
        answer: answer
      }, O.shownAtMs);
      let J = VLe(answers, answer, tool_4, input_4, toolUseContext_4, tool_4, ask_3.suppressAlwaysAllowRule === !0);
      if (J.behavior === "allow" && e.answeredAtHostDialog(I) && toolUseContext_4.forRemoteExecution !== !0 && yOr()) jNs(toolUseContext_4.session, h, {
        toolName: tool_4.name,
        input: J.updatedInput ?? input_4
      });
      return J;
    } catch (error) {
      if (bn() && e.isPending(I)) await vu();
      if (e.interruptedAtStreamClose(I) && jor()) {
        try {
          i("tengu_auq_park_interrupted_at_stream_close", {
            stream_closed: error instanceof kd
          }), t(`Interrupting parked AskUserQuestion toolUseID=${h} at stream close (deny skipped; turn aborts as shutdown)`);
        } catch {}
        throw error;
      }
      let message = yao(answers, error, tool_4.name),
        decisionReason_6 = decisionReason_7;
      if (error instanceof Xx) t(`canUseTool returned a schema-invalid permission result for ${tool_4.name}: ${error.message.slice(0, 2000)}`, {
        level: "error"
      }), message = `The canUseTool callback returned an invalid permission result. ${Wor}`, decisionReason_6 = P7e;else if (error instanceof kd) decisionReason_6 = TBo;else if (Ve(error) && T.aborted) {
        if (message = "Tool permission request aborted", decisionReason_6 = decisionReason_4, O && !Icn(T)) SNn(O.logContext, {
          kind: "turn_aborted"
        }, O.shownAtMs);
      }
      return {
        behavior: "deny",
        message: message,
        toolUseID: h,
        decisionReason: decisionReason_6,
        decideLocation: "ask-path"
      };
    } finally {
      ie?.(), e.promptSettled(I, re), T.removeEventListener("abort", Z);
    }
  };
  return CYe("callback", m, () => !0);
}
var weakSet = new WeakSet(),
  weakMap = new WeakMap();
async function qe(r, e, m, n, d, s, p, h, toolUseID_2) {
  let R = p.abortController.signal,
    c = () => ({
      behavior: "deny",
      message: "Tool permission request aborted",
      toolUseID: toolUseID_2,
      decisionReason: decisionReason_4,
      decideLocation: "ask-path"
    });
  if (n.personOnly !== !0) {
    let S;
    try {
      S = await dqe(e, d, toolUseID_2, n.updatedInput ?? s, p, n.suggestions, n, () => R.aborted);
    } catch (error) {
      return R.aborted ? c() : {
        behavior: "deny",
        message: yao(e, error, d.name),
        toolUseID: toolUseID_2,
        decisionReason: decisionReason_7,
        decideLocation: "ask-path"
      };
    }
    if (S !== void 0) {
      if (bn() && !R.aborted) return vu();
      if (S.interrupt) $x(p.abortController).abort();
      return S.decision;
    }
  }
  let P = await m.prepare();
  if (R.aborted) {
    if (!("error" in P)) P.release();
    return c();
  }
  if ("error" in P) return {
    behavior: "deny",
    message: P.error,
    toolUseID: toolUseID_2,
    decisionReason: {
      type: "other",
      reason: "files not attached"
    },
    decideLocation: "ask-path"
  };
  let A = {
    ...ggr(n, P.input),
    updatedInput: P.input
  };
  weakSet.add(A), weakMap.set(A, P.description);
  let y;
  try {
    y = await r(d, s, p, h, toolUseID_2, A);
  } catch (error) {
    throw P.release(), error;
  }
  if (y.behavior !== "allow") return P.release(), y;
  let updatedInput_3 = y.updatedInput !== void 0 && Object.keys(y.updatedInput).length > 0 ? y.updatedInput : P.input;
  if (!Nn(updatedInput_3.files, P.input.files)) return P.release(), {
    behavior: "deny",
    message: `The approval for ${d.name} changed the files to attach, which cannot be applied. Call it again with the files you want attached.`,
    toolUseID: toolUseID_2,
    decisionReason: {
      type: "other",
      reason: "approval changed the files"
    },
    decideLocation: "ask-path"
  };
  return {
    ...y,
    updatedInput: updatedInput_3
  };
}
async function dqe(r, e, toolUseId, n, d, s, p, h) {
  if (d.forRemoteExecution === !0) return;
  let mode = le(d).mode,
    R = xYe(e.name, toolUseId, n, d, mode, s, d.abortController.signal);
  for await (let c of R) if (c.permissionRequestResult && (c.permissionRequestResult.behavior === "allow" || c.permissionRequestResult.behavior === "deny")) {
    let permissionRequestResult = c.permissionRequestResult;
    if (permissionRequestResult.behavior === "allow") {
      let A = permissionRequestResult.updatedInput;
      switch (r.kind) {
        case "launcher":
          break;
        case "strict":
          if (!Uue(A, n)) return {
            decision: Bue(e.name, toolUseId),
            interrupt: !1,
            permanent: !1
          };
          A = void 0;
          break;
      }
      if (zue(e, n, A, !0)) return {
        decision: Gue(e, "PermissionRequest"),
        interrupt: !1,
        permanent: !1
      };
      let y = await Fxt(e, A, n, v => e.validateInput?.(v, {
        ...d,
        toolUseId: toolUseId
      }));
      if (y.deny !== void 0) return {
        decision: y.deny,
        interrupt: !1,
        permanent: !1
      };
      A = y.input;
      let updatedInput_4 = A || n;
      if (A) {
        let v = jat(await ET(e, updatedInput_4, {
          ...d,
          toolUseId: toolUseId,
          permissionRound: void 0
        }, {
          hookUpdatedInput: A
        }), e.name);
        if (v) return {
          decision: v.behavior === "ask" ? {
            behavior: "deny",
            message: v.message,
            decisionReason: v.decisionReason ?? Xpn,
            decideLocation: "ask-path"
          } : {
            ...v,
            decideLocation: "ask-path"
          },
          interrupt: !1,
          permanent: !1
        };
      }
      if (p.hostDisplay !== void 0 || xLn(e, A)) return;
      let {
        applied: applied,
        lostTightenings: lostTightenings_2
      } = h() ? {
        applied: [],
        lostTightenings: 0
      } : KVt(r, permissionRequestResult.updatedPermissions && b2n(permissionRequestResult.updatedPermissions, le(d)), e, n, d, p.suppressAlwaysAllowRule === !0);
      if (lostTightenings_2 > 0) return;
      return {
        decision: {
          behavior: "allow",
          updatedInput: updatedInput_4,
          userModified: !1,
          decisionReason: {
            type: "hook",
            hookName: "PermissionRequest"
          }
        },
        interrupt: !1,
        permanent: applied.some(item => c9e(item.destination))
      };
    } else return {
      decision: {
        behavior: "deny",
        message: permissionRequestResult.message || "Permission denied by PermissionRequest hook",
        decisionReason: {
          type: "hook",
          hookName: "PermissionRequest"
        },
        decideLocation: "ask-path"
      },
      interrupt: permissionRequestResult.interrupt === !0,
      permanent: !1
    };
  }
  return;
}
export { jor, aqe, lqe, Wor, KVt, VLe, zor, rQo, oQo, dqe };