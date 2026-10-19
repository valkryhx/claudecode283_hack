// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { b, c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { d, k } from "B:/~BUN/root/chunk-3aez4b53.js";
import { F } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { jd, Uyt } from "B:/~BUN/root/chunk-we0fhavr.js";
import { _, J, ps, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { O, zr } from "B:/~BUN/root/chunk-nggrknsv.js";
import { Eu } from "B:/~BUN/root/chunk-a0k8qg0d.js";
import { g5n, Hyt } from "B:/~BUN/root/chunk-ejm0pmyj.js";
import { Ju, Zft, emt, tmt } from "B:/~BUN/root/chunk-mgb2hezz.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { p8, JQ } from "B:/~BUN/root/chunk-qz3jjjax.js";
import { Bs } from "B:/~BUN/root/chunk-yw21pggd.js";
import { wd } from "B:/~BUN/root/chunk-wegca9zh.js";
import { tKr, Qye } from "B:/~BUN/root/chunk-z4tj2tcd.js";
import { dr } from "B:/~BUN/root/chunk-6a9s3k2y.js";
import { ut } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { MPo } from "B:/~BUN/root/chunk-7ybsx93y.js";
import { JFt } from "B:/~BUN/root/chunk-7z3ndmqr.js";
import { XRr } from "B:/~BUN/root/chunk-r0jnxjth.js";
import { HSn } from "B:/~BUN/root/chunk-mk7anfka.js";
import { XSn } from "B:/~BUN/root/chunk-gjs3m90b.js";
import { QSn } from "B:/~BUN/root/chunk-6zqm9466.js";
import { si } from "B:/~BUN/root/chunk-b0487zs4.js";
import { createHash as De } from "crypto";
import { lstat as ie, mkdtemp as Ie, rm as Re, writeFile as se } from "fs/promises";
import { join as G } from "path";
import { spawn as pe } from "child_process";
import { createWriteStream as me } from "fs";
import { rm as _e } from "fs/promises";
import { dirname as Ee, join as te } from "path";
import { createInterface as oe } from "readline";
function re(n) {
  let e = {
    ...(n.autoOverSettings && {
      permissions: {
        defaultMode: "auto"
      }
    }),
    ...(n.autoCompact && {
      autoCompactEnabled: !0
    }),
    ...(n.autoModeEnvironment.length > 0 && {
      autoMode: {
        environment: n.autoModeEnvironment
      }
    })
  };
  return Object.keys(e).length > 0 ? _(e) : void 0;
}
var Se = 10,
  ve = 10,
  Ce = 3600000;
function p2t(n) {
  return n.replace(/[^a-zA-Z0-9_-]/g, "_");
}
var he = {
  Read: "Reading",
  Write: "Writing",
  Edit: "Editing",
  MultiEdit: "Editing",
  Bash: "Running",
  Glob: "Searching",
  Grep: "Searching",
  WebFetch: "Fetching",
  WebSearch: "Searching",
  Task: "Running task",
  FileReadTool: "Reading",
  FileWriteTool: "Writing",
  FileEditTool: "Editing",
  GlobTool: "Searching",
  GrepTool: "Searching",
  BashTool: "Running",
  NotebookEditTool: "Editing notebook",
  LSP: "LSP"
};
function ye(n, e, s, r, o) {
  let l = he[n] ?? n,
    a = e.file_path ?? e.filePath ?? e.pattern ?? e.command?.slice(0, 60) ?? e.url ?? e.query ?? "";
  if (a) return `${l} ${a}`;
  return l;
}
function Ae(n, e, s, r, o) {
  let l;
  try {
    l = J(n);
  } catch {
    return [];
  }
  if (!l || typeof l !== "object") return [];
  let a = l,
    f = [],
    timestamp = Date.now();
  switch (a.type) {
    case "assistant":
      {
        let y = a.message;
        if (!y) break;
        let content = y.content;
        if (!Array.isArray(content)) break;
        for (let D of content) {
          if (!D || typeof D !== "object") continue;
          let h = D;
          if (h.type === "tool_use") {
            let R = h.name ?? "Tool",
              w = h.input ?? {},
              summary = ye(R, w, r, f, o);
            if (summary !== void 0) f.push({
              type: "tool_start",
              summary: summary,
              timestamp: timestamp
            });
            s(`[bridge:activity] sessionId=${e} tool_use name=${R} ${we(w)}`);
          } else if (h.type === "text") {
            let R = h.text ?? "";
            if (R.length > 0) f.push({
              type: "text",
              summary: R.slice(0, 80),
              timestamp: timestamp
            }), s(`[bridge:activity] sessionId=${e} text "${R.slice(0, 100)}"`);
          }
        }
        break;
      }
    case "result":
      {
        let subtype = a.subtype;
        if (subtype === "success") f.push({
          type: "result",
          summary: "Session completed",
          timestamp: timestamp
        }), s(`[bridge:activity] sessionId=${e} result subtype=success`);else if (subtype) {
          let summary_2 = a.errors?.[0] ?? `Error: ${subtype}`;
          f.push({
            type: "error",
            summary: summary_2,
            timestamp: timestamp
          }), s(`[bridge:activity] sessionId=${e} result subtype=${subtype} error="${summary_2}"`);
        } else s(`[bridge:activity] sessionId=${e} result subtype=undefined`);
        break;
      }
    default:
      break;
  }
  return f;
}
function be(n) {
  if (n.parent_tool_use_id != null || n.isSynthetic || n.isReplay) return;
  let s = n.message?.content,
    r;
  if (typeof s === "string") r = s;else if (Array.isArray(s)) {
    for (let o of s) if (o && typeof o === "object" && o.type === "text") {
      r = o.text;
      break;
    }
  }
  return r = r?.trim(), r ? r : void 0;
}
function we(n) {
  let e = [];
  for (let [s, r] of Object.entries(n)) {
    if (typeof r === "string") e.push(`${s}="${r.slice(0, 100)}"`);
    if (e.length >= 3) break;
  }
  return e.join(" ");
}
function $qr(n) {
  return {
    spawn(e, cwd) {
      let r = p2t(e.sessionId),
        o;
      if (n.debugFile) {
        let u = n.debugFile.lastIndexOf(".");
        if (u > 0) o = `${n.debugFile.slice(0, u)}-${r}${n.debugFile.slice(u)}`;else o = `${n.debugFile}-${r}`;
      } else if (n.verbose) o = te(wd(), `bridge-session-${r}.log`);
      let l = XSn({
          roles: e.roles,
          modePinned: n.permissionMode !== void 0,
          settings: () => (dr(), ut())
        }),
        {
          autoDefault: autoDefault,
          autoOverSettings: autoOverSettings,
          artifact: artifact,
          machineSettings: machineSettings
        } = l,
        C = null,
        D;
      if (n.debugFile) D = te(Ee(n.debugFile), `bridge-transcript-${r}.jsonl`), C = me(D, {
        flags: "a"
      }), C.on("error", u => {
        n.onDebug(`[bridge:session] Transcript write error: ${u.message}`), C = null;
      }), n.onDebug(`[bridge:session] Transcript log: ${D}`);
      let h = [...n.scriptArgs, "--print", "--sdk-url", e.sdkUrl, "--session-id", e.sessionId, "--input-format", "stream-json", "--output-format", "stream-json", "--replay-user-messages", `--resume=${e.sdkUrl}`, ...(n.verbose ? ["--verbose"] : []), ...(o ? ["--debug-file", o] : []), ...(n.permissionMode ? ["--permission-mode", n.permissionMode] : []), ...(n.chrome === void 0 ? [] : [n.chrome ? "--chrome" : "--no-chrome"])],
        R = h.length,
        serverConfig = e.serverConfig,
        autoModeEnvironment = serverConfig?.autoModeEnvironment ?? [],
        x = re({
          autoOverSettings: autoOverSettings,
          autoCompact: l.autoCompact,
          autoModeEnvironment: autoModeEnvironment
        });
      if (x !== void 0) h.push(`--settings=${x}`);
      let ge = h.length,
        P = serverConfig?.mcpConfig;
      if (P) h.push(`--mcp-config=${P.path}`);
      if (serverConfig?.appendSystemPrompt) h.push(`--append-system-prompt-file=${serverConfig.appendSystemPrompt.path}`);
      if (serverConfig) h.push(...serverConfig.extraArgs);
      let H = h.length - ge;
      h.push(...e.modelArgs);
      let K = serverConfig?.dir,
        B = () => {
          let u = K;
          return K = void 0, u ? _e(u, {
            recursive: !0,
            force: !0
          }).catch(() => {}) : Promise.resolve();
        },
        ownerIdentity = n.ownerIdentity,
        Y = {
          CLAUDE_CODE_OAUTH_TOKEN: void 0,
          CLAUDE_CODE_ENVIRONMENT_KIND: "bridge",
          CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT: void 0,
          CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT: void 0,
          CLAUDE_CODE_BRIDGE_CHILD_MACHINE_SETTINGS: void 0,
          CLAUDE_CODE_SESSION_ACCESS_TOKEN: e.accessToken,
          CLAUDE_CODE_BRIDGE_OWNER_ACCOUNT_UUID: ownerIdentity?.accountUuid,
          CLAUDE_CODE_BRIDGE_OWNER_ORG_UUID: ownerIdentity?.organizationUuid,
          CLAUDE_CODE_BRIDGE_SOURCE_DIR: e.sourceDir,
          CLAUDE_CODE_BRIDGE_MCP_CARRIER: serverConfig ? "1" : void 0,
          CLAUDE_CODE_BRIDGE_PROMPT_SHA256: serverConfig?.appendSystemPrompt?.sha256,
          CLAUDE_CODE_WORKER_EPOCH: String(e.workerEpoch),
          CLAUDE_CODE_RESUME_INTERRUPTED_TURN: e.workerEpoch > 1 ? "1" : void 0,
          CLAUDE_CODE_RESUME_INTERRUPTED_TURN_MAX_AGE_MS: e.workerEpoch > 1 && e.boundResumedTurn ? String(Ce) : void 0,
          CLAUDE_CODE_RESUME_FROM_SESSION: void 0,
          CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR: void 0,
          CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR: void 0,
          CLAUDE_CODE_GATEWAY_TOKEN_FILE_DESCRIPTOR: void 0,
          CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR: void 0,
          CCR_AGENT_PROXY_TOKEN_FILE_DESCRIPTOR: void 0,
          CLAUDE_BG_AUTH_SNAPSHOT_PATH: void 0,
          CLAUDE_CODE_ACCOUNT_UUID: void 0,
          CLAUDE_CODE_ORGANIZATION_UUID: void 0,
          CLAUDE_CODE_USER_EMAIL: void 0,
          CCR_SESSION_ACCOUNT_EMAIL: void 0,
          SESSION_INGRESS_URL: P ? P.ingressUrl : void 0,
          CLAUDE_CODE_EXIT_AFTER_STOP_DELAY: e.idleExitAfterMs > 0 ? String(e.idleExitAfterMs) : void 0
        },
        env = {
          ...n.env,
          ...Object.fromEntries(Qye.map(item => [item, void 0])),
          ...Object.fromEntries(tKr.map(item => [item, n.env[item]])),
          ...Y
        },
        X = new Set([...Qye, ...Object.keys(Y)]);
      for (let u of Object.keys(env)) if (!X.has(u) && X.has(u.toUpperCase())) delete env[u];
      if (JQ(env), p8(env), autoDefault) env.CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT = "1";
      if (artifact) env.CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT = "1";
      if (machineSettings) env.CLAUDE_CODE_BRIDGE_CHILD_MACHINE_SETTINGS = "1";
      if (n.onDebug(`[bridge:session] Spawning sessionId=${e.sessionId} sdkUrl=${e.sdkUrl} accessToken=${e.accessToken ? "present" : "MISSING"}`), n.onDebug(`[bridge:session] Child args: ${h.slice(0, R).join(" ")}${x !== void 0 ? ` (+settings: auto=${autoOverSettings}, facts=${autoModeEnvironment.length})` : ""}${H > 0 ? ` (+${H} server-config args, mcpConfig=${P ? "present" : "unset"}, appendPrompt=${serverConfig?.appendSystemPrompt ? "present" : "unset"})` : ""}${e.modelArgs.length > 0 ? ` (+${e.modelArgs.length} model args)` : ""}`), o) n.onDebug(`[bridge:session] Debug log: ${o}`);
      let S;
      try {
        S = pe(n.execPath, h, {
          cwd: cwd,
          stdio: ["pipe", "pipe", "pipe"],
          env: env,
          windowsHide: !0
        });
      } catch (error) {
        throw B(), error;
      }
      n.onDebug(`[bridge:session] sessionId=${e.sessionId} pid=${S.pid}`);
      let activities = [],
        ue = void 0,
        q = null,
        lastStderr = [],
        z = !1,
        Z = !1,
        Q = !1;
      if (S.stderr) oe({
        input: S.stderr
      }).on("line", v => {
        if (v.startsWith(JFt)) {
          let M = zr(v.slice(JFt.length));
          if (n.onChildWarning) n.onChildWarning(e.sessionId, M);else process.stderr.write(JFt + M + `
`);
          return;
        }
        if (n.verbose) process.stderr.write(v + `
`);
        if (lastStderr.length >= ve) lastStderr.shift();
        lastStderr.push(v);
      });
      if (S.stdout) oe({
        input: S.stdout
      }).on("line", v => {
        if (C) C.write(v + `
`);
        if (n.onDebug(`[bridge:ws] sessionId=${e.sessionId} <<< ${MPo(v)}`), n.verbose) process.stderr.write(v + `
`);
        let M = Ae(v, e.sessionId, n.onDebug, activities, ue);
        for (let A of M) {
          if (activities.length >= Se) activities.shift();
          activities.push(A), q = A, n.onActivity?.(e.sessionId, A), e.onActivity?.(A);
        }
        if (!Q && e.onFirstUserMessage) {
          let A;
          try {
            A = J(v);
          } catch {}
          if (A && typeof A === "object") {
            let ee = A;
            if (ee.type === "user") {
              let ne = be(ee);
              if (ne) Q = !0, e.onFirstUserMessage(ne);
            }
          }
        }
      });
      let fe = new Promise(u => {
          S.on("close", (v, M) => {
            if (C) C.end(), C = null;
            let A;
            if (M === "SIGTERM" || M === "SIGINT" || Z && v !== 0) n.onDebug(`[bridge:session] sessionId=${e.sessionId} interrupted signal=${M} exit_code=${v} pid=${S.pid}`), A = "interrupted";else if (v === 0) A = e.idleExitAfterMs > 0 ? "idle" : "completed", n.onDebug(`[bridge:session] sessionId=${e.sessionId} ${A} exit_code=0 pid=${S.pid}`);else n.onDebug(`[bridge:session] sessionId=${e.sessionId} failed exit_code=${v} pid=${S.pid}`), A = "failed";
            B().then(() => u(A));
          }), S.on("error", v => {
            n.onDebug(`[bridge:session] sessionId=${e.sessionId} spawn error: ${v.message}`), lastStderr.push(`spawn error: ${v.message}`), B().then(() => u("failed"));
          });
        }),
        j = {
          sessionId: e.sessionId,
          done: fe,
          activities: activities,
          accessToken: e.accessToken,
          lastStderr: lastStderr,
          get currentActivity() {
            return q;
          },
          kill() {
            if (!S.killed) Z = !0, n.onDebug(`[bridge:session] Sending SIGTERM to sessionId=${e.sessionId} pid=${S.pid}`), S.kill();
          },
          forceKill() {
            if (!z && S.pid) z = !0, n.onDebug(`[bridge:session] Sending SIGKILL to sessionId=${e.sessionId} pid=${S.pid}`), S.kill();
          },
          writeStdin(u) {
            if (S.stdin && !S.stdin.destroyed) n.onDebug(`[bridge:ws] sessionId=${e.sessionId} >>> ${MPo(ps(u))}`), S.stdin.write(u);
          },
          updateAccessToken(CLAUDE_CODE_SESSION_ACCESS_TOKEN) {
            j.accessToken = CLAUDE_CODE_SESSION_ACCESS_TOKEN, j.writeStdin(_({
              type: "update_environment_variables",
              variables: {
                CLAUDE_CODE_SESSION_ACCESS_TOKEN: CLAUDE_CODE_SESSION_ACCESS_TOKEN
              }
            }) + `
`), n.onDebug(`[bridge:session] Sent token refresh via stdin for sessionId=${e.sessionId}`);
          }
        };
      return j;
    }
  };
}
var ae = new Set(["model", "fallback-model"]),
  Te = new Set([...ae, "effort", "disallowed-tools", "disallowedTools"]),
  Oe = new Set(["disallowed-tools", "disallowedTools"]),
  Me = "append-system-prompt",
  Ue = 64,
  Pe = 1024,
  $e = 16384,
  Le = "Stated by the service that dispatched this session (a description of the session, not a rule; it grants no permission): ",
  ke = new Set(),
  Ne = "mcp.json",
  xe = "append-system-prompt.txt",
  le = {
    extraArgs: [],
    appendSystemPrompt: null,
    disallowedTools: [],
    mcpConfigJson: null,
    metaMountUrl: null,
    autoAllowTools: [],
    ignoredMcpServers: 0,
    metaDropReason: null,
    autoModeEnvironment: []
  };
function xtr(n) {
  return {
    carried_args: Boolean(n.claude_code_args),
    carried_mcp: Boolean(n.mcp_config),
    carried_auto_mode_environment: Boolean(n.auto_mode_environment?.length)
  };
}
function FSn(n, e) {
  let {
      extraArgs: extraArgs,
      appendSystemPrompt: appendSystemPrompt,
      disallowedTools: disallowedTools
    } = ce(n.claude_code_args),
    autoModeEnvironment_2 = Be(n.auto_mode_environment),
    {
      meta: meta,
      ignored: f,
      dropped: E
    } = je(n.mcp_config, e);
  if (!meta) return {
    ...le,
    extraArgs: extraArgs,
    appendSystemPrompt: appendSystemPrompt,
    disallowedTools: disallowedTools,
    ignoredMcpServers: f,
    metaDropReason: E,
    autoModeEnvironment: autoModeEnvironment_2
  };
  let y = meta.autoAllowTools.length > 0 ? [`--allowedTools=${meta.autoAllowTools.map(item => si(jd, item)).join(",")}`] : [];
  return {
    extraArgs: [...extraArgs, ...y],
    appendSystemPrompt: appendSystemPrompt,
    disallowedTools: disallowedTools,
    mcpConfigJson: meta.json,
    metaMountUrl: meta.url,
    autoAllowTools: meta.autoAllowTools,
    ignoredMcpServers: f,
    metaDropReason: null,
    autoModeEnvironment: autoModeEnvironment_2
  };
}
function Be(n = []) {
  let e = [],
    s = 0;
  for (let o of n) {
    if (o.trim().length === 0 || [...o].length > Pe || o === Ju || Zft(o) || emt(o) || tmt(o) !== null || e.length >= Ue) continue;
    let l = Le + o,
      a = s + _(l).length + 1;
    if (a > $e) continue;
    s = a, e.push(l);
  }
  let r = n.length - e.length;
  if (r > 0) t(`[bridge:server-config] dropped ${r} auto_mode_environment ${O(r, "entry", "entries")} (empty, over the caps, control, invisible or template characters, or the defaults marker)`, {
    level: "warn"
  });
  return e;
}
function ce(n) {
  if (!n) return {
    extraArgs: [],
    appendSystemPrompt: null,
    disallowedTools: []
  };
  let e = {},
    appendSystemPrompt_2 = null,
    disallowedTools_2 = [],
    o = 0;
  for (let [f, E] of Object.entries(n)) if (Te.has(f)) {
    if (e[f] = E, Oe.has(f) && typeof E === "string") disallowedTools_2.push(...Eu([E]));
  } else if (f === Me) appendSystemPrompt_2 = typeof E === "string" && E ? E : null;else o++;
  let extraArgs_2 = [],
    a = QSn(extraArgs_2, e, ke, f => t(`[bridge:server-config] skipped ${f} claude_code_arg`));
  return t(`[bridge:server-config] claude_code_args applied=${a} append_prompt=${appendSystemPrompt_2 ? "present" : "unset"} disallowed_tools=${disallowedTools_2.length} not_allowlisted=${o}`), {
    extraArgs: extraArgs_2,
    appendSystemPrompt: appendSystemPrompt_2,
    disallowedTools: disallowedTools_2
  };
}
function y5o(n) {
  let e = n?.model;
  return typeof e === "string" && e !== "" ? e : void 0;
}
function _5o(n) {
  let e = n?.effort;
  return typeof e === "string" && e !== "" ? e : void 0;
}
function b5o(n) {
  if (!n) return [];
  let e = Bs(n, (s, r) => ae.has(r));
  return ce(e).extraArgs;
}
function je(n, e) {
  if (!n) return {
    meta: null,
    ignored: 0,
    dropped: null
  };
  let s = Fe(n.content);
  if (!s) return {
    meta: null,
    ignored: 0,
    dropped: "undecodable"
  };
  let ignored = F(Object.keys(s), y => y !== jd);
  if (ignored > 0) t(`[bridge:server-config] ignoring ${ignored} other server(s) in mcp_config (only ${jd} is honored)`);
  let o = s[jd];
  if (o === void 0) return t("[bridge:server-config] mcp_config carries no meta entry"), {
    meta: null,
    ignored: ignored,
    dropped: "no_meta_entry"
  };
  if (o === null || typeof o !== "object" || !("type" in o) || o.type !== "http" || !("url" in o) || typeof o.url !== "string") return t("[bridge:server-config] meta entry is not http", {
    level: "warn"
  }), {
    meta: null,
    ignored: ignored,
    dropped: "not_http"
  };
  let l = Hyt(e.apiBaseUrl);
  if (!l) return t("[bridge:server-config] apiBaseUrl is not a trusted ingress origin; dropping meta entry", {
    level: "warn"
  }), {
    meta: null,
    ignored: ignored,
    dropped: "untrusted_origin"
  };
  let url = g5n(o.url, l, e.sessionId);
  if (!url) return t("[bridge:server-config] meta url is not this session's meta proxy route on the bridge origin", {
    level: "warn"
  }), {
    meta: null,
    ignored: ignored,
    dropped: "route_mismatch"
  };
  let autoAllowTools = HSn(o);
  if (!autoAllowTools) return {
    meta: null,
    ignored: ignored,
    dropped: "bad_tools"
  };
  return {
    meta: {
      json: _({
        mcpServers: {
          [jd]: Uyt(url, e.sessionId)
        }
      }),
      url: url,
      autoAllowTools: autoAllowTools
    },
    ignored: ignored,
    dropped: null
  };
}
function Fe(n) {
  let e;
  try {
    e = J(Buffer.from(n, "base64").toString("utf8"));
  } catch {
    return t("[bridge:server-config] mcp_config did not decode", {
      level: "warn"
    }), null;
  }
  if (e === null || typeof e !== "object" || !("mcpServers" in e) || e.mcpServers === null || typeof e.mcpServers !== "object" || Array.isArray(e.mcpServers)) return t("[bridge:server-config] mcp_config has no mcpServers", {
    level: "warn"
  }), null;
  return e.mcpServers;
}
async function Ge() {
  let {
      autoModeConfigSchema: autoModeConfigSchema,
      getSettingsFilePathForSource: getSettingsFilePathForSource,
      getSettingsForSource: getSettingsForSource
    } = await import("B:/~BUN/root/chunk-3pxr4gzq.js"),
    {
      parseSettingsFileUncached: parseSettingsFileUncached
    } = await import("B:/~BUN/root/chunk-cg50v9wq.js"),
    o = autoModeConfigSchema(),
    l = getSettingsFilePathForSource("userSettings");
  return l !== void 0 && de(o, parseSettingsFileUncached(l).settings) || de(o, getSettingsForSource("policySettings"));
}
function de(n, e) {
  let s = n.safeParse(e?.autoMode);
  return s.success && (s.data?.environment?.length ?? 0) > 0;
}
async function We(n, e) {
  let autoModeEnvironment_3 = n.autoModeEnvironment.length === 0 ? void 0 : e.userAutoModeEnvironmentConfigured ? n.autoModeEnvironment : [Ju, ...n.autoModeEnvironment];
  if (!n.mcpConfigJson && !n.appendSystemPrompt) return n.extraArgs.length > 0 || autoModeEnvironment_3 !== void 0 ? {
    extraArgs: n.extraArgs,
    autoModeEnvironment: autoModeEnvironment_3
  } : void 0;
  let dir = await He(e.sessionId);
  try {
    let mcpConfig;
    if (n.mcpConfigJson) {
      let path = G(dir, Ne);
      await se(path, n.mcpConfigJson, {
        flag: "wx",
        mode: 384
      }), mcpConfig = {
        path: path,
        ingressUrl: e.apiBaseUrl
      };
    }
    let appendSystemPrompt_3;
    if (n.appendSystemPrompt) {
      let path_2 = G(dir, xe),
        f = Buffer.from(n.appendSystemPrompt, "utf8");
      await se(path_2, f, {
        flag: "wx",
        mode: 384
      }), appendSystemPrompt_3 = {
        path: path_2,
        sha256: De("sha256").update(f).digest("hex")
      };
    }
    return {
      extraArgs: n.extraArgs,
      dir: dir,
      mcpConfig: mcpConfig,
      appendSystemPrompt: appendSystemPrompt_3,
      autoModeEnvironment: autoModeEnvironment_3
    };
  } catch (error) {
    throw await W(dir), error;
  }
}
async function He(n) {
  for (let e = 0;; e++) try {
    let s = await XRr(),
      r = await ie(s);
    if (!r.isDirectory()) throw Error("bridge spawn root is not a directory");
    if (I() !== "windows") {
      if (typeof process.getuid === "function" && r.uid !== process.getuid() || (r.mode & 63) !== 0) throw Error("bridge spawn root has unexpected owner or mode");
    }
    let o = await Ie(G(s, `${p2t(n)}-`)),
      l = await ie(s).catch(() => null);
    if (l?.dev !== r.dev || l.ino !== r.ino) throw await W(o), Error("bridge spawn root changed identity during mkdtemp");
    return o;
  } catch (error) {
    if (e > 0 || k(error) !== "ENOENT") throw error;
  }
}
async function W(n) {
  await Re(n, {
    recursive: !0,
    force: !0
  }).catch(() => {});
}
async function S5o(n) {
  if (n?.dir) await W(n.dir);
}
function Uqr(n, e) {
  t(`[bridge:server-config] not applied sessionId=${n}: gate_off (tengu_bridge_apply_server_session_config=false)`, {
    level: "warn"
  }), i("tengu_bridge_server_config_rejected", {
    ...e,
    reason: b("gate_off")
  }), p("bridge_server_session_config", "gate_off", e);
}
async function w5o(n, e) {
  let s = xtr(n);
  if (!Object.values(s).some(Boolean)) return;
  if (!e.enabled) {
    Uqr(e.sessionId, s);
    return;
  }
  let r = le,
    o,
    l;
  try {
    r = FSn(e.dropAutoModeEnvironment === void 0 ? n : {
      ...n,
      auto_mode_environment: void 0
    }, e);
    let E = r.autoModeEnvironment.length > 0 && e.userAutoModeEnvironmentConfigured === void 0 ? {
      ...e,
      userAutoModeEnvironmentConfigured: await Ge()
    } : e;
    o = await We(r, E);
  } catch (error) {
    l = d(error);
  }
  let a = {
    ...s,
    extra_args: r.extraArgs.length,
    append_prompt: r.appendSystemPrompt !== null,
    meta_mcp: r.mcpConfigJson !== null,
    auto_allow: r.autoAllowTools.length,
    auto_mode_environment: r.autoModeEnvironment.length,
    ...(e.dropAutoModeEnvironment !== void 0 && {
      auto_mode_environment_drop: c(e.dropAutoModeEnvironment)
    }),
    ignored_mcp: r.ignoredMcpServers,
    ...(r.metaDropReason !== null && {
      meta_drop: c(r.metaDropReason)
    })
  };
  if (l !== void 0) {
    t(`[bridge:server-config] not applied sessionId=${e.sessionId}: ${l}`, {
      level: "warn"
    }), i("tengu_bridge_server_config_rejected", {
      ...a,
      reason: b("prepare_failed")
    }), m("bridge_server_session_config", "prepare_failed", a);
    return;
  }
  if (!o) {
    t(`[bridge:server-config] nothing applied sessionId=${e.sessionId}: every carried value was rejected`, {
      level: "warn"
    }), i("tengu_bridge_server_config_rejected", {
      ...a,
      reason: b("nothing_applied")
    }), p("bridge_server_session_config", "nothing_applied", a);
    return;
  }
  let f = r.mcpConfigJson ? "present" : r.metaDropReason ? `dropped:${r.metaDropReason}` : "unset";
  if (t(`[bridge:server-config] applied sessionId=${e.sessionId} args=${r.extraArgs.length} appendPrompt=${r.appendSystemPrompt ? "present" : "unset"} metaMcp=${f} autoAllow=${r.autoAllowTools.length} autoModeEnvironment=${r.autoModeEnvironment.length}`, {
    level: r.metaDropReason ? "warn" : "debug"
  }), i("tengu_bridge_server_config_applied", a), r.metaDropReason !== null) p("bridge_server_session_config", "meta_mcp_not_verified", a);else if (s.carried_auto_mode_environment && r.autoModeEnvironment.length === 0) p("bridge_server_session_config", e.dropAutoModeEnvironment === void 0 ? "auto_mode_environment_dropped" : `auto_mode_environment_${e.dropAutoModeEnvironment}`, a);else g("bridge_server_session_config", a);
  return o;
}
export { p2t, $qr, xtr, FSn, y5o, _5o, b5o, S5o, Uqr, w5o };