// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Q } from "B:/~BUN/root/chunk-17wqwt36.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { j } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { LY as seconds, Hzr as days } from "B:/~BUN/root/chunk-zksmb712.js";
import { tr } from "B:/~BUN/root/chunk-0fnha6bz.js";
import { I } from "B:/~BUN/root/chunk-y04k89s2.js";
import { pe } from "B:/~BUN/root/chunk-nf4z9ga7.js";
import { B6, Hl, hRe } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { Ai, gn, mc } from "B:/~BUN/root/chunk-51n463p1.js";
import { Tn } from "B:/~BUN/root/chunk-rwwxddqq.js";
import { DPr } from "B:/~BUN/root/chunk-x8507144.js";
import { s, n, d_t } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { Ds } from "B:/~BUN/root/chunk-zahshfs3.js";
import { W_ } from "B:/~BUN/root/chunk-9hqq0jcs.js";
import { fMe, _co, mJt } from "B:/~BUN/root/chunk-3jyp964r.js";
import { pNe, txr as upperLimit, D1n } from "B:/~BUN/root/chunk-q5ke49kw.js";
import { yan, _an } from "B:/~BUN/root/chunk-7d9qjs8x.js";
import { uGe } from "B:/~BUN/root/chunk-nwhcj0v8.js";
import { oO } from "B:/~BUN/root/chunk-nv4r2ffa.js";
import { Ooe } from "B:/~BUN/root/chunk-mtjq1vv3.js";
import { Xde } from "B:/~BUN/root/chunk-c7zem10c.js";
import { r5 } from "B:/~BUN/root/chunk-er7dv46y.js";
import { nje } from "B:/~BUN/root/chunk-gr2k5vsr.js";
import { Ij } from "B:/~BUN/root/chunk-49z18y6z.js";
import { e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { cwd as A } from "process";
import { stripVTControlCharacters as v } from "util";
import { createInterface as P } from "readline";
function J_e(c, input = process.stdin) {
  let t = () => {},
    promise = new Promise(p => {
      t = p;
    }),
    l = P({
      input: input,
      output: process.stdout
    });
  return l.question(`${c} [y/N] `, p => {
    let f = p.trim().toLowerCase();
    t(f === "y" || f === "yes"), l.close();
  }), l.once("close", () => t(!1)), promise;
}
function PVo() {
  return d_t({
    ...oO(!1),
    patchConsole: !1
  });
}
function E(c) {
  return {
    ok: !0,
    days: days,
    seconds: seconds
  };
}
async function IVo(c, d) {
  i("tengu_setup_token_command", {});
  let t = E(d?.expiresInDays);
  if (!t.ok) {
    c.unmount(), process.stderr.write(`${t.message}
`), await gn("cli_setup_token", t.errorCode), await Ds(1);
    return;
  }
  let m = hRe(!0);
  if (!m.valid) c.unmount(), process.stderr.write(`${m.message}
setup-token creates a long-lived Claude.ai subscription token, which this policy does not permit.
`), await gn("cli_setup_token", "force_login_method_refused"), await Ds(1);
  let l = !Hl(),
    {
      ConsoleOAuthFlow: ConsoleOAuthFlow
    } = await import("B:/~BUN/root/chunk-2v1jtsqk.js"),
    session = j(),
    g = !1;
  if (await new Promise(h => {
    c.render(e(W_, {
      session: session,
      onChangeAppState: y => Xde(y, session),
      children: r(s, {
        flexDirection: "column",
        gap: 1,
        children: [e(r5, {}), l && r(s, {
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
              h();
            },
            onAccountOnHold: () => {
              g = !0, h();
            },
            mode: "setup-token",
            expiresIn: t.seconds,
            urlOutdent: 1
          })]
        })]
      })
    }));
  }), c.unmount(), g) {
    await gn("cli_setup_token", "account_on_hold"), await Ds(1);
    return;
  }
  await Ai("cli_setup_token"), await Ds(0);
}
async function OVo(storageV5) {
  i("tengu_doctor_command", {});
  let d;
  try {
    let t = await uGe({
        probeKeychain: !0,
        storageV5: storageV5
      }),
      m = Ij(),
      l = ["Claude Code doctor", "", `Running: ${t.installationType} (${t.version})`, ...({
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.283",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-09-25T00:44:42Z",
        GIT_SHA: "4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",
        HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "win32"
      }.GIT_SHA ? [`Commit: ${{
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.283",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-09-25T00:44:42Z",
        GIT_SHA: "4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",
        HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "win32"
      }.GIT_SHA.slice(0, 12)}`] : []), "Platform: win32-x64", ...(t.packageManager ? [`Package manager: ${u(t.packageManager)}`] : []), `Path: ${u(t.installationPath)}`, ...(t.invokedBinary !== t.installationPath ? [`Invoked: ${u(t.invokedBinary)}`] : []), `Config install method: ${u(t.configInstallMethod)}`, `Search: ${t.ripgrepStatus.working ? "OK" : "Not working"} (${t.ripgrepStatus.mode === "embedded" ? "bundled" : u(t.ripgrepStatus.systemPath || "system")})`, `Auto-updates: ${t.packageManager ? "Managed by package manager" : u(t.autoUpdates)}`, `Auto-update channel: ${m === "rc" ? "slow" : m}`, `Last update attempt: ${b(t.lastUpdateResult)}`],
      p = fMe();
    if (p) l.push(`Managed settings (remote): ${u(mJt(p))}`);else if (_co()) l.push("Managed settings (remote): checking\u2026 (fetch in progress; re-run in a moment)");
    {
      let {
          waitForPolicyLimitsToLoad: waitForPolicyLimitsToLoad,
          POLICY_LIMITS_FIRST_ATTEMPT_WAIT_MS: POLICY_LIMITS_FIRST_ATTEMPT_WAIT_MS
        } = await import("B:/~BUN/root/chunk-mjxpcxa7.js"),
        {
          getLastFetchOutcome: getLastFetchOutcome
        } = await import("B:/~BUN/root/chunk-chs7cbd2.js"),
        S = !1,
        T = waitForPolicyLimitsToLoad().then(() => {
          S = !0;
        }),
        k = Date.now() + POLICY_LIMITS_FIRST_ATTEMPT_WAIT_MS;
      while (!S && getLastFetchOutcome() === null && Date.now() < k) await Promise.race([T, Q(200)]);
    }
    let f = l.push("Organization policy: \u2026") - 1,
      {
        statusNotices: statusNotices,
        invalidEntries: invalidEntries
      } = nje(Ooe().errors);
    if (invalidEntries.length > 0) {
      l.push("", pe.yellow("Invalid settings"));
      for (let o of invalidEntries) {
        let _ = [o.file, o.path].flatMap(item => item ? [u(item)] : []).join(" \u203A ");
        l.push(`- ${_ ? `${_}: ` : ""}${u(o.message)}${o.suggestion ? `
  Suggested fix: ${u(o.suggestion)}` : ""}`);
      }
    }
    if (statusNotices.length > 0) {
      l.push("");
      for (let o of statusNotices) l.push(`- ${u(o.message)}`);
    }
    let y = [{
      name: "BASH_MAX_OUTPUT_LENGTH",
      default: D1n,
      upperLimit: upperLimit
    }, {
      name: "CLAUDE_CODE_MAX_OUTPUT_TOKENS",
      ...B6("claude-opus-4-6")
    }].map(item => ({
      name: item.name,
      ...pNe(item.name, process.env[item.name], item.default, item.upperLimit)
    })).filter(item => item.status !== "valid");
    if (y.length > 0) {
      l.push("", pe.yellow("Environment variables"));
      for (let o of y) l.push(`- ${o.name}: ${u(o.message ?? o.status)}`);
    }
    if (t.multipleInstallations.length > 1) {
      l.push("", pe.yellow("Multiple installations found"));
      for (let o of t.multipleInstallations) l.push(`- ${u(`${o.type} at ${o.path}`)}`);
    }
    try {
      let o = await DPr();
      if (l.push("", "Remote Control"), o.inRemoteSession) l.push("Inside a cloud session \u2014 Remote Control is unavailable here. Use it from the local session instead.");else {
        l.push(u(o.disabledReason ?? "Control this session from claude.ai/code or the Claude mobile app"));
        for (let _ of o.checks.filter(item => !item.ok)) l.push(u(`- ${_.label}${_.detail ? ` (${_.detail})` : ""}`));
      }
    } catch {
      await mc("cli_doctor", "bridge_info_unavailable");
    }
    if (l[f] = `Organization policy: ${u(_an(yan()))}`, t.warnings.length > 0) {
      l.push("", pe.yellow(`${t.warnings.length} ${I(t.warnings.length, "warning")} found`));
      for (let o of t.warnings) l.push(`- ${u(o.issue)}`, `  Fix: ${u(o.fix)}`);
    } else l.push("", "No installation issues found.");
    l.push("", "For a full setup checkup that can also fix issues, run /doctor in a Claude Code session."), tr(l.join(`
`) + `
`), d = {
      warnings: t.warnings.length,
      settings_errors: invalidEntries.length,
      env_var_issues: y.length,
      multiple_installs: t.multipleInstallations.length > 1,
      ripgrep_working: t.ripgrepStatus.working
    };
  } catch (error) {
    throw await gn("cli_doctor", "diagnostic_failed"), error;
  }
  await Ai("cli_doctor", d), await Ds(0);
}
function u(c) {
  return Tn(v(c)).replaceAll("`", "");
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
async function MVo(c, d, storageV5_2) {
  if (a.DISABLE_UPDATES) process.stdout.write(`Updates are disabled by your administrator. Contact your IT team to get the latest version.
`), process.exit(0);
  let {
    awaitPolicyLimitsColdStart: awaitPolicyLimitsColdStart
  } = await import("B:/~BUN/root/chunk-mjxpcxa7.js");
  await awaitPolicyLimitsColdStart();
  let {
    setup: setup
  } = await import("B:/~BUN/root/chunk-mw5pfcfw.js");
  await setup(A(), "default", !1, !1, void 0, !1, void 0, void 0, void 0, storageV5_2);
  let {
    install: install
  } = await import("B:/~BUN/root/chunk-a999zh4j.js");
  await new Promise(f => {
    let g = [];
    if (c) g.push(c);
    if (d.force) g.push("--force");
    install.call(async h => {
      if (h.includes("failed")) await gn("cli_install", "cli_install_failed");else await Ai("cli_install");
      await Ds(h.includes("failed") ? 1 : 0), f();
    }, {
      storageV5: storageV5_2
    }, g);
  });
}
export { J_e, PVo, IVo, OVo, MVo };