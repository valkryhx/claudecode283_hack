// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Vy, av, DM, qIe, zi, d2, pW, Ce } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { j, K, nf, we } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { W } from "B:/~BUN/root/chunk-hg8ngszx.js";
import { b, c, xn } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { GDe, Ye, d, k, Fr, Tg, G, hV, Wt, o_, fm } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Y } from "B:/~BUN/root/chunk-89mss1tj.js";
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { Pe } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { Hp, a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { _, se, mL, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { Ir } from "B:/~BUN/root/chunk-xf0m410v.js";
import { At, l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { ct } from "B:/~BUN/root/chunk-6ft8yhc8.js";
import { xA, ns, AYs } from "B:/~BUN/root/chunk-rvc0n7zm.js";
import { Be } from "B:/~BUN/root/chunk-d9rmnpx3.js";
import { me, ut } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { sl, bn, kJ, _h } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { v3e, iUe, Pwe } from "B:/~BUN/root/chunk-57vwkt3t.js";
import { UBr, yGe, tjt } from "B:/~BUN/root/chunk-qp2jnaqy.js";
import { un as hard } from "B:/~BUN/root/chunk-z1p6g436.js";
import { Iq, Yn, Ns } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { w8t, v8t } from "B:/~BUN/root/chunk-kqjzj7vw.js";
import { sK } from "B:/~BUN/root/chunk-nsa84wqe.js";
import { ve } from "B:/~BUN/root/chunk-ef0msk7r.js";
var C = ve(_h(), 1);
import { randomBytes as ht } from "crypto";
import { constants as Ue } from "fs";
import { access as Ne, copyFile as Fe, readdir as U, rename as Ae, rm as _t, stat as B, unlink as V, writeFile as Me } from "fs/promises";
import { homedir as N } from "os";
import { basename as q, dirname as Z, join as x } from "path";
function ze(e) {
  return v3e(e) ? e.over.promise : Promise.resolve();
}
var de = 2000;
var L = () => Math.max(de - (Date.now() - nf()), 0);
var pe = () => L() > 0 || iUe();
var fe = 1000;
var ge = () => iUe() ? Math.max(L(), fe) : L();
async function he() {
  while (pe()) await Y(ge());
}
async function _e(e) {
  if (await he(), bn()) return;
  e.say(), await e.shutDown().catch(n => t(`refusal after the flag fetch hold failed (${d(n)})`, {
    level: "error"
  })), e.hard();
}
function nt(e, r, n) {
  return e.hasHeld && !we() ? void _e(n) : r();
}
var ot = e => e;
var xe = 1;
async function Vfr(e, r) {
  let n;
  for (let o = 1; o <= r.attempts; o++) try {
    return await e(AbortSignal.timeout(r.timeoutMs));
  } catch (error) {
    if (n = error, o >= r.attempts) break;
    r.onRetry?.(o, error);
    let u = 500 * 3 ** (o - 1);
    await Y(u * (0.75 + Math.random() * 0.5));
  }
  throw n;
}
import { existsSync as dt } from "fs";
import { open as pt, readFile as ft, stat as mt } from "fs/promises";
import { homedir as ke } from "os";
import { join as H } from "path";
import { access as it, chmod as at, writeFile as st } from "fs/promises";
import { join as D } from "path";
function J() {
  return D(Pe(), "local");
}
function Re() {
  return D(J(), "claude");
}
function Ocs() {
  return (process.argv[1] || "").includes("/.claude/local/node_modules/");
}
async function Se(e, r, mode) {
  try {
    return await st(e, r, {
      encoding: "utf8",
      flag: "wx",
      mode: mode
    }), !0;
  } catch (error) {
    if (k(error) === "EEXIST") return !1;
    throw error;
  }
}
async function lt() {
  try {
    let e = J();
    await se().mkdir(e), await Se(D(e, "package.json"), _({
      name: "claude-local",
      version: "0.0.1",
      private: !0
    }, null, 2));
    let r = D(e, "claude");
    if (await Se(r, `#!/bin/sh
exec "${e}/node_modules/.bin/claude" "$@"`, 493)) await at(r, 493);
    return !0;
  } catch (error) {
    return t(`Failed to set up local package environment: ${error}`, {
      level: "error"
    }), !1;
  }
}
async function Cit(e, r, n) {
  try {
    if (!(await lt())) return m("update_apply", "update_apply_env_setup_failed"), "install_failed";
    let o = r ? r : e === "stable" ? "stable" : "latest",
      s = await ct("npm", ["install", `${{
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.303",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-18T20:20:57Z",
        GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
        HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "win32"
      }.PACKAGE_URL}@${o}`], {
        cwd: J(),
        maxBuffer: 1e6,
        useToolMemoryCgroup: !1
      });
    if (s.code !== 0) return m("update_apply", "update_apply_local_npm_failed"), t(`Failed to install Claude CLI package: ${s.stderr}`, {
      level: "error"
    }), s.code === 190 ? "in_progress" : "install_failed";
    return await Ce(u => ({
      ...u,
      installMethod: "local"
    }), n), g("update_apply"), "success";
  } catch (error) {
    return m("update_apply", "update_apply_local_exception"), l(error), "install_failed";
  }
}
async function JFe() {
  try {
    return await it(D(J(), "node_modules", ".bin", "claude")), !0;
  } catch {
    return !1;
  }
}
function Rit() {
  let e = a.SHELL || "";
  if (e.includes("zsh")) return "zsh";
  if (e.includes("bash")) return "bash";
  if (e.includes("fish")) return "fish";
  return "unknown";
}
var $e = /^\s*alias\s+claude\s*=/;
function Z4e(e) {
  let r = e?.homedir ?? ke(),
    n = e?.env ?? process.env,
    o = e?.platform ?? "win32",
    s = e?.fileExists ?? dt,
    u = n.ZDOTDIR || r,
    R = o === "darwin" ? [".bash_profile", ".bash_login", ".profile"].find(item => s(H(r, item))) ?? ".bash_profile" : ".bashrc";
  return {
    zsh: H(u, ".zshrc"),
    bash: H(r, R),
    ...(o === "darwin" && {
      bashrc: H(r, ".bashrc")
    }),
    fish: H(r, ".config/fish/config.fish")
  };
}
function qfr(e) {
  let hadAlias = !1;
  return {
    filtered: e.filter(item => {
      if ($e.test(item)) {
        let s = item.match(/alias\s+claude\s*=\s*["']([^"']+)["']/);
        if (!s) s = item.match(/alias\s+claude\s*=\s*([^#\n]+)/);
        if (s && s[1]) {
          if (s[1].trim() === Re()) return hadAlias = !0, !1;
        }
      }
      return !0;
    }),
    hadAlias: hadAlias
  };
}
async function qMn(e) {
  try {
    return (await ft(e, {
      encoding: "utf8"
    })).split(`
`);
  } catch (error) {
    if (Wt(error)) return null;
    if (hV(error)) return t(`Skipping ${e}: path is a directory`, {
      level: "warn"
    }), null;
    throw error;
  }
}
async function Kfr(e, r) {
  let n = await pt(e, "w");
  try {
    await n.writeFile(r.join(`
`), {
      encoding: "utf8"
    }), await n.datasync();
  } finally {
    await n.close();
  }
}
var gt = new Set(["EBUSY", "EOPNOTSUPP", "ENOTSUP", "ENOMEM", "ERR_FS_FILE_TOO_LARGE", "ENOTCONN", "EHOSTDOWN", "EHOSTUNREACH", "ETIMEDOUT"]);
async function lio(e) {
  let r = Z4e(e);
  for (let n of Object.values(r)) {
    let o = await qMn(n).catch(s => {
      if (fm(s) || o_(s) || gt.has(k(s) ?? "")) return t(`Skipping unreadable shell config ${n} during alias scan: ${d(s)}`, {
        level: "warn"
      }), null;
      throw s;
    });
    if (!o) continue;
    for (let s of o) if ($e.test(s)) {
      let u = s.match(/alias\s+claude=["']?([^"'\s]+)/);
      if (u && u[1]) return u[1];
    }
  }
  return null;
}
async function Ics(e) {
  let r = await lio(e);
  if (!r) return null;
  let n = e?.homedir ?? ke(),
    o = r.startsWith("~") ? r.replace("~", n) : r;
  try {
    let s = await mt(o);
    if (s.isFile() || s.isSymbolicLink()) return r;
  } catch {}
  return null;
}
var wt = "https://downloads.claude.ai/claude-code-releases";
class Le extends GDe {}
function b8t(e) {
  switch (e) {
    case "windows_running_exe_lock":
      return "update_apply_exe_locked";
    case "native_binary_missing":
      return "update_apply_native_binary_missing";
    case void 0:
      return null;
  }
}
async function Mcs() {
  try {
    let e = Pwe();
    await ze(e);
    let r = await pW("tengu_version_config", {
      minVersion: "0.0.0"
    });
    if (r.minVersion && DM({
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.303",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-18T20:20:57Z",
      GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION, r.minVersion)) {
      let n = De({
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.303",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-18T20:20:57Z",
        GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
        HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "win32"
      }.VERSION, r.minVersion);
      nt(e, () => yt(r.minVersion), ot({
        say: () => {
          kJ(), Iq(n);
        },
        shutDown: () => Yn(xe),
        hard: hard
      }));
    }
  } catch (error) {
    l(error);
  }
}
function yt(e) {
  let message = De({
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.303",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-18T20:20:57Z",
    GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
    HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "win32"
  }.VERSION, e);
  if (console.error(`
${message}
`), yGe() && UBr()) try {
    Ir(_(tjt({
      sessionId: K(),
      message: message,
      reason: "cli_version_too_old",
      resultIndex: null
    })) + `
`);
  } catch (error) {
    t(`[assertMinVersion] startup failure result not written: ${d(error)}`, {
      level: "error"
    });
  }
  Ns(xe);
}
function De(e, r) {
  return `It looks like your version of Claude Code (${e}) needs an update.
A newer version (${r} or higher) is required to continue.

To update, please run:
    claude update

This will ensure you have access to the latest features and improvements.`;
}
var bt = 300000;
class He {
  lastAutoUpdateCheckAt = 0;
  updateRestoreFailure = null;
  mintedPreservedInodes = new Set();
}
var vt = new z(() => new He());
function ne() {
  return vt.of(j().host);
}
var xt = 1e4;
function dio() {
  return Math.max(0, xt - process.uptime() * 1000);
}
function Ait() {
  let e = ne(),
    r = Date.now();
  if (r - e.lastAutoUpdateCheckAt < bt) return t(`auto-update check throttled (last check ${Math.round((r - e.lastAutoUpdateCheckAt) / 1000)}s ago)`), !0;
  return e.lastAutoUpdateCheckAt = r, !1;
}
async function KMn() {
  return (await QFe()).maxVersion;
}
async function QFe() {
  let e = await Ve(),
    r = !1,
    n = e.external || void 0,
    maxVersion = n ? C.parse(n)?.version ?? void 0 : void 0;
  if (n && !maxVersion) t(`tengu_max_version_config has invalid version '${n}' \u2014 ignoring`, {
    level: "error"
  }), i("tengu_max_version_config_invalid", {
    raw_value: zi(n)
  });
  return {
    maxVersion: maxVersion,
    forceDowngradeEnabled: e.external_force_downgrade === !0
  };
}
function eYe(e, r, n) {
  let o = n === "native_update" ? "Native installer" : "AutoUpdater",
    s = C.parse(e);
  if (s && s.compare(r) > 0) return t(`${o}: force-downgrade active \u2014 moving from ${e} to ${r}`), !0;
  return t(`${o}: force-downgrade flag set but current ${e} is not above ${r} \u2014 taking normal upgrade path`), !1;
}
async function Dcs() {
  return (await Ve()).external_message || void 0;
}
async function Ve() {
  try {
    return await pW("tengu_max_version_config", {});
  } catch (error) {
    return l(error), {};
  }
}
function Yfr(e) {
  if (!C.parse(e)) return t("update target is not a valid semver version \u2014 skip checks constrain nothing", {
    level: "error"
  }), t(`update target (first 300 chars, JSON-encoded): ${mL(JSON.stringify(e.slice(0, 300)))}`), null;
  let r = ut()?.minimumVersion;
  if (r) {
    let o = C.parse(r)?.version;
    if (!o) t(`minimumVersion is not a valid semver version \u2014 ignoring. Value (first 300 chars, JSON-encoded): ${mL(JSON.stringify(r.slice(0, 300)))}`, {
      level: "error"
    });else if (!av(e, o)) return `below your minimumVersion setting (${r})`;
  }
  let n = me("policySettings")?.requiredMaximumVersion;
  if (n) {
    let o = C.parse(n)?.version;
    if (!o) t(`requiredMaximumVersion is not a valid semver version \u2014 ignoring. Value (first 300 chars, JSON-encoded): ${mL(JSON.stringify(n.slice(0, 300)))}`, {
      level: "error"
    });else if (!qIe(e, o)) return `above your organization's requiredMaximumVersion (${n})`;
  }
  return null;
}
function tYe(e) {
  let r = Yfr(e);
  if (r) t(`Skipping update to ${e}: ${r}`);
  return r !== null;
}
var X = 300000;
function We() {
  return x(Pe(), ".update.lock");
}
function ee() {
  return Be.state("update-lock");
}
async function Et(e) {
  let r = ee(),
    n = await e.statMeta(r);
  if (n.ok) {
    if (Date.now() - n.value.mtimeMs < X) return !1;
    let u = await e.statMeta(r);
    if (u.ok) {
      if (Date.now() - u.value.mtimeMs < X) return !1;
      let R = await e.delete(r);
      if (!R.ok) return t(`AutoUpdater: failed to remove stale update lock: ${R.error.code}`, {
        level: "error"
      }), !1;
    } else if (u.error.code !== "NotFound") return t(`AutoUpdater: failed to re-stat stale update lock: ${u.error.code}`, {
      level: "error"
    }), !1;
  } else if (n.error.code !== "NotFound") return t(`AutoUpdater: failed to stat update lock: ${n.error.code}`, {
    level: "error"
  }), !1;
  let o = await e.write(r, `${process.pid}`, {
    precondition: {
      type: "ifAbsent"
    },
    mode: 438 & ~process.umask()
  });
  if (o.ok) return !0;
  if (o.error.code === "AlreadyExists") return !1;
  return t(`AutoUpdater: failed to create update lock: ${o.error.code}`, {
    level: "error"
  }), !1;
}
async function Pt(e) {
  if (W() && e) return Et(e);
  let r = se(),
    n = We();
  try {
    let o = await r.stat(n);
    if (Date.now() - o.mtimeMs < X) return !1;
    try {
      let u = await r.stat(n);
      if (Date.now() - u.mtimeMs < X) return !1;
      await r.unlink(n);
    } catch (error) {
      if (!G(error)) return l(error), !1;
    }
  } catch (error) {
    if (!G(error)) return l(error), !1;
  }
  try {
    return await Me(n, `${process.pid}`, {
      encoding: "utf8",
      flag: "wx"
    }), !0;
  } catch (error) {
    let s = k(error);
    if (s === "EEXIST") return !1;
    if (s === "ENOENT") try {
      return await r.mkdir(Pe()), await Me(n, `${process.pid}`, {
        encoding: "utf8",
        flag: "wx"
      }), !0;
    } catch (error) {
      if (k(error) === "EEXIST") return !1;
      return t(`Failed to create config dir or update lock file: ${error}`, {
        level: "error"
      }), !1;
    }
    return t(`AutoUpdater: failed to create update lock file ${n}: ${error}`, {
      level: "error"
    }), !1;
  }
}
async function St(e) {
  if (W() && e) {
    let o = await e.read([ee()]);
    if (!o.ok) {
      t(`AutoUpdater: failed to release update lock: ${o.error.code}`, {
        level: "error"
      });
      return;
    }
    let s = o.value.items[0];
    if (!s.found) return;
    if (Buffer.from(s.value).toString("utf8") === `${process.pid}`) {
      let u = await e.delete(ee());
      if (!u.ok) t(`AutoUpdater: failed to release update lock: ${u.error.code}`, {
        level: "error"
      });
    }
    return;
  }
  let r = se(),
    n = We();
  try {
    if ((await r.readFile(n, {
      encoding: "utf8"
    })) === `${process.pid}`) await r.unlink(n);
  } catch (error) {
    if (G(error)) return;
    t(`AutoUpdater: failed to release update lock file ${n}: ${error}`, {
      level: "error"
    });
  }
}
function oe() {
  let e = process.execPath.replace(/\\/g, "/"),
    r = (a.BUN_INSTALL ?? "").replace(/\\/g, "/").replace(/\/+$/, "");
  if (e.includes("/.bun/install/global/") || r && e.startsWith(r + "/install/global/")) return "bun";
  return a.isRunningWithBun() && !Hp() ? "bun" : "npm";
}
async function Ke() {
  let e = oe() === "bun",
    r = null;
  if (e) r = await ct("bun", ["pm", "bin", "-g"], {
    cwd: N(),
    useToolMemoryCgroup: !1
  });else r = await ct("npm", ["-g", "config", "get", "prefix"], {
    cwd: N(),
    useToolMemoryCgroup: !1
  });
  if (r.code !== 0) return t(`Failed to check ${e ? "bun" : "npm"} permissions (exit ${r.code}): ${r.stderr.trim()}`, {
    level: "error"
  }), null;
  return r.stdout.trim() || null;
}
async function Rt() {
  let e = await Ke();
  if (!e) return null;
  if (oe() === "bun") {
    let imagePath = x(e, "claude");
    return {
      execPaths: [imagePath],
      imagePath: imagePath
    };
  }
  if (I() === "windows") return {
    execPaths: [x(e, "claude.cmd"), x(e, "claude.exe")],
    imagePath: x(e, "node_modules", {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.303",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-18T20:20:57Z",
      GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.PACKAGE_URL, "bin", "claude.exe")
  };
  let imagePath_2 = x(e, "bin", "claude");
  return {
    execPaths: [imagePath_2],
    imagePath: imagePath_2
  };
}
async function Te(e) {
  let r = Date.now(),
    n = await Rt(),
    o = e ? C.parse(e)?.version : void 0,
    s = !1,
    u = !1;
  for (let f of n?.execPaths ?? []) {
    let w = await ct(f, ["--version"], {
        abortSignal: AbortSignal.timeout(45000),
        cwd: N(),
        useToolMemoryCgroup: !1
      }),
      version = C.parse(w.stdout.trim().split(/\s+/)[0])?.version;
    if (w.code === 0 && version != null && (o != null ? version === o : Vy(version, {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.303",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-18T20:20:57Z",
      GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION))) return {
      outcome: "landed",
      version: version,
      durationMs: Date.now() - r
    };
    if (w.code !== 0) s = !0, u ||= `${w.stdout}
${w.stderr}`.includes(v8t);
  }
  return {
    outcome: u || s && n !== null && (await B(n.imagePath).then(f => f.isFile() && f.size < w8t, () => !1)) ? "placeholder_stub" : "inconclusive",
    durationMs: Date.now() - r
  };
}
async function Lcs() {
  try {
    let npmPrefix = await Ke();
    if (!npmPrefix) return {
      hasPermissions: !1,
      npmPrefix: null
    };
    try {
      return await Ne(npmPrefix, Ue.W_OK), {
        hasPermissions: !0,
        npmPrefix: npmPrefix
      };
    } catch {
      return t("Insufficient permissions for global npm install.", {
        level: "error"
      }), {
        hasPermissions: !1,
        npmPrefix: npmPrefix
      };
    }
  } catch (error) {
    return l(error), {
      hasPermissions: !1,
      npmPrefix: null
    };
  }
}
async function xit(e) {
  let r = e === "stable" ? "stable" : "latest",
    n = await ct("npm", ["view", `${{
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.303",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-18T20:20:57Z",
      GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.PACKAGE_URL}@${r}`, "version", "--prefer-online"], {
      abortSignal: AbortSignal.timeout(5000),
      cwd: N(),
      useToolMemoryCgroup: !1
    });
  if (n.code !== 0) {
    let s = n.stdout.trim();
    if (s && C.parse(s)) {
      if (p("update_check", "update_check_npm_view_stderr_warning"), t(`npm view exited ${n.code} but printed a valid version (${s}) \u2014 treating stderr as a warning`), n.stderr) t(`npm stderr: ${n.stderr.trim()}`);
      return s;
    }
    if (m("update_check", "update_check_npm_view_failed"), t(`npm view failed with code ${n.code}`), n.stderr) t(`npm stderr: ${n.stderr.trim()}`);else t("npm stderr: (empty)");
    if (n.stdout) t(`npm stdout (first 300 chars, JSON-encoded): ${mL(JSON.stringify(n.stdout.trim().slice(0, 300)))}`);
    return null;
  }
  let o = n.stdout.trim();
  if (o && !C.parse(o)) return m("update_check", "update_check_npm_view_invalid_stdout"), t("npm view exited 0 but stdout is not a valid semver version \u2014 treating as no result"), t(`npm stdout (first 300 chars, JSON-encoded): ${mL(JSON.stringify(o.slice(0, 300)))}`), null;
  return g("update_check"), o || null;
}
var Oe = 5000,
  attempts = 3;
async function Xfr(e) {
  if (At()) return null;
  let r = 0;
  try {
    let o = (await Vfr(signal => (r++, sK.get(`${wt}/${e}`, {
      timeout: Oe,
      responseType: "text",
      signal: signal
    })), {
      attempts: attempts,
      timeoutMs: Oe,
      onRetry: (s, u) => {
        t(`Failed to fetch ${e} from GCS on attempt ${s}/${attempts}, retrying: ${u}`);
      }
    })).data.trim();
    if (!C.parse(o)) return m("update_check", "update_check_gcs_invalid_response"), t(`GCS ${e} version response is not a valid semver version \u2014 treating as no result`), t(`GCS response body (first 300 chars, JSON-encoded): ${mL(JSON.stringify(o.slice(0, 300)))}`), null;
    if (r > 1) p("update_check", "update_check_gcs_retry");else g("update_check");
    return o;
  } catch (error) {
    return m("update_check", "update_check_gcs_failed"), t(`Failed to fetch ${e} from GCS after ${r} attempt(s): ${error}`), null;
  }
}
async function kt(e) {
  if (At()) return null;
  try {
    let r = await sl.get(`https://formulae.brew.sh/api/cask/${e}.json`, {
        timeout: 5000,
        responseType: "json"
      }),
      n = r.data?.version,
      o = typeof n === "string" ? n.trim() : null;
    if (!o || !C.parse(o)) {
      m("update_check", "update_check_homebrew_invalid_version"), t(`formulae.brew.sh ${e} version is not a valid semver version \u2014 treating as no result`);
      let s = typeof r.data === "string" ? r.data : String(_(r.data));
      return t(`brew response (first 300 chars, JSON-encoded): ${mL(JSON.stringify(s.slice(0, 300)))}`), null;
    }
    return g("update_check"), o;
  } catch (error) {
    return m("update_check", "update_check_homebrew_failed"), t(`Failed to fetch ${e} from formulae.brew.sh: ${error}`), null;
  }
}
async function S8t(e, r) {
  let [n, o] = await Promise.all([kt(e), Xfr(r)]);
  return n ?? o;
}
function nYe() {
  return ne().updateRestoreFailure;
}
async function $t(e) {
  if (!e.updateRestoreFailure) return;
  if (await ie(e.updateRestoreFailure.originalPath)) {
    e.updateRestoreFailure = null;
    return;
  }
  if (e.updateRestoreFailure.preservedPath !== null) e.updateRestoreFailure = {
    originalPath: e.updateRestoreFailure.originalPath,
    preservedPath: await je(e, e.updateRestoreFailure.preservedPath)
  };
}
function ie(e) {
  return Ne(e, Ue.F_OK).then(() => !0, () => !1);
}
function Ge() {
  let e = x(Z(process.execPath), "..", "..");
  return [x(e, ".."), e];
}
async function Je() {
  return (await Promise.all(Ge().map(item => U(item, {
    withFileTypes: !0
  }).then(n => n.filter(item => item.isDirectory() && item.name.startsWith(".")).map(o => x(item, o.name))).catch(() => [])))).flat();
}
async function te(e, r) {
  let n = await B(r, {
    bigint: !0
  }).then(o => o.ino, () => 0n);
  return n !== 0n && e.mintedPreservedInodes.has(n);
}
async function je(e, r) {
  if (await te(e, r)) return r;
  let n = q(r),
    o = (await Je()).flatMap(item => [x(item, n), x(item, "bin", n)]);
  for (let s of o) if (await te(e, s)) return s;
  return null;
}
async function re(e, r) {
  await se().mkdir(Z(r));
  try {
    let o = Z(r),
      s = `${q(r)}.restoring.`;
    for (let u of await U(o)) if (u.startsWith(s)) await V(x(o, u)).catch(() => {});
  } catch {}
  let n = `${r}.restoring.${ht(4).toString("hex")}`;
  try {
    await Fe(e, n);
    try {
      await ns(n, r);
    } catch (error) {
      let s = k(error);
      if (s === void 0 || !xA.has(s)) throw error;
      if (!(await ie(r))) throw error;
      try {
        await Fe(n, r);
      } catch (error) {
        if (AYs.has(k(error) ?? "")) await V(r).catch(() => {});
        throw error;
      }
      await V(n).catch(() => {});
    }
  } catch (error) {
    throw await V(n).catch(() => {}), error;
  }
}
async function Ct(e, r) {
  let n = q(process.execPath).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
    regExp = new RegExp(`^${n}\\.old\\.(\\d+)$`),
    s = (await Promise.all(r.flatMap(item => [item, x(item, "bin")].map(async item => (await U(item).catch(() => [])).map(item => regExp.exec(item)).filter(item => item !== null).map(E => ({
      path: x(item, E[0]),
      ts: Number(E[1])
    })))))).flat(),
    R = (await Promise.all(s.map(async item => (await te(e, item.path)) ? [item] : []))).flat().reduce((acc, item) => acc === null || item.ts > acc.ts ? item : acc, null);
  if (!R) {
    t(`No preserved ${q(process.execPath)}.old.<ts> found in ${r.length} retired dir(s) \u2014 sweep restore skipped`);
    return;
  }
  try {
    await re(R.path, process.execPath), g("update_apply_heal", {
      heal_kind: b("sweep")
    }), t(`Restored missing ${process.execPath} from preserved copy ${R.path} before update attempt`);
  } catch (error) {
    let err_code = Tg(error);
    m("update_apply_heal", "sweep_restore_failed", {
      ...(err_code && {
        err_code: err_code
      }),
      heal_kind: b("sweep")
    }), t(`Failed to restore missing ${process.execPath} from preserved copy ${R.path}: ${error}`);
  }
}
async function Pit(e, r) {
  let n = ne();
  if (!(await Pt(r))) return p("update_apply", "update_apply_lock_contention"), t("Another process is currently installing an update", {
    level: "error"
  }), i("tengu_auto_updater_lock_contention", {
    pid: process.pid,
    currentVersion: zi({
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.303",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-18T20:20:57Z",
      GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION)
  }), {
    status: "in_progress"
  };
  let updateRestoreFailure = n.updateRestoreFailure;
  try {
    await Ft();
    let s = oe();
    if (s === "npm" && a.isNpmFromWindowsPath()) return m("update_apply", "update_apply_wsl_windows_npm"), t("Windows NPM detected in WSL environment", {
      level: "error"
    }), i("tengu_auto_updater_windows_npm_in_wsl", {
      currentVersion: zi({
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.303",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-18T20:20:57Z",
        GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
        HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "win32"
      }.VERSION)
    }), console.error(`
Error: Windows NPM detected in WSL

You're running Claude Code in WSL but using the Windows NPM installation from /mnt/c/.
This configuration is not supported for updates.

To fix this issue:
  1. Install Node.js within your Linux distribution: e.g. sudo apt install nodejs npm
  2. Make sure Linux NPM is in your PATH before the Windows version
  3. Try updating again with 'claude update'
`), {
      status: "install_failed"
    };
    let u = e ? `${{
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.303",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-18T20:20:57Z",
        GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
        HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "win32"
      }.PACKAGE_URL}@${e}` : {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.303",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-18T20:20:57Z",
        GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
        HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "win32"
      }.PACKAGE_URL,
      R = I() === "windows" && Hp() && process.execPath.replace(/\\/g, "/").includes("/node_modules/@anthropic-ai/"),
      f = [];
    if (R) {
      let [, y] = Ge(),
        v = (await Promise.all((await Je()).map(async item => (await Promise.all([U(item).catch(() => []), U(x(item, "bin")).catch(() => [])]).then(([M, A]) => [...M, ...A].some(item => /\.exe\.old\.\d+$/.test(item)))) ? [item] : []))).flat();
      if (v.length > 0) if (await ie(process.execPath)) await Promise.all(v.map(item => _t(item, {
        recursive: !0,
        force: !0
      }).catch(P => t(`retired-dir cleanup failed: ${P}`))));else await Ct(n, v);
      let F = Date.now(),
        T = await B(process.execPath, {
          bigint: !0
        }).then(h => h.ino).catch(() => 0n),
        S = [process.execPath];
      for (let h of await U(y).catch(() => [])) for (let P of ["claude.exe", "cli.exe"]) {
        let M = x(y, h, P);
        if (M === process.execPath) continue;
        let A = await B(M, {
          bigint: !0
        }).then(O => O.ino).catch(() => -1n);
        if (T && A === T) S.push(M);
      }
      for (let h of S) {
        let P = `${h}.old.${F}`;
        try {
          await Ae(h, P);
        } catch {
          continue;
        }
        f.push([h, P]);
        let M = await B(P, {
          bigint: !0
        }).then(A => A.ino, () => 0n);
        if (M !== 0n) n.mintedPreservedInodes.add(M);
      }
    }
    let w = await ct(s, ["install", "-g", u], {
        cwd: N(),
        useToolMemoryCgroup: !1
      }),
      E = 0,
      ae = 0,
      Q = [];
    if (f.length && w.code !== 0) {
      for (let [originalPath, F] of f) try {
        await Ae(F, originalPath);
      } catch (error) {
        try {
          await re(F, originalPath), t(`Restored ${originalPath} by copy after rename failed: ${error}`), await V(F).catch(S => t(`Failed to remove ${F} after copy-restore: ${S}`));
        } catch (S) {
          let preservedPath = await je(n, F),
            P;
          if (preservedPath !== null && preservedPath !== F) try {
            await re(preservedPath, originalPath), ae++, t(`Restored ${originalPath} from retired-dir copy ${preservedPath} after rename (${error}) and copy (${S}) both failed`);
            continue;
          } catch (error) {
            P = error, t(`Failed to restore ${originalPath} from retired-dir copy ${preservedPath}: ${error}`);
          }
          let preserved_state = preservedPath === null ? b("gone") : preservedPath === F ? b("original_dir") : b("retired_dir");
          if (E++, Q.length === 0) {
            let rename_err_code = Tg(error),
              copy_err_code = Tg(S),
              relocate_err_code = P === void 0 ? void 0 : Tg(P);
            m("update_apply", "update_apply_restore_failed", {
              ...(rename_err_code && {
                rename_err_code: rename_err_code
              }),
              ...(copy_err_code && {
                copy_err_code: copy_err_code
              }),
              ...(relocate_err_code && {
                relocate_err_code: relocate_err_code
              }),
              preserved_state: preserved_state
            });
          }
          Q.push({
            originalPath: originalPath,
            preservedPath: preservedPath
          }), l(Ye(new Le(`Failed to restore ${originalPath} after install failure: rename: ${error}; copy: ${S}; preserved copy: ${preservedPath ?? "not found"}`), `Failed to restore executable after install failure: rename=${Fr(error) ?? "unknown"} copy=${Fr(S) ?? "unknown"} relocate=${P === void 0 ? preservedPath === null ? "not_found" : "skipped" : Fr(P) ?? "unknown"}`));
        }
      }
      if (ae > 0 && E === 0) g("update_apply_heal", {
        heal_kind: b("relocate")
      });
      let y = new Set(f.map(([v]) => v));
      n.updateRestoreFailure = Q[0] ?? (n.updateRestoreFailure && !y.has(n.updateRestoreFailure.originalPath) ? n.updateRestoreFailure : null);
    }
    if (w.code !== 0) {
      let y = `${w.stdout} ${w.stderr}`,
        v = Mt(y),
        F = f.length === 0 ? "not_attempted" : E === 0 ? "restored" : "partial";
      if (v === "warning_only") {
        let S = await Te(e);
        if (S.outcome === "landed") return await Ce(h => ({
          ...h,
          installMethod: "global"
        }), r), n.updateRestoreFailure = null, p("update_apply", "update_apply_npm_install_stderr_warning"), t(`npm/bun exited ${w.code} with only warnings on stderr but the install-prefix re-probe confirms the install landed (now ${S.version}): ${y}`), {
          status: "success",
          probeDurationMs: S.durationMs
        };
      }
      if (i("tengu_auto_updater_npm_failure", {
        npm_exit_code: w.code,
        package_manager: c(s),
        is_bundled_mode: Hp(),
        platform: d2(I()),
        windows_self_rename: c(F),
        stderr_signature: c(v),
        npm_error_code: Tt(y) ?? b("none")
      }), I() === "windows" && /\b(?:claude|cli)\.exe\b/i.test(y) && (/\bEBUSY\b|resource busy or locked/i.test(y) || /\bEPERM\b|operation not permitted/i.test(y) && (f.length > 0 || /\b(?:rename|copyfile|unlink)\b[^\r\n]*\b(?:claude|cli)\.exe\b/i.test(y)))) return m("update_apply", "update_apply_exe_locked"), t(`Failed to install new version of claude (running executable is locked): ${y}`, {
        level: "error"
      }), {
        status: "install_failed",
        failureHint: "windows_running_exe_lock"
      };
      if (/\b(EACCES|EPERM|permission denied)\b/i.test(y)) return m("update_apply", "update_apply_no_permissions"), t("Insufficient permissions for global npm install.", {
        level: "error"
      }), {
        status: "no_permissions"
      };
      if (v === "native_package_missing") return m("update_apply", "update_apply_native_binary_missing"), t(`Failed to install new version of claude (platform-native package missing; npm should have restored the previous version): ${y}`, {
        level: "error"
      }), {
        status: "install_failed",
        failureHint: "native_binary_missing"
      };
      if (v === "warning_only") return m("update_apply", "update_apply_npm_install_stderr_warning"), t(`npm/bun exited ${w.code} with only warnings on stderr but the re-probe did not confirm an advance: ${y}`, {
        level: "error"
      }), {
        status: "install_failed"
      };
      return m("update_apply", "update_apply_npm_install_failed"), t(`Failed to install new version of claude: ${y}`, {
        level: "error"
      }), {
        status: "install_failed"
      };
    }
    let le = await Te(e);
    switch (le.outcome) {
      case "placeholder_stub":
        {
          let y = s === "npm" ? await ct("npm", ["config", "get", "ignore-scripts"], {
            abortSignal: AbortSignal.timeout(1e4),
            cwd: N(),
            useToolMemoryCgroup: !1
          }) : null;
          if (y?.code === 0 && y.stdout.trim() === "true") {
            t(`${s} exited 0 and the installed claude is the placeholder stub, but npm install scripts are disabled on purpose; trusting the exit code`);
            break;
          }
          return m("update_apply", "update_apply_native_binary_missing"), t(`${s} exited 0 but the installed claude is still the placeholder stub: the platform-native package was not installed`, {
            level: "error"
          }), {
            status: "install_failed",
            failureHint: "native_binary_missing"
          };
        }
      case "inconclusive":
        t(`${s} exited 0; the install-prefix --version probe was inconclusive, trusting the exit code`);
        break;
      case "landed":
        break;
    }
    return await Ce(y => ({
      ...y,
      installMethod: "global"
    }), r), n.updateRestoreFailure = null, g("update_apply"), {
      status: "success",
      probeDurationMs: le.durationMs
    };
  } finally {
    if (n.updateRestoreFailure !== null && n.updateRestoreFailure === updateRestoreFailure) await $t(n);
    await St(r);
  }
}
async function Ft() {
  let e = Z4e();
  for (let [, r] of Object.entries(e)) try {
    let n = await qMn(r);
    if (!n) continue;
    let {
      filtered: filtered,
      hadAlias: hadAlias_2
    } = qfr(n);
    if (hadAlias_2) await Kfr(r, filtered), t(`Removed claude alias from ${r}`);
  } catch (error) {
    t(`Failed to remove alias from ${r}: ${error}`, {
      level: "error"
    });
  }
}
function Mt(e) {
  if (/\b(EACCES|EPERM|permission denied)\b/i.test(e)) return "eacces_eperm";
  if (/postinstall\] Native package "[^"]*" not found/.test(e)) return "native_package_missing";
  if (/\bENOTEMPTY\b/i.test(e)) return "enotempty";
  if (/\bETARGET\b/i.test(e)) return "etarget";
  if (/\bE403\b/i.test(e) || /\b403 forbidden\b/i.test(e)) return "e403_forbidden";
  if (/\bENOENT\b/i.test(e)) return "enoent";
  if (/\bE5\d\d\b/i.test(e) || /\b5\d\d\s+(internal server error|bad gateway|service unavailable|gateway time-?out)\b/i.test(e)) return "registry_5xx";
  if (/\b(ETIMEDOUT|ESOCKETTIMEDOUT)\b/i.test(e) || /\btimed[\s-]?out\b/i.test(e) || /\btimeout\b/i.test(e)) return "network_timeout";
  if (/\bENOSPC\b/i.test(e)) return "disk_full";
  if (/\bEBUSY\b/i.test(e) || /\bresource busy or locked\b/i.test(e)) return "ebusy";
  let r = /npm warn/i.test(e) || /unknown user config/i.test(e) || /npm notice/i.test(e),
    n = /npm err/i.test(e) || /\b(EACCES|EPERM|ETARGET)\b/i.test(e) || /code E/i.test(e);
  if (r && !n) return "warning_only";
  return "unknown";
}
function Tt(e) {
  let r = /\bnpm (?:ERR!|error) code\s+([A-Z][A-Z0-9_]{1,29})(?![A-Za-z0-9_])/.exec(e)?.[1];
  return r === void 0 ? void 0 : xn(r);
}
export { Vfr, Ocs, Cit, JFe, Rit, Z4e, qfr, qMn, Kfr, lio, Ics, b8t, Mcs, dio, Ait, KMn, QFe, eYe, Dcs, Yfr, tYe, Lcs, xit, Xfr, S8t, nYe, Pit };