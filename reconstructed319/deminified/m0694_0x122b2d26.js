// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { H } from "B:/~BUN/root/chunk-game8aqv.js";
import { J } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { qRe } from "B:/~BUN/root/chunk-1ks9vs37.js";
class r {
  stampMs = 0;
  detachedSinceLastAttach = !1;
  reset() {
    this.stampMs = 0, this.detachedSinceLastAttach = !1;
  }
}
var s = new W(() => new r());
function a() {
  return s.of(H().host);
}
function ojo(e) {
  let t = a();
  if (e === 0) {
    t.reset();
    return;
  }
  if (t.detachedSinceLastAttach || t.stampMs === 0) t.stampMs = e;
  t.detachedSinceLastAttach = !1;
}
function mXn() {
  a().detachedSinceLastAttach = !0;
}
function sjo() {
  return a().detachedSinceLastAttach;
}
function KYe() {
  return a().stampMs;
}
function Kgn(e) {
  if (!qRe()) return !1;
  let {
    detachedSinceLastAttach: detachedSinceLastAttach,
    stampMs: stampMs
  } = a();
  return detachedSinceLastAttach || stampMs !== 0 && e - stampMs < 500;
}
async function hXn() {
  for (;;) {
    let e = Date.now();
    if (!Kgn(e)) return;
    let {
        detachedSinceLastAttach: detachedSinceLastAttach_2,
        stampMs: stampMs_2
      } = a(),
      c = detachedSinceLastAttach_2 || stampMs_2 === 0 ? 500 : stampMs_2 + 500 - e;
    await J(Math.max(25, c) + 25);
  }
}
export { ojo, mXn, sjo, KYe, Kgn, hXn };