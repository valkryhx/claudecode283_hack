// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Pe } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { H, ab, of, sKn, _Y, iKn, ye, lv, SY, Pc, w7, ert, I$r } from "B:/~BUN/root/chunk-game8aqv.js";
import { de } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { F } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { _i, UV, Qz, mM, _C, Pw } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { _jt, Zu, uHr, rwt, _f } from "B:/~BUN/root/chunk-65j2302z.js";
import { Lb, Pg } from "B:/~BUN/root/chunk-r8p1hzqw.js";
import { et } from "B:/~BUN/root/chunk-fkr27nhj.js";
import { rr, Ct, Tl } from "B:/~BUN/root/chunk-thn0wk2x.js";
import { yi, $o, Kt, hf } from "B:/~BUN/root/chunk-6n5g80b8.js";
import { H7i, rb, un, hT, be, cHe, kp, yt, DA, Ob, Spe, qn, rbt } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { Hte } from "B:/~BUN/root/chunk-1fg2bpc3.js";
import { sd, Aw, TBt, Te, Pd, s5 } from "B:/~BUN/root/chunk-8f4z6bdn.js";
import { Vse, Two, gYi, oOr, PZe, MPs, uo, Yon, dC, kko, NZe, ZPs, Ud, zy, rt, Dp, Vt, ORe, oT, kU, aVe, cyt, aFe, y$t, hn, KZe, Gt, pn, v, Le, fe, Bd, wMs } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { hs, f7i } from "B:/~BUN/root/chunk-zn7b14jn.js";
import { im } from "B:/~BUN/root/chunk-22y97556.js";
import { iQe } from "B:/~BUN/root/chunk-r6enj9cw.js";
import { qKi } from "B:/~BUN/root/chunk-d1t1tzcz.js";
import { $t, nc, RBt, MR } from "B:/~BUN/root/chunk-zpne314q.js";
import { kn } from "B:/~BUN/root/chunk-t7d2hp9h.js";
import { o, oe, me } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { Je } from "B:/~BUN/root/chunk-9wbhv9z5.js";
import { resolve as Ve } from "path";
var ve = new Je(() => ({
  layers: []
}));
function W() {
  return ve.peek(H())?.layers ?? [];
}
function oFt(e, n, r) {
  let s = D(D(e.autoCompactOffer, n), r);
  if (typeof s !== "object" || s === null || typeof s.eligibleLoggedAt !== "number") return;
  let {
      escCount: escCount,
      resolved: resolved
    } = s,
    isAnswered = typeof resolved === "object" && resolved !== null,
    {
      choice: choice,
      tokens: tokens
    } = isAnswered ? resolved : {};
  return {
    eligibleLoggedAt: s.eligibleLoggedAt,
    isAnswered: isAnswered,
    ...(typeof escCount === "number" && Number.isInteger(escCount) && escCount > 0 && {
      escCount: escCount
    }),
    ...((choice === "accept" || choice === "keep") && typeof tokens === "number" && {
      resolved: {
        choice: choice,
        tokens: tokens
      }
    })
  };
}
function _yo(e, n, r, eligibleLoggedAt) {
  if (oFt(e, n, r) !== void 0) return e;
  let f = D(e.autoCompactOffer, n);
  return {
    ...e,
    autoCompactOffer: {
      ...e.autoCompactOffer,
      [n]: {
        ...f,
        [r]: {
          ...D(f, r),
          eligibleLoggedAt: eligibleLoggedAt
        }
      }
    }
  };
}
function ZGi(e, n, r) {
  let s = oFt(e, n, r);
  return Q(e, n, r, {
    escCount: (s?.escCount ?? 0) + 1
  });
}
function e2i(e, n, r, resolved_2) {
  return Q(e, n, r, {
    resolved: resolved_2
  });
}
function Q(e, n, r, s) {
  let f = D(e.autoCompactOffer, n),
    d = D(f, r),
    c = oFt(e, n, r);
  if (c === void 0 || c.isAnswered || !d) return e;
  return {
    ...e,
    autoCompactOffer: {
      ...e.autoCompactOffer,
      [n]: {
        ...f,
        [r]: {
          ...d,
          ...s
        }
      }
    }
  };
}
function D(e, n) {
  return typeof e === "object" && e !== null && Object.hasOwn(e, n) ? e[n] : void 0;
}
function q(e, n, r) {
  let s = oFt(e, n, r);
  return s !== void 0 && (s.isAnswered || (s.escCount ?? 0) > 0);
}
function jCe(e, n, r) {
  switch (e) {
    case "ask":
      return n.isAutoModeAvailable ? "auto" : "default";
    case "default":
      {
        if (n.isAutoModeAvailable) return "auto";
        let s = r ?? "default";
        if (s === "auto" || s === "bypassPermissions" && !n.isBypassPermissionsModeAvailable) return "default";
        return s;
      }
    case "proactive":
      if (n.isBypassPermissionsModeAvailable) return "bypassPermissions";
      return n.isAutoModeAvailable ? "auto" : "acceptEdits";
  }
}
function j(e, n) {
  if (n === "auto" || e === "proactive" && n === "acceptEdits") return n;
  return;
}
function byo(e) {
  return n4(e) ?? rQe(e);
}
function ee() {
  let {
    value: value,
    source: source
  } = pn("tengu_auto_mode_config", {});
  if (value?.enabled !== "disabled") return !1;
  return source === "override" || source === "payload";
}
function Syo(e) {
  let {
      cli: cli,
      env: env,
      settings: settings,
      agentFrontmatter: agentFrontmatter
    } = e,
    d = Lb(cli.permissionMode),
    c = Lb(cli.inheritPermissionMode),
    dangerouslySkipPermissions = cli.dangerouslySkipPermissions,
    S = agentFrontmatter?.permissionMode,
    modeSuppliedOnInvocation = Boolean(dangerouslySkipPermissions || d || S);
  if (Pe(env.CLAUDE_CODE_SUBPROCESS_ENV_SCRUB)) {
    let E = dangerouslySkipPermissions || d && d !== "default" || c && c !== "default" || S && S !== "default",
      C = "Permission mode forced to default \u2014 CLAUDE_CODE_SUBPROCESS_ENV_SCRUB is set " + "(allowed_non_write_users hardening). Declare allowedTools explicitly, or set CLAUDE_CODE_SUBPROCESS_ENV_SCRUB=0 to opt out.";
    return {
      mode: "default",
      notification: E ? C : void 0,
      fromAutoFallback: !1,
      baselineMode: "default",
      decidedByProactivityLevel: !1,
      modeSuppliedOnInvocation: !0,
      autoDefaultWithheldForPendingVerdict: !1,
      levelPickHeldForPendingVerdict: void 0,
      autoStartWithheldForHipaaTaint: !1
    };
  }
  let M = settings.permissions?.disableBypassPermissionsMode === "disable",
    g = ee(),
    isAutoModeAvailable = !g && !G(settings),
    u = [],
    notification,
    A = c ? Z(c, g, "inherited auto mode dropped \u2014 auto mode killswitch active (override- or payload-served)") : void 0,
    L = c ? A?.mode ?? mM(c) : void 0;
  if (dangerouslySkipPermissions) if (_Hn("bypassPermissions")) notification = sFt, u.push("default");else u.push("bypassPermissions");
  if (d) {
    let E = Z(d, g, "auto mode killswitch active (override- or payload-served) \u2014 falling back to default");
    if (E) {
      if (E.unconsented) notification = sFt;
      u.push(E.mode);
    }
  }
  if (S) if (S === "auto" && g) t("agent frontmatter requested auto mode but circuit breaker active \u2014 falling through", {
    level: "warn"
  });else if (L && Qz(S, L) === void 0) t(`agent frontmatter permissionMode "${S}" ignored \u2014 it would widen the agent view's inherited mode (effective "${L}"), and the dispatched agent name is repo-controllable (settings \`agent\`)`, {
    level: "warn"
  }), l("tengu_agent_frontmatter_mode_widening_carry_ignored", {});else u.push(S);
  if (_f()) {
    let E = !nRr() ? void 0 : J().map(item => Lb(be(item)?.permissions?.defaultMode)).find(item => item != null);
    if (E != null && Pe(env.CLAUDE_CODE_REMOTE) && !U(E)) {
      if (t(`settings defaultMode "${E}" is not supported in CLAUDE_CODE_REMOTE \u2014 only acceptEdits, plan, default, and auto are allowed`, {
        level: "warn"
      }), u.length === 0) l("tengu_ccr_unsupported_default_mode_ignored", {
        mode_hash: kn(E)
      }), u.push("default");
    } else if (E === "bypassPermissions") {
      if (dangerouslySkipPermissions || cli.allowDangerouslySkipPermissions) {
        if (_Hn("bypassPermissions")) {
          if (u.length === 0) notification = sFt, process.stderr.write(`\u26A0 ${notification}
`);
          u.push("default");
        } else u.push(E);
      } else if (u.length === 0) notification = 'Permission mode bypassPermissions from settings was ignored \u2014 enable the "Claude Code: Allow Dangerously Skip Permissions" setting in VS Code to consent to it', t('settings defaultMode "bypassPermissions" ignored for a VS Code-owned session without the allow-bypass setting', {
        level: "warn"
      }), l("tengu_settings_bypass_unconsented_noninteractive_ignored", {}), process.stderr.write(`\u26A0 ${notification}
`), u.push("default");
    } else if (E === "auto") {
      if (!g) u.push(E);else t('settings defaultMode "auto" ignored for the IDE session \u2014 auto-mode circuit breaker is active', {
        level: "warn"
      });
    } else if (E != null) u.push(E);
  } else if (settings.permissions?.defaultMode) {
    let E = Lb(settings.permissions.defaultMode);
    if (Pe(env.CLAUDE_CODE_REMOTE) && !U(E)) t(`settings defaultMode "${E}" is not supported in CLAUDE_CODE_REMOTE \u2014 only acceptEdits, plan, default, and auto are allowed`, {
      level: "warn"
    }), l("tengu_ccr_unsupported_default_mode_ignored", {
      mode_hash: kn(E)
    });else if (E === "bypassPermissions") {
      if (!V("bypassPermissions")) {
        if (t('settings defaultMode "bypassPermissions" ignored \u2014 only policy/user/flag settings may grant bypass mode (projectSettings and localSettings are repo-controllable)', {
          level: "warn"
        }), l("tengu_settings_bypass_mode_untrusted_source_ignored", {}), !c) u.push("default");
      } else if (_Hn("bypassPermissions")) {
        if (u.length === 0) notification = sFt;
        u.push("default");
      } else u.push(E);
    } else if (E !== "auto") {
      if (L && !V(E) && Qz(E, L) === void 0) t(`settings defaultMode "${E}" ignored \u2014 it would widen the agent view's inherited mode (effective "${L}"), and only policy/user/flag settings may do that (projectSettings and localSettings are repo-controllable)`, {
        level: "warn"
      }), l("tengu_settings_mode_widening_carry_ignored", {});else u.push(E);
    } else if (!V("auto")) t('settings defaultMode "auto" ignored \u2014 only policy/user/flag settings may grant auto mode (projectSettings and localSettings are repo-controllable)', {
      level: "warn"
    }), l("tengu_settings_auto_mode_untrusted_source_ignored", {});else if (g) t("auto mode killswitch active (override- or payload-served) \u2014 falling back to default", {
      level: "warn"
    });else if (Pe(env.CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT) && G(settings)) t('settings defaultMode "auto" ignored \u2014 disableAutoMode is set and this is an unattended Remote Control machine session', {
      level: "warn"
    });else u.push("auto");
  }
  if (c) {
    let E = A;
    if (E) {
      if (E.unconsented && u.length === 0) notification = sFt;
      u.push(E.mode);
    }
  }
  let x;
  for (let mode of u) {
    if (mode === "bypassPermissions" && M) {
      t("bypassPermissions mode is disabled by settings", {
        level: "warn"
      }), notification = "Bypass permissions mode was disabled by settings";
      continue;
    }
    x = {
      mode: mode,
      notification: notification
    };
    break;
  }
  let fromAutoFallback = !1,
    autoDefaultWithheldForPendingVerdict = !1,
    levelPickHeldForPendingVerdict,
    autoStartWithheldForHipaaTaint = !1;
  if (!x) {
    let E = isAutoModeAvailable && (!Pe(env.CLAUDE_CODE_REMOTE) && nRr() && (!cli.isNonInteractiveSession || _f() || v("tengu_moss_anchor", !1)) || Pe(env.CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT)),
      mode_2 = "default";
    if (E) {
      let O = wyo(),
        k = Pe(env.CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT);
      if (O === void 0 || O === "pending" && k) mode_2 = "auto", fromAutoFallback = !0;else if (O === "taint") notification ??= _e, autoStartWithheldForHipaaTaint = !0;else if (O === "pending") autoDefaultWithheldForPendingVerdict = !0;
    }
    x = {
      mode: mode_2,
      notification: notification
    };
  }
  let N = x.mode,
    decidedByProactivityLevel = !1;
  if (e.proactivityLevel && e.proactivityLevel !== "default" && !modeSuppliedOnInvocation) {
    let E = jCe(e.proactivityLevel, {
        isAutoModeAvailable: isAutoModeAvailable,
        isBypassPermissionsModeAvailable: !1
      }, N),
      C = j(e.proactivityLevel, E),
      O = t2e(e.proactivityLevel, E, N),
      k = O === "pending" && Pe(env.CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT) ? void 0 : O;
    if (C !== void 0 && k === "taint") x.notification ??= ne(C), autoStartWithheldForHipaaTaint = !0;else if (k === "pending") autoDefaultWithheldForPendingVerdict = !0, levelPickHeldForPendingVerdict = C;
    x = {
      mode: k === void 0 ? E : "default",
      notification: x.notification
    }, fromAutoFallback = !1, decidedByProactivityLevel = !0;
  }
  return {
    mode: x.mode,
    notification: x.notification,
    fromAutoFallback: fromAutoFallback,
    baselineMode: N,
    decidedByProactivityLevel: decidedByProactivityLevel,
    modeSuppliedOnInvocation: modeSuppliedOnInvocation,
    autoDefaultWithheldForPendingVerdict: autoDefaultWithheldForPendingVerdict,
    levelPickHeldForPendingVerdict: levelPickHeldForPendingVerdict,
    autoStartWithheldForHipaaTaint: autoStartWithheldForHipaaTaint
  };
}
var te = {
    auto: "Auto mode",
    acceptEdits: "Accept edits"
  },
  _e = ne("auto");
