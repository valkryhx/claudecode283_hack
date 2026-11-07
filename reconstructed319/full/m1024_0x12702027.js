// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  H
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  Ei
} from "B:/~BUN/root/chunk-sgy380eg.js";
var Uvr = "in-process";
class i1i {
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
var Rca = new W(() => new i1i);

function o() {
  return Rca.of(H().host)
}

function LSa(e) {
  o().setCliOverride(e)
}

function tws() {
  return o().cliOverride
}

function nws(e) {
  o().replaceWith(e), t(`[TeammateModeSnapshot] CLI override cleared, new mode: ${e}`)
}

function rws() {
  return o().captured !== null
}

function omo() {
  let e = o();
  if (e.cliOverride) e.capture(e.cliOverride), t(`[TeammateModeSnapshot] Captured from CLI override: ${e.captured}`);
  else e.capture(Ei("teammateMode", Uvr).value), t(`[TeammateModeSnapshot] Captured from config: ${e.captured}`)
}

function cen() {
  let e = o();
  if (e.captured === null) a(Error("getTeammateModeFromSnapshot called before capture - this indicates an initialization bug")), omo();
  return e.captured ?? Uvr
}
export {
  Uvr,
  i1i,
  Rca,
  LSa,
  tws,
  nws,
  rws,
  omo,
  cen
};
