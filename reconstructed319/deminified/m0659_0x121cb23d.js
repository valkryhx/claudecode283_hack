// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Ane, wJs, hle, N2t } from "B:/~BUN/root/chunk-sbp8fbqp.js";
import { b } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { R, d, k, tr } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { J } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { Pe } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { qnt } from "B:/~BUN/root/chunk-game8aqv.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Zz, zV, FO, Ate, pln, qie } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { l0 } from "B:/~BUN/root/chunk-gq1er5y2.js";
import { BIt } from "B:/~BUN/root/chunk-3eq12f11.js";
import { OR } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { HRe } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Kn } from "B:/~BUN/root/chunk-gvasf6q6.js";
import { Yht, k3 } from "B:/~BUN/root/chunk-m749kjym.js";
import { CA, nAr, am, Mp, pU } from "B:/~BUN/root/chunk-ht2sp6s6.js";
import { zc, r_e, I0e, g1, _Qt } from "B:/~BUN/root/chunk-wt8tyqt4.js";
import { tTn } from "B:/~BUN/root/chunk-t1tr39xg.js";
import { uD } from "B:/~BUN/root/chunk-dcmvdxnm.js";
import { spawn as F } from "child_process";
import { constants as z } from "fs";
import { access as Q, mkdtemp as Z, open as ee, readdir as te, realpath as ne, stat as H } from "fs/promises";
import { homedir as re, tmpdir as oe } from "os";
import { dirname as ae, join as W } from "path";
var se = 1e4,
  B = 250,
  Y8n = 120000,
  ie = 1000,
  le = 600000,
  ce = 1e4,
  X = /^(.+)\/Caskroom\/[^/]+\/[^/]+\/claude$/,
  y = "/node_modules/@anthropic-ai/",
  de = 60000;
