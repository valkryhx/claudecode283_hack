// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { bn } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { v, B } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Ne } from "B:/~BUN/root/chunk-ekrhn4q1.js";
import { q, j } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { Ht } from "B:/~BUN/root/chunk-17wqwt36.js";
import { zh, QY, Fyn, jxe } from "B:/~BUN/root/chunk-54p0h65d.js";
import { I_e, ce } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Se } from "B:/~BUN/root/chunk-4p6z9qq1.js";
import { O } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { uK } from "B:/~BUN/root/chunk-zksmb712.js";
import { $Bo, D } from "B:/~BUN/root/chunk-6j6ra85q.js";
import { L } from "B:/~BUN/root/chunk-z1enakv9.js";
import { vo } from "B:/~BUN/root/chunk-yv67t8hr.js";
function isRunningWithBun() {
  return !0;
}
function Yd() {
  return typeof Bun < "u" && Bun.isStandaloneExecutable === !0;
}
import { lstat as z, rmdir as Q, unlink as oo } from "fs/promises";
async function iA(o) {
  try {
    return await oo(o), "removed";
  } catch (error) {
    if (v(error) === "ENOENT") return "absent";
    try {
      return await Q(o), "removed";
    } catch (_) {
      let E = v(_);
      if (E === "ENOTEMPTY" || E === "EEXIST") return "directory";
      if (E === "ENOENT") {
        if (await z(o).then(() => !1, r => v(r) === "ENOENT")) return "absent";
        throw error;
      }
      throw E === "ENOTDIR" ? error : _;
    }
  }
}
import { constants as I } from "fs";
import { lstat as N, open as to, readdir as _o, unlink as f } from "fs/promises";
import { join as x } from "path";
function Phn(o) {
  return !o.isDirectory() && !o.isFile() && !o.isSymbolicLink() && !o.isFIFO() && !o.isSocket() && !o.isBlockDevice() && !o.isCharacterDevice();
}
async function cxe(o, t) {
  let _;
  if (!Phn(t)) _ = {
    isDirectory: t.isDirectory(),
    isFile: t.isFile(),
    isSymbolicLink: t.isSymbolicLink()
  };else {
    let E = await N(x(o, t.name));
    _ = {
      isDirectory: E.isDirectory(),
      isFile: E.isFile(),
      isSymbolicLink: E.isSymbolicLink(),
      size: E.size
    };
  }
  if (_.isDirectory && O() === "windows") {
    let E = await jxe(x(o, t.name));
    switch (E.kind) {
      case "junction":
        return {
          isDirectory: !1,
          isFile: !1,
          isSymbolicLink: !0,
          linkTarget: E.target
        };
      case "directory":
        break;
      case "absent":
        break;
      case "error":
        throw E.error;
    }
  }
  return _;
}
async function oBe(o, t) {
  try {
    return await cxe(o, t);
  } catch (error) {
    if (B(error)) return;
    throw error;
  }
}
async function sBe(o) {
  let t;
  try {
    t = await N(o);
  } catch (error) {
    if (v(error) !== "ENOENT") throw error;
    return;
  }
  if (t.isFile()) {
    if (t.nlink > 1) await f(o);
    return;
  }
  if (t.isSymbolicLink()) {
    await f(o);
    return;
  }
  await qa(o);
}
var F = 16;
async function qa(path) {
  if ((await iA(path)) !== "directory") return;
  let _;
  try {
    _ = await N(path);
  } catch (error) {
    if (v(error) === "ENOENT") return;
    throw error;
  }
  if (!_.isDirectory() || _.isSymbolicLink() || O() === "windows" && (await Eo(path))) {
    await iA(path);
    return;
  }
  let E;
  try {
    E = await _o(path);
  } catch (error) {
    let e = v(error);
    if (e === "ENOENT" || e === "ENOTDIR") return;
    throw error;
  }
  for (let r = 0; r < E.length; r += F) await Promise.all(E.slice(r, r + F).map(item => qa(x(path, item))));
  if ((await iA(path)) === "directory") throw Object.assign(Error("directory refilled during removal"), {
    code: "ENOTEMPTY",
    path: path
  });
}
async function I5n(o, t) {
  let _ = O() === "windows" ? 0 : I.O_NOFOLLOW | I.O_NONBLOCK,
    E = await to(o, I.O_WRONLY | I.O_CREAT | I.O_TRUNC | _, 438);
  try {
    await E.writeFile(t, "utf-8");
  } finally {
    await E.close();
  }
}
async function Eo(o) {
  let t = await jxe(o);
  if (t.kind === "error") throw t.error;
  return t.kind === "junction";
}
import { delimiter as K, isAbsolute as W } from "path";
function ro(o) {
  let t = process.cwd();
  return o.filter(item => !Fyn(item, t));
}
function g(o) {
  return Y(o, Bun.which(o));
}
function Y(o, t) {
  if (!t || !1 || W(o)) return t;
  return ro([t])[0] ?? null;
}
var sc = async o => g(o),
  I$ = g;
function C_e(o, t) {
  let _ = Mzr(t);
  return _ === "" ? null : Dzr(o, _);
}
function Mzr(o) {
  return o.split(K).map(item => Ihn(item)).filter(item => so(item)).join(K);
}
function Ihn(o, t = "win32") {
  return t === "win32" ? o.replaceAll('"', "") : o;
}
function so(o) {
  if (!W(o)) return !1;
  return /^(?:[a-zA-Z]:[\\/]|[\\/]{2})/.test(o);
}
function Dzr(o, PATH) {
  return Y(o, Bun.which(o, {
    PATH: PATH
  }));
}
import { constants as eo } from "fs";
import { access as l, readdir as no, readFile as Co, readlink as Ao } from "fs/promises";
import { homedir as Oo } from "os";
import { delimiter as Do, join as i, resolve as X } from "path";
function wslInteropExistsSync() {
  return !1;
}
function readHypervisorUuidSync() {
  return;
}
function dockerenvExistsSync() {
  return !1;
}
function To() {
  if (ce().existsSync(i(Se(), ".config.json"))) return i(Se(), ".config.json");
  return O5n();
}
function O5n() {
  let o = `.claude${uK()}.json`;
  return i(process.env.CLAUDE_CONFIG_DIR || Oo(), o);
}
function la() {
  return C().getGlobalClaudeFile();
}
async function probeInternalNetworkAccess() {
  return null;
}
async function c(o) {
  try {
    return !!(await sc(o));
  } catch {
    return !1;
  }
}
async function co() {
  let o = [];
  if (await c("npm")) o.push("npm");
  if (await c("yarn")) o.push("yarn");
  if (await c("pnpm")) o.push("pnpm");
  return o;
}
async function po() {
  let o = [];
  if (await c("bun")) o.push("bun");
  if (await c("deno")) o.push("deno");
  if (await c("node")) o.push("node");
  return o;
}
var M5n = ["git", "node", "npm", "npx", "yarn", "pnpm", "bun", "deno", "tsc", "python", "python3", "py", "pip", "uv", "poetry", "ruby", "gem", "bundle", "rake", "dotnet", "msbuild", "nuget", "cl", "nmake", "cmake", "ninja", "make", "gcc", "g++", "clang", "cargo", "rustc", "go", "java", "javac", "mvn", "gradle", "docker"],
  Ro = 1000;
async function So(o) {
  try {
    return /appinstaller/i.test(await Ao(o));
  } catch {
    return !1;
  }
}
async function Lzr(o) {
  if (o === "" || QY(o) || zh(o)) return !1;
  return !(await I_e(X(o)));
}
async function p1t(o, t) {
  let _ = O() === "windows",
    E = new Set(o),
    r = _ ? (process.env.PATHEXT ?? ".COM;.EXE;.BAT;.CMD").toLowerCase().split(";").filter(Boolean) : [],
    e = L((process.env.PATH ?? "").split(Do).map(item => item.replace(/^"|"$/g, "")).filter(Boolean));
  await Promise.all(e.map(async item => {
    if (!(await Lzr(item))) return;
    let n;
    try {
      n = await no(item, {
        withFileTypes: !0
      });
    } catch {
      return;
    }
    let R = _ && /[\\/]microsoft[\\/]windowsapps[\\/]?$/i.test(item);
    for (let A of n) {
      if (A.isDirectory()) continue;
      let S = A.name;
      if (_) {
        let T = S.toLowerCase(),
          U = T.lastIndexOf(".");
        if (U <= 0 || !r.includes(T.slice(U))) continue;
        S = T.slice(0, U);
      }
      if (!E.has(S) || t.has(S)) continue;
      if (_) {
        if (R && (await So(i(item, A.name)))) continue;
      } else {
        let T = i(item, A.name);
        if ((A.isSymbolicLink() || Phn(A)) && (await I_e(X(T)))) continue;
        try {
          await l(T, eo.X_OK);
        } catch {
          continue;
        }
      }
      t.add(S);
    }
  }));
}
async function Io() {
  let o = new Set();
  try {
    await Ht(p1t(M5n, o), Ro, "build tool PATH scan timed out");
  } catch {}
  return M5n.filter(item => o.has(item));
}
function jUo() {
  return C().getDetectedBuildTools();
}
function io(o) {
  try {
    if (!o.isWslEnvironment()) return !1;
    let t = I$("npm");
    if (t === null) return !1;
    return t.startsWith("/mnt/c/");
  } catch (error) {
    return !1;
  }
}
function isConductor() {
  return process.env.__CFBundleIdentifier === "com.conductor.app";
}
var KJ = ["pycharm", "intellij", "webstorm", "phpstorm", "rubymine", "clion", "goland", "rider", "datagrip", "appcode", "dataspell", "aqua", "gateway", "fleet", "jetbrains", "androidstudio"];
function Nzr(o) {
  let t = o.toLowerCase();
  return t.includes("windsurf") || t.includes("devin.app") || t.includes("devin desktop") || t.includes("devin-desktop") || /appdata[\\/]local[\\/](programs[\\/])?devin[\\/]/.test(t);
}
function xo() {
  if (process.env.CURSOR_TRACE_ID) return "cursor";
  let o = process.env.VSCODE_GIT_ASKPASS_MAIN?.toLowerCase() ?? "";
  if (o.includes("cursor")) return "cursor";
  if (Nzr(o)) return "windsurf";
  if (o.includes("antigravity")) return "antigravity";
  let t = process.env.__CFBundleIdentifier?.toLowerCase();
  if (t?.includes("vscodium")) return "codium";
  if (t?.includes("windsurf") || t?.includes("devin")) return "windsurf";
  if (t?.includes("com.google.android.studio")) return "androidstudio";
  if (t) {
    for (let _ of KJ) if (t.includes(_)) return _;
  }
  if (process.env.VisualStudioVersion) return "visualstudio";
  if (process.env.TERMINAL_EMULATOR === "JetBrains-JediTerm") return "pycharm";
  if (process.env.TERM === "xterm-ghostty") return "ghostty";
  if (process.env.TERM?.includes("kitty")) return "kitty";
  if (process.env.TERM_PROGRAM) {
    if (/^devin([ -]desktop)?$/i.test(process.env.TERM_PROGRAM)) return "windsurf";
    return process.env.TERM_PROGRAM;
  }
  if (process.env.TMUX) return "tmux";
  if (process.env.STY) return "screen";
  if (process.env.KONSOLE_VERSION) return "konsole";
  if (process.env.GNOME_TERMINAL_SERVICE) return "gnome-terminal";
  if (process.env.XTERM_VERSION) return "xterm";
  if (process.env.VTE_VERSION) return "vte-based";
  if (process.env.TERMINATOR_UUID) return "terminator";
  if (process.env.KITTY_WINDOW_ID) return "kitty";
  if (process.env.ALACRITTY_LOG) return "alacritty";
  if (process.env.TILIX_ID) return "tilix";
  if (process.env.WT_SESSION) return "windows-terminal";
  if (process.env.SESSIONNAME && process.env.TERM === "cygwin") return "cygwin";
  if (process.env.MSYSTEM) return process.env.MSYSTEM.toLowerCase();
  if (process.env.ConEmuANSI || process.env.ConEmuPID || process.env.ConEmuTask) return "conemu";
  if (process.env.WSL_DISTRO_NAME) return `wsl-${process.env.WSL_DISTRO_NAME}`;
  if (isSSH()) return "ssh-session";
  if (process.env.TERM) {
    let TERM = process.env.TERM;
    if (TERM.includes("alacritty")) return "alacritty";
    if (TERM.includes("rxvt")) return "rxvt";
    if (TERM.includes("termite")) return "termite";
    return process.env.TERM;
  }
  if (!process.stdout.isTTY) return "non-interactive";
  return null;
}
class h {
  sources;
  globalClaudeFile;
  packageManagers;
  runtimes;
  detectedBuildTools;
  wslEnvironment;
  npmFromWindowsPath;
  deploymentEnvironment;
  primedWslInteropExists;
  primedHypervisorUuid;
  primedDockerenvExists;
  fallbackWslInteropExists;
  fallbackHypervisorUuid;
  fallbackDockerenvExists;
  constructor(o) {
    this.sources = o;
  }
  getGlobalClaudeFile() {
    return this.globalClaudeFile ??= To();
  }
  seedGlobalClaudeFile(o) {
    if (this.globalClaudeFile === void 0) return this.globalClaudeFile = o, "seeded";
    return this.globalClaudeFile === o ? "unchanged" : "conflict";
  }
  getPackageManagers() {
    return this.packageManagers ??= co();
  }
  getRuntimes() {
    return this.runtimes ??= po();
  }
  getDetectedBuildTools() {
    return this.detectedBuildTools ??= Io();
  }
  isWslEnvironment() {
    return this.wslEnvironment ??= this.primedWslInteropExists ?? !1;
  }
  isNpmFromWindowsPath() {
    return this.npmFromWindowsPath ??= io(this);
  }
  hypervisorUuid() {
    return this.primedHypervisorUuid ?? (this.fallbackHypervisorUuid ??= this.sources.readHypervisorUuidSync() ?? "");
  }
  isDockerenvPresent() {
    return this.primedDockerenvExists ?? (this.fallbackDockerenvExists ??= this.sources.dockerenvExistsSync());
  }
  detectDeploymentEnvironment() {
    return this.deploymentEnvironment ??= lo(this);
  }
  async prime() {
    this.primedWslInteropExists;
    return;
  }
}
var No = new q(() => new h({
  wslInteropExistsSync: wslInteropExistsSync,
  readHypervisorUuidSync: readHypervisorUuidSync,
  dockerenvExistsSync: dockerenvExistsSync
}));
function C() {
  return No.of(j().host);
}
function WUo() {
  return C().prime();
}
function Ohn() {
  return C().isDockerenvPresent();
}
function detectDeploymentEnvironment() {
  return C().detectDeploymentEnvironment();
}
function lo(o) {
  if (Ne(process.env.CODESPACES)) return "codespaces";
  if (process.env.GITPOD_WORKSPACE_ID) return "gitpod";
  if (Ne(process.env.CODER) || process.env.CODER_WORKSPACE_NAME) return "coder";
  if (Ne(process.env.DEVPOD) || process.env.DEVPOD_WORKSPACE_UID) return "devpod";
  if (process.env.DAYTONA_WS_ID) return "daytona";
  if (Ne(process.env.GOOGLE_CLOUD_WORKSTATIONS)) return "gcp-cloud-workstations";
  if (process.env.C9_PID || process.env.C9_USER) return "aws-cloud9";
  if (process.env.REPL_ID || process.env.REPL_SLUG) return "replit";
  if (process.env.PROJECT_DOMAIN) return "glitch";
  if (Ne(process.env.VERCEL)) return "vercel";
  if (process.env.RAILWAY_ENVIRONMENT_NAME || process.env.RAILWAY_SERVICE_NAME) return "railway";
  if (Ne(process.env.RENDER)) return "render";
  if (Ne(process.env.NETLIFY)) return "netlify";
  if (process.env.DYNO) return "heroku";
  if (process.env.FLY_APP_NAME || process.env.FLY_MACHINE_ID) return "fly.io";
  if (Ne(process.env.CF_PAGES)) return "cloudflare-pages";
  if (process.env.DENO_DEPLOYMENT_ID) return "deno-deploy";
  if (process.env.AWS_LAMBDA_FUNCTION_NAME) return "aws-lambda";
  if (process.env.AWS_EXECUTION_ENV === "AWS_ECS_FARGATE") return "aws-fargate";
  if (process.env.AWS_EXECUTION_ENV === "AWS_ECS_EC2") return "aws-ecs";
  if (o.hypervisorUuid().startsWith("ec2")) return "aws-ec2";
  if (process.env.K_SERVICE) return "gcp-cloud-run";
  if (process.env.GOOGLE_CLOUD_PROJECT) return "gcp";
  if (process.env.WEBSITE_SITE_NAME || process.env.WEBSITE_SKU) return "azure-app-service";
  if (process.env.AZURE_FUNCTIONS_ENVIRONMENT) return "azure-functions";
  if (process.env.APP_URL?.includes("ondigitalocean.app")) return "digitalocean-app-platform";
  if (process.env.SPACE_CREATOR_USER_ID) return "huggingface-spaces";
  if (Ne(process.env.GITHUB_ACTIONS)) return "github-actions";
  if (Ne(process.env.GITLAB_CI)) return "gitlab-ci";
  if (process.env.CIRCLECI) return "circleci";
  if (process.env.BUILDKITE) return "buildkite";
  if (Ne(!1)) return "ci";
  if (process.env.KUBERNETES_SERVICE_HOST) return "kubernetes";
  if (o.isDockerenvPresent()) return "docker";
  if (p.platform === "darwin") return "unknown-darwin";
  if (p.platform === "linux") return "unknown-linux";
  if (p.platform === "win32") return "unknown-win32";
  return "unknown";
}
function isSSH() {
  return !!(process.env.SSH_CONNECTION || process.env.SSH_CLIENT || process.env.SSH_TTY);
}
var p = {
  probeInternalNetworkAccess: probeInternalNetworkAccess,
  isCI: Ne(!1),
  platform: ["win32", "darwin"].includes("win32") ? "win32" : "linux",
  arch: "x64",
  nodeVersion: process.version,
  terminal: xo(),
  isSSH: isSSH,
  getPackageManagers() {
    return C().getPackageManagers();
  },
  getRuntimes() {
    return C().getRuntimes();
  },
  isRunningWithBun: isRunningWithBun,
  isWslEnvironment() {
    return C().isWslEnvironment();
  },
  isNpmFromWindowsPath() {
    return C().isNpmFromWindowsPath();
  },
  isConductor: isConductor,
  detectDeploymentEnvironment: detectDeploymentEnvironment
};
function f1t() {
  let CLAUDE_CODE_HOST_PLATFORM = process.env.CLAUDE_CODE_HOST_PLATFORM;
  if (CLAUDE_CODE_HOST_PLATFORM === "win32" || CLAUDE_CODE_HOST_PLATFORM === "darwin" || CLAUDE_CODE_HOST_PLATFORM === "linux") return CLAUDE_CODE_HOST_PLATFORM;
  return p.platform;
}
var Po = new Set(["zsh", "bash", "fish", "sh", "dash", "ash", "ksh", "tcsh", "csh", "nu", "nushell", "pwsh", "powershell", "cmd", "elvish", "xonsh", "ion"]);
function Mhn(o) {
  if (!o) return bn("none");
  let t = o.split(/[/\\]/).pop().toLowerCase().replace(/\.exe$/, "");
  return bn(Po.has(t) ? t : "other");
}
function D5n() {
  return Mhn(process.env.SHELL || process.env.COMSPEC || "");
}
var YJ = ["us", "eu", "apac", "jp", "au", "us-gov", "global"],
  J = ["us", "eu", "apac", "jp", "au", "global"];
