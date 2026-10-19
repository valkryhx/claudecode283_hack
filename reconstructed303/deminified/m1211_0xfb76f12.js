// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { c, pe } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { Ve, x, d, gre } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Y, je } from "B:/~BUN/root/chunk-89mss1tj.js";
import { F } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { Ga, O } from "B:/~BUN/root/chunk-nggrknsv.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { Es } from "B:/~BUN/root/chunk-ek28wssa.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { jh, Dl, er } from "B:/~BUN/root/chunk-k9zm82w3.js";
import { fn } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { r2, Gt } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { ea } from "B:/~BUN/root/chunk-53tmhe2j.js";
import { Qj } from "B:/~BUN/root/chunk-r4y1700s.js";
import { uee, pee, Sut, $As } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { wFe, Q$ } from "B:/~BUN/root/chunk-b3gbz2vj.js";
import { k3t } from "B:/~BUN/root/chunk-jeaqfaa1.js";
import { Dme, Uin } from "B:/~BUN/root/chunk-rsxy354n.js";
import { FS, jae, UH, _Ie } from "B:/~BUN/root/chunk-gygbhz84.js";
import { r4e, xz, hto } from "B:/~BUN/root/chunk-cw50jvp0.js";
import { rdo, Rgs, j0, Vat, cxe } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { gur, tRt, nue, Nas, uto } from "B:/~BUN/root/chunk-ryerxfb6.js";
import { _On } from "B:/~BUN/root/chunk-fs7n93f3.js";
import { ito, d3t, uur } from "B:/~BUN/root/chunk-t6vx98s4.js";
import { dto, SOn as ifNoneStood_2, wOn as otherwise, vOn as ifNoneStood, fur, mur, cto } from "B:/~BUN/root/chunk-63t1nrpc.js";
import { bFe } from "B:/~BUN/root/chunk-z4qc3s7s.js";
import { bOn } from "B:/~BUN/root/chunk-r2pnjptx.js";
import { c3t as unauthorized, Mas } from "B:/~BUN/root/chunk-zqb056nq.js";
import { N0 } from "B:/~BUN/root/chunk-a5n8jkcn.js";
import { sue } from "B:/~BUN/root/chunk-enq05gxv.js";
import { jM } from "B:/~BUN/root/chunk-4qc55bxf.js";
import { o, oe, T, u, _t } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { createHash as qe } from "crypto";
var Ge = Buffer.from("anthropic.ccr.session_synced_file_put.v1", "utf8"),
  We = Buffer.from("anthropic.ccr.session_synced_file_upload_begin.v1", "utf8"),
  Ye = Buffer.from("anthropic.ccr.session_synced_file_upload_commit.v1", "utf8"),
  ge = Buffer.from([0]),
  Ke = 32;
function Xe({
  sessionUuid: sessionUuid,
  boundDeviceUuid: boundDeviceUuid,
  issuedAtMs: issuedAtMs,
  contentSha256: contentSha256,
  path: path,
  ifMatchSha256: ifMatchSha256
}) {
  if (contentSha256.length !== Ke) throw Error("syncedFileRequestSigner: the content hash is not 32 bytes");
  return ee(Ge, {
    sessionUuid: sessionUuid,
    boundDeviceUuid: boundDeviceUuid,
    issuedAtMs: issuedAtMs,
    fixed: [contentSha256],
    strings: [path, ifMatchSha256 ?? ""]
  });
}
function Qe({
  sessionUuid: sessionUuid_2,
  boundDeviceUuid: boundDeviceUuid_2,
  issuedAtMs: issuedAtMs_2,
  sizeBytes: sizeBytes,
  path: path_2,
  ifMatchSha256: ifMatchSha256_2
}) {
  if (!Number.isSafeInteger(sizeBytes) || sizeBytes < 0) throw Error("syncedFileRequestSigner: the size is not a byte count");
  return ee(We, {
    sessionUuid: sessionUuid_2,
    boundDeviceUuid: boundDeviceUuid_2,
    issuedAtMs: issuedAtMs_2,
    fixed: [_e(sizeBytes)],
    strings: [path_2, ifMatchSha256_2 ?? ""]
  });
}
function Ze({
  sessionUuid: sessionUuid_3,
  boundDeviceUuid: boundDeviceUuid_3,
  issuedAtMs: issuedAtMs_3,
  path: path_3,
  uploadPath: uploadPath,
  contentSha256: contentSha256_2,
  ifMatchSha256: ifMatchSha256_3
}) {
  return ee(Ye, {
    sessionUuid: sessionUuid_3,
    boundDeviceUuid: boundDeviceUuid_3,
    issuedAtMs: issuedAtMs_3,
    fixed: [],
    strings: [path_3, uploadPath, contentSha256_2, ifMatchSha256_3 ?? ""]
  });
}
function ee(e, {
  sessionUuid: sessionUuid_4,
  boundDeviceUuid: boundDeviceUuid_4,
  issuedAtMs: issuedAtMs_4,
  fixed: fixed,
  strings: strings
}) {
  if (strings.some(item => item.includes("\x00"))) throw Error("syncedFileRequestSigner: NUL in a signed field");
  return Buffer.concat([e, ge, Q$(sessionUuid_4), Q$(boundDeviceUuid_4), _e(issuedAtMs_4), ...fixed, ...strings.flatMap(item => [Buffer.from(item, "utf8"), ge])]);
}
function _e(e) {
  let n = Buffer.alloc(8);
  return n.writeBigUInt64BE(BigInt(e)), n;
}
function Je({
  sessionUuid: sessionUuid_5,
  deviceUuid: n,
  key: key,
  now = Date.now
}) {
  let kid = wFe + n,
    s = async S => {
      let b = now(),
        w = await key.sign(S(b));
      return {
        device_attestation: {
          kid: kid,
          signature: w.toString("base64")
        },
        device_attestation_issued_at: new Date(b).toISOString()
      };
    },
    h = {
      sessionUuid: sessionUuid_5,
      boundDeviceUuid: n
    };
  return {
    sign: ({
      content: content,
      path: path_4,
      ifMatchSha256: ifMatchSha256_4
    }) => s(issuedAtMs_5 => Xe({
      ...h,
      issuedAtMs: issuedAtMs_5,
      contentSha256: qe("sha256").update(content).digest(),
      path: path_4,
      ifMatchSha256: ifMatchSha256_4
    })),
    signBegin: ({
      path: path_5,
      sizeBytes: sizeBytes_2,
      ifMatchSha256: ifMatchSha256_5
    }) => s(issuedAtMs_6 => Qe({
      ...h,
      issuedAtMs: issuedAtMs_6,
      sizeBytes: sizeBytes_2,
      path: path_5,
      ifMatchSha256: ifMatchSha256_5
    })),
    signCommit: ({
      path: path_6,
      uploadPath: uploadPath_2,
      contentSha256: contentSha256_3,
      ifMatchSha256: ifMatchSha256_6
    }) => s(issuedAtMs_7 => Ze({
      ...h,
      issuedAtMs: issuedAtMs_7,
      path: path_6,
      uploadPath: uploadPath_2,
      contentSha256: contentSha256_3,
      ifMatchSha256: ifMatchSha256_6
    }))
  };
}
async function he({
  sessionId: sessionId,
  boundDeviceUuid: boundDeviceUuid_5,
  credentials: credentials,
  held: held
}) {
  let sessionUuid_6 = jM(sessionId);
  if (sessionUuid_6 === void 0) return W("bad_session_id");
  let s = await sue(credentials).catch(() => {
    return;
  });
  if (s?.status !== "resolved") return W("no_account");
  let deviceUuid = boundDeviceUuid_5.toLowerCase(),
    S = await k3t(s.accountUuid, credentials, held?.rowPk.toLowerCase() === deviceUuid ? held : void 0);
  if (S.status !== "loaded") return W(S.status);
  if (S.rowPk.toLowerCase() !== deviceUuid) return W("bound_elsewhere");
  return g("client_request_signer"), Je({
    sessionUuid: sessionUuid_6,
    deviceUuid: deviceUuid,
    key: S.key
  });
}
function W(e) {
  p("client_request_signer", e);
  return;
}
import { posix as Se } from "path";
var K = 30000,
  be = "synced_file_limit_exceeded",
  et = "synced_file_too_large_inline",
  te = f(() => u({
    error: u({
      type: o().optional(),
      reason: o().optional(),
      resource: o().optional(),
      sub_reason: oe().optional()
    })
  }));