function ne(e) {
  return `${te[e]} isn't the default for your organization \xB7 Shift+Tab to switch`;
}
function t2i(e) {
  return `${te[e]} didn't start: your organization's policy hasn't loaded \xB7 Shift+Tab to switch`;
}
function t2e(e, n, r) {
  let s = j(e, n);
  if (s === void 0 || s === r) return;
  return wyo();
}
function wyo() {
  let e = f7i();
  if (hs("hipaa") || e === "unobtainable_seen_hipaa") return "taint";
  return e === "pending" ? "pending" : void 0;
}
function n2i(e) {
  let n = e.cli.fallbackModel ?? (Array.isArray(e.settings.fallbackModel) ? e.settings.fallbackModel : void 0);
  if (n === void 0) return;
  return Me(n, uo);
}
function tTs(e) {
  return e.split(",").map(item => item.trim()).filter(item => item !== "");
}
function Me(e, n) {
  let r = typeof e === "string" ? tTs(e) : e,
    s = new Set(),
    f = [];
  for (let d of r) {
    let c = typeof d === "string" ? d.trim() : "";
    if (c === "") continue;
    let m = Vt(c === "default" ? Ud() : c);
    if (s.has(m)) continue;
    if (!n(m)) continue;
    if (s.add(m), f.push(m), f.length === Ce) break;
  }
  return f.length > 0 ? f : void 0;
}
var Ce = 3;
function xe(e) {
  switch (e) {
    case "userSettings":
      return "user_settings";
    case "projectSettings":
      return "project_settings";
    case "localSettings":
      return "local_settings";
    case "flagSettings":
      return "flag_settings";
    case "policySettings":
      return "policy_settings";
    case null:
      return "settings";
  }
}
function Ae(e) {
  switch (e) {
    case "env":
    case "user_settings":
    case "project_settings":
    case "local_settings":
    case "flag_settings":
    case "policy_settings":
    case "settings":
    case "agent_frontmatter":
    case "routine_frontmatter":
      return !0;
    default:
      return !1;
  }
}
function we(e, n, r) {
  if (Vse()) {
    let lastSeenOrgDefaultUpdatedAt = MPs();
    if (lastSeenOrgDefaultUpdatedAt !== null && !n && ert().includes("userSettings") && new Date(lastSeenOrgDefaultUpdatedAt).getTime() > new Date(fe().lastSeenOrgDefaultUpdatedAt ?? 0).getTime()) Le(u => u.lastSeenOrgDefaultUpdatedAt === lastSeenOrgDefaultUpdatedAt ? u : {
      ...u,
      lastSeenOrgDefaultUpdatedAt: lastSeenOrgDefaultUpdatedAt
    }, r);
    if (NZe() === null) return e;
    let y = e ? DA("model") : null;
    if (y === "policySettings" || y === "flagSettings") return e;
    return;
  }
  let s = PZe();
  if (!s || kko() === null) return e;
  let f = e ? DA("model") : null;
  if (f === "policySettings" || f === "flagSettings") return e;
  let d = ert().includes("userSettings"),
    lastSeenOrgDefaultUpdatedAt_2 = fe().lastSeenOrgDefaultUpdatedAt,
    m = new Date(s.updated_at).getTime() > new Date(lastSeenOrgDefaultUpdatedAt_2 ?? 0).getTime(),
    S = m && !n && d,
    b = () => Le(g => g.lastSeenOrgDefaultUpdatedAt === s.updated_at ? g : {
      ...g,
      lastSeenOrgDefaultUpdatedAt: s.updated_at
    }, r);
  if (s.override_user_selection) {
    if (S) b();
    return;
  }
  if (n) return e;
  let M = d ? be("userSettings")?.model : void 0;
  if (m && M) {
    if (qn("userSettings", {
      model: void 0
    }, void 0, r).then(g => {
      if (!g.error) b();
    }), f === "userSettings") return;
  } else if (S) b();
  return e;
}
function nTs(e, n) {
  let {
      cli: cli_2,
      env: env_2,
      settings: settings_2,
      agentFrontmatter: agentFrontmatter_2
    } = e,
    effectiveModel = cli_2.model === "default" ? Ud() : cli_2.model,
    m = effectiveModel,
    settingLayer = null;
  if (effectiveModel) settingLayer = cli_2.model === "default" ? "cli_default" : "cli";
  let b = agentFrontmatter_2?.model,
    M;
  if (!effectiveModel && b && b !== "inherit") M = b, effectiveModel = Vt(b), m = b, settingLayer = agentFrontmatter_2?.modelSource === "routine" ? "routine_frontmatter" : "agent_frontmatter";
  let g = !1,
    modelWithoutStartupOverride,
    u = effectiveModel;
  if (u === void 0) {
    if (env_2.ANTHROPIC_MODEL) u = env_2.ANTHROPIC_MODEL, settingLayer = "env";else if (u = we(settings_2.model || void 0, cli_2.isNonInteractiveSession === !0, n) || void 0, u !== void 0) settingLayer = xe(DA("model"));
    m = u;
  }
  let restrictedModel;
  if (u && !uo(u)) {
    let P = M !== void 0 && !g ? M : u,
      w = g ? null : dC(P);
    if (w !== null) {
      if (restrictedModel = P, u = w, effectiveModel !== void 0) effectiveModel = w;
    } else {
      if (!(P.trim().toLowerCase() === "default" || ZPs(P)) && !g) restrictedModel = P;
      u = void 0, m = void 0, settingLayer = null, effectiveModel = void 0;
    }
  }
  let unservedModelSpelling;
  if (u && Yon(u, Ae(settingLayer) ? "persisted" : "explicit")) unservedModelSpelling = u, u = void 0, m = void 0, settingLayer = null, effectiveModel = void 0;
  let initialMainLoopModel = u || null,
    resolvedInitialModel = Vt(initialMainLoopModel ?? Ud());
  return {
    effectiveModel: effectiveModel,
    initialMainLoopModel: initialMainLoopModel,
    resolvedInitialModel: resolvedInitialModel,
    rawModelRequest: m || null,
    restrictedModel: restrictedModel,
    unservedModelSpelling: unservedModelSpelling,
    settingLayer: settingLayer,
    modelWithoutStartupOverride: modelWithoutStartupOverride
  };
}
function r2i(e) {
  let systemPrompt = e.cli.systemPrompt,
    appendSystemPrompt = e.cli.appendSystemPrompt,
    s = H7i();
  if (s) appendSystemPrompt = appendSystemPrompt ? `${appendSystemPrompt}

${s}` : s;
  return {
    systemPrompt: systemPrompt,
    appendSystemPrompt: appendSystemPrompt
  };
}
function nRr() {
  return v("tengu_harbor_willow", !0) || wMs()?.meadow_lantern === !0;
}
var Oe = yi.filter(item => !hf.has(item)).toReversed(),
  De = ["acceptEdits", "plan", "default", "auto"];