var P = {};
vo(P, {
  AGENT_PROXY_AUTH_TOKEN: () => Yo,
  ANTHROPIC_API_KEY: () => Mo,
  ANTHROPIC_AUTH_TOKEN: () => ao,
  ANTHROPIC_AWS_API_KEY: () => bo,
  ANTHROPIC_FEDERATION_RULE_ID: () => Mt,
  ANTHROPIC_FOUNDRY_API_KEY: () => Go,
  ANTHROPIC_FOUNDRY_AUTH_TOKEN: () => mo,
  ANTHROPIC_ORGANIZATION_ID: () => ut,
  ANTHROPIC_PROFILE: () => bt,
  ANTHROPIC_WORKSPACE_ID: () => Bt,
  AWS_BEARER_TOKEN_BEDROCK: () => Bo,
  AWS_CONTAINER_CREDENTIALS_FULL_URI: () => Ko,
  AWS_CONTAINER_CREDENTIALS_RELATIVE_URI: () => Fo,
  AWS_ROLE_ARN: () => fo,
  AWS_WEB_IDENTITY_TOKEN_FILE: () => Ho,
  CLAUDE_CODE_ACCOUNT_TAGGED_ID: () => mt,
  CLAUDE_CODE_ACCOUNT_UUID: () => Gt,
  CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR: () => Xo,
  CLAUDE_CODE_API_KEY_HELPER_TTL_MS: () => ct,
  CLAUDE_CODE_AUTH_FAIL_EXIT_MS: () => Lt,
  CLAUDE_CODE_AWS_CHAIN_RESOLVE_TIMEOUT_MS: () => Pt,
  CLAUDE_CODE_CUSTOM_OAUTH_URL: () => qo,
  CLAUDE_CODE_DESIGN_OAUTH_CLIENT_ID: () => Qo,
  CLAUDE_CODE_ENABLE_PROXY_AUTH_HELPER: () => pt,
  CLAUDE_CODE_FEDERATION_CACHE_DIR: () => at,
  CLAUDE_CODE_GATEWAY_TOKEN_FILE_DESCRIPTOR: () => ko,
  CLAUDE_CODE_HFI_BEARER_TOKEN: () => go,
  CLAUDE_CODE_HOST_AUTH_ENV_VAR: () => Et,
  CLAUDE_CODE_HOST_AUTH_REFRESH_TIMEOUT_MS: () => _t,
  CLAUDE_CODE_HOST_CREDS_FILE: () => rt,
  CLAUDE_CODE_OAUTH_401_WAIT_MS: () => Tt,
  CLAUDE_CODE_OAUTH_CLIENT_ID: () => zo,
  CLAUDE_CODE_OAUTH_REFRESH_TOKEN: () => Jo,
  CLAUDE_CODE_OAUTH_SCOPES: () => $o,
  CLAUDE_CODE_OAUTH_TOKEN: () => uo,
  CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR: () => ho,
  CLAUDE_CODE_ORGANIZATION_UUID: () => dt,
  CLAUDE_CODE_PROXY_AUTH_HELPER_TTL_MS: () => Rt,
  CLAUDE_CODE_RATE_LIMIT_TIER: () => Kt,
  CLAUDE_CODE_SDK_HAS_HOST_AUTH_REFRESH: () => tt,
  CLAUDE_CODE_SDK_HAS_OAUTH_REFRESH: () => ot,
  CLAUDE_CODE_SESSION_ACCESS_TOKEN: () => st,
  CLAUDE_CODE_SKIP_ANTHROPIC_AWS_AUTH: () => Ut,
  CLAUDE_CODE_SKIP_ANTHROPIC_GOOGLE_CLOUD_AUTH: () => xt,
  CLAUDE_CODE_SKIP_AWS_CRED_CACHE: () => lt,
  CLAUDE_CODE_SKIP_BEDROCK_AUTH: () => St,
  CLAUDE_CODE_SKIP_FOUNDRY_AUTH: () => it,
  CLAUDE_CODE_SKIP_MANTLE_AUTH: () => Nt,
  CLAUDE_CODE_SKIP_VERTEX_AUTH: () => It,
  CLAUDE_CODE_SUBSCRIPTION_TYPE: () => Ft,
  CLAUDE_CODE_USER_EMAIL: () => ft,
  CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR: () => Zo,
  CLAUDE_LOCAL_OAUTH_API_BASE: () => At,
  CLAUDE_LOCAL_OAUTH_APPS_BASE: () => Ot,
  CLAUDE_LOCAL_OAUTH_CONSOLE_BASE: () => Dt,
  CLAUDE_SESSION_INGRESS_TOKEN_FILE: () => jo,
  CLAUDE_TRUSTED_DEVICE_TOKEN: () => et,
  CLOUDSDK_AUTH_ACCESS_TOKEN: () => Wo,
  ENVIRONMENT_SERVICE_KEY: () => yo,
  MCP_CLIENT_SECRET: () => Vo,
  MCP_XAA_IDP_CLIENT_SECRET: () => wo,
  USE_LOCAL_OAUTH: () => nt,
  USE_STAGING_OAUTH: () => Ct
});
var Mo = D.str(),
  ao = D.str(),
  uo = D.str(),
  Bo = D.str(),
  bo = D.str(),
  Go = D.str(),
  mo = D.str(),
  Ho = D.str(),
  fo = D.str(),
  Fo = D.str(),
  Ko = D.str(),
  Wo = D.str(),
  go = D.str(),
  Yo = D.str(),
  yo = D.str(),
  Vo = D.str(),
  wo = D.str(),
  Xo = D.str(),
  ho = D.str(),
  ko = D.str(),
  Zo = D.str(),
  jo = D.str(),
  Jo = D.str(),
  zo = D.str(),
  Qo = D.str(),
  $o = D.str(),
  qo = D.str(),
  ot = D.bool(),
  tt = D.bool(),
  _t = D.int({
    min: 1
  }),
  Et = D.str(),
  rt = D.str(),
  st = D.str(),
  et = D.str(),
  nt = D.bool(),
  Ct = D.bool(),
  At = D.str(),
  Ot = D.str(),
  Dt = D.str(),
  Tt = D.int({
    min: 0
  }),
  Lt = D.int({
    min: 0
  }),
  ct = D.int(),
  pt = D.bool(),
  Rt = D.int(),
  St = D.bool(),
  It = D.bool(),
  it = D.bool(),
  Ut = D.bool(),
  xt = D.bool(),
  Nt = D.bool(),
  lt = D.bool(),
  Pt = D.int({
    min: 1,
    max: 2147483647
  }),
  Mt = D.str(),
  at = D.str(),
  ut = D.str(),
  Bt = D.str(),
  bt = D.str(),
  Gt = D.str(),
  mt = D.str(),
  dt = D.str(),
  ft = D.str(),
  Ft = D.str(),
  Kt = D.str();
var M = {};
vo(M, {
  ANT_CLAUDE_CODE_METRICS_ENDPOINT: () => k_,
  ANT_OTEL_EXPORTER_OTLP_ENDPOINT: () => g_,
  ANT_OTEL_EXPORTER_OTLP_HEADERS: () => Y_,
  ANT_OTEL_EXPORTER_OTLP_PROTOCOL: () => y_,
  ANT_OTEL_LOGS_EXPORTER: () => V_,
  ANT_OTEL_METRICS_EXPORTER: () => w_,
  ANT_OTEL_RESOURCE_ATTRIBUTES: () => h_,
  ANT_OTEL_TRACES_EXPORTER: () => X_,
  BETA_TRACING_ENDPOINT: () => Z_,
  CLAUDE_CODE_BENCH_LIVE_COUNTS: () => o_,
  CLAUDE_CODE_BYOC_ENABLE_DATADOG: () => n_,
  CLAUDE_CODE_DATADOG_FLUSH_INTERVAL_MS: () => s_,
  CLAUDE_CODE_DD_ERROR_TRACKING_FLUSH_INTERVAL_MS: () => e_,
  CLAUDE_CODE_DEBUG_LOGS_DIR: () => Yt,
  CLAUDE_CODE_DEBUG_LOG_LEVEL: () => gt,
  CLAUDE_CODE_DEBUG_REPAINTS: () => yt,
  CLAUDE_CODE_DIAGNOSTICS_FILE: () => Vt,
  CLAUDE_CODE_ENHANCED_TELEMETRY_BETA: () => t_,
  CLAUDE_CODE_FRAME_TIMING_LOG: () => jt,
  CLAUDE_CODE_FRAME_TIMING_SAMPLE_EVERY: () => Jt,
  CLAUDE_CODE_OTEL_CONTENT_MAX_LENGTH: () => H_,
  CLAUDE_CODE_OTEL_DIAG_STDERR: () => C_,
  CLAUDE_CODE_OTEL_FLUSH_TIMEOUT_MS: () => __,
  CLAUDE_CODE_OTEL_HEADERS_HELPER_DEBOUNCE_MS: () => r_,
  CLAUDE_CODE_OTEL_SHUTDOWN_TIMEOUT_MS: () => E_,
  CLAUDE_CODE_PERFETTO_TRACE: () => kt,
  CLAUDE_CODE_PERFETTO_WRITE_INTERVAL_S: () => Zt,
  CLAUDE_CODE_PROFILE_STARTUP: () => ht,
  CLAUDE_CODE_SESSION_LOG: () => zt,
  CLAUDE_CODE_TEE_SDK_STDOUT: () => qt,
  CLAUDE_CODE_TERMINAL_RECORDING: () => $t,
  CLAUDE_DEBUG: () => Wt,
  CLAUDE_PTY_RECORD: () => Qt,
  DEBUG: () => vt,
  DEBUG_CLAUDE_AGENT_SDK: () => wt,
  DEBUG_SDK: () => Xt,
  OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT: () => b_,
  OTEL_EXPORTER_OTLP_ENDPOINT: () => T_,
  OTEL_EXPORTER_OTLP_HEADERS: () => L_,
  OTEL_EXPORTER_OTLP_LOGS_ENDPOINT: () => p_,
  OTEL_EXPORTER_OTLP_LOGS_HEADERS: () => R_,
  OTEL_EXPORTER_OTLP_LOGS_PROTOCOL: () => S_,
  OTEL_EXPORTER_OTLP_METRICS_ENDPOINT: () => I_,
  OTEL_EXPORTER_OTLP_METRICS_HEADERS: () => i_,
  OTEL_EXPORTER_OTLP_METRICS_PROTOCOL: () => U_,
  OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE: () => x_,
  OTEL_EXPORTER_OTLP_PROTOCOL: () => c_,
  OTEL_EXPORTER_OTLP_TRACES_ENDPOINT: () => N_,
  OTEL_EXPORTER_OTLP_TRACES_HEADERS: () => l_,
  OTEL_EXPORTER_OTLP_TRACES_PROTOCOL: () => P_,
  OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT: () => G_,
  OTEL_LOGS_EXPORTER: () => O_,
  OTEL_LOGS_EXPORT_INTERVAL: () => a_,
  OTEL_LOG_ASSISTANT_RESPONSES: () => f_,
  OTEL_LOG_MANAGED_SETTINGS: () => W_,
  OTEL_LOG_RAW_API_BODIES: () => v_,
  OTEL_LOG_TOOL_CONTENT: () => F_,
  OTEL_LOG_TOOL_DETAILS: () => K_,
  OTEL_LOG_USER_PROMPTS: () => d_,
  OTEL_METRICS_EXPORTER: () => A_,
  OTEL_METRIC_EXPORT_INTERVAL: () => M_,
  OTEL_RESOURCE_ATTRIBUTES: () => B_,
  OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT: () => m_,
  OTEL_TRACES_EXPORTER: () => D_,
  OTEL_TRACES_EXPORT_INTERVAL: () => u_
});
var Wt = D.bool(),
  vt = D.str(),
  gt = D.str(),
  Yt = D.str(),
  yt = D.bool(),
  Vt = D.str(),
  wt = D.bool(),
  Xt = D.bool(),
  ht = D.bool(),
  kt = D.str(),
  Zt = D.int(),
  jt = D.str(),
  Jt = D.int(),
  zt = D.str(),
  Qt = D.str(),
  $t = D.str(),
  qt = D.bool(),
  o_ = D.bool(),
  t_ = D.bool(),
  __ = D.int(),
  E_ = D.int(),
  r_ = D.int(),
  s_ = D.int({
    min: 1
  }),
  e_ = D.int({
    min: 1
  }),
  n_ = D.bool(),
  C_ = D.bool(),
  A_ = D.str(),
  O_ = D.str(),
  D_ = D.str(),
  T_ = D.str(),
  L_ = D.str(),
  c_ = D.str(),
  p_ = D.str(),
  R_ = D.str(),
  S_ = D.str(),
  I_ = D.str(),
  i_ = D.str(),
  U_ = D.str(),
  x_ = D.str(),
  N_ = D.str(),
  l_ = D.str(),
  P_ = D.str(),
  M_ = D.int(),
  a_ = D.int(),
  u_ = D.int(),
  B_ = D.str(),
  b_ = D.int({
    min: 0
  }),
  G_ = D.int({
    min: 0
  }),
  m_ = D.int({
    min: 0
  }),
  H_ = D.int({
    min: 1,
    digitsOnly: !0
  }),
  d_ = D.bool(),
  f_ = D.triBool(),
  F_ = D.bool(),
  K_ = D.bool(),
  W_ = D.bool(),
  v_ = D.bool(),
  g_ = D.str(),
  Y_ = D.str(),
  y_ = D.str(),
  V_ = D.str(),
  w_ = D.str(),
  X_ = D.str(),
  h_ = D.str(),
  k_ = D.str(),
  Z_ = D.str();
