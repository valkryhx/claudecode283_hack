// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Ddn,
  Ldn,
  G2n,
  AT
} from "B:/~BUN/root/chunk-mzfrv3wm.js";
import {
  ojt
} from "B:/~BUN/root/chunk-3cca501e.js";

function h(e, o, s, n) {
  var r = e.length,
    t = s + (n ? 1 : -1);
  while (n ? t-- : ++t < r)
    if (o(e[t], t, e)) return t;
  return -1
}
var y = h;

function A(e) {
  return e !== e
}
var R = A;

function P(e, o, s) {
  var n = s - 1,
    r = e.length;
  while (++n < r)
    if (e[n] === o) return n;
  return -1
}
var f = P;

function E(e, o, s) {
  return o === o ? f(e, o, s) : y(e, R, s)
}
var _ = E;

function b(e, o) {
  var s = e == null ? 0 : e.length;
  return !!s && _(e, o, 0) > -1
}
var UAo = b;

function g(e, o, s) {
  var n = -1,
    r = e == null ? 0 : e.length;
  while (++n < r)
    if (s(o, e[n])) return !0;
  return !1
}
var BAo = g;

function D() {}
var Ybt = D;
var C = 1 / 0,
  I = !(ojt && 1 / G2n(new ojt([, -0]))[1] == C) ? Ybt : function(e) {
    return new ojt(e)
  },
  O = I;
var x = 200;

function N(e, o, s) {
  var n = -1,
    r = UAo,
    t = e.length,
    u = !0,
    l = [],
    i = l;
  if (s) u = !1, r = BAo;
  else if (t >= x) {
    var p = o ? null : O(e);
    if (p) return G2n(p);
    u = !1, r = Ldn, i = new Ddn
  } else i = o ? [] : l;
  e: while (++n < t) {
    var a = e[n],
      c = o ? o(a) : a;
    if (a = s || a !== 0 ? a : 0, u && c === c) {
      var m = i.length;
      while (m--)
        if (i[m] === c) continue e;
      if (o) i.push(c);
      l.push(a)
    } else if (!r(i, c, s)) {
      if (i !== l) i.push(c);
      l.push(a)
    }
  }
  return l
}
var Iln = N;

function v(e, o) {
  return e && e.length ? Iln(e, AT(o, 2)) : []
}
var Xi = v;
var uN = ["acceptEdits", "auto", "bypassPermissions", "default", "dontAsk", "plan"],
  S = [...uN],
  Kv = S,
  nG = "manual";

function Lb(e) {
  return e === "manual" ? "default" : e
}

function Pg(e) {
  let o = Lb(e);
  return S.find((s) => s === o)
}
var JAe = `Cannot set permission mode: must be one of ${uN.join(", ")}`,
  Mln = 32,
  fGn = /^[A-Za-z0-9_-]{1,64}$/,
  QAe = {
    dangerousRemoval: {
      bypassImmune: !0,
      waivableInBypass: !0,
      classifierRouted: !0,
      autoModeDeny: !0,
      hostPersonOnly: !1,
      localProjectionOnly: !1,
      servedUnplaceable: !1
    },
    backgroundOperator: {
      bypassImmune: !1,
      waivableInBypass: !1,
      classifierRouted: !0,
      autoModeDeny: !1,
      hostPersonOnly: !1,
      localProjectionOnly: !1,
      servedUnplaceable: !1
    },
    suspiciousWindowsPath: {
      bypassImmune: !1,
      waivableInBypass: !1,
      classifierRouted: !0,
      autoModeDeny: !1,
      hostPersonOnly: !1,
      localProjectionOnly: !1,
      servedUnplaceable: !1
    },
    isolatePeerMachines: {
      bypassImmune: !0,
      waivableInBypass: !1,
      classifierRouted: !1,
      autoModeDeny: !1,
      hostPersonOnly: !1,
      localProjectionOnly: !1,
      servedUnplaceable: !1
    },
    restrictedMode: {
      bypassImmune: !0,
      waivableInBypass: !1,
      classifierRouted: !1,
      autoModeDeny: !1,
      hostPersonOnly: !1,
      localProjectionOnly: !1,
      servedUnplaceable: !1
    },
    outsideReadsBlocked: {
      bypassImmune: !0,
      waivableInBypass: !1,
      classifierRouted: !1,
      autoModeDeny: !1,
      hostPersonOnly: !1,
      localProjectionOnly: !1,
      servedUnplaceable: !1
    },
    claudeSettingsFile: {
      bypassImmune: !1,
      waivableInBypass: !1,
      classifierRouted: !1,
      autoModeDeny: !1,
      hostPersonOnly: !0,
      localProjectionOnly: !1,
      servedUnplaceable: !1
    },
    internalHardDeny: {
      bypassImmune: !1,
      waivableInBypass: !1,
      classifierRouted: !1,
      autoModeDeny: !1,
      hostPersonOnly: !1,
      localProjectionOnly: !1,
      servedUnplaceable: !0
    },
    connectorFileSend: {
      bypassImmune: !0,
      waivableInBypass: !1,
      classifierRouted: !1,
      autoModeDeny: !1,
      hostPersonOnly: !1,
      localProjectionOnly: !1,
      servedUnplaceable: !1
    },
    unfinishedCheck: {
      bypassImmune: !0,
      waivableInBypass: !1,
      classifierRouted: !1,
      autoModeDeny: !1,
      hostPersonOnly: !0,
      localProjectionOnly: !1,
      servedUnplaceable: !1
    },
    ...{},
    ...{},
    ...{}
  };

