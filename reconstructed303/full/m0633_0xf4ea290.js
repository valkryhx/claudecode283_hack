// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  c2
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  f
} from "B:/~BUN/root/chunk-frrkt2bs.js";
import {
  Z6
} from "B:/~BUN/root/chunk-89m6ef17.js";
import {
  v,
  u
} from "B:/~BUN/root/chunk-g3snhg6n.js";
var o = 60000,
  r = 1800000,
  t = 2592000000,
  i = f(() => u({
    recurringFrac: v().min(0).max(1),
    recurringCapMs: v().int().min(0).max(r),
    oneShotMaxMs: v().int().min(0).max(r),
    oneShotFloorMs: v().int().min(0).max(r),
    oneShotMinuteMod: v().int().min(1).max(60),
    recurringMaxAgeMs: v().int().min(0).max(t).default(Z6.recurringMaxAgeMs),
    cacheLeadMs: v().int().min(0).max(60000).default(Z6.cacheLeadMs)
  }).refine((n) => n.oneShotFloorMs <= n.oneShotMaxMs));

function kY() {
  let n = c2("tengu_kairos_cron_config", Z6, o),
    e = i().safeParse(n);
  return e.success ? e.data : Z6
}
export {
  kY
};
