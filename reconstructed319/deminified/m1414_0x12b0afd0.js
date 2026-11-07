// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { b, f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { B6e, zne, E8, e3r, t3r } from "B:/~BUN/root/chunk-s12bzehs.js";
var $6e = {
    accepted: "Allowed",
    declined: "Not allowed",
    unset: "Not asked yet"
  },
  t = "Turned off by your organization's settings (remoteTools.allowUnattendedServing)",
  o = "Turned off in your user settings (remoteTools.allowUnattendedServing: false in ~/.claude/settings.json) \u2014 remove it there to re-enable";
function DSn() {
  return e3r() === "user" ? o : t;
}
function Yer(e) {
  return zne() !== "unset" || t3r() || e;
}
function Xer() {
  return zne() === "accepted" || t3r();
}
async function Jer(e) {
  if (e === "accepted" && E8()) return "forbidden";
  let n = e === "accepted" ? "accepted" : zne() === "accepted" ? "revoked" : "declined";
  if (!(await B6e(e))) return "not_saved";
  return l("tengu_served_unattended_consent", {
    action: f(n),
    surface: b("cli")
  }), "saved";
}
export { $6e, DSn, Yer, Xer, Jer };