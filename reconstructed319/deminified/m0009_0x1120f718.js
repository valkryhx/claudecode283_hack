// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import "B:/~BUN/root/chunk-wt4dg253.js";
import { b } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { lxr } from "B:/~BUN/root/chunk-agg547ae.js";
import { sHt, iHt, vbe, Bqi, UX } from "B:/~BUN/root/chunk-7mppcgdr.js";
import { Kqi } from "B:/~BUN/root/chunk-xxhz3cx4.js";
import { J$r } from "B:/~BUN/root/chunk-xwsv2hvn.js";
import { X } from "B:/~BUN/root/chunk-g9pw24zp.js";
function me() {
  try {
    process.cwd();
    return;
  } catch (error) {
    let f = error instanceof Error && "code" in error && typeof error.code === "string" ? error.code : void 0;
    if (f === "ENOENT") return "The current directory no longer exists (it was deleted or moved). Start Claude Code from an existing directory.";
    return `Can't read the current directory${f ? ` (${f})` : ""}. Start Claude Code from a different directory.`;
  }
}
process.env.NoDefaultCurrentDirectoryInExePath = "1";
process.env.COREPACK_ENABLE_AUTO_PIN = "0";
J$r();
if (process.env.CLAUDE_CODE_REMOTE === "true") {
  let a = process.env.NODE_OPTIONS || "";
  process.env.NODE_OPTIONS = a ? `${a} --max-old-space-size=8192` : "--max-old-space-size=8192";
}
function fe(a) {
  for (let f = 0; f < a.length; f++) {
    let D = a[f];
    if (D === "--debug" || D === "-d" || D === "--debug-to-stderr" || D === "-d2e" || D.startsWith("--debug=") || D.startsWith("--debug-file=")) continue;
    if (D === "--debug-file" && f + 1 < a.length) {
      f++;
      continue;
    }
    return !1;
  }
  return !0;
}
function we(a) {
  let f = a.indexOf("--");
  return (f === -1 ? a : a.slice(0, f)).includes("--desktop");
}
function Xe(a) {
  let f,
    D,
    model,
    effort,
    agent,
    allowBypass,
    rest = [];
  for (let d = 0; d < a.length; d++) {
    let B = a[d],
      s = B.indexOf("="),
      [N, O] = s > 0 ? [B.slice(0, s), B.slice(s + 1)] : [B, void 0],
      u = O !== void 0 || d + 1 < a.length;
    if (N === "--dangerously-skip-permissions") f = "bypassPermissions";else if (N === "--allow-dangerously-skip-permissions") allowBypass = !0;else if (N === "--permission-mode" && u) f = O ?? a[++d];else if (N === "--inherit-permission-mode" && u) D = O ?? a[++d];else if (N === "--model" && u) model = O ?? a[++d];else if (N === "--effort" && u) effort = O ?? a[++d];else if (N === "--agent" && u) agent = O ?? a[++d];else rest.push(B);
  }
  let permissionMode = f ?? D;
  return {
    dispatchDefaults: permissionMode || model || effort || agent || allowBypass ? {
      permissionMode: permissionMode,
      ...(!f && D && {
        permissionModeInherited: !0
      }),
      model: model,
      effort: effort,
      agent: agent,
      allowBypass: allowBypass
    } : void 0,
    rest: rest
  };
}
async function Ze() {
  if (process.env.CCR_AGENT_PROXY_TOKEN_FILE_DESCRIPTOR !== void 0 || process.argv.includes("--session-tunnel")) {
    let {
      guardRelayTokenDescriptor: guardRelayTokenDescriptor
    } = import.meta.require("B:/~BUN/root/chunk-wv8cfhth.js");
    guardRelayTokenDescriptor();
  }
  let a = Kqi();
  if (a === "refused") return;
  let f = process.argv[2]?.startsWith("--runner-declares=") ? process.argv.splice(2, 1)[0] : void 0,
    D = lxr(process.argv);
  if (D) console.error(D), process.exit(1);
  if (process.env.CLAUDE_CODE_REMOTE_SESSION_ORIGIN === "review") {
    let {
      guardRunnerReviewTokens: guardRunnerReviewTokens
    } = import.meta.require("B:/~BUN/root/chunk-b2hdca9a.js");
    guardRunnerReviewTokens();
  }
  let {
    noteProcessStartTuning: noteProcessStartTuning
  } = import.meta.require("B:/~BUN/root/chunk-d4yeq3bm.js");
  noteProcessStartTuning();
  let {
    startGarbageCollectionCount: startGarbageCollectionCount
  } = import.meta.require("B:/~BUN/root/chunk-3d0qdjcv.js");
  startGarbageCollectionCount();
  let {
    startThreadCpuMeter: startThreadCpuMeter
  } = import.meta.require("B:/~BUN/root/chunk-98mmya31.js");
  startThreadCpuMeter();
  let {
    installCliArgvReader: installCliArgvReader
  } = import.meta.require("B:/~BUN/root/chunk-yfgww3m0.js");
  installCliArgvReader(e => import.meta.require("B:/~BUN/root/chunk-0kcks6tw.js").cliFlagWords(e));
  let t = process.argv.slice(2);
  if ((t.length === 1 || t.length === 2 && t[1] === "--verbose") && (t[0] === "--version" || t[0] === "-v" || t[0] === "-V")) {
    if (console.log(`${{
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.319",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-11-05T18:14:18Z",
      GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION} (Claude Code)${UX()}`), t.length === 2 && {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.319",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-11-05T18:14:18Z",
      GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.GIT_SHA) console.log(`Commit: ${{
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.319",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-11-05T18:14:18Z",
      GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.GIT_SHA}`);
    return;
  }
  let message = me();
  if (message) {
    console.error(message);
    let {
        writeStartupFailureResult: writeStartupFailureResult
      } = await import("B:/~BUN/root/chunk-8tvftvks.js"),
      {
        randomUUID: randomUUID
      } = await import("crypto");
    await writeStartupFailureResult({
      sessionId: randomUUID(),
      message: message,
      reason: "cwd_unavailable"
    }), process.exit(1);
  }
  if (f !== void 0) {
    let {
      adoptRunnerDeclaration: adoptRunnerDeclaration
    } = await import("B:/~BUN/root/chunk-59w17t0s.js");
    await adoptRunnerDeclaration(f);
  }
  let {
    profileCheckpoint: profileCheckpoint
  } = await import("B:/~BUN/root/chunk-0y2k99q8.js");
  profileCheckpoint("cli_entry");
  let B = t[0] === "--preload" || t[0] === "--bg-spare",
    envPin = !B && process.env.CLAUDE_CODE_HOVER_REST ? (await import("B:/~BUN/root/chunk-6vt4r4ek.js")).pinStorageV5FromEnv() : void 0;
  if (!B) setTimeout(() => {
    if (process.env.CLAUDE_CODE_JIT_POLICY_AFTER_STARTUP) import("B:/~BUN/root/chunk-0h0qd5sb.js").then(e => e.setJitPolicyAfterStartup());else if (typeof Bun < "u") Bun.unsafe.setJITPolicy?.(1);
  }, 1e4).unref();
  if (a !== void 0) {
    let {
        loadFastPathPolicy: loadFastPathPolicy
      } = await import("B:/~BUN/root/chunk-tk9jt1c9.js"),
      r = await loadFastPathPolicy(envPin);
    if (r) {
      let {
        exitWithError: exitWithError
      } = await import("B:/~BUN/root/chunk-tv1g9qyb.js");
      exitWithError(r);
    }
    let {
      ghStandinMain: ghStandinMain
    } = await import("B:/~BUN/root/chunk-ykpxm591.js");
    await ghStandinMain(a);
    return;
  }
  if (t[0] === "plugin" && t[1] === "test") {
    let [{
        loadFastPathPolicy: loadFastPathPolicy_2
      }, {
        pluginTestFormOf: pluginTestFormOf,
        pluginTestGatesOf: pluginTestGatesOf,
        pluginTestRefusal: pluginTestRefusal
      }, {
        endPluginTest: endPluginTest
      }] = await Promise.all([import("B:/~BUN/root/chunk-tk9jt1c9.js"), import("B:/~BUN/root/chunk-j0061vpx.js"), import("B:/~BUN/root/chunk-qxye7h6b.js")]),
      error_2 = pluginTestRefusal(await pluginTestGatesOf({
        helperError: await loadFastPathPolicy_2(envPin),
        form: pluginTestFormOf(t.slice(2)),
        envPin: envPin
      }));
    if (t[2] === "--file" && error_2 !== void 0) {
      let {
        REPORT_MARK: REPORT_MARK
      } = await import("B:/~BUN/root/chunk-cmfr8yjp.js");
      process.stdout.write(`${REPORT_MARK}${JSON.stringify({
        file: t[3],
        results: [],
        error: error_2
      })}
`);
      return;
    }
    if (error_2 !== void 0) return process.stderr.write(`claude plugin test: ${error_2}
`), process.exitCode = 1, endPluginTest(process.exitCode);
    let {
      pluginTestMain: pluginTestMain
    } = await import("B:/~BUN/root/chunk-9jb6vj63.js");
    return process.exitCode = await pluginTestMain(t.slice(2)), endPluginTest(process.exitCode);
  }
  if (process.argv[2] === "--eval-mock-server") {
    profileCheckpoint("cli_eval_mock_server_path");
    let {
      runEvalMockServer: runEvalMockServer
    } = await import("B:/~BUN/root/chunk-tfjwg55m.js");
    try {
      await runEvalMockServer(process.argv[3], process.argv[4]);
    } catch (r) {
      console.error(`--eval-mock-server: ${r instanceof Error ? r.message : String(r)}`), process.exitCode = 1;
    }
    return;
  }
  if (process.argv[2] === "--claude-in-chrome-mcp") {
    profileCheckpoint("cli_claude_in_chrome_mcp_path");
    let {
      runClaudeInChromeMcpServer: runClaudeInChromeMcpServer
    } = await import("B:/~BUN/root/chunk-jjatx11q.js");
    await runClaudeInChromeMcpServer(envPin);
    return;
  } else if (process.argv[2] === "--chrome-native-host") {
    profileCheckpoint("cli_chrome_native_host_path");
    let {
      runChromeNativeHost: runChromeNativeHost
    } = await import("B:/~BUN/root/chunk-cafdm46m.js");
    await runChromeNativeHost();
    return;
  }
  if (t[0] === "--daemon-worker") {
    let {
        loadFastPathPolicy: loadFastPathPolicy_3
      } = await import("B:/~BUN/root/chunk-tk9jt1c9.js"),
      r = await loadFastPathPolicy_3(envPin);
    if (r) process.stderr.write(`${r}
`);
    let {
        sessionFactsRestored: sessionFactsRestored
      } = await import("B:/~BUN/root/chunk-p79m6d11.js"),
      h = await sessionFactsRestored(envPin);
    if (h !== null) {
      let {
          endsInARowOf: endsInARowOf,
          workerEndingOf: workerEndingOf
        } = await import("B:/~BUN/root/chunk-rerds9x2.js"),
        n = workerEndingOf(h, endsInARowOf(t[2]));
      process.stderr.write(n.said), process.exit(n.code);
    }
    let {
      runDaemonWorker: runDaemonWorker
    } = await import("B:/~BUN/root/chunk-akhc5y2x.js");
    await runDaemonWorker(t[1], envPin);
    return;
  }
  if (t[0] === "--bg-pty-host") {
    let {
      ensureFastPathSettingsLoaded: ensureFastPathSettingsLoaded
    } = await import("B:/~BUN/root/chunk-tk9jt1c9.js");
    try {
      await ensureFastPathSettingsLoaded(envPin);
    } catch (error) {
      process.stderr.write(`ptyHost: settings bootstrap threw (continuing; supervisor already gated): ${error?.stack ?? String(error)}
`);
    }
    let {
      runPtyHost: runPtyHost
    } = await import("B:/~BUN/root/chunk-qn00rwqv.js");
    await runPtyHost(t.slice(1));
    return;
  }
  if (t[0] === "--bg-spare") {
    let {
      ensureFastPathSettingsLoaded: ensureFastPathSettingsLoaded_2
    } = await import("B:/~BUN/root/chunk-tk9jt1c9.js");
    await ensureFastPathSettingsLoaded_2(void 0);
    let {
      runBgSpare: runBgSpare
    } = await import("B:/~BUN/root/chunk-bap795yv.js");
    await runBgSpare(t.slice(1));
    return;
  }
  if (t[0] === "--preload") {
    let {
      ensureFastPathSettingsLoaded: ensureFastPathSettingsLoaded_3
    } = await import("B:/~BUN/root/chunk-tk9jt1c9.js");
    await ensureFastPathSettingsLoaded_3(void 0);
    let {
      runPreload: runPreload
    } = await import("B:/~BUN/root/chunk-tyw0g45b.js");
    await runPreload(t.slice(1));
    return;
  }
  if (t[0] === "remote-control" || t[0] === "rc" || t[0] === "remote" || t[0] === "sync" || t[0] === "bridge") {
    profileCheckpoint("cli_bridge_path");
    let [{
      loadFastPathPolicy: loadFastPathPolicy_4
    }, {
      markNoDialogLaunch: markNoDialogLaunch
    }] = await Promise.all([import("B:/~BUN/root/chunk-tk9jt1c9.js"), import("B:/~BUN/root/chunk-vtqz71wt.js")]);
    markNoDialogLaunch();
    {
      let i = await loadFastPathPolicy_4(envPin);
      if (i) {
        let {
          exitWithError: exitWithError_2
        } = await import("B:/~BUN/root/chunk-tv1g9qyb.js");
        exitWithError_2(i);
      }
    }
    if (t.slice(1).some(item => item === "--help" || item === "-h")) {
      let {
        printRemoteControlHelp: printRemoteControlHelp
      } = await import("B:/~BUN/root/chunk-jw43q6ch.js");
      await printRemoteControlHelp();
      return;
    }
    let {
        sessionFactsRestored: sessionFactsRestored_2
      } = await import("B:/~BUN/root/chunk-p79m6d11.js"),
      h = await sessionFactsRestored_2(envPin);
    if (h !== null) {
      let {
        exitWithError: exitWithError_3
      } = await import("B:/~BUN/root/chunk-tv1g9qyb.js");
      exitWithError_3(h.reason);
    }
    let {
        refuseRemoteControlLocally: refuseRemoteControlLocally,
        refuseRemoteControlIneligible: refuseRemoteControlIneligible,
        startRemoteControl: startRemoteControl
      } = await import("B:/~BUN/root/chunk-c4ajw5e0.js"),
      n = await refuseRemoteControlLocally(),
      [{
        pinStorageV5: pinStorageV5
      }, {
        seedInstallIDs: seedInstallIDs
      }] = await Promise.all([import("B:/~BUN/root/chunk-j8xzt9mp.js"), import("B:/~BUN/root/chunk-9tp6zqq1.js")]),
      storageV5 = pinStorageV5(envPin);
    if (X() && storageV5 !== void 0) {
      let [{
          credentialsStoreFor: credentialsStoreFor
        }, {
          setGrowthBookCredentials: setGrowthBookCredentials,
          setGrowthBookStorageBackend: setGrowthBookStorageBackend
        }, {
          composePolicyLimitsClient: composePolicyLimitsClient,
          primePolicyLimitsCache: primePolicyLimitsCache
        }, {
          primeFastPathCredentials: primeFastPathCredentials
        }] = await Promise.all([import("B:/~BUN/root/chunk-kkxrcrpx.js"), import("B:/~BUN/root/chunk-hckxtg11.js"), import("B:/~BUN/root/chunk-4gnegddh.js"), import("B:/~BUN/root/chunk-dcvh94gr.js")]),
        credentials = credentialsStoreFor(storageV5);
      setGrowthBookCredentials(credentials), setGrowthBookStorageBackend(storageV5), composePolicyLimitsClient({
        storageV5: storageV5,
        credentials: credentials
      }), await primeFastPathCredentials(credentials), await primePolicyLimitsCache(storageV5), await seedInstallIDs(storageV5);
    }
    let [{
      initSinks: initSinks
    }, {
      initialize1PEventLogging: initialize1PEventLogging
    }, {
      credentialsStoreFor: credentialsStoreFor_2
    }, {
      initDefaultDebugLog: initDefaultDebugLog
    }, {
      watchGlobalConfigThroughStorage: watchGlobalConfigThroughStorage
    }] = await Promise.all([import("B:/~BUN/root/chunk-j4nswqbd.js"), import("B:/~BUN/root/chunk-atzsemwq.js"), import("B:/~BUN/root/chunk-kkxrcrpx.js"), import("B:/~BUN/root/chunk-h3v718dc.js"), import("B:/~BUN/root/chunk-9tp6zqq1.js")]);
    initSinks();
    let S = credentialsStoreFor_2(storageV5);
    initialize1PEventLogging(storageV5);
    let _ = await refuseRemoteControlIneligible(n);
    if (X() && storageV5 !== void 0) initDefaultDebugLog({
      storageV5: storageV5
    }), watchGlobalConfigThroughStorage(storageV5);
    await startRemoteControl(_, t.slice(1), storageV5, S);
    return;
  }
  {
    let e = Bqi(t);
    if (e !== null) {
      profileCheckpoint("cli_daemon_path");
      let {
        ensureFastPathSettingsLoaded: ensureFastPathSettingsLoaded_4
      } = await import("B:/~BUN/root/chunk-tk9jt1c9.js");
      await ensureFastPathSettingsLoaded_4(envPin);
      let {
        initializeErrorLogSink: initializeErrorLogSink
      } = await import("B:/~BUN/root/chunk-q47tk7v6.js");
      initializeErrorLogSink();
      let {
        daemonMain: daemonMain
      } = await import("B:/~BUN/root/chunk-9h7yzm5r.js");
      await daemonMain(e, envPin);
      return;
    }
  }
  let N = process.env.CLAUDE_CODE_SESSION_KIND === "bg",
    O = t.some(item => item === "logs" || item === "attach" || item === "stop" || item === "kill" || item === "respawn" || item === "rm") ? import.meta.require("B:/~BUN/root/chunk-0kcks6tw.js").backgroundSessionVerbIndex(t, {
      behindRootOptions: !N
    }) : -1,
    u = O === -1 ? [] : t.slice(O),
    he = t.includes("--bg") || t.includes("--background") ? import.meta.require("B:/~BUN/root/chunk-0kcks6tw.js").hasBackgroundFlag(t) : !1,
    Z = !1;
  if (!Z && (u.length > 0 || he || !1)) {
    if (profileCheckpoint("cli_bg_path"), we(t)) console.error(u.length > 0 ? `--desktop can't be combined with \`claude ${u[0]}\`.` : "--desktop opens the Claude Desktop app and can't run in the background (`--bg`, `--background`, `--routine`)."), process.exit(1);
    if (O > 0) {
      let [{
          eagerParseCliFlag: eagerParseCliFlag
        }, {
          loadSettingsFromFlag: loadSettingsFromFlag,
          loadManagedSettingsFromFlag: loadManagedSettingsFromFlag
        }] = await Promise.all([import("B:/~BUN/root/chunk-0kcks6tw.js"), import("B:/~BUN/root/chunk-4nje0jet.js")]),
        p = t.slice(0, O),
        A = eagerParseCliFlag("--settings", p);
      if (A) loadSettingsFromFlag(A);
      let y = eagerParseCliFlag("--managed-settings", p);
      if (y) loadManagedSettingsFromFlag(y);
    }
    let [{
        loadFastPathPolicy: loadFastPathPolicy_5
      }, {
        setIsInteractive: setIsInteractive
      }, {
        allowFlagFetchOnOwnCredential: allowFlagFetchOnOwnCredential,
        getFeatureValue_CACHED_MAY_BE_STALE: getFeatureValue_CACHED_MAY_BE_STALE,
        hasWorkspaceTrust: hasWorkspaceTrust
      }, {
        checkHasTrustDialogAccepted: checkHasTrustDialogAccepted
      }] = await Promise.all([import("B:/~BUN/root/chunk-tk9jt1c9.js"), import("B:/~BUN/root/chunk-vtqz71wt.js"), import("B:/~BUN/root/chunk-hckxtg11.js"), import("B:/~BUN/root/chunk-9tp6zqq1.js")]),
      {
        sessionFactsRestored: sessionFactsRestored_3
      } = await import("B:/~BUN/root/chunk-p79m6d11.js"),
      n = null,
      T = ["logs", "stop", "kill", "rm"].includes(u[0] ?? "");
    {
      let _ = await loadFastPathPolicy_5(envPin);
      if (_) if (T) process.stderr.write(`${_}
`);else {
        let {
          exitWithError: exitWithError_4
        } = await import("B:/~BUN/root/chunk-tv1g9qyb.js");
        exitWithError_4(_);
      }
      if (process.stdout.isTTY && !checkHasTrustDialogAccepted() && getFeatureValue_CACHED_MAY_BE_STALE("tengu_sable_orrery", !0)) setIsInteractive(!0);
      if (n = await sessionFactsRestored_3(envPin), n !== null && !T) {
        let {
          exitWithError: exitWithError_5
        } = await import("B:/~BUN/root/chunk-tv1g9qyb.js");
        exitWithError_5(n.reason);
      }
    }
    let M = n === null;
    if (n !== null) process.stderr.write(`${n.reason}
`);
    let c = await import("B:/~BUN/root/chunk-1346hdbm.js");
    if (await c.ensureFleetGateHydrated({
      kickGrowthBook: M && !T && (hasWorkspaceTrust() || allowFlagFetchOnOwnCredential())
    }), !c.isAgentsFleetEnabled()) {
      let _ = u[0] ?? t.find(item => item === "--bg" || item === "--background" || item === "--routine" || item.startsWith("--routine=")) ?? "--bg";
      return c.fleetGateRejected(_);
    }
    let [E, {
        pinStorageV5: pinStorageV5_2
      }, {
        initDefaultDebugLog: initDefaultDebugLog_2
      }, {
        seedInstallIDs: seedInstallIDs_2,
        watchGlobalConfigThroughStorage: watchGlobalConfigThroughStorage_2
      }] = await Promise.all([import("B:/~BUN/root/chunk-7rrwsgz6.js"), import("B:/~BUN/root/chunk-j8xzt9mp.js"), import("B:/~BUN/root/chunk-h3v718dc.js"), import("B:/~BUN/root/chunk-9tp6zqq1.js")]),
      storageV5_2 = pinStorageV5_2(envPin);
    if (X() && storageV5_2 !== void 0) {
      initDefaultDebugLog_2({
        storageV5: storageV5_2
      }), watchGlobalConfigThroughStorage_2(storageV5_2);
      let [{
          credentialsStoreFor: credentialsStoreFor_3
        }, {
          setGrowthBookCredentials: setGrowthBookCredentials_2,
          setGrowthBookStorageBackend: setGrowthBookStorageBackend_2
        }, {
          composePolicyLimitsClient: composePolicyLimitsClient_2,
          primePolicyLimitsCache: primePolicyLimitsCache_2
        }, {
          primeFastPathCredentials: primeFastPathCredentials_2
        }] = await Promise.all([import("B:/~BUN/root/chunk-kkxrcrpx.js"), import("B:/~BUN/root/chunk-hckxtg11.js"), import("B:/~BUN/root/chunk-4gnegddh.js"), import("B:/~BUN/root/chunk-dcvh94gr.js")]),
        credentials_2 = credentialsStoreFor_3(storageV5_2);
      setGrowthBookCredentials_2(credentials_2), setGrowthBookStorageBackend_2(storageV5_2), composePolicyLimitsClient_2({
        storageV5: storageV5_2,
        credentials: credentials_2
      }), await primeFastPathCredentials_2(credentials_2), await primePolicyLimitsCache_2(storageV5_2), await seedInstallIDs_2(storageV5_2);
    }
    switch (u[0]) {
      case "logs":
      case "attach":
      case "stop":
      case "kill":
      case "respawn":
      case "rm":
        {
          let [{
            initializeAnalyticsSink: initializeAnalyticsSink
          }, {
            initialize1PEventLogging: initialize1PEventLogging_2,
            shutdown1PEventLogging: shutdown1PEventLogging
          }, {
            shutdownDatadog: shutdownDatadog
          }, {
            sleep: sleep
          }, {
            waitForOAuthRefreshBeforeExit: waitForOAuthRefreshBeforeExit
          }] = await Promise.all([import("B:/~BUN/root/chunk-7ycrq79c.js"), import("B:/~BUN/root/chunk-atzsemwq.js"), import("B:/~BUN/root/chunk-52pm1yy5.js"), import("B:/~BUN/root/chunk-ce9va9r2.js"), import("B:/~BUN/root/chunk-ejqqrmkk.js")]);
          if (M) initializeAnalyticsSink(), initialize1PEventLogging_2(storageV5_2);
          if (u[0] === "logs") await E.logsHandler(u[1], storageV5_2);else if (u[0] === "attach") await E.attachHandler(u[1], storageV5_2);else if (u[0] === "respawn") await E.respawnHandler(u[1], storageV5_2);else if (u[0] === "rm") await E.rmHandler(u[1], storageV5_2, void 0, M);else await E.stopHandler(u[1], storageV5_2, M);
          return await Promise.race([Promise.all([shutdown1PEventLogging(), shutdownDatadog()]), sleep(500, void 0, {
            unref: !0
          })]).catch(() => {}), await waitForOAuthRefreshBeforeExit(), process.exit(process.exitCode ?? 0);
        }
      default:
        {
          let [{
            initializeAnalyticsSink: initializeAnalyticsSink_2
          }, {
            initialize1PEventLogging: initialize1PEventLogging_3,
            shutdown1PEventLogging: shutdown1PEventLogging_2
          }, {
            shutdownDatadog: shutdownDatadog_2
          }, {
            logEvent: logEvent
          }, {
            sleep: sleep_2
          }, {
            waitForOAuthRefreshBeforeExit: waitForOAuthRefreshBeforeExit_2
          }] = await Promise.all([import("B:/~BUN/root/chunk-7ycrq79c.js"), import("B:/~BUN/root/chunk-atzsemwq.js"), import("B:/~BUN/root/chunk-52pm1yy5.js"), import("B:/~BUN/root/chunk-tbhz6sq9.js"), import("B:/~BUN/root/chunk-ce9va9r2.js"), import("B:/~BUN/root/chunk-ejqqrmkk.js")]);
          initializeAnalyticsSink_2(), initialize1PEventLogging_3(storageV5_2), logEvent("tengu_background", {
            via_flag: !0,
            via: b("flag")
          }), await E.handleBgFlag(t, storageV5_2), await Promise.race([Promise.all([shutdown1PEventLogging_2(), shutdownDatadog_2()]), sleep_2(500, void 0, {
            unref: !0
          })]).catch(() => {}), await waitForOAuthRefreshBeforeExit_2(), process.exit(process.exitCode ?? 0);
        }
    }
    return;
  }
  let w = sHt(t);
  w.config.restricted ||= ["1", "true", "yes", "on"].includes((process.env.CLAUDE_CODE_RESTRICTED ?? "").toLowerCase().trim());
  let {
      dispatchDefaults: dispatchDefaults,
      rest: rest_2
    } = Xe(w.rest),
    Q = w.hasAgentsPositional && fe(rest_2),
    oe;
  if ((Q || (fe(t) || oe !== void 0) && process.stdin.isTTY) && process.stdout.isTTY) {
    let {
      startCapturingEarlyInput: startCapturingEarlyInput,
      consumeEarlyInput: consumeEarlyInput
    } = await import("B:/~BUN/root/chunk-xrkd1afs.js");
    startCapturingEarlyInput();
    let [{
      startMdmRawRead: startMdmRawRead
    }, {
      startKeychainPrefetch: startKeychainPrefetch
    }] = await Promise.all([import("B:/~BUN/root/chunk-40tbeyh5.js"), import("B:/~BUN/root/chunk-kkrj96gm.js")]);
    startMdmRawRead(), startKeychainPrefetch();
    let {
        enableConfigs: enableConfigs,
        getGlobalConfig: getGlobalConfig,
        seedInstallIDs: seedInstallIDs_3
      } = await import("B:/~BUN/root/chunk-9tp6zqq1.js"),
      n = !1,
      defaultToAgentsView = !1,
      M = !1;
    try {
      await enableConfigs(X() ? envPin?.backend : void 0), defaultToAgentsView = getGlobalConfig().defaultToAgentsView === !0, n = Q || defaultToAgentsView && oe === void 0;
    } catch {}
    if (n) {
      if (w.config.settings || w.config.managedSettings) {
        let {
          loadSettingsFromFlag: loadSettingsFromFlag_2,
          loadManagedSettingsFromFlag: loadManagedSettingsFromFlag_2
        } = await import("B:/~BUN/root/chunk-4nje0jet.js");
        if (w.config.settings) loadSettingsFromFlag_2(w.config.settings);
        if (w.config.managedSettings) loadManagedSettingsFromFlag_2(w.config.managedSettings);
      }
      if (w.config.pluginDir.length > 0 || w.config.pluginDirNoMcp.length > 0) {
        let [{
          setInlinePlugins: setInlinePlugins,
          setInlinePluginsNoMcp: setInlinePluginsNoMcp
        }, {
          clearPluginCache: clearPluginCache
        }] = await Promise.all([import("B:/~BUN/root/chunk-vtqz71wt.js"), import("B:/~BUN/root/chunk-0vsx8gj5.js")]);
        setInlinePlugins(w.config.pluginDir), setInlinePluginsNoMcp(w.config.pluginDirNoMcp), clearPluginCache("claude agents --plugin-dir");
      }
      let {
          loadFastPathPolicy: loadFastPathPolicy_6
        } = await import("B:/~BUN/root/chunk-tk9jt1c9.js"),
        E = await loadFastPathPolicy_6(envPin);
      if (E) {
        let {
          exitWithError: exitWithError_6
        } = await import("B:/~BUN/root/chunk-tv1g9qyb.js");
        exitWithError_6(E);
      }
      let L;
      if (process.env.CLAUDE_CODE_PLUGIN_DIRS?.trim()) {
        let [{
            mergePluginDirs: mergePluginDirs,
            PLUGIN_DIRS_ENV_RECOVERY_HINT: l,
            PLUGIN_DIRS_ENV_VAR: p,
            settlePluginDirsEnv: settlePluginDirsEnv,
            withoutPluginDirs: withoutPluginDirs
          }, {
            setInlinePlugins: setInlinePlugins_2
          }, {
            clearPluginCache: clearPluginCache_2
          }] = await Promise.all([import("B:/~BUN/root/chunk-ezm1a7v3.js"), import("B:/~BUN/root/chunk-vtqz71wt.js"), import("B:/~BUN/root/chunk-0vsx8gj5.js")]),
          ee = withoutPluginDirs(settlePluginDirsEnv(), w.config.pluginDirNoMcp);
        if (ee.length > 0) L = {
          name: p,
          hint: l
        }, setInlinePlugins_2(mergePluginDirs(w.config.pluginDir, ee)), clearPluginCache_2("claude agents CLAUDE_CODE_PLUGIN_DIRS");
      }
      {
        let {
          areSideloadFlagsDisabledByPolicy: areSideloadFlagsDisabledByPolicy,
          sideloadFlagsBlockedMessage: sideloadFlagsBlockedMessage
        } = await import("B:/~BUN/root/chunk-72r15b6s.js");
        if (areSideloadFlagsDisabledByPolicy()) {
          let p = [];
          if (w.config.pluginDir.length > 0) p.push("--plugin-dir");
          if (w.config.pluginDirNoMcp.length > 0) p.push("--plugin-dir-no-mcp");
          if (L) p.push(L.name);
          if (p.length > 0) {
            let {
              exitWithError: exitWithError_7
            } = await import("B:/~BUN/root/chunk-tv1g9qyb.js");
            exitWithError_7(L ? `${sideloadFlagsBlockedMessage(p)} ${L.hint}` : sideloadFlagsBlockedMessage(p));
          }
        }
      }
      let {
        isAgentsFleetEnabled: isAgentsFleetEnabled,
        ensureFleetGateHydrated: ensureFleetGateHydrated,
        fleetGateRejected: fleetGateRejected,
        consumeAgentViewRelaunchMarker: consumeAgentViewRelaunchMarker
      } = await import("B:/~BUN/root/chunk-1346hdbm.js");
      await ensureFleetGateHydrated({
        kickGrowthBook: !1
      });
      let _ = !1;
      if (n && isAgentsFleetEnabled() && !_) {
        let {
            sessionFactsRestored: sessionFactsRestored_4
          } = await import("B:/~BUN/root/chunk-p79m6d11.js"),
          l = await sessionFactsRestored_4(envPin);
        if (l !== null) {
          let {
            exitWithError: exitWithError_8
          } = await import("B:/~BUN/root/chunk-tv1g9qyb.js");
          exitWithError_8(l.reason);
        }
        let [{
            applyFleetViewHostWindowsEnv: applyFleetViewHostWindowsEnv
          }, {
            createRoot: createRoot
          }, {
            getBaseRenderOptions: getBaseRenderOptions
          }, {
            resolve: resolve
          }, {
            getRootSession: getRootSession,
            setCliConfigBeyondSessionState: setCliConfigBeyondSessionState,
            setCliSessionConfigCarried: setCliSessionConfigCarried,
            setIsInteractive: setIsInteractive_2,
            setRestrictedSession: setRestrictedSession,
            setSessionStartType: setSessionStartType
          }, {
            cliCarriesConfigBeyondSessionState: cliCarriesConfigBeyondSessionState,
            cliCarriesSessionConfig: cliCarriesSessionConfig
          }, {
            pinStorageV5: pinStorageV5_3
          }, {
            appliedSettingSourcesFlagValue: appliedSettingSourcesFlagValue
          }] = await Promise.all([import("B:/~BUN/root/chunk-v0fvtvk9.js"), import("B:/~BUN/root/chunk-r3j8tvf5.js"), import("B:/~BUN/root/chunk-jrfg7n4y.js"), import("path"), import("B:/~BUN/root/chunk-vtqz71wt.js"), import("B:/~BUN/root/chunk-rh3fsc6s.js"), import("B:/~BUN/root/chunk-j8xzt9mp.js"), import("B:/~BUN/root/chunk-jy979t8p.js")]),
          re = {
            ...w.config,
            settingSources: appliedSettingSourcesFlagValue()
          },
          storageV5_3 = pinStorageV5_3(envPin),
          credentials_3;
        if (X() && storageV5_3 !== void 0) {
          let [{
            credentialsStoreFor: credentialsStoreFor_4
          }, {
            setGrowthBookCredentials: setGrowthBookCredentials_3,
            setGrowthBookStorageBackend: setGrowthBookStorageBackend_3
          }, {
            primeFastPathCredentials: primeFastPathCredentials_3
          }] = await Promise.all([import("B:/~BUN/root/chunk-kkxrcrpx.js"), import("B:/~BUN/root/chunk-hckxtg11.js"), import("B:/~BUN/root/chunk-dcvh94gr.js")]);
          credentials_3 = credentialsStoreFor_4(storageV5_3), setGrowthBookCredentials_3(credentials_3), setGrowthBookStorageBackend_3(storageV5_3), await primeFastPathCredentials_3(credentials_3), await seedInstallIDs_3(storageV5_3);
        }
        import("B:/~BUN/root/chunk-0ej7a76j.js").then(({
          resolveSetting: resolveSetting
        }) => {
          let {
            value: value
          } = resolveSetting("theme", "dark");
          if (value.startsWith("custom:")) import("B:/~BUN/root/chunk-16adcdnh.js").then(k => k.loadCustomThemes(storageV5_3));
        });
        let relaunch = consumeAgentViewRelaunchMarker();
        setIsInteractive_2(!0), setCliSessionConfigCarried(cliCarriesSessionConfig({
          ...re,
          ...dispatchDefaults
        })), setCliConfigBeyondSessionState(cliCarriesConfigBeyondSessionState({
          ...re,
          ...dispatchDefaults
        })), setRestrictedSession(w.config.restricted), setSessionStartType("agents_view");
        let ae = () => {};
        process.on("unhandledRejection", ae);
        let ne = Promise.resolve(),
          ce = () => {},
          promise = new Promise(R => {
            ce = R;
          });
        setImmediate(async () => {
          if (X() && storageV5_3 !== void 0) try {
            let [{
              credentialsStoreFor: credentialsStoreFor_5
            }, {
              composePolicyLimitsClient: composePolicyLimitsClient_3,
              primePolicyLimitsCache: primePolicyLimitsCache_3
            }] = await Promise.all([import("B:/~BUN/root/chunk-kkxrcrpx.js"), import("B:/~BUN/root/chunk-4gnegddh.js")]);
            composePolicyLimitsClient_3({
              storageV5: storageV5_3,
              credentials: credentialsStoreFor_5(storageV5_3)
            }), await primePolicyLimitsCache_3(storageV5_3);
          } catch (error) {
            import("B:/~BUN/root/chunk-h3v718dc.js").then(({
              logForDebugging: logForDebugging
            }) => logForDebugging(`Policy limits: start-up composition on the agents path failed: ${error instanceof Error ? error.message : String(error)}`, {
              level: "warn"
            }));
          }
          ne = Promise.all([import("B:/~BUN/root/chunk-yk2pgkrt.js"), import("B:/~BUN/root/chunk-q47tk7v6.js"), import("B:/~BUN/root/chunk-7ycrq79c.js"), import("B:/~BUN/root/chunk-atzsemwq.js"), import("B:/~BUN/root/chunk-tbhz6sq9.js"), import("B:/~BUN/root/chunk-4b32hs9e.js"), import("B:/~BUN/root/chunk-hckxtg11.js"), import("B:/~BUN/root/chunk-myw2sgfk.js"), import("B:/~BUN/root/chunk-9tp6zqq1.js"), import("B:/~BUN/root/chunk-gmwfm73y.js"), import("B:/~BUN/root/chunk-7he8bzc1.js"), import("B:/~BUN/root/chunk-h3v718dc.js")]).then(([{
            setupGracefulShutdown: setupGracefulShutdown
          }, {
            initializeErrorLogSink: initializeErrorLogSink_2
          }, {
            initializeAnalyticsSink: initializeAnalyticsSink_3
          }, {
            initialize1PEventLogging: initialize1PEventLogging_4
          }, {
            logEvent: logEvent_2
          }, {
            captureTeammateModeSnapshotIfEnabled: captureTeammateModeSnapshotIfEnabled
          }, {
            initializeGrowthBook: initializeGrowthBook
          }, {
            initializeTelemetryAfterTrust: initializeTelemetryAfterTrust
          }, {
            checkHasTrustDialogAccepted: ue,
            watchGlobalConfigThroughStorage: watchGlobalConfigThroughStorage_3
          }, {
            applyConfigEnvironmentVariables: applyConfigEnvironmentVariables
          }, {
            setRepoDetectionGuards: setRepoDetectionGuards
          }, {
            initDefaultDebugLog: initDefaultDebugLog_3
          }]) => {
            if (setupGracefulShutdown({
              storageV5: storageV5_3,
              credentials: credentials_3
            }), setRepoDetectionGuards({
              trustProbe: ue
            }), initializeGrowthBook().catch(() => {}), initializeErrorLogSink_2(), initializeAnalyticsSink_3(), initialize1PEventLogging_4(storageV5_3), X() && storageV5_3 !== void 0) initDefaultDebugLog_3({
              storageV5: storageV5_3
            }), watchGlobalConfigThroughStorage_3(storageV5_3);
            return promise.then(() => {
              if (ue()) applyConfigEnvironmentVariables(), initializeTelemetryAfterTrust(storageV5_3);
            }), logEvent_2("tengu_fleetview", {
              defaultToAgentsView: defaultToAgentsView,
              relaunch: relaunch
            }), captureTeammateModeSnapshotIfEnabled();
          }).finally(() => process.off("unhandledRejection", ae));
          let R = () => void import("B:/~BUN/root/chunk-v44hq2mg.js").then(g => g.startBackgroundHousekeeping(getRootSession().host, storageV5_3));
          Promise.all([import("B:/~BUN/root/chunk-hckxtg11.js"), import("B:/~BUN/root/chunk-9tp6zqq1.js")]).then(([{
            getFeatureValue_CACHED_MAY_BE_STALE: getFeatureValue_CACHED_MAY_BE_STALE_2
          }, {
            checkHasTrustDialogAccepted: checkHasTrustDialogAccepted_2
          }]) => {
            if (getFeatureValue_CACHED_MAY_BE_STALE_2("tengu_noble_wozniak", !0)) promise.then(() => {
              if (checkHasTrustDialogAccepted_2()) R();
            });else R();
          });
        }), consumeEarlyInput(), applyFleetViewHostWindowsEnv();
        let te = dispatchDefaults?.permissionMode === "bypassPermissions" || dispatchDefaults?.allowBypass ? await import("B:/~BUN/root/chunk-c27akw5c.js") : void 0;
        te?.refuseBypassUnderRoot(dispatchDefaults);
        let dispatchDefaults_2 = te?.applyBypassPolicyGate(dispatchDefaults) ?? dispatchDefaults,
          ie = await createRoot(getBaseRenderOptions(!1)),
          {
            ensureAgentsWorkspaceTrust: ensureAgentsWorkspaceTrust,
            agentsTrustDecision: agentsTrustDecision
          } = await import("B:/~BUN/root/chunk-s4c48e57.js");
        if (await ensureAgentsWorkspaceTrust(ie, agentsTrustDecision(), storageV5_3), ce(), te) await te.ensureAgentsBypassConsent(ie, dispatchDefaults_2, storageV5_3);
        let de = !0;
        try {
          de = import.meta.require("B:/~BUN/root/chunk-w3mgyxqy.js").orgConfigGateFlagOnHand(getGlobalConfig(), process.env.CLAUDE_INTERNAL_FC_OVERRIDES);
        } catch {}
        if (de && (await import("B:/~BUN/root/chunk-289wqvyd.js")).orgConfigGateFlagCouldArm()) {
          let {
            enforceOrgConfigGateOnLaunchLane: enforceOrgConfigGateOnLaunchLane
          } = await import("B:/~BUN/root/chunk-td3e6x4z.js");
          await enforceOrgConfigGateOnLaunchLane({
            showBlockedScreen: () => import("B:/~BUN/root/chunk-wtw7wza8.js").then(g => g.showOrgConfigBlockedScreen, () => {
              return;
            }),
            printMessage: async g => {
              let {
                endInkWithError: endInkWithError
              } = await import("B:/~BUN/root/chunk-bcz5xc5y.js");
              await endInkWithError(ie, g);
            }
          });
        }
        let ge = await import("B:/~BUN/root/chunk-1346hdbm.js"),
          Ue = {
            cwdFilter: w.cwdFilter,
            dispatchExtraArgs: vbe(iHt(re, resolve)),
            dispatchDefaults: dispatchDefaults_2,
            entryChannel: ge.isListReturnRelaunch() ? "list_return" : Q ? "cli_agents" : "default_home",
            storageV5: storageV5_3,
            credentials: credentials_3
          };
        {
          let {
            mountFleetViewWithComposerBack: mountFleetViewWithComposerBack
          } = await import("B:/~BUN/root/chunk-1kne74ys.js");
          await mountFleetViewWithComposerBack(ie, Ue);
        }
        await ne.catch(() => {});
        let {
          gracefulShutdown: gracefulShutdown
        } = await import("B:/~BUN/root/chunk-yk2pgkrt.js");
        await gracefulShutdown(0, "other", {
          suppressResumeHint: !0
        });
        return;
      }
      if (Q && !_) return fleetGateRejected("claude agents");
    }
  }
  if (t[0] === "self-hosted-runner") {
    profileCheckpoint("cli_self_hosted_runner_path");
    let e = t[1];
    if (e === "orchestrator") {
      let {
        selfHostedRunnerOrchestratorMain: selfHostedRunnerOrchestratorMain
      } = await import("B:/~BUN/root/chunk-5knre9mw.js");
      await selfHostedRunnerOrchestratorMain(t.slice(2));
      return;
    }
    if (e === "setup") {
      let {
        selfHostedRunnerSetupMain: selfHostedRunnerSetupMain
      } = await import("B:/~BUN/root/chunk-w2zmp52v.js");
      await selfHostedRunnerSetupMain(t.slice(2), envPin);
      return;
    }
    if (e === "doctor") {
      let {
        selfHostedRunnerDoctorMain: selfHostedRunnerDoctorMain
      } = await import("B:/~BUN/root/chunk-6fwtnakv.js");
      await selfHostedRunnerDoctorMain(t.slice(2), envPin);
      return;
    }
    if (e === "code-sign") {
      let {
        selfHostedRunnerCodeSignMain: selfHostedRunnerCodeSignMain
      } = await import("B:/~BUN/root/chunk-1d80q7gz.js");
      await selfHostedRunnerCodeSignMain(t.slice(2));
      return;
    }
    if (e === "work-look") {
      let {
        selfHostedRunnerWorkLookMain: selfHostedRunnerWorkLookMain
      } = await import("B:/~BUN/root/chunk-xzz62ty6.js");
      await selfHostedRunnerWorkLookMain(t.slice(2));
      return;
    }
    if (e === "decode-token") {
      let {
        selfHostedRunnerDecodeTokenMain: selfHostedRunnerDecodeTokenMain
      } = await import("B:/~BUN/root/chunk-xvt12yjr.js");
      await selfHostedRunnerDecodeTokenMain(t.slice(2));
      return;
    }
    let {
      selfHostedRunnerMain: selfHostedRunnerMain
    } = await import("B:/~BUN/root/chunk-dszbd965.js");
    await selfHostedRunnerMain(t.slice(1));
    return;
  }
  let Se = t.includes("--tmux") || t.includes("--tmux=classic");
  if (!Z && Se && (t.includes("-w") || t.includes("--worktree") || t.some(item => item.startsWith("--worktree=")))) {
    if (profileCheckpoint("cli_tmux_worktree_fast_path"), we(t)) console.error("--desktop only opens the Claude Desktop app; it can't be combined with `--worktree` or `--tmux`."), process.exit(1);
    let {
      eagerLoadSettings: eagerLoadSettings
    } = await import("B:/~BUN/root/chunk-4nje0jet.js");
    eagerLoadSettings();
    let {
      loadFastPathPolicy: loadFastPathPolicy_7
    } = await import("B:/~BUN/root/chunk-tk9jt1c9.js");
    {
      let P = await loadFastPathPolicy_7(envPin);
      if (P) {
        let {
          exitWithError: exitWithError_9
        } = await import("B:/~BUN/root/chunk-tv1g9qyb.js");
        exitWithError_9(P);
      }
    }
    let {
      configureFastPathGlobalAgents: configureFastPathGlobalAgents
    } = await import("B:/~BUN/root/chunk-nrx0rz6g.js");
    configureFastPathGlobalAgents();
    let {
      isWorktreeModeEnabled: isWorktreeModeEnabled
    } = await import("B:/~BUN/root/chunk-n636zdjs.js");
    if (isWorktreeModeEnabled()) {
      let [{
          execIntoTmuxWorktree: execIntoTmuxWorktree
        }, {
          pinStorageV5: pinStorageV5_4
        }, {
          initDefaultDebugLog: initDefaultDebugLog_4
        }] = await Promise.all([import("B:/~BUN/root/chunk-y66hvm3r.js"), import("B:/~BUN/root/chunk-j8xzt9mp.js"), import("B:/~BUN/root/chunk-h3v718dc.js")]),
        storageV5_4 = pinStorageV5_4(envPin),
        T;
      if (X() && storageV5_4 !== void 0) {
        initDefaultDebugLog_4({
          storageV5: storageV5_4
        });
        let [{
          credentialsStoreFor: credentialsStoreFor_6
        }, {
          setGrowthBookCredentials: setGrowthBookCredentials_4,
          setGrowthBookStorageBackend: setGrowthBookStorageBackend_4
        }, {
          primeFastPathCredentials: primeFastPathCredentials_4
        }] = await Promise.all([import("B:/~BUN/root/chunk-kkxrcrpx.js"), import("B:/~BUN/root/chunk-hckxtg11.js"), import("B:/~BUN/root/chunk-dcvh94gr.js")]);
        T = credentialsStoreFor_6(storageV5_4), setGrowthBookCredentials_4(T), setGrowthBookStorageBackend_4(storageV5_4), await primeFastPathCredentials_4(T);
        let {
          seedInstallIDs: seedInstallIDs_4
        } = await import("B:/~BUN/root/chunk-9tp6zqq1.js");
        await seedInstallIDs_4(storageV5_4);
      }
      let M = await execIntoTmuxWorktree(t, storageV5_4, T);
      if (M.handled) return;
      let {
        exitWithError: exitWithError_10
      } = await import("B:/~BUN/root/chunk-tv1g9qyb.js");
      exitWithError_10(M.error);
    }
  }
  if (t.length === 1 && (t[0] === "--update" || t[0] === "--upgrade")) process.argv = [process.argv[0], process.argv[1], "update"];
  let se = t.indexOf("--");
  if ((se === -1 ? t : t.slice(0, se)).includes("--bare")) process.env.CLAUDE_CODE_SIMPLE = "1";
  let {
    NON_REPL_SUBCOMMANDS: NON_REPL_SUBCOMMANDS,
    isMcpServeInvocation: isMcpServeInvocation,
    isPluginEvalInvocation: isPluginEvalInvocation,
    isRemoteControlInvocation: isRemoteControlInvocation,
    isAgentsJsonInvocation: isAgentsJsonInvocation,
    isProjectVerbInvocation: isProjectVerbInvocation
  } = await import("B:/~BUN/root/chunk-n6pnmkmv.js");
  if (!Z && !NON_REPL_SUBCOMMANDS.has(process.argv[2] ?? "") && !isMcpServeInvocation(process.argv.slice(2)) && !isPluginEvalInvocation(process.argv.slice(2)) && !isRemoteControlInvocation(process.argv.slice(2)) && !isAgentsJsonInvocation(process.argv.slice(2)) && !isProjectVerbInvocation(process.argv.slice(2))) {
    let {
      startCapturingEarlyInput: startCapturingEarlyInput_2
    } = await import("B:/~BUN/root/chunk-xrkd1afs.js");
    startCapturingEarlyInput_2();
  }
  let [{
    startMdmRawRead: startMdmRawRead_2
  }, {
    startKeychainPrefetch: startKeychainPrefetch_2
  }] = await Promise.all([import("B:/~BUN/root/chunk-40tbeyh5.js"), import("B:/~BUN/root/chunk-kkrj96gm.js")]);
  startMdmRawRead_2(), startKeychainPrefetch_2(), profileCheckpoint("cli_before_main_import"), (await import("B:/~BUN/root/chunk-9sd9b0a9.js")).configureZodForStartup();
  let {
    main: main
  } = await import("B:/~BUN/root/chunk-z4agkzpj.js");
  profileCheckpoint("cli_after_main_import"), await main(envPin, Z), profileCheckpoint("cli_after_main_complete");
}
Ze();