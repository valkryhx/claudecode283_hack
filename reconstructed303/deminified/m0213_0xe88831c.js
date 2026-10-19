// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { hk } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { _ } from "B:/~BUN/root/chunk-6za2ez23.js";
import { ne, ld } from "B:/~BUN/root/chunk-nggrknsv.js";
import { sc } from "B:/~BUN/root/chunk-bgdxazfn.js";
import { x, k, qi } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Y } from "B:/~BUN/root/chunk-89mss1tj.js";
import { g, m } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { a, or } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { rmn, dQ } from "B:/~BUN/root/chunk-6ft8yhc8.js";
import { vd } from "B:/~BUN/root/chunk-j8w5f307.js";
import { FZ, Q6e, Odt, GSs, Qxe } from "B:/~BUN/root/chunk-fvn1tqbf.js";
import { ml } from "B:/~BUN/root/chunk-46c1kmhs.js";
import { G1e } from "B:/~BUN/root/chunk-0p1hpv0s.js";
import { spawn as Rt } from "child_process";
import { randomUUID as Pt } from "crypto";
import { lstat as xe, mkdir as vt, open as Fn, readdir as Mn, readFile as Hn, realpath as ye, rm as Un, rmdir as kt, stat as Bn, unlink as qe, writeFile as Ve } from "fs/promises";
import { basename as De, dirname as W, isAbsolute as $t, join as A, relative as Wn, resolve as we, sep as ae } from "path";
var depth_2 = 50;
function Gas(e, t) {
  return {
    certificateFile: He(e, "GIT_SSL_CAINFO", t),
    skipVerification: He(e, "GIT_SSL_NO_VERIFY", t)
  };
}
function He(e, t, n) {
  let r = [];
  for (let [name, value] of Object.entries(e)) {
    if (value === void 0) continue;
    if (name === t) r.unshift({
      name: name,
      value: value
    });else if (n && name.toUpperCase() === t) r.push({
      name: name,
      value: value
    });
  }
  return r;
}
function lRt(e) {
  return e.flatMap(([t, n]) => ["-c", `${t}=${n}`]);
}
var Ee = {
  envOverrides: {},
  commandScopeEntries: [],
  fileSeedLines: ""
};
function y3t(e) {
  let t = e.operator.certificateFile.length > 0,
    n = e.operator.skipVerification.length > 0 || e.role === "child" && e.serverSetsSkipVerification;
  if (!e.routing) return {
    ...Ee,
    decision: {
      role: e.role,
      certificateFile: t ? "left_no_routing" : "left_unset",
      skipVerification: n ? "left" : "unset",
      mountEntries: !1,
      mountVerificationPinned: !1
    }
  };
  switch (e.role) {
    case "prep":
    case "resume":
    case "outcome":
      return yt(e, t, n);
    case "child":
      return Tt(e, e.routing, n);
    case "hook":
      return _t(e, e.routing, t, n);
  }
}
function _t(e, t, n, r) {
  let certificateFile = n ? "left_operators_hook" : "left_unset";
  if (!e.reachesGitMount) return {
    ...Ee,
    decision: {
      role: "hook",
      certificateFile: certificateFile,
      skipVerification: r ? "left" : "unset",
      mountEntries: !1,
      mountVerificationPinned: !1
    }
  };
  let o = URL.canParse(t.mountBaseUrl) ? Ue(t) : [],
    c = Be(o, []),
    d = r && o.length > 0;
  return {
    ...Ee,
    envOverrides: r ? ie(e.operator.skipVerification) : {},
    commandScopeEntries: d ? [["http.sslVerify", "false"], ...c] : c,
    decision: {
      role: "hook",
      certificateFile: certificateFile,
      skipVerification: !r ? "unset" : d ? "moved" : "pinned_off",
      mountEntries: !1,
      mountVerificationPinned: o.length > 0
    }
  };
}
function Et(e, t) {
  return ["", `${new URL(e).origin}.`, `${e}.`].map(item => [`http.${item}sslCAInfo`, t]);
}
function ie(e) {
  let t = {};
  for (let {
    name: name_2
  } of e) t[name_2] = void 0;
  return t;
}
function yt(e, t, n) {
  if (!e.target.mountRouted) return {
    ...Ee,
    decision: {
      role: e.role,
      certificateFile: t ? "left_direct_target" : "left_unset",
      skipVerification: n ? "left" : "unset",
      mountEntries: !1,
      mountVerificationPinned: !1
    }
  };
  let envOverrides = ie(e.operator.skipVerification),
    skipVerification = n ? "pinned_off" : "unset";
  if (!t) return {
    envOverrides: envOverrides,
    commandScopeEntries: [],
    fileSeedLines: "",
    decision: {
      role: e.role,
      certificateFile: "left_unset",
      skipVerification: skipVerification,
      mountEntries: !1,
      mountVerificationPinned: !1
    }
  };
  if (e.trustBundle.status !== "built" || !URL.canParse(e.target.url)) return {
    envOverrides: envOverrides,
    commandScopeEntries: [],
    fileSeedLines: "",
    decision: {
      role: e.role,
      certificateFile: e.trustBundle.status !== "built" ? "left_no_trust_bundle" : "left_unparseable_target",
      skipVerification: skipVerification,
      mountEntries: !1,
      mountVerificationPinned: !1
    }
  };
  return {
    envOverrides: {
      ...ie(e.operator.certificateFile),
      ...envOverrides
    },
    commandScopeEntries: Et(e.target.url, e.trustBundle.path),
    fileSeedLines: "",
    decision: {
      role: e.role,
      certificateFile: "moved",
      skipVerification: skipVerification,
      mountEntries: !0,
      mountVerificationPinned: !1
    }
  };
}
function wt(e) {
  let n = (e.serverCertificateFile ?? e.operator.certificateFile[0]?.value)?.trim();
  if (!n || /[\n\r\0]/.test(n)) return;
  return n;
}
function _e(e) {
  return `"${e.replace(/\\/g, "\\\\").replace(/"/g, "\\\"")}"`;
}
function Ue(e) {
  let t = new Set();
  for (let n of [e.mountBaseUrl, e.pushBaseUrl]) if (n && URL.canParse(n)) {
    for (let r of [new URL(n).origin, n]) if (!r.includes("=")) t.add(r);
  }
  return [...t];
}
function Be(e, t) {
  return [...e, ...t.map(item => `https://${item}/`)].map(item => [`http.${item}.sslVerify`, "true"]);
}
function St(e) {
  return e.map(([t, n]) => {
    let r = t.slice(5, t.length - 10);
    return `[http ${_e(r)}]
	sslVerify = ${n}
`;
  }).join("");
}
function Tt(e, t, n) {
  let r = e.serverCertificateFile !== void 0 || e.operator.certificateFile.length > 0,
    i = wt(e),
    certificateFile_2 = !r ? "left_unset" : !e.gitConfigArm ? "left_git_config_arm_off" : i === void 0 ? "left_unusable_value" : !e.gitReadsEnvironmentConfig ? "left_old_git" : "moved",
    c = Ue(t),
    skipVerification_2 = !n ? "unset" : e.gitConfigArm && e.gitReadsEnvironmentConfig && c.length > 0 ? "moved" : "left",
    commandScopeEntries = [],
    fileSeedLines = "",
    envOverrides_2 = {};
  if (certificateFile_2 === "moved" && i !== void 0) {
    if (commandScopeEntries.push(["http.sslCAInfo", i]), fileSeedLines += `
[http]
	sslCAInfo = ${_e(i)}
`, e.trustBundle.status === "built") for (let l of c) commandScopeEntries.push([`http.${l}.sslCAInfo`, e.trustBundle.path]), fileSeedLines += `[http ${_e(l)}]
	sslCAInfo = ${_e(e.trustBundle.path)}
`;
    envOverrides_2 = {
      GIT_SSL_CAINFO: void 0,
      ...ie(e.operator.certificateFile)
    };
  }
  if (skipVerification_2 === "moved") commandScopeEntries.push(["http.sslVerify", "false"]), fileSeedLines += `${fileSeedLines === "" ? `
` : ""}[http]
	sslVerify = false
`, envOverrides_2 = {
    ...envOverrides_2,
    GIT_SSL_NO_VERIFY: void 0,
    ...ie(e.operator.skipVerification)
  };
  let R = Be(c, e.gitConfigArm ? t.governedHosts : []);
  if (commandScopeEntries.push(...R), R.length > 0) fileSeedLines += `${fileSeedLines === "" ? `
` : ""}${St(R)}`;
  return {
    envOverrides: envOverrides_2,
    commandScopeEntries: commandScopeEntries,
    fileSeedLines: fileSeedLines,
    decision: {
      role: "child",
      certificateFile: certificateFile_2,
      skipVerification: skipVerification_2,
      mountEntries: certificateFile_2 === "moved" && e.trustBundle.status === "built" && c.length > 0,
      mountVerificationPinned: c.length > 0
    }
  };
}
var xOn = "+refs/heads/*:refs/remotes/origin/*";
function bur(e) {
  return e.upstreamUrl;
}
function Ze(e) {
  if (e) return [];
  let {
    depth: depth
  } = Qe();
  return depth === void 0 ? [] : ["--depth", String(depth)];
}
function Qe() {
  let e = a.CLAUDE_RUNNER_FETCH_DEPTH;
  if (e === void 0) return {
    depth: depth_2,
    invalid: void 0
  };
  if (e === "full" || e === "0") return {
    depth: void 0,
    invalid: void 0
  };
  let depth_3 = Number(e);
  if (Number.isInteger(depth_3) && depth_3 > 0) return {
    depth: depth_3,
    invalid: void 0
  };
  return {
    depth: depth_2,
    invalid: e
  };
}
var et = 120000,
  capMs = 600000,
  We = 300000,
  ce = 1800000;
