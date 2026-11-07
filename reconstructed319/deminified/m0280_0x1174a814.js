// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Wjn, I_t, zjn, T0s, M_t, Gjn, WTo, upe, O0s } from "B:/~BUN/root/chunk-qt1wryw6.js";
import { he } from "B:/~BUN/root/chunk-fet34rqr.js";
function jji(e, o) {
  let t = de(e, o, "line"),
    n = t.search(Ze);
  return n !== -1 && we.test(t.slice(n + 2)) || Te(e, o, !1);
}
var ue = "\x03",
  Qe = "\x02",
  Ze = /[$<>]\((?!\(?\x03)/,
  we = /(?:^|[ \t\n;&|()<>])(?:#|(?:case|esac)(?=$|[ \t\n;&|()<>]))|(?:^|[^<])(?:<<(?![<\x02])|<<<+[<\x02])|\$(?=$|[ \t\n;&|)<>])/;
function Te(e, o, t) {
  let n = e.children[0]?.type;
  if (e.type === "process_substitution" || e.type === "command_substitution" && n === "$(") {
    let i = de(e, o, "substitution");
    if (t || we.test(i.slice(2, -1)) || !ke(i.slice(1))) return !0;
  } else if (n === "$((" && !ke(de(e, o, "substitution").slice(1))) return !0;
  let r = t || e.type === "arithmetic_expansion" || e.type === "c_style_for_statement" || n === "((" || e.type === "string" && e.children.some((item, index) => item.type === "$" && e.children[index + 1]?.text.startsWith("["));
  return e.children.some(item => Te(item, o, r));
}
function ke(e) {
  let o = 0;
  for (let t = 0; t < e.length; t++) if (e[t] === "(") o++;else if (e[t] === ")" && --o === 0) return t === e.length - 1;
  return !1;
}
function de(e, o, t) {
  let n = "",
    startIndex = e.startIndex,
    i = _e(e, t).sort((itemA, itemB) => itemA.start - itemB.start);
  for (let c of i) if (c.start >= startIndex) n += o.toString("latin1", startIndex, c.start) + c.left, startIndex = c.end;
  return (n + o.toString("latin1", startIndex, e.endIndex)).replace(/\\([^])/g, (c, a) => a === `
` ? "" : a === " " || a === "\t" ? a : "_");
}
function _e(e, o) {
  return e.children.flatMap(item => {
    let left = Xe(item, o);
    return left === null ? _e(item, o) : [{
      start: item.startIndex,
      end: item.endIndex,
      left: left
    }];
  });
}
function Xe(e, o) {
  switch (e.type) {
    case "raw_string":
      return "''";
    case "string":
      return '""';
    case "ansi_c_string":
      return "$''";
    case "simple_expansion":
      return "$x";
    case "comment":
      return " #";
    case "heredoc_body":
      return o === "line" ? " " : null;
    case "heredoc_redirect":
      return o === "substitution" && Ye(e) ? "<<" + Qe : null;
    case "command_substitution":
      return e.children[0]?.type === "$(" ? "$(" + ue + ")" : "``";
    case "process_substitution":
      return e.text.charAt(0) + "(" + ue + ")";
    case "arithmetic_expansion":
      return e.children[0]?.type === "$((" ? "$((" + ue + "))" : null;
    default:
      return null;
  }
}
function Ye(e) {
  let [o, t, n, r] = e.children;
  if (!o || !t || !n || !r || o.type !== "<<" && o.type !== "<<-" || t.type !== "heredoc_start" || !/^(?:(?!(?:case|esac)$)\w+|'[^'\\\s()]+'|"[^"$`\\\s()]+")$/.test(t.text) || n.type !== "heredoc_body" || n.startIndex !== t.endIndex + 1 || r.type !== "heredoc_end") return !1;
  return Se(o, n, r);
}
function Se(e, o, t) {
  let n = o.text + t.text;
  return [n, n.replaceAll("\\\n", "")].every(item => {
    let i = item.split(`
`);
    return i.findIndex(item => {
      let d = e.type === "<<-" ? item.replace(/^\t+/, "") : item;
      return d === t.text || d.startsWith(t.text + ")");
    }) === i.length - 1;
  });
}
function Ne(e) {
  let [o, t] = e.children,
    n = e.children.at(-2),
    r = e.children.at(-1);
  if (o && t?.type === "heredoc_start" && /^(?:'[^'\\\s()]+'|"[^"$`\\\s()]+")$/.test(t.text) && n?.type === "heredoc_body" && n.children.length === 0 && r?.type === "heredoc_end" && r.text === t.text.slice(1, -1) && !e.children.some(item => item.type === "ERROR") && e.text.slice(e.text.indexOf(`
`) + 1) === n.text + r.text && Se(o, n, r)) return n;
  return;
}
function fe(e, o, t, n, r) {
  let i = r || t === ")" || t === "]",
    c = 0,
    a = 0,
    d = 0,
    L = o;
  while (L < e.length) {
    let f = e[L];
    if (L++, f === t && d === 0 && !(i && (c > 0 || a > 0))) return L - 1;
    if (f === "\\") {
      let b = e[L];
      if (L++, b === `
` || b === "$" || b === "\\" || b === "`" || b === t || b === "}" && d > 0 || t === "]" && b !== void 0 && "[](){}".includes(b)) continue;
      f = b ?? "";
    }
    switch (f) {
      case "$":
        {
          let b = e[L];
          if (b === "(" || b === "[") {
            let h = n.get(L - 1);
            if (h === void 0) return -1;
            L = h;
          } else if (b === "{") L++, d++;else if (b === "$") L++;
          break;
        }
      case "}":
        if (d > 0) d--;
        break;
      case "`":
        return -1;
      case "(":
        if (!i || d === 0) c++;
        break;
      case ")":
        if (!i || d === 0) {
          if (i && c === 0) return -1;
          c--;
        }
        break;
      case "[":
        if (!i || d === 0) a++;
        break;
      case "]":
        if (!i || d === 0) {
          if (i && a === 0) return -1;
          a--;
        }
        break;
      case '"':
        {
          if (t !== '"' && d === 0) break;
          if (d === 0) return -1;
          let b = fe(e, L, '"', n, r);
          if (b < 0) return b;
          L = b + 1;
          break;
        }
    }
  }
  return -1;
}
var Ve = 50,
  Je = 50000,
  re = 67108864,
  Pe = re,
  et = {
    parse: parse
  },
  tt = 64,
  nt = 1e4,
  st = 32000,
  U = he(new Map(), e => e.clear());
function Ah() {
  return et;
}
var Q = new Set(["?", "$", "@", "*", "#", "-", "!", "_"]),
  ie = new Set(["#", "^", "=", "~", "+"]);
function We(e, o) {
  let src = e.L.src,
    n = o;
  while (n < e.L.len && ie.has(src[n])) n++;
  let r = !1;
  while (n < e.L.len) {
    let i = src[n];
    if (C(i)) n++;else if (i >= "\x80") r = !0, n++;else break;
  }
  return r ? n : -1;
}
var rt = new Set(["export", "declare", "typeset", "readonly", "local"]),
  nTr = new Set(["if", "then", "elif", "else", "fi", "while", "until", "for", "in", "do", "done", "case", "esac", "function", "select"]);
function it(src_2) {
  return {
    src: src_2,
    len: src_2.length,
    i: 0,
    b: 0,
    heredocs: [],
    byteTable: null,
    zshCondParenDiff: !1,
    dollarEnds: new Map(),
    dollarStarts: []
  };
}
function s(e) {
  let o = e.src.charCodeAt(e.i);
  if (e.i++, o < 128) e.b++;else if (o < 2048) e.b += 2;else if (o >= 55296 && o <= 56319) e.b += 4, e.i++;else e.b += 3;
}
function l(e, o = 0) {
  return e.i + o < e.len ? e.src[e.i + o] : "";
}
function ge(e, o) {
  if (e.byteTable) return e.byteTable[o];
  let uint32Array = new Uint32Array(e.len + 1),
    n = 0,
    r = 0;
  while (r < e.len) {
    uint32Array[r] = n;
    let i = e.src.charCodeAt(r);
    if (i < 128) n++, r++;else if (i < 2048) n += 2, r++;else if (i >= 55296 && i <= 56319) uint32Array[r + 1] = n + 2, n += 4, r += 2;else n += 3, r++;
  }
  return uint32Array[e.len] = n, e.byteTable = uint32Array, uint32Array[o];
}
function Fe(e) {
  return e >= "a" && e <= "z" || e >= "A" && e <= "Z" || e >= "0" && e <= "9" || e === "_" || e === "/" || e === "." || e === "-" || e === "+" || e === ":" || e === "@" || e === "%" || e === "," || e === "~" || e === "^" || e === "?" || e === "*" || e === "!" || e === "=" || e === "[" || e === "]" || e >= "\x80";
}
function ot(e) {
  return Fe(e) || e === "\\";
}
function He(e) {
  return e === "" || e === " " || e === "\t" || e === `
` || e === "\r" || e === ";" || e === "&" || e === "|" || e === "(" || e === ")" || e === "<" || e === ">";
}
function pe(e) {
  return He(e) && e !== "(";
}
function D(e) {
  return e >= "a" && e <= "z" || e >= "A" && e <= "Z" || e === "_";
}
function C(e) {
  return D(e) || e >= "0" && e <= "9";
}
function E(e) {
  return e >= "0" && e <= "9";
}
function at(e) {
  return E(e) || e >= "a" && e <= "f" || e >= "A" && e <= "F";
}
function ct(e) {
  return C(e) || e === "@";
}
function lt(e) {
  return e !== "" && e !== " " && e !== "\t" && e !== `
` && e !== "<" && e !== ">" && e !== "|" && e !== "&" && e !== ";" && e !== "(" && e !== ")" && e !== "'" && e !== '"' && e !== "`" && e !== "\\";
}
function x(e) {
  while (e.i < e.len) {
    let o = e.src[e.i];
    if (o === " " || o === "\t" || o === "\r") s(e);else if (o === "\\") {
      if (e.src[e.i + 1] === `
`) s(e), s(e);else break;
    } else break;
  }
}
function Lt(e) {
  while (e.i < e.len) {
    let o = e.src[e.i];
    if (o === " " || o === "\t") s(e);else if (o === "\\" && e.src[e.i + 1] === `
`) s(e), s(e);else break;
  }
}
function w(e, o = "arg") {
  x(e);
  let t = e.b;
  if (e.i >= e.len) return {
    type: "EOF",
    value: "",
    start: t,
    end: t
  };
  let value = e.src[e.i],
    r = l(e, 1),
    i = l(e, 2);
  if (value === `
`) return s(e), {
    type: "NEWLINE",
    value: `
`,
    start: t,
    end: e.b
  };
  if (value === "#") {
    let c = e.i > 0 ? e.src[e.i - 1] : "";
    if (c === "" || " \t\n;&|<>()`".includes(c)) {
      let i_2 = e.i;
      while (e.i < e.len && e.src[e.i] !== `
`) s(e);
      return {
        type: "COMMENT",
        value: e.src.slice(i_2, e.i),
        start: t,
        end: e.b
      };
    }
  }
  if (value === "&" && r === "&") return s(e), s(e), {
    type: "OP",
    value: "&&",
    start: t,
    end: e.b
  };
  if (value === "|" && r === "|") return s(e), s(e), {
    type: "OP",
    value: "||",
    start: t,
    end: e.b
  };
  if (value === "|" && r === "&") return s(e), s(e), {
    type: "OP",
    value: "|&",
    start: t,
    end: e.b
  };
  if (value === ";" && r === ";" && i === "&") return s(e), s(e), s(e), {
    type: "OP",
    value: ";;&",
    start: t,
    end: e.b
  };
  if (value === ";" && r === ";") return s(e), s(e), {
    type: "OP",
    value: ";;",
    start: t,
    end: e.b
  };
  if (value === ";" && r === "&") return s(e), s(e), {
    type: "OP",
    value: ";&",
    start: t,
    end: e.b
  };
  if (value === ">" && r === ">") return s(e), s(e), {
    type: "OP",
    value: ">>",
    start: t,
    end: e.b
  };
  if (value === ">" && r === "&" && i === "-") return s(e), s(e), s(e), {
    type: "OP",
    value: ">&-",
    start: t,
    end: e.b
  };
  if (value === ">" && r === "&") return s(e), s(e), {
    type: "OP",
    value: ">&",
    start: t,
    end: e.b
  };
  if (value === ">" && r === "|") return s(e), s(e), {
    type: "OP",
    value: ">|",
    start: t,
    end: e.b
  };
  if (value === "&" && r === ">" && i === ">") return s(e), s(e), s(e), {
    type: "OP",
    value: "&>>",
    start: t,
    end: e.b
  };
  if (value === "&" && r === ">") return s(e), s(e), {
    type: "OP",
    value: "&>",
    start: t,
    end: e.b
  };
  if (value === "<" && r === "<" && i === "<") return s(e), s(e), s(e), {
    type: "OP",
    value: "<<<",
    start: t,
    end: e.b
  };
  if (value === "<" && r === "<" && i === "-") return s(e), s(e), s(e), {
    type: "OP",
    value: "<<-",
    start: t,
    end: e.b
  };
  if (value === "<" && r === "<") return s(e), s(e), {
    type: "OP",
    value: "<<",
    start: t,
    end: e.b
  };
  if (value === "<" && r === "&" && i === "-") return s(e), s(e), s(e), {
    type: "OP",
    value: "<&-",
    start: t,
    end: e.b
  };
  if (value === "<" && r === "&") return s(e), s(e), {
    type: "OP",
    value: "<&",
    start: t,
    end: e.b
  };
  if (value === "<" && r === "(") return s(e), s(e), {
    type: "LT_PAREN",
    value: "<(",
    start: t,
    end: e.b
  };
  if (value === ">" && r === "(") return s(e), s(e), {
    type: "GT_PAREN",
    value: ">(",
    start: t,
    end: e.b
  };
  if (value === "(" && r === "(") return s(e), s(e), {
    type: "OP",
    value: "((",
    start: t,
    end: e.b
  };
  if (value === ")" && r === ")") return s(e), s(e), {
    type: "OP",
    value: "))",
    start: t,
    end: e.b
  };
  if (value === "|" || value === "&" || value === ";" || value === ">" || value === "<") return s(e), {
    type: "OP",
    value: value,
    start: t,
    end: e.b
  };
  if (value === "(" || value === ")") return s(e), {
    type: "OP",
    value: value,
    start: t,
    end: e.b
  };
  if (o === "cmd") {
    if (value === "[") {
      let c = !1,
        a = L => {
          while (e.src[L] === "\\") if (e.src[L + 1] === `
`) L += 2, c = !0;else if (e.src[L + 1] === "\r" && e.src[L + 2] === `
`) L += 3, c = !0;else break;
          return L;
        },
        d = a(e.i + 1);
      if (e.src[d] === "[") {
        let L = a(d + 1);
        if (c && e.src[L] === "(") e.zshCondParenDiff = !0;
      }
    }
    if (value === "[" && r === "[" && (i === " " || i === "\t" || i === `
` || i === "" || i === "(")) {
      if (i === "(") e.zshCondParenDiff = !0;
      return s(e), s(e), {
        type: "OP",
        value: "[[",
        start: t,
        end: e.b
      };
    }
    if (value === "[") return s(e), {
      type: "OP",
      value: "[",
      start: t,
      end: e.b
    };
    if (value === "{" && (r === " " || r === "\t" || r === `
`)) return s(e), {
      type: "OP",
      value: "{",
      start: t,
      end: e.b
    };
    if (value === "}") return s(e), {
      type: "OP",
      value: "}",
      start: t,
      end: e.b
    };
    if (value === "!" && (r === " " || r === "\t")) return s(e), {
      type: "OP",
      value: "!",
      start: t,
      end: e.b
    };
  }
  if (value === '"') return s(e), {
    type: "DQUOTE",
    value: '"',
    start: t,
    end: e.b
  };
  if (value === "'") {
    let i_3 = e.i;
    s(e);
    while (e.i < e.len && e.src[e.i] !== "'") s(e);
    if (e.i < e.len) s(e);
    return {
      type: "SQUOTE",
      value: e.src.slice(i_3, e.i),
      start: t,
      end: e.b
    };
  }
  if (value === "$") {
    if (r === "(" && i === "(") return s(e), s(e), s(e), {
      type: "DOLLAR_DPAREN",
      value: "$((",
      start: t,
      end: e.b
    };
    if (r === "(") return s(e), s(e), {
      type: "DOLLAR_PAREN",
      value: "$(",
      start: t,
      end: e.b
    };
    if (r === "{") return s(e), s(e), {
      type: "DOLLAR_BRACE",
      value: "${",
      start: t,
      end: e.b
    };
    if (r === "'") {
      let i_4 = e.i;
      s(e), s(e);
      while (e.i < e.len && e.src[e.i] !== "'") {
        if (e.src[e.i] === "\\" && e.i + 1 < e.len) s(e);
        s(e);
      }
      if (e.i < e.len) s(e);
      return {
        type: "ANSI_C",
        value: e.src.slice(i_4, e.i),
        start: t,
        end: e.b
      };
    }
    return s(e), {
      type: "DOLLAR",
      value: "$",
      start: t,
      end: e.b
    };
  }
  if (value === "`") return s(e), {
    type: "BACKTICK",
    value: "`",
    start: t,
    end: e.b
  };
  if (E(value)) {
    let i_5 = e.i;
    while (i_5 < e.len && E(e.src[i_5])) i_5++;
    let a = i_5 < e.len ? e.src[i_5] : "";
    if (a === ">" || a === "<") {
      let i_6 = e.i;
      while (e.i < i_5) s(e);
      return {
        type: "WORD",
        value: e.src.slice(i_6, e.i),
        start: t,
        end: e.b
      };
    }
  }
  if (ot(value) || value === "{" || value === "}") {
    let i_7 = e.i;
    while (e.i < e.len) {
      let a = e.src[e.i];
      if (a === "\\") {
        if (e.i + 1 >= e.len) break;
        if (e.src[e.i + 1] === `
`) {
          s(e), s(e);
          continue;
        }
        s(e), s(e);
        continue;
      }
      if (!Fe(a) && a !== "{" && a !== "}" && a !== "#") break;
      s(e);
    }
    if (e.i > i_7) {
      let value_2 = e.src.slice(i_7, e.i);
      if (/^-?\d+$/.test(value_2)) return {
        type: "NUMBER",
        value: value_2,
        start: t,
        end: e.b
      };
      return {
        type: "WORD",
        value: value_2,
        start: t,
        end: e.b
      };
    }
  }
  return s(e), {
    type: "WORD",
    value: value,
    start: t,
    end: e.b
  };
}
function parse(e, o) {
  if (o !== void 0 || e.length > nt) return Ee(e, o);
  let keywordRule = Wjn() && !I_t(),
    patternQuoteGuard = O0s(),
    dollarOperandGuard = T0s(),
    widerDollarGuard = upe(e),
    zshMathGuard = WTo(),
    zshMathWalk = Gjn(),
    d = U.get(e);
  if (d !== void 0 && d.keywordRule === keywordRule && d.patternQuoteGuard === patternQuoteGuard && d.dollarOperandGuard === dollarOperandGuard && d.widerDollarGuard === widerDollarGuard && d.zshMathGuard === zshMathGuard && d.zshMathWalk === zshMathWalk) {
    if (d.root.keywordAfterPrefix) zjn();
    return d.root;
  }
  U.delete(e);
  let root = Ee(e);
  if (root !== null) {
    let f = e.length;
    for (let b of U.keys()) f += b.length;
    for (let b of U.keys()) {
      if (U.size < tt && f <= st) break;
      U.delete(b), f -= b.length;
    }
    U.set(e, {
      root: root,
      keywordRule: keywordRule,
      patternQuoteGuard: patternQuoteGuard,
      dollarOperandGuard: dollarOperandGuard,
      widerDollarGuard: widerDollarGuard,
      zshMathGuard: zshMathGuard,
      zshMathWalk: zshMathWalk
    });
  }
  return root;
}
function Ee(src_3, o) {
  let L_2 = it(src_3),
    srcBytes = dt(src_3);
  if (srcBytes >= Pe) return null;
  let r = {
    L: L_2,
    src: src_3,
    srcBytes: srcBytes,
    isAscii: srcBytes === src_3.length,
    nodeCount: 0,
    deadline: performance.now() + (o ?? Ve),
    aborted: !1,
    inBacktick: 0,
    inDquote: 0,
    stopToken: null,
    zshBraceDiff: src_3.includes("$\\\n"),
    dollarOperandDiff: !1,
    keywordDesync: !1,
    zshMathGuard: WTo(),
    zshMathWalk: WTo() && Gjn(),
    zshMathClosesAlike: !1,
    zshMathDiff: !1,
    inForHead: !1
  };
  try {
    let i = bt(r);
    if (r.aborted) return null;
    if (r.zshMathGuard && !r.zshMathDiff) {
      let c = [];
      for (let a of src_3.matchAll(/(\$+)(\[|\((?:\\\n)*\()?/g)) {
        let d = a[1]?.length ?? 1,
          L = 0;
        while (src_3[a.index - L - 1] === "\\") L++;
        let f = a.index + d - 1,
          b = a[2]?.includes(`
`);
        if (a[2] !== void 0 && (d - L % 2) % 2 === 1 && (b || !r.L.dollarEnds.has(f))) c.push(ge(r.L, f));
      }
      if (c.length > 0) {
        let a = [],
          d = [i];
        for (let L = d.pop(); L; L = d.pop()) if (Mt.has(L.type)) a.push(L);else {
          d.push(...L.children);
          let f = L.type === "heredoc_redirect" && Ne(L);
          if (f) a.push(f);
        }
        r.zshMathDiff = c.some(item => !a.some(f => f.startIndex <= item && item < f.endIndex));
      }
    }
    if (upe(src_3)) r.dollarOperandDiff = !0;
    if (r.zshBraceDiff || r.L.zshCondParenDiff || r.dollarOperandDiff || r.zshMathDiff || r.keywordDesync) {
      let c = u(r, "ERROR", i.startIndex, i.endIndex, [i]);
      if (r.keywordDesync) return {
        ...c,
        keywordAfterPrefix: !0
      };
      return c;
    }
    return i;
  } catch {
    return null;
  }
}
function dt(e) {
  let o = 0;
  for (let t = 0; t < e.length; t++) {
    let n = e.charCodeAt(t);
    if (n < 128) o++;else if (n < 2048) o += 2;else if (n >= 55296 && n <= 56319) o += 4, t++;else o += 3;
  }
  return o;
}
function ft(e) {
  if (e.nodeCount++, e.nodeCount > Je) throw e.aborted = !0, Error("budget");
  if ((e.nodeCount & 127) === 0 && performance.now() > e.deadline) throw e.aborted = !0, Error("timeout");
}
function u(e, type, startIndex_2, endIndex, children) {
  return ft(e), {
    type: type,
    text: W(e, startIndex_2, endIndex),
    startIndex: startIndex_2,
    endIndex: endIndex,
    children: children
  };
}
function Dho(e) {
  return /\$(?:\{(?:\([^)}]{0,32}\))?)?[#^=~+!]*(?:[A-Za-z_]\w*)?[\u0080-\uffff]/.test(e);
}
function W(e, o, t) {
  if (e.isAscii) return e.src.slice(o, t);
  let L_3 = e.L;
  if (!L_3.byteTable) ge(L_3, 0);
  let byteTable = L_3.byteTable,
    i = 0,
    c = e.src.length;
  while (i < c) {
    let d = i + c >>> 1;
    if (byteTable[d] < o) i = d + 1;else c = d;
  }
  let a = i;
  i = a, c = e.src.length;
  while (i < c) {
    let d = i + c >>> 1;
    if (byteTable[d] < t) i = d + 1;else c = d;
  }
  return e.src.slice(a, i);
}
function I(e, o, t) {
  return u(e, o, t.start, t.end, []);
}
function bt(e) {
  let o = [];
  x(e.L);
  while (!0) {
    let r = T(e.L);
    if (w(e.L, "cmd").type === "NEWLINE") {
      x(e.L);
      continue;
    }
    g(e.L, r);
    break;
  }
  let b_2 = e.L.b;
  while (e.L.i < e.L.len) {
    let r = T(e.L),
      i = w(e.L, "cmd");
    if (i.type === "EOF") break;
    if (i.type === "NEWLINE") continue;
    if (i.type === "COMMENT") {
      o.push(I(e, "comment", i));
      continue;
    }
    g(e.L, r);
    let c = A(e, null);
    for (let a of c) o.push(a);
    if (c.length === 0) {
      let a = w(e.L, "cmd");
      if (a.type === "EOF") break;
      if (a.type === "OP" && a.value === ";;" && o.length > 0) continue;
      o.push(u(e, "ERROR", a.start, a.end, []));
    }
  }
  let n = o.length > 0 ? e.srcBytes : b_2;
  return u(e, "program", b_2, n, o);
}
function T(e) {
  return e.b * re + e.i;
}
function g(e, o) {
  let t = Math.floor(o / re);
  e.i = o - t * re, e.b = t, Ge(e);
}
function Ge(e) {
  for (let o = e.dollarStarts.at(-1); o !== void 0 && o >= e.i; o = e.dollarStarts.at(-1)) e.dollarEnds.delete(o), e.dollarStarts.pop();
}
function be(e, o, t) {
  e.dollarEnds.set(o, t), e.dollarStarts.push(o);
}
function A(e, o) {
  let t = [];
  while (!0) {
    x(e.L);
    let n = T(e.L),
      r = w(e.L, "cmd");
    if (r.type === "EOF") {
      g(e.L, n);
      break;
    }
    if (r.type === "NEWLINE") {
      if (e.L.heredocs.length > 0) xe(e);
      continue;
    }
    if (r.type === "COMMENT") {
      t.push(I(e, "comment", r));
      continue;
    }
    if (o && r.type === "OP" && r.value === o) {
      g(e.L, n);
      break;
    }
    if (r.type === "OP" && (r.value === ")" || r.value === "}" || r.value === ";;" || r.value === ";&" || r.value === ";;&" || r.value === "))" || r.value === "]]" || r.value === "]")) {
      g(e.L, n);
      break;
    }
    if (r.type === "BACKTICK" && e.inBacktick > 0) {
      g(e.L, n);
      break;
    }
    if (r.type === "WORD" && (r.value === "then" || r.value === "elif" || r.value === "else" || r.value === "fi" || r.value === "do" || r.value === "done" || r.value === "esac")) {
      g(e.L, n);
      break;
    }
    g(e.L, n);
    let i = qe(e);
    if (!i) break;
    t.push(i), x(e.L);
    let c = T(e.L),
      a = w(e.L, "cmd");
    if (a.type === "OP" && (a.value === ";" || a.value === "&")) {
      let d = T(e.L),
        L = w(e.L, "cmd");
      if (g(e.L, d), t.push(I(e, a.value, a)), L.type === "EOF" || L.type === "OP" && (L.value === ")" || L.value === "}" || L.value === ";;" || L.value === ";&" || L.value === ";;&") || L.type === "WORD" && (L.value === "then" || L.value === "elif" || L.value === "else" || L.value === "fi" || L.value === "do" || L.value === "done" || L.value === "esac")) continue;
    } else if (a.type === "NEWLINE") {
      if (e.L.heredocs.length > 0) xe(e);
      continue;
    } else g(e.L, c);
  }
  return t;
}
function qe(e) {
  let o = Re(e);
  if (!o) return null;
  while (!0) {
    let t = T(e.L),
      n = w(e.L, "cmd");
    if (n.type === "OP" && (n.value === "&&" || n.value === "||")) {
      let r = I(e, n.value, n);
      q(e);
      let i = Re(e);
      if (!i) {
        o = u(e, "ERROR", o.startIndex, r.endIndex, [o, r]);
        break;
      }
      if (i.type === "redirected_statement" && i.children.length >= 2) {
        let c = i.children[0],
          a = i.children.slice(1),
          d = u(e, "list", o.startIndex, c.endIndex, [o, r, c]),
          L = a.at(-1);
        o = u(e, "redirected_statement", d.startIndex, L.endIndex, [d, ...a]);
      } else o = u(e, "list", o.startIndex, i.endIndex, [o, r, i]);
    } else {
      g(e.L, t);
      break;
    }
  }
  return o;
}
function q(e) {
  while (!0) {
    let o = T(e.L);
    if (w(e.L, "cmd").type !== "NEWLINE") {
      g(e.L, o);
      break;
    }
  }
}
function Re(e) {
  let o = K(e);
  if (!o) return null;
  let t = [o];
  while (!0) {
    let r = T(e.L),
      i = w(e.L, "cmd");
    if (i.type === "OP" && (i.value === "|" || i.value === "|&")) {
      let c = I(e, i.value, i);
      q(e);
      let a = K(e);
      if (!a) {
        t.push(c);
        break;
      }
      if (a.type === "redirected_statement" && a.children.length >= 2 && t.length >= 1) {
        let d = a.children[0],
          L = a.children.slice(1),
          f = [...t, c, d],
          b = u(e, "pipeline", f[0].startIndex, d.endIndex, f),
          h = L.at(-1),
          p = u(e, "redirected_statement", b.startIndex, h.endIndex, [b, ...L]);
        t.length = 0, t.push(p), o = p;
        continue;
      }
      t.push(c, a);
    } else {
      g(e.L, r);
      break;
    }
  }
  if (t.length === 1) return t[0];
  let n = t.at(-1);
  return u(e, "pipeline", t[0].startIndex, n.endIndex, t);
}
function K(e) {
  x(e.L);
  let o = T(e.L),
    t = w(e.L, "cmd");
  if (t.type === "EOF") return g(e.L, o), null;
  if (t.type === "OP" && t.value === "!") {
    let n = I(e, "!", t),
      r = K(e);
    if (!r) return u(e, "negated_command", n.startIndex, n.endIndex, [n]);
    if (r.type === "redirected_statement" && r.children.length >= 2) {
      let i = r.children[0],
        c = r.children.slice(1),
        a = u(e, "negated_command", n.startIndex, i.endIndex, [n, i]),
        d = c.at(-1);
      return u(e, "redirected_statement", a.startIndex, d.endIndex, [a, ...c]);
    }
    return u(e, "negated_command", n.startIndex, r.endIndex, [n, r]);
  }
  if (t.type === "OP" && t.value === "(") {
    let n = I(e, "(", t),
      r = A(e, ")"),
      i = w(e.L, "cmd"),
      c = i.type === "OP" && i.value === ")" ? I(e, ")", i) : u(e, ")", n.endIndex, n.endIndex, []),
      a = u(e, "subshell", n.startIndex, c.endIndex, [n, ...r, c]);
    return B(e, a);
  }
  if (t.type === "OP" && t.value === "((") {
    let n = I(e, "((", t),
      i_8 = e.L.i,
      i = V(e, "))", "var");
    x(e.L);
    let c = oe(e, i_8, ")", !0),
      a = [n, ...i];
    if ((l(e.L) !== ")" || l(e.L, 1) !== ")") && je(e, c, !0)) a.push(u(e, "))", n.endIndex, n.endIndex, []));
    let d = w(e.L, "cmd"),
      L = d.value === "))" ? I(e, "))", d) : u(e, "))", n.endIndex, n.endIndex, []);
    return u(e, "compound_statement", n.startIndex, L.endIndex, [...a, L]);
  }
  if (t.type === "OP" && t.value === "{") {
    let n = I(e, "{", t),
      r = A(e, "}"),
      i = w(e.L, "cmd"),
      c = i.type === "OP" && i.value === "}" ? I(e, "}", i) : u(e, "}", n.endIndex, n.endIndex, []),
      a = u(e, "compound_statement", n.startIndex, c.endIndex, [n, ...r, c]);
    return B(e, a);
  }
  if (t.type === "OP" && (t.value === "[" || t.value === "[[")) {
    let n = I(e, t.value, t),
      r = t.value === "[" ? "]" : "]]",
      i = T(e.L),
      c = $e(e, r);
    if (x(e.L), t.value === "[" && l(e.L) !== "]") {
      g(e.L, i);
      let stopToken = e.stopToken;
      e.stopToken = "]";
      let h = K(e);
      if (e.stopToken = stopToken, h && h.type === "redirected_statement") c = h;else g(e.L, i), c = $e(e, r);
      x(e.L);
    }
    let a = T(e.L),
      d = w(e.L, "arg"),
      L;
    if (d.value === r && pe(l(e.L))) L = I(e, r, d);else g(e.L, a), L = u(e, r, n.endIndex, n.endIndex, []);
    let f = c ? [n, c, L] : [n, L];
    return B(e, u(e, "test_command", n.startIndex, L.endIndex, f));
  }
  if (t.type === "WORD" && He(l(e.L))) {
    if (t.value === "if") return B(e, Tt(e, t), !0);
    if (t.value === "while" || t.value === "until") return B(e, _t(e, t), !0);
    if (t.value === "for") return B(e, De(e, t), !0);
    if (t.value === "select") return B(e, De(e, t), !0);
    if (t.value === "case") return B(e, St(e, t), !0);
    if (t.value === "function") return Ot(e, t);
    if (rt.has(t.value)) return B(e, Dt(e, t));
    if (t.value === "unset" || t.value === "unsetenv") {
      let n = T(e.L);
      x(e.L);
      let r = !1;
      if (l(e.L) === "(") w(e.L, "cmd"), x(e.L), r = l(e.L) === ")";
      if (g(e.L, n), !r) return B(e, $t(e, t));
    }
  }
  return g(e.L, o), ht(e);
}
function ht(e) {
  let b_3 = e.L.b,
    t = [],
    n = [];
  while (!0) {
    x(e.L);
    let y = Ke(e);
    if (y) {
      t.push(y);
      continue;
    }
    let S = j(e);
    if (S) {
      n.push(S);
      continue;
    }
    break;
  }
  x(e.L);
  let r = T(e.L),
    i = w(e.L, "cmd");
  if (i.type === "EOF" || i.type === "NEWLINE" || i.type === "COMMENT" || i.type === "BACKTICK" || i.type === "OP" && i.value !== "{" && i.value !== "[" && i.value !== "[[" || i.type === "WORD" && nTr.has(i.value) && i.value !== "in") {
    if (g(e.L, r), (t.length > 0 || n.length > 0) && i.type === "WORD" && nTr.has(i.value) && i.value !== "in" && Wjn() && !I_t()) {
      let y = [...t, ...n].sort((itemA, itemB) => itemA.startIndex - itemB.startIndex);
      return e.keywordDesync = !0, zjn(), u(e, "ERROR", b_3, y.at(-1).endIndex, y);
    }
    if (t.length === 1 && n.length === 0) return t[0];
    if (n.length > 0 && t.length === 0) {
      let y = n.at(-1);
      return u(e, "redirected_statement", n[0].startIndex, y.endIndex, n);
    }
    if (t.length > 1 && n.length === 0) {
      let y = t.at(-1);
      return u(e, "variable_assignments", t[0].startIndex, y.endIndex, t);
    }
    if (t.length > 0 || n.length > 0) {
      let y = [...t, ...n],
        S = y.at(-1);
      return u(e, "command", b_3, S.endIndex, y);
    }
    return null;
  }
  g(e.L, r);
  let c = T(e.L),
    a = M(e, "cmd");
  if (a && a.type === "word") {
    x(e.L);
    let y = !1;
    if (l(e.L) === "(") {
      let S = T(e.L);
      w(e.L, "cmd"), x(e.L), y = l(e.L) === ")", g(e.L, S);
    }
    if (y) {
      let S = w(e.L, "cmd");
      x(e.L);
      let k = w(e.L, "cmd"),
        N = I(e, "(", S),
        z = I(e, ")", k);
      x(e.L), q(e);
      let O = K(e);
      if (O) {
        let G = [O];
        if (O.type === "redirected_statement" && O.children.length >= 2 && O.children[0].type === "compound_statement") G = O.children;
        let P = G.at(-1);
        return u(e, "function_definition", a.startIndex, P.endIndex, [a, N, z, ...G]);
      }
    }
  }
  g(e.L, c);
  let d = M(e, "cmd");
  if (!d) {
    if (t.length === 1) return t[0];
    return null;
  }
  let L = u(e, "command_name", d.startIndex, d.endIndex, [d]),
    f = [],
    b = [],
    h = null;
  while (!0) {
    x(e.L);
    let y = j(e, !0);
    if (y) {
      if (y.type === "heredoc_redirect") h = y;else if (y.type === "herestring_redirect") f.push(y);else b.push(y);
      continue;
    }
    if (b.length > 0) break;
    if (e.stopToken === "]" && l(e.L) === "]") break;
    let S = T(e.L),
      k = w(e.L, "arg");
    if (k.type === "EOF" || k.type === "NEWLINE" || k.type === "COMMENT" || k.type === "OP" && (k.value === "|" || k.value === "|&" || k.value === "&&" || k.value === "||" || k.value === ";" || k.value === ";;" || k.value === ";&" || k.value === ";;&" || k.value === "&" || k.value === ")" || k.value === "}" || k.value === "))")) {
      g(e.L, S);
      break;
    }
    g(e.L, S);
    let N = M(e, "arg");
    if (!N) {
      if (l(e.L) === "(") {
        if (l(e.L, 1) === "(" && e.zshMathGuard) e.zshMathDiff = !0;
        let z = w(e.L, "cmd"),
          O = I(e, "(", z),
          G = A(e, ")"),
          P = T(e.L),
          Z = w(e.L, "cmd"),
          ee;
        if (Z.type === "OP" && Z.value === ")") ee = I(e, ")", Z);else g(e.L, P), ee = u(e, ")", O.endIndex, O.endIndex, []);
        f.push(u(e, "subshell", O.startIndex, ee.endIndex, [O, ...G, ee]));
        continue;
      }
      break;
    }
    if (N.type === "word" && N.text === "=") {
      f.push(u(e, "ERROR", N.startIndex, N.endIndex, [N]));
      continue;
    }
    if ((N.type === "word" || N.type === "concatenation") && l(e.L) === "(" && e.L.b === N.endIndex) {
      f.push(u(e, "ERROR", N.startIndex, N.endIndex, [N]));
      continue;
    }
    f.push(N);
  }
  let p = [...t, ...n, L, ...f],
    _ = p.length > 0 ? p.at(-1).endIndex : L.endIndex,
    startIndex_3 = p[0].startIndex,
    v = u(e, "command", startIndex_3, _, p);
  if (h) {
    xe(e);
    let y = e.L.heredocs.shift();
    if (y && h.children.length >= 2) {
      let N = u(e, "heredoc_body", y.bodyStart, y.bodyEnd, y.quoted ? [] : yt(e, y.bodyStart, y.bodyEnd)),
        z = u(e, "heredoc_end", y.endStart, y.endEnd, []);
      h = {
        type: h.type,
        text: W(e, h.startIndex, y.endEnd),
        startIndex: h.startIndex,
        endIndex: y.endEnd,
        children: [...h.children, N, z]
      };
    }
    let S = [...n, h, ...b],
      k = n.length > 0 ? Math.min(v.startIndex, n[0].startIndex) : v.startIndex;
    return u(e, "redirected_statement", k, h.endIndex, [v, ...S]);
  }
  if (b.length > 0) {
    let y = b.at(-1);
    return u(e, "redirected_statement", v.startIndex, y.endIndex, [v, ...b]);
  }
  return v;
}
function B(e, o, t = !1) {
  let n = [];
  while (!0) {
    x(e.L);
    let i = T(e.L),
      c = j(e);
    if (!c) break;
    if (c.type === "herestring_redirect" && !t) {
      g(e.L, i);
      break;
    }
    n.push(c);
  }
  if (n.length === 0) return o;
  let r = n.at(-1);
  return u(e, "redirected_statement", o.startIndex, r.endIndex, [o, ...n]);
}
function Ke(e) {
  let o = T(e.L);
  x(e.L);
  let b_4 = e.L.b;
  if (!D(l(e.L))) return g(e.L, o), null;
  while (C(l(e.L))) s(e.L);
  let b_5 = e.L.b,
    r = b_5;
  if (l(e.L) === "[") {
    s(e.L);
    let v = 1;
    while (e.L.i < e.L.len && v > 0) {
      let y = l(e.L);
      if (y === "[") v++;else if (y === "]") v--;
      s(e.L);
    }
    r = e.L.b;
  }
  let i = l(e.L),
    c = l(e.L, 1),
    a;
  if (i === "=" && c !== "=") a = "=";else if (i === "+" && c === "=") a = "+=";else return g(e.L, o), null;
  let d = u(e, "variable_name", b_4, b_5, []),
    L = d;
  if (r > b_5) {
    let v = u(e, "[", b_5, b_5 + 1, []),
      y = xt(e, b_5 + 1, r - 1),
      S = u(e, "]", r - 1, r, []);
    L = u(e, "subscript", b_4, r, [d, v, y, S]);
  }
  let b_6 = e.L.b;
  if (s(e.L), a === "+=") s(e.L);
  let b = e.L.b,
    h = u(e, a, b_6, b, []),
    p = null;
  if (l(e.L) === "(") {
    let v = w(e.L, "cmd"),
      y = I(e, "(", v),
      S = [y];
    while (!0) {
      if (x(e.L), l(e.L) === ")") break;
      let z = M(e, "arg");
      if (!z) break;
      S.push(z);
    }
    let k = w(e.L, "cmd"),
      N = k.value === ")" ? I(e, ")", k) : u(e, ")", y.endIndex, y.endIndex, []);
    S.push(N), p = u(e, "array", y.startIndex, N.endIndex, S);
  } else {
    let v = l(e.L);
    if (v && v !== " " && v !== "\t" && v !== `
` && v !== ";" && v !== "&" && v !== "|" && v !== ")" && v !== "}") p = M(e, "arg");
  }
  let _ = p ? [L, h, p] : [L, h],
    m = p ? p.endIndex : b;
  return u(e, "variable_assignment", b_4, m, _);
}
function pt(e) {
  x(e.L);
  let o = l(e.L);
  if ((o === "@" || o === "*") && l(e.L, 1) === "]") {
    let b_7 = e.L.b;
    return s(e.L), u(e, "word", b_7, e.L.b, []);
  }
  if (o === "(" && l(e.L, 1) === "(") {
    let b_8 = e.L.b;
    s(e.L), s(e.L);
    let n = u(e, "((", b_8, e.L.b, []),
      r = Y(e, "))", "var");
    x(e.L);
    let i;
    if (l(e.L) === ")" && l(e.L, 1) === ")") {
      let b_9 = e.L.b;
      s(e.L), s(e.L), i = u(e, "))", b_9, e.L.b, []);
    } else i = u(e, "))", e.L.b, e.L.b, []);
    let c = r ? [n, r, i] : [n, i];
    return u(e, "compound_statement", n.startIndex, i.endIndex, c);
  }
  return Y(e, "]", "word");
}
function xt(e, o, t) {
  let n = W(e, o, t);
  if (/^\d+$/.test(n)) return u(e, "number", o, t, []);
  if (/^\$([a-zA-Z_]\w*)$/.exec(n)) {
    let i = u(e, "$", o, o + 1, []),
      c = u(e, "variable_name", o + 1, t, []);
    return u(e, "simple_expansion", o, t, [i, c]);
  }
  if (n.length === 2 && n[0] === "$" && Q.has(n[1])) {
    let i = u(e, "$", o, o + 1, []),
      c = u(e, "special_variable_name", o + 1, t, []);
    return u(e, "simple_expansion", o, t, [i, c]);
  }
  return u(e, "word", o, t, []);
}
function Oe(e) {
  let o = l(e.L);
  if (o === "" || o === `
`) return !1;
  if (o === "|" || o === "&" || o === ";" || o === "(" || o === ")") return !1;
  if (o === "<" || o === ">") return l(e.L, 1) === "(";
  if (E(o)) {
    let i_9 = e.L.i;
    while (i_9 < e.L.len && E(e.L.src[i_9])) i_9++;
    let n = i_9 < e.L.len ? e.L.src[i_9] : "";
    if (n === ">" || n === "<") return !1;
  }
  if (o === "}") return !1;
  if (e.stopToken === "]" && o === "]") return !1;
  return !0;
}
function j(e, o = !1) {
  let t = T(e.L);
  x(e.L);
  let n = null;
  if (E(l(e.L))) {
    let b_10 = e.L.b,
      i_10 = e.L.i;
    while (i_10 < e.L.len && E(e.L.src[i_10])) i_10++;
    let d = i_10 < e.L.len ? e.L.src[i_10] : "";
    if (d === ">" || d === "<") {
      while (e.L.i < i_10) s(e.L);
      n = u(e, "file_descriptor", b_10, e.L.b, []);
    }
  }
  if (n === null && l(e.L) === "{") {
    let c = e.L.i + 1;
    if (c < e.L.len && /[A-Za-z_]/.test(e.L.src[c])) {
      while (c < e.L.len && /[A-Za-z0-9_]/.test(e.L.src[c])) c++;
      if (e.L.src[c] === "[") {
        let a = 0,
          d = !1,
          L = !1;
        while (c < e.L.len) {
          let f = e.L.src[c];
          if (d) {
            if (f === "'") d = !1;
          } else if (L) {
            if (f === "\\" && c + 1 < e.L.len) c++;else if (f === '"') L = !1;
          } else if (f === "\\" && c + 1 < e.L.len) c++;else if (f === "'") d = !0;else if (f === '"') L = !0;else if (f === "[") a++;else if (f === "]") {
            if (a--, a === 0) {
              c++;
              break;
            }
          } else if (f === "\\" && e.L.src[c + 1] === `
`) {
            c += 2;
            continue;
          } else if (f === `
`) break;
          c++;
        }
      }
      if (e.L.src[c] === "}") {
        let a = c + 1 < e.L.len ? e.L.src[c + 1] : "";
        if (a === ">" || a === "<") {
          let b_11 = e.L.b;
          while (e.L.i <= c) s(e.L);
          n = u(e, "variable_name", b_11, e.L.b, []);
        }
      }
    }
  }
  let r = w(e.L, "arg");
  if (r.type !== "OP") return g(e.L, t), null;
  let i = r.value;
  if (i === "<<<") {
    let c = I(e, "<<<", r);
    x(e.L);
    let a = M(e, "arg"),
      d = a ? a.endIndex : c.endIndex,
      L = a ? [c, a] : [c];
    return u(e, "herestring_redirect", n ? n.startIndex : c.startIndex, d, n ? [n, ...L] : L);
  }
  if (i === "<<" || i === "<<-") {
    let c = I(e, i, r);
    Lt(e.L);
    let b_12 = e.L.b,
      quoted = !1,
      delim = "",
      f = l(e.L);
    if (f === "'" || f === '"') {
      quoted = !0, s(e.L);
      while (e.L.i < e.L.len && l(e.L) !== f) delim += l(e.L), s(e.L);
      if (e.L.i < e.L.len) s(e.L);
    } else if (f === "\\") {
      if (quoted = !0, s(e.L), e.L.i < e.L.len && l(e.L) !== `
`) delim += l(e.L), s(e.L);
      while (e.L.i < e.L.len && C(l(e.L))) delim += l(e.L), s(e.L);
    } else while (e.L.i < e.L.len && lt(l(e.L))) delim += l(e.L), s(e.L);
    let b = e.L.b;
    if (f === '"' && /[`$\\\n]/.test(delim)) throw e.aborted = !0, Error("heredoc delimiter contains substitution/escape chars");
    if (e.L.i < e.L.len) {
      let m = l(e.L);
      if (m !== " " && m !== "\t" && m !== `
` && m !== "<" && m !== ">" && m !== "|" && m !== "&" && m !== ";" && m !== "(" && m !== ")") throw e.aborted = !0, Error("heredoc delimiter word continues past scanned segment");
    }
    if (/[\uD800-\uDFFF]/.test(delim)) throw e.aborted = !0, Error("heredoc delimiter contains astral/surrogate code unit");
    let h = u(e, "heredoc_start", b_12, b, []);
    e.L.heredocs.push({
      delim: delim,
      stripTabs: i === "<<-",
      quoted: quoted,
      bodyStart: 0,
      bodyEnd: 0,
      endStart: 0,
      endEnd: 0
    });
    let p = n ? [n, c, h] : [c, h],
      _ = n ? n.startIndex : c.startIndex;
    while (!0) {
      x(e.L);
      let m = l(e.L);
      if (m === `
` || m === "" || e.L.i >= e.L.len) break;
      if (m === ">" || m === "<" || E(m)) {
        let S = T(e.L),
          k = j(e);
        if (k && k.type === "file_redirect") {
          p.push(k);
          continue;
        }
        g(e.L, S);
      }
      if (m === "|" && l(e.L, 1) !== "|") {
        let b_13 = e.L.b;
        s(e.L), x(e.L);
        let k = [];
        while (!0) {
          let N = K(e);
          if (!N) break;
          if (k.push(N), x(e.L), l(e.L) === "|" && l(e.L, 1) !== "|") {
            let b_14 = e.L.b;
            s(e.L), k.push(u(e, "|", b_14, e.L.b, [])), x(e.L);
            continue;
          }
          break;
        }
        if (k.length > 0) {
          let N = k.at(-1);
          p.push(u(e, "pipeline", k[0].startIndex, N.endIndex, k));
        } else p.push(u(e, "ERROR", b_13, e.L.b, []));
        continue;
      }
      if (m === "&" && l(e.L, 1) === "&" || m === "|" && l(e.L, 1) === "|") {
        let b_15 = e.L.b;
        s(e.L), s(e.L), x(e.L);
        let k = K(e);
        if (k) p.push(k);else p.push(u(e, "ERROR", b_15, e.L.b, []));
        continue;
      }
      if (m === "&" || m === ";" || m === "(" || m === ")") {
        let b_16 = e.L.b;
        while (e.L.i < e.L.len && l(e.L) !== `
`) s(e.L);
        p.push(u(e, "ERROR", b_16, e.L.b, []));
        break;
      }
      let v = M(e, "arg");
      if (v) {
        p.push(v);
        continue;
      }
      let b_17 = e.L.b;
      while (e.L.i < e.L.len && l(e.L) !== `
`) s(e.L);
      if (e.L.b > b_17) p.push(u(e, "ERROR", b_17, e.L.b, []));
      break;
    }
    return u(e, "heredoc_redirect", _, e.L.b, p);
  }
  if (i === "<&-" || i === ">&-") {
    let c = I(e, i, r),
      a = [];
    if (n) a.push(n);
    a.push(c), x(e.L);
    let d = T(e.L),
      L = Oe(e) ? M(e, "arg") : null;
    if (L) a.push(L);else g(e.L, d);
    let f = n ? n.startIndex : c.startIndex,
      b = L ? L.endIndex : c.endIndex;
    return u(e, "file_redirect", f, b, a);
  }
  if (i === ">" || i === ">>" || i === ">&" || i === ">|" || i === "&>" || i === "&>>" || i === "<" || i === "<&") {
    let c = I(e, i, r),
      a = [];
    if (n) a.push(n);
    a.push(c);
    let endIndex_2 = c.endIndex,
      L = 0;
    while (!0) {
      if (x(e.L), !Oe(e)) break;
      if (!o && L >= 1) break;
      let b = l(e.L),
        h = l(e.L, 1),
        p = null;
      if ((b === "<" || b === ">") && h === "(") p = ce(e);else p = M(e, "arg");
      if (!p) break;
      a.push(p), endIndex_2 = p.endIndex, L++;
    }
    let f = n ? n.startIndex : c.startIndex;
    return u(e, "file_redirect", f, endIndex_2, a);
  }
  return g(e.L, t), null;
}
function ce(e) {
  let o = l(e.L);
  if (o !== "<" && o !== ">" || l(e.L, 1) !== "(") return null;
  let b_18 = e.L.b;
  s(e.L), s(e.L);
  let n = u(e, o + "(", b_18, e.L.b, []),
    r = A(e, ")");
  x(e.L);
  let i;
  if (l(e.L) === ")") {
    let b_19 = e.L.b;
    s(e.L), i = u(e, ")", b_19, e.L.b, []);
  } else i = u(e, ")", e.L.b, e.L.b, []);
  return u(e, "process_substitution", b_18, i.endIndex, [n, ...r, i]);
}
function xe(e) {
  while (e.L.i < e.L.len && e.L.src[e.L.i] !== `
`) s(e.L);
  if (e.L.i < e.L.len) s(e.L);
  for (let o of e.L.heredocs) {
    o.bodyStart = e.L.b;
    let t = o.delim.length;
    if (o.stripTabs && o.delim.startsWith("\t")) throw e.aborted = !0, Error("ambiguous heredoc terminator (<<- tab-prefixed delim)");
    while (e.L.i < e.L.len) {
      let i_11 = e.L.i,
        b_20 = e.L.b,
        i = i_11;
      if (o.stripTabs) while (i < e.L.len && e.L.src[i] === "\t") i++;
      if (e.L.src.startsWith(o.delim, i)) {
        let c = i + t,
          a = c < e.L.len ? e.L.src[c] : "";
        if (a === "" || a === `
` || a === "\r") {
          o.bodyEnd = b_20;
          while (e.L.i < i) s(e.L);
          o.endStart = e.L.b;
          for (let L = 0; L < t; L++) s(e.L);
          if (o.endEnd = e.L.b, e.L.i < e.L.len && e.L.src[e.L.i] === `
`) s(e.L);
          return;
        }
        let d = c;
        while (d < e.L.len) {
          let L = e.L.src[d];
          if (L === `
`) break;
          if (L === ")" || L === "`" || L === "}") throw e.aborted = !0, Error("ambiguous heredoc terminator (shell_eof_token)");
          d++;
        }
      }
      while (e.L.i < e.L.len && e.L.src[e.L.i] !== `
`) s(e.L);
      if (e.L.i < e.L.len) s(e.L);
    }
    o.bodyEnd = e.L.b, o.endStart = e.L.b, o.endEnd = e.L.b;
  }
}
function yt(e, o, t) {
  let n = T(e.L);
  mt(e, o);
  let r = [],
    b_21 = e.L.b,
    c = !1;
  while (e.L.b < t) {
    let a = l(e.L);
    if (a === "\\") {
      let d = l(e.L, 1);
      if (d === "$" || d === "`" || d === "\\") {
        s(e.L), s(e.L);
        continue;
      }
      s(e.L);
      continue;
    }
    if (a === "$" || a === "`") {
      if (a === "$" && l(e.L, 1) === "'") {
        s(e.L);
        continue;
      }
      let b_22 = e.L.b;
      e.inDquote++;
      let L = F(e);
      if (e.inDquote--, L && (L.type === "simple_expansion" || L.type === "expansion" || L.type === "command_substitution" || L.type === "arithmetic_expansion" || L.type === "ERROR")) {
        if (c && b_22 > b_21) r.push(u(e, "heredoc_content", b_21, b_22, []));
        r.push(L), b_21 = e.L.b, c = !0;
      }
      continue;
    }
    s(e.L);
  }
  if (c) r.push(u(e, "heredoc_content", b_21, t, []));
  return g(e.L, n), r;
}
function mt(e, o) {
  if (!e.L.byteTable) ge(e.L, 0);
  let byteTable_2 = e.L.byteTable,
    n = 0,
    r = e.src.length;
  while (n < r) {
    let i = n + r >>> 1;
    if (byteTable_2[i] < o) n = i + 1;else r = i;
  }
  e.L.i = n, e.L.b = o, Ge(e.L);
}
function M(e, o) {
  x(e.L);
  let t = [];
  while (e.L.i < e.L.len) {
    let i = l(e.L);
    if (i === " " || i === "\t" || i === `
` || i === "\r" || i === "" || i === "|" || i === "&" || i === ";" || i === "(" || i === ")") break;
    if (i === "<" || i === ">") {
      if (l(e.L, 1) === "(") {
        let a = ce(e);
        if (a) t.push(a);
        continue;
      }
      break;
    }
    if (i === '"') {
      t.push(H(e));
      continue;
    }
    if (i === "'") {
      let a = w(e.L, "arg");
      t.push(I(e, "raw_string", a));
      continue;
    }
    if (i === "$") {
      let a = l(e.L, 1);
      if (a === "'") {
        let L = w(e.L, "arg");
        t.push(I(e, "ansi_c_string", L));
        continue;
      }
      if (a === '"') {
        let L = {
          type: "DOLLAR",
          value: "$",
          start: e.L.b,
          end: e.L.b + 1
        };
        s(e.L), t.push(I(e, "$", L)), t.push(H(e));
        continue;
      }
      if (a === "`") {
        let L = {
          type: "DOLLAR",
          value: "$",
          start: e.L.b,
          end: e.L.b + 1
        };
        s(e.L), t.push(I(e, "$", L));
        continue;
      }
      let d = F(e);
      if (d) t.push(d);
      continue;
    }
    if (i === "`") {
      if (e.inBacktick > 0) break;
      let a = le(e);
      t.push(a);
      continue;
    }
    if (i === "{") {
      let a = gt(e);
      if (a) {
        t.push(a);
        continue;
      }
      let d = l(e.L, 1);
      if (d === ";" || d === "|" || d === "&" || d === `
` || d === "" || d === ")" || d === " " || d === "\t") {
        let b_23 = e.L.b;
        s(e.L), t.push(u(e, "word", b_23, e.L.b, []));
        continue;
      }
      let L = It(e);
      if (L) {
        for (let f of L) t.push(f);
        continue;
      }
    }
    if (i === "}") {
      let b_24 = e.L.b;
      s(e.L), t.push(u(e, "word", b_24, e.L.b, []));
      continue;
    }
    if (i === "[" || i === "]") {
      let b_25 = e.L.b;
      s(e.L), t.push(u(e, "word", b_25, e.L.b, []));
      continue;
    }
    let c = vt(e);
    if (!c) break;
    if (c.type === "word" && /^-?(0x)?[0-9]+#$/.test(c.text) && l(e.L) === "$" && (l(e.L, 1) === "{" || l(e.L, 1) === "(")) {
      let a = F(e);
      if (a) {
        t.push(u(e, "number", c.startIndex, a.endIndex, [a]));
        continue;
      }
    }
    t.push(c);
  }
  if (t.length === 0) return null;
  if (t.length === 1) return t[0];
  let n = t[0],
    r = t.at(-1);
  return u(e, "concatenation", n.startIndex, r.endIndex, t);
}
function vt(e) {
  let b_26 = e.L.b,
    i_12 = e.L.i;
  while (e.L.i < e.L.len) {
    let i = l(e.L);
    if (i === "\\") {
      if (e.L.i + 1 >= e.L.len) break;
      if (e.L.src[e.L.i + 1] === `
`) break;
      s(e.L), s(e.L);
      continue;
    }
    if (i === " " || i === "\t" || i === `
` || i === "\r" || i === "" || i === "|" || i === "&" || i === ";" || i === "(" || i === ")" || i === "<" || i === ">" || i === '"' || i === "'" || i === "$" || i === "`" || i === "{" || i === "}" || i === "[" || i === "]") break;
    s(e.L);
  }
  if (e.L.b === b_26) return null;
  let n = e.src.slice(i_12, e.L.i),
    r = /^-?\d+$/.test(n) ? "number" : "word";
  return u(e, r, b_26, e.L.b, []);
}
function gt(e) {
  let o = T(e.L);
  if (l(e.L) !== "{") return null;
  let b_27 = e.L.b;
  s(e.L);
  let b_28 = e.L.b,
    b_29 = e.L.b;
  while (E(l(e.L)) || D(l(e.L))) s(e.L);
  let b_30 = e.L.b;
  if (b_30 === b_29 || l(e.L) !== "." || l(e.L, 1) !== ".") return g(e.L, o), null;
  let b_31 = e.L.b;
  s(e.L), s(e.L);
  let b_32 = e.L.b,
    b_33 = e.L.b;
  while (E(l(e.L)) || D(l(e.L))) s(e.L);
  let b_34 = e.L.b;
  if (b_34 === b_33 || l(e.L) !== "}") return g(e.L, o), null;
  let b_35 = e.L.b;
  s(e.L);
  let b = e.L.b,
    h = W(e, b_29, b_30),
    p = W(e, b_33, b_34),
    _ = /^\d+$/.test(h),
    m = /^\d+$/.test(p);
  if (_ !== m) return g(e.L, o), null;
  if (!_ && (h.length !== 1 || p.length !== 1)) return g(e.L, o), null;
  let v = _ ? "number" : "word",
    y = m ? "number" : "word";
  return u(e, "brace_expression", b_27, b, [u(e, "{", b_27, b_28, []), u(e, v, b_29, b_30, []), u(e, "..", b_31, b_32, []), u(e, y, b_33, b_34, []), u(e, "}", b_35, b, [])]);
}
function It(e) {
  if (l(e.L) !== "{") return null;
  let b_36 = e.L.b;
  s(e.L);
  let b_37 = e.L.b,
    n = [u(e, "word", b_36, b_37, [])];
  while (e.L.i < e.L.len) {
    let r = l(e.L);
    if (r === "}" || r === `
` || r === ";" || r === "|" || r === "&" || r === " " || r === "\t" || r === "<" || r === ">" || r === "(" || r === ")") break;
    if (r === "[" || r === "]") {
      let b_38 = e.L.b;
      s(e.L), n.push(u(e, "word", b_38, e.L.b, []));
      continue;
    }
    let b_39 = e.L.b;
    while (e.L.i < e.L.len) {
      let a = l(e.L);
      if (a === "\\" && e.L.i + 1 < e.L.len) {
        s(e.L), s(e.L);
        continue;
      }
      if (a === "}" || a === `
` || a === ";" || a === "|" || a === "&" || a === " " || a === "\t" || a === "<" || a === ">" || a === "(" || a === ")" || a === "[" || a === "]") break;
      s(e.L);
    }
    let b_40 = e.L.b;
    if (b_40 > b_39) {
      let a = W(e, b_39, b_40),
        d = /^-?\d+$/.test(a) ? "number" : "word";
      n.push(u(e, d, b_39, b_40, []));
    } else break;
  }
  if (l(e.L) === "}") {
    let b_41 = e.L.b;
    s(e.L), n.push(u(e, "word", b_41, e.L.b, []));
  }
  return n;
}
function H(e) {
  let b_42 = e.L.b;
  s(e.L), e.inDquote++;
  let b_43 = e.L.b,
    r = [u(e, '"', b_42, b_43, [])],
    b_44 = e.L.b,
    i_13 = e.L.i,
    a = () => {
      if (e.L.b > b_44) {
        let L = e.src.slice(i_13, e.L.i);
        if (!/^[ \t]+$/.test(L)) r.push(u(e, "string_content", b_44, e.L.b, []));
      }
    };
  while (e.L.i < e.L.len) {
    let L = l(e.L);
    if (L === '"') break;
    if (L === "\\" && e.L.i + 1 < e.L.len) {
      s(e.L), s(e.L);
      continue;
    }
    if (L === `
`) {
      a(), s(e.L), b_44 = e.L.b, i_13 = e.L.i;
      continue;
    }
    if (L === "$") {
      let f = l(e.L, 1);
      if (f === "(" || f === "{" || f === "[" && e.zshMathGuard || D(f) || Q.has(f) || E(f) || f >= "\x80" || ie.has(f) && We(e, e.L.i + 1) !== -1) {
        a();
        let b = F(e);
        if (b) r.push(b);
        b_44 = e.L.b, i_13 = e.L.i;
        continue;
      }
      if (f !== '"' && f !== "") {
        a();
        let b = e.L.b;
        s(e.L), r.push(u(e, "$", b, e.L.b, [])), b_44 = e.L.b, i_13 = e.L.i;
        continue;
      }
    }
    if (L === "`") {
      a();
      let f = le(e);
      r.push(f), b_44 = e.L.b, i_13 = e.L.i;
      continue;
    }
    s(e.L);
  }
  a();
  let d;
  if (l(e.L) === '"') {
    let b_45 = e.L.b;
    s(e.L), d = u(e, '"', b_45, e.L.b, []);
  } else d = u(e, '"', e.L.b, e.L.b, []);
  return r.push(d), e.inDquote--, u(e, "string", b_42, d.endIndex, r);
}
function F(e) {
  let i_14 = e.L.i,
    t = l(e.L, 1),
    b_46 = e.L.b;
  if (t === "(" && l(e.L, 2) === "(") {
    s(e.L), s(e.L), s(e.L);
    let d = u(e, "$((", b_46, e.L.b, []),
      L = T(e.L),
      i_15 = e.L.i,
      b = V(e, "))", "var");
    x(e.L);
    let h = oe(e, i_15, ")", !0),
      p,
      _ = !1;
    if (l(e.L) !== ")" || l(e.L, 1) !== ")") Ce(e, L, "))"), _ = !0, Be(e, h);
    if (be(e.L, i_14, e.L.i + 2), l(e.L) === ")" && l(e.L, 1) === ")") {
      let b_47 = e.L.b;
      s(e.L), s(e.L), p = u(e, "))", b_47, e.L.b, []);
    } else p = u(e, "))", e.L.b, e.L.b, []);
    return u(e, _ ? "ERROR" : "arithmetic_expansion", b_46, p.endIndex, [d, ...b, p]);
  }
  if (t === "[") {
    s(e.L), s(e.L);
    let d = u(e, "$[", b_46, e.L.b, []),
      L = T(e.L),
      i_16 = e.L.i,
      b = V(e, "]", "var");
    x(e.L);
    let h = oe(e, i_16, "]", !1),
      p,
      _ = !1;
    if (l(e.L) !== "]") Ce(e, L, "]"), _ = !0, Be(e, h);
    if (be(e.L, i_14, e.L.i + 1), l(e.L) === "]") {
      let b_48 = e.L.b;
      s(e.L), p = u(e, "]", b_48, e.L.b, []);
    } else p = u(e, "]", e.L.b, e.L.b, []);
    return u(e, _ ? "ERROR" : "arithmetic_expansion", b_46, p.endIndex, [d, ...b, p]);
  }
  if (t === "(") {
    s(e.L), s(e.L);
    let d = u(e, "$(", b_46, e.L.b, []),
      {
        inDquote: inDquote,
        inForHead: inForHead
      } = e;
    e.inDquote = 0, e.inForHead = !1;
    let b = A(e, ")");
    e.inDquote = inDquote, e.inForHead = inForHead, x(e.L);
    let h,
      p = !1;
    if (l(e.L) === ")") {
      let b_49 = e.L.b;
      s(e.L), h = u(e, ")", b_49, e.L.b, []);
    } else {
      p = !0, e.zshBraceDiff = !0;
      let b_50 = e.L.b,
        m = 1;
      while (e.L.i < e.L.len) {
        let v = l(e.L);
        if (v === "\\" && e.L.i + 1 < e.L.len) {
          s(e.L), s(e.L);
          continue;
        }
        if (v === '"' || v === "'") {
          if (R(e, v), e.L.i < e.L.len) s(e.L);
          continue;
        }
        if (v === "`") {
          s(e.L);
          while (e.L.i < e.L.len && l(e.L) !== "`") {
            if (l(e.L) === "\\" && e.L.i + 1 < e.L.len) s(e.L);
            s(e.L);
          }
          if (e.L.i < e.L.len) s(e.L);
          continue;
        }
        if (v === "$" && l(e.L, 1) === "$") {
          s(e.L), s(e.L);
          continue;
        }
        if (v === "$" && l(e.L, 1) === "'") {
          if (R(e, "$'"), e.L.i < e.L.len) s(e.L);
          continue;
        }
        if (v === "(") m++;else if (v === ")") {
          if (m--, m === 0) break;
        }
        s(e.L);
      }
      if (b.push(u(e, "ERROR", b_50, e.L.b, [])), l(e.L) === ")") {
        let b_51 = e.L.b;
        s(e.L), h = u(e, ")", b_51, e.L.b, []);
      } else h = u(e, "ERROR", e.L.b, e.L.b, []);
    }
    if (!p && b.length === 1 && b[0].type === "redirected_statement" && b[0].children.length === 1 && b[0].children[0].type === "file_redirect") b = [...b[0].children];
    return be(e.L, i_14, e.L.i), u(e, p ? "ERROR" : "command_substitution", b_46, h.endIndex, [d, ...b, h]);
  }
  if (t === "{") {
    s(e.L), s(e.L);
    let d = u(e, "${", b_46, e.L.b, []),
      L = kt(e),
      f,
      b = !1;
    while (l(e.L) === `
`) s(e.L);
    if (l(e.L) === "}") {
      let b_52 = e.L.b;
      s(e.L), f = u(e, "}", b_52, e.L.b, []);
    } else {
      b = !0, e.zshBraceDiff = !0;
      let b_53 = e.L.b,
        p = 1;
      while (e.L.i < e.L.len) {
        let m = l(e.L);
        if (m === "\\" && e.L.i + 1 < e.L.len) {
          s(e.L), s(e.L);
          continue;
        }
        if (m === '"' || m === "'") {
          if (R(e, m), e.L.i < e.L.len) s(e.L);
          continue;
        }
        if (m === "$" && l(e.L, 1) === "(") {
          let v = 1;
          s(e.L), s(e.L);
          while (e.L.i < e.L.len && v > 0) {
            let y = l(e.L);
            if (y === "\\" && e.L.i + 1 < e.L.len) s(e.L);else if (y === "$" && l(e.L, 1) === "$") s(e.L);else if (y === "$" && l(e.L, 1) === "'") R(e, "$'");else if (y === '"' || y === "'") R(e, y);else if (y === "`") {
              s(e.L);
              while (e.L.i < e.L.len && l(e.L) !== "`") {
                if (l(e.L) === "\\" && e.L.i + 1 < e.L.len) s(e.L);
                s(e.L);
              }
            } else if (y === "(") v++;else if (y === ")") v--;
            s(e.L);
          }
          continue;
        }
        if (m === "`") {
          s(e.L);
          while (e.L.i < e.L.len && l(e.L) !== "`") {
            if (l(e.L) === "\\" && e.L.i + 1 < e.L.len) s(e.L);
            s(e.L);
          }
          if (e.L.i < e.L.len) s(e.L);
          continue;
        }
        if (m === "$" && l(e.L, 1) === "$") {
          s(e.L), s(e.L);
          continue;
        }
        if (m === "$" && l(e.L, 1) === "'") {
          if (R(e, "$'"), e.L.i < e.L.len) s(e.L);
          continue;
        }
        if (m === "$" && l(e.L, 1) === "{") p++, s(e.L);else if (m === "}") {
          if (p--, p === 0) break;
        }
        s(e.L);
      }
      let _ = u(e, "ERROR", b_53, e.L.b, []);
      if (l(e.L) === "}") {
        let b_54 = e.L.b;
        s(e.L), f = u(e, "}", b_54, e.L.b, []);
      } else f = u(e, "ERROR", e.L.b, e.L.b, []);
      L.push(_);
    }
    if (!b && e.inDquote > 0 && W(e, d.endIndex, f.startIndex).includes("'")) b = !0;
    if (!b && Dho(W(e, b_46, f.startIndex))) b = !0;
    if (/\\\n|\$\[|\$\{[ \t\n|]/.test(W(e, d.endIndex, f.startIndex))) e.zshBraceDiff = !0;
    return u(e, b || e.zshBraceDiff || e.dollarOperandDiff ? "ERROR" : "expansion", b_46, f.endIndex, [d, ...L, f]);
  }
  if (t === "'") {
    if (R(e, "$'"), l(e.L) === "'") s(e.L);
    return u(e, "ansi_c_string", b_46, e.L.b, []);
  }
  s(e.L);
  let b_55 = e.L.b,
    i = u(e, "$", b_46, b_55, []),
    c = l(e.L);
  if (c >= "\x80") {
    while (C(l(e.L)) || l(e.L) >= "\x80") s(e.L);
    return u(e, "ERROR", b_46, e.L.b, []);
  }
  if (c === "_" && !C(l(e.L, 1)) && l(e.L, 1) < "\x80") {
    let b_56 = e.L.b;
    s(e.L);
    let L = u(e, "special_variable_name", b_56, e.L.b, []);
    return u(e, "simple_expansion", b_46, e.L.b, [i, L]);
  }
  if (D(c)) {
    let b_57 = e.L.b;
    while (C(l(e.L))) s(e.L);
    if (l(e.L) >= "\x80") {
      while (C(l(e.L)) || l(e.L) >= "\x80") s(e.L);
      return u(e, "ERROR", b_46, e.L.b, []);
    }
    let L = u(e, "variable_name", b_57, e.L.b, []);
    return u(e, "simple_expansion", b_46, e.L.b, [i, L]);
  }
  let a = c === "#" && !ie.has(l(e.L, 1));
  if (ie.has(c) && !a) {
    let d = We(e, e.L.i);
    if (d !== -1) {
      while (e.L.i < d) s(e.L);
      return u(e, "ERROR", b_46, e.L.b, []);
    }
  }
  if (E(c)) {
    let b_58 = e.L.b;
    s(e.L);
    let L = u(e, "variable_name", b_58, e.L.b, []);
    return u(e, "simple_expansion", b_46, e.L.b, [i, L]);
  }
  if (Q.has(c)) {
    let b_59 = e.L.b;
    s(e.L);
    let L = u(e, "special_variable_name", b_59, e.L.b, []);
    return u(e, "simple_expansion", b_46, e.L.b, [i, L]);
  }
  return i;
}
function kt(e) {
  let o = [];
  x(e.L);
  {
    let i = l(e.L),
      c = l(e.L, 1);
    if (i === "#" && c === "!" && l(e.L, 2) === "}") return s(e.L), s(e.L), o;
    if (i === "!" && c === "#") {
      let a = 2;
      if (l(e.L, a) === "#") a++;
      if (l(e.L, a) === " ") a++;
      if (l(e.L, a) === "}") {
        while (a-- > 0) s(e.L);
        return o;
      }
    }
  }
  if (l(e.L) === "#") {
    let b_60 = e.L.b;
    s(e.L), o.push(u(e, "#", b_60, e.L.b, []));
  }
  let t = l(e.L);
  if ((t === "!" || t === "=" || t === "~") && (D(l(e.L, 1)) || E(l(e.L, 1)))) {
    let b_61 = e.L.b;
    s(e.L), o.push(u(e, t, b_61, e.L.b, []));
  }
  if (x(e.L), D(l(e.L))) {
    let b_62 = e.L.b;
    while (C(l(e.L))) s(e.L);
    o.push(u(e, "variable_name", b_62, e.L.b, []));
  } else if (E(l(e.L))) {
    let b_63 = e.L.b;
    while (E(l(e.L))) s(e.L);
    o.push(u(e, "variable_name", b_63, e.L.b, []));
  } else if (Q.has(l(e.L))) {
    let b_64 = e.L.b;
    s(e.L), o.push(u(e, "special_variable_name", b_64, e.L.b, []));
  }
  if (l(e.L) === "[") {
    let i = o.at(-1),
      b_65 = e.L.b;
    s(e.L);
    let a = u(e, "[", b_65, e.L.b, []),
      d = pt(e);
    x(e.L);
    let b_66 = e.L.b;
    if (l(e.L) === "]") s(e.L);
    let f = u(e, "]", b_66, e.L.b, []);
    if (i) {
      let b = d ? [i, a, d, f] : [i, a, f];
      o[o.length - 1] = u(e, "subscript", i.startIndex, e.L.b, b);
    } else {
      let b = d ? [a, d, f] : [a, f];
      o.push(u(e, "ERROR", b_65, e.L.b, b));
    }
  }
  x(e.L);
  let n = l(e.L);
  if ((n === "*" || n === "@") && l(e.L, 1) === "}") {
    let b_67 = e.L.b;
    return s(e.L), o.push(u(e, n, b_67, e.L.b, [])), o;
  }
  if (n === "@" && D(l(e.L, 1))) {
    let b_68 = e.L.b;
    s(e.L), o.push(u(e, "@", b_68, e.L.b, []));
    while (C(l(e.L))) s(e.L);
    return o;
  }
  let r = l(e.L);
  if (r === ":") {
    let i = l(e.L, 1);
    if (i === "}") return s(e.L), o;
    if (i !== "-" && i !== "=" && i !== "?" && i !== "+") {
      s(e.L), x(e.L);
      let c = l(e.L),
        a;
      if (c === "-" && E(l(e.L, 1))) {
        let b_69 = e.L.b;
        s(e.L);
        while (E(l(e.L))) s(e.L);
        a = u(e, "number", b_69, e.L.b, []);
      } else a = Y(e, ":}", "var");
      if (a) o.push(a);
      if (x(e.L), l(e.L) === ":") {
        s(e.L), x(e.L);
        let d = l(e.L),
          L;
        if (d === "-" && E(l(e.L, 1))) {
          let b_70 = e.L.b;
          s(e.L);
          while (E(l(e.L))) s(e.L);
          L = u(e, "number", b_70, e.L.b, []);
        } else L = Y(e, "}", "var");
        if (L) o.push(L);
      }
      return o;
    }
  }
  if (r === ":" || r === "#" || r === "%" || r === "/" || r === "^" || r === "," || r === "-" || r === "=" || r === "?" || r === "+") {
    let b_71 = e.L.b,
      c = l(e.L, 1),
      a = r;
    if (r === ":" && (c === "-" || c === "=" || c === "?" || c === "+")) s(e.L), s(e.L), a = r + c;else if ((r === "#" || r === "%" || r === "/" || r === "^" || r === ",") && c === r) s(e.L), s(e.L), a = r + r;else s(e.L);
    o.push(u(e, a, b_71, e.L.b, []));
    let d = a === "#" || a === "##" || a === "%" || a === "%%" || a === "/" || a === "//" || a === "^" || a === "^^" || a === "," || a === ",,";
    if (a === "/" || a === "//") {
      let L = l(e.L);
      if (L === "#" || L === "%") {
        let b_72 = e.L.b;
        s(e.L), o.push(u(e, L, b_72, e.L.b, []));
      }
      if (l(e.L) === '"') {
        o.push(H(e));
        let f = te(e, "regex", !0);
        if (f) o.push(f);
      } else {
        let f = te(e, "regex", !0);
        if (f) o.push(f);
      }
      if (l(e.L) === "/") {
        let b_73 = e.L.b;
        s(e.L), o.push(u(e, "/", b_73, e.L.b, []));
        let b = te(e, "replword", !1);
        if (b) if (b.type === "concatenation" && b.children.length === 2 && b.children[0].type === "command_substitution") o.push(b.children[0]), o.push(b.children[1]);else o.push(b);
      }
    } else if (a === "#" || a === "##" || a === "%" || a === "%%") for (let L of wt(e)) o.push(L);else {
      let L = te(e, d ? "regex" : "word", !1);
      if (L) o.push(L);
    }
  }
  return o;
}
function te(e, o, t) {
  let b_74 = e.L.b;
  if (o === "word" && l(e.L) === "(") {
    s(e.L);
    let L = [u(e, "(", b_74, e.L.b, [])];
    while (e.L.i < e.L.len) {
      x(e.L);
      let f = l(e.L);
      if (f === ")" || f === "}" || f === `
` || f === "") break;
      let b = e.L.b;
      while (e.L.i < e.L.len) {
        let h = l(e.L);
        if (h === ")" || h === "}" || h === " " || h === "\t" || h === `
` || h === "") break;
        if (h === "\\" && e.L.i + 1 < e.L.len) {
          s(e.L), s(e.L);
          continue;
        }
        if (h === "$" && l(e.L, 1) === "$") {
          s(e.L), s(e.L);
          continue;
        }
        if (h === "$" && l(e.L, 1) === "'") {
          if (R(e, "$'"), l(e.L) === "'") s(e.L);
          continue;
        }
        if (h === "$" && l(e.L, 1) === "(") e.zshBraceDiff = !0;
        if (h === '"' || h === "'") {
          if (R(e, h), l(e.L) === h) s(e.L);
          continue;
        }
        if (h === "`") {
          e.zshBraceDiff = !0, s(e.L);
          while (e.L.i < e.L.len && l(e.L) !== "`") {
            if (l(e.L) === "\\" && e.L.i + 1 < e.L.len) s(e.L);
            s(e.L);
          }
          if (l(e.L) === "`") s(e.L);
          continue;
        }
        if (h === "{") e.zshBraceDiff = !0;
        s(e.L);
      }
      if (e.L.b > b) L.push(u(e, "word", b, e.L.b, []));else break;
    }
    if (l(e.L) === ")") {
      let b_75 = e.L.b;
      s(e.L), L.push(u(e, ")", b_75, e.L.b, []));
    }
    while (l(e.L) === `
`) s(e.L);
    return u(e, "array", b_74, e.L.b, L);
  }
  if (o === "regex") {
    while (e.L.i < e.L.len) {
      let L = l(e.L);
      if (L === "{") e.zshBraceDiff = !0;
      if (L === "}") break;
      if (t && L === "/") break;
      if (L === "\\" && e.L.i + 1 < e.L.len) {
        s(e.L), s(e.L);
        continue;
      }
      if (L === '"' || L === "'") {
        s(e.L);
        let f = O0s();
        while (e.L.i < e.L.len && l(e.L) !== L) {
          if (l(e.L) === "\\" && e.L.i + 1 < e.L.len) {
            if (L === "'" && f && l(e.L, 1) === "'") e.zshBraceDiff = !0;
            s(e.L);
          } else if (L === '"' && f && !e.zshBraceDiff) {
            if (l(e.L) === "`") e.zshBraceDiff = !0;else if (l(e.L) === "$") {
              let b = 1;
              while (l(e.L, b) === "\\" && l(e.L, b + 1) === `
`) b += 2;
              let h = l(e.L, b);
              if (h === "{" || h === "(" || h === "[") e.zshBraceDiff = !0;
            }
          }
          s(e.L);
        }
        if (l(e.L) === L) s(e.L);
        continue;
      }
      if (L === "`") {
        e.zshBraceDiff = !0, s(e.L);
        while (e.L.i < e.L.len && l(e.L) !== "`") {
          if (l(e.L) === "\\" && e.L.i + 1 < e.L.len) s(e.L);
          s(e.L);
        }
        if (l(e.L) === "`") s(e.L);
        continue;
      }
      if (L === "$") {
        let f = l(e.L, 1);
        if (f === "$" && T0s()) {
          let b = 2;
          while (l(e.L, b) === "$") b++;
          if (b % 2 === 0 && l(e.L, b) === "{") e.dollarOperandDiff = !0;
          for (let h = 1; h < b; h++) s(e.L);
          continue;
        }
        if (f === "{") {
          let b = 0;
          s(e.L), s(e.L), b++;
          while (e.L.i < e.L.len && b > 0) {
            let h = l(e.L);
            if (h === "\\" && e.L.i + 1 < e.L.len) s(e.L);else if (h === "$" && l(e.L, 1) === "$") s(e.L);else if (h === "$" && l(e.L, 1) === "'") R(e, "$'");else if (h === '"' || h === "'") R(e, h);else if (h === "`") {
              e.zshBraceDiff = !0, s(e.L);
              while (e.L.i < e.L.len && l(e.L) !== "`") {
                if (l(e.L) === "\\" && e.L.i + 1 < e.L.len) s(e.L);
                s(e.L);
              }
            } else if (h === "$" && l(e.L, 1) === "{") b++, s(e.L);else if (h === "$" && l(e.L, 1) === "(") e.zshBraceDiff = !0;else if (h === "{") e.zshBraceDiff = !0;else if (h === "}") b--;
            s(e.L);
          }
          continue;
        }
        if (f === "(") {
          e.zshBraceDiff = !0;
          let b = 0;
          s(e.L), s(e.L), b++;
          while (e.L.i < e.L.len && b > 0) {
            let h = l(e.L);
            if (h === "\\" && e.L.i + 1 < e.L.len) s(e.L);else if (h === "$" && l(e.L, 1) === "$") s(e.L);else if (h === "$" && l(e.L, 1) === "'") R(e, "$'");else if (h === '"' || h === "'") R(e, h);else if (h === "`") {
              s(e.L);
              while (e.L.i < e.L.len && l(e.L) !== "`") {
                if (l(e.L) === "\\" && e.L.i + 1 < e.L.len) s(e.L);
                s(e.L);
              }
            } else if (h === "(") b++;else if (h === ")") b--;
            s(e.L);
          }
          continue;
        }
      }
      s(e.L);
    }
    let b_76 = e.L.b;
    if (b_76 === b_74) return null;
    return u(e, "regex", b_74, b_76, []);
  }
  let r = [],
    b_77 = e.L.b,
    c = () => {
      if (e.L.b > b_77) r.push(u(e, "word", b_77, e.L.b, []));
    };
  while (e.L.i < e.L.len) {
    let d = l(e.L);
    if (d === "}") break;
    if (d === "{") e.zshBraceDiff = !0;
    if (t && d === "/") break;
    if (d === "\\" && e.L.i + 1 < e.L.len) {
      s(e.L), s(e.L);
      continue;
    }
    let L = l(e.L, 1);
    if (d === "$") {
      if (L === "{" || L === "(" || L === "[") {
        c();
        let f = F(e);
        if (f) r.push(f);
        b_77 = e.L.b;
        continue;
      }
      if (L === "'") {
        c();
        let b_78 = e.L.b;
        if (R(e, "$'"), l(e.L) === "'") s(e.L);
        r.push(u(e, "ansi_c_string", b_78, e.L.b, [])), b_77 = e.L.b;
        continue;
      }
      if (D(L) || E(L) || Q.has(L) || L >= "\x80") {
        c();
        let f = F(e);
        if (f) r.push(f);
        b_77 = e.L.b;
        continue;
      }
    }
    if (d === '"') {
      c(), r.push(H(e)), b_77 = e.L.b;
      continue;
    }
    if (d === "'") {
      c();
      let b_79 = e.L.b;
      if (R(e, d), l(e.L) === "'") s(e.L);
      r.push(u(e, "raw_string", b_79, e.L.b, [])), b_77 = e.L.b;
      continue;
    }
    if ((d === "<" || d === ">") && L === "(") {
      e.zshBraceDiff = !0, c();
      let f = ce(e);
      if (f) r.push(f);
      b_77 = e.L.b;
      continue;
    }
    if (d === "`") {
      c();
      let f = le(e);
      r.push(f), b_77 = e.L.b;
      continue;
    }
    s(e.L);
  }
  if (c(), r.length > 1 && r[0].type === "word" && /^[ \t]+$/.test(r[0].text)) r.shift();
  if (r.length === 0) return null;
  if (r.length === 1) return r[0];
  let a = r.at(-1);
  return u(e, "concatenation", r[0].startIndex, a.endIndex, r);
}
function wt(e) {
  let o = [],
    b_80 = e.L.b,
    n = () => {
      if (e.L.b > b_80) o.push(u(e, "regex", b_80, e.L.b, []));
    };
  while (e.L.i < e.L.len) {
    let r = l(e.L);
    if (r === "}") break;
    if (r === "{") e.zshBraceDiff = !0;
    if (r === "\\" && e.L.i + 1 < e.L.len) {
      s(e.L), s(e.L);
      continue;
    }
    if (r === '"') {
      n(), o.push(H(e)), b_80 = e.L.b;
      continue;
    }
    if (r === "'") {
      n();
      let b_81 = e.L.b;
      s(e.L);
      while (e.L.i < e.L.len && l(e.L) !== "'") s(e.L);
      if (l(e.L) === "'") s(e.L);
      o.push(u(e, "raw_string", b_81, e.L.b, [])), b_80 = e.L.b;
      continue;
    }
    if (r === "`") {
      e.zshBraceDiff = !0, s(e.L);
      while (e.L.i < e.L.len && l(e.L) !== "`") {
        if (l(e.L) === "\\" && e.L.i + 1 < e.L.len) s(e.L);
        s(e.L);
      }
      if (l(e.L) === "`") s(e.L);
      continue;
    }
    if (r === "$") {
      let i = l(e.L, 1);
      if (i === "$") {
        s(e.L), s(e.L);
        continue;
      }
      if (i === "'") {
        n();
        let b_82 = e.L.b;
        if (R(e, "$'"), l(e.L) === "'") s(e.L);
        o.push(u(e, "ansi_c_string", b_82, e.L.b, [])), b_80 = e.L.b;
        continue;
      }
      if (i === "{") {
        let c = 1;
        s(e.L), s(e.L);
        while (e.L.i < e.L.len && c > 0) {
          let a = l(e.L);
          if (a === "\\" && e.L.i + 1 < e.L.len) s(e.L);else if (a === "$" && l(e.L, 1) === "$") s(e.L);else if (a === "$" && l(e.L, 1) === "'") R(e, "$'");else if (a === '"' || a === "'") R(e, a);else if (a === "`") {
            e.zshBraceDiff = !0, s(e.L);
            while (e.L.i < e.L.len && l(e.L) !== "`") {
              if (l(e.L) === "\\" && e.L.i + 1 < e.L.len) s(e.L);
              s(e.L);
            }
          } else if (a === "$" && l(e.L, 1) === "{") c++, s(e.L);else if (a === "$" && l(e.L, 1) === "(") e.zshBraceDiff = !0;else if (a === "{") e.zshBraceDiff = !0;else if (a === "}") c--;
          s(e.L);
        }
        continue;
      }
      if (i === "(") {
        e.zshBraceDiff = !0;
        let c = 1;
        s(e.L), s(e.L);
        while (e.L.i < e.L.len && c > 0) {
          let a = l(e.L);
          if (a === "\\" && e.L.i + 1 < e.L.len) s(e.L);else if (a === "$" && l(e.L, 1) === "$") s(e.L);else if (a === "$" && l(e.L, 1) === "'") R(e, "$'");else if (a === '"' || a === "'") R(e, a);else if (a === "`") {
            s(e.L);
            while (e.L.i < e.L.len && l(e.L) !== "`") {
              if (l(e.L) === "\\" && e.L.i + 1 < e.L.len) s(e.L);
              s(e.L);
            }
          } else if (a === "(") c++;else if (a === ")") c--;
          s(e.L);
        }
        continue;
      }
    }
    s(e.L);
  }
  return n(), o;
}
function le(e) {
  let b_83 = e.L.b;
  s(e.L);
  let t = u(e, "`", b_83, e.L.b, []),
    i_17 = e.L.i;
  {
    let L = !1;
    while (i_17 < e.L.len) {
      let f = e.L.src[i_17];
      if (f === "\\") {
        let b = e.L.src[i_17 + 1];
        if (b === "`" || b === "$" || b === "\\" || b === '"' || b === `
`) L = !0;
        i_17 += 2;
        continue;
      }
      if (f === "`") break;
      i_17++;
    }
    if (L) {
      let b_84 = e.L.b;
      while (e.L.i < i_17) s(e.L);
      let b = u(e, "backtick_escape_unsupported", b_84, e.L.b, []);
      e.zshMathDiff ||= e.zshMathGuard && M_t.test(b.text);
      let h;
      if (l(e.L) === "`") {
        let b_85 = e.L.b;
        s(e.L), h = u(e, "`", b_85, e.L.b, []);
      } else h = u(e, "`", e.L.b, e.L.b, []);
      return u(e, "command_substitution", b_83, h.endIndex, [t, b, h]);
    }
  }
  e.inBacktick++;
  let inDquote_2 = e.inDquote;
  e.inDquote = 0;
  let i = T(e.L),
    heredocs = e.L.heredocs;
  e.L.heredocs = [];
  let a = [];
  while (!0) {
    if (x(e.L), l(e.L) === "`" || l(e.L) === "") break;
    let L = T(e.L),
      f = w(e.L, "cmd");
    if (f.type === "EOF" || f.type === "BACKTICK") {
      g(e.L, L);
      break;
    }
    if (f.type === "NEWLINE") continue;
    g(e.L, L);
    let b = qe(e);
    if (!b) break;
    if (a.push(b), x(e.L), l(e.L) === "`") break;
    let h = T(e.L),
      p = w(e.L, "cmd");
    if (p.type === "OP" && (p.value === ";" || p.value === "&")) a.push(I(e, p.value, p));else if (p.type !== "NEWLINE") g(e.L, h);
  }
  if (e.L.heredocs = heredocs, e.inBacktick--, e.inDquote = inDquote_2, e.L.i !== i_17) {
    g(e.L, i);
    while (e.L.i < i_17) s(e.L);
    a.length = 0;
    let L = u(e, "backtick_body_overrun", t.endIndex, e.L.b, []);
    e.zshMathDiff ||= e.zshMathGuard && M_t.test(L.text), a.push(L);
  }
  let d;
  if (l(e.L) === "`") {
    let b_86 = e.L.b;
    s(e.L), d = u(e, "`", b_86, e.L.b, []);
  } else d = u(e, "`", e.L.b, e.L.b, []);
  if (a.length === 0) a.push(u(e, "backtick_body_empty", t.endIndex, e.L.b, []));
  return u(e, "command_substitution", b_83, d.endIndex, [t, ...a, d]);
}
function Tt(e, o) {
  let t = I(e, "if", o),
    n = [t],
    r = A(e, null);
  n.push(...r), X(e, "then", n);
  let i = A(e, null);
  n.push(...i);
  while (!0) {
    let a = T(e.L),
      d = w(e.L, "cmd");
    if (d.type === "WORD" && d.value === "elif") {
      let L = I(e, "elif", d),
        f = A(e, null),
        b = [L, ...f];
      X(e, "then", b);
      let h = A(e, null);
      b.push(...h);
      let p = b.at(-1);
      n.push(u(e, "elif_clause", L.startIndex, p.endIndex, b));
    } else if (d.type === "WORD" && d.value === "else") {
      let L = I(e, "else", d),
        f = A(e, null),
        b = f.length > 0 ? f.at(-1) : L;
      n.push(u(e, "else_clause", L.startIndex, b.endIndex, [L, ...f]));
    } else {
      g(e.L, a);
      break;
    }
  }
  X(e, "fi", n);
  let c = n.at(-1);
  return u(e, "if_statement", t.startIndex, c.endIndex, n);
}
function _t(e, o) {
  let t = I(e, o.value, o),
    n = [t],
    r = A(e, null);
  n.push(...r);
  let i = ye(e);
  if (i) n.push(i);
  let c = n.at(-1);
  return u(e, "while_statement", t.startIndex, c.endIndex, n);
}
function De(e, o) {
  let t = I(e, o.value, o);
  if (x(e.L), o.value === "for" && l(e.L) === "(" && l(e.L, 1) === "(") {
    let b = e.L.b;
    s(e.L), s(e.L);
    let h = u(e, "((", b, e.L.b, []),
      p = [t, h],
      inForHead_2 = e.inForHead;
    for (let k = 0; k < 3; k++) {
      let i_18 = e.L.i;
      e.inForHead = k < 2, x(e.L);
      let z = V(e, k < 2 ? ";" : "))", "assign");
      p.push(...z), x(e.L);
      let O = k < 2 ? ";" : ")",
        G = oe(e, i_18, O, k === 2);
      if (!(k < 2 ? l(e.L) === ";" : l(e.L) === ")" && l(e.L, 1) === ")") && je(e, G, k === 2)) p.push(u(e, "ERROR", e.L.b, e.L.b, []));
      if (k < 2) {
        if (l(e.L) === ";") {
          let b_87 = e.L.b;
          s(e.L), p.push(u(e, ";", b_87, e.L.b, []));
        }
      }
    }
    if (e.inForHead = inForHead_2, x(e.L), l(e.L) === ")" && l(e.L, 1) === ")") {
      let b_88 = e.L.b;
      s(e.L), s(e.L), p.push(u(e, "))", b_88, e.L.b, []));
    } else p.push(u(e, "))", e.L.b, e.L.b, []));
    let m = T(e.L),
      v = w(e.L, "cmd");
    if (v.type === "OP" && v.value === ";") p.push(I(e, ";", v));else if (v.type !== "NEWLINE") g(e.L, m);
    let y = ye(e);
    if (y) p.push(y);else if (q(e), x(e.L), l(e.L) === "{") {
      let b_89 = e.L.b;
      s(e.L);
      let N = u(e, "{", b_89, e.L.b, []),
        z = A(e, "}"),
        O;
      if (l(e.L) === "}") {
        let b_90 = e.L.b;
        s(e.L), O = u(e, "}", b_90, e.L.b, []);
      } else O = u(e, "}", e.L.b, e.L.b, []);
      p.push(u(e, "compound_statement", N.startIndex, O.endIndex, [N, ...z, O]));
    }
    let S = p.at(-1);
    return u(e, "c_style_for_statement", t.startIndex, S.endIndex, p);
  }
  let n = [t],
    r = w(e.L, "arg");
  if (r.type === "WORD" && D(r.value[0] ?? "") && [...r.value].every(C)) n.push(u(e, "variable_name", r.start, r.end, []));else n.push(u(e, "ERROR", r.start, r.end, []));
  x(e.L);
  let i = T(e.L),
    c = w(e.L, "arg");
  if (c.type === "WORD" && c.value === "in") {
    n.push(I(e, "in", c));
    while (!0) {
      x(e.L);
      let b = l(e.L);
      if (b === ";" || b === `
` || b === "") break;
      let h = M(e, "arg");
      if (!h) break;
      n.push(h);
    }
  } else g(e.L, i);
  let a = T(e.L),
    d = w(e.L, "cmd");
  if (d.type === "OP" && d.value === ";") n.push(I(e, ";", d));else if (d.type !== "NEWLINE") g(e.L, a);
  let L = ye(e);
  if (L) n.push(L);
  let f = n.at(-1);
  return u(e, "for_statement", t.startIndex, f.endIndex, n);
}
function ye(e) {
  q(e);
  let o = T(e.L),
    t = w(e.L, "cmd");
  if (t.type !== "WORD" || t.value !== "do") return g(e.L, o), null;
  let n = I(e, "do", t),
    r = A(e, null),
    i = [n, ...r];
  X(e, "done", i);
  let c = i.at(-1);
  return u(e, "do_group", n.startIndex, c.endIndex, i);
}
function St(e, o) {
  let t = I(e, "case", o),
    n = [t];
  x(e.L);
  let r = M(e, "arg");
  if (r) n.push(r);
  x(e.L), X(e, "in", n), q(e);
  while (!0) {
    x(e.L), q(e);
    let c = T(e.L),
      a = w(e.L, "arg");
    if (a.type === "WORD" && a.value === "esac") {
      n.push(I(e, "esac", a));
      break;
    }
    if (a.type === "EOF") break;
    g(e.L, c);
    let d = Nt(e);
    if (!d) break;
    n.push(d);
  }
  let i = n.at(-1);
  return u(e, "case_statement", t.startIndex, i.endIndex, n);
}
function Nt(e) {
  x(e.L);
  let b_91 = e.L.b,
    t = [];
  if (l(e.L) === "(") {
    let b_92 = e.L.b;
    s(e.L), t.push(u(e, "(", b_92, e.L.b, []));
  }
  let n = !0;
  while (!0) {
    x(e.L);
    let d = l(e.L);
    if (d === ")" || d === "") break;
    let L = Et(e);
    if (L.length === 0) break;
    if (!n && L.length > 1) {
      let f = L.map(item => item.type === "extglob_pattern" ? u(e, "word", item.startIndex, item.endIndex, []) : item),
        b = f[0],
        h = f.at(-1);
      t.push(u(e, "concatenation", b.startIndex, h.endIndex, f));
    } else t.push(...L);
    if (n = !1, x(e.L), l(e.L) === "\\" && l(e.L, 1) === `
`) s(e.L), s(e.L), x(e.L);
    if (l(e.L) === "|") {
      let b_93 = e.L.b;
      if (s(e.L), t.push(u(e, "|", b_93, e.L.b, [])), l(e.L) === "\\" && l(e.L, 1) === `
`) s(e.L), s(e.L);
    } else break;
  }
  if (l(e.L) === ")") {
    let b_94 = e.L.b;
    s(e.L), t.push(u(e, ")", b_94, e.L.b, []));
  }
  let r = A(e, null);
  t.push(...r);
  let i = T(e.L),
    c = w(e.L, "cmd");
  if (c.type === "OP" && (c.value === ";;" || c.value === ";&" || c.value === ";;&")) t.push(I(e, c.value, c));else g(e.L, i);
  if (t.length === 0) return null;
  if (r.length === 0) for (let d = 0; d < t.length; d++) {
    let L = t[d];
    if (L.type !== "extglob_pattern") continue;
    let f = W(e, L.startIndex, L.endIndex);
    if (/^[-+?*@!][a-zA-Z]/.test(f) && !/[*?(]/.test(f)) t[d] = u(e, "word", L.startIndex, L.endIndex, []);
  }
  let a = t.at(-1);
  return u(e, "case_item", b_91, a.endIndex, t);
}
function Et(e) {
  x(e.L);
  let o = T(e.L),
    b_95 = e.L.b,
    i_19 = e.L.i,
    r = 0,
    i = !1,
    c = !1,
    a = !1;
  while (e.L.i < e.L.len) {
    let b = l(e.L);
    if (b === "\\" && e.L.i + 1 < e.L.len) {
      s(e.L), s(e.L);
      continue;
    }
    if (b === "$" && l(e.L, 1) === "$") {
      i = !0, s(e.L), s(e.L);
      continue;
    }
    let h = b === "$" && l(e.L, 1) === "'";
    if (b === '"' || b === "'" || h) {
      a = !0;
      let p = h ? "'" : b;
      if (h) s(e.L);
      s(e.L);
      while (e.L.i < e.L.len && l(e.L) !== p) {
        if (b !== "'" && l(e.L) === "\\" && e.L.i + 1 < e.L.len) s(e.L);
        s(e.L);
      }
      if (l(e.L) === p) s(e.L);
      continue;
    }
    if (b === "(") {
      r++, s(e.L);
      continue;
    }
    if (r > 0) {
      if (b === ")") {
        r--, s(e.L);
        continue;
      }
      if (b === `
`) break;
      s(e.L);
      continue;
    }
    if (b === ")" || b === "|" || b === " " || b === "\t" || b === `
`) break;
    if (b === "$") i = !0;
    if (b === "[") c = !0;
    s(e.L);
  }
  if (e.L.b === b_95) return [];
  let d = e.src.slice(i_19, e.L.i),
    L = /[*?+@!]\(/.test(d);
  if (a && !L) return g(e.L, o), Rt(e);
  if (!L && (i || c)) {
    g(e.L, o);
    let b = M(e, "arg");
    return b ? [b] : [];
  }
  let f = L || /[*?]/.test(d) || /^[-+?*@!][a-zA-Z]/.test(d) ? "extglob_pattern" : "word";
  return [u(e, f, b_95, e.L.b, [])];
}
function Rt(e) {
  let o = [],
    b_96 = e.L.b,
    i_20 = e.L.i,
    r = () => {
      if (e.L.i > i_20) {
        let i = e.src.slice(i_20, e.L.i),
          c = /[*?]/.test(i) ? "extglob_pattern" : "word";
        o.push(u(e, c, b_96, e.L.b, []));
      }
    };
  while (e.L.i < e.L.len) {
    let i = l(e.L);
    if (i === "\\" && e.L.i + 1 < e.L.len) {
      s(e.L), s(e.L);
      continue;
    }
    if (i === '"') {
      r(), o.push(H(e)), b_96 = e.L.b, i_20 = e.L.i;
      continue;
    }
    if (i === "'") {
      r();
      let c = w(e.L, "arg");
      o.push(I(e, "raw_string", c)), b_96 = e.L.b, i_20 = e.L.i;
      continue;
    }
    if (i === "$" && l(e.L, 1) === "$") {
      s(e.L), s(e.L);
      continue;
    }
    if (i === "$" && l(e.L, 1) === "'") {
      r();
      let c = w(e.L, "arg");
      o.push(I(e, "ansi_c_string", c)), b_96 = e.L.b, i_20 = e.L.i;
      continue;
    }
    if (i === ")" || i === "|" || i === " " || i === "\t" || i === `
`) break;
    s(e.L);
  }
  return r(), o;
}
function Ot(e, o) {
  let t = I(e, "function", o);
  x(e.L);
  let n = w(e.L, "arg"),
    r = u(e, "word", n.start, n.end, []),
    i = [t, r];
  if (x(e.L), l(e.L) === "(" && l(e.L, 1) === ")") {
    let d = w(e.L, "cmd");
    i.push(I(e, "(", d));
    let b_97 = e.L.b;
    s(e.L), i.push(u(e, ")", b_97, e.L.b, []));
  }
  x(e.L), q(e);
  let c = K(e);
  if (c) if (c.type === "redirected_statement" && c.children.length >= 2 && c.children[0].type === "compound_statement") i.push(...c.children);else i.push(c);
  let a = i.at(-1);
  return u(e, "function_definition", t.startIndex, a.endIndex, i);
}
function Dt(e, o) {
  let t = I(e, o.value, o),
    n = [t],
    r = [];
  while (!0) {
    x(e.L);
    let L = j(e);
    if (L) {
      r.push(L);
      continue;
    }
    let f = l(e.L);
    if (f === "(") {
      n.push(u(e, "variable_name", e.L.b, e.L.b + 1, []));
      break;
    }
    if (f === "" || f === `
` || f === ";" || f === "&" || f === "|" || f === ")" || f === "<" || f === ">") break;
    let b = Ke(e);
    if (b) {
      n.push(b);
      continue;
    }
    if (f === '"' || f === "'" || f === "$") {
      let _ = M(e, "arg");
      if (_) {
        n.push(_);
        continue;
      }
      break;
    }
    let h = T(e.L),
      p = w(e.L, "arg");
    if (p.type === "WORD" || p.type === "NUMBER") {
      if (p.value.startsWith("-")) n.push(I(e, "word", p));else if (D(p.value[0] ?? "")) n.push(u(e, "variable_name", p.start, p.end, []));else n.push(I(e, "word", p));
    } else {
      g(e.L, h);
      break;
    }
  }
  let i = n.at(-1),
    c = u(e, "declaration_command", t.startIndex, i.endIndex, n);
  if (r.length === 0) return c;
  let a = r.at(-1),
    d = Math.max(c.endIndex, a.endIndex);
  return u(e, "redirected_statement", t.startIndex, d, [c, ...r]);
}
function $t(e, o) {
  let t = I(e, "unset", o),
    n = [t],
    r = [];
  while (!0) {
    x(e.L);
    let L = j(e);
    if (L) {
      r.push(L);
      continue;
    }
    let f = l(e.L);
    if (f === "(") {
      n.push(u(e, "variable_name", e.L.b, e.L.b + 1, []));
      break;
    }
    if (f === "" || f === `
` || f === ";" || f === "&" || f === "|" || f === ")" || f === "<" || f === ">") break;
    let b = M(e, "arg");
    if (!b) break;
    if (b.type === "word") {
      if (b.text.startsWith("-")) n.push(b);else n.push(u(e, "variable_name", b.startIndex, b.endIndex, []));
    } else n.push(b);
  }
  let i = n.at(-1),
    c = u(e, "unset_command", t.startIndex, i.endIndex, n);
  if (r.length === 0) return c;
  let a = r.at(-1),
    d = Math.max(c.endIndex, a.endIndex);
  return u(e, "redirected_statement", t.startIndex, d, [c, ...r]);
}
function X(e, o, t) {
  q(e);
  let n = T(e.L),
    r = w(e.L, "cmd");
  if (r.type === "WORD" && r.value === o) t.push(I(e, o, r));else g(e.L, n);
}
function $e(e, o) {
  return Ie(e, o);
}
function Ie(e, o) {
  let t = Ae(e, o);
  if (!t) return null;
  while (!0) {
    x(e.L);
    let n = T(e.L);
    if (o === "]]" && l(e.L) === "|" && l(e.L, 1) === "|") {
      let b_98 = e.L.b;
      s(e.L), s(e.L);
      let i = u(e, "||", b_98, e.L.b, []);
      Le(e, o);
      let c = Ae(e, o);
      if (!c) {
        g(e.L, n);
        break;
      }
      t = u(e, "binary_expression", t.startIndex, c.endIndex, [t, i, c]);
    } else break;
  }
  return t;
}
function Ae(e, o) {
  let t = Me(e, o);
  if (!t) return null;
  while (!0) {
    x(e.L);
    let n = T(e.L);
    if (o === "]]" && l(e.L) === "&" && l(e.L, 1) === "&") {
      let b_99 = e.L.b;
      s(e.L), s(e.L);
      let i = u(e, "&&", b_99, e.L.b, []);
      Le(e, o);
      let c = Me(e, o);
      if (!c) {
        g(e.L, n);
        break;
      }
      t = u(e, "binary_expression", t.startIndex, c.endIndex, [t, i, c]);
    } else break;
  }
  return t;
}
function Le(e, o) {
  if (x(e.L), o === "]]") while (!0) {
    let t = l(e.L);
    if (t === `
`) s(e.L), x(e.L);else if (t === "#") while (l(e.L) && l(e.L) !== `
`) s(e.L);else break;
  }
}
function Me(e, o) {
  if (Le(e, o), l(e.L) === "(") {
    let b_100 = e.L.b;
    s(e.L);
    let r = u(e, "(", b_100, e.L.b, []),
      i = Ie(e, o);
    x(e.L);
    let c;
    if (l(e.L) === ")") {
      let b_101 = e.L.b;
      s(e.L), c = u(e, ")", b_101, e.L.b, []);
    } else c = u(e, ")", e.L.b, e.L.b, []);
    let a = i ? [r, i, c] : [r, c];
    return u(e, "parenthesized_expression", r.startIndex, c.endIndex, a);
  }
  return At(e, o);
}
function Ue(e, o) {
  Le(e, o);
  let t = l(e.L),
    n = r => r === " " || r === "\t" || r === `
` || r === "";
  if (t === "!" && (n(l(e.L, 1)) || l(e.L, 1) === "(")) {
    let b_102 = e.L.b;
    s(e.L);
    let i = u(e, "!", b_102, e.L.b, []),
      c = Ue(e, o);
    if (!c) return i;
    return u(e, "unary_expression", i.startIndex, c.endIndex, [i, c]);
  }
  if (t === "(") {
    let b_103 = e.L.b;
    s(e.L);
    let i = u(e, "(", b_103, e.L.b, []),
      c = Ie(e, o);
    x(e.L);
    let a;
    if (l(e.L) === ")") {
      let b_104 = e.L.b;
      s(e.L), a = u(e, ")", b_104, e.L.b, []);
    } else a = u(e, ")", e.L.b, e.L.b, []);
    let d = c ? [i, c, a] : [i, a];
    return u(e, "parenthesized_expression", i.startIndex, a.endIndex, d);
  }
  if (t === "-" && D(l(e.L, 1))) {
    let r = T(e.L),
      b_105 = e.L.b;
    s(e.L);
    while (C(l(e.L))) s(e.L);
    if (!n(l(e.L))) return g(e.L, r), se(e, o);
    let c = u(e, "test_operator", b_105, e.L.b, []),
      i_21 = e.L.i;
    x(e.L);
    let d = se(e, o);
    if (!d) {
      let L = e.src.slice(i_21, e.L.i);
      if (!/^(?:[ \t]|\\\n)*$/.test(L)) {
        let f = u(e, "test_rhs_missing", c.endIndex, e.L.b, []);
        return u(e, "unary_expression", c.startIndex, e.L.b, [c, f]);
      }
      return c;
    }
    return u(e, "unary_expression", c.startIndex, d.endIndex, [c, d]);
  }
  return se(e, o);
}
function ne(e, o, t) {
  let n = u(e, "test_rhs_missing", t.endIndex, e.L.b, []);
  return u(e, "binary_expression", o.startIndex, e.L.b, [o, t, n]);
}
function At(e, o) {
  x(e.L);
  let t = Ue(e, o);
  if (!t) return null;
  x(e.L);
  let n = l(e.L),
    r = l(e.L, 1),
    i = null,
    b_106 = e.L.b;
  if (n === "=" && r === "=") s(e.L), s(e.L), i = u(e, "==", b_106, e.L.b, []);else if (n === "!" && r === "=") s(e.L), s(e.L), i = u(e, "!=", b_106, e.L.b, []);else if (n === "=" && r === "~") s(e.L), s(e.L), i = u(e, "=~", b_106, e.L.b, []);else if (n === "=" && r !== "=") s(e.L), i = u(e, "=", b_106, e.L.b, []);else if (o === "]]" && n === "<" && r !== "<") s(e.L), i = u(e, "<", b_106, e.L.b, []);else if (o === "]]" && n === ">" && r !== ">") s(e.L), i = u(e, ">", b_106, e.L.b, []);else if (n === "-" && D(r)) {
    s(e.L);
    while (C(l(e.L))) s(e.L);
    i = u(e, "test_operator", b_106, e.L.b, []);
  }
  if (!i) return t;
  if (x(e.L), o === "]]") {
    let d = i.type;
    if (d === "=~") {
      x(e.L);
      let L = l(e.L),
        f = null;
      if (L === '"' || L === "'") {
        let b = T(e.L),
          h = L === '"' ? H(e) : I(e, "raw_string", w(e.L, "arg")),
          i_22 = e.L.i,
          _ = i_22;
        while (_ < e.L.len && (e.src[_] === " " || e.src[_] === "\t")) _++;
        let m = e.src[_] ?? "",
          v = _ + 1;
        while (e.src[v] === "\\") if (e.src[v + 1] === `
`) v += 2;else if (e.src[v + 1] === "\r" && e.src[v + 2] === `
`) v += 3;else break;
        let y = e.src[v] ?? "";
        if (m === "]" && y === "]" && _ > i_22 || m === "&" && y === "&" || m === "|" && y === "|" && _ > i_22 || m === `
` || m === "") f = h;else g(e.L, b);
      }
      if (!f) f = ze(e, !0);
      if (!f) return ne(e, t, i);
      return u(e, "binary_expression", t.startIndex, f.endIndex, [t, i, f]);
    }
    if (d === "=") {
      let L = ze(e, !1);
      if (!L) return ne(e, t, i);
      return u(e, "binary_expression", t.startIndex, L.endIndex, [t, i, L]);
    }
    if (d === "==" || d === "!=") {
      let L = zt(e);
      if (L.length === 0) return ne(e, t, i);
      let f = L.at(-1);
      return u(e, "binary_expression", t.startIndex, f.endIndex, [t, i, ...L]);
    }
  }
  let a = se(e, o);
  if (!a) return ne(e, t, i);
  return u(e, "binary_expression", t.startIndex, a.endIndex, [t, i, a]);
}
function ze(e, o) {
  x(e.L);
  let b_107 = e.L.b,
    n = 0;
  while (e.L.i < e.L.len) {
    let r = l(e.L);
    if (r === "\\" && e.L.i + 1 < e.L.len) {
      s(e.L), s(e.L);
      continue;
    }
    if (r === `
`) {
      if (n === 0) break;
      s(e.L);
      continue;
    }
    if (r === '"' || r === "'") {
      let i = r;
      s(e.L);
      while (e.L.i < e.L.len && l(e.L) !== i) {
        if (i === '"' && l(e.L) === "\\" && e.L.i + 1 < e.L.len) s(e.L);
        s(e.L);
      }
      if (e.L.i < e.L.len) s(e.L);
      continue;
    }
    if (r === "`") {
      s(e.L);
      while (e.L.i < e.L.len && l(e.L) !== "`") {
        if (l(e.L) === "\\" && e.L.i + 1 < e.L.len) s(e.L);
        s(e.L);
      }
      if (e.L.i < e.L.len) s(e.L);
      continue;
    }
    if (n === 0) {
      if (r === " " || r === "\t") break;
      if (r === "&" || !o && r === "|") break;
      if (r === ")") break;
    }
    if (r === "(") n++;else if (r === ")" && n > 0) n--;
    s(e.L);
  }
  if (e.L.b === b_107) return null;
  return u(e, "regex", b_107, e.L.b, []);
}
var Mt = new Set(["raw_string", "ansi_c_string", "comment", "subscript"]);
function zt(e) {
  x(e.L);
  let o = [],
    b_108 = e.L.b,
    i_23 = e.L.i,
    r = 0,
    i = () => {
      if (e.L.i > i_23) {
        let c = e.src.slice(i_23, e.L.i),
          a = /^\d+$/.test(c) ? "number" : "extglob_pattern";
        o.push(u(e, a, b_108, e.L.b, []));
      }
    };
  while (e.L.i < e.L.len) {
    let c = l(e.L);
    if (c === "\\" && e.L.i + 1 < e.L.len) {
      s(e.L), s(e.L);
      continue;
    }
    if (c === `
`) {
      if (r === 0) break;
      s(e.L);
      continue;
    }
    if (r === 0) {
      if (c === "&" || c === "|") break;
      if (c === " " || c === "\t") {
        let i_24 = e.L.i;
        for (;;) {
          let b = e.L.src[i_24];
          if (b === " " || b === "\t") i_24++;else if (b === "\\" && e.L.src[i_24 + 1] === `
`) i_24 += 2;else if (b === "\\" && e.L.src[i_24 + 1] === "\r" && e.L.src[i_24 + 2] === `
`) i_24 += 3;else break;
        }
        let d = e.L.src[i_24] ?? "",
          L = i_24 + 1;
        while (e.L.src[L] === "\\") if (e.L.src[L + 1] === `
`) L += 2;else if (e.L.src[L + 1] === "\r" && e.L.src[L + 2] === `
`) L += 3;else break;
        let f = e.L.src[L] ?? "";
        if (d === "]" && f === "]" || d === "&" && f === "&" || d === "|" && f === "|" || d === "#" || d === `
`) break;
        s(e.L);
        continue;
      }
    }
    if (c === "$") {
      let a = l(e.L, 1);
      if (a === "'") {
        i();
        let d = w(e.L, "arg");
        o.push(I(e, "ansi_c_string", d)), b_108 = e.L.b, i_23 = e.L.i;
        continue;
      }
      if (a === '"') {
        i();
        let d = {
          type: "DOLLAR",
          value: "$",
          start: e.L.b,
          end: e.L.b + 1
        };
        s(e.L), o.push(I(e, "$", d)), o.push(H(e)), b_108 = e.L.b, i_23 = e.L.i;
        continue;
      }
      if (a === "(" || a === "{" || a === "[" && e.zshMathGuard || D(a) || Q.has(a) || a >= "\x80") {
        i();
        let d = F(e);
        if (d) o.push(d);
        b_108 = e.L.b, i_23 = e.L.i;
        continue;
      }
    }
    if (c === '"') {
      i(), o.push(H(e)), b_108 = e.L.b, i_23 = e.L.i;
      continue;
    }
    if (c === "'") {
      i();
      let a = w(e.L, "arg");
      o.push(I(e, "raw_string", a)), b_108 = e.L.b, i_23 = e.L.i;
      continue;
    }
    if (c === "`") {
      i();
      let a = le(e);
      o.push(a), b_108 = e.L.b, i_23 = e.L.i;
      continue;
    }
    if ((c === "<" || c === ">") && l(e.L, 1) === "(") {
      i();
      let a = ce(e);
      if (a) o.push(a);
      b_108 = e.L.b, i_23 = e.L.i;
      continue;
    }
    if (c === ")" && r === 0) break;
    if (c === "(") r++;else if (c === ")" && r > 0) r--;
    s(e.L);
  }
  return i(), o;
}
function se(e, o) {
  if (x(e.L), o === "]" && l(e.L) === "]" && pe(l(e.L, 1) ?? "")) return null;
  if (o === "]]" && l(e.L) === "]" && l(e.L, 1) === "]" && pe(l(e.L, 2) ?? "")) return null;
  return M(e, "arg");
}
var Ct = {
    "=": 2,
    "+=": 2,
    "-=": 2,
    "*=": 2,
    "/=": 2,
    "%=": 2,
    "<<=": 2,
    ">>=": 2,
    "&=": 2,
    "^=": 2,
    "|=": 2,
    "||": 4,
    "&&": 5,
    "|": 6,
    "^": 7,
    "&": 8,
    "==": 9,
    "!=": 9,
    "<": 10,
    ">": 10,
    "<=": 10,
    ">=": 10,
    "<<": 11,
    ">>": 11,
    "+": 12,
    "-": 12,
    "*": 13,
    "/": 13,
    "%": 13,
    "**": 14
  },
  Bt = new Set(["=", "+=", "-=", "*=", "/=", "%=", "<<=", ">>=", "&=", "^=", "|=", "**"]);
function Ce(e, o, t) {
  g(e.L, o);
  let n = 0;
  while (e.L.i < e.L.len) {
    let r = l(e.L);
    if (t === "))" || t === ")") {
      if (r === "(") n++;else if (r === ")") if (n === 0) {
        if (t === ")" || l(e.L, 1) === ")") return;
      } else n--;
    } else if (t === "]") {
      if (r === "[") n++;else if (r === "]") {
        if (n === 0) return;
        n--;
      }
    } else if (J(e, t)) return;
    s(e.L);
  }
}
var Wt = /^(?!.*<<)(?:[\w\s$+\-*/%<>=!&|^~?:,.()[\];]|\$\{#?\w+\})*$/s;
function oe(e, o, t, n) {
  if (!e.zshMathGuard) return -1;
  let L_4 = e.L,
    i = fe(L_4.src, o, t, L_4.dollarEnds, e.inForHead),
    c = l(L_4) === t && (!n || l(L_4, 1) === ")"),
    a = i < L_4.i || c && i !== L_4.i || n && L_4.src[i + 1] !== ")" || !Wt.test(L_4.src.slice(L_4.i, i)) || !c && /["']/.test(L_4.src.slice(o, i));
  return e.zshMathDiff ||= a, e.zshMathClosesAlike = !a, i;
}
function je(e, o, t) {
  let L_5 = e.L;
  if (!(e.zshMathWalk || e.zshMathClosesAlike) || o < L_5.i || t && L_5.src[o + 1] !== ")") return !1;
  while (L_5.i < o) s(L_5);
  return !0;
}
function Be(e, o) {
  if (e.zshMathGuard && e.L.i !== o) e.zshMathDiff = !0;
}
function Y(e, o, t = "var") {
  e.inDquote++;
  let n = ae(e, o, t);
  return e.inDquote--, n;
}
function V(e, o, t = "var") {
  let n = [];
  while (!0) {
    let r = Y(e, o, t);
    if (r) n.push(r);
    if (x(e.L), l(e.L) === "," && !J(e, o)) {
      s(e.L);
      continue;
    }
    break;
  }
  return n;
}
function ae(e, o, t) {
  let n = me(e, o, 0, t);
  if (!n) return null;
  if (x(e.L), l(e.L) === "?") {
    let b_109 = e.L.b;
    s(e.L);
    let i = u(e, "?", b_109, e.L.b, []),
      c = me(e, ":", 0, t);
    x(e.L);
    let a;
    if (l(e.L) === ":") {
      let b = e.L.b;
      s(e.L), a = u(e, ":", b, e.L.b, []);
    } else a = u(e, ":", e.L.b, e.L.b, []);
    let d = ae(e, o, t),
      L = d ?? a,
      f = [n, i];
    if (c) f.push(c);
    if (f.push(a), d) f.push(d);
    return u(e, "ternary_expression", n.startIndex, L.endIndex, f);
  }
  return n;
}
function Ft(e) {
  let o = l(e.L),
    t = l(e.L, 1),
    n = l(e.L, 2);
  if (o === "<" && t === "<" && n === "=") return ["<<=", 3];
  if (o === ">" && t === ">" && n === "=") return [">>=", 3];
  if (o === "*" && t === "*") return ["**", 2];
  if (o === "<" && t === "<") return ["<<", 2];
  if (o === ">" && t === ">") return [">>", 2];
  if (o === "=" && t === "=") return ["==", 2];
  if (o === "!" && t === "=") return ["!=", 2];
  if (o === "<" && t === "=") return ["<=", 2];
  if (o === ">" && t === "=") return [">=", 2];
  if (o === "&" && t === "&") return ["&&", 2];
  if (o === "|" && t === "|") return ["||", 2];
  if (o === "+" && t === "=") return ["+=", 2];
  if (o === "-" && t === "=") return ["-=", 2];
  if (o === "*" && t === "=") return ["*=", 2];
  if (o === "/" && t === "=") return ["/=", 2];
  if (o === "%" && t === "=") return ["%=", 2];
  if (o === "&" && t === "=") return ["&=", 2];
  if (o === "^" && t === "=") return ["^=", 2];
  if (o === "|" && t === "=") return ["|=", 2];
  if (o === "+" && t !== "+") return ["+", 1];
  if (o === "-" && t !== "-") return ["-", 1];
  if (o === "*") return ["*", 1];
  if (o === "/") return ["/", 1];
  if (o === "%") return ["%", 1];
  if (o === "<") return ["<", 1];
  if (o === ">") return [">", 1];
  if (o === "&") return ["&", 1];
  if (o === "|") return ["|", 1];
  if (o === "^") return ["^", 1];
  if (o === "=") return ["=", 1];
  return null;
}
function me(e, o, t, n) {
  let r = ve(e, o, n);
  if (!r) return null;
  while (!0) {
    if (x(e.L), J(e, o)) break;
    if (l(e.L) === ",") break;
    let i = Ft(e);
    if (!i) break;
    let [c, a] = i,
      d = Ct[c];
    if (d === void 0 || d < t) break;
    let b_110 = e.L.b;
    for (let p = 0; p < a; p++) s(e.L);
    let f = u(e, c, b_110, e.L.b, []),
      b = Bt.has(c) ? d : d + 1,
      h = me(e, o, b, n);
    if (!h) break;
    r = u(e, "binary_expression", r.startIndex, h.endIndex, [r, f, h]);
  }
  return r;
}
function ve(e, o, t) {
  if (x(e.L), J(e, o)) return null;
  let n = l(e.L),
    r = l(e.L, 1);
  if (n === "+" && r === "+" || n === "-" && r === "-") {
    let b_111 = e.L.b;
    s(e.L), s(e.L);
    let c = u(e, n + r, b_111, e.L.b, []),
      a = ve(e, o, t);
    if (!a) return c;
    return u(e, "unary_expression", c.startIndex, a.endIndex, [c, a]);
  }
  if (n === "-" || n === "+" || n === "!" || n === "~") {
    if (t !== "var" && n === "-" && E(r)) {
      let b_112 = e.L.b;
      s(e.L);
      while (E(l(e.L))) s(e.L);
      return u(e, "number", b_112, e.L.b, []);
    }
    let b_113 = e.L.b;
    s(e.L);
    let c = u(e, n, b_113, e.L.b, []),
      a = ve(e, o, t);
    if (!a) return c;
    return u(e, "unary_expression", c.startIndex, a.endIndex, [c, a]);
  }
  return Ht(e, o, t);
}
function Ht(e, o, t) {
  let n = Gt(e, o, t);
  if (!n) return null;
  let r = l(e.L),
    i = l(e.L, 1);
  if (r === "+" && i === "+" || r === "-" && i === "-") {
    let b_114 = e.L.b;
    s(e.L), s(e.L);
    let a = u(e, r + i, b_114, e.L.b, []);
    return u(e, "postfix_expression", n.startIndex, a.endIndex, [n, a]);
  }
  return n;
}
function Gt(e, o, t) {
  if (x(e.L), J(e, o)) return null;
  let n = l(e.L);
  if (n === "(") {
    let b_115 = e.L.b;
    s(e.L);
    let i = u(e, "(", b_115, e.L.b, []),
      c = V(e, ")", t);
    x(e.L);
    let a;
    if (l(e.L) === ")") {
      let b_116 = e.L.b;
      s(e.L), a = u(e, ")", b_116, e.L.b, []);
    } else a = u(e, ")", e.L.b, e.L.b, []);
    return u(e, "parenthesized_expression", i.startIndex, a.endIndex, [i, ...c, a]);
  }
  if (n === '"') return H(e);
  if (n === "$") return F(e);
  if (E(n)) {
    let b_117 = e.L.b;
    while (E(l(e.L))) s(e.L);
    if (e.L.b - b_117 === 1 && n === "0" && (l(e.L) === "x" || l(e.L) === "X")) {
      s(e.L);
      while (at(l(e.L))) s(e.L);
    } else if (l(e.L) === "#") {
      s(e.L);
      while (ct(l(e.L))) s(e.L);
      if (l(e.L) === "$" && e.zshMathGuard) {
        let i = u(e, "number", b_117, e.L.b, []),
          c = F(e);
        return c ? u(e, "binary_expression", b_117, e.L.b, [i, c]) : i;
      }
    }
    return u(e, "number", b_117, e.L.b, []);
  }
  if (D(n)) {
    let b_118 = e.L.b;
    while (C(l(e.L))) s(e.L);
    let i = l(e.L);
    if (t === "assign") {
      x(e.L);
      let a = l(e.L),
        d = l(e.L, 1);
      if (a === "=" && d !== "=") {
        let L = u(e, "variable_name", b_118, e.L.b, []),
          b_119 = e.L.b;
        s(e.L);
        let b = u(e, "=", b_119, e.L.b, []),
          h = ae(e, o, t),
          p = h ? h.endIndex : b.endIndex;
        return u(e, "variable_assignment", b_118, p, h ? [L, b, h] : [L, b]);
      }
    }
    if (i === "[") {
      let a = u(e, "variable_name", b_118, e.L.b, []),
        b_120 = e.L.b;
      s(e.L);
      let L = u(e, "[", b_120, e.L.b, []),
        f = ae(e, "]", "var") ?? F(e);
      x(e.L);
      let b;
      if (l(e.L) === "]") {
        let b_121 = e.L.b;
        s(e.L), b = u(e, "]", b_121, e.L.b, []);
      } else b = u(e, "]", e.L.b, e.L.b, []);
      let h = f ? [a, L, f, b] : [a, L, b];
      return u(e, "subscript", b_118, b.endIndex, h);
    }
    return u(e, t === "var" ? "variable_name" : "word", b_118, e.L.b, []);
  }
  return null;
}
function J(e, o) {
  let t = l(e.L);
  if (o === "))") return t === ")" && l(e.L, 1) === ")";
  if (o === ")") return t === ")";
  if (o === ";") return t === ";";
  if (o === ":") return t === ":";
  if (o === "]") return t === "]";
  if (o === "}") return t === "}";
  if (o === ":}") return t === ":" || t === "}";
  return t === "" || t === `
`;
}
function R(e, o) {
  let t = o.at(-1);
  if (o === "$'") s(e.L);
  s(e.L);
  while (e.L.i < e.L.len && l(e.L) !== t) {
    if (o !== "'" && l(e.L) === "\\" && e.L.i + 1 < e.L.len) s(e.L);else if ((t === '"' || e.inDquote > 0) && (l(e.L) === "$" || l(e.L) === "`")) e.zshBraceDiff = !0;
    s(e.L);
  }
}
export { jji, Ah, nTr, Dho };