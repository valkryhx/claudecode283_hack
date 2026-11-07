// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  st,
  Ml,
  xn
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  us
} from "B:/~BUN/root/chunk-8f4z6bdn.js";
import {
  Rt,
  hn,
  dr,
  Yk,
  Gt
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  JC,
  GT
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  fQn
} from "B:/~BUN/root/chunk-dg7e1dk6.js";
import {
  randomUUID as t
} from "crypto";
var o = "You can continue now. Continue the task you were working on when the usage limit was reached; do not repeat work that is already complete.";

function $he() {
  return Rt() && hn()?.billingType !== "usage_based" && us() && Ml() && !xn() && !Gt()
}

function wit(e) {
  return $he() && JC(e) && e.rateLimitType === "five_hour"
}
var i = ["five_hour", "seven_day", "seven_day_overage_included", "seven_day_opus", "seven_day_sonnet"];

function J_n(e) {
  return $he() && JC(e) && e.rateLimitType !== void 0 && i.includes(e.rateLimitType)
}

function COe() {
  return fQn(dr(), Yk())
}

function rCt() {
  GT({
    agentId: st(),
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
  $he,
  wit,
  J_n,
  COe,
  rCt
};
