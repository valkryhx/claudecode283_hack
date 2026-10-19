// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { E } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { _, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { qs, ne } from "B:/~BUN/root/chunk-nggrknsv.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { M$e } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { Gc } from "B:/~BUN/root/chunk-hkc0g0wr.js";
import { u0s } from "B:/~BUN/root/chunk-gk5jpppj.js";
var T = 0.5,
  M = 4,
  P = 1600,
  g = 25000;
function u() {
  let MAX_MCP_OUTPUT_TOKENS = a.MAX_MCP_OUTPUT_TOKENS;
  if (MAX_MCP_OUTPUT_TOKENS !== void 0 && MAX_MCP_OUTPUT_TOKENS > 0) return MAX_MCP_OUTPUT_TOKENS;
  let r = E("tengu_velvet_ibis", {})?.mcp_tool;
  if (typeof r === "number" && Number.isFinite(r) && r > 0) return r;
  return g;
}
function Mce(e) {
  if (!e || typeof e === "string" || !Array.isArray(e)) return e;
  let n = e,
    r = !1;
  for (let o of n) if (o?.type === "text" && "_meta" in o && o._meta) {
    r = !0;
    break;
  }
  if (!r) return e;
  return n.map(item => {
    if (item?.type === "text" && "_meta" in item && item._meta) {
      let {
        _meta: _meta,
        ...s
      } = item;
      return s;
    }
    return item;
  });
}
var C = 65536;
function rts(e) {
  if (!Array.isArray(e)) return e;
  let n = 0;
  for (let r of e) {
    if (r?.type !== "text" || !("_meta" in r) || !r._meta) continue;
    try {
      n += _(r._meta).length;
    } catch {
      n = 1 / 0;
    }
    if (n > C) return t(`MCP result: text blocks' _meta (over ${C} characters of JSON in all, or not serializable) left off the retained result`), Mce(e);
  }
  return e;
}
function p(e) {
  return e.type === "text";
}
function d(e) {
  return e.type === "image";
}
function hNe(e) {
  if (!e) return 0;
  if (typeof e === "string") return Gc(e);
  if (!Array.isArray(e)) return 0;
  return e.reduce((acc, item) => {
    if (p(item)) return acc + Gc(item.text);else if (d(item)) return acc + P;
    return acc;
  }, 0);
}
function Dce() {
  return u() * 4;
}
var x = "[OUTPUT TRUNCATED - exceeded ";
function k() {
  return `

${x}${u()} token limit]

The tool output was truncated. If this MCP server provides pagination or filtering tools, use them to retrieve specific portions of the data. If pagination is not available, inform the user that you are working with truncated output and results may be incomplete.`;
}
async function y(e, n) {
  let r = [],
    o = 0;
  for (let i of e) if (p(i)) {
    let s = n - o;
    if (s <= 0) break;
    if (i.text.length <= s) r.push(i), o += i.text.length;else {
      let text = ne(i.text, s);
      if (text) {
        let f = {
          type: "text",
          text: text
        };
        if (i._meta) f._meta = i._meta;
        r.push(f);
      }
      break;
    }
  } else if (d(i)) {
    let s = P * 4;
    if (o + s <= n) r.push(i), o += s;else {
      let c = n - o;
      if (c > 0) {
        let f = Math.floor(c * 0.75);
        try {
          let m = await u0s(i, f);
          if (r.push(m), m.source.type === "base64") o += m.source.data.length;else o += s;
        } catch {}
      }
    }
  } else r.push(i);
  return r;
}
async function r4t(content, credentials) {
  if (!content) return !1;
  let r = hNe(content);
  if (r <= u() * T) return !1;
  if (hNe(typeof content === "string" ? content : content.filter(p)) > u() * M) return !0;
  try {
    return ((await M$e(typeof content === "string" ? [{
      role: "user",
      content: content
    }] : [{
      role: "user",
      content: content
    }], [], void 0, {
      credentials: credentials
    })) ?? r) > u();
  } catch (error) {
    return l(error), r > u();
  }
}
async function o4t(e) {
  if (!e) return e;
  let n = Dce(),
    text_2 = k();
  if (typeof e === "string") return qs(e, n) + text_2;else {
    let o = await y(e, n);
    return o.push({
      type: "text",
      text: text_2
    }), o;
  }
}
async function Lce(e, n) {
  if (!(await r4t(e, n))) return e;
  return await o4t(e);
}
export { Mce, rts, hNe, Dce, r4t, o4t, Lce };