function tt(e) {
  if (e !== Se.normalize(e) || e.includes("\\") || e.includes("\x00")) return !1;
  return !Se.isAbsolute(e) && (e === uee || e.startsWith(`${uee}/`));
}
function ne(e) {
  if (tt(e)) return !1;
  return l(new x(`lane path escapes the lane root: ${e}`, "lane path escapes the lane root")), !0;
}
function V(e) {
  return `${r4e}/${e}`;
}
function re(e) {
  return e >= 200 && e < 300;
}
function ie(e, status) {
  return e.kind === "failed" ? {
    ...e,
    status: status
  } : e;
}
function nt(e) {
  return e === "compliance_restricted" || e === "zdr_restricted";
}
function G(e) {
  if (e === "aborted") return {
    kind: "aborted"
  };
  if (e === "failed") return {
    kind: "failed"
  };
  if (e === "timed_out") return {
    kind: "failed",
    timedOut: !0
  };
  if (e === "too_large") return {
    kind: "failed",
    tooLarge: !0
  };
  if (e === "gated") return {
    kind: "lane_unavailable"
  };
  if (e === "no_auth") return {
    kind: "unauthorized"
  };
  if (e === "unsigned") return {
    kind: "lane_unavailable",
    cause: "device_key_unavailable"
  };
  if (e.status === 501 || e.status === 404) return {
    kind: "lane_unavailable"
  };
  let n = te().safeParse(e.data).data?.error;
  if (e.status === 400 && n?.reason === hto) return {
    kind: "lane_unavailable",
    cause: "switched_off_by_anthropic"
  };
  if (e.status === 400 && n?.reason === et) return {
    kind: "failed",
    tooLarge: !0
  };
  if (e.status === 403 && nt(n?.resource)) return {
    kind: "lane_unavailable",
    cause: "compliance_restricted"
  };
  if (e.status === 403 && n?.resource === "untrusted_device" && n.sub_reason === "synced_file_write_unsigned") return {
    kind: "unauthorized",
    cause: "write_signature_refused"
  };
  if (e.status === 401 || e.status === 403) return {
    kind: "unauthorized"
  };
  return {
    kind: "failed"
  };
}
var ae = 3;
var ot = 300,
  it = 4,
  at = 131072,
  st = 1e5;
function ke(e) {
  let n = at / it;
  return Math.min(st, Math.max(K, Math.ceil(e / n * 1000)));
}
var maxBodyLength = 67108864;
function ut(e) {
  return Math.ceil(e * 4 / 3) + 1024;
}
var ct = {
  beginUpload: async () => ({
    kind: "lane_unavailable"
  }),
  commitUpload: async () => ({
    kind: "lane_unavailable"
  }),
  getDownload: async () => ({
    kind: "lane_unavailable"
  })
};
class X extends Error {
  constructor() {
    super("this machine cannot sign the request as the bound device");
  }
}
var Pe = 64,
  lt = f(() => u({
    content_sha256: o().length(Pe)
  })),
  ft = f(() => u({
    content: o(),
    content_sha256: o().length(Pe)
  }));
