// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { createServer as b } from "http";
function Wkn(n) {
  let r = Array.isArray(n) ? n[0] : n;
  return r ? r : void 0;
}
var fallback = 3118;
function p() {
  return {
    range: x() === "windows" ? {
      min: 39152,
      max: 49151
    } : {
      min: 49152,
      max: 65535
    },
    fallback: fallback
  };
}
function Xat(n = fallback) {
  return `http://localhost:${n}/callback`;
}
function A() {
  let MCP_OAUTH_CALLBACK_PORT = i.MCP_OAUTH_CALLBACK_PORT;
  return MCP_OAUTH_CALLBACK_PORT !== void 0 && MCP_OAUTH_CALLBACK_PORT <= 65535 ? MCP_OAUTH_CALLBACK_PORT : void 0;
}
async function m1e(n, r = p()) {
  let t = A();
  if (t) return t;
  if (n && (await u(n))) return n;
  let {
      min: min,
      max: max
    } = r.range,
    a = max - min + 1,
    l = Math.min(a, 100);
  for (let s = 0; s < l; s++) {
    let c = min + Math.floor(Math.random() * a);
    if (await u(c)) return c;
  }
  if (await u(r.fallback)) return r.fallback;
  let d = await m(0);
  if (d !== void 0) return d;
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
          a = typeof o === "object" && o ? o.port : void 0;
        e.close(() => a !== void 0 ? r(a) : t(Error("no address on bound server")));
      });
    });
  } catch {
    return;
  }
}
export { Wkn, Xat, m1e };