// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { en } from "B:/~BUN/root/chunk-bvn0mpsk.js";
import { q } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { Q, nt } from "B:/~BUN/root/chunk-17wqwt36.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { K } from "B:/~BUN/root/chunk-5px6g0cn.js";
import { Zan } from "B:/~BUN/root/chunk-d36ctpgs.js";
import { _St, b7e } from "B:/~BUN/root/chunk-y78wprma.js";
import { o, E, M, ut } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { createHash as G, randomUUID as C, timingSafeEqual as V } from "crypto";
var subtype = "workflow_launch_result",
  S = 4194304,
  B = "/.workflow/",
  fKo = "CLAUDE_CODE_WORKFLOW_LAUNCH_SHA256",
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
  if (s > S) return t(`bundle_size_bytes exceeds ${S}`);
  return {
    ok: !0,
    pointer: {
      workflowName: typeof e.workflow_name === "string" ? e.workflow_name.replace(/[\x00-\x1f\x7f-\x9f\u2028\u2029]/g, "").slice(0, 200) : "",
      filestorePath: r,
      artifactSha256: n,
      bundleSizeBytes: s
    }
  };
}
function te(e, t) {
  let r = G("sha256").update(e).digest(),
    n = Buffer.from(t, "hex");
  return n.length === r.length && V(r, n);
}
var F = 1;
function re(e) {
  let t = error_2 => ({
    ok: !1,
    error: error_2
  });
  if (e.length < 1) return t("bundle is empty");
  if (e[0] !== F) return t(`unsupported bundle format version ${e[0]} (expected ${F})`);
  let r = 1,
    n = (l, d) => {
      if (r + 8 > e.length) return {
        ok: !1,
        error: `bundle truncated in ${d} length frame`
      };
      let L = e.readBigUInt64BE(r);
      if (r += 8, L > BigInt(l)) return {
        ok: !1,
        error: `${d} frame exceeds ${l} bytes`
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
    s = n(Zan, "script");
  if (!s.ok) return t(s.error);
  if (s.buf.length === 0) return t("script frame is empty");
  let u = n(S, "args_json");
  if (!u.ok) return t(u.error);
  if (r !== e.length) return t(`bundle has ${e.length - r} trailing bytes`);
  return {
    ok: !0,
    script: s.buf.toString("utf8"),
    argsJson: u.buf.toString("utf8")
  };
}
function mKo(restoredRecord = null) {
  return {
    ledger: new Map(),
    firstLaunch: null,
    restoredRecord: restoredRecord
  };
}
var z = 2,
  ne = f(() => ut({
    event_uuid: o().refine(e => en(e) !== null),
    dispatched_epoch: E().int().min(0).max(Number.MAX_SAFE_INTEGER),
    attempts: E().int().min(1).max(Number.MAX_SAFE_INTEGER),
    settled: M()
  }));
function gKo(e) {
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
var _Tn = new q(() => new H()),
  oe = 5000;
async function O(e) {
  return (await nt(Promise.resolve().then(() => e.flushRecord()).catch(() => !1), e.recordFlushBoundMs ?? oe)) === !0;
}
var se = [1000, 3000],
  ae = 1e4;
function I(e, artifact_line, r) {
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
  I(e, _St(layer, r), n), K("warn", "workflow_launch_failed", {
    layer: layer
  }), i("tengu_workflow_launch_event", {
    ok: !1,
    layer: c(layer)
  });
}
function D(e, t, r, n) {
  Y(e, t, r, n), m("workflow_event_launch", t);
}
function W(e, eventUuid, r, n, s) {
  D(e, r, n, s), e.state.ledger.set(eventUuid, {
    eventUuid: eventUuid,
    outcome: "failed-final"
  }), e.ackProcessed(eventUuid);
}
async function x(e, t, r, n, s) {
  let u = t.event_uuid;
  e.state.ledger.set(u, {
    eventUuid: u,
    outcome: "failed-final"
  }), e.persistRecord({
    ...t,
    settled: !0
  }), await O(e), D(e, r, n, s), e.ackProcessed(u);
}
async function J(e, t, r, n, s) {
  let {
      ledger: ledger
    } = e.state,
    l = t.eventUuid,
    d = (s?.attempts ?? 0) + 1,
    L = settled => ({
      event_uuid: l,
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
    w = async (g, A) => {
      if (h(), s) {
        await x(e, s, g, A, n);
        return;
      }
      W(e, l, g, A, n);
    },
    v = Date.now(),
    R = e.fetchRetryWindowMs ?? ae,
    k = await e.fetchBundle(r.filestorePath),
    attempt = 1;
  for (let g of e.fetchRetryDelaysMs ?? se) {
    if (k.ok || k.gated || Date.now() - v + g >= R) break;
    attempt++, K("warn", "workflow_launch_bundle_fetch_retry", {
      attempt: attempt
    }), await Q(g), k = await e.fetchBundle(r.filestorePath);
  }
  if (!k.ok) {
    if (k.gated) {
      await w("bundle-fetch", `bundle fetch gated: ${k.error}`);
      return;
    }
    if (ledger.delete(l), h(), s) {
      K("warn", "workflow_launch_rescue_fetch_failed", {}), p("workflow_event_launch", "rescue_fetch_transient");
      return;
    }
    Y(e, "bundle-fetch", `bundle fetch failed: ${k.error}`, n), p("workflow_event_launch", "bundle_fetch_transient");
    return;
  }
  let buf_2 = k.buf;
  if (buf_2.byteLength > S || buf_2.byteLength !== r.bundleSizeBytes) {
    await w("payload-digest-mismatch", `staged bundle is ${buf_2.byteLength} bytes, event pinned ${r.bundleSizeBytes}`);
    return;
  }
  if (!te(buf_2, r.artifactSha256)) {
    await w("payload-digest-mismatch", "staged bundle sha256 does not match the artifact_sha256 the event pinned");
    return;
  }
  let b = re(buf_2);
  if (!b.ok) {
    await w("launch-payload", b.error);
    return;
  }
  let args;
  if (b.argsJson !== "") try {
    args = JSON.parse(b.argsJson);
  } catch (error) {
    await w("args-parse", `args_json is not valid JSON: ${error instanceof Error ? error.message : String(error)}`);
    return;
  }
  e.state.firstLaunch = t, e.persistRecord(L(!1));
  let j = await O(e);
  if (s && !j) {
    ledger.delete(l), h(), K("warn", "workflow_launch_rescue_uncounted", {}), p("workflow_event_launch", "rescue_record_unconfirmed");
    return;
  }
  let N = C();
  _Tn.of(e.host).stash(N, {
    script: b.script,
    args: args,
    postResultLine: g => I(e, g, n),
    onRunSettled: async g => {
      if (t.outcome = g ? "executed" : "run-failed", e.persistRecord(L(!0)), !(await O(e))) e.persistRecord(L(!0));
    }
  }), e.prependUserMessage(`/workflow-launch-exec ${N}`), e.ackProcessed(l), i("tengu_workflow_launch_event", {
    ok: !0,
    attempt: d
  }), _("workflow_event_launch"), K("info", "workflow_launch_dispatched", {
    attempt: d
  });
}
function X(e, t) {
  let r = {
    eventUuid: t.event_uuid,
    outcome: "failed-final"
  };
  e.state.ledger.set(t.event_uuid, r), e.state.firstLaunch ??= r, e.persistRecord({
    ...t,
    settled: !0
  }), e.ackProcessed(t.event_uuid), K("warn", "workflow_launch_attempts_spent", {
    attempts: t.attempts
  }), p("workflow_event_launch", "attempts_spent");
}
async function hKo(e, t) {
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
  if (!t.isRemoteTransport() || !a.CLAUDE_CODE_REMOTE || !a.CLAUDE_CODE_REMOTE_SESSION_ID) {
    D(t, "not-remote-session", "workflow_launch received outside a remote (CCR) session", {
      launchUuid: r
    });
    return;
  }
  let u = T(e);
  if (!u.ok) {
    W(t, r, "launch-payload", u.error, {
      launchUuid: r
    });
    return;
  }
  let pointer = u.pointer,
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
      ledger_2.set(r, k), t.state.firstLaunch ??= k, t.ackProcessed(r), K("info", "workflow_launch_redelivery_settled", {});
      return;
    }
    if (h.attempts >= z) {
      X(t, h);
      return;
    }
  }
  let w = b7e({
    serverAuthoredCarrier: !0
  });
  if (w) {
    if (h) {
      await x(t, h, "policy-gate", w, d);
      return;
    }
    W(t, r, "policy-gate", w, d);
    return;
  }
  let {
    firstLaunch: firstLaunch
  } = t.state;
  if (firstLaunch && firstLaunch.eventUuid !== r) {
    W(t, r, "launch-protocol", "a second distinct workflow_launch event arrived in this session; at most one launch per session is permitted", d);
    return;
  }
  let R = {
    eventUuid: r,
    outcome: "pending"
  };
  ledger_2.set(r, R), t.state.firstLaunch = R, await J(t, R, pointer, d, h);
}
async function yKo(e) {
  let restoredRecord_3 = e.state.restoredRecord;
  if (!restoredRecord_3) return;
  if (!e.isRemoteTransport() || !a.CLAUDE_CODE_REMOTE || !a.CLAUDE_CODE_REMOTE_SESSION_ID) return;
  if (restoredRecord_3.settled) {
    K("info", "workflow_launch_resume_skipped", {
      reason: "settled"
    });
    return;
  }
  let r = e.getWorkerEpoch();
  if (r === void 0 || restoredRecord_3.dispatched_epoch >= r) {
    K("info", "workflow_launch_resume_skipped", {
      reason: "not_a_later_epoch"
    });
    return;
  }
  let n = e.getDispatchedDigest();
  if (n === void 0 || !/^[0-9a-f]{64}$/.test(n) || n !== restoredRecord_3.artifact_sha256) {
    K("info", "workflow_launch_resume_skipped", {
      reason: n === void 0 ? "no_server_digest" : "digest_differs"
    });
    return;
  }
  let {
    ledger: ledger_3
  } = e.state;
  if (ledger_3.has(restoredRecord_3.event_uuid) || e.state.firstLaunch) return;
  if (restoredRecord_3.attempts >= z) {
    X(e, restoredRecord_3);
    return;
  }
  let u = {
      launchUuid: restoredRecord_3.event_uuid,
      artifactSha256: restoredRecord_3.artifact_sha256
    },
    l = b7e({
      serverAuthoredCarrier: !0
    });
  if (l) {
    await x(e, restoredRecord_3, "policy-gate", l, u);
    return;
  }
  let d = {
    eventUuid: restoredRecord_3.event_uuid,
    outcome: "pending"
  };
  ledger_3.set(restoredRecord_3.event_uuid, d), e.state.firstLaunch = d, K("info", "workflow_launch_resuming", {
    attempt: restoredRecord_3.attempts + 1
  }), await J(e, d, {
    workflowName: restoredRecord_3.workflow_name,
    filestorePath: restoredRecord_3.filestore_path,
    artifactSha256: restoredRecord_3.artifact_sha256,
    bundleSizeBytes: restoredRecord_3.bundle_size_bytes
  }, u, restoredRecord_3);
}
export { fKo, mKo, gKo, _Tn, hKo, yKo };