// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { F } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { we } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { kgo as maxTools, vgo, Ego } from "B:/~BUN/root/chunk-x6frvp1m.js";
import { G8n, NUo } from "B:/~BUN/root/chunk-rx1j8sk3.js";
import { IEt } from "B:/~BUN/root/chunk-f8k1512b.js";
import { statfs as f } from "fs/promises";
import { availableParallelism as u, totalmem as d } from "os";
var alsoLookFor = ["gcloud", "aws", "az", "gh", "brew", "apt", "sqlite3", "ffmpeg", "rg", "jq"],
  s = 2000,
  l = 2n ** 30n;
function EGr() {
  try {
    return IEt() && G8n("basic") !== "off";
  } catch (error) {
    return a(F(error)), !1;
  }
}
async function Rha(t) {
  try {
    if (!EGr()) return;
    let [e, r] = await Promise.all([NUo({
      includeMcpServers: !1,
      signal: AbortSignal.timeout(s),
      alsoLookFor: alsoLookFor,
      maxTools: maxTools
    }), we(f(t, {
      bigint: !0
    }), s).catch(() => {
      return;
    })]);
    if (e === void 0) {
      m("remote_tools_host_inventory", "unsupported_platform");
      return;
    }
    let n = r === void 0 ? -1n : r.bavail * r.bsize;
    if (!e.complete) c("remote_tools_host_inventory", "deadline");else if (n < 0n) c("remote_tools_host_inventory", "disk_unread");else g("remote_tools_host_inventory");
    let i = {
        ...(!e.complete && {
          incomplete: !0
        }),
        cpus: u(),
        memory_gb: Math.round(d() / Number(l)),
        ...(n >= 0n && {
          disk_free_gb: Math.min(Number(n / l), vgo)
        })
      },
      tools = e.profile.tools;
    while (tools.length > 0 && _({
      tools: tools,
      ...i
    }).length > Ego) tools = tools.slice(0, -1);
    return {
      tools: tools,
      ...i
    };
  } catch (error) {
    a(F(error)), m("remote_tools_host_inventory", "error");
    return;
  }
}
export { EGr, Rha };