function tt() {
  let e = a.CLAUDE_RUNNER_FETCH_SERVER_PROGRESS_CAP_MS;
  if (e === void 0) return {
    capMs: capMs,
    invalid: void 0,
    clamped: void 0
  };
  if (e === "0" || e.toLowerCase() === "off") return {
    capMs: 0,
    invalid: void 0,
    clamped: void 0
  };
  let t = Number(e);
  if (Number.isInteger(t) && t > 0) {
    let capMs_2 = Math.min(Math.max(t, et), ce);
    return {
      capMs: capMs_2,
      invalid: void 0,
      clamped: capMs_2 === t ? void 0 : e
    };
  }
  return {
    capMs: capMs,
    invalid: e,
    clamped: void 0
  };
}
var $e = 5000,
  nt = /^(Counting objects|Compressing objects|Receiving objects|Resolving deltas|Updating files|Checking out files|Filtering content):\s+(\d+)%(?:\s+\((\d+)\/(\d+)\))?(?:, ([\d.]+) (KiB|MiB|GiB))?/,
  rt = /^(Enumerating objects): (\d{1,15})\b/,
  At = "Receiving objects",
  Ct = {
    KiB: 1024,
    MiB: 1048576,
    GiB: 1073741824
  },
  Gt = 5000,
  Ot = 500,
  POn = 600000,
  Dt = new Set(["worktree"]);
function Lt(e, t = !1) {
  let display,
    client,
    server,
    remoteLines = 0,
    c = e.split(/\r|\n/);
  if (t) c = c.slice(1);
  for (let d of c) {
    if (d.length === 0) continue;
    let sideband = d.startsWith("remote: ");
    if (sideband) remoteLines++;
    let f = sideband ? d.slice(8) : d,
      h = nt.exec(f);
    if (h === null) {
      if (sideband) {
        let y = rt.exec(f);
        if (y !== null) {
          let done = Number(y[2]);
          server = {
            sideband: sideband,
            label: y[1],
            pct: 0,
            done: done,
            raw: `remote: ${y[1]}: ${done}`
          };
        }
      }
      continue;
    }
    let [, label, l, E, S, T, u] = h,
      w = {
        sideband: sideband,
        label: label,
        pct: Math.min(100, Number(l)),
        done: E !== void 0 ? Number(E) : void 0,
        total: S !== void 0 ? Number(S) : void 0,
        bytes: T !== void 0 && u !== void 0 ? Math.round(Number(T) * Ct[u]) : void 0,
        raw: `${sideband ? "remote: " : ""}${label}: ${l}%${E !== void 0 ? ` (${E}/${S})` : ""}`
      };
    if (display = w, sideband) server = w;else client = w;
  }
  return {
    display: display,
    client: client,
    server: server,
    remoteLines: remoteLines
  };
}
var It = 1000;
function Nt(e, t, n) {
  if (e.active) return;
  if (t.display?.sideband) {
    e.active = !0;
    return;
  }
  if (t.remoteLines === 0) return;
  if (e.firstRemoteLineAt === void 0) e.firstRemoteLineAt = n;else if (n - e.firstRemoteLineAt >= It) e.active = !0;
}
function Ft(e, t) {
  if (e === void 0) return !0;
  if (t.label !== e.label) return !0;
  if (t.done !== void 0 && e.done !== void 0) return t.done > e.done || (t.bytes ?? 0) > (e.bytes ?? 0);
  return t.pct > e.pct;
}
function Mt(e, t, n) {
  if (e === void 0 || n.label !== e.label) return !t.has(n.label);
  if (n.done !== void 0 && e.done !== void 0) return n.done > e.done;
  if (n.done === void 0 !== (e.done === void 0)) return !1;
  return n.pct > e.pct;
}
function Ht(e) {
  return e.label === "Resolving deltas" && e.pct === 100;
}
function Ut(e) {
  let t = e.startsWith("remote: "),
    n = t ? e.slice(8) : e;
  return nt.test(n) || t && rt.test(n);
}
var Se = 2000;
function Bt(e, t, n, r) {
  let i = t ? e.replace(/^[^\r\n]*[\r\n]?/, "") : e,
    o = DOn(i, n, r).split(/\r|\n/).filter(item => item.length > 0 && !Ut(item)).join(`
`),
    c = bt(o);
  return mt.test(c) ? c.slice(0, Se) : c.slice(-Se);
}
var de = 1e4,
  Vt = 30000,
  Ge = 3,
  oe = 5,
  Ye = 300,
  je = 150,
  it = 2,
  se = 3,
  Wt = 1000,
  Yt = 15;
function ot() {
  return Boolean(or.CLAUDE_RUNNER_FAIL_FAST_FETCH);
}
function jt() {
  return Boolean(or.CLAUDE_RUNNER_STALL_GIVEUP);
}
function Kt(e) {
  return e.split(`
`).some(item => {
    let n = item.indexOf("Operation too slow");
    if (n === -1) return !1;
    let r = item.slice(0, n);
    return !/\bremote(?: error)?: /.test(r) && /curl 28\b|unable to access '[^']*': $/.test(r);
  });
}
function zt() {
  return Boolean(or.CCR_DELTA_RESET);
}
var st = ["couldn't find remote ref"];
function OOn(e) {
  let t = e.toLowerCase();
  return st.some(item => t.includes(item));
}
var regExp = new RegExp(st[0].replaceAll("i", "[i\\u0130]"), "gi");
function _3t(e) {
  return e.replace(regExp, t => `could not${t.slice(8)}`);
}
class FetchRefNotFoundError extends x {
  constructor(e) {
    super(`git fetch failed (permanent): ${e}`, "git fetch failed (permanent): ref not found on the remote");
    this.name = "FetchRefNotFoundError";
  }
}
var I1 = ["-c", `core.hooksPath=${rmn()}`, "-c", "core.fsmonitor=", "-c", "core.askPass=", "-c", "gc.auto=0", "-c", "maintenance.auto=false"],
  gAe = {
    SELF_HOSTED_RUNNER_POOL_SECRET: void 0,
    SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET: void 0,
    GIT_ALLOW_PROTOCOL: "https:http:ssh"
  },
  M = {
    GIT_NO_LAZY_FETCH: "1",
    GIT_ALLOW_PROTOCOL: "none",
    GIT_SSH_COMMAND: "false",
    GIT_NO_REPLACE_OBJECTS: "1",
    GIT_TERMINAL_PROMPT: "0",
    CLAUDE_CODE_SESSION_ACCESS_TOKEN: void 0
  },
  Jt = ["-c", "alias.remote-none=", "-c", "fetch.bundleURI="];
