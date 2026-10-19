// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Y } from "B:/~BUN/root/chunk-89mss1tj.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { j } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { zne as seconds, cWo as days } from "B:/~BUN/root/chunk-jpdys232.js";
import { _n } from "B:/~BUN/root/chunk-6za2ez23.js";
import { Ir } from "B:/~BUN/root/chunk-xf0m410v.js";
import { O } from "B:/~BUN/root/chunk-nggrknsv.js";
import { he } from "B:/~BUN/root/chunk-4qqgabd5.js";
import { zje, qje, mle, Sl, pWe } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { Kr, jt, ja } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { Iun } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { uTo } from "B:/~BUN/root/chunk-1g2t7gtx.js";
import { s, n, pce } from "B:/~BUN/root/chunk-damrp3r8.js";
import { To } from "B:/~BUN/root/chunk-z1p6g436.js";
import { a_ } from "B:/~BUN/root/chunk-rq3efhmf.js";
import { SYe, dps, N0n } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { Wqn, zqn } from "B:/~BUN/root/chunk-66hg7026.js";
import { Uwo as upperLimit, DCr } from "B:/~BUN/root/chunk-yq5myw2y.js";
import { Tit } from "B:/~BUN/root/chunk-t1rttjj3.js";
import { uC } from "B:/~BUN/root/chunk-8aq76x8d.js";
import { Cbe } from "B:/~BUN/root/chunk-adys8ehb.js";
import { Bre } from "B:/~BUN/root/chunk-90dg0j6s.js";
import { jre } from "B:/~BUN/root/chunk-hw3c4b0h.js";
import { uY } from "B:/~BUN/root/chunk-72p78b38.js";
import { e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { Xnt } from "B:/~BUN/root/chunk-qvf3sn2n.js";
import { cwd as A } from "process";
import { stripVTControlCharacters as P } from "util";
import { createInterface as E } from "readline";
function pvt(c, input = process.stdin) {
  let t = () => {},
    promise = new Promise(p => {
      t = p;
    }),
    l = E({
      input: input,
      output: process.stdout
    });
  return l.question(`${c} [y/N] `, p => {
    let _ = p.trim().toLowerCase();
    t(_ === "y" || _ === "yes"), l.close();
  }), l.once("close", () => t(!1)), promise;
}
function Gei() {
  return pce({
    ...uC(!1),
    patchConsole: !1
  });
}
function R(c) {
  return {
    ok: !0,
    days: days,
    seconds: seconds
  };
}
async function Vei(c, d) {
  i("tengu_setup_token_command", {});
  let t = R(d?.expiresInDays);
  if (!t.ok) {
    c.unmount(), process.stderr.write(`${t.message}
`), await jt("cli_setup_token", t.errorCode), await To(1);
    return;
  }
  let f = pWe(!0);
  if (!f.valid) c.unmount(), process.stderr.write(`${f.message}
setup-token creates a long-lived Claude.ai subscription token, which this policy does not permit.
`), await jt("cli_setup_token", "force_login_method_refused"), await To(1);
  let l = zje("firstParty");
  if (l !== void 0) c.unmount(), process.stderr.write(`${l}
setup-token creates a long-lived Claude.ai subscription token, which this machine's allowedProviders policy does not permit.
`), await jt("cli_setup_token", "provider_not_allowed"), await To(1);
  let p = !Sl(),
    {
      ConsoleOAuthFlow: ConsoleOAuthFlow
    } = await import("B:/~BUN/root/chunk-158przj2.js"),
    session = j(),
    h = !1;
  if (await new Promise(y => {
    c.render(e(a_, {
      session: session,
      onChangeAppState: k => Bre(k, session),
      children: r(s, {
        flexDirection: "column",
        gap: 1,
        children: [e(jre, {}), p && r(s, {
          flexDirection: "column",
          children: [e(n, {
            color: "warning",
            children: "Warning: You already have authentication configured via environment variable or API key helper."
          }), e(n, {
            color: "warning",
            children: "The setup-token command will create a new OAuth token which you can use instead."
          })]
        }), r(s, {
          paddingLeft: 1,
          flexDirection: "column",
          gap: 1,
          children: [r(n, {
            bold: !0,
            children: ["This will guide you through long-lived (", t.days === 365 ? "1-year" : `${t.days}-day`, ") auth token setup for your Claude account. Claude subscription required."]
          }), e(ConsoleOAuthFlow, {
            onDone: () => {
              y();
            },
            onAccountOnHold: () => {
              h = !0, y();
            },
            mode: "setup-token",
            expiresIn: t.seconds,
            urlOutdent: 1
          })]
        })]
      })
    }));
  }), c.unmount(), h) {
    await jt("cli_setup_token", "account_on_hold"), await To(1);
    return;
  }
  await Kr("cli_setup_token"), await To(0);
}
async function qei(storageV5) {
  i("tengu_doctor_command", {});
  let d;
  try {
    let t = await Tit({
        probeKeychain: !0,
        storageV5: storageV5
      }),
      f = uY(),
      l = ["Claude Code doctor", "", `Running: ${t.installationType} (${t.version})`, ...({
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.303",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-18T20:20:57Z",
        GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
        HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "win32"
      }.GIT_SHA ? [`Commit: ${{
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.303",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-18T20:20:57Z",
        GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
        HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "win32"
      }.GIT_SHA.slice(0, 12)}`] : []), "Platform: win32-x64", ...(t.packageManager ? [`Package manager: ${u(t.packageManager)}`] : []), `Path: ${u(t.installationPath)}`, ...(t.invokedBinary !== t.installationPath ? [`Invoked: ${u(t.invokedBinary)}`] : []), `Config install method: ${u(t.configInstallMethod)}`, `Search: ${t.ripgrepStatus.working ? "OK" : "Not working"} (${t.ripgrepStatus.mode === "embedded" ? "bundled" : u(t.ripgrepStatus.systemPath || "system")})`, `Auto-updates: ${t.packageManager ? "Managed by package manager" : u(t.autoUpdates)}`, `Auto-update channel: ${f === "rc" ? "slow" : f}`, `Last update attempt: ${b(t.lastUpdateResult)}`],
      p = SYe();
    if (p) l.push(`Managed settings (remote): ${u(N0n(p))}`);else if (dps()) l.push("Managed settings (remote): checking\u2026 (fetch in progress; re-run in a moment)");
    {
      let {
          waitForPolicyLimitsToLoad: waitForPolicyLimitsToLoad,
          POLICY_LIMITS_FIRST_ATTEMPT_WAIT_MS: POLICY_LIMITS_FIRST_ATTEMPT_WAIT_MS
        } = await import("B:/~BUN/root/chunk-v3zcvmws.js"),
        {
          getLastFetchOutcome: getLastFetchOutcome
        } = await import("B:/~BUN/root/chunk-9hz9jer5.js"),
        v = !1,
        S = waitForPolicyLimitsToLoad().then(() => {
          v = !0;
        }),
        T = Date.now() + POLICY_LIMITS_FIRST_ATTEMPT_WAIT_MS;
      while (!v && getLastFetchOutcome() === null && Date.now() < T) await Promise.race([S, Y(200)]);
    }
    let _ = l.push("Organization policy: \u2026") - 1,
      {
        statusNotices: statusNotices,
        invalidEntries: invalidEntries
      } = Xnt(Cbe().errors);
    if (invalidEntries.length > 0) {
      l.push("", he.yellow("Invalid settings"));
      for (let o of invalidEntries) {
        let m = [o.file, o.path].flatMap(item => item ? [u(item)] : []).join(" \u203A ");
        l.push(`- ${m ? `${m}: ` : ""}${u(o.message)}${o.suggestion ? `
  Suggested fix: ${u(o.suggestion)}` : ""}`);
      }
    }
    if (statusNotices.length > 0) {
      l.push("");
      for (let o of statusNotices) l.push(`- ${u(o.message)}`);
    }
    let y = Iun();
    if (y.length > 0) {
      l.push("");
      for (let [o, m] of y) l.push(`- ${o}
  ${m}`);
    }
    let k = [{
      name: "BASH_MAX_OUTPUT_LENGTH",
      default: DCr,
      upperLimit: upperLimit
    }, {
      name: "CLAUDE_CODE_MAX_OUTPUT_TOKENS",
      ...mle("claude-opus-4-6")
    }].map(item => ({
      name: item.name,
      ...qje(item.name, process.env[item.name], item.default, item.upperLimit)
    })).filter(item => item.status !== "valid");
    if (k.length > 0) {
      l.push("", he.yellow("Environment variables"));
      for (let o of k) l.push(`- ${o.name}: ${u(o.message ?? o.status)}`);
    }
    if (t.multipleInstallations.length > 1) {
      l.push("", he.yellow("Multiple installations found"));
      for (let o of t.multipleInstallations) l.push(`- ${u(`${o.type} at ${o.path}`)}`);
    }
    try {
      let o = await uTo();
      if (l.push("", "Remote Control"), o.inRemoteSession) l.push("Inside a cloud session \u2014 Remote Control is unavailable here. Use it from the local session instead.");else {
        l.push(u(o.disabledReason ?? "Control this session from claude.ai/code or the Claude mobile app"));
        for (let m of o.checks.filter(item => !item.ok)) l.push(u(`- ${m.label}${m.detail ? ` (${m.detail})` : ""}`));
      }
    } catch {
      await ja("cli_doctor", "bridge_info_unavailable");
    }
    if (l[_] = `Organization policy: ${u(zqn(Wqn()))}`, t.warnings.length > 0) {
      l.push("", he.yellow(`${t.warnings.length} ${O(t.warnings.length, "warning")} found`));
      for (let o of t.warnings) l.push(`- ${u(o.issue)}`, `  Fix: ${u(o.fix)}`);
    } else l.push("", "No installation issues found.");
    l.push("", "For a full setup checkup that can also fix issues, run /doctor in a Claude Code session."), Ir(l.join(`
`) + `
`), d = {
      warnings: t.warnings.length,
      settings_errors: invalidEntries.length,
      env_var_issues: k.length,
      multiple_installs: t.multipleInstallations.length > 1,
      ripgrep_working: t.ripgrepStatus.working
    };
  } catch (error) {
    throw await jt("cli_doctor", "diagnostic_failed"), error;
  }
  await Kr("cli_doctor", d), await To(0);
}
function u(c) {
  return _n(P(c)).replaceAll("`", "");
}
function b(c) {
  if (!c) return "none recorded";
  let d = u(c.timestamp.slice(0, 10));
  switch (c.outcome) {
    case "success":
      return c.version_to ? `success \u2192 ${u(c.version_to)} (${d})` : `success (${d})`;
    case "failed":
      return `failed (${u(c.status)}) \u2014 ${d}`;
  }
}
async function Kei(c, d, storageV5_2) {
  if (a.DISABLE_UPDATES) process.stdout.write(`Updates are disabled by your administrator. Contact your IT team to get the latest version.
`), process.exit(0);
  let {
    awaitPolicyLimitsColdStart: awaitPolicyLimitsColdStart
  } = await import("B:/~BUN/root/chunk-v3zcvmws.js");
  await awaitPolicyLimitsColdStart();
  let {
    setup: setup
  } = await import("B:/~BUN/root/chunk-4pk5pzet.js");
  await setup(A(), "default", !1, !1, void 0, !1, void 0, void 0, void 0, storageV5_2);
  let {
    install: install
  } = await import("B:/~BUN/root/chunk-00dp0sxj.js");
  await new Promise(_ => {
    let g = [];
    if (c) g.push(c);
    if (d.force) g.push("--force");
    install.call(async h => {
      if (h.includes("failed")) await jt("cli_install", "cli_install_failed");else await Kr("cli_install");
      await To(h.includes("failed") ? 1 : 0), _();
    }, {
      storageV5: storageV5_2
    }, g);
  });
}
export { pvt, Gei, Vei, qei, Kei };