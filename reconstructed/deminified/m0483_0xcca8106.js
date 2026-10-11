// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { re } from "B:/~BUN/root/chunk-y04k89s2.js";
function ulr(n) {
  if (n === null || typeof n !== "object") return;
  let protocols = n.protocols;
  if (!Array.isArray(protocols)) return;
  let t = protocols.filter(item => typeof item === "string");
  return t.length > 0 ? t : void 0;
}
function Ito(n) {
  let o = ulr(n);
  if (o === void 0) return "";
  return ` (subprotocols: ${o.map(item => `"${item}"`).join(", ")})`;
}
var hRn = 4,
  e = 48;
function ivt(n) {
  let o = n.slice(0, hRn).map(item => item.length > e ? `${re(item, e)}\u2026` : item),
    t = n.length - o.length;
  return `${o.map(item => `"${item}"`).join(", ")}${t > 0 ? ` (+${t} more)` : ""}`;
}
export { ulr, Ito, hRn, ivt };