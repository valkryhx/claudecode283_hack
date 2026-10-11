// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  j3
} from "B:/~BUN/root/chunk-zbbat3z2.js";
var w = {},
  R = {};
async function b() {
  let {
    exitWithError: o
  } = await import("B:/~BUN/root/chunk-gcjetqnn.js"), {
    getSettingsWithErrors: e
  } = await import("B:/~BUN/root/chunk-bkfhtpzp.js");
  if (e().settings.disableRemoteControl === !0) o(`Error: ${j3}`);
  let [{
    hasStoredOAuthToken: t
  }, {
    BRIDGE_LOGIN_ERROR: n
  }, {
    getBridgeAuthDebugInfo: r
  }] = await Promise.all([import("B:/~BUN/root/chunk-3vayk698.js"), import("B:/~BUN/root/chunk-q8ahtwq4.js"), import("B:/~BUN/root/chunk-5px3whmg.js")]);
  if (!t()) o(n + r());
  return w
}
async function h(o) {
  let {
    getBridgeDisabledDiagnosis: e,
    getBridgeAuthDebugInfo: t,
    ensurePolicyLimitsLoadedForDiagnostic: n
  } = await import("B:/~BUN/root/chunk-5px3whmg.js"), {
    checkBridgeMinVersion: r
  } = await import("B:/~BUN/root/chunk-s8kpvpga.js"), {
    exitWithError: i
  } = await import("B:/~BUN/root/chunk-gcjetqnn.js"), {
    logOrgPolicyDeniedAsync: l
  } = await import("B:/~BUN/root/chunk-4z0ecj52.js"), a = await e();
  if (a) {
    if (a.orgPolicyDenied) await l("allow_remote_control", "cli_flag");
    await m(a.code), i(`Error: ${a.reason}` + t())
  }
  let s = r();
  if (s) await m("version_floor"), i(s);
  let {
    policyDeniedReason: c
  } = await import("B:/~BUN/root/chunk-chs7cbd2.js");
  await n();
  let u = c("allow_remote_control", "Remote Control", "is", "Remote Control is disabled by your organization's policy.");
  if (u !== null) await l("allow_remote_control", "cli_flag"), await m("policy_denied"), i(`Error: ${u}`);
  return R
}
async function m(o) {
  let [{
    logFeatureBadAsync: e
  }, {
    flushAnalyticsBeforeExit: t
  }] = await Promise.all([import("B:/~BUN/root/chunk-sd62g3gg.js"), import("B:/~BUN/root/chunk-63z96e4j.js")]);
  await e("remote_control_entry", o), await t()
}
async function C(o, e, t, n) {
  let [{
    preflightTrustedDeviceBlocking: r,
    sayHeldAutomaticEnrollmentNoticeOnStderr: i
  }, {
    shutdown1PEventLogging: l
  }, {
    shutdownDatadog: a
  }, {
    sleep: s
  }, {
    exitWithError: c
  }, {
    bridgeMain: u
  }, {
    initializeGrowthBook: g
  }, {
    logForDebugging: f
  }, {
    logFeatureBadAsync: y
  }] = await Promise.all([import("B:/~BUN/root/chunk-7y6ync74.js"), import("B:/~BUN/root/chunk-me7h05sq.js"), import("B:/~BUN/root/chunk-a8x2gs0b.js"), import("B:/~BUN/root/chunk-bcqh7a5d.js"), import("B:/~BUN/root/chunk-gcjetqnn.js"), import("B:/~BUN/root/chunk-3v0jd8mf.js"), import("B:/~BUN/root/chunk-7qwqa2vj.js"), import("B:/~BUN/root/chunk-589gejwf.js"), import("B:/~BUN/root/chunk-sd62g3gg.js")]);
  g().catch((d) => {
    f(`[remote-control] GrowthBook init failed (${d instanceof Error?d.name:typeof d}); feature gates keep serving the disk cache`, {
      level: "error"
    })
  });
  let p = await r(n);
  if (i(), p) await y("remote_control_entry", "trusted_device_unenrolled"), await Promise.race([Promise.all([l(), a()]), s(500, void 0, {
    unref: !0
  })]).catch(() => {}), c(`Error: ${p}`);
  await u(e, t, n)
}
async function O(o, e, t) {
  let n = await b(),
    r = await h(n);
  await C(r, o, e, t)
}
var E = new Map([
  ["verbose", () => !0],
  ["debug", () => !0],
  ["debugToStderr", () => !0],
  ["debugFile", () => !0],
  ["axScreenReader", () => !0],
  ["workload", () => !0],
  ["sessionId", () => !0],
  ["name", () => !0],
  ["remoteControlSessionNamePrefix", () => !0],
  ["pluginDir", () => !0],
  ["pluginDirNoMcp", () => !0],
  ["pluginUrl", () => !0],
  ["addDir", () => !0],
  ["ide", () => !0],
  ["chrome", (o) => o === !0],
  ["model", () => !0],
  ["effort", () => !0],
  ["fallbackModel", () => !0],
  ["betas", () => !0],
  ["thinking", () => !0],
  ["thinkingDisplay", () => !0],
  ["maxThinkingTokens", () => !0],
  ["autocompact", () => !0],
  ["allowedTools", () => !0],
  ["dangerouslySkipPermissions", () => !0],
  ["allowDangerouslySkipPermissions", () => !0],
  ["enableAutoMode", () => !0],
  ["bare", () => !0]
]);

function _(o) {
  let e = o.parent;
  if (e === null) return [];
  let t = new Map;
  for (let n of e.options) {
    let r = n.attributeName();
    if (t.has(r) || e.getOptionValueSource(r) !== "cli") continue;
    let i = e.getOptionValue(r),
      l = e.options.find((a) => a.attributeName() === r && a.negate === (i === !1)) ?? n;
    t.set(r, {
      flag: l.long ?? l.flags,
      key: r,
      value: i
    })
  }
  return [...t.values()]
}

function S(o) {
  return o.filter(({
    key: e,
    value: t
  }) => !E.get(e)?.(t)).map(({
    flag: e
  }) => e)
}

function v(o) {
  let e = o.map((i) => `\`${i}\``).join(", "),
    [t, n] = o.length === 1 ? ["it", "is"] : ["them", "are"],
    r = o.includes("--permission-mode") ? " Set the permission mode with `claude remote-control --permission-mode <mode>`." : "";
  return `Error: ${e} before \`remote-control\` ${n} not carried over to the sessions Remote Control starts, so Remote Control refuses to start rather than drop ${t} \u2014 remove ${t}, and give Remote Control's own options after the verb (see \`claude remote-control --help\`).` + r
}
export {
  O as enterRemoteControl, h as refuseRemoteControlIneligible, b as refuseRemoteControlLocally, v as rootOptionsRefusedMessage, S as rootOptionsRemoteControlRefuses, C as startRemoteControl, _ as suppliedRootOptions
};
