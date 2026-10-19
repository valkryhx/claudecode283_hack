// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import "B:/~BUN/root/chunk-jthpk6wv.js";
import "B:/~BUN/root/chunk-3aez4b53.js";
import "B:/~BUN/root/chunk-9ka04m0y.js";
import "B:/~BUN/root/chunk-rwkgcmm8.js";
import "B:/~BUN/root/chunk-rpez7z7a.js";
import "B:/~BUN/root/chunk-hg8ngszx.js";
import "B:/~BUN/root/chunk-89mss1tj.js";
import "B:/~BUN/root/chunk-4bx17ygx.js";
import "B:/~BUN/root/chunk-1kfn24jp.js";
import {
  g
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import "B:/~BUN/root/chunk-fbyz9h0p.js";
import "B:/~BUN/root/chunk-xf0m410v.js";
import "B:/~BUN/root/chunk-nggrknsv.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import "B:/~BUN/root/chunk-je1b1drr.js";
import "B:/~BUN/root/chunk-rvc0n7zm.js";
import "B:/~BUN/root/chunk-pjgzz98k.js";
import "B:/~BUN/root/chunk-d9rmnpx3.js";
import "B:/~BUN/root/chunk-frrkt2bs.js";
import "B:/~BUN/root/chunk-nvgn0qsr.js";
import "B:/~BUN/root/chunk-j704adqd.js";
import "B:/~BUN/root/chunk-4bgg5sdy.js";
import "B:/~BUN/root/chunk-9080897a.js";
import {
  TY
} from "B:/~BUN/root/chunk-qxrfwvgh.js";
import "B:/~BUN/root/chunk-5mwc5s4z.js";
import "B:/~BUN/root/chunk-mbp55gyg.js";
import "B:/~BUN/root/chunk-bp5d1azq.js";
var y = {
  name: "MCP Task",
  type: "mcp_task",
  async kill(o, s, d, k, i) {
    let e = s.get(o),
      p = e?.type === "mcp_task" ? e.sidecarSessionId : void 0,
      c = e?.type === "mcp_task" ? e.sidecarProjectDir : void 0,
      n = e?.type === "mcp_task" ? e.sidecarWrite : void 0;
    if (e?.type === "mcp_task") e.abortController?.abort(), e.driveAbortController?.abort(), e.sep2663Cancel?.();
    let a = !1;
    if (s.update(o, (r) => {
        if (r.notified || r.status !== "running") return r;
        return a = !0, {
          ...r,
          status: "killed",
          endTime: Date.now(),
          parked: void 0,
          notified: !0
        }
      }), a && e?.type === "mcp_task") try {
      e.onWorkerWakeOutcome?.({
        kind: "stopped"
      })
    } catch (r) {
      t("McpTask.kill: onWorkerWakeOutcome threw, the stop continues"), l(r)
    }
    if ((async () => {
        await n, await TY(o, i, p, c)
      })().catch((r) => t(`McpTask.kill deleteMcpTaskMetadata: ${String(r)}`)), a && e?.type === "mcp_task" && e.protocol === "sep2663") g("mcp_task_stop")
  }
};
export {
  y as MCP_TASK
};
