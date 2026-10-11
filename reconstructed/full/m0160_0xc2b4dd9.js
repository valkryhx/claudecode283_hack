// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  K1
} from "B:/~BUN/root/chunk-ah3egpyh.js";
import {
  Aa
} from "B:/~BUN/root/chunk-bt3h0syz.js";
import {
  co,
  FR
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  ql
} from "B:/~BUN/root/chunk-t1afcev5.js";
import {
  Rw
} from "B:/~BUN/root/chunk-0b2y1gsk.js";
import {
  L
} from "B:/~BUN/root/chunk-z1enakv9.js";

function d(e, o) {
  if (o.length === 0) return e;
  return {
    ...e,
    alwaysAllowRules: {
      ...e.alwaysAllowRules,
      command: L([...e.alwaysAllowRules.command || [], ...o])
    }
  }
}

function u(e, o) {
  if (o.length === 0) return e;
  return {
    ...e,
    alwaysDenyRules: {
      ...e.alwaysDenyRules,
      command: L([...e.alwaysDenyRules.command || [], ...o])
    }
  }
}

function Zln(e, o, n, s) {
  if (!s?.replaceCommandRules && !s?.replaceDenyRules && s?.frozenCommandDenies === void 0 && o.length === 0 && n.length === 0) return e;
  return () => {
    let r = e(),
      t = r.toolPermissionContext.pollEventDeliveryGuard === !0 ? r.toolPermissionContext : s?.replaceCommandRules ? {
        ...r.toolPermissionContext,
        alwaysAllowRules: {
          ...r.toolPermissionContext.alwaysAllowRules,
          command: o
        }
      } : d(r.toolPermissionContext, o),
      i = s?.replaceDenyRules ? {
        ...t,
        alwaysDenyRules: {
          ...t.alwaysDenyRules,
          command: n
        }
      } : s?.frozenCommandDenies !== void 0 ? {
        ...t,
        alwaysDenyRules: {
          ...t.alwaysDenyRules,
          command: L([...s.frozenCommandDenies, ...t.alwaysDenyRules.command ?? [], ...n])
        }
      } : u(t, n);
    return {
      ...r,
      toolPermissionContext: i
    }
  }
}
class f {
  mode;
  autoClassifierActive;
  constructor(e, o) {
    this.mode = e, this.autoClassifierActive = o
  }
  toJSON() {
    return
  }
}

function Kxo(e) {
  return new f(e, Aa(e))
}

function z0r(e) {
  return e instanceof f && !e.autoClassifierActive
}

function c(e) {
  if (!z0r(e)) return;
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
      let n = o;
      return
    }
  }
}

function G0r(e) {
  return e.getAppState?.().mcp?.suppressedClaudeAiConnectors ?? []
}

function zf(e) {
  let o = me(e);
  return o.mode !== "bypassPermissions" && !K1(o.mode, o.isBypassPermissionsModeAvailable)
}

function fy(e) {
  if (me(e).mode !== "plan") return !1;
  return Pm(e)
}

function b6e(e) {
  return e.getAppState()
}

function Pm(e) {
  return !zf(e) || me(e).shouldAvoidPermissionPrompts === !0
}

function y(e) {
  return e === co || e.startsWith(`${co}(`) || e.startsWith(FR)
}

function x(e) {
  let o = y,
    n = !1,
    s = {},
    r = {};
  for (let [t, i] of Object.entries(e.strippedDangerousRules ?? {}))
    if (i !== void 0) r[t] = [...i];
  for (let [t, i] of Object.entries(e.alwaysAllowRules)) {
    if (i === void 0) continue;
    let a = i.filter((l) => !o(l));
    if (a.length !== i.length) {
      n = !0;
      for (let l of i)
        if (o(l)) {
          let p = r[t] ??= [];
          if (!p.includes(l)) p.push(l)
        }
    }
    s[t] = a
  }
  if (!n) return e;
  return {
    ...e,
    alwaysAllowRules: s,
    strippedDangerousRules: r
  }
}

function V0r(e) {
  let o = e.strippedDangerousRules;
  if (o === void 0) return e;
  let n = !1,
    s = {};
  for (let [r, t] of Object.entries(e.alwaysAllowRules))
    if (t !== void 0) s[r] = t;
  for (let [r, t] of Object.entries(o)) {
    if (t === void 0) continue;
    for (let i of t) {
      if (!y(i)) continue;
      let a = [...s[r] ?? []];
      if (!a.includes(i)) a.push(i), s[r] = a, n = !0
    }
  }
  if (!n) return e;
  return {
    ...e,
    alwaysAllowRules: s
  }
}

