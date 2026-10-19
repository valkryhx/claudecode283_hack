// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { Ye, H } from "B:/~BUN/root/chunk-3aez4b53.js";
import { _ } from "B:/~BUN/root/chunk-6za2ez23.js";
import { ne } from "B:/~BUN/root/chunk-nggrknsv.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { BNt } from "B:/~BUN/root/chunk-z84amwaw.js";
import { cu as v_2, cc, jU, Pn, fb } from "B:/~BUN/root/chunk-hkc0g0wr.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { Ji, ao, Pr, On, _J, Kc } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { dt, Kt, We } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { is } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { w5, fTe } from "B:/~BUN/root/chunk-8z3a373v.js";
import { O3n } from "B:/~BUN/root/chunk-qp0344nb.js";
import { tR } from "B:/~BUN/root/chunk-bsjrnca2.js";
import { hZ, KL, Wxt, $He, sw, Vhr, B0, K1, ET, td, c6e, CPt, lwr, yd } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { bX } from "B:/~BUN/root/chunk-7j5tvnqj.js";
import { _ee } from "B:/~BUN/root/chunk-yq5myw2y.js";
import { zhn } from "B:/~BUN/root/chunk-vscm4nbq.js";
import { Cet, UQn, wKo, GWr, qhn, vKo, qWr, kKo, EKo } from "B:/~BUN/root/chunk-qcwdfn4k.js";
import { RWt, BQn, KWr } from "B:/~BUN/root/chunk-tt3y2kn8.js";
import { HQn, CWt } from "B:/~BUN/root/chunk-8w7ekk3j.js";
import { wre, VDe, qDe, Tet } from "B:/~BUN/root/chunk-90mm1g9e.js";
import { MVe } from "B:/~BUN/root/chunk-dvhmfxf8.js";
import { Yi } from "B:/~BUN/root/chunk-s39maerh.js";
import { Qe } from "B:/~BUN/root/chunk-5k20pvvh.js";
import { Dn } from "B:/~BUN/root/chunk-pystvv3m.js";
import { Zt } from "B:/~BUN/root/chunk-ekswf6ps.js";
import { randomUUID as A } from "crypto";
function O() {
  return tR.CLAUDE_CODE_MCP_SERVE_TOOL_OUTPUT === !0;
}
var w = new Set([We, Qe, dt, Kt, Ji, Pr, ao]),
  j = 12582912;
