// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { tt, ID, h0o, Ji, XE, ao, Pr, RWe, E, pW, VDo } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { Me } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { _I, L, j, ii, we, a2o, d2o, u2o, T$, hye, SF, iVo, Bn } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { W } from "B:/~BUN/root/chunk-hg8ngszx.js";
import { b, c, pe, fl } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { z, jn, mP, rf } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { _o, se, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { g, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { Ll } from "B:/~BUN/root/chunk-nxwmyxnk.js";
import { it } from "B:/~BUN/root/chunk-ek28wssa.js";
import { ip } from "B:/~BUN/root/chunk-gyr2a6wz.js";
import { Wl, jBt, w0e } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { xs, Wo, D_ } from "B:/~BUN/root/chunk-6a9s3k2y.js";
import { Bh, _g, whe as error } from "B:/~BUN/root/chunk-8z3a373v.js";
import { gd, Cne, nE, zn, Sn, R4, Eu } from "B:/~BUN/root/chunk-a0k8qg0d.js";
import { fn, me, nr, eT, Oun, Lun } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { Lx, yp, ELo, Gdn, CMe, TLo, tFr, o4, NWe, nFr, o3n, dt, Kt, We, xt } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { ku } from "B:/~BUN/root/chunk-5g9fghtv.js";
import { Ug, CG, YGn, s9e, i9e, du } from "B:/~BUN/root/chunk-c44qc88s.js";
import { sy, tv, Xl, Lh, wx } from "B:/~BUN/root/chunk-hkc0g0wr.js";
import { Eme, YOr, zFs, rIe, txo, Zsn } from "B:/~BUN/root/chunk-8y0chnnr.js";
import { jCo, WCo, Xxr, Jxr, T2n, fae, IN, y1e, dc, sg } from "B:/~BUN/root/chunk-ses0c36n.js";
import { qyo as error_2, fTs, fen, tEr, eBn, nEr } from "B:/~BUN/root/chunk-351qj2sm.js";
import { Aae } from "B:/~BUN/root/chunk-yjayxywk.js";
import { Kmr, Xmr, XAe, uLn, Ese, Wz, sPt, fNn, zXt, mNn, Zh, KP } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { Pis, hPn } from "B:/~BUN/root/chunk-yp8sghfs.js";
import { Obe, Ibe } from "B:/~BUN/root/chunk-2tf4j7v3.js";
import { $E } from "B:/~BUN/root/chunk-410t5g3b.js";
import { ya } from "B:/~BUN/root/chunk-6k93vgm0.js";
import { Qe } from "B:/~BUN/root/chunk-5k20pvvh.js";
import { co } from "B:/~BUN/root/chunk-b0487zs4.js";
import { relative as Oe, resolve as ce } from "path";
var De = new z(() => Me());
function Re() {
  return De.of(j().host);
}
var $L = _I(Re);
function Ccr(e) {
  if (!/^[A-Za-z]:[\\/]/.test(e)) return [];
  let s = rf(e.slice(0, 3));
  if (s == null || !jn(s)) return [];
  let o = rf(e);
  if (o == null || !jn(o)) return [];
  let l = mP(s),
    n = mP(o);
  if (l == null || n == null || l !== n) return [];
  return [e, o];
}
function Y(e) {
  if (xs.includes(e)) {
    let s = fn(e);
    if (s) {
      let o = Ll(),
        l = o === null ? s : Oe(o, s);
      return l.length < s.length ? l : s;
    }
  }
  return e;
}
function Sis(e, s) {
  let o = [];
  for (let l of e) if (l.ruleBehavior === "allow" && fae(l.ruleValue.toolName, l.ruleValue.ruleContent)) {
    let ruleDisplay = l.ruleValue.ruleContent ? `${l.ruleValue.toolName}(${l.ruleValue.ruleContent})` : `${l.ruleValue.toolName}(*)`;
    o.push({
      ruleValue: l.ruleValue,
      source: l.source,
      ruleDisplay: ruleDisplay,
      sourceDisplay: Y(l.source)
    });
  }
  for (let l of s) {
    let ruleValue = zn(l);
    if (fae(ruleValue.toolName, ruleValue.ruleContent)) o.push({
      ruleValue: ruleValue,
      source: "cliArg",
      ruleDisplay: ruleValue.ruleContent ? `${ruleValue.toolName}(${ruleValue.ruleContent})` : `${ruleValue.toolName}(*)`,
      sourceDisplay: "--allowed-tools"
    });
  }
  return o;
}
var bypassCapabilityNotification = `--allow-dangerously-skip-permissions ignored: ${txo}`,
  Be = [...WCo, ...Xxr, ...Jxr];
function G(e) {
  return e === void 0 || /^[\s*]+$/.test(e);
}
function Ne(e) {
  return !1;
}
function ke(e) {
  if (e.toolName === xt) return "powershell";
  let ruleContent = e.ruleContent;
  if (ruleContent === void 0 || G(ruleContent)) return "bare";
  if (T2n(ruleContent, Jxr)) return "cluster";
  if (T2n(ruleContent, Xxr)) return "network";
  return "ace";
}
function wis(e, s = !1) {
  {
    let {
      APPIFACT_REPL_TOOL_NAME: APPIFACT_REPL_TOOL_NAME
    } = import.meta.require("B:/~BUN/root/chunk-h1h124j8.js");
    if (e.toolName === APPIFACT_REPL_TOOL_NAME) return G(e.ruleContent);
  }
  if (e.toolName !== We) return !1;
  let ruleContent_2 = e.ruleContent;
  if (ruleContent_2 === void 0 || G(ruleContent_2) || Ne(ruleContent_2)) return !0;
  return s && T2n(ruleContent_2, Be);
}
function ue(e) {
  return e.toolName === We && e.ruleContent === void 0;
}
function vis(e) {
  return e.toolName === xt && G(e.ruleContent);
}
function T8s() {
  let e = E("tengu_ant_yolo_equiv_strip_config", {});
  if (!e.enabled) return !1;
  let s = a.CLAUDE_CODE_ENTRYPOINT ?? "cli";
  if (e.includeEntrypoints) return e.includeEntrypoints.includes(s);
  return !(e.excludeEntrypoints ?? []).includes(s);
}
function kis(e, s, o = !1) {
  let l = [];
  for (let n of e) if (n.ruleBehavior === "allow" && wis(n.ruleValue, o)) l.push({
    ruleValue: n.ruleValue,
    source: n.source,
    ruleDisplay: n.ruleValue.ruleContent ? `${n.ruleValue.toolName}(${n.ruleValue.ruleContent})` : `${n.ruleValue.toolName}(*)`,
    sourceDisplay: Y(n.source)
  });
  for (let n of s) {
    let ruleValue_2 = zn(n);
    if (wis(ruleValue_2, o)) l.push({
      ruleValue: ruleValue_2,
      source: "cliArg",
      ruleDisplay: ruleValue_2.ruleContent ? `${ruleValue_2.toolName}(${ruleValue_2.ruleContent})` : `${ruleValue_2.toolName}(*)`,
      sourceDisplay: "--allowed-tools"
    });
  }
  return l;
}
function Eis(e, s) {
  let o = [];
  for (let l of e) if (l.ruleBehavior === "allow" && vis(l.ruleValue)) o.push({
    ruleValue: l.ruleValue,
    source: l.source,
    ruleDisplay: `${xt}(*)`,
    sourceDisplay: Y(l.source)
  });
  for (let l of s) {
    let ruleValue_3 = zn(l);
    if (vis(ruleValue_3)) o.push({
      ruleValue: ruleValue_3,
      source: "cliArg",
      ruleDisplay: `${xt}(*)`,
      sourceDisplay: "--allowed-tools"
    });
  }
  return o;
}
function Rcr(e) {
  return [];
}
function Le(e) {
  return D_.includes(e) || e === "session" || e === "cliArg";
}
function C8s(e, s, o = !1) {
  let l = new Map();
  for (let u of s) {
    if (!o && !Le(u.source)) continue;
    let source = u.source,
      f = l.get(source) || [];
    f.push(u.ruleValue), l.set(source, f);
  }
  let n = e;
  for (let [destination, rules] of l) n = du(n, {
    type: "removeRules",
    rules: rules,
    behavior: "allow",
    destination: destination
  });
  return n;
}
function KV(e) {
  let s = y1e(e.alwaysAllowRules, "allow"),
    o = Sis(s, []);
  if (o.length === 0) return e.strippedDangerousRules !== void 0 ? e : {
    ...e,
    strippedDangerousRules: {}
  };
  for (let n of o) t(`Ignoring dangerous permission ${n.ruleDisplay} from ${n.sourceDisplay} (bypasses classifier)`);
  let strippedDangerousRules = {};
  for (let [n, u] of Object.entries(e.strippedDangerousRules ?? {})) if (u) strippedDangerousRules[n] = [...u];
  for (let n of o) {
    let u = Sn(n.ruleValue),
      d = strippedDangerousRules[n.source] ??= [];
    if (!d.includes(u)) d.push(u);
  }
  return {
    ...C8s(e, o, !0),
    strippedDangerousRules: strippedDangerousRules
  };
}
function kZr(e, toolAliases, o = []) {
  let l = {
    ...e,
    toolAliases: toolAliases
  };
  if (!E("tengu_sorted_zebra", !1)) return l;
  for (let [n, u] of Object.entries(toolAliases ?? {})) {
    if (n.startsWith("mcp__") || !fae(n, void 0)) continue;
    let d = typeof u === "string" ? co(u) : null;
    if (d?.toolName) {
      jCo(d.serverName, [d.toolName]), g("auto_mode_tool_alias");
      continue;
    }
    let f = a.CLAUDE_AGENT_SDK_MCP_NO_PREFIX && typeof u === "string" && u !== "" && d === null;
    if (f && o.length > 0) {
      for (let y of o) jCo(y, [u]);
      g("auto_mode_tool_alias");
      continue;
    }
    p("auto_mode_tool_alias", f ? "no_sdk_server" : "target_not_mcp_tool"), t(`Auto mode: toolAliases maps ${n} to ${typeof u === "string" ? u : `a value of type ${typeof u}`}, ${f ? "and no SDK MCP server is registered that could hold it" : "which is not of the form mcp__<server>__<tool>"}, so an allow rule for that tool still runs its calls without the classifier's check`, {
      level: "warn"
    });
  }
  return l.strippedDangerousRules === void 0 ? l : KV(l);
}
function _be(e) {
  let strippedDangerousRules_2 = e.strippedDangerousRules;
  if (!strippedDangerousRules_2) return e;
  let o = e;
  for (let [destination_2, n] of Object.entries(strippedDangerousRules_2)) {
    if (!n || n.length === 0) continue;
    let u = destination_2 === "command" ? n.filter(item => !uLn(item)) : [...n];
    if (u.length === 0) continue;
    o = du(o, {
      type: "addRules",
      rules: u.map(zn),
      behavior: "allow",
      destination: destination_2
    });
  }
  return {
    ...o,
    strippedDangerousRules: void 0
  };
}
function EZr(e, s) {
  return {
    ...s,
    mode: e.mode,
    prePlanMode: e.prePlanMode,
    startupModeDecidedByProactivityLevel: e.startupModeDecidedByProactivityLevel,
    alwaysAllowRules: de(e.alwaysAllowRules, s),
    strippedDangerousRules: e.strippedDangerousRules && de(e.strippedDangerousRules, s)
  };
}
function de(e, s) {
  let o = Object.keys(e).reduce((acc, item) => {
    let u = s.strippedDangerousRules?.[item] ?? [],
      d = new Set([...(s.alwaysAllowRules[item] ?? []), ...(item === "command" ? u.filter(item => !uLn(item)) : u)]),
      f = e[item] ?? [],
      y = f.filter(item => d.has(item));
    return acc.rules[item] = y, acc.dropped ||= y.length !== f.length, acc;
  }, {
    rules: {},
    dropped: !1
  });
  return o.dropped ? o.rules : e;
}
function D0(e, to, o, trigger) {
  if (e === to) return o;
  if (o.startupModeDecidedByProactivityLevel !== void 0) o = {
    ...o,
    startupModeDecidedByProactivityLevel: void 0
  };
  if (NWe(void 0), Aae({
    from: e,
    to: to,
    trigger: trigger
  }), hye(e, to), iVo(e, to), e === "plan" && to !== "plan") T$(!0);
  if (to === "plan" && e !== "plan") return ACt(o);
  let n = e === "auto" || e === "plan" && yp(),
    u = to === "auto";
  if (u && !n) {
    if (!Zh()) throw Error("Cannot transition to auto mode: gate is not enabled");
    Lx(!0), o = KV(o);
  } else if (n && !u) Lx(!1), SF(!0), o = _be(o);
  if (e === "plan" && to !== "plan" && o.prePlanMode) return {
    ...o,
    prePlanMode: void 0
  };
  return o;
}
async function TZr() {
  return !1;
}
var Fe = {
  settings: "auto_mode_settings",
  "circuit-breaker": "auto_mode_circuit_breaker",
  "fast-mode": "auto_mode_fast_mode",
  model: "auto_mode_model",
  [sPt]: "auto_mode_unavailable"
};
function I7(e, s) {
  let mode = _g(e);
  if (mode === void 0) return {
    ok: !1,
    error: error,
    code: "invalid_mode"
  };
  if (mode === "bypassPermissions") {
    if (s.restricted) return {
      ok: !1,
      error: error_2,
      code: "bypass_restricted"
    };
    if ($E()) return {
      ok: !1,
      error: "Cannot set permission mode to bypassPermissions because it is disabled by settings or configuration",
      code: "bypass_disabled"
    };
    if (!s.isBypassPermissionsModeAvailable) return {
      ok: !1,
      error: "Cannot set permission mode to bypassPermissions because the session was not launched with --dangerously-skip-permissions",
      code: "bypass_not_launched"
    };
  }
  if (mode === "auto" && !Zh()) return Acr(KP());
  return {
    ok: !0,
    mode: mode
  };
}
function Acr(e) {
  return {
    ok: !1,
    error: e ? `Cannot set permission mode to auto: ${Ioe(e)}` : "Cannot set permission mode to auto",
    code: e ? Fe[e] : "auto_mode_unavailable"
  };
}
function _T(e, s, o, l) {
  let n = I7(e, s);
  if (!n.ok) return n;
  let mode_2 = n.mode,
    d;
  if (o(f => {
    if (f.mode === mode_2) return f;
    if (f !== s) {
      let M = I7(mode_2, f);
      if (!M.ok) return d = M, f;
    }
    return {
      ...D0(f.mode, mode_2, f, l),
      mode: mode_2
    };
  }), d !== void 0) return d;
  return setImmediate(() => {
    $L.emit();
  }), {
    ok: !0,
    mode: mode_2
  };
}
function CZr(e, s) {
  let mode_3 = s.context.mode;
  if (!I7(mode_3, e).ok) return s.context;
  D0(e.mode, mode_3, e);
  let l = s.autoModeActive && Zh() && (mode_3 === "auto" || mode_3 === "plan" && Dcr());
  if (yp() !== l) Lx(l), SF(!l);
  return setImmediate(() => {
    $L.emit();
  }), s.autoModeActive && !l ? _be(s.context) : s.context;
}
function Tis(e) {
  let kept = [],
    excluded = new Set(),
    bare = !1,
    detached = [],
    scoped = [],
    d = E("tengu_tools_exclusion_killswitch", !1);
  for (let f = 0; f < e.length; f++) {
    let y = e[f];
    if (y === void 0) continue;
    if (!y.startsWith(R4)) {
      kept.push(y);
      continue;
    }
    let M = y.slice(R4.length);
    if (M === "") {
      let _ = e[f + 1];
      if (_ === void 0 || _.startsWith(R4) || _.startsWith("(")) {
        bare = !0;
        continue;
      }
      if (f++, !d) detached.push(_);
      y = R4 + _, M = _;
    }
    let A = M.indexOf("(");
    if (A === 0) {
      bare = !0;
      continue;
    }
    if (A > 0) {
      if (M = M.slice(0, A), !d) scoped.push(y);
    }
    if (!d) excluded.add(gd(M));
  }
  return {
    kept: kept,
    excluded: excluded,
    bare: bare,
    detached: detached,
    scoped: scoped
  };
}
function R8s(e, s) {
  let o = e.join(" ").trim();
  if (tEr(o)) return nEr(s());
  let {
      kept: kept_2,
      excluded: excluded_2
    } = Tis(Eu(e)),
    d = kept_2.includes("preset:default") ? s().map(item => item.name).concat(kept_2.filter(item => item !== "preset:default")) : kept_2;
  if (excluded_2.size === 0) return d;
  return d.filter(item => !excluded_2.has(gd(item)));
}
var fe = [We, xt, ao, Pr];
function A8s({
  baseToolsCli: baseToolsCli,
  baseToolsIsPreset: baseToolsIsPreset,
  parsedBaseTools: parsedBaseTools,
  getAllBaseTools: getAllBaseTools
}) {
  let warnings = [],
    u = R8s(baseToolsCli, getAllBaseTools),
    d = new Set(u.map(gd)),
    f = getAllBaseTools(),
    y = baseToolsIsPreset ? null : f,
    M = y === null ? nEr(f) : y.map(item => item.name),
    {
      excluded: excluded_3
    } = parsedBaseTools;
  for (let m of y ?? getAllBaseTools()) if (m.familyParentToolName !== void 0 && excluded_3.has(m.familyParentToolName)) d.delete(m.name);
  for (let m of f) if (m.familyParentToolName !== void 0 && d.has(m.familyParentToolName)) d.add(m.name);
  if (sy.some(item => d.has(item))) d.add(Lh);
  for (let m of excluded_3) d.delete(m);
  if (excluded_3.has(We)) {
    let {
      APPIFACT_REPL_TOOL_NAME: APPIFACT_REPL_TOOL_NAME_2
    } = import.meta.require("B:/~BUN/root/chunk-h1h124j8.js");
    d.delete(APPIFACT_REPL_TOOL_NAME_2);
  }
  let toolsToDisallow = M.filter(item => !d.has(item));
  for (let m of excluded_3) {
    if (M.includes(m)) continue;
    if (XAe.has(m)) {
      t(`--tools exclusion names a removed tool: ${m}`);
      continue;
    }
    if (toolsToDisallow.push(m), fe.includes(m)) continue;
    warnings.push(`--tools entry "${R4}${m}" matches no built-in tool \u2014 check for typos. An MCP tool with exactly that name is still withheld.`);
  }
  for (let m of parsedBaseTools.scoped) warnings.push(`--tools entry "${m}" names a rule, not a tool; the whole tool is withheld. Write "${R4}${m.slice(R4.length, m.indexOf("("))}" to say so.`);
  for (let m of parsedBaseTools.detached) warnings.push(`--tools entry "${R4} ${m}" was read as "${R4}${m}" and ${m} is withheld; write it without the space.`);
  if (parsedBaseTools.bare) warnings.push(`--tools has a "${R4}" with no tool name after it; write the name right after it, as in "${R4}Bash".`);
  if (!baseToolsIsPreset) {
    for (let m of [...(I() === "windows" ? [xt] : []), ao, Pr]) if (!d.has(m) && !toolsToDisallow.includes(m)) toolsToDisallow.push(m);
  }
  return {
    toolsToDisallow: toolsToDisallow,
    toolsKept: baseToolsIsPreset || parsedBaseTools.kept.includes("preset:default") ? void 0 : d,
    warnings: warnings
  };
}
function Ie({
  processPwd: processPwd,
  originalCwd: originalCwd
}) {
  let {
    resolvedPath: resolvedPath,
    isSymlink: isSymlink
  } = _o(se(), processPwd);
  return isSymlink ? resolvedPath === ce(originalCwd) : !1;
}
function RZr({
  permissionModeCli: permissionModeCli,
  inheritPermissionModeCli: inheritPermissionModeCli,
  dangerouslySkipPermissions: dangerouslySkipPermissions,
  allowDangerouslySkipPermissions: allowDangerouslySkipPermissions,
  bypassPermissionsBlockedByHost: bypassPermissionsBlockedByHost,
  agentPermissionMode: u,
  proactivityLevel: proactivityLevel
}) {
  let f = Bh(permissionModeCli),
    inheritPermissionMode = Bh(inheritPermissionModeCli),
    M = Pis(Boolean(dangerouslySkipPermissions || allowDangerouslySkipPermissions)),
    A = hPn();
  if (ku()) {
    let h = dangerouslySkipPermissions || f && f !== "default" || inheritPermissionMode && inheritPermissionMode !== "default" || u && u !== "default",
      v = "Permission mode forced to default \u2014 CLAUDE_CODE_SUBPROCESS_ENV_SCRUB is set " + "(allowed_non_write_users hardening). Declare allowedTools explicitly, or set CLAUDE_CODE_SUBPROCESS_ENV_SCRUB=0 to opt out.";
    if (h) process.stderr.write(`\u26A0 ${v}
`);
    return {
      mode: "default",
      notification: h ? v : void 0,
      modeSuppliedOnInvocation: !0
    };
  }
  let inputs = {
      cli: {
        permissionMode: A === !0 && proactivityLevel !== void 0 && f !== void 0 && rIe(proactivityLevel, f, void 0) !== void 0 ? void 0 : f,
        inheritPermissionMode: inheritPermissionMode,
        dangerouslySkipPermissions: dangerouslySkipPermissions,
        allowDangerouslySkipPermissions: allowDangerouslySkipPermissions,
        bypassPermissionsBlockedByHost: bypassPermissionsBlockedByHost,
        isNonInteractiveSession: we()
      },
      env: {
        ...process.env,
        CLAUDE_CODE_SUBPROCESS_ENV_SCRUB: void 0
      },
      settings: nr() || {},
      agentFrontmatter: u ? {
        permissionMode: u
      } : void 0,
      proactivityLevel: A === !1 ? void 0 : proactivityLevel
    },
    C = YOr(inputs);
  tFr(C.fromAutoFallback), nFr(C.autoStartWithheldForHipaaTaint);
  let awaitsGrowthBook = !we() && RWe(),
    T = C.autoDefaultWithheldForPendingVerdict;
  NWe(!C.modeSuppliedOnInvocation && (awaitsGrowthBook || T) ? {
    mode: C.mode,
    inputs: inputs,
    awaitsGrowthBook: awaitsGrowthBook,
    awaitsPolicyVerdict: T
  } : void 0);
  let proactivity;
  {
    let h = C.decidedByProactivityLevel || A === !0 && proactivityLevel !== void 0;
    proactivity = {
      proactivityBaseline: {
        mode: M ?? C.baselineMode,
        fromRelaunchHandoff: M !== void 0
      },
      startupModeDecidedByProactivityLevel: h ? proactivityLevel : void 0
    };
  }
  if (C.mode === "auto") Lx(!0);
  let B = f ?? inheritPermissionMode ?? u ?? inputs.settings.permissions?.defaultMode,
    F = fNn() && C.mode === "default" && (B === void 0 || B === "auto");
  return {
    mode: C.mode,
    notification: C.notification ?? void 0,
    proactivity: proactivity,
    modeSuppliedOnInvocation: C.modeSuppliedOnInvocation
  };
}
function xcr() {
  return a.CLAUDE_CODE_SESSION_KIND !== "bg";
}
function x8s(e) {
  return e === "cliArg" && xcr();
}
function Pcr() {
  return a.CLAUDE_CHROME_CLASSIFIER_FLOOR ?? (a.CLAUDE_CODE_REMOTE ? ya("tengu_cowork_chrome_automode_default", {
    safe: !0
  }) : E("tengu_cowork_chrome_automode_default", !1));
}
async function AZr({
  allowedToolsCli: allowedToolsCli,
  disallowedToolsCli: disallowedToolsCli,
  baseToolsCli: baseToolsCli_2,
  getAllBaseTools: getAllBaseTools_2,
  restricted = !1,
  permissionMode: u,
  allowDangerouslySkipPermissions: allowDangerouslySkipPermissions_2,
  addDirs: addDirs,
  bgSessionPermissionRules: bgSessionPermissionRules,
  relaunchSessionAddDirs: relaunchSessionAddDirs,
  storageV5: storageV5
}) {
  let warnings_2 = [],
    m = null,
    C = u === "bypassPermissions" || allowDangerouslySkipPermissions_2,
    S = Eu(allowedToolsCli).map(item => Sn(zn(item))).filter(item => {
      let P = jBt(zn(item).toolName);
      if (P) return warnings_2.push(`Ignoring --allowedTools rule "${item}": ${P.error}. ${P.suggestion}.`), !1;
      return !0;
    }),
    cliArg = L([...Eu(disallowedToolsCli), ...Ese()]),
    baseToolsIsPreset_2 = !!baseToolsCli_2 && baseToolsCli_2.length > 0 && tEr(baseToolsCli_2.join(" ").trim()) !== null,
    parsedBaseTools_2 = baseToolsCli_2 && !baseToolsIsPreset_2 ? Tis(Eu(baseToolsCli_2)) : {
      kept: [],
      excluded: new Set(),
      bare: !1,
      detached: [],
      scoped: []
    },
    F = parsedBaseTools_2.kept.map(gd).filter(item => !parsedBaseTools_2.excluded.has(item)),
    builtInToolsDisabled = !!baseToolsCli_2?.length && !baseToolsIsPreset_2 && F.length === 0,
    v = r => F.includes(r) || S.some(item => zn(item).toolName === r);
  a2o([ao, Pr].some(v)), d2o(Kmr.some(v));
  let toolsNarrowing = [],
    J = [],
    H,
    ee = new Set();
  if (baseToolsCli_2 && baseToolsCli_2.length > 0) {
    let r = A8s({
      baseToolsCli: baseToolsCli_2,
      baseToolsIsPreset: baseToolsIsPreset_2,
      parsedBaseTools: parsedBaseTools_2,
      getAllBaseTools: getAllBaseTools_2
    });
    warnings_2.push(...r.warnings), toolsNarrowing = r.toolsToDisallow, J = builtInToolsDisabled ? [] : r.toolsToDisallow, H = r.toolsKept;
  }
  if (restricted) {
    let r = fen(eBn(getAllBaseTools_2()), fTs(F));
    for (let P of r) ee.add(P);
    toolsNarrowing = L([...toolsNarrowing, ...r]);
  }
  u2o(J.filter(item => !ee.has(item)));
  let additionalWorkingDirectories = new Map(),
    V = a.PWD,
    originalCwd_2 = V ? ii() : null;
  if (V && originalCwd_2 !== null && V !== originalCwd_2 && Ie({
    originalCwd: originalCwd_2,
    processPwd: V
  })) additionalWorkingDirectories.set(V, {
    path: V,
    source: "session"
  });
  let te = (nr() || {}).permissions?.disableBypassPermissionsMode === "disable",
    K = allowDangerouslySkipPermissions_2 && u !== "bypassPermissions" && !te && !restricted && Zsn("bypassPermissions");
  if (K) i("tengu_bg_allow_bypass_unconsented_ignored", {}), warnings_2.push(bypassCapabilityNotification);
  let isBypassPermissionsModeAvailable = (u === "bypassPermissions" || allowDangerouslySkipPermissions_2 && !K) && !te && !restricted && !0,
    ie = W() && storageV5 !== void 0 && storageV5.hostFiles.serving("workspace") === "host" ? {
      strictPersistedTrust: await VDo(storageV5)
    } : {},
    x = CG(ie),
    Z = [...cliArg, ...toolsNarrowing].map(zn),
    ye = Z.some(ue),
    he = Z.some(item => item.toolName === We) || x.some(item => item.ruleBehavior === "deny" && item.ruleValue.toolName === We),
    Ee = a.CLAUDE_CODE_USE_POWERSHELL_TOOL || Eu(baseToolsCli_2 ?? []).map(gd).includes(xt) || S.some(item => zn(item).toolName === xt) || Z.some(item => item.toolName === xt) || x.some(item => item.ruleValue.toolName === xt);
  if (I() === "windows" && Xl() && he && !Ee) {
    cliArg = [...cliArg, xt];
    let r = x.filter(item => item.ruleBehavior === "deny" && ue(item.ruleValue));
    if (tv() && (ye || r.length > 0) && !r.some(item => item.source === "policySettings")) warnings_2.push(`Denying ${We} also turns off the ${xt} tool, so Claude has neither. To use ${xt}, set CLAUDE_CODE_USE_POWERSHELL_TOOL=1.`);
  }
  let overlyBroadBashPermissions = [];
  if (!a.CLAUDE_CODE_REMOTE && a.CLAUDE_CODE_ENTRYPOINT !== "local-agent") {
    let r = [...kis(x, S, !0), ...Eis(x, S)];
    if (r.length > 0) {
      let P = r.map(item => ke(item.ruleValue)),
        yoloEquivEnabled = !1,
        R = !1;
      i("tengu_ant_overly_broad_bash_detected", {
        count: r.length,
        categories: fl(L(P)),
        yoloEquivEnabled: yoloEquivEnabled,
        willStrip: overlyBroadBashPermissions.length,
        entrypoint: pe(ip()) ?? b("other"),
        ...!1
      });
    }
  }
  let dangerousPermissions = [];
  if (u === "auto") dangerousPermissions = Sis(x, S);
  let X = Ug();
  if (X && S.length > 0) warnings_2.push(`Ignoring --allowedTools ${S.join(", ")}: permission rules are restricted to managed settings (allowManagedPermissionRulesOnly).`);
  let toolPermissionContext = Wz({
      mode: u,
      additionalWorkingDirectories: additionalWorkingDirectories,
      alwaysAllowRules: {
        cliArg: X ? [] : S,
        ...(bgSessionPermissionRules && {
          session: X ? [] : bgSessionPermissionRules.allow
        })
      },
      alwaysDenyRules: {
        cliArg: cliArg,
        ...(bgSessionPermissionRules && {
          session: bgSessionPermissionRules.deny
        }),
        ...(toolsNarrowing.length > 0 && {
          toolsNarrowing: toolsNarrowing
        })
      },
      alwaysAskRules: {},
      mcpPermissionModeOverrides: {},
      ...(restricted && {
        restricted: restricted
      }),
      ...(builtInToolsDisabled && {
        builtInToolsDisabled: builtInToolsDisabled
      }),
      ...(H !== void 0 && {
        toolsKeptByLaunchList: Object.freeze([...H])
      }),
      ...(i9e() && {
        blockReadsOutsideWorkingDirectories: !0
      }),
      isBypassPermissionsModeAvailable: isBypassPermissionsModeAvailable,
      ...(r => ({
        isAutoModeAvailable: r,
        canAutoClassifierRun: r,
        chromeClassifierFloorEnabled: Pcr(),
        chromeNavigationClassifierEnabled: E("tengu_auto_mode_config", {})?.chromeNavigation === !0,
        chromeClickClassifierEnabled: E("tengu_auto_mode_config", {})?.classifyChromeClicks === !0 || Xmr("browserClicks"),
        chromeHostToolAsksEnabled: E("tengu_cozy_eagle", !0) !== !1
      }))(Zh()),
      isRemoteMode: a.CLAUDE_CODE_REMOTE || Bn()
    }, x),
    ae = getAllBaseTools_2(),
    be = new Set([...ae.map(item => item.name), ...fe]),
    Ae = new Map([[We, "command"], [xt, "command"], [ao, "path"], [Pr, "path"], ...ae.filter(item => item.ruleContentField).map(item => [item.name, item.ruleContentField])]);
  for (let r of [...dc(toolPermissionContext), ...sg(toolPermissionContext)]) {
    if (r.source === "toolsNarrowing" || r.source === "session") continue;
    let {
      toolName: toolName,
      ruleContent: ruleContent_3
    } = r.ruleValue;
    if (XAe.has(toolName)) {
      t(`Permission ${r.ruleBehavior} rule names a removed tool: ${toolName}`);
      continue;
    }
    if (nE(toolName) || toolName.includes("_") || Cne(toolName).length > 0 || be.has(toolName)) {
      let R = Ae.get(toolName);
      if (R && ruleContent_3 !== void 0) {
        let k = ruleContent_3.indexOf(":");
        if (k > 0 && ruleContent_3.slice(0, k).trim() === R) {
          let Ce = `Permission ${r.ruleBehavior} rule "${Sn(r.ruleValue)}" targets ${R} as a raw string and will not match`,
            ve = toolName === Pr ? "." : toolName === ao ? ` \u2014 use ${Qe}(${"\u2026"}) to match file-read paths.` : toolName === Kt || toolName === Ji ? ` \u2014 use ${dt}(${"\u2026"}) to match file-write paths.` : ` \u2014 use ${toolName}(${"\u2026"}) for ${toolName}'s own matcher.`;
          warnings_2.push(Ce + ve);
        }
      }
      continue;
    }
    warnings_2.push(`Permission ${r.ruleBehavior} rule "${Sn(r.ruleValue)}" matches no known tool \u2014 check for typos.`);
  }
  for (let r of [...IN(toolPermissionContext), ...dc(toolPermissionContext), ...sg(toolPermissionContext)]) {
    if (r.source === "session" || r.source === "toolsNarrowing") continue;
    if (r.source === "cliArg" && r.ruleBehavior === "allow" && r.ruleValue.toolName === ao) continue;
    let {
      ruleContent: ruleContent_4
    } = r.ruleValue;
    if (ruleContent_4 !== void 0) {
      let R = ruleContent_4.indexOf(":");
      if (R > 0 && /^[A-Za-z_][A-Za-z0-9_]*$/.test(ruleContent_4.slice(0, R).trim()) && !/^[A-Za-z]:[\\/]/.test(ruleContent_4.trim())) continue;
    }
    let w = w0e(Sn(r.ruleValue), r.ruleBehavior);
    if (w.valid && w.warning) {
      let R = r.source === "cliArg" ? r.ruleBehavior === "allow" ? "--allowed-tools" : "--disallowed-tools" : r.source === "flagSettings" && !fn("flagSettings") ? "--settings" : r.source === "policySettings" ? "managed policy settings" : Y(r.source);
      warnings_2.push(`Permission ${r.ruleBehavior} rule (${R}): ${w.warning}`);
    }
  }
  let {
      repoOnly: repoOnly
    } = YGn(r => {
      try {
        return [ce(it(r))];
      } catch {
        return [];
      }
    }, storageV5),
    Se = [...s9e(ie).map(r => ({
      dir: r,
      destination: "localSettings"
    })), ...[...(bgSessionPermissionRules?.addDirs ?? []), ...(relaunchSessionAddDirs ?? [])].map(r => ({
      dir: r,
      destination: "session"
    })), ...addDirs.map(r => ({
      dir: r,
      destination: "cliArg"
    }))],
    Te = await Promise.all(Se.map(async ({
      dir: dir,
      destination: destination_3
    }) => ({
      destination: destination_3,
      result: await Obe(dir, toolPermissionContext)
    }))),
    trustedNetworkDirectories = new Map(),
    inheritedSessionDirectories = [];
  for (let {
    result: result,
    destination: destination_4
  } of Te) if (result.resultType === "success") {
    if (destination_4 === "session") inheritedSessionDirectories.push(result.absolutePath);
    if (toolPermissionContext = du(toolPermissionContext, {
      type: "addDirectories",
      directories: [result.absolutePath],
      destination: destination_4 === "localSettings" && repoOnly.has(result.absolutePath) ? "projectSettings" : destination_4
    }), x8s(destination_4)) {
      let w = Ccr(result.absolutePath);
      if (w.length > 0) {
        trustedNetworkDirectories.set(result.absolutePath, w);
        let directories = w.filter(item => item !== result.absolutePath);
        if (directories.length > 0) toolPermissionContext = du(toolPermissionContext, {
          type: "addDirectories",
          directories: directories,
          destination: destination_4
        });
      }
    }
  } else if (result.resultType !== "alreadyInWorkingDirectory" && result.resultType !== "pathNotFound") warnings_2.push(Ibe(result));
  if (trustedNetworkDirectories.size > 0) toolPermissionContext = {
    ...toolPermissionContext,
    trustedNetworkDirectories: trustedNetworkDirectories
  };
  return {
    toolPermissionContext: toolPermissionContext,
    warnings: warnings_2,
    dangerousPermissions: dangerousPermissions,
    overlyBroadBashPermissions: overlyBroadBashPermissions,
    ...(K && {
      bypassCapabilityNotification: bypassCapabilityNotification
    }),
    inheritedSessionDirectories: inheritedSessionDirectories
  };
}
function xZr(e, s) {
  if (Ug()) return e;
  return {
    ...e,
    alwaysAllowRules: {
      ...e.alwaysAllowRules,
      cliArg: [...(e.alwaysAllowRules.cliArg ?? []), ...s]
    }
  };
}
function Ioe(e) {
  let s;
  switch (e) {
    case "settings":
      s = "auto mode disabled by settings";
      break;
    case "circuit-breaker":
      s = "auto mode is unavailable for your plan";
      break;
    case "fast-mode":
      s = "auto mode unavailable while fast mode is on \xB7 run /fast off";
      break;
    case "model":
      s = "auto mode unavailable for this model";
      break;
    case sPt:
      s = "";
      break;
  }
  return s;
}
function TCt() {
  let e = KP();
  return e !== null ? Ioe(e) : "auto mode is unavailable right now";
}
function uPn(e, s = {}) {
  let o = o3n();
  if (!o) return e;
  let l = o.awaitsGrowthBook && RWe();
  if (l && !o.awaitsPolicyVerdict) return e;
  if (e.mode !== o.mode) return NWe(void 0), e;
  let n = YOr(o.inputs);
  if (n.autoDefaultWithheldForPendingVerdict) return e;
  let u = l ? {
    mode: n.mode,
    inputs: o.inputs,
    awaitsGrowthBook: !0,
    awaitsPolicyVerdict: !1
  } : void 0;
  if (NWe(u), nFr(n.autoStartWithheldForHipaaTaint), n.notification !== void 0) s.onNotification?.(n.notification);
  if (n.mode === e.mode || n.mode === "bypassPermissions" && !e.isBypassPermissionsModeAvailable || n.mode === "auto" && !Zh()) return e;
  t(`[permission-mode] startup resolved ${e.mode} against ${o.awaitsPolicyVerdict ? "a pending policy verdict" : "an empty GrowthBook cache"}; re-resolved to ${n.mode}`), tFr(n.fromAutoFallback);
  let d = {
    ...D0(e.mode, n.mode, e, "startup_reresolve"),
    mode: n.mode,
    ...(o.awaitsPolicyVerdict && n.decidedByProactivityLevel && {
      startupModeDecidedByProactivityLevel: o.inputs.proactivityLevel
    })
  };
  return NWe(u), d;
}
function Ocr() {
  let e = o3n();
  if (!e?.awaitsPolicyVerdict || e.inputs.proactivityLevel === void 0) return;
  let levelPickHeldForPendingVerdict = YOr(e.inputs).levelPickHeldForPendingVerdict;
  return levelPickHeldForPendingVerdict === void 0 ? void 0 : zFs(levelPickHeldForPendingVerdict);
}
function Icr() {
  let e = o3n();
  if (!e?.awaitsPolicyVerdict) return;
  NWe(e.awaitsGrowthBook && RWe() ? {
    ...e,
    awaitsPolicyVerdict: !1
  } : void 0);
}
async function dFe(e, s, o = !1) {
  let l = await pW("tengu_auto_mode_config", {}),
    n = ge(l?.enabled),
    u = mNn();
  if (!CMe()) Gdn(n === "disabled");
  let model = tt(),
    {
      supported: supported,
      disableFastModeBreakerFires: disableFastModeBreakerFires
    } = h0o({
      model: model,
      fastMode: !!s,
      disableFastMode: !!l?.disableFastMode
    });
  TLo(disableFastModeBreakerFires ? s ? "fast-mode" : "model" : null);
  let M = fNn(),
    A = n !== "disabled" && !u && supported && !M,
    _ = A,
    refusedForSettingsAlone = u && n !== "disabled" && supported;
  t(`[auto-mode] verifyAutoModeGateAccess: enabledState=${n} disabledBySettings=${u} model=${model} modelSupported=${supported} disableFastModeBreakerFires=${disableFastModeBreakerFires} carouselAvailable=${_} canEnterAuto=${A}`);
  let C = ELo();
  if (!A) NWe(void 0);
  let S = (h, isAutoModeAvailable) => {
    if (h.isAutoModeAvailable !== isAutoModeAvailable) t(`[auto-mode] verifyAutoModeGateAccess setAvailable: ${h.isAutoModeAvailable} -> ${isAutoModeAvailable}`);
    return h.isAutoModeAvailable === isAutoModeAvailable && h.canAutoClassifierRun === A ? h : {
      ...h,
      isAutoModeAvailable: isAutoModeAvailable,
      canAutoClassifierRun: A
    };
  };
  if (A) return {
    canEnterAuto: A,
    refusedForSettingsAlone: refusedForSettingsAlone,
    updateContext: h => {
      if (Icr(), h = uPn(h), NWe(void 0), h.mode === "plan" && !h.prePlanMode) {
        let v = fPn(h);
        if (v) return S({
          ...v,
          prePlanMode: "default"
        }, _);
      }
      return S(h, _);
    }
  };
  let T;
  if (u) T = "settings", t("auto mode disabled: disableAutoMode in settings", {
    level: "warn"
  });else if (n === "disabled") T = "circuit-breaker", t('auto mode disabled: tengu_auto_mode_config.enabled === "disabled" (circuit breaker)', {
    level: "warn"
  });else if (s && disableFastModeBreakerFires && ID(model)) T = "fast-mode", t("auto mode disabled: tengu_auto_mode_config.disableFastMode with the /fast toggle on", {
    level: "warn"
  });else T = "model", t(`auto mode disabled: model ${tt()} does not support auto mode`, {
    level: "warn"
  });
  let N = Ioe(T),
    updateContext = h => {
      if (t(`[auto-mode] kickOutOfAutoIfNeeded applying: ctx.mode=${h.mode} ctx.prePlanMode=${h.prePlanMode} reason=${T}`), !ost(h)) return S(h, !1);
      return Mcr(h);
    },
    F = ost(e);
  if (!F && !C) return {
    updateContext: updateContext,
    canEnterAuto: A,
    refusedForSettingsAlone: refusedForSettingsAlone
  };
  if (F) {
    let h = o && T === "model" && o4();
    return {
      updateContext: updateContext,
      canEnterAuto: A,
      refusedForSettingsAlone: refusedForSettingsAlone,
      notification: h ? void 0 : N
    };
  }
  return {
    updateContext: updateContext,
    canEnterAuto: A,
    refusedForSettingsAlone: refusedForSettingsAlone,
    notification: e.isAutoModeAvailable ? N : void 0
  };
}
function CCt() {
  return CMe() || mNn();
}
function xe() {
  return Wo().findLast(e => zXt(me(e) || {}));
}
function PZr() {
  return Wo().filter(item => zXt(me(item) || {}));
}
function pPn() {
  let e = xe(),
    s = Cis();
  return {
    autoModeAvailable: Zh(),
    autoModeUnavailableReason: pe(KP()),
    autoModeDisabledBySettingsSource: pe(e),
    autoModeDisabledByPolicyOrigin: e === "policySettings" ? pe(eT()) : void 0,
    autoModeDisabledByTrustedPolicy: RCt(),
    autoModeEnabledState: c(s.value),
    autoModeEnabledStateSource: c(s.src),
    autoModeCircuitBroken: CMe(),
    defaultModeSetting: pe((nr() || {}).permissions?.defaultMode),
    autoModeFromFallback: o4()
  };
}
function RCt() {
  return zXt(me("policySettings") || {}) && Oun().some(zXt);
}
var $e = "enabled";
function ge(e) {
  if (e === "enabled" || e === "disabled" || e === "opt-in") return e;
  return $e;
}
function OZr() {
  return Cis().value;
}
function Cis() {
  let s = E("tengu_auto_mode_config", {})?.enabled,
    value = ge(s);
  return {
    value: value,
    src: s === value ? "gb" : "default"
  };
}
function IZr(e) {
  let s = e;
  if (e.mode === "bypassPermissions") s = du(e, {
    type: "setMode",
    mode: "default",
    destination: "session"
  });
  return {
    ...s,
    isBypassPermissionsModeAvailable: !1
  };
}
function ost(e) {
  return e.mode === "auto" || e.mode === "plan" && (e.prePlanMode === "auto" || !!e.strippedDangerousRules);
}
function Mcr(e) {
  let s = "default";
  {
    let startupModeDecidedByProactivityLevel = e.startupModeDecidedByProactivityLevel;
    if ((e.mode === "auto" || e.prePlanMode === "auto") && startupModeDecidedByProactivityLevel !== void 0) {
      if (wx()) {
        let l = Wl(Eme(startupModeDecidedByProactivityLevel, {
            isAutoModeAvailable: !1,
            isBypassPermissionsModeAvailable: !1
          }, e.proactivityBaseline?.mode)),
          n = rIe(startupModeDecidedByProactivityLevel, l, e.proactivityBaseline?.mode) !== void 0;
        s = l === "plan" || n ? "default" : l;
      }
      e = {
        ...e,
        startupModeDecidedByProactivityLevel: void 0
      };
    }
  }
  if (Lx(!1), SF(!0), e.mode === "auto") return Aae({
    from: "auto",
    to: s,
    trigger: "auto_gate_denied"
  }), {
    ...du(_be(e), {
      type: "setMode",
      mode: s,
      destination: "session"
    }),
    isAutoModeAvailable: !1,
    canAutoClassifierRun: !1
  };
  return {
    ..._be(e),
    prePlanMode: e.prePlanMode === "auto" ? s : e.prePlanMode,
    isAutoModeAvailable: !1,
    canAutoClassifierRun: !1
  };
}
function MZr() {
  return (nr() || {}).permissions?.defaultMode === "auto";
}
function Dcr() {
  return Zh() && Lun();
}
function fPn(e) {
  if (!Dcr()) return null;
  return Lx(!0), KV(e);
}
function ACt(e) {
  let s = e.mode;
  if (s === "plan") return e;
  if (s === "auto") {
    if (Dcr()) return {
      ...e,
      prePlanMode: "auto"
    };
    return Lx(!1), SF(!0), {
      ..._be(e),
      prePlanMode: "auto"
    };
  }
  if (s !== "bypassPermissions") {
    let o = fPn(e);
    if (o) return {
      ...o,
      prePlanMode: s
    };
  }
  return t(`[prepareContextForPlanMode] plain plan entry, prePlanMode=${s}`, {
    level: "info"
  }), {
    ...e,
    prePlanMode: s
  };
}
function DZr(e, s) {
  let o = e;
  if (o.startupModeDecidedByProactivityLevel !== void 0) o = {
    ...o,
    startupModeDecidedByProactivityLevel: void 0
  };
  if (o.mode !== "bypassPermissions" && o.isBypassPermissionsModeAvailable && !s.bypassAvailableByFlag) o = {
    ...o,
    isBypassPermissionsModeAvailable: !1
  };
  if (o.mode === "plan" && o.prePlanMode !== void 0) {
    let l = oAe({
      ...o,
      prePlanMode: "default"
    });
    o = yp() ? l : {
      ...l,
      prePlanMode: void 0
    };
  }
  return o;
}
function oAe(e) {
  if (e.mode === "auto") return KV(e);
  if (e.mode !== "plan") return e;
  if (!e.prePlanMode || e.prePlanMode === "bypassPermissions") return e;
  let s = Dcr(),
    o = yp();
  if (s && o) return KV(e);
  if (!s && !o) return e;
  if (s) return Lx(!0), SF(!1), KV(e);
  return Lx(!1), SF(!0), _be(e);
}
export { $L, Ccr, Sis, bypassCapabilityNotification as cPn, wis, vis, T8s, kis, Eis, Rcr, C8s, KV, kZr, _be, EZr, D0, TZr, I7, Acr, _T, CZr, Tis, R8s, A8s, RZr, xcr, x8s, Pcr, AZr, xZr, Ioe, TCt, uPn, Ocr, Icr, dFe, CCt, PZr, pPn, RCt, OZr, Cis, IZr, ost, Mcr, MZr, Dcr, fPn, ACt, DZr, oAe };