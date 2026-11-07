// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { f, de } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { We, R, d, UN } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { J, we } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Ua, P } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { ks } from "B:/~BUN/root/chunk-d10hhz4p.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { SC } from "B:/~BUN/root/chunk-sy1h8mf0.js";
import { Nb, Ld, jn } from "B:/~BUN/root/chunk-rr294jrm.js";
import { un } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { xa, Pz, jt } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { o4 } from "B:/~BUN/root/chunk-psjm1gcn.js";
import { i5e, o2 } from "B:/~BUN/root/chunk-8cye11my.js";
import { Nlt } from "B:/~BUN/root/chunk-9m1jz04t.js";
import { Fee, T$n } from "B:/~BUN/root/chunk-9hk6qhrz.js";
import { Lv, nbe, gz, rbe } from "B:/~BUN/root/chunk-w0nyevkg.js";
import { zle, rge, wRt, eui } from "B:/~BUN/root/chunk-f75fgfra.js";
import { Tat, qY, v5o } from "B:/~BUN/root/chunk-hfrg92x0.js";
import { X3r, rRt, Yke, Ydi, J6o } from "B:/~BUN/root/chunk-cs69tdjz.js";
import { Qtr } from "B:/~BUN/root/chunk-331m6ngv.js";
import { z6o, fwn, V3r } from "B:/~BUN/root/chunk-jsa39aw6.js";
import { heo, geo, vts, w$, BPt, kje } from "B:/~BUN/root/chunk-27h4st9h.js";
import { q6o, enr as ifNoneStood_2, tnr as otherwise, nnr as ifNoneStood, q3r, Y3r, Y6o } from "B:/~BUN/root/chunk-my2jzzp1.js";
import { Y6e } from "B:/~BUN/root/chunk-gw72d8pt.js";
import { Ztr } from "B:/~BUN/root/chunk-333m7ww5.js";
import { pwn as unauthorized, Vdi } from "B:/~BUN/root/chunk-6dzdfyja.js";
import { u$ } from "B:/~BUN/root/chunk-qen8s2b7.js";
import { fre } from "B:/~BUN/root/chunk-3e8b6pq9.js";
import { o, oe, C, u, xt } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { U } from "B:/~BUN/root/chunk-5ha2avah.js";
import { createHash as Ge } from "crypto";
var qe = Buffer.from("anthropic.ccr.session_synced_file_put.v1", "utf8"),
  Ye = Buffer.from("anthropic.ccr.session_synced_file_upload_begin.v1", "utf8"),
  Ke = Buffer.from("anthropic.ccr.session_synced_file_upload_commit.v1", "utf8"),
  ge = Buffer.from([0]),
  Ve = 32;
