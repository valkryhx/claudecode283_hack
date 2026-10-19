// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { ne, zr, yI } from "B:/~BUN/root/chunk-nggrknsv.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { xAr, _M } from "B:/~BUN/root/chunk-0m6vvjrw.js";
import { Wa } from "B:/~BUN/root/chunk-vd11ggb1.js";
var gRn = 5,
  jts = "Structured output was retracted by a model fallback and no retry produced a valid result",
  d = 600;
function Wts(t, r, e) {
  if (r > 0) return `Failed to provide surviving structured output after ${t} attempts (${r} retracted by a model fallback)`;
  let n = `Failed to provide valid structured output after ${t} attempts`;
  return e === void 0 ? n : `${n} \u2014 last StructuredOutput error: ${e}`;
}
function CXr(t) {
  let r = typeof t === "string" ? t : Array.isArray(t) ? t.flatMap(item => item.type === "text" ? [item.text] : []).join(`
`) : void 0;
  if (r === void 0) return;
  let n = r.replace(/^<tool_use_error>/, "").replace(/<\/tool_use_error>$/, "").replace(xAr, `
`).split(`
`).map(yI).join(`
`),
    sanitized = _M(n, {
      prependMarker: !1
    }).sanitized,
    u = zr(sanitized);
  if (u.length === 0) return;
  let s = u.length > d ? ne(u, d) + "\u2026" : u;
  return _M(s, {
    prependMarker: !1
  }).sanitized;
}
function zts(t, r) {
  try {
    let e = r === void 0 ? 0 : t.lastIndexOf(r) + 1;
    return a(e === 0 ? t : t.slice(e));
  } catch (error) {
    l(error);
    return;
  }
}
function a(t) {
  let r = new Set();
  for (let e of t) {
    if (e?.type !== "assistant") continue;
    let content = e.message.content;
    if (!Array.isArray(content)) continue;
    for (let o of content) if (o.type === "tool_use" && o.name === Wa) r.add(o.id);
  }
  if (r.size === 0) return;
  for (let e = t.length - 1; e >= 0; e--) {
    let n = t[e];
    if (n?.type !== "user") continue;
    let content_2 = n.message.content;
    if (!Array.isArray(content_2)) continue;
    for (let u = content_2.length - 1; u >= 0; u--) {
      let s = content_2[u];
      if (s?.type === "tool_result" && s.is_error === !0 && r.has(s.tool_use_id)) return CXr(s.content);
    }
  }
  return;
}
export { gRn, jts, Wts, CXr, zts };