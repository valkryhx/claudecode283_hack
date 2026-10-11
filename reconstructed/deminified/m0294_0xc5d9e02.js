// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { g3 } from "B:/~BUN/root/chunk-6wgkxd9a.js";
import { l, B } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Dn, Gh, Vg, kl } from "B:/~BUN/root/chunk-54p0h65d.js";
import { q, j } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { ce, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Gc, Gt } from "B:/~BUN/root/chunk-y04k89s2.js";
import { Ye } from "B:/~BUN/root/chunk-qqgpf856.js";
import { $Ho, Y0, umn } from "B:/~BUN/root/chunk-8hs4bwwk.js";
import { uJ } from "B:/~BUN/root/chunk-bt3h0syz.js";
import { m$n as timeout, Oke, XW } from "B:/~BUN/root/chunk-efz11ra0.js";
import { K6e } from "B:/~BUN/root/chunk-p10aw0p6.js";
import { pd } from "B:/~BUN/root/chunk-tndjj29v.js";
import { resolve as P } from "path";
var M = 1000,
  v = 16777216;
class I {
  cache;
  constructor(max = M, maxSize = v) {
    this.cache = new pd({
      max: max,
      maxSize: maxSize,
      sizeCalculation: r => Math.max(1, r.content.length)
    });
  }
  readFile(e) {
    let n = ce(),
      r;
    try {
      r = n.statSync(e);
    } catch (error) {
      throw this.cache.delete(e), error;
    }
    if (!r.isFile()) throw this.cache.delete(e), Object.assign(Error("EINVAL: not a regular file"), {
      code: "EINVAL"
    });
    let i = this.cache.get(e);
    if (i && i.mtime === r.mtimeMs) return {
      content: i.content,
      encoding: i.encoding
    };
    let encoding = $Ho(e),
      content = n.readFileSync(e, {
        encoding: encoding
      }).replaceAll(`\r
`, `
`);
    return this.cache.set(e, {
      content: content,
      encoding: encoding,
      mtime: r.mtimeMs
    }), {
      content: content,
      encoding: encoding
    };
  }
  invalidate(e) {
    this.cache.delete(e);
  }
  getStats() {
    return {
      size: this.cache.size,
      totalChars: this.cache.calculatedSize,
      entries: Array.from(this.cache.keys())
    };
  }
}
var D = new q(() => new I());
function m(e) {
  let {
    content: content_2
  } = D.of(j().host).readFile(e);
  return content_2;
}
function Fqe(e) {
  return /\.(md|mdx)$/i.test(e);
}
function $qe(e) {
  let n = e.split(/(\r\n|\n|\r)/),
    r = "";
  for (let i = 0; i < n.length; i++) {
    let s = n[i];
    if (s !== void 0) if (i % 2 === 0) r += s.replace(/\s+$/, "");else r += s;
  }
  return r;
}
var O = {
  "<fnr>": "<function_results>",
  "<n>": "<name>",
  "</n>": "</name>",
  "<o>": "<output>",
  "</o>": "</output>",
  "<e>": "<error>",
  "</e>": "</error>",
  "<s>": "<system>",
  "</s>": "</system>",
  "<r>": "<result>",
  "</r>": "</result>",
  "< META_START >": "<META_START>",
  "< META_END >": "<META_END>",
  "< EOT >": "<EOT>",
  "< META >": "<META>",
  "< SOS >": "<SOS>",
  "\n\nH:": `

Human:`,
  "\n\nA:": `

Assistant:`
};
function l$n(e) {
  let result = e,
    appliedReplacements = [];
  for (let [i, to] of Object.entries(O)) {
    let o = result;
    if (result = result.replaceAll(i, to), o !== result) appliedReplacements.push({
      from: i,
      to: to
    });
  }
  return {
    result: result,
    appliedReplacements: appliedReplacements
  };
}
var x = "\u2018",
  h = "\u2019",
  A = "\u201C",
  T = "\u201D";
function b(e) {
  return e.replaceAll(x, "'").replaceAll(h, "'").replaceAll(A, '"').replaceAll(T, '"');
}
var w = /\\u[0-9a-fA-F]{4}/,
  y = /[\u0080-\uffff]/;
