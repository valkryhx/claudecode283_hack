// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  kSt,
  Q4,
  aae,
  Ow
} from "B:/~BUN/root/chunk-1g25msn4.js";
import {
  St,
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  BTe
} from "B:/~BUN/root/chunk-6g8w5kyh.js";
import {
  b,
  f
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  k,
  tr,
  db
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  Nt
} from "B:/~BUN/root/chunk-q78ga0zw.js";
import {
  z,
  BWs,
  Yjt,
  LN,
  Hae,
  q,
  er
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  J,
  P0
} from "B:/~BUN/root/chunk-r5zmhp23.js";
import {
  g,
  m,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  at,
  fC,
  k$t,
  Kl,
  Kbe,
  e1n,
  psn,
  uVe,
  fVe,
  pn,
  v
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  V
} from "B:/~BUN/root/chunk-f9dwrymq.js";
import {
  wM
} from "B:/~BUN/root/chunk-d10hhz4p.js";
import {
  AC,
  Is,
  qO,
  zn
} from "B:/~BUN/root/chunk-nsneqfcc.js";
import {
  Hr,
  Ve
} from "B:/~BUN/root/chunk-myfamxtp.js";
import {
  IO
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  tn
} from "B:/~BUN/root/chunk-1fg2bpc3.js";
import {
  Fn,
  us
} from "B:/~BUN/root/chunk-8f4z6bdn.js";
import {
  ba
} from "B:/~BUN/root/chunk-wthaftk0.js";
import {
  U2
} from "B:/~BUN/root/chunk-7pj7keyk.js";
import {
  yLt,
  hg,
  fue,
  Nx,
  Rvr,
  BBi
} from "B:/~BUN/root/chunk-2htsebsg.js";
import {
  Tvr,
  NLn,
  Cvr,
  USs,
  IBi
} from "B:/~BUN/root/chunk-7vfy9z2g.js";
import {
  T_e,
  LLn,
  uue
} from "B:/~BUN/root/chunk-wy3ha3b9.js";
import {
  R8,
  gci,
  dIe
} from "B:/~BUN/root/chunk-k6fyzzmm.js";
import {
  FHn
} from "B:/~BUN/root/chunk-7pxn9dsp.js";
import {
  _at,
  Tnr,
  Cnr,
  Rnr,
  d5r,
  Ble,
  c5r
} from "B:/~BUN/root/chunk-2n5m7hvm.js";
import {
  bA,
  _mt,
  JW,
  pD,
  E1
} from "B:/~BUN/root/chunk-q2s07yzr.js";
import {
  JP,
  J0n
} from "B:/~BUN/root/chunk-j6ahtce9.js";
import {
  sbs
} from "B:/~BUN/root/chunk-076mmgjt.js";
import {
  DSs,
  lGe
} from "B:/~BUN/root/chunk-ekfahkar.js";
import {
  vnr
} from "B:/~BUN/root/chunk-9bk05bzx.js";
import {
  n6
} from "B:/~BUN/root/chunk-qc6qygzs.js";
import {
  kze
} from "B:/~BUN/root/chunk-zz0hj0zg.js";
import {
  $Li
} from "B:/~BUN/root/chunk-md18120p.js";
import {
  Av,
  HLn,
  Vpo,
  NBi
} from "B:/~BUN/root/chunk-zx0hhrva.js";
import {
  Ja
} from "B:/~BUN/root/chunk-v91d7hbv.js";
import {
  c_t,
  HVe
} from "B:/~BUN/root/chunk-xwzn0yxv.js";
import {
  nt
} from "B:/~BUN/root/chunk-tq5dzbq9.js";
import {
  Qm,
  Ht
} from "B:/~BUN/root/chunk-cbjnh04j.js";
import {
  ui
} from "B:/~BUN/root/chunk-xwsv2hvn.js";
import {
  X
} from "B:/~BUN/root/chunk-g9pw24zp.js";
import {
  U
} from "B:/~BUN/root/chunk-5ha2avah.js";
import {
  randomUUID as ht
} from "crypto";
import {
  link as tt,
  lstat as _t,
  lutimes as dn,
  readdir as ln,
  realpath as un,
  rm as fn,
  rmdir as $t,
  unlink as mt,
  utimes as cn
} from "fs/promises";
import {
  basename as Xe,
  dirname as We,
  join as me
} from "path";
import {
  extname as wt
} from "path";

function hci(n) {
  return wt(n).toLowerCase().slice(1) !== "" && !HVe(n) && !kze(n) && !wM(n)
}

function A3o(n) {
  return HLn("", _at(n.file_name))
}

function c4t(n) {
  let i = 0,
    o = 0,
    e = 0,
    r = 0,
    s = 0,
    l = 0;
  for (let u of n) {
    if (u.is_image === !0) continue;
    let _ = A3o(u),
      h = u.sha256 === void 0;
    if (c_t.has(wt(_).toLowerCase().slice(1))) i++;
    else if (HVe(_)) {
      if (o++, h) l++
    } else if (kze(_)) {
      if (e++, h) s++, l++
    } else r++
  }
  let d = n.length > 0;
  return {
    binary_ext_file_count: e,
    pdf_file_count: o,
    text_like_file_count: r,
    image_ext_file_count: i,
    all_files_binary_ext_no_sha256: d && s === n.length ? 1 : 0,
    all_files_binary_ext_or_pdf_no_sha256: d && l === n.length ? 1 : 0
  }
}
import {
  symlink as on
} from "fs/promises";
import {
  join as rn,
  sep as an
} from "path";
var sn = /^[\p{L}\p{N}_-]+(?:\.[\p{L}\p{N}_-]*)?$/u;
async function bt(n) {
  if (n.length === 0) return;
  let i = Hae();
  if (i === null) return;
  let o = await R8(FHn(), 1).catch(() => "unknown");
  if (typeof o === "string") {
    c("bridge_attachment_project_folder_link", o);
    return
  }
  let e;
  for (let {
      name: r,
      path: s
    }
    of n) {
    if (!sn.test(r) || !s.startsWith(i + an)) {
      e ??= "refused";
      continue
    }
    let l = await on(s, rn(o.at, r)).then(() => {
      return
    }, (d) => k(d) === "EEXIST" ? void 0 : tr(d) ?? "unknown");
    e ??= l
  }
  if (await o.release().catch(() => {}), e === void 0) g("bridge_attachment_project_folder_link");
  else c("bridge_attachment_project_folder_link", e)
}

function yt(n) {
  return n !== void 0 && "fetchUpload" in n
}
var Ut = 30000,
  x3o = 36700160,
  P3o = {
    startsTurn: 3,
    noTurn: 2
  },
  it = 1e4,
  Ke = 250,
  mn = 1000,
  zt = 25000,
  Ct = 16,
  hn = 20,
  _n = 64,
  gn = 16;

function jt() {
  return (er() ? 16 : 64) * 1024 * 1024
}
var Xt = 300000,
  wn = 60000,
  At = {
    min: 15000,
    max: Xt
  },
  bn = 3,
  yn = "x-served-file-page-count",
  Cn = "x-anthropic-attachment-prefetch",
  Mt = {
    name: "x-anthropic-attachment-prefetch-seen",
    value: "1"
  },
  An = 409,
  Mn = 64,
  kn = 300000,
  Sn = 32,
  In = 60000,
  vn = {
    no_token: "failed_no_token_count",
    http_status: "failed_http_status_count",
    too_large: "failed_too_large_count",
    held_limit: "failed_held_limit_count",
    stalled: "failed_stalled_count",
    stopped: "failed_stopped_count",
    error: "failed_error_count"
  },
  Tn = {
    override: !0,
    payload: !0,
    disk: !0,
    disabled: !1,
    fallback: !1
  },
  En = {
    no_token: 1,
    http_status: 2,
    too_large: 3,
    held_limit: 4,
    stalled: 5,
    stopped: 6,
    error: 7
  },
  Bn = 8,
  Pn = 9,
  Yt = 3000,
  Rn = 1568,
  kt = {
    png: 150,
    other: 50
  },
  Dn = {
    copy_late: 1,
    copy_not_stored: 2,
    copy_failed: 3,
    copy_too_small: 4,
    copy_unusable: 5,
    copy_is_original: 6,
    copy_cut_short: 8
  };

function B(n) {
  t(`[bridge:inbound-attach] ${n}`)
}
async function Ie(n, i, o = !1) {
  try {
    let e = await _t(n);
    if (e.isDirectory()) return "directory";
    if (!e.isFile()) return "other";
    if (!Buffer.isBuffer(i)) {
      if (e.size !== i.size) return "changed";
      if (!o) return "same"
    } else if (e.size !== i.length) return "changed"
  } catch (e) {
    let r = k(e);
    if (r === "ENOENT" || r === "ENOTDIR") return "absent";
    return B(`could not look at ${n}: ${e}`), "unknown"
  }
  if (!Buffer.isBuffer(i)) return await lGe(n, i.size) === i.sha256 ? "same" : "changed";
  return (await Ble(n, i.length))?.equals(i) ? "same" : "changed"
}
var Ft = 3,
  It = 64;
