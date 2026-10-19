// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { L } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { tF } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { Od, Eqn, oHs } from "B:/~BUN/root/chunk-8y0chnnr.js";
import { $s } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { s2 } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { mr } from "B:/~BUN/root/chunk-jkv8n5r0.js";
import { $E } from "B:/~BUN/root/chunk-410t5g3b.js";
import { go, DG } from "B:/~BUN/root/chunk-y59h61rh.js";
function d(e, o) {
  if (o.length === 0) return e;
  return {
    ...e,
    alwaysAllowRules: {
      ...e.alwaysAllowRules,
      command: L([...(e.alwaysAllowRules.command || []), ...o])
    }
  };
}
function u(e, o) {
  if (o.length === 0) return e;
  return {
    ...e,
    alwaysDenyRules: {
      ...e.alwaysDenyRules,
      command: L([...(e.alwaysDenyRules.command || []), ...o])
    }
  };
}
function nqn(e, command, n, r) {
  if (!r?.replaceCommandRules && !r?.replaceDenyRules && r?.frozenCommandDenies === void 0 && command.length === 0 && n.length === 0) return e;
  return () => {
    let i = e(),
      t = i.toolPermissionContext.pollEventDeliveryGuard === !0 ? i.toolPermissionContext : r?.replaceCommandRules ? {
        ...i.toolPermissionContext,
        alwaysAllowRules: {
          ...i.toolPermissionContext.alwaysAllowRules,
          command: command
        }
      } : d(i.toolPermissionContext, command),
      toolPermissionContext = r?.replaceDenyRules ? {
        ...t,
        alwaysDenyRules: {
          ...t.alwaysDenyRules,
          command: [...n, ...(t.turnDisallowedTools ?? [])]
        }
      } : r?.frozenCommandDenies !== void 0 ? {
        ...t,
        alwaysDenyRules: {
          ...t.alwaysDenyRules,
          command: L([...r.frozenCommandDenies, ...(t.alwaysDenyRules.command ?? []), ...n])
        }
      } : u(t, n);
    return {
      ...i,
      toolPermissionContext: toolPermissionContext
    };
  };
}
class f {
  mode;
  autoClassifierActive;
  constructor(e, o) {
    this.mode = e, this.autoClassifierActive = o;
  }
  toJSON() {
    return;
  }
}
function CFs(e) {
  return new f(e, $s(e));
}
function OAo(e) {
  return e instanceof f && !e.autoClassifierActive;
}
function g(e) {
  if (!OAo(e)) return;
  let mode = e.mode;
  switch (mode) {
    case "default":
    case "acceptEdits":
    case "dontAsk":
    case "bubble":
      return mode;
    case "plan":
    case "bypassPermissions":
      return "default";
    case "auto":
      return;
    default:
      {
        let n = mode;
        return;
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
  return e.filter(item => x[item.kind] === "keep");
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
  };
}
function IAo(e) {
  return e.getAppState?.().mcp?.suppressedClaudeAiConnectors ?? [];
}
function jg(e) {
  let o = le(e);
  return o.mode !== "bypassPermissions" && !tF(o.mode, o.isBypassPermissionsModeAvailable);
}
function MS(e) {
  if (le(e).mode !== "plan") return !1;
  return Fh(e);
}
function amt(e) {
  return e.getAppState();
}
function Fh(e) {
  return !jg(e) || le(e).shouldAvoidPermissionPrompts === !0;
}
function C(e) {
  return e === go || e.startsWith(`${go}(`) || e.startsWith(DG);
}
function P(e) {
  let o = C,
    n = !1,
    alwaysAllowRules = {},
    strippedDangerousRules = {};
  for (let [t, s] of Object.entries(e.strippedDangerousRules ?? {})) if (s !== void 0) strippedDangerousRules[t] = [...s];
  for (let [t, s] of Object.entries(e.alwaysAllowRules)) {
    if (s === void 0) continue;
    let a = s.filter(item => !o(item));
    if (a.length !== s.length) {
      n = !0;
      for (let l of s) if (o(l)) {
        let c = strippedDangerousRules[t] ??= [];
        if (!c.includes(l)) c.push(l);
      }
    }
    alwaysAllowRules[t] = a;
  }
  if (!n) return e;
  return {
    ...e,
    alwaysAllowRules: alwaysAllowRules,
    strippedDangerousRules: strippedDangerousRules
  };
}
function MAo(e) {
  let strippedDangerousRules_2 = e.strippedDangerousRules;
  if (strippedDangerousRules_2 === void 0) return e;
  let n = !1,
    alwaysAllowRules_2 = {};
  for (let [i, t] of Object.entries(e.alwaysAllowRules)) if (t !== void 0) alwaysAllowRules_2[i] = t;
  for (let [i, t] of Object.entries(strippedDangerousRules_2)) {
    if (t === void 0) continue;
    for (let s of t) {
      if (!C(s)) continue;
      let a = [...(alwaysAllowRules_2[i] ?? [])];
      if (!a.includes(s)) a.push(s), alwaysAllowRules_2[i] = a, n = !0;
    }
  }
  if (!n) return e;
  return {
    ...e,
    alwaysAllowRules: alwaysAllowRules_2
  };
}
function Eae(e) {
  return e.getAppState().toolPermissionContext;
}
function le(e) {
  let toolPermissionContext_2 = e.getAppState().toolPermissionContext,
    n = toolPermissionContext_2 !== void 0 && toolPermissionContext_2.pollEventDeliveryGuard === !0;
  if (n) toolPermissionContext_2 = P(toolPermissionContext_2);
  let permissionLayers = e.permissionLayers;
  if (!permissionLayers) return y(e, toolPermissionContext_2);
  let i = permissionLayers.findLast(t => t.kind === "working_directory");
  for (let t of permissionLayers) switch (t.kind) {
    case "allowed_tools":
      if (!n) toolPermissionContext_2 = d(toolPermissionContext_2, [...t.allowedTools]);
      break;
    case "disallowed_tools":
      toolPermissionContext_2 = u(toolPermissionContext_2, [...t.disallowedTools]);
      break;
    case "bash_command_clamp":
      toolPermissionContext_2 = {
        ...toolPermissionContext_2,
        bashCommandClamps: [...(toolPermissionContext_2.bashCommandClamps ?? []), t.rules]
      };
      break;
    case "avoid_prompts":
      if (!toolPermissionContext_2.shouldAvoidPermissionPrompts) toolPermissionContext_2 = {
        ...toolPermissionContext_2,
        shouldAvoidPermissionPrompts: !0
      };
      break;
    case "sandbox_auto_allow_suspended":
      if (!toolPermissionContext_2.sandboxAutoAllowSuspended) toolPermissionContext_2 = {
        ...toolPermissionContext_2,
        sandboxAutoAllowSuspended: !0
      };
      break;
    case "permission_mode":
      {
        if (t.mode === "bypassPermissions" && ($E() || !toolPermissionContext_2.isBypassPermissionsModeAvailable)) break;
        toolPermissionContext_2 = {
          ...toolPermissionContext_2,
          mode: t.mode
        };
        break;
      }
    case "working_directory":
      if (t === i && !toolPermissionContext_2.additionalWorkingDirectories.has(t.directory)) toolPermissionContext_2 = {
        ...toolPermissionContext_2,
        additionalWorkingDirectories: new Map([...toolPermissionContext_2.additionalWorkingDirectories, [t.directory, {
          path: t.directory,
          source: "session"
        }]])
      };
      break;
    case "effort":
    case "model":
    case "max_thinking_tokens":
    case "flag_settings":
      break;
  }
  return y(e, toolPermissionContext_2);
}
function y(e, o) {
  return k(e, S(e, A(e, o)));
}
function A(e, o) {
  if (o === void 0 || o.mode !== "auto" || e.forPromptShellCommand === !0 || e.forRemoteExecution === !0) return o;
  let n = g(e.permissionModeAtRequest);
  return n === void 0 ? o : m(n, o);
}
function h(e) {
  if (e.modeBeforeRewrite === void 0) return e;
  let {
    modeBeforeRewrite: modeBeforeRewrite,
    ...n
  } = e;
  return n;
}
function DAo(e) {
  let o = h(e);
  if (o.sandboxAutoAllowSuspended === void 0) return o;
  let {
    sandboxAutoAllowSuspended: sandboxAutoAllowSuspended,
    ...r
  } = o;
  return r;
}
function k(e, o) {
  if (e.forPromptShellCommand !== !0 || o === void 0) return o;
  return o.mode === "auto" ? m("default", o) : o;
}
function m(mode_2, o) {
  return {
    ...o,
    mode: mode_2,
    modeBeforeRewrite: o.modeBeforeRewrite ?? o.mode
  };
}
function S(e, o) {
  if (e.forRemoteExecution !== !0 || o === void 0) return o;
  let {
    blockReadsOutsideWorkingDirectories: blockReadsOutsideWorkingDirectories,
    ...r
  } = o;
  return o.mode === "acceptEdits" || o.mode === "bypassPermissions" ? m("default", r) : r;
}
function iy(e) {
  let o;
  if (!e) return o;
  for (let n of e) if (n.kind === "effort") o = n.effort;
  return o;
}
function mh(e) {
  return iy(e.permissionLayers) ?? Od(e.getAppState(), p(e), {
    withHold: DOr(e)
  });
}
function Hsn(e, o) {
  return Eqn(o, uc(e)) ? {
    effortValue: mh(e),
    turnEffort: iy(e.permissionLayers)
  } : {
    effortValue: oHs(e.getAppState(), o),
    turnEffort: void 0
  };
}
function DOr(e) {
  return e.agentContext === void 0 || s2(e.agentContext);
}
function $sn(e) {
  return mh(e) === void 0 ? Od(e.getAppState(), p(e), {
    withHold: !1
  }) : void 0;
}
function p(e) {
  let o = e.options?.mainLoopModel;
  for (let n of e.permissionLayers ?? []) if (n.kind === "model") o = n.mainLoopModel;
  return o;
}
function mke(e) {
  return e.getAppState().sessionEffort;
}
function uc(e) {
  return p(e) ?? e.options.mainLoopModel;
}
function V9e(e) {
  let thinkingConfig = e.options.thinkingConfig;
  for (let n of e.permissionLayers ?? []) if (n.kind === "max_thinking_tokens") thinkingConfig = R(n.maxThinkingTokens);
  return thinkingConfig;
}
function R(budgetTokens) {
  return budgetTokens === 0 ? {
    type: "disabled"
  } : {
    type: "enabled",
    budgetTokens: budgetTokens
  };
}
function Usn(e) {
  return e.getAppState().ultracode === !0;
}
function QOe(e, o) {
  if (o.length === 0) return e;
  let permissionLayers_2 = e.permissionLayers ? [...e.permissionLayers, ...o] : [...o],
    mainLoopModel;
  for (let s = o.length - 1; s >= 0; s--) {
    let a = o[s];
    if (a.kind === "model") {
      mainLoopModel = a.mainLoopModel;
      break;
    }
  }
  let thinkingConfig_2;
  for (let s = o.length - 1; s >= 0; s--) {
    let a = o[s];
    if (a.kind === "max_thinking_tokens") {
      thinkingConfig_2 = R(a.maxThinkingTokens);
      break;
    }
  }
  return {
    ...e,
    permissionLayers: permissionLayers_2,
    ...((mainLoopModel !== void 0 || thinkingConfig_2 !== void 0) && {
      options: {
        ...e.options,
        ...(mainLoopModel !== void 0 && {
          mainLoopModel: mainLoopModel
        }),
        ...(thinkingConfig_2 !== void 0 && {
          thinkingConfig: thinkingConfig_2
        })
      }
    })
  };
}
export { nqn, CFs, OAo, Fsn, IAo, jg, MS, amt, Fh, MAo, Eae, le, DAo, iy, mh, Hsn, DOr, $sn, mke, uc, V9e, Usn, QOe };