async function Vas(e) {
  let {
      baseDir: baseDir,
      sources: sources,
      outcomes: outcomes,
      skipValidation: skipValidation,
      alwaysFetch: alwaysFetch,
      skipReset: skipReset,
      initWithoutTemplate: initWithoutTemplate,
      onDebug: onDebug,
      onPhase: onPhase,
      onProgress: onProgress,
      signal: signal
    } = e,
    l = kn(outcomes ?? []);
  for (let source of sources) {
    if (!Eto(source.type)) {
      onDebug(`[byoc:git] Skipping unsupported source type: ${source.type}`);
      continue;
    }
    await xt({
      baseDir: baseDir,
      source: source,
      targetBranch: l.get(source.repo),
      skipValidation: skipValidation ?? !1,
      alwaysFetch: alwaysFetch ?? !1,
      skipReset: skipReset ?? !0,
      initWithoutTemplate: initWithoutTemplate ?? !1,
      onDebug: onDebug,
      onPhase: onPhase,
      onProgress: onProgress,
      signal: signal
    });
  }
}
function Eto(e) {
  return e === "github" || e === "github-ssh" || e === "test-file";
}
async function xt(e) {
  let t = Date.now();
  try {
    let {
      repoExisted: n
    } = await qt(e);
    g("byoc_git_prepare_repo", {
      repo_existed: n,
      duration_ms: Date.now() - t
    });
  } catch (error) {
    throw m("byoc_git_prepare_repo", "error", {
      duration_ms: Date.now() - t
    }), error;
  }
}
async function qt(e) {
  let {
      baseDir: baseDir_2,
      source: source_2,
      targetBranch: targetBranch,
      skipValidation: skipValidation_2,
      alwaysFetch: alwaysFetch_2,
      skipReset: skipReset_2,
      initWithoutTemplate: initWithoutTemplate_2,
      onDebug: onDebug_2,
      onPhase: onPhase_2,
      onProgress: onProgress_2,
      signal: signal_2
    } = e,
    gitURL = Rn(source_2),
    authURL = source_2.getAuthToken ? gitURL : Rto(gitURL, source_2.token),
    repoPath = Ato(baseDir_2, source_2);
  if (!repoPath) throw Error(`Could not determine repository directory for: ${source_2.repo}`);
  if (source_2.ref && !hk(source_2.ref)) throw Error(`Invalid ref: ${source_2.ref}`);
  if (targetBranch && !hk(targetBranch)) throw Error(`Invalid target branch: ${targetBranch}`);
  let T = Date.now();
  onDebug_2(`[byoc:git] Preparing ${source_2.repo} at ${repoPath} (ref=${source_2.ref ?? "HEAD"}, auth=${source_2.getAuthToken ? "git-proxy" : authURL !== gitURL})`);
  let {
    invalid: invalid
  } = Qe();
  if (invalid !== void 0) onDebug_2(`[byoc:git] Ignoring CLAUDE_RUNNER_FETCH_DEPTH='${invalid}' \u2014 expected 'full', '0', or a positive integer; using default ${depth_2}`);
  let w = tt();
  if (w.invalid !== void 0) onDebug_2(`[byoc:git] Ignoring CLAUDE_RUNNER_FETCH_SERVER_PROGRESS_CAP_MS='${w.invalid}' \u2014 expected a positive integer (milliseconds), '0' or 'off'; using default ${capMs}`);else if (w.clamped !== void 0) onDebug_2(`[byoc:git] CLAUDE_RUNNER_FETCH_SERVER_PROGRESS_CAP_MS='${w.clamped}' is ${w.capMs === ce ? "above the thirty-minute ceiling" : "below the two-minute floor"}; using ${w.capMs} ms`);
  let y = {
      repoPath: repoPath,
      gitURL: gitURL,
      authURL: authURL,
      originURL: bur(source_2) ?? authURL,
      token: source_2.token,
      getAuthToken: source_2.getAuthToken,
      governedMount: source_2.governedMount,
      gitEnvironment: source_2.gitEnvironment,
      sanitized: source_2.sanitized,
      initWithoutTemplate: initWithoutTemplate_2,
      onDebug: onDebug_2,
      onPhase: onPhase_2,
      onProgress: onProgress_2,
      signal: signal_2
    },
    P = void 0;
  if (!skipValidation_2) await Oe(y, "validateAccess", () => tn(y));
  let repoExisted = await Oe(y, "ensureRepository", () => an(y, baseDir_2, P !== void 0));
  if (alwaysFetch_2) await Ae(y, source_2.ref, skipReset_2, repoExisted, source_2.prefetchedTip, source_2.standbyCheckout, P);else if (repoExisted && !source_2.ref) onDebug_2("[byoc:git] Using prefetched repo as-is (no ref requested)");else if (repoExisted && source_2.ref) {
    if (targetBranch && (await lt(y, targetBranch))) return onDebug_2(`[byoc:git] Task branch ${targetBranch} exists on remote, fetching it`), await ut(y, targetBranch, repoExisted), onDebug_2(`[byoc:git] Ready: ${source_2.repo} (${Date.now() - T}ms)`), {
      repoExisted: repoExisted
    };
    if (await En(y, source_2.ref)) onDebug_2(`[byoc:git] Ref ${source_2.ref} resolves locally, skipping fetch`), await p(y, y.repoPath, ["checkout", "--progress", "--force", source_2.ref]);else await Ae(y, source_2.ref, !1, repoExisted);
  } else await Ae(y, source_2.ref, !1, repoExisted);
  if (targetBranch) await _n(y, targetBranch, repoExisted);
  return onDebug_2(`[byoc:git] Ready: ${source_2.repo} (${Date.now() - T}ms)`), {
    repoExisted: repoExisted
  };
}
function V(e, t, n, r) {
  e.onDebug(`[byoc:git] phase ${t} ${n}ms${r ? " " + _(r) : ""}`);
  try {
    e.onPhase?.(t, n, r);
  } catch (error) {
    e.onDebug(`[byoc:git] onPhase callback threw: ${O(error)}`);
  }
}
async function Oe(e, t, n, r, i = Date.now()) {
  let o = await n();
  return V(e, t, Date.now() - i, r), o;
}
var qas = {
    repo_not_found_or_no_permission: "repository not found or no permission",
    no_credentials: "no credentials for the repository's git host",
    authentication_failed: "authentication failed",
    blocked_by_git_proxy: "blocked by the git proxy"
  },
  Zt = [[/^fatal: repository '.*' not found$/, "repo_not_found_or_no_permission"], [/^fatal: unable to access '.*': the requested url returned error: 404$/, "repo_not_found_or_no_permission"], [/^error: repository not found\.?$/, "repo_not_found_or_no_permission"], [/^fatal: could not read (username|password) for /, "no_credentials"], [/^fatal: authentication failed for /, "authentication_failed"], [/^fatal: unable to access '.*': the requested url returned error: 401$/, "authentication_failed"], [/^\S+@\S+: permission denied \(publickey(,[a-z0-9,-]+)?\)\.?$/, "authentication_failed"]],
  Qt = /^fatal: unable to access '.*': the requested url returned error: (?!40[14]$)\d+$/;
