// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import "B:/~BUN/root/chunk-bvn0mpsk.js";
import { Ne } from "B:/~BUN/root/chunk-ekrhn4q1.js";
import { Ide, q, j } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import "B:/~BUN/root/chunk-dkxhwhft.js";
import { c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { P, J$, hQ, te, l, v, ao, B, Et } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Q, Ht, nt } from "B:/~BUN/root/chunk-17wqwt36.js";
import { xn } from "B:/~BUN/root/chunk-54p0h65d.js";
import { b, J, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Dyn, m9n, Se, fKr } from "B:/~BUN/root/chunk-4p6z9qq1.js";
import "B:/~BUN/root/chunk-0fnha6bz.js";
import { Ul, Jd } from "B:/~BUN/root/chunk-y04k89s2.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import "B:/~BUN/root/chunk-6j6ra85q.js";
import { GI } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { sre } from "B:/~BUN/root/chunk-zksmb712.js";
import "B:/~BUN/root/chunk-zs3ycjed.js";
import "B:/~BUN/root/chunk-e7p62566.js";
import { WI, QAe, Kx, nS } from "B:/~BUN/root/chunk-zv4xh2j0.js";
import { Y6, Zi, eLo } from "B:/~BUN/root/chunk-bt3h0syz.js";
import { Ae } from "B:/~BUN/root/chunk-5w2ecytn.js";
import "B:/~BUN/root/chunk-06ra9xdn.js";
import "B:/~BUN/root/chunk-rwwxddqq.js";
import { tae as protocolVersion, wS } from "B:/~BUN/root/chunk-aa7kpy4p.js";
import "B:/~BUN/root/chunk-2swveyqa.js";
import { Qt } from "B:/~BUN/root/chunk-bpp59nyd.js";
import "B:/~BUN/root/chunk-1wfkh4zw.js";
import "B:/~BUN/root/chunk-bcf88xyn.js";
import "B:/~BUN/root/chunk-z8k0q871.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { _, p, Or } from "B:/~BUN/root/chunk-51n463p1.js";
import "B:/~BUN/root/chunk-zk6g628v.js";
import "B:/~BUN/root/chunk-5px6g0cn.js";
import { Jo } from "B:/~BUN/root/chunk-tsjnk8ma.js";
import { q$e } from "B:/~BUN/root/chunk-ah3egpyh.js";
import "B:/~BUN/root/chunk-snmb1kqg.js";
import "B:/~BUN/root/chunk-65064145.js";
import "B:/~BUN/root/chunk-ht635kqk.js";
import "B:/~BUN/root/chunk-y72v2pst.js";
import "B:/~BUN/root/chunk-1f9marcm.js";
import "B:/~BUN/root/chunk-290k5gh5.js";
import "B:/~BUN/root/chunk-7zje4z8c.js";
import "B:/~BUN/root/chunk-nr0fnbpc.js";
import { Hn } from "B:/~BUN/root/chunk-hqrtayw5.js";
import { W8t, C2e as capabilities, R2e, Wpr } from "B:/~BUN/root/chunk-m1w9mh9e.js";
import { cAe, kJ, DN } from "B:/~BUN/root/chunk-2d028bdz.js";
import { aQe, lQe } from "B:/~BUN/root/chunk-wt7pev9k.js";
import "B:/~BUN/root/chunk-ymahamqq.js";
import { oSt } from "B:/~BUN/root/chunk-ch7xbham.js";
import { hSe } from "B:/~BUN/root/chunk-435bh2r7.js";
import "B:/~BUN/root/chunk-bcr826es.js";
import "B:/~BUN/root/chunk-esqb9g1a.js";
import "B:/~BUN/root/chunk-r833zsf7.js";
import "B:/~BUN/root/chunk-w5bkq1td.js";
import "B:/~BUN/root/chunk-t1t358ee.js";
import { o, u } from "B:/~BUN/root/chunk-n8qdr73v.js";
import "B:/~BUN/root/chunk-mjdkd2h9.js";
import "B:/~BUN/root/chunk-81280fc2.js";
import "B:/~BUN/root/chunk-0bx1tycm.js";
import "B:/~BUN/root/chunk-tndjj29v.js";
import { be } from "B:/~BUN/root/chunk-yv67t8hr.js";
var Te = 500,
  we = 1048576;
var ws = [200, 800];
class Ve {
  send;
  pending = [];
  pendingEntries = 0;
  pendingBytes = 0;
  flushPromise = null;
  sendTimeoutMs;
  onError;
  maxPendingEntries;
  maxPendingBytes;
  backoffMs;
  constructor(e, s) {
    this.send = e;
    let {
      sendTimeoutMs = 60000,
      onError: onError,
      maxPendingEntries = Te,
      maxPendingBytes = we,
      backoffMs = ws
    } = s ?? {};
    this.sendTimeoutMs = sendTimeoutMs, this.onError = onError, this.maxPendingEntries = maxPendingEntries, this.maxPendingBytes = maxPendingBytes, this.backoffMs = backoffMs;
  }
  enqueue(filePath, entries) {
    let bytes = b(entries).length;
    if (this.pending.push({
      filePath: filePath,
      entries: entries,
      bytes: bytes
    }), this.pendingEntries += entries.length, this.pendingBytes += bytes, this.pendingEntries > this.maxPendingEntries || this.pendingBytes > this.maxPendingBytes) this.flushPromise = this.drain(), this.flushPromise.catch(() => {});
  }
  async flush() {
    let e = this.drain();
    if (this.flushPromise = e, await e, this.flushPromise === e) this.flushPromise = null;
  }
  async drain() {
    let flushPromise = this.flushPromise,
      s = this.pending.splice(0);
    if (this.pendingEntries = 0, this.pendingBytes = 0, flushPromise) await flushPromise;
    if (s.length === 0) return;
    await this.doFlush(s);
  }
  async doFlush(e) {
    let s = new Map();
    for (let r of e) {
      let n = s.get(r.filePath);
      if (n) n.push(...r.entries);else s.set(r.filePath, r.entries.slice());
    }
    for (let [r, n] of s) await this.sendWithRetry(r, n);
  }
  async sendWithRetry(e, s) {
    let r = this.backoffMs.length + 1,
      n = `SessionStore.append() timed out after ${this.sendTimeoutMs}ms for ${e}`,
      a,
      d = 1;
    for (; d <= r; d++) try {
      await Ht(this.send(e, s), this.sendTimeoutMs, n), a = void 0;
      break;
    } catch (error) {
      if (a = te(error), a.message === n) break;
      let g = this.backoffMs[d - 1];
      if (g === void 0) break;
      await Q(g);
    }
    if (a) {
      t(`[TranscriptMirrorBatcher] flush failed for ${e} after ${d} attempt(s): ${a}`, {
        level: "error"
      });
      try {
        this.onError?.(e, a);
      } catch (error) {
        t(`[TranscriptMirrorBatcher] onError callback threw: ${error}`, {
          level: "error"
        });
      }
    }
  }
}
var Pt;
(function (e) {
  e.Completable = "McpCompletable";
})(Pt || (Pt = {}));
import { randomUUID as Ts } from "crypto";
import { join as Tt } from "path";
class It {
  debugFilePath = void 0;
  initPromise = null;
  logStem = null;
}
var Is = new q(() => new It());
function Mt() {
  return Is.of(j().host);
}
function Dt(e) {
  if (e.initPromise) return e.initPromise;
  if (!m9n("DEBUG_CLAUDE_AGENT_SDK")) return e.debugFilePath = null, e.initPromise = Promise.resolve(), e.initPromise;
  let s = Tt(Se(), "debug");
  return e.logStem = `sdk-${Ts()}`, e.debugFilePath = Tt(s, `${e.logStem}.txt`), process.stderr.write(`SDK debug logs: ${e.debugFilePath}
`), e.initPromise = Qt().mkdir(s).catch(() => {}), e.initPromise;
}
function Ms(e) {
  return e.logStem === null ? null : {
    namespace: "log",
    sessionId: e.logStem,
    channel: "debug"
  };
}
function xt() {
  let e = Mt();
  return Dt(e), e.debugFilePath ?? null;
}
function A(e, s) {
  let r = Mt();
  if (r.debugFilePath === null) return;
  let data = `${new Date().toISOString()} ${e}
`;
  Dt(r).then(() => {
    if (s !== void 0) {
      let d = Ms(r);
      if (d !== null) s.append(d, [{
        data: data
      }]).catch(() => {});
      return;
    }
    if (r.debugFilePath) Qt().append(r.debugFilePath, data).catch(() => {});
  });
}
var no = f(() => u({
  session_id: o(),
  ws_url: o(),
  work_dir: o().optional(),
  session_key: o().optional()
}));
import { execFile as sr } from "child_process";
import { randomUUID as rr } from "crypto";
import { mkdir as at, mkdtemp as Pa, readFile as nr, rm as ir, writeFile as Yt } from "fs/promises";
import { createRequire as or } from "module";
import { homedir as lt, tmpdir as ar } from "os";
import { dirname as Vt, isAbsolute as lr, join as D, posix as cr, resolve as ct, sep as dr, win32 as ur } from "path";
import { fileURLToPath as pr } from "url";
import { spawn as xs } from "child_process";
import { existsSync as Os } from "fs";
import { createInterface as As } from "readline";
import { StringDecoder as Us } from "string_decoder";
function Ds(e) {
  let s = e.trim();
  return s.startsWith("{") && s.endsWith("}");
}
function Ot(e, s) {
  let r = {
    ...e
  };
  if (!s) return r;
  let sandbox = s.enabled === !0 && s.failIfUnavailable === void 0 ? {
      ...s,
      failIfUnavailable: !0
    } : s,
    settings = r.settings;
  if (settings && !Ds(settings)) throw Error("Cannot use both a settings file path and the sandbox option. Include the sandbox configuration in your settings file instead.");
  let d = {
    sandbox: sandbox
  };
  if (settings) try {
    d = {
      ...J(settings),
      sandbox: sandbox
    };
  } catch {}
  return r.settings = b(d), r;
}
var js = 2000,
  Je = 2048,
  jt = "sdk-exit-after-stderr-drained",
  Fs = 200;
