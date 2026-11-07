// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  H,
  q
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  f,
  de
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  ee
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  i,
  Ar
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  WKs
} from "B:/~BUN/root/chunk-dxwyqd26.js";
import {
  $na
} from "B:/~BUN/root/chunk-ctmjjbhk.js";
import {
  tn
} from "B:/~BUN/root/chunk-1fg2bpc3.js";
import {
  bqn,
  Sqn
} from "B:/~BUN/root/chunk-k5mszhcg.js";
import {
  V
} from "B:/~BUN/root/chunk-f9dwrymq.js";
import {
  oHt,
  wgt,
  yAs,
  _As,
  Prn
} from "B:/~BUN/root/chunk-z4janqzm.js";
import {
  Ro
} from "B:/~BUN/root/chunk-143z690c.js";
var k = ["runner_prep_total_ms", "runner_prep_git_proxy_config_ms", "runner_prep_reset_remote_ms", "runner_prep_outcome_branch_ms", "runner_prep_repo_settings_ms", "runner_prep_config_seed_ms", "runner_prep_remote_refetch_ms"],
  c = 604800,
  h = {
    git_have_age_s: c,
    git_pack_count: 1e4,
    standby_idle_s: c,
    healthz_claim_visible_ms: 600000
  },
  g = 3600000,
  b = 600000,
  R = new Set(k);

function P(e) {
  return Object.hasOwn(h, e)
}

function w(e) {
  return R.has(e)
}

function T(e) {
  return !1
}

function d(e, t) {
  if (typeof e !== "number" || !Number.isFinite(e)) return;
  let r = Math.round(e);
  return r < 0 ? void 0 : Math.min(r, t)
}

function p(e, t) {
  let r = Object.hasOwn(e, t) ? Reflect.get(e, t) : void 0;
  return typeof r === "object" && r !== null ? r : void 0
}

function v(e) {
  if (typeof e !== "object" || e === null) return;
  let t = {};
  for (let [s, o] of Object.entries(p(e, "fields") ?? {}))
    if (P(s)) {
      let u = d(o, h[s]);
      if (u !== void 0) t[s] = u
    } let r = {};
  for (let [s, o] of Object.entries(p(e, "phases") ?? {}))
    if (w(s)) {
      let u = d(o, g);
      if (u !== void 0) r[s] = u
    } else if (T(s)) {
    let u = d(o, b);
    if (u !== void 0) r[s] = u
  }
  if (Object.keys(t).length === 0 && Object.keys(r).length === 0) return;
  return {
    fields: t,
    phases: r
  }
}
var F = 8192;

function S(e) {
  if (!e || e.length > F) return;
  try {
    return v(ee(e))
  } catch {
    return
  }
}
var M = ["to_spare_loaded", "to_claim", "to_input_ready", "to_first_message", "to_first_turn"],
  C = 10,
  x = {
    atMs: 0,
    cpuMs: 0,
    procStat: {
      minorFaults: 0,
      majorFaults: 0,
      childrenMinorFaults: 0,
      childrenCpuTicks: 0
    },
    storageReadBytes: 0
  };

function E() {
  try {
    if (q()) return;
    let e = process.cpuUsage(),
      t = performance.now(),
      r, s;
    return {
      atMs: t,
      cpuMs: (e.user + e.system) / 1000,
      procStat: r,
      storageReadBytes: s,
      threads: Prn()
    }
  } catch {
    V("error", "startup_process_sample_failed");
    return
  }
}

