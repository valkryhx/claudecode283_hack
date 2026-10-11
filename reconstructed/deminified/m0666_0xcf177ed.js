// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { j3 } from "B:/~BUN/root/chunk-zbbat3z2.js";
var w = {},
  R = {};
async function b() {
  let {
      exitWithError: exitWithError
    } = await import("B:/~BUN/root/chunk-gcjetqnn.js"),
    {
      getSettingsWithErrors: getSettingsWithErrors
    } = await import("B:/~BUN/root/chunk-bkfhtpzp.js");
  if (getSettingsWithErrors().settings.disableRemoteControl === !0) exitWithError(`Error: ${j3}`);
  let [{
    hasStoredOAuthToken: hasStoredOAuthToken
  }, {
    BRIDGE_LOGIN_ERROR: BRIDGE_LOGIN_ERROR
  }, {
    getBridgeAuthDebugInfo: getBridgeAuthDebugInfo
  }] = await Promise.all([import("B:/~BUN/root/chunk-3vayk698.js"), import("B:/~BUN/root/chunk-q8ahtwq4.js"), import("B:/~BUN/root/chunk-5px3whmg.js")]);
  if (!hasStoredOAuthToken()) exitWithError(BRIDGE_LOGIN_ERROR + getBridgeAuthDebugInfo());
  return w;
}
async function h(o) {
  let {
      getBridgeDisabledDiagnosis: getBridgeDisabledDiagnosis,
      getBridgeAuthDebugInfo: getBridgeAuthDebugInfo_2,
      ensurePolicyLimitsLoadedForDiagnostic: ensurePolicyLimitsLoadedForDiagnostic
    } = await import("B:/~BUN/root/chunk-5px3whmg.js"),
    {
      checkBridgeMinVersion: checkBridgeMinVersion
    } = await import("B:/~BUN/root/chunk-s8kpvpga.js"),
    {
      exitWithError: exitWithError_2
    } = await import("B:/~BUN/root/chunk-gcjetqnn.js"),
    {
      logOrgPolicyDeniedAsync: logOrgPolicyDeniedAsync
    } = await import("B:/~BUN/root/chunk-4z0ecj52.js"),
    a = await getBridgeDisabledDiagnosis();
  if (a) {
    if (a.orgPolicyDenied) await logOrgPolicyDeniedAsync("allow_remote_control", "cli_flag");
    await m(a.code), exitWithError_2(`Error: ${a.reason}` + getBridgeAuthDebugInfo_2());
  }
  let s = checkBridgeMinVersion();
  if (s) await m("version_floor"), exitWithError_2(s);
  let {
    policyDeniedReason: policyDeniedReason
  } = await import("B:/~BUN/root/chunk-chs7cbd2.js");
  await ensurePolicyLimitsLoadedForDiagnostic();
  let u = policyDeniedReason("allow_remote_control", "Remote Control", "is", "Remote Control is disabled by your organization's policy.");
  if (u !== null) await logOrgPolicyDeniedAsync("allow_remote_control", "cli_flag"), await m("policy_denied"), exitWithError_2(`Error: ${u}`);
  return R;
}
async function m(o) {
  let [{
    logFeatureBadAsync: logFeatureBadAsync
  }, {
    flushAnalyticsBeforeExit: flushAnalyticsBeforeExit
  }] = await Promise.all([import("B:/~BUN/root/chunk-sd62g3gg.js"), import("B:/~BUN/root/chunk-63z96e4j.js")]);
  await logFeatureBadAsync("remote_control_entry", o), await flushAnalyticsBeforeExit();
}
async function C(o, e, t, n) {
  let [{
    preflightTrustedDeviceBlocking: preflightTrustedDeviceBlocking,
    sayHeldAutomaticEnrollmentNoticeOnStderr: sayHeldAutomaticEnrollmentNoticeOnStderr
  }, {
    shutdown1PEventLogging: shutdown1PEventLogging
  }, {
    shutdownDatadog: shutdownDatadog
  }, {
    sleep: sleep
  }, {
    exitWithError: exitWithError_3
  }, {
    bridgeMain: bridgeMain
  }, {
    initializeGrowthBook: initializeGrowthBook
  }, {
    logForDebugging: logForDebugging
  }, {
    logFeatureBadAsync: logFeatureBadAsync_2
  }] = await Promise.all([import("B:/~BUN/root/chunk-7y6ync74.js"), import("B:/~BUN/root/chunk-me7h05sq.js"), import("B:/~BUN/root/chunk-a8x2gs0b.js"), import("B:/~BUN/root/chunk-bcqh7a5d.js"), import("B:/~BUN/root/chunk-gcjetqnn.js"), import("B:/~BUN/root/chunk-3v0jd8mf.js"), import("B:/~BUN/root/chunk-7qwqa2vj.js"), import("B:/~BUN/root/chunk-589gejwf.js"), import("B:/~BUN/root/chunk-sd62g3gg.js")]);
  initializeGrowthBook().catch(d => {
    logForDebugging(`[remote-control] GrowthBook init failed (${d instanceof Error ? d.name : typeof d}); feature gates keep serving the disk cache`, {
      level: "error"
    });
  });
  let p = await preflightTrustedDeviceBlocking(n);
  if (sayHeldAutomaticEnrollmentNoticeOnStderr(), p) await logFeatureBadAsync_2("remote_control_entry", "trusted_device_unenrolled"), await Promise.race([Promise.all([shutdown1PEventLogging(), shutdownDatadog()]), sleep(500, void 0, {
    unref: !0
  })]).catch(() => {}), exitWithError_3(`Error: ${p}`);
  await bridgeMain(e, t, n);
}
async function O(o, e, t) {
  let n = await b(),
    r = await h(n);
  await C(r, o, e, t);
}
var E = new Map([["verbose", () => !0], ["debug", () => !0], ["debugToStderr", () => !0], ["debugFile", () => !0], ["axScreenReader", () => !0], ["workload", () => !0], ["sessionId", () => !0], ["name", () => !0], ["remoteControlSessionNamePrefix", () => !0], ["pluginDir", () => !0], ["pluginDirNoMcp", () => !0], ["pluginUrl", () => !0], ["addDir", () => !0], ["ide", () => !0], ["chrome", o => o === !0], ["model", () => !0], ["effort", () => !0], ["fallbackModel", () => !0], ["betas", () => !0], ["thinking", () => !0], ["thinkingDisplay", () => !0], ["maxThinkingTokens", () => !0], ["autocompact", () => !0], ["allowedTools", () => !0], ["dangerouslySkipPermissions", () => !0], ["allowDangerouslySkipPermissions", () => !0], ["enableAutoMode", () => !0], ["bare", () => !0]]);
function _(o) {
  let parent = o.parent;
  if (parent === null) return [];
  let t = new Map();
  for (let n of parent.options) {
    let key = n.attributeName();
    if (t.has(key) || parent.getOptionValueSource(key) !== "cli") continue;
    let value = parent.getOptionValue(key),
      l = parent.options.find(item => item.attributeName() === key && item.negate === (value === !1)) ?? n;
    t.set(key, {
      flag: l.long ?? l.flags,
      key: key,
      value: value
    });
  }
  return [...t.values()];
}
function S(o) {
  return o.filter(({
    key: key_2,
    value: value_2
  }) => !E.get(key_2)?.(value_2)).map(({
    flag: flag
  }) => flag);
}
function v(o) {
  let e = o.map(item => `\`${item}\``).join(", "),
    [t, n] = o.length === 1 ? ["it", "is"] : ["them", "are"],
    r = o.includes("--permission-mode") ? " Set the permission mode with `claude remote-control --permission-mode <mode>`." : "";
  return `Error: ${e} before \`remote-control\` ${n} not carried over to the sessions Remote Control starts, so Remote Control refuses to start rather than drop ${t} \u2014 remove ${t}, and give Remote Control's own options after the verb (see \`claude remote-control --help\`).` + r;
}
export { O as enterRemoteControl, h as refuseRemoteControlIneligible, b as refuseRemoteControlLocally, v as rootOptionsRefusedMessage, S as rootOptionsRemoteControlRefuses, C as startRemoteControl, _ as suppliedRootOptions };