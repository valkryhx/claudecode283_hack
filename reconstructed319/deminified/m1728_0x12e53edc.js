// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { J } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { H } from "B:/~BUN/root/chunk-game8aqv.js";
import { xwe as seconds, Cjs as days } from "B:/~BUN/root/chunk-y1kkrqy9.js";
import { oo } from "B:/~BUN/root/chunk-15vbkr6z.js";
import { P } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { Nn } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { Se } from "B:/~BUN/root/chunk-x24hm796.js";
import { kZe, Ion, Wbe, Qa, Nfe } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { Lr, Ut, Ls } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { szn } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { fSs } from "B:/~BUN/root/chunk-jmka9ye7.js";
import { s, n, cke } from "B:/~BUN/root/chunk-qey16aan.js";
import { Co } from "B:/~BUN/root/chunk-wd9jb4af.js";
import { SS } from "B:/~BUN/root/chunk-wgm0dv7j.js";
import { Qht, rKi, rAr } from "B:/~BUN/root/chunk-1zzrbtzr.js";
import { tps as upperLimit, hdo } from "B:/~BUN/root/chunk-yg4ttpr7.js";
import { oEr, sEr } from "B:/~BUN/root/chunk-0xtfwyhv.js";
import { VAt } from "B:/~BUN/root/chunk-v1x5zyj3.js";
import { zC } from "B:/~BUN/root/chunk-wv4xq162.js";
import { rIe } from "B:/~BUN/root/chunk-z6w90r70.js";
import { she } from "B:/~BUN/root/chunk-0rs69czh.js";
import { ihe } from "B:/~BUN/root/chunk-f9kez3mh.js";
import { V7 } from "B:/~BUN/root/chunk-3ge5g70w.js";
import { e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { GEt } from "B:/~BUN/root/chunk-dg1v0283.js";
import { P9n } from "B:/~BUN/root/chunk-yh9v8ave.js";
import { cwd as T } from "process";
import { stripVTControlCharacters as C } from "util";
import { createInterface as I } from "readline";
function LGt(c, input = process.stdin) {
  let t = () => {},
    promise = new Promise(m => {
      t = m;
    }),
    a = I({
      input: input,
      output: process.stdout
    });
  return a.question(`${c} [y/N] `, m => {
    let _ = m.trim().toLowerCase();
    t(_ === "y" || _ === "yes"), a.close();
  }), a.once("close", () => t(!1)), promise;
}
function cha() {
  return cke({
    ...zC(!1),
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
async function uha(c, u) {
  l("tengu_setup_token_command", {});
  let t = R(u?.expiresInDays);
  if (!t.ok) {
    c.unmount(), process.stderr.write(`${t.message}
`), await Ut("cli_setup_token", t.errorCode), await Co(1);
    return;
  }
  let f = Nfe(!0);
  if (!f.valid) c.unmount(), process.stderr.write(`${f.message}
setup-token creates a long-lived Claude.ai subscription token, which this policy does not permit.
`), await Ut("cli_setup_token", "force_login_method_refused"), await Co(1);
  let a = kZe("firstParty");
  if (a !== void 0) c.unmount(), process.stderr.write(`${a}
setup-token creates a long-lived Claude.ai subscription token, which this machine's allowedProviders policy does not permit.
`), await Ut("cli_setup_token", "provider_not_allowed"), await Co(1);
  let m = !Qa(),
    {
      ConsoleOAuthFlow: ConsoleOAuthFlow
    } = await import("B:/~BUN/root/chunk-s4k8tam2.js"),
    session = H(),
    h = !1,
    S = !1;
  if (await new Promise(w => {
    c.render(e(SS, {
      session: session,
      onChangeAppState: k => she(k, session),
      children: r(s, {
        flexDirection: "column",
        gap: 1,
        children: [e(ihe, {}), m && r(s, {
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
              w();
            },
            onAccountOnHold: () => {
              h = !0, w();
            },
            onOrgConfigRefused: () => {
              S = !0, w();
            },
            mode: "setup-token",
            expiresIn: t.seconds,
            urlOutdent: 1
          })]
        })]
      })
    }));
  }), c.unmount(), h) {
    await Ut("cli_setup_token", "account_on_hold"), await Co(1);
    return;
  }
  if (S) {
    await Ut("cli_setup_token", "org_config_refused"), await Co(1);
    return;
  }
  await Lr("cli_setup_token"), await Co(0);
}
async function fha(storageV5) {
  l("tengu_doctor_command", {});
  let u;
  try {
    let t = await VAt({
        probeKeychain: !0,
        storageV5: storageV5
      }),
      f = V7(),
      a = ["Claude Code doctor", "", `Running: ${t.installationType} (${t.version})`, ...({
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.319",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-11-05T18:14:18Z",
        GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
        HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "win32"
      }.GIT_SHA ? [`Commit: ${{
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.319",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-11-05T18:14:18Z",
        GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
        HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "win32"
      }.GIT_SHA.slice(0, 12)}`] : []), "Platform: win32-x64", ...(t.packageManager ? [`Package manager: ${d(t.packageManager)}`] : []), `Path: ${d(t.installationPath)}`, ...(t.invokedBinary !== t.installationPath ? [`Invoked: ${d(t.invokedBinary)}`] : []), `Config install method: ${d(t.configInstallMethod)}`, `Search: ${t.ripgrepStatus.working ? "OK" : "Not working"} (${t.ripgrepStatus.mode === "embedded" ? "bundled" : d(t.ripgrepStatus.systemPath || "system")})`, `Auto-updates: ${t.packageManager ? "Managed by package manager" : d(t.autoUpdates)}`, `Auto-update channel: ${f === "rc" ? "slow" : f}`, `Last update attempt: ${E(t.lastUpdateResult)}`],
      m = Qht();
    if (m) a.push(`Managed settings (remote): ${d(rAr(m))}`);else if (rKi()) a.push("Managed settings (remote): checking\u2026 (fetch in progress; re-run in a moment)");
    {
      let {
          waitForPolicyLimitsToLoad: waitForPolicyLimitsToLoad,
          POLICY_LIMITS_FIRST_ATTEMPT_WAIT_MS: POLICY_LIMITS_FIRST_ATTEMPT_WAIT_MS
        } = await import("B:/~BUN/root/chunk-4gnegddh.js"),
        {
          getLastFetchOutcome: getLastFetchOutcome
        } = await import("B:/~BUN/root/chunk-d3cxfvj4.js"),
        b = !1,
        v = waitForPolicyLimitsToLoad().then(() => {
          b = !0;
        }),
        A = Date.now() + POLICY_LIMITS_FIRST_ATTEMPT_WAIT_MS;
      while (!b && getLastFetchOutcome() === null && Date.now() < A) await Promise.race([v, J(200)]);
    }
    let _ = a.push("Organization policy: \u2026") - 1,
      {
        statusNotices: statusNotices,
        invalidEntries: invalidEntries
      } = GEt(rIe().errors);
    if (invalidEntries.length > 0) {
      a.push("", Se.yellow("Invalid settings"));
      for (let o of invalidEntries) {
        let p = [o.file, o.path].flatMap(item => item ? [d(item)] : []).join(" \u203A ");
        a.push(`- ${p ? `${p}: ` : ""}${d(o.message)}${o.suggestion ? `
  Suggested fix: ${d(o.suggestion)}` : ""}`);
      }
    }
    if (statusNotices.length > 0) {
      a.push("");
      for (let o of statusNotices) a.push(`- ${d(o.message)}`);
    }
    let S = await P9n();
    if (S.length > 0) {
      a.push("", Se.yellow("Permission rules that may not work as written"));
      for (let o of S) a.push(`- ${d(o)}`);
    }
    let w = szn();
    if (w.length > 0) {
      a.push("");
      for (let [o, p] of w) a.push(`- ${o}
  ${p}`);
    }
    let k = [{
      name: "BASH_MAX_OUTPUT_LENGTH",
      default: hdo,
      upperLimit: upperLimit
    }, {
      name: "CLAUDE_CODE_MAX_OUTPUT_TOKENS",
      ...Wbe("claude-opus-4-6")
    }].map(item => ({
      name: item.name,
      ...Ion(item.name, process.env[item.name], item.default, item.upperLimit)
    })).filter(item => item.status !== "valid");
    if (k.length > 0) {
      a.push("", Se.yellow("Environment variables"));
      for (let o of k) a.push(`- ${o.name}: ${d(o.message ?? o.status)}`);
    }
    if (t.multipleInstallations.length > 1) {
      a.push("", Se.yellow("Multiple installations found"));
      for (let o of t.multipleInstallations) a.push(`- ${d(`${o.type} at ${o.path}`)}`);
    }
    try {
      let o = await fSs();
      if (a.push("", "Remote Control"), o.inRemoteSession) a.push("Inside a cloud session \u2014 Remote Control is unavailable here. Use it from the local session instead.");else {
        a.push(d(o.disabledReason ?? "Control this session from claude.ai/code or the Claude mobile app"));
        for (let p of o.checks.filter(item => !item.ok)) a.push(d(`- ${p.label}${p.detail ? ` (${p.detail})` : ""}`));
      }
    } catch {
      await Ls("cli_doctor", "bridge_info_unavailable");
    }
    if (a[_] = `Organization policy: ${d(sEr(oEr()))}`, t.warnings.length > 0) {
      a.push("", Se.yellow(`${t.warnings.length} ${P(t.warnings.length, "warning")} found`));
      for (let o of t.warnings) a.push(`- ${d(o.issue)}`, `  Fix: ${d(o.fix)}`);
    } else a.push("", "No installation issues found.");
    a.push("", "For a full setup checkup that can also fix issues, run /doctor in a Claude Code session."), oo(a.join(`
`) + `
`), u = {
      warnings: t.warnings.length,
      settings_errors: invalidEntries.length,
      env_var_issues: k.length,
      multiple_installs: t.multipleInstallations.length > 1,
      ripgrep_working: t.ripgrepStatus.working
    };
  } catch (error) {
    throw await Ut("cli_doctor", "diagnostic_failed"), error;
  }
  await Lr("cli_doctor", u), await Co(0);
}
function d(c) {
  return Nn(C(c)).replaceAll("`", "");
}
function E(c) {
  if (!c) return "none recorded";
  let u = d(c.timestamp.slice(0, 10));
  switch (c.outcome) {
    case "success":
      return c.version_to ? `success \u2192 ${d(c.version_to)} (${u})` : `success (${u})`;
    case "failed":
      return `failed (${d(c.status)}) \u2014 ${u}`;
  }
}
async function pha(c, u, storageV5_2) {
  if (i.DISABLE_UPDATES) process.stdout.write(`Updates are disabled by your administrator. Contact your IT team to get the latest version.
`), process.exit(0);
  let {
    awaitPolicyLimitsColdStart: awaitPolicyLimitsColdStart
  } = await import("B:/~BUN/root/chunk-4gnegddh.js");
  await awaitPolicyLimitsColdStart();
  let {
    setup: setup
  } = await import("B:/~BUN/root/chunk-790agxm6.js");
  await setup(T(), "default", !1, !1, void 0, !1, void 0, void 0, void 0, storageV5_2);
  let {
    install: install
  } = await import("B:/~BUN/root/chunk-8wtp8nr7.js");
  await new Promise(_ => {
    let g = [];
    if (c) g.push(c);
    if (u.force) g.push("--force");
    install.call(async h => {
      if (h.includes("failed")) await Ut("cli_install", "cli_install_failed");else await Lr("cli_install");
      await Co(h.includes("failed") ? 1 : 0), _();
    }, {
      storageV5: storageV5_2
    }, g);
  });
}
export { LGt, cha, uha, fha, pha };