function _(e, t) {
  return Math.max(0, Math.round(t - e))
}
class m {
  sample;
  threadsAtStart;
  threadsAtClaim;
  ends = {};
  constructor(e = E, t = yAs, r = _As) {
    this.sample = e;
    this.threadsAtStart = t;
    this.threadsAtClaim = r
  }
  end(e) {
    this.ends[e] ??= this.sample()
  }
  stretches() {
    let e = [],
      t = {
        ...x,
        threads: this.threadsAtStart()
      };
    for (let r of M) {
      let s = this.ends[r];
      if (s === void 0 || s.atMs < t.atMs) continue;
      let o = r === "to_claim" ? {
        ...s,
        threads: s.threads ?? this.threadsAtClaim()
      } : s;
      e.push({
        name: r,
        from: t,
        to: o
      }), t = o
    }
    return ["to_input_ready", "to_first_turn"].every((r) => e.some((s) => s.name === r)) ? e : []
  }
  toWire() {
    let e = {};
    for (let {
        name: t,
        from: r,
        to: s
      }
      of this.stretches()) e[t] = {
      cpu_ms: _(r.cpuMs, s.cpuMs),
      wall_ms: Math.max(0, Math.ceil(s.atMs - r.atMs)),
      ...r.procStat && s.procStat && {
        minor_faults: _(r.procStat.minorFaults, s.procStat.minorFaults),
        major_faults: _(r.procStat.majorFaults, s.procStat.majorFaults),
        children_cpu_ms: _(r.procStat.childrenCpuTicks, s.procStat.childrenCpuTicks) * C,
        children_minor_faults: _(r.procStat.childrenMinorFaults, s.procStat.childrenMinorFaults)
      },
      ...r.storageReadBytes !== void 0 && s.storageReadBytes !== void 0 && {
        storage_read_kib: _(r.storageReadBytes / 1024, s.storageReadBytes / 1024)
      }
    };
    return Object.keys(e).length > 0 ? e : void 0
  }
  threadsToWire() {
    let e = {};
    for (let {
        name: t,
        from: r,
        to: s
      }
      of this.stretches()) {
      let o = r.threads && s.threads && wgt(oHt(r.threads, s.threads), r.atMs === 0 ? 1 / 0 : s.atMs - r.atMs);
      if (o !== void 0) e[t] = o
    }
    return Object.keys(e).length > 0 ? e : void 0
  }
}
var A = {
    input_ready_ms: "to_input_ready",
    first_message_read_ms: "to_first_message"
  },
  O = ["spawn_to_exec_ms", "node_boot_ms", "pre_action_ms", "settings_load_ms", "setup_ms", "growthbook_init_ms", "tools_commands_load_ms", "hooks_init_ms", "mcp_connect_ms", "print_import_ms", "headless_prologue_ms", "grove_check_ms", "await_initialize_ms", "init_emit_ms"];
