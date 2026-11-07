// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  Wr
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  Cf
} from "B:/~BUN/root/chunk-0s9zh2h6.js";
import {
  jji,
  Ah,
  nTr,
  Dho
} from "B:/~BUN/root/chunk-vzhm698f.js";
import {
  $Xi,
  SDr,
  jXi,
  WXi,
  Njn,
  VXi,
  KXi,
  qXi,
  RTo
} from "B:/~BUN/root/chunk-sjfczffk.js";
import {
  homedir as cn
} from "os";
import {
  isDeepStrictEqual as un
} from "util";

function iO(e) {
  return e.replace(/^.*[\\/]/, "").replace(/\.exe$/i, "")
}

function lNt(e) {
  return /^-[pvV]+$/.test(e) && /[vV]/.test(e)
}

function OCe(e, t) {
  return /^-[a-zA-Z]+$/.test(e) && [...t].some((n) => e.includes(n))
}

function Te(e) {
  return /^[+-][^iEF]*$/.test(e) && /[aA]/.test(e)
}

function Bji(e, t) {
  return /^-[a-z]+$/.test(e) && [...t].some((n) => e.includes(n))
}
var tt = 1e4,
  rn = new Set(["export", "declare", "typeset", "readonly", "local", "unset", "unsetenv"]),
  sn = new Set(["word", "string", "raw_string", "number"]),
  ve = new Set(["command_substitution", "process_substitution"]),
  Ne = new Set(["command", "declaration_command"]);
async function Rho(e) {
  if (!e || e.length > tt) return null;
  try {
    let t = Ah().parse(e);
    if (!t) return null;
    let n = ICe(t, null),
      s = an(n);
    return {
      rootNode: t,
      envVars: s,
      commandNode: n,
      originalCommand: e
    }
  } catch {
    return null
  }
}
var yE = Symbol("parse-aborted");
async function V2(e) {
  if (!e) return null;
  if (e.length > tt) return l("tengu_tree_sitter_parse_abort", {
    cmdLength: e.length,
    panic: !1
  }), yE;
  try {
    let t = Ah().parse(e);
    if (t === null) return l("tengu_tree_sitter_parse_abort", {
      cmdLength: e.length,
      panic: !1
    }), yE;
    return t
  } catch {
    return l("tengu_tree_sitter_parse_abort", {
      cmdLength: e.length,
      panic: !0
    }), yE
  }
}

function ICe(e, t) {
  let {
    type: n,
    children: s
  } = e;
  if (Ne.has(n)) return e;
  if (n === "variable_assignment" && t) return t.children.find((a) => Ne.has(a.type) && a.startIndex > e.startIndex) ?? null;
  if (n === "pipeline") {
    for (let a of s) {
      let r = ICe(a, e);
      if (r) return r
    }
    return null
  }
  if (n === "redirected_statement") return s.find((a) => Ne.has(a.type)) ?? null;
  for (let a of s) {
    let r = ICe(a, e);
    if (r) return r
  }
  return null
}

function an(e) {
  if (!e || e.type !== "command") return [];
  let t = [];
  for (let n of e.children)
    if (n.type === "variable_assignment") t.push(n.text);
    else if (n.type === "command_name" || n.type === "word") break;
  return t
}

function iht(e) {
  if (e.type === "declaration_command") {
    let s = e.children[0];
    return s && rn.has(s.text) ? [s.text] : []
  }
  let t = [],
    n = !1;
  for (let s of e.children) {
    if (s.type === "variable_assignment") continue;
    if (s.type === "command_name" || !n && s.type === "word") {
      n = !0;
      let a = s.children[0] ?? s;
      if (a.type === "concatenation") t.push(a.children.some((r) => ve.has(r.type)) ? a.text : a.children.map(pe).join(""));
      else t.push(pe(a));
      continue
    }
    if (sn.has(s.type)) t.push(pe(s));
    else if (s.type === "concatenation") {
      if (s.children.some((a) => ve.has(a.type))) break;
      t.push(s.children.map(pe).join(""))
    } else if (ve.has(s.type)) break
  }
  return t
}

function pe(e) {
  if (e.type === "word") return e.text.replace(/\\(.)/g, "$1");
  return on(e.text)
}

function on(e) {
  return e.length >= 2 && (e[0] === '"' && e.at(-1) === '"' || e[0] === "'" && e.at(-1) === "'") ? e.slice(1, -1) : e
}
import {
  AsyncLocalStorage as ln
} from "async_hooks";
var nt = new ln;
async function Vks(e, t) {
  let n = {
    accepted: e,
    refused: !1
  };
  return {
    result: await nt.run(n, t),
    refused: n.refused
  }
}

function btn() {
  let e = nt.getStore();
  if (e === void 0) return !0;
  return e.refused = !0, !e.accepted
}
var je = new Set(["program", "list", "pipeline", "redirected_statement"]),
  ye = new Set(["&&", "||", "|", ";", "&", "|&", `
`]),
  _t = new Set(["command", "pipeline", "list", "negated_command", "declaration_command", "unset_command"]),
  fn = new Set(["test_command", "redirected_statement"]),
  hee = "__CMDSUB_OUTPUT__",
  O = "__TRACKED_VAR__",
  dn = new Set(["file_redirect", "herestring_redirect", "heredoc_redirect"]),
  C = "__UNCERTAIN_VAR__";

function Hi(e) {
  return e.includes(hee) || e.includes(O) || e.includes(C)
}

function d3(e) {
  return e.replaceAll(hee, "$(\u2026)").replaceAll(O, "${\u2026}")
}

