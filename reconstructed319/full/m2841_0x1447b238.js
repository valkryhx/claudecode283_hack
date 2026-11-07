// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  f
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  qe,
  F
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  _
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Q
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  dt,
  Yt,
  Me
} from "B:/~BUN/root/chunk-9kvvd0hy.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  LNt
} from "B:/~BUN/root/chunk-pdtjaehv.js";
import {
  vf,
  Hu,
  P1
} from "B:/~BUN/root/chunk-x6frvp1m.js";
import {
  g,
  m,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  gi,
  Qr,
  _r,
  On,
  gie,
  yu
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  V4,
  ZSe
} from "B:/~BUN/root/chunk-r8p1hzqw.js";
import {
  ev
} from "B:/~BUN/root/chunk-z31ebsm2.js";
import {
  wn
} from "B:/~BUN/root/chunk-y1b1g4ac.js";
import {
  h6,
  Z0,
  Kw,
  ueo,
  _I,
  eq,
  Sx,
  al,
  mct,
  s8t,
  qoo,
  el
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  Rv
} from "B:/~BUN/root/chunk-xgwmwbnb.js";
import {
  l1
} from "B:/~BUN/root/chunk-yg4ttpr7.js";
import {
  Fze,
  zce
} from "B:/~BUN/root/chunk-8ytf4evt.js";
import {
  zqn
} from "B:/~BUN/root/chunk-7t39vrbw.js";
import {
  Urt,
  VBr,
  JYs,
  F0o,
  LYn,
  QYs,
  $0o,
  ZYs,
  e6s
} from "B:/~BUN/root/chunk-51n55x6w.js";
import {
  xun,
  kUr,
  PMo
} from "B:/~BUN/root/chunk-v5m7ge17.js";
import {
  SUr,
  xWt
} from "B:/~BUN/root/chunk-xetka2gq.js";
import {
  Fme,
  P4e,
  Hme,
  skt,
  ikt
} from "B:/~BUN/root/chunk-bk8e5jj0.js";
import {
  I4e
} from "B:/~BUN/root/chunk-5n9rt7jw.js";
import {
  mst
} from "B:/~BUN/root/chunk-s6ayq4b7.js";
import {
  Fs
} from "B:/~BUN/root/chunk-fkcdzerj.js";
import {
  ze
} from "B:/~BUN/root/chunk-xwzn0yxv.js";
import {
  o0r
} from "B:/~BUN/root/chunk-bxk17zm0.js";
import {
  it
} from "B:/~BUN/root/chunk-09e9xfa4.js";
import {
  en
} from "B:/~BUN/root/chunk-mdq0dxn3.js";
import {
  randomUUID as L
} from "crypto";

function w() {
  return ev.CLAUDE_CODE_MCP_SERVE_TOOL_OUTPUT === !0
}
var b = new Set([Me, ze, dt, Yt, gi, _r, Qr]),
  x = 12582912;

function Ypa(e, t) {
  let n = gUr(e, t);
  return n && {
    experimental: {
      [Urt]: n
    }
  }
}

function gUr(e, t) {
  if (!w() || t === void 0) return;
  let n = C(e(), t);
  if (!$0o(n.deny_rules)) {
    m("mcp_serve_tool_output", "deny_rules_over_bounds");
    return
  }
  let o = F0o() ? zqn() : void 0;
  return {
    ...n,
    ...o !== void 0 && {
      tools: [...n.tools, ...P4e, Fs],
      tool_host_interface: o
    }
  }
}

function RWt(e) {
  if (!I()) return !1;
  return LYn(it(e) ? e[Urt] : void 0)
}

function I() {
  return w() && F0o()
}

