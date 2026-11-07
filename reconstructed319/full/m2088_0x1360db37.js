// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  jwr
} from "B:/~BUN/root/chunk-1ratk947.js";
import {
  oyr,
  syr
} from "B:/~BUN/root/chunk-cxcakgnv.js";
import {
  ta
} from "B:/~BUN/root/chunk-1s0yt4vj.js";
var u = 30000;

function izt(e) {
  let n = typeof e === "string" ? ta(e) : "";
  if (!n || jwr(n) || n === oyr || n === syr) return;
  return n
}

function v0o(e, n, r, a) {
  let i = new AbortController,
    s, d = (t) => {
      if (i.signal.aborted || t === void 0 || t === s) return;
      s = t, a(t)
    };
  if (n?.then(d, () => {}), r === void 0) return () => i.abort();
  let o = () => {},
    f = () => {
      r(i.signal).then(d, () => {}).finally(() => {
        if (!i.signal.aborted) o = e.setTimeout(f, u)
      })
    };
  return o = e.setTimeout(f, u), () => {
    i.abort(), o()
  }
}
export {
  izt,
  v0o
};