function dFn(e) {
  return e.replaceAll(hee, "").replaceAll(O, "")
}
var L = 0,
  _e = 0,
  W = 0,
  pn = /["`\\]/;

function hn(e, t) {
  return t > 0 && e[t - 1] === `
`
}

function Kks(e) {
  if (e.includes(O) || e.includes(C)) return !0;
  let t = e.indexOf(hee);
  while (t !== -1) {
    if (!hn(e, t)) return !0;
    t = e.indexOf(hee, t + hee.length)
  }
  return !1
}

function qks(e) {
  return e.startsWith(hee) || e.startsWith(O) || e.startsWith(C)
}
var rt = /[ \t\n*?[]/,
  mn = /^-[ioe]$/,
  gn = /^-[ioe]./,
  xn = /^--(input|output|error)=/,
  st = new Set(["BASHOPTS", "BASH_VERSINFO", "EUID", "PPID", "SHELLOPTS", "UID", "FUNCNAME", "GROUPS", "BASH_ARGC", "BASH_ARGV", "BASH_LINENO", "BASH_SOURCE", "BASHPID"]),
  Le = new Set(["HOME", "PWD", "OLDPWD", "USER", "LOGNAME", "SHELL", "PATH", "HOSTNAME", "UID", "EUID", "PPID", "RANDOM", "SECONDS", "LINENO", "TMPDIR", "BASH_VERSION", "BASHPID", "SHLVL", "HISTFILE", "IFS"]),
  yn = new Set(["?", "$", "!", "#", "0", "-"]),
  _n = new Set(["command_substitution", "process_substitution", "expansion", "simple_expansion", "brace_expression", "subshell", "compound_statement", "for_statement", "while_statement", "until_statement", "if_statement", "case_statement", "function_definition", "test_command", "ansi_c_string", "translated_string", "herestring_redirect", "heredoc_redirect"]),
  bn = [..._n];

function Yks(e) {
  if (!e) return -2;
  if (e === "ERROR") return -1;
  let t = bn.indexOf(e);
  return t >= 0 ? t + 1 : 0
}
var De = {
    ">": ">",
    ">>": ">>",
    "<": "<",
    ">&": ">&",
    "<&": "<&",
    ">|": ">|",
    "&>": "&>",
    "&>>": "&>>",
    "<<<": "<<<"
  },
  be = /\{[^\s]*(,|\.\.)[^\s]*\}/,
  Me = /\{[^{]*\\}/,
  ze = /\{[^}]*\\\{/,
  DGe = /[\x00-\x08\x0B-\x1F\x7F]/,
  Stn = /[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?<![\uD800-\uDBFF])[\uDC00-\uDFFF]/,
  wtn = /[\u00A0\u1680\u2000-\u200B\u2028\u2029\u202F\u205F\u3000\uFEFF]/,
  dNt = /\\[ \t]/,
  YEr = /(?:^|[^ \t\\])(?:\\\\)*\\\n|[ \t](?:\\\\)+\\\n|\\[ \t]\\\n/,
  kn = new RegExp(`${dNt.source}|${YEr.source}`),
  cNt = /(?:^|[^\\])(?:\\\\)*(?:[`$]|[<>=]\()/,
  ktn = /(?:^|[^\\])(?:\\\\)*['"]/,
  XEr = /~\[/,
  JEr = /(?:^|[\s;&|])=[a-zA-Z_]/,
  Aho = /<\d*-\d*>/,
  Rn = /\{[^}]*['"]/;

function z(e) {
  let t = !1,
    n = !1,
    s = !1,
    a = !0,
    r = 0;
  while (r < e.length) {
    let i = e[r];
    if (s)
      if (i === "\\" && (e[r + 1] === "`" || e[r + 1] === "\\" || e[r + 1] === "$")) r += 2;
      else {
        if (i === "`") s = !1;
        r++
      }
    else if (t) {
      if (i === "'") t = !1;
      r++
    } else if (n)
      if (i === "\\" && (e[r + 1] === '"' || e[r + 1] === "\\" || e[r + 1] === "`")) r += 2;
      else if (i === "`") s = !0, r++;
    else {
      if (i === '"') n = !1;
      r++
    } else if (i === "\\" && r + 1 < e.length) {
      if (e[r + 1] !== `
`) a = !1;
      r += 2
    } else if (i === "#" && a) {
      while (r < e.length && e[r] !== `
`) r++;
      a = !0
    } else if (i === "`") s = !0, a = !1, r++;
    else {
      if (i === "*" || i === "?" || i === "[") return !0;
      if (i === "'") t = !0;
      else if (i === '"') n = !0;
      a = i === " " || i === "\t" || i === `
` || i === ";" || i === "|" || i === "&" || i === "(" || i === ")" || i === "<" || i === ">", r++
    }
  }
  return !1
}
var wn = /[*?]|\[[^\]]*\]/;

function he(e) {
  return wn.test(e)
}

function vtn(e) {
  let t = e.argvUnquotedGlob;
  if (e.carveOutMayDesyncQuoteScan === !0 || t === void 0 && e.argv.some(Hi)) return e.argv.some(he) || e.redirects.some((s) => s.op !== "<<" && s.op !== "<<<" && he(s.target));
  if (t === void 0) return !1;
  if (t.length !== e.argv.length) return e.argv.some(he);
  return e.argv.some((s, a) => he(s) && (t[a] === !0 || Hi(s)))
}

function bt(e) {
  if (!e.includes("{")) return e;
  let t = [],
    n = !1,
    s = !1,
    a = !1,
    r = !0,
    i = 0;
  while (i < e.length) {
    let u = e[i];
    if (a)
      if (u === "\\" && (e[i + 1] === "`" || e[i + 1] === "\\" || e[i + 1] === "$")) t.push(u, e[i + 1]), i += 2;
      else {
        if (u === "`") a = !1;
        t.push(u === "{" ? " " : u), i++
      }
    else if (n) {
      if (u === "'") n = !1;
      t.push(u === "{" ? " " : u), i++
    } else if (s)
      if (u === "\\" && (e[i + 1] === '"' || e[i + 1] === "\\" || e[i + 1] === "`")) t.push(u, e[i + 1]), i += 2;
      else if (u === "`") a = !0, t.push(u), i++;
    else {
      if (u === '"') s = !1;
      t.push(u === "{" ? " " : u), i++
    } else if (u === "\\" && i + 1 < e.length) {
      if (t.push(u, e[i + 1]), e[i + 1] !== `
`) r = !1;
      i += 2
    } else if (u === "#" && r) {
      while (i < e.length && e[i] !== `
`) t.push(e[i]), i++;
      r = !0
    } else if (u === "`") a = !0, r = !1, t.push(u), i++;
    else {
      if (u === "'") n = !0;
      else if (u === '"') s = !0;
      r = u === " " || u === "\t" || u === `
` || u === ";" || u === "|" || u === "&" || u === "(" || u === ")" || u === "<" || u === ">", t.push(u), i++
    }
  }
  return t.join("")
}
var it = String.fromCharCode(36);

function $e(e, t) {
  if (e.type === t) return !0;
  for (let n of e.children)
    if (n && $e(n, t)) return !0;
  return !1
}
async function zI(e, {
  readsDivergentShapes: t = !1
} = {}) {
  if (e === "") return {
    kind: "simple",
    commands: [],
    bareAssignmentNames: []
  };
  let n = await V2(e);
  if (n === null) return {
    kind: "simple",
    commands: [],
    bareAssignmentNames: []
  };
  let s = iz(e, n, {
    readsDivergentShapes: t
  });
  if (n !== yE && (s.kind === "simple" || s.nodeType !== void 0)) return {
    ...s,
    tree: n
  };
  return s
}

function xho(e, t) {
  let n = (a) => Array.from({
    length: e
  }, (r, i) => a(i));
  if (e <= 3) return {
    readings: Array.from({
      length: 2 ** e
    }, (a, r) => n((i) => Math.floor(r / 2 ** i) % 2 === 1)),
    exhaustive: !0
  };
  let s = [n(() => !1), n(() => !0)];
  for (let a = 0; e <= 8 && a < e; a++) s.push(n((r) => r === a));
  if (t?.length === e && !s.some((a) => a.every((r, i) => r === t[i]))) s.push([...t]);
  return {
    readings: s,
    exhaustive: !1
  }
}

function iz(e, t, n = {}) {
  let s = at(e, t, n, "first");
  if (s.kind === "simple" && n.readsDivergentShapes !== !0 && t !== yE && Etn(e, t)) return {
    kind: "too-complex",
    reason: "A nested command in this command can't be checked before it runs",
    differential: !0,
    divergentShape: !0,
    keepsRemovalVerdict: !0
  };
  return s.kind === "simple" && s.hasLoop === !0 && WXi() && !un(s, at(e, t, n, "later")) ? {
    ...s,
    laterLoopPassesDiffer: !0
  } : s
}

function Etn(e, t) {
  return e.includes("(") && $Xi() && jji(t, Buffer.from(e, "utf8"))
}

function at(e, t, {
  plainUnquotedHeredocs: n = !1,
  declarationPrefix: s,
  readsDivergentShapes: a = !1,
  passesEscapedBlanks: r = !1
}, i) {
  if (Stn.test(e)) return {
    kind: "too-complex",
    reason: "Contains lone surrogate",
    differential: !0
  };
  if (DGe.test(e)) return {
    kind: "too-complex",
    reason: "Contains control characters",
    differential: !0
  };
  if (wtn.test(e)) return {
    kind: "too-complex",
    reason: "Contains Unicode whitespace",
    differential: !0
  };
  if ((r ? YEr : kn).test(e)) return {
    kind: "too-complex",
    reason: "Contains backslash-escaped whitespace",
    differential: !0
  };
  if (XEr.test(e)) return {
    kind: "too-complex",
    reason: "Contains zsh ~[ dynamic directory syntax",
    differential: !0
  };
  if (JEr.test(e)) return {
    kind: "too-complex",
    reason: "Contains zsh =cmd equals expansion",
    differential: !0
  };
  if (Aho.test(e)) return {
    kind: "too-complex",
    reason: "Contains zsh <N-M> numeric-range glob",
    differential: !0
  };
  if (Rn.test(bt(e))) return {
    kind: "too-complex",
    reason: "Contains brace with quote character (expansion obfuscation)",
    differential: !0
  };
  if (e.trim() === "") return {
    kind: "simple",
    commands: [],
    bareAssignmentNames: []
  };
  if (t === yE) return {
    kind: "too-complex",
    reason: "Parser aborted (timeout, resource limit, or over-length)",
    nodeType: "PARSE_ABORT"
  };
  for (let E of ["backtick_body_empty", "backtick_body_overrun", "backtick_escape_unsupported"])
    if ($e(t, E)) return {
      kind: "too-complex",
      reason: E === "backtick_body_empty" ? "empty backtick substitution \u2014 bash joins the surrounding words, so the parsed command boundaries cannot be trusted" : "backtick substitution scan could not be trusted (" + E + ") \u2014 the parsed bytes may differ from what bash executes",
      differential: !0
    };
  let o = Buffer.from(e, "utf8");
  {
    let E = At(t, o, 0);
    if (E) return E
  } {
    let E = St(t);
    if (E) return E
  }
  let f = (E) => E === 32 || E === 9 || E === 10 || E === 13 || E === 59 || E === 38,
    y = (E, K) => {
      let B = E;
      while (B < K) {
        let et = o[B];
        if (f(et)) B++;
        else if (et === 92 && (o[B + 1] === 10 || o[B + 1] === 13 && o[B + 2] === 10)) B += o[B + 1] === 13 ? 3 : 2;
        else break
      }
      return B
    },
    x = t.children.filter((E) => E !== null).map((E) => [E.startIndex, E.endIndex]).sort((E, K) => E[0] - K[0]),
    c = 0;
  for (let [E, K] of x) {
    if (y(c, E) < E) return {
      kind: "too-complex",
      reason: "Parser skipped input between top-level statements"
    };
    if (K > c) c = K
  }
  if (y(c, o.length) < o.length) return {
    kind: "too-complex",
    reason: "Parser did not consume trailing input"
  };
  {
    let E = Bt(t, o);
    if (E !== null) return {
      kind: "too-complex",
      reason: `Redirect uses ${Ke(E)} fd-variable assignment \u2014 modifies shell variable as side effect`
    }
  } {
    let E = Wt(t);
    if (E) return E
  }
  let h = a ? null : kt(t);
  if (h !== null) return {
    kind: "too-complex",
    reason: h,
    nodeType: "ERROR",
    differential: !0,
    divergentShape: !0
  };
  let d = te,
    m = v,
    p = H,
    g = ie,
    _ = U,
    b = V,
    k = F,
    A = Z,
    R = oe,
    T = q,
    N = G;
  G = !1;
  let de = ae,
    tn = Y,
    nn = j;
  ae = i === "later", Y = null, j = 0, te = n, v = a, H = !1, ie = e.length * qn, U = s, V = 0, F = new Map, Z = !1, oe = new Set, q = void 0;
  let P;
  try {
    if (P = Cn(t), G && P.kind === "simple") P = {
      ...P,
      usesAssignedValue: !0
    };
    if (Z && P.kind === "simple") P = {
      kind: "too-complex",
      reason: "A variable set in front of a declaration inside a branch or loop can't be checked before it runs"
    };
    let E = Un();
    if (s === void 0 && E !== void 0) P = {
      ...P,
      declarationPrefixes: E.length,
      declarationPrefixBashKeeps: E
    };
    if (s !== void 0 && P.kind === "simple" && Hn() !== s.length) P = {
      kind: "too-complex",
      reason: "The variables set in front of declarations in this command can't be checked before it runs"
    };
    if (H) P = {
      ...P,
      uncertainWrite: !0
    }
  } finally {
    te = d, v = m, H = p, ie = g, U = _, V = b, F = k, Z = A, oe = R, q = T, G = N, ae = de, Y = tn, j = nn
  }
  if (P.kind === "too-complex" && P.nodeType !== "ERROR" && (Rt(t) || wt(t))) return {
    ...P,
    nodeType: "ERROR"
  };
  return P
}

function kt(e) {
  if (e.children.length === 0) return e.startIndex === e.endIndex && !e.type.startsWith("heredoc_") ? "Parse error" : null;
  for (let t of e.children) {
    let n = t === null ? null : kt(t);
    if (n !== null) return n
  }
  return e.type === "test_command" && e.children[0]?.type === "[" && !/^\[[ \t]/.test(e.text) ? "[ glued to the next word names another command" : null
}

function Rt(e) {
  if (e.type === "ERROR" && (e.text.startsWith("${") || Et(e.text))) return !0;
  for (let t of e.children)
    if (t && Rt(t)) return !0;
  return !1
}

function wt(e) {
  let t = e.children;
  for (let n = 0; n < t.length; n++) {
    let s = t[n];
    if (!s) continue;
    if (s.type === "simple_expansion" && s.children.some((a) => a?.type === "special_variable_name" && a.text === "#")) {
      let a = "";
      for (let i = n + 1; i < t.length; i++) {
        let u = t[i]?.text ?? "";
        if (a += u, !/^[\w\u0080-\uffff]*$/.test(u)) break
      }
      let r = /^[\w\u0080-\uffff]*(?=\[|:[a-zA-Z&])/.exec(a);
      if (r && /[\u0080-\uffff]/.test(r[0])) return !0
    }
    if (wt(s)) return !0
  }
  return !1
}

function Et(e) {
  return /^\$[#^=~+]*[\w\u0080-\uffff]+$/.test(e) && /[\u0080-\uffff]/.test(e)
}

function At(e, t, n) {
  for (let s of e.children) {
    if (!s) continue;
    let a = s.startIndex - 1 - n;
    if (s.type === "comment" && a >= 0 && (t[a] === 41 || t[a] === 40)) return {
      kind: "too-complex",
      reason: "comment glued to a paren \u2014 bash reads `)#\u2026` and `(#\u2026` as a comment, but zsh reads a keyword- or word-glued `(\u2026)` as a glob group whose `#\u2026` text is word content that executes",
      differential: !0
    };
    let r = At(s, t, n);
    if (r) return r
  }
  for (let s of e.children) {
    if (!s) continue;
    if (s.type === "case_item" && !s.children.some((a) => a !== void 0 && a.type === ")") && Nt(s)) return {
      kind: "too-complex",
      reason: "`case` pattern group holds a comment \u2014 bash reads no comment inside a pattern list, but zsh reads the group as one glob word and expands its contents",
      differential: !0
    };
    if (s.type === "function" && !e.children.some((a) => a !== void 0 && a.type === "(")) {
      let a = e.children[1],
        r = e.children.find((u) => u !== void 0 && u.type === "redirected_statement")?.children[0],
        i = e.children.find((u) => u !== void 0 && u.type === "subshell") ?? (r?.type === "subshell" ? r : void 0);
      if (a !== void 0 && i !== void 0 && In(t, a.endIndex - n, i.startIndex - n)) return {
        kind: "too-complex",
        reason: "`function` with a parenthesised body and no `()` \u2014 bash reads a subshell body, but zsh reads one glob-group word and expands its contents",
        differential: !0
      }
    }
    if (En.has(s.type) && t[s.endIndex - n] === 40) return {
      kind: "too-complex",
      reason: `\`${s.type}\` glued to a paren \u2014 bash reads a keyword and a subshell, but zsh reads one glob-group word and expands its contents`,
      differential: !0
    }
  }
  return null
}
var En = new Set(["if", "elif", "else", "while", "until", "case"]);

function St(e) {
  if (e.type === "declaration_command" || e.type === "unset_command") {
    if (e.type === "declaration_command" && e.children.some((r) => r !== void 0 && (/^(?:export|readonly)$/.test(e.children[0]?.text ?? "") ? $n : Ye).test(D(r.text))) && !ee(e)) return {
      kind: "too-complex",
      reason: `${e.children[0]?.text??"declare"} with a flag that changes assignment semantics and an operand it would evaluate`,
      differential: !0
    };
    let t = e.type === "unset_command" || /^(?:declare|typeset|local|export)$/.test(e.children[0]?.text ?? ""),
      n = /^(?:declare|typeset|local)$/.test(e.children[0]?.text ?? ""),
      s = e.children.some((r) => r !== void 0 && /^[-+][A-Za-z]*[fF]/.test(D(r.text))),
      a;
    for (let [r, i] of e.children.entries()) {
      if (!i) continue;
      if (r > 1 && a !== void 0 && i.type !== "variable_assignment" && i.startIndex === a.endIndex) return {
        kind: "too-complex",
        reason: `${e.children[0]?.text??e.type} operand '${a.text}${i.text}' is split across adjacent quoted segments \u2014 the shell joins them into one word the analyzer cannot verify`,
        differential: !0
      };
      if (r > 0 && i.type === "ansi_c_string" && /^\$'[-+]/.test(i.text)) return {
        kind: "too-complex",
        reason: `${e.children[0]?.text??e.type} flag ${i.text} \u2014 a $'\u2026' flag word the shell decodes`,
        differential: !0
      };
      if (r > 0 && !/^[-+]/.test(D(i.text))) {
        let u = i.type === "word" || i.type === "raw_string" || i.type === "concatenation" || i.type === "variable_name" || i.type === "number";
        if (i.type === "ansi_c_string" && (t || e.children[0]?.text === "readonly")) return {
          kind: "too-complex",
          reason: `${e.children[0]?.text??e.type} operand ${i.text} \u2014 a $'\u2026' word the shell decodes, which may carry a subscript the parser cannot read`,
          differential: !0
        };
        if (n) {
          if (!we(i, s)) return {
            kind: "too-complex",
            reason: `${e.children[0]?.text??"declare"} operand '${i.text}' is not a plain NAME with an inert value \u2014 the shell may re-parse it as a subscript, an expanded name or a compound assignment`,
            differential: !0
          };
          a = i;
          continue
        }
        let o = Q(i.text),
          f = /^['"]?[A-Za-z_]\w*=/.test(i.text),
          y = u ? t && o.includes("[") || (f ? o.slice(1).includes("\\") : i.text.slice(1).includes("\\")) : i.type === "string" && (f ? o.includes("\\") : i.text.includes("\\")),
          x = i.type === "variable_assignment" && /['\\]/.test(Q(i.text)),
          c = u && t && /^['"]?\$/.test(o) && /[[`'"]/.test(i.text);
        if (y || x || c) return {
          kind: "too-complex",
          reason: `${e.children[0]?.text??e.type} operand '${i.text}' carries a subscript or escape the shell evaluates \u2014 the parser read it as literal text`,
          differential: !0
        };
        if (i.type === "variable_name" ? !(re.test(i.text) || s && ke.test(i.text)) : (i.type === "word" || i.type === "concatenation" || i.type === "raw_string" || i.type === "string" && Q(i.text) !== i.text) && !lt(i.text, s, e.children[0]?.text === "readonly")) return {
          kind: "too-complex",
          reason: `${e.children[0]?.text??e.type} operand '${i.text}' is not a plain variable name \u2014 the shell expands or matches it before assigning`,
          differential: !0
        }
      }
      a = i
    }
  }
  if (e.type === "command") {
    let t = e.children.find((a) => a !== void 0 && a.type === "command_name"),
      n = t === void 0 ? -1 : e.children.indexOf(t),
      s = e.children.filter((a, r) => a !== void 0 && r > n && a.type !== "command_name");
    if (t !== void 0) {
      if (Re(t) && s.some((f) => !/^[-+]/.test(D(f.text)))) return {
        kind: "too-complex",
        reason: `command head ${t.text} \u2014 a $'\u2026' word the shell decodes before looking the command up`,
        differential: !0
      };
      let a = Ie(t.text),
        r = s,
        i = !1,
        u = !1;
      while (An.test(a) && r.length > 0) {
        i = !0;
        while (r.length > 0 && /^-/.test(D(r[0].text))) {
          let f = D(r[0].text);
          if (a === "command" && /^-[pP]*[vV]/.test(f)) u = !0;
          r = r.slice(a === "exec" && /^-[cl]*a$/.test(f) ? 2 : 1)
        }
        if (!u && r.length > 0 && Re(r[0]) && r.slice(1).some((f) => !/^[-+]/.test(D(f.text)))) return {
          kind: "too-complex",
          reason: `command head ${r[0].text} after ${a} \u2014 a $'\u2026' word the shell decodes before looking the command up`,
          differential: !0
        };
        a = r.length > 0 ? Ie(r[0].text) : "", r = r.slice(1)
      }
      let o = i || Ie(t.text) !== t.text || ot.test(t.text);
      if (!u && o && ot.test(a)) {
        let f = a === "integer" || a === "float",
          y = {
            ...e,
            children: [t, ...f ? [{
              ...t,
              text: "-i"
            }] : [], ...r]
          },
          x = r.map((p) => D(p.text)).filter((p) => /^[-+]/.test(p)).join(""),
          c = f || /^(?:declare|typeset|local|private)$/.test(a) && Sn.test(x) || /^(?:export|readonly)$/.test(a) && Tn.test(x),
          h = r.filter((p) => !/^[-+]/.test(D(p.text))),
          d = /[fF]/.test(x),
          m = c && !ee(y) || r.some((p) => p.type === "ansi_c_string" && /^\$'[-+]/.test(p.text));
        if (/^(?:declare|typeset|local|integer|float|private)$/.test(a)) m ||= h.some((p) => !we(p, d));
        else m ||= h.some((p) => {
          if (p.type === "ansi_c_string") return !0;
          let g = Q(p.text);
          return /[\\'"]/.test(g.replace(/^['"]/, "").replace(/['"]$/, "")) || a !== "readonly" && g.includes("[") || /^['"]?\$/.test(g) || (p.type === "word" || p.type === "concatenation" || p.type === "raw_string" || p.type === "string" && Q(p.text) !== p.text) && !lt(p.text, d, a === "readonly")
        });
        if (m) return {
          kind: "too-complex",
          reason: `${a} spelled '${i?`${t.text} \u2026`:t.text}' with an operand the shell would evaluate \u2014 the parser did not read this as a declaration`,
          differential: !0
        }
      }
    }
  }
  for (let t of e.children) {
    if (!t) continue;
    let n = St(t);
    if (n) return n
  }
  return null
}
var An = /^(?:builtin|command|exec|time|coproc|noglob|nocorrect|-)$/,
  ot = /^(?:declare|typeset|local|export|readonly|unset|integer|float|private)$/,
  Ye = /^[-+].*[nialuAEFLRZ]/,
  Sn = /[nialuAEFLRZ]/,
  $n = /^[-+].*[aAiluEFLRZ]/,
  Tn = /[aAiluEFLRZ]/,
  Pe = {
    assigning: /^[-+][rtx]+$/,
    listing: /^(?:-[fgprtxU]+|\+[grtx]+)$/
  },
  vn = new Map([
    ["declare", Pe],
    ["typeset", Pe],
    ["local", {
      assigning: Pe.assigning,
      listing: /^-[fprtx]+$/
    }],
    ["export", {
      listing: /^-[aAfnp]+$/
    }],
    ["readonly", {
      listing: /^-[aAfpx]+$/
    }]
  ]);

function $t(e, t) {
  let n = vn.get(e),
    s = new Set,
    a = e === "readonly",
    r = !1,
    i;
  for (let u of t)
    if (!/^[-+]/.test(u)) {
      if (i !== void 0 && u.includes("=")) return `${e} ${i} with an assignment \u2014 not every supported bash and zsh assigns under that option, so the value cannot be statically verified`;
      let o = u.replace(/\+?=.*/s, "");
      if (a && u.includes("=") && s.has(o)) return `${e} names '${d3(o)}' twice \u2014 the first makes it read-only, so bash does not carry out the second`;
      s.add(o), r = !0
    } else if (r) return `${e} word '${d3(u)}' comes after the options \u2014 the shell reads it as a name, which it cannot be, and bash and zsh go on from that error differently`;
  else if (u === "--") r = !0;
  else if (n?.assigning?.test(u)) a ||= /^-.*r/.test(u);
  else if (n?.listing.test(u)) i ??= u;
  else return `${e} option '${d3(u)}' is not one bash and zsh are both known to accept \u2014 a shell that rejects it assigns nothing, so the names it declares cannot be statically verified`;
  return null
}

function Tt(e, t) {
  let n = t.filter((s) => !/^[-+]/.test(s));
  if (e === "local" && n.some((s) => s.includes("="))) return "'local' outside a function \u2014 bash refuses that and assigns nothing, so the value cannot be statically verified";
  if ((e === "export" || e === "readonly") && n.length > 0 && t.some(Te)) return `'${e}' gives a name the array attribute \u2014 zsh empties a value it held and bash keeps it, so it cannot be statically verified`;
  return null
}
var re = /^[A-Za-z_][A-Za-z0-9_]*$/,
  ke = /^[A-Za-z_][\w.:-]*$/;

function lt(e, t, n = !1) {
  let s = Q(e),
    a = e[0];
  if (a === "'" || a === '"') {
    if (s = s.slice(1), s.endsWith(a)) s = s.slice(0, -1)
  } else if (/^\\[A-Za-z_]/.test(s)) s = s.slice(1);
  if (n && (a === "'" || a === '"')) {
    let r = e.indexOf("["),
      i = e.indexOf(a, 1);
    if (r > 0 && i > r) s = s.replace(/\[[\s\S]*$/, "")
  }
  return s = s.replace(/\+$/, ""), re.test(s) || t && ke.test(s)
}

function Re(e) {
  return e.type === "ansi_c_string" || e.children.some((t) => t !== void 0 && Re(t))
}

function Ie(e) {
  return e.replace(/\$(['"])/g, "$1").replace(/["'\\]/g, "")
}
var Nn = new Set(["command_substitution", "process_substitution", "arithmetic_expansion", "expansion", "simple_expansion"]),
  Fe = "$_";

function Pn(e) {
  let t = [],
    n = (i) => {
      for (let u of i.children) {
        if (!u) continue;
        if (Nn.has(u.type)) t.push([u.startIndex - e.startIndex, u.endIndex - e.startIndex]);
        else n(u)
      }
    };
  if (n(e), t.length === 0) return e.text;
  t.sort((i, u) => i[0] - u[0]);
  let s = Buffer.from(e.text, "utf8"),
    a = "",
    r = 0;
  for (let [i, u] of t) {
    if (i < r || u > s.length) return e.text;
    a += s.subarray(r, i).toString("utf8") + Fe, r = u
  }
  return a + s.subarray(r).toString("utf8")
}

function vt(e) {
  if (e.type === "expansion" && e.text.replace(/\$\(\(?|[<>]\(/g, "").includes("(")) return !0;
  return e.children.some((t) => t !== void 0 && vt(t))
}

function we(e, t) {
  if (e.type === "number" || /^\d+$/.test(e.text)) return !0;
  let n = Pn(e);
  if (e.type !== "raw_string" && e.type !== "string" && be.test(bt(n))) return !1;
  let s = /^['"]/.test(n) ? n.slice(1) : n,
    a = s.indexOf("="),
    r = (a < 0 ? s : s.slice(0, a)).replace(/\+$/, "");
  if (!(t ? /^[A-Za-z_][\w.:-]*['"]?$/ : /^[A-Za-z_]\w*['"]?$/).test(r)) return !1;
  if (a < 0) return !0;
  if (e.children.find((f, y) => f !== void 0 && y >= 2 && f.type !== "=" && f.type !== "+=")?.type === "array") return !0;
  if (Re(e) || /\$'./.test(n)) return !1;
  if (vt(e)) return !1;
  let o = s.slice(a + 1);
  for (;;)
    if (/^[\\'"]/.test(o)) o = o.slice(1);
    else if (/^\$['"]/.test(o)) o = o.slice(2);
  else if (o.startsWith(Fe)) o = o.slice(Fe.length);
  else break;
  return !o.startsWith("(")
}

function Q(e) {
  let t = 0,
    n = null,
    s = e[0] === "'" || e[0] === '"' ? e[0] : null;
  for (let a = s === null ? 0 : 1; a < e.length; a += 1) {
    let r = e[a];
    if (n !== null) {
      if (r === n) n = null
    } else if ((r === "'" || r === '"') && r !== s) n = r;
    else if (r === "[") t += 1;
    else if (r === "]" && t > 0) t -= 1;
    else if (r === "=" && t === 0) return e.slice(0, a)
  }
  return e
}

function Nt(e) {
  return e.children.some((t) => t !== void 0 && (t.type === "comment" || Nt(t)))
}

function In(e, t, n) {
  let s = t;
  while (s < n) {
    let a = e[s];
    if (a === 32 || a === 9) s += 1;
    else if (a === 92 && e[s + 1] === 10) s += 2;
    else return !1
  }
  return !0
}

function ee(e) {
  let t = e.children.map((a) => a === void 0 ? "" : D(a.text)).filter((a) => /^[-+]/.test(a)).join(""),
    s = /[iEF]/.test(t) ? /^[A-Za-z_][\w.-]*=(?:(['"]?)[0-9+\-*\/% ().]*\1|\([0-9+\-*\/% ().\s]*\))$/ : /^[A-Za-z_][\w.-]*(?:\+?=(?:(['"]?)[\w.\/ -]*\1|\([\w\s.\/-]*\)))?$/;
  return e.children.every((a, r) => {
    if (!a || r === 0 || /^[-+]/.test(D(a.text))) return !0;
    return s.test(a.text)
  })
}

function D(e) {
  let t = /^\$?(['"])([-+][^'"]*)\1$/.exec(e);
  if (t) return t[2];
  return /^\\[-+]/.test(e) ? e.slice(1) : e
}
var Pt = new Set(["for_statement", "while_statement"]),
  On = 5;

function ct(e) {
  return Pt.has(e.type) && Cf()
}

function Cn(e) {
  let t = QEr(e);
  if (t) return t;
  let n = [],
    s = new Map,
    a = [],
    r = I(e, n, s, a);
  if (r) return r;
  let i = [...Pt].some((o) => $e(e, o)),
    u = i ? void 0 : n.at(-1);
  for (let o of v ? [] : n) {
    let [f = "", ...y] = o.argv, x = Xt(f, y) ?? (o === u ? null : Tt(f, y));
    if (x !== null) return {
      kind: "too-complex",
      reason: x,
      divergentShape: !0,
      ...o.argvUnquotedGlob === void 0 && {
        nodeType: "declaration_command"
      }
    }
  }
  return {
    kind: "simple",
    commands: n,
    bareAssignmentNames: a,
    hasLoop: i
  }
}

function Ln(e, t, n) {
  return !Buffer.from(e.text, "utf8").subarray(t.endIndex - e.startIndex, n.startIndex - e.startIndex).toString("utf8").replace(/\\\r?\n/g, "").includes(`
`)
}
var Dn = new Set(["command", "variable_assignment", "variable_assignments", "list", "pipeline", "redirected_statement", "negated_command", "declaration_command", "unset_command", "test_command", "subshell", "compound_statement", "if_statement", "while_statement", "for_statement", "case_statement", "function_definition", "ERROR"]);
var Mn = new Set(["negated_command", "if_statement", "while_statement", "for_statement", "subshell"]);

function QEr(e) {
  let t = null;
  for (let n of e.children) {
    if (!n) continue;
    if (Dn.has(n.type)) {
      if (t !== null) {
        let a = n;
        while (je.has(a.type)) {
          let r = a.children.find((i) => i != null);
          if (!r) break;
          a = r
        }
        if (Mn.has(a.type) && Ln(e, t, a)) return {
          kind: "too-complex",
          reason: a.type === "subshell" ? "`(\u2026)` group directly follows a statement or word on the same line \u2014 bash rejects the line, but zsh reads the glued `(\u2026)` as a glob-group word and expands what follows it" : "statement directly follows another statement on the same line \u2014 bash reads the text as one command (`!` and shell keywords are plain words after an assignment), not two statements",
          differential: !0
        }
      }
      t = n
    } else t = null;
    let s = QEr(n);
    if (s) return s
  }
  return null
}

function I(e, t, n, s, a = !1) {
  if (e.type === "command") {
    let r = jn(e, [], t, n, s);
    if (r.kind !== "simple") return r;
    return t.push(...r.commands), null
  }
  if (e.type === "redirected_statement") return Bn(e, t, n, s, a);
  if (e.type === "comment") return null;
  if (je.has(e.type)) {
    let r = e.type === "pipeline",
      i = t.length,
      u = !1;
    if (!r) {
      for (let x of e.children)
        if (x && (x.type === "||" || x.type === "&")) {
          u = !0;
          break
        }
    }
    let o = u ? new Map(n) : null,
      f = r ? new Map(n) : n,
      y = null;
    for (let x of e.children) {
      if (!x) continue;
      if (ye.has(x.type)) {
        if (x.type === "||" || x.type === "|" || x.type === "|&" || x.type === "&")
          if (x.type === "||") {
            if (y ??= new Set, j === 0)
              for (let d of n.keys()) y.add(d);
            let h = o ?? n;
            f = new Map(h);
            for (let [d, m] of n)
              if (h.get(d) !== m) S(f, d);
            for (let d of h.keys())
              if (!n.has(d)) S(f, d)
          } else f = new Map(o ?? n);
        else if (y !== null) {
          for (let h of y) S(n, h);
          y = null, f = n
        }
        continue
      }
      let c = I(x, t, f, s, e.type === "program");
      if (c) return c;
      if (y !== null && j > 0) X(n, f)
    }
    if (y !== null)
      for (let x of y) S(n, x);
    if (r) {
      if (X(n, f), t.length === i) J(t, e)
    }
    return null
  }
  if (e.type === "negated_command") {
    let r = t.length;
    for (let i of e.children) {
      if (!i) continue;
      if (i.type === "!") continue;
      let u = I(i, t, n, s);
      if (u) return u
    }
    if (t.length === r) J(t, e);
    return null
  }
  if (e.type === "declaration_command") {
    let r = t.length,
      i = e.children.some((m) => m !== null && ne(m)),
      u = (m, p) => {
        if (!i) return null;
        let g = n.get(m),
          _ = r === 0 && !Hi(p),
          b = g !== void 0 && !Hi(g);
        return _ || b ? ue(`'${m}' is assigned by a declaration carrying an expansion that can fail at runtime, which assigns nothing when it fails \u2014 its value cannot be statically verified`) : null
      },
      o = W,
      f = new Map(n),
      y = !1,
      x = !1,
      c = [],
      h = -1;
    for (let m of e.children) {
      if (!m) continue;
      let p = m.startIndex === h;
      switch (h = m.endIndex, m.type) {
        case "export":
        case "local":
        case "readonly":
        case "declare":
        case "typeset":
          c.push(m.text);
          break;
        case "word":
        case "number":
        case "raw_string":
        case "string":
        case "concatenation": {
          if (p) return {
            kind: "too-complex",
            reason: `${c[0]??"declaration"} operand is split across adjacent quoted segments \u2014 the shell joins them into one word the analyzer cannot verify`,
            differential: !0
          };
          let g = M(m, t, f, s);
          if (typeof g !== "string") return g;
          if (/^[+-].*m/.test(g)) return {
            kind: "too-complex",
            reason: `${c[0]} flag ${g} \u2014 zsh -m/+m pattern-assigns every matching variable; cannot statically model target set`,
            nodeType: "declaration_command"
          };
          if (c[0] === "declare" || c[0] === "typeset" || c[0] === "local" || c[0] === "readonly") {
            if (/^[+-].*f/.test(g)) y = !0;
            if (/^[+-].*[uU]/.test(g)) x = !0;
            if (y && x) return {
              kind: "too-complex",
              reason: `${c[0]} with both -f and -u/-U flags \u2014 zsh marks a function for autoload (synonym of 'autoload'), creating a function from file contents at call time`,
              nodeType: "declaration_command"
            }
          }
          if ((c[0] === "declare" || c[0] === "typeset" || c[0] === "local") && Ye.test(g)) return {
            kind: "too-complex",
            reason: `declare flag ${g} changes assignment semantics (nameref/integer/float/array/width-truncation/case-conversion)`,
            ...ee(e) ? {
              nodeType: "declaration_command"
            } : {
              differential: !0
            }
          };
          if ((c[0] === "export" || c[0] === "readonly") && Te(g) && !ee(e)) return {
            kind: "too-complex",
            reason: `${c[0]} flag ${g} with an operand bash would evaluate as a compound array assignment`,
            differential: !0
          };
          if ((c[0] === "export" || c[0] === "readonly") && /^[+-].*[iluEFLRZ]/.test(g)) return {
            kind: "too-complex",
            reason: `${c[0]} flag ${g} \u2014 zsh bin_typeset mathevals (-i/-E/-F), width-truncates (-L/-R/-Z), or case-converts (-l/-u) the assigned value`,
            ...ee(e) ? {
              nodeType: "declaration_command"
            } : {
              differential: !0
            }
          };
          if (/^[+-].*T/.test(g)) return {
            kind: "too-complex",
            reason: `${c[0]} -T creates a user-defined zsh tied pair \u2014 tracked literals for its operands are unreliable`,
            nodeType: "declaration_command"
          };
          if ((c[0] === "declare" || c[0] === "typeset" || c[0] === "local" || c[0] === "export") && g[0] !== "-" && /^[^=]*\[/.test(g)) return {
            kind: "too-complex",
            reason: `${c[0]} positional '${g}' contains array subscript \u2014 zsh/bash evaluate $(cmd) in subscripts`,
            differential: !0
          };
          if ((c[0] === "declare" || c[0] === "typeset" || c[0] === "local") && !/^[-+]/.test(g) && !we(m, c.some((_) => /^[-+][A-Za-z]*[fF]/.test(_)))) return {
            kind: "too-complex",
            reason: `${c[0]} operand '${m.text}' is not a plain NAME with an inert value \u2014 the shell may re-parse it as a subscript, an expanded name or a compound assignment`,
            differential: !0
          };
          if (g[0] !== "-") {
            let _ = g.indexOf("=");
            if (_ > 0) {
              let b = g.slice(0, _);
              if (/^[A-Za-z_][A-Za-z0-9_]*\+?$/.test(b)) {
                let k = b.endsWith("+"),
                  A = k ? b.slice(0, -1) : b,
                  R = u(A, g.slice(_ + 1));
                if (R) return R;
                Ce(n, {
                  name: A,
                  value: g.slice(_ + 1),
                  isAppend: k
                }, r > 0), s.push(A)
              }
            }
          }
          c.push(g);
          break
        }
        case "variable_assignment": {
          if ((c[0] === "declare" || c[0] === "typeset" || c[0] === "local") && !we(m, c.some((b) => /^[-+][A-Za-z]*[fF]/.test(b)))) return {
            kind: "too-complex",
            reason: `${c[0]} operand '${m.text}' is not a plain NAME with an inert value \u2014 the shell may re-parse it as a subscript, an expanded name or a compound assignment`,
            differential: !0
          };
          let g = Ge(m, t, f, s);
          if ("kind" in g) return g;
          let _ = u(g.name, g.value);
          if (_) return _;
          Ce(n, g, r > 0), s.push(g.name), c.push(`${g.name}=${g.value}`);
          break
        }
        case "variable_name": {
          let g = m.text;
          if ((c[0] === "declare" || c[0] === "typeset" || c[0] === "local" || c[0] === "export") && g[0] !== "-" && /^[^=]*\[/.test(g)) return {
            kind: "too-complex",
            reason: `${c[0]} positional '${g}' contains array subscript \u2014 backslash-escaped form de-escapes to [$(cmd)] at runtime`,
            differential: !0
          };
          let _ = c.some((b) => /^-[A-Za-z]*[fF]/.test(b));
          if (!re.test(g) && !(_ && ke.test(g))) return {
            kind: "too-complex",
            reason: `${c[0]} operand '${g}' is not a plain variable name \u2014 the shell may turn it into an assignment the parser did not see`,
            differential: !0
          };
          c.push(g);
          break
        }
        case "ansi_c_string":
          return {
            kind: "too-complex", reason: `${c[0]??"declaration"} operand ${m.text} \u2014 a $'\u2026' word the shell decodes, which may carry a subscript the parser cannot read`, differential: !0
          };
        default:
          return w(m)
      }
    }
    let d = $t(c[0] ?? "", c.slice(1));
    if (d !== null && !v) return {
      kind: "too-complex",
      reason: d,
      divergentShape: !0,
      ...ee(e) && {
        nodeType: "declaration_command"
      }
    };
    return t.push({
      argv: c,
      envVars: [],
      redirects: [],
      text: e.text,
      hasUnquotedGlob: z(e.text),
      carveOutMayDesyncQuoteScan: W !== o
    }), null
  }
  if (e.type === "variable_assignment") {
    let r = t.length,
      i = Ge(e, t, n, s);
    if ("kind" in i) return i;
    if (aht(i.name)) return {
      kind: "too-complex",
      reason: `${i.name} assignment alters command lookup/execution for subsequent commands`,
      nodeType: "variable_assignment"
    };
    if (en(i.name, i.value)) return {
      kind: "too-complex",
      reason: `${i.name} has integer attribute \u2014 assignment arith-evals RHS, which can execute subscript command substitution or abort/diverge at runtime`,
      nodeType: "variable_assignment"
    };
    if (Ce(n, i, r > 0), s.push(i.name), t.length === r && (ne(e) || st.has(i.name))) J(t, e);
    return null
  }
  if (e.type === "for_statement") {
    if (ct(e)) return w(e);
    let r = mt(e, t, n, s);
    if ("kind" in r) return r;
    let i = null,
      u = null,
      o = t.length,
      f = !1;
    for (let c of e.children) {
      if (!c) continue;
      if (c.type === "variable_name") i = c.text;
      else if (c.type === "do_group") u = c;
      else if (c.type === "select") return {
        kind: "too-complex",
        reason: "select statement reads stdin into $REPLY; cannot statically model",
        nodeType: "for_statement"
      };
      else if (c.type === "for" || c.type === "in" || c.type === ";") continue;
      else if (c.type === "command_substitution") {
        let h = Qe(c, t, n, s);
        if (h) return h
      } else {
        let h = M(c, t, n, s);
        if (typeof h !== "string") return h;
        if (ne(c)) f = !0;
        else if ((z(c.text) || Ae(c)) && jXi()) f = !0
      }
    }
    if (i === null || u === null) return w(e);
    if (i === "PS4" || i === "IFS" || st.has(i) || i === "BASH_ARGV0" || aht(i) || hNt.has(i) || Le.has(i) || uFn.has(i)) return {
      kind: "too-complex",
      reason: `${i} as loop variable bypasses assignment validation`,
      nodeType: "for_statement"
    };
    let y = n.get(i);
    if (y !== void 0 && !Hi(y)) return {
      kind: "too-complex",
      reason: `for-loop variable '${i}' would overwrite tracked literal ${JSON.stringify(y.slice(0,40))}; post-loop value cannot be statically determined`,
      nodeType: "for_statement"
    };
    n.delete(i), s.push(i);
    let x = new Map(n);
    Oe(x, u);
    for (let c of r) S(x, c);
    x.delete(i);
    for (let c of u.children) {
      if (!c) continue;
      if (c.type === "do" || c.type === "done" || c.type === ";") continue;
      let h = I(c, t, x, s);
      if (h) return h
    }
    if (X(n, x), f && t.length === o) J(t, e);
    return null
  }
  if (e.type === "if_statement" || e.type === "while_statement") {
    if (ct(e)) return w(e);
    let r = null,
      i = null;
    if (e.type === "while_statement") {
      let o = mt(e, t, n, s);
      if ("kind" in o) return o;
      r = new Set(n.keys()), i = new Map(n), Oe(n, e);
      for (let f of o) S(n, f), S(i, f)
    }
    let u = !1;
    for (let o of e.children) {
      if (!o) continue;
      if (o.type === "if" || o.type === "fi" || o.type === "else" || o.type === "elif" || o.type === "while" || o.type === "until" || o.type === ";") continue;
      if (o.type === "then") {
        u = !0;
        continue
      }
      if (o.type === "do_group") {
        let c = new Map(n);
        Oe(c, o);
        for (let h of o.children) {
          if (!h) continue;
          if (h.type === "do" || h.type === "done" || h.type === ";") continue;
          let d = I(h, t, c, s);
          if (d) return d
        }
        X(n, c);
        continue
      }
      if (o.type === "elif_clause" || o.type === "else_clause") {
        let c = new Map(n);
        for (let h of o.children) {
          if (!h) continue;
          if (h.type === "elif" || h.type === "else" || h.type === "then" || h.type === ";") continue;
          let d = I(h, t, c, s);
          if (d) return d
        }
        X(n, c);
        continue
      }
      let f = new Map(n),
        y = t.length,
        x = I(o, t, f, s);
      if (x) return x;
      if (!u) {
        for (let [c, h] of f) {
          let d = (i ?? n).get(c);
          if (d !== void 0 && !Hi(d) && h !== d) return {
            kind: "too-complex",
            reason: `'${c}' was tracked as literal '${d}' but condition may modify it (||/pipeline/unset/&&-short-circuit) \u2014 cannot prove downstream value`,
            nodeType: e.type
          };
          if (d?.includes(C) === !0 && h !== d) {
            n.set(c, d);
            continue
          }
          n.set(c, h)
        }
        for (let c of n.keys())
          if (!f.has(c)) {
            let h = (i ?? n).get(c);
            if (h !== void 0 && !Hi(h)) return {
              kind: "too-complex",
              reason: `'${c}' was tracked as literal '${h}' but condition may unset it (&&-short-circuit) \u2014 cannot prove downstream value`,
              nodeType: e.type
            };
            S(n, c)
          } for (let c = y; c < t.length; c++) {
          let h = t[c];
          if (h?.argv[0] === "read" && !RTo()) {
            for (let m of h.argv.slice(1))
              if (!m.startsWith("-") && /^[A-Za-z_][A-Za-z0-9_]*$/.test(m)) {
                let p = n.get(m);
                if (p !== void 0 && !Hi(p)) return {
                  kind: "too-complex",
                  reason: `'read ${m}' in condition may not execute (||/pipeline/subshell); cannot prove it overwrites tracked literal '${p}'`,
                  nodeType: e.type
                };
                S(n, m)
              } let d = n.get("REPLY");
            if (d !== void 0 && !Hi(d)) return {
              kind: "too-complex",
              reason: `'read' in condition may write stdin to REPLY; cannot prove it overwrites tracked literal '${d}'`,
              nodeType: e.type
            };
            S(n, "REPLY")
          }
        }
      } else X(n, f)
    }
    if (r !== null) {
      for (let o of [...n.keys()])
        if (!r.has(o)) n.delete(o)
    }
    return null
  }
  if (e.type === "subshell") {
    let r = new Map(n),
      i = t.length,
      u = !1;
    for (let o of e.children) {
      if (!o) continue;
      if (o.type === "(" || o.type === ")") continue;
      if (o.type !== "comment") u = !0;
      let f = I(o, t, r, s);
      if (f) return f
    }
    if (u && t.length === i) J(t, e);
    return null
  }
  if (e.type === "test_command") {
    let r = e.children.some((f) => f?.type === "[["),
      i = Ot(e, r);
    if (i) return i;
    let u = ["[["],
      o = W;
    for (let f of e.children) {
      if (!f) continue;
      if (f.type === "[[" || f.type === "]]" || f.type === "[" || f.type === "]") continue;
      let y = Ct(f, u, t, n, s, r);
      if (y) return y
    }
    return t.push({
      argv: u,
      envVars: [],
      redirects: [],
      text: e.text,
      hasUnquotedGlob: z(e.text),
      carveOutMayDesyncQuoteScan: W !== o
    }), null
  }
  if (e.type === "unset_command") {
    let r = [],
      i = W,
      u = t.length > 0,
      o = !1,
      f = !1,
      y = !1;
    for (let x of e.children) {
      if (!x) continue;
      switch (x.type) {
        case "unset":
          r.push(x.text), y = x.text === "unsetenv";
          break;
        case "variable_name":
          if (!re.test(x.text) && !(o && ke.test(x.text))) return {
            kind: "too-complex",
            reason: `${r[0]??"unset"} operand '${x.text}' is not a plain variable name \u2014 the shell may expand or evaluate it`,
            differential: !0
          };
          if (r.push(x.text), f = !0, o || y) {
            let c = Be(n.get(x.text), `'${x.text}' no longer has a statically known value at this unset \u2014 cannot verify what the command leaves behind`, "unset_command");
            if (c !== null) return c;
            break
          }
          if (u3(x.text)) return {
            kind: "too-complex",
            reason: `'unset' targets shell variable ${x.text} (exec-influencing / integer-attr / IFS / PS4)`,
            nodeType: "unset_command"
          };
          We(n, x.text, u);
          break;
        case "word": {
          let c = M(x, t, n, s);
          if (typeof c !== "string") return c;
          if (c.startsWith("-")) {
            if (f) return w(x);
            if (c !== "-f" && c !== "-v") return w(x);
            if (c === "-f") o = !0;
            r.push(c);
            break
          }
          if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(c)) return w(x);
          if (r.push(c), f = !0, o || y) {
            let h = Be(n.get(c), `'${c}' no longer has a statically known value at this unset \u2014 cannot verify what the command leaves behind`, "unset_command");
            if (h !== null) return h;
            break
          }
          if (u3(c)) return {
            kind: "too-complex",
            reason: `'unset' targets shell variable ${c} (exec-influencing / integer-attr / IFS / PS4)`,
            nodeType: "unset_command"
          };
          We(n, c, u);
          break
        }
        case "ansi_c_string":
        case "raw_string":
        case "string":
        case "concatenation":
          if (/\[/.test(x.text) || x.type === "ansi_c_string") return {
            kind: "too-complex",
            reason: `${r[0]??"unset"} operand ${x.text} carries a subscript \u2014 bash and zsh evaluate $(cmd) inside it`,
            differential: !0
          };
          return w(x);
        default:
          return w(x)
      }
    }
    return t.push({
      argv: r,
      envVars: [],
      redirects: [],
      text: e.text,
      hasUnquotedGlob: z(e.text),
      carveOutMayDesyncQuoteScan: W !== i
    }), null
  }
  return w(e)
}
var It = new Set(["unary_expression", "binary_expression", "negated_expression", "parenthesized_expression"]);

function ut(e, t) {
  let n = 0;
  while (n < e.length) {
    let s = e[n];
    if (s === " " || s === "\t") {
      n++;
      continue
    }
    if (s === "\\" && e[n + 1] === `
`) {
      n += 2;
      continue
    }
    if (t && s === `
`) {
      n++;
      continue
    }
    if (t && s === "#") {
      n++;
      while (n < e.length && e[n] !== `
`) n++;
      continue
    }
    return !1
  }
  return !0
}

function Ot(e, t) {
  let n = Buffer.from(e.text, "utf8"),
    s = e.startIndex;
  for (let a of e.children) {
    if (!a) continue;
    if (a.startIndex > s) {
      let r = n.subarray(s - e.startIndex, a.startIndex - e.startIndex).toString("utf8");
      if (!ut(r, t)) return {
        kind: "too-complex",
        reason: "Test command has unparsed bytes between children \u2014 parser dropped content that shell will see"
      }
    }
    if (s = Math.max(s, a.endIndex), It.has(a.type)) {
      let r = Ot(a, t);
      if (r) return r
    }
  }
  if (s < e.endIndex) {
    let a = n.subarray(s - e.startIndex).toString("utf8");
    if (!ut(a, t)) return {
      kind: "too-complex",
      reason: "Test command has unparsed bytes after its last child \u2014 parser dropped content that shell will see"
    }
  }
  return null
}

function zn(e) {
  let t = !1,
    n = !1,
    s = !1,
    a = 0,
    r;
  for (let i = 0; i < e.length; i++) {
    let u = e[i];
    if (!t && u === "\\") {
      i++;
      continue
    }
    if (!n && u === "'") {
      t = !t;
      continue
    }
    if (!t && u === '"') {
      n = !n;
      continue
    }
    if (!t && !n) {
      if (u === "=" && e[i + 1] === "(" && (s || i === 0 || r === "|")) return !0;
      if (u === "(") a++;
      else if (u === ")") a = Math.max(0, a - 1);
      else if (a === 0 && (u === "|" || u === "&") && r === u) s = !0;
      r = u
    }
  }
  return !1
}

function cFn(e) {
  let t = e.replace(/\[(?::[a-zA-Z]+:|=[A-Za-z0-9-]*=|\.[A-Za-z0-9-]*\.|[!^]?)\]\](?!\])/g, "\x00"),
    n = /[A-Za-z0-9_]/,
    s = t.indexOf("]]");
  while (s !== -1) {
    let a = s > 0 ? t[s - 1] : "",
      r = s + 2 < t.length ? t[s + 2] : "";
    if (!(n.test(a) && n.test(r))) return !0;
    s = t.indexOf("]]", s + 1)
  }
  return !1
}
var Fn = /^([\w\u0080-\uffff]*|[-?*@!#])(\[|:[a-zA-Z&])/,
  Pho = /^([\w\u0080-\uffff]*|[-?*@!#$])(\[|:[a-zA-Z&])/;

function Ct(e, t, n, s, a, r) {
  if (It.has(e.type)) {
    for (let i = 0; i < e.children.length; i++) {
      let u = e.children[i];
      if (!u) continue;
      if ((u.type === "simple_expansion" || u.type === "expansion") && (e.children[i + 1]?.text.startsWith("[") || /^:[a-zA-Z&]/.test(e.children[i + 1]?.text ?? "") || u.children.some((f) => f?.type === "special_variable_name") && Pho.test(e.children[i + 1]?.text ?? ""))) return {
        kind: "too-complex",
        reason: "zsh $name[expr] / $name:mod in [[ ]] operand \u2014 recursive eval",
        differential: !0
      };
      if (r && u.type === "!" && e.children[i + 1]?.startIndex === u.endIndex) return {
        kind: "too-complex",
        reason: "zsh reads !( in [[ ]] as part of a word",
        differential: !0
      };
      let o = Ct(u, t, n, s, a, r);
      if (o) return o
    }
    return null
  }
  switch (e.type) {
    case "test_operator":
    case "!":
    case "(":
    case ")":
    case "&&":
    case "||":
    case "==":
    case "=":
    case "!=":
    case "<":
    case ">":
    case "=~":
      return t.push(e.text), null;
    case "regex":
    case "extglob_pattern":
      if (/\$([({[\w#?!*@$'"+~^=-]|[\u0080-\uffff])|`|[<>]\(/.test(e.text)) return {
        kind: "too-complex",
        reason: `[[ ]] ${e.type==="extglob_pattern"?"pattern":e.type} contains expansion / command / process substitution`,
        differential: !0
      };
      if (e.text.startsWith("=(")) return {
        kind: "too-complex",
        reason: `[[ ]] ${e.type==="extglob_pattern"?"pattern":e.type} contains zsh =(CMD) process substitution`,
        differential: !0
      };
      if (e.type === "regex" && zn(e.text)) return {
        kind: "too-complex",
        reason: `[[ ]] ${e.type} contains zsh =(CMD) process substitution`,
        differential: !0
      };
      if (e.type === "extglob_pattern") {
        let i = e.text,
          u = 0;
        while (u < i.length) {
          if (i[u] === "\\" && u + 1 < i.length) {
            u += 2;
            continue
          }
          if (i[u] === "&") return {
            kind: "too-complex",
            reason: "[[ ]] pattern contains unquoted & (zsh splits the word at & at any depth)",
            differential: !0
          };
          u++
        }
      }
      if (e.type === "regex") {
        let i = e.text,
          u = 0,
          o = 0;
        while (o < i.length) {
          let f = i[o];
          if (f === "\\" && o + 1 < i.length) {
            o += 2;
            continue
          }
          if (u === 0 && f === "|" && i[o + 1] === f) return {
            kind: "too-complex",
            reason: "[[ ]] regex contains glued || (zsh splits it as a cond operator)",
            differential: !0
          };
          if (f === "&") return {
            kind: "too-complex",
            reason: "[[ ]] regex contains unquoted & (zsh splits the word at & at any depth)",
            differential: !0
          };
          if (f === '"' || f === "'") {
            let y = f;
            o++;
            while (o < i.length && i[o] !== y) {
              if (y === '"' && i[o] === "\\" && o + 1 < i.length) o++;
              o++
            }
            if (o < i.length) o++;
            continue
          }
          if (f === "(") u++;
          else if (f === ")") {
            if (u--, u < 0) return {
              kind: "too-complex",
              reason: "[[ ]] regex has unbalanced parentheses (parser desync)",
              differential: !0
            }
          }
          o++
        }
        if (u !== 0) return {
          kind: "too-complex",
          reason: "[[ ]] regex has unbalanced parentheses (parser desync)",
          differential: !0
        }
      }
      if (e.text.includes("&&")) return {
        kind: "too-complex",
        reason: "[[ ]] pattern leaf contains `&&` \u2014 shell cond-lexer divergence (zsh splits the word there)",
        differential: !0
      };
      if (cFn(e.text)) return {
        kind: "too-complex",
        reason: "[[ ]] pattern leaf contains a potential standalone `]]` closer \u2014 shell cond-lexer divergence (zsh may close the conditional early)",
        differential: !0
      };
      return t.push(e.text), null;
    case "test_rhs_missing":
      return {
        kind: "too-complex", reason: "Test command comparison is missing its right-hand side \u2014 parser dropped consumed bytes"
      };
    default: {
      let i = M(e, n, s, a);
      if (typeof i !== "string") {
        if (r && i.kind === "too-complex") {
          let {
            nodeType: u,
            ...o
          } = i;
          return {
            ...o,
            differential: !0
          }
        }
        return i
      }
      if (r && (cFn(i) || cFn(e.text)) || /]].*[;\n&|<>]/s.test(i)) return {
        kind: "too-complex",
        reason: r ? "[[ ]] quoted operand contains `]]` closer or `]]`+separator bytes \u2014 possible parser quote-state desync" : "test command quoted operand contains `]]`+separator bytes \u2014 possible parser quote-state desync",
        differential: !0
      };
      return t.push(i), null
    }
  }
}

function Lt(e) {
  let t = null;
  for (let n of e.children) {
    if (!n || n.type === "!" || n.type === "comment" || ye.has(n.type)) continue;
    t = n
  }
  if (!t) return null;
  if (t.type === "list" || t.type === "negated_command") return Lt(t);
  if (!_t.has(t.type) && !fn.has(t.type)) return t;
  return null
}

function S(e, t) {
  if (e.get(t)?.includes(C)) return;
  e.set(t, O)
}
var le = `${C}\x00`;

function ce(e) {
  return v && e.startsWith(le) ? e.slice(le.length) : e
}

function Be(e, t, n) {
  if (e === void 0) return null;
  if (!Hi(ce(e))) return null;
  return !v && e.includes(C) ? {
    kind: "too-complex",
    reason: t,
    nodeType: n,
    divergentShape: !0
  } : {
    kind: "too-complex",
    reason: t,
    nodeType: n
  }
}

function We(e, t, n) {
  if (oe.add(t), n && v) H = !0;
  e.set(t, !n ? "" : v ? le : C)
}

function Dt(e, t) {
  for (let [n, s] of e)
    if (t.get(n) !== s) {
      if (!v && F.get(n) === s) Z = !0;
      H ||= v, e.set(n, !v ? C : s.includes(C) ? s : le + s)
    } for (let n of t.keys())
    if (!e.has(n)) e.set(n, C)
}

function Bn(e, t, n, s, a) {
  let r = [],
    i = null,
    u = [],
    o = [];
  for (let m of e.children) {
    if (!m) continue;
    if (m.type === "file_redirect") u.push(m);
    else if (m.type === "heredoc_redirect") o.push(m);
    else if (_t.has(m.type)) {
      if (m.type === "list" || m.type === "negated_command") {
        let p = Lt(m);
        if (p) return w(p)
      }
      i = m
    } else return w(m)
  }
  if (!i) {
    for (let m of u) {
      let p = Ee(m, t, n, s);
      if ("kind" in p) return p;
      r.push(p)
    }
    for (let m of o) {
      let p = Ue(m, n);
      if (p) return p
    }
    return t.push({
      argv: [],
      envVars: [],
      redirects: r,
      text: e.text,
      hasUnquotedGlob: z(e.text)
    }), null
  }
  let f = t.length,
    y = te && a && i.type === "command" && u.length === 0 && o.length === 1 ? o[0]?.children.find((m) => m?.type === "pipeline") : void 0,
    x, c = !1;
  if (i.type === "list") {
    let m = i.children;
    if (m.length === 3 && m[0] && m[1]?.type === "&&" && m[2]) {
      let p = I(m[0], t, n, s);
      if (p) return p;
      x = new Map(n), c = !0;
      let g = I(m[2], t, n, s);
      if (g) return g
    } else {
      let p = I(i, t, n, s);
      if (p) return p;
      x = n
    }
  } else if (je.has(i.type)) {
    let m = I(i, t, n, s);
    if (m) return m;
    x = n
  } else {
    x = new Map(n), c = !0;
    let m = I(i, t, y ? new Map(n) : n, s);
    if (m) return m
  }
  if (c) Dt(n, x);
  let h = t.length > f ? t.at(-1) : void 0,
    d = h?.envVars[0]?.name;
  if (d !== void 0 && u.some((m) => ne(m))) {
    let m = ge(d);
    if (m) return m
  }
  for (let m of u) {
    let p = Ee(m, t, x, s);
    if ("kind" in p) return p;
    r.push(p)
  }
  if (h) {
    let m = Vt(u, h, r, t, x, s);
    if (m) return m
  }
  for (let m of o) {
    let p = Ue(m, x, y);
    if (p) return p
  }
  if (y) {
    let m = I(y, t, n, s);
    if (m) return m
  }
  if (o.length > 0)
    for (let m = f; m < t.length; m++) {
      let p = t[m];
      if (p) p.argvSourceLiteral = !1
    }
  if (r.length > 0)
    if (t.length > f) {
      let m = t.at(-1);
      if (m) m.redirects.push(...r)
    } else t.push({
      argv: [],
      envVars: [],
      redirects: r,
      text: e.text,
      hasUnquotedGlob: z(e.text)
    });
  return null
}

function Mt(e) {
  {
    let s = e.startIndex;
    for (let a of e.children) {
      if (!a) continue;
      if (a.startIndex > s) {
        let r = Buffer.from(e.text, "utf8").subarray(s - e.startIndex, a.startIndex - e.startIndex).toString("utf8");
        if (!/^(?:[ \t]|\\\n)*$/.test(r)) return {
          kind: "too-complex",
          reason: "Redirect has unparsed bytes between children \u2014 parser dropped content that shell will see"
        }
      }
      s = a.endIndex
    }
    if (s < e.endIndex) {
      let a = Buffer.from(e.text, "utf8").subarray(s - e.startIndex).toString("utf8");
      if (!/^(?:[ \t]|\\\n)*$/.test(a)) return {
        kind: "too-complex",
        reason: "Redirect has unparsed trailing bytes \u2014 parser dropped content that shell will see"
      }
    }
  }
  let t = null,
    n = 0;
  for (let s of e.children) {
    if (!s) continue;
    if (s.type === "variable_name") return {
      kind: "too-complex",
      reason: `Redirect uses ${s.text} fd-variable assignment \u2014 modifies shell variable as side effect`
    };
    if (s.type === "file_descriptor") continue;
    if (s.type === ">&-" || s.type === "<&-") {
      t = s.type;
      continue
    }
    if (s.type in De) {
      t = s.type;
      continue
    }
    if ((t === ">&" || t === "<&") && s.text.startsWith("-")) return {
      kind: "too-complex",
      reason: "Redirect target after >& or <& starts with - \u2014 bash treats the dash as close-fd and passes the rest to the command as a hidden argument"
    };
    if (t === ">&-" || t === "<&-") return {
      kind: "too-complex",
      reason: "Close-fd redirect is followed by a word \u2014 bash passes it to the command as a hidden argument"
    };
    n++, t = null
  }
  if (n > 1) return {
    kind: "too-complex",
    reason: "Redirect has multiple targets \u2014 post-redirect args swallowed"
  };
  return null
}
var zt = new Set(["heredoc_start", "heredoc_body", "<<", "<<-", "heredoc_end", "file_descriptor"]),
  Ft = new Set(["file_redirect", "pipeline"]),
  Wn = /^\{(?:\w|[^\x00-\x7F])+(\[.*\])?\}$/su;

function Ke(e) {
  let t = /^\{((?:\w|[^\x00-\x7F])+)/u.exec(e)?.[1];
  if (t === void 0) return "{\u2026}";
  let n = /^\w{1,64}$/.test(t) ? t : "\u2026";
  return e[t.length + 1] === "[" ? `{${n}[\u2026]}` : `{${n}}`
}

function Bt(e, t) {
  let n = t[e.startIndex] === 123 ? Wn.exec(e.text) : null;
  if (n) {
    let s = e.endIndex,
      a = !1;
    for (;;) {
      let o = t[s];
      if (o === 32 || o === 9) a = !0, s++;
      else if (o === 92 && t[s + 1] === 10) s += 2;
      else break
    }
    let r = t[s],
      i = t[s + 1];
    if (((r === 62 || r === 60) && i !== 40 || r === 38 && i === 62) && !(a && n[1] !== void 0)) return e.text
  }
  for (let s of e.children)
    if (s) {
      let a = Bt(s, t);
      if (a !== null) return a
    } return null
}

function Wt(e) {
  if (e.type === "file_redirect") {
    let t = Mt(e);
    if (t) return t
  }
  if (e.type === "herestring_redirect" || e.type === "heredoc_redirect") {
    for (let t of e.children)
      if (t?.type === "variable_name") return {
        kind: "too-complex",
        reason: `Redirect uses ${Ke(t.text)} fd-variable assignment \u2014 modifies shell variable as side effect`
      };
    if (e.type === "heredoc_redirect") {
      for (let t of e.children)
        if (t && !zt.has(t.type) && !Ft.has(t.type)) return {
          kind: "too-complex",
          reason: "Text after the heredoc start on the same line cannot be statically analyzed"
        }
    }
  }
  for (let t of e.children)
    if (t) {
      let n = Wt(t);
      if (n) return n
    } return null
}

function Ee(e, t, n, s) {
  let a = L,
    r = _e,
    i = null,
    u = null,
    o;
  {
    let f = Mt(e);
    if (f) return f
  }
  for (let f of e.children) {
    if (!f) continue;
    if (f.type === "file_descriptor") o = Number(f.text);
    else if (f.type === "variable_name") return {
      kind: "too-complex",
      reason: `Redirect uses ${f.text} fd-variable assignment \u2014 modifies shell variable as side effect`
    };
    else if (f.type in De) i = De[f.type] ?? null;
    else if (f.type === ">&-" || f.type === "<&-") {
      if (e.children.some((y) => y !== f && y?.type !== "file_descriptor")) return {
        kind: "too-complex",
        reason: "Close-fd redirect is followed by a word \u2014 bash passes it to the command as a hidden argument"
      };
      return w(f)
    } else if (u !== null) return {
      kind: "too-complex",
      reason: "Redirect has multiple targets \u2014 post-redirect args swallowed"
    };
    else if ((i === ">&" || i === "<&") && f.text.startsWith("-")) return {
      kind: "too-complex",
      reason: "Redirect target after >& or <& starts with - \u2014 bash treats the dash as close-fd and passes the rest to the command as a hidden argument"
    };
    else if (f.type === "word" || f.type === "number") {
      if (f.children.length > 0) return w(f);
      if (be.test(f.text)) return w(f);
      if (Me.test(f.text)) return w(f);
      if (ze.test(f.text)) return w(f);
      if (/(?:^|[^\\])(?:\\\\)*[`$]/.test(f.text)) return w(f);
      u = f.text.replace(/\\([\s\S])/g, (y, x) => x === `
` ? "" : x)
    } else if (f.type === "raw_string") u = jt(f.text);
    else if (f.type === "string") {
      let y = qt(f, t, n, s);
      if (typeof y !== "string") return y;
      u = y
    } else if (f.type === "concatenation") {
      let y = M(f, t, n, s);
      if (typeof y !== "string") return y;
      if (/(?:^|[^\\])(?:\\\\)*[`$]/.test(f.text)) return {
        kind: "too-complex",
        reason: "Redirect target concatenation contains $/` \u2014 unanalyzable gap or substitution",
        nodeType: "concatenation"
      };
      u = y
    } else return w(f)
  }
  if (!i || u === null) return {
    kind: "too-complex",
    reason: "Unrecognized redirect shape"
  };
  if (Hi(u)) return {
    kind: "too-complex",
    reason: "Redirect target contains $(cmd) output \u2014 path is runtime-determined",
    nodeType: e.type
  };
  if (u.includes(`
`)) return {
    kind: "too-complex",
    reason: "Redirect target contains newline \u2014 potential path traversal",
    nodeType: e.type
  };
  if (u.startsWith("!")) return {
    kind: "too-complex",
    reason: "Redirect target starts with ! \u2014 zsh clobber or history expansion",
    nodeType: e.type
  };
  if (u.startsWith("=")) return {
    kind: "too-complex",
    reason: "Redirect target starts with = \u2014 zsh expands to PATH binary",
    nodeType: e.type
  };
  if ((i === ">&" || i === "<&") && u.startsWith("-")) return {
    kind: "too-complex",
    reason: "Redirect target after >& or <& starts with - \u2014 bash treats the dash as close-fd and passes the rest to the command as a hidden argument"
  };
  if (i === ">&" && !/^[A-Za-z0-9./_-]+$/.test(u)) return {
    kind: "too-complex",
    reason: "bash `>&` applies a second word-expansion pass to its target \u2014 path cannot be statically validated",
    nodeType: e.type
  };
  return {
    op: i,
    target: u,
    fd: o,
    targetSourceLiteral: L === a && _e === r
  }
}
var te = !1,
  v = !1,
  H = !1,
  ie = 0,
  Ut = new WeakMap,
  U, V = 0,
  q, F = new Map,
  Z = !1,
  G = !1,
  ae = !1,
  Y = null,
  j = 0,
  oe = new Set;

function ue(e) {
  return v ? null : {
    kind: "too-complex",
    reason: e,
    divergentShape: !0
  }
}

function ge(e) {
  return ue(`'${e}' is set for one command that carries an expansion which can fail at runtime \u2014 whether the assignment stands for later commands cannot be statically verified`)
}

function Un() {
  return q
}

function Hn() {
  return V
}
var Zn = /`|\\[$`\\\n]/,
  ft = re.source.slice(1, -1),
  Gn = new RegExp(`\\$(?:${ft}(?![A-Za-z0-9_\\u0080-\\uffff])|\\{${ft}\\})(?!\\[|:[A-Za-z&])`, "g");

function Ue(e, t, n) {
  let s = null,
    a = null,
    r = null,
    i = !1;
  for (let o of e.children) {
    if (!o) continue;
    if (zt.has(o.type)) {
      if (o.type === "heredoc_start") s = o.text;
      else if (o.type === "heredoc_body") r = o;
      else if (o.type === "<<-") i = !0;
      else if (o.type === "heredoc_end") a = o.text
    } else if (o === n && o.children.at(-1)?.type === "command" && o.children.every((f) => f?.type === "|" || f?.type === "command" && !f.children.some((y) => y?.type.endsWith("_redirect"))));
    else if (Ft.has(o.type)) {
      let f = w(o);
      return f.kind === "too-complex" ? {
        ...f,
        afterHeredocDelimiter: !0
      } : f
    } else return {
      kind: "too-complex",
      reason: "Text after the heredoc start on the same line cannot be statically analyzed"
    }
  }
  if (r === null) return {
    kind: "too-complex",
    reason: "Heredoc body was not scanned by the parser",
    nodeType: "heredoc_redirect"
  };
  if (n) {
    let o = Buffer.from(e.text, "utf8").subarray(0, r.startIndex - e.startIndex).toString("utf8"),
      f = e.children.slice(0, e.children.indexOf(r)).map((y) => (y === n ? "|" : "") + (y?.text ?? "")).join("");
    if (o.indexOf(`
`) !== o.length - 1 || o.includes("\\") || o.replace(/[ \t\n]/g, "") !== f.replace(/[ \t]/g, "")) return {
      kind: "too-complex",
      reason: "More than a pipeline follows the heredoc delimiter on its line"
    }
  }
  let u = s !== null && (s.startsWith("'") && s.endsWith("'") || s.startsWith('"') && s.endsWith('"') || s.startsWith("\\"));
  if (!u) {
    let o = r.children.filter((y) => y?.type !== "heredoc_content");
    if (!(te && t !== void 0 && s !== null && re.test(s) && a === s && !Zn.test(r.text) && (r.text.match(/\$/g)?.length ?? 0) === o.length && (r.text.match(Gn)?.length ?? 0) === o.length && o.every((y) => (L++, (y?.type === "simple_expansion" || y?.type === "expansion") && typeof fe(y, t, !0) === "string")))) return {
      kind: "too-complex",
      reason: "Heredoc with unquoted delimiter undergoes shell expansion",
      nodeType: "heredoc_redirect",
      differential: !0
    }
  }
  if (s !== null && (s.startsWith("'") || s.startsWith('"')) && s.slice(1, -1).includes("\\")) return {
    kind: "too-complex",
    reason: "Quoted heredoc delimiter contains backslash",
    nodeType: "heredoc_redirect"
  };
  if (u)
    for (let o of r.children) {
      if (!o) continue;
      if (o.type !== "heredoc_content") return w(o)
    }
  if (s !== null && r !== null) {
    let o = !u ? s : s.startsWith("\\") ? s.slice(1) : s.slice(1, -1);
    if (o.length > 0) {
      if (i && o.startsWith("\t")) return {
        kind: "too-complex",
        reason: "Heredoc uses <<- with a tab-prefixed delimiter",
        nodeType: "heredoc_redirect"
      };
      for (let f of r.text.split(`
`)) {
        let y = i ? f.replace(/^\t+/, "") : f;
        if (!y.startsWith(o)) continue;
        let x = y.slice(o.length);
        if (/[)`}]/.test(x)) return {
          kind: "too-complex",
          reason: "Heredoc body line starts with the delimiter and contains a shell metacharacter bash may treat as a terminator",
          nodeType: "heredoc_redirect"
        }
      }
    }
  }
  return null
}

function Ht(e, t, n, s) {
  for (let a of e.children) {
    if (!a) continue;
    if (a.type === "<<<") continue;
    if (a.type === "variable_name") return {
      kind: "too-complex",
      reason: `Redirect uses ${Ke(a.text)} fd-variable assignment \u2014 modifies shell variable as side effect`
    };
    let r = M(a, t, n, s);
    if (typeof r !== "string") return r;
    if (xe.test(r)) return w(a)
  }
  return null
}
var He = new Set(["command", "builtin", "noglob", "nocorrect", "time"]),
  Zt = /^[A-Za-z_][A-Za-z0-9_]*\+?=[A-Za-z0-9_.,:/@%+=-]*$/,
  Ze = new Set(["builtin", "command", "noglob"]),
  Xe = new Set(["declare", "typeset", "local", "export", "readonly"]),
  Gt = new Set([...Xe, "integer", "float", "private"]),
  ZEr = new Set([":", "break", "continue", "return", "exit", "shift", "times", "set", "export", "readonly", "unset"]);

function me(e, t, n, s, a) {
  if (e === void 0) return null;
  let [, r = "", i = ""] = /^([A-Za-z_][A-Za-z0-9_]*)([\s\S]*)$/.exec(e) ?? [];
  if (r === "" || (n ? i === "" : i !== "" && !/^[[?]/.test(i))) return null;
  let u = s.get(r);
  if (!a.includes(r) && !oe.has(r) && !F.has(r) && (u === void 0 || Hi(u))) return null;
  if (!VXi() || qXi()) return null;
  let o = i,
    f = r;
  if (o.startsWith("[")) {
    let c = 0,
      h = o.length;
    for (let d = 0; d < o.length; d++)
      if (o[d] === "[") c++;
      else if (o[d] === "]" && --c === 0) {
      h = d + 1;
      break
    }
    f += "[\u2026]", o = o.slice(h)
  }
  if (o !== "") f += o.startsWith("?") ? "?\u2026" : "\u2026";
  let x = `In zsh, 'read ${d3(t===null?f:`${t} ${f}`)}' can set ${r} differently from bash or leave it unchanged, and this command set or unset ${r} earlier, so ${r}'s value after the read can't be checked before the command runs`;
  if (!ae) KXi(x);
  return {
    kind: "too-complex",
    reason: x,
    differential: !0
  }
}

function Vn(e, t, n, s, a, r) {
  let i = [],
    u = [],
    o = (p, g = !0) => {
      let _ = p.match(/^[A-Za-z_][A-Za-z0-9_]*/);
      if (_) {
        if (i.push(_[0]), g) u.push(_[0])
      }
    },
    f = e,
    y = !1,
    x, c = [];
  for (;;) {
    let p = f[0];
    if (p === void 0) break;
    if (He.has(p)) {
      if ((x === "builtin" || x === "command") && p !== "builtin" && p !== "command") {
        if (p === "noglob" && !y) return {
          kind: "too-complex",
          reason: `'${x} noglob' runs the wrapped command on zsh (for 'command', under POSIX_BUILTINS) but not bash \u2014 cannot statically model whether it executes`,
          nodeType: "command"
        };
        y = !0
      }
      let g = 1;
      while (g < f.length && /^-[-pvV]*$/.test(f[g])) {
        if (/[vV]/.test(f[g]) || p === "builtin" && /p/.test(f[g]) && Njn()) y = !0;
        g++
      }
      f = f.slice(g), x = p
    } else if (p === "!") {
      if (x === "builtin" || x === "command") y = !0;
      f = f.slice(1), x = void 0
    } else if (/^[A-Za-z_]\w*(\[[^\]]*\])?\+?=/.test(p)) {
      if (x !== void 0 && Ze.has(x) && Njn()) {
        if (!(Zt.test(p) && !Hi(p)) && !y) {
          let b = dt(x, p);
          if (b) return b
        }
        y = !0
      }
      let g = i.length;
      o(p), c.push({
        word: p,
        target: i.length > g ? g : void 0
      }), f = f.slice(1), x = void 0
    } else {
      if (x !== void 0 && Ze.has(x) && !y && p !== "[" && /[*?[]/.test(p) && Njn()) {
        let g = dt(x, p);
        if (g) return g
      }
      break
    }
  }
  let h = f[0];
  if (h === void 0)
    for (let p of t) o(p.name);
  else if (Xe.has(h)) {
    let p = !1;
    for (let g = 1; g < f.length; g++) {
      let _ = f[g];
      if (!p && _ === "--") {
        p = !0;
        continue
      }
      if (!p && /^[+-].*m/.test(_)) return {
        kind: "too-complex",
        reason: `'${h} ${_}' (wrapped form) \u2014 zsh -m/+m pattern-assigns every matching variable; cannot statically model target set`,
        nodeType: "command"
      };
      if (!p && _.startsWith("-")) continue;
      if (_.includes("=")) o(_)
    }
  } else if (h === "read" && RTo());
  else if (h === "read") {
    let p = 1,
      g = !1,
      _ = !1;
    while (p < f.length) {
      let b = f[p];
      if (!g && b === "--") {
        g = !0, p++;
        continue
      }
      if (!g && b.startsWith("-")) {
        if (I7e.has(b)) {
          if (yt.has(b)) {
            let R = me(f[p + 1], b, !1, n, s);
            if (R) return R
          }
          p += 2;
          continue
        }
        let A = !1;
        for (let R = 1; R < b.length; R++) {
          let T = b[R];
          if (T === "a" || T === "A") {
            let N = R < b.length - 1 ? b.slice(R + 1) : f[p + 1];
            if (N) {
              let de = me(N, b.slice(0, R + 1), !0, n, s);
              if (de) return de;
              o(N), _ = !0
            }
            A = R === b.length - 1;
            break
          }
          if (I7e.has("-" + T)) {
            if (A = R === b.length - 1, A && yt.has("-" + T)) {
              let N = me(f[p + 1], b, !1, n, s);
              if (N) return N
            }
            break
          }
        }
        p += A ? 2 : 1;
        continue
      }
      let k = me(b, null, !0, n, s);
      if (k) return k;
      o(b), _ = !0, p++
    }
    if (!_) i.push("REPLY")
  } else if (h === "printf")
    for (let p = 1; p < f.length; p++) {
      let g = f[p];
      if (g === "--" || !g.startsWith("-")) break;
      if (g === "-v") {
        if (f[p + 1]) o(f[p + 1]);
        p++;
        continue
      }
      if (g.startsWith("-v")) o(g.slice(2))
    } else if (h === "getopts") {
      let p = f[1] === "--" ? 1 : 0;
      if (f[2 + p]) o(f[2 + p]);
      i.push("OPTARG"), S(n, "OPTIND")
    } else if (h === "wait")
    for (let p = 1; p < f.length; p++) {
      let g = f[p];
      if (g === "--" || !g.startsWith("-")) break;
      for (let _ = 1; _ < g.length; _++)
        if (g[_] === "p") {
          if (_ < g.length - 1) o(g.slice(_ + 1));
          else if (f[p + 1]) o(f[p + 1]), p++;
          break
        }
    } else if (!y && (h === "unset" || h === "unsetenv")) {
      let p = !1,
        g = !1;
      for (let _ = 1; _ < f.length; _++) {
        let b = f[_];
        if (b.startsWith("-")) {
          if (g) return {
            kind: "too-complex",
            reason: `'unset \u2026 ${b}' (wrapped form) \u2014 flag after name; getopt stops at first non-option`,
            nodeType: "command"
          };
          if (b !== "-f" && b !== "-v") return {
            kind: "too-complex",
            reason: `'unset ${b}' (wrapped form) \u2014 flag other than -f/-v (zsh -m pattern-unset, bash -n nameref) cannot be statically modelled`,
            nodeType: "command"
          };
          if (b === "-f") p = !0;
          continue
        }
        if (g = !0, !/^[A-Za-z_][A-Za-z0-9_]*$/.test(b)) return {
          kind: "too-complex",
          reason: `'unset ${b}' (wrapped form) \u2014 non-identifier operand may pathname-expand; cannot statically know which var is unset`,
          nodeType: "command"
        };
        if (p || h === "unsetenv") {
          let k = Be(n.get(b), `'${b}' no longer has a statically known value at this unset (wrapped form) \u2014 cannot verify what the command leaves behind`, "command");
          if (k !== null) return k;
          continue
        }
        if (u3(b)) return {
          kind: "too-complex",
          reason: `'unset' targets shell variable ${b} (exec-influencing / integer-attr / IFS / PS4)`,
          nodeType: "command"
        };
        if (r) {
          let k = ue(`'unset ${b}' is in a command carrying an expansion that can fail at runtime \u2014 whether the name is cleared cannot be statically verified`);
          if (k) return k
        }
        We(n, b, a)
      }
    } else if (h === "print")
    for (let p = 1; p < f.length; p++) {
      let g = f[p];
      if (g === "--" || g === "-" || !g.startsWith("-")) break;
      let _ = !1;
      for (let b = 1; b < g.length; b++) {
        let k = g[b];
        if (k === "v") {
          let A = b < g.length - 1 ? g.slice(b + 1) : f[p + 1];
          if (A) o(A);
          _ = b === g.length - 1;
          break
        }
        if (or.has("-" + k)) {
          _ = b === g.length - 1;
          break
        }
      }
      if (_) p++
    } else if (h === "set")
      for (let p = 1; p < f.length; p++) {
        let g = f[p];
        if (g === "--" || !/^[-+]/.test(g)) break;
        let _ = g.indexOf("A", 1);
        if (_ === -1) {
          if (g.endsWith("o")) p++;
          continue
        }
        if (_ < g.length - 1) o(g.slice(_ + 1));
        else if (f[p + 1]) o(f[p + 1]);
        break
      } else if (h === "mapfile" || h === "readarray") {
        let p = !1;
        for (let g = 1; g < f.length; g++) {
          let _ = f[g];
          if (_.startsWith("-")) {
            if (/^-[dnOsuCc]$/.test(_)) g++;
            continue
          }
          o(_), p = !0
        }
        if (!p) i.push("MAPFILE")
      } else if (!y && (h === "cd" || h === "chdir" || h === "pushd" || h === "popd")) {
    let p = !1;
    if (h === "pushd" || h === "popd")
      for (let g = 1; g < f.length; g++) {
        let _ = f[g];
        if (_ === "--") break;
        if (OCe(_, "n")) {
          p = !0;
          break
        }
        if (h === "popd" && (/^\+0*[1-9]/.test(_) || /^-0+$/.test(_))) {
          p = !0;
          break
        }
      }
    if (!p) S(n, "PWD"), S(n, "OLDPWD");
    if (h === "pushd" || h === "popd") S(n, "DIRSTACK"), S(n, "dirstack")
  }
  let d = h !== void 0 && Gt.has(h) ? t.length + c.length : 0,
    m = V;
  if (V += d, d > 0 && U === void 0) {
    let p = h === "export" || h === "readonly" || f.some((_) => /^-[A-Za-z]*[xr]/.test(_)),
      g = new Set;
    for (let _ of p ? f.slice(1) : []) {
      let b = /^[A-Za-z_]\w*/.exec(_);
      if (b !== null) g.add(b[0])
    }
    q = [...q ?? [], ...t.map((_) => g.has(_.name)), ...c.map(({
      word: _
    }) => g.has(/^[A-Za-z_]\w*/.exec(_)?.[0] ?? ""))]
  }
  if (d > 0 && U !== void 0) {
    let p = {
        kind: "too-complex",
        reason: `A variable set in front of ${h} in this command can't be checked before it runs`
      },
      g = [...t];
    for (let {
        word: _
      }
      of c) {
      let b = /^([A-Za-z_]\w*)(\+?)=([^]*)$/.exec(_);
      if (b === null) return p;
      let [, k = "", A, R = ""] = b;
      g.push(A === "+" ? {
        name: k,
        value: R,
        isAppend: !0
      } : {
        name: k,
        value: R
      })
    }
    if (U.length < m + g.length || c.length > 0 && g.length > 1) return p;
    for (let _ = c.length - 1; _ >= 0; _--) {
      let b = c[_]?.target;
      if (b !== void 0) i.splice(b, 1)
    }
    for (let [_, b] of g.entries()) {
      if (U[m + _] !== !0) continue;
      let k = b.isAppend ? n.get(b.name) : "",
        A = k === void 0 ? void 0 : ce(k);
      if (Hi(b.value) || u3(b.name)) return p;
      if (A === void 0 || Hi(A)) return p.kind === "too-complex" && !v && k?.includes(C) === !0 ? {
        ...p,
        divergentShape: !0
      } : p;
      if (r) {
        let T = ue(`'${b.name}' is appended to by a command carrying an expansion that can fail at runtime \u2014 whether the append happens cannot be statically verified`);
        if (T) return T
      }
      let R = (A === k ? "" : le) + A + b.value;
      n.set(b.name, R), F.set(b.name, A + b.value)
    }
  }
  if (h !== void 0 && t.length > 0 && !(d > 0 && U !== void 0) && ZEr.has(h))
    for (let p of t) o(p.name);
  for (let p of i) {
    if (u3(p)) return {
      kind: "too-complex",
      reason: `'${h??t[0]?.name}' writes shell variable ${p} (exec-influencing / integer-attr / IFS) \u2014 value cannot be statically verified`,
      nodeType: "command"
    };
    S(n, p)
  }
  return s.push(...u), null
}

function dt(e, t) {
  return v ? null : {
    kind: "too-complex",
    reason: `'${e} ${d3(t)}' has a pattern the shell may expand, so this command can't be checked before it runs`,
    nodeType: "command",
    divergentShape: !0,
    keepsRemovalVerdict: !0
  }
}
var pt = /^([A-Za-z_]\w*)(?:\[[\s\S]*?\])?(\+?)=([\s\S]*)$/,
  qn = 16;

function Vt(e, t, n, s, a, r) {
  let i = [...t.envVars],
    u = Ut.get(t.argv),
    o = !1;
  for (let [d, m] of t.argv.entries()) {
    let [, p, g, _] = pt.exec(m) ?? [], [, b] = /^([A-Za-z_]\w*)\[/.exec(m) ?? [];
    if (p !== void 0 && _ !== void 0) i.push({
      name: p,
      value: _,
      isAppend: g === "+",
      word: u?.[d],
      isOtherElement: /^\w+\[[1-9]\d*\]/.test(m)
    });
    else if (b !== void 0) i.push({
      name: b,
      value: O
    }), o = !0;
    else if (!o && (i.length > t.envVars.length || !/^(?:time|coproc|!|-p|--)$/.test(m))) return null
  }
  let f = new Set(i.map((d) => d.name)),
    y = e.filter((d) => (d?.type === "file_redirect" || d?.type === "herestring_redirect") && Se(d, f) !== null);
  if (y.length === 0) return null;
  let x = ue("A redirect in this command may read a variable the same command sets, and shells can differ on which value it gets");
  if (x) return x.kind === "too-complex" ? {
    ...x,
    keepsRemovalVerdict: !0
  } : x;
  let c = new Map(a),
    h = new Set;
  for (let {
      name: d,
      value: m,
      isAppend: p,
      word: g,
      isOtherElement: _
    }
    of i) {
    let b = m;
    if (g !== void 0 && Se(g, h) !== null) {
      let A = [],
        R = ht(g) ? M(g, A, c, r) : void 0;
      if (b = typeof R === "string" ? pt.exec(R)?.[3] : void 0, b !== void 0) {
        let T = s.findIndex((N) => N.argv === t.argv);
        s.splice(T === -1 ? s.length : T, 0, ...A)
      }
    }
    if (_) continue;
    let k = p ? c.get(d) : "";
    if (k === void 0 || b === void 0) S(c, d);
    else c.set(d, k + b);
    h.add(d)
  }
  for (let d of y) {
    if (!ht(d)) continue;
    let m = s.length;
    if (d.type === "file_redirect") {
      let g = Ee(d, s, c, r);
      if (s.length = m, !("kind" in g)) n.push(g);
      continue
    }
    if (Ht(d, s, c, r)) s.length = m
  }
  return null
}

function ht(e) {
  if (e.text.length > ie) return !1;
  return ie -= e.text.length, !0
}

function jn(e, t, n, s, a) {
  let r = L,
    i = W,
    u = n.length,
    o = [],
    f = [];
  if (v) Ut.set(o, f);
  let y = [],
    x = [],
    c = [...t],
    h = e.children.some((k) => k && dn.has(k.type)) ? new Map(s) : null,
    d = 0,
    m = !1;
  for (let k of e.children) {
    if (!k) continue;
    let A = ne(k);
    switch (m ||= A, k.type) {
      case "variable_assignment": {
        if (x.length > 0) {
          let T = Se(k, new Set(x.map((N) => N.name)));
          if (T !== null) return {
            kind: "too-complex",
            reason: `Env-prefix value references \`$${T}\` assigned by an earlier env-prefix in the same command \u2014 runtime sees the earlier assignment, static analysis does not`,
            nodeType: "variable_assignment"
          }
        }
        let R = Ge(k, n, s, a);
        if ("kind" in R) return R;
        if (en(R.name, R.value)) return {
          kind: "too-complex",
          reason: `${R.name} has integer attribute \u2014 env-prefix arith-evals value, which can execute subscript command substitution or abort/diverge at runtime`,
          nodeType: "variable_assignment"
        };
        if (x.push(R.isAppend ? {
            name: R.name,
            value: R.value,
            isAppend: !0
          } : {
            name: R.name,
            value: R.value
          }), A) d = x.length - 1;
        break
      }
      case "command_name": {
        let R = k.children[0] ?? k;
        if (Cf()) {
          if (R.type === "simple_expansion" || R.type === "expansion") return w(R);
          if ((R.type === "string" || R.type === "concatenation") && Yt(R)) return w(R)
        }
        let T = M(R, n, s, a);
        if (typeof T !== "string") return T;
        o.push(T), f.push(R), y.push(z(R.text) || Ae(R));
        break
      }
      case "word":
      case "number":
      case "raw_string":
      case "string":
      case "concatenation":
      case "arithmetic_expansion": {
        let R = M(k, n, s, a);
        if (typeof R !== "string") return R;
        if (/^--?[\nA-Za-z0-9_]/.test(R) && Hi(R)) return {
          kind: "too-complex",
          reason: "Argument starting with `-` contains runtime-determined content",
          nodeType: k.type
        };
        o.push(R), f.push(k), y.push(z(k.text) || Ae(k));
        break
      }
      case "simple_expansion": {
        L++;
        let R = fe(k, s, !1);
        if (typeof R !== "string") return R;
        o.push(R), f.push(k), y.push(!0);
        break
      }
      case "file_redirect": {
        let R = x[0]?.name;
        if (R !== void 0 && A) {
          let N = ge(R);
          if (N) return N
        }
        let T = Ee(k, n, s, a);
        if ("kind" in T) return T;
        c.push(T);
        break
      }
      case "herestring_redirect": {
        L++;
        let R = x[0]?.name;
        if (R !== void 0 && A) {
          let N = ge(R);
          if (N) return N
        }
        let T = Ht(k, n, s, a);
        if (T) return T;
        break
      }
      default:
        return w(k)
    }
  }
  if (h) {
    let k = Vt(e.children, {
      argv: o,
      envVars: x
    }, c, n, s, a);
    if (k) return k
  }
  let p = x[0]?.name;
  if (d > 0 && p !== void 0) {
    let k = ge(p);
    if (k) return k
  } {
    let k = Vn(o, x, s, a, u > 0, m);
    if (k) return k
  }
  if (h) Dt(s, h);
  let g = (k, A) => k === "" || /["'\\ \t\n$`;|&<>(){}#]/.test(k) || A === 0 && k.includes("=") ? `'${k.replaceAll("'","'\\''")}'` : k,
    _ = /\$[A-Za-z_]/.test(e.text) || e.text.includes(`
`) ? [...x.map((k) => `${k.name}=${g(k.value)}`), ...o.map((k, A) => g(k, A))].join(" ") : e.text,
    b = z(e.text);
  return {
    kind: "simple",
    commands: [{
      argv: o,
      envVars: x,
      redirects: c,
      text: _,
      hasUnquotedGlob: b,
      argvSourceLiteral: L === r,
      carveOutMayDesyncQuoteScan: W !== i,
      argvUnquotedGlob: y
    }],
    bareAssignmentNames: []
  }
}
var Yn = "*?[";

function Ae(e) {
  switch (e.type) {
    case "word":
    case "number":
      for (let t = 0; t < e.text.length; t++)
        if (e.text[t] === "\\") t++;
        else if (Yn.includes(e.text[t])) return !0;
      return !1;
    case "string":
    case "raw_string":
    case "simple_expansion":
    case "arithmetic_expansion":
      return !1;
    case "concatenation":
      return e.children.some((t) => t !== null && Ae(t));
    default:
      return !0
  }
}

function Qe(e, t, n, s) {
  if (te && $e(e, "heredoc_redirect")) return w(e);
  let a = new Map(n),
    r = t.length,
    i = !1;
  {
    let u = Buffer.from(e.text, "utf8"),
      o = (x) => x === 32 || x === 9 || x === 10 || x === 13 || x === 59 || x === 38,
      f = (x, c) => {
        let h = x;
        while (h < c) {
          let d = u[h];
          if (o(d)) h++;
          else if (d === 92 && (u[h + 1] === 10 || u[h + 1] === 13 && u[h + 2] === 10)) h += u[h + 1] === 13 ? 3 : 2;
          else return !1
        }
        return !0
      },
      y = 0;
    for (let x of e.children) {
      if (!x) continue;
      let c = x.startIndex - e.startIndex;
      if (!f(y, c)) return {
        kind: "too-complex",
        reason: "command substitution contains bytes no parsed node accounts for"
      };
      y = x.endIndex - e.startIndex
    }
    if (!f(y, u.length)) return {
      kind: "too-complex",
      reason: "command substitution contains bytes no parsed node accounts for"
    }
  }
  for (let u of e.children) {
    if (!u) continue;
    if (u.type === "$(" || u.type === "`" || u.type === ")") continue;
    if (u.type !== "comment") i = !0;
    let o = I(u, t, a, s);
    if (o) return o
  }
  if (i && t.length === r) J(t, e);
  return null
}

function M(e, t, n, s) {
  if (!e) return {
    kind: "too-complex",
    reason: "Null argument node"
  };
  switch (e.type) {
    case "word": {
      if (be.test(e.text)) return {
        kind: "too-complex",
        reason: "Word contains brace expansion syntax",
        nodeType: "word",
        differential: !0
      };
      if (Me.test(e.text) || ze.test(e.text)) return {
        kind: "too-complex",
        reason: "Brace body contains backslash-escaped brace",
        nodeType: "word",
        differential: !0
      };
      if (cNt.test(e.text)) return {
        kind: "too-complex",
        reason: "Word contains unescaped ` or $ \u2014 parser missed expansion",
        nodeType: "word",
        differential: !0
      };
      if (ktn.test(e.text)) return {
        kind: "too-complex",
        reason: "Word contains unescaped quote \u2014 parser absorbed quote into brace-body word",
        nodeType: "word"
      };
      return e.text.replace(/\\(.)/g, "$1")
    }
    case "number":
      if (e.children.length > 0) return {
        kind: "too-complex",
        reason: "Number node contains expansion (NN# arithmetic base syntax)",
        nodeType: e.children[0]?.type
      };
      return e.text;
    case "raw_string":
      return jt(e.text);
    case "string":
      return qt(e, t, n, s);
    case "concatenation": {
      if (be.test(e.text)) return {
        kind: "too-complex",
        reason: "Brace expansion",
        nodeType: "concatenation",
        differential: !0
      };
      if (Me.test(e.text) || ze.test(e.text)) return {
        kind: "too-complex",
        reason: "Brace body contains backslash-escaped brace",
        nodeType: "concatenation",
        differential: !0
      };
      let a = "",
        r = !1,
        i = e.startIndex;
      for (let u = 0; u < e.children.length; u++) {
        let o = e.children[u];
        if (!o) continue;
        if (o.startIndex > i) return {
          kind: "too-complex",
          reason: "Concatenation has unparsed bytes between children \u2014 parser dropped content that shell will see",
          nodeType: "concatenation"
        };
        if (i = o.endIndex, o.type === "word" && o.text.includes("{")) r = !0;
        if ((o.type === "simple_expansion" || o.type === "expansion") && (e.children[u + 1]?.text.startsWith("[") || /^:[a-zA-Z&]/.test(e.children[u + 1]?.text ?? ""))) return {
          kind: "too-complex",
          reason: "zsh $name[expr] / $name:mod in bare concatenation \u2014 recursive eval",
          nodeType: "concatenation",
          differential: !0
        };
        let f = M(o, t, n, s);
        if (typeof f !== "string") return f;
        a += f
      }
      if (r && (a.includes(",") || a.includes(".."))) return {
        kind: "too-complex",
        reason: "Brace expansion (unquoted `{` in concatenation with `,`/`..`)",
        nodeType: "concatenation"
      };
      if (XEr.test(a)) return {
        kind: "too-complex",
        reason: "zsh ~[ dynamic directory syntax (post-collapse)",
        nodeType: "concatenation",
        differential: !0
      };
      if (JEr.test(a)) return {
        kind: "too-complex",
        reason: "zsh =cmd expansion (post-collapse)",
        nodeType: "concatenation",
        differential: !0
      };
      return a
    }
    case "arithmetic_expansion": {
      L++;
      let a = Je(e);
      if (a) return a;
      return O
    }
    case "simple_expansion":
      return L++, fe(e, n, !1);
    default:
      return w(e)
  }
}

function qt(e, t, n, s) {
  let a = "",
    r = -1,
    i = !1,
    u = !1,
    o = !1;
  for (let f of e.children) {
    if (!f) continue;
    if (r !== -1 && f.startIndex > r) {
      let y = Buffer.from(e.text, "utf8").subarray(r - e.startIndex, f.startIndex - e.startIndex).toString("utf8");
      if (y.includes("`")) return {
        kind: "too-complex",
        reason: "Unanalyzable backtick body in double-quoted string gap \u2014 shell-evaluated value unknown",
        nodeType: "string",
        differential: !0
      };
      if (y.length > 0) a += y, u = !0
    }
    switch (r = f.endIndex, f.type) {
      case '"':
        r = f.endIndex;
        break;
      case "string_content":
        a += f.text.replace(/\\\n/g, "").replace(/\\([$`"\\])/g, "$1"), u = !0;
        break;
      case it: {
        let y = e.children.indexOf(f),
          x = e.children[y + 1];
        if (x?.type === "string_content") {
          if (x.text.startsWith("[")) return {
            kind: "too-complex",
            reason: "Legacy $[...] arithmetic inside double-quotes \u2014 recursive subscript eval",
            nodeType: "string",
            differential: !0
          };
          if (/^[+^=~]/.test(x.text)) return {
            kind: "too-complex",
            reason: "zsh $+/$^/$=/$~ prefix-flag expansion \u2014 value defeats downstream content checks",
            nodeType: "string",
            differential: !0
          };
          let c = e.children[y - 1];
          if (/^:[a-zA-Z&]/.test(x.text) && c?.type === "simple_expansion" && c.endIndex === f.startIndex && c.children.some((h) => h?.type === "special_variable_name")) return {
            kind: "too-complex",
            reason: 'zsh "$name[expr]" / "$name:mod" inside double-quotes \u2014 recursive eval',
            nodeType: "string",
            differential: !0
          }
        }
        a += it, u = !0;
        break
      }
      case "command_substitution": {
        let y = Xn(f);
        if (y === "DANGEROUS") return w(f);
        if (y !== null) {
          let c = y.replace(/\n+$/, "");
          if (pn.test(f.text)) W++;
          if (c.includes(`
`)) {
            if (/^--?[A-Za-z0-9]/.test(a + c)) return {
              kind: "too-complex",
              reason: "cat-heredoc body would make the argument start with option syntax",
              nodeType: "command_substitution"
            };
            _e++, a += `
` + hee, u = !0;
            break
          }
          _e++, a += c, u = !0;
          break
        }
        let x = Qe(f, t, n, s);
        if (x) return x;
        L++, a += hee, i = !0;
        break
      }
      case "simple_expansion": {
        L++;
        let y = fe(f, n, !0);
        if (typeof y !== "string") return y;
        {
          let x = e.children[e.children.indexOf(f) + 1],
            c = f.children.some((h) => h?.type === "special_variable_name");
          if (x?.type === "string_content" && (x.text.startsWith("[") || /^:[a-zA-Z&]/.test(x.text) || c && Fn.test(x.text))) return {
            kind: "too-complex",
            reason: 'zsh "$name[expr]" / "$name:mod" inside double-quotes \u2014 recursive eval',
            nodeType: "string",
            differential: !0
          }
        }
        if (Hi(y)) i = !0;
        else if (y !== "") u = !0;
        else o = !0;
        a += y;
        break
      }
      case "arithmetic_expansion": {
        let y = Je(f);
        if (y) return y;
        L++, a += O, i = !0;
        break
      }
      default:
        return w(f)
    }
  }
  if (i) {
    if ([...a.replaceAll(hee, "").replaceAll(O, "")].length <= 1) return w(e)
  }
  if (!u && !i && !o && e.text.length > 2) {
    let f = e.text.slice(1, -1);
    if (f.includes("`") || f.includes("$(")) return {
      kind: "too-complex",
      reason: "Delimiters-only string node contains unparsed command substitution",
      nodeType: "string",
      differential: !0
    };
    return f
  }
  return a
}
var Kn = /^(?:[0-9]+|0[xX][0-9a-fA-F]+|[0-9]+#[0-9a-zA-Z]+|[-+*/%^&|~!<>=?:(),]+|<<|>>|\*\*|&&|\|\||[<>=!]=|\$\(\(|\)\))$/;

function Je(e) {
  for (let t of e.children) {
    if (!t) continue;
    if (t.children.length === 0) {
      if (!Kn.test(t.text)) return {
        kind: "too-complex",
        reason: `Arithmetic expansion references variable or non-literal: ${t.text}`,
        nodeType: "arithmetic_expansion"
      };
      continue
    }
    switch (t.type) {
      case "binary_expression":
      case "unary_expression":
      case "ternary_expression":
      case "parenthesized_expression": {
        let n = Je(t);
        if (n) return n;
        break
      }
      default:
        return w(t)
    }
  }
  return null
}

function J(e, t) {
  e.push({
    argv: ["true"],
    envVars: [],
    redirects: [],
    text: t.text,
    hasUnquotedGlob: z(t.text)
  })
}

function ne(e) {
  if (e.type === "arithmetic_expansion") return !0;
  for (let t of e.children)
    if (t && ne(t)) return !0;
  return !1
}

function Xn(e) {
  let t = null;
  for (let a of e.children) {
    if (!a) continue;
    if (a.type === "$(" || a.type === ")") continue;
    if (a.type === "redirected_statement" && t === null) t = a;
    else return null
  }
  if (!t) return null;
  let n = !1,
    s = null;
  for (let a of t.children) {
    if (!a) continue;
    if (a.type === "command") {
      let r = a.children.filter((u) => u);
      if (r.length !== 1) return null;
      let i = r[0];
      if (i?.type !== "command_name" || i.text !== "cat") return null;
      n = !0
    } else if (a.type === "heredoc_redirect") {
      if (Ue(a) !== null) return null;
      for (let r of a.children) {
        if (r?.type === "<<-") return null;
        if (r?.type === "heredoc_body") s = r.text
      }
    } else return null
  }
  if (!n || s === null) return null;
  if (qe.test(s)) return "DANGEROUS";
  if (fNt(s) !== !1) return "DANGEROUS";
  return s
}

function Ge(e, t, n, s) {
  let a = null,
    r = "",
    i = !1;
  for (let u of e.children) {
    if (!u) continue;
    if (u.type === "variable_name") a = u.text;
    else if (u.type === "=" || u.type === "+=") {
      i = u.type === "+=";
      continue
    } else if (u.type === "command_substitution") {
      let o = Qe(u, t, n, s);
      if (o) return o;
      r = hee
    } else if (u.type === "simple_expansion") {
      let o = fe(u, n, !0);
      if (typeof o !== "string") return o;
      r = o
    } else {
      let o = M(u, t, n, s);
      if (typeof o !== "string") return o;
      r = o
    }
  }
  if (a === null) return {
    kind: "too-complex",
    reason: "Variable assignment without name",
    nodeType: "variable_assignment"
  };
  if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(a)) return {
    kind: "too-complex",
    reason: `Invalid variable name (bash treats as command): ${a}`,
    nodeType: "variable_assignment"
  };
  if (a === "IFS") return {
    kind: "too-complex",
    reason: "IFS assignment changes word-splitting \u2014 cannot model statically",
    nodeType: "variable_assignment"
  };
  if (a === "PS4" || a === "PROMPT4") {
    if (i) return {
      kind: "too-complex",
      reason: "PS4 += cannot be statically verified \u2014 combine into a single PS4= assignment",
      nodeType: "variable_assignment"
    };
    if (Hi(r)) return {
      kind: "too-complex",
      reason: "PS4 value derived from cmdsub/variable \u2014 runtime unknowable",
      nodeType: "variable_assignment"
    };
    if (!/^[A-Za-z0-9 _+:./=[\]-]*$/.test(r.replace(/\$\{[A-Za-z_][A-Za-z0-9_]*\}/g, ""))) return {
      kind: "too-complex",
      reason: "PS4 value outside safe charset \u2014 only ${VAR} refs and [A-Za-z0-9 _+:.=/[]-] allowed",
      nodeType: "variable_assignment"
    }
  }
  if (r.includes("~") && !v) return {
    kind: "too-complex",
    reason: "Tilde in assignment value \u2014 bash may expand at assignment time",
    nodeType: "variable_assignment"
  };
  return {
    name: a,
    value: r,
    isAppend: i
  }
}
var uFn = new Set(["_", "RANDOM", "SECONDS", "LINENO", "BASH_COMMAND", "FUNCNAME", "EPOCHSECONDS", "EPOCHREALTIME", "SRANDOM", "BASHPID", "BASH_MONOSECONDS", "BASH_TRAPSIG", "HISTCMD", "ERRNO", "REPLY", "reply", "PIPESTATUS", "pipestatus", "BASH_SOURCE", "DIRSTACK", "GROUPS", "BASH_ARGV", "BASH_ARGC", "BASH_SUBSHELL", "BASH_LINENO", "BASH_ARGV0", "BASH_REMATCH", "MATCH", "match", "MBEGIN", "MEND", "mbegin", "mend", "OPTARG", "OPTIND", "argv", "FIGNORE", "fignore", "PSVAR", "psvar", "WATCH", "watch", "HISTCHARS", "histchars", "PS1", "PROMPT", "prompt", "PS2", "PROMPT2", "PS3", "PROMPT3", "PS4", "PROMPT4", "RPS1", "RPROMPT", "RPS2", "RPROMPT2"]);

function fe(e, t, n) {
  let s = null,
    a = !1;
  for (let u of e.children) {
    if (u?.type === "variable_name") {
      s = u.text;
      break
    }
    if (u?.type === "special_variable_name") {
      s = u.text, a = !0;
      break
    }
  }
  if (s === null) return w(e);
  let r = t.get(s),
    i = r === void 0 ? void 0 : ce(r);
  if (i !== void 0) {
    if (i.includes(C)) {
      let u = w(e);
      return u.kind === "too-complex" && !v ? {
        ...u,
        divergentShape: !0
      } : u
    }
    if (uFn.has(s)) return n && Le.has(s) && s !== "BASHPID" ? O : w(e);
    if (Hi(i)) {
      if (!n) return w(e);
      return G ||= i !== O && i !== hee, i
    }
    if (!n) {
      if (i === "") return w(e);
      if (rt.test(i)) return w(e)
    }
    return G = !0, i
  }
  if (s === "HOME") {
    let u = cn();
    if (!n && (u === "" || rt.test(u))) return w(e);
    return u
  }
  if (n) {
    if (Le.has(s)) return O;
    if (a && (yn.has(s) || /^[0-9]+$/.test(s))) return O
  }
  return w(e)
}

function Oe(e, t) {
  se(t, e)
}

function mt(e, t, n, s) {
  if (!ae || e === Y) return [];
  if (j >= On) return {
    kind: "too-complex",
    reason: "Loops nested too deeply to follow the variables they change",
    nodeType: e.type
  };
  let a = new Map(n),
    r = Y,
    i = G,
    u = H,
    o = V,
    f = q,
    y = F,
    x = Z;
  F = new Map(y), Y = e, j++;
  let c = I(e, [...t], a, [...s]);
  return j--, Y = r, G = i, H = u, V = o, q = f, F = y, Z = x, c ?? [...n.keys()].filter((h) => a.get(h) !== n.get(h))
}

function gt(e, t) {
  let n = () => {
    for (let s of t.keys()) S(t, s)
  };
  for (let s of e) {
    if (s?.type === "unset" && s.text === "unsetenv") return;
    if (!s || s.type === "unset" || s.type === "file_redirect" || s.type === "heredoc_redirect" || s.type === "herestring_redirect") continue;
    if (s.type === "variable_name") {
      S(t, s.text.replace(/\\/g, ""));
      continue
    }
    if (s.type === "word") {
      if (s.text.startsWith("-")) {
        if (s.text === "--" || /^-[fvn]+$/.test(s.text)) continue;
        n();
        continue
      }
      if (/^\\?[A-Za-z_][A-Za-z0-9_]*$/.test(s.text)) {
        S(t, s.text.replace(/^\\/, ""));
        continue
      }
    }
    n()
  }
}

function Ve(e) {
  if (!e) return null;
  switch (e.type) {
    case "word":
    case "number":
      return e.text.replace(/\\(.)/g, "$1");
    case "raw_string":
      return e.text.slice(1, -1);
    case "string": {
      let t = e.children.filter((n) => n && n.type !== '"');
      if (t.length === 0) return "";
      if (t.length === 1 && t[0]?.type === "string_content") return t[0].text;
      return null
    }
    case "concatenation": {
      let t = "";
      for (let n of e.children) {
        let s = Ve(n);
        if (s === null) return null;
        t += s
      }
      return t
    }
    default:
      return null
  }
}

function se(e, t) {
  if (e.type === "function_definition" || e.type === "subshell" || e.type === "command_substitution" || e.type === "process_substitution") return;
  if (e.type === "pipeline") {
    let n = null;
    for (let s of e.children)
      if (s && !ye.has(s.type)) n = s;
    if (n) se(n, t);
    return
  }
  if (e.type === "list" || e.type === "program") {
    let n = e.children;
    for (let s = 0; s < n.length; s++) {
      let a = n[s];
      if (!a || ye.has(a.type)) continue;
      let r = s + 1;
      while (r < n.length && !n[r]) r++;
      if (n[r]?.type === "&") continue;
      se(a, t)
    }
    return
  }
  if (e.type === "variable_assignment") {
    for (let n of e.children)
      if (n?.type === "variable_name") {
        S(t, n.text);
        break
      }
  }
  if (e.type === "for_statement") {
    for (let n of e.children)
      if (n?.type === "variable_name") {
        S(t, n.text);
        break
      }
  }
  if (e.type === "unset_command") gt(e.children, t);
  if (e.type === "command") {
    let n, s, a = [],
      r = [],
      i = !1;
    for (let d of e.children) {
      if (!d) continue;
      if (d.type === "command_name") s = d, n = Ve(d.children[0] ?? d) ?? void 0, i = !0;
      else if (!i || d.type === "file_redirect" || d.type === "herestring_redirect" || d.type === "heredoc_redirect");
      else a.push(Ve(d) ?? ""), r.push(d)
    }
    let u = !1,
      o;
    while (n !== void 0 && (He.has(n) || n === "!")) {
      if ((o === "builtin" || o === "command") && n !== "builtin" && n !== "command" && n !== "noglob") u = !0;
      let d = n === "!" ? void 0 : n;
      while (a.length > 0) {
        let m = a[0];
        if (/^-[-pvV]*$/.test(m)) {
          if (/[vV]/.test(m) || d === "builtin" && /p/.test(m) && Njn()) u = !0;
          a.shift(), r.shift()
        } else if (/^[A-Za-z_]\w*(\[[^\]]*\])?\+?=/.test(m)) {
          if (d !== void 0 && Ze.has(d) && (Zt.test(m) && !Hi(m) || v) && Njn()) u = !0;
          let p = m.match(/^[A-Za-z_][A-Za-z0-9_]*/)[0];
          S(t, p), a.shift(), r.shift(), d = void 0
        } else break
      }
      o = d, n = a.shift(), r.shift()
    }
    let f = a,
      y = (d) => {
        if (/^[A-Za-z_][A-Za-z0-9_]*$/.test(d)) S(t, d)
      };
    if (n === "read" && !RTo()) {
      S(t, "REPLY");
      let d = 0,
        m = !1;
      while (d < f.length) {
        let p = f[d];
        if (!m && p === "--") {
          m = !0, d++;
          continue
        }
        if (!m && p.startsWith("-")) {
          if (I7e.has(p)) {
            d += 2;
            continue
          }
          let g = !1;
          for (let _ = 1; _ < p.length; _++) {
            let b = p[_];
            if (b === "a" || b === "A") {
              y(_ < p.length - 1 ? p.slice(_ + 1) : f[d + 1] ?? ""), g = _ === p.length - 1;
              break
            }
            if (I7e.has("-" + b)) {
              g = _ === p.length - 1;
              break
            }
          }
          d += g ? 2 : 1;
          continue
        }
        y(p), d++
      }
    } else if (n === "mapfile" || n === "readarray") {
      S(t, "MAPFILE");
      for (let d = 0; d < f.length; d++) {
        let m = f[d];
        if (m.startsWith("-")) {
          if (/^-[dnOsuCc]$/.test(m)) d++;
          continue
        }
        y(m)
      }
    } else if (n === "unset" && !u) gt(r, t);
    let x = s?.children[0],
      c = x?.type === "word" ? x.text.replace(/\\(.)/g, "$1") : void 0,
      h = c !== void 0 && !ZEr.has(c) && !He.has(c) && !(U === void 0 ? Xe : Gt).has(c);
    for (let d of e.children)
      if (d && (d.type !== "variable_assignment" || !h)) se(d, t);
    return
  }
  if (e.type === "declaration_command") {
    for (let n of e.children)
      if (n?.type === "string" || n?.type === "raw_string" || n?.type === "word" || n?.type === "number" || n?.type === "concatenation" || n?.type === "variable_name") {
        let s = n.text.replace(/['"\\]/g, ""),
          a = /^([A-Za-z_][A-Za-z0-9_]*)\+?=/.exec(s);
        if (a) S(t, a[1]);
        else {
          let r = s.indexOf("=");
          if (r > 0 && s.lastIndexOf("$", r - 1) !== -1)
            for (let i of [...t.keys()]) S(t, i)
        }
      }
  }
  for (let n of e.children)
    if (n) se(n, t)
}

function X(e, t) {
  for (let [n, s] of t) {
    let a = e.get(n);
    if (a !== void 0 && a !== s) {
      let r = ce(s);
      if (F.get(n) === r && ce(a) !== r) Z = !0;
      S(e, n)
    }
  }
  for (let n of e.keys())
    if (!t.has(n)) S(e, n)
}

function Ce(e, t, n = !1) {
  if (n) {
    S(e, t.name);
    return
  }
  if (t.isAppend && !e.has(t.name)) return;
  let s = e.get(t.name);
  if (s !== void 0 && s !== t.value && !t.isAppend && !Hi(t.value)) {
    S(e, t.name);
    return
  }
  let a = t.isAppend ? (s ?? "") + t.value : t.value;
  e.set(t.name, a)
}

function jt(e) {
  return e.slice(1, -1)
}

function Yt(e) {
  for (let t of e.children) {
    if (!t) continue;
    if (t.type === "simple_expansion" || t.type === "expansion") return !0;
    if (Yt(t)) return !0
  }
  return !1
}

function Qn(e) {
  if (e === "~" || e.startsWith("~/")) return "HOME";
  if (e === "~+" || e.startsWith("~+/")) return "PWD";
  if (e === "~-" || e.startsWith("~-/")) return "OLDPWD";
  return null
}

function Se(e, t) {
  let n = e.type === "variable_assignment";
  for (let s of e.children) {
    if (!s) continue;
    if (s.type === "variable_name") {
      if (n) continue;
      if (t.has(s.text)) return s.text
    }
    if (s.type === "word") {
      let r = Qn(s.text);
      if (r !== null && t.has(r)) return r
    }
    let a = Se(s, t);
    if (a !== null) return a
  }
  return null
}

function w(e) {
  if (e.type === "ERROR") return {
    kind: "too-complex",
    reason: Et(e.text) || e.text.startsWith("${") && Dho(e.text) ? "A $ followed by non-ASCII text in this command can't be checked before it runs" : "Parse error",
    nodeType: e.type
  };
  let t = Jn.get(e.type);
  return {
    kind: "too-complex",
    reason: `${t===void 0?"This command":`${t} in this command`} can't be checked before it runs`,
    nodeType: e.type
  }
}
var Jn = new Map([
  ["simple_expansion", "A variable"],
  ["expansion", "A variable in braces"],
  ["command_substitution", "A nested command"],
  ["process_substitution", "A command used as a file"],
  ["brace_expression", "A brace pattern"],
  ["ansi_c_string", "Text with escape codes"],
  ["translated_string", "Translatable text"],
  ["test_command", "A test in brackets"],
  ["herestring_redirect", "A here-string"],
  ["heredoc_redirect", "A here-document"],
  ["subshell", "A group in parentheses"],
  ["compound_statement", "A group in braces or double parentheses"],
  ["for_statement", "A for or select loop"],
  ["c_style_for_statement", "A counting for loop"],
  ["while_statement", "A while or until loop"],
  ["until_statement", "An until loop"],
  ["if_statement", "An if statement"],
  ["case_statement", "A case statement"],
  ["function_definition", "A function definition"],
  ["array", "A list of values"],
  ["string", "Quoted text"],
  ["file_redirect", "A file redirect"],
  ["pipeline", "A pipeline"],
  ["concatenation", "Joined pieces of text"],
  ["variable_assignment", "A variable assignment"],
  ["variable_assignments", "Variable assignments"]
]);

function Xks(e) {
  let t = [],
    n = 0,
    s = !1,
    a = !1;
  while (n < e.length) {
    let r = e[n];
    if (r === "\\" && !s) {
      n += 2;
      continue
    }
    if (r === "'" && !a) {
      s = !s, n++;
      continue
    }
    if (r === '"' && !s) {
      a = !a, n++;
      continue
    }
    if (!s && r === "$" && e[n + 1] === "{") {
      let i = 1,
        u = n + 2,
        o = !1,
        f = !1;
      while (u < e.length && i > 0) {
        let y = e[u];
        if (y === "\\" && !o) {
          u += 2;
          continue
        }
        if (y === "'" && !f) o = !o;
        else if (y === '"' && !o) f = !f;
        else if (!o && !f) {
          if (y === "{") i++;
          else if (y === "}") i--
        }
        u++
      }
      t.push(e.slice(n + 2, i === 0 ? u - 1 : u)), n = u;
      continue
    }
    n++
  }
  return t
}

function uNt(e) {
  let t = "",
    n = !1,
    s = !1;
  for (let a = 0; a < e.length; a++) {
    let r = e[a];
    if (n) {
      if (r === "'") n = !1, t += r;
      continue
    }
    if (r === "\\" && !n) {
      let i = e[a + 1];
      if (a++, i !== void 0 && !"$'\"`\\".includes(i)) t += i;
      continue
    }
    if (r === '"') {
      s = !s, t += r;
      continue
    }
    if (r === "'" && !s) {
      n = !0, t += r;
      continue
    }
    t += r
  }
  return t
}

function x7e(e) {
  let t = "",
    n;
  for (let s = 0; s < e.length; s++) {
    let a = e[s];
    if (n === "'") {
      if (a === "'") n = void 0;
      continue
    }
    if (n === '"') {
      if (a === "\\") s++;
      else if (a === '"') n = void 0;
      continue
    }
    if (a === "\\") {
      s++;
      continue
    }
    if (a === "'" || a === '"') {
      n = a;
      continue
    }
    t += a
  }
  return t
}
var eTr = ["strftime", "pcre_match", "zstat", "zselect", "zgetattr", "zlistattr", "ztie", "zuntie", "syserror", "zsystem", "zftp", "zcurses"],
  Kt = new Set(["zformat", "zparseopts", "zstyle", "zregexparse", "getln", "vared", ...eTr]);

function Xt(e, t) {
  return e === "stat" && t.some((n) => /^-[gnNolLtTrs]*[AH]/.test(n)) && btn() ? "'stat' with -A or -H \u2014 zsh's stat builtin stores its result in the variable that option names, so a tracked value cannot be statically verified" : null
}
var P7e = new Set(["zmodload", "emulate", "sysopen", "sysread", "syswrite", "sysseek", "zpty", "ztcp", "zsocket", "zf_rm", "zf_mv", "zf_ln", "zf_chmod", "zf_chown", "zf_mkdir", "zf_rmdir", "zf_chgrp", "repeat", "foreach", "zcompile", "setopt", "unsetopt", "disable", "shopt", "autoload", "functions", ...Kt]),
  er = new Set(["-exec", "-execdir", "-ok", "-okdir", "-delete", "-rm", "-fprint", "-fprint0", "-fprintf", "-fls", "-files0-from"]);

function fFn(e) {
  return er.has(e) && SDr(e)
}
var tr = new Set(["-name", "-iname", "-path", "-ipath", "-lname", "-ilname", "-regex", "-iregex", "-wholename", "-iwholename", "-samefile", "-newer", "-anewer", "-cnewer", "-mnewer", "-perm", "-user", "-group", "-uid", "-gid", "-size", "-type", "-xtype", "-fstype", "-inum", "-links", "-used", "-context", "-amin", "-cmin", "-mmin", "-atime", "-ctime", "-mtime", "-mindepth", "-maxdepth", "-printf", "-regextype", "-D", "-f", "-flags", "-Bnewer", "-Btime", "-Bmin", "-files0-from", "-xattrname"]),
  nr = /^-newer[aBcm][aBcmt]$/,
  Qt = /^-(?:[EHLPXdsx]*D|f|[dsx]*[EHLPX][EHLPXdsx]*f)$/,
  rr = /^-[dsx]+f$/;

function Ttn(e) {
  return tr.has(e) || nr.test(e) || Qt.test(e)
}

function pFn(e) {
  return Qt.test(e)
}

function mFn(e) {
  return rr.test(e)
}
var gse = new Set(["eval", "source", ".", "exec", "nocorrect", "fc", "coproc", "trap", "enable", "mapfile", "readarray", "hash", "bind", "complete", "compgen", "alias", "let"]);
var MCe = new Set(["awk", "gawk", "mawk", "nawk"]),
  sr = /^(?:-[FvW]$|--(?:fie|a$|as))/;

function fNt(e) {
  if (/(?<![A-Za-z_])system[\s\\]*\(/.test(e)) return "awk program contains system() which executes arbitrary commands";
  if (/(?:^|[^|])\|&?[^/|%";#{}]*"/.test(e) || /(?:^|[^|])\|&?[\s\\]*getline\b/.test(e)) return 'awk program contains a command pipe (| "cmd" or | getline) which executes arbitrary commands';
  if (/@[\s\\]*(?:load|include)\b|@[\s\\]*\w+(?:::\w+)?(?:\[[^\]]*\])*[\s\\]*\(/.test(e)) return "awk program contains @load/@include or an @indirect call which can execute arbitrary code";
  if (/(?<![A-Za-z_])extension[\s\\]*\(/.test(e)) return "awk program contains extension() which loads arbitrary native code (legacy gawk)";
  if (/"\/inet[46]?\//.test(e)) return "awk program opens a gawk /inet/ network socket which can exfiltrate data";
  return !1
}
var N_e = new Set(["bash", "sh", "zsh", "dash", "ksh", "mksh", "ash", "hush", "rbash"]),
  Ctn = new Set(["busybox", "toybox", "wsl", "su", "runuser"]),
  NF = new Set([...N_e, "fish", "csh", "tcsh", "rsh", ...Ctn, "cmd", "powershell", "pwsh"]),
  zLe = new Set(["time", "command", "builtin", "noglob", "env", "nice", "nohup", "sudo", "doas", "stdbuf", "timeout"]),
  c3 = new Set(["watch", "ionice", "chrt", "setsid", "taskset", "strace", "ltrace", "script", "flock", "unshare", "nsenter"]);

function Jt(e) {
  return P7e.has(e) && (!Kt.has(e) || btn())
}

function Jks(e) {
  let t = iO(e);
  return gse.has(e) || Jt(e) || c3.has(e) || c3.has(t) || t === "rm" || t === "rmdir"
}
var Oho = {
    test: new Set(["-v", "-R", "-t"]),
    "[": new Set(["-v", "-R", "-t"]),
    "[[": new Set(["-v", "-R", "-t"]),
    printf: new Set(["-v"]),
    read: new Set(["-a"]),
    unset: new Set(["-v"]),
    wait: new Set(["-p"])
  },
  O7e = new Set(["-eq", "-ne", "-lt", "-le", "-gt", "-ge"]),
  pNt = /^-?(0[xX][0-9a-fA-F]+|[0-9]+#[0-9a-zA-Z]+|[0-9]+)$/,
  Iho = new Set(["read", "unset"]),
  xt = new Set(["declare", "typeset", "local", "export", "readonly", "private", "float", "integer"]),
  Mho = /^[+-][-+\w:]*P/,
  mNt = new Set(["declare", "typeset", "local", "export", "readonly", "print", "getopts", "set", "zparseopts", "zformat", "zstyle", ...eTr, "autoload", "shift", "exit", "return", "break", "continue", "bye", "logout", "vared", "private", "getln", "zregexparse", "float", "integer"]),
  Rtn = new Set(["pipefail", "errexit", "nounset", "xtrace", "noglob", "noclobber", "verbose", "monitor", "notify", "vi", "emacs", "errtrace", "functrace", "hashall", "physical", "ignoreeof"]),
  Atn = new Set(["e", "u", "x", "f", "C", "v", "m", "b", "E", "T", "h", "P", "n"]),
  ir = new Set(["path", "home", "dirstack", "tmpprefix", "bash_env", "env", "cdpath", "globignore", "shell", "fpath", "bash_loadables_path", "module_path", "manpath", "mailpath", "readnullcmd", "nullcmd", "histfile", "zdotdir", "functions", "commands", "aliases", "galiases", "saliases", "bash_cmds", "bash_aliases", "execignore", "bash_source_path", "lang", "language", "lc_all", "lc_ctype", "lc_collate", "lc_messages", "lc_numeric", "lc_time", "histchars", "textdomain", "textdomaindir"]),
  hNt = new Set(["RANDOM", "SECONDS", "LINENO", "OPTIND", "MAILCHECK", "HISTCMD", "SRANDOM", "EPOCHSECONDS", "EPOCHREALTIME", "BASHPID", "BASH_MONOSECONDS", "BASH_TRAPSIG", "COLUMNS", "LINES", "SHLVL", "ERRNO", "TMOUT", "HISTSIZE", "SAVEHIST", "TRY_BLOCK_ERROR", "TRY_BLOCK_INTERRUPT", "KEYTIMEOUT", "LISTMAX", "LOGCHECK", "PERIOD", "FUNCNEST", "UID", "EUID", "GID", "EGID", "REPORTTIME", "REPORTMEMORY", "DIRSTACKSIZE", "BAUD", "ZLE_RPROMPT_INDENT", "MBEGIN", "MEND", "PPID", "ARGC", "ZSH_SUBSHELL", "TTYIDLE", "status"]);

function en(e, t) {
  if (!hNt.has(e)) return !1;
  if (t.includes("[") || t.includes("`") || /\$\(/.test(t) || Hi(t)) return !0;
  if (!/^(0|[1-9][0-9]{0,17})$/.test(t)) return !0;
  return !1
}

function aht(e) {
  let t = e.toLowerCase();
  return ir.has(t) || t.startsWith("ld_") || t.startsWith("dyld_") || t.startsWith("bash_func_")
}

function u3(e) {
  return aht(e) || e === "IFS" || e === "PS4" || e === "PROMPT4" || hNt.has(e)
}
var I7e = new Set(["-p", "-d", "-n", "-N", "-t", "-u", "-i"]),
  yt = new Set(["-p", "-t", "-n"]),
  tTr = new Set(["-t", "-n", "-N"]),
  hFn = /^(?:[0-9]+(?:\.[0-9]+)?|\.[0-9]+)$/,
  ar = /^[A-Za-z_][A-Za-z0-9_]*\[/,
  or = new Set(["-f", "-C", "-x", "-X", "-u"]),
  qe = /\/proc\/.*\/environ/,
  xe = /\n\s*#/;

function GLe(e, t) {
  let n = t?.sourceGlobRecord !== !1,
    s = null;
  for (let a of e) {
    let r = a.argv,
      i = !1;
    for (;;) {
      let c = r[0] === void 0 ? void 0 : iO(r[0]),
        h = c === "time" || c === "nohup" || c === "timeout" || c === "nice" || c === "stdbuf" || c === "env" || c === "command" || c === "xargs" ? c : r[0];
      if (h === "time" || h === "nohup") {
        if (r = r.slice(1), r[0] !== void 0 && !/^[\w./~+-]+$/.test(r[0])) return {
          ok: !1,
          reason: `'${h} ${r[0]}' can't be checked before it runs`
        }
      } else if (h === "timeout") {
        let d = 1;
        while (d < r.length) {
          let m = r[d];
          if (m === "--foreground" || m === "--preserve-status" || m === "--verbose") d++;
          else if (/^--(?:kill-after|signal)=[A-Za-z0-9_.+-]+$/.test(m)) d++;
          else if ((m === "--kill-after" || m === "--signal") && r[d + 1] && /^[A-Za-z0-9_.+-]+$/.test(r[d + 1])) d += 2;
          else if (m.startsWith("--")) return {
            ok: !1,
            reason: `'timeout ${m}' can't be checked before it runs`
          };
          else if (m === "-v") d++;
          else if ((m === "-k" || m === "-s") && r[d + 1] && /^[A-Za-z0-9_.+-]+$/.test(r[d + 1])) d += 2;
          else if (/^-[ks][A-Za-z0-9_.+-]+$/.test(m)) d++;
          else if (m.startsWith("-")) return {
            ok: !1,
            reason: `'timeout ${m}' can't be checked before it runs`
          };
          else break
        }
        if (r[d] && /^\d+(?:\.\d+)?[smhd]?$/.test(r[d])) r = r.slice(d + 1);
        else if (r[d]) return {
          ok: !1,
          reason: `timeout duration '${r[d]}' can't be checked before it runs`
        };
        else break
      } else if (h === "nice")
        if (r[1] === "-n" && r[2] && /^-?\d+$/.test(r[2])) r = r.slice(3);
        else if (r[1] && /^-\d+$/.test(r[1])) r = r.slice(2);
      else if (r[1] && (/[$(`]/.test(r[1]) || Hi(r[1]))) return {
        ok: !1,
        reason: `nice argument '${r[1]}' contains expansion \u2014 cannot statically determine wrapped command`
      };
      else r = r.slice(1);
      else if (h === "env") {
        let d = 1;
        while (d < r.length) {
          let m = r[d];
          if (m.includes("=") && !m.startsWith("-")) d++;
          else if (m === "-i" || m === "-0" || m === "-v") d++;
          else if (m === "-u" && r[d + 1]) d += 2;
          else if (m.startsWith("-")) return {
            ok: !1,
            reason: `'env ${m}' can't be checked before it runs`
          };
          else break
        }
        if (d < r.length) r = r.slice(d);
        else break
      } else if (h === "stdbuf") {
        let d = 1;
        while (d < r.length) {
          let m = r[d];
          if (mn.test(m) && r[d + 1]) d += 2;
          else if (gn.test(m)) d++;
          else if (xn.test(m)) d++;
          else if (m.startsWith("-")) return {
            ok: !1,
            reason: `'stdbuf ${m}' can't be checked before it runs`
          };
          else break
        }
        if (d > 1 && d < r.length) r = r.slice(d);
        else break
      } else if (h === "command") {
        let d = 1,
          m = !1;
        while (d < r.length && r[d].startsWith("-") && r[d] !== "--") {
          let p = r[d];
          if (!/^-[pvV]+$/.test(p)) return {
            ok: !1,
            reason: `'command ${p}' can't be checked before it runs`
          };
          if (p.includes("v") || p.includes("V")) m = !0;
          d++
        }
        if (r[d] === "--") d++;
        if (m || d >= r.length) break;
        r = r.slice(d)
      } else if (r[0] === "builtin" || r[0] === "noglob") {
        let d = r[0] === "builtin" && r[1] === "--" ? 2 : 1;
        if (d < r.length) r = r.slice(d);
        else break
      } else if (h === "xargs")
        if (r.length >= 2 && !r[1].startsWith("-")) r = r.slice(1), i = !0;
        else break;
      else break
    }
    let u = r[0];
    if (u === void 0) continue;
    let o = iO(u);
    if (u === "") return {
      ok: !1,
      reason: "Empty command name \u2014 argv[0] may not reflect what bash runs"
    };
    if (Hi(u)) return {
      ok: !1,
      reason: "Command name is runtime-determined (placeholder argv[0])"
    };
    if (u.startsWith("-") || u.startsWith("|") || u.startsWith("&")) return {
      ok: !1,
      reason: "Command appears to be an incomplete fragment"
    };
    let f = Wr(Oho, o),
      y = o === "test" || o === "[" || o === "[[";
    if (f !== void 0)
      for (let c = 1; c < r.length; c++) {
        let h = r[c],
          d = r[c + 1];
        if (f.has(h) && d !== void 0 && (d.includes("[") || Hi(d))) return {
          ok: !1,
          reason: `'${o} ${h}' operand contains array subscript or runtime-determined value \u2014 bash evaluates $(cmd) in subscripts`
        };
        if (y) {
          if (h === "-t" && d !== void 0 && !pNt.test(d)) return {
            ok: !1,
            reason: `'${o} -t' operand is non-numeric \u2014 zsh arith-evals identifiers (may run $(cmd))`
          };
          continue
        }
        if (h.length > 2 && h[0] === "-" && h[1] !== "-" && !h.includes("[")) {
          for (let m of f)
            if (m.length === 2 && h.includes(m[1])) {
              let p = r[c + 1];
              if (p !== void 0 && (p.includes("[") || Hi(p))) return {
                ok: !1,
                reason: `'${o} ${m}' (combined in '${h}') operand contains array subscript \u2014 bash evaluates $(cmd) in subscripts`
              }
            }
        }
        if (h.length > 2 && h[0] === "-" && o !== "read")
          for (let m of f) {
            if (m.length !== 2) continue;
            let p = h.indexOf(m[1], 1);
            if (p === -1 || p === h.length - 1) continue;
            let g = h.slice(p + 1);
            if (/[A-Za-z_][A-Za-z0-9_]*\[/.test(g) || Hi(g)) return {
              ok: !1,
              reason: `'${o} ${m}' (fused in '${h}') operand contains array subscript \u2014 bash evaluates $(cmd) in subscripts`
            }
          }
      }
    if (y)
      for (let c = 2; c < r.length; c++) {
        if (!O7e.has(r[c])) continue;
        for (let h of [r[c - 1], r[c + 1]]) {
          if (h === void 0) continue;
          if (h.includes("[") || !pNt.test(h)) return {
            ok: !1,
            reason: `'${o} ... ${r[c]} ...' operand is non-numeric \u2014 \`[[\` arithmetically evaluates identifiers/subscripts (may run $(cmd))`
          }
        }
      }
    if (Iho.has(o)) {
      let c = !1;
      for (let h = 1; h < r.length; h++) {
        let d = r[h];
        if (c !== !1) {
          let m = c;
          if (c = !1, m === "numeric" && !hFn.test(d)) return {
            ok: !1,
            reason: `'read ${r[h-1]}' operand '${d}' is non-numeric \u2014 zsh arith-evals subscripts/expressions (may run $(cmd))`
          };
          if (m === "prompt" && (ar.test(d) || d[0] === "-" && /[A-Za-z_][A-Za-z0-9_]*\[/.test(d) || d.includes(hee))) return {
            ok: !1,
            reason: `'read ${r[h-1]}' operand '${d}' is a subscripted NAME, dash-prefixed with a subscript, or runtime-determined \u2014 zsh -p takes no operand; may arith-eval the subscript and run $(cmd)`
          };
          continue
        }
        if (d[0] === "-") {
          if (o === "read") {
            if (tTr.has(d)) c = "numeric";
            else if (d === "-p") c = "prompt";
            else if (I7e.has(d)) c = "string";
            else if (d.length > 2)
              for (let m = 1; m < d.length; m++) {
                let p = "-" + d[m],
                  g = tTr.has(p);
                if (g || I7e.has(p)) {
                  if (m === d.length - 1) c = g ? "numeric" : p === "-p" ? "prompt" : "string";
                  else if (g && !hFn.test(d.slice(m + 1))) return {
                    ok: !1,
                    reason: `'read ${p}' (fused in '${d}') operand is non-numeric \u2014 zsh arith-evals subscripts/expressions (may run $(cmd))`
                  };
                  else if (p === "-p") {
                    let _ = d.slice(m + 1);
                    if (/[A-Za-z_][A-Za-z0-9_]*\[/.test(_) || _.includes(hee)) return {
                      ok: !1,
                      reason: `'read -p' fused remainder '${_}' contains a subscripted identifier or cmdsub \u2014 on zsh (-p is no-arg) this may reach matheval via a following option and run $(cmd)`
                    }
                  }
                  break
                }
              }
          }
          continue
        }
        if (d.includes("[") || Hi(d)) return {
          ok: !1,
          reason: `'${o}' positional NAME '${d}' contains array subscript or runtime-determined value \u2014 bash evaluates $(cmd) in subscripts`
        }
      }
    }
    if (mNt.has(o)) {
      let c = o === "declare" || o === "typeset" || o === "local",
        h = c || o === "export" || o === "readonly",
        d = c || o === "readonly",
        m = !1,
        p = !1;
      for (let b = 1; b < r.length; b++) {
        let k = r[b];
        if (d) {
          if (/^[+-].*f/.test(k)) m = !0;
          if (/^[+-].*[uU]/.test(k)) p = !0;
          if (m && p) return {
            ok: !1,
            reason: `'${o}' with both -f and -u/-U flags (reached as plain command via wrapper/quote) \u2014 zsh marks a function for autoload (synonym of 'autoload')`
          }
        }
        if (c && Ye.test(k)) return {
          ok: !1,
          reason: `'${o}' with -n/-i/-a/-A/-E/-F/-L/-R/-Z/-l/-u flag (reached as plain command via wrapper/quote) changes assignment eval semantics`
        };
        if (xt.has(o) && /^[+-].*[iluEFLRZ]/.test(k)) return {
          ok: !1,
          reason: `'${o}' with -i/-E/-F/-L/-R/-Z/-l/-u flag (reached as plain command via wrapper/quote) \u2014 zsh bin_typeset mathevals, width-truncates, or case-converts the value`
        };
        if ((h || o === "private") && /^[+-].*m/.test(k)) return {
          ok: !1,
          reason: `'${o}' with -m/+m flag (reached as plain command via wrapper/quote) \u2014 zsh pattern-assigns every matching variable`
        };
        if (xt.has(o) && /^[+-].*T/.test(k)) return {
          ok: !1,
          reason: `'${o} -T' creates a user-defined zsh tied pair \u2014 tracked literals for its operands are unreliable`
        };
        let A = k.includes("[") && /[$`]/.test(k);
        if (A || Hi(k)) return {
          ok: !1,
          reason: A ? `'${o}' operand '${d3(k)}' contains array subscript with expansion \u2014 shell arith-evals $(cmd) in subscripts` : `'${o}' operand '${d3(k)}' is runtime-determined and may carry an array subscript \u2014 shell arith-evals $(cmd) in subscripts`
        };
        if ((o === "float" || o === "integer") && !/^[+-]/.test(k)) return {
          ok: !1,
          reason: `zsh '${o}' operand \u2014 implicit typeset -E/-i arithmetically evaluates the (existing or assigned) value`
        }
      }
      let g = h && u === o ? $t(o, r.slice(1)) : null;
      if (g !== null) return {
        ok: !1,
        reason: g
      };
      let _ = u === o && (t?.hasLoop !== !1 || a !== e.at(-1)) ? Tt(o, r.slice(1)) : null;
      if (_ !== null) return {
        ok: !1,
        reason: _
      }
    }
    if (o === "printf")
      for (let c = 1; c < r.length; c++) {
        let h = r[c],
          d = h.includes("[") && /[$`]/.test(h);
        if (d || Hi(h)) return {
          ok: !1,
          reason: d ? `printf operand '${d3(h)}' contains array subscript with expansion \u2014 zsh arith-evals %d/%i operands (may run $(cmd))` : `printf operand '${d3(h)}' is runtime-determined and may carry an array subscript \u2014 zsh arith-evals %d/%i operands (may run $(cmd))`
        }
      }
    if (o === "set")
      for (let c = 1; c < r.length; c++) {
        let h = r[c];
        if (h === "--") break;
        if (!/^[-+]/.test(h)) continue;
        for (let d = 1; d < h.length; d++) {
          let m = h[d];
          if (m === "o") {
            let p = d < h.length - 1 ? h.slice(d + 1) : r[c + 1];
            if (p !== void 0 && p !== "" && !Rtn.has(p.toLowerCase().replace(/[_-]/g, ""))) return {
              ok: !1,
              reason: `'set -o/+o ${p}' changes shell parsing/globbing state \u2014 can enable globsubst/extendedglob and defeat static analysis`
            };
            if (d === h.length - 1) c++;
            break
          }
          if (m === "A") break;
          if (!Atn.has(m)) return {
            ok: !1,
            reason: `'set ${h[0]}${m}' changes shell option state (allexport/keyword/\u2026) \u2014 defeats static env-var analysis; see SET_O_SAFE_LETTERS`
          }
        }
      }
    if (o === "print" && r.some((c) => Mho.test(c))) return {
      ok: !1,
      reason: "What 'print -P' expands can't be checked before it runs"
    };
    if (o === "jobs")
      for (let c = 1; c < r.length; c++) {
        let h = r[c];
        if (/^[+-].*x/.test(h)) return {
          ok: !1,
          reason: "What 'jobs -x' starts can't be checked before it runs"
        }
      }
    if (nTr.has(u)) return {
      ok: !1,
      reason: `Shell keyword '${o}' as command name \u2014 tree-sitter mis-parse`
    };
    if (i) {
      if (o === "find" || o === "jq") return {
        ok: !1,
        reason: `What xargs adds to ${o} can't be checked before it runs`
      };
      if (MCe.has(o)) {
        let c = !1;
        for (let h = 1; h < r.length; h++) {
          let d = r[h];
          if (d === "--") {
            c = h + 1 < r.length;
            break
          }
          if (d === "-" || !d.startsWith("-")) {
            c = !0;
            break
          }
          if (!d.includes("=") && sr.test(d)) h++
        }
        if (!c) return {
          ok: !1,
          reason: `The program xargs gives ${o} can't be checked before it runs`
        }
      }
    }
    if (o === "jq") {
      for (let c of r) {
        if (/\bsystem\s*\(/.test(c)) return {
          ok: !1,
          reason: "jq command contains system() function which executes arbitrary commands"
        };
        if (/\b(?:include|import)\b/.test(c)) return {
          ok: !1,
          reason: 'jq command contains include/import \u2014 modules can load arbitrary .jq files via {search:"."} and call env or other builtins'
        }
      }
      if (r.some((c) => /^(?:-[A-Za-z]*[fL]|--(?:from-file|rawfile|slurpfile|library-path)(?:$|=))/.test(c))) return {
        ok: !1,
        reason: "jq command contains dangerous flags that could execute code or read arbitrary files"
      }
    }
    if (MCe.has(o)) {
      if (a.hasUnquotedGlob || n && vtn(a)) return {
        ok: !1,
        reason: "awk command contains unquoted glob characters \u2014 could glob-expand to a planted program or flag before awk runs"
      };
      for (let c of r) {
        let h = fNt(c);
        if (h !== !1) return {
          ok: !1,
          reason: h
        };
        if (Hi(c)) return {
          ok: !1,
          reason: "awk is given text that can't be checked before it runs"
        }
      }
      if (r.some((c) => /^-[bcCghIkMnNOPrsStV]*[fEileDW]/.test(c) || /^--(?:fil|e|i|lo|s|de)/.test(c))) return {
        ok: !1,
        reason: "awk has an option that can't be checked before it runs"
      }
    }
    if (o === "find") {
      if (a.hasUnquotedGlob || n && vtn(a)) return {
        ok: !1,
        reason: "find contains unquoted glob characters \u2014 could glob-expand to a dangerous action before find runs"
      };
      let c = !1;
      for (let h = 1; h < r.length; h++) {
        let d = r[h],
          m = c;
        if (c = !1, fFn(d)) return {
          ok: !1,
          reason: `find with '${d}' executes commands or modifies files \u2014 cannot be auto-allowed by a Bash(find:*) prefix rule`
        };
        if (mFn(d)) return {
          ok: !1,
          reason: `find option '${d}' is read differently by different versions of find \u2014 could hide a following action`
        };
        if (!m && pFn(d)) {
          c = !0;
          continue
        }
        if (!m && Ttn(d)) {
          h++;
          continue
        }
        if (Hi(d)) return {
          ok: !1,
          reason: "find argument is runtime-determined \u2014 could resolve to a dangerous action"
        };
        if (/[[\]*?]/.test(d)) return {
          ok: !1,
          reason: `find argument '${d}' contains glob characters \u2014 could glob-expand to a dangerous action`
        }
      }
    }
    if (Jt(u)) return {
      ok: !1,
      reason: `Zsh builtin '${o}' can bypass security checks`
    };
    let x = Xt(u, r.slice(1));
    if (x !== null) return {
      ok: !1,
      reason: x
    };
    if (gse.has(u))
      if (o === "fc" && !r.slice(1).some((c) => /^[+-].*[es]/.test(c)));
      else if (o === "compgen" && !r.slice(1).some((c) => /^[+-].*[CFW]/.test(c)));
    else return {
      ok: !1,
      reason: `'${o}' evaluates arguments as shell code`
    };
    if (c3.has(o) && r.length > 1) return {
      ok: !1,
      reason: `What '${o}' starts can't be checked before it runs`
    };
    for (let c of a.argv)
      if (c.includes("/proc/") && qe.test(c)) return {
        ok: !1,
        reason: "Accesses /proc/*/environ which may expose secrets"
      };
    for (let c of a.redirects)
      if (c.target.includes("/proc/") && qe.test(c.target)) return {
        ok: !1,
        reason: "Accesses /proc/*/environ which may expose secrets"
      };
    for (let c of a.argv)
      if (c.includes(`
`) && xe.test(c)) s ??= {
        ok: !1,
        kind: "newline-hash",
        reason: "Newline followed by # inside a quoted argument can hide arguments from path validation"
      };
    for (let c of a.envVars)
      if (c.value.includes(`
`) && xe.test(c.value)) s ??= {
        ok: !1,
        kind: "newline-hash",
        reason: "Newline followed by # inside an env var value can hide arguments from path validation"
      };
    for (let c of a.redirects)
      if (c.target.includes(`
`) && xe.test(c.target)) s ??= {
        ok: !1,
        kind: "newline-hash",
        reason: "Newline followed by # inside a redirect target can hide arguments from path validation"
      }
  }
  if (s) return s;
  return {
    ok: !0
  }
}
export {
  iO,
  lNt,
  OCe,
  Bji,
  Rho,
  yE,
  V2,
  ICe,
  iht,
  Vks,
  btn,
  hee,
  Hi,
  d3,
  dFn,
  Kks,
  qks,
  Yks,
  DGe,
  Stn,
  wtn,
  dNt,
  YEr,
  cNt,
  ktn,
  XEr,
  JEr,
  Aho,
  vtn,
  zI,
  xho,
  iz,
  Etn,
  QEr,
  cFn,
  Pho,
  ZEr,
  uFn,
  Xks,
  uNt,
  x7e,
  eTr,
  P7e,
  fFn,
  Ttn,
  pFn,
  mFn,
  gse,
  MCe,
  fNt,
  N_e,
  Ctn,
  NF,
  zLe,
  c3,
  Jks,
  Oho,
  O7e,
  pNt,
  Iho,
  Mho,
  mNt,
  Rtn,
  Atn,
  hNt,
  aht,
  u3,
  I7e,
  tTr,
  hFn,
  GLe
};