var u = {};
vo(u, {
  CLAUDE_AX_PREPARK_MS: () => z_,
  CLAUDE_AX_SCREEN_READER: () => j_,
  CLAUDE_AX_STARTUP_QUIET_MS: () => J_,
  CLAUDE_CHROME_CLASSIFIER_FLOOR: () => Q_,
  CLAUDE_CODE_ACCESSIBILITY: () => Ls,
  CLAUDE_CODE_ACT_DONT_REDERIVE: () => cs,
  CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT: () => q_,
  CLAUDE_CODE_AMBER_ASTROLABE: () => Vr,
  CLAUDE_CODE_ARTIFACT_ASSETS: () => vs,
  CLAUDE_CODE_ARTIFACT_COMMENTS: () => Ps,
  CLAUDE_CODE_ARTIFACT_COMMENTS_AUTOREACT: () => Ms,
  CLAUDE_CODE_ARTIFACT_COMMENT_FAST_ACK: () => us,
  CLAUDE_CODE_ARTIFACT_COMMENT_FAST_ACK_FIXED: () => Bs,
  CLAUDE_CODE_ARTIFACT_COMMENT_RESPONDER: () => as,
  CLAUDE_CODE_ARTIFACT_DB: () => bs,
  CLAUDE_CODE_ARTIFACT_DB_STR_REPLACE: () => Gs,
  CLAUDE_CODE_ARTIFACT_DELETE: () => Hs,
  CLAUDE_CODE_ARTIFACT_FRESH_READ: () => Zs,
  CLAUDE_CODE_ARTIFACT_HOT: () => Ys,
  CLAUDE_CODE_ARTIFACT_MULTI_FILE: () => gs,
  CLAUDE_CODE_ARTIFACT_OPENING_PREFETCH: () => js,
  CLAUDE_CODE_ARTIFACT_OPEN_ACTION: () => fs,
  CLAUDE_CODE_ARTIFACT_PATH_PIN: () => ys,
  CLAUDE_CODE_ARTIFACT_PIN: () => Fs,
  CLAUDE_CODE_ARTIFACT_PRESENCE: () => Ws,
  CLAUDE_CODE_ARTIFACT_PREVIEW: () => ds,
  CLAUDE_CODE_ARTIFACT_QUICKSTART: () => ks,
  CLAUDE_CODE_ARTIFACT_REPL: () => ms,
  CLAUDE_CODE_ARTIFACT_ROOM: () => Ks,
  CLAUDE_CODE_ARTIFACT_START_KIT: () => Js,
  CLAUDE_CODE_ARTIFACT_TEXT_VARIANT: () => ws,
  CLAUDE_CODE_ARTIFACT_TOOLSET: () => Vs,
  CLAUDE_CODE_ARTIFACT_TYPES: () => Xs,
  CLAUDE_CODE_ARTIFACT_TYPE_CATALOG: () => hs,
  CLAUDE_CODE_ARTIFACT_TYPE_CLOUD_CREATE: () => zs,
  CLAUDE_CODE_ARTIFACT_VERIFY: () => Qs,
  CLAUDE_CODE_ATTRIBUTION_ANNOUNCEMENT: () => ps,
  CLAUDE_CODE_AUTO_CONNECT_IDE: () => $s,
  CLAUDE_CODE_AUTO_MODE_SERVER: () => qs,
  CLAUDE_CODE_BASALT_COVE: () => eE,
  CLAUDE_CODE_BASH_EDIT_DIFF: () => rE,
  CLAUDE_CODE_BASH_OUTPUT_AUDIENCE_NOTE: () => Ns,
  CLAUDE_CODE_BASH_SANDBOX_SHOW_INDICATOR: () => oe,
  CLAUDE_CODE_BG_TASKS_REPORT_RUNNING: () => RE,
  CLAUDE_CODE_BISON_CAIRN: () => wr,
  CLAUDE_CODE_BREEZY_HORIZON: () => nE,
  CLAUDE_CODE_BUBBLEWRAP: () => te,
  CLAUDE_CODE_CCR_EARLY_HYDRATE_PREFETCH: () => _e,
  CLAUDE_CODE_CCR_EARLY_REMOTE_CONNECT: () => Ee,
  CLAUDE_CODE_CHILD_SESSION: () => re,
  CLAUDE_CODE_CHROME_MCP_ORG_DENIED: () => ee,
  CLAUDE_CODE_COLD_COMPACT: () => ne,
  CLAUDE_CODE_COMMIT_BETWEEN_KEYS: () => Ce,
  CLAUDE_CODE_COORDINATOR_FORCE_WORKER_INHERIT_MODEL: () => SE,
  CLAUDE_CODE_COWORK_FRAME_ARTIFACTS: () => UE,
  CLAUDE_CODE_COZY_TEAPOT: () => sE,
  CLAUDE_CODE_DISABLE_ADAPTIVE_THINKING: () => ME,
  CLAUDE_CODE_DISABLE_ADMIN_ENV_UNION: () => lE,
  CLAUDE_CODE_DISABLE_ADVISOR_TOOL: () => aE,
  CLAUDE_CODE_DISABLE_AGENT_VIEW: () => uE,
  CLAUDE_CODE_DISABLE_ALTERNATE_SCREEN: () => BE,
  CLAUDE_CODE_DISABLE_ARTIFACT: () => bE,
  CLAUDE_CODE_DISABLE_ATTACHMENTS: () => GE,
  CLAUDE_CODE_DISABLE_ATTRIBUTION_CROSS_REPO: () => mE,
  CLAUDE_CODE_DISABLE_AUTO_MEMORY: () => HE,
  CLAUDE_CODE_DISABLE_AWAITING_USER_IDLE: () => dE,
  CLAUDE_CODE_DISABLE_BACKGROUND_TASKS: () => fE,
  CLAUDE_CODE_DISABLE_BEDROCK_CONTENT_TYPE_DEFAULT: () => KE,
  CLAUDE_CODE_DISABLE_BEDROCK_CONTENT_TYPE_GUARD: () => WE,
  CLAUDE_CODE_DISABLE_BG_EXIT_HANDOFF: () => vE,
  CLAUDE_CODE_DISABLE_BUNDLED_SKILLS: () => gE,
  CLAUDE_CODE_DISABLE_CFC_PROMPT: () => YE,
  CLAUDE_CODE_DISABLE_CLAUDE_API_SKILL: () => yE,
  CLAUDE_CODE_DISABLE_CLAUDE_CODE_SKILL: () => VE,
  CLAUDE_CODE_DISABLE_CLAUDE_MDS: () => wE,
  CLAUDE_CODE_DISABLE_CRON: () => XE,
  CLAUDE_CODE_DISABLE_DANGEROUS_RM_TIMEOUT: () => hE,
  CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS: () => kE,
  CLAUDE_CODE_DISABLE_EXPLORE_PLAN_AGENTS: () => ZE,
  CLAUDE_CODE_DISABLE_FEEDBACK_SURVEY: () => jE,
  CLAUDE_CODE_DISABLE_FILE_CHECKPOINTING: () => JE,
  CLAUDE_CODE_DISABLE_GIT_INSTRUCTIONS: () => zE,
  CLAUDE_CODE_DISABLE_LAUNCH_COMPOSER: () => QE,
  CLAUDE_CODE_DISABLE_MCP_TASK_BACKGROUND: () => FE,
  CLAUDE_CODE_DISABLE_MEMORY_BULK_INFLATE: () => $E,
  CLAUDE_CODE_DISABLE_MEMORY_MASS_DELETE_HOLD: () => qE,
  CLAUDE_CODE_DISABLE_MEMORY_PERIODIC_RESYNC: () => or,
  CLAUDE_CODE_DISABLE_MEMORY_RO_UNSAVED_NOTICE: () => tr,
  CLAUDE_CODE_DISABLE_MEMORY_STREAM_LIST: () => _r,
  CLAUDE_CODE_DISABLE_MOUSE: () => sr,
  CLAUDE_CODE_DISABLE_MOUSE_CLICKS: () => er,
  CLAUDE_CODE_DISABLE_NESTED_CHAIN_IDLE: () => nr,
  CLAUDE_CODE_DISABLE_NESTED_USER_REPAIR: () => Cr,
  CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: () => Ar,
  CLAUDE_CODE_DISABLE_NONSTREAMING_FALLBACK: () => Or,
  CLAUDE_CODE_DISABLE_NOTIFICATION_PRESENCE_CHECK: () => Dr,
  CLAUDE_CODE_DISABLE_OFFICIAL_MARKETPLACE_AUTOINSTALL: () => Tr,
  CLAUDE_CODE_DISABLE_ORG_MEMORY: () => Lr,
  CLAUDE_CODE_DISABLE_PERMISSION_PROMPT_NOTIFY_HOOKS: () => Er,
  CLAUDE_CODE_DISABLE_POLICY_SKILLS: () => cr,
  CLAUDE_CODE_DISABLE_POWERSHELL_CMD_RM_DENY: () => pr,
  CLAUDE_CODE_DISABLE_PRECOMPACT_SKIP: () => Rr,
  CLAUDE_CODE_DISABLE_REFUSAL_FALLBACK: () => Sr,
  CLAUDE_CODE_DISABLE_REFUSAL_RETRY: () => Ir,
  CLAUDE_CODE_DISABLE_STARTUP_WORK_GATE: () => Nr,
  CLAUDE_CODE_DISABLE_SUBSTITUTION_RM_PROMPT: () => xr,
  CLAUDE_CODE_DISABLE_TERMINAL_TITLE: () => lr,
  CLAUDE_CODE_DISABLE_THINKING: () => Mr,
  CLAUDE_CODE_DISABLE_VIRTUAL_SCROLL: () => ar,
  CLAUDE_CODE_DISABLE_WINDOWS_SHELL_LAUNCHER: () => Tn,
  CLAUDE_CODE_DISABLE_WORKFLOWS: () => ur,
  CLAUDE_CODE_EDITOR_CODELIVERY: () => IE,
  CLAUDE_CODE_ELEGANT_MEADOW: () => pE,
  CLAUDE_CODE_ENABLE_APPEND_SUBAGENT_PROMPT: () => br,
  CLAUDE_CODE_ENABLE_AWAY_SUMMARY: () => Gr,
  CLAUDE_CODE_ENABLE_BACKGROUND_PLUGIN_REFRESH: () => mr,
  CLAUDE_CODE_ENABLE_CFC: () => Hr,
  CLAUDE_CODE_ENABLE_DESIGN_SYNC: () => dr,
  CLAUDE_CODE_ENABLE_EXPERIMENTAL_ADVISOR_TOOL: () => fr,
  CLAUDE_CODE_ENABLE_FEEDBACK_SURVEY_FOR_OTEL: () => Fr,
  CLAUDE_CODE_ENABLE_FINE_GRAINED_TOOL_STREAMING: () => Kr,
  CLAUDE_CODE_ENABLE_FUNCTION_HOOKS: () => IC,
  CLAUDE_CODE_ENABLE_LAUNCH_COMPOSER: () => Wr,
  CLAUDE_CODE_ENABLE_MENU_KIND_LANES: () => vr,
  CLAUDE_CODE_ENABLE_NARRATION: () => Qr,
  CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION: () => Jr,
  CLAUDE_CODE_ENABLE_REFRESH_MCP_TOOLS: () => zr,
  CLAUDE_CODE_ENABLE_REMOTE_RECAP: () => $r,
  CLAUDE_CODE_ENABLE_SDK_FILE_CHECKPOINTING: () => qr,
  CLAUDE_CODE_ENABLE_TASKS: () => os,
  CLAUDE_CODE_ENABLE_TODO_TOOLS: () => ts,
  CLAUDE_CODE_ENABLE_TOKEN_USAGE_ATTACHMENT: () => _s,
  CLAUDE_CODE_ENABLE_XAA: () => Es,
  CLAUDE_CODE_EVAL_INTERVIEW_SESSION: () => qe,
  CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS: () => Ae,
  CLAUDE_CODE_EXPERIMENTAL_OBSERVER_AGENTS: () => Oe,
  CLAUDE_CODE_FLEETVIEW_SIMPLE: () => gr,
  CLAUDE_CODE_FORCE_MID_CONVERSATION_SYSTEM: () => Ue,
  CLAUDE_CODE_FORCE_SESSION_PERSISTENCE: () => Re,
  CLAUDE_CODE_FORCE_STRIKETHROUGH: () => Ie,
  CLAUDE_CODE_FORCE_TERMINAL_IMAGES: () => ie,
  CLAUDE_CODE_FORCE_WINDOWS_CREDMAN: () => le,
  CLAUDE_CODE_FORK_SUBAGENT: () => De,
  CLAUDE_CODE_FORWARD_SUBAGENT_TEXT: () => Pe,
  CLAUDE_CODE_FORWARD_USER_INTENT: () => iE,
  CLAUDE_CODE_GATEWAY_HINT_HEADERS: () => cn,
  CLAUDE_CODE_GB_DISK_CACHE_WHEN_TELEMETRY_OFF: () => Yr,
  CLAUDE_CODE_GENTLE_PARASOL: () => _E,
  CLAUDE_CODE_GLOB_HIDDEN: () => Te,
  CLAUDE_CODE_GLOB_NO_IGNORE: () => Le,
  CLAUDE_CODE_GORSE_PLOVER: () => hr,
  CLAUDE_CODE_HARBOR_KITE: () => rs,
  CLAUDE_CODE_HARBOR_KITE_CLOUD: () => es,
  CLAUDE_CODE_HARBOR_KITE_PACING_OFF: () => ss,
  CLAUDE_CODE_HIDE_CWD: () => pe,
  CLAUDE_CODE_HOOKS_SAME_THREAD: () => SC,
  CLAUDE_CODE_HOST_SCHEDULED_RUN: () => xE,
  CLAUDE_CODE_HOVER_REST: () => yr,
  CLAUDE_CODE_HUMBLE_HAMMOCK: () => OE,
  CLAUDE_CODE_IDE_SKIP_AUTO_INSTALL: () => Me,
  CLAUDE_CODE_IDE_SKIP_VALID_CHECK: () => ae,
  CLAUDE_CODE_INCLUDE_PARTIAL_MESSAGES: () => ue,
  CLAUDE_CODE_INLINE_TOOLS: () => xe,
  CLAUDE_CODE_INTRO_FRAME: () => Rs,
  CLAUDE_CODE_JUNIPER_SUNDIAL: () => jr,
  CLAUDE_CODE_KB_COHESION_FIXES: () => Ts,
  CLAUDE_CODE_LANTERN_PRISM: () => ns,
  CLAUDE_CODE_LARCH_CISTERN: () => Xr,
  CLAUDE_CODE_MEMORY_PUSH_DELETE_MODE: () => rr,
  CLAUDE_CODE_MODEL_CAPABILITIES: () => Ss,
  CLAUDE_CODE_NANKEEN_KESTREL: () => PE,
  CLAUDE_CODE_NATIVE_CURSOR: () => Be,
  CLAUDE_CODE_NEW_INIT: () => be,
  CLAUDE_CODE_NONBLOCKING_STDOUT: () => me,
  CLAUDE_CODE_NO_FLICKER: () => Ge,
  CLAUDE_CODE_PACKAGE_MANAGER_AUTO_UPDATE: () => He,
  CLAUDE_CODE_PARCHMENT_FERN: () => kr,
  CLAUDE_CODE_PARSED_WILLOW: () => LE,
  CLAUDE_CODE_PEWTER_OWL: () => pn,
  CLAUDE_CODE_PEWTER_OWL_TOOL: () => Rn,
  CLAUDE_CODE_PLAN_MODE_REQUIRED: () => de,
  CLAUDE_CODE_PLUGIN_BINARY_ASSETS: () => Cn,
  CLAUDE_CODE_PLUGIN_DIRS: () => UC,
  CLAUDE_CODE_PLUGIN_DIR_WATCH: () => iC,
  CLAUDE_CODE_PLUGIN_KEEP_MARKETPLACE_ON_FAILURE: () => nn,
  CLAUDE_CODE_PLUGIN_PREFER_HTTPS: () => On,
  CLAUDE_CODE_PLUGIN_USE_ZIP_CACHE: () => An,
  CLAUDE_CODE_POLISHED_DEWDROP: () => CE,
  CLAUDE_CODE_POLL_EVENTS: () => fe,
  CLAUDE_CODE_POWERSHELL_RESPECT_EXECUTION_POLICY: () => Dn,
  CLAUDE_CODE_PROACTIVE: () => Fe,
  CLAUDE_CODE_PROJECTS_SESSION: () => en,
  CLAUDE_CODE_PROMPT_CACHE_TTL: () => eC,
  CLAUDE_CODE_PROPAGATE_TRACEPARENT: () => Ln,
  CLAUDE_CODE_REFUSAL_FALLBACK_CATCH_ALL: () => ir,
  CLAUDE_CODE_REMOTE_TOOLS_FORWARD: () => xC,
  CLAUDE_CODE_REMOTE_TOOLS_PIN_STORED_LOGIN: () => NE,
  CLAUDE_CODE_REPORT_FINDINGS: () => Ur,
  CLAUDE_CODE_RUSTLING_PIXEL: () => AE,
  CLAUDE_CODE_SEND_FEEDBACK: () => Pr,
  CLAUDE_CODE_SESSION_ATTENDED: () => se,
  CLAUDE_CODE_SILENT_TURN_REMINDER: () => is,
  CLAUDE_CODE_SILENT_TURN_REMINDER_TEXT: () => xs,
  CLAUDE_CODE_SILENT_TURN_REMINDER_TURNS: () => Us,
  CLAUDE_CODE_SKILL_PROPOSALS: () => Ke,
  CLAUDE_CODE_SKIP_PLUGIN_MCP_SERVERS: () => We,
  CLAUDE_CODE_SKIP_PLUGIN_MCP_SERVERS_EXCEPT: () => ve,
  CLAUDE_CODE_SKIP_PROJECT_BACKFILL: () => ge,
  CLAUDE_CODE_SKIP_PROMPT_HISTORY: () => Ye,
  CLAUDE_CODE_SKIP_REPO_UPLOAD: () => ye,
  CLAUDE_CODE_SQUISHY_NEWT: () => cE,
  CLAUDE_CODE_STELLAR_DRIFT: () => DE,
  CLAUDE_CODE_SUBAGENT_CACHE_EVICT: () => Ve,
  CLAUDE_CODE_SUBAGENT_PROMPT_CACHE_TTL: () => nC,
  CLAUDE_CODE_SUPPRESS_SESSION_ATTRIBUTION: () => we,
  CLAUDE_CODE_SYNC_PLUGINS: () => he,
  CLAUDE_CODE_SYNC_PLUGIN_INSTALL: () => Xe,
  CLAUDE_CODE_SYNC_SKILLS: () => ke,
  CLAUDE_CODE_TAG_ISMETA_MESSAGES: () => Ze,
  CLAUDE_CODE_THINKING_DISPLAY_UPDATES: () => ls,
  CLAUDE_CODE_THISTLE_GREBE: () => oE,
  CLAUDE_CODE_THRIFTY_SONIC: () => EE,
  CLAUDE_CODE_TOASTY_THIMBLE: () => tE,
  CLAUDE_CODE_TODO_REMINDER_MODE: () => Cs,
  CLAUDE_CODE_TOTAL_TOKENS_REMINDER: () => As,
  CLAUDE_CODE_TOTAL_TOKENS_REMINDER_AFTER_USER_TURN: () => Ds,
  CLAUDE_CODE_TOTAL_TOKENS_REMINDER_BUDGET: () => Os,
  CLAUDE_CODE_TRANSCRIPT_LOCAL_GC: () => je,
  CLAUDE_CODE_TURN_UPDATES: () => Is,
  CLAUDE_CODE_TWO_STAGE_CLASSIFIER: () => Je,
  CLAUDE_CODE_USE_COWORK_PLUGINS: () => ze,
  CLAUDE_CODE_USE_NATIVE_FILE_SEARCH: () => Qe,
  CLAUDE_CODE_USE_POWERSHELL_TOOL: () => $e,
  CLAUDE_CODE_WEBFETCH_CACHE_TTL_MS: () => tn,
  CLAUDE_CODE_WEBFETCH_DEADLINE_MS: () => _n,
  CLAUDE_CODE_WEBFETCH_USE_CCR_PROXY: () => En,
  CLAUDE_CODE_WEBSEARCH_USE_CCR_PROXY: () => rn,
  CLAUDE_CODE_WEB_FETCH_AGENT: () => on,
  CLAUDE_CODE_WEB_SEARCH_FAST_ARG: () => sn,
  CLAUDE_CODE_WILLOW_TERN: () => Zr,
  CLAUDE_CODE_WISE_COMET: () => TE,
  CLAUDE_CODE_WORKFLOWS: () => Br,
  CLAUDE_CODE_WORKFLOW_MAX_CONCURRENT_AGENTS: () => an,
  CLAUDE_CODE_WORKFLOW_PREFIX_STAGGER_MS: () => Mn,
  CLAUDE_CODE_WORKFLOW_SIZE_WARNING_AGENTS: () => ln,
  CLAUDE_CODE_WORKFLOW_SIZE_WARNING_TOKENS: () => Pn,
  CLAUDE_DISABLE_ADOPT: () => Sn,
  CLAUDE_IMPORT_CONVERSATIONS: () => In,
  CLAUDE_RUNNER_DISABLE_AWAITING_ACTION_OVERRIDE: () => Un,
  CLAUDE_WORKFLOW_NAME_ONLY: () => xn,
  DISABLE_AUTOUPDATER: () => Bn,
  DISABLE_AUTO_COMPACT: () => un,
  DISABLE_BRIEF_MODE_STOP_HOOK: () => Gn,
  DISABLE_BUG_COMMAND: () => mn,
  DISABLE_COST_WARNINGS: () => Hn,
  DISABLE_DOCTOR_COMMAND: () => dn,
  DISABLE_ERROR_REPORTING: () => fn,
  DISABLE_EXTRA_USAGE_COMMAND: () => Fn,
  DISABLE_FEEDBACK_COMMAND: () => Kn,
  DISABLE_GROWTHBOOK: () => Wn,
  DISABLE_INSTALL_GITHUB_APP_COMMAND: () => vn,
  DISABLE_INTERLEAVED_THINKING: () => gn,
  DISABLE_LOGIN_COMMAND: () => Yn,
  DISABLE_LOGOUT_COMMAND: () => yn,
  DISABLE_PROMPT_CACHING: () => Vn,
  DISABLE_PROMPT_CACHING_FABLE: () => kn,
  DISABLE_PROMPT_CACHING_HAIKU: () => wn,
  DISABLE_PROMPT_CACHING_MYTHOS: () => Zn,
  DISABLE_PROMPT_CACHING_OPUS: () => Xn,
  DISABLE_PROMPT_CACHING_SONNET: () => hn,
  DISABLE_TELEMETRY: () => jn,
  DISABLE_UPDATES: () => Jn,
  DISABLE_UPGRADE_COMMAND: () => zn,
  EMBEDDED_SEARCH_TOOLS: () => pC,
  ENABLE_BETA_TRACING_DETAILED: () => Qn,
  ENABLE_CLAUDEAI_MCP_SERVERS: () => $n,
  ENABLE_ENHANCED_TELEMETRY_BETA: () => qn,
  ENABLE_LOCKLESS_UPDATES: () => oC,
  ENABLE_LSP_TOOL: () => tC,
  ENABLE_MCP_LARGE_OUTPUT_FILES: () => _C,
  ENABLE_PID_BASED_VERSION_LOCKING: () => EC,
  ENABLE_PROMPT_CACHING_1H: () => rC,
  ENABLE_PROMPT_CACHING_1H_BEDROCK: () => sC,
  ENABLE_SESSION_BACKGROUNDING: () => CC,
  ENABLE_SESSION_PERSISTENCE: () => AC,
  ENABLE_TOOL_SEARCH: () => OC,
  FORCE_AUTOUPDATE_PLUGINS: () => DC,
  FORCE_CODE_TERMINAL: () => TC,
  FORCE_PROMPT_CACHING_5M: () => LC,
  FORCE_VCR: () => cC,
  INK_SCREEN_READER: () => $_,
  USE_API_CONTEXT_MANAGEMENT: () => RC
});
var iBe = ["5m", "1h"];
var j_ = D.triBool(),
  J_ = D.int({
    min: 0
  }),
  z_ = D.int({
    min: 0
  }),
  Q_ = D.triBool(),
  $_ = D.bool(),
  q_ = D.bool(),
  oE = D.str(),
  tE = D.str(),
  _E = D.str(),
  EE = D.triBool(),
  rE = D.triBool(),
  sE = D.enum(["strict", "relaxed"]),
  eE = D.bool(),
  nE = D.str(),
  CE = D.enum(["drop", "block", "off"]),
  AE = D.str(),
  OE = D.triBool(),
  DE = D.triBool(),
  TE = D.triBool(),
  LE = D.triBool(),
  cE = D.triBool(),
  pE = D.triBool(),
  RE = D.triBool(),
  SE = D.bool(),
  IE = D.bool(),
  iE = D.bool(),
  UE = D.bool(),
  xE = D.bool(),
  NE = D.bool(),
  lE = D.bool(),
  PE = D.bool(),
  ME = D.bool(),
  aE = D.bool(),
  uE = D.bool(),
  BE = D.bool(),
  bE = D.bool(),
  GE = D.bool(),
  mE = D.bool(),
  HE = D.bool(),
  dE = D.bool(),
  fE = D.bool(),
  FE = D.bool(),
  KE = D.bool(),
  WE = D.bool(),
  vE = D.bool(),
  gE = D.bool(),
  YE = D.bool(),
  yE = D.bool(),
  VE = D.bool(),
  wE = D.bool(),
  XE = D.bool(),
  hE = D.bool(),
  kE = D.bool(),
  ZE = D.bool(),
  jE = D.bool(),
  JE = D.bool(),
  zE = D.triBool(),
  QE = D.bool(),
  $E = D.bool(),
  qE = D.bool(),
  or = D.bool(),
  tr = D.bool(),
  _r = D.bool(),
  Er = D.bool(),
  rr = D.enum(["corroborate", "immediate", "never"]),
  sr = D.triBool(),
  er = D.triBool(),
  nr = D.bool(),
  Cr = D.bool(),
  Ar = D.bool(),
  Or = D.bool(),
  Dr = D.bool(),
  Tr = D.bool(),
  Lr = D.bool(),
  cr = D.bool(),
  pr = D.bool(),
  Rr = D.bool(),
  Sr = D.bool(),
  Ir = D.bool(),
  ir = D.triBool(),
  Ur = D.bool(),
  xr = D.bool(),
  Nr = D.bool(),
  lr = D.bool(),
  Pr = D.triBool(),
  Mr = D.bool(),
  ar = D.bool(),
  ur = D.bool(),
  Br = D.triBool(),
  br = D.bool(),
  Gr = D.bool(),
  mr = D.bool(),
  Hr = D.triBool(),
  dr = D.bool(),
  fr = D.bool(),
  Fr = D.bool(),
  Kr = D.triBool(),
  Wr = D.bool(),
  vr = D.bool(),
  gr = D.bool(),
  Yr = D.bool(),
  yr = D.triBool(),
  Vr = D.bool(),
  wr = D.triBool(),
  Xr = D.bool(),
  hr = D.bool(),
  kr = D.bool(),
  Zr = D.bool(),
  jr = D.int({
    min: 1,
    digitsOnly: !0
  }),
  Jr = D.triBool(),
  zr = D.bool(),
  Qr = D.triBool(),
  $r = D.triBool(),
  qr = D.bool(),
  os = D.triBool(),
  ts = D.bool(),
  _s = D.bool(),
  Es = D.bool(),
  rs = D.str(),
  ss = D.bool(),
  es = D.bool(),
  ns = D.bool(),
  Cs = D.enum(["baseline", "off"]),
  As = D.str(),
  Os = D.int(),
  Ds = D.triBool(),
  Ts = D.bool(),
  Ls = D.bool(),
  cs = D.triBool(),
  ps = D.triBool(),
  Rs = D.triBool(),
  Ss = D.str(),
  Is = D.triBool(),
  is = D.triBool(),
  Us = D.int({
    min: 1
  }),
  xs = D.str(),
  Ns = D.triBool(),
  ls = D.triBool(),
  Ps = D.triBool(),
  Ms = D.triBool(),
  as = D.triBool(),
  us = D.triBool(),
  Bs = D.triBool(),
  bs = D.triBool(),
  Gs = D.triBool(),
  ms = D.triBool(),
  Hs = D.triBool(),
  ds = D.triBool(),
  fs = D.triBool(),
  Fs = D.triBool(),
  Ks = D.triBool(),
  Ws = D.triBool(),
  vs = D.triBool(),
  gs = D.triBool(),
  Ys = D.triBool(),
  ys = D.triBool(),
  Vs = D.triBool(),
  ws = D.enum(["v0", "v1", "v2"]),
  Xs = D.triBool(),
  hs = D.triBool(),
  ks = D.triBool(),
  Zs = D.triBool(),
  js = D.triBool(),
  Js = D.triBool(),
  zs = D.triBool(),
  Qs = D.triBool(),
  $s = D.triBool(),
  qs = D.str(),
  oe = D.bool(),
  te = D.bool(),
  _e = D.bool(),
  Ee = D.bool(),
  re = D.bool(),
  se = D.triBool(),
  ee = D.bool(),
  ne = D.bool(),
  Ce = D.triBool(),
  Ae = D.bool(),
  Oe = D.bool(),
  De = D.triBool(),
  Te = D.bool(),
  Le = D.bool(),
  pe = D.bool(),
  Re = D.bool(),
  Ie = D.bool(),
  ie = D.bool(),
  Ue = D.bool(),
  xe = D.triBool(),
  le = D.str(),
  Pe = D.bool(),
  Me = D.bool(),
  ae = D.bool(),
  ue = D.bool(),
  Be = D.bool(),
  be = D.bool(),
  Ge = D.triBool(),
  me = D.triBool(),
  He = D.bool(),
  de = D.bool(),
  fe = D.bool(),
  Fe = D.bool(),
  Ke = D.bool(),
  We = D.bool(),
  ve = D.str(),
  ge = D.bool(),
  Ye = D.bool(),
  ye = D.bool(),
  Ve = D.bool(),
  we = D.bool(),
  Xe = D.bool(),
  he = D.bool(),
  ke = D.bool(),
  Ze = D.bool(),
  je = D.triBool(),
  Je = D.bool(),
  ze = D.bool(),
  Qe = D.bool(),
  $e = D.triBool(),
  qe = D.bool(),
  on = D.triBool(),
  tn = D.int({
    min: 1,
    digitsOnly: !0
  }),
  _n = D.int({
    min: 0,
    digitsOnly: !0
  }),
  En = D.bool(),
  rn = D.bool(),
  sn = D.triBool(),
  en = D.bool(),
  nn = D.bool(),
  Cn = D.bool(),
  An = D.bool(),
  On = D.bool(),
  Dn = D.bool(),
  Tn = D.bool(),
  Ln = D.bool(),
  cn = D.triBool(),
  pn = D.triBool(),
  Rn = D.triBool(),
  Sn = D.bool(),
  In = D.bool(),
  Un = D.bool(),
  xn = D.bool(),
  ln = D.int({
    min: 1
  }),
  Pn = D.int({
    min: 1
  }),
  Mn = D.int({
    min: 0
  }),
  an = D.int({
    min: 1,
    max: 256,
    digitsOnly: !0
  }),
  un = D.bool(),
  Bn = D.bool(),
  Gn = D.bool(),
  mn = D.bool(),
  Hn = D.bool(),
  dn = D.bool(),
  fn = D.bool(),
  Fn = D.bool(),
  Kn = D.bool(),
  Wn = D.bool(),
  vn = D.bool(),
  gn = D.bool(),
  Yn = D.bool(),
  yn = D.bool(),
  Vn = D.bool(),
  wn = D.bool(),
  Xn = D.bool(),
  hn = D.bool(),
  kn = D.bool(),
  Zn = D.bool(),
  jn = D.bool(),
  Jn = D.bool(),
  zn = D.bool(),
  Qn = D.bool(),
  $n = D.triBool(),
  qn = D.bool(),
  oC = D.bool(),
  tC = D.bool(),
  _C = D.triBool(),
  EC = D.triBool(),
  rC = D.bool(),
  sC = D.bool(),
  eC = D.enum(iBe),
  nC = D.enum(iBe),
  CC = D.bool(),
  AC = D.bool(),
  OC = D.str(),
  DC = D.bool(),
  TC = D.bool(),
  LC = D.bool(),
  cC = D.bool(),
  pC = D.bool(),
  RC = D.bool(),
  SC = D.bool(),
  IC = D.triBool(),
  iC = D.triBool(),
  UC = D.str(),
  xC = D.bool();