class y {
  phases = {};
  phaseStarts = {};
  warmSpareClaimed = !1;
  hydratePrefetchSettledAt = void 0;
  resumeHydratePrefetch = void 0;
  resumeHydrateOnDiskBytes = void 0;
  resumeHydrateCcrBytes = void 0;
  resumeHydrateCcrEvents = void 0;
  resumeHydrateDeltaEvents = void 0;
  resumeHydrateDeltaFetchAttempted = void 0;
  resumeHydrateAnchorWalkback = void 0;
  resumeTranscriptScan = void 0;
  resumeTranscriptReadAhead = void 0;
  pluginFullLoads = 0;
  userContextBuilds = 0;
  sdkMcpDialRuns = 0;
  sdkMcpServersDialed = 0;
  flagFetchKick = void 0;
  flagFetchKickJudgedAtMs = void 0;
  warmWakeEarlyFetch = void 0;
  kickOnWarmCache = void 0;
  hooksInitSource = void 0;
  hooksInitOrigins = void 0;
  resumeHooksWaitShadow = void 0;
  pluginsSyncRound = void 0;
  processStretches = new m;
  maySendProcessStretches = void 0;
  flagFetchWaitedMs = 0;
  hooksInitWaitGivenUp = !1;
  consumed = !1;
  reported = !1;
  apiRequestSentFromSpawnMs = void 0;
  apiRequestSentFromSpawnConsumed = !1;
  recordPhase(e, t, r) {
    if (e === "first_message_read_ms") WKs();
    if (this.consumed) return;
    if (e === "skills_load_ms" && this.phases[e] !== void 0) return;
    if (e === "hooks_init_ms" && this.hooksInitWaitGivenUp) return;
    if (this.phases[e] = Math.round(t), r !== void 0) this.phaseStarts[e] = Math.round(r);
    let s = A[e];
    if (s !== void 0) this.endProcessStretch(s)
  }
  endProcessStretch(e) {
    if (i.CLAUDE_CODE_REMOTE && !this.consumed) this.processStretches.end(e)
  }
  markSpareLoaded() {
    this.endProcessStretch("to_spare_loaded")
  }
  markTurnBegan(e) {
    this.endProcessStretch("to_first_turn"), this.maySendProcessStretches = e
  }
  recordHooksInitWait(e, t) {
    this.recordPhase("hooks_init_ms", e, t), this.hooksInitWaitGivenUp = !0
  }
  getRecordedPhase(e) {
    return this.phases[e]
  }
  recordSpawnToExec() {
    let e = Number.parseInt(process.env.CCR_SPAWN_TIMESTAMP_MS ?? "", 10);
    if (!Number.isFinite(e)) return;
    this.recordPhase("spawn_to_exec_ms", Date.now() - process.uptime() * 1000 - e, e - performance.timeOrigin)
  }
  markWarmSpareClaimed() {
    this.warmSpareClaimed = !0, this.endProcessStretch("to_claim")
  }
  markFlagFetchKick(e) {
    this.flagFetchKick = e, this.flagFetchKickJudgedAtMs = Math.round(performance.now())
  }
  getFlagFetchKick() {
    return this.flagFetchKick
  }
  markWarmCacheKickAsks(e) {
    this.warmWakeEarlyFetch = e, this.kickOnWarmCache = i.CLAUDE_CODE_GROWTHBOOK_KICK_ON_WARM_CACHE
  }
  markHooksInitSource(e) {
    this.hooksInitSource = e
  }
  noteHooksInitOrigin(e, t, r) {
    if (this.consumed || !i.CLAUDE_CODE_REMOTE && !i.CLAUDE_CODE_EMIT_STARTUP_TIMING) return;
    let s = e();
    this.hooksInitOrigins = {
      ms: {
        ...this.hooksInitOrigins?.ms,
        [s]: Math.max(this.hooksInitOrigins?.ms[s] ?? 0, t)
      },
      maySend: r
    }
  }
  markResumeHooksWaitShadow(e) {
    this.resumeHooksWaitShadow = e
  }
  markPluginsSyncRound(e, t) {
    this.pluginsSyncRound = {
      round: e,
      maySend: t
    }
  }
  noteFlagFetchWait(e) {
    this.flagFetchWaitedMs += e
  }
  getFlagFetchWaitedMs() {
    return this.flagFetchWaitedMs
  }
  noteSdkMcpDial(e) {
    if (e <= 0) return;
    this.sdkMcpDialRuns++, this.sdkMcpServersDialed += e
  }
  notePluginFullLoad() {
    if (this.consumed) return;
    this.pluginFullLoads++
  }
  noteUserContextBuild() {
    if (this.consumed) return;
    this.userContextBuilds++
  }
  wasWarmSpareClaimed() {
    return this.warmSpareClaimed
  }
  markHydratePrefetchSettled() {
    this.hydratePrefetchSettledAt = performance.now()
  }
  markResumeHydratePrefetch(e, t) {
    this.resumeHydratePrefetch = e === null ? "miss" : this.hydratePrefetchSettledAt !== void 0 && this.hydratePrefetchSettledAt < t ? "hit" : "pending"
  }
  markResumeHydrateSkippedAtTip() {
    this.resumeHydratePrefetch = "skipped_at_tip"
  }
  markResumeHydrateDelta(e, t, r, s, o, u) {
    this.resumeHydrateOnDiskBytes = e, this.resumeHydrateCcrBytes = t, this.resumeHydrateCcrEvents = r, this.resumeHydrateDeltaEvents = s, this.resumeHydrateDeltaFetchAttempted = o, this.resumeHydrateAnchorWalkback = u
  }
  markResumeTranscriptScan(e) {
    if (this.resumeTranscriptScan !== void 0) return;
    this.resumeTranscriptScan = e, this.recordPhase("resume_transcript_scan_ms", e.scanMs + (this.resumeTranscriptReadAhead?.durationMs ?? 0), this.resumeTranscriptReadAhead?.startMs ?? e.scanStartMs)
  }
  markResumeTranscriptReadAhead(e, t) {
    let r = this.resumeTranscriptReadAhead;
    this.resumeTranscriptReadAhead = {
      durationMs: e + (r?.durationMs ?? 0),
      startMs: r?.startMs ?? t
    }
  }
  recordFirstMessageReadFromSpawn() {
    let e = Number.parseInt(process.env.CCR_SPAWN_TIMESTAMP_MS ?? "", 10);
    if (!Number.isFinite(e)) return;
    this.recordPhase("first_message_read_from_spawn_ms", Date.now() - e, e - performance.timeOrigin)
  }
  recordInputReadyFromSpawn() {
    let e = Number.parseInt(process.env.CCR_SPAWN_TIMESTAMP_MS ?? "", 10);
    if (!Number.isFinite(e)) return;
    this.recordPhase("input_ready_from_spawn_ms", Date.now() - e, e - performance.timeOrigin)
  }
  consume() {
    if (!i.CLAUDE_CODE_REMOTE && !i.CLAUDE_CODE_EMIT_STARTUP_TIMING) return;
    if (this.consumed || Object.keys(this.phases).length === 0) return;
    this.consumed = !0;
    let e = S(Ar.CCR_RUNNER_STARTUP_TIMING),
      t = !q(),
      r = this.maySendProcessStretches?.() ?? !1;
    return {
      ...e?.fields,
      entrypoint: i.CLAUDE_CODE_ENTRYPOINT ?? "unknown",
      warm_spare_claimed: this.warmSpareClaimed,
      resume_hydrate_prefetch: this.resumeHydratePrefetch,
      resume_hydrate_on_disk_bytes: this.resumeHydrateOnDiskBytes,
      resume_hydrate_ccr_bytes: this.resumeHydrateCcrBytes,
      resume_hydrate_ccr_events: this.resumeHydrateCcrEvents,
      resume_hydrate_delta_events: this.resumeHydrateDeltaEvents,
      resume_hydrate_delta_fetch_attempted: this.resumeHydrateDeltaFetchAttempted,
      resume_hydrate_anchor_walkback: this.resumeHydrateAnchorWalkback,
      resume_transcript_bytes: this.resumeTranscriptScan?.bytes,
      resume_transcript_kept_bytes: this.resumeTranscriptScan?.keptBytes,
      resume_transcript_earlier_metadata_bytes: this.resumeTranscriptScan?.earlierMetadataBytes,
      resume_transcript_boundary: this.resumeTranscriptScan?.boundary,
      resume_transcript_plain_kept_bytes: this.resumeTranscriptScan?.plainKeptBytes,
      resume_transcript_boundary_other_key_order: this.resumeTranscriptScan?.boundaryOtherKeyOrder,
      resume_transcript_keeping_boundaries: this.resumeTranscriptScan?.keepingBoundaries,
      resume_transcript_reach_bytes: this.resumeTranscriptScan?.reachBytes,
      resume_transcript_backfilled_all: this.resumeTranscriptScan?.backfilledAll,
      resume_transcript_rows: this.resumeTranscriptScan?.rows,
      resume_transcript_rows_other_key_order: this.resumeTranscriptScan?.rowsOtherKeyOrder,
      resume_transcript_rows_unindexed: this.resumeTranscriptScan?.rowsUnindexed,
      resume_transcript_listed_rows: this.resumeTranscriptScan?.listedRows,
      resume_transcript_listed_rows_bytes: this.resumeTranscriptScan?.listedRowsBytes,
      resume_transcript_listed_rows_other_key_order: this.resumeTranscriptScan?.listedRowsOtherKeyOrder,
      resume_transcript_listed_span_bytes: this.resumeTranscriptScan?.listedSpanBytes,
      resume_transcript_straggler_ancestors: this.resumeTranscriptScan?.stragglerAncestors,
      resume_transcript_parents_not_found: this.resumeTranscriptScan?.parentsNotFound,
      resume_transcript_list_unused: this.resumeTranscriptScan?.listUnused,
      resume_transcript_tool_copy_chars: this.resumeTranscriptScan?.toolCopyChars,
      resume_transcript_scanned_bytes: this.resumeTranscriptScan?.scannedBytes,
      resume_transcript_head: this.resumeTranscriptScan?.head,
      resume_transcript_next_head: this.resumeTranscriptScan?.nextHead,
      resume_transcript_head_rows: this.resumeTranscriptScan?.headRows,
      resume_transcript_head_pieces: this.resumeTranscriptScan?.headPieces,
      delta_reset: Ar.CCR_DELTA_RESET,
      plugin_full_loads: this.pluginFullLoads,
      user_context_builds: this.userContextBuilds,
      sdk_mcp_dial_runs: this.sdkMcpDialRuns,
      sdk_mcp_servers_dialed: this.sdkMcpServersDialed,
      flag_fetch_kick: this.flagFetchKick,
      flag_fetch_kick_judged_at_ms: t ? this.flagFetchKickJudgedAtMs : void 0,
      warm_wake_early_fetch: this.warmWakeEarlyFetch,
      kick_on_warm_cache: this.kickOnWarmCache,
      hooks_init_source: this.hooksInitSource,
      hooks_init_origin_ms: this.hooksInitOrigins?.maySend() ? this.hooksInitOrigins.ms : void 0,
      resume_hooks_wait_shadow: this.resumeHooksWaitShadow,
      plugins_sync_round: this.pluginsSyncRound?.maySend() ? this.pluginsSyncRound.round : void 0,
      process_stretches: r ? this.processStretches.toWire() : void 0,
      process_stretch_threads: r ? this.processStretches.threadsToWire() : void 0,
      ...r && t && {
        process_start_tuning: bqn(),
        process_start_purge_delay_ms: Sqn()
      },
      cli_trial_keys: tn() ? (i.CLAUDE_CODE_CHROME_LATE_MCP_SERVER === !0 ? 2 : 0) + (i.CLAUDE_CODE_SKIP_MCP_DEBUG_LOG_FILES === !0 ? 4 : 0) : void 0,
      phases: {
        ...e?.phases,
        ...t ? this.phases : this.durations()
      },
      ...t && {
        time_origin_ms: performance.timeOrigin,
        phase_start_ms: {
          ...this.phaseStarts
        }
      }
    }
  }
  telemetryFields() {
    if (q()) return;
    if (this.reported || Object.keys(this.phases).length === 0) return;
    this.reported = !0;
    let e = {},
      t = 0;
    for (let s of O) {
      let o = this.phases[s];
      if (o !== void 0) e[s] = o, t += o
    }
    let r = 0;
    for (let s of Object.values(this.phases)) r += s ?? 0;
    return {
      ...e,
      other_ms: r - t,
      phase_count: Object.keys(this.phases).length,
      warm_spare_claimed: this.warmSpareClaimed,
      plugin_full_loads: this.pluginFullLoads,
      user_context_builds: this.userContextBuilds,
      sdk_mcp_dial_runs: this.sdkMcpDialRuns,
      sdk_mcp_servers_dialed: this.sdkMcpServersDialed,
      flag_fetch_kick: de(this.flagFetchKick),
      hooks_init_source: de(this.hooksInitSource),
      resume_hydrate_prefetch: de(this.resumeHydratePrefetch)
    }
  }
  durations() {
    return Ro(this.phases, (e, t) => t !== "spawn_to_exec_ms" && this.phaseStarts[t] !== 0)
  }
  recordApiRequestSentFromSpawn() {
    if (this.apiRequestSentFromSpawnMs !== void 0) return;
    let e = Number.parseInt(process.env.CCR_SPAWN_TIMESTAMP_MS ?? "", 10);
    if (!Number.isFinite(e)) return;
    this.apiRequestSentFromSpawnMs = Date.now() - e
  }
  consumeApiRequestSentFromSpawn() {
    if (this.apiRequestSentFromSpawnConsumed || this.apiRequestSentFromSpawnMs === void 0) return;
    return this.apiRequestSentFromSpawnConsumed = !0, {
      ms: this.apiRequestSentFromSpawnMs,
      warmSpareClaimed: this.warmSpareClaimed,
      flagFetchKick: this.flagFetchKick,
      timeOriginMs: q() ? void 0 : performance.timeOrigin
    }
  }
}
var KTs = new W(() => new y);

