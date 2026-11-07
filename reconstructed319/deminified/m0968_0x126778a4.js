// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { nG } from "B:/~BUN/root/chunk-r8p1hzqw.js";
import { eie, Vt } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { JBt } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { $o } from "B:/~BUN/root/chunk-6n5g80b8.js";
import { Ym, be, DA } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { NX } from "B:/~BUN/root/chunk-m749kjym.js";
import { $t } from "B:/~BUN/root/chunk-zpne314q.js";
function N4e(e) {
  return !1;
}
function RYn({
  model: model,
  modelCli: modelCli,
  agent: agent,
  agentSelectedByCli: agentSelectedByCli,
  agents: agents,
  effectiveModel: effectiveModel,
  initialMainLoopModel: initialMainLoopModel,
  restrictedModel: restrictedModel
}) {
  let l = modelCli === "default" || effectiveModel === void 0 && initialMainLoopModel === null;
  if (E() && (restrictedModel !== void 0 && !N4e(restrictedModel) || l && (eie().attribution === "enforced" || O()))) return "allowlist";
  if (l && eie().attribution === "env" && R("ANTHROPIC_DEFAULT_MODEL", model)) return "settings_env_default";
  let d = C(model) ? "remap" : void 0;
  if (modelCli) return d;
  if (effectiveModel !== void 0 && agent?.model && agent.model !== "inherit") {
    let s = DA("agent"),
      D = !agentSelectedByCli && (s === null || a(s));
    return g(agent) || D ? "agent" : d;
  }
  if (effectiveModel !== void 0) return d;
  let w = !agentSelectedByCli && a(DA("agent")) && $o().some(item => !a(item) && be(item)?.agent !== void 0),
    b = agent !== void 0 && g(agent) && agents.some(item => item.agentType === agent.agentType && !g(item) && Boolean(item.model) && item.model !== "inherit");
  if (w || b) return "agent";
  if (h("ANTHROPIC_MODEL")) return "settings_env";
  if (!l && process.env.ANTHROPIC_MODEL) return d;
  return a(DA("model")) ? "settings" : d;
}
function $Ys(e) {
  return e || !1;
}
function AYn(e) {
  let decision = A(e),
    t = A({
      ...e,
      settingsModeForwardable: !1
    }),
    isModeFromSettings = decision.permissionMode !== t.permissionMode,
    permissionMode = decision.permissionMode,
    r = permissionMode === "default" ? nG : permissionMode;
  return {
    decision: decision,
    isModeFromSettings: isModeFromSettings,
    ...(isModeFromSettings && permissionMode !== void 0 && {
      noticeOnRunner: {
        level: permissionMode === "plan" ? "warning" : "notice",
        text: `This session runs on a self-hosted runner, where your settings' default permission mode (${r}) doesn't apply. To start in ${r} mode, relaunch with --permission-mode ${r}.`,
        short: permissionMode === "plan" ? "Type /plan: your default mode doesn't apply on a self-hosted runner." : `Your settings' default mode (${r}) doesn't apply on a self-hosted runner.`
      }
    })
  };
}
function A({
  model: model_2,
  internal: internal,
  explicitMode: explicitMode,
  droppedMode = !1,
  pinnedDefault = !1,
  settingsMode: settingsMode,
  settingsModeForwardable: settingsModeForwardable,
  autoSeedable: autoSeedable,
  storedDefaultBar: storedDefaultBar,
  otherChoiceTyped: otherChoiceTyped,
  carriedPlanHolds: carriedPlanHolds,
  repositoryModel: repositoryModel,
  trustedPlanDisplaced: trustedPlanDisplaced,
  settingsNeverForwarded = !1
}) {
  let S = !droppedMode && (explicitMode === void 0 || pinnedDefault && explicitMode === "default");
  return {
    permissionMode: S ? settingsModeForwardable ? S ? settingsMode : void 0 : void 0 : explicitMode,
    action: "none"
  };
}
var N = JBt.filter(item => /^ANTHROPIC_DEFAULT_[A-Z]+_MODEL$/.test(item));
function C(e) {
  return f().some(item => {
    let t = be(item),
      i = M(item);
    return [...Object.values(t?.modelOverrides ?? {}), ...N.filter(item => h(item)).flatMap(item => y(i, item))].some(item => _(item, e));
  });
}
function R(e, o) {
  return h(e) && f().some(item => y(M(item), e).some(item => _(item, o)));
}
function _(e, o) {
  return u(e) === u(o) || u(Vt(e)) === u(Vt(o));
}
function u(e) {
  return $t(e.trim().toLowerCase()).trim();
}
function O() {
  return $o().some(item => item !== "policySettings" && be(item)?.enforceAvailableModels === !0);
}
function E() {
  return be("policySettings")?.availableModels === void 0 && f().some(item => {
    let o = be(item);
    return o?.availableModels !== void 0 || o?.enforceAvailableModels !== void 0;
  });
}
function h(e) {
  return f().some(item => m(item, e)) && !m("flagSettings", e) && !m("policySettings", e);
}
function m(e, o) {
  return y(M(e), o).length > 0;
}
function M(e) {
  return NX(be(e)?.env, e);
}
function y(e, o) {
  return Object.entries(e).filter(([t]) => t.toUpperCase() === o).map(([, t]) => t);
}
function g(e) {
  return a(e.source) || e.source === "plugin" || e.fromAdditionalDirectory === !0;
}
function f() {
  return $o().filter(a);
}
function a(e) {
  return e === "localSettings" || e === "projectSettings" && !Ym();
}
export { N4e, RYn, $Ys, AYn };