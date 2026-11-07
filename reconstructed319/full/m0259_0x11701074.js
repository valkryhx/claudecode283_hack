// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  dN
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  a0
} from "B:/~BUN/root/chunk-r8p1hzqw.js";
import {
  le
} from "B:/~BUN/root/chunk-begxsvab.js";
import {
  yr,
  mn
} from "B:/~BUN/root/chunk-44q965xg.js";
import {
  xl,
  xnn,
  Uht,
  cTs,
  Kg
} from "B:/~BUN/root/chunk-6j3fjnhn.js";
import {
  yo
} from "B:/~BUN/root/chunk-1s0yt4vj.js";
import {
  LZe,
  rH
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  Xn
} from "B:/~BUN/root/chunk-vmcmhkh2.js";
import {
  EA
} from "B:/~BUN/root/chunk-eyvtcj15.js";
import {
  $r,
  RD
} from "B:/~BUN/root/chunk-xbnyqyft.js";
import {
  L
} from "B:/~BUN/root/chunk-5ha2avah.js";

function l(e, o) {
  if (o.length === 0) return e;
  return {
    ...e,
    alwaysAllowRules: {
      ...e.alwaysAllowRules,
      command: L([...e.alwaysAllowRules.command || [], ...o])
    }
  }
}

function f(e, o) {
  if (o.length === 0) return e;
  return {
    ...e,
    alwaysDenyRules: {
      ...e.alwaysDenyRules,
      command: L([...e.alwaysDenyRules.command || [], ...o])
    }
  }
}

function mCr(e, o, t, r) {
  if (!r?.replaceCommandRules && !r?.replaceDenyRules && r?.frozenCommandDenies === void 0 && o.length === 0 && t.length === 0) return e;
  return () => {
    let s = e(),
      n = s.toolPermissionContext.pollEventDeliveryGuard === !0 ? s.toolPermissionContext : r?.replaceCommandRules ? {
        ...s.toolPermissionContext,
        alwaysAllowRules: {
          ...s.toolPermissionContext.alwaysAllowRules,
          command: o
        }
      } : l(s.toolPermissionContext, o),
      i = r?.replaceDenyRules ? {
        ...n,
        alwaysDenyRules: {
          ...n.alwaysDenyRules,
          command: [...t, ...n.turnDisallowedTools ?? []]
        }
      } : r?.frozenCommandDenies !== void 0 ? {
        ...n,
        alwaysDenyRules: {
          ...n.alwaysDenyRules,
          command: L([...r.frozenCommandDenies, ...n.alwaysDenyRules.command ?? [], ...t])
        }
      } : f(n, t);
    return {
      ...s,
      toolPermissionContext: i
    }
  }
}
class hCr {
  mode;
  autoClassifierActive;
  constructor(e, o) {
    this.mode = e, this.autoClassifierActive = o
  }
  toJSON() {
    return
  }
}

function hGi(e) {
  return new hCr(e, yo(e))
}

function _Es(e) {
  return e instanceof hCr && !e.autoClassifierActive
}

function p(e) {
  if (!_Es(e)) return;
  let o = e.mode;
  switch (o) {
    case "default":
    case "acceptEdits":
    case "dontAsk":
    case "bubble":
      return o;
    case "plan":
    case "bypassPermissions":
      return "default";
    case "auto":
      return;
    default: {
      let t = o;
      return
    }
  }
}
var C = new Set;

function bEs(e) {
  return mn(yr(e))
}

function Hgo(e) {
  let o = e.remoteBrowserCardAnswers;
  return o !== void 0 && o.list === e.alwaysAllowRules.session ? o.rules : C
}

function tnn(e, o) {
  let t = o.alwaysAllowRules.session;
  if (e.remoteBrowserCardAnswers === void 0 || t === e.alwaysAllowRules.session) return o;
  let r = Hgo(e),
    s = new Set((t ?? []).map(bEs)),
    n = new Set([...r].filter((i) => s.has(i)));
  return {
    ...o,
    remoteBrowserCardAnswers: t === void 0 || n.size === 0 ? void 0 : {
      rules: n,
      list: t
    }
  }
}
var R = {
  allowed_tools: "strip",
  avoid_prompts: "strip",
  permission_mode: "strip",
  working_directory: "strip",
  disallowed_tools: "keep",
  bash_command_clamp: "keep",
  sandbox_auto_allow_suspended: "keep",
  effort: "keep",
  model: "keep",
  max_thinking_tokens: "keep",
  flag_settings: "keep"
};

