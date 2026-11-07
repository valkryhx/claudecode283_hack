// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { d, k, K } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { th, O$e } from "B:/~BUN/root/chunk-h4acfc9y.js";
import { t, ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { P, Wn, Il, Yr } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { _h } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { mE, xNn } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { d7 } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { lbt, Van, NBt, Rzn, jie, FAe, Wie, dLr, bT, $Ae, Fzn, uLr, eln, eHs, tln, IRo, UU, nln, Gie, tHs, fLr, hbt, $Ro, URo, gLr, BRo, oHs, sHs, oln, jKe, Bzn, dj, s0, sln, Pm, VJ, PZi, a1t } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { dV, sPr, Ngt, PHt } from "B:/~BUN/root/chunk-zstr1969.js";
import { gs } from "B:/~BUN/root/chunk-fkr27nhj.js";
import { Fr } from "B:/~BUN/root/chunk-ge2k1jpp.js";
import { Obo, Kbo } from "B:/~BUN/root/chunk-n98vg3jf.js";
import { Ae } from "B:/~BUN/root/chunk-eds8xkh8.js";
import { Nve, $ve, Baa, Igi, Mgi, $Qo, prs, uAn, q8t as relPath_3, Fro, Hro, Y8t, $ro, n9t } from "B:/~BUN/root/chunk-27h4st9h.js";
import { Z_ } from "B:/~BUN/root/chunk-esnm3r09.js";
import { hze, jms } from "B:/~BUN/root/chunk-63btkzab.js";
import { m1, gA, HW, j6 } from "B:/~BUN/root/chunk-k5xd4a86.js";
import { Dke } from "B:/~BUN/root/chunk-qcxpj564.js";
import { iBe } from "B:/~BUN/root/chunk-59e03kdq.js";
import { pni, nit } from "B:/~BUN/root/chunk-dsg3ep96.js";
import { D } from "B:/~BUN/root/chunk-8mqsat26.js";
import { o, C, u, me, gl } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { U, L } from "B:/~BUN/root/chunk-5ha2avah.js";
import { lstat as Fn, readdir as Le, readFile as Ie, stat as bt } from "fs/promises";
import * as y from "path";
function ge(e) {
  let n = /@ts-/i.test(e),
    s = /\u2500\u2500 from plugin |\/\/\s*Skipped:/.test(e);
  return n ? "@ts-" : s ? "framing" : void 0;
}
var j = (e, n, ...s) => e?.kind === n && s.includes(e.text);
function Be(e) {
  let n = j(e, "punct", "{", "(", "["),
    s = j(e, "punct", "}", ")", "]");
  return n ? 1 : s ? -1 : 0;
}
var V = (kind, text, line) => ({
  kind: kind,
  text: text,
  line: line
});
var It = (e, n, s) => {
  let r = e.indexOf("*/", n + 2),
    a = r !== -1,
    end = a ? r + 2 : e.length,
    l = e.slice(n, end),
    c = l.match(/\r\n|[\n\r\u2028\u2029]/g),
    line_2 = s + (c?.length ?? 0),
    p = a ? ge(l) : "/*",
    g = {
      end: end,
      line: line_2
    };
  return p ? {
    ...g,
    token: V("stray", p, s)
  } : g;
};
var Ft = (e, n, line_3) => {
  let r = e.slice(n).search(/[\n\r\u2028\u2029]/),
    end_2 = r === -1 ? e.length : n + r,
    i = e.slice(n, end_2).trim(),
    l = ge(i),
    token = i.startsWith("///") ? V("reference", i, line_3) : l ? V("stray", l, line_3) : void 0;
  return token ? {
    end: end_2,
    line: line_3,
    token: token
  } : {
    end: end_2,
    line: line_3
  };
};
var Ue = (e, n, line_4) => {
  let r = e[n] ?? "",
    a = "",
    end_3 = n + 1;
  while (end_3 < e.length) {
    let c = e[end_3] ?? "",
      m = c === "\\" && end_3 + 1 < e.length;
    if (c === r || c === `
` || c === "\r") break;
    a += m ? e[end_3 + 1] ?? "" : c, end_3 += m ? 2 : 1;
  }
  return e[end_3] === r ? {
    end: end_3 + 1,
    line: line_4,
    token: V("string", a, line_4)
  } : {
    end: end_3,
    line: line_4,
    token: V("stray", r, line_4)
  };
};
var Dt = (e, n, line_5) => {
  let end_4 = n + 1;
  while (end_4 < e.length && /[\w$]/.test(e[end_4] ?? "")) end_4 += 1;
  return {
    end: end_4,
    line: line_5,
    token: V("word", e.slice(n, end_4), line_5)
  };
};
function Ke(e, n) {
  let s = e[n] ?? "",
    r = e.slice(n, n + 2),
    a = {
      "//": Ft,
      "/*": It
    },
    i = {
      "'": Ue,
      '"': Ue
    },
    l = /[\w$]/.test(s);
  return a[r] ?? i[s] ?? (l ? Dt : void 0);
}
function Ge(e) {
  let n = [],
    s = [],
    r = 0,
    a = 0,
    i = 1,
    l = !1,
    c = 1;
  while (a < e.length) {
    let m = e[a] ?? "",
      p = m === `
` || m === "\u2028" || m === "\u2029" || m === "\r" && e[a + 1] !== `
`;
    if (l) {
      let T = m === "\\",
        w = m === "$" && e[a + 1] === "{",
        E = m === "`";
      if (w) s.push(r);
      l = !w && !E, i += p ? 1 : 0, a += T || w ? 2 : 1;
      continue;
    }
    let g = Ke(e, a),
      h = m === "`",
      v = m === "}" && s.length > 0 && r === s.at(-1),
      b = /[\t\n\v\f\r \u2028\u2029]/.test(m),
      R = m === "/" || m === "\\",
      S = /[!-~]/.test(m) && !R,
      x = !b && !S,
      f = R ? m : "other";
    if (g) {
      let T = g(e, a, i);
      if (T.token) n.push(T.token);
      a = T.end, i = T.line;
      continue;
    }
    if (h) n.push(V("string", "`", i)), c = i;
    if (x) n.push(V("stray", f, i));
    if (v) s.pop();
    if (!h && !v && !x && !b) n.push(V("punct", m, i)), r += m === "{" ? 1 : m === "}" ? -1 : 0;
    l = h || v, i += p ? 1 : 0, a += 1;
  }
  if (l || s.length > 0) n.push(V("stray", "`", c));
  return n;
}
var le = (e, n) => [e[n], e[n + 1], e[n + 2]];
function Ye(e, n) {
  let [s, r, a] = le(e, n),
    i = j(s, "word", "global") && j(r, "punct", "{"),
    l = j(s, "word", "module", "namespace") && r?.kind === "string",
    c = j(s, "word", "as") && j(r, "word", "namespace"),
    m = j(s, "word", "interface") && r?.kind === "word" && r.line !== s?.line,
    p = j(s, "word", "interface") && j(r, "word", "EngineInterface") && !j(a, "punct", "{");
  return i ? "`global { \u2026 }` augments the global scope" : l ? `a nested \`module '${r.text}'\` augments another module` : c ? "`as namespace` declares a global" : m ? "`interface` without its name on the same line" : p ? "`EngineInterface` takes members only, no `extends` or type parameters" : void 0;
}
function qe(e) {
  let n = [],
    s = 0;
  for (let [r, a] of e.entries()) {
    let l = s === 0 && j(e[r - 1], "word", "declare") && j(a, "word", "module") ? void 0 : Ye(e, r);
    if (s += Be(a), l !== void 0) n.push(`line ${a.line}: ${l}; the contract may only augment 'claude-code', at its top level`);
  }
  return n;
}
function ye(e, n, s) {
  let [r, a, i] = le(e, n);
  return r?.kind === "word" && r.text === "interface" && a?.kind === "word" && a.text === s && a.line === r.line && i?.kind === "punct" && i.text === "{";
}
function oe(e, n) {
  let s = 0;
  for (let r = n; r < e.length; r += 1) {
    let a = e[r];
    if (!(a?.kind === "punct" && (a.text === "{" || a.text === "}"))) continue;
    if (s += a.text === "{" ? 1 : -1, s === 0) return r;
  }
  return e.length;
}
function ce(e, n) {
  let s = [],
    r = oe(e, n),
    a = (c, ...m) => e[c]?.kind === "punct" && m.includes(e[c].text),
    i = 0,
    l = !0;
  for (let c = n + 1; c < r; c += 1) {
    let m = a(c, "{", "(", "["),
      p = a(c, "}", ")", "]"),
      g = i === 0 && a(c, ";", ","),
      h = (e[c - 1]?.line ?? 0) < (e[c]?.line ?? 0),
      b = e[c]?.text === "readonly" && e[c + 1]?.kind !== "punct" ? c + 1 : c,
      R = e[b],
      S = i === 0 && (l || h) && R !== void 0 && R.kind !== "punct" && a(b + 1, ":", "?", "(", "<");
    if (i += m ? 1 : p ? -1 : 0, l = g, S) s.push(R.text);
  }
  return s;
}
function Ze(e, n) {
  let s = new Set();
  for (let {
    start: start,
    end: end_5
  } of n) for (let i = start; i < end_5; i += 1) {
    if (!ye(e, i, "EngineInterface")) continue;
    let l = i + 2;
    for (let c of ce(e, l)) s.add(c);
  }
  return [...s];
}
var Je = e => e.split(/\r\n|[\n\r\u2028\u2029]/).flatMap((item, index) => /^\s*(?:\*\s*)?\/\/\s*(?:\u2500\u2500 from plugin |Skipped:)/.test(item) || /^\s*(?:\/\/\/?|\/?\*)\s*@ts-/i.test(item) ? [`line ${index + 1}: a line that would read as the roll-up's framing or a compiler pragma once copied; a contract carries neither`] : []);
function Xe(e) {
  let n = [],
    s = "reaches outside the file; the contract must be self-contained (no " + "import, export \u2026 from, require or reference)",
    r = 0;
  for (let [a, i] of e.entries()) {
    let l = e[a + 1],
      c = e[a + 2],
      m = f => i.kind === "word" && i.text === f,
      p = l?.kind === "punct" && l.text === "(" && c?.kind === "string",
      g = l?.kind === "string" || l?.kind === "word" || l?.kind === "punct" && (l.text === "{" || l.text === "*") || p,
      h = i.line !== r,
      v = i.kind === "reference",
      b = m("import") && g,
      R = m("from") && h && l?.kind === "string",
      S = m("require") && h && p,
      x = v ? "a triple-slash reference" : b ? "`import`" : R ? `\`from '${l.text}'\`` : S ? `\`require('${c.text}')\`` : void 0;
    if (x === void 0) continue;
    r = i.line, n.push(`line ${i.line}: ${x} ${s}`);
  }
  return n;
}
var Qe = /[\p{Cc}\p{Cf}\p{Cs}\p{Default_Ignorable_Code_Point}\u2028\u2029]/u;
var et = e => e.split(`
`).flatMap((item, index) => Qe.test(item.replace(/[\t\r]/g, "")) ? [`line ${index + 1}: an invisible or reordering character (control, bidi, zero-width, line separator); a contract holds none`] : []);
function tt(e) {
  try {
    sPr("contract.d.ts", e);
    return;
  } catch (error) {
    return `does not parse as TypeScript: ${d(error)}`;
  }
}
function nt(e, n) {
  let s = new Map(),
    r = (a, i) => e[a]?.kind === "punct" && e[a].text === i;
  for (let {
    start: start_2,
    end: end_6
  } of n) for (let l = start_2; l < end_6; l += 1) {
    if (!ye(e, l, "PluginState")) continue;
    let c = l + 2,
      m = oe(e, c),
      p = new Set(ce(e, c)),
      g = 0;
    for (let h = c + 1; h < m; h += 1) {
      let v = e[h];
      if (g === 0 && v !== void 0 && v.kind !== "punct" && p.has(v.text) && r(h + 1, ":") && r(h + 2, "{")) {
        let x = s.get(v.text) ?? new Set();
        for (let f of ce(e, h + 2)) x.add(f);
        s.set(v.text, x);
      }
      let R = r(h, "{") || r(h, "(") || r(h, "["),
        S = r(h, "}") || r(h, ")") || r(h, "]");
      g += Number(R) - Number(S);
    }
  }
  return [...s].map(([plugin, i]) => ({
    plugin: plugin,
    keys: [...i]
  }));
}
function st(e) {
  let n = sPr("contract.ts", e).replace(/^\s*export\s*\{\s*\};?\s*$/m, "").trim(),
    s = Wn(n);
  return n === "" ? [] : [`the contract holds code that would run (\`${s}\`); a contract is types only`];
}
var ot = e => e.flatMap((item, index) => {
  let r = e[index - 1],
    a = j(item, "word", "class", "const", "enum", "function", "let", "var"),
    i = r === void 0 || r.line < item.line || j(r, "punct", ";", "{", "}") || j(r, "word", "abstract", "async", "declare", "default", "export"),
    l = j(e[index + 1], "punct", ":", "?", "(", "<");
  return a && i && !l ? [`line ${item.line}: \`${item.text}\` declares something that runs; a contract holds types only`] : [];
});
var rt = {
  "/": "a `/` outside a comment or string (a regular expression or arithmetic)",
  "\\": "a `\\` outside a string",
  "`": "a template literal that never closes",
  "'": "a string that never closes on its line",
  '"': "a string that never closes on its line",
  "/*": "a comment that never closes",
  "@ts-": "a `@ts-` compiler pragma in a comment",
  framing: "a comment that imitates the roll-up's banner or trailer",
  other: "a character outside plain ASCII (or a control character) in code"
};
var at = e => e.filter(item => item.kind === "stray").map(item => `line ${item.line}: ` + (rt[item.text] ?? `\`${item.text}\``) + ": a type contract never holds one, so the check refuses it rather than read past it");
var pe = "claude-code";
function it(e, n) {
  let [s, r, a] = le(e, n),
    [,, i] = le(e, n + 1),
    l = j(s, "word", "declare") && j(r, "word", "module") && a?.kind === "string" && s?.line === r?.line && r?.line === a.line && j(i, "punct", "{"),
    c = l && a.text !== pe,
    m = j(s, "word", "declare") && !l,
    p = j(s, "word", "export") && !j(r, "word", "type", "interface"),
    g = j(s, "word", "abstract", "async", "default", "module", "namespace"),
    h = j(s, "word", "type", "interface") && !j(e[n - 1], "word", "export", "import");
  return c ? `augments module '${a.text}'; the contract may only augment '${pe}'` : m ? `\`declare\` at the top level opens only \`declare module '${pe}' { \u2026 }\`, its three words on one line` : p ? "`export` at the top level is followed by `type` or `interface`: a contract exports types and nothing else" : g ? `\`${s?.text}\` at the top level: a contract holds type exports and \`declare module '${pe}'\` blocks only` : h ? `a top-level \`${s?.text}\` without \`export\` would be global in a dependent's program; export it` : void 0;
}
function lt(e) {
  let problems = [],
    blocks = [],
    r = 0,
    a = 0;
  while (a < e.length) {
    let [i, l, c] = le(e, a),
      p = r === 0 && i?.kind === "word" ? it(e, a) : void 0,
      g = p === void 0 || p.startsWith("augments"),
      h = r === 0 && g && j(i, "word", "declare") && j(l, "word", "module") && c?.kind === "string",
      v = a + 2;
    if (r += Be(i), p !== void 0) problems.push(`line ${i?.line}: ${p}`);
    if (!h) {
      a += 1;
      continue;
    }
    let end_7 = oe(e, v + 1);
    if (end_7 === e.length) problems.push(`line ${i?.line}: \`declare module\` never closes: the text does not lex as a type contract, so the check refuses it`);
    blocks.push({
      start: v + 2,
      end: end_7
    }), a = end_7 + 1;
  }
  return {
    problems: problems,
    blocks: blocks
  };
}
function ct(e) {
  let n = tt(e);
  if (n !== void 0) return {
    problems: [n],
    nouns: [],
    state: []
  };
  let s = Ge(e),
    r = s.filter(item => item.kind !== "reference"),
    {
      problems: problems_2,
      blocks: blocks_2
    } = lt(r);
  return {
    problems: [...et(e), ...at(s), ...Je(e), ...Xe(s), ...problems_2, ...ot(r), ...st(e), ...qe(r)],
    nouns: Ze(r, blocks_2),
    state: nt(r, blocks_2)
  };
}
import { isAbsolute as yn, relative as kn, resolve as wn } from "path";
var de = (...e) => ({
  kind: "refused",
  problems: e.map(Yr)
});
async function ke(e, n, s) {
  let r = e ?? relPath_3,
    a = wn(n, r),
    i = kn(n, a);
  if (i.startsWith("..") || yn(i)) return de(`${r} leaves the plugin's folder`);
  let c = x => de(`${r}: ${Hro(s, a, x)}`),
    m = await Ngt(a, n, s).then(x => x, x => e === void 0 && Fro(x) ? void 0 : c(x));
  if (m === void 0 || "kind" in m) return m;
  if (m.size > Y8t) return de(`${r} is over ${Y8t} bytes and was not read`);
  let text_2 = await $ro(m.real).then(x => x, c);
  if (typeof text_2 !== "string") return text_2;
  let {
    problems: problems_3,
    nouns: nouns,
    state: state
  } = ct(text_2);
  return problems_3.length === 0 ? {
    kind: "read",
    text: text_2,
    nouns: nouns,
    state: state
  } : de(...problems_3);
}
function xn({
  names: names,
  owner: owner,
  declared: declared,
  others: others,
  contract: contract,
  refusal: refusal
}) {
  let l = new Map();
  for (let {
    plugin: plugin_2,
    keys: keys
  } of [...declared, ...(others ?? [])]) {
    let h = l.get(plugin_2) ?? new Set();
    keys.forEach(item => h.add(item)), l.set(plugin_2, h);
  }
  let problems_4 = [],
    m = new Set();
  for (let {
    plugin: plugin_3,
    key: key
  } of names.writes) if (plugin_3 !== owner) problems_4.push(`$.state.set refers to ${PHt({
    plugin: plugin_3,
    key: key
  })}, which ${plugin_3} owns: only a value's owner writes it (to change what is written, hook ${plugin_3}'s state.set and rewrite e.value)`);
  for (let {
    plugin: plugin_4,
    key: key_2
  } of [...names.reads, ...names.writes]) {
    let h = plugin_4 === owner,
      v = h || others !== void 0,
      b = PHt({
        plugin: plugin_4,
        key: key_2
      });
    if (!v) {
      m.add(b);
      continue;
    }
    let R = l.get(plugin_4)?.has(key_2) === !0,
      S = h ? contract ?? "the manifest's types contract" : "no enabled plugin's contract",
      x = refusal ?? `${S} must name it in interface PluginState { ${plugin_4}: { ${key_2}: ... } }`,
      f = h ? `${b} is not declared: ${x}` : `${b} is not declared: ${S} names it in PluginState`;
    if (!R && !problems_4.includes(f)) problems_4.push(f);
  }
  return {
    problems: problems_4,
    unchecked: [...m]
  };
}
var Ce = ["monitors", "themes"],
  Cn = [{
    key: "commands",
    recordPathProperty: "source"
  }, {
    key: "hooks",
    bareStringIndexed: !0,
    jsonFile: !0
  }, {
    key: "agents",
    bareStringIndexed: !0
  }, {
    key: "skills",
    bareStringIndexed: !0
  }, {
    key: "outputStyles"
  }, {
    key: "themes"
  }, {
    key: "monitors",
    jsonFile: !0
  }, {
    key: "lspServers",
    jsonFile: !0
  }, {
    key: "workflows",
    bareStringIndexed: !0
  }, {
    key: "types",
    bareStringOnly: !0
  }, {
    key: "mcpServers",
    jsonFile: !0,
    acceptsUrl: !0,
    missingConsequence: e => e.endsWith(".json") ? "The plugin loader skips a missing MCP servers file without reporting it, so none of its servers will load." : void 0
  }];
function dt(e) {
  let n = D(e.experimental) ? e.experimental : void 0,
    s = [];
  for (let spec of Cn) {
    let a = e[spec.key],
      i = spec.key,
      l = n !== void 0 && Ce.includes(spec.key) && Object.hasOwn(n, spec.key) ? n[spec.key] : void 0;
    if (l != null) a = l, i = `experimental.${spec.key}`;
    let c = [];
    if (spec.bareStringOnly) c.push([i, a]);else if (Array.isArray(a)) for (let [m, p] of a.entries()) c.push([`${i}[${m}]`, p]);else if (!D(a)) c.push([spec.bareStringIndexed ? `${i}[0]` : i, a]);else if (spec.recordPathProperty !== void 0) {
      for (let [m, p] of Object.entries(a)) if (D(p)) c.push([`${i}.${m}.${spec.recordPathProperty}`, p[spec.recordPathProperty]]);
    }
    for (let [field, relPath] of c) if (typeof relPath === "string" && !(spec.acceptsUrl && /^[a-z][a-z0-9+.-]*:\/\//i.test(relPath))) s.push({
      spec: spec,
      field: field,
      relPath: relPath
    });
  }
  return s;
}
var WKr = ["privacyPolicyUrl", "privacy_policy", "privacyPolicy"],
  SGo = ["supportUrl", "support", "bugs"],
  wGo = ["termsOfServiceUrl", "terms_of_service"],
  kGo = ["documentationUrl", "docs"],
  ut = new Set(["icon", "screenshots", "classification", ...WKr, ...SGo, ...wGo, ...kGo]);
var Rn = ["CLAUDE_PLUGIN_ROOT", "CLAUDE_PLUGIN_DATA", "CLAUDE_PROJECT_DIR"];
function mt(e) {
  let n = [];
  for (let [event, r] of Object.entries(e)) for (let a of r ?? []) for (let i of a.hooks) {
    if (i.type !== "command" || i.args !== void 0 || i.shell === "powershell") continue;
    let placeholders = En(i.command);
    if (placeholders.length > 0) n.push({
      event: event,
      command: i.command,
      placeholders: placeholders
    });
  }
  return n;
}
function En(e) {
  let n = new Set(),
    s = !1,
    r = !1;
  for (let a = 0; a < e.length; a++) {
    let i = e[a];
    if (!s && i === "\\") {
      a++;
      continue;
    }
    if (i === "'" && !r) {
      s = !s;
      continue;
    }
    if (i === '"' && !s) {
      r = !r;
      continue;
    }
    if (i !== "$" || s || r) continue;
    for (let l of Rn) {
      let c = e.startsWith(`{${l}}`, a + 1),
        m = e.startsWith(l, a + 1) && !/[A-Za-z0-9_]/.test(e.charAt(a + 1 + l.length));
      if (c || m) {
        n.add(`\${${l}}`);
        break;
      }
    }
  }
  return [...n];
}
import { resolve as jn } from "path";
import { resolve as ht } from "path";
import { sep as ft } from "path";
var Re = e => e.endsWith(ft) ? e.slice(0, -ft.length) : e;
var Jyn = (e, n) => Re(ht(e)) === Re(ht(n));
function we(e, n, s) {
  let {
    source: source
  } = e;
  return typeof source === "string" && Jyn(jn(n, source), s);
}
function zKr(e, n, s) {
  return typeof e.source === "string" ? we(e, n, s.root) : e.name === s.name;
}
import { readFile as _n } from "fs/promises";
async function GKr(e) {
  try {
    let n = Bzn().safeParse(ee(gs(await _n(e, {
      encoding: "utf-8"
    }))));
    return n.success ? n.data : void 0;
  } catch {
    return;
  }
}
var Dn = new Set(["category", "source", "tags", "strict", "id", "relevance", "headers", "headersHelper"]),
  vt = new Map([["publisher", "a VS Code/Cursor extension manifest"], ["engines", "a VS Code/Cursor extension manifest"], ["categories", "a VS Code/Cursor extension manifest"], ["icon", "a VS Code/Cursor extension manifest"], ["contributes", "a VS Code/Cursor extension manifest"], ["activationEvents", "a VS Code/Cursor extension manifest"], ["preview", "a VS Code/Cursor extension manifest"], ["main", "an npm package.json"], ["type", "an npm package.json"], ["files", "an npm package.json"], ["bin", "an npm package.json"], ["scripts", "an npm package.json"], ["private", "an npm package.json"], ["bugs", "an npm package.json"], ["contributors", "an npm package.json"], ["dxt_version", "an MCPB/DXT manifest"], ["mcpb_version", "an MCPB/DXT manifest"], ["user_config", "an MCPB/DXT manifest"], ["compatibility", "an MCPB/DXT manifest"], ["server", "an MCP server manifest"], ["tools", "an MCP server manifest"], ["prompts", "an MCP server manifest"], ["resources", "an MCP server manifest"], ["logo", "manifests across many tools"], ["readme", "manifests across many tools"], ["changelog", "manifests across many tools"], ["support", "manifests across many tools"], ["privacy_policy", "manifests across many tools"], ["privacy_policies", "manifests across many tools"], ["terms_of_service", "manifests across many tools"], ["_comment", "manifests across many tools"], ["$id", "a JSON Schema document"], ["$comment", "a JSON Schema document"]]),
  zn = new Map([["user_config", "userConfig"]]),
  $t = new Set(["themes", "monitors", "outputStyles", "evals", "syntaxHighlighting"]),
  Vn = new Set(prs.map(Z_));
function uni(e, n) {
  let noErrors = e.every(item => item.success),
    hasWarnings = e.some(item => item.warnings.length > 0);
  return {
    noErrors: noErrors,
    hasWarnings: hasWarnings,
    allSuccess: n.strict ? noErrors && !hasWarnings : noErrors
  };
}
function Z(e) {
  return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
}
function Hn(e) {
  let n = y.basename(e),
    s = y.basename(y.dirname(e));
  if (n === "plugin.json") return "plugin";
  if (n === "marketplace.json") return "marketplace";
  if (s === ".claude-plugin") return "plugin";
  return "unknown";
}
function fe(e) {
  return e.issues.map(item => ({
    path: item.path.join(".") || "root",
    message: item.message,
    code: item.code
  }));
}
function Bn(e, n) {
  if (vt.has(e)) return;
  let s = e.length <= 3 ? 1 : 2,
    r = e.toLowerCase(),
    a,
    i = s + 1;
  for (let l of n) {
    if (Math.abs(l.length - e.length) > s) continue;
    if (l.toLowerCase() === r) return l;
    let c = VJ(e, l, s);
    if (c < i) i = c, a = l;
  }
  return a;
}
function Un(e, n, s) {
  if (s?.has(e)) return `Field '${e}' belongs in the marketplace entry (marketplace.json), ` + "not plugin.json. It's harmless here but unused \u2014 Claude Code " + "ignores it at load time.";
  let r = Bn(e, n);
  if (r) return `Unknown field '${e}' \u2014 did you mean '${r}'? Claude Code ignores unrecognized fields at load time, so this field has no effect.`;
  let a = zn.get(e);
  if (a && n.has(a)) return `Field '${e}' is the cross-tool spelling of Claude Code's '${a}'. Rename it to '${a}' for Claude Code to read it (the option ` + "shapes differ slightly \u2014 re-run validate after renaming to check). " + "As-is, Claude Code ignores it at load time.";
  let i = vt.get(e);
  if (i) return `Unknown field '${e}' (commonly seen in ${i}). Claude Code ignores unrecognized fields at load time, so it's safe to keep.`;
  return `Unknown field '${e}'. Claude Code ignores it at load time.`;
}
function Q(e, n, s, r, a, i) {
  for (let l of Object.keys(e)) {
    if (n.has(l) || i?.has(l)) continue;
    r.push({
      path: s ? `${s}.${l}` : l,
      message: Un(l, n, a)
    });
  }
}
function Te(e) {
  let n = e.replace(/^[a-zA-Z]:/, "");
  return th(n) || O$e(n);
}
function Oe(e, path, s, r) {
  if (Te(e)) s.push({
    path: path,
    message: r ? `Path contains "..": ${e}. ${r}` : `Path contains ".." which could be a path traversal attempt: ${e}`
  });
}
function Kn(e) {
  let n = e.replace(/^(\.\.\/)+/, "");
  return `Plugin source paths are resolved relative to the marketplace root (the directory containing .claude-plugin/), not relative to marketplace.json. Use "${n !== e ? `./${n}` : "./plugins/my-plugin"}" instead of "${e}".`;
}
async function Qyn(e, n = {
  kind: "alone"
}) {
  return ie(await Gn(e, n));
}
async function Gn(e, n) {
  let filePath = y.resolve(e),
    r;
  try {
    r = await Ie(filePath, {
      encoding: "utf-8"
    });
  } catch (error) {
    let code = k(error),
      message;
    if (code === "ENOENT") message = `File not found: ${filePath}`;else if (code === "EISDIR") message = `Path is not a file: ${filePath}`;else message = `Failed to read file: ${d(error)}`;
    return {
      success: !1,
      errors: [{
        path: "file",
        message: message,
        code: code
      }],
      warnings: [],
      filePath: filePath,
      fileType: "plugin"
    };
  }
  return xt(filePath, r, n);
}
async function xt(e, n, s) {
  let errors = [],
    warnings = [],
    notes = [],
    l;
  try {
    l = ee(gs(n));
  } catch (error) {
    return {
      success: !1,
      errors: [{
        path: "json",
        message: `Invalid JSON syntax: ${d(error)}`
      }],
      warnings: [],
      filePath: e,
      fileType: "plugin"
    };
  }
  let c = Nve(l, "plugin-json", {
    pluginName: y.basename(y.dirname(y.dirname(e))),
    manifestPath: e
  });
  if (!c.ok) errors.push(...c.errors.map(item => ({
    ...item,
    path: item.path || "root"
  })));else warnings.push(...c.hookNotes.map(item => ({
    path: "hooks",
    message: `${item} at runtime`
  })));
  if (l && typeof l === "object") {
    let p = c.rawCandidate ?? l,
      g = y.dirname(e),
      h = y.basename(g) === ".claude-plugin" ? y.dirname(g) : g,
      v = async (b, path_2, S = "The runtime loader will report this as a load failure.") => {
        if (Oe(b, path_2, errors), Te(b) || y.isAbsolute(b) || /^[a-zA-Z]:/.test(b)) return;
        try {
          return await bt(y.resolve(h, b));
        } catch (error) {
          let f = k(error);
          errors.push({
            path: path_2,
            message: `Path not found: ${b}${f && f !== "ENOENT" ? ` (${f})` : ""}. ${S}`
          });
          return;
        }
      };
    for (let {
      spec: spec_2,
      field: R,
      relPath: relPath_2
    } of dt(p)) {
      let x = await v(relPath_2, R, spec_2.missingConsequence?.(relPath_2));
      if (x === void 0) continue;
      if (spec_2.key === "skills" && !x.isDirectory()) {
        let f = y.dirname(relPath_2),
          T = y.basename(relPath_2).toLowerCase() === "skill.md" ? f === "." ? " \u2014 point to the plugin root '.' instead" : ` \u2014 point to the parent directory '${f}' instead` : "";
        errors.push({
          path: R,
          message: `Path is a file; skills entries must be directories containing SKILL.md${T}: ${relPath_2}`
        });
      }
      if (spec_2.jsonFile && relPath_2.endsWith(".json") && x.isDirectory()) errors.push({
        path: R,
        message: `Path is a directory; ${spec_2.key} must point to a JSON file: ${relPath_2}`
      });
      if (spec_2.key === "types") {
        let f = yt(await ke(relPath_2, h, y.basename(h)), {
          relPath: relPath_2,
          field: R
        });
        errors.push(...f.errors), notes.push(...f.notes);
      }
    }
    if (p.types === void 0) {
      let b = await ke(void 0, h, y.basename(h));
      if (b?.kind === "read") notes.push(...yt(b, {
        relPath: relPath_3,
        field: "types"
      }).notes);
    }
    if (p.mcpServers !== void 0) {
      let b = Array.isArray(p.mcpServers) ? p.mcpServers : [p.mcpServers],
        R;
      for (let [S, x] of b.entries()) {
        let f = Array.isArray(p.mcpServers) ? `mcpServers[${S}]` : "mcpServers";
        if (D(x)) {
          R ??= await us(p, e);
          for (let [T, w] of Object.entries(x)) {
            let E = Rt(`${f}.${Ay(T, 64)}`, w, R(T));
            errors.push(...E.errors), warnings.push(...E.warnings);
          }
        }
      }
    }
  }
  if (D(l)) {
    let p = l,
      g = c.rawCandidate ?? p;
    if (Q(g, new Set(Object.keys(Gie().shape)), "", warnings, Dn, ut), "capabilities" in g) {
      let h = warnings.findIndex(item => item.path === "capabilities"),
        v = {
          path: "capabilities",
          message: "'capabilities' is no longer read: what a hooks module hooks and calls on $ is read from its source and listed under its hooks.json below. Delete the field."
        };
      if (h === -1) warnings.push(v);else warnings[h] = v;
    }
    for (let path_3 of Ce) if (path_3 in p) warnings.push({
      path: path_3,
      message: `'${path_3}' is an experimental component; declare it under 'experimental.${path_3}' instead of at the top level. Top-level still loads for now but will be removed in a future release.`
    });
    if ("experimental" in p) if (D(p.experimental)) {
      let experimental = p.experimental;
      Q(experimental, $t, "experimental", warnings);
    } else warnings.push({
      path: "experimental",
      message: `'experimental' must be an object containing component declarations; got ${Z(p.experimental)}. It will be ignored at load time.`
    });
    if ("metadata" in g && !D(g.metadata)) warnings.push({
      path: "metadata",
      message: `'metadata' must be a free-form object; got ${Z(g.metadata)}. It will be ignored at load time.`
    });
    if ("binaries" in p) if (D(p.binaries)) {
      let h = nln(p.binaries) ?? {},
        v = 0;
      for (let [R, S] of Object.entries(p.binaries)) {
        if (eln.test(R) && typeof S === "object" && S !== null && typeof S.sha256 === "string" && eHs.test(S.sha256)) {
          v++;
          continue;
        }
        if (!Object.hasOwn(h, R)) warnings.push({
          path: `binaries.${R}`,
          message: `Invalid binaries entry; it will be ignored at install time. The basename must match ${String(eln)} (lowercase, no leading or trailing dot) and the value must be an object with a 64-character lowercase-hex 'sha256'.`
        });
      }
      if (v > IRo) warnings.push({
        path: "binaries",
        message: `${v} valid binaries entries declared, but the install hook processes at most ${IRo}; the rest are dropped entirely.`
      });
      let b = Object.keys(h).length;
      if (b > tln) warnings.push({
        path: "binaries",
        message: `${b} valid binaries entries declared, but only the first ${tln} are fetched at install time; the rest are ignored. Reduce the count or split across plugins.`
      });
    } else warnings.push({
      path: "binaries",
      message: `'binaries' must be an object mapping basenames to { sha256 }; got ${Z(p.binaries)}. It will be ignored at install time.`
    });
  }
  let manifest = c.manifest;
  if (manifest) {
    let p = manifest;
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(p.name)) {
      let v = "Claude Code accepts it, but the";
      if (sln.test(p.name)) v = "Claude Code refuses a plugin with this name when it is loaded by path (such as --plugin-dir), and cannot install it from a marketplace that lists it under this name. The";else if (!dj(p.name)) v = "Claude Code cannot install it from a marketplace that lists it under this name, and the";
      warnings.push({
        path: "name",
        message: `Plugin name "${p.name}" is not kebab-case. ${v} Claude.ai marketplace sync requires kebab-case (lowercase letters, digits, and hyphens only, e.g., "my-plugin").` + ue(p.name)
      });
    }
    let h = s.kind === "alone" || s.kind === "entry" && s.entryName !== p.name ? nit(p.name) : void 0;
    if (h) (h.severity === "error" ? errors : warnings).push({
      path: "name",
      message: s.kind === "alone" ? `${h.message} ${pni}` : h.message
    });
    if (!p.version) warnings.push({
      path: "version",
      message: 'No version specified. Consider adding a version following semver (e.g., "1.0.0")'
    });
    if (!p.description) warnings.push({
      path: "description",
      message: "No description provided. Adding a description helps users understand what your plugin does"
    });
    if (!p.author) warnings.push({
      path: "author",
      message: "No author information provided. Consider adding author details for plugin attribution"
    });
  }
  return {
    success: errors.length === 0,
    errors: errors,
    warnings: warnings,
    filePath: e,
    fileType: "plugin",
    ...(notes.length > 0 && {
      notes: notes
    })
  };
}
var gt = /^[A-Za-z0-9][A-Za-z0-9._-]{0,127}$/,
  Yn = new Set(["org", "org-provisioned", "unknown"]),
  code_3 = "UNRECORDABLE_NAME",
  VKr = 'Each part of a plugin id (plugin@marketplace) may use only the letters a-z and A-Z, digits, ".", "_" and "-", and must start with a letter or digit.';
