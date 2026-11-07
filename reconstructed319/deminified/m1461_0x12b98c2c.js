// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { H } from "B:/~BUN/root/chunk-game8aqv.js";
import { k, K, Ai } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { J } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { Oc } from "B:/~BUN/root/chunk-h4acfc9y.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { f0 } from "B:/~BUN/root/chunk-nsneqfcc.js";
import { V } from "B:/~BUN/root/chunk-f9dwrymq.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { zle, Cat } from "B:/~BUN/root/chunk-f75fgfra.js";
import { SRt } from "B:/~BUN/root/chunk-4kqktdmd.js";
import { jt } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { o, u } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { Qy } from "B:/~BUN/root/chunk-tx4kppkg.js";
import { nt } from "B:/~BUN/root/chunk-tq5dzbq9.js";
import { constants as T, watch as He } from "fs";
import { lstat as ke, mkdir as Se, open as re, readdir as $e, realpath as ee, rename as Ye, stat as qe, unlink as Oe, writeFile as Je } from "fs/promises";
import { posix as Xe } from "path";
var mode = 384;
var {
    basename: basename,
    dirname: dirname,
    isAbsolute: isAbsolute,
    join: join,
    normalize: normalize,
    relative: relative,
    sep: sep
  } = Xe,
  Gwn = "/mnt/user-data/working",
  Tat = "/working",
  Ynr = `${Tat}/${zle} is reserved`,
  qY = 26214400,
  Le = 4096,
  Qe = 4,
  timeout = 30000,
  Q = 5000,
  Ze = 60000,
  Ne = 1000,
  et = 12,
  tt = 120000,
  rt = 5,
  st = 2000,
  ot = 3,
  de = 600000,
  Me = 3600000,
  it = Le;
