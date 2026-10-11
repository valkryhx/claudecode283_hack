// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { realpathSync as r } from "fs";
import { cwd as u } from "process";
function o(n) {
  return n;
}
function dKr() {
  let n = "";
  if (typeof process < "u" && typeof process.cwd === "function" && typeof r === "function") try {
    let e = u();
    try {
      n = o(r(e));
    } catch {
      n = o(e);
    }
  } catch {}
  return n;
}
var HBo = dKr(),
  c = (() => {
    if (typeof process > "u" || typeof process.cwd !== "function") return null;
    try {
      return process.cwd();
    } catch {
      return null;
    }
  })();
function N9e() {
  if (c === null) return null;
  let CLAUDE_CODE_SESSION_KIND = process.env.CLAUDE_CODE_SESSION_KIND;
  return CLAUDE_CODE_SESSION_KIND !== void 0 && String(CLAUDE_CODE_SESSION_KIND).trim() === "bg" ? null : c;
}
var t;
function H() {
  return t === !0;
}
function FBo(n) {
  let e = n === !0;
  if (t === void 0) return t = e, "pinned";
  return t === e ? "unchanged" : "conflict";
}
export { dKr, HBo, N9e, H, FBo };