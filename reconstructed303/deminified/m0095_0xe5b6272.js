// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Me } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { Nn, n3s, Rjt, LGe, F, L, f0, j, ke, ii, so, kp, DA, LA, bv, rre, Gf, gSt, zGe, jgn, de } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { W } from "B:/~BUN/root/chunk-hg8ngszx.js";
import { b, c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { x, H, d, k, G } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Y, SP, je } from "B:/~BUN/root/chunk-89mss1tj.js";
import { z, $n, rf, $Q } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { ne, nt, Hd } from "B:/~BUN/root/chunk-nggrknsv.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { CW, Xc, c8n, ZO, dm, oKs, tUo, wpn, nUo, rUo, oUo, sUo, iUo, aUo, I$r, lUo, dUo, sKs, AW, s7e, iKs, cUo, uhe, c7e, _he, UB, hKs, QBt, wne, N_t, B$r, cm, e1t, EUo, eL, FUo, N_, y7e, H_t, vKs, kKs, aR, _7e, Dpn, K$r, eUr, Lpn, pTe, WUo, zUo, nde, kne, tUr, OW, E0e, T0e, p9n, _5, r1t, B_t, bf, Cze, Ow, f9n, Yx, b7e, Ene, Npn, GUo, nUr, Fpn, rUr, oUr, VUo, j_t, eE, x2, QM, rde, S7e, sUr, iUr, qUo, KUo, YUo, XUo, Hpn, BB, JUo, lUr, QUo, ZUo, eBo, nI, o1t, A0e, Rze, Aze, x0e, P0e, dUr, sF, nBo, rBo, oBo, cUr, sBo, iBo, aBo, lBo, dBo, cBo, uBo, w7e, pBo, fBo, mBo, gBo, hBo, $pn, uUr, s1t, b5, pUr, O0e, mu } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { dre } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { n1r, ln } from "B:/~BUN/root/chunk-jpdys232.js";
import { Bf, _, bc, _o, Kbt as code_7, JB, KW, se, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { VB } from "B:/~BUN/root/chunk-rvc0n7zm.js";
import { Be } from "B:/~BUN/root/chunk-d9rmnpx3.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { Bs } from "B:/~BUN/root/chunk-yw21pggd.js";
import { pt } from "B:/~BUN/root/chunk-cqkcn3bx.js";
import { ce } from "B:/~BUN/root/chunk-nxwmyxnk.js";
import { Sg, fR, wp, dF } from "B:/~BUN/root/chunk-xrp58hm9.js";
import { yr, Js, lF, ejo } from "B:/~BUN/root/chunk-2zk4vqr8.js";
import { X } from "B:/~BUN/root/chunk-yrjpmz6e.js";
import { ct } from "B:/~BUN/root/chunk-6ft8yhc8.js";
import { yi, dr, Wo, qD, ef } from "B:/~BUN/root/chunk-6a9s3k2y.js";
import { n8n, r8n, Hun, Vx, _Bt } from "B:/~BUN/root/chunk-k8003a0x.js";
import { yv, aS, EZe, Dbt } from "B:/~BUN/root/chunk-5ygt6t95.js";
import { yo } from "B:/~BUN/root/chunk-9kme2ye7.js";
import { bp } from "B:/~BUN/root/chunk-8pmnanyd.js";
import { Z5n, XHo } from "B:/~BUN/root/chunk-4sfz9tbn.js";
import { MB } from "B:/~BUN/root/chunk-cr3jjat9.js";
import { N } from "B:/~BUN/root/chunk-nkxgam12.js";
import { o, oe, T, u, _t } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { aE } from "B:/~BUN/root/chunk-3q5m6gqn.js";
import { Hne, g$, _y } from "B:/~BUN/root/chunk-3rzwkd15.js";
import { W2 } from "B:/~BUN/root/chunk-eya7pdzx.js";
import { st } from "B:/~BUN/root/chunk-7aw74be3.js";
import { Qg } from "B:/~BUN/root/chunk-q9dtdza4.js";
import { xl } from "B:/~BUN/root/chunk-648jq7hr.js";
import { m1r as code_6, Zbt } from "B:/~BUN/root/chunk-hz8x9zsh.js";
import { He } from "B:/~BUN/root/chunk-8znbjmp4.js";
import { basename as vt, dirname as ge, join as he, resolve as Re } from "path";
function OB(e, n) {
  t(`Diskless session: skipped the ${e} write to ${n} because no storage backend could take it`, {
    level: "warn"
  }), i("tengu_diskless_write_skipped", {
    writer: c(e)
  });
}
import { dirname as jr } from "path";
function w2(e, {
  uncached = !1
} = {}) {
  return null;
}
var Ht = He(new Map(), e => e.clear());
function xHr(e, {
  uncached: uncached_2 = !1
} = {}) {
  let r = uncached_2 ? void 0 : Ht.get(e);
  if (r !== void 0) return r;
  let s = rf(e);
  if (s === null) return;
  let S;
  try {
    S = oUr();
  } catch {
    return;
  }
  let E = $n(s) === S;
  return Ht.set(e, E), E;
}
var Sa = He(new Map(), e => e.clear());
function Vr(e, {
  uncached: uncached_3 = !1
} = {}) {
  return !1;
}
function PHr(e, {
  uncached: uncached_4 = !1
} = {}) {
  let r = e;
  for (;;) {
    let root = w2(r, {
      uncached: uncached_4
    });
    if (root === null) return null;
    let S = Vr(root, {
      uncached: uncached_4
    });
    if (S !== !1) return {
      root: root,
      readable: S === !0
    };
    let E = jr(root);
    if (E === root) return null;
    r = E;
  }
}
function kt(e, n, uncached_5) {
  let s = PHr(e, {
    uncached: uncached_5
  });
  if (s === null) return n();
  if (!s.readable) return null;
  switch (xHr(s.root, {
    uncached: uncached_5
  })) {
    case !1:
      return s.root;
    case !0:
      return n();
    default:
      return null;
  }
}
function canonicalGitRoot(e) {
  return kt(e, () => Js(e), !1);
}
function Qk(e) {
  return kt(e, () => lF(e), !0);
}
function yun(e) {
  let n = PHr(e);
  return n !== null && xHr(n.root) !== !0 ? n.root : yr(e);
}
function RVs(e) {
  return L([canonicalGitRoot(e), Js(e)].filter(item => item !== null));
}
import { appendFile as Yr, mkdir as Jr, readFile as Xr, writeFile as Zr } from "fs/promises";
import { homedir as Mt } from "os";
import { dirname as Qr, isAbsolute as xt, join as tt } from "path";
async function OHr(e, cwd) {
  let {
    code: code
  } = await ct("git", ["check-ignore", "--", e], {
    preserveOutputOnError: !1,
    cwd: cwd
  });
  return code === 0;
}
async function qr(cwd_2) {
  let {
    stdout: stdout,
    code: code_2
  } = await ct("git", ["config", "--global", "--get", "core.excludesfile"], {
    preserveOutputOnError: !1,
    cwd: cwd_2
  });
  return eo(code_2 === 0 ? stdout : "");
}
function eo(e) {
  let n = e.trim();
  if (n) {
    if (n === "~" || n.startsWith("~/")) return tt(Mt(), n.slice(2));
    if (xt(n)) return n;
  }
  let XDG_CONFIG_HOME = a.XDG_CONFIG_HOME;
  if (XDG_CONFIG_HOME && xt(XDG_CONFIG_HOME)) return tt(XDG_CONFIG_HOME, "git", "ignore");
  return tt(Mt(), ".config", "git", "ignore");
}
async function IHr(e, n = ce()) {
  try {
    if (!(await ejo(n))) return {
      written: !1,
      effective: !1
    };
    let r = e.replaceAll("\\", "/"),
      s = `**/${r}`,
      S = r.endsWith("/") ? `${r}sample-file.txt` : r;
    if (await OHr(S, n)) return {
      written: !1,
      effective: !0
    };
    let E = await qr(n),
      h = Qr(E);
    await Jr(h, {
      recursive: !0
    });
    try {
      if ((await Xr(E, {
        encoding: "utf-8"
      })).includes(s)) {
        let reason = (await Ut(S, n)) ? "already_tracked" : "excludesfile_not_read";
        return t(`[gitignore] '${s}' already present in ${E} but git check-ignore reports not-ignored \u2014 ${$t(reason, S)}`, {
          level: "warn"
        }), {
          written: !1,
          effective: !1,
          reason: reason
        };
      }
      await Yr(E, `
${s}
`);
    } catch (error) {
      if (k(error) === "ENOENT") await Zr(E, `${s}
`, "utf-8");else throw error;
    }
    if (!(await OHr(S, n))) {
      let reason_2 = (await Ut(S, n)) ? "already_tracked" : "excludesfile_not_read";
      return t(`[gitignore] wrote '${s}' to ${E} but git check-ignore still reports not-ignored \u2014 ${$t(reason_2, S)}`, {
        level: "warn"
      }), {
        written: !0,
        effective: !1,
        reason: reason_2
      };
    }
    return {
      written: !0,
      effective: !0
    };
  } catch (error) {
    return t(`Failed to add gitignore entry to global gitignore: ${error instanceof Error ? error.message : String(error)}`, {
      level: "error"
    }), {
      written: !1,
      effective: !1
    };
  }
}
async function Ut(e, cwd_3) {
  let {
    code: code_3
  } = await ct("git", ["ls-files", "--error-unmatch", "--", e], {
    preserveOutputOnError: !1,
    cwd: cwd_3
  });
  return code_3 === 0;
}
function $t(e, n) {
  return e === "already_tracked" ? `'${n}' is tracked in the index; gitignore rules do not apply to tracked files` : "core.excludesfile may point elsewhere";
}
function to(e) {
  return e === "--cloud" || e === "--remote" || e.startsWith("--cloud=") || e.startsWith("--remote=");
}
function Wle() {
  return yv("--attach-serve") !== void 0 || Dbt(to) !== -1 && EZe() && !aS("-p") && !aS("--print");
}
function N5n(e) {
  return e !== "globalConfig" && ef.has(e) && Wle();
}
var Gt = ["BASE_API_URL", "TOKEN_URL", "CLAUDE_AI_ORIGIN", "API_KEY_URL", "ROLES_URL", "MCP_PROXY_URL"];
function IB() {
  return a.CLAUDE_CODE_REMOTE_TOOLS_PIN_STORED_LOGIN === !0;
}
function qFo() {
  return !0;
}
function AVs() {
  return "CLAUDE_CODE_REMOTE_TOOLS_PIN_STORED_LOGIN";
}
function KFo(e) {
  return `Error: serve helper stopped: ${e} does not resolve to this computer's stored claude.ai login on Anthropic's own service`;
}
function no() {
  let e = n1r(),
    n = e.OAUTH_FILE_SUFFIX === "-local-oauth",
    r = URL.parse(a.ANTHROPIC_BASE_URL ?? ""),
    s = bp() && (r === null || r.protocol === "https:"),
    S = n && aE(r?.hostname ?? "");
  if (!s && !S) return "base_url";
  try {
    let E = ln();
    if (Gt.some(item => E[item] !== e[item])) return "oauth_endpoint";
  } catch {
    return "oauth_endpoint";
  }
  if (n && Gt.some(item => !aE(URL.parse(e[item])?.hostname ?? ""))) return "oauth_endpoint";
  return;
}
function YFo() {
  if (!IB()) return;
  let e = no();
  if (e === void 0) return;
  try {
    process.stderr.write(`${KFo(e)}
`);
  } finally {
    process.exit(MB);
  }
}
var _un = He({
  asks: void 0,
  isAsking: !1,
  readAs: void 0,
  told: void 0
}, e => {
  e.asks = void 0, e.isAsking = !1, e.readAs = void 0, e.told = void 0;
});
function bun() {
  let e = _un;
  if (e.isAsking) return e.readAs ??= dm(), e.readAs;
  let n = dm();
  if (e.asks !== void 0) {
    e.isAsking = !0;
    try {
      n = e.asks();
    } finally {
      e.isAsking = !1;
    }
  }
  let r = e.readAs !== void 0 && e.readAs !== n;
  if (e.readAs = n, r) yi().invalidatePolicyLayer();
  return n;
}
var Sun = 5000;
function Zyt(e) {
  yi().internalWrites.set(e, Date.now());
}
function F5n(e, n) {
  let internalWrites = yi().internalWrites,
    s = internalWrites.get(e);
  if (s !== void 0 && Date.now() - s < n) return internalWrites.delete(e), !0;
  return !1;
}
function xVs() {
  yi().internalWrites.clear();
}
import { join as ae } from "path";
var Vt = Object.freeze({
    settings: {},
    errors: [],
    loadState: "absent"
  }),
  hkcu_3 = Object.freeze({
    settings: {},
    errors: []
  });
class Yt {
  mdm = null;
  hkcu = null;
  wslInherits = !1;
  whereAsked = void 0;
  loadPromise = null;
  startLoad(e) {
    if (this.loadPromise) return;
    this.loadPromise = (async () => {
      let n = Date.now(),
        s = await (XHo() ?? Z5n()),
        {
          mdm: mdm,
          hkcu: hkcu,
          wslInherits: wslInherits,
          whereAsked: whereAsked
        } = await Jt(s, e);
      this.replace(mdm, hkcu, wslInherits, whereAsked);
      let duration_ms = Date.now() - n;
      t(`MDM settings load completed in ${duration_ms}ms`);
      try {
        i("tengu_managed_settings_os_read", fo(s, duration_ms));
      } catch {}
      let A = ane();
      if (Object.keys(A.settings).length > 0) {
        t(`MDM settings found: ${Object.keys(A.settings).join(", ")}`);
        try {
          X("info", "mdm_settings_loaded", {
            duration_ms: duration_ms,
            key_count: Object.keys(mdm.settings).length,
            error_count: mdm.errors.length
          });
        } catch {}
      }
    })();
  }
  replace(e, n, r, s) {
    this.mdm = e, this.hkcu = n, this.wslInherits = r, this.whereAsked = s;
  }
  reset() {
    this.mdm = null, this.hkcu = null, this.wslInherits = !1, this.whereAsked = void 0, this.loadPromise = null;
  }
}
var Wt = "@builtin",
  ro = ["prependPlugins", "appendPlugins"];
function oo(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
var io = new z(() => new Yt());
function le() {
  return io.of(j().host);
}
function ao(e) {
  le().startLoad(e);
}
async function e_t() {
  let e = le();
  if (!e.loadPromise) ao();
  await e.loadPromise;
}
function ane() {
  return H5n(le()).mdm ?? Vt;
}
function H5n(e) {
  return e.whereAsked !== void 0 && bun() ? e.whereAsked : e;
}
function t_t() {
  return le().mdm !== null;
}
function at() {
  let e = le();
  return e.loadPromise !== null && e.mdm === null;
}
function wun() {
  return H5n(le()).hkcu ?? hkcu_3;
}
function NJ() {
  return H5n(le()).wslInherits;
}
function QEe(e, n, r, s) {
  le().replace(e, n, r, s);
}
function PVs() {
  let {
    mdm: mdm_2,
    hkcu: hkcu_2,
    wslInherits: wslInherits_2,
    whereAsked: whereAsked_2
  } = le();
  return {
    mdm: mdm_2 ?? Vt,
    hkcu: hkcu_2 ?? hkcu_3,
    wslInherits: wslInherits_2,
    whereAsked: whereAsked_2
  };
}
async function e0e(e) {
  let n = await Z5n();
  return Jt(n, e);
}
function rt(e, file, {
  userWritable = !1
} = {}) {
  let s = pt(e, !1);
  if (!N(s)) return {
    settings: {},
    errors: [f9n(file, {
      userWritable: userWritable
    })],
    documentHasPolicyContent: !1,
    loadState: "didNotLoad"
  };
  let S = [],
    E = s;
  for (let path of userWritable ? p9n : []) {
    if (!(path in E)) continue;
    if (E = E === s ? {
      ...s
    } : E, delete E[path], !T0e(path)) S.push({
      file: file,
      path: path,
      message: `"${path}" is only honored from administrator-controlled managed settings and was ignored in ${file}, which the user account can write.`,
      severity: "warning",
      statusOnly: !0
    });
  }
  if (userWritable) {
    for (let path_2 of ro) {
      if (!(path_2 in E)) continue;
      E = E === s ? {
        ...s
      } : E, delete E[path_2], S.push({
        file: file,
        path: path_2,
        message: `"${path_2}" is only honored from administrator-controlled managed settings and was ignored in ${file}, which the user account can write.`,
        severity: "warning",
        statusOnly: !0
      });
    }
    let enabledPlugins = E.enabledPlugins;
    if (oo(enabledPlugins)) {
      if (Object.entries(enabledPlugins).filter(([w, K]) => w.endsWith(Wt) || K !== !1).length > 0) {
        E = E === s ? {
          ...s
        } : E;
        let w = Bs(enabledPlugins, (K, Z) => !Z.endsWith(Wt) && K === !1);
        if (Object.keys(w).length > 0) E.enabledPlugins = w;else delete E.enabledPlugins;
        S.push({
          file: file,
          path: "enabledPlugins",
          message: `"enabledPlugins" entries that enable a plugin, or name a built-in, are only honored from administrator-controlled managed settings and were ignored in ${file}, which the user account can write.`,
          severity: "warning",
          statusOnly: !0
        });
      }
    }
  }
  let {
      settings: settings,
      errors: errors,
      documentHasPolicyContent: documentHasPolicyContent,
      loadState: loadState,
      onlySubstitutes: onlySubstitutes
    } = E0e(E, file),
    C = [...S, ...errors];
  return {
    settings: settings ?? {},
    errors: userWritable ? C.map(item => ({
      ...(item.severity === "warning" && !item.startupFatal ? item : {
        ...lo(item),
        severity: "warning",
        statusOnly: !0
      }),
      userWritable: !0
    })) : C,
    documentHasPolicyContent: documentHasPolicyContent,
    loadState: loadState,
    ...(onlySubstitutes && {
      onlySubstitutes: onlySubstitutes
    })
  };
}
function lo({
  startupFatal: startupFatal,
  loadedWithoutGuardHook: loadedWithoutGuardHook,
  ...r
}) {
  return r;
}
function Kt(file_2, n, r, errno) {
  return {
    file: file_2,
    path: "",
    message: `Managed settings document (${file_2}) could not be read: ${n}; none of its settings are in effect.`,
    severity: r ? "warning" : "fatal",
    statusOnly: !0,
    errorClass: "unreadable",
    ...(errno !== void 0 && {
      errno: errno
    }),
    ...(r && {
      userWritable: !0
    })
  };
}
function Bt(e, n = "Settings") {
  let r = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
    regExp = new RegExp(`^[ \\t]+${r}[ \\t]+REG_(?:EXPAND_)?SZ[ \\t]+([\\s\\S]*)`, "im"),
    S = e.match(regExp)?.[1]?.trimEnd();
  return S ? S : null;
}
var co = new Map([["ENOENT", b("ENOENT")], ["EACCES", b("EACCES")], ["EPERM", b("EPERM")], ["ENOEXEC", b("ENOEXEC")], ["EAGAIN", b("EAGAIN")], ["EMFILE", b("EMFILE")], ["ENOMEM", b("ENOMEM")], ["ETIMEDOUT", b("ETIMEDOUT")], ["ERR_CHILD_PROCESS_STDIO_MAXBUFFER", b("ERR_CHILD_PROCESS_STDIO_MAXBUFFER")]]),
  uo = new Map([["SIGTERM", b("SIGTERM")], ["SIGKILL", b("SIGKILL")], ["SIGINT", b("SIGINT")]]);
function go(e) {
  if (!e) return;
  return co.get(e) ?? b("other");
}
function po(e) {
  if (!e) return;
  return uo.get(e) ?? b("other");
}
function zt(e, n) {
  if (!n) return {};
  return {
    [`${e}_status`]: c(n.status),
    [`${e}_exit_code`]: n.exitCode ?? void 0,
    [`${e}_errno`]: go(n.errno),
    [`${e}_signal`]: po(n.signal),
    [`${e}_duration_ms`]: n.durationMs
  };
}
function fo(e, await_ms) {
  return {
    is_wsl: _Bt(),
    await_ms: await_ms,
    ...zt("hklm", e.outcomes.hklm),
    ...zt("hkcu", e.outcomes.hkcu)
  };
}
async function Jt(e, n, r = !1) {
  let errors_2 = [],
    S = !1,
    loadState_2 = "absent";
  for (let B of e.plistStdouts ?? []) {
    let {
      label: label,
      userWritable: userWritable_2
    } = B;
    if (userWritable_2 && S) continue;
    let J = B.stdout === null ? {
      settings: {},
      errors: [Kt(label, B.unreadReason, userWritable_2, B.unreadErrno)],
      documentHasPolicyContent: !1,
      loadState: "didNotLoad",
      ...(userWritable_2 && {
        userWritable: userWritable_2
      })
    } : {
      ...rt(B.stdout, label, {
        userWritable: userWritable_2
      }),
      ...(userWritable_2 && {
        userWritable: userWritable_2
      })
    };
    if (userWritable_2 ? o1t(J.settings) : J.documentHasPolicyContent) return {
      mdm: {
        ...J,
        errors: [...errors_2, ...J.errors],
        documentHasPolicyContent: !0
      },
      hkcu: hkcu_3,
      wslInherits: !1
    };
    if (S ||= P0e(J), errors_2.push(...J.errors), !userWritable_2) loadState_2 = x0e(loadState_2, J.loadState);
  }
  let h = `Registry: ${n8n}\\${Hun}`,
    mdm_3 = null,
    P = "disarmed",
    A = `Registry: ${r8n}\\${Hun}`;
  if (!r && (e.hklmStdout !== null || e.hklmUnreadReason !== void 0 || e.hkcuStdout), e.hklmStdout !== null) {
    let B = Bt(e.hklmStdout) ?? "";
    mdm_3 = rt(B, h);
    let U = pt(B, !1);
    if (N(U)) P = cUo(U);
  } else if (e.hklmUnreadReason !== void 0) mdm_3 = {
    settings: {},
    errors: [Kt(h, e.hklmUnreadReason, !1)],
    documentHasPolicyContent: !1,
    loadState: "didNotLoad"
  };
  let O = mdm_3 !== null && P0e(mdm_3);
  if (mdm_3) errors_2.push(...mdm_3.errors), loadState_2 = x0e(loadState_2, mdm_3.loadState);
  let C = _Bt(),
    v = "disarmed",
    M = h,
    managedDocumentLinks = [];
  if (C) {
    if (v = P, v !== "armed") {
      let B = await So(n);
      if (managedDocumentLinks = B.links, B.flag === "armed" || v === "disarmed") v = B.flag, M = B.unreadableFlagPath ?? Vx;
      if (v === "disarmed") errors_2.push(...B.records), loadState_2 = x0e(loadState_2, B.loadState);
    }
  }
  let wslInherits_3 = v !== "disarmed",
    mdm_4 = {
      settings: {},
      errors: errors_2,
      loadState: loadState_2
    };
  if (C && !wslInherits_3) {
    let B = new Set(mdm_3?.errors.filter(U => U.severity === "warning"));
    return {
      mdm: {
        ...mdm_4,
        errors: mdm_4.errors.map(item => B.has(item) ? {
          ...item,
          wslIgnored: !0
        } : item),
        ...(managedDocumentLinks.length > 0 && {
          managedDocumentLinks: managedDocumentLinks
        })
      },
      hkcu: hkcu_3,
      wslInherits: !1
    };
  }
  if (mdm_3 && O) return {
    mdm: mdm_3,
    hkcu: hkcu_3,
    wslInherits: wslInherits_3
  };
  if (v === "unreadable") {
    let B = await it(Vx, n),
      withheldFlagRecord = GUo(M);
    return {
      mdm: {
        ...mdm_4,
        errors: B ? mdm_4.errors : [...mdm_4.errors, withheldFlagRecord],
        ...(B && {
          withheldFlagRecord: withheldFlagRecord
        }),
        documentHasPolicyContent: !0,
        loadState: x0e(mdm_4.loadState, "loaded")
      },
      hkcu: hkcu_3,
      wslInherits: wslInherits_3
    };
  }
  if (e.hkcuStdout !== null && !de() && !(await mo(wslInherits_3, n))) {
    let B = rt(Bt(e.hkcuStdout) ?? "", A, {
      userWritable: !0
    });
    if (!C || B.settings.wslInheritsWindowsSettings === !0) {
      let {
        wslInheritsWindowsSettings: wslInheritsWindowsSettings,
        managedSourcesBehavior: managedSourcesBehavior,
        ...settings_2
      } = B.settings;
      return {
        mdm: mdm_4,
        hkcu: {
          settings: settings_2,
          errors: B.errors
        },
        wslInherits: wslInherits_3
      };
    }
    if (B.errors.length > 0) return {
      mdm: mdm_4,
      hkcu: {
        settings: {},
        errors: B.errors
      },
      wslInherits: wslInherits_3
    };
  }
  return {
    mdm: mdm_4,
    hkcu: hkcu_3,
    wslInherits: wslInherits_3
  };
}
async function Ne(e, n) {
  if (W() && n !== void 0) return (await _y(e, bf)).content;
  return g$(e, bf);
}
async function mo(e, n) {
  if (e && (await it(Vx, n))) return !0;
  return it(aR(), n);
}
async function jt(e, n) {
  let r;
  try {
    r = await Ne(e, n);
  } catch (error) {
    return !G(error);
  }
  try {
    let s = Ow(r, e, !0);
    return P0e({
      ...s,
      loadState: Aze(s)
    });
  } catch {
    return !0;
  }
}
async function XFo(e) {
  if (!_Bt() || !le().wslInherits) return "";
  let n = [];
  try {
    n.push(await Ne(ae(Vx, "managed-settings.json"), e));
  } catch (error) {
    n.push(ot(error));
  }
  try {
    let r = ae(Vx, "managed-settings.d"),
      s = (await se().readdir(r)).filter(item => (item.isFile() || item.isSymbolicLink()) && item.name.endsWith(".json") && !item.name.startsWith(".")).map(item => item.name).sort();
    for (let S of s) try {
      n.push(`${S}\x00${await Ne(ae(r, S), e)}`);
    } catch (error) {
      n.push(`${S}\x00${ot(error)}`);
    }
  } catch (error) {
    let s = ot(error);
    if (s !== "") n.push(s);
  }
  return n.join("\x01");
}
function ot(e) {
  return be(e) ? "" : "\x00unreadable";
}
function be(e) {
  let n = k(e);
  return n === "ENOENT" || n === "ENOTDIR";
}
async function So(e) {
  let records = [],
    loadState_3 = "absent",
    links = [],
    S = new Map();
  async function E(C, v) {
    let M = ae(Vx, ...C),
      w;
    try {
      w = await Ne(M, e);
    } catch (error) {
      if (be(error)) return "disarmed";
      records.push(Npn(M, error)), loadState_3 = "didNotLoad";
    }
    let K = await kKs(Vx, C, v, S);
    if (K !== null) links.push(K);
    if (w === void 0) return "disarmed";
    let Z = w.trim() === "" ? {} : pt(w, !1);
    if (!N(Z)) return records.push(f9n(M)), loadState_3 = "didNotLoad", "disarmed";
    return loadState_3 = x0e(loadState_3, "loaded"), cUo(Z);
  }
  let h = ae(Vx, "managed-settings.json"),
    flag = await E(["managed-settings.json"]);
  if (flag === "armed") return {
    flag: flag,
    records: records,
    loadState: loadState_3,
    links: links
  };
  let unreadableFlagPath = flag === "unreadable" ? h : void 0,
    A = ae(Vx, "managed-settings.d"),
    O;
  try {
    O = await se().readdir(A);
  } catch (error) {
    if (!be(error)) records.push(Npn(A, error, "directory")), loadState_3 = "didNotLoad";
    return {
      flag: flag,
      unreadableFlagPath: unreadableFlagPath,
      records: records,
      loadState: loadState_3,
      links: links
    };
  }
  for (let C of O) {
    if (!(C.isFile() || C.isSymbolicLink()) || !C.name.endsWith(".json") || C.name.startsWith(".")) continue;
    let flag_2 = await E(["managed-settings.d", C.name], C.isSymbolicLink());
    if (flag_2 === "armed") return {
      flag: flag_2,
      records: records,
      loadState: loadState_3,
      links: links
    };
    if (flag_2 === "unreadable") flag = flag_2, unreadableFlagPath ??= ae(A, C.name);
  }
  return {
    flag: flag,
    unreadableFlagPath: unreadableFlagPath,
    records: records,
    loadState: loadState_3,
    links: links
  };
}
async function it(e, n) {
  if (await jt(ae(e, "managed-settings.json"), n)) return !0;
  let r = ae(e, "managed-settings.d"),
    s;
  try {
    s = await se().readdir(r);
  } catch (error) {
    return !be(error);
  }
  for (let S of s) if ((S.isFile() || S.isSymbolicLink()) && kne(S.name) && (await jt(ae(r, S.name), n))) return !0;
  return !1;
}
import { posix as Kn, win32 as Bn } from "path";
import { win32 as qt } from "path";
var Xt = ["-NoProfile", "-NonInteractive", "-ExecutionPolicy", "Bypass"],
  en = "C:\\Windows",
  we = "C:\\Program Files",
  ve = `${en}\\System32`,
  lt = `${ve}\\WindowsPowerShell\\v1.0`,
  Eo = `${ve}\\cmd.exe`,
  ho = [`${we}\\PowerShell\\7\\pwsh.exe`, `${we}\\PowerShell\\7-preview\\pwsh.exe`, `${lt}\\powershell.exe`];
function Ro() {
  if (I() !== "windows") return null;
  for (let e of ho) {
    let n = $Q(e);
    if (n === null) {
      if (se().existsSync(e)) return null;
      continue;
    }
    if (n.toLowerCase() === e.toLowerCase()) return e;
  }
  return null;
}
var error_2 = "PowerShell not found at any of its stock install locations on C: (fixed absolute candidates only; PATH is never consulted)",
  dt = "CLAUDE_CODE_POLICY_HELPER_PSMODULEPATH",
  gt = "CLAUDE_CODE_POLICY_HELPER_PS1_PATH",
  Ao = `$env:PSModulePath = $env:${dt}; `,
  To = "if ($ExecutionContext.SessionState.LanguageMode -eq 'FullLanguage') { try { [Console]::OutputEncoding = [System.Text.UTF8Encoding]::new() } catch {} }; ";
function tn(e) {
  return `${Ao}${To}$LASTEXITCODE = 0; try { ${e} } catch { Write-Error $_; exit 1 }; exit $LASTEXITCODE`;
}
var Oo = tn(`& ($env:${gt})`),
  Io = tn("Invoke-Expression (@($input) -join [char]10)");
function Co(e) {
  return L([`${e}\\Modules`, `${we}\\PowerShell\\Modules`, `${we}\\WindowsPowerShell\\Modules`, `${lt}\\Modules`]).join(";");
}
function No(e) {
  return L([e, ve, en, `${ve}\\Wbem`, lt]).join(";");
}
var bo = ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC",
  wo = ["DOTNET_", "COMPLUS_", "COR_", "CORECLR_", "APPDOMAIN_MANAGER_"],
  vo = new Set(["DEVPATH", "__PSLOCKDOWNPOLICY", "PSMODULEANALYSISCACHEPATH", "PSMODULEPATH", "PATH", "PATHEXT", "COMSPEC", "TERM", dt, gt]),
  Lo = ["LD_", "DYLD_", "BASH_FUNC_", "__BASH_FUNC<", "LC_"],
  Do = new Set(["ENV", "BASH_ENV", "SHELLOPTS", "PS4", "GCONV_PATH", "IFS", "PWD", "CDPATH", "OLDPWD", "TMOUT", "POSIXLY_CORRECT", "BASHOPTS", "BASH_COMPAT", "EXECIGNORE", "BASH_SOURCE_PATH", "BASH_LOADABLES_PATH", "GLOBIGNORE", "GLOBSORT", "LOCPATH", "PATH_LOCALE", "NLSPATH", "LANG", "TMPDIR", "TMP", "TEMP"]),
  Fo = "/usr/bin:/bin:/usr/sbin:/sbin";
function Zt(e, n, r, s) {
  for (let S of Object.keys(e)) {
    let E = s(S);
    if (n.has(E) || r.some(item => E.startsWith(item))) delete e[S];
  }
}
function nn(e, n) {
  let r = {
    ...e
  };
  switch (n.routedInterpreter) {
    case void 0:
      return r;
    case "sh":
      return Zt(r, Do, Lo, s => s), r.PATH = Fo, r.LC_ALL = "C", r;
    case "pwsh":
      {
        Zt(r, vo, wo, S => S.toUpperCase());
        let s = qt.dirname(n.file);
        if (r.PSModulePath = Co(s), r[dt] = r.PSModulePath, r.PATH = No(s), r.PATHEXT = bo, r.COMSPEC = Eo, r.TERM = "dumb", n.ps1Path !== void 0) r[gt] = n.ps1Path;
        return r;
      }
  }
}
function rn(e) {
  return I() === "windows" ? qt.dirname(e.file) : "/";
}
function on(e) {
  if (e.script != null) {
    if (e.interpreter === "sh") return {
      plan: {
        file: "/bin/sh",
        args: ["-s"],
        input: e.script,
        routedInterpreter: "sh"
      }
    };
    return Qt({
      args: [...Xt, "-Command", Io],
      input: e.script
    });
  }
  let {
    path: n
  } = e;
  if (n == null) return {
    error: "no path or script configured",
    code: "bad_path"
  };
  if (I() !== "windows" || !sUo(n)) return {
    plan: {
      file: n,
      args: []
    }
  };
  return Qt({
    args: [...Xt, "-Command", Oo],
    ps1Path: n
  });
}
function Qt(e) {
  let file_3 = Ro();
  if (file_3 === null) return {
    error: error_2,
    code: "interpreter_unavailable"
  };
  return {
    plan: {
      file: file_3,
      routedInterpreter: "pwsh",
      ...e
    }
  };
}
async function sn(e, n, r) {
  if (e.routedInterpreter !== void 0) return null;
  let s;
  try {
    s = await je(Ho(e.file, r), n);
  } catch (error) {
    return `cannot stat path (${k(error) ?? "unknown error"}): ${e.file}`;
  }
  if (s === void 0) return ft(e.file, n);
  return s.isFile() ? null : `path is not a regular file: ${e.file}`;
}
function Ho(e, n) {
  let r = n.get(e);
  if (r === void 0) {
    r = se().stat(e), n.set(e, r);
    let s = () => n.delete(e);
    r.then(s, s);
  }
  return r;
}
function ft(e, n) {
  return `cannot stat path (timed out after ${n} ms): ${e}`;
}
var ko = ["ANTHROPIC_API_KEY", "CLAUDE_CODE_OAUTH_TOKEN", "CLAUDE_CODE_ARTIFACTS_API_TOKEN", "CLAUDE_CODE_MEMORY_API_TOKEN", "CLAUDE_CODE_SLACK_TAG_TOKEN", "ANTHROPIC_AUTH_TOKEN", "ANTHROPIC_FOUNDRY_API_KEY", "ANTHROPIC_FOUNDRY_AUTH_TOKEN", "ANTHROPIC_AWS_API_KEY", "ANTHROPIC_CUSTOM_HEADERS", "AWS_SECRET_ACCESS_KEY", "AWS_SESSION_TOKEN", "AWS_BEARER_TOKEN_BEDROCK", "GOOGLE_APPLICATION_CREDENTIALS", "GOOGLE_GHA_CREDS_PATH", "AZURE_CLIENT_SECRET", "IDENTITY_HEADER", "MSI_SECRET", "AZURE_CLIENT_CERTIFICATE_PATH", "AZURE_CLIENT_CERTIFICATE_PASSWORD", "AZURE_PASSWORD", "AZURE_FEDERATED_TOKEN_FILE", "AWS_WEB_IDENTITY_TOKEN_FILE", "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI", "AWS_CONTAINER_CREDENTIALS_FULL_URI", "AWS_CONTAINER_AUTHORIZATION_TOKEN", "AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE", "CLOUDSDK_AUTH_ACCESS_TOKEN", "GOOGLE_OAUTH_ACCESS_TOKEN", "CLAUDE_CODE_OAUTH_REFRESH_TOKEN", "HF_TOKEN", "HUGGING_FACE_HUB_TOKEN", "HUGGINGFACEHUB_API_TOKEN", "NODE_AUTH_TOKEN", "NUGET_AUTH_TOKEN", "CARGO_REGISTRY_TOKEN", "TWINE_PASSWORD", "TWINE_USERNAME", "PYPI_TOKEN", "PYPI_API_TOKEN", "UV_PUBLISH_TOKEN", "UV_PUBLISH_PASSWORD", "UV_PUBLISH_USERNAME", "FLIT_PASSWORD", "FLIT_USERNAME", "HATCH_INDEX_AUTH", "HATCH_INDEX_USER", "GEM_HOST_API_KEY", "MATURIN_PYPI_TOKEN", "MATURIN_PASSWORD", "MATURIN_USERNAME", "CONAN_LOGIN_USERNAME", "CONAN_PASSWORD", "ANACONDA_API_TOKEN", "BINSTAR_API_TOKEN", "VAULT_TOKEN", "VAULT_AUTH_TOKEN", "VAULT_ROLE_ID", "VAULT_SECRET_ID", "CONSUL_HTTP_TOKEN", "CONSUL_HTTP_AUTH", "NOMAD_TOKEN", "NOMAD_HTTP_AUTH", "CI_REGISTRY_USER", "CI_DEPLOY_USER", "JF_USER", "FASTLANE_SESSION", "MATCH_GIT_BASIC_AUTHORIZATION", "SONAR_TOKEN", "SONARQUBE_SCANNER_PARAMS", "SONAR_SCANNER_JSON_PARAMS", "SLACK_WEBHOOK_URL", "SLACK_WEBHOOK", "DISCORD_WEBHOOK", "DISCORD_WEBHOOK_URL", "TEAMS_WEBHOOK_URL", "MS_TEAMS_WEBHOOK_URI", "ANTHROPIC_IDENTITY_TOKEN", "ANTHROPIC_IDENTITY_TOKEN_FILE", "CLOUDSDK_AUTH_ACCESS_TOKEN_FILE", "CLOUDSDK_AUTH_AUTHORIZATION_TOKEN_FILE", "AZURE_AUTH_LOCATION", "ACTIONS_ID_TOKEN_REQUEST_TOKEN", "ACTIONS_ID_TOKEN_REQUEST_URL", "ACTIONS_RUNTIME_TOKEN", "ACTIONS_RUNTIME_URL", "ALL_INPUTS", "VSS_NUGET_EXTERNAL_FEED_ENDPOINTS", "ARTIFACTS_CREDENTIALPROVIDER_EXTERNAL_FEED_ENDPOINTS", "VSS_NUGET_ACCESSTOKEN", "ARTIFACTS_CREDENTIALPROVIDER_ACCESSTOKEN", "COMPOSER_AUTH", "OVERRIDE_GITHUB_TOKEN", "DEFAULT_WORKFLOW_TOKEN", "SSH_SIGNING_KEY"],
  Mo = ["AWS_SHARED_CREDENTIALS_FILE", "AWS_CONFIG_FILE", "CLOUDSDK_CONFIG", "AZURE_CONFIG_DIR", "KUBECONFIG", "NETRC", "PGPASSFILE", "PGSERVICEFILE", "DOCKER_CONFIG", "GH_CONFIG_DIR", "GNUPGHOME", "NPM_CONFIG_USERCONFIG", "NPM_CONFIG_GLOBALCONFIG", "SSH_AUTH_SOCK", "GIT_SSH_COMMAND", "GIT_SSH", "GIT_ASKPASS", "SSH_ASKPASS", "SSH_AGENT_PID", "TF_CLI_CONFIG_FILE", "WGETRC", "PIP_CONFIG_FILE", "UV_CONFIG_FILE", "RCLONE_CONFIG", "BOTO_CONFIG", "BOTO_PATH", "S3CMD_CONFIG", "SOPS_AGE_KEY_FILE", "ANSIBLE_VAULT_PASSWORD_FILE", "ANSIBLE_VAULT_IDENTITY_LIST", "ANSIBLE_CONFIG", "GOAUTH", "SBT_CREDENTIALS", "COURSIER_CREDENTIALS", "CONSUL_HTTP_TOKEN_FILE", "SYSTEM_WGETRC", "CLOUDSDK_ROOT_DIR", "M2_HOME", "MAVEN_HOME", "LEIN_HOME", "SSLKEYLOGFILE", "GIT_CONFIG_GLOBAL", "GIT_CONFIG_SYSTEM", "XDG_CONFIG_HOME", "XDG_CONFIG_DIRS", "XDG_CACHE_HOME", "XDG_DATA_HOME", "XDG_STATE_HOME", "XDG_RUNTIME_DIR", "HELM_REGISTRY_CONFIG", "HELM_REPOSITORY_CONFIG", "HELM_CONFIG_HOME", "REGISTRY_AUTH_FILE", "DOCKER_CERT_PATH", "SSL_CLIENT_CERT", "GIT_SSL_CERT", "GIT_SSL_KEY", "PIP_CLIENT_CERT", "PGSSLKEY", "VAULT_CLIENT_KEY", "VAULT_CLIENT_CERT", "CONSUL_CLIENT_KEY", "CONSUL_CLIENT_CERT", "NOMAD_CLIENT_KEY", "NOMAD_CLIENT_CERT", "PGSSLCERT", "PGSYSCONFDIR", "CURL_HOME", "CARGO_HOME", "COMPOSER_HOME", "GRADLE_USER_HOME", "BUNDLE_CONFIG", "BUNDLE_USER_CONFIG", "BUNDLE_USER_HOME", "BUNDLE_APP_CONFIG", "POETRY_CONFIG_DIR", "COURSIER_CONFIG_DIR", "HEX_HOME", "HF_HOME", "HF_TOKEN_PATH", "HF_STORED_TOKENS_PATH", "CONDARC", "BUN_CONFIG_FILE", "GOENV", "NPM_CONFIG_PREFIX", "CLOUDSDK_AUTH_CREDENTIAL_FILE_OVERRIDE", "CLAUDE_CONFIG_DIR", "ANTHROPIC_CONFIG_DIR", "ANTHROPIC_PROFILE", "CLAUDE_CODE_FEDERATION_CACHE_DIR", "CLAUDE_SECURESTORAGE_CONFIG_DIR"],
  _n = ["PIP_INDEX_URL", "PIP_EXTRA_INDEX_URL", "PIP_FIND_LINKS", "UV_INDEX_URL", "UV_EXTRA_INDEX_URL", "UV_DEFAULT_INDEX", "UV_INDEX", "UV_FIND_LINKS", "UV_PUBLISH_URL", "TWINE_REPOSITORY_URL", "FLIT_INDEX_URL", "HATCH_INDEX_REPO", "NPM_CONFIG_REGISTRY", "YARN_REGISTRY", "YARN_NPM_REGISTRY_SERVER", "YARN_NPM_PUBLISH_REGISTRY", "COREPACK_NPM_REGISTRY", "BUN_CONFIG_REGISTRY", "GOPROXY"],
  xo = new Set(_n),
  Uo = /^(?:CARGO_REGISTRIES_[A-Z0-9_]+_INDEX|POETRY_REPOSITORIES_[A-Z0-9_]+_URL|NPM_CONFIG_@[^:]+:REGISTRY)$/i;
function n_t(e) {
  let n = e.toUpperCase().replace(/-/g, "_").replace(/^INPUT_/, "");
  return xo.has(n) || Uo.test(n);
}
function mn(e) {
  return Sn[e.toUpperCase().replace(/-/g, "_").replace(/^INPUT_/, "")];
}
var Sn = {
    PIP_EXTRA_INDEX_URL: "PIP_INDEX_URL",
    PIP_FIND_LINKS: "PIP_INDEX_URL",
    UV_EXTRA_INDEX_URL: "UV_DEFAULT_INDEX",
    UV_INDEX: "UV_DEFAULT_INDEX",
    UV_FIND_LINKS: "UV_DEFAULT_INDEX"
  },
  text = "http://index.invalid/",
  En = {
    UV_DEFAULT_INDEX: ["UV_INDEX_URL"]
  };
function JFo(e, n) {
  return [n, ...(En[n] ?? [])].some(item => (e[item] ?? "") !== "");
}
var $o = /^[a-z][a-z0-9+.-]*:\/\//i;
function Go(e) {
  let n = e.startsWith("//"),
    r;
  try {
    r = new URL(n ? `https:${e}` : e);
  } catch {
    let text_2 = e.replace(/^([a-z][a-z0-9+.-]*:)?\/\/[^/?#]*@/i, "$1//");
    return Wx(text_2) ? {
      text: text,
      cut: !0
    } : {
      text: text_2,
      cut: !1,
      stripped: text_2 !== e
    };
  }
  let s = r.password !== "" || r.username !== "" && /(^|\+)https?:$/i.test(r.protocol),
    stripped = s;
  if (s) r.username = "", r.password = "";
  let cut = !1;
  if (Wx(Ko(r.search))) r.search = "", r.hash = "", cut = !0;
  let h = r.href;
  return {
    text: n ? h.replace(/^https:/, "") : h,
    cut: cut,
    stripped: stripped
  };
}
function Ko(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}
function vun(e, value) {
  if (value.trim() === "") return {
    value: value,
    cut: !1,
    stripped: !1
  };
  let r = /^(?:INPUT_)?GOPROXY$/i.test(e),
    s = !/^INPUT_/i.test(e) && mn(e) !== void 0,
    cut_2 = !1,
    stripped_2 = !1,
    h = !1,
    y = r ? /(\s*[,|]\s*|\s+)/ : s ? /(\s+)/ : null,
    O = (y === null ? [value] : value.split(y)).flatMap(item => {
      if (h) return [];
      let v = /^([A-Za-z0-9_.-]+=)(?=[a-z][a-z0-9+.-]*:\/\/|\/\/)/i.exec(item),
        M = v ? v[1] : "",
        w = item.slice(M.length);
      if (!w.startsWith("//") && !$o.test(w)) {
        if (item.trim() !== "" && Wx(item)) return cut_2 = !0, stripped_2 = !0, [r ? "off" : text];
        return [item];
      }
      let K = Go(w);
      if (stripped_2 ||= K.cut || K.stripped === !0, K.cut || K.stripped && (r || s)) {
        if (cut_2 = !0, r) return h = !0, ["off"];
      }
      return [M + K.text];
    }).join("");
  if (r) O = O.replace(/[,|\s]+$/, "");
  if (O !== "" && Wx(O)) return {
    value: r ? "off" : text,
    cut: !0,
    stripped: !0
  };
  return {
    value: O === "" ? text : O,
    cut: cut_2,
    stripped: stripped_2
  };
}
function OVs(e) {
  return hn(e).respelled;
}
function Vge(e) {
  let n = hn(e);
  for (let [r, s] of Object.entries(e)) {
    if (s === void 0) continue;
    let S = typeof s === "string" ? s : String(s),
      E = kun(r, S);
    if (E !== void 0 && E !== S) n.respelled[r] = E, n.lostCredential.push(r);
  }
  return n;
}
function hn(e) {
  let respelled = {},
    lostCredential = [];
  for (let [s, S] of Object.entries(e)) {
    if (S === void 0 || !n_t(s)) continue;
    let E = typeof S === "string" ? S : String(S),
      h = vun(s, E);
    if (h.value !== E) {
      if (respelled[s] = h.value, h.cut || h.stripped) lostCredential.push(s);
    }
    if (h.cut) {
      let y = QFo(s, h.value);
      if (y !== void 0 && !JFo(e, y.name) && respelled[y.name] === void 0) respelled[y.name] = y.value;
    }
  }
  return {
    respelled: respelled,
    lostCredential: lostCredential
  };
}
function QFo(e, n) {
  let name = /^INPUT_/i.test(e) ? void 0 : mn(e);
  if (name === void 0) return;
  let s = n.split(/\s+|,|\|/).map(item => item.replace(/^[A-Za-z0-9_.-]+=(?=[a-z][a-z0-9+.-]*:\/\/|\/\/)/i, "")).find(item => item.startsWith("//") || /^https?:\/\//i.test(item)),
    value_2 = text;
  if (s !== void 0) try {
    let E = new URL(s.startsWith("//") ? `https:${s}` : s).origin;
    value_2 = E === "null" ? text : `${E}/`;
  } catch {
    value_2 = text;
  }
  return {
    name: name,
    value: value_2
  };
}
function r_t() {
  return MHr(), Ae ? Mo.flatMap(item => [item, `INPUT_${item}`, ...(item.startsWith("NPM_CONFIG_") ? [item.toLowerCase()] : [])]) : [];
}
function MHr() {
  let CLAUDE_CODE_SUBPROCESS_ENV_SCRUB = process.env.CLAUDE_CODE_SUBPROCESS_ENV_SCRUB;
  Ae ??= an(CLAUDE_CODE_SUBPROCESS_ENV_SCRUB) || an(process.env.GITHUB_ACTIONS) && !Bo(CLAUDE_CODE_SUBPROCESS_ENV_SCRUB);
}
var Ae;
function IVs() {
  Ae = void 0;
}
function Bo(e) {
  return e !== void 0 && /^(?:0|false|no|off)$/i.test(String(e).trim());
}
function an(e) {
  let n = e === void 0 ? void 0 : String(e).trim().toLowerCase();
  return n === "1" || n === "true" || n === "yes" || n === "on";
}
var IQe = ko.flatMap(item => [item, `INPUT_${item}`]),
  ZFo = ["ANTHROPIC_API_KEY", "ANTHROPIC_AUTH_TOKEN", "ANTHROPIC_CUSTOM_HEADERS", "CLAUDE_CODE_OAUTH_TOKEN", "CLAUDE_CODE_OAUTH_REFRESH_TOKEN", "CLAUDE_CODE_ARTIFACTS_API_TOKEN", "CLAUDE_CODE_MEMORY_API_TOKEN", "CLAUDE_CODE_SLACK_TAG_TOKEN", "ANTHROPIC_FOUNDRY_API_KEY", "ANTHROPIC_FOUNDRY_AUTH_TOKEN", "ANTHROPIC_AWS_API_KEY", "ANTHROPIC_IDENTITY_TOKEN", "ANTHROPIC_IDENTITY_TOKEN_FILE", "ALL_INPUTS"],
  eHo = ZFo.flatMap(item => [item, `INPUT_${item}`]);
function zle(e) {
  return e.toUpperCase().replace(/-/g, "_");
}
var mt = /CONN(ECT(ION)?)?_?STR(ING)?S?(?=$|[_0-9])/i;
function tHo(e) {
  return mt.test(e) || mt.test(Rn(e));
}
var yn = ["OAuth", "NextAuth"];
function Rn(e) {
  return yn.reduce((acc, item) => acc.replaceAll(item, item[0] + item.slice(1).toLowerCase()), e).replace(/([a-z0-9])([A-Z])/g, "$1_$2").replace(/([A-Z])([A-Z][a-z])/g, "$1_$2");
}
var zo = ["CONN", "CONNECT", "CONNECTION"].flatMap(item => ["", "_"].flatMap(n => ["STR", "STRING", "STRS", "STRINGS"].flatMap(r => {
    let s = `*${ie(`${item}${n}${r}`)}`;
    return [s, `${s}_*`, `${s}[0-9]*`];
  }))),
  Pn = ["TOKEN", "SECRET", "PASSWORD", "PASSWD", "PASSPHRASE", "KEY", "AUTH", "COOKIE", "PAT", "DSN", "WEBHOOK", "CREDENTIAL", "CREDENTIALS", "CREDS", "APIKEY", "ACCESSKEY", "SECRETKEY", "ACCOUNTKEY", "PRIVATEKEY", "AUTHKEY", "SSHKEY", "SIGNINGKEY", "MASTERKEY", "DEPLOYKEY", "ENCRYPTIONKEY", "PGPASSWORD", "SSHPASS"],
  An = ["PWD", "PASS", "JWT"],
  Tn = ["TOKEN", "SECRET", "PASSWORD", "PASSWD", "PASSPHRASE"],
  On = ["KEY", "SECRET", "PASSWORD", "CREDENTIAL"],
  regExp_2 = new RegExp(`((^|_)(${Pn.join("|")}|(${On.join("|")})S)|_(${An.join("|")})|(${Tn.join("|")}))(?=$|[_0-9])`, "i"),
  jo = ["CLOUDSDK_PROXY_PASSWORD", "GIT_CONFIG_KEY_[0-9]*"],
  Vo = /^GIT_CONFIG_KEY_[0-9][A-Za-z0-9_]*$/;
function Yo(e) {
  return /^GIT_CONFIG_(?:COUNT|PARAMETERS|(?:KEY|VALUE)_[0-9]+)$/.test(e);
}
function pBt(e) {
  return Yo(e) || Jo.test(e);
}
var Jo = /^(?:(?:https?|ftp|all|no)_proxy|npm_config_(?:https?_)?proxy|npm_config_noproxy|yarn_proxy|(?:yarn|global_agent|docker|claude_code)_(?:https?|no)_proxy|cloudsdk_proxy_[a-z]+|electron_get_use_proxy)$/i;
function nHo(e, n) {
  let r = kun(e, n);
  return r === void 0 ? Wx(n) : r !== n;
}
function kun(e, n) {
  if (U5n(e) === "GOFLAGS") return n.length > De ? "" : vi(n);
  if (!vn.has(U5n(e))) return;
  let r = n.length > De ? null : o_t(n);
  if (r === null) return "";
  MHr();
  let s = r.map((h, index) => {
    let word = index > 0 && /^(?:-D|--define)$/.test(MQe(r[index - 1])) ? `-D${h}` : Dn(MQe(h));
    return {
      raw: h,
      word: word,
      residual: Ln.test(word),
      goes: !1
    };
  });
  for (let h = 0; h < s.length; h++) {
    let y = s[h];
    if (y.residual) continue;
    let P = h > 0 ? s[h - 1].word : null,
      A = s[h + 1];
    if (y.goes = y.goes || ni(y.word, P) || A !== void 0 && !A.residual && !Te(A.word) && St.test(y.word) && Wx(`${y.word} ${A.word}`), y.goes && A !== void 0 && !Te(A.word) && St.test(y.word)) A.goes = !0;
  }
  for (let h = 1; h < s.length; h++) {
    if (qo.test(s[h - 1].word)) s[h].goes = !0;
    if (s[h].goes && !MQe(s[h].raw).startsWith("-") && Zo(s[h - 1].word)) s[h - 1].goes = !0;
  }
  let S = s.filter(item => !item.goes);
  e: while ($5n(S.filter(item => !item.residual).flatMap(dn))) {
    let h = S.filter(item => !item.residual);
    for (let y = 2; y <= 4; y++) for (let P = 0; P + y <= h.length; P++) {
      let A = h.slice(P, P + y);
      if ($5n(A.flatMap(dn))) {
        for (let O of A) O.goes = !0;
        S = S.filter(item => !item.goes);
        continue e;
      }
    }
    for (let y of h) y.goes = !0;
    S = S.filter(item => !item.goes);
  }
  if (S.length === s.length) return n;
  let E = ai.has(U5n(e)) ? Xo : Cn;
  return S.every(item => E.test(item.raw)) ? S.map(item => item.raw).join(" ") : "";
}
var Cn = /^[A-Za-z0-9_.,:=\/@+~*?-]+$/,
  Xo = /^[A-Za-z0-9_.,:=\/@+~|*?-]+$/,
  St = /(?:\b(?:Bearer|Basic|token)|authorization\s*[:=]\s*["']?(?:[a-z][a-z0-9_-]*)?|-token\s*[:=])\s*["']?$/i;
function Zo(e) {
  return sHo(e) === "" || iHo(e) === "" || Qo.test(e) || wn.test(e);
}
var Qo = /^(?:-D|--define|-f|--file|-pl|--projects|-rf|--resume-from|-l|--log-file|-t|--toolchains|-gt|--global-toolchains|-itr|--install-toolchains|-P|--activate-profiles|-b|--builder|-T|--threads|-emp|--encrypt-master-password|-ep|--encrypt-password)$/,
  qo = /^(?:-emp|--encrypt-master-password|-ep|--encrypt-password)$/,
  ei = /^(?:-emp|--encrypt-master-password|-ep|--encrypt-password)=./s;
function Te(e) {
  return /^-D[A-Za-z_][\w.-]*=.+$/s.test(e) || /^-D[A-Za-z_]\w*(?:\.\w+)+=$/.test(e) || /^-D[A-Za-z_][A-Za-z_.]*$/.test(e) || e.startsWith("-J-") && Te(e.slice(2)) || /^--[a-z][a-z0-9-]*(?:=.*)?$/s.test(e) || ti.test(e) || /^(?:@|-[A-Za-z]{1,4}\d{0,2}$)/.test(e);
}
var ti = /^-(?:X(?:mx|ms|ss|mn|rs|int|comp|mixed|batch|diag|debug|future|prof|noclassgc|internalversion|check:jni|share:(?:on|off|auto|dump)|verify(?::[a-z]+)?|log(?::.*)?|loggc:.+|bootclasspath(?:\/[ap])?:.+|runjdwp:.+|dock:.+|startOnFirstThread|showSettings(?::[a-z]+)?)[0-9kKmMgGtT]*$|XX:[+-]?[A-Za-z]\w*(?:=.*)?$|(?:javaagent|agentlib|agentpath):.|verbose(?::[a-z]+)?$|[ed](?:s?a)(?::[a-z][\w$]*(?:\.[\w$]+)*(?:\.\.\.)?)?$|(?:server|client|d64|showversion)$|-(?:add-opens|add-exports|add-reads|add-modules|limit-modules|patch-module|module-path|upgrade-module-path|class-path|enable-native-access|illegal-access|enable-preview|source|release)(?:=.*)?$|(?:cp|classpath|p)$)/s;
function $5n(e) {
  return Wx(e.map(item => Te(item) ? `; ${item.includes("=") ? item.replace(/^[^=]*=/, "") : ""}` : item).join(" "));
}
function ni(e, n) {
  let r = bn(e);
  if (r === null) return un(e, n);
  let s = /^-D([^=]+)=/.exec(e)[1];
  return ri(e) || Fn(s, e.slice(s.length + 3)) || $5n(r) || r.some((item, index) => un(item, index > 0 ? r[index - 1] : null) || index + 1 < r.length && !Te(r[index + 1]) && St.test(item) && Wx(`${item} ${r[index + 1]}`));
}
function dn(e) {
  return bn(e.word) ?? [e.word];
}
function bn(e) {
  let n = /^-D[^=]+=\s*(-.*)$/s.exec(e);
  if (n === null) return null;
  return (o_t(n[1]) ?? []).map(MQe).filter(item => !Ln.test(item));
}
function ri(e) {
  let n = /^-D[^=]+=\s*(-.*)$/s.exec(e);
  return n !== null && o_t(n[1]) === null;
}
function un(e, n) {
  if (ei.test(e)) return !0;
  let r = /^-D([^=]+)=(.+)$/s.exec(e);
  if (r !== null) {
    let [, s, S] = r;
    if (Fn(s, S) || Wx(S)) return !0;
    if (Ae === !0) return oHo.test(s) || !1 || !si.test(s) && !(/^sonar\./i.test(s) && !DHr(s) && !/key.?store|cert|pkcs|p12|pfx|\.pem$/i.test(s)) && gn(S);
    return !1;
  }
  if (Wx(e)) return !0;
  if (Ae === !0) return !oi.test(e) && !(n !== null && wn.test(n)) && gn(e);
  return !1;
}
function gn(e) {
  return /[\\/]|^[@~]/.test(e);
}
var oi = /^-(?:X|XX:|javaagent:|agentlib:|agentpath:|verbose|ea\b|da\b|esa$|dsa$|server$|client$|d64$|showversion$|-(?:add-opens|add-exports|add-reads|add-modules|limit-modules|patch-module|module-path|upgrade-module-path|class-path|enable-native-access|illegal-access|enable-preview|source|release)\b|(?:cp|classpath|p)$)/,
  wn = /^-(?:-(?:add-opens|add-exports|add-reads|add-modules|limit-modules|patch-module|module-path|upgrade-module-path|class-path|enable-native-access|source|release)|cp|classpath|p)$/,
  si = /^(?:javax\.net\.ssl\.trustStore|java\.io\.tmpdir|java\.security\.egd|java\.library\.path|jna\.library\.path|java\.class\.path|(?:https?|ftp)\.nonProxyHosts|socksNonProxyHosts|jna\.tmpdir|java\.util\.logging\.config\.file|log4j2?\.configurationFile|logback\.configurationFile|logging\.config|user\.dir|file\.encoding|maven\.multiModuleProjectDirectory|library\.jansi\.path|jansi\.tmpdir)$/i,
  rHo = ["JAVA_TOOL_OPTIONS", "JDK_JAVA_OPTIONS", "_JAVA_OPTIONS", "IBM_JAVA_OPTIONS", "OPENJ9_JAVA_OPTIONS", "MAVEN_OPTS", "GRADLE_OPTS", "MAVEN_ARGS", "MAVEN_CONFIG", "ANT_OPTS", "ANT_ARGS", "JAVA_OPTS", "SBT_OPTS", "JVM_OPTS", "LEIN_JVM_OPTS", "ES_JAVA_OPTS", "SONAR_SCANNER_OPTS", "SONAR_SCANNER_JAVA_OPTS"];
function U5n(e) {
  return e.toUpperCase().replace(/^INPUT_/, "").replace(/-/g, "_");
}
var ai = new Set(["JAVA_TOOL_OPTIONS", "JDK_JAVA_OPTIONS", "_JAVA_OPTIONS", "IBM_JAVA_OPTIONS", "OPENJ9_JAVA_OPTIONS"]),
  vn = new Set(rHo),
  Ln = /^-D(?:(?:(?:https?|ftp)\.proxy(?:User|Password)|socksProxy(?:User|Password)|java\.net\.socks\.(?:username|password))=\S*$|[\w.-]*trust-?store-?password=changeit$)/i;
function o_t(e) {
  let n = [],
    r = "",
    s = !1,
    S = 0;
  while (S < e.length) {
    let E = e[S];
    if (E === " " || E === "\t" || E === `
` || E === "\r") {
      if (s) n.push(r), r = "", s = !1;
      S++;
      continue;
    }
    if (E === "'" || E === '"') {
      let h = e.indexOf(E, S + 1);
      if (h === -1) return null;
      r += e.slice(S + 1, h), s = !0, S = h + 1;
      continue;
    }
    r += E, s = !0, S++;
  }
  if (s) n.push(r);
  return n;
}
function Le(e) {
  return e.replace(/([a-z0-9])([A-Z])/g, "$1_$2").replace(/([A-Z])([A-Z][a-z])/g, "$1_$2");
}
var oHo = /^(?:maven\.(?:user\.settings|global\.settings|installation\.settings|project\.settings|settings\.security|repo\.local|home)|settings\.security|gradle\.user\.home|sbt\.(?:boot\.credentials|repository\.config|global\.base|ivy\.home|boot\.directory)|user\.home)$/i;
function sHo(e) {
  if (/^-(?:show-version|strict-checksums)$/.test(e)) return null;
  let n = /^(?:--?settings|--?global-settings|--?install-settings|--?project-settings|-gs|-is|-ps|-s)(?:=(.+))?$/.exec(e) ?? /^-g?s=?(.+)$/.exec(e);
  return n === null ? null : n[1] ?? "";
}
function iHo(e) {
  let n = /^-{1,2}(?:ivy|sbt-dir|sbt-boot)(?:=(.+))?$/.exec(e);
  return n === null ? null : n[1] ?? "";
}
function MQe(e) {
  return e.replace(/^-J(?=-)/, "");
}
function Dn(e) {
  return e.replace(/^--define=/, "-D");
}
function B5n(e) {
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    if (/^(?:-D|--define)$/.test(s) && r + 1 < e.length) r += 1, n.push(`-D${e[r]}`);else n.push(Dn(s));
  }
  return n;
}
function Fn(e, n) {
  return Hn(e, n) && !/^(?:[\\/~]|[a-z]:[\\/]|file:)/i.test(n);
}
function Hn(e, n) {
  let r = e.split(".").at(-1) ?? "";
  return DHr(e) && (li.test(Le(e)) || !/(?:user(?:name)?|id|store|file|path|dir|location|url|host|port|alias|type)$/i.test(r)) && !aHo(e, n);
}
var li = /(?:PASSWORD|PASSWD|SECRET)S?[._-]ID$/i,
  ci = new Set(["sonar.login", "sonar.token", "sonar.password"]),
  di = /^(?:projectKey|moduleKey|componentKey|ruleKey|resourceKey)$/,
  ui = new Set(["sonar.pullrequest.key"]);
function aHo(e, n) {
  let r = e.split(".").at(-1) ?? "";
  return /^(?:\d+[a-z]{0,2}|true|false)$/i.test(n) && !qge(r.replace(/-/g, "_")) && !Et(e);
}
function DHr(e) {
  if (ci.has(e.toLowerCase())) return !0;
  let n = e.split(".").at(-1) ?? "",
    r = Le(n).split(/[_-]+/).filter(Boolean).map(item => item.toUpperCase().replace(/\d+$/, "")).filter(Boolean),
    s = r.at(-1);
  if (!s) return !1;
  if (/^sonar\./i.test(e)) {
    if (s === "SECURED") return !0;
    if ((di.test(n) || ui.has(e.toLowerCase())) && !Et(e)) return !1;
  }
  if (qge(n.replace(/-/g, "_")) || Et(e) || mt.test(Le(e).replace(/[.-]/g, "_"))) return !0;
  return s === "USERNAME" || s === "USER" && r.length > 1;
}
function Et(e) {
  let n = Le(e).toUpperCase().split(/[._-]+/).filter(Boolean),
    r = n.at(-1) ?? "",
    s = n.at(-2) ?? "";
  return n.slice(0, -1).some(item => gi.test(item)) && (!pi.test(r) || /^IDS?$/.test(r) && /^(?:PASSWORDS?|PASSWD|SECRETS?)$/.test(s));
}
var gi = /^(?:PASSWORDS?|PASSWD|PASSPHRASE|SECRETS?|TOKENS?|KEYS?|APIKEY|CREDENTIALS?)$/,
  pi = /^(?:USER(?:NAME)?|ID|IDS|STORE|FILE|FILES|PATH|PATHS|DIR|DIRECTORY|LOCATION|URL|URI|HOST|PORT|ALIAS|TYPE|PREFERENCE|SCHEMES?|ENABLED?|DISABLED?|MODE|CLASS|PROVIDER|ALGORITHM|FORMAT|LENGTH|SIZE|BITS|TIMEOUT|TTL|HEADER|NAME|NAMES|PREFIX|SUFFIX|VERSION|ENCODING|POLICY|COUNT|CACHE|SERVICE|ENDPOINT|REGION|SCOPE|SCOPES|AUDIENCE|ISSUER|EXPIRY|EXPIRATION|ROTATION|REQUIRED|OPTIONAL|SECONDS?|SECS?|MS|MILLIS(?:ECONDS)?|MINUTES?|MINS?|HOURS?|DAYS?|AGE|CAPACITY|RATE|INTERVAL|DELAY|PERIOD|DURATION|VALIDITY|LIFETIME|WINDOW|MAX|MIN|LIMIT|THRESHOLD|BUDGET|RETRY|RETRIES|ATTEMPTS)$/;
function qge(e) {
  let n = e.replace(fi, "").replace(/-/g, "_");
  return (regExp_2.test(n) || regExp_2.test(Rn(n)) || tHo(n) || regExp_3.test(n)) && !Vo.test(e);
}
var fi = /^AUTH0_/i,
  _i = "[Aa][Uu][Tt][Hh]0_*",
  kn = ["BUILD", "LOCAL", "MIRROR", "PATH", "WITH", "WITHOUT", "CACHE", "DISABLE", "IGNORE", "ONLY"],
  mi = "(?:[A-Za-z0-9]+(?:___[A-Za-z0-9]+)*__)+[A-Za-z]{2,}",
  regExp_3 = new RegExp(`^(?:INPUT_)?BUNDLE_(?!(?:${kn.join("|")})__(?!${mi}$))\\w*__`, "i"),
  Si = "[Bb][Uu][Nn][Dd][Ll][Ee]_*__*|[Ii][Nn][Pp][Uu][Tt]_[Bb][Uu][Nn][Dd][Ll][Ee]_*__*",
  Ei = kn.flatMap(item => [`[Bb][Uu][Nn][Dd][Ll][Ee]_${ie(item)}__*`, `[Ii][Nn][Pp][Uu][Tt]_[Bb][Uu][Nn][Dd][Ll][Ee]_${ie(item)}__*`]).join("|"),
  hi = new Set(["CLAUDE_CODE_CLIENT_KEY", "CLAUDE_CODE_API_KEY_HELPER_TTL_MS", "CLAUDE_CODE_PROXY_AUTH_HELPER_TTL_MS", "CLAUDE_CODE_ENABLE_PROXY_AUTH_HELPER", "CLAUDE_CODE_AUTH_FAIL_EXIT_MS", "CLAUDE_CODE_ENABLE_TOKEN_USAGE_ATTACHMENT", "CLAUDE_CODE_IDLE_TOKEN_THRESHOLD", "CLAUDE_CODE_RESUME_TOKEN_THRESHOLD", "CLAUDE_CODE_ARG_KEY_SHAPE"]),
  Ri = /^CLAUDE_CODE_SKIP_[A-Z0-9_]+_AUTH$/;
function j5n(e) {
  return hi.has(e) || Ri.test(e);
}
var MVs = new Set(["GITHUB_TOKEN", "GH_TOKEN", "GH_ENTERPRISE_TOKEN", "GITHUB_ENTERPRISE_TOKEN"]),
  Mn = ["INPUT_", "ORG_GRADLE_PROJECT_", "POETRY_PYPI_TOKEN_", "POETRY_HTTP_BASIC_", "CARGO_REGISTRIES_", "CONAN_LOGIN_USERNAME_", "CONAN_PASSWORD_"],
  ht = ["POETRY_HTTP_BASIC_", "CONAN_LOGIN_USERNAME_"],
  regExp_4 = new RegExp(`^(?:${Mn.join("|")})`, "i"),
  regExp_5 = new RegExp(`^(?:INPUT_)?(?:${ht.join("|")})`, "i");
function Tun(e) {
  let n = e.replace(/-/g, "_");
  return regExp_4.test(n) && (regExp_5.test(n) || /USER(?:_?NAME)?_?[0-9]*$/i.test(n) || qge(n));
}
var Ti = ht.flatMap(item => [`${ie(item)}*`, `${ie(`INPUT_${item}`)}*`, `${ie(`INPUT_${item.replace(/_/g, "-")}`).replace(/^INPUT-/, "INPUT_")}*`]).concat(Mn.filter(item => !ht.includes(item)).flatMap(item => ["USER", "USERNAME", "USER_NAME", "USER-NAME"].flatMap(n => ["", "[0-9]", "[0-9][0-9]", "[_-][0-9]", "[_-][0-9][0-9]"].map(r => `${ie(item)}*${ie(n)}${r}`)))).join("|"),
  Pe = "__CLAUDE_CC_KEEP_";
function DVs(e, n = {}) {
  let r = new Set((n.denied ?? []).map(item => item.toUpperCase())),
    s = new Set((n.masked ?? []).map(item => item.toUpperCase())),
    S = {};
  for (let [E, h] of Object.entries(e)) {
    if (r.has(E.toUpperCase())) continue;
    if (s.has(E.toUpperCase())) continue;
    if (h !== void 0 && h.trim() !== "" && /^[A-Za-z_][A-Za-z0-9_]*$/.test(E) && (n_t(E) || kun(E, "") !== void 0)) S[`${Pe}${E}`] = h;
  }
  return S;
}
function LVs({
  sandboxMasked = []
} = {}) {
  let n = sandboxMasked.filter(item => /^[A-Za-z_][A-Za-z0-9_]*$/.test(item)),
    s = `case "$__cc_name" in (${n.length > 0 ? n.join("|") : "''__cc_none__"}) \\builtin true;; (*) \\builtin false;; esac`,
    S = Pn.map(ie).concat(On.map(item => ie(`${item}S`))).flatMap(item => [item, `${item}[_0-9]*`, `*_${item}`, `*_${item}[_0-9]*`]).concat(Tn.map(ie).flatMap(item => [`*${item}`, `*${item}[_0-9]*`]), An.map(ie).flatMap(item => [`*_${item}`, `*_${item}[_0-9]*`])).concat(zo).join("|"),
    E = [...IQe, ...r_t(), "GITHUB_TOKEN", "GH_TOKEN"],
    h = E.join(" "),
    y = E.map(item => item.toUpperCase()).join(" "),
    P = `__cc_uc=; ( LC_ALL=C \\builtin eval ': "\${__cc_uc^^}"' ) 2>/dev/null && __cc_uc=b; \\builtin test -n "$__cc_uc" || { ( LC_ALL=C \\builtin eval ': "\${(U)__cc_uc}"' ) 2>/dev/null && __cc_uc=z; } || \\builtin true`,
    A = `__cc_upper="$__cc_name"; case "$__cc_uc" in b) LC_ALL=C \\builtin eval '__cc_upper="\${__cc_name^^}"';; z) LC_ALL=C \\builtin eval '__cc_upper="\${(U)__cc_name}"';; esac`,
    O = `{ ! ${s} && (\\builtin unset -v "$__cc_name") && \\builtin unset -v "$__cc_name"; }`,
    C = '\\builtin eval "__cc_set=\\${$__cc_name+x}"; \\builtin test -n "$__cc_set"',
    v = "{ \\builtin compgen -v || \\builtin set; }",
    M = yn.map(item => `__cc_fold="\${__cc_fold//${item}/${item[0] + item.slice(1).toLowerCase()}}"`).join("; "),
    w = (Q, pe = "__cc_fold") => `__cc_fold="\${${Q}}"; ${M}; __cc_split=; __cc_prev=; __cc_i=0; while \\builtin test "$__cc_i" -lt "\${#${pe}}"; do __cc_c="\${${pe}:$__cc_i:1}"; case "$__cc_prev$__cc_c" in [[:lower:][:digit:]][[:upper:]]) __cc_split="\${__cc_split}_";; [[:upper:]][[:upper:]]) case "\${${pe}:$((__cc_i+1)):1}" in [[:lower:]]) __cc_split="\${__cc_split}_";; esac;; esac; __cc_split="$__cc_split$__cc_c"; __cc_prev="$__cc_c"; __cc_i=$((__cc_i+1)); done; case "$__cc_split" in ''|${S}) ${O};; esac`,
    K = w("__cc_name"),
    Z = "__cc_ncm=; \\builtin shopt -q nocasematch && __cc_ncm=1; \\builtin shopt -u nocasematch || \\builtin true",
    B = '\\builtin test -z "$__cc_ncm" || \\builtin shopt -s nocasematch || \\builtin true',
    U = '{ (\\builtin unset -v "$__cc_name") && \\builtin eval "$__cc_name=\\$__cc_r; \\builtin export $__cc_name"; }',
    V = '{ (\\builtin unset -v "$__cc_name") && \\builtin unset -v "$__cc_name"; }',
    J = _n.join(" "),
    te = [...vn, "GOFLAGS"].join(" "),
    q = (Q => `'${Q.replace(/'/g, "'\\''")}'`)(text),
    ee = Object.entries(Object.entries(Sn).reduce((acc, [pe, et]) => ((acc[et] ??= []).push(pe), acc), {})).map(([Q, pe]) => {
      let et = [Q, ...(En[Q] ?? [])].map(item => `\\\${${item}:+x}`).join("");
      return `for __cc_name in ${pe.join(" ")}; do \\builtin eval "__cc_val=\\\${$__cc_name-}"; \\builtin test "$__cc_val" = ${q} || \\builtin continue; \\builtin eval "__cc_set=${et}"; \\builtin test -n "$__cc_set" || { __cc_name=${Q}; __cc_r=${q}; { (\\builtin unset -v "$__cc_name") && \\builtin eval "$__cc_name=\\$__cc_r; \\builtin export $__cc_name"; }; }; \\builtin break; done`;
    }).join("; "),
    ue = "CARGO_REGISTRIES_*_INDEX|POETRY_REPOSITORIES_*_URL|[Cc]argo_[Rr]egistries_*_[Ii]ndex|npm_config_registry|[Nn][Pp][Mm]_[Cc][Oo][Nn][Ff][Ii][Gg]_[Rr][Ee][Gg][Ii][Ss][Tt][Rr][Yy]",
    Mr = `\\builtin eval "$({ \\builtin compgen -v || \\builtin set; } 2>/dev/null | while \\builtin read -r __cc_line; do __cc_v="\${__cc_line%%=*}"; __cc_v="\${__cc_v#${Pe}}"; case "$__cc_v" in (''|[0-9]*|*[!A-Za-z0-9_]*) ;; (CARGO_REGISTRIES_*_INDEX|POETRY_REPOSITORIES_*_URL|[Cc]argo_[Rr]egistries_*_[Ii]ndex|npm_config_registry|[Nn][Pp][Mm]_[Cc][Oo][Nn][Ff][Ii][Gg]_[Rr][Ee][Gg][Ii][Ss][Tt][Rr][Yy]) \\builtin printf '__cc_visit %s\\n' "$__cc_v";; esac; done)"`,
    xr = `\\builtin eval "$({ \\builtin compgen -v || \\builtin set; } 2>/dev/null | while \\builtin read -r __cc_line; do __cc_v="\${__cc_line%%=*}"; case "$__cc_v" in (*[!A-Za-z0-9_]*) ;; (${Pe}*) \\builtin printf '\\\\builtin unset -v %s\\n' "$__cc_v";; esac; done)"`,
    Ur = `__cc_visit() { ${`__cc_name=$1; case "$__cc_name" in ''|[0-9]*|*[!A-Za-z0-9_]*) return 0;; esac; ! ${s} || return 0; \\builtin eval "__cc_k=\\\${${Pe}$__cc_name+x}; __cc_r=\\\${${Pe}$__cc_name-}; __cc_val=\\\${$__cc_name-}; __cc_has=\\\${$__cc_name+x}"; if \\builtin test -n "$__cc_k"; then \\builtin test "$__cc_has$__cc_val" = "x$__cc_r" || { (\\builtin unset -v "$__cc_name") && \\builtin eval "$__cc_name=\\$__cc_r; \\builtin export $__cc_name"; }; else \\builtin test -n "$__cc_val" || return 0; case " ${te} " in *" $__cc_name "*) { (\\builtin unset -v "$__cc_name") && \\builtin unset -v "$__cc_name"; };; *) __cc_r=${q}; { (\\builtin unset -v "$__cc_name") && \\builtin eval "$__cc_name=\\$__cc_r; \\builtin export $__cc_name"; };; esac; fi; return 0`}; }; for __cc_n in ${J} ${te}; do __cc_visit "$__cc_n"; done; ${Mr}; ${ee}; ${xr}; \\builtin unset -f __cc_visit`;
  return `{ __cc_ncm=; \\builtin shopt -q nocasematch && __cc_ncm=1; \\builtin shopt -u nocasematch || \\builtin true; __cc_uc=; ( LC_ALL=C \\builtin eval ': "\${__cc_uc^^}"' ) 2>/dev/null && __cc_uc=b; \\builtin test -n "$__cc_uc" || { ( LC_ALL=C \\builtin eval ': "\${(U)__cc_uc}"' ) 2>/dev/null && __cc_uc=z; } || \\builtin true; while \\builtin read -r __cc_line; do __cc_name="\${__cc_line%%=*}"; case "$__cc_name" in ''|[0-9]*|*[!A-Za-z0-9_]*) \\builtin continue;; esac; __cc_upper="$__cc_name"; case "$__cc_uc" in b) LC_ALL=C \\builtin eval '__cc_upper="\${__cc_name^^}"';; z) LC_ALL=C \\builtin eval '__cc_upper="\${(U)__cc_name}"';; esac; case " ${y} " in *" $__cc_upper "*) ${O}; \\builtin continue;; esac; case "$__cc_name" in ${Ti}) ${O}; \\builtin continue;; esac; case "$__cc_name" in ${jo.join("|")}) ;; ${_i}) __cc_rest="\${__cc_name#*_}"; case "$__cc_rest" in ${S}) ${O};; *[[:lower:][:digit:]][[:upper:]]*|*[[:upper:]][[:upper:]][[:lower:]]*) ${w("__cc_rest")};; esac;; ${S}) ${O};; ${Ei}) __cc_rest="\${__cc_name#*__}"; __cc_rest="\${__cc_rest//___/-}"; case "$__cc_rest" in *__*[A-Za-z][A-Za-z]) ${O};; *) case "$__cc_name" in *[[:lower:][:digit:]][[:upper:]]*|*[[:upper:]][[:upper:]][[:lower:]]*) ${K};; esac;; esac;; ${Si}) ${O};; *[[:lower:][:digit:]][[:upper:]]*|*[[:upper:]][[:upper:]][[:lower:]]*) ${K};; esac; done < <({ \\builtin compgen -v || \\builtin set; }); for __cc_name in ${h}; do \\builtin eval "__cc_set=\\\${$__cc_name+x}"; \\builtin test -n "$__cc_set" && ${O}; done; ${Ur}; \\builtin test -z "$__cc_ncm" || \\builtin shopt -s nocasematch || \\builtin true; \\builtin unset -v __cc_line __cc_name __cc_rest __cc_set __cc_val __cc_r __cc_v __cc_k __cc_has __cc_n __cc_split __cc_fold __cc_prev __cc_i __cc_c __cc_ncm __cc_uc __cc_upper; \\builtin true; } 2>/dev/null`;
}
function ZEe(e = {}) {
  let n = {
      ...process.env,
      ...e
    },
    r = new Set(lHo(n));
  for (let [s, S] of Object.entries(n)) if (S !== void 0 && !pBt(s) && !n_t(s) && kun(s, "") === void 0 && nHo(s, typeof S === "string" ? S : String(S))) r.add(s);
  return [...r];
}
function lHo(e) {
  let n = new Set([...IQe, ...r_t(), "GITHUB_TOKEN", "GH_TOKEN"]);
  for (let r of Object.keys(e)) if (qge(r) || Tun(r)) n.add(r);
  return [...n];
}
function ie(e) {
  return [...e].map(item => item.toLowerCase() === item ? item : `[${item}${item.toLowerCase()}]`).join("");
}
function Wx(e) {
  let n = e.length > De ? e.slice(0, De) : e,
    r = S => {
      let E = S.search(/\s/),
        h = E === -1 ? S : S.slice(0, E),
        y = h.lastIndexOf("@");
      if (y === -1) return !1;
      let P = h.slice(0, y);
      if (pn(P, h.slice(y + 1))) return !1;
      return P.includes(":") || !/[/?#]/.test(P) && Oi(P);
    },
    s = n.indexOf("://");
  while (s !== -1) {
    if (s > 0 && /[a-z0-9+.-]/i.test(n[s - 1] ?? "")) {
      if (r(n.slice(s + 3))) return !0;
    }
    s = n.indexOf("://", s + 3);
  }
  if (n.startsWith("//") && r(n.slice(2))) return !0;
  return /^[^\s/@:]+:(?!\/\/)(?![\\/])[^\s@]*@[^\s/@]+/.test(n) && !/^[a-z]:[\\/]/i.test(n) && !Ii.test(n) && !pn(n.slice(0, n.lastIndexOf("@", n.search(/\s|$/))), n.slice(n.lastIndexOf("@", n.search(/\s|$/)) + 1)) && !/^(?:mailto|sips?|xmpp|im|acct):/i.test(n) || wi.test(n) || bi.test(n) || /["']?sonar\.login["']?\s*[:=]\s*["']?[^\s"',}]{8,}/.test(n) || dHo.test(n) || /\bauthorization\s*[:=]\s*["']?[a-z][a-z0-9_-]*\s+[A-Za-z0-9._~+\/=-]{8,}/i.test(n) || /\b(?:[Tt]oken|TOKEN)\s+(?=[A-Za-z0-9_~+=-]*[0-9])(?=[A-Za-z0-9_~+=-]*[A-Z])(?=([A-Za-z0-9_~+=-]{20,}))\1(?![\/.])/.test(n) || /\b(?:Bearer|Basic)\s+(?=[A-Za-z._~+\/=-]*[0-9]|(?:[A-Za-z0-9._~+\/=-]*?[a-z][A-Z](?![a-z])){2}|[A-Za-z0-9.-]*[_~+\/=])[A-Za-z0-9._~+\/=-]{8,}/.test(n);
}
var De = 8192;
function Oi(e) {
  return /^(?:gh[opusr]_|github_pat_|glpat-|xox[abpr]-|sk-|pk-|AKIA|eyJ|ya29\.|npm_)/.test(e) || e.length >= 20 && /[0-9]/.test(e) && /[a-z]/i.test(e);
}
function pn(e, n) {
  let r = /^([a-z0-9_-]+(?:\.[a-z0-9_-]+)*):\d+([/?#].*)$/is.exec(e);
  if (!r) return !1;
  if (/[?#&]/.test(r[2])) return !0;
  if (Ci.test(n)) return !1;
  if (e.endsWith("/")) return !0;
  if (/^(?:v?\d|sha\d*:)/i.test(n)) return !0;
  return !Ni.test(n);
}
var Ii = /^(?:[\w.-]+(?::[\w.-]+)?@sha(?:256|384|512):[0-9a-f]{32,}|npm:(?:@[\w.-]+\/)?[\w.-]+@[\w.^~<>=*|+-]*|[a-z_][\w.-]*:[\w.-]+:v?\d[\w.+\[\](),-]*@(?:jar|war|ear|aar|apk|aab|pom|zip|tar|tgz|module|klib|exe|dll|so|dylib)?)$/i,
  Ci = /^(?:localhost|[a-z0-9_-]+(?:\.[a-z0-9_-]+)*\.(?=[a-z0-9-]*[a-z])[a-z0-9-]+|[a-z0-9_.-]+(?=:\d+(?:[/?#]|$))|\d{1,3}(?:\.\d{1,3}){3}|\[[0-9a-f:.]+\])(?::\d+)?(?:[/?#]|$)/i,
  Ni = /^(?:(?=[a-z0-9._-]*[a-z])[a-z0-9._-]+|\d{1,3}(?:\.\d{1,3}){3}|\[[0-9a-f:.]+\])(?::\d+)?(?:[/?#]|$)/i,
  dHo = /-----BEGIN [A-Z ]*PRIVATE KEY(?: BLOCK)?-----/,
  bi = /https:\/\/(?:hooks\.slack\.com\/(?:services|workflows|triggers)\/|(?:ptb\.|canary\.)?discord(?:app)?\.com\/api\/webhooks\/\d+\/|[\w.-]+\.webhook\.office\.com\/webhookb2\/)[\w\/@.~-]{16,}/i,
  wi = /(?:(?:^|[;&?#,{]|\/:)\s*|\s)["']?(?!-*jobserver-auth\s*[=:])(?:[a-z0-9_.-]{0,64}(?:password|passwd|pwd|secret|token|(?:account|access|api|private|subscription)[-_]?key|signature|sig|credential)|[a-z0-9_.-]{0,63}[_.-]auth)["']?\s*[=:]\s*["']?(?!(?:true|false|none|null|yes|no|on|off|enabled|disabled|required|optional)(?:$|[;&,\s"']))[^;&,\s"']+/i;
function vi(e) {
  let n = e.split(/\s+/).filter(Boolean),
    r = !1,
    s = n.map(item => {
      let bare = item.replace(/["']/g, ""),
        contribution = bare.replace(/^--?[\w-]+=/, ""),
        O = /(?:^|[=\s])--?X[= ]?([^\s=]+)=(.*)$/.exec(bare),
        C = O ?? (r ? /^()([^\s=-][^\s=]*)=(.*)$/.exec(bare) : null);
      if (r = /(?:^|=)--?X$/.test(bare), C === null) return {
        bare: bare,
        contribution: contribution,
        goes: /(?:^|[=\s])--?X\b/.test(bare) && !/(?:^|=)--?X$/.test(bare) || Wx(contribution)
      };
      let v = C.at(-2) ?? "",
        M = v.split("/").at(-1) ?? "",
        w = C.at(-1) ?? "",
        K = O === null ? "" : bare.slice(0, O.index);
      return {
        bare: bare,
        contribution: contribution,
        goes: Hn(M, w) || Wx(w) || Wx(v) || K !== "" && Wx(K)
      };
    });
  for (let y = 0; y < s.length; y++) for (let P = 2; P <= 4 && y + P <= s.length; P++) {
    let A = s.slice(y, y + P);
    if (A.some(item => item.goes) || A.slice(1).some(item => item.bare.startsWith("-"))) break;
    if (Wx(A.map(item => item.contribution).join(" "))) {
      for (let O of A) O.goes = !0;
      break;
    }
  }
  s.forEach((item, index) => {
    if (!/(?:^|=)--?X$/.test(item.bare)) return;
    let A = s[index + 1],
      O = A === void 0 || A.goes || item.goes;
    if (item.goes = O, A !== void 0) A.goes = O;
  });
  let S = n.map(() => -1),
    E = -1,
    h = "";
  if (n.forEach((item, index) => {
    if (E === -1) {
      let A = item[0];
      if ((A === '"' || A === "'") && !(item.length > 1 && item.endsWith(A))) E = index, h = A, S[index] = E;
      return;
    }
    if (S[index] = E, item.endsWith(h)) E = -1;
  }), E !== -1) s.forEach((item, index) => {
    if (S[index] === E) item.goes = !0;
  });
  if (s.forEach((item, index) => {
    if (item.goes && S[index] !== -1) s.forEach((item, O) => {
      if (S[O] === S[index]) item.goes = !0;
    });
  }), s.every(item => !item.goes)) return e;
  return n.filter((item, index) => !s[index].goes && (S[index] !== -1 || Cn.test(item))).join(" ");
}
var Li = ["LD_", "DYLD_", "BASH_FUNC_", "__BASH_FUNC<", "PYTHON", "PERL5", "RUBY", "LUA_", "DOTNET_", "COMPLUS_", "COR_", "CORECLR_", "APPDOMAIN_MANAGER_", "GIT_"],
  Di = new Set(["NODE_OPTIONS", "NODE_PATH", "BASH_ENV", "ENV", "SHELLOPTS", "BASHOPTS", "PS4", "PERLLIB", "GEM_PATH", "GEM_HOME", "JAVA_TOOL_OPTIONS", "_JAVA_OPTIONS", "JDK_JAVA_OPTIONS", "IBM_JAVA_OPTIONS", "OPENJ9_JAVA_OPTIONS", "CLASSPATH", "BUN_OPTIONS", "MONO_PATH", "R_PROFILE_USER", "DEVPATH", "GCONV_PATH", "OPENSSL_CONF", "OPENSSL_MODULES", "OPENSSL_ENGINES", "KRB5_CONFIG", "GTK_PATH", "QT_PLUGIN_PATH", "GIO_MODULE_DIR", "FPATH", "IFS", "CDPATH", "SSH_ASKPASS", "SSH_ASKPASS_REQUIRE", "SASL_PATH", "PHPRC", "PHP_INI_SCAN_DIR", "PATH", "COMSPEC", "ZDOTDIR", "XDG_CONFIG_HOME", "PSMODULEPATH", "SYSTEMROOT", "WINDIR", "SYSTEMDRIVE", "PATHEXT"]),
  Fi = "/usr/bin:/bin:/usr/sbin:/sbin",
  Hi = "C:\\Windows\\System32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0",
  ki = "C:\\Windows\\System32\\cmd.exe",
  Mi = "C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\Modules",
  xi = ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC",
  Fe = "/var/empty/claude-code-policy-helper",
  Ui = "C:\\Windows\\claude-code-policy-helper";
function $i(e) {
  let n = e.toUpperCase();
  return Di.has(n) || Li.some(item => n.startsWith(item));
}
function LHr(e, n) {
  let r = {
      ...e
    },
    s = new Set(ZEe(e).map(item => item.toUpperCase()));
  for (let S of Object.keys(r)) if ($i(S) || s.has(S.toUpperCase())) delete r[S];
  if (Object.assign(r, Vge(r).respelled), r.PYTHONNOUSERSITE = "1", r.GIT_CONFIG_NOSYSTEM = "1", n === "win32") r.GIT_CONFIG_GLOBAL = Ui, r.PATH = Hi, r.COMSPEC = ki, r.PSModulePath = Mi, r.PATHEXT = xi, r.SystemRoot = "C:\\Windows", r.windir = "C:\\Windows", r.SystemDrive = "C:";else r.GIT_CONFIG_GLOBAL = Fe, r.PATH = Fi, r.ZDOTDIR = Fe, r.XDG_CONFIG_HOME = Fe, r.PSModulePath = Fe;
  return r;
}
var Wi = 1e4,
  xe = 1048576,
  Ki = f(() => _t({
    managedSettings: oe().optional(),
    claudeMd: o().optional(),
    appendSystemPrompt: o().optional()
  }));
function Ue(message) {
  return {
    message: message,
    remote: null
  };
}
var cHo = "<policyHelper>";
function Se() {
  let e = yi();
  if (W() && e.primer !== void 0) e.invalidatePolicyLayer();else dr();
}
class zn {
  state = null;
  selectionWarnings = [];
  initializeAttempted = !1;
  structuralRefusalLogged = !1;
  noEntrySadLogged = !1;
  defaultFallback = null;
  payloadRefusalError = null;
  refreshTimer = null;
  refreshInFlight = !1;
  midSessionArmingEnabled = !1;
  osAdminArming = null;
  undeliveredRefusal = null;
  startsNoSession = !1;
  decidedOrigin = null;
  pendingStats = new Map();
  remoteArmGeneration = 0;
  osAdminRetireGeneration = 0;
  stoppedAsking = !1;
  remoteArmingConfig = null;
  remoteFailedConfig = null;
  lastFailure = null;
  selectedEntry = null;
  restartFrom = null;
  releaseLatchWhenTickSettles = !1;
  readRemotePayload = null;
  armedFromUserWritableBase = !1;
  retiredHelperPaths = new Set();
  remoteDecision = null;
  refreshed = Me();
  passesInFlight = 0;
  passSettled = Me();
  claimInitialize() {
    if (this.initializeAttempted) return !1;
    return this.initializeAttempted = !0, !0;
  }
  apply(e) {
    if (this.state = e, this.remoteFailedConfig = null, this.lastFailure = null, Se(), e.config) this.startRefreshTimer(e.config, e.fromPerOs, e.armedFromRemote);else this.stopRefreshTimer();
  }
  retireState() {
    let e = this.state?.config?.path;
    if (e !== void 0) this.retiredHelperPaths.add(e);
    this.state = null, this.lastFailure = null, this.selectedEntry = null;
  }
  reset() {
    this.remoteArmGeneration++, this.remoteArmingConfig = null, this.armedFromUserWritableBase = !1, this.remoteDecision = null, this.state = null, this.retiredHelperPaths.clear(), this.selectionWarnings = [], this.initializeAttempted = !1, this.structuralRefusalLogged = !1, this.noEntrySadLogged = !1, this.defaultFallback = null, this.payloadRefusalError = null, this.refreshInFlight = !1, this.midSessionArmingEnabled = !1, this.osAdminArming = null, this.undeliveredRefusal = null, this.restartFrom = null, this.stoppedAsking = !1, this.decidedOrigin = null, this.remoteFailedConfig = null, this.lastFailure = null, this.selectedEntry = null, this.releaseLatchWhenTickSettles = !1, this.readRemotePayload = null, this.stopRefreshTimer(), Se();
  }
  announceTierChange() {
    Se();
    try {
      yi().changed.emit("policySettings"), this.refreshed.emit();
    } catch (error) {
      l(error);
    }
  }
  stopRefreshTimer() {
    if (this.refreshTimer) clearInterval(this.refreshTimer), this.refreshTimer = null;
  }
  holdRemoteFailure({
    config: config,
    fromPerOs: fromPerOs
  }, r) {
    if (this.remoteFailedConfig = config, !r) return;
    if (config.path !== void 0) this.retiredHelperPaths.add(config.path);
    this.startRefreshTimer(config, fromPerOs, !0);
  }
  retireRemoteFailure() {
    if (this.remoteFailedConfig === null) return;
    this.remoteFailedConfig = null, this.lastFailure = null, this.selectedEntry = null, this.stopRefreshTimer(), this.releaseLatch();
  }
  releaseLatch() {
    if (this.refreshInFlight) this.releaseLatchWhenTickSettles = !0;else this.initializeAttempted = !1;
  }
  settleRefreshExec() {
    if (this.refreshInFlight = !1, this.releaseLatchWhenTickSettles) this.releaseLatchWhenTickSettles = !1, this.releaseLatchAfterTornDownExec();
  }
  releaseLatchAfterTornDownExec() {
    if (this.initializeAttempted = !1, this.readRemotePayload !== null) HHr(this.readRemotePayload);
  }
  startRefreshTimer(e, n, r) {
    this.stopRefreshTimer();
    let s = e.refreshIntervalMs ?? 0;
    if (s <= 0) return;
    this.refreshTimer = setInterval((S, E, h) => {
      if (this.refreshInFlight) return;
      if (this.refreshInFlight = !0, h && this.state === null) {
        Qi(S, E).finally(() => this.settleRefreshExec());
        return;
      }
      let state = this.state;
      wt(S, E, h, () => this.state === state).then(P => {
        if (this.state === null || this.state !== state) return;
        let A = h && Ge(S) || S;
        if ("error" in P) {
          if (this.defaultFallback) {
            let O = `the static ${this.defaultFallback.sourceField} settings payload governs`;
            if (this.state.serving === "default") {
              if (t(`policyHelper refresh: helper still failing (${P.error}); the static default settings payload continues to govern`, {
                level: "debug"
              }), yt(P.error, O, E), this.lastFailure !== P.code) this.lastFailure = P.code, this.announceTierChange();
              return;
            }
            t(`policyHelper refresh failed (${P.error}); applying the static ${this.defaultFallback.sourceField} settings payload`, {
              level: "warn"
            }), yt(P.error, O, E), p("settings_policy_helpers_per_os", "refresh_fell_back_to_default"), this.state.serving = "default", this.lastFailure = P.code, this.state.mergesOutput = Tt(A, this.defaultFallback), this.state.output = {
              managedSettings: We(this.defaultFallback.settings, h, cm())
            }, this.state.warnings = this.defaultFallback.warnings, this.announceTierChange();
            return;
          }
          if (t(`policyHelper refresh failed (retaining current policy): ${P.error}`, {
            level: "warn"
          }), yt(P.error, "the last successful helper output still governs", E), p("settings_policy_helper", "refresh_failed", {
            attempts: P.attempts
          }), this.lastFailure !== P.code) this.lastFailure = P.code, this.announceTierChange();
          return;
        }
        if (Nt(), this.state.serving === "default") t("policyHelper refresh: helper recovered; its output replaces the static default settings payload", {
          level: "info"
        }), g("settings_policy_helpers_per_os");
        this.state.serving = "helper", this.lastFailure = null, this.state.mergesOutput = A.outputBehavior === "merge", this.state.output = P.output, this.state.warnings = P.warnings, this.announceTierChange();
      }).catch(P => {
        l(P);
      }).finally(() => this.settleRefreshExec());
    }, Math.min(s, I$r), e, n, r), this.refreshTimer.unref?.();
  }
}
var R = new zn(),
  dc = W2({
    clear: clear
  }),
  refreshed = R.refreshed,
  jn = new Set(["plist", "hklm", "file"]);
async function fBt(e, n, r) {
  let undeliveredRefusal = R.undeliveredRefusal;
  if (undeliveredRefusal !== null) return R.undeliveredRefusal = null, undeliveredRefusal;
  let S = await Xn(e, n, r);
  if (S === null) return null;
  if (S.remote) {
    if (R.startsNoSession) return Vn(S.message, S.remote), null;
    Yn(S.remote);
  }
  return S.message;
}
function FVs() {
  R.startsNoSession = !0;
}
function Vn(e, n) {
  t(`policyHelper: ${e} (reached in a command that starts no session; it proceeds without the helper)`, {
    level: "error"
  }), _e('onFailure is "refuse", but this command starts no Claude Code session, so it proceeds without the helper; sessions will not start until the helper succeeds', n.tuple), p("settings_policy_helpers_per_os", "remote_refuse_not_enforced_no_session");
}
function Yn(e) {
  m("settings_policy_helpers_per_os", e.code, e.helperFailureReason === void 0 ? void 0 : {
    helper_failure_reason: c(e.helperFailureReason)
  });
}
function Jn(e) {
  return e.find(item => item.startupFatal && (item.path === "" || item.path === "policyHelpers" || item.path.startsWith("policyHelpers.")));
}
function uHo(e) {
  let n = Jn(e);
  if (n) return AW.some(item => n.path === `policyHelpers.${item}`) ? "helper_failed" : "policy_invalid";
  return R.payloadRefusalError !== null ? "policy_invalid" : "helper_failed";
}
async function Xn(e, n, r) {
  R.passesInFlight++;
  try {
    let s = await xn(e, n, r);
    for (let restartFrom = R.restartFrom; restartFrom !== null; restartFrom = R.restartFrom) {
      Ve(ze()), R.restartFrom = null;
      let E = restartFrom();
      FHr(E.origin), s = await xn(E.settings, E.origin, E.loadErrors);
    }
    return s;
  } finally {
    if (R.restartFrom !== null) try {
      Ve(ze()), R.restartFrom = null;
    } catch (error) {
      l(error);
    }
    R.passesInFlight--, R.passSettled.emit();
  }
}
async function xn(e, n, r) {
  let s = Jn(r);
  if (s) {
    if (!R.structuralRefusalLogged) {
      R.structuralRefusalLogged = !0;
      let w = s.path;
      m("settings_policy_helpers_per_os", w === "" ? "document_invalid" : w === "policyHelpers" ? "structural_invalid" : w === "policyHelpers.default" || w.endsWith(".defaultSettings") ? "default_payload_invalid" : "entry_invalid");
    }
    return Ue(`${s.file === void 0 ? "managed settings" : Hd(s.file)}: ${s.message}`);
  }
  if (R.payloadRefusalError !== null) return Ue(R.payloadRefusalError);
  if (!R.claimInitialize()) return null;
  R.decidedOrigin = n, tr(), R.remoteDecision = null, R.selectedEntry = null, Ee(or), Ee(Pt);
  let S = e?.policyHelpers,
    armedFromRemote = n === "remote" && NHr(e),
    h = armedFromRemote ? bt(e) : null,
    tuple = h?.tuple,
    P = armedFromRemote ? void 0 : e?.policyHelper;
  if (!S && !P) {
    if (eL() === !0 && !N_()) t("policyHelper: no helper configuration present at helper-pass time (remote managed settings eligible, no payload in cache); a payload landing later arms one only through a fetch cycle after preAction", {
      level: "debug"
    });
    return R.initializeAttempted = !1, null;
  }
  if (h) {
    if (R.remoteDecision = h, !h.verified && tuple !== void 0) return R.initializeAttempted = !1, _e("remote settings not verified this session", tuple), null;
  } else if (n === "remote" && S) return t("remote policyHelpers names no helper and carries no static payload for this platform", {
    level: "debug"
  }), R.initializeAttempted = !1, null;else if (n === null || !jn.has(n)) {
    if (t(`policyHelper ignored: delivered via non-admin source '${n ?? "unknown"}'`, {
      level: "warn"
    }), n === "remote") R.initializeAttempted = !1;
    return null;
  }
  R.armedFromUserWritableBase = n === "plist" && ane().userWritable === !0;
  let A = S ? uhe() : null,
    O = null;
  if (h) At(h);else O = Vi(S, A?.chain ?? []);
  if (O) return R.payloadRefusalError = O, Ue(O);
  let C = Ji(S, P, A, armedFromRemote);
  if (!C) return R.initializeAttempted = !1, null;
  if (R.selectedEntry = C.kind === "helper" ? {
    key: C.entryKey,
    config: C.config
  } : {
    key: AW.find(item => C.fallback.sourceField === `policyHelpers.${item}.defaultSettings`) ?? "default",
    config: null
  }, C.kind === "default") {
    if (h && !h.payloadServable) {
      if (R.initializeAttempted = !1, _e(h.verified ? `${C.fallback.sourceField} carries settings not yet approved in the managed-settings dialog; it is not applied until they are` : `${C.fallback.sourceField} carries settings the managed-settings dialog lists and remote settings are not verified this session; it is not applied until they are`, void 0), h.verified) p("settings_policy_helpers_per_os", "remote_consent_missing");
      return null;
    }
    return p("settings_policy_helpers_per_os", "fell_back_to_default"), t(`policyHelper: no policyHelpers helper entry for platform "${A?.platform ?? "unknown"}"; applying the static ${C.fallback.sourceField} settings payload`, {
      level: "info"
    }), Rt(null, C.fallback.mergesOutput, armedFromRemote), null;
  }
  let defaultFallback = R.defaultFallback,
    M = Zn(C.fromPerOs ? C.config : null, armedFromRemote);
  if (h && !h.helperMayExec) {
    if (defaultFallback && h.payloadServable) return Rt(null, Tt(C.config, defaultFallback), !0), _e(`not yet approved in the managed-settings dialog; the static ${defaultFallback.sourceField} settings payload governs until it is`, tuple), p("settings_policy_helpers_per_os", "remote_consent_missing"), null;
    if (R.initializeAttempted = !1, _e(defaultFallback ? `not yet approved in the managed-settings dialog, and neither are settings the static ${defaultFallback.sourceField} payload carries; nothing from the entry applies until they are` : "not yet approved in the managed-settings dialog", tuple), M) return {
      message: `Claude Code cannot start: your organization's remote managed settings require the policy helper ${Qn(tuple)} to succeed (onFailure "refuse"), and it cannot run until those settings are approved in the managed-settings dialog. Contact your administrator.`,
      remote: {
        code: "remote_refused_on_failure",
        helperFailureReason: void 0,
        tuple: tuple
      }
    };
    return p("settings_policy_helpers_per_os", "remote_consent_missing"), null;
  }
  try {
    if (C.fromPerOs) {
      if ((await Gn(C, {
        armedFromRemote: armedFromRemote,
        suppressExecEvents: armedFromRemote || defaultFallback !== null
      })) === "applied") g("settings_policy_helpers_per_os");
    } else await Gn(C);
  } catch (error) {
    let defaultFallback_2 = R.defaultFallback,
      Z = armedFromRemote ? R.remoteDecision?.helperRefusesOnFailure ?? M : M;
    if (C.fromPerOs && !defaultFallback_2) if (!(error instanceof Ke)) m("settings_policy_helpers_per_os", "error");else if (armedFromRemote && Z) ;else if (!armedFromRemote && !M) m("settings_policy_helpers_per_os", "continued_on_failure", {
      helper_failure_reason: c(error.code)
    });else m("settings_policy_helpers_per_os", error.code);
    if (error instanceof Ke) {
      if (defaultFallback_2) return t(`${error.message}; applying the static ${defaultFallback_2.sourceField} settings payload instead`, {
        level: "warn"
      }), p("settings_policy_helpers_per_os", "fell_back_to_default_on_failure"), Rt(error.code === "bad_path" ? null : C, Tt(C.config, defaultFallback_2), armedFromRemote), R.lastFailure = error.code, null;
      if (R.lastFailure = error.code, armedFromRemote) return _e(error.message, tuple), R.holdRemoteFailure(C, error.code !== "bad_path"), Z ? Bi(error, tuple) : null;
      if (!M) return zi(error.message), null;
      return Ue(error.message);
    }
    throw error;
  }
  return null;
}
function Zn(e, n) {
  let r = e?.onFailure;
  return r == null ? !n : r !== "continue";
}
function Bi(e, tuple_2) {
  return {
    message: `Claude Code cannot start: your organization's remote managed settings require the policy helper ${Qn(tuple_2)} to succeed (onFailure "refuse"), and it failed [${e.code}] \u2014 ${e.message}. Contact your administrator.`,
    remote: {
      code: "remote_refused_on_failure",
      helperFailureReason: e.code,
      tuple: tuple_2
    }
  };
}
function Qn(e) {
  return (e === void 0 ? void 0 : B$r(e)) ?? "it configures";
}
var Pt = 'policyHelpers entry skipped (onFailure "continue"): ',
  Un = "; Claude Code started without the helper's output";
function zi(e) {
  let n = Ye(N_t(e.replace(/\s+/gu, " ")), Ot - Pt.length - Un.length);
  Ct(`${Pt}${n}${Un}`);
}
var qn = "remote policyHelpers entry not run: ",
  er = "remote policyHelpers static settings payload not applied: ",
  Ot = 512;
function Ye(e, n = Ot) {
  return e.length > n ? `${e.slice(0, n - 1)}\u2026` : e;
}
function _e(e, n) {
  let r = N_t(e.replace(/\s+/gu, " ")),
    s = n === void 0 ? void 0 : B$r(n),
    S = Ye(n === void 0 ? `${er}${r}` : `${qn}${s ? `${s}: ` : ""}${r}`);
  Ct(S);
}
var It = "remote policyHelpers static settings payload skipped: ";
function ji(e, n, r) {
  if (Ct(Ye(`${It}${e} is not a valid static settings payload (${N_t(n.replace(/\s+/gu, " "))})`)), r) p("settings_policy_helpers_per_os", "remote_default_payload_invalid");
}
function Ct(message_2) {
  R.selectionWarnings.push({
    file: "policyHelper",
    path: "policyHelpers",
    message: message_2,
    severity: "warning",
    statusOnly: !0
  }), Se(), t(message_2, {
    level: "warn"
  });
}
function tr() {
  rr(), Ee(It);
}
function rr() {
  Ee(qn), Ee(er), R.retireRemoteFailure();
}
var $e = "policyHelper refresh failing: ";
function yt(e, n, r) {
  let s = `; ${n}`,
    S = Ye(N_t(e.replace(/\s+/gu, " ")), Ot - $e.length - s.length),
    message_3 = `${$e}${S}${s}`;
  if (R.selectionWarnings.some(item => item.message === message_3)) return;
  let h = R.selectionWarnings.filter(item => !item.message.startsWith($e)),
    y = h.length !== R.selectionWarnings.length;
  if (R.selectionWarnings = [...h, {
    file: "policyHelper",
    path: r ? "policyHelpers" : "policyHelper",
    message: message_3,
    severity: "warning",
    statusOnly: !0
  }], !y) Se();
}
function Nt() {
  Ee($e);
}
var or = "policyHelpers is configured but has no entry for platform ";
function Ee(e) {
  let n = R.selectionWarnings.filter(item => !item.message.startsWith(e));
  if (n.length === R.selectionWarnings.length) return;
  R.selectionWarnings = n, Se();
}
function ir(e, n) {
  let r = K$r(e, n);
  for (let s of r.strippedKeys) t(`${n}: stripped ${s} from the settings payload (no recursion)`, {
    level: "warn"
  });
  for (let s of r.warnings) t(`${n}: ${s.message}`, {
    level: "warn"
  });
  return r;
}
function sr(e, n) {
  let r = [];
  for (let s of n) {
    let S = e[s],
      raw = S?.defaultSettings;
    if (raw !== void 0 && raw !== null) r.push({
      field: `policyHelpers.${s}.defaultSettings`,
      raw: raw,
      onChain: !0,
      mergesOutput: S?.outputBehavior === "merge"
    });
  }
  for (let s of AW) {
    let raw_2 = e[s]?.defaultSettings;
    if (raw_2 !== void 0 && raw_2 !== null && !n.includes(s)) r.push({
      field: `policyHelpers.${s}.defaultSettings`,
      raw: raw_2,
      onChain: !1,
      mergesOutput: !1
    });
  }
  if (e.default !== void 0 && e.default !== null) r.push({
    field: "policyHelpers.default",
    raw: e.default,
    onChain: !0,
    mergesOutput: !1
  });
  return r;
}
function ar(e, n) {
  if (e.raw !== null && typeof e.raw === "object" && !Array.isArray(e.raw)) {
    let {
        policyHelper: policyHelper,
        policyHelpers: policyHelpers,
        ...E
      } = e.raw,
      h = s7e().safeParse(E);
    if (!h.success) return {
      error: h.error.issues[0]?.message ?? "failed validation"
    };
  }
  let r = n ? ir(e.raw, e.field) : K$r(e.raw, e.field);
  if ("error" in r) return {
    error: r.error
  };
  return {
    settings: r.settings,
    warnings: r.warnings.map(item => ({
      ...item,
      statusOnly: !0
    })),
    sourceField: e.field,
    mergesOutput: e.mergesOutput
  };
}
function Vi(e, n) {
  if (R.defaultFallback = null, !e) return null;
  let r = null;
  for (let s of sr(e, n)) {
    let S = ar(s, s.onChain && !r);
    if ("error" in S) return m("settings_policy_helpers_per_os", "default_payload_invalid"), `${s.field} is not a valid static settings payload (${S.error}); Claude Code will not start until it is fixed`;
    if (s.onChain && !r) r = S;
  }
  return R.defaultFallback = r, null;
}
function lr(e) {
  let winner = null,
    skipped = [];
  for (let s of e) {
    let S = ar(s, !1);
    if ("error" in S) skipped.push({
      field: s.field,
      error: S.error
    });else if (!winner) winner = {
      ...S,
      warnings: _7e(S.warnings)
    };
  }
  return {
    winner: winner,
    skipped: skipped
  };
}
function At(e) {
  Ee(It), R.defaultFallback = e.winner;
  for (let {
    field: field,
    error: error_3
  } of e.skipped) ji(field, error_3, e.verified);
}
function cr(e, n) {
  return hKs(UB(e), n.sourceField) || wne(UB(n.settings));
}
function ur(e) {
  let n = e?.policyHelpers;
  return n ? sr(n, uhe().chain).filter(item => item.onChain) : [];
}
function HVs(e) {
  if (Yi(e) !== void 0) return !0;
  let {
    winner: winner_2
  } = lr(ur(e));
  return winner_2 !== null && cr(e, winner_2);
}
function We(e, n, r) {
  return n && !r ? FUo(e) : e;
}
function bt(e) {
  let verified = cm(),
    r = e1t(),
    s = e?.policyHelpers,
    S = s ? Ie(s, uhe().chain, !0)?.config ?? null : null,
    tuple_3 = QBt(S),
    h = ur(e),
    {
      winner: winner_3,
      skipped: skipped_2
    } = lr(h);
  return {
    verified: verified,
    tuple: tuple_3,
    helperMayExec: tuple_3 !== void 0 && r,
    helperMergesOutput: S?.outputBehavior === "merge",
    helperRefusesOnFailure: Zn(S, !0),
    payloadKey: _(ZO(h.map(item => [item.field, item.raw, item.mergesOutput]))),
    winner: winner_3,
    skipped: skipped_2,
    payloadServable: winner_3 !== null && (r || !cr(e, winner_3) && (verified || tuple_3 === void 0))
  };
}
function gr(e, n) {
  return e.verified === n.verified && e.tuple === n.tuple && e.helperMayExec === n.helperMayExec && e.helperMergesOutput === n.helperMergesOutput && e.helperRefusesOnFailure === n.helperRefusesOnFailure && e.payloadKey === n.payloadKey && e.payloadServable === n.payloadServable;
}
function Tt(e, n) {
  return e.outputBehavior === "merge" || n?.mergesOutput === !0;
}
function Rt(e, mergesOutput, armedFromRemote_2) {
  let defaultFallback_3 = R.defaultFallback;
  if (!defaultFallback_3) return;
  let S = cm();
  R.apply({
    config: e?.config ?? null,
    fromPerOs: e?.fromPerOs ?? !1,
    serving: "default",
    armedFromRemote: armedFromRemote_2,
    mergesOutput: mergesOutput,
    output: {
      managedSettings: We(defaultFallback_3.settings, armedFromRemote_2, S)
    },
    warnings: defaultFallback_3.warnings
  }), t(`${defaultFallback_3.sourceField} static settings payload applied${armedFromRemote_2 ? ` from remote managed settings${S ? "" : " (cached, not yet verified this session)"}` : ""} (keys: ${Object.keys(defaultFallback_3.settings).join(",")})`, {
    level: "debug"
  });
}
function NHr(e) {
  let n = e?.policyHelpers;
  if (!n) return !1;
  let chain = uhe().chain;
  return Ie(n, chain, !0) !== null || n.default !== void 0 && n.default !== null || chain.some(item => {
    let S = n[item]?.defaultSettings;
    return S !== void 0 && S !== null;
  });
}
function Ie(e, n, r) {
  for (let osKey of n) {
    let S = e[osKey];
    if (S == null) continue;
    if (r ? QBt(S) !== void 0 : S.path != null || S.script != null) {
      let {
        defaultSettings: defaultSettings,
        ...config_2
      } = S;
      return {
        osKey: osKey,
        config: config_2
      };
    }
  }
  return null;
}
function Yi(e) {
  let n = e?.policyHelpers;
  return n ? QBt(Ie(n, uhe().chain, !0)?.config ?? null) : void 0;
}
function Ji(e, config_3, r, s) {
  if (!e || !r) return config_3 ? {
    kind: "helper",
    entryKey: "policyHelper",
    config: config_3,
    fromPerOs: !1
  } : null;
  let {
      platform: platform,
      chain: chain_2
    } = r,
    h = Ie(e, chain_2, s);
  if (h) return {
    kind: "helper",
    entryKey: h.osKey,
    config: h.config,
    fromPerOs: !0
  };
  let y = R.defaultFallback;
  if (y) return {
    kind: "default",
    fallback: y
  };
  if (config_3) return p("settings_policy_helpers_per_os", "fell_back_to_singular"), {
    kind: "helper",
    entryKey: "policyHelper",
    config: config_3,
    fromPerOs: !1
  };
  if (s) return null;
  let message_4 = `${or}"${platform}", no default settings payload, and no policyHelper fallback; no policy helper will run`;
  if (R.selectionWarnings.push({
    file: "policyHelper",
    path: "policyHelpers",
    message: message_4,
    severity: "warning",
    statusOnly: !0
  }), Se(), t(message_4, {
    level: "warn"
  }), !R.noEntrySadLogged) R.noEntrySadLogged = !0, p("settings_policy_helpers_per_os", "no_entry_for_platform");
  return null;
}
class Ke extends Error {
  code;
  constructor(e, n) {
    super(n);
    this.code = e;
  }
}
async function Gn({
  config: config_4,
  fromPerOs: fromPerOs_2
}, r) {
  let armedFromRemote_3 = r?.armedFromRemote === !0,
    {
      remoteArmGeneration: remoteArmGeneration,
      osAdminRetireGeneration: osAdminRetireGeneration
    } = R;
  if (armedFromRemote_3) R.remoteArmingConfig = config_4;
  let h;
  try {
    h = await wt(config_4, fromPerOs_2, armedFromRemote_3, () => !armedFromRemote_3 || R.remoteArmGeneration === remoteArmGeneration);
  } finally {
    if (R.remoteArmingConfig === config_4) R.remoteArmingConfig = null;
  }
  if (armedFromRemote_3 && R.remoteArmGeneration !== remoteArmGeneration) {
    if (config_4.path !== void 0 && !("error" in h && h.code === "bad_path")) R.retiredHelperPaths.add(config_4.path);
    return t("policyHelper: remote arming revoked during exec; discarding output", {
      level: "warn"
    }), p("settings_policy_helpers_per_os", "deactivated_during_exec"), R.releaseLatchAfterTornDownExec(), "dropped";
  }
  if (!armedFromRemote_3 && R.osAdminRetireGeneration !== osAdminRetireGeneration) {
    if (config_4.path !== void 0 && !("error" in h && h.code === "bad_path")) R.retiredHelperPaths.add(config_4.path);
    return t("policyHelper: OS-admin pass retired during exec; discarding output", {
      level: "warn"
    }), p("settings_policy_helper", ze().code), R.initializeAttempted = !1, "dropped";
  }
  if ("error" in h) {
    if (!r?.suppressExecEvents) m("settings_policy_helper", h.code, {
      attempts: h.attempts
    });
    throw new Ke(h.code, `policyHelper failed: ${h.error}`);
  }
  if (R.apply({
    config: config_4,
    fromPerOs: fromPerOs_2,
    serving: "helper",
    armedFromRemote: armedFromRemote_3,
    mergesOutput: config_4.outputBehavior === "merge",
    output: h.output,
    warnings: h.warnings
  }), t(`policyHelper applied (keys: ${Object.keys(h.output).join(",")})`, {
    level: "debug"
  }), !r?.suppressExecEvents) g("settings_policy_helper", {
    attempts: h.attempts
  });
  return "applied";
}
function pr() {
  return R.state?.output.managedSettings ?? null;
}
function fr() {
  let state_2 = R.state;
  return state_2 && !state_2.armedFromRemote ? state_2.output : void 0;
}
function W5n() {
  return fr()?.claudeMd ?? null;
}
function $Vs() {
  return fr()?.appendSystemPrompt ?? null;
}
function lne() {
  return R.state !== null;
}
function UVs() {
  return R.passesInFlight > 0;
}
function BVs(e) {
  return R.passSettled.subscribe(e);
}
function jVs() {
  return R.initializeAttempted;
}
function _r() {
  return R.state?.armedFromRemote === !0;
}
function Cun() {
  return R.state !== null && R.armedFromUserWritableBase;
}
function mr() {
  return R.state?.mergesOutput === !0;
}
function FHr(e) {
  if (e !== "remote" || !R.initializeAttempted || R.state?.armedFromRemote === !0) return;
  Ve({
    said: "the remote payload that landed shadows the MDM/file policy it was read from",
    code: "retired_shadowed_by_remote"
  });
}
function WVs(e) {
  Sr(e, !1);
}
function zVs(e) {
  Sr(e, !0);
}
function Sr(readBase, n) {
  let {
    state: state_3
  } = R;
  if (state_3?.armedFromRemote === !0 || R.remoteArmingConfig !== null || R.remoteFailedConfig !== null) return;
  if (R.stoppedAsking = n, R.osAdminRetireGeneration++, R.passesInFlight > 0) {
    R.restartFrom = readBase;
    return;
  }
  if (state_3 === null && !R.initializeAttempted) {
    if (n) R.decidedOrigin = null, hr("is read whole at the turn away from asking");
    return;
  }
  Ve(ze()), Rr({
    readBase: readBase,
    refuse: refuse
  }, `was read again at the turn ${n ? "away from" : "to"} asking its organization`);
}
function refuse(e) {
  let osAdminArming = R.osAdminArming;
  if (osAdminArming) osAdminArming.refuse(e);else R.undeliveredRefusal = e;
}
var Xi = {
    said: "the session asks its organization: a fresh pass runs from the base as now read",
    code: "retired_held_document"
  },
  Zi = {
    said: "the session stopped asking its organization: the base is read whole again",
    code: "retired_stopped_asking"
  };
function ze() {
  return R.stoppedAsking ? Zi : Xi;
}
function Ve({
  said: said,
  code: code_4
}) {
  Nt(), R.stopRefreshTimer();
  let r = R.state !== null;
  if (R.retireState(), R.defaultFallback = null, R.payloadRefusalError = null, R.remoteFailedConfig = null, R.initializeAttempted = !1, code_4 !== "retired_shadowed_by_remote") R.decidedOrigin = null;
  if (!r) return;
  t(`policyHelper: OS-admin helper pass retired; ${said}`, {
    level: "info"
  }), p("settings_policy_helper", code_4), R.announceTierChange();
}
function Oe() {
  if (R.remoteArmGeneration++, tr(), R.remoteDecision !== null) R.defaultFallback = null, R.remoteDecision = null, R.selectedEntry = null;
  if (R.state?.armedFromRemote !== !0) return;
  Nt(), R.stopRefreshTimer(), R.retireState(), R.releaseLatch(), t("policyHelper: remote-armed helper (or remote static payload) deactivated", {
    level: "info"
  }), R.announceTierChange();
}
EUo(Oe);
function Ge(e) {
  let readRemotePayload = R.readRemotePayload;
  if (readRemotePayload === null || !e1t()) return null;
  let r = readRemotePayload()?.policyHelpers,
    s = r ? Ie(r, uhe().chain, !0)?.config ?? null : null;
  return s !== null && QBt(s) === QBt(e) ? s : null;
}
async function Qi(e, fromPerOs_3) {
  try {
    if (Ge(e) === null) {
      t("policyHelper: remote retry stopped; the payload in force no longer authorizes the entry", {
        level: "info"
      }), Oe();
      return;
    }
    let remoteArmGeneration_2 = R.remoteArmGeneration;
    R.remoteArmingConfig = e;
    let s;
    try {
      s = await wt(e, fromPerOs_3, !0, () => R.remoteArmGeneration === remoteArmGeneration_2 && Ge(e) !== null);
    } finally {
      if (R.remoteArmingConfig === e) R.remoteArmingConfig = null;
    }
    let S = R.remoteArmGeneration !== remoteArmGeneration_2,
      E = S ? null : Ge(e);
    if (E === null) {
      if (!S) Oe();
      t("policyHelper: remote retry revoked during exec; discarding output", {
        level: "warn"
      }), p("settings_policy_helpers_per_os", "deactivated_during_exec");
      return;
    }
    if ("error" in s) {
      t(`policyHelper retry failed (remote entry still not armed): ${s.error}`, {
        level: "warn"
      }), p("settings_policy_helper", "refresh_failed", {
        attempts: s.attempts
      });
      return;
    }
    let config_5 = {
      ...e,
      outputBehavior: E.outputBehavior
    };
    R.apply({
      config: config_5,
      fromPerOs: fromPerOs_3,
      serving: "helper",
      armedFromRemote: !0,
      mergesOutput: config_5.outputBehavior === "merge",
      output: s.output,
      warnings: s.warnings
    }), rr(), t("policyHelper: remote entry armed by a retry tick", {
      level: "info"
    }), g("settings_policy_helpers_per_os"), R.announceTierChange();
  } catch (error) {
    l(error);
  }
}
function GVs(e) {
  R.midSessionArmingEnabled = !0, R.osAdminArming = e ?? null;
  let undeliveredRefusal_2 = R.undeliveredRefusal;
  if (undeliveredRefusal_2 !== null && e) e.refuse(undeliveredRefusal_2), R.undeliveredRefusal = null;
}
function HHr(e) {
  qi(e), hr("became the base mid-session");
}
function hr(e) {
  let osAdminArming_2 = R.osAdminArming;
  if (osAdminArming_2 === null || !R.midSessionArmingEnabled || R.initializeAttempted || !osAdminArming_2.baseSettled()) return;
  let {
    origin: origin
  } = osAdminArming_2.readBase();
  if (origin === null || !jn.has(origin) || origin === R.decidedOrigin) return;
  Rr(osAdminArming_2, e);
}
function Rr(e, n) {
  let {
    settings: settings_3,
    origin: origin_2,
    loadErrors: loadErrors
  } = e.readBase();
  FHr(origin_2), fBt(settings_3, origin_2, loadErrors).then(E => {
    if (E !== null) {
      t(`policyHelper: the ${origin_2} source ${n} and its pass refused; exiting as the launch would have: ${E}`, {
        level: "error"
      }), e.refuse(E), R.decidedOrigin = origin_2;
      return;
    }
    if (R.state === null) return;
    t(`policyHelper: armed from the ${origin_2} source, which ${n}`, {
      level: "info"
    }), R.announceTierChange();
  }).catch(E => {
    l(E);
  });
}
function qi(e) {
  if (R.readRemotePayload = e, !R.midSessionArmingEnabled || R.initializeAttempted || !cm()) return;
  let n = e();
  if (!NHr(n)) return;
  let remoteDecision = R.remoteDecision;
  if (remoteDecision !== null && gr(remoteDecision, bt(n))) return;
  let s = R.retiredHelperPaths.size,
    {
      remoteFailedConfig: remoteFailedConfig,
      osAdminRetireGeneration: osAdminRetireGeneration_2
    } = R;
  Xn(n, "remote", []).then(h => {
    if (h === null) return;
    if (h.remote && R.startsNoSession) {
      Vn(h.message, h.remote);
      return;
    }
    let osAdminArming_3 = R.osAdminArming;
    if (osAdminArming_3 !== null && (!kp() || osAdminArming_3.isUnwatchedRepl())) {
      if (t(`policyHelper: ${h.message} (reached after this unwatched session started; ending it as the launch refusal would have)`, {
        level: "error"
      }), h.remote) Yn(h.remote);
      osAdminArming_3.refuse(h.message), R.midSessionArmingEnabled = !1;
      return;
    }
    if (h.remote === null && R.osAdminRetireGeneration !== osAdminRetireGeneration_2) {
      t(`policyHelper: ${h.message} (refused by the pass a turn of the ask ran in this one's place; handed to the launch's handler, or kept for it)`, {
        level: "error"
      }), refuse(h.message), R.midSessionArmingEnabled = !1;
      return;
    }
    if (t(`policyHelper: ${h.message} (reached after this interactive session started; it continues without the helper)`, {
      level: "error"
    }), h.remote) _e('onFailure is "refuse", but this was reached after this interactive session started, so it continues on the remote managed settings without the helper; new sessions will not start (and non-interactive or unwatched ones are ended) until the helper succeeds', h.remote.tuple), p("settings_policy_helpers_per_os", "remote_refuse_unenforceable_midsession");
  }).catch(h => {
    l(h);
  }).finally(() => {
    let h = R.state?.armedFromRemote === !0;
    if (h) t(`policyHelper: remote ${R.state?.serving === "default" ? "static payload applied" : "entry armed"} mid-session`, {
      level: "info"
    });
    if (h || R.retiredHelperPaths.size > s || R.remoteFailedConfig !== remoteFailedConfig) R.announceTierChange();
  });
}
function VVs(e) {
  let remoteDecision_2 = R.remoteDecision;
  if (remoteDecision_2 === null) return;
  let r = e(),
    s = bt(r);
  if (gr(remoteDecision_2, s)) return;
  let state_4 = R.state;
  if (state_4?.armedFromRemote === !0 && state_4.serving === "default") {
    let P = s.tuple === remoteDecision_2.tuple && s.helperMayExec === remoteDecision_2.helperMayExec,
      winner_4 = s.winner;
    if (P && s.payloadServable && winner_4 !== null) {
      At(s), R.remoteDecision = s;
      let managedSettings = We(winner_4.settings, !0, s.verified);
      if (s.payloadKey === remoteDecision_2.payloadKey && s.helperMergesOutput === remoteDecision_2.helperMergesOutput && We(winner_4.settings, !0, remoteDecision_2.verified) === managedSettings) {
        t(`policyHelper: remote static payload from ${winner_4.sourceField} stands as served (document ${s.verified ? "verified" : "no longer verified"} this session)`, {
          level: "debug"
        });
        return;
      }
      state_4.mergesOutput = s.helperMergesOutput || winner_4.mergesOutput, state_4.output = {
        managedSettings: managedSettings
      }, state_4.warnings = winner_4.warnings, t(`policyHelper: remote static payload re-served in place from ${winner_4.sourceField}`, {
        level: "info"
      }), R.announceTierChange();
      return;
    }
    Oe();
    return;
  }
  let E = state_4?.armedFromRemote === !0 ? state_4.config : R.remoteArmingConfig ?? R.remoteFailedConfig,
    h = E != null && s.helperMayExec && s.tuple === QBt(E),
    y = state_4 !== null || R.remoteFailedConfig === null;
  if (h && y) {
    At(s), R.remoteDecision = s, t("policyHelper: remote static payloads re-resolved under the armed entry; the arm stands", {
      level: "debug"
    });
    return;
  }
  Oe();
}
function qVs() {
  return R.state?.config?.path ?? null;
}
function KVs() {
  return [...R.retiredHelperPaths];
}
function YVs(e) {
  let n = e?.policyHelpers,
    r = n ? uhe().chain.map(item => n[item]).filter(item => item != null).map(E => ({
      config: E,
      fromPerOs: !0
    })) : [];
  if (e?.policyHelper != null) r.push({
    config: e.policyHelper,
    fromPerOs: !1
  });
  let s = Ar(),
    S = [];
  for (let {
    config: config_6,
    fromPerOs: fromPerOs_4
  } of r) if (typeof config_6.path === "string" && Tr(config_6, s, fromPerOs_4, !1) === null) S.push(config_6.path);
  return S;
}
function XVs() {
  return R.state?.serving === "default";
}
function JVs() {
  let {
      state: state_5,
      lastFailure: lastFailure,
      selectedEntry: selectedEntry,
      remoteFailedConfig: remoteFailedConfig_2
    } = R,
    remoteDecision_3 = R.remoteDecision,
    E = selectedEntry?.config ?? null,
    state_6 = "none";
  if (remoteDecision_3?.helperRefusesOnFailure === !0 && (remoteFailedConfig_2 !== null || remoteDecision_3.verified && remoteDecision_3.tuple !== void 0 && !remoteDecision_3.helperMayExec)) state_6 = "refuse_pending";else if (lastFailure !== null) state_6 = lastFailure;else if (remoteDecision_3 !== null && !remoteDecision_3.verified && (remoteDecision_3.tuple !== void 0 || !remoteDecision_3.payloadServable)) state_6 = "unverified";else if (remoteDecision_3 !== null && (E !== null && !remoteDecision_3.helperMayExec || selectedEntry !== null && E === null && !remoteDecision_3.payloadServable)) state_6 = "consent_missing";else if (E !== null && state_5?.serving === "helper") state_6 = "ok";
  return {
    state: state_6,
    applied: state_5 === null ? "none" : state_5.serving === "helper" ? "output" : "fallback",
    entry: selectedEntry && {
      key: selectedEntry.key,
      ...(E?.path !== void 0 && {
        path: E.path
      }),
      ...(E?.script !== void 0 && selectedEntry.key !== "policyHelper" && {
        script: E.script
      })
    }
  };
}
function z5n() {
  return [...R.selectionWarnings, ...(R.state?.warnings ?? [])];
}
function clear() {
  R.reset(), R.startsNoSession = !1;
}
var Pr = null;
function QVs(e) {
  Pr = e;
}
var baseMs = 500,
  floorMs = 250,
  capMs = 4000;
function os(e) {
  switch (e) {
    case "exit_nonzero":
    case "timed_out":
    case "not_a_file":
    case "interpreter_unavailable":
      return !0;
    case "bad_path":
    case "oversize":
    case "parse_failed":
    case "envelope_invalid":
    case "schema_rejected":
      return !1;
  }
}
var Wn = 2048;
function is(e) {
  let n = mu(e);
  if (n.length <= Wn) return n;
  let r = ne(n, Wn);
  return `${r}\u2026 (+${n.length - r.length} chars not shown; the full output is in the debug log)`;
}
async function wt(e, n, r, s) {
  let S = n ? e.retries : void 0,
    E = S !== void 0 && Number.isInteger(S) && S > 0 ? Math.min(S, lUo) : 0;
  for (let attempts = 1;; attempts++) {
    let y = await ss(e, n, r);
    if (!("error" in y)) return {
      ...y,
      attempts: attempts
    };
    let P = is(y.error),
      A = {
        error: attempts > 1 ? `after ${attempts} attempts: ${P}` : P,
        code: y.code,
        attempts: attempts
      };
    if (attempts > E || !os(y.code) || !s()) return A;
    let O = SP({
      baseMs: baseMs,
      floorMs: floorMs,
      capMs: capMs,
      attempt: attempts - 1
    });
    if (t(`policyHelper attempt ${attempts} of ${E + 1} failed [${y.code}]; retrying in ${O}ms: ${P}`, {
      level: "warn"
    }), await Y(O), !s()) return A;
  }
}
async function ss(e, n, r) {
  let s = Ar(),
    error_4 = Tr(e, s, n, r);
  if (error_4) return {
    error: error_4,
    code: "bad_path"
  };
  let E = on(e);
  if ("error" in E) return E;
  let {
      plan: plan
    } = E,
    y = Math.min(e.timeoutMs ?? Wi, I$r),
    P = performance.now(),
    error_5 = await sn(plan, y, R.pendingStats);
  if (error_5) return {
    error: error_5,
    code: "not_a_file"
  };
  let timeout = Math.ceil(y - (performance.now() - P));
  if (timeout <= 0) return {
    error: ft(plan.file, y),
    code: "not_a_file"
  };
  let cwd_4;
  if (!r || plan.input !== void 0) cwd_4 = rn(plan);else if (e.path === void 0) return {
    error: "remote-armed helper has no path",
    code: "bad_path"
  };else cwd_4 = (s === "win32" ? Bn : Kn).dirname(e.path);
  let env = process.env,
    M = r ? LHr(Pr?.() ?? env, s) : env,
    {
      stdout: stdout_2,
      stderr: stderr,
      code: code_5,
      error: error_6,
      maxBufferExceeded: maxBufferExceeded,
      timedOut: timedOut
    } = await ct(plan.file, plan.args, {
      timeout: timeout,
      cwd: cwd_4,
      useToolMemoryCgroup: !1,
      maxBuffer: xe + 1,
      env: {
        ...nn(M, plan),
        CLAUDE_CODE_VERSION: {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.303",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-10-18T20:20:57Z",
          GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
          HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          DD_SOURCEMAP_GROUP: "win32"
        }.VERSION
      },
      extendEnv: !1,
      stdin: plan.input === void 0 ? "ignore" : "pipe",
      input: plan.input
    });
  if (stderr) t(`policyHelper stderr: ${stderr}`, {
    level: "debug"
  });
  if (maxBufferExceeded) return {
    error: `${stderr.length > stdout_2.length ? "stderr" : "stdout"} exceeded ${xe} bytes`,
    code: "oversize"
  };
  if (timedOut) return {
    error: `timed out after ${y}ms`,
    code: "timed_out"
  };
  let J = ue => {
    if (stdout_2) t(`policyHelper stdout: ${stdout_2}`, {
      level: "debug"
    });
    return ue;
  };
  if (code_5 !== 0) return J({
    error: `exited with code ${code_5}: ${stderr || stdout_2 || error_6 || ""}`,
    code: "exit_nonzero"
  });
  if (Buffer.byteLength(stdout_2, "utf8") > xe) return {
    error: `stdout exceeded ${xe} bytes`,
    code: "oversize"
  };
  let te = pt(stdout_2, !1);
  if (te === null || typeof te !== "object") return J({
    error: "stdout is not a JSON object",
    code: "parse_failed"
  });
  let re = Ki().safeParse(te);
  if (!re.success) return J({
    error: `invalid envelope: ${re.error.message}`,
    code: "envelope_invalid"
  });
  let output = {},
    warnings = [];
  if (re.data.managedSettings !== void 0) {
    let ue = ir(re.data.managedSettings, "policyHelper");
    if ("error" in ue) return J({
      error: ue.error,
      code: "schema_rejected"
    });
    if (warnings = ue.warnings, r) warnings = _7e(warnings), delete ue.settings.claudeMd;
    output.managedSettings = ue.settings;
  }
  if (re.data.claudeMd !== void 0) output.claudeMd = re.data.claudeMd;
  if (re.data.appendSystemPrompt !== void 0) output.appendSystemPrompt = re.data.appendSystemPrompt;
  return {
    output: output,
    warnings: warnings
  };
}
function Ar() {
  return I() === "windows" ? "win32" : "posix";
}
function Tr(e, n, r, s) {
  if (e.script == null && e.interpreter == null) return as(e.path, n, r, s);
  if (!r) return "inline scripts are not supported on the singular policyHelper key";
  if (e.path != null) return dUo;
  return sKs(e, n === "win32" ? "windows" : "linux");
}
function as(e, n, r, s) {
  let S = n === "win32" ? Bn : Kn;
  if (typeof e !== "string") return "path must be a string";
  if (!S.isAbsolute(e)) return `path must be absolute: ${e}`;
  if (n === "win32") {
    if (r && !oUo.test(e)) return `path must end in .exe or .ps1 on Windows: ${e}`;
    if (!r && !e.toLowerCase().endsWith(".exe")) return `path must end in .exe on Windows: ${e}`;
    if (iUo(e)) return `${aUo}: ${e}`;
  }
  if (s && (n === "win32" ? tUo(e) : wpn(e) || nUo(e))) return `path must not be a UNC, network-automount (/net, /Network/Servers, or macOS /.vol /.file /.nofollow /.resolve) or kernel magic-link (/proc, /dev/fd) path when delivered via remote managed settings: ${e}`;
  if (!rUo(e, n, {
    rejectDriveRelative: n === "win32"
  })) return n === "win32" ? `path must be a drive-qualified (C:\\...) or UNC path in normalized form (no "." or ".." segments, no doubled or trailing separators, no ":" or trailing "."/space in a component, no device-namespace prefix): ${e}` : `path must be in normalized form (no "." or ".." segments, no doubled or trailing separators): ${e}`;
  return null;
}
async function $Hr(e, n, r) {
  let s = await e.read([{
    key: Be.userSettings(),
    offset: 0,
    length: bf + 1
  }]);
  if (!s.ok) return {
    kind: "failing",
    code: s.error.code,
    failureClass: "failureClass" in s.error ? s.error.failureClass : void 0
  };
  let S = s.value.items[0];
  if (!S.found) return ls(e.hostFiles, n);
  if (S.totalBytes > bf) return {
    kind: "oversize"
  };
  let contentHash = st(S.value),
    parsed = r !== void 0 && r.contentHash === contentHash ? r.parsed : Ow(Hne(S.value), n);
  return {
    kind: "seeded",
    contentHash: contentHash,
    size: S.totalBytes,
    parsed: parsed
  };
}
async function ls(e, n) {
  let r;
  try {
    r = await e.stat(Bf.home(n));
  } catch (error) {
    return {
      kind: "failing",
      code: d(error)
    };
  }
  if (r.ok) return r.value.kind === "absent" ? {
    kind: "absent"
  } : {
    kind: "failing",
    code: r.value.kind
  };
  return Zbt(r.error) ? {
    kind: "absent"
  } : Je(r.error);
}
async function pHo(e, n) {
  if (!W()) return;
  let epoch = e.epoch;
  try {
    let s = await n.read(),
      S = s.kind === "seeded" ? s.parsed : s.kind === "absent" && n.whenAbsent === "seedAbsence" ? Ene() : void 0;
    if (S === void 0) {
      t(`settings: ${n.label} not re-seeded (${G5n(s)}); the file read serves`);
      return;
    }
    if (n.source !== "userSettings" && e.walkReadDiffers(n.path, S)) {
      t(`settings: ${n.label} not re-seeded (the file read already saw different content this generation); the file read serves`);
      return;
    }
    if (s.kind === "absent") b7e(n.path);
    return e.seedParsedFile(n.path, n.source, S, epoch) ? e.retainLayer(n.path, S) : void 0;
  } catch (error) {
    t(`settings: ${n.label} not re-seeded: ${d(error)}; the file read serves`, {
      level: "warn"
    });
    return;
  }
}
function fHo(e, path_3) {
  return {
    source: "userSettings",
    path: path_3,
    read: () => $Hr(e, path_3),
    label: "user settings",
    whenAbsent: "seedAbsence"
  };
}
async function cs(e, n) {
  if (!e.serves("userNamed")) return {
    kind: "failing",
    code: code_6
  };
  if (!Yx(n)) try {
    await KW(se(), n);
  } catch {
    return {
      kind: "failing",
      code: code_7
    };
  }
  return us(e, Bf.userNamed(n), n, !1);
}
async function ds(e, n, r) {
  let s = await Or(e, Bf.system(n));
  if (s.kind !== "bytes") return s;
  return {
    kind: "seeded",
    contentHash: s.contentHash,
    size: s.size,
    parsed: r !== void 0 && r.contentHash === s.contentHash ? r.parsed : {
      ...Ow(Hne(s.bytes), n, !0),
      ...(s.owner && {
        fileOwner: s.owner
      })
    }
  };
}
async function us(e, n, r, s) {
  let S = await Or(e, n);
  if (S.kind !== "bytes") return S;
  return {
    kind: "seeded",
    contentHash: S.contentHash,
    size: S.size,
    parsed: Ow(Hne(S.bytes), r, s)
  };
}
async function Or(e, n) {
  let r = await e.stat(n);
  if (!r.ok) return Je(r.error);
  if (r.value.kind === "absent") return {
    kind: "absent"
  };
  if (r.value.kind !== "file") return {
    kind: "failing",
    code: r.value.kind
  };
  if (r.value.size > bf) return {
    kind: "oversize"
  };
  let s = await e.readBytes(n);
  if (!s.ok) return Je(s.error);
  if (!s.value.found) return {
    kind: "absent"
  };
  if (s.value.bytes > bf) return {
    kind: "oversize"
  };
  return {
    kind: "bytes",
    bytes: s.value.value,
    contentHash: st(s.value.value),
    size: s.value.bytes,
    owner: r.value.uid === void 0 ? void 0 : {
      uid: r.value.uid,
      gid: r.value.gid,
      mode: r.value.mode
    }
  };
}
async function ZVs(e, n) {
  let r = await e.listFolder(Bf.system(n));
  if (!r.ok) {
    if (r.error.code === "Failed" && r.error.telemetryCode === "ENOTDIR") return {
      kind: "listed",
      names: []
    };
    return Je(r.error);
  }
  if (!r.value.found) return {
    kind: "listed",
    names: []
  };
  return {
    kind: "listed",
    names: r.value.entries.filter(item => (item.kind === "file" || item.kind === "link") && kne(item.name)).map(item => item.name).sort()
  };
}
function G5n(e) {
  if (e.kind !== "failing") return e.kind;
  return e.code === code_6 ? "the backend does not serve this space" : `backend read failed: ${e.code}`;
}
function Je(e) {
  return {
    kind: "failing",
    code: e.telemetryCode ?? e.code,
    failureClass: e.failureClass
  };
}
function mHo(e, source, path_4, label_2) {
  return {
    source: source,
    path: path_4,
    read: () => cs(e.hostFiles, path_4),
    label: label_2,
    whenAbsent: "seedAbsence"
  };
}
function gHo(e, path_5, label_3, s) {
  return {
    source: "policySettings",
    path: path_5,
    read: () => ds(e.hostFiles, path_5, s.managedFileReads.get(path_5)),
    label: label_3,
    whenAbsent: "fileServes"
  };
}
async function UHr(e, n, r) {
  return pHo(n, fHo(e, r));
}
class wr {
  firedSites = new Set();
  fire(e) {
    if (this.firedSites.has(e)) return;
    this.firedSites.add(e), i("tengu_dead_probe_legacy_local_settings", {
      site: c(e)
    });
  }
  reset() {
    this.firedSites.clear();
  }
}
var v7s = new z(() => new wr());
function I_(e, n, r) {
  return OW(e, yi(), n, r);
}
function D() {
  let e = {
    store: yi(),
    cwd: ii(),
    projectConfigDir: so() ?? void 0,
    allowedSources: zGe(),
    diskless: de(),
    onLegacyLocalSettingsRead: n => v7s.of(j().host).fire(n),
    parentManaged: gSt(),
    hostManagedProvider: a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST,
    flagInline: Gf(),
    flagPath: LA(),
    flagExpectedContent: bv() ?? rre(),
    flagInlineJson: bv() !== void 0,
    coworkPlugins: jgn(),
    canonicalGitRoot: canonicalGitRoot,
    mdm: () => ane(),
    hkcu: () => wun(),
    helper: () => pr(),
    helperArmedFromRemote: () => _r(),
    helperMergesOutput: () => mr(),
    helperWarnings: () => z5n(),
    wslInherits: () => NJ(),
    helperArmedFromUserWritableBase: () => Cun(),
    credentialHelperKeysFrom: n => k7s(n),
    launchFolderKeysFrom: n => E7s(n),
    asksOrganization: () => bun()
  };
  return e.file = () => pTe(e), e;
}
function BHr(e) {
  if (!IB()) return !1;
  if (e !== "policySettings") return !0;
  let n = eT();
  return !((BB(n) || n === "remote") && ane().userWritable !== !0 && !Cun() && (N_() === null || cm()));
}
function k7s(e) {
  if (xl()) return "none";
  if (!IB()) return N5n(e) ? "none" : "as_read";
  if (e !== "policySettings") return "none";
  return BHr(e) ? "machine_admin" : "as_read";
}
function E7s(e) {
  if (!N5n(e)) return "as_read";
  return e === "projectSettings" && Xy() ? "as_read" : "none";
}
function bai(e) {
  return Fpn(e, D());
}
function hHo() {
  let e = D();
  if (e.cwd === null) return;
  let n = rUr(e.cwd, e.canonicalGitRoot);
  return n.decided === void 0 ? n.root : void 0;
}
function fn(e) {
  return x2(e, D());
}
function rk(e) {
  return uUr(e, D());
}
function t0e(e) {
  return VUo(e, D());
}
function wh() {
  return rde(D());
}
function Xy() {
  let e = fn("projectSettings"),
    n = fn("userSettings");
  return !!e && !!n && Re(e) === Re(n);
}
function DQe() {
  let e = fn("localSettings");
  if (!e) return [];
  return I_(e).errors;
}
function yHo() {
  return _5(D());
}
function mBt() {
  return pTe(D());
}
function _Ho() {
  return WUo(D());
}
function LQe(e) {
  return zUo(D(), e);
}
function Sai() {
  return at() || P0e(ane()) || P0e(mBt());
}
function me(e) {
  if (DA() && ef.has(e)) return null;
  return S7e(e, D());
}
function Kge() {
  return qUo(D());
}
function bHo() {
  return KUo(D());
}
function SHo() {
  return YUo(D());
}
function wHo() {
  return XUo(D());
}
function zx(e) {
  return $pn(e, D(), {
    includeLegacyLocalSettings: !1
  });
}
var T7s = 5000;
function sze(e = T7s) {
  return je(yi().backgroundWorkTail, e).then(() => {
    return;
  });
}
var C7s = new z(() => new Map());
function vHo(e) {
  let n = D(),
    r = [x2(e, n), ...(e === "localSettings" ? [rde(n)] : [])].filter(item => item !== void 0),
    s = C7s.of(j().host),
    S = r.map(item => Cze(item, s)),
    E = S.filter(({
      settings: settings_4,
      errors: errors_3
    }) => settings_4 === null && errors_3.some(item => item.severity !== "warning")),
    texts = E.flatMap(({
      textRead: textRead
    }) => textRead ?? []);
  if (texts.length < E.length) return "unreadable";
  let [y, P] = S.map(({
      settings: settings_5
    }) => settings_5),
    A = P === null || P === void 0 ? y ?? null : CW({}, P, y ?? {}, b5);
  return E.length === 0 ? {
    kind: "in_effect",
    settings: A
  } : {
    kind: "some_do_not_load",
    texts: texts,
    settingsOfTheOtherFile: A
  };
}
var Ce;
function Ze() {
  let e = D(),
    n = Ce;
  if (n === void 0) return e;
  let canonicalGitRoot_2 = e.canonicalGitRoot;
  return {
    ...e,
    cwd: n.cwd,
    projectConfigDir: n.projectConfigDir,
    canonicalGitRoot: s => s === n.cwd ? n.canonicalRoot : canonicalGitRoot_2?.(s) ?? null
  };
}
function Run(e) {
  let n = se();
  try {
    let linksResolvedPath = JB(n, e, {
      failClosed: !0
    }).linksResolvedPath;
    if (linksResolvedPath === void 0) {
      for (let h of [ge(e), e]) try {
        if (n.lstatSync(h).isSymbolicLink()) return !0;
      } catch (error) {
        if (!G(error)) return !0;
      }
      return dne(e) !== "absent";
    }
    let s = JB(n, ge(ge(e)), {
        failClosed: !0
      }),
      S = he(s.linksResolvedPath ?? s.resolvedPath, vt(ge(e)), vt(e));
    if (!dF(linksResolvedPath, S)) return !0;
    let E = n.lstatSync(linksResolvedPath);
    return !E.isFile() || E.nlink > 1;
  } catch {
    return !0;
  }
}
function ps(e, n) {
  let r = x2("userSettings", n),
    s = [...(r ? [r] : []), ...j_t().flatMap(item => Object.values(eE).map(P => he(item, P)))],
    S = se(),
    E = [Re(e)];
  try {
    let y = JB(S, e);
    E.push(y.linksResolvedPath ?? y.resolvedPath);
  } catch {}
  let h = I() === "macos";
  return s.some(item => [Re(item), _o(S, item).resolvedPath].some(item => E.some(A => dF(A, item) || h && wp(A).toLowerCase() === wp(item).toLowerCase())));
}
function s_t() {
  let e = Ze(),
    n = x2("projectSettings", e),
    r = {
      project: n && !ps(n, e) ? n : null,
      local: x2("localSettings", e) ?? null,
      legacy: rde(e) ?? null
    };
  return {
    key: `${e.cwd ?? ""}\x00${e.projectConfigDir ?? ""}`,
    ...r,
    linkedAway: ["project", "local", "legacy"].filter(item => {
      let S = r[item];
      return S !== null && Run(S);
    })
  };
}
function dne(e) {
  let n = new Map(),
    r = Cze(e, n),
    s = n.get(e);
  if (s !== void 0) return {
    text: s.content
  };
  return r.errors.some(item => item.severity !== "warning") ? "unreadable" : "absent";
}
function gBt(e = new Map()) {
  let store = new LGe();
  for (let [S, E] of e) store.parsedFiles.set(S, E);
  let r = {
      ...Ze(),
      store: store
    },
    s = new Map();
  for (let S of qD) {
    if (S === "projectSettings" && (() => {
      let h = x2(S, r),
        y = x2("userSettings", r);
      return !!h && !!y && dF(Re(h), Re(y));
    })()) continue;
    let E = S === "localSettings" ? rde(r) : void 0;
    s.set(S, {
      settings: S7e(S, r),
      errors: uUr(S, r),
      unfiltered: $pn(S, r),
      ...(S === "localSettings" && {
        legacy: E === void 0 ? null : OW(E, store).settings ?? null
      })
    });
  }
  return s;
}
var Xe;
function kHo(e) {
  let n = yi(),
    began = !n.repoTierFreeze.isHeld(),
    s = D();
  if (began) Ce = {
    cwd: s.cwd,
    projectConfigDir: s.projectConfigDir,
    canonicalRoot: s.cwd === null ? null : s.canonicalGitRoot?.(s.cwd) ?? null
  };
  let S;
  try {
    S = e === void 0 ? n.repoTierFreeze.engage(gBt) : n.repoTierFreeze.engage(() => gBt(e.files), () => gBt());
  } catch (error) {
    if (began) Ce = void 0;
    throw error;
  }
  if (began) Xe = e?.onOwnWrite;
  try {
    n.invalidateAll();
  } catch (error) {
    if (S.abandon(), !n.repoTierFreeze.isHeld()) Ce = void 0, Xe = void 0;
    throw error;
  }
  return {
    began: began,
    release: () => {
      let E = S.release();
      if (E.last) Ce = void 0, Xe = void 0, n.invalidateAll();
      return E;
    }
  };
}
function V5n(e) {
  return gBt(e);
}
function EHo() {
  let e = Ze();
  return `${e.cwd ?? ""}\x00${e.projectConfigDir ?? ""}`;
}
function THo(e, n) {
  let r = yi();
  if (r.repoTierFreeze.isHeld()) return;
  r.repoTierFreeze.linger(e, n), r.invalidateAll();
}
function CHo() {
  return yi().repoTierFreeze.differingTiers(gBt()).length === 0 ? "same" : "changed";
}
function fs(e) {
  let repoTierFreeze = yi().repoTierFreeze,
    r = ef.has(e) && repoTierFreeze.isHeld() && repoTierFreeze.baselineTier(e) !== void 0,
    s = !1,
    S = new Map(),
    E = new Map(),
    h = y => {
      try {
        return _o(se(), y).resolvedPath;
      } catch {
        return y;
      }
    };
  return {
    before: (y, P, A) => {
      let O = r ? repoTierFreeze.baselineTier(e) : void 0;
      if (O === void 0) return;
      let C = Ze(),
        v = e === "localSettings" ? rde(C) : void 0,
        M = v === void 0 ? void 0 : OW(v, new LGe());
      if (v !== void 0 && M !== void 0) S.set(v, M), E.set(v, h(v));
      let w = x2(e, C);
      if (w !== A) {
        s = !0;
        return;
      }
      let K = w === void 0 ? void 0 : OW(w, new LGe());
      if (w !== void 0 && K !== void 0) S.set(w, K), E.set(w, h(w));
      let Z = y === null ? null : Ow(_(y), x2(e, C) ?? ""),
        B = Z?.settings ?? null,
        U = M?.settings ? CW(bc(M.settings), B ?? {}, b5) : B,
        V = [...(Z?.errors ?? []), ...(M?.errors ?? [])],
        J = q => {
          let ee = q && pt(_(q), !1);
          return typeof ee === "object" ? Rjt(ee) : ee;
        },
        te = repoTierFreeze.differingTiers(gBt(S)).includes(e),
        re = q => q.filter(item => item.file === v || (P || item.preserveOnWrite) && !("alias" in item));
      s = te || !Nn(J(U), J(O.unfiltered)) || !Nn(re(V), re(O.errors)) || !Nn(J(K?.settings ?? null), J(B));
    },
    noteRead: ({
      path: path_6,
      content: content
    }) => {
      let A = S.get(path_6),
        O = Ow(content, path_6);
      if (r && (A === void 0 || !Nn(Rjt(O.settings), Rjt(A.settings)) || !Nn(O.errors, A.errors))) s = !0;
    },
    after: ({
      path: path_7,
      content: content_2
    }) => {
      let A = Ow(content_2, path_7),
        O = E.get(path_7);
      S.set(path_7, A);
      for (let C of S.keys()) if (C !== path_7 && O !== void 0 && E.get(C) === O) S.set(C, A);
      if (r && !s && repoTierFreeze.isHeld()) {
        repoTierFreeze.rebaseline(gBt(S), [e]);
        try {
          Xe?.(path_7, content_2);
        } catch (error) {
          l(H(error));
        }
      }
    }
  };
}
function RHo(e) {
  let n = yi();
  if (!n.repoTierFreeze.isHeld()) return e();
  try {
    return n.repoTierFreeze.whileLive(e);
  } finally {
    n.invalidateAll();
  }
}
function i_t() {
  return yi().repoTierFreeze.isHeld();
}
function NQe(e) {
  return yi().repoTierFreeze.tier(e) !== void 0;
}
function wai() {
  let e = D();
  if (!N(e.flagInline)) return !1;
  if (!Qe(e.flagInline)) return !1;
  return B_t(e).settings === null;
}
function AHo(e) {
  let n = D();
  if (!N(n.flagInline) || !(e in n.flagInline)) return !1;
  return B_t(n).settings === null;
}
function eTe() {
  return lBo(D());
}
function xHo() {
  return sF(D());
}
function Aun() {
  return dUr(D());
}
function PHo() {
  return nI(D()).shadowedHelperSources;
}
function Qe(e) {
  if (!N(e)) return !1;
  let attribution = e.attribution;
  return "includeCoAuthoredBy" in e || attribution === !1 || N(attribution) && ("commitTrailers" in attribution || "commit" in attribution || "pr" in attribution);
}
function vai() {
  let e = D(),
    n = x2("flagSettings", e);
  if (!n) return !1;
  if (OW(n, e.store, e.flagExpectedContent).settings !== null) return !1;
  if (e.flagExpectedContent !== void 0) {
    let r = pt(e.flagExpectedContent, !1);
    if (!N(r)) return !0;
    return Qe(r);
  }
  return Lt(n);
}
function Lt(e, n = !1) {
  let r;
  try {
    let s = n || Yx(e) ? _o(se(), e) : JB(se(), e);
    r = pt(g$(s.resolvedPath, bf), !1);
  } catch (error) {
    if (G(error)) return !1;
    return !0;
  }
  if (!N(r)) return !0;
  return Qe(r);
}
function kai(e, n) {
  let r = D(),
    s = y => y.settings === null && y.errors.some(item => item.severity !== "warning");
  if (e === "flagSettings" && r.flagInline && n in r.flagInline) {
    let y = B_t(r);
    if (s(y)) return r.flagInline[n];
    if (y.settings?.[n] !== void 0) return;
  }
  let S = x2(e, r);
  if (!S) return;
  let E = e === "flagSettings" ? r.flagExpectedContent : void 0;
  if (!s(OW(S, r.store, E))) return;
  let h;
  try {
    if (E !== void 0) h = pt(E, !1);else {
      let {
        resolvedPath: resolvedPath
      } = _o(se(), S);
      h = pt(g$(resolvedPath, bf), !1);
    }
  } catch {
    return;
  }
  if (!N(h) || !(n in h)) return;
  return h[n];
}
async function Eai(e, n) {
  let r = D(),
    s = x2(e, r);
  if (!s) return !1;
  let S = OW(s, r.store);
  if (S.settings !== null) return !1;
  if (S.errors.length === 0) return !1;
  if (W() && n !== void 0 && qe(e, s)) {
    let E;
    try {
      E = await Dt(n);
    } catch {
      return !0;
    }
    switch (E.kind) {
      case "absent":
        return !1;
      case "object":
        return Qe(E.raw);
      default:
        return !0;
    }
  }
  return Lt(s, e === "userSettings");
}
function qe(e, n) {
  return e === "userSettings" && vt(n) === eE.default;
}
async function Dt(e) {
  let n = await e.read([Be.userSettings()]);
  if (!n.ok) return {
    kind: "unreadable",
    code: n.error.code
  };
  let r = n.value.items[0];
  if (!r.found) return {
    kind: "absent"
  };
  if (r.totalBytes > bf) return {
    kind: "oversize"
  };
  let content_3 = Hne(r.value);
  if (!content_3.trim()) return {
    kind: "empty"
  };
  let raw_3 = pt(content_3, !1);
  if (!N(raw_3)) return {
    kind: "non-object"
  };
  return {
    kind: "object",
    raw: raw_3,
    content: content_3
  };
}
function Tai() {
  let e = D(),
    n = rde(e);
  if (!n) return !1;
  let r = OW(n, e.store);
  if (r.settings !== null) return !1;
  if (r.errors.length === 0) return !1;
  return Lt(n);
}
function jHr() {
  let e = D(),
    n = e.store.repoTierFreeze.tier("localSettings");
  if (n?.legacy !== void 0) return n.legacy;
  let r = rde(e);
  if (!r) return null;
  return OW(r, e.store).settings ?? null;
}
function Zp() {
  return Hpn(D());
}
function xun() {
  try {
    if (at()) return !0;
    let e = yi();
    return e.policy.machineMayPinSignInOrg ??= pBo(D()), e.policy.machineMayPinSignInOrg;
  } catch (error) {
    return t(`machineAdminMayPinSignInOrg: the machine policy read threw: ${d(error)}`, {
      level: "error"
    }), !0;
  }
}
function OHo() {
  try {
    return Yge()?.forceLoginOrgUUID !== void 0;
  } catch (error) {
    return t(`machineAdminPinsSignInOrg: the machine policy read threw: ${d(error)}`, {
      level: "error"
    }), !1;
  }
}
function Yge() {
  return w7e(D());
}
function q5n() {
  return w7e({
    ...D(),
    helper: void 0
  });
}
function hBt() {
  return gBo(D());
}
function WHr() {
  return mBo(D());
}
function IHo() {
  return nBo(D());
}
function n0e() {
  return rBo(D());
}
function MHo() {
  return r0e(oBo(D()));
}
function Gle() {
  return cUr(D());
}
function ize(e) {
  return hBo(D(), e);
}
function DHo() {
  return yi().lastPolicyEnvComposition;
}
function Vle() {
  return cBo(D());
}
function R7s() {
  return sBo(D());
}
function tTe() {
  return uBo(D());
}
function K5n() {
  return {
    slot: me("policySettings"),
    adminTiers: R7s()
  };
}
function LHo() {
  return aBo(D());
}
function NHo(e) {
  let n = K5n(),
    r = y7e(n);
  return {
    mcpLockFromLowerSource: r && n.slot?.allowManagedMcpServersOnly !== !0,
    mcpAllowlistFromLowerSource: r && n.slot?.allowedMcpServers === void 0 && H_t(n) !== void 0,
    mcpShadowedSourceCount: e.length,
    mcpShadowedKeyCount: e.reduce((acc, {
      keys: keys
    }) => acc + keys.length, 0)
  };
}
function ut() {
  return Bm().settings || {};
}
var nr = ut;
function zHr() {
  dr();
  let sources = [];
  for (let source_2 of Wo()) {
    let settings_6 = me(source_2);
    if (settings_6 && Object.keys(settings_6).length > 0) sources.push({
      source: source_2,
      settings: settings_6
    });
  }
  return {
    effective: ut(),
    sources: sources
  };
}
function SA(e) {
  let n = Wo();
  for (let r = n.length - 1; r >= 0; r--) {
    let s = n[r];
    if (me(s)?.[e] !== void 0) return s;
  }
  return null;
}
function Bm() {
  let e = yi(),
    mergedSettings = e.mergedSettings;
  if (mergedSettings !== null) return mergedSettings;
  yo("loadSettingsFromDisk_start");
  let r = pUr(D());
  return yo("loadSettingsFromDisk_end"), e.mergedSettings = r, r;
}
function FHo() {
  if (de()) return {
    hasBase: !1,
    hasDropIns: !1
  };
  for (let e of nde(NJ())) {
    let hasBase = Rze(I_(he(e, "managed-settings.json"), void 0, !0)),
      hasDropIns = !1;
    try {
      let s = he(e, "managed-settings.d"),
        S = h => Rze(I_(he(s, h), void 0, !0)),
        E = yi().primedFolderListing(s);
      if (E !== void 0) hasDropIns = E.some(S);else hasDropIns = se().readdirSync(s).some(item => {
        if (!(item.isFile() || item.isSymbolicLink()) || !kne(item.name)) return !1;
        return S(item.name);
      });
    } catch {}
    if (hasBase || hasDropIns) return {
      hasBase: hasBase,
      hasDropIns: hasDropIns
    };
  }
  return {
    hasBase: !1,
    hasDropIns: !1
  };
}
function VD() {
  let e = {
      ...D(),
      helper: void 0
    },
    {
      present: present,
      heldEmpty: heldEmpty
    } = nI(e);
  if (heldEmpty) return {};
  if (present.remote) return _5(e).settings;
  if (present.mdm) return ane().settings;
  if (present.file) return mBt().settings;
  let {
    settings: settings_7
  } = r1t(e);
  if (settings_7) return settings_7;
  let S = wun();
  return Object.keys(S.settings).length > 0 ? S.settings : null;
}
function TW() {
  let e = lUr({
    ...D(),
    helper: void 0
  });
  return e === "helper" ? null : e;
}
function Pun() {
  return dBo(D());
}
function eT() {
  let e = yi(),
    n = e.policy.origin;
  if (n !== void 0) return n.value;
  let value_3 = lUr(D());
  return e.policy.origin = {
    value: value_3
  }, value_3;
}
function Oun() {
  let e = yi(),
    remoteVerified = cm(),
    vouchedTiers = e.policy.vouchedTiers;
  if (vouchedTiers !== void 0 && vouchedTiers.remoteVerified === remoteVerified) return vouchedTiers.value;
  let value_4 = iBo(D(), remoteVerified);
  return e.policy.vouchedTiers = {
    remoteVerified: remoteVerified,
    value: value_4
  }, value_4;
}
function nTe() {
  let e = yi(),
    remoteVerified_2 = cm(),
    vouchedAdminTier = e.policy.vouchedAdminTier;
  if (vouchedAdminTier !== void 0 && vouchedAdminTier.remoteVerified === remoteVerified_2) return vouchedAdminTier.value;
  let value_5 = fBo(D(), remoteVerified_2);
  return e.policy.vouchedAdminTier = {
    remoteVerified: remoteVerified_2,
    value: value_5
  }, value_5;
}
function a_t() {
  let e = yi(),
    hostLoginPins = e.policy.hostLoginPins;
  if (hostLoginPins !== void 0) return hostLoginPins.value;
  let value_6 = JUo(D());
  return e.policy.hostLoginPins = {
    value: value_6
  }, value_6;
}
function HHo() {
  return QUo(D());
}
function $Ho() {
  return ZUo(D());
}
function rTe() {
  let e = yi(),
    slotAdminOrParentComposed = e.policy.slotAdminOrParentComposed;
  if (slotAdminOrParentComposed !== void 0) return slotAdminOrParentComposed;
  let r = eBo(D());
  return e.policy.slotAdminOrParentComposed = r, r;
}
function UHo() {
  let e = yi(),
    adminRetentionGoverned = e.policy.adminRetentionGoverned;
  if (adminRetentionGoverned !== void 0) return adminRetentionGoverned;
  let s = [_5(D()).settings, ane().settings, pTe(D()).settings].some(item => item?.cleanupPeriodDays !== void 0);
  return e.policy.adminRetentionGoverned = s, s;
}
function M_() {
  let e = yi(),
    loadErrors_2 = e.policy.loadErrors;
  if (loadErrors_2 !== void 0) return loadErrors_2;
  let r = [];
  return r.push(..._5(D()).errors), r.push(...vr()), r.push(...mBt().errors), r.push(...r1t(D()).errors), r.push(...wun().errors), e.policy.loadErrors = r, r;
}
function vr() {
  return nUr(ane(), () => _5(D()), mBt);
}
function cne() {
  return [...ane().errors, ...mBt().errors];
}
function Lr() {
  let e = yi(),
    adminLoadErrors = e.policy.adminLoadErrors;
  if (adminLoadErrors !== void 0) return adminLoadErrors;
  let r = [];
  return r.push(..._5(D()).errors), r.push(...vr()), r.push(...mBt().errors), e.policy.adminLoadErrors = r, r;
}
function Y5n() {
  return Lr().some(item => item.userWritable !== !0 && item.wslIgnored !== !0);
}
function BHo() {
  let e = yi(),
    machinePluginKeyLoadRecords = e.policy.machinePluginKeyLoadRecords;
  if (machinePluginKeyLoadRecords !== void 0) return machinePluginKeyLoadRecords;
  let r = cne().some(item => item.userWritable !== !0 && item.wslIgnored !== !0 && (item.severity !== "warning" || _s.includes(nt(nt(item.path, "."), "["))));
  return e.policy.machinePluginKeyLoadRecords = r, r;
}
var _s = ["", "enabledPlugins", "extraKnownMarketplaces", "strictKnownMarketplaces", "prependPlugins", "appendPlugins", "policyHelper", "policyHelpers", ...c7e.map(item => item.alias)];
function une() {
  return r0e(Lr());
}
function r0e(e) {
  return e.filter(item => item.severity !== "warning");
}
function X5n() {
  let e = yi(),
    adminSurvivor = e.policy.adminSurvivor;
  if (adminSurvivor !== void 0) return adminSurvivor;
  let r = D(),
    s = sF(r),
    S = ane(),
    E = s.composes === "tier" && !Cun() && !S.userWritable || A0e(_5(r)) || !S.userWritable && A0e(S);
  if (!E) {
    let h = mBt();
    E = h.heldOnly !== !0 && A0e(h);
  }
  return e.policy.adminSurvivor = E, E;
}
function J5n() {
  return !X5n() && une().length > 0;
}
var ms = new Set(["EACCES", "EPERM"]);
function yBt(e) {
  return e.errorClass === "unreadable" && e.errno !== void 0 && ms.has(e.errno);
}
function v2() {
  return !X5n() && une().some(item => !yBt(item));
}
function Ss() {
  try {
    let e = me("policySettings");
    return [...sUr(e), ...iUr(e)];
  } catch {
    return [];
  }
}
function jHo() {
  let e = M_(),
    n = [...z5n().filter(item => !T0e(item.path)), ...Ss()];
  if (e.length === 0 && n.length === 0) return;
  let fatal = e.some(item => item.severity !== "warning"),
    s = e.some(Dpn),
    S = [];
  if (e.length > 0) {
    let E = s ? "Managed settings failed to load; policies from the failed source are NOT in effect:" : fatal ? "Managed settings contain invalid entries, including PreToolUse/PermissionRequest hooks that are NOT loaded; fix or remove each entry:" : "Managed settings contain invalid entries (remaining valid policies are still enforced):";
    S.push(`${E}
${e.map(Ir).join(`
`)}`);
  }
  if (n.length > 0) S.push(`Managed settings notices:
${n.map(Ir).join(`
`)}`);
  if (process.stderr.write(`${S.join(`
`)}
`), e.length === 0) return;
  i("tengu_managed_settings_validation_errors", {
    error_count: e.length,
    remote_error_count: F(e, E => E.file === "remote managed settings"),
    fatal: fatal
  });
}
function Dr() {
  return M_(), [...yi().managedDocumentLinks.all(), ...(ane().managedDocumentLinks ?? [])];
}
function Iun() {
  return Dr().flatMap(item => {
    let n = vKs(item);
    return n === null ? [] : [n];
  });
}
function Es() {
  return M_(), yi().managedFileProtections.all();
}
function WHo() {
  let e = new Set(Es().map(([, r]) => r)),
    protection = n3s.find(item => e.has(item));
  if (protection === void 0) return;
  return {
    protection: protection,
    setsOrgPin: yi().managedFileProtections.setsOrgPin
  };
}
function zHo() {
  let e = Dr();
  if (e.length === 0) return;
  i("tengu_managed_settings_links", {
    inside_count: F(e, n => n.kind === "inside"),
    outside_count: F(e, n => n.kind === "outside"),
    unverified_count: F(e, n => n.kind === "unverified"),
    outside_writable_count: F(e, n => n.kind === "outside" && n.targetWritable === "yes"),
    outside_writable_unknown_count: F(e, n => n.kind === "outside" && n.targetWritable === "unknown")
  });
}
function Ir(e) {
  return `  ${e.file === void 0 ? "managed settings" : Hd(e.file)}${e.path ? ` (${e.path})` : ""}: ${e.message}`;
}
function In(e, n, r, s) {
  return ca(e, () => n, r, s);
}
function ca(e, n, r, s) {
  if (e === "policySettings" || e === "flagSettings") return Promise.resolve({
    error: null
  });
  let S = fn(e);
  if (!S) return Promise.resolve({
    error: ii() === null ? new f0() : null
  });
  return Ft.run(S, () => Rs(e, n, S, r, s));
}
var Ft = Qg();
function Mun(e, n) {
  return Ft.run(e, async () => {
    try {
      return await n();
    } finally {
      dr();
    }
  });
}
function aze() {
  return Ft.drain();
}
O0e(aze);
async function Fr(e, n, r) {
  try {
    await fR(e, n, r);
  } catch (error) {
    if (!(error instanceof Sg) || !(await hs(e))) throw error;
    t(`Writing settings through symlinked path ${e}`), await fR(e, n, {
      ...r,
      allowSymlink: !0,
      checkParentDir: !1
    });
  }
}
async function hs(e) {
  return !1;
}
function Hr(e, n) {
  let r = bc(e);
  return _he(r, n), eUr(r), r;
}
class ye extends Error {
  why;
  constructor(e, n) {
    super(n);
    this.why = e;
  }
}
function ys(e, n) {
  switch (e.kind) {
    case "object":
      {
        let r = Ow(e.content, n),
          raw_4 = r.settings === null || r.errors.some(item => item.preserveOnWrite);
        return {
          settings: raw_4 ? Hr(e.raw, n) : r.settings,
          raw: raw_4
        };
      }
    case "absent":
      return {
        settings: null,
        raw: !1
      };
    case "empty":
      return {
        settings: {},
        raw: !1
      };
    case "oversize":
      throw new ye("stored_oversize", "Your saved settings are too large to read, so this change was not saved");
    case "non-object":
      throw new ye("stored_not_object", "Your saved settings are damaged, so this change was not saved");
    case "unreadable":
      throw new ye("stored_unreadable", "Your saved settings could not be read, so this change was not saved");
  }
}
async function Rs(e, n, path_8, s, S) {
  let E = W() && S !== void 0 && qe(e, path_8);
  if (de() && !E) return OB("settings", path_8), {
    error: Error("This session does not write settings to disk")
  };
  let h = s?.legacyRevocation === "skip",
    error_8 = null,
    P;
  using A = {
    [Symbol.dispose]: () => P?.()
  };
  let O = E && de() ? S : void 0;
  try {
    let C = fs(e),
      v = !1,
      M = O ? null : $pn(e, D(), {
        includeLegacyLocalSettings: !1
      }),
      w = M !== null && OW(path_8, D().store).errors.some(item => item.preserveOnWrite);
    if (w) M = null;
    if (!M && !O) {
      let U = null;
      try {
        let V = e === "userSettings" || Yx(path_8) ? _o(se(), path_8) : await KW(se(), path_8);
        U = (await _y(V.resolvedPath, bf)).content;
      } catch (error) {
        if (!G(error)) throw error;
      }
      if (U !== null && U.trim() !== "") {
        let V = pt(U, !1);
        if (V === null) return t(`updateSettingsForSource: invalid JSON in settings file at ${path_8}`, {
          level: "error"
        }), {
          error: Error(`Invalid JSON syntax in settings file at ${path_8}`)
        };
        if (V && typeof V === "object") M = Hr(V, path_8), v = !0, t(w ? `Using raw settings from ${path_8} so entries this build does not recognize survive the write` : `Using raw settings from ${path_8} due to validation failure`);
      }
    }
    if (O) {
      let U = ys(await Dt(O), path_8);
      M = U.settings, v = U.raw;
    }
    C.before(M ?? null, v, path_8);
    let K = n(M ?? null);
    if (K === null) {
      if (e === "localSettings" && !h) {
        let U = await br(n, C);
        if (U.error) return {
          error: U.error
        };
        if (U.changed) {
          if (W() && S !== void 0) P = await Cr(S, path_8);
          try {
            Bm();
          } catch (error) {
            l(error);
          }
          Nr(e);
        }
      }
      return {
        error: null
      };
    }
    if (!de()) await se().mkdir(ge(path_8));
    let Z = CW(M || {}, K, (U, V, J, te) => {
        if (V === void 0 && te && typeof J === "string") {
          delete te[J];
          return;
        }
        if (Array.isArray(V)) return V;
        if (J === "extraKnownMarketplaces" && N(U) && N(V)) return s1t(U, V);
        return;
      }),
      content_4 = _(Z, null, 2) + `
`;
    if (O && Buffer.byteLength(content_4) > bf) throw new ye("result_oversize", "Your saved settings would be too large after this change, so the change was not saved");
    if (Zyt(path_8), E) {
      let U = await S.write(Be.userSettings(), content_4, {
        publishDiscipline: "followAtomic"
      });
      if (!U.ok) throw new x(`settings storageV5 write failed: ${U.error.code}${"failureClass" in U.error ? ` (${U.error.failureClass})` : ""}`, "settings storageV5 write failed");
    } else {
      let U = dre(ge(path_8));
      await Fr(path_8, content_4, {
        encoding: "utf-8",
        allowSymlink: e === "userSettings" || U,
        checkParentDir: (e === "projectSettings" || e === "localSettings") && !U,
        stagingDir: he(ge(path_8), VB)
      });
    }
    if (C.after({
      path: path_8,
      content: content_4
    }), dr(), E) P = Ps(path_8, content_4);
    if (e === "localSettings" && !h) {
      let U = await br(n, C);
      if (U.error && U.phase !== void 0 && !kr(K)) t(`localSettings: legacy settings.local.json could not be evaluated (${U.phase} failure) but this write contains no removals \u2014 canonical write succeeded, ignoring: ${U.error.message}`, {
        level: "warn"
      });else error_8 = U.error;
    }
    if (e === "localSettings") {
      let U = IHr(QM("localSettings"), so() ?? ke()).then(J => {
          if (!J.written) return;
          if (J.effective) g("gitignore_global_rule");else if (J.reason === "already_tracked") p("gitignore_global_rule", J.reason);else m("gitignore_global_rule", J.reason ?? "write_ineffective");
        }).catch(() => {
          return;
        }),
        V = yi();
      V.backgroundWorkTail = Promise.all([V.backgroundWorkTail, U]).then(() => {
        return;
      });
    }
    if (O && v) p("ccs_user_settings_write", "merged_into_raw_record");else if (O) g("ccs_user_settings_write");
  } catch (C) {
    if (O) m("ccs_user_settings_write", C instanceof ye ? C.why : "failed");
    if (C instanceof ye) return t(`updateSettingsForSource: refused (${C.why}): ${C.message}`, {
      level: "error"
    }), {
      error: C
    };
    let error_7 = Error(`Failed to read raw settings from ${path_8}: ${C}`, {
      cause: C
    });
    return t(error_7.message, {
      level: "error"
    }), {
      error: error_7
    };
  }
  if (W() && S !== void 0 && !E) P = await Cr(S, path_8);
  try {
    Bm();
  } catch (error) {
    l(error);
  }
  return Nr(e), {
    error: error_8
  };
}
async function Cr(e, n) {
  let r = fn("userSettings");
  if (r === void 0 || r === n || !qe("userSettings", r)) return;
  return UHr(e, yi(), r);
}
function Ps(e, n) {
  if (Buffer.byteLength(n) > bf) return;
  let r;
  try {
    r = Ow(n, e);
  } catch (error) {
    t(`updateSettingsForSource: written settings not seeded: ${d(error)}`);
    return;
  }
  let s = yi();
  return s.seedParsedFile(e, "userSettings", r, s.epoch), s.retainLayer(e, r);
}
function kr(e) {
  if (e === void 0 || Array.isArray(e)) return !0;
  if (e === null || typeof e !== "object") return !1;
  return Object.values(e).some(kr);
}
function Nr(e) {
  try {
    yi().changed.emit(e);
  } catch (error) {
    for (let r of error instanceof AggregateError ? error.errors : [error]) l(r);
  }
}
async function br(e, n) {
  let path_9 = rde(D());
  if (!path_9) return {
    changed: !1,
    error: null
  };
  let content_5;
  try {
    let O = Yx(path_9) ? _o(se(), path_9) : await KW(se(), path_9);
    content_5 = (await _y(O.resolvedPath, bf)).content;
  } catch (O) {
    if (G(O)) return {
      changed: !1,
      error: null
    };
    let error_9 = new x(`Failed to read legacy settings.local.json at ${path_9}: ${O}`, "Failed to read legacy settings.local.json");
    return t(error_9.message, {
      level: "error"
    }), {
      changed: !1,
      error: error_9,
      phase: "read"
    };
  }
  n.noteRead({
    path: path_9,
    content: content_5
  });
  let S = pt(content_5, !1);
  if (!S || typeof S !== "object" || Array.isArray(S)) return {
    changed: !1,
    error: null
  };
  let E = bc(S);
  _he(E, path_9), eUr(E);
  let h = E,
    y;
  try {
    y = e(bc(h));
  } catch (O) {
    let error_10 = new x(`Transform failed against legacy settings.local.json at ${path_9} (malformed legacy content?): ${O}`, "Transform failed against legacy settings.local.json");
    return t(error_10.message, {
      level: "error"
    }), {
      changed: !1,
      error: error_10,
      phase: "transform"
    };
  }
  if (y === null) return {
    changed: !1,
    error: null
  };
  let P = CW(bc(h), y, (O, C, v, M) => {
      if (C === void 0 && M && typeof v === "string") {
        delete M[v];
        return;
      }
      if (Array.isArray(C)) return C;
      return;
    }),
    A = eqs(h, P);
  if (_(A) === _(h)) return {
    changed: !1,
    error: null
  };
  try {
    Zyt(path_9);
    let allowSymlink = dre(ge(path_9)),
      content_6 = _(A, null, 2) + `
`;
    return await Fr(path_9, content_6, {
      encoding: "utf-8",
      allowSymlink: allowSymlink,
      checkParentDir: !allowSymlink,
      stagingDir: he(ge(path_9), VB)
    }), n.after({
      path: path_9,
      content: content_6
    }), dr(), {
      changed: !0,
      error: null
    };
  } catch (O) {
    let error_11 = new x(`Failed to revoke from legacy settings.local.json at ${path_9}: ${O}`, "Failed to revoke from legacy settings.local.json");
    return t(error_11.message, {
      level: "error"
    }), {
      changed: !1,
      error: error_11
    };
  }
}
function eqs(e, n) {
  if (Array.isArray(e) && Array.isArray(n)) {
    let r = new Set(n.map(item => _(item)));
    return e.filter(item => r.has(_(item)));
  }
  if (N(e) && N(n)) {
    let r = {};
    for (let s of Object.keys(e)) {
      if (!(s in n) || n[s] === void 0) continue;
      r[s] = eqs(e[s], n[s]);
    }
    return r;
  }
  return e;
}
function GHo(e) {
  let n = iKs(e).parse(e),
    r = ["permissions", "sandbox", "hooks"],
    s = [],
    S = {
      permissions: new Set(Object.keys(oKs().shape)),
      sandbox: new Set(Object.keys(c8n().shape)),
      hooks: new Set(Xc)
    };
  for (let E of Object.keys(n)) if (r.includes(E) && n[E] && typeof n[E] === "object") {
    let h = n[E],
      y = S[E];
    if (y) {
      for (let P of Object.keys(h)) if (y.has(P)) s.push(`${E}.${P}`);
    }
  } else s.push(E);
  return s.sort();
}
function Dun(e) {
  if (!yi().pluginBaseLoaded) i("tengu_plugin_settings_premature_read", {
    key: c(e)
  });
  let {
    settings: settings_8
  } = Bm();
  return (settings_8 || {})[e];
}
function JO(e) {
  return Xge(e).map(item => item.value);
}
var A7s = ["policySettings", "flagSettings", "userSettings"];
function Xge(e) {
  let n = [];
  for (let source_3 of A7s) {
    let value_7 = me(source_3)?.[e];
    if (value_7 !== void 0) n.push({
      source: source_3,
      value: value_7
    });
  }
  return n;
}
function h4() {
  return !!(me("userSettings")?.skipDangerousModePermissionPrompt || me("localSettings")?.skipDangerousModePermissionPrompt || me("flagSettings")?.skipDangerousModePermissionPrompt || me("policySettings")?.skipDangerousModePermissionPrompt);
}
function FQe() {
  return !!(me("policySettings")?.skipDangerousModePermissionPrompt || me("userSettings")?.skipDangerousModePermissionPrompt);
}
function GHr() {
  return !!(me("userSettings")?.skipWorkflowUsageWarning || me("localSettings")?.skipWorkflowUsageWarning || me("flagSettings")?.skipWorkflowUsageWarning || me("policySettings")?.skipWorkflowUsageWarning);
}
function oTe() {
  return Wo().some(item => me(item)?.isolatePeerMachines === !0);
}
function Jge() {
  return Wo().some(item => me(item)?.disableClaudeAiConnectors === !0) || Vle().some(item => item.disableClaudeAiConnectors === !0);
}
function VHo() {
  return !0;
}
function Q5n(e) {
  return ![...Zp(), ...Vle(), me("policySettings"), me("flagSettings"), me("userSettings"), me("localSettings"), jHr()].some(item => item?.[e] === !1);
}
function Lun() {
  return Q5n("useAutoModeDuringPlan");
}
function l_t() {
  return JO("askUserQuestionTimeout")[0];
}
function Nun() {
  return JO("dialogExpiry")[0];
}
function d_t() {
  return JO("modelProposedGoals")[0] ?? "auto";
}
async function qHo(e) {
  let n = JO("modelProposedGoals")[0];
  if (n !== void 0) return n;
  if ((await dze("modelProposedGoals", e)) !== "absent") return "alwaysAsk";
  return "auto";
}
var pne = f(() => u({
    allow: T(o()).optional(),
    soft_deny: T(o()).optional(),
    hard_deny: T(o()).optional(),
    deny: T(o()).optional(),
    environment: T(o()).optional()
  })),
  lze = ["userSettings", "flagSettings", "policySettings"];
function Gx() {
  let e = pne(),
    n = yi();
  if (!n.autoModeUntrustedSourceWarned) for (let y of ["projectSettings", "localSettings"]) {
    if (y === "projectSettings" && Xy()) continue;
    let P = me(y)?.autoMode;
    if (P && e.safeParse(P).success) n.autoModeUntrustedSourceWarned = !0, t(`settings autoMode in ${y} ignored \u2014 only user/flag/managed settings may set classifier rules (projectSettings and localSettings are repo-controllable)`, {
      level: "warn"
    }), i("tengu_settings_auto_mode_rules_untrusted_source_ignored", {
      source: c(y)
    });
  }
  let allow = [],
    soft_deny = [],
    hard_deny = [],
    environment = [],
    h = !1;
  for (let y of lze) {
    let P = me(y);
    if (!P) continue;
    let A = e.safeParse(P.autoMode);
    if (A.success) {
      if (A.data.allow) allow.push(...A.data.allow);
      if (A.data.soft_deny) soft_deny.push(...A.data.soft_deny);
      if (A.data.hard_deny) hard_deny.push(...A.data.hard_deny);
      if (A.data.environment) environment.push(...A.data.environment);
    }
  }
  if (allow.length > 0 || soft_deny.length > 0 || hard_deny.length > 0 || environment.length > 0 || h) return {
    ...(allow.length > 0 && {
      allow: allow
    }),
    ...(soft_deny.length > 0 && {
      soft_deny: soft_deny
    }),
    ...(hard_deny.length > 0 && {
      hard_deny: hard_deny
    }),
    ...(environment.length > 0 && {
      environment: environment
    }),
    ...{}
  };
  return;
}
function KHo() {
  for (let e of lze) if (me(e)?.autoMode?.classifyAllShell === !0) return !0;
  return !1;
}
async function dze(e, n, r) {
  let s = D(),
    S = Lpn(s),
    E = !1,
    h = !1;
  for (let y of S) {
    if (y === "policySettings" && s.diskless) continue;
    let P = y !== "policySettings" && (r?.presenceSources === void 0 || r.presenceSources.includes(y));
    if (P && y === "flagSettings" && N(s.flagInline) && e in s.flagInline && e !== "attribution" && e !== "includeCoAuthoredBy") E = !0;
    if (y === "flagSettings" && s.flagExpectedContent !== void 0) {
      if (!s.flagExpectedContent.trim()) continue;
      let M = pt(s.flagExpectedContent, !1);
      if (M === null || typeof M !== "object" || Array.isArray(M)) h = !0;else if (P && e in M && e !== "attribution" && e !== "includeCoAuthoredBy") E = !0;
      continue;
    }
    let A = x2(y, s);
    if (!A) continue;
    if (W() && n !== void 0 && y === "projectSettings" && S.includes("userSettings") && Xy()) continue;
    let O = y === "localSettings" ? rde(s) : void 0,
      C = O ? [A, O] : [A],
      v = W() && n !== void 0 && qe(y, A);
    for (let M of C) {
      if (v) {
        let w = await Dt(n);
        switch (w.kind) {
          case "unreadable":
            t(`rawSettingsKeyPresence: v5 user-settings read failed: ${w.code}`), h = !0;
            break;
          case "oversize":
          case "non-object":
            h = !0;
            break;
          case "object":
            if (P && e in w.raw && !(e === "attribution" || e === "includeCoAuthoredBy")) E = !0;
            break;
          case "absent":
          case "empty":
            break;
        }
        continue;
      }
      try {
        let w = y === "policySettings" || y === "userSettings" || Yx(M) ? _o(se(), M) : JB(se(), M),
          K = g$(w.resolvedPath, bf);
        if (!K.trim()) continue;
        let Z = pt(K, !1);
        if (Z === null || typeof Z !== "object" || Array.isArray(Z)) h = !0;else if (P && e in Z && !(e === "attribution" || e === "includeCoAuthoredBy")) E = !0;
      } catch (error) {
        if (tUr(error, M), !G(error)) h = !0;
      }
    }
  }
  if (h) return "unknowable";
  return E ? "present" : "absent";
}
export { OB, w2, xHr, PHr, canonicalGitRoot as XO, Qk, yun, RVs, OHr, IHr, Wle, N5n, IB, qFo, AVs, KFo, YFo, _un, bun, Sun, Zyt, F5n, xVs, e_t, ane, H5n, t_t, wun, NJ, QEe, PVs, e0e, XFo, n_t, text as oze, JFo, vun, OVs, Vge, QFo, r_t, MHr, IVs, IQe, ZFo, eHo, zle, tHo, pBt, nHo, kun, $5n, rHo, U5n, o_t, oHo, sHo, iHo, MQe, B5n, aHo, DHr, qge, regExp_3 as Eun, j5n, MVs, Tun, DVs, LVs, ZEe, lHo, Wx, dHo, LHr, cHo, refreshed as NVs, fBt, FVs, uHo, HVs, NHr, W5n, $Vs, lne, UVs, BVs, jVs, Cun, FHr, WVs, zVs, GVs, HHr, VVs, qVs, KVs, YVs, XVs, JVs, z5n, QVs, $Hr, pHo, fHo, ZVs, G5n, mHo, gHo, UHr, v7s, I_, BHr, k7s, E7s, bai, hHo, fn, rk, t0e, wh, Xy, DQe, yHo, mBt, _Ho, LQe, Sai, me, Kge, bHo, SHo, wHo, zx, T7s, sze, C7s, vHo, Run, s_t, dne, gBt, kHo, V5n, EHo, THo, CHo, RHo, i_t, NQe, wai, AHo, eTe, xHo, Aun, PHo, vai, kai, Eai, Tai, jHr, Zp, xun, OHo, Yge, q5n, hBt, WHr, IHo, n0e, MHo, Gle, ize, DHo, Vle, R7s, tTe, K5n, LHo, NHo, ut, nr, zHr, SA, Bm, FHo, VD, TW, Pun, eT, Oun, nTe, a_t, HHo, $Ho, rTe, UHo, M_, cne, Y5n, BHo, une, r0e, X5n, J5n, yBt, v2, jHo, Iun, WHo, zHo, In, ca, Mun, aze, eqs, GHo, Dun, JO, A7s, Xge, h4, FQe, GHr, oTe, Jge, VHo, Q5n, Lun, l_t, Nun, d_t, qHo, pne, lze, Gx, KHo, dze };