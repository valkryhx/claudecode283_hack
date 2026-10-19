// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  L
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  tF
} from "B:/~BUN/root/chunk-8ye9n4fk.js";
import {
  Od,
  Eqn,
  oHs
} from "B:/~BUN/root/chunk-8y0chnnr.js";
import {
  $s
} from "B:/~BUN/root/chunk-kad4nq7y.js";
import {
  s2
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  mr
} from "B:/~BUN/root/chunk-jkv8n5r0.js";
import {
  $E
} from "B:/~BUN/root/chunk-410t5g3b.js";
import {
  go,
  DG
} from "B:/~BUN/root/chunk-y59h61rh.js";

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

function nqn(e, o, n, r) {
  if (!r?.replaceCommandRules && !r?.replaceDenyRules && r?.frozenCommandDenies === void 0 && o.length === 0 && n.length === 0) return e;
  return () => {
    let i = e(),
      t = i.toolPermissionContext.pollEventDeliveryGuard === !0 ? i.toolPermissionContext : r?.replaceCommandRules ? {
        ...i.toolPermissionContext,
        alwaysAllowRules: {
          ...i.toolPermissionContext.alwaysAllowRules,
          command: o
        }
      } : d(i.toolPermissionContext, o),
      s = r?.replaceDenyRules ? {
        ...t,
        alwaysDenyRules: {
          ...t.alwaysDenyRules,
          command: [...n, ...t.turnDisallowedTools ?? []]
        }
      } : r?.frozenCommandDenies !== void 0 ? {
        ...t,
        alwaysDenyRules: {
          ...t.alwaysDenyRules,
          command: L([...r.frozenCommandDenies, ...t.alwaysDenyRules.command ?? [], ...n])
        }
      } : u(t, n);
    return {
      ...i,
      toolPermissionContext: s
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

function CFs(e) {
  return new f(e, $s(e))
}

function OAo(e) {
  return e instanceof f && !e.autoClassifierActive
}

function g(e) {
  if (!OAo(e)) return;
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
var x = {
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

function b(e) {
  if (!e) return e;
  return e.filter((o) => x[o.kind] === "keep")
}

function Fsn(e) {
  return {
    ...e,
    abortController: mr(),
    toolUseId: void 0,
    permissionPhase: void 0,
    autoModeClassified: void 0,
    ...!1,
    permissionLayers: b(e.permissionLayers)
  }
}

function IAo(e) {
  return e.getAppState?.().mcp?.suppressedClaudeAiConnectors ?? []
}

function jg(e) {
  let o = le(e);
  return o.mode !== "bypassPermissions" && !tF(o.mode, o.isBypassPermissionsModeAvailable)
}

function MS(e) {
  if (le(e).mode !== "plan") return !1;
  return Fh(e)
}

function amt(e) {
  return e.getAppState()
}

function Fh(e) {
  return !jg(e) || le(e).shouldAvoidPermissionPrompts === !0
}

function C(e) {
  return e === go || e.startsWith(`${go}(`) || e.startsWith(DG)
}

function P(e) {
  let o = C,
    n = !1,
    r = {},
    i = {};
  for (let [t, s] of Object.entries(e.strippedDangerousRules ?? {}))
    if (s !== void 0) i[t] = [...s];
  for (let [t, s] of Object.entries(e.alwaysAllowRules)) {
    if (s === void 0) continue;
    let a = s.filter((l) => !o(l));
    if (a.length !== s.length) {
      n = !0;
      for (let l of s)
        if (o(l)) {
          let c = i[t] ??= [];
          if (!c.includes(l)) c.push(l)
        }
    }
    r[t] = a
  }
  if (!n) return e;
  return {
    ...e,
    alwaysAllowRules: r,
    strippedDangerousRules: i
  }
}

function MAo(e) {
  let o = e.strippedDangerousRules;
  if (o === void 0) return e;
  let n = !1,
    r = {};
  for (let [i, t] of Object.entries(e.alwaysAllowRules))
    if (t !== void 0) r[i] = t;
  for (let [i, t] of Object.entries(o)) {
    if (t === void 0) continue;
    for (let s of t) {
      if (!C(s)) continue;
      let a = [...r[i] ?? []];
      if (!a.includes(s)) a.push(s), r[i] = a, n = !0
    }
  }
  if (!n) return e;
  return {
    ...e,
    alwaysAllowRules: r
  }
}

function Eae(e) {
  return e.getAppState().toolPermissionContext
}

function le(e) {
  let o = e.getAppState().toolPermissionContext,
    n = o !== void 0 && o.pollEventDeliveryGuard === !0;
  if (n) o = P(o);
  let r = e.permissionLayers;
  if (!r) return y(e, o);
  let i = r.findLast((t) => t.kind === "working_directory");
  for (let t of r) switch (t.kind) {
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
      if (t.mode === "bypassPermissions" && ($E() || !o.isBypassPermissionsModeAvailable)) break;
      o = {
        ...o,
        mode: t.mode
      };
      break
    }
    case "working_directory":
      if (t === i && !o.additionalWorkingDirectories.has(t.directory)) o = {
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
  return y(e, o)
}

function y(e, o) {
  return k(e, S(e, A(e, o)))
}

function A(e, o) {
  if (o === void 0 || o.mode !== "auto" || e.forPromptShellCommand === !0 || e.forRemoteExecution === !0) return o;
  let n = g(e.permissionModeAtRequest);
  return n === void 0 ? o : m(n, o)
}

function h(e) {
  if (e.modeBeforeRewrite === void 0) return e;
  let {
    modeBeforeRewrite: o,
    ...n
  } = e;
  return n
}

function DAo(e) {
  let o = h(e);
  if (o.sandboxAutoAllowSuspended === void 0) return o;
  let {
    sandboxAutoAllowSuspended: n,
    ...r
  } = o;
  return r
}

function k(e, o) {
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

function S(e, o) {
  if (e.forRemoteExecution !== !0 || o === void 0) return o;
  let {
    blockReadsOutsideWorkingDirectories: n,
    ...r
  } = o;
  return o.mode === "acceptEdits" || o.mode === "bypassPermissions" ? m("default", r) : r
}

function iy(e) {
  let o;
  if (!e) return o;
  for (let n of e)
    if (n.kind === "effort") o = n.effort;
  return o
}

function mh(e) {
  return iy(e.permissionLayers) ?? Od(e.getAppState(), p(e), {
    withHold: DOr(e)
  })
}

function Hsn(e, o) {
  return Eqn(o, uc(e)) ? {
    effortValue: mh(e),
    turnEffort: iy(e.permissionLayers)
  } : {
    effortValue: oHs(e.getAppState(), o),
    turnEffort: void 0
  }
}

function DOr(e) {
  return e.agentContext === void 0 || s2(e.agentContext)
}

function $sn(e) {
  return mh(e) === void 0 ? Od(e.getAppState(), p(e), {
    withHold: !1
  }) : void 0
}

function p(e) {
  let o = e.options?.mainLoopModel;
  for (let n of e.permissionLayers ?? [])
    if (n.kind === "model") o = n.mainLoopModel;
  return o
}

function mke(e) {
  return e.getAppState().sessionEffort
}

function uc(e) {
  return p(e) ?? e.options.mainLoopModel
}

function V9e(e) {
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

function Usn(e) {
  return e.getAppState().ultracode === !0
}

function QOe(e, o) {
  if (o.length === 0) return e;
  let n = e.permissionLayers ? [...e.permissionLayers, ...o] : [...o],
    r;
  for (let s = o.length - 1; s >= 0; s--) {
    let a = o[s];
    if (a.kind === "model") {
      r = a.mainLoopModel;
      break
    }
  }
  let i;
  for (let s = o.length - 1; s >= 0; s--) {
    let a = o[s];
    if (a.kind === "max_thinking_tokens") {
      i = R(a.maxThinkingTokens);
      break
    }
  }
  return {
    ...e,
    permissionLayers: n,
    ...(r !== void 0 || i !== void 0) && {
      options: {
        ...e.options,
        ...r !== void 0 && {
          mainLoopModel: r
        },
        ...i !== void 0 && {
          thinkingConfig: i
        }
      }
    }
  }
}
export {
  nqn,
  CFs,
  OAo,
  Fsn,
  IAo,
  jg,
  MS,
  amt,
  Fh,
  MAo,
  Eae,
  le,
  DAo,
  iy,
  mh,
  Hsn,
  DOr,
  $sn,
  mke,
  uc,
  V9e,
  Usn,
  QOe
};
