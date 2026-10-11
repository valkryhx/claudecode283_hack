// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Y } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { te, as } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { b, ce, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { d, O } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { GI } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { UHo } from "B:/~BUN/root/chunk-8hs4bwwk.js";
import { writeFileSync as k } from "fs";
import { readdir as U, readFile as R, writeFile as P } from "fs/promises";
import { join as w } from "path";
import { getHeapSpaceStatistics as C, getHeapStatistics as D } from "v8";
async function M(trigger, dumpNumber = 0) {
  let s = process.memoryUsage(),
    e = D(),
    n = process.resourceUsage(),
    uptimeSeconds = process.uptime(),
    l;
  try {
    l = C();
  } catch {}
  let activeHandles = process._getActiveHandles().length,
    activeRequests = process._getActiveRequests().length,
    openFileDescriptors;
  try {
    openFileDescriptors = (await U("/proc/self/fd")).length;
  } catch {}
  let smapsRollup;
  try {
    smapsRollup = await R("/proc/self/smaps_rollup", "utf8");
  } catch {}
  let objectTypeCounts, protectedObjectTypeCounts, mimalloc;
  try {
    let {
        heapStats: heapStats
      } = await import("bun:jsc"),
      S = heapStats(!0);
    objectTypeCounts = S.objectTypeCounts, protectedObjectTypeCounts = S.protectedObjectTypeCounts, mimalloc = S.mimalloc || void 0;
  } catch {}
  let x = s.rss - s.heapUsed,
    bytesPerSecond = uptimeSeconds > 0 ? s.rss / uptimeSeconds : 0,
    mbPerHour = bytesPerSecond * 3600 / 1048576,
    potentialLeaks = [];
  if (e.number_of_detached_contexts > 0) potentialLeaks.push(`${e.number_of_detached_contexts} detached context(s) - possible iframe/context leak`);
  if (activeHandles > 100) potentialLeaks.push(`${activeHandles} active handles - possible timer/socket leak`);
  if (x > s.heapUsed) potentialLeaks.push("Native memory > heap - leak may be in native addons (node-pty, etc.)");
  if (mbPerHour > 100) potentialLeaks.push(`High memory growth rate: ${mbPerHour.toFixed(1)} MB/hour`);
  if (openFileDescriptors && openFileDescriptors > 500) potentialLeaks.push(`${openFileDescriptors} open file descriptors - possible file/socket leak`);
  return {
    timestamp: new Date().toISOString(),
    sessionId: Y(),
    trigger: trigger,
    dumpNumber: dumpNumber,
    uptimeSeconds: uptimeSeconds,
    runtime: GI() ? "bun" : "node",
    memoryUsage: {
      heapUsed: s.heapUsed,
      heapTotal: s.heapTotal,
      external: s.external,
      arrayBuffers: s.arrayBuffers,
      rss: s.rss
    },
    memoryGrowthRate: {
      bytesPerSecond: bytesPerSecond,
      mbPerHour: mbPerHour
    },
    v8HeapStats: {
      heapSizeLimit: e.heap_size_limit,
      mallocedMemory: e.malloced_memory,
      peakMallocedMemory: e.peak_malloced_memory,
      detachedContexts: e.number_of_detached_contexts,
      nativeContexts: e.number_of_native_contexts
    },
    v8HeapSpaces: l?.map(p => ({
      name: p.space_name,
      size: p.space_size,
      used: p.space_used_size,
      available: p.space_available_size
    })),
    resourceUsage: {
      maxRSS: n.maxRSS * (O() === "macos" ? 1 : 1024),
      userCPUTime: n.userCPUTime,
      systemCPUTime: n.systemCPUTime
    },
    activeHandles: activeHandles,
    activeRequests: activeRequests,
    openFileDescriptors: openFileDescriptors,
    analysis: {
      potentialLeaks: potentialLeaks,
      recommendation: potentialLeaks.length > 0 ? `WARNING: ${potentialLeaks.length} potential leak indicator(s) found. See potentialLeaks array.` : "No obvious leak indicators. Check heap snapshot for retained objects."
    },
    smapsRollup: smapsRollup,
    objectTypeCounts: objectTypeCounts,
    protectedObjectTypeCounts: protectedObjectTypeCounts,
    mimalloc: mimalloc,
    platform: "win32",
    nodeVersion: process.version,
    ccVersion: {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.283",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-09-25T00:44:42Z",
      GIT_SHA: "4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION
  };
}
async function wsr(u = "manual", dumpNumber_2 = 0) {
  try {
    let s = Y(),
      diagnostics = await M(u, dumpNumber_2),
      n = f => (f / 1024 / 1024 / 1024).toFixed(3);
    t(`[HeapDump] Memory state:
  heapUsed: ${n(diagnostics.memoryUsage.heapUsed)} GB (in snapshot)
  external: ${n(diagnostics.memoryUsage.external)} GB (${diagnostics.runtime === "bun" ? "part of heapUsed, in snapshot" : "NOT in snapshot"})
  rss: ${n(diagnostics.memoryUsage.rss)} GB (total process)
  ${diagnostics.analysis.recommendation}`);
    let m = await UHo();
    await ce().mkdir(m);
    let l = dumpNumber_2 > 0 ? `-dump${dumpNumber_2}` : "",
      g = `${s}${l}.heapsnapshot`,
      h = `${s}${l}-diagnostics.json`,
      heapPath = w(m, g),
      diagPath = w(m, h);
    return await P(diagPath, b(diagnostics, null, 2), {
      mode: 384
    }), t(`[HeapDump] Diagnostics written to ${diagPath}`), await T(heapPath), t(`[HeapDump] Heap dump written to ${heapPath}`), i("tengu_heap_dump", {
      triggerManual: !0,
      triggerAuto15GB: !1,
      dumpNumber: dumpNumber_2,
      success: !0
    }), {
      success: !0,
      heapPath: heapPath,
      diagPath: diagPath,
      diagnostics: diagnostics
    };
  } catch (s) {
    let e = te(s);
    if (as(e)) t(`[HeapDump] Failed to write dump: ${e.message}`, {
      level: "error"
    });else d(e);
    return i("tengu_heap_dump", {
      triggerManual: !0,
      triggerAuto15GB: !1,
      dumpNumber: dumpNumber_2,
      success: !1
    }), {
      success: !1,
      error: e.message
    };
  }
}
async function T(u) {
  k(u, Bun.generateHeapSnapshot("v8", "arraybuffer"), {
    mode: 384
  }), Bun.gc(!0);
}
export { wsr };