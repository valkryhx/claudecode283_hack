// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  K
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  H,
  Ts
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  i
} from "B:/~BUN/root/chunk-1kfn24jp.js";
import {
  _,
  se,
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  I
} from "B:/~BUN/root/chunk-je1b1drr.js";
import {
  pk
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  wYs
} from "B:/~BUN/root/chunk-xrp58hm9.js";
import {
  writeFileSync as U
} from "fs";
import {
  readdir as R,
  readFile as P,
  writeFile as C
} from "fs/promises";
import {
  join as x
} from "path";
import {
  getHeapSpaceStatistics as D,
  getHeapStatistics as M
} from "v8";
async function T(u, o = 0) {
  let s = process.memoryUsage(),
    e = M(),
    n = process.resourceUsage(),
    m = process.uptime(),
    d;
  try {
    d = D()
  } catch {}
  let g = process._getActiveHandles().length,
    h = process._getActiveRequests().length,
    r;
  try {
    r = (await R("/proc/self/fd")).length
  } catch {}
  let c;
  try {
    c = await P("/proc/self/smaps_rollup", "utf8")
  } catch {}
  let f, S, v;
  try {
    let {
      heapStats: p
    } = await import("bun:jsc"), b = p(!0);
    f = b.objectTypeCounts, S = b.protectedObjectTypeCounts, v = b.mimalloc || void 0
  } catch {}
  let k = s.rss - s.heapUsed,
    w = m > 0 ? s.rss / m : 0,
    y = w * 3600 / 1048576,
    a = [];
  if (e.number_of_detached_contexts > 0) a.push(`${e.number_of_detached_contexts} detached context(s) - possible iframe/context leak`);
  if (g > 100) a.push(`${g} active handles - possible timer/socket leak`);
  if (k > s.heapUsed) a.push("Native memory > heap - leak may be in native addons (node-pty, etc.)");
  if (y > 100) a.push(`High memory growth rate: ${y.toFixed(1)} MB/hour`);
  if (r && r > 500) a.push(`${r} open file descriptors - possible file/socket leak`);
  return {
    timestamp: new Date().toISOString(),
    sessionId: K(),
    trigger: u,
    dumpNumber: o,
    uptimeSeconds: m,
    runtime: pk() ? "bun" : "node",
    memoryUsage: {
      heapUsed: s.heapUsed,
      heapTotal: s.heapTotal,
      external: s.external,
      arrayBuffers: s.arrayBuffers,
      rss: s.rss
    },
    memoryGrowthRate: {
      bytesPerSecond: w,
      mbPerHour: y
    },
    v8HeapStats: {
      heapSizeLimit: e.heap_size_limit,
      mallocedMemory: e.malloced_memory,
      peakMallocedMemory: e.peak_malloced_memory,
      detachedContexts: e.number_of_detached_contexts,
      nativeContexts: e.number_of_native_contexts
    },
    v8HeapSpaces: d?.map((p) => ({
      name: p.space_name,
      size: p.space_size,
      used: p.space_used_size,
      available: p.space_available_size
    })),
    resourceUsage: {
      maxRSS: n.maxRSS * (I() === "macos" ? 1 : 1024),
      userCPUTime: n.userCPUTime,
      systemCPUTime: n.systemCPUTime
    },
    activeHandles: g,
    activeRequests: h,
    openFileDescriptors: r,
    analysis: {
      potentialLeaks: a,
      recommendation: a.length > 0 ? `WARNING: ${a.length} potential leak indicator(s) found. See potentialLeaks array.` : "No obvious leak indicators. Check heap snapshot for retained objects."
    },
    smapsRollup: c,
    objectTypeCounts: f,
    protectedObjectTypeCounts: S,
    mimalloc: v,
    platform: "win32",
    nodeVersion: process.version,
    ccVersion: {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.303",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-18T20:20:57Z",
      GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION
  }
}
async function XXr(u = "manual", o = 0) {
  try {
    let s = K(),
      e = await T(u, o),
      n = (f) => (f / 1024 / 1024 / 1024).toFixed(3);
    t(`[HeapDump] Memory state:
  heapUsed: ${n(e.memoryUsage.heapUsed)} GB (in snapshot)
  external: ${n(e.memoryUsage.external)} GB (${e.runtime==="bun"?"part of heapUsed, in snapshot":"NOT in snapshot"})
  rss: ${n(e.memoryUsage.rss)} GB (total process)
  ${e.analysis.recommendation}`);
    let m = await wYs();
    await se().mkdir(m);
    let d = o > 0 ? `-dump${o}` : "",
      g = `${s}${d}.heapsnapshot`,
      h = `${s}${d}-diagnostics.json`,
      r = x(m, g),
      c = x(m, h);
    return await C(c, _(e, null, 2), {
      mode: 384
    }), t(`[HeapDump] Diagnostics written to ${c}`), await B(r), t(`[HeapDump] Heap dump written to ${r}`), i("tengu_heap_dump", {
      triggerManual: !0,
      triggerAuto15GB: !1,
      dumpNumber: o,
      success: !0
    }), {
      success: !0,
      heapPath: r,
      diagPath: c,
      diagnostics: e
    }
  } catch (s) {
    let e = H(s);
    if (Ts(e)) t(`[HeapDump] Failed to write dump: ${e.message}`, {
      level: "error"
    });
    else l(e);
    return i("tengu_heap_dump", {
      triggerManual: !0,
      triggerAuto15GB: !1,
      dumpNumber: o,
      success: !1
    }), {
      success: !1,
      error: e.message
    }
  }
}
async function B(u) {
  U(u, Bun.generateHeapSnapshot("v8", "arraybuffer"), {
    mode: 384
  }), Bun.gc(!0)
}
export {
  XXr
};
