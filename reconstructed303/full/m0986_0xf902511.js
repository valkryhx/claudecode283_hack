// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  ms
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  Y
} from "B:/~BUN/root/chunk-89mss1tj.js";
import {
  z
} from "B:/~BUN/root/chunk-4bx17ygx.js";
async function $K() {
  try {
    let s = t();
    if (s.length > 0) await Promise.race([Promise.allSettled(s), Y(200)]), s.length = 0;
    let [{
      settle1PEventLoggingBeforeExit: e,
      shutdown1PEventLogging: r
    }, {
      shutdownDatadog: n
    }, {
      shutdownErrorTracking: i
    }] = await Promise.all([import("B:/~BUN/root/chunk-2pav46td.js"), import("B:/~BUN/root/chunk-rv1npkee.js"), import("B:/~BUN/root/chunk-xdq7xfs1.js")]), a = e(), l = [r(), n(), i()];
    await Promise.race([Promise.all(l), Y(500)]), await a
  } catch {}
}
class o {
  tasks = []
}
var c = new z(() => new o);

function t() {
  return ms(c).tasks
}

function PPo(s) {
  t().push(s.catch(() => {}))
}
export {
  $K,
  PPo
};
