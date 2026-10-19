// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Fe } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { at, j, Th, gc, ygn, JW, _gn, ore, zGe, YJn } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { pe } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { H } from "B:/~BUN/root/chunk-3aez4b53.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { ta, LB, HB, kA, eL, N_ } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { Sy } from "B:/~BUN/root/chunk-gyr2a6wz.js";
import { Bh, _g } from "B:/~BUN/root/chunk-8z3a373v.js";
import { pt } from "B:/~BUN/root/chunk-cqkcn3bx.js";
import { Rr, kl } from "B:/~BUN/root/chunk-nxwmyxnk.js";
import { xs, Wo, nn, ef } from "B:/~BUN/root/chunk-6a9s3k2y.js";
import { $Vs, fn, rk, me, eTe, Zp, ut, SA, M_, une, In, FQe } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { _l, L_, c_t, xe, Sd, T2 } from "B:/~BUN/root/chunk-8pmnanyd.js";
import { tYn, Ste, BDr, njs, qXe, ijs, Yr, l$t, Xv, nLr, rWe, r0o, Bl, qe, Sm, It, p$t, OD, YIe, uEe, dht, wn, tMe, Ht, En, E, Ce, ue, Il, iLo } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { Ni, cVs } from "B:/~BUN/root/chunk-h9p45fg5.js";
import { Fs } from "B:/~BUN/root/chunk-dq7zfs8r.js";
import { Wg } from "B:/~BUN/root/chunk-pmw6knpp.js";
import { X1e } from "B:/~BUN/root/chunk-4yrr52wq.js";
import { WUs } from "B:/~BUN/root/chunk-jmms813f.js";
import { Pt, yc, XD } from "B:/~BUN/root/chunk-j0ghr71r.js";
import { an } from "B:/~BUN/root/chunk-31x8pa20.js";
import { o, oe, fe } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { resolve as ke } from "path";
var ye = new at(() => ({
  layers: []
}));
function W() {
  return ye.peek(j())?.layers ?? [];
}
function pmt(e, n, r) {
  let s = O(O(e.autoCompactOffer, n), r);
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
function qOr(e, n, r, eligibleLoggedAt) {
  if (pmt(e, n, r) !== void 0) return e;
  let d = O(e.autoCompactOffer, n);
  return {
    ...e,
    autoCompactOffer: {
      ...e.autoCompactOffer,
      [n]: {
        ...d,
        [r]: {
          ...O(d, r),
          eligibleLoggedAt: eligibleLoggedAt
        }
      }
    }
  };
}
function jFs(e, n, r) {
  let s = pmt(e, n, r);
  return Z(e, n, r, {
    escCount: (s?.escCount ?? 0) + 1
  });
}
function WFs(e, n, r, resolved_2) {
  return Z(e, n, r, {
    resolved: resolved_2
  });
}
function Z(e, n, r, s) {
  let d = O(e.autoCompactOffer, n),
    u = O(d, r),
    c = pmt(e, n, r);
  if (c === void 0 || c.isAnswered || !u) return e;
  return {
    ...e,
    autoCompactOffer: {
      ...e.autoCompactOffer,
      [n]: {
        ...d,
        [r]: {
          ...u,
          ...s
        }
      }
    }
  };
}
function O(e, n) {
  return typeof e === "object" && e !== null && Object.hasOwn(e, n) ? e[n] : void 0;
}
function ee(e, n, r) {
  let s = pmt(e, n, r);
  return s !== void 0 && (s.isAnswered || (s.escCount ?? 0) > 0);
}
function Eme(e, n, r) {
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
function G(e, n) {
  if (n === "auto" || e === "proactive" && n === "acceptEdits") return n;
  return;
}
function KOr(e) {
  return zj(e) ?? K1e(e);
}
function re() {
  let {
    value: value,
    source: source
  } = En("tengu_auto_mode_config", {});
  if (value?.enabled !== "disabled") return !1;
  return source === "override" || source === "payload";
}
function YOr(e) {
  let {
      cli: cli,
      env: env,
      settings: settings,
      agentFrontmatter: agentFrontmatter
    } = e,
    u = Bh(cli.permissionMode),
    c = Bh(cli.inheritPermissionMode),
    dangerouslySkipPermissions = cli.dangerouslySkipPermissions,
    m = agentFrontmatter?.permissionMode,
    modeSuppliedOnInvocation = Boolean(dangerouslySkipPermissions || u || m);
  if (Fe(env.CLAUDE_CODE_SUBPROCESS_ENV_SCRUB)) {
    let g = dangerouslySkipPermissions || u && u !== "default" || c && c !== "default" || m && m !== "default",
      M = "Permission mode forced to default \u2014 CLAUDE_CODE_SUBPROCESS_ENV_SCRUB is set " + "(allowed_non_write_users hardening). Declare allowedTools explicitly, or set CLAUDE_CODE_SUBPROCESS_ENV_SCRUB=0 to opt out.";
    return {
      mode: "default",
      notification: g ? M : void 0,
      fromAutoFallback: !1,
      baselineMode: "default",
      decidedByProactivityLevel: !1,
      modeSuppliedOnInvocation: !0,
      autoDefaultWithheldForPendingVerdict: !1,
      levelPickHeldForPendingVerdict: void 0,
      autoStartWithheldForHipaaTaint: !1
    };
  }
  let h = settings.permissions?.disableBypassPermissionsMode === "disable",
    v = re() || !1,
    isAutoModeAvailable = !v && !J(settings),
    p = [],
    notification,
    D = c ? ne(c, v, "inherited auto mode dropped \u2014 auto mode killswitch active (override- or payload-served)") : void 0,
    P = c ? D?.mode ?? kA(c) : void 0;
  if (dangerouslySkipPermissions) if (Zsn("bypassPermissions")) notification = fmt, p.push("default");else p.push("bypassPermissions");
  if (u) {
    let g = ne(u, v, "auto mode killswitch active (override- or payload-served) \u2014 falling back to default");
    if (g) {
      if (g.unconsented) notification = fmt;
      p.push(g.mode);
    }
  }
  if (m) if (m === "auto" && v) t("agent frontmatter requested auto mode but circuit breaker active \u2014 falling through", {
    level: "warn"
  });else if (P && HB(m, P) === void 0) t(`agent frontmatter permissionMode "${m}" ignored \u2014 it would widen the agent view's inherited mode (effective "${P}"), and the dispatched agent name is repo-controllable (settings \`agent\`)`, {
    level: "warn"
  }), i("tengu_agent_frontmatter_mode_widening_carry_ignored", {});else p.push(m);
  if (Sy()) {
    let g = !gqn() ? void 0 : z().map(item => Bh(me(item)?.permissions?.defaultMode)).find(item => item != null);
    if (g != null && Fe(env.CLAUDE_CODE_REMOTE) && !V(g)) {
      if (t(`settings defaultMode "${g}" is not supported in CLAUDE_CODE_REMOTE \u2014 only acceptEdits, plan, default, and auto are allowed`, {
        level: "warn"
      }), p.length === 0) i("tengu_ccr_unsupported_default_mode_ignored", {
        mode_hash: an(g)
      }), p.push("default");
    } else if (g === "bypassPermissions") {
      if (dangerouslySkipPermissions || cli.allowDangerouslySkipPermissions) {
        if (Zsn("bypassPermissions")) {
          if (p.length === 0) notification = fmt, process.stderr.write(`\u26A0 ${notification}
`);
          p.push("default");
        } else p.push(g);
      } else if (p.length === 0) notification = 'Permission mode bypassPermissions from settings was ignored \u2014 enable the "Claude Code: Allow Dangerously Skip Permissions" setting in VS Code to consent to it', t('settings defaultMode "bypassPermissions" ignored for a VS Code-owned session without the allow-bypass setting', {
        level: "warn"
      }), i("tengu_settings_bypass_unconsented_noninteractive_ignored", {}), process.stderr.write(`\u26A0 ${notification}
`), p.push("default");
    } else if (g === "auto") {
      if (!v) p.push(g);else t('settings defaultMode "auto" ignored for the IDE session \u2014 auto-mode circuit breaker is active', {
        level: "warn"
      });
    } else if (g != null) p.push(g);
  } else if (settings.permissions?.defaultMode) {
    let g = Bh(settings.permissions.defaultMode);
    if (Fe(env.CLAUDE_CODE_REMOTE) && !V(g)) t(`settings defaultMode "${g}" is not supported in CLAUDE_CODE_REMOTE \u2014 only acceptEdits, plan, default, and auto are allowed`, {
      level: "warn"
    }), i("tengu_ccr_unsupported_default_mode_ignored", {
      mode_hash: an(g)
    });else if (g === "bypassPermissions") {
      if (!T("bypassPermissions")) {
        if (t('settings defaultMode "bypassPermissions" ignored \u2014 only policy/user/flag settings may grant bypass mode (projectSettings and localSettings are repo-controllable)', {
          level: "warn"
        }), i("tengu_settings_bypass_mode_untrusted_source_ignored", {}), !c) p.push("default");
      } else if (Zsn("bypassPermissions")) {
        if (p.length === 0) notification = fmt;
        p.push("default");
      } else p.push(g);
    } else if (g !== "auto") {
      if (P && !T(g) && HB(g, P) === void 0) t(`settings defaultMode "${g}" ignored \u2014 it would widen the agent view's inherited mode (effective "${P}"), and only policy/user/flag settings may do that (projectSettings and localSettings are repo-controllable)`, {
        level: "warn"
      }), i("tengu_settings_mode_widening_carry_ignored", {});else p.push(g);
    } else if (!T("auto")) t('settings defaultMode "auto" ignored \u2014 only policy/user/flag settings may grant auto mode (projectSettings and localSettings are repo-controllable)', {
      level: "warn"
    }), i("tengu_settings_auto_mode_untrusted_source_ignored", {});else if (v) t("auto mode killswitch active (override- or payload-served) \u2014 falling back to default", {
      level: "warn"
    });else if (Fe(env.CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT) && J(settings)) t('settings defaultMode "auto" ignored \u2014 disableAutoMode is set and this is an unattended Remote Control machine session', {
      level: "warn"
    });else p.push("auto");
  }
  if (c) {
    let g = D;
    if (g) {
      if (g.unconsented && p.length === 0) notification = fmt;
      p.push(g.mode);
    }
  }
  let L;
  for (let mode of p) {
    if (mode === "bypassPermissions" && h) {
      t("bypassPermissions mode is disabled by settings", {
        level: "warn"
      }), notification = "Bypass permissions mode was disabled by settings";
      continue;
    }
    L = {
      mode: mode,
      notification: notification
    };
    break;
  }
  let fromAutoFallback = !1,
    autoDefaultWithheldForPendingVerdict = !1,
    levelPickHeldForPendingVerdict,
    autoStartWithheldForHipaaTaint = !1;
  if (!L) {
    let g = isAutoModeAvailable && (!Fe(env.CLAUDE_CODE_REMOTE) && gqn() && (!cli.isNonInteractiveSession || Sy() || E("tengu_moss_anchor", !1)) || Fe(env.CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT)),
      mode_2 = "default";
    if (g) {
      let A = XOr(),
        k = Fe(env.CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT);
      if (A === void 0 || A === "pending" && k) mode_2 = "auto", fromAutoFallback = !0;else if (A === "taint") notification ??= ve, autoStartWithheldForHipaaTaint = !0;else if (A === "pending") autoDefaultWithheldForPendingVerdict = !0;
    }
    L = {
      mode: mode_2,
      notification: notification
    };
  }
  let N = L.mode,
    decidedByProactivityLevel = !1;
  if (e.proactivityLevel && e.proactivityLevel !== "default" && !modeSuppliedOnInvocation) {
    let g = Eme(e.proactivityLevel, {
        isAutoModeAvailable: isAutoModeAvailable,
        isBypassPermissionsModeAvailable: !1
      }, N),
      M = G(e.proactivityLevel, g),
      A = rIe(e.proactivityLevel, g, N),
      k = A === "pending" && Fe(env.CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT) ? void 0 : A;
    if (M !== void 0 && k === "taint") L.notification ??= se(M), autoStartWithheldForHipaaTaint = !0;else if (k === "pending") autoDefaultWithheldForPendingVerdict = !0, levelPickHeldForPendingVerdict = M;
    L = {
      mode: k === void 0 ? g : "default",
      notification: L.notification
    }, fromAutoFallback = !1, decidedByProactivityLevel = !0;
  }
  return {
    mode: L.mode,
    notification: L.notification,
    fromAutoFallback: fromAutoFallback,
    baselineMode: N,
    decidedByProactivityLevel: decidedByProactivityLevel,
    modeSuppliedOnInvocation: modeSuppliedOnInvocation,
    autoDefaultWithheldForPendingVerdict: autoDefaultWithheldForPendingVerdict,
    levelPickHeldForPendingVerdict: levelPickHeldForPendingVerdict,
    autoStartWithheldForHipaaTaint: autoStartWithheldForHipaaTaint
  };
}
var ie = {
    auto: "Auto mode",
    acceptEdits: "Accept edits"
  },
  ve = se("auto");
function se(e) {
  return `${ie[e]} isn't the default for your organization \xB7 Shift+Tab to switch`;
}
function zFs(e) {
  return `${ie[e]} didn't start: your organization's policy hasn't loaded \xB7 Shift+Tab to switch`;
}
function rIe(e, n, r) {
  let s = G(e, n);
  if (s === void 0 || s === r) return;
  return XOr();
}
function XOr() {
  let e = cVs();
  if (Ni("hipaa") || e === "unobtainable_seen_hipaa") return "taint";
  return e === "pending" ? "pending" : void 0;
}
function GFs(e) {
  let n = e.cli.fallbackModel ?? (Array.isArray(e.settings.fallbackModel) ? e.settings.fallbackModel : void 0);
  if (n === void 0) return;
  return he(n, Yr);
}
function QAo(e) {
  return e.split(",").map(item => item.trim()).filter(item => item !== "");
}
function he(e, n) {
  let r = typeof e === "string" ? QAo(e) : e,
    s = new Set(),
    d = [];
  for (let u of r) {
    let c = typeof u === "string" ? u.trim() : "";
    if (c === "") continue;
    let S = It(c === "default" ? Bl() : c);
    if (s.has(S)) continue;
    if (!n(S)) continue;
    if (s.add(S), d.push(S), d.length === be) break;
  }
  return d.length > 0 ? d : void 0;
}
var be = 3;
function _e(e) {
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
function Me(e) {
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
function Le(e, n, r) {
  if (Ste()) {
    let lastSeenOrgDefaultUpdatedAt = ijs();
    if (lastSeenOrgDefaultUpdatedAt !== null && !n && zGe().includes("userSettings") && new Date(lastSeenOrgDefaultUpdatedAt).getTime() > new Date(ue().lastSeenOrgDefaultUpdatedAt ?? 0).getTime()) Ce(p => p.lastSeenOrgDefaultUpdatedAt === lastSeenOrgDefaultUpdatedAt ? p : {
      ...p,
      lastSeenOrgDefaultUpdatedAt: lastSeenOrgDefaultUpdatedAt
    }, r);
    if (rWe() === null) return e;
    let x = e ? SA("model") : null;
    if (x === "policySettings" || x === "flagSettings") return e;
    return;
  }
  let s = qXe();
  if (!s || nLr() === null) return e;
  let d = e ? SA("model") : null;
  if (d === "policySettings" || d === "flagSettings") return e;
  let u = zGe().includes("userSettings"),
    lastSeenOrgDefaultUpdatedAt_2 = ue().lastSeenOrgDefaultUpdatedAt,
    S = new Date(s.updated_at).getTime() > new Date(lastSeenOrgDefaultUpdatedAt_2 ?? 0).getTime(),
    m = S && !n && u,
    y = () => Ce(v => v.lastSeenOrgDefaultUpdatedAt === s.updated_at ? v : {
      ...v,
      lastSeenOrgDefaultUpdatedAt: s.updated_at
    }, r);
  if (s.override_user_selection) {
    if (m) y();
    return;
  }
  if (n) return e;
  let h = u ? me("userSettings")?.model : void 0;
  if (S && h) {
    if (In("userSettings", {
      model: void 0
    }, void 0, r).then(v => {
      if (!v.error) y();
    }), d === "userSettings") return;
  } else if (m) y();
  return e;
}
function ZAo(e, n) {
  let {
      cli: cli_2,
      env: env_2,
      settings: settings_2,
      agentFrontmatter: agentFrontmatter_2
    } = e,
    effectiveModel = cli_2.model === "default" ? Bl() : cli_2.model,
    S = effectiveModel,
    settingLayer = null;
  if (effectiveModel) settingLayer = cli_2.model === "default" ? "cli_default" : "cli";
  let y = agentFrontmatter_2?.model,
    h;
  if (!effectiveModel && y && y !== "inherit") h = y, effectiveModel = It(y), S = y, settingLayer = agentFrontmatter_2?.modelSource === "routine" ? "routine_frontmatter" : "agent_frontmatter";
  let v = !1,
    modelWithoutStartupOverride,
    p = effectiveModel;
  if (p === void 0) {
    if (env_2.ANTHROPIC_MODEL) p = env_2.ANTHROPIC_MODEL, settingLayer = "env";else if (p = Le(settings_2.model || void 0, cli_2.isNonInteractiveSession === !0, n) || void 0, p !== void 0) settingLayer = _e(SA("model"));
    S = p;
  }
  let restrictedModel;
  if (p && !Yr(p)) {
    let C = h !== void 0 && !v ? h : p,
      w = v ? null : Xv(C);
    if (w !== null) {
      if (restrictedModel = C, p = w, effectiveModel !== void 0) effectiveModel = w;
    } else {
      if (!(C.trim().toLowerCase() === "default" || r0o(C)) && !v) restrictedModel = C;
      p = void 0, S = void 0, settingLayer = null, effectiveModel = void 0;
    }
  }
  let unservedModelSpelling;
  if (p && l$t(p, Me(settingLayer) ? "persisted" : "explicit")) unservedModelSpelling = p, p = void 0, S = void 0, settingLayer = null, effectiveModel = void 0;
  let initialMainLoopModel = p || null,
    resolvedInitialModel = It(initialMainLoopModel ?? Bl());
  return {
    effectiveModel: effectiveModel,
    initialMainLoopModel: initialMainLoopModel,
    resolvedInitialModel: resolvedInitialModel,
    rawModelRequest: S || null,
    restrictedModel: restrictedModel,
    unservedModelSpelling: unservedModelSpelling,
    settingLayer: settingLayer,
    modelWithoutStartupOverride: modelWithoutStartupOverride
  };
}
function VFs(e) {
  let systemPrompt = e.cli.systemPrompt,
    appendSystemPrompt = e.cli.appendSystemPrompt,
    s = $Vs();
  if (s) appendSystemPrompt = appendSystemPrompt ? `${appendSystemPrompt}

${s}` : s;
  return {
    systemPrompt: systemPrompt,
    appendSystemPrompt: appendSystemPrompt
  };
}
function gqn() {
  return E("tengu_harbor_willow", !0) || iLo()?.meadow_lantern === !0;
}
var Pe = xs.filter(item => !ef.has(item)).toReversed(),
  we = ["acceptEdits", "plan", "default", "auto"];
function V(e) {
  return we.includes(e);
}
function z() {
  return Pe.filter(nn);
}
function T(e) {
  return z().some(item => me(item)?.permissions?.defaultMode === e);
}
function J(e) {
  return e.permissions?.disableAutoMode === "disable" || e.disableAutoMode === "disable";
}
function JNt(e) {
  return !J(e) && !re();
}
function Ae(e) {
  return z().map(item => Bh(me(item)?.permissions?.defaultMode)).find(item => item != null) === "plan" && Bh(e.permissions?.defaultMode) !== "plan";
}
function exo() {
  let e = xs.filter(nn).map(n => ({
    source: n,
    mode: (n === "policySettings" ? une().length > 0 || M_().some(item => item.userWritable === !0 && item.path === "") || ore() && eTe() || eL() !== !1 && !N_() : rk(n).some(item => item.severity !== "warning")) ? "unreadable" : me(n)?.permissions?.defaultMode
  })).findLast(({
    source: source_2,
    mode: mode_3
  }) => mode_3 !== void 0 && (mode_3 !== "auto" || !ef.has(source_2)));
  return e === void 0 || e.mode === "auto" ? void 0 : e.mode === "unreadable" ? "settings_unreadable" : "stored_default";
}
function hqn({
  settings: settings_3,
  scrubbed: scrubbed,
  typedLevel: typedLevel,
  carriedMode: carriedMode
}) {
  let d = typedLevel !== void 0 && typedLevel !== "default";
  return {
    autoSeedable: JNt(settings_3) && !scrubbed,
    storedDefaultBar: exo(),
    otherChoiceTyped: d || carriedMode !== void 0 && carriedMode !== "auto",
    carriedPlanHolds: carriedMode === "plan" && !d,
    trustedPlanDisplaced: Ae(settings_3)
  };
}
function Oe(e) {
  let n = Bh(e.permissions?.defaultMode);
  if (n == null || !V(n)) return;
  if (n !== "auto") return n;
  return T("auto") && JNt(e) ? "auto" : void 0;
}
function yqn({
  gateOn: gateOn,
  permissionModeTyped: permissionModeTyped,
  dangerouslySkipPermissions: dangerouslySkipPermissions_2,
  scrubbed: scrubbed_2,
  settings: settings_4,
  effort: effort
}) {
  let c = !permissionModeTyped && !dangerouslySkipPermissions_2 && !scrubbed_2,
    settingsDefault = c ? Oe(settings_4) : void 0;
  return {
    considered: gateOn && c,
    settingsDefaultModePresent: settings_4.permissions?.defaultMode != null,
    settingsDefault: settingsDefault,
    permissionMode: gateOn ? settingsDefault : void 0,
    effort: gateOn ? effort : void 0
  };
}
function qFs({
  sentMode: sentMode,
  repositorySettings: repositorySettings
}) {
  if (sentMode === "auto") return;
  if (sentMode !== void 0) return sentMode;
  let r = Y(repositorySettings?.permissions?.defaultMode);
  return r !== void 0 && r !== "auto" && V(r) ? r : "default";
}
function KFs({
  seed: seed,
  settingsMode: settingsMode,
  sentMode: sentMode_2,
  startsIn: startsIn
}) {
  if (!seed.considered || !seed.settingsDefaultModePresent || seed.permissionMode !== void 0 || settingsMode === void 0 || sentMode_2 !== void 0 && Y(settingsMode) === sentMode_2) return null;
  let d = Y(settingsMode) === "auto" ? "auto mode could not be requested from this machine (it is off here, or only the repository asked for it)" : "not a mode a cloud session can start in";
  return {
    text: `Settings kept on this machine: the default permission mode in your settings (${settingsMode}) \u2014 ${d}${startsIn !== void 0 ? `; the session starts in ${startsIn} mode` : ""}`,
    level: "info"
  };
}
function Y(e) {
  return e === void 0 ? void 0 : _g(e);
}
var txo = 'bypass in a background worker needs consent recorded in your user settings \u2014 add "skipDangerousModePermissionPrompt": true to ~/.claude/settings.json (accepting the interactive disclaimer writes the same key, but that dialog is skipped while consent already exists in .claude/settings.local.json or via --settings, which does not count here)',
  fmt = `Permission mode downgraded to default: ${txo}`;
function Zsn(e) {
  if (!Ht()) return !1;
  if (e === "bypassPermissions") return !FQe() && !ue().bypassPermissionsModeAccepted;
  return !1;
}
function ne(e, n, r) {
  let mode_4 = kA(e);
  if (Zsn(mode_4)) return {
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
function Tme(e, n) {
  return Sm(It(e)) === Sm(It(n));
}
var De = "tengu_loggia_passage";
function U() {
  return E(De, !1);
}
function YFs({
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
  return U() ? {
    carry: null,
    withheld: "killed"
  } : {
    carry: e
  };
}
function ein(e) {
  return {
    refused_effort_level: pe(e.carry),
    refused_effort_withheld: pe(e.carry === null ? e.withheld : void 0)
  };
}
function nxo({
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
  let level = refusedEffort.carry ?? rxo(loopOverride, loopEffort);
  return {
    latchEffort: void 0,
    loopEffort: level === void 0 ? void 0 : {
      model: n,
      level: level
    }
  };
}
function rxo(e, n) {
  return n !== void 0 && n.model === e ? n.level : void 0;
}
function de() {
  return JW()?.carriedEffort !== void 0;
}
function R(e) {
  let n = JW(),
    r = gc();
  if (n?.carriedEffort === void 0 || r == null || U()) return;
  try {
    return Tme(r, n.fallbackModel) && Tme(e, n.fallbackModel) ? n.carriedEffort : void 0;
  } catch (error) {
    l(H(error));
    return;
  }
}
function _qn({
  loopEffort: loopEffort_2,
  continuesMainConversation: continuesMainConversation
}, r) {
  if (loopEffort_2 !== void 0) return U() ? null : loopEffort_2;
  return (continuesMainConversation ? R(r) : void 0) ?? null;
}
function XFs({
  carried: carried,
  withIt: withIt,
  withoutIt: withoutIt,
  isSavedSetAside: isSavedSetAside
}) {
  if (withIt === withoutIt) return withIt === carried ? "moot" : "no_effect";
  if (withIt !== carried) return "clamped";
  return isSavedSetAside ? "applied_over_saved" : "applied";
}
function bqn() {
  _gn("effort_change");
}
function JFs(e) {
  let n = JW();
  if (n !== void 0 && !Tme(e, n.fallbackModel)) _gn("model_change");
}
function QFs() {
  let e = JW();
  if (e?.carriedEffort === void 0) return;
  let n = gc();
  if (U()) _gn("kill_switch");else if (n == null || !Tme(n, e.fallbackModel)) _gn("model_change");
}
function Cme() {
  return a.CLAUDE_CODE_MAX_EFFORT_REMINDER ?? E("tengu_proud_clover", !1);
}
function Vb(e) {
  if (YJn(e)) return !1;
  let n = YIe(e, "effort");
  if (n !== void 0) return n;
  let r = qe(e),
    s = c_t("effort", r);
  if (s !== void 0) return s;
  let d = BDr(e, r);
  if (d !== void 0) return d.length > 0;
  if (r.includes("claude-3-") || r === "claude-opus-4-0" || r === "claude-opus-4-1" || r === "claude-sonnet-4-0" || r === "claude-sonnet-4-5" || r === "claude-haiku-4-5") return !1;
  if (a.CLAUDE_CODE_ALWAYS_ENABLE_EFFORT) return !0;
  if (L_(r, "effort", e) || r === "claude-mythos-5") return !0;
  return T2(Sd(e));
}
function Cae(e) {
  if (YJn(e)) return !1;
  let n = YIe(e, "max_effort");
  if (n !== void 0) return n;
  let r = qe(e),
    s = ce("max_effort", e, r);
  if (s !== void 0) return s;
  let d = BDr(e, r);
  if (d !== void 0) return d.includes("max");
  if (r.includes("claude-3-") || r === "claude-opus-4-0" || r === "claude-opus-4-1" || r === "claude-opus-4-5" || r === "claude-sonnet-4-0" || r === "claude-sonnet-4-5" || r === "claude-haiku-4-5") return !1;
  if (L_(r, "max_effort", e) || r === "claude-mythos-5") return !0;
  return T2(Sd(e));
}
function mmt(e) {
  if (YJn(e)) return !1;
  let n = YIe(e, "xhigh_effort");
  if (n !== void 0) return n;
  let r = qe(e),
    s = ce("xhigh_effort", e, r);
  if (s !== void 0) return s;
  let d = BDr(e, r);
  if (d !== void 0) return d.includes("xhigh");
  if (r.includes("claude-3-") || r === "claude-opus-4-0" || r === "claude-opus-4-1" || r === "claude-opus-4-5" || r === "claude-opus-4-6" || r === "claude-sonnet-4-0" || r === "claude-sonnet-4-5" || r === "claude-sonnet-4-6" || r === "claude-haiku-4-5") return !1;
  if (L_(r, "xhigh_effort", e) || r === "claude-mythos-5") return !0;
  return T2(Sd(e));
}
function ce(e, n, r) {
  if (c_t("effort", r) === !1) return !1;
  let s = c_t(e, r);
  if (s === void 0) return;
  return s && Vb(n);
}
function Re(e) {
  return mmt(e);
}
function CM(e) {
  return Wg() && (e === void 0 || Re(e));
}
function lg(e, n) {
  return e === !0 && CM(n);
}
function Sqn(e, n, r) {
  if (n.sessionEffort?.kind === "level") {
    let s = n.sessionEffort.value;
    return !(r === s || typeof r === "string" && DS(r) && FX(r, e) === s);
  }
  return oA(e, Od(n)) !== oA(e, r);
}
function wqn(e, n, r) {
  if (r.sessionEffort?.kind === "level" || typeof n !== "string") return !1;
  let s = ww(e, Od(r, e)),
    d = ww(e, Od(r, e, {
      withHold: !1
    }), {
      carriedEffort: null
    });
  return kD(n) === s && s !== d;
}
function DS(e) {
  return ta.includes(e);
}
function _(e) {
  return ta.indexOf(e);
}
var gmt = "high";
function JOr(e) {
  return DS(e) && _(e) > _(gmt);
}
function QOr(e) {
  let n = qe(e);
  return L_(n, "thinking_disabled_effort_cap", e) ?? n === "claude-opus-5";
}
function ge(e) {
  let n = [...Zp(), ...Wo().map(item => me(item)), ...W()],
    r = n.some(item => Object.values(item?.modelSettings ?? {}).some(item => item?.maxEffortLevel !== void 0)) ? HG(e) : void 0,
    s = null;
  for (let d of n) {
    if (!d) continue;
    let u;
    if (r !== void 0) for (let [c, S] of Object.entries(d.modelSettings ?? {})) {
      let m = S?.maxEffortLevel;
      if (m !== void 0 && (u === void 0 || _(m) < _(u)) && HG(c) === r) u = m;
    }
    if (u ??= d.maxEffortLevel, u !== void 0 && u !== "max" && (s === null || _(u) < _(s))) s = u;
  }
  return s;
}
function tin(e) {
  let n = ge(e),
    r = null,
    s = xe();
  if (s === "firstParty" || s === "gateway") {
    let u = qe(OD(e.trim().toLowerCase()), {
        identity: !0
      }),
      c = uEe().find(item => qe(OD(item.apiName.trim().toLowerCase()), {
        identity: !0
      }) === u)?.maxEffortLevel;
    r = c != null && DS(c) ? c : null;
  }
  let d = r === null ? n : n === null ? r : _(n) < _(r) ? n : r;
  return d === "max" ? null : d;
}
function q1e(e) {
  if (xe() !== "firstParty") return null;
  let n = dht();
  if (n === null) return null;
  let default_effort_level = n.default_effort_level;
  if (default_effort_level == null || !DS(default_effort_level)) return null;
  let s = qe(OD(e.trim().toLowerCase()), {
    identity: !0
  });
  return qe(OD(n.name.trim().toLowerCase()), {
    identity: !0
  }) === s ? default_effort_level : null;
}
function ZOr(e) {
  return dht()?.override_user_effort === !0 && q1e(e) !== null;
}
function eIr(e, n) {
  let r = tin(n);
  return r === null || _(e) <= _(r);
}
function Rme(e) {
  return ta.filter(item => eIr(item, e));
}
function FX(e, n) {
  let r = tin(n);
  return r !== null && _(e) > _(r) ? r : e;
}
function K(e, n) {
  if (n === "xhigh") return mmt(e);
  if (n === "max") return Cae(e);
  return !0;
}
function ZFs(e, n, r) {
  let s = Rme(e).filter(item => item !== "max" && K(e, item));
  return r === 1 ? s.find(item => _(item) > _(n)) : s.findLast(d => _(d) < _(n));
}
function eHs(e) {
  let n = tin(e);
  return n !== null && ta.some(item => _(item) > _(n) && K(e, item));
}
function tHs(e, n) {
  if (typeof e !== "string" || !DS(e)) return null;
  let r = tin(n);
  if (r === null || _(e) <= _(r)) return null;
  let s = ww(n, e) ?? r;
  return `Effort '${e}' exceeds the cap for ${n} set by your settings or organization; using '${s}'.`;
}
var Ee = {
    med: "medium"
  },
  Se = {
    ultracode: "xhigh"
  };
function Ame(e) {
  if (typeof e !== "string") return;
  let n = e.trim().toLowerCase();
  return Object.hasOwn(Se, n) ? n : void 0;
}
function K1e(e) {
  let n = Ame(e);
  return n === void 0 ? void 0 : Se[n];
}
function OK(e) {
  return String(e);
}
function kD(e) {
  let n = e.trim().toLowerCase(),
    r = Ee[n] ?? n;
  return DS(r) ? r : void 0;
}
function hmt(e) {
  let level_2 = kD(e);
  if (level_2 !== void 0) return {
    level: level_2,
    warning: void 0
  };
  let level_3 = Ame(e);
  if (level_3 !== void 0) return {
    level: level_3,
    warning: void 0
  };
  return {
    level: void 0,
    warning: `Unknown --effort value '${e}' \u2014 ignoring it and using the default effort. Valid values: ${ta.join(", ")}.`
  };
}
function zj(e) {
  if (e === void 0 || e === null || e === "") return;
  if (typeof e === "number" && ae(e)) return e;
  let n = String(e).toLowerCase(),
    r = Ee[n] ?? n;
  if (DS(r)) return r;
  let s = parseInt(n, 10);
  if (!isNaN(s) && ae(s)) return s;
  return;
}
function _ke(e) {
  if (e === "low" || e === "medium" || e === "high" || e === "xhigh") return e;
  return;
}
function ymt(e) {
  return ut().ultracode === !0 || Ame(e) === "ultracode";
}
function kx() {
  let CLAUDE_CODE_EFFORT_LEVEL = a.CLAUDE_CODE_EFFORT_LEVEL;
  return CLAUDE_CODE_EFFORT_LEVEL?.toLowerCase() === "unset" || CLAUDE_CODE_EFFORT_LEVEL?.toLowerCase() === "auto" ? null : zj(CLAUDE_CODE_EFFORT_LEVEL);
}
var sessionEffort = Object.freeze({
    kind: "inherit"
  }),
  Te = Object.freeze({
    kind: "default"
  });
function Zee(value_2) {
  return {
    kind: "level",
    value: value_2
  };
}
function _mt(e) {
  return e === void 0 ? Te : Zee(e);
}
function Ve(e) {
  return e === void 0 ? sessionEffort : Zee(e);
}
function nHs(e) {
  return e.kind === "level" ? String(e.value) : null;
}
function vqn(e) {
  return typeof e === "string" && e !== "" && e.length <= WUs ? e : null;
}
function Rae(e, n) {
  return e === n || e.kind === n.kind && (e.kind !== "level" || n.kind === "level" && e.value === n.value);
}
var Ue = new Set(["claude-3-5-haiku", "claude-3-5-sonnet", "claude-3-7-sonnet", "claude-haiku-4-5", "claude-sonnet-4-0", "claude-sonnet-4-5", "claude-sonnet-4-6", "claude-sonnet-5", "claude-opus-4-0", "claude-opus-4-1", "claude-opus-4-5", "claude-opus-4-6", "claude-opus-4-7", "claude-opus-4-8", "claude-opus-5", "claude-fable-5", "claude-fable-5-1", "claude-mythos-5", "claude-mythos-5-1"]),
  le = new Map();
function oxo(e) {
  let n = le.get(e);
  if (n === void 0) n = Ue.has(e) || !XD(yc(e)), le.set(e, n);
  return n;
}
function Be() {
  let e = ue();
  if (e.firstStartVersion !== void 0) return [];
  let n = [];
  if (!e.unpinOpus47LaunchEffort) n.push("claude-opus-4-7");
  if (!e.unpinOpus48LaunchEffort) n.push("claude-opus-4-8");
  if (!e.unpinFable5LaunchEffort) {
    n.push("claude-fable-5");
    let ANTHROPIC_DEFAULT_FABLE_MODEL = a.ANTHROPIC_DEFAULT_FABLE_MODEL;
    if (ANTHROPIC_DEFAULT_FABLE_MODEL && !X1e(qe(It(ANTHROPIC_DEFAULT_FABLE_MODEL), {
      deterministic: !0,
      identity: !0
    }))) n.push(HG(ANTHROPIC_DEFAULT_FABLE_MODEL));
  }
  return n;
}
function QNt() {
  let e = new Set(),
    n = [];
  for (let source_3 of Wo()) {
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
    let s = fn(source_3);
    if (s !== void 0) {
      let u = ke(s);
      if (e.has(u) && source_3 !== "flagSettings") continue;
      e.add(u);
    }
    let settings_7 = me(source_3);
    if (settings_7 !== void 0 && settings_7 !== null) n.push({
      source: source_3,
      settings: settings_7
    });
  }
  return n;
}
function tIr() {
  let e = QNt(),
    n = dht(),
    r = n !== null && ZOr(n.name) ? HG(n.name) : void 0,
    legacyUserEffort,
    d,
    u = [];
  for (let {
    source: source_4,
    settings: settings_8
  } of e) {
    let setsTopLevel = settings_8.effortLevel !== void 0;
    if (source_4 === "userSettings") {
      legacyUserEffort = _ke(settings_8.effortLevel), u.push({
        source: source_4,
        setsTopLevel: !1,
        settings: settings_8
      });
      continue;
    }
    if (setsTopLevel) d = {
      level: _ke(settings_8.effortLevel)
    };
    u.push({
      source: source_4,
      setsTopLevel: setsTopLevel,
      settings: settings_8
    });
  }
  u.reverse();
  let c = u.map(({
      settings: settings_9
    }) => {
      let h = new Map();
      for (let [v, x] of Object.entries(settings_9.modelSettings ?? {})) {
        let p = x?.effortLevel;
        if (p === void 0) continue;
        let b = HG(v);
        if (v === b || !h.has(b)) h.set(b, p);
      }
      return h;
    }),
    S = new Set();
  if (r !== void 0) S.add(r);
  for (let y of c) for (let h of y.keys()) S.add(h);
  let byModel = {};
  for (let y of S) {
    if (y === r) byModel[y] = void 0;
    for (let h = 0; h < u.length; h++) {
      if (y === r && !Ie(u[h].source)) continue;
      let v = c[h].get(y);
      if (v !== void 0) {
        byModel[y] = _ke(v);
        break;
      }
      if (u[h].setsTopLevel) {
        byModel[y] = _ke(u[h].settings.effortLevel);
        break;
      }
    }
  }
  if (d !== void 0) legacyUserEffort = void 0;
  if (legacyUserEffort !== void 0) {
    for (let y of Be()) if (!Object.hasOwn(byModel, y) && !Object.hasOwn(Object.prototype, y)) byModel[y] = void 0;
  }
  return {
    default: d?.level,
    legacyUserEffort: legacyUserEffort,
    byModel: byModel
  };
}
function Ie(e) {
  return e === "policySettings" || e === "flagSettings";
}
function kqn(e) {
  if (!ZOr(e)) return null;
  return FN(B(nIr(tIr(), e) ?? Tqn(e), e));
}
function nIr(e, n) {
  let r = HG(n);
  if (Object.hasOwn(e.byModel, r)) return e.byModel[r];
  if (e.default !== void 0 || e.legacyUserEffort === void 0) return e.default;
  return oxo(r) ? e.legacyUserEffort : void 0;
}
function Ne(e) {
  if (e.legacyUserEffort !== void 0) return !1;
  for (let n in e.byModel) return !1;
  return !0;
}
function HG(e) {
  return Pt(qe(p$t(e), {
    deterministic: !0,
    identity: !0
  }));
}
function He(e, effortLevel) {
  return sxo(e, {
    effortLevel: effortLevel
  }, {
    effortLevel: effortLevel
  });
}
function sxo(e, n, r) {
  let s = HG(e);
  return Object.hasOwn(Object.prototype, s) ? r : {
    modelSettings: {
      [s]: n
    }
  };
}
function rHs(e) {
  let n = wn()?.accountUuid;
  return n !== void 0 && ee(ue(), n, e);
}
function Od(e, n, {
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
        if (Ne(e.settingsEffortTable) && !de()) return e.settingsEffortTable.default;
        let d = n ?? It(e.mainLoopModelForSession ?? e.mainLoopModel ?? Bl());
        return withHold && ZNt(d) !== void 0 ? void 0 : nIr(e.settingsEffortTable, d);
      }
  }
}
function Eqn(e, n) {
  return HG(e) === HG(n);
}
function oHs(e, n) {
  return Od(ixo(e), n, {
    withHold: !1
  });
}
function ixo(e) {
  return e.sessionEffort?.kind === "level" ? {
    ...e,
    sessionEffort: sessionEffort
  } : e;
}
function bmt(e) {
  return e.kind === "level" && typeof e.value === "string" ? e.value : void 0;
}
function ww(e, n, {
  turnEffort: turnEffort_2,
  hookEffortValue: hookEffortValue_2,
  carriedEffort = R(e)
} = {}) {
  if (!Vb(e)) return;
  let u = ge(e) !== null;
  if (hookEffortValue_2 !== void 0) {
    let y = typeof hookEffortValue_2 === "number" && u ? FN(hookEffortValue_2) : hookEffortValue_2;
    return B(y, e);
  }
  let c = kx();
  if (c === null && !u) return;
  let S = Tqn(e, carriedEffort),
    m = c ?? (c === null ? S : void 0) ?? turnEffort_2 ?? n ?? S;
  if (typeof m === "number" && u) m = FN(m);
  return B(m, e);
}
function nin(e, n) {
  if (!Vb(e) || kx() !== void 0) return;
  if (typeof n === "string") return FX(n, e);
  if (n === void 0 && q1e(e)) return ete(e);
  return;
}
function B(e, n) {
  let r = e;
  if (typeof r === "string" && DS(r)) r = FX(r, n);
  if (r === "max" && !Cae(n)) r = "high";
  if (r === "xhigh" && !mmt(n)) r = "high";
  return r;
}
function ete(e) {
  return FN(B(Tqn(e), e));
}
function Y1e(e, n, r, s, d) {
  if (!d) return !1;
  let u = Th();
  if (u === 0 || u === s) return !1;
  if (!Vb(r)) return !1;
  if (typeof ww(r, e) !== "number" && typeof ww(r, n) !== "number" && tYn(r, qe(r)) && !Fs().rootLatestRequestThreaded) return !1;
  if (ww(r, e, {
    carriedEffort: null
  }) === ww(r, n)) return !1;
  if (kl() && e !== void 0 && _ke(typeof e === "string" ? FX(e, r) : e) === void 0) return !1;
  return !0;
}
async function je(e, n, r) {
  return In("userSettings", He(n, e), void 0, r);
}
async function HX(e, n, r = !0, s) {
  let d = e !== void 0 ? _ke(e) : void 0;
  if (r && (e === void 0 || d !== void 0) && !Rr()) {
    let u = await je(d, n, s);
    if (u.error) return u.error;
  }
  return;
}
function Smt(e) {
  let n = {
    sessionEffort: Ve(KOr(e)),
    settingsEffortTable: tIr()
  };
  return ygn(n), n;
}
function oA(e, n, turnEffort_3) {
  let s = ww(e, n, {
    turnEffort: turnEffort_3
  }) ?? "high";
  return FN(s);
}
function ay(e, n, r) {
  return Vb(e) ? oA(e, n, r) : void 0;
}
function rin(e, n, turnEffort_4) {
  if (n === void 0 && turnEffort_4 === void 0) return "";
  let s = ww(e, n, {
    turnEffort: turnEffort_4
  });
  if (s === void 0) return "";
  return ` with ${OK(FN(s))} effort`;
}
function ae(e) {
  return Number.isInteger(e);
}
function FN(e) {
  if (typeof e === "string") return DS(e) ? e : "high";
  return "high";
}
function We(e) {
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
      return `Maximum capability with deepest reasoning. ${LB}`;
  }
}
function axo(e) {
  if (typeof e === "string") {
    let n = We(e);
    if (e === "high" && tMe() && E("tengu_slate_finch", !1)) return `${n} \xB7 burns fastest \u2014 medium handles most tasks`;
    return n;
  }
  return "Balanced approach with standard implementation and testing";
}
function Tqn(e, n) {
  let r = q(e);
  return (r === void 0 ? n : void 0) ?? q1e(e) ?? r ?? Ye(e) ?? Ge(e) ?? ze(e);
}
function Ge(e) {
  let n = Il(e)?.default_effort;
  return typeof n === "string" && DS(n) && K(e, n) ? n : void 0;
}
function ZNt(e) {
  let n = R(e);
  return n !== void 0 && q(e) === void 0 ? n : void 0;
}
function sHs(e) {
  return q1e(e) !== null || q(e) !== void 0 || R(e) !== void 0;
}
var $e = "tengu_witty_wand",
  Je = f(() => fe(o(), oe()));
function q(e) {
  let n = E($e, {});
  if (typeof n === "string") n = pt(n, !1);
  let r = Je().safeParse(n);
  if (!r.success) return;
  let s = r.data[Pt(qe(e))],
    d = typeof s === "string" ? s.trim().toLowerCase() : void 0;
  return d !== void 0 && DS(d) ? d : void 0;
}
function Ye(e) {
  let n = njs(e, qe(e));
  return n !== void 0 && DS(n) ? n : void 0;
}
function ze(e) {
  return _l(qe(e))?.default_effort ?? "high";
}
export { pmt, qOr, jFs, WFs, Eme, KOr, YOr, zFs, rIe, XOr, GFs, QAo, ZAo, VFs, gqn, JNt, exo, hqn, yqn, qFs, KFs, txo, fmt, Zsn, Tme, YFs, ein, nxo, rxo, _qn, XFs, bqn, JFs, QFs, Cme, Vb, Cae, mmt, CM, lg, Sqn, wqn, DS, gmt, JOr, QOr, tin, q1e, ZOr, eIr, Rme, FX, ZFs, eHs, tHs, Ame, K1e, OK, kD, hmt, zj, _ke, ymt, kx, Zee, _mt, nHs, vqn, Rae, oxo, QNt, tIr, kqn, nIr, HG, sxo, rHs, Od, Eqn, oHs, ixo, bmt, ww, nin, ete, Y1e, HX, Smt, oA, ay, rin, FN, axo, Tqn, ZNt, sHs };