var b = {};
vo(b, {
  ALACRITTY_LOG: () => nO,
  ALLUSERSPROFILE: () => AA,
  ANDROID_HOME: () => gA,
  ANDROID_SDK_ROOT: () => YA,
  APPDATA: () => qC,
  APP_URL: () => KD,
  AWS_CA_BUNDLE: () => aA,
  AWS_EXECUTION_ENV: () => PD,
  AWS_LAMBDA_FUNCTION_NAME: () => lD,
  AZURE_FUNCTIONS_ENVIRONMENT: () => FD,
  BAT_THEME: () => yD,
  BROWSER: () => YC,
  BUILDKITE: () => rD,
  BUN_CHROME_PATH: () => YD,
  BUN_INSTALL: () => gD,
  CARGO_HTTP_CAINFO: () => BA,
  CDPATH: () => PC,
  CF_PAGES: () => xD,
  CIRCLECI: () => ED,
  CLOUDSDK_CONFIG: () => HD,
  CLOUDSDK_CORE_CUSTOM_CA_CERTS_FILE: () => PA,
  CODER: () => AD,
  CODER_WORKSPACE_NAME: () => OD,
  CODESPACES: () => CD,
  COLORFGBG: () => XA,
  COLORTERM: () => wA,
  COMSPEC: () => mC,
  CONTAINER_SANDBOX_MOUNT_POINT: () => QC,
  CURL_CA_BUNDLE: () => lA,
  CURSOR_TRACE_ID: () => MO,
  ComSpec: () => dC,
  ConEmuANSI: () => IO,
  ConEmuPID: () => iO,
  ConEmuTask: () => UO,
  DAYTONA_WS_ID: () => LD,
  DEMO_VERSION: () => ZD,
  DENO_CERT: () => uA,
  DENO_DEPLOYMENT_ID: () => ND,
  DISPLAY: () => yC,
  DO_NOT_TRACK: () => hA,
  DYNO: () => UD,
  EDITOR: () => vC,
  FORCE_COLOR: () => VA,
  GCLOUD_PROJECT: () => uD,
  GCM_INTERACTIVE: () => dO,
  GH_CONFIG_DIR: () => KO,
  GH_ENTERPRISE_TOKEN: () => yO,
  GH_HOST: () => YO,
  GH_TOKEN: () => gO,
  GITHUB_ACTIONS: () => kO,
  GITHUB_ACTION_INPUTS: () => ZO,
  GITHUB_ACTION_PATH: () => jO,
  GITHUB_ACTOR: () => JO,
  GITHUB_ACTOR_ID: () => zO,
  GITHUB_ENTERPRISE_TOKEN: () => wO,
  GITHUB_ENV: () => XO,
  GITHUB_EVENT_NAME: () => QO,
  GITHUB_EVENT_PATH: () => $O,
  GITHUB_REPOSITORY: () => qO,
  GITHUB_REPOSITORY_ID: () => oD,
  GITHUB_REPOSITORY_OWNER: () => tD,
  GITHUB_REPOSITORY_OWNER_ID: () => _D,
  GITHUB_TOKEN: () => VO,
  GITHUB_WORKSPACE: () => hO,
  GITLAB_CI: () => sD,
  GITPOD_WORKSPACE_ID: () => DD,
  GIT_ASKPASS: () => HO,
  GIT_CONFIG_COUNT: () => fO,
  GIT_CONFIG_GLOBAL: () => FO,
  GIT_CONFIG_NOSYSTEM: () => fA,
  GIT_SSH_COMMAND: () => GO,
  GIT_SSL_CAINFO: () => dA,
  GIT_SSL_CAPATH: () => FA,
  GIT_TERMINAL_PROMPT: () => mO,
  GNOME_TERMINAL_SERVICE: () => sO,
  GOOGLE_APPLICATION_CREDENTIALS: () => BD,
  GOOGLE_CLOUD_PROJECT: () => aD,
  GOOGLE_CLOUD_WORKSTATIONS: () => TD,
  GRPC_DEFAULT_SSL_ROOTS_FILE_PATH: () => GA,
  HEX_CACERTS_PATH: () => HA,
  HISTFILE: () => RA,
  HOME: () => NC,
  HOMEDRIVE: () => rA,
  HOMEPATH: () => sA,
  HOMESHARE: () => eA,
  HTTPLIB2_CA_CERTS: () => MA,
  HUB_CONFIG: () => WO,
  INTELLIJ_TERMINAL_COMMAND_BLOCKS: () => xO,
  INTELLIJ_TERMINAL_COMMAND_BLOCKS_REWORKED: () => NO,
  IS_DEMO: () => kD,
  IS_SANDBOX: () => hD,
  ITERM_SESSION_ID: () => tO,
  JAVA_HOME: () => WA,
  JAVA_TOOL_OPTIONS: () => vA,
  KITTY_WINDOW_ID: () => _O,
  KONSOLE_VERSION: () => EO,
  KUBERNETES_SERVICE_HOST: () => vD,
  K_SERVICE: () => MD,
  LANG: () => wC,
  LC_ALL: () => XC,
  LC_TERMINAL: () => JA,
  LC_TIME: () => hC,
  LOCALAPPDATA: () => oA,
  MSYSTEM: () => SO,
  NETLIFY: () => iD,
  NIX_SSL_CERT_FILE: () => mA,
  NODE_EXTRA_CA_CERTS: () => IA,
  NODE_OPTIONS: () => SA,
  NO_COLOR: () => yA,
  NoDefaultCurrentDirectoryInExePath: () => WC,
  OneDrive: () => tA,
  OneDriveCommercial: () => EA,
  OneDriveConsumer: () => _A,
  P4PORT: () => VD,
  PATH: () => lC,
  PATHEXT: () => KC,
  PIP_CERT: () => bA,
  PLAYWRIGHT_BROWSERS_PATH: () => wD,
  PREFIX: () => aC,
  PROGRAMDATA: () => CA,
  PROJECT_DOMAIN: () => RD,
  PWD: () => MC,
  ProgramData: () => nA,
  ProgramFiles: () => FC,
  RENDER: () => ID,
  REPL_ID: () => cD,
  REPL_SLUG: () => pD,
  REQUESTS_CA_BUNDLE: () => NA,
  RUNNER_ENVIRONMENT: () => nD,
  RUNNER_OS: () => eD,
  SAFEUSER: () => OA,
  SESSIONNAME: () => AO,
  SHELL: () => GC,
  SPACE_CREATOR_USER_ID: () => WD,
  SSH_AUTH_SOCK: () => bO,
  SSH_CLIENT: () => aO,
  SSH_CONNECTION: () => uO,
  SSH_TTY: () => BO,
  SSL_CERT_DIR: () => xA,
  SSL_CERT_FILE: () => UA,
  STY: () => OO,
  SUDO_GID: () => jC,
  SUDO_UID: () => ZC,
  SUDO_USER: () => JC,
  SYSTEMROOT: () => HC,
  SystemRoot: () => fC,
  TEMP: () => bC,
  TERM: () => kA,
  TERMINAL: () => zA,
  TERMINAL_EMULATOR: () => QA,
  TERMINATOR_UUID: () => $A,
  TERMUX_VERSION: () => qA,
  TERM_PROGRAM: () => ZA,
  TERM_PROGRAM_VERSION: () => jA,
  TILIX_ID: () => oO,
  TMP: () => BC,
  TMPDIR: () => uC,
  TMUX: () => DO,
  TMUX_PANE: () => TO,
  TRACEPARENT: () => jD,
  TRACESTATE: () => JD,
  USER: () => kC,
  USERNAME: () => zC,
  USERPROFILE: () => $C,
  USE_BUILTIN_RIPGREP: () => XD,
  UV_THREADPOOL_SIZE: () => KA,
  VERCEL: () => SD,
  VISUAL: () => gC,
  VSCODE_GIT_ASKPASS_MAIN: () => PO,
  VTE_VERSION: () => eO,
  WAYLAND_DISPLAY: () => VC,
  WEBSITE_SITE_NAME: () => dD,
  WEBSITE_SKU: () => fD,
  WSL_DISTRO_NAME: () => pO,
  WSL_INTEROP: () => RO,
  WT_SESSION: () => CO,
  XDG_CACHE_HOME: () => cA,
  XDG_CONFIG_HOME: () => TA,
  XDG_DATA_HOME: () => LA,
  XDG_RUNTIME_DIR: () => DA,
  XDG_STATE_HOME: () => pA,
  XTERM_VERSION: () => rO,
  ZDOTDIR: () => vO,
  ZED_TERM: () => cO,
  ZELLIJ: () => LO,
  __CFBundleIdentifier: () => lO,
  gcloud_project: () => bD,
  google_application_credentials: () => mD,
  google_cloud_project: () => GD
});
var NC = D.str(),
  lC = D.str(),
  PC = D.str(),
  MC = D.str(),
  aC = D.str(),
  uC = D.str(),
  BC = D.str(),
  bC = D.str(),
  GC = D.str(),
  mC = D.str(),
  HC = D.str(),
  dC = D.str(),
  fC = D.str(),
  FC = D.str(),
  KC = D.str(),
  WC = D.str(),
  vC = D.str(),
  gC = D.str(),
  YC = D.str(),
  yC = D.str(),
  VC = D.str(),
  wC = D.str(),
  XC = D.str(),
  hC = D.str(),
  kC = D.str(),
  ZC = D.int({
    min: 0,
    digitsOnly: !0
  }),
  jC = D.int({
    min: 0,
    digitsOnly: !0
  }),
  JC = D.str(),
  zC = D.str(),
  QC = D.str(),
  $C = D.str(),
  qC = D.str(),
  oA = D.str(),
  tA = D.str(),
  _A = D.str(),
  EA = D.str(),
  rA = D.str(),
  sA = D.str(),
  eA = D.str(),
  nA = D.str(),
  CA = D.str(),
  AA = D.str(),
  OA = D.str(),
  DA = D.str(),
  TA = D.str(),
  LA = D.str(),
  cA = D.str(),
  pA = D.str(),
  RA = D.str(),
  SA = D.str(),
  IA = D.str(),
  UA = D.str(),
  xA = D.str(),
  NA = D.str(),
  lA = D.str(),
  PA = D.str(),
  MA = D.str(),
  aA = D.str(),
  uA = D.str(),
  BA = D.str(),
  bA = D.str(),
  GA = D.str(),
  mA = D.str(),
  HA = D.str(),
  dA = D.str(),
  fA = D.str(),
  FA = D.str(),
  KA = D.str(),
  WA = D.str(),
  vA = D.str(),
  gA = D.str(),
  YA = D.str(),
  yA = D.rawStr(),
  VA = D.rawStr(),
  wA = D.str(),
  XA = D.str(),
  hA = D.str(),
  kA = D.str(),
  ZA = D.str(),
  jA = D.str(),
  JA = D.str(),
  zA = D.str(),
  QA = D.str(),
  $A = D.str(),
  qA = D.str(),
  oO = D.str(),
  tO = D.str(),
  _O = D.str(),
  EO = D.str(),
  rO = D.str(),
  sO = D.str(),
  eO = D.str(),
  nO = D.str(),
  CO = D.str(),
  AO = D.str(),
  OO = D.str(),
  DO = D.str(),
  TO = D.str(),
  LO = D.str(),
  cO = D.str(),
  pO = D.str(),
  RO = D.str(),
  SO = D.str(),
  IO = D.str(),
  iO = D.str(),
  UO = D.str(),
  xO = D.str(),
  NO = D.str(),
  lO = D.str(),
  PO = D.str(),
  MO = D.rawStr(),
  aO = D.str(),
  uO = D.str(),
  BO = D.str(),
  bO = D.str(),
  GO = D.str(),
  mO = D.str(),
  HO = D.str(),
  dO = D.str(),
  fO = D.str(),
  FO = D.str(),
  KO = D.str(),
  WO = D.str(),
  vO = D.str(),
  gO = D.str(),
  YO = D.str(),
  yO = D.str(),
  VO = D.str(),
  wO = D.str(),
  XO = D.str(),
  hO = D.str(),
  kO = D.str(),
  ZO = D.rawStr(),
  jO = D.str(),
  JO = D.str(),
  zO = D.str(),
  QO = D.str(),
  $O = D.str(),
  qO = D.str(),
  oD = D.str(),
  tD = D.str(),
  _D = D.str(),
  ED = D.str(),
  rD = D.str(),
  sD = D.str(),
  eD = D.str(),
  nD = D.str(),
  CD = D.str(),
  AD = D.str(),
  OD = D.str(),
  DD = D.str(),
  TD = D.str(),
  LD = D.str(),
  cD = D.str(),
  pD = D.str(),
  RD = D.str(),
  SD = D.str(),
  ID = D.str(),
  iD = D.str(),
  UD = D.str(),
  xD = D.str(),
  ND = D.str(),
  lD = D.str(),
  PD = D.str(),
  MD = D.str(),
  aD = D.str(),
  uD = D.str(),
  BD = D.str(),
  bD = D.str(),
  GD = D.str(),
  mD = D.str(),
  HD = D.str(),
  dD = D.str(),
  fD = D.str(),
  FD = D.str(),
  KD = D.str(),
  WD = D.str(),
  vD = D.str(),
  gD = D.str(),
  YD = D.str(),
  yD = D.str(),
  VD = D.str(),
  wD = D.str(),
  XD = D.str(),
  hD = D.str(),
  kD = D.str(),
  ZD = D.str(),
  jD = D.str(),
  JD = D.str();
