// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  x
} from "B:/~BUN/root/chunk-mwfggkjt.js";
import {
  sep as i
} from "path";

function u_e(t, r) {
  let e = r.endsWith(i) ? r : r + i;
  if (x() === "windows") return t.toLowerCase().startsWith(e.toLowerCase());
  return t.startsWith(e)
}

function q9(t, r) {
  if (x() === "windows") return t.toLowerCase() === r.toLowerCase() || u_e(t, r);
  return t === r || u_e(t, r)
}

function a(t) {
  return t.startsWith("/") ? "/" : "\\"
}

function RF(t, r, e) {
  let n = e ? t.toLowerCase() : t,
    o = e ? r.toLowerCase() : r;
  if (n === o) return !0;
  let s = a(o),
    f = o.endsWith(s) ? o : o + s;
  return n.startsWith(f)
}
export {
  u_e,
  q9,
  RF
};
