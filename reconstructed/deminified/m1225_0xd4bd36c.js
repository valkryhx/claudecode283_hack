// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Ne } from "B:/~BUN/root/chunk-ekrhn4q1.js";
import { j, we, z1t, Y2r, gH, Yn, Wh, Lxe, Nqr } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { te } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Ht } from "B:/~BUN/root/chunk-17wqwt36.js";
import { Wxe } from "B:/~BUN/root/chunk-54p0h65d.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { pS, YCt, Vdo, hve, Zfe, SHn, Kn, yo, zZ, Ti, Eh } from "B:/~BUN/root/chunk-3jyp964r.js";
import { Xr, Hjt } from "B:/~BUN/root/chunk-4p6z9qq1.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { yHt, t$, vt, sp, x, Uu, Fut, ps, Yf, Wk, RI, Ee, le, bFr } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { U1 } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { Ie } from "B:/~BUN/root/chunk-sd4cj2qx.js";
import { zke } from "B:/~BUN/root/chunk-2n2hx639.js";
import { Ky } from "B:/~BUN/root/chunk-ewv6w8xv.js";
import { yx } from "B:/~BUN/root/chunk-ew8y0fm0.js";
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { Uwn } from "B:/~BUN/root/chunk-9hqq0jcs.js";
import { Q_e } from "B:/~BUN/root/chunk-4f21bd0q.js";
import { E5 } from "B:/~BUN/root/chunk-e1thvnpv.js";
import { s, n, ek } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { x4r } from "B:/~BUN/root/chunk-trwq4y1k.js";
import { Qzt } from "B:/~BUN/root/chunk-xwmqqrba.js";
import { tje, sO } from "B:/~BUN/root/chunk-eyqyx5gc.js";
import { HWe } from "B:/~BUN/root/chunk-jjjrkty7.js";
import { hGt, w8r } from "B:/~BUN/root/chunk-3wp0sje4.js";
import { yT, D7e, Zsr } from "B:/~BUN/root/chunk-acsg9bv8.js";
import { rGt } from "B:/~BUN/root/chunk-mdaf06x1.js";
import { LPe } from "B:/~BUN/root/chunk-t13tqkfb.js";
import { oO } from "B:/~BUN/root/chunk-nv4r2ffa.js";
import { uze } from "B:/~BUN/root/chunk-mtjq1vv3.js";
import { Xde as onChangeAppState } from "B:/~BUN/root/chunk-c7zem10c.js";
import { a4r } from "B:/~BUN/root/chunk-n3z1tp8n.js";
import { lJe } from "B:/~BUN/root/chunk-jt53f90b.js";
import { e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { se, R, T, g, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
import { L } from "B:/~BUN/root/chunk-z1enakv9.js";
import { S } from "B:/~BUN/root/chunk-yv67t8hr.js";
N();
import { openSync as Te, writeSync as Pe } from "fs";
import { homedir as Me } from "os";
var be = {
  iterm: "iTerm",
  "iterm.app": "iTerm",
  ghostty: "Ghostty",
  kitty: "kitty",
  alacritty: "Alacritty",
  wezterm: "WezTerm",
  apple_terminal: "Terminal"
};
function ie(o) {
  return;
}
class Q {
  frameDurations = [];
  totalFrames = 0;
  firstRenderTime;
  lastRenderTime;
  record(o) {
    let l = performance.now();
    if (this.firstRenderTime === void 0) this.firstRenderTime = l;
    if (this.lastRenderTime = l, this.totalFrames++, this.frameDurations.push(o), this.frameDurations.length > 3600) this.frameDurations.splice(0, this.frameDurations.length >> 1);
  }
  getMetrics() {
    if (this.totalFrames === 0 || this.firstRenderTime === void 0 || this.lastRenderTime === void 0) return;
    let o = this.lastRenderTime - this.firstRenderTime;
    if (o <= 0) return;
    let l = this.totalFrames / (o / 1000),
      h = this.frameDurations.slice().sort((itemA, itemB) => itemB - itemA),
      P = Math.max(0, Math.ceil(h.length * 0.01) - 1),
      D = h[P],
      k = D > 0 ? 1000 / D : 0;
    return {
      averageFps: Math.round(l * 100) / 100,
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
  rt(), import("B:/~BUN/root/chunk-br5arvvb.js").then(Ze);
}
function Xe(ot) {
  return {
    ...ot,
    phase: "save-failed"
  };
}
function n1o(o) {
  if (a.CLAUBBIT || !ps()) return;
  gH(!0), Ky(o);
}
function r1o(o) {
  Ee(l => ({
    ...l,
    hasCompletedOnboarding: !0,
    lastOnboardingVersion: {
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
  }), o);
}
function i4r(o, l) {
  return async h => {
    let P = await hGt(o),
      D = uze();
    if (P.pendingServers.length === 0) return null;
    if (D.length > 0) {
      let k = L(D.map(item => item.file).filter(Boolean)).join(", ");
      return p("mcp_project_approval_dialog", "mcp_project_approval_skipped_settings_errors"), l({
        key: "mcp-approval-skipped",
        text: `skipping .mcp.json server approval (settings errors${k ? ` in ${k}` : ""}) \xB7 run \`claude doctor\` to list them, fix them, then restart`
      }), null;
    }
    try {
      return await w8r(P, k => {
        try {
          let y = Re(k);
          if (y) l(y);
        } catch (error) {
          d(te(error));
        } finally {
          h();
        }
      }, o);
    } catch (error) {
      throw m("mcp_project_approval_dialog", "mcp_project_approval_dialog_threw"), error;
    }
  };
}
function Re(o) {
  if (o.persistFailed) return m("mcp_project_approval_dialog", "mcp_approval_persist_failed"), {
    key: "mcp-approval-persist-failed",
    text: "one or more of your MCP server choices could not be saved (check permissions on .claude/settings.local.json) \xB7 you will be asked again next startup"
  };
  let l = Wk();
  if (z1t().some(item => item.workspaceKey === l) && !Yf() && RI({
    onIndeterminate: "tracked"
  })) return p("mcp_project_approval_dialog", "mcp_approval_persist_gated"), {
    key: "mcp-approval-persist-gated",
    text: "your MCP server choices apply to this session only (workspace not explicitly trusted; .claude/settings.local.json is gated) \xB7 to persist, add them to enabledMcpjsonServers in ~/.claude/settings.json"
  };
  return _("mcp_project_approval_dialog"), null;
}
async function DVo(o, l, beforeExit) {
  return Xyn(o, l, {
    color: "error",
    beforeExit: beforeExit
  });
}
async function Xyn(o, children, h) {
  let color = h?.color,
    D = h?.exitCode ?? 1;
  if (sO(o, color ? e(n, {
    color: color,
    children: children
  }) : e(n, {
    children: children
  })), o.unmount(), await h?.beforeExit?.(), D !== 0) {
    let {
      setBgExitCause: setBgExitCause,
      setBgExitDetail: setBgExitDetail
    } = await import("B:/~BUN/root/chunk-1xqjzyzk.js");
    setBgExitCause("exit_with_message"), setBgExitDetail("exit_with_message", children);
  }
  let {
    flushAnalyticsSinks: flushAnalyticsSinks
  } = await import("B:/~BUN/root/chunk-kqy6dwqq.js");
  await flushAnalyticsSinks();
  let {
      drainRegisteredWriteQueues: drainRegisteredWriteQueues
    } = await import("B:/~BUN/root/chunk-8wy8nga8.js"),
    {
      withTimeout: withTimeout
    } = await import("B:/~BUN/root/chunk-bcqh7a5d.js");
  await withTimeout(drainRegisteredWriteQueues(), 2000, "write queue drain timeout (exitWithMessage)").catch(() => {}), process.exit(D);
}
function wQ(o, l, h) {
  return new Promise((P, D) => {
    tje(o, [k => l(y => {
      P(y), k();
    })], {
      session: j(),
      onChangeAppState: h?.onChangeAppState,
      marksJobBlocked: !0
    }).catch(D);
  });
}
async function G9n(o, l, h, P, D) {
  let k = sO(o, l);
  bFr(), x4r(h, P, D);
  try {
    if ((await Promise.race([o.waitUntilExit().then(() => "exited"), k.replaced.then(() => "replaced")])) === "replaced") return;
  } catch (error) {
    let C = te(error),
      B = (await Qzt().catch(() => !1)) ? " It happened while the fullscreen renderer was starting, so the next launch will use the classic renderer (CLAUDE_CODE_DISABLE_ALTERNATE_SCREEN=1 forces that any time)." : "";
    if (Zfe(`Claude Code exited after an unrecoverable interface error (${C.message}).${B}`), vt() || Hjt()) throw error;
    try {
      zke(C, "unhandled_rejection");
    } catch {}
    await Kn(1, "other");
    return;
  }
  await SHn.of(h.host).runBeforeInteractiveShutdown(), await Kn(0);
}
var xe = 2000,
  ce = "GB post-onboarding init";
async function LVo(session, l, permissionMode, allowDangerouslySkipPermissions, commands, claudeInChrome, devChannels, offerClaudeInChrome, storageV5, credentials, askCloudDefaultReason) {
  let v = {
      onboardingShown: !1,
      mcpApprovalSkipWarning: null,
      claudeInChromeAccepted: !1
    },
    I = E => {
      v.mcpApprovalSkipWarning = E;
    };
  if (vt() || a.CLAUDE_BRIDGE_REATTACH_SESSION) {
    let E = ps(),
      u = E || a.CLAUDE_BG_WORKSPACE_TRUSTED === !0 && Wxe(we(), Me());
    if (!u) t("Workspace trust is not recorded for this directory; continuing as an untrusted session (hooks and project settings env stay off)", {
      level: "warn"
    });
    let f = [() => {
      if (u) gH(!0);
      if (Fut({
        preservePendingExposures: !0
      }), sp().catch(A => d(te(A))), u) hve(session), import("B:/~BUN/root/chunk-b1vnv9km.js").then(A => A.loadHooksModulesHeldForTrust(storageV5, credentials)).catch(A => d(te(A)));
      return null;
    }, i4r(storageV5, I), () => {
      if (u) yx(), import("B:/~BUN/root/chunk-mw5pfcfw.js").then(A => A.maybePrewarmRecallIndex(session)), Ky(storageV5);
      if (rGt(), u) {
        if (!E && !Yn() && !Xr()) De(storageV5, credentials);
        setImmediate(Q_e, storageV5);
      }
      return null;
    }];
    return await tje(l, f, {
      session: session,
      storageV5: storageV5
    }), v;
  }
  if (Ne(!1) || a.IS_DEMO) return n1o(storageV5), rGt(), v;
  return await tje(l, o1o({
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
function o1o({
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
}, b) {
  let v = le(),
    I = !1,
    E = !0;
  return [u => {
    if (v.hasCompletedOnboarding && a.CLAUDE_CODE_POWERUP_ONBOARDING !== "banner" && a.CLAUDE_CODE_POWERUP_ONBOARDING !== "step") return null;
    return b.onboardingShown = !0, import("B:/~BUN/root/chunk-bk21124a.js").then(({
      Onboarding: Onboarding
    }) => e(Onboarding, {
      host: session_2.host,
      onDone: () => {
        r1o(storageV5_2), u();
      }
    }));
  }, onDone => {
    if (a.CLAUBBIT) return null;
    if (E = ps(), E && !LPe()) return null;
    return I = !0, import("B:/~BUN/root/chunk-f1wr160j.js").then(({
      TrustDialog: TrustDialog
    }) => e(TrustDialog, {
      commands: commands_2,
      onDone: onDone
    }));
  }, () => {
    if (a.CLAUBBIT) return null;
    if (gH(!0), I) {
      if (Eh("post-trust: re-discover project @skills-dir plugins"), zZ(credentials_2)) Ti(storageV5_2, credentials_2).catch(() => {});
    }
    if (import("B:/~BUN/root/chunk-b1vnv9km.js").then(u => u.loadHooksModulesHeldForTrust(storageV5_2, credentials_2)).catch(u => d(te(u))), Fut({
      preservePendingExposures: !0
    }), v.hasCompletedOnboarding) return sp().catch(u => d(te(u))), null;
    return t$(), Be();
  }, () => {
    if (a.CLAUBBIT) return null;
    return null;
  }, u => a.CLAUBBIT ? null : i4r(storageV5_2, f => {
    b.mcpApprovalSkipWarning = f;
  })(u), async u => {
    if (a.CLAUBBIT || !(await Vdo(session_2, storageV5_2))) return null;
    let externalIncludes = YCt(await pS(session_2, !0, storageV5_2, credentials_2)),
      {
        ClaudeMdExternalIncludesDialog: ClaudeMdExternalIncludesDialog
      } = await import("B:/~BUN/root/chunk-mkjkv27n.js");
    return e(ClaudeMdExternalIncludesDialog, {
      onDone: () => u(),
      isStandaloneDialog: !0,
      externalIncludes: externalIncludes
    });
  }, () => {
    if (a4r(storageV5_2), ie(storageV5_2), yx(), import("B:/~BUN/root/chunk-mw5pfcfw.js").then(u => u.maybePrewarmRecallIndex(session_2)), Ky(storageV5_2), rGt(), I && !E && !Yn() && !Xr()) De(storageV5_2, credentials_2);
    return setImmediate(Q_e, storageV5_2), null;
  }, async u => {
    if (!(await HWe(storageV5_2, credentials_2))) return null;
    let {
      GroveDialog: GroveDialog
    } = await import("B:/~BUN/root/chunk-jy99cmwb.js");
    return e(GroveDialog, {
      showIfAlreadyViewed: !1,
      location: b.onboardingShown ? "onboarding" : "policy_update_modal",
      onDone: A => {
        if (A !== "escape") {
          u();
          return;
        }
        i("tengu_grove_policy_exited", {}), yo(0), b.onboardingShown = !1, b.claudeInChromeAccepted = !1, u("stop");
      }
    });
  }, async u => {
    if (lJe().status !== "not_started") return null;
    let {
      ProTrialStartScreen: ProTrialStartScreen
    } = await import("B:/~BUN/root/chunk-y1nfcfwg.js");
    return i("tengu_pro_trial_start_screen_shown", {}), e(ProTrialStartScreen, {
      onDone: () => u(),
      storageV5: storageV5_2,
      credentials: credentials_2
    });
  }, async u => {
    if (!b.onboardingShown) return null;
    let {
      resolvePowerupDiscoveryArm: resolvePowerupDiscoveryArm
    } = await import("B:/~BUN/root/chunk-ttjfz0vw.js");
    if (resolvePowerupDiscoveryArm() !== "step") return null;
    let {
      PowerupDiscoveryStep: PowerupDiscoveryStep
    } = await import("B:/~BUN/root/chunk-hrqs0d66.js");
    return e(PowerupDiscoveryStep, {
      onDone: () => u()
    });
  }, u => {
    let customApiKeyTruncated = yHt();
    if (!customApiKeyTruncated) return null;
    return import("B:/~BUN/root/chunk-5p2j6rxg.js").then(({
      ApproveApiKey: ApproveApiKey
    }) => e(ApproveApiKey, {
      customApiKeyTruncated: customApiKeyTruncated,
      onDone: () => u()
    }));
  }, ue("bedrock", storageV5_2), ue("vertex", storageV5_2), async onDone_2 => {
    let f;
    try {
      f = await Zsr();
    } catch (error) {
      return d(error), null;
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
        children: lines.map(O => e(n, {
          color: "warning",
          children: O
        }, O))
      })
    });
  }, u => {
    if (permissionMode_2 !== "bypassPermissions" && !allowDangerouslySkipPermissions_2 || U1()) return null;
    return import("B:/~BUN/root/chunk-7ryyt7fg.js").then(({
      BypassPermissionsModeDialog: BypassPermissionsModeDialog
    }) => e(BypassPermissionsModeDialog, {
      onAccept: () => u(),
      storageV5: storageV5_2
    }));
  }, ...[], async u => {
    if (Wh().length === 0 && (k?.length ?? 0) === 0) return null;
    if (await Uu("tengu_harbor"), !k || k.length === 0) return null;
    let [{
        isChannelsEnabled: isChannelsEnabled
      }, {
        isChannelsPolicyBlocked: isChannelsPolicyBlocked
      }, {
        getSettingsForSource: getSettingsForSource
      }] = await Promise.all([import("B:/~BUN/root/chunk-9c36pdj3.js"), import("B:/~BUN/root/chunk-jq4hy2ns.js"), import("B:/~BUN/root/chunk-bkfhtpzp.js")]),
      O = () => {
        let U = k.map(item => ({
          ...item,
          dev: !0
        }));
        Lxe(Wh().concat(U)), Nqr(!0);
      };
    if (!isChannelsEnabled() || Ie() !== "firstParty" || isChannelsPolicyBlocked(getSettingsForSource("policySettings"))) return O(), null;
    let {
      DevChannelsDialog: DevChannelsDialog
    } = await import("B:/~BUN/root/chunk-4hg1xbg4.js");
    return e(DevChannelsDialog, {
      channels: k,
      onAccept: () => {
        O(), u();
      }
    });
  }, u => {
    if (!claudeInChrome_2 || le().hasCompletedClaudeInChromeOnboarding) return null;
    return import("B:/~BUN/root/chunk-thxmewtj.js").then(({
      ClaudeInChromeOnboarding: ClaudeInChromeOnboarding
    }) => e(ClaudeInChromeOnboarding, {
      onDone: () => u()
    }));
  }, async u => {
    if (!offerClaudeInChrome_2) return null;
    let {
        isChromeExtensionInstalled: isChromeExtensionInstalled
      } = await import("B:/~BUN/root/chunk-3yyyn8e5.js"),
      A = await Ht(isChromeExtensionInstalled(), 1500, "chrome extension scan timed out before offer").catch(() => !0),
      F = Boolean(le().chromeExtension?.pairedDeviceId);
    if (!A && !F) return t("[Claude in Chrome] Skipping offer: extension not present locally (stale cache)"), null;
    await Ht(sp().catch(() => {}), 1500, "GrowthBook init timed out before chrome offer").catch(() => {});
    let O = x("tengu_chrome_auto_enable", !1),
      K = le().claudeInChromeDefaultEnabled !== void 0,
      {
        isChromeServerPolicyDenied: isChromeServerPolicyDenied
      } = await import("B:/~BUN/root/chunk-p99eqtn4.js"),
      {
        isClaudeInChromeAllowed: isClaudeInChromeAllowed
      } = await import("B:/~BUN/root/chunk-3yyyn8e5.js");
    if (isChromeServerPolicyDenied() || !isClaudeInChromeAllowed()) return t("[Claude in Chrome] Skipping offer: blocked by enterprise MCP config, managed deniedMcpServers policy, or organization policy (allow_claude_browser_extension)"), null;
    if (K) return t("[Claude in Chrome] Skipping offer: decision already recorded (another instance answered)"), b.claudeInChromeAccepted = le().claudeInChromeDefaultEnabled === !0, null;
    if (!O) return t("[Claude in Chrome] Skipping offer: tengu_chrome_auto_enable no longer set (stale GB cache)"), null;
    let {
      ChromeAutoEnableDialog: ChromeAutoEnableDialog
    } = await import("B:/~BUN/root/chunk-rzcfmwtx.js");
    return e(ChromeAutoEnableDialog, {
      onDone: ae => {
        b.claudeInChromeAccepted = ae, u();
      },
      isDontAskMode: permissionMode_2 === "dontAsk",
      isAutoMode: permissionMode_2 === "auto"
    });
  }];
}
async function Be() {
  let o = Date.now();
  try {
    await Ht(sp(), xe, ce), t(`[STARTUP] post-onboarding GB await ${Date.now() - o}ms`);
  } catch (error) {
    if (t(`[STARTUP] post-onboarding GB await ${Date.now() - o}ms: ${error}`, {
      level: "warn"
    }), !(error instanceof Error && error.message === ce)) d(te(error));
  }
  return null;
}
function ye(o) {
  let D = w(4),
    {
      afterMs: afterMs,
      onDone: onDone_3,
      children: children_2
    } = o,
    k,
    y;
  if (D[0] !== afterMs || D[1] !== onDone_3) k = () => {
    let C = setTimeout(onDone_3, afterMs);
    return () => clearTimeout(C);
  }, y = [afterMs, onDone_3], D[0] = afterMs, D[1] = onDone_3, D[2] = k, D[3] = y;else k = D[2], y = D[3];
  return R(k, y), children_2;
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
function ue(provider, l) {
  let h = re[provider];
  return async P => {
    if (Ie() !== provider) return null;
    try {
      let [D, {
          upgradeKey: upgradeKey
        }] = await Promise.all([provider === "bedrock" ? import("B:/~BUN/root/chunk-16m5r29n.js").then(v => D7e("bedrock-upgrade", v.findBedrockUpgradeCandidates()).then(I => I.map(item => ({
          ...item,
          toId: item.toBedrockId
        })))) : import("B:/~BUN/root/chunk-zj3gq8gq.js").then(v => D7e("vertex-upgrade", v.findVertexUpgradeCandidates()).then(I => I.map(item => ({
          ...item,
          toId: item.toVertexId
        })))), import("B:/~BUN/root/chunk-2e6zwzz3.js")]),
        y = (provider === "bedrock" ? le().bedrockDeclinedUpgrades : le().vertexDeclinedUpgrades) ?? {},
        pending = D.filter(item => y[item.tier] !== upgradeKey(item));
      if (pending.length === 0) return null;
      let [{
        updateSettingsForSource: updateSettingsForSource
      }, {
        ThirdPartyModelUpgradeDialog: B
      }] = await Promise.all([import("B:/~BUN/root/chunk-bkfhtpzp.js"), import("B:/~BUN/root/chunk-dg2wezt1.js")]);
      async function answer(v, I) {
        let tier = c(v.tier);
        if (!I) return await Ee(A => {
          let F = provider === "bedrock" ? "bedrockDeclinedUpgrades" : "vertexDeclinedUpgrades";
          return {
            ...A,
            [F]: {
              ...A[F],
              [v.tier]: upgradeKey(v)
            }
          };
        }, l), i(h.declined, {
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
          }, void 0, l);
        if (error_2) return i(h.saveFailed, {
          tier: tier
        }), !1;
        for (let A of Object.keys(env)) process.env[A] = v.toId;
        return i(h.accepted, {
          tier: tier,
          from_key: c(v.fromKey),
          to_key: c(v.toKey)
        }), !0;
      }
      return e(Se, {
        provider: provider,
        pending: pending,
        answer: answer,
        onDone: () => P(),
        Dialog: B
      });
    } catch (error) {
      return d(error), null;
    }
  };
}
function Se(o) {
  let y = w(27),
    {
      provider: provider_2,
      pending: pending_2,
      answer: answer_2,
      onDone: onDone_4,
      Dialog: Dialog
    } = o,
    C;
  if (y[0] === S) C = {
    at: 0,
    acceptedAny: !1,
    phase: "asking"
  }, y[0] = C;else C = y[0];
  let [M, B] = g(C),
    {
      at: at,
      acceptedAny: acceptedAny,
      phase: phase
    } = M,
    {
      exit: exit
    } = ek(),
    u = T(null),
    f = pending_2[at],
    A;
  if (y[1] !== pending_2.length) A = F => B(O => {
    let acceptedAny_2 = O.acceptedAny || F;
    if (O.at + 1 < pending_2.length) {
      return {
        at: O.at + 1,
        acceptedAny: acceptedAny_2,
        phase: "asking"
      };
    }
    return {
      ...O,
      acceptedAny: acceptedAny_2,
      phase: acceptedAny_2 ? "relaunching" : "done"
    };
  }), y[1] = pending_2.length, y[2] = A;else A = y[2];
  let U = A,
    Y,
    oe;
  if (y[3] !== U || y[4] !== exit || y[5] !== onDone_4 || y[6] !== phase || y[7] !== provider_2) Y = () => {
    if (phase === "done") {
      onDone_4();
      return;
    }
    if (phase === "save-failed") {
      let ne = setTimeout(Je, 2000, U);
      return () => clearTimeout(ne);
    }
    if (phase === "relaunching") {
      i(re[provider_2].relaunch, {});
      let ae = setTimeout(Qe, 250, exit);
      return () => clearTimeout(ae);
    }
  }, oe = [phase, provider_2, U, onDone_4, exit], y[3] = U, y[4] = exit, y[5] = onDone_4, y[6] = phase, y[7] = provider_2, y[8] = Y, y[9] = oe;else Y = y[8], oe = y[9];
  if (R(Y, oe), phase === "relaunching" && acceptedAny) {
    let G;
    if (y[10] === S) G = e(n, {
      dimColor: !0,
      children: "Restarting Claude Code to apply the new model\u2026"
    }), y[10] = G;else G = y[10];
    return G;
  }
  if (f === void 0 || phase === "done") {
    return null;
  }
  if (phase === "save-failed") {
    const G = yT[f.tier];
    let z;
    if (y[11] !== G) z = r(n, {
      color: "error",
      children: ["Failed to save ", G, " upgrade to settings."]
    }), y[11] = G, y[12] = z;else z = y[12];
    return z;
  }
  const tierLabel = yT[f.tier];
  let onDone_5;
  if (y[13] !== U || y[14] !== answer_2 || y[15] !== at || y[16] !== f || y[17] !== onDone_4) onDone_5 = ke => {
    if (u.current === at) {
      return;
    }
    u.current = at, answer_2(f, ke).then(Ce => {
      if (ke && !Ce) {
        B(Xe);
        return;
      }
      U(Ce);
    }, Ve => {
      d(Ve), onDone_4();
    });
  }, y[13] = U, y[14] = answer_2, y[15] = at, y[16] = f, y[17] = onDone_4, y[18] = onDone_5;else onDone_5 = y[18];
  let Ae;
  if (y[19] !== Dialog || y[20] !== at || y[21] !== f.fromMarketingName || y[22] !== f.toId || y[23] !== f.toMarketingName || y[24] !== tierLabel || y[25] !== onDone_5) Ae = e(Dialog, {
    tierLabel: tierLabel,
    fromName: f.fromMarketingName,
    toName: f.toMarketingName,
    toProviderId: f.toId,
    onDone: onDone_5
  }, at), y[19] = Dialog, y[20] = at, y[21] = f.fromMarketingName, y[22] = f.toId, y[23] = f.toMarketingName, y[24] = tierLabel, y[25] = onDone_5, y[26] = Ae;else Ae = y[26];
  return Ae;
}
function NVo(o) {
  let l = 0,
    h = oO(o);
  if (h.stdin) i("tengu_stdin_interactive", {});
  let P = new Q(),
    stats = Uwn();
  Y2r(stats);
  let CLAUDE_CODE_FRAME_TIMING_LOG = a.CLAUDE_CODE_FRAME_TIMING_LOG,
    y = -1,
    C = 0,
    M = Math.max(1, a.CLAUDE_CODE_FRAME_TIMING_SAMPLE_EVERY || 1);
  if (CLAUDE_CODE_FRAME_TIMING_LOG) try {
    y = Te(CLAUDE_CODE_FRAME_TIMING_LOG, "a");
  } catch {}
  return {
    getFpsMetrics: () => P.getMetrics(),
    stats: stats,
    renderOptions: {
      ...h,
      onFrame: B => {
        if (P.record(B.durationMs), stats.observe("frame_duration_ms", B.durationMs), y >= 0 && B.phases) {
          let b = C++ % M === 0,
            v = JSON.stringify({
              total: B.durationMs,
              at: Date.now(),
              ...B.phases,
              ...(b && {
                rss: process.memoryUsage.rss(),
                cpu: process.cpuUsage()
              })
            }) + `
`;
          Pe(y, v);
        }
        if (E5()) return;
        for (let b of B.flickers) {
          if (b.reason === "resize") continue;
          let v = Date.now();
          if (v - l < 1000) i("tengu_flicker", {
            desiredHeight: b.desiredHeight,
            actualHeight: b.availableHeight,
            reason: b.reason
          });
          l = v;
        }
      }
    }
  };
}
function De(o, l) {
  import("B:/~BUN/root/chunk-pcbb9hj0.js").then(h => h.startMemoryWatcher(o, l));
}
export { n1o, r1o, i4r, DVo, Xyn, wQ, G9n, LVo, o1o, NVo };