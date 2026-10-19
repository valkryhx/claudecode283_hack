// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { F, L } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { W } from "B:/~BUN/root/chunk-hg8ngszx.js";
import { c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { H, Tb } from "B:/~BUN/root/chunk-3aez4b53.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { nt } from "B:/~BUN/root/chunk-nggrknsv.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { Dfn, O4, _Te, nC, I4, aF, ude } from "B:/~BUN/root/chunk-2zk4vqr8.js";
import { ut } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { w_, uBe } from "B:/~BUN/root/chunk-6vykeeak.js";
import { ee } from "B:/~BUN/root/chunk-t63e78w2.js";
import { UD, O3n, JJe, MEe, ycn, _cn, bcn, Scn, Le } from "B:/~BUN/root/chunk-qp0344nb.js";
import { qje } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { an } from "B:/~BUN/root/chunk-31x8pa20.js";
import { Zt } from "B:/~BUN/root/chunk-ekswf6ps.js";
import { yt } from "B:/~BUN/root/chunk-hz8x9zsh.js";
var Uwo = 150000,
  DCr = 30000;
function e8e() {
  return T(ut().bashOutputMaxChars) ?? DCr;
}
function _ee() {
  let e = T(ut().bashOutputMaxChars);
  if (e !== void 0) return e;
  return qje("BASH_MAX_OUTPUT_LENGTH", process.env.BASH_MAX_OUTPUT_LENGTH, DCr, Uwo).effective;
}
function T(e) {
  if (e === void 0) return;
  return Math.min(Math.max(e, O3n), JJe);
}
import { dirname as O } from "path";
function xfe() {
  if (w_() !== void 0) return {
    dirs: [],
    paths: []
  };
  return {
    dirs: [nC()],
    paths: []
  };
}
function Xtn(e, r) {
  if (!e) return;
  let n = O(r);
  if (!e.dirs.includes(n)) e.dirs.push(n);
  if (!e.paths.includes(r)) e.paths.push(r);
}
function Yxs(e, r) {
  if (!e) return;
  e.paths = e.paths.filter(item => item !== r);
}
function NCr(e, r, n, o) {
  let webFetchSavedFiles = C(e.webFetchSavedFiles, r),
    a = webFetchSavedFiles === e.webFetchSavedFiles ? e : {
      ...e,
      webFetchSavedFiles: webFetchSavedFiles
    };
  return n ? a : o(a);
}
function C(e, r) {
  if (!r) return e;
  if (e && r.dirs.every(item => e.dirs.includes(item)) && r.paths.every(item => e.paths.includes(item))) return e;
  return {
    dirs: L([...(e?.dirs ?? []), ...r.dirs]),
    paths: L([...(e?.paths ?? []), ...r.paths])
  };
}
import { basename as _, dirname as B, join as b } from "path";
var S = Buffer.from("%PDF-");
function LCr(e) {
  return e.subarray(0, S.length).equals(S);
}
function Mjn(e) {
  if (!e) return "bin";
  switch (nt(e, ";").trim().toLowerCase()) {
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
    case "image/x-icon":
    case "image/vnd.microsoft.icon":
      return "ico";
    case "text/css":
      return "css";
    case "text/javascript":
    case "application/javascript":
      return "js";
    case "application/xml":
    case "text/xml":
      return "xml";
    case "application/manifest+json":
      return "webmanifest";
    case "font/woff2":
    case "application/font-woff2":
      return "woff2";
    case "font/woff":
    case "application/font-woff":
      return "woff";
    case "font/ttf":
      return "ttf";
    case "font/otf":
      return "otf";
    case "application/wasm":
      return "wasm";
    default:
      return "bin";
  }
}
var t8e = Dfn;
async function xT(data, r, n, o, s) {
  if (data.length > t8e) return {
    error: `content is ${data.length} bytes, over the ${t8e} byte persist limit`
  };
  let a = w_();
  if (a !== void 0) {
    let ext = Mjn(r),
      f = data.length > a.maxBytes ? null : await uBe(a, {
        leafName: `${n}.${ext}`,
        data: data
      });
    if (f === null) return {
      error: "binary content was not saved"
    };
    return Xtn(o, f.path), i("tengu_binary_content_persisted", {
      sizeBytes: data.length,
      ext: c(ext)
    }), {
      filepath: f.path,
      size: data.length,
      ext: ext
    };
  }
  let u = nC();
  if (W() && s !== void 0) {
    let l = await j(s, u, data, r, n, o);
    if (l !== void 0) return l;
  }
  await aF(u, s);
  let ext_2 = Mjn(r),
    filepath = b(u, `${n}.${ext_2}`);
  try {
    await ude(filepath, data);
  } catch (l) {
    let f = H(l);
    return t(`Failed to persist binary content to ${filepath}: ${f.message}`, {
      level: "error"
    }), {
      error: f.message
    };
  }
  return Xtn(o, filepath), i("tengu_binary_content_persisted", {
    sizeBytes: data.length,
    ext: c(ext_2)
  }), {
    filepath: filepath,
    size: data.length,
    ext: ext_2
  };
}
function n8e(e, r) {
  let n = o => o.replace(/[^\w-]/g, "");
  return `artifact-${n(e).slice(0, 8)}-${n(r)}`;
}
function Xxs(e) {
  return _(e).toLowerCase().startsWith("artifact-") && _(B(e)).toLowerCase() === _Te;
}
async function j(e, r, n, o, s, a) {
  let ext_3 = Mjn(o),
    d = `${s}.${ext_3}`,
    p = I4(r, d);
  if (p === void 0) return;
  let filepath_2 = b(r, d),
    f = await e.write(p, n, {
      mode: 438 & ~process.umask()
    });
  if (!f.ok) {
    let x = yt(f.error);
    return t(`Failed to persist binary content to ${filepath_2}: ${x}`, {
      level: "error"
    }), {
      error: `storage write failed (${x})`
    };
  }
  return Xtn(a, filepath_2), i("tengu_binary_content_persisted", {
    sizeBytes: n.length,
    ext: c(ext_3)
  }), {
    filepath: filepath_2,
    size: n.length,
    ext: ext_3
  };
}
function Oie(e, r, n, o) {
  return `${o}Binary content (${r || "unknown type"}, ${Zt(n)}) saved to ${e}`;
}
function Djn(e, r, n) {
  let o = w_();
  if (nt(r ?? "", ";").trim().toLowerCase() !== "application/pdf" || !LCr(e)) return;
  if (e.length > (o?.inlinePdfBytes?.(n) ?? 0)) return o?.servesTheModelsFiles?.(n) === !0 ? {
    type: "text",
    text: k(e.length)
  } : void 0;
  return {
    type: "document",
    source: {
      type: "base64",
      media_type: "application/pdf",
      data: e.toString("base64")
    }
  };
}
function k(e) {
  return `[This PDF (${Zt(e)}) cannot be shown whole in this session. Read it again with the pages parameter, for example pages: "1-5", at most ${O4} pages per call.]`;
}
var text = "[Another PDF in this result was left out: only the first is shown.]";
function Ljn(e) {
  if (!Array.isArray(e) || F(e, n => n.type === "document") < 2) return e;
  let r = !1;
  return e.map(item => {
    if (item.type !== "document" || !r) return r ||= item.type === "document", item;
    return {
      type: "text",
      text: text
    };
  });
}
function Iie(e, r) {
  let n = nt(e ?? "", ";").trim();
  return `[Binary content (${n.length <= 100 && /^[\w.+-]+\/[\w.+-]+$/.test(n) ? n : "application/octet-stream"}, ${Zt(r)}) was not kept: it could not be saved.]`;
}
var Njn = "[The portion truncated above was not kept: it could not be saved.]";
var M = 64;
function Jxs(e) {
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
function W0t(e) {
  return e !== void 0 && ee().autoEditAttribution.chainPublishIds.has(e);
}
function A(e) {
  if (e === void 0) return;
  return ee().autoEditAttribution.chainPublishSlots.get(e);
}
function Qxs(e) {
  return A(e) !== void 0;
}
function Zxs(e) {
  let r = A(e),
    n = {
      storedProbe: r?.storedProbe,
      roundTrip: r?.roundTrip
    };
  if (r !== void 0) r.storedProbe = void 0, r.roundTrip = void 0;
  return n;
}
function Bwo(e, r) {
  let n = ee().autoEditAttribution.staged.get(e);
  if (n === void 0 || n.consumed || r === void 0 || n.expectedToolUseId !== r) return null;
  return n.baseVersion;
}
function ePs(e, r, n) {
  let o = ee().autoEditAttribution.staged.get(e);
  if (o === void 0 || o.consumed || r === void 0 || o.expectedToolUseId !== r || o.slug !== e) return null;
  let s = Object.keys(n),
    a = Object.keys(o.input);
  if (s.length !== a.length || !a.every(item => n[item] === o.input[item])) return null;
  return {
    contentSha256: o.contentSha256
  };
}
function tPs(e, r) {
  let n = ee().autoEditAttribution.staged.get(e);
  if (n === void 0 || n.consumed || r === void 0 || n.expectedToolUseId !== r) return null;
  return n.consumed = !0, {
    threadId: n.threadId,
    commentId: n.commentId,
    recordVersionEcho: o => {
      n.versionEcho = o;
    }
  };
}
function nPs(e) {
  let {
    staged: staged_2,
    chainPublishSlots: chainPublishSlots_2
  } = ee().autoEditAttribution;
  if (staged_2.get(e.slug) === e) staged_2.delete(e.slug);
  if (chainPublishSlots_2.get(e.expectedToolUseId) === e) chainPublishSlots_2.delete(e.expectedToolUseId);
}
function rPs(e) {
  let r = {
    ...e,
    consumed: !1
  };
  return ee().pipelineReplyOrigins.set(e.expectedToolUseId, r), r;
}
function oPs(e, r, n) {
  let o = n === void 0 ? void 0 : ee().pipelineReplyOrigins.get(n);
  if (o === void 0 || o.consumed || o.slug !== e || o.threadId !== r) return !1;
  return o.consumed = !0, !0;
}
function P(e) {
  return e !== void 0 && ee().pipelineReplyOrigins.has(e);
}
function sPs(e) {
  let pipelineReplyOrigins = ee().pipelineReplyOrigins;
  if (pipelineReplyOrigins.get(e.expectedToolUseId) === e) pipelineReplyOrigins.delete(e.expectedToolUseId);
}
var m = 3,
  U = 1024,
  D = new Set(Object.values(MEe)),
  z = new Set([`ec_${ycn}`, _cn, `ec_${bcn}`, "policy_fetch_failed", "policy_route_missing", ...Object.values(Scn)]);
function g(e) {
  return typeof e === "string" ? e.slice(0, U) : "";
}
function V(e) {
  if (typeof e !== "object" || e === null) return "publish\x00\x00\x00";
  let r = "action" in e ? g(e.action) : "",
    n = "file_path" in e ? g(e.file_path) : "",
    o = "url" in e ? g(e.url) : "",
    s = "thread_id" in e ? g(e.thread_id) : "";
  return `${r || "publish"}\x00${n}\x00${o}\x00${s}`;
}
function y(e, reason, fingerprint) {
  let rejectBreaker = ee().rejectBreaker,
    s = V(e),
    a = rejectBreaker.get(s),
    count = a !== void 0 && a.reason === reason && a.fingerprint === fingerprint ? a.count + 1 : 1;
  if (rejectBreaker.set(s, {
    count: count,
    reason: reason,
    fingerprint: fingerprint
  }), count === m) i("tengu_artifact_reject_breaker", {
    reason: Tb(reason)
  });
  return count >= m;
}
var w = `IMPORTANT: Artifact calls for this target have now been rejected ${m} or more times in this session for the same reason.`,
  h = `${w} Do not send the same call again: either make the specific change the error describes, or stop calling Artifact for this target and tell the user what is failing and why.`,
  R = `${w} Stop calling Artifact for this target and tell the user the artifact could not be published and why \u2014 do not try to work around this refusal.`,
  Fut = Math.max(h.length, R.length) + 2;
function I(e) {
  return D.has(e) ? R : h;
}
function Hut(e) {
  for (let r of [h, R]) if (e.startsWith(`${r}

`)) return e.slice(r.length + 2);
  return e;
}
var X = "live_edit_conflict";
function FCr(e, r, n) {
  let o = Hut(r),
    s = n === X ? an(o + G(e, o)) : an(o);
  return y(e, n, s) && !z.has(n) ? `${I(n)}

${o}` : o;
}
function G(e, r) {
  if (typeof e !== "object" || e === null || !("action" in e) || e.action !== "live-edit" || !("ops" in e) || !Array.isArray(e.ops)) return "";
  let n = /\bops\[(\d+)\]/.exec(r),
    o = n === null ? e.ops : [e.ops[Number.parseInt(n[1], 10)]],
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
var E = "schema";
function K(e) {
  if (e === void 0) return "";
  return e.issues.map(item => {
    let n = item.code === "unrecognized_keys" ? [...item.keys].sort().join(",") : "";
    return `${item.code}:${item.path.map(String).join(".")}:${n}`;
  }).sort().join("|");
}
function v(e) {
  return P(e.toolUseId) || W0t(e.toolUseId);
}
function iPs(e, r = {}) {
  let {
      validationErrorSteer: validationErrorSteer,
      validateInput: validateInput,
      call: call
    } = e,
    a = {
      validationErrorSteer: (u, d) => Y(u, d, r.schemaSteerOverride?.(u) ?? null, validationErrorSteer?.(u, d) ?? null),
      ...(validateInput !== void 0 && {
        validateInput: Z(validateInput, r.onValidateReject)
      }),
      call: q(call)
    };
  return Object.defineProperties(Object.defineProperties({}, Object.getOwnPropertyDescriptors(e)), Object.getOwnPropertyDescriptors(a));
}
function Y(e, r, n, o) {
  let s = (n !== null ? "override|" : "") + K(r),
    a = y(e, E, s);
  if (n !== null) return n;
  let d = [a ? I(E) : null, o].filter(item => item !== null).join(`

`);
  return d === "" ? null : d;
}
function Z(e, r) {
  return async (n, o) => {
    let s = await e(n, o);
    if (s.result) return s;
    let unattended = v(o);
    try {
      r?.(n, {
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
      message: FCr(n, s.message, `ec_${s.errorCode}`)
    };
  };
}
function q(e) {
  return async (r, n, ...o) => {
    if (v(n)) return e(r, n, ...o);
    let s;
    try {
      s = await e(r, n, ...o);
    } catch (error) {
      if (error instanceof Le) error.message = FCr(r, error.message, error.reasonCode ?? "unknown");
      throw error;
    }
    return J(), s;
  };
}
function J() {
  ee().rejectBreaker.clear();
}
import { STATUS_CODES as Q } from "http";
var Fjn = 1e5,
  Jtn = UD - 2000;
function bee(e) {
  return Q[e] ?? "Unknown Status";
}
export { Uwo, DCr, e8e, _ee, LCr, xfe, Xtn, Yxs, NCr, Mjn, t8e, xT, n8e, Xxs, Oie, Djn, Ljn, Iie, Njn, Jxs, W0t, Qxs, Zxs, Bwo, ePs, tPs, nPs, rPs, oPs, sPs, Fut, Hut, FCr, iPs, Fjn, Jtn, bee };