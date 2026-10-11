// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  qe,
  yu,
  Yn
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  $l
} from "B:/~BUN/root/chunk-sd4cj2qx.js";
import {
  pt,
  An,
  nr,
  Bk,
  vt
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  yk
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  SG
} from "B:/~BUN/root/chunk-zw2hnzqr.js";
import {
  randomUUID as t
} from "crypto";
var o = "You can continue now. Continue the task you were working on when the usage limit was reached; do not repeat work that is already complete.";

function k7e() {
  return pt() && An()?.billingType !== "usage_based" && $l() && yu() && !Yn() && !vt()
}

function r7(e) {
  return k7e() && SG(e) && e.rateLimitType === "five_hour"
}
var r = ["five_hour", "seven_day", "seven_day_overage_included", "seven_day_opus", "seven_day_sonnet"];

function qKt(e) {
  return k7e() && SG(e) && e.rateLimitType !== void 0 && r.includes(e.rateLimitType)
}

function E7e() {
  switch (nr()) {
    case "pro":
      return "pro";
    case "max":
      switch (Bk()) {
        case "default_claude_max_5x":
          return "max_5x";
        case "default_claude_max_20x":
          return "max_20x";
        default:
          return "max_other"
      }
    default:
      return "other"
  }
}

function DWe() {
  yk({
    agentId: qe(),
    mode: "prompt",
    priority: "later",
    value: o,
    uuid: t(),
    origin: {
      kind: "auto-continuation"
    },
    isMeta: !0,
    skipSlashCommands: !0
  })
}
export {
  k7e,
  r7,
  qKt,
  E7e,
  DWe
};
