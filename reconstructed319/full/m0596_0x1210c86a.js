// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  WS,
  Ew,
  eM,
  X2e,
  Na,
  G3,
  C4,
  Le
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  H,
  z,
  pm,
  ye
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  b,
  f,
  Yn
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  v4e,
  qe,
  d,
  k,
  tr,
  kh,
  K,
  WH,
  qt,
  H_,
  Nh
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  J
} from "B:/~BUN/root/chunk-r5zmhp23.js";
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  Ue
} from "B:/~BUN/root/chunk-eev762xg.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  t,
  _,
  ie
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  oo
} from "B:/~BUN/root/chunk-15vbkr6z.js";
import {
  LH
} from "B:/~BUN/root/chunk-jdtvghyw.js";
import {
  St,
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  x
} from "B:/~BUN/root/chunk-mwfggkjt.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  g,
  m,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  lt
} from "B:/~BUN/root/chunk-3mm90xb6.js";
import {
  kM,
  Is,
  q1s
} from "B:/~BUN/root/chunk-nsneqfcc.js";
import {
  Ve
} from "B:/~BUN/root/chunk-myfamxtp.js";
import {
  be,
  yt
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  nb,
  hd,
  _n,
  Sie
} from "B:/~BUN/root/chunk-1s0yt4vj.js";
import {
  ift,
  fXe,
  hoe
} from "B:/~BUN/root/chunk-ybkgfvgz.js";
import {
  Orn,
  fRe,
  T2e
} from "B:/~BUN/root/chunk-v4y99md9.js";
import {
  vn
} from "B:/~BUN/root/chunk-wd9jb4af.js";
import {
  C6,
  sr,
  aa
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  tTn,
  nTn
} from "B:/~BUN/root/chunk-t1tr39xg.js";
import {
  sX
} from "B:/~BUN/root/chunk-dx2wvwvf.js";
import {
  Of
} from "B:/~BUN/root/chunk-bvb659eh.js";
import {
  X
} from "B:/~BUN/root/chunk-g9pw24zp.js";
import {
  Oe
} from "B:/~BUN/root/chunk-4qfwb3rf.js";
var F = Oe(nb(), 1);
import {
  randomBytes as gt
} from "crypto";
import {
  constants as Te
} from "fs";
import {
  access as Ie,
  copyFile as ke,
  readdir as U,
  rename as $e,
  rm as ht,
  stat as G,
  unlink as B,
  writeFile as Ce
} from "fs/promises";
import {
  homedir as N
} from "os";
import {
  basename as Y,
  dirname as Z,
  join as E
} from "path";

function Ye(e) {
  return ift(e) ? e.over.promise : Promise.resolve()
}
var de = 2000;
var L = () => Math.max(de - (Date.now() - pm()), 0);
var pe = () => L() > 0 || fXe();
var fe = 1000;
var me = () => fXe() ? Math.max(L(), fe) : L();
async function ge() {
  while (pe()) await J(me())
}
async function he(e) {
  if (await ge(), _n()) return;
  e.say(), await e.shutDown().catch((n) => t(`refusal after the flag fetch hold failed (${d(n)})`, {
    level: "error"
  })), e.hard()
}

function nt(e, r, n) {
  return e.hasHeld && !ye() ? void he(n) : r()
}
var ot = (e) => e;
var ve = 1;
async function dJr(e, r) {
  let n;
  for (let o = 1; o <= r.attempts; o++) try {
    return await e(AbortSignal.timeout(r.timeoutMs))
  } catch (s) {
    if (n = s, o >= r.attempts) break;
    r.onRetry?.(o, s);
    let u = 500 * 3 ** (o - 1);
    await J(u * (0.75 + Math.random() * 0.5))
  }
  throw n
}
import {
  existsSync as ut
} from "fs";
import {
  open as dt,
  readFile as pt,
  stat as ft
} from "fs/promises";
import {
  homedir as Se
} from "os";
import {
  join as V
} from "path";
import {
  access as it,
  chmod as at,
  writeFile as st
} from "fs/promises";
import {
  join as D
} from "path";

function j() {
  return D(Ue(), "local")
}

function Pe() {
  return D(j(), "claude")
}

