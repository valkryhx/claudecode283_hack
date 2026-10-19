// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  j
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  z
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  bs
} from "B:/~BUN/root/chunk-gy660jgx.js";
var iKn = "in-process";
class y$s {
  captured = null;
  cliOverride = null;
  setCliOverride(e) {
    this.cliOverride = e
  }
  capture(e) {
    this.captured = e
  }
  replaceWith(e) {
    this.captured = e, this.cliOverride = null
  }
}
var RJs = new z(() => new y$s);

function o() {
  return RJs.of(j().host)
}

function usi(e) {
  o().setCliOverride(e)
}

function dPo() {
  return o().cliOverride
}

function cPo(e) {
  o().replaceWith(e), t(`[TeammateModeSnapshot] CLI override cleared, new mode: ${e}`)
}

function uPo() {
  return o().captured !== null
}

function DIr() {
  let e = o();
  if (e.cliOverride) e.capture(e.cliOverride), t(`[TeammateModeSnapshot] Captured from CLI override: ${e.captured}`);
  else e.capture(bs("teammateMode", iKn).value), t(`[TeammateModeSnapshot] Captured from config: ${e.captured}`)
}

function CFt() {
  let e = o();
  if (e.captured === null) l(Error("getTeammateModeFromSnapshot called before capture - this indicates an initialization bug")), DIr();
  return e.captured ?? iKn
}
export {
  iKn,
  y$s,
  RJs,
  usi,
  dPo,
  cPo,
  uPo,
  DIr,
  CFt
};