function n() {
  return KTs.of(H().host)
}

function qr(e, t, r) {
  n().recordPhase(e, t, r)
}

function CVi(e, t) {
  n().recordHooksInitWait(e, t)
}

function QCe(e) {
  return n().getRecordedPhase(e)
}

function RVi() {
  n().recordSpawnToExec()
}

function XRr() {
  n().markWarmSpareClaimed()
}

function AVi() {
  n().markSpareLoaded()
}

function xVi(e) {
  n().markTurnBegan(e)
}

function PVi() {
  n().notePluginFullLoad()
}

function OVi() {
  n().noteUserContextBuild()
}

function IVi() {
  return n().wasWarmSpareClaimed()
}

function MVi(e) {
  n().markFlagFetchKick(e)
}

function DVi() {
  return n().getFlagFetchKick()
}

function LVi(e) {
  n().markWarmCacheKickAsks(e)
}

function NVi(e) {
  n().markHooksInitSource(e)
}

function FVi(e, t, r) {
  try {
    n().noteHooksInitOrigin(e, t, r)
  } catch (s) {
    a(Error("SessionStart hook origin not recorded", {
      cause: s
    }))
  }
}

function HVi(e) {
  n().markResumeHooksWaitShadow(e)
}

function $Vi(e) {
  n().noteFlagFetchWait(e)
}