function jmi() {
  return (process.argv[1] || "").includes("/.claude/local/node_modules/")
}
async function Ee(e, r, n) {
  try {
    return await st(e, r, {
      encoding: "utf8",
      flag: "wx",
      mode: n
    }), !0
  } catch (o) {
    if (k(o) === "EEXIST") return !1;
    throw o
  }
}
async function ct() {
  try {
    let e = j();
    await ie().mkdir(e), await Ee(D(e, "package.json"), _({
      name: "claude-local",
      version: "0.0.1",
      private: !0
    }, null, 2));
    let r = D(e, "claude");
    if (await Ee(r, `#!/bin/sh
exec "${e}/node_modules/.bin/claude" "$@"`, 493)) await at(r, 493);
    return !0
  } catch (e) {
    return t(`Failed to set up local package environment: ${e}`, {
      level: "error"
    }), !1
  }
}
async function KAt(e, r, n) {
  try {
    if (!await ct()) return m("update_apply", "update_apply_env_setup_failed"), "install_failed";
    let o = r ? r : e === "stable" ? "stable" : "latest",
      s = await lt("npm", ["install", `${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://code.claude.com/docs/en/overview",VERSION:"2.1.319",FEEDBACK_CHANNEL:"https://github.com/anthropics/claude-code/issues",BUILD_TIME:"2026-11-05T18:14:18Z",GIT_SHA:"fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",HOOKS_WORKER_URL:"B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",DD_SOURCEMAP_GROUP:"win32"}.PACKAGE_URL}@${o}`], {
        cwd: j(),
        maxBuffer: 1e6,
        useToolMemoryCgroup: !1
      });
    if (s.code !== 0) return m("update_apply", "update_apply_local_npm_failed"), t(`Failed to install Claude CLI package: ${s.stderr}`, {
      level: "error"
    }), s.code === 190 ? "in_progress" : "install_failed";
    return await Le((u) => ({
      ...u,
      installMethod: "local"
    }), n), g("update_apply"), "success"
  } catch (o) {
    return m("update_apply", "update_apply_local_exception"), a(o), "install_failed"
  }
}
async function h5e() {
  try {
    return await it(D(j(), "node_modules", ".bin", "claude")), !0
  } catch {
    return !1
  }
}

function qAt() {
  let e = i.SHELL || "";
  if (e.includes("zsh")) return "zsh";
  if (e.includes("bash")) return "bash";
  if (e.includes("fish")) return "fish";
  return "unknown"
}
var Re = /^\s*alias\s+claude\s*=/;

function Vlt(e) {
  let r = e?.homedir ?? Se(),
    n = e?.env ?? process.env,
    o = e?.platform ?? "win32",
    s = e?.fileExists ?? ut,
    u = n.ZDOTDIR || r,
    C = o === "darwin" ? [".bash_profile", ".bash_login", ".profile"].find((p) => s(V(r, p))) ?? ".bash_profile" : ".bashrc";
  return {
    zsh: V(u, ".zshrc"),
    bash: V(r, C),
    ...o === "darwin" && {
      bashrc: V(r, ".bashrc")
    },
    fish: V(r, ".config/fish/config.fish")
  }
}

