// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { H } from "B:/~BUN/root/chunk-dkxhwhft.js";
import { y } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { idn } from "B:/~BUN/root/chunk-w795zx57.js";
import { F6e, $6e, VX, IIo, fN } from "B:/~BUN/root/chunk-45e6pkwp.js";
import { khn } from "B:/~BUN/root/chunk-fwzy34jf.js";
function rt() {
  try {
    process.cwd();
    return;
  } catch (error) {
    let t = error instanceof Error && "code" in error && typeof error.code === "string" ? error.code : void 0;
    if (t === "ENOENT") return "The current directory no longer exists (it was deleted or moved). Start Claude Code from an existing directory.";
    return `Can't read the current directory${t ? ` (${t})` : ""}. Start Claude Code from a different directory.`;
  }
}
process.env.NoDefaultCurrentDirectoryInExePath = "1";
process.env.COREPACK_ENABLE_AUTO_PIN = "0";
khn();
if (process.env.CLAUDE_CODE_REMOTE === "true") {
  let n = process.env.NODE_OPTIONS || "";
  process.env.NODE_OPTIONS = n ? `${n} --max-old-space-size=8192` : "--max-old-space-size=8192";
}
function st(n) {
  for (let t = 0; t < n.length; t++) {
    let _ = n[t];
    if (_ === "--debug" || _ === "-d" || _ === "--debug-to-stderr" || _ === "-d2e" || _.startsWith("--debug=") || _.startsWith("--debug-file=")) continue;
    if (_ === "--debug-file" && t + 1 < n.length) {
      t++;
      continue;
    }
    return !1;
  }
  return !0;
}
function It(n) {
  let t,
    _,
    model,
    effort,
    agent,
    allowBypass,
    rest = [];
  for (let C = 0; C < n.length; C++) {
    let B = n[C],
      x = B.indexOf("="),
      [R, T] = x > 0 ? [B.slice(0, x), B.slice(x + 1)] : [B, void 0],
      N = T !== void 0 || C + 1 < n.length;
    if (R === "--dangerously-skip-permissions") t = "bypassPermissions";else if (R === "--allow-dangerously-skip-permissions") allowBypass = !0;else if (R === "--permission-mode" && N) t = T ?? n[++C];else if (R === "--inherit-permission-mode" && N) _ = T ?? n[++C];else if (R === "--model" && N) model = T ?? n[++C];else if (R === "--effort" && N) effort = T ?? n[++C];else if (R === "--agent" && N) agent = T ?? n[++C];else rest.push(B);
  }
  let permissionMode = t ?? _;
  return {
    dispatchDefaults: permissionMode || model || effort || agent || allowBypass ? {
      permissionMode: permissionMode,
      ...(!t && _ && {
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
async function Mt() {
  let n = idn(process.argv);
  if (n) console.error(n), process.exit(1);
  let t = process.argv.slice(2);
  if ((t.length === 1 || t.length === 2 && t[1] === "--verbose") && (t[0] === "--version" || t[0] === "-v" || t[0] === "-V")) {
    if (console.log(`${{
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.283",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-09-25T00:44:42Z",
      GIT_SHA: "4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION} (Claude Code)${fN()}`), t.length === 2 && {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.283",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-09-25T00:44:42Z",
      GIT_SHA: "4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.GIT_SHA) console.log(`Commit: ${{
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.283",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-09-25T00:44:42Z",
      GIT_SHA: "4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.GIT_SHA}`);
    return;
  }
  let message = rt();
  if (message) {
    console.error(message);
    let {
        writeStartupFailureResult: writeStartupFailureResult
      } = await import("B:/~BUN/root/chunk-tgfacxm5.js"),
      {
        randomUUID: randomUUID
      } = await import("crypto");
    await writeStartupFailureResult({
      sessionId: randomUUID(),
      message: message,
      reason: "cwd_unavailable"
    }), process.exit(1);
  }
  let {
    profileCheckpoint: profileCheckpoint
  } = await import("B:/~BUN/root/chunk-kepmvhg8.js");
  profileCheckpoint("cli_entry");
  let U = t[0] === "--preload" || t[0] === "--bg-spare",
    c = !U && process.env.CLAUDE_CODE_HOVER_REST ? (await import("B:/~BUN/root/chunk-zfx6skbv.js")).pinStorageV5FromEnv() : void 0;
  if (!U) setTimeout(() => {
    if (typeof Bun < "u") Bun.unsafe.setJITPolicy?.(1);
  }, 1e4).unref();
  if (t[0] === "plugin" && t[1] === "test") {
    let [{
        loadFastPathPolicy: loadFastPathPolicy
      }, o, {
        pluginTestRefusal: pluginTestRefusal
      }] = await Promise.all([import("B:/~BUN/root/chunk-pyr07cpq.js"), import("B:/~BUN/root/chunk-2zkkenra.js"), import("B:/~BUN/root/chunk-6fncmwya.js")]),
      error_2 = pluginTestRefusal({
        helperError: await loadFastPathPolicy(c),
        isRolloutOn: o.hooksModulesRolloutOn(),
        canLoadUserModules: o.canLoadUserHooksModules()
      });
    if (t[2] === "--file" && error_2 !== void 0) {
      let {
        REPORT_MARK: REPORT_MARK
      } = await import("B:/~BUN/root/chunk-aaadeqt4.js");
      process.stdout.write(`${REPORT_MARK}${JSON.stringify({
        file: t[3],
        results: [],
        error: error_2
      })}
`);
      return;
    }
    if (error_2 !== void 0) {
      process.stderr.write(`claude plugin test: ${error_2}
`), process.exitCode = 1;
      return;
    }
    let {
      pluginTestMain: pluginTestMain
    } = await import("B:/~BUN/root/chunk-39fgsset.js");
    process.exitCode = await pluginTestMain(t.slice(2));
    return;
  }
  if (process.argv[2] === "--eval-mock-server") {
    profileCheckpoint("cli_eval_mock_server_path");
    let {
      runEvalMockServer: runEvalMockServer
    } = await import("B:/~BUN/root/chunk-rd0vqx8a.js");
    try {
      await runEvalMockServer(process.argv[3], process.argv[4]);
    } catch (o) {
      console.error(`--eval-mock-server: ${o instanceof Error ? o.message : String(o)}`), process.exitCode = 1;
    }
    return;
  }
  if (process.argv[2] === "--claude-in-chrome-mcp") {
    profileCheckpoint("cli_claude_in_chrome_mcp_path");
    let {
      runClaudeInChromeMcpServer: runClaudeInChromeMcpServer
    } = await import("B:/~BUN/root/chunk-rph6tj6t.js");
    await runClaudeInChromeMcpServer(c);
    return;
  } else if (process.argv[2] === "--chrome-native-host") {
    profileCheckpoint("cli_chrome_native_host_path");
    let {
      runChromeNativeHost: runChromeNativeHost
    } = await import("B:/~BUN/root/chunk-jc203q4m.js");
    await runChromeNativeHost();
    return;
  }
  if (t[0] === "--daemon-worker") {
    let {
        loadFastPathPolicy: loadFastPathPolicy_2
      } = await import("B:/~BUN/root/chunk-pyr07cpq.js"),
      o = await loadFastPathPolicy_2(c);
    if (o) process.stderr.write(`${o}
`);
    let {
      runDaemonWorker: runDaemonWorker
    } = await import("B:/~BUN/root/chunk-jpd9wgy6.js");
    await runDaemonWorker(t[1], c);
    return;
  }
  if (t[0] === "--bg-pty-host") {
    let {
      ensureFastPathSettingsLoaded: ensureFastPathSettingsLoaded
    } = await import("B:/~BUN/root/chunk-pyr07cpq.js");
    try {
      await ensureFastPathSettingsLoaded(c);
    } catch (error) {
      process.stderr.write(`ptyHost: settings bootstrap threw (continuing; supervisor already gated): ${error?.stack ?? String(error)}
`);
    }
    let {
      runPtyHost: runPtyHost
    } = await import("B:/~BUN/root/chunk-bm1k3j6t.js");
    await runPtyHost(t.slice(1));
    return;
  }
  if (t[0] === "--bg-spare") {
    let {
      ensureFastPathSettingsLoaded: ensureFastPathSettingsLoaded_2
    } = await import("B:/~BUN/root/chunk-pyr07cpq.js");
    await ensureFastPathSettingsLoaded_2(void 0);
    let {
      runBgSpare: runBgSpare
    } = await import("B:/~BUN/root/chunk-mznqzamn.js");
    await runBgSpare(t.slice(1));
    return;
  }
  if (t[0] === "--preload") {
    let {
      ensureFastPathSettingsLoaded: ensureFastPathSettingsLoaded_3
    } = await import("B:/~BUN/root/chunk-pyr07cpq.js");
    await ensureFastPathSettingsLoaded_3(void 0);
    let {
      runPreload: runPreload
    } = await import("B:/~BUN/root/chunk-0nrksk3n.js");
    await runPreload(t.slice(1));
    return;
  }
  if (t[0] === "remote-control" || t[0] === "rc" || t[0] === "remote" || t[0] === "sync" || t[0] === "bridge") {
    profileCheckpoint("cli_bridge_path");
    let {
      loadFastPathPolicy: loadFastPathPolicy_3
    } = await import("B:/~BUN/root/chunk-pyr07cpq.js");
    {
      let u = await loadFastPathPolicy_3(c);
      if (u) {
        let {
          exitWithError: exitWithError
        } = await import("B:/~BUN/root/chunk-gcjetqnn.js");
        exitWithError(u);
      }
    }
    let {
      restoreGatewayAuthForFastPath: restoreGatewayAuthForFastPath
    } = await import("B:/~BUN/root/chunk-3sn4tc86.js");
    try {
      await restoreGatewayAuthForFastPath();
    } catch (error) {
      let {
          exitWithError: exitWithError_2
        } = await import("B:/~BUN/root/chunk-gcjetqnn.js"),
        {
          errorMessage: errorMessage
        } = await import("B:/~BUN/root/chunk-2fydxer9.js");
      exitWithError_2(`Error: ${errorMessage(error)}`);
    }
    let {
        refuseRemoteControlLocally: refuseRemoteControlLocally,
        refuseRemoteControlIneligible: refuseRemoteControlIneligible,
        startRemoteControl: startRemoteControl
      } = await import("B:/~BUN/root/chunk-mshxh6m9.js"),
      A = await refuseRemoteControlLocally(),
      [{
        pinStorageV5: pinStorageV5
      }, {
        seedInstallIDs: seedInstallIDs
      }] = await Promise.all([import("B:/~BUN/root/chunk-z2xz1866.js"), import("B:/~BUN/root/chunk-argnxj0m.js")]),
      storageV5 = pinStorageV5(c);
    if (H() && storageV5 !== void 0) {
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
        }] = await Promise.all([import("B:/~BUN/root/chunk-1dvh6pxa.js"), import("B:/~BUN/root/chunk-7qwqa2vj.js"), import("B:/~BUN/root/chunk-mjxpcxa7.js"), import("B:/~BUN/root/chunk-tjtr18t7.js")]),
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
    }] = await Promise.all([import("B:/~BUN/root/chunk-3rf3nyns.js"), import("B:/~BUN/root/chunk-me7h05sq.js"), import("B:/~BUN/root/chunk-1dvh6pxa.js"), import("B:/~BUN/root/chunk-589gejwf.js"), import("B:/~BUN/root/chunk-argnxj0m.js")]);
    initSinks();
    let M = credentialsStoreFor_2(storageV5);
    initialize1PEventLogging(storageV5);
    let z = await refuseRemoteControlIneligible(A);
    if (H() && storageV5 !== void 0) initDefaultDebugLog({
      storageV5: storageV5
    }), watchGlobalConfigThroughStorage(storageV5);
    await startRemoteControl(z, t.slice(1), storageV5, M);
    return;
  }
  {
    let e = IIo(t);
    if (e !== null) {
      profileCheckpoint("cli_daemon_path");
      let {
        ensureFastPathSettingsLoaded: ensureFastPathSettingsLoaded_4
      } = await import("B:/~BUN/root/chunk-pyr07cpq.js");
      await ensureFastPathSettingsLoaded_4(c);
      let {
        initializeErrorLogSink: initializeErrorLogSink
      } = await import("B:/~BUN/root/chunk-pd2exn23.js");
      initializeErrorLogSink();
      let {
        daemonMain: daemonMain
      } = await import("B:/~BUN/root/chunk-bsdvvser.js");
      await daemonMain(e, c);
      return;
    }
  }
  if (t[0] === "logs" || t[0] === "attach" || t[0] === "stop" || t[0] === "kill" || t[0] === "respawn" || t[0] === "rm" || t.includes("--bg") || t.includes("--background")) {
    profileCheckpoint("cli_bg_path");
    let {
      loadFastPathPolicy: loadFastPathPolicy_4
    } = await import("B:/~BUN/root/chunk-pyr07cpq.js");
    {
      let r = await loadFastPathPolicy_4(c),
        f = ["logs", "stop", "kill", "rm"].includes(t[0] ?? "");
      if (r) if (f) process.stderr.write(`${r}
`);else {
        let {
          exitWithError: exitWithError_3
        } = await import("B:/~BUN/root/chunk-gcjetqnn.js");
        exitWithError_3(r);
      }
    }
    let o = await import("B:/~BUN/root/chunk-qtq0edp3.js");
    if (await o.ensureFleetGateHydrated(), !o.isAgentsFleetEnabled()) {
      let r = t[0],
        f = r !== void 0 && ["logs", "attach", "stop", "kill", "respawn", "rm"].includes(r) ? r : t.find(item => item === "--bg" || item === "--background" || item === "--routine" || item.startsWith("--routine=")) ?? "--bg";
      return o.fleetGateRejected(f);
    }
    let [i, {
        pinStorageV5: pinStorageV5_2
      }, {
        initDefaultDebugLog: initDefaultDebugLog_2
      }, {
        seedInstallIDs: seedInstallIDs_2,
        watchGlobalConfigThroughStorage: watchGlobalConfigThroughStorage_2
      }] = await Promise.all([import("B:/~BUN/root/chunk-njdkgnef.js"), import("B:/~BUN/root/chunk-z2xz1866.js"), import("B:/~BUN/root/chunk-589gejwf.js"), import("B:/~BUN/root/chunk-argnxj0m.js")]),
      storageV5_2 = pinStorageV5_2(c);
    if (H() && storageV5_2 !== void 0) {
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
        }] = await Promise.all([import("B:/~BUN/root/chunk-1dvh6pxa.js"), import("B:/~BUN/root/chunk-7qwqa2vj.js"), import("B:/~BUN/root/chunk-mjxpcxa7.js"), import("B:/~BUN/root/chunk-tjtr18t7.js")]),
        credentials_2 = credentialsStoreFor_3(storageV5_2);
      setGrowthBookCredentials_2(credentials_2), setGrowthBookStorageBackend_2(storageV5_2), composePolicyLimitsClient_2({
        storageV5: storageV5_2,
        credentials: credentials_2
      }), await primeFastPathCredentials_2(credentials_2), await primePolicyLimitsCache_2(storageV5_2), await seedInstallIDs_2(storageV5_2);
    }
    switch (t[0]) {
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
          }] = await Promise.all([import("B:/~BUN/root/chunk-b3g73ft3.js"), import("B:/~BUN/root/chunk-me7h05sq.js"), import("B:/~BUN/root/chunk-a8x2gs0b.js"), import("B:/~BUN/root/chunk-bcqh7a5d.js")]);
          if (initializeAnalyticsSink(), initialize1PEventLogging_2(storageV5_2), t[0] === "logs") await i.logsHandler(t[1], storageV5_2);else if (t[0] === "attach") await i.attachHandler(t[1], storageV5_2);else if (t[0] === "respawn") await i.respawnHandler(t[1], storageV5_2);else if (t[0] === "rm") await i.rmHandler(t[1], storageV5_2);else await i.stopHandler(t[1], storageV5_2);
          return await Promise.race([Promise.all([shutdown1PEventLogging(), shutdownDatadog()]), sleep(500, void 0, {
            unref: !0
          })]).catch(() => {}), process.exit(process.exitCode ?? 0);
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
          }] = await Promise.all([import("B:/~BUN/root/chunk-b3g73ft3.js"), import("B:/~BUN/root/chunk-me7h05sq.js"), import("B:/~BUN/root/chunk-a8x2gs0b.js"), import("B:/~BUN/root/chunk-m1txwwpz.js"), import("B:/~BUN/root/chunk-bcqh7a5d.js")]);
          initializeAnalyticsSink_2(), initialize1PEventLogging_3(storageV5_2), logEvent("tengu_background", {
            via_flag: !0,
            via: y("flag")
          }), await i.handleBgFlag(t, storageV5_2), await Promise.race([Promise.all([shutdown1PEventLogging_2(), shutdownDatadog_2()]), sleep_2(500, void 0, {
            unref: !0
          })]).catch(() => {}), process.exit(process.exitCode ?? 0);
        }
    }
    return;
  }
  let a = F6e(t);
  a.config.restricted ||= ["1", "true", "yes", "on"].includes((process.env.CLAUDE_CODE_RESTRICTED ?? "").toLowerCase().trim());
  let {
      dispatchDefaults: dispatchDefaults,
      rest: rest_2
    } = It(a.rest),
    C = a.hasAgentsPositional && st(rest_2);
  if ((C || st(t) && process.stdin.isTTY) && process.stdout.isTTY) {
    let {
      startCapturingEarlyInput: startCapturingEarlyInput,
      consumeEarlyInput: consumeEarlyInput
    } = await import("B:/~BUN/root/chunk-p7db4gpg.js");
    startCapturingEarlyInput();
    let [{
      startMdmRawRead: startMdmRawRead
    }, {
      startKeychainPrefetch: startKeychainPrefetch
    }] = await Promise.all([import("B:/~BUN/root/chunk-waftynfx.js"), import("B:/~BUN/root/chunk-94f53rvq.js")]);
    startMdmRawRead(), startKeychainPrefetch();
    let {
        enableConfigs: enableConfigs,
        getGlobalConfig: getGlobalConfig,
        seedInstallIDs: seedInstallIDs_3
      } = await import("B:/~BUN/root/chunk-argnxj0m.js"),
      s = !1,
      defaultToAgentsView = !1;
    try {
      await enableConfigs(H() ? c?.backend : void 0), defaultToAgentsView = getGlobalConfig().defaultToAgentsView === !0, s = C || defaultToAgentsView;
    } catch {}
    if (s) {
      if (a.config.settings || a.config.managedSettings) {
        let {
          loadSettingsFromFlag: loadSettingsFromFlag,
          loadManagedSettingsFromFlag: loadManagedSettingsFromFlag
        } = await import("B:/~BUN/root/chunk-9ham2qj7.js");
        if (a.config.settings) loadSettingsFromFlag(a.config.settings);
        if (a.config.managedSettings) loadManagedSettingsFromFlag(a.config.managedSettings);
      }
      if (a.config.pluginDir.length > 0 || a.config.pluginDirNoMcp.length > 0) {
        let [{
          setInlinePlugins: setInlinePlugins,
          setInlinePluginsNoMcp: setInlinePluginsNoMcp
        }, {
          clearPluginCache: clearPluginCache
        }] = await Promise.all([import("B:/~BUN/root/chunk-kyqapdq5.js"), import("B:/~BUN/root/chunk-mfrc6w6n.js")]);
        setInlinePlugins(a.config.pluginDir), setInlinePluginsNoMcp(a.config.pluginDirNoMcp), clearPluginCache("claude agents --plugin-dir");
      }
      let {
          loadFastPathPolicy: loadFastPathPolicy_5
        } = await import("B:/~BUN/root/chunk-pyr07cpq.js"),
        l = await loadFastPathPolicy_5(c);
      if (l) {
        let {
          exitWithError: exitWithError_4
        } = await import("B:/~BUN/root/chunk-gcjetqnn.js");
        exitWithError_4(l);
      }
      let w;
      if (process.env.CLAUDE_CODE_PLUGIN_DIRS?.trim()) {
        let [{
            mergePluginDirs: mergePluginDirs,
            PLUGIN_DIRS_ENV_RECOVERY_HINT: h,
            PLUGIN_DIRS_ENV_VAR: E,
            settlePluginDirsEnv: settlePluginDirsEnv,
            withoutPluginDirs: withoutPluginDirs
          }, {
            setInlinePlugins: setInlinePlugins_2
          }, {
            clearPluginCache: clearPluginCache_2
          }] = await Promise.all([import("B:/~BUN/root/chunk-06p9fz2n.js"), import("B:/~BUN/root/chunk-kyqapdq5.js"), import("B:/~BUN/root/chunk-mfrc6w6n.js")]),
          Y = withoutPluginDirs(settlePluginDirsEnv(), a.config.pluginDirNoMcp);
        if (Y.length > 0) w = {
          name: E,
          hint: h
        }, setInlinePlugins_2(mergePluginDirs(a.config.pluginDir, Y)), clearPluginCache_2("claude agents CLAUDE_CODE_PLUGIN_DIRS");
      }
      {
        let {
          areSideloadFlagsDisabledByPolicy: areSideloadFlagsDisabledByPolicy,
          sideloadFlagsBlockedMessage: sideloadFlagsBlockedMessage
        } = await import("B:/~BUN/root/chunk-gc8jkm9z.js");
        if (areSideloadFlagsDisabledByPolicy()) {
          let E = [];
          if (a.config.pluginDir.length > 0) E.push("--plugin-dir");
          if (a.config.pluginDirNoMcp.length > 0) E.push("--plugin-dir-no-mcp");
          if (w) E.push(w.name);
          if (E.length > 0) {
            let {
              exitWithError: exitWithError_5
            } = await import("B:/~BUN/root/chunk-gcjetqnn.js");
            exitWithError_5(w ? `${sideloadFlagsBlockedMessage(E)} ${w.hint}` : sideloadFlagsBlockedMessage(E));
          }
        }
      }
      let {
        isAgentsFleetEnabled: isAgentsFleetEnabled,
        ensureFleetGateHydrated: ensureFleetGateHydrated,
        fleetGateRejected: fleetGateRejected,
        consumeAgentViewRelaunchMarker: consumeAgentViewRelaunchMarker
      } = await import("B:/~BUN/root/chunk-qtq0edp3.js");
      if (await ensureFleetGateHydrated({
        kickGrowthBook: !1
      }), isAgentsFleetEnabled()) {
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
            setCliSessionConfigCarried: setCliSessionConfigCarried,
            setIsInteractive: setIsInteractive,
            setRestrictedSession: setRestrictedSession,
            setSessionStartType: setSessionStartType
          }, {
            cliCarriesSessionConfig: cliCarriesSessionConfig
          }, {
            pinStorageV5: pinStorageV5_3
          }, {
            appliedSettingSourcesFlagValue: appliedSettingSourcesFlagValue
          }] = await Promise.all([import("B:/~BUN/root/chunk-2ad7v528.js"), import("B:/~BUN/root/chunk-7kb25cj2.js"), import("B:/~BUN/root/chunk-njw9q22k.js"), import("path"), import("B:/~BUN/root/chunk-kyqapdq5.js"), import("B:/~BUN/root/chunk-8kd2vjnp.js"), import("B:/~BUN/root/chunk-z2xz1866.js"), import("B:/~BUN/root/chunk-e9symh8e.js")]),
          Z = {
            ...a.config,
            settingSources: appliedSettingSourcesFlagValue()
          },
          storageV5_3 = pinStorageV5_3(c),
          credentials_3;
        if (H() && storageV5_3 !== void 0) {
          let [{
            credentialsStoreFor: credentialsStoreFor_4
          }, {
            setGrowthBookCredentials: setGrowthBookCredentials_3,
            setGrowthBookStorageBackend: setGrowthBookStorageBackend_3
          }, {
            primeFastPathCredentials: primeFastPathCredentials_3
          }] = await Promise.all([import("B:/~BUN/root/chunk-1dvh6pxa.js"), import("B:/~BUN/root/chunk-7qwqa2vj.js"), import("B:/~BUN/root/chunk-tjtr18t7.js")]);
          credentials_3 = credentialsStoreFor_4(storageV5_3), setGrowthBookCredentials_3(credentials_3), setGrowthBookStorageBackend_3(storageV5_3), await primeFastPathCredentials_3(credentials_3), await seedInstallIDs_3(storageV5_3);
        }
        import("B:/~BUN/root/chunk-zwpng6g5.js").then(({
          resolveSetting: resolveSetting
        }) => {
          let {
            value: value
          } = resolveSetting("theme", "dark");
          if (value.startsWith("custom:")) import("B:/~BUN/root/chunk-y6cvrpkq.js").then(k => k.loadCustomThemes(storageV5_3));
        });
        let relaunch = consumeAgentViewRelaunchMarker();
        setIsInteractive(!0), setCliSessionConfigCarried(cliCarriesSessionConfig({
          ...Z,
          ...dispatchDefaults
        })), setRestrictedSession(a.config.restricted), setSessionStartType("agents_view");
        let Q = () => {};
        process.on("unhandledRejection", Q);
        let X = Promise.resolve(),
          tt = () => {},
          promise = new Promise(p => {
            tt = p;
          });
        setImmediate(async () => {
          if (H() && storageV5_3 !== void 0) try {
            let [{
              credentialsStoreFor: credentialsStoreFor_5
            }, {
              composePolicyLimitsClient: composePolicyLimitsClient_3,
              primePolicyLimitsCache: primePolicyLimitsCache_3
            }] = await Promise.all([import("B:/~BUN/root/chunk-1dvh6pxa.js"), import("B:/~BUN/root/chunk-mjxpcxa7.js")]);
            composePolicyLimitsClient_3({
              storageV5: storageV5_3,
              credentials: credentialsStoreFor_5(storageV5_3)
            }), await primePolicyLimitsCache_3(storageV5_3);
          } catch (error) {
            import("B:/~BUN/root/chunk-589gejwf.js").then(({
              logForDebugging: logForDebugging
            }) => logForDebugging(`Policy limits: start-up composition on the agents path failed: ${error instanceof Error ? error.message : String(error)}`, {
              level: "warn"
            }));
          }
          X = Promise.all([import("B:/~BUN/root/chunk-kqy6dwqq.js"), import("B:/~BUN/root/chunk-pd2exn23.js"), import("B:/~BUN/root/chunk-b3g73ft3.js"), import("B:/~BUN/root/chunk-me7h05sq.js"), import("B:/~BUN/root/chunk-m1txwwpz.js"), import("B:/~BUN/root/chunk-v5d9xtjz.js"), import("B:/~BUN/root/chunk-7qwqa2vj.js"), import("B:/~BUN/root/chunk-a5p74awa.js"), import("B:/~BUN/root/chunk-argnxj0m.js"), import("B:/~BUN/root/chunk-0frr9mwc.js"), import("B:/~BUN/root/chunk-12npfqes.js"), import("B:/~BUN/root/chunk-589gejwf.js")]).then(([{
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
            checkHasTrustDialogAccepted: ot,
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
              trustProbe: ot
            }), initializeGrowthBook().catch(() => {}), initializeErrorLogSink_2(), initializeAnalyticsSink_3(), initialize1PEventLogging_4(storageV5_3), H() && storageV5_3 !== void 0) initDefaultDebugLog_3({
              storageV5: storageV5_3
            }), watchGlobalConfigThroughStorage_3(storageV5_3);
            return promise.then(() => {
              if (ot()) applyConfigEnvironmentVariables(), initializeTelemetryAfterTrust(storageV5_3);
            }), logEvent_2("tengu_fleetview", {
              defaultToAgentsView: defaultToAgentsView,
              relaunch: relaunch
            }), captureTeammateModeSnapshotIfEnabled();
          }).finally(() => process.off("unhandledRejection", Q)), import("B:/~BUN/root/chunk-gmg7qzdc.js").then(p => p.startBackgroundHousekeeping(getRootSession().host, storageV5_3));
        }), consumeEarlyInput(), applyFleetViewHostWindowsEnv();
        let K = dispatchDefaults?.permissionMode === "bypassPermissions" || dispatchDefaults?.allowBypass ? await import("B:/~BUN/root/chunk-9cys38qc.js") : void 0;
        K?.refuseBypassUnderRoot(dispatchDefaults);
        let dispatchDefaults_2 = K?.applyBypassPolicyGate(dispatchDefaults) ?? dispatchDefaults,
          J = await createRoot(getBaseRenderOptions(!1)),
          {
            ensureAgentsWorkspaceTrust: ensureAgentsWorkspaceTrust,
            agentsTrustDecision: agentsTrustDecision
          } = await import("B:/~BUN/root/chunk-r3behs4n.js");
        if (await ensureAgentsWorkspaceTrust(J, agentsTrustDecision(), storageV5_3), tt(), K) await K.ensureAgentsBypassConsent(J, dispatchDefaults_2, storageV5_3);
        let it = await import("B:/~BUN/root/chunk-qtq0edp3.js"),
          _t = {
            cwdFilter: a.cwdFilter,
            dispatchExtraArgs: VX($6e(Z, resolve)),
            dispatchDefaults: dispatchDefaults_2,
            entryChannel: it.isListReturnRelaunch() ? "list_return" : C ? "cli_agents" : "default_home",
            storageV5: storageV5_3,
            credentials: credentials_3
          };
        {
          let {
            mountFleetViewWithComposerBack: mountFleetViewWithComposerBack
          } = await import("B:/~BUN/root/chunk-cna8f91k.js");
          await mountFleetViewWithComposerBack(J, _t);
        }
        await X.catch(() => {});
        let {
          gracefulShutdown: gracefulShutdown
        } = await import("B:/~BUN/root/chunk-kqy6dwqq.js");
        await gracefulShutdown(0, "other", {
          suppressResumeHint: !0
        });
        return;
      }
      if (C) return fleetGateRejected("claude agents");
    }
  }
  if (t[0] === "self-hosted-runner") {
    profileCheckpoint("cli_self_hosted_runner_path");
    let e = t[1];
    if (e === "orchestrator") {
      let {
        selfHostedRunnerOrchestratorMain: selfHostedRunnerOrchestratorMain
      } = await import("B:/~BUN/root/chunk-jr406n9z.js");
      await selfHostedRunnerOrchestratorMain(t.slice(2));
      return;
    }
    if (e === "setup") {
      let {
        selfHostedRunnerSetupMain: selfHostedRunnerSetupMain
      } = await import("B:/~BUN/root/chunk-09nabwj1.js");
      await selfHostedRunnerSetupMain(t.slice(2), c);
      return;
    }
    if (e === "doctor") {
      let {
        selfHostedRunnerDoctorMain: selfHostedRunnerDoctorMain
      } = await import("B:/~BUN/root/chunk-gjk8ns6c.js");
      await selfHostedRunnerDoctorMain(t.slice(2), c);
      return;
    }
    if (e === "code-sign") {
      let {
        selfHostedRunnerCodeSignMain: selfHostedRunnerCodeSignMain
      } = await import("B:/~BUN/root/chunk-a9heap0w.js");
      await selfHostedRunnerCodeSignMain(t.slice(2));
      return;
    }
    if (e === "decode-token") {
      let {
        selfHostedRunnerDecodeTokenMain: selfHostedRunnerDecodeTokenMain
      } = await import("B:/~BUN/root/chunk-gsv4mn2h.js");
      await selfHostedRunnerDecodeTokenMain(t.slice(2));
      return;
    }
    let {
      selfHostedRunnerMain: selfHostedRunnerMain
    } = await import("B:/~BUN/root/chunk-yhewbdva.js");
    await selfHostedRunnerMain(t.slice(1));
    return;
  }
  if ((t.includes("--tmux") || t.includes("--tmux=classic")) && (t.includes("-w") || t.includes("--worktree") || t.some(item => item.startsWith("--worktree=")))) {
    profileCheckpoint("cli_tmux_worktree_fast_path");
    let {
      eagerLoadSettings: eagerLoadSettings
    } = await import("B:/~BUN/root/chunk-9ham2qj7.js");
    eagerLoadSettings();
    let {
      loadFastPathPolicy: loadFastPathPolicy_6
    } = await import("B:/~BUN/root/chunk-pyr07cpq.js");
    {
      let m = await loadFastPathPolicy_6(c);
      if (m) {
        let {
          exitWithError: exitWithError_6
        } = await import("B:/~BUN/root/chunk-gcjetqnn.js");
        exitWithError_6(m);
      }
    }
    let {
      isWorktreeModeEnabled: isWorktreeModeEnabled
    } = await import("B:/~BUN/root/chunk-k6mn0b8c.js");
    if (isWorktreeModeEnabled()) {
      let [{
          execIntoTmuxWorktree: execIntoTmuxWorktree
        }, {
          pinStorageV5: pinStorageV5_4
        }, {
          initDefaultDebugLog: initDefaultDebugLog_4
        }] = await Promise.all([import("B:/~BUN/root/chunk-9afq3sx6.js"), import("B:/~BUN/root/chunk-z2xz1866.js"), import("B:/~BUN/root/chunk-589gejwf.js")]),
        storageV5_4 = pinStorageV5_4(c),
        s;
      if (H() && storageV5_4 !== void 0) {
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
        }] = await Promise.all([import("B:/~BUN/root/chunk-1dvh6pxa.js"), import("B:/~BUN/root/chunk-7qwqa2vj.js"), import("B:/~BUN/root/chunk-tjtr18t7.js")]);
        s = credentialsStoreFor_6(storageV5_4), setGrowthBookCredentials_4(s), setGrowthBookStorageBackend_4(storageV5_4), await primeFastPathCredentials_4(s);
        let {
          seedInstallIDs: seedInstallIDs_4
        } = await import("B:/~BUN/root/chunk-argnxj0m.js");
        await seedInstallIDs_4(storageV5_4);
      }
      let r = await execIntoTmuxWorktree(t, storageV5_4, s);
      if (r.handled) return;
      let {
        exitWithError: exitWithError_7
      } = await import("B:/~BUN/root/chunk-gcjetqnn.js");
      exitWithError_7(r.error);
    }
  }
  if (t.length === 1 && (t[0] === "--update" || t[0] === "--upgrade")) process.argv = [process.argv[0], process.argv[1], "update"];
  let x = t.indexOf("--");
  if ((x === -1 ? t : t.slice(0, x)).includes("--bare")) process.env.CLAUDE_CODE_SIMPLE = "1";
  let {
    NON_REPL_SUBCOMMANDS: NON_REPL_SUBCOMMANDS,
    isMcpServeInvocation: isMcpServeInvocation,
    isPluginEvalInvocation: isPluginEvalInvocation,
    isRemoteControlInvocation: isRemoteControlInvocation,
    isAgentsJsonInvocation: isAgentsJsonInvocation
  } = await import("B:/~BUN/root/chunk-wwv54evz.js");
  if (!NON_REPL_SUBCOMMANDS.has(process.argv[2] ?? "") && !isMcpServeInvocation(process.argv.slice(2)) && !isPluginEvalInvocation(process.argv.slice(2)) && !isRemoteControlInvocation(process.argv.slice(2)) && !isAgentsJsonInvocation(process.argv.slice(2))) {
    let {
      startCapturingEarlyInput: startCapturingEarlyInput_2
    } = await import("B:/~BUN/root/chunk-p7db4gpg.js");
    startCapturingEarlyInput_2();
  }
  let [{
    startMdmRawRead: startMdmRawRead_2
  }, {
    startKeychainPrefetch: startKeychainPrefetch_2
  }] = await Promise.all([import("B:/~BUN/root/chunk-waftynfx.js"), import("B:/~BUN/root/chunk-94f53rvq.js")]);
  startMdmRawRead_2(), startKeychainPrefetch_2(), profileCheckpoint("cli_before_main_import"), (await import("B:/~BUN/root/chunk-4zn7czak.js")).configureZodForStartup();
  let {
    main: main
  } = await import("B:/~BUN/root/chunk-1d7sm668.js");
  profileCheckpoint("cli_after_main_import"), await main(c), profileCheckpoint("cli_after_main_complete");
}
Mt();