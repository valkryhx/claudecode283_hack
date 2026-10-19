// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { are } from "B:/~BUN/root/chunk-9ka04m0y.js";
import { Fe } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { L, j } from "B:/~BUN/root/chunk-rpez7z7a.js";
import "B:/~BUN/root/chunk-hg8ngszx.js";
import { c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { x, gV, d1, H, d, k, Fr, G, Wt } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Y, Nt, je } from "B:/~BUN/root/chunk-89mss1tj.js";
import { z, $n } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { _, J, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { tu, rQn, zjr, Pe, fqo } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import "B:/~BUN/root/chunk-xf0m410v.js";
import { ld, mc } from "B:/~BUN/root/chunk-nggrknsv.js";
import "B:/~BUN/root/chunk-psh1mp8h.js";
import { pk } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { Whe } from "B:/~BUN/root/chunk-jpdys232.js";
import "B:/~BUN/root/chunk-c09hf5e4.js";
import "B:/~BUN/root/chunk-je1b1drr.js";
import "B:/~BUN/root/chunk-j704adqd.js";
import { lI, dGe, s0, cE } from "B:/~BUN/root/chunk-4bgg5sdy.js";
import { Twe as protocolVersion, _It, xE } from "B:/~BUN/root/chunk-9y4mcm7b.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { Bte, nl, sGs } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { Be } from "B:/~BUN/root/chunk-d9rmnpx3.js";
import "B:/~BUN/root/chunk-9080897a.js";
import "B:/~BUN/root/chunk-rvc0n7zm.js";
import { gn } from "B:/~BUN/root/chunk-pjgzz98k.js";
import "B:/~BUN/root/chunk-d8rhtyyx.js";
import "B:/~BUN/root/chunk-za0y5fhs.js";
import "B:/~BUN/root/chunk-bvx12xr8.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { g, p, po } from "B:/~BUN/root/chunk-kzgf20y6.js";
import "B:/~BUN/root/chunk-d8fk23v1.js";
import "B:/~BUN/root/chunk-yrjpmz6e.js";
import { Bo } from "B:/~BUN/root/chunk-cqkcn3bx.js";
import { jQe, Hu } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import "B:/~BUN/root/chunk-gyr2a6wz.js";
import "B:/~BUN/root/chunk-7c8rc0p5.js";
import "B:/~BUN/root/chunk-yw21pggd.js";
import "B:/~BUN/root/chunk-8z3a373v.js";
import "B:/~BUN/root/chunk-x50ytcx8.js";
import "B:/~BUN/root/chunk-a3eqgdv2.js";
import "B:/~BUN/root/chunk-vpgpdrbv.js";
import "B:/~BUN/root/chunk-a0k8qg0d.js";
import "B:/~BUN/root/chunk-fsp20me0.js";
import "B:/~BUN/root/chunk-wegca9zh.js";
import "B:/~BUN/root/chunk-6a9s3k2y.js";
import "B:/~BUN/root/chunk-k8003a0x.js";
import "B:/~BUN/root/chunk-4sfz9tbn.js";
import { mr } from "B:/~BUN/root/chunk-jkv8n5r0.js";
import { YTn, Grt as capabilities, Vrt, A9r } from "B:/~BUN/root/chunk-m2tvwn4z.js";
import { nze, ine, xB } from "B:/~BUN/root/chunk-q4sexgb0.js";
import { JSn } from "B:/~BUN/root/chunk-z42zeyxj.js";
import { fT, Htr, g2t } from "B:/~BUN/root/chunk-6zqm9466.js";
import "B:/~BUN/root/chunk-38pacdk6.js";
import "B:/~BUN/root/chunk-ez16ca5e.js";
import { Qbe } from "B:/~BUN/root/chunk-7mxk79br.js";
import "B:/~BUN/root/chunk-k798mzph.js";
import "B:/~BUN/root/chunk-j0ghr71r.js";
import { Dn } from "B:/~BUN/root/chunk-pystvv3m.js";
import { R9n, I7e, M7e, Y_t } from "B:/~BUN/root/chunk-b0487zs4.js";
import { o, u } from "B:/~BUN/root/chunk-g3snhg6n.js";
import "B:/~BUN/root/chunk-59tbtn9n.js";
import "B:/~BUN/root/chunk-3rzwkd15.js";
import "B:/~BUN/root/chunk-bp5d1azq.js";
import "B:/~BUN/root/chunk-eya7pdzx.js";
import { ve } from "B:/~BUN/root/chunk-ef0msk7r.js";
var Me = 500,
  we = 1048576;
var vs = [200, 800];
class Ye {
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
      maxPendingEntries = Me,
      maxPendingBytes = we,
      backoffMs = vs
    } = s ?? {};
    this.sendTimeoutMs = sendTimeoutMs, this.onError = onError, this.maxPendingEntries = maxPendingEntries, this.maxPendingBytes = maxPendingBytes, this.backoffMs = backoffMs;
  }
  enqueue(filePath, entries) {
    let bytes = _(entries).length;
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
    for (let n of e) {
      let r = s.get(n.filePath);
      if (r) r.push(...n.entries);else s.set(n.filePath, n.entries.slice());
    }
    for (let [n, r] of s) await this.sendWithRetry(n, r);
  }
  async sendWithRetry(e, s) {
    let n = this.backoffMs.length + 1,
      r = `SessionStore.append() timed out after ${this.sendTimeoutMs}ms for ${e}`,
      a,
      l = 1;
    for (; l <= n; l++) try {
      await Nt(this.send(e, s), this.sendTimeoutMs, r), a = void 0;
      break;
    } catch (error) {
      if (a = H(error), a.message === r) break;
      let h = this.backoffMs[l - 1];
      if (h === void 0) break;
      await Y(h);
    }
    if (a) {
      t(`[TranscriptMirrorBatcher] flush failed for ${e} after ${l} attempt(s): ${a}`, {
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
import { randomUUID as As } from "crypto";
import { join as Mt } from "path";
class It {
  debugFilePath = void 0;
  initPromise = null;
  logStem = null;
}
var Us = new z(() => new It());
function Dt() {
  return Us.of(j().host);
}
function xt(e) {
  if (e.initPromise) return e.initPromise;
  if (!zjr("DEBUG_CLAUDE_AGENT_SDK")) return e.debugFilePath = null, e.initPromise = Promise.resolve(), e.initPromise;
  let s = Mt(Pe(), "debug");
  return e.logStem = `sdk-${As()}`, e.debugFilePath = Mt(s, `${e.logStem}.txt`), process.stderr.write(`SDK debug logs: ${e.debugFilePath}
`), e.initPromise = gn().mkdir(s).catch(() => {}), e.initPromise;
}
function js(e) {
  return e.logStem === null ? null : {
    namespace: "log",
    sessionId: e.logStem,
    channel: "debug"
  };
}
function Ot() {
  let e = Dt();
  return xt(e), e.debugFilePath ?? null;
}
function A(e, s) {
  let n = Dt();
  if (n.debugFilePath === null) return;
  let data = `${new Date().toISOString()} ${e}
`;
  xt(n).then(() => {
    if (s !== void 0) {
      let l = js(n);
      if (l !== null) s.append(l, [{
        data: data
      }]).catch(() => {});
      return;
    }
    if (n.debugFilePath) gn().append(n.debugFilePath, data).catch(() => {});
  });
}
var Io = f(() => u({
  session_id: o(),
  ws_url: o(),
  work_dir: o().optional(),
  session_key: o().optional()
}));
import { execFile as mn } from "child_process";
import { randomUUID as hn } from "crypto";
import { mkdir as dt, mkdtemp as ol, readFile as Sn, rm as yn, writeFile as ts } from "fs/promises";
import { createRequire as wn } from "module";
import { homedir as ct, tmpdir as bn } from "os";
import { dirname as Yt, isAbsolute as kn, join as D, posix as _n, resolve as ut, sep as vn, win32 as Cn } from "path";
import { fileURLToPath as En } from "url";
import { spawn as Bs } from "child_process";
import { existsSync as qs } from "fs";
import { createInterface as Hs } from "readline";
import { StringDecoder as zs } from "string_decoder";
function Ls(e) {
  let s = e.trim();
  return s.startsWith("{") && s.endsWith("}");
}
var Fs = new Set(["filesystem.denyRead", "filesystem.denyWrite", "network.deniedDomains", "credentials.files", "credentials.envVars"]),
  Ns = new Set(["ripgrep", "network.tlsTerminate"]),
  $s = new Set(["__proto__", "constructor", "prototype"]),
  Ks = ["httpProxyPort", "socksProxyPort"];
function At(e, s, n = "") {
  let r = Dn(e) ? {
    ...e
  } : {};
  for (let [a, l] of Object.entries(s)) {
    if ($s.has(a) || l === void 0) continue;
    let m = n ? `${n}.${a}` : a,
      h = Object.hasOwn(r, a) ? r[a] : void 0;
    if (Fs.has(m) && Array.isArray(h) && Array.isArray(l)) r[a] = L([...h, ...l]);else if (Dn(h) && Dn(l) && !Ns.has(m)) r[a] = At(h, l, m);else r[a] = l;
  }
  return r;
}
function Ut(e, s) {
  let n = {
    ...e
  };
  if (!s) return n;
  let settings = n.settings;
  if (settings && !Ls(settings)) throw Error("Cannot use both a settings file path and the sandbox option. Include the sandbox configuration in your settings file instead.");
  let a = {};
  if (settings) try {
    a = J(settings);
  } catch {}
  let sandbox = At(a.sandbox, s),
    m = s.credentials?.files,
    h = s.filesystem !== void 0 || Array.isArray(m) && m.some(item => Dn(item) && item.mode === "deny"),
    filesystem = sandbox.filesystem;
  if (h && s.filesystem?.disabled === void 0 && Dn(filesystem) && filesystem.disabled === !0) delete filesystem.disabled;
  let network = s.network,
    y = network?.allowedDomains !== void 0 || (network?.deniedDomains?.length ?? 0) > 0 || network?.strictAllowlist === !0,
    network_2 = sandbox.network;
  if (y && Dn(network_2)) {
    for (let E of Ks) if (network?.[E] === void 0 && network_2[E] !== void 0) delete network_2[E];
  }
  if (s.enabled === !0 && sandbox.failIfUnavailable === void 0) sandbox.failIfUnavailable = !0;
  return n.settings = _({
    ...a,
    sandbox: sandbox
  }), n;
}
var Gs = 2000,
  et = 2048,
  Ft = "sdk-exit-after-stderr-drained",
  Ws = 200;
function tt(e) {
  return e === "exit" ? Ft : e;
}
class $t {
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
var xe = new $t(),
  Qs = /[(),\u0000-\u001f\u007f-\u009f]/;
function Vs(e) {
  if (typeof e !== "string" || e.trim() === "") throw Error("Skill names must be non-empty strings.");
  if (!mc(e)) throw new x(`Invalid skill name ${_(e)}: the name contains an unpaired surrogate, which cannot survive the UTF-8 encoding of the CLI invocation; no skill discovered from the filesystem can have such a name.`, "skill name with unpaired surrogate rejected");
  if (e !== e.trim()) throw new x(`Invalid skill name ${_(e)}: leading or trailing whitespace is not allowed \u2014 the Skill tool trims the invoked name, so a padded rule can never match. Remove the padding.`, "skill name with surrounding whitespace rejected");
  if (Qs.test(e)) throw new x(`Invalid skill name ${_(e)}: parentheses, commas, and control characters are not allowed in skill names. Skill names match the skill's directory name (or 'plugin:skill' for plugin-qualified skills); rename the skill if its directory name contains these characters.`, "invalid skill name rejected");
  if (e === "*") throw Error("Invalid skill name '*': use skills: 'all' to enable every skill.");
  if (e.endsWith(":*") || e.endsWith(" *")) throw new x(`Invalid skill name ${_(e)}: wildcard-suffix names are not allowed; list each skill by its exact name.`, "wildcard-suffix skill name rejected");
  if (e.startsWith("/")) throw new x(`Invalid skill name ${_(e)}: skill names may not start with '/'. Skills are invoked as slash commands, but the skills option takes the skill's canonical name \u2014 the directory name, or 'plugin:skill'.`, "skill name with leading slash rejected");
  if (e.includes("\\\\")) throw new x(`Invalid skill name ${_(e)}: consecutive backslashes are not allowed \u2014 the permission-rule parser collapses escaped backslashes, so the rule would name a different skill. Rename the skill.`, "skill name with consecutive backslashes rejected");
  if (e.endsWith("\\")) throw new x(`Invalid skill name ${_(e)}: names may not end with an unpaired backslash.`, "skill name with unpaired trailing backslash rejected");
  return e;
}
class nt {
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
  forwardedAbort = mr();
  pendingWrites = [];
  pendingEndInput = !1;
  spawnResolve;
  spawnReject;
  spawnPromise;
  constructor(e) {
    this.options = e;
    if (this.abortController = e.abortController || mr(), e.deferSpawn) this.spawnPromise = new Promise((s, n) => {
      this.spawnResolve = s, this.spawnReject = n;
    }), this.spawnPromise.catch(() => {});else this.initialize();
  }
  spawn() {
    try {
      this.initialize();
    } catch (error) {
      throw this.spawnAbort(H(error)), error;
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
    return pk() ? "bun" : "node";
  }
  spawnLocalProcess(e) {
    let {
        command: command,
        args: args,
        cwd: cwd,
        env: env,
        signal: signal
      } = e,
      m = Bs(command, args, {
        cwd: cwd,
        stdio: ["pipe", "pipe", "pipe"],
        signal: signal,
        env: env,
        windowsHide: !0
      });
    if (m.pid !== void 0 && this.options.onProcessSpawned) try {
      this.options.onProcessSpawned(m.pid);
    } catch (error) {
      A(`onProcessSpawned threw: ${d(error)}`);
    }
    let h = new zs("utf8"),
      S = !1,
      w = !1,
      y = !1,
      b,
      E = Fe(env.DEBUG_CLAUDE_AGENT_SDK) || this.options.stderr !== void 0;
    m.stderr.on("data", P => {
      if (y) return;
      let I = h.write(P);
      if (this.stderrTail += I, this.stderrTail.length > 2 * et) this.stderrTail = ld(Bte(this.stderrTail), et);
      if (E) A(I), this.options.stderr?.(I);
    }), m.stderr.on("error", P => {
      A(`[ProcessTransport] stderr read failed: ${P.code ?? P.message}`);
    });
    let T = () => {
      if (y) return;
      if (y = !0, b) clearTimeout(b);
      m.emit(Ft, m.exitCode, m.signalCode);
      let stderr = m.stderr;
      if (Zs(stderr)) stderr.unref();else stderr.destroy();
    };
    return m.stderr.once("close", () => {
      if (this.stderrTail += h.end(), S = !0, w) T();
    }), m.once("exit", () => {
      if (w = !0, this.ready = !1, S) T();else b = setTimeout(T, Ws);
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
      on: (P, I) => m.on(tt(P), I),
      once: (P, I) => m.once(tt(P), I),
      off: (P, I) => m.off(tt(P), I)
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
        let R = skills === "all" ? ["Skill"] : skills.map(item => `Skill(${Vs(item)})`),
          N = new Set(allowedTools);
        allowedTools = [...allowedTools, ...R.filter(item => !N.has(item))];
      }
      let v = ["--output-format", "stream-json", "--verbose", "--input-format", "stream-json"];
      if (thinkingConfig) {
        switch (thinkingConfig.type) {
          case "enabled":
            if (thinkingConfig.budgetTokens === void 0) v.push("--thinking=adaptive");else v.push(fT("--max-thinking-tokens", thinkingConfig.budgetTokens));
            break;
          case "disabled":
            v.push("--thinking=disabled");
            break;
          case "adaptive":
            v.push("--thinking=adaptive");
            break;
        }
        if (thinkingConfig.type !== "disabled" && thinkingConfig.display) v.push(fT("--thinking-display", thinkingConfig.display));
      }
      if (this.options.effort) v.push(fT("--effort", this.options.effort));
      if (maxTurns) v.push(fT("--max-turns", maxTurns));
      if (maxBudgetUsd !== void 0) v.push(fT("--max-budget-usd", maxBudgetUsd));
      if (taskBudget) v.push(fT("--task-budget", taskBudget.total));
      if (model) v.push(fT("--model", model));
      if (agent) v.push(fT("--agent", agent));
      if (betas && betas.length > 0) v.push(fT("--betas", betas.join(",")));
      if (jsonSchema) v.push(fT("--json-schema", _(jsonSchema)));
      if (this.options.debugFile) v.push(fT("--debug-file", this.options.debugFile));else if (this.options.debug) v.push("--debug");
      if (!this.options.debugFile && !this.options.spawnClaudeCodeProcess) {
        let R = Ot();
        if (R) v.push(fT("--debug-file", R));
      }
      if (canUseTool) {
        if (permissionPromptToolName) throw Error("canUseTool callback cannot be used with permissionPromptToolName. Please use one or the other.");
        v.push("--permission-prompt-tool=stdio");
      } else if (permissionPromptToolName) v.push(fT("--permission-prompt-tool", permissionPromptToolName));
      if (permissionPrompts) v.push(fT("--permission-prompts", permissionPrompts));
      if (continueConversation) v.push("--continue");
      if (resume) v.push(fT("--resume", resume));
      if (allowedTools.length > 0) v.push(fT("--allowedTools", allowedTools.join(",")));
      if (disallowedTools.length > 0) v.push(fT("--disallowedTools", disallowedTools.join(",")));
      if (tools !== void 0) if (Array.isArray(tools)) v.push(fT("--tools", tools.join(",")));else v.push("--tools=default");
      if (mcpServers && Object.keys(mcpServers).length > 0) v.push(...Htr("--mcp-config", _({
        mcpServers: mcpServers
      })));
      if (settingSources !== void 0) v.push(fT("--setting-sources", settingSources.join(",")));
      if (strictMcpConfig) v.push("--strict-mcp-config");
      if (permissionMode) v.push(fT("--permission-mode", permissionMode));
      if (allowDangerouslySkipPermissions) v.push("--allow-dangerously-skip-permissions");
      if (fallbackModel) {
        if (model && fallbackModel === model) throw Error("Fallback model cannot be the same as the main model. Please specify a different model for fallbackModel option.");
        v.push(fT("--fallback-model", fallbackModel));
      }
      if (this.options.includeHookEvents) v.push("--include-hook-events");
      if (includePartialMessages) v.push("--include-partial-messages");
      if (this.options.sessionMirror) v.push("--session-mirror");
      if (projectConfigRoot !== void 0) v.push(fT("--project-config-root", projectConfigRoot));
      for (let R of additionalDirectories) v.push(fT("--add-dir", R));
      if (pluginsViaInitialize) v.push("--await-initialize");else if (plugins && plugins.length > 0) for (let R of plugins) if (R.type === "local") v.push(R.skipMcpDiscovery ? fT("--plugin-dir-no-mcp", R.path) : fT("--plugin-dir", R.path));else throw Error(`Unsupported plugin type: ${R.type}`);
      if (this.options.forkSession) v.push("--fork-session");
      if (this.options.resumeSessionAt) v.push(fT("--resume-session-at", this.options.resumeSessionAt));
      if (this.options.resumeDropsTurn !== void 0) v.push(fT("--resume-drops-turn", this.options.resumeDropsTurn));
      if (this.options.sessionId) v.push(fT("--session-id", this.options.sessionId));
      if (this.options.persistSession === !1) v.push("--no-session-persistence");
      if (this.options.managedSettings) v.push(...Htr("--managed-settings", this.options.managedSettings));
      let Ce = {
        ...(extraArgs ?? {})
      };
      if (this.options.settings) Ce.settings = this.options.settings;
      let Ee = Ut(Ce, sandbox_2);
      for (let [R, N] of Object.entries(Ee)) if (N === null) v.push(`--${R}`);else g2t(v, R, N);
      if (!env_2.CLAUDE_CODE_ENTRYPOINT) env_2.CLAUDE_CODE_ENTRYPOINT = "sdk-ts";
      if (delete env_2.NODE_OPTIONS, Fe(env_2.DEBUG_CLAUDE_AGENT_SDK)) env_2.DEBUG = "1";else delete env_2.DEBUG;
      let pe = Xs(pathToClaudeCodeExecutable),
        command_2 = pe ? pathToClaudeCodeExecutable : executable,
        args_2 = pe ? [...executableArgs, ...v] : [...executableArgs, pathToClaudeCodeExecutable, ...v],
        ge = {
          command: command_2,
          args: args_2,
          cwd: cwd_2,
          env: env_2,
          signal: this.forwardedAbort.signal
        };
      if (this.options.spawnClaudeCodeProcess) A(`Spawning Claude Code (custom): ${command_2} ${args_2.join(" ")}`), this.process = this.options.spawnClaudeCodeProcess(ge);else A(`Spawning Claude Code: ${command_2} ${args_2.join(" ")}`), this.process = this.spawnLocalProcess(ge);
      if (this.processStdin = this.process.stdin, this.processStdout = this.process.stdout, this.processStdin.on("error", R => {
        A(`[ProcessTransport] stdin write failed (child likely exited): ${R.code ?? R.message}`), this.ready = !1;
      }), xe.track(this.process), this.abortHandler = () => this.close(), this.abortController.signal.addEventListener("abort", this.abortHandler), this.abortController.signal.aborted) this.close();
      let process_2 = this.process;
      process_2.on("error", R => {
        this.ready = !1;
        let N = R,
          U = N.syscall !== void 0 ? N.syscall.startsWith("spawn") : Wt(R);
        if (U && !process_2.killed) xe.untrack(process_2);
        if (this.abortController.signal.aborted) this.exitError = Oe(), gV(R, {
          telemetryMessage: "Claude Code process aborted by user",
          errorClass: "aborted"
        });else if (U && Wt(R)) {
          let {
              message: message,
              telemetryMessage: telemetryMessage,
              errorClass: errorClass
            } = Js(pathToClaudeCodeExecutable, pe),
            K = {
              telemetryMessage: `${telemetryMessage}${st(R)}`,
              errorClass: errorClass,
              code: Fr(R)
            };
          this.exitError = gV(ReferenceError(message), K), gV(R, K), A(this.exitError.message);
        } else {
          let se = {
            telemetryMessage: U ? `Failed to spawn Claude Code process${st(R)}` : `Claude Code process error${st(R)}`,
            errorClass: U ? "spawn_failed" : "process_error",
            code: Fr(R)
          };
          this.exitError = gV(Error(`Failed to spawn Claude Code process: ${Bte(R.message)}`), se), gV(R, se), A(this.exitError.message);
        }
      }), process_2.on("exit", (R, N) => {
        if (this.exitEventDelivered = !0, this.ready = !1, this.abortController.signal.aborted) this.exitError = Oe();else {
          let U = this.getProcessExitError(R, N);
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
      return gV(Error(`Claude Code process exited with code ${e}${this.formatStderrTail()}`), {
        telemetryMessage: `Claude Code process exited with code ${exitCode ?? "unknown"}`,
        errorClass: "process_exited_nonzero",
        exitCode: exitCode
      });
    } else if (s) {
      let signal_2 = /^SIG[A-Z0-9]{1,8}$/.test(s) ? s : "unknown";
      return gV(Error(`Claude Code process terminated by signal ${s}${this.formatStderrTail()}`), {
        telemetryMessage: `Claude Code process terminated by signal ${signal_2}`,
        errorClass: "process_killed_by_signal",
        signal: signal_2
      });
    }
    return;
  }
  formatStderrTail() {
    let e = ld(Bte(this.stderrTail), et).trim();
    return e ? `. stderr: ${e}` : "";
  }
  write(e) {
    if (this.abortController.signal.aborted) throw jt();
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
    if (this.exitError) throw gV(Error(`Cannot write to process that exited with error: ${this.exitError.message}`), {
      telemetryMessage: `Cannot write to process that exited with error: ${d1(this.exitError) ?? "untagged exit error"}`,
      errorClass: Lt(this.exitError, "errorClass"),
      code: Fr(this.exitError),
      exitCode: Ys(this.exitError),
      signal: Lt(this.exitError, "signal")
    });
    A(`[ProcessTransport] Writing to stdin: ${e.substring(0, 100)}`);
    try {
      if (!this.processStdin.write(e)) A("[ProcessTransport] Write buffer full, data queued");
    } catch (error) {
      throw this.ready = !1, Error(`Failed to write to process stdin: ${d(error)}`);
    }
  }
  [Symbol.dispose]() {
    this.close();
  }
  close() {
    if (this.spawnAbort(this.abortController.signal.aborted ? Oe() : Error("Query closed before spawn")), this.processStdin) this.processStdin.end(), this.processStdin = void 0;
    if (this.abortHandler) this.abortController.signal.removeEventListener("abort", this.abortHandler), this.abortHandler = void 0;
    let e = this.process?.exitCode ?? null,
      s = this.process?.signalCode ?? null,
      n = !this.exitEventDelivered && (e !== null && e >= 0 || s !== null),
      r;
    if (n) {
      if (this.exitEventDelivered = !0, r = this.abortController.signal.aborted ? Oe() : this.getProcessExitError(e, s), r && !this.exitError) this.exitError = r;
    }
    let exitListeners = this.exitListeners;
    this.exitListeners = [];
    for (let {
      callback: callback,
      handler: handler
    } of exitListeners) if (this.process?.off("exit", handler), n) try {
      callback(r);
    } catch (error) {
      A(`[ProcessTransport] onExit callback threw during close(): ${d(error)}`);
    }
    let l = () => {
        if (this.abortController.signal.aborted) this.forwardedAbort.abort(this.abortController.signal.reason);
      },
      process_3 = this.process;
    if (process_3 && !process_3.killed && process_3.exitCode === null && process_3.signalCode == null) setTimeout((h, S) => {
      if (h.exitCode !== null || h.signalCode != null) {
        S();
        return;
      }
      setTimeout((w, y) => {
        if (w.exitCode === null) w.kill("SIGKILL");
        y();
      }, 5000, h, S).unref();
      return;
    }, Gs, process_3, l).unref(), process_3.once("exit", () => xe.untrack(process_3));else if (process_3) xe.untrack(process_3), l();
    this.ready = !1;
  }
  isReady() {
    return this.ready;
  }
  async *readMessages() {
    if (this.spawnPromise) await this.spawnPromise, this.spawnPromise = void 0;
    if (!this.processStdout) throw Error("ProcessTransport output stream not available");
    if (this.exitError) throw this.exitError;
    let e = Hs({
        input: this.processStdout
      }),
      s = this.process ? (() => {
        let process_4 = this.process,
          r = () => e.close();
        return process_4.on("error", r), () => process_4.off("error", r);
      })() : void 0;
    if (this.exitError) e.close();
    try {
      for await (let n of e) if (n.trim()) {
        let r;
        try {
          r = J(n);
        } catch (error) {
          A(`Non-JSON stdout: ${n}`);
          continue;
        }
        yield r;
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
    let handler_2 = (n, r) => {
      let a = this.getProcessExitError(n, r);
      callback_2(a);
    };
    return this.process.on("exit", handler_2), this.exitListeners.push({
      callback: callback_2,
      handler: handler_2
    }), () => {
      if (this.process) this.process.off("exit", handler_2);
      let n = this.exitListeners.findIndex(item => item.handler === handler_2);
      if (n !== -1) this.exitListeners.splice(n, 1);
    };
  }
  async waitForExit() {
    if (this.exitError) throw this.exitError;
    if (!this.process || this.process.exitCode === 0 || this.process.killed && this.exitEventDelivered) return;
    return new Promise((e, s) => {
      let n = (a, l) => {
        if (this.abortController.signal.aborted) {
          s(jt());
          return;
        }
        let m = this.getProcessExitError(a, l);
        if (m) s(m);else e();
      };
      this.process.once("exit", n);
      let r = a => {
        this.process.off("exit", n), s(a);
      };
      this.process.once("error", r), this.process.once("exit", () => {
        this.process.off("error", r);
      });
    });
  }
}
function Xs(e) {
  return ![".js", ".mjs", ".tsx", ".ts", ".jsx"].some(item => e.endsWith(item));
}
function Js(e, s) {
  let n = s ? "native binary" : "executable",
    r = Bte(e);
  if (qs(e)) return {
    message: s ? `Claude Code native binary at ${r} exists but failed to launch. This usually means the binary does not match this system's libc \u2014 e.g. spawning a musl-linked binary on a glibc Linux host fails because the musl dynamic loader (/lib/ld-musl-*) is missing. Specify a matching binary with options.pathToClaudeCodeExecutable.` : `Claude Code executable at ${r} exists but failed to launch.`,
    telemetryMessage: `Claude Code ${n} exists at the configured path but failed to launch`,
    errorClass: "executable_launch_failed"
  };
  return {
    message: s ? `Claude Code native binary not found at ${r}. Please ensure Claude Code is installed via native installer or specify a valid path with options.pathToClaudeCodeExecutable.` : `Claude Code executable not found at ${r}. Is options.pathToClaudeCodeExecutable set?`,
    telemetryMessage: `Claude Code ${n} not found at the configured path`,
    errorClass: "executable_not_found"
  };
}
function st(e) {
  let s = Fr(e);
  return s === void 0 ? "" : ` (${s})`;
}
function Oe() {
  return gV(new jQe("Claude Code process aborted by user"), {
    telemetryMessage: "Claude Code process aborted by user",
    errorClass: "aborted"
  });
}
function jt() {
  return gV(new jQe("Operation aborted"), {
    telemetryMessage: "Operation aborted",
    errorClass: "aborted"
  });
}
function Lt(e, s) {
  let n = Object.hasOwn(e, s) ? Reflect.get(e, s) : void 0;
  return typeof n === "string" ? n : void 0;
}
function Ys(e) {
  let s = Object.hasOwn(e, "exitCode") ? Reflect.get(e, "exitCode") : void 0;
  return typeof s === "number" ? s : void 0;
}
function Zs(e) {
  return typeof Reflect.get(e, "unref") === "function";
}
import { existsSync as en } from "fs";
var re = "@anthropic-ai/claude-agent-sdk";
function tn() {
  return !1;
}
function Kt(e, s = {}) {
  let n = s.platform ?? "win32",
    r = s.arch ?? "x64",
    a = s.exists ?? en,
    l = s.preferMusl ?? tn(),
    m = process.env.SDK_NATIVE_BIN ?? "claude",
    h = n === "win32" ? ".exe" : "",
    w = (n === "android" ? [`${re}-linux-${r}-android`] : n === "linux" ? l ? [`${re}-linux-${r}-musl`, `${re}-linux-${r}`] : [`${re}-linux-${r}`, `${re}-linux-${r}-musl`] : [`${re}-${n}-${r}`]).map(item => `${item}/${m}${h}`);
  for (let y of w) try {
    let b = e(y);
    if (a(b)) return b;
  } catch {}
  return null;
}
var Bt = 250,
  Ae = "sdk-manifest-capture:",
  ie = Symbol("suppressControlResponse");
function qt(e, s, n) {
  for (let r of n) {
    let a = r === "tools" ? M7e(s) : void 0;
    t(a ? `[Query] MCP server '${e}': ${Y_t(a)}` : `[Query] MCP server '${e}': ignoring malformed ${r} in its config`);
  }
}
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
  runEndCeilingMs;
  pendingControlResponses = new Map();
  unmatchedControlResponses = new Map();
  static UNMATCHED_CONTROL_RESPONSES_MAX = 1024;
  cleanupPerformed = !1;
  cleanupCause;
  sdkMessages;
  inputStream = new xE();
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
  runEndedResolve;
  runEnded = !1;
  resultReceived = !1;
  runEndCeilingTimer;
  sessionState;
  lastErrorResultText;
  errorTextBeforeModelLessTurns;
  modelLessTurnEnded = !1;
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
    let n = {
      type: "system",
      subtype: "mirror_error",
      error: error_2,
      key: key,
      uuid: are(),
      session_id: key.sessionId
    };
    this.inputStream.enqueue(n);
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
  uiHost;
  workSecretAnswerer;
  constructor(e, s, n, r, a, l = new Map(), m, h, S, w, y, b, E = !1, T = _It) {
    this.transport = e;
    this.isSingleUserTurn = s;
    this.canUseTool = n;
    this.hooks = r;
    this.abortController = a;
    this.jsonSchema = m;
    this.initConfig = h;
    this.onElicitation = S;
    this.getOAuthToken = w;
    this.getHostAuthToken = y;
    this.onUserDialog = b;
    this.verbatimPrompts = E;
    this.runEndCeilingMs = T;
    for (let [C, P] of l) this.connectSdkMcpServer(C, P);
    this.sdkMessages = this.readSdkMessages(), this.readMessages(), this.initializeWritten = new Promise(C => {
      this.markInitializeWritten = () => {
        this.initializeHasBeenWritten = !0, C();
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
    if (this.clearRunEndCeiling(), this.cleanupPromise) return this.cleanupPromise;
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
      t(`[Query.cleanup] transport.close() failed: ${d(error)}`, {
        level: "error"
      });
    }
    try {
      let s = e ?? rt();
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
        await Promise.race([this.transport.waitForExit(), Y(2000, abortController.signal)]);
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
              let n = this.unmatchedControlResponses.keys().next().value;
              if (n !== void 0) this.unmatchedControlResponses.delete(n);
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
          if (this.lastErrorResultText = s || void 0, this.modelLessTurnEnded = e.subtype === "success" && !e.is_error && e.num_turns === 0 && e.result === "", !this.modelLessTurnEnded) this.errorTextBeforeModelLessTurns = this.lastErrorResultText;
          if (this.resultReceived = !0, this.sessionState === void 0 || this.sessionState === "idle" || !this.hasBidirectionalNeeds()) this.endRun();else this.armRunEndCeiling();
        } else if (e.type === "system" && e.subtype === "session_state_changed") {
          if (this.sessionState = e.state, e.state === "idle") {
            if (this.resultReceived) this.endRun();
          } else if (!(this.isSingleUserTurn && this.runEnded)) {
            if (this.runEnded = !1, e.state === "requires_action") this.clearRunEndCeiling();else if (this.resultReceived) this.armRunEndCeiling();
          }
          if ("sdk_host_only" in e && e.sdk_host_only === !0) continue;
        } else {
          if (this.lastErrorResultText = void 0, e.type === "system" && e.subtype === "init") this.modelLessTurnEnded = !1;else if (e.type !== "system" || e.subtype === "compact_boundary") this.errorTextBeforeModelLessTurns = void 0, this.modelLessTurnEnded = !1;
          if ((e.type === "assistant" || e.type === "stream_event") && e.parent_tool_use_id === null && !(this.isSingleUserTurn && this.runEnded)) this.runEnded = !1, this.clearRunEndCeiling();
        }
        this.inputStream.enqueue(e);
      }
      if (this.transcriptMirrorBatcher) await this.transcriptMirrorBatcher.flush();
      this.inputStream.done(), this.cleanup();
    } catch (e) {
      if (this.transcriptMirrorBatcher) await this.transcriptMirrorBatcher.flush();
      let s = this.lastErrorResultText ?? (this.modelLessTurnEnded ? this.errorTextBeforeModelLessTurns : void 0);
      if (s !== void 0 && !(e instanceof jQe) && e?.name !== "SSEHttpError") {
        let n = gV(Error(`Claude Code returned an error result: ${s}`), {
          telemetryMessage: "Claude Code returned an error result",
          errorClass: "error_result"
        });
        t(`[Query.readMessages] Replacing exit error with result text. Original: ${d(e)}`), this.inputStream.error(n), this.cleanup(n);
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
      let n;
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
        n = _(a) + `
`;
      } catch (r) {
        if (this.cleanupPerformed) return;
        let a = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: d(r)
          }
        };
        n = _(a) + `
`;
      }
      try {
        await Promise.resolve(this.transport.write(n));
      } catch (error) {
        t(`[Query.handleControlRequest] Response write failed: ${d(error)}`, {
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
    if (Qbe.some(item => item === e.request.subtype)) return t(`[Query.processControlRequest] ${e.request.subtype} ${e.request_id} is for the machine serving this session's tools \u2014 leaving it unanswered`), ie;
    if (e.request.subtype === "can_use_tool") {
      if (!this.canUseTool) throw Error("canUseTool callback is not provided.");
      let computer_folder = e.request.computer_folder,
        r = await this.canUseTool(e.request.tool_name, e.request.input, {
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
          ...(typeof e.request.decision_reason_type === "string" && {
            decisionReasonType: e.request.decision_reason_type
          }),
          ...(typeof e.request.decision_reason_code === "string" && {
            decisionReasonCode: e.request.decision_reason_code
          }),
          title: e.request.title,
          displayName: e.request.display_name,
          description: e.request.description,
          defaultToNo: e.request.default_to_no,
          suppressAlwaysAllowRule: e.request.suppress_always_allow_rule,
          toolUseID: e.request.tool_use_id,
          agentID: e.request.agent_id,
          ...(typeof e.request.plugin === "string" && {
            plugin: e.request.plugin
          }),
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
      if (r === null) return ie;
      return {
        ...r,
        toolUseID: e.request.tool_use_id
      };
    } else if (e.request.subtype === "hook_callback") return await this.handleHookCallbacks(e.request.callback_id, e.request.input, e.request.tool_use_id, signal_3);else if (e.request.subtype === "mcp_message") {
      let request = e.request,
        r = this.sdkMcpServers.get(request.server_name)?.transport;
      if (!r) throw Error(`SDK MCP server not found: ${request.server_name}`);
      if (YTn(request.message)) return {
        mcp_response: await this.handleMcpControlRequest(request.server_name, request, r)
      };else {
        if (r.onmessage) r.onmessage(request.message);
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
        let r = await this.onElicitation({
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
        if (r === null) return ie;
        return r;
      }
      return {
        action: "decline"
      };
    } else if (e.request.subtype === "request_user_dialog") {
      if (this.onUserDialog) {
        let n = await this.onUserDialog({
          dialogKind: e.request.dialog_kind,
          payload: e.request.payload,
          toolUseID: e.request.tool_use_id
        }, {
          signal: signal_3,
          requestId: e.request_id
        });
        if (n === null) return ie;
        return n;
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
            if (sGs(a)) reason = a;
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
      if (!Ht(workSecretAnswerer.sessionId, e.request.session_id)) throw Error("remote_control_work_secret names a session this host did not attach.");
      return {
        work_secret: (await workSecretAnswerer.refresh(workSecretAnswerer.sessionId, {
          signal: signal_3
        })) || null
      };
    }
    if (e.request.subtype === "ui_copy" && this.uiHost?.copy) {
      let {
        subtype: subtype,
        ...r
      } = e.request;
      return this.uiHost.copy(r, {
        signal: signal_3
      });
    }
    if (e.request.subtype === "ui_prompt_read" && this.uiHost?.promptRead) {
      let {
        subtype: subtype_2,
        ...r
      } = e.request;
      return this.uiHost.promptRead(r, {
        signal: signal_3
      });
    }
    if (e.request.subtype === "ui_prompt_fill" && this.uiHost?.promptFill) {
      let {
        subtype: subtype_3,
        ...r
      } = e.request;
      return this.uiHost.promptFill(r, {
        signal: signal_3
      });
    }
    if (e.request.subtype === "ui_prompt_suggest" && this.uiHost?.promptSuggest) {
      let {
        subtype: subtype_4,
        ...r
      } = e.request;
      return this.uiHost.promptSuggest(r, {
        signal: signal_3
      });
    }
    if (e.request.subtype === "ui_read_selection" && this.uiHost?.readSelection) {
      let {
        subtype: subtype_5,
        ...r
      } = e.request;
      return this.uiHost.readSelection(r, {
        signal: signal_3
      });
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
    let s, n;
    try {
      if (first && this.initConfig?.captureSdkMcpManifests === !0 && this.sdkMcpServers.size > 0) {
        s = await this.captureSdkMcpServerManifests();
        for (let m of this.sdkMcpToolsChangedDuringCapture) {
          let h = s !== void 0 && Object.hasOwn(s, m) ? s[m] : void 0;
          if (h?.toolsListResult !== void 0) s[m] = {
            initializeResult: h.initializeResult
          };
        }
      }
      this.sdkMcpToolsChangedDuringCapture.clear();
      let l = this.buildInitializeRequest(s);
      if (this.cleanupPerformed) throw this.cleanupCause ?? Error("Query closed before initialize was sent");
      this.writingFirstInitialize = first;
      try {
        n = this.request(l);
      } finally {
        this.writingFirstInitialize = !1;
      }
    } finally {
      if (first) this.markInitializeWritten();
    }
    let response_2 = (await n).response;
    if (this.initConfig?.plugins !== void 0 && this.initConfig.plugins.length > 0 && response_2.plugins_applied !== !0) t(`[Query.initialize] Claude Code reported plugins_applied=${String(response_2.plugins_applied)} for ${this.initConfig.plugins.length} plugins sent with pluginDelivery 'initialize'; the process is running with the plugins it was launched with.`, {
      level: "warn"
    });
    return response_2;
  }
  buildInitializeRequest(sdkMcpServerManifests) {
    if (this.hooks && !this.initHooksPayload) {
      this.initHooksPayload = {};
      for (let [l, m] of Object.entries(this.hooks)) if (m.length > 0) this.initHooksPayload[l] = m.map(item => {
        let hookCallbackIds = [];
        for (let w of item.hooks) {
          let y = `hook_${this.nextCallbackId++}`;
          this.hookCallbacks.set(y, w), hookCallbackIds.push(y);
        }
        return {
          matcher: item.matcher,
          hookCallbackIds: hookCallbackIds,
          timeout: item.timeout
        };
      });
    }
    let sdkMcpServers = this.sdkMcpServers.size > 0 ? Array.from(this.sdkMcpServers.keys()) : void 0,
      n = Array.from(this.sdkMcpServers).flatMap(([l, {
        settings: settings_2
      }]) => Object.keys(settings_2).length > 0 ? [[l, settings_2]] : []),
      sdkMcpServerConfigs = n.length > 0 ? Object.fromEntries(n) : void 0;
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
      forwardNestedSubagentToolCalls: this.initConfig?.forwardNestedSubagentToolCalls,
      workspaceTrust: this.initConfig?.workspaceTrust,
      plugins: this.initConfig?.plugins
    };
  }
  async captureSdkMcpServerManifests() {
    let e = performance.now(),
      s = new Map(),
      n = !1,
      r = async (server_name, transport_2) => {
        try {
          if (await this.sdkMcpServers.get(server_name)?.connection, n) return;
          let T = await this.handleMcpControlRequest(server_name, {
            server_name: server_name,
            message: {
              jsonrpc: "2.0",
              id: Ae + "initialize",
              method: "initialize",
              params: {
                protocolVersion: protocolVersion,
                capabilities: capabilities,
                clientInfo: {
                  ...Vrt,
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
                  }.VERSION ?? "unknown"
                }
              }
            }
          }, transport_2);
          if (n) return;
          if (!("result" in T)) {
            t(`[Query.captureSdkMcpServerManifests] '${server_name}' answered initialize with an error; leaving it to the CLI: ${_(T)}`, {
              level: "warn"
            });
            return;
          }
          let C = T.result;
          transport_2.onmessage?.({
            jsonrpc: "2.0",
            method: "notifications/initialized"
          });
          let capabilities_2 = C.capabilities,
            I = typeof capabilities_2 === "object" && capabilities_2 !== null && "tools" in capabilities_2 && capabilities_2.tools !== void 0 && capabilities_2.tools !== null,
            toolsListResult;
          if (I) {
            let W = await this.handleMcpControlRequest(server_name, {
              server_name: server_name,
              message: {
                jsonrpc: "2.0",
                id: Ae + "tools-list",
                method: "tools/list"
              }
            }, transport_2);
            if (n) return;
            if (!("result" in W)) {
              t(`[Query.captureSdkMcpServerManifests] '${server_name}' answered tools/list with an error; leaving it to the CLI: ${_(W)}`, {
                level: "warn"
              });
              return;
            }
            if (W.result.nextCursor === void 0) toolsListResult = W.result;
          }
          let manifest = J(_(toolsListResult === void 0 ? {
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
          if (!n) t(`[Query.captureSdkMcpServerManifests] '${server_name}': ${error}; the CLI will handshake it over the control channel`, {
            level: "warn"
          });
        }
      },
      a = Array.from(this.sdkMcpServers, ([b, {
        transport: transport_3
      }]) => r(b, transport_3)),
      l = Promise.all(a).then(() => "settled"),
      promise = new Promise(b => {
        this.stopSdkMcpManifestCapture = () => b("closed");
      }),
      h = await je(Promise.race([l, promise]), Bt);
    n = !0, this.stopSdkMcpManifestCapture = void 0;
    let elapsed_ms = Math.round(performance.now() - e),
      w = {
        servers: a.length,
        captured: s.size,
        elapsed_ms: elapsed_ms
      };
    if (h === "closed") {
      p("sdk_mcp_manifest_capture", "closed", w);
      return;
    }
    if (h === void 0) t(`[Query.captureSdkMcpServerManifests] ${s.size}/${a.length} in-process MCP servers captured within ${Bt} ms; the rest will handshake over the control channel`, {
      level: "warn"
    }), p("sdk_mcp_manifest_capture", "deadline", w);else if (s.size < a.length) p("sdk_mcp_manifest_capture", "partial", w);else g("sdk_mcp_manifest_capture", w);
    if (s.size === 0) return;
    let y = Object.fromEntries(Array.from(this.sdkMcpServers).flatMap(([b, E]) => {
      let T = s.get(b);
      return T !== void 0 && T.transport === E.transport ? [[b, T.manifest]] : [];
    }));
    if (Object.keys(y).length === 0) return;
    return t(`[Query.captureSdkMcpServerManifests] manifests for [${Object.keys(y).join(", ")}] captured in ${elapsed_ms} ms`), y;
  }
  async interrupt(e) {
    return po("sdk_interrupt", async () => {
      let s = await this.request({
          subtype: "interrupt",
          ...(e?.cancelQueued === !0 && {
            cancel_queued: !0
          })
        }),
        n = s.response?.still_queued;
      if (!Array.isArray(n)) return;
      let r = s.response?.cancelled;
      return {
        still_queued: n.filter(item => typeof item === "string"),
        ...(Array.isArray(r) && {
          cancelled: r.filter(item => typeof item === "string")
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
  setUiHost(e) {
    this.uiHost = e;
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
      let r = l => {
        if (l.subtype === "success") {
          let {
            pending_permission_requests: pending_permission_requests,
            pending_user_dialog_requests: pending_user_dialog_requests,
            ...S
          } = l;
          s(S);
        } else reject_3(new x(l.error, "awaitControlResponse: CLI error verdict"));
        if (l.pending_permission_requests || l.pending_user_dialog_requests) t("[Query] Ignoring prompt-redelivery fields on awaitControlResponse response");
      };
      if (this.cleanupPerformed) {
        reject_3(rt());
        return;
      }
      let a = this.unmatchedControlResponses.get(e);
      if (a) {
        this.unmatchedControlResponses.delete(e), r(a);
        return;
      }
      this.pendingControlResponses.set(e, {
        handler: l => {
          this.pendingControlResponses.delete(e), r(l);
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
  async applyFlagSettings(settings_3) {
    return po("sdk_apply_flag_settings", async () => {
      await this.request({
        subtype: "apply_flag_settings",
        settings: settings_3
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
  async getTaskOutput(task_id_2) {
    return (await this.request({
      subtype: "get_task_output",
      task_id: task_id_2
    })).response;
  }
  async listPermissionRules() {
    return (await this.request({
      subtype: "list_permission_rules"
    })).response;
  }
  async updateSettings(source, settings_4) {
    return po("sdk_update_settings", async () => {
      await this.request({
        subtype: "update_settings",
        source: source,
        settings: settings_4
      });
    });
  }
  async rewindFiles(user_message_id, s) {
    return po("sdk_rewind_files", async () => (await this.request({
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
    return po("sdk_set_cwd", async () => (await this.request({
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
    let s = po("sdk_claim_session", async () => (await this.request({
        subtype: "claim_session",
        ...e,
        include_initialize: e.include_initialize ?? !0
      })).response),
      initialization = this.initialization;
    return this.initialization = s.then(async r => {
      if (r?.initialize === void 0) return initialization;
      let initialize = r.initialize,
        l = await initialization.then(S => ({
          hooks_applied: S.hooks_applied,
          plugins_applied: S.plugins_applied
        }), () => ({
          hooks_applied: void 0,
          plugins_applied: void 0
        })),
        hooks_applied = initialize.hooks_applied ?? l.hooks_applied,
        plugins_applied = initialize.plugins_applied ?? l.plugins_applied;
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
  async enableRemoteControl(enabled, name, n) {
    let r = ++this.remoteControlCallGeneration,
      workSecretAnswerer_2 = this.workSecretAnswerer,
      sessionId = n?.reattachSessionId || (n?.workSecret === void 0 ? void 0 : nn(n.workSecret)),
      m = enabled && n?.workSecret !== void 0 && n.refreshWorkSecret && sessionId !== void 0 ? {
        sessionId: sessionId,
        refresh: n.refreshWorkSecret
      } : void 0;
    this.workSecretAnswerer = m;
    let h;
    try {
      h = (await this.request({
        subtype: "remote_control",
        enabled: enabled,
        ...(name !== void 0 && {
          name: name
        }),
        reattach_session_id: n?.reattachSessionId,
        keep_session_on_exit: n?.keepSessionOnExit,
        work_secret: n?.workSecret
      })).response;
    } catch (error) {
      if (r === this.remoteControlCallGeneration) this.workSecretAnswerer = void 0;
      throw error;
    }
    if (enabled && r === this.remoteControlCallGeneration) {
      let bridge_session_id = h.bridge_session_id,
        w = [m, workSecretAnswerer_2];
      this.workSecretAnswerer = typeof bridge_session_id === "string" ? w.find(item => item !== void 0 && Ht(item.sessionId, bridge_session_id)) : void 0;
    }
    return h;
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
      attach_transcript: s?.attach_transcript,
      save_locally: s?.save_locally
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
    return po("sdk_session_title_generate", async () => (await this.request({
      subtype: "generate_session_title",
      description: description_2,
      persist: s?.persist
    })).response.title);
  }
  async askSideQuestion(question, s) {
    return po("sdk_side_question", async () => {
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
    let n = s?.signal;
    if (n?.aborted) return Promise.reject(H(n.reason ?? "Control request aborted"));
    if (this.cleanupPerformed) return Promise.reject(rt());
    let request_id = Math.random().toString(36).substring(2, 15);
    this.transport.expectControlResponse?.(request_id);
    let a = {
        request_id: request_id,
        type: "control_request",
        request: request_3
      },
      l = request_3.subtype === "initialize";
    return new Promise((m, h) => {
      let S,
        w = !1,
        y = C => {
          this.pendingControlResponses.delete(request_id), S?.(), m(C);
        },
        reject_4 = C => {
          this.pendingControlResponses.delete(request_id), S?.(), h(C);
        };
      if (n) {
        let C = () => {
          if (reject_4(H(n.reason ?? "Control request aborted")), !w) return;
          try {
            Promise.resolve(this.transport.write(_({
              type: "control_cancel_request",
              request_id: request_id
            }) + `
`)).catch(() => {});
          } catch {}
        };
        n.addEventListener("abort", C, {
          once: !0
        }), S = () => {
          n.removeEventListener("abort", C);
        };
      }
      this.pendingControlResponses.set(request_id, {
        handler: C => {
          if (C.subtype === "success") y(C);else reject_4(gV(Error(C.error), {
            telemetryMessage: `Claude Code control request failed (${request_3.subtype})`,
            errorClass: "control_request_failed",
            errorCode: typeof C.error_code === "string" && sn.test(C.error_code) ? C.error_code : void 0
          }));
          if (!l && (C.pending_permission_requests || C.pending_user_dialog_requests)) t(`[Query] Ignoring prompt-redelivery fields on non-initialize response (subtype=${request_3.subtype})`);else {
            if (C.pending_permission_requests) this.processPendingPermissionRequests(C.pending_permission_requests);
            if (C.pending_user_dialog_requests) this.processPendingUserDialogRequests(C.pending_user_dialog_requests);
          }
        },
        reject: reject_4
      });
      let E = _(a) + `
`,
        T = () => {
          if (n?.aborted) return;
          return w = !0, this.transport.write(E);
        };
      try {
        (this.initializeHasBeenWritten || this.writingFirstInitialize ? Promise.resolve(T()) : this.initializeWritten.then(T)).catch(reject_4);
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
    return po("sdk_reinitialize", () => this.initialize({
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
    return po("sdk_mcp_toggle_server", async () => {
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
    return po("sdk_mcp_enable_channel", async () => {
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
    return po("sdk_reload_plugins", async () => (await this.request({
      subtype: "reload_plugins",
      ...(e?.holdOnCacheImpact && {
        hold_on_cache_impact: !0
      }),
      ...(e?.addPlugins && e.addPlugins.length > 0 && {
        add_plugins: e.addPlugins
      })
    })).response);
  }
  async reloadSkills() {
    return po("sdk_reload_skills", async () => (await this.request({
      subtype: "reload_skills"
    })).response);
  }
  async reloadOutputStyles() {
    return po("sdk_reload_output_styles", async () => (await this.request({
      subtype: "reload_output_styles"
    })).response);
  }
  async setMcpServers(e) {
    return po("sdk_mcp_set_servers", async () => {
      let s = {},
        n = {};
      for (let [h, S] of Object.entries(e)) if (S.type === "sdk" && "instance" in S) s[h] = S;else n[h] = S;
      let r = new Set(this.sdkMcpServers.keys()),
        a = new Set(Object.keys(s));
      for (let h of r) if (!a.has(h)) await this.disconnectSdkMcpServer(h);
      for (let [h, S] of Object.entries(s)) {
        let w = this.sdkMcpServers.get(h);
        if (!w) {
          this.connectSdkMcpServer(h, S);
          continue;
        }
        let {
          settings: settings_5,
          ignored: ignored
        } = I7e(S);
        if (qt(h, S, ignored), settings_5.timeout !== w.settings.timeout || settings_5.disableAutoBackground !== w.settings.disableAutoBackground) t(`[Query.setMcpServers] MCP server '${h}' is already registered, so the different timeout or disableAutoBackground passed to setMcpServers is ignored; remove and re-add the server to change it`);
        if (settings_5.tools !== void 0 && !R9n(settings_5.tools, w.settings.tools)) t(settings_5.tools.length === 0 ? `[Query.setMcpServers] MCP server '${h}': per-tool policy cleared` : `[Query.setMcpServers] MCP server '${h}': per-tool policy replaced (${settings_5.tools.length} ${settings_5.tools.length === 1 ? "entry" : "entries"})`), w.settings = {
          ...w.settings,
          tools: settings_5.tools
        };
      }
      let l = {};
      for (let name_2 of Object.keys(s)) l[name_2] = {
        type: "sdk",
        name: name_2,
        ...this.sdkMcpServers.get(name_2)?.settings
      };
      return (await this.request({
        subtype: "mcp_set_servers",
        servers: {
          ...n,
          ...l
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
      for await (let n of e) {
        if (s++, t(`[Query.streamInput] Processing message ${s}: ${n.type}`), this.abortController?.signal.aborted) break;
        this.runEnded = !1, this.resultReceived = !1, this.clearRunEndCeiling(), await Promise.resolve(this.transport.write(_(this.verbatimPrompts ? {
          ...n,
          client_composed: !0
        } : n) + `
`));
      }
      if (t(`[Query.streamInput] Finished processing ${s} messages from input stream`), s > 0 && this.hasBidirectionalNeeds()) t("[Query.streamInput] Has bidirectional needs, waiting for the run to end"), await this.waitForRunEnd();
      t("[Query] Calling transport.endInput() to close stdin to CLI process"), this.transport.endInput();
    } catch (error) {
      if (!(error instanceof jQe)) throw error;
    }
  }
  endRun() {
    if (this.runEnded) return;
    if (this.runEnded = !0, this.clearRunEndCeiling(), this.runEndedResolve?.(), this.isSingleUserTurn) t("[Query.readMessages] Run ended for single-turn query, closing stdin"), this.transport.endInput();
  }
  armRunEndCeiling() {
    if (this.clearRunEndCeiling(), this.runEnded || this.cleanupPerformed || this.runEndCeilingMs <= 0) return;
    this.runEndCeilingTimer = setTimeout(() => {
      t(`[Query.readMessages] No 'idle' ${this.runEndCeilingMs}ms after the last result, ending the run`), this.endRun();
    }, Math.min(this.runEndCeilingMs, Hu)), this.runEndCeilingTimer.unref?.();
  }
  clearRunEndCeiling() {
    clearTimeout(this.runEndCeilingTimer), this.runEndCeilingTimer = void 0;
  }
  waitForRunEnd() {
    if (this.runEnded) return t("[Query.waitForRunEnd] Run already ended, returning immediately"), Promise.resolve();
    return new Promise(e => {
      let s = this.abortController?.signal;
      if (this.cleanupPerformed || s?.aborted) {
        e();
        return;
      }
      let n = () => e();
      s?.addEventListener("abort", n, {
        once: !0
      }), this.addCleanupCallback(() => {
        s?.removeEventListener("abort", n), e();
      }), this.runEndedResolve = () => {
        s?.removeEventListener("abort", n), e();
      };
    });
  }
  handleHookCallbacks(e, s, n, signal_4) {
    let a = this.hookCallbacks.get(e);
    if (!a) throw Error(`No hook callback found for ID: ${e}`);
    return a(s, n, {
      signal: signal_4
    });
  }
  connectSdkMcpServer(e, s) {
    let transport_4 = new A9r(m => this.sendMcpServerMessageToCli(e, m)),
      connection = s.instance.connect(transport_4).catch(m => {
        if (this.sdkMcpServers.get(e)?.transport === transport_4) this.sdkMcpServers.delete(e);
        t(`[Query.connectSdkMcpServer] Failed to connect MCP server '${e}': ${m}`, {
          level: "error"
        });
      }),
      {
        settings: settings_6,
        ignored: ignored_2
      } = I7e(s);
    qt(e, s, ignored_2), this.sdkMcpServers.set(e, {
      transport: transport_4,
      settings: settings_6,
      connection: connection
    });
  }
  async disconnectSdkMcpServer(e) {
    let s = this.sdkMcpServers.get(e);
    if (s) {
      let n = `${e}:${Ae}`;
      for (let [r, a] of this.pendingMcpResponses) if (r.startsWith(n)) this.pendingMcpResponses.delete(r), a.reject(Error("MCP server was removed during the manifest capture"));
      if (await s.transport.close(), this.sdkMcpServers.get(e) === s) this.sdkMcpServers.delete(e);
    }
  }
  sendMcpServerMessageToCli(server_name_2, message_2) {
    if ("id" in message_2 && message_2.id !== null && message_2.id !== void 0) {
      let r = `${server_name_2}:${message_2.id}`,
        a = this.pendingMcpResponses.get(r);
      if (a) {
        a.resolve(message_2), this.pendingMcpResponses.delete(r);
        return;
      }
      if (typeof message_2.id === "string" && message_2.id.startsWith(Ae)) {
        t(`[Query.sendMcpServerMessageToCli] Dropping late manifest-capture reply from '${server_name_2}' (${message_2.id})`);
        return;
      }
    }
    let n = {
      type: "control_request",
      request_id: are(),
      request: {
        subtype: "mcp_message",
        server_name: server_name_2,
        message: message_2
      }
    };
    if (!this.initializeHasBeenWritten && JSn(message_2)) this.sdkMcpToolsChangedDuringCapture.add(server_name_2);
    this.writeAfterInitialize(_(n) + `
`).catch(r => {
      t(`[Query.sendMcpServerMessageToCli] Transport write failed: ${r}`, {
        level: "error"
      });
    });
  }
  handleMcpControlRequest(e, s, n) {
    let r = "id" in s.message ? s.message.id : null,
      a = `${e}:${r}`;
    return new Promise((l, m) => {
      let h = () => {
          this.pendingMcpResponses.delete(a);
        },
        resolve = y => {
          h(), l(y);
        },
        reject_5 = y => {
          h(), m(y);
        };
      if (this.pendingMcpResponses.set(a, {
        resolve: resolve,
        reject: reject_5
      }), n.onmessage) n.onmessage(s.message);else {
        h(), m(Error("No message handler registered"));
        return;
      }
    });
  }
}
function rt() {
  return Error("Query closed before response received");
}
var sn = /^[a-z][a-z0-9_]{0,63}$/;
function Ht(e, s) {
  if (e === s) return !0;
  let n = e.slice(e.lastIndexOf("_") + 1),
    r = s.slice(s.lastIndexOf("_") + 1);
  return n.length >= 4 && n === r;
}
function nn(e) {
  try {
    let s = J(Buffer.from(e, "base64url").toString("utf8"));
    if (typeof s !== "object" || s === null || !("session_ingress_token" in s) || typeof s.session_ingress_token !== "string") return;
    let session_ingress_token = s.session_ingress_token,
      a = (session_ingress_token.startsWith("sk-ant-si-") ? session_ingress_token.slice(10) : session_ingress_token).split(".");
    if (a.length !== 3 || !a[1]) return;
    let l = J(Buffer.from(a[1], "base64url").toString("utf8"));
    return typeof l === "object" && l !== null && "session_id" in l && typeof l.session_id === "string" && l.session_id ? l.session_id : void 0;
  } catch {
    return;
  }
}
var Le = ve(nl(), 1);
import { copyFile as rn, readFile as on, rm as Gt, writeFile as Qt } from "fs/promises";
import { homedir as zt } from "os";
import { join as it } from "path";
function Vt(e) {
  return {
    globalConfig: it(e || zt(), ".claude.json"),
    userSettings: it(e || it(zt(), ".claude"), "settings.json")
  };
}
function ot(backend, s, n, key_2) {
  return backend !== void 0 && s === n ? {
    backend: backend,
    key: key_2
  } : void 0;
}
async function oe(e, s, n, r) {
  if (r) return an(r, e, s, n);
  try {
    if (n) await Qt(s, n(await on(e)), {
      mode: 384
    });else await rn(e, s);
  } catch (error) {
    if (k(error) === void 0) throw error;
    if (!G(error)) await Gt(s, {
      force: !0
    }).catch(() => {}), t(`sessionStore resume: skipping ${e} (${k(error)})`);
  }
}
async function an({
  backend: backend_2,
  key: key_3
}, n, r, a) {
  let l = await backend_2.read([key_3]);
  if (!l.ok) {
    if (l.error.code === "InvalidArgument") throw new x(`sessionStore resume: invalid v5 key for ${n}: ${l.error.argument}${l.error.reason ? ` (${l.error.reason})` : ""}`, "sessionStore resume: invalid v5 key (InvalidArgument from backend read)");
    t(`sessionStore resume: skipping ${n} (${l.error.code})`);
    return;
  }
  let m = l.value.items[0];
  if (!m?.found) return;
  let h = Buffer.from(m.value);
  try {
    await Qt(r, a ? a(h) : h, {
      mode: 384
    });
  } catch (error) {
    if (k(error) === void 0) throw error;
    if (!G(error)) await Gt(r, {
      force: !0
    }).catch(() => {}), t(`sessionStore resume: skipping ${n} (${k(error)})`);
  }
}
function ln(e, s) {
  if (e === "bypassPermissions") return "canUseTool will not be invoked: permissionMode 'bypassPermissions' auto-approves every tool call (except explicit deny rules) before the callback is consulted. To gate every tool call, use a PreToolUse hook instead.";
  let n = s.filter(item => item.length > 0 && !item.includes("("));
  if (n.length === 0) return;
  return `canUseTool will not be invoked for: ${n.join(", ")}. Bare allowedTools entries auto-approve the whole tool before the callback is consulted. To gate every tool call, use a PreToolUse hook; or remove the bare names from allowedTools so they fall through to canUseTool. Allow rules from settings files can also shadow the callback but are not visible here.`;
}
function Xt(e, s, n) {
  if (!e) return;
  let r = ln(s, n);
  if (r === void 0) return;
  process.emitWarning(r, {
    code: "CLAUDE_SDK_CAN_USE_TOOL_SHADOWED"
  });
}
import { realpathSync as dn } from "fs";
import { isAbsolute as cn, relative as un, resolve as pn, sep as fn } from "path";
function Jt(e) {
  let s = pn(e ?? "."),
    n;
  try {
    n = dn(s);
  } catch {
    n = s;
  }
  return $n(n);
}
function be(e, s) {
  let n = Jt(e);
  if (s === void 0) return cE(n);
  return (s.CLAUDE_CONFIG_DIR ? fqo(s.CLAUDE_CODE_PROJECT_DIR_NAME) : void 0) ?? s0(n);
}
function at(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "agent_metadata";
}
function lt(e, s) {
  let n = un(s, e),
    r = n.split(fn);
  if (r[0] === ".." || cn(n)) return null;
  if (r.length < 2) return null;
  let projectKey = r[0],
    sessionId_2 = r[1];
  if (r.length === 2 && sessionId_2.endsWith(".jsonl")) return {
    projectKey: projectKey,
    sessionId: sessionId_2.replace(/\.jsonl$/, "")
  };
  if (r.length >= 4) {
    let m = r.slice(2),
      h = m.length - 1;
    return m[h] = m.at(-1).replace(/\.jsonl$/, ""), {
      projectKey: projectKey,
      sessionId: sessionId_2,
      subpath: m.join("/")
    };
  }
  return null;
}
process.env.NoDefaultCurrentDirectoryInExePath = "1";
var Tn = ["enabledPlugins", "extraKnownMarketplaces", "additionalMarketplaces"];
function Zt(e) {
  let s;
  try {
    s = J(Bo(e.toString("utf8")));
  } catch {
    return e;
  }
  if (!es(s)) return e;
  let n = !1;
  for (let a of Tn) if (Object.hasOwn(s, a)) delete s[a], n = !0;
  let env_3 = s.env;
  if (es(env_3) && Object.hasOwn(env_3, "CLAUDE_CONFIG_DIR")) delete env_3.CLAUDE_CONFIG_DIR, n = !0;
  return n ? _(s) : e;
}
function es(e) {
  return e !== null && typeof e === "object" && !Array.isArray(e);
}
async function Rn(e, s) {
  if (!e) return;
  let n = e;
  try {
    let r = J(e);
    if (r?.claudeAiOauth?.refreshToken) delete r.claudeAiOauth.refreshToken, n = _(r);
  } catch {}
  await ts(s, n, {
    mode: 384
  });
}
function Pn() {
  return Promise.resolve(void 0);
}
async function Mn(e, sessionId_3, n, r, a = 60000, l) {
  if (!lI(sessionId_3)) return;
  let projectKey_2 = be(n, r),
    h = await Nt(e.load({
      projectKey: projectKey_2,
      sessionId: sessionId_3
    }), a, `SessionStore.load() timed out after ${a}ms for session ${sessionId_3}`);
  if (!h || h.length === 0) return;
  let S = D(bn(), `claude-resume-${hn()}`);
  try {
    let w = D(S, "projects", projectKey_2);
    await dt(w, {
      recursive: !0,
      mode: 448
    });
    let y = D(w, `${sessionId_3}.jsonl`);
    await dGe(y, h);
    let b = r?.CLAUDE_CONFIG_DIR ?? process.env.CLAUDE_CONFIG_DIR,
      E = b ?? D(ct(), ".claude"),
      T;
    try {
      T = await Sn(D(E, ".credentials.json"), "utf-8");
    } catch (error) {
      if (!G(error)) throw error;
    }
    if (!b && !(r ?? process.env).ANTHROPIC_API_KEY && !(r ?? process.env).CLAUDE_CODE_OAUTH_TOKEN) T = (await Pn()) ?? T;
    await Rn(T, D(S, ".credentials.json"));
    let C = Vt(rQn("CLAUDE_CONFIG_DIR")),
      P = b || ct(),
      I = D(P, ".claude.json");
    await oe(I, D(S, ".claude.json"), void 0, ot(l, I, C.globalConfig, Be.globalConfig())), await oe(D(E, ".config.json"), D(S, ".config.json"));
    for (let q of Whe) if (q) await oe(D(P, `.claude${q}.json`), D(S, `.claude${q}.json`));
    let B = D(E, "settings.json");
    if (await oe(B, D(S, "settings.json"), Zt, ot(l, B, C.userSettings, Be.userSettings())), await oe(D(E, "cowork_settings.json"), D(S, "cowork_settings.json"), Zt), e.listSubkeys) await In(e, {
      projectKey: projectKey_2,
      sessionId: sessionId_3
    }, D(w, sessionId_3), a);
    return S;
  } catch (error) {
    throw await rs(S), error;
  }
}
async function In(e, s, n, r) {
  let a = await Nt(e.listSubkeys({
    projectKey: s.projectKey,
    sessionId: s.sessionId
  }), r, `SessionStore.listSubkeys() timed out after ${r}ms for session ${s.sessionId}`);
  for (let subpath of a) {
    let m = ut(n, subpath + ".jsonl");
    if (!subpath || kn(subpath) || subpath.split(/[\\/]/).includes("..") || !m.startsWith(n + vn)) {
      t(`[SessionStore] skipping unsafe subpath from listSubkeys: ${subpath}`, {
        level: "warn"
      });
      continue;
    }
    let h = await Nt(e.load({
      projectKey: s.projectKey,
      sessionId: s.sessionId,
      subpath: subpath
    }), r, `SessionStore.load() timed out after ${r}ms for session ${s.sessionId} subpath ${subpath}`);
    if (!h || h.length === 0) continue;
    let S = [],
      w = [];
    for (let y of h) if (at(y)) S.push(y);else w.push(y);
    if (w.length > 0) await dt(Yt(m), {
      recursive: !0
    }), await dGe(m, w);
    if (S.length > 0) {
      let y = S.at(-1),
        b = ut(n, subpath + ".meta.json");
      await dt(Yt(b), {
        recursive: !0
      });
      let {
        type: type,
        ...T
      } = y;
      await ts(b, _(T), {
        mode: 384
      });
    }
  }
}
function xn(e) {
  let s = e?.accepted === !0 && (typeof e.directory !== "string" || !(_n.isAbsolute(e.directory) || Cn.isAbsolute(e.directory))) ? void 0 : e;
  if (e !== void 0 && s === void 0) t("workspaceTrust ignored: accepted requires an absolute directory, as it exists where Claude Code runs", {
    level: "warn"
  });
  return s;
}
function ss(e, s) {
  let {
      isSingleUserTurn: isSingleUserTurn,
      resumeConfigDir: resumeConfigDir,
      deferSpawn: deferSpawn
    } = s,
    {
      systemPrompt: systemPrompt,
      settings: settings_7,
      managedSettings: managedSettings,
      settingSources: settingSources_2,
      sandbox: sandbox_3,
      ...y
    } = e ?? {},
    systemPrompt_2,
    appendSystemPrompt,
    excludeDynamicSections,
    systemPromptSnapshot;
  if (systemPrompt === void 0) systemPrompt_2 = "";else if (typeof systemPrompt === "string") systemPrompt_2 = systemPrompt;else if (Array.isArray(systemPrompt)) systemPrompt_2 = systemPrompt;else if (systemPrompt.type === "custom") systemPrompt_2 = systemPrompt.prompt, systemPromptSnapshot = systemPrompt.snapshot;else if (systemPrompt.type === "preset") appendSystemPrompt = systemPrompt.append, excludeDynamicSections = systemPrompt.excludeDynamicSections, systemPromptSnapshot = systemPrompt.snapshot;
  process.env.CLAUDE_AGENT_SDK_VERSION = process.env.CLAUDE_AGENT_SDK_VERSION ?? "unknown";
  let {
      abortController: abortController_3 = mr(),
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
      executable: executable_2 = pk() ? "bun" : "node",
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
      maxThinkingTokens: ze,
      maxTurns: as,
      maxBudgetUsd: maxBudgetUsd_2,
      taskBudget: taskBudget_2,
      mcpServers: mcpServers_2,
      model: model_3,
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
    } = y,
    permissionMode_3 = permissionMode_2;
  if (sessionStore && persistSession === !1) throw Error("sessionStore cannot be used with persistSession: false -- the storage adapter requires local writes to mirror from. Use CLAUDE_CONFIG_DIR=/tmp for ephemeral local writes with external mirroring.");
  if (supportedDialogKinds !== void 0 && supportedDialogKinds.length > 0 && !onUserDialog) throw Error("supportedDialogKinds requires an onUserDialog callback -- declaring dialog kinds without a handler would park dialogs nothing can answer. Provide onUserDialog, or omit supportedDialogKinds.");
  let workspaceTrust_2 = xn(workspaceTrust);
  if (sessionStore && ae && !resume_2 && !sessionStore.listSessions) throw Error("Options.continue with sessionStore requires store.listSessions to be implemented");
  if (sessionStore && enableFileCheckpointing) throw Error("enableFileCheckpointing is not yet supported with sessionStore (backup blobs are not mirrored, so rewindFiles() fails after a store-backed resume).");
  if (sessionStore && y.spawnClaudeCodeProcess) t("sessionStore with custom spawnClaudeCodeProcess: ensure the subprocess CLAUDE_CONFIG_DIR matches the parent (same path, same separators) or transcript_mirror frames will be dropped.", {
    level: "warn"
  });
  if (Xt(!!canUseTool_2, permissionMode_3 ?? "default", allowedTools_2), pluginDelivery !== "argv" && pluginDelivery !== "initialize") throw Error("Invalid pluginDelivery. Expected 'argv' or 'initialize'.");
  let pluginsViaInitialize_2 = pluginDelivery === "initialize" && plugins_2 !== void 0 && plugins_2.length > 0,
    pathToClaudeCodeExecutable_2 = y.pathToClaudeCodeExecutable;
  if (!pathToClaudeCodeExecutable_2) {
    let O = En(import.meta.url),
      F = wn(O),
      Q = Kt(ne => F.resolve(ne));
    if (!Q) throw Error("Native CLI binary for win32-x64 not found. Reinstall @anthropic-ai/claude-agent-sdk without --omit=optional, or set options.pathToClaudeCodeExecutable.");
    pathToClaudeCodeExecutable_2 = Q;
  }
  let jsonSchema_2 = outputFormat?.type === "json_schema" ? outputFormat.schema : void 0,
    M = env_4 ? {
      ...env_4
    } : {
      ...process.env
    };
  if (!M.CLAUDE_CODE_ENTRYPOINT) M.CLAUDE_CODE_ENTRYPOINT = "sdk-ts";
  if (!M.CLAUDE_AGENT_SDK_VERSION) M.CLAUDE_AGENT_SDK_VERSION = process.env.CLAUDE_AGENT_SDK_VERSION;
  if (enableFileCheckpointing) M.CLAUDE_CODE_ENABLE_SDK_FILE_CHECKPOINTING = "true";
  if (!Object.keys(M).some(item => item.toUpperCase() === "CLAUDE_CODE_SDK_READS_SESSION_STATE")) M.CLAUDE_CODE_SDK_READS_SESSION_STATE = "1";
  let Qe = tu(M.CLAUDE_CODE_PRINT_BG_WAIT_CEILING_MS),
    ks = Number.isFinite(Qe) && Qe >= 0 ? Qe : _It;
  if (getOAuthToken) M.CLAUDE_CODE_SDK_HAS_OAUTH_REFRESH = "1";
  if (getHostAuthToken) M.CLAUDE_CODE_SDK_HAS_HOST_AUTH_REFRESH = "1";
  if (toolConfig?.askUserQuestion?.previewFormat) M.CLAUDE_CODE_QUESTION_PREVIEW_FORMAT = toolConfig.askUserQuestion.previewFormat;
  for (let [O, F] of [[toolConfig?.askUserQuestion?.extendedQuestions, "CLAUDE_CODE_QUESTION_EXTENDED"], [toolConfig?.askUserQuestion?.optionalDescriptions, "CLAUDE_CODE_QUESTION_OPTIONAL_DESCRIPTIONS"], [!1, "CLAUDE_CODE_AGENT_PROGRESS_SUMMARIES"]]) if (O) M[F] = "1";else if (!env_4) {
    for (let Q of Object.keys(M)) if (Q.toUpperCase() === F) delete M[Q];
  }
  let Ve = {};
  if (Le.propagation.inject(Le.context.active(), Ve), "traceparent" in Ve) {
    for (let O of ["TRACEPARENT", "TRACESTATE"]) if (!(O in (env_4 ?? {}))) delete M[O];
  }
  for (let [O, F] of Object.entries(Ve)) {
    let Q = O.toUpperCase();
    if (!(Q in (env_4 ?? {}))) M[Q] = F;
  }
  let mcpServers_3 = {},
    vt = new Map();
  if (mcpServers_2) for (let [O, F] of Object.entries(mcpServers_2)) if (F.type === "sdk" && F.instance) vt.set(O, F);else mcpServers_3[O] = F;
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
  } else if (ze !== void 0) thinkingConfig_2 = ze === 0 ? {
    type: "disabled"
  } : {
    type: "enabled",
    budgetTokens: ze
  };
  if (resumeConfigDir) M.CLAUDE_CONFIG_DIR = resumeConfigDir, M.CLAUDE_SECURESTORAGE_CONFIG_DIR = env_4?.CLAUDE_SECURESTORAGE_CONFIG_DIR ?? process.env.CLAUDE_SECURESTORAGE_CONFIG_DIR ?? env_4?.CLAUDE_CONFIG_DIR ?? process.env.CLAUDE_CONFIG_DIR ?? "";
  let transport_5 = new nt({
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
      env: M,
      forkSession: forkSession,
      stderr: stderr_2,
      thinkingConfig: thinkingConfig_2,
      effort: effort,
      maxTurns: as,
      maxBudgetUsd: maxBudgetUsd_2,
      taskBudget: taskBudget_2,
      model: model_3,
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
      settings: typeof settings_7 === "object" ? _(settings_7) : settings_7,
      managedSettings: managedSettings ? _(managedSettings) : void 0,
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
      spawnClaudeCodeProcess: y.spawnClaudeCodeProcess,
      onProcessSpawned: e?.onProcessSpawned,
      deferSpawn: deferSpawn
    }),
    _s = {
      systemPrompt: systemPrompt_2,
      appendSystemPrompt: appendSystemPrompt,
      planModeInstructions: y.planModeInstructions,
      systemPromptSnapshot: systemPromptSnapshot,
      appendSubagentSystemPrompt: y.appendSubagentSystemPrompt,
      toolAliases: y.toolAliases,
      excludeDynamicSections: excludeDynamicSections,
      agents: agents,
      title: y.title,
      skills: skills_2,
      webSearchIsolationExemptMcpServers: y.webSearchIsolationExemptMcpServers,
      promptSuggestions: y.promptSuggestions,
      agentProgressSummaries: y.agentProgressSummaries,
      forwardSubagentText: forwardSubagentText,
      supportedDialogKinds: supportedDialogKinds,
      perTaskStopAffordance: perTaskStopAffordance,
      rapidFollowupPreempt: rapidFollowupPreempt,
      forwardNestedSubagentToolCalls: e?.forwardNestedSubagentToolCalls,
      workspaceTrust: workspaceTrust_2,
      plugins: pluginsViaInitialize_2 ? plugins_2 : void 0,
      captureSdkMcpManifests: !zjr("CLAUDE_AGENT_SDK_DISABLE_MCP_MANIFESTS")
    },
    queryInstance = new Ue(transport_5, isSingleUserTurn, canUseTool_2, hooks, abortController_3, vt, jsonSchema_2, _s, onElicitation, getOAuthToken, getHostAuthToken, onUserDialog, verbatimPrompts, ks);
  if (sessionStore) {
    let O = () => D(M.CLAUDE_CONFIG_DIR ?? D(ct(), ".claude"), "projects"),
      F = sessionStoreFlush === "eager",
      Q = new Ye(async (ne, Je) => {
        let ye = lt(ne, O());
        if (ye) await sessionStore.append(ye, Je);else t(`[SessionStore] dropping mirror frame: filePath ${ne} is not under ${O()} -- subprocess CLAUDE_CONFIG_DIR likely differs from parent (custom spawnClaudeCodeProcess / container?)`, {
          level: "warn"
        });
      }, {
        onError: (ne, Je) => {
          let ye = lt(ne, O());
          if (ye) queryInstance.reportMirrorError(ye, Je.message);
        },
        maxPendingEntries: F ? 0 : Me,
        maxPendingBytes: F ? 0 : we
      });
    queryInstance.setTranscriptMirrorBatcher(Q);
  }
  return {
    queryInstance: queryInstance,
    transport: transport_5,
    abortController: abortController_3,
    processEnv: M,
    verbatimPrompts: verbatimPrompts
  };
}
function ns(e, text, n, r) {
  if (typeof text === "string") e.writeAfterInitialize(_({
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
    ...(r && {
      client_composed: !0
    })
  }) + `
`).catch(a => n.abort(a));else e.streamInput(text).catch(a => n.abort(a));
}
var On = new Set(["EBUSY", "EMFILE", "ENFILE", "ENOTEMPTY", "EPERM"]);
async function rs(e) {
  for (let s = 0;; s++) try {
    return await yn(e, {
      recursive: !0,
      force: !0
    });
  } catch (error) {
    if (s >= 4 || !On.has(k(error) ?? "")) return;
    await Y((s + 1) * 100);
  }
}
function An(e, s) {
  e.waitForExit().catch(() => {}).finally(() => rs(s));
}
function Un({
  prompt: prompt,
  options: options
}) {
  if ((options?.resume || options?.continue) && options?.sessionStore) return jn(prompt, options);
  let {
    queryInstance: queryInstance_2,
    abortController: abortController_4,
    verbatimPrompts: verbatimPrompts_2
  } = ss(options, {
    isSingleUserTurn: typeof prompt === "string"
  });
  return ns(queryInstance_2, prompt, abortController_4, verbatimPrompts_2), queryInstance_2;
}
function jn(e, s) {
  let {
      queryInstance: queryInstance_3,
      transport: transport_6,
      abortController: abortController_5,
      processEnv: processEnv,
      verbatimPrompts: verbatimPrompts_3
    } = ss({
      ...s
    }, {
      isSingleUserTurn: typeof e === "string",
      deferSpawn: !0
    }),
    h = ut(s.cwd ?? "."),
    sessionStore_2 = s.sessionStore,
    w = s.loadTimeoutMs ?? 60000,
    resume_3 = s.resume;
  return (async () => {
    if (!resume_3) resume_3 = (await Nt(sessionStore_2.listSessions(be(h, s.env)), w, `SessionStore.listSessions() timed out after ${w}ms`)).slice().sort((itemA, itemB) => itemB.mtime - itemA.mtime)[0]?.sessionId;
    if (!resume_3) return;
    return Mn(sessionStore_2, resume_3, h, s.env, s.loadTimeoutMs);
  })().then(CLAUDE_CONFIG_DIR => {
    if (CLAUDE_CONFIG_DIR) {
      transport_6.updateResume(resume_3);
      let T = {
        CLAUDE_CONFIG_DIR: CLAUDE_CONFIG_DIR
      };
      {
        let C = s.env?.CLAUDE_SECURESTORAGE_CONFIG_DIR ?? process.env.CLAUDE_SECURESTORAGE_CONFIG_DIR ?? s.env?.CLAUDE_CONFIG_DIR ?? process.env.CLAUDE_CONFIG_DIR ?? "";
        T.CLAUDE_SECURESTORAGE_CONFIG_DIR = C, processEnv.CLAUDE_SECURESTORAGE_CONFIG_DIR = C;
      }
      transport_6.updateEnv(T), processEnv.CLAUDE_CONFIG_DIR = CLAUDE_CONFIG_DIR, queryInstance_3.addCleanupCallback(() => An(transport_6, CLAUDE_CONFIG_DIR));
    }
    if (!queryInstance_3.isClosed()) transport_6.spawn();
  }).catch(E => {
    let T = H(E);
    transport_6.spawnAbort(T), queryInstance_3.setError(T);
  }), ns(queryInstance_3, e, abortController_5, verbatimPrompts_3), queryInstance_3;
}
export { Un as query };