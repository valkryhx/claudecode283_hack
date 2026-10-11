// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Uc, Bq } from "B:/~BUN/root/chunk-4h4gje25.js";
import { hu } from "B:/~BUN/root/chunk-snmb1kqg.js";
import { zn } from "B:/~BUN/root/chunk-sd4cj2qx.js";
import { Ppe } from "B:/~BUN/root/chunk-z99kj6de.js";
import { kin } from "B:/~BUN/root/chunk-7qfbt6jm.js";
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
function fur(e) {
  o.register(e);
}
function YOe() {
  let e = Bq("allow_plugin_skill_search");
  if (e === "org_denied" || e === "latched" || e === "unregistered" || e !== null && Uc("hipaa")) return !1;
  if (Ppe()) return !0;
  return hu() && zn() && o.read();
}
function n4o(e) {
  if (!kin.includes(e)) return !0;
  return YOe();
}
export { fur, YOe, n4o };