function U(e) {
  return De.includes(e);
}
function J() {
  return Oe.filter(Kt);
}
function V(e) {
  return J().some(item => be(item)?.permissions?.defaultMode === e);
}
function G(e) {
  return e.permissions?.disableAutoMode === "disable" || e.disableAutoMode === "disable";
}
function Tnn(e) {
  return !G(e) && !ee();
}
function ke(e) {
  return J().map(item => Lb(be(item)?.permissions?.defaultMode)).find(item => item != null) === "plan" && Lb(e.permissions?.defaultMode) !== "plan";
}
function re() {
  let e = yi.filter(Kt).map(n => ({
    source: n,
    mode: (n === "policySettings" ? Spe().length > 0 || Ob().some(item => item.userWritable === !0 && item.path === "") || w7() && cHe() || _C() !== !1 && !Pw() : hT(n).some(item => item.severity !== "warning")) ? "unreadable" : be(n)?.permissions?.defaultMode
  })).findLast(({
    source: source_2,
    mode: mode_3
  }) => mode_3 !== void 0 && (mode_3 !== "auto" || !hf.has(source_2)));
  return e === void 0 || e.mode === "auto" ? void 0 : e.mode === "unreadable" ? "settings_unreadable" : "stored_default";
}
function o2i() {
  return re() === "settings_unreadable" || yi.filter(Kt).some(item => item !== "policySettings" && hT(item).some(item => item.severity !== "warning"));
}
function rRr({
  settings: settings_3,
  scrubbed: scrubbed,
  typedLevel: typedLevel,
  carriedMode: carriedMode
}) {
  let f = typedLevel !== void 0 && typedLevel !== "default";
  return {
    autoSeedable: Tnn(settings_3) && !scrubbed,
    storedDefaultBar: re(),
    otherChoiceTyped: f || carriedMode !== void 0 && carriedMode !== "auto",
    carriedPlanHolds: carriedMode === "plan" && !f,
    trustedPlanDisplaced: ke(settings_3)
  };
}
function Re(e) {
  let n = Lb(e.permissions?.defaultMode);
  if (n == null || !U(n)) return;
  if (n !== "auto") return n;
  return V("auto") && Tnn(e) ? "auto" : void 0;
}
function oRr({
  gateOn: gateOn,
  permissionModeTyped: permissionModeTyped,
  dangerouslySkipPermissions: dangerouslySkipPermissions_2,
  scrubbed: scrubbed_2,
  settings: settings_4,
  effort: effort
}) {
  let c = !permissionModeTyped && !dangerouslySkipPermissions_2 && !scrubbed_2,
    settingsDefault = c ? Re(settings_4) : void 0;
  return {
    considered: gateOn && c,
    settingsDefaultModePresent: settings_4.permissions?.defaultMode != null,
    settingsDefault: settingsDefault,
    permissionMode: gateOn ? settingsDefault : void 0,
    effort: gateOn ? effort : void 0
  };
}
function s2i({
  sentMode: sentMode,
  repositorySettings: repositorySettings
}) {
  if (sentMode === "auto") return;
  if (sentMode !== void 0) return sentMode;
  let r = Y(repositorySettings?.permissions?.defaultMode);
  return r !== void 0 && r !== "auto" && U(r) ? r : "default";
}
function i2i({
  seed: seed,
  settingsMode: settingsMode,
  sentMode: sentMode_2,
  startsIn: startsIn
}) {
  if (!seed.considered || !seed.settingsDefaultModePresent || seed.permissionMode !== void 0 || settingsMode === void 0 || sentMode_2 !== void 0 && Y(settingsMode) === sentMode_2) return null;
  let f = Y(settingsMode) === "auto" ? "auto mode could not be requested from this machine (it is off here, or only the repository asked for it)" : "not a mode a cloud session can start in";
  return {
    text: `Settings kept on this machine: the default permission mode in your settings (${settingsMode}) \u2014 ${f}${startsIn !== void 0 ? `; the session starts in ${startsIn} mode` : ""}`,
    level: "info"
  };
}
function Y(e) {
  return e === void 0 ? void 0 : Pg(e);
}
var rTs = 'bypass in a background worker needs consent recorded in your user settings \u2014 add "skipDangerousModePermissionPrompt": true to ~/.claude/settings.json (accepting the interactive disclaimer writes the same key, but that dialog is skipped while consent already exists in .claude/settings.local.json or via --settings, which does not count here). A launch with user settings off does not read that file: relaunch with them on',
  sFt = `Permission mode downgraded to default: ${rTs}`;