async function UUo(n) {
  try {
    let e = await H(n);
    if (!e.isFile() || e.size >= tTn) return "present";
    return Date.now() - Math.max(e.mtimeMs, e.ctimeMs) < de ? "fresh_stub" : "stale_stub";
  } catch (error) {
    return k(error) === "ENOENT" ? "missing" : "present";
  }
}
var ue = new Set(["ENOENT", "EACCES", "ENOEXEC", "EFTYPE", "ETXTBSY", "EBUSY", "EUNKNOWN", "EPERM"]);
async function agn(n, e, {
  withoutOAuthTokenEnv = !1
} = {}) {
  let o = Mp();
  if (o) return m("agent_launcher", "invalid_config"), {
    err: new R(o, "CLAUDE_CODE_PROCESS_WRAPPER is misconfigured")
  };
  if (!(await pU())) return m("agent_launcher", "launcher_not_runnable"), {
    err: new R(`${CA}: launcher \`${am()[0]}\` was deleted or is not executable \u2014 restore it (or fix the setting); background sessions are not started unwrapped`, "CLAUDE_CODE_PROCESS_WRAPPER launcher is not runnable")
  };
  let {
      wrapper: wrapper,
      invocation: invocation
    } = OR(() => ({
      wrapper: am(),
      invocation: zc()
    })),
    {
      cmd: cmd,
      prefixArgs: prefixArgs,
      target: target
    } = invocation,
    g = [cmd, ...prefixArgs, ...n],
    E = Se({
      dropShellOAuthToken: withoutOAuthTokenEnv || (await ge(e))
    });
  if (x() === "windows") {
    if (nAr().platformIgnored) c("agent_launcher", "platform_unsupported");
    let w = await Y(g, E);
    if (w.ok) return {
      err: null
    };
    t(`daemon: WMI spawn failed (${w.reason}); falling back to direct spawn \u2014 daemon will not survive SSH/terminal close`, {
      level: "warn"
    }), l("tengu_bg_daemon_wmi_fallback", {
      timeout: w.reason === "timeout",
      enoent: w.reason === "enoent",
      no_powershell: w.reason === "no-powershell",
      rc: w.rc
    });
  }
  let _ = x() === "macos" ? await fe() : [],
    S = await Z(W(oe(), "cc-daemon-")).catch(() => null),
    stderrPath = S ? W(S, "stderr.log") : void 0,
    h = stderrPath ? await ee(stderrPath, "w").catch(() => null) : null;
  try {
    if (wrapper.length > 0) return {
      ...(await _e(n, E, _, h)),
      stderrPath: stderrPath
    };
    let w = await P(await N(_, g), E, h?.fd),
      {
        err: err
      } = w,
      C = k(err),
      gaveUpOnNpmInstallInProgress = !1,
      reinstallWaitedMs;
    if (C !== void 0 && ue.has(C) && lgn(target)) {
      let f = await X8n(target);
      if (gaveUpOnNpmInstallInProgress = !f.recovered && f.installInProgressAtEnd, reinstallWaitedMs = f.waitedMs, f.recovered) {
        if (x() === "windows") w = (await Y(g, E)).ok ? {
          err: null
        } : await P(g, E, h?.fd);else w = await P(await N(_, g), E, h?.fd);
        C = k(w.err);
      }
      if (l("tengu_bg_daemon_spawn_reinstall_wait", {
        waited_ms: f.waitedMs,
        recovered: f.recovered,
        respawn_ok: f.recovered && w.err === null,
        extended: f.extended,
        install_in_progress: f.installInProgressAtEnd,
        errno: tr(err) ?? b("unknown"),
        ...(f.recovered && w.err !== null && {
          respawn_errno: tr(w.err) ?? b("unknown")
        })
      }), f.recovered && w.err === null) return t(`daemon: ${target} was being reinstalled (exec ${k(err)}); started it after ${f.waitedMs}ms`), {
        ...w,
        stderrPath: stderrPath,
        recoveredAfterReinstallWait: !0,
        reinstallWaitedMs: reinstallWaitedMs
      };
      t(f.recovered ? `daemon: ${target} came back after ${f.waitedMs}ms of an npm reinstall but starting it failed again (exec ${k(w.err)})` : `daemon: ${target} not runnable after waiting ${f.waitedMs}ms for an npm reinstall (exec ${k(err)}; install ${f.installInProgressAtEnd ? "still in progress" : f.extended ? "ended" : "not seen"})`);
    }
    let O = {
      gaveUpOnNpmInstallInProgress: gaveUpOnNpmInstallInProgress,
      reinstallWaitedMs: reinstallWaitedMs
    };
    if (C !== "ENOENT" && C !== "EACCES") return {
      ...w,
      stderrPath: stderrPath,
      ...O
    };
    let D = new Set([target]),
      T = OR(() => zc({
        pinToCurrentBinary: !0
      }));
    if (!D.has(T.target)) {
      D.add(T.target), l("tengu_bg_daemon_spawn_execpath_fallback", {
        errno_enoent: C === "ENOENT",
        errno_eacces: C === "EACCES"
      });
      let f = await P(await N(_, [T.cmd, ...T.prefixArgs, ...n]), E, h?.fd);
      if (k(f.err) !== "ENOENT") return {
        ...f,
        stderrPath: stderrPath,
        ...O
      };
    }
    let {
      link: link,
      waitedMs: M
    } = await q(T.target);
    if (M > 0) O.reinstallWaitedMs = (reinstallWaitedMs ?? 0) + M;
    if (link !== null && !D.has(link)) {
      D.add(link), l("tengu_bg_daemon_spawn_homebrew_fallback", {
        errno_enoent: C === "ENOENT",
        errno_eacces: C === "EACCES",
        waited_ms: M
      });
      let f = await P(await N(_, [link, ...n]), E, h?.fd);
      if (f.err === null) return {
        ...f,
        stderrPath: stderrPath,
        ...O,
        recoveredAfterReinstallWait: M > 0
      };
    }
    let V = I0e();
    if (!D.has(V)) {
      D.add(V), l("tengu_bg_daemon_spawn_launcher_fallback", {
        errno_enoent: C === "ENOENT",
        errno_eacces: C === "EACCES"
      });
      let f = await P(await N(_, [V, ...n]), E, h?.fd);
      if (k(f.err) !== "ENOENT") return {
        ...f,
        stderrPath: stderrPath,
        ...O
      };
    }
    let U = await _Qt();
    if (l("tengu_bg_daemon_spawn_versions_fallback", {
      found: U !== null
    }), U !== null && !D.has(U)) return {
      ...(await P(await N(_, [U, ...n]), E, h?.fd)),
      stderrPath: stderrPath,
      ...O
    };
    return {
      err: err,
      stderrPath: stderrPath,
      ...O
    };
  } finally {
    await h?.close().catch(() => {});
  }
}
async function _e(n, e, a, o) {
  let i = async S => {
      let A = OR(() => g1(S));
      return P(await N(a, [A.cmd, ...A.prefixArgs, ...n]), e, o?.fd);
    },
    u = r_e();
  if (await sOe(u.cmd, {
    rejectNpmStub: !0
  })) return i(u);
  let gaveUpOnNpmInstallInProgress_2 = !1,
    reinstallWaitedMs_2;
  if (lgn(u.cmd)) {
    let S = await X8n(u.cmd);
    if (reinstallWaitedMs_2 = S.waitedMs, l("tengu_bg_daemon_spawn_reinstall_wait", {
      waited_ms: S.waitedMs,
      recovered: S.recovered,
      respawn_ok: S.recovered,
      extended: S.extended,
      install_in_progress: S.installInProgressAtEnd,
      probe: !0
    }), S.recovered) return {
      ...(await i(u)),
      recoveredAfterReinstallWait: !0,
      reinstallWaitedMs: reinstallWaitedMs_2
    };
    gaveUpOnNpmInstallInProgress_2 = S.installInProgressAtEnd;
  }
  let p = r_e({
    pinToCurrentBinary: !0
  });
  if (p.cmd !== u.cmd && (await sOe(p.cmd))) return l("tengu_bg_daemon_spawn_execpath_fallback", {
    errno_enoent: !1,
    errno_eacces: !1,
    probe: !0
  }), {
    ...(await i(p)),
    reinstallWaitedMs: reinstallWaitedMs_2
  };
  let {
    link: g,
    waitedMs: E
  } = await q(p.cmd);
  if (E > 0) reinstallWaitedMs_2 = (reinstallWaitedMs_2 ?? 0) + E;
  if (g !== null && (await sOe(g))) return l("tengu_bg_daemon_spawn_homebrew_fallback", {
    errno_enoent: !1,
    errno_eacces: !1,
    probe: !0,
    waited_ms: E
  }), {
    ...(await i({
      cmd: g,
      prefixArgs: [],
      target: g
    })),
    recoveredAfterReinstallWait: E > 0,
    reinstallWaitedMs: reinstallWaitedMs_2
  };
  let _ = await _Qt();
  if (l("tengu_bg_daemon_spawn_versions_fallback", {
    found: _ !== null,
    probe: !0
  }), _ !== null && _ !== p.cmd && (await sOe(_))) return {
    ...(await i({
      cmd: _,
      prefixArgs: [],
      target: _
    })),
    reinstallWaitedMs: reinstallWaitedMs_2
  };
  return m("agent_launcher", "no_runnable_target"), {
    err: new R(`no runnable Claude Code binary was found to run through the configured launcher \u2014 last tried: ${_ ?? p.cmd}`, "no runnable claude binary for the configured launcher"),
    gaveUpOnNpmInstallInProgress: gaveUpOnNpmInstallInProgress_2,
    reinstallWaitedMs: reinstallWaitedMs_2
  };
}
async function sOe(n, e = {}) {
  try {
    let a = await H(n);
    if (!a.isFile()) return !1;
    if (e.rejectNpmStub && a.size < tTn) return !1;
    return await Q(n, z.X_OK), !0;
  } catch {
    return !1;
  }
}
function lgn(n) {
  return n.replace(/\\/g, "/").includes(y);
}
async function Bsa(n) {
  let e = X.exec(n)?.[1];
  if (e === void 0) return null;
  let a = W(e, "bin", "claude"),
    o = await ne(a).catch(() => null);
  return o !== null && o !== n && o.startsWith(`${e}/Caskroom/`) ? a : null;
}
async function q(n) {
  for (let e = 0;; e += B) {
    let a = X.test(n) && (await H(`${ae(n)}.upgrading`).then(() => !0, () => !1)),
      link_2 = await Bsa(n);
    if ((a || e > 0) && link_2 !== null && !(await sOe(link_2))) link_2 = null;
    if (link_2 !== null || !a || e >= ce) {
      if (link_2 === null && e > 0) l("tengu_bg_daemon_spawn_homebrew_wait_gave_up", {
        waited_ms: e
      });
      return {
        link: link_2,
        waitedMs: e
      };
    }
    await J(B);
  }
}
async function j(n) {
  let e = n.replace(/\\/g, "/").indexOf(y);
  if (e === -1) return !1;
  let a = n.slice(0, e + y.length - 1),
    o = n.slice(e + y.length).split(/[\\/]/)[0];
  if (!o) return !1;
  let i = `.${o}-`,
    u;
  try {
    u = await te(a, {
      withFileTypes: !0
    });
  } catch {
    return !1;
  }
  for (let r of u) {
    if (!r.isDirectory() || !r.name.startsWith(i)) continue;
    try {
      let s = await H(W(a, r.name));
      if (Date.now() - Math.max(s.ctimeMs, s.mtimeMs) < le) return !0;
    } catch {}
  }
  return !1;
}
async function X8n(n) {
  let e = Date.now(),
    a = e + se;
  while (Date.now() < a) if (await J(B), await sOe(n, {
    rejectNpmStub: !0
  })) return {
    recovered: !0,
    waitedMs: Date.now() - e,
    extended: !1,
    installInProgressAtEnd: !1
  };
  let installInProgressAtEnd = await j(n);
  if (!installInProgressAtEnd) return {
    recovered: !1,
    waitedMs: Date.now() - e,
    extended: !1,
    installInProgressAtEnd: !1
  };
  let i = e + Y8n;
  while (Date.now() < i) {
    if (await J(ie), await sOe(n, {
      rejectNpmStub: !0
    })) return {
      recovered: !0,
      waitedMs: Date.now() - e,
      extended: !0,
      installInProgressAtEnd: installInProgressAtEnd
    };
    if (!installInProgressAtEnd) break;
    installInProgressAtEnd = await j(n);
  }
  return {
    recovered: !1,
    waitedMs: Date.now() - e,
    extended: !0,
    installInProgressAtEnd: installInProgressAtEnd
  };
}
async function P(n, e, a) {
  let o;
  try {
    o = re();
  } catch {
    o = void 0;
  }
  let i = await K(n, e, a, o);
  if (o !== void 0 && i.err) return K(n, e, a, void 0);
  return i;
}
async function K(n, env, a, cwd) {
  let err_2 = null,
    child;
  try {
    let r = F(n[0], n.slice(1), {
      detached: !0,
      stdio: ["ignore", "ignore", a ?? "ignore"],
      windowsHide: !0,
      env: env,
      ...(cwd !== void 0 && {
        cwd: cwd
      })
    });
    l0(r.pid), r.once("error", s => {
      err_2 = s;
    }), child = {
      pid: r.pid,
      exited: new Promise(s => {
        r.once("exit", (code, signal) => s({
          code: code,
          signal: signal
        }));
      })
    }, r.unref();
  } catch (error) {
    err_2 = error;
  }
  return await new Promise(r => setImmediate(r)), err_2 ? {
    err: err_2
  } : {
    err: null,
    child: child
  };
}
async function fe() {
  let n = process.getuid?.();
  if (n === void 0) return [];
  let has_gui = await new Promise(a => {
    let o = !1,
      i,
      u = s => {
        if (o) return;
        o = !0, clearTimeout(r), a(s);
      },
      r = setTimeout(() => {
        i.kill(), u(!1);
      }, 5000);
    r.unref();
    try {
      i = F("/bin/launchctl", ["asuser", String(n), "/usr/bin/true"], {
        stdio: "ignore",
        windowsHide: !0
      });
    } catch {
      u(!1);
      return;
    }
    i.once("error", () => u(!1)), i.once("exit", s => u(s === 0));
  });
  return l("tengu_bg_daemon_macos_aqua_wrap", {
    has_gui: has_gui
  }), has_gui ? ["/bin/launchctl", "asuser", String(n)] : [];
}
async function N(n, e) {
  if (n.length === 0) return e;
  let a = e[0];
  if (!(await sOe(a, {
    rejectNpmStub: lgn(a)
  }))) return e;
  return [...n, ...e];
}
async function Y(n, env_2) {
  let a;
  try {
    a = me(pe(n));
  } catch (error) {
    return {
      ok: !1,
      reason: d(error)
    };
  }
  let o = await uD();
  if (!o) return {
    ok: !1,
    reason: "no-powershell"
  };
  let i = Buffer.from(a, "utf16le").toString("base64");
  return new Promise(u => {
    let r = !1,
      s,
      p = _ => {
        if (r) return;
        r = !0, clearTimeout(E), u(_);
      },
      g = _ => p({
        ok: !1,
        reason: k(_) === "ENOENT" ? "enoent" : d(_)
      }),
      E = setTimeout(() => {
        s.kill(), p({
          ok: !1,
          reason: "timeout"
        });
      }, 5000);
    E.unref();
    try {
      s = F(o, ["-NoProfile", "-NonInteractive", "-EncodedCommand", i], {
        stdio: "ignore",
        windowsHide: !0,
        env: env_2
      });
    } catch (error) {
      g(error);
      return;
    }
    s.once("error", g), s.once("exit", _ => {
      if (_ === 0) p({
        ok: !0
      });else p({
        ok: !1,
        reason: `Win32_Process.Create rc=${_}`,
        rc: _ ?? void 0
      });
    });
  });
}
function me(n) {
  return ['$ErrorActionPreference = "Stop"', '$e = [string[]](Get-ChildItem Env: | ForEach-Object { "$($_.Name)=$($_.Value)" })', "$s = New-CimInstance -ClassName Win32_ProcessStartup -ClientOnly -Property @{ EnvironmentVariables = $e; ShowWindow = [uint16]0; CreateFlags = [uint32]8 }", `$r = Invoke-CimMethod -ClassName Win32_Process -MethodName Create -Arguments @{ CommandLine = ${we(n)}; CurrentDirectory = $env:USERPROFILE; ProcessStartupInformation = $s }`, "exit $r.ReturnValue"].join(`
`);
}
function pe(n) {
  return n.map(Ee).join(" ");
}
function Ee(n) {
  if (n.length > 0 && !/[\s"]/.test(n)) return n;
  let e = '"',
    a = 0;
  while (a < n.length) {
    let o = 0;
    while (n[a] === "\\") o++, a++;
    if (a === n.length) e += "\\".repeat(o * 2);else if (n[a] === '"') e += "\\".repeat(o * 2 + 1) + '"', a++;else e += "\\".repeat(o) + n[a], a++;
  }
  return e + '"';
}
function we(n) {
  if (/[\u2018\u2019\u201A\u201B]/.test(n)) throw Error("unsupported Unicode single-quote in command line");
  return `'${n.replaceAll("'", "''")}'`;
}
async function ge(n) {
  let e = OR(() => process.env.CLAUDE_CODE_OAUTH_TOKEN);
  if (x() === "macos" || !e) return !1;
  return !!(await Kn().readAsync(n))?.claudeAiOauth?.refreshToken;
}
function Se(n) {
  return OR(() => Ae(n));
}
function Ae(n) {
  let e = Yht();
  e.INVOCATION_ID = "";
  let a = process.env[CA];
  if (a) e[CA] = a;else delete e[CA];
  let o = new Set(["CLAUDE_CODE_OAUTH_TOKEN", qie(e), qnt() ? qie({
    CLAUDE_CODE_HOST_AUTH_ENV_VAR: BIt()
  }) : void 0].flatMap(item => item === void 0 ? [] : [item.toUpperCase()]));
  for (let r of Object.keys(e)) {
    if (!o.has(r.toUpperCase())) continue;
    let s = process.env[r];
    if (s === void 0) delete e[r];else if (!k3(r, s)) e[r] = s;
  }
  delete e.CLAUDECODE, delete e.CLAUDE_CODE_SESSION_ID, delete e.CLAUDE_CODE_CHILD_SESSION, delete e.CLAUDE_CODE_SESSION_ATTENDED, delete e.CLAUDE_CODE_CHROME_MCP_ORG_DENIED, delete e.CLAUDE_CODE_EVAL_INTERVIEW_SESSION, delete e.CLAUDE_CODE_BRIDGE_SESSION_ID, delete e.CLAUDE_CODE_HOST_WORKTREE, delete e.CLAUDE_CODE_HOST_WORKTREE_FENCE, wJs(e);
  for (let r of Object.keys(e)) {
    let s = r.toUpperCase();
    if (s === "CLAUDE_CODE_PLUGIN_DIRS" || s === "CLAUDE_CODE_ATTRIBUTION_PROJECT" || s === "CLAUDE_CODE_SKIP_PLUGIN_LOCAL_MCP_SERVERS" || s === "CLAUDE_CODE_SKIP_PLUGIN_MCP_BUNDLES") delete e[r];
  }
  hle(e), N2t(e), delete e.CLAUDE_BG_SESSION_PERMISSION_RULES, delete e.CLAUDE_BG_MEMORY_TOGGLED_OFF, delete e.CLAUDE_BG_AUTO_MEMORY_OFF, delete e.CLAUDE_BG_GATEWAY_WITHHELD, Ane(e);
  let i = new Set(["CLAUDE_BG_AUTH_SNAPSHOT_PATH", ...Ate].map(item => item.toUpperCase()));
  for (let r of Object.keys(e)) if (i.has(r.toUpperCase())) delete e[r];
  let u = qie(e);
  if (Pe(e.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)) {
    for (let r of [...FO, ...zV, ...Zz]) delete e[r];
    if (pln(e), delete e.ANTHROPIC_CUSTOM_HEADERS, u) delete e[u];
    delete e.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST, delete e.CLAUDE_CODE_HOST_AUTH_ENV_VAR, delete e.CLAUDE_CODE_HOST_GATEWAY_LINEAGE;
  }
  if (n.dropShellOAuthToken || HRe()) {
    for (let r of Object.keys(e)) if (r.toUpperCase() === "CLAUDE_CODE_OAUTH_TOKEN") delete e[r];
  }
  return e;
}
export { Y8n, UUo, agn, sOe, lgn, Bsa, X8n };