var G = {};
vo(G, {
  AI_AGENT: () => _p,
  ALLOW_ANT_COMPUTER_USE_MCP: () => Ep,
  ANTHROPIC_CONFIG_DIR: () => zD,
  BASH_MAX_OUTPUT_LENGTH: () => BR,
  CCR_SESSION_PROFILE: () => rp,
  CLAUBBIT: () => sp,
  CLAUDECODE: () => ep,
  CLAUDE_AFK_COUNTDOWN_MS: () => bR,
  CLAUDE_AFK_TIMEOUT_MS: () => GR,
  CLAUDE_AFTER_LAST_COMPACT: () => QD,
  CLAUDE_AGENTS_SELECT: () => $D,
  CLAUDE_AGENT_SDK_CLIENT_APP: () => qD,
  CLAUDE_AGENT_SDK_DISABLE_BUILTIN_AGENTS: () => np,
  CLAUDE_AGENT_SDK_DISABLE_MCP_MANIFESTS: () => Cp,
  CLAUDE_AGENT_SDK_MCP_NO_PREFIX: () => Ap,
  CLAUDE_AGENT_SDK_VERSION: () => oT,
  CLAUDE_ARTIFACT_HOST_GRANT: () => tT,
  CLAUDE_ASYNC_AGENT_STALL_TIMEOUT_MS: () => mR,
  CLAUDE_AUTOCOMPACT_PCT_OVERRIDE: () => _T,
  CLAUDE_AUTO_BACKGROUND_TASKS: () => Op,
  CLAUDE_BASH_MAINTAIN_PROJECT_WORKING_DIR: () => Dp,
  CLAUDE_BG_AUTH_SNAPSHOT_PATH: () => ET,
  CLAUDE_BG_BACKEND: () => rT,
  CLAUDE_BG_CLAIM_AUTH: () => sT,
  CLAUDE_BG_DISPATCHER_RATE_LIMIT_TIER: () => eT,
  CLAUDE_BG_DISPATCHER_SUBSCRIPTION_TYPE: () => nT,
  CLAUDE_BG_ISOLATION: () => CT,
  CLAUDE_BG_MEMORY_TOGGLED_OFF: () => AT,
  CLAUDE_BG_POST_CLEAR_RESPAWN: () => OT,
  CLAUDE_BG_PTY_AUTH: () => DT,
  CLAUDE_BG_RENDEZVOUS_SOCK: () => TT,
  CLAUDE_BG_RV_AUTH: () => LT,
  CLAUDE_BG_SESSION_PERMISSION_RULES: () => cT,
  CLAUDE_BG_SOCKET_TOKENS_PATH: () => pT,
  CLAUDE_BG_SOURCE: () => RT,
  CLAUDE_BG_STARTUP_WEDGE_MS: () => HR,
  CLAUDE_BG_TCC_DISCLAIMED: () => ST,
  CLAUDE_BG_WORKSPACE_TRUSTED: () => IT,
  CLAUDE_BRIDGE_BASE_URL: () => iT,
  CLAUDE_BRIDGE_OAUTH_TOKEN: () => UT,
  CLAUDE_BRIDGE_REATTACH_GROUPING: () => xT,
  CLAUDE_BRIDGE_REATTACH_NO_BACKFILL: () => Tp,
  CLAUDE_BRIDGE_REATTACH_OUTBOUND_ONLY: () => Lp,
  CLAUDE_BRIDGE_REATTACH_OWNER_ACCT: () => NT,
  CLAUDE_BRIDGE_REATTACH_OWNER_ORG: () => lT,
  CLAUDE_BRIDGE_REATTACH_SEQ: () => dR,
  CLAUDE_BRIDGE_REATTACH_SESSION: () => PT,
  CLAUDE_BRIDGE_SESSION_INGRESS_URL: () => MT,
  CLAUDE_CHROME_PAIRED_DEVICE_ID: () => aT,
  CLAUDE_CHROME_PERMISSION_MODE: () => uT,
  CLAUDE_CLIENT_PRESENCE_FILE: () => BT,
  CLAUDE_CODE_ACTION: () => bT,
  CLAUDE_CODE_ADDITIONAL_DIRECTORIES_CLAUDE_MD: () => GT,
  CLAUDE_CODE_ADDITIONAL_PROTECTION: () => cp,
  CLAUDE_CODE_ADOPT_UNDERIVABLE_PARKED_PERMISSION: () => rR,
  CLAUDE_CODE_AGENT: () => mT,
  CLAUDE_CODE_ARTIFACT: () => HT,
  CLAUDE_CODE_ARTIFACTS_API_BASE_URL: () => fT,
  CLAUDE_CODE_ARTIFACTS_API_TOKEN: () => FT,
  CLAUDE_CODE_ARTIFACT_ASSET_BASE_URL: () => KT,
  CLAUDE_CODE_ARTIFACT_AUTO_OPEN: () => dT,
  CLAUDE_CODE_ARTIFACT_LIVE_BASE_URL: () => WT,
  CLAUDE_CODE_ARTIFACT_SYNC_BASE_URL: () => vT,
  CLAUDE_CODE_ARTIFACT_VIEWER_BASE_URL: () => gT,
  CLAUDE_CODE_ATTRIBUTION_STATUS_TIMEOUT_MS: () => YT,
  CLAUDE_CODE_AUTO_COMPACT_WINDOW: () => VT,
  CLAUDE_CODE_AUTO_MODE_EXTERNAL_PERMISSIONS: () => pp,
  CLAUDE_CODE_BASE_REF: () => wT,
  CLAUDE_CODE_BASE_REFS: () => XT,
  CLAUDE_CODE_BLOCKING_LIMIT_OVERRIDE: () => hT,
  CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT: () => IL,
  CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT: () => SL,
  CLAUDE_CODE_BRIDGE_CHILD_MACHINE_SETTINGS: () => iL,
  CLAUDE_CODE_BRIDGE_MCP_CARRIER: () => kT,
  CLAUDE_CODE_BRIDGE_OWNER_ACCOUNT_UUID: () => ZT,
  CLAUDE_CODE_BRIDGE_OWNER_ORG_UUID: () => jT,
  CLAUDE_CODE_BRIDGE_PROMPT_SHA256: () => JT,
  CLAUDE_CODE_BRIDGE_SESSION_ID: () => zT,
  CLAUDE_CODE_BRIEF: () => Rp,
  CLAUDE_CODE_BRIEF_UPLOAD: () => Sp,
  CLAUDE_CODE_CCR_SURFACE: () => oR,
  CLAUDE_CODE_CLASSIFIER_SUMMARY: () => QT,
  CLAUDE_CODE_CONTAINER_ID: () => $T,
  CLAUDE_CODE_COORDINATOR_SKILL_GUIDANCE: () => Ip,
  CLAUDE_CODE_DAEMON_COLD_START: () => ip,
  CLAUDE_CODE_DECSTBM: () => qT,
  CLAUDE_CODE_DESKTOP_APP_VERSION: () => oL,
  CLAUDE_CODE_DEV_RAW_CHANGELOG_URL: () => tL,
  CLAUDE_CODE_DIR_SYNC_DISABLE_ANCHORING: () => _L,
  CLAUDE_CODE_DIR_SYNC_ENGINE: () => eL,
  CLAUDE_CODE_DIR_SYNC_FFWD: () => nL,
  CLAUDE_CODE_DIR_SYNC_GIT: () => sL,
  CLAUDE_CODE_DIR_SYNC_STREAM: () => CL,
  CLAUDE_CODE_DISABLE_ATTRIBUTION_BASELINE_REUSE: () => yT,
  CLAUDE_CODE_DISABLE_BG_SHELL_PRESSURE_REAP: () => Up,
  CLAUDE_CODE_DISABLE_DIR_SYNC: () => rL,
  CLAUDE_CODE_DISABLE_HOOK_FORWARDING: () => AL,
  CLAUDE_CODE_DISABLE_PLUGIN_FORWARDING: () => OL,
  CLAUDE_CODE_DISABLE_TURN_HANDOFF: () => DL,
  CLAUDE_CODE_DISABLE_VITALS_EMITTER: () => TL,
  CLAUDE_CODE_DISABLE_WORKING_SYNC: () => LL,
  CLAUDE_CODE_DONT_INHERIT_ENV: () => xp,
  CLAUDE_CODE_DOWNLOAD_DEADLINE_MS_FOR_TESTING: () => cL,
  CLAUDE_CODE_EMIT_SESSION_STATE_EVENTS: () => Np,
  CLAUDE_CODE_EMIT_STARTUP_TIMING: () => lp,
  CLAUDE_CODE_EMIT_TOOL_USE_SUMMARIES: () => Pp,
  CLAUDE_CODE_ENTRYPOINT: () => pL,
  CLAUDE_CODE_ENVIRONMENT_KIND: () => RL,
  CLAUDE_CODE_ENVIRONMENT_RUNNER_VERSION: () => UL,
  CLAUDE_CODE_EVAL_CONFINED: () => jp,
  CLAUDE_CODE_EXIT_AFTER_FIRST_RENDER: () => Mp,
  CLAUDE_CODE_EXIT_AFTER_STOP_DELAY: () => fR,
  CLAUDE_CODE_FLAG_FETCH_WAIT_MS: () => ap,
  CLAUDE_CODE_FOOTER_INDICATOR: () => xL,
  CLAUDE_CODE_FORCE_BRIDGE: () => up,
  CLAUDE_CODE_FORCE_EVALUATE_MEMORY: () => Bp,
  CLAUDE_CODE_FORCE_FULLSCREEN_UPSELL: () => bp,
  CLAUDE_CODE_FORCE_MEMORY_SURVEY: () => Gp,
  CLAUDE_CODE_FORCE_TIP_ID: () => NL,
  CLAUDE_CODE_GIT_BASH_PATH: () => lL,
  CLAUDE_CODE_GLOB_TIMEOUT_SECONDS: () => FR,
  CLAUDE_CODE_GOAL_CHECKIN_MINUTES: () => KR,
  CLAUDE_CODE_HIDE_SETTINGS_HINT: () => PL,
  CLAUDE_CODE_HOLD_REPORT_PARK_AT_INIT: () => CR,
  CLAUDE_CODE_HOME_SEED_HOLD_TIMEOUT_MS: () => ML,
  CLAUDE_CODE_HOME_SEED_VERDICT_TIMEOUT_MS: () => aL,
  CLAUDE_CODE_HOST_PLATFORM: () => uL,
  CLAUDE_CODE_HOST_SESSION_ID: () => BL,
  CLAUDE_CODE_IDE_HOST_OVERRIDE: () => bL,
  CLAUDE_CODE_IDLE_THRESHOLD_MINUTES: () => WR,
  CLAUDE_CODE_IDLE_TOKEN_THRESHOLD: () => vR,
  CLAUDE_CODE_IS_COWORK: () => mp,
  CLAUDE_CODE_LEGACY_BUNDLE: () => EL,
  CLAUDE_CODE_LOOP_KEEPALIVE: () => Hp,
  CLAUDE_CODE_LOOP_PERSISTENT: () => dp,
  CLAUDE_CODE_MANAGED_SETTINGS_PATH: () => GL,
  CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS: () => gR,
  CLAUDE_CODE_MAX_MCP_DESCRIPTION_LENGTH: () => GS,
  CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH: () => YR,
  CLAUDE_CODE_MAX_WEB_SEARCHES_PER_SESSION: () => yR,
  CLAUDE_CODE_MCP_ALLOWLIST_ENV: () => mL,
  CLAUDE_CODE_MCP_APPS_HOST: () => bS,
  CLAUDE_CODE_MCP_AUTO_BACKGROUND_MS: () => aS,
  CLAUDE_CODE_MCP_CONNECTOR_PREWAIT_MS: () => uS,
  CLAUDE_CODE_MCP_MEMORY_CGROUP: () => iR,
  CLAUDE_CODE_MCP_STARTUP_WAIT_MS: () => BS,
  CLAUDE_CODE_MCP_TOOL_IDLE_TIMEOUT: () => MS,
  CLAUDE_CODE_MEMORY_SUBAGENT_APPEND: () => $c,
  CLAUDE_CODE_MOCK_REMOTE_SETTINGS: () => fp,
  CLAUDE_CODE_MOCK_TRIAL: () => Fp,
  CLAUDE_CODE_OVERRIDE_DATE: () => HL,
  CLAUDE_CODE_PARKED_PERMISSION_WAIT_MS: () => ER,
  CLAUDE_CODE_PARKED_RUN_BEFORE_CLEAR: () => nR,
  CLAUDE_CODE_PARKED_STOP_RETIRES: () => eR,
  CLAUDE_CODE_PERFORCE_MODE: () => fL,
  CLAUDE_CODE_PLAN_V2_AGENT_COUNT: () => VR,
  CLAUDE_CODE_PLAN_V2_EXPLORE_AGENT_COUNT: () => wR,
  CLAUDE_CODE_PLUGIN_ATTRIBUTION: () => FL,
  CLAUDE_CODE_PLUGIN_CACHE_DIR: () => KL,
  CLAUDE_CODE_PLUGIN_GIT_TIMEOUT_MS: () => XR,
  CLAUDE_CODE_PLUGIN_SEED_DIR: () => WL,
  CLAUDE_CODE_POST_TURN_MEMORY: () => Kp,
  CLAUDE_CODE_POST_TURN_MEMORY_CONFIG: () => vL,
  CLAUDE_CODE_POST_TURN_MEMORY_SYNC: () => Wp,
  CLAUDE_CODE_POWERUP_ONBOARDING: () => gL,
  CLAUDE_CODE_PROJECT_DIR_NAME: () => YL,
  CLAUDE_CODE_PWSH_PARSE_TIMEOUT_MS: () => hR,
  CLAUDE_CODE_QUESTION_EXTENDED: () => VL,
  CLAUDE_CODE_QUESTION_OPTIONAL_DESCRIPTIONS: () => wL,
  CLAUDE_CODE_QUESTION_PREVIEW_FORMAT: () => yL,
  CLAUDE_CODE_RELAUNCH_TERMINAL_SIZE: () => XL,
  CLAUDE_CODE_REMOTE: () => vp,
  CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE: () => hL,
  CLAUDE_CODE_REMOTE_HERMETIC_MODE: () => gp,
  CLAUDE_CODE_REMOTE_MEMORY_DIR: () => kL,
  CLAUDE_CODE_REMOTE_RAW_EVENTS_FILE: () => ZL,
  CLAUDE_CODE_REMOTE_SEND_KEEPALIVES: () => Yp,
  CLAUDE_CODE_REMOTE_SESSION_ID: () => jL,
  CLAUDE_CODE_REMOTE_SESSION_ORIGIN: () => JL,
  CLAUDE_CODE_REMOTE_SETTINGS_PATH: () => zL,
  CLAUDE_CODE_REMOTE_SETTINGS_POLL_MS: () => kR,
  CLAUDE_CODE_REPL: () => yp,
  CLAUDE_CODE_REPO_CHECKOUTS: () => QL,
  CLAUDE_CODE_RESTRICTED: () => Vp,
  CLAUDE_CODE_RESUME_FROM_SESSION: () => $L,
  CLAUDE_CODE_RESUME_INTERRUPTED_TURN: () => wp,
  CLAUDE_CODE_RESUME_INTERRUPTED_TURN_MAX_AGE_MS: () => hp,
  CLAUDE_CODE_RESUME_PROMPT: () => qL,
  CLAUDE_CODE_RESUME_REASON: () => kp,
  CLAUDE_CODE_RESUME_SOURCE_ALIVE: () => Xp,
  CLAUDE_CODE_RESUME_THRESHOLD_MINUTES: () => ZR,
  CLAUDE_CODE_RESUME_TOKEN_THRESHOLD: () => jR,
  CLAUDE_CODE_RESUME_TOLERATES_CONTEXT_APPENDS: () => sR,
  CLAUDE_CODE_SAFE_MODE: () => Zp,
  CLAUDE_CODE_SANDBOXED: () => Jp,
  CLAUDE_CODE_SCRIPT_CAPS: () => JR,
  CLAUDE_CODE_SCROLL_SPEED: () => oc,
  CLAUDE_CODE_SESSIONEND_HOOKS_TIMEOUT_MS: () => zR,
  CLAUDE_CODE_SESSION_ID: () => tc,
  CLAUDE_CODE_SESSION_KIND: () => _c,
  CLAUDE_CODE_SESSION_NAME: () => Ec,
  CLAUDE_CODE_SESSION_ORIGIN: () => rc,
  CLAUDE_CODE_SESSION_START_ANNOUNCEMENTS_BEFORE_PROMPT: () => zp,
  CLAUDE_CODE_SHELL: () => ec,
  CLAUDE_CODE_SHELL_PREFIX: () => nc,
  CLAUDE_CODE_SIMPLE: () => Qp,
  CLAUDE_CODE_SIMPLE_SYSTEM_PROMPT: () => Cc,
  CLAUDE_CODE_SKILL_ATTRIBUTION: () => Ac,
  CLAUDE_CODE_SPAWN_TIMESTAMP_MS: () => QR,
  CLAUDE_CODE_SSE_PORT: () => $R,
  CLAUDE_CODE_STALL_TIMEOUT_MS_FOR_TESTING: () => Oc,
  CLAUDE_CODE_STARTUP_FAILURE_RESULTS: () => dL,
  CLAUDE_CODE_STOP_HOOK_BLOCK_CAP: () => qR,
  CLAUDE_CODE_SUBPROCESS_ENV_SCRUB: () => $p,
  CLAUDE_CODE_SUPERVISED: () => qp,
  CLAUDE_CODE_SYNC_PLUGINS_BUFFERED_DOWNLOAD: () => tR,
  CLAUDE_CODE_SYNC_PLUGINS_DOWNLOAD_STALL_MS: () => _R,
  CLAUDE_CODE_SYNC_PLUGINS_INSTALL_TIMEOUT_MS: () => tS,
  CLAUDE_CODE_SYNC_PLUGINS_MCP_TIMEOUT_MS: () => _S,
  CLAUDE_CODE_SYNC_PLUGIN_INSTALL_TIMEOUT_MS: () => oS,
  CLAUDE_CODE_SYNC_REUSE_WITHIN_MS: () => ES,
  CLAUDE_CODE_SYNC_SESSION_REFS: () => AR,
  CLAUDE_CODE_SYNC_SKILLS_INSTALL_TIMEOUT_MS: () => rS,
  CLAUDE_CODE_SYNC_SKILLS_WAIT_TIMEOUT_MS: () => sS,
  CLAUDE_CODE_SYNTAX_HIGHLIGHT: () => OR,
  CLAUDE_CODE_SYSTEM_PROMPT_GB_FEATURE: () => Dc,
  CLAUDE_CODE_TAGS: () => Tc,
  CLAUDE_CODE_TASK_LIST_ID: () => cc,
  CLAUDE_CODE_TEAM_TEARDOWN_PARK_TIMEOUT_MS: () => eS,
  CLAUDE_CODE_TERMINAL_MCP_TOOLS: () => Lc,
  CLAUDE_CODE_TEST_ALLOW_REAL_NETWORK: () => DR,
  CLAUDE_CODE_TEST_FIXTURES_ROOT: () => pc,
  CLAUDE_CODE_TEST_FORCE_DENY: () => TR,
  CLAUDE_CODE_TEST_NO_GIT_BASH: () => LR,
  CLAUDE_CODE_TEST_NO_PWSH: () => cR,
  CLAUDE_CODE_TMPDIR: () => Rc,
  CLAUDE_CODE_TMUX_PREFIX: () => Sc,
  CLAUDE_CODE_TMUX_PREFIX_CONFLICTS: () => pR,
  CLAUDE_CODE_TMUX_SESSION: () => Ic,
  CLAUDE_CODE_TMUX_TRUECOLOR: () => RR,
  CLAUDE_CODE_TOOL_MEMORY_CGROUP_EXCLUDE: () => SR,
  CLAUDE_CODE_TOOL_MEMORY_LIMIT: () => IR,
  CLAUDE_CODE_TRIGGER_ID: () => ic,
  CLAUDE_CODE_TUI_JUST_SWITCHED: () => UR,
  CLAUDE_CODE_TUI_TRIAL: () => xR,
  CLAUDE_CODE_ULTRAREVIEW_PREFLIGHT_FIXTURE: () => Uc,
  CLAUDE_CODE_ULTRAREVIEW_QUOTA_FIXTURE: () => xc,
  CLAUDE_CODE_USER_DIALOG_TIMEOUT_MS: () => nS,
  CLAUDE_CODE_VOICE_FORWARD_INTERIMS_TYPED: () => NR,
  CLAUDE_CODE_WORKER_CHECKIN_SCHEDULE: () => Nc,
  CLAUDE_CODE_WORKER_EPOCH: () => CS,
  CLAUDE_CODE_WORKSPACE_HOST_PATHS: () => lc,
  CLAUDE_CONFIG_DIR: () => Pc,
  CLAUDE_COWORK_MEMORY_EXTRA_GUIDELINES: () => Mc,
  CLAUDE_COWORK_MEMORY_GUIDELINES: () => ac,
  CLAUDE_COWORK_MEMORY_INDEX_CONTENT: () => uc,
  CLAUDE_COWORK_MEMORY_PATH_OVERRIDE: () => Bc,
  CLAUDE_ENV_FILE: () => bc,
  CLAUDE_FORCE_DISPLAY_SURVEY: () => lR,
  CLAUDE_INTERNAL_ASSISTANT_TEAM_NAME: () => Gc,
  CLAUDE_INTERNAL_FC_OVERRIDES: () => mc,
  CLAUDE_JOB_DIR: () => Hc,
  CLAUDE_MEMORY_STORES: () => dc,
  CLAUDE_PROJECT_UUID: () => fc,
  CLAUDE_PTY_HEARTBEAT_MS: () => AS,
  CLAUDE_PTY_HOST_EXEC: () => Fc,
  CLAUDE_PTY_ORPHAN_CHECK_MS: () => OS,
  CLAUDE_RELAUNCH_SESSION_ADD_DIRS: () => Kc,
  CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX: () => Wc,
  CLAUDE_REMOTE_WORKFLOW_ARGS: () => vc,
  CLAUDE_REMOTE_WORKFLOW_SCRIPT: () => gc,
  CLAUDE_RUNNER_ACTIVITY_FD: () => DS,
  CLAUDE_RUNNER_FETCH_DEPTH: () => Yc,
  CLAUDE_SECURESTORAGE_CONFIG_DIR: () => yc,
  CLAUDE_SERVE_DRAIN_TIMEOUT_MS: () => TS,
  CLAUDE_SNIP: () => Vc,
  CLAUDE_SSH_LOCAL_BINARY: () => wc,
  CLAUDE_SSH_VERSION: () => Xc,
  CLAUDE_STAGE_FILE_ROOT: () => hc,
  CLAUDE_TMPDIR: () => kc,
  LOCAL_BRIDGE: () => PR,
  MCP_CONNECTION_NONBLOCKING: () => MR,
  MCP_CONNECT_TIMEOUT_MS: () => LS,
  MCP_DISCOVERY_CACHE: () => cS,
  MCP_DISCOVERY_CACHE_MAX_STALE_S: () => pS,
  MCP_DISCOVERY_CACHE_STRIKES: () => RS,
  MCP_DISCOVERY_CACHE_TTL_S: () => SS,
  MCP_OAUTH_CALLBACK_PORT: () => IS,
  MCP_OAUTH_CLIENT_METADATA_URL: () => Zc,
  MCP_PROTOCOL_NEGOTIATION: () => iS,
  MCP_REMOTE_SERVER_CONNECTION_BATCH_SIZE: () => US,
  MCP_SDK_GENERATION: () => NS,
  MCP_SERVER_CONNECTION_BATCH_SIZE: () => xS,
  MCP_TIMEOUT: () => lS,
  MCP_TOOL_TIMEOUT: () => PS,
  MCP_TRUNCATION_PROMPT_OVERRIDE: () => jc,
  SDK_NATIVE_BIN: () => Jc,
  SESSION_INGRESS_URL: () => zc,
  SLASH_COMMAND_TOOL_CHAR_BUDGET: () => mS,
  SYSTEM_REMINDER_MEMORY_CONTEXT: () => Qc,
  TEST_ENABLE_SESSION_PERSISTENCE: () => aR,
  ULTRAPLAN_PROMPT_FILE: () => qc,
  VCR_RECORD: () => uR,
  VITALS_EMITTER_BIN: () => op,
  VOICE_STREAM_BASE_URL: () => tp
});
var zD = D.str(),
  QD = D.str(),
  $D = D.str(),
  qD = D.str(),
  oT = D.str(),
  tT = D.rawStr(),
  _T = D.str(),
  ET = D.str(),
  rT = D.str(),
  sT = D.str(),
  eT = D.str(),
  nT = D.str(),
  CT = D.str(),
  AT = D.str(),
  OT = D.bool(),
  DT = D.str(),
  TT = D.str(),
  LT = D.str(),
  cT = D.str(),
  pT = D.str(),
  RT = D.str(),
  ST = D.str(),
  IT = D.bool(),
  iT = D.str(),
  UT = D.str(),
  xT = D.str(),
  NT = D.str(),
  lT = D.str(),
  PT = D.str(),
  MT = D.str(),
  aT = D.str(),
  uT = D.str(),
  BT = D.str(),
  bT = D.str(),
  GT = D.str(),
  mT = D.str(),
  HT = D.str(),
  dT = D.str(),
  fT = D.str(),
  FT = D.str(),
  KT = D.str(),
  WT = D.str(),
  vT = D.str(),
  gT = D.str(),
  YT = D.int({
    min: 0
  }),
  yT = D.bool(),
  VT = D.str(),
  wT = D.str(),
  XT = D.str(),
  hT = D.str(),
  kT = D.enum(["1", "spent"]),
  ZT = D.str(),
  jT = D.str(),
  JT = D.str(),
  zT = D.str(),
  QT = D.str(),
  $T = D.str(),
  qT = D.str(),
  oL = D.str(),
  tL = D.str(),
  _L = D.bool(),
  EL = D.bool(),
  rL = D.bool(),
  sL = D.bool(),
  eL = D.str(),
  nL = D.str(),
  CL = D.str(),
  AL = D.bool(),
  OL = D.bool(),
  DL = D.bool(),
  TL = D.bool(),
  LL = D.bool(),
  cL = D.str(),
  pL = D.str(),
  RL = D.str(),
  SL = D.bool(),
  IL = D.bool(),
  iL = D.bool(),
  UL = D.str(),
  xL = D.str(),
  NL = D.str(),
  lL = D.str(),
  PL = D.str(),
  ML = D.int({
    min: 0
  }),
  aL = D.int({
    min: 0
  }),
  uL = D.str(),
  BL = D.str(),
  bL = D.str(),
  GL = D.str(),
  mL = D.str(),
  HL = D.str(),
  dL = D.bool(),
  fL = D.str(),
  FL = D.str(),
  KL = D.str(),
  WL = D.str(),
  vL = D.str(),
  gL = D.str(),
  YL = D.str(),
  yL = D.str(),
  VL = D.bool(),
  wL = D.bool(),
  XL = D.str(),
  hL = D.str(),
  kL = D.str(),
  ZL = D.str(),
  jL = D.str(),
  JL = D.str(),
  zL = D.str(),
  QL = D.str(),
  $L = D.str(),
  qL = D.str(),
  oc = D.str(),
  tc = D.str(),
  _c = D.str(),
  Ec = D.str(),
  rc = D.enum(["claude_ai_chat"]),
  ec = D.str(),
  nc = D.str(),
  Cc = D.str(),
  Ac = D.str(),
  Oc = D.str(),
  Dc = D.str(),
  Tc = D.str(),
  Lc = D.str(),
  cc = D.str(),
  pc = D.str(),
  Rc = D.str(),
  Sc = D.str(),
  Ic = D.str(),
  ic = D.str(),
  Uc = D.str(),
  xc = D.str(),
  Nc = D.str(),
  lc = D.str(),
  Pc = D.str(),
  Mc = D.str(),
  ac = D.str(),
  uc = D.str(),
  Bc = D.str(),
  bc = D.str(),
  Gc = D.str(),
  mc = D.str(),
  Hc = D.str(),
  dc = D.str(),
  fc = D.str(),
  Fc = D.str(),
  Kc = D.str(),
  Wc = D.str(),
  vc = D.str(),
  gc = D.str(),
  Yc = D.str(),
  yc = D.str(),
  Vc = D.str(),
  wc = D.str(),
  Xc = D.str(),
  hc = D.str(),
  kc = D.str(),
  Zc = D.str(),
  jc = D.str(),
  Jc = D.str(),
  zc = D.str(),
  Qc = D.bool(),
  $c = D.bool(),
  qc = D.str(),
  op = D.str(),
  tp = D.str(),
  _p = D.bool(),
  Ep = D.bool(),
  rp = D.bool(),
  sp = D.bool(),
  ep = D.bool(),
  np = D.bool(),
  Cp = D.bool(),
  Ap = D.bool(),
  Op = D.bool(),
  Dp = D.bool(),
  Tp = D.bool(),
  Lp = D.bool(),
  cp = D.bool(),
  pp = D.bool(),
  Rp = D.bool(),
  Sp = D.bool(),
  Ip = D.bool(),
  ip = D.bool(),
  Up = D.bool(),
  xp = D.bool(),
  Np = D.bool(),
  lp = D.bool(),
  Pp = D.bool(),
  Mp = D.bool(),
  ap = D.int({
    min: 0
  }),
  up = D.bool(),
  Bp = D.bool(),
  bp = D.bool(),
  Gp = D.bool(),
  mp = D.bool(),
  Hp = D.triBool(),
  dp = D.bool(),
  fp = D.str(),
  Fp = D.bool(),
  Kp = D.bool(),
  Wp = D.bool(),
  vp = D.bool(),
  gp = D.bool(),
  Yp = D.bool(),
  yp = D.triBool(),
  Vp = D.bool(),
  wp = D.bool(),
  Xp = D.str(),
  hp = D.str(),
  kp = D.str(),
  Zp = D.bool(),
  jp = D.bool(),
  Jp = D.bool(),
  zp = D.bool(),
  Qp = D.bool(),
  $p = D.triBool(),
  qp = D.bool(),
  oR = D.str(),
  tR = D.bool(),
  _R = D.int({
    min: 1
  }),
  ER = D.int({
    min: 0
  }),
  rR = D.bool(),
  sR = D.bool(),
  eR = D.bool(),
  nR = D.bool(),
  CR = D.bool(),
  AR = D.bool(),
  OR = D.str(),
  DR = D.bool(),
  TR = D.rawStr(),
  LR = D.str(),
  cR = D.str(),
  pR = D.bool(),
  RR = D.rawStr(),
  SR = D.str(),
  IR = D.str(),
  iR = D.str(),
  UR = D.str(),
  xR = D.str(),
  NR = D.bool(),
  lR = D.bool(),
  PR = D.bool(),
  MR = D.triBool(),
  aR = D.bool(),
  uR = D.bool(),
  BR = D.int(),
  bR = D.int(),
  GR = D.int(),
  mR = D.int({
    min: 1,
    max: 2147483647,
    digitsOnly: !0
  }),
  HR = D.int(),
  dR = D.int(),
  fR = D.int(),
  FR = D.int({
    min: 1
  }),
  KR = D.int({
    min: 0,
    max: 10080,
    digitsOnly: !0
  }),
  WR = D.int(),
  vR = D.int(),
  gR = D.int({
    min: 1,
    digitsOnly: !0
  }),
  YR = D.int({
    min: 1,
    digitsOnly: !0
  }),
  yR = D.int({
    min: 1,
    digitsOnly: !0
  }),
  VR = D.int(),
  wR = D.int(),
  XR = D.int(),
  hR = D.int(),
  kR = D.int(),
  ZR = D.int(),
  jR = D.int(),
  JR = D.int(),
  zR = D.int({
    min: 1
  }),
  QR = D.int(),
  $R = D.int(),
  qR = D.int(),
  oS = D.int({
    min: 1
  }),
  tS = D.int({
    min: 1
  }),
  _S = D.int({
    min: 0
  }),
  ES = D.int({
    min: 0,
    max: 86400000
  }),
  rS = D.int(),
  sS = D.int(),
  eS = D.int({
    min: 1000,
    max: 60000
  }),
  nS = D.int(),
  CS = D.int(),
  AS = D.int({
    min: 1
  }),
  OS = D.int({
    min: 1
  }),
  DS = D.int({
    min: 3
  }),
  TS = D.int({
    min: 1
  }),
  LS = D.int(),
  cS = D.triBool(),
  pS = D.int({
    min: 1
  }),
  RS = D.int({
    min: 1
  }),
  SS = D.int({
    min: 1
  }),
  IS = D.int({
    min: 1
  }),
  iS = D.str(),
  US = D.int({
    min: 1
  }),
  xS = D.int({
    min: 1
  }),
  NS = D.str(),
  lS = D.int(),
  PS = D.int({
    min: 1
  }),
  MS = D.int(),
  aS = D.int(),
  uS = D.int({
    min: 1
  }),
  BS = D.int({
    min: 0
  }),
  bS = D.bool(),
  GS = D.int({
    min: 1,
    digitsOnly: !0
  }),
  mS = D.int({
    min: 1
  });