function ue(e) {
  return Ay(e, e.length) === e ? "" : " The name holds a character that is not shown here.";
}
async function Ee(e) {
  return ie(await qn(e));
}
async function qn(e) {
  let errors_2 = [],
    warnings_2 = [],
    filePath_2 = y.resolve(e),
    a;
  try {
    a = await Ie(filePath_2, {
      encoding: "utf-8"
    });
  } catch (error) {
    let code_2 = k(error),
      message_2;
    if (code_2 === "ENOENT") message_2 = `File not found: ${filePath_2}`;else if (code_2 === "EISDIR") message_2 = `Path is not a file: ${filePath_2}`;else message_2 = `Failed to read file: ${d(error)}`;
    return {
      success: !1,
      errors: [{
        path: "file",
        message: message_2,
        code: code_2
      }],
      warnings: [],
      filePath: filePath_2,
      fileType: "marketplace"
    };
  }
  let i;
  try {
    i = ee(gs(a));
  } catch (error) {
    return {
      success: !1,
      errors: [{
        path: "json",
        message: `Invalid JSON syntax: ${d(error)}`
      }],
      warnings: [],
      filePath: filePath_2,
      fileType: "marketplace"
    };
  }
  let l = [],
    c = D(i) && D(i.metadata) ? i.metadata.pluginRoot : void 0,
    m = oHs(c),
    p = D(i) && typeof i.name === "string" && Fzn(i.name);
  if (i && typeof i === "object") {
    let f = i;
    if (Array.isArray(f.plugins)) l = f.plugins, f.plugins.forEach((item, index) => {
      if (item && typeof item === "object" && "source" in item) {
        let source_2 = item.source;
        if (typeof source_2 === "string") Oe(source_2, `plugins[${index}].source`, errors_2, Kn(source_2));
        if (BRo(source_2) && m === void 0) errors_2.push({
          path: `plugins[${index}].source`,
          message: c === void 0 ? `Bare source name "${source_2}" requires metadata.pluginRoot. Use "./relative/path", or set metadata.pluginRoot (e.g. "./plugins") to allow bare names.` : typeof c === "string" ? `Bare source name "${source_2}" cannot resolve: metadata.pluginRoot ("${c}") must be a relative path inside the marketplace (e.g. "./plugins").` : `Bare source name "${source_2}" cannot resolve: metadata.pluginRoot must be a relative path inside the marketplace (e.g. "./plugins").`
        });
        if (source_2 && typeof source_2 === "object" && "path" in source_2 && typeof source_2.path === "string") Oe(source_2.path, `plugins[${index}].source.path`, errors_2);
      }
    });
  }
  let g = URo().extend({
      topic: o().min(1).max(64).optional(),
      signals: $Ro().extend({
        cli: C(o().min(1).max(64)).max(10).optional(),
        hosts: C(o().min(1).max(128).refine(f => /^[a-z0-9.-]+$/.test(f), "must be a lowercase bare hostname (no scheme, port, or path)")).max(20).optional(),
        filesRead: C(o().min(1).max(256).refine(f => !f.includes("\\"), 'must use forward slashes (e.g. "**/*.tf"), not backslashes')).max(10).optional(),
        manifestDeps: C(u({
          file: o().min(1).max(256).refine(fLr, "must be a valid regular expression"),
          pattern: o().min(1).max(256).refine(fLr, "must be a valid regular expression")
        })).min(1).max(10).optional(),
        cwd: C(o().min(1).max(256).refine(f => !f.includes("\\"), 'must use forward slashes (e.g. "Engine/Source/**"), not backslashes')).max(10).optional()
      }).refine(f => (f.cli?.length ?? 0) > 0 || (f.hosts?.length ?? 0) > 0 || (f.filesRead?.length ?? 0) > 0 || (f.manifestDeps?.length ?? 0) > 0 || (f.cwd?.length ?? 0) > 0, "must declare at least one signal (cli, hosts, filesRead, manifestDeps, or cwd)")
    }).optional(),
    h = gLr().extend({
      relevance: gl(f => D(f) ? f : void 0, g)
    }).refine(f => typeof f.source === "string" || f.source.source !== "unsupported", {
      message: "source.source: 'unsupported' is a parse-time placeholder and cannot be authored"
    }),
    b = jKe().extend({
      plugins: C(h),
      renames: me(o(), o().nullable()).optional()
    }).safeParse(oln(i));
  if (!b.success) errors_2.push(...fe(b.error));
  if (b.success && b.data.renames) {
    let f = new Set(b.data.plugins.map(item => item.name));
    for (let T of Object.keys(b.data.renames)) {
      let w = n9t(T, b.data.renames, f);
      if (w?.kind === "unresolved") errors_2.push({
        path: `renames.${T}`,
        message: `chain does not resolve (${w.reason}) \u2014 target must be a name in plugins[], a key in renames, or null`
      });else if (w?.kind === "renamed" && !s0().safeParse(`${w.to}@placeholder`).success) errors_2.push({
        path: `renames.${T}`,
        message: `target "${w.to}" is not a valid plugin name (PluginIdSchema)`
      });
    }
  }
  if (D(i)) {
    let f = i;
    if (Q(f, new Set(Object.keys(jKe().shape)), "", warnings_2), typeof f.name === "string" && f.name) {
      let w = dj(f.name);
      if (!w) errors_2.push({
        path: "name",
        code: code_3,
        message: `Claude Code cannot install plugins from marketplace "${Ay(f.name, 64)}". ${VKr} Change the marketplace's "name".` + ue(f.name)
      });
      if (Yn.has(f.name.toLowerCase())) warnings_2.push({
        path: "name",
        message: `Marketplace name "${f.name}" is reserved in Claude Desktop. Claude Code accepts it, but the Claude Desktop managed marketplace sync (allowedPluginMarketplaces) will reject the whole marketplace.`
      });else if (!gt.test(f.name)) warnings_2.push({
        path: "name",
        message: `Marketplace name "${f.name}" is not accepted by Claude Desktop (letters, digits, ".", "_", "-"; must start alphanumeric; max 128 chars). ` + (w ? "Claude Code accepts it, but the " : "The ") + "Claude Desktop managed marketplace sync (allowedPluginMarketplaces) will reject the whole marketplace." + ue(f.name)
      });
    }
    let metadata = f.metadata;
    if (D(metadata)) Q(metadata, new Set(Object.keys(jKe().shape.metadata.unwrap().shape)), "metadata", warnings_2);
    if (Array.isArray(f.plugins)) {
      let w = new Set(Object.keys(gLr().shape)),
        E = new Set(Object.keys(URo().shape)),
        _ = new Set(Object.keys($Ro().shape));
      f.plugins.forEach((item, index) => {
        if (!D(item)) return;
        let N = item;
        if (Q(N, w, `plugins[${index}]`, warnings_2), typeof N.name === "string" && N.name) {
          let H = dj(N.name);
          if (!H) errors_2.push({
            path: `plugins[${index}].name`,
            code: code_3,
            message: `Claude Code cannot install plugin "${Ay(N.name, 64)}". ${VKr} Change this entry's "name".` + ue(N.name)
          });
          if (!gt.test(N.name)) warnings_2.push({
            path: `plugins[${index}].name`,
            message: `Plugin name "${N.name}" is not accepted by Claude Desktop (letters, digits, ".", "_", "-"; must start alphanumeric; max 128 chars). ` + (H ? "Claude Code accepts it, but the " : "The ") + "Claude Desktop managed marketplace sync (allowedPluginMarketplaces) will drop this entry." + ue(N.name)
          });
          let X = p ? void 0 : nit(N.name);
          if (X) (X.severity === "error" ? errors_2 : warnings_2).push({
            path: `plugins[${index}].name`,
            message: X.message
          });
        }
        let experimental_2 = N.experimental;
        if (D(experimental_2)) Q(experimental_2, $t, `plugins[${index}].experimental`, warnings_2);else if (experimental_2 !== void 0) warnings_2.push({
          path: `plugins[${index}].experimental`,
          message: `'experimental' must be an object containing component declarations; got ${Z(experimental_2)}. It will be ignored at load time.`
        });
        let relevance = N.relevance;
        if (D(relevance)) {
          Q(relevance, E, `plugins[${index}].relevance`, warnings_2);
          let signals = relevance.signals;
          if (D(signals)) Q(signals, _, `plugins[${index}].relevance.signals`, warnings_2);
        } else if (relevance !== void 0) warnings_2.push({
          path: `plugins[${index}].relevance`,
          message: `'relevance' must be an object containing topic and signals; got ${Z(relevance)}. It will be ignored at load time.`
        });
        let metadata_2 = N.metadata;
        if (metadata_2 !== void 0 && !D(metadata_2)) warnings_2.push({
          path: `plugins[${index}].metadata`,
          message: `'metadata' must be a free-form object; got ${Z(metadata_2)}. It will be ignored at load time.`
        });
      });
    }
  }
  if (b.success) {
    let f = b.data;
    if (!f.plugins || f.plugins.length === 0) warnings_2.push({
      path: "plugins",
      message: "Marketplace has no plugins defined"
    });
    if (f.plugins) f.plugins.forEach((item, index) => {
      if (f.plugins.filter(O => O.name === item.name).length > 1) errors_2.push({
        path: `plugins[${index}].name`,
        message: `Duplicate plugin name "${item.name}" found in marketplace`
      });
      let _ = typeof item.source === "object" && item.source.source === "archive";
      if (_ && hze(item) && item.strict !== !1) errors_2.push({
        path: `plugins[${index}].headersHelper`,
        message: `Plugin "${Pm(item.name)}" sets headersHelper but is not "strict": false. An entry with headersHelper must inline its full manifest (strict: false, with commands/agents/hooks/mcpServers declared in the entry) so users can review what it ships before the command runs; Claude Code refuses to run the helper otherwise.`
      });
      if ((item.headers !== void 0 || hze(item)) && !_) warnings_2.push({
        path: `plugins[${index}].${hze(item) ? "headersHelper" : "headers"}`,
        message: `Plugin "${Pm(item.name)}" sets headers/headersHelper, which only apply to "archive" sources; they have no effect on this entry.`
      });else if (hze(item) && typeof item.source === "object" && item.source.source === "archive" && !item.source.sha256) warnings_2.push({
        path: `plugins[${index}].source.sha256`,
        message: `Plugin "${Pm(item.name)}" fetches its archive with a headersHelper but sets no sha256 pin. Consider pinning the digest so the bytes users install are exactly the ones you reviewed (omit it only if you rely on digest-versioned updates).`
      });
      for (let O of _ ? Object.keys(item.headers ?? {}) : []) if (jms(O)) warnings_2.push({
        path: `plugins[${index}].headers.${Pm(O)}`,
        message: `Header "${Pm(O)}" is a request-routing/identity header that catalog entries may not set; Claude Code drops it at download time.`
      });
    });
    if (!f.description && !f.metadata?.description) warnings_2.push({
      path: "description",
      message: "No marketplace description provided. Adding a description helps users understand what this marketplace offers"
    });
  }
  let R = gLr(),
    S = y.dirname(filePath_2),
    x = y.basename(S) === ".claude-plugin" ? y.dirname(S) : S;
  for (let [f, T] of l.entries()) {
    let w = R.safeParse(sHs(T, m));
    if (!w.success) continue;
    let E = w.data,
      source_3 = E.source;
    if (!hbt(source_3) || Te(source_3)) continue;
    let O = y.join(x, source_3),
      M = y.join(O, ".claude-plugin", "plugin.json"),
      N = y.relative(x, M),
      B = await gA(x, y.join(O, ".claude-plugin"));
    if (B === "not-a-directory") {
      errors_2.push({
        path: `plugins[${f}] plugin.json \u2192 file`,
        code: "ENOTDIR",
        message: `A path component of ${N} is not a directory, so the file cannot be read. The entry will fail to load at install time.`
      });
      continue;
    }
    if (B === "refused") {
      warnings_2.push({
        path: `plugins[${f}].source`,
        message: `Local source "${source_3}" is or traverses a symlink, so ${N} was not read \u2014 ` + "validation never follows one. Install dereferences symlinks that stay inside the marketplace, so this entry still loads. Validate the real path separately."
      });
      continue;
    }
    if (B !== "ok") continue;
    let z;
    try {
      z = await j6(M);
    } catch (error) {
      errors_2.push({
        path: `plugins[${f}] plugin.json \u2192 file`,
        message: `Failed to read ${N}: ${d(error)}`
      });
      continue;
    }
    if (z.kind === "refused" || z.kind === "too-large") {
      warnings_2.push({
        path: `plugins[${f}].source`,
        message: `${N} ${z.kind === "refused" ? "is a symlink or is not a regular file" : `is larger than ${UU} bytes`}, so it was not validated. Install reads it anyway. Validate it separately.`
      });
      continue;
    }
    if (z.kind === "absent") continue;
    let content = z.content;
    if (E.version) {
      let I;
      try {
        let W = ee(gs(content));
        if (typeof W.version === "string") I = W.version;
      } catch (error) {
        warnings_2.push({
          path: `plugins[${f}].source`,
          message: `Could not parse ${y.relative(x, M)} for version cross-check: ${d(error)}`
        });
      }
      if (I && I !== E.version) {
        let W = y.relative(x, M);
        warnings_2.push({
          path: `plugins[${f}].version`,
          message: `Entry declares version "${E.version}" but ${W} says "${I}". ` + "At install time, plugin.json wins (calculatePluginVersion precedence) \u2014 the entry version is silently ignored. " + `Update this entry to "${I}" to match.`
        });
      }
    }
    let H = ie(await xt(M, content, p ? {
        kind: "anthropic"
      } : {
        kind: "entry",
        entryName: E.name
      })),
      X = `plugins[${f}] plugin.json \u2192 `;
    for (let I of H.errors) errors_2.push({
      ...I,
      path: X + I.path
    });
    for (let I of H.warnings) warnings_2.push({
      ...I,
      path: X + I.path
    });
  }
  return {
    success: errors_2.length === 0,
    errors: errors_2,
    warnings: warnings_2,
    filePath: filePath_2,
    fileType: "marketplace"
  };
}
function Ay(e, n) {
  return Yr(Il(_h(e), n));
}
function ie(e) {
  return {
    ...e,
    errors: e.errors.map(item => ({
      ...item,
      path: Ay(item.path, 200),
      message: Ay(item.message, 1000)
    })),
    warnings: e.warnings.map(item => ({
      path: Ay(item.path, 200),
      message: Ay(item.message, 1000)
    })),
    ...(e.notes !== void 0 && {
      notes: e.notes.map(item => Ay(item, 1000))
    }),
    ...(e.gatingHooks !== void 0 && {
      gatingHooks: e.gatingHooks.map(item => ({
        module: Ay(item.module, 200),
        pattern: Ay(item.pattern, 200),
        hook: Ay(item.hook, 1000),
        hasCatch: item.hasCatch
      }))
    })
  };
}
function Zn(filePath_3, n, fileType, r) {
  let errors_3 = [],
    warnings_3 = [],
    l = r === "project" && fileType === "agent",
    c = gs(n).match(mE);
  if (!c) {
    if (!l) warnings_3.push({
      path: "frontmatter",
      message: "No frontmatter block found. Add YAML frontmatter between --- delimiters at the top of the file to set description and other metadata."
    });
    return {
      success: !0,
      errors: errors_3,
      warnings: warnings_3,
      filePath: filePath_3,
      fileType: fileType
    };
  }
  let m = xNn(c[1] || "");
  if (!m.ok) {
    let v = fileType !== "agent" ? `At runtime this ${fileType} loads with empty metadata (all frontmatter fields silently dropped).` : r === "project" ? "At runtime this agent does not load at all \u2014 with no frontmatter " + "name it is treated as a co-located reference document and skipped." : "At runtime this agent loads with its name taken from the filename and every other frontmatter field silently dropped.";
    return errors_3.push({
      path: "frontmatter",
      message: `YAML frontmatter failed to parse: ${Ay(m.error, 200)}. ` + v
    }), {
      success: !1,
      errors: errors_3,
      warnings: warnings_3,
      filePath: filePath_3,
      fileType: fileType
    };
  }
  let p = m.value;
  if (p !== null && !D(p)) return errors_3.push({
    path: "frontmatter",
    message: `Frontmatter must be a YAML mapping (key: value pairs), got ${Array.isArray(p) ? "an array" : typeof p}.`
  }), {
    success: !1,
    errors: errors_3,
    warnings: warnings_3,
    filePath: filePath_3,
    fileType: fileType
  };
  let g = p ?? {};
  if (g.description !== void 0) {
    let description = g.description;
    if (typeof description !== "string" && typeof description !== "number" && typeof description !== "boolean" && description !== null) errors_3.push({
      path: "description",
      message: `description must be a string, got ${Array.isArray(description) ? "array" : typeof description}. At runtime this value is dropped.`
    });
  } else if (!l || typeof g.name === "string") warnings_3.push({
    path: "description",
    message: `No description in frontmatter. A description helps users and Claude understand when to use this ${fileType}.`
  });
  if (g.name !== void 0 && g.name !== null && typeof g.name !== "string") errors_3.push({
    path: "name",
    message: `name must be a string, got ${typeof g.name}.`
  });
  let h = g["allowed-tools"];
  if (h !== void 0 && h !== null) {
    if (typeof h !== "string" && !Array.isArray(h)) errors_3.push({
      path: "allowed-tools",
      message: `allowed-tools must be a string or array of strings, got ${typeof h}.`
    });else if (Array.isArray(h) && h.some(item => typeof item !== "string")) errors_3.push({
      path: "allowed-tools",
      message: "allowed-tools array must contain only strings."
    });
  }
  if (fileType === "skill" || fileType === "command") {
    let v = !1;
    (R => {
      if (R == null || D(R)) return;
      v = !0, warnings_3.push({
        path: "metadata",
        message: `'metadata' must be a mapping (key: value pairs); got ${Array.isArray(R) ? "array" : typeof R}. It is dropped at load time.`
      });
    })(g.metadata);
  }
  if (fileType === "skill" || fileType === "command") {
    let shell = g.shell;
    if (shell !== void 0 && shell !== null) if (typeof shell !== "string") errors_3.push({
      path: "shell",
      message: `shell must be a string, got ${typeof shell}.`
    });else {
      let b = shell.trim().toLowerCase();
      if (b !== "bash" && b !== "powershell") errors_3.push({
        path: "shell",
        message: `shell must be 'bash' or 'powershell', got '${Ay(shell, 64)}'.`
      });
    }
  }
  return {
    success: errors_3.length === 0,
    errors: errors_3,
    warnings: warnings_3,
    filePath: filePath_3,
    fileType: fileType
  };
}
function Pe(e) {
  if (e === null || typeof e !== "object" || !("modules" in e)) return !1;
  return Array.isArray(e.modules) && e.modules.length === 1;
}
async function Tt(filePath_4, n) {
  let s = {
      result: {
        success: !0,
        errors: [],
        warnings: [],
        filePath: filePath_4,
        fileType: "hooks"
      },
      modules: []
    },
    r = w => ({
      result: q(filePath_4, "hooks", `${w} \u2014 hooks are read without following symlinks and are capped at ` + `${UU} bytes. The plugin loader has neither limit and fails the whole plugin on bad hook config, so validate the real file separately.`),
      modules: []
    }),
    a = y.dirname(filePath_4),
    i = await gA(y.dirname(a), a);
  if (i === "refused") return r("The hooks directory is a link (a symlink or a Windows junction) and was not read");
  if (i !== "ok") return s;
  let l;
  try {
    l = await j6(filePath_4);
  } catch (error) {
    return {
      result: {
        success: !1,
        errors: [{
          path: "file",
          message: `Failed to read file: ${d(error)}`
        }],
        warnings: [],
        filePath: filePath_4,
        fileType: "hooks"
      },
      modules: []
    };
  }
  if (l.kind === "refused") return r("hooks.json is not a regular file (a symlink, a FIFO, a directory)");
  if (l.kind === "too-large") return r("hooks.json is past the size cap and was not read");
  if (l.kind === "absent") return s;
  let content_2 = l.content,
    m;
  try {
    m = ee(content_2);
  } catch (error) {
    return {
      result: {
        success: !1,
        errors: [{
          path: "json",
          message: `Invalid JSON syntax: ${d(error)}. At runtime this breaks the entire plugin load.`
        }],
        warnings: [],
        filePath: filePath_4,
        fileType: "hooks"
      },
      modules: []
    };
  }
  if (Wie(m, dLr) || FAe(m)) return {
    result: {
      success: !1,
      errors: [{
        path: "hooks",
        message: `PreToolUse/PermissionRequest is declared at the top level, outside the "hooks" object \u2014 ${bT}`
      }],
      warnings: [],
      filePath: filePath_4,
      fileType: "hooks"
    },
    modules: [],
    namesModuleInRefusedFile: Pe(m)
  };
  let p = m && typeof m === "object" && "hooks" in m ? $Ae(m.hooks) : {
      notes: [],
      unloadableGuards: []
    },
    warnings_4 = p.notes.map(item => ({
      path: "hooks",
      message: `${item} at runtime`
    }));
  if (p.unloadableGuards.length > 0) return {
    result: {
      success: !1,
      errors: p.unloadableGuards.map(item => ({
        path: "hooks",
        message: `${item} \u2014 ${bT}`
      })),
      warnings: warnings_4,
      filePath: filePath_4,
      fileType: "hooks"
    },
    modules: [],
    namesModuleInRefusedFile: Pe(m)
  };
  let h = uLr().safeParse(m);
  if (!h.success) return {
    result: {
      success: !1,
      errors: fe(h.error),
      warnings: warnings_4,
      filePath: filePath_4,
      fileType: "hooks"
    },
    modules: [],
    namesModuleInRefusedFile: Pe(m)
  };
  let v = [];
  for (let w of mt(h.data.hooks ?? {})) v.push({
    path: `hooks.${w.event}`,
    message: `Shell command uses ${w.placeholders.join(", ")} without quotes: ${Ay(w.command, 200)}. If the expanded path contains a space the command can split into several words and fail. Wrap the placeholder in double quotes, or use exec form: {"command": "<executable>", "args": ["\${CLAUDE_PLUGIN_ROOT}/..."]}.`
  });
  let errors_4 = [],
    notes_2 = [],
    gatingHooks = [],
    modules = h.data.modules ?? [],
    f = modules.length > 0 ? await Jn(n) : ne,
    nouns_2 = f.nouns;
  for (let module of modules) {
    let E = y.resolve(a, module),
      _ = y.relative(n, E);
    if (_ === ".." || _.startsWith(`..${y.sep}`) || y.resolve(_) === _ || O$e(module)) {
      errors_4.push({
        path: `modules.${module}`,
        message: "The module path leaves the plugin directory"
      });
      continue;
    }
    try {
      let {
          scan: scan,
          registrations: registrations,
          renderMatchers: renderMatchers,
          helperCalls: helperCalls,
          catchReads: catchReads
        } = await Baa(E, n, y.basename(n)),
        J = registrations.length === 0 ? "nothing" : registrations.join(", "),
        H = [...scan.calls.map(item => {
          let F = helperCalls.get(item);
          return F === void 0 ? `$.${item}` : `$.${item} (via ${F.join(", ")})`;
        }), ...(scan.nextTo ?? []).map(item => `next.to:${item}`)],
        X = H.length === 0 ? "nothing on $" : H.join(", "),
        I = catchReads.filter(item => item.isOwnCommand),
        W = [];
      if (I.length > 0) {
        let A = Fr();
        try {
          if (!A.shippedTablesFillFailed) {
            Dke(), iBe();
            let F = uAn(),
              G = Y => F(Y) || Vn.has(Z_(Y));
            W.push(...I.filter(item => !item.commands.some(G))), warnings_4.push(...L(I.flatMap(item => item.commands)).filter(G).map(item => ({
              path: `modules.${module}`,
              message: `"/${Ay(item, 200)}" is a name Claude Code ships: $.command.register refuses it and the hook that calls it is skipped`
            })));
          }
        } catch (error) {
          A.shippedTablesFillFailed = !0, t(`plugin validate: shipped command names unread, every command.run hook is listed as a gate: ${d(error)}`, {
            level: "error"
          });
        }
      }
      let De = catchReads.filter(item => !W.includes(item) && Obo(item.pattern));
      notes_2.push(`${module} hooks: ${J}`, ...W.map(item => `${module} answers its own command: ${item.registration}`), ...De.map(({
        registration: registration,
        hasCatch: hasCatch
      }) => `${module} gating hook ${hasCatch ? "with" : "without"} .catch: ` + registration), `${module} calls: ${X}`), gatingHooks.push(...De.map(({
        registration: A,
        pattern: pattern,
        hasCatch: hasCatch_2
      }) => ({
        module: module,
        pattern: pattern,
        hook: A,
        hasCatch: hasCatch_2
      })));
      for (let {
        registration: registration_2,
        matcher: matcher
      } of renderMatchers) {
        let G = Kbo(matcher);
        if (G !== void 0) warnings_4.push({
          path: `modules.${module}`,
          message: `on ${registration_2}: ${G}`
        });
      }
      let At = scan.hooks.some(item => dV(item, "engine.create"));
      if (nouns_2.length > 0 && !At) warnings_4.push({
        path: `modules.${module}`,
        message: `the manifest's types contract declares ${nouns_2.map(item => `$.${item}`).join(", ")} on EngineInterface, but ${module} registers no hook on engine.create, so the plugin never adds ${P(nouns_2.length, "it", "them")} to $`
      });
      if (scan.env !== void 0) {
        let A = F => F.length === 0 ? "nothing" : F.join(", ");
        notes_2.push(`${module} env writes: ${A(scan.env.writes)}`, `${module} env reads: ${A(scan.env.reads)}`);
      }
      let ze = Mgi(scan);
      if (ze !== void 0) notes_2.push(`${module} hooks telemetry for: ${ze}`);
      let message_3 = Igi(scan, {
        isBuiltin: !1
      });
      if (message_3 !== void 0) errors_4.push({
        path: `modules.${module}`,
        message: message_3
      });
      if (scan.state !== void 0) {
        let A = se => se.length === 0 ? "nothing" : se.map(item => PHt(item)).join(", ");
        notes_2.push(`${module} state writes: ${A(scan.state.writes)}`, `${module} state reads: ${A(scan.state.reads)}`);
        let owner_2 = f.name ?? y.basename(n),
          G = se => se.plugin !== owner_2,
          {
            reads: reads,
            writes: writes
          } = scan.state,
          Se = xn({
            names: f.isRefused ? {
              reads: reads.filter(G),
              writes: writes.filter(G)
            } : scan.state,
            owner: owner_2,
            declared: f.state,
            contract: f.conventional,
            refusal: f.refusal,
            others: await Xn(n)
          });
        if (errors_4.push(...Se.problems.map(se => ({
          path: `modules.${module}`,
          message: se
        }))), Se.unchecked.length > 0) notes_2.push(`${module} state of other plugins, not checked (run validate in a session with them enabled): ${Se.unchecked.join(", ")}`);
      }
      let He = await $Qo(scan.clients, n, y.basename(n));
      if (He !== void 0) notes_2.push(`${module} surface modules: ${He.map(item => item.module).join(", ")}`);
    } catch (error) {
      errors_4.push({
        path: `modules.${module}`,
        message: Ay(d(error), 400)
      });
    }
  }
  return {
    result: {
      success: errors_4.length === 0,
      errors: errors_4,
      warnings: [...warnings_4, ...v],
      filePath: filePath_4,
      fileType: "hooks",
      ...(notes_2.length > 0 && {
        notes: notes_2
      }),
      ...(gatingHooks.length > 0 && {
        gatingHooks: gatingHooks
      })
    },
    modules: modules
  };
}
function yt(e, {
  relPath: relPath_4,
  field: s
}) {
  if (e === void 0) return {
    errors: [],
    notes: []
  };
  if (e.kind === "refused") return {
    errors: e.problems.map(i => ({
      path: s,
      message: i
    })),
    notes: []
  };
  let r = `types ${relPath_4} declares on $: ` + (e.nouns.length > 0 ? e.nouns.map(item => `$.${item}`).join(", ") : "nothing (no EngineInterface member)"),
    a = e.state.flatMap(({
      plugin: plugin_5,
      keys: keys_2
    }) => keys_2.map(c => PHt({
      plugin: plugin_5,
      key: c
    })));
  return {
    errors: [],
    notes: a.length > 0 ? [r, `types ${relPath_4} declares state: ${a.join(", ")}`] : [r]
  };
}
var ne = {
  name: void 0,
  nouns: [],
  state: [],
  isRefused: !1,
  conventional: void 0,
  refusal: void 0
};
async function Jn(e) {
  let n = await re(y.join(e, ".claude-plugin", "plugin.json")),
    s = n === void 0 ? void 0 : ae(gs(n)),
    name = typeof s?.name === "string" ? s.name : void 0,
    a = s?.types;
  if (s === void 0 || a !== void 0 && typeof a !== "string") return {
    ...ne,
    name: name
  };
  let i = await ke(a, e, y.basename(e));
  if (i === void 0) return {
    ...ne,
    name: name
  };
  if (a !== void 0) return i.kind === "read" ? {
    ...ne,
    name: name,
    nouns: i.nouns,
    state: i.state
  } : {
    ...ne,
    name: name,
    isRefused: !0
  };
  let conventional = `the types contract at ${relPath_3}`;
  if (i.kind === "read") return {
    ...ne,
    name: name,
    state: i.state,
    conventional: conventional
  };
  let c = i.problems.length - 1;
  return {
    ...ne,
    name: name,
    conventional: conventional,
    refusal: Ay(`the file at ${relPath_3} could not be taken as the types contract (${i.problems[0] ?? "refused"}${c > 0 ? `, and ${c} more` : ""})`, 1000)
  };
}
async function Xn(e) {
  let n = Ae(),
    s = n.pluginLoadCacheOnly ?? n.pluginLoad;
  if (s === void 0) return;
  let r;
  try {
    r = (await s).enabled;
  } catch {
    return;
  }
  let a = [];
  for (let i of r) {
    let types = i.manifest.types;
    if (!((types !== void 0 || i.isBuiltin !== !0) && y.resolve(i.path) !== y.resolve(e))) continue;
    let m = await ke(types, i.path, i.name);
    if (m?.kind === "read") a.push(...m.state);
  }
  return a;
}
async function St(e) {
  let n = [y.join(e, "hooks", "hooks.json")];
  if (!(await m1(y.join(e, ".claude-plugin")))) return n;
  let s = await re(y.join(e, ".claude-plugin", "plugin.json")),
    r = s === void 0 ? void 0 : ae(gs(s))?.hooks,
    a = Array.isArray(r) ? r : [r];
  for (let i of a) {
    if (typeof i !== "string") continue;
    let l = y.resolve(e, i),
      c = y.relative(e, l);
    if (c === ".." || c.startsWith(`..${y.sep}`) || y.resolve(c) === c || O$e(i)) continue;
    if (!n.includes(l)) n.push(l);
  }
  return n;
}
async function fni(e) {
  for (let n of await St(e)) {
    let {
      modules: modules_2,
      namesModuleInRefusedFile: namesModuleInRefusedFile
    } = await Tt(n, e);
    if (modules_2.length > 0 || namesModuleInRefusedFile === !0) return !0;
  }
  return !1;
}
async function Qn(e) {
  let n = [],
    s = [];
  for (let a of await St(e)) {
    let {
      result: result,
      modules: modules_3
    } = await Tt(a, e);
    if (modules_3.length > 0) s.push(a);
    if (result.errors.length > 0 || result.warnings.length > 0 || result.notes !== void 0) n.push(result);
  }
  let [, filePath_5] = s;
  if (filePath_5 !== void 0) {
    let a = s.map(item => y.relative(e, item));
    n.push({
      success: !1,
      errors: [{
        path: "modules",
        message: `The plugin names one hooks module per plugin, but ${a.join(" and ")} each name one; the loader refuses both`
      }],
      warnings: [],
      filePath: filePath_5,
      fileType: "hooks"
    });
  }
  return n;
}
var es = new Set(["stdio", "http", "streamable-http", "sse", "ws", "sdk", "sse-ide", "ws-ide", "claudeai-proxy"]),
  ts = /\$\{user_config\.([^}$]+)\}/g,
  Ct = /\$\{[^}$]+\}/,
  Ne = 16,
  ns = 8192,
  ss = [/\bsk-[A-Za-z0-9_-]{16,}/, /\bgh[opsur]_[A-Za-z0-9]{30,}/, /\bgithub_pat_[A-Za-z0-9_]{30,}/, /\bxox[abeprs]-[A-Za-z0-9-]{10,}/, /\bAKIA[0-9A-Z]{16}\b/, /\bglpat-[A-Za-z0-9_-]{20,}/, /\bAIza[0-9A-Za-z_-]{35}\b/, /(?:^|[^A-Za-z0-9_-])eyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]+/],
  os = /authorization|api[-_]?key|token|secret|password|credential/i,
  rs = /your[-_ ]|replace|example|changeme|placeholder|dummy|redacted|xxx|[<>]|\*\*\*/i;