function we(e) {
  return typeof e === "object" && e !== null && "code" in e && e.code === "ECONNABORTED";
}
function mt(e, n) {
  if (ne(e)) return "failed";
  if (Array.from(V(e)).length > $As) return "path_too_long";
  if (n.length > xz) return "too_large";
  return null;
}
function Ee({
  sessionId: sessionId_2,
  credentials: credentials_2,
  signer: signer,
  signedOnly = !1
}) {
  jh(sessionId_2, "seed upload session id");
  let session_id = Dl(sessionId_2),
    s = null,
    h;
  function S(E) {
    return s ??= _Ie(E).then(v => {
      if (v !== void 0) h = v;
      return v;
    }, () => {
      return;
    }).finally(() => {
      s = null;
    }), s;
  }
  let b = null,
    w = !1;
  async function R(E) {
    let v = await signer?.catch(() => {
      return;
    });
    if (v === void 0) {
      if (signedOnly) throw new X();
      return;
    }
    try {
      return await E(v);
    } catch (error) {
      if (!w) w = !0, t(`lane: request not signed: ${d(error)}`, {
        level: "warn"
      }), p("client_request_signer", "sign_failed");
      if (signedOnly) throw new X();
      return;
    }
  }
  async function H(E, v, A = {}) {
    let D = A.heedsRetryAfter ? b?.trackRequest() : void 0,
      B = await U(E, v, A, D);
    return D?.noteSettled(B), B;
  }
  async function U(E, v, {
    retryTimeouts = !1,
    attempts = ae
  }, B) {
    let I = !1;
    for (let y = 0;; y++) {
      if (N0(v)) return "aborted";
      h ??= await FS().catch(() => {
        return;
      });
      let C = h,
        k;
      try {
        k = await E(C === void 0 ? {} : {
          "X-Trusted-Device-Token": C
        });
      } catch (error) {
        if (error instanceof X) return "unsigned";
        if (N0(v)) return "aborted";
        if (await r2(credentials_2)) return "no_auth";
        if (gre(error)) return t("lane: the response is larger than this request accepts; not retried", {
          level: "warn"
        }), "too_large";
        if ((retryTimeouts || !we(error)) && y + 1 < attempts) {
          await Y(ve(y), v);
          continue;
        }
        if (we(error)) return t("lane: request timed out", {
          level: "warn"
        }), "timed_out";
        return l(error), "failed";
      }
      if (!k.ok) return k.reason === "no-auth" ? "no_auth" : "gated";
      if ((k.status === 429 || k.status >= 500 && k.status !== 501) && y + 1 < attempts) {
        let L = ve(y);
        await Y((k.status === 429 ? B?.takeWaitMs(y, k.response?.headers?.["retry-after"], L) : void 0) ?? L, v);
        continue;
      }
      let M = k.status === 403 && !I ? Dme(k.data) : void 0;
      if (M !== void 0 && Uin(M)) {
        I = !0;
        let L = await S(C);
        if (L !== void 0 && L !== C) continue;
      } else if (M !== void 0) jae("lane:", M), h = void 0, UH();
      return {
        status: k.status,
        data: k.data
      };
    }
  }
  async function putStoreRow(E, v, {
    ifMatchSha256: ifMatchSha256_7,
    signal: signal,
    shouldAttemptOnceIfLong = !1
  } = {}) {
    let kind = mt(E, v);
    if (kind !== null) return {
      kind: kind
    };
    if (ifMatchSha256_7 === "") return {
      kind: "failed"
    };
    let y = ke(Re(v.length));
    return pt(await P(E, v, ifMatchSha256_7, signal, shouldAttemptOnceIfLong && y > K ? 1 : ae, y));
  }
  function P(E, content_2, A, signal_2, attempts_2, timeout) {
    let path_7 = V(E);
    return H(async headers => Gt.put(`/v1/code/sessions/${session_id}/synced_file`, {
      session_id: session_id,
      path: path_7,
      content: content_2.toString("base64"),
      ...(A !== void 0 && {
        if_match_sha256: A
      }),
      ...(await R(k => k.sign({
        content: content_2,
        path: path_7,
        ifMatchSha256: A
      })))
    }, {
      auth: "teleport-org",
      credentials: credentials_2,
      headers: headers,
      timeout: timeout,
      validateStatus: () => !0,
      signal: signal_2,
      maxBodyLength: maxBodyLength
    }), signal_2, {
      attempts: attempts_2
    });
  }
  async function getStoreRow(E, signal_3, A = 0, D = xz) {
    if (ne(E)) return {
      kind: "failed"
    };
    let uRLSearchParams = new URLSearchParams({
        path: V(E)
      }),
      timeout_2 = ke(Re(A)),
      y = await H(headers_2 => Gt.get(`/v1/code/sessions/${session_id}/file?${uRLSearchParams.toString()}`, {
        auth: "teleport-org",
        credentials: credentials_2,
        headers: headers_2,
        timeout: timeout_2,
        validateStatus: () => !0,
        signal: signal_3,
        maxContentLength: ut(D)
      }), signal_3, {
        attempts: timeout_2 > K ? 1 : ae
      });
    if (typeof y === "string") return G(y);
    if (re(y.status)) {
      let C = ft().safeParse(y.data);
      if (!C.success) return {
        kind: "failed",
        status: y.status
      };
      let content_3 = Buffer.from(C.data.content, "base64");
      return content_3.length > D ? {
        kind: "failed",
        status: y.status,
        tooLarge: !0
      } : {
        kind: "ok",
        content: content_3,
        etag: C.data.content_sha256
      };
    }
    if (y.status === 404) return {
      kind: "not_found"
    };
    return ie(G(y), y.status);
  }
  return {
    putStoreRow: putStoreRow,
    getStoreRow: getStoreRow,
    ...ct
  };
}
function pt(e) {
  if (typeof e === "string") return G(e);
  if (re(e.status)) {
    let n = lt().safeParse(e.data);
    return n.success ? {
      kind: "ok",
      etag: n.data.content_sha256
    } : {
      kind: "failed",
      status: e.status
    };
  }
  if (e.status === 409) return {
    kind: "conflict"
  };
  if (e.status === 400) {
    let n = te().safeParse(e.data),
      {
        type: type,
        reason: reason
      } = n.success ? n.data.error : {
        type: void 0,
        reason: void 0
      };
    if (t(`lane: put rejected (400): type=${type} reason=${reason}`), reason === be) return {
      kind: "lane_full"
    };
  }
  return ie(G(e), e.status);
}
function Re(e) {
  return Math.ceil(e / 3) * 4;
}
function ve(e) {
  return ot * 2 ** e * (0.5 + Math.random() / 2);
}
var gt = 1e4;
async function se(e, n) {
  return Qj(Vat(e).enabledNow()) && cxe(e) && (!j0(e) || (await Promise.resolve().then(() => n?.() ?? !1).catch(() => !1)));
}
async function Ae({
  client: client,
  pack: pack,
  generation: generation,
  uploaded: uploaded,
  status: status_2,
  launchConsent: launchConsent,
  isProjectStillSynced: isProjectStillSynced,
  signal: signal_4,
  onReadBack: onReadBack,
  deadlineMs = gt
}) {
  if (uploaded.kind !== "uploaded" || !wt(uploaded.outcome) || N0(signal_4) || !(await se(launchConsent, isProjectStillSynced))) return "skipped";
  let abortController = new AbortController(),
    H = () => abortController.abort();
  signal_4?.addEventListener("abort", H, {
    once: !0
  });
  try {
    let U,
      P = (await je(ht({
        client: client,
        pack: pack,
        generation: generation,
        uploaded: uploaded.outcome,
        signal: abortController.signal,
        onRead: A => {
          U = A;
        }
      }), deadlineMs)) ?? U ?? {
        verdict: "unreadable",
        heal: "none",
        got: "deadline",
        ready: null
      };
    if (N0(signal_4) || P.got === "aborted") return "skipped";
    let deny_or_ask_rules_missing = bt(P.ready, generation, pack);
    i("tengu_home_seed_ready_seen", {
      outcome: c(P.verdict),
      got: c(P.got),
      heal: c(P.heal),
      ready_outcome: c(P.ready?.outcome ?? "none"),
      deny_or_ask_rules_missing: deny_or_ask_rules_missing,
      generation: generation
    });
    let E = P.verdict === "applied_before_first_ask" || P.verdict === "applied_late" ? {
      verdict: P.verdict,
      left: Rt(P.ready, yt(pack), deny_or_ask_rules_missing)
    } : {
      verdict: P.verdict,
      left: null
    };
    onReadBack?.(E);
    let v = vt(P.verdict, uploaded.outcome, E.left, uploaded.settingsRefused !== void 0, deny_or_ask_rules_missing);
    if (v !== null) status_2.publish(v.text, v.level);
    return P.verdict;
  } catch (error) {
    if (Ve(error) || N0(signal_4)) return "skipped";
    return l(error), "unreadable";
  } finally {
    abortController.abort(), signal_4?.removeEventListener("abort", H);
  }
}
async function ht({
  client: client_2,
  pack: pack_2,
  generation: generation_2,
  uploaded: uploaded_2,
  signal: signal_5,
  onRead: onRead
}) {
  let h = St(await client_2.getStoreRow(Sut, signal_5));
  switch (h.kind) {
    case "aborted":
      return {
        verdict: "unreadable",
        got: "aborted",
        heal: "none",
        ready: null
      };
    case "unreadable":
      return {
        verdict: "unreadable",
        got: h.got,
        heal: "none",
        ready: null
      };
    case "ready":
      return {
        verdict: h.ready.generation < generation_2 ? uploaded_2 === "deadline" ? "not_seen" : "behind" : h.ready.generation !== generation_2 ? "stale" : kt(h.ready) ? "not_applied" : h.ready.appliedBeforeFirstAsk ? "applied_before_first_ask" : "applied_late",
        got: "ready",
        heal: "none",
        ready: h.ready
      };
    case "absent":
      {
        if (uploaded_2 === "deadline") return {
          verdict: "not_seen",
          got: "absent",
          heal: "none",
          ready: null
        };
        return onRead({
          verdict: "not_seen",
          got: "absent",
          heal: "failed",
          ready: null
        }), {
          verdict: "not_seen",
          got: "absent",
          heal: (await client_2.putStoreRow(pee, pack_2, {
            signal: signal_5
          })).kind === "ok" ? "ok" : "failed",
          ready: null
        };
      }
  }
}
function St(e) {
  switch (e.kind) {
    case "ok":
      {
        let n = _On(e.content);
        return n.ok ? {
          kind: "ready",
          ready: n.ready
        } : {
          kind: "unreadable",
          got: n.reason
        };
      }
    case "not_found":
      return {
        kind: "absent"
      };
    case "aborted":
      return {
        kind: "aborted"
      };
    case "failed":
    case "lane_unavailable":
    case "unauthorized":
      return {
        kind: "unreadable",
        got: e.kind
      };
  }
}
function yt(e) {
  let n = nue(e);
  return n.ok && n.pack.settings !== null;
}
function bt(e, n, r) {
  if (e?.generation !== n || e.outcome !== "partial" || e.settingsWritten) return !1;
  let a = nue(r);
  return a.ok && a.pack.settings !== null && uto(a.pack.settings) !== null;
}
function kt(e) {
  return e.outcome === "partial" && e.filesApplied === 0 && !e.settingsWritten;
}
function wt(e) {
  switch (e) {
    case "sent":
    case "unchanged":
    case "conflict_resolved":
    case "deadline":
      return !0;
    case "raced":
    case "not_forwarded_at_create":
    case "lane_full":
    case "unavailable":
    case "unauthorized":
    case "failed":
    case "aborted":
      return !1;
  }
}
function Rt(e, n, r) {
  if (e === null || e.outcome !== "partial") return null;
  return !r && e.filesRefused > 0 ? "files" : n && !e.settingsWritten ? "settings" : "part";
}
function vt(e, n, r, a, _) {
  let s = a ? "the rest of your settings" : "your settings",
    h = r === null ? "" : ` (${bOn[r]})`,
    S = n === "deadline" || _;
  switch (e) {
    case "applied_before_first_ask":
      return {
        text: `The cloud session applied ${s} before its first reply${h}`,
        level: S ? "info" : "debug"
      };
    case "applied_late":
      return {
        text: `${Ga(s)} reached the cloud session after its first reply${h}; they apply from the next turn (no /clear needed)`,
        level: r === null || S ? "info" : "debug"
      };
    case "not_applied":
      return {
        text: `The cloud session could not apply ${s} (everything it was sent was skipped there)`,
        level: S ? "warning" : "debug"
      };
    case "not_seen":
      return n === "deadline" ? {
        text: `The cloud session has not confirmed ${s} (the upload may not have reached it in time)`,
        level: "warning"
      } : {
        text: `The cloud session has not confirmed ${s} and may be running without them`,
        level: "info"
      };
    case "behind":
      return {
        text: "The cloud session still ran with the settings it had for this reply; the ones just sent apply from the next turn (no /clear needed)",
        level: "info"
      };
    case "stale":
      return {
        text: `The cloud session confirmed a different copy of ${s} than the one just sent`,
        level: "warning"
      };
    case "unreadable":
      return {
        text: `The cloud session's answer about ${s} could not be read`,
        level: "warning"
      };
  }
}
var Pt = 15000,
  Et = 30000;