async function lt(n, i, o, e, r, s) {
  let l = me(i, o),
    d, u = 0,
    _ = "; an entry moved from this path earlier is in a .kept- folder beside it";
  try {
    for (let h = 1;; h++) {
      let p;
      try {
        p = await n()
      } catch (F) {
        throw await Ze(d, i, o, r, s), F
      }
      if (p === "published") return p;
      if (p === "failed") return await Ze(d, i, o, r, s), p;
      let A = p === "taken" ? await Ie(l, e, !0) : p;
      if (A === "same") {
        let F = new Date;
        return await dn(l, F, F).catch((S) => B(`could not update the modification time of ${o}: ${S}`)), await cn(i, F, F).catch((S) => B(`could not update the modification time of the uploads folder: ${S}`)), "same"
      }
      if (A === "directory") return {
        code: b("EISDIR"),
        why: `not saved: a folder is at this path, and it was left there${u===0?"":_}`
      };
      if (A === "unknown") return u -= await Ze(d, i, o, r, s) ? 1 : 0, {
        code: b("look_failed"),
        why: `not saved: what is at this path could not be looked at, so it was left there${u===0?"":_}`
      };
      if (h === Ft) return u -= await Ze(d, i, o, r, s) ? 1 : 0, {
        code: b("EEXIST"),
        why: `not saved: the path was taken on each of ${Ft} tries; anything there now was left there${u===0?"":_}`
      };
      if (A === "absent") continue;
      let D = `.kept-${new Date().toISOString().replace(/[-:.]/g,"")}-${ht().slice(0,8)}`,
        O;
      try {
        let F = await ln(i);
        if (U(F, (S) => S.startsWith(".kept-")) >= It) return r.moveAsideFailedCount++, {
          code: b("kept_cap"),
          why: `not saved: the uploads folder holds at least ${It} folders of kept copies (named .kept-...), so what was at this path was left there; removing old ones makes room${u===0?"":_}`,
          leavesADifferentFile: !0
        };
        O = await gci(i, D), await Is(l, me(O.at, o)), await d?.held.release().catch(() => {}), d = {
          held: O,
          name: D
        }, O = void 0, u++, s.push(D), r.movedAsideFileCount++
      } catch (F) {
        await O?.release().catch(() => {}), await $t(me(i, D)).catch(() => {});
        let S = k(F) === "ENOENT" ? await Ie(l, e, !0) : void 0;
        if (S !== "absent" && S !== "same") return r.moveAsideFailedCount++, {
          code: tr(F) ?? b("unknown"),
          why: `not saved: what was at this path could not be moved into a folder of kept copies (${F}), and was left there${u===0?"":_}`,
          ...(S === void 0 || S === "changed" || S === "other") && {
            leavesADifferentFile: !0
          }
        }
      }
    }
  } finally {
    await d?.held.release().catch(() => {})
  }
}
async function Ze(n, i, o, e, r) {
  if (n === void 0) return !1;
  let s = me(i, o),
    l = me(n.held.at, o);
  try {
    let u = !1;
    try {
      await tt(l, s), u = !0
    } catch (_) {
      if (k(_) === "EEXIST") throw _
    }
    if (u) await mt(l).catch((_) => B(`${o} is back at its path, but a second name for it stays in its .kept- folder: ${_}`));
    else {
      if (!await _t(s).then(() => !1, (h) => k(h) === "ENOENT")) throw Error("the path is taken again, or could not be checked");
      await Is(l, s)
    }
  } catch (u) {
    return B(`could not move ${o} back out of its .kept- folder, where it stays: ${u}`), !1
  }
  e.movedAsideFileCount--;
  let d = r.indexOf(n.name);
  if (d !== -1) r.splice(d, 1);
  return await $t(me(i, n.name)).catch(() => {}), !0
}
async function vt(n, i, o, e, r, s) {
  if (!s.renamesAfterALook) try {
    return await tt(n, i), r.linkedFileCount++, "published"
  } catch (d) {
    if (k(d) === "EEXIST") return "taken";
    B(`link(2) failed for ${o} (${d}); looking at the name, to rename into it only if it is free`), s.renamesAfterALook = !0
  }
  let l = await Ie(i, e, !0);
  if (l !== "absent") return l;
  return await Is(n, i), r.renamedAfterLinkRefusedCount++, "published"
}
async function Tt(n, i, o) {
  let e = performance.now(),
    r = await Ie(n, i, !0);
  if (o.slowestWouldMoveLookMs = Math.max(o.slowestWouldMoveLookMs, performance.now() - e), r === "changed" || r === "other") o.wouldMoveAsideFileCount++;
  else if (r === "same") o.wouldLeaveSameFileCount++
}

