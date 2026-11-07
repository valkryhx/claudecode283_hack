// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  fo
} from "B:/~BUN/root/chunk-46ahshhq.js";
var n = "anthropics",
  e = "anthropic",
  G = `github.com/${n}/${e}`;
var W = new RegExp(`${n}[^]*${e}`),
  H = new RegExp(`^${e}(?:\\.git)*$`);

function mAr(o) {
  return !1
}

function TKi() {
  return
}

function hAr(o) {
  return fo(o.host) && o.owner.toLowerCase() === n && o.name.toLowerCase() === e
}
export {
  mAr,
  TKi,
  hAr
};
