// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { H } from "B:/~BUN/root/chunk-dkxhwhft.js";
import { c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { Ahn, rH } from "B:/~BUN/root/chunk-snmb1kqg.js";
import { Ie } from "B:/~BUN/root/chunk-sd4cj2qx.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { ln, hC } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { x } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { dee } from "B:/~BUN/root/chunk-1mdeqc2r.js";
function Xvt() {
  return hC("feedbackDrafts")[0] ?? "notify";
}
function udr() {
  if (dee() !== null) return !1;
  if (Ahn()) return !1;
  if (rH()) return !1;
  if (Ie() !== "firstParty") return !1;
  let CLAUDE_CODE_SEND_FEEDBACK = a.CLAUDE_CODE_SEND_FEEDBACK;
  if (CLAUDE_CODE_SEND_FEEDBACK === !1) return !1;
  if (CLAUDE_CODE_SEND_FEEDBACK === !0) return x("tengu_juniper_relay", !1);
  return x("tengu_juniper_relay", !1);
}
function AU() {
  return Xvt() !== "off" && udr();
}
function EYt(feedbackDrafts, {
  storageV5: storageV5,
  via: via
}) {
  let n = H() && storageV5 !== void 0 ? ln("userSettings", {
    feedbackDrafts: feedbackDrafts
  }, void 0, storageV5) : ln("userSettings", {
    feedbackDrafts: feedbackDrafts
  });
  return i("tengu_feedback_drafts_setting_changed", {
    value: c(feedbackDrafts),
    via: c(via)
  }), n;
}
export { Xvt, udr, AU, EYt };