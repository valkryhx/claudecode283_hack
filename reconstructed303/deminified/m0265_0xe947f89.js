// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { oI, d$ } from "B:/~BUN/root/chunk-x50ytcx8.js";
import { Fe, ws } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { tu } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { xZe } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { L } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { QB, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { ne, $t } from "B:/~BUN/root/chunk-nggrknsv.js";
import { NX } from "B:/~BUN/root/chunk-hgpj62j5.js";
import { fUt } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { S5, h9n } from "B:/~BUN/root/chunk-pystvv3m.js";
import { tc } from "B:/~BUN/root/chunk-eya7pdzx.js";
import { normalize as b } from "path";
import { createHash as M } from "crypto";
function x(e) {
  return {
    sha256: M("sha256").update(e, "utf8").digest("hex"),
    bytes: Buffer.byteLength(e, "utf8")
  };
}
function $Oe(e, n) {
  return Buffer.byteLength(n, "utf8") === e.bytes && x(n).sha256 === e.sha256;
}
var B = "File has been modified since read, either by the user or by a linter. Read it again before attempting to write it.";
function m2n(e) {
  return e === void 0 ? B : `File has been modified on ${e} since this session read it. Read it again there (Read with "_host": "${e}") before attempting to write it.`;
}
function Wxr(e) {
  return e === void 0 ? fUt : `File content on ${e} has changed since this session read it. Read it again there (Read with "_host": "${e}"), then retry.`;
}
var HT = 5000,
  N = 26214400,
  v = 4096;
function zxr(e) {
  return Bun.hash(e).toString(36);
}
function nA(e) {
  if ((e.offset ?? 1) > 1 || e.isPartialView) return !1;
  if (e.limit === void 0) return !0;
  return e.content !== "" && $t(e.content, `
`) + 1 < e.limit;
}
function kX(e) {
  return e !== void 0 && nA(e) && !e.contentNotInModelContext;
}
function $U(e, n) {
  if (e.contentHash !== void 0) return e.contentHash === zxr(n);
  return e.content === n;
}
function m1e(e, n) {
  return A(e, n) || e.contentFromTranscript === !0 && n.endsWith(`
`) && A(e, n.slice(0, -1));
}
function A(e, n) {
  return e.readBaseline !== void 0 ? $Oe(e.readBaseline, n) : $U(e, n);
}
function zb(e) {
  return e.charCodeAt(0) === 65279 ? e.slice(1) : e;
}
function Dh(e) {
  return zb(e).replaceAll(`\r
`, `
`);
}
function g2n(e, n) {
  return $U(e, Dh(n));
}
class C {
  keepsReadBaselines;
  cache;
  constructor(max, maxSize, r = !1) {
    this.keepsReadBaselines = r;
    this.cache = new tc({
      max: max,
      maxSize: maxSize,
      sizeCalculation: o => Math.max(1, Buffer.byteLength(o.content))
    });
  }
  get(e) {
    return this.cache.get(b(e));
  }
  set(e, n) {
    let r = b(e),
      o = this.cache.get(r),
      keepContent = n.keepContent ?? o?.keepContent,
      contentHash = n.contentHash ?? zxr(n.content),
      contentLength = n.contentLength ?? n.content.length,
      c = n.content !== "" || n.contentHash === void 0,
      readBaseline = !(this.keepsReadBaselines || NX()) ? void 0 : c && !n.contentFromTranscript && nA(n) ? x(n.content) : n.readBaseline ?? (contentHash === o?.contentHash ? o?.readBaseline : void 0),
      d = keepContent && n.content === "" && contentHash === o?.contentHash && o.content ? o.content : n.content,
      content = keepContent || Buffer.byteLength(d) <= v ? d : "";
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
    return this.cache.has(b(e));
  }
  delete(e) {
    return this.cache.delete(b(e));
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
function hw(e, n = N, r = !1) {
  return new C(e, n, r);
}
function h2n(e) {
  return Object.fromEntries(e.entries());
}
function Rft(e) {
  return Array.from(e.keys());
}
function lae(e, n) {
  let r = hw(e.max, e.maxSize),
    o = e.dump();
  if (n?.stripSeededFromContext) {
    for (let i of o) if (i[1].value?.seededFromContext) i[1].value = {
      ...i[1].value,
      seededFromContext: !1
    };
  }
  return r.load(o), r;
}
function y2n(e) {
  let n = [];
  for (let [r, o] of e.entries()) if (o.startupMemorySeed) n.push([r, o]);
  e.clear();
  for (let [r, o] of n) e.set(r, o);
}
function sDs(e, n) {
  let r = lae(e);
  for (let [o, i] of n.entries()) {
    let s = r.get(o);
    if (!s || i.timestamp > s.timestamp) r.set(o, i);
  }
  return r;
}
var I = ["name", "description", "model", "allowed-tools", "argument-hint", "arguments", "disable-model-invocation", "user-invocable", "effort", "shell", "version", "when_to_use", "paths", "hooks", "context", "agent", "created_by", "improved_by", "mcpServers", "lspServers", "agents", "outputStyles", "themes", "workflows", "channels", "monitors", "settings", "experimental", "commands", "skills", "dependencies", "userConfig", "metadata", "displayName", "defaultEnabled", "fallback", "evals", "author", "homepage", "repository", "license", "keywords", "compatibility", "tools", "disallowedTools", "color", "permissionMode", "maxTurns", "autoCompactWindow", "initialPrompt", "memory", "background", "omitClaudeMd", "isolation", "observer", "observerMessage", "observeSubagents", "keep-coding-instructions", "force-for-plugin", "type", "originSessionId", "hide-from-slash-command-tool"],
  ae = h9n(I);
var D = ["argument-hint", "arguments", "disable-model-invocation", "user-invocable", "context", "agent", "paths", "settings"],
  le = new Set(D.map(S5));
function wM(e) {
  return Bun.YAML.parse(e);
}
function dae(e) {
  return Bun.YAML.stringify(e, null, 2) + `
`;
}
var z = /[{}[\]*&#!|>%@`]|: /;
function H(e) {
  let n = e.split(`
`),
    r = [];
  for (let o of n) {
    let i = o.match(/^([a-zA-Z_-]+):\s+(\S.*)$/);
    if (i) {
      let [, s, a] = i;
      if (!s || !a) {
        r.push(o);
        continue;
      }
      if (a.startsWith('"') && a.endsWith('"') || a.startsWith("'") && a.endsWith("'")) {
        r.push(o);
        continue;
      }
      if (a.startsWith("[") && a.endsWith("]")) try {
        if (Array.isArray(wM(a))) {
          r.push(o);
          continue;
        }
      } catch {}
      if (z.test(a)) {
        let c = a.replaceAll("\\", "\\\\").replaceAll('"', "\\\"");
        r.push(`${s}: "${c}"`);
        continue;
      }
    }
    r.push(o);
  }
  return r.join(`
`);
}
function K(e) {
  let quotedKeys = [],
    unprovableKeys = [],
    o = e.split(`
`).map(item => {
      let s = item.endsWith("\r"),
        a = s ? item.slice(0, -1) : item,
        c = a.match(/^([A-Za-z0-9_][A-Za-z0-9_.-]*):[ \t]+(.*)$/);
      if (!c) return k(a, unprovableKeys), item;
      let [, l, d] = c;
      if (!l || !d) return item;
      let u = d.trimEnd();
      if (u === "") return item;
      if (/^["'|>]/.test(u)) return k(a, unprovableKeys), item;
      let f;
      try {
        f = wM(u);
      } catch {
        return item;
      }
      if (typeof f !== "string" && f !== null) return k(a, unprovableKeys), item;
      if (!(typeof f === "string" && f !== u || f === null && !["null", "Null", "NULL", "~"].includes(u))) return item;
      quotedKeys.push(l);
      let y = u.replaceAll("\\", "\\\\").replaceAll('"', "\\\"");
      return `${l}: "${y}"${s ? "\r" : ""}`;
    });
  return {
    text: quotedKeys.length === 0 ? null : o.join(`
`),
    quotedKeys: quotedKeys,
    unprovableKeys: unprovableKeys
  };
}
function k(e, n) {
  let r = e.match(/^("(?:[^"\\]|\\.)*"):[ \t]+(.*)$/) ?? e.match(/^('(?:[^']|'')*'):[ \t]+(.*)$/) ?? e.match(/^([^\s#][^:\n]*?):[ \t]+(.*)$/);
  if (r === null) return;
  let [, o, i] = r;
  if (!o || !i) return;
  let s = i.trimEnd().replace(/"(?:[^"\\]|\\.)*"|'(?:[^']|'')*'/g, "");
  if (/^#|[ \t]#/.test(s)) n.push(o);
}
var cae = 30,
  d3 = 65536,
  HE = /^---\s*\n([\s\S]*?)---\s*\n?/,
  yK = /^---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(\r?\n|$)/;
function $Co(e, n) {
  return e;
}
function hi(e, n, r) {
  let content_2 = e;
  e = zb(e);
  let i = e.indexOf("---", 3) < 0 ? null : e.match(HE);
  if (!i) return {
    frontmatter: {},
    frontmatterAsWritten: {},
    content: content_2
  };
  let s = i[1] || "",
    content_3 = e.slice(i[0].length);
  if (r?.untrusted && (s.length > d3 || q(s) || V(s))) return {
    frontmatter: {},
    frontmatterAsWritten: {},
    asWrittenProblem: "was not parsed: it is too long, too nested, or may hold a YAML anchor",
    content: content_3,
    parseError: "the frontmatter is too long, too nested, or may hold a YAML anchor"
  };
  let c = p => r?.normalizeKeys ? $Co(p, n) : p,
    frontmatter_2 = {},
    frontmatterAsWritten_2 = frontmatter_2,
    parseError,
    asWrittenProblem,
    h;
  if (r?.quoteLossyValues) {
    let p = e.match(yK),
      g = p?.[1] ?? "";
    if (s.trim() !== "" || g.trim() !== "") {
      if (p === null || g.trim() !== s.trim()) h = 'the closing --- is ambiguous (a value containing "---"?) \u2014 part of the block may have read as body';
    }
  }
  let y, S;
  if (r?.quoteLossyValues) {
    let p = K(s);
    if (p.unprovableKeys.length > 0) y = `an inline '#' in [${p.unprovableKeys.join(", ")}] cannot be preserved by a rewrite`;
    if (p.text !== null) try {
      let frontmatterAsWritten = _(wM(p.text)),
        frontmatter = c(frontmatterAsWritten),
        rewriteHazard = h ?? y ?? R(s, frontmatter);
      return {
        frontmatter: frontmatter,
        frontmatterAsWritten: frontmatterAsWritten,
        content: content_3,
        ...(rewriteHazard !== void 0 && {
          rewriteHazard: rewriteHazard
        })
      };
    } catch {
      S = `quoting [${p.quotedKeys.join(", ")}] broke the document; a rewrite from the plain parse would drop their inline '#' content`;
      let g = n ? ` in ${n}` : "";
      t(`quoteLossyValues: ${S}${g}`, {
        level: "warn"
      });
    }
  }
  let m = Con(s);
  if (m.ok) {
    if (frontmatterAsWritten_2 = _(m.value), frontmatter_2 = c(r?.normalizeKeys ? structuredClone(frontmatterAsWritten_2) : frontmatterAsWritten_2), !(m.value === null || m.value === void 0 || typeof m.value === "object" && !Array.isArray(m.value))) asWrittenProblem = "is a list or a single value, not a table";
  } else {
    parseError = m.error, asWrittenProblem = `did not parse as YAML (${parseError})`;
    let p = n ? ` in ${n}` : "";
    t(`Failed to parse YAML frontmatter${p}: ${parseError}`, {
      level: "warn"
    });
  }
  let rewriteHazard_2 = !r?.quoteLossyValues ? void 0 : parseError !== void 0 ? h ?? `the frontmatter failed to parse: ${parseError}` : h ?? y ?? S ?? R(s, frontmatter_2);
  return {
    frontmatter: frontmatter_2,
    frontmatterAsWritten: frontmatterAsWritten_2,
    ...(asWrittenProblem !== void 0 && {
      asWrittenProblem: asWrittenProblem
    }),
    content: content_3,
    ...(parseError !== void 0 && {
      parseError: parseError
    }),
    ...(rewriteHazard_2 !== void 0 && {
      rewriteHazard: rewriteHazard_2
    })
  };
}
function Con(e) {
  try {
    return {
      ok: !0,
      value: wM(e)
    };
  } catch {
    try {
      let n = H(e).replace(/^\t+/gm, r => "  ".repeat(r.length));
      return {
        ok: !0,
        value: wM(n)
      };
    } catch (n) {
      return {
        ok: !1,
        error: n instanceof Error ? n.message : String(n)
      };
    }
  }
}
function R(e, n) {
  if (e.trim() !== "" && Object.keys(n).length === 0) return "the frontmatter has no keys (a sequence, scalar, or comment-only document)";
  return;
}
function _(e) {
  if (e && typeof e === "object" && !Array.isArray(e)) return e;
  return {};
}
function XLt(e) {
  return O(e, {
    results: results,
    bytes: bytes
  });
}
function O(e, n) {
  if (Array.isArray(e)) return e.flatMap(item => O(item, n));
  if (typeof e !== "string") return [];
  let r = [],
    o = "",
    i = 0;
  for (let a = 0; a < e.length; a++) {
    let c = e[a];
    if (c === "{") i++, o += c;else if (c === "}") i--, o += c;else if (c === "," && i === 0) {
      let l = o.trim();
      if (l) r.push(l);
      o = "";
    } else o += c;
  }
  let s = o.trim();
  if (s) r.push(s);
  return r.filter(item => item.length > 0).flatMap(item => j(item, n));
}
var results = 1000,
  bytes = 4194304;
function j(e, n) {
  if (!e.includes("{")) return [e];
  let r = [],
    o = [e];
  for (let i = o.pop(); i !== void 0; i = o.pop()) {
    let s = i.match(/^([^{]*)\{([^}]+)\}(.*)$/);
    if (!s) {
      r.push(i);
      continue;
    }
    let a = s[1] || "",
      c = s[2] || "",
      l = s[3] || "",
      d = c.split(",").map(item => item.trim());
    n.bytes -= i.length;
    let u = r.length + o.length + d.length;
    if (n.bytes < 0 || u > n.results || u * e.length > n.bytes) return t(`Brace pattern expansion exceeds the budget; using it unexpanded: ${ne(e, 256)}`, {
      level: "warn"
    }), [e];
    for (let f = d.length - 1; f >= 0; f--) o.push(a + (d[f] ?? "") + l);
  }
  return n.results -= r.length, n.bytes -= r.length * e.length, r;
}
function _2n(e) {
  if (e === void 0 || e === null) return;
  let n = typeof e === "number" ? e : tu(String(e));
  if (Number.isInteger(n) && n > 0) return n;
  return;
}
function Gxr(e) {
  let n = _2n(e);
  return n !== void 0 && n >= oI && n <= d$ ? n : void 0;
}
function Vxr(e) {
  let experimental = e.experimental;
  if (typeof experimental !== "object" || experimental === null) return;
  let r = Object.entries(experimental).find(([o]) => S5(o) === "cachettl")?.[1];
  return xZe.find(item => item === r);
}
function jee(e, n, r) {
  if (e == null) return null;
  if (typeof e === "string") return e.trim() || null;
  if (typeof e === "number" || typeof e === "boolean") return String(e);
  let o = r ? `${r}:${n}` : n ?? "unknown";
  return t(`Description invalid for ${o} - omitting`, {
    level: "warn"
  }), null;
}
function Ron(e, n) {
  if (e == null) return;
  let r = String(e);
  if (r.length <= QB) return r;
  t(`Frontmatter "name" of ${n} is over ${QB} characters - ignoring it`, {
    level: "warn"
  });
  return;
}
function qxr(e) {
  let n = r => r != null && typeof r === "object" && !Array.isArray(r) ? Object.keys(r) : [];
  return L([...Object.keys(e), ...n(e.experimental)]);
}
function Aon(e) {
  return uae(e) ?? !1;
}
function uae(e) {
  if (typeof e === "boolean") return e;
  if (typeof e !== "string" && typeof e !== "number") return;
  let n = String(e);
  if (Fe(n)) return !0;
  if (ws(n)) return !1;
  return;
}
var T = ["bash", "powershell"];
function Kxr(e, n) {
  if (e == null) return;
  let r = String(e).trim().toLowerCase();
  if (r === "") return;
  if (T.includes(r)) return r;
  t(`Frontmatter 'shell: ${e}' in ${n} is not recognized. Valid values: ${T.join(", ")}. Falling back to bash.`, {
    level: "warn"
  });
  return;
}
var Y = 256;
function V(e) {
  let n = 0;
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    if (o === "[" || o === "{" || (o === "-" || o === "?") && ` 	\r
`.includes(e[r - 1] ?? " ") && ` 	\r
`.includes(e[r + 1] ?? " ")) {
      if (n++, n > Y) return !0;
    }
  }
  return !1;
}
var X = 256;
function q(e) {
  for (let n = e.indexOf("&"); n >= 0; n = e.indexOf("&", n + 1)) {
    if (` 	\r
`.includes(e[n + 1] ?? " ")) continue;
    let r = e[n - 1];
    if (r !== void 0 && /[\p{L}\p{N}&]/u.test(r)) continue;
    let o;
    if (r === " " || r === "\t") {
      let l = n - 1;
      while (e[l] === " " || e[l] === "\t") l--;
      let d = e[l];
      if (d === void 0 || !/[\p{L}\p{N}]/u.test(d)) return !0;
      o = l + 1;
    } else o = n;
    let i = o - 1;
    while (i >= 0 && !` 	\r
`.includes(e[i] ?? " ")) {
      if (o - i > X) return !0;
      i--;
    }
    let s = e.slice(i + 1, o);
    if (s.includes("!")) return !0;
    let a = Math.max(s.lastIndexOf("["), s.lastIndexOf("{"), s.lastIndexOf(","));
    for (let l = s.indexOf(":"); l >= 0; l = s.indexOf(":", l + 1)) if (l === 0 || `"']}[{,`.includes(s[l - 1] ?? "")) a = Math.max(a, l);
    let c = s.slice(a + 1);
    if ("!&*".includes(c[0] ?? "!")) return !0;
  }
  return !1;
}
export { $Oe, m2n, Wxr, HT, zxr, nA, kX, $U, m1e, zb, Dh, g2n, hw, h2n, Rft, lae, y2n, sDs, wM, dae, cae, d3, HE, yK, $Co, hi, Con, XLt, _2n, Gxr, Vxr, jee, Ron, qxr, Aon, uae, Kxr };