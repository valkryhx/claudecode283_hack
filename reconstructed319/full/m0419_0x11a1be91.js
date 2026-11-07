// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Ah
} from "B:/~BUN/root/chunk-vzhm698f.js";
import {
  ICe,
  iht,
  DGe,
  Stn,
  dNt,
  YEr,
  cNt,
  ktn,
  XEr,
  JEr,
  Aho,
  QEr,
  x7e
} from "B:/~BUN/root/chunk-4xvtrfzh.js";
import {
  U,
  L
} from "B:/~BUN/root/chunk-5ha2avah.js";

function oDn(e) {
  return dNt.test(e) || cQt(e)
}

function cQt(e) {
  return DGe.test(e) || Stn.test(e) || YEr.test(e) || XEr.test(e) || JEr.test(e) || Aho.test(e)
}

function ipt(e) {
  return e.type === "ERROR" || e.children.some(ipt)
}
var m = new Set(["program", "list", "pipeline"]),
  N = new Set(["&&", "||", "|", ";", "&", "|&", `
`]),
  pE = 1e4,
  F = 65536,
  H = 16,
  k = 128;

function Bg(e) {
  if (!e) return [];
  if (e.length > pE) return [e];
  let t = Ah().parse(e);
  if (!t) return [e];
  let r = [],
    s = (n) => {
      if (N.has(n.type) || n.type === "comment") return;
      if (n.type === "redirected_statement") {
        for (let i of n.children)
          if (!i.type.endsWith("_redirect")) s(i);
        return
      }
      if (m.has(n.type)) {
        for (let i of n.children) s(i);
        return
      }
      r.push(n.text)
    };
  return s(t.type === "ERROR" && t.children[0]?.type === "program" ? t.children[0] : t), r
}

