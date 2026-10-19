// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Fe,
  ws
} from "B:/~BUN/root/chunk-rwkgcmm8.js";
import {
  gc,
  hL
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  tp,
  En,
  E,
  ir,
  Il
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  tu
} from "B:/~BUN/root/chunk-fbyz9h0p.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  gR,
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  oP
} from "B:/~BUN/root/chunk-gyr2a6wz.js";
import {
  wHo,
  ize
} from "B:/~BUN/root/chunk-1gpjpba6.js";
import {
  xe,
  xi
} from "B:/~BUN/root/chunk-8pmnanyd.js";
import {
  bB,
  SB
} from "B:/~BUN/root/chunk-kad4nq7y.js";
import {
  ea
} from "B:/~BUN/root/chunk-53tmhe2j.js";
import {
  Mn
} from "B:/~BUN/root/chunk-j0ghr71r.js";
var d = "force";

function l() {
  try {
    if (SB()) return !1;
    if (xe() !== "firstParty") return !1;
    let e = ize("ENABLE_TOOL_SEARCH");
    if (e === d) return !0;
    if (wHo() !== d) return !1;
    if (Fe(ize("CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS"))) return !1;
    return e === void 0 || !_(e)
  } catch (e) {
    return t(`isToolSearchForceOverride: settings read failed: ${e}`, {
      level: "error"
    }), !1
  }
}

function _(e) {
  if (e.startsWith("auto:")) {
    let r = tu(e.slice(5));
    return !isNaN(r) && r >= 100
  }
  return ws(e)
}

function Ion() {
  return bB() && !l()
}

function tPr(e, r) {
  let o = /^claude-([a-z]+)-(\d+(?:-\d+)*)$/.exec(e),
    n = o?.[1],
    u = o?.[2];
  if (!n || !u) return !1;
  let i = r.find(([s]) => s === n)?.[1];
  if (!i) return !1;
  let c = u.split("-").map(Number);
  for (let s = 0; s < Math.max(c.length, i.length); s++) {
    let f = (c[s] ?? 0) - (i[s] ?? 0);
    if (f !== 0) return f > 0
  }
  return !0
}

function KCo(e) {
  if (!e.startsWith("auto:")) return null;
  let r = e.slice(5),
    o = tu(r);
  if (isNaN(o)) return t(`Invalid ENABLE_TOOL_SEARCH value "${e}": expected auto:N where N is a number.`), null;
  return Math.max(0, Math.min(100, o))
}

function g(e) {
  if (!e) return !1;
  return e === "auto" || e.startsWith("auto:")
}

function ske() {
  if (Ion()) return "standard";
  if (l()) return "tst";
  let e = process.env.ENABLE_TOOL_SEARCH,
    r = e ? KCo(e) : null;
  if (r === 0) return "tst";
  if (r === 100) return "standard";
  if (g(e)) return "tst-auto";
  if (Fe(e)) return "tst";
  if (ws(e)) return "standard";
  return "tst"
}
var S = ["claude-3-opus", "claude-3-sonnet", "claude-3-haiku", "claude-3-5-sonnet", "claude-3-5-haiku", "claude-3-7-sonnet"],
  h = [
    ["opus", [4, 5]],
    ["sonnet", [4, 5]],
    ["haiku", [4, 5]]
  ];

function hae(e) {
  if (xe() !== "vertex") return !1;
  let r = Mn(e).replace(/[@-]\d{8}$/, "");
  if (/^claude-3(-|$)/.test(r)) return !0;
  return /^claude-(opus|sonnet|haiku)-\d/.test(r) && !tPr(r, h)
}

function y() {
  try {
    let e = E("tengu_tool_search_unsupported_models", null);
    if (Array.isArray(e)) return e
  } catch {}
  return S
}
var p = [];

function A(e) {
  if (e === null || Array.isArray(e) || typeof e !== "object") return e;
  let r = e,
    o = gc(),
    n = o !== void 0 ? o : hL();
  if (typeof n === "string") {
    let u = n.toLowerCase();
    for (let i of Object.keys(r))
      if (i !== "*" && i.length > 0 && u.includes(i.toLowerCase())) return r[i]
  }
  return r["*"]
}

function vM() {
  let e = new Set;
  try {
    let r = A(E("tengu_non_deferrable_builtins", null));
    if (Array.isArray(r)) {
      for (let o of r)
        if (typeof o === "string") e.add(o)
    }
  } catch {}
  try {
    let r = Il()?.non_deferrable_builtins;
    if (Array.isArray(r)) {
      for (let o of r)
        if (typeof o === "string") e.add(o)
    }
  } catch {}
  if (e.size === 0) return p;
  return [...e]
}

function hDs() {
  return ir("tengu_shiny_stardust", !1)
}

function m() {
  let e = ir("tengu_quirky_kazoo", p);
  return typeof e === "object" && e !== null ? e : {}
}

function yDs() {
  let e = m();
  return Array.isArray(e) ? e : Object.keys(e)
}

function _Ds(e) {
  let r = m(),
    o = Array.isArray(r) ? void 0 : r[e];
  return typeof o === "string" ? gR(o.replace(/\s+/g, " ").trim()) || void 0 : void 0
}
var T = "tengu_drifting_heron";

function bDs() {
  return ir(T, !0) !== !1
}
var b = "tengu_fancy_milner";

function nPr() {
  return tp() && ir(b, !0) !== !1
}

function yae(e) {
  let r = e.toLowerCase(),
    o = y();
  for (let n of o)
    if (r.includes(n.toLowerCase())) return !1;
  return !0
}

function jy() {
  let e = ske();
  if (e === "standard") {
    if (ea().claim("tool_search_optimistic_decision")) t(`[ToolSearch:optimistic] mode=${e}, ENABLE_TOOL_SEARCH=${a.ENABLE_TOOL_SEARCH}, result=false`);
    return !1
  }
  if (!a.ENABLE_TOOL_SEARCH && !l() && xe() === "firstParty" && !xi()) {
    if (ea().claim("tool_search_optimistic_decision")) t(`[ToolSearch:optimistic] disabled: ANTHROPIC_BASE_URL=${a.ANTHROPIC_BASE_URL} is not a first-party Anthropic host. Set ENABLE_TOOL_SEARCH=true (or auto / auto:N) if your proxy forwards tool_reference blocks.`);
    return !1
  }
  if (ea().claim("tool_search_optimistic_decision")) t(`[ToolSearch:optimistic] mode=${e}, ENABLE_TOOL_SEARCH=${a.ENABLE_TOOL_SEARCH}, result=true`);
  return !0
}

function rPr() {
  return E("tengu_surface_failed_mcp_servers", !0)
}

function Pft() {
  return E("tengu_sorted_otter", !1)
}

function SDs() {
  let {
    value: e,
    source: r
  } = En("tengu_precious_koala", "off"), o = typeof e === "string" ? e.trim().toLowerCase() : e, n = oP();
  return {
    inForce: o === "everywhere" || o === "hosted" && n,
    flagSource: r,
    coworkSurface: n
  }
}
export {
  Ion,
  tPr,
  KCo,
  ske,
  hae,
  vM,
  hDs,
  yDs,
  _Ds,
  bDs,
  nPr,
  yae,
  jy,
  rPr,
  Pft,
  SDs
};
