// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { H } from "B:/~BUN/root/chunk-3aez4b53.js";
import { je } from "B:/~BUN/root/chunk-89mss1tj.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { _ } from "B:/~BUN/root/chunk-6za2ez23.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { KPr as maxTools, YPr, XPr } from "B:/~BUN/root/chunk-hkc0g0wr.js";
import { wwn, FKr } from "B:/~BUN/root/chunk-pk8nr568.js";
import { hnt } from "B:/~BUN/root/chunk-j0k1zzpk.js";
import { statfs as f } from "fs/promises";
import { availableParallelism as u, totalmem as d } from "os";
var alsoLookFor = ["gcloud", "aws", "az", "gh", "brew", "apt", "sqlite3", "ffmpeg", "rg", "jq"],
  s = 2000,
  a = 2n ** 30n;
function Gtr() {
  try {
    return hnt() && wwn("basic") !== "off";
  } catch (error) {
    return l(H(error)), !1;
  }
}
async function nti(t) {
  try {
    if (!Gtr()) return;
    let [e, r] = await Promise.all([FKr({
      includeMcpServers: !1,
      signal: AbortSignal.timeout(s),
      alsoLookFor: alsoLookFor,
      maxTools: maxTools
    }), je(f(t, {
      bigint: !0
    }), s).catch(() => {
      return;
    })]);
    if (e === void 0) {
      m("remote_tools_host_inventory", "unsupported_platform");
      return;
    }
    let n = r === void 0 ? -1n : r.bavail * r.bsize;
    if (!e.complete) p("remote_tools_host_inventory", "deadline");else if (n < 0n) p("remote_tools_host_inventory", "disk_unread");else g("remote_tools_host_inventory");
    let i = {
        ...(!e.complete && {
          incomplete: !0
        }),
        cpus: u(),
        memory_gb: Math.round(d() / Number(a)),
        ...(n >= 0n && {
          disk_free_gb: Math.min(Number(n / a), YPr)
        })
      },
      tools = e.profile.tools;
    while (tools.length > 0 && _({
      tools: tools,
      ...i
    }).length > XPr) tools = tools.slice(0, -1);
    return {
      tools: tools,
      ...i
    };
  } catch (error) {
    l(H(error)), m("remote_tools_host_inventory", "error");
    return;
  }
}
export { Gtr, nti };