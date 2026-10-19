// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { ub } from "B:/~BUN/root/chunk-v1j2tw52.js";
import { dme, T9e, Ift, dPr, cPr, uPr, tNt, nNt, P2n, O2n, pPr, M2n, v1e } from "B:/~BUN/root/chunk-gjdk1btq.js";
function trn(e) {
  return cPr.test(e) || hzn(e);
}
function hzn(e) {
  return Ift.test(e) || dPr.test(e) || uPr.test(e) || P2n.test(e) || O2n.test(e) || pPr.test(e);
}
function R8e(e) {
  return e.type === "ERROR" || e.children.some(R8e);
}
var m = new Set(["program", "list", "pipeline"]),
  E = new Set(["&&", "||", "|", ";", "&", "|&", `
`]),
  dO = 1e4,
  P = 65536,
  U = 16;
function rg(e) {
  if (!e) return [];
  if (e.length > dO) return [e];
  let t = ub().parse(e);
  if (!t) return [e];
  let r = [],
    s = i => {
      if (E.has(i.type) || i.type === "comment") return;
      if (i.type === "redirected_statement") {
        for (let n of i.children) if (!n.type.endsWith("_redirect")) s(n);
        return;
      }
      if (m.has(i.type)) {
        for (let n of i.children) s(n);
        return;
      }
      r.push(i.text);
    };
  return s(t.type === "ERROR" && t.children[0]?.type === "program" ? t.children[0] : t), r;
}
function Yko(e) {
  if (e.length > dO) return !0;
  let t = ub().parse(e);
  if (t?.type !== "program") return !0;
  let r = t;
  while (r !== void 0 && (m.has(r.type) || r.type === "redirected_statement")) {
    let s = r.children.findLastIndex(i => !E.has(i.type) && i.type !== "comment" && !i.type.endsWith("_redirect"));
    if (r.type === "list" && r.children[s - 1]?.type === "&&") return !0;
    r = r.children[s];
  }
  return !1;
}
function Cpt(e) {
  if (!e || e.length > dO) return [];
  let t = ub().parse(e);
  return t ? bAr(t) : [];
}
function bAr(e) {
  let t = [],
    r = P,
    s = U,
    i = !1,
    n = o => {
      if (i) return;
      if (o.type === "command") t.push(o.text), r -= o.text.length;
      let u = SAr(o);
      if (u !== null) s -= 1, r -= u.length;
      if (r < 0 || s < 0) {
        i = !0;
        return;
      }
      if (u !== null) {
        let f = ub()?.parse(u);
        if (f) n(f);
        return;
      }
      for (let f of o.children) n(f);
    };
  return n(e), i ? [] : t;
}
function SAr(e) {
  if (e.type !== "expansion" && e.type !== "ERROR") return null;
  let t = e.text;
  if (!/^\$\{[ \t\n|]/.test(t)) return null;
  let r = t.endsWith("}") ? t.length - 1 : t.length;
  return t.slice(2, r).trim().replace(/^\|/, "").replace(/;$/, "").trim();
}
function nrn(e) {
  if (!e || e.length > dO) return null;
  let t = ub().parse(e);
  if (!t) return null;
  return W(t);
}
function wAr(e) {
  if (!e || e.length > dO) return null;
  let t = ub().parse(e);
  if (!t) return null;
  if (R8e(t) || M2n(t) !== null || I(t) || O(t) || vAr(e)) return null;
  if (e.includes("`")) return null;
  let r = W(t);
  if (r === null) return null;
  return r.some(X) ? null : r;
}
var D = /(?<!\$)\{|(?<=[$\\]\$)\{|\$'|\$"/,
  k = /[;&|<>\n]/,
  B = /(?:^|[ \t])[-/]/,
  F = /[()]/;
function H(e) {
  let t = e.search(/(?<!\$)\{|(?<=[$\\]\$)\{/);
  return t === -1 || /['"\\]/.test(e.slice(t));
}
function X(e) {
  if (D.test(e) && L(e)) return !0;
  let t = v1e(e),
    r = e.replace(/['"\\]/g, "");
  if (D.test(t) && (k.test(t) || F.test(t) || B.test(r) && H(e))) return !0;
  return Y.test(e) || G(e);
}
var Y = /\$\(|`|<\(|>\(|\$\[|\$\{[ \t\n|]/;
function G(e) {
  let t;
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    if (t !== void 0) {
      if (t === '"' && s === "\\") r++;else if (s === t) t = void 0;
      continue;
    }
    if (s === "\\") {
      r++;
      continue;
    }
    if (s === "'" || s === '"') {
      t = s;
      continue;
    }
    if (s === "$" && e[r + 1] === '"') return !0;
  }
  return !1;
}
var Z = new Set(["file_descriptor", "number", ">&", "<&"]);
function O(e) {
  if (e.type.endsWith("_redirect")) {
    if (!q(e)) return !0;
  }
  return e.children.some(O);
}
function q(e) {
  let t = e.children.map(item => item.type);
  if (!(t.length === 2 && t[0] !== "file_descriptor" || t.length === 3 && t[0] === "file_descriptor")) return !1;
  return e.children.every(item => {
    if (!Z.has(item.type) || item.children.length !== 0) return !1;
    return item.type === "number" || item.type === "file_descriptor" ? /^\d+$/.test(item.text) : !0;
  });
}
function W(e) {
  let t = [],
    r = !0,
    s = i => {
      if (!r) return;
      if (E.has(i.type) || i.type === "comment") return;
      if (i.type === "redirected_statement") {
        for (let n of i.children) {
          if (n.type.endsWith("_redirect")) {
            if (R(n)) {
              r = !1;
              return;
            }
            continue;
          }
          s(n);
        }
        return;
      }
      if (m.has(i.type)) {
        for (let n of i.children) s(n);
        return;
      }
      if (i.type === "negated_command") {
        for (let n of i.children) if (n.type !== "!") s(n);
        return;
      }
      if (i.type === "command" || i.type === "variable_assignment") {
        if (R(i)) {
          r = !1;
          return;
        }
        t.push(i.text);
        return;
      }
      r = !1;
    };
  return s(e), r ? t : null;
}
function R(e) {
  let t = e.type === "command" || e.type === "variable_assignment";
  for (let r of e.children) {
    if (r.type === "subshell" && t) return !0;
    if (R(r)) return !0;
  }
  return !1;
}
function vAr(e) {
  if (!e) return !1;
  if (e.length > dO) return !0;
  let t = ub()?.parse(e);
  if (!t) return !0;
  let r = !1,
    s = i => {
      if (r) return;
      if (i.type === "expansion" && i.text.includes("(")) {
        r = !0;
        return;
      }
      for (let n of i.children) s(n);
    };
  return s(t), r;
}
function mw(e) {
  if (!e || e.length > dO) return [];
  let t = ub().parse(e);
  if (!t) return [];
  let r = dme(t, null);
  if (!r) return [];
  return T9e(r);
}
var x = new Set(["command_substitution", "process_substitution", "expansion", "simple_expansion", "arithmetic_expansion"]);
function S(e) {
  if (x.has(e.type)) return !0;
  return e.children.some(S);
}
var M = new Set(["command_substitution", "process_substitution", "arithmetic_expansion", "subshell"]);
function I(e) {
  if (M.has(e.type)) return !0;
  return e.children.some(I);
}
var z = new Set(["ansi_c_string", "translated_string"]);
function N(e) {
  if (z.has(e.type)) return !0;
  return e.children.some(N);
}
var v = new Set(["<", ">", ">>", "<<", "<<-", "<<<", "<&", ">&", "&>", "&>>", ">|", ">&-", "<&-", "file_descriptor", "heredoc_start", "heredoc_body", "heredoc_content", "heredoc_end"]);
function A(e) {
  if (e.type.endsWith("_redirect")) {
    let t = e.children.filter(item => !v.has(item.type)),
      r = e.children.some(item => item.type === ">&-" || item.type === "<&-"),
      s = !r && e.children.some(item => item.type === ">&" || item.type === "<&") && t.some(item => y(item).startsWith("-")),
      i = e.type === "heredoc_redirect" || r || s ? 0 : 1;
    if (t.length > i) return !0;
  }
  return e.children.some(A);
}
function b(e) {
  if (e.type === "heredoc_redirect") {
    let r = e.children.find(item => item.type === "heredoc_start")?.text ?? "";
    if (!(r.length >= 2 && (r.startsWith("'") && r.endsWith("'") || r.startsWith('"') && r.endsWith('"'))) || r.includes("\\")) return !0;
  }
  return e.children.some(b);
}
function Xko(e, t) {
  if (!e) return !1;
  if (e.length > dO || trn(e)) return !0;
  let r = ub().parse(e);
  if (!r || R8e(r)) return !0;
  let s = o => A(o) || b(o) || S(o) || N(o) || o.type !== "heredoc_redirect" && L(o.text) || o.type !== "heredoc_redirect" && !o.children.every(item => v.has(item.type) || w(item, /\s/.test(item.text))) || o.type !== "heredoc_redirect" && o.children.some(item => item.type === "word" && item.text.startsWith("=")),
    i = o => {
      if (x.has(o.type)) return;
      if (o.type === "command") return o;
      let u;
      for (let f of o.children) {
        if (f.type.endsWith("_redirect")) continue;
        let l = i(f);
        if (l) u = l;
      }
      return u;
    },
    n = o => {
      if (x.has(o.type)) return !1;
      if (o.type === "redirected_statement") {
        let u = o.children.find(item => item.type === "command") ?? i(o),
          f = u ? t(u.text) : !0;
        for (let l of o.children) if (l.type.endsWith("_redirect")) {
          if (f && s(l)) return !0;
        } else if (n(l)) return !0;
        return !1;
      }
      if (o.type === "command") {
        let u = t(o.text);
        for (let f of o.children) if (f.type.endsWith("_redirect")) {
          if (u && s(f)) return !0;
        } else if (n(f)) return !0;
        return !1;
      }
      if (o.type.endsWith("_redirect")) return s(o);
      return o.children.some(n);
    };
  return n(r);
}
var K = new Set(["word", "string", "raw_string", "number"]),
  Q = /(?:^|[^\\])(?:\\\\)*[;|&<>]/,
  j = /(?:^|[^\\])(?:\\\\)*\\$/;
function w(e, t = !1) {
  if (e.type === "concatenation") return e.children.every(item => w(item, t));
  if (e.type === "word") {
    if (tNt.test(e.text)) return !1;
    if (Q.test(e.text) || j.test(e.text)) return !1;
    if (t && nNt.test(e.text)) return !1;
    return !0;
  }
  if (e.type === "string" || e.type === "raw_string") {
    let r = e.type === "raw_string" ? "'" : '"';
    return e.text.length >= 2 && e.text.startsWith(r) && e.text.endsWith(r);
  }
  return K.has(e.type);
}
function L(e) {
  let t = null,
    r = !1,
    s = !1;
  for (let i = 0; i < e.length; i++) {
    let n = e[i];
    if (t === "'") {
      if (n === "'") t = null;
      continue;
    }
    if (t === '"') {
      if (n === "\\" && i + 1 < e.length && '$`"\\'.includes(e[i + 1])) {
        i++;
        continue;
      }
      if (n === "`") return !0;
      if (n === "$" && /[A-Za-z0-9_{(@*#?$!-]/.test(e[i + 1] ?? "")) return !0;
      if (n === '"') t = null;
      continue;
    }
    if (n === "\\") {
      i++;
      continue;
    }
    if (n === "`") return !0;
    if (n === "$" && (e[i + 1] === "'" || e[i + 1] === '"')) return !0;
    if (n === "$" && /[A-Za-z0-9_{(@*#?$!-]/.test(e[i + 1] ?? "")) return !0;
    if (n === "=" && e[i + 1] === "(") return !0;
    if (n === "*" || n === "?" || n === "[") return !0;
    if (n === "'" || n === '"') {
      t = n;
      continue;
    }
    if (n === `
`) return !1;
    if (n === " " || n === "\t") {
      r = !1, s = !1;
      continue;
    }
    if (n === "{") {
      r = !0;
      continue;
    }
    if (r && (n === "," || n === "." && e[i + 1] === ".")) {
      s = !0;
      continue;
    }
    if (n === "}" && r && s) return !0;
  }
  return t !== null;
}
function yzn(e) {
  if (!e || e.length > dO) return !0;
  if (trn(e)) return !0;
  if (L(e)) return !0;
  let t = ub().parse(e);
  if (!t || R8e(t)) return !0;
  let r = t.children.filter(item => item.type !== "comment");
  if (r.length !== 1 || r[0].type !== "command" && !(r[0].type === "redirected_statement" && r[0].children.some(item => item.type === "command"))) return !0;
  if (S(t) || N(t) || A(t) || b(t)) return !0;
  let s = dme(t, null);
  if (!s) return !0;
  for (let i of s.children) {
    if (i.type === "command_name" || i.type === "variable_assignment") continue;
    if (i.type.endsWith("_redirect")) continue;
    if (!w(i, /\s/.test(i.text))) return !0;
  }
  return !1;
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
      return e.text;
  }
}
function Ive(commandWithoutRedirections) {
  let t = {
    commandWithoutRedirections: commandWithoutRedirections,
    redirections: [],
    hasDangerousRedirection: !1,
    dangerousRedirectionReason: void 0
  };
  if (!commandWithoutRedirections || commandWithoutRedirections.length > dO) return t;
  let r = ub().parse(commandWithoutRedirections);
  if (!r) return t;
  let redirections = [],
    hasDangerousRedirection = !1,
    dangerousRedirectionReason,
    o = l => {
      if (l.type === "file_redirect") {
        let operator = null,
          g = !1,
          a = null,
          C = 0;
        for (let c of l.children) if (c.type === ">" || c.type === "&>" || c.type === ">|") operator = ">";else if (c.type === ">>" || c.type === "&>>" || c.type === ">>|") operator = ">>";else if (c.type === ">&") operator = ">", g = !0;else if (c.type === "<&") {
          let _ = l.children.filter(item => item !== c && item.type !== "file_descriptor");
          if (_.length > 1 || _.some(item => y(item).startsWith("-"))) {
            if (hasDangerousRedirection = !0, dangerousRedirectionReason !== "network_device") dangerousRedirectionReason = "shell_expansion";
          }
          return;
        } else if (c.type === ">&-" || c.type === "<&-") {
          if (l.children.filter(item => item !== c && item.type !== "file_descriptor").length > 0) {
            if (hasDangerousRedirection = !0, dangerousRedirectionReason !== "network_device") dangerousRedirectionReason = "shell_expansion";
          }
          return;
        } else if (c.type === "<") {
          let _ = l.children.filter(item => item !== c && item.type !== "file_descriptor");
          if (_.length > 1) {
            if (hasDangerousRedirection = !0, dangerousRedirectionReason !== "network_device") dangerousRedirectionReason = "shell_expansion";
            return;
          }
          let p = _[0];
          if (p) {
            let T = y(p);
            if (/^\/dev\/(tcp|udp)\//.test(T)) hasDangerousRedirection = !0, dangerousRedirectionReason = "network_device";
          }
          return;
        } else if (c.type !== "file_descriptor") a = c, C++;
        if (!operator || !a) return;
        if (C > 1) {
          if (hasDangerousRedirection = !0, dangerousRedirectionReason !== "network_device") dangerousRedirectionReason = "shell_expansion";
          return;
        }
        if (g && y(a).startsWith("-")) {
          if (hasDangerousRedirection = !0, dangerousRedirectionReason !== "network_device") dangerousRedirectionReason = "shell_expansion";
          return;
        }
        if (a.type === "number" && a.children.length === 0 && g) return;
        if (!(a.type === "word" && a.children.length === 0 || a.type === "number" && a.children.length === 0 || a.type === "raw_string" || a.type === "string" && !a.children.some(item => item.type !== "string_content" && item.type !== '"'))) {
          if (hasDangerousRedirection = !0, dangerousRedirectionReason !== "network_device") dangerousRedirectionReason = "shell_expansion";
          return;
        }
        let target = y(a);
        if (/^~|[*?[]/.test(target)) {
          if (hasDangerousRedirection = !0, dangerousRedirectionReason !== "network_device") dangerousRedirectionReason = "shell_expansion";
          return;
        }
        if (target.startsWith("!") || target.startsWith("=")) {
          if (hasDangerousRedirection = !0, dangerousRedirectionReason !== "network_device") dangerousRedirectionReason = "shell_expansion";
          return;
        }
        if (g && !/^[A-Za-z0-9./_-]+$/.test(target)) {
          if (hasDangerousRedirection = !0, dangerousRedirectionReason !== "network_device") dangerousRedirectionReason = "shell_expansion";
          return;
        }
        if (/^\/dev\/(tcp|udp)\//.test(target)) {
          hasDangerousRedirection = !0, dangerousRedirectionReason = "network_device";
          return;
        }
        redirections.push({
          target: target,
          operator: operator
        });
        return;
      }
      for (let d of l.children) o(d);
    };
  o(r);
  let u = [],
    f = l => {
      if (l.type === "comment") return;
      if (l.type === "redirected_statement") {
        for (let d of l.children) if (!d.type.endsWith("_redirect")) f(d);
        return;
      }
      if (m.has(l.type)) {
        for (let d of l.children) f(d);
        return;
      }
      u.push(l.text);
    };
  return f(r.type === "ERROR" && r.children[0]?.type === "program" ? r.children[0] : r), {
    commandWithoutRedirections: u.length > 0 ? u.join(" ") : commandWithoutRedirections,
    redirections: redirections,
    hasDangerousRedirection: hasDangerousRedirection,
    dangerousRedirectionReason: dangerousRedirectionReason
  };
}
export { trn, hzn, R8e, dO, rg, Yko, Cpt, bAr, SAr, nrn, wAr, vAr, mw, Xko, yzn, Ive };