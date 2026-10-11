// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  H
} from "B:/~BUN/root/chunk-dkxhwhft.js";
import {
  y
} from "B:/~BUN/root/chunk-kks4mj3w.js";
import {
  idn
} from "B:/~BUN/root/chunk-w795zx57.js";
import {
  F6e,
  $6e,
  VX,
  IIo,
  fN
} from "B:/~BUN/root/chunk-45e6pkwp.js";
import {
  khn
} from "B:/~BUN/root/chunk-fwzy34jf.js";

function rt() {
  try {
    process.cwd();
    return
  } catch (n) {
    let t = n instanceof Error && "code" in n && typeof n.code === "string" ? n.code : void 0;
    if (t === "ENOENT") return "The current directory no longer exists (it was deleted or moved). Start Claude Code from an existing directory.";
    return `Can't read the current directory${t?` (${t})`:""}. Start Claude Code from a different directory.`
  }
}
process.env.NoDefaultCurrentDirectoryInExePath = "1";
process.env.COREPACK_ENABLE_AUTO_PIN = "0";
khn();
if (process.env.CLAUDE_CODE_REMOTE === "true") {
  let n = process.env.NODE_OPTIONS || "";
  process.env.NODE_OPTIONS = n ? `${n} --max-old-space-size=8192` : "--max-old-space-size=8192"
}

function st(n) {
  for (let t = 0; t < n.length; t++) {
    let _ = n[t];
    if (_ === "--debug" || _ === "-d" || _ === "--debug-to-stderr" || _ === "-d2e" || _.startsWith("--debug=") || _.startsWith("--debug-file=")) continue;
    if (_ === "--debug-file" && t + 1 < n.length) {
      t++;
      continue
    }
    return !1
  }
  return !0
}