function V4(e) {
  return d(e).some((o) => QAe[o]?.bypassImmune === !0)
}

function hNr(e) {
  return d(e).some((o) => {
    let s = QAe[o];
    return s?.bypassImmune === !0 && !s.waivableInBypass
  })
}

function pGn(e) {
  return d(e).some((o) => QAe[o]?.servedUnplaceable === !0)
}

function d(e) {
  return [...e.circuitBreaker !== void 0 ? [e.circuitBreaker] : [], ...e.also ?? []]
}

function kH(e) {
  return e.circuitBreaker !== void 0 && QAe[e.circuitBreaker]?.classifierRouted === !0
}

function V$s(e) {
  return (e.also ?? []).some((o) => {
    let s = QAe[o];
    return s?.bypassImmune === !0 && !s.classifierRouted
  })
}

function ZSe(e) {
  return e.circuitBreaker !== void 0 && QAe[e.circuitBreaker]?.autoModeDeny === !0
}

function KV(e) {
  return d(e).some((o) => QAe[o]?.hostPersonOnly === !0)
}

function K$s(e) {
  return d(e).some((o) => QAe[o]?.localProjectionOnly === !0)
}

function q$s(e) {
  return e.decideLocation === "pre-ask"
}

function Ptt(e, o) {
  return e.behavior !== "allow" && e !== o && !ewe(e)
}

function ewe(e) {
  return e.behavior === "deny" && e.invalidInput === !0
}
var y1t = ["rule", "mode", "subcommandResults", "permissionPromptTool", "hook", "asyncAgent", "sandboxOverride", "workingDir", "safetyCheck", "classifier", "other"];
var Y$s = ["browser"],
  ZAe = "Auto-allowed with sandbox (autoAllowBashIfSandboxed enabled)",
  Zie = "Read-only command is allowed",
  mGn = "Command is read-only and safe to execute",
  hGn = "All pipeline commands are individually allowed, some only by the read-only allowlist",
  gGn = "Auto mode held this command for the server-side classifier to review",
  gNr = "Auto mode reviews this action before it runs in the cloud environment",
  X$s = "Path is outside allowed working directories",
  yGn = "--restricted: path outside the working directory",
  vH = "Reads outside the working directories are blocked (permissions.blockReadsOutsideWorkingDirectories). Add the directory with /add-dir, or remove that setting.",
  Dln = "Writes outside the working directories are blocked (permissions.blockWritesOutsideWorkingDirectories). Add the directory with /add-dir, or remove that setting.",
  _1t = "Writes to Claude Code settings files are blocked while permissions.blockWritesOutsideWorkingDirectories is on, because a settings file can lift that block. While a managed settings folder cannot be resolved, any .json file counts as one.",
  yNr = "permission check needs a working directory; the session has none",
  Xbt = "permission check needs a config or temp path; the session has none",
  Lln = new Map([
    ["python", new Set(["-c"])],
    ["node", new Set(["-e", "--eval", "-p", "--print"])],
    ["nodejs", new Set(["-e", "--eval", "-p", "--print"])],
    ["bun", new Set(["-e", "--eval", "-p", "--print"])],
    ["perl", new Set(["-e", "-E"])],
    ["ruby", new Set(["-e"])],
    ["php", new Set(["-r"])],
    ["bash", new Set(["-c"])],
    ["sh", new Set(["-c"])],
    ["zsh", new Set(["-c"])],
    ["dash", new Set(["-c"])],
    ["ksh", new Set(["-c"])],
    ["lua", new Set(["-e"])],
    ["luajit", new Set(["-e"])],
    ["tsx", new Set(["-e", "--eval", "-p", "--print"])],
    ["deno", new Set(["eval"])],
    ["Rscript", new Set(["-e"])],
    ["julia", new Set(["-e", "-E"])],
    ["osascript", new Set(["-e"])]
  ]);