function C(e, t) {
  return e6s({
    tools: E(e),
    denyRules: t.alwaysDenyRules.cliArg ?? []
  })
}
async function Xpa({
  name: e,
  args: t,
  meta: n,
  tools: o,
  launchPermissionContext: s,
  newCall: r,
  startHeartbeat: l
}) {
  let u = QYs(n);
  if (u.kind === "absent") return;
  let i = kUr(n).kind === "absent" ? U(u, e, o, s) : p("invalid_request", `${e} was not run: a call that carries _meta["${xun}"] is answered only as a plain call. Call it without asking for its output object.`, "carries_asks_key");
  if ("refusal" in i) return c("mcp_serve_tool_output", i.reason, {
    tool: Aun(e)
  }), AWt(i.refusal);
  let {
    toolUseContext: h,
    release: y
  } = r();
  try {
    let d = await D(i.tool, t, v(h, I4e(i.launchPermissionContext)), l);
    if (!h.abortController.signal.aborted) {
      let O = Aun(i.tool.name);
      if ("unsent" in d) m("mcp_serve_tool_output", d.unsent, {
        tool: O
      });
      else if (d.objection === "crashed_check") m("mcp_serve_tool_output", d.objection, {
        tool: O
      });
      else if (d.objection !== void 0) c("mcp_serve_tool_output", d.objection, {
        tool: O
      });
      else g("mcp_serve_tool_output", {
        tool: O,
        answer: f(d.answer),
        safety_ask_skipped: d.wasSafetyAskSkipped === !0,
        ...d.wasOutputCut && {
          output_cut: !0
        },
        ...d.diffLeftOut && {
          diff_left_out: f(d.diffLeftOut)
        }
      })
    }
    return d.result
  } finally {
    y()
  }
}

function U(e, t, n, o) {
  if (!w()) return p("unsupported_protocol", `${t} was not run: this server is not set up to return output objects (CLAUDE_CODE_MCP_SERVE_TOOL_OUTPUT is not on). Call it without asking for its output object.`);
  if (o === void 0) return p("unsupported_protocol", `${t} was not run: this server holds no permission rules (CLAUDE_CODE_MCP_SERVE_SETTINGS was unset or empty when it started), and it returns output objects only for calls it can judge. Call it without asking for its output object.`, "no_launch_rules");
  let {
    deny_rules: s
  } = C(n, o);
  if (!$0o(s)) return p("unsupported_protocol", `${t} was not run: this server was launched with more or longer deny rules than it can advertise, so it returns no output objects. Call it without asking for its output object.`, "deny_rules_over_bounds");
  if (e.kind === "malformed") return p("invalid_request", `${t} was not run: _meta["${Urt}"] must be exactly { versions, deny_rules_digest }. versions: up to 64 whole numbers. deny_rules_digest: the SHA-256 of JSON.stringify(deny_rules), for the deny_rules this server advertises, as 64 lower-case hex characters.`);
  if (e.kind === "no_shared_version") return p("unsupported_protocol", `${t} was not run: this server returns output objects only in version ${VBr.join(", ")}, and the request lists ${e.versions.join(", ")||"none"}.`);
  if (e.denyRulesDigest !== ZYs(s)) return p("unsupported_protocol", `${t} was not run: the request's deny_rules_digest is not that of the deny_rules this server advertises. Reconnect and read them again.`, "deny_rules_digest_mismatch");
  let r = wn(n, t);
  if (r === void 0) return p("not_served", `${t} was not run: this server has no tool by that name.`);
  return b.has(t) ? {
    tool: r,
    launchPermissionContext: o
  } : p("not_served", `${t} was not run: the tools this server answers with an output object are ${E(n).join(", ")||"none"}. Call it without asking for its output object.`)
}

function kMo(e) {
  return b.has(e)
}

function E(e) {
  return e.map((t) => t.name).filter((t) => b.has(t))
}

function Aun(e) {
  return b.has(e) || P4e.has(e) ? On(e) : gie(e)
}

function AWt(e) {
  return P1({
    envelope: {
      v: vf,
      outcome: "refused",
      target: xWt(),
      ...e
    },
    content: Hu(e.message)
  })
}

function vMo(e) {
  return P1({
    envelope: {
      v: vf,
      outcome: "acknowledged",
      target: xWt(),
      ask_id: e
    },
    content: "Nothing was run: the permission question was answered with a no, or taken back."
  })
}

