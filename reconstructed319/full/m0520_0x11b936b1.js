// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  WX
} from "B:/~BUN/root/chunk-ajvcvya3.js";
import {
  d,
  wr,
  WH
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  or,
  yS,
  lb,
  ad
} from "B:/~BUN/root/chunk-h4acfc9y.js";
import {
  H
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  t,
  ie
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Qo,
  Dt
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  mt
} from "B:/~BUN/root/chunk-d10hhz4p.js";
import {
  Sna,
  Lqe
} from "B:/~BUN/root/chunk-5xx1vfdh.js";
import {
  Y3
} from "B:/~BUN/root/chunk-9kvvd0hy.js";
import {
  Dgt
} from "B:/~BUN/root/chunk-hevmq1yj.js";
import {
  Lmr,
  Cye,
  fZ
} from "B:/~BUN/root/chunk-w0kge9aq.js";
import {
  u_e
} from "B:/~BUN/root/chunk-pp5rqp7s.js";
import {
  Uqe,
  lme
} from "B:/~BUN/root/chunk-x3gsqe09.js";
import {
  lu
} from "B:/~BUN/root/chunk-xfdxa8bd.js";
import {
  resolve as B
} from "path";
var O = 1000,
  P = 16777216;
class I {
  cache;
  constructor(e = O, n = P) {
    this.cache = new lu({
      max: e,
      maxSize: n,
      sizeCalculation: (r) => Math.max(1, r.content.length)
    })
  }
  readFile(e) {
    let n = ie(),
      r;
    try {
      r = n.statSync(e)
    } catch (c) {
      throw this.cache.delete(e), c
    }
    if (!r.isFile()) this.cache.delete(e), Uqe(r, e, void 0);
    let s = this.cache.get(e);
    if (s && s.mtime === r.mtimeMs) return {
      content: s.content,
      encoding: s.encoding
    };
    let o = Sna(e),
      l = n.readFileSync(e, {
        encoding: o
      }).replaceAll(`\r
`, `
`);
    return this.cache.set(e, {
      content: l,
      encoding: o,
      mtime: r.mtimeMs
    }), {
      content: l,
      encoding: o
    }
  }
  getStats() {
    return {
      size: this.cache.size,
      totalChars: this.cache.calculatedSize,
      entries: Array.from(this.cache.keys())
    }
  }
}
var z = new W(() => new I);

function E(e) {
  let {
    content: n
  } = z.of(H().host).readFile(e);
  return n
}
import {
  parse as k,
  resolve as Q
} from "path";

function Uso() {
  let e = i.CLAUDE_CODE_REMOTE_MEMORY_DIR;
  if (!e) return;
  let n = Q(e);
  return n === k(n).root ? void 0 : n
}

function bIt(e) {
  return /\.(md|mdx)$/i.test(e)
}

