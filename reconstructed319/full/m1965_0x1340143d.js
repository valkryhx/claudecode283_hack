// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import "B:/~BUN/root/chunk-drx9cnw1.js";
import "B:/~BUN/root/chunk-y2g9f85n.js";
import "B:/~BUN/root/chunk-vz9zea4j.js";
import "B:/~BUN/root/chunk-q78ga0zw.js";
import "B:/~BUN/root/chunk-db8vh085.js";
import "B:/~BUN/root/chunk-game8aqv.js";
import "B:/~BUN/root/chunk-wt4dg253.js";
import "B:/~BUN/root/chunk-r5zmhp23.js";
import "B:/~BUN/root/chunk-h4acfc9y.js";
import "B:/~BUN/root/chunk-ppmmt0c3.js";
import "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  g
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import "B:/~BUN/root/chunk-dayhhbfr.js";
import "B:/~BUN/root/chunk-eev762xg.js";
import "B:/~BUN/root/chunk-15vbkr6z.js";
import "B:/~BUN/root/chunk-n8cnxns2.js";
import "B:/~BUN/root/chunk-09sn55yf.js";
import "B:/~BUN/root/chunk-jdtvghyw.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import "B:/~BUN/root/chunk-mwfggkjt.js";
import "B:/~BUN/root/chunk-nsneqfcc.js";
import "B:/~BUN/root/chunk-9jpwd6f1.js";
import "B:/~BUN/root/chunk-myfamxtp.js";
import "B:/~BUN/root/chunk-z6138ats.js";
import "B:/~BUN/root/chunk-1w2vha2y.js";
import "B:/~BUN/root/chunk-bkfncj77.js";
import "B:/~BUN/root/chunk-0w2htvr6.js";
import "B:/~BUN/root/chunk-83p1z1q5.js";
import "B:/~BUN/root/chunk-t4qpmjt5.js";
import "B:/~BUN/root/chunk-ke150ry1.js";
import {
  EQ
} from "B:/~BUN/root/chunk-435hgmb7.js";
import "B:/~BUN/root/chunk-jjjspatt.js";
import "B:/~BUN/root/chunk-h29cx855.js";
import "B:/~BUN/root/chunk-12nc74pv.js";
import "B:/~BUN/root/chunk-9wbhv9z5.js";
var y = {
  name: "MCP Task",
  type: "mcp_task",
  async kill(o, i, k, m, p) {
    let e = i.get(o),
      c = e?.type === "mcp_task" ? e.sidecarSessionId : void 0,
      n = e?.type === "mcp_task" ? e.sidecarProjectDir : void 0,
      d = e?.type === "mcp_task" ? e.sidecarWrite : void 0;
    if (e?.type === "mcp_task") e.abortController?.abort(), e.driveAbortController?.abort(), e.sep2663Cancel?.();
    let s = !1;
    if (i.update(o, (r) => {
        if (r.notified || r.status !== "running") return r;
        return s = !0, {
          ...r,
          status: "killed",
          endTime: Date.now(),
          parked: void 0,
          notified: !0
        }
      }), s && e?.type === "mcp_task") try {
      e.onWorkerWakeOutcome?.({
        kind: "stopped"
      })
    } catch (r) {
      t("McpTask.kill: onWorkerWakeOutcome threw, the stop continues"), a(r)
    }
    if ((async () => {
        await d, await EQ(o, p, c, n)
      })().catch((r) => t(`McpTask.kill deleteMcpTaskMetadata: ${String(r)}`)), s && e?.type === "mcp_task" && e.protocol === "sep2663") g("mcp_task_stop")
  }
};
export {
  y as MCP_TASK
};
