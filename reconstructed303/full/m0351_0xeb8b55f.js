// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  K,
  L1r,
  fye,
  VGe
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  iQn
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  Pe
} from "B:/~BUN/root/chunk-fbyz9h0p.js";
import {
  Lon
} from "B:/~BUN/root/chunk-9w4ppz44.js";
import {
  join as i
} from "path";

function EN() {
  return fye() ?? i(VGe() ?? IAr(), K())
}

function IAr() {
  return i(Pe(), "uploads")
}

function Rzn() {
  return [IAr(), VGe() ?? Lon()]
}

function Azn(t, e) {
  return `${t}-${u(e)}`
}
var s = /^[A-Za-z0-9_-]{8}-/;

function o(t) {
  return iQn(t.replace(/_+$/, ""))
}

function u(t) {
  return o(t) ? t + "_" : t
}

function ZIs(t) {
  let e = t.replace(s, "");
  if (e.endsWith("_") && o(e)) return e.slice(0, -1);
  return e || t
}
var c = 1024;

function eMs(t, e) {
  let n = L1r();
  if (!n.has(t) && n.size >= c) {
    let r = n.keys().next().value;
    if (r !== void 0) n.delete(r)
  }
  n.set(t, e)
}

function srn(t) {
  return L1r().get(t)
}
export {
  EN,
  IAr,
  Rzn,
  Azn,
  ZIs,
  eMs,
  srn
};
