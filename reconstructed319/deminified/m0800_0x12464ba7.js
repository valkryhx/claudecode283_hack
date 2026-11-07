// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { FR } from "B:/~BUN/root/chunk-begxsvab.js";
import { at, SO, Pko, gi, xA, Qr, _r, Mz, v, C4, oMs } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Vs, ye, WGs, GGs, KGs, TG, Xxe, xj, eVs, xn } from "B:/~BUN/root/chunk-game8aqv.js";
import { b, f, de, ka } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { t, io, ie } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Ua } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { yi, $o, Ib } from "B:/~BUN/root/chunk-6n5g80b8.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { ol } from "B:/~BUN/root/chunk-thn0wk2x.js";
import { mt } from "B:/~BUN/root/chunk-d10hhz4p.js";
import { yf } from "B:/~BUN/root/chunk-65j2302z.js";
import { Md, iln, BAe } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { Lb, Pg, JAe as error } from "B:/~BUN/root/chunk-r8p1hzqw.js";
import { Xl, $pe, dS, yr, mn, qV, Eu } from "B:/~BUN/root/chunk-44q965xg.js";
import { gr } from "B:/~BUN/root/chunk-sy1h8mf0.js";
import { un, be, Cr, zv, rtt, eFs, wBt } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { adn } from "B:/~BUN/root/chunk-1fg2bpc3.js";
import { lT, VD, Ou, njn, XMs, QMs, rjn, gSe, ZMs, $Eo, gJ, Ret, UEo, wMr } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { dt, Yt, Me } from "B:/~BUN/root/chunk-9kvvd0hy.js";
import { Cf } from "B:/~BUN/root/chunk-0s9zh2h6.js";
import { CGe, MEr, QLt, sm, nFn } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { Ip, aO, bFn, L7e } from "B:/~BUN/root/chunk-tdekz3md.js";
import { dO } from "B:/~BUN/root/chunk-y1b1g4ac.js";
import { jCe, Syo, t2i, t2e, rTs, _Hn } from "B:/~BUN/root/chunk-6j3fjnhn.js";
import { jho, avs, Who, zho, pTr, _ee, _D, N7e, Wl, Vc } from "B:/~BUN/root/chunk-detjgwj4.js";
import { lQr, uQr, rje, a5t, ZK, eL, VB, F5t, Tur, kns, yb, nL, GQ } from "B:/~BUN/root/chunk-27h4st9h.js";
import { zfs as error_2, RMi, HIn, __r, ndo, u7t } from "B:/~BUN/root/chunk-kk81ayzj.js";
import { Q_e } from "B:/~BUN/root/chunk-64qg3pvz.js";
import { V_ } from "B:/~BUN/root/chunk-x9bz04wf.js";
import { hA } from "B:/~BUN/root/chunk-45td50dx.js";
import { Coe } from "B:/~BUN/root/chunk-y7em5h10.js";
import { qli, _tr } from "B:/~BUN/root/chunk-815nev8v.js";
import { sIe, iIe } from "B:/~BUN/root/chunk-6dpcedmk.js";
import { Uf, jk, Ll } from "B:/~BUN/root/chunk-zy4xrndc.js";
import { Mvr } from "B:/~BUN/root/chunk-j5zjtxy5.js";
import { fht, aU, m_ } from "B:/~BUN/root/chunk-21s8ygah.js";
import { EA } from "B:/~BUN/root/chunk-eyvtcj15.js";
import { _t } from "B:/~BUN/root/chunk-3a409jmn.js";
import { ze } from "B:/~BUN/root/chunk-xwzn0yxv.js";
import { kt } from "B:/~BUN/root/chunk-86hj8bna.js";
import { D } from "B:/~BUN/root/chunk-8mqsat26.js";
import { X } from "B:/~BUN/root/chunk-g9pw24zp.js";
import { L } from "B:/~BUN/root/chunk-5ha2avah.js";
import { relative as ke, resolve as ge } from "path";
var Be = ["default"];
function ctr(e) {
  let s = e.toLowerCase();
  if (!Be.includes(s)) return null;
  return s;
}
import { createHash as Ne } from "crypto";
function me(e) {
  return Ne("sha256").update(e.join(`
`)).digest("hex");
}
function j(e) {
  if (yi.includes(e)) {
    let s = un(e);
    if (s) {
      let o = ol(),
        r = o === null ? s : ke(o, s);
      return r.length < s.length ? r : s;
    }
  }
  return e;
}
function $li(e, s) {
  let o = [];
  for (let r of e) if (r.ruleBehavior === "allow" && _ee(r.ruleValue.toolName, r.ruleValue.ruleContent)) {
    let ruleDisplay = r.ruleValue.ruleContent ? `${r.ruleValue.toolName}(${r.ruleValue.ruleContent})` : `${r.ruleValue.toolName}(*)`;
    o.push({
      ruleValue: r.ruleValue,
      source: r.source,
      ruleDisplay: ruleDisplay,
      sourceDisplay: j(r.source)
    });
  }
  for (let r of s) {
    let ruleValue = yr(r);
    if (_ee(ruleValue.toolName, ruleValue.ruleContent)) o.push({
      ruleValue: ruleValue,
      source: "cliArg",
      ruleDisplay: ruleValue.ruleContent ? `${ruleValue.toolName}(${ruleValue.ruleContent})` : `${ruleValue.toolName}(*)`,
      sourceDisplay: "--allowed-tools"
    });
  }
  return o;
}
var bypassCapabilityNotification = `--allow-dangerously-skip-permissions ignored: ${rTs}`,
  Le = [...avs, ...Who, ...zho];
