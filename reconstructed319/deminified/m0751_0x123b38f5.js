// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Q } from "B:/~BUN/root/chunk-n8cnxns2.js";
function AKo(n) {
  if (n === null || typeof n !== "object") return;
  let protocols = n.protocols;
  if (!Array.isArray(protocols)) return;
  let t = protocols.filter(item => typeof item === "string");
  return t.length > 0 ? t : void 0;
}
function usi(n) {
  let o = AKo(n);
  if (o === void 0) return "";
  return ` (subprotocols: ${o.map(item => `"${item}"`).join(", ")})`;
}
var X4r = 4,
  e = 48;
function Tbn(n) {
  let o = n.slice(0, X4r).map(item => item.length > e ? `${Q(item, e)}\u2026` : item),
    t = n.length - o.length;
  return `${o.map(item => `"${item}"`).join(", ")}${t > 0 ? ` (+${t} more)` : ""}`;
}
export { AKo, usi, X4r, Tbn };