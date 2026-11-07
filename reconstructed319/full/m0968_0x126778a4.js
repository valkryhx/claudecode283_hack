// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  nG
} from "B:/~BUN/root/chunk-r8p1hzqw.js";
import {
  eie,
  Vt
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  JBt
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  $o
} from "B:/~BUN/root/chunk-6n5g80b8.js";
import {
  Ym,
  be,
  DA
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  NX
} from "B:/~BUN/root/chunk-m749kjym.js";
import {
  $t
} from "B:/~BUN/root/chunk-zpne314q.js";

function N4e(e) {
  return !1
}

function RYn({
  model: e,
  modelCli: o,
  agent: t,
  agentSelectedByCli: i,
  agents: n,
  effectiveModel: r,
  initialMainLoopModel: c,
  restrictedModel: p
}) {
  let l = o === "default" || r === void 0 && c === null;
  if (E() && (p !== void 0 && !N4e(p) || l && (eie().attribution === "enforced" || O()))) return "allowlist";
  if (l && eie().attribution === "env" && R("ANTHROPIC_DEFAULT_MODEL", e)) return "settings_env_default";
  let d = C(e) ? "remap" : void 0;
  if (o) return d;
  if (r !== void 0 && t?.model && t.model !== "inherit") {
    let s = DA("agent"),
      D = !i && (s === null || a(s));
    return g(t) || D ? "agent" : d
  }
  if (r !== void 0) return d;
  let w = !i && a(DA("agent")) && $o().some((s) => !a(s) && be(s)?.agent !== void 0),
    b = t !== void 0 && g(t) && n.some((s) => s.agentType === t.agentType && !g(s) && Boolean(s.model) && s.model !== "inherit");
  if (w || b) return "agent";
  if (h("ANTHROPIC_MODEL")) return "settings_env";
  if (!l && process.env.ANTHROPIC_MODEL) return d;
  return a(DA("model")) ? "settings" : d
}

function $Ys(e) {
  return e || !1
}

function AYn(e) {
  let o = A(e),
    t = A({
      ...e,
      settingsModeForwardable: !1
    }),
    i = o.permissionMode !== t.permissionMode,
    n = o.permissionMode,
    r = n === "default" ? nG : n;
  return {
    decision: o,
    isModeFromSettings: i,
    ...i && n !== void 0 && {
      noticeOnRunner: {
        level: n === "plan" ? "warning" : "notice",
        text: `This session runs on a self-hosted runner, where your settings' default permission mode (${r}) doesn't apply. To start in ${r} mode, relaunch with --permission-mode ${r}.`,
        short: n === "plan" ? "Type /plan: your default mode doesn't apply on a self-hosted runner." : `Your settings' default mode (${r}) doesn't apply on a self-hosted runner.`
      }
    }
  }
}

function A({
  model: e,
  internal: o,
  explicitMode: t,
  droppedMode: i = !1,
  pinnedDefault: n = !1,
  settingsMode: r,
  settingsModeForwardable: c,
  autoSeedable: p,
  storedDefaultBar: l,
  otherChoiceTyped: d,
  carriedPlanHolds: w,
  repositoryModel: b,
  trustedPlanDisplaced: s,
  settingsNeverForwarded: D = !1
}) {
  let S = !i && (t === void 0 || n && t === "default");
  return {
    permissionMode: S ? c ? S ? r : void 0 : void 0 : t,
    action: "none"
  }
}
var N = JBt.filter((e) => /^ANTHROPIC_DEFAULT_[A-Z]+_MODEL$/.test(e));

function C(e) {
  return f().some((o) => {
    let t = be(o),
      i = M(o);
    return [...Object.values(t?.modelOverrides ?? {}), ...N.filter((n) => h(n)).flatMap((n) => y(i, n))].some((n) => _(n, e))
  })
}

function R(e, o) {
  return h(e) && f().some((t) => y(M(t), e).some((i) => _(i, o)))
}

function _(e, o) {
  return u(e) === u(o) || u(Vt(e)) === u(Vt(o))
}

function u(e) {
  return $t(e.trim().toLowerCase()).trim()
}

function O() {
  return $o().some((e) => e !== "policySettings" && be(e)?.enforceAvailableModels === !0)
}

function E() {
  return be("policySettings")?.availableModels === void 0 && f().some((e) => {
    let o = be(e);
    return o?.availableModels !== void 0 || o?.enforceAvailableModels !== void 0
  })
}

function h(e) {
  return f().some((o) => m(o, e)) && !m("flagSettings", e) && !m("policySettings", e)
}

function m(e, o) {
  return y(M(e), o).length > 0
}

function M(e) {
  return NX(be(e)?.env, e)
}

function y(e, o) {
  return Object.entries(e).filter(([t]) => t.toUpperCase() === o).map(([, t]) => t)
}

function g(e) {
  return a(e.source) || e.source === "plugin" || e.fromAdditionalDirectory === !0
}

function f() {
  return $o().filter(a)
}

function a(e) {
  return e === "localSettings" || e === "projectSettings" && !Ym()
}
export {
  N4e,
  RYn,
  $Ys,
  AYn
};
