// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { y, c, bn } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { K_e, st, l, v, ao, Kg, B, wre, Et, gg, Pf } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { q, j, Y } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { H } from "B:/~BUN/root/chunk-dkxhwhft.js";
import { Q } from "B:/~BUN/root/chunk-17wqwt36.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { ag, x_, kN, lye, fi, o$, k1, Ee } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { b, ce, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Se } from "B:/~BUN/root/chunk-4p6z9qq1.js";
import { tr } from "B:/~BUN/root/chunk-0fnha6bz.js";
import { It, d, O } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { Yd, a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { tl, ih } from "B:/~BUN/root/chunk-bt3h0syz.js";
import { Ae } from "B:/~BUN/root/chunk-5w2ecytn.js";
import { LJ } from "B:/~BUN/root/chunk-rwwxddqq.js";
import { XS, Bo, hUo } from "B:/~BUN/root/chunk-2swveyqa.js";
import { Ve } from "B:/~BUN/root/chunk-py7yqpgt.js";
import { he, Je } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { v5n, nmt, rmt } from "B:/~BUN/root/chunk-zw7d3y39.js";
import { yo } from "B:/~BUN/root/chunk-3jyp964r.js";
import { IB } from "B:/~BUN/root/chunk-xmtkv29j.js";
import { be } from "B:/~BUN/root/chunk-yv67t8hr.js";
import { access as Oe, chmod as Me, writeFile as Te } from "fs/promises";
import { join as U } from "path";
function W() {
  return U(Se(), "local");
}
function le() {
  return U(W(), "claude");
}
function Mlo() {
  return (process.argv[1] || "").includes("/.claude/local/node_modules/");
}
async function se(e, r, mode) {
  try {
    return await Te(e, r, {
      encoding: "utf8",
      flag: "wx",
      mode: mode
    }), !0;
  } catch (error) {
    if (v(error) === "EEXIST") return !1;
    throw error;
  }
}
async function Ne() {
  try {
    let e = W();
    await ce().mkdir(e), await se(U(e, "package.json"), b({
      name: "claude-local",
      version: "0.0.1",
      private: !0
    }, null, 2));
    let r = U(e, "claude");
    if (await se(r, `#!/bin/sh
exec "${e}/node_modules/.bin/claude" "$@"`, 493)) await Me(r, 493);
    return !0;
  } catch (error) {
    return t(`Failed to set up local package environment: ${error}`, {
      level: "error"
    }), !1;
  }
}
async function pGe(e, r, n) {
  try {
    if (!(await Ne())) return m("update_apply", "update_apply_env_setup_failed"), "install_failed";
    let o = r ? r : e === "stable" ? "stable" : "latest",
      s = await Ve("npm", ["install", `${{
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.283",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-09-25T00:44:42Z",
        GIT_SHA: "4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",
        HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "win32"
      }.PACKAGE_URL}@${o}`], {
        cwd: W(),
        maxBuffer: 1e6,
        useToolMemoryCgroup: !1
      });
    if (s.code !== 0) return m("update_apply", "update_apply_local_npm_failed"), t(`Failed to install Claude CLI package: ${s.stderr}`, {
      level: "error"
    }), s.code === 190 ? "in_progress" : "install_failed";
    return await Ee(u => ({
      ...u,
      installMethod: "local"
    }), n), _("update_apply"), "success";
  } catch (error) {
    return m("update_apply", "update_apply_local_exception"), d(error), "install_failed";
  }
}
async function Jwe() {
  try {
    return await Oe(U(W(), "node_modules", ".bin", "claude")), !0;
  } catch {
    return !1;
  }
}
function fGe() {
  let e = a.SHELL || "";
  if (e.includes("zsh")) return "zsh";
  if (e.includes("bash")) return "bash";
  if (e.includes("fish")) return "fish";
  return "unknown";
}
import { existsSync as Ie } from "fs";
import { open as Ue, readFile as Le, stat as De } from "fs/promises";
import { homedir as ue } from "os";
import { join as L } from "path";
var de = /^\s*alias\s+claude\s*=/;
function oMe(e) {
  let r = e?.homedir ?? ue(),
    n = e?.env ?? process.env,
    o = e?.platform ?? "win32",
    s = e?.fileExists ?? Ie,
    u = n.ZDOTDIR || r,
    C = o === "darwin" ? [".bash_profile", ".bash_login", ".profile"].find(item => s(L(r, item))) ?? ".bash_profile" : ".bashrc";
  return {
    zsh: L(u, ".zshrc"),
    bash: L(r, C),
    ...(o === "darwin" && {
      bashrc: L(r, ".bashrc")
    }),
    fish: L(r, ".config/fish/config.fish")
  };
}
function _0n(e) {
  let hadAlias = !1;
  return {
    filtered: e.filter(item => {
      if (de.test(item)) {
        let s = item.match(/alias\s+claude\s*=\s*["']([^"']+)["']/);
        if (!s) s = item.match(/alias\s+claude\s*=\s*([^#\n]+)/);
        if (s && s[1]) {
          if (s[1].trim() === le()) return hadAlias = !0, !1;
        }
      }
      return !0;
    }),
    hadAlias: hadAlias
  };
}
async function XXt(e) {
  try {
    return (await Le(e, {
      encoding: "utf8"
    })).split(`
`);
  } catch (error) {
    if (Et(error)) return null;
    if (wre(error)) return t(`Skipping ${e}: path is a directory`, {
      level: "warn"
    }), null;
    throw error;
  }
}
async function b0n(e, r) {
  let n = await Ue(e, "w");
  try {
    await n.writeFile(r.join(`
`), {
      encoding: "utf8"
    }), await n.datasync();
  } finally {
    await n.close();
  }
}
var Be = new Set(["EBUSY", "EOPNOTSUPP", "ENOTSUP", "ENOMEM", "ERR_FS_FILE_TOO_LARGE", "ENOTCONN", "EHOSTDOWN", "EHOSTUNREACH", "ETIMEDOUT"]);
async function ohr(e) {
  let r = oMe(e);
  for (let n of Object.values(r)) {
    let o = await XXt(n).catch(s => {
      if (Pf(s) || gg(s) || Be.has(v(s) ?? "")) return t(`Skipping unreadable shell config ${n} during alias scan: ${l(s)}`, {
        level: "warn"
      }), null;
      throw s;
    });
    if (!o) continue;
    for (let s of o) if (de.test(s)) {
      let u = s.match(/alias\s+claude=["']?([^"'\s]+)/);
      if (u && u[1]) return u[1];
    }
  }
  return null;
}
async function Dlo(e) {
  let r = await ohr(e);
  if (!r) return null;
  let n = e?.homedir ?? ue(),
    o = r.startsWith("~") ? r.replace("~", n) : r;
  try {
    let s = await De(o);
    if (s.isFile() || s.isSymbolicLink()) return r;
  } catch {}
  return null;
}
var R = be(ih(), 1);
import { randomBytes as We } from "crypto";
import { constants as we } from "fs";
import { access as ye, copyFile as pe, readdir as I, rename as fe, rm as He, stat as G, unlink as D, writeFile as me } from "fs/promises";
import { homedir as V } from "os";
import { basename as J, dirname as Z, join as P } from "path";
async function y0n(e, r) {
  let n;
  for (let o = 1; o <= r.attempts; o++) try {
    return await e(AbortSignal.timeout(r.timeoutMs));
  } catch (error) {
    if (n = error, o >= r.attempts) break;
    r.onRetry?.(o, error);
    let u = 500 * 3 ** (o - 1);
    await Q(u * (0.75 + Math.random() * 0.5));
  }
  throw n;
}
var Ge = "https://downloads.claude.ai/claude-code-releases";
class ve extends K_e {}
async function Llo() {
  try {
    let e = await k1("tengu_version_config", {
      minVersion: "0.0.0"
    });
    if (e.minVersion && kN({
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.283",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-09-25T00:44:42Z",
      GIT_SHA: "4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION, e.minVersion)) Ke(e.minVersion);
  } catch (error) {
    d(error);
  }
}
function Ke(e) {
  let message = je({
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.283",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-09-25T00:44:42Z",
    GIT_SHA: "4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",
    HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "win32"
  }.VERSION, e);
  if (console.error(`
${message}
`), nmt() && v5n()) try {
    tr(b(rmt({
      sessionId: Y(),
      message: message,
      reason: "cli_version_too_old",
      resultIndex: null
    })) + `
`);
  } catch (error) {
    t(`[assertMinVersion] startup failure result not written: ${l(error)}`, {
      level: "error"
    });
  }
  yo(1);
}
function je(e, r) {
  return `It looks like your version of Claude Code (${e}) needs an update.
A newer version (${r} or higher) is required to continue.

To update, please run:
    claude update

This will ensure you have access to the latest features and improvements.`;
}
var Ye = 300000;
class xe {
  lastAutoUpdateCheckAt = 0;
  updateRestoreFailure = null;
  mintedPreservedInodes = new Set();
}
var ze = new q(() => new xe());
function re() {
  return ze.of(j().host);
}
var qe = 1e4;
function shr() {
  return Math.max(0, qe - process.uptime() * 1000);
}
function mGe() {
  let e = re(),
    r = Date.now();
  if (r - e.lastAutoUpdateCheckAt < Ye) return t(`auto-update check throttled (last check ${Math.round((r - e.lastAutoUpdateCheckAt) / 1000)}s ago)`), !0;
  return e.lastAutoUpdateCheckAt = r, !1;
}
async function JXt() {
  return (await Qwe()).maxVersion;
}
async function Qwe() {
  let e = await Pe(),
    r = !1,
    n = e.external || void 0,
    maxVersion = n ? R.parse(n)?.version ?? void 0 : void 0;
  if (n && !maxVersion) t(`tengu_max_version_config has invalid version '${n}' \u2014 ignoring`, {
    level: "error"
  }), i("tengu_max_version_config_invalid", {
    raw_value: fi(n)
  });
  return {
    maxVersion: maxVersion,
    forceDowngradeEnabled: e.external_force_downgrade === !0
  };
}
function sMe(e, r, n) {
  let o = n === "native_update" ? "Native installer" : "AutoUpdater",
    s = R.parse(e);
  if (s && s.compare(r) > 0) return t(`${o}: force-downgrade active \u2014 moving from ${e} to ${r}`), !0;
  return t(`${o}: force-downgrade flag set but current ${e} is not above ${r} \u2014 taking normal upgrade path`), !1;
}
async function Nlo() {
  return (await Pe()).external_message || void 0;
}
async function Pe() {
  try {
    return await k1("tengu_max_version_config", {});
  } catch (error) {
    return d(error), {};
  }
}
function S0n(e) {
  if (!R.parse(e)) return t("update target is not a valid semver version \u2014 skip checks constrain nothing", {
    level: "error"
  }), t(`update target (first 300 chars, JSON-encoded): ${LJ(JSON.stringify(e.slice(0, 300)))}`), null;
  let r = Je()?.minimumVersion;
  if (r) {
    let o = R.parse(r)?.version;
    if (!o) t(`minimumVersion is not a valid semver version \u2014 ignoring. Value (first 300 chars, JSON-encoded): ${LJ(JSON.stringify(r.slice(0, 300)))}`, {
      level: "error"
    });else if (!x_(e, o)) return `below your minimumVersion setting (${r})`;
  }
  let n = he("policySettings")?.requiredMaximumVersion;
  if (n) {
    let o = R.parse(n)?.version;
    if (!o) t(`requiredMaximumVersion is not a valid semver version \u2014 ignoring. Value (first 300 chars, JSON-encoded): ${LJ(JSON.stringify(n.slice(0, 300)))}`, {
      level: "error"
    });else if (!lye(e, o)) return `above your organization's requiredMaximumVersion (${n})`;
  }
  return null;
}
function iMe(e) {
  let r = S0n(e);
  if (r) t(`Skipping update to ${e}: ${r}`);
  return r !== null;
}
var K = 300000;
function ke() {
  return P(Se(), ".update.lock");
}
function X() {
  return Ae.state("update-lock");
}
async function Ze(e) {
  let r = X(),
    n = await e.statMeta(r);
  if (n.ok) {
    if (Date.now() - n.value.mtimeMs < K) return !1;
    let u = await e.statMeta(r);
    if (u.ok) {
      if (Date.now() - u.value.mtimeMs < K) return !1;
      let C = await e.delete(r);
      if (!C.ok) return t(`AutoUpdater: failed to remove stale update lock: ${C.error.code}`, {
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
async function Xe(e) {
  if (H() && e) return Ze(e);
  let r = ce(),
    n = ke();
  try {
    let o = await r.stat(n);
    if (Date.now() - o.mtimeMs < K) return !1;
    try {
      let u = await r.stat(n);
      if (Date.now() - u.mtimeMs < K) return !1;
      await r.unlink(n);
    } catch (error) {
      if (!B(error)) return d(error), !1;
    }
  } catch (error) {
    if (!B(error)) return d(error), !1;
  }
  try {
    return await me(n, `${process.pid}`, {
      encoding: "utf8",
      flag: "wx"
    }), !0;
  } catch (error) {
    let s = v(error);
    if (s === "EEXIST") return !1;
    if (s === "ENOENT") try {
      return await r.mkdir(Se()), await me(n, `${process.pid}`, {
        encoding: "utf8",
        flag: "wx"
      }), !0;
    } catch (error) {
      if (v(error) === "EEXIST") return !1;
      return t(`Failed to create config dir or update lock file: ${error}`, {
        level: "error"
      }), !1;
    }
    return t(`AutoUpdater: failed to create update lock file ${n}: ${error}`, {
      level: "error"
    }), !1;
  }
}
async function Qe(e) {
  if (H() && e) {
    let o = await e.read([X()]);
    if (!o.ok) {
      t(`AutoUpdater: failed to release update lock: ${o.error.code}`, {
        level: "error"
      });
      return;
    }
    let s = o.value.items[0];
    if (!s.found) return;
    if (Buffer.from(s.value).toString("utf8") === `${process.pid}`) {
      let u = await e.delete(X());
      if (!u.ok) t(`AutoUpdater: failed to release update lock: ${u.error.code}`, {
        level: "error"
      });
    }
    return;
  }
  let r = ce(),
    n = ke();
  try {
    if ((await r.readFile(n, {
      encoding: "utf8"
    })) === `${process.pid}`) await r.unlink(n);
  } catch (error) {
    if (B(error)) return;
    t(`AutoUpdater: failed to release update lock file ${n}: ${error}`, {
      level: "error"
    });
  }
}
function ne() {
  let e = process.execPath.replace(/\\/g, "/"),
    r = (a.BUN_INSTALL ?? "").replace(/\\/g, "/").replace(/\/+$/, "");
  if (e.includes("/.bun/install/global/") || r && e.startsWith(r + "/install/global/")) return "bun";
  return a.isRunningWithBun() && !Yd() ? "bun" : "npm";
}
async function $e() {
  let e = ne() === "bun",
    r = null;
  if (e) r = await Ve("bun", ["pm", "bin", "-g"], {
    cwd: V(),
    useToolMemoryCgroup: !1
  });else r = await Ve("npm", ["-g", "config", "get", "prefix"], {
    cwd: V(),
    useToolMemoryCgroup: !1
  });
  if (r.code !== 0) return t(`Failed to check ${e ? "bun" : "npm"} permissions (exit ${r.code}): ${r.stderr.trim()}`, {
    level: "error"
  }), null;
  return r.stdout.trim() || null;
}
async function et() {
  let e = await $e();
  if (!e) return [];
  if (ne() === "bun") return [P(e, "claude")];
  if (O() === "windows") return [P(e, "claude.cmd"), P(e, "claude.exe")];
  return [P(e, "bin", "claude")];
}
async function Hlo() {
  try {
    let npmPrefix = await $e();
    if (!npmPrefix) return {
      hasPermissions: !1,
      npmPrefix: null
    };
    try {
      return await ye(npmPrefix, we.W_OK), {
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
    return d(error), {
      hasPermissions: !1,
      npmPrefix: null
    };
  }
}
async function gGe(e) {
  let r = e === "stable" ? "stable" : "latest",
    n = await Ve("npm", ["view", `${{
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.283",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-09-25T00:44:42Z",
      GIT_SHA: "4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.PACKAGE_URL}@${r}`, "version", "--prefer-online"], {
      abortSignal: AbortSignal.timeout(5000),
      cwd: V(),
      useToolMemoryCgroup: !1
    });
  if (n.code !== 0) {
    let s = n.stdout.trim();
    if (s && R.parse(s)) {
      if (p("update_check", "update_check_npm_view_stderr_warning"), t(`npm view exited ${n.code} but printed a valid version (${s}) \u2014 treating stderr as a warning`), n.stderr) t(`npm stderr: ${n.stderr.trim()}`);
      return s;
    }
    if (m("update_check", "update_check_npm_view_failed"), t(`npm view failed with code ${n.code}`), n.stderr) t(`npm stderr: ${n.stderr.trim()}`);else t("npm stderr: (empty)");
    if (n.stdout) t(`npm stdout (first 300 chars, JSON-encoded): ${LJ(JSON.stringify(n.stdout.trim().slice(0, 300)))}`);
    return null;
  }
  let o = n.stdout.trim();
  if (o && !R.parse(o)) return m("update_check", "update_check_npm_view_invalid_stdout"), t("npm view exited 0 but stdout is not a valid semver version \u2014 treating as no result"), t(`npm stdout (first 300 chars, JSON-encoded): ${LJ(JSON.stringify(o.slice(0, 300)))}`), null;
  return _("update_check"), o || null;
}
var ge = 5000,
  attempts = 3;
async function w0n(e) {
  if (It()) return null;
  let r = 0;
  try {
    let o = (await y0n(signal => (r++, IB.get(`${Ge}/${e}`, {
      timeout: ge,
      responseType: "text",
      signal: signal
    })), {
      attempts: attempts,
      timeoutMs: ge,
      onRetry: (s, u) => {
        t(`Failed to fetch ${e} from GCS on attempt ${s}/${attempts}, retrying: ${u}`);
      }
    })).data.trim();
    if (!R.parse(o)) return m("update_check", "update_check_gcs_invalid_response"), t(`GCS ${e} version response is not a valid semver version \u2014 treating as no result`), t(`GCS response body (first 300 chars, JSON-encoded): ${LJ(JSON.stringify(o.slice(0, 300)))}`), null;
    if (r > 1) p("update_check", "update_check_gcs_retry");else _("update_check");
    return o;
  } catch (error) {
    return m("update_check", "update_check_gcs_failed"), t(`Failed to fetch ${e} from GCS after ${r} attempt(s): ${error}`), null;
  }
}
async function tt(e) {
  if (It()) return null;
  try {
    let r = await tl.get(`https://formulae.brew.sh/api/cask/${e}.json`, {
        timeout: 5000,
        responseType: "json"
      }),
      n = r.data?.version,
      o = typeof n === "string" ? n.trim() : null;
    if (!o || !R.parse(o)) {
      m("update_check", "update_check_homebrew_invalid_version"), t(`formulae.brew.sh ${e} version is not a valid semver version \u2014 treating as no result`);
      let s = typeof r.data === "string" ? r.data : String(b(r.data));
      return t(`brew response (first 300 chars, JSON-encoded): ${LJ(JSON.stringify(s.slice(0, 300)))}`), null;
    }
    return _("update_check"), o;
  } catch (error) {
    return m("update_check", "update_check_homebrew_failed"), t(`Failed to fetch ${e} from formulae.brew.sh: ${error}`), null;
  }
}
async function sCt(e, r) {
  let [n, o] = await Promise.all([tt(e), w0n(r)]);
  return n ?? o;
}
function aMe() {
  return re().updateRestoreFailure;
}
async function rt(e) {
  if (!e.updateRestoreFailure) return;
  if (await ie(e.updateRestoreFailure.originalPath)) {
    e.updateRestoreFailure = null;
    return;
  }
  if (e.updateRestoreFailure.preservedPath !== null) e.updateRestoreFailure = {
    originalPath: e.updateRestoreFailure.originalPath,
    preservedPath: await Fe(e, e.updateRestoreFailure.preservedPath)
  };
}
function ie(e) {
  return ye(e, we.F_OK).then(() => !0, () => !1);
}
function Re() {
  let e = P(Z(process.execPath), "..", "..");
  return [P(e, ".."), e];
}
async function Ce() {
  return (await Promise.all(Re().map(item => I(item, {
    withFileTypes: !0
  }).then(n => n.filter(item => item.isDirectory() && item.name.startsWith(".")).map(o => P(item, o.name))).catch(() => [])))).flat();
}
async function ee(e, r) {
  let n = await G(r, {
    bigint: !0
  }).then(o => o.ino, () => 0n);
  return n !== 0n && e.mintedPreservedInodes.has(n);
}
async function Fe(e, r) {
  if (await ee(e, r)) return r;
  let n = J(r),
    o = (await Ce()).flatMap(item => [P(item, n), P(item, "bin", n)]);
  for (let s of o) if (await ee(e, s)) return s;
  return null;
}
async function te(e, r) {
  await ce().mkdir(Z(r));
  try {
    let o = Z(r),
      s = `${J(r)}.restoring.`;
    for (let u of await I(o)) if (u.startsWith(s)) await D(P(o, u)).catch(() => {});
  } catch {}
  let n = `${r}.restoring.${We(4).toString("hex")}`;
  try {
    await pe(e, n);
    try {
      await Bo(n, r);
    } catch (error) {
      let s = v(error);
      if (s === void 0 || !XS.has(s)) throw error;
      if (!(await ie(r))) throw error;
      try {
        await pe(n, r);
      } catch (error) {
        if (hUo.has(v(error) ?? "")) await D(r).catch(() => {});
        throw error;
      }
      await D(n).catch(() => {});
    }
  } catch (error) {
    throw await D(n).catch(() => {}), error;
  }
}
async function nt(e, r) {
  let n = J(process.execPath).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
    regExp = new RegExp(`^${n}\\.old\\.(\\d+)$`),
    s = (await Promise.all(r.flatMap(item => [item, P(item, "bin")].map(async item => (await I(item).catch(() => [])).map(item => regExp.exec(item)).filter(item => item !== null).map(M => ({
      path: P(item, M[0]),
      ts: Number(M[1])
    })))))).flat(),
    C = (await Promise.all(s.map(async item => (await ee(e, item.path)) ? [item] : []))).flat().reduce((acc, item) => acc === null || item.ts > acc.ts ? item : acc, null);
  if (!C) {
    t(`No preserved ${J(process.execPath)}.old.<ts> found in ${r.length} retired dir(s) \u2014 sweep restore skipped`);
    return;
  }
  try {
    await te(C.path, process.execPath), _("update_apply_heal", {
      heal_kind: y("sweep")
    }), t(`Restored missing ${process.execPath} from preserved copy ${C.path} before update attempt`);
  } catch (error) {
    let err_code = Kg(error);
    m("update_apply_heal", "sweep_restore_failed", {
      ...(err_code && {
        err_code: err_code
      }),
      heal_kind: y("sweep")
    }), t(`Failed to restore missing ${process.execPath} from preserved copy ${C.path}: ${error}`);
  }
}
async function hGe(e, r) {
  let n = re();
  if (!(await Xe(r))) return p("update_apply", "update_apply_lock_contention"), t("Another process is currently installing an update", {
    level: "error"
  }), i("tengu_auto_updater_lock_contention", {
    pid: process.pid,
    currentVersion: fi({
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.283",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-09-25T00:44:42Z",
      GIT_SHA: "4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION)
  }), {
    status: "in_progress"
  };
  let updateRestoreFailure = n.updateRestoreFailure;
  try {
    await it();
    let s = ne();
    if (s === "npm" && a.isNpmFromWindowsPath()) return m("update_apply", "update_apply_wsl_windows_npm"), t("Windows NPM detected in WSL environment", {
      level: "error"
    }), i("tengu_auto_updater_windows_npm_in_wsl", {
      currentVersion: fi({
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.283",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-09-25T00:44:42Z",
        GIT_SHA: "4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",
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
        VERSION: "2.1.283",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-09-25T00:44:42Z",
        GIT_SHA: "4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",
        HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "win32"
      }.PACKAGE_URL}@${e}` : {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.283",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-09-25T00:44:42Z",
        GIT_SHA: "4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",
        HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "win32"
      }.PACKAGE_URL,
      C = O() === "windows" && Yd() && process.execPath.replace(/\\/g, "/").includes("/node_modules/@anthropic-ai/"),
      g = [];
    if (C) {
      let [, w] = Re(),
        E = (await Promise.all((await Ce()).map(async item => (await Promise.all([I(item).catch(() => []), I(P(item, "bin")).catch(() => [])]).then(([k, S]) => [...k, ...S].some(item => /\.exe\.old\.\d+$/.test(item)))) ? [item] : []))).flat();
      if (E.length > 0) if (await ie(process.execPath)) await Promise.all(E.map(item => He(item, {
        recursive: !0,
        force: !0
      }).catch(h => t(`retired-dir cleanup failed: ${h}`))));else await nt(n, E);
      let A = Date.now(),
        T = await G(process.execPath, {
          bigint: !0
        }).then(f => f.ino).catch(() => 0n),
        F = [process.execPath];
      for (let f of await I(w).catch(() => [])) for (let h of ["claude.exe", "cli.exe"]) {
        let k = P(w, f, h);
        if (k === process.execPath) continue;
        let S = await G(k, {
          bigint: !0
        }).then(N => N.ino).catch(() => -1n);
        if (T && S === T) F.push(k);
      }
      for (let f of F) {
        let h = `${f}.old.${A}`;
        try {
          await fe(f, h);
        } catch {
          continue;
        }
        g.push([f, h]);
        let k = await G(h, {
          bigint: !0
        }).then(S => S.ino, () => 0n);
        if (k !== 0n) n.mintedPreservedInodes.add(k);
      }
    }
    let x = await Ve(s, ["install", "-g", u], {
        cwd: V(),
        useToolMemoryCgroup: !1
      }),
      M = 0,
      oe = 0,
      z = [];
    if (g.length && x.code !== 0) {
      for (let [originalPath, A] of g) try {
        await fe(A, originalPath);
      } catch (error) {
        try {
          await te(A, originalPath), t(`Restored ${originalPath} by copy after rename failed: ${error}`), await D(A).catch(F => t(`Failed to remove ${A} after copy-restore: ${F}`));
        } catch (F) {
          let preservedPath = await Fe(n, A),
            h;
          if (preservedPath !== null && preservedPath !== A) try {
            await te(preservedPath, originalPath), oe++, t(`Restored ${originalPath} from retired-dir copy ${preservedPath} after rename (${error}) and copy (${F}) both failed`);
            continue;
          } catch (error) {
            h = error, t(`Failed to restore ${originalPath} from retired-dir copy ${preservedPath}: ${error}`);
          }
          let preserved_state = preservedPath === null ? y("gone") : preservedPath === A ? y("original_dir") : y("retired_dir");
          if (M++, z.length === 0) {
            let rename_err_code = Kg(error),
              copy_err_code = Kg(F),
              relocate_err_code = h === void 0 ? void 0 : Kg(h);
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
          z.push({
            originalPath: originalPath,
            preservedPath: preservedPath
          }), d(st(new ve(`Failed to restore ${originalPath} after install failure: rename: ${error}; copy: ${F}; preserved copy: ${preservedPath ?? "not found"}`), `Failed to restore executable after install failure: rename=${ao(error) ?? "unknown"} copy=${ao(F) ?? "unknown"} relocate=${h === void 0 ? preservedPath === null ? "not_found" : "skipped" : ao(h) ?? "unknown"}`));
        }
      }
      if (oe > 0 && M === 0) _("update_apply_heal", {
        heal_kind: y("relocate")
      });
      let w = new Set(g.map(([E]) => E));
      n.updateRestoreFailure = z[0] ?? (n.updateRestoreFailure && !w.has(n.updateRestoreFailure.originalPath) ? n.updateRestoreFailure : null);
    }
    if (x.code !== 0) {
      let w = `${x.stdout} ${x.stderr}`,
        E = ot(w),
        A = g.length === 0 ? "not_attempted" : M === 0 ? "restored" : "partial";
      if (E === "warning_only") {
        let F = await et(),
          f = e ? R.parse(e)?.version : void 0,
          h,
          k = !1;
        for (let S of F) {
          let N = await Ve(S, ["--version"], {
            abortSignal: AbortSignal.timeout(45000),
            cwd: V(),
            useToolMemoryCgroup: !1
          });
          if (h = R.parse(N.stdout.trim().split(/\s+/)[0])?.version, k = N.code === 0 && h != null && (f != null ? h === f : ag(h, {
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.283",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-09-25T00:44:42Z",
            GIT_SHA: "4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",
            HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "win32"
          }.VERSION)), k) break;
        }
        if (k) return await Ee(S => ({
          ...S,
          installMethod: "global"
        }), r), n.updateRestoreFailure = null, p("update_apply", "update_apply_npm_install_stderr_warning"), t(`npm/bun exited ${x.code} with only warnings on stderr but the install-prefix re-probe confirms the install landed (now ${h}): ${w}`), {
          status: "success"
        };
      }
      if (i("tengu_auto_updater_npm_failure", {
        npm_exit_code: x.code,
        package_manager: c(s),
        is_bundled_mode: Yd(),
        platform: o$(O()),
        windows_self_rename: c(A),
        stderr_signature: c(E),
        npm_error_code: at(w) ?? y("none")
      }), O() === "windows" && /\b(?:claude|cli)\.exe\b/i.test(w) && (/\bEBUSY\b|resource busy or locked/i.test(w) || /\bEPERM\b|operation not permitted/i.test(w) && (g.length > 0 || /\b(?:rename|copyfile|unlink)\b[^\r\n]*\b(?:claude|cli)\.exe\b/i.test(w)))) return m("update_apply", "update_apply_exe_locked"), t(`Failed to install new version of claude (running executable is locked): ${w}`, {
        level: "error"
      }), {
        status: "install_failed",
        failureHint: "windows_running_exe_lock"
      };
      if (/\b(EACCES|EPERM|permission denied)\b/i.test(w)) return m("update_apply", "update_apply_no_permissions"), t("Insufficient permissions for global npm install.", {
        level: "error"
      }), {
        status: "no_permissions"
      };
      if (E === "warning_only") return m("update_apply", "update_apply_npm_install_stderr_warning"), t(`npm/bun exited ${x.code} with only warnings on stderr but the re-probe did not confirm an advance: ${w}`, {
        level: "error"
      }), {
        status: "install_failed"
      };
      return m("update_apply", "update_apply_npm_install_failed"), t(`Failed to install new version of claude: ${w}`, {
        level: "error"
      }), {
        status: "install_failed"
      };
    }
    return await Ee(w => ({
      ...w,
      installMethod: "global"
    }), r), n.updateRestoreFailure = null, _("update_apply"), {
      status: "success"
    };
  } finally {
    if (n.updateRestoreFailure !== null && n.updateRestoreFailure === updateRestoreFailure) await rt(n);
    await Qe(r);
  }
}
async function it() {
  let e = oMe();
  for (let [, r] of Object.entries(e)) try {
    let n = await XXt(r);
    if (!n) continue;
    let {
      filtered: filtered,
      hadAlias: hadAlias_2
    } = _0n(n);
    if (hadAlias_2) await b0n(r, filtered), t(`Removed claude alias from ${r}`);
  } catch (error) {
    t(`Failed to remove alias from ${r}: ${error}`, {
      level: "error"
    });
  }
}
function ot(e) {
  if (/\b(EACCES|EPERM|permission denied)\b/i.test(e)) return "eacces_eperm";
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
function at(e) {
  let r = /\bnpm (?:ERR!|error) code\s+([A-Z][A-Z0-9_]{1,29})(?![A-Za-z0-9_])/.exec(e)?.[1];
  return r === void 0 ? void 0 : bn(r);
}
export { y0n, Mlo, pGe, Jwe, fGe, oMe, _0n, XXt, b0n, ohr, Dlo, Llo, shr, mGe, JXt, Qwe, sMe, Nlo, S0n, iMe, Hlo, gGe, w0n, sCt, aMe, hGe };