// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Nw, ag, x_, kN, NKn, fi, o$, sp, x, Ee, le } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { Ne, zo } from "B:/~BUN/root/chunk-ekrhn4q1.js";
import { q, j } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { P, oP, te, l, v, Kg, as, B } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Q } from "B:/~BUN/root/chunk-17wqwt36.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { gt, b, J, ce, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { Ve } from "B:/~BUN/root/chunk-py7yqpgt.js";
import { eH } from "B:/~BUN/root/chunk-2swveyqa.js";
import { Ri, BFo } from "B:/~BUN/root/chunk-vpejnsp4.js";
import { CN, tl, ih } from "B:/~BUN/root/chunk-bt3h0syz.js";
import { Fa, fu } from "B:/~BUN/root/chunk-vyq5y0zs.js";
import { DD, C$, Um } from "B:/~BUN/root/chunk-zafy1b6k.js";
import { yUr } from "B:/~BUN/root/chunk-83yxmdy5.js";
import { fit, NLe } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { y0n, fGe, oMe, _0n, XXt, b0n, Qwe, sMe, iMe } from "B:/~BUN/root/chunk-fgh2wjv6.js";
import { Xwe } from "B:/~BUN/root/chunk-nwhcj0v8.js";
import { IB } from "B:/~BUN/root/chunk-xmtkv29j.js";
import { LPo, NPo, OLt, Fz } from "B:/~BUN/root/chunk-dqm1wqrw.js";
import { o, E, u, ut, fe, A } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { be } from "B:/~BUN/root/chunk-yv67t8hr.js";
var kt = be(ih(), 1);
import { constants as fn } from "fs";
import { access as mn, chmod as pn, copyFile as wt, mkdir as se, readdir as Se, readlink as yt, realpath as dt, rename as pe, rm as he, rmdir as gn, stat as H, symlink as ft, unlink as ee, utimes as _n, writeFile as hn } from "fs/promises";
import { homedir as vt } from "os";
import { randomBytes as bt } from "crypto";
import { basename as Le, delimiter as wn, dirname as ne, join as U, resolve as oe } from "path";
import { createHash as Ce } from "crypto";
import { createReadStream as Nt, createWriteStream as Lt } from "fs";
import { chmod as Ot, rm as Vt } from "fs/promises";
import { join as Ut } from "path";
import { Readable as zt, Transform as We } from "stream";
import { pipeline as xe } from "stream/promises";
import { createZstdDecompress as Bt } from "zlib";
import { createHash as xt, createPublicKey as Pt, verify as Mt } from "crypto";
function ze() {
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
var Be = Buffer.from("claude-code-manifest-v1\x00"),
  Te = "2.1.207",
  Ge = "flag";
var It = 1,
  Ft = "RSASSA-PKCS1-v1_5-SHA512",
  Dt = f(() => u({
    schema: A(It),
    algorithm: A(Ft),
    signature: o().min(1),
    publicKeySha256: o().regex(/^[0-9a-f]{64}$/)
  })),
  Ae = f(() => ut({
    version: o(),
    manifestSignatureEnforcement: o().optional(),
    platforms: fe(o(), ut({
      checksum: o(),
      size: E().optional(),
      binary: o().optional()
    }))
  }));
class ManifestSignatureError extends P {
  reason;
  constructor(e, n) {
    super(`Release verification failed for Claude Code ${e} (${n}). The update was not installed.`, "Release manifest signature verification failed", n);
    this.name = "ManifestSignatureError", this.reason = n;
  }
}
function je({
  manifestBytes: manifestBytes,
  sidecar: sidecar,
  expectedVersion: expectedVersion,
  publicKeyPem: publicKeyPem
}) {
  let g = Dt().safeParse(sidecar);
  if (!g.success) throw new ManifestSignatureError(expectedVersion, "sidecar_malformed");
  let {
    signature: signature,
    publicKeySha256: publicKeySha256
  } = g.data;
  if (Buffer.from(signature, "base64").toString("base64") !== signature) throw new ManifestSignatureError(expectedVersion, "sidecar_malformed");
  let w;
  try {
    w = Pt(publicKeyPem);
  } catch {
    throw new ManifestSignatureError(expectedVersion, "key_mismatch");
  }
  let k = xt("sha256").update(w.export({
    type: "spki",
    format: "der"
  })).digest("hex");
  if (publicKeySha256 !== k) throw new ManifestSignatureError(expectedVersion, "key_mismatch");
  let R = !1;
  try {
    R = Mt("sha512", Buffer.concat([Be, manifestBytes]), w, Buffer.from(signature, "base64"));
  } catch {
    R = !1;
  }
  if (!R) throw new ManifestSignatureError(expectedVersion, "signature_invalid");
  let I;
  try {
    let M = Ae().safeParse(J(manifestBytes.toString("utf8")));
    I = M.success ? M.data : void 0;
  } catch {
    I = void 0;
  }
  if (!I || I.version !== expectedVersion) throw new ManifestSignatureError(expectedVersion, "version_mismatch");
  return I;
}
var Me = "https://downloads.claude.ai/claude-code-releases";
function Ie(e, n) {
  return CN(e) ? IB.get(e, n) : tl.get(e, n);
}
var qe = 30000,
  attempts = 3;
async function Gt(e = "latest", n, r) {
  let s = Date.now(),
    attempt = 0,
    h;
  try {
    h = await y0n(signal => (attempt++, Ie(`${n}/${e}`, {
      timeout: qe,
      responseType: "text",
      signal: signal,
      ...r
    })), {
      attempts: attempts,
      timeoutMs: qe,
      onRetry: (R, I) => {
        t(`Version check failed on attempt ${R}/${attempts}, retrying: ${I instanceof Error ? I.message : String(I)}`);
      }
    });
  } catch (error) {
    let latency_ms = Date.now() - s,
      M = error instanceof Error ? error.message : String(error),
      http_status = ge(error);
    m("update_check", "update_check_binary_repo_failed"), i("tengu_version_check_failure", {
      latency_ms: latency_ms,
      http_status: http_status,
      is_timeout: ve(error),
      attempt: attempt,
      platform: o$(rn()),
      channel: c(e)
    });
    let N = new P(`Failed to fetch version from ${n}/${e} after ${attempt} attempt(s): ${M}`, "Failed to fetch version from binary repo");
    throw t(`Failed to fetch version from ${n}/${e} after ${attempt} attempt(s): ${M}`, {
      level: "error"
    }), N;
  }
  let latency_ms_2 = Date.now() - s,
    w = h.data.trim(),
    k = w.length;
  if (!NKn(w)) throw m("update_check", "update_check_binary_repo_invalid_response"), new P(`Version pointer for ${e} did not return a version (got ${k} bytes)`, "Version pointer returned a non-version body");
  if (i("tengu_version_check_success", {
    latency_ms: latency_ms_2,
    attempt: attempt
  }), attempt > 1) p("update_check", "update_check_binary_repo_retry");else _("update_check");
  return w;
}
async function qXt(e) {
  if (/^v?\d+\.\d+\.\d+(-\S+)?$/.test(e)) {
    let r = e.startsWith("v") ? e.slice(1) : e;
    if (/^99\.99\./.test(r)) throw new P(`Version ${r} is not available for installation. Use 'stable' or 'latest'.`, "Test-fixture version rejected outside test builds");
    return r;
  }
  let n = e;
  if (n !== "stable" && n !== "latest" && n !== "rc") throw new P(`Invalid channel: ${e}. Use 'latest' or 'stable'`, "Invalid release channel");
  if (n === "rc") throw new P(`Invalid channel: ${e}. Use 'stable' or 'latest'`, "Invalid release channel");
  return Gt(n, Me);
}
var Tr = f(() => u({
  dist: u({
    integrity: o().min(1),
    tarball: o().min(1).optional()
  })
}));
var jt = 120000,
  ae = 3,
  timeout = 600000,
  timeout_2 = 1e4,
  Qe = 1000,
  Ze = ae * (timeout_2 + Qe),
  Wt = 2 * Ze;
function qt() {
  return Number(a.CLAUDE_CODE_STALL_TIMEOUT_MS_FOR_TESTING) || jt;
}
function Ht() {
  return Number(a.CLAUDE_CODE_DOWNLOAD_DEADLINE_MS_FOR_TESTING) || timeout;
}
class StallTimeoutError extends Error {
  constructor() {
    super("Download stalled: no data received for 120 seconds");
    this.name = "StallTimeoutError";
  }
}
function Je(e) {
  if (fu(e) && e.response) return !1;
  let n = Um(e)?.code;
  if (n === "ECONNABORTED" || n === "ETIMEDOUT") return !1;
  if (n !== void 0 && (C$.has(n) || DD.has(n))) return !0;
  return oP(e, "aborted");
}
async function Ke(e, n, r, s = {}, g) {
  let h,
    checksumRetried = !1,
    dropRetried = !1;
  for (let attempt_2 = 1; attempt_2 <= ae; attempt_2++) {
    let abortController = new AbortController(),
      I = !1,
      M = !1,
      D,
      N,
      F,
      T = () => {
        if (D) clearTimeout(D), D = void 0;
        if (N) clearTimeout(N), N = void 0;
      },
      C = () => {
        if (D) D.refresh();else D = setTimeout(S => S.abort("stall"), qt(), abortController);
      };
    try {
      C(), N = setTimeout(z => z.abort("deadline"), Ht(), abortController);
      let S = await Ie(e, {
          timeout: timeout,
          responseType: "stream",
          signal: abortController.signal,
          ...s
        }),
        L = Ce("sha256"),
        O = g ? Ce("sha256") : void 0,
        G = O ?? L,
        K = new We({
          transform(z, V, W) {
            C(), G.update(z), W(null, z);
          }
        });
      if (F = Lt(r, {
        highWaterMark: 4194304
      }), F.on("drain", C), g) {
        let z = 0,
          V = new We({
            transform(W, Z, ie) {
              if (z += W.length, z > g.decompressedSize) {
                ie(new P(`Decompressed binary exceeds the manifest size of ${g.decompressedSize} bytes`, "Decompressed binary larger than manifest size"));
                return;
              }
              L.update(W), ie(null, W);
            }
          });
        await xe(S.data, K, Bt(), V, F, {
          signal: abortController.signal
        });
      } else await xe(S.data, K, F, {
        signal: abortController.signal
      });
      if (I = !0, T(), g) {
        let z = O?.digest("hex");
        if (z !== g.checksum) throw new P(`Checksum mismatch: expected ${g.checksum}, got ${z} (compressed)`, "Checksum mismatch during compressed binary download");
      }
      let Y = L.digest("hex");
      if (Y !== n) throw Object.assign(new P(`Checksum mismatch: expected ${n}, got ${Y}`, "Checksum mismatch during binary download"), {
        deterministic: g !== void 0
      });
      return M = !0, await Ot(r, 493), {
        checksumRetried: checksumRetried,
        dropRetried: dropRetried
      };
    } catch (S) {
      T();
      let L = Zt(S) ? Object.assign(new P(`Checksum mismatch: zstd decoder rejected the frame (${v(S)})`, "zstd decoder rejected the frame"), {
        cause: S
      }) : S;
      if (fu(L) && L.response?.data instanceof zt) L.response.data.destroy();
      if (F && !M) {
        let W = F;
        await new Promise(Z => W.close(() => Z())), await Vt(r, {
          force: !0
        }).catch(Z => t(`Failed to remove partial download: ${Z instanceof Error ? Z.message : String(Z)}`, {
          level: "error"
        }));
      }
      let O = abortController.signal.aborted ? abortController.signal.reason : void 0,
        G = O === "deadline",
        K = !G && (O === "stall" || Fa(L));
      if (G) throw Object.assign(new P("Download timed out: exceeded the total deadline"), {
        attempt: attempt_2
      });
      let Y = L instanceof Error && L.message.includes("Checksum mismatch"),
        z = !I && (Je(L) || Um(L)?.code === "ERR_STREAM_PREMATURE_CLOSE"),
        cause = K ? new StallTimeoutError() : te(L);
      if (h = cause, (K || Y || z) && !en(L) && attempt_2 < ae) {
        if (Y) checksumRetried = !0;else if (z) dropRetried = !0;
        t(`Download ${Y ? "checksum mismatch" : K ? "stalled" : "connection dropped"} on attempt ${attempt_2}/${ae}, retrying...`), await Q(1000);
        continue;
      }
      if (z) {
        let code = v(cause);
        throw Object.assign(new P(`The connection dropped while downloading the update (attempt ${attempt_2}/${ae}: ${cause.message}). Check your network \u2014 proxies sometimes cut off large downloads.`, "Connection dropped repeatedly during binary download"), {
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
  throw h ?? Error("Download failed after all retries");
}
function et(e) {
  let n = x("tengu_elegant_pancake", null);
  return e === "always" ? n !== !1 : n === !0;
}
function Kt() {
  return Ge;
}
function Yt() {
  return et(Kt());
}
function Xt(e) {
  return e === "always" || e === "flag" && et("flag");
}
async function tt(e, expectedVersion_2, {
  authConfig: authConfig,
  signaturePolicy: signaturePolicy,
  platform: platform,
  startTime: startTime,
  purpose = "download"
}) {
  let w = purpose === "download",
    manifestBytes_2,
    manifest,
    metadataDropRetried = !1,
    M = KXt(platform);
  try {
    let F = await Pe(`${e}/${expectedVersion_2}/manifest.json`, {
      timeout: timeout_2,
      ...authConfig,
      responseType: "arraybuffer",
      maxContentLength: 1048576
    });
    metadataDropRetried = F.dropRetried, manifestBytes_2 = Buffer.from(F.data);
    let T = Ae().safeParse(J(manifestBytes_2.toString("utf8")));
    if (!T.success) throw new P(`Manifest for ${expectedVersion_2} is not a valid release manifest`, "Release manifest failed schema validation");
    manifest = T.data;
  } catch (error) {
    let latency_ms_3 = Date.now() - startTime,
      C = error instanceof Error ? error.message : String(error);
    if (w) m("update_download", "update_download_manifest_failed");
    throw i("tengu_binary_manifest_fetch_failure", {
      latency_ms: latency_ms_3,
      http_status: ge(error),
      is_timeout: ve(error),
      platform: o$(platform)
    }), t(`Failed to fetch manifest from ${e}/${expectedVersion_2}/manifest.json: ${C}`, {
      level: "error"
    }), error;
  }
  let manifestAuthenticated = !1,
    signatureVerified = !1;
  if (signaturePolicy !== "skip") {
    let F = `${e}/${expectedVersion_2}/manifest.json.raw-sig.json`,
      T = Date.now(),
      http_status_2;
    try {
      let sidecar_2,
        L = !1;
      try {
        let O = await Pe(F, {
          timeout: timeout_2,
          ...authConfig,
          responseType: "json",
          maxContentLength: 65536,
          signal: AbortSignal.timeout(Ze)
        });
        metadataDropRetried ||= O.dropRetried, sidecar_2 = O.data;
      } catch (error) {
        if (http_status_2 = ge(error), http_status_2 !== 404) throw new ManifestSignatureError(expectedVersion_2, http_status_2 !== void 0 ? "sidecar_fetch_http_error" : Date.now() - T > Wt ? "sidecar_fetch_interrupted" : ve(error) ? "sidecar_fetch_timeout" : "sidecar_fetch_connection_error");
        if (signaturePolicy !== "allow-unsigned-legacy") throw new ManifestSignatureError(expectedVersion_2, "sidecar_missing");
        L = !0;
      }
      if (L) p("update_manifest_signature", "unsigned_legacy"), t(`No manifest signature published for ${expectedVersion_2} (predates ${Te}); continuing with checksum-only verification`, {
        level: "warn"
      });else {
        let O = je({
          manifestBytes: manifestBytes_2,
          sidecar: sidecar_2,
          expectedVersion: expectedVersion_2,
          publicKeyPem: ze()
        });
        t(`Verified manifest signature for ${expectedVersion_2}`);
        let G = O.platforms[platform];
        if (G && G.binary !== M) throw new ManifestSignatureError(expectedVersion_2, "binary_name_mismatch");
        if (manifest = O, manifestAuthenticated = !0, signaturePolicy === "require-enforcing-release" && !Xt(O.manifestSignatureEnforcement)) throw new ManifestSignatureError(expectedVersion_2, "release_predates_enforcement");
        signatureVerified = !0, _("update_manifest_signature");
      }
    } catch (error) {
      if (!(error instanceof ManifestSignatureError)) throw error;
      let latency_ms_4 = Date.now() - T;
      await sp().catch(() => null);
      let enforced = Yt();
      if (i("tengu_binary_manifest_signature_failed", {
        reason: c(error.reason),
        http_status: http_status_2,
        enforced: enforced,
        platform: o$(platform),
        latency_ms: latency_ms_4
      }), enforced) {
        if (error.reason === "release_predates_enforcement") p("update_manifest_signature", error.reason), t(`${expectedVersion_2} is signed but predates manifest-signature enforcement; not eligible as a channel target for this client`, {
          level: "warn"
        });else if (error.reason === "sidecar_fetch_interrupted") p("update_manifest_signature", error.reason), t(`Signature sidecar fetch for ${expectedVersion_2} was interrupted (process suspended mid-request); will retry on the next update check`, {
          level: "warn"
        });else {
          if (m("update_manifest_signature", error.reason), w) m("update_download", "update_download_manifest_signature");
          t(`Manifest signature check failed for ${F}: ${error.reason}`, {
            level: "error"
          });
        }
        throw error;
      }
      p("update_manifest_signature", error.reason), t(`Manifest signature check failed for ${F}: ${error.reason} (enforcement disabled; continuing)`, {
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
  let h = ce();
  await h.rm(n, {
    recursive: !0,
    force: !0
  });
  let platform_2 = Nse(),
    w = KXt(platform_2),
    startTime_2 = Date.now();
  i("tengu_binary_download_attempt", {});
  let [R, I] = await Promise.all([tt(r, e, {
      authConfig: authConfig_2,
      signaturePolicy: signaturePolicy_2,
      platform: platform_2,
      startTime: startTime_2
    }), Pe(`${r}/${e}/manifest.zst.json`, {
      timeout: timeout_2,
      ...authConfig_2,
      responseType: "json",
      maxContentLength: 1048576
    }).catch(V => {
      t(`No compressed manifest for ${e}: ${l(V)}`);
      return;
    })]),
    {
      manifest: manifest_2,
      signatureVerified: signatureVerified_2
    } = R,
    N = I?.data,
    F = R.metadataDropRetried || I?.dropRetried === !0,
    T = manifest_2.platforms[platform_2];
  if (!T) throw m("update_download", "update_download_platform_not_found"), i("tengu_binary_platform_not_found", {}), new P(`Native binaries for ${platform_2} are not available on this release channel (version ${e} ships: ${Object.keys(manifest_2.platforms).sort().join(", ")}).`, "Native binaries not available for platform on this channel");
  let C = T.checksum,
    checksum = N?.platforms?.[platform_2]?.checksum,
    decompressedSize = T.size,
    O = checksum !== void 0 && /^[a-f0-9]{64}$/.test(checksum) && decompressedSize !== void 0 && Number.isInteger(decompressedSize) && decompressedSize > 0 ? {
      checksum: checksum,
      decompressedSize: decompressedSize
    } : void 0,
    G = `${r}/${e}/${platform_2}/${w}`;
  await h.mkdir(n);
  let K = Ut(n, w),
    compressed = O !== void 0,
    z = compressed ? `${G}.zst` : G;
  try {
    let V;
    if (O) try {
      V = await Ke(z, C, K, authConfig_2 || {}, O);
    } catch (error) {
      if (ge(error) === void 0 && !Jt(error)) throw error;
      compressed = !1, z = G, t(`Compressed binary unusable (${error instanceof Error ? error.message : String(error)}), falling back to ${G}`);
    }
    let {
        checksumRetried: checksumRetried_2,
        dropRetried: dropRetried_2
      } = V ?? (await Ke(z, C, K, authConfig_2 || {})),
      latency_ms_5 = Date.now() - startTime_2;
    if (O && !compressed) p("update_download", "update_download_zst_fallback");else if (checksumRetried_2) p("update_download", "update_download_checksum_retry");else if (dropRetried_2 || F) p("update_download", "update_download_drop_retry");else _("update_download");
    return i("tengu_binary_download_success", {
      latency_ms: latency_ms_5,
      compressed: compressed
    }), {
      signatureVerified: signatureVerified_2,
      expectedChecksum: C
    };
  } catch (error) {
    let latency_ms_6 = Date.now() - startTime_2,
      Z = error instanceof Error ? error.message : String(error),
      is_checksum_mismatch = Z.includes("Checksum mismatch");
    if (is_checksum_mismatch) m("update_download", "update_download_checksum_mismatch");else if (error instanceof StallTimeoutError) m("update_download", "update_download_stall_timeout");else if (tn(error)) m("update_download", "update_download_connection_drop");else m("update_download", "update_download_binary_failed");
    throw i("tengu_binary_download_failure", {
      latency_ms: latency_ms_6,
      http_status: ge(error),
      is_timeout: ve(error),
      is_checksum_mismatch: is_checksum_mismatch,
      attempt: nn(error),
      platform: o$(platform_2),
      compressed: compressed
    }), t(`Failed to download binary from ${z}: ${Z}`, {
      level: "error"
    }), error;
  }
}
function nt(e, {
  explicitVersionRequested: explicitVersionRequested,
  requireEnforcingRelease: requireEnforcingRelease
}) {
  return requireEnforcingRelease ? "require-enforcing-release" : explicitVersionRequested && kN(e, Te) ? "allow-unsigned-legacy" : "require";
}
async function rt(e, n, r) {
  let platform_3 = Nse(),
    {
      manifest: manifest_3,
      manifestAuthenticated: manifestAuthenticated_2,
      signatureVerified: signatureVerified_3
    } = await tt(Me, e, {
      signaturePolicy: nt(e, r),
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
function it(e) {
  if (!fu(e) || e.response) return !1;
  let n = Um(e)?.code;
  return n !== void 0 && (DD.has(n) || n === "ETIMEDOUT");
}
async function ke(e) {
  let n = Ce("sha256");
  return await xe(Nt(e), n), n.digest("hex");
}
async function $e(e, n) {
  try {
    return (await ke(e)) === n;
  } catch (error) {
    return t(`Could not hash ${e} (${v(error) ?? te(error).name}); treating as mismatched`), !1;
  }
}
async function at(e, n, {
  explicitVersionRequested: explicitVersionRequested_2,
  requireEnforcingRelease: requireEnforcingRelease_2
}) {
  let {
    signatureVerified: signatureVerified_4,
    expectedChecksum: expectedChecksum_2
  } = await Qt(e, n, Me, {
    signaturePolicy: nt(e, {
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
  if (fu(e) && e.response) return e.response.status;
  return;
}
function ve(e) {
  if (e instanceof StallTimeoutError) return !0;
  if (Fa(e)) return !0;
  if (fu(e) && (e.code === "ECONNABORTED" || e.code === "ETIMEDOUT")) return !0;
  if (e !== null && typeof e === "object" && "code" in e && e.code === "ETIMEDOUT") return !0;
  let n = (e instanceof Error ? e.message : String(e)).toLowerCase();
  return n.includes("timeout") || n.includes("timed out");
}
function Zt(e) {
  return v(e)?.startsWith("ZSTD_error_") === !0;
}
function Jt(e) {
  let n = e instanceof Error ? e.message : String(e);
  return n.includes("Checksum mismatch") || n.includes("exceeds the manifest size");
}
function en(e) {
  return e !== null && typeof e === "object" && "deterministic" in e && e.deterministic === !0;
}
function tn(e) {
  return e !== null && typeof e === "object" && "connectionDrop" in e && e.connectionDrop === !0;
}
function nn(e) {
  if (e !== null && typeof e === "object" && "attempt" in e && typeof e.attempt === "number") return e.attempt;
  return;
}
function rn() {
  try {
    return Nse();
  } catch {
    return "unknown";
  }
}
async function Pe(e, n) {
  let dropRetried_3 = !1;
  for (let s = 1;; s++) try {
    return {
      data: (await Ie(e, n)).data,
      dropRetried: dropRetried_3
    };
  } catch (error) {
    if (s >= ae || !Je(error)) throw error;
    dropRetried_3 = !0, t(`Fetch of ${e} connection dropped on attempt ${s}/${ae}, retrying...`), await Q(Qe);
  }
}
import { lstat as an, readdir as on } from "fs/promises";
import { basename as sn, join as cn } from "path";
function me() {
  return !zo(void 0);
}
var ln = 7200000;
function Fe(e) {
  if (e <= 1) return !1;
  try {
    return process.kill(e, 0), !0;
  } catch {
    return !1;
  }
}
function un(e, n) {
  if (!Fe(e)) return !1;
  if (e === process.pid) return !0;
  try {
    let r = yUr(e);
    if (!r) return !0;
    let s = r.toLowerCase(),
      g = n.toLowerCase();
    return s.includes("claude") || s.includes(g);
  } catch {
    return !0;
  }
}
function de(e) {
  let n = ce();
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
  if (!Fe(pid)) return !1;
  if (!un(pid, execPath)) return t(`Lock PID ${pid} is running but does not appear to be Claude - treating as stale`), !1;
  let g = ce();
  try {
    let h = g.statSync(e);
    if (Date.now() - h.mtimeMs > ln) {
      if (!Fe(pid)) return !1;
    }
  } catch {}
  return !0;
}
function dn(e, n) {
  eH(e, b(n, null, 2));
}
async function ot(e, n) {
  let r = ce(),
    version = sn(e);
  if (_e(n)) {
    let h = de(n);
    return t(`Cannot acquire lock for ${version} - held by PID ${h?.pid}`), null;
  }
  let g = {
    pid: process.pid,
    version: version,
    execPath: process.execPath,
    acquiredAt: Date.now()
  };
  try {
    if (dn(n, g), de(n)?.pid !== process.pid) return null;
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
async function st(e, n) {
  let r = await ot(e, n);
  if (!r) return !1;
  let s = () => {
    try {
      r();
    } catch {}
  };
  return process.on("exit", s), process.on("SIGINT", s), process.on("SIGTERM", s), !0;
}
async function ct(e, n, r) {
  let s = await ot(e, n);
  if (!s) return !1;
  try {
    return await r(), !0;
  } finally {
    s();
  }
}
async function lt(e) {
  let n = ce(),
    r = 0,
    s;
  try {
    s = (await on(e)).filter(item => item.endsWith(".lock"));
  } catch (error) {
    if (B(error)) return 0;
    return t(`Failed to readdir locks directory: ${te(error).message}`, {
      level: "error"
    }), 0;
  }
  for (let g of s) {
    let h = cn(e, g);
    try {
      if ((await an(h)).isDirectory()) n.rmSync(h, {
        recursive: !0,
        force: !0
      }), r++, t(`Cleaned up legacy directory lock: ${g}`);else if (!_e(h)) n.unlinkSync(h), r++, t(`Cleaned up stale lock: ${g}`);
    } catch {}
    await new Promise(y => setImmediate(y));
  }
  return r;
}
var retained_count = 2,
  stale = 604800000,
  yn = !1;
function Nse() {
  let platform_4 = a.platform,
    n = "x64";
  if (!n) {
    let r = Error("Unsupported architecture: x64");
    throw t("Native installer does not support architecture: x64", {
      level: "error"
    }), r;
  }
  if (yn) n = "arm64";
  if (platform_4 === "linux") {
    if (Nw.isAndroidEnvironment()) return `linux-${n}-android`;
    if (Nw.isMuslEnvironment()) return `linux-${n}-musl`;
  }
  return `${platform_4}-${n}`;
}
function KXt(e) {
  return e.startsWith("win32") ? "claude.exe" : "claude";
}
function X() {
  let e = Nse(),
    n = KXt(e);
  return {
    versions: OLt(),
    staging: U(NPo(), "claude", "staging"),
    locks: U(LPo(), "claude", "locks"),
    executable: U(Fz(), n)
  };
}
async function Et(e) {
  return H(e).then(n => n.isFile() && n.size > 0, () => !1);
}
async function vn(e, n) {
  for (let r of e) if (await Et(n(r))) return r;
  return;
}
function bn(e) {
  return `${e}.old.${Date.now()}.${process.pid}`;
}
var kn = 2592000000;
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
    let n = await H(e);
    if (!n.isFile() || n.size === 0) return !1;
    return !0;
  } catch {
    return !1;
  }
}
async function Ue(e) {
  let n = X(),
    r = [n.versions, n.staging, n.locks];
  await Promise.all(r.map(item => se(item, {
    recursive: !0
  })));
  let s = ne(n.executable);
  if (await se(s, {
    recursive: !0
  }), !/^[a-zA-Z0-9._+-]+$/.test(e) || e.includes("..") || e === ".") throw Error(`Invalid version string "${e}": contains path-unsafe characters`);
  let installPath = U(n.versions, e);
  try {
    await hn(installPath, "", {
      encoding: "utf8",
      flag: "wx"
    });
  } catch (error) {
    if (v(error) !== "EEXIST") throw error;
    try {
      if ((await H(installPath)).size === 0) {
        let date = new Date();
        await _n(installPath, date, date);
      }
    } catch {}
  }
  return {
    stagingPath: U(n.staging, e),
    installPath: installPath
  };
}
async function $t(e, n, retries = 0) {
  let s = X(),
    lockfilePath = we(s, e);
  if (await se(s.locks, {
    recursive: !0
  }), me()) {
    let y = 0,
      attempts_2 = retries + 1,
      k = retries > 0 ? 1000 : 100,
      R = retries > 0 ? 5000 : 500;
    while (y < attempts_2) {
      if (await ct(e, lockfilePath, async () => {
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
        attempts: y + 1
      }), !0;
      if (y++, y < attempts_2) {
        let M = Math.min(k * Math.pow(2, y - 1), R);
        await Q(M);
      }
    }
    return i("tengu_version_lock_failed", {
      is_pid_based: !0,
      is_lifetime_lock: !1,
      attempts: attempts_2
    }), Re(e, Error("Lock held by another process")), !1;
  }
  let h = null;
  try {
    try {
      h = await Ri(e, {
        stale: stale,
        retries: {
          retries: retries,
          minTimeout: retries > 0 ? 1000 : 100,
          maxTimeout: retries > 0 ? 5000 : 500
        },
        lockfilePath: lockfilePath,
        onCompromised: y => {
          t(`NON-FATAL: Version lock was compromised during operation: ${y.message}`, {
            level: "info"
          });
        }
      });
    } catch (error) {
      return i("tengu_version_lock_failed", {
        is_pid_based: !1,
        is_lifetime_lock: !1
      }), Re(e, error), !1;
    }
    try {
      return await n(), i("tengu_version_lock_acquired", {
        is_pid_based: !1,
        is_lifetime_lock: !1
      }), !0;
    } catch (error) {
      throw t(`tryWithVersionLock: callback failed under version lock: ${l(error)}`, {
        level: "error"
      }), error;
    }
  } finally {
    if (h) await h();
  }
}
var mt = [100, 500, 2000];
class oCt extends P {
  constructor() {
    super("Staged binary no longer matches the verified checksum; refusing to install", "Staged binary checksum mismatch at install");
  }
}
async function St(e, n, r) {
  await se(ne(n), {
    recursive: !0
  });
  let s;
  for (let attempts_3 = 1; attempts_3 <= mt.length + 1; attempts_3++) {
    let h = `${n}.tmp.${process.pid}.${Date.now()}.${attempts_3}`;
    try {
      if (await wt(e, h), await pn(h, 493), r !== void 0 && (await ke(h)) !== r) throw new oCt();
      return await pe(h, n), t(`Atomically installed binary to ${n}` + (attempts_3 > 1 ? ` (attempt ${attempts_3})` : "")), {
        attempts: attempts_3
      };
    } catch (error) {
      s = error;
      try {
        await ee(h);
      } catch {}
      let w = v(error),
        k = w === "EBUSY" || w === "EPERM" && !0,
        R = mt[attempts_3 - 1];
      if (!k || R === void 0) throw error;
      t(`atomicMoveToInstallPath attempt ${attempts_3} failed with ${w}; retrying in ${R}ms`), await Q(R);
    }
  }
  throw s;
}
async function $n(e, n, r) {
  try {
    let s = U(e, "node_modules", "@anthropic-ai"),
      h = (await Se(s)).find(item => item.startsWith("claude-cli-native-"));
    if (!h) throw i("tengu_native_install_package_failure", {
      stage_find_package: !0,
      error_package_not_found: !0
    }), Error("Could not find platform-specific native package");
    let y = U(s, h, "cli");
    try {
      await H(y);
    } catch {
      throw i("tengu_native_install_package_failure", {
        stage_binary_exists: !0,
        error_binary_not_found: !0
      }), Error("Native binary not found in staged package");
    }
    let {
      attempts: w
    } = await St(y, n, r);
    return await he(e, {
      recursive: !0,
      force: !0
    }), i("tengu_native_install_package_success", {
      install_attempts: w
    }), {
      moveRetried: w > 1
    };
  } catch (error) {
    let g = l(error);
    if (!(g.includes("Could not find platform-specific") || g.includes("Native binary not found"))) {
      if (i("tengu_native_install_package_failure", {
        stage_atomic_move: !0,
        error_move_failed: !0
      }), m("update_apply", "update_apply_native_move_failed"), as(error)) t(`installVersionFromPackage: atomic move failed: ${g}`, {
        level: "error"
      });else d(te(error));
    } else m("update_apply", "update_apply_native_staging_missing"), t(`installVersionFromPackage: ${g}`, {
      level: "error"
    });
    throw error;
  }
}
async function Sn(e, n, r) {
  try {
    let s = Nse(),
      g = KXt(s),
      h = U(e, g);
    try {
      await H(h);
    } catch (error) {
      throw i("tengu_native_install_binary_failure", {
        stage_binary_exists: !0,
        error_binary_not_found: !0,
        error_code: Kg(error)
      }), Error("Staged binary not found");
    }
    let {
      attempts: y
    } = await St(h, n, r);
    return await he(e, {
      recursive: !0,
      force: !0
    }), i("tengu_native_install_binary_success", {
      install_attempts: y
    }), {
      moveRetried: y > 1
    };
  } catch (error) {
    if (error instanceof oCt) i("tengu_native_install_binary_failure", {
      stage_atomic_move: !0,
      error_checksum_mismatch: !0
    }), m("update_apply", "update_apply_staged_checksum_mismatch");else if (!l(error).includes("Staged binary not found")) i("tengu_native_install_binary_failure", {
      stage_atomic_move: !0,
      error_move_failed: !0,
      error_code: Kg(error)
    }), m("update_apply", "update_apply_native_move_failed");else m("update_apply", "update_apply_native_staging_missing");
    if (as(error)) t(`installVersionFromBinary: atomic move failed: ${l(error)}`, {
      level: "error"
    });else d(te(error));
    throw error;
  }
}
async function Rn(e, n, r, s) {
  if (r === "npm") return $n(e, n, s);
  return Sn(e, n, s);
}
var Tn = new q(() => new Map());
async function pt(e, {
  forceReinstall: forceReinstall,
  explicitVersionRequested: explicitVersionRequested_3,
  requireEnforcingRelease: s
}) {
  let {
      stagingPath: stagingPath,
      installPath: installPath_2
    } = await Ue(e),
    {
      executable: executable
    } = X(),
    w = Ne("true"),
    k = w ? `${stagingPath}.${process.pid}.${Date.now()}.${bt(4).toString("hex")}` : stagingPath,
    R = Tn.of(j().host),
    I = R.get(e),
    M = !(I && (I.enforcingRelease || !s)),
    D = {
      wasNewInstall: !1,
      moveRetried: !1,
      activationFailed: !1,
      activationRefused: !1,
      skippedUnverifiedRelease: !0
    },
    N = M ? void 0 : I?.checksum,
    wasNewInstall = forceReinstall || !(await Rt(e));
  if (!wasNewInstall && M) try {
    let S = await rt(e, installPath_2, {
      explicitVersionRequested: explicitVersionRequested_3,
      requireEnforcingRelease: s
    });
    if (N = S.expectedChecksum, !S.binaryMatches) wasNewInstall = !0;else if (S.signatureVerified) R.set(e, {
      enforcingRelease: s,
      checksum: N
    });
  } catch (error) {
    if (error instanceof ManifestSignatureError) {
      if (s && error.reason === "release_predates_enforcement") return D;
      throw error;
    }
    if (!explicitVersionRequested_3 || s || !it(error)) throw error;
    t(`Could not re-verify retained ${e} (${te(error).name}); offline, activating as requested`, {
      level: "warn"
    });
  } else if (!wasNewInstall && I?.checksum !== void 0) {
    if (!(await $e(installPath_2, I.checksum))) t(`Retained ${e} no longer matches the checksum verified earlier in this process; re-downloading`, {
      level: "warn"
    }), R.delete(e), wasNewInstall = !0;
  }
  let moveRetried = !1;
  if (wasNewInstall) {
    t(forceReinstall ? `Force reinstalling native installer version ${e}` : `Downloading native installer version ${e}`), await At(ne(k));
    let downloadType, signatureVerified_5;
    try {
      ({
        downloadType: downloadType,
        signatureVerified: signatureVerified_5,
        expectedChecksum: N
      } = await at(e, k, {
        explicitVersionRequested: explicitVersionRequested_3,
        requireEnforcingRelease: s
      })), {
        moveRetried: moveRetried
      } = await Rn(k, installPath_2, downloadType, N);
    } catch (error) {
      if (s && error instanceof ManifestSignatureError && error.reason === "release_predates_enforcement") return D;
      throw error;
    } finally {
      if (w) await he(k, {
        recursive: !0,
        force: !0
      }).catch(O => t(`Could not remove the update staging directory (a later update removes it after one hour): ${l(O)}`, {
        level: "warn"
      }));
    }
    if (signatureVerified_5) R.set(e, {
      enforcingRelease: s,
      checksum: N
    });
  } else t(`Version ${e} already installed, updating symlink`);
  await In(executable);
  let C = await Fn(executable, installPath_2, {
    expectedChecksum: N
  });
  if (C !== "updated" && !(await re(executable))) {
    let S = !1;
    try {
      await H(installPath_2), S = !0;
    } catch {}
    throw m("update_apply", "update_apply_native_symlink_failed"), Error(`Failed to create executable at ${executable}. Source file exists: ${S}. Either ${executable} is not writable, or the existing file there was not created by the native installer and is not a working launcher \u2014 the updater will not overwrite a launcher it does not own. Remove it and re-run the update.`);
  }
  return {
    wasNewInstall: wasNewInstall,
    moveRetried: moveRetried,
    activationFailed: C === "failed",
    activationRefused: C === "refused",
    skippedUnverifiedRelease: !1
  };
}
async function Rt(e) {
  let {
    installPath: installPath_3
  } = await Ue(e);
  return re(installPath_3);
}
async function An() {
  if (await Cn()) return !0;
  let {
    executable: executable_2
  } = X();
  return (await re(executable_2)) && !(await NLe(executable_2).catch(() => !1));
}
async function Cn() {
  let {
      versions: versions,
      executable: executable_3
    } = X(),
    r = !0,
    s = [{
      versions: versions,
      executable: executable_3
    }],
    [versions_2, h] = await Promise.all([dt(versions).catch(() => versions), dt(ne(executable_3)).catch(() => ne(executable_3))]),
    executable_4 = U(h, Le(executable_3));
  if (versions_2 !== versions || executable_4 !== executable_3) s.push({
    versions: versions_2,
    executable: executable_4
  });
  return s.some(item => xn(process.execPath, {
    ...item,
    isWindows: !0
  }));
}
function xn(e, {
  versions: versions_3,
  executable: executable_5,
  isWindows: isWindows
}) {
  let g = w => isWindows ? w.replaceAll("\\", "/").toLowerCase() : w,
    h = g(e),
    y = g(versions_3).replace(/\/+$/, "") + "/";
  return h.startsWith(y) || h === g(executable_5);
}
function Pn() {
  try {
    let e = x("tengu_canary", {});
    return typeof e.external === "string" && kt.valid(e.external) || null;
  } catch (error) {
    return t(`getCanaryVersion: GB read failed, falling through: ${l(error)}`), null;
  }
}
async function Mn(e, n = !1) {
  let r = Date.now(),
    {
      executable: executable_6
    } = X(),
    g = !/^v?\d+\.\d+\.\d+(-\S+)?$/.test(e),
    {
      maxVersion: maxVersion,
      forceDowngradeEnabled: forceDowngradeEnabled
    } = await Qwe(),
    w = forceDowngradeEnabled && !n && g && !!maxVersion && sMe({
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.283",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-09-25T00:44:42Z",
      GIT_SHA: "4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION, maxVersion, "native_update"),
    latestVersion = w ? maxVersion : await qXt(e),
    R = latestVersion.length;
  if (!NKn(latestVersion)) throw new P(`Invalid version string from ${g ? "version pointer" : "argument"}: not a well-formed version (${R} characters)`, "Invalid version string: not a well-formed version");
  t(`Checking for native installer update to version ${latestVersion}`);
  let requireEnforcingRelease_3 = g && (await An());
  if (e === "latest" && !w) {
    let S = Pn(),
      L = S && maxVersion && ag(S, maxVersion);
    if (S && ag(S, latestVersion) && !L) t(`Native installer: canary ${S} active, overriding ${latestVersion}`), latestVersion = S;else if (L) t(`Native installer: canary ${S} exceeds maxVersion ${maxVersion}, not applying`);
  }
  if (!w && !n && maxVersion && ag(latestVersion, maxVersion)) {
    if (t(`Native installer: maxVersion ${maxVersion} is set, capping update from ${latestVersion} to ${maxVersion}`), x_({
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.283",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-09-25T00:44:42Z",
      GIT_SHA: "4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION, maxVersion)) return t(`Native installer: current version ${{
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.283",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-09-25T00:44:42Z",
      GIT_SHA: "4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION} is already at or above maxVersion ${maxVersion}, skipping update`), i("tengu_native_update_skipped_max_version", {
      latency_ms: Date.now() - r,
      max_version: fi(maxVersion),
      available_version: fi(latestVersion)
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
    VERSION: "2.1.283",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-09-25T00:44:42Z",
    GIT_SHA: "4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",
    HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "win32"
  }.VERSION && (await Rt(latestVersion)) && (await re(executable_6))) return t(`Found ${latestVersion} at ${executable_6}, skipping install`), i("tengu_native_update_complete", {
    latency_ms: Date.now() - r,
    was_new_install: !1,
    was_force_reinstall: !1,
    was_already_running: !0
  }), {
    success: !0,
    wasSkipped: !0,
    latestVersion: latestVersion
  };
  if (!n && iMe(latestVersion)) return i("tengu_native_update_skipped_minimum_version", {
    latency_ms: Date.now() - r,
    target_version: fi(latestVersion)
  }), {
    success: !0,
    wasSkipped: !0,
    latestVersion: latestVersion
  };
  if (w) i("tengu_native_update_forced_downgrade", {
    from_version: fi({
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.283",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-09-25T00:44:42Z",
      GIT_SHA: "4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION),
    to_version: fi(latestVersion)
  });
  let M = !1,
    moveRetried_2 = !1,
    activationFailed = !1,
    activationRefused = !1,
    skippedUnverifiedRelease = !1,
    latency_ms_7;
  if (Ne("true")) ({
    wasNewInstall: M,
    moveRetried: moveRetried_2,
    activationFailed: activationFailed,
    activationRefused: activationRefused,
    skippedUnverifiedRelease: skippedUnverifiedRelease
  } = await pt(latestVersion, {
    forceReinstall: n,
    explicitVersionRequested: !g,
    requireEnforcingRelease: requireEnforcingRelease_3
  })), latency_ms_7 = Date.now() - r;else {
    let {
      installPath: installPath_4
    } = await Ue(latestVersion);
    if (n) await Ln(installPath_4);
    let L = await $t(installPath_4, async () => {
      ({
        wasNewInstall: M,
        moveRetried: moveRetried_2,
        activationFailed: activationFailed,
        activationRefused: activationRefused,
        skippedUnverifiedRelease: skippedUnverifiedRelease
      } = await pt(latestVersion, {
        forceReinstall: n,
        explicitVersionRequested: !g,
        requireEnforcingRelease: requireEnforcingRelease_3
      }));
    }, 3);
    if (latency_ms_7 = Date.now() - r, !L) {
      let O = X(),
        G;
      if (me()) {
        let K = we(O, installPath_4);
        if (_e(K)) G = de(K)?.pid;
      }
      return p("update_apply", "update_apply_native_lock_failed"), i("tengu_native_update_lock_failed", {
        latency_ms: latency_ms_7,
        lock_holder_pid: G
      }), {
        success: !1,
        latestVersion: latestVersion,
        lockFailed: !0,
        lockHolderPid: G
      };
    }
  }
  if (skippedUnverifiedRelease) return i("tengu_native_update_skipped_unverified_release", {
    latency_ms: latency_ms_7,
    target_version: fi(latestVersion)
  }), t(`Native installer: resolved ${latestVersion} predates manifest signature enforcement; staying on ${{
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.283",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-09-25T00:44:42Z",
    GIT_SHA: "4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",
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
  if (activationFailed) p("update_apply", "update_apply_native_activation_failed_old_binary_kept");else if (activationRefused) p("update_apply", "update_apply_native_activation_refused_external_launcher");else if (moveRetried_2) p("update_apply", "update_apply_native_move_retry");else _("update_apply");
  return i("tengu_native_update_complete", {
    latency_ms: latency_ms_7,
    was_new_install: M,
    was_force_reinstall: n
  }), t(`Successfully updated to version ${latestVersion}`), {
    success: !0,
    latestVersion: latestVersion
  };
}
async function In(e) {
  try {
    await gn(e), t(`Removed empty directory at ${e}`);
  } catch (error) {
    let r = v(error);
    if (r !== "ENOTDIR" && r !== "ENOENT" && r !== "ENOTEMPTY") t(`Could not remove directory at ${e}: ${error}`);
  }
}
async function Fn(e, n, {
  expectedChecksum: expectedChecksum_3
} = {}) {
  if (Nse().startsWith("win32")) try {
    let w = ne(e);
    await se(w, {
      recursive: !0
    });
    let k;
    try {
      k = await H(e);
    } catch {}
    if (k) try {
      let M = await H(n);
      if (k.size === M.size && (expectedChecksum_3 === void 0 || (await $e(e, expectedChecksum_3)))) return "noop";
    } catch {}
    let R = `${e}.new.${process.pid}.${Date.now()}.${bt(4).toString("hex")}`;
    try {
      await wt(n, R);
    } catch (error) {
      if (B(error)) throw Error(`Source file does not exist: ${n}`);
      throw error;
    }
    let I;
    try {
      I = expectedChecksum_3 === void 0 || (await ke(R)) === expectedChecksum_3;
    } catch (error) {
      throw await ee(R).catch(() => {}), error;
    }
    if (!I) return await ee(R).catch(() => {}), t(`Refusing to install a launcher copy of ${n} that does not match its signed checksum`, {
      level: "error"
    }), "failed";
    try {
      let M = k !== void 0;
      if (!M) try {
        await pe(R, e);
      } catch (error) {
        let N = v(error);
        if (N !== "EEXIST" && N !== "EPERM" && N !== "EBUSY") throw error;
        M = !0;
      }
      if (M) {
        let D = bn(e);
        await pe(e, D);
        try {
          await pe(R, e);
        } catch (N) {
          try {
            await pe(D, e);
          } catch (error) {
            let T = Error(`Failed to restore old executable: ${error}`, {
              cause: N
            });
            throw d(T), T;
          }
          throw N;
        }
      }
    } catch (error) {
      throw await ee(R).catch(() => {}), error;
    }
    return "updated";
  } catch (error) {
    return t(`Failed to copy executable from ${n} to ${e}: ${error}`, {
      level: "error"
    }), "failed";
  }
  let h = ne(e);
  try {
    await se(h, {
      recursive: !0
    }), t(`Created directory ${h} for symlink`);
  } catch (error) {
    return t(`Failed to create directory ${h}: ${error}`, {
      level: "error"
    }), "failed";
  }
  try {
    return await ft(n, e), t(`Created symlink ${e} -> ${n}`), "updated";
  } catch (error) {
    if (v(error) !== "EEXIST") return t(`Failed to create symlink from ${e} to ${n}: ${error}`, {
      level: "error"
    }), "failed";
  }
  if (!(await fit(e)) && !(await NLe(e).catch(() => !1))) return t(`Not replacing ${e}: it was not created by the native installer (not a symlink into a claude/versions/ directory) and is not an npm shim, so this update will not overwrite it. New versions still install under the versions/ directory; remove ${e} and re-run the update to let the installer manage the launcher again.`, {
    level: "warn"
  }), "refused";
  let y = `${e}.tmp.${process.pid}.${Date.now()}`;
  try {
    return await ft(n, y), await pe(y, e), t(`Atomically updated symlink ${e} -> ${n}`), "updated";
  } catch (error) {
    try {
      await ee(y);
    } catch {}
    return t(`Failed to create symlink from ${e} to ${n}: ${error}`, {
      level: "error"
    }), "failed";
  }
}
async function tMe(e = !1) {
  if (Ne(process.env.DISABLE_INSTALLATION_CHECKS)) return [];
  let n = await Xwe();
  if (n === "development") return [];
  let r = le();
  if (!(e || n === "native" || r.installMethod === "native")) return [];
  let g = X(),
    h = [],
    y = [],
    w = ne(g.executable),
    k = oe(w),
    I = Nse().startsWith("win32");
  try {
    await mn(w);
  } catch {
    h.push({
      message: `claude command at ${g.executable} missing or broken (${w} does not exist)`,
      userActionRequired: !0,
      type: "error"
    }), y.push("bin_dir_missing");
  }
  if (I) {
    if (!(await re(g.executable))) h.push({
      message: `claude command at ${g.executable} missing or broken`,
      userActionRequired: !0,
      type: "error"
    }), y.push("executable_missing");
  } else try {
    let D = await yt(g.executable),
      N = oe(ne(g.executable), D);
    if (!(await re(N))) h.push({
      message: `claude command at ${g.executable} missing or broken (symlink points to ${D})`,
      userActionRequired: !0,
      type: "error"
    }), y.push("executable_invalid");
  } catch (error) {
    if (B(error)) h.push({
      message: `claude command at ${g.executable} missing or broken`,
      userActionRequired: !0,
      type: "error"
    }), y.push("executable_missing");else if (!(await re(g.executable))) h.push({
      message: `claude command at ${g.executable} missing or broken (not a valid Claude binary)`,
      userActionRequired: !0,
      type: "error"
    }), y.push("executable_invalid");
  }
  if (!(a.PATH || "").split(wn).some(item => {
    try {
      let N = oe(item);
      if (I) return N.toLowerCase() === k.toLowerCase();
      return N === k;
    } catch {
      return !1;
    }
  })) if (y.push("not_in_path"), I) {
    let D = w.replaceAll("/", "\\");
    h.push({
      message: `Native installation exists but ${D} is not in your PATH. Add it by opening: System Properties \u2192 Environment Variables \u2192 Edit User PATH \u2192 New \u2192 Add the path above. Then restart your terminal.`,
      userActionRequired: !0,
      type: "path"
    });
  } else {
    let D = fGe(),
      F = oMe()[D],
      T = F ? F.replace(vt(), "~") : "your shell config file";
    h.push({
      message: `Native installation exists but ~/.local/bin is not in your PATH. Run:

echo 'export PATH="$HOME/.local/bin:$PATH"' >> ${T} && source ${T}`,
      userActionRequired: !0,
      type: "path"
    });
  }
  if (y.length === 0) _("native_check_install");else p("native_check_install", y[0]);
  return h;
}
class Tt {
  inFlight = null;
  begin(e) {
    this.inFlight = e;
  }
  reset() {
    this.inFlight = null;
  }
}
var Dn = new q(() => new Tt());
function nMe(e, n = !1, r) {
  if (n) return _t(e, n, r);
  let s = Dn.of(j().host);
  if (s.inFlight) return t("installLatest: joining in-flight call"), s.inFlight;
  let g = _t(e, n, r);
  s.begin(g);
  let h = () => {
    s.reset();
  };
  return g.then(h, h), g;
}
async function _t(e, n = !1, r) {
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
  if (le().installMethod !== "native") await Ee(h => ({
    ...h,
    installMethod: "native",
    autoUpdates: !1,
    autoUpdatesProtectedForNative: !0
  }), r), t('Native installer: Set installMethod to "native" and disabled legacy auto-updater for protection');
  return g0n(), {
    latestVersion: s.latestVersion,
    wasUpdated: s.success && !s.wasSkipped,
    wasSkipped: s.wasSkipped,
    lockFailed: !1
  };
}
async function Nn(e) {
  try {
    let n = await yt(e),
      r = oe(ne(e), n);
    if (await re(r)) return r;
  } catch {}
  return null;
}
function we(e, n) {
  let r = Le(n);
  return U(e.locks, `${r}.lock`);
}
async function Hse() {
  let e = X();
  if (!process.execPath.includes(e.versions)) return;
  let n = oe(process.execPath);
  try {
    let lockfilePath_2 = we(e, n);
    if (await se(e.locks, {
      recursive: !0
    }), me()) {
      if (!(await st(n, lockfilePath_2))) {
        i("tengu_version_lock_failed", {
          is_pid_based: !0,
          is_lifetime_lock: !0
        }), Re(n, Error("Lock already held by another process"));
        return;
      }
      i("tengu_version_lock_acquired", {
        is_pid_based: !0,
        is_lifetime_lock: !0
      }), t(`Acquired PID lock on running version: ${n}`);
    } else {
      let s;
      try {
        s = await Ri(n, {
          stale: stale,
          retries: 0,
          lockfilePath: lockfilePath_2,
          onCompromised: g => {
            t(`NON-FATAL: Lock on running version was compromised: ${g.message}`, {
              level: "info"
            });
          }
        }), i("tengu_version_lock_acquired", {
          is_pid_based: !1,
          is_lifetime_lock: !0
        }), t(`Acquired mtime-based lock on running version: ${n}`), gt(async () => {
          try {
            await s?.();
          } catch {}
        });
      } catch (error) {
        if (B(error)) {
          t(`Cannot lock current version - file does not exist: ${n}`, {
            level: "info"
          });
          return;
        }
        i("tengu_version_lock_failed", {
          is_pid_based: !1,
          is_lifetime_lock: !0
        }), Re(n, error);
        return;
      }
    }
  } catch (error) {
    if (B(error)) {
      t(`Cannot lock current version - file does not exist: ${n}`, {
        level: "info"
      });
      return;
    }
    t(`NON-FATAL: Failed to lock current version during execution ${l(error)}`, {
      level: "info"
    });
  }
}
function Re(e, n) {
  t(`NON-FATAL: Lock acquisition failed for ${e} (expected in multi-process scenarios): ${l(n)}`, {
    level: "error"
  });
}
async function Ln(e) {
  let n = X(),
    r = we(n, e);
  try {
    await ee(r), t(`Force-removed lock file at ${r}`);
  } catch (error) {
    t(`Failed to force-remove lock file: ${l(error)}`);
  }
}
var On = 3600000;
async function At(e) {
  let n = Date.now() - On;
  try {
    let r = await Se(e),
      cleaned_count = 0;
    for (let g of r) {
      let h = U(e, g);
      try {
        if ((await H(h)).mtime.getTime() < n) await he(h, {
          recursive: !0,
          force: !0
        }), cleaned_count++, t(`Cleaned up old staging directory: ${g}`);
      } catch {}
    }
    if (cleaned_count > 0) t(`Cleaned up ${cleaned_count} orphaned staging directories`), i("tengu_native_staging_cleanup", {
      cleaned_count: cleaned_count
    });
  } catch (error) {
    if (!B(error)) t(`Failed to clean up staging directories: ${error}`);
  }
}
async function g0n() {
  await Promise.resolve();
  let e = X(),
    n = Date.now() - 3600000,
    r = Date.now() - 1209600000,
    s = Date.now() - kn;
  if (Nse().startsWith("win32")) {
    let w = ne(e.executable),
      k = Le(e.executable);
    try {
      let R = await Se(w),
        I = R.flatMap(C => {
          let S = En(C, k);
          return S === void 0 ? [] : [{
            file: C,
            ...S
          }];
        }),
        M = I.filter(item => item.kind === "backup").sort((itemA, itemB) => itemB.stampedMs - itemA.stampedMs),
        D = R.find(item => item.toLowerCase() === k.toLowerCase()),
        N = M.length > 0 && !(D !== void 0 && (await Et(U(w, D)))),
        F = N ? await vn(M, C => U(w, C.file)) : void 0,
        T = 0;
      for (let C of I) {
        if (C.kind === "backup" && N && (C === F && C.stampedMs >= s || C.stampedMs >= r)) continue;
        try {
          let S = U(w, C.file);
          if (C.stampedMs >= n || (await H(S)).mtime.getTime() >= n) continue;
          await ee(S), T++;
        } catch {}
      }
      if (T > 0) t(`Cleaned up ${T} old Windows executables on startup`);
    } catch (error) {
      if (!B(error)) t(`Failed to clean up old Windows executables: ${error}`);
    }
  }
  if (await At(e.staging), me()) {
    let cleaned_count_2 = await lt(e.locks);
    if (cleaned_count_2 > 0) t(`Cleaned up ${cleaned_count_2} stale version locks`), i("tengu_native_stale_locks_cleanup", {
      cleaned_count: cleaned_count_2
    });
  }
  let g;
  try {
    g = await Se(e.versions);
  } catch (error) {
    if (!B(error)) t(`Failed to readdir versions directory: ${error}`), p("native_cleanup_versions", "readdir_failed");else _("native_cleanup_versions");
    return;
  }
  let h = [],
    cleaned_count_3 = 0;
  for (let name of g) {
    let path = U(e.versions, name);
    if (/\.tmp\.\d+\.\d+(\.\d+)?$/.test(name)) {
      try {
        if ((await H(path)).mtime.getTime() < n) await ee(path), cleaned_count_3++, t(`Cleaned up orphaned temp install file: ${name}`);
      } catch {}
      continue;
    }
    try {
      let R = await H(path);
      if (!R.isFile()) continue;
      h.push({
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
  if (h.length === 0) {
    _("native_cleanup_versions");
    return;
  }
  if (!(await fit(e.executable)) && !(await NLe(e.executable).catch(() => !1))) {
    t(`Skipping native version cleanup: the launcher at ${e.executable} is externally managed, so the version(s) it needs cannot be determined`), p("native_cleanup_versions", "skipped_external_launcher");
    return;
  }
  try {
    let execPath_2 = process.execPath,
      k = new Set();
    if (execPath_2 && execPath_2.includes(e.versions)) k.add(oe(execPath_2));
    let R = await Nn(e.executable);
    if (R) k.add(R);else if (Nse().startsWith("win32")) try {
      let T = await H(e.executable);
      for (let C of h) if (C.size === T.size) k.add(C.resolvedPath);
    } catch {}
    for (let T of h) {
      if (k.has(T.resolvedPath)) continue;
      let lockfilePath_3 = we(e, T.resolvedPath),
        S = !1;
      if (me()) S = _e(lockfilePath_3);else try {
        S = await BFo(T.resolvedPath, {
          stale: stale,
          lockfilePath: lockfilePath_3
        });
      } catch {
        S = !1;
      }
      if (S) k.add(T.resolvedPath), t(`Protecting locked version from cleanup: ${T.name}`);
      await new Promise(L => setImmediate(L));
    }
    let I = h.filter(item => !k.has(item.resolvedPath)).sort((itemA, itemB) => itemB.mtime.getTime() - itemA.mtime.getTime()),
      M = [...I.filter(item => item.size > 0).slice(retained_count), ...I.filter(item => item.size === 0 && item.mtime.getTime() < n)];
    if (M.length === 0) {
      i("tengu_native_version_cleanup", {
        total_count: h.length,
        deleted_count: 0,
        protected_count: k.size,
        retained_count: retained_count,
        lock_failed_count: 0,
        error_count: 0
      }), _("native_cleanup_versions");
      return;
    }
    let deleted_count = 0,
      lock_failed_count = 0,
      error_count = 0;
    if (await Promise.all(M.map(async item => {
      try {
        let C = !0,
          S = await $t(item.path, async () => {
            if (item.size === 0) {
              let L = await H(item.path);
              if (L.size > 0 || L.mtime.getTime() >= n) {
                C = !1;
                return;
              }
            }
            await ee(item.path);
          });
        if (S && C) deleted_count++;else if (!S) lock_failed_count++, t(`Skipping deletion of ${item.name} - locked by another process`);
      } catch (error) {
        error_count++, t(`Failed to delete version ${item.name}: ${error}`, {
          level: "error"
        });
      }
    })), i("tengu_native_version_cleanup", {
      total_count: h.length,
      deleted_count: deleted_count,
      protected_count: k.size,
      retained_count: retained_count,
      lock_failed_count: lock_failed_count,
      error_count: error_count
    }), error_count > 0) p("native_cleanup_versions", "delete_errors");else if (lock_failed_count > 0) p("native_cleanup_versions", "lock_failed");else _("native_cleanup_versions");
  } catch (error) {
    if (!B(error)) d(Error(`Version cleanup failed: ${error}`)), p("native_cleanup_versions", "unexpected_error");else _("native_cleanup_versions");
  }
}
async function Gtt() {
  let e = X();
  try {
    if (await NLe(e.executable).catch(n => {
      if (B(n)) return !1;
      throw n;
    })) {
      t(`Skipping removal of ${e.executable} - appears to be npm-managed`), _("native_remove_symlink");
      return;
    }
    if (!(await fit(e.executable))) {
      t(`Skipping removal of ${e.executable} - not created by the native installer`), _("native_remove_symlink");
      return;
    }
    await ee(e.executable), t(`Removed claude symlink at ${e.executable}`), _("native_remove_symlink");
  } catch (error) {
    if (B(error)) {
      _("native_remove_symlink");
      return;
    }
    t(`Failed to remove claude symlink: ${error}`, {
      level: "error"
    }), m("native_remove_symlink", "unlink_failed");
  }
}
async function thr() {
  let e = [],
    n = oMe(),
    r = !1;
  for (let [s, g] of Object.entries(n)) try {
    let h = await XXt(g);
    if (!h) continue;
    let {
      filtered: filtered,
      hadAlias: hadAlias
    } = _0n(h);
    if (hadAlias) await b0n(g, filtered), e.push({
      message: `Removed claude alias from ${g}. Run: unalias claude`,
      userActionRequired: !0,
      type: "alias"
    }), t(`Cleaned up claude alias from ${s} config`);
  } catch (error) {
    r = !0, t(`Failed to clean up claude alias from ${g}: ${error}`, {
      level: "error"
    }), e.push({
      message: `Failed to clean up ${g}: ${error}`,
      userActionRequired: !1,
      type: "error"
    });
  }
  if (r) p("native_cleanup_aliases", "config_write_failed");else _("native_cleanup_aliases");
  return e;
}
async function Vn(e) {
  try {
    let n = await Ve("npm", ["config", "get", "prefix"], {
      useToolMemoryCgroup: !1
    });
    if (n.code !== 0 || !n.stdout) return {
      success: !1,
      error: "Failed to get npm global prefix"
    };
    let r = n.stdout.trim(),
      s = !1;
    async function g(h, y) {
      try {
        return await ee(h), t(`Manually removed ${y}: ${h}`), !0;
      } catch {
        return !1;
      }
    }
    if (Nse().startsWith("win32")) {
      let h = U(r, "claude.cmd"),
        y = U(r, "claude.ps1"),
        w = U(r, "claude");
      if (await g(h, "bin script")) s = !0;
      if (await g(y, "PowerShell script")) s = !0;
      if (await g(w, "bin executable")) s = !0;
    } else {
      let h = U(r, "bin", "claude");
      if (await g(h, "bin symlink")) s = !0;
    }
    if (s) {
      t(`Successfully removed ${e} manually`);
      let h = Nse().startsWith("win32") ? U(r, "node_modules", e) : U(r, "lib", "node_modules", e);
      return {
        success: !0,
        warning: `${e} executables removed, but node_modules directory was left intact for safety. You may manually delete it later at: ${h}`
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
async function ht(e) {
  let {
    code: code_2,
    stderr: stderr
  } = await Ve("npm", ["uninstall", "-g", e], {
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
      let s = await Vn(e);
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
async function nhr() {
  let errors = [],
    warnings = [],
    removed = 0,
    s = !1,
    g = !1,
    h = await ht("@anthropic-ai/claude-code");
  if (h.success) {
    if (removed++, h.warning) warnings.push(h.warning);
  } else if (h.error) errors.push(h.error), s = !0;
  if ({
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.283",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-09-25T00:44:42Z",
    GIT_SHA: "4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",
    HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "win32"
  }.PACKAGE_URL && {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.283",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-09-25T00:44:42Z",
    GIT_SHA: "4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",
    HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "win32"
  }.PACKAGE_URL !== "@anthropic-ai/claude-code") {
    let w = await ht({
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.283",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-09-25T00:44:42Z",
      GIT_SHA: "4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.PACKAGE_URL);
    if (w.success) {
      if (removed++, w.warning) warnings.push(w.warning);
    } else if (w.error) errors.push(w.error), s = !0;
  }
  let y = U(vt(), ".claude", "local");
  try {
    await he(y, {
      recursive: !0
    }), removed++, t(`Removed local installation at ${y}`);
  } catch (error) {
    if (!B(error)) errors.push(`Failed to remove ${y}: ${error}`), t(`Failed to remove local installation: ${error}`, {
      level: "error"
    }), g = !0;
  }
  if (errors.length === 0) _("native_cleanup_npm");else if (removed > 0) p("native_cleanup_npm", "partial_errors");else if (s && !g) m("native_cleanup_npm", "npm_uninstall_failed");else if (g && !s) m("native_cleanup_npm", "local_install_remove_failed");else m("native_cleanup_npm", "npm_uninstall_failed");
  return {
    removed: removed,
    errors: errors,
    warnings: warnings
  };
}
export { ManifestSignatureError as IA, qXt, StallTimeoutError as rCt, Nse, KXt, oCt, tMe, nMe, Hse, g0n, Gtt, thr, nhr };