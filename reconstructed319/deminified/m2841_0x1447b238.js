// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { qe, F } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Q } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { dt, Yt, Me } from "B:/~BUN/root/chunk-9kvvd0hy.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { LNt } from "B:/~BUN/root/chunk-pdtjaehv.js";
import { vf as v_2, Hu, P1 } from "B:/~BUN/root/chunk-x6frvp1m.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { gi, Qr, _r, On, gie, yu } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { V4, ZSe } from "B:/~BUN/root/chunk-r8p1hzqw.js";
import { ev } from "B:/~BUN/root/chunk-z31ebsm2.js";
import { wn } from "B:/~BUN/root/chunk-y1b1g4ac.js";
import { h6, Z0, Kw, ueo, _I, eq, Sx, al, mct, s8t, qoo, el } from "B:/~BUN/root/chunk-27h4st9h.js";
import { Rv } from "B:/~BUN/root/chunk-xgwmwbnb.js";
import { l1 } from "B:/~BUN/root/chunk-yg4ttpr7.js";
import { Fze, zce } from "B:/~BUN/root/chunk-8ytf4evt.js";
import { zqn } from "B:/~BUN/root/chunk-7t39vrbw.js";
import { Urt, VBr, JYs, F0o, LYn, QYs, $0o, ZYs, e6s } from "B:/~BUN/root/chunk-51n55x6w.js";
import { xun, kUr, PMo } from "B:/~BUN/root/chunk-v5m7ge17.js";
import { SUr, xWt } from "B:/~BUN/root/chunk-xetka2gq.js";
import { Fme, P4e, Hme, skt, ikt } from "B:/~BUN/root/chunk-bk8e5jj0.js";
import { I4e } from "B:/~BUN/root/chunk-5n9rt7jw.js";
import { mst } from "B:/~BUN/root/chunk-s6ayq4b7.js";
import { Fs } from "B:/~BUN/root/chunk-fkcdzerj.js";
import { ze } from "B:/~BUN/root/chunk-xwzn0yxv.js";
import { o0r } from "B:/~BUN/root/chunk-bxk17zm0.js";
import { it } from "B:/~BUN/root/chunk-09e9xfa4.js";
import { en } from "B:/~BUN/root/chunk-mdq0dxn3.js";
import { randomUUID as L } from "crypto";
function w() {
  return ev.CLAUDE_CODE_MCP_SERVE_TOOL_OUTPUT === !0;
}
var b = new Set([Me, ze, dt, Yt, gi, _r, Qr]),
  x = 12582912;
