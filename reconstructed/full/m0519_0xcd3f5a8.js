// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  s$
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  f
} from "B:/~BUN/root/chunk-zv3zxqya.js";
import {
  $V
} from "B:/~BUN/root/chunk-5a1m1kxy.js";
import {
  E,
  u
} from "B:/~BUN/root/chunk-n8qdr73v.js";
var o = 60000,
  r = 1800000,
  t = 2592000000,
  i = f(() => u({
    recurringFrac: E().min(0).max(1),
    recurringCapMs: E().int().min(0).max(r),
    oneShotMaxMs: E().int().min(0).max(r),
    oneShotFloorMs: E().int().min(0).max(r),
    oneShotMinuteMod: E().int().min(1).max(60),
    recurringMaxAgeMs: E().int().min(0).max(t).default($V.recurringMaxAgeMs),
    cacheLeadMs: E().int().min(0).max(60000).default($V.cacheLeadMs)
  }).refine((n) => n.oneShotFloorMs <= n.oneShotMaxMs));

function Jbe() {
  let n = s$("tengu_kairos_cron_config", $V, o),
    e = i().safeParse(n);
  return e.success ? e.data : $V
}
export {
  Jbe
};
