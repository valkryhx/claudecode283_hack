// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  z
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  F,
  ci
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  t,
  _,
  ie
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  x
} from "B:/~BUN/root/chunk-mwfggkjt.js";
import {
  wna
} from "B:/~BUN/root/chunk-5xx1vfdh.js";
import {
  BLs
} from "B:/~BUN/root/chunk-qfq22jk9.js";
import {
  Bp
} from "B:/~BUN/root/chunk-bvb659eh.js";
import {
  writeFileSync as k
} from "fs";
import {
  readdir as U,
  readFile as R,
  writeFile as P
} from "fs/promises";
import {
  join as H
} from "path";
import {
  getHeapSpaceStatistics as C,
  getHeapStatistics as D
} from "v8";
async function M(r) {
  let e = process.memoryUsage(),
    s = D(),
    n = process.resourceUsage(),
    u = process.uptime(),
    d;
  try {
    d = C()
  } catch {}
  let i = process._getActiveHandles().length,
    c = process._getActiveRequests().length,
    m;
  try {
    m = (await U("/proc/self/fd")).length
  } catch {}
  let f;
  try {
    f = await R("/proc/self/smaps_rollup", "utf8")
  } catch {}
  let b, y, S;
  try {
    let {
      heapStats: p
    } = await import("bun:jsc"), h = p(!0);
    b = h.objectTypeCounts, y = h.protectedObjectTypeCounts, S = h.mimalloc || void 0
  } catch {}
  let w = e.rss - e.heapUsed,
    v = u > 0 ? e.rss / u : 0,
    g = v * 3600 / 1048576,
    o = [];
  if (s.number_of_detached_contexts > 0) o.push(`${s.number_of_detached_contexts} detached context(s) - possible iframe/context leak`);
  if (i > 100) o.push(`${i} active handles - possible timer/socket leak`);
  if (w > e.heapUsed) o.push("Native memory > heap - leak may be in native addons (node-pty, etc.)");
  if (g > 100) o.push(`High memory growth rate: ${g.toFixed(1)} MB/hour`);
  if (m && m > 500) o.push(`${m} open file descriptors - possible file/socket leak`);
  return {
    timestamp: new Date().toISOString(),
    sessionId: z(),
    trigger: r,
    dumpNumber: 0,
    uptimeSeconds: u,
    runtime: Bp() ? "bun" : "node",
    memoryUsage: {
      heapUsed: e.heapUsed,
      heapTotal: e.heapTotal,
      external: e.external,
      arrayBuffers: e.arrayBuffers,
      rss: e.rss
    },
    memoryGrowthRate: {
      bytesPerSecond: v,
      mbPerHour: g
    },
    v8HeapStats: {
      heapSizeLimit: s.heap_size_limit,
      mallocedMemory: s.malloced_memory,
      peakMallocedMemory: s.peak_malloced_memory,
      detachedContexts: s.number_of_detached_contexts,
      nativeContexts: s.number_of_native_contexts
    },
    v8HeapSpaces: d?.map((p) => ({
      name: p.space_name,
      size: p.space_size,
      used: p.space_used_size,
      available: p.space_available_size
    })),
    resourceUsage: {
      maxRSS: n.maxRSS * (x() === "macos" ? 1 : 1024),
      userCPUTime: n.userCPUTime,
      systemCPUTime: n.systemCPUTime
    },
    activeHandles: i,
    activeRequests: c,
    openFileDescriptors: m,
    analysis: {
      potentialLeaks: o,
      recommendation: o.length > 0 ? `WARNING: ${o.length} potential leak indicator(s) found. See potentialLeaks array.` : "No obvious leak indicators. Check heap snapshot for retained objects."
    },
    smapsRollup: f,
    objectTypeCounts: b,
    protectedObjectTypeCounts: y,
    mimalloc: S,
    platform: "win32",
    nodeVersion: process.version,
    ccVersion: {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.319",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-11-05T18:14:18Z",
      GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION
  }
}
async function XVo() {
  if (BLs()) return {
    success: !1,
    error: "heap dumps are unavailable in a launcher-started session"
  };
  try {
    let r = z(),
      e = await M("manual"),
      s = (m) => (m / 1024 / 1024 / 1024).toFixed(3);
    t(`[HeapDump] Memory state:
  heapUsed: ${s(e.memoryUsage.heapUsed)} GB (in snapshot)
  external: ${s(e.memoryUsage.external)} GB (${e.runtime==="bun"?"part of heapUsed, in snapshot":"NOT in snapshot"})
  rss: ${s(e.memoryUsage.rss)} GB (total process)
  ${e.analysis.recommendation}`);
    let n = await wna();
    await ie().mkdir(n);
    let u = `${r}.heapsnapshot`,
      d = `${r}-diagnostics.json`,
      i = H(n, u),
      c = H(n, d);
    return await P(c, _(e, null, 2), {
      mode: 384
    }), t(`[HeapDump] Diagnostics written to ${c}`), await T(i), t(`[HeapDump] Heap dump written to ${i}`), l("tengu_heap_dump", {
      triggerManual: !0,
      triggerAuto15GB: !1,
      dumpNumber: 0,
      success: !0
    }), {
      success: !0,
      heapPath: i,
      diagPath: c,
      diagnostics: e
    }
  } catch (r) {
    let e = F(r);
    if (ci(e)) t(`[HeapDump] Failed to write dump: ${e.message}`, {
      level: "error"
    });
    else a(e);
    return l("tengu_heap_dump", {
      triggerManual: !0,
      triggerAuto15GB: !1,
      dumpNumber: 0,
      success: !1
    }), {
      success: !1,
      error: e.message
    }
  }
}
async function T(r) {
  k(r, Bun.generateHeapSnapshot("v8", "arraybuffer"), {
    mode: 384
  }), Bun.gc(!0)
}
export {
  XVo
};
