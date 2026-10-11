// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Vx } from "B:/~BUN/root/chunk-339q6g5w.js";
import { It, d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { Bee } from "B:/~BUN/root/chunk-wefm1yd9.js";
import { en } from "B:/~BUN/root/chunk-bvn0mpsk.js";
import { Y, A2r, iyn, hjt } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { H } from "B:/~BUN/root/chunk-dkxhwhft.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { x } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { K } from "B:/~BUN/root/chunk-5px6g0cn.js";
import { Kt } from "B:/~BUN/root/chunk-9fcn5kmc.js";
import { jn, Ae } from "B:/~BUN/root/chunk-5w2ecytn.js";
import { yi } from "B:/~BUN/root/chunk-2ppgegpr.js";
import { qV, QL } from "B:/~BUN/root/chunk-pqs37yts.js";
import { Fkt, g5t, h5t, y5t, Cxn, i2e, Rxn } from "B:/~BUN/root/chunk-7bxjte4g.js";
import { hv, Ak, dI } from "B:/~BUN/root/chunk-8gym6yya.js";
import { T7 } from "B:/~BUN/root/chunk-0p35j9y3.js";
import { opr } from "B:/~BUN/root/chunk-5hv9qec2.js";
import { PU } from "B:/~BUN/root/chunk-hjew1zqw.js";
import { kCo } from "B:/~BUN/root/chunk-kk0ky5aa.js";
import { Ms } from "B:/~BUN/root/chunk-6492v1c5.js";
import { xin, u3e } from "B:/~BUN/root/chunk-07stbc6s.js";
import { G3, VCo, KCo } from "B:/~BUN/root/chunk-mac0vc34.js";
import { $a } from "B:/~BUN/root/chunk-fwzy34jf.js";
import { rt } from "B:/~BUN/root/chunk-mmkravm0.js";
import { randomUUID as z } from "crypto";
import { mkdir as te, realpath as ne, writeFile as ie } from "fs/promises";
import { dirname as oe, join as re } from "path";
var ae = 30000,
  se = 16,
  de = 64,
  le = 16,
  J = 67108864,
  ue = 300000,
  ce = 900000,
  fe = 32,
  me = 60000;
function A(e) {
  t(`[bridge:inbound-attach] ${e}`);
}
async function he(e, i, r, totals, a, s, f) {
  let h = f?.accessToken ?? (H() && s !== void 0 ? await Ak(s) : hv());
  if (!h) return A("skip: no oauth token"), {
    failure: "download"
  };
  let n,
    sha256,
    g = !1;
  try {
    if (typeof e.file_size === "number" && e.file_size > qV) return {
      failure: "download"
    };
    let w = L(f),
      P = G(e.file_uuid, f);
    if (w !== void 0 && P !== void 0 && P.bearer === Kt(h) && (e.sha256 === void 0 || e.sha256 === P.sha256)) {
      let B = await i2e(P.path, P.size);
      if (B !== null && Kt(B) === P.sha256) n = B, sha256 = P.sha256, totals.reusedFileCount++;else if (w.get(R(e.file_uuid)) === P) w.delete(R(e.file_uuid));
    }
    let O = iyn(),
      N = R(e.file_uuid),
      T = n === void 0 && f === void 0 ? O.byFileUuid.get(N) : void 0;
    if (T !== void 0) {
      let B = Be(T),
        inFlight = T.settledAt === void 0,
        S = T.startedBy === "prefetch",
        c = performance.now(),
        k = await T.bytes,
        waitedMs = performance.now() - c;
      if (S && inFlight) totals.joinedInFlightCount++, totals.slowestJoinWaitMs = Math.max(totals.slowestJoinWaitMs, waitedMs);
      let sameBearer = T.bearer === Kt(h),
        passes = k !== null && sameBearer && (typeof e.sha256 !== "string" || y5t(k, {
          sha256: e.sha256,
          file_size: e.file_size
        }));
      if (passes) n = k, g = !0;else if (k === null && inFlight && q(T)) return {
        failure: "download"
      };
      if (S && k !== null) {
        if (passes) totals.prefetchedFileCount++;
        if (B) Ie(T, k, {
          inFlight: inFlight,
          passes: passes,
          sameBearer: sameBearer,
          waitedMs: waitedMs
        });
      }
    }
    if (n === void 0) {
      let B = new AbortController(),
        y,
        S = V({
          fileUuid: e.file_uuid,
          baseUrl: f?.baseUrl,
          forPrefetch: !1,
          token: () => h,
          abort: B,
          totals: totals,
          admitBytes: k => {
            if (y !== void 0) y.receivedBytes = k;
            return !0;
          }
        });
      if (f === void 0 && Q()) y = Z("message", B, S, Kt(h)), O.byFileUuid.set(N, y);
      let c = await S;
      if ("failure" in c) return {
        failure: "download"
      };
      n = c.data;
    }
  } catch (error) {
    return A(`fetch ${e.file_uuid} threw: ${error}`), {
      failure: "download"
    };
  }
  if (typeof e.sha256 === "string" && !g && !y5t(n, {
    sha256: e.sha256,
    file_size: e.file_size
  })) return A(`fetch ${e.file_uuid} failed integrity verification`), {
    failure: "digest_mismatch"
  };
  let imageBlock = r && e.is_image === !0 && e.sha256 === void 0 ? await kCo(n, Vx).catch(w => (A(`inline ${e.file_uuid} threw: ${w}`), null)) : null,
    E = imageBlock ? `image.${xin[u3e(n)]}` : Fkt(e.file_name),
    I = (imageBlock ? z().slice(0, 8) : e.file_uuid.slice(0, 8) || z().slice(0, 8)).replace(/[^a-zA-Z0-9_-]/g, "_"),
    U = G3(),
    D = VCo(I, E),
    path = re(U, D),
    M = Y();
  if (H() && a !== void 0 && jn(M) && jn(D)) {
    let w = await a.write(Ae.userConfigDir("uploads", [M, D]), n, {
      mode: 384
    });
    if (!w.ok) return A(`write ${path} failed: ${rt(w.error)}`), {
      failure: "write"
    };
  } else try {
    await te(U, {
      recursive: !0,
      mode: 448
    }), await ie(path, n, {
      mode: 384
    });
  } catch (error) {
    return A(`write ${path} failed: ${error}`), {
      failure: "write"
    };
  }
  if (sha256 ??= Kt(n), i && e.sha256 === void 0) try {
    KCo(await ne(path), sha256);
  } catch {
    A(`registration skipped for ${path}`);
  }
  let F = L(f);
  if (F !== void 0) {
    if (F.delete(R(e.file_uuid)), F.size >= de) {
      let w = F.keys().next().value;
      if (w !== void 0) F.delete(w);
    }
    F.set(R(e.file_uuid), {
      path: path,
      size: n.length,
      sha256: sha256,
      bearer: Kt(h)
    });
  }
  if (A(`resolved ${e.file_uuid} \u2192 ${path} (${n.length} bytes)`), imageBlock) return A(`inlined ${e.file_uuid} (${n.length} bytes)`), {
    imageBlock: imageBlock,
    path: path
  };
  if (r && e.is_image === !0 && e.sha256 === void 0) return A(`inline ${e.file_uuid} fell back to @path ref`), {
    path: path,
    inlineFellBack: !0
  };
  return {
    path: path
  };
}
var ge = {
  download: "it could not be downloaded",
  digest_mismatch: "it failed integrity verification",
  write: "it could not be written to the uploads directory"
};
async function Xjo(e, i, r, o, a, s) {
  if (e.length === 0) return {
    prefix: "",
    imageBlocks: [],
    inlinedImagePaths: []
  };
  A(`resolving ${e.length} attachment(s)`);
  let f = performance.now(),
    h = {
      slowestTimeToHeadersMs: 0,
      slowestDownloadMs: 0,
      slowestJoinWaitMs: 0,
      downloadedBytes: 0,
      reusedFileCount: 0,
      prefetchedFileCount: 0,
      joinedInFlightCount: 0
    },
    n = e.filter(item => typeof item.sha256 === "string");
  if (!(s?.accessToken ?? (H() && a !== void 0 ? await Ak(a) : hv()))) {
    A("skip: no oauth token");
    let c = X(Math.min(e.length, QL), 0, h, f);
    if (p("bridge_attachment_resolve", "no_token", c), K("info", "bridge_attachment_download_timing", {
      outcome: "no_token",
      ...c
    }), n.length > 0) {
      let k = n.length - QL,
        C = k > 0 ? n.slice(0, QL) : n;
      Cxn("bridge", C.length, 0);
      let v = k > 0 ? " " + h5t(k) : "";
      return {
        prefix: C.map(item => g5t(item.file_name, "it could not be downloaded (not signed in)")).join(" ") + v + " ",
        imageBlocks: [],
        inlinedImagePaths: []
      };
    }
    return {
      prefix: "",
      imageBlocks: [],
      inlinedImagePaths: []
    };
  }
  let g = [],
    u = e,
    E = u.length > QL;
  if (E) {
    if (A(`dropping ${u.length - QL} attachment(s) over the ${QL} cap`), n.length > 0) g.push(h5t(u.length - QL));
    u = u.slice(0, QL);
  }
  let I = i && r,
    U = Ms(se, c => he(c, i, I, h, o, a, s)),
    D;
  try {
    D = await Promise.all(u.map(item => U(item)));
  } finally {
    let c = iyn();
    for (let k of s === void 0 ? u : []) {
      let C = R(k.file_uuid),
        v = c.byFileUuid.get(C);
      if (v?.taken === !0 && v.settledAt !== void 0) c.byFileUuid.delete(C);
    }
  }
  let b = [],
    imageBlocks = [],
    inlinedImagePaths = [],
    w = 0,
    P = 0,
    O = 0,
    N = !1;
  if (D.forEach((item, index) => {
    let C = u[index],
      v = typeof C.sha256 === "string";
    if (v) P++;
    if ("imageBlock" in item) imageBlocks.push(item.imageBlock), inlinedImagePaths.push(item.path);else if ("path" in item) {
      if (b.push(`@"${item.path}"`), item.inlineFellBack) w++;
      if (v) O++;
    } else {
      if (item.failure === "digest_mismatch") N = !0;
      if (v) g.push(g5t(C.file_name, ge[item.failure]));
    }
  }), P > 0) Cxn("bridge", P, O);
  let T = b.length + imageBlocks.length,
    B = X(u.length, T, h, f),
    outcome;
  if (T === 0) outcome = N ? "digest_mismatch" : "all_failed", m("bridge_attachment_resolve", outcome, B);else if (T < u.length) outcome = N ? "digest_mismatch" : "partial_failed", p("bridge_attachment_resolve", outcome, B);else if (E) outcome = "over_count_cap", p("bridge_attachment_resolve", outcome, B);else outcome = "ok", _("bridge_attachment_resolve", B);
  if (K("info", "bridge_attachment_download_timing", {
    outcome: outcome,
    ...B
  }), w > 0) p("bridge_attachment_inline_image", "fallback_path_ref");else if (imageBlocks.length > 0) _("bridge_attachment_inline_image");
  let S = [...b, ...g];
  return {
    prefix: S.length > 0 ? S.join(" ") + " " : "",
    imageBlocks: imageBlocks,
    inlinedImagePaths: inlinedImagePaths
  };
}
function pe(e, i) {
  if (!i) return e;
  if (typeof e === "string") return Rxn(e, i);
  let r = e.findLastIndex(o => o.type === "text");
  if (r !== -1) {
    let o = e[r];
    if (o.type === "text") return [...e.slice(0, r), {
      ...o,
      text: Rxn(o.text, i)
    }, ...e.slice(r + 1)];
  }
  return [...e, {
    type: "text",
    text: i.trimEnd()
  }];
}
function _e(text, i) {
  if (i.length === 0) return text;
  let r = typeof text === "string" ? text.trim() === "" ? [] : [{
    type: "text",
    text: text
  }] : opr(text);
  return [...i, ...r];
}
function be(e) {
  let i = e ?? "";
  if (!(typeof i === "string" ? i.trim() === "" : i.length === 0)) return i;
  let text_2 = "[attachment could not be downloaded]";
  return typeof i === "string" ? text_2 : [{
    type: "text",
    text: text_2
  }];
}
async function f5t(e, i, r, o, a) {
  let content = i ?? "",
    f = T7(e);
  if (f.length === 0) return {
    content: content,
    inlinedImagePaths: []
  };
  let h = r && !(typeof content === "string" && Bee(content)),
    {
      prefix: prefix,
      imageBlocks: imageBlocks_2,
      inlinedImagePaths: inlinedImagePaths_2
    } = await Xjo(f, r, h, o, a);
  if (imageBlocks_2.length === 0 && !prefix) {
    let content_2 = be(content);
    if (content_2 !== content) return {
      content: content_2,
      inlinedImagePaths: []
    };
  }
  return {
    content: _e(pe(content, prefix), imageBlocks_2),
    inlinedImagePaths: inlinedImagePaths_2
  };
}
function X(file_count, resolved_count, r, o) {
  return {
    file_count: file_count,
    resolved_count: resolved_count,
    reused_file_count: r.reusedFileCount,
    prefetched_file_count: r.prefetchedFileCount,
    joined_in_flight_count: r.joinedInFlightCount,
    approx_downloaded_bytes: Number(r.downloadedBytes.toPrecision(2)),
    duration_ms: Math.round(performance.now() - o),
    slowest_time_to_headers_ms: Math.round(r.slowestTimeToHeadersMs),
    slowest_download_ms: Math.round(r.slowestDownloadMs),
    slowest_join_wait_ms: Math.round(r.slowestJoinWaitMs)
  };
}
function L(e) {
  return e === void 0 && hjt() === null ? A2r() : void 0;
}
function G(e, i) {
  let r = L(i)?.get(R(e));
  return r !== void 0 && oe(r.path) === G3() ? r : void 0;
}
function R(e) {
  return en(e) === null ? e : e.toLowerCase();
}
function Q() {
  return x("tengu_dapper_brooks", !1);
}
function Fur(e, {
  issuedAt: issuedAt,
  credentials: credentials
}) {
  if (!Q() || It()) return 0;
  let o = iyn(),
    a = {
      file_count: e.length,
      started_count: 0,
      already_present_count: 0,
      held_limit_count: 0,
      start_budget_count: 0,
      skipped_count: 0
    },
    s = Date.now() - issuedAt,
    f = s > ce,
    h = f ? [] : e.slice(0, QL);
  a.skipped_count = e.length - h.length;
  for (let g of h) {
    let u = R(g.file_uuid);
    if (en(g.file_uuid) === null || g.file_size !== void 0 && g.file_size > qV) {
      a.skipped_count++;
      continue;
    }
    if (o.byFileUuid.has(u) || G(g.file_uuid, void 0) !== void 0) {
      a.already_present_count++;
      continue;
    }
    let E = we(g.file_size),
      I = ye(o, E);
    if (I === "held_limit") a.held_limit_count++;else if (I === "start_budget") a.start_budget_count++;else ke(o, u, g.file_uuid, E, credentials), a.started_count++;
  }
  let n = W(o),
    l = {
      ...a,
      age_ms: Math.round(s),
      held_file_count: n.count,
      approx_held_bytes: Number(n.bytes.toPrecision(2))
    };
  if (f) p("bridge_attachment_prefetch", "stale", l);else if (a.held_limit_count > 0) p("bridge_attachment_prefetch", "held_limit", l);else if (a.start_budget_count > 0) p("bridge_attachment_prefetch", "start_budget", l);else _("bridge_attachment_prefetch", l);
  return a.started_count;
}
function we(e) {
  return e !== void 0 && e > 0 ? e : 0;
}
function ye(e, i) {
  let r = performance.now(),
    recentPrefetchStarts = e.recentPrefetchStarts;
  while (recentPrefetchStarts.length > 0 && r - recentPrefetchStarts[0] >= me) recentPrefetchStarts.shift();
  let a = W(e);
  if (a.count >= le || a.bytes + i > J) return "held_limit";
  return recentPrefetchStarts.length < fe ? "ok" : "start_budget";
}
function W(e) {
  let count = 0,
    bytes = 0;
  for (let o of e.byFileUuid.values()) if (o.startedBy === "prefetch" && !o.taken) count++, bytes += o.settledAt === void 0 ? Math.max(o.receivedBytes, o.statedBytes) : o.receivedBytes;
  return {
    count: count,
    bytes: bytes
  };
}
function ke(e, i, fileUuid, o, a) {
  let s = new AbortController(),
    f = !1,
    h = V({
      fileUuid: fileUuid,
      baseUrl: void 0,
      forPrefetch: !0,
      token: async () => {
        let l = await Ak(a);
        if (l) n.bearer = Kt(l);
        return l;
      },
      abort: s,
      totals: void 0,
      admitBytes: l => {
        if (n.receivedBytes = l, n.taken || W(e).bytes <= J) return !0;
        return n.receivedBytes = 0, n.statedBytes = 0, !1;
      }
    }),
    n = Z("prefetch", s, h, void 0);
  n.statedBytes = o, n.expiry = setTimeout(() => {
    if (e.byFileUuid.get(i) !== n || n.taken) return;
    f = !0, e.byFileUuid.delete(i), s.abort(), p("bridge_attachment_prefetch_download", "expired_unused", {
      download_finished: n.settledAt !== void 0,
      approx_bytes: Number(n.receivedBytes.toPrecision(2))
    });
  }, ue), n.expiry.unref(), e.recentPrefetchStarts.push(n.startedAt), e.byFileUuid.set(i, n), h.then(l => {
    if (!("failure" in l)) return;
    if (e.byFileUuid.get(i) === n && !n.taken) e.byFileUuid.delete(i), clearTimeout(n.expiry);
    if (f) return;
    let g = {
      duration_ms: Math.round(performance.now() - n.startedAt),
      ...(l.httpStatus !== void 0 && {
        http_status: l.httpStatus
      })
    };
    if (n.taken && q(n)) m("bridge_attachment_prefetch_download", l.failure, g);else p("bridge_attachment_prefetch_download", l.failure, g);
  }).catch(d);
}
function Z(startedBy, abort, r, bearer) {
  let a = {
    startedBy: startedBy,
    bytes: r.then(s => {
      if (a.settledAt = performance.now(), "failure" in s) return a.failure = s.failure, null;
      return s.data;
    }),
    startedAt: performance.now(),
    settledAt: void 0,
    failure: void 0,
    receivedBytes: 0,
    statedBytes: 0,
    abort: abort,
    taken: startedBy === "message",
    expiry: void 0,
    bearer: bearer
  };
  return a;
}
function q(e) {
  return e.receivedBytes > 0 || e.failure === "too_large" || e.failure === "stalled" && e.startedBy !== "prefetch";
}
function Be(e) {
  if (e.taken) return !1;
  return e.taken = !0, clearTimeout(e.expiry), !0;
}
function Ie(e, i, {
  inFlight: r,
  passes: passes_2,
  sameBearer: sameBearer_2,
  waitedMs: waitedMs_2
}) {
  let f = {
    in_flight: r,
    waited_ms: Math.round(waitedMs_2),
    download_ms: Math.round((e.settledAt ?? performance.now()) - e.startedAt),
    approx_bytes: Number(i.length.toPrecision(2))
  };
  if (passes_2) _("bridge_attachment_prefetch_download", f);else p("bridge_attachment_prefetch_download", sameBearer_2 ? "attestation_mismatch" : "bearer_changed", f);
}
async function V({
  fileUuid: fileUuid_2,
  baseUrl: baseUrl,
  forPrefetch: forPrefetch,
  token: token,
  abort: abort_2,
  totals: totals_2,
  admitBytes: admitBytes
}) {
  let h = forPrefetch ? "of a prefetched file" : fileUuid_2,
    n = !1,
    l = setTimeout(() => {
      n = !0, abort_2.abort();
    }, ae),
    g = performance.now();
  try {
    let u = await Promise.race([token(), Fe(abort_2.signal)]);
    if (abort_2.signal.aborted) return {
      failure: n ? "stalled" : "stopped"
    };
    if (!u) return {
      failure: "no_token"
    };
    let url = `${baseUrl ?? dI()}/api/oauth/files/${encodeURIComponent(fileUuid_2)}/content`,
      I = await fetch(url, {
        headers: {
          Authorization: `Bearer ${u}`,
          "User-Agent": $a()
        },
        signal: abort_2.signal,
        ...yi({
          url: url
        })
      });
    if (l.refresh(), totals_2 !== void 0) totals_2.slowestTimeToHeadersMs = Math.max(totals_2.slowestTimeToHeadersMs, performance.now() - g);
    if (I.status !== 200) return A(`fetch ${h} failed: status=${I.status}`), await PU(I), n ? {
      failure: "stalled"
    } : {
      failure: "http_status",
      httpStatus: I.status
    };
    let U = I.body?.getReader(),
      D = [],
      b = 0;
    while (U !== void 0) {
      let {
        done: done,
        value: value
      } = await U.read();
      if (done) break;
      if (l.refresh(), b += value.byteLength, b > qV) return A(`fetch ${h} over size cap (${b} bytes so far)`), abort_2.abort(), {
        failure: "too_large"
      };
      if (!admitBytes(b)) return A(`fetch ${h} stopped: unused prefetched files would exceed 64 MiB in memory`), abort_2.abort(), {
        failure: "held_limit"
      };
      D.push(value);
    }
    if (totals_2 !== void 0) totals_2.downloadedBytes += b;
    return {
      data: Buffer.concat(D, b)
    };
  } catch (error) {
    return A(`fetch ${h} threw: ${forPrefetch ? error instanceof Error ? error.name : "a non-Error" : error}`), {
      failure: n ? "stalled" : abort_2.signal.aborted ? "stopped" : "error"
    };
  } finally {
    if (clearTimeout(l), totals_2 !== void 0) totals_2.slowestDownloadMs = Math.max(totals_2.slowestDownloadMs, performance.now() - g);
  }
}
function Fe(e) {
  return new Promise(i => {
    if (e.aborted) {
      i(void 0);
      return;
    }
    e.addEventListener("abort", () => i(void 0), {
      once: !0
    });
  });
}
export { Xjo, f5t, Fur };