function W(e) {
  return e === void 0 || /^[\s*]+$/.test(e);
}
function xe(e) {
  return !1;
}
function Ie(e) {
  if (e.toolName === kt) return "powershell";
  let ruleContent = e.ruleContent;
  if (ruleContent === void 0 || W(ruleContent)) return "bare";
  if (pTr(ruleContent, zho)) return "cluster";
  if (pTr(ruleContent, Who)) return "network";
  return "ace";
}
function Uli(e, s = !1) {
  {
    let {
      APPIFACT_REPL_TOOL_NAME: APPIFACT_REPL_TOOL_NAME
    } = import.meta.require("B:/~BUN/root/chunk-mh92bc27.js");
    if (e.toolName === APPIFACT_REPL_TOOL_NAME) return W(e.ruleContent);
  }
  if (e.toolName !== Me) return !1;
  let ruleContent_2 = e.ruleContent;
  if (ruleContent_2 === void 0 || W(ruleContent_2) || xe(ruleContent_2)) return !0;
  return s && pTr(ruleContent_2, Le);
}
function fe(e) {
  return e.toolName === Me && e.ruleContent === void 0;
}
function Bli(e) {
  return e.toolName === kt && W(e.ruleContent);
}
function Xia() {
  let e = v("tengu_ant_yolo_equiv_strip_config", {});
  if (!e.enabled) return !1;
  let s = i.CLAUDE_CODE_ENTRYPOINT ?? "cli";
  if (e.includeEntrypoints) return e.includeEntrypoints.includes(s);
  return !(e.excludeEntrypoints ?? []).includes(s);
}
function jli(e, s, o = !1) {
  let r = [];
  for (let n of e) if (n.ruleBehavior === "allow" && Uli(n.ruleValue, o)) r.push({
    ruleValue: n.ruleValue,
    source: n.source,
    ruleDisplay: n.ruleValue.ruleContent ? `${n.ruleValue.toolName}(${n.ruleValue.ruleContent})` : `${n.ruleValue.toolName}(*)`,
    sourceDisplay: j(n.source)
  });
  for (let n of s) {
    let ruleValue_2 = yr(n);
    if (Uli(ruleValue_2, o)) r.push({
      ruleValue: ruleValue_2,
      source: "cliArg",
      ruleDisplay: ruleValue_2.ruleContent ? `${ruleValue_2.toolName}(${ruleValue_2.ruleContent})` : `${ruleValue_2.toolName}(*)`,
      sourceDisplay: "--allowed-tools"
    });
  }
  return r;
}
function Wli(e, s) {
  let o = [];
  for (let r of e) if (r.ruleBehavior === "allow" && Bli(r.ruleValue)) o.push({
    ruleValue: r.ruleValue,
    source: r.source,
    ruleDisplay: `${kt}(*)`,
    sourceDisplay: j(r.source)
  });
  for (let r of s) {
    let ruleValue_3 = yr(r);
    if (Bli(ruleValue_3)) o.push({
      ruleValue: ruleValue_3,
      source: "cliArg",
      ruleDisplay: `${kt}(*)`,
      sourceDisplay: "--allowed-tools"
    });
  }
  return o;
}
function u3r(e) {
  return [];
}
function $e(e) {
  return Ib.includes(e) || e === "session" || e === "cliArg";
}
function Jia(e, s, o = !1) {
  let r = new Map();
  for (let d of s) {
    if (!o && !$e(d.source)) continue;
    let source = d.source,
      u = r.get(source) || [];
    u.push(d.ruleValue), r.set(source, u);
  }
  let n = e;
  for (let [destination, rules] of r) n = sm(n, {
    type: "removeRules",
    rules: rules,
    behavior: "allow",
    destination: destination
  });
  return n;
}
function T8(e) {
  let s = N7e(e.alwaysAllowRules, "allow"),
    o = $li(s, []);
  if (o.length === 0) return e.strippedDangerousRules !== void 0 ? e : {
    ...e,
    strippedDangerousRules: {}
  };
  for (let n of o) t(`Ignoring dangerous permission ${n.ruleDisplay} from ${n.sourceDisplay} (bypasses classifier)`);
  let strippedDangerousRules = {};
  for (let [n, d] of Object.entries(e.strippedDangerousRules ?? {})) if (d) strippedDangerousRules[n] = [...d];
  for (let n of o) {
    let d = mn(n.ruleValue),
      a = strippedDangerousRules[n.source] ??= [];
    if (!a.includes(d)) a.push(d);
  }
  return {
    ...Jia(e, o, !0),
    strippedDangerousRules: strippedDangerousRules
  };
}
function PYo(e, toolAliases, o = []) {
  let r = {
    ...e,
    toolAliases: toolAliases
  };
  if (!v("tengu_sorted_zebra", !1)) return r;
  for (let [n, d] of Object.entries(toolAliases ?? {})) {
    if (n.startsWith("mcp__") || !_ee(n, void 0)) continue;
    let a = typeof d === "string" ? gr(d) : null;
    if (a?.toolName) {
      jho(a.serverName, [a.toolName]), g("auto_mode_tool_alias");
      continue;
    }
    let u = i.CLAUDE_AGENT_SDK_MCP_NO_PREFIX && typeof d === "string" && d !== "" && a === null;
    if (u && o.length > 0) {
      for (let y of o) jho(y, [d]);
      g("auto_mode_tool_alias");
      continue;
    }
    c("auto_mode_tool_alias", u ? "no_sdk_server" : "target_not_mcp_tool"), t(`Auto mode: toolAliases maps ${n} to ${typeof d === "string" ? d : `a value of type ${typeof d}`}, ${u ? "and no SDK MCP server is registered that could hold it" : "which is not of the form mcp__<server>__<tool>"}, so an allow rule for that tool still runs its calls without the classifier's check`, {
      level: "warn"
    });
  }
  return f3r(r);
}
function OYo(e) {
  let s = D(e),
    o = new Map(),
    r = s ? 0 : 1;
  for (let [n, d] of s ? Object.entries(e) : []) {
    if (n === "" || n.startsWith("mcp__") || !Array.isArray(d)) {
      r++;
      continue;
    }
    for (let a of d) if (typeof a === "string" && a !== "" && !a.startsWith("mcp__")) {
      jho(n, [a]);
      let u = o.get(n) ?? [];
      if (!u.includes(a)) u.push(a);
      o.set(n, u);
    } else r++;
  }
  if (o.size > 0) g("auto_mode_code_running_mcp_tools");
  if (r > 0) c("auto_mode_code_running_mcp_tools", "malformed_entry"), t(`Auto mode: ignored ${r} malformed ${r === 1 ? "part" : "parts"} of codeRunningMcpTools, which should map each MCP server name to a list of tool names, e.g. {"workspace": ["bash"]}. In auto mode, allow rules and hooks can still approve calls to the tools meant there without the classifier.`, {
    level: "warn"
  });
  return Object.fromEntries(o);
}
function f3r(e) {
  return e.strippedDangerousRules === void 0 ? e : T8(e);
}
function VOe(e) {
  let strippedDangerousRules_2 = e.strippedDangerousRules;
  if (!strippedDangerousRules_2) return e;
  let o = e;
  for (let [destination_2, n] of Object.entries(strippedDangerousRules_2)) {
    if (!n || n.length === 0) continue;
    let d = destination_2 === "command" ? n.filter(item => !a5t(item)) : [...n];
    if (d.length === 0) continue;
    o = sm(o, {
      type: "addRules",
      rules: d.map(item => m_(item, "allow")),
      behavior: "allow",
      destination: destination_2
    });
  }
  return {
    ...o,
    strippedDangerousRules: void 0
  };
}
function IYo(e, s) {
  return {
    ...s,
    mode: e.mode,
    prePlanMode: e.prePlanMode,
    startupModeDecidedByProactivityLevel: e.startupModeDecidedByProactivityLevel,
    alwaysAllowRules: pe(e.alwaysAllowRules, s),
    strippedDangerousRules: e.strippedDangerousRules && pe(e.strippedDangerousRules, s)
  };
}
function pe(e, s) {
  let o = Object.keys(e).reduce((acc, item) => {
    let d = s.strippedDangerousRules?.[item] ?? [],
      a = new Set([...(s.alwaysAllowRules[item] ?? []), ...(item === "command" ? d.filter(item => !a5t(item)) : d)]),
      u = e[item] ?? [],
      y = u.filter(item => a.has(item));
    return acc.rules[item] = y, acc.dropped ||= y.length !== u.length, acc;
  }, {
    rules: {},
    dropped: !1
  });
  return o.dropped ? o.rules : e;
}
function c$(e, to, o, trigger) {
  if (e === to) return o;
  if (o.startupModeDecidedByProactivityLevel !== void 0) o = {
    ...o,
    startupModeDecidedByProactivityLevel: void 0
  };
  if (Ret(void 0), Q_e({
    from: e,
    to: to,
    trigger: trigger
  }), Xxe(e, to), eVs(e, to), e === "plan" && to !== "plan") TG(!0);
  if (to === "plan" && e !== "plan") return VCt(o);
  let n = e === "auto" || e === "plan" && Ou(),
    d = to === "auto";
  if (d && !n) {
    if (!yb()) throw Error("Cannot transition to auto mode: gate is not enabled");
    VD(!0), o = T8(o);
  } else if (n && !d) VD(!1), xj(!0), o = VOe(o);
  if (e === "plan" && to !== "plan" && o.prePlanMode) return {
    ...o,
    prePlanMode: void 0
  };
  return o;
}
async function MYo() {
  return !1;
}
var Fe = {
  settings: "auto_mode_settings",
  "circuit-breaker": "auto_mode_circuit_breaker",
  "fast-mode": "auto_mode_fast_mode",
  model: "auto_mode_model"
};
function Lle(e, s) {
  let mode = Pg(e);
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
    if (EA()) return {
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
  if (mode === "auto" && !yb()) return p3r(nL());
  return {
    ok: !0,
    mode: mode
  };
}
function p3r(e) {
  return {
    ok: !1,
    error: e ? `Cannot set permission mode to auto: ${GQ(e)}` : "Cannot set permission mode to auto",
    code: e ? Fe[e] : "auto_mode_unavailable"
  };
}
function VC(e, s, o, r) {
  let n = Lle(e, s);
  if (!n.ok) return n;
  let mode_2 = n.mode,
    a;
  if (o(u => {
    if (u.mode === mode_2) return u;
    if (u !== s) {
      let P = Lle(mode_2, u);
      if (!P.ok) return a = P, u;
    }
    return {
      ...c$(u.mode, mode_2, u, r),
      mode: mode_2
    };
  }), a !== void 0) return a;
  return setImmediate(() => {
    eL.emit();
  }), {
    ok: !0,
    mode: mode_2
  };
}
function DYo(e, s) {
  let mode_3 = s.context.mode;
  if (!Lle(mode_3, e).ok) return s.context;
  c$(e.mode, mode_3, e);
  let r = s.autoModeActive && yb() && (mode_3 === "auto" || mode_3 === "plan" && jYo());
  if (Ou() !== r) VD(r), xj(!r);
  return setImmediate(() => {
    eL.emit();
  }), s.autoModeActive && !r ? VOe(s.context) : s.context;
}
function ftr(e) {
  let kept = [],
    excluded = new Set(),
    bare = !1,
    detached = [],
    scoped = [],
    a = v("tengu_tools_exclusion_killswitch", !1);
  for (let u = 0; u < e.length; u++) {
    let y = e[u];
    if (y === void 0) continue;
    if (!y.startsWith(qV)) {
      kept.push(y);
      continue;
    }
    let P = y.slice(qV.length);
    if (P === "") {
      let A = e[u + 1];
      if (A === void 0 || A.startsWith(qV) || A.startsWith("(")) {
        bare = !0;
        continue;
      }
      if (u++, !a) detached.push(A);
      y = qV + A, P = A;
    }
    let T = P.indexOf("(");
    if (T === 0) {
      bare = !0;
      continue;
    }
    if (T > 0) {
      if (P = P.slice(0, T), !a) scoped.push(y);
    }
    if (!a) excluded.add(Xl(P));
  }
  return {
    kept: kept,
    excluded: excluded,
    bare: bare,
    detached: detached,
    scoped: scoped
  };
}
function Qia(e, s) {
  let o = e.join(" ").trim();
  if (ctr(o)) return ndo(s());
  let {
      kept: kept_2,
      excluded: excluded_2
    } = ftr(Eu(e)),
    a = kept_2.includes("preset:default") ? s().map(item => item.name).concat(kept_2.filter(item => item !== "preset:default")) : kept_2;
  if (excluded_2.size === 0) return a;
  return a.filter(item => !excluded_2.has(Xl(item)));
}
var Pe = [Me, kt, Qr, _r];
function Zia({
  baseToolsCli: baseToolsCli,
  baseToolsIsPreset: baseToolsIsPreset,
  parsedBaseTools: parsedBaseTools,
  getAllBaseTools: getAllBaseTools
}) {
  let warnings = [],
    securityWarnings = [],
    a = Qia(baseToolsCli, getAllBaseTools),
    u = new Set(a.map(Xl)),
    y = getAllBaseTools(),
    P = baseToolsIsPreset ? null : y,
    T = P === null ? ndo(y) : P.map(item => item.name),
    {
      excluded: excluded_3
    } = parsedBaseTools;
  for (let p of P ?? getAllBaseTools()) if (p.familyParentToolName !== void 0 && excluded_3.has(p.familyParentToolName)) u.delete(p.name);
  for (let p of y) if (p.familyParentToolName !== void 0 && u.has(p.familyParentToolName)) u.add(p.name);
  if (Uf.some(item => u.has(item))) u.add(V_);
  for (let p of excluded_3) u.delete(p);
  if (excluded_3.has(Me)) for (let p of u7t()) u.delete(p);
  let toolsToDisallow = T.filter(item => !u.has(item));
  for (let p of excluded_3) {
    if (T.includes(p)) continue;
    if (rje.has(p)) {
      t(`--tools exclusion names a removed tool: ${p}`);
      continue;
    }
    if (toolsToDisallow.push(p), Pe.includes(p)) continue;
    warnings.push(`--tools entry "${qV}${p}" matches no built-in tool \u2014 check for typos. An MCP tool with exactly that name is still withheld.`), securityWarnings.push(`--tools "${qV}${p}" matches no tool \xB7 check for typos`);
  }
  for (let p of parsedBaseTools.scoped) warnings.push(`--tools entry "${p}" names a rule, not a tool; the whole tool is withheld. Write "${qV}${p.slice(qV.length, p.indexOf("("))}" to say so.`);
  for (let p of parsedBaseTools.detached) warnings.push(`--tools entry "${qV} ${p}" was read as "${qV}${p}" and ${p} is withheld; write it without the space.`);
  if (parsedBaseTools.bare) warnings.push(`--tools has a "${qV}" with no tool name after it; write the name right after it, as in "${qV}Bash".`), securityWarnings.push(`--tools has a "${qV}" with no tool name \xB7 write "${qV}Bash"`);
  if (!baseToolsIsPreset) {
    for (let p of [...(x() === "windows" ? [kt] : []), Qr, _r]) if (!u.has(p) && !toolsToDisallow.includes(p)) toolsToDisallow.push(p);
  }
  return {
    toolsToDisallow: toolsToDisallow,
    toolsKept: baseToolsIsPreset || parsedBaseTools.kept.includes("preset:default") ? void 0 : u,
    warnings: warnings,
    securityWarnings: securityWarnings
  };
}
function Ve({
  processPwd: processPwd,
  originalCwd: originalCwd
}) {
  let {
    resolvedPath: resolvedPath,
    isSymlink: isSymlink
  } = io(ie(), processPwd);
  return isSymlink ? resolvedPath === ge(originalCwd) : !1;
}
function LYo({
  permissionModeCli: permissionModeCli,
  inheritPermissionModeCli: inheritPermissionModeCli,
  dangerouslySkipPermissions: dangerouslySkipPermissions,
  allowDangerouslySkipPermissions: allowDangerouslySkipPermissions,
  bypassPermissionsBlockedByHost: bypassPermissionsBlockedByHost,
  agentPermissionMode: d,
  proactivityLevel: proactivityLevel
}) {
  let u = Lb(permissionModeCli),
    inheritPermissionMode = Lb(inheritPermissionModeCli),
    P = qli(Boolean(dangerouslySkipPermissions || allowDangerouslySkipPermissions)),
    T = _tr();
  if (Cf()) {
    let R = dangerouslySkipPermissions || u && u !== "default" || inheritPermissionMode && inheritPermissionMode !== "default" || d && d !== "default",
      E = "Permission mode forced to default \u2014 CLAUDE_CODE_SUBPROCESS_ENV_SCRUB is set " + "(allowed_non_write_users hardening). Declare allowedTools explicitly, or set CLAUDE_CODE_SUBPROCESS_ENV_SCRUB=0 to opt out.";
    if (R) process.stderr.write(`\u26A0 ${E}
`);
    return {
      mode: "default",
      notification: R ? E : void 0,
      modeSuppliedOnInvocation: !0
    };
  }
  let inputs = {
      cli: {
        permissionMode: T === !0 && proactivityLevel !== void 0 && u !== void 0 && t2e(proactivityLevel, u, void 0) !== void 0 ? void 0 : u,
        inheritPermissionMode: inheritPermissionMode,
        dangerouslySkipPermissions: dangerouslySkipPermissions,
        allowDangerouslySkipPermissions: allowDangerouslySkipPermissions,
        bypassPermissionsBlockedByHost: bypassPermissionsBlockedByHost,
        isNonInteractiveSession: ye()
      },
      env: {
        ...process.env,
        CLAUDE_CODE_SUBPROCESS_ENV_SCRUB: void 0
      },
      settings: Cr() || {},
      agentFrontmatter: d ? {
        permissionMode: d
      } : void 0,
      proactivityLevel: T === !1 ? void 0 : proactivityLevel
    },
    p = Syo(inputs);
  $Eo(p.fromAutoFallback), UEo(p.autoStartWithheldForHipaaTaint);
  let awaitsGrowthBook = !ye() && Mz(),
    _ = p.autoDefaultWithheldForPendingVerdict;
  Ret(!p.modeSuppliedOnInvocation && (awaitsGrowthBook || _) ? {
    mode: p.mode,
    inputs: inputs,
    awaitsGrowthBook: awaitsGrowthBook,
    awaitsPolicyVerdict: _
  } : void 0);
  let proactivity;
  {
    let R = p.decidedByProactivityLevel || T === !0 && proactivityLevel !== void 0;
    proactivity = {
      proactivityBaseline: {
        mode: P ?? p.baselineMode,
        fromRelaunchHandoff: P !== void 0
      },
      startupModeDecidedByProactivityLevel: R ? proactivityLevel : void 0
    };
  }
  if (p.mode === "auto") VD(!0);
  return {
    mode: p.mode,
    notification: p.notification,
    proactivity: proactivity,
    modeSuppliedOnInvocation: p.modeSuppliedOnInvocation
  };
}
function m3r() {
  return i.CLAUDE_CODE_SESSION_KIND !== "bg";
}
function eaa(e) {
  return e === "cliArg" && m3r();
}
function h3r() {
  return i.CLAUDE_CHROME_CLASSIFIER_FLOOR ?? (i.CLAUDE_CODE_REMOTE ? _t("tengu_cowork_chrome_automode_default", {
    safe: !0
  }) : v("tengu_cowork_chrome_automode_default", !1));
}
function g3r(e) {
  return {
    ...e,
    blockWritesOutsideWorkingDirectories: !0,
    alwaysDenyRules: {
      ...e.alwaysDenyRules,
      toolsNarrowing: L([...(e.alwaysDenyRules.toolsNarrowing ?? []), hA, Coe])
    }
  };
}
async function NYo({
  allowedToolsCli: allowedToolsCli,
  disallowedToolsCli: disallowedToolsCli,
  baseToolsCli: baseToolsCli_2,
  getAllBaseTools: getAllBaseTools_2,
  restricted = !1,
  permissionMode: d,
  allowDangerouslySkipPermissions: allowDangerouslySkipPermissions_2,
  addDirs: addDirs,
  bgSessionPermissionRules: bgSessionPermissionRules,
  relaunchSessionAddDirs: relaunchSessionAddDirs,
  storageV5: storageV5
}) {
  let warnings_2 = [],
    securityWarnings_2 = [],
    p = null,
    w = d === "bypassPermissions" || allowDangerouslySkipPermissions_2,
    _ = Eu(allowedToolsCli).map(item => mn(m_(item, "allow"))).filter(item => {
      let h = iln(yr(item).toolName);
      if (h) return warnings_2.push(`Ignoring --allowedTools rule "${item}": ${h.error}. ${h.suggestion}.`), !1;
      return !0;
    }),
    cliArg = L([...Eu(disallowedToolsCli), ...ZK()]),
    baseToolsIsPreset_2 = !!baseToolsCli_2 && baseToolsCli_2.length > 0 && ctr(baseToolsCli_2.join(" ").trim()) !== null,
    parsedBaseTools_2 = baseToolsCli_2 && !baseToolsIsPreset_2 ? ftr(Eu(baseToolsCli_2)) : {
      kept: [],
      excluded: new Set(),
      bare: !1,
      detached: [],
      scoped: []
    },
    O = parsedBaseTools_2.kept.map(Xl).filter(item => !parsedBaseTools_2.excluded.has(item)),
    builtInToolsDisabled = !!baseToolsCli_2?.length && !baseToolsIsPreset_2 && O.length === 0,
    ee = m => O.includes(m) || _.some(item => yr(item).toolName === m);
  WGs([Qr, _r].some(ee)), GGs(lQr.some(ee));
  let toolsNarrowing = [],
    oe = [],
    Y,
    te = new Set();
  if (baseToolsCli_2 && baseToolsCli_2.length > 0) {
    let m = Zia({
      baseToolsCli: baseToolsCli_2,
      baseToolsIsPreset: baseToolsIsPreset_2,
      parsedBaseTools: parsedBaseTools_2,
      getAllBaseTools: getAllBaseTools_2
    });
    warnings_2.push(...m.warnings), securityWarnings_2.push(...m.securityWarnings.map(h => ({
      text: h
    }))), toolsNarrowing = m.toolsToDisallow, oe = builtInToolsDisabled ? [] : m.toolsToDisallow, Y = m.toolsKept;
  }
  if (restricted) {
    let m = HIn(__r(getAllBaseTools_2()), RMi(O));
    for (let h of m) te.add(h);
    toolsNarrowing = L([...toolsNarrowing, ...m]);
  }
  KGs(oe.filter(item => !te.has(item)));
  let additionalWorkingDirectories = new Map(),
    F = i.PWD,
    originalCwd_2 = F ? Vs() : null;
  if (F && originalCwd_2 !== null && F !== originalCwd_2 && Ve({
    originalCwd: originalCwd_2,
    processPwd: F
  })) additionalWorkingDirectories.set(F, {
    path: F,
    source: "session"
  });
  let ne = (Cr() || {}).permissions?.disableBypassPermissionsMode === "disable",
    K = allowDangerouslySkipPermissions_2 && d !== "bypassPermissions" && !ne && !restricted && _Hn("bypassPermissions");
  if (K) l("tengu_bg_allow_bypass_unconsented_ignored", {}), warnings_2.push(bypassCapabilityNotification);
  let isBypassPermissionsModeAvailable = (d === "bypassPermissions" || allowDangerouslySkipPermissions_2 && !K) && !ne && !restricted && !0,
    re = X() && storageV5 !== void 0 && storageV5.hostFiles.serving("workspace") === "host" ? {
      strictPersistedTrust: await oMs(storageV5)
    } : {},
    k = aO(re),
    q = [...cliArg, ...toolsNarrowing].map(yr),
    ve = q.some(fe),
    Ce = q.some(item => item.toolName === Me) || k.some(item => item.ruleBehavior === "deny" && item.ruleValue.toolName === Me),
    we = i.CLAUDE_CODE_USE_POWERSHELL_TOOL || Eu(baseToolsCli_2 ?? []).map(Xl).includes(kt) || _.some(item => yr(item).toolName === kt) || q.some(item => item.toolName === kt) || k.some(item => item.ruleValue.toolName === kt);
  if (x() === "windows" && Ll() && Ce && !we) {
    cliArg = [...cliArg, kt];
    let m = k.filter(item => item.ruleBehavior === "deny" && fe(item.ruleValue));
    if (jk() && (ve || m.length > 0) && !m.some(item => item.source === "policySettings")) warnings_2.push(`Denying ${Me} also turns off the ${kt} tool, so Claude has neither. To use ${kt}, set CLAUDE_CODE_USE_POWERSHELL_TOOL=1.`);
  }
  let overlyBroadBashPermissions = [];
  if (!i.CLAUDE_CODE_REMOTE && i.CLAUDE_CODE_ENTRYPOINT !== "local-agent") {
    let m = [...jli(k, _, !0), ...Wli(k, _)];
    if (m.length > 0) {
      let h = m.map(item => Ie(item.ruleValue)),
        yoloEquivEnabled = !1,
        Q = !1;
      l("tengu_ant_overly_broad_bash_detected", {
        count: m.length,
        categories: ka(L(h)),
        yoloEquivEnabled: yoloEquivEnabled,
        willStrip: overlyBroadBashPermissions.length,
        entrypoint: de(yf()) ?? b("other"),
        ...!1
      });
    }
  }
  let dangerousPermissions = [];
  if (d === "auto") dangerousPermissions = $li(k, _);
  let z = Ip(),
    readBlockExemptPaths = MEr();
  if (nFn(), z && _.length > 0) warnings_2.push(`Ignoring --allowedTools ${_.join(", ")}: permission rules are restricted to managed settings (allowManagedPermissionRulesOnly).`);
  let toolPermissionContext = VB({
    mode: d,
    additionalWorkingDirectories: additionalWorkingDirectories,
    alwaysAllowRules: {
      cliArg: z ? [] : _,
      ...(bgSessionPermissionRules && {
        session: z ? [] : bgSessionPermissionRules.allow
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
    ...(Y !== void 0 && {
      toolsKeptByLaunchList: Object.freeze([...Y])
    }),
    ...(QLt() && {
      blockReadsOutsideWorkingDirectories: !0
    }),
    ...(readBlockExemptPaths.length > 0 && {
      readBlockExemptPaths: readBlockExemptPaths
    }),
    isBypassPermissionsModeAvailable: isBypassPermissionsModeAvailable,
    ...(m => ({
      isAutoModeAvailable: m,
      canAutoClassifierRun: m,
      chromeClassifierFloorEnabled: h3r(),
      chromeNavigationClassifierEnabled: v("tengu_auto_mode_config", {})?.chromeNavigation === !0,
      chromeClickClassifierEnabled: v("tengu_auto_mode_config", {})?.classifyChromeClicks === !0 || uQr("browserClicks"),
      chromeHostToolAsksEnabled: v("tengu_cozy_eagle", !0) !== !1
    }))(yb()),
    isRemoteMode: i.CLAUDE_CODE_REMOTE || xn()
  }, k);
  if (CGe()) toolPermissionContext = g3r(toolPermissionContext);
  toolPermissionContext = Mvr(toolPermissionContext);
  for (let m of L([...Eu(allowedToolsCli), ...$o().flatMap(item => be(item)?.permissions?.allow ?? [])])) {
    let h = m_(m, "allow");
    if (aU(h) && Object.values(toolPermissionContext.alwaysAllowRules).flat().includes(mn(h))) {
      let {
        toolName: toolName
      } = h;
      warnings_2.push(`Permission allow rule "${m}" ${fht(m, toolName)}`), securityWarnings_2.push({
        text: `Allow rule "${m}" ${fht(m, toolName)}`
      });
    }
  }
  for (let m of taa([..._D(toolPermissionContext), ...Wl(toolPermissionContext), ...Vc(toolPermissionContext)], getAllBaseTools_2)) if (warnings_2.push(m.line), m.securityWarning !== void 0) securityWarnings_2.push(m.securityWarning);
  let {
      repoOnly: repoOnly
    } = bFn(m => {
      try {
        return [ge(mt(m))];
      } catch {
        return [];
      }
    }, storageV5),
    Re = [...L7e(re).map(m => ({
      dir: m,
      destination: "localSettings"
    })), ...[...(bgSessionPermissionRules?.addDirs ?? []), ...(relaunchSessionAddDirs ?? [])].map(m => ({
      dir: m,
      destination: "session"
    })), ...addDirs.map(m => ({
      dir: m,
      destination: "cliArg"
    }))],
    Oe = await Promise.all(Re.map(async ({
      dir: dir,
      destination: destination_3
    }) => ({
      destination: destination_3,
      result: await sIe(dir, toolPermissionContext)
    }))),
    trustedNetworkDirectories = new Map(),
    inheritedSessionDirectories = [];
  for (let {
    result: result,
    destination: destination_4
  } of Oe) if (result.resultType === "success") {
    if (destination_4 === "session") inheritedSessionDirectories.push(result.absolutePath);
    if (toolPermissionContext = sm(toolPermissionContext, {
      type: "addDirectories",
      directories: [result.absolutePath],
      destination: destination_4 === "localSettings" && repoOnly.has(result.absolutePath) ? "projectSettings" : destination_4
    }), eaa(destination_4)) {
      let B = adn(result.absolutePath);
      if (B.length > 0) {
        trustedNetworkDirectories.set(result.absolutePath, B);
        let directories = B.filter(item => item !== result.absolutePath);
        if (directories.length > 0) toolPermissionContext = sm(toolPermissionContext, {
          type: "addDirectories",
          directories: directories,
          destination: destination_4
        });
      }
    }
  } else if (result.resultType !== "alreadyInWorkingDirectory" && result.resultType !== "pathNotFound") warnings_2.push(iIe(result));
  if (trustedNetworkDirectories.size > 0) toolPermissionContext = {
    ...toolPermissionContext,
    trustedNetworkDirectories: trustedNetworkDirectories
  };
  return {
    toolPermissionContext: toolPermissionContext,
    warnings: warnings_2,
    securityWarnings: securityWarnings_2,
    dangerousPermissions: dangerousPermissions,
    overlyBroadBashPermissions: overlyBroadBashPermissions,
    ...(K && {
      bypassCapabilityNotification: bypassCapabilityNotification
    }),
    inheritedSessionDirectories: inheritedSessionDirectories
  };
}
function taa(e, s) {
  let o = [],
    r = s(),
    n = new Set([...r.map(item => item.name), ...Pe]),
    d = new Map([[Me, "command"], [kt, "command"], [Qr, "path"], [_r, "path"], ...r.filter(item => item.ruleContentField).map(item => [item.name, item.ruleContentField])]);
  for (let a of [...U(e, "deny"), ...U(e, "ask")]) {
    if (a.source === "toolsNarrowing" || a.source === "session") continue;
    let {
      toolName: toolName_2,
      ruleContent: ruleContent_3
    } = a.ruleValue;
    if (rje.has(toolName_2)) {
      t(`Permission ${a.ruleBehavior} rule names a removed tool: ${toolName_2}`);
      continue;
    }
    if (dS(toolName_2) || toolName_2.includes("_") || $pe(toolName_2).length > 0 || n.has(toolName_2)) {
      let P = d.get(toolName_2);
      if (P && ruleContent_3 !== void 0) {
        let T = ruleContent_3.indexOf(":");
        if (T > 0 && ruleContent_3.slice(0, T).trim() === P) {
          let A = `Permission ${a.ruleBehavior} rule "${mn(a.ruleValue)}" targets ${P} as a raw string and will not match`,
            S = toolName_2 === _r ? "." : toolName_2 === Qr ? ` \u2014 use ${ze}(${"\u2026"}) to match file-read paths.` : toolName_2 === Yt || toolName_2 === gi ? ` \u2014 use ${dt}(${"\u2026"}) to match file-write paths.` : ` \u2014 use ${toolName_2}(${"\u2026"}) for ${toolName_2}'s own matcher.`;
          o.push(J(a, A + S, `${Ua(a.ruleBehavior)} rule ${mn(a.ruleValue)} never matches${toolName_2 === _r ? "" : ` \xB7 use ${toolName_2 === Qr ? ze : toolName_2 === Yt || toolName_2 === gi ? dt : toolName_2}(${"\u2026"})`}`));
        }
      }
      continue;
    }
    o.push(J(a, `Permission ${a.ruleBehavior} rule "${mn(a.ruleValue)}" matches no known tool \u2014 check for typos.`, `${Ua(a.ruleBehavior)} rule ${mn(a.ruleValue)} matches no tool \xB7 check for typos`));
  }
  for (let a of [...U(e, "allow"), ...U(e, "deny"), ...U(e, "ask")]) {
    if (a.source === "session" || a.source === "toolsNarrowing") continue;
    if (a.source === "cliArg" && a.ruleBehavior === "allow" && a.ruleValue.toolName === Qr) continue;
    let {
      ruleContent: ruleContent_4
    } = a.ruleValue;
    if (ruleContent_4 !== void 0) {
      let P = ruleContent_4.indexOf(":");
      if (P > 0 && /^[A-Za-z_][A-Za-z0-9_]*$/.test(ruleContent_4.slice(0, P).trim()) && !/^[A-Za-z]:[\\/]/.test(ruleContent_4.trim())) continue;
    }
    let y = BAe(mn(a.ruleValue), a.ruleBehavior);
    if (y.valid && y.warning) {
      let P = a.source === "cliArg" ? a.ruleBehavior === "allow" ? "--allowed-tools" : "--disallowed-tools" : a.source === "flagSettings" && !un("flagSettings") ? "--settings" : a.source === "policySettings" ? "managed policy settings" : j(a.source);
      o.push(J(a, `Permission ${a.ruleBehavior} rule (${P}): ${y.warning}`, y.securityNotice === void 0 ? void 0 : `${Ua(a.ruleBehavior)} rule ${y.securityNotice}`));
    }
  }
  return o;
}
function J(e, line, text) {
  if (text === void 0) return {
    line: line
  };
  let r = yi.find(item => item === e.source && item !== "flagSettings"),
    n = r === void 0 ? void 0 : un(r);
  return {
    line: line,
    securityWarning: n === void 0 ? {
      text: text
    } : {
      text: text,
      seenKey: me([e.source, n, text])
    }
  };
}
function U(e, s) {
  return e.filter(item => item.ruleBehavior === s);
}
function FYo(e, s) {
  if (Ip()) return e;
  return {
    ...e,
    alwaysAllowRules: {
      ...e.alwaysAllowRules,
      cliArg: [...(e.alwaysAllowRules.cliArg ?? []), ...s]
    }
  };
}
function ptr(e, s = {}) {
  let o = wMr();
  if (!o) return e;
  let r = o.awaitsGrowthBook && Mz();
  if (r && !o.awaitsPolicyVerdict) return e;
  if (e.mode !== o.mode) return Ret(void 0), e;
  let n = Syo(o.inputs);
  if (n.autoDefaultWithheldForPendingVerdict) return e;
  let d = r ? {
    mode: n.mode,
    inputs: o.inputs,
    awaitsGrowthBook: !0,
    awaitsPolicyVerdict: !1
  } : void 0;
  if (Ret(d), UEo(n.autoStartWithheldForHipaaTaint), n.notification !== void 0) s.onNotification?.(n.notification);
  if (n.mode === e.mode || n.mode === "bypassPermissions" && !e.isBypassPermissionsModeAvailable || n.mode === "auto" && !yb()) return e;
  t(`[permission-mode] startup resolved ${e.mode} against ${o.awaitsPolicyVerdict ? "a pending policy verdict" : "an empty GrowthBook cache"}; re-resolved to ${n.mode}`), $Eo(n.fromAutoFallback);
  let a = {
    ...c$(e.mode, n.mode, e, "startup_reresolve"),
    mode: n.mode,
    ...(o.awaitsPolicyVerdict && n.decidedByProactivityLevel && {
      startupModeDecidedByProactivityLevel: o.inputs.proactivityLevel
    })
  };
  return Ret(d), a;
}
function y3r() {
  let e = wMr();
  if (!e?.awaitsPolicyVerdict || e.inputs.proactivityLevel === void 0) return;
  let levelPickHeldForPendingVerdict = Syo(e.inputs).levelPickHeldForPendingVerdict;
  return levelPickHeldForPendingVerdict === void 0 ? void 0 : t2i(levelPickHeldForPendingVerdict);
}
function _3r() {
  let e = wMr();
  if (!e?.awaitsPolicyVerdict) return;
  Ret(e.awaitsGrowthBook && Mz() ? {
    ...e,
    awaitsPolicyVerdict: !1
  } : void 0);
}
async function W6e(e, s, o = !1) {
  let r = await C4("tengu_auto_mode_config", {}),
    n = he(r?.enabled),
    d = Tur();
  if (!gSe()) rjn(n === "disabled");
  let model = at(),
    {
      supported: supported,
      disableFastModeBreakerFires: disableFastModeBreakerFires
    } = Pko({
      model: model,
      fastMode: !!s,
      disableFastMode: !!r?.disableFastMode
    });
  ZMs(disableFastModeBreakerFires ? s ? "fast-mode" : "model" : null);
  let P = n !== "disabled" && !d && supported,
    T = P,
    refusedForSettingsAlone = d && n !== "disabled" && supported;
  t(`[auto-mode] verifyAutoModeGateAccess: enabledState=${n} disabledBySettings=${d} model=${model} modelSupported=${supported} disableFastModeBreakerFires=${disableFastModeBreakerFires} carouselAvailable=${T} canEnterAuto=${P}`);
  let S = QMs();
  if (!P) Ret(void 0);
  let p = (E, isAutoModeAvailable) => {
    if (E.isAutoModeAvailable !== isAutoModeAvailable) t(`[auto-mode] verifyAutoModeGateAccess setAvailable: ${E.isAutoModeAvailable} -> ${isAutoModeAvailable}`);
    return E.isAutoModeAvailable === isAutoModeAvailable && E.canAutoClassifierRun === P ? E : {
      ...E,
      isAutoModeAvailable: isAutoModeAvailable,
      canAutoClassifierRun: P
    };
  };
  if (P) return {
    canEnterAuto: P,
    refusedForSettingsAlone: refusedForSettingsAlone,
    updateContext: E => {
      if (_3r(), E = ptr(E), Ret(void 0), E.mode === "plan" && !E.prePlanMode) {
        let O = htr(E);
        if (O) return p({
          ...O,
          prePlanMode: "default"
        }, T);
      }
      return p(E, T);
    }
  };
  let w;
  if (d) w = "settings", t("auto mode disabled: disableAutoMode in settings", {
    level: "warn"
  });else if (n === "disabled") w = "circuit-breaker", t('auto mode disabled: tengu_auto_mode_config.enabled === "disabled" (circuit breaker)', {
    level: "warn"
  });else if (s && disableFastModeBreakerFires && SO(model)) w = "fast-mode", t("auto mode disabled: tengu_auto_mode_config.disableFastMode with the /fast toggle on", {
    level: "warn"
  });else w = "model", t(`auto mode disabled: model ${at()} does not support auto mode`, {
    level: "warn"
  });
  let _ = GQ(w),
    updateContext = E => {
      if (t(`[auto-mode] kickOutOfAutoIfNeeded applying: ctx.mode=${E.mode} ctx.prePlanMode=${E.prePlanMode} reason=${w}`), !DBe(E)) return p(E, !1);
      return b3r(E);
    },
    R = DBe(e);
  if (!R && !S) return {
    updateContext: updateContext,
    canEnterAuto: P,
    refusedForSettingsAlone: refusedForSettingsAlone
  };
  if (R) {
    let E = o && w === "model" && gJ();
    return {
      updateContext: updateContext,
      canEnterAuto: P,
      refusedForSettingsAlone: refusedForSettingsAlone,
      notification: E ? void 0 : _
    };
  }
  return {
    updateContext: updateContext,
    canEnterAuto: P,
    refusedForSettingsAlone: refusedForSettingsAlone,
    notification: e.isAutoModeAvailable ? _ : void 0
  };
}
function Fqt() {
  return gSe() || Tur();
}
function Ue() {
  return $o().findLast(e => F5t(be(e) || {}));
}
function HYo() {
  return $o().filter(item => F5t(be(item) || {}));
}
function mtr() {
  let e = Ue(),
    s = zli();
  return {
    autoModeAvailable: yb(),
    autoModeUnavailableReason: de(nL()),
    autoModeDisabledBySettingsSource: de(e),
    autoModeDisabledByPolicyOrigin: e === "policySettings" ? de(zv()) : void 0,
    autoModeDisabledByTrustedPolicy: GCt(),
    autoModeEnabledState: f(s.value),
    autoModeEnabledStateSource: f(s.src),
    autoModeCircuitBroken: gSe(),
    defaultModeSetting: de((Cr() || {}).permissions?.defaultMode),
    autoModeFromFallback: gJ()
  };
}
function GCt() {
  return F5t(be("policySettings") || {}) && rtt().some(F5t);
}
var We = "enabled";
function he(e) {
  if (e === "enabled" || e === "disabled" || e === "opt-in") return e;
  return We;
}
function $Yo() {
  return zli().value;
}
function zli() {
  let s = v("tengu_auto_mode_config", {})?.enabled,
    value = he(s);
  return {
    value: value,
    src: s === value ? "gb" : "default"
  };
}
function UYo(e) {
  let s = e;
  if (e.mode === "bypassPermissions") s = sm(e, {
    type: "setMode",
    mode: "default",
    destination: "session"
  });
  return {
    ...s,
    isBypassPermissionsModeAvailable: !1
  };
}
function DBe(e) {
  return e.mode === "auto" || e.mode === "plan" && (e.prePlanMode === "auto" || !!e.strippedDangerousRules);
}
function b3r(e) {
  let s = "default";
  {
    let startupModeDecidedByProactivityLevel = e.startupModeDecidedByProactivityLevel;
    if ((e.mode === "auto" || e.prePlanMode === "auto") && startupModeDecidedByProactivityLevel !== void 0) {
      if (dO()) {
        let r = Md(jCe(startupModeDecidedByProactivityLevel, {
            isAutoModeAvailable: !1,
            isBypassPermissionsModeAvailable: !1
          }, e.proactivityBaseline?.mode)),
          n = t2e(startupModeDecidedByProactivityLevel, r, e.proactivityBaseline?.mode) !== void 0;
        s = r === "plan" || n ? "default" : r;
      }
      e = {
        ...e,
        startupModeDecidedByProactivityLevel: void 0
      };
    }
  }
  if (VD(!1), xj(!0), e.mode === "auto") return Q_e({
    from: "auto",
    to: s,
    trigger: "auto_gate_denied"
  }), {
    ...sm(VOe(e), {
      type: "setMode",
      mode: s,
      destination: "session"
    }),
    isAutoModeAvailable: !1,
    canAutoClassifierRun: !1
  };
  return {
    ...VOe(e),
    prePlanMode: e.prePlanMode === "auto" ? s : e.prePlanMode,
    isAutoModeAvailable: !1,
    canAutoClassifierRun: !1
  };
}
function BYo() {
  return (Cr() || {}).permissions?.defaultMode === "auto";
}
function jYo() {
  return yb() && wBt();
}
function Ae() {
  return Ou() && kns() && !GCt() && !F5t(be("flagSettings") || {});
}
function Ee() {
  if (FR()) return !1;
  if (lT().endOfferChoice === "switch") return !1;
  return jYo();
}
function WSn(e) {
  return yb() || e === "auto" && Ae();
}
function S3r() {
  njn(!wBt());
}
function w3r(e) {
  return S3r(), Se(e, jYo);
}
function Te() {
  return (yb() || Ae()) && (!XMs() || wBt()) && !eFs("useAutoModeDuringPlan");
}
function htr(e) {
  if (!Ee()) return null;
  return VD(!0), T8(e);
}
function VCt(e) {
  let s = e.mode;
  if (s === "plan") return e;
  if (e.planDoc !== void 0) return VCt({
    ...e,
    planDoc: void 0
  });
  if (s === "auto") {
    if (Te()) return {
      ...e,
      prePlanMode: "auto"
    };
    return VD(!1), xj(!0), {
      ...VOe(e),
      prePlanMode: "auto"
    };
  }
  if (s !== "bypassPermissions") {
    let o = htr(e);
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
function WYo(e, s) {
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
    let r = LBe({
      ...o,
      prePlanMode: "default"
    });
    o = Ou() ? r : {
      ...r,
      prePlanMode: void 0
    };
  }
  return o;
}
function LBe(e) {
  return Se(e, Te);
}
function Se(e, s) {
  if (e.mode === "auto") return T8(e);
  if (e.mode !== "plan") return e;
  if (!e.prePlanMode || e.prePlanMode === "bypassPermissions") return e;
  let o = Ou(),
    r = o ? s() : Ee();
  if (r && o) return T8(e);
  if (!r && !o) return e;
  if (r) return VD(!0), xj(!1), T8(e);
  return VD(!1), xj(!0), VOe(e);
}
export { ctr, $li, bypassCapabilityNotification as utr, Uli, Bli, Xia, jli, Wli, u3r, Jia, T8, PYo, OYo, f3r, VOe, IYo, c$, MYo, Lle, p3r, VC, DYo, ftr, Qia, Zia, LYo, m3r, eaa, h3r, g3r, NYo, taa, FYo, ptr, y3r, _3r, W6e, Fqt, HYo, mtr, GCt, $Yo, zli, UYo, DBe, b3r, BYo, jYo, WSn, S3r, w3r, htr, VCt, WYo, LBe };