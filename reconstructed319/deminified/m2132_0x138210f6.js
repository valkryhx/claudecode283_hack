// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { v0 } from "B:/~BUN/root/chunk-game8aqv.js";
import { du, We, qe, F } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g, m } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { tS, DIr, p8i, zRe, ote, v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Dh, P5 } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { ai } from "B:/~BUN/root/chunk-1g25msn4.js";
import { Os } from "B:/~BUN/root/chunk-bkfncj77.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { wAe, i0r, mH, na } from "B:/~BUN/root/chunk-5az22yft.js";
import { IUt } from "B:/~BUN/root/chunk-grwykqvw.js";
import { Xd } from "B:/~BUN/root/chunk-q8eknvfd.js";
import { ln, Id } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { ewe, Zie, kNr, Hpe, wGn, RHe, iUs, Zbt, Hln as decisionReason_9, AHe as decisionReason_6 } from "B:/~BUN/root/chunk-r8p1hzqw.js";
import { fi } from "B:/~BUN/root/chunk-sy1h8mf0.js";
import { _n, jd, yo, n_t } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { jDr, xR } from "B:/~BUN/root/chunk-vmcmhkh2.js";
import { Me } from "B:/~BUN/root/chunk-9kvvd0hy.js";
import { zf } from "B:/~BUN/root/chunk-wxhfn3za.js";
import { FCe, Pzi, Ozi } from "B:/~BUN/root/chunk-y1b1g4ac.js";
import { Ae } from "B:/~BUN/root/chunk-eds8xkh8.js";
import { jue, se } from "B:/~BUN/root/chunk-9bs2y8fc.js";
import { E5e, VJr, s6, i2, xTn, L5e, K1e, Ggi, Vgi, N5e, t3t, oZo, n3t, gyi, K7r, wdt, Rre, Are, gb, q5e, i5t, GCn, eL, xcr, WQ, g6, HPt, QCn, $Pt, Kw, i8e, a8e, _5t, eRn, Sx, kts, al, eki, Uur, T$, Dde, C$ } from "B:/~BUN/root/chunk-27h4st9h.js";
import { iQ } from "B:/~BUN/root/chunk-az86sdh0.js";
import { lTr, Mtn, yee, Vc, X_, vFn, Wf } from "B:/~BUN/root/chunk-detjgwj4.js";
import { Ov } from "B:/~BUN/root/chunk-2r9r3hfm.js";
import { yD, PGe, jq } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { ysr } from "B:/~BUN/root/chunk-z6x3rhe7.js";
import { yEr } from "B:/~BUN/root/chunk-s9vv4h32.js";
import { cs } from "B:/~BUN/root/chunk-kfm993xq.js";
import { JZ } from "B:/~BUN/root/chunk-7thhw21a.js";
import { OPn } from "B:/~BUN/root/chunk-kexqfgtm.js";
import { jP } from "B:/~BUN/root/chunk-gknte1ng.js";
import { V$ } from "B:/~BUN/root/chunk-kfnabvp7.js";
import { vq } from "B:/~BUN/root/chunk-kk81ayzj.js";
import { b0e } from "B:/~BUN/root/chunk-y7em5h10.js";
import { ODn } from "B:/~BUN/root/chunk-8ytf4evt.js";
import { U8o } from "B:/~BUN/root/chunk-wwbphjk5.js";
import { dXn, cXn, UQs } from "B:/~BUN/root/chunk-f9gn5qf9.js";
import { K1o, q1o, zgn } from "B:/~BUN/root/chunk-32113j61.js";
import { UJn, ZVt } from "B:/~BUN/root/chunk-jfwea0h8.js";
import { B$ } from "B:/~BUN/root/chunk-8zx74r55.js";
import { XT } from "B:/~BUN/root/chunk-xagk1yaq.js";
import { Li } from "B:/~BUN/root/chunk-zeshc0ep.js";
import { _kr, K_s, m$i } from "B:/~BUN/root/chunk-a5dg1k4h.js";
import { OJe } from "B:/~BUN/root/chunk-ekh9f9kv.js";
import { Vg } from "B:/~BUN/root/chunk-jjs9d8eg.js";
import { kt } from "B:/~BUN/root/chunk-86hj8bna.js";
import { Wv } from "B:/~BUN/root/chunk-bxk17zm0.js";
import { D } from "B:/~BUN/root/chunk-8mqsat26.js";
import { iP, o, I, oe, u, Be, me, B, T } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { Zn } from "B:/~BUN/root/chunk-12nc74pv.js";
import { randomUUID as io } from "crypto";
import { isDeepStrictEqual as so } from "util";
function sVr(r, n, c) {
  if (i.CLAUDE_CODE_DISABLE_PERMISSION_PROMPT_NOTIFY_HOOKS) return () => {};
  let e = setTimeout((d, storageV5, credentials) => {
    try {
      T$(s6(), {
        message: `Claude needs your permission to use ${d}`,
        notificationType: "permission_prompt"
      }, {
        storageV5: storageV5,
        credentials: credentials
      }).catch(() => {});
    } catch {}
  }, OPn, r, n, c);
  return e.unref(), () => clearTimeout(e);
}
var Mo = p(() => u({
    tool_name: o().describe("The name of the tool requesting permission"),
    input: me(o(), oe()).describe("The input for the tool"),
    tool_use_id: o().optional().describe("The unique tool use request ID")
  })),
  Se = p(() => B(["user_temporary", "user_permanent", "user_reject"]).optional().catch(void 0)),
  Oe = r => u({
    behavior: T("allow"),
    updatedInput: me(o(), oe()).optional(),
    updatedPermissions: L5e(r, "SDK host"),
    toolUseID: o().optional(),
    decisionClassification: Se()
  }),
  Ee = p(() => u({
    behavior: T("deny"),
    message: o(),
    interrupt: I().optional(),
    toolUseID: o().optional(),
    decisionClassification: Se()
  })),
  Mst = p(() => Be([Oe("refused"), Ee()])),
  Ye = p(() => Be([Oe("cut"), Ee()]));
