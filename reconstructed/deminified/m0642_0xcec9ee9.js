// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Ne } from "B:/~BUN/root/chunk-ekrhn4q1.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { T1t } from "B:/~BUN/root/chunk-0fnha6bz.js";
import { Id, n_ } from "B:/~BUN/root/chunk-aw2zngte.js";
import { M7r } from "B:/~BUN/root/chunk-jw9a7s4e.js";
import { Thn } from "B:/~BUN/root/chunk-q42dvn02.js";
import { openSync as d } from "fs";
import { ReadStream as s } from "tty";
class o {
  override = null;
  get() {
    if (this.override !== null) return this.override;
    if (process.stdin.isTTY) {
      this.override = void 0;
      return;
    }
    if (Ne(!1)) {
      this.override = void 0;
      return;
    }
    if (Thn() === "mcp") {
      this.override = void 0;
      return;
    }
    this.override = void 0;
    return;
  }
  reset() {
    this.override = null;
  }
}
var f = new o();
function oO(exitOnCtrlC = !1) {
  M7r();
  let e = f.get(),
    r = {
      exitOnCtrlC: exitOnCtrlC
    };
  if (e) r.stdin = e;
  return r.isScreenReaderEnabled = n_(), r;
}
export { oO };