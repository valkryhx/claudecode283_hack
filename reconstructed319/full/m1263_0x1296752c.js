// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Po
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  J
} from "B:/~BUN/root/chunk-r5zmhp23.js";
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
async function E3() {
  try {
    let s = t();
    if (s.length > 0) await Promise.race([Promise.allSettled(s), J(200)]), s.length = 0;
    let [{
      settle1PEventLoggingBeforeExit: e,
      shutdown1PEventLogging: r
    }, {
      shutdownDatadog: n
    }, {
      shutdownErrorTracking: a
    }] = await Promise.all([import("B:/~BUN/root/chunk-atzsemwq.js"), import("B:/~BUN/root/chunk-52pm1yy5.js"), import("B:/~BUN/root/chunk-0bx16x6b.js")]), i = e(), c = [r(), n(), a()];
    await Promise.race([Promise.all(c), J(500)]), await i
  } catch {}
}
class o {
  tasks = []
}
var u = new W(() => new o);

function t() {
  return Po(u).tasks
}

function PCs(s) {
  t().push(s.catch(() => {}))
}
export {
  E3,
  PCs
};
