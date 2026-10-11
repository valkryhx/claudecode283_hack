// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Y } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { y, c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { o9, ja, ml, Ir, Mi } from "B:/~BUN/root/chunk-9sy3w2pa.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { _ } from "B:/~BUN/root/chunk-51n463p1.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { vt, qte } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { Kn } from "B:/~BUN/root/chunk-3jyp964r.js";
import { _e } from "B:/~BUN/root/chunk-batgyebn.js";
function s() {
  return a.CLAUDE_JOB_DIR;
}
async function gKt(n, e) {
  i("tengu_bg_agent_action", {
    action: y("stop"),
    source: c(n),
    jobSessionId: _e(Y())
  });
  let o = s();
  if (vt() && o) {
    let updatedAt = new Date().toISOString(),
      t = await Ir(o, e);
    if (t && !Mi(t)) await ja(o, {
      ...t,
      state: "stopped",
      detail: "stopped from session",
      tempo: "idle",
      needs: void 0,
      block: void 0,
      inFlight: void 0,
      updatedAt: updatedAt,
      firstTerminalAt: t.firstTerminalAt ?? updatedAt
    }, e).catch(ml);
    if (qte()) process.stdout.write(o9("Session stopped."));
  }
  return _("job_stop_self"), Kn(0, "prompt_input_exit", {
    suppressResumeHint: !0
  });
}
export { gKt };