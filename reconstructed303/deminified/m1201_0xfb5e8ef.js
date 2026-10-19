// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { j } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { k, G, pi } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Y } from "B:/~BUN/root/chunk-89mss1tj.js";
import { z, NA } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { YB } from "B:/~BUN/root/chunk-rvc0n7zm.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { X } from "B:/~BUN/root/chunk-yrjpmz6e.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { uee, W5e } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { kst } from "B:/~BUN/root/chunk-znfpp0cs.js";
import { Gt } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { o, u } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { st } from "B:/~BUN/root/chunk-7aw74be3.js";
import { Qg } from "B:/~BUN/root/chunk-q9dtdza4.js";
import { constants as O } from "fs";
import { link as we, lstat as ue, mkdir as Q, open as K, readdir as Fe, realpath as L, rename as Ee, unlink as V, writeFile as Re } from "fs/promises";
import { posix as be } from "path";
var mode = 384;
var {
    basename: basename,
    dirname: dirname,
    isAbsolute: isAbsolute,
    join: join,
    normalize: normalize,
    relative: relative,
    sep: sep
  } = be,
  m3t = "/mnt/user-data/working",
  r4e = "/working",
  TOn = `${r4e}/${uee} is reserved`,
  xz = 26214400,
  de = 4096,
  Oe = 4,
  timeout = 30000,
  ee = 5000,
  Te = 120000,
  Ne = 5,
  xe = 2000,
  Me = 3,
  D = 600000,
  ae = 3600000,
  Pe = de;