function BNt(e) {
  if (!e) return e;
  return e.filter((o) => R[o.kind] === "keep")
}

function jNt(e) {
  return {
    ...e,
    abortController: Xn(),
    toolUseId: void 0,
    permissionPhase: void 0,
    autoModeClassified: void 0,
    ...le() && {
      autoModeDenialLimitRun: void 0,
      autoModeScriptCheckDeferred: void 0
    },
    permissionLayers: BNt(e.permissionLayers)
  }
}

function SEs(e) {
  return e.getAppState?.().mcp?.suppressedClaudeAiConnectors ?? []
}

function Gg(e) {
  let o = se(e);
  return o.mode !== "bypassPermissions" && !dN(o.mode, o.isBypassPermissionsModeAvailable)
}

function dk(e) {
  if (se(e).mode !== "plan") return !1;
  return sh(e)
}

function WNt(e) {
  return e.getAppState()
}

function sh(e) {
  return !Gg(e) || se(e).shouldAvoidPermissionPrompts === !0
}

function A(e) {
  return e === $r || e.startsWith(`${$r}(`) || e.startsWith(RD)
}

function x(e) {
  let o = A,
    t = !1,
    r = {},
    s = {};
  for (let [n, i] of Object.entries(e.strippedDangerousRules ?? {}))
    if (i !== void 0) s[n] = [...i];
  for (let [n, i] of Object.entries(e.alwaysAllowRules)) {
    if (i === void 0) continue;
    let a = i.filter((d) => !o(d));
    if (a.length !== i.length) {
      t = !0;
      for (let d of i)
        if (o(d)) {
          let m = s[n] ??= [];
          if (!m.includes(d)) m.push(d)
        }
    }
    r[n] = a
  }
  if (!t) return e;
  return tnn(e, {
    ...e,
    alwaysAllowRules: r,
    strippedDangerousRules: s
  })
}

function jue(e) {
  return e.getAppState().toolPermissionContext
}

function se(e) {
  let o = e.getAppState().toolPermissionContext,
    t = o !== void 0 && o.pollEventDeliveryGuard === !0;
  if (t) o = x(o);
  let r = e.permissionLayers;
  if (!r) return c(e, o);
  let s = r.findLast((n) => n.kind === "working_directory");
  for (let n of r) switch (n.kind) {
    case "allowed_tools":
      if (!t) o = l(o, [...n.allowedTools]);
      break;
    case "disallowed_tools":
      o = f(o, [...n.disallowedTools]);
      break;
    case "bash_command_clamp":
      o = {
        ...o,
        bashCommandClamps: [...o.bashCommandClamps ?? [], n.rules]
      };
      break;
    case "avoid_prompts":
      if (!a0(o)) o = {
        ...o,
        shouldAvoidPermissionPrompts: !0,
        avoidsPromptsByNature: !0
      };
      break;
    case "sandbox_auto_allow_suspended":
      if (!o.sandboxAutoAllowSuspended) o = {
        ...o,
        sandboxAutoAllowSuspended: !0
      };
      break;
    case "permission_mode": {
      if (n.mode === "bypassPermissions" && (EA() || !o.isBypassPermissionsModeAvailable)) break;
      o = {
        ...o,
        mode: n.mode
      };
      break
    }
    case "working_directory":
      if (n === s && !o.additionalWorkingDirectories.has(n.directory)) o = {
        ...o,
        additionalWorkingDirectories: new Map([...o.additionalWorkingDirectories, [n.directory, {
          path: n.directory,
          source: "session"
        }]])
      };
      break;
    case "effort":
    case "model":
    case "max_thinking_tokens":
    case "flag_settings":
      break
  }
  return c(e, o)
}

function c(e, o) {
  return b(e, P(e, k(e, o)))
}