function _Hn(e) {
  if (!Gt()) return !1;
  if (e === "bypassPermissions") return !rbt() && !fe().bypassPermissionsModeAccepted;
  return !1;
}
function Z(e, n, r) {
  let mode_4 = mM(e);
  if (_Hn(mode_4)) return {
    mode: "default",
    unconsented: !0
  };
  if (mode_4 === "auto" && n) {
    t(r, {
      level: "warn"
    });
    return;
  }
  return {
    mode: mode_4
  };
}
function Ase(e, n) {
  return Dp(Vt(e)) === Dp(Vt(n));
}
function Cnn(e, n) {
  let r = ie(e),
    s = ie(n);
  return r.name === s.name && (r.date === void 0 || s.date === void 0 || r.date === s.date);
}
function ie(e) {
  let n = oT(e),
    r = n.toLowerCase(),
    s = nc(RBt(r)),
    name = rt(n, {
      identity: !0,
      overridesMap: {}
    });
  if (MR(s)) return {
    name: name,
    date: s.date
  };
  return {
    name: name === zy(n) ? r : name
  };
}
var Fe = "tengu_loggia_passage";
function B() {
  return v(Fe, !1);
}
function a2i({
  sent: e,
  turnEffort: turnEffort,
  hookEffortValue: hookEffortValue
}) {
  if (e === void 0) return {
    carry: null,
    withheld: "none_sent"
  };
  if (hookEffortValue !== void 0) return {
    carry: null,
    withheld: "hook"
  };
  if (turnEffort !== void 0) return {
    carry: null,
    withheld: "turn_layer"
  };
  return B() ? {
    carry: null,
    withheld: "killed"
  } : {
    carry: e
  };
}
function bHn(e) {
  return {
    refused_effort_level: de(e.carry),
    refused_effort_withheld: de(e.carry === null ? e.withheld : void 0)
  };
}
function oTs({
  refusedEffort: refusedEffort,
  fallbackModel: n,
  heldBySession: heldBySession,
  loopOverride: loopOverride,
  loopEffort: loopEffort
}) {
  if (heldBySession) return {
    latchEffort: refusedEffort.carry ?? void 0,
    loopEffort: void 0
  };
  let level = refusedEffort.carry ?? sTs(loopOverride, loopEffort);
  return {
    latchEffort: void 0,
    loopEffort: level === void 0 ? void 0 : {
      model: n,
      level: level
    }
  };
}
function sTs(e, n) {
  return n !== void 0 && n.model === e ? n.level : void 0;
}
function se() {
  return _Y()?.carriedEffort !== void 0;
}
function R(e) {
  let n = _Y(),
    r = of();
  if (n?.carriedEffort === void 0 || r == null || B()) return;
  try {
    return Ase(r, n.fallbackModel) && Ase(e, n.fallbackModel) ? n.carriedEffort : void 0;
  } catch (error) {
    a(F(error));
    return;
  }
}
function sRr({
  loopEffort: loopEffort_2,
  continuesMainConversation: continuesMainConversation
}, r) {
  if (loopEffort_2 !== void 0) return B() ? null : loopEffort_2;
  return (continuesMainConversation ? R(r) : void 0) ?? null;
}
function l2i({
  carried: carried,
  withIt: withIt,
  withoutIt: withoutIt,
  isSavedSetAside: isSavedSetAside
}) {
  if (withIt === withoutIt) return withIt === carried ? "moot" : "no_effect";
  if (withIt !== carried) return "clamped";
  return isSavedSetAside ? "applied_over_saved" : "applied";
}
function iRr() {
  iKn("effort_change");
}
function d2i(e) {
  let n = _Y();
  if (n !== void 0 && !Ase(e, n.fallbackModel)) iKn("model_change");
}
function c2i() {
  let e = _Y();
  if (e?.carriedEffort === void 0) return;
  let n = of();
  if (B()) iKn("kill_switch");else if (n == null || !Ase(n, e.fallbackModel)) iKn("model_change");
}
function WCe() {
  return i.CLAUDE_CODE_MAX_EFFORT_REMINDER ?? v("tengu_proud_clover", !1);
}
function aRr() {
  return !1;
}
function lRr(e) {
  return !1;
}
function ww(e) {
  if (I$r(e)) return !1;
  let n = aVe(e, "effort");
  if (n !== void 0) return n;
  let r = rt(e),
    s = TBt("effort", r);
  if (s !== void 0) return s;
  let f = Two(e, r);
  if (f !== void 0) return f.length > 0;
  if (r.includes("claude-3-") || r === "claude-opus-4-0" || r === "claude-opus-4-1" || r === "claude-sonnet-4-0" || r === "claude-sonnet-4-5" || r === "claude-haiku-4-5") return !1;
  if (i.CLAUDE_CODE_ALWAYS_ENABLE_EFFORT) return !0;
  if (Aw(r, "effort", e) || r === "claude-mythos-5") return !0;
  return s5(Pd(e));
}
function Yue(e) {
  if (I$r(e)) return !1;
  let n = aVe(e, "max_effort");
  if (n !== void 0) return n;
  let r = rt(e),
    s = le("max_effort", e, r);
  if (s !== void 0) return s;
  let f = Two(e, r);
  if (f !== void 0) return f.includes("max");
  if (r.includes("claude-3-") || r === "claude-opus-4-0" || r === "claude-opus-4-1" || r === "claude-opus-4-5" || r === "claude-sonnet-4-0" || r === "claude-sonnet-4-5" || r === "claude-haiku-4-5") return !1;
  if (Aw(r, "max_effort", e) || r === "claude-mythos-5") return !0;
  return s5(Pd(e));
}
function n2e(e) {
  if (I$r(e)) return !1;
  let n = aVe(e, "xhigh_effort");
  if (n !== void 0) return n;
  let r = rt(e),
    s = le("xhigh_effort", e, r);
  if (s !== void 0) return s;
  let f = Two(e, r);
  if (f !== void 0) return f.includes("xhigh");
  if (r.includes("claude-3-") || r === "claude-opus-4-0" || r === "claude-opus-4-1" || r === "claude-opus-4-5" || r === "claude-opus-4-6" || r === "claude-sonnet-4-0" || r === "claude-sonnet-4-5" || r === "claude-sonnet-4-6" || r === "claude-haiku-4-5") return !1;
  if (Aw(r, "xhigh_effort", e) || r === "claude-mythos-5") return !0;
  return s5(Pd(e));
}
function le(e, n, r) {
  if (TBt("effort", r) === !1) return !1;
  let s = TBt(e, r);
  if (s === void 0) return;
  return s && ww(n);
}
function Ue(e) {
  return n2e(e);
}
function UF(e) {
  return im() && (e === void 0 || Ue(e));
}
function wg(e, n) {
  return e === !0 && UF(n);
}
function dRr(e, n, r) {
  if (n.sessionEffort?.kind === "level") {
    let s = n.sessionEffort.value;
    return !(r === s || typeof r === "string" && Dv(r) && xse(r, e) === s);
  }
  return jF(e, xl(n)) !== jF(e, r);
}
function cRr(e, n, r) {
  if (r.sessionEffort?.kind === "level" || typeof n !== "string") return !1;
  let s = Kg(e, xl(r, e)),
    f = Kg(e, xl(r, e, {
      withHold: !1
    }), {
      carriedEffort: null
    });
  return BF(n) === s && s !== f;
}
function Dv(e) {
  return _i.includes(e);
}
function h(e) {
  return _i.indexOf(e);
}
var iFt = "high";
function kyo(e) {
  return Dv(e) && h(e) > h(iFt);
}
function vyo(e) {
  let n = rt(e);
  return Aw(n, "thinking_disabled_effort_cap", e) ?? n === "claude-opus-5";
}
function ce(e) {
  let n = [...kp(), ...$o().map(item => be(item)), ...W()],
    r = n.some(item => Object.values(item?.modelSettings ?? {}).some(item => item?.maxEffortLevel !== void 0)) ? N1(e) : void 0,
    s = null;
  for (let f of n) {
    if (!f) continue;
    let d;
    if (r !== void 0) for (let [c, m] of Object.entries(f.modelSettings ?? {})) {
      let S = m?.maxEffortLevel;
      if (S !== void 0 && (d === void 0 || h(S) < h(d)) && N1(c) === r) d = S;
    }
    if (d ??= f.maxEffortLevel, d !== void 0 && d !== "max" && (s === null || h(d) < h(s))) s = d;
  }
  return s;
}
function Rnn(e) {
  let n = ce(e),
    r = null,
    s = Te();
  if (s === "firstParty" || s === "gateway") {
    let d = rt(kU(e.trim().toLowerCase()), {
        identity: !0
      }),
      c = aFe().find(item => rt(kU(item.apiName.trim().toLowerCase()), {
        identity: !0
      }) === d)?.maxEffortLevel;
    r = c != null && Dv(c) ? c : null;
  }
  let f = r === null ? n : n === null ? r : h(n) < h(r) ? n : r;
  return f === "max" ? null : f;
}
function nQe(e) {
  if (Te() !== "firstParty") return null;
  let n = y$t();
  if (n === null) return null;
  let default_effort_level = n.default_effort_level;
  if (default_effort_level == null || !Dv(default_effort_level)) return null;
  let s = rt(kU(e.trim().toLowerCase()), {
    identity: !0
  });
  return rt(kU(n.name.trim().toLowerCase()), {
    identity: !0
  }) === s ? default_effort_level : null;
}
function Eyo(e) {
  return y$t()?.override_user_effort === !0 && nQe(e) !== null;
}
function Tyo(e, n) {
  let r = Rnn(n);
  return r === null || h(e) <= h(r);
}
function zCe(e) {
  let n = Rnn(e);
  return _i.filter(item => n === null || h(item) <= h(n));
}
function xse(e, n) {
  let r = Rnn(n);
  return r !== null && h(e) > h(r) ? r : e;
}
function z(e, n) {
  if (n === "xhigh") return n2e(e);
  if (n === "max") return Yue(e);
  return !0;
}
function Ann(e, n, r) {
  let s = zCe(e).filter(item => item !== "max" && z(e, item));
  return r === 1 ? s.find(item => h(item) > h(n)) : s.findLast(f => h(f) < h(n));
}
function iTs(e, n) {
  return n !== "max" && Ann(e, n, 1) === void 0 && Tyo("max", e) && Yue(e);
}
function pe(e) {
  return ww(e) && !Ct() && kw() === void 0;
}
function $ht(e) {
  return pe(e) && SHn();
}
function SHn() {
  return v("tengu_velvety_kay", !1);
}
function u2i(e) {
  let n = Rnn(e);
  return n !== null && _i.some(item => h(item) > h(n) && z(e, item));
}
function f2i(e, n) {
  if (typeof e !== "string" || !Dv(e)) return null;
  let r = Rnn(n);
  if (r === null || h(e) <= h(r)) return null;
  let s = Kg(n, e) ?? r;
  return `Effort '${e}' exceeds the cap for ${n} set by your settings or organization; using '${s}'.`;
}
var ge = {
    med: "medium"
  },
  Ee = {
    ultracode: "xhigh"
  };