function aut(e) {
  let n = e.split(/(\r\n|\n|\r)/),
    r = "";
  for (let s = 0; s < n.length; s++) {
    let o = n[s];
    if (o !== void 0)
      if (s % 2 === 0) r += o.replace(/\s+$/, "");
      else r += o
  }
  return r
}
var j = {
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

function Imr(e) {
  let n = e,
    r = [];
  for (let [s, o] of Object.entries(j)) {
    let l = n;
    if (n = n.replaceAll(s, o), l !== n) r.push({
      from: s,
      to: o
    })
  }
  return {
    result: n,
    appliedReplacements: r
  }
}
var A = "\u2018",
  m = "\u2019",
  y = "\u201C",
  T = "\u201D";

function b(e) {
  return e.replaceAll(A, "'").replaceAll(m, "'").replaceAll(y, '"').replaceAll(T, '"')
}
var R = /\\u[0-9a-fA-F]{4}/,
  w = /[\u0080-\uffff]/;

function F(e) {
  return e.replace(/(\\\\)|\\u([0-9a-fA-F]{4})/g, (n, r, s) => r !== void 0 ? n : String.fromCharCode(parseInt(s, 16)))
}

function X(e) {
  let n = "";
  for (let r = 0; r < e.length; r++) {
    let s = e.charCodeAt(r);
    if (s >= 128) {
      n += "\\\\u";
      for (let o of s.toString(16).padStart(4, "0")) n += o >= "a" ? `[${o}${o.toUpperCase()}]` : o
    } else n += Qo(e[r])
  }
  return n
}

function L(e) {
  let n = 0;
  for (let r = 0; r < e.length; r++)
    if (e.charCodeAt(r) >= 128) n++;
  return e.length + 5 * n
}

function C(e, n) {
  let r = 0;
  while (e[n - 1 - r] === "\\") r++;
  return r
}

function N(e, n) {
  if (C(e, e.length) % 2 === 1) return null;
  let r = e[0] === "\\" ? [0] : [],
    s = 0;
  for (let l = 0; l < e.length; l++)
    if (e.charCodeAt(l) >= 128) r.push(s), s += 6;
    else s += 1;
  let o = X(e);
  try {
    let l = new RegExp(o, "g");
    for (let c = l.exec(n); c !== null; c = l.exec(n)) {
      let u = c.index;
      if (r.every((a) => C(n, u + a) % 2 === 0)) return n.indexOf(c[0]) === u ? c[0] : null;
      l.lastIndex = u + 1
    }
    return null
  } catch (l) {
    return t(`Edit: skipped the \\uXXXX-escape search; the regex engine refused a ${o.length}-character pattern (${l instanceof Error?l.name:"non-Error"})`), null
  }
}

function rRi(e) {
  return R.test(e) || w.test(e)
}

function Mmr(e, n, r) {
  if (e === n) return r;
  if (w.test(e) && L(e) === n.length && N(e, n) !== null) {
    let s = new Map,
      o = 0,
      l = 0;
    for (let c = 0, u = 0; c < e.length; c++) {
      let a = e.charCodeAt(c);
      if (a >= 128) {
        let f = n.slice(u + 2, u + 6);
        s.set(a, f);
        for (let p of f)
          if (p >= "a" && p <= "f") l++;
          else if (p >= "A" && p <= "F") o++;
        u += 6
      } else u += 1
    }
    return r.replace(/[\u0080-\uffff]/g, (c) => {
      let u = c.charCodeAt(0),
        a = s.get(u);
      if (a !== void 0) return "\\u" + a;
      let f = u.toString(16).padStart(4, "0");
      return "\\u" + (o > l ? f.toUpperCase() : f)
    })
  }
  if (R.test(e) && F(e) === n) return F(r);
  return r
}

function hWe(e, n) {
  if (e.includes(n)) return n;
  let r = b(n),
    o = b(e).indexOf(r);
  if (o !== -1) return e.substring(o, o + n.length);
  if (R.test(n)) {
    let l = F(n);
    if (l !== n && e.includes(l)) return l
  }
  if (w.test(n)) {
    if (L(n) > e.length || !e.includes("\\u")) return null;
    return N(n, e)
  }
  return null
}

function SIt(e, n, r) {
  if (e === n) return r;
  let s = n.includes(y) || n.includes(T),
    o = n.includes(A) || n.includes(m);
  if (!s && !o) return r;
  let l = r;
  if (s) l = Y(l);
  if (o) l = G(l);
  return l
}

function M(e, n) {
  if (n === 0) return !0;
  let r = e[n - 1];
  return r === " " || r === "\t" || r === `
` || r === "\r" || r === "(" || r === "[" || r === "{" || r === "\u2014" || r === "\u2013"
}

function Y(e) {
  let n = [...e],
    r = [];
  for (let s = 0; s < n.length; s++)
    if (n[s] === '"') r.push(M(n, s) ? y : T);
    else r.push(n[s]);
  return r.join("")
}

function G(e) {
  let n = [...e],
    r = [];
  for (let s = 0; s < n.length; s++)
    if (n[s] === "'") {
      let o = s > 0 ? n[s - 1] : void 0,
        l = s < n.length - 1 ? n[s + 1] : void 0,
        c = o !== void 0 && /\p{L}/u.test(o),
        u = l !== void 0 && /\p{L}/u.test(l);
      if (c && u) r.push(m);
      else r.push(M(n, s) ? A : m)
    } else r.push(n[s]);
  return r.join("")
}

function q(e, n, r, s = !1) {
  let o = s ? (c, u, a) => c.replaceAll(u, () => a) : (c, u, a) => c.replace(u, () => a);
  if (r !== "") return o(e, n, r);
  return !n.endsWith(`
`) && e.includes(n + `
`) ? o(e, n + `
`, r) : o(e, n, r)
}

function gPn({
  filePath: e,
  fileContents: n,
  oldString: r,
  newString: s,
  replaceAll: o = !1,
  isForToolResult: l
}) {
  return Gas({
    filePath: e,
    fileContents: n,
    edits: [{
      old_string: r,
      new_string: s,
      replace_all: o
    }],
    isForToolResult: l
  })
}

function Gas({
  filePath: e,
  fileContents: n,
  edits: r,
  isForToolResult: s
}) {
  if (S(n, r)) return {
    patch: fZ({
      filePath: e,
      fileContents: n,
      edits: [{
        old_string: n,
        new_string: n,
        replace_all: !1
      }]
    }),
    updatedFile: ""
  };
  let o = x(n, r);
  return {
    patch: Cye({
      filePath: e,
      oldContent: n,
      newContent: o,
      convertTabs: !0,
      isForToolResult: s
    }),
    updatedFile: o
  }
}

function S(e, n) {
  return !e && n.length === 1 && n[0] !== void 0 && n[0].old_string === "" && n[0].new_string === ""
}

function x(e, n) {
  if (S(e, n)) return "";
  let r = e,
    s = [];
  for (let o of n) {
    let l = o.old_string.replace(/\n+$/, "");
    for (let u of s)
      if (l !== "" && u.includes(l)) throw Error("Cannot edit file: old_string is a substring of a new_string from a previous edit.");
    let c = r;
    if (r = o.old_string === "" ? o.new_string : q(r, o.old_string, o.new_string, o.replace_all), r === c) throw new Y3("String not found in file. Failed to apply edit.");
    s.push(o.new_string)
  }
  if (r === e) throw Error("Original and edited file match exactly. Failed to apply edit.");
  return r
}
var _ = 8192;

function oRi(e, n) {
  let r = WX("file.txt", "file.txt", e, n, void 0, void 0, {
    context: 8,
    timeout: Lmr
  });
  if (!r) return "";
  let s = Dgt(),
    o = r.hunks.map((h) => ({
      startLine: h.oldStart,
      content: h.lines.filter((g) => !g.startsWith("-") && !g.startsWith("\\")).map((g) => g.slice(1)).join(`
`),
      tabAwareSeparator: s
    })).map(Lqe).join(`
...
`);
  if (o.length <= _) return o;
  let l = o.lastIndexOf(`
`, _),
    c = l > 0 ? o.slice(0, l) : o.slice(0, _),
    u = 1,
    a = 1,
    p = Dt(o, `
`, c.length + u) + a;
  return `${c}

... [${p} lines truncated] ...`
}

function sRi(e) {
  return e.map((n) => {
    let r = [],
      s = [];
    for (let o of n.lines)
      if (o.startsWith(" ")) r.push(o.slice(1)), s.push(o.slice(1));
      else if (o.startsWith("-")) r.push(o.slice(1));
    else if (o.startsWith("+")) s.push(o.slice(1));
    return {
      old_string: r.join(`
`),
      new_string: s.join(`
`),
      replace_all: !1
    }
  })
}

function U(e) {
  return wr(e) || WH(e) || lme(e)
}

function Bso({
  file_path: e,
  edits: n
}) {
  if (n.length === 0) return {
    file_path: e,
    edits: n
  };
  let r = bIt(e);
  try {
    let s = mt(e);
    if ((or(e) || or(s)) && !(ad(e) || ad(s)) || yS(e) || yS(s) || lb(e) || lb(s)) return {
      file_path: e,
      edits: n
    };
    let o = Uso();
    if (o !== void 0 && u_e(s, o) && n.every((c) => Imr(c.old_string).appliedReplacements.length === 0)) return {
      file_path: e,
      edits: r ? n : n.map((c) => c.old_string === "" ? c : {
        ...c,
        new_string: aut(c.new_string)
      })
    };
    let l = E(s);
    return {
      file_path: e,
      edits: n.map(({
        old_string: c,
        new_string: u,
        replace_all: a
      }) => {
        let f = r ? u : aut(u);
        if (l.includes(c)) return {
          old_string: c,
          new_string: f,
          replace_all: a
        };
        let {
          result: p,
          appliedReplacements: h
        } = Imr(c);
        if (l.includes(p)) {
          let g = f;
          for (let {
              from: D,
              to: v
            }
            of h) g = g.replaceAll(D, v);
          return {
            old_string: p,
            new_string: g,
            replace_all: a
          }
        }
        return {
          old_string: c,
          new_string: f,
          replace_all: a
        }
      })
    }
  } catch (s) {
    if (!U(s)) t(`Failed to read ${e} for edit normalization: ${s instanceof Error?s.message:String(s)}`, {
      level: "error"
    })
  }
  return {
    file_path: e,
    edits: n
  }
}

function K(e, n, r) {
  let s = null,
    o = null,
    l = null,
    c = null;
  try {
    s = x(r, e)
  } catch (u) {
    o = d(u)
  }
  try {
    l = x(r, n)
  } catch (u) {
    c = d(u)
  }
  if (o !== null && c !== null) return o === c;
  if (o !== null || c !== null) return !1;
  return s === l
}

function Vas(e, n) {
  return e.file_path === n.file_path && e.edits.length === n.edits.length && e.edits.every((r, s) => {
    let o = n.edits[s];
    return o !== void 0 && r.old_string === o.old_string && r.new_string === o.new_string && r.replace_all === o.replace_all
  })
}

function iRi(e, n) {
  if (e.file_path !== n.file_path) return !1;
  if (Vas(e, n)) return !0;
  let r = "";
  if ((!or(e.file_path) || ad(e.file_path)) && !yS(e.file_path) && !lb(e.file_path) && !lb(B(e.file_path))) try {
    r = E(e.file_path)
  } catch (s) {
    if (!U(s)) throw s
  }
  return K(e.edits, n.edits, r)
}
export {
  Uso,
  bIt,
  aut,
  Imr,
  rRi,
  Mmr,
  hWe,
  SIt,
  gPn,
  Gas,
  oRi,
  sRi,
  Bso,
  Vas,
  iRi
};
