// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Xd
} from "B:/~BUN/root/chunk-q8eknvfd.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  br,
  nSt
} from "B:/~BUN/root/chunk-sy1h8mf0.js";
var r = /^[a-zA-Z0-9_-]{1,64}$/;

function c8n(i, n = Xd) {
  if (!("tools" in i) || i.tools === void 0) return [];
  if (!Array.isArray(i.tools)) return t("[bridge:meta-mcp] meta tools[] is not an array", {
    level: "warn"
  }), null;
  let e = [];
  for (let o of i.tools) {
    if (o === null || typeof o !== "object" || !("name" in o) || typeof o.name !== "string" || !r.test(o.name)) return t("[bridge:meta-mcp] injected tools[] entry is malformed", {
      level: "warn"
    }), null;
    e.push({
      name: o.name,
      ..."permission_policy" in o && typeof o.permission_policy === "string" && {
        permission_policy: o.permission_policy
      }
    })
  }
  let {
    allow: s
  } = nSt({
    [n]: {
      type: "http",
      tools: e
    }
  }), l = br(n, "");
  return s.map((o) => o.startsWith(l) ? o.slice(l.length) : o)
}
export {
  c8n
};
