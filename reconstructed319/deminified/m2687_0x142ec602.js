// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { de } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { k, UN, Ai } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { J } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { Oc } from "B:/~BUN/root/chunk-h4acfc9y.js";
import { V } from "B:/~BUN/root/chunk-f9dwrymq.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { ry } from "B:/~BUN/root/chunk-65j2302z.js";
import { KCe, Wht, Onn, F1, hR, xee, DX, uQe } from "B:/~BUN/root/chunk-7pxn9dsp.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { F$t, g8i, jt } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Iw, nnt } from "B:/~BUN/root/chunk-1g25msn4.js";
import { sz } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { ZBe, e1e, vRt } from "B:/~BUN/root/chunk-j3dtncp6.js";
import { P5o, O5o, I5o, Znr, M5o, D5r, D5o } from "B:/~BUN/root/chunk-qznyg2jc.js";
import { Ja } from "B:/~BUN/root/chunk-v91d7hbv.js";
import { D } from "B:/~BUN/root/chunk-8mqsat26.js";
import { o, C, u } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { nt } from "B:/~BUN/root/chunk-tq5dzbq9.js";
import { he } from "B:/~BUN/root/chunk-fet34rqr.js";
import { createWriteStream as Oe } from "fs";
import { chmod as De, lstat as ye, mkdir as Ce, readdir as Ie, realpath as ie, rename as xe, stat as W, unlink as L } from "fs/promises";
import { Readable as le } from "stream";
import { pipeline as ve } from "stream/promises";
import { posix as Ue } from "path";
import { lstat as Te } from "fs/promises";
var Me = 4096,
  B = he(new Map(), e => e.clear());
function oe(e, written, r) {
  if (B.delete(e), B.set(e, {
    written: written,
    renamedByNs: BigInt(r + 1) * 1000000n
  }), B.size > Me) {
    let [n] = B.keys();
    if (n !== void 0) B.delete(n);
  }
}
function Ne(e, t) {
  let r = B.get(e);
  if (r === void 0) return 5;
  let {
    written: written_2
  } = r;
  if (written_2.ino !== t.ino || written_2.birthtimeNs !== t.birthtimeNs) return 3;
  if (written_2.size !== t.size || written_2.mtimeNs !== t.mtimeNs) return 4;
  return t.ctimeNs <= r.renamedByNs ? 1 : 2;
}
var se = 1048576;
async function ae(e, t, r) {
  let standing;
  try {
    let a = await Te(e, {
      bigint: !0
    });
    if (!a.isFile()) return {
      replaced: "not_a_file"
    };
    let d = Number(a.mtimeNs / 1000n) / 1000;
    if (standing = {
      bytes: Number(a.size),
      ageSeconds: Math.max(0, Math.round((Date.now() - d) / 1000)),
      readOnly: (Number(a.mode) & 146) === 0,
      vsPlaced: Ne(e, a)
    }, standing.bytes !== r) return {
      replaced: "different_contents",
      standing: standing
    };
    if (r > se) return {
      replaced: "same_size_not_compared",
      standing: standing
    };
    let [_, w] = await Promise.all([ne(e), ne(t)]);
    if (_ === null || w === null) return {
      replaced: "unknown",
      standing: standing
    };
    return {
      replaced: _.equals(w) ? "same_contents" : "different_contents",
      standing: standing
    };
  } catch (error) {
    return k(error) === "ENOENT" ? {
      replaced: "nothing"
    } : {
      replaced: "unknown",
      standing: standing
    };
  }
}
async function ne(e) {
  let t = await nnt(e);
  try {
    let r = await t.stat();
    if (!r.isFile()) return null;
    let n = await Iw(t, se, r.size);
    return n.overLimit ? null : n.bytes;
  } finally {
    await t.close().catch(() => {});
  }
}
var {
    basename: basename,
    dirname: dirname,
    isAbsolute: isAbsolute,
    join: join,
    normalize: normalize,
    relative: relative,
    sep: sep
  } = Ue,
  root_2 = hR(),
  root_3 = xee(),
  root = DX(),
  Le = 67108864,
  timeout = 30000,
  He = 16,
  stall_ms = 60000,
  ze = 500,
  Fe = "STAGE_PARENT_ESCAPE",
  K = new Set(["ENAMETOOLONG", "ENOSPC", "EDQUOT", "EFBIG", "EISDIR", "ENOTDIR", "EINVAL", "ELOOP", "ENOTEMPTY", Fe]);
