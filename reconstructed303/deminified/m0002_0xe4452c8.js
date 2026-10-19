// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { realpathSync as o } from "fs";
import { cwd as c } from "process";
function t(n) {
  return n;
}
function cqo(n) {
  if (n === "/") return n;
  return o(n);
}
function uqo() {
  let n = "";
  if (typeof process < "u" && typeof process.cwd === "function" && typeof o === "function") try {
    let e = c();
    try {
      n = t(cqo(e));
    } catch {
      n = t(e);
    }
  } catch {}
  return n;
}
var nQn = uqo(),
  Wjr = (() => {
    if (typeof process > "u" || typeof process.cwd !== "function") return null;
    try {
      return process.cwd();
    } catch {
      return null;
    }
  })();
function ESt() {
  if (Wjr === null) return null;
  let CLAUDE_CODE_SESSION_KIND = process.env.CLAUDE_CODE_SESSION_KIND;
  return CLAUDE_CODE_SESSION_KIND !== void 0 && String(CLAUDE_CODE_SESSION_KIND).trim() === "bg" ? null : Wjr;
}
var r;
function W() {
  return r === !0;
}
function u3s(n) {
  let e = n === !0;
  if (r === void 0) return r = e, "pinned";
  return r === e ? "unchanged" : "conflict";
}
export { cqo, uqo, nQn, Wjr, ESt, W, u3s };