var m = {};
vo(m, {
  ANTHROPIC_CUSTOM_MODEL_OPTION: () => JS,
  ANTHROPIC_CUSTOM_MODEL_OPTION_DESCRIPTION: () => QS,
  ANTHROPIC_CUSTOM_MODEL_OPTION_NAME: () => zS,
  ANTHROPIC_DEFAULT_FABLE_MODEL: () => FS,
  ANTHROPIC_DEFAULT_FABLE_MODEL_DESCRIPTION: () => WS,
  ANTHROPIC_DEFAULT_FABLE_MODEL_NAME: () => KS,
  ANTHROPIC_DEFAULT_HAIKU_MODEL: () => XS,
  ANTHROPIC_DEFAULT_HAIKU_MODEL_DESCRIPTION: () => kS,
  ANTHROPIC_DEFAULT_HAIKU_MODEL_NAME: () => hS,
  ANTHROPIC_DEFAULT_MODEL: () => dS,
  ANTHROPIC_DEFAULT_OPUS_MODEL: () => vS,
  ANTHROPIC_DEFAULT_OPUS_MODEL_DESCRIPTION: () => YS,
  ANTHROPIC_DEFAULT_OPUS_MODEL_NAME: () => gS,
  ANTHROPIC_DEFAULT_SONNET_MODEL: () => yS,
  ANTHROPIC_DEFAULT_SONNET_MODEL_DESCRIPTION: () => wS,
  ANTHROPIC_DEFAULT_SONNET_MODEL_NAME: () => VS,
  ANTHROPIC_MODEL: () => HS,
  ANTHROPIC_SMALL_FAST_MODEL: () => fS,
  CLAUDE_CODE_3P_PROBE_WROTE_OPUS_DEFAULT: () => jS,
  CLAUDE_CODE_3P_PROBE_WROTE_SONNET_DEFAULT: () => ZS,
  CLAUDE_CODE_ALWAYS_ENABLE_EFFORT: () => nI,
  CLAUDE_CODE_AUTO_MODE_MODEL: () => oI,
  CLAUDE_CODE_BG_CLASSIFIER_MODEL: () => tI,
  CLAUDE_CODE_CLIENT_DATA_URL: () => RI,
  CLAUDE_CODE_DISABLE_1M_CONTEXT: () => TI,
  CLAUDE_CODE_DISABLE_EXPLORE_INHERIT_CAP: () => rI,
  CLAUDE_CODE_DISABLE_FAST_MODE: () => AI,
  CLAUDE_CODE_DISABLE_LEGACY_MODEL_REMAP: () => sI,
  CLAUDE_CODE_DISABLE_UNKNOWN_MODEL_WINDOW_ENFORCEMENT: () => LI,
  CLAUDE_CODE_EFFORT_LEVEL: () => eI,
  CLAUDE_CODE_MAX_EFFORT_REMINDER: () => CI,
  CLAUDE_CODE_MODEL_CATALOG: () => cI,
  CLAUDE_CODE_MODEL_CATALOG_URL: () => pI,
  CLAUDE_CODE_NO_MODEL_FALLBACK: () => EI,
  CLAUDE_CODE_SKIP_FAST_MODE_NETWORK_ERRORS: () => OI,
  CLAUDE_CODE_SKIP_FAST_MODE_ORG_CHECK: () => DI,
  CLAUDE_CODE_SUBAGENT_MODEL: () => $S,
  CLAUDE_CODE_SUBAGENT_MODEL_FORCE: () => qS,
  FALLBACK_FOR_ALL_PRIMARY_MODELS: () => _I
});
var HS = D.str(),
  dS = D.str(),
  fS = D.str(),
  FS = D.str(),
  KS = D.str(),
  WS = D.str(),
  vS = D.str(),
  gS = D.str(),
  YS = D.str(),
  yS = D.str(),
  VS = D.str(),
  wS = D.str(),
  XS = D.str(),
  hS = D.str(),
  kS = D.str(),
  ZS = D.str(),
  jS = D.str(),
  JS = D.str(),
  zS = D.str(),
  QS = D.str(),
  $S = D.str(),
  qS = D.bool(),
  oI = D.str(),
  tI = D.str(),
  _I = D.str(),
  EI = D.bool(),
  rI = D.bool(),
  sI = D.bool(),
  eI = D.str(),
  nI = D.bool(),
  CI = D.triBool(),
  AI = D.bool(),
  OI = D.bool(),
  DI = D.bool(),
  TI = D.bool(),
  LI = D.bool(),
  cI = D.str(),
  pI = D.str(),
  RI = D.str();
