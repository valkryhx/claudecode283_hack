// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { pe } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { k, gre, pi } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Y } from "B:/~BUN/root/chunk-89mss1tj.js";
import { NA } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { X } from "B:/~BUN/root/chunk-yrjpmz6e.js";
import { uE } from "B:/~BUN/root/chunk-gyr2a6wz.js";
import { b9e, S9e, ZLt, DN, bK, ame, Wee, Non, CH } from "B:/~BUN/root/chunk-9w4ppz44.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { H6n, pzs, Gt } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { lE, Ffn } from "B:/~BUN/root/chunk-2zk4vqr8.js";
import { dRe, cRe, srt } from "B:/~BUN/root/chunk-tezeeef5.js";
import { ha } from "B:/~BUN/root/chunk-rsysgs10.js";
import { o, T, u } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { st } from "B:/~BUN/root/chunk-7aw74be3.js";
import { He } from "B:/~BUN/root/chunk-8znbjmp4.js";
import { createWriteStream as we } from "fs";
import { chmod as Ee, lstat as ke, mkdir as Se, readdir as Re, realpath as K, rename as Fe, stat as v, unlink as N } from "fs/promises";
import { Readable as Z } from "stream";
import { pipeline as be } from "stream/promises";
import { posix as Te } from "path";
import { lstat as ye } from "fs/promises";
var Q = 1048576;
async function V(e, t, r) {
  let standing;
  try {
    let s = await ye(e);
    if (!s.isFile()) return {
      replaced: "not_a_file"
    };
    if (standing = {
      bytes: s.size,
      ageSeconds: Math.max(0, Math.round((Date.now() - s.mtimeMs) / 1000)),
      readOnly: (s.mode & 146) === 0
    }, s.size !== r) return {
      replaced: "different_contents",
      standing: standing
    };
    if (r > Q) return {
      replaced: "same_size_not_compared",
      standing: standing
    };
    let [d, y] = await Promise.all([J(e), J(t)]);
    if (d === null || y === null) return {
      replaced: "unknown",
      standing: standing
    };
    return {
      replaced: d.equals(y) ? "same_contents" : "different_contents",
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
async function J(e) {
  let t = await Ffn(e);
  try {
    let r = await t.stat();
    if (!r.isFile()) return null;
    let n = await lE(t, Q, r.size);
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
  } = Te,
  root_2 = bK(),
  root_3 = ame(),
  root = Wee(),
  Oe = 67108864,
  timeout = 30000,
  Ae = 16,
  stall_ms = 60000,
  De = 500,
  fe = "STAGE_PARENT_ESCAPE",
  z = new Set(["ENAMETOOLONG", "ENOSPC", "EDQUOT", "EFBIG", "EISDIR", "ENOTDIR", "EINVAL", "ELOOP", "ENOTEMPTY", fe]);
function q(e) {
  return e < 500 && e !== 408 && e !== 429;
}
function ZZs(e) {
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
function j(e, t) {
  let r = relative(e, t);
  if (r === "" || r === "." || r.split(sep).includes("..") || isAbsolute(r)) return null;
  return r;
}
function _e(e, t = !1) {
  if (e.includes("\x00")) throw Error("mount_path contains null bytes");
  if (!isAbsolute(e)) throw Error("mount_path must be absolute");
  if (e.split(sep).includes("..")) throw Error('mount_path must not contain ".." segments');
  let r = normalize(e),
    n = j(S9e, r);
  if (n !== null && uE() && CH(t ? "vouched" : a.CLAUDE_CODE_REMOTE_SESSION_ID, a.CLAUDE_CODE_ENVIRONMENT_KIND)) {
    let y = dRe(n);
    if (y !== void 0) throw new H(y);
    return {
      dest: join(root, n),
      root: root,
      readOnly: !1,
      neverReplace: !0
    };
  }
  if (basename(r).startsWith(DN)) throw Error("mount_path names a reserved temporary-file name");
  let s = j(b9e, r);
  if (s !== null) return {
    dest: join(root_2, s),
    root: root_2,
    readOnly: !0,
    neverReplace: !1
  };
  let d = j(ZLt, r);
  if (d !== null) {
    if (!CH(t ? "vouched" : a.CLAUDE_CODE_REMOTE_SESSION_ID, a.CLAUDE_CODE_ENVIRONMENT_KIND)) {
      let y = Error("staging under /outputs/ is only supported on managed remote sessions");
      throw y.code = "STAGE_OUTPUTS_UNSUPPORTED_RUNNER", y;
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
class H extends Error {
  refusal;
  constructor(e) {
    super("mount_path names a file that may not be written to the home directory");
    this.refusal = e;
  }
}
function eei(e) {
  let t;
  try {
    t = _e(e);
  } catch (error) {
    if (k(error) === "STAGE_OUTPUTS_UNSUPPORTED_RUNNER") throw Error("add_directory mount_path must be under /uploads/");
    if (!(error instanceof H)) throw error;
  }
  if (!t?.readOnly) throw Error("add_directory mount_path must be under /uploads/ and not under /uploads/.home/");
  return t.dest;
}
function Me(e, t) {
  if (!Non(e, t)) throw me("dest parent escaped stage root");
}
function Ne(e, t) {
  if (NA(e) || NA(dirname(t))) throw me("a folder on the way to dest has a backslash in its name");
}
function me(e) {
  let t = Error(e);
  return t.code = fe, t;
}
function iyn(e) {
  return `${DN}${st(basename(e)).slice(0, 16)}.`;
}
async function Det(e, t) {
  let r = Date.now() - 2 * stall_ms,
    n;
  try {
    n = await Re(e);
  } catch {
    return;
  }
  await Promise.all(n.filter(item => item.startsWith(t)).map(async item => {
    let d = join(e, item);
    try {
      if ((await v(d)).mtimeMs < r) await N(d);
    } catch {}
  }));
}
function Ce(e, t) {
  return e !== null && e.isFile() && (e.mtimeMs >= t || e.ctimeMs >= t);
}
function ne(e) {
  return typeof e === "object" && e !== null && e.code === "EROFS";
}
function B(e, t) {
  let {
    kind: kind,
    status: status
  } = pi(t);
  return {
    kind: kind,
    status: status,
    message: `${e} failed: ${kind}${status ? ` ${status}` : ""}`,
    ...(kind === "http" && status !== void 0 && q(status) && {
      permanent: !0
    })
  };
}
async function tei(e, t, r = "off", n) {
  if (t === void 0 && !a.CLAUDE_CODE_REMOTE_SESSION_ID) return {
    ok: !1,
    error: "CLAUDE_CODE_REMOTE_SESSION_ID unset",
    permanent: !0
  };
  if (t !== void 0 && e.filestore_path) return {
    ok: !1,
    error: "synced documents are not staged here"
  };
  if (e.filestore_path) {
    if (a.CLAUDE_CODE_ENVIRONMENT_KIND !== void 0) return m("ccr_synced_file_stage", "unsupported_runner_kind"), i("tengu_stage_file_completed", {
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
    } = await import("B:/~BUN/root/chunk-vc9w5cp9.js");
    return stageSyncedFile({
      mount_path: e.mount_path,
      filestore_path: e.filestore_path,
      content_sha256: e.content_sha256,
      expected_local_sha256: e.expected_local_sha256
    }, I3s, SYNCED_FILE_ROOT);
  }
  let s;
  try {
    s = _e(e.mount_path, t !== void 0);
  } catch (_) {
    if (k(_) === "STAGE_OUTPUTS_UNSUPPORTED_RUNNER") m("ccr_stage_file_outputs", "unsupported_runner_kind"), i("tengu_stage_file_completed", {
      ok: !1,
      outputs_unsupported_runner_kind: !0,
      duration_ms: 0
    });
    if (_ instanceof H) return O("refused_name", {
      refusal: _.refusal
    }), {
      ok: !0,
      noop: "refused_name"
    };
    return {
      ok: !1,
      error: _ instanceof Error ? _.message : String(_),
      permanent: !0
    };
  }
  if (s.neverReplace && r === "off") return O("home_files_off", {}), {
    ok: !0,
    noop: "home_files_off"
  };
  if (s.neverReplace && e.resync !== void 0) return O("resent_announcement", {}), {
    ok: !0,
    noop: "resent_announcement"
  };
  if (s.neverReplace && e.force !== !1) return O("unchecked_announcement", {}), {
    ok: !0,
    noop: "unchecked_announcement"
  };
  if (s.neverReplace && r === "not_loaded") return O("flag_not_loaded", {}), {
    ok: !1,
    error: "the flag for home files has not loaded"
  };
  let d = s.readOnly ? {} : {
    outputPath: s.dest
  };
  if (!e.force && !s.neverReplace) try {
    if ((await v(s.dest)).isFile()) return X("debug", "stage_file_noop_already_present", {}), i("tengu_stage_file_completed", {
      ok: !0,
      noop_already_present: !0,
      duration_ms: 0
    }), {
      ok: !0,
      noop: "already_present",
      ...d
    };
  } catch {}
  let y = Date.now();
  return xe(e.mount_path, s, y, t, je(e, n));
}
var oe = He(new Map(), e => e.clear());
function xe(e, t, r, n, s) {
  let d = oe.get(t.root);
  if (d === void 0) d = ha(Ae, Ue), oe.set(t.root, d);
  return d(e, t, r, n, s);
}
function Ue(...e) {
  let [t, r, n, s] = e;
  return r.neverReplace ? Le(t, r, n, s) : Ie(...e);
}
async function Ie(e, {
  dest: t,
  root: root_4,
  readOnly: readOnly
}, s, d, y) {
  let _ = performance.now(),
    queued_ms = Math.max(0, Date.now() - s),
    c = () => Math.round(performance.now() - _),
    E = y !== void 0,
    S = readOnly && !E && !a.CLAUDE_STAGE_FILE_ROOT,
    R = E ? {
      in_place: !0
    } : {},
    l = iyn(t),
    w = join(dirname(t), `${l}${Date.now()}.${Math.random().toString(36).slice(2)}`);
  try {
    Ne(root_4, t), await Se(dirname(t), {
      recursive: !0
    });
    let b = await K(root_4),
      A = await K(dirname(t));
    Me(b, A), await ke(t).catch(W => {
      if (k(W) === "ENAMETOOLONG") throw W;
    }), await Det(dirname(t), l);
  } catch (b) {
    let code = typeof b === "object" && b !== null && "code" in b ? String(b.code) : "unknown";
    if (S && ne(b)) return i("tengu_stage_file_completed", {
      ok: !0,
      noop: !0,
      duration_ms: c(),
      queued_ms: queued_ms,
      bytes: 0
    }), X("debug", "stage_file_noop_readonly_mount", {
      duration_ms: c()
    }), {
      ok: !0,
      noop: "readonly_mount"
    };
    if (i("tengu_stage_file_completed", {
      ok: !1,
      duration_ms: c(),
      queued_ms: queued_ms,
      ...R
    }), X("warn", "stage_file_mkdir_failed", {
      code: code,
      duration_ms: c(),
      queued_ms: queued_ms
    }), !readOnly) m("ccr_stage_file_outputs", "mkdir_failed");
    return {
      ok: !1,
      error: `mkdir failed: ${code}`,
      ...(z.has(code) && {
        permanent: !0
      })
    };
  }
  let F = await G(e, w, d, y);
  if (!F.ok) {
    if (await N(w).catch(() => {}), S && F.errno === "EROFS") return i("tengu_stage_file_completed", {
      ok: !0,
      noop: !0,
      duration_ms: c(),
      queued_ms: queued_ms,
      bytes: 0
    }), X("debug", "stage_file_noop_readonly_mount", {
      duration_ms: c()
    }), {
      ok: !0,
      noop: "readonly_mount"
    };
    if (i("tengu_stage_file_completed", {
      ok: !1,
      gated: F.gated,
      duration_ms: c(),
      queued_ms: queued_ms,
      ...R
    }), !readOnly) m("ccr_stage_file_outputs", "fetch_failed");
    return {
      ok: !1,
      error: F.error,
      ...((F.permanent === !0 || F.gated === !0 || F.errno !== void 0 && z.has(F.errno)) && {
        permanent: !0
      })
    };
  }
  let bytes = F.bytes,
    fetch_ms = c(),
    {
      replaced: replaced,
      standing: standing_2
    } = readOnly ? await V(t, w, bytes) : {};
  try {
    if (!readOnly) {
      let b = await v(t).catch(() => null);
      if (Ce(b, s)) return await N(w).catch(() => {}), i("tengu_stage_file_completed", {
        ok: !0,
        noop: !0,
        duration_ms: c(),
        queued_ms: queued_ms,
        bytes: 0,
        outputs_root: !0
      }), X("info", "stage_file_noop_newer_local", {
        duration_ms: c()
      }), g("ccr_stage_file_outputs"), {
        ok: !0,
        noop: "newer_local"
      };
    }
    await Ee(w, readOnly ? 292 : 420), await Fe(w, t);
  } catch (b) {
    if (await N(w).catch(() => {}), S && ne(b)) return i("tengu_stage_file_completed", {
      ok: !0,
      noop: !0,
      fetch_ms: fetch_ms,
      duration_ms: c(),
      queued_ms: queued_ms,
      bytes: 0
    }), X("debug", "stage_file_noop_readonly_mount", {
      duration_ms: c()
    }), {
      ok: !0,
      noop: "readonly_mount"
    };
    let code_2 = typeof b === "object" && b !== null && "code" in b ? String(b.code) : "unknown";
    if (i("tengu_stage_file_completed", {
      ok: !1,
      fetch_ms: fetch_ms,
      duration_ms: c(),
      queued_ms: queued_ms,
      bytes: bytes,
      ...R
    }), X("warn", "stage_file_write_failed", {
      code: code_2,
      duration_ms: c(),
      queued_ms: queued_ms
    }), !readOnly) m("ccr_stage_file_outputs", "write_failed");
    return {
      ok: !1,
      error: `write failed: ${code_2}`,
      ...(z.has(code_2) && {
        permanent: !0
      })
    };
  }
  if (i("tengu_stage_file_completed", {
    ok: !0,
    fetch_ms: fetch_ms,
    duration_ms: c(),
    queued_ms: queued_ms,
    bytes: bytes,
    outputs_root: !readOnly,
    ...R,
    replaced: pe(replaced)
  }), !readOnly) g("ccr_stage_file_outputs");
  return X(replaced === "different_contents" ? "warn" : "info", "stage_file_ok", {
    bytes: bytes,
    fetch_ms: fetch_ms,
    duration_ms: c(),
    queued_ms: queued_ms,
    root: readOnly ? "uploads" : "outputs",
    ...(replaced !== void 0 && {
      replaced: replaced
    }),
    ...(standing_2 !== void 0 && {
      replaced_bytes: standing_2.bytes,
      replaced_mtime_age_s: standing_2.ageSeconds,
      replaced_read_only: standing_2.readOnly
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
function O(outcome, t) {
  let r = outcome === "flag_not_loaded" || outcome === "probe_failed" || outcome === "fetch_failed" || outcome === "place_failed";
  if (X(r ? "warn" : "info", "stage_file_home", {
    outcome: outcome,
    ...t
  }), i("tengu_stage_file_completed", {
    ok: !r,
    noop: !r && outcome !== "placed",
    home_root: !0,
    bytes: t.bytes ?? 0,
    duration_ms: t.duration_ms ?? 0,
    queued_ms: t.queued_ms ?? 0
  }), r) m("ccr_stage_file_home", outcome);else if (outcome === "placed" || outcome === "already_present") g("ccr_stage_file_home");else p("ccr_stage_file_home", outcome);
}
function ae(e, outputPath, r) {
  switch (e.outcome) {
    case "placed":
      return O(e.outcome, r), {
        ok: !0,
        outputPath: outputPath
      };
    case "already_present":
    case "path_occupied":
      return O(e.outcome, r), {
        ok: !0,
        noop: e.outcome
      };
    case "refused_name":
      return O(e.outcome, {
        refusal: e.refusal,
        ...r
      }), {
        ok: !0,
        noop: e.outcome
      };
  }
}
async function Le(e, {
  dest: dest,
  root: root_5
}, n, s) {
  let d = performance.now(),
    queued_ms_2 = Math.max(0, Date.now() - n),
    _ = () => ({
      duration_ms: Math.round(performance.now() - d),
      queued_ms: queued_ms_2
    }),
    h = relative(root_5, dest),
    c = join(root_5, `${iyn(dest)}${Date.now()}.${Math.random().toString(36).slice(2)}`);
  try {
    let E = await cRe(root_5, h);
    if (await Det(root_5, DN), E !== void 0) return ae(E, dest, _());
  } catch (E) {
    let code_3 = k(E) ?? "unknown";
    return O("probe_failed", {
      code: code_3,
      ..._()
    }), {
      ok: !1,
      error: `mkdir failed: ${code_3}`
    };
  }
  try {
    let E = await G(e, c, s);
    if (!E.ok && !E.gated && s === void 0) await N(c).catch(() => {}), await Y(De), E = await G(e, c, s);
    if (!E.ok) return O("fetch_failed", {
      code: E.errno,
      ..._()
    }), {
      ok: !1,
      error: E.error
    };
    return ae(await srt(c, root_5, h), dest, {
      bytes: E.bytes,
      ..._()
    });
  } catch (E) {
    let code_4 = k(E) ?? "unknown";
    return O("place_failed", {
      code: code_4,
      ..._()
    }), {
      ok: !1,
      error: `write failed: ${code_4}`
    };
  } finally {
    await N(c).catch(() => {});
  }
}
var error_2 = "read failed: credential expired";
function ve(e) {
  let t = !1;
  return async () => {
    if (t) return {
      ok: !1,
      error: error_2
    };
    return t = !0, ge(e);
  };
}
function ge(e) {
  let {
    filestore_jwt: t,
    filesystem_id: r
  } = e;
  if (!t || !r) return {
    ok: !1,
    error: "list returned incomplete credential",
    permanent: !0
  };
  let filestoreUrl = H6n(e.filestore_url);
  if (e.filestore_url && !filestoreUrl) X("warn", "stage_file_filestore_url_rejected", {
    reason: pzs(e.filestore_url)
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
async function he(e, t) {
  let r = await Ge(e, t);
  return r.ok ? ge(r.data) : r;
}
var se = "/worker/files",
  $e = "stage_request_id",
  ze = /^stage-file-inplace-req_[0-9A-Za-z_]{1,72}$/;
function je(e, t) {
  return e.in_place === !0 && typeof t === "string" && ze.test(t) ? t : void 0;
}
async function Ge(signal, t) {
  let r = performance.now(),
    n = () => Math.round(performance.now() - r);
  try {
    let s = await Gt.get(t === void 0 ? se : `${se}?${$e}=${encodeURIComponent(t)}`, {
      auth: "session-jwt",
      host: "ccr-session",
      headers: {
        "anthropic-version": "2023-06-01"
      },
      timeout: timeout,
      signal: signal
    });
    if (!s.ok) return X("warn", "stage_file_list_gated", {
      reason: s.reason,
      duration_ms: n()
    }), {
      ok: !1,
      error: `list gated: ${s.reason}`,
      gated: !0,
      permanent: !0
    };
    if (s.status < 200 || s.status >= 300) return X("warn", "stage_file_list_failed", {
      kind: "http",
      status: s.status,
      duration_ms: n()
    }), {
      ok: !1,
      error: `list failed: http ${s.status}`,
      status: s.status,
      ...(q(s.status) && {
        permanent: !0
      })
    };
    let {
      filestore_jwt: filestore_jwt,
      filesystem_id: filesystem_id,
      filestore_url: filestore_url
    } = s.data;
    return {
      ok: !0,
      data: {
        filestore_jwt: filestore_jwt,
        filesystem_id: filesystem_id,
        filestore_url: filestore_url
      }
    };
  } catch (s) {
    let {
      kind: kind_2,
      status: status_2,
      message: _,
      permanent: permanent
    } = B("list", s);
    return X("warn", "stage_file_list_failed", {
      kind: kind_2,
      status: status_2,
      duration_ms: n()
    }), {
      ok: !1,
      error: _,
      status: status_2,
      permanent: permanent
    };
  }
}
async function G(path, t, r, n) {
  let s = performance.now(),
    d = () => Math.round(performance.now() - s),
    y = r === void 0 ? () => he(void 0, n) : ve(r),
    _ = await y();
  if (!_.ok) return _;
  let cred = _.cred;
  for (let c = 0; c <= 1; c++) {
    let abortController = new AbortController(),
      S,
      R = () => {
        if (S) S.refresh();else S = setTimeout(l => l.abort(Error("readFile stall: no bytes for 60s")), stall_ms, abortController);
      };
    R();
    try {
      let l = await Gt.post("/v1/filestore/fs/readFile", {
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
      if (!l.ok) return clearTimeout(S), X("warn", "stage_file_read_gated", {
        reason: l.reason,
        duration_ms: d()
      }), {
        ok: !1,
        error: `read gated: ${l.reason}`,
        gated: !0
      };
      if (l.status === 401 && c === 0) {
        if (clearTimeout(S), l.data instanceof Z) l.data.destroy();
        if (X("info", "stage_file_read_remint_jwt", {
          duration_ms: d()
        }), _ = await y(), !_.ok) return _;
        cred = _.cred;
        continue;
      }
      if (l.status < 200 || l.status >= 300) {
        if (clearTimeout(S), l.data instanceof Z) l.data.destroy();
        return X("warn", "stage_file_read_failed", {
          kind: "http",
          status: l.status,
          duration_ms: d()
        }), {
          ok: !1,
          error: `read failed: http ${l.status}`,
          ...(q(l.status) && {
            permanent: !0
          })
        };
      }
      let expected = Number(l.response?.headers["content-length"] ?? -1);
      l.data.on("data", R), await be(l.data, we(t, {
        flags: "wx"
      })), clearTimeout(S);
      let F = await v(t);
      if (expected >= 0 && F.size !== expected) return X("warn", "stage_file_read_truncated", {
        expected: expected,
        got: F.size,
        duration_ms: d()
      }), {
        ok: !1,
        error: `read truncated: got ${F.size} of ${expected} bytes`
      };
      return {
        ok: !0,
        bytes: F.size
      };
    } catch (l) {
      clearTimeout(S);
      let w = typeof l === "object" && l !== null && "code" in l ? String(l.code) : void 0;
      if (w && !("isAxiosError" in l)) return X("warn", "stage_file_write_failed", {
        code: w,
        duration_ms: d()
      }), {
        ok: !1,
        error: `write failed: ${w}`,
        errno: w
      };
      if (abortController.signal.aborted) return X("warn", "stage_file_read_stalled", {
        stall_ms: stall_ms,
        duration_ms: d()
      }), {
        ok: !1,
        error: `read stalled: no bytes for ${stall_ms}ms`
      };
      let {
        kind: kind_3,
        status: status_3,
        message: M,
        permanent: permanent_2
      } = B("read", l);
      return X("warn", "stage_file_read_failed", {
        kind: kind_3,
        status: status_3,
        duration_ms: d()
      }), {
        ok: !1,
        error: M,
        permanent: permanent_2
      };
    }
  }
  throw Error("unreachable: fetchFilestoreToFile retry loop fell through");
}
var maxContentLength = 1048576;
async function Ye(e) {
  let t = await he(e);
  if (!t.ok) return t;
  let {
      filestoreJwt: filestoreJwt,
      filesystemId: n,
      filestoreUrl: s
    } = t.cred,
    d = {
      auth: "none",
      host: "api",
      baseUrl: s,
      headers: {
        Authorization: `Bearer ${filestoreJwt}`
      },
      timeout: timeout
    };
  async function readBytes(path_2, {
    maxBytes: maxBytes,
    signal: signal_2
  } = {}) {
    let S = performance.now(),
      R = () => Math.round(performance.now() - S);
    try {
      let l = await Gt.post("/v1/filestore/fs/readFile", {
        filesystem_id: n,
        path: path_2
      }, {
        ...d,
        responseType: "arraybuffer",
        maxContentLength: maxBytes ?? Oe,
        signal: signal_2
      });
      if (!l.ok) return X("warn", "stage_file_read_gated", {
        reason: l.reason,
        duration_ms: R()
      }), {
        ok: !1,
        error: `read gated: ${l.reason}`,
        gated: !0
      };
      if (l.status < 200 || l.status >= 300) return X("warn", "stage_file_read_failed", {
        kind: "http",
        status: l.status,
        duration_ms: R()
      }), {
        ok: !1,
        error: `read failed: http ${l.status}`,
        status: l.status,
        ...(l.status === 404 && {
          notFound: !0
        })
      };
      return {
        ok: !0,
        buf: Buffer.from(l.data)
      };
    } catch (l) {
      let {
        kind: kind_4,
        status: status_4,
        message: P
      } = B("read", l);
      return X("warn", "stage_file_read_failed", {
        kind: kind_4,
        status: status_4,
        duration_ms: R()
      }), {
        ok: !1,
        error: P,
        status: status_4,
        ...(status_4 === 404 && {
          notFound: !0
        }),
        ...(gre(l) && {
          tooLarge: !0
        })
      };
    }
  }
  async function listDirectory(path_3, {
    limit: limit,
    signal: signal_3
  }) {
    let S = performance.now();
    try {
      let R = await Gt.post("/v1/filestore/fs/listDirectory", {
        filesystem_id: n,
        path: path_3,
        limit: limit
      }, {
        ...d,
        maxContentLength: maxContentLength,
        signal: signal_3
      });
      if (!R.ok) return I("gated", void 0, S), {
        ok: !1,
        error: `directory listing gated: ${R.reason}`,
        gated: !0
      };
      if (R.status < 200 || R.status >= 300) return I("http", R.status, S), {
        ok: !1,
        error: `directory listing failed: http ${R.status}`,
        status: R.status,
        ...(R.status === 404 && {
          notFound: !0
        })
      };
      let l = We().safeParse(R.data);
      if (!l.success) return I("shape", R.status, S), {
        ok: !1,
        error: "directory listing failed: unexpected answer",
        status: R.status
      };
      let w = l.data.entries ?? [],
        F = w.slice(0, limit);
      return {
        ok: !0,
        files: F.flatMap(item => item.file?.path ?? []),
        directories: F.flatMap(item => item.directory?.path ?? []),
        more: w.length > limit || (l.data.cursor ?? "") !== ""
      };
    } catch (R) {
      let {
        kind: kind_5,
        status: status_5,
        message: F
      } = B("directory listing", R);
      return I(kind_5, status_5, S), {
        ok: !1,
        error: F,
        status: status_5,
        ...(status_5 === 404 && {
          notFound: !0
        })
      };
    }
  }
  return {
    ok: !0,
    reader: {
      readBytes: readBytes,
      listDirectory: listDirectory
    }
  };
}
function I(kind_6, status_6, r) {
  X(status_6 === 404 ? "info" : "warn", "stage_file_directory_failed", {
    kind: kind_6,
    status: status_6,
    duration_ms: Math.round(performance.now() - r)
  });
}
var We = f(() => u({
  entries: T(u({
    file: u({
      path: o()
    }).optional(),
    directory: u({
      path: o()
    }).optional()
  })).optional(),
  cursor: o().optional()
}));
async function I3s(e, t = {}) {
  let r = await Ye(t.signal);
  return r.ok ? r.reader.readBytes(e, t) : r;
}
export { ZZs, eei, iyn, Det, tei, I3s };