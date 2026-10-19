// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { aL } from "B:/~BUN/root/chunk-2zk4vqr8.js";
import { At, l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { wme } from "B:/~BUN/root/chunk-f25646gd.js";
import { b, c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { k, Fr, pS } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Vt } from "B:/~BUN/root/chunk-9ka04m0y.js";
import { K, hzo, xjt, fye, VGe, de, Eg } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { W } from "B:/~BUN/root/chunk-hg8ngszx.js";
import { Y, SP } from "B:/~BUN/root/chunk-89mss1tj.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { Jb, ght, Xa, _le, cJe, T$t, rMe, oMe, En, E } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { X } from "B:/~BUN/root/chunk-yrjpmz6e.js";
import { AA } from "B:/~BUN/root/chunk-ek28wssa.js";
import { An } from "B:/~BUN/root/chunk-rvc0n7zm.js";
import { Cr, Be } from "B:/~BUN/root/chunk-d9rmnpx3.js";
import { OB } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { ra } from "B:/~BUN/root/chunk-07c8fw5z.js";
import { CGn, Nee, h0s } from "B:/~BUN/root/chunk-3tj0rd0x.js";
import { AOe, d0s } from "B:/~BUN/root/chunk-gk5jpppj.js";
import { tae, Dee } from "B:/~BUN/root/chunk-6xef02qz.js";
import { jRt, I4e, UIn, BIn, jIn, Xpr, K7, Jpr } from "B:/~BUN/root/chunk-sg9k8m28.js";
import { pO, MT, Uk, PN } from "B:/~BUN/root/chunk-xf25v2pj.js";
import { $1, Pcs } from "B:/~BUN/root/chunk-atk141qr.js";
import { oio } from "B:/~BUN/root/chunk-ewvp948s.js";
import { Nz } from "B:/~BUN/root/chunk-050gfc4p.js";
import { EN, Azn, eMs } from "B:/~BUN/root/chunk-ma5pke8s.js";
import { ha } from "B:/~BUN/root/chunk-rsysgs10.js";
import { scn, qJe } from "B:/~BUN/root/chunk-5k20pvvh.js";
import { st } from "B:/~BUN/root/chunk-7aw74be3.js";
import { hs } from "B:/~BUN/root/chunk-qjf8jcwq.js";
import { um, yt } from "B:/~BUN/root/chunk-hz8x9zsh.js";
import { randomUUID as ke } from "crypto";
import { lstat as Xe, realpath as qe } from "fs/promises";
import { dirname as Ge, join as ye } from "path";
import { extname as Fe } from "path";
function Rds(e) {
  return Fe(e).toLowerCase().slice(1) !== "" && !qJe(e) && !AOe(e) && !AA(e);
}
function coo(e) {
  return Azn("", I4e(e.file_name));
}
function FIn(e) {
  let image_ext_file_count = 0,
    pdf_file_count = 0,
    binary_ext_file_count = 0,
    text_like_file_count = 0,
    a = 0,
    d = 0;
  for (let _ of e) {
    if (_.is_image === !0) continue;
    let I = coo(_),
      o = _.sha256 === void 0;
    if (scn.has(Fe(I).toLowerCase().slice(1))) image_ext_file_count++;else if (qJe(I)) {
      if (pdf_file_count++, o) d++;
    } else if (AOe(I)) {
      if (binary_ext_file_count++, o) a++, d++;
    } else text_like_file_count++;
  }
  let u = e.length > 0;
  return {
    binary_ext_file_count: binary_ext_file_count,
    pdf_file_count: pdf_file_count,
    text_like_file_count: text_like_file_count,
    image_ext_file_count: image_ext_file_count,
    all_files_binary_ext_no_sha256: u && a === e.length ? 1 : 0,
    all_files_binary_ext_or_pdf_no_sha256: u && d === e.length ? 1 : 0
  };
}
var Ke = 30000,
  maxBytes_2 = 36700160,
  Se = {
    startsTurn: 3,
    noTurn: 2
  },
  quietLimitMs = 1e4,
  floorMs = 250,
  baseMs = 1000,
  Oe = 25000,
  Te = 16,
  Ze = 20,
  Qe = 64,
  et = 16;
function Ne() {
  return (Eg() ? 16 : 64) * 1024 * 1024;
}
var max = 300000,
  tt = 60000,
  Ee = {
    min: 15000,
    max: max
  },
  nt = 3,
  rt = "x-anthropic-attachment-prefetch",
  Re = {
    name: "x-anthropic-attachment-prefetch-seen",
    value: "1"
  },
  it = 409,
  ot = 64,
  at = 300000,
  dt = 32,
  lt = 60000,
  ut = {
    no_token: "failed_no_token_count",
    http_status: "failed_http_status_count",
    too_large: "failed_too_large_count",
    held_limit: "failed_held_limit_count",
    stalled: "failed_stalled_count",
    stopped: "failed_stopped_count",
    error: "failed_error_count"
  },
  ct = {
    override: !0,
    payload: !0,
    disk: !0,
    disabled: !1,
    fallback: !1
  },
  ft = {
    no_token: 1,
    http_status: 2,
    too_large: 3,
    held_limit: 4,
    stalled: 5,
    stopped: 6,
    error: 7
  },
  failure_code = 8,
  _t = 9;
function O(e) {
  t(`[bridge:inbound-attach] ${e}`);
}
async function ht(e, r) {
  try {
    let i = await Xe(e);
    if (!i.isFile()) return "absent";
    if (i.size !== r.length) return "changed";
  } catch (error) {
    let n = k(error);
    return n === "ENOENT" || n === "ENOTDIR" ? "absent" : "changed";
  }
  return (await K7(e, r.length))?.equals(r) ? "same" : "changed";
}
async function gt(e, r, i, n, f, a, d, u, _, I, o = !1, s) {
  let M = rMe(ge().recoveries),
    h = _?.accessToken ?? (W() && u !== void 0 ? await Uk(u) : MT());
  if (!h) return O("skip: no oauth token"), se(n, "no_token", 0);
  let C = h,
    w,
    sha256,
    x,
    A = !1,
    G = 0,
    D = f;
  try {
    let maxBytes = e.sha256 === void 0 ? maxBytes_2 : tae;
    if (typeof e.file_size === "number" && e.file_size > maxBytes) return se(n, "too_large", 0);
    let B = Ae(_),
      j = eit(e.file_uuid, _);
    if (B !== void 0 && j !== void 0 && j.bearer === st(h) && j.size <= maxBytes && (e.sha256 === void 0 || e.sha256 === j.sha256)) {
      let R = await K7(j.path, j.size);
      if (R !== null && st(R) === j.sha256) w = R, sha256 = j.sha256, x = j.path, n.reusedFileCount++;else if (B.get(Z(e.file_uuid)) === j) B.delete(Z(e.file_uuid));
    }
    let ae = xjt(),
      y = Z(e.file_uuid);
    ae.refusedEarly?.delete(y);
    let T = w === void 0 && _ === void 0 && s === void 0 ? ae.byFileUuid.get(y) : void 0;
    while (T !== void 0) {
      let R = performance.now(),
        z = St(T, R, st(h)),
        inFlight = T.settledAt === void 0,
        le = T.startedBy === "prefetch",
        q = await T.bytes,
        waitedMs = performance.now() - R;
      if (G += waitedMs, le && inFlight) {
        if (n.joinedInFlightCount++, n.slowestJoinWaitMs = Math.max(n.slowestJoinWaitMs, waitedMs), T.headersTimedOut) D = Math.max(1, f - 1);
      }
      let sameBearer = T.bearer === st(h),
        passes = q !== null && sameBearer && q.length <= maxBytes && (typeof e.sha256 !== "string" || jIn(q, {
          sha256: e.sha256,
          file_size: e.file_size
        }));
      if (passes) {
        if (_ === void 0) oMe(ge(), M);
        w = q, A = !0;
      } else if (q === null && inFlight && sameBearer && ze(T, R)) return se(n, T.failure ?? "error", T.receivedBytes);
      if (le && q !== null) {
        if (passes) n.prefetchedFileCount++;
        if (z) Tt(T, q, {
          inFlight: inFlight,
          passes: passes,
          sameBearer: sameBearer,
          waitedMs: waitedMs
        });
      }
      let Q = w === void 0 ? ae.byFileUuid.get(y) : void 0;
      T = Q !== T && Q?.startedBy === "message" && Q.bearer === st(h) ? Q : void 0;
    }
    if (w === void 0) {
      let abortController = new AbortController(),
        z = () => abortController.abort();
      if (s?.addEventListener("abort", z, {
        once: !0
      }), s?.aborted) z();
      let J,
        le = 0,
        q = {
          fileUuid: e.file_uuid,
          baseUrl: _?.baseUrl,
          forPrefetch: !1,
          maxBytes: maxBytes,
          token: () => C,
          admitBytes: L => {
            if (le = L, J !== void 0) J.receivedBytes = L;
            return !0;
          }
        },
        ue = De(D, G, abortController, n, q).then(async L => {
          if (_ !== void 0 || !("failure" in L) || L.httpStatus !== 401 || pO() !== void 0) return L;
          let Q = await Et(C, u, d, abortController.signal, a, n);
          if (Q === void 0) return L;
          if (C = Q.bearer, M = Q.stamp, J !== void 0) J.bearer = st(Q.bearer);
          n.retriedAfter401Count++;
          let Ce = await De(1, 0, abortController, n, q);
          if (!("failure" in Ce)) n.recoveredFileCount++;
          return Ce;
        }).catch(L => (l(L), {
          failure: "error"
        }));
      if (_ === void 0 && s === void 0 && He().value) J = je("message", abortController, ue, st(h)), ae.byFileUuid.set(y, J);
      let ne = await ue;
      if (s?.removeEventListener("abort", z), "failure" in ne) return se(n, ne.failure, le, ne.httpStatus);
      if (_ === void 0) oMe(ge(), M), ght();
      w = ne.data;
    }
  } catch (error) {
    return O(`fetch ${e.file_uuid} threw: ${error}`), se(n, "error", 0);
  }
  if (typeof e.sha256 === "string" && !A && !jIn(w, {
    sha256: e.sha256,
    file_size: e.file_size
  })) return O(`fetch ${e.file_uuid} failed integrity verification`), {
    failure: "digest_mismatch"
  };
  let timings = {
      resizeMs: 0,
      pngPaletteMs: 0,
      byteBudgetMs: 0
    },
    N = performance.now(),
    imageBlock = i && e.is_image === !0 && e.sha256 === void 0 ? await d0s(w, aL, {
      timings: timings
    }).catch(S => (O(`inline ${e.file_uuid} threw: ${S}`), null)) : null;
  if (n.slowestInlineImageBuildMs = Math.max(n.slowestInlineImageBuildMs, performance.now() - N), n.slowestInlineImageResizeMs = Math.max(n.slowestInlineImageResizeMs, timings.resizeMs), n.slowestInlineImagePngPaletteMs = Math.max(n.slowestInlineImagePngPaletteMs, timings.pngPaletteMs), n.slowestInlineImageByteBudgetMs = Math.max(n.slowestInlineImageByteBudgetMs, timings.byteBudgetMs), imageBlock && Nee(w) === "image/png") {
    if (n.inlinedPngSourceCount++, h0s(w)) n.inlinedPngSourceMaybeTransparentCount++;
    if (imageBlock.source.type === "base64" && imageBlock.source.media_type === "image/jpeg") n.inlinedPngSourceSentAsJpegCount++;
  }
  let re = imageBlock ? `image.${CGn[Nee(w)]}` : I4e(e.file_name),
    ee = (imageBlock ? ke().slice(0, 8) : e.file_uuid.slice(0, 8) || ke().slice(0, 8)).replace(/[^a-zA-Z0-9_-]/g, "_"),
    te = I ?? EN(),
    ie = Azn(ee, re),
    path = ye(te, ie),
    oe = K(),
    ce = !o || e.sha256 !== void 0 ? "absent" : x === path ? "same" : fye() === null ? await ht(path, w) : "absent";
  if (s?.aborted) return se(n, "stopped", 0);
  let fe = performance.now(),
    H;
  if (ce === "same") n.unchangedOnDiskCount++;else if (ce === "changed") n.keptChangedFileCount++;else if (W() && d !== void 0 && Cr(oe) && Cr(ie) && (I === void 0 || I === EN()) && (fye() !== null || VGe() === null)) {
    let S = await d.write(Be.userConfigDir("uploads", [oe, ie]), w, {
      mode: 384
    });
    if (!S.ok) H = yt(S.error), n.lastFailedWrite = {
      code: pS(um(S.error)) ?? c(S.error.code),
      step: b("storage_backend")
    };
  } else if (de()) OB("inbound_attachment", path), H = "refused: this session is diskless and writes no files to this machine's disk", n.lastFailedWrite = {
    code: b("diskless"),
    step: b("refused")
  };else {
    let step = b("mkdir");
    try {
      let B = await jRt(te);
      try {
        if (s?.aborted) return se(n, "stopped", 0);
        step = b("write"), await An(ye(B.at, ie), w, 384);
      } finally {
        await B.release();
      }
    } catch (error) {
      H = `${error}`, n.lastFailedWrite = {
        code: Fr(error) ?? b("unknown"),
        step: step
      };
    }
  }
  if (n.slowestWriteMs = Math.max(n.slowestWriteMs, performance.now() - fe), H !== void 0) {
    if (O(`write ${path} failed: ${H}`), n.failedWriteCount++, imageBlock) return n.inlinedImageNotSavedCount++, {
      imageBlock: imageBlock
    };
    return {
      failure: "write"
    };
  }
  let me = performance.now();
  if (sha256 ??= st(w), n.slowestHashAfterWriteMs = Math.max(n.slowestHashAfterWriteMs, performance.now() - me), r && e.sha256 === void 0 && fye() === null) try {
    eMs(await qe(path), sha256);
  } catch {
    O(`registration skipped for ${path}`);
  }
  let V = Ae(_);
  if (V !== void 0) {
    if (V.delete(Z(e.file_uuid)), V.size >= Qe) {
      let S = V.keys().next().value;
      if (S !== void 0) V.delete(S);
    }
    V.set(Z(e.file_uuid), {
      path: path,
      size: w.length,
      sha256: sha256,
      bearer: st(C)
    });
  }
  if (O(`resolved ${e.file_uuid} \u2192 ${path} (${w.length} bytes)`), imageBlock) return O(`inlined ${e.file_uuid} (${w.length} bytes)`), {
    imageBlock: imageBlock,
    path: path
  };
  if (i && e.is_image === !0 && e.sha256 === void 0) return O(`inline ${e.file_uuid} fell back to @path ref`), {
    path: path,
    inlineFellBack: !0
  };
  return {
    path: path
  };
}
var pt = {
  download: "it could not be downloaded",
  digest_mismatch: "it failed integrity verification",
  write: "it could not be written to the uploads directory"
};
async function $8s(e, r, i, n, f, a, should_query, u, _, I, o = !0) {
  if (e.length === 0) return {
    prefix: "",
    imageBlocks: [],
    inlinedImagePaths: [],
    deliveredCount: 0
  };
  O(`resolving ${e.length} attachment(s)`);
  let refusedEarly = xjt().refusedEarly;
  if (refusedEarly !== void 0 && refusedEarly.size > 0) for (let y of e) refusedEarly.delete(Z(y.file_uuid));
  let M = performance.now(),
    h = {
      slowestTimeToHeadersMs: 0,
      slowestDownloadMs: 0,
      slowestJoinWaitMs: 0,
      slowestInlineImageBuildMs: 0,
      slowestInlineImageResizeMs: 0,
      slowestInlineImagePngPaletteMs: 0,
      slowestInlineImageByteBudgetMs: 0,
      slowestWriteMs: 0,
      slowestHashAfterWriteMs: 0,
      downloadedBytes: 0,
      downloadTryCount: 0,
      recoveredFileCount: 0,
      retriedAfter401Count: 0,
      slowest401RefreshWaitMs: 0,
      failedWriteCount: 0,
      inlinedImageNotSavedCount: 0,
      unchangedOnDiskCount: 0,
      keptChangedFileCount: 0,
      reusedFileCount: 0,
      prefetchedFileCount: 0,
      joinedInFlightCount: 0,
      inlinedPngSourceCount: 0,
      inlinedPngSourceMaybeTransparentCount: 0,
      inlinedPngSourceSentAsJpegCount: 0,
      failedDownloads: {}
    },
    C = e.filter(item => typeof item.sha256 === "string"),
    w = Le(e);
  if (!(a?.accessToken ?? (W() && f !== void 0 ? await Uk(f) : MT()))) {
    O("skip: no oauth token");
    let y = {
      ...xe(e.slice(0, w), 0, 0, h, M),
      ...Pe(_, u)
    };
    p("bridge_attachment_resolve", "no_token", y), X("warn", "bridge_attachment_download_timing", {
      outcome: "no_token",
      should_query: should_query,
      ...y
    });
    let missingFiles = HIn(e.filter(item => typeof item.sha256 !== "string"), "no_token");
    if (C.length > 0) {
      let R = C.length - Dee,
        z = R > 0 ? C.slice(0, Dee) : C;
      Xpr("bridge", z.length, 0);
      let J = R > 0 ? " " + BIn(R) : "";
      return {
        prefix: z.map(item => UIn(item.file_name, "it could not be downloaded (not signed in)")).join(" ") + J + (missingFiles.length > 0 ? " " + we(missingFiles.length, missingFiles.length) : "") + " ",
        imageBlocks: [],
        inlinedImagePaths: [],
        deliveredCount: 0,
        ...(missingFiles.length > 0 && {
          missingFiles: missingFiles
        })
      };
    }
    return {
      prefix: we(missingFiles.length, missingFiles.length) + " ",
      imageBlocks: [],
      inlinedImagePaths: [],
      deliveredCount: 0,
      missingFiles: missingFiles
    };
  }
  let x = [],
    A = e,
    G = A.length > w;
  if (G) {
    if (O(`dropping ${A.length - w} attachment(s) over the ${w} cap`), C.length > 0) x.push(BIn(A.length - w));
    A = A.slice(0, w);
  }
  let D = r && i,
    F = a === void 0 && I === void 0,
    N = F && A.length > Te,
    P = ha(Te, y => gt(y, r, D, h, should_query === !1 ? Se.noTurn : Se.startsTurn, o, n, f, a, u, should_query === !1, I).finally(() => {
      if (N) ve(y);
    })),
    re;
  try {
    re = await Promise.all(A.map(item => P(item)));
  } finally {
    for (let y of F ? A : []) ve(y);
  }
  let ee = [],
    imageBlocks = [],
    ie = [],
    U = 0,
    oe = 0,
    ce = 0,
    fe = !1,
    missingFiles_2 = [],
    writtenFiles = [];
  if (re.forEach((item, index) => {
    let R = A[index],
      z = typeof R.sha256 === "string";
    if (z) oe++;
    if ("path" in item) writtenFiles.push({
      file_uuid: R.file_uuid,
      path: item.path,
      inlined: "imageBlock" in item
    });
    if ("imageBlock" in item) {
      if (imageBlocks.push(item.imageBlock), "path" in item) ie.push(item.path);
    } else if ("path" in item) {
      if (ee.push(`@"${item.path}"`), item.inlineFellBack) U++;
      if (z) ce++;
    } else {
      if (item.failure === "digest_mismatch") fe = !0;
      if (z) x.push(UIn(R.file_name, pt[item.failure]));else missingFiles_2.push({
        file_uuid: R.file_uuid,
        reason: item.failure === "write" ? "write" : item.cause ?? "download"
      });
    }
  }), missingFiles_2.length > 0) {
    let y = C.length === 0 ? e.slice(w) : [];
    missingFiles_2.push(...HIn(y, "count_cap")), x.push(we(missingFiles_2.length, A.length - oe + y.length));
  }
  if (oe > 0) Xpr("bridge", oe, ce);
  let deliveredCount = ee.length + imageBlocks.length,
    S = {
      ...xe(A, deliveredCount, imageBlocks.length, h, M),
      ...Pe(_, u)
    },
    outcome;
  if (deliveredCount === 0) outcome = fe ? "digest_mismatch" : "all_failed", m("bridge_attachment_resolve", outcome, S);else if (deliveredCount < A.length) outcome = fe ? "digest_mismatch" : "partial_failed", p("bridge_attachment_resolve", outcome, S);else if (G) outcome = "over_count_cap", p("bridge_attachment_resolve", outcome, S);else if (h.inlinedImageNotSavedCount > 0) outcome = "inlined_image_not_saved", p("bridge_attachment_resolve", outcome, S);else outcome = "ok", g("bridge_attachment_resolve", S);
  let j = outcome !== "ok" && outcome !== "over_count_cap" || h.failedWriteCount > 0;
  if (X(j ? "warn" : "info", "bridge_attachment_download_timing", {
    outcome: outcome,
    should_query: should_query,
    ...S
  }), U > 0) p("bridge_attachment_inline_image", "fallback_path_ref");else if (imageBlocks.length > 0) g("bridge_attachment_inline_image");
  let ae = [...ee, ...x];
  return {
    prefix: ae.length > 0 ? ae.join(" ") + " " : "",
    imageBlocks: imageBlocks,
    inlinedImagePaths: h.inlinedImageNotSavedCount > 0 ? [] : ie,
    deliveredCount: deliveredCount,
    ...(missingFiles_2.length > 0 && {
      missingFiles: missingFiles_2
    }),
    ...(writtenFiles.length > 0 && {
      writtenFiles: writtenFiles
    }),
    timing: {
      timeToHeadersMs: Math.round(h.slowestTimeToHeadersMs),
      downloadMs: Math.round(h.slowestDownloadMs),
      joinWaitMs: Math.round(h.slowestJoinWaitMs),
      imageBuildMs: Math.round(h.slowestInlineImageBuildMs),
      approxDownloadedBytes: Number(h.downloadedBytes.toPrecision(2)),
      prefetchedFileCount: h.prefetchedFileCount
    }
  };
}
function Ue(e, r) {
  if (!r) return e;
  if (typeof e === "string") return Jpr(e, r);
  let i = e.findLastIndex(n => n.type === "text");
  if (i !== -1) {
    let n = e[i];
    if (n.type === "text") return [...e.slice(0, i), {
      ...n,
      text: Jpr(n.text, r)
    }, ...e.slice(i + 1)];
  }
  return [...e, {
    type: "text",
    text: r.trimEnd()
  }];
}
function bt(text, r) {
  if (r.length === 0) return text;
  let i = typeof text === "string" ? text.trim() === "" ? [] : [{
    type: "text",
    text: text
  }] : oio(text);
  return [...r, ...i];
}
function HIn(e, reason) {
  return e.map(item => ({
    file_uuid: item.file_uuid,
    reason: reason
  }));
}
function uoo(e, r, i) {
  let n = $1(e);
  if (n.length === 0 || n.length > Le(n)) return;
  let paths = [];
  for (let d of n) {
    let u = d.file_uuid.slice(0, 8).replace(/[^a-zA-Z0-9_-]/g, "_");
    if (u === "") return;
    let _ = Azn(u, I4e(d.file_name));
    paths.push(ye(i, _));
  }
  let refs = paths.map(item => `@"${item}"`);
  return {
    content: Ue(r ?? "", refs.join(" ") + " "),
    refs: refs,
    paths: paths
  };
}
async function x5t(e, r, i, n, f, a, d, u = !0) {
  let content = r ?? "",
    I = $1(e);
  if (I.length === 0) return {
    content: content,
    inlinedImagePaths: []
  };
  let o = i && !(typeof content === "string" && wme(content)),
    {
      prefix: prefix,
      imageBlocks: imageBlocks_2,
      deliveredCount: deliveredCount_2,
      ...C
    } = await $8s(I, i, o, n, f, void 0, Pcs(e), a, d, void 0, u);
  if (deliveredCount_2 === 0 && typeof content === "string" && content.trim() === "") return {
    content: prefix.trimEnd(),
    ...C
  };
  return {
    content: bt(Ue(content, prefix), imageBlocks_2),
    ...C
  };
}
function ve(e) {
  let r = xjt(),
    i = Z(e.file_uuid),
    n = r.byFileUuid.get(i);
  if (n?.taken !== void 0 && n.settledAt !== void 0) r.byFileUuid.delete(i);
}
function Le(e) {
  return e.every(item => item.sha256 === void 0) ? Ze : Dee;
}
function poo(e) {
  if (!e || E("tengu_amber_ferry", !1) !== !0) return "off";
  return E("tengu_slate_marten", !1) === !0 ? "on_with_pdfs" : "on";
}
function Pe(e, r) {
  return e === void 0 ? {} : {
    ahead_of_files_flag_on: e === "off" ? 0 : 1,
    ahead_of_files_on_with_pdfs: e === "on_with_pdfs" ? 1 : 0,
    queued_ahead_of_files: r === void 0 ? 0 : 1
  };
}
function xe(e, resolved_count, inlined_image_count, n, f) {
  return {
    file_count: e.length,
    resolved_count: resolved_count,
    download_try_count: n.downloadTryCount,
    recovered_file_count: n.recoveredFileCount,
    reused_file_count: n.reusedFileCount,
    prefetched_file_count: n.prefetchedFileCount,
    joined_in_flight_count: n.joinedInFlightCount,
    inlined_image_count: inlined_image_count,
    ...FIn(e),
    inlined_png_source_count: n.inlinedPngSourceCount,
    inlined_png_source_maybe_transparent_count: n.inlinedPngSourceMaybeTransparentCount,
    inlined_png_source_sent_as_jpeg_count: n.inlinedPngSourceSentAsJpegCount,
    approx_downloaded_bytes: Number(n.downloadedBytes.toPrecision(2)),
    duration_ms: Math.round(performance.now() - f),
    slowest_time_to_headers_ms: Math.round(n.slowestTimeToHeadersMs),
    slowest_download_ms: Math.round(n.slowestDownloadMs),
    slowest_join_wait_ms: Math.round(n.slowestJoinWaitMs),
    slowest_inline_image_build_ms: Math.round(n.slowestInlineImageBuildMs),
    slowest_inline_image_resize_ms: Math.round(n.slowestInlineImageResizeMs),
    slowest_inline_image_png_palette_ms: Math.round(n.slowestInlineImagePngPaletteMs),
    slowest_inline_image_byte_budget_ms: Math.round(n.slowestInlineImageByteBudgetMs),
    slowest_write_ms: Math.round(n.slowestWriteMs),
    slowest_hash_after_write_ms: Math.round(n.slowestHashAfterWriteMs),
    ...n.failedDownloads,
    ...(n.retriedAfter401Count > 0 && {
      retried_after_401_count: n.retriedAfter401Count
    }),
    ...(n.slowest401RefreshWaitMs > 0 && {
      slowest_401_refresh_wait_ms: Math.round(n.slowest401RefreshWaitMs)
    }),
    ...(n.failedWriteCount > 0 && {
      failed_write_count: n.failedWriteCount
    }),
    ...(n.inlinedImageNotSavedCount > 0 && {
      inlined_image_not_saved_count: n.inlinedImageNotSavedCount
    }),
    ...(n.lastFailedWrite !== void 0 && {
      last_failed_write_code: n.lastFailedWrite.code,
      last_failed_write_step: n.lastFailedWrite.step
    }),
    ...(n.unchangedOnDiskCount > 0 && {
      unchanged_on_disk_count: n.unchangedOnDiskCount
    }),
    ...(n.keptChangedFileCount > 0 && {
      kept_changed_file_count: n.keptChangedFileCount
    })
  };
}
var wt = new Set([404, 410]);
function se(e, cause, i, n) {
  let failedDownloads = e.failedDownloads,
    a = ut[cause];
  if (failedDownloads[a] = (failedDownloads[a] ?? 0) + 1, i > 0) failedDownloads.partway_failed_count = (failedDownloads.partway_failed_count ?? 0) + 1;
  if (n !== void 0) failedDownloads.last_failed_http_status = n;
  if (cause === "too_large" || cause === "no_token") return {
    failure: "download",
    cause: cause
  };
  return {
    failure: "download",
    ...(cause === "http_status" && wt.has(n) && {
      cause: "not_found"
    })
  };
}
function Ae(e) {
  return e === void 0 && fye() === null ? hzo() : void 0;
}
function eit(e, r) {
  let i = Ae(r)?.get(Z(e));
  return i !== void 0 && Ge(i.path) === EN() ? i : void 0;
}
function Z(e) {
  return Vt(e) === null ? e : e.toLowerCase();
}
function He() {
  return En("tengu_dapper_brooks", !1);
}
function $e() {
  return E("tengu_twinkling_hoare", !1) === !0;
}
function It() {
  let e = E("tengu_hazel_lantern", 0),
    r = Eg(),
    ms = r ? tt : Ee.max;
  if (typeof e !== "number" || !(e > 0)) return {
    ms: ms,
    repeatRenews: !1
  };
  return {
    ms: Math.min(ms, Math.max(Ee.min, Math.round(e * 1000))),
    repeatRenews: !r
  };
}
function foo(e, {
  issuedAt: issuedAt,
  credentials: credentials,
  onlyThese = !1
}) {
  if (At()) return 0;
  let f = He();
  if (!f.value) return zbe("bridge_attachment_prefetch_flag_off", {
    file_count: e.length,
    flag_served: ct[f.source]
  }), 0;
  let a = xjt(),
    d = It(),
    u = {
      file_count: e.length,
      started_count: 0,
      already_present_count: 0,
      held_limit_count: 0,
      start_budget_count: 0,
      skipped_count: 0
    },
    refreshed_count = 0,
    dropped_count = 0,
    refused_before_count = 0,
    early_reads_stopped_count = 0;
  if (a.earlyReadsStopped === !0 && !$e()) a.earlyReadsStopped = void 0, a.earlyReadsStopReported = void 0;
  let M = a.earlyReadsStopped === !0,
    h = new Set(),
    C = Date.now() - issuedAt,
    stale = C > Math.max(nt * d.ms, max),
    v = stale ? [] : e.slice(0, Dee);
  if (u.skipped_count = e.length - v.length, onlyThese && !stale) {
    let D = new Set(e.map(item => Z(item.file_uuid)));
    for (let [F, N] of a.byFileUuid) if (!D.has(F) && N.release !== void 0 && !N.taken) N.release("dropped_unused"), dropped_count++;
  }
  for (let D of v) {
    let F = Z(D.file_uuid);
    if (Vt(D.file_uuid) === null || D.file_size !== void 0 && D.file_size > maxBytes_2) {
      u.skipped_count++;
      continue;
    }
    let N = a.refusedEarly?.get(F);
    if (N !== void 0) {
      if (performance.now() - N < at) {
        refused_before_count++;
        continue;
      }
      a.refusedEarly?.delete(F);
    }
    let P = a.byFileUuid.get(F);
    if (P !== void 0 || eit(D.file_uuid, void 0) !== void 0) {
      if (u.already_present_count++, d.repeatRenews && P?.release !== void 0 && !P.taken && !h.has(F)) he(P, d.ms), h.add(F), refreshed_count++;
      continue;
    }
    if (M) {
      early_reads_stopped_count++;
      continue;
    }
    let re = Mt(D.file_size),
      ee = Ct(a, re);
    if (ee === "held_limit") u.held_limit_count++;else if (ee === "start_budget") u.start_budget_count++;else kt(a, F, D.file_uuid, re, credentials, d.ms, d.repeatRenews), h.add(F), u.started_count++;
  }
  let x = Me(a),
    A = {
      ...u,
      age_ms: Math.round(C),
      held_file_count: x.count,
      approx_held_bytes: Number(x.bytes.toPrecision(2)),
      ...(d.repeatRenews && {
        hold_ms: d.ms,
        refreshed_count: refreshed_count,
        renewed_since_last_report: a.renewalsNotYetReported ?? 0
      }),
      ...(onlyThese && {
        only_these: !0,
        dropped_count: dropped_count
      }),
      ...(refused_before_count > 0 && {
        refused_before_count: refused_before_count
      }),
      ...(early_reads_stopped_count > 0 && {
        early_reads_stopped_count: early_reads_stopped_count
      })
    },
    G = a.earlyReadsStopReported === !0 ? early_reads_stopped_count : 0;
  if (refreshed_count + refused_before_count + G > 0 && refreshed_count === u.already_present_count && u.file_count === refreshed_count + refused_before_count + G && dropped_count === 0) return a.renewalsNotYetReported = (a.renewalsNotYetReported ?? 0) + refreshed_count, 0;
  if (a.renewalsNotYetReported = 0, early_reads_stopped_count > 0) a.earlyReadsStopReported = !0;
  if (stale) p("bridge_attachment_prefetch", "stale", A);else if (early_reads_stopped_count > 0) p("bridge_attachment_prefetch", "mark_unseen_stop", A);else if (u.held_limit_count > 0) p("bridge_attachment_prefetch", "held_limit", A);else if (u.start_budget_count > 0) p("bridge_attachment_prefetch", "start_budget", A);else g("bridge_attachment_prefetch", A);
  return zbe(u.started_count > 0 ? "bridge_attachment_prefetch_started" : "bridge_attachment_prefetch_not_started", {
    ...A,
    stale: stale
  }), u.started_count;
}
function zbe(e, r) {
  X("info", e, r);
}
function Mt(e) {
  return e !== void 0 && e > 0 ? e : 0;
}
function Ct(e, r) {
  let i = performance.now(),
    recentPrefetchStarts = e.recentPrefetchStarts;
  while (recentPrefetchStarts.length > 0 && i - recentPrefetchStarts[0] >= lt) recentPrefetchStarts.shift();
  let f = Me(e);
  if (f.count >= et || f.bytes + r > Ne()) return "held_limit";
  return recentPrefetchStarts.length < dt ? "ok" : "start_budget";
}
function Me(e) {
  let count = 0,
    bytes = 0;
  for (let n of e.byFileUuid.values()) if (n.startedBy === "prefetch" && !n.taken) count++, bytes += n.settledAt === void 0 ? Math.max(n.receivedBytes, n.statedBytes) : n.receivedBytes;
  return {
    count: count,
    bytes: bytes
  };
}
function Ft(e) {
  e.release?.("expired_unused");
}
function he(e, r) {
  clearTimeout(e.expiry), e.expiry = setTimeout(Ft.bind(void 0, e), r), e.expiry.unref();
}
function kt(e, r, fileUuid, n, f, a, d) {
  let u = new AbortController(),
    _ = !1,
    I = Ye({
      fileUuid: fileUuid,
      baseUrl: void 0,
      forPrefetch: !0,
      maxBytes: maxBytes_2,
      quietLimitMs: quietLimitMs,
      token: async () => {
        let s = await Uk(f);
        if (s) o.bearer = st(s);
        return s;
      },
      abort: u,
      totals: void 0,
      onServed: mark_seen => {
        let stops_early_reads = !mark_seen && $e();
        if (stops_early_reads) e.earlyReadsStopped = !0;
        zbe("bridge_attachment_prefetch_served", {
          mark_seen: mark_seen,
          ...(!mark_seen && {
            stops_early_reads: stops_early_reads
          })
        });
      },
      admitBytes: s => {
        if (o.receivedBytes = s, o.taken || Me(e).bytes <= Ne()) return !0;
        return o.receivedBytes = 0, o.statedBytes = 0, !1;
      }
    }),
    o = je("prefetch", u, I, void 0);
  o.statedBytes = n, o.release = s => {
    if (e.byFileUuid.get(r) !== o || o.taken) return;
    if (s === "expired_unused" && d && o.settledAt === void 0) {
      he(o, a);
      return;
    }
    _ = !0, clearTimeout(o.expiry), e.byFileUuid.delete(r), u.abort();
    let M = {
      download_finished: o.settledAt !== void 0,
      approx_bytes: Number(o.receivedBytes.toPrecision(2)),
      ...(s === "dropped_unused" && {
        held_for_ms: Math.round(performance.now() - o.startedAt)
      })
    };
    p("bridge_attachment_prefetch_download", s, M), zbe(`bridge_attachment_prefetch_${s}`, M);
  }, he(o, a), e.recentPrefetchStarts.push(o.startedAt), e.byFileUuid.set(r, o), I.then(s => {
    if (!("failure" in s)) {
      if (d && e.byFileUuid.get(r) === o && !o.taken) he(o, a);
      return;
    }
    if (e.byFileUuid.get(r) === o && !o.taken) e.byFileUuid.delete(r), clearTimeout(o.expiry);
    let M = s.failure === "http_status" && s.httpStatus === it;
    if (M && !o.taken) {
      let A = e.refusedEarly ??= new Map();
      if (A.delete(r), A.size >= ot) A.delete(A.keys().next().value ?? r);
      A.set(r, performance.now());
    }
    if (_) return;
    let h = {
        duration_ms: Math.round(performance.now() - o.startedAt),
        ...(s.httpStatus !== void 0 && {
          http_status: s.httpStatus
        })
      },
      C = Je(s),
      w = C ? "no_answer" : s.failure;
    if (M) {
      p("bridge_attachment_prefetch_download", "refused_early", h), zbe("bridge_attachment_prefetch_failed", {
        ...h,
        failure_code: failure_code
      });
      return;
    }
    let taken = o.taken,
      x = taken?.by === "joiner" && taken.bearer === o.bearer && ze(o, taken.at);
    if (x) m("bridge_attachment_prefetch_download", w, h);else p("bridge_attachment_prefetch_download", w, h);
    zbe(x ? "bridge_attachment_prefetch_failed_file_lost" : "bridge_attachment_prefetch_failed", {
      ...h,
      failure_code: C ? _t : ft[s.failure]
    });
  }).catch(l);
}
function je(startedBy, abort, i, bearer) {
  let f = {
    startedBy: startedBy,
    bytes: i.then(a => {
      if (f.settledAt = performance.now(), "failure" in a) return f.failure = a.failure, f.headersTimedOut = Je(a), null;
      return a.data;
    }),
    startedAt: performance.now(),
    settledAt: void 0,
    failure: void 0,
    headersTimedOut: !1,
    receivedBytes: 0,
    statedBytes: 0,
    abort: abort,
    taken: startedBy === "message" ? {
      by: "starter"
    } : void 0,
    expiry: void 0,
    bearer: bearer
  };
  return f;
}
function ze(e, r) {
  let i = (e.settledAt ?? performance.now()) - r;
  return e.startedBy !== "prefetch" || e.failure === "too_large" || e.receivedBytes > 0 && e.failure !== "stalled" && i > Oe;
}
function St(e, at_2, bearer_2) {
  if (e.taken) return !1;
  return e.taken = {
    by: "joiner",
    at: at_2,
    bearer: bearer_2
  }, clearTimeout(e.expiry), !0;
}
function Tt(e, r, {
  inFlight: i,
  passes: passes_2,
  sameBearer: sameBearer_2,
  waitedMs: waitedMs_2
}) {
  let d = {
    in_flight: i,
    waited_ms: Math.round(waitedMs_2),
    download_ms: Math.round((e.settledAt ?? performance.now()) - e.startedAt),
    approx_bytes: Number(r.length.toPrecision(2))
  };
  if (passes_2) g("bridge_attachment_prefetch_download", d), zbe(i ? "bridge_attachment_prefetch_used_joined" : "bridge_attachment_prefetch_used_ready", d);else p("bridge_attachment_prefetch_download", sameBearer_2 ? "attestation_mismatch" : "bearer_changed", d), zbe(sameBearer_2 ? "bridge_attachment_prefetch_attestation_mismatch" : "bridge_attachment_prefetch_bearer_changed", d);
}
async function De(e, r, i, totals, f) {
  let a = performance.now() - r + Oe;
  for (let attempt = 0;; attempt++) {
    let u = new AbortController(),
      _ = () => u.abort();
    if (i.signal.addEventListener("abort", _, {
      once: !0
    }), i.signal.aborted) u.abort();
    totals.downloadTryCount++, f.admitBytes(0);
    let I = attempt + 1 < e && performance.now() + quietLimitMs + floorMs <= a,
      o = await Ye({
        ...f,
        totals: totals,
        abort: u,
        quietLimitMs: I ? quietLimitMs : Ke
      });
    if (i.signal.removeEventListener("abort", _), !("failure" in o)) {
      if (attempt > 0) totals.recoveredFileCount++;
      return o;
    }
    let s = o.httpStatus ?? 0,
      M = o.failure === "stalled" || o.failure === "error" && o.final !== !0 || o.failure === "http_status" && (s >= 500 || s === 408 || s === 429),
      h = performance.now(),
      C = a - h,
      w = Math.min(SP({
        baseMs: baseMs,
        attempt: attempt,
        floorMs: floorMs
      }), Math.max(floorMs, C)),
      v = I && o.failure === "stalled";
    if (M && attempt + 1 < e && (v || C >= floorMs)) {
      if (await Y(w, i.signal), !i.signal.aborted) continue;
    }
    return o;
  }
}
function ge() {
  let e = xjt();
  return e.signInRefresh ??= {
    attempted: !1,
    recoveries: {
      begun: 0,
      running: 0
    }
  }, e.signInRefresh;
}
async function Et(e, r, i, n, f, a) {
  let d = ge(),
    abortController_2 = new AbortController(),
    _ = Y(quietLimitMs, AbortSignal.any([n, abortController_2.signal])).then(() => {
      return;
    });
  try {
    let bearer_3 = await Promise.race([Uk(r).catch(() => {
      return;
    }), _]);
    if (bearer_3 === e) {
      let o = d.attempted && d.recoveries.running === 0;
      if (!d.attempted) {
        d.attempted = !0;
        let M = !1;
        d.run = T$t(d, () => Jb(e, r, i, {
          onForcedRefreshOutcome: h => {
            if (cJe.has(h)) d.attempted = !1;else M = !0;
          }
        })).then(async () => {
          if (!M && (await Uk(r)) !== e) d.attempted = !1;
        }).catch(l);
      }
      if (!f) {
        if (!(await Promise.race([Xa(r).catch(() => null), _]))?.refreshToken) return;
      }
      let s = performance.now();
      bearer_3 = await Promise.race([(d.run ?? Promise.resolve()).then(() => o ? _le(r) : void 0).then(() => Uk(r)).catch(() => {
        return;
      }), _]), a.slowest401RefreshWaitMs = Math.max(a.slowest401RefreshWaitMs, performance.now() - s);
    }
    return bearer_3 && bearer_3 !== e && !n.aborted ? {
      bearer: bearer_3,
      stamp: rMe(d.recoveries)
    } : void 0;
  } finally {
    abortController_2.abort();
  }
}
async function Ye({
  fileUuid: fileUuid_2,
  baseUrl: baseUrl,
  forPrefetch: forPrefetch,
  maxBytes: maxBytes_3,
  token: token,
  abort: abort_2,
  quietLimitMs: quietLimitMs_2,
  totals: totals_2,
  onServed: onServed,
  admitBytes: admitBytes
}) {
  let o = forPrefetch ? "of a prefetched file" : fileUuid_2,
    s = !1,
    M = !1,
    h = () => {
      s = !0, abort_2.abort();
    },
    C = setTimeout(h, quietLimitMs_2),
    w = performance.now();
  try {
    let v = await Promise.race([token(), Rt(abort_2.signal)]);
    if (abort_2.signal.aborted) return s ? be(M) : {
      failure: "stopped"
    };
    if (!v) return {
      failure: "no_token"
    };
    let url;
    try {
      url = `${baseUrl ?? PN()}/api/oauth/files/${encodeURIComponent(fileUuid_2)}/content`;
    } catch (error) {
      return O(`fetch ${o} has no URL: ${forPrefetch ? error instanceof Error ? error.name : "a non-Error" : error}`), {
        failure: "error",
        final: !0
      };
    }
    let A = await fetch(url, {
      headers: {
        Authorization: `Bearer ${v}`,
        "User-Agent": hs(),
        ...(forPrefetch && {
          [rt]: "1"
        })
      },
      ...(forPrefetch && {
        cache: "no-store"
      }),
      signal: abort_2.signal,
      ...ra({
        url: url
      })
    });
    if (M = !0, clearTimeout(C), C = setTimeout(h, quietLimitMs_2), totals_2 !== void 0) totals_2.slowestTimeToHeadersMs = Math.max(totals_2.slowestTimeToHeadersMs, performance.now() - w);
    if (A.status !== 200) return O(`fetch ${o} failed: status=${A.status}`), await Nz(A), s ? be(M) : {
      failure: "http_status",
      httpStatus: A.status
    };
    onServed?.(A.headers.get(Re.name)?.trim() === Re.value);
    let G = A.body?.getReader(),
      D = [],
      F = 0;
    while (G !== void 0) {
      let {
        done: done,
        value: value
      } = await G.read();
      if (done) break;
      if (C.refresh(), F += value.byteLength, F > maxBytes_3) return O(`fetch ${o} over size cap (${F} bytes so far)`), abort_2.abort(), {
        failure: "too_large"
      };
      if (!admitBytes(F)) return O(`fetch ${o} stopped: unused prefetched files would exceed their limit in memory`), abort_2.abort(), {
        failure: "held_limit"
      };
      D.push(value);
    }
    if (totals_2 !== void 0) totals_2.downloadedBytes += F;
    return {
      data: Buffer.concat(D, F)
    };
  } catch (error) {
    return O(`fetch ${o} threw: ${forPrefetch ? error instanceof Error ? error.name : "a non-Error" : error}`), s ? be(M) : {
      failure: abort_2.signal.aborted ? "stopped" : "error"
    };
  } finally {
    if (clearTimeout(C), totals_2 !== void 0) totals_2.slowestDownloadMs = Math.max(totals_2.slowestDownloadMs, performance.now() - w);
  }
}
function Je(e) {
  return "failure" in e && e.failure === "stalled" && e.beforeHeaders;
}
function be(e) {
  return {
    failure: "stalled",
    beforeHeaders: !e
  };
}
function Rt(e) {
  return new Promise(r => {
    if (e.aborted) {
      r(void 0);
      return;
    }
    e.addEventListener("abort", () => r(void 0), {
      once: !0
    });
  });
}
function we(e, r) {
  return r === 1 ? "[attachment did not arrive]" : e === r ? `[${r} attachments did not arrive]` : `[${e} of ${r} attachments did not arrive]`;
}
export { Rds, coo, FIn, $8s, HIn, uoo, x5t, poo, eit, foo, zbe };