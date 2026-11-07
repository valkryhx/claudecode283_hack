// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { jHr } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { Wd } from "B:/~BUN/root/chunk-2f1svh63.js";
import { yn, ys } from "B:/~BUN/root/chunk-88zb3509.js";
import { lt } from "B:/~BUN/root/chunk-3mm90xb6.js";
import { G1t, Pt } from "B:/~BUN/root/chunk-1g25msn4.js";
import { vO } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { L } from "B:/~BUN/root/chunk-5ha2avah.js";
var T = /^filter\.(.*)\.(?:clean|smudge|process|required)$/is;
function w0n(e) {
  return e.normalize("NFKD").replace(/\p{M}+/gu, "").toLowerCase();
}
function e_s(e) {
  return L(Array.from(e).flatMap(item => {
    let r = T.exec(item)?.[1];
    return r === void 0 ? [] : [r];
  }));
}
function t_s(e) {
  return e.flatMap(item => [[`filter.${item}.clean`, ""], [`filter.${item}.smudge`, ""], [`filter.${item}.process`, ""], [`filter.${item}.required`, "false"]]);
}
var maxBuffer = 1048576,
  timeout = 5000,
  n_s = Object.fromEntries(["GIT_TRACE", "GIT_TRACE_SETUP", "GIT_TRACE_PACKET", "GIT_TRACE_PACKFILE", "GIT_TRACE_PACK_ACCESS", "GIT_TRACE_PERFORMANCE", "GIT_TRACE_SHALLOW", "GIT_TRACE_CURL", "GIT_TRACE_REFS", "GIT_TRACE_FSMONITOR", "GIT_TRACE_WORKING_TREE_ENCODING", "GIT_TRACE2", "GIT_TRACE2_EVENT", "GIT_TRACE2_PERF"].map(item => [item, "0"])),
  r_s = "if that setting is yours, move it to your global git config; if you don't recognize it, remove it from the repository's config, since a tool or checkout you don't trust may have written it";
function k0n(e) {
  switch (e.reason) {
    case "config_unreadable":
      return "git's configuration for the repository could not be read in full";
    case "conditional_include":
      return "the repository's own git config has a conditional include (includeIf), so what a spawn there would load cannot be determined";
    case "unsafe_key":
      return `the repository's own git config sets ${e.lfsKey === void 0 ? e.key : `${e.key}, an entry git-lfs reads as ${e.lfsKey}`}, which names a program git-lfs would run for any LFS path, on checkout and on status alike (${r_s})`;
  }
}
var x = /^includeif\..*\.path$/s,
  m = /lfs.customtransfer..+?.path|^lfs\.(?:.*\.)?standalonetransferagent$|^lfs\.extension\./su,
  w = {
    head: 60,
    tail: 40
  };