function It(n) {
  let t, _, g, U, c, a, L = [];
  for (let C = 0; C < n.length; C++) {
    let B = n[C],
      x = B.indexOf("="),
      [R, T] = x > 0 ? [B.slice(0, x), B.slice(x + 1)] : [B, void 0],
      N = T !== void 0 || C + 1 < n.length;
    if (R === "--dangerously-skip-permissions") t = "bypassPermissions";
    else if (R === "--allow-dangerously-skip-permissions") a = !0;
    else if (R === "--permission-mode" && N) t = T ?? n[++C];
    else if (R === "--inherit-permission-mode" && N) _ = T ?? n[++C];
    else if (R === "--model" && N) g = T ?? n[++C];
    else if (R === "--effort" && N) U = T ?? n[++C];
    else if (R === "--agent" && N) c = T ?? n[++C];
    else L.push(B)
  }
  let W = t ?? _;
  return {
    dispatchDefaults: W || g || U || c || a ? {
      permissionMode: W,
      ...!t && _ && {
        permissionModeInherited: !0
      },
      model: g,
      effort: U,
      agent: c,
      allowBypass: a
    } : void 0,
    rest: L
  }
}
async function Mt() {
  let n = idn(process.argv);
  if (n) console.error(n), process.exit(1);
  let t = process.argv.slice(2);
  if ((t.length === 1 || t.length === 2 && t[1] === "--verbose") && (t[0] === "--version" || t[0] === "-v" || t[0] === "-V")) {
    if (console.log(`${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://code.claude.com/docs/en/overview",VERSION:"2.1.283",FEEDBACK_CHANNEL:"https://github.com/anthropics/claude-code/issues",BUILD_TIME:"2026-09-25T00:44:42Z",GIT_SHA:"4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",HOOKS_WORKER_URL:"B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",DD_SOURCEMAP_GROUP:"win32"}.VERSION} (Claude Code)${fN()}`), t.length === 2 && {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.283",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-09-25T00:44:42Z",
        GIT_SHA: "4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",
        HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "win32"
      }.GIT_SHA) console.log(`Commit: ${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://code.claude.com/docs/en/overview",VERSION:"2.1.283",FEEDBACK_CHANNEL:"https://github.com/anthropics/claude-code/issues",BUILD_TIME:"2026-09-25T00:44:42Z",GIT_SHA:"4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",HOOKS_WORKER_URL:"B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",DD_SOURCEMAP_GROUP:"win32"}.GIT_SHA}`);
    return
  }
  let _ = rt();
  if (_) {
    console.error(_);
    let {
      writeStartupFailureResult: e
    } = await import("B:/~BUN/root/chunk-tgfacxm5.js"), {
      randomUUID: o
    } = await import("crypto");
    await e({
      sessionId: o(),
      message: _,
      reason: "cwd_unavailable"
    }), process.exit(1)
  }
  let {
    profileCheckpoint: g
  } = await import("B:/~BUN/root/chunk-kepmvhg8.js");
  g("cli_entry");
  let U = t[0] === "--preload" || t[0] === "--bg-spare",
    c = !U && process.env.CLAUDE_CODE_HOVER_REST ? (await import("B:/~BUN/root/chunk-zfx6skbv.js")).pinStorageV5FromEnv() : void 0;
  if (!U) setTimeout(() => {
    if (typeof Bun < "u") Bun.unsafe.setJITPolicy?.(1)
  }, 1e4).unref();
  if (t[0] === "plugin" && t[1] === "test") {
    let [{
      loadFastPathPolicy: e
    }, o, {
      pluginTestRefusal: i
    }] = await Promise.all([import("B:/~BUN/root/chunk-pyr07cpq.js"), import("B:/~BUN/root/chunk-2zkkenra.js"), import("B:/~BUN/root/chunk-6fncmwya.js")]), m = i({
      helperError: await e(c),
      isRolloutOn: o.hooksModulesRolloutOn(),
      canLoadUserModules: o.canLoadUserHooksModules()
    });
    if (t[2] === "--file" && m !== void 0) {
      let {
        REPORT_MARK: A
      } = await import("B:/~BUN/root/chunk-aaadeqt4.js");
      process.stdout.write(`${A}${JSON.stringify({file:t[3],results:[],error:m})}
`);
      return
    }
    if (m !== void 0) {
      process.stderr.write(`claude plugin test: ${m}
`), process.exitCode = 1;
      return
    }
    let {
      pluginTestMain: v
    } = await import("B:/~BUN/root/chunk-39fgsset.js");
    process.exitCode = await v(t.slice(2));
    return
  }
  if (process.argv[2] === "--eval-mock-server") {
    g("cli_eval_mock_server_path");
    let {
      runEvalMockServer: e
    } = await import("B:/~BUN/root/chunk-rd0vqx8a.js");
    try {
      await e(process.argv[3], process.argv[4])
    } catch (o) {
      console.error(`--eval-mock-server: ${o instanceof Error?o.message:String(o)}`), process.exitCode = 1
    }
    return
  }
  if (process.argv[2] === "--claude-in-chrome-mcp") {
    g("cli_claude_in_chrome_mcp_path");
    let {
      runClaudeInChromeMcpServer: e
    } = await import("B:/~BUN/root/chunk-rph6tj6t.js");
    await e(c);
    return
  } else if (process.argv[2] === "--chrome-native-host") {
    g("cli_chrome_native_host_path");
    let {
      runChromeNativeHost: e
    } = await import("B:/~BUN/root/chunk-jc203q4m.js");
    await e();
    return
  }
  if (t[0] === "--daemon-worker") {
    let {
      loadFastPathPolicy: e
    } = await import("B:/~BUN/root/chunk-pyr07cpq.js"), o = await e(c);
    if (o) process.stderr.write(`${o}
`);
    let {
      runDaemonWorker: i
    } = await import("B:/~BUN/root/chunk-jpd9wgy6.js");
    await i(t[1], c);
    return
  }
  if (t[0] === "--bg-pty-host") {
    let {
      ensureFastPathSettingsLoaded: e
    } = await import("B:/~BUN/root/chunk-pyr07cpq.js");
    try {
      await e(c)
    } catch (i) {
      process.stderr.write(`ptyHost: settings bootstrap threw (continuing; supervisor already gated): ${i?.stack??String(i)}
`)
    }
    let {
      runPtyHost: o
    } = await import("B:/~BUN/root/chunk-bm1k3j6t.js");
    await o(t.slice(1));
    return
  }
  if (t[0] === "--bg-spare") {
    let {
      ensureFastPathSettingsLoaded: e
    } = await import("B:/~BUN/root/chunk-pyr07cpq.js");
    await e(void 0);
    let {
      runBgSpare: o
    } = await import("B:/~BUN/root/chunk-mznqzamn.js");
    await o(t.slice(1));
    return
  }
  if (t[0] === "--preload") {
    let {
      ensureFastPathSettingsLoaded: e
    } = await import("B:/~BUN/root/chunk-pyr07cpq.js");
    await e(void 0);
    let {
      runPreload: o
    } = await import("B:/~BUN/root/chunk-0nrksk3n.js");
    await o(t.slice(1));
    return
  }
  if (t[0] === "remote-control" || t[0] === "rc" || t[0] === "remote" || t[0] === "sync" || t[0] === "bridge") {
    g("cli_bridge_path");
    let {
      loadFastPathPolicy: e
    } = await import("B:/~BUN/root/chunk-pyr07cpq.js");
    {
      let u = await e(c);
      if (u) {
        let {
          exitWithError: h
        } = await import("B:/~BUN/root/chunk-gcjetqnn.js");
        h(u)
      }
    }
    let {
      restoreGatewayAuthForFastPath: o
    } = await import("B:/~BUN/root/chunk-3sn4tc86.js");
    try {
      await o()
    } catch (u) {
      let {
        exitWithError: h
      } = await import("B:/~BUN/root/chunk-gcjetqnn.js"), {
        errorMessage: E
      } = await import("B:/~BUN/root/chunk-2fydxer9.js");
      h(`Error: ${E(u)}`)
    }
    let {
      refuseRemoteControlLocally: i,
      refuseRemoteControlIneligible: m,
      startRemoteControl: v
    } = await import("B:/~BUN/root/chunk-mshxh6m9.js"), A = await i(), [{
      pinStorageV5: S
    }, {
      seedInstallIDs: s
    }] = await Promise.all([import("B:/~BUN/root/chunk-z2xz1866.js"), import("B:/~BUN/root/chunk-argnxj0m.js")]), r = S(c);
    if (H() && r !== void 0) {
      let [{
        credentialsStoreFor: u
      }, {
        setGrowthBookCredentials: h,
        setGrowthBookStorageBackend: E
      }, {
        composePolicyLimitsClient: b,
        primePolicyLimitsCache: G
      }, {
        primeFastPathCredentials: V
      }] = await Promise.all([import("B:/~BUN/root/chunk-1dvh6pxa.js"), import("B:/~BUN/root/chunk-7qwqa2vj.js"), import("B:/~BUN/root/chunk-mjxpcxa7.js"), import("B:/~BUN/root/chunk-tjtr18t7.js")]), F = u(r);
      h(F), E(r), b({
        storageV5: r,
        credentials: F
      }), await V(F), await G(r), await s(r)
    }
    let [{
      initSinks: f
    }, {
      initialize1PEventLogging: l
    }, {
      credentialsStoreFor: w
    }, {
      initDefaultDebugLog: D
    }, {
      watchGlobalConfigThroughStorage: I
    }] = await Promise.all([import("B:/~BUN/root/chunk-3rf3nyns.js"), import("B:/~BUN/root/chunk-me7h05sq.js"), import("B:/~BUN/root/chunk-1dvh6pxa.js"), import("B:/~BUN/root/chunk-589gejwf.js"), import("B:/~BUN/root/chunk-argnxj0m.js")]);
    f();
    let M = w(r);
    l(r);
    let z = await m(A);
    if (H() && r !== void 0) D({
      storageV5: r
    }), I(r);
    await v(z, t.slice(1), r, M);
    return
  } {
    let e = IIo(t);
    if (e !== null) {
      g("cli_daemon_path");
      let {
        ensureFastPathSettingsLoaded: o
      } = await import("B:/~BUN/root/chunk-pyr07cpq.js");
      await o(c);
      let {
        initializeErrorLogSink: i
      } = await import("B:/~BUN/root/chunk-pd2exn23.js");
      i();
      let {
        daemonMain: m
      } = await import("B:/~BUN/root/chunk-bsdvvser.js");
      await m(e, c);
      return
    }
  }
  if (t[0] === "logs" || t[0] === "attach" || t[0] === "stop" || t[0] === "kill" || t[0] === "respawn" || t[0] === "rm" || t.includes("--bg") || t.includes("--background")) {
    g("cli_bg_path");
    let {
      loadFastPathPolicy: e
    } = await import("B:/~BUN/root/chunk-pyr07cpq.js");
    {
      let r = await e(c),
        f = ["logs", "stop", "kill", "rm"].includes(t[0] ?? "");
      if (r)
        if (f) process.stderr.write(`${r}
`);
        else {
          let {
            exitWithError: l
          } = await import("B:/~BUN/root/chunk-gcjetqnn.js");
          l(r)
        }
    }
    let o = await import("B:/~BUN/root/chunk-qtq0edp3.js");
    if (await o.ensureFleetGateHydrated(), !o.isAgentsFleetEnabled()) {
      let r = t[0],
        f = r !== void 0 && ["logs", "attach", "stop", "kill", "respawn", "rm"].includes(r) ? r : t.find((l) => l === "--bg" || l === "--background" || l === "--routine" || l.startsWith("--routine=")) ?? "--bg";
      return o.fleetGateRejected(f)
    }
    let [i, {
      pinStorageV5: m
    }, {
      initDefaultDebugLog: v
    }, {
      seedInstallIDs: A,
      watchGlobalConfigThroughStorage: S
    }] = await Promise.all([import("B:/~BUN/root/chunk-njdkgnef.js"), import("B:/~BUN/root/chunk-z2xz1866.js"), import("B:/~BUN/root/chunk-589gejwf.js"), import("B:/~BUN/root/chunk-argnxj0m.js")]), s = m(c);
    if (H() && s !== void 0) {
      v({
        storageV5: s
      }), S(s);
      let [{
        credentialsStoreFor: r
      }, {
        setGrowthBookCredentials: f,
        setGrowthBookStorageBackend: l
      }, {
        composePolicyLimitsClient: w,
        primePolicyLimitsCache: D
      }, {
        primeFastPathCredentials: I
      }] = await Promise.all([import("B:/~BUN/root/chunk-1dvh6pxa.js"), import("B:/~BUN/root/chunk-7qwqa2vj.js"), import("B:/~BUN/root/chunk-mjxpcxa7.js"), import("B:/~BUN/root/chunk-tjtr18t7.js")]), M = r(s);
      f(M), l(s), w({
        storageV5: s,
        credentials: M
      }), await I(M), await D(s), await A(s)
    }
    switch (t[0]) {
      case "logs":
      case "attach":
      case "stop":
      case "kill":
      case "respawn":
      case "rm": {
        let [{
          initializeAnalyticsSink: r
        }, {
          initialize1PEventLogging: f,
          shutdown1PEventLogging: l
        }, {
          shutdownDatadog: w
        }, {
          sleep: D
        }] = await Promise.all([import("B:/~BUN/root/chunk-b3g73ft3.js"), import("B:/~BUN/root/chunk-me7h05sq.js"), import("B:/~BUN/root/chunk-a8x2gs0b.js"), import("B:/~BUN/root/chunk-bcqh7a5d.js")]);
        if (r(), f(s), t[0] === "logs") await i.logsHandler(t[1], s);
        else if (t[0] === "attach") await i.attachHandler(t[1], s);
        else if (t[0] === "respawn") await i.respawnHandler(t[1], s);
        else if (t[0] === "rm") await i.rmHandler(t[1], s);
        else await i.stopHandler(t[1], s);
        return await Promise.race([Promise.all([l(), w()]), D(500, void 0, {
          unref: !0
        })]).catch(() => {}), process.exit(process.exitCode ?? 0)
      }
      default: {
        let [{
          initializeAnalyticsSink: r
        }, {
          initialize1PEventLogging: f,
          shutdown1PEventLogging: l
        }, {
          shutdownDatadog: w
        }, {
          logEvent: D
        }, {
          sleep: I
        }] = await Promise.all([import("B:/~BUN/root/chunk-b3g73ft3.js"), import("B:/~BUN/root/chunk-me7h05sq.js"), import("B:/~BUN/root/chunk-a8x2gs0b.js"), import("B:/~BUN/root/chunk-m1txwwpz.js"), import("B:/~BUN/root/chunk-bcqh7a5d.js")]);
        r(), f(s), D("tengu_background", {
          via_flag: !0,
          via: y("flag")
        }), await i.handleBgFlag(t, s), await Promise.race([Promise.all([l(), w()]), I(500, void 0, {
          unref: !0
        })]).catch(() => {}), process.exit(process.exitCode ?? 0)
      }
    }
    return
  }
  let a = F6e(t);
  a.config.restricted ||= ["1", "true", "yes", "on"].includes((process.env.CLAUDE_CODE_RESTRICTED ?? "").toLowerCase().trim());
  let {
    dispatchDefaults: L,
    rest: W
  } = It(a.rest), C = a.hasAgentsPositional && st(W);
  if ((C || st(t) && process.stdin.isTTY) && process.stdout.isTTY) {
    let {
      startCapturingEarlyInput: e,
      consumeEarlyInput: o
    } = await import("B:/~BUN/root/chunk-p7db4gpg.js");
    e();
    let [{
      startMdmRawRead: i
    }, {
      startKeychainPrefetch: m
    }] = await Promise.all([import("B:/~BUN/root/chunk-waftynfx.js"), import("B:/~BUN/root/chunk-94f53rvq.js")]);
    i(), m();
    let {
      enableConfigs: v,
      getGlobalConfig: A,
      seedInstallIDs: S
    } = await import("B:/~BUN/root/chunk-argnxj0m.js"), s = !1, r = !1;
    try {
      await v(H() ? c?.backend : void 0), r = A().defaultToAgentsView === !0, s = C || r
    } catch {}
    if (s) {
      if (a.config.settings || a.config.managedSettings) {
        let {
          loadSettingsFromFlag: u,
          loadManagedSettingsFromFlag: h
        } = await import("B:/~BUN/root/chunk-9ham2qj7.js");
        if (a.config.settings) u(a.config.settings);
        if (a.config.managedSettings) h(a.config.managedSettings)
      }
      if (a.config.pluginDir.length > 0 || a.config.pluginDirNoMcp.length > 0) {
        let [{
          setInlinePlugins: u,
          setInlinePluginsNoMcp: h
        }, {
          clearPluginCache: E
        }] = await Promise.all([import("B:/~BUN/root/chunk-kyqapdq5.js"), import("B:/~BUN/root/chunk-mfrc6w6n.js")]);
        u(a.config.pluginDir), h(a.config.pluginDirNoMcp), E("claude agents --plugin-dir")
      }
      let {
        loadFastPathPolicy: f
      } = await import("B:/~BUN/root/chunk-pyr07cpq.js"), l = await f(c);
      if (l) {
        let {
          exitWithError: u
        } = await import("B:/~BUN/root/chunk-gcjetqnn.js");
        u(l)
      }
      let w;
      if (process.env.CLAUDE_CODE_PLUGIN_DIRS?.trim()) {
        let [{
          mergePluginDirs: u,
          PLUGIN_DIRS_ENV_RECOVERY_HINT: h,
          PLUGIN_DIRS_ENV_VAR: E,
          settlePluginDirsEnv: b,
          withoutPluginDirs: G
        }, {
          setInlinePlugins: V
        }, {
          clearPluginCache: F
        }] = await Promise.all([import("B:/~BUN/root/chunk-06p9fz2n.js"), import("B:/~BUN/root/chunk-kyqapdq5.js"), import("B:/~BUN/root/chunk-mfrc6w6n.js")]), Y = G(b(), a.config.pluginDirNoMcp);
        if (Y.length > 0) w = {
          name: E,
          hint: h
        }, V(u(a.config.pluginDir, Y)), F("claude agents CLAUDE_CODE_PLUGIN_DIRS")
      } {
        let {
          areSideloadFlagsDisabledByPolicy: u,
          sideloadFlagsBlockedMessage: h
        } = await import("B:/~BUN/root/chunk-gc8jkm9z.js");
        if (u()) {
          let E = [];
          if (a.config.pluginDir.length > 0) E.push("--plugin-dir");
          if (a.config.pluginDirNoMcp.length > 0) E.push("--plugin-dir-no-mcp");
          if (w) E.push(w.name);
          if (E.length > 0) {
            let {
              exitWithError: b
            } = await import("B:/~BUN/root/chunk-gcjetqnn.js");
            b(w ? `${h(E)} ${w.hint}` : h(E))
          }
        }
      }
      let {
        isAgentsFleetEnabled: D,
        ensureFleetGateHydrated: I,
        fleetGateRejected: M,
        consumeAgentViewRelaunchMarker: z
      } = await import("B:/~BUN/root/chunk-qtq0edp3.js");
      if (await I({
          kickGrowthBook: !1
        }), D()) {
        let [{
          applyFleetViewHostWindowsEnv: u
        }, {
          createRoot: h
        }, {
          getBaseRenderOptions: E
        }, {
          resolve: b
        }, {
          getRootSession: G,
          setCliSessionConfigCarried: V,
          setIsInteractive: F,
          setRestrictedSession: Y,
          setSessionStartType: dt
        }, {
          cliCarriesSessionConfig: mt
        }, {
          pinStorageV5: ut
        }, {
          appliedSettingSourcesFlagValue: gt
        }] = await Promise.all([import("B:/~BUN/root/chunk-2ad7v528.js"), import("B:/~BUN/root/chunk-7kb25cj2.js"), import("B:/~BUN/root/chunk-njw9q22k.js"), import("path"), import("B:/~BUN/root/chunk-kyqapdq5.js"), import("B:/~BUN/root/chunk-8kd2vjnp.js"), import("B:/~BUN/root/chunk-z2xz1866.js"), import("B:/~BUN/root/chunk-e9symh8e.js")]), Z = {
          ...a.config,
          settingSources: gt()
        }, d = ut(c), j;
        if (H() && d !== void 0) {
          let [{
            credentialsStoreFor: p
          }, {
            setGrowthBookCredentials: O,
            setGrowthBookStorageBackend: k
          }, {
            primeFastPathCredentials: q
          }] = await Promise.all([import("B:/~BUN/root/chunk-1dvh6pxa.js"), import("B:/~BUN/root/chunk-7qwqa2vj.js"), import("B:/~BUN/root/chunk-tjtr18t7.js")]);
          j = p(d), O(j), k(d), await q(j), await S(d)
        }
        import("B:/~BUN/root/chunk-zwpng6g5.js").then(({
          resolveSetting: p
        }) => {
          let {
            value: O
          } = p("theme", "dark");
          if (O.startsWith("custom:")) import("B:/~BUN/root/chunk-y6cvrpkq.js").then((k) => k.loadCustomThemes(d))
        });
        let ft = z();
        F(!0), V(mt({
          ...Z,
          ...L
        })), Y(a.config.restricted), dt("agents_view");
        let Q = () => {};
        process.on("unhandledRejection", Q);
        let X = Promise.resolve(),
          tt = () => {},
          wt = new Promise((p) => {
            tt = p
          });
        setImmediate(async () => {
          if (H() && d !== void 0) try {
            let [{
              credentialsStoreFor: p
            }, {
              composePolicyLimitsClient: O,
              primePolicyLimitsCache: k
            }] = await Promise.all([import("B:/~BUN/root/chunk-1dvh6pxa.js"), import("B:/~BUN/root/chunk-mjxpcxa7.js")]);
            O({
              storageV5: d,
              credentials: p(d)
            }), await k(d)
          } catch (p) {
            import("B:/~BUN/root/chunk-589gejwf.js").then(({
              logForDebugging: O
            }) => O(`Policy limits: start-up composition on the agents path failed: ${p instanceof Error?p.message:String(p)}`, {
              level: "warn"
            }))
          }
          X = Promise.all([import("B:/~BUN/root/chunk-kqy6dwqq.js"), import("B:/~BUN/root/chunk-pd2exn23.js"), import("B:/~BUN/root/chunk-b3g73ft3.js"), import("B:/~BUN/root/chunk-me7h05sq.js"), import("B:/~BUN/root/chunk-m1txwwpz.js"), import("B:/~BUN/root/chunk-v5d9xtjz.js"), import("B:/~BUN/root/chunk-7qwqa2vj.js"), import("B:/~BUN/root/chunk-a5p74awa.js"), import("B:/~BUN/root/chunk-argnxj0m.js"), import("B:/~BUN/root/chunk-0frr9mwc.js"), import("B:/~BUN/root/chunk-12npfqes.js"), import("B:/~BUN/root/chunk-589gejwf.js")]).then(([{
            setupGracefulShutdown: p
          }, {
            initializeErrorLogSink: O
          }, {
            initializeAnalyticsSink: k
          }, {
            initialize1PEventLogging: q
          }, {
            logEvent: Pt
          }, {
            captureTeammateModeSnapshotIfEnabled: St
          }, {
            initializeGrowthBook: vt
          }, {
            initializeTelemetryAfterTrust: Dt
          }, {
            checkHasTrustDialogAccepted: ot,
            watchGlobalConfigThroughStorage: At
          }, {
            applyConfigEnvironmentVariables: Lt
          }, {
            setRepoDetectionGuards: yt
          }, {
            initDefaultDebugLog: Rt
          }]) => {
            if (p({
                storageV5: d,
                credentials: j
              }), yt({
                trustProbe: ot
              }), vt().catch(() => {}), O(), k(), q(d), H() && d !== void 0) Rt({
              storageV5: d
            }), At(d);
            return wt.then(() => {
              if (ot()) Lt(), Dt(d)
            }), Pt("tengu_fleetview", {
              defaultToAgentsView: r,
              relaunch: ft
            }), St()
          }).finally(() => process.off("unhandledRejection", Q)), import("B:/~BUN/root/chunk-gmg7qzdc.js").then((p) => p.startBackgroundHousekeeping(G().host, d))
        }), o(), u();
        let K = L?.permissionMode === "bypassPermissions" || L?.allowBypass ? await import("B:/~BUN/root/chunk-9cys38qc.js") : void 0;
        K?.refuseBypassUnderRoot(L);
        let et = K?.applyBypassPolicyGate(L) ?? L,
          J = await h(E(!1)),
          {
            ensureAgentsWorkspaceTrust: ht,
            agentsTrustDecision: Et
          } = await import("B:/~BUN/root/chunk-r3behs4n.js");
        if (await ht(J, Et(), d), tt(), K) await K.ensureAgentsBypassConsent(J, et, d);
        let it = await import("B:/~BUN/root/chunk-qtq0edp3.js"),
          _t = {
            cwdFilter: a.cwdFilter,
            dispatchExtraArgs: VX($6e(Z, b)),
            dispatchDefaults: et,
            entryChannel: it.isListReturnRelaunch() ? "list_return" : C ? "cli_agents" : "default_home",
            storageV5: d,
            credentials: j
          };
        {
          let {
            mountFleetViewWithComposerBack: p
          } = await import("B:/~BUN/root/chunk-cna8f91k.js");
          await p(J, _t)
        }
        await X.catch(() => {});
        let {
          gracefulShutdown: Ct
        } = await import("B:/~BUN/root/chunk-kqy6dwqq.js");
        await Ct(0, "other", {
          suppressResumeHint: !0
        });
        return
      }
      if (C) return M("claude agents")
    }
  }
  if (t[0] === "self-hosted-runner") {
    g("cli_self_hosted_runner_path");
    let e = t[1];
    if (e === "orchestrator") {
      let {
        selfHostedRunnerOrchestratorMain: i
      } = await import("B:/~BUN/root/chunk-jr406n9z.js");
      await i(t.slice(2));
      return
    }
    if (e === "setup") {
      let {
        selfHostedRunnerSetupMain: i
      } = await import("B:/~BUN/root/chunk-09nabwj1.js");
      await i(t.slice(2), c);
      return
    }
    if (e === "doctor") {
      let {
        selfHostedRunnerDoctorMain: i
      } = await import("B:/~BUN/root/chunk-gjk8ns6c.js");
      await i(t.slice(2), c);
      return
    }
    if (e === "code-sign") {
      let {
        selfHostedRunnerCodeSignMain: i
      } = await import("B:/~BUN/root/chunk-a9heap0w.js");
      await i(t.slice(2));
      return
    }
    if (e === "decode-token") {
      let {
        selfHostedRunnerDecodeTokenMain: i
      } = await import("B:/~BUN/root/chunk-gsv4mn2h.js");
      await i(t.slice(2));
      return
    }
    let {
      selfHostedRunnerMain: o
    } = await import("B:/~BUN/root/chunk-yhewbdva.js");
    await o(t.slice(1));
    return
  }
  if ((t.includes("--tmux") || t.includes("--tmux=classic")) && (t.includes("-w") || t.includes("--worktree") || t.some((e) => e.startsWith("--worktree=")))) {
    g("cli_tmux_worktree_fast_path");
    let {
      eagerLoadSettings: e
    } = await import("B:/~BUN/root/chunk-9ham2qj7.js");
    e();
    let {
      loadFastPathPolicy: o
    } = await import("B:/~BUN/root/chunk-pyr07cpq.js");
    {
      let m = await o(c);
      if (m) {
        let {
          exitWithError: v
        } = await import("B:/~BUN/root/chunk-gcjetqnn.js");
        v(m)
      }
    }
    let {
      isWorktreeModeEnabled: i
    } = await import("B:/~BUN/root/chunk-k6mn0b8c.js");
    if (i()) {
      let [{
        execIntoTmuxWorktree: m
      }, {
        pinStorageV5: v
      }, {
        initDefaultDebugLog: A
      }] = await Promise.all([import("B:/~BUN/root/chunk-9afq3sx6.js"), import("B:/~BUN/root/chunk-z2xz1866.js"), import("B:/~BUN/root/chunk-589gejwf.js")]), S = v(c), s;
      if (H() && S !== void 0) {
        A({
          storageV5: S
        });
        let [{
          credentialsStoreFor: l
        }, {
          setGrowthBookCredentials: w,
          setGrowthBookStorageBackend: D
        }, {
          primeFastPathCredentials: I
        }] = await Promise.all([import("B:/~BUN/root/chunk-1dvh6pxa.js"), import("B:/~BUN/root/chunk-7qwqa2vj.js"), import("B:/~BUN/root/chunk-tjtr18t7.js")]);
        s = l(S), w(s), D(S), await I(s);
        let {
          seedInstallIDs: M
        } = await import("B:/~BUN/root/chunk-argnxj0m.js");
        await M(S)
      }
      let r = await m(t, S, s);
      if (r.handled) return;
      let {
        exitWithError: f
      } = await import("B:/~BUN/root/chunk-gcjetqnn.js");
      f(r.error)
    }
  }
  if (t.length === 1 && (t[0] === "--update" || t[0] === "--upgrade")) process.argv = [process.argv[0], process.argv[1], "update"];
  let x = t.indexOf("--");
  if ((x === -1 ? t : t.slice(0, x)).includes("--bare")) process.env.CLAUDE_CODE_SIMPLE = "1";
  let {
    NON_REPL_SUBCOMMANDS: R,
    isMcpServeInvocation: T,
    isPluginEvalInvocation: N,
    isRemoteControlInvocation: at,
    isAgentsJsonInvocation: nt
  } = await import("B:/~BUN/root/chunk-wwv54evz.js");
  if (!R.has(process.argv[2] ?? "") && !T(process.argv.slice(2)) && !N(process.argv.slice(2)) && !at(process.argv.slice(2)) && !nt(process.argv.slice(2))) {
    let {
      startCapturingEarlyInput: e
    } = await import("B:/~BUN/root/chunk-p7db4gpg.js");
    e()
  }
  let [{
    startMdmRawRead: ct
  }, {
    startKeychainPrefetch: lt
  }] = await Promise.all([import("B:/~BUN/root/chunk-waftynfx.js"), import("B:/~BUN/root/chunk-94f53rvq.js")]);
  ct(), lt(), g("cli_before_main_import"), (await import("B:/~BUN/root/chunk-4zn7czak.js")).configureZodForStartup();
  let {
    main: pt
  } = await import("B:/~BUN/root/chunk-1d7sm668.js");
  g("cli_after_main_import"), await pt(c), g("cli_after_main_complete")
}
Mt();
