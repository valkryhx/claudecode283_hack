// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Y,
  p8n,
  hjt
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  VBo
} from "B:/~BUN/root/chunk-54p0h65d.js";
import {
  Se
} from "B:/~BUN/root/chunk-4p6z9qq1.js";
import {
  join as i
} from "path";

function G3() {
  return hjt() ?? i(hIr(), Y())
}

function hIr() {
  return i(Se(), "uploads")
}

function VCo(t, e) {
  return `${t}-${u(e)}`
}
var s = /^[A-Za-z0-9_-]{8}-/;

function o(t) {
  return VBo(t.replace(/_+$/, ""))
}

function u(t) {
  return o(t) ? t + "_" : t
}

function qCo(t) {
  let e = t.replace(s, "");
  if (e.endsWith("_") && o(e)) return e.slice(0, -1);
  return e || t
}
var c = 1024;

function KCo(t, e) {
  let n = p8n();
  if (!n.has(t) && n.size >= c) {
    let r = n.keys().next().value;
    if (r !== void 0) n.delete(r)
  }
  n.set(t, e)
}

function mMt(t) {
  return p8n().get(t)
}
export {
  G3,
  hIr,
  VCo,
  qCo,
  KCo,
  mMt
};