function k(e, o) {
  if (o === void 0 || o.mode !== "auto" || e.forPromptShellCommand === !0 || e.forRemoteExecution === !0) return o;
  let t = p(e.permissionModeAtRequest);
  return t === void 0 ? o : u(t, o)
}

function b(e, o) {
  if (e.forPromptShellCommand !== !0 || o === void 0) return o;
  return o.mode === "auto" ? u("default", o) : o
}

function u(e, o) {
  return {
    ...o,
    mode: e,
    modeBeforeRewrite: o.modeBeforeRewrite ?? o.mode
  }
}

function P(e, o) {
  if (e.forRemoteExecution !== !0 || o === void 0) return o;
  let {
    blockReadsOutsideWorkingDirectories: t,
    blockWritesOutsideWorkingDirectories: r,
    ...s
  } = o;
  return o.mode === "acceptEdits" || o.mode === "bypassPermissions" ? u("default", s) : s
}

function bg(e) {
  let o;
  if (!e) return o;
  for (let t of e)
    if (t.kind === "effort") o = t.effort;
  return o
}

function gCr(e, o = S(e)) {
  let t = g(e);
  return xl(Uht(e.getAppState?.() ?? {}, t, e.pickedEffortModel), t, {
    withHold: o
  })
}

function Hy(e) {
  return bg(e.permissionLayers) ?? gCr(e)
}

function Q2(e) {
  return e.pickedEffortModel ?? LZe({
    permissionMode: se(e).mode,
    mainLoopModel: ru(e)
  }).model
}

function YFn(e, o, t) {
  return xnn(o, t) ? void 0 : Kg(o, cTs(e.getAppState(), o), {
    carriedEffort: null
  })
}

function XFn(e, o) {
  return xnn(o, ru(e)) ? {
    effortValue: Hy(e),
    turnEffort: bg(e.permissionLayers)
  } : {
    effortValue: cTs(e.getAppState(), o),
    turnEffort: void 0
  }
}

function S(e) {
  return e.agentContext === void 0 || rH(e.agentContext)
}

function JFn(e) {
  return Hy(e) === void 0 ? gCr(e, !1) : void 0
}

function g(e) {
  let o = e.options?.mainLoopModel;
  for (let t of e.permissionLayers ?? [])
    if (t.kind === "model") o = t.mainLoopModel;
  return o
}

function Wue(e) {
  return e.getAppState().sessionEffort
}

function ru(e) {
  return g(e) ?? e.options.mainLoopModel
}

function Tht(e) {
  let o = e.options.thinkingConfig;
  for (let t of e.permissionLayers ?? [])
    if (t.kind === "max_thinking_tokens") o = y(t.maxThinkingTokens);
  return o
}

function y(e) {
  return e === 0 ? {
    type: "disabled"
  } : {
    type: "enabled",
    budgetTokens: e
  }
}

function Cht(e) {
  return e.getAppState().ultracode === !0
}

function B_e(e, o) {
  if (o.length === 0) return e;
  let t = e.permissionLayers ? [...e.permissionLayers, ...o] : [...o],
    r;
  for (let i = o.length - 1; i >= 0; i--) {
    let a = o[i];
    if (a.kind === "model") {
      r = a.mainLoopModel;
      break
    }
  }
  let s;
  for (let i = o.length - 1; i >= 0; i--) {
    let a = o[i];
    if (a.kind === "max_thinking_tokens") {
      s = y(a.maxThinkingTokens);
      break
    }
  }
  return {
    ...e,
    permissionLayers: t,
    ...(r !== void 0 || s !== void 0) && {
      options: {
        ...e.options,
        ...r !== void 0 && {
          mainLoopModel: r
        },
        ...s !== void 0 && {
          thinkingConfig: s
        }
      }
    }
  }
}
export {
  mCr,
  hCr,
  hGi,
  _Es,
  bEs,
  Hgo,
  tnn,
  BNt,
  jNt,
  SEs,
  Gg,
  dk,
  WNt,
  sh,
  jue,
  se,
  bg,
  gCr,
  Hy,
  Q2,
  YFn,
  XFn,
  JFn,
  Wue,
  ru,
  Tht,
  Cht,
  B_e
};