var H = {};
vo(H, {
  ALL_PROXY: () => lI,
  ANTHROPIC_BETAS: () => mI,
  ANTHROPIC_CUSTOM_HEADERS: () => HI,
  API_FORCE_IDLE_TIMEOUT: () => kI,
  API_TIMEOUT_MS: () => hI,
  CLAUDE_BYTE_STREAM_IDLE_TIMEOUT_MS: () => oi,
  CLAUDE_CODE_ATTRIBUTION_HEADER: () => FI,
  CLAUDE_CODE_CERT_STORE: () => bI,
  CLAUDE_CODE_CLIENT_CERT: () => MI,
  CLAUDE_CODE_CLIENT_KEY: () => aI,
  CLAUDE_CODE_CLIENT_KEY_PASSPHRASE: () => uI,
  CLAUDE_CODE_DISABLE_MTLS_RELOAD_ON_STALE_CONNECTION: () => BI,
  CLAUDE_CODE_EAGER_FLUSH: () => ri,
  CLAUDE_CODE_EXTRA_BODY: () => dI,
  CLAUDE_CODE_EXTRA_METADATA: () => fI,
  CLAUDE_CODE_FILE_READ_MAX_OUTPUT_TOKENS: () => gI,
  CLAUDE_CODE_FORCE_SYNC_OUTPUT: () => si,
  CLAUDE_CODE_GZIP_CCR_REQUEST_BODIES: () => QI,
  CLAUDE_CODE_GZIP_REQUEST_BODIES: () => zI,
  CLAUDE_CODE_GZIP_REQUEST_BODY_LEVEL: () => $I,
  CLAUDE_CODE_MAX_CONTEXT_TOKENS: () => vI,
  CLAUDE_CODE_MAX_OUTPUT_TOKENS: () => WI,
  CLAUDE_CODE_MAX_RETRIES: () => KI,
  CLAUDE_CODE_MAX_TOOL_USE_CONCURRENCY: () => YI,
  CLAUDE_CODE_MAX_TURNS: () => yI,
  CLAUDE_CODE_PRINT_BG_WAIT_CEILING_MS: () => Ci,
  CLAUDE_CODE_RETRY_WATCHDOG: () => Ei,
  CLAUDE_CODE_SLOW_OPERATION_THRESHOLD_MS: () => ni,
  CLAUDE_ENABLE_BYTE_WATCHDOG: () => ZI,
  CLAUDE_ENABLE_BYTE_WATCHDOG_BEDROCK: () => jI,
  CLAUDE_ENABLE_STREAM_WATCHDOG: () => JI,
  CLAUDE_MOCK_HEADERLESS_429: () => ei,
  CLAUDE_SLOW_FIRST_BYTE_MS: () => _i,
  CLAUDE_STREAM_FIRST_BYTE_TIMEOUT_MS: () => ti,
  CLAUDE_STREAM_IDLE_TIMEOUT_MS: () => qI,
  HTTPS_PROXY: () => II,
  HTTP_PROXY: () => SI,
  MAX_MCP_OUTPUT_TOKENS: () => XI,
  MAX_STRUCTURED_OUTPUT_RETRIES: () => wI,
  MAX_THINKING_TOKENS: () => VI,
  NO_PROXY: () => iI,
  all_proxy: () => PI,
  http_proxy: () => UI,
  https_proxy: () => xI,
  no_proxy: () => NI
});
var SI = D.str(),
  II = D.str(),
  iI = D.str(),
  UI = D.str(),
  xI = D.str(),
  NI = D.str(),
  lI = D.str(),
  PI = D.str(),
  MI = D.str(),
  aI = D.str(),
  uI = D.str(),
  BI = D.bool(),
  bI = D.str(),
  mI = D.str(),
  HI = D.str(),
  dI = D.str(),
  fI = D.str(),
  FI = D.str(),
  KI = D.int(),
  WI = D.int(),
  vI = D.int(),
  gI = D.int(),
  YI = D.int({
    min: 1
  }),
  yI = D.str(),
  VI = D.int(),
  wI = D.int(),
  XI = D.int(),
  hI = D.int(),
  kI = D.int(),
  ZI = D.triBool(),
  jI = D.bool(),
  JI = D.triBool(),
  zI = D.triBool(),
  QI = D.triBool(),
  $I = D.int({
    min: 0,
    max: 9,
    digitsOnly: !0
  }),
  qI = D.int({
    min: 1
  }),
  oi = D.int({
    min: 1
  }),
  ti = D.int({
    min: 1
  }),
  _i = D.int({
    min: 1
  }),
  Ei = D.bool(),
  ri = D.bool(),
  si = D.bool(),
  ei = D.bool(),
  ni = D.int(),
  Ci = D.int({
    min: 0
  });
