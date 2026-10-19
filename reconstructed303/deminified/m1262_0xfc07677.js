// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Ni, nR } from "B:/~BUN/root/chunk-h9p45fg5.js";
import { ju } from "B:/~BUN/root/chunk-gyr2a6wz.js";
import { Xn } from "B:/~BUN/root/chunk-8pmnanyd.js";
import { yAe } from "B:/~BUN/root/chunk-8ps02etm.js";
import { gzn } from "B:/~BUN/root/chunk-f681cvs0.js";
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
function Wto(e) {
  o.register(e);
}
function i4e() {
  let e = nR("allow_plugin_skill_search");
  if (e === "org_denied" || e === "latched" || e === "unregistered" || e !== null && Ni("hipaa")) return !1;
  if (yAe()) return !0;
  return ju() && Xn() && o.read();
}
function Pri(e) {
  if (!gzn.includes(e)) return !0;
  return i4e();
}
export { Wto, i4e, Pri };