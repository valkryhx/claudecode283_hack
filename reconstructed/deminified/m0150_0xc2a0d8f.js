// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Ne, zo } from "B:/~BUN/root/chunk-ekrhn4q1.js";
import { Ic } from "B:/~BUN/root/chunk-4p6z9qq1.js";
import { iBe, a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { re, Gt } from "B:/~BUN/root/chunk-y04k89s2.js";
import { spt } from "B:/~BUN/root/chunk-bt3h0syz.js";
import { agn, lgn } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { pd } from "B:/~BUN/root/chunk-tndjj29v.js";
import { L } from "B:/~BUN/root/chunk-z1enakv9.js";
function phe() {
  return a.CLAUDE_CODE_REMOTE_TOOLS_FORWARD === !0;
}
function ZT() {
  return phe();
}
import { normalize as y } from "path";
import { createHash as A } from "crypto";
function S(e) {
  return {
    sha256: A("sha256").update(e, "utf8").digest("hex"),
    bytes: Buffer.byteLength(e, "utf8")
  };
}
function lLt(e, n) {
  return Buffer.byteLength(n, "utf8") === e.bytes && S(n).sha256 === e.sha256;
}
var T = "File has been modified since read, either by the user or by a linter. Read it again before attempting to write it.";
function Nln(e) {
  return e === void 0 ? T : `File has been modified on ${e} since this session read it. Read it again there (Read with "_host": "${e}") before attempting to write it.`;
}
function w2n(e) {
  return e === void 0 ? spt : `File content on ${e} has changed since this session read it. Read it again there (Read with "_host": "${e}"), then retry.`;
}
var FE = 5000,
  O = 26214400,
  B = 4096;
function v2n(e) {
  return Bun.hash(e).toString(36);
}
function nD(e) {
  if ((e.offset ?? 1) > 1 || e.isPartialView) return !1;
  if (e.limit === void 0) return !0;
  return e.content !== "" && Gt(e.content, `
`) + 1 < e.limit;
}
function fhe(e) {
  return e !== void 0 && nD(e) && !e.contentNotInModelContext;
}
function y0(e, n) {
  if (e.contentHash !== void 0) return e.contentHash === v2n(n);
  return e.content === n;
}
function OS(e) {
  return e.charCodeAt(0) === 65279 ? e.slice(1) : e;
}
function Cw(e) {
  return OS(e).replaceAll(`\r
`, `
`);
}
function yxo(e, n) {
  return y0(e, Cw(n));
}
class w {
  cache;
  constructor(max, maxSize) {
    this.cache = new pd({
      max: max,
      maxSize: maxSize,
      sizeCalculation: r => Math.max(1, Buffer.byteLength(r.content))
    });
  }
  get(e) {
    return this.cache.get(y(e));
  }
  set(e, n) {
    let r = y(e),
      i = this.cache.get(r),
      keepContent = n.keepContent ?? i?.keepContent,
      contentHash = n.contentHash ?? v2n(n.content),
      contentLength = n.contentLength ?? n.content.length,
      c = n.content !== "" || n.contentHash === void 0,
      readBaseline = !phe() ? void 0 : c && !n.contentFromTranscript && nD(n) ? S(n.content) : n.readBaseline ?? (contentHash === i?.contentHash ? i?.readBaseline : void 0),
      u = keepContent && n.content === "" && contentHash === i?.contentHash && i.content ? i.content : n.content,
      content = keepContent || Buffer.byteLength(u) <= B ? u : "";
    return this.cache.set(r, {
      ...n,
      keepContent: keepContent,
      contentHash: contentHash,
      contentLength: contentLength,
      content: content,
      readBaseline: readBaseline
    }), this;
  }
  has(e) {
    return this.cache.has(y(e));
  }
  delete(e) {
    return this.cache.delete(y(e));
  }
  clear() {
    this.cache.clear();
  }
  get size() {
    return this.cache.size;
  }
  get max() {
    return this.cache.max;
  }
  get maxSize() {
    return this.cache.maxSize;
  }
  get calculatedSize() {
    return this.cache.calculatedSize;
  }
  keys() {
    return this.cache.keys();
  }
  entries() {
    return this.cache.entries();
  }
  dump() {
    return this.cache.dump();
  }
  load(e) {
    this.cache.load(e);
  }
}
function vv(e, n = O) {
  return new w(e, n);
}
function Hln(e) {
  return Object.fromEntries(e.entries());
}
function Sct(e) {
  return Array.from(e.keys());
}
function mhe(e, n) {
  let r = vv(e.max, e.maxSize),
    i = e.dump();
  if (n?.stripSeededFromContext) {
    for (let o of i) if (o[1].value?.seededFromContext) o[1].value = {
      ...o[1].value,
      seededFromContext: !1
    };
  }
  return r.load(i), r;
}
function Fln(e, n) {
  let r = [];
  for (let [o, s] of e.entries()) if (s.startupMemorySeed) r.push([o, s]);
  e.clear();
  let i = new Set();
  for (let [o, s] of r) e.set(o, s), i.add(o);
  if (n) {
    for (let o of Object.keys(n)) if (!i.has(y(o))) delete n[o];
  }
}
function _xo(e, n) {
  let r = mhe(e);
  for (let [i, o] of n.entries()) {
    let s = r.get(i);
    if (!s || o.timestamp > s.timestamp) r.set(i, o);
  }
  return r;
}
var v = ["name", "description", "model", "allowed-tools", "argument-hint", "arguments", "disable-model-invocation", "user-invocable", "effort", "shell", "version", "when_to_use", "paths", "hooks", "context", "agent", "created_by", "improved_by", "mcpServers", "lspServers", "agents", "outputStyles", "themes", "workflows", "channels", "monitors", "settings", "experimental", "commands", "skills", "dependencies", "userConfig", "metadata", "displayName", "defaultEnabled", "fallback", "evals", "author", "homepage", "repository", "license", "keywords", "compatibility", "tools", "disallowedTools", "color", "permissionMode", "maxTurns", "initialPrompt", "memory", "background", "omitClaudeMd", "isolation", "observer", "observerMessage", "observeSubagents", "keep-coding-instructions", "force-for-plugin", "type", "originSessionId", "hide-from-slash-command-tool"],
  te = lgn(v);
var M = ["argument-hint", "arguments", "disable-model-invocation", "user-invocable", "context", "agent", "paths", "settings"],
  ne = new Set(M.map(agn));
function _0(e) {
  return Bun.YAML.parse(e);
}
function kX(e) {
  return Bun.YAML.stringify(e, null, 2) + `
`;
}
var I = /[{}[\]*&#!|>%@`]|: /;
function D(e) {
  let n = e.split(`
`),
    r = [];
  for (let i of n) {
    let o = i.match(/^([a-zA-Z_-]+):\s+(.+)$/);
    if (o) {
      let [, s, l] = o;
      if (!s || !l) {
        r.push(i);
        continue;
      }
      if (l.startsWith('"') && l.endsWith('"') || l.startsWith("'") && l.endsWith("'")) {
        r.push(i);
        continue;
      }
      if (l.startsWith("[") && l.endsWith("]")) try {
        if (Array.isArray(_0(l))) {
          r.push(i);
          continue;
        }
      } catch {}
      if (I.test(l)) {
        let c = l.replaceAll("\\", "\\\\").replaceAll('"', "\\\"");
        r.push(`${s}: "${c}"`);
        continue;
      }
    }
    r.push(i);
  }
  return r.join(`
`);
}
function z(e) {
  let quotedKeys = [],
    unprovableKeys = [],
    i = e.split(`
`).map(item => {
      let s = item.endsWith("\r"),
        l = s ? item.slice(0, -1) : item,
        c = l.match(/^([A-Za-z0-9_][A-Za-z0-9_.-]*):[ \t]+(.*)$/);
      if (!c) return x(l, unprovableKeys), item;
      let [, p, u] = c;
      if (!p || !u) return item;
      let d = u.trimEnd();
      if (d === "") return item;
      if (/^["'|>]/.test(d)) return x(l, unprovableKeys), item;
      let f;
      try {
        f = _0(d);
      } catch {
        return item;
      }
      if (typeof f !== "string" && f !== null) return x(l, unprovableKeys), item;
      if (!(typeof f === "string" && f !== d || f === null && !["null", "Null", "NULL", "~"].includes(d))) return item;
      quotedKeys.push(p);
      let h = d.replaceAll("\\", "\\\\").replaceAll('"', "\\\"");
      return `${p}: "${h}"${s ? "\r" : ""}`;
    });
  return {
    text: quotedKeys.length === 0 ? null : i.join(`
`),
    quotedKeys: quotedKeys,
    unprovableKeys: unprovableKeys
  };
}
function x(e, n) {
  let r = e.match(/^("(?:[^"\\]|\\.)*"):[ \t]+(.*)$/) ?? e.match(/^('(?:[^']|'')*'):[ \t]+(.*)$/) ?? e.match(/^([^\s#][^:\n]*?):[ \t]+(.*)$/);
  if (r === null) return;
  let [, i, o] = r;
  if (!i || !o) return;
  let s = o.trimEnd().replace(/"(?:[^"\\]|\\.)*"|'(?:[^']|'')*'/g, "");
  if (/^#|[ \t]#/.test(s)) n.push(i);
}
var Iz = 30,
  dte = 65536,
  Mk = /^---\s*\n([\s\S]*?)---\s*\n?/,
  n1 = /^---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(\r?\n|$)/;
function ms(e, n, r) {
  let content_2 = e;
  e = OS(e);
  let o = e.match(Mk);
  if (!o) return {
    frontmatter: {},
    content: content_2
  };
  let s = o[1] || "",
    content_3 = e.slice(o[0].length),
    c = m => m,
    frontmatter_2 = {},
    parseError,
    d;
  if (r?.quoteLossyValues) {
    let m = e.match(n1),
      g = m?.[1] ?? "";
    if (s.trim() !== "" || g.trim() !== "") {
      if (m === null || g.trim() !== s.trim()) d = 'the closing --- is ambiguous (a value containing "---"?) \u2014 part of the block may have read as body';
    }
  }
  let f, b;
  if (r?.quoteLossyValues) {
    let m = z(s);
    if (m.unprovableKeys.length > 0) f = `an inline '#' in [${m.unprovableKeys.join(", ")}] cannot be preserved by a rewrite`;
    if (m.text !== null) try {
      let frontmatter = c(R(_0(m.text))),
        rewriteHazard = d ?? f ?? E(s, frontmatter);
      return {
        frontmatter: frontmatter,
        content: content_3,
        ...(rewriteHazard !== void 0 && {
          rewriteHazard: rewriteHazard
        })
      };
    } catch {
      b = `quoting [${m.quotedKeys.join(", ")}] broke the document; a rewrite from the plain parse would drop their inline '#' content`;
      let g = n ? ` in ${n}` : "";
      t(`quoteLossyValues: ${b}${g}`, {
        level: "warn"
      });
    }
  }
  let h = cLt(s);
  if (h.ok) frontmatter_2 = c(R(h.value));else {
    parseError = h.error;
    let m = n ? ` in ${n}` : "";
    t(`Failed to parse YAML frontmatter${m}: ${parseError}`, {
      level: "warn"
    });
  }
  let rewriteHazard_2 = !r?.quoteLossyValues ? void 0 : parseError !== void 0 ? d ?? `the frontmatter failed to parse: ${parseError}` : d ?? f ?? b ?? E(s, frontmatter_2);
  return {
    frontmatter: frontmatter_2,
    content: content_3,
    ...(parseError !== void 0 && {
      parseError: parseError
    }),
    ...(rewriteHazard_2 !== void 0 && {
      rewriteHazard: rewriteHazard_2
    })
  };
}
function cLt(e) {
  try {
    return {
      ok: !0,
      value: _0(e)
    };
  } catch {
    try {
      let n = D(e).replace(/^\t+/gm, r => "  ".repeat(r.length));
      return {
        ok: !0,
        value: _0(n)
      };
    } catch (n) {
      return {
        ok: !1,
        error: n instanceof Error ? n.message : String(n)
      };
    }
  }
}
function E(e, n) {
  if (e.trim() !== "" && Object.keys(n).length === 0) return "the frontmatter has no keys (a sequence, scalar, or comment-only document)";
  return;
}
function R(e) {
  if (e && typeof e === "object" && !Array.isArray(e)) return e;
  return {};
}
function wct(e) {
  return _(e, {
    results: results,
    bytes: bytes
  });
}
function _(e, n) {
  if (Array.isArray(e)) return e.flatMap(item => _(item, n));
  if (typeof e !== "string") return [];
  let r = [],
    i = "",
    o = 0;
  for (let l = 0; l < e.length; l++) {
    let c = e[l];
    if (c === "{") o++, i += c;else if (c === "}") o--, i += c;else if (c === "," && o === 0) {
      let p = i.trim();
      if (p) r.push(p);
      i = "";
    } else i += c;
  }
  let s = i.trim();
  if (s) r.push(s);
  return r.filter(item => item.length > 0).flatMap(item => H(item, n));
}
var results = 1000,
  bytes = 4194304;
function H(e, n) {
  if (!e.includes("{")) return [e];
  let r = [],
    i = [e];
  for (let o = i.pop(); o !== void 0; o = i.pop()) {
    let s = o.match(/^([^{]*)\{([^}]+)\}(.*)$/);
    if (!s) {
      r.push(o);
      continue;
    }
    let l = s[1] || "",
      c = s[2] || "",
      p = s[3] || "",
      u = c.split(",").map(item => item.trim());
    n.bytes -= o.length;
    let d = r.length + i.length + u.length;
    if (n.bytes < 0 || d > n.results || d * e.length > n.bytes) return t(`Brace pattern expansion exceeds the budget; using it unexpanded: ${re(e, 256)}`, {
      level: "warn"
    }), [e];
    for (let f = u.length - 1; f >= 0; f--) i.push(l + (u[f] ?? "") + p);
  }
  return n.results -= r.length, n.bytes -= r.length * e.length, r;
}
function k2n(e) {
  if (e === void 0 || e === null) return;
  let n = typeof e === "number" ? e : Ic(String(e));
  if (Number.isInteger(n) && n > 0) return n;
  return;
}
function E2n(e) {
  let experimental = e.experimental;
  if (typeof experimental !== "object" || experimental === null) return;
  let r = Object.entries(experimental).find(([i]) => agn(i) === "cachettl")?.[1];
  return iBe.find(item => item === r);
}
function c6(e, n, r) {
  if (e == null) return null;
  if (typeof e === "string") return e.trim() || null;
  if (typeof e === "number" || typeof e === "boolean") return String(e);
  let i = r ? `${r}:${n}` : n ?? "unknown";
  return t(`Description invalid for ${i} - omitting`, {
    level: "warn"
  }), null;
}
function T2n(e) {
  let n = r => r != null && typeof r === "object" && !Array.isArray(r) ? Object.keys(r) : [];
  return L([...Object.keys(e), ...n(e.experimental)]);
}
function dLt(e) {
  return Oz(e) ?? !1;
}
function Oz(e) {
  if (typeof e === "boolean") return e;
  if (typeof e !== "string" && typeof e !== "number") return;
  let n = String(e);
  if (Ne(n)) return !0;
  if (zo(n)) return !1;
  return;
}
var C = ["bash", "powershell"];
function C2n(e, n) {
  if (e == null) return;
  let r = String(e).trim().toLowerCase();
  if (r === "") return;
  if (C.includes(r)) return r;
  t(`Frontmatter 'shell: ${e}' in ${n} is not recognized. Valid values: ${C.join(", ")}. Falling back to bash.`, {
    level: "warn"
  });
  return;
}
export { phe, ZT, lLt, Nln, w2n, FE, v2n, nD, fhe, y0, OS, Cw, yxo, vv, Hln, Sct, mhe, Fln, _xo, _0, kX, Iz, dte, Mk, n1, ms, cLt, wct, k2n, E2n, c6, T2n, dLt, Oz, C2n };