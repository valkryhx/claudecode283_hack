// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { md, njt } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { Wn, Ot, _u, Np, Y$, ogt, z9e, V_e, G9e, q_e, V9e, q9e, K9e, Y9e, K_e, hQ, te, ao, wKr, sP, TKr, as } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { O } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { Ld, rH } from "B:/~BUN/root/chunk-snmb1kqg.js";
import { oUo, sUo, iUo, aUo, yzr, lUo } from "B:/~BUN/root/chunk-py7yqpgt.js";
import { QOo, ZOo, it, Be, MKn, Sut, aJ, JFe, eFr, gD, LYe } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { eIo } from "B:/~BUN/root/chunk-6k625ztj.js";
import { DLt, BMr, jMr } from "B:/~BUN/root/chunk-2m5rfp86.js";
import { bne, Jt } from "B:/~BUN/root/chunk-r833zsf7.js";
import { fc } from "B:/~BUN/root/chunk-g1mh72ry.js";
import { createHash as R } from "crypto";
import { release as y } from "os";
var service = "claude-code-error-tracking";
function T(sourcemapGroup) {
  return sourcemapGroup ? {
    version: `${{
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.283",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-09-25T00:44:42Z",
      GIT_SHA: "4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION}_${sourcemapGroup}`,
    sourcemapGroup: sourcemapGroup
  } : {
    version: {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.283",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-09-25T00:44:42Z",
      GIT_SHA: "4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION,
    sourcemapGroup: "none"
  };
}
var F = 30;
function k() {
  let e = DLt();
  if (e.cachedUserBucket !== void 0) return e.cachedUserBucket;
  let r = gD(),
    n = R("sha256").update(r).digest("hex");
  return e.cachedUserBucket = parseInt(n.slice(0, 8), 16) % F, e.cachedUserBucket;
}
function D(e, r) {
  let n = r.slice(0, 3).map(item => aUo(item) ? `${item.function ?? "?"}@${item.file}:${item.line ?? "?"}:${item.column ?? "?"}` : `${item.function ?? "?"}@${oUo(item.file)}`).join("|");
  return R("sha256").update(`${e}
${n}`).digest("hex").slice(0, 16);
}
var v = new Set(bne);
function b() {
  try {
    let e = it();
    if (!e) return;
    let r = Be(Jt(e), {
      identity: !0
    });
    return v.has(r) ? r : "other";
  } catch {
    return;
  }
}
var P = 50;
function M() {
  try {
    let e = JFe(),
      r = eFr(),
      n = {},
      o = 0;
    for (let [t, s] of Object.entries(e)) if (typeof s === "boolean" && r.has(t)) {
      if (n[t] = s, ++o >= P) break;
    }
    return n;
  } catch {
    return {};
  }
}
function U(e) {
  let issues = e.issues;
  if (!Array.isArray(issues) || issues.length === 0) return;
  let n = issues.map(item => item?.code).filter(item => typeof item === "string" && /^[a-z_]{1,40}$/.test(item));
  return `${issues.length} issue(s): ${n.join(",")}`;
}
function x() {}
var L = !x.name.startsWith("errorTrackingIdentifierProbe"),
  B = [["APIUserAbortError", _u], ["APIConnectionTimeoutError", Y$], ["APIConnectionError", Np], ["BadRequestError", z9e], ["AuthenticationError", V_e], ["PermissionDeniedError", G9e], ["NotFoundError", q_e], ["ConflictError", V9e], ["UnprocessableEntityError", q9e], ["RateLimitError", K9e], ["InternalServerError", Y9e], ["APIError", Ot], ["RetryableError", ogt], ["WorkloadIdentityError", fc], ["AnthropicError", Wn], ["ClaudeError", K_e]],
  S = /_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS$/;
function w(e, r = L) {
  let n = typeof e.constructor?.name === "string" ? e.constructor.name.replace(S, "") : void 0,
    o = r && e instanceof K_e && e.name === n,
    i = ((typeof e.name === "string" && e.name !== "Error" && !o ? e.name : void 0) || (!r && sP(n) !== void 0 ? n : B.find(([, u]) => e instanceof u)?.[0]) || "Error").replace(S, "");
  return sP(i) ?? "Error";
}
function j(e, origin, n) {
  let o = yzr(e),
    t = iUo(o),
    s = hQ(e),
    message = t && s === void 0 ? `thrown outside the Claude Code bundle (${n})` : ZOo(QOo(e, s ?? U(e) ?? e.message ?? String(e))),
    u = lUo({
      name: n,
      message: message
    }, o),
    {
      version: version,
      sourcemapGroup: A
    } = T({
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.283",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-09-25T00:44:42Z",
      GIT_SHA: "4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.DD_SOURCEMAP_GROUP),
    fingerprint = D(n, o),
    user_bucket = k(),
    model = b(),
    N = typeof Bun < "u" && !0,
    m = ao(e),
    p = wKr(e),
    entrypoint = a.CLAUDE_CODE_ENTRYPOINT === void 0 ? "cli" : Ld() ?? "other",
    d = aJ(),
    g = njt(),
    _ = MKn(),
    host_os_release = Y(y());
  return {
    ddtags: [`service:${service}`, "team:claude-code", `version:${version}`, "env:external", `origin:${origin}`, `platform:${O()}`, `os_release:${host_os_release}`, `user_bucket:${user_bucket}`, `entrypoint:${entrypoint}`, `node_version:${process.versions.node}`, "bun_version:1.4.3", `is_native_runtime:${N}`, ...(model ? [`model:${model}`] : []), ...(m ? [`error_code:${m}`] : []), ...(p !== void 0 ? [`child_exit_status:${p}`] : []), ...(d ? [`session_kind:${d}`] : []), ...(d ? [`has_attacher:${md() ? "1" : "0"}`] : []), ...(g ? [`renderer_mode:${g}`] : []), ...(_ ? [`remote_control_lane:${_}`] : []), ...(Sut() ? ["projects_session:1"] : [])].join(","),
    service: service,
    hostname: "claude-code",
    status: "error",
    message: `${n}: ${message}`.slice(0, 4000),
    timestamp: new Date().toISOString(),
    error: {
      kind: n,
      message: message.slice(0, 4000),
      stack: u.slice(0, 16000),
      fingerprint: fingerprint,
      handling: origin === "logError" ? "handled" : "unhandled"
    },
    version: version,
    sourcemap_group: A,
    env: "external",
    user_bucket: user_bucket,
    origin: origin,
    host_platform: O(),
    host_os_release: host_os_release,
    host_name_redacted: LYe().slice(0, 12),
    entrypoint: entrypoint,
    node_version: process.versions.node,
    bun_version: "1.4.3",
    ...(model && {
      model: model
    }),
    error_frames: o.slice(0, 20),
    feature_flags: M()
  };
}
var G = new Set(["APIUserAbortError", "AuthenticationError", "McpSessionExpiredError"]),
  K = [{
    messagePrefix: "File does not exist",
    topFrameIncludes: "FileReadTool.ts"
  }],
  V = [{
    topFile: "node:net",
    topFunction: "internalConnectMultipleTimeout"
  }, {
    topFile: "node:_http_server",
    topFunction: "#onClose"
  }];
function W(e) {
  let r = yzr(e, 20),
    n = r[0];
  if (!n || r.some(sUo)) return !1;
  return V.some(item => n.file === item.topFile && n.function === item.topFunction);
}
function z() {
  return a.CLAUDE_CODE_REMOTE === !0 || Boolean(a.CLAUDE_CODE_REMOTE_SESSION_ID) || Boolean(a.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE);
}
function H(e, r) {
  if (G.has(r)) return !0;
  if (rH() && !z() && as(e) && e.code !== void 0 && TKr.has(e.code) && (e.syscall === "mkdir" || e.syscall === "open") && O() !== "windows") return !0;
  let n = e.message ?? "";
  return K.some(item => n.startsWith(item.messagePrefix) && (e.stack?.split(`
`).find(t => t.trim().startsWith("at ")) ?? "").includes(item.topFrameIncludes));
}
function Y(e) {
  let r = /^(\d+)\.(\d+)/.exec(e);
  return r ? `${r[1]}.${r[2]}` : "unknown";
}
function zke(e, r = "logError") {
  if (!eIo()) return;
  try {
    let n = te(e),
      o = w(n);
    if (r === "logError" && H(n, o)) return;
    if ((r === "unhandled_rejection" || r === "uncaught_exception") && W(n)) return;
    if (BMr()) return;
    let t = j(n, r, o);
    jMr(t);
  } catch {}
}
export { zke };