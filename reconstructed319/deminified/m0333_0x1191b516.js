// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { eE } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { Q, Pa } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { Mc } from "B:/~BUN/root/chunk-46f9vyk7.js";
import { R, wr } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { J } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { g, m } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { i, Ar } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { F2n, pae } from "B:/~BUN/root/chunk-3mm90xb6.js";
import { au } from "B:/~BUN/root/chunk-gq1er5y2.js";
import { Zde, hut, LIt, RRi, vWe } from "B:/~BUN/root/chunk-rbfkfjk4.js";
import { Dl } from "B:/~BUN/root/chunk-ebpsjtma.js";
import { xet } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { USe } from "B:/~BUN/root/chunk-ts69mavc.js";
import { spawn as wt } from "child_process";
import { randomUUID as yt } from "crypto";
import { lstat as Tt, mkdir as St, readdir as On, realpath as Ke, unlink as vt, writeFile as Ve } from "fs/promises";
import { basename as Le, dirname as be, join as v, relative as kn, resolve as we, sep as Re } from "path";
var depth_2 = 50;
function lci(e, n) {
  return {
    certificateFile: Ue(e, "GIT_SSL_CAINFO", n),
    skipVerification: Ue(e, "GIT_SSL_NO_VERIFY", n)
  };
}
function Ue(e, n, t) {
  let r = [];
  for (let [name, value] of Object.entries(e)) {
    if (value === void 0) continue;
    if (name === n) r.unshift({
      name: name,
      value: value
    });else if (t && name.toUpperCase() === n) r.push({
      name: name,
      value: value
    });
  }
  return r;
}
function l4t(e) {
  return e.flatMap(([n, t]) => ["-c", `${n}=${t}`]);
}
var Ee = {
  envOverrides: {},
  commandScopeEntries: [],
  fileSeedLines: ""
};
function Twn(e) {
  let n = e.operator.certificateFile.length > 0,
    t = e.operator.skipVerification.length > 0 || e.role === "child" && e.serverSetsSkipVerification;
  if (!e.routing) return {
    ...Ee,
    decision: {
      role: e.role,
      certificateFile: n ? "left_no_routing" : "left_unset",
      skipVerification: t ? "left" : "unset",
      mountEntries: !1,
      mountVerificationPinned: !1
    }
  };
  switch (e.role) {
    case "prep":
    case "resume":
    case "outcome":
      return _t(e, n, t);
    case "child":
      return Rt(e, e.routing, t);
    case "hook":
      return ht(e, e.routing, n, t);
  }
}
function ht(e, n, t, r) {
  let certificateFile = t ? "left_operators_hook" : "left_unset";
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
  let o = URL.canParse(n.mountBaseUrl) ? Me(n) : [],
    a = He(o, []),
    c = r && o.length > 0;
  return {
    ...Ee,
    envOverrides: r ? re(e.operator.skipVerification) : {},
    commandScopeEntries: c ? [["http.sslVerify", "false"], ...a] : a,
    decision: {
      role: "hook",
      certificateFile: certificateFile,
      skipVerification: !r ? "unset" : c ? "moved" : "pinned_off",
      mountEntries: !1,
      mountVerificationPinned: o.length > 0
    }
  };
}
function mt(e, n) {
  return ["", `${new URL(e).origin}.`, `${e}.`].map(item => [`http.${item}sslCAInfo`, n]);
}
function re(e) {
  let n = {};
  for (let {
    name: name_2
  } of e) n[name_2] = void 0;
  return n;
}
function _t(e, n, t) {
  if (!e.target.mountRouted) return {
    ...Ee,
    decision: {
      role: e.role,
      certificateFile: n ? "left_direct_target" : "left_unset",
      skipVerification: t ? "left" : "unset",
      mountEntries: !1,
      mountVerificationPinned: !1
    }
  };
  let envOverrides = re(e.operator.skipVerification),
    skipVerification = t ? "pinned_off" : "unset";
  if (!n) return {
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
      ...re(e.operator.certificateFile),
      ...envOverrides
    },
    commandScopeEntries: mt(e.target.url, e.trustBundle.path),
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
function Et(e) {
  let t = (e.serverCertificateFile ?? e.operator.certificateFile[0]?.value)?.trim();
  if (!t || /[\n\r\0]/.test(t)) return;
  return t;
}
function _e(e) {
  return `"${e.replace(/\\/g, "\\\\").replace(/"/g, "\\\"")}"`;
}
function Me(e) {
  let n = new Set();
  for (let t of [e.mountBaseUrl, e.pushBaseUrl]) if (t && URL.canParse(t)) {
    for (let r of [new URL(t).origin, t]) if (!r.includes("=")) n.add(r);
  }
  return [...n];
}
function He(e, n) {
  return [...e, ...n.map(item => `https://${item}/`)].map(item => [`http.${item}.sslVerify`, "true"]);
}
function bt(e) {
  return e.map(([n, t]) => {
    let r = n.slice(5, n.length - 10);
    return `[http ${_e(r)}]
	sslVerify = ${t}
`;
  }).join("");
}
function Rt(e, n, t) {
  let r = e.serverCertificateFile !== void 0 || e.operator.certificateFile.length > 0,
    s = Et(e),
    certificateFile_2 = !r ? "left_unset" : !e.gitConfigArm ? "left_git_config_arm_off" : s === void 0 ? "left_unusable_value" : !e.gitReadsEnvironmentConfig ? "left_old_git" : "moved",
    a = Me(n),
    skipVerification_2 = !t ? "unset" : e.gitConfigArm && e.gitReadsEnvironmentConfig && a.length > 0 ? "moved" : "left",
    commandScopeEntries = [],
    fileSeedLines = "",
    envOverrides_2 = {};
  if (certificateFile_2 === "moved" && s !== void 0) {
    if (commandScopeEntries.push(["http.sslCAInfo", s]), fileSeedLines += `
[http]
	sslCAInfo = ${_e(s)}
`, e.trustBundle.status === "built") for (let f of a) commandScopeEntries.push([`http.${f}.sslCAInfo`, e.trustBundle.path]), fileSeedLines += `[http ${_e(f)}]
	sslCAInfo = ${_e(e.trustBundle.path)}
`;
    envOverrides_2 = {
      GIT_SSL_CAINFO: void 0,
      ...re(e.operator.certificateFile)
    };
  }
  if (skipVerification_2 === "moved") commandScopeEntries.push(["http.sslVerify", "false"]), fileSeedLines += `${fileSeedLines === "" ? `
` : ""}[http]
	sslVerify = false
`, envOverrides_2 = {
    ...envOverrides_2,
    GIT_SSL_NO_VERIFY: void 0,
    ...re(e.operator.skipVerification)
  };
  let T = He(a, e.gitConfigArm ? n.governedHosts : []);
  if (commandScopeEntries.push(...T), T.length > 0) fileSeedLines += `${fileSeedLines === "" ? `
` : ""}${bt(T)}`;
  return {
    envOverrides: envOverrides_2,
    commandScopeEntries: commandScopeEntries,
    fileSeedLines: fileSeedLines,
    decision: {
      role: "child",
      certificateFile: certificateFile_2,
      skipVerification: skipVerification_2,
      mountEntries: certificateFile_2 === "moved" && e.trustBundle.status === "built" && a.length > 0,
      mountVerificationPinned: a.length > 0
    }
  };
}
var ynr = "+refs/heads/*:refs/remotes/origin/*";
function t5r(e) {
  return e.upstreamUrl;
}
function Je(e) {
  if (e) return [];
  let {
    depth: depth
  } = Xe();
  return depth === void 0 ? [] : ["--depth", String(depth)];
}
function Xe() {
  let e = i.CLAUDE_RUNNER_FETCH_DEPTH;
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
var qe = 120000,
  capMs = 600000,
  Be = 300000,
  se = 1800000;
function Ze() {
  let e = i.CLAUDE_RUNNER_FETCH_SERVER_PROGRESS_CAP_MS;
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
  let n = Number(e);
  if (Number.isInteger(n) && n > 0) {
    let capMs_2 = Math.min(Math.max(n, qe), se);
    return {
      capMs: capMs_2,
      invalid: void 0,
      clamped: capMs_2 === n ? void 0 : e
    };
  }
  return {
    capMs: capMs,
    invalid: e,
    clamped: void 0
  };
}
var Ae = 5000,
  Qe = /^(Counting objects|Compressing objects|Receiving objects|Resolving deltas|Updating files|Checking out files|Filtering content):\s+(\d+)%(?:\s+\((\d+)\/(\d+)\))?(?:, ([\d.]+) (KiB|MiB|GiB))?/,
  et = /^(Enumerating objects): (\d{1,15})\b/,
  Pt = "Receiving objects",
  Gt = {
    KiB: 1024,
    MiB: 1048576,
    GiB: 1073741824
  },
  At = 5000,
  Ct = 500,
  _nr = 600000,
  Ot = new Set(["worktree"]);
function $t(e, n = !1) {
  let display,
    client,
    server,
    remoteLines = 0,
    a = e.split(/\r|\n/);
  if (n) a = a.slice(1);
  for (let c of a) {
    if (c.length === 0) continue;
    let sideband = c.startsWith("remote: ");
    if (sideband) remoteLines++;
    let u = sideband ? c.slice(8) : c,
      h = Qe.exec(u);
    if (h === null) {
      if (sideband) {
        let E = et.exec(u);
        if (E !== null) {
          let done = Number(E[2]);
          server = {
            sideband: sideband,
            label: E[1],
            pct: 0,
            done: done,
            raw: `remote: ${E[1]}: ${done}`
          };
        }
      }
      continue;
    }
    let [, label, f, w, b, G, P] = h,
      C = {
        sideband: sideband,
        label: label,
        pct: Math.min(100, Number(f)),
        done: w !== void 0 ? Number(w) : void 0,
        total: b !== void 0 ? Number(b) : void 0,
        bytes: G !== void 0 && P !== void 0 ? Math.round(Number(G) * Gt[P]) : void 0,
        raw: `${sideband ? "remote: " : ""}${label}: ${f}%${w !== void 0 ? ` (${w}/${b})` : ""}`
      };
    if (display = C, sideband) server = C;else client = C;
  }
  return {
    display: display,
    client: client,
    server: server,
    remoteLines: remoteLines
  };
}
var kt = 1000;
function Lt(e, n, t) {
  if (e.active) return;
  if (n.display?.sideband) {
    e.active = !0;
    return;
  }
  if (n.remoteLines === 0) return;
  if (e.firstRemoteLineAt === void 0) e.firstRemoteLineAt = t;else if (t - e.firstRemoteLineAt >= kt) e.active = !0;
}
function Dt(e, n) {
  if (e === void 0) return !0;
  if (n.label !== e.label) return !0;
  if (n.done !== void 0 && e.done !== void 0) return n.done > e.done || (n.bytes ?? 0) > (e.bytes ?? 0);
  return n.pct > e.pct;
}
function It(e, n, t) {
  if (e === void 0 || t.label !== e.label) return !n.has(t.label);
  if (t.done !== void 0 && e.done !== void 0) return t.done > e.done;
  if (t.done === void 0 !== (e.done === void 0)) return !1;
  return t.pct > e.pct;
}
function Nt(e) {
  return e.label === "Resolving deltas" && e.pct === 100;
}
function Ft(e) {
  let n = e.startsWith("remote: "),
    t = n ? e.slice(8) : e;
  return Qe.test(t) || n && et.test(t);
}
var ae = 2000;
function Ut(e, n, t, r) {
  let s = n ? e.replace(/^[^\r\n]*[\r\n]?/, "") : e,
    o = knr(s, t, r).split(/\r|\n/).filter(item => item.length > 0 && !Ft(item)).join(`
`),
    a = pt(o);
  return gt.test(a) ? a.slice(0, ae) : a.slice(-ae);
}
var de = 1e4,
  Mt = 30000,
  $e = 3,
  Ht = 6,
  ie = 5,
  xe = 300,
  We = 150,
  tt = 2,
  oe = 3,
  Vt = 1000,
  Bt = 15;
function nt() {
  return Boolean(Ar.CLAUDE_RUNNER_FAIL_FAST_FETCH);
}
function xt() {
  return Boolean(Ar.CLAUDE_RUNNER_STALL_GIVEUP);
}
function Wt(e) {
  return e.split(`
`).some(item => {
    let t = item.indexOf("Operation too slow");
    if (t === -1) return !1;
    let r = item.slice(0, t);
    return !/\bremote(?: error)?: /.test(r) && /curl 28\b|unable to access '[^']*': $/.test(r);
  });
}
function Yt() {
  return Boolean(Ar.CCR_DELTA_RESET);
}
var rt = ["couldn't find remote ref"];
function bnr(e) {
  let n = e.toLowerCase();
  return rt.some(item => n.includes(item));
}
var regExp = new RegExp(rt[0].replaceAll("i", "[i\\u0130]"), "gi");
function Cwn(e) {
  return e.replace(regExp, n => `could not${n.slice(8)}`);
}
class FetchRefNotFoundError extends R {
  constructor(e) {
    super(`git fetch failed (permanent): ${e}`, "git fetch failed (permanent): ref not found on the remote");
    this.name = "FetchRefNotFoundError";
  }
}
var dci = {
    refused_by_git_wrapper: "a wrapper installed as git exited with 75",
    http_429: "the host answered HTTP 429"
  },
  zt = /^fatal: unable to access '.*': the requested url returned error: 429$/;
function De(e, n, t) {
  if (/^git \S+ failed \(watchdog:/.test(e)) return;
  if (n === USe) return "refused_by_git_wrapper";
  if (!/^https?:/i.test(t)) return;
  let r = e.replace(/^git \S+ failed: /, "");
  if (r.length >= ae) return;
  let s = r.toLowerCase().split(/\r|\n/).map(item => item.trim()).filter(item => item !== "" && !item.startsWith("remote:"));
  return s.length > 0 && s.every(item => zt.test(item)) ? "http_429" : void 0;
}
class FetchThrottledError extends R {
  throttle;
  constructor(e, n) {
    super(e, "git fetch failed: throttled on its last attempt");
    this.name = "FetchThrottledError", this.throttle = n;
  }
}
var FK = ["-c", `core.hooksPath=${F2n()}`, "-c", "core.fsmonitor=", "-c", "core.askPass=", "-c", "gc.auto=0", "-c", "maintenance.auto=false"],
  KBe = {
    SELF_HOSTED_RUNNER_POOL_SECRET: void 0,
    SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET: void 0,
    GIT_ALLOW_PROTOCOL: "https:http:ssh"
  },
  V = {
    GIT_NO_LAZY_FETCH: "1",
    GIT_ALLOW_PROTOCOL: "none",
    GIT_SSH_COMMAND: "false",
    GIT_NO_REPLACE_OBJECTS: "1",
    GIT_TERMINAL_PROMPT: "0",
    CLAUDE_CODE_SESSION_ACCESS_TOKEN: void 0
  },
  Kt = ["-c", "alias.remote-none=", "-c", "fetch.bundleURI="];
async function cci(e) {
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
    f = wn(outcomes ?? []);
  for (let source of sources) {
    if (!r5r(source.type)) {
      onDebug(`[byoc:git] Skipping unsupported source type: ${source.type}`);
      continue;
    }
    await Jt({
      baseDir: baseDir,
      source: source,
      targetBranch: f.get(source.repo),
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
function r5r(e) {
  return e === "github" || e === "github-ssh" || e === "test-file";
}
async function Jt(e) {
  let n = Date.now();
  try {
    let {
      repoExisted: t
    } = await Xt(e);
    g("byoc_git_prepare_repo", {
      repo_existed: t,
      duration_ms: Date.now() - n
    });
  } catch (error) {
    throw m("byoc_git_prepare_repo", "error", {
      duration_ms: Date.now() - n
    }), error;
  }
}
async function Xt(e) {
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
    gitURL = En(source_2),
    authURL = source_2.getAuthToken ? gitURL : T3o(gitURL, source_2.token),
    repoPath = C3o(baseDir_2, source_2);
  if (!repoPath) throw Error(`Could not determine repository directory for: ${source_2.repo}`);
  if (source_2.ref && !eE(source_2.ref)) throw Error(`Invalid ref: ${source_2.ref}`);
  if (targetBranch && !eE(targetBranch)) throw Error(`Invalid target branch: ${targetBranch}`);
  let G = Date.now();
  onDebug_2(`[byoc:git] Preparing ${source_2.repo} at ${repoPath} (ref=${source_2.ref ?? "HEAD"}, auth=${source_2.getAuthToken ? "git-proxy" : authURL !== gitURL})`);
  let {
    invalid: invalid
  } = Xe();
  if (invalid !== void 0) onDebug_2(`[byoc:git] Ignoring CLAUDE_RUNNER_FETCH_DEPTH='${invalid}' \u2014 expected 'full', '0', or a positive integer; using default ${depth_2}`);
  let C = Ze();
  if (C.invalid !== void 0) onDebug_2(`[byoc:git] Ignoring CLAUDE_RUNNER_FETCH_SERVER_PROGRESS_CAP_MS='${C.invalid}' \u2014 expected a positive integer (milliseconds), '0' or 'off'; using default ${capMs}`);else if (C.clamped !== void 0) onDebug_2(`[byoc:git] CLAUDE_RUNNER_FETCH_SERVER_PROGRESS_CAP_MS='${C.clamped}' is ${C.capMs === se ? "above the thirty-minute ceiling" : "below the two-minute floor"}; using ${C.capMs} ms`);
  let E = {
      repoPath: repoPath,
      gitURL: gitURL,
      authURL: authURL,
      originURL: t5r(source_2) ?? authURL,
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
    l = void 0;
  if (!skipValidation_2) await ke(E, "validateAccess", () => en(E, source_2.repo, source_2.skippedIfThrottled === !0));
  let repoExisted = await ke(E, "ensureRepository", () => sn(E, baseDir_2, l !== void 0));
  if (alwaysFetch_2) await Ce(E, source_2.ref, skipReset_2, repoExisted, l);else if (repoExisted && !source_2.ref) onDebug_2("[byoc:git] Using prefetched repo as-is (no ref requested)");else if (repoExisted && source_2.ref) {
    if (targetBranch && (await dt(E, targetBranch))) return onDebug_2(`[byoc:git] Task branch ${targetBranch} exists on remote, fetching it`), await at(E, targetBranch, repoExisted), onDebug_2(`[byoc:git] Ready: ${source_2.repo} (${Date.now() - G}ms)`), {
      repoExisted: repoExisted
    };
    if (await gn(E, source_2.ref)) onDebug_2(`[byoc:git] Ref ${source_2.ref} resolves locally, skipping fetch`), await p(E, E.repoPath, ["checkout", "--progress", "--force", source_2.ref]);else await Ce(E, source_2.ref, !1, repoExisted);
  } else await Ce(E, source_2.ref, !1, repoExisted);
  if (targetBranch) await fn(E, targetBranch, repoExisted);
  return onDebug_2(`[byoc:git] Ready: ${source_2.repo} (${Date.now() - G}ms)`), {
    repoExisted: repoExisted
  };
}
function q(e, n, t, r) {
  e.onDebug(`[byoc:git] phase ${n} ${t}ms${r ? " " + _(r) : ""}`);
  try {
    e.onPhase?.(n, t, r);
  } catch (error) {
    e.onDebug(`[byoc:git] onPhase callback threw: ${A(error)}`);
  }
}
async function ke(e, n, t, r) {
  let s = Date.now(),
    o = await t();
  return q(e, n, Date.now() - s, r), o;
}
var uci = {
    repo_not_found_or_no_permission: "repository not found or no permission",
    no_credentials: "no credentials for the repository's git host",
    authentication_failed: "authentication failed",
    blocked_by_git_proxy: "blocked by the git proxy"
  },
  qt = [[/^fatal: repository '.*' not found$/, "repo_not_found_or_no_permission"], [/^fatal: unable to access '.*': the requested url returned error: 404$/, "repo_not_found_or_no_permission"], [/^error: repository not found\.?$/, "repo_not_found_or_no_permission"], [/^fatal: could not read (username|password) for /, "no_credentials"], [/^fatal: authentication failed for /, "authentication_failed"], [/^fatal: unable to access '.*': the requested url returned error: 401$/, "authentication_failed"], [/^\S+@\S+: permission denied \(publickey(,[a-z0-9,-]+)?\)\.?$/, "authentication_failed"]],
  Zt = /^fatal: unable to access '.*': the requested url returned error: (?!40[14]$)\d+$/;
function Qt(e, n) {
  if (/^git \S+ failed \(watchdog:/.test(e)) return;
  let t = e.replace(/^git \S+ failed: /, "");
  if (t.length >= ae) return;
  let r = t.toLowerCase().split(`
`).map(item => item.trim());
  if (n) return r.some(item => item.startsWith("remote: access denied by the git proxy")) ? "blocked_by_git_proxy" : void 0;
  if (r.some(item => Zt.test(item))) return;
  for (let [s, o] of qt) if (r.some(item => s.test(item))) return o;
  return;
}
class RepositoryAccessError extends R {
  denial;
  throttle;
  repository;
  constructor(e, n, t) {
    super(`Repository access validation failed after ${$e} attempts: ${A(e)}`, "Repository access validation failed");
    this.name = "RepositoryAccessError";
    let r = URL.canParse(t.gitURL) ? new URL(t.gitURL) : void 0;
    this.repository = {
      repo: t.repo,
      address: r !== void 0 && (r.protocol === "https:" || r.protocol === "http:") && r.hostname !== "" ? {
        scheme: r.protocol.slice(0, -1),
        host: r.hostname,
        port: r.port || void 0
      } : void 0
    }, this.denial = Qt(A(e), n), this.throttle = this.denial === void 0 ? De(A(e), t.lastAttemptExitCode, t.gitURL) : void 0;
  }
}
async function en(e, repo, t) {
  let r = 2000 + Math.random() * 2000,
    s,
    o = {};
  for (let a = 0; a < $e; a++) {
    if (a > 0) {
      let c = t && De(A(s), o.exitCode, e.gitURL) !== void 0,
        d = r * (1 << a - 1) * (c ? Ht : 1);
      e.onDebug(`[byoc:git] Validation retry ${a + 1}/${$e}, backing off ${Math.round(d)}ms`), await J(d, e.signal, {
        throwOnAbort: !0
      });
    }
    o = {};
    try {
      if (await p(e, "", ["ls-remote", "--heads", e.authURL, "HEAD"], void 0, void 0, o), a > 0) e.onDebug(`[byoc:git] Validation succeeded on attempt ${a + 1}`);
      return;
    } catch (error) {
      s = error;
    }
  }
  throw new RepositoryAccessError(s, e.getAuthToken !== void 0, {
    repo: repo,
    gitURL: e.gitURL,
    lastAttemptExitCode: o.exitCode
  });
}
function tn(e) {
  let n = e.trim().match(/^(url\.(https?:\/\/[^\s@]+)\.pushinsteadof) (\S+)$/i);
  if (!n) return;
  let [, t, r, s] = n,
    o = s.match(/^https?:\/\/([^/@\s]+\/[^/\s]+\/[^/\s]+)$/i)?.[1],
    a;
  try {
    a = new URL(r).pathname;
  } catch {
    return;
  }
  if (o === void 0 || !a.endsWith(`/${o}`)) return;
  return t;
}
var nn = "CLAUDE_CODE_SESSION_ACCESS_TOKEN";
function rn(e) {
  let n = e.trim().match(/^(credential\.(https?:\/\/[^\s@]+)\.helper) (.+)$/i);
  if (!n) return;
  let [, key, r, s] = n;
  return s === wnr(nn) ? {
    key: key,
    base: r.replace(/\/+$/, "")
  } : void 0;
}
function on(e, n) {
  let t = e.trim().match(/^(url\.(https?:\/\/[^\s@]+)\.insteadof) (\S+)$/i);
  if (!t) return;
  let [, r, s, o] = t,
    a = o.replace(/\.git$/i, "").match(/^https?:\/\/([^/@\s]+\/[^/\s]+\/[^/\s]+)$/i)?.[1];
  if (a === void 0) return;
  return n.some(item => s === `${item}/${a}`) ? r : void 0;
}
async function sn(e, n, t) {
  let r = {};
  if (e.originURL === e.authURL ? await p(e, e.repoPath, ["--git-dir", v(e.repoPath, ".git"), "remote", "set-url", "origin", e.authURL], void 0, void 0, r).then(() => !0, () => !1) : await cn(e)) {
    await p(e, e.repoPath, ["--git-dir", v(e.repoPath, ".git"), "config", "--unset-all", "remote.origin.pushurl"]).catch(() => {});
    let o = await p(e, e.repoPath, ["--git-dir", v(e.repoPath, ".git"), "config", "--local", "--get-regexp", "^url\\..*\\.pushinsteadof$"]).catch(() => "");
    for (let u of o.split(`
`)) {
      let h = tn(u);
      if (h === void 0) continue;
      await p(e, e.repoPath, ["--git-dir", v(e.repoPath, ".git"), "config", "--local", "--unset-all", h]).catch(() => {}), e.onDebug(`[byoc:git] Dropped a stale git-mount push rewrite (${Z(h)}) from ${e.repoPath}`);
    }
    let a = await p(e, e.repoPath, ["--git-dir", v(e.repoPath, ".git"), "config", "--local", "--get-regexp", "^credential\\..*\\.helper$"]).catch(() => ""),
      c = new Set(),
      d = [];
    for (let u of a.split(`
`)) {
      let h = rn(u);
      if (h !== void 0 && !c.has(h.key)) c.add(h.key), d.push(h.base);
    }
    if (d.length > 0) {
      let u = await p(e, e.repoPath, ["--git-dir", v(e.repoPath, ".git"), "config", "--local", "--get-regexp", "^url\\..*\\.insteadof$"]).catch(() => ""),
        h = new Set();
      for (let T of u.split(`
`)) {
        let f = on(T, d);
        if (f === void 0 || h.has(f)) continue;
        h.add(f), await p(e, e.repoPath, ["--git-dir", v(e.repoPath, ".git"), "config", "--local", "--unset-all", f]).catch(() => {}), e.onDebug(`[byoc:git] Dropped a stale git-mount fetch rewrite (${Z(f)}) from ${e.repoPath}`);
      }
    }
    for (let u of c) await p(e, e.repoPath, ["--git-dir", v(e.repoPath, ".git"), "config", "--local", "--unset-all", u]).catch(() => {}), e.onDebug(`[byoc:git] Dropped a stale git-mount credential helper (${Z(u)}) from ${e.repoPath}`);
    return await ze(e), e.onDebug(`[byoc:git] Prefetched repo found at ${e.repoPath}`), !0;
  }
  return e.onDebug(`[byoc:git] No prefetched repo, fresh init at ${e.repoPath}`), await Dl(St(n, {
    recursive: !0
  }), de, `[runner:stuck] mkdir ${n} (check NFS/CSI mount health)`), await p(e, "", ["init", ...(e.initWithoutTemplate ? ["--template="] : []), e.repoPath]), await p(e, e.repoPath, ["config", "gc.auto", "0"]).catch(() => {}), await p(e, e.repoPath, ["remote", "add", "origin", e.originURL]).catch(() => p(e, e.repoPath, ["remote", "set-url", "origin", e.originURL])), await ze(e), !1;
}
var Ye = 7,
  an = 100,
  it = {
    GIT_CONFIG_NOSYSTEM: "1",
    GIT_CONFIG_GLOBAL: "/dev/null",
    GIT_CONFIG_COUNT: "0",
    GIT_CONFIG_PARAMETERS: ""
  },
  o5r = {
    GIT_CONFIG_GLOBAL: "/dev/null",
    HOME: F2n(),
    XDG_CONFIG_HOME: F2n()
  },
  dn = {
    ...it,
    ...o5r
  };
async function je(e, n, t, r) {
  let s = {};
  return p(e, "", ["--git-dir", n, "config", ...t], r, void 0, s).catch(o => {
    if (s.exitCode === 1) return;
    if (e.signal?.aborted) throw o;
    throw new R(`Could not read remote.origin.url from ${n}/config (${A(o)}). The clone was left as it is: repair that file, or remove the clone when no session is using it; the next session will clone it again.`, "Could not read remote.origin.url of the repository's clone");
  });
}
async function cn(e) {
  let n = v(e.repoPath, ".git"),
    t = await je(e, n, ["--get-all", "remote.origin.url"]);
  if (t === void 0) {
    if ((await je(e, n, ["--get-regexp", "^remote\\.origin\\."], it)) === void 0) return !1;
    let o = {};
    if (!(await p(e, "", ["--git-dir", n, "config", "--get-regexp", "^remote\\.origin\\."], dn, void 0, o).then(() => !0, c => {
      if (e.signal?.aborted) throw c;
      return o.exitCode !== 1 || o.wroteStderr !== !1;
    }))) return !1;
  }
  let r = (t ?? "").split(`
`).filter(item => item.length > 0);
  if (r.length === 1 && r[0] === e.originURL) return !0;
  for (let s = 1;; s++) {
    let o = await p(e, e.repoPath, ["--git-dir", n, "config", "--replace-all", "remote.origin.url", e.originURL]).then(() => {
      return;
    }, a => a ?? Error("git config failed"));
    if (o === void 0) return e.onDebug(`[byoc:git] remote.origin.url in ${e.repoPath} did not hold the upstream address; corrected`), !0;
    if (e.signal?.aborted) throw o;
    if (s === Ye) throw new R(`Could not correct remote.origin.url in ${n}/config after ${Ye} tries over about six seconds (${A(o)}). The clone was left as it is; if that error says "could not lock config file" and "File exists", and no git is running there, remove ${n}/config.lock.`, "Could not write remote.origin.url of the repository's clone");
    await J(an * 2 ** (s - 1), e.signal, {
      throwOnAbort: !0
    });
  }
}
async function ze(e) {
  if (e.originURL !== e.authURL) {
    let n = (await p(e, e.repoPath, ["--git-dir", v(e.repoPath, ".git"), "config", "--get-all", "remote.origin.fetch"]).catch(() => "")).split(`
`).filter(item => /^\+?refs\/heads\//.test(item));
    if (n.length > 0 && n.every(item => item === ynr)) return;
  }
  await p(e, e.repoPath, ["--git-dir", v(e.repoPath, ".git"), "config", "--replace-all", "remote.origin.fetch", ynr, "^\\+?refs/heads/"]).catch(n => e.onDebug(`[byoc:git] Could not normalize remote.origin.fetch: ${A(n)}`));
}
function ot(e) {
  if (e.originURL === e.authURL) return {
    configArgs: [],
    remote: "origin"
  };
  let remote = `claude-runner-prep-${yt()}`,
    t = lt();
  return {
    configArgs: ["-c", `remote.${remote}.url=${e.authURL}`, "-c", `remote.${remote}.fetch=${ynr}`, ...(t ? ["-c", `remote.${remote}.proxy=${t}`] : [])],
    remote: remote
  };
}
async function Ce(e, n, t, r, s) {
  let o = n || "HEAD",
    a = () => {
      let b = ot(e);
      return [...b.configArgs, "fetch", ...Je(r), "--progress", "--no-tags", ...[], b.remote, o];
    },
    c = !t && Yt(),
    d = !1,
    u = c && !d && (await p(e, e.repoPath, ["rev-parse", "--verify", "--quiet", "HEAD^{commit}"], {
      ...V
    }).then(() => !0, () => !1)),
    h = !1,
    T = await st(e, a, async () => (h = await pn(e), !h), r && nt());
  if (h) {
    if (e.onDebug("[byoc:git] Repository is empty, skipping checkout"), e.sanitized) {
      let b = v(e.repoPath, ".git"),
        G = {};
      await p(e, e.repoPath, ["--git-dir", b, "read-tree", "HEAD"], {
        ...V
      }, Mt, G).then(e.sanitized.onIndexFromHead, async P => {
        if (e.signal?.throwIfAborted(), e.onDebug(`[byoc:git] Could not read HEAD into the index: ${A(P)}`), typeof G.exitCode !== "number" || G.exitCode > 128) await vt(v(b, "index.lock")).catch(() => {});
      });
    }
    return;
  }
  if (!T) throw Error(`git fetch failed for ${e.gitURL}`);
  if (await p(e, e.repoPath, ["update-ref", "refs/remotes/origin/HEAD", "FETCH_HEAD^{commit}"], {
    ...V
  }).catch(b => e.onDebug(`[byoc:git] Could not set origin/HEAD: ${A(b)}`)), t) {
    e.onDebug("[byoc:git] Fetched to FETCH_HEAD, skipping reset-hard (worktree mode)");
    return;
  }
  let f = () => p(e, e.repoPath, ["update-ref", "--no-deref", "HEAD", "HEAD"], {
      ...V
    }).catch(() => {}),
    w = () => p(e, e.repoPath, ["-c", "core.checkStat=minimal", "-c", "core.trustctime=false", "reset", "--hard", "FETCH_HEAD^{commit}"]);
  if (!u) await f();
  await ke(e, "reset", async () => {
    if (u) try {
      await p(e, e.repoPath, ["-c", "core.checkStat=minimal", "-c", "core.trustctime=false", "checkout", "-q", "--progress", "--detach", "FETCH_HEAD^{commit}"]);
      return;
    } catch (error) {
      if (e.signal?.aborted) throw error;
      e.onDebug(`[byoc:git] Delta reset failed, falling back to reset --hard: ${A(error)}`), await f();
    }
    await w();
  }, d ? {
    delta_reset: "withheld"
  } : void 0);
}
function ln(e, n) {
  let t = [];
  if (n && e < tt) t.push("-c", `http.lowSpeedLimit=${Vt}`, "-c", `http.lowSpeedTime=${Bt}`);
  if (e >= 3) t.push("-c", "http.version=HTTP/1.1");
  return t;
}
function un(e, n, t, r, s) {
  return p(e, e.repoPath, n, t, r, s);
}
async function st(e, n, t, r = !1, s = un) {
  let o = Date.now(),
    a = 4000 + Math.random() * 4000,
    c = r && xt(),
    d = 0,
    u,
    h,
    T = [],
    f = l => l.length <= xe ? l : Q(l, We) + "\u2026" + Pa(l, xe - We - 1),
    w = () => T.length > 0 ? {
      attempt_errors: _(T)
    } : {},
    b = 0,
    G = 0,
    P = l => ({
      failfast_aborts: String(b),
      client_aborts: String(G),
      ...(l?.transferBytes !== void 0 && {
        pack_bytes: String(l.transferBytes)
      }),
      ...(l?.sawServerProgress === !0 && {
        server_progress: "true"
      })
    });
  for (let l = 0; l < ie; l++) {
    if (l > 0) {
      let N = a * (1 << l - 1);
      e.onDebug(`[byoc:git] Fetch retry ${l + 1}/${ie}, backing off ${Math.round(N)}ms`), await J(N, e.signal, {
        throwOnAbort: !0
      });
    }
    let S = [...ln(l, r), ...(typeof n === "function" ? n() : n)],
      z = l === ie - 1 || c && l === oe - 1 && d === oe - 1 ? {
        GIT_TRACE_PACKET: "1"
      } : void 0,
      k = {};
    try {
      let N = se - (Date.now() - o);
      if (await s(e, S, z, Math.max(1, N), k), l > 0) e.onDebug(`[byoc:git] Fetch succeeded on attempt ${l + 1}`);
      return q(e, "fetch", Date.now() - o, {
        attempts: String(l + 1),
        ...P(k),
        ...w()
      }), !0;
    } catch (error) {
      u = error, h = k.exitCode;
      let O = A(error);
      e.onDebug(`[byoc:git] Fetch attempt ${l + 1} failed: ${O}`), T.push(f(Mc(O)));
      let ee = r && l < tt && Wt(O);
      if (k.killReason !== void 0) G++;else if (ee) b++;
      if (d = (ee || k.killReason === "silence" || k.killReason === "escalated") && !k.sawClientProgress && !k.sawRemoteActivity ? d + 1 : 0, Date.now() - o >= se) {
        if (e.onDebug(`[byoc:git] Fetch cumulative wall-clock ${Date.now() - o}ms \u2265 hard cap \u2014 not retrying`), q(e, "fetch", Date.now() - o, {
          attempts: String(l + 1),
          hard_cap: "true",
          ...P(),
          ...w()
        }), bnr(O)) throw new FetchRefNotFoundError(O);
        throw Error(`git fetch failed (cumulative hard cap after ${l + 1} attempts): ${O}`);
      }
      if (t && bnr(O) && !(await t())) return !1;
      if (bnr(O)) throw e.onDebug("[byoc:git] Fetch error is permanent (ref not found on a non-empty remote) \u2014 skipping remaining retries"), q(e, "fetch", Date.now() - o, {
        attempts: String(l + 1),
        permanent: "true",
        ...P(),
        ...w()
      }), new FetchRefNotFoundError(O);
      if (c && l === oe - 1 && d === oe) throw e.onDebug(`[byoc:git] Fetch remote mute on all ${oe} attempts (no progress, no remote activity) \u2014 giving up so the session can be reassigned`), q(e, "fetch", Date.now() - o, {
        attempts: String(l + 1),
        exhausted: "true",
        giveup: "mute",
        ...P(),
        ...w()
      }), Error(`git fetch failed after ${l + 1} mute attempts (no progress, no remote activity; giving up early for reassignment): ${O}`);
    }
  }
  q(e, "fetch", Date.now() - o, {
    attempts: String(ie),
    exhausted: "true",
    ...P(),
    ...w()
  });
  let C = `git fetch failed after ${ie} attempts: ${A(u)}`,
    E = De(A(u), h, e.gitURL);
  if (E !== void 0) throw new FetchThrottledError(C, E);
  throw Error(C);
}
async function fn(e, n, t) {
  if ((await p(e, e.repoPath, ["branch", "--show-current"]).catch(() => "")).trim() === n) {
    e.onDebug(`[byoc:git] Already on target branch ${n}`);
    return;
  }
  if (await dt(e, n)) e.onDebug("[byoc:git] Target branch exists on remote, fetching"), await at(e, n, t);else e.onDebug(`[byoc:git] Creating local branch ${n} from HEAD`), await p(e, e.repoPath, ["checkout", "-B", n]), await p(e, e.repoPath, ["update-ref", `refs/remotes/origin/${n}`, "HEAD"], {
    ...V
  }).catch(() => {});
}
async function at(e, n, t) {
  await st(e, () => {
    let r = ot(e);
    return [...r.configArgs, "fetch", ...Je(t), "--progress", r.remote, n];
  }, void 0, t && nt()), await p(e, e.repoPath, ["checkout", "--progress", "--force", "-B", n, "FETCH_HEAD"]);
}
async function dt(e, n) {
  try {
    return (await p(e, e.repoPath, ["ls-remote", "--heads", e.authURL, `refs/heads/${n}`])).trim().length > 0;
  } catch {
    return !1;
  }
}
async function gn(e, n) {
  try {
    return await p(e, e.repoPath, ["rev-parse", "--verify", "--quiet", n], {
      ...V
    }), !0;
  } catch {
    return !1;
  }
}
async function pn(e) {
  try {
    return (await p(e, e.repoPath, ["ls-remote", "--symref", e.authURL, "HEAD"])).trim() === "";
  } catch {
    return !1;
  }
}
var Snr = "SHR_GIT_PROXY_TOKEN",
  v3o = ["-c", "lfs.locksverify=false"];
function E3o(e) {
  return ct("unused", e);
}
function ct(e, n) {
  return `!f() { if test "$1" = get; then printf 'username=${e}\\npassword=%s\\n' "$${n}"; fi; }; f`;
}
function wnr(e) {
  return ct("x-access-token", e);
}
function s5r(e) {
  let n = new URL(e).origin;
  return ["-c", "credential.helper=", "-c", `credential.${n}.helper=`, "-c", `credential.${n}.helper=${E3o(Snr)}`];
}
function lt() {
  return process.env.HTTPS_PROXY || process.env.https_proxy || process.env.ALL_PROXY || process.env.all_proxy || "";
}
function i5r(e) {
  let t = ["", `${new URL(e).origin}.`, `${e}.`],
    r = lt(),
    s = r ? ["-c", `remote.origin.proxy=${r}`] : [];
  for (let o of t) {
    if (r) s.push("-c", `http.${o}proxy=${r}`);
    s.push("-c", `http.${o}sslVerify=true`);
  }
  return s;
}
var hn = new Set(["fetch", "ls-remote"]);
function mn(e) {
  for (let n = 0; n < e.length; n++) {
    if (e[n] === "-c" || e[n] === "--git-dir" || e[n] === "-C") {
      n++;
      continue;
    }
    return e[n];
  }
  return;
}
async function p(e, n, t, r, s = se, o) {
  let a = e.getAuthToken !== void 0,
    c = mn(t),
    d = c !== void 0 && hn.has(c),
    u = a && d ? e.getAuthToken() : void 0,
    h = r?.GIT_ALLOW_PROTOCOL === "none",
    T = [...FK, ...l4t(e.gitEnvironment?.commandScopeEntries ?? []), ...(h ? Kt : []), "-c", "http.proxyAuthMethod=basic", ...(a && d ? i5r(e.gitURL) : []), ...(u ? s5r(e.gitURL) : []), ...(e.governedMount && d ? v3o : []), ...t],
    f = u ?? e.token,
    w = T.map(item => yn(item, e.authURL, e.gitURL, f));
  e.onDebug(`[byoc:git] git ${w.join(" ")} (dir=${n || "."})`);
  let b = !d || a || Boolean(e.token),
    env = {
      ...process.env,
      ...r,
      ...e.gitEnvironment?.envOverrides,
      ...(u ? {
        [Snr]: u
      } : void 0),
      CLAUDE_CODE_SESSION_ACCESS_TOKEN: void 0,
      ...(a ? {
        GIT_CONFIG_GLOBAL: "/dev/null"
      } : void 0),
      ...(b ? {
        GIT_CONFIG: void 0
      } : void 0),
      GIT_TERMINAL_PROMPT: "0",
      GCM_INTERACTIVE: pae.GCM_INTERACTIVE,
      LC_ALL: "C",
      GIT_PROGRESS_DELAY: "0",
      ...KBe,
      ...(e.authURL.startsWith("file://") && {
        GIT_ALLOW_PROTOCOL: `file:${KBe.GIT_ALLOW_PROTOCOL}`
      }),
      GIT_SSH_COMMAND: `${process.env.GIT_SSH_COMMAND || "ssh"} -o BatchMode=yes -o ConnectTimeout=30`,
      ...(h && {
        GIT_ALLOW_PROTOCOL: "none",
        GIT_SSH_COMMAND: "false"
      })
    };
  if (b) {
    for (let B of Object.keys(env)) if (B.toUpperCase() === "GIT_CONFIG") env[B] = void 0;
  }
  let {
      signal: signal_3,
      dispose: dispose
    } = _n(e.signal, s),
    E = c !== void 0 && Ot.has(c) ? _nr : e.watchdog?.silenceMs ?? qe,
    l,
    S,
    ye = Date.now(),
    z = e.watchdog?.preTransferCapMs ?? Ze().capMs,
    k,
    N = new Set(),
    O,
    ee = !1,
    Te = {
      active: !1
    },
    ce = Date.now();
  try {
    return await new Promise((x, W) => {
      let F = wt("git", T, {
          cwd: n || void 0,
          windowsHide: !0,
          ...au("helper"),
          env: env,
          stdio: ["ignore", "pipe", "pipe"]
        }),
        le = 10485760,
        K = 8192,
        te = 0,
        M = [],
        stderr = "",
        ue = !1,
        L = 0,
        ne = -1,
        Ie,
        Se = y => {
          if (typeof y === "object" && "unref" in y) y.unref();
          return y;
        },
        X = !1,
        ve,
        Ne = y => {
          if (l === void 0) l = y;
          F.kill("SIGTERM"), ve ??= Se(setTimeout(() => {
            if (X) return;
            F.kill("SIGKILL"), l = "escalated", X = !0, W(Object.assign(Error("git did not exit after SIGTERM"), {
              stdout: Buffer.concat(M).toString("utf8"),
              stderr: stderr
            }));
          }, Ae));
        },
        fe = (y = E) => Se(setTimeout(I => I("silence"), y, Ne)),
        Y = fe();
      F.stdout.on("data", y => {
        if (te < 10485760) M.push(y), te += y.length;else if (o) o.stdoutTruncated = !0;
      }), F.stderr.on("data", y => {
        let I = y.toString("utf8"),
          j = stderr + I;
        if (j.length > 8192) ee = !0;
        stderr = j.slice(-8192);
        let ge = $t(I, ue),
          {
            display: display_2,
            client: client_2,
            server: server_2
          } = ge;
        if (I.length > 0) ue = !/[\r\n]$/.test(I);
        if (o !== void 0) {
          if (Lt(Te, ge, Date.now()), Te.active) o.sawRemoteActivity = !0;
        }
        if (client_2) {
          if (o !== void 0) o.sawClientProgress = !0;
          if (E < Be && Nt(client_2)) E = Be, clearTimeout(Y), Y = fe();
          if (Dt(S, client_2)) ye = Date.now(), clearTimeout(Y), Y = fe();
          if (S = client_2, o !== void 0 && client_2.bytes !== void 0 && client_2.label === Pt && client_2.bytes > (o.transferBytes ?? -1)) o.transferBytes = client_2.bytes;
        } else if (server_2 !== void 0 && S === void 0) {
          if (It(k, N, server_2)) {
            k = server_2;
            let he = ce + z - Date.now();
            if (z > 0 && he > 0) {
              if (O = Date.now(), clearTimeout(Y), Y = fe(Math.min(E, he)), o !== void 0) o.sawServerProgress = !0;
            }
          }
          N.add(server_2.label);
        }
        if (display_2) {
          if (display_2.label !== Ie) Ie = display_2.label, ne = -1;
          let he = Math.floor(display_2.pct / 10),
            Fe = Date.now() - L;
          if (Fe >= Ct && (Fe >= At || he > Math.floor(ne / 10))) {
            L = Date.now(), ne = display_2.pct;
            try {
              e.onDebug(`[byoc:git] ${c ?? "git"}: ${display_2.raw}`), e.onProgress?.(c ?? "git", display_2);
            } catch {}
          }
        }
      });
      let Pe = () => {
        if (e.signal?.aborted) F.kill("SIGTERM"), ve ??= Se(setTimeout(() => {
          if (X) return;
          F.kill("SIGKILL"), X = !0;
          let y = Error("The operation was aborted");
          y.name = "AbortError", W(Object.assign(y, {
            stderr: stderr
          }));
        }, Ae));else Ne("hard-cap");
      };
      if (signal_3.aborted) Pe();else signal_3.addEventListener("abort", Pe, {
        once: !0
      });
      let Ge;
      F.on("error", y => {
        Ge = y;
      }), F.on("close", (code, signal_4) => {
        if (X) return;
        if (X = !0, clearTimeout(Y), clearTimeout(ve), signal_3.removeEventListener("abort", Pe), o !== void 0) o.exitCode = code, o.wroteStderr = stderr.length > 0;
        let stdout = Buffer.concat(M).toString("utf8");
        if (e.signal?.aborted && l === void 0) {
          let U = Error("The operation was aborted");
          return U.name = "AbortError", W(Object.assign(U, {
            stdout: stdout,
            stderr: stderr,
            code: code,
            signal: signal_4
          }));
        }
        if (Ge) return W(Object.assign(Ge, {
          stdout: stdout,
          stderr: stderr
        }));
        if (code === 0) return x(stdout);
        let ge = Error(signal_4 !== null ? `git exited on signal ${signal_4}` : `git exited with code ${code}`);
        W(Object.assign(ge, {
          stdout: stdout,
          stderr: stderr,
          code: code,
          signal: signal_4
        }));
      });
    });
  } catch (error) {
    let x = error;
    if (l !== void 0) {
      let le = S ? ` at ${S.label} ${S.pct}%${S.total ? ` (${S.done}/${S.total})` : ""}` : "",
        K = Date.now(),
        te = K - ye,
        M = "",
        D = `no forward progress for ${te}ms (budget ${E}ms)${le}`;
      if (S === void 0 && k !== void 0 && O !== void 0) {
        let L = k,
          ne = L.done !== void 0 ? L.pct > 0 ? ` ${L.pct}% (${L.done}${L.total !== void 0 ? `/${L.total}` : ""})` : ` ${L.done}` : ` ${L.pct}%`;
        M = ` \u2014 no pack data received; server-side progress last advanced ${K - O}ms ago at ${L.label}${ne}`, D = K - ce >= z ? `pre-transfer cap ${z}ms reached with no client-side progress${M}` : `no client-side progress for ${K - ce}ms and server-side progress stopped advancing (budget ${E}ms)${M}`;
      }
      let ue = l === "silence" ? D : l === "hard-cap" ? `hard cap ${s}ms after ${K - ce}ms${le}${M}` : `did not exit within ${Ae}ms of SIGTERM (D-state? \u2014 last forward ${te}ms ago)${le}`;
      e.onDebug(`[runner:stuck] git ${w.join(" ")} (dir=${n || "."}) \u2014 ${ue} \u2014 killing subprocess`);
    }
    let W = x.stderr !== void 0 && x.stderr.length > 0 ? Ut(x.stderr, ee, e.authURL, f) : pt(knr(x.stdout || x.message || "", e.authURL, f)).slice(0, ae),
      F = l !== void 0 ? ` (watchdog: ${l})` : "";
    throw Error(`git ${c ?? "?"} failed${F}: ${W}`);
  } finally {
    if (o !== void 0 && l !== void 0) o.killReason = l;
    dispose();
  }
}
function Awn(e) {
  return e.startsWith("https://") || e.startsWith("http://") || e.startsWith("ssh://") || !e.includes("://") && /^[A-Za-z0-9][A-Za-z0-9._-]*@[^:]+:/.test(e);
}
function _n(e, n) {
  let abortController = new AbortController(),
    r = setTimeout(a => a.abort(), n, abortController);
  if (typeof r === "object" && "unref" in r) r.unref();
  let s;
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
    s = () => {
      clearTimeout(r), abortController.abort();
    }, e.addEventListener("abort", s, {
      once: !0
    });
  }
  abortController.signal.addEventListener("abort", () => clearTimeout(r));
  let dispose_3 = () => {
    if (clearTimeout(r), e && s) e.removeEventListener("abort", s);
  };
  return {
    signal: abortController.signal,
    dispose: dispose_3,
    [Symbol.dispose]: dispose_3
  };
}
function En(e) {
  if (e.url) {
    if (!Awn(e.url)) throw Error(`Unsupported git URL protocol (only https/http/ssh/user@host:path allowed): ${e.url}`);
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
function T3o(e, n) {
  if (!n) return e;
  if (e.startsWith("git@") || e.startsWith("ssh://")) return e;
  let t;
  try {
    t = new URL(e);
  } catch {
    return e;
  }
  if (t.protocol !== "https:") return e;
  if (n.startsWith("sk-ant-ccsr-")) t.username = "unused", t.password = n;else t.username = n;
  return t.toString();
}
function C3o(e, n) {
  if (n.type === "test-file") {
    let r = Le(n.repo);
    if (!r || r === "." || r === "..") return "";
    return v(e, r);
  }
  let t = n.repo.split("/").filter(item => item.length > 0);
  if (t.length === 0) return "";
  for (let r of t) if (r === "." || r === "..") return "";
  return v(e, ...t);
}
function fci(e) {
  let n = e.repo.split("/").filter(item => item.length > 0);
  for (let t of n) if (t === "." || t === "..") return "";
  return n.join("-");
}
function ut(e, n) {
  let t = be(be(we(n)));
  return Le(t) === "_sessions" && we(e).startsWith(be(t) + Re) ? t : bn(e, n);
}
function bn(e, n) {
  let t = we(e).split(Re),
    r = we(n).split(Re),
    s = 0;
  while (s < t.length && s < r.length && t[s] === r[s]) s++;
  return s >= 2 ? t.slice(0, s).join(Re) : void 0;
}
async function pci(e) {
  let {
    canonicalRepoPath: n,
    worktreePath: worktreePath,
    ref: ref,
    onDebug: onDebug_3,
    signal: signal_5,
    gitEnvironment: gitEnvironment
  } = e;
  if (worktreePath === n) throw Error("addSessionWorktree: worktreePath must not equal canonicalRepoPath");
  let c = {
      repoPath: n,
      gitURL: "",
      authURL: "",
      originURL: "",
      gitEnvironment: gitEnvironment,
      onDebug: onDebug_3,
      signal: signal_5
    },
    d = (await p(c, n, ["rev-parse", "--verify", "FETCH_HEAD^{commit}"], {
      ...V
    })).trim(),
    u;
  try {
    u = (await p(c, worktreePath, ["--git-dir", v(worktreePath, ".git"), "rev-parse", "HEAD"], {
      ...V
    })).trim();
  } catch (error) {
    if (signal_5?.aborted) throw error;
  }
  if (u === d) {
    let f = (await p(c, worktreePath, ["rev-parse", "--absolute-git-dir"])).trim();
    await Ve(v(f, "FETCH_HEAD"), `${d}
`).catch(() => {}), onDebug_3(`[byoc:git] Worktree ${worktreePath} already at ${d.slice(0, 12)} \u2014 keeping`);
    return;
  }
  onDebug_3(u ? `[byoc:git] Worktree ${worktreePath} at wrong commit ${u.slice(0, 12)}, clearing before re-add` : `[byoc:git] Clearing ${worktreePath} before worktree add`), await Dl(RRi(worktreePath, ut(n, worktreePath)), _nr, `[runner:stuck] rm ${worktreePath} (check NFS/CSI mount health)`).catch(f => {
    onDebug_3(`[byoc:git] rm ${worktreePath} failed (continuing): ${f}`);
  });
  let h = await Dl(ft(worktreePath).then(f => hut(n, f)), de, `[runner:stuck] worktree deregister ${n} (check NFS/CSI mount health)`).then(f => {
    if (f.outcome === "kept") onDebug_3(`[byoc:git] left the worktree registration of ${worktreePath} in place: ${f.reason}`);
    return !0;
  }, f => (onDebug_3(`[byoc:git] worktree deregister did not finish: ${f}`), !1));
  await Rn(c, n, worktreePath, d, h);
  let T = (await p(c, worktreePath, ["rev-parse", "--absolute-git-dir"])).trim();
  await Ve(v(T, "FETCH_HEAD"), `${d}
`), onDebug_3(`[byoc:git] Added worktree ${worktreePath} at ${d.slice(0, 12)} (detached)`);
}
async function Rn(e, repoSpelled, t, r, s) {
  let o = () => p(e, repoSpelled, ["worktree", "add", "--detach", t, r]);
  try {
    await o();
    return;
  } catch (error) {
    if (!s || !A(error).includes("is a missing but already registered worktree")) throw error;
    let c = await Dl(Promise.all([Ke(repoSpelled), ft(t)]).then(([d, worktreePath_2]) => Zde(v(d, ".git"), {
      worktreePath: worktreePath_2,
      repoSpelled: repoSpelled
    }, {
      locked: "keep"
    })), de, `[runner:stuck] worktree deregister ${repoSpelled} (check NFS/CSI mount health)`).catch(d => ({
      outcome: "kept",
      reason: A(d)
    }));
    if (c.outcome !== "dropped") throw e.onDebug(`[byoc:git] git still registers ${t} with its folder gone, and the registration could not be dropped${c.outcome === "kept" ? `: ${c.reason}` : ""}; not retrying`), error;
    e.onDebug(`[byoc:git] dropped the registration git still had for ${t} with its folder gone; retrying worktree add`);
  }
  await o();
}
async function ft(e) {
  let n = await Ke(be(e)).catch(() => null),
    t = n === null ? null : v(n, Le(e));
  return t === null || t === e ? [e] : [e, t];
}
async function mci(e) {
  let {
    worktrees: worktrees,
    onDebug: onDebug_4,
    signal: signal_6
  } = e;
  for (let {
    canonicalRepoPath: s,
    worktreePath: worktreePath_3
  } of worktrees) {
    let a = {
      repoPath: s,
      gitURL: "",
      authURL: "",
      originURL: "",
      onDebug: onDebug_4,
      signal: signal_6
    };
    if (await Dl(Tt(worktreePath_3).then(() => !1, d => wr(d)), de, `[runner:stuck] worktree probe ${worktreePath_3} (check NFS/CSI mount health)`).catch(() => !1)) continue;
    try {
      if (!(await xet(worktreePath_3))) {
        onDebug_4(`[byoc:git] kept worktree ${worktreePath_3} \u2014 unremovable reparse point`);
        continue;
      }
      let d = await Dl(LIt(s, worktreePath_3, {
        trustedRoot: ut(s, worktreePath_3),
        deregisterIfStopped: !0,
        pointerFirst: !0
      }), _nr, `[runner:stuck] remove ${worktreePath_3} (check NFS/CSI mount health)`);
      if (d.outcome === "unanchored") await p(a, s, ["worktree", "remove", "--force", worktreePath_3]);else if (d.outcome !== "removed") {
        onDebug_4(`[byoc:git] worktree remove ${worktreePath_3} failed: ${vWe(d)}`);
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
  } of worktrees) await Dl(hut(canonicalRepoPath, worktreePath_4), de, `[runner:stuck] worktree deregister ${canonicalRepoPath} (check NFS/CSI mount health)`).then(a => {
    if (a.outcome === "kept") onDebug_4(`[byoc:git] left the worktree registration of ${worktreePath_4} in place: ${a.reason}`);
  }, a => {
    onDebug_4(`[byoc:git] worktree deregister did not finish: ${a}`);
  });
}
function wn(e) {
  let n = new Map();
  for (let t of e) {
    let r = t.branches ?? [],
      [s, ...o] = r;
    if (o.length > 0) throw Error(`Outcome for ${t.repo} has ${r.length} branches, expected 0 or 1`);
    if (s) n.set(t.repo, s);
  }
  return n;
}
function yn(e, n, t, r) {
  if (e === n && e !== t) return Z(e);
  if (e.includes("://") && e.includes("@")) return Z(e);
  if (r && e.includes(r)) return e.split(r).join("<token>");
  return e;
}
function knr(e, n, t) {
  if (n && /:\/\/[^/]*@/.test(n)) e = e.split(n).join(Z(n));
  if (t) e = e.split(t).join("<token>");
  return e.replace(/sk-ant-ccsr-[A-Za-z0-9_.-]+/g, "<token>").replace(/sk-ant-[A-Za-z0-9_.-]+/g, "<token>").replace(/github_pat_[A-Za-z0-9_]+/g, "<token>").replace(/gh[psour]_[A-Za-z0-9]+/g, "<token>").replace(/gl(?:pat|dt|rt|ft|soat|oas|agent|ptt|cbt|imt|ffct)-[A-Za-z0-9_=-]+(?:\.[0-9a-z]{9})?/g, "<token>");
}
function Z(e) {
  let n;
  try {
    n = new URL(e);
  } catch {}
  if (n && (n.username || n.password)) {
    let s = n.search || "",
      o = n.hash || "";
    return `${n.protocol}//<token>@${n.host}${n.pathname}${s}${o}`;
  }
  if (n) return e;
  let t = e.indexOf("@"),
    r = e.indexOf("://");
  if (r >= 0 && t > r) return e.slice(0, r + 3) + "<token>" + e.slice(t);
  return e;
}
function A(e) {
  return e instanceof Error ? e.message : String(e);
}
var gt = /^(remote:\s+)?(fatal|error):/i;
function pt(e) {
  if (!e) return "";
  let n = [];
  for (let r of e.split(`
`)) if (gt.test(r)) n.push(r);
  if (n.length === 0) return e;
  let t = n.join(`
`);
  if (e.startsWith(t)) return e;
  return t + `
` + e;
}
export { lci, l4t, Twn, ynr, t5r, _nr, bnr, Cwn, FetchRefNotFoundError as Rwn, dci, FetchThrottledError as n5r, FK, KBe, cci, r5r, uci, RepositoryAccessError as d4t, o5r, Snr, v3o, E3o, wnr, s5r, i5r, Awn, T3o, C3o, fci, pci, mci, knr };