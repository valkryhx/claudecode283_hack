// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Ze, kp, Bn } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { Ma } from "B:/~BUN/root/chunk-8pmnanyd.js";
import { Et, wn, Er, qk, Ht } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { eM, SC } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { randomUUID as o } from "crypto";
function t(e, r) {
  switch (e) {
    case "pro":
      return "pro";
    case "max":
      switch (r) {
        case "default_claude_max_5x":
          return "max_5x";
        case "default_claude_max_20x":
          return "max_20x";
        default:
          return "max_other";
      }
    default:
      return "other";
  }
}
var value = "You can continue now. Continue the task you were working on when the usage limit was reached; do not repeat work that is already complete.";
function iTt() {
  return Et() && wn()?.billingType !== "usage_based" && Ma() && kp() && !Bn() && !Ht();
}
function Zqe(e) {
  return iTt() && eM(e) && e.rateLimitType === "five_hour";
}
var n = ["five_hour", "seven_day", "seven_day_overage_included", "seven_day_opus", "seven_day_sonnet"];
function qCn(e) {
  return iTt() && eM(e) && e.rateLimitType !== void 0 && n.includes(e.rateLimitType);
}
function eKe() {
  return t(Er(), qk());
}
function uot() {
  SC({
    agentId: Ze(),
    mode: "prompt",
    priority: "later",
    value: value,
    uuid: o(),
    origin: {
      kind: "auto-continuation"
    },
    isMeta: !0,
    skipSlashCommands: !0
  });
}
export { iTt, Zqe, qCn, eKe, uot };