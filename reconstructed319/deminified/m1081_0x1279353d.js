// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Pe } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { H, Ee, nKn, uzs, y$e, NN, nrt, xn, dv, srt, EVs } from "B:/~BUN/root/chunk-game8aqv.js";
import { f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { F, d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { zt } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { ePe } from "B:/~BUN/root/chunk-h4acfc9y.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { Sv, MAn, zvi, G8e, OEe, ki, xS, C6, Boo, sr, aa } from "B:/~BUN/root/chunk-27h4st9h.js";
import { Nr, Kwt } from "B:/~BUN/root/chunk-eev762xg.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { vt, t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { _l } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { GBn, Oz, Gt, ms, v, gk, Ysn, Us, Xh, HD, sM, Le, fe, dMs } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { Te } from "B:/~BUN/root/chunk-8f4z6bdn.js";
import { FJ } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { qI } from "B:/~BUN/root/chunk-m749kjym.js";
import { vRr } from "B:/~BUN/root/chunk-cvaa202c.js";
import { YEe } from "B:/~BUN/root/chunk-gq4ywexf.js";
import { gE } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { WWr } from "B:/~BUN/root/chunk-wgm0dv7j.js";
import { xke, oyn } from "B:/~BUN/root/chunk-mcgwex2v.js";
import { zC } from "B:/~BUN/root/chunk-wv4xq162.js";
import { phe } from "B:/~BUN/root/chunk-dwg8my6z.js";
import { s, n, oE } from "B:/~BUN/root/chunk-qey16aan.js";
import { i9n, Ksa, ABo } from "B:/~BUN/root/chunk-v78pgfwz.js";
import { Rvt, IM } from "B:/~BUN/root/chunk-wb281zpj.js";
import { NCt, O4o } from "B:/~BUN/root/chunk-xf5c537t.js";
import { x3n, Z5s } from "B:/~BUN/root/chunk-8waxt30d.js";
import { H0, kqt, uYo } from "B:/~BUN/root/chunk-t85n63bg.js";
import { C3n } from "B:/~BUN/root/chunk-v61b9h5f.js";
import { m7n } from "B:/~BUN/root/chunk-a5a2wdx1.js";
import { _st } from "B:/~BUN/root/chunk-aae6n66j.js";
import { iRt } from "B:/~BUN/root/chunk-z6w90r70.js";
import { c3s } from "B:/~BUN/root/chunk-99mr5pt0.js";
import { Yzt } from "B:/~BUN/root/chunk-2dmynx1q.js";
import { she as onChangeAppState } from "B:/~BUN/root/chunk-0rs69czh.js";
import { e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { Poi } from "B:/~BUN/root/chunk-0dhvsb89.js";
import { B_r } from "B:/~BUN/root/chunk-4xx5w1am.js";
import { ue, O, A, y, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { L } from "B:/~BUN/root/chunk-5ha2avah.js";
import { w } from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();
import { openSync as Ie, writeSync as Fe } from "fs";
import { homedir as Be } from "os";
var Re = {
  iterm: "iTerm",
  "iterm.app": "iTerm",
  ghostty: "Ghostty",
  kitty: "kitty",
  alacritty: "Alacritty",
  wezterm: "WezTerm",
  apple_terminal: "Terminal"
};
function le(o) {
  return;
}
class Z {
  frameDurations = [];
  totalFrames = 0;
  firstRenderTime;
  lastRenderTime;
  record(o) {
    let p = performance.now();
    if (this.firstRenderTime === void 0) this.firstRenderTime = p;
    if (this.lastRenderTime = p, this.totalFrames++, this.frameDurations.push(o), this.frameDurations.length > 3600) this.frameDurations.splice(0, this.frameDurations.length >> 1);
  }
  getMetrics() {
    if (this.totalFrames === 0 || this.firstRenderTime === void 0 || this.lastRenderTime === void 0) return;
    let o = this.lastRenderTime - this.firstRenderTime;
    if (o <= 0) return;
    let p = this.totalFrames / (o / 1000),
      u = this.frameDurations.slice().sort((itemA, itemB) => itemB - itemA),
      x = Math.max(0, Math.ceil(u.length * 0.01) - 1),
      P = u[x],
      T = P > 0 ? 1000 / P : 0;
    return {
      averageFps: Math.round(p * 100) / 100,
      low1PctFps: Math.round(T * 100) / 100
    };
  }
}
function Ze(ot) {
  return ot(!1);
}
function tt(nt) {
  return nt.execRelaunch();
}
function Ve(it) {
  it(), import("B:/~BUN/root/chunk-6rhm3kp2.js").then(tt);
}
function et(at) {
  return {
    ...at,
    phase: "save-failed"
  };
}
function usa(o) {
  if (i.CLAUBBIT || !Us()) return;
  NN(!0), gE(o);
}
function fsa(o) {
  Le(p => ({
    ...p,
    hasCompletedOnboarding: !0,
    lastOnboardingVersion: {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.319",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-11-05T18:14:18Z",
      GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION
  }), o);
}
function d3s(o, p) {
  return async u => {
    let x = await x3n(o),
      P = iRt();
    if (x.pendingServers.length === 0) return null;
    if (P.length > 0) {
      let T = L(P.flatMap(item => item.file ? [_l(item.file)] : [])).join(", ");
      return c("mcp_project_approval_dialog", "mcp_project_approval_skipped_settings_errors"), p({
        key: "mcp-approval-skipped",
        text: `skipping .mcp.json server approval (settings errors${T ? ` in ${T}` : ""}) \xB7 run \`claude doctor\` to list them, fix them, then restart`
      }), null;
    }
    try {
      return await Z5s(x, T => {
        try {
          let C = Oe(T);
          if (C) p(C);
        } catch (error) {
          a(F(error));
        } finally {
          u();
        }
      }, o);
    } catch (error) {
      throw m("mcp_project_approval_dialog", "mcp_project_approval_dialog_threw"), error;
    }
  };
}
function Oe(o) {
  if (o.persistFailed) return m("mcp_project_approval_dialog", "mcp_approval_persist_failed"), {
    key: "mcp-approval-persist-failed",
    text: "one or more of your MCP server choices could not be saved (check permissions on .claude/settings.local.json) \xB7 you will be asked again next startup"
  };
  let p = HD();
  if (nKn().some(item => item.workspaceKey === p) && !Xh() && sM({
    onIndeterminate: "tracked"
  })) return c("mcp_project_approval_dialog", "mcp_approval_persist_gated"), {
    key: "mcp-approval-persist-gated",
    text: "your MCP server choices apply to this session only (workspace not explicitly trusted; .claude/settings.local.json is gated) \xB7 to persist, add them to enabledMcpjsonServers in ~/.claude/settings.json"
  };
  return g("mcp_project_approval_dialog"), null;
}
async function Rma(o, children) {
  IM(o, e(n, {
    color: "error",
    children: children
  })), o.unmount(), await ke(children);
}
async function ke(o) {
  let {
    setBgExitCause: setBgExitCause,
    setBgExitDetail: setBgExitDetail
  } = await import("B:/~BUN/root/chunk-5xknh6bx.js");
  setBgExitCause("exit_with_message"), setBgExitDetail("exit_with_message", o);
}
function Ama(o) {
  IM(o, e(s, {
    paddingX: 1,
    children: e(n, {
      dimColor: !0,
      children: "Loading your organization's managed settings\u2026"
    })
  }));
}
async function xma(o, p, beforeExit, unsentPrompt) {
  return x1r(o, p, {
    color: "error",
    beforeExit: beforeExit,
    unsentPrompt: unsentPrompt
  });
}
async function x1r(o, children_2, u) {
  let color = u?.color,
    P = u?.exitCode ?? 1,
    T = color ? e(n, {
      color: color,
      children: children_2
    }) : e(n, {
      children: children_2
    });
  if (IM(o, u?.unsentPrompt ? r(s, {
    flexDirection: "column",
    children: [T, e(n, {
      children: `
Your message was not sent:
${u.unsentPrompt}`
    })]
  }) : T), o.unmount(), await u?.beforeExit?.(), P !== 0) await ke(children_2);
  let {
    flushAnalyticsSinks: flushAnalyticsSinks
  } = await import("B:/~BUN/root/chunk-yk2pgkrt.js");
  await flushAnalyticsSinks();
  let {
      drainRegisteredWriteQueues: drainRegisteredWriteQueues
    } = await import("B:/~BUN/root/chunk-qkbhy0rw.js"),
    {
      withTimeout: withTimeout
    } = await import("B:/~BUN/root/chunk-ce9va9r2.js");
  await withTimeout(drainRegisteredWriteQueues(), 2000, "write queue drain timeout (exitWithMessage)").catch(() => {}), process.exit(P);
}
function Zae(o, p, u) {
  return new Promise((x, P) => {
    Rvt(o, [T => p(C => {
      x(C), T();
    })], {
      session: H(),
      onChangeAppState: u?.onChangeAppState,
      marksJobBlocked: !0
    }).catch(P);
  });
}
async function FLo(o, p, u, x, P) {
  let T = IM(o, p);
  dMs(), ABo(u, x, P);
  try {
    if ((await Promise.race([o.waitUntilExit().then(() => "exited"), T.replaced.then(() => "replaced")])) === "replaced") return;
  } catch (error) {
    let b = F(error),
      B = (await m7n().catch(() => !1)) ? " It happened while the fullscreen renderer was starting, so the next launch will use the classic renderer (CLAUDE_CODE_DISABLE_ALTERNATE_SCREEN=1 forces that any time)." : "";
    if (C6(`Claude Code exited after an unrecoverable interface error (${b.message}).${B}`), Gt() || Kwt()) throw error;
    try {
      YEe(b, "unhandled_rejection");
    } catch {}
    await sr(1, "other");
    return;
  }
  await Boo.of(u.host).runBeforeInteractiveShutdown(), await sr(0);
}
var Ue = 2000,
  ce = "GB post-onboarding init";
async function Pma(session, p, permissionMode, allowDangerouslySkipPermissions, commands, claudeInChrome, devChannels, offerClaudeInChrome, storageV5, credentials, askCloudDefaultReason) {
  let k = {
      onboardingShown: !1,
      onboardingSkippedSignIn: !1,
      mcpApprovalSkipWarning: null,
      claudeInChromeAccepted: !1
    },
    I = E => {
      k.mcpApprovalSkipWarning = E;
    };
  if (Gt() || i.CLAUDE_BRIDGE_REATTACH_SESSION) {
    let E = Us(),
      _ = E || i.CLAUDE_BG_WORKSPACE_TRUSTED === !0 && ePe(Ee(), Be());
    if (!_) t("Workspace trust is not recorded for this directory; continuing as an untrusted session (hooks and project settings env stay off)", {
      level: "warn"
    });
    let h = [() => {
      if (_) NN(!0);
      if (Ysn({
        preservePendingExposures: !0
      }), ms().catch(D => a(F(D))), _) G8e(session), import("B:/~BUN/root/chunk-7wr4gs8x.js").then(D => D.loadHooksModulesHeldForTrust(storageV5, credentials)).catch(D => a(F(D)));
      return null;
    }, d3s(storageV5, I), () => {
      if (_) qI(), gE(storageV5);
      if (i9n(session.host), C3n(), _) {
        if (!E && !xn() && !Nr()) Ae(storageV5, credentials);
        setImmediate(xke, storageV5);
      }
      return null;
    }];
    return await Rvt(p, h, {
      session: session,
      storageV5: storageV5
    }), k;
  }
  if (Pe(!1) || i.IS_DEMO) return usa(storageV5), i9n(session.host), C3n(), k;
  return await Rvt(p, psa({
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
  }, k), {
    session: session,
    onChangeAppState: onChangeAppState,
    marksJobBlocked: !0,
    storageV5: storageV5
  }), k;
}
function psa({
  session: session_2,
  permissionMode: permissionMode_2,
  allowDangerouslySkipPermissions: allowDangerouslySkipPermissions_2,
  commands: commands_2,
  claudeInChrome: claudeInChrome_2,
  devChannels: T,
  offerClaudeInChrome: offerClaudeInChrome_2,
  storageV5: storageV5_2,
  credentials: credentials_2,
  askCloudDefaultReason: askCloudDefaultReason_2
}, M) {
  let k = fe(),
    I = !1,
    E = !0;
  return [_ => {
    if (k.hasCompletedOnboarding && i.CLAUDE_CODE_POWERUP_ONBOARDING !== "banner" && i.CLAUDE_CODE_POWERUP_ONBOARDING !== "step") return null;
    return M.onboardingShown = !0, import("B:/~BUN/root/chunk-bg11hhyh.js").then(({
      Onboarding: Onboarding
    }) => e(Onboarding, {
      host: session_2.host,
      orgConfigGateFollows: !0,
      onDone: ({
        skippedSignIn: skippedSignIn
      }) => {
        M.onboardingSkippedSignIn = skippedSignIn, fsa(storageV5_2), _();
      }
    }));
  }, onDone => {
    if (i.CLAUBBIT) return null;
    if (E = Us(), E && !_st()) return null;
    return I = !0, (E ? Promise.resolve(!1) : Poi()).then(h => {
      if (h) return nrt(!0), null;
      return V(import("B:/~BUN/root/chunk-60p34nhh.js").then(({
        TrustDialog: TrustDialog
      }) => e(TrustDialog, {
        commands: commands_2,
        onDone: onDone
      })));
    });
  }, () => {
    if (i.CLAUBBIT) return null;
    if (NN(!0), I) {
      if (xS("post-trust: re-discover project @skills-dir plugins"), OEe(credentials_2)) ki(storageV5_2, credentials_2).catch(() => {});
    }
    if (import("B:/~BUN/root/chunk-7wr4gs8x.js").then(_ => _.loadHooksModulesHeldForTrust(storageV5_2, credentials_2)).catch(_ => a(F(_))), Ysn({
      preservePendingExposures: !0
    }), k.hasCompletedOnboarding) return ms().catch(_ => a(F(_))), null;
    return Oz(), pe();
  }, () => {
    if (i.CLAUBBIT) return null;
    return null;
  }, _ => i.CLAUBBIT ? null : d3s(storageV5_2, h => {
    M.mcpApprovalSkipWarning = h;
  })(_), async _ => {
    if (i.CLAUBBIT || !(await zvi(session_2, storageV5_2))) return null;
    let externalIncludes = MAn(await Sv(session_2, !0, storageV5_2, credentials_2)),
      {
        ClaudeMdExternalIncludesDialog: ClaudeMdExternalIncludesDialog
      } = await import("B:/~BUN/root/chunk-sg82634q.js");
    return e(ClaudeMdExternalIncludesDialog, {
      onDone: () => _(),
      isStandaloneDialog: !0,
      externalIncludes: externalIncludes
    });
  }, () => {
    if (c3s(storageV5_2), le(storageV5_2), qI(), i9n(session_2.host), gE(storageV5_2), C3n(), I && !E && !xn() && !Nr()) Ae(storageV5_2, credentials_2);
    if (M.onboardingShown) vt(msa);else setImmediate(xke, storageV5_2);
    return Ksa(session_2.host, k) ? pe() : null;
  }, async _ => {
    if (vRr()) {
      let {
          reviewCodeModeOptInInSetup: reviewCodeModeOptInInSetup
        } = await import("B:/~BUN/root/chunk-31qp1g7q.js"),
        step = await reviewCodeModeOptInInSetup();
      if (step === "none") return null;
      let {
        CodeModeOptIn: CodeModeOptIn
      } = await import("B:/~BUN/root/chunk-er0vcgz2.js");
      return e(CodeModeOptIn, {
        step: step,
        onStartWithout: () => _(),
        storageV5: storageV5_2
      });
    }
    return null;
  }, async _ => {
    if (!(await NCt(storageV5_2, credentials_2)) || (await O4o(credentials_2))) return null;
    let {
      GroveDialog: GroveDialog
    } = await import("B:/~BUN/root/chunk-re5yccth.js");
    return e(GroveDialog, {
      showIfAlreadyViewed: !1,
      location: M.onboardingShown ? "onboarding" : "policy_update_modal",
      onDone: D => {
        if (D !== "escape") {
          _();
          return;
        }
        l("tengu_grove_policy_exited", {}), aa(0), M.onboardingShown = !1, M.claudeInChromeAccepted = !1, _("stop");
      }
    });
  }, async _ => {
    if (Yzt().status !== "not_started") return null;
    let {
      ProTrialStartScreen: ProTrialStartScreen
    } = await import("B:/~BUN/root/chunk-xej75tdn.js");
    return l("tengu_pro_trial_start_screen_shown", {}), e(ProTrialStartScreen, {
      onDone: () => _(),
      storageV5: storageV5_2,
      credentials: credentials_2
    });
  }, async _ => {
    if (!M.onboardingShown) return null;
    let {
      resolvePowerupDiscoveryArm: resolvePowerupDiscoveryArm
    } = await import("B:/~BUN/root/chunk-n0jnw9sa.js");
    if (resolvePowerupDiscoveryArm() !== "step") return null;
    let {
      PowerupDiscoveryStep: PowerupDiscoveryStep
    } = await import("B:/~BUN/root/chunk-60cf2xns.js");
    return e(PowerupDiscoveryStep, {
      onDone: () => _()
    });
  }, _ => {
    let customApiKeyTruncated = GBn();
    if (!customApiKeyTruncated) return null;
    return V(import("B:/~BUN/root/chunk-gh4v7wqa.js").then(({
      ApproveApiKey: ApproveApiKey
    }) => e(ApproveApiKey, {
      customApiKeyTruncated: customApiKeyTruncated,
      onDone: () => _()
    })));
  }, ge("bedrock", storageV5_2), ge("vertex", storageV5_2), async onDone_2 => {
    let h;
    try {
      h = await uYo();
    } catch (error) {
      return a(error), null;
    }
    let {
      lines: lines,
      hasHardFailure: hasHardFailure
    } = h;
    if (lines.length === 0) return null;
    return e(Ce, {
      afterMs: hasHardFailure ? 4000 : 1500,
      onDone: onDone_2,
      children: e(s, {
        flexDirection: "column",
        children: lines.map(U => e(n, {
          color: "warning",
          children: U
        }, U))
      })
    });
  }, _ => {
    if (permissionMode_2 !== "bypassPermissions" && !allowDangerouslySkipPermissions_2 || FJ()) return null;
    return import("B:/~BUN/root/chunk-8b9t4p8n.js").then(({
      BypassPermissionsModeDialog: BypassPermissionsModeDialog
    }) => e(BypassPermissionsModeDialog, {
      onAccept: () => _(),
      storageV5: storageV5_2
    }));
  }, ...[], async _ => {
    if (dv().length === 0 && (T?.length ?? 0) === 0) return null;
    if (await gk("tengu_harbor"), !T || T.length === 0) return null;
    let [{
        isChannelsOffForSession: isChannelsOffForSession
      }, {
        isChannelsPolicyBlocked: isChannelsPolicyBlocked
      }, {
        getSettingsForSource: getSettingsForSource
      }] = await Promise.all([import("B:/~BUN/root/chunk-g9syd46g.js"), import("B:/~BUN/root/chunk-byq2sssm.js"), import("B:/~BUN/root/chunk-bfmgajst.js")]),
      U = () => {
        let G = T.map(item => ({
          ...item,
          dev: !0
        }));
        srt(dv().concat(G)), EVs(!0);
      };
    if (isChannelsOffForSession() || Te() !== "firstParty" || isChannelsPolicyBlocked(getSettingsForSource("policySettings"))) return U(), null;
    let {
      DevChannelsDialog: DevChannelsDialog
    } = await import("B:/~BUN/root/chunk-z8bky3rw.js");
    return e(DevChannelsDialog, {
      channels: T,
      onAccept: () => {
        U(), _();
      }
    });
  }, _ => {
    if (!claudeInChrome_2 || fe().hasCompletedClaudeInChromeOnboarding) return null;
    return V(import("B:/~BUN/root/chunk-hg40qwes.js").then(({
      ClaudeInChromeOnboarding: ClaudeInChromeOnboarding
    }) => e(ClaudeInChromeOnboarding, {
      onDone: () => _()
    })));
  }, async _ => {
    if (!offerClaudeInChrome_2) return null;
    let {
        isChromeExtensionInstalled: isChromeExtensionInstalled
      } = await import("B:/~BUN/root/chunk-jzfmvt6s.js"),
      D = await zt(isChromeExtensionInstalled(), 1500, "chrome extension scan timed out before offer").catch(() => !0),
      N = Boolean(fe().chromeExtension?.pairedDeviceId);
    if (!D && !N) return t("[Claude in Chrome] Skipping offer: extension not present locally (stale cache)"), null;
    await zt(ms().catch(() => {}), 1500, "GrowthBook init timed out before chrome offer").catch(() => {});
    let U = v("tengu_chrome_auto_enable", !1),
      Y = fe().claudeInChromeDefaultEnabled !== void 0,
      {
        isChromeServerPolicyDenied: isChromeServerPolicyDenied
      } = await import("B:/~BUN/root/chunk-rkdm6n0f.js"),
      {
        isClaudeInChromeAllowed: isClaudeInChromeAllowed
      } = await import("B:/~BUN/root/chunk-jzfmvt6s.js");
    if (isChromeServerPolicyDenied() || !isClaudeInChromeAllowed()) return t("[Claude in Chrome] Skipping offer: blocked by enterprise MCP config, managed deniedMcpServers policy, or organization policy (allow_claude_browser_extension)"), null;
    if (Y) return t("[Claude in Chrome] Skipping offer: decision already recorded (another instance answered)"), M.claudeInChromeAccepted = fe().claudeInChromeDefaultEnabled === !0, null;
    if (!U) return t("[Claude in Chrome] Skipping offer: tengu_chrome_auto_enable no longer set (stale GB cache)"), null;
    let {
      ChromeAutoEnableDialog: ChromeAutoEnableDialog
    } = await import("B:/~BUN/root/chunk-8wm8asvb.js");
    return e(ChromeAutoEnableDialog, {
      onDone: se => {
        M.claudeInChromeAccepted = se, _();
      },
      isDontAskMode: permissionMode_2 === "dontAsk",
      isAutoMode: permissionMode_2 === "auto"
    });
  }];
}
async function msa() {
  try {
    if (y$e() && B_r() === null) {
      await oyn();
      let {
        flushTelemetry: flushTelemetry
      } = await import("B:/~BUN/root/chunk-60ybc9d1.js");
      await flushTelemetry();
    }
  } catch (error) {
    t(`[3P telemetry] Export before exit failed: ${d(error)}`, {
      level: "error"
    });
  }
}
async function V(o) {
  let [children_3, {
    FullPageNotice: FullPageNotice
  }] = await Promise.all([o, import("B:/~BUN/root/chunk-qvq1skt1.js")]);
  return children_3 === null ? null : e(FullPageNotice, {
    children: children_3
  });
}
async function pe() {
  let o = Date.now();
  try {
    await zt(ms(), Ue, ce), t(`[STARTUP] post-onboarding GB await ${Date.now() - o}ms`);
  } catch (error) {
    if (t(`[STARTUP] post-onboarding GB await ${Date.now() - o}ms: ${error}`, {
      level: "warn"
    }), !(error instanceof Error && error.message === ce)) a(F(error));
  }
  return null;
}
function Ce(o) {
  let P = S(4),
    {
      afterMs: afterMs,
      onDone: onDone_3,
      children: children_4
    } = o,
    T,
    C;
  if (P[0] !== afterMs || P[1] !== onDone_3) T = () => {
    let b = setTimeout(onDone_3, afterMs);
    return () => clearTimeout(b);
  }, C = [afterMs, onDone_3], P[0] = afterMs, P[1] = onDone_3, P[2] = T, P[3] = C;else T = P[2], C = P[3];
  return O(T, C), children_4;
}
var ne = {
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
function ge(provider, p) {
  let u = ne[provider];
  return async x => {
    if (Te() !== provider) return null;
    try {
      let [P, {
          upgradeKey: upgradeKey
        }] = await Promise.all([provider === "bedrock" ? import("B:/~BUN/root/chunk-dq8astcr.js").then(k => kqt("bedrock-upgrade", k.findBedrockUpgradeCandidates()).then(I => I.map(item => ({
          ...item,
          toId: item.toBedrockId
        })))) : import("B:/~BUN/root/chunk-czekav7k.js").then(k => kqt("vertex-upgrade", k.findVertexUpgradeCandidates()).then(I => I.map(item => ({
          ...item,
          toId: item.toVertexId
        })))), import("B:/~BUN/root/chunk-53hctd24.js")]),
        C = (provider === "bedrock" ? fe().bedrockDeclinedUpgrades : fe().vertexDeclinedUpgrades) ?? {},
        pending = P.filter(item => C[item.tier] !== upgradeKey(item));
      if (pending.length === 0) return null;
      let [{
        updateSettingsForSource: updateSettingsForSource
      }, {
        ThirdPartyModelUpgradeDialog: B
      }] = await Promise.all([import("B:/~BUN/root/chunk-bfmgajst.js"), import("B:/~BUN/root/chunk-8fpzzbay.js")]);
      async function answer(k, I) {
        let tier = f(k.tier);
        if (!I) return await Le(D => {
          let N = provider === "bedrock" ? "bedrockDeclinedUpgrades" : "vertexDeclinedUpgrades";
          return {
            ...D,
            [N]: {
              ...D[N],
              [k.tier]: upgradeKey(k)
            }
          };
        }, p), l(u.declined, {
          tier: tier,
          from_key: f(k.fromKey),
          to_key: f(k.toKey)
        }), !1;
        let env = k.tier === "haiku" ? {
            ANTHROPIC_DEFAULT_HAIKU_MODEL: k.toId,
            ...(k.envVar === "ANTHROPIC_SMALL_FAST_MODEL" && {
              ANTHROPIC_SMALL_FAST_MODEL: k.toId
            })
          } : {
            [k.envVar]: k.toId
          },
          {
            error: error_2
          } = await updateSettingsForSource("userSettings", {
            env: env
          }, void 0, p);
        if (error_2) return l(u.saveFailed, {
          tier: tier
        }), !1;
        for (let D of Object.keys(env)) process.env[D] = k.toId;
        return l(u.accepted, {
          tier: tier,
          from_key: f(k.fromKey),
          to_key: f(k.toKey)
        }), !0;
      }
      return e(De, {
        provider: provider,
        pending: pending,
        answer: answer,
        onDone: () => x(),
        Dialog: B
      });
    } catch (error) {
      return a(error), null;
    }
  };
}
function De(o) {
  let C = S(27),
    {
      provider: provider_2,
      pending: pending_2,
      answer: answer_2,
      onDone: onDone_4,
      Dialog: Dialog
    } = o,
    b;
  if (C[0] === w) b = {
    at: 0,
    acceptedAny: !1,
    phase: "asking"
  }, C[0] = b;else b = C[0];
  let [R, B] = y(b),
    {
      at: at_2,
      acceptedAny: acceptedAny,
      phase: phase
    } = R,
    {
      exit: exit
    } = oE(),
    _ = A(null),
    h = pending_2[at_2],
    D;
  if (C[1] !== pending_2.length) D = N => B(U => {
    let acceptedAny_2 = U.acceptedAny || N;
    if (U.at + 1 < pending_2.length) {
      return {
        at: U.at + 1,
        acceptedAny: acceptedAny_2,
        phase: "asking"
      };
    }
    return {
      ...U,
      acceptedAny: acceptedAny_2,
      phase: acceptedAny_2 ? "relaunching" : "done"
    };
  }), C[1] = pending_2.length, C[2] = D;else D = C[2];
  let G = D,
    J,
    ie;
  if (C[3] !== G || C[4] !== exit || C[5] !== onDone_4 || C[6] !== phase || C[7] !== provider_2) J = () => {
    if (phase === "done") {
      onDone_4();
      return;
    }
    if (phase === "save-failed") {
      let ae = setTimeout(Ze, 2000, G);
      return () => clearTimeout(ae);
    }
    if (phase === "relaunching") {
      l(ne[provider_2].relaunch, {});
      let se = setTimeout(Ve, 250, exit);
      return () => clearTimeout(se);
    }
  }, ie = [phase, provider_2, G, onDone_4, exit], C[3] = G, C[4] = exit, C[5] = onDone_4, C[6] = phase, C[7] = provider_2, C[8] = J, C[9] = ie;else J = C[8], ie = C[9];
  if (O(J, ie), phase === "relaunching" && acceptedAny) {
    let W;
    if (C[10] === w) W = e(n, {
      dimColor: !0,
      children: "Restarting Claude Code to apply the new model\u2026"
    }), C[10] = W;else W = C[10];
    return W;
  }
  if (h === void 0 || phase === "done") {
    return null;
  }
  if (phase === "save-failed") {
    const W = H0[h.tier];
    let q;
    if (C[11] !== W) q = r(n, {
      color: "error",
      children: ["Failed to save ", W, " upgrade to settings."]
    }), C[11] = W, C[12] = q;else q = C[12];
    return q;
  }
  const tierLabel = H0[h.tier];
  let onDone_5;
  if (C[13] !== G || C[14] !== answer_2 || C[15] !== at_2 || C[16] !== h || C[17] !== onDone_4) onDone_5 = be => {
    if (_.current === at_2) {
      return;
    }
    _.current = at_2, answer_2(h, be).then(Me => {
      if (be && !Me) {
        B(et);
        return;
      }
      G(Me);
    }, rt => {
      a(rt), onDone_4();
    });
  }, C[13] = G, C[14] = answer_2, C[15] = at_2, C[16] = h, C[17] = onDone_4, C[18] = onDone_5;else onDone_5 = C[18];
  let xe;
  if (C[19] !== Dialog || C[20] !== at_2 || C[21] !== h.fromMarketingName || C[22] !== h.toId || C[23] !== h.toMarketingName || C[24] !== tierLabel || C[25] !== onDone_5) xe = e(Dialog, {
    tierLabel: tierLabel,
    fromName: h.fromMarketingName,
    toName: h.toMarketingName,
    toProviderId: h.toId,
    onDone: onDone_5
  }, at_2), C[19] = Dialog, C[20] = at_2, C[21] = h.fromMarketingName, C[22] = h.toId, C[23] = h.toMarketingName, C[24] = tierLabel, C[25] = onDone_5, C[26] = xe;else xe = C[26];
  return xe;
}
function Oma(o) {
  let p = 0,
    u = zC(o);
  if (u.stdin) l("tengu_stdin_interactive", {});
  let x = new Z(),
    stats = WWr();
  uzs(stats);
  let CLAUDE_CODE_FRAME_TIMING_LOG = i.CLAUDE_CODE_FRAME_TIMING_LOG,
    C = -1,
    b = 0,
    R = Math.max(1, i.CLAUDE_CODE_FRAME_TIMING_SAMPLE_EVERY || 1);
  if (CLAUDE_CODE_FRAME_TIMING_LOG) try {
    C = Ie(CLAUDE_CODE_FRAME_TIMING_LOG, "a");
  } catch {}
  return {
    getFpsMetrics: () => x.getMetrics(),
    stats: stats,
    renderOptions: {
      ...u,
      onFrame: B => {
        if (x.record(B.durationMs), stats.observe("frame_duration_ms", B.durationMs), C >= 0 && B.phases) {
          let M = b++ % R === 0,
            k = JSON.stringify({
              total: B.durationMs,
              at: Date.now(),
              ...B.phases,
              ...(M && {
                rss: process.memoryUsage.rss(),
                cpu: process.cpuUsage()
              })
            }) + `
`;
          Fe(C, k);
        }
        if (phe()) return;
        for (let M of B.flickers) {
          if (M.reason === "resize") continue;
          let k = Date.now();
          if (k - p < 1000) l("tengu_flicker", {
            desiredHeight: M.desiredHeight,
            actualHeight: M.availableHeight,
            reason: M.reason
          });
          p = k;
        }
      }
    }
  };
}
function Ae(o, p) {
  import("B:/~BUN/root/chunk-9nbr6mpk.js").then(u => u.startMemoryWatcher(o, p));
}
export { usa, fsa, d3s, Rma, Ama, xma, x1r, Zae, FLo, Pma, psa, msa, Oma };