function UVi() {
  return n().getFlagFetchWaitedMs()
}

function BVi(e) {
  n().noteSdkMcpDial(e)
}

function jVi() {
  n().markHydratePrefetchSettled()
}

function WVi(e, t) {
  n().markResumeHydratePrefetch(e, t)
}

function zVi() {
  n().markResumeHydrateSkippedAtTip()
}

function GVi(e) {
  n().markResumeTranscriptScan(e)
}

function Jyo(e, t) {
  n().markResumeTranscriptReadAhead(e, t)
}

function VVi(e, t, r, s, o, u) {
  n().markResumeHydrateDelta(e, t, r, s, o, u)
}

function KVi() {
  n().recordFirstMessageReadFromSpawn()
}

function qVi() {
  n().recordInputReadyFromSpawn()
}

function YVi() {
  return n().consume()
}

function JRr(e) {
  if (!$na()) return;
  let t = n().telemetryFields();
  if (t === void 0) return;
  l("tengu_startup_timing", {
    ...t,
    site: f(e)
  })
}

function XVi() {
  n().recordApiRequestSentFromSpawn()
}

function JVi() {
  return n().consumeApiRequestSentFromSpawn()
}
export {
  KTs,
  qr,
  CVi,
  QCe,
  RVi,
  XRr,
  AVi,
  xVi,
  PVi,
  OVi,
  IVi,
  MVi,
  DVi,
  LVi,
  NVi,
  FVi,
  HVi,
  $Vi,
  UVi,
  BVi,
  jVi,
  WVi,
  zVi,
  GVi,
  Jyo,
  VVi,
  KVi,
  qVi,
  YVi,
  JRr,
  XVi,
  JVi
};
