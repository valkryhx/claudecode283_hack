// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { xr, fr } from "B:/~BUN/root/chunk-y04k89s2.js";
import { l, v } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { iOt, n4e, uon } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { wdn, _Fe, jLr, bFe } from "B:/~BUN/root/chunk-gbtzpa3e.js";
import { isAbsolute as qe, relative as Ke, resolve as Qe } from "path";
function P(e) {
  let t = /@ts-/i.test(e),
    o = /\u2500\u2500 from plugin |\/\/\s*Skipped:/.test(e);
  return t ? "@ts-" : o ? "framing" : void 0;
}
var d = (e, t, ...o) => e?.kind === t && o.includes(e.text);
function L(e) {
  let t = d(e, "punct", "{", "(", "["),
    o = d(e, "punct", "}", ")", "]");
  return t ? 1 : o ? -1 : 0;
}
var y = (kind, text, line) => ({
  kind: kind,
  text: text,
  line: line
});
var me = (e, t, o) => {
  let r = e.indexOf("*/", t + 2),
    n = r !== -1,
    end = n ? r + 2 : e.length,
    c = e.slice(t, end),
    i = c.match(/\r\n|[\n\r\u2028\u2029]/g),
    line_2 = o + (i?.length ?? 0),
    a = n ? P(c) : "/*",
    m = {
      end: end,
      line: line_2
    };
  return a ? {
    ...m,
    token: y("stray", a, o)
  } : m;
};
var le = (e, t, line_3) => {
  let r = e.slice(t).search(/[\n\r\u2028\u2029]/),
    end_2 = r === -1 ? e.length : t + r,
    s = e.slice(t, end_2).trim(),
    c = P(s),
    token = s.startsWith("///") ? y("reference", s, line_3) : c ? y("stray", c, line_3) : void 0;
  return token ? {
    end: end_2,
    line: line_3,
    token: token
  } : {
    end: end_2,
    line: line_3
  };
};
var M = (e, t, line_4) => {
  let r = e[t] ?? "",
    n = "",
    end_3 = t + 1;
  while (end_3 < e.length) {
    let i = e[end_3] ?? "",
      p = i === "\\" && end_3 + 1 < e.length;
    if (i === r || i === `
` || i === "\r") break;
    n += p ? e[end_3 + 1] ?? "" : i, end_3 += p ? 2 : 1;
  }
  return e[end_3] === r ? {
    end: end_3 + 1,
    line: line_4,
    token: y("string", n, line_4)
  } : {
    end: end_3,
    line: line_4,
    token: y("stray", r, line_4)
  };
};
var de = (e, t, line_5) => {
  let end_4 = t + 1;
  while (end_4 < e.length && /[\w$]/.test(e[end_4] ?? "")) end_4 += 1;
  return {
    end: end_4,
    line: line_5,
    token: y("word", e.slice(t, end_4), line_5)
  };
};
function E(e, t) {
  let o = e[t] ?? "",
    r = e.slice(t, t + 2),
    n = {
      "//": le,
      "/*": me
    },
    s = {
      "'": M,
      '"': M
    },
    c = /[\w$]/.test(o);
  return n[r] ?? s[o] ?? (c ? de : void 0);
}
function N(e) {
  let t = [],
    o = [],
    r = 0,
    n = 0,
    s = 1,
    c = !1,
    i = 1;
  while (n < e.length) {
    let p = e[n] ?? "",
      a = p === `
` || p === "\u2028" || p === "\u2029" || p === "\r" && e[n + 1] !== `
`;
    if (c) {
      let b = p === "\\",
        H = p === "$" && e[n + 1] === "{",
        ie = p === "`";
      if (H) o.push(r);
      c = !H && !ie, s += a ? 1 : 0, n += b || H ? 2 : 1;
      continue;
    }
    let m = E(e, n),
      f = p === "`",
      u = p === "}" && o.length > 0 && r === o.at(-1),
      g = /[\t\n\v\f\r \u2028\u2029]/.test(p),
      x = p === "/" || p === "\\",
      h = /[!-~]/.test(p) && !x,
      k = !g && !h,
      C = x ? p : "other";
    if (m) {
      let b = m(e, n, s);
      if (b.token) t.push(b.token);
      n = b.end, s = b.line;
      continue;
    }
    if (f) t.push(y("string", "`", s)), i = s;
    if (k) t.push(y("stray", C, s));
    if (u) o.pop();
    if (!f && !u && !k && !g) t.push(y("punct", p, s)), r += p === "{" ? 1 : p === "}" ? -1 : 0;
    c = f || u, s += a ? 1 : 0, n += 1;
  }
  if (c || o.length > 0) t.push(y("stray", "`", i));
  return t;
}
var S = (e, t) => [e[t], e[t + 1], e[t + 2]];
function B(e, t) {
  let [o, r, n] = S(e, t),
    s = d(o, "word", "global") && d(r, "punct", "{"),
    c = d(o, "word", "module", "namespace") && r?.kind === "string",
    i = d(o, "word", "as") && d(r, "word", "namespace"),
    p = d(o, "word", "interface") && r?.kind === "word" && r.line !== o?.line,
    a = d(o, "word", "interface") && d(r, "word", "EngineInterface") && !d(n, "punct", "{");
  return s ? "`global { \u2026 }` augments the global scope" : c ? `a nested \`module '${r.text}'\` augments another module` : i ? "`as namespace` declares a global" : p ? "`interface` without its name on the same line" : a ? "`EngineInterface` takes members only, no `extends` or type parameters" : void 0;
}
function _(e) {
  let t = [],
    o = 0;
  for (let [r, n] of e.entries()) {
    let c = o === 0 && d(e[r - 1], "word", "declare") && d(n, "word", "module") ? void 0 : B(e, r);
    if (o += L(n), c !== void 0) t.push(`line ${n.line}: ${c}; the contract may only augment 'claude-code', at its top level`);
  }
  return t;
}
function A(e, t, o) {
  let [r, n, s] = S(e, t);
  return r?.kind === "word" && r.text === "interface" && n?.kind === "word" && n.text === o && n.line === r.line && s?.kind === "punct" && s.text === "{";
}
function w(e, t) {
  let o = 0;
  for (let r = t; r < e.length; r += 1) {
    let n = e[r];
    if (!(n?.kind === "punct" && (n.text === "{" || n.text === "}"))) continue;
    if (o += n.text === "{" ? 1 : -1, o === 0) return r;
  }
  return e.length;
}
function O(e, t) {
  let o = [],
    r = w(e, t),
    n = (i, ...p) => e[i]?.kind === "punct" && p.includes(e[i].text),
    s = 0,
    c = !0;
  for (let i = t + 1; i < r; i += 1) {
    let p = n(i, "{", "(", "["),
      a = n(i, "}", ")", "]"),
      m = s === 0 && n(i, ";", ","),
      f = (e[i - 1]?.line ?? 0) < (e[i]?.line ?? 0),
      g = e[i]?.text === "readonly" && e[i + 1]?.kind !== "punct" ? i + 1 : i,
      x = e[g],
      h = s === 0 && (c || f) && x !== void 0 && x.kind !== "punct" && n(g + 1, ":", "?", "(", "<");
    if (s += p ? 1 : a ? -1 : 0, c = m, h) o.push(x.text);
  }
  return o;
}
function D(e, t) {
  let o = new Set();
  for (let {
    start: start,
    end: end_5
  } of t) for (let s = start; s < end_5; s += 1) {
    if (!A(e, s, "EngineInterface")) continue;
    let c = s + 2;
    for (let i of O(e, c)) o.add(i);
  }
  return [...o];
}
var j = e => e.split(/\r\n|[\n\r\u2028\u2029]/).flatMap((item, index) => /^\s*(?:\*\s*)?\/\/\s*(?:\u2500\u2500 from plugin |Skipped:)/.test(item) || /^\s*(?:\/\/\/?|\/?\*)\s*@ts-/i.test(item) ? [`line ${index + 1}: a line that would read as the roll-up's framing or a compiler pragma once copied; a contract carries neither`] : []);
function W(e) {
  let t = [],
    o = "reaches outside the file; the contract must be self-contained (no " + "import, export \u2026 from, require or reference)",
    r = 0;
  for (let [n, s] of e.entries()) {
    let c = e[n + 1],
      i = e[n + 2],
      p = C => s.kind === "word" && s.text === C,
      a = c?.kind === "punct" && c.text === "(" && i?.kind === "string",
      m = c?.kind === "string" || c?.kind === "word" || c?.kind === "punct" && (c.text === "{" || c.text === "*") || a,
      f = s.line !== r,
      u = s.kind === "reference",
      g = p("import") && m,
      x = p("from") && f && c?.kind === "string",
      h = p("require") && f && a,
      k = u ? "a triple-slash reference" : g ? "`import`" : x ? `\`from '${c.text}'\`` : h ? `\`require('${i.text}')\`` : void 0;
    if (k === void 0) continue;
    r = s.line, t.push(`line ${s.line}: ${k} ${o}`);
  }
  return t;
}
var F = /[\p{Cc}\p{Cf}\p{Cs}\p{Default_Ignorable_Code_Point}\u2028\u2029]/u;
var U = e => e.split(`
`).flatMap((item, index) => F.test(item.replace(/[\t\r]/g, "")) ? [`line ${index + 1}: an invisible or reordering character (control, bidi, zero-width, line separator); a contract holds none`] : []);
function G(e) {
  try {
    wdn("contract.d.ts", e);
    return;
  } catch (error) {
    return `does not parse as TypeScript: ${l(error)}`;
  }
}
function q(e, t) {
  let o = new Map(),
    r = (n, s) => e[n]?.kind === "punct" && e[n].text === s;
  for (let {
    start: start_2,
    end: end_6
  } of t) for (let c = start_2; c < end_6; c += 1) {
    if (!A(e, c, "PluginState")) continue;
    let i = c + 2,
      p = w(e, i),
      a = new Set(O(e, i)),
      m = 0;
    for (let f = i + 1; f < p; f += 1) {
      let u = e[f];
      if (m === 0 && u !== void 0 && u.kind !== "punct" && a.has(u.text) && r(f + 1, ":") && r(f + 2, "{")) {
        let k = o.get(u.text) ?? new Set();
        for (let C of O(e, f + 2)) k.add(C);
        o.set(u.text, k);
      }
      let x = r(f, "{") || r(f, "(") || r(f, "["),
        h = r(f, "}") || r(f, ")") || r(f, "]");
      m += Number(x) - Number(h);
    }
  }
  return [...o].map(([plugin, s]) => ({
    plugin: plugin,
    keys: [...s]
  }));
}
function K(e) {
  let t = wdn("contract.ts", e).replace(/^\s*export\s*\{\s*\};?\s*$/m, "").trim(),
    o = xr(t);
  return t === "" ? [] : [`the contract holds code that would run (\`${o}\`); a contract is types only`];
}
var Q = e => e.flatMap((item, index) => {
  let r = e[index - 1],
    n = d(item, "word", "class", "const", "enum", "function", "let", "var"),
    s = r === void 0 || r.line < item.line || d(r, "punct", ";", "{", "}") || d(r, "word", "abstract", "async", "declare", "default", "export"),
    c = d(e[index + 1], "punct", ":", "?", "(", "<");
  return n && s && !c ? [`line ${item.line}: \`${item.text}\` declares something that runs; a contract holds types only`] : [];
});
var Y = {
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
var V = e => e.filter(item => item.kind === "stray").map(item => `line ${item.line}: ` + (Y[item.text] ?? `\`${item.text}\``) + ": a type contract never holds one, so the check refuses it rather than read past it");
var z = "claude-code";
function X(e, t) {
  let [o, r, n] = S(e, t),
    [,, s] = S(e, t + 1),
    c = d(o, "word", "declare") && d(r, "word", "module") && n?.kind === "string" && o?.line === r?.line && r?.line === n.line && d(s, "punct", "{"),
    i = c && n.text !== z,
    p = d(o, "word", "declare") && !c,
    a = d(o, "word", "export") && !d(r, "word", "type", "interface"),
    m = d(o, "word", "abstract", "async", "default", "module", "namespace"),
    f = d(o, "word", "type", "interface") && !d(e[t - 1], "word", "export", "import");
  return i ? `augments module '${n.text}'; the contract may only augment '${z}'` : p ? `\`declare\` at the top level opens only \`declare module '${z}' { \u2026 }\`, its three words on one line` : a ? "`export` at the top level is followed by `type` or `interface`: a contract exports types and nothing else" : m ? `\`${o?.text}\` at the top level: a contract holds type exports and \`declare module '${z}'\` blocks only` : f ? `a top-level \`${o?.text}\` without \`export\` would be global in a dependent's program; export it` : void 0;
}
function J(e) {
  let problems = [],
    blocks = [],
    r = 0,
    n = 0;
  while (n < e.length) {
    let [s, c, i] = S(e, n),
      a = r === 0 && s?.kind === "word" ? X(e, n) : void 0,
      m = a === void 0 || a.startsWith("augments"),
      f = r === 0 && m && d(s, "word", "declare") && d(c, "word", "module") && i?.kind === "string",
      u = n + 2;
    if (r += L(s), a !== void 0) problems.push(`line ${s?.line}: ${a}`);
    if (!f) {
      n += 1;
      continue;
    }
    let end_7 = w(e, u + 1);
    if (end_7 === e.length) problems.push(`line ${s?.line}: \`declare module\` never closes: the text does not lex as a type contract, so the check refuses it`);
    blocks.push({
      start: u + 2,
      end: end_7
    }), n = end_7 + 1;
  }
  return {
    problems: problems,
    blocks: blocks
  };
}
function Z(e) {
  let t = G(e);
  if (t !== void 0) return {
    problems: [t],
    nouns: [],
    state: []
  };
  let o = N(e),
    r = o.filter(item => item.kind !== "reference"),
    {
      problems: problems_2,
      blocks: blocks_2
    } = J(r);
  return {
    problems: [...U(e), ...V(o), ...j(e), ...W(o), ...problems_2, ...Q(r), ...K(e), ..._(r)],
    nouns: D(r, blocks_2),
    state: q(r, blocks_2)
  };
}
function ee(e, t, o) {
  let r = v(o),
    n = jLr(`${e}: ${t}`, l(o)),
    s = n.includes("resolves outside the plugin's folder");
  return r !== void 0 ? `not readable (${r})` : s ? "resolves outside the plugin's folder" : n.replaceAll(t, ".");
}
var R = (...e) => ({
  kind: "refused",
  problems: e.map(fr)
});
async function e4t(e, t, o) {
  let r = Qe(t, e),
    n = Ke(t, r);
  if (n.startsWith("..") || qe(n)) return R(`${e} leaves the plugin's folder`);
  let c = x => R(`${e}: ${ee(o, r, x)}`),
    i = await _Fe(r, t, o).then(x => x, c);
  if ("kind" in i) return i;
  if (i.size > n4e) return R(`${e} is over ${n4e} bytes and was not read`);
  let text_2 = await uon(i.real).then(x => x, c);
  if (typeof text_2 !== "string") return text_2;
  let {
    problems: problems_3,
    nouns: nouns,
    state: state
  } = Z(text_2);
  return problems_3.length === 0 ? {
    kind: "read",
    text: text_2,
    nouns: nouns,
    state: state
  } : R(...problems_3);
}
var NSt = "claude-code-plugins";
var te = e => `// \u2500\u2500 from plugin ${e} \u2500\u2500`;
function oe(e, t) {
  let o = `${NSt}/${e.replace(/[^\w.-]/g, "_")}`,
    r = /^(con|prn|aux|nul|com\d|lpt\d)$/i.test(e),
    n = new Set(t.map(item => item.toLowerCase())),
    s = i => i === 1 && !r ? `${o}.d.ts` : `${o}-${i}.d.ts`,
    c = 1;
  while (n.has(s(c).toLowerCase())) c += 1;
  return s(c);
}
var re = e => [`// Written by Claude Code ${e}.`, "// Claude Code function hooks: the enabled plugins' type contracts.", "//", `// Written by \`/plugin-types\` beside ${iOt}; regenerate with that`, "// command rather than editing. Each enabled plugin that names a type", "// contract in its manifest (`types`) has it copied verbatim, under a", `// banner naming the plugin, its version and its tier, to ${NSt}/`, "// <plugin>.d.ts beside this file, which references each one below. A", "// contract exports the types of the noun its plugin adds to `$` in", "// engine.create and declares it on EngineInterface, so a plugin that", "// depends on it is typed here with nothing copied: include this folder", "// in the tsconfig, as the header of the file beside this one shows. A", "// plugin whose contract could not be read, or did not check, is listed", "// at the end with the reason.", ""].join(`
`);
var ne = e => fr(`${e.name}${e.version === void 0 ? "" : `@${e.version}`}`) + ` (${e.tier})`;
function se(e) {
  let t = e.length === 0,
    o = e.flatMap(({
      label: label,
      problems: problems_4
    }) => problems_4.map(item => `//   ${label}: ${item}
`));
  return t ? "" : `
// Skipped:
${o.join("")}`;
}
async function fjo(e, t) {
  let files = [],
    written = [],
    skipped = [];
  for (let p of t) {
    let label_2 = ne(p),
      m = await e4t(p.types, p.root, p.name);
    if (m.kind === "refused") {
      skipped.push({
        label: label_2,
        problems: m.problems
      });
      continue;
    }
    let f = m.text.endsWith(`
`) ? m.text : `${m.text}
`,
      path = oe(p.name, files.map(item => item.path));
    files.push({
      path: path,
      text: `${te(label_2)}
${f}`
    }), written.push(label_2);
  }
  let c = t.length === 0 ? `
// No enabled plugin names a type contract in its manifest.
` : "",
    i = files.map(item => `/// <reference path="./${item.path}" />
`).join("");
  return {
    text: `${re(e)}${c}${i}${se(skipped)}`,
    files: files,
    written: written,
    skipped: skipped
  };
}
var rZr = "claude-code-plugins.d.ts";
function mjo({
  names: names,
  owner: owner,
  declared: declared,
  others: others
}) {
  let n = new Map();
  for (let {
    plugin: plugin_2,
    keys: keys
  } of [...declared, ...(others ?? [])]) {
    let a = n.get(plugin_2) ?? new Set();
    keys.forEach(item => a.add(item)), n.set(plugin_2, a);
  }
  let problems_5 = [],
    c = new Set();
  for (let {
    plugin: plugin_3,
    key: key
  } of names.writes) if (plugin_3 !== owner) problems_5.push(`$.state.set refers to ${bFe({
    plugin: plugin_3,
    key: key
  })}, which ${plugin_3} owns: only a value's owner writes it (to change what is written, hook ${plugin_3}'s state.set and rewrite e.value)`);
  for (let {
    plugin: plugin_4,
    key: key_2
  } of [...names.reads, ...names.writes]) {
    let a = plugin_4 === owner,
      m = a || others !== void 0,
      f = bFe({
        plugin: plugin_4,
        key: key_2
      });
    if (!m) {
      c.add(f);
      continue;
    }
    let u = n.get(plugin_4)?.has(key_2) === !0,
      g = a ? "the manifest's types contract" : "no enabled plugin's contract",
      x = a ? `${f} is not declared: ${g} must name it in interface PluginState { ${plugin_4}: { ${key_2}: ... } }` : `${f} is not declared: ${g} names it in PluginState`;
    if (!u && !problems_5.includes(x)) problems_5.push(x);
  }
  return {
    problems: problems_5,
    unchecked: [...c]
  };
}
export { e4t, NSt, fjo, rZr, mjo };