function DZs(e, t) {
  let n = DQn(e, t);
  return n && {
    experimental: {
      [Cet]: n
    }
  };
}
function DQn(e, t) {
  if (!O() || t === void 0) return;
  let n = k(e(), t);
  if (!qWr(n.deny_rules)) {
    m("mcp_serve_tool_output", "deny_rules_over_bounds");
    return;
  }
  let tool_host_interface = GWr() ? zhn() : void 0;
  return {
    ...n,
    ...(tool_host_interface !== void 0 && {
      tools: [...n.tools, ...VDe, Yi],
      tool_host_interface: tool_host_interface
    })
  };
}
function EWt(e) {
  if (!v()) return !1;
  return qhn(Dn(e) ? e[Cet] : void 0);
}
function v() {
  return O() && GWr();
}
function k(e, t) {
  return EKo({
    tools: R(e),
    denyRules: t.alwaysDenyRules.cliArg ?? []
  });
}
async function LZs({
  name: name,
  args: args,
  meta: meta,
  tools: tools,
  launchPermissionContext: launchPermissionContext,
  newCall: newCall,
  startHeartbeat: startHeartbeat
}) {
  let u = vKo(meta);
  if (u.kind === "absent") return;
  let i = BQn(meta).kind === "absent" ? P(u, name, tools, launchPermissionContext) : f("invalid_request", `${name} was not run: a call that carries _meta["${RWt}"] is answered only as a plain call. Call it without asking for its output object.`, "carries_asks_key");
  if ("refusal" in i) return p("mcp_serve_tool_output", i.reason, {
    tool: Whn(name)
  }), HSt(i.refusal);
  let {
    toolUseContext: toolUseContext,
    release: release
  } = newCall();
  try {
    let d = await x(i.tool, args, C(toolUseContext, i.launchPermissionContext), startHeartbeat);
    if (!toolUseContext.abortController.signal.aborted) {
      let tool = Whn(i.tool.name);
      if ("unsent" in d) m("mcp_serve_tool_output", d.unsent, {
        tool: tool
      });else if (d.objection === "crashed_check") m("mcp_serve_tool_output", d.objection, {
        tool: tool
      });else if (d.objection !== void 0) p("mcp_serve_tool_output", d.objection, {
        tool: tool
      });else g("mcp_serve_tool_output", {
        tool: tool,
        answer: c(d.answer),
        safety_ask_skipped: d.wasSafetyAskSkipped === !0,
        ...(d.wasOutputCut && {
          output_cut: !0
        })
      });
    }
    return d.result;
  } finally {
    release();
  }
}
function P(e, t, n, launchPermissionContext_2) {
  if (!O()) return f("unsupported_protocol", `${t} was not run: this server is not set up to return output objects (CLAUDE_CODE_MCP_SERVE_TOOL_OUTPUT is not on). Call it without asking for its output object.`);
  if (launchPermissionContext_2 === void 0) return f("unsupported_protocol", `${t} was not run: this server holds no permission rules (CLAUDE_CODE_MCP_SERVE_SETTINGS was unset or empty when it started), and it returns output objects only for calls it can judge. Call it without asking for its output object.`, "no_launch_rules");
  let {
    deny_rules: deny_rules
  } = k(n, launchPermissionContext_2);
  if (!qWr(deny_rules)) return f("unsupported_protocol", `${t} was not run: this server was launched with more or longer deny rules than it can advertise, so it returns no output objects. Call it without asking for its output object.`, "deny_rules_over_bounds");
  if (e.kind === "malformed") return f("invalid_request", `${t} was not run: _meta["${Cet}"] must be exactly { versions, deny_rules_digest }. versions: up to 64 whole numbers. deny_rules_digest: the SHA-256 of JSON.stringify(deny_rules), for the deny_rules this server advertises, as 64 lower-case hex characters.`);
  if (e.kind === "no_shared_version") return f("unsupported_protocol", `${t} was not run: this server returns output objects only in version ${UQn.join(", ")}, and the request lists ${e.versions.join(", ") || "none"}.`);
  if (e.denyRulesDigest !== kKo(deny_rules)) return f("unsupported_protocol", `${t} was not run: the request's deny_rules_digest is not that of the deny_rules this server advertises. Reconnect and read them again.`, "deny_rules_digest_mismatch");
  let tool_2 = Pn(n, t);
  if (tool_2 === void 0) return f("not_served", `${t} was not run: this server has no tool by that name.`);
  return w.has(t) ? {
    tool: tool_2,
    launchPermissionContext: launchPermissionContext_2
  } : f("not_served", `${t} was not run: the tools this server answers with an output object are ${R(n).join(", ") || "none"}. Call it without asking for its output object.`);
}
function LWr(e) {
  return w.has(e);
}
function R(e) {
  return e.map(item => item.name).filter(item => w.has(item));
}
function Whn(e) {
  return w.has(e) || VDe.has(e) ? On(e) : _J(e);
}
function HSt(e) {
  return jU({
    envelope: {
      v: v_2,
      outcome: "refused",
      target: CWt(),
      ...e
    },
    content: cc(e.message)
  });
}
function f(code, message, reason = code) {
  return {
    refusal: {
      code: code,
      message: message
    },
    reason: reason
  };
}
async function x(e, t, n, o) {
  let s = {
      ...t
    },
    r = qDe.filter(item => item in s),
    a = r.length > 0 ? [Tet(r)] : [],
    u = await I(e, is(s, r), n);
  if ("rejection" in u) return {
    result: Eet(u.rejection, U(u.objection), a),
    answer: "not_run",
    objection: u.objection
  };
  let i = await LQn(e, u.input, n, o);
  return {
    ...("failure" in i ? {
      result: Eet(i.failure, "ran", a),
      answer: "tool_failed"
    } : NQn(e, i.data, a)),
    wasSafetyAskSkipped: u.wasSafetyAskSkipped
  };
}
async function I(e, t, n) {
  try {
    if (!e.isEnabled()) return {
      rejection: `Tool ${e.name} is not enabled`
    };
    let o = fb(e, t);
    if (!o.success) return {
      rejection: `InputValidationError: ${KL(e.name, o.error)}`
    };
    let s = await e.validateInput?.(o.data, n);
    if (s !== void 0 && !s.result) return {
      rejection: s.message,
      ...(s.deniedByPermissionRule === !0 && {
        objection: "deny_rule"
      })
    };
    let r = await S(e, o.data, n);
    return "rejection" in r ? r : {
      input: o.data,
      ...r
    };
  } catch (error) {
    return u2e(e, error), {
      rejection: hZ(error)
    };
  }
}
function C(e, t) {
  let n = {
    ...wre(),
    toolPermissionContext: {
      ...t,
      sandboxAutoAllowSuspended: !0
    }
  };
  return {
    ...e,
    inputFromAnotherMachine: !0,
    toolUseId: `toolu_${A()}`,
    getAppState: () => n
  };
}
async function S(e, t, n) {
  let ask = await ET(e, t, n, {
    crashIsObjection: !0
  }).catch(a => {
    if (n.abortController.signal.aborted) throw a;
    return u2e(e, a), "crashed";
  });
  if (ask === null) return {
    wasSafetyAskSkipped: !1
  };
  if (ask === "crashed" || ask.decisionReason?.type === "other" && ask.decisionReason.reason === K1) return {
    rejection: `${e.name} was not run: the permission rules could not be evaluated for this call (internal error).`,
    objection: "crashed_check"
  };
  if (ask.behavior === "deny") return {
    rejection: ask.message,
    objection: "deny_rule"
  };
  if (B0(ask)) return {
    rejection: `${e.name} was not run: a permission rule says to ask a person before a call like this one, and a call that runs in this environment cannot ask. Retrying won't help while that rule is in effect.`,
    objection: "ask_rule"
  };
  let s = td(ask.decisionReason, fTe);
  if (s !== void 0) return {
    rejection: lwr(Vhr(ask, s)),
    objection: "circuit_breaker"
  };
  let r = td(ask.decisionReason, w5) !== void 0;
  return !r && td(ask.decisionReason) !== void 0 ? {
    wasSafetyAskSkipped: !0,
    ask: ask
  } : {
    rejection: `${e.name} was not run: ${ask.message} A call that runs in this environment cannot put that to a person. Retrying won't help.`,
    objection: r ? "circuit_breaker" : "other_ask"
  };
}
async function NZs(e, t, toolUseContext_2, o, s) {
  if (o === void 0) return {
    toolUseContext: toolUseContext_2
  };
  let r = {
      ...C(toolUseContext_2, o),
      inputFromAnotherMachine: toolUseContext_2.inputFromAnotherMachine
    },
    {
      toolUseId: toolUseId
    } = r,
    u = toolUseId === void 0 ? void 0 : {
      toolUseId: toolUseId,
      opened: Wxt(r, toolUseId, e.name)
    },
    i = await S(e, t, {
      ...r,
      permissionPhase: void 0,
      permissionRound: u?.opened
    }).catch(y => {
      if (u) $He(r, u.toolUseId, u.opened);
      throw y;
    }),
    permissionPhase = (u && $He(r, u.toolUseId, u.opened)) ?? {};
  if (!("rejection" in i)) {
    let y = await KWr(s, e, t, r.session, i.ask);
    if (y !== "run" && y !== "as_without_the_key") return y;
    return g("mcp_serve_plain_call", y === "run" ? {
      safety_ask_skipped: !1,
      caller_attested: !0
    } : {
      safety_ask_skipped: i.wasSafetyAskSkipped
    }), {
      toolUseContext: {
        ...r,
        permissionPhase: permissionPhase
      }
    };
  }
  if (i.objection === "crashed_check") m("mcp_serve_plain_call", i.objection);else p("mcp_serve_plain_call", i.objection);
  return {
    rejection: i.rejection
  };
}
function U(e) {
  switch (e) {
    case void 0:
      return "validation_failed";
    case "ask_rule":
    case "circuit_breaker":
    case "other_ask":
      return "ask_refused_no_surface";
    case "deny_rule":
    case "crashed_check":
      return "denied_by_rule";
  }
}
async function LQn(e, t, n, o, s = sw, callerLogsSharedEvents = !1, smallResultAsked = !1) {
  using u = o();
  try {
    return await e.call(t, n, s, yd({
      content: []
    }), void 0, {
      gitDiffRead: !0,
      ...(callerLogsSharedEvents && {
        callerLogsSharedEvents: callerLogsSharedEvents
      }),
      ...(smallResultAsked && {
        smallResultAsked: smallResultAsked
      })
    });
  } catch (error) {
    return u2e(e, error), {
      failure: hZ(error)
    };
  }
}
function u2e(e, t) {
  if (c6e(t) || CPt(t).isSad) return;
  let n = H(t);
  l("telemetryMessage" in n ? n : Ye(n, `mcp server tool '${e.name}' threw`));
}
function NQn(e, t, n, o) {
  try {
    let s = L(e, t, o).map(({
      output: output,
      ...a
    }) => ({
      ...a,
      result: HQn(`${e.name} ran. Its output is in this answer's structured content.`, output, !1, n)
    })).find(({
      result: result
    }) => Buffer.byteLength(_(result), "utf8") <= j);
    return s === void 0 ? b(e, "result_too_large", n) : {
      ...s,
      answer: "output",
      ...(E(e, t) && {
        wasOutputCut: !0
      })
    };
  } catch (error) {
    return l(Ye(H(error), `mcp server tool '${e.name}' output could not be encoded`)), b(e, "result_unbuildable", n);
  }
}
function L(e, output_3, n) {
  if (e.name !== dt || !Dn(output_3)) return [{
    output: D(e, output_3)
  }];
  let output_2 = {
    ...output_3,
    originalFile: null
  };
  if (typeof output_3.originalFile !== "string" || n === void 0) return [{
    output: output_2
  }];
  if (n.isSubagent) return [{
    output: output_2,
    originalFileLeftOutReason: "for_subagent"
  }];
  if (n.sessionVersion < BNt.editOriginalFile) return [{
    output: output_2,
    originalFileLeftOutReason: "older_session"
  }];
  return Buffer.byteLength(output_3.originalFile, "utf8") > wKo ? [{
    output: output_2,
    originalFileLeftOutReason: "over_limit"
  }] : [{
    output: output_3
  }, {
    output: output_2,
    originalFileLeftOutReason: "answer_too_large"
  }];
}
function D(e, t) {
  if (E(e, t)) {
    let persistedOutputSize = t.persistedOutputSize,
      o = typeof persistedOutputSize === "number" ? `the command printed ${Zt(persistedOutputSize)}; ` : "",
      s = typeof persistedOutputSize === "number" && persistedOutputSize >= bX ? `The first ${Zt(bX)} of the command's output are` : "The command's whole output is",
      r = `(output truncated: ${o}only the start was returned, and a saved copy of this result holds only that start. ${s} in the file ${t.persistedOutputPath}. If the file is gone, run the command again with ${MVe(e.name)}, if that is safe.)
`,
      a = Math.max(_ee(), O3n) - r.length;
    return {
      ...t,
      stdout: `${r}${ne(t.stdout, a)}`
    };
  }
  switch (e.name) {
    case Kt:
      return e.stripForStorage?.(t) ?? t;
    case Ji:
      return N(t, {
        original_file: "",
        updated_file: ""
      });
    default:
      return t;
  }
}
function E(e, t) {
  return e.name === We && Dn(t) && typeof t.stdout === "string" && Boolean(t.persistedOutputPath) && t.isImage !== !0;
}
function N(e, t) {
  return Dn(e) ? {
    ...e,
    ...t
  } : e;
}
function b(e, unsent, n) {
  return {
    result: FQn(`${e.name} ran, but its result could not be sent back. Check what it changed before running it again.`, n),
    unsent: unsent
  };
}
function FQn(e, notes) {
  return jU({
    envelope: {
      v: v_2,
      outcome: "failed",
      target: CWt(),
      code: "internal_error",
      message: e,
      ...(notes.length > 0 && {
        notes: notes
      })
    },
    content: e
  });
}
function Eet(e, disposition, notes_2) {
  let content = Kc(e);
  return jU({
    envelope: {
      v: v_2,
      outcome: "completed",
      target: CWt(),
      is_error: !0,
      content: content,
      disposition: disposition,
      ...(notes_2.length > 0 && {
        notes: notes_2
      })
    },
    content: content
  });
}
export { DZs, DQn, EWt, LZs, LWr, Whn, HSt, NZs, LQn, u2e, NQn, FQn, Eet };