function ee(e) {
  return e < 500 && e !== 408 && e !== 429;
}
function y_a(e) {
  return {
    ok: !0,
    ...(e.noop !== void 0 && {
      noop: e.noop
    }),
    ...(e.replaced !== void 0 && {
      replaced: e.replaced
    })
  };
}
function Q(e, t) {
  let r = relative(e, t);
  if (r === "" || r === "." || r.split(sep).includes("..") || isAbsolute(r)) return null;
  return r;
}
function Re(e, t = !1) {
  if (e.includes("\x00")) throw Error("mount_path contains null bytes");
  if (!isAbsolute(e)) throw Error("mount_path must be absolute");
  if (e.split(sep).includes("..")) throw Error('mount_path must not contain ".." segments');
  let r = normalize(e),
    n = Q(Wht, r);
  if (n !== null && ry() && sz(t ? "vouched" : i.CLAUDE_CODE_REMOTE_SESSION_ID, i.CLAUDE_CODE_ENVIRONMENT_KIND)) {
    let _ = ZBe(n);
    if (_ !== void 0) throw new X(_);
    return {
      dest: join(root, n),
      root: root,
      readOnly: !1,
      neverReplace: !0
    };
  }
  if (basename(r).startsWith(F1)) throw Error("mount_path names a reserved temporary-file name");
  let a = Q(KCe, r);
  if (a !== null) return {
    dest: join(root_2, a),
    root: root_2,
    readOnly: !0,
    neverReplace: !1
  };
  let d = Q(Onn, r);
  if (d !== null) {
    if (!sz(t ? "vouched" : i.CLAUDE_CODE_REMOTE_SESSION_ID, i.CLAUDE_CODE_ENVIRONMENT_KIND)) {
      let _ = Error("staging under /outputs/ is only supported on managed remote sessions");
      throw _.code = "STAGE_OUTPUTS_UNSUPPORTED_RUNNER", _;
    }
    return {
      dest: join(root_3, d),
      root: root_3,
      readOnly: !1,
      neverReplace: !1
    };
  }
  throw Error("mount_path must be under /uploads/ or /outputs/");
}
class X extends Error {
  refusal;
  constructor(e) {
    super("mount_path names a file that may not be written to the home directory");
    this.refusal = e;
  }
}
function __a(e) {
  let t;
  try {
    t = Re(e);
  } catch (error) {
    if (k(error) === "STAGE_OUTPUTS_UNSUPPORTED_RUNNER") throw Error("add_directory mount_path must be under /uploads/");
    if (!(error instanceof X)) throw error;
  }
  if (!t?.readOnly) throw Error("add_directory mount_path must be under /uploads/ and not under /uploads/.home/");
  return t.dest;
}
function $e(e, t) {
  if (!uQe(e, t)) throw Pe("dest parent escaped stage root");
}
function je(e, t) {
  if (Oc(e) || Oc(dirname(t))) throw Pe("a folder on the way to dest has a backslash in its name");
}
function Pe(e) {
  let t = Error(e);
  return t.code = Fe, t;
}
function Xnr(e) {
  return `${F1}${nt(basename(e)).slice(0, 16)}.`;
}
async function kRt(e, t) {
  let r = Date.now() - 2 * stall_ms,
    n;
  try {
    n = await Ie(e);
  } catch {
    return;
  }
  await Promise.all(n.filter(item => item.startsWith(t)).map(async item => {
    let d = join(e, item);
    try {
      if ((await W(d)).mtimeMs < r) await L(d);
    } catch {}
  }));
}
function Ge(e, t) {
  return e !== null && e.isFile() && (e.mtimeMs >= t || e.ctimeMs >= t);
}
function _e(e) {
  return typeof e === "object" && e !== null && e.code === "EROFS";
}
function Y(e, t) {
  let {
    kind: kind,
    status: status
  } = Ai(t);
  return {
    kind: kind,
    status: status,
    message: `${e} failed: ${kind}${status ? ` ${status}` : ""}`,
    ...(kind === "http" && status !== void 0 && ee(status) && {
      permanent: !0
    })
  };
}
async function b_a(e, t, r = "off", n, a = "off") {
  if (t === void 0 && !i.CLAUDE_CODE_REMOTE_SESSION_ID) return {
    ok: !1,
    error: "CLAUDE_CODE_REMOTE_SESSION_ID unset",
    permanent: !0
  };
  if (t !== void 0 && e.filestore_path) return {
    ok: !1,
    error: "synced documents are not staged here"
  };
  if (e.filestore_path) {
    if (i.CLAUDE_CODE_ENVIRONMENT_KIND !== void 0) return m("ccr_synced_file_stage", "unsupported_runner_kind"), l("tengu_stage_file_completed", {
      ok: !1,
      synced_unsupported_runner_kind: !0,
      duration_ms: 0
    }), {
      ok: !1,
      error: "synced-file staging not supported on this runner kind"
    };
    let {
      stageSyncedFile: stageSyncedFile,
      SYNCED_FILE_ROOT: SYNCED_FILE_ROOT
    } = await import("B:/~BUN/root/chunk-c2x69emx.js");
    return stageSyncedFile({
      mount_path: e.mount_path,
      filestore_path: e.filestore_path,
      content_sha256: e.content_sha256,
      expected_local_sha256: e.expected_local_sha256
    }, daa, SYNCED_FILE_ROOT);
  }
  let d;
  try {
    d = Re(e.mount_path, t !== void 0);
  } catch (y) {
    if (k(y) === "STAGE_OUTPUTS_UNSUPPORTED_RUNNER") m("ccr_stage_file_outputs", "unsupported_runner_kind"), l("tengu_stage_file_completed", {
      ok: !1,
      outputs_unsupported_runner_kind: !0,
      duration_ms: 0
    });
    if (y instanceof X) return N("refused_name", {
      refusal: y.refusal
    }), {
      ok: !0,
      noop: "refused_name"
    };
    return {
      ok: !1,
      error: y instanceof Error ? y.message : String(y),
      permanent: !0
    };
  }
  if (d.neverReplace && r === "off") return N("home_files_off", {}), {
    ok: !0,
    noop: "home_files_off"
  };
  if (d.neverReplace && e.resync !== void 0) return N("resent_announcement", {}), {
    ok: !0,
    noop: "resent_announcement"
  };
  if (d.neverReplace && e.force !== !1) return N("unchecked_announcement", {}), {
    ok: !0,
    noop: "unchecked_announcement"
  };
  if (d.neverReplace && r === "not_loaded") return N("flag_not_loaded", {}), {
    ok: !1,
    error: "the flag for home files has not loaded"
  };
  let _ = d.readOnly ? {} : {
    outputPath: d.dest
  };
  if (!e.force && !d.neverReplace) try {
    if ((await W(d.dest)).isFile()) return V("debug", "stage_file_noop_already_present", {}), l("tengu_stage_file_completed", {
      ok: !0,
      noop_already_present: !0,
      duration_ms: 0
    }), {
      ok: !0,
      noop: "already_present",
      ..._
    };
  } catch {}
  let w = Date.now();
  return Ve(e.mount_path, d, w, t, et(e, n), e.force === !0 ? a : "off");
}
var me = he(new Map(), e => e.clear());
function Ve(e, t, r, n, a, d) {
  let _ = me.get(t.root);
  if (_ === void 0) _ = Ja(He, qe), me.set(t.root, _);
  return _(e, t, r, n, a, d);
}
function qe(...e) {
  let [t, r, n, a] = e;
  return r.neverReplace ? Xe(t, r, n, a) : We(...e);
}
async function Ye(e, t, r) {
  let n = performance.now();
  if (t === void 0 || !t.isFile() || t.nlink !== 1n || t.size > BigInt(P5o)) return;
  if (I5o()) return {
    compared: {
      storeAnswer: "not_asked_while_paused",
      verdict: "no_size_and_md5_from_store",
      checkMs: 0,
      bytes: Number(t.size),
      hashMayHaveChangedAtime: !1
    }
  };
  let minted = await te();
  if (!minted.ok) return {
    minted: minted
  };
  let d = await M5o(minted.cred, r),
    verdict,
    hashMayHaveChangedAtime = !1;
  if (d.answer !== "size_and_md5") {
    if (verdict = "no_size_and_md5_from_store", d.answer === "credential_refused" || d.answer === "not_sent") Znr(d.answer, 1 / 0);else if (d.answer === "timed_out" || d.answer === "credential_expired" || d.answer === "request_error" || d.answer === "other_http_status") Znr(d.answer, O5o);
  } else if (BigInt(d.size) !== t.size) verdict = "size_differs";else if ((Number(t.mode) & 4095) !== 292) verdict = "local_file_mode_not_0444";else {
    let y = await D5o(e, t);
    if (typeof y === "string") {
      if (verdict = y === "timed_out" ? "local_file_hash_timed_out" : y === "changed" ? "local_file_changed" : "local_file_unreadable", y === "timed_out") Znr("local_file_hash_timed_out", 1 / 0);
    } else {
      hashMayHaveChangedAtime = !y.withNoAtime;
      let h = await ye(e, {
        bigint: !0
      }).catch(() => {
        return;
      });
      verdict = h === void 0 || !D5r(y.opened, h) ? "local_file_changed" : y.md5 === d.md5 ? "same_contents" : "md5_differs";
    }
  }
  return {
    minted: minted,
    compared: {
      storeAnswer: d.answer,
      verdict: verdict,
      checkMs: Math.round(performance.now() - n),
      bytes: Number(t.size),
      hashMayHaveChangedAtime: hashMayHaveChangedAtime
    }
  };
}
async function We(e, {
  dest: t,
  root: root_4,
  readOnly: readOnly
}, a, d, _, store_check_mode) {
  let y = performance.now(),
    queued_ms = Math.max(0, Date.now() - a),
    f = () => Math.round(performance.now() - y),
    S = _ !== void 0,
    P = readOnly && !S && !i.CLAUDE_STAGE_FILE_ROOT,
    A = S ? {
      in_place: !0
    } : {},
    s = Xnr(t),
    F,
    E = join(dirname(t), `${s}${Date.now()}.${Math.random().toString(36).slice(2)}`);
  try {
    je(root_4, t), await Ce(dirname(t), {
      recursive: !0
    });
    let R = await ie(root_4),
      O = await ie(dirname(t));
    $e(R, O), F = await ye(t, {
      bigint: !0
    }).catch(re => {
      if (k(re) === "ENAMETOOLONG") throw re;
      return;
    }), await kRt(dirname(t), s);
  } catch (R) {
    let code = typeof R === "object" && R !== null && "code" in R ? String(R.code) : "unknown";
    if (P && _e(R)) return l("tengu_stage_file_completed", {
      ok: !0,
      noop: !0,
      duration_ms: f(),
      queued_ms: queued_ms,
      bytes: 0
    }), V("debug", "stage_file_noop_readonly_mount", {
      duration_ms: f()
    }), {
      ok: !0,
      noop: "readonly_mount"
    };
    if (l("tengu_stage_file_completed", {
      ok: !1,
      duration_ms: f(),
      queued_ms: queued_ms,
      ...A
    }), V("warn", "stage_file_mkdir_failed", {
      code: code,
      duration_ms: f(),
      queued_ms: queued_ms
    }), !readOnly) m("ccr_stage_file_outputs", "mkdir_failed");
    return {
      ok: !1,
      error: `mkdir failed: ${code}`,
      ...(K.has(code) && {
        permanent: !0
      })
    };
  }
  let T = store_check_mode !== "off" && readOnly && !S && d === void 0 ? await Ye(t, F, e) : void 0,
    b = T?.compared,
    x = b === void 0 ? {} : {
      store_check_mode: de(store_check_mode),
      store_check_answer: de(b.storeAnswer),
      store_check_verdict: de(b.verdict),
      store_check_ms: b.checkMs
    };
  if (store_check_mode === "on" && b?.verdict === "same_contents") {
    let R = b.hashMayHaveChangedAtime ? {
      store_check_may_have_changed_atime: !0
    } : {};
    return l("tengu_stage_file_completed", {
      ok: !0,
      noop: !0,
      noop_already_present: !0,
      duration_ms: f(),
      queued_ms: queued_ms,
      bytes: 0,
      replaced: de("same_contents"),
      download_skipped_bytes: b.bytes,
      ...x,
      ...R
    }), V("info", "stage_file_noop_matches_store", {
      duration_ms: f(),
      queued_ms: queued_ms,
      download_skipped_bytes: b.bytes,
      store_check_ms: b.checkMs,
      ...R
    }), {
      ok: !0,
      noop: "already_present",
      replaced: "same_contents"
    };
  }
  let M = await Z(e, E, d, _, T?.minted);
  if (!M.ok) {
    if (await L(E).catch(() => {}), P && M.errno === "EROFS") return l("tengu_stage_file_completed", {
      ok: !0,
      noop: !0,
      duration_ms: f(),
      queued_ms: queued_ms,
      bytes: 0
    }), V("debug", "stage_file_noop_readonly_mount", {
      duration_ms: f()
    }), {
      ok: !0,
      noop: "readonly_mount"
    };
    if (l("tengu_stage_file_completed", {
      ok: !1,
      gated: M.gated,
      duration_ms: f(),
      queued_ms: queued_ms,
      ...A
    }), !readOnly) m("ccr_stage_file_outputs", "fetch_failed");
    return {
      ok: !1,
      error: M.error,
      ...((M.permanent === !0 || M.gated === !0 || M.errno !== void 0 && K.has(M.errno)) && {
        permanent: !0
      })
    };
  }
  let bytes = M.bytes,
    fetch_ms = f(),
    {
      replaced: replaced,
      standing: standing_2
    } = readOnly ? await ae(t, E, bytes) : {};
  try {
    if (!readOnly) {
      let R = await W(t).catch(() => null);
      if (Ge(R, a)) return await L(E).catch(() => {}), l("tengu_stage_file_completed", {
        ok: !0,
        noop: !0,
        duration_ms: f(),
        queued_ms: queued_ms,
        bytes: 0,
        outputs_root: !0
      }), V("info", "stage_file_noop_newer_local", {
        duration_ms: f()
      }), g("ccr_stage_file_outputs"), {
        ok: !0,
        noop: "newer_local"
      };
    }
    await De(E, readOnly ? 292 : 420), await xe(E, t);
  } catch (R) {
    if (await L(E).catch(() => {}), P && _e(R)) return l("tengu_stage_file_completed", {
      ok: !0,
      noop: !0,
      fetch_ms: fetch_ms,
      duration_ms: f(),
      queued_ms: queued_ms,
      bytes: 0
    }), V("debug", "stage_file_noop_readonly_mount", {
      duration_ms: f()
    }), {
      ok: !0,
      noop: "readonly_mount"
    };
    let code_2 = typeof R === "object" && R !== null && "code" in R ? String(R.code) : "unknown";
    if (l("tengu_stage_file_completed", {
      ok: !1,
      fetch_ms: fetch_ms,
      duration_ms: f(),
      queued_ms: queued_ms,
      bytes: bytes,
      ...A
    }), V("warn", "stage_file_write_failed", {
      code: code_2,
      duration_ms: f(),
      queued_ms: queued_ms
    }), !readOnly) m("ccr_stage_file_outputs", "write_failed");
    return {
      ok: !1,
      error: `write failed: ${code_2}`,
      ...(K.has(code_2) && {
        permanent: !0
      })
    };
  }
  if (readOnly) oe(t, M.written, Date.now());
  if (l("tengu_stage_file_completed", {
    ok: !0,
    fetch_ms: fetch_ms,
    duration_ms: f(),
    queued_ms: queued_ms,
    bytes: bytes,
    outputs_root: !readOnly,
    ...A,
    replaced: de(replaced),
    ...(standing_2 !== void 0 && {
      standing_vs_placed_code: standing_2.vsPlaced
    }),
    ...x
  }), !readOnly) g("ccr_stage_file_outputs");
  return V(replaced === "different_contents" ? "warn" : "info", "stage_file_ok", {
    bytes: bytes,
    fetch_ms: fetch_ms,
    duration_ms: f(),
    queued_ms: queued_ms,
    root: readOnly ? "uploads" : "outputs",
    ...(replaced !== void 0 && {
      replaced: replaced
    }),
    ...(standing_2 !== void 0 && {
      replaced_bytes: standing_2.bytes,
      replaced_mtime_age_s: standing_2.ageSeconds,
      replaced_read_only: standing_2.readOnly,
      standing_vs_placed_code: standing_2.vsPlaced
    }),
    ...(b !== void 0 && {
      store_check_mode: store_check_mode,
      store_check_answer: b.storeAnswer,
      store_check_verdict: b.verdict,
      store_check_ms: b.checkMs
    })
  }), {
    ok: !0,
    ...(replaced !== void 0 && {
      replaced: replaced
    }),
    ...(readOnly ? {} : {
      outputPath: t
    })
  };
}
function N(outcome, t) {
  let r = outcome === "flag_not_loaded" || outcome === "probe_failed" || outcome === "fetch_failed" || outcome === "place_failed";
  if (V(r ? "warn" : "info", "stage_file_home", {
    outcome: outcome,
    ...t
  }), l("tengu_stage_file_completed", {
    ok: !r,
    noop: !r && outcome !== "placed",
    home_root: !0,
    bytes: t.bytes ?? 0,
    duration_ms: t.duration_ms ?? 0,
    queued_ms: t.queued_ms ?? 0
  }), r) m("ccr_stage_file_home", outcome);else if (outcome === "placed" || outcome === "already_present") g("ccr_stage_file_home");else c("ccr_stage_file_home", outcome);
}
function pe(e, outputPath, r) {
  switch (e.outcome) {
    case "placed":
      return N(e.outcome, r), {
        ok: !0,
        outputPath: outputPath
      };
    case "already_present":
    case "path_occupied":
      return N(e.outcome, r), {
        ok: !0,
        noop: e.outcome
      };
    case "refused_name":
      return N(e.outcome, {
        refusal: e.refusal,
        ...r
      }), {
        ok: !0,
        noop: e.outcome
      };
  }
}
async function Xe(e, {
  dest: dest,
  root: root_5
}, n, a) {
  let d = performance.now(),
    queued_ms_2 = Math.max(0, Date.now() - n),
    w = () => ({
      duration_ms: Math.round(performance.now() - d),
      queued_ms: queued_ms_2
    }),
    y = relative(root_5, dest),
    h = join(root_5, `${Xnr(dest)}${Date.now()}.${Math.random().toString(36).slice(2)}`);
  try {
    let f = await e1e(root_5, y);
    if (await kRt(root_5, F1), f !== void 0) return pe(f, dest, w());
  } catch (f) {
    let code_3 = k(f) ?? "unknown";
    return N("probe_failed", {
      code: code_3,
      ...w()
    }), {
      ok: !1,
      error: `mkdir failed: ${code_3}`
    };
  }
  try {
    let f = await Z(e, h, a);
    if (!f.ok && !f.gated && a === void 0) await L(h).catch(() => {}), await J(ze), f = await Z(e, h, a);
    if (!f.ok) return N("fetch_failed", {
      code: f.errno,
      ...w()
    }), {
      ok: !1,
      error: f.error
    };
    return pe(await vRt(h, root_5, y, void 0), dest, {
      bytes: f.bytes,
      ...w()
    });
  } catch (f) {
    let code_4 = k(f) ?? "unknown";
    return N("place_failed", {
      code: code_4,
      ...w()
    }), {
      ok: !1,
      error: `write failed: ${code_4}`
    };
  } finally {
    await L(h).catch(() => {});
  }
}
var error_2 = "read failed: credential expired";
function Ke(e) {
  let t = !1;
  return async () => {
    if (t) return {
      ok: !1,
      error: error_2
    };
    return t = !0, Ae(e);
  };
}
function Ae(e) {
  let {
    filestore_jwt: t,
    filesystem_id: r
  } = e;
  if (!t || !r) return {
    ok: !1,
    error: "list returned incomplete credential",
    permanent: !0
  };
  let filestoreUrl = F$t(e.filestore_url);
  if (e.filestore_url && !filestoreUrl) V("warn", "stage_file_filestore_url_rejected", {
    reason: g8i(e.filestore_url)
  });
  return {
    ok: !0,
    cred: {
      filestoreJwt: t,
      filesystemId: r,
      filestoreUrl: filestoreUrl
    }
  };
}
async function te(e, t) {
  let r = await tt(e, t);
  return r.ok ? Ae(r.data) : r;
}
var ge = "/worker/files",
  Qe = "stage_request_id",
  Ze = /^stage-file-inplace-req_[0-9A-Za-z_]{1,72}$/;
