// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { re, fr, cH } from "B:/~BUN/root/chunk-y04k89s2.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { MWn, AR } from "B:/~BUN/root/chunk-xdhy5nhb.js";
import { bi } from "B:/~BUN/root/chunk-9mfh08mz.js";
var UKt = 5,
  $7r = "Structured output was retracted by a model fallback and no retry produced a valid result",
  a = 600;
function U7r(t, r, e) {
  if (r > 0) return `Failed to provide surviving structured output after ${t} attempts (${r} retracted by a model fallback)`;
  let n = `Failed to provide valid structured output after ${t} attempts`;
  return e === void 0 ? n : `${n} \u2014 last StructuredOutput error: ${e}`;
}
function osr(t) {
  let r = typeof t === "string" ? t : Array.isArray(t) ? t.flatMap(item => item.type === "text" ? [item.text] : []).join(`
`) : void 0;
  if (r === void 0) return;
  let n = r.replace(/^<tool_use_error>/, "").replace(/<\/tool_use_error>$/, "").replace(MWn, `
`).split(`
`).map(cH).join(`
`),
    sanitized = AR(n, {
      prependMarker: !1
    }).sanitized,
    u = fr(sanitized);
  if (u.length === 0) return;
  let s = u.length > a ? re(u, a) + "\u2026" : u;
  return AR(s, {
    prependMarker: !1
  }).sanitized;
}
function B7r(t, r) {
  try {
    let e = r === void 0 ? 0 : t.lastIndexOf(r) + 1;
    return c(e === 0 ? t : t.slice(e));
  } catch (error) {
    d(error);
    return;
  }
}
function c(t) {
  let r = new Set();
  for (let e of t) {
    if (e?.type !== "assistant") continue;
    let content = e.message.content;
    if (!Array.isArray(content)) continue;
    for (let o of content) if (o.type === "tool_use" && o.name === bi) r.add(o.id);
  }
  if (r.size === 0) return;
  for (let e = t.length - 1; e >= 0; e--) {
    let n = t[e];
    if (n?.type !== "user") continue;
    let content_2 = n.message.content;
    if (!Array.isArray(content_2)) continue;
    for (let u = content_2.length - 1; u >= 0; u--) {
      let s = content_2[u];
      if (s?.type === "tool_result" && s.is_error === !0 && r.has(s.tool_use_id)) return osr(s.content);
    }
  }
  return;
}
export { UKt, $7r, U7r, osr, B7r };