class Ie {
  seenState = new Map();
  evictedEtag = new Map();
  lastSeenMtime = new Map();
  terminalRejects = new Map();
  sessionFullUntilMs = 0;
  sessionFullSuppressed = 0;
  sessionFullNextOfferMs = 0;
  inFlight = Qy();
  retryableTransportFailures = 0;
  sessionTerminalRejects = 0;
  syncer = null;
  lateStartRoot = null;
  startInFlight = null;
  recordSeen(e, etag, localHash) {
    this.seenState.set(e, {
      etag: etag,
      localHash: localHash
    }), this.evictedEtag.delete(e);
  }
  forgetSeen(e) {
    this.seenState.delete(e), this.evictedEtag.delete(e);
  }
  recordEvictedEtag(e, n) {
    if (n === void 0) return;
    if (this.evictedEtag.delete(e), this.evictedEtag.set(e, n), this.evictedEtag.size > it) {
      let t = this.evictedEtag.keys().next().value;
      if (t !== void 0) this.evictedEtag.delete(t);
    }
  }
  evictDeleted(e) {
    this.recordEvictedEtag(e, this.seenState.get(e)?.etag), this.seenState.delete(e);
  }
  recordSettledMtime(e, n) {
    this.lastSeenMtime.set(e, n);
  }
  reopenMtimeGate(e) {
    this.lastSeenMtime.delete(e);
  }
  recordTerminalReject(e, n = !1) {
    let t = this.terminalRejects.get(e) ?? {
      consecutive: 0,
      latchedUntilMs: 0,
      suppressed: 0,
      heldWhileFull: !1
    };
    if (t.consecutive++, t.heldWhileFull ||= n, this.terminalRejects.set(e, t), t.consecutive >= ot) t.latchedUntilMs = Date.now() + de, m("ccr_synced_file_push", "push_parked_terminal", {
      consecutive_rejects: t.consecutive,
      suppressed_pushes: t.suppressed,
      held_while_full: t.heldWhileFull
    }), t.suppressed = 0, V("warn", "working_push_parked", {
      consecutive: t.consecutive
    });
  }
  resetTerminalRejectStreak(e) {
    let n = this.terminalRejects.get(e);
    if (n === void 0) return;
    if (n.suppressed === 0) {
      this.terminalRejects.delete(e);
      return;
    }
    n.consecutive = 0, n.latchedUntilMs = 0, n.heldWhileFull = !1;
  }
  forgetTerminalReject(e) {
    this.terminalRejects.delete(e);
  }
  sessionFullGate() {
    if (this.sessionFullUntilMs === 0) return "open";
    let e = Date.now();
    if (e < this.sessionFullUntilMs) return this.sessionFullSuppressed++, "skip";
    return this.sessionFullUntilMs = e + de, "probe";
  }
  recordSessionFull() {
    let e = this.sessionFullUntilMs !== 0,
      n = Date.now();
    if (this.sessionFullUntilMs = n + de, this.sessionFullNextOfferMs = n + Me, e && this.sessionFullSuppressed === 0) return;
    m("ccr_synced_file_push", "push_parked_session_full", {
      suppressed_pushes: this.sessionFullSuppressed
    }), V("warn", "working_session_full", {
      suppressed_pushes: this.sessionFullSuppressed
    }), this.sessionFullSuppressed = 0;
  }
  clearSessionFull() {
    this.sessionFullUntilMs = 0;
  }
  sessionFullReprobeNow() {
    if (this.sessionFullUntilMs !== 0) this.sessionFullUntilMs = Date.now();
  }
  releaseSessionFullHold(e) {
    let n = this.terminalRejects.get(e);
    if (n === void 0 || !n.heldWhileFull) return;
    if (this.sessionFullUntilMs !== 0) {
      let t = Date.now();
      if (t < this.sessionFullUntilMs + Q || t < this.sessionFullNextOfferMs || n.latchedUntilMs !== 0) return;
      this.sessionFullNextOfferMs = t + Me;
    }
    n.heldWhileFull = !1, this.resetTerminalRejectStreak(e), this.reopenMtimeGate(e);
  }
  get transportFailureSeq() {
    return this.retryableTransportFailures;
  }
  get sessionTerminalRejectSeq() {
    return this.sessionTerminalRejects;
  }
  noteRetryableTransportFailure() {
    if (this.retryableTransportFailures++, this.sessionFullUntilMs !== 0) this.sessionFullNextOfferMs = Math.max(this.sessionFullNextOfferMs, Date.now() + de);
  }
  noteSessionTerminalReject() {
    this.sessionTerminalRejects++;
  }
  get activeSyncer() {
    return this.syncer;
  }
  syncerStarted(e) {
    this.syncer = e;
  }
  syncerStopped(e) {
    if (this.syncer === e) this.syncer = null;
  }
  armLateStart(e) {
    this.lateStartRoot = e;
  }
  async flush() {
    if (this.syncer === null) {
      if (this.lateStartRoot !== null && this.startInFlight === null) {
        let e = aaa(this.lateStartRoot);
        this.startInFlight = e, e.finally(() => {
          if (this.startInFlight === e) this.startInFlight = null;
        }).catch(() => {});
      }
      await this.startInFlight?.catch(() => {});
    }
    await this.syncer?.flush();
  }
  sessionFullStateForTest() {
    return {
      armed: this.sessionFullUntilMs !== 0,
      suppressed: this.sessionFullSuppressed
    };
  }
  reset() {
    this.seenState.clear(), this.lastSeenMtime.clear(), this.evictedEtag.clear(), this.terminalRejects.clear(), this.sessionFullUntilMs = 0, this.sessionFullSuppressed = 0, this.sessionFullNextOfferMs = 0, this.lateStartRoot = null, this.startInFlight = null;
  }
}
var at = new W(() => new Ie());
function I() {
  return at.of(H().host);
}
function Z(e, n, t) {
  I().recordSeen(e, n, t);
}
function Re(e) {
  return I().seenState.get(e);
}
function Ee(e, n) {
  return I().inFlight.run(e, n);
}
function M5r(e, n) {
  if (!isAbsolute(e)) throw Error("syncDir must be absolute");
  if (n.includes("\x00")) throw Error("path contains null bytes");
  if (!isAbsolute(n)) throw Error("path must be absolute");
  let t = relative(e, normalize(n));
  if (t === "" || t === "." || fe(t)) throw Error("path must be under the working sync dir");
  return t;
}
function fe(e) {
  return isAbsolute(e) || e.split(sep).includes("..");
}
function nve(e) {
  for (let n of e.split(sep)) if (n.startsWith(".") || n.endsWith("~") || n.endsWith(".swp") || n.endsWith(".tmp")) return !0;
  return !1;
}
var xe = "synced_file_limit_exceeded",
  v5o = "synced_file_lane_denied",
  ct = p(() => u({
    error: u({
      reason: o().optional(),
      resource: o().optional()
    })
  })),
  lt = p(() => u({
    error: u({
      type: o().optional(),
      resource_type: o().optional()
    })
  }));
