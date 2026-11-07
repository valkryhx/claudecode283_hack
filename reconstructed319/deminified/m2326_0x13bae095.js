// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { z, zcn } from "B:/~BUN/root/chunk-game8aqv.js";
import { b, f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { xye, ic, Td, Fo, ml } from "B:/~BUN/root/chunk-4vcs773m.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { _e } from "B:/~BUN/root/chunk-4vxp7kvb.js";
import { Gt, qRe } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { sr } from "B:/~BUN/root/chunk-27h4st9h.js";
import { iQn } from "B:/~BUN/root/chunk-45bfw8f9.js";
function p() {
  return i.CLAUDE_JOB_DIR;
}
async function sQn(n, e, s) {
  l("tengu_bg_agent_action", {
    action: b("stop"),
    source: f(n),
    jobSessionId: _e(z())
  }), zcn(void 0);
  let o = p();
  if (Gt() && o) {
    let updatedAt = new Date().toISOString(),
      t = await Fo(o, e);
    if (t && !ml(t)) await ic(o, {
      ...t,
      state: "stopped",
      detail: "stopped from session",
      tempo: "idle",
      needs: void 0,
      block: void 0,
      inFlight: void 0,
      updatedAt: updatedAt,
      firstTerminalAt: t.firstTerminalAt ?? updatedAt
    }, e).catch(Td);else await iQn(o, e);
    if (qRe()) process.stdout.write(xye(s ?? "Session stopped."));
  }
  return g("job_stop_self"), sr(0, "prompt_input_exit", {
    suppressResumeHint: !0
  });
}
export { sQn };