function GCe(e) {
  if (typeof e !== "string") return;
  let n = e.trim().toLowerCase();
  return Object.hasOwn(Ee, n) ? n : void 0;
}
function rQe(e) {
  let n = GCe(e);
  return n === void 0 ? void 0 : Ee[n];
}
function xX(e) {
  return String(e);
}
function BF(e) {
  let n = e.trim().toLowerCase(),
    r = ge[n] ?? n;
  return Dv(r) ? r : void 0;
}
function aFt(e) {
  let level_2 = BF(e);
  if (level_2 !== void 0) return {
    level: level_2,
    warning: void 0
  };
  let level_3 = GCe(e);
  if (level_3 !== void 0) return {
    level: level_3,
    warning: void 0
  };
  return {
    level: void 0,
    warning: `Unknown --effort value '${e}' \u2014 ignoring it and using the default effort. Valid values: ${_i.join(", ")}.`
  };
}
function n4(e) {
  if (e === void 0 || e === null || e === "") return;
  if (typeof e === "number" && ue(e)) return e;
  let n = String(e).toLowerCase(),
    r = ge[n] ?? n;
  if (Dv(r)) return r;
  let s = parseInt(n, 10);
  if (!isNaN(s) && ue(s)) return s;
  return;
}
function cNe(e) {
  if (e === "low" || e === "medium" || e === "high" || e === "xhigh") return e;
  return;
}
function lFt(e) {
  return yt().ultracode === !0 || GCe(e) === "ultracode";
}
function dFt() {
  let CLAUDE_CODE_SUBAGENT_EFFORT = i.CLAUDE_CODE_SUBAGENT_EFFORT;
  return CLAUDE_CODE_SUBAGENT_EFFORT === void 0 ? void 0 : BF(CLAUDE_CODE_SUBAGENT_EFFORT);
}
function kw() {
  let CLAUDE_CODE_EFFORT_LEVEL = i.CLAUDE_CODE_EFFORT_LEVEL;
  return CLAUDE_CODE_EFFORT_LEVEL?.toLowerCase() === "unset" || CLAUDE_CODE_EFFORT_LEVEL?.toLowerCase() === "auto" ? null : n4(CLAUDE_CODE_EFFORT_LEVEL);
}
var sessionEffort = Object.freeze({
    kind: "inherit"
  }),
  Be = Object.freeze({
    kind: "default"
  });
