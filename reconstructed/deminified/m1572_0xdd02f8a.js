// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import "B:/~BUN/root/chunk-bvn0mpsk.js";
import "B:/~BUN/root/chunk-ekrhn4q1.js";
import "B:/~BUN/root/chunk-4rk7cwxz.js";
import "B:/~BUN/root/chunk-dkxhwhft.js";
import "B:/~BUN/root/chunk-kks4mj3w.js";
import "B:/~BUN/root/chunk-bgthmgyc.js";
import "B:/~BUN/root/chunk-17wqwt36.js";
import "B:/~BUN/root/chunk-54p0h65d.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import "B:/~BUN/root/chunk-4p6z9qq1.js";
import "B:/~BUN/root/chunk-0fnha6bz.js";
import "B:/~BUN/root/chunk-y04k89s2.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import "B:/~BUN/root/chunk-2swveyqa.js";
import "B:/~BUN/root/chunk-bpp59nyd.js";
import "B:/~BUN/root/chunk-5w2ecytn.js";
import "B:/~BUN/root/chunk-zv3zxqya.js";
import "B:/~BUN/root/chunk-e7p62566.js";
import "B:/~BUN/root/chunk-zv4xh2j0.js";
import "B:/~BUN/root/chunk-06ra9xdn.js";
import { lse } from "B:/~BUN/root/chunk-m24apm1y.js";
import "B:/~BUN/root/chunk-6jwexnnw.js";
import "B:/~BUN/root/chunk-81280fc2.js";
var T = {
  name: "MCP Task",
  type: "mcp_task",
  async kill(a, o, k, l, s) {
    let e = o.get(a),
      n = e?.type === "mcp_task" ? e.sidecarSessionId : void 0,
      p = e?.type === "mcp_task" ? e.sidecarProjectDir : void 0,
      c = e?.type === "mcp_task" ? e.sidecarWrite : void 0;
    if (e?.type === "mcp_task") e.abortController?.abort(), e.driveAbortController?.abort(), e.sep2663Cancel?.();
    let i = !1;
    if (o.update(a, r => {
      if (r.notified || r.status !== "running") return r;
      return i = !0, {
        ...r,
        status: "killed",
        endTime: Date.now(),
        parked: void 0,
        notified: !0
      };
    }), i && e?.type === "mcp_task") try {
      e.onWorkerWakeOutcome?.({
        kind: "stopped"
      });
    } catch (error) {
      t("McpTask.kill: onWorkerWakeOutcome threw, the stop continues"), d(error);
    }
    (async () => {
      await c, await lse(a, s, n, p);
    })().catch(r => t(`McpTask.kill deleteMcpTaskMetadata: ${String(r)}`));
  }
};
export { T as MCP_TASK };