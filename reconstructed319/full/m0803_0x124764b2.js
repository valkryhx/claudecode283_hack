// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  V3
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  DZ
} from "B:/~BUN/root/chunk-0jhmwh3q.js";
import {
  E,
  u
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
var o = 60000,
  r = 1800000,
  t = 2592000000,
  i = p(() => u({
    recurringFrac: E().min(0).max(1),
    recurringCapMs: E().int().min(0).max(r),
    oneShotMaxMs: E().int().min(0).max(r),
    oneShotFloorMs: E().int().min(0).max(r),
    oneShotMinuteMod: E().int().min(1).max(60),
    recurringMaxAgeMs: E().int().min(0).max(t).default(DZ.recurringMaxAgeMs),
    cacheLeadMs: E().int().min(0).max(60000).default(DZ.cacheLeadMs)
  }).refine((n) => n.oneShotFloorMs <= n.oneShotMaxMs));

function nQ() {
  let n = V3("tengu_kairos_cron_config", DZ, o),
    e = i().safeParse(n);
  return e.success ? e.data : DZ
}
export {
  nQ
};