function fN(e) {
  return e?.type === "safetyCheck" && e.circuitBreaker === "outsideReadsBlocked"
}

function Jbt(e, o) {
  return e?.type === "sandboxOverride" && o.blockReadsOutsideWorkingDirectories === !0
}

function XS(e) {
  let o = `${e} names a path that is computed at run time, which cannot be checked against the read block (permissions.blockReadsOutsideWorkingDirectories)`;
  return {
    behavior: "ask",
    message: o,
    decisionReason: {
      type: "safetyCheck",
      reason: o,
      classifierApprovable: !1,
      circuitBreaker: "outsideReadsBlocked"
    }
  }
}

function f5(e) {
  let o = `${e}; under the read block (permissions.blockReadsOutsideWorkingDirectories) a command the shell parser cannot analyze asks the person`;
  return {
    behavior: "ask",
    message: o,
    decisionReason: {
      type: "safetyCheck",
      reason: o,
      classifierApprovable: !1,
      circuitBreaker: "outsideReadsBlocked"
    },
    suggestions: []
  }
}

function _Gn() {
  return {
    behavior: "ask",
    message: "This sed script is not on the allowlist and can read or write any file, which cannot be checked against the read block (permissions.blockReadsOutsideWorkingDirectories)",
    decisionReason: {
      type: "safetyCheck",
      reason: "This sed script is not on the allowlist and can read or write any file, which cannot be checked against the read block (permissions.blockReadsOutsideWorkingDirectories)",
      classifierApprovable: !1,
      circuitBreaker: "outsideReadsBlocked"
    }
  }
}
var Nln = "bashCommandClamp: no clamp rule matches this command",
  bGn = "bashCommandClamp fail-closed: permission check crashed",
  exe = "Classifier unavailable",
  _Nr = "Auto mode unavailable \u2014 stopped after repeated responses with no safety verdict",
  p5 = "classifier_switched_off",
  J$s = "Auto mode could not evaluate this action and is blocking it for safety",
  CHe = "Auto mode classifier transcript exceeded context window \u2014 falling back to manual approval (try /compact to reduce conversation size)",
  Q$s = "The conversation is too long for auto mode's check, so this needs your approval. Run /compact to shorten the conversation.",
  jAo = "A hook or plugin changed (or may have changed) a call in this response after auto mode reviewed it, so auto mode could not check what would run",
  bNr = "Auto mode classifier transcript exceeded context window; will try to compact the conversation before the next request",
  SGn = "The server-side auto mode classifier judged this action dangerous (it gave no explanation)",
  T = new Set([exe, _Nr, CHe, bNr]);

function Z$s(e) {
  return T.has(e) ? `Blocked: ${e}` : e
}

function b1t(e) {
  if (e.reason === exe || e.reason === _Nr) return "unavailable";
  return e.noVerdict ? "no_verdict" : "block"
}
var S1t = "Memory is paused for this session; only the user can turn it back on.",
  SNr = "memory access blocked by /pause-memory",
  M = ["auto_mode_no_check_in_session", "auto_mode_stop_no_check_in_session", "auto_mode_stop_no_result_for_calls", "auto_mode_stop_no_verdict"],
  wNr = ["classifier_transcript_too_long", "outside_reads_blocked", "memory_paused", ...M];

function kNr(e) {
  return e?.type === "subcommandResults" ? e.typeOnWire ?? e.type : e?.type
}

