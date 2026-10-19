// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { K, Xjt } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { b, c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { nie, $l, hl, Zr, Ta } from "B:/~BUN/root/chunk-nq10jsxs.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { g } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { Ht, vge } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { Yn } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { jCn } from "B:/~BUN/root/chunk-4dzhj0fy.js";
import { ye } from "B:/~BUN/root/chunk-shj1mfyk.js";
function p() {
  return a.CLAUDE_JOB_DIR;
}
async function BCn(n, e, s) {
  i("tengu_bg_agent_action", {
    action: b("stop"),
    source: c(n),
    jobSessionId: ye(K())
  }), Xjt(void 0);
  let o = p();
  if (Ht() && o) {
    let updatedAt = new Date().toISOString(),
      t = await Zr(o, e);
    if (t && !Ta(t)) await $l(o, {
      ...t,
      state: "stopped",
      detail: "stopped from session",
      tempo: "idle",
      needs: void 0,
      block: void 0,
      inFlight: void 0,
      updatedAt: updatedAt,
      firstTerminalAt: t.firstTerminalAt ?? updatedAt
    }, e).catch(hl);else await jCn(o, e);
    if (vge()) process.stdout.write(nie(s ?? "Session stopped."));
  }
  return g("job_stop_self"), Yn(0, "prompt_input_exit", {
    suppressResumeHint: !0
  });
}
export { BCn };