function Xe({
  sessionUuid: sessionUuid,
  boundDeviceUuid: boundDeviceUuid,
  issuedAtMs: issuedAtMs,
  contentSha256: contentSha256,
  path: path,
  ifMatchSha256: ifMatchSha256
}) {
  if (contentSha256.length !== Ve) throw Error("syncedFileRequestSigner: the content hash is not 32 bytes");
  return ee(qe, {
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
  return ee(Ye, {
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
  return ee(Ke, {
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
  return Buffer.concat([e, ge, o2(sessionUuid_4), o2(boundDeviceUuid_4), _e(issuedAtMs_4), ...fixed, ...strings.flatMap(item => [Buffer.from(item, "utf8"), ge])]);
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
  let kid = i5e + n,
    s = async S => {
      let b = now(),
        k = await key.sign(S(b));
      return {
        device_attestation: {
          kid: kid,
          signature: k.toString("base64")
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
      contentSha256: Ge("sha256").update(content).digest(),
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
  let sessionUuid_6 = SC(sessionId);
  if (sessionUuid_6 === void 0) return W("bad_session_id");
  let s = await fre(credentials).catch(() => {
    return;
  });
  if (s?.status !== "resolved") return W("no_account");
  let deviceUuid = boundDeviceUuid_5.toLowerCase(),
    S = await Nlt(s.accountUuid, credentials, held?.rowPk.toLowerCase() === deviceUuid ? held : void 0);
  if (S.status !== "loaded") return W(S.status);
  if (S.rowPk.toLowerCase() !== deviceUuid) return W("bound_elsewhere");
  return g("client_request_signer"), Je({
    sessionUuid: sessionUuid_6,
    deviceUuid: deviceUuid,
    key: S.key
  });
}
function W(e) {
  c("client_request_signer", e);
  return;
}
import { posix as Se } from "path";
var Y = 30000,
  ye = "synced_file_limit_exceeded",
  et = "synced_file_too_large_inline",
  te = p(() => u({
    error: u({
      type: o().optional(),
      reason: o().optional(),
      resource: o().optional(),
      sub_reason: oe().optional()
    })
  }));
function tt(e) {
  if (e !== Se.normalize(e) || e.includes("\\") || e.includes("\x00")) return !1;
  return !Se.isAbsolute(e) && (e === zle || e.startsWith(`${zle}/`));
}
function ne(e) {
  if (tt(e)) return !1;
  return a(new R(`lane path escapes the lane root: ${e}`, "lane path escapes the lane root")), !0;
}
function K(e) {
  return `${Tat}/${e}`;
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
function q(e) {
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
  if (e.status === 400 && n?.reason === v5o) return {
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
  return Math.min(st, Math.max(Y, Math.ceil(e / n * 1000)));
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
class V extends Error {
  constructor() {
    super("this machine cannot sign the request as the bound device");
  }
}
var Ee = 64,
  lt = p(() => u({
    content_sha256: o().length(Ee)
  })),
  ft = p(() => u({
    content: o(),
    content_sha256: o().length(Ee)
  }));
function Re(e) {
  return typeof e === "object" && e !== null && "code" in e && e.code === "ECONNABORTED";
}
function mt(e, n) {
  if (ne(e)) return "failed";
  if (Array.from(K(e)).length > eui) return "path_too_long";
  if (n.length > qY) return "too_large";
  return null;
}
function Ae({
  sessionId: sessionId_2,
  credentials: credentials_2,
  signer: signer,
  signedOnly = !1
}) {
  Nb(sessionId_2, "seed upload session id");
  let session_id = Ld(sessionId_2),
    s = null,
    h;
  function S(O) {
    return s ??= rbe(O).then(E => {
      if (E !== void 0) h = E;
      return E;
    }, () => {
      return;
    }).finally(() => {
      s = null;
    }), s;
  }
  let b = null,
    k = !1;
  async function v(O) {
    let E = await signer?.catch(() => {
      return;
    });
    if (E === void 0) {
      if (signedOnly) throw new V();
      return;
    }
    try {
      return await O(E);
    } catch (error) {
      if (!k) k = !0, t(`lane: request not signed: ${d(error)}`, {
        level: "warn"
      }), c("client_request_signer", "sign_failed");
      if (signedOnly) throw new V();
      return;
    }
  }
  async function D(O, E, H = {}) {
    let L = H.heedsRetryAfter ? b?.trackRequest() : void 0,
      B = await F(O, E, H, L);
    return L?.noteSettled(B), B;
  }
  async function F(O, E, {
    retryTimeouts = !1,
    attempts = ae
  }, B) {
    let I = !1;
    for (let y = 0;; y++) {
      if (u$(E)) return "aborted";
      h ??= await Lv().catch(() => {
        return;
      });
      let x = h,
        w;
      try {
        w = await O(x === void 0 ? {} : {
          "X-Trusted-Device-Token": x
        });
      } catch (error) {
        if (error instanceof V) return "unsigned";
        if (u$(E)) return "aborted";
        if (await Pz(credentials_2)) return "no_auth";
        if (UN(error)) return t("lane: the response is larger than this request accepts; not retried", {
          level: "warn"
        }), "too_large";
        if ((retryTimeouts || !Re(error)) && y + 1 < attempts) {
          await J(Pe(y), E);
          continue;
        }
        if (Re(error)) return t("lane: request timed out", {
          level: "warn"
        }), "timed_out";
        return a(error), "failed";
      }
      if (!w.ok) return w.reason === "no-auth" ? "no_auth" : "gated";
      if ((w.status === 429 || w.status >= 500 && w.status !== 501) && y + 1 < attempts) {
        let T = Pe(y);
        await J((w.status === 429 ? B?.takeWaitMs(y, w.response?.headers?.["retry-after"], T) : void 0) ?? T, E);
        continue;
      }
      let M = w.status === 403 && !I ? Fee(w.data) : void 0;
      if (M !== void 0 && T$n(M)) {
        I = !0;
        let T = await S(x);
        if (T !== void 0 && T !== x) continue;
      } else if (M !== void 0) nbe("lane:", M), h = void 0, gz();
      return {
        status: w.status,
        data: w.data
      };
    }
  }
  async function putStoreRow(O, E, {
    ifMatchSha256: ifMatchSha256_7,
    signal: signal,
    shouldAttemptOnceIfLong = !1
  } = {}) {
    let kind = mt(O, E);
    if (kind !== null) return {
      kind: kind
    };
    if (ifMatchSha256_7 === "") return {
      kind: "failed"
    };
    let y = ke(ve(E.length));
    return _t(await A(O, E, ifMatchSha256_7, signal, shouldAttemptOnceIfLong && y > Y ? 1 : ae, y));
  }
  function A(O, content_2, H, signal_2, attempts_2, timeout) {
    let path_7 = K(O);
    return D(async headers => jt.put(`/v1/code/sessions/${session_id}/synced_file`, {
      session_id: session_id,
      path: path_7,
      content: content_2.toString("base64"),
      ...(H !== void 0 && {
        if_match_sha256: H
      }),
      ...(await v(w => w.sign({
        content: content_2,
        path: path_7,
        ifMatchSha256: H
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
  async function getStoreRow(O, signal_3, H = 0, L = qY) {
    if (ne(O)) return {
      kind: "failed"
    };
    let uRLSearchParams = new URLSearchParams({
        path: K(O)
      }),
      timeout_2 = ke(ve(H)),
      y = !1,
      x = await D(async headers_2 => {
        let N = await jt.get(`/v1/code/sessions/${session_id}/file?${uRLSearchParams.toString()}`, {
          auth: "teleport-org",
          credentials: credentials_2,
          headers: headers_2,
          timeout: timeout_2,
          validateStatus: () => !0,
          signal: signal_3,
          maxContentLength: ut(L)
        });
        return y ||= N.ok && N.status === 429, N;
      }, signal_3, {
        attempts: timeout_2 > Y ? 1 : ae
      });
    return gt(pt(x, L), y);
  }
  return {
    putStoreRow: putStoreRow,
    getStoreRow: getStoreRow,
    ...ct
  };
}
function pt(e, n) {
  if (typeof e === "string") return q(e);
  if (re(e.status)) {
    let r = ft().safeParse(e.data);
    if (!r.success) return {
      kind: "failed",
      status: e.status
    };
    let content_3 = Buffer.from(r.data.content, "base64");
    return content_3.length > n ? {
      kind: "failed",
      status: e.status,
      tooLarge: !0
    } : {
      kind: "ok",
      content: content_3,
      etag: r.data.content_sha256
    };
  }
  if (e.status === 404) return {
    kind: "not_found"
  };
  return ie(q(e), e.status);
}
function gt(e, n) {
  return n && e.kind === "failed" && e.status !== 429 ? {
    ...e,
    hadA429: !0
  } : e;
}
function _t(e) {
  if (typeof e === "string") return q(e);
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
    if (t(`lane: put rejected (400): type=${type} reason=${reason}`), reason === ye) return {
      kind: "lane_full"
    };
  }
  return ie(q(e), e.status);
}
function ve(e) {
  return Math.ceil(e / 3) * 4;
}
function Pe(e) {
  return ot * 2 ** e * (0.5 + Math.random() / 2);
}
var ht = 1e4;
async function se(e, n) {
  return o4(BPt(e).enabledNow()) && kje(e) && (!w$(e) || (await Promise.resolve().then(() => n?.() ?? !1).catch(() => !1)));
}
async function Oe({
  client: client,
  pack: pack,
  generation: generation,
  uploaded: uploaded,
  status: status_2,
  launchConsent: launchConsent,
  isProjectStillSynced: isProjectStillSynced,
  signal: signal_4,
  onReadBack: onReadBack,
  deadlineMs = ht
}) {
  if (uploaded.kind !== "uploaded" || !Rt(uploaded.outcome) || u$(signal_4) || !(await se(launchConsent, isProjectStillSynced))) return "skipped";
  let abortController = new AbortController(),
    D = () => abortController.abort();
  signal_4?.addEventListener("abort", D, {
    once: !0
  });
  try {
    let F,
      A = (await we(St({
        client: client,
        pack: pack,
        generation: generation,
        uploaded: uploaded.outcome,
        signal: abortController.signal,
        onRead: H => {
          F = H;
        }
      }), deadlineMs)) ?? F ?? {
        verdict: "unreadable",
        heal: "none",
        got: "deadline",
        ready: null
      };
    if (u$(signal_4) || A.got === "aborted") return "skipped";
    let deny_or_ask_rules_missing = kt(A.ready, generation, pack);
    l("tengu_home_seed_ready_seen", {
      outcome: f(A.verdict),
      got: f(A.got),
      heal: f(A.heal),
      ready_outcome: f(A.ready?.outcome ?? "none"),
      deny_or_ask_rules_missing: deny_or_ask_rules_missing,
      generation: generation
    });
    let O = A.verdict === "applied_before_first_ask" || A.verdict === "applied_late" ? {
      verdict: A.verdict,
      left: vt(A.ready, yt(pack), deny_or_ask_rules_missing)
    } : {
      verdict: A.verdict,
      left: null
    };
    onReadBack?.(O);
    let E = Pt(A.verdict, uploaded.outcome, O.left, uploaded.settingsRefused !== void 0, deny_or_ask_rules_missing);
    if (E !== null) status_2.publish(E.text, E.level);
    return A.verdict;
  } catch (error) {
    if (We(error) || u$(signal_4)) return "skipped";
    return a(error), "unreadable";
  } finally {
    abortController.abort(), signal_4?.removeEventListener("abort", D);
  }
}
async function St({
  client: client_2,
  pack: pack_2,
  generation: generation_2,
  uploaded: uploaded_2,
  signal: signal_5,
  onRead: onRead
}) {
  let h = bt(await client_2.getStoreRow(wRt, signal_5));
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
        verdict: h.ready.generation < generation_2 ? uploaded_2 === "deadline" ? "not_seen" : "behind" : h.ready.generation !== generation_2 ? "stale" : wt(h.ready) ? "not_applied" : h.ready.appliedBeforeFirstAsk ? "applied_before_first_ask" : "applied_late",
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
          heal: (await client_2.putStoreRow(rge, pack_2, {
            signal: signal_5
          })).kind === "ok" ? "ok" : "failed",
          ready: null
        };
      }
  }
}
function bt(e) {
  switch (e.kind) {
    case "ok":
      {
        let n = Qtr(e.content);
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
  let n = Yke(e);
  return n.ok && n.pack.settings !== null;
}
function kt(e, n, r) {
  if (e?.generation !== n || e.outcome !== "partial" || e.settingsWritten) return !1;
  let i = Yke(r);
  return i.ok && i.pack.settings !== null && J6o(i.pack.settings) !== null;
}
function wt(e) {
  return e.outcome === "partial" && e.filesApplied === 0 && !e.settingsWritten;
}
function Rt(e) {
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
function vt(e, n, r) {
  if (e === null || e.outcome !== "partial") return null;
  return !r && e.filesRefused > 0 ? "files" : n && !e.settingsWritten ? "settings" : "part";
}
function Pt(e, n, r, i, _) {
  let s = i ? "the rest of your settings" : "your settings",
    h = r === null ? "" : ` (${Ztr[r]})`,
    S = n === "deadline" || _;
  switch (e) {
    case "applied_before_first_ask":
      return {
        text: `The cloud session applied ${s} before its first reply${h}`,
        level: S ? "info" : "debug"
      };
    case "applied_late":
      return {
        text: `${Ua(s)} reached the cloud session after its first reply${h}; they apply from the next turn (no /clear needed)`,
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
var Et = 15000,
  At = 30000;
function j6o(e) {
  return Ot(e).pendingSeed(Promise.resolve());
}
function Ot({
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
  deadlineMs: deadlineMs_2 = Et,
  planDeadlineMs = At
}) {
  let status_3 = Y6e(),
    j = Promise.resolve(boundDeviceUuid_6).catch(() => {
      return;
    }),
    O = client_3 === void 0 ? void 0 : Promise.resolve(client_3),
    getStoreClient = () => O ??= j.then(boundDeviceUuid_7 => Ae({
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
    H = we(Promise.resolve(plan).catch(y => {
      if (!We(y)) a(y);
      return {
        kind: "none",
        reason: We(y) ? "aborted" : "failed"
      };
    }), planDeadlineMs).then(y => y ?? {
      kind: "none",
      reason: "too_slow"
    }),
    L;
  H.then(y => {
    L = y.kind === "ready" ? y.description : null;
  });
  let B = H.then(plan_2 => plan_2.kind === "ready" ? {
    plan: plan_2,
    attempts: Ht({
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
      let x = B.then(({
        plan: plan_3,
        attempts: attempts_4
      }) => (attempts_4 === null ? Promise.resolve().then(() => {
        for (let M of Wt(plan_3, trigger, planDeadlineMs)) status_3.publish(M, qt(plan_3));
        return ue(Dt(plan_3.reason, trigger), trigger, "plan_"), {
          outcome: {
            kind: "none",
            reason: plan_3.reason,
            ...X(plan_3)
          },
          written: null
        };
      }) : attempts_4.endedOnce(y).then(M => Ct(status_3, {
        sessionId: sessionId_3,
        plan: plan_3,
        bound: bound,
        trigger: trigger
      }, M))).catch(M => (a(M), ue({
        is: "bad",
        code: "unexpected"
      }, trigger, ""), {
        outcome: plan_3.kind === "ready" ? {
          kind: "uploaded",
          outcome: "failed",
          summary: plan_3.summary,
          bound: bound,
          ...Be(plan_3),
          ...X(plan_3)
        } : {
          kind: "none",
          reason: plan_3.reason,
          ...X(plan_3)
        },
        written: null
      })));
      return Vdi({
        completion: x.then(({
          outcome: outcome
        }) => outcome),
        status: status_3,
        description: () => L,
        afterFirstReply: (signal_7, onReadBack_2) => x.then(({
          outcome: M,
          written: written
        }) => written === null ? "skipped" : getStoreClient().then(client_4 => Oe({
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
function Ht(packUpload, mayStillForwardNow) {
  let latest = Te(packUpload, 1),
    i = {
      packUpload: packUpload,
      mayStillForwardNow: mayStillForwardNow,
      ended: Promise.withResolvers(),
      isEnded: !1,
      attemptsMade: 1,
      latest: latest,
      call: void 0
    };
  return i.ended.promise.catch(() => {}), De(i, latest, null), {
    endedOnce: _ => (_.then(() => (i.isEnded = !0, i.latest)).then(s => fe(i, s), s => me(i, s)), i.ended.promise),
    ensureUploaded: _ => i.call ??= Ut(i, _).finally(() => {
      i.call = void 0;
    })
  };
}
function fe(e, n) {
  e.isEnded = !0, e.ended.resolve(n);
}
function me(e, n) {
  e.isEnded = !0, e.ended.reject(n);
}
function De(e, n, r) {
  n.then(i => {
    if (!Le(i)) fe(e, Fe(r, i));
  }, i => me(e, i));
}
function Fe(e, n) {
  return e !== null && e.written !== null && n.written === null && n.outcome !== "raced" ? e : n;
}
async function Ut(e, cut) {
  try {
    let r = await e.latest;
    if (e.isEnded) return "done";
    let i = await e.mayStillForwardNow().catch(h => (a(h), !1));
    if (e.isEnded) return "done";
    if (!i) return l("tengu_home_seed_upload_no_longer_allowed", {
      trigger: f(e.packUpload.trigger),
      attempts_made: e.attemptsMade
    }), fe(e, r), "done";
    if (cut.aborted) return He(r);
    e.attemptsMade += 1;
    let _ = Te({
      ...e.packUpload,
      cut: cut
    }, e.attemptsMade);
    De(e, _, r), e.latest = _.then(h => Fe(r, h)), e.latest.catch(() => {});
    let s = await _;
    return Le(s) ? He(s) : "done";
  } catch (error) {
    return me(e, error), "done";
  }
}
function He({
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
function Le({
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
async function Te({
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
  let v = Date.now(),
    after_failed_create = (attempt === 1 || trigger_2 !== "create") && fwn(sessionId_4)?.tried === !0,
    F = await Lt(getStoreClient_2, plan_4.pack, trigger_2, {
      sessionId: sessionId_4,
      storageV5: storageV5_2
    }, signal_8, cut_2, deadlineMs_3);
  return l("tengu_home_seed_upload", {
    trigger: f(trigger_2),
    outcome: f(F.outcome),
    attempt: attempt,
    bytes: F.written?.pack.length ?? plan_4.pack.length,
    generation: F.generation,
    bound: bound_2,
    row_standing: F.standing === !0,
    allow_rules_cut: F.allowRulesCut ?? 0,
    allow_rules_recorded: fwn(sessionId_4)?.allow.length ?? 0,
    after_failed_create: after_failed_create,
    cause: de(F.cause),
    duration_ms: Date.now() - v
  }), F;
}
function Ct(e, {
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
  ue(Ft(outcome_4, cause_3), trigger_3, "");
  let v = fwn(sessionId_5);
  return zt(e, plan_5, outcome_4, {
    sessionId: sessionId_5,
    trigger: trigger_3,
    bound: bound_3,
    didCreateCarryAllowRules: (v?.allow.length ?? 0) > 0
  }, v?.tried === !0 && standing !== !0 ? !1 : standing ?? !1, allowRulesCut ?? 0, cause_3), {
    outcome: {
      kind: "uploaded",
      outcome: outcome_4,
      summary: plan_5.summary,
      bound: bound_3,
      ...Be(plan_5),
      ...X(plan_5)
    },
    written: written_2
  };
}
function X(e) {
  if (e.kind === "none") return {};
  let keptForCredential = Y3r(e.leftBehind),
    keptAsLinks = Y6o(e.leftBehind);
  return {
    ...((keptForCredential.claudeMd || keptForCredential.others > 0) && {
      keptForCredential: keptForCredential
    }),
    ...(keptAsLinks.names.length > 0 && {
      keptAsLinks: keptAsLinks
    })
  };
}
function Be(e) {
  let n = e.settings;
  return n === "schema_rejected" || n === "settings_too_large" || n === "settings_unreadable" || n === "self_hosted_runner" ? {
    settingsRefused: n
  } : {};
}
function Dt(code, n) {
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
function Ft(code_2, n) {
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
function ue(e, n, r) {
  if (e === null) return;
  let i = n === "create";
  switch (e.is) {
    case "ok":
      if (g("ccr_home_seed"), i) g("ccr_home_seed_create_upload");
      return;
    case "sad":
      if (c("ccr_home_seed", e.code), i) c("ccr_home_seed_create_upload", `${r}${e.code}`);
      return;
    case "bad":
      if (m("ccr_home_seed", e.code), i) m("ccr_home_seed_create_upload", `${r}${e.code}`);
      return;
  }
}
async function Lt(e, pack_3, r, i, _, s, h) {
  if (u$(_)) return {
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
    let k = await we(e().then(v => Tt(v, pack_3, r, i, abortController_2.signal)), h);
    if (k === void 0 || k.outcome === "aborted") {
      if (u$(_)) return {
        outcome: "aborted",
        generation: 0,
        written: null
      };
      if (r === "create") return Q(i, pack_3, 1, void 0), {
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
    return k;
  } finally {
    abortController_2.abort(), _?.removeEventListener("abort", b), s?.removeEventListener("abort", b);
  }
}
async function Tt(e, pack_4, r, i, _) {
  if (r !== "create") {
    let h = fwn(i.sessionId);
    if (h === void 0) return {
      outcome: "not_forwarded_at_create",
      generation: 0,
      written: null
    };
    let S = await e.getStoreRow(rge, _);
    if (S.kind !== "ok" && S.kind !== "not_found") return {
      outcome: Ne(S),
      generation: 0,
      written: null,
      standing: "unknown",
      ...Z(S)
    };
    let b = Bt(pack_4, h),
      k = generation_3 => V3r(i.sessionId, {
        ...h,
        generation: generation_3,
        etag: void 0,
        at: Date.now()
      }, i.storageV5),
      v = S.kind === "ok" ? await xe(e, b.pack, S, _, k) : {
        ...(await Ue(e, Me(b.pack, h.generation), _, k)),
        standing: "gone"
      };
    if (S.kind === "not_found") l("tengu_home_seed_stored_pack_gone", {
      outcome: f(v.outcome),
      generation: v.generation,
      record_generation: h.generation,
      after_failed_create: h.tried === !0
    });
    if (v.written !== null) V3r(i.sessionId, {
      ...h,
      generation: v.generation,
      etag: v.etag,
      at: Date.now()
    }, i.storageV5);
    return b.cut === 0 ? v : {
      ...v,
      allowRulesCut: b.cut
    };
  }
  let s = await Ue(e, {
    pack: pack_4,
    generation: 1
  }, _, async h => {
    if (h > 1) Q(i, pack_4, h, void 0);
  });
  if (s.written !== null) Q(i, s.written.pack, s.generation, s.etag);else if (s.outcome in $e) Q(i, pack_4, 1, void 0, {
    tried: !0
  });
  return s;
}
async function Ue(e, {
  pack: pack_5,
  generation: generation_4
}, signal_9, _) {
  await _?.(generation_4);
  let s = await e.putStoreRow(rge, pack_5, {
    signal: signal_9
  });
  if (s.kind !== "conflict") {
    if (s.kind !== "ok") return {
      outcome: Ie(s, "sent"),
      generation: 0,
      written: null,
      ...Z(s)
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
  let h = await e.getStoreRow(rge, signal_9);
  if (h.kind !== "ok") return {
    outcome: Ne(h),
    generation: 0,
    written: null,
    standing: !0,
    ...Z(h)
  };
  return xe(e, pack_5, h, signal_9, _);
}
function Q(e, n, generation_5, etag, _ = {}) {
  let s = Yke(n),
    h = s.ok ? Mt(s.pack.settings) ?? [] : [];
  V3r(e.sessionId, {
    generation: generation_5,
    ...(etag !== void 0 && {
      etag: etag
    }),
    ..._,
    allow: h.map(z6o),
    at: Date.now()
  }, e.storageV5);
}
async function xe(e, n, r, signal_10, _) {
  let s = Nt(n, r.content);
  await _?.(s.generation);
  let h = await e.putStoreRow(rge, s.pack, {
      ifMatchSha256: r.etag,
      signal: signal_10
    }),
    outcome_5 = h.kind === "conflict" ? "raced" : Ie(h, s.unchanged ? "unchanged" : "conflict_resolved");
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
    ...Z(h)
  };
}
function Z(e) {
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
function Bt(pack_6, n) {
  let r = Yke(pack_6);
  if (!r.ok) throw Error("the settings pack to re-send does not parse");
  if (r.pack.settings === null || r.pack.settings.permissions === void 0) return {
    pack: pack_6,
    cut: 0
  };
  let i = pe().safeParse(r.pack.settings.permissions);
  if (!i.success) throw Error("the settings pack to re-send carries permissions of an unknown shape");
  let allow = i.data.allow;
  if (allow === void 0) return {
    pack: pack_6,
    cut: 0
  };
  let s = new Set(n.allow),
    h = allow.filter(item => s.has(z6o(item))),
    cut_3 = allow.length - h.length;
  return cut_3 === 0 ? {
    pack: pack_6,
    cut: cut_3
  } : {
    pack: rRt({
      ...r.pack,
      settings: It(r.pack.settings, h)
    }),
    cut: cut_3
  };
}
var pe = p(() => xt({
  allow: C(o()).optional()
}));
function Mt(e) {
  let n = pe().safeParse(e?.permissions);
  return n.success ? n.data.allow : void 0;
}
function It(e, n) {
  let r = pe().safeParse(e.permissions);
  return {
    ...e,
    permissions: {
      ...(r.success ? r.data : {}),
      allow: [...n]
    }
  };
}
function Nt(e, pack_7) {
  let r = Yke(e),
    i = Yke(pack_7);
  if (r.ok && i.ok) {
    if (rRt({
      ...r.pack,
      generation: i.pack.generation
    }).equals(pack_7)) return {
      pack: pack_7,
      generation: i.pack.generation,
      unchanged: !0
    };
  }
  if (pack_7.equals(e)) return {
    pack: pack_7,
    generation: 1,
    unchanged: !0
  };
  return {
    ...Me(e, Ydi(pack_7) ?? 0),
    unchanged: !1
  };
}
function Me(pack_8, n) {
  let r = Yke(pack_8);
  if (!r.ok) return {
    pack: pack_8,
    generation: 1
  };
  let generation_6 = Math.min(n + 1, X3r);
  return {
    pack: rRt({
      ...r.pack,
      generation: generation_6
    }),
    generation: generation_6
  };
}
function Ie(e, n) {
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
function Ne(e) {
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
function zt(e, n, r, {
  sessionId: sessionId_6,
  trigger: trigger_4,
  bound: bound_4,
  didCreateCarryAllowRules: didCreateCarryAllowRules
}, S, b, k) {
  let wayOut = r === "unavailable" && k !== "device_key_unavailable" ? "" : ce;
  switch (r) {
    case "sent":
    case "unchanged":
    case "conflict_resolved":
      {
        if (e.publish(r === "unchanged" && trigger_4 !== "create" ? "Settings from this machine are already in this session" : q6o({
          ...n.description,
          permissionRules: n.description.permissionRules - b
        }) + (bound_4 ? "" : " (this session cannot run commands on this machine)"), "debug"), b > 0) e.publish(`${b} ${P(b, "permission allow rule")} ${b === 1 ? "stays" : "stay"} on this machine, because ${b === 1 ? "it was" : "they were"} not in the settings prepared when this cloud session was created; a new session takes ${b === 1 ? "it" : "them"}`, "debug");
        let D = q3r(n, {
          launch: trigger_4 === "create" ? "create" : didCreateCarryAllowRules ? "reopen_sent" : "reopen_sent_no_allow_recorded",
          settingsFile: le(n.configHome)
        });
        if (D !== null) e.publish(D, ze(n));
        return;
      }
    case "aborted":
      return;
    case "deadline":
      e.publish(Ce(S, {
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
      if (!xa().claim(`home_seed_not_sent_again:${jn(sessionId_6)}`)) return;
      e.publish("Settings from this machine were not sent again: this machine has no record of sending them when this session was created (a session started without them, from another machine, by an earlier build, or older than this machine still tracks)", "debug");
      return;
    case "lane_full":
    case "unavailable":
    case "unauthorized":
    case "failed":
      {
        let why = k === "write_signature_refused" ? $t : r === "unavailable" && k !== void 0 ? Gt[k] : $e[r];
        e.publish(Ce(S, {
          ifNoneStood: ifNoneStood_2,
          otherwise: otherwise,
          why: why,
          wayOut: wayOut
        }), "warning");
        return;
      }
  }
}
function ze(e) {
  let n = e.summary.overCap + e.unreadable + U(e.leftBehind, _ => _.reason === "undefusable"),
    r = e.settings === "schema_rejected" || e.settings === "settings_too_large" || e.settings === "settings_unreadable",
    i = e.summary.droppedRules.credentialRestrictions > 0;
  return n > 0 || r || i ? "warning" : "debug";
}
var ce = "; start a new cloud session to try again";
function le(e) {
  return ks(un("userSettings") ?? e);
}
function Ce(e, {
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
var $e = {
    lane_full: "the session has reached its limit of uploaded files",
    unavailable: "sending your settings is not available",
    unauthorized: unauthorized,
    failed: "sending your settings failed"
  },
  $t = "the cloud could not confirm where your settings came from (this machine's clock may be wrong)",
  Gt = {
    device_key_unavailable: "this machine could not prove it is the computer the session is bound to (you are signed out, or its device key is missing or unreadable)",
    compliance_restricted: "your organization's compliance policy does not allow sending your settings",
    switched_off_by_anthropic: "sending your settings was turned off by Anthropic for now",
    direct_sync_off: "sending your settings is turned off for your organization"
  };
function qt(e) {
  if (e.kind === "empty" && e.reason === "nothing_to_send") return ze(e);
  return e.reason === "user_settings_disabled" ? "debug" : "warning";
}
function Wt(e, n, r) {
  let i = Math.ceil(r / 1000);
  switch (e.reason) {
    case "unbound":
      return [];
    case "rules_unreadable":
      {
        if (e.settings === "settings_unreadable") return z(n, `${le(e.configHome)} has errors (see /status) or links to a missing file`, "; fix it and start a new cloud session");
        let _ = e.unreadableSettingsFiles.length,
          s = heo(e.unreadableSettingsFiles);
        if (geo(e.unreadableSettingsFiles)) return z(n, vts(e.unreadableSettingsFiles), "; start a new cloud session from a folder outside connector-downloads");
        return s === "" ? z(n, vts([]), "") : z(n, `${s} ${P(_, "has", "have")} errors`, `; once ${P(_, "it is", "they are")} fixed, start a new cloud session`);
      }
    case "failed":
      return z(n, "preparing your settings failed (see the debug log)", ce);
    case "too_slow":
      return z(n, `preparing your settings took over ${i} ${P(i, "second")}`, ce);
    case "home_unvettable":
      return e.cause === "too_many_links" ? z(n, `your memory files and what they @import, or the links under ${ks(e.configHome)}, are too many to check`, "; remove some and start a new cloud session") : z(n, `a link, an unreadable folder or an @import under ${ks(e.configHome)} could not be checked`, "");
    case "nothing_to_send":
      {
        let _ = e.kind === "empty" ? q3r(e, {
          launch: n === "create" ? "create" : "reopen_sent_nothing",
          settingsFile: le(e.configHome)
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
export { j6o };