function Ypa(e, t) {
  let n = gUr(e, t);
  return n && {
    experimental: {
      [Urt]: n
    }
  };
}
function gUr(e, t) {
  if (!w() || t === void 0) return;
  let n = C(e(), t);
  if (!$0o(n.deny_rules)) {
    m("mcp_serve_tool_output", "deny_rules_over_bounds");
    return;
  }
  let tool_host_interface = F0o() ? zqn() : void 0;
  return {
    ...n,
    ...(tool_host_interface !== void 0 && {
      tools: [...n.tools, ...P4e, Fs],
      tool_host_interface: tool_host_interface
    })
  };
}
function RWt(e) {
  if (!I()) return !1;
  return LYn(it(e) ? e[Urt] : void 0);
}
function I() {
  return w() && F0o();
}
function C(e, t) {
  return e6s({
    tools: E(e),
    denyRules: t.alwaysDenyRules.cliArg ?? []
  });
}
async function Xpa({
  name: name,
  args: args,
  meta: meta,
  tools: tools,
  launchPermissionContext: launchPermissionContext,
  newCall: newCall,
  startHeartbeat: startHeartbeat
}) {
  let u = QYs(meta);
  if (u.kind === "absent") return;
  let i = kUr(meta).kind === "absent" ? U(u, name, tools, launchPermissionContext) : p("invalid_request", `${name} was not run: a call that carries _meta["${xun}"] is answered only as a plain call. Call it without asking for its output object.`, "carries_asks_key");
  if ("refusal" in i) return c("mcp_serve_tool_output", i.reason, {
    tool: Aun(name)
  }), AWt(i.refusal);
  let {
    toolUseContext: toolUseContext,
    release: release
  } = newCall();
  try {
    let d = await D(i.tool, args, v(toolUseContext, I4e(i.launchPermissionContext)), startHeartbeat);
    if (!toolUseContext.abortController.signal.aborted) {
      let tool = Aun(i.tool.name);
      if ("unsent" in d) m("mcp_serve_tool_output", d.unsent, {
        tool: tool
      });else if (d.objection === "crashed_check") m("mcp_serve_tool_output", d.objection, {
        tool: tool
      });else if (d.objection !== void 0) c("mcp_serve_tool_output", d.objection, {
        tool: tool
      });else g("mcp_serve_tool_output", {
        tool: tool,
        answer: f(d.answer),
        safety_ask_skipped: d.wasSafetyAskSkipped === !0,
        ...(d.wasOutputCut && {
          output_cut: !0
        }),
        ...(d.diffLeftOut && {
          diff_left_out: f(d.diffLeftOut)
        })
      });
    }
    return d.result;
  } finally {
    release();
  }
}
function U(e, t, n, launchPermissionContext_2) {
  if (!w()) return p("unsupported_protocol", `${t} was not run: this server is not set up to return output objects (CLAUDE_CODE_MCP_SERVE_TOOL_OUTPUT is not on). Call it without asking for its output object.`);
  if (launchPermissionContext_2 === void 0) return p("unsupported_protocol", `${t} was not run: this server holds no permission rules (CLAUDE_CODE_MCP_SERVE_SETTINGS was unset or empty when it started), and it returns output objects only for calls it can judge. Call it without asking for its output object.`, "no_launch_rules");
  let {
    deny_rules: deny_rules
  } = C(n, launchPermissionContext_2);
  if (!$0o(deny_rules)) return p("unsupported_protocol", `${t} was not run: this server was launched with more or longer deny rules than it can advertise, so it returns no output objects. Call it without asking for its output object.`, "deny_rules_over_bounds");
  if (e.kind === "malformed") return p("invalid_request", `${t} was not run: _meta["${Urt}"] must be exactly { versions, deny_rules_digest }. versions: up to 64 whole numbers. deny_rules_digest: the SHA-256 of JSON.stringify(deny_rules), for the deny_rules this server advertises, as 64 lower-case hex characters.`);
  if (e.kind === "no_shared_version") return p("unsupported_protocol", `${t} was not run: this server returns output objects only in version ${VBr.join(", ")}, and the request lists ${e.versions.join(", ") || "none"}.`);
  if (e.denyRulesDigest !== ZYs(deny_rules)) return p("unsupported_protocol", `${t} was not run: the request's deny_rules_digest is not that of the deny_rules this server advertises. Reconnect and read them again.`, "deny_rules_digest_mismatch");
  let tool_2 = wn(n, t);
  if (tool_2 === void 0) return p("not_served", `${t} was not run: this server has no tool by that name.`);
  return b.has(t) ? {
    tool: tool_2,
    launchPermissionContext: launchPermissionContext_2
  } : p("not_served", `${t} was not run: the tools this server answers with an output object are ${E(n).join(", ") || "none"}. Call it without asking for its output object.`);
}
function kMo(e) {
  return b.has(e);
}
function E(e) {
  return e.map(item => item.name).filter(item => b.has(item));
}
function Aun(e) {
  return b.has(e) || P4e.has(e) ? On(e) : gie(e);
}
function AWt(e) {
  return P1({
    envelope: {
      v: v_2,
      outcome: "refused",
      target: xWt(),
      ...e
    },
    content: Hu(e.message)
  });
}
function vMo(ask_id) {
  return P1({
    envelope: {
      v: v_2,
      outcome: "acknowledged",
      target: xWt(),
      ask_id: ask_id
    },
    content: "Nothing was run: the permission question was answered with a no, or taken back."
  });
}
function p(code, message, reason = code) {
  return {
    refusal: {
      code: code,
      message: message
    },
    reason: reason
  };
}
async function D(e, t, n, o) {
  let s = {
      ...t
    },
    r = Hme.filter(item => item in s),
    l = r.length > 0 ? [ikt(r)] : [],
    u = await N(e, s, n);
  if ("rejection" in u) return {
    result: okt(u.rejection, M(u.objection), l),
    answer: "not_run",
    objection: u.objection
  };
  let i = await yUr(e, u.input, n, o);
  return {
    ...("failure" in i ? {
      result: okt(i.failure, "ran", l),
      answer: "tool_failed"
    } : _Ur(e, i.data, l)),
    wasSafetyAskSkipped: u.wasSafetyAskSkipped
  };
}
async function N(e, t, n) {
  try {
    if (!e.isEnabled()) return {
      rejection: `Tool ${e.name} is not enabled`
    };
    let o = skt(e, t);
    if (!o.success) return {
      rejection: `InputValidationError: ${Z0(e.name, o.error)}`
    };
    let s = await e.validateInput?.(o.data, n);
    if (s !== void 0 && !s.result) return {
      rejection: s.message,
      ...(s.deniedByPermissionRule === !0 && {
        objection: "deny_rule"
      })
    };
    let r = await A(e, o.data, n);
    return "rejection" in r ? r : {
      input: o.data,
      ...r
    };
  } catch (error) {
    return _rt(e, error), {
      rejection: h6(error)
    };
  }
}
function v(e, t) {
  let n = {
    ...Fme(),
    toolPermissionContext: {
      ...t,
      sandboxAutoAllowSuspended: !0
    }
  };
  return {
    ...e,
    inputFromAnotherMachine: !0,
    toolUseId: `toolu_${L()}`,
    getAppState: () => n
  };
}
async function A(e, t, n) {
  let ask = await Sx(e, t, n, {
    crashIsObjection: !0
  }).catch(l => {
    if (n.abortController.signal.aborted) throw l;
    return _rt(e, l), "crashed";
  });
  if (ask === null) return {
    wasSafetyAskSkipped: !1
  };
  if (ask === "crashed" || ask.decisionReason?.type === "other" && ask.decisionReason.reason === eq) return {
    rejection: `${e.name} was not run: the permission rules could not be evaluated for this call (internal error).`,
    objection: "crashed_check"
  };
  if (ask.behavior === "deny") return {
    rejection: ask.message,
    objection: "deny_rule"
  };
  if (_I(ask)) return {
    rejection: `${e.name} was not run: a permission rule says to ask a person before a call like this one, and a call that runs in this environment cannot ask. Retrying won't help while that rule is in effect.`,
    objection: "ask_rule"
  };
  let s = al(ask.decisionReason, ZSe);
  if (s !== void 0) return {
    rejection: qoo(ueo(ask, s)),
    objection: "circuit_breaker"
  };
  let r = al(ask.decisionReason, V4) !== void 0;
  return !r && al(ask.decisionReason) !== void 0 ? {
    wasSafetyAskSkipped: !0,
    ask: ask
  } : {
    rejection: `${e.name} was not run: ${ask.message} A call that runs in this environment cannot put that to a person. Retrying won't help.`,
    objection: r ? "circuit_breaker" : "other_ask"
  };
}
async function Jpa(e, t, toolUseContext_2, o, s) {
  if (o === void 0) return {
    toolUseContext: toolUseContext_2
  };
  let r = {
      ...v(toolUseContext_2, o),
      inputFromAnotherMachine: toolUseContext_2.inputFromAnotherMachine
    },
    {
      toolUseId: toolUseId
    } = r,
    u = toolUseId === void 0 ? void 0 : {
      toolUseId: toolUseId,
      opened: Fze(r, toolUseId, e.name)
    },
    i = await A(e, t, {
      ...r,
      permissionPhase: void 0,
      permissionRound: u?.opened
    }).catch(y => {
      if (u) zce(r, u.toolUseId, u.opened);
      throw y;
    }),
    permissionPhase = (u && zce(r, u.toolUseId, u.opened)) ?? {};
  if (!("rejection" in i)) {
    let y = await PMo(s, e, t, r.session, i.ask);
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
  if (i.objection === "crashed_check") m("mcp_serve_plain_call", i.objection);else c("mcp_serve_plain_call", i.objection);
  return {
    rejection: i.rejection
  };
}
function M(e) {
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
async function yUr(e, t, n, o, s = Kw, callerLogsSharedEvents = !1, smallResultAsked = !1) {
  using u = o();
  try {
    return await e.call(t, n, s, el({
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
    return _rt(e, error), {
      failure: h6(error)
    };
  }
}
function _rt(e, t) {
  if (mct(t) || s8t(t).isSad) return;
  let n = F(t);
  a("telemetryMessage" in n ? n : qe(n, `mcp server tool '${e.name}' threw`));
}
function _Ur(e, t, n, o) {
  try {
    let s = B(e, t, o);
    for (let [r, {
      output: output,
      ...u
    }] of s.entries()) try {
      let result = SUr(`${e.name} ran. Its output is in this answer's structured content.`, output, !1, n);
      if (Buffer.byteLength(_(result), "utf8") <= x) return {
        ...u,
        result: result,
        answer: "output",
        ...(j(e, t) && {
          wasOutputCut: !0
        })
      };
    } catch (error) {
      if (r === s.length - 1) throw error;
      k(e, error, " in one form, so a smaller one is tried");
    }
    return S(e, "result_too_large", n);
  } catch (error) {
    return k(e, error, ""), S(e, "result_unbuildable", n);
  }
}
function k(e, t, n) {
  a(qe(F(t), `mcp server tool '${e.name}' output could not be encoded${n}`));
}
function B(e, output_3, n) {
  if (e.name === Yt && it(output_3)) return T(output_3, [{
    output: R(e, output_3)
  }]);
  if (e.name !== dt || !it(output_3)) return [{
    output: R(e, output_3)
  }];
  let output_2 = {
    ...output_3,
    originalFile: null
  };
  if (typeof output_3.originalFile !== "string" || n === void 0) return T(output_3, [{
    output: output_2
  }]);
  if (n.isSubagent) return T(output_3, [{
    output: output_2,
    originalFileLeftOutReason: "for_subagent"
  }]);
  if (n.sessionVersion < LNt.editOriginalFile) return T(output_3, [{
    output: output_2,
    originalFileLeftOutReason: "older_session"
  }]);
  return T(output_3, Buffer.byteLength(output_3.originalFile, "utf8") > JYs ? [{
    output: output_2,
    originalFileLeftOutReason: "over_limit"
  }] : [{
    output: output_3
  }, {
    output: output_2,
    originalFileLeftOutReason: "answer_too_large"
  }]);
}
function T(e, t) {
  let n = e.gitDiff === void 0 ? [] : t.map(item => ({
    ...item,
    output: P(item.output, {
      gitDiff: void 0
    }),
    diffLeftOut: "git_diff"
  }));
  return [...t, ...n, {
    ...t.at(-1),
    output: {
      ...e,
      gitDiff: void 0,
      structuredPatch: [],
      originalFile: null
    },
    diffLeftOut: "all"
  }];
}
function R(e, t) {
  if (j(e, t)) {
    let persistedOutputSize = t.persistedOutputSize,
      o = typeof persistedOutputSize === "number" ? `the command printed ${en(persistedOutputSize)}; ` : "",
      s = typeof persistedOutputSize === "number" && persistedOutputSize >= Rv ? `The first ${en(Rv)} of the command's output are` : "The command's whole output is",
      r = `(output truncated: ${o}only the start was returned, and a saved copy of this result holds only that start. ${s} in the file ${t.persistedOutputPath}. If the file is gone, run the command again with ${mst(e.name)}, if that is safe.)
`,
      l = Math.max(l1(), o0r) - r.length;
    return {
      ...t,
      stdout: `${r}${Q(t.stdout, l)}`
    };
  }
  switch (e.name) {
    case Yt:
      return e.stripForStorage?.(t) ?? t;
    case gi:
      return P(t, {
        original_file: "",
        updated_file: ""
      });
    default:
      return t;
  }
}
function j(e, t) {
  return e.name === Me && it(t) && typeof t.stdout === "string" && Boolean(t.persistedOutputPath) && t.isImage !== !0;
}
function P(e, t) {
  return it(e) ? {
    ...e,
    ...t
  } : e;
}
function S(e, unsent, n) {
  return {
    result: bUr(`${e.name} ran, but its result could not be sent back. Check what it changed before running it again.`, n),
    unsent: unsent
  };
}
function bUr(e, notes) {
  return P1({
    envelope: {
      v: v_2,
      outcome: "failed",
      target: xWt(),
      code: "internal_error",
      message: e,
      ...(notes.length > 0 && {
        notes: notes
      })
    },
    content: e
  });
}
function okt(e, disposition, notes_2) {
  let content = yu(e);
  return P1({
    envelope: {
      v: v_2,
      outcome: "completed",
      target: xWt(),
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
export { Ypa, gUr, RWt, Xpa, kMo, Aun, AWt, vMo, Jpa, yUr, _rt, _Ur, bUr, okt };