function vfo(e) {
  return Wd(jHr(e), w);
}
async function H2(e, n = {}) {
  let r = await Kwr(e, n);
  if (!r.ok) return r;
  let o = e_s(r.entries.map(([i]) => i));
  if (o.some(item => item.includes("=") || item.includes(`
`))) return {
    ok: !1,
    reason: "filter_name_unrepresentable"
  };
  return {
    ok: !0,
    args: t_s(o).flatMap(([i, u]) => ["-c", `${i}=${u}`])
  };
}
function o_s(e, n) {
  return lt(Pt(), e, {
    ...n,
    stdin: "ignore"
  });
}
async function Kwr(e, {
  repository: n = [],
  pin: pin,
  envPins = {},
  base: base,
  run = o_s
} = {}) {
  let s = {
      args: n,
      envPins: envPins,
      base: base,
      pin: n.length > 0 ? void 0 : pin ?? vO(e),
      run: run
    },
    t = await y(e, "--local", s);
  if (t === null) return {
    ok: !1,
    reason: "config_unreadable"
  };
  let f = await y(e, "--worktree", s);
  if (f === null) return {
    ok: !1,
    reason: "config_unreadable"
  };
  let entries = [...t, ...f];
  for (let c of entries) {
    let [a] = c;
    if (x.test(w0n(a))) return {
      ok: !1,
      reason: "conditional_include"
    };
    for (let l of L([a, ...I(c)])) if (m.test(l) || m.test(w0n(l))) return {
      ok: !1,
      reason: "unsafe_key",
      key: vfo(a),
      ...(l === a ? {} : {
        lfsKey: vfo(l)
      })
    };
  }
  return {
    ok: !0,
    entries: entries
  };
}
async function C0t(dir, n, {
  envPins: envPins_2,
  base: base_2,
  repository: repository,
  buildInvocation = (s, {
    dir: t,
    env: env
  }) => ({
    file: Pt(),
    args: [...s],
    cwd: t,
    env: env
  })
}) {
  let s = buildInvocation([...yn, "config", "--includes", "--null", "--show-scope", "--get-regexp", n], {
      dir: dir,
      env: ys(envPins_2, {
        base: base_2,
        repository: repository
      })
    }),
    t = await lt(s.file, s.args, {
      cwd: s.cwd,
      env: s.env,
      extendEnv: !1,
      timeout: timeout,
      preserveOutputOnError: !1,
      stdin: "ignore"
    });
  if (t.code !== 0) return (t.exitCode === 1 || t.exitCode === 129) && !t.timedOut && !t.maxBufferExceeded ? [] : null;
  let f = t.stdout.split("\x00"),
    d = [];
  for (let c = 0; c + 1 < f.length; c += 2) {
    let a = f[c],
      l = f[c + 1] ?? "",
      g = l.indexOf(`
`);
    if ((a === "system" || a === "global" || a === "command") && g !== -1) d.push([l.slice(0, g), l.slice(g + 1)]);
  }
  return d;
}
async function y(cwd, n, {
  args: args,
  envPins: envPins_3,
  base: base_3,
  pin: u,
  run: run_2
}) {
  let {
    code: code,
    stdout: stdout,
    stderr: stderr,
    maxBufferExceeded: maxBufferExceeded
  } = await run_2([...args, ...yn, "config", n, "--includes", "-z", "--list"], {
    cwd: cwd,
    env: ys({
      ...envPins_3,
      ...n_s
    }, {
      repository: u,
      base: base_3
    }),
    ...(base_3 !== void 0 && {
      extendEnv: !1
    }),
    timeout: timeout,
    maxBuffer: maxBuffer
  });
  if (maxBufferExceeded === !0 || Buffer.byteLength(stdout) >= maxBuffer) return null;
  let a = stderr.replace(/\n+$/, ""),
    l = a.search(/^fatal: /m),
    g = l === -1 ? a : a.slice(l);
  if (code === 128 && /^fatal: unable to read config file '[^\n]*config(?:\.worktree)?': No such file or directory$/.test(g)) return [];
  if (n === "--worktree" && code === 128 && /^fatal: --worktree cannot be used with multiple working trees unless the config\nextension worktreeConfig is enabled\. Please read "CONFIGURATION FILE"\nsection in "git help worktree" for details$/.test(g)) return [];
  if (n === "--worktree" && code === 129 && /unknown option `worktree'/.test(stderr)) return [];
  if (code !== 0) return null;
  let E = stdout.split("\x00").filter(item => item !== "").map(item => {
    let R = item.indexOf(`
`);
    return R === -1 ? [item, null] : [item.slice(0, R), item.slice(R + 1)];
  });
  return E.some(([p]) => p.includes("\uFFFD")) ? null : E;
}
function I([e, n]) {
  return (n === null ? e : `${e}=${n}`).split(`
`).flatMap(item => {
    let o = item.indexOf("=");
    return o === -1 ? [] : [item.slice(0, o).trim()];
  });
}
var Hpt = ["CHERRY_PICK_HEAD", "REVERT_HEAD"],
  k = 2;
async function R0t(e, n, r) {
  let o = new Set();
  if (n.length === 0 || !(await G1t(e))) return o;
  let i = await Promise.all(n.map(item => r(["show-ref", "--exists", item]))),
    u = !1;
  for (let [s, t] of i.entries()) if (t === 0) o.add(n[s]);else if (t !== k) u = !0;
  return o.size === 0 && u ? null : o;
}
export { w0n, e_s, t_s, n_s, r_s, k0n, vfo, H2, o_s, Kwr, C0t, Hpt, R0t };