function qt() {
  return tn() && LN() === null && !q()
}
var On = /^[0-9a-f]{8}-[0-9a-f]{4}-7[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;

function ze(n, i, o) {
  n.idsBySavedName.set(i, [...n.idsBySavedName.get(i) ?? [], o.file_uuid.toLowerCase()])
}

function ut(n, i) {
  return HLn(i ? Vpo(n.file_uuid) : (n.file_uuid.slice(0, 8) || ht().slice(0, 8)).replace(/[^a-zA-Z0-9_-]/g, "_"), _at(n.file_name))
}

function Jt(n) {
  let i = n.httpStatus ?? 0;
  return n.failure === "stalled" || n.failure === "error" && n.final !== !0 || n.failure === "http_status" && (i >= 500 || i === 408 || i === 429)
}

function Et(n) {
  return n > Ow.targetRawSize || n > Q4 && v("tengu_lucky_widget", !1) === !0
}

function Bt(n, i, o, e, r) {
  return ot({
    fileUuid: n,
    baseUrl: i,
    modelCopy: !0,
    forPrefetch: !1,
    maxBytes: Ow.targetRawSize,
    spillTo: void 0,
    token: () => o,
    abort: e,
    quietLimitMs: Yt,
    totals: r,
    admitBytes: () => !0
  })
}
async function xn(n, i, o, e, r, s, l, d, u, _, h = !1, p, A = !1, D = "off", O) {
  let F = uVe(et().recoveries);
  if (_mt()) await U2();
  let S = u?.accessToken ?? (X() && d !== void 0 ? await pD(d) : JW());
  if (!S) return B("skip: no oauth token"), ce(e, "no_token", 0);
  let H = S,
    L = o && n.is_image === !0 && n.sha256 === void 0,
    M, N = new AbortController;
  using P = {
    [Symbol.dispose]: () => N.abort()
  };
  let K = [],
    w, x, ee, re, ke = !1,
    Ae = 0,
    Ye = r,
    $e = L ? O?.start : void 0,
    pe;
  try {
    let R = n.sha256 === void 0 ? x3o : T_e,
      I = n.sha256 === void 0 && qt() ? me(_ ?? Av(), ut(n, A)) : void 0,
      T = n.sha256 === void 0 && yt(l) ? l : void 0;
    if (typeof n.file_size === "number" && n.file_size > (I === void 0 && T === void 0 ? R : LLn)) return ce(e, "too_large", 0);
    if (L && !Tvr() && typeof n.file_size === "number" && Et(n.file_size) && Fn() && !St()) M = Bt(n.file_uuid, u?.baseUrl, S, N, e);
    let j = pt(u),
      E = pRt(n.file_uuid, u);
    if (j !== void 0 && E !== void 0 && E.bearer === nt(S) && (E.size <= R || E.path === I) && (n.sha256 === void 0 || n.sha256 === E.sha256)) {
      let ae = E.size > R;
      if (ae && await lGe(E.path, E.size) === E.sha256) return ze(e, Xe(E.path), n), e.reusedFileCount++, {
        path: E.path,
        sha256: E.sha256,
        size: E.size
      };
      let Me = ae ? null : await Ble(E.path, E.size);
      if (Me !== null && nt(Me) === E.sha256) w = Me, ee = E.sha256, re = E.path, e.reusedFileCount++;
      else if (j.get(Ce(n.file_uuid)) === E) j.delete(Ce(n.file_uuid))
    }
    if (h && I !== void 0) {
      let ae = await _t(I).catch(() => {
        return
      });
      if (ae?.isFile() && ae.size > R) return ze(e, Xe(I), n), e.reusedFileCount++, {
        path: I
      }
    }
    let ie = Yjt(),
      oe = Ce(n.file_uuid);
    ie.refusedEarly?.delete(oe);
    let G = w === void 0 && u === void 0 && p === void 0 ? ie.byFileUuid.get(oe) : void 0;
    while (G !== void 0) {
      let ae = performance.now(),
        Me = qn(G, ae, nt(S)),
        _e = G.settledAt === void 0,
        Ne = G.startedBy === "prefetch";
      if (_e) pe ??= $e?.(() => H);
      let be = await G.bytes,
        xe = performance.now() - ae;
      if (Ae += xe, Ne && _e) {
        if (e.joinedInFlightCount++, e.slowestJoinWaitMs = Math.max(e.slowestJoinWaitMs, xe), G.headersTimedOut) Ye = Math.max(1, r - 1)
      }
      let se = G.bearer === nt(S),
        C = be !== null && se && be.length <= R && (typeof n.sha256 !== "string" || Rnr(be, {
          sha256: n.sha256,
          file_size: n.file_size
        }));
      if (C) {
        if (u === void 0) fVe(et(), F);
        w = be, x = G.servedPageCount, ke = !0
      } else if (be === null && _e && se && en(G, ae) && !(G.failure === "too_large" && T !== void 0)) return "writeFailed" in G ? xt(e, G.writeFailed) : ce(e, G.failure ?? "error", G.receivedBytes);
      if (Ne && be !== null) {
        if (C) e.prefetchedFileCount++;
        if (Me) Jn(G, be, {
          inFlight: _e,
          passes: C,
          sameBearer: se,
          waitedMs: xe
        })
      }
      let te = w === void 0 ? ie.byFileUuid.get(oe) : void 0;
      G = te !== G && te?.startedBy === "message" && te.bearer === nt(S) ? te : void 0
    }
    if (w === void 0) {
      pe ??= $e?.(() => H);
      let ae = new AbortController,
        Me = () => ae.abort();
      if (p?.addEventListener("abort", Me, {
          once: !0
        }), p?.aborted) Me();
      let _e, Ne = 0,
        be = {
          fileUuid: n.file_uuid,
          baseUrl: u?.baseUrl,
          modelCopy: !1,
          forPrefetch: !1,
          maxBytes: T !== void 0 && typeof n.file_size === "number" && n.file_size > R ? 0 : R,
          spillTo: I === void 0 ? void 0 : async () => DSs(await dIe(We(I)), I),
          token: () => H,
          admitBytes: (C) => {
            if (Ne = C, _e !== void 0) _e.receivedBytes = C;
            return !0
          }
        },
        xe = M3o(Ye, Ae, ae, e, be).then(async (C) => {
          if (u !== void 0 || !("failure" in C) || C.httpStatus !== 401 || bA() !== void 0) return C;
          let te = await Gn(H, d, l, ae.signal, s, e);
          if (te === void 0) return C;
          if (H = te.bearer, F = te.stamp, _e !== void 0) _e.bearer = nt(te.bearer);
          e.retriedAfter401Count++;
          let ye = await M3o(1, 0, ae, e, be);
          if (!("failure" in ye) && !("writeFailed" in ye)) e.recoveredFileCount++;
          return ye
        }).catch((C) => (a(C), {
          failure: "error"
        }));
      if (u === void 0 && p === void 0 && Vt().value) _e = Qt("message", ae, xe, nt(S)), ie.byFileUuid.set(oe, _e);
      let se = await xe;
      if (p?.removeEventListener("abort", Me), "failure" in se && se.failure === "too_large" && T !== void 0 && !p?.aborted) {
        let C = ut(n, A),
          te = await T.fetchUpload(C, n.file_uuid);
        if (te.ok) return ze(e, C, n), e.overMemoryLimitFileCount++, {
          path: me(_ ?? Av(), C)
        };
        if (!te.tooLarge) return B(`the machine with the uploads folder could not download ${n.file_uuid}: ${te.error}`), e.failedWriteCount++, e.lastFailedWrite = {
          code: b("unknown"),
          step: b("fetched_by_container")
        }, {
          failure: "write"
        }
      }
      if ("failure" in se) return ce(e, se.failure, Ne, se.httpStatus);
      if (u === void 0) fVe(et(), F), k$t();
      if ("writeFailed" in se) return xt(e, se.writeFailed);
      if ("file" in se) {
        let {
          file: C
        } = se, te = b("link"), ye = "off", Ue;
        try {
          if (p?.aborted) return ce(e, "stopped", 0);
          if (ze(e, Xe(C.placeAt), n), ye === "count") {
            if (await Tt(C.placeAt, C, e), p?.aborted) return ce(e, "stopped", 0)
          }
          let Te = !h && !je(ye);
          if (je(ye)) {
            te = b("write");
            let He = !1,
              Ge = {
                renamesAfterALook: !1
              },
              Ee = Xe(C.placeAt),
              dt = await lt(async () => {
                if (p?.aborted) return He = !0, "failed";
                return vt(C.path, C.placeAt, Ee, C, e, Ge)
              }, We(C.placeAt), Ee, C, e, K);
            if (He) return ce(e, "stopped", 0);
            if (dt === "same") e.unchangedOnDiskCount++;
            else if (typeof dt === "object") Ue = dt
          } else if (h) try {
            await tt(C.path, C.placeAt), e.linkedFileCount++
          } catch (He) {
            let Ge = k(He) === "EEXIST",
              Ee = await Ie(C.placeAt, C);
            if (Ee === "same") e.unchangedOnDiskCount++;
            else if (Ee === "changed" || Ee === "unknown" && Ge) e.keptChangedFileCount++;
            else if (Ee === "absent" && !Ge) Te = !0;
            else throw He
          }
          if (Te) {
            if (te = b("rename"), await Is(C.path, C.placeAt), h) e.renamedAfterLinkRefusedCount++
          }
        } catch (Te) {
          return B(`write ${C.target} failed: ${Te}`), e.failedWriteCount++, e.lastFailedWrite = {
            code: tr(Te) ?? b("unknown"),
            step: te
          }, {
            failure: "write",
            ...Le(ye, K, C.target, !1)
          }
        } finally {
          await fn(C.path, {
            force: !0
          }).catch((Te) => {
            B(`the staged name of ${C.target} could not be removed (${C.path}): ${Te}`), e.stagedNameLeftCount++
          }), await C.release()
        }
        if (Ue !== void 0) return B(`write ${C.target} failed: ${Ue.why}`), e.failedWriteCount++, e.lastFailedWrite = {
          code: Ue.code,
          step: b("move_aside")
        }, {
          failure: "write",
          ...Le(ye, K, C.target, !1, Ue)
        };
        return e.overMemoryLimitFileCount++, Pt(n, {
          path: C.target,
          size: C.size,
          sha256: C.sha256,
          bearer: nt(H)
        }, u), {
          path: C.target,
          sha256: C.sha256,
          size: C.size,
          ...Le(ye, K, C.target, !0)
        }
      }
      w = se.data, x = se.servedPageCount
    }
  } catch (R) {
    return B(`fetch ${n.file_uuid} threw: ${R}`), ce(e, "error", 0)
  }
  if (typeof n.sha256 === "string" && !ke && !Rnr(w, {
      sha256: n.sha256,
      file_size: n.file_size
    })) return B(`fetch ${n.file_uuid} failed integrity verification`), {
    failure: "digest_mismatch"
  };
  let ge = {
      resizeMs: 0,
      pngPaletteMs: 0,
      byteBudgetMs: 0
    },
    qe = w.length > Ow.targetRawSize,
    Be = L && !Tvr() && hg(w) !== null && (Rvr(w, kSt) || Et(w.length)) && Fn() && !St(),
    Pe;
  if (Be) {
    let R = H === S ? await M : void 0;
    if (R === void 0 || "failure" in R && Jt(R)) R = await Bt(n.file_uuid, u?.baseUrl, H, new AbortController, e);
    if ("data" in R) {
      let I = Nx(w),
        T = Nx(R.data),
        j = I !== void 0 && T !== void 0 && Math.max(T.width, T.height) <= Rn && (Math.max(T.width, T.height) < Math.max(I.width, I.height) || Math.min(T.width, T.height) < Math.min(I.width, I.height));
      if (qe || !Rvr(R.data, kSt) && (Rvr(w, kSt) || R.data.length < w.length && !j)) Pe = R.data
    }
  }
  let Fe;
  if (pe !== void 0 && O !== void 0) {
    if (hg(w) === null || !Rvr(w, Ow.maxWidth)) e.modelCopyBesideUnneededCount++;
    else {
      let R = performance.now(),
        I = new AbortController,
        T = await Promise.race([pe.outcome, J(hg(w) === "image/png" ? kt.png : kt.other, I.signal).then(() => {
          return
        })]);
      I.abort(), e.slowestModelCopyBesideWaitMs = Math.max(e.slowestModelCopyBesideWaitMs, performance.now() - R);
      let j;
      if (T === void 0) j = "copy_late";
      else if ("data" in T) {
        let ie = IBi(T.data, w, O.limits, T.statedLength);
        if (typeof ie === "string") j = ie;
        else {
          Fe = ie, e.modelCopyBesidePassedCount++;
          let oe = Nx(T.data),
            G = Nx(w);
          if (oe !== void 0 && G !== void 0) e.modelCopyBesideExtraImageTokens += aae(oe.width, oe.height) - aae(...NLn(G.width, G.height, {
            ...Ow,
            maxImageTokens: O.limits.maxImageTokens
          }))
        }
      } else j = "failure" in T && T.httpStatus === 409 ? "copy_not_stored" : "copy_failed";
      if (j !== void 0) e.modelCopyBesideMissedCount++, e.lastModelCopyBesideMiss = j;
      let {
        timing: E
      } = pe;
      if (e.slowestModelCopyBesideTimeToHeadersMs = Math.max(e.slowestModelCopyBesideTimeToHeadersMs, E.slowestTimeToHeadersMs), T !== void 0) e.slowestModelCopyBesideDownloadMs = Math.max(e.slowestModelCopyBesideDownloadMs, E.slowestDownloadMs), e.modelCopyBesideBytes += E.downloadedBytes
    }
    pe.end()
  }
  let Je = performance.now(),
    Re = (R) => Cvr(R, Ow, {
      timings: ge
    }).catch((I) => (B(`inline ${n.file_uuid} threw: ${I}`), null)),
    we = Pe ? await Re(Pe) : null,
    le = Fe ?? we ?? (L ? await Re(w) : null);
  if (e.slowestInlineImageBuildMs = Math.max(e.slowestInlineImageBuildMs, performance.now() - Je), e.slowestInlineImageResizeMs = Math.max(e.slowestInlineImageResizeMs, ge.resizeMs), e.slowestInlineImagePngPaletteMs = Math.max(e.slowestInlineImagePngPaletteMs, ge.pngPaletteMs), e.slowestInlineImageByteBudgetMs = Math.max(e.slowestInlineImageByteBudgetMs, ge.byteBudgetMs), we) e.modelCopyCount++;
  else if (Be) {
    if (e.modelCopyMissedCount++, le) e.modelCopyMissedSentAsIsCount++
  }
  if (le && Fe === void 0 && fue(w) === "image/png") {
    if (e.inlinedPngSourceCount++, BBi(w)) e.inlinedPngSourceMaybeTransparentCount++;
    if (le.source.type === "base64" && le.source.media_type === "image/jpeg") e.inlinedPngSourceSentAsJpegCount++
  }
  let Q = le ? HLn(A ? Vpo(n.file_uuid) : ht().slice(0, 8), `image.${yLt[fue(w)]}`) : ut(n, A);
  ze(e, Q, n);
  let De = _ ?? Av(),
    Z = me(De, Q),
    ve = z(),
    Oe = LN() === null && !q(),
    he = h && n.sha256 === void 0 && Oe,
    de = "off";
  if (de === "count") await Tt(Z, w, e);
  let ne = !h || n.sha256 !== void 0 ? "absent" : re === Z ? "same" : he ? await Ie(Z, w) : "absent";
  if (p?.aborted) return ce(e, "stopped", 0);
  let rt = performance.now(),
    ue, Se, y, Y, W = !1,
    fe = !1;
  if (ne === "same") e.unchangedOnDiskCount++;
  else if (ne === "changed" || ne === "unknown") e.keptChangedFileCount++;
  else if (X() && l !== void 0 && Hr(ve) && Hr(Q) && (_ === void 0 || _ === Av()) && (LN() !== null || Hae() === null)) {
    let R = Ve.userConfigDir("uploads", [ve, Q]),
      I, T = je(de) ? await lt(async () => {
        if (p?.aborted) return W = !0, "failed";
        if (I = await Lt(l, Q, {
            servedPageCount: x,
            fileUuid: n.file_uuid
          }, R, w, {
            mode: 384,
            precondition: {
              type: "ifAbsent"
            }
          }), I.ok) return "published";
        let E = Qm(I.error);
        return I.error.code === "AlreadyExists" || E === "ELOOP" || E === "ENXIO" || E === "EISDIR" ? "taken" : "failed"
      }, We(Z), Q, w, e, K) : void 0;
    if (W) return ce(e, "stopped", 0);
    let j = I ?? await Lt(l, Q, {
      servedPageCount: x,
      fileUuid: n.file_uuid
    }, R, w, he ? {
      mode: 384,
      precondition: {
        type: "ifAbsent"
      }
    } : {
      mode: 384
    });
    if (T === "same") e.unchangedOnDiskCount++;
    else if (typeof T === "object") Y = T;
    else if (he && !j.ok && j.error.code === "AlreadyExists") Se = b("storage_backend");
    else if (!j.ok) ue = Ht(j.error), e.lastFailedWrite = {
      code: db(Qm(j.error)) ?? f(j.error.code),
      step: b("storage_backend")
    }
  } else if (q()) IO("inbound_attachment", Z), ue = "refused: this session is diskless and writes no files to this machine's disk", e.lastFailedWrite = {
    code: b("diskless"),
    step: b("refused")
  };
  else {
    let R = b("mkdir");
    try {
      let I = await dIe(De);
      try {
        if (p?.aborted) return ce(e, "stopped", 0);
        R = b("write");
        let T = me(I.at, Q),
          j = !he && !je(de);
        if (je(de)) {
          let E = await qO(T, w, 384),
            ie = {
              renamesAfterALook: !1
            };
          try {
            let oe = await lt(async () => {
              if (p?.aborted) return W = !0, "failed";
              return vt(E, T, Q, w, e, ie)
            }, I.at, Q, w, e, K);
            if (W) return ce(e, "stopped", 0);
            if (fe = oe === "published", oe === "same") e.unchangedOnDiskCount++;
            else if (typeof oe === "object") Y = oe
          } finally {
            await AC(() => mt(E)).catch((oe) => {
              if (k(oe) !== "ENOENT") B(`the staged name of ${Q} could not be removed: ${oe}`), e.stagedNameLeftCount++
            })
          }
        } else if (he) {
          let E = await qO(T, w, 384);
          try {
            await tt(E, T), e.linkedFileCount++
          } catch (ie) {
            if (k(ie) === "EEXIST") Se = b("link");
            else {
              if (B(`link(2) failed for ${Q} (${ie}); looking at the name again, to rename into it only if it is free`), y = await Ie(T, w), y === "unknown") throw R = b("look_after_link"), ie;
              j = y === "absent", Se = j ? void 0 : b("link")
            }
          } finally {
            await AC(() => mt(E)).catch((ie) => {
              B(`the staged name of ${Q} could not be removed: ${ie}`), e.stagedNameLeftCount++
            })
          }
        }
        if (j) {
          if (await zn(T, w, 384), he) e.renamedAfterLinkRefusedCount++
        }
      } finally {
        await I.release()
      }
    } catch (I) {
      ue = `${I}`, e.lastFailedWrite = {
        code: tr(I) ?? b("unknown"),
        step: R
      }
    }
  }
  if (Y !== void 0 && ue === void 0) ue = Y.why, e.lastFailedWrite = {
    code: Y.code,
    step: b("move_aside")
  };
  if (Se !== void 0 && ue === void 0)
    if (y ??= await Ie(Z, w), y === "same") e.unchangedOnDiskCount++;
    else if (y === "changed" || y === "unknown") e.keptChangedFileCount++;
  else ue = "not saved: something that is not a regular file (a link, a pipe or a folder) has this name and was left as it is, or what had the name was gone when checked again", e.lastFailedWrite = {
    code: b("EEXIST"),
    step: Se
  };
  if (e.slowestWriteMs = Math.max(e.slowestWriteMs, performance.now() - rt), ue !== void 0) {
    if (B(`write ${Z} failed: ${ue}`), e.failedWriteCount++, le) return e.inlinedImageNotSavedCount++, {
      imageBlock: le
    };
    return {
      failure: "write",
      ...fe ? void 0 : Le(de, K, Z, !1, Y)
    }
  }
  let st = performance.now();
  if (ee ??= nt(w), e.slowestHashAfterWriteMs = Math.max(e.slowestHashAfterWriteMs, performance.now() - st), i && n.sha256 === void 0 && LN() === null) try {
    NBi(await un(Z), ee)
  } catch {
    B(`registration skipped for ${Z}`)
  }
  if (Pt(n, {
      path: Z,
      size: w.length,
      sha256: ee,
      bearer: nt(H)
    }, u), B(`resolved ${n.file_uuid} \u2192 ${Z} (${w.length} bytes)`), le) return B(`inlined ${n.file_uuid} (${w.length} bytes)`), {
    imageBlock: le,
    path: Z,
    sha256: ee,
    size: w.length
  };
  if (L) return B(`inline ${n.file_uuid} fell back to @path ref`), {
    path: Z,
    sha256: ee,
    size: w.length,
    inlineFellBack: !0,
    ...Le(de, K, Z, !0)
  };
  return {
    path: Z,
    sha256: ee,
    size: w.length,
    ...Le(de, K, Z, !0)
  }
}

function Pt(n, i, o) {
  let e = pt(o);
  if (e !== void 0) {
    if (e.delete(Ce(n.file_uuid)), e.size >= _n) {
      let r = e.keys().next().value;
      if (r !== void 0) e.delete(r)
    }
    e.set(Ce(n.file_uuid), i)
  }
}
var Ln = {
  download: "it could not be downloaded",
  digest_mismatch: "it failed integrity verification",
  write: "it could not be written to the uploads directory"
};
async function a5r(n, i, o, e, r, s, l, d, u, _, h = !0, p = !1) {
  if (n.length === 0) return {
    prefix: "",
    imageBlocks: [],
    inlinedImagePaths: [],
    deliveredCount: 0
  };
  B(`resolving ${n.length} attachment(s)`);
  let A = Yjt().refusedEarly;
  if (A !== void 0 && A.size > 0)
    for (let y of n) A.delete(Ce(y.file_uuid));
  let D = performance.now(),
    O = l !== !1 && LN() === null && !q() && !1,
    F = O ? v("tengu_tidy_shelf", "off") : void 0,
    S = !O ? void 0 : F === "tell" ? s === void 0 ? "tell" : "on" : F === "on" || F === "count" ? F : "off",
    H = l !== !1 && i && o && s === void 0 && _ === void 0 && d === void 0 && n.some((y) => y.is_image === !0 && y.sha256 === void 0) && Tvr() && Fn() && us() && !St() ? $Li(at()) : void 0,
    L = H === void 0 ? void 0 : v("tengu_twin_heron", !1) === !0,
    M = {
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
      linkedFileCount: 0,
      renamedAfterLinkRefusedCount: 0,
      stagedNameLeftCount: 0,
      overMemoryLimitFileCount: 0,
      idsBySavedName: new Map,
      movedAsideFileCount: 0,
      wouldMoveAsideFileCount: 0,
      wouldLeaveSameFileCount: 0,
      slowestWouldMoveLookMs: 0,
      moveAsideFailedCount: 0,
      whatStandsAside: S,
      uploadsRootCode: LN() !== null ? 2 : We(d ?? Av()) === Hae() ? 1 : 0,
      reusedFileCount: 0,
      prefetchedFileCount: 0,
      joinedInFlightCount: 0,
      inlinedPngSourceCount: 0,
      inlinedPngSourceMaybeTransparentCount: 0,
      inlinedPngSourceSentAsJpegCount: 0,
      modelCopyCount: 0,
      modelCopyMissedCount: 0,
      modelCopyMissedSentAsIsCount: 0,
      requestsModelCopiesBeside: L,
      modelCopyBesidePassedCount: 0,
      modelCopyBesideMissedCount: 0,
      lastModelCopyBesideMiss: void 0,
      modelCopyBesideUnneededCount: 0,
      slowestModelCopyBesideTimeToHeadersMs: 0,
      slowestModelCopyBesideDownloadMs: 0,
      modelCopyBesideBytes: 0,
      slowestModelCopyBesideWaitMs: 0,
      modelCopyBesideExtraImageTokens: 0,
      failedDownloads: {}
    },
    N = n.filter((y) => typeof y.sha256 === "string"),
    P = Kt(n);
  if (_mt()) await U2();
  if (!(s?.accessToken ?? (X() && r !== void 0 ? await pD(r) : JW()))) {
    B("skip: no oauth token");
    let y = {
      ...Ot(n.slice(0, P), 0, 0, M, D),
      ...Dt(u, d)
    };
    c("bridge_attachment_resolve", "no_token", y), V("warn", "bridge_attachment_download_timing", {
      outcome: "no_token",
      should_query: l,
      ...y
    });
    let Y = Z6e(n.filter((W) => typeof W.sha256 !== "string"), "no_token");
    if (N.length > 0) {
      let W = N.length - uue,
        fe = W > 0 ? N.slice(0, uue) : N;
      d5r("bridge", fe.length, 0);
      let st = W > 0 ? " " + Cnr(W) : "";
      return {
        prefix: fe.map((I) => Tnr(I.file_name, "it could not be downloaded (not signed in)")).join(" ") + st + (Y.length > 0 ? " " + ct(Y.length, Y.length) : "") + " ",
        imageBlocks: [],
        inlinedImagePaths: [],
        deliveredCount: 0,
        ...Y.length > 0 && {
          missingFiles: Y
        }
      }
    }
    return {
      prefix: ct(Y.length, Y.length) + " ",
      imageBlocks: [],
      inlinedImagePaths: [],
      deliveredCount: 0,
      missingFiles: Y
    }
  }
  let w = [],
    x = n,
    ee = x.length > P;
  if (ee) {
    if (B(`dropping ${x.length-P} attachment(s) over the ${P} cap`), N.length > 0) w.push(Cnr(x.length - P));
    x = x.slice(0, P)
  }
  let re = i && o,
    ke = s === void 0 && _ === void 0,
    Ae = ke && x.length > Ct,
    Ye = Ja(Ct, (y) => {
      let Y = new AbortController;
      return xn(y, i, re, M, l === !1 ? P3o.noTurn : P3o.startsTurn, h, e, r, s, d, l === !1, _, p, S, H !== void 0 && L === !0 ? {
        limits: H,
        start: (W) => {
          let fe = {
            slowestTimeToHeadersMs: 0,
            slowestDownloadMs: 0,
            downloadedBytes: 0
          };
          return {
            timing: fe,
            end: () => Y.abort(),
            outcome: ot({
              fileUuid: y.file_uuid,
              baseUrl: void 0,
              modelCopy: !0,
              forPrefetch: !1,
              maxBytes: USs,
              spillTo: void 0,
              token: W,
              abort: Y,
              quietLimitMs: Yt,
              totals: fe,
              admitBytes: () => !0
            })
          }
        }
      } : void 0).then(async (W) => {
        if ("path" in W) await vnr(y.file_uuid, W);
        return W
      }).finally(() => {
        if (Y.abort(), Ae) Rt(y)
      })
    }),
    $e;
  try {
    $e = await Promise.all(x.map((y) => Ye(y)))
  } finally {
    for (let y of ke ? x : []) Rt(y)
  }
  let pe = [],
    ge = [],
    qe = [],
    Be = [],
    Pe = 0,
    Fe = 0,
    Je = 0,
    Re = !1,
    we = [],
    le = 0,
    Q = [],
    De = [],
    Z = [];
  $e.forEach((y, Y) => {
    let W = x[Y],
      fe = typeof W.sha256 === "string";
    if (fe) Fe++;
    if ("path" in y) {
      if (De.push({
          file_uuid: W.file_uuid,
          path: y.path,
          inlined: "imageBlock" in y
        }), re && W.sha256 === void 0 && W.project_folder_name) Z.push({
        name: W.project_folder_name,
        path: y.path
      })
    }
    if ("imageBlock" in y) {
      if (ge.push(y.imageBlock), Be.push(W.file_uuid), "path" in y) qe.push(y.path)
    } else if ("path" in y) {
      if (pe.push(`@"${y.path}"`), y.inlineFellBack) Pe++;
      if (fe) Je++;
      if (y.aside !== void 0) Q.push(y.aside), w.push(f4t(y.aside))
    } else {
      if (y.failure === "digest_mismatch") Re = !0;
      if (fe) {
        if (w.push(Tnr(W.file_name, Ln[y.failure])), y.aside !== void 0) Q.push(y.aside), w.push(f4t(y.aside))
      } else if (we.push({
          file_uuid: W.file_uuid,
          reason: y.failure === "write" ? "write" : y.cause ?? "download",
          ...y.tokenRefused && {
            tokenRefused: !0
          }
        }), y.aside !== void 0) le++, Q.push(y.aside), w.push(f4t(y.aside))
    }
  }), await bt(Z);
  let ve = N.length === 0 ? n.slice(P) : [];
  if (we.length > 0 || ve.length > 0) {
    we.push(...Z6e(ve, "count_cap"));
    let y = we.length - le;
    if (y > 0) w.push(ct(y, x.length - Fe + ve.length))
  }
  if (ve.length > 0) w.push(`[a message takes at most ${P} attachments]`);
  let Oe = M.lastFailedWrite?.code === "ENOSPC" && we.some((y) => y.reason === "write");
  if (Oe) w.push(`[${l5r}]`);
  if (Fe > 0) d5r("bridge", Fe, Je);
  let he = pe.length + ge.length,
    de = {
      ...Ot(x, he, ge.length, M, D),
      ...Dt(u, d)
    },
    ne;
  if (he === 0) ne = Re ? "digest_mismatch" : "all_failed", m("bridge_attachment_resolve", ne, de);
  else if (he < x.length) ne = Re ? "digest_mismatch" : "partial_failed", c("bridge_attachment_resolve", ne, de);
  else if (ee) ne = "over_count_cap", c("bridge_attachment_resolve", ne, de);
  else if (M.inlinedImageNotSavedCount > 0) ne = "inlined_image_not_saved", c("bridge_attachment_resolve", ne, de);
  else ne = "ok", g("bridge_attachment_resolve", de);
  let rt = ne !== "ok" && ne !== "over_count_cap" || M.failedWriteCount > 0;
  if (V(rt ? "warn" : "info", "bridge_attachment_download_timing", {
      outcome: ne,
      should_query: l,
      ...de
    }), Pe > 0) c("bridge_attachment_inline_image", "fallback_path_ref");
  else if (ge.length > 0) g("bridge_attachment_inline_image");
  if (M.modelCopyMissedCount > 0) c("bridge_attachment_model_copy", M.modelCopyMissedSentAsIsCount < M.modelCopyMissedCount ? "fallback_path_ref" : "fallback_original");
  else if (M.modelCopyCount > 0) g("bridge_attachment_model_copy");
  let ue = {
    model_copy_beside_passed_count: M.modelCopyBesidePassedCount,
    model_copy_beside_missed_count: M.modelCopyBesideMissedCount,
    model_copy_beside_extra_image_tokens: M.modelCopyBesideExtraImageTokens,
    slowest_model_copy_beside_time_to_headers_ms: Math.round(M.slowestModelCopyBesideTimeToHeadersMs),
    slowest_model_copy_beside_download_ms: Math.round(M.slowestModelCopyBesideDownloadMs),
    approx_model_copy_beside_bytes: Number(M.modelCopyBesideBytes.toPrecision(2)),
    slowest_model_copy_beside_wait_ms: Math.round(M.slowestModelCopyBesideWaitMs)
  };
  if (M.lastModelCopyBesideMiss !== void 0) c("bridge_attachment_model_copy_beside", M.lastModelCopyBesideMiss, ue);
  else if (M.modelCopyBesidePassedCount > 0) g("bridge_attachment_model_copy_beside", ue);
  let Se = [...pe, ...w];
  return {
    prefix: Se.length > 0 ? Se.join(" ") + " " : "",
    imageBlocks: ge,
    inlinedImagePaths: M.inlinedImageNotSavedCount > 0 ? [] : qe,
    ...Be.length > 0 && {
      imageFileUuids: Be
    },
    deliveredCount: he,
    ...we.length > 0 && {
      missingFiles: we
    },
    ...Q.length > 0 && {
      asideOutcomes: Q
    },
    ...Oe && {
      noSpace: Oe
    },
    ...De.length > 0 && {
      writtenFiles: De
    },
    timing: {
      timeToHeadersMs: Math.round(M.slowestTimeToHeadersMs),
      downloadMs: Math.round(M.slowestDownloadMs),
      joinWaitMs: Math.round(M.slowestJoinWaitMs),
      imageBuildMs: Math.round(M.slowestInlineImageBuildMs),
      approxDownloadedBytes: Number(M.downloadedBytes.toPrecision(2)),
      prefetchedFileCount: M.prefetchedFileCount
    }
  }
}

function Gt(n, i) {
  if (!i) return n;
  if (typeof n === "string") return c5r(n, i);
  let o = n.findLastIndex((e) => e.type === "text");
  if (o !== -1) {
    let e = n[o];
    if (e.type === "text") return [...n.slice(0, o), {
      ...e,
      text: c5r(e.text, i)
    }, ...n.slice(o + 1)]
  }
  return [...n, {
    type: "text",
    text: i.trimEnd()
  }]
}

function Wn(n, i) {
  if (i.length === 0) return n;
  let o = typeof n === "string" ? n.trim() === "" ? [] : [{
    type: "text",
    text: n
  }] : sbs(n);
  return [...i, ...o]
}

function Z6e(n, i) {
  return n.map((o) => ({
    file_uuid: o.file_uuid,
    reason: i
  }))
}

function u4t(n, i, o, e = !1) {
  let r = JP(n);
  if (r.length === 0 || r.length > Kt(r)) return;
  let s = [];
  for (let d of r) {
    let u = e ? Vpo(d.file_uuid) : d.file_uuid.slice(0, 8).replace(/[^a-zA-Z0-9_-]/g, "_");
    if (u === "") return;
    let _ = HLn(u, _at(d.file_name));
    s.push(me(o, _))
  }
  let l = s.map((d) => `@"${d}"`);
  return {
    content: Gt(i ?? "", l.join(" ") + " "),
    refs: l,
    paths: s
  }
}
async function Pwn(n, i, o, e, r, s, l, d = !0, u = !1) {
  let _ = i ?? "",
    h = JP(n);
  if (h.length === 0) return {
    content: _,
    inlinedImagePaths: []
  };
  let p = o && !(typeof _ === "string" && BTe(_)),
    {
      prefix: A,
      imageBlocks: D,
      deliveredCount: O,
      ...F
    } = await a5r(h, o, p, e, r, void 0, J0n(n), s, l, void 0, d, u);
  if (O === 0 && typeof _ === "string" && _.trim() === "") return {
    content: A.trimEnd(),
    ...F
  };
  return {
    content: Wn(Gt(_, A), D),
    ...F
  }
}

function Rt(n) {
  let i = Yjt(),
    o = Ce(n.file_uuid),
    e = i.byFileUuid.get(o);
  if (e?.taken !== void 0 && e.settledAt !== void 0) i.byFileUuid.delete(o)
}

function Kt(n) {
  return n.every((i) => i.sha256 === void 0) ? hn : uue
}
var $n = {
  off: 0,
  count: 1,
  on: 2,
  tell: 3
};

function je(n) {
  return n === "on" || n === "tell"
}

function Le(n, i, o, e, r) {
  if (n !== "tell") return;
  let [s, ...l] = i.map((d) => me(We(o), d, Xe(o)));
  if (s !== void 0) return {
    aside: {
      path: o,
      saved: e,
      keptAt: [s, ...l]
    }
  };
  return r?.leavesADifferentFile === !0 && !e ? {
    aside: {
      path: o,
      saved: !1,
      keptAt: []
    }
  } : void 0
}

function f4t({
  path: n,
  saved: i,
  keptAt: [o, e]
}, r = !1) {
  if (o === void 0) {
    let u = `: "${n}" holds something else (possibly a copy changed during this session), which was left in place`;
    return r ? `A file attached to a user message was not saved${u}` : `[attachment not saved${u}]`
  }
  let l = `(possibly a copy changed during this session) was moved to "${o}"${e===void 0?"":`, and what then stood there was moved to "${e}"`}`;
  if (i) {
    let u = ` "${n}"; what was at that path ${l}`;
    return r ? `A file attached to a user message was saved to${u}` : `[saved the attached file to${u}]`
  }
  let d = `, so what was just sent is not available; what was at "${n}" until now ${l}`;
  return r ? `A file attached to a user message was not saved${d}` : `[attachment not saved${d}]`
}

function O3o(n) {
  if (!n || v("tengu_amber_ferry", !1) !== !0) return "off";
  return v("tengu_slate_marten", !1) === !0 ? "on_with_pdfs" : "on"
}

function Dt(n, i) {
  return n === void 0 ? {} : {
    ahead_of_files_flag_on: n === "off" ? 0 : 1,
    ahead_of_files_on_with_pdfs: n === "on_with_pdfs" ? 1 : 0,
    queued_ahead_of_files: i === void 0 ? 0 : 1
  }
}

function Ot(n, i, o, e, r) {
  let s = 0,
    l = 0,
    d = 0;
  for (let u of e.idsBySavedName.values())
    if (d += U(u, (_) => On.test(_)), u.length > 1) s += u.length, l += U(u, (_) => U(u, (h) => h === _) > 1);
  return {
    file_count: n.length,
    resolved_count: i,
    download_try_count: e.downloadTryCount,
    recovered_file_count: e.recoveredFileCount,
    reused_file_count: e.reusedFileCount,
    prefetched_file_count: e.prefetchedFileCount,
    joined_in_flight_count: e.joinedInFlightCount,
    inlined_image_count: o,
    ...c4t(n),
    inlined_png_source_count: e.inlinedPngSourceCount,
    inlined_png_source_maybe_transparent_count: e.inlinedPngSourceMaybeTransparentCount,
    inlined_png_source_sent_as_jpeg_count: e.inlinedPngSourceSentAsJpegCount,
    approx_downloaded_bytes: Number(e.downloadedBytes.toPrecision(2)),
    duration_ms: Math.round(performance.now() - r),
    slowest_time_to_headers_ms: Math.round(e.slowestTimeToHeadersMs),
    slowest_download_ms: Math.round(e.slowestDownloadMs),
    slowest_join_wait_ms: Math.round(e.slowestJoinWaitMs),
    slowest_inline_image_build_ms: Math.round(e.slowestInlineImageBuildMs),
    slowest_inline_image_resize_ms: Math.round(e.slowestInlineImageResizeMs),
    slowest_inline_image_png_palette_ms: Math.round(e.slowestInlineImagePngPaletteMs),
    slowest_inline_image_byte_budget_ms: Math.round(e.slowestInlineImageByteBudgetMs),
    slowest_write_ms: Math.round(e.slowestWriteMs),
    slowest_hash_after_write_ms: Math.round(e.slowestHashAfterWriteMs),
    ...e.failedDownloads,
    ...e.retriedAfter401Count > 0 && {
      retried_after_401_count: e.retriedAfter401Count
    },
    ...e.slowest401RefreshWaitMs > 0 && {
      slowest_401_refresh_wait_ms: Math.round(e.slowest401RefreshWaitMs)
    },
    ...e.failedWriteCount > 0 && {
      failed_write_count: e.failedWriteCount
    },
    ...e.inlinedImageNotSavedCount > 0 && {
      inlined_image_not_saved_count: e.inlinedImageNotSavedCount
    },
    ...e.lastFailedWrite !== void 0 && {
      last_failed_write_code: e.lastFailedWrite.code,
      last_failed_write_step: e.lastFailedWrite.step
    },
    ...e.unchangedOnDiskCount > 0 && {
      unchanged_on_disk_count: e.unchangedOnDiskCount
    },
    ...e.keptChangedFileCount > 0 && {
      kept_changed_file_count: e.keptChangedFileCount
    },
    ...e.linkedFileCount > 0 && {
      linked_file_count: e.linkedFileCount
    },
    ...e.renamedAfterLinkRefusedCount > 0 && {
      renamed_after_link_refused_count: e.renamedAfterLinkRefusedCount
    },
    ...e.stagedNameLeftCount > 0 && {
      staged_name_left_count: e.stagedNameLeftCount
    },
    ...e.overMemoryLimitFileCount > 0 && {
      over_memory_limit_file_count: e.overMemoryLimitFileCount
    },
    ...e.movedAsideFileCount > 0 && {
      moved_aside_file_count: e.movedAsideFileCount
    },
    ...e.wouldMoveAsideFileCount > 0 && {
      would_move_aside_file_count: e.wouldMoveAsideFileCount
    },
    ...e.wouldLeaveSameFileCount > 0 && {
      would_leave_same_file_count: e.wouldLeaveSameFileCount
    },
    ...e.slowestWouldMoveLookMs > 0 && {
      slowest_would_move_look_ms: Math.round(e.slowestWouldMoveLookMs)
    },
    ...e.moveAsideFailedCount > 0 && {
      move_aside_failed_count: e.moveAsideFailedCount
    },
    ...s > 0 && {
      shared_saved_name_file_count: s,
      shared_saved_name_same_id_file_count: l
    },
    ...d > 0 && {
      time_ordered_id_file_count: d
    },
    uploads_root_code: e.uploadsRootCode,
    ...e.whatStandsAside !== void 0 && {
      move_aside_mode_code: $n[e.whatStandsAside]
    },
    ...e.requestsModelCopiesBeside !== void 0 && {
      model_copy_beside_flag_on: e.requestsModelCopiesBeside ? 1 : 0
    },
    ...e.modelCopyBesidePassedCount > 0 && {
      model_copy_beside_passed_count: e.modelCopyBesidePassedCount
    },
    ...e.modelCopyBesideMissedCount > 0 && {
      model_copy_beside_missed_count: e.modelCopyBesideMissedCount
    },
    ...e.lastModelCopyBesideMiss !== void 0 && {
      last_model_copy_beside_miss_code: Dn[e.lastModelCopyBesideMiss]
    },
    ...e.modelCopyBesideUnneededCount > 0 && {
      model_copy_beside_unneeded_count: e.modelCopyBesideUnneededCount
    }
  }
}

function xt(n, i) {
  return n.failedWriteCount++, n.lastFailedWrite = {
    code: tr(i) ?? b("unknown"),
    step: b("write_during_download")
  }, {
    failure: "write"
  }
}
var Nn = new Set([404, 410]);

function ce(n, i, o, e) {
  let r = n.failedDownloads,
    s = vn[i];
  if (r[s] = (r[s] ?? 0) + 1, o > 0) r.partway_failed_count = (r.partway_failed_count ?? 0) + 1;
  if (e !== void 0) r.last_failed_http_status = e;
  if (i === "too_large" || i === "no_token") return {
    failure: "download",
    cause: i
  };
  return {
    failure: "download",
    ...i === "http_status" && Nn.has(e) && {
      cause: "not_found"
    },
    ...i === "http_status" && e === 401 && {
      tokenRefused: !0
    }
  }
}

function pt(n) {
  return n === void 0 && LN() === null ? BWs() : void 0
}

function pRt(n, i) {
  let o = pt(i)?.get(Ce(n));
  return o !== void 0 && We(o.path) === Av() ? o : void 0
}

function Ce(n) {
  return Nt(n) === null ? n : n.toLowerCase()
}

function Vt() {
  return pn("tengu_dapper_brooks", !1)
}

function Zt() {
  return v("tengu_twinkling_hoare", !1) === !0
}

function Un() {
  let n = v("tengu_hazel_lantern", 0),
    i = er(),
    o = i ? wn : At.max;
  if (typeof n !== "number" || !(n > 0)) return {
    ms: o,
    repeatRenews: !1
  };
  return {
    ms: Math.min(o, Math.max(At.min, Math.round(n * 1000))),
    repeatRenews: !i
  }
}

function I3o(n, {
  issuedAt: i,
  credentials: o,
  onlyThese: e = !1
}) {
  if (St()) return 0;
  let r = Vt();
  if (!r.value) return lIe("bridge_attachment_prefetch_flag_off", {
    file_count: n.length,
    flag_served: Tn[r.source]
  }), 0;
  let s = Yjt(),
    l = Un(),
    d = {
      file_count: n.length,
      started_count: 0,
      already_present_count: 0,
      held_limit_count: 0,
      start_budget_count: 0,
      skipped_count: 0
    },
    u = 0,
    _ = 0,
    h = 0,
    p = 0;
  if (s.earlyReadsStopped === !0 && !Zt()) s.earlyReadsStopped = void 0, s.earlyReadsStopReported = void 0;
  let A = s.earlyReadsStopped === !0,
    D = new Set,
    O = Date.now() - i,
    F = O > Math.max(bn * l.ms, Xt),
    S = F ? [] : n.slice(0, uue);
  if (d.skipped_count = n.length - S.length, e && !F) {
    let N = new Set(n.map((P) => Ce(P.file_uuid)));
    for (let [P, K] of s.byFileUuid)
      if (!N.has(P) && K.release !== void 0 && !K.taken) K.release("dropped_unused"), _++
  }
  for (let N of S) {
    let P = Ce(N.file_uuid);
    if (Nt(N.file_uuid) === null || N.file_size !== void 0 && N.file_size > x3o) {
      d.skipped_count++;
      continue
    }
    let K = s.refusedEarly?.get(P);
    if (K !== void 0) {
      if (performance.now() - K < kn) {
        h++;
        continue
      }
      s.refusedEarly?.delete(P)
    }
    let w = s.byFileUuid.get(P);
    if (w !== void 0 || pRt(N.file_uuid, void 0) !== void 0) {
      if (d.already_present_count++, l.repeatRenews && w?.release !== void 0 && !w.taken && !D.has(P)) Qe(w, l.ms), D.add(P), u++;
      continue
    }
    if (A) {
      p++;
      continue
    }
    let x = Hn(N.file_size),
      ee = jn(s, x);
    if (ee === "held_limit") d.held_limit_count++;
    else if (ee === "start_budget") d.start_budget_count++;
    else Yn(s, P, N.file_uuid, x, o, l.ms, l.repeatRenews), D.add(P), d.started_count++
  }
  let H = gt(s),
    L = {
      ...d,
      age_ms: Math.round(O),
      held_file_count: H.count,
      approx_held_bytes: Number(H.bytes.toPrecision(2)),
      ...l.repeatRenews && {
        hold_ms: l.ms,
        refreshed_count: u,
        renewed_since_last_report: s.renewalsNotYetReported ?? 0
      },
      ...e && {
        only_these: !0,
        dropped_count: _
      },
      ...h > 0 && {
        refused_before_count: h
      },
      ...p > 0 && {
        early_reads_stopped_count: p
      }
    },
    M = s.earlyReadsStopReported === !0 ? p : 0;
  if (u + h + M > 0 && u === d.already_present_count && d.file_count === u + h + M && _ === 0) return s.renewalsNotYetReported = (s.renewalsNotYetReported ?? 0) + u, 0;
  if (s.renewalsNotYetReported = 0, p > 0) s.earlyReadsStopReported = !0;
  if (F) c("bridge_attachment_prefetch", "stale", L);
  else if (p > 0) c("bridge_attachment_prefetch", "mark_unseen_stop", L);
  else if (d.held_limit_count > 0) c("bridge_attachment_prefetch", "held_limit", L);
  else if (d.start_budget_count > 0) c("bridge_attachment_prefetch", "start_budget", L);
  else g("bridge_attachment_prefetch", L);
  return lIe(d.started_count > 0 ? "bridge_attachment_prefetch_started" : "bridge_attachment_prefetch_not_started", {
    ...L,
    stale: F
  }), d.started_count
}

function lIe(n, i) {
  V("info", n, i)
}

function Hn(n) {
  return n !== void 0 && n > 0 ? n : 0
}

function jn(n, i) {
  let o = performance.now(),
    e = n.recentPrefetchStarts;
  while (e.length > 0 && o - e[0] >= In) e.shift();
  let r = gt(n);
  if (r.count >= gn || r.bytes + i > jt()) return "held_limit";
  return e.length < Sn ? "ok" : "start_budget"
}

function gt(n) {
  let i = 0,
    o = 0;
  for (let e of n.byFileUuid.values())
    if (e.startedBy === "prefetch" && !e.taken) i++, o += e.settledAt === void 0 ? Math.max(e.receivedBytes, e.statedBytes) : e.receivedBytes;
  return {
    count: i,
    bytes: o
  }
}

function Xn(n) {
  n.release?.("expired_unused")
}

function Qe(n, i) {
  clearTimeout(n.expiry), n.expiry = setTimeout(Xn.bind(void 0, n), i), n.expiry.unref()
}

function Yn(n, i, o, e, r, s, l) {
  let d = new AbortController,
    u = !1,
    _ = ot({
      fileUuid: o,
      baseUrl: void 0,
      modelCopy: !1,
      forPrefetch: !0,
      maxBytes: x3o,
      spillTo: void 0,
      quietLimitMs: it,
      token: async () => {
        let p = await pD(r);
        if (p) h.bearer = nt(p);
        return p
      },
      abort: d,
      totals: void 0,
      onServed: (p) => {
        let A = !p && Zt();
        if (A) n.earlyReadsStopped = !0;
        lIe("bridge_attachment_prefetch_served", {
          mark_seen: p,
          ...!p && {
            stops_early_reads: A
          }
        })
      },
      admitBytes: (p) => {
        if (h.receivedBytes = p, h.taken || gt(n).bytes <= jt()) return !0;
        return h.receivedBytes = 0, h.statedBytes = 0, !1
      }
    }),
    h = Qt("prefetch", d, _, void 0);
  h.statedBytes = e, h.release = (p) => {
    if (n.byFileUuid.get(i) !== h || h.taken) return;
    if (p === "expired_unused" && l && h.settledAt === void 0) {
      Qe(h, s);
      return
    }
    u = !0, clearTimeout(h.expiry), n.byFileUuid.delete(i), d.abort();
    let A = {
      download_finished: h.settledAt !== void 0,
      approx_bytes: Number(h.receivedBytes.toPrecision(2)),
      ...p === "dropped_unused" && {
        held_for_ms: Math.round(performance.now() - h.startedAt)
      }
    };
    c("bridge_attachment_prefetch_download", p, A), lIe(`bridge_attachment_prefetch_${p}`, A)
  }, Qe(h, s), n.recentPrefetchStarts.push(h.startedAt), n.byFileUuid.set(i, h), _.then((p) => {
    if (!("failure" in p)) {
      if (l && n.byFileUuid.get(i) === h && !h.taken) Qe(h, s);
      return
    }
    if (n.byFileUuid.get(i) === h && !h.taken) n.byFileUuid.delete(i), clearTimeout(h.expiry);
    let A = p.failure === "http_status" && p.httpStatus === An;
    if (A && !h.taken) {
      let L = n.refusedEarly ??= new Map;
      if (L.delete(i), L.size >= Mn) L.delete(L.keys().next().value ?? i);
      L.set(i, performance.now())
    }
    if (u) return;
    let D = {
        duration_ms: Math.round(performance.now() - h.startedAt),
        ...p.httpStatus !== void 0 && {
          http_status: p.httpStatus
        }
      },
      O = nn(p),
      F = O ? "no_answer" : p.failure;
    if (A) {
      c("bridge_attachment_prefetch_download", "refused_early", D), lIe("bridge_attachment_prefetch_failed", {
        ...D,
        failure_code: Bn
      });
      return
    }
    let S = h.taken,
      H = S?.by === "joiner" && S.bearer === h.bearer && en(h, S.at);
    if (H) m("bridge_attachment_prefetch_download", F, D);
    else c("bridge_attachment_prefetch_download", F, D);
    lIe(H ? "bridge_attachment_prefetch_failed_file_lost" : "bridge_attachment_prefetch_failed", {
      ...D,
      failure_code: O ? Pn : En[p.failure]
    })
  }).catch(a)
}

function Qt(n, i, o, e) {
  let r = {
    startedBy: n,
    bytes: o.then((s) => {
      if (r.settledAt = performance.now(), "failure" in s) return r.failure = s.failure, r.headersTimedOut = nn(s), null;
      if ("writeFailed" in s) return r.failure = "error", r.writeFailed = s.writeFailed, null;
      if (!("data" in s)) return null;
      return r.servedPageCount = s.servedPageCount, s.data
    }),
    startedAt: performance.now(),
    settledAt: void 0,
    failure: void 0,
    headersTimedOut: !1,
    receivedBytes: 0,
    statedBytes: 0,
    servedPageCount: void 0,
    abort: i,
    taken: n === "message" ? {
      by: "starter"
    } : void 0,
    expiry: void 0,
    bearer: e
  };
  return r
}

function en(n, i) {
  let o = (n.settledAt ?? performance.now()) - i;
  if (n.failure === void 0) return !1;
  if (n.startedBy === "prefetch" && n.failure === "too_large") return !qt();
  return n.startedBy !== "prefetch" || n.receivedBytes > 0 && n.failure !== "stalled" && o > zt
}

function qn(n, i, o) {
  if (n.taken) return !1;
  return n.taken = {
    by: "joiner",
    at: i,
    bearer: o
  }, clearTimeout(n.expiry), !0
}

function Jn(n, i, {
  inFlight: o,
  passes: e,
  sameBearer: r,
  waitedMs: s
}) {
  let l = {
    in_flight: o,
    waited_ms: Math.round(s),
    download_ms: Math.round((n.settledAt ?? performance.now()) - n.startedAt),
    approx_bytes: Number(i.length.toPrecision(2))
  };
  if (e) g("bridge_attachment_prefetch_download", l), lIe(o ? "bridge_attachment_prefetch_used_joined" : "bridge_attachment_prefetch_used_ready", l);
  else c("bridge_attachment_prefetch_download", r ? "attestation_mismatch" : "bearer_changed", l), lIe(r ? "bridge_attachment_prefetch_attestation_mismatch" : "bridge_attachment_prefetch_bearer_changed", l)
}
async function M3o(n, i, o, e, r) {
  let s = performance.now() - i + zt;
  for (let l = 0;; l++) {
    let d = new AbortController,
      u = () => d.abort();
    if (o.signal.addEventListener("abort", u, {
        once: !0
      }), o.signal.aborted) d.abort();
    if (e !== void 0) e.downloadTryCount++;
    r.admitBytes(0);
    let _ = l + 1 < n && performance.now() + it + Ke <= s,
      h = await ot({
        ...r,
        totals: e,
        abort: d,
        quietLimitMs: _ ? it : Ut
      });
    if (o.signal.removeEventListener("abort", u), !("failure" in h)) {
      if (e !== void 0 && l > 0 && !("writeFailed" in h)) e.recoveredFileCount++;
      return h
    }
    let p = Jt(h),
      A = performance.now(),
      D = s - A,
      O = Math.min(P0({
        baseMs: mn,
        attempt: l,
        floorMs: Ke
      }), Math.max(Ke, D)),
      F = _ && h.failure === "stalled";
    if (p && l + 1 < n && (F || D >= Ke)) {
      if (await J(O, o.signal), !o.signal.aborted) continue
    }
    return h
  }
}
async function c_a(n, i, o, e) {
  if (!Fn()) return {
    failure: "no_token"
  };
  let r = new AbortController,
    s = () => r.abort();
  if (o.addEventListener("abort", s, {
      once: !0
    }), o.aborted) s();
  try {
    return await M3o(P3o.startsTurn, 0, r, void 0, {
      fileUuid: n,
      baseUrl: void 0,
      modelCopy: !1,
      forPrefetch: !1,
      maxBytes: i,
      spillTo: void 0,
      token: () => pD(e),
      admitBytes: () => !0
    })
  } finally {
    o.removeEventListener("abort", s)
  }
}

function et() {
  let n = Yjt();
  return n.signInRefresh ??= {
    attempted: !1,
    recoveries: {
      begun: 0,
      running: 0
    }
  }, n.signInRefresh
}
async function Gn(n, i, o, e, r, s) {
  let l = et(),
    d = new AbortController,
    u = J(it, AbortSignal.any([e, d.signal])).then(() => {
      return
    });
  try {
    let _ = await Promise.race([pD(i).catch(() => {
      return
    }), u]);
    if (_ === n) {
      let h = l.attempted && l.recoveries.running === 0;
      if (!l.attempted) {
        l.attempted = !0;
        let A = !1;
        l.run = psn(l, () => fC(n, i, o, {
          onForcedRefreshOutcome: (D) => {
            if (e1n.has(D)) l.attempted = !1;
            else A = !0
          }
        })).then(async () => {
          if (!A && await pD(i) !== n) l.attempted = !1
        }).catch(a)
      }
      if (!r) {
        if (!(await Promise.race([Kl(i).catch(() => null), u]))?.refreshToken) return
      }
      let p = performance.now();
      _ = await Promise.race([(l.run ?? Promise.resolve()).then(() => h ? Kbe(i) : void 0).then(() => pD(i)).catch(() => {
        return
      }), u]), s.slowest401RefreshWaitMs = Math.max(s.slowest401RefreshWaitMs, performance.now() - p)
    }
    return _ && _ !== n && !e.aborted ? {
      bearer: _,
      stamp: uVe(l.recoveries)
    } : void 0
  } finally {
    d.abort()
  }
}
async function ot({
  fileUuid: n,
  baseUrl: i,
  modelCopy: o,
  forPrefetch: e,
  maxBytes: r,
  spillTo: s,
  token: l,
  abort: d,
  quietLimitMs: u,
  totals: _,
  onServed: h,
  admitBytes: p
}) {
  let A = e ? "of a prefetched file" : n,
    D = !1,
    O = !1,
    F = () => {
      D = !0, d.abort()
    },
    S = setTimeout(F, u),
    H = performance.now(),
    L;
  try {
    if (_mt()) await Promise.race([U2(), Wt(d.signal)]);
    let M = await Promise.race([l(), Wt(d.signal)]);
    if (d.signal.aborted) return D ? ft(O) : {
      failure: "stopped"
    };
    if (!M) return {
      failure: "no_token"
    };
    let N;
    try {
      N = `${i??E1()}/api/oauth/files/${encodeURIComponent(n)}/content${o?"?model_copy=inference_highres":""}`
    } catch (re) {
      return B(`fetch ${A} has no URL: ${e?re instanceof Error?re.name:"a non-Error":re}`), {
        failure: "error",
        final: !0
      }
    }
    if (_mt(N, M)) return B(`fetch ${A} refused: the stored login may not go there`), {
      failure: "error",
      final: !0
    };
    let P = await fetch(N, {
      headers: {
        Authorization: `Bearer ${M}`,
        "User-Agent": ui(),
        ...e && {
          [Cn]: "1"
        }
      },
      ...e && {
        cache: "no-store"
      },
      signal: d.signal,
      ...ba({
        url: N
      }),
      ...er() && {
        keepalive: !1
      }
    });
    if (O = !0, clearTimeout(S), S = setTimeout(F, u), _ !== void 0) _.slowestTimeToHeadersMs = Math.max(_.slowestTimeToHeadersMs, performance.now() - H);
    if (P.status !== 200) return B(`fetch ${A} failed: status=${P.status}`), await n6(P), D ? ft(O) : {
      failure: "http_status",
      httpStatus: P.status
    };
    h?.(P.headers.get(Mt.name)?.trim() === Mt.value);
    let K = P.body?.getReader(),
      w = [],
      x = 0;
    while (K !== void 0) {
      let {
        done: re,
        value: ke
      } = await K.read();
      if (re) break;
      if (S.refresh(), x += ke.byteLength, x > (s === void 0 ? r : LLn)) return B(`fetch ${A} over size cap (${x} bytes so far)`), d.abort(), {
        failure: "too_large"
      };
      if (!p(x)) return B(`fetch ${A} stopped: unused prefetched files would exceed their limit in memory`), d.abort(), {
        failure: "held_limit"
      };
      if (w.push(ke), s !== void 0 && x > r) {
        clearTimeout(S);
        try {
          L ??= await s();
          for (let Ae of w) await L.write(Ae)
        } catch (Ae) {
          return B(`download of ${A} stopped, no retry: write to disk failed: ${Ae}`), d.abort(), {
            writeFailed: Ae
          }
        }
        S = setTimeout(F, Ut), w = []
      }
    }
    if (_ !== void 0) _.downloadedBytes += x;
    if (L !== void 0) return await L.finish().then((re) => ({
      file: re
    }), (re) => ({
      writeFailed: re
    }));
    let ee = P.headers.get("content-encoding") === null ? P.headers.get("content-length") : null;
    return {
      data: Buffer.concat(w, x),
      servedPageCount: Kn(P.headers.get(yn)),
      ...ee !== null && /^\d+$/.test(ee) && {
        statedLength: Number(ee)
      }
    }
  } catch (M) {
    return B(`fetch ${A} threw: ${e?M instanceof Error?M.name:"a non-Error":M}`), D ? ft(O) : {
      failure: d.signal.aborted ? "stopped" : "error"
    }
  } finally {
    if (clearTimeout(S), await L?.discard(), _ !== void 0) _.slowestDownloadMs = Math.max(_.slowestDownloadMs, performance.now() - H)
  }
}

function Kn(n) {
  return n !== null && /^[1-9][0-9]{0,2}$/.test(n) ? Number(n) : void 0
}
async function Lt(n, i, o, ...e) {
  let r = Yjt().pageCountsOfWrites ??= new Map;
  r.set(i, o);
  try {
    return await n.write(...e)
  } finally {
    if (r.get(i) === o) r.delete(i)
  }
}

function nn(n) {
  return "failure" in n && n.failure === "stalled" && n.beforeHeaders
}

function ft(n) {
  return {
    failure: "stalled",
    beforeHeaders: !n
  }
}

function Wt(n) {
  return new Promise((i) => {
    if (n.aborted) {
      i(void 0);
      return
    }
    n.addEventListener("abort", () => i(void 0), {
      once: !0
    })
  })
}
var l5r = "A file could not be saved: no space left on device";

function ct(n, i) {
  return i === 1 ? "[attachment did not arrive]" : n === i ? `[${i} attachments did not arrive]` : `[${n} of ${i} attachments did not arrive]`
}
export {
  hci,
  A3o,
  c4t,
  x3o,
  P3o,
  a5r,
  Z6e,
  u4t,
  Pwn,
  f4t,
  O3o,
  pRt,
  I3o,
  lIe,
  M3o,
  c_a,
  l5r
};
