// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  _
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  P,
  KA
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  cse,
  G2,
  td
} from "B:/~BUN/root/chunk-j05gjqgd.js";
import {
  Ahs
} from "B:/~BUN/root/chunk-zwf5p7y7.js";
import {
  jg
} from "B:/~BUN/root/chunk-28zr9ymz.js";
import {
  basename as l
} from "path";
var Mnr = 1024,
  B3o = 64,
  j3o = ["claude", "anthropic"],
  o = 200,
  u = /[^A-Za-z0-9_ .\-/(),\u0080-\uFFFF]/,
  h = /(?:^|\/)(?:__MACOSX\/|(?:\.DS_Store|Thumbs\.db|desktop\.ini)$)/,
  f = /[<\uFE64\uFF1C]/,
  p = /[>\uFE65\uFF1E]/;

function W3o(t) {
  let e = t.search(f);
  return e !== -1 && p.test(t.slice(e + 2))
}

function Sci(t) {
  let e = l(t);
  return e === "SKILL.md" || e.toLowerCase().endsWith(".skill")
}

function wci(t, e) {
  if (l(t) === "SKILL.md") return d(e);
  let n = [],
    a = 0,
    s;
  try {
    [s] = Object.values(Ahs(e, ({
      name: r,
      originalSize: c
    }) => {
      if (r.endsWith("/") || h.test(r)) return !1;
      if (n.push(r), !/^(?:[^/]+\/)?SKILL\.md$/.test(r)) return !1;
      return a++, a === 1 && c <= jg
    }))
  } catch {
    return
  }
  if (n.length > o) return {
    rule: "too_many_files",
    why: `it holds ${n.length} files, and a saved skill can hold ${o}`
  };
  let i = n.flatMap((r) => u.exec(r) ?? []);
  if (i[0] !== void 0) return {
    rule: "path_character",
    why: `${i.length} of its file ${P(i.length,"paths has","paths have")} a character that a saved skill's paths cannot hold, such as ${_(i[0])}; they can hold letters, digits, spaces, _ . - / ( ) and the comma`
  };
  return s !== void 0 && a === 1 ? d(s) : void 0
}

function d(t) {
  let [, e] = G2.exec(Buffer.from(t.subarray(0, cse)).toString("utf8")) ?? [];
  if (e === void 0 || e.includes("---")) return;
  let {
    frontmatter: n
  } = td(`---
${e}
---
`, void 0, {
    untrusted: !0
  }), a = typeof n.name === "string" ? n.name.toLowerCase() : "";
  if (j3o.some((r) => a.includes(r))) return {
    rule: "reserved_word_in_name",
    why: `the name in its SKILL.md header contains "claude" or "anthropic", which a saved skill's name cannot include`
  };
  if (typeof n.description !== "string") return;
  let s = n.description.trim(),
    i = KA(s);
  if (i > Mnr) return {
    rule: "description_too_long",
    why: `the description in its SKILL.md header has ${i} characters, and a saved skill's description can hold ${Mnr}`
  };
  return W3o(s) ? {
    rule: "description_has_xml_tag",
    why: "the description in its SKILL.md header contains angle brackets, which a saved skill's description cannot include"
  } : void 0
}
export {
  Mnr,
  B3o,
  j3o,
  W3o,
  Sci,
  wci
};
