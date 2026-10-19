// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  d
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  z
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  g,
  m,
  p
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  ry,
  qnn,
  KRr,
  tAr,
  Cee,
  qie,
  nAr,
  yOe,
  E8e,
  Je
} from "B:/~BUN/root/chunk-r0jnxjth.js";
class l {
  inFlight = void 0;
  run(e) {
    return this.inFlight ??= e().finally(() => {
      this.inFlight = void 0
    }), this.inFlight
  }
}
var u = new z(() => new l);

function cbn(e) {
  return u.of(e).run(c)
}
async function c() {
  try {
    let e = await KRr({
      sandboxUser: tAr,
      srtWin: Cee()
    });
    if (e.cancelled) {
      if (e.user.provisioned && e.user.credPresent) {
        if (yOe().source === "managed" && E8e()) {
          Je.invalidateDependencyCache();
          let s = await i(e.user);
          if (await Je.checkDependenciesAsync(), s !== null) return s;
          return g("sandbox_windows_install"), {
            status: "ok",
            message: "Install was cancelled at the elevation prompt, but the sandbox user is already provisioned \u2014 the sandbox TLS inspection CA is now set up and trusted for the sandbox user." + " Network filters can't be verified from a non-elevated process; if sandboxing doesn't start, run /sandbox install again and approve the elevation prompt." + r()
          }
        }
        return p("sandbox_windows_install", "uac_cancelled_provisioned"), Je.invalidateDependencyCache(), await Je.checkDependenciesAsync(), {
          status: "cancelled",
          message: "Install was cancelled at the elevation prompt, but the sandbox user is already provisioned. Network filters can't be verified from a non-elevated process \u2014 run /sandbox to check the current status; if sandboxing doesn't start, run /sandbox install again and approve the elevation prompt."
        }
      }
      return p("sandbox_windows_install", "uac_cancelled"), {
        status: "cancelled",
        message: "Install was cancelled at the elevation prompt. Run /sandbox install again and approve the prompt to set up the sandbox user and network filters. If you don't have administrator rights, ask your administrator to install the network filters."
      }
    }
    if (Je.invalidateDependencyCache(), await Je.checkDependenciesAsync(), e.user.provisioned && e.user.credPresent && (e.wfp.state === "installed" || e.wfp.state === "cannot-read")) {
      if (yOe().source === "managed" && E8e()) {
        let o = await i(e.user);
        if (o !== null) return o
      }
      g("sandbox_windows_install");
      let s = e.wfp.state === "installed" ? "Sandbox user and network filters installed" : "Sandbox user and network filters installed (filters can't be verified from a non-elevated process)";
      if (Je.isSandboxingEnabled()) return {
        status: "ok",
        message: `${s} and active.${r()}`
      };
      return Je.isSandboxEnabledInSettings() ? {
        status: "ok",
        message: `${s}. Run /sandbox to check the current status.${r()}`
      } : {
        status: "ok",
        message: `${s}. Run /sandbox to choose a sandbox mode and turn it on.${r()}`
      }
    }
    let a = !e.user.provisioned ? "user_not_provisioned" : !e.user.credPresent ? "cred_not_readable" : "wfp_not_installed";
    return p("sandbox_windows_install", a), {
      status: "partial",
      message: `Install completed (sandbox user: ${{user_not_provisioned:"not provisioned",cred_not_readable:"provisioned, credential not readable",wfp_not_installed:"provisioned"}[a]}, filters: ${e.wfp.state}). Run /sandbox install again to retry.`
    }
  } catch (e) {
    Je.invalidateDependencyCache();
    let a = d(e);
    t(`/sandbox install failed: ${a}`, {
      level: "error"
    });
    let n = qie(a, {
      omitCcRemedy: !0
    }).replace(/\.$/, "");
    if (e instanceof ry && e.code === "install_timeout") return p("sandbox_windows_install", "uac_timeout"), {
      status: "error",
      message: `The install timed out after 2 minutes: ${n}. If an elevation prompt was showing, run /sandbox install again and respond to the prompt. If no prompt appeared, the installer may be blocked on this machine \u2014 run /sandbox to check sandbox status.`
    };
    if (e instanceof ry && e.code === "install_config_conflict") return p("sandbox_windows_install", "config_conflict"), {
      status: "error",
      message: "A sandbox network-filter set is already installed with a different configuration (for example, under a different sandbox account name). Remove it by running npx @anthropic-ai/sandbox-runtime windows-uninstall from a trusted directory, then run /sandbox install again."
    };
    if (/^srt-win (status|wfp|user)[ :]/.test(a)) return p("sandbox_windows_install", "status_probe_failed"), {
      status: "error",
      message: `The installer ran, but the sandbox status couldn't be read back afterwards: ${n}. Run /sandbox to check the current status.`
    };
    return m("sandbox_windows_install", "install_threw"), {
      status: "error",
      message: `Couldn't install the sandbox user and network filters: ${n}. Run /sandbox install again to retry.`
    }
  }
}
async function i(e) {
  let a = await nAr({
    exePath: process.execPath,
    previous: void 0,
    getUserStatus: () => Promise.resolve(e)
  });
  try {
    await qnn({
      status: e,
      srtWin: Cee()
    })
  } catch (n) {
    let s = d(n);
    t(`/sandbox install: managed sandbox CA step failed: ${s}`, {
      level: "error"
    });
    let o = qie(s, {
      omitCcRemedy: !0,
      programPermissionAdded: a?.added
    }).replace(/\.$/, "");
    if (n instanceof ry && (n.code === "trust_ca_failed" || n.code === "spawn_failed" || n.code === "srt_win_timeout")) return p("sandbox_windows_install", "trust_ca_failed"), {
      status: "partial",
      message: `The sandbox TLS inspection CA couldn't be trusted for the sandbox user: ${o}. Sandboxed HTTPS won't work \u2014 run /sandbox install again to retry.`
    };
    return p("sandbox_windows_install", "persistent_ca_failed"), {
      status: "partial",
      message: `The sandbox TLS inspection CA couldn't be created: ${o}. Sandboxed HTTPS won't work \u2014 run /sandbox install again to retry.`
    }
  }
  return null
}

function r() {
  return E8e() && Je.needsRestartForTlsTerminate() ? " Restart Claude Code to enable TLS inspection for this session." : ""
}
export {
  cbn
};
