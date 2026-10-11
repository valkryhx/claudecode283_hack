// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Ne,
  zo
} from "B:/~BUN/root/chunk-ekrhn4q1.js";
import {
  q,
  j,
  Y
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  c
} from "B:/~BUN/root/chunk-kks4mj3w.js";
import {
  $o
} from "B:/~BUN/root/chunk-54p0h65d.js";
import {
  IOo,
  xt,
  F6,
  it,
  rHt,
  Ute,
  Be,
  A0,
  M0,
  x,
  qs,
  cd,
  E4n
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  f
} from "B:/~BUN/root/chunk-zv3zxqya.js";
import {
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  i
} from "B:/~BUN/root/chunk-728mwbhs.js";
import {
  r9e
} from "B:/~BUN/root/chunk-snmb1kqg.js";
import {
  Fh,
  rc
} from "B:/~BUN/root/chunk-sd4cj2qx.js";
import {
  bo
} from "B:/~BUN/root/chunk-846280n0.js";
import {
  ht
} from "B:/~BUN/root/chunk-zmeajjrz.js";
import {
  yhe
} from "B:/~BUN/root/chunk-t1afcev5.js";
import {
  Jt,
  $x,
  Ln,
  Cf,
  HN
} from "B:/~BUN/root/chunk-r833zsf7.js";
import {
  o,
  C
} from "B:/~BUN/root/chunk-n8qdr73v.js";
var k = "tengu_fennel_godwit";

function Rln(e) {
  if (e === void 0) return !1;
  if (Fh(Be(e), "opus_5_prompt_bundle", e) !== !0) return !1;
  return !x(k, !1)
}

function m(e) {
  return !r9e() && Fh(e, "opus_5_5_prompt_bundle") === !0
}
var G = new Set(["turn_updates", "bash_output_audience_note", "silent_turn_reminder", "thinking_display_updates"]),
  H = new Set(["bison_cairn", "larch_cistern"]),
  z = new Set(["silent_turn_reminder", "quizzical_shore"]),
  V = 64,
  W = "tengu_model_capability_from_client_data",
  O = "tengu_model_capability_off_from_client_data";

function t1(e, n, r, l) {
  if (l !== void 0) return l;
  let s = Fh(n, e, r);
  if (s !== void 0) return s;
  let p = G.has(e) && yhe(n) || H.has(e) && Rln(r) || z.has(e) && m(n),
    u = E4n(r);
  if (p) {
    if (u?.data?.[e] !== !1) return !0;
    return y(O, e, u), !1
  }
  if (u?.data?.[e] !== !0) return !1;
  return y(W, e, u), !0
}

function y(e, n, r) {
  let l = r.model ?? Ln(it()),
    s = bo().clientDataCapabilityLogged ??= new Map,
    p = Y(),
    u = s.get(p);
  if (u === void 0) {
    if (u = new Set, s.set(p, u), s.size > V) {
      let S = s.keys().next().value;
      if (S !== void 0) s.delete(S)
    }
  }
  let _ = `${e===O?"-":""}${n}:${l}`;
  if (!u.has(_)) u.add(_), i(e, {
    capability: c(n),
    model: xt(l)
  })
}

function K(e, n) {
  if (Z() !== e) return !1;
  return t1("per_turn_effort", e, n)
}

function Z() {
  try {
    return Be(it())
  } catch {
    return null
  }
}
IOo(K);

function ixo(e) {
  return !1
}

function axo(e) {
  return Jt(e) === "claude-opus-4-8"
}

function lxo(e) {
  return !1
}
var J = new Set(["claude-opus-4-6", "claude-haiku-4-5", "claude-opus-4-5", "claude-opus-4-1", "claude-opus-4-0", "claude-sonnet-4-5", "claude-sonnet-4-0", "claude-3-7-sonnet", "claude-3-5-sonnet", "claude-3-5-haiku"]);

function E(e) {
  return J.has(Jt(e))
}

function YDt(e, n) {
  if (n === void 0) return E(e);
  return n.model !== void 0 && E(n.model)
}

