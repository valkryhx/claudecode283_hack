// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Wt
} from "B:/~BUN/root/chunk-b91sxvrb.js";
import {
  AFe
} from "B:/~BUN/root/chunk-1s0yt4vj.js";
import {
  X4
} from "B:/~BUN/root/chunk-wthaftk0.js";
var i = /^([a-z][a-z\d+\-.]*:)?\/\//i;

function r(o, e) {
  let s = e?.baseURL,
    n = i.test(o),
    t = null;
  if (n && !X4(o)) t = o;
  else if (s != null && !X4(s)) t = s;
  else if (!n && s == null) t = o;
  if (t !== null) throw Error(`downloads: request (url="${o}"` + (s != null ? `, baseURL="${s}"` : "") + ") does not resolve to the public CDN (downloads.claude.ai). Use firstPartyApi for api.anthropic.com (residency-gated) or externalHttp for non-Anthropic hosts.")
}
var sX = {
  get(o, e) {
    return r(o, e), AFe(), Wt.get(o, e)
  }
};
export {
  sX
};
