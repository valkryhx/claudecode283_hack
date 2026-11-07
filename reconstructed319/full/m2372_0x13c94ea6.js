// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  ae
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  Mue
} from "B:/~BUN/root/chunk-e99p2x0p.js";
var D8r = "io.modelcontextprotocol/protocolVersion",
  f = new Set(["tools/list", "prompts/list", "resources/list", "resources/templates/list", "resources/read", "server/discover"]),
  p = 256;

function L8r(o, t) {
  let n = new Map,
    s = new Set,
    c = o.send.bind(o);
  o.send = (e, r) => {
    if ("method" in e && "id" in e && h(e)) {
      if (n.size >= p) {
        let i = n.keys().next();
        if (!i.done) n.delete(i.value)
      }
      n.set(String(e.id), e.method)
    }
    return c(e, r)
  };
  let u = o.onmessage;
  o.onmessage = (e, r) => {
    if (u?.(e, r), "method" in e || !("id" in e) || e.id === void 0) return;
    let i = n.get(String(e.id));
    if (i === void 0) return;
    if (n.delete(String(e.id)), !("result" in e)) return;
    let d = e.result;
    if (typeof d !== "object" || d === null || Array.isArray(d)) return;
    let l = a(i, e.result);
    if (l.length > 0 && !s.has(i)) s.add(i), ae(t, `${i} result omits required fields although the server negotiated ${Mue}; filled in ${l.join(", ")} instead of rejecting it (not logged again for ${i} on this connection)`)
  }
}

function h(o) {
  let t = o.params?._meta;
  return typeof t === "object" && t !== null && D8r in t && typeof t[D8r] === "string"
}

function a(o, t) {
  let n = [];
  if (t.resultType === void 0) t.resultType = "complete", n.push('resultType="complete"');
  if (t.resultType === "complete" && f.has(o)) {
    if (t.ttlMs === void 0) t.ttlMs = 0, n.push("ttlMs=0");
    if (t.cacheScope === void 0) t.cacheScope = "private", n.push('cacheScope="private"')
  }
  return n
}
export {
  D8r,
  L8r
};