function Hpe(e) {
  switch (e?.type) {
    case "classifier":
      return e.noVerdict === !0 && (e.reason === CHe || e.reason === bNr) ? "classifier_transcript_too_long" : e.hostCode;
    case "other":
    case "safetyCheck":
      switch (e.reason) {
        case CHe:
          return "classifier_transcript_too_long";
        case vH:
          return "outside_reads_blocked";
        case S1t:
        case SNr:
          return "memory_paused";
        default:
          return
      }
    case "subcommandResults": {
      let o;
      for (let s of e.reasons.values()) {
        let n = Hpe(s.decisionReason);
        if (n === "outside_reads_blocked") return n;
        o ??= n
      }
      return o
    }
    default:
      return
  }
}
var WAo = "ask rule on hook-rewritten input",
  wGn = {
    type: "asyncAgent",
    reason: WAo
  },
  zAo = {
    type: "asyncAgent",
    reason: "tool requires user interaction; no prompt available in headless mode"
  },
  kGn = "no approval surface in this session; permission request denied automatically",
  eUs = {
    type: "asyncAgent",
    reason: kGn
  };

function a0(e) {
  return e.shouldAvoidPermissionPrompts === !0 && (e.denyInsteadOfPrompting !== !0 || e.avoidsPromptsByNature === !0)
}
var B = "nobody can be asked in this headless run; a call that needs a person's approval was denied automatically",
  tUs = {
    type: "asyncAgent",
    reason: B
  };

function Fln(e) {
  return {
    ...e.decisionReason !== void 0 && {
      decisionReason: e.decisionReason
    },
    ...e.matchedAskRule !== void 0 && {
      matchedAskRule: e.matchedAskRule
    }
  }
}

function RHe(e) {
  return e.askRequiresUserInteraction === !0
}
var nUs = {
    type: "other",
    reason: "MCP tool requires user interaction; not supported via --permission-prompt-tool"
  },
  rUs = {
    type: "other",
    reason: "This MCP server's name starts like a claude.ai connector's, so --permission-prompt-tool cannot approve its tools. To use them here, the server needs another name."
  },
  oUs = {
    type: "other",
    reason: "--permission-prompt-tool cannot approve this MCP tool, because another tool of its server gets the same name in Claude Code. To use it here, the server must rename one of them."
  },
  sUs = {
    type: "other",
    reason: "Another MCP server already holds this server's name, its name reads as another server's, or the name could not be saved, so --permission-prompt-tool cannot approve its tools. To use them here, reconnect the server. If this message returns, give the server another name."
  },
  Qbt = "tool permission stream closed before response received",
  Ott = "canUseTool returned a schema-invalid permission result",
  oqe = "tool permission request failed",
  vGn = "tool permission request aborted",
  vNr = "Cancelled at the classifier billing notice",
  ENr = "Stopped at the offer to leave auto mode",
  iUs = {
    type: "other",
    reason: Qbt
  },
  Zbt = {
    type: "other",
    reason: Ott
  },
  GAo = "permission prompt tool no longer connected",
  aUs = {
    type: "other",
    reason: GAo
  },
  VAo = "permission prompt tool is on server remote-browser under its mode floor",
  lUs = {
    type: "other",
    reason: VAo
  },
  Hln = {
    type: "other",
    reason: oqe
  },
  AHe = {
    type: "other",
    reason: vGn
  };
export {
  UAo,
  BAo,
  Ybt,
  Iln,
  Xi,
  uN,
  Kv,
  nG,
  Lb,
  Pg,
  JAe,
  Mln,
  fGn,
  QAe,
  V4,
  hNr,
  pGn,
  kH,
  V$s,
  ZSe,
  KV,
  K$s,
  q$s,
  Ptt,
  ewe,
  y1t,
  Y$s,
  ZAe,
  Zie,
  mGn,
  hGn,
  gGn,
  gNr,
  X$s,
  yGn,
  vH,
  Dln,
  _1t,
  yNr,
  Xbt,
  Lln,
  fN,
  Jbt,
  XS,
  f5,
  _Gn,
  Nln,
  bGn,
  exe,
  _Nr,
  p5,
  J$s,
  CHe,
  Q$s,
  jAo,
  bNr,
  SGn,
  Z$s,
  b1t,
  S1t,
  SNr,
  wNr,
  kNr,
  Hpe,
  WAo,
  wGn,
  zAo,
  kGn,
  eUs,
  a0,
  tUs,
  Fln,
  RHe,
  nUs,
  rUs,
  oUs,
  sUs,
  Qbt,
  Ott,
  oqe,
  vGn,
  vNr,
  ENr,
  iUs,
  Zbt,
  GAo,
  aUs,
  VAo,
  lUs,
  Hln,
  AHe
};
