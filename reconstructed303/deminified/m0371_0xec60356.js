// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { $c, Rgn } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { Zn, Mt, Au, zu, cC, Shn, lWt, t2e, dWt, n2e, cWt, uWt, pWt, fWt, GDe, d1, H, Fr, bqo, wL, kqo, Ts } from "B:/~BUN/root/chunk-3aez4b53.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { ip, GW } from "B:/~BUN/root/chunk-gyr2a6wz.js";
import { Uu } from "B:/~BUN/root/chunk-pej55jax.js";
import { sYs, aXn, iYs, aYs, nmn, lYs } from "B:/~BUN/root/chunk-6ft8yhc8.js";
import { W1s, z1s, tt, qe, QLr, P$t, cW, n5, ODo, BM, zht } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { fUs } from "B:/~BUN/root/chunk-h6hab5w2.js";
import { $in, CPo, RPo } from "B:/~BUN/root/chunk-vm7ta03q.js";
import { ehe, Pt } from "B:/~BUN/root/chunk-j0ghr71r.js";
import { createHash as A } from "crypto";
import { release as F } from "os";
var service = "claude-code-error-tracking";
function k(sourcemapGroup) {
  return sourcemapGroup ? {
    version: `${{
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.303",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-18T20:20:57Z",
      GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION}_${sourcemapGroup}`,
    sourcemapGroup: sourcemapGroup
  } : {
    version: {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.303",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-18T20:20:57Z",
      GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION,
    sourcemapGroup: "none"
  };
}
var D = 30;
function O() {
  let e = $in();
  if (e.cachedUserBucket !== void 0) return e.cachedUserBucket;
  let r = BM(),
    o = A("sha256").update(r).digest("hex");
  return e.cachedUserBucket = parseInt(o.slice(0, 8), 16) % D, e.cachedUserBucket;
}
function v(e, r) {
  let o = r.slice(0, 3).map(item => aYs(item) ? `${item.function ?? "?"}@${item.file}:${item.line ?? "?"}:${item.column ?? "?"}` : `${item.function ?? "?"}@${sYs(item.file)}`).join("|");
  return A("sha256").update(`${e}
${o}`).digest("hex").slice(0, 16);
}
var b = new Set(ehe);
function M() {
  try {
    let e = tt();
    if (!e) return;
    let r = qe(Pt(e), {
      identity: !0
    });
    return b.has(r) ? r : "other";
  } catch {
    return;
  }
}
var P = 50;
function U() {
  try {
    let e = n5(),
      r = ODo(),
      o = {},
      n = 0;
    for (let [t, s] of Object.entries(e)) if (typeof s === "boolean" && r.has(t)) {
      if (o[t] = s, ++n >= P) break;
    }
    return o;
  } catch {
    return {};
  }
}
function x(e) {
  let issues = e.issues;
  if (!Array.isArray(issues) || issues.length === 0) return;
  let o = issues.map(item => item?.code).filter(item => typeof item === "string" && /^[a-z_]{1,40}$/.test(item));
  return `${issues.length} issue(s): ${o.join(",")}`;
}
function L() {}
var B = !L.name.startsWith("errorTrackingIdentifierProbe"),
  w = [["APIUserAbortError", Au], ["APIConnectionTimeoutError", cC], ["APIConnectionError", zu], ["BadRequestError", lWt], ["AuthenticationError", t2e], ["PermissionDeniedError", dWt], ["NotFoundError", n2e], ["ConflictError", cWt], ["UnprocessableEntityError", uWt], ["RateLimitError", pWt], ["InternalServerError", fWt], ["APIError", Mt], ["RetryableError", Shn], ["WorkloadIdentityError", Uu], ["AnthropicError", Zn], ["ClaudeError", GDe]],
  R = /_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS$/;
function Sgo(e, r = B) {
  let o = typeof e.constructor?.name === "string" ? e.constructor.name.replace(R, "") : void 0,
    n = r && e instanceof GDe && e.name === o,
    c = ((typeof e.name === "string" && e.name !== "Error" && !n ? e.name : void 0) || (!r && wL(o) !== void 0 ? o : w.find(([, i]) => e instanceof i)?.[0]) || "Error").replace(R, "");
  return wL(c) ?? "Error";
}
var j = 20;
function G(e, origin, o) {
  let n = nmn(e),
    t = iYs(n),
    error_frames = n.slice(0, j),
    c = d1(e),
    message = t && c === void 0 ? `thrown outside the Claude Code bundle (${o})` : z1s(W1s(e, c ?? x(e) ?? e.message ?? String(e))),
    C = lYs({
      name: o,
      message: message
    }, error_frames),
    {
      version: version,
      sourcemapGroup: N
    } = k({
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.303",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-18T20:20:57Z",
      GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.DD_SOURCEMAP_GROUP),
    fingerprint = v(o, error_frames),
    user_bucket = O(),
    model = M(),
    y = typeof Bun < "u" && !0,
    m = Fr(e),
    p = bqo(e),
    entrypoint = a.CLAUDE_CODE_ENTRYPOINT === void 0 ? "cli" : ip() ?? "other",
    d = cW(),
    g = Rgn(),
    _ = QLr(),
    host_os_release = X(F());
  return {
    ddtags: [`service:${service}`, "team:claude-code", `version:${version}`, "env:external", `origin:${origin}`, `platform:${I()}`, `os_release:${host_os_release}`, `user_bucket:${user_bucket}`, `entrypoint:${entrypoint}`, `node_version:${process.versions.node}`, "bun_version:1.4.4", `is_native_runtime:${y}`, ...(model ? [`model:${model}`] : []), ...(m ? [`error_code:${m}`] : []), ...(p !== void 0 ? [`child_exit_status:${p}`] : []), ...(d ? [`session_kind:${d}`] : []), ...(d ? [`has_attacher:${$c() ? "1" : "0"}`] : []), ...(g ? [`renderer_mode:${g}`] : []), ...(_ ? [`remote_control_lane:${_}`] : []), ...(P$t() ? ["projects_session:1"] : [])].join(","),
    service: service,
    hostname: "claude-code",
    status: "error",
    message: `${o}: ${message}`.slice(0, 4000),
    timestamp: new Date().toISOString(),
    error: {
      kind: o,
      message: message.slice(0, 4000),
      stack: C.slice(0, 16000),
      fingerprint: fingerprint,
      handling: origin === "logError" ? "handled" : "unhandled"
    },
    version: version,
    sourcemap_group: N,
    env: "external",
    user_bucket: user_bucket,
    origin: origin,
    host_platform: I(),
    host_os_release: host_os_release,
    host_name_redacted: zht().slice(0, 12),
    entrypoint: entrypoint,
    node_version: process.versions.node,
    bun_version: "1.4.4",
    ...(model && {
      model: model
    }),
    error_frames: error_frames,
    feature_flags: U()
  };
}
var K = new Set(["APIUserAbortError", "AuthenticationError", "McpSessionExpiredError"]),
  V = [{
    messagePrefix: "File does not exist",
    topFrameIncludes: "FileReadTool.ts"
  }],
  W = [{
    topFile: "node:net",
    topFunction: "internalConnectMultipleTimeout"
  }, {
    topFile: "node:_http_server",
    topFunction: "#onClose"
  }];
function z(e) {
  let r = nmn(e, 20),
    o = r[0];
  if (!o || r.some(aXn)) return !1;
  return W.some(item => o.file === item.topFile && o.function === item.topFunction);
}
function Y() {
  return a.CLAUDE_CODE_REMOTE === !0 || Boolean(a.CLAUDE_CODE_REMOTE_SESSION_ID) || Boolean(a.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE);
}
function q(e, r) {
  if (K.has(r)) return !0;
  if (GW() && !Y() && Ts(e) && e.code !== void 0 && kqo.has(e.code) && (e.syscall === "mkdir" || e.syscall === "open") && I() !== "windows") return !0;
  let o = e.message ?? "";
  return V.some(item => o.startsWith(item.messagePrefix) && (e.stack?.split(`
`).find(t => t.trim().startsWith("at ")) ?? "").includes(item.topFrameIncludes));
}
function X(e) {
  let r = /^(\d+)\.(\d+)/.exec(e);
  return r ? `${r[1]}.${r[2]}` : "unknown";
}
function eUe(e, r = "logError") {
  if (!fUs()) return;
  try {
    let o = H(e),
      n = Sgo(o);
    if (r === "logError" && q(o, n)) return;
    if ((r === "unhandled_rejection" || r === "uncaught_exception") && z(o)) return;
    if (CPo()) return;
    let t = G(o, r, n);
    RPo(t);
  } catch {}
}
export { Sgo, eUe };