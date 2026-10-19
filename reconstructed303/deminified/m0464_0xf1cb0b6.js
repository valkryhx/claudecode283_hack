// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { _, J, se, _n, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { q4, yJn } from "B:/~BUN/root/chunk-nggrknsv.js";
import { Fe } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { j } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { W } from "B:/~BUN/root/chunk-hg8ngszx.js";
import { G } from "B:/~BUN/root/chunk-3aez4b53.js";
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { Pe } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { Hp, Wd, a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { I as platform } from "B:/~BUN/root/chunk-je1b1drr.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { Be } from "B:/~BUN/root/chunk-d9rmnpx3.js";
import { ATe, ce } from "B:/~BUN/root/chunk-nxwmyxnk.js";
import { by, cI } from "B:/~BUN/root/chunk-j8w5f307.js";
import { lt as execFileNoThrow } from "B:/~BUN/root/chunk-6ft8yhc8.js";
import { gn } from "B:/~BUN/root/chunk-pjgzz98k.js";
import { rdn, ue, Ddn, vMe } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { xB } from "B:/~BUN/root/chunk-q4sexgb0.js";
import { KMt, p5e } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { nIs, Ufe, Je } from "B:/~BUN/root/chunk-r0jnxjth.js";
import { Ocs, JFe, Rit, Z4e, lio, Ics, Lcs } from "B:/~BUN/root/chunk-hrf323t4.js";
import { M3 } from "B:/~BUN/root/chunk-asrchj7k.js";
import { eW } from "B:/~BUN/root/chunk-fck2jn8z.js";
import { ge, St, Ld } from "B:/~BUN/root/chunk-rm2gz7kj.js";
import { lstat as te, realpath as B } from "fs/promises";
import { homedir as y } from "os";
import { stripVTControlCharacters as ne } from "util";
import { delimiter as ae, join as p, posix as v, win32 as R } from "path";
import { join as X } from "path";
var Q = f(() => St({
  timestamp: ge(),
  path: Ld(["npm-global", "npm-local", "native"]),
  outcome: Ld(["success", "failed"]),
  status: ge(),
  version_from: ge(),
  version_to: ge().nullable(),
  error_code: ge().nullable()
}));
function S() {
  return X(Pe(), ".last-update-result.json");
}
function L() {
  return Be.state("last-update-result");
}
async function Q4e(e, n) {
  if (W() && n) {
    let i = await n.write(L(), _(e), {
      mode: 438 & ~process.umask()
    });
    if (!i.ok) t(`Failed to record update result: ${i.error.code}`, {
      level: "error"
    });
    return;
  }
  try {
    await gn().atomicWrite(S(), _(e));
  } catch (error) {
    t(`Failed to record update result: ${error}`, {
      level: "error"
    });
  }
}
async function Gfr(e) {
  let n;
  if (W() && e) {
    let i = await e.read([L()]);
    if (!i.ok) return t(`Failed to read update result: ${i.error.code}`, {
      level: "error"
    }), null;
    let s = i.value.items[0];
    if (!s.found) return null;
    n = Buffer.from(s.value).toString("utf8");
  } else try {
    n = await gn().read(S());
  } catch (error) {
    if (!G(error)) t(`Failed to read update result: ${error}`, {
      level: "error"
    });
    return null;
  }
  try {
    let i = Q().safeParse(J(n));
    return i.success ? i.data : null;
  } catch {
    return null;
  }
}
import { readFile as Y } from "fs/promises";
function Z(e, n) {
  return n.includes(e.id) || e.idLike.some(item => n.includes(item));
}
class D {
  sources;
  osRelease;
  pacman;
  deb;
  rpm;
  apk;
  packageManager;
  constructor(e) {
    this.sources = e;
  }
  getOsRelease() {
    return this.osRelease ??= this.sources.readOsRelease().then(e => {
      let n = e.match(/^ID=["']?(\S+?)["']?\s*$/m),
        i = e.match(/^ID_LIKE=["']?(.+?)["']?\s*$/m);
      return {
        id: n?.[1] ?? "",
        idLike: i?.[1]?.split(" ") ?? []
      };
    }, () => null);
  }
  detectPacman() {
    return this.pacman ??= this.ownsExecutable(["arch"], "pacman", ["-Qo"]);
  }
  detectDeb() {
    return this.deb ??= this.ownsExecutable(["debian"], "dpkg", ["-S"]);
  }
  detectRpm() {
    return this.rpm ??= this.ownsExecutable(["fedora", "rhel", "suse"], "rpm", ["-qf"]);
  }
  detectApk() {
    return this.apk ??= this.ownsExecutable(["alpine"], "apk", ["info", "--who-owns"]);
  }
  async ownsExecutable(e, n, i) {
    if (this.sources.platform() !== "linux") return !1;
    let s = await this.getOsRelease();
    if (s && !Z(s, e)) return !1;
    let o = await this.sources.execFileNoThrow(n, [...i, this.sources.execPath()], {
      timeout: 5000,
      useCwd: !1,
      useToolMemoryCgroup: !1
    });
    if (o.code === 0 && o.stdout) return t(`Detected ${n} installation: ${o.stdout.trim()}`), !0;
    return !1;
  }
  detectHomebrew() {
    let e = this.sources.platform();
    if (e !== "macos" && e !== "linux" && e !== "wsl") return !1;
    let n = this.sources.execPath();
    if (n.includes("/Caskroom/")) return t(`Detected Homebrew cask installation: ${n}`), !0;
    return !1;
  }
  getHomebrewCaskName() {
    return this.sources.execPath().match(/\/Caskroom\/([^/]+)\//)?.[1] ?? null;
  }
  detectWinget() {
    if (this.sources.platform() !== "windows") return !1;
    let e = this.sources.execPath();
    for (let n of [/Microsoft[/\\]WinGet[/\\]Packages/i, /Microsoft[/\\]WinGet[/\\]Links/i]) if (n.test(e)) return t(`Detected winget installation: ${e}`), !0;
    return !1;
  }
  detectMise() {
    let e = this.sources.execPath();
    if (/[/\\]mise[/\\]installs[/\\]/i.test(e)) return t(`Detected mise installation: ${e}`), !0;
    return !1;
  }
  detectAsdf() {
    let e = this.sources.execPath();
    if (/[/\\]\.?asdf[/\\]installs[/\\]/i.test(e)) return t(`Detected asdf installation: ${e}`), !0;
    return !1;
  }
  getPackageManager() {
    return this.packageManager ??= this.detectPackageManager();
  }
  async detectPackageManager() {
    if (this.detectHomebrew()) return "homebrew";
    if (this.detectWinget()) return "winget";
    if (this.detectMise()) return "mise";
    if (this.detectAsdf()) return "asdf";
    if (await this.detectPacman()) return "pacman";
    if (await this.detectApk()) return "apk";
    if (await this.detectDeb()) return "deb";
    if (await this.detectRpm()) return "rpm";
    return "unknown";
  }
}
var ee = new z(() => new D({
  platform: platform,
  readOsRelease: () => Y("/etc/os-release", "utf8"),
  execFileNoThrow: execFileNoThrow,
  execPath: () => process.execPath || process.argv[0] || ""
}));
function b() {
  return ee.of(j().host);
}
function E() {
  return b().detectPacman();
}
function T() {
  return b().detectDeb();
}
function H() {
  return b().detectRpm();
}
function O() {
  return b().detectApk();
}
function VMn() {
  return b().detectHomebrew();
}
function Eit() {
  return b().getHomebrewCaskName();
}
function U() {
  return b().detectWinget();
}
function N() {
  return b().detectMise();
}
function F() {
  return b().detectAsdf();
}
function YFe() {
  return b().getPackageManager();
}
function ie() {
  let e = process.argv[1] || "",
    n = process.execPath || process.argv[0] || "";
  if (platform() === "windows") e = e.split(R.sep).join(v.sep), n = n.split(R.sep).join(v.sep);
  return [e, n];
}
async function oe() {
  let [e, n] = ie();
  if (Hp()) {
    let l = Pe().replace(/\\/g, "/").replace(/\/+$/, "") + "/local/node_modules/";
    if (n.startsWith(l)) return "npm-local";
    if (n.includes("/node_modules/@anthropic-ai/")) return "npm-global";
    if (VMn() || U() || N() || F() || (await E()) || (await T()) || (await H()) || (await O())) return "package-manager";
    return "native";
  }
  if (Ocs()) return "npm-local";
  if (["/usr/local/lib/node_modules", "/usr/lib/node_modules", "/opt/homebrew/lib/node_modules", "/opt/homebrew/bin", "/usr/local/bin", "/.nvm/versions/node/"].some(item => e.includes(item))) return "npm-global";
  if (e.includes("/npm/") || e.includes("/nvm/")) return "npm-global";
  let s = await cI("npm config get prefix", {
      reject: !1
    }),
    o = s.exitCode === 0 ? s.stdout.trim() : null;
  if (o && e.startsWith(o)) return "npm-global";
  return "unknown";
}
class K {
  attempted = !1;
}
var V = new z(() => new K());
function aio() {
  return V.of(j().host).attempted;
}
async function XFe() {
  return V.of(j().host).attempted = !0, await oe();
}
async function re() {
  if (Hp()) {
    try {
      return await B(process.execPath);
    } catch {}
    try {
      let e = await Wd("claude");
      if (e) return e;
    } catch {}
    try {
      return await se().stat(p(y(), ".local/bin/claude")), p(y(), ".local/bin/claude");
    } catch {}
    return "native";
  }
  try {
    return process.argv[0] || "unknown";
  } catch {
    return "unknown";
  }
}
function le() {
  try {
    if (Hp()) return process.execPath || "unknown";
    return process.argv[1] || "unknown";
  } catch {
    return "unknown";
  }
}
async function de() {
  let e = se(),
    n = [],
    path = p(y(), ".claude", "local");
  if (await JFe()) n.push({
    type: "npm-local",
    path: path
  });
  let s = ["@anthropic-ai/claude-code"];
  if ({
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.303",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-18T20:20:57Z",
    GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
    HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "win32"
  }.PACKAGE_URL && {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.303",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-18T20:20:57Z",
    GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
    HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "win32"
  }.PACKAGE_URL !== "@anthropic-ai/claude-code") s.push({
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.303",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-18T20:20:57Z",
    GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
    HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "win32"
  }.PACKAGE_URL);
  let o = await execFileNoThrow("npm", ["-g", "config", "get", "prefix"], {
    cwd: ATe(ce(), y())
  });
  if (o.code === 0 && o.stdout) {
    let r = o.stdout.trim(),
      h = platform() === "windows",
      path_2 = h ? p(r, "claude") : p(r, "bin", "claude"),
      k = !1;
    try {
      await e.stat(path_2), k = !0;
    } catch {}
    if (k) {
      let d = !1;
      try {
        if ((await B(path_2)).includes("/Caskroom/")) d = VMn();
      } catch {}
      if (!d) {
        let m = !1;
        for (let x of s) {
          let P = h ? p(r, "node_modules", x) : p(r, "lib", "node_modules", x);
          try {
            await e.stat(P), m = !0;
            break;
          } catch {}
        }
        if (m) n.push({
          type: "npm-global",
          path: path_2
        });
      }
    } else for (let d of s) {
      let path_3 = h ? p(r, "node_modules", d) : p(r, "lib", "node_modules", d);
      try {
        await e.stat(path_3), n.push({
          type: "npm-global-orphan",
          path: path_3
        });
      } catch {}
    }
  }
  let path_4 = p(y(), ".local", "bin", "claude");
  try {
    await e.stat(path_4), n.push({
      type: "native",
      path: path_4
    });
  } catch {}
  if (ue().installMethod === "native") {
    let path_5 = p(y(), ".local", "share", "claude");
    try {
      if (await e.stat(path_5), !n.some(item => item.type === "native")) n.push({
        type: "native",
        path: path_5
      });
    } catch {}
  }
  return n;
}
function pe(e, n) {
  let i = platform() === "windows",
    s = n;
  if (i) s = n.split(R.sep).join(v.sep).toLowerCase();
  return e.some(item => {
    let l = item;
    if (i) l = item.split(R.sep).join(v.sep).toLowerCase();
    let c = l.replace(/\/+$/, ""),
      r = item.replace(/[/\\]+$/, "");
    return c === s || r === "~/.local/bin" || r === "$HOME/.local/bin";
  });
}
async function me(e) {
  let n = [],
    i = rdn();
  if (i) n.push({
    issue: `otelHeadersHelper is configured but its last invocation failed: ${q4(i, yJn)}`,
    fix: "Run the configured helper manually and confirm it prints a JSON object of string header values. If the value is a file path, confirm the file exists and is executable."
  });
  let s = ue();
  if (e === "development") return n;
  if (e === "native") {
    let c = (a.PATH || "").split(ae),
      r = y(),
      h = p(r, ".local", "bin"),
      w = p(M3(), "claude");
    if (!(await KMt(w)) && !(await p5e(w).catch(() => !1))) n.push({
      issue: `${w} was not created by the native installer (it is not a symlink into the versions/ directory), so auto-update leaves it untouched.`,
      fix: `If you put a launcher wrapper there on purpose, this is expected \u2014 new versions still install under $XDG_DATA_HOME/claude/versions, your launcher decides what runs, and automatic version cleanup is disabled on this machine (the installer cannot tell which version your launcher needs, so it keeps them all). To let Claude Code manage the launcher again, remove ${w} and run \`claude update\`.`
    });
    if (!pe(c, h)) if (platform() === "windows") {
      let d = h.split(v.sep).join(R.sep);
      n.push({
        issue: `Native installation exists but ${d} is not in your PATH`,
        fix: "Add it by opening: System Properties \u2192 Environment Variables \u2192 Edit User PATH \u2192 New \u2192 Add the path above. Then restart your terminal."
      });
    } else {
      let d = Rit(),
        x = Z4e()[d],
        P = x ? x.replace(y(), "~") : "your shell config file";
      n.push({
        issue: "Native installation exists but ~/.local/bin is not in your PATH",
        fix: `Run: echo 'export PATH="$HOME/.local/bin:$PATH"' >> ${P} then open a new terminal or run: source ${P}`
      });
    }
  }
  if (!Fe(process.env.DISABLE_INSTALLATION_CHECKS)) {
    if (e === "npm-local" && s.installMethod !== "local") n.push({
      issue: `Running from local installation but config install method is '${s.installMethod ?? "not set"}'`,
      fix: "Consider using native installation: `claude install`"
    });
    if (e === "native" && s.installMethod !== "native") n.push({
      issue: `Running native installation but config install method is '${s.installMethod ?? "not set"}'`,
      fix: "Run `claude install` to update configuration"
    });
  }
  if (e === "npm-global" && (await JFe())) n.push({
    issue: "Local installation exists but not being used",
    fix: "Consider using native installation: `claude install`"
  });
  let o = await lio(),
    l = await Ics();
  if (e === "npm-local") {
    if (!(await Wd("claude")) && !l) if (o) n.push({
      issue: "Local installation not accessible",
      fix: `Alias exists but points to invalid target: ${o}. Update alias: alias claude="~/.claude/local/claude"`
    });else n.push({
      issue: "Local installation not accessible",
      fix: 'Create alias: alias claude="~/.claude/local/claude"'
    });
  }
  return n;
}
async function fe() {
  return null;
}
function he() {
  if (!Je.isSandboxingEnabled()) return [];
  if (Je.canMaskCredentialWarningFire()) Je.checkDependencies();
  let e = Je.getMaskCredentialWarning();
  if (!e) return [];
  return e.split(" \xB7 ").map(item => {
    if (item.includes("have an empty injectHosts")) return {
      issue: item.replace(/\.\s*If the adapter forced this.*$/, ""),
      fix: "If the adapter forced this (a filesystem.allowRead entry re-opened a denied credential path), remove the conflicting allowRead entry or the deny; if a parent/managed settings tier supplied this mask, sentinel-only is its intended posture (that channel cannot grant injection, so an injectHosts set there is stripped on load) and the entry can only be removed in the parent settings; otherwise set injectHosts or remove the entry"
    };
    if (item.includes("degrade to deny on macOS")) return {
      issue: item.replace(/\.\s*Note that switching them.*$/, ""),
      fix: "Set sandbox.filesystem.disabled: false in user or managed settings (overrides the GrowthBook policy; ignored if managed settings pin the filesystem layer), or remove the mask entries \u2014 a deny provides no protection while the relaxed filesystem policy is active"
    };
    return {
      issue: item.replace(/\s*Enable sandbox\.network\.tlsTerminate.*$/, ""),
      fix: Ufe() ? "Set sandbox.enabled: true plus sandbox.network.tlsTerminate, or remove the mask entries \u2014 TLS termination is never enabled in scrub-only mode" : "Enable sandbox.network.tlsTerminate (or remove the mask entries)"
    };
  });
}
function be() {
  if (platform() !== "linux") return [];
  let e = [],
    n = Je.getLinuxGlobPatternWarnings();
  if (n.length > 0) {
    let i = A(n);
    e.push({
      issue: "Glob patterns in sandbox permission rules are not fully supported on Linux",
      fix: `Found ${n.length} pattern(s): ${i}. On Linux, glob patterns in Edit/Read rules will be ignored.`
    });
  }
  return e;
}
function A(e) {
  let n = e.map(item => _n(ne(item)).trim()),
    i = n.slice(0, 3).join(", "),
    s = n.length - 3;
  return s > 0 ? `${i} (${s} more)` : i;
}
async function we() {
  let e = platform();
  if (e !== "linux" && e !== "wsl") return [];
  if (!Je.isSandboxingEnabled()) return [];
  let n = Je.getConfig();
  if (n === void 0 || n.filesystem.disabled) return [];
  let {
      denyWithinAllow: denyWithinAllow
    } = Je.getFsWriteConfig(),
    s = await Promise.all(denyWithinAllow.map(async item => {
      try {
        let c = await te(item);
        return c.isFile() && c.size === 0 && (c.mode & 146) === 0;
      } catch {
        return !1;
      }
    })),
    o = new Set(denyWithinAllow.filter((item, index) => s[index]));
  if (o.size === 0) return [];
  return [{
    issue: `Stale sandbox mask files left by a killed session: ${A([...o])}`,
    fix: 'Remove each with `rm <path>` while no other Claude Code session is running in that project \u2014 a 0-byte read-only file where a settings file belongs makes "Yes, and don\'t ask again" fail to save, and the sandbox binds it read-only again on every start'
  }];
}
function ye() {
  let e = Je.getUnbracketedIpv6DomainWarnings();
  if (e.length === 0) return [];
  return [{
    issue: "Sandbox network domain entries have unreliable spellings",
    fix: `Found: ${A(e)}. IPv6 literals must be bracketed, with any port 1-65535 and no leading zeros ("[::1]", "[::1]:443"); non-IPv6 entries must not contain wildcards in brackets, extra colons, "@", or path/query characters, and must use their canonical spelling (lowercase, no trailing dot, punycode). Until fixed, enforcement is conservative: a denied entry denies at least what any parseable reading denies (an entry with no parseable reading denies nothing); an allowed entry never allows more than written and may be removed entirely; bracketed IPv6-glob entries apply to in-process checks only, not the sandbox proxy.`
  }];
}
function xe() {
  let e = Je.getUnbracketedIpv6InjectHostWarnings();
  if (e.length === 0) return [];
  return [{
    issue: "Sandbox credential injectHosts entries can never match their destination",
    fix: `Found: ${A(e)}. Credential injection matches the bare, canonically-compressed destination address exactly and ignores ports \u2014 rewrite each entry as that bare form (e.g. "::1", "2001:db8::1"). Bracketed, zone-id, or non-canonical IPv6 spellings never match, so the credential is never injected there.`
  }];
}
async function Tit({
  probeKeychain = !1,
  storageV5: storageV5
} = {}) {
  let installationType = await XFe(),
    version = typeof {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.303",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-18T20:20:57Z",
      GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    } < "u" && {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.303",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-18T20:20:57Z",
      GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION ? `${{
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.303",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-18T20:20:57Z",
      GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION}${eW()}` : "unknown",
    installationPath = await re(),
    invokedBinary = le(),
    multipleInstallations = await de(),
    warnings = await me(installationType),
    {
      checkInstall: checkInstall
    } = await import("B:/~BUN/root/chunk-78jcv1n7.js");
  for (let g of await checkInstall()) if (g.type === "error") warnings.push({
    issue: g.message,
    fix: "Run claude install to repair the installation."
  });
  if (warnings.push(...be()), warnings.push(...ye()), warnings.push(...xe()), warnings.push(...he()), warnings.push(...(await we())), probeKeychain) {
    let g = await fe();
    if (g) warnings.push(g);
  }
  if (installationType === "native") {
    let g = multipleInstallations.filter(item => item.type === "npm-global" || item.type === "npm-global-orphan" || item.type === "npm-local"),
      C = platform() === "windows";
    for (let u of g) if (u.type === "npm-global") {
      let M = "npm -g uninstall @anthropic-ai/claude-code";
      if ({
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.303",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-18T20:20:57Z",
        GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
        HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "win32"
      }.PACKAGE_URL && {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.303",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-18T20:20:57Z",
        GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
        HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "win32"
      }.PACKAGE_URL !== "@anthropic-ai/claude-code") M += ` && npm -g uninstall ${{
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.303",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-18T20:20:57Z",
        GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
        HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "win32"
      }.PACKAGE_URL}`;
      warnings.push({
        issue: `Leftover npm global installation at ${u.path}`,
        fix: `Run: ${M}`
      });
    } else if (u.type === "npm-global-orphan") warnings.push({
      issue: `Orphaned npm global package at ${u.path}`,
      fix: C ? `Run: rmdir /s /q "${u.path}"` : `Run: rm -rf ${u.path}`
    });else if (u.type === "npm-local") warnings.push({
      issue: `Leftover npm local installation at ${u.path}`,
      fix: C ? `Run: rmdir /s /q "${u.path}"` : `Run: rm -rf ${u.path}`
    });
  }
  let configInstallMethod = ue().installMethod || "not set",
    hasUpdatePermissions = null;
  if (installationType === "npm-global") {
    if (hasUpdatePermissions = (await Lcs()).hasPermissions, !hasUpdatePermissions && !vMe()) warnings.push({
      issue: "Can't auto-update: npm global folder isn't writable",
      fix: "Run `claude install` to switch to the native installer (no sudo)\nOr reinstall with a sudo-free npm (e.g. via nvm)\nOr `npm config set prefix ~/.npm-global`, add ~/.npm-global/bin to PATH, then reinstall"
    });
  }
  let m = nIs(),
    ripgrepStatus = {
      working: m.working ?? !0,
      mode: m.mode,
      systemPath: m.mode === "system" ? m.path : null
    },
    packageManager = installationType === "package-manager" ? await YFe() : void 0,
    lastUpdateResult = await Gfr(storageV5);
  return {
    installationType: installationType,
    version: version,
    installationPath: installationPath,
    invokedBinary: invokedBinary,
    configInstallMethod: configInstallMethod,
    autoUpdates: (() => {
      let g = vMe();
      return g ? `disabled (${Ddn(g)})` : "enabled";
    })(),
    hasUpdatePermissions: hasUpdatePermissions,
    lastUpdateResult: lastUpdateResult,
    multipleInstallations: multipleInstallations,
    warnings: warnings,
    packageManager: packageManager,
    ripgrepStatus: ripgrepStatus
  };
}
export { Q4e, Gfr, VMn, Eit, YFe, aio, XFe, Tit };