function me(e) {
  let o = e.getAppState().toolPermissionContext,
    n = o !== void 0 && o.pollEventDeliveryGuard === !0;
  if (n) o = x(o);
  let s = e.permissionLayers;
  if (!s) return g(e, o);
  let r = s.findLast((t) => t.kind === "working_directory");
  for (let t of s) switch (t.kind) {
    case "allowed_tools":
      if (!n) o = d(o, [...t.allowedTools]);
      break;
    case "disallowed_tools":
      o = u(o, [...t.disallowedTools]);
      break;
    case "bash_command_clamp":
      o = {
        ...o,
        bashCommandClamps: [...o.bashCommandClamps ?? [], t.rules]
      };
      break;
    case "avoid_prompts":
      if (!o.shouldAvoidPermissionPrompts) o = {
        ...o,
        shouldAvoidPermissionPrompts: !0
      };
      break;
    case "sandbox_auto_allow_suspended":
      if (!o.sandboxAutoAllowSuspended) o = {
        ...o,
        sandboxAutoAllowSuspended: !0
      };
      break;
    case "permission_mode": {
      if (t.mode === "bypassPermissions" && (Rw() || !o.isBypassPermissionsModeAvailable)) break;
      o = {
        ...o,
        mode: t.mode
      };
      break
    }
    case "working_directory":
      if (t === r && !o.additionalWorkingDirectories.has(t.directory)) o = {
        ...o,
        additionalWorkingDirectories: new Map([...o.additionalWorkingDirectories, [t.directory, {
          path: t.directory,
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
  return g(e, o)
}

function g(e, o) {
  return b(e, k(e, h(e, o)))
}

function h(e, o) {
  if (o === void 0 || o.mode !== "auto" || e.forPromptShellCommand === !0 || e.forRemoteExecution === !0) return o;
  let n = c(e.permissionModeAtRequest);
  return n === void 0 ? o : m(n, o)
}

function P(e) {
  if (e.modeBeforeRewrite === void 0) return e;
  let {
    modeBeforeRewrite: o,
    ...n
  } = e;
  return n
}

function q0r(e) {
  let o = P(e);
  if (o.sandboxAutoAllowSuspended === void 0) return o;
  let {
    sandboxAutoAllowSuspended: n,
    ...s
  } = o;
  return s
}

function b(e, o) {
  if (e.forPromptShellCommand !== !0 || o === void 0) return o;
  return o.mode === "auto" ? m("default", o) : o
}

function m(e, o) {
  return {
    ...o,
    mode: e,
    modeBeforeRewrite: o.modeBeforeRewrite ?? o.mode
  }
}

function k(e, o) {
  if (e.forRemoteExecution !== !0 || o === void 0) return o;
  let {
    blockReadsOutsideWorkingDirectories: n,
    ...s
  } = o;
  return o.mode === "acceptEdits" || o.mode === "bypassPermissions" ? m("default", s) : s
}

function um(e) {
  let o;
  if (!e) return o;
  for (let n of e)
    if (n.kind === "effort") o = n.effort;
  return o
}

function Gf(e) {
  return um(e.permissionLayers) ?? ql(e.getAppState(), C(e))
}

function C(e) {
  let o = e.options?.mainLoopModel;
  for (let n of e.permissionLayers ?? [])
    if (n.kind === "model") o = n.mainLoopModel;
  return o
}

function Ale(e) {
  return e.getAppState().sessionEffort
}

function Vf(e) {
  return C(e) ?? e.options.mainLoopModel
}

function $He(e) {
  let o = e.options.thinkingConfig;
  for (let n of e.permissionLayers ?? [])
    if (n.kind === "max_thinking_tokens") o = R(n.maxThinkingTokens);
  return o
}

function R(e) {
  return e === 0 ? {
    type: "disabled"
  } : {
    type: "enabled",
    budgetTokens: e
  }
}

function bLt(e) {
  return e.getAppState().ultracode === !0
}

function gCe(e, o) {
  if (o.length === 0) return e;
  let n = e.permissionLayers ? [...e.permissionLayers, ...o] : [...o],
    s;
  for (let i = o.length - 1; i >= 0; i--) {
    let a = o[i];
    if (a.kind === "model") {
      s = a.mainLoopModel;
      break
    }
  }
  let r;
  for (let i = o.length - 1; i >= 0; i--) {
    let a = o[i];
    if (a.kind === "max_thinking_tokens") {
      r = R(a.maxThinkingTokens);
      break
    }
  }
  return {
    ...e,
    permissionLayers: n,
    ...(s !== void 0 || r !== void 0) && {
      options: {
        ...e.options,
        ...s !== void 0 && {
          mainLoopModel: s
        },
        ...r !== void 0 && {
          thinkingConfig: r
        }
      }
    }
  }
}
export {
  Zln,
  Kxo,
  z0r,
  G0r,
  zf,
  fy,
  b6e,
  Pm,
  V0r,
  me,
  q0r,
  um,
  Gf,
  Ale,
  Vf,
  $He,
  bLt,
  gCe
};
