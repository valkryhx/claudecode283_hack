// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { ne } from "B:/~BUN/root/chunk-nggrknsv.js";
function yQr(n) {
  if (n === null || typeof n !== "object") return;
  let protocols = n.protocols;
  if (!Array.isArray(protocols)) return;
  let t = protocols.filter(item => typeof item === "string");
  return t.length > 0 ? t : void 0;
}
function irs(n) {
  let o = yQr(n);
  if (o === void 0) return "";
  return ` (subprotocols: ${o.map(item => `"${item}"`).join(", ")})`;
}
var Vlr = 4,
  e = 48;
function CYt(n) {
  let o = n.slice(0, Vlr).map(item => item.length > e ? `${ne(item, e)}\u2026` : item),
    t = n.length - o.length;
  return `${o.map(item => `"${item}"`).join(", ")}${t > 0 ? ` (+${t} more)` : ""}`;
}
export { yQr, irs, Vlr, CYt };