class pe {
  seenState = new Map();
  evictedEtag = new Map();
  lastSeenMtime = new Map();
  terminalRejects = new Map();
  sessionFullUntilMs = 0;
  sessionFullSuppressed = 0;
  sessionFullNextOfferMs = 0;
  inFlight = Qg();
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
  recordEvictedEtag(e, t) {
    if (t === void 0) return;
    if (this.evictedEtag.delete(e), this.evictedEtag.set(e, t), this.evictedEtag.size > Pe) {
      let r = this.evictedEtag.keys().next().value;
      if (r !== void 0) this.evictedEtag.delete(r);
    }
  }
  evictDeleted(e) {
    this.recordEvictedEtag(e, this.seenState.get(e)?.etag), this.seenState.delete(e);
  }
  recordSettledMtime(e, t) {
    this.lastSeenMtime.set(e, t);
  }
  reopenMtimeGate(e) {
    this.lastSeenMtime.delete(e);
  }
  recordTerminalReject(e, t = !1) {
    let r = this.terminalRejects.get(e) ?? {
      consecutive: 0,
      latchedUntilMs: 0,
      suppressed: 0,
      heldWhileFull: !1
    };
    if (r.consecutive++, r.heldWhileFull ||= t, this.terminalRejects.set(e, r), r.consecutive >= Me) r.latchedUntilMs = Date.now() + D, m("ccr_synced_file_push", "push_parked_terminal", {
      consecutive_rejects: r.consecutive,
      suppressed_pushes: r.suppressed,
      held_while_full: r.heldWhileFull
    }), r.suppressed = 0, X("warn", "working_push_parked", {
      consecutive: r.consecutive
    });
  }
  resetTerminalRejectStreak(e) {
    let t = this.terminalRejects.get(e);
    if (t === void 0) return;
    if (t.suppressed === 0) {
      this.terminalRejects.delete(e);
      return;
    }
    t.consecutive = 0, t.latchedUntilMs = 0, t.heldWhileFull = !1;
  }
  forgetTerminalReject(e) {
    this.terminalRejects.delete(e);
  }
  sessionFullGate() {
    if (this.sessionFullUntilMs === 0) return "open";
    let e = Date.now();
    if (e < this.sessionFullUntilMs) return this.sessionFullSuppressed++, "skip";
    return this.sessionFullUntilMs = e + D, "probe";
  }
  recordSessionFull() {
    let e = this.sessionFullUntilMs !== 0,
      t = Date.now();
    if (this.sessionFullUntilMs = t + D, this.sessionFullNextOfferMs = t + ae, e && this.sessionFullSuppressed === 0) return;
    m("ccr_synced_file_push", "push_parked_session_full", {
      suppressed_pushes: this.sessionFullSuppressed
    }), X("warn", "working_session_full", {
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
    let t = this.terminalRejects.get(e);
    if (t === void 0 || !t.heldWhileFull) return;
    if (this.sessionFullUntilMs !== 0) {
      let r = Date.now();
      if (r < this.sessionFullUntilMs + ee || r < this.sessionFullNextOfferMs || t.latchedUntilMs !== 0) return;
      this.sessionFullNextOfferMs = r + ae;
    }
    t.heldWhileFull = !1, this.resetTerminalRejectStreak(e), this.reopenMtimeGate(e);
  }
  get transportFailureSeq() {
    return this.retryableTransportFailures;
  }
  get sessionTerminalRejectSeq() {
    return this.sessionTerminalRejects;
  }
  noteRetryableTransportFailure() {
    if (this.retryableTransportFailures++, this.sessionFullUntilMs !== 0) this.sessionFullNextOfferMs = Math.max(this.sessionFullNextOfferMs, Date.now() + D);
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
        let e = I8s(this.lateStartRoot);
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
var Ie = new z(() => new pe());
function N() {
  return Ie.of(j().host);
}
function I(e, t, r) {
  N().recordSeen(e, t, r);
}
function te(e) {
  return N().seenState.get(e);
}
function re(e, t) {
  return N().inFlight.run(e, t);
}
function yur(e, t) {
  if (!isAbsolute(e)) throw Error("syncDir must be absolute");
  if (t.includes("\x00")) throw Error("path contains null bytes");
  if (!isAbsolute(t)) throw Error("path must be absolute");
  let r = relative(e, normalize(t));
  if (r === "" || r === "." || H(r)) throw Error("path must be under the working sync dir");
  return r;
}
function H(e) {
  return isAbsolute(e) || e.split(sep).includes("..");
}
function rue(e) {
  for (let t of e.split(sep)) if (t.startsWith(".") || t.endsWith("~") || t.endsWith(".swp") || t.endsWith(".tmp")) return !0;
  return !1;
}
var le = "synced_file_limit_exceeded",
  hto = "synced_file_lane_denied",
  Le = f(() => u({
    error: u({
      reason: o().optional(),
      resource: o().optional()
    })
  })),
  je = f(() => u({
    error: u({
      type: o().optional(),
      resource_type: o().optional()
    })
  }));
function Ae(e, t) {
  if (e === "timeout" || e === "network") return !0;
  if (e === "auth" || e === "other") return !1;
  if (t === void 0) return !0;
  return t === 408 || t === 429 || t >= 500;
}
function _e(e, t) {
  let r = N(),
    {
      kind: l,
      status: status
    } = pi(t),
    retryable = Ae(l, status);
  if (retryable) r.noteRetryableTransportFailure();else if (l === "auth") r.noteSessionTerminalReject();
  let h = status === 400 || status === 403 ? We(t) : void 0,
    laneReason = status === 400 ? h?.reason : void 0,
    refusedResource = status === 403 ? h?.resource : void 0;
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
function We(e) {
  let t = e?.response?.data;
  return Le().safeParse(t).data?.error;
}
function Ue(e) {
  if (e.errorKind === "gated") return `put_gated_${(e.gateReason ?? "unknown").replaceAll("-", "_")}`;
  return e.status !== void 0 ? `put_rejected_${e.status}` : `put_rejected_${e.errorKind}`;
}
async function oRt(e, t, if_match_sha256) {
  let l = N();
  try {
    let s = await Gt.put("/worker/synced_file", {
      path: `${r4e}/${e}`,
      content: t.toString("base64"),
      ...(if_match_sha256 && {
        if_match_sha256: if_match_sha256
      }),
      worker_epoch: a.CLAUDE_CODE_WORKER_EPOCH ?? 0
    }, {
      auth: "session-jwt",
      host: "ccr-session",
      headers: {
        "anthropic-version": "2023-06-01"
      },
      timeout: timeout,
      validateStatus: c => c >= 200 && c < 300 || c === 409,
      maxBodyLength: Math.ceil(xz * 4 / 3) + 1024
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
    return _e("put", error);
  }
}
async function fAe(e) {
  let t = N();
  try {
    let r = await Gt.get(`/worker/synced_file?path=${encodeURIComponent(`${r4e}/${e}`)}`, {
      auth: "session-jwt",
      host: "ccr-session",
      headers: {
        "anthropic-version": "2023-06-01"
      },
      timeout: timeout,
      maxContentLength: Math.ceil(xz * 4 / 3) + 1024,
      validateStatus: l => l >= 200 && l < 300 || l === 404
    });
    if (!r.ok) return t.noteSessionTerminalReject(), {
      kind: "error",
      message: `get gated: ${r.reason}`,
      retryable: !1,
      errorKind: "gated",
      status: void 0,
      gateReason: r.reason
    };
    if (r.status === 404) {
      let l = je().safeParse(r.data);
      return {
        kind: "not_found",
        ...(l.success && {
          body: l.data.error
        })
      };
    }
    return {
      kind: "ok",
      buf: Buffer.from(r.data.content, "base64"),
      content_sha256: r.data.content_sha256
    };
  } catch (error) {
    return _e("get", error);
  }
}
async function ne(e, t, r) {
  he(e, t);
  let l = await L(e),
    s = await L(dirname(t)),
    c = relative(l, s);
  if (H(c)) {
    let i = Error("dest parent escaped working sync dir");
    throw i.code = "WORKING_PARENT_ESCAPE", i;
  }
  let h = c === "" ? basename(t) : join(c, basename(t));
  if (rue(h)) {
    let i = Error("dest resolves into an ignored path");
    throw i.code = "WORKING_DEST_IGNORED", i;
  }
  if (r?.(h)) {
    let i = Error("dest resolves onto a path the caller refuses");
    throw i.code = "WORKING_DEST_REFUSED", i;
  }
  try {
    if ((await ue(t)).isSymbolicLink()) {
      let _ = Error("dest is a symlink");
      throw _.code = "WORKING_DEST_SYMLINK", _;
    }
  } catch (error) {
    if (!G(error)) throw error;
  }
}
function he(e, t) {
  if (NA(e) || NA(dirname(t))) {
    let r = Error("a folder on the way to dest has a backslash in its name");
    throw r.code = "WORKING_PATH_MISREAD", r;
  }
}
async function sRt(e, t, r, l = "replace", s) {
  he(e, t), await Q(e).catch(_ => {
    if (k(_) !== "EEXIST") throw _;
  });
  let c = await L(e),
    h = dirname(t);
  for (;;) try {
    let _ = await L(h),
      y = relative(c, _);
    if (H(y)) {
      let S = Error("dest ancestor escaped working sync dir");
      throw S.code = "WORKING_PARENT_ESCAPE", S;
    }
    if (rue(y)) {
      let S = Error("dest ancestor resolves into an ignored path");
      throw S.code = "WORKING_DEST_IGNORED", S;
    }
    if (s?.(join(y, relative(h, t))) === !0) {
      let S = Error("dest resolves onto a path the caller refuses");
      throw S.code = "WORKING_DEST_REFUSED", S;
    }
    break;
  } catch (error) {
    if (!G(error)) throw error;
    let y = dirname(h);
    if (y === h) break;
    h = y;
  }
  await Q(dirname(t), {
    recursive: !0
  }), await ne(e, t, s);
  let i = `${t}.${process.hrtime.bigint().toString(36)}.tmp`;
  try {
    await YB(i);
  } catch (error) {
    throw ce(error), error;
  }
  try {
    await Re(i, r, {
      mode: mode,
      flag: "wx"
    });
  } catch (error) {
    throw ce(error), await V(i).catch(() => {}), error;
  }
  try {
    if (l === "create_only") await we(i, t), await V(i);else await Ee(i, t);
  } catch (error) {
    throw await V(i).catch(() => {}), error;
  }
}
function ce(cause) {
  if (k(cause) !== "EEXIST") return;
  let t = Error("sibling tempfile name already taken", {
    cause: cause
  });
  throw t.code = "WORKING_TMP_TAKEN", t;
}
async function yri(e, t, r) {
  let l;
  try {
    l = yur(r, e.mount_path);
  } catch (c) {
    return m("ccr_synced_file_stage", "bad_mount_path"), {
      ok: !1,
      error: c instanceof Error ? c.message : String(c)
    };
  }
  if (W5e(l)) return kst.emit(l, "stored"), {
    ok: !0,
    noop: "dir_sync_lane_row"
  };
  if (rue(l)) return m("ccr_synced_file_stage", "ignored_path"), {
    ok: !1,
    error: "mount_path is an ignored path"
  };
  let s = join(r, l);
  return re(l, async () => {
    let c, h;
    try {
      try {
        await ne(r, s);
      } catch (n) {
        if (!G(n)) return m("ccr_synced_file_stage", k(n) === "WORKING_PATH_MISREAD" ? "backslash_in_path" : "containment_failed"), {
          ok: !1,
          error: `mount_path failed containment: ${k(n) ?? "unknown"}`
        };
      }
      let i = null;
      try {
        let n = await K(s, O.O_RDONLY | O.O_NOFOLLOW | O.O_NONBLOCK);
        try {
          let d = await n.stat();
          if (d.isFile()) {
            if (d.size > xz) return m("ccr_synced_file_stage", "too_large"), {
              ok: !1,
              error: "local file too large to reconcile"
            };
            i = await n.readFile();
          }
        } finally {
          await n.close();
        }
      } catch (error) {
        let d = k(error);
        if (d !== "ENOENT" && d !== "ELOOP" && d !== "EMLINK") throw error;
      }
      let _ = i ? st(i) : void 0,
        y = te(s);
      if (_ && y && y.localHash === _ && e.content_sha256 !== void 0 && y.etag === e.content_sha256) return g("ccr_synced_file_stage"), {
        ok: !0,
        noop: "already_present"
      };
      let S = e.expected_local_sha256 || void 0,
        T = y && y.localHash === _ && (S === void 0 || y.etag === S);
      if (i && !T) {
        let n = await oRt(l, i, S);
        if (n.kind === "error") return m("ccr_synced_file_stage", "push_failed"), {
          ok: !1,
          error: n.message
        };
        let d = await fAe(l);
        if (d.kind !== "ok") return m("ccr_synced_file_stage", "reget_failed"), {
          ok: !1,
          error: d.kind === "error" ? d.message : "get not_found after put"
        };
        c = d.buf, h = d.content_sha256, X("info", "working_stage_reconciled", {
          conflict: n.kind === "conflict"
        });
      } else {
        let n = await t(e.filestore_path);
        if (!n.ok) return m("ccr_synced_file_stage", "fetch_failed"), {
          ok: !1,
          error: n.error
        };
        if (n.buf.length > xz) return m("ccr_synced_file_stage", "too_large"), {
          ok: !1,
          error: "staged content too large"
        };
        c = n.buf, h = e.content_sha256;
      }
      let E = null;
      try {
        let n = await K(s, O.O_RDONLY | O.O_NOFOLLOW | O.O_NONBLOCK);
        try {
          let d = await n.stat();
          if (d.isFile()) {
            if (d.size > xz) return m("ccr_synced_file_stage", "too_large"), {
              ok: !1,
              error: "local file too large to reconcile"
            };
            E = await n.readFile();
          }
        } finally {
          await n.close();
        }
      } catch (error) {
        let d = k(error);
        if (d !== "ENOENT" && d !== "ELOOP" && d !== "EMLINK") throw error;
      }
      if (E && st(E) !== _) {
        let n = await oRt(l, E, h);
        if (n.kind === "error") return m("ccr_synced_file_stage", "push_failed"), {
          ok: !1,
          error: n.message
        };
        let d = await fAe(l);
        if (d.kind !== "ok") return m("ccr_synced_file_stage", "reget_failed"), {
          ok: !1,
          error: d.kind === "error" ? d.message : "get not_found after put"
        };
        c = d.buf, h = d.content_sha256, X("info", "working_stage_reconciled", {
          conflict: n.kind === "conflict",
          mid_window: !0
        });
      }
    } catch (i) {
      return m("ccr_synced_file_stage", "reconcile_threw"), {
        ok: !1,
        error: `reconcile failed: ${k(i) ?? "unknown"}`
      };
    }
    try {
      await sRt(r, s, c);
    } catch (i) {
      return m("ccr_synced_file_stage", "write_failed"), {
        ok: !1,
        error: `write failed: ${k(i) ?? "unknown"}`
      };
    }
    return I(s, h, st(c)), g("ccr_synced_file_stage"), X("info", "working_stage_ok", {
      bytes: c.length
    }), {
      ok: !0
    };
  });
}
async function Be(e, t) {
  let r = N();
  if (W5e(t)) return p("ccr_synced_file_push", "lane_path_reserved"), !0;
  let l = r.terminalRejects.get(t);
  if (l !== void 0 && l.latchedUntilMs !== 0) {
    if (Date.now() < l.latchedUntilMs) return l.suppressed++, !0;
    l.latchedUntilMs = 0;
  }
  let s = join(e, t);
  if (NA(s)) return p("ccr_synced_file_push", "backslash_in_path"), !0;
  let c;
  try {
    c = await L(s);
  } catch (error) {
    if (G(error)) return !0;
    throw error;
  }
  let h;
  try {
    h = await L(e);
  } catch {
    return !1;
  }
  let i = relative(h, c);
  if (i !== t && (i === "" || H(i))) return p("ccr_synced_file_push", "symlink_escape"), !0;
  let _;
  try {
    let w = await K(s, O.O_RDONLY | O.O_NOFOLLOW | O.O_NONBLOCK);
    try {
      let R = await w.stat();
      if (!R.isFile()) return !0;
      if (R.size > xz) return p("ccr_synced_file_push", "too_large"), !0;
      _ = await w.readFile();
    } finally {
      await w.close();
    }
  } catch (error) {
    let R = k(error);
    if (R === "ELOOP" || R === "EMLINK") return p("ccr_synced_file_push", "symlink_escape"), !0;
    return m("ccr_synced_file_push", "read_failed"), !1;
  }
  let y = st(_),
    S = te(s);
  if (y === S?.localHash) return !0;
  let T = S === void 0 ? r.evictedEtag.get(s) : void 0,
    E = "open";
  if (S === void 0 && T === void 0) {
    let w = await fAe(t);
    if (w.kind === "error") {
      if (m("ccr_synced_file_push", "seed_get_failed"), !w.retryable) r.recordTerminalReject(t);
      return !w.retryable;
    }
    if (w.kind === "ok") {
      r.resetTerminalRejectStreak(t);
      let R = st(w.buf);
      if (R === y) return I(s, w.content_sha256, y), !0;
      try {
        await sRt(e, s, w.buf);
      } catch {
        return m("ccr_synced_file_push", "write_failed"), !1;
      }
      return I(s, w.content_sha256, R), p("ccr_synced_file_push", "cold_renderer_wins"), !0;
    }
    if (E = r.sessionFullGate(), E === "skip") return r.recordTerminalReject(t, !0), !0;
  }
  let n = await oRt(t, _, S?.etag ?? T);
  if (E === "probe") {
    if (n.kind === "ok") r.clearSessionFull();else if (n.kind === "conflict" || n.laneReason !== le) r.sessionFullReprobeNow();
  }
  if (n.kind === "ok") return r.resetTerminalRejectStreak(t), I(s, n.content_sha256, y), g("ccr_synced_file_push"), !0;
  if (n.kind === "error") {
    if (n.retryable) r.resetTerminalRejectStreak(t), m("ccr_synced_file_push", "put_failed");else {
      m("ccr_synced_file_push", Ue(n));
      let w = n.laneReason === le;
      if (r.recordTerminalReject(t, w), w) r.recordSessionFull();
    }
    return X("warn", "working_push_failed", {
      reason: n.message,
      retryable: n.retryable
    }), !n.retryable;
  }
  r.resetTerminalRejectStreak(t);
  let d = await fAe(t);
  if (d.kind === "error") {
    if (m("ccr_synced_file_push", "reget_failed"), !d.retryable) r.recordTerminalReject(t);
    return !d.retryable;
  }
  if (d.kind === "not_found") return r.forgetSeen(s), r.sessionFullReprobeNow(), m("ccr_synced_file_push", "reget_failed"), !1;
  try {
    await sRt(e, s, d.buf);
  } catch {
    return m("ccr_synced_file_push", "write_failed"), !1;
  }
  return I(s, d.content_sha256, st(d.buf)), p("ccr_synced_file_push", "conflict_overwritten"), !0;
}
function O8s() {
  return N().flush();
}
async function _ri() {
  let e = N();
  await O8s();
  for (;;) {
    if (e.inFlight.size === 0 && (e.activeSyncer?.pendingCount() ?? 0) === 0) return;
    await e.inFlight.settle(), await new Promise(t => setImmediate(t));
  }
}
async function I8s(e) {
  let t = N();
  t.armLateStart(null);
  for (let b = 1;; b++) try {
    await Q(e);
    break;
  } catch (error) {
    let x = k(error);
    if (x === "EEXIST") break;
    if (x === "ENOENT") {
      if (b < Ne) {
        await Y(xe);
        continue;
      }
      return X("info", "working_sync_parent_absent", {}), t.armLateStart(e), null;
    }
    return p("ccr_synced_file_push", "sync_start_failed"), X("warn", "working_sync_start_failed", {
      code: x ?? "unknown"
    }), null;
  }
  let r = 0,
    l = [],
    s = () => r < Oe ? (r++, Promise.resolve()) : new Promise(b => l.push(b)),
    c = () => {
      let b = l.shift();
      if (b) b();else r--;
    },
    h = new Set(),
    i = !1,
    _ = !1,
    y = 0,
    S = 0,
    T = async () => {
      let b = [],
        W = [""],
        x = new Set(),
        ge = [...t.seenState.keys()],
        {
          transportFailureSeq: transportFailureSeq,
          sessionTerminalRejectSeq: sessionTerminalRejectSeq
        } = t,
        ke = 0,
        se = !1,
        oe = !1;
      e: while (W.length && !i) {
        let U = W.shift(),
          v;
        try {
          v = await Fe(join(e, U), {
            withFileTypes: !0
          });
        } catch (error) {
          X("warn", "working_scan_readdir_failed", {
            code: k(error) ?? "unknown"
          }), oe = !0;
          continue;
        }
        for (let P of v) {
          if (++ke > de) {
            if (se = !0, !_) p("ccr_synced_file_push", "scan_cap_reached"), _ = !0;
            break e;
          }
          let F = U ? join(U, P.name) : P.name;
          if (x.add(F), rue(F) || W5e(F)) continue;
          if (P.isDirectory()) {
            W.push(F);
            continue;
          }
          if (!P.isFile()) continue;
          let q;
          try {
            q = (await ue(join(e, F))).mtimeMs;
          } catch {
            continue;
          }
          let J = t.terminalRejects.get(F);
          if (J !== void 0 && J.latchedUntilMs !== 0 && Date.now() >= J.latchedUntilMs) t.reopenMtimeGate(F);
          if (t.releaseSessionFullHold(F), q === t.lastSeenMtime.get(F)) continue;
          if (h.has(F) || t.inFlight.has(F)) continue;
          h.add(F), b.push((async () => {
            await s();
            try {
              if (await re(F, () => Be(e, F))) t.recordSettledMtime(F, q);
            } finally {
              h.delete(F), c();
            }
          })().catch(Se => X("warn", "working_push_threw", {
            code: k(Se) ?? "unknown"
          })));
        }
      }
      if (!se && !oe && !i) {
        for (let v of t.lastSeenMtime.keys()) if (!x.has(v)) t.reopenMtimeGate(v);
        for (let v of t.terminalRejects.keys()) if (!x.has(v)) t.forgetTerminalReject(v);
        let U = e.endsWith(sep) ? e : e + sep;
        for (let v of ge) if (v.startsWith(U) && !x.has(relative(e, v))) t.evictDeleted(v);
      }
      if (await Promise.allSettled(b), t.transportFailureSeq > transportFailureSeq || t.sessionTerminalRejectSeq > sessionTerminalRejectSeq) y = y === 0 ? 2 * ee : Math.min(y * 2, Te), S = Date.now() + y;else if (h.size === 0) y = 0, S = 0;
    },
    E = 0,
    flush = async () => {
      E++;
      try {
        await T();
      } finally {
        E--;
      }
    },
    initialReconcile = flush(),
    w = setInterval(() => {
      if (E > 0 || Date.now() < S) return;
      flush().catch(b => X("warn", "working_push_threw", {
        code: k(b) ?? "unknown"
      }));
    }, ee);
  w.unref?.(), X("info", "working_sync_started", {});
  let R = {
    initialReconcile: initialReconcile,
    flush: flush,
    pendingCount: () => h.size,
    pollBackoffUntilForTest: () => S,
    stop() {
      i = !0, clearInterval(w), t.syncerStopped(R);
    }
  };
  return t.syncerStarted(R), R;
}
async function yto(e) {
  if (W5e(e)) return {
    kind: "error",
    message: TOn,
    retryable: !1,
    errorKind: "other",
    status: void 0
  };
  return fAe(e);
}
async function _to(e, t, r, l) {
  let s = N();
  if (W5e(t)) return {
    ok: !1,
    reason: "put_failed",
    error: TOn,
    retryable: !1
  };
  if (r.length > xz) return {
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
  return re(t, async () => {
    let c = await oRt(t, r, l);
    if (c.kind === "conflict") {
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
    if (c.kind === "error") return {
      ok: !1,
      reason: "put_failed",
      error: c.message,
      retryable: c.retryable
    };
    if (!rue(t)) {
      let h = join(e, t),
        i = te(h),
        _ = !1;
      try {
        await ne(e, h);
        let y = await K(h, O.O_RDONLY | O.O_NOFOLLOW | O.O_NONBLOCK);
        try {
          let S = await y.stat();
          if (S.isFile() && S.size <= xz && i !== void 0) {
            let T = Number(S.size),
              E = Buffer.allocUnsafe(T + 1),
              n = 0;
            for (;;) {
              let {
                bytesRead: bytesRead
              } = await y.read(E, n, T + 1 - n, n);
              if (bytesRead === 0) break;
              if (n += bytesRead, n > T) break;
            }
            _ = n <= T && i.localHash === st(E.subarray(0, n));
          }
        } finally {
          await y.close();
        }
      } catch (error) {
        _ = G(error);
      }
      if (!_) return s.recordEvictedEtag(h, c.content_sha256), X("info", "worker_lane_mirror_skipped"), {
        ok: !0,
        etag: c.content_sha256
      };
      try {
        await sRt(e, h, r);
      } catch (error) {
        return s.recordEvictedEtag(h, c.content_sha256), X("warn", "worker_lane_mirror_skipped", {
          code: k(error) ?? "unknown"
        }), {
          ok: !0,
          etag: c.content_sha256
        };
      }
      I(h, c.content_sha256, st(r));
    }
    return {
      ok: !0,
      etag: c.content_sha256
    };
  });
}
export { mode as hur, m3t, r4e, TOn, xz, yur, rue, hto, oRt, fAe, sRt, yri, O8s, _ri, I8s, yto, _to };