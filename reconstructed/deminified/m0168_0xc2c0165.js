// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
var Se = {
  parse: parse
};
function pb() {
  return Se;
}
var j = new Set(["?", "$", "@", "*", "#", "-", "!", "_"]),
  _e = new Set(["export", "declare", "typeset", "readonly", "local"]),
  S2n = new Set(["if", "then", "elif", "else", "fi", "while", "until", "for", "in", "do", "done", "case", "esac", "function", "select"]);
function Ne(src) {
  return {
    src: src,
    len: src.length,
    i: 0,
    b: 0,
    heredocs: [],
    byteTable: null,
    zshCondParenDiff: !1
  };
}
function n(e) {
  let o = e.src.charCodeAt(e.i);
  if (e.i++, o < 128) e.b++;else if (o < 2048) e.b += 2;else if (o >= 55296 && o <= 56319) e.b += 4, e.i++;else e.b += 3;
}
function L(e, o = 0) {
  return e.i + o < e.len ? e.src[e.i + o] : "";
}
function ye(e, o) {
  if (e.byteTable) return e.byteTable[o];
  let uint32Array = new Uint32Array(e.len + 1),
    s = 0,
    i = 0;
  while (i < e.len) {
    uint32Array[i] = s;
    let r = e.src.charCodeAt(i);
    if (r < 128) s++, i++;else if (r < 2048) s += 2, i++;else if (r >= 55296 && r <= 56319) uint32Array[i + 1] = s + 2, s += 4, i += 2;else s += 3, i++;
  }
  return uint32Array[e.len] = s, e.byteTable = uint32Array, uint32Array[o];
}
function Ie(e) {
  return e >= "a" && e <= "z" || e >= "A" && e <= "Z" || e >= "0" && e <= "9" || e === "_" || e === "/" || e === "." || e === "-" || e === "+" || e === ":" || e === "@" || e === "%" || e === "," || e === "~" || e === "^" || e === "?" || e === "*" || e === "!" || e === "=" || e === "[" || e === "]" || e >= "\x80";
}
function Ee(e) {
  return Ie(e) || e === "\\";
}
function ge(e) {
  return e === "" || e === " " || e === "\t" || e === `
` || e === "\r" || e === ";" || e === "&" || e === "|" || e === "(" || e === ")" || e === "<" || e === ">";
}
function oe(e) {
  return ge(e) && e !== "(";
}
function O(e) {
  return e >= "a" && e <= "z" || e >= "A" && e <= "Z" || e === "_";
}
function B(e) {
  return O(e) || e >= "0" && e <= "9";
}
function E(e) {
  return e >= "0" && e <= "9";
}
function Oe(e) {
  return E(e) || e >= "a" && e <= "f" || e >= "A" && e <= "F";
}
function Re(e) {
  return B(e) || e === "@";
}
function De(e) {
  return e !== "" && e !== " " && e !== "\t" && e !== `
` && e !== "<" && e !== ">" && e !== "|" && e !== "&" && e !== ";" && e !== "(" && e !== ")" && e !== "'" && e !== '"' && e !== "`" && e !== "\\";
}
function x(e) {
  while (e.i < e.len) {
    let o = e.src[e.i];
    if (o === " " || o === "\t" || o === "\r") n(e);else if (o === "\\") {
      if (e.src[e.i + 1] === `
`) n(e), n(e);else break;
    } else break;
  }
}
function Ae(e) {
  while (e.i < e.len) {
    let o = e.src[e.i];
    if (o === " " || o === "\t") n(e);else if (o === "\\" && e.src[e.i + 1] === `
`) n(e), n(e);else break;
  }
}
function g(e, o = "arg") {
  x(e);
  let t = e.b;
  if (e.i >= e.len) return {
    type: "EOF",
    value: "",
    start: t,
    end: t
  };
  let value = e.src[e.i],
    i = L(e, 1),
    r = L(e, 2);
  if (value === `
`) return n(e), {
    type: "NEWLINE",
    value: `
`,
    start: t,
    end: e.b
  };
  if (value === "#") {
    let l = e.i > 0 ? e.src[e.i - 1] : "";
    if (l === "" || " \t\n;&|<>()`".includes(l)) {
      let i_2 = e.i;
      while (e.i < e.len && e.src[e.i] !== `
`) n(e);
      return {
        type: "COMMENT",
        value: e.src.slice(i_2, e.i),
        start: t,
        end: e.b
      };
    }
  }
  if (value === "&" && i === "&") return n(e), n(e), {
    type: "OP",
    value: "&&",
    start: t,
    end: e.b
  };
  if (value === "|" && i === "|") return n(e), n(e), {
    type: "OP",
    value: "||",
    start: t,
    end: e.b
  };
  if (value === "|" && i === "&") return n(e), n(e), {
    type: "OP",
    value: "|&",
    start: t,
    end: e.b
  };
  if (value === ";" && i === ";" && r === "&") return n(e), n(e), n(e), {
    type: "OP",
    value: ";;&",
    start: t,
    end: e.b
  };
  if (value === ";" && i === ";") return n(e), n(e), {
    type: "OP",
    value: ";;",
    start: t,
    end: e.b
  };
  if (value === ";" && i === "&") return n(e), n(e), {
    type: "OP",
    value: ";&",
    start: t,
    end: e.b
  };
  if (value === ">" && i === ">") return n(e), n(e), {
    type: "OP",
    value: ">>",
    start: t,
    end: e.b
  };
  if (value === ">" && i === "&" && r === "-") return n(e), n(e), n(e), {
    type: "OP",
    value: ">&-",
    start: t,
    end: e.b
  };
  if (value === ">" && i === "&") return n(e), n(e), {
    type: "OP",
    value: ">&",
    start: t,
    end: e.b
  };
  if (value === ">" && i === "|") return n(e), n(e), {
    type: "OP",
    value: ">|",
    start: t,
    end: e.b
  };
  if (value === "&" && i === ">" && r === ">") return n(e), n(e), n(e), {
    type: "OP",
    value: "&>>",
    start: t,
    end: e.b
  };
  if (value === "&" && i === ">") return n(e), n(e), {
    type: "OP",
    value: "&>",
    start: t,
    end: e.b
  };
  if (value === "<" && i === "<" && r === "<") return n(e), n(e), n(e), {
    type: "OP",
    value: "<<<",
    start: t,
    end: e.b
  };
  if (value === "<" && i === "<" && r === "-") return n(e), n(e), n(e), {
    type: "OP",
    value: "<<-",
    start: t,
    end: e.b
  };
  if (value === "<" && i === "<") return n(e), n(e), {
    type: "OP",
    value: "<<",
    start: t,
    end: e.b
  };
  if (value === "<" && i === "&" && r === "-") return n(e), n(e), n(e), {
    type: "OP",
    value: "<&-",
    start: t,
    end: e.b
  };
  if (value === "<" && i === "&") return n(e), n(e), {
    type: "OP",
    value: "<&",
    start: t,
    end: e.b
  };
  if (value === "<" && i === "(") return n(e), n(e), {
    type: "LT_PAREN",
    value: "<(",
    start: t,
    end: e.b
  };
  if (value === ">" && i === "(") return n(e), n(e), {
    type: "GT_PAREN",
    value: ">(",
    start: t,
    end: e.b
  };
  if (value === "(" && i === "(") return n(e), n(e), {
    type: "OP",
    value: "((",
    start: t,
    end: e.b
  };
  if (value === ")" && i === ")") return n(e), n(e), {
    type: "OP",
    value: "))",
    start: t,
    end: e.b
  };
  if (value === "|" || value === "&" || value === ";" || value === ">" || value === "<") return n(e), {
    type: "OP",
    value: value,
    start: t,
    end: e.b
  };
  if (value === "(" || value === ")") return n(e), {
    type: "OP",
    value: value,
    start: t,
    end: e.b
  };
  if (o === "cmd") {
    if (value === "[") {
      let l = !1,
        c = u => {
          while (e.src[u] === "\\") if (e.src[u + 1] === `
`) u += 2, l = !0;else if (e.src[u + 1] === "\r" && e.src[u + 2] === `
`) u += 3, l = !0;else break;
          return u;
        },
        f = c(e.i + 1);
      if (e.src[f] === "[") {
        let u = c(f + 1);
        if (l && e.src[u] === "(") e.zshCondParenDiff = !0;
      }
    }
    if (value === "[" && i === "[" && (r === " " || r === "\t" || r === `
` || r === "" || r === "(")) {
      if (r === "(") e.zshCondParenDiff = !0;
      return n(e), n(e), {
        type: "OP",
        value: "[[",
        start: t,
        end: e.b
      };
    }
    if (value === "[") return n(e), {
      type: "OP",
      value: "[",
      start: t,
      end: e.b
    };
    if (value === "{" && (i === " " || i === "\t" || i === `
`)) return n(e), {
      type: "OP",
      value: "{",
      start: t,
      end: e.b
    };
    if (value === "}") return n(e), {
      type: "OP",
      value: "}",
      start: t,
      end: e.b
    };
    if (value === "!" && (i === " " || i === "\t")) return n(e), {
      type: "OP",
      value: "!",
      start: t,
      end: e.b
    };
  }
  if (value === '"') return n(e), {
    type: "DQUOTE",
    value: '"',
    start: t,
    end: e.b
  };
  if (value === "'") {
    let i_3 = e.i;
    n(e);
    while (e.i < e.len && e.src[e.i] !== "'") n(e);
    if (e.i < e.len) n(e);
    return {
      type: "SQUOTE",
      value: e.src.slice(i_3, e.i),
      start: t,
      end: e.b
    };
  }
  if (value === "$") {
    if (i === "(" && r === "(") return n(e), n(e), n(e), {
      type: "DOLLAR_DPAREN",
      value: "$((",
      start: t,
      end: e.b
    };
    if (i === "(") return n(e), n(e), {
      type: "DOLLAR_PAREN",
      value: "$(",
      start: t,
      end: e.b
    };
    if (i === "{") return n(e), n(e), {
      type: "DOLLAR_BRACE",
      value: "${",
      start: t,
      end: e.b
    };
    if (i === "'") {
      let i_4 = e.i;
      n(e), n(e);
      while (e.i < e.len && e.src[e.i] !== "'") {
        if (e.src[e.i] === "\\" && e.i + 1 < e.len) n(e);
        n(e);
      }
      if (e.i < e.len) n(e);
      return {
        type: "ANSI_C",
        value: e.src.slice(i_4, e.i),
        start: t,
        end: e.b
      };
    }
    return n(e), {
      type: "DOLLAR",
      value: "$",
      start: t,
      end: e.b
    };
  }
  if (value === "`") return n(e), {
    type: "BACKTICK",
    value: "`",
    start: t,
    end: e.b
  };
  if (E(value)) {
    let i_5 = e.i;
    while (i_5 < e.len && E(e.src[i_5])) i_5++;
    let c = i_5 < e.len ? e.src[i_5] : "";
    if (c === ">" || c === "<") {
      let i_6 = e.i;
      while (e.i < i_5) n(e);
      return {
        type: "WORD",
        value: e.src.slice(i_6, e.i),
        start: t,
        end: e.b
      };
    }
  }
  if (Ee(value) || value === "{" || value === "}") {
    let i_7 = e.i;
    while (e.i < e.len) {
      let c = e.src[e.i];
      if (c === "\\") {
        if (e.i + 1 >= e.len) break;
        if (e.src[e.i + 1] === `
`) {
          n(e), n(e);
          continue;
        }
        n(e), n(e);
        continue;
      }
      if (!Ie(c) && c !== "{" && c !== "}" && c !== "#") break;
      n(e);
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
  return n(e), {
    type: "WORD",
    value: value,
    start: t,
    end: e.b
  };
}
function parse(src_2, o) {
  let L_2 = Ne(src_2),
    srcBytes = Ce(src_2);
  if (srcBytes >= 67108864) return null;
  let i = {
    L: L_2,
    src: src_2,
    srcBytes: srcBytes,
    isAscii: srcBytes === src_2.length,
    nodeCount: 0,
    deadline: performance.now() + (o ?? 50),
    aborted: !1,
    inBacktick: 0,
    inDquote: 0,
    stopToken: null,
    zshBraceDiff: !1
  };
  try {
    let r = Me(i);
    if (i.aborted) return null;
    if (i.zshBraceDiff) return a(i, "ERROR", r.startIndex, r.endIndex, [r]);
    if (i.L.zshCondParenDiff) return a(i, "ERROR", r.startIndex, r.endIndex, [r]);
    return r;
  } catch {
    return null;
  }
}
function Ce(e) {
  let o = 0;
  for (let t = 0; t < e.length; t++) {
    let s = e.charCodeAt(t);
    if (s < 128) o++;else if (s < 2048) o += 2;else if (s >= 55296 && s <= 56319) o += 4, t++;else o += 3;
  }
  return o;
}
function Be(e) {
  if (e.nodeCount++, e.nodeCount > 50000) throw e.aborted = !0, Error("budget");
  if ((e.nodeCount & 127) === 0 && performance.now() > e.deadline) throw e.aborted = !0, Error("timeout");
}
function a(e, type, startIndex, endIndex, children) {
  return Be(e), {
    type: type,
    text: K(e, startIndex, endIndex),
    startIndex: startIndex,
    endIndex: endIndex,
    children: children
  };
}
function K(e, o, t) {
  if (e.isAscii) return e.src.slice(o, t);
  let L_3 = e.L;
  if (!L_3.byteTable) ye(L_3, 0);
  let byteTable = L_3.byteTable,
    r = 0,
    l = e.src.length;
  while (r < l) {
    let f = r + l >>> 1;
    if (byteTable[f] < o) r = f + 1;else l = f;
  }
  let c = r;
  r = c, l = e.src.length;
  while (r < l) {
    let f = r + l >>> 1;
    if (byteTable[f] < t) r = f + 1;else l = f;
  }
  return e.src.slice(c, r);
}
function y(e, o, t) {
  return a(e, o, t.start, t.end, []);
}
function Me(e) {
  let o = [];
  x(e.L);
  while (!0) {
    let i = T(e.L);
    if (g(e.L, "cmd").type === "NEWLINE") {
      x(e.L);
      continue;
    }
    v(e.L, i);
    break;
  }
  let b_2 = e.L.b;
  while (e.L.i < e.L.len) {
    let i = T(e.L),
      r = g(e.L, "cmd");
    if (r.type === "EOF") break;
    if (r.type === "NEWLINE") continue;
    if (r.type === "COMMENT") {
      o.push(y(e, "comment", r));
      continue;
    }
    v(e.L, i);
    let l = D(e, null);
    for (let c of l) o.push(c);
    if (l.length === 0) {
      let c = g(e.L, "cmd");
      if (c.type === "EOF") break;
      if (c.type === "OP" && c.value === ";;" && o.length > 0) continue;
      o.push(a(e, "ERROR", c.start, c.end, []));
    }
  }
  let s = o.length > 0 ? e.srcBytes : b_2;
  return a(e, "program", b_2, s, o);
}
function T(e) {
  return e.b * 67108864 + e.i;
}
function v(e, o) {
  let t = Math.floor(o / 67108864);
  e.i = o - t * 67108864, e.b = t;
}
function D(e, o) {
  let t = [];
  while (!0) {
    x(e.L);
    let s = T(e.L),
      i = g(e.L, "cmd");
    if (i.type === "EOF") {
      v(e.L, s);
      break;
    }
    if (i.type === "NEWLINE") {
      if (e.L.heredocs.length > 0) Le(e);
      continue;
    }
    if (i.type === "COMMENT") {
      t.push(y(e, "comment", i));
      continue;
    }
    if (o && i.type === "OP" && i.value === o) {
      v(e.L, s);
      break;
    }
    if (i.type === "OP" && (i.value === ")" || i.value === "}" || i.value === ";;" || i.value === ";&" || i.value === ";;&" || i.value === "))" || i.value === "]]" || i.value === "]")) {
      v(e.L, s);
      break;
    }
    if (i.type === "BACKTICK" && e.inBacktick > 0) {
      v(e.L, s);
      break;
    }
    if (i.type === "WORD" && (i.value === "then" || i.value === "elif" || i.value === "else" || i.value === "fi" || i.value === "do" || i.value === "done" || i.value === "esac")) {
      v(e.L, s);
      break;
    }
    v(e.L, s);
    let r = Te(e);
    if (!r) break;
    t.push(r), x(e.L);
    let l = T(e.L),
      c = g(e.L, "cmd");
    if (c.type === "OP" && (c.value === ";" || c.value === "&")) {
      let f = T(e.L),
        u = g(e.L, "cmd");
      if (v(e.L, f), t.push(y(e, c.value, c)), u.type === "EOF" || u.type === "OP" && (u.value === ")" || u.value === "}" || u.value === ";;" || u.value === ";&" || u.value === ";;&") || u.type === "WORD" && (u.value === "then" || u.value === "elif" || u.value === "else" || u.value === "fi" || u.value === "do" || u.value === "done" || u.value === "esac")) continue;
    } else if (c.type === "NEWLINE") {
      if (e.L.heredocs.length > 0) Le(e);
      continue;
    } else v(e.L, l);
  }
  return t;
}
function Te(e) {
  let o = fe(e);
  if (!o) return null;
  while (!0) {
    let t = T(e.L),
      s = g(e.L, "cmd");
    if (s.type === "OP" && (s.value === "&&" || s.value === "||")) {
      let i = y(e, s.value, s);
      z(e);
      let r = fe(e);
      if (!r) {
        o = a(e, "ERROR", o.startIndex, i.endIndex, [o, i]);
        break;
      }
      if (r.type === "redirected_statement" && r.children.length >= 2) {
        let l = r.children[0],
          c = r.children.slice(1),
          f = a(e, "list", o.startIndex, l.endIndex, [o, i, l]),
          u = c.at(-1);
        o = a(e, "redirected_statement", f.startIndex, u.endIndex, [f, ...c]);
      } else o = a(e, "list", o.startIndex, r.endIndex, [o, i, r]);
    } else {
      v(e.L, t);
      break;
    }
  }
  return o;
}
function z(e) {
  while (!0) {
    let o = T(e.L);
    if (g(e.L, "cmd").type !== "NEWLINE") {
      v(e.L, o);
      break;
    }
  }
}
function fe(e) {
  let o = F(e);
  if (!o) return null;
  let t = [o];
  while (!0) {
    let i = T(e.L),
      r = g(e.L, "cmd");
    if (r.type === "OP" && (r.value === "|" || r.value === "|&")) {
      let l = y(e, r.value, r);
      z(e);
      let c = F(e);
      if (!c) {
        t.push(l);
        break;
      }
      if (c.type === "redirected_statement" && c.children.length >= 2 && t.length >= 1) {
        let f = c.children[0],
          u = c.children.slice(1),
          d = [...t, l, f],
          b = a(e, "pipeline", d[0].startIndex, f.endIndex, d),
          p = u.at(-1),
          h = a(e, "redirected_statement", b.startIndex, p.endIndex, [b, ...u]);
        t.length = 0, t.push(h), o = h;
        continue;
      }
      t.push(l, c);
    } else {
      v(e.L, i);
      break;
    }
  }
  if (t.length === 1) return t[0];
  let s = t.at(-1);
  return a(e, "pipeline", t[0].startIndex, s.endIndex, t);
}
function F(e) {
  x(e.L);
  let o = T(e.L),
    t = g(e.L, "cmd");
  if (t.type === "EOF") return v(e.L, o), null;
  if (t.type === "OP" && t.value === "!") {
    let s = y(e, "!", t),
      i = F(e);
    if (!i) return a(e, "negated_command", s.startIndex, s.endIndex, [s]);
    if (i.type === "redirected_statement" && i.children.length >= 2) {
      let r = i.children[0],
        l = i.children.slice(1),
        c = a(e, "negated_command", s.startIndex, r.endIndex, [s, r]),
        f = l.at(-1);
      return a(e, "redirected_statement", c.startIndex, f.endIndex, [c, ...l]);
    }
    return a(e, "negated_command", s.startIndex, i.endIndex, [s, i]);
  }
  if (t.type === "OP" && t.value === "(") {
    let s = y(e, "(", t),
      i = D(e, ")"),
      r = g(e.L, "cmd"),
      l = r.type === "OP" && r.value === ")" ? y(e, ")", r) : a(e, ")", s.endIndex, s.endIndex, []),
      c = a(e, "subshell", s.startIndex, l.endIndex, [s, ...i, l]);
    return M(e, c);
  }
  if (t.type === "OP" && t.value === "((") {
    let s = y(e, "((", t),
      i = X(e, "))", "var"),
      r = g(e.L, "cmd"),
      l = r.value === "))" ? y(e, "))", r) : a(e, "))", s.endIndex, s.endIndex, []);
    return a(e, "compound_statement", s.startIndex, l.endIndex, [s, ...i, l]);
  }
  if (t.type === "OP" && t.value === "{") {
    let s = y(e, "{", t),
      i = D(e, "}"),
      r = g(e.L, "cmd"),
      l = r.type === "OP" && r.value === "}" ? y(e, "}", r) : a(e, "}", s.endIndex, s.endIndex, []),
      c = a(e, "compound_statement", s.startIndex, l.endIndex, [s, ...i, l]);
    return M(e, c);
  }
  if (t.type === "OP" && (t.value === "[" || t.value === "[[")) {
    let s = y(e, t.value, t),
      i = t.value === "[" ? "]" : "]]",
      r = T(e.L),
      l = pe(e, i);
    if (x(e.L), t.value === "[" && L(e.L) !== "]") {
      v(e.L, r);
      let stopToken = e.stopToken;
      e.stopToken = "]";
      let p = F(e);
      if (e.stopToken = stopToken, p && p.type === "redirected_statement") l = p;else v(e.L, r), l = pe(e, i);
      x(e.L);
    }
    let c = T(e.L),
      f = g(e.L, "arg"),
      u;
    if (f.value === i && oe(L(e.L))) u = y(e, i, f);else v(e.L, c), u = a(e, i, s.endIndex, s.endIndex, []);
    let d = l ? [s, l, u] : [s, u];
    return M(e, a(e, "test_command", s.startIndex, u.endIndex, d));
  }
  if (t.type === "WORD" && ge(L(e.L))) {
    if (t.value === "if") return M(e, Ze(e, t), !0);
    if (t.value === "while" || t.value === "until") return M(e, Ve(e, t), !0);
    if (t.value === "for") return M(e, be(e, t), !0);
    if (t.value === "select") return M(e, be(e, t), !0);
    if (t.value === "case") return M(e, Ge(e, t), !0);
    if (t.value === "function") return en(e, t);
    if (_e.has(t.value)) return M(e, nn(e, t));
    if (t.value === "unset" || t.value === "unsetenv") {
      let s = T(e.L);
      x(e.L);
      let i = !1;
      if (L(e.L) === "(") g(e.L, "cmd"), x(e.L), i = L(e.L) === ")";
      if (v(e.L, s), !i) return M(e, tn(e, t));
    }
  }
  return v(e.L, o), We(e);
}
function We(e) {
  let b_3 = e.L.b,
    t = [],
    s = [];
  while (!0) {
    x(e.L);
    let m = we(e);
    if (m) {
      t.push(m);
      continue;
    }
    let S = U(e);
    if (S) {
      s.push(S);
      continue;
    }
    break;
  }
  x(e.L);
  let i = T(e.L),
    r = g(e.L, "cmd");
  if (r.type === "EOF" || r.type === "NEWLINE" || r.type === "COMMENT" || r.type === "BACKTICK" || r.type === "OP" && r.value !== "{" && r.value !== "[" && r.value !== "[[" || r.type === "WORD" && S2n.has(r.value) && r.value !== "in") {
    if (v(e.L, i), t.length === 1 && s.length === 0) return t[0];
    if (s.length > 0 && t.length === 0) {
      let m = s.at(-1);
      return a(e, "redirected_statement", s[0].startIndex, m.endIndex, s);
    }
    if (t.length > 1 && s.length === 0) {
      let m = t.at(-1);
      return a(e, "variable_assignments", t[0].startIndex, m.endIndex, t);
    }
    if (t.length > 0 || s.length > 0) {
      let m = [...t, ...s],
        S = m.at(-1);
      return a(e, "command", b_3, S.endIndex, m);
    }
    return null;
  }
  v(e.L, i);
  let l = T(e.L),
    c = A(e, "cmd");
  if (c && c.type === "word") {
    x(e.L);
    let m = !1;
    if (L(e.L) === "(") {
      let S = T(e.L);
      g(e.L, "cmd"), x(e.L), m = L(e.L) === ")", v(e.L, S);
    }
    if (m) {
      let S = g(e.L, "cmd");
      x(e.L);
      let w = g(e.L, "cmd"),
        _ = y(e, "(", S),
        R = y(e, ")", w);
      x(e.L), z(e);
      let C = F(e);
      if (C) {
        let H = [C];
        if (C.type === "redirected_statement" && C.children.length >= 2 && C.children[0].type === "compound_statement") H = C.children;
        let ie = H.at(-1);
        return a(e, "function_definition", c.startIndex, ie.endIndex, [c, _, R, ...H]);
      }
    }
  }
  v(e.L, l);
  let f = A(e, "cmd");
  if (!f) {
    if (t.length === 1) return t[0];
    return null;
  }
  let u = a(e, "command_name", f.startIndex, f.endIndex, [f]),
    d = [],
    b = [],
    p = null;
  while (!0) {
    x(e.L);
    let m = U(e, !0);
    if (m) {
      if (m.type === "heredoc_redirect") p = m;else if (m.type === "herestring_redirect") d.push(m);else b.push(m);
      continue;
    }
    if (b.length > 0) break;
    if (e.stopToken === "]" && L(e.L) === "]") break;
    let S = T(e.L),
      w = g(e.L, "arg");
    if (w.type === "EOF" || w.type === "NEWLINE" || w.type === "COMMENT" || w.type === "OP" && (w.value === "|" || w.value === "|&" || w.value === "&&" || w.value === "||" || w.value === ";" || w.value === ";;" || w.value === ";&" || w.value === ";;&" || w.value === "&" || w.value === ")" || w.value === "}" || w.value === "))")) {
      v(e.L, S);
      break;
    }
    v(e.L, S);
    let _ = A(e, "arg");
    if (!_) {
      if (L(e.L) === "(") {
        let R = g(e.L, "cmd"),
          C = y(e, "(", R),
          H = D(e, ")"),
          ie = T(e.L),
          re = g(e.L, "cmd"),
          G;
        if (re.type === "OP" && re.value === ")") G = y(e, ")", re);else v(e.L, ie), G = a(e, ")", C.endIndex, C.endIndex, []);
        d.push(a(e, "subshell", C.startIndex, G.endIndex, [C, ...H, G]));
        continue;
      }
      break;
    }
    if (_.type === "word" && _.text === "=") {
      d.push(a(e, "ERROR", _.startIndex, _.endIndex, [_]));
      continue;
    }
    if ((_.type === "word" || _.type === "concatenation") && L(e.L) === "(" && e.L.b === _.endIndex) {
      d.push(a(e, "ERROR", _.startIndex, _.endIndex, [_]));
      continue;
    }
    d.push(_);
  }
  let h = [...t, ...s, u, ...d],
    N = h.length > 0 ? h.at(-1).endIndex : u.endIndex,
    startIndex_2 = h[0].startIndex,
    k = a(e, "command", startIndex_2, N, h);
  if (p) {
    Le(e);
    let m = e.L.heredocs.shift();
    if (m && p.children.length >= 2) {
      let _ = a(e, "heredoc_body", m.bodyStart, m.bodyEnd, m.quoted ? [] : Ke(e, m.bodyStart, m.bodyEnd)),
        R = a(e, "heredoc_end", m.endStart, m.endEnd, []);
      p.children.push(_, R), p.endIndex = m.endEnd, p.text = K(e, p.startIndex, m.endEnd);
    }
    let S = [...s, p, ...b],
      w = s.length > 0 ? Math.min(k.startIndex, s[0].startIndex) : k.startIndex;
    return a(e, "redirected_statement", w, p.endIndex, [k, ...S]);
  }
  if (b.length > 0) {
    let m = b.at(-1);
    return a(e, "redirected_statement", k.startIndex, m.endIndex, [k, ...b]);
  }
  return k;
}
function M(e, o, t = !1) {
  let s = [];
  while (!0) {
    x(e.L);
    let r = T(e.L),
      l = U(e);
    if (!l) break;
    if (l.type === "herestring_redirect" && !t) {
      v(e.L, r);
      break;
    }
    s.push(l);
  }
  if (s.length === 0) return o;
  let i = s.at(-1);
  return a(e, "redirected_statement", o.startIndex, i.endIndex, [o, ...s]);
}
function we(e) {
  let o = T(e.L);
  x(e.L);
  let b_4 = e.L.b;
  if (!O(L(e.L))) return v(e.L, o), null;
  while (B(L(e.L))) n(e.L);
  let b_5 = e.L.b,
    i = b_5;
  if (L(e.L) === "[") {
    n(e.L);
    let k = 1;
    while (e.L.i < e.L.len && k > 0) {
      let m = L(e.L);
      if (m === "[") k++;else if (m === "]") k--;
      n(e.L);
    }
    i = e.L.b;
  }
  let r = L(e.L),
    l = L(e.L, 1),
    c;
  if (r === "=" && l !== "=") c = "=";else if (r === "+" && l === "=") c = "+=";else return v(e.L, o), null;
  let f = a(e, "variable_name", b_4, b_5, []),
    u = f;
  if (i > b_5) {
    let k = a(e, "[", b_5, b_5 + 1, []),
      m = qe(e, b_5 + 1, i - 1),
      S = a(e, "]", i - 1, i, []);
    u = a(e, "subscript", b_4, i, [f, k, m, S]);
  }
  let b_6 = e.L.b;
  if (n(e.L), c === "+=") n(e.L);
  let b = e.L.b,
    p = a(e, c, b_6, b, []),
    h = null;
  if (L(e.L) === "(") {
    let k = g(e.L, "cmd"),
      m = y(e, "(", k),
      S = [m];
    while (!0) {
      if (x(e.L), L(e.L) === ")") break;
      let R = A(e, "arg");
      if (!R) break;
      S.push(R);
    }
    let w = g(e.L, "cmd"),
      _ = w.value === ")" ? y(e, ")", w) : a(e, ")", m.endIndex, m.endIndex, []);
    S.push(_), h = a(e, "array", m.startIndex, _.endIndex, S);
  } else {
    let k = L(e.L);
    if (k && k !== " " && k !== "\t" && k !== `
` && k !== ";" && k !== "&" && k !== "|" && k !== ")" && k !== "}") h = A(e, "arg");
  }
  let N = h ? [u, p, h] : [u, p],
    I = h ? h.endIndex : b;
  return a(e, "variable_assignment", b_4, I, N);
}
function ze(e) {
  x(e.L);
  let o = L(e.L);
  if ((o === "@" || o === "*") && L(e.L, 1) === "]") {
    let b_7 = e.L.b;
    return n(e.L), a(e, "word", b_7, e.L.b, []);
  }
  if (o === "(" && L(e.L, 1) === "(") {
    let b_8 = e.L.b;
    n(e.L), n(e.L);
    let s = a(e, "((", b_8, e.L.b, []),
      i = ee(e, "))", "var");
    x(e.L);
    let r;
    if (L(e.L) === ")" && L(e.L, 1) === ")") {
      let b_9 = e.L.b;
      n(e.L), n(e.L), r = a(e, "))", b_9, e.L.b, []);
    } else r = a(e, "))", e.L.b, e.L.b, []);
    let l = i ? [s, i, r] : [s, r];
    return a(e, "compound_statement", s.startIndex, r.endIndex, l);
  }
  return ee(e, "]", "word");
}
function qe(e, o, t) {
  let s = K(e, o, t);
  if (/^\d+$/.test(s)) return a(e, "number", o, t, []);
  if (/^\$([a-zA-Z_]\w*)$/.exec(s)) {
    let r = a(e, "$", o, o + 1, []),
      l = a(e, "variable_name", o + 1, t, []);
    return a(e, "simple_expansion", o, t, [r, l]);
  }
  if (s.length === 2 && s[0] === "$" && j.has(s[1])) {
    let r = a(e, "$", o, o + 1, []),
      l = a(e, "special_variable_name", o + 1, t, []);
    return a(e, "simple_expansion", o, t, [r, l]);
  }
  return a(e, "word", o, t, []);
}
function de(e) {
  let o = L(e.L);
  if (o === "" || o === `
`) return !1;
  if (o === "|" || o === "&" || o === ";" || o === "(" || o === ")") return !1;
  if (o === "<" || o === ">") return L(e.L, 1) === "(";
  if (E(o)) {
    let i_8 = e.L.i;
    while (i_8 < e.L.len && E(e.L.src[i_8])) i_8++;
    let s = i_8 < e.L.len ? e.L.src[i_8] : "";
    if (s === ">" || s === "<") return !1;
  }
  if (o === "}") return !1;
  if (e.stopToken === "]" && o === "]") return !1;
  return !0;
}
function U(e, o = !1) {
  let t = T(e.L);
  x(e.L);
  let s = null;
  if (E(L(e.L))) {
    let b_10 = e.L.b,
      i_9 = e.L.i;
    while (i_9 < e.L.len && E(e.L.src[i_9])) i_9++;
    let f = i_9 < e.L.len ? e.L.src[i_9] : "";
    if (f === ">" || f === "<") {
      while (e.L.i < i_9) n(e.L);
      s = a(e, "file_descriptor", b_10, e.L.b, []);
    }
  }
  if (s === null && L(e.L) === "{") {
    let l = e.L.i + 1;
    if (l < e.L.len && /[A-Za-z_]/.test(e.L.src[l])) {
      while (l < e.L.len && /[A-Za-z0-9_]/.test(e.L.src[l])) l++;
      if (e.L.src[l] === "[") {
        let c = 0,
          f = !1,
          u = !1;
        while (l < e.L.len) {
          let d = e.L.src[l];
          if (f) {
            if (d === "'") f = !1;
          } else if (u) {
            if (d === "\\" && l + 1 < e.L.len) l++;else if (d === '"') u = !1;
          } else if (d === "\\" && l + 1 < e.L.len) l++;else if (d === "'") f = !0;else if (d === '"') u = !0;else if (d === "[") c++;else if (d === "]") {
            if (c--, c === 0) {
              l++;
              break;
            }
          } else if (d === "\\" && e.L.src[l + 1] === `
`) {
            l += 2;
            continue;
          } else if (d === `
`) break;
          l++;
        }
      }
      if (e.L.src[l] === "}") {
        let c = l + 1 < e.L.len ? e.L.src[l + 1] : "";
        if (c === ">" || c === "<") {
          let b_11 = e.L.b;
          while (e.L.i <= l) n(e.L);
          s = a(e, "variable_name", b_11, e.L.b, []);
        }
      }
    }
  }
  let i = g(e.L, "arg");
  if (i.type !== "OP") return v(e.L, t), null;
  let r = i.value;
  if (r === "<<<") {
    let l = y(e, "<<<", i);
    x(e.L);
    let c = A(e, "arg"),
      f = c ? c.endIndex : l.endIndex,
      u = c ? [l, c] : [l];
    return a(e, "herestring_redirect", s ? s.startIndex : l.startIndex, f, s ? [s, ...u] : u);
  }
  if (r === "<<" || r === "<<-") {
    let l = y(e, r, i);
    Ae(e.L);
    let b_12 = e.L.b,
      quoted = !1,
      delim = "",
      d = L(e.L);
    if (d === "'" || d === '"') {
      quoted = !0, n(e.L);
      while (e.L.i < e.L.len && L(e.L) !== d) delim += L(e.L), n(e.L);
      if (e.L.i < e.L.len) n(e.L);
    } else if (d === "\\") {
      if (quoted = !0, n(e.L), e.L.i < e.L.len && L(e.L) !== `
`) delim += L(e.L), n(e.L);
      while (e.L.i < e.L.len && B(L(e.L))) delim += L(e.L), n(e.L);
    } else while (e.L.i < e.L.len && De(L(e.L))) delim += L(e.L), n(e.L);
    let b = e.L.b;
    if (d === '"' && /[`$\\\n]/.test(delim)) throw e.aborted = !0, Error("heredoc delimiter contains substitution/escape chars");
    if (e.L.i < e.L.len) {
      let I = L(e.L);
      if (I !== " " && I !== "\t" && I !== `
` && I !== "<" && I !== ">" && I !== "|" && I !== "&" && I !== ";" && I !== "(" && I !== ")") throw e.aborted = !0, Error("heredoc delimiter word continues past scanned segment");
    }
    if (/[\uD800-\uDFFF]/.test(delim)) throw e.aborted = !0, Error("heredoc delimiter contains astral/surrogate code unit");
    let p = a(e, "heredoc_start", b_12, b, []);
    e.L.heredocs.push({
      delim: delim,
      stripTabs: r === "<<-",
      quoted: quoted,
      bodyStart: 0,
      bodyEnd: 0,
      endStart: 0,
      endEnd: 0
    });
    let h = s ? [s, l, p] : [l, p],
      N = s ? s.startIndex : l.startIndex;
    while (!0) {
      x(e.L);
      let I = L(e.L);
      if (I === `
` || I === "" || e.L.i >= e.L.len) break;
      if (I === ">" || I === "<" || E(I)) {
        let S = T(e.L),
          w = U(e);
        if (w && w.type === "file_redirect") {
          h.push(w);
          continue;
        }
        v(e.L, S);
      }
      if (I === "|" && L(e.L, 1) !== "|") {
        let b_13 = e.L.b;
        n(e.L), x(e.L);
        let w = [];
        while (!0) {
          let _ = F(e);
          if (!_) break;
          if (w.push(_), x(e.L), L(e.L) === "|" && L(e.L, 1) !== "|") {
            let b_14 = e.L.b;
            n(e.L), w.push(a(e, "|", b_14, e.L.b, [])), x(e.L);
            continue;
          }
          break;
        }
        if (w.length > 0) {
          let _ = w.at(-1);
          h.push(a(e, "pipeline", w[0].startIndex, _.endIndex, w));
        } else h.push(a(e, "ERROR", b_13, e.L.b, []));
        continue;
      }
      if (I === "&" && L(e.L, 1) === "&" || I === "|" && L(e.L, 1) === "|") {
        let b_15 = e.L.b;
        n(e.L), n(e.L), x(e.L);
        let w = F(e);
        if (w) h.push(w);else h.push(a(e, "ERROR", b_15, e.L.b, []));
        continue;
      }
      if (I === "&" || I === ";" || I === "(" || I === ")") {
        let b_16 = e.L.b;
        while (e.L.i < e.L.len && L(e.L) !== `
`) n(e.L);
        h.push(a(e, "ERROR", b_16, e.L.b, []));
        break;
      }
      let k = A(e, "arg");
      if (k) {
        h.push(k);
        continue;
      }
      let b_17 = e.L.b;
      while (e.L.i < e.L.len && L(e.L) !== `
`) n(e.L);
      if (e.L.b > b_17) h.push(a(e, "ERROR", b_17, e.L.b, []));
      break;
    }
    return a(e, "heredoc_redirect", N, e.L.b, h);
  }
  if (r === "<&-" || r === ">&-") {
    let l = y(e, r, i),
      c = [];
    if (s) c.push(s);
    c.push(l), x(e.L);
    let f = T(e.L),
      u = de(e) ? A(e, "arg") : null;
    if (u) c.push(u);else v(e.L, f);
    let d = s ? s.startIndex : l.startIndex,
      b = u ? u.endIndex : l.endIndex;
    return a(e, "file_redirect", d, b, c);
  }
  if (r === ">" || r === ">>" || r === ">&" || r === ">|" || r === "&>" || r === "&>>" || r === "<" || r === "<&") {
    let l = y(e, r, i),
      c = [];
    if (s) c.push(s);
    c.push(l);
    let endIndex_2 = l.endIndex,
      u = 0;
    while (!0) {
      if (x(e.L), !de(e)) break;
      if (!o && u >= 1) break;
      let b = L(e.L),
        p = L(e.L, 1),
        h = null;
      if ((b === "<" || b === ">") && p === "(") h = ne(e);else h = A(e, "arg");
      if (!h) break;
      c.push(h), endIndex_2 = h.endIndex, u++;
    }
    let d = s ? s.startIndex : l.startIndex;
    return a(e, "file_redirect", d, endIndex_2, c);
  }
  return v(e.L, t), null;
}
function ne(e) {
  let o = L(e.L);
  if (o !== "<" && o !== ">" || L(e.L, 1) !== "(") return null;
  let b_18 = e.L.b;
  n(e.L), n(e.L);
  let s = a(e, o + "(", b_18, e.L.b, []),
    i = D(e, ")");
  x(e.L);
  let r;
  if (L(e.L) === ")") {
    let b_19 = e.L.b;
    n(e.L), r = a(e, ")", b_19, e.L.b, []);
  } else r = a(e, ")", e.L.b, e.L.b, []);
  return a(e, "process_substitution", b_18, r.endIndex, [s, ...i, r]);
}
function Le(e) {
  while (e.L.i < e.L.len && e.L.src[e.L.i] !== `
`) n(e.L);
  if (e.L.i < e.L.len) n(e.L);
  for (let o of e.L.heredocs) {
    o.bodyStart = e.L.b;
    let t = o.delim.length;
    if (o.stripTabs && o.delim.startsWith("\t")) throw e.aborted = !0, Error("ambiguous heredoc terminator (<<- tab-prefixed delim)");
    while (e.L.i < e.L.len) {
      let i_10 = e.L.i,
        b_20 = e.L.b,
        r = i_10;
      if (o.stripTabs) while (r < e.L.len && e.L.src[r] === "\t") r++;
      if (e.L.src.startsWith(o.delim, r)) {
        let l = r + t,
          c = l < e.L.len ? e.L.src[l] : "";
        if (c === "" || c === `
` || c === "\r") {
          o.bodyEnd = b_20;
          while (e.L.i < r) n(e.L);
          o.endStart = e.L.b;
          for (let u = 0; u < t; u++) n(e.L);
          if (o.endEnd = e.L.b, e.L.i < e.L.len && e.L.src[e.L.i] === `
`) n(e.L);
          return;
        }
        let f = l;
        while (f < e.L.len) {
          let u = e.L.src[f];
          if (u === `
`) break;
          if (u === ")" || u === "`" || u === "}") throw e.aborted = !0, Error("ambiguous heredoc terminator (shell_eof_token)");
          f++;
        }
      }
      while (e.L.i < e.L.len && e.L.src[e.L.i] !== `
`) n(e.L);
      if (e.L.i < e.L.len) n(e.L);
    }
    o.bodyEnd = e.L.b, o.endStart = e.L.b, o.endEnd = e.L.b;
  }
}
function Ke(e, o, t) {
  let s = T(e.L);
  Fe(e, o);
  let i = [],
    b_21 = e.L.b,
    l = !1;
  while (e.L.b < t) {
    let c = L(e.L);
    if (c === "\\") {
      let f = L(e.L, 1);
      if (f === "$" || f === "`" || f === "\\") {
        n(e.L), n(e.L);
        continue;
      }
      n(e.L);
      continue;
    }
    if (c === "$" || c === "`") {
      if (c === "$" && L(e.L, 1) === "'") {
        n(e.L);
        continue;
      }
      let b_22 = e.L.b,
        u = q(e);
      if (u && (u.type === "simple_expansion" || u.type === "expansion" || u.type === "command_substitution" || u.type === "arithmetic_expansion")) {
        if (l && b_22 > b_21) i.push(a(e, "heredoc_content", b_21, b_22, []));
        i.push(u), b_21 = e.L.b, l = !0;
      }
      continue;
    }
    n(e.L);
  }
  if (l) i.push(a(e, "heredoc_content", b_21, t, []));
  return v(e.L, s), i;
}
function Fe(e, o) {
  if (!e.L.byteTable) ye(e.L, 0);
  let byteTable_2 = e.L.byteTable,
    s = 0,
    i = e.src.length;
  while (s < i) {
    let r = s + i >>> 1;
    if (byteTable_2[r] < o) s = r + 1;else i = r;
  }
  e.L.i = s, e.L.b = o;
}
function A(e, o) {
  x(e.L);
  let t = [];
  while (e.L.i < e.L.len) {
    let r = L(e.L);
    if (r === " " || r === "\t" || r === `
` || r === "\r" || r === "" || r === "|" || r === "&" || r === ";" || r === "(" || r === ")") break;
    if (r === "<" || r === ">") {
      if (L(e.L, 1) === "(") {
        let c = ne(e);
        if (c) t.push(c);
        continue;
      }
      break;
    }
    if (r === '"') {
      t.push(W(e));
      continue;
    }
    if (r === "'") {
      let c = g(e.L, "arg");
      t.push(y(e, "raw_string", c));
      continue;
    }
    if (r === "$") {
      let c = L(e.L, 1);
      if (c === "'") {
        let u = g(e.L, "arg");
        t.push(y(e, "ansi_c_string", u));
        continue;
      }
      if (c === '"') {
        let u = {
          type: "DOLLAR",
          value: "$",
          start: e.L.b,
          end: e.L.b + 1
        };
        n(e.L), t.push(y(e, "$", u)), t.push(W(e));
        continue;
      }
      if (c === "`") {
        let u = {
          type: "DOLLAR",
          value: "$",
          start: e.L.b,
          end: e.L.b + 1
        };
        n(e.L), t.push(y(e, "$", u));
        continue;
      }
      let f = q(e);
      if (f) t.push(f);
      continue;
    }
    if (r === "`") {
      if (e.inBacktick > 0) break;
      let c = te(e);
      t.push(c);
      continue;
    }
    if (r === "{") {
      let c = je(e);
      if (c) {
        t.push(c);
        continue;
      }
      let f = L(e.L, 1);
      if (f === ";" || f === "|" || f === "&" || f === `
` || f === "" || f === ")" || f === " " || f === "\t") {
        let b_23 = e.L.b;
        n(e.L), t.push(a(e, "word", b_23, e.L.b, []));
        continue;
      }
      let u = He(e);
      if (u) {
        for (let d of u) t.push(d);
        continue;
      }
    }
    if (r === "}") {
      let b_24 = e.L.b;
      n(e.L), t.push(a(e, "word", b_24, e.L.b, []));
      continue;
    }
    if (r === "[" || r === "]") {
      let b_25 = e.L.b;
      n(e.L), t.push(a(e, "word", b_25, e.L.b, []));
      continue;
    }
    let l = Ue(e);
    if (!l) break;
    if (l.type === "word" && /^-?(0x)?[0-9]+#$/.test(l.text) && L(e.L) === "$" && (L(e.L, 1) === "{" || L(e.L, 1) === "(")) {
      let c = q(e);
      if (c) {
        t.push(a(e, "number", l.startIndex, c.endIndex, [c]));
        continue;
      }
    }
    t.push(l);
  }
  if (t.length === 0) return null;
  if (t.length === 1) return t[0];
  let s = t[0],
    i = t.at(-1);
  return a(e, "concatenation", s.startIndex, i.endIndex, t);
}
function Ue(e) {
  let b_26 = e.L.b,
    i_11 = e.L.i;
  while (e.L.i < e.L.len) {
    let r = L(e.L);
    if (r === "\\") {
      if (e.L.i + 1 >= e.L.len) break;
      if (e.L.src[e.L.i + 1] === `
`) break;
      n(e.L), n(e.L);
      continue;
    }
    if (r === " " || r === "\t" || r === `
` || r === "\r" || r === "" || r === "|" || r === "&" || r === ";" || r === "(" || r === ")" || r === "<" || r === ">" || r === '"' || r === "'" || r === "$" || r === "`" || r === "{" || r === "}" || r === "[" || r === "]") break;
    n(e.L);
  }
  if (e.L.b === b_26) return null;
  let s = e.src.slice(i_11, e.L.i),
    i = /^-?\d+$/.test(s) ? "number" : "word";
  return a(e, i, b_26, e.L.b, []);
}
function je(e) {
  let o = T(e.L);
  if (L(e.L) !== "{") return null;
  let b_27 = e.L.b;
  n(e.L);
  let b_28 = e.L.b,
    b_29 = e.L.b;
  while (E(L(e.L)) || O(L(e.L))) n(e.L);
  let b_30 = e.L.b;
  if (b_30 === b_29 || L(e.L) !== "." || L(e.L, 1) !== ".") return v(e.L, o), null;
  let b_31 = e.L.b;
  n(e.L), n(e.L);
  let b_32 = e.L.b,
    b_33 = e.L.b;
  while (E(L(e.L)) || O(L(e.L))) n(e.L);
  let b_34 = e.L.b;
  if (b_34 === b_33 || L(e.L) !== "}") return v(e.L, o), null;
  let b_35 = e.L.b;
  n(e.L);
  let b = e.L.b,
    p = K(e, b_29, b_30),
    h = K(e, b_33, b_34),
    N = /^\d+$/.test(p),
    I = /^\d+$/.test(h);
  if (N !== I) return v(e.L, o), null;
  if (!N && (p.length !== 1 || h.length !== 1)) return v(e.L, o), null;
  let k = N ? "number" : "word",
    m = I ? "number" : "word";
  return a(e, "brace_expression", b_27, b, [a(e, "{", b_27, b_28, []), a(e, k, b_29, b_30, []), a(e, "..", b_31, b_32, []), a(e, m, b_33, b_34, []), a(e, "}", b_35, b, [])]);
}
function He(e) {
  if (L(e.L) !== "{") return null;
  let b_36 = e.L.b;
  n(e.L);
  let b_37 = e.L.b,
    s = [a(e, "word", b_36, b_37, [])];
  while (e.L.i < e.L.len) {
    let i = L(e.L);
    if (i === "}" || i === `
` || i === ";" || i === "|" || i === "&" || i === " " || i === "\t" || i === "<" || i === ">" || i === "(" || i === ")") break;
    if (i === "[" || i === "]") {
      let b_38 = e.L.b;
      n(e.L), s.push(a(e, "word", b_38, e.L.b, []));
      continue;
    }
    let b_39 = e.L.b;
    while (e.L.i < e.L.len) {
      let c = L(e.L);
      if (c === "\\" && e.L.i + 1 < e.L.len) {
        n(e.L), n(e.L);
        continue;
      }
      if (c === "}" || c === `
` || c === ";" || c === "|" || c === "&" || c === " " || c === "\t" || c === "<" || c === ">" || c === "(" || c === ")" || c === "[" || c === "]") break;
      n(e.L);
    }
    let b_40 = e.L.b;
    if (b_40 > b_39) {
      let c = K(e, b_39, b_40),
        f = /^-?\d+$/.test(c) ? "number" : "word";
      s.push(a(e, f, b_39, b_40, []));
    } else break;
  }
  if (L(e.L) === "}") {
    let b_41 = e.L.b;
    n(e.L), s.push(a(e, "word", b_41, e.L.b, []));
  }
  return s;
}
function W(e) {
  let b_42 = e.L.b;
  n(e.L), e.inDquote++;
  let b_43 = e.L.b,
    i = [a(e, '"', b_42, b_43, [])],
    b_44 = e.L.b,
    i_12 = e.L.i,
    c = () => {
      if (e.L.b > b_44) {
        let u = e.src.slice(i_12, e.L.i);
        if (!/^[ \t]+$/.test(u)) i.push(a(e, "string_content", b_44, e.L.b, []));
      }
    };
  while (e.L.i < e.L.len) {
    let u = L(e.L);
    if (u === '"') break;
    if (u === "\\" && e.L.i + 1 < e.L.len) {
      n(e.L), n(e.L);
      continue;
    }
    if (u === `
`) {
      c(), n(e.L), b_44 = e.L.b, i_12 = e.L.i;
      continue;
    }
    if (u === "$") {
      let d = L(e.L, 1);
      if (d === "(" || d === "{" || O(d) || j.has(d) || E(d)) {
        c();
        let b = q(e);
        if (b) i.push(b);
        b_44 = e.L.b, i_12 = e.L.i;
        continue;
      }
      if (d !== '"' && d !== "") {
        c();
        let b = e.L.b;
        n(e.L), i.push(a(e, "$", b, e.L.b, [])), b_44 = e.L.b, i_12 = e.L.i;
        continue;
      }
    }
    if (u === "`") {
      c();
      let d = te(e);
      i.push(d), b_44 = e.L.b, i_12 = e.L.i;
      continue;
    }
    n(e.L);
  }
  c();
  let f;
  if (L(e.L) === '"') {
    let b_45 = e.L.b;
    n(e.L), f = a(e, '"', b_45, e.L.b, []);
  } else f = a(e, '"', e.L.b, e.L.b, []);
  return i.push(f), e.inDquote--, a(e, "string", b_42, f.endIndex, i);
}
function q(e) {
  let o = L(e.L, 1),
    b_46 = e.L.b;
  if (o === "(" && L(e.L, 2) === "(") {
    n(e.L), n(e.L), n(e.L);
    let l = a(e, "$((", b_46, e.L.b, []),
      c = T(e.L),
      f = X(e, "))", "var");
    x(e.L);
    let u,
      d = !1;
    if (L(e.L) !== ")" || L(e.L, 1) !== ")") me(e, c, "))"), d = !0;
    if (L(e.L) === ")" && L(e.L, 1) === ")") {
      let b = e.L.b;
      n(e.L), n(e.L), u = a(e, "))", b, e.L.b, []);
    } else u = a(e, "))", e.L.b, e.L.b, []);
    return a(e, d ? "ERROR" : "arithmetic_expansion", b_46, u.endIndex, [l, ...f, u]);
  }
  if (o === "[") {
    n(e.L), n(e.L);
    let l = a(e, "$[", b_46, e.L.b, []),
      c = T(e.L),
      f = X(e, "]", "var");
    x(e.L);
    let u,
      d = !1;
    if (L(e.L) !== "]") me(e, c, "]"), d = !0;
    if (L(e.L) === "]") {
      let b = e.L.b;
      n(e.L), u = a(e, "]", b, e.L.b, []);
    } else u = a(e, "]", e.L.b, e.L.b, []);
    return a(e, d ? "ERROR" : "arithmetic_expansion", b_46, u.endIndex, [l, ...f, u]);
  }
  if (o === "(") {
    n(e.L), n(e.L);
    let l = a(e, "$(", b_46, e.L.b, []),
      inDquote = e.inDquote;
    e.inDquote = 0;
    let f = D(e, ")");
    e.inDquote = inDquote, x(e.L);
    let u,
      d = !1;
    if (L(e.L) === ")") {
      let b = e.L.b;
      n(e.L), u = a(e, ")", b, e.L.b, []);
    } else {
      d = !0;
      let b = e.L.b,
        p = 1;
      while (e.L.i < e.L.len) {
        let h = L(e.L);
        if (h === "\\" && e.L.i + 1 < e.L.len) {
          n(e.L), n(e.L);
          continue;
        }
        if (h === '"' || h === "'") {
          n(e.L);
          while (e.L.i < e.L.len && L(e.L) !== h) {
            if (h === '"' && L(e.L) === "\\" && e.L.i + 1 < e.L.len) n(e.L);
            n(e.L);
          }
          if (e.L.i < e.L.len) n(e.L);
          continue;
        }
        if (h === "`") {
          n(e.L);
          while (e.L.i < e.L.len && L(e.L) !== "`") {
            if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) n(e.L);
            n(e.L);
          }
          if (e.L.i < e.L.len) n(e.L);
          continue;
        }
        if (h === "$" && L(e.L, 1) === "$") {
          n(e.L), n(e.L);
          continue;
        }
        if (h === "$" && L(e.L, 1) === "'") {
          n(e.L), n(e.L);
          while (e.L.i < e.L.len && L(e.L) !== "'") {
            if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) n(e.L);
            n(e.L);
          }
          if (e.L.i < e.L.len) n(e.L);
          continue;
        }
        if (h === "(") p++;else if (h === ")") {
          if (p--, p === 0) break;
        }
        n(e.L);
      }
      if (f.push(a(e, "ERROR", b, e.L.b, [])), L(e.L) === ")") {
        let b_47 = e.L.b;
        n(e.L), u = a(e, ")", b_47, e.L.b, []);
      } else u = a(e, "ERROR", e.L.b, e.L.b, []);
    }
    if (!d && f.length === 1 && f[0].type === "redirected_statement" && f[0].children.length === 1 && f[0].children[0].type === "file_redirect") f = f[0].children;
    return a(e, d ? "ERROR" : "command_substitution", b_46, u.endIndex, [l, ...f, u]);
  }
  if (o === "{") {
    n(e.L), n(e.L);
    let l = a(e, "${", b_46, e.L.b, []),
      c = Qe(e),
      f,
      u = !1;
    while (L(e.L) === `
`) n(e.L);
    if (L(e.L) === "}") {
      let b_48 = e.L.b;
      n(e.L), f = a(e, "}", b_48, e.L.b, []);
    } else {
      u = !0;
      let b_49 = e.L.b,
        b = 1;
      while (e.L.i < e.L.len) {
        let h = L(e.L);
        if (h === "\\" && e.L.i + 1 < e.L.len) {
          n(e.L), n(e.L);
          continue;
        }
        if (h === '"' || h === "'") {
          n(e.L);
          while (e.L.i < e.L.len && L(e.L) !== h) {
            if (h === '"' && L(e.L) === "\\" && e.L.i + 1 < e.L.len) n(e.L);
            n(e.L);
          }
          if (e.L.i < e.L.len) n(e.L);
          continue;
        }
        if (h === "$" && L(e.L, 1) === "(") {
          let N = 1;
          n(e.L), n(e.L);
          while (e.L.i < e.L.len && N > 0) {
            let I = L(e.L);
            if (I === "\\" && e.L.i + 1 < e.L.len) n(e.L);else if (I === "$" && L(e.L, 1) === "$") n(e.L);else if (I === "$" && L(e.L, 1) === "'") {
              n(e.L), n(e.L);
              while (e.L.i < e.L.len && L(e.L) !== "'") {
                if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) n(e.L);
                n(e.L);
              }
            } else if (I === '"' || I === "'") {
              n(e.L);
              while (e.L.i < e.L.len && L(e.L) !== I) {
                if (I === '"' && L(e.L) === "\\" && e.L.i + 1 < e.L.len) n(e.L);
                n(e.L);
              }
            } else if (I === "`") {
              n(e.L);
              while (e.L.i < e.L.len && L(e.L) !== "`") {
                if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) n(e.L);
                n(e.L);
              }
            } else if (I === "(") N++;else if (I === ")") N--;
            n(e.L);
          }
          continue;
        }
        if (h === "`") {
          n(e.L);
          while (e.L.i < e.L.len && L(e.L) !== "`") {
            if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) n(e.L);
            n(e.L);
          }
          if (e.L.i < e.L.len) n(e.L);
          continue;
        }
        if (h === "$" && L(e.L, 1) === "$") {
          n(e.L), n(e.L);
          continue;
        }
        if (h === "$" && L(e.L, 1) === "'") {
          n(e.L), n(e.L);
          while (e.L.i < e.L.len && L(e.L) !== "'") {
            if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) n(e.L);
            n(e.L);
          }
          if (e.L.i < e.L.len) n(e.L);
          continue;
        }
        if (h === "$" && L(e.L, 1) === "{") b++, n(e.L);else if (h === "}") {
          if (b--, b === 0) break;
        }
        n(e.L);
      }
      let p = a(e, "ERROR", b_49, e.L.b, []);
      if (L(e.L) === "}") {
        let b_50 = e.L.b;
        n(e.L), f = a(e, "}", b_50, e.L.b, []);
      } else f = a(e, "ERROR", e.L.b, e.L.b, []);
      c.push(p);
    }
    if (!u && e.inDquote > 0 && K(e, l.endIndex, f.startIndex).includes("'")) u = !0;
    return a(e, u || e.zshBraceDiff ? "ERROR" : "expansion", b_46, f.endIndex, [l, ...c, f]);
  }
  n(e.L);
  let b_51 = e.L.b,
    i = a(e, "$", b_46, b_51, []),
    r = L(e.L);
  if (r === "_" && !B(L(e.L, 1))) {
    let b_52 = e.L.b;
    n(e.L);
    let c = a(e, "special_variable_name", b_52, e.L.b, []);
    return a(e, "simple_expansion", b_46, e.L.b, [i, c]);
  }
  if (O(r)) {
    let b_53 = e.L.b;
    while (B(L(e.L))) n(e.L);
    let c = a(e, "variable_name", b_53, e.L.b, []);
    return a(e, "simple_expansion", b_46, e.L.b, [i, c]);
  }
  if (E(r)) {
    let b_54 = e.L.b;
    n(e.L);
    let c = a(e, "variable_name", b_54, e.L.b, []);
    return a(e, "simple_expansion", b_46, e.L.b, [i, c]);
  }
  if (j.has(r)) {
    let b_55 = e.L.b;
    n(e.L);
    let c = a(e, "special_variable_name", b_55, e.L.b, []);
    return a(e, "simple_expansion", b_46, e.L.b, [i, c]);
  }
  if (r === "'") {
    n(e.L);
    while (e.L.i < e.L.len && L(e.L) !== "'") {
      if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) n(e.L);
      n(e.L);
    }
    if (L(e.L) === "'") n(e.L);
    return a(e, "ansi_c_string", b_46, e.L.b, []);
  }
  return i;
}
function Qe(e) {
  let o = [];
  x(e.L);
  {
    let r = L(e.L),
      l = L(e.L, 1);
    if (r === "#" && l === "!" && L(e.L, 2) === "}") return n(e.L), n(e.L), o;
    if (r === "!" && l === "#") {
      let c = 2;
      if (L(e.L, c) === "#") c++;
      if (L(e.L, c) === " ") c++;
      if (L(e.L, c) === "}") {
        while (c-- > 0) n(e.L);
        return o;
      }
    }
  }
  if (L(e.L) === "#") {
    let b_56 = e.L.b;
    n(e.L), o.push(a(e, "#", b_56, e.L.b, []));
  }
  let t = L(e.L);
  if ((t === "!" || t === "=" || t === "~") && (O(L(e.L, 1)) || E(L(e.L, 1)))) {
    let b_57 = e.L.b;
    n(e.L), o.push(a(e, t, b_57, e.L.b, []));
  }
  if (x(e.L), O(L(e.L))) {
    let b_58 = e.L.b;
    while (B(L(e.L))) n(e.L);
    o.push(a(e, "variable_name", b_58, e.L.b, []));
  } else if (E(L(e.L))) {
    let b_59 = e.L.b;
    while (E(L(e.L))) n(e.L);
    o.push(a(e, "variable_name", b_59, e.L.b, []));
  } else if (j.has(L(e.L))) {
    let b_60 = e.L.b;
    n(e.L), o.push(a(e, "special_variable_name", b_60, e.L.b, []));
  }
  if (L(e.L) === "[") {
    let r = o.at(-1),
      b_61 = e.L.b;
    n(e.L);
    let c = a(e, "[", b_61, e.L.b, []),
      f = ze(e);
    x(e.L);
    let b_62 = e.L.b;
    if (L(e.L) === "]") n(e.L);
    let d = a(e, "]", b_62, e.L.b, []);
    if (r) {
      let b = f ? [r, c, f, d] : [r, c, d];
      o[o.length - 1] = a(e, "subscript", r.startIndex, e.L.b, b);
    }
  }
  x(e.L);
  let s = L(e.L);
  if ((s === "*" || s === "@") && L(e.L, 1) === "}") {
    let b_63 = e.L.b;
    return n(e.L), o.push(a(e, s, b_63, e.L.b, [])), o;
  }
  if (s === "@" && O(L(e.L, 1))) {
    let b_64 = e.L.b;
    n(e.L), o.push(a(e, "@", b_64, e.L.b, []));
    while (B(L(e.L))) n(e.L);
    return o;
  }
  let i = L(e.L);
  if (i === ":") {
    let r = L(e.L, 1);
    if (r === "}") return n(e.L), o;
    if (r !== "-" && r !== "=" && r !== "?" && r !== "+") {
      n(e.L), x(e.L);
      let l = L(e.L),
        c;
      if (l === "-" && E(L(e.L, 1))) {
        let b_65 = e.L.b;
        n(e.L);
        while (E(L(e.L))) n(e.L);
        c = a(e, "number", b_65, e.L.b, []);
      } else c = ee(e, ":}", "var");
      if (c) o.push(c);
      if (x(e.L), L(e.L) === ":") {
        n(e.L), x(e.L);
        let f = L(e.L),
          u;
        if (f === "-" && E(L(e.L, 1))) {
          let b_66 = e.L.b;
          n(e.L);
          while (E(L(e.L))) n(e.L);
          u = a(e, "number", b_66, e.L.b, []);
        } else u = ee(e, "}", "var");
        if (u) o.push(u);
      }
      return o;
    }
  }
  if (i === ":" || i === "#" || i === "%" || i === "/" || i === "^" || i === "," || i === "-" || i === "=" || i === "?" || i === "+") {
    let b_67 = e.L.b,
      l = L(e.L, 1),
      c = i;
    if (i === ":" && (l === "-" || l === "=" || l === "?" || l === "+")) n(e.L), n(e.L), c = i + l;else if ((i === "#" || i === "%" || i === "/" || i === "^" || i === ",") && l === i) n(e.L), n(e.L), c = i + i;else n(e.L);
    o.push(a(e, c, b_67, e.L.b, []));
    let f = c === "#" || c === "##" || c === "%" || c === "%%" || c === "/" || c === "//" || c === "^" || c === "^^" || c === "," || c === ",,";
    if (c === "/" || c === "//") {
      let u = L(e.L);
      if (u === "#" || u === "%") {
        let b_68 = e.L.b;
        n(e.L), o.push(a(e, u, b_68, e.L.b, []));
      }
      if (L(e.L) === '"') {
        o.push(W(e));
        let d = Y(e, "regex", !0);
        if (d) o.push(d);
      } else {
        let d = Y(e, "regex", !0);
        if (d) o.push(d);
      }
      if (L(e.L) === "/") {
        let b_69 = e.L.b;
        n(e.L), o.push(a(e, "/", b_69, e.L.b, []));
        let b = Y(e, "replword", !1);
        if (b) if (b.type === "concatenation" && b.children.length === 2 && b.children[0].type === "command_substitution") o.push(b.children[0]), o.push(b.children[1]);else o.push(b);
      }
    } else if (c === "#" || c === "##" || c === "%" || c === "%%") for (let u of Xe(e)) o.push(u);else {
      let u = Y(e, f ? "regex" : "word", !1);
      if (u) o.push(u);
    }
  }
  return o;
}
function Y(e, o, t) {
  let b_70 = e.L.b;
  if (o === "word" && L(e.L) === "(") {
    n(e.L);
    let u = [a(e, "(", b_70, e.L.b, [])];
    while (e.L.i < e.L.len) {
      x(e.L);
      let d = L(e.L);
      if (d === ")" || d === "}" || d === `
` || d === "") break;
      let b = e.L.b;
      while (e.L.i < e.L.len) {
        let p = L(e.L);
        if (p === ")" || p === "}" || p === " " || p === "\t" || p === `
` || p === "") break;
        if (p === "\\" && e.L.i + 1 < e.L.len) {
          n(e.L), n(e.L);
          continue;
        }
        if (p === "$" && L(e.L, 1) === "$") {
          n(e.L), n(e.L);
          continue;
        }
        if (p === "$" && L(e.L, 1) === "'") {
          n(e.L), n(e.L);
          while (e.L.i < e.L.len && L(e.L) !== "'") {
            if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) n(e.L);
            n(e.L);
          }
          if (L(e.L) === "'") n(e.L);
          continue;
        }
        if (p === "$" && L(e.L, 1) === "(") e.zshBraceDiff = !0;
        if (p === '"' || p === "'") {
          n(e.L);
          while (e.L.i < e.L.len && L(e.L) !== p) {
            if (p === '"' && L(e.L) === "\\" && e.L.i + 1 < e.L.len) n(e.L);
            n(e.L);
          }
          if (L(e.L) === p) n(e.L);
          continue;
        }
        if (p === "`") {
          e.zshBraceDiff = !0, n(e.L);
          while (e.L.i < e.L.len && L(e.L) !== "`") {
            if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) n(e.L);
            n(e.L);
          }
          if (L(e.L) === "`") n(e.L);
          continue;
        }
        if (p === "{") e.zshBraceDiff = !0;
        n(e.L);
      }
      if (e.L.b > b) u.push(a(e, "word", b, e.L.b, []));else break;
    }
    if (L(e.L) === ")") {
      let b_71 = e.L.b;
      n(e.L), u.push(a(e, ")", b_71, e.L.b, []));
    }
    while (L(e.L) === `
`) n(e.L);
    return a(e, "array", b_70, e.L.b, u);
  }
  if (o === "regex") {
    while (e.L.i < e.L.len) {
      let u = L(e.L);
      if (u === "{") e.zshBraceDiff = !0;
      if (u === "}") break;
      if (t && u === "/") break;
      if (u === "\\" && e.L.i + 1 < e.L.len) {
        n(e.L), n(e.L);
        continue;
      }
      if (u === '"' || u === "'") {
        n(e.L);
        while (e.L.i < e.L.len && L(e.L) !== u) {
          if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) n(e.L);
          n(e.L);
        }
        if (L(e.L) === u) n(e.L);
        continue;
      }
      if (u === "`") {
        e.zshBraceDiff = !0, n(e.L);
        while (e.L.i < e.L.len && L(e.L) !== "`") {
          if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) n(e.L);
          n(e.L);
        }
        if (L(e.L) === "`") n(e.L);
        continue;
      }
      if (u === "$") {
        let d = L(e.L, 1);
        if (d === "{") {
          let b = 0;
          n(e.L), n(e.L), b++;
          while (e.L.i < e.L.len && b > 0) {
            let p = L(e.L);
            if (p === "\\" && e.L.i + 1 < e.L.len) n(e.L);else if (p === "$" && L(e.L, 1) === "$") n(e.L);else if (p === "$" && L(e.L, 1) === "'") {
              n(e.L), n(e.L);
              while (e.L.i < e.L.len && L(e.L) !== "'") {
                if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) n(e.L);
                n(e.L);
              }
            } else if (p === '"' || p === "'") {
              n(e.L);
              while (e.L.i < e.L.len && L(e.L) !== p) {
                if (p === '"' && L(e.L) === "\\" && e.L.i + 1 < e.L.len) n(e.L);
                n(e.L);
              }
            } else if (p === "`") {
              e.zshBraceDiff = !0, n(e.L);
              while (e.L.i < e.L.len && L(e.L) !== "`") {
                if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) n(e.L);
                n(e.L);
              }
            } else if (p === "$" && L(e.L, 1) === "{") b++, n(e.L);else if (p === "$" && L(e.L, 1) === "(") e.zshBraceDiff = !0;else if (p === "{") e.zshBraceDiff = !0;else if (p === "}") b--;
            n(e.L);
          }
          continue;
        }
        if (d === "(") {
          e.zshBraceDiff = !0;
          let b = 0;
          n(e.L), n(e.L), b++;
          while (e.L.i < e.L.len && b > 0) {
            let p = L(e.L);
            if (p === "\\" && e.L.i + 1 < e.L.len) n(e.L);else if (p === "$" && L(e.L, 1) === "$") n(e.L);else if (p === "$" && L(e.L, 1) === "'") {
              n(e.L), n(e.L);
              while (e.L.i < e.L.len && L(e.L) !== "'") {
                if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) n(e.L);
                n(e.L);
              }
            } else if (p === '"' || p === "'") {
              n(e.L);
              while (e.L.i < e.L.len && L(e.L) !== p) {
                if (p === '"' && L(e.L) === "\\" && e.L.i + 1 < e.L.len) n(e.L);
                n(e.L);
              }
            } else if (p === "`") {
              n(e.L);
              while (e.L.i < e.L.len && L(e.L) !== "`") {
                if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) n(e.L);
                n(e.L);
              }
            } else if (p === "(") b++;else if (p === ")") b--;
            n(e.L);
          }
          continue;
        }
      }
      n(e.L);
    }
    let b_72 = e.L.b;
    if (b_72 === b_70) return null;
    return a(e, "regex", b_70, b_72, []);
  }
  let i = [],
    b_73 = e.L.b,
    l = () => {
      if (e.L.b > b_73) i.push(a(e, "word", b_73, e.L.b, []));
    };
  while (e.L.i < e.L.len) {
    let f = L(e.L);
    if (f === "}") break;
    if (f === "{") e.zshBraceDiff = !0;
    if (t && f === "/") break;
    if (f === "\\" && e.L.i + 1 < e.L.len) {
      n(e.L), n(e.L);
      continue;
    }
    let u = L(e.L, 1);
    if (f === "$") {
      if (u === "{" || u === "(" || u === "[") {
        l();
        let d = q(e);
        if (d) i.push(d);
        b_73 = e.L.b;
        continue;
      }
      if (u === "'") {
        l();
        let b_74 = e.L.b;
        n(e.L), n(e.L);
        while (e.L.i < e.L.len && L(e.L) !== "'") {
          if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) n(e.L);
          n(e.L);
        }
        if (L(e.L) === "'") n(e.L);
        i.push(a(e, "ansi_c_string", b_74, e.L.b, [])), b_73 = e.L.b;
        continue;
      }
      if (O(u) || E(u) || j.has(u)) {
        l();
        let d = q(e);
        if (d) i.push(d);
        b_73 = e.L.b;
        continue;
      }
    }
    if (f === '"') {
      l(), i.push(W(e)), b_73 = e.L.b;
      continue;
    }
    if (f === "'") {
      l();
      let b_75 = e.L.b;
      n(e.L);
      while (e.L.i < e.L.len && L(e.L) !== "'") n(e.L);
      if (L(e.L) === "'") n(e.L);
      i.push(a(e, "raw_string", b_75, e.L.b, [])), b_73 = e.L.b;
      continue;
    }
    if ((f === "<" || f === ">") && u === "(") {
      e.zshBraceDiff = !0, l();
      let d = ne(e);
      if (d) i.push(d);
      b_73 = e.L.b;
      continue;
    }
    if (f === "`") {
      l();
      let d = te(e);
      i.push(d), b_73 = e.L.b;
      continue;
    }
    n(e.L);
  }
  if (l(), i.length > 1 && i[0].type === "word" && /^[ \t]+$/.test(i[0].text)) i.shift();
  if (i.length === 0) return null;
  if (i.length === 1) return i[0];
  let c = i.at(-1);
  return a(e, "concatenation", i[0].startIndex, c.endIndex, i);
}
function Xe(e) {
  let o = [],
    b_76 = e.L.b,
    s = () => {
      if (e.L.b > b_76) o.push(a(e, "regex", b_76, e.L.b, []));
    };
  while (e.L.i < e.L.len) {
    let i = L(e.L);
    if (i === "}") break;
    if (i === "{") e.zshBraceDiff = !0;
    if (i === "\\" && e.L.i + 1 < e.L.len) {
      n(e.L), n(e.L);
      continue;
    }
    if (i === '"') {
      s(), o.push(W(e)), b_76 = e.L.b;
      continue;
    }
    if (i === "'") {
      s();
      let b_77 = e.L.b;
      n(e.L);
      while (e.L.i < e.L.len && L(e.L) !== "'") n(e.L);
      if (L(e.L) === "'") n(e.L);
      o.push(a(e, "raw_string", b_77, e.L.b, [])), b_76 = e.L.b;
      continue;
    }
    if (i === "`") {
      e.zshBraceDiff = !0, n(e.L);
      while (e.L.i < e.L.len && L(e.L) !== "`") {
        if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) n(e.L);
        n(e.L);
      }
      if (L(e.L) === "`") n(e.L);
      continue;
    }
    if (i === "$") {
      let r = L(e.L, 1);
      if (r === "$") {
        n(e.L), n(e.L);
        continue;
      }
      if (r === "'") {
        s();
        let b_78 = e.L.b;
        n(e.L), n(e.L);
        while (e.L.i < e.L.len && L(e.L) !== "'") {
          if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) n(e.L);
          n(e.L);
        }
        if (L(e.L) === "'") n(e.L);
        o.push(a(e, "ansi_c_string", b_78, e.L.b, [])), b_76 = e.L.b;
        continue;
      }
      if (r === "{") {
        let l = 1;
        n(e.L), n(e.L);
        while (e.L.i < e.L.len && l > 0) {
          let c = L(e.L);
          if (c === "\\" && e.L.i + 1 < e.L.len) n(e.L);else if (c === "$" && L(e.L, 1) === "$") n(e.L);else if (c === "$" && L(e.L, 1) === "'") {
            n(e.L), n(e.L);
            while (e.L.i < e.L.len && L(e.L) !== "'") {
              if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) n(e.L);
              n(e.L);
            }
          } else if (c === '"' || c === "'") {
            n(e.L);
            while (e.L.i < e.L.len && L(e.L) !== c) {
              if (c === '"' && L(e.L) === "\\" && e.L.i + 1 < e.L.len) n(e.L);
              n(e.L);
            }
          } else if (c === "`") {
            e.zshBraceDiff = !0, n(e.L);
            while (e.L.i < e.L.len && L(e.L) !== "`") {
              if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) n(e.L);
              n(e.L);
            }
          } else if (c === "$" && L(e.L, 1) === "{") l++, n(e.L);else if (c === "$" && L(e.L, 1) === "(") e.zshBraceDiff = !0;else if (c === "{") e.zshBraceDiff = !0;else if (c === "}") l--;
          n(e.L);
        }
        continue;
      }
      if (r === "(") {
        e.zshBraceDiff = !0;
        let l = 1;
        n(e.L), n(e.L);
        while (e.L.i < e.L.len && l > 0) {
          let c = L(e.L);
          if (c === "\\" && e.L.i + 1 < e.L.len) n(e.L);else if (c === "$" && L(e.L, 1) === "$") n(e.L);else if (c === "$" && L(e.L, 1) === "'") {
            n(e.L), n(e.L);
            while (e.L.i < e.L.len && L(e.L) !== "'") {
              if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) n(e.L);
              n(e.L);
            }
          } else if (c === '"' || c === "'") {
            n(e.L);
            while (e.L.i < e.L.len && L(e.L) !== c) {
              if (c === '"' && L(e.L) === "\\" && e.L.i + 1 < e.L.len) n(e.L);
              n(e.L);
            }
          } else if (c === "`") {
            n(e.L);
            while (e.L.i < e.L.len && L(e.L) !== "`") {
              if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) n(e.L);
              n(e.L);
            }
          } else if (c === "(") l++;else if (c === ")") l--;
          n(e.L);
        }
        continue;
      }
    }
    n(e.L);
  }
  return s(), o;
}
function te(e) {
  let b_79 = e.L.b;
  n(e.L);
  let t = a(e, "`", b_79, e.L.b, []),
    i_13 = e.L.i;
  {
    let u = !1;
    while (i_13 < e.L.len) {
      let d = e.L.src[i_13];
      if (d === "\\") {
        let b = e.L.src[i_13 + 1];
        if (b === "`" || b === "$" || b === "\\") u = !0;
        i_13 += 2;
        continue;
      }
      if (d === "`") break;
      i_13++;
    }
    if (u) {
      let b_80 = e.L.b;
      while (e.L.i < i_13) n(e.L);
      let b = a(e, "backtick_escape_unsupported", b_80, e.L.b, []),
        p;
      if (L(e.L) === "`") {
        let b_81 = e.L.b;
        n(e.L), p = a(e, "`", b_81, e.L.b, []);
      } else p = a(e, "`", e.L.b, e.L.b, []);
      return a(e, "command_substitution", b_79, p.endIndex, [t, b, p]);
    }
  }
  e.inBacktick++;
  let inDquote_2 = e.inDquote;
  e.inDquote = 0;
  let r = T(e.L),
    heredocs = e.L.heredocs;
  e.L.heredocs = [];
  let c = [];
  while (!0) {
    if (x(e.L), L(e.L) === "`" || L(e.L) === "") break;
    let u = T(e.L),
      d = g(e.L, "cmd");
    if (d.type === "EOF" || d.type === "BACKTICK") {
      v(e.L, u);
      break;
    }
    if (d.type === "NEWLINE") continue;
    v(e.L, u);
    let b = Te(e);
    if (!b) break;
    if (c.push(b), x(e.L), L(e.L) === "`") break;
    let p = T(e.L),
      h = g(e.L, "cmd");
    if (h.type === "OP" && (h.value === ";" || h.value === "&")) c.push(y(e, h.value, h));else if (h.type !== "NEWLINE") v(e.L, p);
  }
  if (e.L.heredocs = heredocs, e.inBacktick--, e.inDquote = inDquote_2, e.L.i !== i_13) {
    v(e.L, r);
    while (e.L.i < i_13) n(e.L);
    c.length = 0, c.push(a(e, "backtick_body_overrun", t.endIndex, e.L.b, []));
  }
  let f;
  if (L(e.L) === "`") {
    let b_82 = e.L.b;
    n(e.L), f = a(e, "`", b_82, e.L.b, []);
  } else f = a(e, "`", e.L.b, e.L.b, []);
  if (c.length === 0) c.push(a(e, "backtick_body_empty", t.endIndex, e.L.b, []));
  return a(e, "command_substitution", b_79, f.endIndex, [t, ...c, f]);
}
function Ze(e, o) {
  let t = y(e, "if", o),
    s = [t],
    i = D(e, null);
  s.push(...i), Q(e, "then", s);
  let r = D(e, null);
  s.push(...r);
  while (!0) {
    let c = T(e.L),
      f = g(e.L, "cmd");
    if (f.type === "WORD" && f.value === "elif") {
      let u = y(e, "elif", f),
        d = D(e, null),
        b = [u, ...d];
      Q(e, "then", b);
      let p = D(e, null);
      b.push(...p);
      let h = b.at(-1);
      s.push(a(e, "elif_clause", u.startIndex, h.endIndex, b));
    } else if (f.type === "WORD" && f.value === "else") {
      let u = y(e, "else", f),
        d = D(e, null),
        b = d.length > 0 ? d.at(-1) : u;
      s.push(a(e, "else_clause", u.startIndex, b.endIndex, [u, ...d]));
    } else {
      v(e.L, c);
      break;
    }
  }
  Q(e, "fi", s);
  let l = s.at(-1);
  return a(e, "if_statement", t.startIndex, l.endIndex, s);
}
function Ve(e, o) {
  let t = y(e, o.value, o),
    s = [t],
    i = D(e, null);
  s.push(...i);
  let r = ce(e);
  if (r) s.push(r);
  let l = s.at(-1);
  return a(e, "while_statement", t.startIndex, l.endIndex, s);
}
function be(e, o) {
  let t = y(e, o.value, o);
  if (x(e.L), o.value === "for" && L(e.L) === "(" && L(e.L, 1) === "(") {
    let b = e.L.b;
    n(e.L), n(e.L);
    let p = a(e, "((", b, e.L.b, []),
      h = [t, p];
    for (let S = 0; S < 3; S++) {
      x(e.L);
      let w = X(e, S < 2 ? ";" : "))", "assign");
      if (h.push(...w), S < 2) {
        if (L(e.L) === ";") {
          let b_83 = e.L.b;
          n(e.L), h.push(a(e, ";", b_83, e.L.b, []));
        }
      }
    }
    if (x(e.L), L(e.L) === ")" && L(e.L, 1) === ")") {
      let b_84 = e.L.b;
      n(e.L), n(e.L), h.push(a(e, "))", b_84, e.L.b, []));
    }
    let N = T(e.L),
      I = g(e.L, "cmd");
    if (I.type === "OP" && I.value === ";") h.push(y(e, ";", I));else if (I.type !== "NEWLINE") v(e.L, N);
    let k = ce(e);
    if (k) h.push(k);else if (z(e), x(e.L), L(e.L) === "{") {
      let b_85 = e.L.b;
      n(e.L);
      let w = a(e, "{", b_85, e.L.b, []),
        _ = D(e, "}"),
        R;
      if (L(e.L) === "}") {
        let b_86 = e.L.b;
        n(e.L), R = a(e, "}", b_86, e.L.b, []);
      } else R = a(e, "}", e.L.b, e.L.b, []);
      h.push(a(e, "compound_statement", w.startIndex, R.endIndex, [w, ..._, R]));
    }
    let m = h.at(-1);
    return a(e, "c_style_for_statement", t.startIndex, m.endIndex, h);
  }
  let s = [t],
    i = g(e.L, "arg");
  if (i.type === "WORD" && O(i.value[0] ?? "") && [...i.value].every(B)) s.push(a(e, "variable_name", i.start, i.end, []));else s.push(a(e, "ERROR", i.start, i.end, []));
  x(e.L);
  let r = T(e.L),
    l = g(e.L, "arg");
  if (l.type === "WORD" && l.value === "in") {
    s.push(y(e, "in", l));
    while (!0) {
      x(e.L);
      let b = L(e.L);
      if (b === ";" || b === `
` || b === "") break;
      let p = A(e, "arg");
      if (!p) break;
      s.push(p);
    }
  } else v(e.L, r);
  let c = T(e.L),
    f = g(e.L, "cmd");
  if (f.type === "OP" && f.value === ";") s.push(y(e, ";", f));else if (f.type !== "NEWLINE") v(e.L, c);
  let u = ce(e);
  if (u) s.push(u);
  let d = s.at(-1);
  return a(e, "for_statement", t.startIndex, d.endIndex, s);
}
function ce(e) {
  z(e);
  let o = T(e.L),
    t = g(e.L, "cmd");
  if (t.type !== "WORD" || t.value !== "do") return v(e.L, o), null;
  let s = y(e, "do", t),
    i = D(e, null),
    r = [s, ...i];
  Q(e, "done", r);
  let l = r.at(-1);
  return a(e, "do_group", s.startIndex, l.endIndex, r);
}
function Ge(e, o) {
  let t = y(e, "case", o),
    s = [t];
  x(e.L);
  let i = A(e, "arg");
  if (i) s.push(i);
  x(e.L), Q(e, "in", s), z(e);
  while (!0) {
    x(e.L), z(e);
    let l = T(e.L),
      c = g(e.L, "arg");
    if (c.type === "WORD" && c.value === "esac") {
      s.push(y(e, "esac", c));
      break;
    }
    if (c.type === "EOF") break;
    v(e.L, l);
    let f = Ye(e);
    if (!f) break;
    s.push(f);
  }
  let r = s.at(-1);
  return a(e, "case_statement", t.startIndex, r.endIndex, s);
}
function Ye(e) {
  x(e.L);
  let b_87 = e.L.b,
    t = [];
  if (L(e.L) === "(") {
    let b_88 = e.L.b;
    n(e.L), t.push(a(e, "(", b_88, e.L.b, []));
  }
  let s = !0;
  while (!0) {
    x(e.L);
    let f = L(e.L);
    if (f === ")" || f === "") break;
    let u = Je(e);
    if (u.length === 0) break;
    if (!s && u.length > 1) {
      let d = u.map(item => item.type === "extglob_pattern" ? a(e, "word", item.startIndex, item.endIndex, []) : item),
        b = d[0],
        p = d.at(-1);
      t.push(a(e, "concatenation", b.startIndex, p.endIndex, d));
    } else t.push(...u);
    if (s = !1, x(e.L), L(e.L) === "\\" && L(e.L, 1) === `
`) n(e.L), n(e.L), x(e.L);
    if (L(e.L) === "|") {
      let b_89 = e.L.b;
      if (n(e.L), t.push(a(e, "|", b_89, e.L.b, [])), L(e.L) === "\\" && L(e.L, 1) === `
`) n(e.L), n(e.L);
    } else break;
  }
  if (L(e.L) === ")") {
    let b_90 = e.L.b;
    n(e.L), t.push(a(e, ")", b_90, e.L.b, []));
  }
  let i = D(e, null);
  t.push(...i);
  let r = T(e.L),
    l = g(e.L, "cmd");
  if (l.type === "OP" && (l.value === ";;" || l.value === ";&" || l.value === ";;&")) t.push(y(e, l.value, l));else v(e.L, r);
  if (t.length === 0) return null;
  if (i.length === 0) for (let f = 0; f < t.length; f++) {
    let u = t[f];
    if (u.type !== "extglob_pattern") continue;
    let d = K(e, u.startIndex, u.endIndex);
    if (/^[-+?*@!][a-zA-Z]/.test(d) && !/[*?(]/.test(d)) t[f] = a(e, "word", u.startIndex, u.endIndex, []);
  }
  let c = t.at(-1);
  return a(e, "case_item", b_87, c.endIndex, t);
}
function Je(e) {
  x(e.L);
  let o = T(e.L),
    b_91 = e.L.b,
    i_14 = e.L.i,
    i = 0,
    r = !1,
    l = !1,
    c = !1;
  while (e.L.i < e.L.len) {
    let b = L(e.L);
    if (b === "\\" && e.L.i + 1 < e.L.len) {
      n(e.L), n(e.L);
      continue;
    }
    if (b === '"' || b === "'") {
      c = !0, n(e.L);
      while (e.L.i < e.L.len && L(e.L) !== b) {
        if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) n(e.L);
        n(e.L);
      }
      if (L(e.L) === b) n(e.L);
      continue;
    }
    if (b === "(") {
      i++, n(e.L);
      continue;
    }
    if (i > 0) {
      if (b === ")") {
        i--, n(e.L);
        continue;
      }
      if (b === `
`) break;
      n(e.L);
      continue;
    }
    if (b === ")" || b === "|" || b === " " || b === "\t" || b === `
`) break;
    if (b === "$") r = !0;
    if (b === "[") l = !0;
    n(e.L);
  }
  if (e.L.b === b_91) return [];
  let f = e.src.slice(i_14, e.L.i),
    u = /[*?+@!]\(/.test(f);
  if (c && !u) return v(e.L, o), Pe(e);
  if (!u && (r || l)) {
    v(e.L, o);
    let b = A(e, "arg");
    return b ? [b] : [];
  }
  let d = u || /[*?]/.test(f) || /^[-+?*@!][a-zA-Z]/.test(f) ? "extglob_pattern" : "word";
  return [a(e, d, b_91, e.L.b, [])];
}
function Pe(e) {
  let o = [],
    b_92 = e.L.b,
    i_15 = e.L.i,
    i = () => {
      if (e.L.i > i_15) {
        let r = e.src.slice(i_15, e.L.i),
          l = /[*?]/.test(r) ? "extglob_pattern" : "word";
        o.push(a(e, l, b_92, e.L.b, []));
      }
    };
  while (e.L.i < e.L.len) {
    let r = L(e.L);
    if (r === "\\" && e.L.i + 1 < e.L.len) {
      n(e.L), n(e.L);
      continue;
    }
    if (r === '"') {
      i(), o.push(W(e)), b_92 = e.L.b, i_15 = e.L.i;
      continue;
    }
    if (r === "'") {
      i();
      let l = g(e.L, "arg");
      o.push(y(e, "raw_string", l)), b_92 = e.L.b, i_15 = e.L.i;
      continue;
    }
    if (r === ")" || r === "|" || r === " " || r === "\t" || r === `
`) break;
    n(e.L);
  }
  return i(), o;
}
function en(e, o) {
  let t = y(e, "function", o);
  x(e.L);
  let s = g(e.L, "arg"),
    i = a(e, "word", s.start, s.end, []),
    r = [t, i];
  if (x(e.L), L(e.L) === "(" && L(e.L, 1) === ")") {
    let f = g(e.L, "cmd");
    r.push(y(e, "(", f));
    let b_93 = e.L.b;
    n(e.L), r.push(a(e, ")", b_93, e.L.b, []));
  }
  x(e.L), z(e);
  let l = F(e);
  if (l) if (l.type === "redirected_statement" && l.children.length >= 2 && l.children[0].type === "compound_statement") r.push(...l.children);else r.push(l);
  let c = r.at(-1);
  return a(e, "function_definition", t.startIndex, c.endIndex, r);
}
function nn(e, o) {
  let t = y(e, o.value, o),
    s = [t],
    i = [];
  while (!0) {
    x(e.L);
    let u = U(e);
    if (u) {
      i.push(u);
      continue;
    }
    let d = L(e.L);
    if (d === "(") {
      s.push(a(e, "variable_name", e.L.b, e.L.b + 1, []));
      break;
    }
    if (d === "" || d === `
` || d === ";" || d === "&" || d === "|" || d === ")" || d === "<" || d === ">") break;
    let b = we(e);
    if (b) {
      s.push(b);
      continue;
    }
    if (d === '"' || d === "'" || d === "$") {
      let N = A(e, "arg");
      if (N) {
        s.push(N);
        continue;
      }
      break;
    }
    let p = T(e.L),
      h = g(e.L, "arg");
    if (h.type === "WORD" || h.type === "NUMBER") {
      if (h.value.startsWith("-")) s.push(y(e, "word", h));else if (O(h.value[0] ?? "")) s.push(a(e, "variable_name", h.start, h.end, []));else s.push(y(e, "word", h));
    } else {
      v(e.L, p);
      break;
    }
  }
  let r = s.at(-1),
    l = a(e, "declaration_command", t.startIndex, r.endIndex, s);
  if (i.length === 0) return l;
  let c = i.at(-1),
    f = Math.max(l.endIndex, c.endIndex);
  return a(e, "redirected_statement", t.startIndex, f, [l, ...i]);
}
function tn(e, o) {
  let t = y(e, "unset", o),
    s = [t],
    i = [];
  while (!0) {
    x(e.L);
    let u = U(e);
    if (u) {
      i.push(u);
      continue;
    }
    let d = L(e.L);
    if (d === "(") {
      s.push(a(e, "variable_name", e.L.b, e.L.b + 1, []));
      break;
    }
    if (d === "" || d === `
` || d === ";" || d === "&" || d === "|" || d === ")" || d === "<" || d === ">") break;
    let b = A(e, "arg");
    if (!b) break;
    if (b.type === "word") {
      if (b.text.startsWith("-")) s.push(b);else s.push(a(e, "variable_name", b.startIndex, b.endIndex, []));
    } else s.push(b);
  }
  let r = s.at(-1),
    l = a(e, "unset_command", t.startIndex, r.endIndex, s);
  if (i.length === 0) return l;
  let c = i.at(-1),
    f = Math.max(l.endIndex, c.endIndex);
  return a(e, "redirected_statement", t.startIndex, f, [l, ...i]);
}
function Q(e, o, t) {
  z(e);
  let s = T(e.L),
    i = g(e.L, "cmd");
  if (i.type === "WORD" && i.value === o) t.push(y(e, o, i));else v(e.L, s);
}
function pe(e, o) {
  return ue(e, o);
}
function ue(e, o) {
  let t = he(e, o);
  if (!t) return null;
  while (!0) {
    x(e.L);
    let s = T(e.L);
    if (o === "]]" && L(e.L) === "|" && L(e.L, 1) === "|") {
      let b_94 = e.L.b;
      n(e.L), n(e.L);
      let r = a(e, "||", b_94, e.L.b, []);
      se(e, o);
      let l = he(e, o);
      if (!l) {
        v(e.L, s);
        break;
      }
      t = a(e, "binary_expression", t.startIndex, l.endIndex, [t, r, l]);
    } else break;
  }
  return t;
}
function he(e, o) {
  let t = xe(e, o);
  if (!t) return null;
  while (!0) {
    x(e.L);
    let s = T(e.L);
    if (o === "]]" && L(e.L) === "&" && L(e.L, 1) === "&") {
      let b_95 = e.L.b;
      n(e.L), n(e.L);
      let r = a(e, "&&", b_95, e.L.b, []);
      se(e, o);
      let l = xe(e, o);
      if (!l) {
        v(e.L, s);
        break;
      }
      t = a(e, "binary_expression", t.startIndex, l.endIndex, [t, r, l]);
    } else break;
  }
  return t;
}
function se(e, o) {
  if (x(e.L), o === "]]") while (!0) {
    let t = L(e.L);
    if (t === `
`) n(e.L), x(e.L);else if (t === "#") while (L(e.L) && L(e.L) !== `
`) n(e.L);else break;
  }
}
function xe(e, o) {
  if (se(e, o), L(e.L) === "(") {
    let b_96 = e.L.b;
    n(e.L);
    let i = a(e, "(", b_96, e.L.b, []),
      r = ue(e, o);
    x(e.L);
    let l;
    if (L(e.L) === ")") {
      let b_97 = e.L.b;
      n(e.L), l = a(e, ")", b_97, e.L.b, []);
    } else l = a(e, ")", e.L.b, e.L.b, []);
    let c = r ? [i, r, l] : [i, l];
    return a(e, "parenthesized_expression", i.startIndex, l.endIndex, c);
  }
  return sn(e, o);
}
function ke(e, o) {
  se(e, o);
  let t = L(e.L),
    s = i => i === " " || i === "\t" || i === `
` || i === "";
  if (t === "!" && (s(L(e.L, 1)) || L(e.L, 1) === "(")) {
    let b_98 = e.L.b;
    n(e.L);
    let r = a(e, "!", b_98, e.L.b, []),
      l = ke(e, o);
    if (!l) return r;
    return a(e, "unary_expression", r.startIndex, l.endIndex, [r, l]);
  }
  if (t === "(") {
    let b_99 = e.L.b;
    n(e.L);
    let r = a(e, "(", b_99, e.L.b, []),
      l = ue(e, o);
    x(e.L);
    let c;
    if (L(e.L) === ")") {
      let b_100 = e.L.b;
      n(e.L), c = a(e, ")", b_100, e.L.b, []);
    } else c = a(e, ")", e.L.b, e.L.b, []);
    let f = l ? [r, l, c] : [r, c];
    return a(e, "parenthesized_expression", r.startIndex, c.endIndex, f);
  }
  if (t === "-" && O(L(e.L, 1))) {
    let i = T(e.L),
      b_101 = e.L.b;
    n(e.L);
    while (B(L(e.L))) n(e.L);
    if (!s(L(e.L))) return v(e.L, i), P(e, o);
    let l = a(e, "test_operator", b_101, e.L.b, []),
      i_16 = e.L.i;
    x(e.L);
    let f = P(e, o);
    if (!f) {
      let u = e.src.slice(i_16, e.L.i);
      if (!/^(?:[ \t]|\\\n)*$/.test(u)) {
        let d = a(e, "test_rhs_missing", l.endIndex, e.L.b, []);
        return a(e, "unary_expression", l.startIndex, e.L.b, [l, d]);
      }
      return l;
    }
    return a(e, "unary_expression", l.startIndex, f.endIndex, [l, f]);
  }
  return P(e, o);
}
function J(e, o, t) {
  let s = a(e, "test_rhs_missing", t.endIndex, e.L.b, []);
  return a(e, "binary_expression", o.startIndex, e.L.b, [o, t, s]);
}
function sn(e, o) {
  x(e.L);
  let t = ke(e, o);
  if (!t) return null;
  x(e.L);
  let s = L(e.L),
    i = L(e.L, 1),
    r = null,
    b_102 = e.L.b;
  if (s === "=" && i === "=") n(e.L), n(e.L), r = a(e, "==", b_102, e.L.b, []);else if (s === "!" && i === "=") n(e.L), n(e.L), r = a(e, "!=", b_102, e.L.b, []);else if (s === "=" && i === "~") n(e.L), n(e.L), r = a(e, "=~", b_102, e.L.b, []);else if (s === "=" && i !== "=") n(e.L), r = a(e, "=", b_102, e.L.b, []);else if (o === "]]" && s === "<" && i !== "<") n(e.L), r = a(e, "<", b_102, e.L.b, []);else if (o === "]]" && s === ">" && i !== ">") n(e.L), r = a(e, ">", b_102, e.L.b, []);else if (s === "-" && O(i)) {
    n(e.L);
    while (B(L(e.L))) n(e.L);
    r = a(e, "test_operator", b_102, e.L.b, []);
  }
  if (!r) return t;
  if (x(e.L), o === "]]") {
    let f = r.type;
    if (f === "=~") {
      x(e.L);
      let u = L(e.L),
        d = null;
      if (u === '"' || u === "'") {
        let b = T(e.L),
          p = u === '"' ? W(e) : y(e, "raw_string", g(e.L, "arg")),
          i_17 = e.L.i,
          N = i_17;
        while (N < e.L.len && (e.src[N] === " " || e.src[N] === "\t")) N++;
        let I = e.src[N] ?? "",
          k = N + 1;
        while (e.src[k] === "\\") if (e.src[k + 1] === `
`) k += 2;else if (e.src[k + 1] === "\r" && e.src[k + 2] === `
`) k += 3;else break;
        let m = e.src[k] ?? "";
        if (I === "]" && m === "]" && N > i_17 || I === "&" && m === "&" || I === "|" && m === "|" && N > i_17 || I === `
` || I === "") d = p;else v(e.L, b);
      }
      if (!d) d = ve(e, !0);
      if (!d) return J(e, t, r);
      return a(e, "binary_expression", t.startIndex, d.endIndex, [t, r, d]);
    }
    if (f === "=") {
      let u = ve(e, !1);
      if (!u) return J(e, t, r);
      return a(e, "binary_expression", t.startIndex, u.endIndex, [t, r, u]);
    }
    if (f === "==" || f === "!=") {
      let u = rn(e);
      if (u.length === 0) return J(e, t, r);
      let d = u.at(-1);
      return a(e, "binary_expression", t.startIndex, d.endIndex, [t, r, ...u]);
    }
  }
  let c = P(e, o);
  if (!c) return J(e, t, r);
  return a(e, "binary_expression", t.startIndex, c.endIndex, [t, r, c]);
}
function ve(e, o) {
  x(e.L);
  let b_103 = e.L.b,
    s = 0;
  while (e.L.i < e.L.len) {
    let i = L(e.L);
    if (i === "\\" && e.L.i + 1 < e.L.len) {
      n(e.L), n(e.L);
      continue;
    }
    if (i === `
`) {
      if (s === 0) break;
      n(e.L);
      continue;
    }
    if (i === '"' || i === "'") {
      let r = i;
      n(e.L);
      while (e.L.i < e.L.len && L(e.L) !== r) {
        if (r === '"' && L(e.L) === "\\" && e.L.i + 1 < e.L.len) n(e.L);
        n(e.L);
      }
      if (e.L.i < e.L.len) n(e.L);
      continue;
    }
    if (i === "`") {
      n(e.L);
      while (e.L.i < e.L.len && L(e.L) !== "`") {
        if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) n(e.L);
        n(e.L);
      }
      if (e.L.i < e.L.len) n(e.L);
      continue;
    }
    if (s === 0) {
      if (i === " " || i === "\t") break;
      if (i === "&" || !o && i === "|") break;
      if (i === ")") break;
    }
    if (i === "(") s++;else if (i === ")" && s > 0) s--;
    n(e.L);
  }
  if (e.L.b === b_103) return null;
  return a(e, "regex", b_103, e.L.b, []);
}
function rn(e) {
  x(e.L);
  let o = [],
    b_104 = e.L.b,
    i_18 = e.L.i,
    i = 0,
    r = () => {
      if (e.L.i > i_18) {
        let l = e.src.slice(i_18, e.L.i),
          c = /^\d+$/.test(l) ? "number" : "extglob_pattern";
        o.push(a(e, c, b_104, e.L.b, []));
      }
    };
  while (e.L.i < e.L.len) {
    let l = L(e.L);
    if (l === "\\" && e.L.i + 1 < e.L.len) {
      n(e.L), n(e.L);
      continue;
    }
    if (l === `
`) {
      if (i === 0) break;
      n(e.L);
      continue;
    }
    if (i === 0) {
      if (l === "&" || l === "|") break;
      if (l === " " || l === "\t") {
        let i_19 = e.L.i;
        for (;;) {
          let b = e.L.src[i_19];
          if (b === " " || b === "\t") i_19++;else if (b === "\\" && e.L.src[i_19 + 1] === `
`) i_19 += 2;else if (b === "\\" && e.L.src[i_19 + 1] === "\r" && e.L.src[i_19 + 2] === `
`) i_19 += 3;else break;
        }
        let f = e.L.src[i_19] ?? "",
          u = i_19 + 1;
        while (e.L.src[u] === "\\") if (e.L.src[u + 1] === `
`) u += 2;else if (e.L.src[u + 1] === "\r" && e.L.src[u + 2] === `
`) u += 3;else break;
        let d = e.L.src[u] ?? "";
        if (f === "]" && d === "]" || f === "&" && d === "&" || f === "|" && d === "|" || f === "#" || f === `
`) break;
        n(e.L);
        continue;
      }
    }
    if (l === "$") {
      let c = L(e.L, 1);
      if (c === "'") {
        r();
        let f = g(e.L, "arg");
        o.push(y(e, "ansi_c_string", f)), b_104 = e.L.b, i_18 = e.L.i;
        continue;
      }
      if (c === '"') {
        r();
        let f = {
          type: "DOLLAR",
          value: "$",
          start: e.L.b,
          end: e.L.b + 1
        };
        n(e.L), o.push(y(e, "$", f)), o.push(W(e)), b_104 = e.L.b, i_18 = e.L.i;
        continue;
      }
      if (c === "(" || c === "{" || O(c) || j.has(c)) {
        r();
        let f = q(e);
        if (f) o.push(f);
        b_104 = e.L.b, i_18 = e.L.i;
        continue;
      }
    }
    if (l === '"') {
      r(), o.push(W(e)), b_104 = e.L.b, i_18 = e.L.i;
      continue;
    }
    if (l === "'") {
      r();
      let c = g(e.L, "arg");
      o.push(y(e, "raw_string", c)), b_104 = e.L.b, i_18 = e.L.i;
      continue;
    }
    if (l === "`") {
      r();
      let c = te(e);
      o.push(c), b_104 = e.L.b, i_18 = e.L.i;
      continue;
    }
    if ((l === "<" || l === ">") && L(e.L, 1) === "(") {
      r();
      let c = ne(e);
      if (c) o.push(c);
      b_104 = e.L.b, i_18 = e.L.i;
      continue;
    }
    if (l === ")" && i === 0) break;
    if (l === "(") i++;else if (l === ")" && i > 0) i--;
    n(e.L);
  }
  return r(), o;
}
function P(e, o) {
  if (x(e.L), o === "]" && L(e.L) === "]" && oe(L(e.L, 1) ?? "")) return null;
  if (o === "]]" && L(e.L) === "]" && L(e.L, 1) === "]" && oe(L(e.L, 2) ?? "")) return null;
  return A(e, "arg");
}
var on = {
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
  Ln = new Set(["=", "+=", "-=", "*=", "/=", "%=", "<<=", ">>=", "&=", "^=", "|=", "**"]);
function me(e, o, t) {
  v(e.L, o);
  let s = 0;
  while (e.L.i < e.L.len) {
    let i = L(e.L);
    if (t === "))" || t === ")") {
      if (i === "(") s++;else if (i === ")") if (s === 0) {
        if (t === ")" || L(e.L, 1) === ")") return;
      } else s--;
    } else if (t === "]") {
      if (i === "[") s++;else if (i === "]") {
        if (s === 0) return;
        s--;
      }
    } else if (V(e, t)) return;
    n(e.L);
  }
}
function ee(e, o, t = "var") {
  return Z(e, o, t);
}
function X(e, o, t = "var") {
  let s = [];
  while (!0) {
    let i = Z(e, o, t);
    if (i) s.push(i);
    if (x(e.L), L(e.L) === "," && !V(e, o)) {
      n(e.L);
      continue;
    }
    break;
  }
  return s;
}
function Z(e, o, t) {
  let s = le(e, o, 0, t);
  if (!s) return null;
  if (x(e.L), L(e.L) === "?") {
    let b_105 = e.L.b;
    n(e.L);
    let r = a(e, "?", b_105, e.L.b, []),
      l = le(e, ":", 0, t);
    x(e.L);
    let c;
    if (L(e.L) === ":") {
      let b = e.L.b;
      n(e.L), c = a(e, ":", b, e.L.b, []);
    } else c = a(e, ":", e.L.b, e.L.b, []);
    let f = Z(e, o, t),
      u = f ?? c,
      d = [s, r];
    if (l) d.push(l);
    if (d.push(c), f) d.push(f);
    return a(e, "ternary_expression", s.startIndex, u.endIndex, d);
  }
  return s;
}
function cn(e) {
  let o = L(e.L),
    t = L(e.L, 1),
    s = L(e.L, 2);
  if (o === "<" && t === "<" && s === "=") return ["<<=", 3];
  if (o === ">" && t === ">" && s === "=") return [">>=", 3];
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
function le(e, o, t, s) {
  let i = ae(e, o, s);
  if (!i) return null;
  while (!0) {
    if (x(e.L), V(e, o)) break;
    if (L(e.L) === ",") break;
    let r = cn(e);
    if (!r) break;
    let [l, c] = r,
      f = on[l];
    if (f === void 0 || f < t) break;
    let b_106 = e.L.b;
    for (let h = 0; h < c; h++) n(e.L);
    let d = a(e, l, b_106, e.L.b, []),
      b = Ln.has(l) ? f : f + 1,
      p = le(e, o, b, s);
    if (!p) break;
    i = a(e, "binary_expression", i.startIndex, p.endIndex, [i, d, p]);
  }
  return i;
}
function ae(e, o, t) {
  if (x(e.L), V(e, o)) return null;
  let s = L(e.L),
    i = L(e.L, 1);
  if (s === "+" && i === "+" || s === "-" && i === "-") {
    let b_107 = e.L.b;
    n(e.L), n(e.L);
    let l = a(e, s + i, b_107, e.L.b, []),
      c = ae(e, o, t);
    if (!c) return l;
    return a(e, "unary_expression", l.startIndex, c.endIndex, [l, c]);
  }
  if (s === "-" || s === "+" || s === "!" || s === "~") {
    if (t !== "var" && s === "-" && E(i)) {
      let b_108 = e.L.b;
      n(e.L);
      while (E(L(e.L))) n(e.L);
      return a(e, "number", b_108, e.L.b, []);
    }
    let b_109 = e.L.b;
    n(e.L);
    let l = a(e, s, b_109, e.L.b, []),
      c = ae(e, o, t);
    if (!c) return l;
    return a(e, "unary_expression", l.startIndex, c.endIndex, [l, c]);
  }
  return ln(e, o, t);
}
function ln(e, o, t) {
  let s = an(e, o, t);
  if (!s) return null;
  let i = L(e.L),
    r = L(e.L, 1);
  if (i === "+" && r === "+" || i === "-" && r === "-") {
    let b_110 = e.L.b;
    n(e.L), n(e.L);
    let c = a(e, i + r, b_110, e.L.b, []);
    return a(e, "postfix_expression", s.startIndex, c.endIndex, [s, c]);
  }
  return s;
}
function an(e, o, t) {
  if (x(e.L), V(e, o)) return null;
  let s = L(e.L);
  if (s === "(") {
    let b_111 = e.L.b;
    n(e.L);
    let r = a(e, "(", b_111, e.L.b, []),
      l = X(e, ")", t);
    x(e.L);
    let c;
    if (L(e.L) === ")") {
      let b_112 = e.L.b;
      n(e.L), c = a(e, ")", b_112, e.L.b, []);
    } else c = a(e, ")", e.L.b, e.L.b, []);
    return a(e, "parenthesized_expression", r.startIndex, c.endIndex, [r, ...l, c]);
  }
  if (s === '"') return W(e);
  if (s === "$") return q(e);
  if (E(s)) {
    let b_113 = e.L.b;
    while (E(L(e.L))) n(e.L);
    if (e.L.b - b_113 === 1 && s === "0" && (L(e.L) === "x" || L(e.L) === "X")) {
      n(e.L);
      while (Oe(L(e.L))) n(e.L);
    } else if (L(e.L) === "#") {
      n(e.L);
      while (Re(L(e.L))) n(e.L);
    }
    return a(e, "number", b_113, e.L.b, []);
  }
  if (O(s)) {
    let b_114 = e.L.b;
    while (B(L(e.L))) n(e.L);
    let r = L(e.L);
    if (t === "assign") {
      x(e.L);
      let c = L(e.L),
        f = L(e.L, 1);
      if (c === "=" && f !== "=") {
        let u = a(e, "variable_name", b_114, e.L.b, []),
          b_115 = e.L.b;
        n(e.L);
        let b = a(e, "=", b_115, e.L.b, []),
          p = Z(e, o, t),
          h = p ? p.endIndex : b.endIndex;
        return a(e, "variable_assignment", b_114, h, p ? [u, b, p] : [u, b]);
      }
    }
    if (r === "[") {
      let c = a(e, "variable_name", b_114, e.L.b, []),
        b_116 = e.L.b;
      n(e.L);
      let u = a(e, "[", b_116, e.L.b, []),
        d = Z(e, "]", "var") ?? q(e);
      x(e.L);
      let b;
      if (L(e.L) === "]") {
        let b_117 = e.L.b;
        n(e.L), b = a(e, "]", b_117, e.L.b, []);
      } else b = a(e, "]", e.L.b, e.L.b, []);
      let p = d ? [c, u, d, b] : [c, u, b];
      return a(e, "subscript", b_114, b.endIndex, p);
    }
    return a(e, t === "var" ? "variable_name" : "word", b_114, e.L.b, []);
  }
  return null;
}
function V(e, o) {
  let t = L(e.L);
  if (o === "))") return t === ")" && L(e.L, 1) === ")";
  if (o === ")") return t === ")";
  if (o === ";") return t === ";";
  if (o === ":") return t === ":";
  if (o === "]") return t === "]";
  if (o === "}") return t === "}";
  if (o === ":}") return t === ":" || t === "}";
  return t === "" || t === `
`;
}
export { pb, S2n };