function dt(e, n) {
  if (e === "timeout" || e === "network") return !0;
  if (e === "auth" || e === "other") return !1;
  if (n === void 0) return !0;
  return n === 408 || n === 429 || n >= 500;
}
function Ae(e, n) {
  let t = I(),
    {
      kind: l,
      status: status
    } = Ai(n),
    retryable = dt(l, status);
  if (retryable) t.noteRetryableTransportFailure();else if (l === "auth") t.noteSessionTerminalReject();
  let a = status === 400 || status === 403 ? ut(n) : void 0,
    laneReason = status === 400 ? a?.reason : void 0,
    refusedResource = status === 403 ? a?.resource : void 0;
  return {
    kind: "error",
    message: `${e} failed: ${l}${status ? ` ${status}` : ""}`,
    retryable: retryable,
    errorKind: l,
    status: status,
    ...(laneReason !== void 0 && {
      laneReason: laneReason
    }),
    ...(refusedResource !== void 0 && {
      refusedResource: refusedResource
    })
  };
}
function ut(e) {
  let n = e?.response?.data;
  return ct().safeParse(n).data?.error;
}
function ft(e) {
  if (e.errorKind === "gated") return `put_gated_${(e.gateReason ?? "unknown").replaceAll("-", "_")}`;
  return e.status !== void 0 ? `put_rejected_${e.status}` : `put_rejected_${e.errorKind}`;
}
async function T4t(e, n, if_match_sha256) {
  let l = I();
  try {
    let s = await jt.put("/worker/synced_file", {
      path: `${Tat}/${e}`,
      content: n.toString("base64"),
      ...(if_match_sha256 && {
        if_match_sha256: if_match_sha256
      }),
      worker_epoch: i.CLAUDE_CODE_WORKER_EPOCH ?? 0
    }, {
      auth: "session-jwt",
      host: "ccr-session",
      headers: {
        "anthropic-version": "2023-06-01"
      },
      timeout: timeout,
      validateStatus: d => d >= 200 && d < 300 || d === 409,
      maxBodyLength: Math.ceil(qY * 4 / 3) + 1024
    });
    if (!s.ok) return l.noteSessionTerminalReject(), {
      kind: "error",
      message: `put gated: ${s.reason}`,
      retryable: !1,
      errorKind: "gated",
      status: void 0,
      gateReason: s.reason
    };
    if (s.status === 409) return {
      kind: "conflict"
    };
    return {
      kind: "ok",
      content_sha256: s.data.content_sha256
    };
  } catch (error) {
    return Ae("put", error);
  }
}
async function QBe(e) {
  let n = I();
  try {
    let t = await jt.get(`/worker/synced_file?path=${encodeURIComponent(`${Tat}/${e}`)}`, {
      auth: "session-jwt",
      host: "ccr-session",
      headers: {
        "anthropic-version": "2023-06-01"
      },
      timeout: timeout,
      maxContentLength: Math.ceil(qY * 4 / 3) + 1024,
      validateStatus: l => l >= 200 && l < 300 || l === 404
    });
    if (!t.ok) return n.noteSessionTerminalReject(), {
      kind: "error",
      message: `get gated: ${t.reason}`,
      retryable: !1,
      errorKind: "gated",
      status: void 0,
      gateReason: t.reason
    };
    if (t.status === 404) {
      let l = lt().safeParse(t.data);
      return {
        kind: "not_found",
        ...(l.success && {
          body: l.data.error
        })
      };
    }
    return {
      kind: "ok",
      buf: Buffer.from(t.data.content, "base64"),
      content_sha256: t.data.content_sha256
    };
  } catch (error) {
    return Ae("get", error);
  }
}
async function be(e, n) {
  je(e, n);
  let t = await ee(e),
    l = await ee(dirname(n)),
    s = relative(t, l);
  if (fe(s)) {
    let a = Error("dest parent escaped working sync dir");
    throw a.code = "WORKING_PARENT_ESCAPE", a;
  }
  let d = s === "" ? basename(n) : join(s, basename(n));
  if (nve(d)) {
    let a = Error("dest resolves into an ignored path");
    throw a.code = "WORKING_DEST_IGNORED", a;
  }
  try {
    if ((await ke(n)).isSymbolicLink()) {
      let _ = Error("dest is a symlink");
      throw _.code = "WORKING_DEST_SYMLINK", _;
    }
  } catch (error) {
    if (!K(error)) throw error;
  }
}
function je(e, n) {
  if (Oc(e) || Oc(dirname(n))) {
    let t = Error("a folder on the way to dest has a backslash in its name");
    throw t.code = "WORKING_PATH_MISREAD", t;
  }
}
async function C4t(e, n, t) {
  je(e, n), await Se(e).catch(a => {
    if (k(a) !== "EEXIST") throw a;
  });
  let l = await ee(e),
    s = dirname(n);
  for (;;) try {
    let a = await ee(s),
      _ = relative(l, a);
    if (fe(_)) {
      let h = Error("dest ancestor escaped working sync dir");
      throw h.code = "WORKING_PARENT_ESCAPE", h;
    }
    if (nve(_)) {
      let h = Error("dest ancestor resolves into an ignored path");
      throw h.code = "WORKING_DEST_IGNORED", h;
    }
    break;
  } catch (error) {
    if (!K(error)) throw error;
    let _ = dirname(s);
    if (_ === s) break;
    s = _;
  }
  await Se(dirname(n), {
    recursive: !0
  }), await be(e, n);
  let d = `${n}.${process.hrtime.bigint().toString(36)}.tmp`;
  try {
    await f0(d);
  } catch (error) {
    throw Pe(error), error;
  }
  try {
    await Je(d, t, {
      mode: mode,
      flag: "wx"
    });
  } catch (error) {
    throw Pe(error), await Oe(d).catch(() => {}), error;
  }
  try {
    await Ye(d, n);
  } catch (error) {
    throw await Oe(d).catch(() => {}), error;
  }
}
function Pe(cause) {
  if (k(cause) !== "EEXIST") return;
  let n = Error("sibling tempfile name already taken", {
    cause: cause
  });
  throw n.code = "WORKING_TMP_TAKEN", n;
}
async function h_a(e, n, t) {
  let l;
  try {
    l = M5r(t, e.mount_path);
  } catch (d) {
    return m("ccr_synced_file_stage", "bad_mount_path"), {
      ok: !1,
      error: d instanceof Error ? d.message : String(d)
    };
  }
  if (Cat(l)) return SRt.emit(l, "stored"), {
    ok: !0,
    noop: "dir_sync_lane_row"
  };
  if (nve(l)) return m("ccr_synced_file_stage", "ignored_path"), {
    ok: !1,
    error: "mount_path is an ignored path"
  };
  let s = join(t, l);
  return Ee(l, async () => {
    let d, a;
    try {
      try {
        await be(t, s);
      } catch (r) {
        if (!K(r)) return m("ccr_synced_file_stage", k(r) === "WORKING_PATH_MISREAD" ? "backslash_in_path" : "containment_failed"), {
          ok: !1,
          error: `mount_path failed containment: ${k(r) ?? "unknown"}`
        };
      }
      let _ = null;
      try {
        let r = await re(s, T.O_RDONLY | T.O_NOFOLLOW | T.O_NONBLOCK);
        try {
          let f = await r.stat();
          if (f.isFile()) {
            if (f.size > qY) return m("ccr_synced_file_stage", "too_large"), {
              ok: !1,
              error: "local file too large to reconcile"
            };
            _ = await r.readFile();
          }
        } finally {
          await r.close();
        }
      } catch (error) {
        let f = k(error);
        if (f !== "ENOENT" && f !== "ELOOP" && f !== "EMLINK") throw error;
      }
      let h = _ ? nt(_) : void 0,
        w = Re(s);
      if (h && w && w.localHash === h && e.content_sha256 !== void 0 && w.etag === e.content_sha256) return g("ccr_synced_file_stage"), {
        ok: !0,
        noop: "already_present"
      };
      let F = e.expected_local_sha256 || void 0,
        O = w && w.localHash === h && (F === void 0 || w.etag === F);
      if (_ && !O) {
        let r = await T4t(l, _, F);
        if (r.kind === "error") return m("ccr_synced_file_stage", "push_failed"), {
          ok: !1,
          error: r.message
        };
        let f = await QBe(l);
        if (f.kind !== "ok") return m("ccr_synced_file_stage", "reget_failed"), {
          ok: !1,
          error: f.kind === "error" ? f.message : "get not_found after put"
        };
        d = f.buf, a = f.content_sha256, V("info", "working_stage_reconciled", {
          conflict: r.kind === "conflict"
        });
      } else {
        let r = await n(e.filestore_path);
        if (!r.ok) return m("ccr_synced_file_stage", "fetch_failed"), {
          ok: !1,
          error: r.error
        };
        if (r.buf.length > qY) return m("ccr_synced_file_stage", "too_large"), {
          ok: !1,
          error: "staged content too large"
        };
        d = r.buf, a = e.content_sha256;
      }
      let R = null;
      try {
        let r = await re(s, T.O_RDONLY | T.O_NOFOLLOW | T.O_NONBLOCK);
        try {
          let f = await r.stat();
          if (f.isFile()) {
            if (f.size > qY) return m("ccr_synced_file_stage", "too_large"), {
              ok: !1,
              error: "local file too large to reconcile"
            };
            R = await r.readFile();
          }
        } finally {
          await r.close();
        }
      } catch (error) {
        let f = k(error);
        if (f !== "ENOENT" && f !== "ELOOP" && f !== "EMLINK") throw error;
      }
      if (R && nt(R) !== h) {
        let r = await T4t(l, R, a);
        if (r.kind === "error") return m("ccr_synced_file_stage", "push_failed"), {
          ok: !1,
          error: r.message
        };
        let f = await QBe(l);
        if (f.kind !== "ok") return m("ccr_synced_file_stage", "reget_failed"), {
          ok: !1,
          error: f.kind === "error" ? f.message : "get not_found after put"
        };
        d = f.buf, a = f.content_sha256, V("info", "working_stage_reconciled", {
          conflict: r.kind === "conflict",
          mid_window: !0
        });
      }
    } catch (_) {
      return m("ccr_synced_file_stage", "reconcile_threw"), {
        ok: !1,
        error: `reconcile failed: ${k(_) ?? "unknown"}`
      };
    }
    try {
      await C4t(t, s, d);
    } catch (_) {
      return m("ccr_synced_file_stage", "write_failed"), {
        ok: !1,
        error: `write failed: ${k(_) ?? "unknown"}`
      };
    }
    return Z(s, a, nt(d)), g("ccr_synced_file_stage"), V("info", "working_stage_ok", {
      bytes: d.length
    }), {
      ok: !0
    };
  });
}
async function pt(e, n) {
  let t = I();
  if (Cat(n)) return c("ccr_synced_file_push", "lane_path_reserved"), !0;
  let l = t.terminalRejects.get(n);
  if (l !== void 0 && l.latchedUntilMs !== 0) {
    if (Date.now() < l.latchedUntilMs) return l.suppressed++, !0;
    l.latchedUntilMs = 0;
  }
  let s = join(e, n);
  if (Oc(s)) return c("ccr_synced_file_push", "backslash_in_path"), !0;
  let d;
  try {
    d = await ee(s);
  } catch (error) {
    if (K(error)) return !0;
    throw error;
  }
  let a;
  try {
    a = await ee(e);
  } catch {
    return !1;
  }
  let _ = relative(a, d);
  if (_ !== n && (_ === "" || fe(_))) return c("ccr_synced_file_push", "symlink_escape"), !0;
  let h;
  try {
    let y = await re(s, T.O_RDONLY | T.O_NOFOLLOW | T.O_NONBLOCK);
    try {
      let P = await y.stat();
      if (!P.isFile()) return !0;
      if (P.size > qY) return c("ccr_synced_file_push", "too_large"), !0;
      h = await y.readFile();
    } finally {
      await y.close();
    }
  } catch (error) {
    let P = k(error);
    if (P === "ELOOP" || P === "EMLINK") return c("ccr_synced_file_push", "symlink_escape"), !0;
    return m("ccr_synced_file_push", "read_failed"), !1;
  }
  let w = nt(h),
    F = Re(s);
  if (w === F?.localHash) return !0;
  let O = F === void 0 ? t.evictedEtag.get(s) : void 0,
    R = "open";
  if (F === void 0 && O === void 0) {
    let y = await QBe(n);
    if (y.kind === "error") {
      if (m("ccr_synced_file_push", "seed_get_failed"), !y.retryable) t.recordTerminalReject(n);
      return !y.retryable;
    }
    if (y.kind === "ok") {
      t.resetTerminalRejectStreak(n);
      let P = nt(y.buf);
      if (P === w) return Z(s, y.content_sha256, w), !0;
      try {
        await C4t(e, s, y.buf);
      } catch {
        return m("ccr_synced_file_push", "write_failed"), !1;
      }
      return Z(s, y.content_sha256, P), c("ccr_synced_file_push", "cold_renderer_wins"), !0;
    }
    if (R = t.sessionFullGate(), R === "skip") return t.recordTerminalReject(n, !0), !0;
  }
  let r = await T4t(n, h, F?.etag ?? O);
  if (R === "probe") {
    if (r.kind === "ok") t.clearSessionFull();else if (r.kind === "conflict" || r.laneReason !== xe) t.sessionFullReprobeNow();
  }
  if (r.kind === "ok") return t.resetTerminalRejectStreak(n), Z(s, r.content_sha256, w), g("ccr_synced_file_push"), !0;
  if (r.kind === "error") {
    if (r.retryable) t.resetTerminalRejectStreak(n), m("ccr_synced_file_push", "put_failed");else {
      m("ccr_synced_file_push", ft(r));
      let y = r.laneReason === xe;
      if (t.recordTerminalReject(n, y), y) t.recordSessionFull();
    }
    return V("warn", "working_push_failed", {
      reason: r.message,
      retryable: r.retryable
    }), !r.retryable;
  }
  t.resetTerminalRejectStreak(n);
  let f = await QBe(n);
  if (f.kind === "error") {
    if (m("ccr_synced_file_push", "reget_failed"), !f.retryable) t.recordTerminalReject(n);
    return !f.retryable;
  }
  if (f.kind === "not_found") return t.forgetSeen(s), t.sessionFullReprobeNow(), m("ccr_synced_file_push", "reget_failed"), !1;
  try {
    await C4t(e, s, f.buf);
  } catch {
    return m("ccr_synced_file_push", "write_failed"), !1;
  }
  return Z(s, f.content_sha256, nt(f.buf)), c("ccr_synced_file_push", "conflict_overwritten"), !0;
}
function iaa() {
  return I().flush();
}
async function g_a() {
  let e = I();
  await iaa();
  for (;;) {
    if (e.inFlight.size === 0 && (e.activeSyncer?.pendingCount() ?? 0) === 0) return;
    await e.inFlight.settle(), await new Promise(n => setImmediate(n));
  }
}
async function aaa(e, n = x() === "linux" && !i.CLAUDE_CODE_DISABLE_WORKING_SYNC_WATCH ? He : null) {
  let t = I();
  t.armLateStart(null);
  for (let E = 1;; E++) try {
    await Se(e);
    break;
  } catch (error) {
    let v = k(error);
    if (v === "EEXIST") break;
    if (v === "ENOENT") {
      if (E < rt) {
        await J(st);
        continue;
      }
      return V("info", "working_sync_parent_absent", {}), t.armLateStart(e), null;
    }
    return c("ccr_synced_file_push", "sync_start_failed"), V("warn", "working_sync_start_failed", {
      code: v ?? "unknown"
    }), null;
  }
  let l = 0,
    s = [],
    d = () => l < Qe ? (l++, Promise.resolve()) : new Promise(E => s.push(E)),
    a = () => {
      let E = s.shift();
      if (E) E();else l--;
    },
    _ = new Set(),
    h = !1,
    w = !1,
    F = 0,
    O = 0,
    R = n,
    r,
    f = 0,
    y = 0,
    P = !1,
    te,
    oe = new Set(),
    ie = 0,
    C = !1,
    ve = new Set(),
    U = (E, M, v = {}) => {
      let A = [M, ...Object.values(v)].join(" ");
      if (!h && !ve.has(A)) ve.add(A), V(E, M, v);
    },
    G,
    Be = Date.now(),
    pe = E => {
      clearInterval(G), G = setInterval(Te, E), G.unref?.();
    },
    De = () => {
      pe(Q), Te();
    },
    B = () => {
      if (r?.close(), r = void 0, C) C = !1, clearInterval(G), G = setTimeout(De, Q - Math.abs(Date.now() - Be) % Q), G.unref?.();
    },
    Ce = () => {
      V("warn", "working_sync_watch_errored", {}), R = null, B();
    },
    Ue = async E => {
      ie++;
      let M = [],
        v = {
          close: () => {
            for (let S of M) S.close();
          }
        },
        A = () => r === v,
        ae = (S, L, j) => {
          M.push(E(L, {
            persistent: !1
          }, (ye, q) => {
            if (!A() || !j(q)) return;
            if (!(ye === "change" && q === basename(e) && oe.delete(S))) B();
          }));
        };
      try {
        ae("root", e, () => !0), ae("parent", dirname(e), S => typeof S !== "string" || S === "" || S === basename(e) || S === basename(dirname(e)));
      } catch (error) {
        v.close(), U("warn", "working_sync_watch_open_failed", {
          code: k(error) ?? "unknown",
          watch: M.length === 0 ? "root" : "parent"
        });
        return;
      }
      r = v, y = f, te = void 0, oe = new Set(["root", "parent"]), P = !0;
      let watch = "parent";
      try {
        for (let L of M) L.on("error", () => {
          if (A()) Ce();
        });
        if ((await ke(dirname(e))).isSymbolicLink()) U("info", "working_sync_watch_test_skipped", {
          code: "parent_is_link"
        }), R = null, B();
        if (!A()) return;
        watch = "root";
        let S = await re(e, T.O_RDONLY | T.O_DIRECTORY | T.O_NOFOLLOW);
        try {
          let {
            mode: mode_2,
            gid: gid
          } = await S.stat();
          if ((mode_2 & 1024) !== 0 && gid !== process.getegid?.() && !process.getgroups?.().includes(gid)) U("info", "working_sync_watch_test_skipped", {
            code: "setgid_folder"
          }), B();else if (A()) await S.chmod(mode_2 & 4095);
        } finally {
          await S.close();
        }
        te = Date.now();
      } catch (error) {
        U("warn", "working_sync_watch_test_failed", {
          code: k(error) ?? "unknown",
          watch: watch
        }), B();
      } finally {
        P = !1;
      }
    },
    Ke = async () => {
      let E = [],
        M = [""],
        v = new Set(),
        A = [...t.seenState.keys()],
        {
          transportFailureSeq: transportFailureSeq,
          sessionTerminalRejectSeq: sessionTerminalRejectSeq
        } = t,
        S = ++f,
        L = !1,
        j = !1,
        ye = 0,
        q = !1,
        le = !1;
      e: while (M.length && !h) {
        let z = M.shift(),
          N;
        try {
          N = await $e(join(e, z), {
            withFileTypes: !0
          });
        } catch (error) {
          V("warn", "working_scan_readdir_failed", {
            code: k(error) ?? "unknown"
          }), le = !0;
          continue;
        }
        for (let X of N) {
          if (++ye > Le) {
            if (q = !0, !w) c("ccr_synced_file_push", "scan_cap_reached"), w = !0;
            break e;
          }
          let b = z ? join(z, X.name) : X.name;
          if (v.add(b), nve(b) || Cat(b)) continue;
          if (X.isDirectory()) {
            j = !0, M.push(b);
            continue;
          }
          if (!X.isFile()) continue;
          L = !0;
          let we;
          try {
            we = (await ke(join(e, b))).mtimeMs;
          } catch {
            continue;
          }
          let me = t.terminalRejects.get(b);
          if (me !== void 0 && me.latchedUntilMs !== 0 && Date.now() >= me.latchedUntilMs) t.reopenMtimeGate(b);
          if (t.releaseSessionFullHold(b), we === t.lastSeenMtime.get(b)) continue;
          if (_.has(b) || t.inFlight.has(b)) continue;
          _.add(b), E.push((async () => {
            await d();
            try {
              if (await Ee(b, () => pt(e, b))) t.recordSettledMtime(b, we);
            } finally {
              _.delete(b), a();
            }
          })().catch(ze => V("warn", "working_push_threw", {
            code: k(ze) ?? "unknown"
          })));
        }
      }
      if (!q && !le && !h) {
        for (let N of t.lastSeenMtime.keys()) if (!v.has(N)) t.reopenMtimeGate(N);
        for (let N of t.terminalRejects.keys()) if (!v.has(N)) t.forgetTerminalReject(N);
        let z = e.endsWith(sep) ? e : e + sep;
        for (let N of A) if (N.startsWith(z) && !v.has(relative(e, N))) t.evictDeleted(N);
      }
      if (q || le || h || L || j || t.inFlight.size > 0 || R === null) {
        if (L || j) ie = 0;
        if (C && (L || j)) {
          let z = await qe(e).then(N => N.mtimeMs, () => Date.now());
          if (C && S > y && Date.now() - z > Ne) V("warn", "working_sync_watch_missed_change", {}), R = null;
        }
        B();
      } else if (r === void 0) {
        if (ie >= et) U("warn", "working_sync_watch_attempts_used_up");else if (!P) Ue(R);
      } else if (oe.size > 0) {
        if (te !== void 0 && Date.now() - te > Ne) U("warn", "working_sync_watch_test_unheard", {
          watch: [...oe].join("+")
        }), R = null, B();
      } else if (S > y && !C) C = !0, ie = 0, pe(Ze), U("info", "working_sync_waiting_for_file_events");
      if (await Promise.allSettled(E), t.transportFailureSeq > transportFailureSeq || t.sessionTerminalRejectSeq > sessionTerminalRejectSeq) F = F === 0 ? 2 * Q : Math.min(F * 2, tt), O = Date.now() + F;else if (_.size === 0) F = 0, O = 0;
    },
    _e = 0,
    flush = async () => {
      _e++;
      try {
        await Ke();
      } finally {
        _e--;
      }
    },
    Te = () => {
      if (_e > 0 || Date.now() < O) return;
      flush().catch(E => V("warn", "working_push_threw", {
        code: k(E) ?? "unknown"
      }));
    },
    initialReconcile = flush();
  pe(Q), V("info", "working_sync_started", {});
  let ge = {
    initialReconcile: initialReconcile,
    flush: flush,
    pendingCount: () => _.size,
    pollBackoffUntilForTest: () => O,
    reliesOnRootWatchForTest: () => C,
    hasTestedRootWatchForTest: () => te !== void 0,
    stop() {
      h = !0, B(), clearInterval(G), t.syncerStopped(ge);
    }
  };
  return t.syncerStarted(ge), ge;
}
async function E5o(e) {
  if (Cat(e)) return {
    kind: "error",
    message: Ynr,
    retryable: !1,
    errorKind: "other",
    status: void 0
  };
  return QBe(e);
}
async function T5o(e, n, t, l) {
  let s = I();
  if (Cat(n)) return {
    ok: !1,
    reason: "put_failed",
    error: Ynr,
    retryable: !1
  };
  if (t.length > qY) return {
    ok: !1,
    reason: "too_large",
    error: "content too large"
  };
  if (l !== void 0 && l.length === 0) return {
    ok: !1,
    reason: "put_failed",
    error: "empty if_match",
    retryable: !1
  };
  return Ee(n, async () => {
    let d = await T4t(n, t, l);
    if (d.kind === "conflict") {
      if (l !== void 0) return {
        ok: !1,
        reason: "conflict",
        error: "lane row changed since if_match",
        retryable: !1
      };
      return {
        ok: !1,
        reason: "put_failed",
        error: "put rejected (409 without if_match)",
        retryable: !0
      };
    }
    if (d.kind === "error") return {
      ok: !1,
      reason: "put_failed",
      error: d.message,
      retryable: d.retryable
    };
    if (!nve(n)) {
      let a = join(e, n),
        _ = Re(a),
        h = !1;
      try {
        await be(e, a);
        let w = await re(a, T.O_RDONLY | T.O_NOFOLLOW | T.O_NONBLOCK);
        try {
          let F = await w.stat();
          if (F.isFile() && F.size <= qY && _ !== void 0) {
            let O = Number(F.size),
              R = Buffer.allocUnsafe(O + 1),
              r = 0;
            for (;;) {
              let {
                bytesRead: bytesRead
              } = await w.read(R, r, O + 1 - r, r);
              if (bytesRead === 0) break;
              if (r += bytesRead, r > O) break;
            }
            h = r <= O && _.localHash === nt(R.subarray(0, r));
          }
        } finally {
          await w.close();
        }
      } catch (error) {
        h = K(error);
      }
      if (!h) return s.recordEvictedEtag(a, d.content_sha256), V("info", "worker_lane_mirror_skipped"), {
        ok: !0,
        etag: d.content_sha256
      };
      try {
        await C4t(e, a, t);
      } catch (error) {
        return s.recordEvictedEtag(a, d.content_sha256), V("warn", "worker_lane_mirror_skipped", {
          code: k(error) ?? "unknown"
        }), {
          ok: !0,
          etag: d.content_sha256
        };
      }
      Z(a, d.content_sha256, nt(t));
    }
    return {
      ok: !0,
      etag: d.content_sha256
    };
  });
}
export { mode as I5r, Gwn, Tat, Ynr, qY, M5r, nve, v5o, T4t, QBe, C4t, h_a, iaa, g_a, aaa, E5o, T5o };