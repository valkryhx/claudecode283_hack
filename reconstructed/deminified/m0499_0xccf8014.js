// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { it, cYe, zNr, tc, Nw, ro, $r, IYe, x, k1, hFr } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { Me } from "B:/~BUN/root/chunk-ekrhn4q1.js";
import { q, xC, j, hm, Te, yVr, bVr, wVr, rM, _re, XI, uqr, Yn } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { H } from "B:/~BUN/root/chunk-dkxhwhft.js";
import { y, c, ue, Oa } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { Dn, Ej, nm } from "B:/~BUN/root/chunk-54p0h65d.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { jo, ce, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { O } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { pg } from "B:/~BUN/root/chunk-shgdrs47.js";
import { Ld } from "B:/~BUN/root/chunk-snmb1kqg.js";
import { Dm, Hg, kne as error, ift, Bye } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { jc, R8e, YR, Jn, Mn, lde, Op } from "B:/~BUN/root/chunk-1f9marcm.js";
import { Ye } from "B:/~BUN/root/chunk-qqgpf856.js";
import { Ui, fs, r_ } from "B:/~BUN/root/chunk-290k5gh5.js";
import { wr, he, Vn, gC, EBr, K$t } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { Ix, Xf, YFr, gFt, HRe, XFr, JFr, x4n, x1, opt, QFr, Ct, wn, Ue, St } from "B:/~BUN/root/chunk-bt3h0syz.js";
import { td } from "B:/~BUN/root/chunk-ceg1zct0.js";
import { Lb, vz, Kan, gHe, Glt, vc, i0r, Lzn, Nzn, uln, Sle, nN, ODt, Bd, nh } from "B:/~BUN/root/chunk-d36ctpgs.js";
import { Y0r } from "B:/~BUN/root/chunk-t1afcev5.js";
import { vRr as error_2, Dvo, PBn, IBn, kRr, OBn } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { _9 } from "B:/~BUN/root/chunk-88mdabet.js";
import { Tfe, NQt, RDn, NDn, mie } from "B:/~BUN/root/chunk-3jyp964r.js";
import { ly } from "B:/~BUN/root/chunk-70qv5h0a.js";
import { ose, sse } from "B:/~BUN/root/chunk-v8xy4z2n.js";
import { ab, ba } from "B:/~BUN/root/chunk-na2t7g12.js";
import { Rw } from "B:/~BUN/root/chunk-0b2y1gsk.js";
import { at } from "B:/~BUN/root/chunk-2h7x7bdj.js";
import { L } from "B:/~BUN/root/chunk-z1enakv9.js";
import { relative as _e, resolve as de } from "path";
var De = new q(() => Me());
function Re() {
  return De.of(j().host);
}
var tse = xC(Re);
function zAn(e) {
  if (!/^[A-Za-z]:[\\/]/.test(e)) return [];
  let o = nm(e.slice(0, 3));
  if (o == null || !Dn(o)) return [];
  let s = nm(e);
  if (s == null || !Dn(s)) return [];
  let r = Ej(o),
    l = Ej(s);
  if (r == null || l == null || r !== l) return [];
  return [e, s];
}
function Y(e) {
  if (Ui.includes(e)) {
    let o = wr(e);
    if (o) {
      let s = pg(),
        r = s === null ? o : _e(s, o);
      return r.length < o.length ? r : o;
    }
  }
  return e;
}
function gso(e, o) {
  let s = [];
  for (let r of e) if (r.ruleBehavior === "allow" && Sle(r.ruleValue.toolName, r.ruleValue.ruleContent)) {
    let ruleDisplay = r.ruleValue.ruleContent ? `${r.ruleValue.toolName}(${r.ruleValue.ruleContent})` : `${r.ruleValue.toolName}(*)`;
    s.push({
      ruleValue: r.ruleValue,
      source: r.source,
      ruleDisplay: ruleDisplay,
      sourceDisplay: Y(r.source)
    });
  }
  for (let r of o) {
    let ruleValue = Jn(r);
    if (Sle(ruleValue.toolName, ruleValue.ruleContent)) s.push({
      ruleValue: ruleValue,
      source: "cliArg",
      ruleDisplay: ruleValue.ruleContent ? `${ruleValue.toolName}(${ruleValue.ruleContent})` : `${ruleValue.toolName}(*)`,
      sourceDisplay: "--allowed-tools"
    });
  }
  return s;
}
var we = [...i0r, ...Lzn, ...Nzn];
function V(e) {
  return e === void 0 || /^[\s*]+$/.test(e);
}
function Be(e) {
  if (e.toolName === St) return "powershell";
  let ruleContent = e.ruleContent;
  if (ruleContent === void 0 || V(ruleContent)) return "bare";
  if (uln(ruleContent, Nzn)) return "cluster";
  if (uln(ruleContent, Lzn)) return "network";
  return "ace";
}
function hso(e, o = !1) {
  {
    let {
      APPIFACT_REPL_TOOL_NAME: APPIFACT_REPL_TOOL_NAME
    } = import.meta.require("B:/~BUN/root/chunk-fe3bshrp.js");
    if (e.toolName === APPIFACT_REPL_TOOL_NAME) return V(e.ruleContent);
  }
  if (e.toolName !== Ue) return !1;
  let ruleContent_2 = e.ruleContent;
  if (ruleContent_2 === void 0 || V(ruleContent_2)) return !0;
  return o && uln(ruleContent_2, we);
}
function yso(e) {
  return e.toolName === St && V(e.ruleContent);
}
function Gjo() {
  let e = x("tengu_ant_yolo_equiv_strip_config", {});
  if (!e.enabled) return !1;
  let o = a.CLAUDE_CODE_ENTRYPOINT ?? "cli";
  if (e.includeEntrypoints) return e.includeEntrypoints.includes(o);
  return !(e.excludeEntrypoints ?? []).includes(o);
}
function _so(e, o, s = !1) {
  let r = [];
  for (let l of e) if (l.ruleBehavior === "allow" && hso(l.ruleValue, s)) r.push({
    ruleValue: l.ruleValue,
    source: l.source,
    ruleDisplay: l.ruleValue.ruleContent ? `${l.ruleValue.toolName}(${l.ruleValue.ruleContent})` : `${l.ruleValue.toolName}(*)`,
    sourceDisplay: Y(l.source)
  });
  for (let l of o) {
    let ruleValue_2 = Jn(l);
    if (hso(ruleValue_2, s)) r.push({
      ruleValue: ruleValue_2,
      source: "cliArg",
      ruleDisplay: ruleValue_2.ruleContent ? `${ruleValue_2.toolName}(${ruleValue_2.ruleContent})` : `${ruleValue_2.toolName}(*)`,
      sourceDisplay: "--allowed-tools"
    });
  }
  return r;
}
function bso(e, o) {
  let s = [];
  for (let r of e) if (r.ruleBehavior === "allow" && yso(r.ruleValue)) s.push({
    ruleValue: r.ruleValue,
    source: r.source,
    ruleDisplay: `${St}(*)`,
    sourceDisplay: Y(r.source)
  });
  for (let r of o) {
    let ruleValue_3 = Jn(r);
    if (yso(ruleValue_3)) s.push({
      ruleValue: ruleValue_3,
      source: "cliArg",
      ruleDisplay: `${St}(*)`,
      sourceDisplay: "--allowed-tools"
    });
  }
  return s;
}
function GAn(e) {
  return [];
}
function Oe(e) {
  return r_.includes(e) || e === "session" || e === "cliArg";
}
function Vjo(e, o, s = !1) {
  let r = new Map();
  for (let u of o) {
    if (!s && !Oe(u.source)) continue;
    let source = u.source,
      g = r.get(source) || [];
    g.push(u.ruleValue), r.set(source, g);
  }
  let l = e;
  for (let [destination, rules] of r) l = vc(l, {
    type: "removeRules",
    rules: rules,
    behavior: "allow",
    destination: destination
  });
  return l;
}
function lW(e) {
  let o = ODt(e.alwaysAllowRules, "allow"),
    s = gso(o, []);
  if (s.length === 0) return e.strippedDangerousRules !== void 0 ? e : {
    ...e,
    strippedDangerousRules: {}
  };
  for (let l of s) t(`Ignoring dangerous permission ${l.ruleDisplay} from ${l.sourceDisplay} (bypasses classifier)`);
  let strippedDangerousRules = {};
  for (let [l, u] of Object.entries(e.strippedDangerousRules ?? {})) if (u) strippedDangerousRules[l] = [...u];
  for (let l of s) {
    let u = Mn(l.ruleValue),
      p = strippedDangerousRules[l.source] ??= [];
    if (!p.includes(u)) p.push(u);
  }
  return {
    ...Vjo(e, s, !0),
    strippedDangerousRules: strippedDangerousRules
  };
}
function nse(e) {
  let strippedDangerousRules_2 = e.strippedDangerousRules;
  if (!strippedDangerousRules_2) return e;
  let s = e;
  for (let [destination_2, l] of Object.entries(strippedDangerousRules_2)) {
    if (!l || l.length === 0) continue;
    let u = destination_2 === "command" ? l.filter(item => !NQt(item)) : [...l];
    if (u.length === 0) continue;
    s = vc(s, {
      type: "addRules",
      rules: u.map(Jn),
      behavior: "allow",
      destination: destination_2
    });
  }
  return {
    ...s,
    strippedDangerousRules: void 0
  };
}
function Ldr(e, o) {
  return {
    ...o,
    mode: e.mode,
    prePlanMode: e.prePlanMode,
    startupModeDecidedByProactivityLevel: e.startupModeDecidedByProactivityLevel,
    alwaysAllowRules: le(e.alwaysAllowRules, o),
    strippedDangerousRules: e.strippedDangerousRules && le(e.strippedDangerousRules, o)
  };
}
function le(e, o) {
  let s = Object.keys(e).reduce((acc, item) => {
    let u = o.strippedDangerousRules?.[item] ?? [],
      p = new Set([...(o.alwaysAllowRules[item] ?? []), ...(item === "command" ? u.filter(item => !NQt(item)) : u)]),
      g = e[item] ?? [],
      P = g.filter(item => p.has(item));
    return acc.rules[item] = P, acc.dropped ||= P.length !== g.length, acc;
  }, {
    rules: {},
    dropped: !1
  });
  return s.dropped ? s.rules : e;
}
function yL(e, to, s, trigger) {
  if (e === to) return s;
  if (opt(void 0), _9({
    from: e,
    to: to,
    trigger: trigger
  }), _re(e, to), uqr(e, to), e === "plan" && to !== "plan") rM(!0);
  if (to === "plan" && e !== "plan") return aet(s);
  let l = e === "auto" || e === "plan" && Xf(),
    u = to === "auto";
  if (u && !l) {
    if (!iw()) throw Error("Cannot transition to auto mode: gate is not enabled");
    Ix(!0), s = lW(s);
  } else if (l && !u) Ix(!1), XI(!0), s = nse(s);
  if (e === "plan" && to !== "plan" && s.prePlanMode) return {
    ...s,
    prePlanMode: void 0
  };
  return s;
}
async function Ndr() {
  return !1;
}
var Ne = {
  settings: "auto_mode_settings",
  "circuit-breaker": "auto_mode_circuit_breaker",
  "fast-mode": "auto_mode_fast_mode",
  model: "auto_mode_model"
};
function Z5(e, o) {
  let mode = Hg(e);
  if (mode === void 0) return {
    ok: !1,
    error: error,
    code: "invalid_mode"
  };
  if (mode === "bypassPermissions") {
    if (o.restricted) return {
      ok: !1,
      error: error_2,
      code: "bypass_restricted"
    };
    if (Rw()) return {
      ok: !1,
      error: "Cannot set permission mode to bypassPermissions because it is disabled by settings or configuration",
      code: "bypass_disabled"
    };
    if (!o.isBypassPermissionsModeAvailable) return {
      ok: !1,
      error: "Cannot set permission mode to bypassPermissions because the session was not launched with --dangerously-skip-permissions",
      code: "bypass_not_launched"
    };
  }
  if (mode === "auto" && !iw()) {
    let r = rse();
    return {
      ok: !1,
      error: r ? `Cannot set permission mode to auto: ${e8(r)}` : "Cannot set permission mode to auto",
      code: r ? Ne[r] : "auto_mode_unavailable"
    };
  }
  return {
    ok: !0,
    mode: mode
  };
}
function Zw(e, o, s, r) {
  let l = Z5(e, o);
  if (!l.ok) return l;
  let mode_2 = l.mode;
  return s(p => {
    if (p.mode === mode_2) return p;
    return {
      ...yL(p.mode, mode_2, p, r),
      mode: mode_2
    };
  }), setImmediate(() => {
    tse.emit();
  }), {
    ok: !0,
    mode: mode_2
  };
}
function Hdr(e, o) {
  let mode_3 = o.context.mode;
  if (!Z5(mode_3, e).ok) return o.context;
  yL(e.mode, mode_3, e);
  let r = o.autoModeActive && iw() && (mode_3 === "auto" || mode_3 === "plan" && XAn());
  if (Xf() !== r) Ix(r), XI(!r);
  return setImmediate(() => {
    tse.emit();
  }), o.autoModeActive && !r ? nse(o.context) : o.context;
}
function Sso(e) {
  let kept = [],
    excluded = new Set(),
    bare = !1,
    detached = [],
    scoped = [],
    p = x("tengu_tools_exclusion_killswitch", !1);
  for (let g = 0; g < e.length; g++) {
    let P = e[g];
    if (P === void 0) continue;
    if (!P.startsWith(lde)) {
      kept.push(P);
      continue;
    }
    let b = P.slice(lde.length);
    if (b === "") {
      let h = e[g + 1];
      if (h === void 0 || h.startsWith(lde) || h.startsWith("(")) {
        bare = !0;
        continue;
      }
      if (g++, !p) detached.push(h);
      P = lde + h, b = h;
    }
    let T = b.indexOf("(");
    if (T === 0) {
      bare = !0;
      continue;
    }
    if (T > 0) {
      if (b = b.slice(0, T), !p) scoped.push(P);
    }
    if (!p) excluded.add(jc(b));
  }
  return {
    kept: kept,
    excluded: excluded,
    bare: bare,
    detached: detached,
    scoped: scoped
  };
}
function qjo(e, o) {
  let s = e.join(" ").trim();
  if (IBn(s)) return OBn(o());
  let {
      kept: kept_2,
      excluded: excluded_2
    } = Sso(Op(e)),
    p = kept_2.includes("preset:default") ? o().map(item => item.name).concat(kept_2.filter(item => item !== "preset:default")) : kept_2;
  if (excluded_2.size === 0) return p;
  return p.filter(item => !excluded_2.has(jc(item)));
}
function ke({
  processPwd: processPwd,
  originalCwd: originalCwd
}) {
  let {
    resolvedPath: resolvedPath,
    isSymlink: isSymlink
  } = jo(ce(), processPwd);
  return isSymlink ? resolvedPath === de(originalCwd) : !1;
}
function Fdr({
  permissionModeCli: permissionModeCli,
  inheritPermissionModeCli: inheritPermissionModeCli,
  dangerouslySkipPermissions: dangerouslySkipPermissions,
  allowDangerouslySkipPermissions: allowDangerouslySkipPermissions,
  bypassPermissionsBlockedByHost: bypassPermissionsBlockedByHost,
  agentPermissionMode: u,
  proactivityLevel: proactivityLevel
}) {
  let permissionMode = Dm(permissionModeCli),
    inheritPermissionMode = Dm(inheritPermissionModeCli),
    b = void 0,
    T = void 0;
  if (td()) {
    let S = dangerouslySkipPermissions || permissionMode && permissionMode !== "default" || inheritPermissionMode && inheritPermissionMode !== "default" || u && u !== "default",
      C = "Permission mode forced to default \u2014 CLAUDE_CODE_SUBPROCESS_ENV_SCRUB is set " + "(allowed_non_write_users hardening). Declare allowedTools explicitly, or set CLAUDE_CODE_SUBPROCESS_ENV_SCRUB=0 to opt out.";
    if (S) process.stderr.write(`\u26A0 ${C}
`);
    return {
      mode: "default",
      notification: S ? C : void 0,
      modeSuppliedOnInvocation: !0
    };
  }
  let inputs = {
      cli: {
        permissionMode: permissionMode,
        inheritPermissionMode: inheritPermissionMode,
        dangerouslySkipPermissions: dangerouslySkipPermissions,
        allowDangerouslySkipPermissions: allowDangerouslySkipPermissions,
        bypassPermissionsBlockedByHost: bypassPermissionsBlockedByHost,
        isNonInteractiveSession: Te()
      },
      env: {
        ...process.env,
        CLAUDE_CODE_SUBPROCESS_ENV_SCRUB: void 0
      },
      settings: Vn() || {},
      agentFrontmatter: u ? {
        permissionMode: u
      } : void 0,
      proactivityLevel: proactivityLevel
    },
    E = Y0r(inputs);
  x4n(E.fromAutoFallback), opt(!E.modeSuppliedOnInvocation && !Te() && IYe() ? {
    mode: E.mode,
    inputs: inputs
  } : void 0);
  let proactivity;
  if (E.mode === "auto") Ix(!0);
  return {
    mode: E.mode,
    notification: E.notification,
    proactivity: proactivity,
    modeSuppliedOnInvocation: E.modeSuppliedOnInvocation
  };
}
function VAn() {
  return a.CLAUDE_CODE_SESSION_KIND !== "bg";
}
function Kjo(e) {
  return e === "cliArg" && VAn();
}
async function $dr({
  allowedToolsCli: allowedToolsCli,
  disallowedToolsCli: disallowedToolsCli,
  baseToolsCli: baseToolsCli,
  getAllBaseTools: getAllBaseTools,
  restricted = !1,
  permissionMode: u,
  allowDangerouslySkipPermissions: allowDangerouslySkipPermissions_2,
  addDirs: addDirs,
  bgSessionPermissionRules: bgSessionPermissionRules,
  relaunchSessionAddDirs: relaunchSessionAddDirs,
  storageV5: storageV5
}) {
  let warnings = [],
    E = null,
    R = u === "bypassPermissions" || allowDangerouslySkipPermissions_2,
    S = Op(allowedToolsCli).map(item => Mn(Jn(item))).filter(item => {
      let d = ift(Jn(item).toolName);
      if (d) return warnings.push(`Ignoring --allowedTools rule "${item}": ${d.error}. ${d.suggestion}.`), !1;
      return !0;
    }),
    cliArg = L([...Op(disallowedToolsCli), ...NDn()]),
    B = !!baseToolsCli && baseToolsCli.length > 0 && IBn(baseToolsCli.join(" ").trim()) !== null,
    f = baseToolsCli && !B ? Sso(Op(baseToolsCli)) : {
      kept: [],
      excluded: new Set(),
      bare: !1,
      detached: [],
      scoped: []
    },
    D = f.kept.map(jc).filter(item => !f.excluded.has(item)),
    builtInToolsDisabled = !!baseToolsCli?.length && !B && D.length === 0,
    Q = n => D.includes(n) || S.some(item => Jn(item).toolName === n);
  yVr([ro, $r].some(Q)), bVr(RDn.some(Q));
  let toolsNarrowing = [],
    ee = [],
    oe = new Set();
  if (baseToolsCli && baseToolsCli.length > 0) {
    let n = qjo(baseToolsCli, getAllBaseTools),
      d = new Set(n.map(jc)),
      M = getAllBaseTools(),
      A = B ? null : M,
      _ = A === null ? OBn(M) : A.map(item => item.name),
      {
        excluded: excluded_3
      } = f;
    for (let m of A ?? getAllBaseTools()) if (m.familyParentToolName !== void 0 && excluded_3.has(m.familyParentToolName)) d.delete(m.name);
    for (let m of M) if (m.familyParentToolName !== void 0 && d.has(m.familyParentToolName)) d.add(m.name);
    if (ab.some(item => d.has(item))) d.add(ly);
    for (let m of excluded_3) d.delete(m);
    if (excluded_3.has(Ue)) {
      let {
        APPIFACT_REPL_TOOL_NAME: APPIFACT_REPL_TOOL_NAME_2
      } = import.meta.require("B:/~BUN/root/chunk-fe3bshrp.js");
      d.delete(APPIFACT_REPL_TOOL_NAME_2);
    }
    let N = _.filter(item => !d.has(item));
    for (let m of excluded_3) {
      if (_.includes(m)) continue;
      if (Tfe.has(m)) {
        t(`--tools exclusion names a removed tool: ${m}`);
        continue;
      }
      N.push(m), warnings.push(`--tools entry "${lde}${m}" matches no built-in tool \u2014 check for typos. An MCP tool with exactly that name is still withheld.`);
    }
    for (let m of f.scoped) warnings.push(`--tools entry "${m}" names a rule, not a tool; the whole tool is withheld. Write "${lde}${m.slice(lde.length, m.indexOf("("))}" to say so.`);
    for (let m of f.detached) warnings.push(`--tools entry "${lde} ${m}" was read as "${lde}${m}" and ${m} is withheld; write it without the space.`);
    if (f.bare) warnings.push(`--tools has a "${lde}" with no tool name after it; write the name right after it, as in "${lde}Bash".`);
    if (!B) {
      for (let m of [...(O() === "windows" ? [St] : []), ro, $r]) if (!d.has(m) && !N.includes(m)) N.push(m);
    }
    toolsNarrowing = N, ee = builtInToolsDisabled ? [] : N;
  }
  if (restricted) {
    let n = PBn(kRr(getAllBaseTools()), Dvo(D));
    for (let d of n) oe.add(d);
    toolsNarrowing = L([...toolsNarrowing, ...n]);
  }
  wVr(ee.filter(item => !oe.has(item)));
  let additionalWorkingDirectories = new Map(),
    I = a.PWD,
    originalCwd_2 = I ? hm() : null;
  if (I && originalCwd_2 !== null && I !== originalCwd_2 && ke({
    originalCwd: originalCwd_2,
    processPwd: I
  })) additionalWorkingDirectories.set(I, {
    path: I,
    source: "session"
  });
  let pe = (Vn() || {}).permissions?.disableBypassPermissionsMode === "disable",
    isBypassPermissionsModeAvailable = (u === "bypassPermissions" || allowDangerouslySkipPermissions_2) && !pe && !restricted && !0,
    se = H() && storageV5 !== void 0 && storageV5.hostFiles.serving("workspace") === "host" ? {
      strictPersistedTrust: await hFr(storageV5)
    } : {},
    F = vz(se),
    Z = [...cliArg, ...toolsNarrowing].map(Jn),
    $e = Z.some(item => item.toolName === Ue && item.ruleContent === void 0),
    ge = Z.some(item => item.toolName === Ue) || F.some(item => item.ruleBehavior === "deny" && item.ruleValue.toolName === Ue),
    Pe = a.CLAUDE_CODE_USE_POWERSHELL_TOOL || Op(baseToolsCli ?? []).map(jc).includes(St) || S.some(item => Jn(item).toolName === St) || Z.some(item => item.toolName === St) || F.some(item => item.ruleValue.toolName === St);
  if (O() === "windows" && ba() && ge && !Pe) cliArg = [...cliArg, St];
  let overlyBroadBashPermissions = [];
  if (!a.CLAUDE_CODE_REMOTE && a.CLAUDE_CODE_ENTRYPOINT !== "local-agent") {
    let n = [..._so(F, S, !0), ...bso(F, S)];
    if (n.length > 0) {
      let d = n.map(item => Be(item.ruleValue)),
        yoloEquivEnabled = !1,
        A = !1;
      i("tengu_ant_overly_broad_bash_detected", {
        count: n.length,
        categories: Oa(L(d)),
        yoloEquivEnabled: yoloEquivEnabled,
        willStrip: overlyBroadBashPermissions.length,
        entrypoint: ue(Ld()) ?? y("other"),
        ...!1
      });
    }
  }
  let dangerousPermissions = [];
  if (u === "auto") dangerousPermissions = gso(F, S);
  let J = Lb();
  if (J && S.length > 0) warnings.push(`Ignoring --allowedTools ${S.join(", ")}: permission rules are restricted to managed settings (allowManagedPermissionRulesOnly).`);
  let toolPermissionContext = mie({
      mode: u,
      additionalWorkingDirectories: additionalWorkingDirectories,
      alwaysAllowRules: {
        cliArg: J ? [] : S,
        ...(bgSessionPermissionRules && {
          session: J ? [] : bgSessionPermissionRules.allow
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
      ...(Glt() && {
        blockReadsOutsideWorkingDirectories: !0
      }),
      isBypassPermissionsModeAvailable: isBypassPermissionsModeAvailable,
      ...(n => ({
        isAutoModeAvailable: n,
        canAutoClassifierRun: n,
        chromeClassifierFloorEnabled: a.CLAUDE_CHROME_CLASSIFIER_FLOOR ?? x("tengu_cowork_chrome_automode_default", !1),
        chromeNavigationClassifierEnabled: x("tengu_auto_mode_config", {})?.chromeNavigation === !0,
        chromeClickClassifierEnabled: x("tengu_auto_mode_config", {})?.classifyChromeClicks === !0
      }))(iw()),
      isRemoteMode: a.CLAUDE_CODE_REMOTE || Yn()
    }, F),
    re = getAllBaseTools(),
    ye = new Set([...re.map(item => item.name), Ue, St, ro, $r]),
    be = new Map([[Ue, "command"], [St, "command"], [ro, "path"], [$r, "path"], ...re.filter(item => item.ruleContentField).map(item => [item.name, item.ruleContentField])]);
  for (let n of [...Bd(toolPermissionContext), ...nh(toolPermissionContext)]) {
    if (n.source === "toolsNarrowing" || n.source === "session") continue;
    let {
      toolName: toolName,
      ruleContent: ruleContent_3
    } = n.ruleValue;
    if (Tfe.has(toolName)) {
      t(`Permission ${n.ruleBehavior} rule names a removed tool: ${toolName}`);
      continue;
    }
    if (YR(toolName) || toolName.includes("_") || R8e(toolName).length > 0 || ye.has(toolName)) {
      let A = be.get(toolName);
      if (A && ruleContent_3 !== void 0) {
        let _ = ruleContent_3.indexOf(":");
        if (_ > 0 && ruleContent_3.slice(0, _).trim() === A) {
          let U = `Permission ${n.ruleBehavior} rule "${Mn(n.ruleValue)}" targets ${A} as a raw string and will not match`,
            N = toolName === $r ? "." : toolName === ro ? ` \u2014 use ${at}(${"\u2026"}) to match file-read paths.` : toolName === wn || toolName === tc ? ` \u2014 use ${Ct}(${"\u2026"}) to match file-write paths.` : ` \u2014 use ${toolName}(${"\u2026"}) for ${toolName}'s own matcher.`;
          warnings.push(U + N);
        }
      }
      continue;
    }
    warnings.push(`Permission ${n.ruleBehavior} rule "${Mn(n.ruleValue)}" matches no known tool \u2014 check for typos.`);
  }
  for (let n of [...nN(toolPermissionContext), ...Bd(toolPermissionContext), ...nh(toolPermissionContext)]) {
    if (n.source === "session" || n.source === "toolsNarrowing") continue;
    if (n.source === "cliArg" && n.ruleBehavior === "allow" && n.ruleValue.toolName === ro) continue;
    let {
      ruleContent: ruleContent_4
    } = n.ruleValue;
    if (ruleContent_4 !== void 0) {
      let A = ruleContent_4.indexOf(":");
      if (A > 0 && /^[A-Za-z_][A-Za-z0-9_]*$/.test(ruleContent_4.slice(0, A).trim()) && !/^[A-Za-z]:[\\/]/.test(ruleContent_4.trim())) continue;
    }
    let M = Bye(Mn(n.ruleValue), n.ruleBehavior);
    if (M.valid && M.warning) {
      let A = n.source === "cliArg" ? n.ruleBehavior === "allow" ? "--allowed-tools" : "--disallowed-tools" : n.source === "flagSettings" && !wr("flagSettings") ? "--settings" : n.source === "policySettings" ? "managed policy settings" : Y(n.source);
      warnings.push(`Permission ${n.ruleBehavior} rule (${A}): ${M.warning}`);
    }
  }
  let {
      repoOnly: repoOnly
    } = Kan(n => {
      try {
        return [de(Ye(n))];
      } catch {
        return [];
      }
    }, storageV5),
    Se = [...gHe(se).map(n => ({
      dir: n,
      destination: "localSettings"
    })), ...[...(bgSessionPermissionRules?.addDirs ?? []), ...(relaunchSessionAddDirs ?? [])].map(n => ({
      dir: n,
      destination: "session"
    })), ...addDirs.map(n => ({
      dir: n,
      destination: "cliArg"
    }))],
    ve = await Promise.all(Se.map(async ({
      dir: dir,
      destination: destination_3
    }) => ({
      destination: destination_3,
      result: await ose(dir, toolPermissionContext)
    }))),
    trustedNetworkDirectories = new Map(),
    inheritedSessionDirectories = [];
  for (let {
    result: result,
    destination: destination_4
  } of ve) if (result.resultType === "success") {
    if (destination_4 === "session") inheritedSessionDirectories.push(result.absolutePath);
    if (toolPermissionContext = vc(toolPermissionContext, {
      type: "addDirectories",
      directories: [result.absolutePath],
      destination: destination_4 === "localSettings" && repoOnly.has(result.absolutePath) ? "projectSettings" : destination_4
    }), Kjo(destination_4)) {
      let M = zAn(result.absolutePath);
      if (M.length > 0) {
        trustedNetworkDirectories.set(result.absolutePath, M);
        let directories = M.filter(item => item !== result.absolutePath);
        if (directories.length > 0) toolPermissionContext = vc(toolPermissionContext, {
          type: "addDirectories",
          directories: directories,
          destination: destination_4
        });
      }
    }
  } else if (result.resultType !== "alreadyInWorkingDirectory" && result.resultType !== "pathNotFound") warnings.push(sse(result));
  if (trustedNetworkDirectories.size > 0) toolPermissionContext = {
    ...toolPermissionContext,
    trustedNetworkDirectories: trustedNetworkDirectories
  };
  return {
    toolPermissionContext: toolPermissionContext,
    warnings: warnings,
    dangerousPermissions: dangerousPermissions,
    overlyBroadBashPermissions: overlyBroadBashPermissions,
    inheritedSessionDirectories: inheritedSessionDirectories
  };
}
function e8(e) {
  let o;
  switch (e) {
    case "settings":
      o = "auto mode disabled by settings";
      break;
    case "circuit-breaker":
      o = "auto mode is unavailable for your plan";
      break;
    case "fast-mode":
      o = "auto mode unavailable while fast mode is on \xB7 run /fast off";
      break;
    case "model":
      o = "auto mode unavailable for this model";
      break;
  }
  return o;
}
function iet() {
  let e = rse();
  return e !== null ? e8(e) : "auto mode is unavailable right now";
}
function qAn(e) {
  let o = QFr();
  if (!o || IYe()) return e;
  if (opt(void 0), e.mode !== o.mode) return e;
  let s = Y0r(o.inputs);
  if (s.mode === e.mode || s.mode === "bypassPermissions" && !e.isBypassPermissionsModeAvailable || s.mode === "auto" && !iw()) return e;
  return t(`[permission-mode] startup resolved ${e.mode} against an empty GrowthBook cache; re-resolved to ${s.mode}`), x4n(s.fromAutoFallback), {
    ...yL(e.mode, s.mode, e, "startup_reresolve"),
    mode: s.mode
  };
}
async function qOe(e, o, s = !1) {
  let r = await k1("tengu_auto_mode_config", {}),
    l = me(r?.enabled),
    u = W();
  if (!HRe()) gFt(l === "disabled" || u);
  let model = it(),
    {
      supported: supported,
      disableFastModeBreakerFires: disableFastModeBreakerFires
    } = zNr({
      model: model,
      fastMode: !!o,
      disableFastMode: !!r?.disableFastMode
    });
  XFr(disableFastModeBreakerFires ? o ? "fast-mode" : "model" : null);
  let canAutoClassifierRun = l !== "disabled" && !u && supported,
    T = canAutoClassifierRun;
  t(`[auto-mode] verifyAutoModeGateAccess: enabledState=${l} disabledBySettings=${u} model=${model} modelSupported=${supported} disableFastModeBreakerFires=${disableFastModeBreakerFires} carouselAvailable=${T} canEnterAuto=${canAutoClassifierRun}`);
  let h = YFr();
  if (!canAutoClassifierRun) opt(void 0);
  let E = (f, isAutoModeAvailable) => {
    if (f.isAutoModeAvailable !== isAutoModeAvailable) t(`[auto-mode] verifyAutoModeGateAccess setAvailable: ${f.isAutoModeAvailable} -> ${isAutoModeAvailable}`);
    return f.isAutoModeAvailable === isAutoModeAvailable && f.canAutoClassifierRun === canAutoClassifierRun ? f : {
      ...f,
      isAutoModeAvailable: isAutoModeAvailable,
      canAutoClassifierRun: canAutoClassifierRun
    };
  };
  if (canAutoClassifierRun) return {
    updateContext: f => {
      if (f = qAn(f), opt(void 0), f.mode === "plan" && !f.prePlanMode) {
        let D = YYt(f);
        if (D) return E({
          ...D,
          prePlanMode: "default"
        }, T);
      }
      return E(f, T);
    }
  };
  let R;
  if (u) R = "settings", t("auto mode disabled: disableAutoMode in settings", {
    level: "warn"
  });else if (l === "disabled") R = "circuit-breaker", t('auto mode disabled: tengu_auto_mode_config.enabled === "disabled" (circuit breaker)', {
    level: "warn"
  });else if (o && disableFastModeBreakerFires && cYe(model)) R = "fast-mode", t("auto mode disabled: tengu_auto_mode_config.disableFastMode with the /fast toggle on", {
    level: "warn"
  });else R = "model", t(`auto mode disabled: model ${it()} does not support auto mode`, {
    level: "warn"
  });
  let S = e8(R),
    updateContext = f => {
      if (t(`[auto-mode] kickOutOfAutoIfNeeded applying: ctx.mode=${f.mode} ctx.prePlanMode=${f.prePlanMode} reason=${R}`), !KYt(f)) return E(f, !1);
      return YAn(f);
    },
    B = KYt(e);
  if (!B && !h) return {
    updateContext: updateContext
  };
  if (B) {
    let f = s && R === "model" && x1();
    return {
      updateContext: updateContext,
      notification: f ? void 0 : S
    };
  }
  return {
    updateContext: updateContext,
    notification: e.isAutoModeAvailable ? S : void 0
  };
}
function Udr() {
  return HRe() || W();
}
function G(e) {
  return e.disableAutoMode === "disable" || e.permissions?.disableAutoMode === "disable";
}
function W() {
  return G(Vn() || {});
}
function xe() {
  return fs().findLast(e => G(he(e) || {}));
}
function qYt() {
  let e = xe(),
    o = wso();
  return {
    autoModeAvailable: iw(),
    autoModeUnavailableReason: ue(rse()),
    autoModeDisabledBySettingsSource: ue(e),
    autoModeDisabledByPolicyOrigin: e === "policySettings" ? ue(gC()) : void 0,
    autoModeDisabledByTrustedPolicy: KAn(),
    autoModeEnabledState: c(o.value),
    autoModeEnabledStateSource: c(o.src),
    autoModeCircuitBroken: HRe(),
    defaultModeSetting: ue((Vn() || {}).permissions?.defaultMode),
    autoModeFromFallback: x1()
  };
}
function KAn() {
  return G(he("policySettings") || {}) && EBr().some(G);
}
function iw() {
  if (HRe()) return !1;
  if (W()) return !1;
  if (!cYe(it())) return !1;
  return !0;
}
function rse() {
  if (W()) return "settings";
  if (HRe()) return "circuit-breaker";
  if (!cYe(it())) return "model";
  return JFr();
}
var Le = "enabled";
function me(e) {
  if (e === "enabled" || e === "disabled" || e === "opt-in") return e;
  return Le;
}
function Bdr() {
  return wso().value;
}
function wso() {
  let o = x("tengu_auto_mode_config", {})?.enabled,
    value = me(o);
  return {
    value: value,
    src: o === value ? "gb" : "default"
  };
}
function jdr(e) {
  let o = e;
  if (e.mode === "bypassPermissions") o = vc(e, {
    type: "setMode",
    mode: "default",
    destination: "session"
  });
  return {
    ...o,
    isBypassPermissionsModeAvailable: !1
  };
}
function KYt(e) {
  return e.mode === "auto" || e.mode === "plan" && (e.prePlanMode === "auto" || !!e.strippedDangerousRules);
}
function YAn(e) {
  let o = "default";
  if (Ix(!1), XI(!0), e.mode === "auto") return _9({
    from: "auto",
    to: o,
    trigger: "auto_gate_denied"
  }), {
    ...vc(nse(e), {
      type: "setMode",
      mode: o,
      destination: "session"
    }),
    isAutoModeAvailable: !1,
    canAutoClassifierRun: !1
  };
  return {
    ...nse(e),
    prePlanMode: e.prePlanMode === "auto" ? o : e.prePlanMode,
    isAutoModeAvailable: !1,
    canAutoClassifierRun: !1
  };
}
function Wdr() {
  return (Vn() || {}).permissions?.defaultMode === "auto";
}
function XAn() {
  return iw() && K$t();
}
function YYt(e) {
  if (!XAn()) return null;
  return Ix(!0), lW(e);
}
function aet(e) {
  let o = e.mode;
  if (o === "plan") return e;
  if (o === "auto") {
    if (XAn()) return {
      ...e,
      prePlanMode: "auto"
    };
    return Ix(!1), XI(!0), {
      ...nse(e),
      prePlanMode: "auto"
    };
  }
  if (o !== "bypassPermissions") {
    let s = YYt(e);
    if (s) return {
      ...s,
      prePlanMode: o
    };
  }
  return t(`[prepareContextForPlanMode] plain plan entry, prePlanMode=${o}`, {
    level: "info"
  }), {
    ...e,
    prePlanMode: o
  };
}
function zdr(e, o) {
  let s = e;
  if (s.startupModeDecidedByProactivityLevel !== void 0) s = {
    ...s,
    startupModeDecidedByProactivityLevel: void 0
  };
  if (s.mode !== "bypassPermissions" && s.isBypassPermissionsModeAvailable && !o.bypassAvailableByFlag) s = {
    ...s,
    isBypassPermissionsModeAvailable: !1
  };
  if (s.mode === "plan" && s.prePlanMode !== void 0) {
    let r = cwe({
      ...s,
      prePlanMode: "default"
    });
    s = Xf() ? r : {
      ...r,
      prePlanMode: void 0
    };
  }
  return s;
}
function cwe(e) {
  if (e.mode === "auto") return lW(e);
  if (e.mode !== "plan") return e;
  if (!e.prePlanMode || e.prePlanMode === "bypassPermissions") return e;
  let o = XAn(),
    s = Xf();
  if (o && s) return lW(e);
  if (!o && !s) return e;
  if (o) return Ix(!0), XI(!1), lW(e);
  return Ix(!1), XI(!0), nse(e);
}
export { tse, zAn, gso, hso, yso, Gjo, _so, bso, GAn, Vjo, lW, nse, Ldr, yL, Ndr, Z5, Zw, Hdr, Sso, qjo, Fdr, VAn, Kjo, $dr, e8, iet, qAn, qOe, Udr, qYt, KAn, iw, rse, Bdr, wso, jdr, KYt, YAn, Wdr, XAn, YYt, aet, zdr, cwe };