function ZEt(r) {
  return r === "strict" ? Ye() : Mst();
}
var oVr = `Expected {behavior: 'allow', updatedInput?: object} or {behavior: 'deny', message: string}. ${xTn}`;
function Q(r, n, c, e, d, s) {
  if (e.forRemoteExecution === !0 || tS(e)) return;
  let h = r && yee(r, n.suppressesAlwaysAllowRule?.(c) === !0 || d ? void 0 : Mtn(n, c), se(e));
  if (h && s !== void 0) {
    let y = QCn(h, s.rule);
    return y.length > 0 ? y : void 0;
  }
  if (h && n.suppressesAllPermissionUpdates?.(c) === !0) {
    let y = g6(h);
    return y.length > 0 ? y : void 0;
  }
  return h && (n.suppressesAlwaysAllowRule?.(c) === !0 || d) ? WQ(h, n, se(e)) : h;
}
function X(r, n, c, input, d, s, h = !1, y) {
  switch (r.kind) {
    case "launcher":
      {
        let A = Q(n, c, input, d, s, y);
        if (A?.length) d.setSessionToolPermissionContext(b => yD(b, A)), setImmediate(() => {
          eL.emit();
        }), jq(A, d.storageV5).catch(a);
        return {
          applied: A ?? [],
          lostTightenings: 0
        };
      }
    case "strict":
      return n3t(r, n, {
        vetoed: () => !1,
        strip: A => Q(A, c, input, d, s, y) ?? [],
        toolName: fi(c),
        input: input,
        suggested: A => h && c.suggestedAllowRule?.(A, input) === !0,
        setContext: d.setSessionToolPermissionContext
      });
  }
}
function be(r, n) {
  return {
    ...r,
    setSessionToolPermissionContext: c => r.setSessionToolPermissionContext(e => {
      let d = typeof c === "function" ? c(e) : c;
      return gyi(n, e, d);
    })
  };
}
function eTt(r, toolResult, c, e, d, s = c, h = !1, y = !1, A) {
  let decisionReason = {
    type: "permissionPromptTool",
    permissionPromptToolName: c.name,
    toolResult: toolResult
  };
  if (toolResult.behavior === "allow") {
    let f = toolResult.updatedPermissions?.findLast(k => k.type === "setMode")?.mode;
    if (A === void 0 && (f === "default" || f === "acceptEdits")) n_t(f);
    switch (r.kind) {
      case "launcher":
        {
          let {
            applied: applied
          } = X(r, toolResult.updatedPermissions, s, e, y ? be(d, s) : d, h, !1, A);
          q1o(d, s, applied);
          let updatedInput = toolResult.updatedInput && Object.keys(toolResult.updatedInput).length > 0 ? toolResult.updatedInput : i2(s.name, e);
          return {
            ...toolResult,
            updatedInput: updatedInput,
            decisionReason: decisionReason,
            ...we(r, applied)
          };
        }
      case "strict":
        {
          let k = Ggi(toolResult.updatedInput, e, s, r.onAnswerNotAdmitted),
            P = k === void 0 ? Vgi(r, toolResult.updatedInput, e, s) : void 0,
            updatedInput_2 = k ?? P?.input;
          if (updatedInput_2 === void 0) return N5e(s.name, toolResult.toolUseID);
          if (updatedInput_2 !== e && Wf(se(d), s, updatedInput_2, "deny") !== null) return P?.onRefused("deny_rule"), N5e(s.name, toolResult.toolUseID);
          let {
            applied: applied_2,
            lostTightenings: lostTightenings
          } = X(r, toolResult.updatedPermissions, s, P?.input ?? e, y ? be(d, s) : d, h, !0, A);
          if (lostTightenings > 0) return t3t(s.name, toolResult.toolUseID);
          return q1o(d, s, applied_2), {
            ...toolResult,
            updatedInput: updatedInput_2,
            decisionReason: decisionReason,
            ...we(r, applied_2)
          };
        }
    }
  } else if (se(d).connectorCardAllows !== void 0) d.setSessionToolPermissionContext(f => zgn(f, toolResult.interrupt ? void 0 : fi(s)));
  if (toolResult.behavior === "deny" && toolResult.interrupt) t(`SDK permission prompt deny+interrupt: tool=${c.name} message=${toolResult.message}`), xR(d.abortController).abort();
  return {
    ...toolResult,
    decisionReason: decisionReason,
    decideLocation: "ask-path"
  };
}
function we(r, n) {
  let grantScope = HPt(n);
  return grantScope === "once" || grantScope === "session" && r.kind === "launcher" ? {
    grantScope: grantScope
  } : {};
}
var Ue = "tengu_cinder_swift";
function rVr() {
  return v(Ue, "off") === "interrupt";
}
function ce(r, n) {
  try {
    return r.getToolUseSummary?.(n) ?? r.getActivityDescription?.(n) ?? "";
  } catch (error) {
    return t(`describeToolUseForPush failed: ${error}`, {
      level: "error"
    }), "";
  }
}
function ve(r, n) {
  return Ce(r, n)?.card;
}
function Ce(r, n) {
  if (!r.requiresUserInteraction?.()) return;
  switch (r.name) {
    case cs:
      {
        let c = Array.isArray(n?.questions) ? n.questions : [],
          e = c[0],
          d = e?.header || e?.question,
          s = c.length > 1 ? ` (+${c.length - 1} more)` : "";
        return {
          label: "Question",
          body: d ? d + s : "Tap to answer"
        };
      }
    case Vg:
      return {
        label: "Plan",
        body: "Plan ready for review"
      };
    case OJe:
      return {
        label: iQ(r.name),
        body: ""
      };
    case b0e:
      {
        let c = typeof n?.reason === "string" ? Os(P5(Dh(n.reason)), 200).replace(/[\s.!?]+$/u, "") : "";
        return {
          label: "Claude in Chrome",
          body: c ? `Let Claude use your browser for ${c}? Open this task on your computer.` : "Let Claude use your browser? Open this task on your computer.",
          card: {
            title: "Set up Claude in Chrome on your computer",
            description: "Claude wants to use your browser through Claude in Chrome. To set it up, open this task in the Claude app on a computer; any answer here skips it."
          }
        };
      }
    default:
      return {
        label: iQ(r.name),
        body: ""
      };
  }
}
function Ie(r, input_2, tool_use_id, suppressed_request_id, d) {
  let decision_reason_code = Hpe(d?.decisionReason),
    h = {
      ...(d?.decisionReason && {
        decision_reason_type: kNr(d.decisionReason)
      }),
      ...(decision_reason_code && {
        decision_reason_code: decision_reason_code
      })
    },
    y = {
      ...(d?.askerAgentId !== void 0 && {
        agent_id: d.askerAgentId
      }),
      ...(d?.chromeSite !== void 0 && {
        chrome_site: d.chromeSite
      }),
      ...(d?.askedInDirectory !== void 0 && {
        asked_in_directory: d.askedInDirectory
      })
    },
    A = d?.hostDisplay ? {
      label: d.hostDisplay.displayName,
      body: ""
    } : Ce(r, input_2);
  if (A) return {
    tool_name: r.name,
    display_tool_name: A.label,
    action_description: A.body,
    raw_command: void 0,
    tool_use_id: tool_use_id,
    request_id: "",
    ...(suppressed_request_id && {
      suppressed_request_id: suppressed_request_id
    }),
    input: input_2,
    ...h,
    ...y
  };
  let raw_command = (r.name === Me || r.name === kt) && typeof input_2.command === "string" ? P5(input_2.command) : void 0,
    action_description = raw_command !== void 0 ? typeof input_2.description === "string" && input_2.description && !vq(r) && !zf(input_2) ? P5(input_2.description) : Os(raw_command, Wv) : P5(ce(r, input_2)),
    k = d?.tapToOpenOnly === !0;
  return {
    tool_name: r.name,
    display_tool_name: iQ(r.name),
    action_description: action_description,
    raw_command: raw_command,
    tool_use_id: tool_use_id,
    request_id: k ? "" : suppressed_request_id,
    ...(k && suppressed_request_id && {
      suppressed_request_id: suppressed_request_id
    }),
    input: input_2,
    ...h,
    ...y
  };
}
var Je = [Xd, i0r, wAe, mH, na];
function De(r, n, c) {
  let mcpInfo = r.mcpInfo,
    d = fi(r);
  return mcpInfo !== void 0 && mcpInfo.source === "dynamic" && c.connectorCardAllows?.has(d) === !0 && c.alwaysAllowRules.session?.includes(d) === !0 && !(r.isDestructive?.(n) ?? !1) && !ote(mcpInfo.serverName) && !Je.includes(mcpInfo.serverName) && mcpInfo.serverInfoName !== Xd && mcpInfo.docsConnector !== !0 && !IUt.includes(mcpInfo.serverIdStamp ?? "") && K1o();
}
import { isDeepStrictEqual as Xe } from "util";
import { isDeepStrictEqual as Ne } from "util";
var Qe = 3;
function Le(r) {
  let {
      promise: n,
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
  if (!v("tengu_drifting_dream", !1) || r.answers.kind !== "launcher" || r.forced || toolUseContext.hookAskFloor === !0 || ask.personOnly === !0 || toolUseContext.forRemoteExecution === !0 || Ov(fi(tool)) || V$(tool) || ZVt(ask, tool, toolUseContext)) return {
    allowed: n,
    stop: () => {}
  };
  let b = 0,
    f = P => {
      if (!isWaiting()) return;
      let R = se(toolUseContext);
      if (yo(Id(tool, R), R.servedCall === !0)) return;
      let C = ++b,
        E = jue(toolUseContext);
      Kw(tool, input_3, {
        ...toolUseContext,
        permissionRound: void 0
      }, r.assistantMessage, toolUseID).then(M => {
        if (!isWaiting() || C !== b) return;
        if (!Ne(jue(toolUseContext), E)) {
          if (P < Qe) f(P + 1);
          return;
        }
        if (M.behavior === "allow" && Z(M.decisionReason)) stop(), resolve(M);
      }).catch(M => {
        if (!We(M)) a(qe(F(M), "permissionRecheckSignal: hasPermissionsToUseTool failed for a waiting can_use_tool ask"));
      });
    },
    stop = eL.subscribe(() => f(0));
  if (!Ne(jue(toolUseContext), r.askedUnder)) f(0);
  return {
    allowed: n,
    stop: stop
  };
}
function Z(r) {
  switch (r?.type) {
    case "rule":
      return !0;
    case "mode":
      return r.mode === "default" || r.mode === "acceptEdits" || r.mode === "bypassPermissions";
    case "subcommandResults":
      {
        let n = [...r.reasons.values()].filter(item => item.behavior !== "allow" || item.decisionReason?.type !== "other" || item.decisionReason.reason !== Zie);
        return n.length > 0 && n.every(item => item.behavior === "allow" && Z(item.decisionReason));
      }
    default:
      return !1;
  }
}
function He(r) {
  let decisionReason_2 = r.ask.decisionReason;
  if (decisionReason_2 === void 0 ? r.tool.mcpInfo === void 0 : decisionReason_2.type !== "rule") return;
  try {
    if (Fe(r)) return !1;
  } catch (error) {
    if (!We(error)) a(error);
    return !1;
  }
  return Ze(r);
}
function HQs(r) {
  return r.subtype === "can_use_tool" ? {
    ...r,
    server_policy_ask_only: void 0
  } : r;
}
function Fe(r) {
  let decisionReason_3 = r.ask.decisionReason;
  return r.tool.mcpInfo === void 0 || !(decisionReason_3 === void 0 || a8e(decisionReason_3)) || !ee(r.ask, ["decisionReason"]) || ue(r);
}
function ue({
  tool: tool_2,
  effectiveInput: effectiveInput,
  ask: ask_2,
  toolUseContext: toolUseContext_2,
  forceDecision: forceDecision
}) {
  let decisionReason_4 = ask_2.decisionReason;
  return forceDecision !== void 0 || toolUseContext_2.hookAskFloor === !0 || toolUseContext_2.forRemoteExecution === !0 || Ov(fi(tool_2)) || V$(tool_2) || ZVt(ask_2, tool_2, toolUseContext_2) || tool_2.suppressesAlwaysAllowRule?.(effectiveInput) === !0 || tool_2.suppressesAllPermissionUpdates?.(effectiveInput) === !0 || tool_2.ignoresWholeToolAllowRule?.(effectiveInput) === !0 || toolUseContext_2.remoteCall !== void 0 || toolUseContext_2.requireCanUseTool === !0 || FCe(toolUseContext_2.session, tool_2.name) !== void 0 || tool_2.askInputPreparer !== void 0 || no(tool_2, toolUseContext_2) || _5t(decisionReason_4, tool_2, effectiveInput, toolUseContext_2) || ro(tool_2, toolUseContext_2);
}
async function Ze(r) {
  try {
    let n = jue(r.toolUseContext);
    return (await eo(r)) && Xe(jue(r.toolUseContext), n) && !Fe(r);
  } catch (error) {
    if (!We(error)) a(error);
    return !1;
  }
}
async function eo({
  tool: tool_3,
  effectiveInput: effectiveInput_2,
  toolUseContext: toolUseContext_3
}) {
  let e = !1,
    d = await kts({
      ...tool_3,
      checkPermissions: async (s, h) => {
        let y = await tool_3.checkPermissions(s, h);
        return e ||= y.behavior === "ask", y;
      }
    }, effectiveInput_2, toolUseContext_3);
  return !e && (d.behavior === "allow" ? Z(d.decisionReason) : d.behavior === "ask" && ee(d, []));
}
var oo = ["behavior", "message", "suggestions"];
function ee(r, n) {
  return Object.entries(r).every(([c, e]) => e === void 0 || oo.includes(c) || n.includes(c));
}
function ro(r, n) {
  return Ae().hooksRespawns.size > 0 || Li("tool.check", {
    ...B$(r),
    agentId: n.agentId
  }, XT("tool.check")) || Dde("PermissionRequest") !== "none" || jP("PermissionRequest") || C$("PermissionRequest", n.sessionHooksRegistry, gb(n, "PermissionRequest", n.session.id));
}
function no(r, n) {
  let c = se(n);
  return yo(Id(r, c), c.servedCall === !0);
}
function Ke(r) {
  try {
    return ee(r.ask, ["decisionReason", "updatedInput", "blockedPath", "metadata", "bashAllowRuleOverridable", "suppressAlwaysAllowRule"]) && !JZ(r.tool) && !ue(r);
  } catch {
    return m("ccr_subagent_ask_hold", "stored_answer_test_threw"), !1;
  }
}
function $Qs(answers, n) {
  let c = async (tool_4, input_5, toolUseContext_4, assistantMessage, y, forceDecision_2) => {
    let askedUnder = jue(toolUseContext_4),
      ask_3;
    switch (answers.kind) {
      case "launcher":
        ask_3 = forceDecision_2 ?? (await Kw(tool_4, input_5, toolUseContext_4, assistantMessage, y));
        break;
      case "strict":
        ask_3 = forceDecision_2 ?? (await i8e(tool_4, input_5, toolUseContext_4, assistantMessage, y, answers, void 0));
        break;
    }
    if (ask_3.behavior === "allow") return ask_3;
    if (ask_3.behavior === "deny") {
      if (_n() && !toolUseContext_4.abortController.signal.aborted) return jd();
      if (!ewe(ask_3)) n.emitPermissionDenied(tool_4.name, y, toolUseContext_4.agentId, ask_3);
      return ask_3;
    }
    let k = {
        tool: tool_4,
        effectiveInput: ask_3.updatedInput ?? input_5,
        ask: ask_3,
        toolUseContext: toolUseContext_4,
        forceDecision: forceDecision_2
      },
      P = n.keptAskFor?.(y);
    if (P !== void 0) {
      let S = await P.answerFor({
        usable: () => Ke(k) && so(jue(toolUseContext_4), askedUnder),
        toolName: tool_4.name,
        input: ask_3.updatedInput ?? input_5,
        planMode: () => se(toolUseContext_4).mode === "plan"
      });
      if (S !== void 0 && !toolUseContext_4.abortController.signal.aborted && !_n()) return eTt(answers, S, tool_4, ask_3.updatedInput ?? input_5, toolUseContext_4, tool_4, ask_3.suppressAlwaysAllowRule === !0, !1);
    }
    let R = He(k),
      server_policy_ask_only = typeof R === "object" ? await R : R,
      E = se(toolUseContext_4),
      decisionReason_5 = ask_3.decisionReason,
      H = tool_4.mcpInfo?.denyKey === void 0 && tool_4.mcpInfo?.nameKey === void 0 ? void 0 : [...(decisionReason_5?.type === "rule" && decisionReason_5.rule.ruleBehavior === "ask" ? [decisionReason_5.rule] : []), ...Vc(E, tool_4.checkPermissions).filter(item => vFn(tool_4, item, E))].find(item => !X_(E, {
        name: tool_4.name
      }, item));
    if (toolUseContext_4.abortController.signal.aborted) return {
      behavior: "deny",
      message: "Tool permission request aborted",
      toolUseID: y,
      decisionReason: decisionReason_6,
      decideLocation: "ask-path"
    };
    if (_n()) return jd();
    if (server_policy_ask_only === !0 && a8e(ask_3.decisionReason) && !JZ(tool_4) && !RHe(ask_3) && De(tool_4, k.effectiveInput, se(toolUseContext_4))) return ODn(toolUseContext_4, y), g("permission_connector_card_allow", {
      ...(tool_4.readOnlyHint !== void 0 && {
        readOnlyHint: tool_4.readOnlyHint
      })
    }), {
      behavior: "allow",
      updatedInput: k.effectiveInput,
      decisionReason: {
        type: "other",
        reason: "A person allowed this connector tool for the rest of the turn"
      }
    };
    if (tool_4.askInputPreparer !== void 0 && !weakSet.has(ask_3) && toolUseContext_4.forRemoteExecution !== !0) {
      let S = await tool_4.askInputPreparer(ask_3.updatedInput ?? input_5, toolUseContext_4, y);
      if (S !== void 0) return to(c, answers, S, ask_3, tool_4, input_5, toolUseContext_4, assistantMessage, y);
    }
    let input_4 = ask_3.updatedInput ?? input_5,
      permission_suggestions = toolUseContext_4.clientRequestedToolUseId !== void 0 && tool_4.suppressesAllPermissionUpdates?.(input_4) === !0 ? void 0 : ask_3.suggestions;
    if (tool_4.name === Me && typeof input_4.command === "string" && permission_suggestions?.length && !permission_suggestions.some(item => item.destination !== "session")) permission_suggestions = [...GCn(input_4.command), ...permission_suggestions];
    let abortController = new AbortController(),
      z = toolUseContext_4.abortController.signal,
      re = !1,
      le = () => {
        if (!_n()) re = !0;
        abortController.abort(z.reason);
      };
    z.addEventListener("abort", le, {
      once: !0
    });
    let L = io(),
      fe = p8i(toolUseContext_4.agentContext),
      he,
      N,
      ne = !1,
      ye;
    try {
      let j = (ask_3.personOnly === !0 || weakSet.has(ask_3) ? Promise.resolve(void 0) : uVt(answers, tool_4, y, input_4, toolUseContext_4, permission_suggestions, ask_3, () => ne || z.aborted)).then(outcome => ({
        source: "hook",
        outcome: outcome
      }));
      j.catch(() => {});
      let decisionReason_7 = ask_3.decisionReason,
        G = ask_3.matchedAskRule ?? H,
        ie = ask_3.localDisplayOnly === !0 || ask_3.personOnly === !0 && decisionReason_7?.type === "classifier",
        ge = JZ(tool_4),
        ke = RHe(ask_3);
      if (n.promptShown) {
        let O = ask_3.metadata?.command?.chrome,
          Y = Ie(tool_4, input_4, y, L, {
            tapToOpenOnly: ie || ge || ke || ask_3.metadata?.mcpSkill !== void 0,
            hostDisplay: ask_3.hostDisplay,
            decisionReason: decisionReason_7,
            askerAgentId: toolUseContext_4.agentId,
            chromeSite: D(O) && U8o(O.host) ? O.host : void 0,
            askedInDirectory: toolUseContext_4.agentId !== void 0 || zf(input_4) ? void 0 : answers.kind === "strict" ? m$i(v0()) : tool_4.name === Me ? K_s(_kr(toolUseContext_4.session.project?.projectRoot)) : void 0
          });
        he = fe, n.promptShown(L, Y, fe, zRe(toolUseContext_4.agentContext), toolUseContext_4.agentId !== void 0 && Y.request_id === L && Ke(k));
      }
      let V = al(decisionReason_7),
        xe = tool_4.name === Me || tool_4.name === kt,
        Ge = weakMap.get(ask_3) || (ask_3.metadata && "command" in ask_3.metadata ? ask_3.metadata.mcpSkill ? V?.reason : ask_3.metadata.command.description : void 0) || (xe && typeof input_4.command === "string" ? typeof input_4.description === "string" && input_4.description ? P5(input_4.description) : Os(P5(input_4.command), Wv) : ce(tool_4, input_4)) || void 0,
        te = ve(tool_4, input_4),
        ae = vq(tool_4) || tool_4.name === kt && zf(input_4) ? void 0 : Ge ?? te?.description,
        decision_reason = E5e(decisionReason_7) ?? (decisionReason_7?.type === "subcommandResults" && V ? al(decisionReason_7, O => !O.classifierApprovable && !VJr(O))?.reason ?? (VJr(V) ? void 0 : V.reason) : void 0),
        hostDisplay = ask_3.hostDisplay,
        de = ie ? ai(Zn(decision_reason ?? "")) : "",
        description = hostDisplay ? hostDisplay.description : de && ae && ask_3.localDisplayOnly !== !0 ? `${ae}
${de}` : de || ae,
        Ve = Ov(fi(tool_4)),
        metadata = ask_3.metadata,
        Re = sVr(iQ(tool_4.name), toolUseContext_4.storageV5, toolUseContext_4.credentials);
      if (hostDisplay) g("permission_host_worded_ask");
      let x = n.request({
        subtype: "can_use_tool",
        tool_name: tool_4.name,
        ...(tool_4.mcpInfo && {
          mcp_server: yEr(tool_4.mcpInfo)
        }),
        ...(te && {
          title: te.title
        }),
        display_name: hostDisplay?.displayName ?? iQ(tool_4.name),
        input: input_4,
        ...(hostDisplay && {
          title: hostDisplay.title
        }),
        ...(description && {
          description: description
        }),
        ...(Ve && {
          tool_kind: "browser"
        }),
        ...void 0,
        permission_suggestions: permission_suggestions,
        blocked_path: ask_3.blockedPath,
        decision_reason: decision_reason,
        decision_reason_type: kNr(decisionReason_7),
        decision_reason_code: Hpe(decisionReason_7),
        decision_reason_rule_source: decisionReason_7?.type === "rule" ? decisionReason_7.rule.source : void 0,
        ...(decisionReason_7?.type === "hook" && {
          decision_reason_hook_event: UQs(decisionReason_7.hookName, tool_4.name),
          decision_reason_hook_source: dXn(decisionReason_7.hookSource),
          decision_reason_hook_plugin_id: cXn(decisionReason_7.hookPluginId)
        }),
        server_policy_ask_only: server_policy_ask_only,
        ...(G && {
          matched_ask_rule: {
            source: G.source,
            tool_name: G.ruleValue.toolName,
            ...(G.ruleValue.ruleContent !== void 0 && {
              rule_content: G.ruleValue.ruleContent
            })
          }
        }),
        classifier_approvable: V ? !al(decisionReason_7, O => !O.classifierApprovable) : void 0,
        ...((decisionReason_7?.type === "rule" || decisionReason_7?.type === "other" && decisionReason_7.reason === xcr(tool_4)) && tool_4.mcpInfo?.effectiveMaxPermission === "ask" && {
          decision_reason_code: "org_ask_ceiling"
        }),
        tool_use_id: y,
        agent_id: toolUseContext_4.agentId,
        plugin: DIr(toolUseContext_4),
        suppress_always_allow_rule: UJn(tool_4, input_4, toolUseContext_4, ask_3.suppressAlwaysAllowRule, permission_suggestions),
        default_to_no: ask_3.defaultToNo || void 0,
        provenance_prompt_line: ask_3.provenancePromptLine,
        requires_user_interaction: tool_4.requiresUserInteraction?.() || ie || ge || ke || hostDisplay !== void 0 || void 0
      }, abortController.signal, L).then(result => ({
        source: "sdk",
        result: result
      }));
      if (x.catch(() => {}), x.then(() => {
        ne = !0;
      }, () => {
        ne = !0;
      }), n.isPending(L)) N = {
        logContext: {
          tool: tool_4,
          input: input_4,
          messageId: assistantMessage.message.id,
          toolUseID: y,
          permissionMode: se(toolUseContext_4).mode,
          agentContext: toolUseContext_4.agentContext,
          mcpClients: toolUseContext_4.options.mcpClients,
          appliedAllowUpdates: O => {
            switch (answers.kind) {
              case "launcher":
                return Q(O, tool_4, input_4, toolUseContext_4, ask_3.suppressAlwaysAllowRule === !0, ask_3.metadata?.mcpSkill === void 0 ? void 0 : {
                  rule: void 0
                });
              case "strict":
                return;
            }
          }
        },
        shownAtMs: Date.now()
      }, eki(N.logContext, decisionReason_7?.type);
      x.then(Re, Re);
      let q = await Promise.race([j, x]);
      if (q.source === "hook") {
        if (q.outcome) {
          if (_n() && !re) await jd();
          if (abortController.abort(), N) Uur(N.logContext, {
            kind: "hook",
            behavior: q.outcome.decision.behavior === "allow" ? "allow" : "deny",
            permanent: q.outcome.permanent
          }, N.shownAtMs);
          if (q.outcome.interrupt) t(`Hook interrupt: tool=${tool_4.name} hookMessage=${q.outcome.decision.message}`), xR(toolUseContext_4.abortController).abort();
          return q.outcome.decision;
        }
        let O = Le({
          answers: answers,
          ask: ask_3,
          forced: forceDecision_2 !== void 0,
          askedUnder: askedUnder,
          tool: tool_4,
          input: input_5,
          toolUseContext: toolUseContext_4,
          assistantMessage: assistantMessage,
          toolUseID: y,
          isWaiting: () => n.isPending(L) && !z.aborted
        });
        ye = O.stop;
        let Y = await Promise.race([x.then(() => {
          return;
        }), O.allowed]);
        if (Y !== void 0 && n.isPending(L)) {
          if (_n() && !re) await jd();
          if (abortController.abort(), ODn(toolUseContext_4, y), N) Uur(N.logContext, {
            kind: "recheck"
          }, N.shownAtMs);
          return Y;
        }
      }
      let answer = q.source === "hook" ? (await x).result : q.result;
      if (N) Uur(N.logContext, {
        kind: "host_answer",
        answer: answer
      }, N.shownAtMs);
      let J = eTt(answers, answer, tool_4, input_4, toolUseContext_4, tool_4, ask_3.suppressAlwaysAllowRule === !0, server_policy_ask_only !== !0, ask_3.metadata?.mcpSkill === void 0 ? void 0 : {
        rule: void 0
      });
      if (J.behavior === "allow" && n.answeredAtHostDialog(L) && toolUseContext_4.forRemoteExecution !== !0 && Pzi()) Ozi(toolUseContext_4.session, y, {
        toolName: tool_4.name,
        input: J.updatedInput ?? input_4
      });
      if (J.behavior === "allow") ysr(n.takeApprovalTicket(L), tool_4, y, toolUseContext_4);
      return J;
    } catch (error) {
      if (_n() && n.isPending(L)) await jd();
      if (n.interruptedAtStreamClose(L) && rVr()) {
        try {
          l("tengu_auq_park_interrupted_at_stream_close", {
            stream_closed: error instanceof du
          }), t(`Interrupting parked AskUserQuestion toolUseID=${y} at stream close (deny skipped; turn aborts as shutdown)`);
        } catch {}
        throw error;
      }
      let message = oZo(answers, error, tool_4.name),
        decisionReason_8 = decisionReason_9;
      if (error instanceof iP) t(`canUseTool returned a schema-invalid permission result for ${tool_4.name}: ${error.message.slice(0, 2000)}`, {
        level: "error"
      }), message = `The canUseTool callback returned an invalid permission result. ${oVr}`, decisionReason_8 = Zbt;else if (error instanceof du) decisionReason_8 = iUs;else if (We(error) && z.aborted) {
        if (message = "Tool permission request aborted", decisionReason_8 = decisionReason_6, N && !jDr(z)) Uur(N.logContext, {
          kind: "turn_aborted"
        }, N.shownAtMs);
      }
      return {
        behavior: "deny",
        message: message,
        toolUseID: y,
        decisionReason: decisionReason_8,
        decideLocation: "ask-path"
      };
    } finally {
      ye?.(), n.promptSettled(L, he), z.removeEventListener("abort", le);
    }
  };
  return wdt("callback", c, () => !0);
}
var weakSet = new WeakSet(),
  weakMap = new WeakMap();
async function to(r, n, c, e, d, s, h, y, toolUseID_2) {
  let b = h.abortController.signal,
    f = () => ({
      behavior: "deny",
      message: "Tool permission request aborted",
      toolUseID: toolUseID_2,
      decisionReason: decisionReason_6,
      decideLocation: "ask-path"
    });
  if (e.personOnly !== !0) {
    let E;
    try {
      E = await uVt(n, d, toolUseID_2, e.updatedInput ?? s, h, e.suggestions, e, () => b.aborted);
    } catch (error) {
      return b.aborted ? f() : {
        behavior: "deny",
        message: oZo(n, error, d.name),
        toolUseID: toolUseID_2,
        decisionReason: decisionReason_9,
        decideLocation: "ask-path"
      };
    }
    if (E !== void 0) {
      if (_n() && !b.aborted) return jd();
      if (E.interrupt) xR(h.abortController).abort();
      return E.decision;
    }
  }
  let k = await c.prepare();
  if (b.aborted) {
    if (!("error" in k)) k.release();
    return f();
  }
  if ("error" in k) return {
    behavior: "deny",
    message: k.error,
    toolUseID: toolUseID_2,
    decisionReason: {
      type: "other",
      reason: "files not attached"
    },
    decideLocation: "ask-path"
  };
  let P = {
    ...K7r(e, k.input),
    updatedInput: k.input
  };
  weakSet.add(P), weakMap.set(P, k.description);
  let R;
  try {
    R = await r(d, s, h, y, toolUseID_2, P);
  } catch (error) {
    throw k.release(), error;
  }
  if (R.behavior !== "allow") return k.release(), R;
  let updatedInput_3 = R.updatedInput !== void 0 && Object.keys(R.updatedInput).length > 0 ? R.updatedInput : k.input;
  if (!ln(updatedInput_3.files, k.input.files)) return k.release(), {
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
    ...R,
    updatedInput: updatedInput_3
  };
}
async function uVt(r, n, toolUseId, e, d, s, h, y) {
  if (d.forRemoteExecution === !0) return;
  let mode = se(d).mode,
    b = q5e(n.name, toolUseId, e, d, mode, s, d.abortController.signal);
  for await (let f of b) if (f.permissionRequestResult && (f.permissionRequestResult.behavior === "allow" || f.permissionRequestResult.behavior === "deny")) {
    let permissionRequestResult = f.permissionRequestResult;
    if (permissionRequestResult.behavior === "allow") {
      let P = permissionRequestResult.updatedInput;
      switch (r.kind) {
        case "launcher":
          break;
        case "strict":
          if (!K1e(P, e)) return {
            decision: N5e(n.name, toolUseId),
            interrupt: !1,
            permanent: !1
          };
          P = void 0;
          break;
      }
      if (Rre(n, e, P, !0)) return {
        decision: Are(n, "PermissionRequest"),
        interrupt: !1,
        permanent: !1
      };
      let R = await i5t(n, P, e, H => n.validateInput?.(H, {
        ...d,
        toolUseId: toolUseId
      }));
      if (R.deny !== void 0) return {
        decision: R.deny,
        interrupt: !1,
        permanent: !1
      };
      P = R.input;
      let updatedInput_4 = P || e;
      if (P) {
        let H = $Pt(await Sx(n, updatedInput_4, {
          ...d,
          toolUseId: toolUseId,
          permissionRound: void 0
        }, {
          hookUpdatedInput: P
        }), n.name);
        if (H) return {
          decision: H.behavior === "ask" ? {
            behavior: "deny",
            message: H.message,
            decisionReason: H.decisionReason ?? wGn,
            decideLocation: "ask-path"
          } : {
            ...H,
            decideLocation: "ask-path"
          },
          interrupt: !1,
          permanent: !1
        };
      }
      if (h.hostDisplay !== void 0 || eRn(n, P)) return;
      let {
        applied: applied_3,
        lostTightenings: lostTightenings_2
      } = y() ? {
        applied: [],
        lostTightenings: 0
      } : X(r, permissionRequestResult.updatedPermissions && lTr(permissionRequestResult.updatedPermissions, se(d)), n, e, d, h.suppressAlwaysAllowRule === !0);
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
        permanent: applied_3.some(item => PGe(item.destination))
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
export { rVr, Mst, ZEt, oVr, eTt, sVr, HQs, $Qs, uVt };