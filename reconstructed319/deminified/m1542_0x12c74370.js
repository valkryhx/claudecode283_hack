// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { hs, OO } from "B:/~BUN/root/chunk-zn7b14jn.js";
import { Hp } from "B:/~BUN/root/chunk-65j2302z.js";
import { Fn } from "B:/~BUN/root/chunk-8f4z6bdn.js";
import { qBe } from "B:/~BUN/root/chunk-xyq50ms8.js";
import { mSr } from "B:/~BUN/root/chunk-f25379tv.js";
class r {
  reader = void 0;
  register(e) {
    this.reader = e;
  }
  read() {
    return this.reader?.() ?? !1;
  }
}
var o = new r();
function R3o(e) {
  o.register(e);
}
function yat() {
  let e = OO("allow_plugin_skill_search");
  if (e === "org_denied" || e === "latched" || e === "unregistered" || e !== null && hs("hipaa")) return !1;
  if (qBe()) return !0;
  return Hp() && Fn() && o.read();
}
function d_a(e) {
  if (!mSr.includes(e)) return !0;
  return yat();
}
export { R3o, yat, d_a };