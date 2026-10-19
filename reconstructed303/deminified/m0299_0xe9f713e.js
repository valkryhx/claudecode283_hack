// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { ro } from "B:/~BUN/root/chunk-fsp20me0.js";
function Rxo(e, {
  maxLines = 2000
} = {}) {
  let n = [];
  return iFt(e, {
    entry(c, l, s) {
      if (s !== void 0 && s !== "" && c !== null && x(c) && (l === "url" || l === "pushurl")) n.push(s);
    }
  }, {
    maxLines: maxLines
  }), n;
}
function x({
  name: name,
  quoted: quoted
}) {
  if (quoted) return name === "remote" || name.startsWith("remote.");
  let n = name.indexOf(".");
  return n !== -1 && name.slice(0, n) === "remote";
}
function iFt(e, i, {
  maxLines: maxLines_2 = 2000,
  keepsBlanksAsWritten = !1
} = {}) {
  let s = (e.codePointAt(0) === 65279 ? e.slice(1) : e).split(/\r\n|\n/).slice(0, maxLines_2),
    t = null,
    u = () => {
      t = null, i.malformed?.();
    },
    f = 0;
  while (f < s.length) {
    let r = s[f] ?? "";
    f++;
    let o = h(r, 0),
      p = !1;
    while (r[o] === "[") {
      let b = I(r, o);
      if (b === null) {
        u(), p = !0;
        break;
      }
      let {
        end: end,
        ...E
      } = b;
      t = E, i.header?.(t), o = h(r, end);
    }
    if (p) continue;
    let a = r[o];
    if (a === void 0 || a === "#" || a === ";") continue;
    if (!N(a)) {
      u();
      continue;
    }
    let d = o;
    while (o < r.length && R(r[o] ?? "")) o++;
    let O = r.slice(d, o).toLowerCase();
    while (o < r.length && (r[o] === " " || r[o] === "\t")) o++;
    if (o >= r.length) {
      i.entry?.(t, O, void 0);
      continue;
    }
    if (r[o] !== "=") {
      u();
      continue;
    }
    let g = M(r, o + 1, s, f, keepsBlanksAsWritten);
    if (f = g.nextLineIndex, g.value === null) {
      u();
      continue;
    }
    i.entry?.(t, O, g.value);
  }
}
function I(e, i) {
  let n = i + 1,
    c = n;
  while (n < e.length) {
    let t = e[n];
    if (t === void 0 || !(R(t) || t === ".")) break;
    n++;
  }
  let l = e.slice(c, n);
  if (e[n] === "]") {
    if (l === "") return null;
    return {
      name: l.toLowerCase(),
      quoted: !1,
      end: n + 1
    };
  }
  if (e[n] !== " " && e[n] !== "\t" && e[n] !== "\r") return null;
  if (n = h(e, n), e[n] !== '"') return null;
  n++;
  let subsection = "";
  while (!0) {
    if (n >= e.length) return null;
    let t = e[n];
    if (t === "\\") {
      subsection += e[n + 1] ?? "", n += 2;
      continue;
    }
    if (n++, t === '"') break;
    subsection += t ?? "";
  }
  if (e[n] !== "]") return null;
  return {
    name: l.toLowerCase(),
    quoted: !0,
    subsection: subsection,
    end: n + 1
  };
}
function M(e, i, n, c, l) {
  let s = e,
    nextLineIndex = c,
    u = "",
    f = "",
    r = !1,
    o = i;
  while (!0) {
    if (o >= s.length) {
      if (r) return {
        value: null,
        nextLineIndex: nextLineIndex
      };
      break;
    }
    let a = s[o];
    if (!r && (a === " " || a === "\t" || a === "\r")) {
      if (u !== "") f += l ? a : " ";
      o++;
      continue;
    }
    if (!r && (a === ";" || a === "#")) break;
    if (u += f, f = "", a === "\\") {
      if (o + 1 >= s.length) {
        if (nextLineIndex >= n.length) return {
          value: null,
          nextLineIndex: nextLineIndex
        };
        s = n[nextLineIndex] ?? "", nextLineIndex++, o = 0;
        continue;
      }
      let d;
      switch (s[o + 1]) {
        case "\\":
          d = "\\";
          break;
        case '"':
          d = '"';
          break;
        case "n":
          d = `
`;
          break;
        case "t":
          d = "\t";
          break;
        case "b":
          d = "\b";
          break;
        default:
          return {
            value: null,
            nextLineIndex: nextLineIndex
          };
      }
      u += d, o += 2;
      continue;
    }
    if (a === '"') {
      r = !r, o++;
      continue;
    }
    u += a, o++;
  }
  let p = u.indexOf("\x00");
  return {
    value: p === -1 ? u : u.slice(0, p),
    nextLineIndex: nextLineIndex
  };
}
function h(e, i) {
  while (i < e.length && (e[i] === " " || e[i] === "\t" || e[i] === "\r")) i++;
  return i;
}
function N(e) {
  return e >= "a" && e <= "z" || e >= "A" && e <= "Z";
}
function R(e) {
  return N(e) || e >= "0" && e <= "9" || e === "-";
}
var _ = "anthropics",
  m = "anthropic",
  fe = `github.com/${_}/${m}`;
var regExp = new RegExp(`${_}[^]*${m}`),
  regExp_2 = new RegExp(`^${m}(?:\\.git)*$`);
function MHs() {
  return;
}
function Uqn(e) {
  return ro(e.host) && e.owner.toLowerCase() === _ && e.name.toLowerCase() === m;
}
export { Rxo, iFt, MHs, Uqn };