function oto(e) {
  return At(e).pendingSeed(Promise.resolve());
}
function At({
  sessionId: sessionId_3,
  plan: plan,
  bound: bound,
  boundDeviceUuid: boundDeviceUuid_6,
  held: held_2,
  trigger: trigger,
  launchConsent: launchConsent_2,
  isProjectStillSynced: isProjectStillSynced_2,
  signal: signal_6,
  credentials: credentials_3,
  storageV5: storageV5,
  client: client_3,
  deadlineMs: deadlineMs_2 = Pt,
  planDeadlineMs = Et
}) {
  let status_3 = bFe(),
    N = Promise.resolve(boundDeviceUuid_6).catch(() => {
      return;
    }),
    E = client_3 === void 0 ? void 0 : Promise.resolve(client_3),
    getStoreClient = () => E ??= N.then(boundDeviceUuid_7 => Ee({
      sessionId: sessionId_3,
      credentials: credentials_3,
      ...(boundDeviceUuid_7 !== void 0 && {
        signer: he({
          sessionId: sessionId_3,
          boundDeviceUuid: boundDeviceUuid_7,
          credentials: credentials_3,
          ...(held_2 !== void 0 && {
            held: held_2
          })
        }),
        signedOnly: !0
      })
    })),
    A = je(Promise.resolve(plan).catch(y => {
      if (!Ve(y)) l(y);
      return {
        kind: "none",
        reason: Ve(y) ? "aborted" : "failed"
      };
    }), planDeadlineMs).then(y => y ?? {
      kind: "none",
      reason: "too_slow"
    }),
    D;
  A.then(y => {
    D = y.kind === "ready" ? y.description : null;
  });
  let B = A.then(plan_2 => plan_2.kind === "ready" ? {
    plan: plan_2,
    attempts: Ot({
      sessionId: sessionId_3,
      storageV5: storageV5,
      plan: plan_2,
      bound: bound,
      trigger: trigger,
      signal: signal_6,
      getStoreClient: getStoreClient,
      deadlineMs: deadlineMs_2
    }, () => se(launchConsent_2, isProjectStillSynced_2))
  } : {
    plan: plan_2,
    attempts: null
  });
  return {
    ensureUploaded: y => B.then(({
      attempts: attempts_3
    }) => attempts_3?.ensureUploaded(y) ?? "done"),
    pendingSeed: y => {
      let C = B.then(({
        plan: plan_3,
        attempts: attempts_4
      }) => (attempts_4 === null ? Promise.resolve().then(() => {
        for (let M of jt(plan_3, trigger, planDeadlineMs)) status_3.publish(M, $t(plan_3));
        return de(Ct(plan_3.reason, trigger), trigger, "plan_"), {
          outcome: {
            kind: "none",
            reason: plan_3.reason,
            ...Q(plan_3)
          },
          written: null
        };
      }) : attempts_4.endedOnce(y).then(M => Ut(status_3, {
        sessionId: sessionId_3,
        plan: plan_3,
        bound: bound,
        trigger: trigger
      }, M))).catch(M => (l(M), de({
        is: "bad",
        code: "unexpected"
      }, trigger, ""), {
        outcome: plan_3.kind === "ready" ? {
          kind: "uploaded",
          outcome: "failed",
          summary: plan_3.summary,
          bound: bound,
          ...Te(plan_3),
          ...Q(plan_3)
        } : {
          kind: "none",
          reason: plan_3.reason,
          ...Q(plan_3)
        },
        written: null
      })));
      return Mas({
        completion: C.then(({
          outcome: outcome
        }) => outcome),
        status: status_3,
        description: () => D,
        afterFirstReply: (signal_7, onReadBack_2) => C.then(({
          outcome: M,
          written: written
        }) => written === null ? "skipped" : getStoreClient().then(client_4 => Ae({
          client: client_4,
          pack: written.pack,
          generation: written.generation,
          uploaded: M,
          status: status_3,
          launchConsent: launchConsent_2,
          isProjectStillSynced: isProjectStillSynced_2,
          signal: signal_7,
          onReadBack: onReadBack_2
        })))
      });
    }
  };
}
function Ot(packUpload, mayStillForwardNow) {
  let latest = Le(packUpload, 1),
    a = {
      packUpload: packUpload,
      mayStillForwardNow: mayStillForwardNow,
      ended: Promise.withResolvers(),
      isEnded: !1,
      attemptsMade: 1,
      latest: latest,
      call: void 0
    };
  return a.ended.promise.catch(() => {}), Ce(a, latest, null), {
    endedOnce: _ => (_.then(() => (a.isEnded = !0, a.latest)).then(s => le(a, s), s => fe(a, s)), a.ended.promise),
    ensureUploaded: _ => a.call ??= Ht(a, _).finally(() => {
      a.call = void 0;
    })
  };
}
function le(e, n) {
  e.isEnded = !0, e.ended.resolve(n);
}
function fe(e, n) {
  e.isEnded = !0, e.ended.reject(n);
}
function Ce(e, n, r) {
  n.then(a => {
    if (!Fe(a)) le(e, De(r, a));
  }, a => fe(e, a));
}
function De(e, n) {
  return e !== null && e.written !== null && n.written === null && n.outcome !== "raced" ? e : n;
}
async function Ht(e, cut) {
  try {
    let r = await e.latest;
    if (e.isEnded) return "done";
    let a = await e.mayStillForwardNow().catch(h => (l(h), !1));
    if (e.isEnded) return "done";
    if (!a) return i("tengu_home_seed_upload_no_longer_allowed", {
      trigger: c(e.packUpload.trigger),
      attempts_made: e.attemptsMade
    }), le(e, r), "done";
    if (cut.aborted) return Oe(r);
    e.attemptsMade += 1;
    let _ = Le({
      ...e.packUpload,
      cut: cut
    }, e.attemptsMade);
    Ce(e, _, r), e.latest = _.then(h => De(r, h)), e.latest.catch(() => {});
    let s = await _;
    return Fe(s) ? Oe(s) : "done";
  } catch (error) {
    return fe(e, error), "done";
  }
}
function Oe({
  outcome: outcome_2,
  cause: cause,
  httpStatus: httpStatus
}) {
  return {
    kind: "failed",
    ...(httpStatus !== void 0 && httpStatus >= 400 && {
      httpStatus: httpStatus
    }),
    ...(outcome_2 === "unauthorized" && {
      remedy: cause === "write_signature_refused" ? "clock" : "login"
    })
  };
}
function Fe({
  outcome: outcome_3,
  cause: cause_2,
  isRefusedAsSent: isRefusedAsSent
}) {
  switch (outcome_3) {
    case "deadline":
    case "unauthorized":
      return !0;
    case "unavailable":
      return cause_2 === void 0;
    case "failed":
      return isRefusedAsSent !== !0;
    case "sent":
    case "unchanged":
    case "conflict_resolved":
    case "raced":
    case "not_forwarded_at_create":
    case "lane_full":
    case "aborted":
      return !1;
  }
}
async function Le({
  sessionId: sessionId_4,
  storageV5: storageV5_2,
  plan: plan_4,
  bound: bound_2,
  trigger: trigger_2,
  signal: signal_8,
  cut: cut_2,
  getStoreClient: getStoreClient_2,
  deadlineMs: deadlineMs_3
}, attempt) {
  let R = Date.now(),
    after_failed_create = (attempt === 1 || trigger_2 !== "create") && d3t(sessionId_4)?.tried === !0,
    U = await Ft(getStoreClient_2, plan_4.pack, trigger_2, {
      sessionId: sessionId_4,
      storageV5: storageV5_2
    }, signal_8, cut_2, deadlineMs_3);
  return i("tengu_home_seed_upload", {
    trigger: c(trigger_2),
    outcome: c(U.outcome),
    attempt: attempt,
    bytes: U.written?.pack.length ?? plan_4.pack.length,
    generation: U.generation,
    bound: bound_2,
    row_standing: U.standing === !0,
    allow_rules_cut: U.allowRulesCut ?? 0,
    allow_rules_recorded: d3t(sessionId_4)?.allow.length ?? 0,
    after_failed_create: after_failed_create,
    cause: pe(U.cause),
    duration_ms: Date.now() - R
  }), U;
}
function Ut(e, {
  sessionId: sessionId_5,
  plan: plan_5,
  bound: bound_3,
  trigger: trigger_3
}, {
  outcome: outcome_4,
  written: written_2,
  standing: standing,
  allowRulesCut: allowRulesCut,
  cause: cause_3
}) {
  de(Dt(outcome_4, cause_3), trigger_3, "");
  let R = d3t(sessionId_5);
  return It(e, plan_5, outcome_4, {
    sessionId: sessionId_5,
    trigger: trigger_3,
    bound: bound_3,
    didCreateCarryAllowRules: (R?.allow.length ?? 0) > 0
  }, R?.tried === !0 && standing !== !0 ? !1 : standing ?? !1, allowRulesCut ?? 0, cause_3), {
    outcome: {
      kind: "uploaded",
      outcome: outcome_4,
      summary: plan_5.summary,
      bound: bound_3,
      ...Te(plan_5),
      ...Q(plan_5)
    },
    written: written_2
  };
}
function Q(e) {
  if (e.kind === "none") return {};
  let keptForCredential = mur(e.leftBehind),
    keptAsLinks = cto(e.leftBehind);
  return {
    ...((keptForCredential.claudeMd || keptForCredential.others > 0) && {
      keptForCredential: keptForCredential
    }),
    ...(keptAsLinks.names.length > 0 && {
      keptAsLinks: keptAsLinks
    })
  };
}
function Te(e) {
  let n = e.settings;
  return n === "schema_rejected" || n === "settings_too_large" || n === "settings_unreadable" ? {
    settingsRefused: n
  } : {};
}
function Ct(code, n) {
  switch (code) {
    case "failed":
    case "home_unvettable":
    case "rules_unreadable":
      return {
        is: "bad",
        code: code
      };
    case "nothing_to_send":
    case "too_slow":
      return {
        is: "sad",
        code: code
      };
    case "unbound":
    case "flag_off":
    case "no_consent":
    case "user_settings_disabled":
    case "aborted":
    case "self_hosted_runner":
      return null;
    case "no_project_files":
      return null;
  }
}
function Dt(code_2, n) {
  switch (code_2) {
    case "sent":
    case "unchanged":
    case "conflict_resolved":
      return {
        is: "ok"
      };
    case "aborted":
    case "not_forwarded_at_create":
      return null;
    case "unavailable":
      return {
        is: "sad",
        code: n ?? code_2
      };
    case "lane_full":
    case "unauthorized":
    case "deadline":
    case "raced":
      return {
        is: "sad",
        code: code_2
      };
    case "failed":
      return {
        is: "bad",
        code: code_2
      };
  }
}
function de(e, n, r) {
  if (e === null) return;
  let a = n === "create";
  switch (e.is) {
    case "ok":
      if (g("ccr_home_seed"), a) g("ccr_home_seed_create_upload");
      return;
    case "sad":
      if (p("ccr_home_seed", e.code), a) p("ccr_home_seed_create_upload", `${r}${e.code}`);
      return;
    case "bad":
      if (m("ccr_home_seed", e.code), a) m("ccr_home_seed_create_upload", `${r}${e.code}`);
      return;
  }
}
async function Ft(e, pack_3, r, a, _, s, h) {
  if (N0(_)) return {
    outcome: "aborted",
    generation: 0,
    written: null
  };
  let abortController_2 = new AbortController(),
    b = () => abortController_2.abort();
  _?.addEventListener("abort", b, {
    once: !0
  }), s?.addEventListener("abort", b, {
    once: !0
  });
  try {
    let w = await je(e().then(R => Lt(R, pack_3, r, a, abortController_2.signal)), h);
    if (w === void 0 || w.outcome === "aborted") {
      if (N0(_)) return {
        outcome: "aborted",
        generation: 0,
        written: null
      };
      if (r === "create") return Z(a, pack_3, 1, void 0), {
        outcome: "deadline",
        generation: 0,
        written: {
          pack: pack_3,
          generation: 1
        }
      };
      return {
        outcome: "deadline",
        generation: 0,
        written: null,
        standing: "unknown"
      };
    }
    return w;
  } finally {
    abortController_2.abort(), _?.removeEventListener("abort", b), s?.removeEventListener("abort", b);
  }
}
async function Lt(e, pack_4, r, a, _) {
  if (r !== "create") {
    let h = d3t(a.sessionId);
    if (h === void 0) return {
      outcome: "not_forwarded_at_create",
      generation: 0,
      written: null
    };
    let S = await e.getStoreRow(pee, _);
    if (S.kind !== "ok" && S.kind !== "not_found") return {
      outcome: Ie(S),
      generation: 0,
      written: null,
      standing: "unknown",
      ...J(S)
    };
    let b = Tt(pack_4, h),
      w = generation_3 => uur(a.sessionId, {
        ...h,
        generation: generation_3,
        etag: void 0,
        at: Date.now()
      }, a.storageV5),
      R = S.kind === "ok" ? await Be(e, b.pack, S, _, w) : {
        ...(await He(e, xe(b.pack, h.generation), _, w)),
        standing: "gone"
      };
    if (S.kind === "not_found") i("tengu_home_seed_stored_pack_gone", {
      outcome: c(R.outcome),
      generation: R.generation,
      record_generation: h.generation,
      after_failed_create: h.tried === !0
    });
    if (R.written !== null) uur(a.sessionId, {
      ...h,
      generation: R.generation,
      etag: R.etag,
      at: Date.now()
    }, a.storageV5);
    return b.cut === 0 ? R : {
      ...R,
      allowRulesCut: b.cut
    };
  }
  let s = await He(e, {
    pack: pack_4,
    generation: 1
  }, _, async h => {
    if (h > 1) Z(a, pack_4, h, void 0);
  });
  if (s.written !== null) Z(a, s.written.pack, s.generation, s.etag);else if (s.outcome in ze) Z(a, pack_4, 1, void 0, {
    tried: !0
  });
  return s;
}
async function He(e, {
  pack: pack_5,
  generation: generation_4
}, signal_9, _) {
  await _?.(generation_4);
  let s = await e.putStoreRow(pee, pack_5, {
    signal: signal_9
  });
  if (s.kind !== "conflict") {
    if (s.kind !== "ok") return {
      outcome: Me(s, "sent"),
      generation: 0,
      written: null,
      ...J(s)
    };
    return {
      outcome: "sent",
      generation: generation_4,
      written: {
        pack: pack_5,
        generation: generation_4
      },
      etag: s.etag
    };
  }
  let h = await e.getStoreRow(pee, signal_9);
  if (h.kind !== "ok") return {
    outcome: Ie(h),
    generation: 0,
    written: null,
    standing: !0,
    ...J(h)
  };
  return Be(e, pack_5, h, signal_9, _);
}
function Z(e, n, generation_5, etag, _ = {}) {
  let s = nue(n),
    h = s.ok ? Bt(s.pack.settings) ?? [] : [];
  uur(e.sessionId, {
    generation: generation_5,
    ...(etag !== void 0 && {
      etag: etag
    }),
    ..._,
    allow: h.map(ito),
    at: Date.now()
  }, e.storageV5);
}
async function Be(e, n, r, signal_10, _) {
  let s = Mt(n, r.content);
  await _?.(s.generation);
  let h = await e.putStoreRow(pee, s.pack, {
      ifMatchSha256: r.etag,
      signal: signal_10
    }),
    outcome_5 = h.kind === "conflict" ? "raced" : Me(h, s.unchanged ? "unchanged" : "conflict_resolved");
  return h.kind === "ok" ? {
    outcome: outcome_5,
    generation: s.generation,
    written: {
      pack: s.pack,
      generation: s.generation
    },
    standing: !0,
    ...(h.etag !== void 0 && {
      etag: h.etag
    })
  } : {
    outcome: outcome_5,
    generation: 0,
    written: null,
    standing: !0,
    ...J(h)
  };
}
function J(e) {
  switch (e.kind) {
    case "lane_unavailable":
    case "unauthorized":
      return e.cause !== void 0 ? {
        cause: e.cause
      } : {};
    case "path_too_long":
    case "too_large":
      return {
        isRefusedAsSent: !0
      };
    case "failed":
      return e.status === void 0 ? {} : {
        httpStatus: e.status,
        ...(e.status >= 400 && e.status < 500 && e.status !== 429 && {
          isRefusedAsSent: !0
        })
      };
    default:
      return {};
  }
}
function Tt(pack_6, n) {
  let r = nue(pack_6);
  if (!r.ok) throw Error("the settings pack to re-send does not parse");
  if (r.pack.settings === null || r.pack.settings.permissions === void 0) return {
    pack: pack_6,
    cut: 0
  };
  let a = me().safeParse(r.pack.settings.permissions);
  if (!a.success) throw Error("the settings pack to re-send carries permissions of an unknown shape");
  let allow = a.data.allow;
  if (allow === void 0) return {
    pack: pack_6,
    cut: 0
  };
  let s = new Set(n.allow),
    h = allow.filter(item => s.has(ito(item))),
    cut_3 = allow.length - h.length;
  return cut_3 === 0 ? {
    pack: pack_6,
    cut: cut_3
  } : {
    pack: tRt({
      ...r.pack,
      settings: xt(r.pack.settings, h)
    }),
    cut: cut_3
  };
}
var me = f(() => _t({
  allow: T(o()).optional()
}));
function Bt(e) {
  let n = me().safeParse(e?.permissions);
  return n.success ? n.data.allow : void 0;
}
function xt(e, n) {
  let r = me().safeParse(e.permissions);
  return {
    ...e,
    permissions: {
      ...(r.success ? r.data : {}),
      allow: [...n]
    }
  };
}
function Mt(e, pack_7) {
  let r = nue(e),
    a = nue(pack_7);
  if (r.ok && a.ok) {
    if (tRt({
      ...r.pack,
      generation: a.pack.generation
    }).equals(pack_7)) return {
      pack: pack_7,
      generation: a.pack.generation,
      unchanged: !0
    };
  }
  if (pack_7.equals(e)) return {
    pack: pack_7,
    generation: 1,
    unchanged: !0
  };
  return {
    ...xe(e, Nas(pack_7) ?? 0),
    unchanged: !1
  };
}
function xe(pack_8, n) {
  let r = nue(pack_8);
  if (!r.ok) return {
    pack: pack_8,
    generation: 1
  };
  let generation_6 = Math.min(n + 1, gur);
  return {
    pack: tRt({
      ...r.pack,
      generation: generation_6
    }),
    generation: generation_6
  };
}
function Me(e, n) {
  switch (e.kind) {
    case "ok":
      return n;
    case "conflict":
    case "path_too_long":
    case "too_large":
    case "failed":
      return "failed";
    case "lane_full":
      return "lane_full";
    case "aborted":
      return "aborted";
    case "lane_unavailable":
      return "unavailable";
    case "unauthorized":
      return "unauthorized";
  }
}
function Ie(e) {
  switch (e.kind) {
    case "not_found":
    case "failed":
      return "failed";
    case "aborted":
      return "aborted";
    case "lane_unavailable":
      return "unavailable";
    case "unauthorized":
      return "unauthorized";
  }
}
function It(e, n, r, {
  sessionId: sessionId_6,
  trigger: trigger_4,
  bound: bound_4,
  didCreateCarryAllowRules: didCreateCarryAllowRules
}, S, b, w) {
  let wayOut = r === "unavailable" && w !== "device_key_unavailable" ? "" : ue;
  switch (r) {
    case "sent":
    case "unchanged":
    case "conflict_resolved":
      {
        if (e.publish(r === "unchanged" && trigger_4 !== "create" ? "Settings from this machine are already in this session" : dto({
          ...n.description,
          permissionRules: n.description.permissionRules - b
        }) + (bound_4 ? "" : " (this session cannot run commands on this machine)"), "debug"), b > 0) e.publish(`${b} ${O(b, "permission allow rule")} ${b === 1 ? "stays" : "stay"} on this machine, because ${b === 1 ? "it was" : "they were"} not in the settings prepared when this cloud session was created; a new session takes ${b === 1 ? "it" : "them"}`, "debug");
        let H = fur(n, {
          launch: trigger_4 === "create" ? "create" : didCreateCarryAllowRules ? "reopen_sent" : "reopen_sent_no_allow_recorded",
          settingsFile: ce(n.configHome)
        });
        if (H !== null) e.publish(H, Ne(n));
        return;
      }
    case "aborted":
      return;
    case "deadline":
      e.publish(Ue(S, {
        ifNoneStood: ifNoneStood,
        otherwise: "The cloud session may not have your latest settings",
        why: "sending your settings took too long",
        wayOut: wayOut
      }), "warning");
      return;
    case "raced":
      e.publish(`${ifNoneStood}: another launch of this session, or the session itself, wrote its settings first`, "warning");
      return;
    case "not_forwarded_at_create":
      if (!ea().claim(`home_seed_not_sent_again:${er(sessionId_6)}`)) return;
      e.publish("Settings from this machine were not sent again: this machine has no record of sending them when this session was created (a session started without them, from another machine, by an earlier build, or older than this machine still tracks)", "debug");
      return;
    case "lane_full":
    case "unavailable":
    case "unauthorized":
    case "failed":
      {
        let why = w === "write_signature_refused" ? Nt : r === "unavailable" && w !== void 0 ? zt[w] : ze[r];
        e.publish(Ue(S, {
          ifNoneStood: ifNoneStood_2,
          otherwise: otherwise,
          why: why,
          wayOut: wayOut
        }), "warning");
        return;
      }
  }
}
function Ne(e) {
  let n = e.summary.overCap + e.unreadable + F(e.leftBehind, _ => _.reason === "undefusable"),
    r = e.settings === "schema_rejected" || e.settings === "settings_too_large" || e.settings === "settings_unreadable",
    a = e.summary.droppedRules.credentialRestrictions > 0;
  return n > 0 || r || a ? "warning" : "debug";
}
var ue = "; start a new cloud session to try again";
function ce(e) {
  return Es(fn("userSettings") ?? e);
}
function Ue(e, {
  ifNoneStood: ifNoneStood_3,
  otherwise: otherwise_2,
  why: why_2,
  wayOut: wayOut_2
}) {
  return e === !1 ? `${ifNoneStood_3}: ${why_2}${wayOut_2}` : `${e === "gone" ? ifNoneStood : otherwise_2}: ${why_2}`;
}
function z(e, n, r) {
  return [e === "create" ? `${ifNoneStood_2}: ${n}${r}` : `${otherwise}: ${n}`];
}
var ze = {
    lane_full: "the session has reached its limit of uploaded files",
    unavailable: "sending your settings is not available",
    unauthorized: unauthorized,
    failed: "sending your settings failed"
  },
  Nt = "the cloud could not confirm where your settings came from (this machine's clock may be wrong)",
  zt = {
    device_key_unavailable: "this machine could not prove it is the computer the session is bound to (you are signed out, or its device key is missing or unreadable)",
    compliance_restricted: "your organization's compliance policy does not allow sending your settings",
    switched_off_by_anthropic: "sending your settings was turned off by Anthropic for now",
    direct_sync_off: "sending your settings is turned off for your organization"
  };