var d = {};
vo(d, {
  AGENT_PROXY_URL: () => IU,
  ANTHROPIC_AWS_BASE_URL: () => Ni,
  ANTHROPIC_AWS_WORKSPACE_ID: () => li,
  ANTHROPIC_BASE_URL: () => pi,
  ANTHROPIC_BEDROCK_BASE_URL: () => Ii,
  ANTHROPIC_BEDROCK_MANTLE_BASE_URL: () => xi,
  ANTHROPIC_BEDROCK_REGION_PREFIX: () => ii,
  ANTHROPIC_BEDROCK_SERVICE_TIER: () => Ui,
  ANTHROPIC_FOUNDRY_BASE_URL: () => mi,
  ANTHROPIC_FOUNDRY_RESOURCE: () => Hi,
  ANTHROPIC_GOOGLE_CLOUD_BASE_URL: () => ui,
  ANTHROPIC_GOOGLE_CLOUD_LOCATION: () => Mi,
  ANTHROPIC_GOOGLE_CLOUD_PROJECT: () => Pi,
  ANTHROPIC_GOOGLE_CLOUD_WORKSPACE_ID: () => ai,
  ANTHROPIC_SMALL_FAST_MODEL_AWS_REGION: () => Xi,
  ANTHROPIC_UNIX_SOCKET: () => hi,
  ANTHROPIC_VERTEX_BASE_URL: () => Bi,
  ANTHROPIC_VERTEX_PROJECT_ID: () => bi,
  AWS_ACCESS_KEY_ID: () => vi,
  AWS_CONFIG_FILE: () => Ki,
  AWS_DEFAULT_REGION: () => fi,
  AWS_ENDPOINT_URL: () => yi,
  AWS_ENDPOINT_URL_STS: () => Vi,
  AWS_PROFILE: () => Fi,
  AWS_REGION: () => di,
  AWS_SECRET_ACCESS_KEY: () => gi,
  AWS_SESSION_TOKEN: () => Yi,
  AWS_SHARED_CREDENTIALS_FILE: () => Wi,
  AWS_USE_FIPS_ENDPOINT: () => wi,
  CCR_AGENT_PROXY_ENABLED: () => sU,
  CCR_AGENT_PROXY_FRAME_HOSTS: () => cU,
  CCR_AGENT_PROXY_INCLUDE_HOSTS: () => OU,
  CCR_AGENT_PROXY_NO_PROXY_LOCAL_ONLY: () => LU,
  CCR_AGENT_PROXY_RECEIVE_GATE_DISABLED: () => DU,
  CCR_AGENT_PROXY_RELAY_MODE: () => AU,
  CCR_AGENT_PROXY_UPLOAD_GATE_DISABLED: () => TU,
  CCR_ENABLE_BUNDLE: () => pU,
  CCR_FORCE_BUNDLE: () => RU,
  CCR_ON_BRANCH_DEFAULT_GUARD: () => SU,
  CLAUDE_CODE_AGENT_PROXY_GH_SHIM: () => nU,
  CLAUDE_CODE_AGENT_PROXY_GIT_CONFIG: () => eU,
  CLAUDE_CODE_AGENT_PROXY_GIT_HOSTS: () => CU,
  CLAUDE_CODE_API_BASE_URL: () => Si,
  CLAUDE_CODE_ENABLE_GATEWAY_MODEL_DISCOVERY: () => tU,
  CLAUDE_CODE_GATEWAY_MODEL_DISCOVERY_TIMEOUT_MS: () => _U,
  CLAUDE_CODE_GB_BASE_URL: () => EU,
  CLAUDE_CODE_GB_REFRESH_INTERVAL_MS: () => rU,
  CLAUDE_CODE_HOST_GATEWAY_LINEAGE: () => Zi,
  CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST: () => ki,
  CLAUDE_CODE_PROXY_RESOLVES_HOSTS: () => Ji,
  CLAUDE_CODE_SIMULATE_PROXY_USAGE: () => ji,
  CLAUDE_CODE_SKIP_HFI_VERSION_CHECK: () => iU,
  CLAUDE_CODE_USE_ANTHROPIC_AWS: () => Ti,
  CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD: () => Li,
  CLAUDE_CODE_USE_BEDROCK: () => Ai,
  CLAUDE_CODE_USE_FOUNDRY: () => Di,
  CLAUDE_CODE_USE_GATEWAY: () => zi,
  CLAUDE_CODE_USE_MANTLE: () => ci,
  CLAUDE_CODE_USE_VERTEX: () => Oi,
  CLAUDE_GATEWAY_ALLOW_LOOPBACK: () => Qi,
  CLAUDE_GATEWAY_DRAIN_TIMEOUT_MS: () => oU,
  CLAUDE_GATEWAY_LOG_LEVEL: () => qi,
  CLAUDE_GATEWAY_PROXY_IS_EGRESS_BOUNDARY: () => $i,
  CLOUD_ML_REGION: () => Gi,
  _CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL: () => Ri
});
var Ai = D.bool(),
  Oi = D.bool(),
  Di = D.bool(),
  Ti = D.bool(),
  Li = D.bool(),
  ci = D.bool(),
  pi = D.str(),
  Ri = D.bool(),
  Si = D.str(),
  Ii = D.str(),
  ii = D.enum(J),
  Ui = D.str(),
  xi = D.str(),
  Ni = D.str(),
  li = D.str(),
  Pi = D.str(),
  Mi = D.str(),
  ai = D.str(),
  ui = D.str(),
  Bi = D.str(),
  bi = D.str(),
  Gi = D.str(),
  mi = D.str(),
  Hi = D.str(),
  di = D.str(),
  fi = D.str(),
  Fi = D.str(),
  Ki = D.str(),
  Wi = D.str(),
  vi = D.str(),
  gi = D.str(),
  Yi = D.str(),
  yi = D.str(),
  Vi = D.str(),
  wi = D.str(),
  Xi = D.str(),
  hi = D.str(),
  ki = D.bool(),
  Zi = D.bool(),
  ji = D.bool(),
  Ji = D.bool(),
  zi = D.bool(),
  Qi = D.bool(),
  $i = D.bool(),
  qi = D.str(),
  oU = D.int({
    min: 1,
    max: 2147000000,
    digitsOnly: !0
  }),
  tU = D.bool(),
  _U = D.int({
    min: 1,
    max: 2147483647,
    digitsOnly: !0
  }),
  EU = D.str(),
  rU = D.int(),
  sU = D.bool(),
  eU = D.bool(),
  nU = D.bool(),
  CU = D.str(),
  AU = D.str(),
  OU = D.str(),
  DU = D.bool(),
  TU = D.bool(),
  LU = D.bool(),
  cU = D.str(),
  pU = D.bool(),
  RU = D.bool(),
  SU = D.enum(["enforce", "observe", "off"]),
  IU = D.str(),
  iU = D.bool();
var xU = {
  ...P,
  ...d,
  ...m,
  ...u,
  ...H,
  ...b,
  ...M,
  ...G
};
function Dhn(o, t) {
  let _ = Object.create(t);
  for (let [E, r] of Object.entries(o)) {
    let e = _,
      s;
    Object.defineProperty(_, E, {
      get: () => {
        let n = process.env[E];
        if (n !== e) s = r.parse(n), e = n;
        return s;
      },
      enumerable: !0,
      configurable: !0
    });
  }
  return Object.defineProperties(_, {
    set: {
      value: (E, r) => {
        process.env[E] = $Bo(r);
      }
    },
    unset: {
      value: E => {
        delete process.env[E];
      }
    }
  }), _;
}
var a = Dhn(xU, p),
  NU = {},
  Nn = Dhn(NU, null),
  udsInboxShape = import.meta.require("B:/~BUN/root/chunk-6rwhk7zs.js").udsInboxShape,
  Gw = Dhn(udsInboxShape, null);
export { isRunningWithBun as GI, Yd, iA, Phn, cxe, oBe, sBe, qa, I5n, sc, I$, C_e, Mzr, Ihn, Dzr, O5n, la, M5n, Lzr, p1t, jUo, KJ, Nzr, WUo, Ohn, f1t, Mhn, D5n, iBe, YJ, Dhn, a, Nn, Gw };