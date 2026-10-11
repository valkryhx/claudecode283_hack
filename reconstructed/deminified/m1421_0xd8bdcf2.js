// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { x } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { qr, re } from "B:/~BUN/root/chunk-y04k89s2.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { ske } from "B:/~BUN/root/chunk-3jyp964r.js";
import { Nu } from "B:/~BUN/root/chunk-q5ke49kw.js";
import { CCo } from "B:/~BUN/root/chunk-kk0ky5aa.js";
var C = 0.5,
  l = 1600,
  P = 25000;
function u() {
  let MAX_MCP_OUTPUT_TOKENS = a.MAX_MCP_OUTPUT_TOKENS;
  if (MAX_MCP_OUTPUT_TOKENS !== void 0 && MAX_MCP_OUTPUT_TOKENS > 0) return MAX_MCP_OUTPUT_TOKENS;
  let t = x("tengu_velvet_ibis", {})?.mcp_tool;
  if (typeof t === "number" && Number.isFinite(t) && t > 0) return t;
  return P;
}
function wse(e) {
  if (!e || typeof e === "string" || !Array.isArray(e)) return e;
  let n = e,
    t = !1;
  for (let r of n) if (r.type === "text" && "_meta" in r && r._meta) {
    t = !0;
    break;
  }
  if (!t) return e;
  return n.map(item => {
    if (item.type === "text" && "_meta" in item && item._meta) {
      let {
        _meta: _meta,
        ...s
      } = item;
      return s;
    }
    return item;
  });
}
function f(e) {
  return e.type === "text";
}
function p(e) {
  return e.type === "image";
}
function O0e(e) {
  if (!e) return 0;
  if (typeof e === "string") return Nu(e);
  if (!Array.isArray(e)) return 0;
  return e.reduce((acc, item) => {
    if (f(item)) return acc + Nu(item.text);else if (p(item)) return acc + l;
    return acc;
  }, 0);
}
function Owe() {
  return u() * 4;
}
var T = "[OUTPUT TRUNCATED - exceeded ";
function M() {
  return `

${T}${u()} token limit]

The tool output was truncated. If this MCP server provides pagination or filtering tools, use them to retrieve specific portions of the data. If pagination is not available, inform the user that you are working with truncated output and results may be incomplete.`;
}
async function g(e, n) {
  let t = [],
    r = 0;
  for (let o of e) if (f(o)) {
    let s = n - r;
    if (s <= 0) break;
    if (o.text.length <= s) t.push(o), r += o.text.length;else {
      let text = re(o.text, s);
      if (text) {
        let c = {
          type: "text",
          text: text
        };
        if (o._meta) c._meta = o._meta;
        t.push(c);
      }
      break;
    }
  } else if (p(o)) {
    let s = l * 4;
    if (r + s <= n) t.push(o), r += s;else {
      let i = n - r;
      if (i > 0) {
        let c = Math.floor(i * 0.75);
        try {
          let m = await CCo(o, c);
          if (t.push(m), m.source.type === "base64") r += m.source.data.length;else r += s;
        } catch {}
      }
    }
  } else t.push(o);
  return t;
}
async function WEt(content, credentials) {
  if (!content) return !1;
  let t = O0e(content);
  if (t <= u() * C) return !1;
  try {
    return ((await ske(typeof content === "string" ? [{
      role: "user",
      content: content
    }] : [{
      role: "user",
      content: content
    }], [], void 0, {
      credentials: credentials
    })) ?? t) > u();
  } catch (error) {
    return d(error), t > u();
  }
}
async function zEt(e) {
  if (!e) return e;
  let n = Owe(),
    text_2 = M();
  if (typeof e === "string") return qr(e, n) + text_2;else {
    let r = await g(e, n);
    return r.push({
      type: "text",
      text: text_2
    }), r;
  }
}
async function O7(e, n) {
  if (!(await WEt(e, n))) return e;
  return await zEt(e);
}
export { wse, O0e, Owe, WEt, zEt, O7 };