function as(e) {
  let n = new Map();
  for (let r of e) n.set(r, (n.get(r) ?? 0) + 1);
  let s = 0;
  for (let r of n.values()) {
    let a = r / e.length;
    s -= a * Math.log2(a);
  }
  return s;
}
function is(e, n) {
  if (n.length > ns || Ct.test(n) || rs.test(n)) return !1;
  let s = n.trim();
  if (ss.some(item => item.test(s))) return !0;
  if (!os.test(e)) return !1;
  let r = s.match(/^(?:Bearer|Basic|Token|Bot)\s+(\S+)$/i)?.[1] ?? s;
  return r.length >= 20 && !/\s/.test(r) && as(r) >= 3;
}
var ls = /\$\{[^}$]+\}/g;
function be(e, n) {
  return URL.parse(e.replace(ls, n)) ?? void 0;
}
function cs(e) {
  let n = be(e, "probe-a.invalid") ?? be(e, "1"),
    s = be(e, "probe-b.invalid") ?? be(e, "2");
  if (!n || !s || n.hostname !== s.hostname) return;
  let r = n.protocol === "http:" ? "http" : n.protocol === "ws:" ? "ws" : void 0;
  if (r === void 0) return;
  let hostname = n.hostname;
  if (hostname === "localhost" || hostname.endsWith(".localhost") || hostname === "127.0.0.1" || hostname === "[::1]") return;
  let i = r === "http" ? "https" : "wss";
  return `url uses ${r}:// to a non-loopback host \u2014 requests, headers and any ` + `credentials travel in cleartext. Use ${i}://; plugin directories may reject insecure remote server urls.`;
}
function ps(e) {
  let n = [],
    s = [],
    r;
  if (e.type === void 0 || e.type === "stdio") {
    if (s.push("command"), r = "env", Array.isArray(e.args)) {
      for (let [i, value] of e.args.entries()) if (typeof value === "string") n.push({
        field: `args[${i}]`,
        value: value
      });
    }
  } else if (Me(e.type)) s.push("url", "headersHelper"), r = "headers";
  for (let field_2 of s) {
    let value_2 = e[field_2];
    if (typeof value_2 === "string") n.push({
      field: field_2,
      value: value_2
    });
  }
  let a = r === void 0 ? void 0 : e[r];
  if (r !== void 0 && D(a)) {
    for (let [i, value_3] of Object.entries(a)) if (typeof value_3 === "string") n.push({
      field: `${r}.${i}`,
      value: value_3
    });
  }
  return n;
}
function Me(e) {
  return e === "http" || e === "streamable-http" || e === "sse" || e === "ws";
}
function Rt(e, n, s) {
  let errors_5 = [],
    warnings_5 = [];
  if (!D(n)) return {
    errors: errors_5,
    warnings: warnings_5
  };
  for (let {
    field: field_3,
    value: value_4
  } of ps(n)) {
    let c = new Set([...value_4.matchAll(ts)].map(item => item[1]));
    if (c.size === 0) continue;
    let path_4 = `${e}.${Ay(field_3, 64)}`;
    if (field_3 === "headersHelper") {
      errors_5.push({
        path: path_4,
        message: 'headersHelper references ${user_config.*}. Options are never substituted into headersHelper: the plugin loader refuses the server when the plugin declares any options (the value would be spliced into a shell command), and otherwise the literal text reaches the shell. Read the value inside the helper script instead (for example from a variable set in the server\'s "env" block).'
      });
      continue;
    }
    if (s === null) continue;
    for (let p of c) if (p !== void 0 && !s.has(p)) errors_5.push({
      path: path_4,
      message: `references \${user_config.${Ay(p, 64)}}, which plugin.json does not declare under "userConfig" (or in this server's "channels" entry), so on a fresh install it cannot resolve: the loader drops the server or passes the literal text through. Declare the option or fix the key.`
    });
  }
  if (Me(n.type) && typeof n.url === "string") if (n.url.trim() === "") {
    if (typeof n.directory === "string" && n.directory !== "") warnings_5.push({
      path: `${e}.directory`,
      message: `"directory" is set but url is empty. The key names a directory entry and counts only when this server's url is that entry's url, so plugin directories may reject this plugin. Set url to that entry's url, or remove the "directory" key.`
    });
  } else if (!Ct.test(n.url) && !URL.canParse(n.url)) errors_5.push({
    path: `${e}.url`,
    message: 'url is not a valid absolute URL (for example "https://host/path"). The plugin loader marks this server as invalid config and it never connects.'
  });else {
    let message_4 = cs(n.url);
    if (message_4) warnings_5.push({
      path: `${e}.url`,
      message: message_4
    });
  }
  if (Me(n.type) && D(n.headers)) {
    for (let [i, l] of Object.entries(n.headers)) if (typeof l === "string" && is(i, l)) warnings_5.push({
      path: `${e}.headers.${Ay(i, 64)}`,
      message: "header value looks like a literal credential. Everything shipped in a plugin is readable by everyone who installs it; reference a sensitive userConfig option (${user_config.KEY}) or an environment variable (${VAR}) instead of committing the value."
    });
  }
  return {
    errors: errors_5,
    warnings: warnings_5
  };
}
function ds(path_5, n, s) {
  if (!D(n)) return [{
    path: path_5,
    message: `server config must be an object (got ${Z(n)}). The plugin loader silently drops this server at load.`
  }];
  let a = n.type;
  if (a === void 0 && !("command" in n) && "url" in n) return [{
    path: `${path_5}.type`,
    message: 'server has a "url" but no "type". Remote servers must set "type" to "http" (or "sse" / "ws"); without it the entry is parsed as a stdio server, fails for lacking "command", and is silently dropped at load.'
  }];
  if (a !== void 0 && (typeof a !== "string" || !es.has(a))) {
    let m = typeof a === "string" ? `"${Ay(a, 32)}"` : Z(a);
    return [{
      path: `${path_5}.type`,
      message: `unknown server type ${m} \u2014 expected "stdio" (or no type) for a local ` + 'command, or "http", "sse", "ws" for a remote server. The plugin loader silently drops this server at load.'
    }];
  }
  let l = (a === void 0 || a === "stdio" ? lbt() : a === "http" || a === "streamable-http" ? NBt() : a === "sse" ? Van() : a === "ws" ? Rzn() : void 0)?.safeParse(n);
  if (!l) return [{
    path: path_5,
    message: `is not a valid "${String(a)}" server config (${fe(s)[0]?.message ?? "invalid"}). The plugin loader silently drops this server at load.`
  }];
  return (l.success ? fe(s) : fe(l.error)).map(item => ({
    ...item,
    path: item.path === "root" ? path_5 : `${path_5}.${item.path}`,
    message: `${item.message}. The plugin loader silently drops this server at load.`
  }));
}
async function kt(e, filePath_6, s) {
  let a = b => q(filePath_6, "mcp", `${b} \u2014 MCP server files are read without following symlinks and are capped at ` + `${UU} bytes. The plugin loader has neither limit, so validate the real file separately.`),
    i;
  try {
    i = await j6(e);
  } catch (error) {
    return {
      success: !1,
      errors: [{
        path: "file",
        message: `Failed to read file: ${d(error)}`
      }],
      warnings: [],
      filePath: filePath_6,
      fileType: "mcp"
    };
  }
  if (i.kind === "absent") return null;
  if (i.kind === "refused") return a("The file is not a regular file (a symlink, a FIFO, a directory) and was not read");
  if (i.kind === "too-large") return a("The file is past the size cap and was not read");
  let l;
  try {
    l = ee(i.content);
  } catch (error) {
    return {
      success: !1,
      errors: [{
        path: "json",
        message: `Invalid JSON syntax: ${i.content.startsWith("\uFEFF") ? "the file starts with a UTF-8 byte-order mark (BOM), which this file (unlike plugin.json) must not have \u2014 re-save it as UTF-8 without BOM" : d(error)}. The plugin loader logs this at debug level and loads no servers from the file.`
      }],
      warnings: [],
      filePath: filePath_6,
      fileType: "mcp"
    };
  }
  let errors_6 = [],
    warnings_6 = [],
    p = D(l) && Boolean(l.mcpServers),
    g = p && D(l) ? l.mcpServers : l,
    path_6 = p ? "mcpServers" : "root",
    v;
  if (D(g)) v = Object.entries(g);else if (Array.isArray(g)) {
    if (v = g.map((item, index) => [String(index), item]), g.length > 0) warnings_6.push({
      path: path_6,
      message: `is an array; the plugin loader keys its servers by array index ("0", "1", ...), and review tooling has misread this shape as 'no servers'. Use an object keyed by server name.`
    });
  } else return {
    success: !1,
    errors: [{
      path: path_6,
      message: `must be an object mapping server names to server configs (got ${Z(g)}). No servers load from this file.`
    }],
    warnings: [],
    filePath: filePath_6,
    fileType: "mcp"
  };
  for (let [b, R] of v) {
    let S = Ay(b, 64),
      x = p ? `mcpServers.${S}` : S,
      f = jie().safeParse(R);
    if (!f.success) {
      errors_6.push(...ds(x, R, f.error));
      continue;
    }
    let T = $ve(f.data.type);
    if (T !== null) {
      errors_6.push({
        path: `${x}.type`,
        message: T === "host-only" ? `type "${f.data.type}" servers are registered by the host application at runtime and cannot be declared by a plugin. The plugin loader drops this server at load.` : 'type "claudeai-proxy" is used only by claude.ai connectors and cannot be declared ' + 'by a plugin \u2014 declare the server with type "http" instead. The plugin loader drops ' + "this server at load."
      });
      continue;
    }
    let w = Rt(x, R, s(b));
    errors_6.push(...w.errors), warnings_6.push(...w.warnings);
  }
  return {
    success: errors_6.length === 0,
    errors: errors_6,
    warnings: warnings_6,
    filePath: filePath_6,
    fileType: "mcp"
  };
}
function Et(e) {
  let n = new Set(D(e.userConfig) ? Object.keys(e.userConfig) : []),
    s = new Map();
  if (Array.isArray(e.channels)) {
    for (let r of e.channels) if (D(r) && typeof r.server === "string" && !s.has(r.server)) s.set(r.server, new Set(D(r.userConfig) ? Object.keys(r.userConfig) : []));
  }
  return r => {
    let a = s.get(r);
    return a === void 0 ? n : {
      has: i => n.has(i) || a.has(i)
    };
  };
}
async function us(e, n) {
  return Et(e);
}
async function ms(e, n) {
  let s,
    manifestPath = y.join(e, ".claude-plugin", "plugin.json");
  if (await m1(y.dirname(manifestPath))) {
    let S = await re(manifestPath),
      x = S === void 0 ? void 0 : ae(gs(S));
    if (x) s = Nve(x, "plugin-json", {
      pluginName: y.basename(e),
      manifestPath: manifestPath
    }).rawCandidate ?? x;
  }
  let i = s ? Et(s) : void 0,
    l = S => i ? i(S) : null,
    c = [],
    m = y.join(e, ".mcp.json"),
    p = await kt(m, m, l);
  if (p) c.push(p);
  let g = new Set([y.resolve(m)]),
    h = s?.mcpServers,
    v = h === void 0 ? [] : Array.isArray(h) ? h : [h],
    b = Ne,
    R = 0;
  for (let S of v) {
    if (typeof S !== "string") continue;
    if (!S.startsWith("./") || !S.endsWith(".json") || S.includes("..")) continue;
    let x = y.join(e, S),
      f = y.resolve(x);
    if (g.has(f)) continue;
    if (g.add(f), b <= 0) {
      R++;
      continue;
    }
    b--;
    let T = y.join(e, Ay(S, 128)),
      w = await gA(e, y.dirname(x));
    if (w === "refused") {
      c.push(q(T, "mcp", "A directory on the way to this MCP servers file is a link (a symlink or a Windows junction) or " + "escapes the plugin, and the file was not read \u2014 the plugin loader " + "follows it, so validate the real file separately."));
      continue;
    }
    if (w !== "ok") continue;
    let E = await kt(x, T, l);
    if (E) c.push(E);
  }
  if (R > 0) c.push(q(manifestPath, "mcp", `plugin.json names more than ${Ne} MCP server files; ${R} ${P(R, "file")} past that limit were not examined. The plugin loader reads them all, so validate those files separately.`));
  return c.filter(item => item.errors.length > 0 || item.warnings.length > 0);
}
async function Fe(e, n) {
  let s;
  try {
    s = await Le(e, {
      withFileTypes: !0
    });
  } catch (error) {
    let l = k(error);
    if (l === "ENOENT" || l === "ENOTDIR") return {
      files: [],
      skippedSymlinks: 0
    };
    throw error;
  }
  let skippedSymlinks = U(s, i => i.isSymbolicLink());
  if (n) {
    let files = [];
    for (let l of s.filter(item => item.isDirectory())) if (await d7(y.join(e, l.name))) skippedSymlinks++;else files.push(y.join(e, l.name, "SKILL.md"));
    return {
      files: files,
      skippedSymlinks: skippedSymlinks
    };
  }
  let files_2 = [];
  for (let i of s) {
    let l = y.join(e, i.name);
    if (i.isDirectory()) {
      if (await d7(l)) {
        skippedSymlinks++;
        continue;
      }
      let c = await Fe(l, !1);
      files_2.push(...c.files), skippedSymlinks += c.skippedSymlinks;
    } else if (i.isFile() && i.name.toLowerCase().endsWith(".md")) files_2.push(l);
  }
  return {
    files: files_2,
    skippedSymlinks: skippedSymlinks
  };
}
var code_4 = "NO_MANIFEST",
  Pt = new Map([["skills", "skill"], ["agents", "agent"], ["commands", "command"]]);
