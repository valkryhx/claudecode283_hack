// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import "B:/~BUN/root/chunk-rwkgcmm8.js";
import "B:/~BUN/root/chunk-9ka04m0y.js";
import "B:/~BUN/root/chunk-rpez7z7a.js";
import "B:/~BUN/root/chunk-hg8ngszx.js";
import "B:/~BUN/root/chunk-jthpk6wv.js";
import "B:/~BUN/root/chunk-3aez4b53.js";
import "B:/~BUN/root/chunk-89mss1tj.js";
import "B:/~BUN/root/chunk-4bx17ygx.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import "B:/~BUN/root/chunk-fbyz9h0p.js";
import "B:/~BUN/root/chunk-xf0m410v.js";
import "B:/~BUN/root/chunk-nggrknsv.js";
import "B:/~BUN/root/chunk-psh1mp8h.js";
import "B:/~BUN/root/chunk-yt0knyw7.js";
import "B:/~BUN/root/chunk-jpdys232.js";
import "B:/~BUN/root/chunk-c09hf5e4.js";
import "B:/~BUN/root/chunk-je1b1drr.js";
import "B:/~BUN/root/chunk-d8fk23v1.js";
import "B:/~BUN/root/chunk-gyr2a6wz.js";
import { bo } from "B:/~BUN/root/chunk-wje8pvrc.js";
import "B:/~BUN/root/chunk-1kfn24jp.js";
import "B:/~BUN/root/chunk-kzgf20y6.js";
import "B:/~BUN/root/chunk-nxwmyxnk.js";
import "B:/~BUN/root/chunk-rvc0n7zm.js";
import "B:/~BUN/root/chunk-j704adqd.js";
import "B:/~BUN/root/chunk-ek28wssa.js";
import "B:/~BUN/root/chunk-4bgg5sdy.js";
import "B:/~BUN/root/chunk-xrp58hm9.js";
import { XXr } from "B:/~BUN/root/chunk-yqqbj631.js";
import "B:/~BUN/root/chunk-c6mbjdcy.js";
import "B:/~BUN/root/chunk-3rzwkd15.js";
import "B:/~BUN/root/chunk-bp5d1azq.js";
import "B:/~BUN/root/chunk-eya7pdzx.js";
import { basename as l } from "path";
async function x(r, e) {
  let o = await XXr(),
    a = bo(e.session);
  if (!o.success) {
    if (a) return t(`heapdump failed: ${o.error}`, {
      level: "error"
    }), {
      type: "text",
      value: "Failed to create heap dump (detail withheld on this connection)"
    };
    return {
      type: "text",
      value: `Failed to create heap dump: ${o.error}`
    };
  }
  let i = a ? l(o.heapPath) : o.heapPath,
    p = a ? l(o.diagPath) : o.diagPath;
  if (a) t(`heapdump written: ${o.heapPath} ${o.diagPath}`);
  let h = [i, p, "", d(o.diagnostics)];
  return h.push("", "Open the .heapsnapshot in Chrome DevTools \u2192 Memory \u2192 Load to inspect retainers."), {
    type: "text",
    value: h.join(`
`)
  };
}
function d(r) {
  let {
      memoryUsage: memoryUsage,
      resourceUsage: resourceUsage,
      analysis: analysis
    } = r,
    i = analysis.potentialLeaks.length ? analysis.potentialLeaks.map(item => `  \u26A0 ${item}`).join(`
`) : "  (no obvious leak indicators)",
    p = (n, u) => `RSS ${s(memoryUsage.rss)} (peak ${s(resourceUsage.maxRSS)}) ${n > u ? "\u2014 most memory is JS heap (inspect the .heapsnapshot)" : "\u2014 most memory is native (NOT in the .heapsnapshot)"}`;
  if (r.runtime === "bun") {
    let n = Math.max(0, memoryUsage.rss - memoryUsage.heapUsed);
    return [p(memoryUsage.heapUsed, n), `  JS heap          ${s(memoryUsage.heapUsed).padStart(8)}  in snapshot`, `  strings, buffers ${s(memoryUsage.external).padStart(8)}  part of the JS heap, in snapshot`, `  outside the heap ${s(n).padStart(8)}  not in snapshot (code/JIT/stacks/allocator)`, i].join(`
`);
  }
  let h = memoryUsage.external - memoryUsage.arrayBuffers,
    c = Math.max(0, memoryUsage.rss - memoryUsage.heapTotal - memoryUsage.external);
  return [p(memoryUsage.heapTotal, memoryUsage.external + c), `  JS heap        ${s(memoryUsage.heapTotal).padStart(8)}  in snapshot`, `  array buffers  ${s(memoryUsage.arrayBuffers).padStart(8)}  not in snapshot`, `  other external ${s(h).padStart(8)}  not in snapshot`, `  unaccounted    ${s(c).padStart(8)}  not in snapshot (code/JIT/stacks/allocator)`, i].join(`
`);
}
function s(r) {
  return `${(r / 1073741824).toFixed(2)} GB`;
}
export { x as call };