function p(e, t, n = e) {
  return {
    refusal: {
      code: e,
      message: t
    },
    reason: n
  }
}
async function D(e, t, n, o) {
  let s = {
      ...t
    },
    r = Hme.filter((h) => (h in s)),
    l = r.length > 0 ? [ikt(r)] : [],
    u = await N(e, s, n);
  if ("rejection" in u) return {
    result: okt(u.rejection, M(u.objection), l),
    answer: "not_run",
    objection: u.objection
  };
  let i = await yUr(e, u.input, n, o);
  return {
    ..."failure" in i ? {
      result: okt(i.failure, "ran", l),
      answer: "tool_failed"
    } : _Ur(e, i.data, l),
    wasSafetyAskSkipped: u.wasSafetyAskSkipped
  }
}
async function N(e, t, n) {
  try {
    if (!e.isEnabled()) return {
      rejection: `Tool ${e.name} is not enabled`
    };
    let o = skt(e, t);
    if (!o.success) return {
      rejection: `InputValidationError: ${Z0(e.name,o.error)}`
    };
    let s = await e.validateInput?.(o.data, n);
    if (s !== void 0 && !s.result) return {
      rejection: s.message,
      ...s.deniedByPermissionRule === !0 && {
        objection: "deny_rule"
      }
    };
    let r = await A(e, o.data, n);
    return "rejection" in r ? r : {
      input: o.data,
      ...r
    }
  } catch (o) {
    return _rt(e, o), {
      rejection: h6(o)
    }
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
  }
}
async function A(e, t, n) {
  let o = await Sx(e, t, n, {
    crashIsObjection: !0
  }).catch((l) => {
    if (n.abortController.signal.aborted) throw l;
    return _rt(e, l), "crashed"
  });
  if (o === null) return {
    wasSafetyAskSkipped: !1
  };
  if (o === "crashed" || o.decisionReason?.type === "other" && o.decisionReason.reason === eq) return {
    rejection: `${e.name} was not run: the permission rules could not be evaluated for this call (internal error).`,
    objection: "crashed_check"
  };
  if (o.behavior === "deny") return {
    rejection: o.message,
    objection: "deny_rule"
  };
  if (_I(o)) return {
    rejection: `${e.name} was not run: a permission rule says to ask a person before a call like this one, and a call that runs in this environment cannot ask. Retrying won't help while that rule is in effect.`,
    objection: "ask_rule"
  };
  let s = al(o.decisionReason, ZSe);
  if (s !== void 0) return {
    rejection: qoo(ueo(o, s)),
    objection: "circuit_breaker"
  };
  let r = al(o.decisionReason, V4) !== void 0;
  return !r && al(o.decisionReason) !== void 0 ? {
    wasSafetyAskSkipped: !0,
    ask: o
  } : {
    rejection: `${e.name} was not run: ${o.message} A call that runs in this environment cannot put that to a person. Retrying won't help.`,
    objection: r ? "circuit_breaker" : "other_ask"
  }
}
async function Jpa(e, t, n, o, s) {
  if (o === void 0) return {
    toolUseContext: n
  };
  let r = {
      ...v(n, o),
      inputFromAnotherMachine: n.inputFromAnotherMachine
    },
    {
      toolUseId: l
    } = r,
    u = l === void 0 ? void 0 : {
      toolUseId: l,
      opened: Fze(r, l, e.name)
    },
    i = await A(e, t, {
      ...r,
      permissionPhase: void 0,
      permissionRound: u?.opened
    }).catch((y) => {
      if (u) zce(r, u.toolUseId, u.opened);
      throw y
    }),
    h = (u && zce(r, u.toolUseId, u.opened)) ?? {};
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
        permissionPhase: h
      }
    }
  }
  if (i.objection === "crashed_check") m("mcp_serve_plain_call", i.objection);
  else c("mcp_serve_plain_call", i.objection);
  return {
    rejection: i.rejection
  }
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
      return "denied_by_rule"
  }
}
async function yUr(e, t, n, o, s = Kw, r = !1, l = !1) {
  using u = o();
  try {
    return await e.call(t, n, s, el({
      content: []
    }), void 0, {
      gitDiffRead: !0,
      ...r && {
        callerLogsSharedEvents: r
      },
      ...l && {
        smallResultAsked: l
      }
    })
  } catch (i) {
    return _rt(e, i), {
      failure: h6(i)
    }
  }
}

