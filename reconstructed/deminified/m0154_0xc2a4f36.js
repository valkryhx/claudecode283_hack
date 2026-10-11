// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Bdn, H6, Iqn, p0o, TFe, _0o, Vr, Uqn, FS, Gqn, Zdt, INr, bl, Be, Tt, wx, Qhe, bce, pYe, rye, vt, ia, x, Ee, le, PFr } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { Ne } from "B:/~BUN/root/chunk-ekrhn4q1.js";
import { Lp, q1t, Oxe, Ryn } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { lr, va } from "B:/~BUN/root/chunk-339q6g5w.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { ct } from "B:/~BUN/root/chunk-tsjnk8ma.js";
import { r9e, zw } from "B:/~BUN/root/chunk-snmb1kqg.js";
import { wd, ID, Dm, Hg, hY, Qk } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { fs, ar } from "B:/~BUN/root/chunk-290k5gh5.js";
import { cHo, wr, he, pu, Je, Nx, ln, q$t } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { Yl, Fh, j5e, Ie, Bc, NN } from "B:/~BUN/root/chunk-sd4cj2qx.js";
import { Qp } from "B:/~BUN/root/chunk-xyqb4s7p.js";
import { Jt, Cf, HN } from "B:/~BUN/root/chunk-r833zsf7.js";
import { pn } from "B:/~BUN/root/chunk-8j4yaj30.js";
import { o, ae, fe } from "B:/~BUN/root/chunk-n8qdr73v.js";
function Xxo(e, n, r) {
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
import { resolve as Z } from "path";
function xle(e, n) {
  let r = Fh(e, "fable_5_mitigations", n);
  if (r !== void 0) return r;
  if (e === "claude-mythos-5") return !0;
  return !1;
}
function yhe(e) {
  return !r9e() && Fh(e, "fable_5_1_prompt_bundle") === !0;
}
function UHe(e) {
  return e.startsWith("claude-fable-");
}
function Yxo(e) {
  return e.startsWith("claude-mythos-");
}
function ecn(e) {
  return !1;
}
var W2n = "Fable 5, Opus 4.7+, Sonnet 5",
  tPo = "Fable 5, Opus 4.6+, Sonnet 4.6+";
function fte() {
  return a.CLAUDE_CODE_MAX_EFFORT_REMINDER ?? x("tengu_proud_clover", !1);
}
function LS(e) {
  if (Ryn(e)) return !1;
  let n = Qhe(e, "effort");
  if (n !== void 0) return n;
  let r = Be(e),
    s = j5e("effort", r);
  if (s !== void 0) return s;
  let d = Iqn(e, r);
  if (d !== void 0) return d.length > 0;
  if (r.includes("claude-3-") || r === "claude-opus-4-0" || r === "claude-opus-4-1" || r === "claude-sonnet-4-0" || r === "claude-sonnet-4-5" || r === "claude-haiku-4-5") return !1;
  if (a.CLAUDE_CODE_ALWAYS_ENABLE_EFFORT) return !0;
  if (Fh(r, "effort", e) || r === "claude-mythos-5") return !0;
  return NN(Bc(e));
}
function m6(e) {
  if (Ryn(e)) return !1;
  let n = Qhe(e, "max_effort");
  if (n !== void 0) return n;
  let r = Be(e),
    s = H("max_effort", e, r);
  if (s !== void 0) return s;
  let d = Iqn(e, r);
  if (d !== void 0) return d.includes("max");
  if (r.includes("claude-3-") || r === "claude-opus-4-0" || r === "claude-opus-4-1" || r === "claude-opus-4-5" || r === "claude-sonnet-4-0" || r === "claude-sonnet-4-5" || r === "claude-haiku-4-5") return !1;
  if (Fh(r, "max_effort", e) || r === "claude-mythos-5") return !0;
  return NN(Bc(e));
}
function _he(e) {
  if (Ryn(e)) return !1;
  let n = Qhe(e, "xhigh_effort");
  if (n !== void 0) return n;
  let r = Be(e),
    s = H("xhigh_effort", e, r);
  if (s !== void 0) return s;
  let d = Iqn(e, r);
  if (d !== void 0) return d.includes("xhigh");
  if (r.includes("claude-3-") || r === "claude-opus-4-0" || r === "claude-opus-4-1" || r === "claude-opus-4-5" || r === "claude-opus-4-6" || r === "claude-sonnet-4-0" || r === "claude-sonnet-4-5" || r === "claude-sonnet-4-6" || r === "claude-haiku-4-5") return !1;
  if (Fh(r, "xhigh_effort", e) || r === "claude-mythos-5") return !0;
  return NN(Bc(e));
}
function H(e, n, r) {
  if (j5e("effort", r) === !1) return !1;
  let s = j5e(e, r);
  if (s === void 0) return;
  return s && LS(n);
}
function fx(e) {
  return Qp() && (e === void 0 || _he(e) && jHe("xhigh", e));
}
function SLt(e) {
  return sq(m6(e) && jHe("max", e) ? "max" : "high", e);
}
function mx(e, n, r, turnEffort) {
  return r === !0 && Qp() && Aw(e, n, {
    turnEffort: turnEffort
  }) === "xhigh";
}
function Lk(e) {
  return wd.includes(e);
}
function b(e) {
  return wd.indexOf(e);
}
var S6e = "high";
function z2n(e) {
  return Lk(e) && b(e) > b(S6e);
}
function G2n(e) {
  let n = Be(e);
  return Fh(n, "thinking_disabled_effort_cap", e) ?? n === "claude-opus-5";
}
function Y(e) {
  let n = [...pu(), ...fs().map(item => he(item))],
    r = n.some(item => Object.values(item?.modelSettings ?? {}).some(item => item?.maxEffortLevel !== void 0)) ? She(e) : void 0,
    s = null;
  for (let d of n) {
    if (!d) continue;
    let u;
    if (r !== void 0) for (let [l, m] of Object.entries(d.modelSettings ?? {})) {
      let E = m?.maxEffortLevel;
      if (E !== void 0 && (u === void 0 || b(E) < b(u)) && She(l) === r) u = E;
    }
    if (u ??= d.maxEffortLevel, u !== void 0 && u !== "max" && (s === null || b(u) < b(s))) s = u;
  }
  return s;
}
function wLt(e) {
  let n = Y(e),
    r = null,
    s = Ie();
  if (s === "firstParty" || s === "gateway") {
    let u = Be(wx(e.trim().toLowerCase()), {
        identity: !0
      }),
      l = bce().find(item => Be(wx(item.apiName.trim().toLowerCase()), {
        identity: !0
      }) === u)?.maxEffortLevel;
    r = l != null && Lk(l) ? l : null;
  }
  let d = r === null ? n : n === null ? r : b(n) < b(r) ? n : r;
  return d === "max" ? null : d;
}
function hCe(e) {
  if (Ie() !== "firstParty") return null;
  let n = pYe();
  if (n === null) return null;
  let default_effort_level = n.default_effort_level;
  if (default_effort_level == null || !Lk(default_effort_level)) return null;
  let s = Be(wx(e.trim().toLowerCase()), {
    identity: !0
  });
  return Be(wx(n.name.trim().toLowerCase()), {
    identity: !0
  }) === s ? default_effort_level : null;
}
function V2n(e) {
  return pYe()?.override_user_effort === !0 && hCe(e) !== null;
}
function jHe(e, n) {
  let r = wLt(n);
  return r === null || b(e) <= b(r);
}
function Ple(e) {
  return wd.filter(item => jHe(item, e));
}
function sq(e, n) {
  let r = wLt(n);
  return r !== null && b(e) > b(r) ? r : e;
}
function ee(e, n) {
  if (n === "xhigh") return _he(e);
  if (n === "max") return m6(e);
  return !0;
}
function nPo(e) {
  let n = wLt(e);
  return n !== null && wd.some(item => b(item) > b(n) && ee(e, item));
}
function rPo(e, n) {
  if (typeof e !== "string" || !Lk(e)) return null;
  let r = wLt(n);
  if (r === null || b(e) <= b(r)) return null;
  let s = Aw(n, e) ?? r;
  return `Effort '${e}' exceeds the cap for ${n} set by your settings or organization; using '${s}'.`;
}
var G = {
    med: "medium"
  },
  J = {
    ultracode: "xhigh"
  };
function WHe(e) {
  if (typeof e !== "string") return;
  let n = e.trim().toLowerCase();
  return Object.hasOwn(J, n) ? n : void 0;
}
function xct(e) {
  let n = WHe(e);
  return n === void 0 ? void 0 : J[n];
}
function g6(e) {
  return String(e);
}
function bhe(e) {
  let n = e.trim().toLowerCase(),
    r = G[n] ?? n;
  return Lk(r) ? r : void 0;
}
function w6e(e) {
  let level = bhe(e);
  if (level !== void 0) return {
    level: level,
    warning: void 0
  };
  let level_2 = WHe(e);
  if (level_2 !== void 0) return {
    level: level_2,
    warning: void 0
  };
  return {
    level: void 0,
    warning: `Unknown --effort value '${e}' \u2014 ignoring it and using the default effort. Valid values: ${wd.join(", ")}.`
  };
}
function iN(e) {
  if (e === void 0 || e === null || e === "") return;
  if (typeof e === "number" && j(e)) return e;
  let n = String(e).toLowerCase(),
    r = G[n] ?? n;
  if (Lk(r)) return r;
  let s = parseInt(n, 10);
  if (!isNaN(s) && j(s)) return s;
  return;
}
function zHe(e) {
  if (e === "low" || e === "medium" || e === "high" || e === "xhigh") return e;
  return;
}
function q2n(e) {
  return Je().ultracode === !0 || WHe(e) === "ultracode";
}
function $F() {
  let CLAUDE_CODE_EFFORT_LEVEL = a.CLAUDE_CODE_EFFORT_LEVEL;
  return CLAUDE_CODE_EFFORT_LEVEL?.toLowerCase() === "unset" || CLAUDE_CODE_EFFORT_LEVEL?.toLowerCase() === "auto" ? null : iN(CLAUDE_CODE_EFFORT_LEVEL);
}
var W = Object.freeze({
    kind: "inherit"
  }),
  te = Object.freeze({
    kind: "default"
  });
function UF(value) {
  return {
    kind: "level",
    value: value
  };
}
function v6e(e) {
  return e === void 0 ? te : UF(e);
}
function ne(e) {
  return e === void 0 ? W : UF(e);
}
function oPo(e) {
  return e.kind === "level" ? String(e.value) : null;
}
function RX(e, n) {
  return e === n || e.kind === n.kind && (e.kind !== "level" || n.kind === "level" && e.value === n.value);
}
var oe = new Set(["claude-3-5-haiku", "claude-3-5-sonnet", "claude-3-7-sonnet", "claude-haiku-4-5", "claude-sonnet-4-0", "claude-sonnet-4-5", "claude-sonnet-4-6", "claude-sonnet-5", "claude-opus-4-0", "claude-opus-4-1", "claude-opus-4-5", "claude-opus-4-6", "claude-opus-4-7", "claude-opus-4-8", "claude-opus-5", "claude-fable-5", "claude-fable-5-1", "claude-mythos-5", "claude-mythos-5-1"]),
  B = new Map();
function Q0r(e) {
  let n = B.get(e);
  if (n === void 0) n = oe.has(e) || !HN(Cf(e)), B.set(e, n);
  return n;
}
function re() {
  let e = le();
  if (e.firstStartVersion !== void 0) return [];
  let n = [];
  if (!e.unpinOpus47LaunchEffort) n.push("claude-opus-4-7");
  if (!e.unpinOpus48LaunchEffort) n.push("claude-opus-4-8");
  if (!e.unpinFable5LaunchEffort) {
    n.push("claude-fable-5");
    let ANTHROPIC_DEFAULT_FABLE_MODEL = a.ANTHROPIC_DEFAULT_FABLE_MODEL;
    if (ANTHROPIC_DEFAULT_FABLE_MODEL && !UHe(Be(Tt(ANTHROPIC_DEFAULT_FABLE_MODEL), {
      deterministic: !0,
      identity: !0
    }))) n.push(She(ANTHROPIC_DEFAULT_FABLE_MODEL));
  }
  return n;
}
var I = Object.freeze({
  default: void 0,
  legacyUserEffort: void 0,
  byModel: Object.freeze({})
});
function Z0r() {
  let e = new Set(),
    n = [];
  for (let source of fs()) {
    let s = wr(source);
    if (s !== void 0) {
      let u = Z(s);
      if (e.has(u) && source !== "flagSettings") continue;
      e.add(u);
    }
    let settings = he(source);
    if (settings !== void 0 && settings !== null) n.push({
      source: source,
      settings: settings
    });
  }
  return n;
}
function z() {
  let e = Z0r(),
    n = pYe(),
    r = n !== null && V2n(n.name) ? She(n.name) : void 0,
    s = Je().ultracode === !0;
  if (s && (r === void 0 || e.some(item => N(item.source) && item.settings.ultracode === !0))) return {
    ...I,
    default: "xhigh"
  };
  let legacyUserEffort,
    u,
    l = [];
  for (let {
    source: source_2,
    settings: settings_2
  } of e) {
    let setsTopLevel = settings_2.effortLevel !== void 0;
    if (source_2 === "userSettings") {
      legacyUserEffort = zHe(settings_2.effortLevel), l.push({
        source: source_2,
        setsTopLevel: !1,
        settings: settings_2
      });
      continue;
    }
    if (setsTopLevel) u = {
      level: zHe(settings_2.effortLevel)
    };
    l.push({
      source: source_2,
      setsTopLevel: setsTopLevel,
      settings: settings_2
    });
  }
  l.reverse();
  let m = l.map(({
      settings: settings_3
    }) => {
      let p = new Map();
      for (let [M, c] of Object.entries(settings_3.modelSettings ?? {})) {
        let v = c?.effortLevel;
        if (v === void 0) continue;
        let h = She(M);
        if (M === h || !p.has(h)) p.set(h, v);
      }
      return p;
    }),
    E = new Set();
  if (r !== void 0) E.add(r);
  if (!s) for (let S of m) for (let p of S.keys()) E.add(p);
  let byModel = {};
  for (let S of E) {
    if (S === r) byModel[S] = void 0;
    for (let p = 0; p < l.length; p++) {
      if (S === r && !N(l[p].source)) continue;
      let M = m[p].get(S);
      if (M !== void 0) {
        byModel[S] = zHe(M);
        break;
      }
      if (l[p].setsTopLevel) {
        byModel[S] = zHe(l[p].settings.effortLevel);
        break;
      }
    }
  }
  if (s) return {
    ...I,
    default: "xhigh",
    byModel: byModel
  };
  if (u !== void 0) legacyUserEffort = void 0;
  if (legacyUserEffort !== void 0) {
    for (let S of re()) if (!Object.hasOwn(byModel, S) && !Object.hasOwn(Object.prototype, S)) byModel[S] = void 0;
  }
  return {
    default: u?.level,
    legacyUserEffort: legacyUserEffort,
    byModel: byModel
  };
}
function N(e) {
  return e === "policySettings" || e === "flagSettings";
}
function ocn(e) {
  if (!V2n(e)) return null;
  return aN(D(K(z(), e) ?? icn(e), e));
}
function K(e, n) {
  let r = She(n);
  if (Object.hasOwn(e.byModel, r)) return e.byModel[r];
  if (e.default !== void 0 || e.legacyUserEffort === void 0) return e.default;
  return Q0r(r) ? e.legacyUserEffort : void 0;
}
function ie(e) {
  if (e.legacyUserEffort !== void 0) return !1;
  for (let n in e.byModel) return !1;
  return !0;
}
function She(e) {
  return Jt(Be(Tt(e), {
    deterministic: !0,
    identity: !0
  }));
}
function se(e, effortLevel) {
  let r = She(e);
  return Object.hasOwn(Object.prototype, r) ? {
    effortLevel: effortLevel
  } : {
    modelSettings: {
      [r]: {
        effortLevel: effortLevel
      }
    }
  };
}
function ql(e, n) {
  let r = e.sessionEffort ?? W;
  switch (r.kind) {
    case "level":
      return r.value;
    case "default":
      return;
    case "inherit":
      if (e.settingsEffortTable === void 0) return;
      if (ie(e.settingsEffortTable)) return e.settingsEffortTable.default;
      return K(e.settingsEffortTable, n ?? e.mainLoopModelForSession ?? e.mainLoopModel ?? bl());
  }
}
function k6e(e) {
  return e.kind === "level" && typeof e.value === "string" ? e.value : void 0;
}
function Aw(e, n, {
  turnEffort: turnEffort_2,
  hookEffortValue: hookEffortValue
} = {}) {
  if (!LS(e)) return;
  let d = Y(e) !== null;
  if (hookEffortValue !== void 0) {
    let E = typeof hookEffortValue === "number" && d ? aN(hookEffortValue) : hookEffortValue;
    return D(E, e);
  }
  let u = $F();
  if (u === null && !d) return;
  let l = icn(e),
    m = u ?? (u === null ? l : void 0) ?? turnEffort_2 ?? n ?? l;
  if (typeof m === "number" && d) m = aN(m);
  return D(m, e);
}
function scn(e, n) {
  if (!LS(e) || $F() !== void 0) return;
  if (typeof n === "string") return sq(n, e);
  if (n === void 0 && hCe(e)) return h6(e);
  return;
}
function D(e, n) {
  let r = e;
  if (typeof r === "string" && Lk(r)) r = sq(r, n);
  if (r === "max" && !m6(n)) r = "high";
  if (r === "xhigh" && !_he(n)) r = "high";
  return r;
}
function h6(e) {
  return aN(D(icn(e), e));
}
function yCe(e, n, r, s, d) {
  if (!d) return !1;
  let u = Lp();
  if (u === 0 || u === s) return !1;
  if (!LS(r)) return !1;
  if (typeof Aw(r, e) !== "number" && typeof Aw(r, n) !== "number" && Bdn(r, Be(r))) return !1;
  if (Aw(r, e) === Aw(r, n)) return !1;
  if (va() && e !== void 0 && zHe(typeof e === "string" ? sq(e, r) : e) === void 0) return !1;
  return !0;
}
async function de(e, n, r) {
  return ln("userSettings", se(n, e), void 0, r);
}
async function iq(e, n, r = !0, s) {
  let d = e !== void 0 ? zHe(e) : void 0;
  if (r && (e === void 0 || d !== void 0) && !lr()) {
    let u = await de(d, n, s);
    if (u.error) return u.error;
  }
  return;
}
function Pct(e) {
  let n = {
    sessionEffort: ne(j2n(e)),
    settingsEffortTable: z()
  };
  return q1t(n), n;
}
function gx(e, n, turnEffort_3) {
  let s = Aw(e, n, {
    turnEffort: turnEffort_3
  }) ?? "high";
  return aN(s);
}
function Nk(e, n, r) {
  return LS(e) ? gx(e, n, r) : void 0;
}
function vLt(e, n, turnEffort_4) {
  if (n === void 0 && turnEffort_4 === void 0) return "";
  let s = Aw(e, n, {
    turnEffort: turnEffort_4
  });
  if (s === void 0) return "";
  return ` with ${g6(aN(s))} effort`;
}
function j(e) {
  return Number.isInteger(e);
}
function aN(e) {
  if (typeof e === "string") return Lk(e) ? e : "high";
  return "high";
}
function ue(e) {
  switch (e) {
    case "low":
      return "Quick, straightforward implementation with minimal overhead";
    case "medium":
      return "Balanced approach with standard implementation and testing";
    case "high":
      return "Comprehensive implementation with extensive testing and documentation";
    case "xhigh":
      return `Deeper reasoning than high, just below maximum (${W2n})`;
    case "max":
      return `Maximum capability with deepest reasoning. ${ID}`;
  }
}
function eMr(e) {
  if (typeof e === "string") {
    let n = ue(e);
    if (e === "high" && rye() && x("tengu_slate_finch", !1)) return `${n} \xB7 burns fastest \u2014 medium handles most tasks`;
    return n;
  }
  return "Balanced approach with standard implementation and testing";
}
function icn(e) {
  return hCe(e) ?? X(e) ?? ge(e) ?? me(e);
}
function sPo(e) {
  return hCe(e) !== null || X(e) !== void 0;
}
var ce = "tengu_witty_wand",
  pe = f(() => fe(o(), ae()));
function X(e) {
  let n = x(ce, {});
  if (typeof n === "string") n = ct(n, !1);
  let r = pe().safeParse(n);
  if (!r.success) return;
  let s = r.data[Jt(Be(e))],
    d = typeof s === "string" ? s.trim().toLowerCase() : void 0;
  return d !== void 0 && Lk(d) ? d : void 0;
}
function ge(e) {
  let n = p0o(e, Be(e));
  return n !== void 0 && Lk(n) ? n : void 0;
}
function me(e) {
  return Yl(Be(e))?.default_effort ?? "high";
}
function j2n(e) {
  return iN(e) ?? xct(e);
}
function Q() {
  let {
    value: value_2,
    source: source_3
  } = ia("tengu_auto_mode_config", {});
  if (value_2?.enabled !== "disabled") return !1;
  return source_3 === "override" || source_3 === "payload";
}
function Y0r(e) {
  let {
      cli: cli,
      env: env,
      settings: settings_4,
      agentFrontmatter: agentFrontmatter
    } = e,
    u = Dm(cli.permissionMode),
    l = Dm(cli.inheritPermissionMode),
    dangerouslySkipPermissions = cli.dangerouslySkipPermissions,
    E = agentFrontmatter?.permissionMode,
    modeSuppliedOnInvocation = Boolean(dangerouslySkipPermissions || u || E);
  if (Ne(env.CLAUDE_CODE_SUBPROCESS_ENV_SCRUB)) {
    let g = dangerouslySkipPermissions || u && u !== "default" || l && l !== "default" || E && E !== "default",
      w = "Permission mode forced to default \u2014 CLAUDE_CODE_SUBPROCESS_ENV_SCRUB is set " + "(allowed_non_write_users hardening). Declare allowedTools explicitly, or set CLAUDE_CODE_SUBPROCESS_ENV_SCRUB=0 to opt out.";
    return {
      mode: "default",
      notification: g ? w : void 0,
      fromAutoFallback: !1,
      baselineMode: "default",
      decidedByProactivityLevel: !1,
      modeSuppliedOnInvocation: !0
    };
  }
  let S = settings_4.permissions?.disableBypassPermissionsMode === "disable",
    p = Q(),
    M = !p && !T(settings_4),
    c = [],
    notification,
    h = l ? q(l, p, "inherited auto mode dropped \u2014 auto mode killswitch active (override- or payload-served)") : void 0,
    _ = l ? h?.mode ?? Qk(l) : void 0;
  if (dangerouslySkipPermissions) if (R("bypassPermissions")) notification = A, c.push("default");else c.push("bypassPermissions");
  if (u) {
    let g = q(u, p, "auto mode killswitch active (override- or payload-served) \u2014 falling back to default");
    if (g) {
      if (g.unconsented) notification = A;
      c.push(g.mode);
    }
  }
  if (E) if (E === "auto" && p) t("agent frontmatter requested auto mode but circuit breaker active \u2014 falling through", {
    level: "warn"
  });else if (_ && hY(E, _) === void 0) t(`agent frontmatter permissionMode "${E}" ignored \u2014 it would widen the agent view's inherited mode (effective "${_}"), and the dispatched agent name is repo-controllable (settings \`agent\`)`, {
    level: "warn"
  }), i("tengu_agent_frontmatter_mode_widening_carry_ignored", {});else c.push(E);
  if (zw()) {
    let g = !tcn() ? void 0 : V().map(item => Dm(he(item)?.permissions?.defaultMode)).find(item => item != null);
    if (g != null && Ne(env.CLAUDE_CODE_REMOTE) && !k(g)) {
      if (t(`settings defaultMode "${g}" is not supported in CLAUDE_CODE_REMOTE \u2014 only acceptEdits, plan, default, and auto are allowed`, {
        level: "warn"
      }), c.length === 0) i("tengu_ccr_unsupported_default_mode_ignored", {
        mode_hash: pn(g)
      }), c.push("default");
    } else if (g === "bypassPermissions") {
      if (dangerouslySkipPermissions || cli.allowDangerouslySkipPermissions) c.push(g);else if (c.length === 0) notification = 'Permission mode bypassPermissions from settings was ignored \u2014 enable the "Claude Code: Allow Dangerously Skip Permissions" setting in VS Code to consent to it', t('settings defaultMode "bypassPermissions" ignored for a VS Code-owned session without the allow-bypass setting', {
        level: "warn"
      }), i("tengu_settings_bypass_unconsented_noninteractive_ignored", {}), process.stderr.write(`\u26A0 ${notification}
`), c.push("default");
    } else if (g === "auto") {
      if (!p) c.push(g);else t('settings defaultMode "auto" ignored for the IDE session \u2014 auto-mode circuit breaker is active', {
        level: "warn"
      });
    } else if (g != null) c.push(g);
  } else if (settings_4.permissions?.defaultMode) {
    let g = Dm(settings_4.permissions.defaultMode);
    if (Ne(env.CLAUDE_CODE_REMOTE) && !k(g)) t(`settings defaultMode "${g}" is not supported in CLAUDE_CODE_REMOTE \u2014 only acceptEdits, plan, default, and auto are allowed`, {
      level: "warn"
    }), i("tengu_ccr_unsupported_default_mode_ignored", {
      mode_hash: pn(g)
    });else if (g === "bypassPermissions") {
      if (!O("bypassPermissions")) {
        if (t('settings defaultMode "bypassPermissions" ignored \u2014 only policy/user/flag settings may grant bypass mode (projectSettings and localSettings are repo-controllable)', {
          level: "warn"
        }), i("tengu_settings_bypass_mode_untrusted_source_ignored", {}), !l) c.push("default");
      } else if (R("bypassPermissions")) {
        if (c.length === 0) notification = A;
        c.push("default");
      } else c.push(g);
    } else if (g !== "auto") {
      if (_ && !O(g) && hY(g, _) === void 0) t(`settings defaultMode "${g}" ignored \u2014 it would widen the agent view's inherited mode (effective "${_}"), and only policy/user/flag settings may do that (projectSettings and localSettings are repo-controllable)`, {
        level: "warn"
      }), i("tengu_settings_mode_widening_carry_ignored", {});else c.push(g);
    } else if (!O("auto")) t('settings defaultMode "auto" ignored \u2014 only policy/user/flag settings may grant auto mode (projectSettings and localSettings are repo-controllable)', {
      level: "warn"
    }), i("tengu_settings_auto_mode_untrusted_source_ignored", {});else if (p) t("auto mode killswitch active (override- or payload-served) \u2014 falling back to default", {
      level: "warn"
    });else if (Ne(env.CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT) && T(settings_4)) t('settings defaultMode "auto" ignored \u2014 disableAutoMode is set and this is an unattended Remote Control machine session', {
      level: "warn"
    });else c.push("auto");
  }
  if (l) {
    let g = h;
    if (g) {
      if (g.unconsented && c.length === 0) notification = A;
      c.push(g.mode);
    }
  }
  let P;
  for (let mode of c) {
    if (mode === "bypassPermissions" && S) {
      t("bypassPermissions mode is disabled by settings", {
        level: "warn"
      }), notification = "Bypass permissions mode was disabled by settings";
      continue;
    }
    P = {
      mode: mode,
      notification: notification
    };
    break;
  }
  let fromAutoFallback = !1;
  if (!P) {
    let mode_2 = "default";
    if (M && (tcn() && (!cli.isNonInteractiveSession || zw() || x("tengu_moss_anchor", !1)) || Ne(env.CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT))) mode_2 = "auto", fromAutoFallback = !0;
    P = {
      mode: mode_2,
      notification: notification
    };
  }
  let C = P.mode,
    decidedByProactivityLevel = !1;
  return {
    mode: P.mode,
    notification: P.notification,
    fromAutoFallback: fromAutoFallback,
    baselineMode: C,
    decidedByProactivityLevel: decidedByProactivityLevel,
    modeSuppliedOnInvocation: modeSuppliedOnInvocation
  };
}
function Jxo(e) {
  let n = e.cli.fallbackModel ?? (Array.isArray(e.settings.fallbackModel) ? e.settings.fallbackModel : void 0);
  if (n === void 0) return;
  return ye(n, Vr);
}
function X0r(e) {
  return e.split(",").map(item => item.trim()).filter(item => item !== "");
}
function ye(e, n) {
  let r = typeof e === "string" ? X0r(e) : e,
    s = new Set(),
    d = [];
  for (let u of r) {
    let l = typeof u === "string" ? u.trim() : "";
    if (l === "") continue;
    let m = Tt(l === "default" ? bl() : l);
    if (s.has(m)) continue;
    if (!n(m)) continue;
    if (s.add(m), d.push(m), d.length === ve) break;
  }
  return d.length > 0 ? d : void 0;
}
var ve = 3;
function be(e) {
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
function _e(e, n, r) {
  if (H6()) {
    let lastSeenOrgDefaultUpdatedAt = _0o();
    if (lastSeenOrgDefaultUpdatedAt !== null && !n && Oxe().includes("userSettings") && new Date(lastSeenOrgDefaultUpdatedAt).getTime() > new Date(le().lastSeenOrgDefaultUpdatedAt ?? 0).getTime()) Ee(c => c.lastSeenOrgDefaultUpdatedAt === lastSeenOrgDefaultUpdatedAt ? c : {
      ...c,
      lastSeenOrgDefaultUpdatedAt: lastSeenOrgDefaultUpdatedAt
    }, r);
    if (Zdt() === null) return e;
    let M = e ? Nx("model") : null;
    if (M === "policySettings" || M === "flagSettings") return e;
    return;
  }
  let s = TFe();
  if (!s || Gqn() === null) return e;
  let d = e ? Nx("model") : null;
  if (d === "policySettings" || d === "flagSettings") return e;
  let u = Oxe().includes("userSettings"),
    lastSeenOrgDefaultUpdatedAt_2 = le().lastSeenOrgDefaultUpdatedAt,
    m = new Date(s.updated_at).getTime() > new Date(lastSeenOrgDefaultUpdatedAt_2 ?? 0).getTime(),
    E = m && !n && u,
    y = () => Ee(p => p.lastSeenOrgDefaultUpdatedAt === s.updated_at ? p : {
      ...p,
      lastSeenOrgDefaultUpdatedAt: s.updated_at
    }, r);
  if (s.override_user_selection) {
    if (E) y();
    return;
  }
  if (n) return e;
  let S = u ? he("userSettings")?.model : void 0;
  if (m && S) {
    if (ln("userSettings", {
      model: void 0
    }, void 0, r).then(p => {
      if (!p.error) y();
    }), d === "userSettings") return;
  } else if (E) y();
  return e;
}
function J0r(e, n) {
  let {
      cli: cli_2,
      env: env_2,
      settings: settings_5,
      agentFrontmatter: agentFrontmatter_2
    } = e,
    effectiveModel = cli_2.model === "default" ? bl() : cli_2.model,
    m = effectiveModel,
    settingLayer = null;
  if (effectiveModel) settingLayer = cli_2.model === "default" ? "cli_default" : "cli";
  let y = agentFrontmatter_2?.model,
    S;
  if (!effectiveModel && y && y !== "inherit") S = y, effectiveModel = Tt(y), m = y, settingLayer = agentFrontmatter_2?.modelSource === "routine" ? "routine_frontmatter" : "agent_frontmatter";
  let p = !1,
    modelWithoutStartupOverride,
    c = effectiveModel;
  if (c === void 0) {
    if (env_2.ANTHROPIC_MODEL) c = env_2.ANTHROPIC_MODEL, settingLayer = "env";else if (c = _e(settings_5.model || void 0, cli_2.isNonInteractiveSession === !0, n) || void 0, c !== void 0) settingLayer = be(Nx("model"));
    m = c;
  }
  let restrictedModel;
  if (c && !Vr(c)) {
    let L = S !== void 0 && !p ? S : c,
      C = p ? null : FS(L);
    if (C !== null) {
      if (restrictedModel = L, c = C, effectiveModel !== void 0) effectiveModel = C;
    } else {
      if (!(L.trim().toLowerCase() === "default" || INr(L)) && !p) restrictedModel = L;
      c = void 0, m = void 0, settingLayer = null, effectiveModel = void 0;
    }
  }
  let unservedModelSpelling;
  if (c && Uqn(c, Me(settingLayer) ? "persisted" : "explicit")) unservedModelSpelling = c, c = void 0, m = void 0, settingLayer = null, effectiveModel = void 0;
  let initialMainLoopModel = c || null,
    resolvedInitialModel = Tt(initialMainLoopModel ?? bl());
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
function Qxo(e) {
  let systemPrompt = e.cli.systemPrompt,
    appendSystemPrompt = e.cli.appendSystemPrompt,
    s = cHo();
  if (s) appendSystemPrompt = appendSystemPrompt ? `${appendSystemPrompt}

${s}` : s;
  return {
    systemPrompt: systemPrompt,
    appendSystemPrompt: appendSystemPrompt
  };
}
function tcn() {
  return x("tengu_harbor_willow", !0) || PFr()?.meadow_lantern === !0;
}
var Le = ["policySettings", "flagSettings", "userSettings"],
  xe = ["acceptEdits", "plan", "default", "auto"];
function k(e) {
  return xe.includes(e);
}
function V() {
  return Le.filter(ar);
}
function O(e) {
  return V().some(item => he(item)?.permissions?.defaultMode === e);
}
function T(e) {
  return e.permissions?.disableAutoMode === "disable" || e.disableAutoMode === "disable";
}
function BHe(e) {
  return !T(e) && !Q();
}
function ncn(e) {
  return V().map(item => Dm(he(item)?.permissions?.defaultMode)).find(item => item != null) === "plan" && Dm(e.permissions?.defaultMode) !== "plan";
}
function Pe(e) {
  let n = Dm(e.permissions?.defaultMode);
  if (n == null || !k(n)) return;
  if (n !== "auto") return n;
  return O("auto") && BHe(e) ? "auto" : void 0;
}
function rcn({
  gateOn: gateOn,
  permissionModeTyped: permissionModeTyped,
  dangerouslySkipPermissions: dangerouslySkipPermissions_2,
  scrubbed: scrubbed,
  settings: settings_6,
  effort: effort
}) {
  let l = !permissionModeTyped && !dangerouslySkipPermissions_2 && !scrubbed,
    settingsDefault = l ? Pe(settings_6) : void 0;
  return {
    considered: gateOn && l,
    settingsDefaultModePresent: settings_6.permissions?.defaultMode != null,
    settingsDefault: settingsDefault,
    permissionMode: gateOn ? settingsDefault : void 0,
    effort: gateOn ? effort : void 0
  };
}
function Zxo({
  sentMode: sentMode,
  repositorySettings: repositorySettings
}) {
  if (sentMode === "auto") return;
  if (sentMode !== void 0) return sentMode;
  let r = F(repositorySettings?.permissions?.defaultMode);
  return r !== void 0 && r !== "auto" && k(r) ? r : "default";
}
function ePo({
  seed: seed,
  settingsMode: settingsMode,
  sentMode: sentMode_2,
  startsIn: startsIn
}) {
  if (!seed.considered || !seed.settingsDefaultModePresent || seed.permissionMode !== void 0 || settingsMode === void 0 || sentMode_2 !== void 0 && F(settingsMode) === sentMode_2) return null;
  let d = F(settingsMode) === "auto" ? "auto mode could not be requested from this machine (it is off here, or only the repository asked for it)" : "not a mode a cloud session can start in";
  return {
    text: `Settings kept on this machine: the default permission mode in your settings (${settingsMode}) \u2014 ${d}${startsIn !== void 0 ? `; the session starts in ${startsIn} mode` : ""}`,
    level: "info"
  };
}
function F(e) {
  return e === void 0 ? void 0 : Hg(e);
}
var A = "Permission mode downgraded to default \u2014 bypass requires accepting the disclaimer interactively first";
function R(e) {
  if (!vt()) return !1;
  if (e === "bypassPermissions") return !q$t() && !le().bypassPermissionsModeAccepted;
  return !1;
}
function q(e, n, r) {
  let mode_3 = Qk(e);
  if (R(mode_3)) return {
    mode: "default",
    unconsented: !0
  };
  if (mode_3 === "auto" && n) {
    t(r, {
      level: "warn"
    });
    return;
  }
  return {
    mode: mode_3
  };
}
export { xle, yhe, UHe, Yxo, ecn, Xxo, j2n, Y0r, Jxo, X0r, J0r, Qxo, tcn, BHe, ncn, rcn, Zxo, ePo, W2n, tPo, fte, LS, m6, _he, fx, SLt, mx, Lk, S6e, z2n, G2n, wLt, hCe, V2n, jHe, Ple, sq, nPo, rPo, WHe, xct, g6, bhe, w6e, iN, zHe, q2n, $F, UF, v6e, oPo, RX, Q0r, Z0r, ocn, She, ql, k6e, Aw, scn, h6, yCe, iq, Pct, gx, Nk, vLt, aN, eMr, icn, sPo };