function en(e, t) {
  if (/^git \S+ failed \(watchdog:/.test(e)) return;
  let n = e.replace(/^git \S+ failed: /, "");
  if (n.length >= Se) return;
  let r = n.toLowerCase().split(`
`).map(item => item.trim());
  if (t) return r.some(item => item.startsWith("remote: access denied by the git proxy")) ? "blocked_by_git_proxy" : void 0;
  if (r.some(item => Qt.test(item))) return;
  for (let [i, o] of Zt) if (r.some(item => i.test(item))) return o;
  return;
}
class RepositoryAccessError extends x {
  denial;
  constructor(e, t) {
    super(`Repository access validation failed after ${Ge} attempts: ${O(e)}`, "Repository access validation failed");
    this.name = "RepositoryAccessError", this.denial = en(O(e), t);
  }
}
async function tn(e) {
  let t = 2000 + Math.random() * 2000,
    n;
  for (let r = 0; r < Ge; r++) {
    if (r > 0) {
      let i = t * (1 << r - 1);
      e.onDebug(`[byoc:git] Validation retry ${r + 1}/${Ge}, backing off ${Math.round(i)}ms`), await Y(i, e.signal, {
        throwOnAbort: !0
      });
    }
    try {
      if (await p(e, "", ["ls-remote", "--heads", e.authURL, "HEAD"]), r > 0) e.onDebug(`[byoc:git] Validation succeeded on attempt ${r + 1}`);
      return;
    } catch (error) {
      n = error;
    }
  }
  throw new RepositoryAccessError(n, e.getAuthToken !== void 0);
}
function nn(e) {
  let t = e.trim().match(/^(url\.(https?:\/\/[^\s@]+)\.pushinsteadof) (\S+)$/i);
  if (!t) return;
  let [, n, r, i] = t,
    o = i.match(/^https?:\/\/([^/@\s]+\/[^/\s]+\/[^/\s]+)$/i)?.[1],
    c;
  try {
    c = new URL(r).pathname;
  } catch {
    return;
  }
  if (o === void 0 || !c.endsWith(`/${o}`)) return;
  return n;
}
var rn = "CLAUDE_CODE_SESSION_ACCESS_TOKEN";
function on(e) {
  let t = e.trim().match(/^(credential\.(https?:\/\/[^\s@]+)\.helper) (.+)$/i);
  if (!t) return;
  let [, key, r, i] = t;
  return i === MOn(rn) ? {
    key: key,
    base: r.replace(/\/+$/, "")
  } : void 0;
}
function sn(e, t) {
  let n = e.trim().match(/^(url\.(https?:\/\/[^\s@]+)\.insteadof) (\S+)$/i);
  if (!n) return;
  let [, r, i, o] = n,
    c = o.replace(/\.git$/i, "").match(/^https?:\/\/([^/@\s]+\/[^/\s]+\/[^/\s]+)$/i)?.[1];
  if (c === void 0) return;
  return t.some(item => i === `${item}/${c}`) ? r : void 0;
}
async function an(e, t, n) {
  let r = {};
  if (e.originURL === e.authURL ? await p(e, e.repoPath, ["--git-dir", A(e.repoPath, ".git"), "remote", "set-url", "origin", e.authURL], void 0, void 0, r).then(() => !0, () => !1) : await un(e)) {
    await p(e, e.repoPath, ["--git-dir", A(e.repoPath, ".git"), "config", "--unset-all", "remote.origin.pushurl"]).catch(() => {});
    let o = await p(e, e.repoPath, ["--git-dir", A(e.repoPath, ".git"), "config", "--local", "--get-regexp", "^url\\..*\\.pushinsteadof$"]).catch(() => "");
    for (let f of o.split(`
`)) {
      let h = nn(f);
      if (h === void 0) continue;
      await p(e, e.repoPath, ["--git-dir", A(e.repoPath, ".git"), "config", "--local", "--unset-all", h]).catch(() => {}), e.onDebug(`[byoc:git] Dropped a stale git-mount push rewrite (${ee(h)}) from ${e.repoPath}`);
    }
    let c = await p(e, e.repoPath, ["--git-dir", A(e.repoPath, ".git"), "config", "--local", "--get-regexp", "^credential\\..*\\.helper$"]).catch(() => ""),
      d = new Set(),
      s = [];
    for (let f of c.split(`
`)) {
      let h = on(f);
      if (h !== void 0 && !d.has(h.key)) d.add(h.key), s.push(h.base);
    }
    if (s.length > 0) {
      let f = await p(e, e.repoPath, ["--git-dir", A(e.repoPath, ".git"), "config", "--local", "--get-regexp", "^url\\..*\\.insteadof$"]).catch(() => ""),
        h = new Set();
      for (let R of f.split(`
`)) {
        let l = sn(R, s);
        if (l === void 0 || h.has(l)) continue;
        h.add(l), await p(e, e.repoPath, ["--git-dir", A(e.repoPath, ".git"), "config", "--local", "--unset-all", l]).catch(() => {}), e.onDebug(`[byoc:git] Dropped a stale git-mount fetch rewrite (${ee(l)}) from ${e.repoPath}`);
      }
    }
    for (let f of d) await p(e, e.repoPath, ["--git-dir", A(e.repoPath, ".git"), "config", "--local", "--unset-all", f]).catch(() => {}), e.onDebug(`[byoc:git] Dropped a stale git-mount credential helper (${ee(f)}) from ${e.repoPath}`);
    return await Xe(e), e.onDebug(`[byoc:git] Prefetched repo found at ${e.repoPath}`), !0;
  }
  return e.onDebug(`[byoc:git] No prefetched repo, fresh init at ${e.repoPath}`), await ml(vt(t, {
    recursive: !0
  }), de, `[runner:stuck] mkdir ${t} (check NFS/CSI mount health)`), await p(e, "", ["init", ...(e.initWithoutTemplate ? ["--template="] : []), e.repoPath]), await p(e, e.repoPath, ["config", "gc.auto", "0"]).catch(() => {}), await p(e, e.repoPath, ["remote", "add", "origin", e.originURL]).catch(() => p(e, e.repoPath, ["remote", "set-url", "origin", e.originURL])), await Xe(e), !1;
}
var Ke = 7,
  cn = 100,
  at = {
    GIT_CONFIG_NOSYSTEM: "1",
    GIT_CONFIG_GLOBAL: "/dev/null",
    GIT_CONFIG_COUNT: "0",
    GIT_CONFIG_PARAMETERS: ""
  },
  wur = {
    GIT_CONFIG_GLOBAL: "/dev/null",
    HOME: rmn(),
    XDG_CONFIG_HOME: rmn()
  },
  dn = {
    ...at,
    ...wur
  };
async function ze(e, t, n, r) {
  let i = {};
  return p(e, "", ["--git-dir", t, "config", ...n], r, void 0, i).catch(o => {
    if (i.exitCode === 1) return;
    if (e.signal?.aborted) throw o;
    throw new x(`Could not read remote.origin.url from ${t}/config (${O(o)}). The clone was left as it is: repair that file, or remove the clone when no session is using it; the next session will clone it again.`, "Could not read remote.origin.url of the repository's clone");
  });
}
async function un(e) {
  let t = A(e.repoPath, ".git"),
    n = await ze(e, t, ["--get-all", "remote.origin.url"]);
  if (n === void 0) {
    if ((await ze(e, t, ["--get-regexp", "^remote\\.origin\\."], at)) === void 0) return !1;
    let o = {};
    if (!(await p(e, "", ["--git-dir", t, "config", "--get-regexp", "^remote\\.origin\\."], dn, void 0, o).then(() => !0, d => {
      if (e.signal?.aborted) throw d;
      return o.exitCode !== 1 || o.wroteStderr !== !1;
    }))) return !1;
  }
  let r = (n ?? "").split(`
`).filter(item => item.length > 0);
  if (r.length === 1 && r[0] === e.originURL) return !0;
  for (let i = 1;; i++) {
    let o = await p(e, e.repoPath, ["--git-dir", t, "config", "--replace-all", "remote.origin.url", e.originURL]).then(() => {
      return;
    }, c => c ?? Error("git config failed"));
    if (o === void 0) return e.onDebug(`[byoc:git] remote.origin.url in ${e.repoPath} did not hold the upstream address; corrected`), !0;
    if (e.signal?.aborted) throw o;
    if (i === Ke) throw new x(`Could not correct remote.origin.url in ${t}/config after ${Ke} tries over about six seconds (${O(o)}). The clone was left as it is; if that error says "could not lock config file" and "File exists", and no git is running there, remove ${t}/config.lock.`, "Could not write remote.origin.url of the repository's clone");
    await Y(cn * 2 ** (i - 1), e.signal, {
      throwOnAbort: !0
    });
  }
}
async function Xe(e) {
  if (e.originURL !== e.authURL) {
    let t = (await p(e, e.repoPath, ["--git-dir", A(e.repoPath, ".git"), "config", "--get-all", "remote.origin.fetch"]).catch(() => "")).split(`
`).filter(item => /^\+?refs\/heads\//.test(item));
    if (t.length > 0 && t.every(item => item === xOn)) return;
  }
  await p(e, e.repoPath, ["--git-dir", A(e.repoPath, ".git"), "config", "--replace-all", "remote.origin.fetch", xOn, "^\\+?refs/heads/"]).catch(t => e.onDebug(`[byoc:git] Could not normalize remote.origin.fetch: ${O(t)}`));
}
function ct(e) {
  if (e.originURL === e.authURL) return {
    configArgs: [],
    remote: "origin"
  };
  let remote = `claude-runner-prep-${Pt()}`,
    n = gt();
  return {
    configArgs: ["-c", `remote.${remote}.url=${e.authURL}`, "-c", `remote.${remote}.fetch=${xOn}`, ...(n ? ["-c", `remote.${remote}.proxy=${n}`] : [])],
    remote: remote
  };
}
async function Ae(e, t, n, r, i, o, c) {
  let d = t || "HEAD",
    s = () => {
      let b = ct(e);
      return [...b.configArgs, "fetch", ...Ze(r), "--progress", "--no-tags", ...[], b.remote, d];
    },
    f = !n && zt(),
    h = !1,
    R = f && !h && (await p(e, e.repoPath, ["rev-parse", "--verify", "--quiet", "HEAD^{commit}"], {
      ...M
    }).then(() => !0, () => !1));
  if (!0) {
    let b = !1,
      G = await dt(e, s, async () => (b = await yn(e), !b), r && ot());
    if (b) {
      if (e.onDebug("[byoc:git] Repository is empty, skipping checkout"), e.sanitized) {
        let C = A(e.repoPath, ".git"),
          H = {};
        await p(e, e.repoPath, ["--git-dir", C, "read-tree", "HEAD"], {
          ...M
        }, Vt, H).then(e.sanitized.onIndexFromHead, async q => {
          if (e.signal?.throwIfAborted(), e.onDebug(`[byoc:git] Could not read HEAD into the index: ${O(q)}`), typeof H.exitCode !== "number" || H.exitCode > 128) await qe(A(C, "index.lock")).catch(() => {});
        });
      }
      return;
    }
    if (!G) throw Error(`git fetch failed for ${e.gitURL}`);
  }
  if (await p(e, e.repoPath, ["update-ref", "refs/remotes/origin/HEAD", "FETCH_HEAD^{commit}"], {
    ...M
  }).catch(b => e.onDebug(`[byoc:git] Could not set origin/HEAD: ${O(b)}`)), n) {
    e.onDebug("[byoc:git] Fetched to FETCH_HEAD, skipping reset-hard (worktree mode)");
    return;
  }
  let E = () => p(e, e.repoPath, ["update-ref", "--no-deref", "HEAD", "HEAD"], {
      ...M
    }).catch(() => {}),
    S = () => p(e, e.repoPath, ["-c", "core.checkStat=minimal", "-c", "core.trustctime=false", "reset", "--hard", "FETCH_HEAD^{commit}"]),
    T = Date.now(),
    u = void 0,
    w = u === void 0 || u.outcome === "absent" || u.outcome === "ready" && u.state?.phase === "idle" && u.state.head === void 0 ? void 0 : u,
    y = w && {
      standby_outcome: w.outcome,
      standby_wait_ms: String(w.waitedMs)
    },
    P = w === void 0 ? {
      action: "usual"
    } : gn({
      outcome: w.outcome,
      state: w.state,
      ...(w.state?.phase === "idle" && w.state.head !== void 0 ? await ln(e) : {
        head: void 0,
        fetchHead: void 0
      })
    });
  switch (P.action) {
    case "skip":
      {
        await E(), e.onDebug(`[byoc:git] Standby checkout already left the tree at FETCH_HEAD (${P.sha.slice(0, 12)}); skipping reset`);
        let b = w?.state?.lastOkMs === void 0 ? void 0 : Math.max(0, Math.round((Date.now() - w.state.lastOkMs) / 1000));
        V(e, "reset", Date.now() - T, {
          ...y,
          skipped: "same_commit",
          ...(b !== void 0 && {
            standby_checkout_age_s: String(b)
          })
        });
        return;
      }
    case "forced":
      {
        e.onDebug(`[byoc:git] Standby checkout left the tree suspect (${P.reason}); forcing reset --hard`), await E(), await S();
        let b = await pn(e, {
          base: P.base ?? w?.lockBase,
          target: P.target ?? w?.lockTarget
        });
        V(e, "reset", Date.now() - T, {
          ...y,
          standby_forced: P.reason,
          standby_strays_removed: b === void 0 ? "unknown" : String(b)
        });
        return;
      }
    case "usual":
      break;
  }
  if (!R) await E();
  await Oe(e, "reset", async () => {
    if (R) try {
      await p(e, e.repoPath, ["-c", "core.checkStat=minimal", "-c", "core.trustctime=false", "checkout", "-q", "--progress", "--detach", "FETCH_HEAD^{commit}"]);
      return;
    } catch (error) {
      if (e.signal?.aborted) throw error;
      e.onDebug(`[byoc:git] Delta reset failed, falling back to reset --hard: ${O(error)}`), await E();
    }
    await S();
  }, h ? {
    ...y,
    delta_reset: "withheld"
  } : y, w === void 0 ? void 0 : T);
}
var Je = /^[0-9a-f]{40}$/;
async function Te(e, t, n, r) {
  return p(e, e.repoPath, [...(r === void 0 ? [] : ["--git-dir", r]), "rev-parse", "--verify", "--quiet", `${t}^{commit}`], {
    ...M
  }, void 0, n).then(i => i.trim() || void 0, () => {
    return;
  });
}
async function ln(e) {
  let [head, fetchHead] = await Promise.all([Te(e, "HEAD"), Te(e, "FETCH_HEAD")]);
  return {
    head: head,
    fetchHead: fetchHead
  };
}
function fn(e, t) {
  return e.startsWith(t) || t.startsWith(e);
}
function gn({
  outcome: outcome,
  state: state,
  head: n,
  fetchHead: fetchHead_2
}) {
  let i = reason => ({
    action: "forced",
    reason: reason,
    base: state?.base,
    target: state?.target
  });
  switch (outcome) {
    case "absent":
      return {
        action: "usual"
      };
    case "stale":
    case "killed":
    case "timeout":
      return i(outcome);
    case "ready":
    case "waited":
      break;
  }
  if (state === void 0) return i("no_record");
  switch (state.phase) {
    case "failed":
      return i("failed");
    case "running":
      return i("interrupted");
    case "other":
      return i("unknown_phase");
    case "idle":
      break;
  }
  if (state.head === void 0) return {
    action: "usual"
  };
  if (n === void 0 || !fn(n, state.head)) return i("head_mismatch");
  if (fetchHead_2 !== void 0 && fetchHead_2 === n) return {
    action: "skip",
    sha: n
  };
  return {
    action: "usual"
  };
}
async function pn(e, {
  base: base,
  target: target
}) {
  if (base === void 0 || target === void 0 || !Je.test(base) || !Je.test(target)) {
    e.onDebug("[byoc:git] Standby stray clean-up skipped: no usable base/target");
    return;
  }
  try {
    let [r, i] = await Promise.all([Te(e, base), Te(e, target)]);
    if (r === void 0 || i === void 0) {
      e.onDebug("[byoc:git] Standby stray clean-up skipped: base/target do not resolve locally");
      return;
    }
    let o = async (E, S) => {
        let T = {},
          u = await p(e, e.repoPath, ["diff", "--no-renames", "--name-only", "--diff-filter=A", "-z", E, S, "--"], {
            ...M
          }, void 0, T);
        if (T.stdoutTruncated || u.length > 0 && !u.endsWith("\x00")) {
          e.onDebug(`[byoc:git] Standby stray clean-up skipped: the ${E.slice(0, 12)}\u2192${S.slice(0, 12)} listing was truncated`);
          return;
        }
        return u.split("\x00").filter(item => item.length > 0);
      },
      c = await o(r, i);
    if (c === void 0) return;
    if (c.length === 0) return 0;
    let d = new Set(c),
      s = await o("FETCH_HEAD^{commit}", i);
    if (s === void 0) return;
    let f = s.filter(item => d.has(item));
    if (f.length === 0) return 0;
    let h = await ye(e.repoPath),
      R = 0,
      l = new Set();
    for (let E of f) {
      if (!hn(E)) {
        e.onDebug(`[byoc:git] Standby stray clean-up: refusing path '${E}'`);
        continue;
      }
      let S = A(h, E);
      try {
        if ((await ye(W(S))) !== W(S)) {
          e.onDebug(`[byoc:git] Standby stray clean-up: refusing '${E}' (its directory resolves to another path)`);
          continue;
        }
        let u = await xe(S);
        if (!u.isFile() && !u.isSymbolicLink()) continue;
        await qe(S), R++, l.add(W(S));
      } catch (error) {
        if (k(error) !== "ENOENT") e.onDebug(`[byoc:git] Standby stray clean-up: '${E}': ${O(error)}`);
      }
    }
    for (let E of [...l].sort((itemA, itemB) => itemB.length - itemA.length)) for (let S = E; S !== h && S.startsWith(h + ae); S = W(S)) try {
      await kt(S);
    } catch {
      break;
    }
    return e.onDebug(`[byoc:git] Standby stray clean-up: removed ${R} of ${f.length} file(s) the interrupted checkout ${base.slice(0, 12)}\u2192${target.slice(0, 12)} added`), R;
  } catch (error) {
    e.onDebug(`[byoc:git] Standby stray clean-up failed: ${O(error)}`);
    return;
  }
}
function hn(e) {
  if (e.length === 0 || $t(e) || e.includes("\\")) return !1;
  let t = e.split("/");
  if (t.some(item => item === "" || item === "." || item === "..")) return !1;
  return t[0].toLowerCase() !== ".git";
}
function mn(e, t) {
  let n = [];
  if (t && e < it) n.push("-c", `http.lowSpeedLimit=${Wt}`, "-c", `http.lowSpeedTime=${Yt}`);
  if (e >= 3) n.push("-c", "http.version=HTTP/1.1");
  return n;
}
var bn = (e, t, n, r, i) => p(e, e.repoPath, t, n, r, i);
async function dt(e, t, n, r = !1, i = bn) {
  let o = Date.now(),
    c = 4000 + Math.random() * 4000,
    d = r && jt(),
    s = 0,
    f,
    h = [],
    R = u => u.length <= Ye ? u : ne(u, je) + "\u2026" + ld(u, Ye - je - 1),
    l = () => h.length > 0 ? {
      attempt_errors: _(h)
    } : {},
    E = 0,
    S = 0,
    T = u => ({
      failfast_aborts: String(E),
      client_aborts: String(S),
      ...(u?.transferBytes !== void 0 && {
        pack_bytes: String(u.transferBytes)
      }),
      ...(u?.sawServerProgress === !0 && {
        server_progress: "true"
      })
    });
  for (let u = 0; u < oe; u++) {
    if (u > 0) {
      let G = c * (1 << u - 1);
      e.onDebug(`[byoc:git] Fetch retry ${u + 1}/${oe}, backing off ${Math.round(G)}ms`), await Y(G, e.signal, {
        throwOnAbort: !0
      });
    }
    let w = [...mn(u, r), ...(typeof t === "function" ? t() : t)],
      P = u === oe - 1 || d && u === se - 1 && s === se - 1 ? {
        GIT_TRACE_PACKET: "1"
      } : void 0,
      b = {};
    try {
      let G = ce - (Date.now() - o);
      if (await i(e, w, P, Math.max(1, G), b), u > 0) e.onDebug(`[byoc:git] Fetch succeeded on attempt ${u + 1}`);
      return V(e, "fetch", Date.now() - o, {
        attempts: String(u + 1),
        ...T(b),
        ...l()
      }), !0;
    } catch (error) {
      f = error;
      let C = O(error);
      e.onDebug(`[byoc:git] Fetch attempt ${u + 1} failed: ${C}`), h.push(R(sc(C)));
      let H = r && u < it && Kt(C);
      if (b.killReason !== void 0) S++;else if (H) E++;
      if (s = (H || b.killReason === "silence" || b.killReason === "escalated") && !b.sawClientProgress && !b.sawRemoteActivity ? s + 1 : 0, Date.now() - o >= ce) {
        if (e.onDebug(`[byoc:git] Fetch cumulative wall-clock ${Date.now() - o}ms \u2265 hard cap \u2014 not retrying`), V(e, "fetch", Date.now() - o, {
          attempts: String(u + 1),
          hard_cap: "true",
          ...T(),
          ...l()
        }), OOn(C)) throw new FetchRefNotFoundError(C);
        throw Error(`git fetch failed (cumulative hard cap after ${u + 1} attempts): ${C}`);
      }
      if (n && OOn(C) && !(await n())) return !1;
      if (OOn(C)) throw e.onDebug("[byoc:git] Fetch error is permanent (ref not found on a non-empty remote) \u2014 skipping remaining retries"), V(e, "fetch", Date.now() - o, {
        attempts: String(u + 1),
        permanent: "true",
        ...T(),
        ...l()
      }), new FetchRefNotFoundError(C);
      if (d && u === se - 1 && s === se) throw e.onDebug(`[byoc:git] Fetch remote mute on all ${se} attempts (no progress, no remote activity) \u2014 giving up so the session can be reassigned`), V(e, "fetch", Date.now() - o, {
        attempts: String(u + 1),
        exhausted: "true",
        giveup: "mute",
        ...T(),
        ...l()
      }), Error(`git fetch failed after ${u + 1} mute attempts (no progress, no remote activity; giving up early for reassignment): ${C}`);
    }
  }
  throw V(e, "fetch", Date.now() - o, {
    attempts: String(oe),
    exhausted: "true",
    ...T(),
    ...l()
  }), Error(`git fetch failed after ${oe} attempts: ${O(f)}`);
}
async function _n(e, t, n) {
  if ((await p(e, e.repoPath, ["branch", "--show-current"]).catch(() => "")).trim() === t) {
    e.onDebug(`[byoc:git] Already on target branch ${t}`);
    return;
  }
  if (await lt(e, t)) e.onDebug("[byoc:git] Target branch exists on remote, fetching"), await ut(e, t, n);else e.onDebug(`[byoc:git] Creating local branch ${t} from HEAD`), await p(e, e.repoPath, ["checkout", "-B", t]), await p(e, e.repoPath, ["update-ref", `refs/remotes/origin/${t}`, "HEAD"], {
    ...M
  }).catch(() => {});
}
async function ut(e, t, n) {
  await dt(e, () => {
    let r = ct(e);
    return [...r.configArgs, "fetch", ...Ze(n), "--progress", r.remote, t];
  }, void 0, n && ot()), await p(e, e.repoPath, ["checkout", "--progress", "--force", "-B", t, "FETCH_HEAD"]);
}
async function lt(e, t) {
  try {
    return (await p(e, e.repoPath, ["ls-remote", "--heads", e.authURL, `refs/heads/${t}`])).trim().length > 0;
  } catch {
    return !1;
  }
}
async function En(e, t) {
  try {
    return await p(e, e.repoPath, ["rev-parse", "--verify", "--quiet", t], {
      ...M
    }), !0;
  } catch {
    return !1;
  }
}
async function yn(e) {
  try {
    return (await p(e, e.repoPath, ["ls-remote", "--symref", e.authURL, "HEAD"])).trim() === "";
  } catch {
    return !1;
  }
}
var IOn = "SHR_GIT_PROXY_TOKEN",
  Tto = ["-c", "lfs.locksverify=false"];
function Cto(e) {
  return ft("unused", e);
}
function ft(e, t) {
  return `!f() { if test "$1" = get; then printf 'username=${e}\\npassword=%s\\n' "$${t}"; fi; }; f`;
}
function MOn(e) {
  return ft("x-access-token", e);
}
function vur(e) {
  let t = new URL(e).origin;
  return ["-c", "credential.helper=", "-c", `credential.${t}.helper=`, "-c", `credential.${t}.helper=${Cto(IOn)}`];
}
function gt() {
  return process.env.HTTPS_PROXY || process.env.https_proxy || process.env.ALL_PROXY || process.env.all_proxy || "";
}
function kur(e) {
  let n = ["", `${new URL(e).origin}.`, `${e}.`],
    r = gt(),
    i = r ? ["-c", `remote.origin.proxy=${r}`] : [];
  for (let o of n) {
    if (r) i.push("-c", `http.${o}proxy=${r}`);
    i.push("-c", `http.${o}sslVerify=true`);
  }
  return i;
}
var wn = new Set(["fetch", "ls-remote"]);
function Sn(e) {
  for (let t = 0; t < e.length; t++) {
    if (e[t] === "-c" || e[t] === "--git-dir" || e[t] === "-C") {
      t++;
      continue;
    }
    return e[t];
  }
  return;
}
async function p(e, t, n, r, i = ce, o) {
  let c = e.getAuthToken !== void 0,
    d = Sn(n),
    s = d !== void 0 && wn.has(d),
    f = c && s ? e.getAuthToken() : void 0,
    h = r?.GIT_ALLOW_PROTOCOL === "none",
    R = [...I1, ...lRt(e.gitEnvironment?.commandScopeEntries ?? []), ...(h ? Jt : []), "-c", "http.proxyAuthMethod=basic", ...(c && s ? kur(e.gitURL) : []), ...(f ? vur(e.gitURL) : []), ...(e.governedMount && s ? Tto : []), ...n],
    l = f ?? e.token,
    E = R.map(item => $n(item, e.authURL, e.gitURL, l));
  e.onDebug(`[byoc:git] git ${E.join(" ")} (dir=${t || "."})`);
  let env = {
    ...process.env,
    ...r,
    ...e.gitEnvironment?.envOverrides,
    ...(f ? {
      [IOn]: f
    } : void 0),
    CLAUDE_CODE_SESSION_ACCESS_TOKEN: void 0,
    ...(c ? {
      GIT_CONFIG_GLOBAL: "/dev/null"
    } : void 0),
    GIT_CONFIG: void 0,
    GIT_TERMINAL_PROMPT: "0",
    GCM_INTERACTIVE: dQ.GCM_INTERACTIVE,
    LC_ALL: "C",
    GIT_PROGRESS_DELAY: "0",
    ...gAe,
    ...(e.authURL.startsWith("file://") && {
      GIT_ALLOW_PROTOCOL: `file:${gAe.GIT_ALLOW_PROTOCOL}`
    }),
    GIT_SSH_COMMAND: `${process.env.GIT_SSH_COMMAND || "ssh"} -o BatchMode=yes -o ConnectTimeout=30`,
    ...(h && {
      GIT_ALLOW_PROTOCOL: "none",
      GIT_SSH_COMMAND: "false"
    })
  };
  for (let j of Object.keys(env)) if (j.toUpperCase() === "GIT_CONFIG") env[j] = void 0;
  let {
      signal: signal_3,
      dispose: dispose
    } = Tn(e.signal, i),
    w = d !== void 0 && Dt.has(d) ? POn : e.watchdog?.silenceMs ?? et,
    y,
    P,
    b = Date.now(),
    G = e.watchdog?.preTransferCapMs ?? tt().capMs,
    C,
    H = new Set(),
    q,
    Le = !1,
    Ie = {
      active: !1
    },
    ue = Date.now();
  try {
    return await new Promise((K, z) => {
      let N = Rt("git", R, {
          cwd: t || void 0,
          windowsHide: !0,
          ...vd("helper"),
          env: env,
          stdio: ["ignore", "pipe", "pipe"]
        }),
        le = 10485760,
        Z = 8192,
        te = 0,
        U = [],
        stderr = "",
        fe = !1,
        D = 0,
        re = -1,
        Ne,
        Re = v => {
          if (typeof v === "object" && "unref" in v) v.unref();
          return v;
        },
        Q = !1,
        Pe,
        Fe = v => {
          if (y === void 0) y = v;
          N.kill("SIGTERM"), Pe ??= Re(setTimeout(() => {
            if (Q) return;
            N.kill("SIGKILL"), y = "escalated", Q = !0, z(Object.assign(Error("git did not exit after SIGTERM"), {
              stdout: Buffer.concat(U).toString("utf8"),
              stderr: stderr
            }));
          }, $e));
        },
        ge = (v = w) => Re(setTimeout(I => I("silence"), v, Fe)),
        X = ge();
      N.stdout.on("data", v => {
        if (te < 10485760) U.push(v), te += v.length;else if (o) o.stdoutTruncated = !0;
      }), N.stderr.on("data", v => {
        let I = v.toString("utf8"),
          J = stderr + I;
        if (J.length > 8192) Le = !0;
        stderr = J.slice(-8192);
        let pe = Lt(I, fe),
          {
            display: display_2,
            client: client_2,
            server: server_2
          } = pe;
        if (I.length > 0) fe = !/[\r\n]$/.test(I);
        if (o !== void 0) {
          if (Nt(Ie, pe, Date.now()), Ie.active) o.sawRemoteActivity = !0;
        }
        if (client_2) {
          if (o !== void 0) o.sawClientProgress = !0;
          if (w < We && Ht(client_2)) w = We, clearTimeout(X), X = ge();
          if (Ft(P, client_2)) b = Date.now(), clearTimeout(X), X = ge();
          if (P = client_2, o !== void 0 && client_2.bytes !== void 0 && client_2.label === At && client_2.bytes > (o.transferBytes ?? -1)) o.transferBytes = client_2.bytes;
        } else if (server_2 !== void 0 && P === void 0) {
          if (Mt(C, H, server_2)) {
            C = server_2;
            let me = ue + G - Date.now();
            if (G > 0 && me > 0) {
              if (q = Date.now(), clearTimeout(X), X = ge(Math.min(w, me)), o !== void 0) o.sawServerProgress = !0;
            }
          }
          H.add(server_2.label);
        }
        if (display_2) {
          if (display_2.label !== Ne) Ne = display_2.label, re = -1;
          let me = Math.floor(display_2.pct / 10),
            Me = Date.now() - D;
          if (Me >= Ot && (Me >= Gt || me > Math.floor(re / 10))) {
            D = Date.now(), re = display_2.pct;
            try {
              e.onDebug(`[byoc:git] ${d ?? "git"}: ${display_2.raw}`), e.onProgress?.(d ?? "git", display_2);
            } catch {}
          }
        }
      });
      let ve = () => {
        if (e.signal?.aborted) N.kill("SIGTERM"), Pe ??= Re(setTimeout(() => {
          if (Q) return;
          N.kill("SIGKILL"), Q = !0;
          let v = Error("The operation was aborted");
          v.name = "AbortError", z(Object.assign(v, {
            stderr: stderr
          }));
        }, $e));else Fe("hard-cap");
      };
      if (signal_3.aborted) ve();else signal_3.addEventListener("abort", ve, {
        once: !0
      });
      let ke;
      N.on("error", v => {
        ke = v;
      }), N.on("close", (code, signal_4) => {
        if (Q) return;
        if (Q = !0, clearTimeout(X), clearTimeout(Pe), signal_3.removeEventListener("abort", ve), o !== void 0) o.exitCode = code, o.wroteStderr = stderr.length > 0;
        let stdout = Buffer.concat(U).toString("utf8");
        if (e.signal?.aborted && y === void 0) {
          let F = Error("The operation was aborted");
          return F.name = "AbortError", z(Object.assign(F, {
            stdout: stdout,
            stderr: stderr,
            code: code,
            signal: signal_4
          }));
        }
        if (ke) return z(Object.assign(ke, {
          stdout: stdout,
          stderr: stderr
        }));
        if (code === 0) return K(stdout);
        let pe = Error(signal_4 !== null ? `git exited on signal ${signal_4}` : `git exited with code ${code}`);
        z(Object.assign(pe, {
          stdout: stdout,
          stderr: stderr,
          code: code,
          signal: signal_4
        }));
      });
    });
  } catch (error) {
    let K = error;
    if (y !== void 0) {
      let le = P ? ` at ${P.label} ${P.pct}%${P.total ? ` (${P.done}/${P.total})` : ""}` : "",
        Z = Date.now(),
        te = Z - b,
        U = "",
        L = `no forward progress for ${te}ms (budget ${w}ms)${le}`;
      if (P === void 0 && C !== void 0 && q !== void 0) {
        let D = C,
          re = D.done !== void 0 ? D.pct > 0 ? ` ${D.pct}% (${D.done}${D.total !== void 0 ? `/${D.total}` : ""})` : ` ${D.done}` : ` ${D.pct}%`;
        U = ` \u2014 no pack data received; server-side progress last advanced ${Z - q}ms ago at ${D.label}${re}`, L = Z - ue >= G ? `pre-transfer cap ${G}ms reached with no client-side progress${U}` : `no client-side progress for ${Z - ue}ms and server-side progress stopped advancing (budget ${w}ms)${U}`;
      }
      let fe = y === "silence" ? L : y === "hard-cap" ? `hard cap ${i}ms after ${Z - ue}ms${le}${U}` : `did not exit within ${$e}ms of SIGTERM (D-state? \u2014 last forward ${te}ms ago)${le}`;
      e.onDebug(`[runner:stuck] git ${E.join(" ")} (dir=${t || "."}) \u2014 ${fe} \u2014 killing subprocess`);
    }
    let z = K.stderr !== void 0 && K.stderr.length > 0 ? Bt(K.stderr, Le, e.authURL, l) : bt(DOn(K.stdout || K.message || "", e.authURL, l)).slice(0, Se),
      N = y !== void 0 ? ` (watchdog: ${y})` : "";
    throw Error(`git ${d ?? "?"} failed${N}: ${z}`);
  } finally {
    if (o !== void 0 && y !== void 0) o.killReason = y;
    dispose();
  }
}
function S3t(e) {
  return e.startsWith("https://") || e.startsWith("http://") || e.startsWith("ssh://") || !e.includes("://") && /^[A-Za-z0-9][A-Za-z0-9._-]*@[^:]+:/.test(e);
}
function Tn(e, t) {
  let abortController = new AbortController(),
    r = setTimeout(c => c.abort(), t, abortController);
  if (typeof r === "object" && "unref" in r) r.unref();
  let i;
  if (e) {
    if (e.aborted) {
      clearTimeout(r), abortController.abort();
      let dispose_2 = () => {};
      return {
        signal: abortController.signal,
        dispose: dispose_2,
        [Symbol.dispose]: dispose_2
      };
    }
    i = () => {
      clearTimeout(r), abortController.abort();
    }, e.addEventListener("abort", i, {
      once: !0
    });
  }
  abortController.signal.addEventListener("abort", () => clearTimeout(r));
  let dispose_3 = () => {
    if (clearTimeout(r), e && i) e.removeEventListener("abort", i);
  };
  return {
    signal: abortController.signal,
    dispose: dispose_3,
    [Symbol.dispose]: dispose_3
  };
}
function Rn(e) {
  if (e.url) {
    if (!S3t(e.url)) throw Error(`Unsupported git URL protocol (only https/http/ssh/user@host:path allowed): ${e.url}`);
    return e.url;
  }
  switch (e.type) {
    case "github":
      return `https://github.com/${e.repo}`;
    case "github-ssh":
      throw Error(`github-ssh source for '${e.repo}' is missing url \u2014 SSH URLs are not synthesizable from slug alone`);
    case "test-file":
      return `file://${e.repo}`;
    default:
      throw Error(`Unsupported git source type: ${e.type}`);
  }
}
function Rto(e, t) {
  if (!t) return e;
  if (e.startsWith("git@") || e.startsWith("ssh://")) return e;
  let n;
  try {
    n = new URL(e);
  } catch {
    return e;
  }
  if (n.protocol !== "https:") return e;
  if (t.startsWith("sk-ant-ccsr-")) n.username = "unused", n.password = t;else n.username = t;
  return n.toString();
}
function Ato(e, t) {
  if (t.type === "test-file") {
    let r = De(t.repo);
    if (!r || r === "." || r === "..") return "";
    return A(e, r);
  }
  let n = t.repo.split("/").filter(item => item.length > 0);
  if (n.length === 0) return "";
  for (let r of n) if (r === "." || r === "..") return "";
  return A(e, ...n);
}
function Kas(e) {
  let t = e.repo.split("/").filter(item => item.length > 0);
  for (let n of t) if (n === "." || n === "..") return "";
  return t.join("-");
}
function pt(e, t) {
  let n = W(W(we(t)));
  return De(n) === "_sessions" && we(e).startsWith(W(n) + ae) ? n : Pn(e, t);
}
function Pn(e, t) {
  let n = we(e).split(ae),
    r = we(t).split(ae),
    i = 0;
  while (i < n.length && i < r.length && n[i] === r[i]) i++;
  return i >= 2 ? n.slice(0, i).join(ae) : void 0;
}
async function Yas(e) {
  let {
    canonicalRepoPath: t,
    worktreePath: worktreePath,
    ref: ref,
    onDebug: onDebug_3,
    signal: signal_5,
    gitEnvironment: gitEnvironment
  } = e;
  if (worktreePath === t) throw Error("addSessionWorktree: worktreePath must not equal canonicalRepoPath");
  let d = {
      repoPath: t,
      gitURL: "",
      authURL: "",
      originURL: "",
      gitEnvironment: gitEnvironment,
      onDebug: onDebug_3,
      signal: signal_5
    },
    s = (await p(d, t, ["rev-parse", "--verify", "FETCH_HEAD^{commit}"], {
      ...M
    })).trim(),
    f;
  try {
    f = (await p(d, worktreePath, ["--git-dir", A(worktreePath, ".git"), "rev-parse", "HEAD"], {
      ...M
    })).trim();
  } catch (error) {
    if (signal_5?.aborted) throw error;
  }
  if (f === s) {
    let l = (await p(d, worktreePath, ["rev-parse", "--absolute-git-dir"])).trim();
    await Ve(A(l, "FETCH_HEAD"), `${s}
`).catch(() => {}), onDebug_3(`[byoc:git] Worktree ${worktreePath} already at ${s.slice(0, 12)} \u2014 keeping`);
    return;
  }
  onDebug_3(f ? `[byoc:git] Worktree ${worktreePath} at wrong commit ${f.slice(0, 12)}, clearing before re-add` : `[byoc:git] Clearing ${worktreePath} before worktree add`), await ml(GSs(worktreePath, pt(t, worktreePath)), POn, `[runner:stuck] rm ${worktreePath} (check NFS/CSI mount health)`).catch(l => {
    onDebug_3(`[byoc:git] rm ${worktreePath} failed (continuing): ${l}`);
  });
  let h = await ml(ht(worktreePath).then(l => Q6e(t, l)), de, `[runner:stuck] worktree deregister ${t} (check NFS/CSI mount health)`).then(l => {
    if (l.outcome === "kept") onDebug_3(`[byoc:git] left the worktree registration of ${worktreePath} in place: ${l.reason}`);
    return !0;
  }, l => (onDebug_3(`[byoc:git] worktree deregister did not finish: ${l}`), !1));
  await vn(d, t, worktreePath, s, h);
  let R = (await p(d, worktreePath, ["rev-parse", "--absolute-git-dir"])).trim();
  await Ve(A(R, "FETCH_HEAD"), `${s}
`), onDebug_3(`[byoc:git] Added worktree ${worktreePath} at ${s.slice(0, 12)} (detached)`);
}
async function vn(e, repoSpelled, n, r, i) {
  let o = () => p(e, repoSpelled, ["worktree", "add", "--detach", n, r]);
  try {
    await o();
    return;
  } catch (error) {
    if (!i || !O(error).includes("is a missing but already registered worktree")) throw error;
    let d = await ml(Promise.all([ye(repoSpelled), ht(n)]).then(([s, worktreePath_2]) => FZ(A(s, ".git"), {
      worktreePath: worktreePath_2,
      repoSpelled: repoSpelled
    }, {
      locked: "keep"
    })), de, `[runner:stuck] worktree deregister ${repoSpelled} (check NFS/CSI mount health)`).catch(s => ({
      outcome: "kept",
      reason: O(s)
    }));
    if (d.outcome !== "dropped") throw e.onDebug(`[byoc:git] git still registers ${n} with its folder gone, and the registration could not be dropped${d.outcome === "kept" ? `: ${d.reason}` : ""}; not retrying`), error;
    e.onDebug(`[byoc:git] dropped the registration git still had for ${n} with its folder gone; retrying worktree add`);
  }
  await o();
}
async function ht(e) {
  let t = await ye(W(e)).catch(() => null),
    n = t === null ? null : A(t, De(e));
  return n === null || n === e ? [e] : [e, n];
}
async function Xas(e) {
  let {
    worktrees: worktrees,
    onDebug: onDebug_4,
    signal: signal_6
  } = e;
  for (let {
    canonicalRepoPath: i,
    worktreePath: worktreePath_3
  } of worktrees) {
    let c = {
      repoPath: i,
      gitURL: "",
      authURL: "",
      originURL: "",
      onDebug: onDebug_4,
      signal: signal_6
    };
    if (await ml(xe(worktreePath_3).then(() => !1, s => qi(s)), de, `[runner:stuck] worktree probe ${worktreePath_3} (check NFS/CSI mount health)`).catch(() => !1)) continue;
    try {
      if (!(await G1e(worktreePath_3))) {
        onDebug_4(`[byoc:git] kept worktree ${worktreePath_3} \u2014 unremovable reparse point`);
        continue;
      }
      let s = await ml(Odt(i, worktreePath_3, {
        trustedRoot: pt(i, worktreePath_3),
        deregisterIfStopped: !0,
        pointerFirst: !0
      }), POn, `[runner:stuck] remove ${worktreePath_3} (check NFS/CSI mount health)`);
      if (s.outcome === "unanchored") await p(c, i, ["worktree", "remove", "--force", worktreePath_3]);else if (s.outcome !== "removed") {
        onDebug_4(`[byoc:git] worktree remove ${worktreePath_3} failed: ${Qxe(s)}`);
        continue;
      }
      onDebug_4(`[byoc:git] Removed worktree ${worktreePath_3}`);
    } catch (error) {
      onDebug_4(`[byoc:git] worktree remove ${worktreePath_3} failed: ${error}`);
    }
  }
  for (let {
    canonicalRepoPath: canonicalRepoPath,
    worktreePath: worktreePath_4
  } of worktrees) await ml(Q6e(canonicalRepoPath, worktreePath_4), de, `[runner:stuck] worktree deregister ${canonicalRepoPath} (check NFS/CSI mount health)`).then(c => {
    if (c.outcome === "kept") onDebug_4(`[byoc:git] left the worktree registration of ${worktreePath_4} in place: ${c.reason}`);
  }, c => {
    onDebug_4(`[byoc:git] worktree deregister did not finish: ${c}`);
  });
}
function kn(e) {
  let t = new Map();
  for (let n of e) {
    let r = n.branches ?? [],
      [i, ...o] = r;
    if (o.length > 0) throw Error(`Outcome for ${n.repo} has ${r.length} branches, expected 0 or 1`);
    if (i) t.set(n.repo, i);
  }
  return t;
}
function $n(e, t, n, r) {
  if (e === t && e !== n) return ee(e);
  if (e.includes("://") && e.includes("@")) return ee(e);
  if (r && e.includes(r)) return e.split(r).join("<token>");
  return e;
}
function DOn(e, t, n) {
  if (t && /:\/\/[^/]*@/.test(t)) e = e.split(t).join(ee(t));
  if (n) e = e.split(n).join("<token>");
  return e.replace(/sk-ant-ccsr-[A-Za-z0-9_.-]+/g, "<token>").replace(/sk-ant-[A-Za-z0-9_.-]+/g, "<token>").replace(/github_pat_[A-Za-z0-9_]+/g, "<token>").replace(/gh[psour]_[A-Za-z0-9]+/g, "<token>").replace(/gl(?:pat|dt|rt|ft|soat|oas|agent|ptt|cbt|imt|ffct)-[A-Za-z0-9_=-]+(?:\.[0-9a-z]{9})?/g, "<token>");
}
function ee(e) {
  let t;
  try {
    t = new URL(e);
  } catch {}
  if (t && (t.username || t.password)) {
    let i = t.search || "",
      o = t.hash || "";
    return `${t.protocol}//<token>@${t.host}${t.pathname}${i}${o}`;
  }
  if (t) return e;
  let n = e.indexOf("@"),
    r = e.indexOf("://");
  if (r >= 0 && n > r) return e.slice(0, r + 3) + "<token>" + e.slice(n);
  return e;
}
function O(e) {
  return e instanceof Error ? e.message : String(e);
}
var mt = /^(remote:\s+)?(fatal|error):/i;
function bt(e) {
  if (!e) return "";
  let t = [];
  for (let r of e.split(`
`)) if (mt.test(r)) t.push(r);
  if (t.length === 0) return e;
  let n = t.join(`
`);
  if (e.startsWith(n)) return e;
  return n + `
` + e;
}
export { Gas, lRt, y3t, xOn, bur, POn, OOn, _3t, FetchRefNotFoundError as b3t, I1, gAe, Vas, Eto, qas, RepositoryAccessError as Sur, wur, IOn, Tto, Cto, MOn, vur, kur, S3t, Rto, Ato, Kas, Yas, Xas, DOn };