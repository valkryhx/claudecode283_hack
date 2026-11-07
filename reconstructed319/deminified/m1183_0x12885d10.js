// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { M } from "B:/~BUN/root/chunk-4qfwb3rf.js";
var a = M(function (u) {
  function c(t) {
    let r = {};
    if (t = t.replace(/^\?/, ""), t) for (let n of t.split("&")) {
      let [e, s = null] = n.split("=");
      if (e = decodeURIComponent(e), s) s = decodeURIComponent(s);
      if (!(e in r)) r[e] = s;else if (Array.isArray(r[e])) r[e].push(s);else r[e] = [r[e], s];
    }
    return r;
  }
  u.parseQueryString = c;
});
var R3 = M(function (y) {
  var l = a(),
    i = t => {
      if (typeof t === "string") return i(new URL(t));
      let {
          hostname: hostname,
          pathname: n,
          port: port,
          protocol: protocol,
          search: search
        } = t,
        query;
      if (search) query = l.parseQueryString(search);
      return {
        hostname: hostname,
        port: port ? parseInt(port) : void 0,
        protocol: protocol,
        path: n,
        query: query
      };
    };
  y.parseUrl = i;
});
export { R3 };