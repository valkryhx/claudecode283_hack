// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { c$ } from "B:/~BUN/root/chunk-8z3a373v.js";
import { sJ, It } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { h_t } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { Wo } from "B:/~BUN/root/chunk-6a9s3k2y.js";
import { Xy, me, SA } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { I3 } from "B:/~BUN/root/chunk-429xgjya.js";
import { Pt } from "B:/~BUN/root/chunk-j0ghr71r.js";
function LWt(e) {
  return !1;
}
function ayn({
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
  if (O() && (restrictedModel !== void 0 && !LWt(restrictedModel) || l && (sJ().attribution === "enforced" || R()))) return "allowlist";
  if (l && sJ().attribution === "env" && C("ANTHROPIC_DEFAULT_MODEL", model)) return "settings_env_default";
  let d = N(model) ? "remap" : void 0;
  if (modelCli) return d;
  if (effectiveModel !== void 0 && agent?.model && agent.model !== "inherit") {
    let s = SA("agent"),
      u = !agentSelectedByCli && (s === null || a(s));
    return h(agent) || u ? "agent" : d;
  }
  if (effectiveModel !== void 0) return d;
  let b = !agentSelectedByCli && a(SA("agent")) && Wo().some(item => !a(item) && me(item)?.agent !== void 0),
    D = agent !== void 0 && h(agent) && agents.some(item => item.agentType === agent.agentType && !h(item) && Boolean(item.model) && item.model !== "inherit");
  if (b || D) return "agent";
  if (M("ANTHROPIC_MODEL")) return "settings_env";
  if (!l && process.env.ANTHROPIC_MODEL) return d;
  return a(SA("model")) ? "settings" : d;
}
function LKo(e) {
  return e || !1;
}
function lyn(e) {
  let decision = S(e),
    t = S({
      ...e,
      settingsModeForwardable: !1
    }),
    isModeFromSettings = decision.permissionMode !== t.permissionMode,
    permissionMode = decision.permissionMode,
    r = permissionMode === "default" ? c$ : permissionMode;
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
function S({
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
  trustedPlanDisplaced: trustedPlanDisplaced
}) {
  let u = !droppedMode && (explicitMode === void 0 || pinnedDefault && explicitMode === "default");
  return {
    permissionMode: u ? settingsModeForwardable ? u ? settingsMode : void 0 : void 0 : explicitMode,
    action: "none"
  };
}
var T = h_t.filter(item => /^ANTHROPIC_DEFAULT_[A-Z]+_MODEL$/.test(item));
function N(e) {
  return c().some(item => {
    let t = me(item),
      i = y(item);
    return [...Object.values(t?.modelOverrides ?? {}), ...T.filter(item => M(item)).flatMap(item => w(i, item))].some(item => A(item, e));
  });
}
function C(e, o) {
  return M(e) && c().some(item => w(y(item), e).some(item => A(item, o)));
}
function A(e, o) {
  return f(e) === f(o) || f(It(e)) === f(It(o));
}
function f(e) {
  return Pt(e.trim().toLowerCase()).trim();
}
function R() {
  return Wo().some(item => item !== "policySettings" && me(item)?.enforceAvailableModels === !0);
}
function O() {
  return me("policySettings")?.availableModels === void 0 && c().some(item => {
    let o = me(item);
    return o?.availableModels !== void 0 || o?.enforceAvailableModels !== void 0;
  });
}
function M(e) {
  return c().some(item => g(item, e)) && !g("flagSettings", e) && !g("policySettings", e);
}
function g(e, o) {
  return w(y(e), o).length > 0;
}
function y(e) {
  return I3(me(e)?.env, e);
}
function w(e, o) {
  return Object.entries(e).filter(([t]) => t.toUpperCase() === o).map(([, t]) => t);
}
function h(e) {
  return a(e.source) || e.source === "plugin" || e.fromAdditionalDirectory === !0;
}
function c() {
  return Wo().filter(a);
}
function a(e) {
  return e === "localSettings" || e === "projectSettings" && !Xy();
}
export { LWt, ayn, LKo, lyn };