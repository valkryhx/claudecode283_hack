// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Fe } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { Amn } from "B:/~BUN/root/chunk-5ygt6t95.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { Yhe } from "B:/~BUN/root/chunk-xf0m410v.js";
import { _p, op } from "B:/~BUN/root/chunk-htbmes7q.js";
import { Sns } from "B:/~BUN/root/chunk-trxfp62p.js";
import { openSync as a } from "fs";
import { ReadStream as s } from "tty";
function p() {
  if (process.stdin.isTTY) return {
    kind: "stdin"
  };
  return {
    kind: "unavailable",
    reason: "windows"
  };
}
class o {
  input = null;
  get() {
    return this.input ??= p();
  }
  reset() {
    this.input = null;
  }
}
var vot = new o();
function uC(exitOnCtrlC = !1) {
  Sns();
  let e = vot.get(),
    r = {
      exitOnCtrlC: exitOnCtrlC
    };
  if (e.kind === "override") r.stdin = e.stream;
  return r.isScreenReaderEnabled = op(), r;
}
export { vot, uC };