// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { d, k } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { we } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { $c, i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { St } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { l0 } from "B:/~BUN/root/chunk-gq1er5y2.js";
import { spawn as f } from "child_process";
import { isAbsolute as v } from "path";
import { createInterface as E } from "readline";
var binary_2 = "/root/.local/bin/vitals-emitter-guest",
  _ = "vitals-emitter-guest",
  o = 5000,
  l = 1000,
  p = 30000;
async function n4n(e) {
  let {
    log: log
  } = e;
  try {
    if (i.CLAUDE_CODE_DISABLE_VITALS_EMITTER || St()) return log("[vitals] kill switch or essential-traffic-only set; guest vitals disabled"), null;
    let t = await w(e);
    if (!t) return null;
    let s = new u(t.binary, t.viaFallback, e);
    return await s.launch(), s.disabled ? null : s;
  } catch (error) {
    return log(`[vitals] not started: ${d(error)}`), null;
  }
}
async function w({
  binaryResolution: binaryResolution,
  log: log_2
}) {
  let t = i.VITALS_EMITTER_BIN;
  if (t && !v(t)) return log_2(`[vitals] VITALS_EMITTER_BIN must be an absolute path (got ${t}); guest vitals disabled`), null;
  switch (binaryResolution) {
    case "pinned":
      if (!t) return log_2("[vitals] VITALS_EMITTER_BIN not set; guest vitals disabled (this launcher does not search PATH)"), null;
      return {
        binary: t,
        viaFallback: !1
      };
    case "search":
      {
        let binary = t || (await $c(_));
        return binary ? {
          binary: binary,
          viaFallback: !1
        } : {
          binary: binary_2,
          viaFallback: !0
        };
      }
  }
}
class u {
  binary;
  binaryViaFallback;
  options;
  child = null;
  spawnedAt = 0;
  respawnTimer = null;
  nextBackoffMs = l;
  stopping = !1;
  disabled = !1;
  reportedOk = !1;
  reportedUnexpectedExit = !1;
  constructor(e, n, t) {
    this.binary = e;
    this.binaryViaFallback = n;
    this.options = t;
  }
  async stop() {
    if (this.stopping = !0, this.respawnTimer) clearTimeout(this.respawnTimer), this.respawnTimer = null;
    let child = this.child;
    if (!child) return;
    let promise = new Promise(s => {
      child.once("exit", () => s()), child.once("error", () => s());
    });
    child.kill("SIGTERM");
    let t = setTimeout(s => s.kill("SIGKILL"), o, child);
    t.unref(), await we(promise, 2 * o), clearTimeout(t);
  }
  async launch() {
    let {
        sessionId: sessionId,
        apiBaseUrl: apiBaseUrl,
        tokenFilePath: tokenFilePath,
        log: log_3
      } = this.options,
      r;
    try {
      r = f(this.binary, ["--session-id", sessionId, "--api-url", apiBaseUrl, "--token-file", tokenFilePath], {
        cwd: void 0,
        env: y(),
        stdio: ["pipe", "ignore", "pipe"],
        windowsHide: !0
      });
    } catch (error) {
      log_3(`[vitals] spawn threw: ${d(error)}; guest vitals disabled for this session`), this.disabled = !0;
      return;
    }
    if (l0(r.pid), this.child = r, this.spawnedAt = Date.now(), r.stdin?.on("error", () => {}), r.on("error", a => this.onChildGone(r, a)), r.on("exit", (a, h) => this.onChildGone(r, null, `exited (code=${a} signal=${h})`)), r.on("spawn", () => {
      if (log_3(`[vitals] spawned ${this.binary} pid=${r.pid}`), !this.reportedOk) this.reportedOk = !0, g("ccr_vitals_emitter");
    }), r.stderr) E({
      input: r.stderr
    }).on("line", a => log_3(`[vitals] ${a}`));
    await new Promise(a => {
      r.once("spawn", () => a()), r.once("error", () => a());
    });
  }
  onChildGone(e, n, t = `spawn error: ${n?.message}`) {
    if (this.child !== e) return;
    this.child = null, e.stdin?.destroy();
    let {
      log: log_4
    } = this.options;
    if (this.stopping) {
      log_4(`[vitals] emitter stopped (${t})`);
      return;
    }
    if (n) {
      let r = k(n);
      if (r === "EAGAIN" || r === "ENOMEM") {
        log_4(`[vitals] transient spawn failure (${r}); respawning`), this.scheduleRespawn();
        return;
      }
      if (this.disabled = !0, r === "ENOENT" || r === "EACCES" && this.binaryViaFallback) log_4(`[vitals] ${this.binary} not found; guest vitals disabled for this session`);else log_4(`[vitals] ${t}; guest vitals disabled for this session`), m("ccr_vitals_emitter", "spawn_failed");
      return;
    }
    if (log_4(`[vitals] emitter ${t}`), !this.reportedUnexpectedExit) this.reportedUnexpectedExit = !0, c("ccr_vitals_emitter", "exited_unexpectedly");
    if (Date.now() - this.spawnedAt > p) this.nextBackoffMs = l;
    this.scheduleRespawn();
  }
  scheduleRespawn() {
    let nextBackoffMs = this.nextBackoffMs;
    this.nextBackoffMs = Math.min(nextBackoffMs * 2, p), this.options.log(`[vitals] respawning in ${nextBackoffMs}ms`), this.respawnTimer = setTimeout(() => {
      this.respawnTimer = null, this.launch();
    }, nextBackoffMs), this.respawnTimer.unref();
  }
}
function y() {
  let e = {
      USER_TYPE: "external",
      NODE_ENV: "production",
      VITALS_CLI_VERSION: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.319",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-11-05T18:14:18Z",
        GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
        HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "win32"
      }.VERSION
    },
    n = {
      PATH: i.PATH,
      HOME: i.HOME,
      TMPDIR: i.TMPDIR,
      HTTPS_PROXY: i.HTTPS_PROXY,
      https_proxy: i.https_proxy,
      HTTP_PROXY: i.HTTP_PROXY,
      http_proxy: i.http_proxy,
      NO_PROXY: i.NO_PROXY,
      no_proxy: i.no_proxy,
      SSL_CERT_FILE: i.SSL_CERT_FILE
    };
  for (let [t, s] of Object.entries(n)) if (s !== void 0) e[t] = s;
  return e;
}
export { n4n };