// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Fe } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { L, j, ke, fgn, Nzo, bF, qGe, Bn, t_, KGe, TVo } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { H } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Nt } from "B:/~BUN/root/chunk-89mss1tj.js";
import { _ye } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { wS, v9t, bfs, _He, Tpe, Ys, My, Iq, rwr, Yn, Ns } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { wr, mhn } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { Hd } from "B:/~BUN/root/chunk-nggrknsv.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { zln, o2, Ht, Qi, E, yb, Y$t, Ms, vm, gA, UM, Ce, ue, XDo } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { xe } from "B:/~BUN/root/chunk-8pmnanyd.js";
import { h4 } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { aA } from "B:/~BUN/root/chunk-429xgjya.js";
import { eUe } from "B:/~BUN/root/chunk-25j8tcak.js";
import { yw } from "B:/~BUN/root/chunk-9w4ppz44.js";
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { anr } from "B:/~BUN/root/chunk-rq3efhmf.js";
import { KDe } from "B:/~BUN/root/chunk-a05n48hk.js";
import { uC } from "B:/~BUN/root/chunk-8aq76x8d.js";
import { Xre } from "B:/~BUN/root/chunk-3md9ngvz.js";
import { s, n, TR } from "B:/~BUN/root/chunk-damrp3r8.js";
import { Tvn, O5s, wYr } from "B:/~BUN/root/chunk-crm8tx9v.js";
import { $tt, AF } from "B:/~BUN/root/chunk-35d1zgdy.js";
import { wot } from "B:/~BUN/root/chunk-6g3t7qy0.js";
import { fSn, Y3o } from "B:/~BUN/root/chunk-bzy45thk.js";
import { MP, PTt, IJr } from "B:/~BUN/root/chunk-v1edtzvj.js";
import { sSn } from "B:/~BUN/root/chunk-9ex20mbk.js";
import { jEn } from "B:/~BUN/root/chunk-y2qqz0fg.js";
import { XVe } from "B:/~BUN/root/chunk-tz52j775.js";
import { Sst } from "B:/~BUN/root/chunk-adys8ehb.js";
import { OKo } from "B:/~BUN/root/chunk-bshaz6nc.js";
import { Owt } from "B:/~BUN/root/chunk-mg6ef2wv.js";
import { Bre as onChangeAppState } from "B:/~BUN/root/chunk-90dg0j6s.js";
import { e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { Lts } from "B:/~BUN/root/chunk-rhcs3fcg.js";
import { ae, P, A, y, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { S } from "B:/~BUN/root/chunk-ef0msk7r.js";
B();
import { openSync as Pe, writeSync as Re } from "fs";
import { homedir as Ee } from "os";
var Me = {
  iterm: "iTerm",
  "iterm.app": "iTerm",
  ghostty: "Ghostty",
  kitty: "kitty",
  alacritty: "Alacritty",
  wezterm: "WezTerm",
  apple_terminal: "Terminal"
};
function se(o) {
  return;
}
class X {
  frameDurations = [];
  totalFrames = 0;
  firstRenderTime;
  lastRenderTime;
  record(o) {
    let d = performance.now();
    if (this.firstRenderTime === void 0) this.firstRenderTime = d;
    if (this.lastRenderTime = d, this.totalFrames++, this.frameDurations.push(o), this.frameDurations.length > 3600) this.frameDurations.splice(0, this.frameDurations.length >> 1);
  }
  getMetrics() {
    if (this.totalFrames === 0 || this.firstRenderTime === void 0 || this.lastRenderTime === void 0) return;
    let o = this.lastRenderTime - this.firstRenderTime;
    if (o <= 0) return;
    let d = this.totalFrames / (o / 1000),
      h = this.frameDurations.slice().sort((itemA, itemB) => itemB - itemA),
      M = Math.max(0, Math.ceil(h.length * 0.01) - 1),
      C = h[M],
      k = C > 0 ? 1000 / C : 0;
    return {
      averageFps: Math.round(d * 100) / 100,
      low1PctFps: Math.round(k * 100) / 100
    };
  }
}
function Je(et) {
  return et(!1);
}
function Ze(tt) {
  return tt.execRelaunch();
}
function Qe(rt) {
  rt(), import("B:/~BUN/root/chunk-9b0kte3c.js").then(Ze);
}
function Xe(ot) {
  return {
    ...ot,
    phase: "save-failed"
  };
}
function x3s(o) {
  if (a.CLAUBBIT || !Ms()) return;
  bF(!0), yw(o);
}
function P3s(o) {
  Ce(d => ({
    ...d,
    hasCompletedOnboarding: !0,
    lastOnboardingVersion: {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.303",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-18T20:20:57Z",
      GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION
  }), o);
}
function PKo(o, d) {
  return async h => {
    let M = await fSn(o),
      C = Sst();
    if (M.pendingServers.length === 0) return null;
    if (C.length > 0) {
      let k = L(C.flatMap(item => item.file ? [Hd(item.file)] : [])).join(", ");
      return p("mcp_project_approval_dialog", "mcp_project_approval_skipped_settings_errors"), d({
        key: "mcp-approval-skipped",
        text: `skipping .mcp.json server approval (settings errors${k ? ` in ${k}` : ""}) \xB7 run \`claude doctor\` to list them, fix them, then restart`
      }), null;
    }
    try {
      return await Y3o(M, k => {
        try {
          let D = Ie(k);
          if (D) d(D);
        } catch (error) {
          l(H(error));
        } finally {
          h();
        }
      }, o);
    } catch (error) {
      throw m("mcp_project_approval_dialog", "mcp_project_approval_dialog_threw"), error;
    }
  };
}
function Ie(o) {
  if (o.persistFailed) return m("mcp_project_approval_dialog", "mcp_approval_persist_failed"), {
    key: "mcp-approval-persist-failed",
    text: "one or more of your MCP server choices could not be saved (check permissions on .claude/settings.local.json) \xB7 you will be asked again next startup"
  };
  let d = gA();
  if (fgn().some(item => item.workspaceKey === d) && !vm() && UM({
    onIndeterminate: "tracked"
  })) return p("mcp_project_approval_dialog", "mcp_approval_persist_gated"), {
    key: "mcp-approval-persist-gated",
    text: "your MCP server choices apply to this session only (workspace not explicitly trusted; .claude/settings.local.json is gated) \xB7 to persist, add them to enabledMcpjsonServers in ~/.claude/settings.json"
  };
  return g("mcp_project_approval_dialog"), null;
}
async function GZs(o, d, beforeExit) {
  return WQn(o, d, {
    color: "error",
    beforeExit: beforeExit
  });
}
async function WQn(o, children, h) {
  let color = h?.color,
    C = h?.exitCode ?? 1;
  if (AF(o, color ? e(n, {
    color: color,
    children: children
  }) : e(n, {
    children: children
  })), o.unmount(), await h?.beforeExit?.(), C !== 0) {
    let {
      setBgExitCause: setBgExitCause,
      setBgExitDetail: setBgExitDetail
    } = await import("B:/~BUN/root/chunk-gb2dycz6.js");
    setBgExitCause("exit_with_message"), setBgExitDetail("exit_with_message", children);
  }
  let {
    flushAnalyticsSinks: flushAnalyticsSinks
  } = await import("B:/~BUN/root/chunk-awz1gsaf.js");
  await flushAnalyticsSinks();
  let {
      drainRegisteredWriteQueues: drainRegisteredWriteQueues
    } = await import("B:/~BUN/root/chunk-qks0s8d2.js"),
    {
      withTimeout: withTimeout
    } = await import("B:/~BUN/root/chunk-k3t3758w.js");
  await withTimeout(drainRegisteredWriteQueues(), 2000, "write queue drain timeout (exitWithMessage)").catch(() => {}), process.exit(C);
}
function aCe(o, d, h) {
  return new Promise((M, C) => {
    $tt(o, [k => d(D => {
      M(D), k();
    })], {
      session: j(),
      onChangeAppState: h?.onChangeAppState,
      marksJobBlocked: !0
    }).catch(C);
  });
}
async function tzr(o, d, h, M, C) {
  let k = AF(o, d);
  XDo(), wYr(h, M, C);
  try {
    if ((await Promise.race([o.waitUntilExit().then(() => "exited"), k.replaced.then(() => "replaced")])) === "replaced") return;
  } catch (error) {
    let b = H(error),
      O = (await jEn().catch(() => !1)) ? " It happened while the fullscreen renderer was starting, so the next launch will use the classic renderer (CLAUDE_CODE_DISABLE_ALTERNATE_SCREEN=1 forces that any time)." : "";
    if (Iq(`Claude Code exited after an unrecoverable interface error (${b.message}).${O}`), Ht() || mhn()) throw error;
    try {
      eUe(b, "unhandled_rejection");
    } catch {}
    await Yn(1, "other");
    return;
  }
  await rwr.of(h.host).runBeforeInteractiveShutdown(), await Yn(0);
}
var Oe = 2000,
  le = "GB post-onboarding init";
async function VZs(session, d, permissionMode, allowDangerouslySkipPermissions, commands, claudeInChrome, devChannels, offerClaudeInChrome, storageV5, credentials, askCloudDefaultReason) {
  let v = {
      onboardingShown: !1,
      onboardingSkippedSignIn: !1,
      mcpApprovalSkipWarning: null,
      claudeInChromeAccepted: !1
    },
    I = x => {
      v.mcpApprovalSkipWarning = x;
    };
  if (Ht() || a.CLAUDE_BRIDGE_REATTACH_SESSION) {
    let x = Ms(),
      u = x || a.CLAUDE_BG_WORKSPACE_TRUSTED === !0 && _ye(ke(), Ee());
    if (!u) t("Workspace trust is not recorded for this directory; continuing as an untrusted session (hooks and project settings env stay off)", {
      level: "warn"
    });
    let f = [() => {
      if (u) bF(!0);
      if (Y$t({
        preservePendingExposures: !0
      }), Qi().catch(_ => l(H(_))), u) _He(session), import("B:/~BUN/root/chunk-p94xt7ba.js").then(_ => _.loadHooksModulesHeldForTrust(storageV5, credentials)).catch(_ => l(H(_)));
      return null;
    }, PKo(storageV5, I), () => {
      if (u) aA(), import("B:/~BUN/root/chunk-4pk5pzet.js").then(_ => _.maybePrewarmRecallIndex(session)), yw(storageV5);
      if (Tvn(session.host), sSn(), u) {
        if (!x && !Bn() && !wr()) De(storageV5, credentials);
        setImmediate(KDe, storageV5);
      }
      return null;
    }];
    return await $tt(d, f, {
      session: session,
      storageV5: storageV5
    }), v;
  }
  if (Fe(!1) || a.IS_DEMO) return x3s(storageV5), Tvn(session.host), sSn(), v;
  return await $tt(d, O3s({
    session: session,
    permissionMode: permissionMode,
    allowDangerouslySkipPermissions: allowDangerouslySkipPermissions,
    commands: commands,
    claudeInChrome: claudeInChrome,
    devChannels: devChannels,
    offerClaudeInChrome: offerClaudeInChrome,
    storageV5: storageV5,
    credentials: credentials,
    askCloudDefaultReason: askCloudDefaultReason
  }, v), {
    session: session,
    onChangeAppState: onChangeAppState,
    marksJobBlocked: !0,
    storageV5: storageV5
  }), v;
}
function O3s({
  session: session_2,
  permissionMode: permissionMode_2,
  allowDangerouslySkipPermissions: allowDangerouslySkipPermissions_2,
  commands: commands_2,
  claudeInChrome: claudeInChrome_2,
  devChannels: k,
  offerClaudeInChrome: offerClaudeInChrome_2,
  storageV5: storageV5_2,
  credentials: credentials_2,
  askCloudDefaultReason: askCloudDefaultReason_2
}, T) {
  let v = ue(),
    I = !1,
    x = !0;
  return [u => {
    if (v.hasCompletedOnboarding && a.CLAUDE_CODE_POWERUP_ONBOARDING !== "banner" && a.CLAUDE_CODE_POWERUP_ONBOARDING !== "step") return null;
    return T.onboardingShown = !0, import("B:/~BUN/root/chunk-tk7r2v5c.js").then(({
      Onboarding: Onboarding
    }) => e(Onboarding, {
      host: session_2.host,
      onDone: ({
        skippedSignIn: skippedSignIn
      }) => {
        T.onboardingSkippedSignIn = skippedSignIn, P3s(storageV5_2), u();
      }
    }));
  }, onDone => {
    if (a.CLAUBBIT) return null;
    if (x = Ms(), x && !XVe()) return null;
    return I = !0, (x ? Promise.resolve(!1) : Lts()).then(f => {
      if (f) return qGe(!0), null;
      return import("B:/~BUN/root/chunk-fwfv3kn6.js").then(({
        TrustDialog: TrustDialog
      }) => e(TrustDialog, {
        commands: commands_2,
        onDone: onDone
      }));
    });
  }, () => {
    if (a.CLAUBBIT) return null;
    if (bF(!0), I) {
      if (My("post-trust: re-discover project @skills-dir plugins"), Tpe(credentials_2)) Ys(storageV5_2, credentials_2).catch(() => {});
    }
    if (import("B:/~BUN/root/chunk-p94xt7ba.js").then(u => u.loadHooksModulesHeldForTrust(storageV5_2, credentials_2)).catch(u => l(H(u))), Y$t({
      preservePendingExposures: !0
    }), v.hasCompletedOnboarding) return Qi().catch(u => l(H(u))), null;
    return o2(), pe();
  }, () => {
    if (a.CLAUBBIT) return null;
    return null;
  }, u => a.CLAUBBIT ? null : PKo(storageV5_2, f => {
    T.mcpApprovalSkipWarning = f;
  })(u), async u => {
    if (a.CLAUBBIT || !(await bfs(session_2, storageV5_2))) return null;
    let externalIncludes = v9t(await wS(session_2, !0, storageV5_2, credentials_2)),
      {
        ClaudeMdExternalIncludesDialog: ClaudeMdExternalIncludesDialog
      } = await import("B:/~BUN/root/chunk-1kmyg56a.js");
    return e(ClaudeMdExternalIncludesDialog, {
      onDone: () => u(),
      isStandaloneDialog: !0,
      externalIncludes: externalIncludes
    });
  }, () => {
    if (OKo(storageV5_2), se(storageV5_2), aA(), Tvn(session_2.host), import("B:/~BUN/root/chunk-4pk5pzet.js").then(u => u.maybePrewarmRecallIndex(session_2)), yw(storageV5_2), sSn(), I && !x && !Bn() && !wr()) De(storageV5_2, credentials_2);
    return setImmediate(KDe, storageV5_2), O5s(session_2.host, v) ? pe() : null;
  }, async u => null, async u => {
    if (!(await wot(storageV5_2, credentials_2))) return null;
    let {
      GroveDialog: GroveDialog
    } = await import("B:/~BUN/root/chunk-e8gjdzy3.js");
    return e(GroveDialog, {
      showIfAlreadyViewed: !1,
      location: T.onboardingShown ? "onboarding" : "policy_update_modal",
      onDone: _ => {
        if (_ !== "escape") {
          u();
          return;
        }
        i("tengu_grove_policy_exited", {}), Ns(0), T.onboardingShown = !1, T.claudeInChromeAccepted = !1, u("stop");
      }
    });
  }, async u => {
    if (Owt().status !== "not_started") return null;
    let {
      ProTrialStartScreen: ProTrialStartScreen
    } = await import("B:/~BUN/root/chunk-26e02qtf.js");
    return i("tengu_pro_trial_start_screen_shown", {}), e(ProTrialStartScreen, {
      onDone: () => u(),
      storageV5: storageV5_2,
      credentials: credentials_2
    });
  }, async u => {
    if (!T.onboardingShown) return null;
    let {
      resolvePowerupDiscoveryArm: resolvePowerupDiscoveryArm
    } = await import("B:/~BUN/root/chunk-0kqt3zg9.js");
    if (resolvePowerupDiscoveryArm() !== "step") return null;
    let {
      PowerupDiscoveryStep: PowerupDiscoveryStep
    } = await import("B:/~BUN/root/chunk-a7ez1734.js");
    return e(PowerupDiscoveryStep, {
      onDone: () => u()
    });
  }, u => {
    let customApiKeyTruncated = zln();
    if (!customApiKeyTruncated) return null;
    return import("B:/~BUN/root/chunk-7z9tqm2j.js").then(({
      ApproveApiKey: ApproveApiKey
    }) => e(ApproveApiKey, {
      customApiKeyTruncated: customApiKeyTruncated,
      onDone: () => u()
    }));
  }, me("bedrock", storageV5_2), me("vertex", storageV5_2), async onDone_2 => {
    let f;
    try {
      f = await IJr();
    } catch (error) {
      return l(error), null;
    }
    let {
      lines: lines,
      hasHardFailure: hasHardFailure
    } = f;
    if (lines.length === 0) return null;
    return e(ye, {
      afterMs: hasHardFailure ? 4000 : 1500,
      onDone: onDone_2,
      children: e(s, {
        flexDirection: "column",
        children: lines.map(F => e(n, {
          color: "warning",
          children: F
        }, F))
      })
    });
  }, u => {
    if (permissionMode_2 !== "bypassPermissions" && !allowDangerouslySkipPermissions_2 || h4()) return null;
    return import("B:/~BUN/root/chunk-f0zehd97.js").then(({
      BypassPermissionsModeDialog: BypassPermissionsModeDialog
    }) => e(BypassPermissionsModeDialog, {
      onAccept: () => u(),
      storageV5: storageV5_2
    }));
  }, ...[], async u => {
    if (t_().length === 0 && (k?.length ?? 0) === 0) return null;
    if (await yb("tengu_harbor"), !k || k.length === 0) return null;
    let [{
        isChannelsOffForSession: isChannelsOffForSession
      }, {
        isChannelsPolicyBlocked: isChannelsPolicyBlocked
      }, {
        getSettingsForSource: getSettingsForSource
      }] = await Promise.all([import("B:/~BUN/root/chunk-49rg5kkp.js"), import("B:/~BUN/root/chunk-4av3k09b.js"), import("B:/~BUN/root/chunk-3pxr4gzq.js")]),
      F = () => {
        let N = k.map(item => ({
          ...item,
          dev: !0
        }));
        KGe(t_().concat(N)), TVo(!0);
      };
    if (isChannelsOffForSession() || xe() !== "firstParty" || isChannelsPolicyBlocked(getSettingsForSource("policySettings"))) return F(), null;
    let {
      DevChannelsDialog: DevChannelsDialog
    } = await import("B:/~BUN/root/chunk-xtac3pkx.js");
    return e(DevChannelsDialog, {
      channels: k,
      onAccept: () => {
        F(), u();
      }
    });
  }, u => {
    if (!claudeInChrome_2 || ue().hasCompletedClaudeInChromeOnboarding) return null;
    return import("B:/~BUN/root/chunk-yf2eg6wb.js").then(({
      ClaudeInChromeOnboarding: ClaudeInChromeOnboarding
    }) => e(ClaudeInChromeOnboarding, {
      onDone: () => u()
    }));
  }, async u => {
    if (!offerClaudeInChrome_2) return null;
    let {
        isChromeExtensionInstalled: isChromeExtensionInstalled
      } = await import("B:/~BUN/root/chunk-qr3nc3ve.js"),
      _ = await Nt(isChromeExtensionInstalled(), 1500, "chrome extension scan timed out before offer").catch(() => !0),
      U = Boolean(ue().chromeExtension?.pairedDeviceId);
    if (!_ && !U) return t("[Claude in Chrome] Skipping offer: extension not present locally (stale cache)"), null;
    await Nt(Qi().catch(() => {}), 1500, "GrowthBook init timed out before chrome offer").catch(() => {});
    let F = E("tengu_chrome_auto_enable", !1),
      z = ue().claudeInChromeDefaultEnabled !== void 0,
      {
        isChromeServerPolicyDenied: isChromeServerPolicyDenied
      } = await import("B:/~BUN/root/chunk-qdepr38p.js"),
      {
        isClaudeInChromeAllowed: isClaudeInChromeAllowed
      } = await import("B:/~BUN/root/chunk-qr3nc3ve.js");
    if (isChromeServerPolicyDenied() || !isClaudeInChromeAllowed()) return t("[Claude in Chrome] Skipping offer: blocked by enterprise MCP config, managed deniedMcpServers policy, or organization policy (allow_claude_browser_extension)"), null;
    if (z) return t("[Claude in Chrome] Skipping offer: decision already recorded (another instance answered)"), T.claudeInChromeAccepted = ue().claudeInChromeDefaultEnabled === !0, null;
    if (!F) return t("[Claude in Chrome] Skipping offer: tengu_chrome_auto_enable no longer set (stale GB cache)"), null;
    let {
      ChromeAutoEnableDialog: ChromeAutoEnableDialog
    } = await import("B:/~BUN/root/chunk-3zhqqp39.js");
    return e(ChromeAutoEnableDialog, {
      onDone: ie => {
        T.claudeInChromeAccepted = ie, u();
      },
      isDontAskMode: permissionMode_2 === "dontAsk",
      isAutoMode: permissionMode_2 === "auto"
    });
  }];
}
async function pe() {
  let o = Date.now();
  try {
    await Nt(Qi(), Oe, le), t(`[STARTUP] post-onboarding GB await ${Date.now() - o}ms`);
  } catch (error) {
    if (t(`[STARTUP] post-onboarding GB await ${Date.now() - o}ms: ${error}`, {
      level: "warn"
    }), !(error instanceof Error && error.message === le)) l(H(error));
  }
  return null;
}
function ye(o) {
  let C = w(4),
    {
      afterMs: afterMs,
      onDone: onDone_3,
      children: children_2
    } = o,
    k,
    D;
  if (C[0] !== afterMs || C[1] !== onDone_3) k = () => {
    let b = setTimeout(onDone_3, afterMs);
    return () => clearTimeout(b);
  }, D = [afterMs, onDone_3], C[0] = afterMs, C[1] = onDone_3, C[2] = k, C[3] = D;else k = C[2], D = C[3];
  return P(k, D), children_2;
}
var re = {
  bedrock: {
    accepted: "tengu_bedrock_upgrade_accepted",
    declined: "tengu_bedrock_upgrade_declined",
    saveFailed: "tengu_bedrock_upgrade_save_failed",
    relaunch: "tengu_bedrock_upgrade_relaunch"
  },
  vertex: {
    accepted: "tengu_vertex_upgrade_accepted",
    declined: "tengu_vertex_upgrade_declined",
    saveFailed: "tengu_vertex_upgrade_save_failed",
    relaunch: "tengu_vertex_upgrade_relaunch"
  }
};
function me(provider, d) {
  let h = re[provider];
  return async M => {
    if (xe() !== provider) return null;
    try {
      let [C, {
          upgradeKey: upgradeKey
        }] = await Promise.all([provider === "bedrock" ? import("B:/~BUN/root/chunk-taqdy4fx.js").then(v => PTt("bedrock-upgrade", v.findBedrockUpgradeCandidates()).then(I => I.map(item => ({
          ...item,
          toId: item.toBedrockId
        })))) : import("B:/~BUN/root/chunk-ebxvn4yg.js").then(v => PTt("vertex-upgrade", v.findVertexUpgradeCandidates()).then(I => I.map(item => ({
          ...item,
          toId: item.toVertexId
        })))), import("B:/~BUN/root/chunk-7p7r9p97.js")]),
        D = (provider === "bedrock" ? ue().bedrockDeclinedUpgrades : ue().vertexDeclinedUpgrades) ?? {},
        pending = C.filter(item => D[item.tier] !== upgradeKey(item));
      if (pending.length === 0) return null;
      let [{
        updateSettingsForSource: updateSettingsForSource
      }, {
        ThirdPartyModelUpgradeDialog: O
      }] = await Promise.all([import("B:/~BUN/root/chunk-3pxr4gzq.js"), import("B:/~BUN/root/chunk-kxft62zv.js")]);
      async function answer(v, I) {
        let tier = c(v.tier);
        if (!I) return await Ce(_ => {
          let U = provider === "bedrock" ? "bedrockDeclinedUpgrades" : "vertexDeclinedUpgrades";
          return {
            ..._,
            [U]: {
              ..._[U],
              [v.tier]: upgradeKey(v)
            }
          };
        }, d), i(h.declined, {
          tier: tier,
          from_key: c(v.fromKey),
          to_key: c(v.toKey)
        }), !1;
        let env = v.tier === "haiku" ? {
            ANTHROPIC_DEFAULT_HAIKU_MODEL: v.toId,
            ...(v.envVar === "ANTHROPIC_SMALL_FAST_MODEL" && {
              ANTHROPIC_SMALL_FAST_MODEL: v.toId
            })
          } : {
            [v.envVar]: v.toId
          },
          {
            error: error_2
          } = await updateSettingsForSource("userSettings", {
            env: env
          }, void 0, d);
        if (error_2) return i(h.saveFailed, {
          tier: tier
        }), !1;
        for (let _ of Object.keys(env)) process.env[_] = v.toId;
        return i(h.accepted, {
          tier: tier,
          from_key: c(v.fromKey),
          to_key: c(v.toKey)
        }), !0;
      }
      return e(we, {
        provider: provider,
        pending: pending,
        answer: answer,
        onDone: () => M(),
        Dialog: O
      });
    } catch (error) {
      return l(error), null;
    }
  };
}
function we(o) {
  let D = w(27),
    {
      provider: provider_2,
      pending: pending_2,
      answer: answer_2,
      onDone: onDone_4,
      Dialog: Dialog
    } = o,
    b;
  if (D[0] === S) b = {
    at: 0,
    acceptedAny: !1,
    phase: "asking"
  }, D[0] = b;else b = D[0];
  let [R, O] = y(b),
    {
      at: at,
      acceptedAny: acceptedAny,
      phase: phase
    } = R,
    {
      exit: exit
    } = TR(),
    u = A(null),
    f = pending_2[at],
    _;
  if (D[1] !== pending_2.length) _ = U => O(F => {
    let acceptedAny_2 = F.acceptedAny || U;
    if (F.at + 1 < pending_2.length) {
      return {
        at: F.at + 1,
        acceptedAny: acceptedAny_2,
        phase: "asking"
      };
    }
    return {
      ...F,
      acceptedAny: acceptedAny_2,
      phase: acceptedAny_2 ? "relaunching" : "done"
    };
  }), D[1] = pending_2.length, D[2] = _;else _ = D[2];
  let N = _,
    q,
    oe;
  if (D[3] !== N || D[4] !== exit || D[5] !== onDone_4 || D[6] !== phase || D[7] !== provider_2) q = () => {
    if (phase === "done") {
      onDone_4();
      return;
    }
    if (phase === "save-failed") {
      let ne = setTimeout(Je, 2000, N);
      return () => clearTimeout(ne);
    }
    if (phase === "relaunching") {
      i(re[provider_2].relaunch, {});
      let ie = setTimeout(Qe, 250, exit);
      return () => clearTimeout(ie);
    }
  }, oe = [phase, provider_2, N, onDone_4, exit], D[3] = N, D[4] = exit, D[5] = onDone_4, D[6] = phase, D[7] = provider_2, D[8] = q, D[9] = oe;else q = D[8], oe = D[9];
  if (P(q, oe), phase === "relaunching" && acceptedAny) {
    let G;
    if (D[10] === S) G = e(n, {
      dimColor: !0,
      children: "Restarting Claude Code to apply the new model\u2026"
    }), D[10] = G;else G = D[10];
    return G;
  }
  if (f === void 0 || phase === "done") {
    return null;
  }
  if (phase === "save-failed") {
    const G = MP[f.tier];
    let Y;
    if (D[11] !== G) Y = r(n, {
      color: "error",
      children: ["Failed to save ", G, " upgrade to settings."]
    }), D[11] = G, D[12] = Y;else Y = D[12];
    return Y;
  }
  const tierLabel = MP[f.tier];
  let onDone_5;
  if (D[13] !== N || D[14] !== answer_2 || D[15] !== at || D[16] !== f || D[17] !== onDone_4) onDone_5 = Ae => {
    if (u.current === at) {
      return;
    }
    u.current = at, answer_2(f, Ae).then(be => {
      if (Ae && !be) {
        O(Xe);
        return;
      }
      N(be);
    }, Ve => {
      l(Ve), onDone_4();
    });
  }, D[13] = N, D[14] = answer_2, D[15] = at, D[16] = f, D[17] = onDone_4, D[18] = onDone_5;else onDone_5 = D[18];
  let Te;
  if (D[19] !== Dialog || D[20] !== at || D[21] !== f.fromMarketingName || D[22] !== f.toId || D[23] !== f.toMarketingName || D[24] !== tierLabel || D[25] !== onDone_5) Te = e(Dialog, {
    tierLabel: tierLabel,
    fromName: f.fromMarketingName,
    toName: f.toMarketingName,
    toProviderId: f.toId,
    onDone: onDone_5
  }, at), D[19] = Dialog, D[20] = at, D[21] = f.fromMarketingName, D[22] = f.toId, D[23] = f.toMarketingName, D[24] = tierLabel, D[25] = onDone_5, D[26] = Te;else Te = D[26];
  return Te;
}
function qZs(o) {
  let d = 0,
    h = uC(o);
  if (h.stdin) i("tengu_stdin_interactive", {});
  let M = new X(),
    stats = anr();
  Nzo(stats);
  let CLAUDE_CODE_FRAME_TIMING_LOG = a.CLAUDE_CODE_FRAME_TIMING_LOG,
    D = -1,
    b = 0,
    R = Math.max(1, a.CLAUDE_CODE_FRAME_TIMING_SAMPLE_EVERY || 1);
  if (CLAUDE_CODE_FRAME_TIMING_LOG) try {
    D = Pe(CLAUDE_CODE_FRAME_TIMING_LOG, "a");
  } catch {}
  return {
    getFpsMetrics: () => M.getMetrics(),
    stats: stats,
    renderOptions: {
      ...h,
      onFrame: O => {
        if (M.record(O.durationMs), stats.observe("frame_duration_ms", O.durationMs), D >= 0 && O.phases) {
          let T = b++ % R === 0,
            v = JSON.stringify({
              total: O.durationMs,
              at: Date.now(),
              ...O.phases,
              ...(T && {
                rss: process.memoryUsage.rss(),
                cpu: process.cpuUsage()
              })
            }) + `
`;
          Re(D, v);
        }
        if (Xre()) return;
        for (let T of O.flickers) {
          if (T.reason === "resize") continue;
          let v = Date.now();
          if (v - d < 1000) i("tengu_flicker", {
            desiredHeight: T.desiredHeight,
            actualHeight: T.availableHeight,
            reason: T.reason
          });
          d = v;
        }
      }
    }
  };
}
function De(o, d) {
  import("B:/~BUN/root/chunk-1spwgdtz.js").then(h => h.startMemoryWatcher(o, d));
}
export { x3s, P3s, PKo, GZs, WQn, aCe, tzr, VZs, O3s, qZs };