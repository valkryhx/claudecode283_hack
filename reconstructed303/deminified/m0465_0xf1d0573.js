// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Vy, av, DM, YDr, XE, zi, d2, Qi, E, Ce, ue } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { Fe, ws } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { j } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { x, _P, H, d, k, Tg, Ts, G } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Y } from "B:/~BUN/root/chunk-89mss1tj.js";
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { bt, _, J, se, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { ct } from "B:/~BUN/root/chunk-6ft8yhc8.js";
import { dL } from "B:/~BUN/root/chunk-rvc0n7zm.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { dl, u4s } from "B:/~BUN/root/chunk-7c8rc0p5.js";
import { fW, sl, _h } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { Ua, Rc } from "B:/~BUN/root/chunk-28dw3zbk.js";
import { AB, S2, yg } from "B:/~BUN/root/chunk-245a2x6v.js";
import { sFo } from "B:/~BUN/root/chunk-2ypz4cxh.js";
import { KMt, p5e } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { Vfr, Rit, Z4e, qfr, qMn, Kfr, QFe, eYe, tYe } from "B:/~BUN/root/chunk-hrf323t4.js";
import { XFe } from "B:/~BUN/root/chunk-t1rttjj3.js";
import { sK } from "B:/~BUN/root/chunk-nsa84wqe.js";
import { V$s, q$s, Hin, M3 } from "B:/~BUN/root/chunk-asrchj7k.js";
import { o, v, u, _t, fe, C } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { ve } from "B:/~BUN/root/chunk-ef0msk7r.js";
var Et = ve(_h(), 1);
import { constants as mn } from "fs";
import { access as pn, chmod as gn, copyFile as yt, mkdir as le, readdir as Ee, readlink as vt, realpath as ft, rename as pe, rm as he, rmdir as _n, stat as X, symlink as mt, unlink as te, utimes as hn, writeFile as wn } from "fs/promises";
import { homedir as kt } from "os";
import { randomBytes as $t } from "crypto";
import { basename as Oe, delimiter as yn, dirname as ne, join as U, resolve as oe } from "path";
import { createHash as xe } from "crypto";
import { createReadStream as Ot, createWriteStream as Vt } from "fs";
import { chmod as zt, rm as Bt } from "fs/promises";
import { join as Ut } from "path";
import { Readable as jt, Transform as qe } from "stream";
import { pipeline as Ae } from "stream/promises";
import { createZstdDecompress as Wt } from "zlib";
import { createHash as It, createPublicKey as Mt, verify as Ft } from "crypto";
function Be() {
  return `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAp28rSV5I8HmK8CK9GixB
UZR/gtJxeOCsRXO4EJiej40jzBmQA3cWXGosVO82ZfFsRKVTtMC5iB/HH9sxjncr
mYNWGroJNbx29m/FgYQBgkCXT4AfFl6rnnXqRGLZOerj/4AqE4yQ1GZbhBgR55Z7
ro0ieKK8RHYUspBKAFHyWRhCCz6THW6YRbf0p/hG/08TOY6Sj3cJ7/AEoTRf9ZmV
NX1k0KvbUSiVGpGY9OIHWgxRJUF2pArU4o/hk+sqGAgEUh8Bjvjwvz6+quLXPg+y
0Y8Ugb1Fg6BUppam/zydYY/Q/+yNjnuF154gD1jEeeir8R5czs6zUHSbo2yXUpAs
IdWYo5End8vGsluVmFExnUWm/fTVMGoM5Wm3v1VRepMydEnJ+atz4oQdmPQcKNAi
p5GJO2uyk++xFr9CpKvlR5jral92toYV/m+mur3va8ydamWBo/qG7/wt0sdS81Iw
H6lcu0SQ39rgKD+bdoPLv05EqVMYTFRI2QZEsWGYTMs0DOrfCIJFH50qyD0x4sWw
1gEWeG3jDgY8cj2StZz+zjqzUd05CibcCzEAGm1EQg5y9D40tIsAU1OI7bpgQ9V0
lC8lrqE7zJY66UK9Z1daA8jrdDi6migNjHFrXfT3V4QvMthCIO05q05SS3x2G3Zp
IgmI+CePUPB1pDf+lhPkU1MCAwEAAQ==
-----END PUBLIC KEY-----
`;
}
var Ue = Buffer.from("claude-code-manifest-v1\x00"),
  Re = "2.1.207",
  je = "flag";
var Dt = 1,
  Lt = "RSASSA-PKCS1-v1_5-SHA512",
  Nt = f(() => u({
    schema: C(Dt),
    algorithm: C(Lt),
    signature: o().min(1),
    publicKeySha256: o().regex(/^[0-9a-f]{64}$/)
  })),
  Te = f(() => _t({
    version: o(),
    manifestSignatureEnforcement: o().optional(),
    platforms: fe(o(), _t({
      checksum: o(),
      size: v().optional(),
      binary: o().optional()
    }))
  }));
class ManifestSignatureError extends x {
  reason;
  constructor(e, n) {
    super(`Release verification failed for Claude Code ${e} (${n}). The update was not installed.`, "Release manifest signature verification failed", n);
    this.name = "ManifestSignatureError", this.reason = n;
  }
}
function We({
  manifestBytes: manifestBytes,
  sidecar: sidecar,
  expectedVersion: expectedVersion,
  publicKeyPem: publicKeyPem
}) {
  let h = Nt().safeParse(sidecar);
  if (!h.success) throw new ManifestSignatureError(expectedVersion, "sidecar_malformed");
  let {
    signature: signature,
    publicKeySha256: publicKeySha256
  } = h.data;
  if (Buffer.from(signature, "base64").toString("base64") !== signature) throw new ManifestSignatureError(expectedVersion, "sidecar_malformed");
  let y;
  try {
    y = Mt(publicKeyPem);
  } catch {
    throw new ManifestSignatureError(expectedVersion, "key_mismatch");
  }
  let S = It("sha256").update(y.export({
    type: "spki",
    format: "der"
  })).digest("hex");
  if (publicKeySha256 !== S) throw new ManifestSignatureError(expectedVersion, "key_mismatch");
  let R = !1;
  try {
    R = Ft("sha512", Buffer.concat([Ue, manifestBytes]), y, Buffer.from(signature, "base64"));
  } catch {
    R = !1;
  }
  if (!R) throw new ManifestSignatureError(expectedVersion, "signature_invalid");
  let F;
  try {
    let M = Te().safeParse(J(manifestBytes.toString("utf8")));
    F = M.success ? M.data : void 0;
  } catch {
    F = void 0;
  }
  if (!F || F.version !== expectedVersion) throw new ManifestSignatureError(expectedVersion, "version_mismatch");
  return F;
}
var Ie = "https://downloads.claude.ai/claude-code-releases";
function Me(e, n) {
  return fW(e) ? sK.get(e, n) : sl.get(e, n);
}
var Ge = 30000,
  attempts = 3;
async function qt(e = "latest", n, r) {
  let s = Date.now(),
    attempt = 0,
    w;
  try {
    w = await Vfr(signal => (attempt++, Me(`${n}/${e}`, {
      timeout: Ge,
      responseType: "text",
      signal: signal,
      ...r
    })), {
      attempts: attempts,
      timeoutMs: Ge,
      onRetry: (R, F) => {
        t(`Version check failed on attempt ${R}/${attempts}, retrying: ${F instanceof Error ? F.message : String(F)}`);
      }
    });
  } catch (error) {
    let latency_ms = Date.now() - s,
      M = error instanceof Error ? error.message : String(error),
      http_status = ge(error);
    m("update_check", "update_check_binary_repo_failed"), i("tengu_version_check_failure", {
      latency_ms: latency_ms,
      http_status: http_status,
      is_timeout: be(error),
      attempt: attempt,
      platform: d2(an()),
      channel: c(e)
    });
    let N = new x(`Failed to fetch version from ${n}/${e} after ${attempt} attempt(s): ${M}`, "Failed to fetch version from binary repo");
    throw t(`Failed to fetch version from ${n}/${e} after ${attempt} attempt(s): ${M}`, {
      level: "error"
    }), N;
  }
  let latency_ms_2 = Date.now() - s,
    y = w.data.trim(),
    S = y.length;
  if (!YDr(y)) throw m("update_check", "update_check_binary_repo_invalid_response"), new x(`Version pointer for ${e} did not return a version (got ${S} bytes)`, "Version pointer returned a non-version body");
  if (i("tengu_version_check_success", {
    latency_ms: latency_ms_2,
    attempt: attempt
  }), attempt > 1) p("update_check", "update_check_binary_repo_retry");else g("update_check");
  return y;
}
async function zMn(e) {
  if (/^v?\d+\.\d+\.\d+(-\S+)?$/.test(e)) {
    let r = e.startsWith("v") ? e.slice(1) : e;
    if (/^99\.99\./.test(r)) throw new x(`Version ${r} is not available for installation. Use 'stable' or 'latest'.`, "Test-fixture version rejected outside test builds");
    return r;
  }
  let n = e;
  if (n !== "stable" && n !== "latest" && n !== "rc") throw new x(`Invalid channel: ${e}. Use 'latest' or 'stable'`, "Invalid release channel");
  if (n === "rc") throw new x(`Invalid channel: ${e}. Use 'stable' or 'latest'`, "Invalid release channel");
  return qt(n, Ie);
}
var Cr = f(() => u({
  dist: u({
    integrity: o().min(1),
    tarball: o().min(1).optional()
  })
}));
var Gt = 120000,
  ae = 3,
  timeout = 600000,
  timeout_2 = 1e4,
  Ze = 1000,
  Qe = ae * (timeout_2 + Ze),
  Ht = 2 * Qe;
function Kt() {
  return Number(a.CLAUDE_CODE_STALL_TIMEOUT_MS_FOR_TESTING) || Gt;
}
function Yt() {
  return Number(a.CLAUDE_CODE_DOWNLOAD_DEADLINE_MS_FOR_TESTING) || timeout;
}
class StallTimeoutError extends Error {
  constructor() {
    super("Download stalled: no data received for 120 seconds");
    this.name = "StallTimeoutError";
  }
}
function Je(e) {
  if (Rc(e) && e.response) return !1;
  let n = yg(e)?.code;
  if (n === "ECONNABORTED" || n === "ETIMEDOUT") return !1;
  if (n !== void 0 && (S2.has(n) || AB.has(n))) return !0;
  return _P(e, "aborted");
}
async function Ke(e, n, r, s = {}, h) {
  let w,
    checksumRetried = !1,
    dropRetried = !1;
  for (let attempt_2 = 1; attempt_2 <= ae; attempt_2++) {
    let abortController = new AbortController(),
      F = !1,
      M = !1,
      L,
      N,
      D,
      A = () => {
        if (L) clearTimeout(L), L = void 0;
        if (N) clearTimeout(N), N = void 0;
      },
      P = () => {
        if (L) L.refresh();else L = setTimeout(T => T.abort("stall"), Kt(), abortController);
      };
    try {
      P(), N = setTimeout(W => W.abort("deadline"), Yt(), abortController);
      let T = await Me(e, {
          timeout: timeout,
          responseType: "stream",
          signal: abortController.signal,
          ...s
        }),
        I = xe("sha256"),
        V = h ? xe("sha256") : void 0,
        O = V ?? I,
        q = new qe({
          transform(W, B, K) {
            P(), O.update(W), K(null, W);
          }
        });
      if (D = Vt(r, {
        highWaterMark: 4194304
      }), D.on("drain", P), h) {
        let W = 0,
          B = new qe({
            transform(K, ee, ie) {
              if (W += K.length, W > h.decompressedSize) {
                ie(new x(`Decompressed binary exceeds the manifest size of ${h.decompressedSize} bytes`, "Decompressed binary larger than manifest size"));
                return;
              }
              I.update(K), ie(null, K);
            }
          });
        await Ae(T.data, q, Wt(), B, D, {
          signal: abortController.signal
        });
      } else await Ae(T.data, q, D, {
        signal: abortController.signal
      });
      if (F = !0, A(), h) {
        let W = V?.digest("hex");
        if (W !== h.checksum) throw new x(`Checksum mismatch: expected ${h.checksum}, got ${W} (compressed)`, "Checksum mismatch during compressed binary download");
      }
      let Z = I.digest("hex");
      if (Z !== n) throw Object.assign(new x(`Checksum mismatch: expected ${n}, got ${Z}`, "Checksum mismatch during binary download"), {
        deterministic: h !== void 0
      });
      return M = !0, await zt(r, 493), {
        checksumRetried: checksumRetried,
        dropRetried: dropRetried
      };
    } catch (T) {
      A();
      let I = Jt(T) ? Object.assign(new x(`Checksum mismatch: zstd decoder rejected the frame (${k(T)})`, "zstd decoder rejected the frame"), {
        cause: T
      }) : T;
      if (Rc(I) && I.response?.data instanceof jt) I.response.data.destroy();
      if (D && !M) {
        let K = D;
        await new Promise(ee => K.close(() => ee())), await Bt(r, {
          force: !0
        }).catch(ee => t(`Failed to remove partial download: ${ee instanceof Error ? ee.message : String(ee)}`, {
          level: "error"
        }));
      }
      let V = abortController.signal.aborted ? abortController.signal.reason : void 0,
        O = V === "deadline",
        q = !O && (V === "stall" || Ua(I));
      if (O) throw Object.assign(new x("Download timed out: exceeded the total deadline"), {
        attempt: attempt_2
      });
      let Z = I instanceof Error && I.message.includes("Checksum mismatch"),
        W = !F && (Je(I) || yg(I)?.code === "ERR_STREAM_PREMATURE_CLOSE"),
        cause = q ? new StallTimeoutError() : H(I);
      if (w = cause, (q || Z || W) && !tn(I) && attempt_2 < ae) {
        if (Z) checksumRetried = !0;else if (W) dropRetried = !0;
        t(`Download ${Z ? "checksum mismatch" : q ? "stalled" : "connection dropped"} on attempt ${attempt_2}/${ae}, retrying...`), await Y(1000);
        continue;
      }
      if (W) {
        let code = k(cause);
        throw Object.assign(new x(`The connection dropped while downloading the update (attempt ${attempt_2}/${ae}: ${cause.message}). Check your network \u2014 proxies sometimes cut off large downloads.`, "Connection dropped repeatedly during binary download"), {
          attempt: attempt_2,
          connectionDrop: !0,
          cause: cause,
          ...(code && {
            code: code
          })
        });
      }
      throw Object.assign(cause, {
        attempt: attempt_2
      });
    }
  }
  throw w ?? Error("Download failed after all retries");
}
function et() {
  return E("tengu_elegant_pancake", null);
}
function De(e, n = et()) {
  return e === "always" ? n !== !1 : n === !0;
}
function tt() {
  return je;
}
function Xt() {
  return De(tt());
}
function Zt(e, n) {
  return e === "always" || e === "flag" && De("flag", n);
}
async function nt(e, expectedVersion_2, {
  authConfig: authConfig,
  signaturePolicy: signaturePolicy,
  platform: platform,
  startTime: startTime,
  purpose = "download"
}) {
  let y = purpose === "download",
    manifestBytes_2,
    manifest,
    metadataDropRetried = !1,
    M = GMn(platform);
  try {
    let D = await Pe(`${e}/${expectedVersion_2}/manifest.json`, {
      timeout: timeout_2,
      ...authConfig,
      responseType: "arraybuffer",
      maxContentLength: 1048576
    });
    metadataDropRetried = D.dropRetried, manifestBytes_2 = Buffer.from(D.data);
    let A = Te().safeParse(J(manifestBytes_2.toString("utf8")));
    if (!A.success) throw new x(`Manifest for ${expectedVersion_2} is not a valid release manifest`, "Release manifest failed schema validation");
    manifest = A.data;
  } catch (error) {
    let latency_ms_3 = Date.now() - startTime,
      P = error instanceof Error ? error.message : String(error);
    if (y) m("update_download", "update_download_manifest_failed");
    throw i("tengu_binary_manifest_fetch_failure", {
      latency_ms: latency_ms_3,
      http_status: ge(error),
      is_timeout: be(error),
      platform: d2(platform)
    }), t(`Failed to fetch manifest from ${e}/${expectedVersion_2}/manifest.json: ${P}`, {
      level: "error"
    }), error;
  }
  let manifestAuthenticated = !1,
    signatureVerified = !1;
  if (signaturePolicy !== "skip") {
    let D = `${e}/${expectedVersion_2}/manifest.json.raw-sig.json`,
      A = Date.now(),
      http_status_2,
      T;
    try {
      let sidecar_2,
        V = !1;
      try {
        let O = await Pe(D, {
          timeout: timeout_2,
          ...authConfig,
          responseType: "json",
          maxContentLength: 65536,
          signal: AbortSignal.timeout(Qe)
        });
        metadataDropRetried ||= O.dropRetried, sidecar_2 = O.data;
      } catch (error) {
        if (http_status_2 = ge(error), http_status_2 !== 404) throw new ManifestSignatureError(expectedVersion_2, http_status_2 !== void 0 ? "sidecar_fetch_http_error" : Date.now() - A > Ht ? "sidecar_fetch_interrupted" : be(error) ? "sidecar_fetch_timeout" : "sidecar_fetch_connection_error");
        if (signaturePolicy !== "allow-unsigned-legacy") throw new ManifestSignatureError(expectedVersion_2, "sidecar_missing");
        V = !0;
      }
      if (V) p("update_manifest_signature", "unsigned_legacy"), t(`No manifest signature published for ${expectedVersion_2} (predates ${Re}); continuing with checksum-only verification`, {
        level: "warn"
      });else {
        let O = We({
          manifestBytes: manifestBytes_2,
          sidecar: sidecar_2,
          expectedVersion: expectedVersion_2,
          publicKeyPem: Be()
        });
        t(`Verified manifest signature for ${expectedVersion_2}`);
        let q = O.platforms[platform];
        if (q && q.binary !== M) throw new ManifestSignatureError(expectedVersion_2, "binary_name_mismatch");
        if (manifest = O, manifestAuthenticated = !0, signaturePolicy === "require-enforcing-release") {
          if (await Qi().catch(() => null), T = {
            flag: et()
          }, !Zt(O.manifestSignatureEnforcement, T.flag)) throw new ManifestSignatureError(expectedVersion_2, "release_predates_enforcement");
        }
        signatureVerified = !0, g("update_manifest_signature");
      }
    } catch (error) {
      if (!(error instanceof ManifestSignatureError)) throw error;
      let latency_ms_4 = Date.now() - A;
      await Qi().catch(() => null);
      let enforced = T ? De(tt(), T.flag) : Xt();
      if (i("tengu_binary_manifest_signature_failed", {
        reason: c(error.reason),
        http_status: http_status_2,
        enforced: enforced,
        platform: d2(platform),
        latency_ms: latency_ms_4
      }), enforced) {
        if (error.reason === "release_predates_enforcement") p("update_manifest_signature", error.reason), t(`${expectedVersion_2} is signed but predates manifest-signature enforcement; not eligible as a channel target for this client`, {
          level: "warn"
        });else if (error.reason === "sidecar_fetch_interrupted") p("update_manifest_signature", error.reason), t(`Signature sidecar fetch for ${expectedVersion_2} was interrupted (process suspended mid-request); will retry on the next update check`, {
          level: "warn"
        });else {
          if (m("update_manifest_signature", error.reason), y) m("update_download", "update_download_manifest_signature");
          t(`Manifest signature check failed for ${D}: ${error.reason}`, {
            level: "error"
          });
        }
        throw error;
      }
      p("update_manifest_signature", error.reason), t(`Manifest signature check failed for ${D}: ${error.reason} (enforcement disabled; continuing)`, {
        level: "warn"
      });
    }
  }
  return {
    manifest: manifest,
    manifestAuthenticated: manifestAuthenticated,
    signatureVerified: signatureVerified,
    metadataDropRetried: metadataDropRetried
  };
}
async function Qt(e, n, r, {
  authConfig: authConfig_2,
  signaturePolicy: signaturePolicy_2
}) {
  let w = se();
  await w.rm(n, {
    recursive: !0,
    force: !0
  });
  let platform_2 = tSe(),
    y = GMn(platform_2),
    startTime_2 = Date.now();
  i("tengu_binary_download_attempt", {});
  let [R, F] = await Promise.all([nt(r, e, {
      authConfig: authConfig_2,
      signaturePolicy: signaturePolicy_2,
      platform: platform_2,
      startTime: startTime_2
    }), Pe(`${r}/${e}/manifest.zst.json`, {
      timeout: timeout_2,
      ...authConfig_2,
      responseType: "json",
      maxContentLength: 1048576
    }).catch(B => {
      t(`No compressed manifest for ${e}: ${d(B)}`);
      return;
    })]),
    {
      manifest: manifest_2,
      signatureVerified: signatureVerified_2
    } = R,
    N = F?.data,
    D = R.metadataDropRetried || F?.dropRetried === !0,
    A = manifest_2.platforms[platform_2];
  if (!A) throw m("update_download", "update_download_platform_not_found"), i("tengu_binary_platform_not_found", {}), new x(`Native binaries for ${platform_2} are not available on this release channel (version ${e} ships: ${Object.keys(manifest_2.platforms).sort().join(", ")}).`, "Native binaries not available for platform on this channel");
  let P = A.checksum,
    checksum = N?.platforms?.[platform_2]?.checksum,
    decompressedSize = A.size,
    V = checksum !== void 0 && /^[a-f0-9]{64}$/.test(checksum) && decompressedSize !== void 0 && Number.isInteger(decompressedSize) && decompressedSize > 0 ? {
      checksum: checksum,
      decompressedSize: decompressedSize
    } : void 0,
    O = `${r}/${e}/${platform_2}/${y}`;
  await w.mkdir(n);
  let q = Ut(n, y),
    compressed = V !== void 0,
    W = compressed ? `${O}.zst` : O;
  try {
    let B;
    if (V) try {
      B = await Ke(W, P, q, authConfig_2 || {}, V);
    } catch (error) {
      if (ge(error) === void 0 && !en(error)) throw error;
      compressed = !1, W = O, t(`Compressed binary unusable (${error instanceof Error ? error.message : String(error)}), falling back to ${O}`);
    }
    let {
        checksumRetried: checksumRetried_2,
        dropRetried: dropRetried_2
      } = B ?? (await Ke(W, P, q, authConfig_2 || {})),
      latency_ms_5 = Date.now() - startTime_2;
    if (V && !compressed) p("update_download", "update_download_zst_fallback");else if (checksumRetried_2) p("update_download", "update_download_checksum_retry");else if (dropRetried_2 || D) p("update_download", "update_download_drop_retry");else g("update_download");
    return i("tengu_binary_download_success", {
      latency_ms: latency_ms_5,
      compressed: compressed
    }), {
      signatureVerified: signatureVerified_2,
      expectedChecksum: P
    };
  } catch (error) {
    let latency_ms_6 = Date.now() - startTime_2,
      ee = error instanceof Error ? error.message : String(error),
      is_checksum_mismatch = ee.includes("Checksum mismatch");
    if (is_checksum_mismatch) m("update_download", "update_download_checksum_mismatch");else if (error instanceof StallTimeoutError) m("update_download", "update_download_stall_timeout");else if (nn(error)) m("update_download", "update_download_connection_drop");else m("update_download", "update_download_binary_failed");
    throw i("tengu_binary_download_failure", {
      latency_ms: latency_ms_6,
      http_status: ge(error),
      is_timeout: be(error),
      is_checksum_mismatch: is_checksum_mismatch,
      attempt: rn(error),
      platform: d2(platform_2),
      compressed: compressed
    }), t(`Failed to download binary from ${W}: ${ee}`, {
      level: "error"
    }), error;
  }
}
function rt(e, {
  explicitVersionRequested: explicitVersionRequested,
  requireEnforcingRelease: requireEnforcingRelease
}) {
  return requireEnforcingRelease ? "require-enforcing-release" : explicitVersionRequested && DM(e, Re) ? "allow-unsigned-legacy" : "require";
}
async function it(e, n, r) {
  let platform_3 = tSe(),
    {
      manifest: manifest_3,
      manifestAuthenticated: manifestAuthenticated_2,
      signatureVerified: signatureVerified_3
    } = await nt(Ie, e, {
      signaturePolicy: rt(e, r),
      platform: platform_3,
      startTime: Date.now(),
      purpose: "reverify"
    });
  if (!manifestAuthenticated_2) return t(`Manifest for retained ${e} is unauthenticated; activating the retained copy without a checksum comparison`, {
    level: "warn"
  }), {
    signatureVerified: !1,
    binaryMatches: !0,
    expectedChecksum: void 0
  };
  let expectedChecksum = manifest_3.platforms[platform_3]?.checksum,
    binaryMatches = expectedChecksum !== void 0 && (await $e(n, expectedChecksum));
  if (!binaryMatches) t(`Retained ${e} does not match its signed manifest checksum; re-downloading`);
  return {
    signatureVerified: signatureVerified_3,
    binaryMatches: binaryMatches,
    expectedChecksum: expectedChecksum
  };
}
function at(e) {
  if (!Rc(e) || e.response) return !1;
  let n = yg(e)?.code;
  return n !== void 0 && (AB.has(n) || n === "ETIMEDOUT");
}
async function ke(e) {
  let n = xe("sha256");
  return await Ae(Ot(e), n), n.digest("hex");
}
async function $e(e, n) {
  try {
    return (await ke(e)) === n;
  } catch (error) {
    return t(`Could not hash ${e} (${k(error) ?? H(error).name}); treating as mismatched`), !1;
  }
}
async function ot(e, n, {
  explicitVersionRequested: explicitVersionRequested_2,
  requireEnforcingRelease: requireEnforcingRelease_2
}) {
  let {
    signatureVerified: signatureVerified_4,
    expectedChecksum: expectedChecksum_2
  } = await Qt(e, n, Ie, {
    signaturePolicy: rt(e, {
      explicitVersionRequested: explicitVersionRequested_2,
      requireEnforcingRelease: requireEnforcingRelease_2
    })
  });
  return {
    downloadType: "binary",
    signatureVerified: signatureVerified_4,
    expectedChecksum: expectedChecksum_2
  };
}
function ge(e) {
  if (Rc(e) && e.response) return e.response.status;
  return;
}
function be(e) {
  if (e instanceof StallTimeoutError) return !0;
  if (Ua(e)) return !0;
  if (Rc(e) && (e.code === "ECONNABORTED" || e.code === "ETIMEDOUT")) return !0;
  if (e !== null && typeof e === "object" && "code" in e && e.code === "ETIMEDOUT") return !0;
  let n = (e instanceof Error ? e.message : String(e)).toLowerCase();
  return n.includes("timeout") || n.includes("timed out");
}
function Jt(e) {
  return k(e)?.startsWith("ZSTD_error_") === !0;
}
function en(e) {
  let n = e instanceof Error ? e.message : String(e);
  return n.includes("Checksum mismatch") || n.includes("exceeds the manifest size");
}
function tn(e) {
  return e !== null && typeof e === "object" && "deterministic" in e && e.deterministic === !0;
}
function nn(e) {
  return e !== null && typeof e === "object" && "connectionDrop" in e && e.connectionDrop === !0;
}
function rn(e) {
  if (e !== null && typeof e === "object" && "attempt" in e && typeof e.attempt === "number") return e.attempt;
  return;
}
function an() {
  try {
    return tSe();
  } catch {
    return "unknown";
  }
}
async function Pe(e, n) {
  let dropRetried_3 = !1;
  for (let s = 1;; s++) try {
    return {
      data: (await Me(e, n)).data,
      dropRetried: dropRetried_3
    };
  } catch (error) {
    if (s >= ae || !Je(error)) throw error;
    dropRetried_3 = !0, t(`Fetch of ${e} connection dropped on attempt ${s}/${ae}, retrying...`), await Y(Ze);
  }
}
import { lstat as on, readdir as sn } from "fs/promises";
import { basename as ln, join as cn } from "path";
function me() {
  return !ws(void 0);
}
var un = 7200000;
function Le(e) {
  if (e <= 1) return !1;
  try {
    return process.kill(e, 0), !0;
  } catch {
    return !1;
  }
}
function dn(e, n) {
  if (!Le(e)) return !1;
  if (e === process.pid) return !0;
  try {
    let r = sFo(e);
    if (!r) return !0;
    let s = r.toLowerCase(),
      h = n.toLowerCase();
    return s.includes("claude") || s.includes(h);
  } catch {
    return !0;
  }
}
function de(e) {
  let n = se();
  try {
    let r = n.readFileSync(e, {
      encoding: "utf8"
    });
    if (!r || r.trim() === "") return null;
    let s = J(r);
    if (typeof s.pid !== "number" || !s.version || !s.execPath) return null;
    return s;
  } catch {
    return null;
  }
}
function _e(e) {
  let n = de(e);
  if (!n) return !1;
  let {
    pid: pid,
    execPath: execPath
  } = n;
  if (!Le(pid)) return !1;
  if (!dn(pid, execPath)) return t(`Lock PID ${pid} is running but does not appear to be Claude - treating as stale`), !1;
  let h = se();
  try {
    let w = h.statSync(e);
    if (Date.now() - w.mtimeMs > un) {
      if (!Le(pid)) return !1;
    }
  } catch {}
  return !0;
}
function fn(e, n) {
  dL(e, _(n, null, 2));
}
async function st(e, n) {
  let r = se(),
    version = ln(e);
  if (_e(n)) {
    let w = de(n);
    return t(`Cannot acquire lock for ${version} - held by PID ${w?.pid}`), null;
  }
  let h = {
    pid: process.pid,
    version: version,
    execPath: process.execPath,
    acquiredAt: Date.now()
  };
  try {
    if (fn(n, h), de(n)?.pid !== process.pid) return null;
    return t(`Acquired PID lock for ${version} (PID ${process.pid})`), () => {
      try {
        if (de(n)?.pid === process.pid) r.unlinkSync(n), t(`Released PID lock for ${version}`);
      } catch (error) {
        t(`Failed to release lock for ${version}: ${error}`);
      }
    };
  } catch (error) {
    return t(`Failed to acquire lock for ${version}: ${error}`), null;
  }
}
async function lt(e, n) {
  let r = await st(e, n);
  if (!r) return !1;
  let s = () => {
    try {
      r();
    } catch {}
  };
  return process.on("exit", s), process.on("SIGINT", s), process.on("SIGTERM", s), !0;
}
async function ut(e, n, r) {
  let s = await st(e, n);
  if (!s) return !1;
  try {
    return await r(), !0;
  } finally {
    s();
  }
}
async function dt(e) {
  let n = se(),
    r = 0,
    s;
  try {
    s = (await sn(e)).filter(item => item.endsWith(".lock"));
  } catch (error) {
    if (G(error)) return 0;
    return t(`Failed to readdir locks directory: ${H(error).message}`, {
      level: "error"
    }), 0;
  }
  for (let h of s) {
    let w = cn(e, h);
    try {
      if ((await on(w)).isDirectory()) n.rmSync(w, {
        recursive: !0,
        force: !0
      }), r++, t(`Cleaned up legacy directory lock: ${h}`);else if (!_e(w)) n.unlinkSync(w), r++, t(`Cleaned up stale lock: ${h}`);
    } catch {}
    await new Promise(b => setImmediate(b));
  }
  return r;
}
var retained_count = 2,
  stale = 604800000,
  vn = !1;
function tSe() {
  let platform_4 = a.platform,
    n = "x64";
  if (!n) {
    let r = Error("Unsupported architecture: x64");
    throw t("Native installer does not support architecture: x64", {
      level: "error"
    }), r;
  }
  if (vn) n = "arm64";
  if (platform_4 === "linux") {
    if (XE.isAndroidEnvironment()) return `linux-${n}-android`;
    if (XE.isMuslEnvironment()) return `linux-${n}-musl`;
  }
  return `${platform_4}-${n}`;
}
function GMn(e) {
  return e.startsWith("win32") ? "claude.exe" : "claude";
}
function Q() {
  let e = tSe(),
    n = GMn(e);
  return {
    versions: Hin(),
    staging: U(q$s(), "claude", "staging"),
    locks: U(V$s(), "claude", "locks"),
    executable: U(M3(), n)
  };
}
async function St(e) {
  return X(e).then(n => n.isFile() && n.size > 0, () => !1);
}
async function bn(e, n) {
  for (let r of e) if (await St(n(r))) return r;
  return;
}
function kn(e) {
  return `${e}.old.${Date.now()}.${process.pid}`;
}
var $n = 2592000000;
function En(e, n) {
  if (!e.toLowerCase().startsWith(`${n.toLowerCase()}.`)) return;
  let r = /^(?:old\.(\d+)(?:\.(\d+))?|new\.\d+\.(\d+)\.[0-9a-f]+)$/i.exec(e.slice(n.length + 1));
  return r === null ? void 0 : r[1] !== void 0 ? {
    kind: "backup",
    stampedMs: Number(r[1]),
    ownerPid: r[2] === void 0 ? void 0 : Number(r[2])
  } : {
    kind: "staged",
    stampedMs: Number(r[3])
  };
}
async function re(e) {
  try {
    let n = await X(e);
    if (!n.isFile() || n.size === 0) return !1;
    return !0;
  } catch {
    return !1;
  }
}
async function ze(e) {
  let n = Q(),
    r = [n.versions, n.staging, n.locks];
  await Promise.all(r.map(item => le(item, {
    recursive: !0
  })));
  let s = ne(n.executable);
  if (await le(s, {
    recursive: !0
  }), !/^[a-zA-Z0-9._+-]+$/.test(e) || e.includes("..") || e === ".") throw Error(`Invalid version string "${e}": contains path-unsafe characters`);
  let installPath = U(n.versions, e);
  try {
    await wn(installPath, "", {
      encoding: "utf8",
      flag: "wx"
    });
  } catch (error) {
    if (k(error) !== "EEXIST") throw error;
    try {
      if ((await X(installPath)).size === 0) {
        let date = new Date();
        await hn(installPath, date, date);
      }
    } catch {}
  }
  return {
    stagingPath: U(n.staging, e),
    installPath: installPath
  };
}
async function Rt(e, n, retries = 0) {
  let s = Q(),
    lockfilePath = we(s, e);
  if (await le(s.locks, {
    recursive: !0
  }), me()) {
    let b = 0,
      attempts_2 = retries + 1,
      S = retries > 0 ? 1000 : 100,
      R = retries > 0 ? 5000 : 500;
    while (b < attempts_2) {
      if (await ut(e, lockfilePath, async () => {
        try {
          await n();
        } catch (error) {
          throw t(`Native installer version-lock callback failed: ${error}`, {
            level: "error"
          }), error;
        }
      })) return i("tengu_version_lock_acquired", {
        is_pid_based: !0,
        is_lifetime_lock: !1,
        attempts: b + 1
      }), !0;
      if (b++, b < attempts_2) {
        let M = Math.min(S * Math.pow(2, b - 1), R);
        await Y(M);
      }
    }
    return i("tengu_version_lock_failed", {
      is_pid_based: !0,
      is_lifetime_lock: !1,
      attempts: attempts_2
    }), Se(e, Error("Lock held by another process")), !1;
  }
  let w = null;
  try {
    try {
      w = await dl(e, {
        stale: stale,
        retries: {
          retries: retries,
          minTimeout: retries > 0 ? 1000 : 100,
          maxTimeout: retries > 0 ? 5000 : 500
        },
        lockfilePath: lockfilePath,
        onCompromised: b => {
          t(`NON-FATAL: Version lock was compromised during operation: ${b.message}`, {
            level: "info"
          });
        }
      });
    } catch (error) {
      return i("tengu_version_lock_failed", {
        is_pid_based: !1,
        is_lifetime_lock: !1
      }), Se(e, error), !1;
    }
    try {
      return await n(), i("tengu_version_lock_acquired", {
        is_pid_based: !1,
        is_lifetime_lock: !1
      }), !0;
    } catch (error) {
      throw t(`tryWithVersionLock: callback failed under version lock: ${d(error)}`, {
        level: "error"
      }), error;
    }
  } finally {
    if (w) await w();
  }
}
var pt = [100, 500, 2000];
class _8t extends x {
  constructor() {
    super("Staged binary no longer matches the verified checksum; refusing to install", "Staged binary checksum mismatch at install");
  }
}
async function Tt(e, n, r) {
  await le(ne(n), {
    recursive: !0
  });
  let s;
  for (let attempts_3 = 1; attempts_3 <= pt.length + 1; attempts_3++) {
    let w = `${n}.tmp.${process.pid}.${Date.now()}.${attempts_3}`;
    try {
      if (await yt(e, w), await gn(w, 493), r !== void 0 && (await ke(w)) !== r) throw new _8t();
      return await pe(w, n), t(`Atomically installed binary to ${n}` + (attempts_3 > 1 ? ` (attempt ${attempts_3})` : "")), {
        attempts: attempts_3
      };
    } catch (error) {
      s = error;
      try {
        await te(w);
      } catch {}
      let y = k(error),
        S = y === "EBUSY" || y === "EPERM" && !0,
        R = pt[attempts_3 - 1];
      if (!S || R === void 0) throw error;
      t(`atomicMoveToInstallPath attempt ${attempts_3} failed with ${y}; retrying in ${R}ms`), await Y(R);
    }
  }
  throw s;
}
async function Sn(e, n, r) {
  try {
    let s = U(e, "node_modules", "@anthropic-ai"),
      w = (await Ee(s)).find(item => item.startsWith("claude-cli-native-"));
    if (!w) throw i("tengu_native_install_package_failure", {
      stage_find_package: !0,
      error_package_not_found: !0
    }), Error("Could not find platform-specific native package");
    let b = U(s, w, "cli");
    try {
      await X(b);
    } catch {
      throw i("tengu_native_install_package_failure", {
        stage_binary_exists: !0,
        error_binary_not_found: !0
      }), Error("Native binary not found in staged package");
    }
    let {
      attempts: y
    } = await Tt(b, n, r);
    return await he(e, {
      recursive: !0,
      force: !0
    }), i("tengu_native_install_package_success", {
      install_attempts: y
    }), {
      moveRetried: y > 1
    };
  } catch (error) {
    let h = d(error);
    if (!(h.includes("Could not find platform-specific") || h.includes("Native binary not found"))) {
      if (i("tengu_native_install_package_failure", {
        stage_atomic_move: !0,
        error_move_failed: !0
      }), m("update_apply", "update_apply_native_move_failed"), Ts(error)) t(`installVersionFromPackage: atomic move failed: ${h}`, {
        level: "error"
      });else l(H(error));
    } else m("update_apply", "update_apply_native_staging_missing"), t(`installVersionFromPackage: ${h}`, {
      level: "error"
    });
    throw error;
  }
}
async function Rn(e, n, r) {
  try {
    let s = tSe(),
      h = GMn(s),
      w = U(e, h);
    try {
      await X(w);
    } catch (error) {
      throw i("tengu_native_install_binary_failure", {
        stage_binary_exists: !0,
        error_binary_not_found: !0,
        error_code: Tg(error)
      }), Error("Staged binary not found");
    }
    let {
      attempts: b
    } = await Tt(w, n, r);
    return await he(e, {
      recursive: !0,
      force: !0
    }), i("tengu_native_install_binary_success", {
      install_attempts: b
    }), {
      moveRetried: b > 1
    };
  } catch (error) {
    if (error instanceof _8t) i("tengu_native_install_binary_failure", {
      stage_atomic_move: !0,
      error_checksum_mismatch: !0
    }), m("update_apply", "update_apply_staged_checksum_mismatch");else if (!d(error).includes("Staged binary not found")) i("tengu_native_install_binary_failure", {
      stage_atomic_move: !0,
      error_move_failed: !0,
      error_code: Tg(error)
    }), m("update_apply", "update_apply_native_move_failed");else m("update_apply", "update_apply_native_staging_missing");
    if (Ts(error)) t(`installVersionFromBinary: atomic move failed: ${d(error)}`, {
      level: "error"
    });else l(H(error));
    throw error;
  }
}
async function Tn(e, n, r, s) {
  if (r === "npm") return Sn(e, n, s);
  return Rn(e, n, s);
}
var xn = new z(() => new Map());
async function gt(e, {
  forceReinstall: forceReinstall,
  explicitVersionRequested: explicitVersionRequested_3,
  requireEnforcingRelease: s
}) {
  let {
      stagingPath: stagingPath,
      installPath: installPath_2
    } = await ze(e),
    {
      executable: executable
    } = Q(),
    y = Fe("true"),
    S = y ? `${stagingPath}.${process.pid}.${Date.now()}.${$t(4).toString("hex")}` : stagingPath,
    R = xn.of(j().host),
    F = R.get(e),
    M = !(F && (F.enforcingRelease || !s)),
    L = {
      wasNewInstall: !1,
      moveRetried: !1,
      activationFailed: !1,
      activationRefused: !1,
      skippedUnverifiedRelease: !0
    },
    N = M ? void 0 : F?.checksum,
    wasNewInstall = forceReinstall || !(await xt(e));
  if (!wasNewInstall && M) try {
    let T = await it(e, installPath_2, {
      explicitVersionRequested: explicitVersionRequested_3,
      requireEnforcingRelease: s
    });
    if (N = T.expectedChecksum, !T.binaryMatches) wasNewInstall = !0;else if (T.signatureVerified) R.set(e, {
      enforcingRelease: s,
      checksum: N
    });
  } catch (error) {
    if (error instanceof ManifestSignatureError) {
      if (s && error.reason === "release_predates_enforcement") return L;
      throw error;
    }
    if (!explicitVersionRequested_3 || s || !at(error)) throw error;
    t(`Could not re-verify retained ${e} (${H(error).name}); offline, activating as requested`, {
      level: "warn"
    });
  } else if (!wasNewInstall && F?.checksum !== void 0) {
    if (!(await $e(installPath_2, F.checksum))) t(`Retained ${e} no longer matches the checksum verified earlier in this process; re-downloading`, {
      level: "warn"
    }), R.delete(e), wasNewInstall = !0;
  }
  let moveRetried = !1;
  if (wasNewInstall) {
    t(forceReinstall ? `Force reinstalling native installer version ${e}` : `Downloading native installer version ${e}`), await At(ne(S));
    let downloadType, signatureVerified_5;
    try {
      ({
        downloadType: downloadType,
        signatureVerified: signatureVerified_5,
        expectedChecksum: N
      } = await ot(e, S, {
        explicitVersionRequested: explicitVersionRequested_3,
        requireEnforcingRelease: s
      })), {
        moveRetried: moveRetried
      } = await Tn(S, installPath_2, downloadType, N);
    } catch (error) {
      if (s && error instanceof ManifestSignatureError && error.reason === "release_predates_enforcement") return L;
      throw error;
    } finally {
      if (y) await he(S, {
        recursive: !0,
        force: !0
      }).catch(V => t(`Could not remove the update staging directory (a later update removes it after one hour): ${d(V)}`, {
        level: "warn"
      }));
    }
    if (signatureVerified_5) R.set(e, {
      enforcingRelease: s,
      checksum: N
    });
  } else t(`Version ${e} already installed, updating symlink`);
  await Fn(executable);
  let P = await Dn(executable, installPath_2, {
    expectedChecksum: N
  });
  if (P !== "updated" && !(await re(executable))) {
    let T = !1;
    try {
      await X(installPath_2), T = !0;
    } catch {}
    throw m("update_apply", "update_apply_native_symlink_failed"), Error(`Failed to create executable at ${executable}. Source file exists: ${T}. Either ${executable} is not writable, or the existing file there was not created by the native installer and is not a working launcher \u2014 the updater will not overwrite a launcher it does not own. Remove it and re-run the update.`);
  }
  return {
    wasNewInstall: wasNewInstall,
    moveRetried: moveRetried,
    activationFailed: P === "failed",
    activationRefused: P === "refused",
    skippedUnverifiedRelease: !1
  };
}
async function xt(e) {
  let {
    installPath: installPath_3
  } = await ze(e);
  return re(installPath_3);
}
async function Cn() {
  if (await An()) return !0;
  let {
    executable: executable_2
  } = Q();
  return (await re(executable_2)) && !(await p5e(executable_2).catch(() => !1));
}
async function An() {
  let {
      versions: versions,
      executable: executable_3
    } = Q(),
    r = !0,
    s = [{
      versions: versions,
      executable: executable_3
    }],
    [versions_2, w] = await Promise.all([ft(versions).catch(() => versions), ft(ne(executable_3)).catch(() => ne(executable_3))]),
    executable_4 = U(w, Oe(executable_3));
  if (versions_2 !== versions || executable_4 !== executable_3) s.push({
    versions: versions_2,
    executable: executable_4
  });
  return s.some(item => Pn(process.execPath, {
    ...item,
    isWindows: !0
  }));
}
function Pn(e, {
  versions: versions_3,
  executable: executable_5,
  isWindows: isWindows
}) {
  let h = y => isWindows ? y.replaceAll("\\", "/").toLowerCase() : y,
    w = h(e),
    b = h(versions_3).replace(/\/+$/, "") + "/";
  return w.startsWith(b) || w === h(executable_5);
}
function In() {
  try {
    let e = E("tengu_canary", {});
    return typeof e.external === "string" && Et.valid(e.external) || null;
  } catch (error) {
    return t(`getCanaryVersion: GB read failed, falling through: ${d(error)}`), null;
  }
}
async function Mn(e, n = !1) {
  let r = Date.now(),
    {
      executable: executable_6
    } = Q(),
    h = !/^v?\d+\.\d+\.\d+(-\S+)?$/.test(e),
    {
      maxVersion: maxVersion,
      forceDowngradeEnabled: forceDowngradeEnabled
    } = await QFe(),
    y = forceDowngradeEnabled && !n && h && !!maxVersion && eYe({
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.303",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-18T20:20:57Z",
      GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION, maxVersion, "native_update"),
    latestVersion = y ? maxVersion : await zMn(e),
    R = latestVersion.length;
  if (!YDr(latestVersion)) throw new x(`Invalid version string from ${h ? "version pointer" : "argument"}: not a well-formed version (${R} characters)`, "Invalid version string: not a well-formed version");
  t(`Checking for native installer update to version ${latestVersion}`);
  let requireEnforcingRelease_3 = h && (await Cn());
  if (e === "latest" && !y) {
    let T = In(),
      I = T && maxVersion && Vy(T, maxVersion);
    if (T && Vy(T, latestVersion) && !I) t(`Native installer: canary ${T} active, overriding ${latestVersion}`), latestVersion = T;else if (I) t(`Native installer: canary ${T} exceeds maxVersion ${maxVersion}, not applying`);
  }
  if (!y && !n && maxVersion && Vy(latestVersion, maxVersion)) {
    if (t(`Native installer: maxVersion ${maxVersion} is set, capping update from ${latestVersion} to ${maxVersion}`), av({
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.303",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-18T20:20:57Z",
      GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION, maxVersion)) return t(`Native installer: current version ${{
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.303",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-18T20:20:57Z",
      GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION} is already at or above maxVersion ${maxVersion}, skipping update`), i("tengu_native_update_skipped_max_version", {
      latency_ms: Date.now() - r,
      max_version: zi(maxVersion),
      available_version: zi(latestVersion)
    }), {
      success: !0,
      wasSkipped: !0,
      latestVersion: latestVersion
    };
    latestVersion = maxVersion;
  }
  if (!n && latestVersion === {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.303",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-18T20:20:57Z",
    GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
    HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "win32"
  }.VERSION && (await xt(latestVersion)) && (await re(executable_6))) return t(`Found ${latestVersion} at ${executable_6}, skipping install`), i("tengu_native_update_complete", {
    latency_ms: Date.now() - r,
    was_new_install: !1,
    was_force_reinstall: !1,
    was_already_running: !0
  }), {
    success: !0,
    wasSkipped: !0,
    latestVersion: latestVersion
  };
  if (!n && tYe(latestVersion)) return i("tengu_native_update_skipped_minimum_version", {
    latency_ms: Date.now() - r,
    target_version: zi(latestVersion)
  }), {
    success: !0,
    wasSkipped: !0,
    latestVersion: latestVersion
  };
  if (y) i("tengu_native_update_forced_downgrade", {
    from_version: zi({
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.303",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-18T20:20:57Z",
      GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION),
    to_version: zi(latestVersion)
  });
  let M = !1,
    moveRetried_2 = !1,
    activationFailed = !1,
    activationRefused = !1,
    skippedUnverifiedRelease = !1,
    latency_ms_7;
  if (Fe("true")) ({
    wasNewInstall: M,
    moveRetried: moveRetried_2,
    activationFailed: activationFailed,
    activationRefused: activationRefused,
    skippedUnverifiedRelease: skippedUnverifiedRelease
  } = await gt(latestVersion, {
    forceReinstall: n,
    explicitVersionRequested: !h,
    requireEnforcingRelease: requireEnforcingRelease_3
  })), latency_ms_7 = Date.now() - r;else {
    let {
      installPath: installPath_4
    } = await ze(latestVersion);
    if (n) await On(installPath_4);
    let I = await Rt(installPath_4, async () => {
      ({
        wasNewInstall: M,
        moveRetried: moveRetried_2,
        activationFailed: activationFailed,
        activationRefused: activationRefused,
        skippedUnverifiedRelease: skippedUnverifiedRelease
      } = await gt(latestVersion, {
        forceReinstall: n,
        explicitVersionRequested: !h,
        requireEnforcingRelease: requireEnforcingRelease_3
      }));
    }, 3);
    if (latency_ms_7 = Date.now() - r, !I) {
      let V = Q(),
        O;
      if (me()) {
        let q = we(V, installPath_4);
        if (_e(q)) O = de(q)?.pid;
      }
      return p("update_apply", "update_apply_native_lock_failed"), i("tengu_native_update_lock_failed", {
        latency_ms: latency_ms_7,
        lock_holder_pid: O
      }), {
        success: !1,
        latestVersion: latestVersion,
        lockFailed: !0,
        lockHolderPid: O
      };
    }
  }
  if (skippedUnverifiedRelease) return i("tengu_native_update_skipped_unverified_release", {
    latency_ms: latency_ms_7,
    target_version: zi(latestVersion)
  }), t(`Native installer: resolved ${latestVersion} predates manifest signature enforcement; staying on ${{
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.303",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-18T20:20:57Z",
    GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
    HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "win32"
  }.VERSION}`, {
    level: "warn"
  }), {
    success: !0,
    wasSkipped: !0,
    skippedUnverifiedRelease: !0,
    latestVersion: latestVersion
  };
  if (activationFailed) p("update_apply", "update_apply_native_activation_failed_old_binary_kept");else if (activationRefused) p("update_apply", "update_apply_native_activation_refused_external_launcher");else if (moveRetried_2) p("update_apply", "update_apply_native_move_retry");else g("update_apply");
  return i("tengu_native_update_complete", {
    latency_ms: latency_ms_7,
    was_new_install: M,
    was_force_reinstall: n
  }), t(`Successfully updated to version ${latestVersion}`), {
    success: !0,
    latestVersion: latestVersion
  };
}
async function Fn(e) {
  try {
    await _n(e), t(`Removed empty directory at ${e}`);
  } catch (error) {
    let r = k(error);
    if (r !== "ENOTDIR" && r !== "ENOENT" && r !== "ENOTEMPTY") t(`Could not remove directory at ${e}: ${error}`);
  }
}
async function Dn(e, n, {
  expectedChecksum: expectedChecksum_3
} = {}) {
  if (tSe().startsWith("win32")) try {
    let y = ne(e);
    await le(y, {
      recursive: !0
    });
    let S;
    try {
      S = await X(e);
    } catch {}
    if (S) try {
      let M = await X(n);
      if (S.size === M.size && (expectedChecksum_3 === void 0 || (await $e(e, expectedChecksum_3)))) return "noop";
    } catch {}
    let R = `${e}.new.${process.pid}.${Date.now()}.${$t(4).toString("hex")}`;
    try {
      await yt(n, R);
    } catch (error) {
      if (G(error)) throw Error(`Source file does not exist: ${n}`);
      throw error;
    }
    let F;
    try {
      F = expectedChecksum_3 === void 0 || (await ke(R)) === expectedChecksum_3;
    } catch (error) {
      throw await te(R).catch(() => {}), error;
    }
    if (!F) return await te(R).catch(() => {}), t(`Refusing to install a launcher copy of ${n} that does not match its signed checksum`, {
      level: "error"
    }), "failed";
    try {
      let M = S !== void 0;
      if (!M) try {
        await pe(R, e);
      } catch (error) {
        let N = k(error);
        if (N !== "EEXIST" && N !== "EPERM" && N !== "EBUSY") throw error;
        M = !0;
      }
      if (M) {
        let L = kn(e);
        await pe(e, L);
        try {
          await pe(R, e);
        } catch (N) {
          try {
            await pe(L, e);
          } catch (error) {
            let A = Error(`Failed to restore old executable: ${error}`, {
              cause: N
            });
            throw l(A), A;
          }
          throw N;
        }
      }
    } catch (error) {
      throw await te(R).catch(() => {}), error;
    }
    return "updated";
  } catch (error) {
    return t(`Failed to copy executable from ${n} to ${e}: ${error}`, {
      level: "error"
    }), "failed";
  }
  let w = ne(e);
  try {
    await le(w, {
      recursive: !0
    }), t(`Created directory ${w} for symlink`);
  } catch (error) {
    return t(`Failed to create directory ${w}: ${error}`, {
      level: "error"
    }), "failed";
  }
  try {
    return await mt(n, e), t(`Created symlink ${e} -> ${n}`), "updated";
  } catch (error) {
    if (k(error) !== "EEXIST") return t(`Failed to create symlink from ${e} to ${n}: ${error}`, {
      level: "error"
    }), "failed";
  }
  if (!(await KMt(e)) && !(await p5e(e).catch(() => !1))) return t(`Not replacing ${e}: it was not created by the native installer (not a symlink into a claude/versions/ directory) and is not an npm shim, so this update will not overwrite it. New versions still install under the versions/ directory; remove ${e} and re-run the update to let the installer manage the launcher again.`, {
    level: "warn"
  }), "refused";
  let b = `${e}.tmp.${process.pid}.${Date.now()}`;
  try {
    return await mt(n, b), await pe(b, e), t(`Atomically updated symlink ${e} -> ${n}`), "updated";
  } catch (error) {
    try {
      await te(b);
    } catch {}
    return t(`Failed to create symlink from ${e} to ${n}: ${error}`, {
      level: "error"
    }), "failed";
  }
}
async function X4e(e = !1) {
  if (Fe(process.env.DISABLE_INSTALLATION_CHECKS)) return [];
  let n = await XFe();
  if (n === "development") return [];
  let r = ue();
  if (!(e || n === "native" || r.installMethod === "native")) return [];
  let h = Q(),
    w = [],
    b = [],
    y = ne(h.executable),
    S = oe(y),
    F = tSe().startsWith("win32");
  try {
    await pn(y);
  } catch {
    w.push({
      message: `claude command at ${h.executable} missing or broken (${y} does not exist)`,
      userActionRequired: !0,
      type: "error"
    }), b.push("bin_dir_missing");
  }
  if (F) {
    if (!(await re(h.executable))) w.push({
      message: `claude command at ${h.executable} missing or broken`,
      userActionRequired: !0,
      type: "error"
    }), b.push("executable_missing");
  } else try {
    let L = await vt(h.executable),
      N = oe(ne(h.executable), L);
    if (!(await re(N))) w.push({
      message: `claude command at ${h.executable} missing or broken (symlink points to ${L})`,
      userActionRequired: !0,
      type: "error"
    }), b.push("executable_invalid");
  } catch (error) {
    if (G(error)) w.push({
      message: `claude command at ${h.executable} missing or broken`,
      userActionRequired: !0,
      type: "error"
    }), b.push("executable_missing");else if (!(await re(h.executable))) w.push({
      message: `claude command at ${h.executable} missing or broken (not a valid Claude binary)`,
      userActionRequired: !0,
      type: "error"
    }), b.push("executable_invalid");
  }
  if (!(a.PATH || "").split(yn).some(item => {
    try {
      let N = oe(item);
      if (F) return N.toLowerCase() === S.toLowerCase();
      return N === S;
    } catch {
      return !1;
    }
  })) if (b.push("not_in_path"), F) {
    let L = y.replaceAll("/", "\\");
    w.push({
      message: `Native installation exists but ${L} is not in your PATH. Add it by opening: System Properties \u2192 Environment Variables \u2192 Edit User PATH \u2192 New \u2192 Add the path above. Then restart your terminal.`,
      userActionRequired: !0,
      type: "path"
    });
  } else {
    let L = Rit(),
      D = Z4e()[L],
      A = D ? D.replace(kt(), "~") : "your shell config file";
    w.push({
      message: `Native installation exists but ~/.local/bin is not in your PATH. Run:

echo 'export PATH="$HOME/.local/bin:$PATH"' >> ${A} && source ${A}`,
      userActionRequired: !0,
      type: "path"
    });
  }
  if (b.length === 0) g("native_check_install");else p("native_check_install", b[0]);
  return w;
}
class Ct {
  inFlight = null;
  begin(e) {
    this.inFlight = e;
  }
  reset() {
    this.inFlight = null;
  }
}
var Ln = new z(() => new Ct());
function J4e(e, n = !1, r) {
  if (n) return ht(e, n, r);
  let s = Ln.of(j().host);
  if (s.inFlight) return t("installLatest: joining in-flight call"), s.inFlight;
  let h = ht(e, n, r);
  s.begin(h);
  let w = () => {
    s.reset();
  };
  return h.then(w, w), h;
}
async function ht(e, n = !1, r) {
  let s = await Mn(e, n);
  if (!s.success) return {
    latestVersion: null,
    wasUpdated: !1,
    lockFailed: s.lockFailed,
    lockHolderPid: s.lockHolderPid
  };
  if (s.skippedUnverifiedRelease) return {
    latestVersion: s.latestVersion,
    wasUpdated: !1,
    wasSkipped: !0,
    skippedUnverifiedRelease: !0,
    lockFailed: !1
  };
  if (ue().installMethod !== "native") await Ce(w => ({
    ...w,
    installMethod: "native",
    autoUpdates: !1,
    autoUpdatesProtectedForNative: !0
  }), r), t('Native installer: Set installMethod to "native" and disabled legacy auto-updater for protection');
  return zfr(), {
    latestVersion: s.latestVersion,
    wasUpdated: s.success && !s.wasSkipped,
    wasSkipped: s.wasSkipped,
    lockFailed: !1
  };
}
async function Nn(e) {
  try {
    let n = await vt(e),
      r = oe(ne(e), n);
    if (await re(r)) return r;
  } catch {}
  return null;
}
function we(e, n) {
  let r = Oe(n);
  return U(e.locks, `${r}.lock`);
}
async function nSe() {
  let e = Q();
  if (!process.execPath.includes(e.versions)) return;
  let n = oe(process.execPath);
  try {
    let lockfilePath_2 = we(e, n);
    if (await le(e.locks, {
      recursive: !0
    }), me()) {
      if (!(await lt(n, lockfilePath_2))) {
        i("tengu_version_lock_failed", {
          is_pid_based: !0,
          is_lifetime_lock: !0
        }), Se(n, Error("Lock already held by another process"));
        return;
      }
      i("tengu_version_lock_acquired", {
        is_pid_based: !0,
        is_lifetime_lock: !0
      }), t(`Acquired PID lock on running version: ${n}`);
    } else {
      let s;
      try {
        s = await dl(n, {
          stale: stale,
          retries: 0,
          lockfilePath: lockfilePath_2,
          onCompromised: h => {
            t(`NON-FATAL: Lock on running version was compromised: ${h.message}`, {
              level: "info"
            });
          }
        }), i("tengu_version_lock_acquired", {
          is_pid_based: !1,
          is_lifetime_lock: !0
        }), t(`Acquired mtime-based lock on running version: ${n}`), bt(async () => {
          try {
            await s?.();
          } catch {}
        });
      } catch (error) {
        if (G(error)) {
          t(`Cannot lock current version - file does not exist: ${n}`, {
            level: "info"
          });
          return;
        }
        i("tengu_version_lock_failed", {
          is_pid_based: !1,
          is_lifetime_lock: !0
        }), Se(n, error);
        return;
      }
    }
  } catch (error) {
    if (G(error)) {
      t(`Cannot lock current version - file does not exist: ${n}`, {
        level: "info"
      });
      return;
    }
    t(`NON-FATAL: Failed to lock current version during execution ${d(error)}`, {
      level: "info"
    });
  }
}
function Se(e, n) {
  t(`NON-FATAL: Lock acquisition failed for ${e} (expected in multi-process scenarios): ${d(n)}`, {
    level: "error"
  });
}
async function On(e) {
  let n = Q(),
    r = we(n, e);
  try {
    await te(r), t(`Force-removed lock file at ${r}`);
  } catch (error) {
    t(`Failed to force-remove lock file: ${d(error)}`);
  }
}
var Vn = 3600000;
async function At(e) {
  let n = Date.now() - Vn;
  try {
    let r = await Ee(e),
      cleaned_count = 0;
    for (let h of r) {
      let w = U(e, h);
      try {
        if ((await X(w)).mtime.getTime() < n) await he(w, {
          recursive: !0,
          force: !0
        }), cleaned_count++, t(`Cleaned up old staging directory: ${h}`);
      } catch {}
    }
    if (cleaned_count > 0) t(`Cleaned up ${cleaned_count} orphaned staging directories`), i("tengu_native_staging_cleanup", {
      cleaned_count: cleaned_count
    });
  } catch (error) {
    if (!G(error)) t(`Failed to clean up staging directories: ${error}`);
  }
}
async function zfr() {
  await Promise.resolve();
  let e = Q(),
    n = Date.now() - 3600000,
    r = Date.now() - 1209600000,
    s = Date.now() - $n;
  if (tSe().startsWith("win32")) {
    let y = ne(e.executable),
      S = Oe(e.executable);
    try {
      let R = await Ee(y),
        F = R.flatMap(P => {
          let T = En(P, S);
          return T === void 0 ? [] : [{
            file: P,
            ...T
          }];
        }),
        M = F.filter(item => item.kind === "backup").sort((itemA, itemB) => itemB.stampedMs - itemA.stampedMs),
        L = R.find(item => item.toLowerCase() === S.toLowerCase()),
        N = M.length > 0 && !(L !== void 0 && (await St(U(y, L)))),
        D = N ? await bn(M, P => U(y, P.file)) : void 0,
        A = 0;
      for (let P of F) {
        if (P.kind === "backup" && N && (P === D && P.stampedMs >= s || P.stampedMs >= r)) continue;
        try {
          let T = U(y, P.file);
          if (P.stampedMs >= n || (await X(T)).mtime.getTime() >= n) continue;
          await te(T), A++;
        } catch {}
      }
      if (A > 0) t(`Cleaned up ${A} old Windows executables on startup`);
    } catch (error) {
      if (!G(error)) t(`Failed to clean up old Windows executables: ${error}`);
    }
  }
  if (await At(e.staging), me()) {
    let cleaned_count_2 = await dt(e.locks);
    if (cleaned_count_2 > 0) t(`Cleaned up ${cleaned_count_2} stale version locks`), i("tengu_native_stale_locks_cleanup", {
      cleaned_count: cleaned_count_2
    });
  }
  let h;
  try {
    h = await Ee(e.versions);
  } catch (error) {
    if (!G(error)) t(`Failed to readdir versions directory: ${error}`), p("native_cleanup_versions", "readdir_failed");else g("native_cleanup_versions");
    return;
  }
  let w = [],
    cleaned_count_3 = 0;
  for (let name of h) {
    let path = U(e.versions, name);
    if (/\.tmp\.\d+\.\d+(\.\d+)?$/.test(name)) {
      try {
        if ((await X(path)).mtime.getTime() < n) await te(path), cleaned_count_3++, t(`Cleaned up orphaned temp install file: ${name}`);
      } catch {}
      continue;
    }
    try {
      let R = await X(path);
      if (!R.isFile()) continue;
      w.push({
        name: name,
        path: path,
        resolvedPath: oe(path),
        mtime: R.mtime,
        size: R.size
      });
    } catch {}
  }
  if (cleaned_count_3 > 0) t(`Cleaned up ${cleaned_count_3} orphaned temp install files`), i("tengu_native_temp_files_cleanup", {
    cleaned_count: cleaned_count_3
  });
  if (w.length === 0) {
    g("native_cleanup_versions");
    return;
  }
  if (!(await KMt(e.executable)) && !(await p5e(e.executable).catch(() => !1))) {
    t(`Skipping native version cleanup: the launcher at ${e.executable} is externally managed, so the version(s) it needs cannot be determined`), p("native_cleanup_versions", "skipped_external_launcher");
    return;
  }
  try {
    let execPath_2 = process.execPath,
      S = new Set();
    if (execPath_2 && execPath_2.includes(e.versions)) S.add(oe(execPath_2));
    let R = await Nn(e.executable);
    if (R) S.add(R);else if (tSe().startsWith("win32")) try {
      let A = await X(e.executable);
      for (let P of w) if (P.size === A.size) S.add(P.resolvedPath);
    } catch {}
    for (let A of w) {
      if (S.has(A.resolvedPath)) continue;
      let lockfilePath_3 = we(e, A.resolvedPath),
        T = !1;
      if (me()) T = _e(lockfilePath_3);else try {
        T = await u4s(A.resolvedPath, {
          stale: stale,
          lockfilePath: lockfilePath_3
        });
      } catch {
        T = !1;
      }
      if (T) S.add(A.resolvedPath), t(`Protecting locked version from cleanup: ${A.name}`);
      await new Promise(I => setImmediate(I));
    }
    let F = w.filter(item => !S.has(item.resolvedPath)).sort((itemA, itemB) => itemB.mtime.getTime() - itemA.mtime.getTime()),
      M = [...F.filter(item => item.size > 0).slice(retained_count), ...F.filter(item => item.size === 0 && item.mtime.getTime() < n)];
    if (M.length === 0) {
      i("tengu_native_version_cleanup", {
        total_count: w.length,
        deleted_count: 0,
        protected_count: S.size,
        retained_count: retained_count,
        lock_failed_count: 0,
        error_count: 0
      }), g("native_cleanup_versions");
      return;
    }
    let deleted_count = 0,
      lock_failed_count = 0,
      error_count = 0;
    if (await Promise.all(M.map(async item => {
      try {
        let P = !0,
          T = await Rt(item.path, async () => {
            if (item.size === 0) {
              let I = await X(item.path);
              if (I.size > 0 || I.mtime.getTime() >= n) {
                P = !1;
                return;
              }
            }
            await te(item.path);
          });
        if (T && P) deleted_count++;else if (!T) lock_failed_count++, t(`Skipping deletion of ${item.name} - locked by another process`);
      } catch (error) {
        error_count++, t(`Failed to delete version ${item.name}: ${error}`, {
          level: "error"
        });
      }
    })), i("tengu_native_version_cleanup", {
      total_count: w.length,
      deleted_count: deleted_count,
      protected_count: S.size,
      retained_count: retained_count,
      lock_failed_count: lock_failed_count,
      error_count: error_count
    }), error_count > 0) p("native_cleanup_versions", "delete_errors");else if (lock_failed_count > 0) p("native_cleanup_versions", "lock_failed");else g("native_cleanup_versions");
  } catch (error) {
    if (!G(error)) l(Error(`Version cleanup failed: ${error}`)), p("native_cleanup_versions", "unexpected_error");else g("native_cleanup_versions");
  }
}
async function gAt() {
  let e = Q();
  try {
    if (await p5e(e.executable).catch(n => {
      if (G(n)) return !1;
      throw n;
    })) {
      t(`Skipping removal of ${e.executable} - appears to be npm-managed`), g("native_remove_symlink");
      return;
    }
    if (!(await KMt(e.executable))) {
      t(`Skipping removal of ${e.executable} - not created by the native installer`), g("native_remove_symlink");
      return;
    }
    await te(e.executable), t(`Removed claude symlink at ${e.executable}`), g("native_remove_symlink");
  } catch (error) {
    if (G(error)) {
      g("native_remove_symlink");
      return;
    }
    t(`Failed to remove claude symlink: ${error}`, {
      level: "error"
    }), m("native_remove_symlink", "unlink_failed");
  }
}
async function sio() {
  let e = [],
    n = Z4e(),
    r = !1;
  for (let [s, h] of Object.entries(n)) try {
    let w = await qMn(h);
    if (!w) continue;
    let {
      filtered: filtered,
      hadAlias: hadAlias
    } = qfr(w);
    if (hadAlias) await Kfr(h, filtered), e.push({
      message: `Removed claude alias from ${h}. Run: unalias claude`,
      userActionRequired: !0,
      type: "alias"
    }), t(`Cleaned up claude alias from ${s} config`);
  } catch (error) {
    r = !0, t(`Failed to clean up claude alias from ${h}: ${error}`, {
      level: "error"
    }), e.push({
      message: `Failed to clean up ${h}: ${error}`,
      userActionRequired: !1,
      type: "error"
    });
  }
  if (r) p("native_cleanup_aliases", "config_write_failed");else g("native_cleanup_aliases");
  return e;
}
async function zn(e) {
  try {
    let n = await ct("npm", ["config", "get", "prefix"], {
      useToolMemoryCgroup: !1
    });
    if (n.code !== 0 || !n.stdout) return {
      success: !1,
      error: "Failed to get npm global prefix"
    };
    let r = n.stdout.trim(),
      s = !1;
    async function h(w, b) {
      try {
        return await te(w), t(`Manually removed ${b}: ${w}`), !0;
      } catch {
        return !1;
      }
    }
    if (tSe().startsWith("win32")) {
      let w = U(r, "claude.cmd"),
        b = U(r, "claude.ps1"),
        y = U(r, "claude");
      if (await h(w, "bin script")) s = !0;
      if (await h(b, "PowerShell script")) s = !0;
      if (await h(y, "bin executable")) s = !0;
    } else {
      let w = U(r, "bin", "claude");
      if (await h(w, "bin symlink")) s = !0;
    }
    if (s) {
      t(`Successfully removed ${e} manually`);
      let w = tSe().startsWith("win32") ? U(r, "node_modules", e) : U(r, "lib", "node_modules", e);
      return {
        success: !0,
        warning: `${e} executables removed, but node_modules directory was left intact for safety. You may manually delete it later at: ${w}`
      };
    } else return {
      success: !1
    };
  } catch (n) {
    return t(`Manual removal failed: ${n}`, {
      level: "error"
    }), {
      success: !1,
      error: `Manual removal failed: ${n}`
    };
  }
}
async function wt(e) {
  let {
    code: code_2,
    stderr: stderr
  } = await ct("npm", ["uninstall", "-g", e], {
    cwd: process.cwd(),
    useToolMemoryCgroup: !1
  });
  if (code_2 === 0) return t(`Removed global npm installation of ${e}`), {
    success: !0
  };else if (stderr && !stderr.includes("npm ERR! code E404")) {
    if (stderr.includes("npm error code ENOTEMPTY")) {
      t(`Failed to uninstall global npm package ${e}: ${stderr}`, {
        level: "error"
      }), t("Attempting manual removal due to ENOTEMPTY error");
      let s = await zn(e);
      if (s.success) return {
        success: !0,
        warning: s.warning
      };else if (s.error) return {
        success: !1,
        error: `Failed to remove global npm installation of ${e}: ${stderr}. Manual removal also failed: ${s.error}`
      };
    }
    return t(`Failed to uninstall global npm package ${e}: ${stderr}`, {
      level: "error"
    }), {
      success: !1,
      error: `Failed to remove global npm installation of ${e}: ${stderr}`
    };
  }
  return {
    success: !1
  };
}
async function iio() {
  let errors = [],
    warnings = [],
    removed = 0,
    s = !1,
    h = !1,
    w = await wt("@anthropic-ai/claude-code");
  if (w.success) {
    if (removed++, w.warning) warnings.push(w.warning);
  } else if (w.error) errors.push(w.error), s = !0;
  if ({
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.303",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-18T20:20:57Z",
    GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
    HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "win32"
  }.PACKAGE_URL && {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.303",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-18T20:20:57Z",
    GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
    HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "win32"
  }.PACKAGE_URL !== "@anthropic-ai/claude-code") {
    let y = await wt({
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.303",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-18T20:20:57Z",
      GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.PACKAGE_URL);
    if (y.success) {
      if (removed++, y.warning) warnings.push(y.warning);
    } else if (y.error) errors.push(y.error), s = !0;
  }
  let b = U(kt(), ".claude", "local");
  try {
    await he(b, {
      recursive: !0
    }), removed++, t(`Removed local installation at ${b}`);
  } catch (error) {
    if (!G(error)) errors.push(`Failed to remove ${b}: ${error}`), t(`Failed to remove local installation: ${error}`, {
      level: "error"
    }), h = !0;
  }
  if (errors.length === 0) g("native_cleanup_npm");else if (removed > 0) p("native_cleanup_npm", "partial_errors");else if (s && !h) m("native_cleanup_npm", "npm_uninstall_failed");else if (h && !s) m("native_cleanup_npm", "local_install_remove_failed");else m("native_cleanup_npm", "npm_uninstall_failed");
  return {
    removed: removed,
    errors: errors,
    warnings: warnings
  };
}
export { ManifestSignatureError as H0, zMn, StallTimeoutError as y8t, tSe, GMn, _8t, X4e, J4e, nSe, zfr, gAt, sio, iio };