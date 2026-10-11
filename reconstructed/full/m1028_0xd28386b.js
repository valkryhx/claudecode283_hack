// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  x,
  Uu
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  jd,
  ts,
  k6,
  UDr
} from "B:/~BUN/root/chunk-f6h9k5ss.js";
var o = "tengu_violin_soundpost";
async function Rwt() {
  try {
    return await jd() && await Uu(o)
  } catch {
    return !1
  }
}
async function xeo() {
  if (await Rwt()) return "on";
  if (k6() || UDr(o)) return "switched_off";
  throw Error("attach sync flag unknown just now")
}

function JWe() {
  try {
    return ts() && x(o, !1)
  } catch {
    return !1
  }
}
export {
  Rwt,
  xeo,
  JWe
};
