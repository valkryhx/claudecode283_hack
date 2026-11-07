// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { gi, Qr, _r, rn } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { mN, yr, mn } from "B:/~BUN/root/chunk-44q965xg.js";
import { dt, Yt } from "B:/~BUN/root/chunk-9kvvd0hy.js";
import { bu } from "B:/~BUN/root/chunk-5h4fwkjy.js";
import { HF } from "B:/~BUN/root/chunk-b9f6eh39.js";
import { ze } from "B:/~BUN/root/chunk-xwzn0yxv.js";
var t = new Set([ze, dt, Yt, gi, Qr, _r, HF, bu]),
  i = new Set([dt, Yt, gi]);
function fht(o, e) {
  return `${i.has(e) ? `lets ${e} run without asking only in the working directories` : `adds nothing to ${e}'s default, which already runs without asking in the working directories`}. "${e}" alone allows every path. Older versions of Claude Code treat "${o}" as "${e}", and this version will too if Anthropic turns this change off.`;
}
function aU(o) {
  return o.ruleContent === "*" && t.has(o.toolName) && n();
}
function n() {
  return rn("bot_protected_tengu_amber_plover", !0);
}
function m_(o, e) {
  if (e === "allow" && typeof o === "string" && (o.endsWith("(*)") || o.endsWith("()"))) {
    let r = mN(o);
    if (r.kind === "call" && (r.rawContent === "*" || r.rawContent === "") && t.has(r.toolName) && n()) return {
      toolName: r.toolName,
      ruleContent: "*"
    };
  }
  return yr(o);
}
function kX(o) {
  return mn(yr(o));
}
export { fht, aU, m_, kX };