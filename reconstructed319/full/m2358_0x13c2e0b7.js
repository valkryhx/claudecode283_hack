// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  k
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  U
} from "B:/~BUN/root/chunk-5ha2avah.js";
import {
  AsyncLocalStorage as g
} from "async_hooks";
var t7o = new Set(["ECONNREFUSED", "ConnectionRefused", "ENOTFOUND", "EAI_AGAIN", "FailedToOpenSocket", "ERR_PROXY_TUNNEL"]),
  c = new g;

function zpi(n, i, e) {
  return n === void 0 ? c.exit(e) : c.run({
    tool: i,
    toolUseId: n
  }, e)
}

function $ir(n, i, e) {
  let l = {
      started: 0,
      ranNothing: []
    },
    s = n.send.bind(n);
  return n.send = (o, p) => {
    if (typeof o !== "object" || o === null || !("method" in o) || o.method !== "tools/call") return s(o, p);
    let m = ++l.started,
      t = "params" in o ? o.params : void 0,
      r = typeof t === "object" && t !== null && "_meta" in t ? t._meta : void 0,
      a = typeof r === "object" && r !== null && "claudecode/toolUseId" in r ? r["claudecode/toolUseId"] : void 0,
      u = typeof a === "string" ? [...e].filter((d) => d.toolUseId === a) : [];
    for (let d of u)
      if (d.ownSends !== void 0) d.ownSends.started++;
    let S = u.length === 1 ? u[0]?.ownSends : void 0,
      f = a === void 0 ? c.getStore() : void 0,
      O = f === void 0 || typeof t !== "object" || t === null || !("name" in t) || t.name !== f.tool ? o : Object.assign({}, o, {
        params: Object.assign({}, t, {
          _meta: Object.assign({}, r, {
            "claudecode/toolUseId": f.toolUseId
          })
        })
      });
    return s(O, p).catch((d) => {
      if (t7o.has(k(d) ?? "") || d instanceof Error && i(d)) {
        if (l.ranNothing.push(m), S !== void 0) S.ranNothing++
      }
      throw d
    })
  }, l
}

function Uir(n, i, e) {
  if (e !== void 0 && e.started > 0) return e.ranNothing === e.started;
  if (n === void 0 || i === void 0) return !1;
  let l = n.started - i;
  return l > 0 && U(n.ranNothing, (s) => s > i) === l
}
export {
  t7o,
  zpi,
  $ir,
  Uir
};