function Xue(value_2) {
  return {
    kind: "level",
    value: value_2
  };
}
function cFt(e) {
  return e === void 0 ? Be : Xue(e);
}
function Ie(e) {
  return e === void 0 ? sessionEffort : Xue(e);
}
function aTs(e) {
  return e.kind === "level" ? String(e.value) : null;
}
function fRr(e) {
  return typeof e === "string" && e !== "" && e.length <= qKi ? e : null;
}
function Pse(e, n) {
  return e === n || e.kind === n.kind && (e.kind !== "level" || n.kind === "level" && e.value === n.value);
}
var Ne = new Set(["claude-3-5-haiku", "claude-3-5-sonnet", "claude-3-7-sonnet", "claude-haiku-4-5", "claude-sonnet-4-0", "claude-sonnet-4-5", "claude-sonnet-4-6", "claude-sonnet-5", "claude-opus-4-0", "claude-opus-4-1", "claude-opus-4-5", "claude-opus-4-6", "claude-opus-4-7", "claude-opus-4-8", "claude-opus-5", "claude-fable-5", "claude-fable-5-1", "claude-mythos-5", "claude-mythos-5-1"]),
  ae = new Map();
function lTs(e) {
  let n = ae.get(e);
  if (n === void 0) n = Ne.has(e) || !MR(nc(e)), ae.set(e, n);
  return n;
}
function He() {
  let e = fe();
  if (e.firstStartVersion !== void 0) return [];
  let n = [];
  if (!e.unpinOpus47LaunchEffort) n.push("claude-opus-4-7");
  if (!e.unpinOpus48LaunchEffort) n.push("claude-opus-4-8");
  if (!e.unpinFable5LaunchEffort) {
    n.push("claude-fable-5");
    let ANTHROPIC_DEFAULT_FABLE_MODEL = i.ANTHROPIC_DEFAULT_FABLE_MODEL;
    if (ANTHROPIC_DEFAULT_FABLE_MODEL && !iQe(rt(Vt(ANTHROPIC_DEFAULT_FABLE_MODEL), {
      deterministic: !0,
      identity: !0
    }))) n.push(N1(ANTHROPIC_DEFAULT_FABLE_MODEL));
  }
  return n;
}
function wHn() {
  let e = new Set(),
    n = [];
  for (let source_3 of $o()) {
    if (source_3 === "flagSettings") {
      let [settings_5, settings_6] = W();
      if (settings_5 !== void 0) n.push({
        source: "projectSettings",
        settings: settings_5
      });
      if (settings_6 !== void 0) n.push({
        source: "localSettings",
        settings: settings_6
      });
    }
    let s = un(source_3);
    if (s !== void 0) {
      let d = Ve(s);
      if (e.has(d) && source_3 !== "flagSettings") continue;
      e.add(d);
    }
    let settings_7 = be(source_3);
    if (settings_7 !== void 0 && settings_7 !== null) n.push({
      source: source_3,
      settings: settings_7
    });
  }
  return n;
}
function oQe({
  flagLayerAsLaunched = !1
} = {}) {
  let n = wHn(),
    r = flagLayerAsLaunched ? Pc() : null;
  if (r !== null && ("effortLevel" in r || "modelSettings" in r)) {
    let g = un("flagSettings"),
      y = g === void 0 ? null : rb(g, lv() ?? SY()).settings;
    n = n.map(item => item.source === "flagSettings" ? {
      source: item.source,
      settings: {
        ...item.settings,
        effortLevel: y?.effortLevel,
        modelSettings: y?.modelSettings
      }
    } : item);
  }
  let s = y$t(),
    f = s !== null && Eyo(s.name) ? N1(s.name) : void 0,
    legacyUserEffort,
    c,
    m = [];
  for (let {
    source: source_4,
    settings: settings_8
  } of n) {
    let setsTopLevel = settings_8.effortLevel !== void 0;
    if (source_4 === "userSettings") {
      legacyUserEffort = cNe(settings_8.effortLevel), m.push({
        source: source_4,
        setsTopLevel: !1,
        settings: settings_8
      });
      continue;
    }
    if (setsTopLevel) c = {
      level: cNe(settings_8.effortLevel)
    };
    m.push({
      source: source_4,
      setsTopLevel: setsTopLevel,
      settings: settings_8
    });
  }
  m.reverse();
  let S = m.map(({
      settings: settings_9
    }) => {
      let y = new Map();
      for (let [u, _] of Object.entries(settings_9.modelSettings ?? {})) {
        let A = _?.effortLevel;
        if (A === void 0) continue;
        let L = N1(u);
        if (u === L || !y.has(L)) y.set(L, A);
      }
      return y;
    }),
    b = new Set();
  if (f !== void 0) b.add(f);
  for (let g of S) for (let y of g.keys()) b.add(y);
  let byModel = {};
  for (let g of b) {
    if (g === f) byModel[g] = void 0;
    for (let y = 0; y < m.length; y++) {
      if (g === f && !We(m[y].source)) continue;
      let u = S[y].get(g);
      if (u !== void 0) {
        byModel[g] = cNe(u);
        break;
      }
      if (m[y].setsTopLevel) {
        byModel[g] = cNe(m[y].settings.effortLevel);
        break;
      }
    }
  }
  if (c !== void 0) legacyUserEffort = void 0;
  if (legacyUserEffort !== void 0) {
    for (let g of He()) if (!Object.hasOwn(byModel, g) && !Object.hasOwn(Object.prototype, g)) byModel[g] = void 0;
  }
  return {
    default: c?.level,
    legacyUserEffort: legacyUserEffort,
    byModel: byModel
  };
}
function We(e) {
  return e === "policySettings" || e === "flagSettings";
}
function pRr(e) {
  if (!Eyo(e)) return null;
  return LL(vHn(Cyo(oQe(), e) ?? hRr(e), e));
}
function Cyo(e, n) {
  let r = N1(n);
  if (Object.hasOwn(e.byModel, r)) return e.byModel[r];
  if (e.default !== void 0 || e.legacyUserEffort === void 0) return e.default;
  return lTs(r) ? e.legacyUserEffort : void 0;
}
function je(e) {
  if (e.legacyUserEffort !== void 0) return !1;
  for (let n in e.byModel) return !1;
  return !0;
}
function N1(e) {
  return $t(rt(ORe(e), {
    deterministic: !0,
    identity: !0
  }));
}
function Ge(e, effortLevel) {
  return dTs(e, {
    effortLevel: effortLevel
  }, {
    effortLevel: effortLevel
  });
}
function dTs(e, n, r) {
  let s = N1(e);
  return Object.hasOwn(Object.prototype, s) ? r : {
    modelSettings: {
      [s]: n
    }
  };
}
function p2i(e) {
  let n = hn()?.accountUuid;
  return n !== void 0 && q(fe(), n, e);
}
function xl(e, n, {
  withHold = !0
} = {}) {
  let s = e.sessionEffort ?? sessionEffort;
  switch (s.kind) {
    case "level":
      return s.value;
    case "default":
      return;
    case "inherit":
      {
        if (e.settingsEffortTable === void 0) return;
        if (je(e.settingsEffortTable) && !se()) return e.settingsEffortTable.default;
        let f = n ?? Vt(e.mainLoopModelForSession ?? e.mainLoopModel ?? Ud());
        return withHold && pFt(f) !== void 0 ? void 0 : Cyo(e.settingsEffortTable, f);
      }
  }
}
function xnn(e, n) {
  return N1(e) === N1(n);
}
function Uht(e, n, r) {
  return e.sessionEffort?.kind !== "level" || n === void 0 || r === void 0 || xnn(n, r) ? e : Ryo(e);
}
function cTs(e, n) {
  return xl(Ryo(e), n, {
    withHold: !1
  });
}
function Ryo(e) {
  return e.sessionEffort?.kind === "level" ? {
    ...e,
    sessionEffort: sessionEffort
  } : e;
}
function G_e(e) {
  return e.kind === "level" && typeof e.value === "string" ? e.value : void 0;
}
function Kg(e, n, {
  turnEffort: turnEffort_2,
  hookEffortValue: hookEffortValue_2,
  carriedEffort = R(e)
} = {}) {
  if (!ww(e)) return;
  let d = ce(e) !== null;
  if (hookEffortValue_2 !== void 0) {
    let b = typeof hookEffortValue_2 === "number" && d ? LL(hookEffortValue_2) : hookEffortValue_2;
    return vHn(b, e);
  }
  let c = kw();
  if (c === null && !d) return;
  let m = hRr(e, carriedEffort),
    S = c ?? (c === null ? m : void 0) ?? turnEffort_2 ?? n ?? m;
  if (typeof S === "number" && d) S = LL(S);
  return vHn(S, e);
}
function kHn(e, n) {
  if (!ww(e) || kw() !== void 0) return;
  if (typeof n === "string") return xse(n, e);
  if (n === void 0 && nQe(e)) return Ose(e);
  return;
}
function vHn(e, n) {
  let r = e;
  if (typeof r === "string" && Dv(r)) r = xse(r, n);
  if (r === "max" && !Yue(n)) r = "high";
  if (r === "xhigh" && !n2e(n)) r = "high";
  return r;
}
function Ose(e) {
  return LL(vHn(hRr(e), e));
}
function r2e(e) {
  return oOr(e, rt(e));
}
function V_e(e, n) {
  return cyt() && (!ye() || rwt()) && Se(e, n);
}
function uTs(e, n) {
  let r = Zu();
  return cyt() && (!ye() || rwt() || uHr() && _jt.some(item => item === r) || Hte()) && Se(e, n);
}
function mRr(e, n, r = !1) {
  return (r ? uTs(e, n) : V_e(e, n)) && h(jF(e, n)) < h("xhigh");
}
function Se(e, n) {
  return pe(e) && r2e(e) && typeof Kg(e, n) === "string" && Kg(e, n, {
    turnEffort: "xhigh"
  }) === "xhigh";
}
function m2i(e, n, r, s, f) {
  if (!f) return !1;
  let d = ab();
  if (d === 0 || d === s) return !1;
  if (!ww(r)) return !1;
  if (typeof Kg(r, e) !== "number" && typeof Kg(r, n) !== "number" && r2e(r)) return !1;
  if (Kg(r, e, {
    carriedEffort: null
  }) === Kg(r, n)) return !1;
  if (Tl() && e !== void 0 && cNe(typeof e === "string" ? xse(e, r) : e) === void 0) return !1;
  return !0;
}
async function Ye(e, n, r) {
  return qn("userSettings", Ge(n, e), void 0, r);
}
async function Ise(e, n, r = !0, s) {
  let f = e !== void 0 ? cNe(e) : void 0;
  if (r && (e === void 0 || f !== void 0) && !rr()) {
    let d = await Ye(f, n, s);
    if (d.error) return d.error;
  }
  return;
}
function uFt(e) {
  let n = {
    sessionEffort: Ie(byo(e)),
    settingsEffortTable: oQe()
  };
  return sKn(n), n;
}
function sQe(e, n, turnEffort_3) {
  let s = Kg(e, n, {
    turnEffort: turnEffort_3
  });
  return s === void 0 ? void 0 : LL(s);
}
function jF(e, n, r) {
  return sQe(e, n, r) ?? "high";
}
function Cb(e, n, r) {
  return ww(e) ? jF(e, n, r) : void 0;
}
function fFt(e, n, turnEffort_4, s) {
  if (n === void 0 && turnEffort_4 === void 0) return "";
  let f = s ?? Kg(e, n, {
    turnEffort: turnEffort_4
  });
  if (f === void 0) return "";
  return ` with ${xX(LL(f))} effort`;
}
function ue(e) {
  return Number.isInteger(e);
}
function LL(e) {
  if (typeof e === "string") return Dv(e) ? e : "high";
  return "high";
}
function $e(e) {
  switch (e) {
    case "low":
      return "Quick, straightforward implementation with minimal overhead";
    case "medium":
      return "Balanced approach with standard implementation and testing";
    case "high":
      return "Comprehensive implementation with extensive testing and documentation";
    case "xhigh":
      return "Deeper reasoning than high, just below maximum (on supported models)";
    case "max":
      return `Maximum capability with deepest reasoning. ${UV}`;
  }
}
function fTs(e) {
  if (typeof e === "string") {
    let n = $e(e);
    if (e === "high" && KZe() && v("tengu_slate_finch", !1)) return `${n} \xB7 burns fastest \u2014 medium handles most tasks`;
    return n;
  }
  return "Balanced approach with standard implementation and testing";
}
function hRr(e, n) {
  let r = K(e);
  return (r === void 0 ? n : void 0) ?? nQe(e) ?? r ?? Qe(e) ?? ze(e) ?? qe(e);
}
function ze(e) {
  let n = Bd(e)?.default_effort;
  return typeof n === "string" && Dv(n) && z(e, n) ? n : void 0;
}
function pFt(e) {
  let n = R(e);
  return n !== void 0 && K(e) === void 0 ? n : void 0;
}
function h2i(e) {
  return nQe(e) !== null || K(e) !== void 0 || R(e) !== void 0;
}
var Ke = "tengu_witty_wand",
  Xe = p(() => me(o(), oe()));
