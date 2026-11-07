// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { realpathSync as t } from "fs";
import { cwd as e } from "process";
function GIo(n) {
  return n;
}
function $Ks(n) {
  if (n === "/") return n;
  return t(n);
}
function UKs() {
  let n = "";
  if (typeof process < "u" && typeof process.cwd === "function" && typeof t === "function") try {
    let r = e();
    try {
      n = GIo($Ks(r));
    } catch {
      n = GIo(r);
    }
  } catch {}
  return n;
}
var _qn = UKs(),
  E4e = (() => {
    if (typeof process > "u" || typeof process.cwd !== "function") return null;
    try {
      return process.cwd();
    } catch {
      return null;
    }
  })();
function T4e() {
  if (E4e === null) return null;
  let CLAUDE_CODE_SESSION_KIND = process.env.CLAUDE_CODE_SESSION_KIND;
  return CLAUDE_CODE_SESSION_KIND !== void 0 && String(CLAUDE_CODE_SESSION_KIND).trim() === "bg" ? null : E4e;
}
export { GIo, $Ks, UKs, _qn, E4e, T4e };