function cJr(e) {
  let r = !1;
  return {
    filtered: e.filter((o) => {
      if (Re.test(o)) {
        let s = o.match(/alias\s+claude\s*=\s*["']([^"']+)["']/);
        if (!s) s = o.match(/alias\s+claude\s*=\s*([^#\n]+)/);
        if (s && s[1]) {
          if (s[1].trim() === Pe()) return r = !0, !1
        }
      }
      return !0
    }),
    hadAlias: r
  }
}
async function Dar(e) {
  try {
    return (await pt(e, {
      encoding: "utf8"
    })).split(`
`)
  } catch (r) {
    if (qt(r)) return null;
    if (WH(r)) return t(`Skipping ${e}: path is a directory`, {
      level: "warn"
    }), null;
    throw r
  }
}
async function uJr(e, r) {
  let n = await dt(e, "w");
  try {
    await n.writeFile(r.join(`
`), {
      encoding: "utf8"
    }), await n.datasync()
  } finally {
    await n.close()
  }
}
var mt = new Set(["EBUSY", "EOPNOTSUPP", "ENOTSUP", "ENOMEM", "ERR_FS_FILE_TOO_LARGE", "ENOTCONN", "EHOSTDOWN", "EHOSTUNREACH", "ETIMEDOUT"]);
async function Z7o(e) {
  let r = Vlt(e);
  for (let n of Object.values(r)) {
    let o = await Dar(n).catch((s) => {
      if (Nh(s) || H_(s) || mt.has(k(s) ?? "")) return t(`Skipping unreadable shell config ${n} during alias scan: ${d(s)}`, {
        level: "warn"
      }), null;
      throw s
    });
    if (!o) continue;
    for (let s of o)
      if (Re.test(s)) {
        let u = s.match(/alias\s+claude=["']?([^"'\s]+)/);
        if (u && u[1]) return u[1]
      }
  }
  return null
}
async function Wmi(e) {
  let r = await Z7o(e);
  if (!r) return null;
  let n = e?.homedir ?? Se(),
    o = r.startsWith("~") ? r.replace("~", n) : r;
  try {
    let s = await ft(o);
    if (s.isFile() || s.isSymbolicLink()) return r
  } catch {}
  return null
}
var _t = "https://downloads.claude.ai/claude-code-releases";
class Ne extends v4e {}

function YAt(e) {
  switch (e) {
    case "windows_running_exe_lock":
      return "update_apply_exe_locked";
    case "native_binary_missing":
      return "update_apply_native_binary_missing";
    case "registry_session_refused":
      return "update_session_refused";
    case void 0:
      return null
  }
}
async function zmi() {
  try {
    let e = hoe();
    await Ye(e);
    let r = await C4("tengu_version_config", {
      minVersion: "0.0.0"
    });
    if (r.minVersion && eM({
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.319",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-11-05T18:14:18Z",
        GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
        HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "win32"
      }.VERSION, r.minVersion)) {
      let n = De({
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.319",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-11-05T18:14:18Z",
        GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
        HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "win32"
      }.VERSION, r.minVersion);
      nt(e, () => wt(r.minVersion), ot({
        say: () => {
          Sie(), C6(n)
        },
        shutDown: () => sr(ve),
        hard: vn
      }))
    }
  } catch (e) {
    a(e)
  }
}

function wt(e) {
  let r = De({
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.319",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-11-05T18:14:18Z",
    GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
    HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "win32"
  }.VERSION, e);
  if (console.error(`
${r}
`), fRe() && Orn()) try {
    oo(_(T2e({
      sessionId: z(),
      message: r,
      reason: "cli_version_too_old",
      resultIndex: null
    })) + `
`)
  } catch (n) {
    t(`[assertMinVersion] startup failure result not written: ${d(n)}`, {
      level: "error"
    })
  }
  aa(ve)
}

function De(e, r) {
  return `It looks like your version of Claude Code (${e}) needs an update.
A newer version (${r} or higher) is required to continue.

To update, please run:
    claude update

This will ensure you have access to the latest features and improvements.`
}
var bt = 300000;
class He {
  lastAutoUpdateCheckAt = 0;
  updateRestoreFailure = null;
  mintedPreservedInodes = new Set
}
var vt = new W(() => new He);

function ne() {
  return vt.of(H().host)
}
var xt = 1e4;

function eQo() {
  return Math.max(0, xt - process.uptime() * 1000)
}

function XAt() {
  let e = ne(),
    r = Date.now();
  if (r - e.lastAutoUpdateCheckAt < bt) return t(`auto-update check throttled (last check ${Math.round((r-e.lastAutoUpdateCheckAt)/1000)}s ago)`), !0;
  return e.lastAutoUpdateCheckAt = r, !1
}
async function Lar() {
  return (await g5e()).maxVersion
}
async function g5e() {
  let e = await Be(),
    r = !1,
    n = e.external || void 0,
    o = n ? F.parse(n)?.version ?? void 0 : void 0;
  if (n && !o) t(`tengu_max_version_config has invalid version '${n}' \u2014 ignoring`, {
    level: "error"
  }), l("tengu_max_version_config_invalid", {
    raw_value: Na(n)
  });
  return {
    maxVersion: o,
    forceDowngradeEnabled: e.external_force_downgrade === !0
  }
}

function Klt(e, r, n) {
  let o = n === "native_update" ? "Native installer" : "AutoUpdater",
    s = F.parse(e);
  if (s && s.compare(r) > 0) return t(`${o}: force-downgrade active \u2014 moving from ${e} to ${r}`), !0;
  return t(`${o}: force-downgrade flag set but current ${e} is not above ${r} \u2014 taking normal upgrade path`), !1
}
async function Gmi() {
  return (await Be()).external_message || void 0
}
async function Be() {
  try {
    return await C4("tengu_max_version_config", {})
  } catch (e) {
    return a(e), {}
  }
}

function fJr(e) {
  if (!F.parse(e)) return t("update target is not a valid semver version \u2014 skip checks constrain nothing", {
    level: "error"
  }), t(`update target (first 300 chars, JSON-encoded): ${LH(JSON.stringify(e.slice(0,300)))}`), null;
  let r = yt()?.minimumVersion;
  if (r) {
    let o = F.parse(r)?.version;
    if (!o) t(`minimumVersion is not a valid semver version \u2014 ignoring. Value (first 300 chars, JSON-encoded): ${LH(JSON.stringify(r.slice(0,300)))}`, {
      level: "error"
    });
    else if (!Ew(e, o)) return `below your minimumVersion setting (${r})`
  }
  let n = be("policySettings")?.requiredMaximumVersion;
  if (n) {
    let o = F.parse(n)?.version;
    if (!o) t(`requiredMaximumVersion is not a valid semver version \u2014 ignoring. Value (first 300 chars, JSON-encoded): ${LH(JSON.stringify(n.slice(0,300)))}`, {
      level: "error"
    });
    else if (!X2e(e, o)) return `above your organization's requiredMaximumVersion (${n})`
  }
  return null
}

function qlt(e) {
  let r = fJr(e);
  if (r) t(`Skipping update to ${e}: ${r}`);
  return r !== null
}
var q = 300000;

function We() {
  return E(Ue(), ".update.lock")
}

function ee() {
  return Ve.state("update-lock")
}
async function Et(e) {
  let r = ee(),
    n = await e.statMeta(r);
  if (n.ok) {
    if (Date.now() - n.value.mtimeMs < q) return !1;
    let u = await e.statMeta(r);
    if (u.ok) {
      if (Date.now() - u.value.mtimeMs < q) return !1;
      let C = await e.delete(r);
      if (!C.ok) return t(`AutoUpdater: failed to remove stale update lock: ${C.error.code}`, {
        level: "error"
      }), !1
    } else if (u.error.code !== "NotFound") return t(`AutoUpdater: failed to re-stat stale update lock: ${u.error.code}`, {
      level: "error"
    }), !1
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
  }), !1
}
async function Pt(e) {
  if (X() && e) return Et(e);
  let r = ie(),
    n = We();
  try {
    let o = await r.stat(n);
    if (Date.now() - o.mtimeMs < q) return !1;
    try {
      let u = await r.stat(n);
      if (Date.now() - u.mtimeMs < q) return !1;
      await r.unlink(n)
    } catch (u) {
      if (!K(u)) return a(u), !1
    }
  } catch (o) {
    if (!K(o)) return a(o), !1
  }
  try {
    return await Ce(n, `${process.pid}`, {
      encoding: "utf8",
      flag: "wx"
    }), !0
  } catch (o) {
    let s = k(o);
    if (s === "EEXIST") return !1;
    if (s === "ENOENT") try {
      return await r.mkdir(Ue()), await Ce(n, `${process.pid}`, {
        encoding: "utf8",
        flag: "wx"
      }), !0
    } catch (u) {
      if (k(u) === "EEXIST") return !1;
      return t(`Failed to create config dir or update lock file: ${u}`, {
        level: "error"
      }), !1
    }
    return t(`AutoUpdater: failed to create update lock file ${n}: ${o}`, {
      level: "error"
    }), !1
  }
}
async function Rt(e) {
  if (X() && e) {
    let o = await e.read([ee()]);
    if (!o.ok) {
      t(`AutoUpdater: failed to release update lock: ${o.error.code}`, {
        level: "error"
      });
      return
    }
    let s = o.value.items[0];
    if (!s.found) return;
    if (Buffer.from(s.value).toString("utf8") === `${process.pid}`) {
      let u = await e.delete(ee());
      if (!u.ok) t(`AutoUpdater: failed to release update lock: ${u.error.code}`, {
        level: "error"
      })
    }
    return
  }
  let r = ie(),
    n = We();
  try {
    if (await r.readFile(n, {
        encoding: "utf8"
      }) === `${process.pid}`) await r.unlink(n)
  } catch (o) {
    if (K(o)) return;
    t(`AutoUpdater: failed to release update lock file ${n}: ${o}`, {
      level: "error"
    })
  }
}

function oe() {
  let e = process.execPath.replace(/\\/g, "/"),
    r = (i.BUN_INSTALL ?? "").replace(/\\/g, "/").replace(/\/+$/, "");
  if (e.includes("/.bun/install/global/") || r && e.startsWith(r + "/install/global/")) return "bun";
  return i.isRunningWithBun() && !Of() ? "bun" : "npm"
}
async function Ke() {
  let e = oe() === "bun",
    r = null;
  if (e) r = await lt("bun", ["pm", "bin", "-g"], {
    cwd: N(),
    useToolMemoryCgroup: !1
  });
  else r = await lt("npm", ["-g", "config", "get", "prefix"], {
    cwd: N(),
    useToolMemoryCgroup: !1
  });
  if (r.code !== 0) return t(`Failed to check ${e?"bun":"npm"} permissions (exit ${r.code}): ${r.stderr.trim()}`, {
    level: "error"
  }), null;
  return r.stdout.trim() || null
}
async function kt() {
  let e = await Ke();
  if (!e) return null;
  if (oe() === "bun") {
    let n = E(e, "claude");
    return {
      execPaths: [n],
      imagePath: n
    }
  }
  if (x() === "windows") return {
    execPaths: [E(e, "claude.cmd"), E(e, "claude.exe")],
    imagePath: E(e, "node_modules", {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.319",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-11-05T18:14:18Z",
      GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.PACKAGE_URL, "bin", "claude.exe")
  };
  let r = E(e, "bin", "claude");
  return {
    execPaths: [r],
    imagePath: r
  }
}
async function Fe(e) {
  let r = Date.now(),
    n = await kt(),
    o = e ? F.parse(e)?.version : void 0,
    s = !1,
    u = !1;
  for (let p of n?.execPaths ?? []) {
    let w = await lt(p, ["--version"], {
        abortSignal: AbortSignal.timeout(45000),
        cwd: N(),
        useToolMemoryCgroup: !1
      }),
      P = F.parse(w.stdout.trim().split(/\s+/)[0])?.version;
    if (w.code === 0 && P != null && (o != null ? P === o : WS(P, {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.319",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-11-05T18:14:18Z",
        GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
        HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "win32"
      }.VERSION))) return {
      outcome: "landed",
      version: P,
      durationMs: Date.now() - r
    };
    if (w.code !== 0) s = !0, u ||= `${w.stdout}
${w.stderr}`.includes(nTn)
  }
  return {
    outcome: u || s && n !== null && await G(n.imagePath).then((p) => p.isFile() && p.size < tTn, () => !1) ? "placeholder_stub" : "inconclusive",
    durationMs: Date.now() - r
  }
}
async function Vmi() {
  try {
    let e = await Ke();
    if (!e) return {
      hasPermissions: !1,
      npmPrefix: null
    };
    try {
      return await Ie(e, Te.W_OK), {
        hasPermissions: !0,
        npmPrefix: e
      }
    } catch {
      return t("Insufficient permissions for global npm install.", {
        level: "error"
      }), {
        hasPermissions: !1,
        npmPrefix: e
      }
    }
  } catch (e) {
    return a(e), {
      hasPermissions: !1,
      npmPrefix: null
    }
  }
}
async function JAt(e) {
  let r = e === "stable" ? "stable" : "latest",
    n = await lt("npm", ["view", `${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://code.claude.com/docs/en/overview",VERSION:"2.1.319",FEEDBACK_CHANNEL:"https://github.com/anthropics/claude-code/issues",BUILD_TIME:"2026-11-05T18:14:18Z",GIT_SHA:"fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",HOOKS_WORKER_URL:"B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",DD_SOURCEMAP_GROUP:"win32"}.PACKAGE_URL}@${r}`, "version", "--prefer-online"], {
      abortSignal: AbortSignal.timeout(5000),
      cwd: N(),
      useToolMemoryCgroup: !1
    });
  if (n.code !== 0) {
    let s = n.stdout.trim();
    if (s && F.parse(s)) {
      if (c("update_check", "update_check_npm_view_stderr_warning"), t(`npm view exited ${n.code} but printed a valid version (${s}) \u2014 treating stderr as a warning`), n.stderr) t(`npm stderr: ${n.stderr.trim()}`);
      return s
    }
    if (m("update_check", "update_check_npm_view_failed"), t(`npm view failed with code ${n.code}`), n.stderr) t(`npm stderr: ${n.stderr.trim()}`);
    else t("npm stderr: (empty)");
    if (n.stdout) t(`npm stdout (first 300 chars, JSON-encoded): ${LH(JSON.stringify(n.stdout.trim().slice(0,300)))}`);
    return null
  }
  let o = n.stdout.trim();
  if (o && !F.parse(o)) return m("update_check", "update_check_npm_view_invalid_stdout"), t("npm view exited 0 but stdout is not a valid semver version \u2014 treating as no result"), t(`npm stdout (first 300 chars, JSON-encoded): ${LH(JSON.stringify(o.slice(0,300)))}`), null;
  return g("update_check"), o || null
}
var Ae = 5000,
  Me = 3;
async function pJr(e) {
  if (St()) return null;
  let r = 0;
  try {
    let o = (await dJr((s) => (r++, sX.get(`${_t}/${e}`, {
      timeout: Ae,
      responseType: "text",
      signal: s
    })), {
      attempts: Me,
      timeoutMs: Ae,
      onRetry: (s, u) => {
        t(`Failed to fetch ${e} from GCS on attempt ${s}/${Me}, retrying: ${u}`)
      }
    })).data.trim();
    if (!F.parse(o)) return m("update_check", "update_check_gcs_invalid_response"), t(`GCS ${e} version response is not a valid semver version \u2014 treating as no result`), t(`GCS response body (first 300 chars, JSON-encoded): ${LH(JSON.stringify(o.slice(0,300)))}`), null;
    if (r > 1) c("update_check", "update_check_gcs_retry");
    else g("update_check");
    return o
  } catch (n) {
    return m("update_check", "update_check_gcs_failed"), t(`Failed to fetch ${e} from GCS after ${r} attempt(s): ${n}`), null
  }
}
async function $t(e) {
  if (St()) return null;
  try {
    let r = await hd.get(`https://formulae.brew.sh/api/cask/${e}.json`, {
        timeout: 5000,
        responseType: "json"
      }),
      n = r.data?.version,
      o = typeof n === "string" ? n.trim() : null;
    if (!o || !F.parse(o)) {
      m("update_check", "update_check_homebrew_invalid_version"), t(`formulae.brew.sh ${e} version is not a valid semver version \u2014 treating as no result`);
      let s = typeof r.data === "string" ? r.data : String(_(r.data));
      return t(`brew response (first 300 chars, JSON-encoded): ${LH(JSON.stringify(s.slice(0,300)))}`), null
    }
    return g("update_check"), o
  } catch (r) {
    return m("update_check", "update_check_homebrew_failed"), t(`Failed to fetch ${e} from formulae.brew.sh: ${r}`), null
  }
}
async function eTn(e, r) {
  let [n, o] = await Promise.all([$t(e), pJr(r)]);
  return n ?? o
}

function Ylt() {
  return ne().updateRestoreFailure
}
async function Ct(e) {
  if (!e.updateRestoreFailure) return;
  if (await ae(e.updateRestoreFailure.originalPath)) {
    e.updateRestoreFailure = null;
    return
  }
  if (e.updateRestoreFailure.preservedPath !== null) e.updateRestoreFailure = {
    originalPath: e.updateRestoreFailure.originalPath,
    preservedPath: await je(e, e.updateRestoreFailure.preservedPath)
  }
}

function ae(e) {
  return Ie(e, Te.F_OK).then(() => !0, () => !1)
}

function Ge() {
  let e = E(Z(process.execPath), "..", "..");
  return [E(e, ".."), e]
}
async function Je() {
  return (await Promise.all(Ge().map((r) => U(r, {
    withFileTypes: !0
  }).then((n) => n.filter((o) => o.isDirectory() && o.name.startsWith(".")).map((o) => E(r, o.name))).catch(() => [])))).flat()
}
async function te(e, r) {
  let n = await G(r, {
    bigint: !0
  }).then((o) => o.ino, () => 0n);
  return n !== 0n && e.mintedPreservedInodes.has(n)
}
async function je(e, r) {
  if (await te(e, r)) return r;
  let n = Y(r),
    o = (await Je()).flatMap((s) => [E(s, n), E(s, "bin", n)]);
  for (let s of o)
    if (await te(e, s)) return s;
  return null
}
async function re(e, r) {
  await ie().mkdir(Z(r));
  try {
    let o = Z(r),
      s = `${Y(r)}.restoring.`;
    for (let u of await U(o))
      if (u.startsWith(s)) await B(E(o, u)).catch(() => {})
  } catch {}
  let n = `${r}.restoring.${gt(4).toString("hex")}`;
  try {
    await ke(e, n);
    try {
      await Is(n, r)
    } catch (o) {
      let s = k(o);
      if (s === void 0 || !kM.has(s)) throw o;
      if (!await ae(r)) throw o;
      try {
        await ke(n, r)
      } catch (u) {
        if (q1s.has(k(u) ?? "")) await B(r).catch(() => {});
        throw u
      }
      await B(n).catch(() => {})
    }
  } catch (o) {
    throw await B(n).catch(() => {}), o
  }
}
async function Ft(e, r) {
  let n = Y(process.execPath).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
    o = new RegExp(`^${n}\\.old\\.(\\d+)$`),
    s = (await Promise.all(r.flatMap((p) => [p, E(p, "bin")].map(async (w) => (await U(w).catch(() => [])).map((P) => o.exec(P)).filter((P) => P !== null).map((P) => ({
      path: E(w, P[0]),
      ts: Number(P[1])
    })))))).flat(),
    C = (await Promise.all(s.map(async (p) => await te(e, p.path) ? [p] : []))).flat().reduce((p, w) => p === null || w.ts > p.ts ? w : p, null);
  if (!C) {
    t(`No preserved ${Y(process.execPath)}.old.<ts> found in ${r.length} retired dir(s) \u2014 sweep restore skipped`);
    return
  }
  try {
    await re(C.path, process.execPath), g("update_apply_heal", {
      heal_kind: b("sweep")
    }), t(`Restored missing ${process.execPath} from preserved copy ${C.path} before update attempt`)
  } catch (p) {
    let w = kh(p);
    m("update_apply_heal", "sweep_restore_failed", {
      ...w && {
        err_code: w
      },
      heal_kind: b("sweep")
    }), t(`Failed to restore missing ${process.execPath} from preserved copy ${C.path}: ${p}`)
  }
}
async function QAt(e, r) {
  let n = ne();
  if (!await Pt(r)) return c("update_apply", "update_apply_lock_contention"), t("Another process is currently installing an update", {
    level: "error"
  }), l("tengu_auto_updater_lock_contention", {
    pid: process.pid,
    currentVersion: Na({
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.319",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-11-05T18:14:18Z",
      GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION)
  }), {
    status: "in_progress"
  };
  let o = n.updateRestoreFailure;
  try {
    await At();
    let s = oe();
    if (s === "npm" && i.isNpmFromWindowsPath()) return m("update_apply", "update_apply_wsl_windows_npm"), t("Windows NPM detected in WSL environment", {
      level: "error"
    }), l("tengu_auto_updater_windows_npm_in_wsl", {
      currentVersion: Na({
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.319",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-11-05T18:14:18Z",
        GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
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
    let u = e ? `${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://code.claude.com/docs/en/overview",VERSION:"2.1.319",FEEDBACK_CHANNEL:"https://github.com/anthropics/claude-code/issues",BUILD_TIME:"2026-11-05T18:14:18Z",GIT_SHA:"fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",HOOKS_WORKER_URL:"B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",DD_SOURCEMAP_GROUP:"win32"}.PACKAGE_URL}@${e}` : {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.319",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-11-05T18:14:18Z",
        GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
        HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "win32"
      }.PACKAGE_URL,
      C = x() === "windows" && Of() && process.execPath.replace(/\\/g, "/").includes("/node_modules/@anthropic-ai/"),
      p = [];
    if (C) {
      let [, y] = Ge(), v = (await Promise.all((await Je()).map(async (h) => await Promise.all([U(h).catch(() => []), U(E(h, "bin")).catch(() => [])]).then(([T, M]) => [...T, ...M].some((I) => /\.exe\.old\.\d+$/.test(I))) ? [h] : []))).flat();
      if (v.length > 0)
        if (await ae(process.execPath)) await Promise.all(v.map((h) => ht(h, {
          recursive: !0,
          force: !0
        }).catch((S) => t(`retired-dir cleanup failed: ${S}`))));
        else await Ft(n, v);
      let A = Date.now(),
        O = await G(process.execPath, {
          bigint: !0
        }).then((h) => h.ino).catch(() => 0n),
        R = [process.execPath];
      for (let h of await U(y).catch(() => []))
        for (let S of ["claude.exe", "cli.exe"]) {
          let T = E(y, h, S);
          if (T === process.execPath) continue;
          let M = await G(T, {
            bigint: !0
          }).then((I) => I.ino).catch(() => -1n);
          if (O && M === O) R.push(T)
        }
      for (let h of R) {
        let S = `${h}.old.${A}`;
        try {
          await $e(h, S)
        } catch {
          continue
        }
        p.push([h, S]);
        let T = await G(S, {
          bigint: !0
        }).then((M) => M.ino, () => 0n);
        if (T !== 0n) n.mintedPreservedInodes.add(T)
      }
    }
    let w = await lt(s, ["install", "-g", u], {
        cwd: N(),
        useToolMemoryCgroup: !1
      }),
      P = 0,
      se = 0,
      Q = [];
    if (p.length && w.code !== 0) {
      for (let [v, A] of p) try {
        await $e(A, v)
      } catch (O) {
        try {
          await re(A, v), t(`Restored ${v} by copy after rename failed: ${O}`), await B(A).catch((R) => t(`Failed to remove ${A} after copy-restore: ${R}`))
        } catch (R) {
          let h = await je(n, A),
            S;
          if (h !== null && h !== A) try {
            await re(h, v), se++, t(`Restored ${v} from retired-dir copy ${h} after rename (${O}) and copy (${R}) both failed`);
            continue
          } catch (M) {
            S = M, t(`Failed to restore ${v} from retired-dir copy ${h}: ${M}`)
          }
          let T = h === null ? b("gone") : h === A ? b("original_dir") : b("retired_dir");
          if (P++, Q.length === 0) {
            let M = kh(O),
              I = kh(R),
              ce = S === void 0 ? void 0 : kh(S);
            m("update_apply", "update_apply_restore_failed", {
              ...M && {
                rename_err_code: M
              },
              ...I && {
                copy_err_code: I
              },
              ...ce && {
                relocate_err_code: ce
              },
              preserved_state: T
            })
          }
          Q.push({
            originalPath: v,
            preservedPath: h
          }), a(qe(new Ne(`Failed to restore ${v} after install failure: rename: ${O}; copy: ${R}; preserved copy: ${h??"not found"}`), `Failed to restore executable after install failure: rename=${tr(O)??"unknown"} copy=${tr(R)??"unknown"} relocate=${S===void 0?h===null?"not_found":"skipped":tr(S)??"unknown"}`))
        }
      }
      if (se > 0 && P === 0) g("update_apply_heal", {
        heal_kind: b("relocate")
      });
      let y = new Set(p.map(([v]) => v));
      n.updateRestoreFailure = Q[0] ?? (n.updateRestoreFailure && !y.has(n.updateRestoreFailure.originalPath) ? n.updateRestoreFailure : null)
    }
    if (w.code !== 0) {
      let y = `${w.stdout} ${w.stderr}`,
        v = Mt(y),
        A = p.length === 0 ? "not_attempted" : P === 0 ? "restored" : "partial";
      if (v === "warning_only") {
        let R = await Fe(e);
        if (R.outcome === "landed") return await Le((h) => ({
          ...h,
          installMethod: "global"
        }), r), n.updateRestoreFailure = null, c("update_apply", "update_apply_npm_install_stderr_warning"), t(`npm/bun exited ${w.code} with only warnings on stderr but the install-prefix re-probe confirms the install landed (now ${R.version}): ${y}`), {
          status: "success",
          probeDurationMs: R.durationMs
        }
      }
      if (l("tengu_auto_updater_npm_failure", {
          npm_exit_code: w.code,
          package_manager: f(s),
          is_bundled_mode: Of(),
          platform: G3(x()),
          windows_self_rename: f(A),
          stderr_signature: f(v),
          npm_error_code: Tt(y) ?? b("none")
        }), x() === "windows" && /\b(?:claude|cli)\.exe\b/i.test(y) && (/\bEBUSY\b|resource busy or locked/i.test(y) || /\bEPERM\b|operation not permitted/i.test(y) && (p.length > 0 || /\b(?:rename|copyfile|unlink)\b[^\r\n]*\b(?:claude|cli)\.exe\b/i.test(y)))) return m("update_apply", "update_apply_exe_locked"), t(`Failed to install new version of claude (running executable is locked): ${y}`, {
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
      }
    }
    let le = await Fe(e);
    switch (le.outcome) {
      case "placeholder_stub": {
        let y = s === "npm" ? await lt("npm", ["config", "get", "ignore-scripts"], {
          abortSignal: AbortSignal.timeout(1e4),
          cwd: N(),
          useToolMemoryCgroup: !1
        }) : null;
        if (y?.code === 0 && y.stdout.trim() === "true") {
          t(`${s} exited 0 and the installed claude is the placeholder stub, but npm install scripts are disabled on purpose; trusting the exit code`);
          break
        }
        return m("update_apply", "update_apply_native_binary_missing"), t(`${s} exited 0 but the installed claude is still the placeholder stub: the platform-native package was not installed`, {
          level: "error"
        }), {
          status: "install_failed",
          failureHint: "native_binary_missing"
        }
      }
      case "inconclusive":
        t(`${s} exited 0; the install-prefix --version probe was inconclusive, trusting the exit code`);
        break;
      case "landed":
        break
    }
    return await Le((y) => ({
      ...y,
      installMethod: "global"
    }), r), n.updateRestoreFailure = null, g("update_apply"), {
      status: "success",
      probeDurationMs: le.durationMs
    }
  } finally {
    if (n.updateRestoreFailure !== null && n.updateRestoreFailure === o) await Ct(n);
    await Rt(r)
  }
}
async function At() {
  let e = Vlt();
  for (let [, r] of Object.entries(e)) try {
    let n = await Dar(r);
    if (!n) continue;
    let {
      filtered: o,
      hadAlias: s
    } = cJr(n);
    if (s) await uJr(r, o), t(`Removed claude alias from ${r}`)
  } catch (n) {
    t(`Failed to remove alias from ${r}: ${n}`, {
      level: "error"
    })
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
  return "unknown"
}

function Tt(e) {
  let r = /\bnpm (?:ERR!|error) code\s+([A-Z][A-Z0-9_]{1,29})(?![A-Za-z0-9_])/.exec(e)?.[1];
  return r === void 0 ? void 0 : Yn(r)
}
export {
  dJr,
  jmi,
  KAt,
  h5e,
  qAt,
  Vlt,
  cJr,
  Dar,
  uJr,
  Z7o,
  Wmi,
  YAt,
  zmi,
  eQo,
  XAt,
  Lar,
  g5e,
  Klt,
  Gmi,
  fJr,
  qlt,
  Vmi,
  JAt,
  pJr,
  eTn,
  Ylt,
  QAt
};