function lhe(e) {
  return /-eap($|\[)/i.test(e)
}
var F = "tengu_loggia_roster",
  L = [],
  Q = f(() => C(o().trim())),
  h;

function X() {
  let e = x(F, L),
    n = h;
  if (n !== void 0 && n.raw === e) return n.ids;
  let r = Q().safeParse(e);
  if (!r.success) t(`GrowthBook: ${F} is not a JSON array of model ids; treating it as empty`, {
    level: "warn"
  });
  let l = r.success ? r.data : L;
  return h = {
    raw: e,
    ids: l
  }, l
}

function d2n(e) {
  return X().some((n) => $x(e, n))
}

function u2n(e) {
  let n = d();
  return F6() ? n.delegationCostsFirstCompiledOnly(e) : n.delegationCostsFirst(e)
}

function A(e) {
  if (e === void 0) return !1;
  let n = Be(e),
    r = Fh(n, "lucky_cerf", e);
  if (r === !1) return !1;
  if (F6()) return r === !0;
  if (t1("lucky_cerf", n, e)) return !0;
  let l = qs("tengu_lucky_cerf", null);
  return Array.isArray(l) && l.some((s) => typeof s === "string" && $x(n, s))
}

function B(e, n) {
  let r = cd()?.[e];
  return typeof r === "object" && r !== null && Object.entries(r).some(([l, s]) => s === !0 && n.includes(l))
}

function cxo(e) {
  return a.CLAUDE_CODE_BASALT_COVE || B("basalt_cove", e)
}
var I = "tengu_thrifty_sonic";

function ee() {
  let e = d();
  return F6() ? e.bashFirstSessionAssignmentCompiledOnly() : e.bashFirstSessionAssignment()
}

function R() {
  let e = cte(it()),
    n = Be(e),
    r = Fh(n, "thrifty_sonic", e);
  if (r === !1) return "none";
  if (yhe(n) || m(n) || cd()?.[I] === !0 || r) return "forced";
  return rHt(e) ? "cohort" : "none"
}

function XDt() {
  if (a.CLAUDE_CODE_THRIFTY_SONIC !== void 0) return a.CLAUDE_CODE_THRIFTY_SONIC;
  switch (ee()) {
    case "forced":
      return !0;
    case "none":
      return !1;
    case "cohort":
      return x(I, !1)
  }
}
var M = "tengu_cozy_teapot";

function P(e) {
  return e === "strict" || e === "relaxed" ? e : void 0
}

function dxo() {
  return a.CLAUDE_CODE_COZY_TEAPOT ?? d().bashFirstSteerVariant()
}

function ne() {
  return P(cd()?.[M]) ?? (m(Be(cte(it()))) ? "relaxed" : void 0) ?? P(qs(M, null)) ?? "strict"
}
var oe = "tengu_gorse_plover",
  te = "tengu_parchment_fern",
  b = "tengu_willow_tern";

function w(e, n) {
  return e || cd()?.[n] === !0 || x(n, !1)
}

function uxo() {
  let e = bo();
  return e.bashActFirstEnabled ??= w(a.CLAUDE_CODE_GORSE_PLOVER, oe), e.bashActFirstEnabled
}

function pxo(e) {
  return t1("amber_astrolabe", Be(e), e, a.CLAUDE_CODE_AMBER_ASTROLABE || void 0)
}

function fxo(e) {
  return t1("bison_cairn", Be(e), e, a.CLAUDE_CODE_BISON_CAIRN)
}

function mxo(e) {
  return t1("larch_cistern", Be(e), e, a.CLAUDE_CODE_LARCH_CISTERN || void 0)
}

function C0r() {
  let e = cd()?.[b];
  if (typeof e === "boolean") return e;
  if (e !== void 0) {
    let n = d();
    if (!n.unusableWritingOverrideTold) n.unusableWritingOverrideTold = !0, t(`willow_tern: ignoring non-boolean clientData ${b} value of type ${typeof e}`)
  }
  return
}

function gxo(e) {
  if (a.CLAUDE_CODE_WILLOW_TERN) return !0;
  let n = C0r();
  if (n !== void 0) return n;
  if (e === void 0) return !1;
  let r = Be(e);
  if (yhe(r)) return !0;
  if (Fh(r, "opus_5_prompt_bundle", e) !== !0) return !1;
  return x(b, !1)
}

function i6() {
  return a.CLAUDE_CODE_SIMPLE
}

function R0r(e) {
  let n = d();
  return F6() ? n.preReadLineDroppedCompiledOnly(e) : n.preReadLineDropped(e)
}

function Aln(e) {
  return e.preReadLineDropped ?? R0r(e.model)
}

function D(e) {
  if (e === void 0) return !1;
  if (E(Be(e))) return !1;
  return w(a.CLAUDE_CODE_PARCHMENT_FERN, te)
}

function re(e) {
  let n = Be(e),
    r = Fh(n, "lean_prompt", e);
  if (r !== void 0) return !r;
  if (lhe(e) || n === "claude-mythos-5") return !1;
  if (n.includes("claude-3-") || n.includes("haiku") || n.includes("sonnet") || n === "claude-opus-4-0" || n === "claude-opus-4-1" || n === "claude-opus-4-5" || n === "claude-opus-4-6" || n === "claude-opus-4-7") return !0;
  return !rc()
}

function tq(e) {
  let n = d();
  return F6() ? n.leanPromptCompiledOnly(e) : n.leanPrompt(e)
}

function wv(e) {
  return e.leanPrompt ?? tq(e.model)
}

function N(e) {
  if (!e) return !1;
  if (Ne(a.CLAUDE_CODE_SIMPLE_SYSTEM_PROMPT)) return !0;
  if (zo(a.CLAUDE_CODE_SIMPLE_SYSTEM_PROMPT)) return !1;
  if (!re(e)) return !0;
  if (x("tengu_velvet_tide", !1)) return !0;
  return B("simple_system_prompt", Be(e))
}
var ie = "breezy_horizon";

function cte(e) {
  if (e === void 0) return;
  let n = d();
  return F6() ? n.modelForPromptCompiledOnly(e) : n.modelForPrompt(e)
}

function hxo(e) {
  let n = d().modelForPrompt;
  return n.cache.has(e) ? n(e) : void 0
}

function T(e) {
  let n = a.CLAUDE_CODE_BREEZY_HORIZON;
  if (zo(n)) return e;
  let r = A0(e),
    l = cd()?.[ie],
    s = n ?? (typeof l === "object" && l !== null ? Object.entries(l).find(([_]) => _ === r)?.[1] : void 0);
  if (s === void 0) return e;
  let p = n !== void 0 ? "env" : "client_data";
  if (typeof s !== "string" || !ae(s)) return t(`[breezy_horizon] ${p}: ignoring ${String(s)} for ${r}: not a model id`, {
    level: "warn"
  }), e;
  let u = A0(s);
  if (u === r) {
    if (!HN(Cf(s))) t(`[breezy_horizon] ${p}: ${s} names ${r} itself, so it maps nothing`, {
      level: "warn"
    });
    return e
  }
  let g = d().promptModelSwapsLogged;
  if (!g.has(e)) g.add(e), i("tengu_breezy_horizon", {
    from_model: xt(r),
    to_model: xt(u),
    source: c(p)
  });
  return s
}

function ae(e) {
  return Ute(e) || !/\s/.test(e) && lhe(e) || HN(Cf(e))
}
class v {
  bashFirstSessionAssignment = $o(R);
  bashFirstSessionAssignmentCompiledOnly = $o(R);
  bashFirstSteerVariant = $o(ne);
  preReadLineDropped = $o(D);
  preReadLineDroppedCompiledOnly = $o(D);
  leanPrompt = $o(N);
  leanPromptCompiledOnly = $o(N);
  modelForPrompt = $o(T);
  modelForPromptCompiledOnly = $o(T);
  delegationCostsFirst = $o(A);
  delegationCostsFirstCompiledOnly = $o(A);
  promptModelSwapsLogged = new Set;
  unusableWritingOverrideTold = !1
}
var se = new q(() => new v);

function d() {
  return se.of(j().host)
}
var il = "REPL";

function A0r(e, n) {
  if (wv({
      model: e,
      leanPrompt: n
    })) return 'Fast file pattern matching. Supports glob patterns like "**/*.js" or "src/**/*.ts". Returns matching file paths sorted by modification time.';
  return M0() === "default" ? le : U
}
var U = `- Fast file pattern matching tool that works with any codebase size
- Supports glob patterns like "**/*.js" or "src/**/*.ts"
- Returns matching file paths sorted by modification time
- Use this tool when you need to find files by name patterns`,
  le = `${U}
- When you are doing an open ended search that may require multiple rounds of globbing and grepping, use the ${ht} tool instead (if available)`;
export {
  Rln,
  t1,
  ixo,
  axo,
  lxo,
  YDt,
  lhe,
  d2n,
  u2n,
  cxo,
  XDt,
  dxo,
  uxo,
  pxo,
  fxo,
  mxo,
  C0r,
  gxo,
  i6,
  R0r,
  Aln,
  tq,
  wv,
  cte,
  hxo,
  il,
  A0r
};
