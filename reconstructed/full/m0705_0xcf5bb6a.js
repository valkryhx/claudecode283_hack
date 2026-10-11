// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  q,
  j
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  d
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  Mo
} from "B:/~BUN/root/chunk-4py062qg.js";
var _cn = "in-process";
class bPo {
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
var m2o = new q(() => new bPo);

function o() {
  return m2o.of(j().host)
}

function d6o(e) {
  o().setCliOverride(e)
}

function bMr() {
  return o().cliOverride
}

function SMr(e) {
  o().replaceWith(e), t(`[TeammateModeSnapshot] CLI override cleared, new mode: ${e}`)
}

function wMr() {
  return o().captured !== null
}

function Z2n() {
  let e = o();
  if (e.cliOverride) e.capture(e.cliOverride), t(`[TeammateModeSnapshot] Captured from CLI override: ${e.captured}`);
  else e.capture(Mo("teammateMode", _cn).value), t(`[TeammateModeSnapshot] Captured from config: ${e.captured}`)
}

function Dct() {
  let e = o();
  if (e.captured === null) d(Error("getTeammateModeFromSnapshot called before capture - this indicates an initialization bug")), Z2n();
  return e.captured ?? _cn
}
export {
  _cn,
  bPo,
  m2o,
  d6o,
  bMr,
  SMr,
  wMr,
  Z2n,
  Dct
};
