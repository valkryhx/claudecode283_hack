// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { createServer as b } from "http";
function zKt(n) {
  let r = Array.isArray(n) ? n[0] : n;
  return r ? r : void 0;
}
var range = I() === "windows" ? {
    min: 39152,
    max: 49151
  } : {
    min: 49152,
    max: 65535
  },
  fallback = 3118,
  p = {
    range: range,
    fallback: fallback
  };
function zqe(n = fallback) {
  return `http://localhost:${n}/callback`;
}
function P() {
  let MCP_OAUTH_CALLBACK_PORT = a.MCP_OAUTH_CALLBACK_PORT;
  return MCP_OAUTH_CALLBACK_PORT !== void 0 && MCP_OAUTH_CALLBACK_PORT <= 65535 ? MCP_OAUTH_CALLBACK_PORT : void 0;
}
async function ERe(n, r = p) {
  let t = P();
  if (t) return t;
  if (n && (await u(n))) return n;
  let {
      min: min,
      max: max
    } = r.range,
    i = max - min + 1,
    l = Math.min(i, 100);
  for (let d = 0; d < l; d++) {
    let c = min + Math.floor(Math.random() * i);
    if (await u(c)) return c;
  }
  if (await u(r.fallback)) return r.fallback;
  let s = await m(0);
  if (s !== void 0) return s;
  throw Error("No available ports for OAuth redirect");
}
async function u(n) {
  return (await m(n)) !== void 0;
}
async function m(n) {
  try {
    return await new Promise((r, t) => {
      let e = b();
      e.once("error", t), e.listen(n, "127.0.0.1", () => {
        let o = e.address(),
          i = typeof o === "object" && o ? o.port : void 0;
        e.close(() => i !== void 0 ? r(i) : t(Error("no address on bound server")));
      });
    });
  } catch {
    return;
  }
}
export { zKt, zqe, ERe };