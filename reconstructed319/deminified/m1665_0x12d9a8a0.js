// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { b, f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { d, k, K, wr } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { we } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { Xd, HUt } from "B:/~BUN/root/chunk-q8eknvfd.js";
import { P, Yr } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { _s } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { Eu } from "B:/~BUN/root/chunk-44q965xg.js";
import { t, _, ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { br } from "B:/~BUN/root/chunk-sy1h8mf0.js";
import { EDr, DUt } from "B:/~BUN/root/chunk-grwykqvw.js";
import { Iu, Att, xtt, g1t } from "B:/~BUN/root/chunk-pc24rkga.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { Ane, hle } from "B:/~BUN/root/chunk-sbp8fbqp.js";
import { Mu } from "B:/~BUN/root/chunk-x1xft50h.js";
import { Z$o, YPe } from "B:/~BUN/root/chunk-s9kjpyrm.js";
import { ir } from "B:/~BUN/root/chunk-6n5g80b8.js";
import { yt } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { fU } from "B:/~BUN/root/chunk-m749kjym.js";
import { QCs } from "B:/~BUN/root/chunk-5w7xhbnh.js";
import { orn } from "B:/~BUN/root/chunk-teehnwdh.js";
import { Ouo } from "B:/~BUN/root/chunk-z7bs0q82.js";
import { c8n } from "B:/~BUN/root/chunk-je8n28sa.js";
import { _8n } from "B:/~BUN/root/chunk-7fayc109.js";
import { S8n } from "B:/~BUN/root/chunk-ghcwe0nh.js";
import { Ro } from "B:/~BUN/root/chunk-143z690c.js";
import { U } from "B:/~BUN/root/chunk-5ha2avah.js";
import { createHash as Me } from "crypto";
import { lstat as de, mkdtemp as Pe, rm as Ue, writeFile as ae } from "fs/promises";
import { join as H } from "path";
import { spawn as _e } from "child_process";
import { createWriteStream as Ee } from "fs";
import { rm as Se, stat as Ce } from "fs/promises";
import { dirname as ve, join as ie } from "path";
import { createInterface as se } from "readline";
function oe(n) {
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
var he = 10,
  Ae = 10,
  ye = 1000,
  De = 3600000;
function Hhn(n) {
  return n.replace(/[^a-zA-Z0-9_-]/g, "_");
}
var Ie = {
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
  LSP: "LSP"
};
function be(n, e, i, r, o) {
  let s = Ie[n] ?? n,
    a = e.file_path ?? e.filePath ?? e.pattern ?? e.command?.slice(0, 60) ?? e.url ?? e.query ?? "";
  if (a) return `${s} ${a}`;
  return s;
}
function Re(n, e, i, r, o) {
  let s;
  try {
    s = ee(n);
  } catch {
    return [];
  }
  if (!s || typeof s !== "object") return [];
  let a = s,
    p = [],
    timestamp = Date.now();
  switch (a.type) {
    case "assistant":
      {
        let y = a.message;
        if (!y) break;
        let content = y.content;
        if (!Array.isArray(content)) break;
        for (let I of content) {
          if (!I || typeof I !== "object") continue;
          let A = I;
          if (A.type === "tool_use") {
            let O = A.name ?? "Tool",
              D = A.input ?? {},
              summary = be(O, D, r, p, o);
            if (summary !== void 0) p.push({
              type: "tool_start",
              summary: summary,
              timestamp: timestamp
            });
            i(`[bridge:activity] sessionId=${e} tool_use name=${O} ${Te(D)}`);
          } else if (A.type === "text") {
            let O = A.text ?? "";
            if (O.length > 0) p.push({
              type: "text",
              summary: O.slice(0, 80),
              timestamp: timestamp
            }), i(`[bridge:activity] sessionId=${e} text "${O.slice(0, 100)}"`);
          }
        }
        break;
      }
    case "result":
      {
        let subtype = a.subtype;
        if (subtype === "success") p.push({
          type: "result",
          summary: "Session completed",
          timestamp: timestamp
        }), i(`[bridge:activity] sessionId=${e} result subtype=success`);else if (subtype) {
          let summary_2 = a.errors?.[0] ?? `Error: ${subtype}`;
          p.push({
            type: "error",
            summary: summary_2,
            timestamp: timestamp
          }), i(`[bridge:activity] sessionId=${e} result subtype=${subtype} error="${summary_2}"`);
        } else i(`[bridge:activity] sessionId=${e} result subtype=undefined`);
        break;
      }
    default:
      break;
  }
  return p;
}
function Oe(n) {
  if (n.parent_tool_use_id != null || n.isSynthetic || n.isReplay) return;
  let i = n.message?.content,
    r;
  if (typeof i === "string") r = i;else if (Array.isArray(i)) {
    for (let o of i) if (o && typeof o === "object" && o.type === "text") {
      r = o.text;
      break;
    }
  }
  return r = r?.trim(), r ? r : void 0;
}
function Te(n) {
  let e = [];
  for (let [i, r] of Object.entries(n)) {
    if (typeof r === "string") e.push(`${i}="${r.slice(0, 100)}"`);
    if (e.length >= 3) break;
  }
  return e.join(" ");
}
function D$o(n) {
  return {
    chooseStandIn: n.chooseStandIn,
    spawn(e, cwd) {
      let r = Hhn(e.sessionId),
        o;
      if (n.debugFile) {
        let u = n.debugFile.lastIndexOf(".");
        if (u > 0) o = `${n.debugFile.slice(0, u)}-${r}${n.debugFile.slice(u)}`;else o = `${n.debugFile}-${r}`;
      } else if (n.verbose) o = ie(Mu(), `bridge-session-${r}.log`);
      let s = _8n({
          roles: e.roles,
          modePinned: n.permissionMode !== void 0,
          settings: () => (ir(), yt())
        }),
        {
          autoDefault: autoDefault,
          autoOverSettings: autoOverSettings,
          artifact: artifact,
          machineSettings: machineSettings
        } = s,
        h = null,
        I;
      if (n.debugFile) I = ie(ve(n.debugFile), `bridge-transcript-${r}.jsonl`), h = Ee(I, {
        flags: "a"
      }), h.on("error", u => {
        n.onDebug(`[bridge:session] Transcript write error: ${u.message}`), h = null;
      }), n.onDebug(`[bridge:session] Transcript log: ${I}`);
      let A = [...(e.standIn?.prefixArgs ?? n.scriptArgs), "--print", "--sdk-url", e.sdkUrl, "--session-id", e.sessionId, "--input-format", "stream-json", "--output-format", "stream-json", "--replay-user-messages", `--resume=${e.sdkUrl}`, ...(n.verbose ? ["--verbose"] : []), ...(o ? ["--debug-file", o] : []), ...(n.permissionMode ? ["--permission-mode", n.permissionMode] : []), ...(n.chrome === void 0 ? [] : [n.chrome ? "--chrome" : "--no-chrome"])],
        O = A.length,
        serverConfig = e.serverConfig,
        autoModeEnvironment = serverConfig?.autoModeEnvironment ?? [],
        B = oe({
          autoOverSettings: autoOverSettings,
          autoCompact: s.autoCompact,
          autoModeEnvironment: autoModeEnvironment
        });
      if (B !== void 0) A.push(`--settings=${B}`);
      let fe = A.length,
        M = serverConfig?.mcpConfig;
      if (M) A.push(`--mcp-config=${M.path}`);
      if (serverConfig?.appendSystemPrompt) A.push(`--append-system-prompt-file=${serverConfig.appendSystemPrompt.path}`);
      if (serverConfig) A.push(...serverConfig.extraArgs);
      let Y = A.length - fe;
      A.push(...e.modelArgs);
      let V = serverConfig?.dir,
        j = () => {
          let u = V;
          return V = void 0, u ? Se(u, {
            recursive: !0,
            force: !0
          }).catch(() => {}) : Promise.resolve();
        },
        ownerIdentity = n.ownerIdentity,
        X = {
          CLAUDE_CODE_OAUTH_TOKEN: void 0,
          CLAUDE_CODE_ENVIRONMENT_KIND: "bridge",
          CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT: void 0,
          CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT: void 0,
          CLAUDE_CODE_BRIDGE_CHILD_MACHINE_SETTINGS: void 0,
          CLAUDE_CODE_BRIDGE_CHILD_PROJECTS_ENTRYPOINT: void 0,
          CLAUDE_CODE_BRIDGE_CHILD_CLI_ENTRYPOINT: void 0,
          CLAUDE_CODE_SESSION_ACCESS_TOKEN: e.accessToken,
          CLAUDE_CODE_BRIDGE_OWNER_ACCOUNT_UUID: ownerIdentity?.accountUuid,
          CLAUDE_CODE_BRIDGE_OWNER_ORG_UUID: ownerIdentity?.organizationUuid,
          CLAUDE_CODE_BRIDGE_SOURCE_DIR: e.sourceDir,
          CLAUDE_CODE_BRIDGE_MCP_CARRIER: serverConfig ? "1" : void 0,
          CLAUDE_CODE_BRIDGE_PROMPT_SHA256: serverConfig?.appendSystemPrompt?.sha256,
          CLAUDE_CODE_WORKER_EPOCH: String(e.workerEpoch),
          CLAUDE_CODE_RESUME_INTERRUPTED_TURN: e.workerEpoch > 1 ? "1" : void 0,
          CLAUDE_CODE_RESUME_INTERRUPTED_TURN_MAX_AGE_MS: e.workerEpoch > 1 && e.boundResumedTurn ? String(De) : void 0,
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
          SESSION_INGRESS_URL: M ? M.ingressUrl : void 0,
          CLAUDE_CODE_EXIT_AFTER_STOP_DELAY: e.idleExitAfterMs > 0 ? String(e.idleExitAfterMs) : void 0
        },
        env = {
          ...fU(n.env),
          ...Object.fromEntries(YPe.map(item => [item, void 0])),
          ...Object.fromEntries(Z$o.map(item => [item, n.env[item]])),
          ...X
        },
        q = new Set([...YPe, ...Object.keys(X)]);
      for (let u of Object.keys(env)) if (!q.has(u) && q.has(u.toUpperCase())) delete env[u];
      if (hle(env), Ane(env), autoDefault) env.CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT = "1";
      if (artifact) env.CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT = "1";
      if (machineSettings) env.CLAUDE_CODE_BRIDGE_CHILD_MACHINE_SETTINGS = "1";
      if (s.projectsEntrypoint) env.CLAUDE_CODE_BRIDGE_CHILD_PROJECTS_ENTRYPOINT = "1";
      if (s.cliEntrypoint) env.CLAUDE_CODE_BRIDGE_CHILD_CLI_ENTRYPOINT = "1";
      if (n.onDebug(`[bridge:session] Spawning sessionId=${e.sessionId} sdkUrl=${e.sdkUrl} accessToken=${e.accessToken ? "present" : "MISSING"}`), n.onDebug(`[bridge:session] Child args: ${A.slice(0, O).join(" ")}${B !== void 0 ? ` (+settings: auto=${autoOverSettings}, facts=${autoModeEnvironment.length})` : ""}${Y > 0 ? ` (+${Y} server-config args, mcpConfig=${M ? "present" : "unset"}, appendPrompt=${serverConfig?.appendSystemPrompt ? "present" : "unset"})` : ""}${e.modelArgs.length > 0 ? ` (+${e.modelArgs.length} model args)` : ""}`), o) n.onDebug(`[bridge:session] Debug log: ${o}`);
      let S;
      try {
        S = _e(e.standIn?.cmd ?? n.execPath, A, {
          cwd: cwd,
          stdio: ["pipe", "pipe", "pipe"],
          env: env,
          windowsHide: !0
        });
      } catch (error) {
        throw j(), error;
      }
      n.onDebug(`[bridge:session] sessionId=${e.sessionId} pid=${S.pid}`);
      let activities = [],
        me = void 0,
        z = null,
        lastStderr = [],
        F,
        Z = !1,
        Q = !1,
        ne = !1;
      if (S.stderr) se({
        input: S.stderr
      }).on("line", C => {
        if (C.startsWith(orn)) {
          let R = Yr(C.slice(orn.length));
          if (n.onChildWarning) n.onChildWarning(e.sessionId, R);else process.stderr.write(orn + R + `
`);
          return;
        }
        if (n.verbose) process.stderr.write(C + `
`);
        if (lastStderr.length >= Ae) lastStderr.shift();
        lastStderr.push(C);
      });
      if (S.stdout) se({
        input: S.stdout
      }).on("line", C => {
        if (h) h.write(C + `
`);
        if (n.onDebug(`[bridge:ws] sessionId=${e.sessionId} <<< ${QCs(C)}`), n.verbose) process.stderr.write(C + `
`);
        let R = Re(C, e.sessionId, n.onDebug, activities, me);
        for (let v of R) {
          if (activities.length >= he) activities.shift();
          activities.push(v), z = v, n.onActivity?.(e.sessionId, v), e.onActivity?.(v);
        }
        if (!ne && e.onFirstUserMessage) {
          let v;
          try {
            v = ee(C);
          } catch {}
          if (v && typeof v === "object") {
            let re = v;
            if (re.type === "user") {
              let te = Oe(re);
              if (te) ne = !0, e.onFirstUserMessage(te);
            }
          }
        }
      });
      let pe = new Promise(u => {
          S.on("close", (C, R) => {
            if (h) h.end(), h = null;
            let v;
            if (R === "SIGTERM" || R === "SIGINT" || Q && C !== 0) n.onDebug(`[bridge:session] sessionId=${e.sessionId} interrupted signal=${R} exit_code=${C} pid=${S.pid}`), v = "interrupted";else if (C === 0) v = e.idleExitAfterMs > 0 ? "idle" : "completed", n.onDebug(`[bridge:session] sessionId=${e.sessionId} ${v} exit_code=0 pid=${S.pid}`);else n.onDebug(`[bridge:session] sessionId=${e.sessionId} failed exit_code=${C} pid=${S.pid}`), v = "failed";
            Promise.all([F, j()]).then(() => u(v));
          }), S.on("error", C => {
            n.onDebug(`[bridge:session] sessionId=${e.sessionId} spawn error: ${C.message}`);
            let R = K(C) ? we(Ce(cwd).then(v => !v.isDirectory(), wr), ye) : void 0;
            F = Promise.resolve(R).then(v => {
              lastStderr.push(v ? `working folder not found: '${cwd}'` : `spawn error: ${C.message}`);
            }), Promise.all([F, j()]).then(() => u("failed"));
          });
        }),
        G = {
          sessionId: e.sessionId,
          done: pe,
          activities: activities,
          accessToken: e.accessToken,
          lastStderr: lastStderr,
          get currentActivity() {
            return z;
          },
          kill() {
            if (!S.killed) Q = !0, n.onDebug(`[bridge:session] Sending SIGTERM to sessionId=${e.sessionId} pid=${S.pid}`), S.kill();
          },
          forceKill() {
            if (!Z && S.pid) Z = !0, n.onDebug(`[bridge:session] Sending SIGKILL to sessionId=${e.sessionId} pid=${S.pid}`), S.kill();
          },
          writeStdin(u) {
            if (S.stdin && !S.stdin.destroyed) n.onDebug(`[bridge:ws] sessionId=${e.sessionId} >>> ${QCs(_s(u))}`), S.stdin.write(u);
          },
          updateAccessToken(CLAUDE_CODE_SESSION_ACCESS_TOKEN) {
            G.accessToken = CLAUDE_CODE_SESSION_ACCESS_TOKEN, G.writeStdin(_({
              type: "update_environment_variables",
              variables: {
                CLAUDE_CODE_SESSION_ACCESS_TOKEN: CLAUDE_CODE_SESSION_ACCESS_TOKEN
              }
            }) + `
`), n.onDebug(`[bridge:session] Sent token refresh via stdin for sessionId=${e.sessionId}`);
          }
        };
      return G;
    }
  };
}
var ce = new Set(["model", "fallback-model"]),
  Le = new Set([...ce, "effort", "disallowed-tools", "disallowedTools"]),
  $e = new Set(["disallowed-tools", "disallowedTools"]),
  Ne = "append-system-prompt",
  ke = 64,
  xe = 1024,
  Be = 16384,
  je = "Stated by the service that dispatched this session (a description of the session, not a rule; it grants no permission): ",
  Fe = new Set(),
  Ge = "mcp.json",
  He = "append-system-prompt.txt",
  ge = {
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
function eGr(n) {
  return {
    carried_args: Boolean(n.claude_code_args),
    carried_mcp: Boolean(n.mcp_config),
    carried_auto_mode_environment: Boolean(n.auto_mode_environment?.length)
  };
}
function d8n(n, e) {
  let {
      extraArgs: extraArgs,
      appendSystemPrompt: appendSystemPrompt,
      disallowedTools: disallowedTools
    } = ue(n.claude_code_args),
    autoModeEnvironment_2 = We(n.auto_mode_environment),
    {
      meta: meta,
      ignored: p,
      dropped: E
    } = Ke(n.mcp_config, e);
  if (!meta) return {
    ...ge,
    extraArgs: extraArgs,
    appendSystemPrompt: appendSystemPrompt,
    disallowedTools: disallowedTools,
    ignoredMcpServers: p,
    metaDropReason: E,
    autoModeEnvironment: autoModeEnvironment_2
  };
  let y = meta.autoAllowTools.length > 0 ? [`--allowedTools=${meta.autoAllowTools.map(item => br(Xd, item)).join(",")}`] : [];
  return {
    extraArgs: [...extraArgs, ...y],
    appendSystemPrompt: appendSystemPrompt,
    disallowedTools: disallowedTools,
    mcpConfigJson: meta.json,
    metaMountUrl: meta.url,
    autoAllowTools: meta.autoAllowTools,
    ignoredMcpServers: p,
    metaDropReason: null,
    autoModeEnvironment: autoModeEnvironment_2
  };
}
function We(n = []) {
  let e = [],
    i = 0;
  for (let o of n) {
    if (o.trim().length === 0 || [...o].length > xe || o === Iu || Att(o) || xtt(o) || g1t(o) !== null || e.length >= ke) continue;
    let s = je + o,
      a = i + _(s).length + 1;
    if (a > Be) continue;
    i = a, e.push(s);
  }
  let r = n.length - e.length;
  if (r > 0) t(`[bridge:server-config] dropped ${r} auto_mode_environment ${P(r, "entry", "entries")} (empty, over the caps, control, invisible or template characters, or the defaults marker)`, {
    level: "warn"
  });
  return e;
}
function ue(n) {
  if (!n) return {
    extraArgs: [],
    appendSystemPrompt: null,
    disallowedTools: []
  };
  let e = {},
    appendSystemPrompt_2 = null,
    disallowedTools_2 = [],
    o = 0;
  for (let [p, E] of Object.entries(n)) if (Le.has(p)) {
    if (e[p] = E, $e.has(p) && typeof E === "string") disallowedTools_2.push(...Eu([E]));
  } else if (p === Ne) appendSystemPrompt_2 = typeof E === "string" && E ? E : null;else o++;
  let extraArgs_2 = [],
    a = S8n(extraArgs_2, e, Fe, p => t(`[bridge:server-config] skipped ${p} claude_code_arg`));
  return t(`[bridge:server-config] claude_code_args applied=${a} append_prompt=${appendSystemPrompt_2 ? "present" : "unset"} disallowed_tools=${disallowedTools_2.length} not_allowlisted=${o}`), {
    extraArgs: extraArgs_2,
    appendSystemPrompt: appendSystemPrompt_2,
    disallowedTools: disallowedTools_2
  };
}
function O9s(n) {
  let e = n?.model;
  return typeof e === "string" && e !== "" ? e : void 0;
}
function I9s(n) {
  let e = n?.effort;
  return typeof e === "string" && e !== "" ? e : void 0;
}
function M9s(n) {
  if (!n) return [];
  let e = Ro(n, (i, r) => ce.has(r));
  return ue(e).extraArgs;
}
function Ke(n, e) {
  if (!n) return {
    meta: null,
    ignored: 0,
    dropped: null
  };
  let i = Ye(n.content);
  if (!i) return {
    meta: null,
    ignored: 0,
    dropped: "undecodable"
  };
  let ignored = U(Object.keys(i), y => y !== Xd);
  if (ignored > 0) t(`[bridge:server-config] ignoring ${ignored} other server(s) in mcp_config (only ${Xd} is honored)`);
  let o = i[Xd];
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
  let s = DUt(e.apiBaseUrl);
  if (!s) return t("[bridge:server-config] apiBaseUrl is not a trusted ingress origin; dropping meta entry", {
    level: "warn"
  }), {
    meta: null,
    ignored: ignored,
    dropped: "untrusted_origin"
  };
  let url = EDr(o.url, s, e.sessionId);
  if (!url) return t("[bridge:server-config] meta url is not this session's meta proxy route on the bridge origin", {
    level: "warn"
  }), {
    meta: null,
    ignored: ignored,
    dropped: "route_mismatch"
  };
  let autoAllowTools = c8n(o);
  if (!autoAllowTools) return {
    meta: null,
    ignored: ignored,
    dropped: "bad_tools"
  };
  return {
    meta: {
      json: _({
        mcpServers: {
          [Xd]: HUt(url, e.sessionId)
        }
      }),
      url: url,
      autoAllowTools: autoAllowTools
    },
    ignored: ignored,
    dropped: null
  };
}
function Ye(n) {
  let e;
  try {
    e = ee(Buffer.from(n, "base64").toString("utf8"));
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
async function Ve() {
  let {
      autoModeConfigSchema: autoModeConfigSchema,
      getSettingsFilePathForSource: getSettingsFilePathForSource,
      getSettingsForSource: getSettingsForSource
    } = await import("B:/~BUN/root/chunk-bfmgajst.js"),
    {
      parseSettingsFileUncached: parseSettingsFileUncached
    } = await import("B:/~BUN/root/chunk-ypz77tgs.js"),
    o = autoModeConfigSchema(),
    s = getSettingsFilePathForSource("userSettings");
  return s !== void 0 && le(o, parseSettingsFileUncached(s).settings) || le(o, getSettingsForSource("policySettings"));
}
function le(n, e) {
  let i = n.safeParse(e?.autoMode);
  return i.success && (i.data?.environment?.length ?? 0) > 0;
}
async function Je(n, e) {
  let autoModeEnvironment_3 = n.autoModeEnvironment.length === 0 ? void 0 : e.userAutoModeEnvironmentConfigured ? n.autoModeEnvironment : [Iu, ...n.autoModeEnvironment];
  if (!n.mcpConfigJson && !n.appendSystemPrompt) return n.extraArgs.length > 0 || autoModeEnvironment_3 !== void 0 ? {
    extraArgs: n.extraArgs,
    autoModeEnvironment: autoModeEnvironment_3
  } : void 0;
  let dir = await Xe(e.sessionId);
  try {
    let mcpConfig;
    if (n.mcpConfigJson) {
      let path = H(dir, Ge);
      await ae(path, n.mcpConfigJson, {
        flag: "wx",
        mode: 384
      }), mcpConfig = {
        path: path,
        ingressUrl: e.apiBaseUrl
      };
    }
    let appendSystemPrompt_3;
    if (n.appendSystemPrompt) {
      let path_2 = H(dir, He),
        p = Buffer.from(n.appendSystemPrompt, "utf8");
      await ae(path_2, p, {
        flag: "wx",
        mode: 384
      }), appendSystemPrompt_3 = {
        path: path_2,
        sha256: Me("sha256").update(p).digest("hex")
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
async function Xe(n) {
  for (let e = 0;; e++) try {
    let i = await Ouo(),
      r = await de(i);
    if (!r.isDirectory()) throw Error("bridge spawn root is not a directory");
    if (x() !== "windows") {
      if (typeof process.getuid === "function" && r.uid !== process.getuid() || (r.mode & 63) !== 0) throw Error("bridge spawn root has unexpected owner or mode");
    }
    let o = await Pe(H(i, `${Hhn(n)}-`)),
      s = await de(i).catch(() => null);
    if (s?.dev !== r.dev || s.ino !== r.ino) throw await W(o), Error("bridge spawn root changed identity during mkdtemp");
    return o;
  } catch (error) {
    if (e > 0 || k(error) !== "ENOENT") throw error;
  }
}
async function W(n) {
  await Ue(n, {
    recursive: !0,
    force: !0
  }).catch(() => {});
}
async function D9s(n) {
  if (n?.dir) await W(n.dir);
}
function L$o(n, e) {
  t(`[bridge:server-config] not applied sessionId=${n}: gate_off (tengu_bridge_apply_server_session_config=false)`, {
    level: "warn"
  }), l("tengu_bridge_server_config_rejected", {
    ...e,
    reason: b("gate_off")
  }), c("bridge_server_session_config", "gate_off", e);
}
async function L9s(n, e) {
  let i = eGr(n);
  if (!Object.values(i).some(Boolean)) return;
  if (!e.enabled) {
    L$o(e.sessionId, i);
    return;
  }
  let r = ge,
    o,
    s;
  try {
    r = d8n(e.dropAutoModeEnvironment === void 0 ? n : {
      ...n,
      auto_mode_environment: void 0
    }, e);
    let E = r.autoModeEnvironment.length > 0 && e.userAutoModeEnvironmentConfigured === void 0 ? {
      ...e,
      userAutoModeEnvironmentConfigured: await Ve()
    } : e;
    o = await Je(r, E);
  } catch (error) {
    s = d(error);
  }
  let a = {
    ...i,
    extra_args: r.extraArgs.length,
    append_prompt: r.appendSystemPrompt !== null,
    meta_mcp: r.mcpConfigJson !== null,
    auto_allow: r.autoAllowTools.length,
    auto_mode_environment: r.autoModeEnvironment.length,
    ...(e.dropAutoModeEnvironment !== void 0 && {
      auto_mode_environment_drop: f(e.dropAutoModeEnvironment)
    }),
    ignored_mcp: r.ignoredMcpServers,
    ...(r.metaDropReason !== null && {
      meta_drop: f(r.metaDropReason)
    })
  };
  if (s !== void 0) {
    t(`[bridge:server-config] not applied sessionId=${e.sessionId}: ${s}`, {
      level: "warn"
    }), l("tengu_bridge_server_config_rejected", {
      ...a,
      reason: b("prepare_failed")
    }), m("bridge_server_session_config", "prepare_failed", a);
    return;
  }
  if (!o) {
    t(`[bridge:server-config] nothing applied sessionId=${e.sessionId}: every carried value was rejected`, {
      level: "warn"
    }), l("tengu_bridge_server_config_rejected", {
      ...a,
      reason: b("nothing_applied")
    }), c("bridge_server_session_config", "nothing_applied", a);
    return;
  }
  let p = r.mcpConfigJson ? "present" : r.metaDropReason ? `dropped:${r.metaDropReason}` : "unset";
  if (t(`[bridge:server-config] applied sessionId=${e.sessionId} args=${r.extraArgs.length} appendPrompt=${r.appendSystemPrompt ? "present" : "unset"} metaMcp=${p} autoAllow=${r.autoAllowTools.length} autoModeEnvironment=${r.autoModeEnvironment.length}`, {
    level: r.metaDropReason ? "warn" : "debug"
  }), l("tengu_bridge_server_config_applied", a), r.metaDropReason !== null) c("bridge_server_session_config", "meta_mcp_not_verified", a);else if (i.carried_auto_mode_environment && r.autoModeEnvironment.length === 0) c("bridge_server_session_config", e.dropAutoModeEnvironment === void 0 ? "auto_mode_environment_dropped" : `auto_mode_environment_${e.dropAutoModeEnvironment}`, a);else g("bridge_server_session_config", a);
  return o;
}
export { Hhn, D$o, eGr, d8n, O9s, I9s, M9s, D9s, L$o, L9s };