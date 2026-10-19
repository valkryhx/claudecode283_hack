// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { K } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { H, Ts } from "B:/~BUN/root/chunk-3aez4b53.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { _, se, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { pk } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { wYs } from "B:/~BUN/root/chunk-xrp58hm9.js";
import { writeFileSync as U } from "fs";
import { readdir as R, readFile as P, writeFile as C } from "fs/promises";
import { join as x } from "path";
import { getHeapSpaceStatistics as D, getHeapStatistics as M } from "v8";
async function T(trigger, dumpNumber = 0) {
  let s = process.memoryUsage(),
    e = M(),
    n = process.resourceUsage(),
    uptimeSeconds = process.uptime(),
    d;
  try {
    d = D();
  } catch {}
  let activeHandles = process._getActiveHandles().length,
    activeRequests = process._getActiveRequests().length,
    openFileDescriptors;
  try {
    openFileDescriptors = (await R("/proc/self/fd")).length;
  } catch {}
  let smapsRollup;
  try {
    smapsRollup = await P("/proc/self/smaps_rollup", "utf8");
  } catch {}
  let objectTypeCounts, protectedObjectTypeCounts, mimalloc;
  try {
    let {
        heapStats: heapStats
      } = await import("bun:jsc"),
      b = heapStats(!0);
    objectTypeCounts = b.objectTypeCounts, protectedObjectTypeCounts = b.protectedObjectTypeCounts, mimalloc = b.mimalloc || void 0;
  } catch {}
  let k = s.rss - s.heapUsed,
    bytesPerSecond = uptimeSeconds > 0 ? s.rss / uptimeSeconds : 0,
    mbPerHour = bytesPerSecond * 3600 / 1048576,
    potentialLeaks = [];
  if (e.number_of_detached_contexts > 0) potentialLeaks.push(`${e.number_of_detached_contexts} detached context(s) - possible iframe/context leak`);
  if (activeHandles > 100) potentialLeaks.push(`${activeHandles} active handles - possible timer/socket leak`);
  if (k > s.heapUsed) potentialLeaks.push("Native memory > heap - leak may be in native addons (node-pty, etc.)");
  if (mbPerHour > 100) potentialLeaks.push(`High memory growth rate: ${mbPerHour.toFixed(1)} MB/hour`);
  if (openFileDescriptors && openFileDescriptors > 500) potentialLeaks.push(`${openFileDescriptors} open file descriptors - possible file/socket leak`);
  return {
    timestamp: new Date().toISOString(),
    sessionId: K(),
    trigger: trigger,
    dumpNumber: dumpNumber,
    uptimeSeconds: uptimeSeconds,
    runtime: pk() ? "bun" : "node",
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
    v8HeapSpaces: d?.map(p => ({
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
      VERSION: "2.1.303",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-18T20:20:57Z",
      GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION
  };
}
async function XXr(u = "manual", dumpNumber_2 = 0) {
  try {
    let s = K(),
      diagnostics = await T(u, dumpNumber_2),
      n = f => (f / 1024 / 1024 / 1024).toFixed(3);
    t(`[HeapDump] Memory state:
  heapUsed: ${n(diagnostics.memoryUsage.heapUsed)} GB (in snapshot)
  external: ${n(diagnostics.memoryUsage.external)} GB (${diagnostics.runtime === "bun" ? "part of heapUsed, in snapshot" : "NOT in snapshot"})
  rss: ${n(diagnostics.memoryUsage.rss)} GB (total process)
  ${diagnostics.analysis.recommendation}`);
    let m = await wYs();
    await se().mkdir(m);
    let d = dumpNumber_2 > 0 ? `-dump${dumpNumber_2}` : "",
      g = `${s}${d}.heapsnapshot`,
      h = `${s}${d}-diagnostics.json`,
      heapPath = x(m, g),
      diagPath = x(m, h);
    return await C(diagPath, _(diagnostics, null, 2), {
      mode: 384
    }), t(`[HeapDump] Diagnostics written to ${diagPath}`), await B(heapPath), t(`[HeapDump] Heap dump written to ${heapPath}`), i("tengu_heap_dump", {
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
    let e = H(s);
    if (Ts(e)) t(`[HeapDump] Failed to write dump: ${e.message}`, {
      level: "error"
    });else l(e);
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
async function B(u) {
  U(u, Bun.generateHeapSnapshot("v8", "arraybuffer"), {
    mode: 384
  }), Bun.gc(!0);
}
export { XXr };