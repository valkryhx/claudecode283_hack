// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { sf, mKn } from "B:/~BUN/root/chunk-game8aqv.js";
import { xr, It, bf, lf, FC, pqn, lun, urt, dun, frt, cun, uun, fun, pun, v4e, aK, F, tr, IKs, x0, LKs, ci } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { yf, aY } from "B:/~BUN/root/chunk-65j2302z.js";
import { Xp } from "B:/~BUN/root/chunk-c79wfkj4.js";
import { Xta, vFr, Jta, Qta, N2n, Zta } from "B:/~BUN/root/chunk-3mm90xb6.js";
import { f3i, p3i, at, rt, Evo, Ryt, E4, Y1, zIs, dH, Y$t } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { hqi } from "B:/~BUN/root/chunk-mwy4xyee.js";
import { l$n, CCs, RCs } from "B:/~BUN/root/chunk-ajpcs9fs.js";
import { IAe, $t } from "B:/~BUN/root/chunk-zpne314q.js";
import { createHash as R } from "crypto";
import { release as y } from "os";
var service = "claude-code-error-tracking";
function k(sourcemapGroup) {
  return sourcemapGroup ? {
    version: `${{
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.319",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-11-05T18:14:18Z",
      GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION}_${sourcemapGroup}`,
    sourcemapGroup: sourcemapGroup
  } : {
    version: {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.319",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-11-05T18:14:18Z",
      GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION,
    sourcemapGroup: "none"
  };
}
var D = 30;
function O() {
  let e = l$n();
  if (e.cachedUserBucket !== void 0) return e.cachedUserBucket;
  let r = dH(),
    o = R("sha256").update(r).digest("hex");
  return e.cachedUserBucket = parseInt(o.slice(0, 8), 16) % D, e.cachedUserBucket;
}
function v(e, r) {
  let o = r.slice(0, 3).map(item => Qta(item) ? `${item.function ?? "?"}@${item.file}:${item.line ?? "?"}:${item.column ?? "?"}` : `${item.function ?? "?"}@${Xta(item.file)}`).join("|");
  return R("sha256").update(`${e}
${o}`).digest("hex").slice(0, 16);
}
var b = new Set(IAe);
function M() {
  try {
    let e = at();
    if (!e) return;
    let r = rt($t(e), {
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
    let e = Y1(),
      r = zIs(),
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
function L(e) {
  let issues = e.issues;
  if (!Array.isArray(issues) || issues.length === 0) return;
  let o = issues.map(item => item?.code).filter(item => typeof item === "string" && /^[a-z_]{1,40}$/.test(item));
  return `${issues.length} issue(s): ${o.join(",")}`;
}
function B() {}
var w = !B.name.startsWith("errorTrackingIdentifierProbe"),
  j = [["APIUserAbortError", bf], ["APIConnectionTimeoutError", FC], ["APIConnectionError", lf], ["BadRequestError", lun], ["AuthenticationError", urt], ["PermissionDeniedError", dun], ["NotFoundError", frt], ["ConflictError", cun], ["UnprocessableEntityError", uun], ["RateLimitError", fun], ["InternalServerError", pun], ["APIError", It], ["RetryableError", pqn], ["WorkloadIdentityError", Xp], ["AnthropicError", xr], ["ClaudeError", v4e]],
  S = /_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS$/;
function $ls(e, r = w) {
  let o = typeof e.constructor?.name === "string" ? e.constructor.name.replace(S, "") : void 0,
    n = r && e instanceof v4e && e.name === o,
    c = ((typeof e.name === "string" && e.name !== "Error" && !n ? e.name : void 0) || (!r && x0(o) !== void 0 ? o : j.find(([, a]) => e instanceof a)?.[0]) || "Error").replace(S, "");
  return x0(c) ?? "Error";
}
var G = 20;
function K(e, origin, o) {
  let n = N2n(e),
    t = Jta(n),
    error_frames = n.slice(0, G),
    c = aK(e),
    message = t && c === void 0 ? `thrown outside the Claude Code bundle (${o})` : p3i(f3i(e, c ?? L(e) ?? e.message ?? String(e))),
    A = Zta({
      name: o,
      message: message
    }, error_frames),
    {
      version: version,
      sourcemapGroup: C
    } = k({
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.319",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-11-05T18:14:18Z",
      GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.DD_SOURCEMAP_GROUP),
    fingerprint = v(o, error_frames),
    user_bucket = O(),
    model = M(),
    T = typeof Bun < "u" && !0,
    m = tr(e),
    p = IKs(e),
    entrypoint = i.CLAUDE_CODE_ENTRYPOINT === void 0 ? "cli" : yf() ?? "other",
    d = E4(),
    g = mKn(),
    _ = Evo(),
    host_os_release = X(y());
  return {
    ddtags: [`service:${service}`, "team:claude-code", `version:${version}`, "env:external", `origin:${origin}`, `platform:${x()}`, `os_release:${host_os_release}`, `user_bucket:${user_bucket}`, `entrypoint:${entrypoint}`, `node_version:${process.versions.node}`, "bun_version:1.4.4", `is_native_runtime:${T}`, ...(model ? [`model:${model}`] : []), ...(m ? [`error_code:${m}`] : []), ...(p !== void 0 ? [`child_exit_status:${p}`] : []), ...(d ? [`session_kind:${d}`] : []), ...(d ? [`has_attacher:${sf() ? "1" : "0"}`] : []), ...(g ? [`renderer_mode:${g}`] : []), ...(_ ? [`remote_control_lane:${_}`] : []), ...(Ryt() ? ["projects_session:1"] : [])].join(","),
    service: service,
    hostname: "claude-code",
    status: "error",
    message: `${o}: ${message}`.slice(0, 4000),
    timestamp: new Date().toISOString(),
    error: {
      kind: o,
      message: message.slice(0, 4000),
      stack: A.slice(0, 16000),
      fingerprint: fingerprint,
      handling: origin === "logError" ? "handled" : "unhandled"
    },
    version: version,
    sourcemap_group: C,
    env: "external",
    user_bucket: user_bucket,
    origin: origin,
    host_platform: x(),
    host_os_release: host_os_release,
    host_name_redacted: Y$t().slice(0, 12),
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
var V = new Set(["APIUserAbortError", "AuthenticationError", "McpSessionExpiredError"]),
  W = [{
    messagePrefix: "File does not exist",
    topFrameIncludes: "FileReadTool.ts"
  }],
  z = [{
    topFile: "node:net",
    topFunction: "internalConnectMultipleTimeout"
  }, {
    topFile: "node:_http_server",
    topFunction: "#onClose"
  }];
function H(e) {
  let r = N2n(e, 20),
    o = r[0];
  if (!o || r.some(vFr)) return !1;
  return z.some(item => o.file === item.topFile && o.function === item.topFunction);
}
function Y() {
  return i.CLAUDE_CODE_REMOTE === !0 || Boolean(i.CLAUDE_CODE_REMOTE_SESSION_ID) || Boolean(i.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE);
}
function q(e, r) {
  if (V.has(r)) return !0;
  if (aY() && !Y() && ci(e) && e.code !== void 0 && LKs.has(e.code) && (e.syscall === "mkdir" || e.syscall === "open") && x() !== "windows") return !0;
  let o = e.message ?? "";
  return W.some(item => o.startsWith(item.messagePrefix) && (e.stack?.split(`
`).find(t => t.trim().startsWith("at ")) ?? "").includes(item.topFrameIncludes));
}
function X(e) {
  let r = /^(\d+)\.(\d+)/.exec(e);
  return r ? `${r[1]}.${r[2]}` : "unknown";
}
function YEe(e, r = "logError") {
  try {
    if (!hqi()) return;
    let o = F(e),
      n = $ls(o);
    if (r === "logError" && q(o, n)) return;
    if ((r === "unhandled_rejection" || r === "uncaught_exception") && H(o)) return;
    if (CCs()) return;
    let t = K(o, r, n);
    RCs(t);
  } catch {}
}
export { $ls, YEe };