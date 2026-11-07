// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Nt } from "B:/~BUN/root/chunk-q78ga0zw.js";
import { f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { J, we } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { V } from "B:/~BUN/root/chunk-f9dwrymq.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { FEr } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { ebn, oCt } from "B:/~BUN/root/chunk-bhrsnnq2.js";
import { o, E, I, xt } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { hj } from "B:/~BUN/root/chunk-ww0cdpg4.js";
import { createHash as q, randomUUID as C, timingSafeEqual as Z } from "crypto";
var subtype = "workflow_launch_result",
  O = 4194304,
  B = "/.workflow/",
  sya = "CLAUDE_CODE_WORKFLOW_LAUNCH_SHA256",
  ee = /^(?!\.+$)[A-Za-z0-9._-]{1,128}$/;
function T(e) {
  let t = error => ({
      ok: !1,
      error: error
    }),
    r = e.filestore_path;
  if (typeof r !== "string" || r.length === 0) return t("filestore_path is missing or not a non-empty string");
  if (!r.startsWith(B) || !ee.test(r.slice(B.length))) return t(`filestore_path must name one object directly under ${B}`);
  let n = e.artifact_sha256;
  if (typeof n !== "string" || !/^[0-9a-f]{64}$/.test(n)) return t("artifact_sha256 is missing or not 64 lowercase hex chars");
  let s = e.bundle_size_bytes;
  if (typeof s !== "number" || !Number.isSafeInteger(s) || s <= 0) return t("bundle_size_bytes is missing or not a positive integer");
  if (s > O) return t(`bundle_size_bytes exceeds ${O}`);
  let workflowName = typeof e.workflow_name === "string" ? e.workflow_name.replace(/[\x00-\x1f\x7f-\x9f\u2028\u2029]/g, "").slice(0, 200) : "",
    sessionOrigin = e.session_origin === void 0 ? void 0 : e.session_origin === "review" ? "review" : "other";
  return {
    ok: !0,
    pointer: {
      workflowName: workflowName,
      filestorePath: r,
      artifactSha256: n,
      bundleSizeBytes: s,
      sessionOrigin: sessionOrigin
    }
  };
}
function te(e, t) {
  let r = q("sha256").update(e).digest(),
    n = Buffer.from(t, "hex");
  return n.length === r.length && Z(r, n);
}
var M = 1;
function re(e) {
  let t = error_2 => ({
    ok: !1,
    error: error_2
  });
  if (e.length < 1) return t("bundle is empty");
  if (e[0] !== M) return t(`unsupported bundle format version ${e[0]} (expected ${M})`);
  let r = 1,
    n = (u, d) => {
      if (r + 8 > e.length) return {
        ok: !1,
        error: `bundle truncated in ${d} length frame`
      };
      let L = e.readBigUInt64BE(r);
      if (r += 8, L > BigInt(u)) return {
        ok: !1,
        error: `${d} frame exceeds ${u} bytes`
      };
      let h = Number(L);
      if (r + h > e.length) return {
        ok: !1,
        error: `bundle truncated in ${d} frame`
      };
      let buf = e.subarray(r, r + h);
      return r += h, {
        ok: !0,
        buf: buf
      };
    },
    s = n(FEr, "script");
  if (!s.ok) return t(s.error);
  if (s.buf.length === 0) return t("script frame is empty");
  let a = n(O, "args_json");
  if (!a.ok) return t(a.error);
  if (r !== e.length) return t(`bundle has ${e.length - r} trailing bytes`);
  return {
    ok: !0,
    script: s.buf.toString("utf8"),
    argsJson: a.buf.toString("utf8")
  };
}
function iya(restoredRecord = null) {
  return {
    ledger: new Map(),
    firstLaunch: null,
    restoredRecord: restoredRecord
  };
}
var z = 2,
  ne = p(() => xt({
    event_uuid: o().refine(e => Nt(e) !== null),
    dispatched_epoch: E().int().min(0).max(Number.MAX_SAFE_INTEGER),
    attempts: E().int().min(1).max(Number.MAX_SAFE_INTEGER),
    settled: I()
  }));
function aya(e) {
  let t = ne().safeParse(e);
  if (!t.success) return null;
  let r = T(t.data);
  if (!r.ok) return null;
  return {
    event_uuid: t.data.event_uuid,
    filestore_path: r.pointer.filestorePath,
    artifact_sha256: r.pointer.artifactSha256,
    bundle_size_bytes: r.pointer.bundleSizeBytes,
    workflow_name: r.pointer.workflowName,
    dispatched_epoch: t.data.dispatched_epoch,
    attempts: t.data.attempts,
    settled: t.data.settled
  };
}
class H {
  slots = new Map();
  stash(e, t) {
    this.slots.set(e, t);
  }
  take(e) {
    let t = this.slots.get(e);
    return this.slots.delete(e), t;
  }
}
var h4r = new W(() => new H()),
  oe = 5000;
async function x(e) {
  return (await we(Promise.resolve().then(() => e.flushRecord()).catch(() => !1), e.recordFlushBoundMs ?? oe)) === !0;
}
var se = [1000, 3000],
  ie = 1e4;
function K(e, artifact_line, r) {
  let n = {
    type: "system",
    subtype: subtype,
    artifact_line: artifact_line,
    uuid: C(),
    session_id: e.getSessionId()
  };
  if (r.launchUuid !== void 0) n.launch_uuid = r.launchUuid;
  if (r.artifactSha256 !== void 0) n.artifact_sha256 = r.artifactSha256;
  e.postEvent(n);
}
function Y(e, layer, r, n) {
  K(e, ebn(layer, r), n), V("warn", "workflow_launch_failed", {
    layer: layer
  }), l("tengu_workflow_launch_event", {
    ok: !1,
    layer: f(layer)
  });
}
function D(e, t, r, n) {
  Y(e, t, r, n), m("workflow_event_launch", t);
}
function b(e, eventUuid, r, n, s) {
  D(e, r, n, s), e.state.ledger.set(eventUuid, {
    eventUuid: eventUuid,
    outcome: "failed-final"
  }), e.ackProcessed(eventUuid);
}
async function U(e, t, r, n, s) {
  let a = t.event_uuid;
  e.state.ledger.set(a, {
    eventUuid: a,
    outcome: "failed-final"
  }), e.persistRecord({
    ...t,
    settled: !0
  }), await x(e), D(e, r, n, s), e.ackProcessed(a);
}
async function X(e, t, r, n, s) {
  let {
      ledger: ledger
    } = e.state,
    u = t.eventUuid,
    d = (s?.attempts ?? 0) + 1,
    L = settled => ({
      event_uuid: u,
      filestore_path: r.filestorePath,
      artifact_sha256: r.artifactSha256,
      bundle_size_bytes: r.bundleSizeBytes,
      workflow_name: r.workflowName,
      dispatched_epoch: e.getWorkerEpoch() ?? 0,
      attempts: d,
      settled: settled
    }),
    h = () => {
      if (e.state.firstLaunch === t) e.state.firstLaunch = null;
    },
    w = async (_, F) => {
      if (h(), s) {
        await U(e, s, _, F, n);
        return;
      }
      b(e, u, _, F, n);
    },
    S = Date.now(),
    R = e.fetchRetryWindowMs ?? ie,
    k = await e.fetchBundle(r.filestorePath),
    attempt = 1;
  for (let _ of e.fetchRetryDelaysMs ?? se) {
    if (k.ok || k.gated || Date.now() - S + _ >= R) break;
    attempt++, V("warn", "workflow_launch_bundle_fetch_retry", {
      attempt: attempt
    }), await J(_), k = await e.fetchBundle(r.filestorePath);
  }
  if (!k.ok) {
    if (k.gated) {
      await w("bundle-fetch", `bundle fetch gated: ${k.error}`);
      return;
    }
    if (ledger.delete(u), h(), s) {
      V("warn", "workflow_launch_rescue_fetch_failed", {}), c("workflow_event_launch", "rescue_fetch_transient");
      return;
    }
    Y(e, "bundle-fetch", `bundle fetch failed: ${k.error}`, n), c("workflow_event_launch", "bundle_fetch_transient");
    return;
  }
  let buf_2 = k.buf;
  if (buf_2.byteLength > O || buf_2.byteLength !== r.bundleSizeBytes) {
    await w("payload-digest-mismatch", `staged bundle is ${buf_2.byteLength} bytes, event pinned ${r.bundleSizeBytes}`);
    return;
  }
  if (!te(buf_2, r.artifactSha256)) {
    await w("payload-digest-mismatch", "staged bundle sha256 does not match the artifact_sha256 the event pinned");
    return;
  }
  let v = re(buf_2);
  if (!v.ok) {
    await w("launch-payload", v.error);
    return;
  }
  let args;
  if (v.argsJson !== "") try {
    args = JSON.parse(v.argsJson);
  } catch (error) {
    await w("args-parse", `args_json is not valid JSON: ${error instanceof Error ? error.message : String(error)}`);
    return;
  }
  e.state.firstLaunch = t, e.persistRecord(L(!1));
  let G = await x(e);
  if (s && !G) {
    ledger.delete(u), h(), V("warn", "workflow_launch_rescue_uncounted", {}), c("workflow_event_launch", "rescue_record_unconfirmed");
    return;
  }
  let N = C();
  h4r.of(e.host).stash(N, {
    script: v.script,
    args: args,
    eventSessionOrigin: r.sessionOrigin,
    postResultLine: _ => K(e, _, n),
    onRunSettled: async _ => {
      if (t.outcome = _ ? "executed" : "run-failed", e.persistRecord(L(!0)), !(await x(e))) e.persistRecord(L(!0));
    }
  }), e.prependUserMessage(`/workflow-launch-exec ${N}`), e.ackProcessed(u), l("tengu_workflow_launch_event", {
    ok: !0,
    attempt: d
  }), g("workflow_event_launch"), V("info", "workflow_launch_dispatched", {
    attempt: d
  });
}
function j(e, t) {
  let r = {
    eventUuid: t.event_uuid,
    outcome: "failed-final"
  };
  e.state.ledger.set(t.event_uuid, r), e.state.firstLaunch ??= r, e.persistRecord({
    ...t,
    settled: !0
  }), e.ackProcessed(t.event_uuid), V("warn", "workflow_launch_attempts_spent", {
    attempts: t.attempts
  }), c("workflow_event_launch", "attempts_spent");
}
async function lya(e, t) {
  let r = typeof e.uuid === "string" ? e.uuid : void 0;
  if (!r) {
    D(t, "launch-payload", "event has no uuid", {});
    return;
  }
  let {
      ledger: ledger_2
    } = t.state,
    s = ledger_2.get(r);
  if (s) {
    if (s.outcome !== "pending") t.ackProcessed(r);
    return;
  }
  if (!t.isRemoteTransport() || !i.CLAUDE_CODE_REMOTE || !i.CLAUDE_CODE_REMOTE_SESSION_ID) {
    D(t, "not-remote-session", "workflow_launch received outside a remote (CCR) session", {
      launchUuid: r
    });
    return;
  }
  let a = T(e);
  if (!a.ok) {
    b(t, r, "launch-payload", a.error, {
      launchUuid: r
    });
    return;
  }
  let pointer = a.pointer,
    d = {
      launchUuid: r,
      artifactSha256: pointer.artifactSha256
    },
    restoredRecord_2 = t.state.restoredRecord,
    h = restoredRecord_2 && restoredRecord_2.event_uuid === r ? restoredRecord_2 : null;
  if (h) {
    if (h.settled) {
      let k = {
        eventUuid: r,
        outcome: "executed"
      };
      ledger_2.set(r, k), t.state.firstLaunch ??= k, t.ackProcessed(r), V("info", "workflow_launch_redelivery_settled", {});
      return;
    }
    if (h.attempts >= z) {
      j(t, h);
      return;
    }
  }
  let w = oCt({
    serverAuthoredCarrier: !0,
    eventSessionOrigin: pointer.sessionOrigin
  });
  if (w) {
    if (h) {
      await U(t, h, "policy-gate", w, d);
      return;
    }
    b(t, r, "policy-gate", w, d);
    return;
  }
  let {
    firstLaunch: firstLaunch
  } = t.state;
  if (firstLaunch && firstLaunch.eventUuid !== r) {
    b(t, r, "launch-protocol", "a second distinct workflow_launch event arrived in this session; at most one launch per session is permitted", d);
    return;
  }
  let R = {
    eventUuid: r,
    outcome: "pending"
  };
  ledger_2.set(r, R), t.state.firstLaunch = R, await X(t, R, pointer, d, h);
}
async function dya(e) {
  let restoredRecord_3 = e.state.restoredRecord;
  if (!restoredRecord_3) return;
  if (!e.isRemoteTransport() || !i.CLAUDE_CODE_REMOTE || !i.CLAUDE_CODE_REMOTE_SESSION_ID) return;
  if (restoredRecord_3.settled) {
    V("info", "workflow_launch_resume_skipped", {
      reason: "settled"
    });
    return;
  }
  let r = e.getWorkerEpoch();
  if (r === void 0 || restoredRecord_3.dispatched_epoch >= r) {
    V("info", "workflow_launch_resume_skipped", {
      reason: "not_a_later_epoch"
    });
    return;
  }
  let n = e.getDispatchedDigest();
  if (n === void 0 || !/^[0-9a-f]{64}$/.test(n) || n !== restoredRecord_3.artifact_sha256) {
    V("info", "workflow_launch_resume_skipped", {
      reason: n === void 0 ? "no_server_digest" : "digest_differs"
    });
    return;
  }
  let {
    ledger: ledger_3
  } = e.state;
  if (ledger_3.has(restoredRecord_3.event_uuid) || e.state.firstLaunch) return;
  if (restoredRecord_3.attempts >= z) {
    j(e, restoredRecord_3);
    return;
  }
  let a = {
      launchUuid: restoredRecord_3.event_uuid,
      artifactSha256: restoredRecord_3.artifact_sha256
    },
    u = oCt({
      serverAuthoredCarrier: !0
    });
  if (u) {
    if (!e.isAccountLaunchedReview() && hj() && oCt({
      serverAuthoredCarrier: !0,
      eventSessionOrigin: "review"
    }) === null) {
      V("info", "workflow_launch_resume_skipped", {
        reason: "needs_event_origin"
      });
      return;
    }
    await U(e, restoredRecord_3, "policy-gate", u, a);
    return;
  }
  let d = {
    eventUuid: restoredRecord_3.event_uuid,
    outcome: "pending"
  };
  ledger_3.set(restoredRecord_3.event_uuid, d), e.state.firstLaunch = d, V("info", "workflow_launch_resuming", {
    attempt: restoredRecord_3.attempts + 1
  }), await X(e, d, {
    workflowName: restoredRecord_3.workflow_name,
    filestorePath: restoredRecord_3.filestore_path,
    artifactSha256: restoredRecord_3.artifact_sha256,
    bundleSizeBytes: restoredRecord_3.bundle_size_bytes
  }, a, restoredRecord_3);
}
export { sya, iya, aya, h4r, lya, dya };