function T(e) {
  switch (e.type) {
    case "ERROR":
      return !0;
    case "heredoc_redirect":
      if (!e.children.some((t) => t.type === "heredoc_body") || R(e) && /(?:^|[^\\])(?:\\\\)*`/.test(e.text)) return !0;
      break;
    case "heredoc_start":
      if (e.text.includes("$")) return !0;
      break;
    case "subscript":
      if (/\$\((?!\([^()]*\)\))|`|\$\{[ \t\n|]|\[.*\[/s.test(e.text)) return !0;
      return e.children.some((t) => t.type !== "word" && T(t));
    case "word":
      if (cNt.test(e.text)) return !0;
      break;
    case "regex":
    case "extglob_pattern":
      if (/(?:^|[^\\])(?:\\\\)*(?:`|\$\((?!\([^()]*\)\))|\$\{[ \t\n|]|[<>]\()/.test(e.text)) return !0;
      break
  }
  return e.children.some(T)
}

function Ehs(e) {
  return T(e) || pSr(e, {
    unparsedBodyOverruns: !0
  }) === null
}

function Ths(e) {
  if (e.length > pE) return !0;
  let t = Ah().parse(e);
  if (t?.type !== "program") return !0;
  let r = t;
  while (r !== void 0 && (m.has(r.type) || r.type === "redirected_statement")) {
    let s = r.children.findLastIndex((n) => !N.has(n.type) && n.type !== "comment" && !n.type.endsWith("_redirect"));
    if (r.type === "list" && r.children[s - 1]?.type === "&&") return !0;
    r = r.children[s]
  }
  return !1
}

function apt(e) {
  if (!e || e.length > pE) return [];
  let t = Ah().parse(e);
  return t ? Mco(t) : []
}

function Mco(e) {
  return pSr(e) ?? []
}

function pSr(e, {
  unparsedBodyOverruns: t = !1
} = {}) {
  let r = [],
    s = F,
    n = H,
    i = {
      first: [],
      second: []
    },
    o = !1,
    l = (c) => {
      if (o) return;
      if (c.type === "command") r.push(c.text), s -= c.text.length;
      let u = Fco(c);
      if (u !== null) n -= 1, s -= u.length;
      if (s < 0 || n < 0) {
        o = !0;
        return
      }
      if (u !== null) {
        let f = Ah()?.parse(u);
        if (f) l(f);
        else if (t) o = !0;
        return
      }
      Nco(c, i);
      for (let f of c.children) l(f)
    };
  if (l(e), o) return null;
  for (let {
      bodyRoot: c
    }
    of Dco(i)) {
    if (c) l(c);
    if (o) break
  }
  return r
}

function* Dco(e) {
  for (let t = 0; t < k; t += 1) {
    let r = e.first.shift() ?? e.second.shift();
    if (r === void 0) return;
    yield {
      body: r,
      bodyRoot: Ah()?.parse(r) ?? null
    }
  }
}

function Lco(e, t = {
  parsesLeft: k
}) {
  let r = t.parsesLeft > 0 ? v(e) : [];
  t.parsesLeft -= r.length;
  let s = r.flatMap((n) => Ah()?.parse(n) ?? []);
  return r.length > 0 && !/\\[`$\\]/.test(e.text) && U(s, (n) => n.type === "ERROR") === r.length || [...e.children, ...s].some((n) => Lco(n, t))
}

function Nco(e, t) {
  let [r, s] = v(e);
  if (r !== void 0) t.first.push(r);
  if (s !== void 0) t.second.push(s)
}

function v(e) {
  if (e.type !== "backtick_escape_unsupported") return [];
  return L([/\\([`$\\\n])/g, /\\([`$\\\n"])/g].map((t) => e.text.replace(t, (r, s) => s === `
` ? "" : s)))
}

function Fco(e) {
  if (e.type !== "expansion" && e.type !== "ERROR") return null;
  let t = e.text;
  if (!/^\$\{[ \t\n|]/.test(t)) return null;
  let r = t.endsWith("}") ? t.length - 1 : t.length;
  return t.slice(2, r).trim().replace(/^\|/, "").replace(/;$/, "").trim()
}

function sDn(e) {
  if (!e || e.length > pE) return null;
  let t = Ah().parse(e);
  if (!t) return null;
  return B(t)
}

function Hco(e) {
  if (!e || e.length > pE) return null;
  let t = Ah().parse(e);
  if (!t) return null;
  if (ipt(t) || QEr(t) !== null || P(t) || I(t) || $co(e)) return null;
  if (e.includes("`")) return null;
  let r = B(t);
  if (r === null) return null;
  return r.some(M) ? null : r
}
var W = /(?<!\$)\{|(?<=[$\\]\$)\{|\$'|\$"/,
  X = /[;&|<>\n]/,
  G = /(?:^|[ \t])[-/]/,
  Q = /[()]/;

function Y(e) {
  let t = e.search(/(?<!\$)\{|(?<=[$\\]\$)\{/);
  return t === -1 || /['"\\]/.test(e.slice(t))
}

function M(e) {
  if (W.test(e) && C(e)) return !0;
  let t = x7e(e),
    r = e.replace(/['"\\]/g, "");
  if (W.test(t) && (X.test(t) || Q.test(t) || G.test(r) && Y(e))) return !0;
  return Z.test(e) || K(e)
}
var Z = /\$\(|`|<\(|>\(|\$\[|\$\{[ \t\n|]/;

function K(e) {
  let t;
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    if (t !== void 0) {
      if (t === '"' && s === "\\") r++;
      else if (s === t) t = void 0;
      continue
    }
    if (s === "\\") {
      r++;
      continue
    }
    if (s === "'" || s === '"') {
      t = s;
      continue
    }
    if (s === "$" && e[r + 1] === '"') return !0
  }
  return !1
}
var z = new Set(["file_descriptor", "number", ">&", "<&"]);

function I(e) {
  if (e.type.endsWith("_redirect")) {
    if (!j(e)) return !0
  }
  return e.children.some(I)
}

function j(e) {
  let t = e.children.map((s) => s.type);
  if (!(t.length === 2 && t[0] !== "file_descriptor" || t.length === 3 && t[0] === "file_descriptor")) return !1;
  return e.children.every((s) => {
    if (!z.has(s.type) || s.children.length !== 0) return !1;
    return s.type === "number" || s.type === "file_descriptor" ? /^\d+$/.test(s.text) : !0
  })
}

function B(e) {
  let t = [],
    r = !0,
    s = (n) => {
      if (!r) return;
      if (N.has(n.type) || n.type === "comment") return;
      if (n.type === "redirected_statement") {
        for (let i of n.children) {
          if (i.type.endsWith("_redirect")) {
            if (E(i)) {
              r = !1;
              return
            }
            continue
          }
          s(i)
        }
        return
      }
      if (m.has(n.type)) {
        for (let i of n.children) s(i);
        return
      }
      if (n.type === "negated_command") {
        for (let i of n.children)
          if (i.type !== "!") s(i);
        return
      }
      if (n.type === "command" || n.type === "variable_assignment") {
        if (E(n)) {
          r = !1;
          return
        }
        t.push(n.text);
        return
      }
      r = !1
    };
  return s(e), r ? t : null
}

function E(e) {
  let t = e.type === "command" || e.type === "variable_assignment";
  for (let r of e.children) {
    if (r.type === "subshell" && t) return !0;
    if (E(r)) return !0
  }
  return !1
}

function $co(e) {
  if (!e) return !1;
  if (e.length > pE) return !0;
  let t = Ah()?.parse(e);
  if (!t) return !0;
  let r = !1,
    s = (n) => {
      if (r) return;
      if (n.type === "expansion" && n.text.includes("(")) {
        r = !0;
        return
      }
      for (let i of n.children) s(i)
    };
  return s(t), r
}

function XE(e) {
  if (!e || e.length > pE) return [];
  let t = Ah().parse(e);
  if (!t) return [];
  let r = ICe(t, null);
  if (!r) return [];
  return iht(r)
}
var S = new Set(["command_substitution", "process_substitution", "expansion", "simple_expansion", "arithmetic_expansion"]);

function b(e) {
  if (S.has(e.type)) return !0;
  return e.children.some(b)
}
var J = new Set(["command_substitution", "process_substitution", "arithmetic_expansion", "subshell"]);

function P(e) {
  if (J.has(e.type)) return !0;
  return e.children.some(P)
}
var V = new Set(["ansi_c_string", "translated_string"]);

function A(e) {
  if (V.has(e.type)) return !0;
  return e.children.some(A)
}
var q = new Set(["<", ">", ">>", "<<", "<<-", "<<<", "<&", ">&", "&>", "&>>", ">|", ">&-", "<&-", "file_descriptor", "heredoc_start", "heredoc_body", "heredoc_content", "heredoc_end"]);

function O(e) {
  if (e.type.endsWith("_redirect")) {
    let t = e.children.filter((i) => !q.has(i.type)),
      r = e.children.some((i) => i.type === ">&-" || i.type === "<&-"),
      s = !r && e.children.some((i) => i.type === ">&" || i.type === "<&") && t.some((i) => y(i).startsWith("-")),
      n = e.type === "heredoc_redirect" || r || s ? 0 : 1;
    if (t.length > n) return !0
  }
  return e.children.some(O)
}

function R(e) {
  if (e.type === "heredoc_redirect") {
    let r = e.children.find((n) => n.type === "heredoc_start")?.text ?? "";
    if (!(r.length >= 2 && (r.startsWith("'") && r.endsWith("'") || r.startsWith('"') && r.endsWith('"'))) || r.includes("\\")) return !0
  }
  return e.children.some(R)
}

function Chs(e, t) {
  if (!e) return !1;
  if (e.length > pE || oDn(e)) return !0;
  let r = Ah().parse(e);
  if (!r || ipt(r)) return !0;
  let s = (o) => O(o) || R(o) || b(o) || A(o) || o.type !== "heredoc_redirect" && C(o.text) || o.type !== "heredoc_redirect" && !o.children.every((l) => q.has(l.type) || w(l, /\s/.test(l.text))) || o.type !== "heredoc_redirect" && o.children.some((l) => l.type === "word" && l.text.startsWith("=")),
    n = (o) => {
      if (S.has(o.type)) return;
      if (o.type === "command") return o;
      let l;
      for (let c of o.children) {
        if (c.type.endsWith("_redirect")) continue;
        let u = n(c);
        if (u) l = u
      }
      return l
    },
    i = (o) => {
      if (S.has(o.type)) return !1;
      if (o.type === "redirected_statement") {
        let l = o.children.find((u) => u.type === "command") ?? n(o),
          c = l ? t(l.text) : !0;
        for (let u of o.children)
          if (u.type.endsWith("_redirect")) {
            if (c && s(u)) return !0
          } else if (i(u)) return !0;
        return !1
      }
      if (o.type === "command") {
        let l = t(o.text);
        for (let c of o.children)
          if (c.type.endsWith("_redirect")) {
            if (l && s(c)) return !0
          } else if (i(c)) return !0;
        return !1
      }
      if (o.type.endsWith("_redirect")) return s(o);
      return o.children.some(i)
    };
  return i(r)
}
var ee = new Set(["word", "string", "raw_string", "number"]),
  te = /(?:^|[^\\])(?:\\\\)*[;|&<>]/,
  re = /(?:^|[^\\])(?:\\\\)*\\$/;

function w(e, t = !1) {
  if (e.type === "concatenation") return e.children.every((r) => w(r, t));
  if (e.type === "word") {
    if (cNt.test(e.text)) return !1;
    if (te.test(e.text) || re.test(e.text)) return !1;
    if (t && ktn.test(e.text)) return !1;
    return !0
  }
  if (e.type === "string" || e.type === "raw_string") {
    let r = e.type === "raw_string" ? "'" : '"';
    return e.text.length >= 2 && e.text.startsWith(r) && e.text.endsWith(r)
  }
  return ee.has(e.type)
}

function C(e) {
  let t = null,
    r = !1,
    s = !1;
  for (let n = 0; n < e.length; n++) {
    let i = e[n];
    if (t === "'") {
      if (i === "'") t = null;
      continue
    }
    if (t === '"') {
      if (i === "\\" && n + 1 < e.length && '$`"\\'.includes(e[n + 1])) {
        n++;
        continue
      }
      if (i === "`") return !0;
      if (i === "$" && /[A-Za-z0-9_{(@*#?$!-]/.test(e[n + 1] ?? "")) return !0;
      if (i === '"') t = null;
      continue
    }
    if (i === "\\") {
      n++;
      continue
    }
    if (i === "`") return !0;
    if (i === "$" && (e[n + 1] === "'" || e[n + 1] === '"')) return !0;
    if (i === "$" && /[A-Za-z0-9_{(@*#?$!-]/.test(e[n + 1] ?? "")) return !0;
    if (i === "=" && e[n + 1] === "(") return !0;
    if (i === "*" || i === "?" || i === "[") return !0;
    if (i === "'" || i === '"') {
      t = i;
      continue
    }
    if (i === `
`) return !1;
    if (i === " " || i === "\t") {
      r = !1, s = !1;
      continue
    }
    if (i === "{") {
      r = !0;
      continue
    }
    if (r && (i === "," || i === "." && e[n + 1] === ".")) {
      s = !0;
      continue
    }
    if (i === "}" && r && s) return !0
  }
  return t !== null
}

function Rhs(e) {
  if (!e || e.length > pE) return !0;
  if (oDn(e)) return !0;
  if (C(e)) return !0;
  let t = Ah().parse(e);
  if (!t || ipt(t)) return !0;
  let r = t.children.filter((n) => n.type !== "comment");
  if (r.length !== 1 || r[0].type !== "command" && !(r[0].type === "redirected_statement" && r[0].children.some((n) => n.type === "command"))) return !0;
  if (b(t) || A(t) || O(t) || R(t)) return !0;
  let s = ICe(t, null);
  if (!s) return !0;
  for (let n of s.children) {
    if (n.type === "command_name" || n.type === "variable_assignment") continue;
    if (n.type.endsWith("_redirect")) continue;
    if (!w(n, /\s/.test(n.text))) return !0
  }
  return !1
}

function y(e) {
  switch (e.type) {
    case "raw_string":
      return e.text.slice(1, -1);
    case "string":
      return e.text.slice(1, -1).replace(/\\([$`"\\\n])/g, (t, r) => r === `
` ? "" : r);
    case "word":
      return e.text.replace(/\\([\s\S])/g, (t, r) => r === `
` ? "" : r);
    default:
      return e.text
  }
}

function FZ(e) {
  let t = {
    commandWithoutRedirections: e,
    redirections: [],
    hasDangerousRedirection: !1,
    dangerousRedirectionReason: void 0
  };
  if (!e || e.length > pE) return t;
  let r = Ah().parse(e);
  if (!r) return t;
  let s = [],
    n = !1,
    i, o = (u) => {
      if (u.type === "file_redirect") {
        let f = null,
          g = !1,
          d = null,
          D = 0;
        for (let a of u.children)
          if (a.type === ">" || a.type === "&>" || a.type === ">|") f = ">";
          else if (a.type === ">>" || a.type === "&>>" || a.type === ">>|") f = ">>";
        else if (a.type === ">&") f = ">", g = !0;
        else if (a.type === "<&") {
          let _ = u.children.filter((p) => p !== a && p.type !== "file_descriptor");
          if (_.length > 1 || _.some((p) => y(p).startsWith("-"))) {
            if (n = !0, i !== "network_device") i = "shell_expansion"
          }
          return
        } else if (a.type === ">&-" || a.type === "<&-") {
          if (u.children.filter((p) => p !== a && p.type !== "file_descriptor").length > 0) {
            if (n = !0, i !== "network_device") i = "shell_expansion"
          }
          return
        } else if (a.type === "<") {
          let _ = u.children.filter((x) => x !== a && x.type !== "file_descriptor");
          if (_.length > 1) {
            if (n = !0, i !== "network_device") i = "shell_expansion";
            return
          }
          let p = _[0];
          if (p) {
            let x = y(p);
            if (/^\/dev\/(tcp|udp)\//.test(x)) n = !0, i = "network_device"
          }
          return
        } else if (a.type !== "file_descriptor") d = a, D++;
        if (!f || !d) return;
        if (D > 1) {
          if (n = !0, i !== "network_device") i = "shell_expansion";
          return
        }
        if (g && y(d).startsWith("-")) {
          if (n = !0, i !== "network_device") i = "shell_expansion";
          return
        }
        if (d.type === "number" && d.children.length === 0 && g) return;
        if (!(d.type === "word" && d.children.length === 0 || d.type === "number" && d.children.length === 0 || d.type === "raw_string" || d.type === "string" && !d.children.some((a) => a.type !== "string_content" && a.type !== '"'))) {
          if (n = !0, i !== "network_device") i = "shell_expansion";
          return
        }
        let h = y(d);
        if (/^~|[*?[]/.test(h)) {
          if (n = !0, i !== "network_device") i = "shell_expansion";
          return
        }
        if (h.startsWith("!") || h.startsWith("=")) {
          if (n = !0, i !== "network_device") i = "shell_expansion";
          return
        }
        if (g && !/^[A-Za-z0-9./_-]+$/.test(h)) {
          if (n = !0, i !== "network_device") i = "shell_expansion";
          return
        }
        if (/^\/dev\/(tcp|udp)\//.test(h)) {
          n = !0, i = "network_device";
          return
        }
        s.push({
          target: h,
          operator: f
        });
        return
      }
      for (let f of u.children) o(f)
    };
  o(r);
  let l = [],
    c = (u) => {
      if (u.type === "comment") return;
      if (u.type === "redirected_statement") {
        for (let f of u.children)
          if (!f.type.endsWith("_redirect")) c(f);
        return
      }
      if (m.has(u.type)) {
        for (let f of u.children) c(f);
        return
      }
      l.push(u.text)
    };
  return c(r.type === "ERROR" && r.children[0]?.type === "program" ? r.children[0] : r), {
    commandWithoutRedirections: l.length > 0 ? l.join(" ") : e,
    redirections: s,
    hasDangerousRedirection: n,
    dangerousRedirectionReason: i
  }
}
export {
  oDn,
  cQt,
  ipt,
  pE,
  Bg,
  Ehs,
  Ths,
  apt,
  Mco,
  pSr,
  Dco,
  Lco,
  Nco,
  Fco,
  sDn,
  Hco,
  $co,
  XE,
  Chs,
  Rhs,
  FZ
};