function et(e, t) {
  return e.in_place === !0 && typeof t === "string" && Ze.test(t) ? t : void 0;
}
async function tt(signal, t) {
  let r = performance.now(),
    n = () => Math.round(performance.now() - r);
  try {
    let a = await jt.get(t === void 0 ? ge : `${ge}?${Qe}=${encodeURIComponent(t)}`, {
      auth: "session-jwt",
      host: "ccr-session",
      headers: {
        "anthropic-version": "2023-06-01"
      },
      timeout: timeout,
      signal: signal
    });
    if (!a.ok) return V("warn", "stage_file_list_gated", {
      reason: a.reason,
      duration_ms: n()
    }), {
      ok: !1,
      error: `list gated: ${a.reason}`,
      gated: !0,
      permanent: !0
    };
    if (a.status < 200 || a.status >= 300) return V("warn", "stage_file_list_failed", {
      kind: "http",
      status: a.status,
      duration_ms: n()
    }), {
      ok: !1,
      error: `list failed: http ${a.status}`,
      status: a.status,
      ...(ee(a.status) && {
        permanent: !0
      })
    };
    let {
      filestore_jwt: filestore_jwt,
      filesystem_id: filesystem_id,
      filestore_url: filestore_url
    } = a.data;
    return {
      ok: !0,
      data: {
        filestore_jwt: filestore_jwt,
        filesystem_id: filesystem_id,
        filestore_url: filestore_url
      }
    };
  } catch (a) {
    let {
      kind: kind_2,
      status: status_2,
      message: w,
      permanent: permanent
    } = Y("list", a);
    return V("warn", "stage_file_list_failed", {
      kind: kind_2,
      status: status_2,
      duration_ms: n()
    }), {
      ok: !1,
      error: w,
      status: status_2,
      permanent: permanent
    };
  }
}
async function Z(path, t, r, n, a) {
  let d = performance.now(),
    _ = () => Math.round(performance.now() - d),
    w = r === void 0 ? () => te(void 0, n) : Ke(r),
    y = a ?? (await w());
  if (!y.ok) return y;
  let cred = y.cred;
  for (let f = 0; f <= 1; f++) {
    let abortController = new AbortController(),
      P,
      A = () => {
        if (P) P.refresh();else P = setTimeout(s => s.abort(Error("readFile stall: no bytes for 60s")), stall_ms, abortController);
      };
    A();
    try {
      let s = await jt.post("/v1/filestore/fs/readFile", {
        filesystem_id: cred.filesystemId,
        path: path
      }, {
        auth: "none",
        host: "api",
        baseUrl: cred.filestoreUrl,
        headers: {
          Authorization: `Bearer ${cred.filestoreJwt}`
        },
        responseType: "stream",
        timeout: 0,
        signal: abortController.signal,
        validateStatus: () => !0
      });
      if (!s.ok) return clearTimeout(P), V("warn", "stage_file_read_gated", {
        reason: s.reason,
        duration_ms: _()
      }), {
        ok: !1,
        error: `read gated: ${s.reason}`,
        gated: !0
      };
      if (s.status === 401 && f === 0) {
        if (clearTimeout(P), s.data instanceof le) s.data.destroy();
        if (V("info", "stage_file_read_remint_jwt", {
          duration_ms: _()
        }), y = await w(), !y.ok) return y;
        cred = y.cred;
        continue;
      }
      if (s.status < 200 || s.status >= 300) {
        if (clearTimeout(P), s.data instanceof le) s.data.destroy();
        return V("warn", "stage_file_read_failed", {
          kind: "http",
          status: s.status,
          duration_ms: _()
        }), {
          ok: !1,
          error: `read failed: http ${s.status}`,
          ...(ee(s.status) && {
            permanent: !0
          })
        };
      }
      let expected = Number(s.response?.headers["content-length"] ?? -1);
      s.data.on("data", A), await ve(s.data, Oe(t, {
        flags: "wx"
      })), clearTimeout(P);
      let E = await W(t, {
          bigint: !0
        }),
        T = Number(E.size);
      if (expected >= 0 && T !== expected) return V("warn", "stage_file_read_truncated", {
        expected: expected,
        got: T,
        duration_ms: _()
      }), {
        ok: !1,
        error: `read truncated: got ${T} of ${expected} bytes`
      };
      let {
        ino: ino,
        birthtimeNs: birthtimeNs,
        size: size,
        mtimeNs: mtimeNs
      } = E;
      return {
        ok: !0,
        bytes: T,
        written: {
          ino: ino,
          birthtimeNs: birthtimeNs,
          size: size,
          mtimeNs: mtimeNs
        }
      };
    } catch (s) {
      clearTimeout(P);
      let F = typeof s === "object" && s !== null && "code" in s ? String(s.code) : void 0;
      if (F && !("isAxiosError" in s)) return V("warn", "stage_file_write_failed", {
        code: F,
        duration_ms: _()
      }), {
        ok: !1,
        error: `write failed: ${F}`,
        errno: F
      };
      if (abortController.signal.aborted) return V("warn", "stage_file_read_stalled", {
        stall_ms: stall_ms,
        duration_ms: _()
      }), {
        ok: !1,
        error: `read stalled: no bytes for ${stall_ms}ms`
      };
      let {
        kind: kind_3,
        status: status_3,
        message: b,
        permanent: permanent_2
      } = Y("read", s);
      return V("warn", "stage_file_read_failed", {
        kind: kind_3,
        status: status_3,
        duration_ms: _()
      }), {
        ok: !1,
        error: b,
        permanent: permanent_2
      };
    }
  }
  throw Error("unreachable: fetchFilestoreToFile retry loop fell through");
}
var maxContentLength = 1048576;
async function laa(e) {
  let t = await te(e);
  if (!t.ok) return t;
  let {
      filestoreJwt: filestoreJwt,
      filesystemId: n,
      filestoreUrl: a
    } = t.cred,
    d = {
      auth: "none",
      host: "api",
      baseUrl: a,
      headers: {
        Authorization: `Bearer ${filestoreJwt}`
      },
      timeout: timeout
    };
  async function readBytes(path_2, {
    maxBytes: maxBytes,
    signal: signal_2
  } = {}) {
    let P = performance.now(),
      A = () => Math.round(performance.now() - P);
    try {
      let s = await jt.post("/v1/filestore/fs/readFile", {
        filesystem_id: n,
        path: path_2
      }, {
        ...d,
        responseType: "arraybuffer",
        maxContentLength: maxBytes ?? Le,
        signal: signal_2
      });
      if (!s.ok) return V("warn", "stage_file_read_gated", {
        reason: s.reason,
        duration_ms: A()
      }), {
        ok: !1,
        error: `read gated: ${s.reason}`,
        gated: !0
      };
      if (s.status < 200 || s.status >= 300) return V("warn", "stage_file_read_failed", {
        kind: "http",
        status: s.status,
        duration_ms: A()
      }), {
        ok: !1,
        error: `read failed: http ${s.status}`,
        status: s.status,
        ...(s.status === 404 && {
          notFound: !0
        })
      };
      return {
        ok: !0,
        buf: Buffer.from(s.data)
      };
    } catch (s) {
      let {
        kind: kind_4,
        status: status_4,
        message: T
      } = Y("read", s);
      return V("warn", "stage_file_read_failed", {
        kind: kind_4,
        status: status_4,
        duration_ms: A()
      }), {
        ok: !1,
        error: T,
        status: status_4,
        ...(status_4 === 404 && {
          notFound: !0
        }),
        ...(UN(s) && {
          tooLarge: !0
        })
      };
    }
  }
  async function listDirectory(path_3, {
    limit: limit,
    recursive: recursive,
    signal: signal_3
  }) {
    let A = performance.now();
    try {
      let s = await jt.post("/v1/filestore/fs/listDirectory", {
        filesystem_id: n,
        path: path_3,
        limit: limit,
        recursive: recursive
      }, {
        ...d,
        maxContentLength: maxContentLength,
        signal: signal_3
      });
      if (!s.ok) return G("gated", void 0, A), {
        ok: !1,
        error: `directory listing gated: ${s.reason}`,
        gated: !0
      };
      if (s.status < 200 || s.status >= 300) return G("http", s.status, A), {
        ok: !1,
        error: `directory listing failed: http ${s.status}`,
        status: s.status,
        ...(s.status === 404 && {
          notFound: !0
        })
      };
      let F = ot().safeParse(s.data);
      if (!F.success) return G("shape", s.status, A), {
        ok: !1,
        error: "directory listing failed: unexpected answer",
        status: s.status
      };
      let E = F.data.entries ?? [],
        T = E.slice(0, limit);
      return {
        ok: !0,
        files: T.flatMap(item => item.file?.path ?? []),
        directories: T.flatMap(item => item.directory?.path ?? []),
        more: E.length > limit || (F.data.cursor ?? "") !== ""
      };
    } catch (s) {
      let {
        kind: kind_5,
        status: status_5,
        message: T
      } = Y("directory listing", s);
      return G(kind_5, status_5, A), {
        ok: !1,
        error: T,
        status: status_5,
        ...(status_5 === 404 && {
          notFound: !0
        })
      };
    }
  }
  async function holdsAt(path_4, {
    signal: signal_4
  }) {
    try {
      let S = await jt.post("/v1/filestore/fs/readFileMetadata", {
        filesystem_id: n,
        path: path_4
      }, {
        ...d,
        maxContentLength: 65536,
        signal: signal_4,
        validateStatus: () => !0,
        maxRedirects: 0
      });
      if (!S.ok) return "no_answer";
      if (S.status >= 200 && S.status < 300) return "a_file";
      return S.status === 404 && D(S.data) && S.data.code === "not_found" && (S.data.details === void 0 || Array.isArray(S.data.details) && S.data.details.length === 0) ? "nothing" : "no_answer";
    } catch {
      return "no_answer";
    }
  }
  return {
    ok: !0,
    reader: {
      readBytes: readBytes,
      listDirectory: listDirectory
    },
    facts: {
      holdsAt: holdsAt,
      filesystemId: n
    }
  };
}
function G(kind_6, status_6, r) {
  V(status_6 === 404 ? "info" : "warn", "stage_file_directory_failed", {
    kind: kind_6,
    status: status_6,
    duration_ms: Math.round(performance.now() - r)
  });
}
var ot = p(() => u({
  entries: C(u({
    file: u({
      path: o()
    }).optional(),
    directory: u({
      path: o()
    }).optional()
  })).optional(),
  cursor: o().optional()
}));
async function daa(e, t = {}) {
  let r = await laa(t.signal);
  return r.ok ? r.reader.readBytes(e, t) : r;
}
export { y_a, __a, Xnr, kRt, b_a, laa, daa };