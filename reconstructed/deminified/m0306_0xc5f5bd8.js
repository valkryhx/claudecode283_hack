// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { H } from "B:/~BUN/root/chunk-dkxhwhft.js";
import { c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { te, a_ } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { b, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Ic } from "B:/~BUN/root/chunk-4p6z9qq1.js";
import { Ze } from "B:/~BUN/root/chunk-y04k89s2.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { Jgn, hde, s_, ij, aj, MUe } from "B:/~BUN/root/chunk-339q6g5w.js";
import { Je } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { bw, bsn } from "B:/~BUN/root/chunk-8k39s5js.js";
import { ee } from "B:/~BUN/root/chunk-65tbbnf1.js";
import { M1, iNo, s5e, Gce, QFt, ZFt, e$t, t$t, Oe } from "B:/~BUN/root/chunk-yehxgs7w.js";
import { pn } from "B:/~BUN/root/chunk-8j4yaj30.js";
import { Ut } from "B:/~BUN/root/chunk-qbrwdgwc.js";
import { L } from "B:/~BUN/root/chunk-z1enakv9.js";
import { rt } from "B:/~BUN/root/chunk-mmkravm0.js";
function Nu(e, n = 4) {
  if (typeof e !== "string") return 0;
  return Math.round(e.length / n);
}
function C(e) {
  switch (e) {
    case "json":
    case "jsonl":
    case "jsonc":
      return 2;
    default:
      return 4;
  }
}
function O4e(e, n) {
  return Nu(e, C(n));
}
function uat(e) {
  return Nu(b(e));
}
function Fae(e, n) {
  if (!e) return 0;
  if (typeof e === "string") return Nu(e, n);
  let r = 0;
  for (let o of e) r += B(o, n);
  return r;
}
function B(e, n) {
  if (typeof e === "string") return Nu(e, n);
  if (e.type === "text") return Nu(e.text, n);
  if (e.type === "image" || e.type === "document") return 2000;
  if (e.type === "tool_result") return Fae(e.content, n);
  if (e.type === "tool_use") return Nu(e.name + b(e.input ?? {}), n);
  if (e.type === "thinking") return Nu(e.thinking, n);
  if (e.type === "redacted_thinking") return Nu(e.data, n);
  return Nu(b(e), n);
}
function pNe(e, n, effective, effective_2) {
  if (!n) return {
    effective: effective,
    status: "valid"
  };
  let effective_3 = Ic(n);
  if (isNaN(effective_3) || effective_3 <= 0) {
    let a = {
      effective: effective,
      status: "invalid",
      message: `Invalid value "${n}" (using default: ${effective})`
    };
    return t(`${e} ${a.message}`), a;
  }
  if (effective_3 > effective_2) {
    let a = {
      effective: effective_2,
      status: "capped",
      message: `Capped from ${effective_3} to ${effective_2}`
    };
    return t(`${e} ${a.message}`), a;
  }
  return {
    effective: effective_3,
    status: "valid"
  };
}
var txr = 150000,
  D1n = 30000;
function M4e() {
  return A(Je().bashOutputMaxChars) ?? D1n;
}
function $ae() {
  let e = A(Je().bashOutputMaxChars);
  if (e !== void 0) return e;
  return pNe("BASH_MAX_OUTPUT_LENGTH", process.env.BASH_MAX_OUTPUT_LENGTH, D1n, txr).effective;
}
function A(e) {
  if (e === void 0) return;
  return Math.min(Math.max(e, iNo), s5e);
}
import { dirname as O } from "path";
function Pee() {
  if (bw() !== void 0) return {
    dirs: [],
    paths: []
  };
  return {
    dirs: [s_()],
    paths: []
  };
}
function ZOt(e, n) {
  if (!e) return;
  let r = O(n);
  if (!e.dirs.includes(r)) e.dirs.push(r);
  if (!e.paths.includes(n)) e.paths.push(n);
}
function OEo(e, n) {
  if (!e) return;
  e.paths = e.paths.filter(item => item !== n);
}
function L1n(e, n, r, o) {
  let webFetchSavedFiles = F(e.webFetchSavedFiles, n),
    a = webFetchSavedFiles === e.webFetchSavedFiles ? e : {
      ...e,
      webFetchSavedFiles: webFetchSavedFiles
    };
  return r ? a : o(a);
}
function F(e, n) {
  if (!n) return e;
  if (e && n.dirs.every(item => e.dirs.includes(item)) && n.paths.every(item => e.paths.includes(item))) return e;
  return {
    dirs: L([...(e?.dirs ?? []), ...n.dirs]),
    paths: L([...(e?.paths ?? []), ...n.paths])
  };
}
import { basename as x, dirname as j, join as S } from "path";
function ysn(e) {
  if (!e) return "bin";
  switch (Ze(e, ";").trim().toLowerCase()) {
    case "application/pdf":
      return "pdf";
    case "application/json":
      return "json";
    case "text/csv":
      return "csv";
    case "text/plain":
      return "txt";
    case "text/html":
      return "html";
    case "text/markdown":
      return "md";
    case "application/zip":
      return "zip";
    case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      return "docx";
    case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
      return "xlsx";
    case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
      return "pptx";
    case "application/msword":
      return "doc";
    case "application/vnd.ms-excel":
      return "xls";
    case "audio/mpeg":
      return "mp3";
    case "audio/wav":
      return "wav";
    case "audio/ogg":
      return "ogg";
    case "video/mp4":
      return "mp4";
    case "video/webm":
      return "webm";
    case "image/png":
      return "png";
    case "image/jpeg":
      return "jpg";
    case "image/gif":
      return "gif";
    case "image/webp":
      return "webp";
    case "image/svg+xml":
      return "svg";
    default:
      return "bin";
  }
}
var fNe = Jgn;
async function ME(data, n, r, o, s) {
  if (data.length > fNe) return {
    error: `content is ${data.length} bytes, over the ${fNe} byte persist limit`
  };
  let a = bw();
  if (a !== void 0) {
    let ext = ysn(n),
      f = data.length > a.maxBytes ? null : await bsn(a, {
        leafName: `${r}.${ext}`,
        data: data
      });
    if (f === null) return {
      error: "binary content was not saved"
    };
    return ZOt(o, f.path), i("tengu_binary_content_persisted", {
      sizeBytes: data.length,
      ext: c(ext)
    }), {
      filepath: f.path,
      size: data.length,
      ext: ext
    };
  }
  let u = s_();
  if (H() && s !== void 0) {
    let l = await k(s, u, data, n, r, o);
    if (l !== void 0) return l;
  }
  await aj(u, s);
  let ext_2 = ysn(n),
    filepath = S(u, `${r}.${ext_2}`);
  try {
    await MUe(filepath, data);
  } catch (l) {
    let f = te(l);
    return t(`Failed to persist binary content to ${filepath}: ${f.message}`, {
      level: "error"
    }), {
      error: f.message
    };
  }
  return ZOt(o, filepath), i("tengu_binary_content_persisted", {
    sizeBytes: data.length,
    ext: c(ext_2)
  }), {
    filepath: filepath,
    size: data.length,
    ext: ext_2
  };
}
function e0t(e, n) {
  let r = o => o.replace(/[^\w-]/g, "");
  return `artifact-${r(e).slice(0, 8)}-${r(n)}`;
}
function MEo(e) {
  return x(e).toLowerCase().startsWith("artifact-") && x(j(e)).toLowerCase() === hde;
}
async function k(e, n, r, o, s, a) {
  let ext_3 = ysn(o),
    d = `${s}.${ext_3}`,
    p = ij(n, d);
  if (p === void 0) return;
  let filepath_2 = S(n, d),
    f = await e.write(p, r, {
      mode: 438 & ~process.umask()
    });
  if (!f.ok) {
    let T = rt(f.error);
    return t(`Failed to persist binary content to ${filepath_2}: ${T}`, {
      level: "error"
    }), {
      error: `storage write failed (${T})`
    };
  }
  return ZOt(a, filepath_2), i("tengu_binary_content_persisted", {
    sizeBytes: r.length,
    ext: c(ext_3)
  }), {
    filepath: filepath_2,
    size: r.length,
    ext: ext_3
  };
}
function U9(e, n, r, o) {
  return `${o}Binary content (${n || "unknown type"}, ${Ut(r)}) saved to ${e}`;
}
function B9(e, n) {
  let r = Ze(e ?? "", ";").trim();
  return `[Binary content (${r.length <= 100 && /^[\w.+-]+\/[\w.+-]+$/.test(r) ? r : "application/octet-stream"}, ${Ut(n)}) was not kept: it could not be saved.]`;
}
var _sn = "[The portion truncated above was not kept: it could not be saved.]";
import { STATUS_CODES as N } from "http";
var t0t = 1e5,
  n0t = M1 - 2000;
function Uae(e) {
  return N[e] ?? "Unknown Status";
}
var M = 64;
function DEo(e) {
  let {
      staged: staged,
      chainPublishIds: chainPublishIds,
      chainPublishSlots: chainPublishSlots
    } = ee().autoEditAttribution,
    s = {
      ...e,
      consumed: !1
    };
  if (staged.set(e.slug, s), chainPublishSlots.set(e.expectedToolUseId, s), chainPublishIds.add(e.expectedToolUseId), chainPublishIds.size > M) {
    let a = chainPublishIds.values().next().value;
    if (a !== void 0) chainPublishIds.delete(a);
  }
  return s;
}
function r0t(e) {
  return e !== void 0 && ee().autoEditAttribution.chainPublishIds.has(e);
}
function _(e) {
  if (e === void 0) return;
  return ee().autoEditAttribution.chainPublishSlots.get(e);
}
function LEo(e) {
  return _(e) !== void 0;
}
function NEo(e) {
  let n = _(e),
    r = {
      storedProbe: n?.storedProbe,
      roundTrip: n?.roundTrip
    };
  if (n !== void 0) n.storedProbe = void 0, n.roundTrip = void 0;
  return r;
}
function nxr(e, n) {
  let r = ee().autoEditAttribution.staged.get(e);
  if (r === void 0 || r.consumed || n === void 0 || r.expectedToolUseId !== n) return null;
  return r.baseVersion;
}
function HEo(e, n, r) {
  let o = ee().autoEditAttribution.staged.get(e);
  if (o === void 0 || o.consumed || n === void 0 || o.expectedToolUseId !== n || o.slug !== e) return null;
  let s = Object.keys(r),
    a = Object.keys(o.input);
  if (s.length !== a.length || !a.every(item => r[item] === o.input[item])) return null;
  return {
    contentSha256: o.contentSha256
  };
}
function FEo(e, n) {
  let r = ee().autoEditAttribution.staged.get(e);
  if (r === void 0 || r.consumed || n === void 0 || r.expectedToolUseId !== n) return null;
  return r.consumed = !0, {
    threadId: r.threadId,
    commentId: r.commentId,
    recordVersionEcho: o => {
      r.versionEcho = o;
    }
  };
}
function $Eo(e) {
  let {
    staged: staged_2,
    chainPublishSlots: chainPublishSlots_2
  } = ee().autoEditAttribution;
  if (staged_2.get(e.slug) === e) staged_2.delete(e.slug);
  if (chainPublishSlots_2.get(e.expectedToolUseId) === e) chainPublishSlots_2.delete(e.expectedToolUseId);
}
function UEo(e) {
  let n = {
    ...e,
    consumed: !1
  };
  return ee().pipelineReplyOrigins.set(e.expectedToolUseId, n), n;
}
function BEo(e, n, r) {
  let o = r === void 0 ? void 0 : ee().pipelineReplyOrigins.get(r);
  if (o === void 0 || o.consumed || o.slug !== e || o.threadId !== n) return !1;
  return o.consumed = !0, !0;
}
function E(e) {
  return e !== void 0 && ee().pipelineReplyOrigins.has(e);
}
function jEo(e) {
  let pipelineReplyOrigins = ee().pipelineReplyOrigins;
  if (pipelineReplyOrigins.get(e.expectedToolUseId) === e) pipelineReplyOrigins.delete(e.expectedToolUseId);
}
var m = 3,
  U = 1024,
  D = new Set(Object.values(Gce)),
  V = new Set([`ec_${QFt}`, ZFt, `ec_${e$t}`, "policy_fetch_failed", "policy_route_missing", ...Object.values(t$t)]);
function g(e) {
  return typeof e === "string" ? e.slice(0, U) : "";
}
function z(e) {
  if (typeof e !== "object" || e === null) return "publish\x00\x00\x00";
  let n = "action" in e ? g(e.action) : "",
    r = "file_path" in e ? g(e.file_path) : "",
    o = "url" in e ? g(e.url) : "",
    s = "thread_id" in e ? g(e.thread_id) : "";
  return `${n || "publish"}\x00${r}\x00${o}\x00${s}`;
}
function v(e, reason, fingerprint) {
  let rejectBreaker = ee().rejectBreaker,
    s = z(e),
    a = rejectBreaker.get(s),
    count = a !== void 0 && a.reason === reason && a.fingerprint === fingerprint ? a.count + 1 : 1;
  if (rejectBreaker.set(s, {
    count: count,
    reason: reason,
    fingerprint: fingerprint
  }), count === m) i("tengu_artifact_reject_breaker", {
    reason: a_(reason)
  });
  return count >= m;
}
var P = `IMPORTANT: Artifact calls for this target have now been rejected ${m} or more times in this session for the same reason.`,
  h = `${P} Do not send the same call again: either make the specific change the error describes, or stop calling Artifact for this target and tell the user what is failing and why.`,
  R = `${P} Stop calling Artifact for this target and tell the user the artifact could not be published and why \u2014 do not try to work around this refusal.`,
  rxr = Math.max(h.length, R.length) + 2;
function I(e) {
  return D.has(e) ? R : h;
}
function D4e(e) {
  for (let n of [h, R]) if (e.startsWith(`${n}

`)) return e.slice(n.length + 2);
  return e;
}
var X = "live_edit_conflict";
function N1n(e, n, r) {
  let o = D4e(n),
    s = r === X ? pn(o + W(e, o)) : pn(o);
  return v(e, r, s) && !V.has(r) ? `${I(r)}

${o}` : o;
}
function W(e, n) {
  if (typeof e !== "object" || e === null || !("action" in e) || e.action !== "live-edit" || !("ops" in e) || !Array.isArray(e.ops)) return "";
  let r = /\bops\[(\d+)\]/.exec(n),
    o = r === null ? e.ops : [e.ops[Number.parseInt(r[1], 10)]],
    s = new Set();
  for (let a of o) {
    if (typeof a !== "object" || a === null) continue;
    for (let u of ["target", "before", "after", "parent"]) if (u in a) {
      let d = g(a[u]);
      if (d !== "") s.add(d);
    }
  }
  return s.size === 0 ? "" : `\x00${[...s].sort().join("\x00")}`;
}
var y = "schema";
function G(e) {
  if (e === void 0) return "";
  return e.issues.map(item => {
    let r = item.code === "unrecognized_keys" ? [...item.keys].sort().join(",") : "";
    return `${item.code}:${item.path.map(String).join(".")}:${r}`;
  }).sort().join("|");
}
function w(e) {
  return E(e.toolUseId) || r0t(e.toolUseId);
}
function WEo(e, n = {}) {
  let {
      validationErrorSteer: validationErrorSteer,
      validateInput: validateInput,
      call: call
    } = e,
    a = {
      validationErrorSteer: (u, d) => K(u, d, n.schemaSteerOverride?.(u) ?? null, validationErrorSteer?.(u, d) ?? null),
      ...(validateInput !== void 0 && {
        validateInput: Y(validateInput, n.onValidateReject)
      }),
      call: Z(call)
    };
  return Object.defineProperties(Object.defineProperties({}, Object.getOwnPropertyDescriptors(e)), Object.getOwnPropertyDescriptors(a));
}
function K(e, n, r, o) {
  let s = (r !== null ? "override|" : "") + G(n),
    a = v(e, y, s);
  if (r !== null) return r;
  let d = [a ? I(y) : null, o].filter(item => item !== null).join(`

`);
  return d === "" ? null : d;
}
function Y(e, n) {
  return async (r, o) => {
    let s = await e(r, o);
    if (s.result) return s;
    let unattended = w(o);
    try {
      n?.(r, {
        ...s
      }, {
        unattended: unattended
      });
    } catch (error) {
      t(`artifact reject observer threw: ${error instanceof Error ? error.message : typeof error}`, {
        level: "error"
      });
    }
    if (unattended) return s;
    return {
      ...s,
      message: N1n(r, s.message, `ec_${s.errorCode}`)
    };
  };
}
function Z(e) {
  return async (n, r, ...o) => {
    if (w(r)) return e(n, r, ...o);
    let s;
    try {
      s = await e(n, r, ...o);
    } catch (error) {
      if (error instanceof Oe) error.message = N1n(n, error.message, error.reasonCode ?? "unknown");
      throw error;
    }
    return q(), s;
  };
}
function q() {
  ee().rejectBreaker.clear();
}
export { Nu, O4e, uat, Fae, pNe, txr, D1n, M4e, $ae, Pee, ZOt, OEo, L1n, ysn, fNe, ME, e0t, MEo, U9, B9, _sn, t0t, n0t, Uae, DEo, r0t, LEo, NEo, nxr, HEo, FEo, $Eo, UEo, BEo, jEo, rxr, D4e, N1n, WEo };