// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { l, v } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { nt } from "B:/~BUN/root/chunk-17wqwt36.js";
import { sc, a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { It } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { tT } from "B:/~BUN/root/chunk-py7yqpgt.js";
import { spawn as f } from "child_process";
import { isAbsolute as E } from "path";
import { createInterface as T } from "readline";
var binary_2 = "/root/.local/bin/vitals-emitter-guest",
  y = "vitals-emitter-guest",
  o = 5000,
  d = 1000,
  c = 30000;
async function iWt(e) {
  let {
    log: log
  } = e;
  try {
    if (a.CLAUDE_CODE_DISABLE_VITALS_EMITTER || It()) return log("[vitals] kill switch or essential-traffic-only set; guest vitals disabled"), null;
    let t = await b(e);
    if (!t) return null;
    let i = new u(t.binary, t.viaFallback, e);
    return await i.launch(), i.disabled ? null : i;
  } catch (error) {
    return log(`[vitals] not started: ${l(error)}`), null;
  }
}
async function b({
  binaryResolution: binaryResolution,
  log: log_2
}) {
  let t = a.VITALS_EMITTER_BIN;
  if (t && !E(t)) return log_2(`[vitals] VITALS_EMITTER_BIN must be an absolute path (got ${t}); guest vitals disabled`), null;
  switch (binaryResolution) {
    case "pinned":
      if (!t) return log_2("[vitals] VITALS_EMITTER_BIN not set; guest vitals disabled (this launcher does not search PATH)"), null;
      return {
        binary: t,
        viaFallback: !1
      };
    case "search":
      {
        let binary = t || (await sc(y));
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
  nextBackoffMs = d;
  stopping = !1;
  disabled = !1;
  reportedOk = !1;
  reportedUnexpectedExit = !1;
  constructor(e, r, t) {
    this.binary = e;
    this.binaryViaFallback = r;
    this.options = t;
  }
  async stop() {
    if (this.stopping = !0, this.respawnTimer) clearTimeout(this.respawnTimer), this.respawnTimer = null;
    let child = this.child;
    if (!child) return;
    let promise = new Promise(i => {
      child.once("exit", () => i()), child.once("error", () => i());
    });
    child.kill("SIGTERM");
    let t = setTimeout(i => i.kill("SIGKILL"), o, child);
    t.unref(), await nt(promise, 2 * o), clearTimeout(t);
  }
  async launch() {
    let {
        sessionId: sessionId,
        apiBaseUrl: apiBaseUrl,
        tokenFilePath: tokenFilePath,
        log: log_3
      } = this.options,
      s;
    try {
      s = f(this.binary, ["--session-id", sessionId, "--api-url", apiBaseUrl, "--token-file", tokenFilePath], {
        cwd: void 0,
        env: g(),
        stdio: ["pipe", "ignore", "pipe"],
        windowsHide: !0
      });
    } catch (error) {
      log_3(`[vitals] spawn threw: ${l(error)}; guest vitals disabled for this session`), this.disabled = !0;
      return;
    }
    if (tT(s.pid), this.child = s, this.spawnedAt = Date.now(), s.stdin?.on("error", () => {}), s.on("error", n => this.onChildGone(s, n)), s.on("exit", (n, h) => this.onChildGone(s, null, `exited (code=${n} signal=${h})`)), s.on("spawn", () => {
      if (log_3(`[vitals] spawned ${this.binary} pid=${s.pid}`), !this.reportedOk) this.reportedOk = !0, _("ccr_vitals_emitter");
    }), s.stderr) T({
      input: s.stderr
    }).on("line", n => log_3(`[vitals] ${n}`));
    await new Promise(n => {
      s.once("spawn", () => n()), s.once("error", () => n());
    });
  }
  onChildGone(e, r, t = `spawn error: ${r?.message}`) {
    if (this.child !== e) return;
    this.child = null, e.stdin?.destroy();
    let {
      log: log_4
    } = this.options;
    if (this.stopping) {
      log_4(`[vitals] emitter stopped (${t})`);
      return;
    }
    if (r) {
      let s = v(r);
      if (s === "EAGAIN" || s === "ENOMEM") {
        log_4(`[vitals] transient spawn failure (${s}); respawning`), this.scheduleRespawn();
        return;
      }
      if (this.disabled = !0, s === "ENOENT" || s === "EACCES" && this.binaryViaFallback) log_4(`[vitals] ${this.binary} not found; guest vitals disabled for this session`);else log_4(`[vitals] ${t}; guest vitals disabled for this session`), m("ccr_vitals_emitter", "spawn_failed");
      return;
    }
    if (log_4(`[vitals] emitter ${t}`), !this.reportedUnexpectedExit) this.reportedUnexpectedExit = !0, p("ccr_vitals_emitter", "exited_unexpectedly");
    if (Date.now() - this.spawnedAt > c) this.nextBackoffMs = d;
    this.scheduleRespawn();
  }
  scheduleRespawn() {
    let nextBackoffMs = this.nextBackoffMs;
    this.nextBackoffMs = Math.min(nextBackoffMs * 2, c), this.options.log(`[vitals] respawning in ${nextBackoffMs}ms`), this.respawnTimer = setTimeout(() => {
      this.respawnTimer = null, this.launch();
    }, nextBackoffMs), this.respawnTimer.unref();
  }
}
function g() {
  let e = {
      USER_TYPE: "external",
      NODE_ENV: "production",
      VITALS_CLI_VERSION: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.283",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-09-25T00:44:42Z",
        GIT_SHA: "4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",
        HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "win32"
      }.VERSION
    },
    r = {
      PATH: a.PATH,
      HOME: a.HOME,
      TMPDIR: a.TMPDIR,
      HTTPS_PROXY: a.HTTPS_PROXY,
      https_proxy: a.https_proxy,
      HTTP_PROXY: a.HTTP_PROXY,
      http_proxy: a.http_proxy,
      NO_PROXY: a.NO_PROXY,
      no_proxy: a.no_proxy,
      SSL_CERT_FILE: a.SSL_CERT_FILE
    };
  for (let [t, i] of Object.entries(r)) if (i !== void 0) e[t] = i;
  return e;
}
export { iWt };