function K(e) {
  let n = v(Ke, {});
  if (typeof n === "string") n = et(n, !1);
  let r = Xe().safeParse(n);
  if (!r.success) return;
  let s = r.data[$t(rt(e))],
    f = typeof s === "string" ? s.trim().toLowerCase() : void 0;
  return f !== void 0 && Dv(f) ? f : void 0;
}
function Qe(e) {
  let n = gYi(e, rt(e));
  return n !== void 0 && Dv(n) ? n : void 0;
}
function qe(e) {
  return sd(rt(e))?.default_effort ?? "high";
}
function gRr(e, n) {
  let r = rr() ? void 0 : kw();
  return (r === null || r === void 0 && e === void 0) && pFt(n) === void 0;
}
function EHn(e, n) {
  return;
}
export { oFt, _yo, ZGi, e2i, jCe, byo, Syo, t2i, t2e, wyo, n2i, tTs, nTs, r2i, nRr, Tnn, o2i, rRr, oRr, s2i, i2i, rTs, sFt, _Hn, Ase, Cnn, a2i, bHn, oTs, sTs, sRr, l2i, iRr, d2i, c2i, WCe, aRr, lRr, ww, Yue, n2e, UF, wg, dRr, cRr, Dv, iFt, kyo, vyo, Rnn, nQe, Eyo, Tyo, zCe, xse, Ann, iTs, $ht, SHn, u2i, f2i, GCe, rQe, xX, BF, aFt, n4, cNe, lFt, dFt, kw, sessionEffort as uRr, Xue, cFt, aTs, fRr, Pse, lTs, wHn, oQe, pRr, Cyo, N1, dTs, p2i, xl, xnn, Uht, cTs, Ryo, G_e, Kg, kHn, vHn, Ose, r2e, V_e, uTs, mRr, m2i, Ise, uFt, sQe, jF, Cb, fFt, LL, fTs, hRr, pFt, h2i, gRr, EHn };