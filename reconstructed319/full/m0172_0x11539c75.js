// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  AsyncLocalStorage as F
} from "async_hooks";
var G = "tengu_tingly_pearl";
class _ {
  reader = null;
  register(e) {
    let t = this.reader;
    return this.reader = e, t
  }
}
var h = new _;

function bJi(e) {
  return h.register(e)
}

function Wjn() {
  let e = h.reader;
  if (!e) return !0;
  try {
    let {
      value: t,
      source: n,
      defaultHost: r
    } = e(G, !0);
    return t !== !1 || n !== "payload" || !r
  } catch {
    return !0
  }
}
var d = new F;
async function $Ut(e, t) {
  let n = {
    off: e,
    fired: !1
  };
  return {
    result: await d.run(n, t),
    fired: n.fired
  }
}

function O_t(e) {
  return d.run({
    off: !0,
    fired: !1
  }, e)
}

function I_t() {
  return d.getStore()?.off === !0
}

function zjn() {
  let e = d.getStore();
  if (e) e.fired = !0
}
import {
  AsyncLocalStorage as l
} from "async_hooks";
var O = "tengu_foamy_heron",
  P = "tengu_deep_locket",
  S = "bot_protected_tengu_gilded_abacus",
  v0s = /\$\$[({[]/,
  m = "tengu_moonlit_crayon",
  D = new Set("cat tee echo mkdir cd ls pwd touch cp mv chmod head tail wc grep jq diff true date sleep node python python3".split(" ")),
  k = {
    head_shell: "sh bash zsh dash ksh",
    head_wrapper: "timeout env nice nohup sudo xargs find time command exec",
    head_script_tool: "sed awk perl printf",
    head_git: "git",
    head_package_tool: "npm npx pnpm yarn bun pip pip3 make",
    head_fetch: "curl wget",
    head_keyword: "if for while until case"
  };

function H(e, t) {
  if (e === void 0) return /^\w+\+?=/.test(t) ? "head_assignment" : "head_not_bare";
  for (let [n, r] of Object.entries(k))
    if (r.split(" ").includes(e)) return n;
  return "head_other"
}
var B = /[\w.-]+(?=[ \t\n;|&<>]|$)/y,
  x = /&&(?![&|!])|\|\|?(?![|&])|;(?![;&])/y,
  v = /(?:[ \t\w%+,./:=@~^-]|\$(?:\w+(?!\w)|\{[A-Za-z_]\w*\})(?![[:])|"(?:[\n\t !#%-[\]-_a-~]|\$(?:\w+(?!\w)|\{[A-Za-z_]\w*\})(?![[:]))*"|>>?(?![>&|(])|<(?![<>&(\d-])|>&\d+(?=[ \t\n;|]|$))+/y,
  R = /<<(-?)[ \t]*(['"])(\w+)\2(?=[ \t\n;|&<>]|$)/y;

function E0s(e) {
  if (/[\0-\x08\x0b-\x1f\x7f]/.test(e)) return "control_byte";
  let t = [],
    n = !0,
    r = 0;
  while (r < e.length) {
    let u = e[r];
    if (u === `
`) {
      r++;
      for (let {
          name: a,
          stripsTabs: o
        }
        of t.splice(0))
        for (;;) {
          if (r >= e.length) return "open_heredoc";
          let f = e.indexOf(`
`, r),
            c = f === -1 ? e.length : f,
            p = e.slice(r, c);
          if (r = Math.min(c + 1, e.length), (o ? p.replace(/^\t+/, "") : p) === a) break
        }
      n = !0
    } else if (n && (u === " " || u === "\t")) r++;
    else if (n && u === "#") {
      let a = e.lastIndexOf(`
`, r - 1) + 1;
      if (/[^ \t]/.test(e.slice(a, r))) return "comment";
      let o = e.indexOf(`
`, r);
      r = o === -1 ? e.length : o
    } else if (!n && u === "'") {
      let a = e.indexOf("'", r + 1);
      if (a === -1) return "open_quote";
      r = a + 1
    } else {
      let a = n ? B : u === "<" && e[r + 1] === "<" ? R : "&|;".includes(u) ? x : v;
      a.lastIndex = r;
      let o = a.exec(e);
      if (n && !D.has(o?.[0] ?? "")) return H(o?.[0], e.slice(r, r + 80));
      if (o === null) return "construct";
      if (a === R) t.push({
        name: o[3],
        stripsTabs: o[1] === "-"
      });
      n = a === x, r += o[0].length
    }
  }
  return t.length === 0 ? void 0 : "open_heredoc"
}
class T {
  reader = null
}
var i = new T;

function SJi(e) {
  i.reader = e
}

function s(e) {
  let t = i.reader;
  if (!t) return !0;
  try {
    let {
      value: n,
      source: r,
      defaultHost: u
    } = t(e, !0);
    return n !== !1 || r !== "payload" || !u
  } catch {
    return !0
  }
}

function T0s() {
  return s(O)
}
var M_t = /\((?:\\+\n)*\(|\$(?:\\+\n)*\[/,
  A = new l,
  y = new l;

function wJi(e) {
  return y.run(!0, e)
}

function Gjn() {
  return y.getStore() === !0
}

function UDr(e) {
  return A.run(!0, e)
}

function C0s() {
  return A.getStore() === !0
}

function WTo() {
  return !C0s() && s(S)
}
var E = new l;

function R0s(e) {
  return E.run(!0, e)
}

function A0s() {
  return E.getStore() === !0
}

function x0s() {
  return !A0s() && s(P)
}

function P0s() {
  try {
    let e = i.reader?.(m, !1);
    return e?.value === !0 && e.source === "payload" && e.defaultHost
  } catch {
    return !1
  }
}

function upe(e) {
  return v0s.test(e) && x0s() && !(P0s() && E0s(e) === void 0)
}

function g(e, t) {
  return upe(e) ? R0s(t) : t()
}

function D_t(e, t) {
  return M_t.test(e) ? UDr(() => g(e, t)) : g(e, t)
}
class b {
  reader = null;
  register(e) {
    let t = this.reader;
    return this.reader = e, t
  }
}
var w = new b;

function kJi(e) {
  return w.register(e)
}

function O0s() {
  let e = w.reader;
  if (!e) return !0;
  try {
    let {
      value: t,
      source: n,
      defaultHost: r
    } = e("tengu_calm_nautilus", !0);
    return t !== !1 || n !== "payload" || !r
  } catch {
    return !0
  }
}
export {
  bJi,
  Wjn,
  $Ut,
  O_t,
  I_t,
  zjn,
  v0s,
  E0s,
  SJi,
  T0s,
  M_t,
  wJi,
  Gjn,
  UDr,
  C0s,
  WTo,
  R0s,
  A0s,
  x0s,
  P0s,
  upe,
  D_t,
  kJi,
  O0s
};
