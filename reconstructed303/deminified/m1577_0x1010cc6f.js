// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { F } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { d, k, G } from "B:/~BUN/root/chunk-3aez4b53.js";
import { n_, QGe } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { J, Wf, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { O, Sr, Nl, zr } from "B:/~BUN/root/chunk-nggrknsv.js";
import { HE, Con } from "B:/~BUN/root/chunk-h1tq8zce.js";
import { XQe, PBt, __t, rpn, $J, ihe, UJ, O8n, cv, lhe, mpn, M8n, P_t, q$o, FBt, b$r, Qle, HBt, jJ, D8n, r7e, C$r, R$r, H8n, A$r, X$o, J$o, UBt, Sze, _pn, oF, JD, BBt, yy, vne } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { _4n, HXe, JX, Agt, uQs, KIo, YIo } from "B:/~BUN/root/chunk-h2myanpn.js";
import { hr } from "B:/~BUN/root/chunk-7gwemd3j.js";
import { Bo } from "B:/~BUN/root/chunk-cqkcn3bx.js";
import { o0r, w0r } from "B:/~BUN/root/chunk-nw686kdq.js";
import { xue, Lue, G1, tM, sU, _q, sco, xPt as relPath_3, H_r, $_r, PPt, U_r, uuo, DJt, mOt } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { _Os, spt } from "B:/~BUN/root/chunk-72n790j1.js";
import { Lm } from "B:/~BUN/root/chunk-hhgqcegv.js";
import { Ne } from "B:/~BUN/root/chunk-nvdqbkrt.js";
import { dOe, Jvo } from "B:/~BUN/root/chunk-1fjjnb3f.js";
import { Tce } from "B:/~BUN/root/chunk-rad88a4p.js";
import { yir } from "B:/~BUN/root/chunk-784cq7dm.js";
import { bRe } from "B:/~BUN/root/chunk-j9be31pr.js";
import { G7o, kqe } from "B:/~BUN/root/chunk-a9ttgpjt.js";
import { N } from "B:/~BUN/root/chunk-nkxgam12.js";
import { o, T, u, fe, wa } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { lstat as On, readdir as Oe, readFile as _e, stat as kt } from "fs/promises";
import * as g from "path";
function he(e) {
  let n = /@ts-/i.test(e),
    s = /\u2500\u2500 from plugin |\/\/\s*Skipped:/.test(e);
  return n ? "@ts-" : s ? "framing" : void 0;
}
var A = (e, n, ...s) => e?.kind === n && s.includes(e.text);
function Ve(e) {
  let n = A(e, "punct", "{", "(", "["),
    s = A(e, "punct", "}", ")", "]");
  return n ? 1 : s ? -1 : 0;
}
var V = (kind, text, line) => ({
  kind: kind,
  text: text,
  line: line
});
var jt = (e, n, s) => {
  let r = e.indexOf("*/", n + 2),
    a = r !== -1,
    end = a ? r + 2 : e.length,
    l = e.slice(n, end),
    c = l.match(/\r\n|[\n\r\u2028\u2029]/g),
    line_2 = s + (c?.length ?? 0),
    p = a ? he(l) : "/*",
    y = {
      end: end,
      line: line_2
    };
  return p ? {
    ...y,
    token: V("stray", p, s)
  } : y;
};
var Ot = (e, n, line_3) => {
  let r = e.slice(n).search(/[\n\r\u2028\u2029]/),
    end_2 = r === -1 ? e.length : n + r,
    i = e.slice(n, end_2).trim(),
    l = he(i),
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
var He = (e, n, line_4) => {
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
var _t = (e, n, line_5) => {
  let end_4 = n + 1;
  while (end_4 < e.length && /[\w$]/.test(e[end_4] ?? "")) end_4 += 1;
  return {
    end: end_4,
    line: line_5,
    token: V("word", e.slice(n, end_4), line_5)
  };
};
function Ue(e, n) {
  let s = e[n] ?? "",
    r = e.slice(n, n + 2),
    a = {
      "//": Ot,
      "/*": jt
    },
    i = {
      "'": He,
      '"': He
    },
    l = /[\w$]/.test(s);
  return a[r] ?? i[s] ?? (l ? _t : void 0);
}
function We(e) {
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
      let S = m === "\\",
        w = m === "$" && e[a + 1] === "{",
        E = m === "`";
      if (w) s.push(r);
      l = !w && !E, i += p ? 1 : 0, a += S || w ? 2 : 1;
      continue;
    }
    let y = Ue(e, a),
      h = m === "`",
      v = m === "}" && s.length > 0 && r === s.at(-1),
      b = /[\t\n\v\f\r \u2028\u2029]/.test(m),
      R = m === "/" || m === "\\",
      C = /[!-~]/.test(m) && !R,
      x = !b && !C,
      f = R ? m : "other";
    if (y) {
      let S = y(e, a, i);
      if (S.token) n.push(S.token);
      a = S.end, i = S.line;
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
var ae = (e, n) => [e[n], e[n + 1], e[n + 2]];
function Ke(e, n) {
  let [s, r, a] = ae(e, n),
    i = A(s, "word", "global") && A(r, "punct", "{"),
    l = A(s, "word", "module", "namespace") && r?.kind === "string",
    c = A(s, "word", "as") && A(r, "word", "namespace"),
    m = A(s, "word", "interface") && r?.kind === "word" && r.line !== s?.line,
    p = A(s, "word", "interface") && A(r, "word", "EngineInterface") && !A(a, "punct", "{");
  return i ? "`global { \u2026 }` augments the global scope" : l ? `a nested \`module '${r.text}'\` augments another module` : c ? "`as namespace` declares a global" : m ? "`interface` without its name on the same line" : p ? "`EngineInterface` takes members only, no `extends` or type parameters" : void 0;
}
function Ge(e) {
  let n = [],
    s = 0;
  for (let [r, a] of e.entries()) {
    let l = s === 0 && A(e[r - 1], "word", "declare") && A(a, "word", "module") ? void 0 : Ke(e, r);
    if (s += Ve(a), l !== void 0) n.push(`line ${a.line}: ${l}; the contract may only augment 'claude-code', at its top level`);
  }
  return n;
}
function ge(e, n, s) {
  let [r, a, i] = ae(e, n);
  return r?.kind === "word" && r.text === "interface" && a?.kind === "word" && a.text === s && a.line === r.line && i?.kind === "punct" && i.text === "{";
}
function ne(e, n) {
  let s = 0;
  for (let r = n; r < e.length; r += 1) {
    let a = e[r];
    if (!(a?.kind === "punct" && (a.text === "{" || a.text === "}"))) continue;
    if (s += a.text === "{" ? 1 : -1, s === 0) return r;
  }
  return e.length;
}
function ie(e, n) {
  let s = [],
    r = ne(e, n),
    a = (c, ...m) => e[c]?.kind === "punct" && m.includes(e[c].text),
    i = 0,
    l = !0;
  for (let c = n + 1; c < r; c += 1) {
    let m = a(c, "{", "(", "["),
      p = a(c, "}", ")", "]"),
      y = i === 0 && a(c, ";", ","),
      h = (e[c - 1]?.line ?? 0) < (e[c]?.line ?? 0),
      b = e[c]?.text === "readonly" && e[c + 1]?.kind !== "punct" ? c + 1 : c,
      R = e[b],
      C = i === 0 && (l || h) && R !== void 0 && R.kind !== "punct" && a(b + 1, ":", "?", "(", "<");
    if (i += m ? 1 : p ? -1 : 0, l = y, C) s.push(R.text);
  }
  return s;
}
function Ye(e, n) {
  let s = new Set();
  for (let {
    start: start,
    end: end_5
  } of n) for (let i = start; i < end_5; i += 1) {
    if (!ge(e, i, "EngineInterface")) continue;
    let l = i + 2;
    for (let c of ie(e, l)) s.add(c);
  }
  return [...s];
}
var qe = e => e.split(/\r\n|[\n\r\u2028\u2029]/).flatMap((item, index) => /^\s*(?:\*\s*)?\/\/\s*(?:\u2500\u2500 from plugin |Skipped:)/.test(item) || /^\s*(?:\/\/\/?|\/?\*)\s*@ts-/i.test(item) ? [`line ${index + 1}: a line that would read as the roll-up's framing or a compiler pragma once copied; a contract carries neither`] : []);
function Ze(e) {
  let n = [],
    s = "reaches outside the file; the contract must be self-contained (no " + "import, export \u2026 from, require or reference)",
    r = 0;
  for (let [a, i] of e.entries()) {
    let l = e[a + 1],
      c = e[a + 2],
      m = f => i.kind === "word" && i.text === f,
      p = l?.kind === "punct" && l.text === "(" && c?.kind === "string",
      y = l?.kind === "string" || l?.kind === "word" || l?.kind === "punct" && (l.text === "{" || l.text === "*") || p,
      h = i.line !== r,
      v = i.kind === "reference",
      b = m("import") && y,
      R = m("from") && h && l?.kind === "string",
      C = m("require") && h && p,
      x = v ? "a triple-slash reference" : b ? "`import`" : R ? `\`from '${l.text}'\`` : C ? `\`require('${c.text}')\`` : void 0;
    if (x === void 0) continue;
    r = i.line, n.push(`line ${i.line}: ${x} ${s}`);
  }
  return n;
}
var Je = /[\p{Cc}\p{Cf}\p{Cs}\p{Default_Ignorable_Code_Point}\u2028\u2029]/u;
var Xe = e => e.split(`
`).flatMap((item, index) => Je.test(item.replace(/[\t\r]/g, "")) ? [`line ${index + 1}: an invisible or reordering character (control, bidi, zero-width, line separator); a contract holds none`] : []);
function Qe(e) {
  try {
    _4n("contract.d.ts", e);
    return;
  } catch (error) {
    return `does not parse as TypeScript: ${d(error)}`;
  }
}
function et(e, n) {
  let s = new Map(),
    r = (a, i) => e[a]?.kind === "punct" && e[a].text === i;
  for (let {
    start: start_2,
    end: end_6
  } of n) for (let l = start_2; l < end_6; l += 1) {
    if (!ge(e, l, "PluginState")) continue;
    let c = l + 2,
      m = ne(e, c),
      p = new Set(ie(e, c)),
      y = 0;
    for (let h = c + 1; h < m; h += 1) {
      let v = e[h];
      if (y === 0 && v !== void 0 && v.kind !== "punct" && p.has(v.text) && r(h + 1, ":") && r(h + 2, "{")) {
        let x = s.get(v.text) ?? new Set();
        for (let f of ie(e, h + 2)) x.add(f);
        s.set(v.text, x);
      }
      let R = r(h, "{") || r(h, "(") || r(h, "["),
        C = r(h, "}") || r(h, ")") || r(h, "]");
      y += Number(R) - Number(C);
    }
  }
  return [...s].map(([plugin, i]) => ({
    plugin: plugin,
    keys: [...i]
  }));
}
function tt(e) {
  let n = _4n("contract.ts", e).replace(/^\s*export\s*\{\s*\};?\s*$/m, "").trim(),
    s = Sr(n);
  return n === "" ? [] : [`the contract holds code that would run (\`${s}\`); a contract is types only`];
}
var nt = e => e.flatMap((item, index) => {
  let r = e[index - 1],
    a = A(item, "word", "class", "const", "enum", "function", "let", "var"),
    i = r === void 0 || r.line < item.line || A(r, "punct", ";", "{", "}") || A(r, "word", "abstract", "async", "declare", "default", "export"),
    l = A(e[index + 1], "punct", ":", "?", "(", "<");
  return a && i && !l ? [`line ${item.line}: \`${item.text}\` declares something that runs; a contract holds types only`] : [];
});
var st = {
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
var rt = e => e.filter(item => item.kind === "stray").map(item => `line ${item.line}: ` + (st[item.text] ?? `\`${item.text}\``) + ": a type contract never holds one, so the check refuses it rather than read past it");
var le = "claude-code";
function ot(e, n) {
  let [s, r, a] = ae(e, n),
    [,, i] = ae(e, n + 1),
    l = A(s, "word", "declare") && A(r, "word", "module") && a?.kind === "string" && s?.line === r?.line && r?.line === a.line && A(i, "punct", "{"),
    c = l && a.text !== le,
    m = A(s, "word", "declare") && !l,
    p = A(s, "word", "export") && !A(r, "word", "type", "interface"),
    y = A(s, "word", "abstract", "async", "default", "module", "namespace"),
    h = A(s, "word", "type", "interface") && !A(e[n - 1], "word", "export", "import");
  return c ? `augments module '${a.text}'; the contract may only augment '${le}'` : m ? `\`declare\` at the top level opens only \`declare module '${le}' { \u2026 }\`, its three words on one line` : p ? "`export` at the top level is followed by `type` or `interface`: a contract exports types and nothing else" : y ? `\`${s?.text}\` at the top level: a contract holds type exports and \`declare module '${le}'\` blocks only` : h ? `a top-level \`${s?.text}\` without \`export\` would be global in a dependent's program; export it` : void 0;
}
function at(e) {
  let problems = [],
    blocks = [],
    r = 0,
    a = 0;
  while (a < e.length) {
    let [i, l, c] = ae(e, a),
      p = r === 0 && i?.kind === "word" ? ot(e, a) : void 0,
      y = p === void 0 || p.startsWith("augments"),
      h = r === 0 && y && A(i, "word", "declare") && A(l, "word", "module") && c?.kind === "string",
      v = a + 2;
    if (r += Ve(i), p !== void 0) problems.push(`line ${i?.line}: ${p}`);
    if (!h) {
      a += 1;
      continue;
    }
    let end_7 = ne(e, v + 1);
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
function it(e) {
  let n = Qe(e);
  if (n !== void 0) return {
    problems: [n],
    nouns: [],
    state: []
  };
  let s = We(e),
    r = s.filter(item => item.kind !== "reference"),
    {
      problems: problems_2,
      blocks: blocks_2
    } = at(r);
  return {
    problems: [...Xe(e), ...rt(s), ...qe(e), ...Ze(s), ...problems_2, ...nt(r), ...tt(e), ...Ge(r)],
    nouns: Ye(r, blocks_2),
    state: et(r, blocks_2)
  };
}
import { isAbsolute as mn, relative as fn, resolve as hn } from "path";
var ce = (...e) => ({
  kind: "refused",
  problems: e.map(zr)
});
async function ye(e, n, s) {
  let r = e ?? relPath_3,
    a = hn(n, r),
    i = fn(n, a);
  if (i.startsWith("..") || mn(i)) return ce(`${r} leaves the plugin's folder`);
  let c = x => ce(`${r}: ${$_r(s, a, x)}`),
    m = await HXe(a, n, s).then(x => x, x => e === void 0 && H_r(x) ? void 0 : c(x));
  if (m === void 0 || "kind" in m) return m;
  if (m.size > PPt) return ce(`${r} is over ${PPt} bytes and was not read`);
  let text_2 = await U_r(m.real).then(x => x, c);
  if (typeof text_2 !== "string") return text_2;
  let {
    problems: problems_3,
    nouns: nouns,
    state: state
  } = it(text_2);
  return problems_3.length === 0 ? {
    kind: "read",
    text: text_2,
    nouns: nouns,
    state: state
  } : ce(...problems_3);
}
function wn({
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
  } of names.writes) if (plugin_3 !== owner) problems_4.push(`$.state.set refers to ${Agt({
    plugin: plugin_3,
    key: key
  })}, which ${plugin_3} owns: only a value's owner writes it (to change what is written, hook ${plugin_3}'s state.set and rewrite e.value)`);
  for (let {
    plugin: plugin_4,
    key: key_2
  } of [...names.reads, ...names.writes]) {
    let h = plugin_4 === owner,
      v = h || others !== void 0,
      b = Agt({
        plugin: plugin_4,
        key: key_2
      });
    if (!v) {
      m.add(b);
      continue;
    }
    let R = l.get(plugin_4)?.has(key_2) === !0,
      C = h ? contract ?? "the manifest's types contract" : "no enabled plugin's contract",
      x = refusal ?? `${C} must name it in interface PluginState { ${plugin_4}: { ${key_2}: ... } }`,
      f = h ? `${b} is not declared: ${x}` : `${b} is not declared: ${C} names it in PluginState`;
    if (!R && !problems_4.includes(f)) problems_4.push(f);
  }
  return {
    problems: problems_4,
    unchecked: [...m]
  };
}
var Se = ["monitors", "themes"],
  $n = [{
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
function ct(e) {
  let n = N(e.experimental) ? e.experimental : void 0,
    s = [];
  for (let spec of $n) {
    let a = e[spec.key],
      i = spec.key,
      l = n !== void 0 && Se.includes(spec.key) && Object.hasOwn(n, spec.key) ? n[spec.key] : void 0;
    if (l != null) a = l, i = `experimental.${spec.key}`;
    let c = [];
    if (spec.bareStringOnly) c.push([i, a]);else if (Array.isArray(a)) for (let [m, p] of a.entries()) c.push([`${i}[${m}]`, p]);else if (!N(a)) c.push([spec.bareStringIndexed ? `${i}[0]` : i, a]);else if (spec.recordPathProperty !== void 0) {
      for (let [m, p] of Object.entries(a)) if (N(p)) c.push([`${i}.${m}.${spec.recordPathProperty}`, p[spec.recordPathProperty]]);
    }
    for (let [field, relPath] of c) if (typeof relPath === "string" && !(spec.acceptsUrl && /^[a-z][a-z0-9+.-]*:\/\//i.test(relPath))) s.push({
      spec: spec,
      field: field,
      relPath: relPath
    });
  }
  return s;
}
var pt = new Set(["icon", "screenshots", "classification", "privacyPolicyUrl", "privacy_policy", "privacyPolicy", "supportUrl", "support", "bugs", "termsOfServiceUrl", "terms_of_service", "documentationUrl", "docs"]);
var xn = ["CLAUDE_PLUGIN_ROOT", "CLAUDE_PLUGIN_DATA", "CLAUDE_PROJECT_DIR"];
function dt(e) {
  let n = [];
  for (let [event, r] of Object.entries(e)) for (let a of r ?? []) for (let i of a.hooks) {
    if (i.type !== "command" || i.args !== void 0 || i.shell === "powershell") continue;
    let placeholders = Tn(i.command);
    if (placeholders.length > 0) n.push({
      event: event,
      command: i.command,
      placeholders: placeholders
    });
  }
  return n;
}
function Tn(e) {
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
    for (let l of xn) {
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
import { resolve as Rn } from "path";
import { resolve as mt } from "path";
import { sep as ut } from "path";
var Ce = e => e.endsWith(ut) ? e.slice(0, -ut.length) : e;
var Yqt = (e, n) => Ce(mt(e)) === Ce(mt(n));
function ke(e, n, s) {
  let {
    source: source
  } = e;
  return typeof source === "string" && Yqt(Rn(n, source), s);
}
function Vsr(e, n, s) {
  return typeof e.source === "string" ? ke(e, n, s.root) : e.name === s.name;
}
import { readFile as Nn } from "fs/promises";
async function qsr(e) {
  try {
    let n = _pn().safeParse(J(Bo(await Nn(e, {
      encoding: "utf-8"
    }))));
    return n.success ? n.data : void 0;
  } catch {
    return;
  }
}
var _n = new Set(["category", "source", "tags", "strict", "id", "relevance", "headers", "headersHelper"]),
  wt = new Map([["publisher", "a VS Code/Cursor extension manifest"], ["engines", "a VS Code/Cursor extension manifest"], ["categories", "a VS Code/Cursor extension manifest"], ["icon", "a VS Code/Cursor extension manifest"], ["contributes", "a VS Code/Cursor extension manifest"], ["activationEvents", "a VS Code/Cursor extension manifest"], ["preview", "a VS Code/Cursor extension manifest"], ["main", "an npm package.json"], ["type", "an npm package.json"], ["files", "an npm package.json"], ["bin", "an npm package.json"], ["scripts", "an npm package.json"], ["private", "an npm package.json"], ["bugs", "an npm package.json"], ["contributors", "an npm package.json"], ["dxt_version", "an MCPB/DXT manifest"], ["mcpb_version", "an MCPB/DXT manifest"], ["user_config", "an MCPB/DXT manifest"], ["compatibility", "an MCPB/DXT manifest"], ["server", "an MCP server manifest"], ["tools", "an MCP server manifest"], ["prompts", "an MCP server manifest"], ["resources", "an MCP server manifest"], ["logo", "manifests across many tools"], ["readme", "manifests across many tools"], ["changelog", "manifests across many tools"], ["support", "manifests across many tools"], ["privacy_policy", "manifests across many tools"], ["privacy_policies", "manifests across many tools"], ["terms_of_service", "manifests across many tools"], ["_comment", "manifests across many tools"], ["$id", "a JSON Schema document"], ["$comment", "a JSON Schema document"]]),
  Ln = new Map([["user_config", "userConfig"]]),
  bt = new Set(["themes", "monitors", "outputStyles", "evals", "syntaxHighlighting"]),
  In = new Set(uuo.map(Lm));
function z7o(e, n) {
  let noErrors = e.every(item => item.success),
    hasWarnings = e.some(item => item.warnings.length > 0);
  return {
    noErrors: noErrors,
    hasWarnings: hasWarnings,
    allSuccess: n.strict ? noErrors && !hasWarnings : noErrors
  };
}
function Y(e) {
  return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
}
function Fn(e) {
  let n = g.basename(e),
    s = g.basename(g.dirname(e));
  if (n === "plugin.json") return "plugin";
  if (n === "marketplace.json") return "marketplace";
  if (s === ".claude-plugin") return "plugin";
  return "unknown";
}
function de(e) {
  return e.issues.map(item => ({
    path: item.path.join(".") || "root",
    message: item.message,
    code: item.code
  }));
}
function Dn(e, n) {
  if (wt.has(e)) return;
  let s = e.length <= 3 ? 1 : 2,
    r = e.toLowerCase(),
    a,
    i = s + 1;
  for (let l of n) {
    if (Math.abs(l.length - e.length) > s) continue;
    if (l.toLowerCase() === r) return l;
    let c = vne(e, l, s);
    if (c < i) i = c, a = l;
  }
  return a;
}
function zn(e, n, s) {
  if (s?.has(e)) return `Field '${e}' belongs in the marketplace entry (marketplace.json), ` + "not plugin.json. It's harmless here but unused \u2014 Claude Code " + "ignores it at load time.";
  let r = Dn(e, n);
  if (r) return `Unknown field '${e}' \u2014 did you mean '${r}'? Claude Code ignores unrecognized fields at load time, so this field has no effect.`;
  let a = Ln.get(e);
  if (a && n.has(a)) return `Field '${e}' is the cross-tool spelling of Claude Code's '${a}'. Rename it to '${a}' for Claude Code to read it (the option ` + "shapes differ slightly \u2014 re-run validate after renaming to check). " + "As-is, Claude Code ignores it at load time.";
  let i = wt.get(e);
  if (i) return `Unknown field '${e}' (commonly seen in ${i}). Claude Code ignores unrecognized fields at load time, so it's safe to keep.`;
  return `Unknown field '${e}'. Claude Code ignores it at load time.`;
}
function X(e, n, s, r, a, i) {
  for (let l of Object.keys(e)) {
    if (n.has(l) || i?.has(l)) continue;
    r.push({
      path: s ? `${s}.${l}` : l,
      message: zn(l, n, a)
    });
  }
}
function xe(e) {
  let n = e.replace(/^[a-zA-Z]:/, "");
  return n_(n) || QGe(n);
}
function Pe(e, path, s, r) {
  if (xe(e)) s.push({
    path: path,
    message: r ? `Path contains "..": ${e}. ${r}` : `Path contains ".." which could be a path traversal attempt: ${e}`
  });
}
function Vn(e) {
  let n = e.replace(/^(\.\.\/)+/, "");
  return `Plugin source paths are resolved relative to the marketplace root (the directory containing .claude-plugin/), not relative to marketplace.json. Use "${n !== e ? `./${n}` : "./plugins/my-plugin"}" instead of "${e}".`;
}
async function Xqt(e, n = {
  kind: "alone"
}) {
  return oe(await Hn(e, n));
}
async function Hn(e, n) {
  let filePath = g.resolve(e),
    r;
  try {
    r = await _e(filePath, {
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
  return vt(filePath, r, n);
}
async function vt(e, n, s) {
  let errors = [],
    warnings = [],
    notes = [],
    l;
  try {
    l = J(Bo(n));
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
  let c = xue(l, "plugin-json", {
    pluginName: g.basename(g.dirname(g.dirname(e))),
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
      y = g.dirname(e),
      h = g.basename(y) === ".claude-plugin" ? g.dirname(y) : y,
      v = async (b, path_2, C = "The runtime loader will report this as a load failure.") => {
        if (Pe(b, path_2, errors), xe(b) || g.isAbsolute(b) || /^[a-zA-Z]:/.test(b)) return;
        try {
          return await kt(g.resolve(h, b));
        } catch (error) {
          let f = k(error);
          errors.push({
            path: path_2,
            message: `Path not found: ${b}${f && f !== "ENOENT" ? ` (${f})` : ""}. ${C}`
          });
          return;
        }
      };
    for (let {
      spec: spec_2,
      field: R,
      relPath: relPath_2
    } of ct(p)) {
      let x = await v(relPath_2, R, spec_2.missingConsequence?.(relPath_2));
      if (x === void 0) continue;
      if (spec_2.key === "skills" && !x.isDirectory()) {
        let f = g.dirname(relPath_2),
          S = g.basename(relPath_2).toLowerCase() === "skill.md" ? f === "." ? " \u2014 point to the plugin root '.' instead" : ` \u2014 point to the parent directory '${f}' instead` : "";
        errors.push({
          path: R,
          message: `Path is a file; skills entries must be directories containing SKILL.md${S}: ${relPath_2}`
        });
      }
      if (spec_2.jsonFile && relPath_2.endsWith(".json") && x.isDirectory()) errors.push({
        path: R,
        message: `Path is a directory; ${spec_2.key} must point to a JSON file: ${relPath_2}`
      });
      if (spec_2.key === "types") {
        let f = ht(await ye(relPath_2, h, g.basename(h)), {
          relPath: relPath_2,
          field: R
        });
        errors.push(...f.errors), notes.push(...f.notes);
      }
    }
    if (p.types === void 0) {
      let b = await ye(void 0, h, g.basename(h));
      if (b?.kind === "read") notes.push(...ht(b, {
        relPath: relPath_3,
        field: "types"
      }).notes);
    }
    if (p.mcpServers !== void 0) {
      let b = Array.isArray(p.mcpServers) ? p.mcpServers : [p.mcpServers],
        R;
      for (let [C, x] of b.entries()) {
        let f = Array.isArray(p.mcpServers) ? `mcpServers[${C}]` : "mcpServers";
        if (N(x)) {
          R ??= await cs(p, e);
          for (let [S, w] of Object.entries(x)) {
            let E = xt(`${f}.${ih(S, 64)}`, w, R(S));
            errors.push(...E.errors), warnings.push(...E.warnings);
          }
        }
      }
    }
  }
  if (N(l)) {
    let p = l,
      y = c.rawCandidate ?? p;
    if (X(y, new Set(Object.keys(jJ().shape)), "", warnings, _n, pt), "capabilities" in y) {
      let h = warnings.findIndex(item => item.path === "capabilities"),
        v = {
          path: "capabilities",
          message: "'capabilities' is no longer read: what a hooks module hooks and calls on $ is read from its source and listed under its hooks.json below. Delete the field."
        };
      if (h === -1) warnings.push(v);else warnings[h] = v;
    }
    for (let path_3 of Se) if (path_3 in p) warnings.push({
      path: path_3,
      message: `'${path_3}' is an experimental component; declare it under 'experimental.${path_3}' instead of at the top level. Top-level still loads for now but will be removed in a future release.`
    });
    if ("experimental" in p) if (N(p.experimental)) {
      let experimental = p.experimental;
      X(experimental, bt, "experimental", warnings);
    } else warnings.push({
      path: "experimental",
      message: `'experimental' must be an object containing component declarations; got ${Y(p.experimental)}. It will be ignored at load time.`
    });
    if ("metadata" in y && !N(y.metadata)) warnings.push({
      path: "metadata",
      message: `'metadata' must be a free-form object; got ${Y(y.metadata)}. It will be ignored at load time.`
    });
    if ("binaries" in p) if (N(p.binaries)) {
      let h = HBt(p.binaries) ?? {},
        v = 0;
      for (let [R, C] of Object.entries(p.binaries)) {
        if (P_t.test(R) && typeof C === "object" && C !== null && typeof C.sha256 === "string" && q$o.test(C.sha256)) {
          v++;
          continue;
        }
        if (!Object.hasOwn(h, R)) warnings.push({
          path: `binaries.${R}`,
          message: `Invalid binaries entry; it will be ignored at install time. The basename must match ${String(P_t)} (lowercase, no leading or trailing dot) and the value must be an object with a 64-character lowercase-hex 'sha256'.`
        });
      }
      if (v > b$r) warnings.push({
        path: "binaries",
        message: `${v} valid binaries entries declared, but the install hook processes at most ${b$r}; the rest are dropped entirely.`
      });
      let b = Object.keys(h).length;
      if (b > FBt) warnings.push({
        path: "binaries",
        message: `${b} valid binaries entries declared, but only the first ${FBt} are fetched at install time; the rest are ignored. Reduce the count or split across plugins.`
      });
    } else warnings.push({
      path: "binaries",
      message: `'binaries' must be an object mapping basenames to { sha256 }; got ${Y(p.binaries)}. It will be ignored at install time.`
    });
  }
  let manifest = c.manifest;
  if (manifest) {
    let p = manifest;
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(p.name)) {
      let v = "Claude Code accepts it, but the";
      if (BBt.test(p.name)) v = "Claude Code refuses a plugin with this name when it is loaded by path (such as --plugin-dir), and cannot install it from a marketplace that lists it under this name. The";else if (!oF(p.name)) v = "Claude Code cannot install it from a marketplace that lists it under this name, and the";
      warnings.push({
        path: "name",
        message: `Plugin name "${p.name}" is not kebab-case. ${v} Claude.ai marketplace sync requires kebab-case (lowercase letters, digits, and hyphens only, e.g., "my-plugin").` + pe(p.name)
      });
    }
    let h = s.kind === "alone" || s.kind === "entry" && s.entryName !== p.name ? kqe(p.name) : void 0;
    if (h) (h.severity === "error" ? errors : warnings).push({
      path: "name",
      message: s.kind === "alone" ? `${h.message} ${G7o}` : h.message
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
var ft = /^[A-Za-z0-9][A-Za-z0-9._-]{0,127}$/,
  Bn = new Set(["org", "org-provisioned", "unknown"]),
  code_3 = "UNRECORDABLE_NAME",
  Ksr = 'Each part of a plugin id (plugin@marketplace) may use only the letters a-z and A-Z, digits, ".", "_" and "-", and must start with a letter or digit.';
function pe(e) {
  return ih(e, e.length) === e ? "" : " The name holds a character that is not shown here.";
}
async function Re(e) {
  return oe(await Un(e));
}
async function Un(e) {
  let errors_2 = [],
    warnings_2 = [],
    filePath_2 = g.resolve(e),
    a;
  try {
    a = await _e(filePath_2, {
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
    i = J(Bo(a));
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
    c = N(i) && N(i.metadata) ? i.metadata.pluginRoot : void 0,
    m = X$o(c),
    p = N(i) && typeof i.name === "string" && mpn(i.name);
  if (i && typeof i === "object") {
    let f = i;
    if (Array.isArray(f.plugins)) l = f.plugins, f.plugins.forEach((item, index) => {
      if (item && typeof item === "object" && "source" in item) {
        let source_2 = item.source;
        if (typeof source_2 === "string") Pe(source_2, `plugins[${index}].source`, errors_2, Vn(source_2));
        if (A$r(source_2) && m === void 0) errors_2.push({
          path: `plugins[${index}].source`,
          message: c === void 0 ? `Bare source name "${source_2}" requires metadata.pluginRoot. Use "./relative/path", or set metadata.pluginRoot (e.g. "./plugins") to allow bare names.` : typeof c === "string" ? `Bare source name "${source_2}" cannot resolve: metadata.pluginRoot ("${c}") must be a relative path inside the marketplace (e.g. "./plugins").` : `Bare source name "${source_2}" cannot resolve: metadata.pluginRoot must be a relative path inside the marketplace (e.g. "./plugins").`
        });
        if (source_2 && typeof source_2 === "object" && "path" in source_2 && typeof source_2.path === "string") Pe(source_2.path, `plugins[${index}].source.path`, errors_2);
      }
    });
  }
  let y = R$r().extend({
      topic: o().min(1).max(64).optional(),
      signals: C$r().extend({
        cli: T(o().min(1).max(64)).max(10).optional(),
        hosts: T(o().min(1).max(128).refine(f => /^[a-z0-9.-]+$/.test(f), "must be a lowercase bare hostname (no scheme, port, or path)")).max(20).optional(),
        filesRead: T(o().min(1).max(256).refine(f => !f.includes("\\"), 'must use forward slashes (e.g. "**/*.tf"), not backslashes')).max(10).optional(),
        manifestDeps: T(u({
          file: o().min(1).max(256).refine(D8n, "must be a valid regular expression"),
          pattern: o().min(1).max(256).refine(D8n, "must be a valid regular expression")
        })).min(1).max(10).optional(),
        cwd: T(o().min(1).max(256).refine(f => !f.includes("\\"), 'must use forward slashes (e.g. "Engine/Source/**"), not backslashes')).max(10).optional()
      }).refine(f => (f.cli?.length ?? 0) > 0 || (f.hosts?.length ?? 0) > 0 || (f.filesRead?.length ?? 0) > 0 || (f.manifestDeps?.length ?? 0) > 0 || (f.cwd?.length ?? 0) > 0, "must declare at least one signal (cli, hosts, filesRead, manifestDeps, or cwd)")
    }).optional(),
    h = H8n().extend({
      relevance: wa(f => N(f) ? f : void 0, y)
    }).refine(f => typeof f.source === "string" || f.source.source !== "unsupported", {
      message: "source.source: 'unsupported' is a parse-time placeholder and cannot be authored"
    }),
    b = Sze().extend({
      plugins: T(h),
      renames: fe(o(), o().nullable()).optional()
    }).safeParse(UBt(i));
  if (!b.success) errors_2.push(...de(b.error));
  if (b.success && b.data.renames) {
    let f = new Set(b.data.plugins.map(item => item.name));
    for (let S of Object.keys(b.data.renames)) {
      let w = mOt(S, b.data.renames, f);
      if (w?.kind === "unresolved") errors_2.push({
        path: `renames.${S}`,
        message: `chain does not resolve (${w.reason}) \u2014 target must be a name in plugins[], a key in renames, or null`
      });else if (w?.kind === "renamed" && !JD().safeParse(`${w.to}@placeholder`).success) errors_2.push({
        path: `renames.${S}`,
        message: `target "${w.to}" is not a valid plugin name (PluginIdSchema)`
      });
    }
  }
  if (N(i)) {
    let f = i;
    if (X(f, new Set(Object.keys(Sze().shape)), "", warnings_2), typeof f.name === "string" && f.name) {
      let w = oF(f.name);
      if (!w) errors_2.push({
        path: "name",
        code: code_3,
        message: `Claude Code cannot install plugins from marketplace "${ih(f.name, 64)}". ${Ksr} Change the marketplace's "name".` + pe(f.name)
      });
      if (Bn.has(f.name.toLowerCase())) warnings_2.push({
        path: "name",
        message: `Marketplace name "${f.name}" is reserved in Claude Desktop. Claude Code accepts it, but the Claude Desktop managed marketplace sync (allowedPluginMarketplaces) will reject the whole marketplace.`
      });else if (!ft.test(f.name)) warnings_2.push({
        path: "name",
        message: `Marketplace name "${f.name}" is not accepted by Claude Desktop (letters, digits, ".", "_", "-"; must start alphanumeric; max 128 chars). ` + (w ? "Claude Code accepts it, but the " : "The ") + "Claude Desktop managed marketplace sync (allowedPluginMarketplaces) will reject the whole marketplace." + pe(f.name)
      });
    }
    let metadata = f.metadata;
    if (N(metadata)) X(metadata, new Set(Object.keys(Sze().shape.metadata.unwrap().shape)), "metadata", warnings_2);
    if (Array.isArray(f.plugins)) {
      let w = new Set(Object.keys(H8n().shape)),
        E = new Set(Object.keys(R$r().shape)),
        L = new Set(Object.keys(C$r().shape));
      f.plugins.forEach((item, index) => {
        if (!N(item)) return;
        let j = item;
        if (X(j, w, `plugins[${index}]`, warnings_2), typeof j.name === "string" && j.name) {
          let H = oF(j.name);
          if (!H) errors_2.push({
            path: `plugins[${index}].name`,
            code: code_3,
            message: `Claude Code cannot install plugin "${ih(j.name, 64)}". ${Ksr} Change this entry's "name".` + pe(j.name)
          });
          if (!ft.test(j.name)) warnings_2.push({
            path: `plugins[${index}].name`,
            message: `Plugin name "${j.name}" is not accepted by Claude Desktop (letters, digits, ".", "_", "-"; must start alphanumeric; max 128 chars). ` + (H ? "Claude Code accepts it, but the " : "The ") + "Claude Desktop managed marketplace sync (allowedPluginMarketplaces) will drop this entry." + pe(j.name)
          });
          let Z = p ? void 0 : kqe(j.name);
          if (Z) (Z.severity === "error" ? errors_2 : warnings_2).push({
            path: `plugins[${index}].name`,
            message: Z.message
          });
        }
        let experimental_2 = j.experimental;
        if (N(experimental_2)) X(experimental_2, bt, `plugins[${index}].experimental`, warnings_2);else if (experimental_2 !== void 0) warnings_2.push({
          path: `plugins[${index}].experimental`,
          message: `'experimental' must be an object containing component declarations; got ${Y(experimental_2)}. It will be ignored at load time.`
        });
        let relevance = j.relevance;
        if (N(relevance)) {
          X(relevance, E, `plugins[${index}].relevance`, warnings_2);
          let signals = relevance.signals;
          if (N(signals)) X(signals, L, `plugins[${index}].relevance.signals`, warnings_2);
        } else if (relevance !== void 0) warnings_2.push({
          path: `plugins[${index}].relevance`,
          message: `'relevance' must be an object containing topic and signals; got ${Y(relevance)}. It will be ignored at load time.`
        });
        let metadata_2 = j.metadata;
        if (metadata_2 !== void 0 && !N(metadata_2)) warnings_2.push({
          path: `plugins[${index}].metadata`,
          message: `'metadata' must be a free-form object; got ${Y(metadata_2)}. It will be ignored at load time.`
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
      if (f.plugins.filter(M => M.name === item.name).length > 1) errors_2.push({
        path: `plugins[${index}].name`,
        message: `Duplicate plugin name "${item.name}" found in marketplace`
      });
      let L = typeof item.source === "object" && item.source.source === "archive";
      if (L && dOe(item) && item.strict !== !1) errors_2.push({
        path: `plugins[${index}].headersHelper`,
        message: `Plugin "${yy(item.name)}" sets headersHelper but is not "strict": false. An entry with headersHelper must inline its full manifest (strict: false, with commands/agents/hooks/mcpServers declared in the entry) so users can review what it ships before the command runs; Claude Code refuses to run the helper otherwise.`
      });
      if ((item.headers !== void 0 || dOe(item)) && !L) warnings_2.push({
        path: `plugins[${index}].${dOe(item) ? "headersHelper" : "headers"}`,
        message: `Plugin "${yy(item.name)}" sets headers/headersHelper, which only apply to "archive" sources; they have no effect on this entry.`
      });else if (dOe(item) && typeof item.source === "object" && item.source.source === "archive" && !item.source.sha256) warnings_2.push({
        path: `plugins[${index}].source.sha256`,
        message: `Plugin "${yy(item.name)}" fetches its archive with a headersHelper but sets no sha256 pin. Consider pinning the digest so the bytes users install are exactly the ones you reviewed (omit it only if you rely on digest-versioned updates).`
      });
      for (let M of L ? Object.keys(item.headers ?? {}) : []) if (Jvo(M)) warnings_2.push({
        path: `plugins[${index}].headers.${yy(M)}`,
        message: `Header "${yy(M)}" is a request-routing/identity header that catalog entries may not set; Claude Code drops it at download time.`
      });
    });
    if (!f.description && !f.metadata?.description) warnings_2.push({
      path: "description",
      message: "No marketplace description provided. Adding a description helps users understand what this marketplace offers"
    });
  }
  let R = H8n(),
    C = g.dirname(filePath_2),
    x = g.basename(C) === ".claude-plugin" ? g.dirname(C) : C;
  for (let [f, S] of l.entries()) {
    let w = R.safeParse(J$o(S, m));
    if (!w.success) continue;
    let E = w.data,
      source_3 = E.source;
    if (!r7e(source_3) || xe(source_3)) continue;
    let M = g.join(x, source_3),
      _ = g.join(M, ".claude-plugin", "plugin.json"),
      j = g.relative(x, _),
      B = await tM(x, g.join(M, ".claude-plugin"));
    if (B === "not-a-directory") {
      errors_2.push({
        path: `plugins[${f}] plugin.json \u2192 file`,
        code: "ENOTDIR",
        message: `A path component of ${j} is not a directory, so the file cannot be read. The entry will fail to load at install time.`
      });
      continue;
    }
    if (B === "refused") {
      warnings_2.push({
        path: `plugins[${f}].source`,
        message: `Local source "${source_3}" is or traverses a symlink, so ${j} was not read \u2014 ` + "validation never follows one. Install dereferences symlinks that stay inside the marketplace, so this entry still loads. Validate the real path separately."
      });
      continue;
    }
    if (B !== "ok") continue;
    let z;
    try {
      z = await _q(_);
    } catch (error) {
      errors_2.push({
        path: `plugins[${f}] plugin.json \u2192 file`,
        message: `Failed to read ${j}: ${d(error)}`
      });
      continue;
    }
    if (z.kind === "refused" || z.kind === "too-large") {
      warnings_2.push({
        path: `plugins[${f}].source`,
        message: `${j} ${z.kind === "refused" ? "is a symlink or is not a regular file" : `is larger than ${Qle} bytes`}, so it was not validated. Install reads it anyway. Validate it separately.`
      });
      continue;
    }
    if (z.kind === "absent") continue;
    let content = z.content;
    if (E.version) {
      let D;
      try {
        let U = J(Bo(content));
        if (typeof U.version === "string") D = U.version;
      } catch (error) {
        warnings_2.push({
          path: `plugins[${f}].source`,
          message: `Could not parse ${g.relative(x, _)} for version cross-check: ${d(error)}`
        });
      }
      if (D && D !== E.version) {
        let U = g.relative(x, _);
        warnings_2.push({
          path: `plugins[${f}].version`,
          message: `Entry declares version "${E.version}" but ${U} says "${D}". ` + "At install time, plugin.json wins (calculatePluginVersion precedence) \u2014 the entry version is silently ignored. " + `Update this entry to "${D}" to match.`
        });
      }
    }
    let H = oe(await vt(_, content, p ? {
        kind: "anthropic"
      } : {
        kind: "entry",
        entryName: E.name
      })),
      Z = `plugins[${f}] plugin.json \u2192 `;
    for (let D of H.errors) errors_2.push({
      ...D,
      path: Z + D.path
    });
    for (let D of H.warnings) warnings_2.push({
      ...D,
      path: Z + D.path
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
function ih(e, n) {
  return zr(Nl(Wf(e), n));
}
function oe(e) {
  return {
    ...e,
    errors: e.errors.map(item => ({
      ...item,
      path: ih(item.path, 200),
      message: ih(item.message, 1000)
    })),
    warnings: e.warnings.map(item => ({
      path: ih(item.path, 200),
      message: ih(item.message, 1000)
    })),
    ...(e.notes !== void 0 && {
      notes: e.notes.map(item => ih(item, 1000))
    }),
    ...(e.gatingHooks !== void 0 && {
      gatingHooks: e.gatingHooks.map(item => ({
        module: ih(item.module, 200),
        pattern: ih(item.pattern, 200),
        hook: ih(item.hook, 1000),
        hasCatch: item.hasCatch
      }))
    })
  };
}
function Wn(filePath_3, n, fileType, r) {
  let errors_3 = [],
    warnings_3 = [],
    l = r === "project" && fileType === "agent",
    c = Bo(n).match(HE);
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
  let m = Con(c[1] || "");
  if (!m.ok) {
    let v = fileType !== "agent" ? `At runtime this ${fileType} loads with empty metadata (all frontmatter fields silently dropped).` : r === "project" ? "At runtime this agent does not load at all \u2014 with no frontmatter " + "name it is treated as a co-located reference document and skipped." : "At runtime this agent loads with its name taken from the filename and every other frontmatter field silently dropped.";
    return errors_3.push({
      path: "frontmatter",
      message: `YAML frontmatter failed to parse: ${ih(m.error, 200)}. ` + v
    }), {
      success: !1,
      errors: errors_3,
      warnings: warnings_3,
      filePath: filePath_3,
      fileType: fileType
    };
  }
  let p = m.value;
  if (p !== null && !N(p)) return errors_3.push({
    path: "frontmatter",
    message: `Frontmatter must be a YAML mapping (key: value pairs), got ${Array.isArray(p) ? "an array" : typeof p}.`
  }), {
    success: !1,
    errors: errors_3,
    warnings: warnings_3,
    filePath: filePath_3,
    fileType: fileType
  };
  let y = p ?? {};
  if (y.description !== void 0) {
    let description = y.description;
    if (typeof description !== "string" && typeof description !== "number" && typeof description !== "boolean" && description !== null) errors_3.push({
      path: "description",
      message: `description must be a string, got ${Array.isArray(description) ? "array" : typeof description}. At runtime this value is dropped.`
    });
  } else if (!l || typeof y.name === "string") warnings_3.push({
    path: "description",
    message: `No description in frontmatter. A description helps users and Claude understand when to use this ${fileType}.`
  });
  if (y.name !== void 0 && y.name !== null && typeof y.name !== "string") errors_3.push({
    path: "name",
    message: `name must be a string, got ${typeof y.name}.`
  });
  let h = y["allowed-tools"];
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
      if (R == null || N(R)) return;
      v = !0, warnings_3.push({
        path: "metadata",
        message: `'metadata' must be a mapping (key: value pairs); got ${Array.isArray(R) ? "array" : typeof R}. It is dropped at load time.`
      });
    })(y.metadata);
  }
  if (fileType === "skill" || fileType === "command") {
    let shell = y.shell;
    if (shell !== void 0 && shell !== null) if (typeof shell !== "string") errors_3.push({
      path: "shell",
      message: `shell must be a string, got ${typeof shell}.`
    });else {
      let b = shell.trim().toLowerCase();
      if (b !== "bash" && b !== "powershell") errors_3.push({
        path: "shell",
        message: `shell must be 'bash' or 'powershell', got '${ih(shell, 64)}'.`
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
async function Kn(filePath_4, n) {
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
      result: K(filePath_4, "hooks", `${w} \u2014 hooks are read without following symlinks and are capped at ` + `${Qle} bytes. The plugin loader has neither limit and fails the whole plugin on bad hook config, so validate the real file separately.`),
      modules: []
    }),
    a = g.dirname(filePath_4),
    i = await tM(g.dirname(a), a);
  if (i === "refused") return r("The hooks directory is a symlink and was not read");
  if (i !== "ok") return s;
  let l;
  try {
    l = await _q(filePath_4);
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
    m = J(content_2);
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
  if (UJ(m, O8n) || ihe(m)) return {
    result: {
      success: !1,
      errors: [{
        path: "hooks",
        message: `PreToolUse/PermissionRequest is declared at the top level, outside the "hooks" object \u2014 ${cv}`
      }],
      warnings: [],
      filePath: filePath_4,
      fileType: "hooks"
    },
    modules: []
  };
  let p = m && typeof m === "object" && "hooks" in m ? lhe(m.hooks) : {
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
        message: `${item} \u2014 ${cv}`
      })),
      warnings: warnings_4,
      filePath: filePath_4,
      fileType: "hooks"
    },
    modules: []
  };
  let h = M8n().safeParse(m);
  if (!h.success) return {
    result: {
      success: !1,
      errors: de(h.error),
      warnings: warnings_4,
      filePath: filePath_4,
      fileType: "hooks"
    },
    modules: []
  };
  let v = [];
  for (let w of dt(h.data.hooks ?? {})) v.push({
    path: `hooks.${w.event}`,
    message: `Shell command uses ${w.placeholders.join(", ")} without quotes: ${ih(w.command, 200)}. If the expanded path contains a space the command can split into several words and fail. Wrap the placeholder in double quotes, or use exec form: {"command": "<executable>", "args": ["\${CLAUDE_PLUGIN_ROOT}/..."]}.`
  });
  let errors_4 = [],
    notes_2 = [],
    gatingHooks = [],
    modules = h.data.modules ?? [],
    f = modules.length > 0 ? await Gn(n) : ee,
    nouns_2 = f.nouns;
  for (let module of modules) {
    let E = g.resolve(a, module),
      L = g.relative(n, E);
    if (L === ".." || L.startsWith(`..${g.sep}`) || g.resolve(L) === L || QGe(module)) {
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
        } = await uQs(E, n, g.basename(n)),
        q = registrations.length === 0 ? "nothing" : registrations.join(", "),
        H = [...scan.calls.map(item => {
          let I = helperCalls.get(item);
          return I === void 0 ? `$.${item}` : `$.${item} (via ${I.join(", ")})`;
        }), ...(scan.nextTo ?? []).map(item => `next.to:${item}`)],
        Z = H.length === 0 ? "nothing on $" : H.join(", "),
        D = catchReads.filter(item => item.isOwnCommand),
        U = [];
      if (D.length > 0) {
        let P = hr();
        try {
          if (!P.shippedTablesFillFailed) {
            Tce(), bRe();
            let I = DJt();
            U.push(...D.filter(item => !item.commands.some(item => I(item) || In.has(Lm(item)))));
          }
        } catch (error) {
          P.shippedTablesFillFailed = !0, t(`plugin validate: shipped command names unread, every command.run hook is listed as a gate: ${d(error)}`, {
            level: "error"
          });
        }
      }
      let Ie = catchReads.filter(item => !U.includes(item) && o0r(item.pattern));
      notes_2.push(`${module} hooks: ${q}`, ...yir(module, catchReads), ...U.map(item => `${module} answers its own command: ${item.registration}`), ...Ie.map(({
        registration: registration,
        hasCatch: hasCatch
      }) => `${module} gating hook ${hasCatch ? "with" : "without"} .catch: ` + registration), `${module} calls: ${Z}`), gatingHooks.push(...Ie.map(({
        registration: P,
        pattern: pattern,
        hasCatch: hasCatch_2
      }) => ({
        module: module,
        pattern: pattern,
        hook: P,
        hasCatch: hasCatch_2
      })));
      for (let {
        registration: registration_2,
        matcher: matcher
      } of renderMatchers) {
        let W = w0r(matcher);
        if (W !== void 0) warnings_4.push({
          path: `modules.${module}`,
          message: `on ${registration_2}: ${W}`
        });
      }
      let Ct = scan.hooks.some(item => JX(item, "engine.create"));
      if (nouns_2.length > 0 && !Ct) warnings_4.push({
        path: `modules.${module}`,
        message: `the manifest's types contract declares ${nouns_2.map(item => `$.${item}`).join(", ")} on EngineInterface, but ${module} registers no hook on engine.create, so the plugin never adds ${O(nouns_2.length, "it", "them")} to $`
      });
      if (scan.env !== void 0) {
        let P = I => I.length === 0 ? "nothing" : I.join(", ");
        notes_2.push(`${module} env writes: ${P(scan.env.writes)}`, `${module} env reads: ${P(scan.env.reads)}`);
      }
      let Fe = YIo(scan);
      if (Fe !== void 0) notes_2.push(`${module} hooks telemetry for: ${Fe}`);
      let message_3 = KIo(scan, {
        isBuiltin: !1
      });
      if (message_3 !== void 0) errors_4.push({
        path: `modules.${module}`,
        message: message_3
      });
      if (scan.state !== void 0) {
        let P = te => te.length === 0 ? "nothing" : te.map(item => Agt(item)).join(", ");
        notes_2.push(`${module} state writes: ${P(scan.state.writes)}`, `${module} state reads: ${P(scan.state.reads)}`);
        let owner_2 = f.name ?? g.basename(n),
          W = te => te.plugin !== owner_2,
          {
            reads: reads,
            writes: writes
          } = scan.state,
          Te = wn({
            names: f.isRefused ? {
              reads: reads.filter(W),
              writes: writes.filter(W)
            } : scan.state,
            owner: owner_2,
            declared: f.state,
            contract: f.conventional,
            refusal: f.refusal,
            others: await Yn(n)
          });
        if (errors_4.push(...Te.problems.map(te => ({
          path: `modules.${module}`,
          message: te
        }))), Te.unchecked.length > 0) notes_2.push(`${module} state of other plugins, not checked (run validate in a session with them enabled): ${Te.unchecked.join(", ")}`);
      }
      let ze = await sco(scan.clients, n, g.basename(n));
      if (ze !== void 0) notes_2.push(`${module} surface modules: ${ze.map(item => item.module).join(", ")}`);
    } catch (error) {
      errors_4.push({
        path: `modules.${module}`,
        message: ih(d(error), 400)
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
function ht(e, {
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
    }) => keys_2.map(c => Agt({
      plugin: plugin_5,
      key: c
    })));
  return {
    errors: [],
    notes: a.length > 0 ? [r, `types ${relPath_4} declares state: ${a.join(", ")}`] : [r]
  };
}
var ee = {
  name: void 0,
  nouns: [],
  state: [],
  isRefused: !1,
  conventional: void 0,
  refusal: void 0
};
async function Gn(e) {
  let n = await se(g.join(e, ".claude-plugin", "plugin.json")),
    s = n === void 0 ? void 0 : re(Bo(n)),
    name = typeof s?.name === "string" ? s.name : void 0,
    a = s?.types;
  if (s === void 0 || a !== void 0 && typeof a !== "string") return {
    ...ee,
    name: name
  };
  let i = await ye(a, e, g.basename(e));
  if (i === void 0) return {
    ...ee,
    name: name
  };
  if (a !== void 0) return i.kind === "read" ? {
    ...ee,
    name: name,
    nouns: i.nouns,
    state: i.state
  } : {
    ...ee,
    name: name,
    isRefused: !0
  };
  let conventional = `the types contract at ${relPath_3}`;
  if (i.kind === "read") return {
    ...ee,
    name: name,
    state: i.state,
    conventional: conventional
  };
  let c = i.problems.length - 1;
  return {
    ...ee,
    name: name,
    conventional: conventional,
    refusal: ih(`the file at ${relPath_3} could not be taken as the types contract (${i.problems[0] ?? "refused"}${c > 0 ? `, and ${c} more` : ""})`, 1000)
  };
}
async function Yn(e) {
  let n = Ne(),
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
    if (!((types !== void 0 || i.isBuiltin !== !0) && g.resolve(i.path) !== g.resolve(e))) continue;
    let m = await ye(types, i.path, i.name);
    if (m?.kind === "read") a.push(...m.state);
  }
  return a;
}
async function qn(e) {
  let n = [g.join(e, "hooks", "hooks.json")];
  if (!(await G1(g.join(e, ".claude-plugin")))) return n;
  let s = await se(g.join(e, ".claude-plugin", "plugin.json")),
    r = s === void 0 ? void 0 : re(Bo(s))?.hooks,
    a = Array.isArray(r) ? r : [r];
  for (let i of a) {
    if (typeof i !== "string") continue;
    let l = g.resolve(e, i),
      c = g.relative(e, l);
    if (c === ".." || c.startsWith(`..${g.sep}`) || g.resolve(c) === c || QGe(i)) continue;
    if (!n.includes(l)) n.push(l);
  }
  return n;
}
async function Zn(e) {
  let n = [],
    s = [];
  for (let a of await qn(e)) {
    let {
      result: result,
      modules: modules_2
    } = await Kn(a, e);
    if (modules_2.length > 0) s.push(a);
    if (result.errors.length > 0 || result.warnings.length > 0 || result.notes !== void 0) n.push(result);
  }
  let [, filePath_5] = s;
  if (filePath_5 !== void 0) {
    let a = s.map(item => g.relative(e, item));
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
var Jn = new Set(["stdio", "http", "streamable-http", "sse", "ws", "sdk", "sse-ide", "ws-ide", "claudeai-proxy"]),
  Xn = /\$\{user_config\.([^}$]+)\}/g,
  $t = /\$\{[^}$]+\}/,
  Ae = 16,
  Qn = 8192,
  es = [/\bsk-[A-Za-z0-9_-]{16,}/, /\bgh[opsur]_[A-Za-z0-9]{30,}/, /\bgithub_pat_[A-Za-z0-9_]{30,}/, /\bxox[abeprs]-[A-Za-z0-9-]{10,}/, /\bAKIA[0-9A-Z]{16}\b/, /\bglpat-[A-Za-z0-9_-]{20,}/, /\bAIza[0-9A-Za-z_-]{35}\b/, /(?:^|[^A-Za-z0-9_-])eyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]+/],
  ts = /authorization|api[-_]?key|token|secret|password|credential/i,
  ns = /your[-_ ]|replace|example|changeme|placeholder|dummy|redacted|xxx|[<>]|\*\*\*/i;
function ss(e) {
  let n = new Map();
  for (let r of e) n.set(r, (n.get(r) ?? 0) + 1);
  let s = 0;
  for (let r of n.values()) {
    let a = r / e.length;
    s -= a * Math.log2(a);
  }
  return s;
}
function rs(e, n) {
  if (n.length > Qn || $t.test(n) || ns.test(n)) return !1;
  let s = n.trim();
  if (es.some(item => item.test(s))) return !0;
  if (!ts.test(e)) return !1;
  let r = s.match(/^(?:Bearer|Basic|Token|Bot)\s+(\S+)$/i)?.[1] ?? s;
  return r.length >= 20 && !/\s/.test(r) && ss(r) >= 3;
}
var os = /\$\{[^}$]+\}/g;
function we(e, n) {
  return URL.parse(e.replace(os, n)) ?? void 0;
}
function as(e) {
  let n = we(e, "probe-a.invalid") ?? we(e, "1"),
    s = we(e, "probe-b.invalid") ?? we(e, "2");
  if (!n || !s || n.hostname !== s.hostname) return;
  let r = n.protocol === "http:" ? "http" : n.protocol === "ws:" ? "ws" : void 0;
  if (r === void 0) return;
  let hostname = n.hostname;
  if (hostname === "localhost" || hostname.endsWith(".localhost") || hostname === "127.0.0.1" || hostname === "[::1]") return;
  let i = r === "http" ? "https" : "wss";
  return `url uses ${r}:// to a non-loopback host \u2014 requests, headers and any ` + `credentials travel in cleartext. Use ${i}://; plugin directories may reject insecure remote server urls.`;
}
function is(e) {
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
  if (r !== void 0 && N(a)) {
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
function xt(e, n, s) {
  let errors_5 = [],
    warnings_5 = [];
  if (!N(n)) return {
    errors: errors_5,
    warnings: warnings_5
  };
  for (let {
    field: field_3,
    value: value_4
  } of is(n)) {
    let c = new Set([...value_4.matchAll(Xn)].map(item => item[1]));
    if (c.size === 0) continue;
    let path_4 = `${e}.${ih(field_3, 64)}`;
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
      message: `references \${user_config.${ih(p, 64)}}, which plugin.json does not declare under "userConfig" (or in this server's "channels" entry), so on a fresh install it cannot resolve: the loader drops the server or passes the literal text through. Declare the option or fix the key.`
    });
  }
  if (Me(n.type) && typeof n.url === "string") if (n.url.trim() === "") {
    if (typeof n.directory === "string" && n.directory !== "") warnings_5.push({
      path: `${e}.directory`,
      message: `"directory" is set but url is empty. The key names a directory entry and counts only when this server's url is that entry's url, so plugin directories may reject this plugin. Set url to that entry's url, or remove the "directory" key.`
    });
  } else if (!$t.test(n.url) && !URL.canParse(n.url)) errors_5.push({
    path: `${e}.url`,
    message: 'url is not a valid absolute URL (for example "https://host/path"). The plugin loader marks this server as invalid config and it never connects.'
  });else {
    let message_4 = as(n.url);
    if (message_4) warnings_5.push({
      path: `${e}.url`,
      message: message_4
    });
  }
  if (Me(n.type) && N(n.headers)) {
    for (let [i, l] of Object.entries(n.headers)) if (typeof l === "string" && rs(i, l)) warnings_5.push({
      path: `${e}.headers.${ih(i, 64)}`,
      message: "header value looks like a literal credential. Everything shipped in a plugin is readable by everyone who installs it; reference a sensitive userConfig option (${user_config.KEY}) or an environment variable (${VAR}) instead of committing the value."
    });
  }
  return {
    errors: errors_5,
    warnings: warnings_5
  };
}
function ls(path_5, n, s) {
  if (!N(n)) return [{
    path: path_5,
    message: `server config must be an object (got ${Y(n)}). The plugin loader silently drops this server at load.`
  }];
  let a = n.type;
  if (a === void 0 && !("command" in n) && "url" in n) return [{
    path: `${path_5}.type`,
    message: 'server has a "url" but no "type". Remote servers must set "type" to "http" (or "sse" / "ws"); without it the entry is parsed as a stdio server, fails for lacking "command", and is silently dropped at load.'
  }];
  if (a !== void 0 && (typeof a !== "string" || !Jn.has(a))) {
    let m = typeof a === "string" ? `"${ih(a, 32)}"` : Y(a);
    return [{
      path: `${path_5}.type`,
      message: `unknown server type ${m} \u2014 expected "stdio" (or no type) for a local ` + 'command, or "http", "sse", "ws" for a remote server. The plugin loader silently drops this server at load.'
    }];
  }
  let l = (a === void 0 || a === "stdio" ? XQe() : a === "http" || a === "streamable-http" ? __t() : a === "sse" ? PBt() : a === "ws" ? rpn() : void 0)?.safeParse(n);
  if (!l) return [{
    path: path_5,
    message: `is not a valid "${String(a)}" server config (${de(s)[0]?.message ?? "invalid"}). The plugin loader silently drops this server at load.`
  }];
  return (l.success ? de(s) : de(l.error)).map(item => ({
    ...item,
    path: item.path === "root" ? path_5 : `${path_5}.${item.path}`,
    message: `${item.message}. The plugin loader silently drops this server at load.`
  }));
}
async function gt(e, filePath_6, s) {
  let a = b => K(filePath_6, "mcp", `${b} \u2014 MCP server files are read without following symlinks and are capped at ` + `${Qle} bytes. The plugin loader has neither limit, so validate the real file separately.`),
    i;
  try {
    i = await _q(e);
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
    l = J(i.content);
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
    p = N(l) && Boolean(l.mcpServers),
    y = p && N(l) ? l.mcpServers : l,
    path_6 = p ? "mcpServers" : "root",
    v;
  if (N(y)) v = Object.entries(y);else if (Array.isArray(y)) {
    if (v = y.map((item, index) => [String(index), item]), y.length > 0) warnings_6.push({
      path: path_6,
      message: `is an array; the plugin loader keys its servers by array index ("0", "1", ...), and review tooling has misread this shape as 'no servers'. Use an object keyed by server name.`
    });
  } else return {
    success: !1,
    errors: [{
      path: path_6,
      message: `must be an object mapping server names to server configs (got ${Y(y)}). No servers load from this file.`
    }],
    warnings: [],
    filePath: filePath_6,
    fileType: "mcp"
  };
  for (let [b, R] of v) {
    let C = ih(b, 64),
      x = p ? `mcpServers.${C}` : C,
      f = $J().safeParse(R);
    if (!f.success) {
      errors_6.push(...ls(x, R, f.error));
      continue;
    }
    let S = Lue(f.data.type);
    if (S !== null) {
      errors_6.push({
        path: `${x}.type`,
        message: S === "host-only" ? `type "${f.data.type}" servers are registered by the host application at runtime and cannot be declared by a plugin. The plugin loader drops this server at load.` : 'type "claudeai-proxy" is used only by claude.ai connectors and cannot be declared ' + 'by a plugin \u2014 declare the server with type "http" instead. The plugin loader drops ' + "this server at load."
      });
      continue;
    }
    let w = xt(x, R, s(b));
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
function Tt(e) {
  let n = new Set(N(e.userConfig) ? Object.keys(e.userConfig) : []),
    s = new Map();
  if (Array.isArray(e.channels)) {
    for (let r of e.channels) if (N(r) && typeof r.server === "string" && !s.has(r.server)) s.set(r.server, new Set(N(r.userConfig) ? Object.keys(r.userConfig) : []));
  }
  return r => {
    let a = s.get(r);
    return a === void 0 ? n : {
      has: i => n.has(i) || a.has(i)
    };
  };
}
async function cs(e, n) {
  return Tt(e);
}
async function ps(e, n) {
  let s,
    manifestPath = g.join(e, ".claude-plugin", "plugin.json");
  if (await G1(g.dirname(manifestPath))) {
    let C = await se(manifestPath),
      x = C === void 0 ? void 0 : re(Bo(C));
    if (x) s = xue(x, "plugin-json", {
      pluginName: g.basename(e),
      manifestPath: manifestPath
    }).rawCandidate ?? x;
  }
  let i = s ? Tt(s) : void 0,
    l = C => i ? i(C) : null,
    c = [],
    m = g.join(e, ".mcp.json"),
    p = await gt(m, m, l);
  if (p) c.push(p);
  let y = new Set([g.resolve(m)]),
    h = s?.mcpServers,
    v = h === void 0 ? [] : Array.isArray(h) ? h : [h],
    b = Ae,
    R = 0;
  for (let C of v) {
    if (typeof C !== "string") continue;
    if (!C.startsWith("./") || !C.endsWith(".json") || C.includes("..")) continue;
    let x = g.join(e, C),
      f = g.resolve(x);
    if (y.has(f)) continue;
    if (y.add(f), b <= 0) {
      R++;
      continue;
    }
    b--;
    let S = g.join(e, ih(C, 128)),
      w = await tM(e, g.dirname(x));
    if (w === "refused") {
      c.push(K(S, "mcp", "A directory on the way to this MCP servers file is a symlink or " + "escapes the plugin, and the file was not read \u2014 the plugin loader " + "follows it, so validate the real file separately."));
      continue;
    }
    if (w !== "ok") continue;
    let E = await gt(x, S, l);
    if (E) c.push(E);
  }
  if (R > 0) c.push(K(manifestPath, "mcp", `plugin.json names more than ${Ae} MCP server files; ${R} ${O(R, "file")} past that limit were not examined. The plugin loader reads them all, so validate those files separately.`));
  return c.filter(item => item.errors.length > 0 || item.warnings.length > 0);
}
async function Le(e, n) {
  let s;
  try {
    s = await Oe(e, {
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
  let skippedSymlinks = F(s, i => i.isSymbolicLink());
  if (n) return {
    files: s.filter(item => item.isDirectory()).map(item => g.join(e, item.name, "SKILL.md")),
    skippedSymlinks: skippedSymlinks
  };
  let files = [];
  for (let i of s) {
    let l = g.join(e, i.name);
    if (i.isDirectory()) {
      let c = await Le(l, !1);
      files.push(...c.files), skippedSymlinks += c.skippedSymlinks;
    } else if (i.isFile() && i.name.toLowerCase().endsWith(".md")) files.push(l);
  }
  return {
    files: files,
    skippedSymlinks: skippedSymlinks
  };
}
var code_4 = "NO_MANIFEST",
  St = new Map([["skills", "skill"], ["agents", "agent"], ["commands", "command"]]);
function yt(e, n) {
  return e === "project" || n === "skill";
}
async function je(e) {
  let n = [...St].map(([r, a]) => [a, g.join(e, r)]),
    s = await Promise.all(n.map(([, r]) => tM(e, r)));
  return {
    dirs: n.filter((item, index) => s[index] === "ok"),
    refused: n.filter((item, index) => s[index] === "refused")
  };
}
async function ds(e) {
  if ((await tM(e, g.join(e, ".claude-plugin"))) === "ok") return !0;
  let n = g.join(e, "skills"),
    s = await tM(e, n);
  if (s === "refused") return !0;
  if (s !== "ok") return !1;
  let {
    files: files_2
  } = await Le(n, !0);
  for (let a of files_2) if (await On(a).then(() => !0, l => {
    let c = k(l);
    return c !== "ENOENT" && c !== "ENOTDIR";
  })) return !0;
  return !1;
}
function K(filePath_7, fileType_2, message_5) {
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
async function be(e, n, s) {
  let results = [],
    scanned = 0,
    skipped = n.length;
  for (let [l, c] of n) results.push(K(c, l, "This directory is a symlink and nothing in it was read \u2014 component " + `directories are read without following symlinks. A session loading this ${s === "plugin" ? "plugin" : "project"} does follow it, so validate the real directory separately.`));
  for (let [fileType_3, c] of e) {
    let {
        files: files_3,
        skippedSymlinks: skippedSymlinks_2
      } = await Le(c, fileType_3 === "skill"),
      y = yt(s, fileType_3) ? skippedSymlinks_2 : 0,
      h = 0,
      v = 0;
    for (let R of files_3) {
      let filePath_8 = ih(R, 256),
        x;
      try {
        x = await _q(R);
      } catch (error) {
        results.push({
          success: !1,
          errors: [{
            path: "file",
            message: `Failed to read: ${ih(d(error), 200)}`
          }],
          warnings: [],
          filePath: filePath_8,
          fileType: fileType_3
        });
        continue;
      }
      if (x.kind !== "ok") {
        if (x.kind === "refused" && yt(s, fileType_3)) h++;else if (x.kind === "too-large") v++;
        continue;
      }
      scanned++;
      let f = Wn(filePath_8, x.content, fileType_3, s);
      if (f.errors.length > 0 || f.warnings.length > 0) results.push(f);
    }
    skipped += y + h + v;
    let b = "A session loading this " + (s === "plugin" ? "plugin" : "directory") + " does follow them, so validate the real paths separately.";
    if (y > 0) results.push(K(c, fileType_3, `${y} ${O(y, "entry", "entries")} here ${O(y, "is", "are")} ${O(y, "a symlink", "symlinks")} and ${O(y, "was", "were")} not read \u2014 components are read ` + `without following symlinks. ${b}`));
    if (h > 0) results.push(K(c, fileType_3, `${h} ${O(h, "component")} here ${O(h, "was", "were")} not read \u2014 the path is not a ` + `regular file (a symlink, a FIFO, a directory). ${b}`));
    if (v > 0) results.push(K(c, fileType_3, `${v} ${O(v, "file")} here ${O(v, "is", "are")} larger than ${Qle} bytes and ${O(v, "was", "were")} not validated.`));
  }
  return {
    results: results,
    scanned: scanned,
    skipped: skipped
  };
}
async function us(e) {
  return (await ms(e))?.map(oe) ?? null;
}
async function ms(filePath_9) {
  let fileType_4 = St.get(g.basename(filePath_9));
  if (fileType_4) {
    let R = g.dirname(filePath_9),
      C;
    if (g.basename(R) === ".claude" && !(await G1(R))) C = "The enclosing .claude directory is a symlink.";else if (!(await G1(filePath_9))) C = "This path is a symlink.";
    if (C) return [{
      success: !1,
      errors: [{
        path: "directory",
        message: `${C} Component directories are read without following symlinks, so nothing here was validated. Pass the real directory instead.`
      }],
      warnings: [],
      filePath: filePath_9,
      fileType: fileType_4
    }];
    return (await be([[fileType_4, filePath_9]], [], "project")).results;
  }
  let s = g.join(filePath_9, ".claude"),
    r = g.basename(filePath_9) === ".claude",
    [a, i] = await Promise.all([tM(filePath_9, s), r ? Promise.resolve(!1) : ds(filePath_9)]),
    l = r || i ? await je(filePath_9) : {
      dirs: [],
      refused: []
    },
    c = a === "ok" ? await je(s) : {
      dirs: [],
      refused: []
    },
    m = r ? "project" : "plugin",
    [p, y] = await Promise.all([be(l.dirs, l.refused, m), be(c.dirs, c.refused, "project")]),
    h = [...p.results, ...y.results],
    v = p.scanned + y.scanned,
    b = p.skipped + y.skipped;
  if (a === "refused") h.push(K(s, "plugin", "This directory is a symlink and nothing in it was read \u2014 .claude is " + "read without following symlinks. A session loading this project does follow it, so validate the real directory separately."));
  return v > 0 || b > 0 || h.length > 0 ? h : null;
}
async function Xsr(e) {
  let n = [],
    s = new Set(["claude.md", "claude.local.md"]),
    r = [];
  try {
    r = await Oe(e, {
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
      filePath: g.join(e, ih(i.name, 64)),
      fileType: "plugin"
    });
  }
  n.push(...(await hs(e)));
  let a = await je(e);
  return n.push(...(await be(a.dirs, a.refused, "plugin")).results), n.push(...(await Zn(e))), n.push(...(await ps(e, r))), n.map(oe);
}
async function h8r(e, n) {
  let s = oe(await fs(e));
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
async function fs(e) {
  let filePath_10 = g.resolve(e),
    s = null;
  try {
    s = await kt(filePath_10);
  } catch (error) {
    if (!G(error)) throw error;
  }
  if (s?.isDirectory()) {
    let a = g.join(filePath_10, ".claude-plugin", "marketplace.json"),
      i = await Re(a),
      l = i.errors[0];
    if (!(l?.path === "file" && (l.code === "ENOENT" || l.code === "ENOTDIR"))) return i;
    let m = g.join(filePath_10, ".claude-plugin", "plugin.json"),
      p = await Xqt(m),
      y = p.errors[0]?.code;
    if (y !== "ENOENT" && y !== "ENOTDIR") return p;
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
  switch (Fn(e)) {
    case "plugin":
      return Xqt(e);
    case "marketplace":
      return Re(e);
    case "unknown":
      {
        try {
          let a = await _e(filePath_10, {
              encoding: "utf-8"
            }),
            i = J(Bo(a));
          if (Array.isArray(i.plugins)) return Re(e);
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
        return Xqt(e);
      }
  }
}
async function vqe(e) {
  let manifest_2 = await h8r(e),
    s = manifest_2.filePath;
  if (manifest_2.errors.some(item => item.code === code_4)) {
    let contents = await us(s);
    return contents ? {
      manifest: null,
      contents: contents,
      resolvedPath: s
    } : {
      manifest: manifest_2,
      contents: [],
      resolvedPath: s
    };
  }
  let r = g.dirname(s),
    a = g.dirname(r);
  if (g.basename(r) !== ".claude-plugin") return {
    manifest: manifest_2,
    contents: [],
    resolvedPath: s
  };
  if (manifest_2.fileType === "plugin") {
    let contents_2 = await Xsr(a);
    return {
      manifest: manifest_2,
      contents: contents_2,
      resolvedPath: s
    };
  }
  if (g.resolve(e) !== a) return {
    manifest: manifest_2,
    contents: [],
    resolvedPath: s
  };
  let i = await qsr(s),
    l = i !== void 0 && mpn(i.name) && i.plugins.some(item => ke(item, a, a)),
    c = await Xqt(g.join(r, "plugin.json"), {
      kind: l ? "anthropic" : "alone"
    });
  if (c.errors[0]?.code === "ENOENT") return {
    manifest: manifest_2,
    contents: [],
    resolvedPath: s
  };
  let m = c.errors.length > 0 || c.warnings.length > 0 || (c.notes?.length ?? 0) > 0;
  return {
    manifest: manifest_2,
    contents: [...(m ? [c] : []), ...(await Xsr(a))],
    resolvedPath: s
  };
}
async function se(e) {
  return sU(e).catch(() => {
    return;
  });
}
function ue(e) {
  return N(e) ? e : void 0;
}
function re(e) {
  try {
    return ue(J(e));
  } catch {
    return;
  }
}
function Ee(e, n, s) {
  let r = [];
  for (let [a, i] of Object.entries(e)) {
    let l = ue(i);
    if (!l || typeof l.command !== "string") continue;
    let m = l.command.match(/^\$\{CLAUDE_PLUGIN_ROOT\}\/bin\/([^/\\]+)$/)?.[1];
    if (m === void 0 || n.has(m) || s.has(m)) continue;
    let p = ih(a, 64),
      y = ih(m, 64);
    r.push({
      path: `mcpServers.${p}`,
      message: `bin/${y} is not a shipped file, a declared binaries entry, or ` + "a name derivable from the declared entries \u2014 the server will " + 'fail to start. Check for a typo against the "binaries" map in plugin.json.'
    });
  }
  return r;
}
async function hs(e) {
  if (!(await G1(g.join(e, ".claude-plugin")))) return [];
  let n = g.join(e, ".claude-plugin", "plugin.json"),
    s = await se(n);
  if (s === void 0) return [];
  let r = re(Bo(s)),
    a = HBt(r?.binaries);
  if (!r || !a) return [];
  let i = new Set(Object.keys(a));
  for (let x of _Os) {
    let f = new Map();
    for (let S of Object.keys(a)) {
      let w = spt(S, x);
      if (w !== void 0) f.set(w, (f.get(w) ?? 0) + 1);
    }
    for (let [S, w] of f) if (w === 1) i.add(S);
  }
  let l = g.join(e, "bin"),
    c = new Set();
  if (await G1(l)) c = await Oe(l).then(x => new Set(x)).catch(() => new Set());
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
  let y = g.join(e, ".mcp.json"),
    h = await se(y);
  if (h !== void 0) {
    let x = re(h);
    if (x) {
      let f = ue(x.mcpServers || x);
      if (f) p(y, Ee(f, c, i));
    }
  }
  let mcpServers = r.mcpServers,
    b = mcpServers === void 0 ? [] : Array.isArray(mcpServers) ? mcpServers : [mcpServers],
    R = [],
    C = Ae;
  for (let x of b) {
    if (typeof x === "string" && C <= 0) continue;
    if (typeof x === "string") {
      if (C--, !x.startsWith("./") || xe(x)) continue;
      let S = g.join(e, x);
      if ((await tM(e, g.dirname(S))) !== "ok") continue;
      let w = await se(S);
      if (w === void 0) continue;
      let E = re(w);
      if (!E) continue;
      let L = ue(E.mcpServers || E);
      if (L) p(g.join(e, ih(x, 128)), Ee(L, c, i));
      continue;
    }
    let f = ue(x);
    if (f) R.push(...Ee(f, c, i));
  }
  return p(n, R), m;
}
export { Yqt, Vsr, qsr, z7o, Xqt, Ksr, ih, code_4 as Ysr, Xsr, h8r, vqe };