function $t(e) {
  if (e.kind === "empty" && e.reason === "nothing_to_send") return Ne(e);
  return e.reason === "user_settings_disabled" ? "debug" : "warning";
}
function jt(e, n, r) {
  let a = Math.ceil(r / 1000);
  switch (e.reason) {
    case "unbound":
      return [];
    case "rules_unreadable":
      {
        if (e.settings === "settings_unreadable") return z(n, `${ce(e.configHome)} has errors (see /status) or links to a missing file`, "; fix it and start a new cloud session");
        let _ = e.unreadableSettingsFiles.length,
          s = rdo(e.unreadableSettingsFiles);
        return s === "" ? z(n, Rgs([]), "") : z(n, `${s} ${O(_, "has", "have")} errors`, `; once ${O(_, "it is", "they are")} fixed, start a new cloud session`);
      }
    case "failed":
      return z(n, "preparing your settings failed (see the debug log)", ue);
    case "too_slow":
      return z(n, `preparing your settings took over ${a} ${O(a, "second")}`, ue);
    case "home_unvettable":
      return e.cause === "too_many_links" ? z(n, `your memory files and what they @import, or the links under ${Es(e.configHome)}, are too many to check`, "; remove some and start a new cloud session") : z(n, `a link, an unreadable folder or an @import under ${Es(e.configHome)} could not be checked`, "");
    case "nothing_to_send":
      {
        let _ = e.kind === "empty" ? fur(e, {
          launch: n === "create" ? "create" : "reopen_sent_nothing",
          settingsFile: ce(e.configHome)
        }) : null;
        return _ === null ? [] : [_];
      }
    case "user_settings_disabled":
      return ["Settings from this machine were not sent to the cloud session: this launch does not load your user settings (--setting-sources, or an SDK settingSources list, without user)"];
    case "flag_off":
    case "no_consent":
    case "aborted":
    case "no_project_files":
    case "self_hosted_runner":
      return [];
  }
}
export { oto };