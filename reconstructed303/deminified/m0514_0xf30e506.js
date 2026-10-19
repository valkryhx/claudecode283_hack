// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { j } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { Y } from "B:/~BUN/root/chunk-89mss1tj.js";
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { vge } from "B:/~BUN/root/chunk-hb6x4e3n.js";
class r {
  stampMs = 0;
  detachedSinceLastAttach = !1;
  reset() {
    this.stampMs = 0, this.detachedSinceLastAttach = !1;
  }
}
var s = new z(() => new r());
function a() {
  return s.of(j().host);
}
function p3r(e) {
  let t = a();
  if (e === 0) {
    t.reset();
    return;
  }
  if (t.detachedSinceLastAttach || t.stampMs === 0) t.stampMs = e;
  t.detachedSinceLastAttach = !1;
}
function Ukn() {
  a().detachedSinceLastAttach = !0;
}
function f3r() {
  return a().detachedSinceLastAttach;
}
function YLe() {
  return a().stampMs;
}
function QVt(e) {
  if (!vge()) return !1;
  let {
    detachedSinceLastAttach: detachedSinceLastAttach,
    stampMs: stampMs
  } = a();
  return detachedSinceLastAttach || stampMs !== 0 && e - stampMs < 500;
}
async function Bkn() {
  for (;;) {
    let e = Date.now();
    if (!QVt(e)) return;
    let {
        detachedSinceLastAttach: detachedSinceLastAttach_2,
        stampMs: stampMs_2
      } = a(),
      c = detachedSinceLastAttach_2 || stampMs_2 === 0 ? 500 : stampMs_2 + 500 - e;
    await Y(Math.max(25, c) + 25);
  }
}
export { p3r, Ukn, f3r, YLe, QVt, Bkn };