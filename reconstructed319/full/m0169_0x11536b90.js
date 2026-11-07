// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  he
} from "B:/~BUN/root/chunk-fet34rqr.js";
class i {
  wait = null
}
var n = new i;
class r {
  untilDeadline = null;
  exitBeganAtMs = null
}
var t = he(new r, (e) => {
  e.untilDeadline = null, e.exitBeganAtMs = null
});

function Qfe(e = !0) {
  t.untilDeadline = e && t.untilDeadline !== !1
}

function nTo() {
  return t.untilDeadline === !0
}

function p_t() {
  let e = nTo();
  if (e) t.exitBeganAtMs ??= Date.now();
  return e
}

function xDs() {
  let {
    exitBeganAtMs: e
  } = t;
  return e === null ? 0 : Date.now() - e
}

function PDs(e) {
  let u = n.wait;
  return n.wait = e, u
}
async function Uin(e) {
  try {
    await n.wait?.(e)
  } catch {}
}
export {
  Qfe,
  nTo,
  p_t,
  xDs,
  PDs,
  Uin
};
