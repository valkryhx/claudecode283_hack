// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { ud, Tuo, Uoe, FDn, Cuo, rwr, kpt as sandboxUser, vL, Duo, q6, iwr, pwr, z0e, pJe, _wr, bwr, Ge } from "B:/~BUN/root/chunk-z7bs0q82.js";
import { d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { P } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { ut } from "B:/~BUN/root/chunk-3mm90xb6.js";
import { et } from "B:/~BUN/root/chunk-fkr27nhj.js";
import { Oar } from "B:/~BUN/root/chunk-s0gfhbzk.js";
import { b1 } from "B:/~BUN/root/chunk-z1wt3cb2.js";
import { o, u } from "B:/~BUN/root/chunk-4bfd0jkf.js";
var B = p(() => u({
  egress_probe: o().refine(s => s !== "not-run")
}));
async function L(s, b) {
  let {
      exe: exe,
      prependArgs: prependArgs
    } = vL(),
    timeout = Math.floor(s),
    f = Date.now(),
    {
      exitCode: exitCode,
      timedOut: timedOut,
      stdout: stdout,
      stderr: stderr,
      error: error
    } = await ut(exe, [...prependArgs, "wfp", "verify", "--target", "127.0.0.1:9", ...(b ? ["--allow-loopback"] : []), "--write-restricted-token"], {
      timeout: timeout,
      stdin: "ignore",
      cwd: b1(),
      maxBuffer: 1e5
    }),
    duration_ms = Math.max(0, Date.now() - f),
    seconds = Math.max(1, Math.round(duration_ms / 1000));
  t(`[sandbox] starting the sandbox account: ${timedOut ? "stopped at the time limit" : `exit ${exitCode ?? "none"}`} after ${seconds}s (limit ${s} ms): ${stderr || stdout || error || (exitCode === void 0 && !timedOut ? "srt-win never ran, or something other than the limit ended it" : "no output")}`);
  let C = {
    duration_ms: duration_ms,
    exit_code: exitCode ?? -1
  };
  if (B().safeParse(et(stdout, !1)).success) return g("sandbox_windows_first_start", C), {
    outcome: "started",
    seconds: seconds
  };
  let outcome = timedOut ? "timed_out" : "not_started";
  return c("sandbox_windows_first_start", outcome, C), {
    outcome: outcome,
    seconds: seconds
  };
}
var w6n = "Setting up the Windows sandbox. Approve the administrator prompt if Windows shows one. After that, set-up can take a few minutes.";
class N {
  inFlight = void 0;
  run(s) {
    return this.inFlight ??= s().finally(() => {
      this.inFlight = void 0;
    }), this.inFlight;
  }
}
var E = new W(() => new N());
function k6n(s, b = () => {}, n = 1 / 0) {
  return E.of(s).run(() => M(b, n));
}
async function M(onProfileGrantProgress, b) {
  let n = [],
    srtWin = vL(),
    allowLoopback = pwr(),
    f = await Uoe({
      srtWin: srtWin
    }).catch(() => {
      return;
    }),
    force = f !== void 0 && f.user.provisioned && f.wfp.state !== "absent" && f.wfp.allowLoopback !== allowLoopback,
    _ = Oar(f?.user);
  if (_ !== void 0 && f?.user.provisioned && f.user.credPresent && rwr(f.user) === void 0 && (f.wfp.state === "installed" || f.wfp.state === "cannot-read") && !force) {
    let e = await Ge.checkDependenciesAsync().catch(() => {
      return;
    });
    if (e?.errors.length === 1 && e.errors[0] === _) return c("sandbox_windows_install", "secondary_logon_unusable"), {
      status: "partial",
      message: `Set-up changed nothing. Run it again once this is fixed: ${_}`
    };
  }
  if (force) n.push(`The sandbox on this machine was set up with local connections ${allowLoopback ? "off" : "on"}, and sandbox.network.allowLocalBinding asks for them ${allowLoopback ? "on" : "off"}: this set-up replaces its network filters.`);
  if (allowLoopback) n.push(`Local connections are on (sandbox.network.allowLocalBinding). ${Tuo} To keep sandboxed commands off local ports, remove that setting and run /sandbox install again.`);
  for (let e of n) onProfileGrantProgress(e);
  try {
    let e = await Cuo({
      sandboxUser: sandboxUser,
      allowLoopback: allowLoopback,
      force: force,
      onProfileGrantStart: i => onProfileGrantProgress(`${i.replace(/\s*Skip with[\s\S]*$/, "")} ${F} This needs no further elevation and can take a few minutes. ${Duo()}`),
      onProfileGrantProgress: onProfileGrantProgress,
      srtWin: srtWin
    });
    if (e.cancelled) {
      if (e.user.provisioned && e.user.credPresent) {
        let i = Oar(e.user);
        if (i === void 0 && z0e().source === "managed" && pJe()) {
          Ge.invalidateDependencyCache();
          let k = await D(e.user);
          if (await Ge.checkDependenciesAsync(), k !== null) return k;
          return g("sandbox_windows_install"), {
            status: "ok",
            message: "Install was cancelled at the elevation prompt, but the sandbox user is already provisioned \u2014 the sandbox TLS inspection CA is now set up and trusted for the sandbox user." + " Network filters can't be verified from a non-elevated process; if sandboxing doesn't start, run /sandbox install again and approve the elevation prompt." + T()
          };
        }
        return c("sandbox_windows_install", "uac_cancelled_provisioned"), Ge.invalidateDependencyCache(), await Ge.checkDependenciesAsync(), {
          status: "cancelled",
          message: `Install was cancelled at the elevation prompt, but the sandbox user is already provisioned. Network filters can't be verified from a non-elevated process${Ge.areSandboxSettingsLockedByPolicy() ? "" : " \u2014 run /sandbox to check the current status"}; if sandboxing doesn't start, run /sandbox install again and approve the elevation prompt. If you don't have administrator rights, ask your administrator to run the sandbox set-up.${i === void 0 ? "" : ` ${i}`}`
        };
      }
      return c("sandbox_windows_install", "uac_cancelled"), {
        status: "cancelled",
        message: "Install was cancelled at the elevation prompt. Run /sandbox install again and approve the prompt to set up the sandbox user and network filters. If you don't have administrator rights, ask your administrator to install the network filters."
      };
    }
    let w = e.user.provisioned && e.user.credPresent && (e.wfp.state === "installed" || e.wfp.state === "cannot-read"),
      r = Oar(e.user),
      l;
    if (w && r === void 0 && !(z0e().source === "managed" && pJe())) {
      await iwr({
        exePath: process.execPath,
        previous: void 0,
        getUserStatus: () => Promise.resolve(e.user)
      });
      let i = Math.min(150000, b - Date.now());
      if (i >= 1e4) l = await L(i, allowLoopback);else c("sandbox_windows_first_start", "no_time_left"), l = "no_time_left";
    }
    if (Ge.invalidateDependencyCache(), await Ge.checkDependenciesAsync(), w) {
      if (r === void 0 && z0e().source === "managed" && pJe()) {
        let v = await D(e.user);
        if (v !== null) return v;
      }
      let i = e.profileGrant?.applied === !0 ? e.profileGrant.result.unprotected : [];
      if (i.length > 0) return c("sandbox_windows_install", "profile_exclusion_unprotected"), {
        status: "partial",
        message: `WARNING: the sandbox is installed, but ${i.length} credential store(s) that set-up excludes could not be closed, and sandboxed commands CAN READ ${i.length === 1 ? "it" : "them"}: ${i.slice(0, 10).map(item => `${item.path} (${item.reason})`).join("; ")}${i.length > 10 ? "; \u2026" : ""}. Only the owner of such a path or an administrator can close it; run /sandbox install again afterwards.${A(e.profileGrant)}${S(allowLoopback, n)}${T()}${r === void 0 ? "" : ` ${r}`}`
      };
      let k = e.wfp.state === "installed" ? "Sandbox user and network filters installed" : "Sandbox user and network filters installed (filters can't be verified from a non-elevated process)";
      if (r !== void 0) return c("sandbox_windows_install", "secondary_logon_unusable"), {
        status: "partial",
        message: `${k}.${T()}${S(allowLoopback, n)}${A(e.profileGrant)} ${r}`
      };
      g("sandbox_windows_install");
      let R = l === void 0 || l === "no_time_left" ? "" : `${l.seconds} ${P(l.seconds, "second")}`,
        I = l === void 0 ? "" : {
          started: ` Windows signed in the sandbox user in ${R}.`,
          timed_out: ` The sandbox user had not finished signing in after ${R}. If the sandbox fails to start, restart Claude Code. If it fails again, run /sandbox install again.`,
          not_started: " Claude Code couldn't sign in the sandbox user. It will try again the next time it starts the sandbox, and show the reason if that fails too.",
          no_time_left: " Set-up ran out of time before it could sign in the sandbox user, so the sandbox may fail to start the first time. If it does, restart Claude Code. If it fails again, run /sandbox install again."
        }[l === "no_time_left" ? l : l.outcome];
      if (Ge.isSandboxingEnabled()) return {
        status: "ok",
        message: `${k} and active.${T()}${S(allowLoopback, n)}${A(e.profileGrant)}${I}`
      };
      let O = Ge.isSandboxEnabledInSettings() ? Ge.areSandboxSettingsLockedByPolicy() ? "Run `claude sandbox status` in a terminal and check `installed` and `enabled` in its JSON output." : "Run /sandbox to check the current status." : Ge.areSandboxSettingsLockedByPolicy() ? "The sandbox is off in your settings, and /sandbox cannot turn it on here, because a --settings file or managed settings control the sandbox settings. Set sandbox.enabled to true in your settings, or ask whoever manages those settings." : "Run /sandbox to choose a sandbox mode and turn it on.";
      return {
        status: "ok",
        message: `${k}. ${O}${T()}${S(allowLoopback, n)}${A(e.profileGrant)}${I}`
      };
    }
    let y = !e.user.provisioned ? "user_not_provisioned" : !e.user.credPresent ? "cred_not_readable" : "wfp_not_installed";
    return c("sandbox_windows_install", y), {
      status: "partial",
      message: `Install completed (sandbox user: ${{
        user_not_provisioned: "not provisioned",
        cred_not_readable: "provisioned, credential not readable",
        wfp_not_installed: "provisioned"
      }[y]}, filters: ${e.wfp.state}). Run /sandbox install again to retry.`
    };
  } catch (error) {
    Ge.invalidateDependencyCache();
    let w = d(error);
    t(`/sandbox install failed: ${w}`, {
      level: "error"
    });
    let r = q6(w, {
      omitCcRemedy: !0
    }).replace(/\.$/, "");
    if (error instanceof ud && error.code === "install_timeout") return c("sandbox_windows_install", "uac_timeout"), {
      status: "error",
      message: `The install timed out after 2 minutes: ${r}. If an elevation prompt was showing, run /sandbox install again and respond to the prompt. If no prompt appeared, the installer may be blocked on this machine${Ge.areSandboxSettingsLockedByPolicy() ? "" : " \u2014 run /sandbox to check the current status"}.`
    };
    if (error instanceof ud && error.code === "profile_grant_blocked_by_session") return await Ge.checkDependenciesAsync(), c("sandbox_windows_install", "profile_grant_blocked"), {
      status: "partial",
      message: "The sandbox account and network filters are installed, but the read access to your user profile was left as it was: it is changed only while no sandboxed session or command is running on this machine, and one is (another Claude Code window, or this one if it has run a sandboxed command). Close the sessions that use the sandbox, then run `claude sandbox install` in a terminal, or /sandbox install in a new session." + S(allowLoopback, n)
    };
    if (error instanceof ud && error.code === "profile_operation_in_progress") return await Ge.checkDependenciesAsync(), c("sandbox_windows_install", "profile_operation_in_progress"), {
      status: "partial",
      message: "The sandbox account and network filters are installed, but the read access to your user profile was left as it was: another sandbox set-up step on this profile is still running (a /sandbox install in another window, or the removal of that access). Wait for it to finish, then run /sandbox install again." + S(allowLoopback, n)
    };
    if (error instanceof ud && error.code === "profile_grant_failed") return await Ge.checkDependenciesAsync(), c("sandbox_windows_install", "profile_grant_failed"), {
      status: "partial",
      message: `The sandbox account and network filters are installed, but your user profile could not be made readable to sandboxed commands: ${r.replace(/\s*No session starts until it is complete[\s\S]*$/, "").replace(/\.$/, "")}. Sandboxed commands will not start until that step completes. Run /sandbox install again to retry.${S(allowLoopback, n)}`
    };
    if (error instanceof ud && error.code === "install_config_conflict") return c("sandbox_windows_install", "config_conflict"), {
      status: "error",
      message: "A sandbox network-filter set is already installed with a different configuration: under a different sandbox account name, or with the other setting for local connections (sandbox.network.allowLocalBinding) while its state could not be read. Run /sandbox install again; if it is refused again, close every Claude Code session and run claude sandbox uninstall in a terminal, then run /sandbox install."
    };
    if (/^srt-win (status|wfp|user)[ :]/.test(w)) return c("sandbox_windows_install", "status_probe_failed"), {
      status: "error",
      message: `The installer ran, but the sandbox status couldn't be read back afterwards: ${r}. ${Ge.areSandboxSettingsLockedByPolicy() ? "Restart Claude Code to check again." : "Run /sandbox to check the current status."}`
    };
    return m("sandbox_windows_install", "install_threw"), {
      status: "error",
      message: `Couldn't install the sandbox user and network filters: ${r}. Run /sandbox install again to retry.`
    };
  }
}
var F = "The sandbox account is one per machine: where other people use this machine, their sandboxed commands can read your profile too.";
function A(s) {
  if (s === void 0) return "";
  if (!s.applied) return ` Your user profile was not made readable to sandboxed commands (${s.reason.replace(/\.$/, "")}), so they can read nothing in it; run /sandbox install again, as the user who starts sessions, to apply that.`;
  let {
    profile: profile,
    granted: granted,
    denied: denied,
    notGranted: notGranted
  } = s.result;
  return ` Sandboxed commands can now read your user profile (${profile}) except credential stores: ${granted} folders made readable, ${denied} excluded${notGranted.length > 0 ? `, ${notGranted.length} left unreadable because their permissions could not be changed` : ""}. That includes package-manager configuration that can hold feed tokens (.npmrc, pip.ini, NuGet.Config, Maven settings.xml, gradle.properties, .gitconfig). ${F} ${Duo()}`;
}
function S(s, b) {
  let n = Ge.untilRestart();
  return `${b.map(item => ` ${item}`).join("")}${n === void 0 ? "" : ` This session started with local connections ${s ? "off" : "on"} and keeps that until it ends, so its sandbox ${n === "refused" ? "cannot run" : "is off"} now. ${n === "refused" ? bwr : _wr}.`}`;
}
async function D(status) {
  let b = await iwr({
    exePath: process.execPath,
    previous: void 0,
    getUserStatus: () => Promise.resolve(status)
  });
  try {
    await FDn({
      status: status,
      srtWin: vL()
    });
  } catch (error) {
    let h = d(error);
    t(`/sandbox install: managed sandbox CA step failed: ${h}`, {
      level: "error"
    });
    let a = q6(h, {
      omitCcRemedy: !0,
      programPermissionAdded: b?.added
    }).replace(/\.$/, "");
    if (error instanceof ud && (error.code === "trust_ca_failed" || error.code === "spawn_failed" || error.code === "srt_win_timeout")) return c("sandbox_windows_install", "trust_ca_failed"), {
      status: "partial",
      message: `The sandbox TLS inspection CA couldn't be trusted for the sandbox user: ${a}. Sandboxed HTTPS won't work \u2014 run /sandbox install again to retry.`
    };
    return c("sandbox_windows_install", "persistent_ca_failed"), {
      status: "partial",
      message: `The sandbox TLS inspection CA couldn't be created: ${a}. Sandboxed HTTPS won't work \u2014 run /sandbox install again to retry.`
    };
  }
  return null;
}
function T() {
  return pJe() && Ge.needsRestartForTlsTerminate() ? " Restart Claude Code to enable TLS inspection for this session." : "";
}
export { w6n, k6n };