function Ye(e) {
  return e === "exit" ? jt : e;
}
class Ft {
  #e = new Set();
  #t = !1;
  #s = () => this.killAll();
  track(e) {
    if (this.#e.add(e), !this.#t) this.#t = !0, process.on("exit", this.#s);
  }
  untrack(e) {
    this.#e.delete(e);
  }
  isTracking(e) {
    return this.#e.has(e);
  }
  get size() {
    return this.#e.size;
  }
  killAll() {
    for (let e of this.#e) if (!e.killed) try {
      e.stdin.end();
    } catch {}
  }
  reset() {
    process.off("exit", this.#s), this.#t = !1, this.#e.clear();
  }
}
var De = new Ft(),
  Ls = /[(),\u0000-\u001f\u007f-\u009f]/;
function Ns(e) {
  if (typeof e !== "string" || e.trim() === "") throw Error("Skill names must be non-empty strings.");
  if (!Jd(e)) throw new P(`Invalid skill name ${b(e)}: the name contains an unpaired surrogate, which cannot survive the UTF-8 encoding of the CLI invocation; no skill discovered from the filesystem can have such a name.`, "skill name with unpaired surrogate rejected");
  if (e !== e.trim()) throw new P(`Invalid skill name ${b(e)}: leading or trailing whitespace is not allowed \u2014 the Skill tool trims the invoked name, so a padded rule can never match. Remove the padding.`, "skill name with surrounding whitespace rejected");
  if (Ls.test(e)) throw new P(`Invalid skill name ${b(e)}: parentheses, commas, and control characters are not allowed in skill names. Skill names match the skill's directory name (or 'plugin:skill' for plugin-qualified skills); rename the skill if its directory name contains these characters.`, "invalid skill name rejected");
  if (e === "*") throw Error("Invalid skill name '*': use skills: 'all' to enable every skill.");
  if (e.endsWith(":*") || e.endsWith(" *")) throw new P(`Invalid skill name ${b(e)}: wildcard-suffix names are not allowed; list each skill by its exact name.`, "wildcard-suffix skill name rejected");
  if (e.startsWith("/")) throw new P(`Invalid skill name ${b(e)}: skill names may not start with '/'. Skills are invoked as slash commands, but the skills option takes the skill's canonical name \u2014 the directory name, or 'plugin:skill'.`, "skill name with leading slash rejected");
  if (e.includes("\\\\")) throw new P(`Invalid skill name ${b(e)}: consecutive backslashes are not allowed \u2014 the permission-rule parser collapses escaped backslashes, so the rule would name a different skill. Rename the skill.`, "skill name with consecutive backslashes rejected");
  if (e.endsWith("\\")) throw new P(`Invalid skill name ${b(e)}: names may not end with an unpaired backslash.`, "skill name with unpaired trailing backslash rejected");
  return e;
}
class et {
  options;
  process;
  processStdin;
  processStdout;
  ready = !1;
  abortController;
  exitError;
  exitEventDelivered = !1;
  stderrTail = "";
  exitListeners = [];
  abortHandler;
  forwardedAbort = Hn();
  pendingWrites = [];
  pendingEndInput = !1;
  spawnResolve;
  spawnReject;
  spawnPromise;
  constructor(e) {
    this.options = e;
    if (this.abortController = e.abortController || Hn(), e.deferSpawn) this.spawnPromise = new Promise((s, r) => {
      this.spawnResolve = s, this.spawnReject = r;
    }), this.spawnPromise.catch(() => {});else this.initialize();
  }
  spawn() {
    try {
      this.initialize();
    } catch (error) {
      throw this.spawnAbort(te(error)), error;
    }
    let pendingWrites = this.pendingWrites;
    if (this.pendingWrites = [], this.spawnResolve) this.spawnResolve(), this.spawnResolve = void 0, this.spawnReject = void 0;
    for (let s of pendingWrites) this.write(s);
    if (this.pendingEndInput) this.pendingEndInput = !1, this.processStdin?.end();
  }
  spawnAbort(e) {
    if (this.spawnReject) this.spawnReject(e), this.spawnReject = void 0, this.spawnResolve = void 0, this.pendingWrites = [];
  }
  updateEnv(e) {
    if (this.options.env) Object.assign(this.options.env, e);else this.options.env = {
      ...e
    };
  }
  updateResume(e) {
    this.options.resume = e;
  }
  getDefaultExecutable() {
    return GI() ? "bun" : "node";
  }
  spawnLocalProcess(e) {
    let {
        command: command,
        args: args,
        cwd: cwd,
        env: env,
        signal: signal
      } = e,
      m = xs(command, args, {
        cwd: cwd,
        stdio: ["pipe", "pipe", "pipe"],
        signal: signal,
        env: env,
        windowsHide: !0
      }),
      g = new Us("utf8"),
      h = !1,
      w = !1,
      S = !1,
      k,
      T = Ne(env.DEBUG_CLAUDE_AGENT_SDK) || this.options.stderr !== void 0;
    m.stderr.on("data", I => {
      if (S) return;
      let M = g.write(I);
      if (this.stderrTail += M, this.stderrTail.length > 2 * Je) this.stderrTail = Ul(Y6(this.stderrTail), Je);
      if (T) A(M), this.options.stderr?.(M);
    }), m.stderr.on("error", I => {
      A(`[ProcessTransport] stderr read failed: ${I.code ?? I.message}`);
    });
    let E = () => {
      if (S) return;
      if (S = !0, k) clearTimeout(k);
      m.emit(jt, m.exitCode, m.signalCode);
      let stderr = m.stderr;
      if (Bs(stderr)) stderr.unref();else stderr.destroy();
    };
    return m.stderr.once("close", () => {
      if (this.stderrTail += g.end(), h = !0, w) E();
    }), m.once("exit", () => {
      if (w = !0, this.ready = !1, h) E();else k = setTimeout(E, Fs);
    }), {
      stdin: m.stdin,
      stdout: m.stdout,
      get killed() {
        return m.killed;
      },
      get exitCode() {
        return m.exitCode;
      },
      get signalCode() {
        return m.signalCode;
      },
      kill: m.kill.bind(m),
      on: (I, M) => m.on(Ye(I), M),
      once: (I, M) => m.once(Ye(I), M),
      off: (I, M) => m.off(Ye(I), M)
    };
  }
  initialize() {
    try {
      let {
          additionalDirectories = [],
          projectConfigRoot: projectConfigRoot,
          agent: agent,
          betas: betas,
          cwd: cwd_2,
          executable = this.getDefaultExecutable(),
          executableArgs = [],
          extraArgs = {},
          pathToClaudeCodeExecutable: pathToClaudeCodeExecutable,
          env: env_2 = {
            ...process.env
          },
          thinkingConfig: thinkingConfig,
          maxTurns: maxTurns,
          maxBudgetUsd: maxBudgetUsd,
          taskBudget: taskBudget,
          model: model,
          fallbackModel: fallbackModel,
          jsonSchema: jsonSchema,
          permissionMode: permissionMode,
          allowDangerouslySkipPermissions: allowDangerouslySkipPermissions,
          permissionPromptToolName: permissionPromptToolName,
          permissionPrompts: permissionPrompts,
          continueConversation: continueConversation,
          resume: resume,
          settingSources: settingSources,
          skills: skills,
          disallowedTools = [],
          tools: tools,
          mcpServers: mcpServers,
          strictMcpConfig: strictMcpConfig,
          canUseTool: canUseTool,
          includePartialMessages: includePartialMessages,
          plugins: plugins,
          pluginsViaInitialize: pluginsViaInitialize,
          sandbox: sandbox_2
        } = this.options,
        {
          allowedTools = []
        } = this.options;
      if (skills !== void 0) {
        let R = skills === "all" ? ["Skill"] : skills.map(item => `Skill(${Ns(item)})`),
          L = new Set(allowedTools);
        allowedTools = [...allowedTools, ...R.filter(item => !L.has(item))];
      }
      let y = ["--output-format", "stream-json", "--verbose", "--input-format", "stream-json"];
      if (thinkingConfig) {
        switch (thinkingConfig.type) {
          case "enabled":
            if (thinkingConfig.budgetTokens === void 0) y.push("--thinking", "adaptive");else y.push("--max-thinking-tokens", thinkingConfig.budgetTokens.toString());
            break;
          case "disabled":
            y.push("--thinking", "disabled");
            break;
          case "adaptive":
            y.push("--thinking", "adaptive");
            break;
        }
        if (thinkingConfig.type !== "disabled" && thinkingConfig.display) y.push("--thinking-display", thinkingConfig.display);
      }
      if (this.options.effort) y.push("--effort", this.options.effort);
      if (maxTurns) y.push("--max-turns", maxTurns.toString());
      if (maxBudgetUsd !== void 0) y.push("--max-budget-usd", maxBudgetUsd.toString());
      if (taskBudget) y.push("--task-budget", taskBudget.total.toString());
      if (model) y.push("--model", model);
      if (agent) y.push("--agent", agent);
      if (betas && betas.length > 0) y.push("--betas", betas.join(","));
      if (jsonSchema) y.push("--json-schema", b(jsonSchema));
      if (this.options.debugFile) y.push("--debug-file", this.options.debugFile);else if (this.options.debug) y.push("--debug");
      if (!this.options.debugFile && !this.options.spawnClaudeCodeProcess) {
        let R = xt();
        if (R) y.push("--debug-file", R);
      }
      if (canUseTool) {
        if (permissionPromptToolName) throw Error("canUseTool callback cannot be used with permissionPromptToolName. Please use one or the other.");
        y.push("--permission-prompt-tool", "stdio");
      } else if (permissionPromptToolName) y.push("--permission-prompt-tool", permissionPromptToolName);
      if (permissionPrompts) y.push("--permission-prompts", permissionPrompts);
      if (continueConversation) y.push("--continue");
      if (resume) y.push(`--resume=${resume}`);
      if (allowedTools.length > 0) y.push("--allowedTools", allowedTools.join(","));
      if (disallowedTools.length > 0) y.push("--disallowedTools", disallowedTools.join(","));
      if (tools !== void 0) if (Array.isArray(tools)) {
        if (tools.length === 0) y.push("--tools", "");else y.push("--tools", tools.join(","));
      } else y.push("--tools", "default");
      if (mcpServers && Object.keys(mcpServers).length > 0) y.push("--mcp-config", b({
        mcpServers: mcpServers
      }));
      if (settingSources !== void 0) y.push(`--setting-sources=${settingSources.join(",")}`);
      if (strictMcpConfig) y.push("--strict-mcp-config");
      if (permissionMode) y.push("--permission-mode", permissionMode);
      if (allowDangerouslySkipPermissions) y.push("--allow-dangerously-skip-permissions");
      if (fallbackModel) {
        if (model && fallbackModel === model) throw Error("Fallback model cannot be the same as the main model. Please specify a different model for fallbackModel option.");
        y.push("--fallback-model", fallbackModel);
      }
      if (this.options.includeHookEvents) y.push("--include-hook-events");
      if (includePartialMessages) y.push("--include-partial-messages");
      if (this.options.sessionMirror) y.push("--session-mirror");
      if (projectConfigRoot !== void 0) y.push(`--project-config-root=${projectConfigRoot}`);
      for (let R of additionalDirectories) y.push("--add-dir", R);
      if (pluginsViaInitialize) y.push("--await-initialize");else if (plugins && plugins.length > 0) for (let R of plugins) if (R.type === "local") y.push(R.skipMcpDiscovery ? "--plugin-dir-no-mcp" : "--plugin-dir", R.path);else throw Error(`Unsupported plugin type: ${R.type}`);
      if (this.options.forkSession) y.push("--fork-session");
      if (this.options.resumeSessionAt) y.push(`--resume-session-at=${this.options.resumeSessionAt}`);
      if (this.options.resumeDropsTurn !== void 0) y.push(`--resume-drops-turn=${this.options.resumeDropsTurn}`);
      if (this.options.sessionId) y.push(`--session-id=${this.options.sessionId}`);
      if (this.options.persistSession === !1) y.push("--no-session-persistence");
      if (this.options.managedSettings) y.push("--managed-settings", this.options.managedSettings);
      let Ce = {
        ...(extraArgs ?? {})
      };
      if (this.options.settings) Ce.settings = this.options.settings;
      let Ee = Ot(Ce, sandbox_2);
      for (let [R, L] of Object.entries(Ee)) if (L === null) y.push(`--${R}`);else oSt(y, R, L);
      if (!env_2.CLAUDE_CODE_ENTRYPOINT) env_2.CLAUDE_CODE_ENTRYPOINT = "sdk-ts";
      if (delete env_2.NODE_OPTIONS, Ne(env_2.DEBUG_CLAUDE_AGENT_SDK)) env_2.DEBUG = "1";else delete env_2.DEBUG;
      let ue = Ks(pathToClaudeCodeExecutable),
        command_2 = ue ? pathToClaudeCodeExecutable : executable,
        args_2 = ue ? [...executableArgs, ...y] : [...executableArgs, pathToClaudeCodeExecutable, ...y],
        me = {
          command: command_2,
          args: args_2,
          cwd: cwd_2,
          env: env_2,
          signal: this.forwardedAbort.signal
        };
      if (this.options.spawnClaudeCodeProcess) A(`Spawning Claude Code (custom): ${command_2} ${args_2.join(" ")}`), this.process = this.options.spawnClaudeCodeProcess(me);else A(`Spawning Claude Code: ${command_2} ${args_2.join(" ")}`), this.process = this.spawnLocalProcess(me);
      if (this.processStdin = this.process.stdin, this.processStdout = this.process.stdout, this.processStdin.on("error", R => {
        A(`[ProcessTransport] stdin write failed (child likely exited): ${R.code ?? R.message}`), this.ready = !1;
      }), De.track(this.process), this.abortHandler = () => this.close(), this.abortController.signal.addEventListener("abort", this.abortHandler), this.abortController.signal.aborted) this.close();
      let process_2 = this.process;
      process_2.on("error", R => {
        this.ready = !1;
        let L = R,
          U = L.syscall !== void 0 ? L.syscall.startsWith("spawn") : Et(R);
        if (U && !process_2.killed) De.untrack(process_2);
        if (this.abortController.signal.aborted) this.exitError = xe(), J$(R, {
          telemetryMessage: "Claude Code process aborted by user",
          errorClass: "aborted"
        });else if (U && Et(R)) {
          let {
              message: message,
              telemetryMessage: telemetryMessage,
              errorClass: errorClass
            } = $s(pathToClaudeCodeExecutable, ue),
            N = {
              telemetryMessage: `${telemetryMessage}${Ze(R)}`,
              errorClass: errorClass,
              code: ao(R)
            };
          this.exitError = J$(ReferenceError(message), N), J$(R, N), A(this.exitError.message);
        } else {
          let se = {
            telemetryMessage: U ? `Failed to spawn Claude Code process${Ze(R)}` : `Claude Code process error${Ze(R)}`,
            errorClass: U ? "spawn_failed" : "process_error",
            code: ao(R)
          };
          this.exitError = J$(Error(`Failed to spawn Claude Code process: ${Y6(R.message)}`), se), J$(R, se), A(this.exitError.message);
        }
      }), process_2.on("exit", (R, L) => {
        if (this.exitEventDelivered = !0, this.ready = !1, this.abortController.signal.aborted) this.exitError = xe();else {
          let U = this.getProcessExitError(R, L);
          if (U) this.exitError = U, A(U.message);
        }
      }), this.ready = !this.abortController.signal.aborted;
    } catch (error) {
      throw this.ready = !1, error;
    }
  }
  getProcessExitError(e, s) {
    if (e !== 0 && e !== null) {
      let exitCode = Number.isInteger(e) ? e : void 0;
      return J$(Error(`Claude Code process exited with code ${e}${this.formatStderrTail()}`), {
        telemetryMessage: `Claude Code process exited with code ${exitCode ?? "unknown"}`,
        errorClass: "process_exited_nonzero",
        exitCode: exitCode
      });
    } else if (s) {
      let signal_2 = /^SIG[A-Z0-9]{1,8}$/.test(s) ? s : "unknown";
      return J$(Error(`Claude Code process terminated by signal ${s}${this.formatStderrTail()}`), {
        telemetryMessage: `Claude Code process terminated by signal ${signal_2}`,
        errorClass: "process_killed_by_signal",
        signal: signal_2
      });
    }
    return;
  }
  formatStderrTail() {
    let e = Ul(Y6(this.stderrTail), Je).trim();
    return e ? `. stderr: ${e}` : "";
  }
  write(e) {
    if (this.abortController.signal.aborted) throw At();
    if (this.spawnResolve) {
      this.pendingWrites.push(e);
      return;
    }
    if (!this.ready || !this.processStdin) throw Error("ProcessTransport is not ready for writing");
    if (this.processStdin.writableEnded) {
      A("[ProcessTransport] Dropping write to ended stdin stream");
      return;
    }
    if (this.process?.killed || this.process?.exitCode !== null) throw Error("Cannot write to terminated process");
    if (this.exitError) throw J$(Error(`Cannot write to process that exited with error: ${this.exitError.message}`), {
      telemetryMessage: `Cannot write to process that exited with error: ${hQ(this.exitError) ?? "untagged exit error"}`,
      errorClass: Ut(this.exitError, "errorClass"),
      code: ao(this.exitError),
      exitCode: qs(this.exitError),
      signal: Ut(this.exitError, "signal")
    });
    A(`[ProcessTransport] Writing to stdin: ${e.substring(0, 100)}`);
    try {
      if (!this.processStdin.write(e)) A("[ProcessTransport] Write buffer full, data queued");
    } catch (error) {
      throw this.ready = !1, Error(`Failed to write to process stdin: ${l(error)}`);
    }
  }
  [Symbol.dispose]() {
    this.close();
  }
  close() {
    if (this.spawnAbort(this.abortController.signal.aborted ? xe() : Error("Query closed before spawn")), this.processStdin) this.processStdin.end(), this.processStdin = void 0;
    if (this.abortHandler) this.abortController.signal.removeEventListener("abort", this.abortHandler), this.abortHandler = void 0;
    let e = this.process?.exitCode ?? null,
      s = this.process?.signalCode ?? null,
      r = !this.exitEventDelivered && (e !== null && e >= 0 || s !== null),
      n;
    if (r) {
      if (this.exitEventDelivered = !0, n = this.abortController.signal.aborted ? xe() : this.getProcessExitError(e, s), n && !this.exitError) this.exitError = n;
    }
    let exitListeners = this.exitListeners;
    this.exitListeners = [];
    for (let {
      callback: callback,
      handler: handler
    } of exitListeners) if (this.process?.off("exit", handler), r) try {
      callback(n);
    } catch (error) {
      A(`[ProcessTransport] onExit callback threw during close(): ${l(error)}`);
    }
    let d = () => {
        if (this.abortController.signal.aborted) this.forwardedAbort.abort(this.abortController.signal.reason);
      },
      process_3 = this.process;
    if (process_3 && !process_3.killed && process_3.exitCode === null && process_3.signalCode == null) setTimeout((g, h) => {
      if (g.exitCode !== null || g.signalCode != null) {
        h();
        return;
      }
      setTimeout((w, S) => {
        if (w.exitCode === null) w.kill("SIGKILL");
        S();
      }, 5000, g, h).unref();
      return;
    }, js, process_3, d).unref(), process_3.once("exit", () => De.untrack(process_3));else if (process_3) De.untrack(process_3), d();
    this.ready = !1;
  }
  isReady() {
    return this.ready;
  }
  async *readMessages() {
    if (this.spawnPromise) await this.spawnPromise, this.spawnPromise = void 0;
    if (!this.processStdout) throw Error("ProcessTransport output stream not available");
    if (this.exitError) throw this.exitError;
    let e = As({
        input: this.processStdout
      }),
      s = this.process ? (() => {
        let process_4 = this.process,
          n = () => e.close();
        return process_4.on("error", n), () => process_4.off("error", n);
      })() : void 0;
    if (this.exitError) e.close();
    try {
      for await (let r of e) if (r.trim()) {
        let n;
        try {
          n = J(r);
        } catch (error) {
          A(`Non-JSON stdout: ${r}`);
          continue;
        }
        yield n;
      }
      if (this.exitError) throw this.exitError;
      await this.waitForExit();
    } finally {
      s?.(), e.close();
    }
  }
  endInput() {
    if (this.spawnResolve) {
      this.pendingEndInput = !0;
      return;
    }
    if (this.processStdin) this.processStdin.end();
  }
  onExit(callback_2) {
    if (!this.process) return () => {};
    let handler_2 = (r, n) => {
      let a = this.getProcessExitError(r, n);
      callback_2(a);
    };
    return this.process.on("exit", handler_2), this.exitListeners.push({
      callback: callback_2,
      handler: handler_2
    }), () => {
      if (this.process) this.process.off("exit", handler_2);
      let r = this.exitListeners.findIndex(item => item.handler === handler_2);
      if (r !== -1) this.exitListeners.splice(r, 1);
    };
  }
  async waitForExit() {
    if (this.exitError) throw this.exitError;
    if (!this.process || this.process.exitCode === 0 || this.process.killed && this.exitEventDelivered) return;
    return new Promise((e, s) => {
      let r = (a, d) => {
        if (this.abortController.signal.aborted) {
          s(At());
          return;
        }
        let m = this.getProcessExitError(a, d);
        if (m) s(m);else e();
      };
      this.process.once("exit", r);
      let n = a => {
        this.process.off("exit", r), s(a);
      };
      this.process.once("error", n), this.process.once("exit", () => {
        this.process.off("error", n);
      });
    });
  }
}
function Ks(e) {
  return ![".js", ".mjs", ".tsx", ".ts", ".jsx"].some(item => e.endsWith(item));
}
function $s(e, s) {
  let r = s ? "native binary" : "executable",
    n = Y6(e);
  if (Os(e)) return {
    message: s ? `Claude Code native binary at ${n} exists but failed to launch. This usually means the binary does not match this system's libc \u2014 e.g. spawning a musl-linked binary on a glibc Linux host fails because the musl dynamic loader (/lib/ld-musl-*) is missing. Specify a matching binary with options.pathToClaudeCodeExecutable.` : `Claude Code executable at ${n} exists but failed to launch.`,
    telemetryMessage: `Claude Code ${r} exists at the configured path but failed to launch`,
    errorClass: "executable_launch_failed"
  };
  return {
    message: s ? `Claude Code native binary not found at ${n}. Please ensure Claude Code is installed via native installer or specify a valid path with options.pathToClaudeCodeExecutable.` : `Claude Code executable not found at ${n}. Is options.pathToClaudeCodeExecutable set?`,
    telemetryMessage: `Claude Code ${r} not found at the configured path`,
    errorClass: "executable_not_found"
  };
}
function Ze(e) {
  let s = ao(e);
  return s === void 0 ? "" : ` (${s})`;
}
function xe() {
  return J$(new q$e("Claude Code process aborted by user"), {
    telemetryMessage: "Claude Code process aborted by user",
    errorClass: "aborted"
  });
}
function At() {
  return J$(new q$e("Operation aborted"), {
    telemetryMessage: "Operation aborted",
    errorClass: "aborted"
  });
}
function Ut(e, s) {
  let r = Object.hasOwn(e, s) ? Reflect.get(e, s) : void 0;
  return typeof r === "string" ? r : void 0;
}
function qs(e) {
  let s = Object.hasOwn(e, "exitCode") ? Reflect.get(e, "exitCode") : void 0;
  return typeof s === "number" ? s : void 0;
}
function Bs(e) {
  return typeof Reflect.get(e, "unref") === "function";
}
import { existsSync as Hs } from "fs";
var ne = "@anthropic-ai/claude-agent-sdk";
function Gs() {
  return !1;
}
function Lt(e, s = {}) {
  let r = s.platform ?? "win32",
    n = s.arch ?? "x64",
    a = s.exists ?? Hs,
    d = s.preferMusl ?? Gs(),
    m = process.env.SDK_NATIVE_BIN ?? "claude",
    g = r === "win32" ? ".exe" : "",
    w = (r === "android" ? [`${ne}-linux-${n}-android`] : r === "linux" ? d ? [`${ne}-linux-${n}-musl`, `${ne}-linux-${n}`] : [`${ne}-linux-${n}`, `${ne}-linux-${n}-musl`] : [`${ne}-${r}-${n}`]).map(item => `${item}/${m}${g}`);
  for (let S of w) try {
    let k = e(S);
    if (a(k)) return k;
  } catch {}
  return null;
}
var Nt = 250,
  Oe = "sdk-manifest-capture:",
  ie = Symbol("suppressControlResponse");
class Ue {
  transport;
  isSingleUserTurn;
  canUseTool;
  hooks;
  abortController;
  jsonSchema;
  initConfig;
  onElicitation;
  getOAuthToken;
  getHostAuthToken;
  onUserDialog;
  verbatimPrompts;
  pendingControlResponses = new Map();
  unmatchedControlResponses = new Map();
  static UNMATCHED_CONTROL_RESPONSES_MAX = 1024;
  cleanupPerformed = !1;
  cleanupCause;
  sdkMessages;
  inputStream = new wS();
  initialization;
  cancelControllers = new Map();
  hookCallbacks = new Map();
  nextCallbackId = 0;
  initHooksPayload;
  sdkMcpServers = new Map();
  initializeWritten;
  initializeHasBeenWritten = !1;
  markInitializeWritten;
  writingFirstInitialize = !1;
  stopSdkMcpManifestCapture;
  sdkMcpToolsChangedDuringCapture = new Set();
  pendingMcpResponses = new Map();
  firstResultReceivedResolve;
  firstResultReceived = !1;
  lastErrorResultText;
  latestCommands;
  transcriptMirrorBatcher;
  cleanupCallbacks = [];
  cleanupPromise;
  setIsSingleUserTurn(e) {
    this.isSingleUserTurn = e;
  }
  setTranscriptMirrorBatcher(e) {
    this.transcriptMirrorBatcher = e;
  }
  reportMirrorError(key, error_2) {
    let r = {
      type: "system",
      subtype: "mirror_error",
      error: error_2,
      key: key,
      uuid: Ide(),
      session_id: key.sessionId
    };
    this.inputStream.enqueue(r);
  }
  addCleanupCallback(e) {
    if (this.cleanupPerformed) e();else this.cleanupCallbacks.push(e);
  }
  isClosed() {
    return this.cleanupPerformed;
  }
  hasBidirectionalNeeds() {
    return this.sdkMcpServers.size > 0 || this.hooks !== void 0 && Object.keys(this.hooks).length > 0 || this.canUseTool !== void 0 || this.onElicitation !== void 0 || this.onUserDialog !== void 0 || this.getOAuthToken !== void 0 || this.getHostAuthToken !== void 0 || this.workSecretAnswerer !== void 0;
  }
  remoteControlCallGeneration = 0;
  workSecretAnswerer;
  constructor(e, s, r, n, a, d = new Map(), m, g, h, w, S, k, T = !1) {
    this.transport = e;
    this.isSingleUserTurn = s;
    this.canUseTool = r;
    this.hooks = n;
    this.abortController = a;
    this.jsonSchema = m;
    this.initConfig = g;
    this.onElicitation = h;
    this.getOAuthToken = w;
    this.getHostAuthToken = S;
    this.onUserDialog = k;
    this.verbatimPrompts = T;
    for (let [E, C] of d) this.connectSdkMcpServer(E, C);
    this.sdkMessages = this.readSdkMessages(), this.readMessages(), this.initializeWritten = new Promise(E => {
      this.markInitializeWritten = () => {
        this.initializeHasBeenWritten = !0, E();
      };
    }), this.initialization = this.initialize({
      first: !0
    }), this.initialization.catch(() => {});
  }
  setError(e) {
    this.inputStream.error(e);
  }
  async stopTask(task_id) {
    await this.request({
      subtype: "stop_task",
      task_id: task_id
    });
  }
  async backgroundTasks(tool_use_id) {
    return (await this.request({
      subtype: "background_tasks",
      tool_use_id: tool_use_id
    })).response.backgrounded ?? !0;
  }
  close() {
    this.cleanup();
  }
  cleanup(e) {
    if (this.cleanupPromise) return this.cleanupPromise;
    return this.cleanupPerformed = !0, this.cleanupCause = e, this.stopSdkMcpManifestCapture?.(), this.cleanupPromise = this.performCleanup(e), this.cleanupPromise;
  }
  async performCleanup(e) {
    for (let s of this.cleanupCallbacks) try {
      s();
    } catch {}
    if (this.cleanupCallbacks = [], this.transcriptMirrorBatcher) try {
      await this.transcriptMirrorBatcher.flush();
    } catch {}
    try {
      for (let s of this.cancelControllers.values()) s.abort();
      this.cancelControllers.clear(), this.transport.close();
    } catch (error) {
      t(`[Query.cleanup] transport.close() failed: ${l(error)}`, {
        level: "error"
      });
    }
    try {
      let s = e ?? tt();
      for (let {
        reject: reject
      } of this.pendingControlResponses.values()) reject(s);
      this.pendingControlResponses.clear(), this.unmatchedControlResponses.clear();
      for (let {
        reject: reject_2
      } of this.pendingMcpResponses.values()) reject_2(s);
      this.pendingMcpResponses.clear(), this.hookCallbacks.clear();
      for (let {
        transport: transport
      } of this.sdkMcpServers.values()) transport.close().catch(() => {});
      if (this.sdkMcpServers.clear(), e) this.inputStream.error(e);else this.inputStream.done();
    } catch (error) {}
    if (this.transport.waitForExit) {
      let abortController = new AbortController();
      try {
        await Promise.race([this.transport.waitForExit(), Q(2000, abortController.signal)]);
      } catch {} finally {
        abortController.abort();
      }
    }
  }
  next(...[e]) {
    return this.sdkMessages.next(...[e]);
  }
  async return(e) {
    return await this.cleanup(), this.sdkMessages.return(e);
  }
  async throw(e) {
    return await this.cleanup(), this.sdkMessages.throw(e);
  }
  [Symbol.asyncIterator]() {
    return this.sdkMessages;
  }
  async [Symbol.asyncDispose]() {
    await this.cleanup();
  }
  async readMessages() {
    try {
      for await (let e of this.transport.readMessages()) {
        if (e.type === "control_response") {
          let s = this.pendingControlResponses.get(e.response.request_id);
          if (s) s.handler(e.response);else {
            if (this.unmatchedControlResponses.size >= Ue.UNMATCHED_CONTROL_RESPONSES_MAX) {
              let r = this.unmatchedControlResponses.keys().next().value;
              if (r !== void 0) this.unmatchedControlResponses.delete(r);
            }
            this.unmatchedControlResponses.set(e.response.request_id, e.response);
          }
          continue;
        } else if (e.type === "control_request") {
          this.handleControlRequest(e);
          continue;
        } else if (e.type === "control_cancel_request") {
          this.handleControlCancelRequest(e);
          continue;
        } else if (e.type === "keep_alive") continue;else if (e.type === "transcript_mirror") {
          this.transcriptMirrorBatcher?.enqueue(e.filePath, e.entries);
          continue;
        }
        if (e.type === "system" && e.subtype === "commands_changed" && Array.isArray(e.commands)) this.latestCommands = e.commands;
        if (e.type === "system" && (e.subtype === "post_turn_summary" || e.subtype === "task_summary" || e.subtype === "session_metadata")) {
          this.inputStream.enqueue(e);
          continue;
        }
        if (e.type === "active_goal") {
          this.inputStream.enqueue(e);
          continue;
        }
        if (e.type === "autocompact_state") {
          this.inputStream.enqueue(e);
          continue;
        }
        if (e.type === "result") {
          if (this.transcriptMirrorBatcher) await this.transcriptMirrorBatcher.flush();
          let s = e.is_error ? e.subtype === "success" ? e.result : e.errors.map(item => item.trim()).filter(Boolean).join("; ") : void 0;
          if (this.lastErrorResultText = s || void 0, this.firstResultReceived = !0, this.firstResultReceivedResolve) this.firstResultReceivedResolve();
          if (this.isSingleUserTurn) t("[Query.readMessages] First result received for single-turn query, closing stdin"), this.transport.endInput();
        } else if (!(e.type === "system" && e.subtype === "session_state_changed")) this.lastErrorResultText = void 0;
        this.inputStream.enqueue(e);
      }
      if (this.transcriptMirrorBatcher) await this.transcriptMirrorBatcher.flush();
      this.inputStream.done(), this.cleanup();
    } catch (e) {
      if (this.transcriptMirrorBatcher) await this.transcriptMirrorBatcher.flush();
      if (this.lastErrorResultText !== void 0 && !(e instanceof q$e) && e?.name !== "SSEHttpError") {
        let s = J$(Error(`Claude Code returned an error result: ${this.lastErrorResultText}`), {
          telemetryMessage: "Claude Code returned an error result",
          errorClass: "error_result"
        });
        t(`[Query.readMessages] Replacing exit error with result text. Original: ${l(e)}`), this.inputStream.error(s), this.cleanup(s);
        return;
      }
      this.inputStream.error(e), this.cleanup(e);
    }
  }
  async handleControlRequest(e) {
    if (this.cleanupPerformed) {
      t(`[Query.handleControlRequest] Request ${e.request_id} (${e.request.subtype}) arrived after close \u2014 skipping`);
      return;
    }
    if (this.cancelControllers.has(e.request_id)) {
      t(`[Query.handleControlRequest] Duplicate delivery of in-flight request ${e.request_id} (${e.request.subtype}) \u2014 skipping`);
      return;
    }
    let abortController_2 = new AbortController();
    this.cancelControllers.set(e.request_id, abortController_2);
    try {
      let r;
      try {
        let response = await this.processControlRequest(e, abortController_2.signal);
        if (this.cleanupPerformed) return;
        if (response === ie) return;
        let a = {
          type: "control_response",
          response: {
            subtype: "success",
            request_id: e.request_id,
            response: response
          }
        };
        r = b(a) + `
`;
      } catch (n) {
        if (this.cleanupPerformed) return;
        let a = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: l(n)
          }
        };
        r = b(a) + `
`;
      }
      try {
        await Promise.resolve(this.transport.write(r));
      } catch (error) {
        t(`[Query.handleControlRequest] Response write failed: ${l(error)}`, {
          level: "error"
        });
      }
    } finally {
      if (this.cancelControllers.get(e.request_id) === abortController_2) this.cancelControllers.delete(e.request_id);
    }
  }
  handleControlCancelRequest(e) {
    let s = this.cancelControllers.get(e.request_id);
    if (s) s.abort(), this.cancelControllers.delete(e.request_id);
  }
  async processControlRequest(e, signal_3) {
    if (hSe.some(item => item === e.request.subtype)) return t(`[Query.processControlRequest] ${e.request.subtype} ${e.request_id} is for the machine serving this session's tools \u2014 leaving it unanswered`), ie;
    if (e.request.subtype === "can_use_tool") {
      if (!this.canUseTool) throw Error("canUseTool callback is not provided.");
      let computer_folder = e.request.computer_folder,
        n = await this.canUseTool(e.request.tool_name, e.request.input, {
          signal: signal_3,
          suggestions: e.request.permission_suggestions,
          blockedPath: e.request.blocked_path,
          ...(e.request.mcp_server && {
            mcpServer: {
              name: e.request.mcp_server.name,
              source: e.request.mcp_server.source
            }
          }),
          decisionReason: e.request.decision_reason,
          title: e.request.title,
          displayName: e.request.display_name,
          description: e.request.description,
          defaultToNo: e.request.default_to_no,
          suppressAlwaysAllowRule: e.request.suppress_always_allow_rule,
          toolUseID: e.request.tool_use_id,
          agentID: e.request.agent_id,
          requestId: e.request_id,
          ...(typeof e.request.requires_user_interaction === "boolean" && {
            requiresUserInteraction: e.request.requires_user_interaction
          }),
          ...(typeof e.request.server_prompt === "string" && {
            serverPrompt: e.request.server_prompt
          }),
          ...(typeof computer_folder === "object" && computer_folder !== null && "path" in computer_folder && typeof computer_folder.path === "string" && "computer_name" in computer_folder && typeof computer_folder.computer_name === "string" && {
            computerFolder: {
              path: computer_folder.path,
              computer_name: computer_folder.computer_name
            }
          }),
          ...(e.request.matched_ask_rule && {
            matchedAskRule: {
              source: e.request.matched_ask_rule.source,
              toolName: e.request.matched_ask_rule.tool_name,
              ...(e.request.matched_ask_rule.rule_content !== void 0 && {
                ruleContent: e.request.matched_ask_rule.rule_content
              })
            }
          })
        });
      if (n === null) return ie;
      return {
        ...n,
        toolUseID: e.request.tool_use_id
      };
    } else if (e.request.subtype === "hook_callback") return await this.handleHookCallbacks(e.request.callback_id, e.request.input, e.request.tool_use_id, signal_3);else if (e.request.subtype === "mcp_message") {
      let request = e.request,
        n = this.sdkMcpServers.get(request.server_name)?.transport;
      if (!n) throw Error(`SDK MCP server not found: ${request.server_name}`);
      if (W8t(request.message)) return {
        mcp_response: await this.handleMcpControlRequest(request.server_name, request, n)
      };else {
        if (n.onmessage) n.onmessage(request.message);
        return {
          mcp_response: {
            jsonrpc: "2.0",
            result: {},
            id: 0
          }
        };
      }
    } else if (e.request.subtype === "elicitation") {
      let request_2 = e.request;
      if (this.onElicitation) {
        let n = await this.onElicitation({
          serverName: request_2.mcp_server_name,
          message: request_2.message,
          mode: request_2.mode,
          url: request_2.url,
          elicitationId: request_2.elicitation_id,
          requestedSchema: request_2.requested_schema,
          title: request_2.title,
          displayName: request_2.display_name,
          description: request_2.description
        }, {
          signal: signal_3,
          requestId: e.request_id
        });
        if (n === null) return ie;
        return n;
      }
      return {
        action: "decline"
      };
    } else if (e.request.subtype === "request_user_dialog") {
      if (this.onUserDialog) {
        let r = await this.onUserDialog({
          dialogKind: e.request.dialog_kind,
          payload: e.request.payload,
          toolUseID: e.request.tool_use_id
        }, {
          signal: signal_3,
          requestId: e.request_id
        });
        if (r === null) return ie;
        return r;
      }
      return t(`[Query] No onUserDialog handler for request_user_dialog (kind=${e.request.dialog_kind}) \u2014 staying silent so a capable client (or the worker's park deadline) settles it`), i("tengu_request_user_dialog_response_ignored", {
        shape: c("auto_cancel")
      }), ie;
    } else if (e.request.subtype === "oauth_token_refresh") {
      if (!this.getOAuthToken) throw Error("getOAuthToken callback is not provided.");
      let reason,
        accessToken = (await this.getOAuthToken({
          signal: signal_3,
          onDecline: a => {
            if (eLo(a)) reason = a;
          }
        })) ?? null;
      return accessToken === null && reason !== void 0 ? {
        accessToken: accessToken,
        reason: reason
      } : {
        accessToken: accessToken
      };
    } else if (e.request.subtype === "host_auth_token_refresh") {
      if (!this.getHostAuthToken) throw Error("getHostAuthToken callback is not provided.");
      let authToken = (await this.getHostAuthToken({
        signal: signal_3
      })) ?? null;
      return typeof authToken === "string" || authToken === null ? {
        authToken: authToken
      } : authToken;
    } else if (e.request.subtype === "remote_control_work_secret") {
      let workSecretAnswerer = this.workSecretAnswerer;
      if (!workSecretAnswerer) throw Error("refreshWorkSecret callback is not provided.");
      if (!Kt(workSecretAnswerer.sessionId, e.request.session_id)) throw Error("remote_control_work_secret names a session this host did not attach.");
      return {
        work_secret: (await workSecretAnswerer.refresh(workSecretAnswerer.sessionId, {
          signal: signal_3
        })) || null
      };
    }
    throw Error("Unsupported control request subtype: " + e.request.subtype);
  }
  async *readSdkMessages() {
    try {
      for await (let e of this.inputStream) this.transport.markDelivered?.(e), yield e;
    } finally {
      await this.cleanup();
    }
  }
  async initialize({
    first: first
  } = {
    first: !1
  }) {
    if (!first && !this.initializeHasBeenWritten) await this.initializeWritten;
    let s, r;
    try {
      if (first && this.initConfig?.captureSdkMcpManifests === !0 && this.sdkMcpServers.size > 0) {
        s = await this.captureSdkMcpServerManifests();
        for (let m of this.sdkMcpToolsChangedDuringCapture) {
          let g = s !== void 0 && Object.hasOwn(s, m) ? s[m] : void 0;
          if (g?.toolsListResult !== void 0) s[m] = {
            initializeResult: g.initializeResult
          };
        }
      }
      this.sdkMcpToolsChangedDuringCapture.clear();
      let d = this.buildInitializeRequest(s);
      if (this.cleanupPerformed) throw this.cleanupCause ?? Error("Query closed before initialize was sent");
      this.writingFirstInitialize = first;
      try {
        r = this.request(d);
      } finally {
        this.writingFirstInitialize = !1;
      }
    } finally {
      if (first) this.markInitializeWritten();
    }
    let response_2 = (await r).response;
    if (this.initConfig?.plugins !== void 0 && this.initConfig.plugins.length > 0 && response_2.plugins_applied !== !0) t(`[Query.initialize] Claude Code reported plugins_applied=${String(response_2.plugins_applied)} for ${this.initConfig.plugins.length} plugins sent with pluginDelivery 'initialize'; the process is running with the plugins it was launched with.`, {
      level: "warn"
    });
    return response_2;
  }
  buildInitializeRequest(sdkMcpServerManifests) {
    if (this.hooks && !this.initHooksPayload) {
      this.initHooksPayload = {};
      for (let [d, m] of Object.entries(this.hooks)) if (m.length > 0) this.initHooksPayload[d] = m.map(item => {
        let hookCallbackIds = [];
        for (let w of item.hooks) {
          let S = `hook_${this.nextCallbackId++}`;
          this.hookCallbacks.set(S, w), hookCallbackIds.push(S);
        }
        return {
          matcher: item.matcher,
          hookCallbackIds: hookCallbackIds,
          timeout: item.timeout
        };
      });
    }
    let sdkMcpServers = this.sdkMcpServers.size > 0 ? Array.from(this.sdkMcpServers.keys()) : void 0,
      r = Array.from(this.sdkMcpServers).flatMap(([d, {
        timeout: timeout
      }]) => timeout !== void 0 ? [[d, {
        timeout: timeout
      }]] : []),
      sdkMcpServerConfigs = r.length > 0 ? Object.fromEntries(r) : void 0;
    return {
      subtype: "initialize",
      hooks: this.initHooksPayload,
      sdkMcpServers: sdkMcpServers,
      sdkMcpServerConfigs: sdkMcpServerConfigs,
      sdkMcpServerManifests: sdkMcpServerManifests,
      jsonSchema: this.jsonSchema,
      systemPrompt: typeof this.initConfig?.systemPrompt === "string" ? [this.initConfig.systemPrompt] : this.initConfig?.systemPrompt,
      appendSystemPrompt: this.initConfig?.appendSystemPrompt,
      planModeInstructions: this.initConfig?.planModeInstructions,
      systemPromptSnapshot: this.initConfig?.systemPromptSnapshot,
      appendSubagentSystemPrompt: this.initConfig?.appendSubagentSystemPrompt,
      toolAliases: this.initConfig?.toolAliases,
      excludeDynamicSections: this.initConfig?.excludeDynamicSections,
      agents: this.initConfig?.agents,
      title: this.initConfig?.title,
      skills: Array.isArray(this.initConfig?.skills) ? this.initConfig.skills : void 0,
      webSearchIsolationExemptMcpServers: this.initConfig?.webSearchIsolationExemptMcpServers,
      promptSuggestions: this.initConfig?.promptSuggestions,
      agentProgressSummaries: this.initConfig?.agentProgressSummaries,
      forwardSubagentText: this.initConfig?.forwardSubagentText,
      supportedDialogKinds: this.initConfig?.supportedDialogKinds,
      perTaskStopAffordance: this.initConfig?.perTaskStopAffordance,
      rapidFollowupPreempt: this.initConfig?.rapidFollowupPreempt,
      workspaceTrust: this.initConfig?.workspaceTrust,
      plugins: this.initConfig?.plugins
    };
  }
  async captureSdkMcpServerManifests() {
    let e = performance.now(),
      s = new Map(),
      r = !1,
      n = async (server_name, transport_2) => {
        try {
          if (await this.sdkMcpServers.get(server_name)?.connection, r) return;
          let E = await this.handleMcpControlRequest(server_name, {
            server_name: server_name,
            message: {
              jsonrpc: "2.0",
              id: Oe + "initialize",
              method: "initialize",
              params: {
                protocolVersion: protocolVersion,
                capabilities: capabilities,
                clientInfo: {
                  ...R2e,
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
                  }.VERSION ?? "unknown"
                }
              }
            }
          }, transport_2);
          if (r) return;
          if (!("result" in E)) {
            t(`[Query.captureSdkMcpServerManifests] '${server_name}' answered initialize with an error; leaving it to the CLI: ${b(E)}`, {
              level: "warn"
            });
            return;
          }
          let C = E.result;
          transport_2.onmessage?.({
            jsonrpc: "2.0",
            method: "notifications/initialized"
          });
          let capabilities_2 = C.capabilities,
            M = typeof capabilities_2 === "object" && capabilities_2 !== null && "tools" in capabilities_2 && capabilities_2.tools !== void 0 && capabilities_2.tools !== null,
            toolsListResult;
          if (M) {
            let G = await this.handleMcpControlRequest(server_name, {
              server_name: server_name,
              message: {
                jsonrpc: "2.0",
                id: Oe + "tools-list",
                method: "tools/list"
              }
            }, transport_2);
            if (r) return;
            if (!("result" in G)) {
              t(`[Query.captureSdkMcpServerManifests] '${server_name}' answered tools/list with an error; leaving it to the CLI: ${b(G)}`, {
                level: "warn"
              });
              return;
            }
            if (G.result.nextCursor === void 0) toolsListResult = G.result;
          }
          let manifest = J(b(toolsListResult === void 0 ? {
            initializeResult: C
          } : {
            initializeResult: C,
            toolsListResult: toolsListResult
          }));
          s.set(server_name, {
            transport: transport_2,
            manifest: manifest
          });
        } catch (error) {
          if (!r) t(`[Query.captureSdkMcpServerManifests] '${server_name}': ${error}; the CLI will handshake it over the control channel`, {
            level: "warn"
          });
        }
      },
      a = Array.from(this.sdkMcpServers, ([k, {
        transport: transport_3
      }]) => n(k, transport_3)),
      d = Promise.all(a).then(() => "settled"),
      promise = new Promise(k => {
        this.stopSdkMcpManifestCapture = () => k("closed");
      }),
      g = await nt(Promise.race([d, promise]), Nt);
    r = !0, this.stopSdkMcpManifestCapture = void 0;
    let elapsed_ms = Math.round(performance.now() - e),
      w = {
        servers: a.length,
        captured: s.size,
        elapsed_ms: elapsed_ms
      };
    if (g === "closed") {
      p("sdk_mcp_manifest_capture", "closed", w);
      return;
    }
    if (g === void 0) t(`[Query.captureSdkMcpServerManifests] ${s.size}/${a.length} in-process MCP servers captured within ${Nt} ms; the rest will handshake over the control channel`, {
      level: "warn"
    }), p("sdk_mcp_manifest_capture", "deadline", w);else if (s.size < a.length) p("sdk_mcp_manifest_capture", "partial", w);else _("sdk_mcp_manifest_capture", w);
    if (s.size === 0) return;
    let S = Object.fromEntries(Array.from(this.sdkMcpServers).flatMap(([k, T]) => {
      let E = s.get(k);
      return E !== void 0 && E.transport === T.transport ? [[k, E.manifest]] : [];
    }));
    if (Object.keys(S).length === 0) return;
    return t(`[Query.captureSdkMcpServerManifests] manifests for [${Object.keys(S).join(", ")}] captured in ${elapsed_ms} ms`), S;
  }
  async interrupt(e) {
    return Or("sdk_interrupt", async () => {
      let s = await this.request({
          subtype: "interrupt",
          ...(e?.cancelQueued === !0 && {
            cancel_queued: !0
          })
        }),
        r = s.response?.still_queued;
      if (!Array.isArray(r)) return;
      let n = s.response?.cancelled;
      return {
        still_queued: r.filter(item => typeof item === "string"),
        ...(Array.isArray(n) && {
          cancelled: n.filter(item => typeof item === "string")
        })
      };
    });
  }
  async setPermissionMode(mode) {
    await this.request({
      subtype: "set_permission_mode",
      mode: mode
    });
  }
  async setMcpPermissionModeOverride(serverName, mode_2) {
    return (await this.request({
      subtype: "set_mcp_permission_mode_override",
      serverName: serverName,
      mode: mode_2
    })).response ?? {};
  }
  async setChromeBrowserHints(e) {
    await this.request({
      subtype: "set_chrome_browser_hints",
      ...e
    });
  }
  async setPromptSuggestionsPaused(paused) {
    await this.request({
      subtype: "set_prompt_suggestions_paused",
      paused: paused
    });
  }
  awaitControlResponse(e) {
    return this.transport.expectControlResponse?.(e), new Promise((s, reject_3) => {
      let n = d => {
        if (d.subtype === "success") {
          let {
            pending_permission_requests: pending_permission_requests,
            pending_user_dialog_requests: pending_user_dialog_requests,
            ...h
          } = d;
          s(h);
        } else reject_3(new P(d.error, "awaitControlResponse: CLI error verdict"));
        if (d.pending_permission_requests || d.pending_user_dialog_requests) t("[Query] Ignoring prompt-redelivery fields on awaitControlResponse response");
      };
      if (this.cleanupPerformed) {
        reject_3(tt());
        return;
      }
      let a = this.unmatchedControlResponses.get(e);
      if (a) {
        this.unmatchedControlResponses.delete(e), n(a);
        return;
      }
      this.pendingControlResponses.set(e, {
        handler: d => {
          this.pendingControlResponses.delete(e), n(d);
        },
        reject: reject_3
      });
    });
  }
  async setModel(model_2) {
    await this.request({
      subtype: "set_model",
      model: model_2
    });
  }
  async setMaxThinkingTokens(max_thinking_tokens, thinking_display) {
    await this.request({
      subtype: "set_max_thinking_tokens",
      max_thinking_tokens: max_thinking_tokens,
      thinking_display: thinking_display
    });
  }
  async applyFlagSettings(settings_2) {
    return Or("sdk_apply_flag_settings", async () => {
      await this.request({
        subtype: "apply_flag_settings",
        settings: settings_2
      });
    });
  }
  async getSettings() {
    return (await this.request({
      subtype: "get_settings"
    })).response;
  }
  async getHooksListing() {
    return (await this.request({
      subtype: "get_hooks_listing"
    })).response;
  }
  async listPermissionRules() {
    return (await this.request({
      subtype: "list_permission_rules"
    })).response;
  }
  async updateSettings(source, settings_3) {
    return Or("sdk_update_settings", async () => {
      await this.request({
        subtype: "update_settings",
        source: source,
        settings: settings_3
      });
    });
  }
  async rewindFiles(user_message_id, s) {
    return Or("sdk_rewind_files", async () => (await this.request({
      subtype: "rewind_files",
      user_message_id: user_message_id,
      dry_run: s?.dryRun
    })).response);
  }
  async cancelAsyncMessage(message_uuid) {
    return (await this.request({
      subtype: "cancel_async_message",
      message_uuid: message_uuid
    })).response.cancelled;
  }
  async seedReadState(path, mtime) {
    await this.request({
      subtype: "seed_read_state",
      path: path,
      mtime: mtime
    });
  }
  async setCwd(path_2, s) {
    return Or("sdk_set_cwd", async () => (await this.request({
      subtype: "set_cwd",
      path: path_2,
      ...(s?.trustAccepted !== void 0 && {
        trust_accepted: s.trustAccepted
      }),
      ...(s?.trustedDirectory !== void 0 && {
        trusted_directory: s.trustedDirectory
      })
    })).response);
  }
  async claimSession(e) {
    let s = Or("sdk_claim_session", async () => (await this.request({
        subtype: "claim_session",
        ...e,
        include_initialize: e.include_initialize ?? !0
      })).response),
      initialization = this.initialization;
    return this.initialization = s.then(async n => {
      if (n?.initialize === void 0) return initialization;
      let initialize = n.initialize,
        d = await initialization.then(h => ({
          hooks_applied: h.hooks_applied,
          plugins_applied: h.plugins_applied
        }), () => ({
          hooks_applied: void 0,
          plugins_applied: void 0
        })),
        hooks_applied = initialize.hooks_applied ?? d.hooks_applied,
        plugins_applied = initialize.plugins_applied ?? d.plugins_applied;
      return {
        ...initialize,
        ...(hooks_applied !== void 0 && {
          hooks_applied: hooks_applied
        }),
        ...(plugins_applied !== void 0 && {
          plugins_applied: plugins_applied
        })
      };
    }, () => initialization), this.initialization.catch(() => {}), s;
  }
  async enableRemoteControl(enabled, name, r) {
    let n = ++this.remoteControlCallGeneration,
      workSecretAnswerer_2 = this.workSecretAnswerer,
      sessionId = r?.reattachSessionId || (r?.workSecret === void 0 ? void 0 : zs(r.workSecret)),
      m = enabled && r?.workSecret !== void 0 && r.refreshWorkSecret && sessionId !== void 0 ? {
        sessionId: sessionId,
        refresh: r.refreshWorkSecret
      } : void 0;
    this.workSecretAnswerer = m;
    let g;
    try {
      g = (await this.request({
        subtype: "remote_control",
        enabled: enabled,
        ...(name !== void 0 && {
          name: name
        }),
        reattach_session_id: r?.reattachSessionId,
        keep_session_on_exit: r?.keepSessionOnExit,
        work_secret: r?.workSecret
      })).response;
    } catch (error) {
      if (n === this.remoteControlCallGeneration) this.workSecretAnswerer = void 0;
      throw error;
    }
    if (enabled && n === this.remoteControlCallGeneration) {
      let bridge_session_id = g.bridge_session_id,
        w = [m, workSecretAnswerer_2];
      this.workSecretAnswerer = typeof bridge_session_id === "string" ? w.find(item => item !== void 0 && Kt(item.sessionId, bridge_session_id)) : void 0;
    }
    return g;
  }
  async submitFeedback(description, s) {
    return (await this.request({
      subtype: "submit_feedback",
      description: description,
      surface: s?.surface,
      draft_id: s?.draft_id,
      type: s?.type,
      title: s?.title,
      area: s?.area,
      attach_transcript: s?.attach_transcript
    })).response;
  }
  async renameSession(title, session_id) {
    await this.request({
      subtype: "rename_session",
      title: title,
      source: "host",
      session_id: session_id
    });
  }
  async generateSessionTitle(description_2, s) {
    return Or("sdk_session_title_generate", async () => (await this.request({
      subtype: "generate_session_title",
      description: description_2,
      persist: s?.persist
    })).response.title);
  }
  async askSideQuestion(question, s) {
    return Or("sdk_side_question", async () => {
      let response_3 = (await this.request({
        subtype: "side_question",
        question: question,
        ...(s?.history?.length && {
          history: [...s.history]
        })
      }, s)).response;
      return response_3.response === null ? null : {
        response: response_3.response,
        synthetic: response_3.synthetic ?? !1,
        ...(response_3.refusal_fallback && {
          refusalFallback: {
            originalModel: response_3.refusal_fallback.original_model,
            fallbackModel: response_3.refusal_fallback.fallback_model,
            content: response_3.refusal_fallback.content
          }
        })
      };
    }, () => s?.signal?.aborted ? "cancelled" : "error");
  }
  async launchUltrareview(args_3, s) {
    return (await this.request({
      subtype: "ultrareview_launch",
      args: args_3,
      confirm: s?.confirm ?? !1
    })).response;
  }
  async messageRated(e) {
    await this.request({
      subtype: "message_rated",
      messageUuid: e.messageUuid,
      sentiment: e.sentiment,
      surface: e.surface,
      cleared: e.cleared ?? !1
    });
  }
  processPendingPermissionRequests(e) {
    for (let s of e) if (s.request.subtype === "can_use_tool") this.handleControlRequest(s).catch(() => {});
  }
  processPendingUserDialogRequests(e) {
    for (let s of e) if (s.request.subtype === "request_user_dialog") this.handleControlRequest(s).catch(() => {});
  }
  request(request_3, s) {
    let r = s?.signal;
    if (r?.aborted) return Promise.reject(te(r.reason ?? "Control request aborted"));
    if (this.cleanupPerformed) return Promise.reject(tt());
    let request_id = Math.random().toString(36).substring(2, 15);
    this.transport.expectControlResponse?.(request_id);
    let a = {
        request_id: request_id,
        type: "control_request",
        request: request_3
      },
      d = request_3.subtype === "initialize";
    return new Promise((m, g) => {
      let h,
        w = !1,
        S = C => {
          this.pendingControlResponses.delete(request_id), h?.(), m(C);
        },
        reject_4 = C => {
          this.pendingControlResponses.delete(request_id), h?.(), g(C);
        };
      if (r) {
        let C = () => {
          if (reject_4(te(r.reason ?? "Control request aborted")), !w) return;
          try {
            Promise.resolve(this.transport.write(b({
              type: "control_cancel_request",
              request_id: request_id
            }) + `
`)).catch(() => {});
          } catch {}
        };
        r.addEventListener("abort", C, {
          once: !0
        }), h = () => {
          r.removeEventListener("abort", C);
        };
      }
      this.pendingControlResponses.set(request_id, {
        handler: C => {
          if (C.subtype === "success") S(C);else reject_4(J$(Error(C.error), {
            telemetryMessage: `Claude Code control request failed (${request_3.subtype})`,
            errorClass: "control_request_failed"
          }));
          if (!d && (C.pending_permission_requests || C.pending_user_dialog_requests)) t(`[Query] Ignoring prompt-redelivery fields on non-initialize response (subtype=${request_3.subtype})`);else {
            if (C.pending_permission_requests) this.processPendingPermissionRequests(C.pending_permission_requests);
            if (C.pending_user_dialog_requests) this.processPendingUserDialogRequests(C.pending_user_dialog_requests);
          }
        },
        reject: reject_4
      });
      let T = b(a) + `
`,
        E = () => {
          if (r?.aborted) return;
          return w = !0, this.transport.write(T);
        };
      try {
        (this.initializeHasBeenWritten || this.writingFirstInitialize ? Promise.resolve(E()) : this.initializeWritten.then(E)).catch(reject_4);
      } catch (error) {
        reject_4(error);
      }
    });
  }
  initializationResult() {
    return this.initialization;
  }
  writeAfterInitialize(e) {
    if (this.initializeHasBeenWritten) return Promise.resolve(this.transport.write(e));
    return this.initializeWritten.then(() => this.transport.write(e));
  }
  reinitialize() {
    return Or("sdk_reinitialize", () => this.initialize({
      first: !1
    }));
  }
  async supportedCommands() {
    let {
      commands: commands
    } = await this.initialization;
    return this.latestCommands ?? commands;
  }
  async supportedModels() {
    return (await this.initialization).models;
  }
  async supportedAgents() {
    return (await this.initialization).agents;
  }
  async reconnectMcpServer(serverName_2) {
    await this.request({
      subtype: "mcp_reconnect",
      serverName: serverName_2
    });
  }
  async toggleMcpServer(serverName_3, enabled_2) {
    return Or("sdk_mcp_toggle_server", async () => {
      await this.request({
        subtype: "mcp_toggle",
        serverName: serverName_3,
        enabled: enabled_2
      });
    });
  }
  async readMcpResource(serverName_4, uri) {
    return (await this.request({
      subtype: "mcp_read_resource",
      serverName: serverName_4,
      uri: uri
    })).response;
  }
  async enableChannel(serverName_5) {
    return Or("sdk_mcp_enable_channel", async () => {
      await this.request({
        subtype: "channel_enable",
        serverName: serverName_5
      });
    });
  }
  async mcpAuthenticate(serverName_6, redirectUri) {
    return (await this.request({
      subtype: "mcp_authenticate",
      serverName: serverName_6,
      redirectUri: redirectUri
    })).response;
  }
  async mcpClearAuth(serverName_7) {
    return (await this.request({
      subtype: "mcp_clear_auth",
      serverName: serverName_7
    })).response;
  }
  async mcpSubmitOAuthCallbackUrl(serverName_8, callbackUrl) {
    return (await this.request({
      subtype: "mcp_oauth_callback_url",
      serverName: serverName_8,
      callbackUrl: callbackUrl
    })).response;
  }
  async claudeAuthenticate(loginWithClaudeAi) {
    return (await this.request({
      subtype: "claude_authenticate",
      loginWithClaudeAi: loginWithClaudeAi
    })).response;
  }
  async claudeOAuthCallback(authorizationCode, state) {
    return (await this.request({
      subtype: "claude_oauth_callback",
      authorizationCode: authorizationCode,
      state: state
    })).response;
  }
  async claudeOAuthWaitForCompletion() {
    return (await this.request({
      subtype: "claude_oauth_wait_for_completion"
    })).response;
  }
  async mcpServerStatus() {
    return (await this.request({
      subtype: "mcp_status"
    })).response.mcpServers;
  }
  async getContextUsage(e) {
    return (await this.request({
      subtype: "get_context_usage",
      ...e
    })).response;
  }
  async usage_EXPERIMENTAL_MAY_CHANGE_DO_NOT_RELY_ON_THIS_API_YET(e) {
    return (await this.request({
      subtype: "get_usage",
      ...(e?.skipBehaviors && {
        skip_behaviors: !0
      })
    })).response;
  }
  async getMemoryDialog() {
    return (await this.request({
      subtype: "get_memory_dialog"
    })).response;
  }
  async getSkillsDialog() {
    return (await this.request({
      subtype: "get_skills_dialog"
    })).response;
  }
  async getStatus() {
    return (await this.request({
      subtype: "get_status"
    })).response;
  }
  async exportConversation() {
    return (await this.request({
      subtype: "export_conversation"
    })).response;
  }
  async getChromeDialog() {
    return (await this.request({
      subtype: "get_chrome_dialog"
    })).response;
  }
  async getChromeBrowsers() {
    return (await this.request({
      subtype: "get_chrome_browsers"
    })).response;
  }
  async selectChromeBrowser(device_id) {
    return (await this.request({
      subtype: "select_chrome_browser",
      device_id: device_id
    })).response;
  }
  async getSandboxDialog() {
    return (await this.request({
      subtype: "get_sandbox_dialog"
    })).response;
  }
  async readFile(path_3, s) {
    try {
      return (await this.request({
        subtype: "read_file",
        path: path_3,
        max_bytes: s?.maxBytes,
        encoding: s?.encoding
      })).response;
    } catch {
      return null;
    }
  }
  async getPlan() {
    return (await this.request({
      subtype: "get_plan"
    })).response;
  }
  async reloadPlugins(e) {
    return Or("sdk_reload_plugins", async () => (await this.request({
      subtype: "reload_plugins",
      ...(e?.holdOnCacheImpact && {
        hold_on_cache_impact: !0
      })
    })).response);
  }
  async reloadSkills() {
    return Or("sdk_reload_skills", async () => (await this.request({
      subtype: "reload_skills"
    })).response);
  }
  async reloadOutputStyles() {
    return Or("sdk_reload_output_styles", async () => (await this.request({
      subtype: "reload_output_styles"
    })).response);
  }
  async setMcpServers(e) {
    return Or("sdk_mcp_set_servers", async () => {
      let s = {},
        r = {};
      for (let [g, h] of Object.entries(e)) if (h.type === "sdk" && "instance" in h) s[g] = h;else r[g] = h;
      let n = new Set(this.sdkMcpServers.keys()),
        a = new Set(Object.keys(s));
      for (let g of n) if (!a.has(g)) await this.disconnectSdkMcpServer(g);
      for (let [g, h] of Object.entries(s)) {
        let w = this.sdkMcpServers.get(g);
        if (!w) this.connectSdkMcpServer(g, h);else if (aQe(h.timeout) !== w.timeout) t(`[Query.setMcpServers] MCP server '${g}' is already registered; its timeout change is ignored until the server is removed and re-added`);
      }
      let d = {};
      for (let name_2 of Object.keys(s)) {
        let timeout_2 = this.sdkMcpServers.get(name_2)?.timeout;
        d[name_2] = {
          type: "sdk",
          name: name_2,
          ...(timeout_2 !== void 0 && {
            timeout: timeout_2
          })
        };
      }
      return (await this.request({
        subtype: "mcp_set_servers",
        servers: {
          ...r,
          ...d
        }
      })).response;
    });
  }
  async accountInfo() {
    return (await this.initialization).account;
  }
  async streamInput(e) {
    t("[Query.streamInput] Starting to process input stream");
    try {
      if (!this.initializeHasBeenWritten) await this.initializeWritten;
      let s = 0;
      for await (let r of e) {
        if (s++, t(`[Query.streamInput] Processing message ${s}: ${r.type}`), this.abortController?.signal.aborted) break;
        await Promise.resolve(this.transport.write(b(this.verbatimPrompts ? {
          ...r,
          client_composed: !0
        } : r) + `
`));
      }
      if (t(`[Query.streamInput] Finished processing ${s} messages from input stream`), s > 0 && this.hasBidirectionalNeeds()) t("[Query.streamInput] Has bidirectional needs, waiting for first result"), await this.waitForFirstResult();
      t("[Query] Calling transport.endInput() to close stdin to CLI process"), this.transport.endInput();
    } catch (error) {
      if (!(error instanceof q$e)) throw error;
    }
  }
  waitForFirstResult() {
    if (this.firstResultReceived) return t("[Query.waitForFirstResult] Result already received, returning immediately"), Promise.resolve();
    return new Promise(e => {
      let s = this.abortController?.signal;
      if (this.cleanupPerformed || s?.aborted) {
        e();
        return;
      }
      let r = () => e();
      s?.addEventListener("abort", r, {
        once: !0
      }), this.addCleanupCallback(() => {
        s?.removeEventListener("abort", r), e();
      }), this.firstResultReceivedResolve = () => {
        s?.removeEventListener("abort", r), e();
      };
    });
  }
  handleHookCallbacks(e, s, r, signal_4) {
    let a = this.hookCallbacks.get(e);
    if (!a) throw Error(`No hook callback found for ID: ${e}`);
    return a(s, r, {
      signal: signal_4
    });
  }
  connectSdkMcpServer(e, s) {
    let transport_4 = new Wpr(a => this.sendMcpServerMessageToCli(e, a)),
      connection = s.instance.connect(transport_4).catch(a => {
        if (this.sdkMcpServers.get(e)?.transport === transport_4) this.sdkMcpServers.delete(e);
        t(`[Query.connectSdkMcpServer] Failed to connect MCP server '${e}': ${a}`, {
          level: "error"
        });
      });
    this.sdkMcpServers.set(e, {
      transport: transport_4,
      timeout: aQe(s.timeout),
      connection: connection
    });
  }
  async disconnectSdkMcpServer(e) {
    let s = this.sdkMcpServers.get(e);
    if (s) {
      let r = `${e}:${Oe}`;
      for (let [n, a] of this.pendingMcpResponses) if (n.startsWith(r)) this.pendingMcpResponses.delete(n), a.reject(Error("MCP server was removed during the manifest capture"));
      if (await s.transport.close(), this.sdkMcpServers.get(e) === s) this.sdkMcpServers.delete(e);
    }
  }
  sendMcpServerMessageToCli(server_name_2, message_2) {
    if ("id" in message_2 && message_2.id !== null && message_2.id !== void 0) {
      let n = `${server_name_2}:${message_2.id}`,
        a = this.pendingMcpResponses.get(n);
      if (a) {
        a.resolve(message_2), this.pendingMcpResponses.delete(n);
        return;
      }
      if (typeof message_2.id === "string" && message_2.id.startsWith(Oe)) {
        t(`[Query.sendMcpServerMessageToCli] Dropping late manifest-capture reply from '${server_name_2}' (${message_2.id})`);
        return;
      }
    }
    let r = {
      type: "control_request",
      request_id: Ide(),
      request: {
        subtype: "mcp_message",
        server_name: server_name_2,
        message: message_2
      }
    };
    if (!this.initializeHasBeenWritten && lQe(message_2)) this.sdkMcpToolsChangedDuringCapture.add(server_name_2);
    this.writeAfterInitialize(b(r) + `
`).catch(n => {
      t(`[Query.sendMcpServerMessageToCli] Transport write failed: ${n}`, {
        level: "error"
      });
    });
  }
  handleMcpControlRequest(e, s, r) {
    let n = "id" in s.message ? s.message.id : null,
      a = `${e}:${n}`;
    return new Promise((d, m) => {
      let g = () => {
          this.pendingMcpResponses.delete(a);
        },
        resolve = S => {
          g(), d(S);
        },
        reject_5 = S => {
          g(), m(S);
        };
      if (this.pendingMcpResponses.set(a, {
        resolve: resolve,
        reject: reject_5
      }), r.onmessage) r.onmessage(s.message);else {
        g(), m(Error("No message handler registered"));
        return;
      }
    });
  }
}
function tt() {
  return Error("Query closed before response received");
}
function Kt(e, s) {
  if (e === s) return !0;
  let r = e.slice(e.lastIndexOf("_") + 1),
    n = s.slice(s.lastIndexOf("_") + 1);
  return r.length >= 4 && r === n;
}
function zs(e) {
  try {
    let s = J(Buffer.from(e, "base64url").toString("utf8"));
    if (typeof s !== "object" || s === null || !("session_ingress_token" in s) || typeof s.session_ingress_token !== "string") return;
    let session_ingress_token = s.session_ingress_token,
      a = (session_ingress_token.startsWith("sk-ant-si-") ? session_ingress_token.slice(10) : session_ingress_token).split(".");
    if (a.length !== 3 || !a[1]) return;
    let d = J(Buffer.from(a[1], "base64url").toString("utf8"));
    return typeof d === "object" && d !== null && "session_id" in d && typeof d.session_id === "string" && d.session_id ? d.session_id : void 0;
  } catch {
    return;
  }
}
var je = be(Zi(), 1);
import { copyFile as Ws, readFile as Qs, rm as qt, writeFile as Bt } from "fs/promises";
import { homedir as $t } from "os";
import { join as st } from "path";
function Gt(e) {
  return {
    globalConfig: st(e || $t(), ".claude.json"),
    userSettings: st(e || st($t(), ".claude"), "settings.json")
  };
}
function rt(backend, s, r, key_2) {
  return backend !== void 0 && s === r ? {
    backend: backend,
    key: key_2
  } : void 0;
}
async function oe(e, s, r, n) {
  if (n) return Vs(n, e, s, r);
  try {
    if (r) await Bt(s, r(await Qs(e)), {
      mode: 384
    });else await Ws(e, s);
  } catch (error) {
    if (v(error) === void 0) throw error;
    if (!B(error)) await qt(s, {
      force: !0
    }).catch(() => {}), t(`sessionStore resume: skipping ${e} (${v(error)})`);
  }
}
async function Vs({
  backend: backend_2,
  key: key_3
}, r, n, a) {
  let d = await backend_2.read([key_3]);
  if (!d.ok) {
    if (d.error.code === "InvalidArgument") throw new P(`sessionStore resume: invalid v5 key for ${r}: ${d.error.argument}${d.error.reason ? ` (${d.error.reason})` : ""}`, "sessionStore resume: invalid v5 key (InvalidArgument from backend read)");
    t(`sessionStore resume: skipping ${r} (${d.error.code})`);
    return;
  }
  let m = d.value.items[0];
  if (!m?.found) return;
  let g = Buffer.from(m.value);
  try {
    await Bt(n, a ? a(g) : g, {
      mode: 384
    });
  } catch (error) {
    if (v(error) === void 0) throw error;
    if (!B(error)) await qt(n, {
      force: !0
    }).catch(() => {}), t(`sessionStore resume: skipping ${r} (${v(error)})`);
  }
}
function Xs(e, s) {
  if (e === "bypassPermissions") return "canUseTool will not be invoked: permissionMode 'bypassPermissions' auto-approves every tool call (except explicit deny rules) before the callback is consulted. To gate every tool call, use a PreToolUse hook instead.";
  let r = s.filter(item => item.length > 0 && !item.includes("("));
  if (r.length === 0) return;
  return `canUseTool will not be invoked for: ${r.join(", ")}. Bare allowedTools entries auto-approve the whole tool before the callback is consulted. To gate every tool call, use a PreToolUse hook; or remove the bare names from allowedTools so they fall through to canUseTool. Allow rules from settings files can also shadow the callback but are not visible here.`;
}
function zt(e, s, r) {
  if (!e) return;
  let n = Xs(s, r);
  if (n === void 0) return;
  process.emitWarning(n, {
    code: "CLAUDE_SDK_CAN_USE_TOOL_SHADOWED"
  });
}
import { realpathSync as Js } from "fs";
import { isAbsolute as Ys, relative as Zs, resolve as er, sep as tr } from "path";
function Wt(e) {
  let s = er(e ?? "."),
    r;
  try {
    r = Js(s);
  } catch {
    r = s;
  }
  return xn(r);
}
function ke(e, s) {
  let r = Wt(e);
  if (s === void 0) return nS(r);
  return (s.CLAUDE_CONFIG_DIR ? fKr(s.CLAUDE_CODE_PROJECT_DIR_NAME) : void 0) ?? Kx(r);
}
function it(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "agent_metadata";
}
function ot(e, s) {
  let r = Zs(s, e),
    n = r.split(tr);
  if (n[0] === ".." || Ys(r)) return null;
  if (n.length < 2) return null;
  let projectKey = n[0],
    sessionId_2 = n[1];
  if (n.length === 2 && sessionId_2.endsWith(".jsonl")) return {
    projectKey: projectKey,
    sessionId: sessionId_2.replace(/\.jsonl$/, "")
  };
  if (n.length >= 4) {
    let m = n.slice(2),
      g = m.length - 1;
    return m[g] = m.at(-1).replace(/\.jsonl$/, ""), {
      projectKey: projectKey,
      sessionId: sessionId_2,
      subpath: m.join("/")
    };
  }
  return null;
}
process.env.NoDefaultCurrentDirectoryInExePath = "1";
var fr = ["enabledPlugins", "extraKnownMarketplaces", "additionalMarketplaces"];
function Xt(e) {
  let s;
  try {
    s = J(Jo(e.toString("utf8")));
  } catch {
    return e;
  }
  if (!Jt(s)) return e;
  let r = !1;
  for (let a of fr) if (Object.hasOwn(s, a)) delete s[a], r = !0;
  let env_3 = s.env;
  if (Jt(env_3) && Object.hasOwn(env_3, "CLAUDE_CONFIG_DIR")) delete env_3.CLAUDE_CONFIG_DIR, r = !0;
  return r ? b(s) : e;
}
function Jt(e) {
  return e !== null && typeof e === "object" && !Array.isArray(e);
}
async function mr(e, s) {
  if (!e) return;
  let r = e;
  try {
    let n = J(e);
    if (n?.claudeAiOauth?.refreshToken) delete n.claudeAiOauth.refreshToken, r = b(n);
  } catch {}
  await Yt(s, r, {
    mode: 384
  });
}
function gr() {
  return Promise.resolve(void 0);
}
async function hr(e, sessionId_3, r, n, a = 60000, d) {
  if (!WI(sessionId_3)) return;
  let projectKey_2 = ke(r, n),
    g = await Ht(e.load({
      projectKey: projectKey_2,
      sessionId: sessionId_3
    }), a, `SessionStore.load() timed out after ${a}ms for session ${sessionId_3}`);
  if (!g || g.length === 0) return;
  let h = D(ar(), `claude-resume-${rr()}`);
  try {
    let w = D(h, "projects", projectKey_2);
    await at(w, {
      recursive: !0,
      mode: 448
    });
    let S = D(w, `${sessionId_3}.jsonl`);
    await QAe(S, g);
    let k = n?.CLAUDE_CONFIG_DIR ?? process.env.CLAUDE_CONFIG_DIR,
      T = k ?? D(lt(), ".claude"),
      E;
    try {
      E = await nr(D(T, ".credentials.json"), "utf-8");
    } catch (error) {
      if (!B(error)) throw error;
    }
    if (!k && !(n ?? process.env).ANTHROPIC_API_KEY && !(n ?? process.env).CLAUDE_CODE_OAUTH_TOKEN) E = (await gr()) ?? E;
    await mr(E, D(h, ".credentials.json"));
    let C = Gt(Dyn("CLAUDE_CONFIG_DIR")),
      I = k || lt(),
      M = D(I, ".claude.json");
    await oe(M, D(h, ".claude.json"), void 0, rt(d, M, C.globalConfig, Ae.globalConfig())), await oe(D(T, ".config.json"), D(h, ".config.json"));
    for (let H of sre) if (H) await oe(D(I, `.claude${H}.json`), D(h, `.claude${H}.json`));
    let K = D(T, "settings.json");
    if (await oe(K, D(h, "settings.json"), Xt, rt(d, K, C.userSettings, Ae.userSettings())), await oe(D(T, "cowork_settings.json"), D(h, "cowork_settings.json"), Xt), e.listSubkeys) await Sr(e, {
      projectKey: projectKey_2,
      sessionId: sessionId_3
    }, D(w, sessionId_3), a);
    return h;
  } catch (error) {
    throw await ts(h), error;
  }
}
async function Sr(e, s, r, n) {
  let a = await Ht(e.listSubkeys({
    projectKey: s.projectKey,
    sessionId: s.sessionId
  }), n, `SessionStore.listSubkeys() timed out after ${n}ms for session ${s.sessionId}`);
  for (let subpath of a) {
    let m = ct(r, subpath + ".jsonl");
    if (!subpath || lr(subpath) || subpath.split(/[\\/]/).includes("..") || !m.startsWith(r + dr)) {
      t(`[SessionStore] skipping unsafe subpath from listSubkeys: ${subpath}`, {
        level: "warn"
      });
      continue;
    }
    let g = await Ht(e.load({
      projectKey: s.projectKey,
      sessionId: s.sessionId,
      subpath: subpath
    }), n, `SessionStore.load() timed out after ${n}ms for session ${s.sessionId} subpath ${subpath}`);
    if (!g || g.length === 0) continue;
    let h = [],
      w = [];
    for (let S of g) if (it(S)) h.push(S);else w.push(S);
    if (w.length > 0) await at(Vt(m), {
      recursive: !0
    }), await QAe(m, w);
    if (h.length > 0) {
      let S = h.at(-1),
        k = ct(r, subpath + ".meta.json");
      await at(Vt(k), {
        recursive: !0
      });
      let {
        type: type,
        ...E
      } = S;
      await Yt(k, b(E), {
        mode: 384
      });
    }
  }
}
function yr(e) {
  let s = e?.accepted === !0 && (typeof e.directory !== "string" || !(cr.isAbsolute(e.directory) || ur.isAbsolute(e.directory))) ? void 0 : e;
  if (e !== void 0 && s === void 0) t("workspaceTrust ignored: accepted requires an absolute directory, as it exists where Claude Code runs", {
    level: "warn"
  });
  return s;
}
function Zt(e, s) {
  let {
      isSingleUserTurn: isSingleUserTurn,
      resumeConfigDir: resumeConfigDir,
      deferSpawn: deferSpawn
    } = s,
    {
      systemPrompt: systemPrompt,
      settings: settings_4,
      managedSettings: managedSettings,
      settingSources: settingSources_2,
      sandbox: sandbox_3,
      ...S
    } = e ?? {},
    systemPrompt_2,
    appendSystemPrompt,
    excludeDynamicSections,
    systemPromptSnapshot;
  if (systemPrompt === void 0) systemPrompt_2 = "";else if (typeof systemPrompt === "string") systemPrompt_2 = systemPrompt;else if (Array.isArray(systemPrompt)) systemPrompt_2 = systemPrompt;else if (systemPrompt.type === "custom") systemPrompt_2 = systemPrompt.prompt, systemPromptSnapshot = systemPrompt.snapshot;else if (systemPrompt.type === "preset") appendSystemPrompt = systemPrompt.append, excludeDynamicSections = systemPrompt.excludeDynamicSections, systemPromptSnapshot = systemPrompt.snapshot;
  process.env.CLAUDE_AGENT_SDK_VERSION = process.env.CLAUDE_AGENT_SDK_VERSION ?? "unknown";
  let {
      abortController: abortController_3 = Hn(),
      additionalDirectories: additionalDirectories_2 = [],
      projectConfigRoot: projectConfigRoot_2,
      agent: agent_2,
      agents: agents,
      allowedTools: allowedTools_2 = [],
      betas: betas_2,
      canUseTool: canUseTool_2,
      continue: ae,
      cwd: cwd_3,
      debug: debug,
      debugFile: debugFile,
      disallowedTools: disallowedTools_2 = [],
      tools: tools_2,
      env: env_4,
      executable: executable_2 = GI() ? "bun" : "node",
      executableArgs: executableArgs_2 = [],
      extraArgs: extraArgs_2 = {},
      fallbackModel: fallbackModel_2,
      enableFileCheckpointing: enableFileCheckpointing,
      toolConfig: toolConfig,
      forkSession: forkSession,
      hooks: hooks,
      includeHookEvents: includeHookEvents,
      includePartialMessages: includePartialMessages_2,
      forwardSubagentText: forwardSubagentText,
      verbatimPrompts = !1,
      onElicitation: onElicitation,
      onUserDialog: onUserDialog,
      supportedDialogKinds: supportedDialogKinds,
      perTaskStopAffordance: perTaskStopAffordance,
      rapidFollowupPreempt: rapidFollowupPreempt,
      workspaceTrust: workspaceTrust,
      persistSession: persistSession,
      sessionStore: sessionStore,
      sessionStoreFlush: sessionStoreFlush,
      thinking: thinking,
      effort: effort,
      maxThinkingTokens: Be,
      maxTurns: maxTurns_2,
      maxBudgetUsd: maxBudgetUsd_2,
      taskBudget: taskBudget_2,
      mcpServers: mcpServers_2,
      model: as,
      outputFormat: outputFormat,
      permissionMode: permissionMode_2,
      allowDangerouslySkipPermissions: allowDangerouslySkipPermissions_2 = !1,
      permissionPromptToolName: permissionPromptToolName_2,
      permissionPrompts: permissionPrompts_2,
      plugins: plugins_2,
      pluginDelivery = "argv",
      getOAuthToken: getOAuthToken,
      getHostAuthToken: getHostAuthToken,
      workload: workload,
      resume: resume_2,
      resumeSessionAt: resumeSessionAt,
      resumeDropsTurn: resumeDropsTurn,
      sessionId: sessionId_4,
      skills: skills_2,
      stderr: stderr_2,
      strictMcpConfig: strictMcpConfig_2
    } = S,
    permissionMode_3 = permissionMode_2 ?? (e?.resolvePermissionModeInCli ? void 0 : "default");
  if (sessionStore && persistSession === !1) throw Error("sessionStore cannot be used with persistSession: false -- the storage adapter requires local writes to mirror from. Use CLAUDE_CONFIG_DIR=/tmp for ephemeral local writes with external mirroring.");
  if (supportedDialogKinds !== void 0 && supportedDialogKinds.length > 0 && !onUserDialog) throw Error("supportedDialogKinds requires an onUserDialog callback -- declaring dialog kinds without a handler would park dialogs nothing can answer. Provide onUserDialog, or omit supportedDialogKinds.");
  let workspaceTrust_2 = yr(workspaceTrust);
  if (sessionStore && ae && !resume_2 && !sessionStore.listSessions) throw Error("Options.continue with sessionStore requires store.listSessions to be implemented");
  if (sessionStore && enableFileCheckpointing) throw Error("enableFileCheckpointing is not yet supported with sessionStore (backup blobs are not mirrored, so rewindFiles() fails after a store-backed resume).");
  if (sessionStore && S.spawnClaudeCodeProcess) t("sessionStore with custom spawnClaudeCodeProcess: ensure the subprocess CLAUDE_CONFIG_DIR matches the parent (same path, same separators) or transcript_mirror frames will be dropped.", {
    level: "warn"
  });
  if (zt(!!canUseTool_2, permissionMode_3 ?? "default", allowedTools_2), pluginDelivery !== "argv" && pluginDelivery !== "initialize") throw Error("Invalid pluginDelivery. Expected 'argv' or 'initialize'.");
  let pluginsViaInitialize_2 = pluginDelivery === "initialize" && plugins_2 !== void 0 && plugins_2.length > 0,
    pathToClaudeCodeExecutable_2 = S.pathToClaudeCodeExecutable;
  if (!pathToClaudeCodeExecutable_2) {
    let O = pr(import.meta.url),
      F = or(O),
      z = Lt(re => F.resolve(re));
    if (!z) throw Error("Native CLI binary for win32-x64 not found. Reinstall @anthropic-ai/claude-agent-sdk without --omit=optional, or set options.pathToClaudeCodeExecutable.");
    pathToClaudeCodeExecutable_2 = z;
  }
  let jsonSchema_2 = outputFormat?.type === "json_schema" ? outputFormat.schema : void 0,
    x = env_4 ? {
      ...env_4
    } : {
      ...process.env
    };
  if (!x.CLAUDE_CODE_ENTRYPOINT) x.CLAUDE_CODE_ENTRYPOINT = "sdk-ts";
  if (!x.CLAUDE_AGENT_SDK_VERSION) x.CLAUDE_AGENT_SDK_VERSION = process.env.CLAUDE_AGENT_SDK_VERSION;
  if (enableFileCheckpointing) x.CLAUDE_CODE_ENABLE_SDK_FILE_CHECKPOINTING = "true";
  if (getOAuthToken) x.CLAUDE_CODE_SDK_HAS_OAUTH_REFRESH = "1";
  if (getHostAuthToken) x.CLAUDE_CODE_SDK_HAS_HOST_AUTH_REFRESH = "1";
  if (toolConfig?.askUserQuestion?.previewFormat) x.CLAUDE_CODE_QUESTION_PREVIEW_FORMAT = toolConfig.askUserQuestion.previewFormat;
  for (let [O, F] of [[toolConfig?.askUserQuestion?.extendedQuestions, "CLAUDE_CODE_QUESTION_EXTENDED"], [toolConfig?.askUserQuestion?.optionalDescriptions, "CLAUDE_CODE_QUESTION_OPTIONAL_DESCRIPTIONS"]]) if (O) x[F] = "1";else if (!env_4) {
    for (let z of Object.keys(x)) if (z.toUpperCase() === F) delete x[z];
  }
  let ze = {};
  if (je.propagation.inject(je.context.active(), ze), "traceparent" in ze) {
    for (let O of ["TRACEPARENT", "TRACESTATE"]) if (!(O in (env_4 ?? {}))) delete x[O];
  }
  for (let [O, F] of Object.entries(ze)) {
    let z = O.toUpperCase();
    if (!(z in (env_4 ?? {}))) x[z] = F;
  }
  let mcpServers_3 = {},
    kt = new Map();
  if (mcpServers_2) for (let [O, F] of Object.entries(mcpServers_2)) if (F.type === "sdk" && F.instance) kt.set(O, F);else mcpServers_3[O] = F;
  let thinkingConfig_2;
  if (thinking) switch (thinking.type) {
    case "adaptive":
      thinkingConfig_2 = {
        type: "adaptive",
        display: thinking.display
      };
      break;
    case "enabled":
      thinkingConfig_2 = {
        type: "enabled",
        budgetTokens: thinking.budgetTokens,
        display: thinking.display
      };
      break;
    case "disabled":
      thinkingConfig_2 = {
        type: "disabled"
      };
      break;
  } else if (Be !== void 0) thinkingConfig_2 = Be === 0 ? {
    type: "disabled"
  } : {
    type: "enabled",
    budgetTokens: Be
  };
  if (resumeConfigDir) x.CLAUDE_CONFIG_DIR = resumeConfigDir, x.CLAUDE_SECURESTORAGE_CONFIG_DIR = env_4?.CLAUDE_SECURESTORAGE_CONFIG_DIR ?? process.env.CLAUDE_SECURESTORAGE_CONFIG_DIR ?? env_4?.CLAUDE_CONFIG_DIR ?? process.env.CLAUDE_CONFIG_DIR ?? "";
  let transport_5 = new et({
      abortController: abortController_3,
      additionalDirectories: additionalDirectories_2,
      projectConfigRoot: projectConfigRoot_2,
      agent: agent_2,
      betas: betas_2,
      cwd: cwd_3,
      debug: debug,
      debugFile: debugFile,
      executable: executable_2,
      executableArgs: executableArgs_2,
      extraArgs: workload ? {
        ...extraArgs_2,
        workload: workload
      } : extraArgs_2,
      pathToClaudeCodeExecutable: pathToClaudeCodeExecutable_2,
      env: x,
      forkSession: forkSession,
      stderr: stderr_2,
      thinkingConfig: thinkingConfig_2,
      effort: effort,
      maxTurns: maxTurns_2,
      maxBudgetUsd: maxBudgetUsd_2,
      taskBudget: taskBudget_2,
      model: as,
      fallbackModel: fallbackModel_2,
      jsonSchema: jsonSchema_2,
      permissionMode: permissionMode_3,
      allowDangerouslySkipPermissions: allowDangerouslySkipPermissions_2,
      permissionPromptToolName: permissionPromptToolName_2,
      permissionPrompts: permissionPrompts_2,
      continueConversation: sessionStore ? void 0 : ae,
      resume: resume_2,
      resumeSessionAt: resumeSessionAt,
      resumeDropsTurn: resumeDropsTurn,
      sessionId: sessionId_4,
      settings: typeof settings_4 === "object" ? b(settings_4) : settings_4,
      managedSettings: managedSettings ? b(managedSettings) : void 0,
      settingSources: settingSources_2,
      skills: skills_2,
      allowedTools: allowedTools_2,
      disallowedTools: disallowedTools_2,
      tools: tools_2,
      mcpServers: mcpServers_3,
      strictMcpConfig: strictMcpConfig_2,
      canUseTool: !!canUseTool_2,
      hooks: !!hooks,
      includeHookEvents: includeHookEvents,
      includePartialMessages: includePartialMessages_2,
      persistSession: persistSession,
      sessionMirror: !!sessionStore,
      plugins: plugins_2,
      pluginsViaInitialize: pluginsViaInitialize_2,
      sandbox: sandbox_3,
      spawnClaudeCodeProcess: S.spawnClaudeCodeProcess,
      deferSpawn: deferSpawn
    }),
    ys = {
      systemPrompt: systemPrompt_2,
      appendSystemPrompt: appendSystemPrompt,
      planModeInstructions: S.planModeInstructions,
      systemPromptSnapshot: systemPromptSnapshot,
      appendSubagentSystemPrompt: S.appendSubagentSystemPrompt,
      toolAliases: S.toolAliases,
      excludeDynamicSections: excludeDynamicSections,
      agents: agents,
      title: S.title,
      skills: skills_2,
      webSearchIsolationExemptMcpServers: S.webSearchIsolationExemptMcpServers,
      promptSuggestions: S.promptSuggestions,
      agentProgressSummaries: S.agentProgressSummaries,
      forwardSubagentText: forwardSubagentText,
      supportedDialogKinds: supportedDialogKinds,
      perTaskStopAffordance: perTaskStopAffordance,
      rapidFollowupPreempt: rapidFollowupPreempt,
      workspaceTrust: workspaceTrust_2,
      plugins: pluginsViaInitialize_2 ? plugins_2 : void 0,
      captureSdkMcpManifests: !m9n("CLAUDE_AGENT_SDK_DISABLE_MCP_MANIFESTS")
    },
    queryInstance = new Ue(transport_5, isSingleUserTurn, canUseTool_2, hooks, abortController_3, kt, jsonSchema_2, ys, onElicitation, getOAuthToken, getHostAuthToken, onUserDialog, verbatimPrompts);
  if (sessionStore) {
    let O = () => D(x.CLAUDE_CONFIG_DIR ?? D(lt(), ".claude"), "projects"),
      F = sessionStoreFlush === "eager",
      z = new Ve(async (re, Qe) => {
        let ye = ot(re, O());
        if (ye) await sessionStore.append(ye, Qe);else t(`[SessionStore] dropping mirror frame: filePath ${re} is not under ${O()} -- subprocess CLAUDE_CONFIG_DIR likely differs from parent (custom spawnClaudeCodeProcess / container?)`, {
          level: "warn"
        });
      }, {
        onError: (re, Qe) => {
          let ye = ot(re, O());
          if (ye) queryInstance.reportMirrorError(ye, Qe.message);
        },
        maxPendingEntries: F ? 0 : Te,
        maxPendingBytes: F ? 0 : we
      });
    queryInstance.setTranscriptMirrorBatcher(z);
  }
  return {
    queryInstance: queryInstance,
    transport: transport_5,
    abortController: abortController_3,
    processEnv: x,
    verbatimPrompts: verbatimPrompts
  };
}
function es(e, text, r, n) {
  if (typeof text === "string") e.writeAfterInitialize(b({
    type: "user",
    session_id: "",
    message: {
      role: "user",
      content: [{
        type: "text",
        text: text
      }]
    },
    parent_tool_use_id: null,
    ...(n && {
      client_composed: !0
    })
  }) + `
`).catch(a => r.abort(a));else e.streamInput(text).catch(a => r.abort(a));
}
var wr = new Set(["EBUSY", "EMFILE", "ENFILE", "ENOTEMPTY", "EPERM"]);
async function ts(e) {
  for (let s = 0;; s++) try {
    return await ir(e, {
      recursive: !0,
      force: !0
    });
  } catch (error) {
    if (s >= 4 || !wr.has(v(error) ?? "")) return;
    await Q((s + 1) * 100);
  }
}
function br(e, s) {
  e.waitForExit().catch(() => {}).finally(() => ts(s));
}
function kr({
  prompt: prompt,
  options: options
}) {
  if ((options?.resume || options?.continue) && options?.sessionStore) return vr(prompt, options);
  let {
    queryInstance: queryInstance_2,
    abortController: abortController_4,
    verbatimPrompts: verbatimPrompts_2
  } = Zt(options, {
    isSingleUserTurn: typeof prompt === "string"
  });
  return es(queryInstance_2, prompt, abortController_4, verbatimPrompts_2), queryInstance_2;
}
function vr(e, s) {
  let {
      queryInstance: queryInstance_3,
      transport: transport_6,
      abortController: abortController_5,
      processEnv: processEnv,
      verbatimPrompts: verbatimPrompts_3
    } = Zt({
      ...s
    }, {
      isSingleUserTurn: typeof e === "string",
      deferSpawn: !0
    }),
    g = ct(s.cwd ?? "."),
    sessionStore_2 = s.sessionStore,
    w = s.loadTimeoutMs ?? 60000,
    resume_3 = s.resume;
  return (async () => {
    if (!resume_3) resume_3 = (await Ht(sessionStore_2.listSessions(ke(g, s.env)), w, `SessionStore.listSessions() timed out after ${w}ms`)).slice().sort((itemA, itemB) => itemB.mtime - itemA.mtime)[0]?.sessionId;
    if (!resume_3) return;
    return hr(sessionStore_2, resume_3, g, s.env, s.loadTimeoutMs);
  })().then(CLAUDE_CONFIG_DIR => {
    if (CLAUDE_CONFIG_DIR) {
      transport_6.updateResume(resume_3);
      let E = {
        CLAUDE_CONFIG_DIR: CLAUDE_CONFIG_DIR
      };
      {
        let C = s.env?.CLAUDE_SECURESTORAGE_CONFIG_DIR ?? process.env.CLAUDE_SECURESTORAGE_CONFIG_DIR ?? s.env?.CLAUDE_CONFIG_DIR ?? process.env.CLAUDE_CONFIG_DIR ?? "";
        E.CLAUDE_SECURESTORAGE_CONFIG_DIR = C, processEnv.CLAUDE_SECURESTORAGE_CONFIG_DIR = C;
      }
      transport_6.updateEnv(E), processEnv.CLAUDE_CONFIG_DIR = CLAUDE_CONFIG_DIR, queryInstance_3.addCleanupCallback(() => br(transport_6, CLAUDE_CONFIG_DIR));
    }
    if (!queryInstance_3.isClosed()) transport_6.spawn();
  }).catch(T => {
    let E = te(T);
    transport_6.spawnAbort(E), queryInstance_3.setError(E);
  }), es(queryInstance_3, e, abortController_5, verbatimPrompts_3), queryInstance_3;
}
export { kr as query };