function _rt(e, t) {
  if (mct(t) || s8t(t).isSad) return;
  let n = F(t);
  a("telemetryMessage" in n ? n : qe(n, `mcp server tool '${e.name}' threw`))
}

function _Ur(e, t, n, o) {
  try {
    let s = B(e, t, o);
    for (let [r, {
        output: l,
        ...u
      }] of s.entries()) try {
      let i = SUr(`${e.name} ran. Its output is in this answer's structured content.`, l, !1, n);
      if (Buffer.byteLength(_(i), "utf8") <= x) return {
        ...u,
        result: i,
        answer: "output",
        ...j(e, t) && {
          wasOutputCut: !0
        }
      }
    } catch (i) {
      if (r === s.length - 1) throw i;
      k(e, i, " in one form, so a smaller one is tried")
    }
    return S(e, "result_too_large", n)
  } catch (s) {
    return k(e, s, ""), S(e, "result_unbuildable", n)
  }
}

function k(e, t, n) {
  a(qe(F(t), `mcp server tool '${e.name}' output could not be encoded${n}`))
}

function B(e, t, n) {
  if (e.name === Yt && it(t)) return T(t, [{
    output: R(e, t)
  }]);
  if (e.name !== dt || !it(t)) return [{
    output: R(e, t)
  }];
  let o = {
    ...t,
    originalFile: null
  };
  if (typeof t.originalFile !== "string" || n === void 0) return T(t, [{
    output: o
  }]);
  if (n.isSubagent) return T(t, [{
    output: o,
    originalFileLeftOutReason: "for_subagent"
  }]);
  if (n.sessionVersion < LNt.editOriginalFile) return T(t, [{
    output: o,
    originalFileLeftOutReason: "older_session"
  }]);
  return T(t, Buffer.byteLength(t.originalFile, "utf8") > JYs ? [{
    output: o,
    originalFileLeftOutReason: "over_limit"
  }] : [{
    output: t
  }, {
    output: o,
    originalFileLeftOutReason: "answer_too_large"
  }])
}

function T(e, t) {
  let n = e.gitDiff === void 0 ? [] : t.map((o) => ({
    ...o,
    output: P(o.output, {
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
  }]
}

function R(e, t) {
  if (j(e, t)) {
    let n = t.persistedOutputSize,
      o = typeof n === "number" ? `the command printed ${en(n)}; ` : "",
      s = typeof n === "number" && n >= Rv ? `The first ${en(Rv)} of the command's output are` : "The command's whole output is",
      r = `(output truncated: ${o}only the start was returned, and a saved copy of this result holds only that start. ${s} in the file ${t.persistedOutputPath}. If the file is gone, run the command again with ${mst(e.name)}, if that is safe.)
`,
      l = Math.max(l1(), o0r) - r.length;
    return {
      ...t,
      stdout: `${r}${Q(t.stdout,l)}`
    }
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
      return t
  }
}

function j(e, t) {
  return e.name === Me && it(t) && typeof t.stdout === "string" && Boolean(t.persistedOutputPath) && t.isImage !== !0
}

function P(e, t) {
  return it(e) ? {
    ...e,
    ...t
  } : e
}

function S(e, t, n) {
  return {
    result: bUr(`${e.name} ran, but its result could not be sent back. Check what it changed before running it again.`, n),
    unsent: t
  }
}

function bUr(e, t) {
  return P1({
    envelope: {
      v: vf,
      outcome: "failed",
      target: xWt(),
      code: "internal_error",
      message: e,
      ...t.length > 0 && {
        notes: t
      }
    },
    content: e
  })
}

function okt(e, t, n) {
  let o = yu(e);
  return P1({
    envelope: {
      v: vf,
      outcome: "completed",
      target: xWt(),
      is_error: !0,
      content: o,
      disposition: t,
      ...n.length > 0 && {
        notes: n
      }
    },
    content: o
  })
}
export {
  Ypa,
  gUr,
  RWt,
  Xpa,
  kMo,
  Aun,
  AWt,
  vMo,
  Jpa,
  yUr,
  _rt,
  _Ur,
  bUr,
  okt
};