function wt(e, n) {
  return e === "project" || n === "skill";
}
async function _e(e) {
  let n = [...Pt].map(([r, a]) => [a, y.join(e, r)]),
    s = await Promise.all(n.map(([, r]) => gA(e, r)));
  return {
    dirs: n.filter((item, index) => s[index] === "ok"),
    refused: n.filter((item, index) => s[index] === "refused")
  };
}
async function fs(e) {
  if ((await gA(e, y.join(e, ".claude-plugin"))) === "ok") return !0;
  let n = y.join(e, "skills"),
    s = await gA(e, n);
  if (s === "refused") return !0;
  if (s !== "ok") return !1;
  let {
    files: files_3
  } = await Fe(n, !0);
  for (let a of files_3) if (await Fn(a).then(() => !0, l => {
    let c = k(l);
    return c !== "ENOENT" && c !== "ENOTDIR";
  })) return !0;
  return !1;
}
function q(filePath_7, fileType_2, message_5) {
  return {
    success: !0,
    errors: [],
    warnings: [{
      path: "directory",
      message: message_5
    }],
    filePath: filePath_7,
    fileType: fileType_2
  };
}
async function ve(e, n, s) {
  let results = [],
    scanned = 0,
    skipped = n.length;
  for (let [l, c] of n) results.push(q(c, l, s === "plugin" ? "This directory is a symlink, so the validator read nothing in it. An installed plugin loads it only if it points inside the plugin's installed folder, or, for a plugin read in place from a local marketplace folder, inside that folder; a project's .claude/skills plugin, only if it points inside the folder holding that .claude. Otherwise replace the link with a copy of the folder. To check its files, validate the folder it points to." : "This directory is a symlink and nothing in it was read \u2014 " + "component directories are read without following symlinks. A session loading this project does follow it, so validate the real directory separately."));
  for (let [fileType_3, c] of e) {
    let {
        files: files_4,
        skippedSymlinks: skippedSymlinks_2
      } = await Fe(c, fileType_3 === "skill"),
      g = wt(s, fileType_3) ? skippedSymlinks_2 : 0,
      h = 0,
      v = 0;
    for (let R of files_4) {
      let filePath_8 = Ay(R, 256),
        x;
      try {
        x = await j6(R);
      } catch (error) {
        results.push({
          success: !1,
          errors: [{
            path: "file",
            message: `Failed to read: ${Ay(d(error), 200)}`
          }],
          warnings: [],
          filePath: filePath_8,
          fileType: fileType_3
        });
        continue;
      }
      if (x.kind !== "ok") {
        if (x.kind === "refused" && wt(s, fileType_3)) h++;else if (x.kind === "too-large") v++;
        continue;
      }
      scanned++;
      let f = Zn(filePath_8, x.content, fileType_3, s);
      if (f.errors.length > 0 || f.warnings.length > 0) results.push(f);
    }
    skipped += g + h + v;
    let b = s === "plugin" ? "A session started with --plugin-dir on this plugin follows a symlink here. An installed plugin follows one only if it points inside the plugin's installed folder, or, for a plugin read in place from a local marketplace folder, inside that folder; a project's .claude/skills plugin, only if it points inside the folder holding that .claude. To check what a symlink points to, validate that path." : "A session loading this directory does follow them, so validate the real paths separately.";
    if (g > 0) results.push(q(c, fileType_3, `${g} ${P(g, "entry", "entries")} here ${P(g, "is", "are")} ${P(g, "a symlink", "symlinks")} and ${P(g, "was", "were")} not read \u2014 components are read ` + `without following symlinks. ${b}`));
    if (h > 0) results.push(q(c, fileType_3, `${h} ${P(h, "component")} here ${P(h, "was", "were")} not read \u2014 the path is not a ` + `regular file (a symlink, a FIFO, a directory). ${s === "plugin" ? "A FIFO or a directory is never read. " : ""}${b}`));
    if (v > 0) results.push(q(c, fileType_3, `${v} ${P(v, "file")} here ${P(v, "is", "are")} larger than ${UU} bytes and ${P(v, "was", "were")} not validated.`));
  }
  return {
    results: results,
    scanned: scanned,
    skipped: skipped
  };
}
async function hs(e) {
  return (await ys(e))?.map(ie) ?? null;
}
async function ys(filePath_9) {
  let fileType_4 = Pt.get(y.basename(filePath_9));
  if (fileType_4) {
    let R = y.dirname(filePath_9),
      S;
    if (y.basename(R) === ".claude" && !(await m1(R))) S = "The enclosing .claude directory is a link (a symlink or a Windows junction).";else if (!(await m1(filePath_9))) S = "This path is a link (a symlink or a Windows junction).";
    if (S) return [{
      success: !1,
      errors: [{
        path: "directory",
        message: `${S} Component directories are read without following links, so nothing here was validated. Pass the real directory instead.`
      }],
      warnings: [],
      filePath: filePath_9,
      fileType: fileType_4
    }];
    return (await ve([[fileType_4, filePath_9]], [], "project")).results;
  }
  let s = y.join(filePath_9, ".claude"),
    r = y.basename(filePath_9) === ".claude",
    [a, i] = await Promise.all([gA(filePath_9, s), r ? Promise.resolve(!1) : fs(filePath_9)]),
    l = r || i ? await _e(filePath_9) : {
      dirs: [],
      refused: []
    },
    c = a === "ok" ? await _e(s) : {
      dirs: [],
      refused: []
    },
    m = r ? "project" : "plugin",
    [p, g] = await Promise.all([ve(l.dirs, l.refused, m), ve(c.dirs, c.refused, "project")]),
    h = [...p.results, ...g.results],
    v = p.scanned + g.scanned,
    b = p.skipped + g.skipped;
  if (a === "refused") h.push(q(s, "plugin", "This directory is a link (a symlink or a Windows junction) and nothing in it was read \u2014 .claude is " + "read without following links. A session loading this project does follow it, so validate the real directory separately."));
  return v > 0 || b > 0 || h.length > 0 ? h : null;
}
async function qKr(e) {
  let n = [],
    s = new Set(["claude.md", "claude.local.md"]),
    r = [];
  try {
    r = await Le(e, {
      withFileTypes: !0
    });
  } catch {}
  for (let i of r) {
    if (!i.isFile() || !s.has(i.name.toLowerCase())) continue;
    let c = i.name.toLowerCase() === "claude.local.md" ? "Remove it from the plugin root." : "To ship context with your plugin, use a skill (skills/<name>/SKILL.md) instead.";
    n.push({
      success: !0,
      errors: [],
      warnings: [{
        path: "root",
        message: `${i.name} at the plugin root is not loaded as project context. ${c}`
      }],
      filePath: y.join(e, Ay(i.name, 64)),
      fileType: "plugin"
    });
  }
  n.push(...(await ws(e)));
  let a = await _e(e);
  return n.push(...(await ve(a.dirs, a.refused, "plugin")).results), n.push(...(await Qn(e))), n.push(...(await ms(e, r))), n.map(ie);
}
async function vGo(e, n) {
  let s = ie(await ks(e));
  if (n?.unrecordableNames !== "warn") return s;
  let errors_7 = s.errors.filter(item => item.code !== code_3),
    a = s.errors.filter(item => item.code === code_3).map(({
      path: path_7,
      message: message_6
    }) => ({
      path: path_7,
      message: message_6
    }));
  return {
    ...s,
    success: errors_7.length === 0,
    errors: errors_7,
    warnings: [...a, ...s.warnings]
  };
}
async function ks(e) {
  let filePath_10 = y.resolve(e),
    s = null;
  try {
    s = await bt(filePath_10);
  } catch (error) {
    if (!K(error)) throw error;
  }
  if (s?.isDirectory()) {
    let a = y.join(filePath_10, ".claude-plugin", "marketplace.json"),
      i = await Ee(a),
      l = i.errors[0];
    if (!(l?.path === "file" && (l.code === "ENOENT" || l.code === "ENOTDIR"))) return i;
    let m = y.join(filePath_10, ".claude-plugin", "plugin.json"),
      p = await Qyn(m),
      g = p.errors[0]?.code;
    if (g !== "ENOENT" && g !== "ENOTDIR") return p;
    return {
      success: !1,
      errors: [{
        path: "directory",
        code: code_4,
        message: "No manifest found in directory. Expected .claude-plugin/marketplace.json or .claude-plugin/plugin.json"
      }],
      warnings: [],
      filePath: filePath_10,
      fileType: "plugin"
    };
  }
  switch (Hn(filePath_10)) {
    case "plugin":
      return Qyn(e);
    case "marketplace":
      return Ee(e);
    case "unknown":
      {
        try {
          let a = await Ie(filePath_10, {
              encoding: "utf-8"
            }),
            i = ee(gs(a));
          if (D(i)) {
            let l = Object.keys(i),
              shape = jKe().shape,
              m = l.some(item => Object.hasOwn(shape, item) && !tHs(item)),
              p = l.some(item => tHs(item) && !Object.hasOwn(shape, item));
            if (Array.isArray(i.plugins) || Object.hasOwn(i, "plugins") && Object.hasOwn(i, "owner") || m && !p) return Ee(e);
          }
        } catch (error) {
          if (k(error) === "ENOENT") return {
            success: !1,
            errors: [{
              path: "file",
              message: `File not found: ${filePath_10}`
            }],
            warnings: [],
            filePath: filePath_10,
            fileType: "plugin"
          };
        }
        return Qyn(e);
      }
  }
}
async function tit(e) {
  let manifest_2 = await vGo(e),
    s = manifest_2.filePath;
  if (manifest_2.errors.some(item => item.code === code_4)) {
    let contents = await hs(s);
    return contents ? {
      manifest: null,
      contents: contents,
      resolvedPath: s,
      pluginRoot: null
    } : {
      manifest: manifest_2,
      contents: [],
      resolvedPath: s,
      pluginRoot: null
    };
  }
  let r = y.dirname(s),
    pluginRoot = y.dirname(r);
  if (y.basename(r) !== ".claude-plugin") return {
    manifest: manifest_2,
    contents: [],
    resolvedPath: s,
    pluginRoot: null
  };
  if (manifest_2.fileType === "plugin") {
    let contents_2 = await qKr(pluginRoot);
    return {
      manifest: manifest_2,
      contents: contents_2,
      resolvedPath: s,
      pluginRoot: pluginRoot
    };
  }
  if (y.resolve(e) !== pluginRoot) return {
    manifest: manifest_2,
    contents: [],
    resolvedPath: s,
    pluginRoot: null
  };
  let i = await GKr(s),
    l = i !== void 0 && Fzn(i.name) && i.plugins.some(item => we(item, pluginRoot, pluginRoot)),
    c = await Qyn(y.join(r, "plugin.json"), {
      kind: l ? "anthropic" : "alone"
    });
  if (c.errors[0]?.code === "ENOENT") return {
    manifest: manifest_2,
    contents: [],
    resolvedPath: s,
    pluginRoot: null
  };
  let m = c.errors.length > 0 || c.warnings.length > 0 || (c.notes?.length ?? 0) > 0;
  return {
    manifest: manifest_2,
    contents: [...(m ? [c] : []), ...(await qKr(pluginRoot))],
    resolvedPath: s,
    pluginRoot: pluginRoot
  };
}
async function re(e) {
  return HW(e).catch(() => {
    return;
  });
}
function he(e) {
  return D(e) ? e : void 0;
}
function ae(e) {
  try {
    return he(ee(e));
  } catch {
    return;
  }
}
function je(e, n, s) {
  let r = [];
  for (let [a, i] of Object.entries(e)) {
    let l = he(i);
    if (!l || typeof l.command !== "string") continue;
    let m = l.command.match(/^\$\{CLAUDE_PLUGIN_ROOT\}\/bin\/([^/\\]+)$/)?.[1];
    if (m === void 0 || n.has(m) || s.has(m)) continue;
    let p = Ay(a, 64),
      g = Ay(m, 64);
    r.push({
      path: `mcpServers.${p}`,
      message: `bin/${g} is not a shipped file, a declared binaries entry, or ` + "a name derivable from the declared entries \u2014 the server will " + 'fail to start. Check for a typo against the "binaries" map in plugin.json.'
    });
  }
  return r;
}
async function ws(e) {
  if (!(await m1(y.join(e, ".claude-plugin")))) return [];
  let n = y.join(e, ".claude-plugin", "plugin.json"),
    s = await re(n);
  if (s === void 0) return [];
  let r = ae(gs(s)),
    a = nln(r?.binaries);
  if (!r || !a) return [];
  let i = new Set(Object.keys(a));
  for (let x of PZi) {
    let f = new Map();
    for (let T of Object.keys(a)) {
      let w = a1t(T, x);
      if (w !== void 0) f.set(w, (f.get(w) ?? 0) + 1);
    }
    for (let [T, w] of f) if (w === 1) i.add(T);
  }
  let l = y.join(e, "bin"),
    c = new Set();
  if (await m1(l)) c = await Le(l).then(x => new Set(x)).catch(() => new Set());
  let m = [];
  function p(filePath_11, warnings_7) {
    if (warnings_7.length > 0) m.push({
      success: !0,
      errors: [],
      warnings: warnings_7,
      filePath: filePath_11,
      fileType: "plugin"
    });
  }
  let g = y.join(e, ".mcp.json"),
    h = await re(g);
  if (h !== void 0) {
    let x = ae(h);
    if (x) {
      let f = he(x.mcpServers || x);
      if (f) p(g, je(f, c, i));
    }
  }
  let mcpServers = r.mcpServers,
    b = mcpServers === void 0 ? [] : Array.isArray(mcpServers) ? mcpServers : [mcpServers],
    R = [],
    S = Ne;
  for (let x of b) {
    if (typeof x === "string" && S <= 0) continue;
    if (typeof x === "string") {
      if (S--, !x.startsWith("./") || Te(x)) continue;
      let T = y.join(e, x);
      if ((await gA(e, y.dirname(T))) !== "ok") continue;
      let w = await re(T);
      if (w === void 0) continue;
      let E = ae(w);
      if (!E) continue;
      let _ = he(E.mcpServers || E);
      if (_) p(y.join(e, Ay(x, 128)), je(_, c, i));
      continue;
    }
    let f = he(x);
    if (f) R.push(...je(f, c, i));
  }
  return p(n, R), m;
}
export { WKr, SGo, wGo, kGo, Jyn, zKr, GKr, uni, Qyn, VKr, Ay, fni, code_4 as KKr, qKr, vGo, tit };