function _(e) {
  return e.replace(/(\\\\)|\\u([0-9a-fA-F]{4})/g, (n, r, i) => r !== void 0 ? n : String.fromCharCode(parseInt(i, 16)));
}
function z(e) {
  let n = "";
  for (let r = 0; r < e.length; r++) {
    let i = e.charCodeAt(r);
    if (i >= 128) {
      n += "\\\\u";
      for (let s of i.toString(16).padStart(4, "0")) n += s >= "a" ? `[${s}${s.toUpperCase()}]` : s;
    } else n += Gc(e[r]);
  }
  return n;
}
function C(e) {
  let n = 0;
  for (let r = 0; r < e.length; r++) if (e.charCodeAt(r) >= 128) n++;
  return e.length + 5 * n;
}
function L(e, n) {
  let r = 0;
  while (e[n - 1 - r] === "\\") r++;
  return r;
}
function N(e, n) {
  if (L(e, e.length) % 2 === 1) return null;
  let r = e[0] === "\\" ? [0] : [],
    i = 0;
  for (let o = 0; o < e.length; o++) if (e.charCodeAt(o) >= 128) r.push(i), i += 6;else i += 1;
  let s = z(e);
  try {
    let regExp = new RegExp(s, "g");
    for (let a = regExp.exec(n); a !== null; a = regExp.exec(n)) {
      let index = a.index;
      if (r.every(item => L(n, index + item) % 2 === 0)) return n.indexOf(a[0]) === index ? a[0] : null;
      regExp.lastIndex = index + 1;
    }
    return null;
  } catch (error) {
    return t(`Edit: skipped the \\uXXXX-escape search; the regex engine refused a ${s.length}-character pattern (${error instanceof Error ? error.name : "non-Error"})`), null;
  }
}
function Iyo(e) {
  return w.test(e) || y.test(e);
}
function Oyo(e, n, r) {
  if (e === n) return r;
  if (y.test(e) && C(e) === n.length && N(e, n) !== null) {
    let i = new Map(),
      s = 0,
      o = 0;
    for (let a = 0, c = 0; a < e.length; a++) {
      let u = e.charCodeAt(a);
      if (u >= 128) {
        let f = n.slice(c + 2, c + 6);
        i.set(u, f);
        for (let d of f) if (d >= "a" && d <= "f") o++;else if (d >= "A" && d <= "F") s++;
        c += 6;
      } else c += 1;
    }
    return r.replace(/[\u0080-\uffff]/g, a => {
      let c = a.charCodeAt(0),
        u = i.get(c);
      if (u !== void 0) return "\\u" + u;
      let f = c.toString(16).padStart(4, "0");
      return "\\u" + (s > o ? f.toUpperCase() : f);
    });
  }
  if (w.test(e) && _(e) === n) return _(r);
  return r;
}
function Ike(e, n) {
  if (e.includes(n)) return n;
  let r = b(n),
    s = b(e).indexOf(r);
  if (s !== -1) return e.substring(s, s + n.length);
  if (w.test(n)) {
    let o = _(n);
    if (o !== n && e.includes(o)) return o;
  }
  if (y.test(n)) {
    if (C(n) > e.length || !e.includes("\\u")) return null;
    return N(n, e);
  }
  return null;
}
function Uqe(e, n, r) {
  if (e === n) return r;
  let i = n.includes(A) || n.includes(T),
    s = n.includes(x) || n.includes(h);
  if (!i && !s) return r;
  let o = r;
  if (i) o = k(o);
  if (s) o = H(o);
  return o;
}
function R(e, n) {
  if (n === 0) return !0;
  let r = e[n - 1];
  return r === " " || r === "\t" || r === `
` || r === "\r" || r === "(" || r === "[" || r === "{" || r === "\u2014" || r === "\u2013";
}
function k(e) {
  let n = [...e],
    r = [];
  for (let i = 0; i < n.length; i++) if (n[i] === '"') r.push(R(n, i) ? A : T);else r.push(n[i]);
  return r.join("");
}
function H(e) {
  let n = [...e],
    r = [];
  for (let i = 0; i < n.length; i++) if (n[i] === "'") {
    let s = i > 0 ? n[i - 1] : void 0,
      o = i < n.length - 1 ? n[i + 1] : void 0,
      a = s !== void 0 && /\p{L}/u.test(s),
      c = o !== void 0 && /\p{L}/u.test(o);
    if (a && c) r.push(h);else r.push(R(n, i) ? x : h);
  } else r.push(n[i]);
  return r.join("");
}
function W(e, n, r, i = !1) {
  let s = i ? (a, c, u) => a.replaceAll(c, () => u) : (a, c, u) => a.replace(c, () => u);
  if (r !== "") return s(e, n, r);
  return !n.endsWith(`
`) && e.includes(n + `
`) ? s(e, n + `
`, r) : s(e, n, r);
}
function RPt({
  filePath: filePath,
  fileContents: fileContents,
  oldString: r,
  newString: i,
  replaceAll: s = !1
}) {
  return qkr({
    filePath: filePath,
    fileContents: fileContents,
    edits: [{
      old_string: r,
      new_string: i,
      replace_all: s
    }]
  });
}
function qkr({
  filePath: filePath_2,
  fileContents: n,
  edits: edits
}) {
  if (S(n, edits)) return {
    patch: XW({
      filePath: filePath_2,
      fileContents: n,
      edits: [{
        old_string: n,
        new_string: n,
        replace_all: !1
      }]
    }),
    updatedFile: ""
  };
  let updatedFile = F(n, edits);
  return {
    patch: Oke({
      filePath: filePath_2,
      oldContent: Y0(n),
      newContent: Y0(updatedFile)
    }),
    updatedFile: updatedFile
  };
}
function S(e, n) {
  return !e && n.length === 1 && n[0] !== void 0 && n[0].old_string === "" && n[0].new_string === "";
}
function F(e, n) {
  if (S(e, n)) return "";
  let r = e,
    i = [];
  for (let s of n) {
    let o = s.old_string.replace(/\n+$/, "");
    for (let c of i) if (o !== "" && c.includes(o)) throw Error("Cannot edit file: old_string is a substring of a new_string from a previous edit.");
    let a = r;
    if (r = s.old_string === "" ? s.new_string : W(r, s.old_string, s.new_string, s.replace_all), r === a) throw new uJ("String not found in file. Failed to apply edit.");
    i.push(s.new_string);
  }
  if (r === e) throw Error("Original and edited file match exactly. Failed to apply edit.");
  return r;
}
var E = 8192;
function Myo(e, n) {
  let r = g3("file.txt", "file.txt", e, n, void 0, void 0, {
    context: 8,
    timeout: timeout
  });
  if (!r) return "";
  let tabAwareSeparator = K6e(),
    s = r.hunks.map(item => ({
      startLine: item.oldStart,
      content: item.lines.filter(item => !item.startsWith("-") && !item.startsWith("\\")).map(item => item.slice(1)).join(`
`),
      tabAwareSeparator: tabAwareSeparator
    })).map(umn).join(`
...
`);
  if (s.length <= E) return s;
  let o = s.lastIndexOf(`
`, E),
    a = o > 0 ? s.slice(0, o) : s.slice(0, E),
    c = 1,
    u = 1,
    d = Gt(s, `
`, a.length + c) + u;
  return `${a}

... [${d} lines truncated] ...`;
}
function Dyo(e) {
  return e.map(item => {
    let r = [],
      i = [];
    for (let s of item.lines) if (s.startsWith(" ")) r.push(s.slice(1)), i.push(s.slice(1));else if (s.startsWith("-")) r.push(s.slice(1));else if (s.startsWith("+")) i.push(s.slice(1));
    return {
      old_string: r.join(`
`),
      new_string: i.join(`
`),
      replace_all: !1
    };
  });
}
function c$n({
  file_path: file_path,
  edits: edits_2
}) {
  if (edits_2.length === 0) return {
    file_path: file_path,
    edits: edits_2
  };
  let r = Fqe(file_path);
  try {
    let i = Ye(file_path);
    if ((Dn(file_path) || Dn(i)) && !(kl(file_path) || kl(i)) || Gh(file_path) || Gh(i) || Vg(file_path) || Vg(i)) return {
      file_path: file_path,
      edits: edits_2
    };
    let s = m(i);
    return {
      file_path: file_path,
      edits: edits_2.map(({
        old_string: old_string,
        new_string: new_string,
        replace_all: replace_all
      }) => {
        let new_string_2 = r ? new_string : $qe(new_string);
        if (s.includes(old_string)) return {
          old_string: old_string,
          new_string: new_string_2,
          replace_all: replace_all
        };
        let {
          result: f,
          appliedReplacements: appliedReplacements_2
        } = l$n(old_string);
        if (s.includes(f)) {
          let new_string_3 = new_string_2;
          for (let {
            from: g,
            to: to_2
          } of appliedReplacements_2) new_string_3 = new_string_3.replaceAll(g, to_2);
          return {
            old_string: f,
            new_string: new_string_3,
            replace_all: replace_all
          };
        }
        return {
          old_string: old_string,
          new_string: new_string_2,
          replace_all: replace_all
        };
      })
    };
  } catch (error) {
    if (!B(error)) t(`Failed to read ${file_path} for edit normalization: ${error instanceof Error ? error.message : String(error)}`, {
      level: "error"
    });
  }
  return {
    file_path: file_path,
    edits: edits_2
  };
}
function Q(e, n, r) {
  if (e.length === n.length && e.every((item, index) => {
    let f = n[index];
    return f !== void 0 && item.old_string === f.old_string && item.new_string === f.new_string && item.replace_all === f.replace_all;
  })) return !0;
  let i = null,
    s = null,
    o = null,
    a = null;
  try {
    i = F(r, e);
  } catch (error) {
    s = l(error);
  }
  try {
    o = F(r, n);
  } catch (error) {
    a = l(error);
  }
  if (s !== null && a !== null) return s === a;
  if (s !== null || a !== null) return !1;
  return i === o;
}
function Lyo(e, n) {
  if (e.file_path !== n.file_path) return !1;
  if (e.edits.length === n.edits.length && e.edits.every((item, index) => {
    let o = n.edits[index];
    return o !== void 0 && item.old_string === o.old_string && item.new_string === o.new_string && item.replace_all === o.replace_all;
  })) return !0;
  let r = "";
  if ((!Dn(e.file_path) || kl(e.file_path)) && !Gh(e.file_path) && !Vg(e.file_path) && !Vg(P(e.file_path))) try {
    r = m(e.file_path);
  } catch (error) {
    if (!B(error)) throw error;
  }
  return Q(e.edits, n.edits, r);
}
export { Fqe, $qe, l$n, Iyo, Oyo, Ike, Uqe, RPt, qkr, Myo, Dyo, c$n, Lyo };