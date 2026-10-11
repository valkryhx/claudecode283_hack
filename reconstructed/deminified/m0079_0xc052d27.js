// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Me } from "B:/~BUN/root/chunk-ekrhn4q1.js";
import { q, IC, j, we, hm, Fo, yu, $$, U$, YI, Hde, aT, PVr, Oxe, gjt } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { H } from "B:/~BUN/root/chunk-dkxhwhft.js";
import { y, c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { P, l, v, B } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Q, e5, nt } from "B:/~BUN/root/chunk-17wqwt36.js";
import { Rt, xn, nm, gQ } from "B:/~BUN/root/chunk-54p0h65d.js";
import { re } from "B:/~BUN/root/chunk-y04k89s2.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { G1, Mm, _mn, G, yFo, I1r, NUt, O1r, M1r, D1r, L1r, N1r, H1r, L6n, F1r, $1r, _Fo, jN, iUe, Jb, U1r, One, Mne, $I, MD, SFo, cft, SY, m8e, H6n, Bv, uft, q1r, Lne, Z1r, JE, pUe, _8e, QE, fUe, W6n, zUt, fft, OJ, vY, K6n, m2, LAe, NAe, hgn, Qq, mft, v8e, dh, ljr, Gye, ygn, mUe, Vye, GUt, cjr, Y6n, VUt, X6n, J6n, djr, X1, qye, UI, Kye, k8e, Z6n, eYn, ujr, pjr, fjr, mjr, Sgn, J1, gjr, nYn, hjr, yjr, _jr, BI, gft, gUe, hUe, qUt, Xye, hft, rYn, zN, Sjr, wjr, vjr, kjr, Ejr, Tjr, Cjr, Rjr, sYn, Ajr, vgn, xjr, yft, kY, iYn } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { Ae } from "B:/~BUN/root/chunk-5w2ecytn.js";
import { Gu, b, tm, jo, ce, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { zde } from "B:/~BUN/root/chunk-4p6z9qq1.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { N5n, an } from "B:/~BUN/root/chunk-zksmb712.js";
import { d, O } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { ct } from "B:/~BUN/root/chunk-tsjnk8ma.js";
import { oe } from "B:/~BUN/root/chunk-shgdrs47.js";
import { ND } from "B:/~BUN/root/chunk-2swveyqa.js";
import { sf, Hv } from "B:/~BUN/root/chunk-8hs4bwwk.js";
import { Fn, Lo, dj, JWr } from "B:/~BUN/root/chunk-339q6g5w.js";
import { K } from "B:/~BUN/root/chunk-5px6g0cn.js";
import { Ve } from "B:/~BUN/root/chunk-py7yqpgt.js";
import { Kt } from "B:/~BUN/root/chunk-9fcn5kmc.js";
import { dl, Ss, fs, _b } from "B:/~BUN/root/chunk-290k5gh5.js";
import { amn, lmn, J$t, xD, Hpt } from "B:/~BUN/root/chunk-7zje4z8c.js";
import { Ur } from "B:/~BUN/root/chunk-g2vddtj4.js";
import { Cy } from "B:/~BUN/root/chunk-sd4cj2qx.js";
import { smn, DBr } from "B:/~BUN/root/chunk-nr0fnbpc.js";
import { D_ } from "B:/~BUN/root/chunk-jyd3kywp.js";
import { r_e, tj, ug } from "B:/~BUN/root/chunk-t1t358ee.js";
import { Fm } from "B:/~BUN/root/chunk-dfh5rt4g.js";
import { nj } from "B:/~BUN/root/chunk-5xa13319.js";
import { o, ae, C, u, ut } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { Qr } from "B:/~BUN/root/chunk-0bx1tycm.js";
import { rre } from "B:/~BUN/root/chunk-tndjj29v.js";
import { U, L } from "B:/~BUN/root/chunk-z1enakv9.js";
import { X5n as code_5, y9e } from "B:/~BUN/root/chunk-mmkravm0.js";
class yt {
  drains = new Set();
  register(e) {
    this.drains.add(e);
  }
  async drainAll() {
    await Promise.all([...this.drains].map(item => item().catch(() => {})));
  }
}
var Pt = new yt();
function dAe(e) {
  Pt.register(e);
}
function LN() {
  return Pt.drainAll();
}
import { basename as Ji, dirname as ye, join as Pe, resolve as lr } from "path";
import { dirname as br } from "path";
function AD(e, {
  uncached = !1
} = {}) {
  return null;
}
var At = Rt(new Map(), e => e.clear());
function Ipt(e, {
  uncached: uncached_2 = !1
} = {}) {
  let r = uncached_2 ? void 0 : At.get(e);
  if (r !== void 0) return r;
  let s = nm(e);
  if (s === null) return;
  let g;
  try {
    g = J6n();
  } catch {
    return;
  }
  let S = xn(s) === g;
  return At.set(e, S), S;
}
var Ws = Rt(new Map(), e => e.clear());
function Lr(e, {
  uncached: uncached_3 = !1
} = {}) {
  return !1;
}
function I3n(e, {
  uncached: uncached_4 = !1
} = {}) {
  let r = e;
  for (;;) {
    let root = AD(r, {
      uncached: uncached_4
    });
    if (root === null) return null;
    let g = Lr(root, {
      uncached: uncached_4
    });
    if (g !== !1) return {
      root: root,
      readable: g === !0
    };
    let S = br(root);
    if (S === root) return null;
    r = S;
  }
}
function Ot(e, n, uncached_5) {
  let s = I3n(e, {
    uncached: uncached_5
  });
  if (s === null) return n();
  if (!s.readable) return null;
  switch (Ipt(s.root, {
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
  return Ot(e, () => Lo(e), !1);
}
function V0(e) {
  return Ot(e, () => dj(e), !0);
}
function L$t(e) {
  let n = I3n(e);
  return n !== null && Ipt(n.root) !== !0 ? n.root : Fn(e);
}
function QNo(e) {
  return L([canonicalGitRoot(e), Lo(e)].filter(item => item !== null));
}
import { appendFile as vr, mkdir as Hr, readFile as Dr, writeFile as Fr } from "fs/promises";
import { homedir as Tt } from "os";
import { dirname as Mr, isAbsolute as It, join as Ke } from "path";
async function O3n(e, cwd) {
  let {
    code: code
  } = await Ve("git", ["check-ignore", "--", e], {
    preserveOutputOnError: !1,
    cwd: cwd
  });
  return code === 0;
}
async function xr(cwd_2) {
  let {
    stdout: stdout,
    code: code_2
  } = await Ve("git", ["config", "--global", "--get", "core.excludesfile"], {
    preserveOutputOnError: !1,
    cwd: cwd_2
  });
  return kr(code_2 === 0 ? stdout : "");
}
function kr(e) {
  let n = e.trim();
  if (n) {
    if (n === "~" || n.startsWith("~/")) return Ke(Tt(), n.slice(2));
    if (It(n)) return n;
  }
  let XDG_CONFIG_HOME = a.XDG_CONFIG_HOME;
  if (XDG_CONFIG_HOME && It(XDG_CONFIG_HOME)) return Ke(XDG_CONFIG_HOME, "git", "ignore");
  return Ke(Tt(), ".config", "git", "ignore");
}
async function M3n(e, n = oe()) {
  try {
    if (!(await JWr(n))) return {
      written: !1,
      effective: !1
    };
    let r = e.replaceAll("\\", "/"),
      s = `**/${r}`,
      g = r.endsWith("/") ? `${r}sample-file.txt` : r;
    if (await O3n(g, n)) return {
      written: !1,
      effective: !0
    };
    let S = await xr(n),
      E = Mr(S);
    await Hr(E, {
      recursive: !0
    });
    try {
      if ((await Dr(S, {
        encoding: "utf-8"
      })).includes(s)) {
        let reason = (await Nt(g, n)) ? "already_tracked" : "excludesfile_not_read";
        return t(`[gitignore] '${s}' already present in ${S} but git check-ignore reports not-ignored \u2014 ${Ct(reason, g)}`, {
          level: "warn"
        }), {
          written: !1,
          effective: !1,
          reason: reason
        };
      }
      await vr(S, `
${s}
`);
    } catch (error) {
      if (v(error) === "ENOENT") await Fr(S, `${s}
`, "utf-8");else throw error;
    }
    if (!(await O3n(g, n))) {
      let reason_2 = (await Nt(g, n)) ? "already_tracked" : "excludesfile_not_read";
      return t(`[gitignore] wrote '${s}' to ${S} but git check-ignore still reports not-ignored \u2014 ${Ct(reason_2, g)}`, {
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
async function Nt(e, cwd_3) {
  let {
    code: code_3
  } = await Ve("git", ["ls-files", "--error-unmatch", "--", e], {
    preserveOutputOnError: !1,
    cwd: cwd_3
  });
  return code_3 === 0;
}
function Ct(e, n) {
  return e === "already_tracked" ? `'${n}' is tracked in the index; gitignore rules do not apply to tracked files` : "core.excludesfile may point elsewhere";
}
var jq = 78,
  Opt = 75,
  Gfn = 70;
var bt = ["BASE_API_URL", "TOKEN_URL", "CLAUDE_AI_ORIGIN", "API_KEY_URL", "ROLES_URL", "MCP_PROXY_URL"];
function $1() {
  return a.CLAUDE_CODE_REMOTE_TOOLS_PIN_STORED_LOGIN === !0;
}
function FUr() {
  return !0;
}
function ZNo() {
  return "CLAUDE_CODE_REMOTE_TOOLS_PIN_STORED_LOGIN";
}
function $Ur(e) {
  return `Error: serve helper stopped: ${e} does not resolve to this computer's stored claude.ai login on Anthropic's own service`;
}
function $r() {
  let e = N5n(),
    n = e.OAUTH_FILE_SUFFIX === "-local-oauth",
    r = URL.parse(a.ANTHROPIC_BASE_URL ?? ""),
    s = Cy() && (r === null || r.protocol === "https:"),
    g = n && nj(r?.hostname ?? "");
  if (!s && !g) return "base_url";
  try {
    let S = an();
    if (bt.some(item => S[item] !== e[item])) return "oauth_endpoint";
  } catch {
    return "oauth_endpoint";
  }
  if (n && bt.some(item => !nj(URL.parse(e[item])?.hostname ?? ""))) return "oauth_endpoint";
  return;
}
function UUr() {
  if (!$1()) return;
  let e = $r();
  if (e === void 0) return;
  try {
    process.stderr.write(`${$Ur(e)}
`);
  } finally {
    process.exit(jq);
  }
}
var N$t = 5000;
function I5e(e) {
  dl().internalWrites.set(e, Date.now());
}
function Vfn(e, n) {
  let internalWrites = dl().internalWrites,
    s = internalWrites.get(e);
  if (s !== void 0 && Date.now() - s < n) return internalWrites.delete(e), !0;
  return !1;
}
function eHo() {
  dl().internalWrites.clear();
}
import { join as X } from "path";
var Gr = Object.freeze({
    settings: {},
    errors: [],
    loadState: "absent"
  }),
  hkcu_2 = Object.freeze({
    settings: {},
    errors: []
  });
class Ft {
  mdm = null;
  hkcu = null;
  wslInherits = !1;
  loadPromise = null;
  startLoad(e) {
    if (this.loadPromise) return;
    this.loadPromise = (async () => {
      let n = Date.now(),
        s = await (DBr() ?? smn()),
        {
          mdm: mdm,
          hkcu: hkcu,
          wslInherits: wslInherits
        } = await Mt(s, e);
      this.replace(mdm, hkcu, wslInherits);
      let duration_ms = Date.now() - n;
      t(`MDM settings load completed in ${duration_ms}ms`);
      try {
        i("tengu_managed_settings_os_read", Zr(s, duration_ms));
      } catch {}
      if (Object.keys(mdm.settings).length > 0) {
        t(`MDM settings found: ${Object.keys(mdm.settings).join(", ")}`);
        try {
          K("info", "mdm_settings_loaded", {
            duration_ms: duration_ms,
            key_count: Object.keys(mdm.settings).length,
            error_count: mdm.errors.length
          });
        } catch {}
      }
    })();
  }
  replace(e, n, r) {
    this.mdm = e, this.hkcu = n, this.wslInherits = r;
  }
  reset() {
    this.mdm = null, this.hkcu = null, this.wslInherits = !1, this.loadPromise = null;
  }
}
var Lt = "@builtin",
  Wr = ["prependPlugins", "appendPlugins"];
function Kr(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
var Br = new q(() => new Ft());
function te() {
  return Br.of(j().host);
}
function Vr(e) {
  te().startLoad(e);
}
async function O5e() {
  let e = te();
  if (!e.loadPromise) Vr();
  await e.loadPromise;
}
function dY() {
  return te().mdm ?? Gr;
}
function L$e() {
  return te().hkcu ?? hkcu_2;
}
function m$() {
  return te().wslInherits;
}
function H$t(e, n, r) {
  te().replace(e, n, r);
}
async function qfn(e) {
  let n = await smn();
  return Mt(n, e);
}
function Be(e, file, {
  userWritable = !1
} = {}) {
  let s = ct(e, !1);
  if (!G(s)) return {
    settings: {},
    errors: [ygn(file, {
      userWritable: userWritable
    })],
    documentHasPolicyContent: !1,
    loadState: "didNotLoad"
  };
  let g = [],
    S = s;
  for (let path of userWritable ? hgn : []) {
    if (!(path in S)) continue;
    if (S = S === s ? {
      ...s
    } : S, delete S[path], !NAe(path)) g.push({
      file: file,
      path: path,
      message: `"${path}" is only honored from administrator-controlled managed settings and was ignored in ${file}, which the user account can write.`,
      severity: "warning",
      statusOnly: !0
    });
  }
  if (userWritable) {
    for (let path_2 of Wr) {
      if (!(path_2 in S)) continue;
      S = S === s ? {
        ...s
      } : S, delete S[path_2], g.push({
        file: file,
        path: path_2,
        message: `"${path_2}" is only honored from administrator-controlled managed settings and was ignored in ${file}, which the user account can write.`,
        severity: "warning",
        statusOnly: !0
      });
    }
    let enabledPlugins = S.enabledPlugins;
    if (Kr(enabledPlugins)) {
      if (Object.entries(enabledPlugins).filter(([N, D]) => N.endsWith(Lt) || D !== !1).length > 0) {
        S = S === s ? {
          ...s
        } : S;
        let N = Qr(enabledPlugins, (D, x) => !x.endsWith(Lt) && D === !1);
        if (Object.keys(N).length > 0) S.enabledPlugins = N;else delete S.enabledPlugins;
        g.push({
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
    } = LAe(S, file),
    w = [...g, ...errors];
  return {
    settings: settings ?? {},
    errors: userWritable ? w.map(item => ({
      ...(item.severity === "warning" && !item.startupFatal ? item : {
        ...jr(item),
        severity: "warning",
        statusOnly: !0
      }),
      userWritable: !0
    })) : w,
    documentHasPolicyContent: documentHasPolicyContent,
    loadState: loadState,
    ...(onlySubstitutes && {
      onlySubstitutes: onlySubstitutes
    })
  };
}
function jr({
  startupFatal: startupFatal,
  ...n
}) {
  return n;
}
function vt(file_2, n, r) {
  return {
    file: file_2,
    path: "",
    message: `Managed settings document (${file_2}) could not be read: ${n}; none of its settings are in effect.`,
    severity: r ? "warning" : "fatal",
    statusOnly: !0,
    errorClass: "unreadable",
    ...(r && {
      userWritable: !0
    })
  };
}
function Ht(e, n = "Settings") {
  let r = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
    regExp = new RegExp(`^[ \\t]+${r}[ \\t]+REG_(?:EXPAND_)?SZ[ \\t]+([\\s\\S]*)`, "im"),
    g = e.match(regExp)?.[1]?.trimEnd();
  return g ? g : null;
}
var zr = new Map([["ENOENT", y("ENOENT")], ["EACCES", y("EACCES")], ["EPERM", y("EPERM")], ["ENOEXEC", y("ENOEXEC")], ["EAGAIN", y("EAGAIN")], ["EMFILE", y("EMFILE")], ["ENOMEM", y("ENOMEM")], ["ETIMEDOUT", y("ETIMEDOUT")], ["ERR_CHILD_PROCESS_STDIO_MAXBUFFER", y("ERR_CHILD_PROCESS_STDIO_MAXBUFFER")]]),
  Yr = new Map([["SIGTERM", y("SIGTERM")], ["SIGKILL", y("SIGKILL")], ["SIGINT", y("SIGINT")]]);
function Jr(e) {
  if (!e) return;
  return zr.get(e) ?? y("other");
}
function Xr(e) {
  if (!e) return;
  return Yr.get(e) ?? y("other");
}
function Dt(e, n) {
  if (!n) return {};
  return {
    [`${e}_status`]: c(n.status),
    [`${e}_exit_code`]: n.exitCode ?? void 0,
    [`${e}_errno`]: Jr(n.errno),
    [`${e}_signal`]: Xr(n.signal),
    [`${e}_duration_ms`]: n.durationMs
  };
}
function Zr(e, await_ms) {
  return {
    is_wsl: Hpt(),
    await_ms: await_ms,
    ...Dt("hklm", e.outcomes.hklm),
    ...Dt("hkcu", e.outcomes.hkcu)
  };
}
async function Mt(e, n) {
  let errors_2 = [],
    s = !1,
    loadState_2 = "absent";
  for (let N of e.plistStdouts ?? []) {
    let {
      label: label,
      userWritable: userWritable_2
    } = N;
    if (userWritable_2 && s) continue;
    let V = N.stdout === null ? {
      settings: {},
      errors: [vt(label, N.unreadReason, userWritable_2)],
      documentHasPolicyContent: !1,
      loadState: "didNotLoad",
      ...(userWritable_2 && {
        userWritable: userWritable_2
      })
    } : {
      ...Be(N.stdout, label, {
        userWritable: userWritable_2
      }),
      ...(userWritable_2 && {
        userWritable: userWritable_2
      })
    };
    if (userWritable_2 ? gft(V.settings) : V.documentHasPolicyContent) return {
      mdm: {
        ...V,
        errors: [...errors_2, ...V.errors],
        documentHasPolicyContent: !0
      },
      hkcu: hkcu_2,
      wslInherits: !1
    };
    if (s ||= hft(V), errors_2.push(...V.errors), !userWritable_2) loadState_2 = Xye(loadState_2, V.loadState);
  }
  let S = `Registry: ${amn}\\${J$t}`,
    mdm_2 = null,
    h = "disarmed";
  if (e.hklmStdout !== null) {
    let N = Ht(e.hklmStdout) ?? "";
    mdm_2 = Be(N, S);
    let D = ct(N, !1);
    if (G(D)) h = U1r(D);
  } else if (e.hklmUnreadReason !== void 0) mdm_2 = {
    settings: {},
    errors: [vt(S, e.hklmUnreadReason, !1)],
    documentHasPolicyContent: !1,
    loadState: "didNotLoad"
  };
  let A = mdm_2 !== null && hft(mdm_2);
  if (mdm_2) errors_2.push(...mdm_2.errors), loadState_2 = Xye(loadState_2, mdm_2.loadState);
  let T = Hpt(),
    I = "disarmed",
    w = S;
  if (T) {
    if (I = h, I !== "armed") {
      let N = await eo(n);
      if (N.flag === "armed" || I === "disarmed") I = N.flag, w = N.unreadableFlagPath ?? xD;
      if (I === "disarmed") errors_2.push(...N.records), loadState_2 = Xye(loadState_2, N.loadState);
    }
  }
  let wslInherits_2 = I !== "disarmed",
    mdm_3 = {
      settings: {},
      errors: errors_2,
      loadState: loadState_2
    };
  if (T && !wslInherits_2) {
    let N = new Set(mdm_2?.errors.filter(D => D.severity === "warning"));
    return {
      mdm: {
        ...mdm_3,
        errors: mdm_3.errors.map(item => N.has(item) ? {
          ...item,
          wslIgnored: !0
        } : item)
      },
      hkcu: hkcu_2,
      wslInherits: !1
    };
  }
  if (mdm_2 && A) return {
    mdm: mdm_2,
    hkcu: hkcu_2,
    wslInherits: wslInherits_2
  };
  if (I === "unreadable") {
    let N = await ze(xD, n);
    return {
      mdm: {
        ...mdm_3,
        errors: N ? mdm_3.errors : [...mdm_3.errors, cjr(w)],
        documentHasPolicyContent: !0,
        loadState: Xye(mdm_3.loadState, "loaded")
      },
      hkcu: hkcu_2,
      wslInherits: wslInherits_2
    };
  }
  if (e.hkcuStdout !== null && !(await qr(wslInherits_2, n))) {
    let N = Be(Ht(e.hkcuStdout) ?? "", `Registry: ${lmn}\\${J$t}`, {
      userWritable: !0
    });
    if (!T || N.settings.wslInheritsWindowsSettings === !0) {
      let {
        wslInheritsWindowsSettings: wslInheritsWindowsSettings,
        managedSourcesBehavior: managedSourcesBehavior,
        ...settings_2
      } = N.settings;
      return {
        mdm: mdm_3,
        hkcu: {
          settings: settings_2,
          errors: N.errors
        },
        wslInherits: wslInherits_2
      };
    }
    if (N.errors.length > 0) return {
      mdm: mdm_3,
      hkcu: {
        settings: {},
        errors: N.errors
      },
      wslInherits: wslInherits_2
    };
  }
  return {
    mdm: mdm_3,
    hkcu: hkcu_2,
    wslInherits: wslInherits_2
  };
}
async function Re(e, n) {
  if (H() && n !== void 0) return (await ug(e, dh)).content;
  return tj(e, dh);
}
async function qr(e, n) {
  if (e && (await ze(xD, n))) return !0;
  return ze(QE(), n);
}
async function wt(e, n) {
  let r;
  try {
    r = await Re(e, n);
  } catch (error) {
    return !B(error);
  }
  try {
    let s = Gye(r, e, !0);
    return hft({
      ...s,
      loadState: qUt(s)
    });
  } catch {
    return !0;
  }
}
async function BUr(e) {
  if (!Hpt() || !te().wslInherits) return "";
  let n = [];
  try {
    n.push(await Re(X(xD, "managed-settings.json"), e));
  } catch (error) {
    n.push(je(error));
  }
  try {
    let r = X(xD, "managed-settings.d"),
      s = (await ce().readdir(r)).filter(item => (item.isFile() || item.isSymbolicLink()) && item.name.endsWith(".json") && !item.name.startsWith(".")).map(item => item.name).sort();
    for (let g of s) try {
      n.push(`${g}\x00${await Re(X(r, g), e)}`);
    } catch (error) {
      n.push(`${g}\x00${je(error)}`);
    }
  } catch (error) {
    let s = je(error);
    if (s !== "") n.push(s);
  }
  return n.join("\x01");
}
function je(e) {
  return Oe(e) ? "" : "\x00unreadable";
}
function Oe(e) {
  let n = v(e);
  return n === "ENOENT" || n === "ENOTDIR";
}
async function eo(e) {
  let records = [],
    loadState_3 = "absent";
  async function s(T) {
    let I;
    try {
      I = await Re(T, e);
    } catch (error) {
      if (!Oe(error)) records.push(GUt(T, error)), loadState_3 = "didNotLoad";
      return "disarmed";
    }
    if (I.trim() === "") return loadState_3 = Xye(loadState_3, "loaded"), "disarmed";
    let w = ct(I, !1);
    if (!G(w)) return records.push(ygn(T)), loadState_3 = "didNotLoad", "disarmed";
    return loadState_3 = Xye(loadState_3, "loaded"), U1r(w);
  }
  let g = X(xD, "managed-settings.json"),
    flag = await s(g);
  if (flag === "armed") return {
    flag: flag,
    records: records,
    loadState: loadState_3
  };
  let unreadableFlagPath = flag === "unreadable" ? g : void 0,
    h = X(xD, "managed-settings.d"),
    A;
  try {
    A = await ce().readdir(h);
  } catch (error) {
    if (!Oe(error)) records.push(GUt(h, error, "directory")), loadState_3 = "didNotLoad";
    return {
      flag: flag,
      unreadableFlagPath: unreadableFlagPath,
      records: records,
      loadState: loadState_3
    };
  }
  for (let T of A) {
    if (!(T.isFile() || T.isSymbolicLink()) || !T.name.endsWith(".json") || T.name.startsWith(".")) continue;
    let I = X(h, T.name),
      flag_2 = await s(I);
    if (flag_2 === "armed") return {
      flag: flag_2,
      records: records,
      loadState: loadState_3
    };
    if (flag_2 === "unreadable") flag = flag_2, unreadableFlagPath ??= I;
  }
  return {
    flag: flag,
    unreadableFlagPath: unreadableFlagPath,
    records: records,
    loadState: loadState_3
  };
}
async function ze(e, n) {
  if (await wt(X(e, "managed-settings.json"), n)) return !0;
  let r = X(e, "managed-settings.d"),
    s;
  try {
    s = await ce().readdir(r);
  } catch (error) {
    return !Oe(error);
  }
  for (let g of s) if ((g.isFile() || g.isSymbolicLink()) && vY(g.name) && (await wt(X(r, g.name), n))) return !0;
  return !1;
}
import { posix as Cn, win32 as bn } from "path";
import { win32 as $t } from "path";
var xt = ["-NoProfile", "-NonInteractive", "-ExecutionPolicy", "Bypass"],
  Gt = "C:\\Windows",
  Te = "C:\\Program Files",
  Ie = `${Gt}\\System32`,
  Ye = `${Ie}\\WindowsPowerShell\\v1.0`,
  to = `${Ie}\\cmd.exe`,
  no = [`${Te}\\PowerShell\\7\\pwsh.exe`, `${Te}\\PowerShell\\7-preview\\pwsh.exe`, `${Ye}\\powershell.exe`];
function ro() {
  if (O() !== "windows") return null;
  for (let e of no) {
    let n = gQ(e);
    if (n === null) {
      if (ce().existsSync(e)) return null;
      continue;
    }
    if (n.toLowerCase() === e.toLowerCase()) return e;
  }
  return null;
}
var error_2 = "PowerShell not found at any of its stock install locations on C: (fixed absolute candidates only; PATH is never consulted)",
  Xe = "CLAUDE_CODE_POLICY_HELPER_PSMODULEPATH",
  Ze = "CLAUDE_CODE_POLICY_HELPER_PS1_PATH",
  io = `$env:PSModulePath = $env:${Xe}; `,
  so = "if ($ExecutionContext.SessionState.LanguageMode -eq 'FullLanguage') { try { [Console]::OutputEncoding = [System.Text.UTF8Encoding]::new() } catch {} }; ";
function Wt(e) {
  return `${io}${so}$LASTEXITCODE = 0; try { ${e} } catch { Write-Error $_; exit 1 }; exit $LASTEXITCODE`;
}
var ao = Wt(`& ($env:${Ze})`),
  lo = Wt("Invoke-Expression (@($input) -join [char]10)");
function co(e) {
  return L([`${e}\\Modules`, `${Te}\\PowerShell\\Modules`, `${Te}\\WindowsPowerShell\\Modules`, `${Ye}\\Modules`]).join(";");
}
function uo(e) {
  return L([e, Ie, Gt, `${Ie}\\Wbem`, Ye]).join(";");
}
var po = ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC",
  go = ["DOTNET_", "COMPLUS_", "COR_", "CORECLR_", "APPDOMAIN_MANAGER_"],
  fo = new Set(["DEVPATH", "__PSLOCKDOWNPOLICY", "PSMODULEANALYSISCACHEPATH", "PSMODULEPATH", "PATH", "PATHEXT", "COMSPEC", "TERM", Xe, Ze]),
  _o = ["LD_", "DYLD_", "BASH_FUNC_", "__BASH_FUNC<", "LC_"],
  mo = new Set(["ENV", "BASH_ENV", "SHELLOPTS", "PS4", "GCONV_PATH", "IFS", "PWD", "CDPATH", "OLDPWD", "TMOUT", "POSIXLY_CORRECT", "BASHOPTS", "BASH_COMPAT", "EXECIGNORE", "BASH_SOURCE_PATH", "BASH_LOADABLES_PATH", "GLOBIGNORE", "GLOBSORT", "LOCPATH", "PATH_LOCALE", "NLSPATH", "LANG", "TMPDIR", "TMP", "TEMP"]),
  So = "/usr/bin:/bin:/usr/sbin:/sbin";
function Ut(e, n, r, s) {
  for (let g of Object.keys(e)) {
    let S = s(g);
    if (n.has(S) || r.some(item => S.startsWith(item))) delete e[g];
  }
}
function Bt(e, n) {
  let r = {
    ...e
  };
  switch (n.routedInterpreter) {
    case void 0:
      return r;
    case "sh":
      return Ut(r, mo, _o, s => s), r.PATH = So, r.LC_ALL = "C", r;
    case "pwsh":
      {
        Ut(r, fo, go, g => g.toUpperCase());
        let s = $t.dirname(n.file);
        if (r.PSModulePath = co(s), r[Xe] = r.PSModulePath, r.PATH = uo(s), r.PATHEXT = po, r.COMSPEC = to, r.TERM = "dumb", n.ps1Path !== void 0) r[Ze] = n.ps1Path;
        return r;
      }
  }
}
function Vt(e) {
  return O() === "windows" ? $t.dirname(e.file) : "/";
}
function jt(e) {
  if (e.script != null) {
    if (e.interpreter === "sh") return {
      plan: {
        file: "/bin/sh",
        args: ["-s"],
        input: e.script,
        routedInterpreter: "sh"
      }
    };
    return kt({
      args: [...xt, "-Command", lo],
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
  if (O() !== "windows" || !L1r(n)) return {
    plan: {
      file: n,
      args: []
    }
  };
  return kt({
    args: [...xt, "-Command", ao],
    ps1Path: n
  });
}
function kt(e) {
  let file_3 = ro();
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
async function zt(e, n, r) {
  if (e.routedInterpreter !== void 0) return null;
  let s;
  try {
    s = await nt(Eo(e.file, r), n);
  } catch (error) {
    return `cannot stat path (${v(error) ?? "unknown error"}): ${e.file}`;
  }
  if (s === void 0) return Qe(e.file, n);
  return s.isFile() ? null : `path is not a regular file: ${e.file}`;
}
function Eo(e, n) {
  let r = n.get(e);
  if (r === void 0) {
    r = ce().stat(e), n.set(e, r);
    let s = () => n.delete(e);
    r.then(s, s);
  }
  return r;
}
function Qe(e, n) {
  return `cannot stat path (timed out after ${n} ms): ${e}`;
}
var ho = ["ANTHROPIC_API_KEY", "CLAUDE_CODE_OAUTH_TOKEN", "CLAUDE_CODE_ARTIFACTS_API_TOKEN", "CLAUDE_CODE_MEMORY_API_TOKEN", "CLAUDE_CODE_SLACK_TAG_TOKEN", "ANTHROPIC_AUTH_TOKEN", "ANTHROPIC_FOUNDRY_API_KEY", "ANTHROPIC_FOUNDRY_AUTH_TOKEN", "ANTHROPIC_AWS_API_KEY", "ANTHROPIC_CUSTOM_HEADERS", "AWS_SECRET_ACCESS_KEY", "AWS_SESSION_TOKEN", "AWS_BEARER_TOKEN_BEDROCK", "GOOGLE_APPLICATION_CREDENTIALS", "GOOGLE_GHA_CREDS_PATH", "AZURE_CLIENT_SECRET", "IDENTITY_HEADER", "MSI_SECRET", "AZURE_CLIENT_CERTIFICATE_PATH", "AZURE_CLIENT_CERTIFICATE_PASSWORD", "AZURE_PASSWORD", "AZURE_FEDERATED_TOKEN_FILE", "AWS_WEB_IDENTITY_TOKEN_FILE", "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI", "AWS_CONTAINER_CREDENTIALS_FULL_URI", "AWS_CONTAINER_AUTHORIZATION_TOKEN", "AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE", "CLOUDSDK_AUTH_ACCESS_TOKEN", "GOOGLE_OAUTH_ACCESS_TOKEN", "CLAUDE_CODE_OAUTH_REFRESH_TOKEN", "HF_TOKEN", "HUGGING_FACE_HUB_TOKEN", "HUGGINGFACEHUB_API_TOKEN", "NODE_AUTH_TOKEN", "NUGET_AUTH_TOKEN", "CARGO_REGISTRY_TOKEN", "TWINE_PASSWORD", "TWINE_USERNAME", "PYPI_TOKEN", "PYPI_API_TOKEN", "UV_PUBLISH_TOKEN", "UV_PUBLISH_PASSWORD", "UV_PUBLISH_USERNAME", "FLIT_PASSWORD", "FLIT_USERNAME", "HATCH_INDEX_AUTH", "HATCH_INDEX_USER", "GEM_HOST_API_KEY", "MATURIN_PYPI_TOKEN", "MATURIN_PASSWORD", "MATURIN_USERNAME", "CONAN_LOGIN_USERNAME", "CONAN_PASSWORD", "ANACONDA_API_TOKEN", "BINSTAR_API_TOKEN", "VAULT_TOKEN", "VAULT_AUTH_TOKEN", "VAULT_ROLE_ID", "VAULT_SECRET_ID", "CONSUL_HTTP_TOKEN", "CONSUL_HTTP_AUTH", "NOMAD_TOKEN", "NOMAD_HTTP_AUTH", "CI_REGISTRY_USER", "CI_DEPLOY_USER", "JF_USER", "FASTLANE_SESSION", "MATCH_GIT_BASIC_AUTHORIZATION", "SONAR_TOKEN", "SONARQUBE_SCANNER_PARAMS", "SONAR_SCANNER_JSON_PARAMS", "SLACK_WEBHOOK_URL", "SLACK_WEBHOOK", "DISCORD_WEBHOOK", "DISCORD_WEBHOOK_URL", "TEAMS_WEBHOOK_URL", "MS_TEAMS_WEBHOOK_URI", "ANTHROPIC_IDENTITY_TOKEN", "ANTHROPIC_IDENTITY_TOKEN_FILE", "CLOUDSDK_AUTH_ACCESS_TOKEN_FILE", "CLOUDSDK_AUTH_AUTHORIZATION_TOKEN_FILE", "AZURE_AUTH_LOCATION", "ACTIONS_ID_TOKEN_REQUEST_TOKEN", "ACTIONS_ID_TOKEN_REQUEST_URL", "ACTIONS_RUNTIME_TOKEN", "ACTIONS_RUNTIME_URL", "ALL_INPUTS", "VSS_NUGET_EXTERNAL_FEED_ENDPOINTS", "ARTIFACTS_CREDENTIALPROVIDER_EXTERNAL_FEED_ENDPOINTS", "VSS_NUGET_ACCESSTOKEN", "ARTIFACTS_CREDENTIALPROVIDER_ACCESSTOKEN", "COMPOSER_AUTH", "OVERRIDE_GITHUB_TOKEN", "DEFAULT_WORKFLOW_TOKEN", "SSH_SIGNING_KEY"],
  yo = ["AWS_SHARED_CREDENTIALS_FILE", "AWS_CONFIG_FILE", "CLOUDSDK_CONFIG", "AZURE_CONFIG_DIR", "KUBECONFIG", "NETRC", "PGPASSFILE", "PGSERVICEFILE", "DOCKER_CONFIG", "GH_CONFIG_DIR", "GNUPGHOME", "NPM_CONFIG_USERCONFIG", "NPM_CONFIG_GLOBALCONFIG", "SSH_AUTH_SOCK", "GIT_SSH_COMMAND", "GIT_SSH", "GIT_ASKPASS", "SSH_ASKPASS", "SSH_AGENT_PID", "TF_CLI_CONFIG_FILE", "WGETRC", "PIP_CONFIG_FILE", "UV_CONFIG_FILE", "RCLONE_CONFIG", "BOTO_CONFIG", "BOTO_PATH", "S3CMD_CONFIG", "SOPS_AGE_KEY_FILE", "ANSIBLE_VAULT_PASSWORD_FILE", "ANSIBLE_VAULT_IDENTITY_LIST", "ANSIBLE_CONFIG", "GOAUTH", "SBT_CREDENTIALS", "COURSIER_CREDENTIALS", "CONSUL_HTTP_TOKEN_FILE", "SYSTEM_WGETRC", "CLOUDSDK_ROOT_DIR", "M2_HOME", "MAVEN_HOME", "LEIN_HOME", "SSLKEYLOGFILE", "GIT_CONFIG_GLOBAL", "GIT_CONFIG_SYSTEM", "XDG_CONFIG_HOME", "XDG_CONFIG_DIRS", "XDG_CACHE_HOME", "XDG_DATA_HOME", "XDG_STATE_HOME", "XDG_RUNTIME_DIR", "HELM_REGISTRY_CONFIG", "HELM_REPOSITORY_CONFIG", "HELM_CONFIG_HOME", "REGISTRY_AUTH_FILE", "DOCKER_CERT_PATH", "SSL_CLIENT_CERT", "GIT_SSL_CERT", "GIT_SSL_KEY", "PIP_CLIENT_CERT", "PGSSLKEY", "VAULT_CLIENT_KEY", "VAULT_CLIENT_CERT", "CONSUL_CLIENT_KEY", "CONSUL_CLIENT_CERT", "NOMAD_CLIENT_KEY", "NOMAD_CLIENT_CERT", "PGSSLCERT", "PGSYSCONFDIR", "CURL_HOME", "CARGO_HOME", "COMPOSER_HOME", "GRADLE_USER_HOME", "BUNDLE_CONFIG", "BUNDLE_USER_CONFIG", "BUNDLE_USER_HOME", "BUNDLE_APP_CONFIG", "POETRY_CONFIG_DIR", "COURSIER_CONFIG_DIR", "HEX_HOME", "HF_HOME", "HF_TOKEN_PATH", "HF_STORED_TOKENS_PATH", "CONDARC", "BUN_CONFIG_FILE", "GOENV", "NPM_CONFIG_PREFIX", "CLOUDSDK_AUTH_CREDENTIAL_FILE_OVERRIDE", "CLAUDE_CONFIG_DIR", "ANTHROPIC_CONFIG_DIR", "ANTHROPIC_PROFILE", "CLAUDE_CODE_FEDERATION_CACHE_DIR", "CLAUDE_SECURESTORAGE_CONFIG_DIR"],
  en = ["PIP_INDEX_URL", "PIP_EXTRA_INDEX_URL", "PIP_FIND_LINKS", "UV_INDEX_URL", "UV_EXTRA_INDEX_URL", "UV_DEFAULT_INDEX", "UV_INDEX", "UV_FIND_LINKS", "UV_PUBLISH_URL", "TWINE_REPOSITORY_URL", "FLIT_INDEX_URL", "HATCH_INDEX_REPO", "NPM_CONFIG_REGISTRY", "YARN_REGISTRY", "YARN_NPM_REGISTRY_SERVER", "YARN_NPM_PUBLISH_REGISTRY", "COREPACK_NPM_REGISTRY", "BUN_CONFIG_REGISTRY", "GOPROXY"],
  Po = new Set(en),
  Ro = /^(?:CARGO_REGISTRIES_[A-Z0-9_]+_INDEX|POETRY_REPOSITORIES_[A-Z0-9_]+_URL|NPM_CONFIG_@[^:]+:REGISTRY)$/i;
function M5e(e) {
  let n = e.toUpperCase().replace(/-/g, "_").replace(/^INPUT_/, "");
  return Po.has(n) || Ro.test(n);
}
function tn(e) {
  return nn[e.toUpperCase().replace(/-/g, "_").replace(/^INPUT_/, "")];
}
var nn = {
    PIP_EXTRA_INDEX_URL: "PIP_INDEX_URL",
    PIP_FIND_LINKS: "PIP_INDEX_URL",
    UV_EXTRA_INDEX_URL: "UV_DEFAULT_INDEX",
    UV_INDEX: "UV_DEFAULT_INDEX",
    UV_FIND_LINKS: "UV_DEFAULT_INDEX"
  },
  text = "http://index.invalid/",
  rn = {
    UV_DEFAULT_INDEX: ["UV_INDEX_URL"]
  };
function jUr(e, n) {
  return [n, ...(rn[n] ?? [])].some(item => (e[item] ?? "") !== "");
}
var Ao = /^[a-z][a-z0-9+.-]*:\/\//i;
function Oo(e) {
  let n = e.startsWith("//"),
    r;
  try {
    r = new URL(n ? `https:${e}` : e);
  } catch {
    let text_2 = e.replace(/^([a-z][a-z0-9+.-]*:)?\/\/[^/?#]*@/i, "$1//");
    return XE(text_2) ? {
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
  if (XE(To(r.search))) r.search = "", r.hash = "", cut = !0;
  let E = r.href;
  return {
    text: n ? E.replace(/^https:/, "") : E,
    cut: cut,
    stripped: stripped
  };
}
function To(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}
function F$t(e, value) {
  if (value.trim() === "") return {
    value: value,
    cut: !1,
    stripped: !1
  };
  let r = /^(?:INPUT_)?GOPROXY$/i.test(e),
    s = !/^INPUT_/i.test(e) && tn(e) !== void 0,
    cut_2 = !1,
    stripped_2 = !1,
    E = !1,
    h = r ? /(\s*[,|]\s*|\s+)/ : s ? /(\s+)/ : null,
    I = (h === null ? [value] : value.split(h)).flatMap(item => {
      if (E) return [];
      let M = /^([A-Za-z0-9_.-]+=)(?=[a-z][a-z0-9+.-]*:\/\/|\/\/)/i.exec(item),
        k = M ? M[1] : "",
        N = item.slice(k.length);
      if (!N.startsWith("//") && !Ao.test(N)) {
        if (item.trim() !== "" && XE(item)) return cut_2 = !0, stripped_2 = !0, [r ? "off" : text];
        return [item];
      }
      let D = Oo(N);
      if (stripped_2 ||= D.cut || D.stripped === !0, D.cut || D.stripped && (r || s)) {
        if (cut_2 = !0, r) return E = !0, ["off"];
      }
      return [k + D.text];
    }).join("");
  if (r) I = I.replace(/[,|\s]+$/, "");
  if (I !== "" && XE(I)) return {
    value: r ? "off" : text,
    cut: !0,
    stripped: !0
  };
  return {
    value: I === "" ? text : I,
    cut: cut_2,
    stripped: stripped_2
  };
}
function tHo(e) {
  return on(e).respelled;
}
function pAe(e) {
  let n = on(e);
  for (let [r, s] of Object.entries(e)) {
    if (s === void 0) continue;
    let g = typeof s === "string" ? s : String(s),
      S = $$t(r, g);
    if (S !== void 0 && S !== g) n.respelled[r] = S, n.lostCredential.push(r);
  }
  return n;
}
function on(e) {
  let respelled = {},
    lostCredential = [];
  for (let [s, g] of Object.entries(e)) {
    if (g === void 0 || !M5e(s)) continue;
    let S = typeof g === "string" ? g : String(g),
      E = F$t(s, S);
    if (E.value !== S) {
      if (respelled[s] = E.value, E.cut || E.stripped) lostCredential.push(s);
    }
    if (E.cut) {
      let h = WUr(s, E.value);
      if (h !== void 0 && !jUr(e, h.name) && respelled[h.name] === void 0) respelled[h.name] = h.value;
    }
  }
  return {
    respelled: respelled,
    lostCredential: lostCredential
  };
}
function WUr(e, n) {
  let name = /^INPUT_/i.test(e) ? void 0 : tn(e);
  if (name === void 0) return;
  let s = n.split(/\s+|,|\|/).map(item => item.replace(/^[A-Za-z0-9_.-]+=(?=[a-z][a-z0-9+.-]*:\/\/|\/\/)/i, "")).find(item => item.startsWith("//") || /^https?:\/\//i.test(item)),
    value_2 = text;
  if (s !== void 0) try {
    let S = new URL(s.startsWith("//") ? `https:${s}` : s).origin;
    value_2 = S === "null" ? text : `${S}/`;
  } catch {
    value_2 = text;
  }
  return {
    name: name,
    value: value_2
  };
}
function D5e() {
  return D3n(), _e ? yo.flatMap(item => [item, `INPUT_${item}`, ...(item.startsWith("NPM_CONFIG_") ? [item.toLowerCase()] : [])]) : [];
}
function D3n() {
  let CLAUDE_CODE_SUBPROCESS_ENV_SCRUB = process.env.CLAUDE_CODE_SUBPROCESS_ENV_SCRUB;
  _e ??= Yt(CLAUDE_CODE_SUBPROCESS_ENV_SCRUB) || Yt(process.env.GITHUB_ACTIONS) && !Io(CLAUDE_CODE_SUBPROCESS_ENV_SCRUB);
}
var _e;
function nHo() {
  _e = void 0;
}
function Io(e) {
  return e !== void 0 && /^(?:0|false|no|off)$/i.test(String(e).trim());
}
function Yt(e) {
  let n = e === void 0 ? void 0 : String(e).trim().toLowerCase();
  return n === "1" || n === "true" || n === "yes" || n === "on";
}
var N$e = ho.flatMap(item => [item, `INPUT_${item}`]),
  zUr = ["ANTHROPIC_API_KEY", "ANTHROPIC_AUTH_TOKEN", "ANTHROPIC_CUSTOM_HEADERS", "CLAUDE_CODE_OAUTH_TOKEN", "CLAUDE_CODE_OAUTH_REFRESH_TOKEN", "CLAUDE_CODE_ARTIFACTS_API_TOKEN", "CLAUDE_CODE_MEMORY_API_TOKEN", "CLAUDE_CODE_SLACK_TAG_TOKEN", "ANTHROPIC_FOUNDRY_API_KEY", "ANTHROPIC_FOUNDRY_AUTH_TOKEN", "ANTHROPIC_AWS_API_KEY", "ANTHROPIC_IDENTITY_TOKEN", "ANTHROPIC_IDENTITY_TOKEN_FILE", "ALL_INPUTS"],
  GUr = zUr.flatMap(item => [item, `INPUT_${item}`]);
function fne(e) {
  return e.toUpperCase().replace(/-/g, "_");
}
var qe = /CONN(ECT(ION)?)?_?STR(ING)?S?(?=$|[_0-9])/i;
function VUr(e) {
  return qe.test(e) || qe.test(cn(e));
}
var sn = ["OAuth", "NextAuth"];
function cn(e) {
  return sn.reduce((acc, item) => acc.replaceAll(item, item[0] + item.slice(1).toLowerCase()), e).replace(/([a-z0-9])([A-Z])/g, "$1_$2").replace(/([A-Z])([A-Z][a-z])/g, "$1_$2");
}
var No = ["CONN", "CONNECT", "CONNECTION"].flatMap(item => ["", "_"].flatMap(n => ["STR", "STRING", "STRS", "STRINGS"].flatMap(r => {
    let s = `*${z(`${item}${n}${r}`)}`;
    return [s, `${s}_*`, `${s}[0-9]*`];
  }))),
  un = ["TOKEN", "SECRET", "PASSWORD", "PASSWD", "PASSPHRASE", "KEY", "AUTH", "COOKIE", "PAT", "DSN", "WEBHOOK", "CREDENTIAL", "CREDENTIALS", "CREDS", "APIKEY", "ACCESSKEY", "SECRETKEY", "ACCOUNTKEY", "PRIVATEKEY", "AUTHKEY", "SSHKEY", "SIGNINGKEY", "MASTERKEY", "DEPLOYKEY", "ENCRYPTIONKEY", "PGPASSWORD", "SSHPASS"],
  dn = ["PWD", "PASS", "JWT"],
  pn = ["TOKEN", "SECRET", "PASSWORD", "PASSWD", "PASSPHRASE"],
  gn = ["KEY", "SECRET", "PASSWORD", "CREDENTIAL"],
  regExp_2 = new RegExp(`((^|_)(${un.join("|")}|(${gn.join("|")})S)|_(${dn.join("|")})|(${pn.join("|")}))(?=$|[_0-9])`, "i"),
  Co = ["CLOUDSDK_PROXY_PASSWORD", "GIT_CONFIG_KEY_[0-9]*"],
  bo = /^GIT_CONFIG_KEY_[0-9][A-Za-z0-9_]*$/;
function vo(e) {
  return /^GIT_CONFIG_(?:COUNT|PARAMETERS|(?:KEY|VALUE)_[0-9]+)$/.test(e);
}
function Mpt(e) {
  return vo(e) || Ho.test(e);
}
var Ho = /^(?:(?:https?|ftp|all|no)_proxy|npm_config_(?:https?_)?proxy|npm_config_noproxy|yarn_proxy|(?:yarn|global_agent|docker|claude_code)_(?:https?|no)_proxy|cloudsdk_proxy_[a-z]+|electron_get_use_proxy)$/i;
function qUr(e, n) {
  let r = $$t(e, n);
  return r === void 0 ? XE(n) : r !== n;
}
function $$t(e, n) {
  if (Yfn(e) === "GOFLAGS") return n.length > Ce ? "" : fi(n);
  if (!Sn.has(Yfn(e))) return;
  let r = n.length > Ce ? null : L5e(n);
  if (r === null) return "";
  D3n();
  let s = r.map((E, index) => {
    let word = index > 0 && /^(?:-D|--define)$/.test(H$e(r[index - 1])) ? `-D${E}` : hn(H$e(E));
    return {
      raw: E,
      word: word,
      residual: En.test(word),
      goes: !1
    };
  });
  for (let E = 0; E < s.length; E++) {
    let h = s[E];
    if (h.residual) continue;
    let A = E > 0 ? s[E - 1].word : null,
      T = s[E + 1];
    if (h.goes = h.goes || $o(h.word, A) || T !== void 0 && !T.residual && !me(T.word) && et.test(h.word) && XE(`${h.word} ${T.word}`), h.goes && T !== void 0 && !me(T.word) && et.test(h.word)) T.goes = !0;
  }
  for (let E = 1; E < s.length; E++) {
    if (xo.test(s[E - 1].word)) s[E].goes = !0;
    if (s[E].goes && !H$e(s[E].raw).startsWith("-") && wo(s[E - 1].word)) s[E - 1].goes = !0;
  }
  let g = s.filter(item => !item.goes);
  e: while (Kfn(g.filter(item => !item.residual).flatMap(Xt))) {
    let E = g.filter(item => !item.residual);
    for (let h = 2; h <= 4; h++) for (let A = 0; A + h <= E.length; A++) {
      let T = E.slice(A, A + h);
      if (Kfn(T.flatMap(Xt))) {
        for (let I of T) I.goes = !0;
        g = g.filter(item => !item.goes);
        continue e;
      }
    }
    for (let h of E) h.goes = !0;
    g = g.filter(item => !item.goes);
  }
  if (g.length === s.length) return n;
  let S = Bo.has(Yfn(e)) ? Do : fn;
  return g.every(item => S.test(item.raw)) ? g.map(item => item.raw).join(" ") : "";
}
var fn = /^[A-Za-z0-9_.,:=\/@+~*?-]+$/,
  Do = /^[A-Za-z0-9_.,:=\/@+~|*?-]+$/,
  et = /(?:\b(?:Bearer|Basic|token)|authorization\s*[:=]\s*["']?(?:[a-z][a-z0-9_-]*)?|-token\s*[:=])\s*["']?$/i;
function wo(e) {
  return XUr(e) === "" || JUr(e) === "" || Mo.test(e) || mn.test(e);
}
var Mo = /^(?:-D|--define|-f|--file|-pl|--projects|-rf|--resume-from|-l|--log-file|-t|--toolchains|-gt|--global-toolchains|-itr|--install-toolchains|-P|--activate-profiles|-b|--builder|-T|--threads|-emp|--encrypt-master-password|-ep|--encrypt-password)$/,
  xo = /^(?:-emp|--encrypt-master-password|-ep|--encrypt-password)$/,
  Uo = /^(?:-emp|--encrypt-master-password|-ep|--encrypt-password)=./s;
function me(e) {
  return /^-D[A-Za-z_][\w.-]*=.+$/s.test(e) || /^-D[A-Za-z_]\w*(?:\.\w+)+=$/.test(e) || /^-D[A-Za-z_][A-Za-z_.]*$/.test(e) || e.startsWith("-J-") && me(e.slice(2)) || /^--[a-z][a-z0-9-]*(?:=.*)?$/s.test(e) || ko.test(e) || /^(?:@|-[A-Za-z]{1,4}\d{0,2}$)/.test(e);
}
var ko = /^-(?:X(?:mx|ms|ss|mn|rs|int|comp|mixed|batch|diag|debug|future|prof|noclassgc|internalversion|check:jni|share:(?:on|off|auto|dump)|verify(?::[a-z]+)?|log(?::.*)?|loggc:.+|bootclasspath(?:\/[ap])?:.+|runjdwp:.+|dock:.+|startOnFirstThread|showSettings(?::[a-z]+)?)[0-9kKmMgGtT]*$|XX:[+-]?[A-Za-z]\w*(?:=.*)?$|(?:javaagent|agentlib|agentpath):.|verbose(?::[a-z]+)?$|[ed](?:s?a)(?::[a-z][\w$]*(?:\.[\w$]+)*(?:\.\.\.)?)?$|(?:server|client|d64|showversion)$|-(?:add-opens|add-exports|add-reads|add-modules|limit-modules|patch-module|module-path|upgrade-module-path|class-path|enable-native-access|illegal-access|enable-preview|source|release)(?:=.*)?$|(?:cp|classpath|p)$)/s;
function Kfn(e) {
  return XE(e.map(item => me(item) ? `; ${item.includes("=") ? item.replace(/^[^=]*=/, "") : ""}` : item).join(" "));
}
function $o(e, n) {
  let r = _n(e);
  if (r === null) return Zt(e, n);
  let s = /^-D([^=]+)=/.exec(e)[1];
  return Go(e) || yn(s, e.slice(s.length + 3)) || Kfn(r) || r.some((item, index) => Zt(item, index > 0 ? r[index - 1] : null) || index + 1 < r.length && !me(r[index + 1]) && et.test(item) && XE(`${item} ${r[index + 1]}`));
}
function Xt(e) {
  return _n(e.word) ?? [e.word];
}
function _n(e) {
  let n = /^-D[^=]+=\s*(-.*)$/s.exec(e);
  if (n === null) return null;
  return (L5e(n[1]) ?? []).map(H$e).filter(item => !En.test(item));
}
function Go(e) {
  let n = /^-D[^=]+=\s*(-.*)$/s.exec(e);
  return n !== null && L5e(n[1]) === null;
}
function Zt(e, n) {
  if (Uo.test(e)) return !0;
  let r = /^-D([^=]+)=(.+)$/s.exec(e);
  if (r !== null) {
    let [, s, g] = r;
    if (yn(s, g) || XE(g)) return !0;
    if (_e === !0) return YUr.test(s) || !1 || !Ko.test(s) && !(/^sonar\./i.test(s) && !L3n(s) && !/key.?store|cert|pkcs|p12|pfx|\.pem$/i.test(s)) && Qt(g);
    return !1;
  }
  if (XE(e)) return !0;
  if (_e === !0) return !Wo.test(e) && !(n !== null && mn.test(n)) && Qt(e);
  return !1;
}
function Qt(e) {
  return /[\\/]|^[@~]/.test(e);
}
var Wo = /^-(?:X|XX:|javaagent:|agentlib:|agentpath:|verbose|ea\b|da\b|esa$|dsa$|server$|client$|d64$|showversion$|-(?:add-opens|add-exports|add-reads|add-modules|limit-modules|patch-module|module-path|upgrade-module-path|class-path|enable-native-access|illegal-access|enable-preview|source|release)\b|(?:cp|classpath|p)$)/,
  mn = /^-(?:-(?:add-opens|add-exports|add-reads|add-modules|limit-modules|patch-module|module-path|upgrade-module-path|class-path|enable-native-access|source|release)|cp|classpath|p)$/,
  Ko = /^(?:javax\.net\.ssl\.trustStore|java\.io\.tmpdir|java\.security\.egd|java\.library\.path|jna\.library\.path|java\.class\.path|(?:https?|ftp)\.nonProxyHosts|socksNonProxyHosts|jna\.tmpdir|java\.util\.logging\.config\.file|log4j2?\.configurationFile|logback\.configurationFile|logging\.config|user\.dir|file\.encoding|maven\.multiModuleProjectDirectory|library\.jansi\.path|jansi\.tmpdir)$/i,
  KUr = ["JAVA_TOOL_OPTIONS", "JDK_JAVA_OPTIONS", "_JAVA_OPTIONS", "IBM_JAVA_OPTIONS", "OPENJ9_JAVA_OPTIONS", "MAVEN_OPTS", "GRADLE_OPTS", "MAVEN_ARGS", "MAVEN_CONFIG", "ANT_OPTS", "ANT_ARGS", "JAVA_OPTS", "SBT_OPTS", "JVM_OPTS", "LEIN_JVM_OPTS", "ES_JAVA_OPTS", "SONAR_SCANNER_OPTS", "SONAR_SCANNER_JAVA_OPTS"];
function Yfn(e) {
  return e.toUpperCase().replace(/^INPUT_/, "").replace(/-/g, "_");
}
var Bo = new Set(["JAVA_TOOL_OPTIONS", "JDK_JAVA_OPTIONS", "_JAVA_OPTIONS", "IBM_JAVA_OPTIONS", "OPENJ9_JAVA_OPTIONS"]),
  Sn = new Set(KUr),
  En = /^-D(?:(?:(?:https?|ftp)\.proxy(?:User|Password)|socksProxy(?:User|Password)|java\.net\.socks\.(?:username|password))=\S*$|[\w.-]*trust-?store-?password=changeit$)/i;
function L5e(e) {
  let n = [],
    r = "",
    s = !1,
    g = 0;
  while (g < e.length) {
    let S = e[g];
    if (S === " " || S === "\t" || S === `
` || S === "\r") {
      if (s) n.push(r), r = "", s = !1;
      g++;
      continue;
    }
    if (S === "'" || S === '"') {
      let E = e.indexOf(S, g + 1);
      if (E === -1) return null;
      r += e.slice(g + 1, E), s = !0, g = E + 1;
      continue;
    }
    r += S, s = !0, g++;
  }
  if (s) n.push(r);
  return n;
}
function Ne(e) {
  return e.replace(/([a-z0-9])([A-Z])/g, "$1_$2").replace(/([A-Z])([A-Z][a-z])/g, "$1_$2");
}
var YUr = /^(?:maven\.(?:user\.settings|global\.settings|installation\.settings|project\.settings|settings\.security|repo\.local|home)|settings\.security|gradle\.user\.home|sbt\.(?:boot\.credentials|repository\.config|global\.base|ivy\.home|boot\.directory)|user\.home)$/i;
function XUr(e) {
  if (/^-(?:show-version|strict-checksums)$/.test(e)) return null;
  let n = /^(?:--?settings|--?global-settings|--?install-settings|--?project-settings|-gs|-is|-ps|-s)(?:=(.+))?$/.exec(e) ?? /^-g?s=?(.+)$/.exec(e);
  return n === null ? null : n[1] ?? "";
}
function JUr(e) {
  let n = /^-{1,2}(?:ivy|sbt-dir|sbt-boot)(?:=(.+))?$/.exec(e);
  return n === null ? null : n[1] ?? "";
}
function H$e(e) {
  return e.replace(/^-J(?=-)/, "");
}
function hn(e) {
  return e.replace(/^--define=/, "-D");
}
function Xfn(e) {
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    if (/^(?:-D|--define)$/.test(s) && r + 1 < e.length) r += 1, n.push(`-D${e[r]}`);else n.push(hn(s));
  }
  return n;
}
function yn(e, n) {
  return Pn(e, n) && !/^(?:[\\/~]|[a-z]:[\\/]|file:)/i.test(n);
}
function Pn(e, n) {
  let r = e.split(".").at(-1) ?? "";
  return L3n(e) && (Vo.test(Ne(e)) || !/(?:user(?:name)?|id|store|file|path|dir|location|url|host|port|alias|type)$/i.test(r)) && !QUr(e, n);
}
var Vo = /(?:PASSWORD|PASSWD|SECRET)S?[._-]ID$/i,
  zo = new Set(["sonar.login", "sonar.token", "sonar.password"]),
  Yo = /^(?:projectKey|moduleKey|componentKey|ruleKey|resourceKey)$/,
  Jo = new Set(["sonar.pullrequest.key"]);
function QUr(e, n) {
  let r = e.split(".").at(-1) ?? "";
  return /^(?:\d+[a-z]{0,2}|true|false)$/i.test(n) && !mne(r.replace(/-/g, "_")) && !tt(e);
}
function L3n(e) {
  if (zo.has(e.toLowerCase())) return !0;
  let n = e.split(".").at(-1) ?? "",
    r = Ne(n).split(/[_-]+/).filter(Boolean).map(item => item.toUpperCase().replace(/\d+$/, "")).filter(Boolean),
    s = r.at(-1);
  if (!s) return !1;
  if (/^sonar\./i.test(e)) {
    if (s === "SECURED") return !0;
    if ((Yo.test(n) || Jo.has(e.toLowerCase())) && !tt(e)) return !1;
  }
  if (mne(n.replace(/-/g, "_")) || tt(e) || qe.test(Ne(e).replace(/[.-]/g, "_"))) return !0;
  return s === "USERNAME" || s === "USER" && r.length > 1;
}
function tt(e) {
  let n = Ne(e).toUpperCase().split(/[._-]+/).filter(Boolean),
    r = n.at(-1) ?? "",
    s = n.at(-2) ?? "";
  return n.slice(0, -1).some(item => Xo.test(item)) && (!Zo.test(r) || /^IDS?$/.test(r) && /^(?:PASSWORDS?|PASSWD|SECRETS?)$/.test(s));
}
var Xo = /^(?:PASSWORDS?|PASSWD|PASSPHRASE|SECRETS?|TOKENS?|KEYS?|APIKEY|CREDENTIALS?)$/,
  Zo = /^(?:USER(?:NAME)?|ID|IDS|STORE|FILE|FILES|PATH|PATHS|DIR|DIRECTORY|LOCATION|URL|URI|HOST|PORT|ALIAS|TYPE|PREFERENCE|SCHEMES?|ENABLED?|DISABLED?|MODE|CLASS|PROVIDER|ALGORITHM|FORMAT|LENGTH|SIZE|BITS|TIMEOUT|TTL|HEADER|NAME|NAMES|PREFIX|SUFFIX|VERSION|ENCODING|POLICY|COUNT|CACHE|SERVICE|ENDPOINT|REGION|SCOPE|SCOPES|AUDIENCE|ISSUER|EXPIRY|EXPIRATION|ROTATION|REQUIRED|OPTIONAL|SECONDS?|SECS?|MS|MILLIS(?:ECONDS)?|MINUTES?|MINS?|HOURS?|DAYS?|AGE|CAPACITY|RATE|INTERVAL|DELAY|PERIOD|DURATION|VALIDITY|LIFETIME|WINDOW|MAX|MIN|LIMIT|THRESHOLD|BUDGET|RETRY|RETRIES|ATTEMPTS)$/;
function mne(e) {
  let n = e.replace(Qo, "").replace(/-/g, "_");
  return (regExp_2.test(n) || regExp_2.test(cn(n)) || VUr(n) || regExp_3.test(n)) && !bo.test(e);
}
var Qo = /^AUTH0_/i,
  qo = "[Aa][Uu][Tt][Hh]0_*",
  Rn = ["BUILD", "LOCAL", "MIRROR", "PATH", "WITH", "WITHOUT", "CACHE", "DISABLE", "IGNORE", "ONLY"],
  ei = "(?:[A-Za-z0-9]+(?:___[A-Za-z0-9]+)*__)+[A-Za-z]{2,}",
  regExp_3 = new RegExp(`^(?:INPUT_)?BUNDLE_(?!(?:${Rn.join("|")})__(?!${ei}$))\\w*__`, "i"),
  ti = "[Bb][Uu][Nn][Dd][Ll][Ee]_*__*|[Ii][Nn][Pp][Uu][Tt]_[Bb][Uu][Nn][Dd][Ll][Ee]_*__*",
  ni = Rn.flatMap(item => [`[Bb][Uu][Nn][Dd][Ll][Ee]_${z(item)}__*`, `[Ii][Nn][Pp][Uu][Tt]_[Bb][Uu][Nn][Dd][Ll][Ee]_${z(item)}__*`]).join("|"),
  ri = new Set(["CLAUDE_CODE_CLIENT_KEY", "CLAUDE_CODE_API_KEY_HELPER_TTL_MS", "CLAUDE_CODE_PROXY_AUTH_HELPER_TTL_MS", "CLAUDE_CODE_ENABLE_PROXY_AUTH_HELPER", "CLAUDE_CODE_AUTH_FAIL_EXIT_MS", "CLAUDE_CODE_ENABLE_TOKEN_USAGE_ATTACHMENT", "CLAUDE_CODE_IDLE_TOKEN_THRESHOLD", "CLAUDE_CODE_RESUME_TOKEN_THRESHOLD", "CLAUDE_CODE_ARG_KEY_SHAPE"]),
  oi = /^CLAUDE_CODE_SKIP_[A-Z0-9_]+_AUTH$/;
function Jfn(e) {
  return ri.has(e) || oi.test(e);
}
var rHo = new Set(["GITHUB_TOKEN", "GH_TOKEN", "GH_ENTERPRISE_TOKEN", "GITHUB_ENTERPRISE_TOKEN"]),
  An = ["INPUT_", "ORG_GRADLE_PROJECT_", "POETRY_PYPI_TOKEN_", "POETRY_HTTP_BASIC_", "CARGO_REGISTRIES_", "CONAN_LOGIN_USERNAME_", "CONAN_PASSWORD_"],
  rt = ["POETRY_HTTP_BASIC_", "CONAN_LOGIN_USERNAME_"],
  regExp_4 = new RegExp(`^(?:${An.join("|")})`, "i"),
  regExp_5 = new RegExp(`^(?:INPUT_)?(?:${rt.join("|")})`, "i");
function B$t(e) {
  let n = e.replace(/-/g, "_");
  return regExp_4.test(n) && (regExp_5.test(n) || /USER(?:_?NAME)?_?[0-9]*$/i.test(n) || mne(n));
}
var ai = rt.flatMap(item => [`${z(item)}*`, `${z(`INPUT_${item}`)}*`, `${z(`INPUT_${item.replace(/_/g, "-")}`).replace(/^INPUT-/, "INPUT_")}*`]).concat(An.filter(item => !rt.includes(item)).flatMap(item => ["USER", "USERNAME", "USER_NAME", "USER-NAME"].flatMap(n => ["", "[0-9]", "[0-9][0-9]", "[_-][0-9]", "[_-][0-9][0-9]"].map(r => `${z(item)}*${z(n)}${r}`)))).join("|"),
  fe = "__CLAUDE_CC_KEEP_";
function oHo(e, n = {}) {
  let r = new Set((n.denied ?? []).map(item => item.toUpperCase())),
    s = new Set((n.masked ?? []).map(item => item.toUpperCase())),
    g = {};
  for (let [S, E] of Object.entries(e)) {
    if (r.has(S.toUpperCase())) continue;
    if (s.has(S.toUpperCase())) continue;
    if (E !== void 0 && E.trim() !== "" && /^[A-Za-z_][A-Za-z0-9_]*$/.test(S) && (M5e(S) || $$t(S, "") !== void 0)) g[`${fe}${S}`] = E;
  }
  return g;
}
function sHo({
  sandboxMasked = []
} = {}) {
  let n = sandboxMasked.filter(item => /^[A-Za-z_][A-Za-z0-9_]*$/.test(item)),
    s = `case "$__cc_name" in (${n.length > 0 ? n.join("|") : "''__cc_none__"}) \\builtin true;; (*) \\builtin false;; esac`,
    g = un.map(z).concat(gn.map(item => z(`${item}S`))).flatMap(item => [item, `${item}[_0-9]*`, `*_${item}`, `*_${item}[_0-9]*`]).concat(pn.map(z).flatMap(item => [`*${item}`, `*${item}[_0-9]*`]), dn.map(z).flatMap(item => [`*_${item}`, `*_${item}[_0-9]*`])).concat(No).join("|"),
    S = [...N$e, ...D5e(), "GITHUB_TOKEN", "GH_TOKEN"],
    E = S.join(" "),
    h = S.map(item => item.toUpperCase()).join(" "),
    A = `__cc_uc=; ( LC_ALL=C \\builtin eval ': "\${__cc_uc^^}"' ) 2>/dev/null && __cc_uc=b; \\builtin test -n "$__cc_uc" || { ( LC_ALL=C \\builtin eval ': "\${(U)__cc_uc}"' ) 2>/dev/null && __cc_uc=z; } || \\builtin true`,
    T = `__cc_upper="$__cc_name"; case "$__cc_uc" in b) LC_ALL=C \\builtin eval '__cc_upper="\${__cc_name^^}"';; z) LC_ALL=C \\builtin eval '__cc_upper="\${(U)__cc_name}"';; esac`,
    I = `{ ! ${s} && (\\builtin unset -v "$__cc_name") && \\builtin unset -v "$__cc_name"; }`,
    w = '\\builtin eval "__cc_set=\\${$__cc_name+x}"; \\builtin test -n "$__cc_set"',
    M = "{ \\builtin compgen -v || \\builtin set; }",
    k = sn.map(item => `__cc_fold="\${__cc_fold//${item}/${item[0] + item.slice(1).toLowerCase()}}"`).join("; "),
    N = (W, ee = "__cc_fold") => `__cc_fold="\${${W}}"; ${k}; __cc_split=; __cc_prev=; __cc_i=0; while \\builtin test "$__cc_i" -lt "\${#${ee}}"; do __cc_c="\${${ee}:$__cc_i:1}"; case "$__cc_prev$__cc_c" in [[:lower:][:digit:]][[:upper:]]) __cc_split="\${__cc_split}_";; [[:upper:]][[:upper:]]) case "\${${ee}:$((__cc_i+1)):1}" in [[:lower:]]) __cc_split="\${__cc_split}_";; esac;; esac; __cc_split="$__cc_split$__cc_c"; __cc_prev="$__cc_c"; __cc_i=$((__cc_i+1)); done; case "$__cc_split" in ''|${g}) ${I};; esac`,
    D = N("__cc_name"),
    x = "__cc_ncm=; \\builtin shopt -q nocasematch && __cc_ncm=1; \\builtin shopt -u nocasematch || \\builtin true",
    V = '\\builtin test -z "$__cc_ncm" || \\builtin shopt -s nocasematch || \\builtin true',
    le = '{ (\\builtin unset -v "$__cc_name") && \\builtin eval "$__cc_name=\\$__cc_r; \\builtin export $__cc_name"; }',
    ht = '{ (\\builtin unset -v "$__cc_name") && \\builtin unset -v "$__cc_name"; }',
    ue = en.join(" "),
    de = [...Sn, "GOFLAGS"].join(" "),
    Z = (W => `'${W.replace(/'/g, "'\\''")}'`)(text),
    pe = Object.entries(Object.entries(nn).reduce((acc, [ee, We]) => ((acc[We] ??= []).push(ee), acc), {})).map(([W, ee]) => {
      let We = [W, ...(rn[W] ?? [])].map(item => `\\\${${item}:+x}`).join("");
      return `for __cc_name in ${ee.join(" ")}; do \\builtin eval "__cc_val=\\\${$__cc_name-}"; \\builtin test "$__cc_val" = ${Z} || \\builtin continue; \\builtin eval "__cc_set=${We}"; \\builtin test -n "$__cc_set" || { __cc_name=${W}; __cc_r=${Z}; { (\\builtin unset -v "$__cc_name") && \\builtin eval "$__cc_name=\\$__cc_r; \\builtin export $__cc_name"; }; }; \\builtin break; done`;
    }).join("; "),
    J = "CARGO_REGISTRIES_*_INDEX|POETRY_REPOSITORIES_*_URL|[Cc]argo_[Rr]egistries_*_[Ii]ndex|npm_config_registry|[Nn][Pp][Mm]_[Cc][Oo][Nn][Ff][Ii][Gg]_[Rr][Ee][Gg][Ii][Ss][Tt][Rr][Yy]",
    yr = `\\builtin eval "$({ \\builtin compgen -v || \\builtin set; } 2>/dev/null | while \\builtin read -r __cc_line; do __cc_v="\${__cc_line%%=*}"; __cc_v="\${__cc_v#${fe}}"; case "$__cc_v" in (''|[0-9]*|*[!A-Za-z0-9_]*) ;; (CARGO_REGISTRIES_*_INDEX|POETRY_REPOSITORIES_*_URL|[Cc]argo_[Rr]egistries_*_[Ii]ndex|npm_config_registry|[Nn][Pp][Mm]_[Cc][Oo][Nn][Ff][Ii][Gg]_[Rr][Ee][Gg][Ii][Ss][Tt][Rr][Yy]) \\builtin printf '__cc_visit %s\\n' "$__cc_v";; esac; done)"`,
    Pr = `\\builtin eval "$({ \\builtin compgen -v || \\builtin set; } 2>/dev/null | while \\builtin read -r __cc_line; do __cc_v="\${__cc_line%%=*}"; case "$__cc_v" in (*[!A-Za-z0-9_]*) ;; (${fe}*) \\builtin printf '\\\\builtin unset -v %s\\n' "$__cc_v";; esac; done)"`,
    Rr = `__cc_visit() { ${`__cc_name=$1; case "$__cc_name" in ''|[0-9]*|*[!A-Za-z0-9_]*) return 0;; esac; ! ${s} || return 0; \\builtin eval "__cc_k=\\\${${fe}$__cc_name+x}; __cc_r=\\\${${fe}$__cc_name-}; __cc_val=\\\${$__cc_name-}; __cc_has=\\\${$__cc_name+x}"; if \\builtin test -n "$__cc_k"; then \\builtin test "$__cc_has$__cc_val" = "x$__cc_r" || { (\\builtin unset -v "$__cc_name") && \\builtin eval "$__cc_name=\\$__cc_r; \\builtin export $__cc_name"; }; else \\builtin test -n "$__cc_val" || return 0; case " ${de} " in *" $__cc_name "*) { (\\builtin unset -v "$__cc_name") && \\builtin unset -v "$__cc_name"; };; *) __cc_r=${Z}; { (\\builtin unset -v "$__cc_name") && \\builtin eval "$__cc_name=\\$__cc_r; \\builtin export $__cc_name"; };; esac; fi; return 0`}; }; for __cc_n in ${ue} ${de}; do __cc_visit "$__cc_n"; done; ${yr}; ${pe}; ${Pr}; \\builtin unset -f __cc_visit`;
  return `{ __cc_ncm=; \\builtin shopt -q nocasematch && __cc_ncm=1; \\builtin shopt -u nocasematch || \\builtin true; __cc_uc=; ( LC_ALL=C \\builtin eval ': "\${__cc_uc^^}"' ) 2>/dev/null && __cc_uc=b; \\builtin test -n "$__cc_uc" || { ( LC_ALL=C \\builtin eval ': "\${(U)__cc_uc}"' ) 2>/dev/null && __cc_uc=z; } || \\builtin true; while \\builtin read -r __cc_line; do __cc_name="\${__cc_line%%=*}"; case "$__cc_name" in ''|[0-9]*|*[!A-Za-z0-9_]*) \\builtin continue;; esac; __cc_upper="$__cc_name"; case "$__cc_uc" in b) LC_ALL=C \\builtin eval '__cc_upper="\${__cc_name^^}"';; z) LC_ALL=C \\builtin eval '__cc_upper="\${(U)__cc_name}"';; esac; case " ${h} " in *" $__cc_upper "*) ${I}; \\builtin continue;; esac; case "$__cc_name" in ${ai}) ${I}; \\builtin continue;; esac; case "$__cc_name" in ${Co.join("|")}) ;; ${qo}) __cc_rest="\${__cc_name#*_}"; case "$__cc_rest" in ${g}) ${I};; *[[:lower:][:digit:]][[:upper:]]*|*[[:upper:]][[:upper:]][[:lower:]]*) ${N("__cc_rest")};; esac;; ${g}) ${I};; ${ni}) __cc_rest="\${__cc_name#*__}"; __cc_rest="\${__cc_rest//___/-}"; case "$__cc_rest" in *__*[A-Za-z][A-Za-z]) ${I};; *) case "$__cc_name" in *[[:lower:][:digit:]][[:upper:]]*|*[[:upper:]][[:upper:]][[:lower:]]*) ${D};; esac;; esac;; ${ti}) ${I};; *[[:lower:][:digit:]][[:upper:]]*|*[[:upper:]][[:upper:]][[:lower:]]*) ${D};; esac; done < <({ \\builtin compgen -v || \\builtin set; }); for __cc_name in ${E}; do \\builtin eval "__cc_set=\\\${$__cc_name+x}"; \\builtin test -n "$__cc_set" && ${I}; done; ${Rr}; \\builtin test -z "$__cc_ncm" || \\builtin shopt -s nocasematch || \\builtin true; \\builtin unset -v __cc_line __cc_name __cc_rest __cc_set __cc_val __cc_r __cc_v __cc_k __cc_has __cc_n __cc_split __cc_fold __cc_prev __cc_i __cc_c __cc_ncm __cc_uc __cc_upper; \\builtin true; } 2>/dev/null`;
}
function F$e(e = {}) {
  let n = {
      ...process.env,
      ...e
    },
    r = new Set(ZUr(n));
  for (let [s, g] of Object.entries(n)) if (g !== void 0 && !Mpt(s) && !M5e(s) && $$t(s, "") === void 0 && qUr(s, typeof g === "string" ? g : String(g))) r.add(s);
  return [...r];
}
function ZUr(e) {
  let n = new Set([...N$e, ...D5e(), "GITHUB_TOKEN", "GH_TOKEN"]);
  for (let r of Object.keys(e)) if (mne(r) || B$t(r)) n.add(r);
  return [...n];
}
function z(e) {
  return [...e].map(item => item.toLowerCase() === item ? item : `[${item}${item.toLowerCase()}]`).join("");
}
function XE(e) {
  let n = e.length > Ce ? e.slice(0, Ce) : e,
    r = g => {
      let S = g.search(/\s/),
        E = S === -1 ? g : g.slice(0, S),
        h = E.lastIndexOf("@");
      if (h === -1) return !1;
      let A = E.slice(0, h);
      if (qt(A, E.slice(h + 1))) return !1;
      return A.includes(":") || !/[/?#]/.test(A) && li(A);
    },
    s = n.indexOf("://");
  while (s !== -1) {
    if (s > 0 && /[a-z0-9+.-]/i.test(n[s - 1] ?? "")) {
      if (r(n.slice(s + 3))) return !0;
    }
    s = n.indexOf("://", s + 3);
  }
  if (n.startsWith("//") && r(n.slice(2))) return !0;
  return /^[^\s/@:]+:(?!\/\/)(?![\\/])[^\s@]*@[^\s/@]+/.test(n) && !/^[a-z]:[\\/]/i.test(n) && !ci.test(n) && !qt(n.slice(0, n.lastIndexOf("@", n.search(/\s|$/))), n.slice(n.lastIndexOf("@", n.search(/\s|$/)) + 1)) && !/^(?:mailto|sips?|xmpp|im|acct):/i.test(n) || gi.test(n) || pi.test(n) || /["']?sonar\.login["']?\s*[:=]\s*["']?[^\s"',}]{8,}/.test(n) || eBr.test(n) || /\bauthorization\s*[:=]\s*["']?[a-z][a-z0-9_-]*\s+[A-Za-z0-9._~+\/=-]{8,}/i.test(n) || /\b(?:[Tt]oken|TOKEN)\s+(?=[A-Za-z0-9_~+=-]*[0-9])(?=[A-Za-z0-9_~+=-]*[A-Z])(?=([A-Za-z0-9_~+=-]{20,}))\1(?![\/.])/.test(n) || /\b(?:Bearer|Basic)\s+(?=[A-Za-z._~+\/=-]*[0-9]|(?:[A-Za-z0-9._~+\/=-]*?[a-z][A-Z](?![a-z])){2}|[A-Za-z0-9.-]*[_~+\/=])[A-Za-z0-9._~+\/=-]{8,}/.test(n);
}
var Ce = 8192;
function li(e) {
  return /^(?:gh[opusr]_|github_pat_|glpat-|xox[abpr]-|sk-|pk-|AKIA|eyJ|ya29\.|npm_)/.test(e) || e.length >= 20 && /[0-9]/.test(e) && /[a-z]/i.test(e);
}
function qt(e, n) {
  let r = /^([a-z0-9_-]+(?:\.[a-z0-9_-]+)*):\d+([/?#].*)$/is.exec(e);
  if (!r) return !1;
  if (/[?#&]/.test(r[2])) return !0;
  if (ui.test(n)) return !1;
  if (e.endsWith("/")) return !0;
  if (/^(?:v?\d|sha\d*:)/i.test(n)) return !0;
  return !di.test(n);
}
var ci = /^(?:[\w.-]+(?::[\w.-]+)?@sha(?:256|384|512):[0-9a-f]{32,}|npm:(?:@[\w.-]+\/)?[\w.-]+@[\w.^~<>=*|+-]*|[a-z_][\w.-]*:[\w.-]+:v?\d[\w.+\[\](),-]*@(?:jar|war|ear|aar|apk|aab|pom|zip|tar|tgz|module|klib|exe|dll|so|dylib)?)$/i,
  ui = /^(?:localhost|[a-z0-9_-]+(?:\.[a-z0-9_-]+)*\.(?=[a-z0-9-]*[a-z])[a-z0-9-]+|[a-z0-9_.-]+(?=:\d+(?:[/?#]|$))|\d{1,3}(?:\.\d{1,3}){3}|\[[0-9a-f:.]+\])(?::\d+)?(?:[/?#]|$)/i,
  di = /^(?:(?=[a-z0-9._-]*[a-z])[a-z0-9._-]+|\d{1,3}(?:\.\d{1,3}){3}|\[[0-9a-f:.]+\])(?::\d+)?(?:[/?#]|$)/i,
  eBr = /-----BEGIN [A-Z ]*PRIVATE KEY(?: BLOCK)?-----/,
  pi = /https:\/\/(?:hooks\.slack\.com\/(?:services|workflows|triggers)\/|(?:ptb\.|canary\.)?discord(?:app)?\.com\/api\/webhooks\/\d+\/|[\w.-]+\.webhook\.office\.com\/webhookb2\/)[\w\/@.~-]{16,}/i,
  gi = /(?:(?:^|[;&?#,{]|\/:)\s*|\s)["']?(?!-*jobserver-auth\s*[=:])(?:[a-z0-9_.-]{0,64}(?:password|passwd|pwd|secret|token|(?:account|access|api|private|subscription)[-_]?key|signature|sig|credential)|[a-z0-9_.-]{0,63}[_.-]auth)["']?\s*[=:]\s*["']?(?!(?:true|false|none|null|yes|no|on|off|enabled|disabled|required|optional)(?:$|[;&,\s"']))[^;&,\s"']+/i;
function fi(e) {
  let n = e.split(/\s+/).filter(Boolean),
    r = !1,
    s = n.map(item => {
      let bare = item.replace(/["']/g, ""),
        contribution = bare.replace(/^--?[\w-]+=/, ""),
        I = /(?:^|[=\s])--?X[= ]?([^\s=]+)=(.*)$/.exec(bare),
        w = I ?? (r ? /^()([^\s=-][^\s=]*)=(.*)$/.exec(bare) : null);
      if (r = /(?:^|=)--?X$/.test(bare), w === null) return {
        bare: bare,
        contribution: contribution,
        goes: /(?:^|[=\s])--?X\b/.test(bare) && !/(?:^|=)--?X$/.test(bare) || XE(contribution)
      };
      let M = w.at(-2) ?? "",
        k = M.split("/").at(-1) ?? "",
        N = w.at(-1) ?? "",
        D = I === null ? "" : bare.slice(0, I.index);
      return {
        bare: bare,
        contribution: contribution,
        goes: Pn(k, N) || XE(N) || XE(M) || D !== "" && XE(D)
      };
    });
  for (let h = 0; h < s.length; h++) for (let A = 2; A <= 4 && h + A <= s.length; A++) {
    let T = s.slice(h, h + A);
    if (T.some(item => item.goes) || T.slice(1).some(item => item.bare.startsWith("-"))) break;
    if (XE(T.map(item => item.contribution).join(" "))) {
      for (let I of T) I.goes = !0;
      break;
    }
  }
  s.forEach((item, index) => {
    if (!/(?:^|=)--?X$/.test(item.bare)) return;
    let T = s[index + 1],
      I = T === void 0 || T.goes || item.goes;
    if (item.goes = I, T !== void 0) T.goes = I;
  });
  let g = n.map(() => -1),
    S = -1,
    E = "";
  if (n.forEach((item, index) => {
    if (S === -1) {
      let T = item[0];
      if ((T === '"' || T === "'") && !(item.length > 1 && item.endsWith(T))) S = index, E = T, g[index] = S;
      return;
    }
    if (g[index] = S, item.endsWith(E)) S = -1;
  }), S !== -1) s.forEach((item, index) => {
    if (g[index] === S) item.goes = !0;
  });
  if (s.forEach((item, index) => {
    if (item.goes && g[index] !== -1) s.forEach((item, I) => {
      if (g[I] === g[index]) item.goes = !0;
    });
  }), s.every(item => !item.goes)) return e;
  return n.filter((item, index) => !s[index].goes && (g[index] !== -1 || fn.test(item))).join(" ");
}
var _i = ["LD_", "DYLD_", "BASH_FUNC_", "__BASH_FUNC<", "PYTHON", "PERL5", "RUBY", "LUA_", "DOTNET_", "COMPLUS_", "COR_", "CORECLR_", "APPDOMAIN_MANAGER_", "GIT_"],
  mi = new Set(["NODE_OPTIONS", "NODE_PATH", "BASH_ENV", "ENV", "SHELLOPTS", "BASHOPTS", "PS4", "PERLLIB", "GEM_PATH", "GEM_HOME", "JAVA_TOOL_OPTIONS", "_JAVA_OPTIONS", "JDK_JAVA_OPTIONS", "IBM_JAVA_OPTIONS", "OPENJ9_JAVA_OPTIONS", "CLASSPATH", "BUN_OPTIONS", "MONO_PATH", "R_PROFILE_USER", "DEVPATH", "GCONV_PATH", "OPENSSL_CONF", "OPENSSL_MODULES", "OPENSSL_ENGINES", "KRB5_CONFIG", "GTK_PATH", "QT_PLUGIN_PATH", "GIO_MODULE_DIR", "FPATH", "IFS", "CDPATH", "SSH_ASKPASS", "SSH_ASKPASS_REQUIRE", "SASL_PATH", "PHPRC", "PHP_INI_SCAN_DIR", "PATH", "COMSPEC", "ZDOTDIR", "XDG_CONFIG_HOME", "PSMODULEPATH", "SYSTEMROOT", "WINDIR", "SYSTEMDRIVE", "PATHEXT"]),
  Si = "/usr/bin:/bin:/usr/sbin:/sbin",
  Ei = "C:\\Windows\\System32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0",
  hi = "C:\\Windows\\System32\\cmd.exe",
  yi = "C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\Modules",
  Pi = ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC",
  be = "/var/empty/claude-code-policy-helper",
  Ri = "C:\\Windows\\claude-code-policy-helper";
function Ai(e) {
  let n = e.toUpperCase();
  return mi.has(n) || _i.some(item => n.startsWith(item));
}
function On(e, n) {
  let r = {
      ...e
    },
    s = new Set(F$e(e).map(item => item.toUpperCase()));
  for (let g of Object.keys(r)) if (Ai(g) || s.has(g.toUpperCase())) delete r[g];
  if (Object.assign(r, pAe(r).respelled), r.PYTHONNOUSERSITE = "1", r.GIT_CONFIG_NOSYSTEM = "1", n === "win32") r.GIT_CONFIG_GLOBAL = Ri, r.PATH = Ei, r.COMSPEC = hi, r.PSModulePath = yi, r.PATHEXT = Pi, r.SystemRoot = "C:\\Windows", r.windir = "C:\\Windows", r.SystemDrive = "C:";else r.GIT_CONFIG_GLOBAL = be, r.PATH = Si, r.ZDOTDIR = be, r.XDG_CONFIG_HOME = be, r.PSModulePath = be;
  return r;
}
var Ti = 1e4,
  Le = 1048576,
  Ii = f(() => ut({
    managedSettings: ae().optional(),
    claudeMd: o().optional(),
    appendSystemPrompt: o().optional()
  }));
function ve(message) {
  return {
    message: message,
    remote: null
  };
}
var tBr = "<policyHelper>";
function ie() {
  let e = dl();
  if (H() && e.primer !== void 0) e.invalidatePolicyLayer();else Ss();
}
class Ln {
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
  startsNoSession = !1;
  decidedOrigin = null;
  pendingStats = new Map();
  remoteArmGeneration = 0;
  remoteArmingConfig = null;
  remoteFailedConfig = null;
  lastFailure = null;
  selectedEntry = null;
  releaseLatchWhenTickSettles = !1;
  readRemotePayload = null;
  armedFromUserWritableBase = !1;
  retiredHelperPaths = new Set();
  remoteDecision = null;
  refreshed = Me();
  claimInitialize() {
    if (this.initializeAttempted) return !1;
    return this.initializeAttempted = !0, !0;
  }
  apply(e) {
    if (this.state = e, this.remoteFailedConfig = null, this.lastFailure = null, ie(), e.config) this.startRefreshTimer(e.config, e.fromPerOs, e.armedFromRemote);else this.stopRefreshTimer();
  }
  retireState() {
    let e = this.state?.config?.path;
    if (e !== void 0) this.retiredHelperPaths.add(e);
    this.state = null, this.lastFailure = null, this.selectedEntry = null;
  }
  reset() {
    this.remoteArmGeneration++, this.remoteArmingConfig = null, this.armedFromUserWritableBase = !1, this.remoteDecision = null, this.state = null, this.retiredHelperPaths.clear(), this.selectionWarnings = [], this.initializeAttempted = !1, this.structuralRefusalLogged = !1, this.noEntrySadLogged = !1, this.defaultFallback = null, this.payloadRefusalError = null, this.refreshInFlight = !1, this.midSessionArmingEnabled = !1, this.osAdminArming = null, this.decidedOrigin = null, this.remoteFailedConfig = null, this.lastFailure = null, this.selectedEntry = null, this.releaseLatchWhenTickSettles = !1, this.readRemotePayload = null, this.stopRefreshTimer(), ie();
  }
  announceTierChange() {
    ie();
    try {
      dl().changed.emit("policySettings"), this.refreshed.emit();
    } catch (error) {
      d(error);
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
    if (this.initializeAttempted = !1, this.readRemotePayload !== null) N3n(this.readRemotePayload);
  }
  startRefreshTimer(e, n, r) {
    this.stopRefreshTimer();
    let s = e.refreshIntervalMs ?? 0;
    if (s <= 0) return;
    this.refreshTimer = setInterval((g, S, E) => {
      if (this.refreshInFlight) return;
      if (this.refreshInFlight = !0, E && this.state === null) {
        Di(g, S).finally(() => this.settleRefreshExec());
        return;
      }
      let state = this.state;
      St(g, S, E, () => this.state === state).then(A => {
        if (this.state === null || this.state !== state) return;
        let T = E && De(g) || g;
        if ("error" in A) {
          if (this.defaultFallback) {
            let I = `the static ${this.defaultFallback.sourceField} settings payload governs`;
            if (this.state.serving === "default") {
              if (t(`policyHelper refresh: helper still failing (${A.error}); the static default settings payload continues to govern`, {
                level: "debug"
              }), ot(A.error, I, S), this.lastFailure !== A.code) this.lastFailure = A.code, this.announceTierChange();
              return;
            }
            t(`policyHelper refresh failed (${A.error}); applying the static ${this.defaultFallback.sourceField} settings payload`, {
              level: "warn"
            }), ot(A.error, I, S), p("settings_policy_helpers_per_os", "refresh_fell_back_to_default"), this.state.serving = "default", this.lastFailure = A.code, this.state.mergesOutput = lt(T, this.defaultFallback), this.state.output = {
              managedSettings: Fe(this.defaultFallback.settings, E, Bv())
            }, this.state.warnings = this.defaultFallback.warnings, this.announceTierChange();
            return;
          }
          if (t(`policyHelper refresh failed (retaining current policy): ${A.error}`, {
            level: "warn"
          }), ot(A.error, "the last successful helper output still governs", S), p("settings_policy_helper", "refresh_failed", {
            attempts: A.attempts
          }), this.lastFailure !== A.code) this.lastFailure = A.code, this.announceTierChange();
          return;
        }
        if (ft(), this.state.serving === "default") t("policyHelper refresh: helper recovered; its output replaces the static default settings payload", {
          level: "info"
        }), _("settings_policy_helpers_per_os");
        this.state.serving = "helper", this.lastFailure = null, this.state.mergesOutput = T.outputBehavior === "merge", this.state.output = A.output, this.state.warnings = A.warnings, this.announceTierChange();
      }).catch(A => {
        d(A);
      }).finally(() => this.settleRefreshExec());
    }, Math.min(s, L6n), e, n, r), this.refreshTimer.unref?.();
  }
}
var R = new Ln(),
  Rl = rre({
    clear: clear
  }),
  refreshed = R.refreshed,
  vn = new Set(["plist", "hklm", "file"]);
async function Dpt(e, n, r) {
  let s = await Mn(e, n, r);
  if (s === null) return null;
  if (s.remote) {
    if (R.startsNoSession) return Hn(s.message, s.remote), null;
    Dn(s.remote);
  }
  return s.message;
}
function aHo() {
  R.startsNoSession = !0;
}
function Hn(e, n) {
  t(`policyHelper: ${e} (reached in a command that starts no session; it proceeds without the helper)`, {
    level: "error"
  }), ne('onFailure is "refuse", but this command starts no Claude Code session, so it proceeds without the helper; sessions will not start until the helper succeeds', n.tuple), p("settings_policy_helpers_per_os", "remote_refuse_not_enforced_no_session");
}
function Dn(e) {
  m("settings_policy_helpers_per_os", e.code, e.helperFailureReason === void 0 ? void 0 : {
    helper_failure_reason: c(e.helperFailureReason)
  });
}
function wn(e) {
  return e.find(item => item.startupFatal && (item.path === "" || item.path === "policyHelpers" || item.path.startsWith("policyHelpers.")));
}
function nBr(e) {
  let n = wn(e);
  if (n) return jN.some(item => n.path === `policyHelpers.${item}`) ? "helper_failed" : "policy_invalid";
  return R.payloadRefusalError !== null ? "policy_invalid" : "helper_failed";
}
async function Mn(e, n, r) {
  let s = wn(r);
  if (s) {
    if (!R.structuralRefusalLogged) {
      R.structuralRefusalLogged = !0;
      let N = s.path;
      m("settings_policy_helpers_per_os", N === "" ? "document_invalid" : N === "policyHelpers" ? "structural_invalid" : N === "policyHelpers.default" || N.endsWith(".defaultSettings") ? "default_payload_invalid" : "entry_invalid");
    }
    return ve(`${s.file ?? "managed settings"}: ${s.message}`);
  }
  if (R.payloadRefusalError !== null) return ve(R.payloadRefusalError);
  if (!R.claimInitialize()) return null;
  R.decidedOrigin = n, Wn(), R.remoteDecision = null, R.selectedEntry = null, se(Bn), se(st);
  let g = e?.policyHelpers,
    armedFromRemote = n === "remote" && qn(e),
    E = armedFromRemote ? _t(e) : null,
    tuple = E?.tuple,
    A = armedFromRemote ? void 0 : e?.policyHelper;
  if (!g && !A) {
    if (Lne() === !0 && !JE()) t("policyHelper: no helper configuration present at helper-pass time (remote managed settings eligible, no payload in cache); a payload landing later arms one only through a fetch cycle after preAction", {
      level: "debug"
    });
    return R.initializeAttempted = !1, null;
  }
  if (E) {
    if (R.remoteDecision = E, !E.verified && tuple !== void 0) return R.initializeAttempted = !1, ne("remote settings not verified this session", tuple), null;
  } else if (n === "remote" && g) return t("remote policyHelpers names no helper and carries no static payload for this platform", {
    level: "debug"
  }), R.initializeAttempted = !1, null;else if (n === null || !vn.has(n)) {
    if (t(`policyHelper ignored: delivered via non-admin source '${n ?? "unknown"}'`, {
      level: "warn"
    }), n === "remote") R.initializeAttempted = !1;
    return null;
  }
  R.armedFromUserWritableBase = n === "plist" && dY().userWritable === !0;
  let T = g ? One() : null,
    I = null;
  if (E) at(E);else I = Li(g, T?.chain ?? []);
  if (I) return R.payloadRefusalError = I, ve(I);
  let w = Hi(g, A, T, armedFromRemote);
  if (!w) return R.initializeAttempted = !1, null;
  if (R.selectedEntry = w.kind === "helper" ? {
    key: w.entryKey,
    config: w.config
  } : {
    key: jN.find(item => w.fallback.sourceField === `policyHelpers.${item}.defaultSettings`) ?? "default",
    config: null
  }, w.kind === "default") {
    if (E && !E.payloadServable) {
      if (R.initializeAttempted = !1, ne(E.verified ? `${w.fallback.sourceField} carries settings not yet approved in the managed-settings dialog; it is not applied until they are` : `${w.fallback.sourceField} carries settings the managed-settings dialog lists and remote settings are not verified this session; it is not applied until they are`, void 0), E.verified) p("settings_policy_helpers_per_os", "remote_consent_missing");
      return null;
    }
    return p("settings_policy_helpers_per_os", "fell_back_to_default"), t(`policyHelper: no policyHelpers helper entry for platform "${T?.platform ?? "unknown"}"; applying the static ${w.fallback.sourceField} settings payload`, {
      level: "info"
    }), it(null, w.fallback.mergesOutput, armedFromRemote), null;
  }
  let defaultFallback = R.defaultFallback,
    k = Un(w.fromPerOs ? w.config : null, armedFromRemote);
  if (E && !E.helperMayExec) {
    if (defaultFallback && E.payloadServable) return it(null, lt(w.config, defaultFallback), !0), ne(`not yet approved in the managed-settings dialog; the static ${defaultFallback.sourceField} settings payload governs until it is`, tuple), p("settings_policy_helpers_per_os", "remote_consent_missing"), null;
    if (R.initializeAttempted = !1, ne(defaultFallback ? `not yet approved in the managed-settings dialog, and neither are settings the static ${defaultFallback.sourceField} payload carries; nothing from the entry applies until they are` : "not yet approved in the managed-settings dialog", tuple), k) return {
      message: `Claude Code cannot start: your organization's remote managed settings require the policy helper ${kn(tuple)} to succeed (onFailure "refuse"), and it cannot run until those settings are approved in the managed-settings dialog. Contact your administrator.`,
      remote: {
        code: "remote_refused_on_failure",
        helperFailureReason: void 0,
        tuple: tuple
      }
    };
    return p("settings_policy_helpers_per_os", "remote_consent_missing"), null;
  }
  try {
    if (w.fromPerOs) {
      if ((await In(w, {
        armedFromRemote: armedFromRemote,
        suppressExecEvents: armedFromRemote || defaultFallback !== null
      })) === "applied") _("settings_policy_helpers_per_os");
    } else await In(w);
  } catch (error) {
    let defaultFallback_2 = R.defaultFallback,
      x = armedFromRemote ? R.remoteDecision?.helperRefusesOnFailure ?? k : k;
    if (w.fromPerOs && !defaultFallback_2) if (!(error instanceof xe)) m("settings_policy_helpers_per_os", "error");else if (armedFromRemote && x) ;else if (!armedFromRemote && !k) m("settings_policy_helpers_per_os", "continued_on_failure", {
      helper_failure_reason: c(error.code)
    });else m("settings_policy_helpers_per_os", error.code);
    if (error instanceof xe) {
      if (defaultFallback_2) return t(`${error.message}; applying the static ${defaultFallback_2.sourceField} settings payload instead`, {
        level: "warn"
      }), p("settings_policy_helpers_per_os", "fell_back_to_default_on_failure"), it(error.code === "bad_path" ? null : w, lt(w.config, defaultFallback_2), armedFromRemote), R.lastFailure = error.code, null;
      if (R.lastFailure = error.code, armedFromRemote) return ne(error.message, tuple), R.holdRemoteFailure(w, error.code !== "bad_path"), x ? Ni(error, tuple) : null;
      if (!k) return Ci(error.message), null;
      return ve(error.message);
    }
    throw error;
  }
  return null;
}
function Un(e, n) {
  let r = e?.onFailure;
  return r == null ? !n : r !== "continue";
}
function Ni(e, tuple_2) {
  return {
    message: `Claude Code cannot start: your organization's remote managed settings require the policy helper ${kn(tuple_2)} to succeed (onFailure "refuse"), and it failed [${e.code}] \u2014 ${e.message}. Contact your administrator.`,
    remote: {
      code: "remote_refused_on_failure",
      helperFailureReason: e.code,
      tuple: tuple_2
    }
  };
}
function kn(e) {
  return (e === void 0 ? void 0 : H6n(e)) ?? "it configures";
}
var st = 'policyHelpers entry skipped (onFailure "continue"): ',
  Tn = "; Claude Code started without the helper's output";
function Ci(e) {
  let n = Ue(m8e(e.replace(/\s+/gu, " ")), dt - st.length - Tn.length);
  gt(`${st}${n}${Tn}`);
}
var $n = "remote policyHelpers entry not run: ",
  Gn = "remote policyHelpers static settings payload not applied: ",
  dt = 512;
function Ue(e, n = dt) {
  return e.length > n ? `${e.slice(0, n - 1)}\u2026` : e;
}
function ne(e, n) {
  let r = m8e(e.replace(/\s+/gu, " ")),
    s = n === void 0 ? void 0 : H6n(n),
    g = Ue(n === void 0 ? `${Gn}${r}` : `${$n}${s ? `${s}: ` : ""}${r}`);
  gt(g);
}
var pt = "remote policyHelpers static settings payload skipped: ";
function bi(e, n, r) {
  if (gt(Ue(`${pt}${e} is not a valid static settings payload (${m8e(n.replace(/\s+/gu, " "))})`)), r) p("settings_policy_helpers_per_os", "remote_default_payload_invalid");
}
function gt(message_2) {
  R.selectionWarnings.push({
    file: "policyHelper",
    path: "policyHelpers",
    message: message_2,
    severity: "warning",
    statusOnly: !0
  }), ie(), t(message_2, {
    level: "warn"
  });
}
function Wn() {
  Kn(), se(pt);
}
function Kn() {
  se($n), se(Gn), R.retireRemoteFailure();
}
var He = "policyHelper refresh failing: ";
function ot(e, n, r) {
  let s = `; ${n}`,
    g = Ue(m8e(e.replace(/\s+/gu, " ")), dt - He.length - s.length),
    message_3 = `${He}${g}${s}`;
  if (R.selectionWarnings.some(item => item.message === message_3)) return;
  let E = R.selectionWarnings.filter(item => !item.message.startsWith(He)),
    h = E.length !== R.selectionWarnings.length;
  if (R.selectionWarnings = [...E, {
    file: "policyHelper",
    path: r ? "policyHelpers" : "policyHelper",
    message: message_3,
    severity: "warning",
    statusOnly: !0
  }], !h) ie();
}
function ft() {
  se(He);
}
var Bn = "policyHelpers is configured but has no entry for platform ";
function se(e) {
  let n = R.selectionWarnings.filter(item => !item.message.startsWith(e));
  if (n.length === R.selectionWarnings.length) return;
  R.selectionWarnings = n, ie();
}
function jn(e, n) {
  let r = W6n(e, n);
  for (let s of r.strippedKeys) t(`${n}: stripped ${s} from the settings payload (no recursion)`, {
    level: "warn"
  });
  for (let s of r.warnings) t(`${n}: ${s.message}`, {
    level: "warn"
  });
  return r;
}
function zn(e, n) {
  let r = [];
  for (let s of n) {
    let g = e[s],
      raw = g?.defaultSettings;
    if (raw !== void 0 && raw !== null) r.push({
      field: `policyHelpers.${s}.defaultSettings`,
      raw: raw,
      onChain: !0,
      mergesOutput: g?.outputBehavior === "merge"
    });
  }
  for (let s of jN) {
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
function Yn(e, n) {
  if (e.raw !== null && typeof e.raw === "object" && !Array.isArray(e.raw)) {
    let {
        policyHelper: policyHelper,
        policyHelpers: policyHelpers,
        ...S
      } = e.raw,
      E = iUe().safeParse(S);
    if (!E.success) return {
      error: E.error.issues[0]?.message ?? "failed validation"
    };
  }
  let r = n ? jn(e.raw, e.field) : W6n(e.raw, e.field);
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
function Li(e, n) {
  if (R.defaultFallback = null, !e) return null;
  let r = null;
  for (let s of zn(e, n)) {
    let g = Yn(s, s.onChain && !r);
    if ("error" in g) return m("settings_policy_helpers_per_os", "default_payload_invalid"), `${s.field} is not a valid static settings payload (${g.error}); Claude Code will not start until it is fixed`;
    if (s.onChain && !r) r = g;
  }
  return R.defaultFallback = r, null;
}
function Jn(e) {
  let winner = null,
    skipped = [];
  for (let s of e) {
    let g = Yn(s, !1);
    if ("error" in g) skipped.push({
      field: s.field,
      error: g.error
    });else if (!winner) winner = {
      ...g,
      warnings: fUe(g.warnings)
    };
  }
  return {
    winner: winner,
    skipped: skipped
  };
}
function at(e) {
  se(pt), R.defaultFallback = e.winner;
  for (let {
    field: field,
    error: error_3
  } of e.skipped) bi(field, error_3, e.verified);
}
function Xn(e, n) {
  return SFo(MD(e), n.sourceField) || SY(MD(n.settings));
}
function Zn(e) {
  let n = e?.policyHelpers;
  return n ? zn(n, One().chain).filter(item => item.onChain) : [];
}
function lHo(e) {
  if (vi(e) !== void 0) return !0;
  let {
    winner: winner_2
  } = Jn(Zn(e));
  return winner_2 !== null && Xn(e, winner_2);
}
function Fe(e, n, r) {
  return n && !r ? Z1r(e) : e;
}
function _t(e) {
  let verified = Bv(),
    r = uft(),
    s = e?.policyHelpers,
    g = s ? Ee(s, One().chain, !0)?.config ?? null : null,
    tuple_3 = cft(g),
    E = Zn(e),
    {
      winner: winner_3,
      skipped: skipped_2
    } = Jn(E);
  return {
    verified: verified,
    tuple: tuple_3,
    helperMayExec: tuple_3 !== void 0 && r,
    helperMergesOutput: g?.outputBehavior === "merge",
    helperRefusesOnFailure: Un(g, !0),
    payloadKey: b($I(E.map(item => [item.field, item.raw, item.mergesOutput]))),
    winner: winner_3,
    skipped: skipped_2,
    payloadServable: winner_3 !== null && (r || !Xn(e, winner_3) && (verified || tuple_3 === void 0))
  };
}
function Qn(e, n) {
  return e.verified === n.verified && e.tuple === n.tuple && e.helperMayExec === n.helperMayExec && e.helperMergesOutput === n.helperMergesOutput && e.helperRefusesOnFailure === n.helperRefusesOnFailure && e.payloadKey === n.payloadKey && e.payloadServable === n.payloadServable;
}
function lt(e, n) {
  return e.outputBehavior === "merge" || n?.mergesOutput === !0;
}
function it(e, mergesOutput, armedFromRemote_2) {
  let defaultFallback_3 = R.defaultFallback;
  if (!defaultFallback_3) return;
  let g = Bv();
  R.apply({
    config: e?.config ?? null,
    fromPerOs: e?.fromPerOs ?? !1,
    serving: "default",
    armedFromRemote: armedFromRemote_2,
    mergesOutput: mergesOutput,
    output: {
      managedSettings: Fe(defaultFallback_3.settings, armedFromRemote_2, g)
    },
    warnings: defaultFallback_3.warnings
  }), t(`${defaultFallback_3.sourceField} static settings payload applied${armedFromRemote_2 ? ` from remote managed settings${g ? "" : " (cached, not yet verified this session)"}` : ""} (keys: ${Object.keys(defaultFallback_3.settings).join(",")})`, {
    level: "debug"
  });
}
function qn(e) {
  let n = e?.policyHelpers;
  if (!n) return !1;
  let chain = One().chain;
  return Ee(n, chain, !0) !== null || n.default !== void 0 && n.default !== null || chain.some(item => {
    let g = n[item]?.defaultSettings;
    return g !== void 0 && g !== null;
  });
}
function Ee(e, n, r) {
  for (let osKey of n) {
    let g = e[osKey];
    if (g == null) continue;
    if (r ? cft(g) !== void 0 : g.path != null || g.script != null) {
      let {
        defaultSettings: defaultSettings,
        ...config_2
      } = g;
      return {
        osKey: osKey,
        config: config_2
      };
    }
  }
  return null;
}
function vi(e) {
  let n = e?.policyHelpers;
  return n ? cft(Ee(n, One().chain, !0)?.config ?? null) : void 0;
}
function Hi(e, config_3, r, s) {
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
    E = Ee(e, chain_2, s);
  if (E) return {
    kind: "helper",
    entryKey: E.osKey,
    config: E.config,
    fromPerOs: !0
  };
  let h = R.defaultFallback;
  if (h) return {
    kind: "default",
    fallback: h
  };
  if (config_3) return p("settings_policy_helpers_per_os", "fell_back_to_singular"), {
    kind: "helper",
    entryKey: "policyHelper",
    config: config_3,
    fromPerOs: !1
  };
  if (s) return null;
  let message_4 = `${Bn}"${platform}", no default settings payload, and no policyHelper fallback; no policy helper will run`;
  if (R.selectionWarnings.push({
    file: "policyHelper",
    path: "policyHelpers",
    message: message_4,
    severity: "warning",
    statusOnly: !0
  }), ie(), t(message_4, {
    level: "warn"
  }), !R.noEntrySadLogged) R.noEntrySadLogged = !0, p("settings_policy_helpers_per_os", "no_entry_for_platform");
  return null;
}
class xe extends Error {
  code;
  constructor(e, n) {
    super(n);
    this.code = e;
  }
}
async function In({
  config: config_4,
  fromPerOs: fromPerOs_2
}, r) {
  let armedFromRemote_3 = r?.armedFromRemote === !0,
    remoteArmGeneration = R.remoteArmGeneration;
  if (armedFromRemote_3) R.remoteArmingConfig = config_4;
  let S;
  try {
    S = await St(config_4, fromPerOs_2, armedFromRemote_3, () => !armedFromRemote_3 || R.remoteArmGeneration === remoteArmGeneration);
  } finally {
    if (R.remoteArmingConfig === config_4) R.remoteArmingConfig = null;
  }
  if (armedFromRemote_3 && R.remoteArmGeneration !== remoteArmGeneration) {
    if (config_4.path !== void 0 && !("error" in S && S.code === "bad_path")) R.retiredHelperPaths.add(config_4.path);
    return t("policyHelper: remote arming revoked during exec; discarding output", {
      level: "warn"
    }), p("settings_policy_helpers_per_os", "deactivated_during_exec"), R.releaseLatchAfterTornDownExec(), "dropped";
  }
  if ("error" in S) {
    if (!r?.suppressExecEvents) m("settings_policy_helper", S.code, {
      attempts: S.attempts
    });
    throw new xe(S.code, `policyHelper failed: ${S.error}`);
  }
  if (R.apply({
    config: config_4,
    fromPerOs: fromPerOs_2,
    serving: "helper",
    armedFromRemote: armedFromRemote_3,
    mergesOutput: config_4.outputBehavior === "merge",
    output: S.output,
    warnings: S.warnings
  }), t(`policyHelper applied (keys: ${Object.keys(S.output).join(",")})`, {
    level: "debug"
  }), !r?.suppressExecEvents) _("settings_policy_helper", {
    attempts: S.attempts
  });
  return "applied";
}
function er() {
  return R.state?.output.managedSettings ?? null;
}
function tr() {
  let state_2 = R.state;
  return state_2 && !state_2.armedFromRemote ? state_2.output : void 0;
}
function Qfn() {
  return tr()?.claudeMd ?? null;
}
function cHo() {
  return tr()?.appendSystemPrompt ?? null;
}
function N5e() {
  return R.state !== null;
}
function dHo() {
  return R.initializeAttempted;
}
function nr() {
  return R.state?.armedFromRemote === !0;
}
function j$t() {
  return R.state !== null && R.armedFromUserWritableBase;
}
function rr() {
  return R.state?.mergesOutput === !0;
}
function uHo(e) {
  if (e !== "remote" || !R.initializeAttempted || R.state?.armedFromRemote === !0) return;
  ft(), R.stopRefreshTimer();
  let n = R.state !== null;
  if (R.retireState(), R.defaultFallback = null, R.payloadRefusalError = null, R.remoteFailedConfig = null, R.initializeAttempted = !1, !n) return;
  t("policyHelper: OS-admin helper pass retired; the remote payload that landed shadows the MDM/file policy it was read from", {
    level: "info"
  }), p("settings_policy_helper", "retired_shadowed_by_remote"), R.announceTierChange();
}
function Se() {
  if (R.remoteArmGeneration++, Wn(), R.remoteDecision !== null) R.defaultFallback = null, R.remoteDecision = null, R.selectedEntry = null;
  if (R.state?.armedFromRemote !== !0) return;
  ft(), R.stopRefreshTimer(), R.retireState(), R.releaseLatch(), t("policyHelper: remote-armed helper (or remote static payload) deactivated", {
    level: "info"
  }), R.announceTierChange();
}
q1r(Se);
function De(e) {
  let readRemotePayload = R.readRemotePayload;
  if (readRemotePayload === null || !uft()) return null;
  let r = readRemotePayload()?.policyHelpers,
    s = r ? Ee(r, One().chain, !0)?.config ?? null : null;
  return s !== null && cft(s) === cft(e) ? s : null;
}
async function Di(e, fromPerOs_3) {
  try {
    if (De(e) === null) {
      t("policyHelper: remote retry stopped; the payload in force no longer authorizes the entry", {
        level: "info"
      }), Se();
      return;
    }
    let remoteArmGeneration_2 = R.remoteArmGeneration;
    R.remoteArmingConfig = e;
    let s;
    try {
      s = await St(e, fromPerOs_3, !0, () => R.remoteArmGeneration === remoteArmGeneration_2 && De(e) !== null);
    } finally {
      if (R.remoteArmingConfig === e) R.remoteArmingConfig = null;
    }
    let g = R.remoteArmGeneration !== remoteArmGeneration_2,
      S = g ? null : De(e);
    if (S === null) {
      if (!g) Se();
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
      outputBehavior: S.outputBehavior
    };
    R.apply({
      config: config_5,
      fromPerOs: fromPerOs_3,
      serving: "helper",
      armedFromRemote: !0,
      mergesOutput: config_5.outputBehavior === "merge",
      output: s.output,
      warnings: s.warnings
    }), Kn(), t("policyHelper: remote entry armed by a retry tick", {
      level: "info"
    }), _("settings_policy_helpers_per_os"), R.announceTierChange();
  } catch (error) {
    d(error);
  }
}
function pHo(e) {
  R.midSessionArmingEnabled = !0, R.osAdminArming = e ?? null;
}
function N3n(e) {
  Fi(e), wi();
}
function wi() {
  let osAdminArming = R.osAdminArming;
  if (osAdminArming === null || !R.midSessionArmingEnabled || R.initializeAttempted || !osAdminArming.baseSettled()) return;
  let {
    settings: settings_3,
    origin: origin,
    loadErrors: loadErrors
  } = osAdminArming.readBase();
  if (origin === null || !vn.has(origin) || origin === R.decidedOrigin) return;
  Dpt(settings_3, origin, loadErrors).then(g => {
    if (g !== null) {
      t(`policyHelper: the ${origin} source became the base mid-session and its pass refused; exiting as the launch would have: ${g}`, {
        level: "error"
      }), osAdminArming.refuse(g), R.decidedOrigin = origin;
      return;
    }
    if (R.state === null) return;
    t(`policyHelper: armed from the ${origin} source, which became the base mid-session`, {
      level: "info"
    }), R.announceTierChange();
  }).catch(g => {
    d(g);
  });
}
function Fi(e) {
  if (R.readRemotePayload = e, !R.midSessionArmingEnabled || R.initializeAttempted || !Bv()) return;
  let n = e();
  if (!qn(n)) return;
  let remoteDecision = R.remoteDecision;
  if (remoteDecision !== null && Qn(remoteDecision, _t(n))) return;
  let s = R.retiredHelperPaths.size,
    remoteFailedConfig = R.remoteFailedConfig;
  Mn(n, "remote", []).then(S => {
    if (S === null) return;
    if (S.remote && R.startsNoSession) {
      Hn(S.message, S.remote);
      return;
    }
    let osAdminArming_2 = R.osAdminArming;
    if (osAdminArming_2 !== null && (!yu() || osAdminArming_2.isUnwatchedRepl())) {
      if (t(`policyHelper: ${S.message} (reached after this unwatched session started; ending it as the launch refusal would have)`, {
        level: "error"
      }), S.remote) Dn(S.remote);
      osAdminArming_2.refuse(S.message), R.midSessionArmingEnabled = !1;
      return;
    }
    if (t(`policyHelper: ${S.message} (reached after this interactive session started; it continues without the helper)`, {
      level: "error"
    }), S.remote) ne('onFailure is "refuse", but this was reached after this interactive session started, so it continues on the remote managed settings without the helper; new sessions will not start (and non-interactive or unwatched ones are ended) until the helper succeeds', S.remote.tuple), p("settings_policy_helpers_per_os", "remote_refuse_unenforceable_midsession");
  }).catch(S => {
    d(S);
  }).finally(() => {
    let S = R.state?.armedFromRemote === !0;
    if (S) t(`policyHelper: remote ${R.state?.serving === "default" ? "static payload applied" : "entry armed"} mid-session`, {
      level: "info"
    });
    if (S || R.retiredHelperPaths.size > s || R.remoteFailedConfig !== remoteFailedConfig) R.announceTierChange();
  });
}
function fHo(e) {
  let remoteDecision_2 = R.remoteDecision;
  if (remoteDecision_2 === null) return;
  let r = e(),
    s = _t(r);
  if (Qn(remoteDecision_2, s)) return;
  let state_3 = R.state;
  if (state_3?.armedFromRemote === !0 && state_3.serving === "default") {
    let A = s.tuple === remoteDecision_2.tuple && s.helperMayExec === remoteDecision_2.helperMayExec,
      winner_4 = s.winner;
    if (A && s.payloadServable && winner_4 !== null) {
      at(s), R.remoteDecision = s;
      let managedSettings = Fe(winner_4.settings, !0, s.verified);
      if (s.payloadKey === remoteDecision_2.payloadKey && s.helperMergesOutput === remoteDecision_2.helperMergesOutput && Fe(winner_4.settings, !0, remoteDecision_2.verified) === managedSettings) {
        t(`policyHelper: remote static payload from ${winner_4.sourceField} stands as served (document ${s.verified ? "verified" : "no longer verified"} this session)`, {
          level: "debug"
        });
        return;
      }
      state_3.mergesOutput = s.helperMergesOutput || winner_4.mergesOutput, state_3.output = {
        managedSettings: managedSettings
      }, state_3.warnings = winner_4.warnings, t(`policyHelper: remote static payload re-served in place from ${winner_4.sourceField}`, {
        level: "info"
      }), R.announceTierChange();
      return;
    }
    Se();
    return;
  }
  let S = state_3?.armedFromRemote === !0 ? state_3.config : R.remoteArmingConfig ?? R.remoteFailedConfig,
    E = S != null && s.helperMayExec && s.tuple === cft(S),
    h = state_3 !== null || R.remoteFailedConfig === null;
  if (E && h) {
    at(s), R.remoteDecision = s, t("policyHelper: remote static payloads re-resolved under the armed entry; the arm stands", {
      level: "debug"
    });
    return;
  }
  Se();
}
function mHo() {
  return R.state?.config?.path ?? null;
}
function gHo() {
  return [...R.retiredHelperPaths];
}
function hHo(e) {
  let n = e?.policyHelpers,
    r = n ? One().chain.map(item => n[item]).filter(item => item != null).map(S => ({
      config: S,
      fromPerOs: !0
    })) : [];
  if (e?.policyHelper != null) r.push({
    config: e.policyHelper,
    fromPerOs: !1
  });
  let s = ir(),
    g = [];
  for (let {
    config: config_6,
    fromPerOs: fromPerOs_4
  } of r) if (typeof config_6.path === "string" && sr(config_6, s, fromPerOs_4, !1) === null) g.push(config_6.path);
  return g;
}
function yHo() {
  return R.state?.serving === "default";
}
function _Ho() {
  let {
      state: state_4,
      lastFailure: lastFailure,
      selectedEntry: selectedEntry,
      remoteFailedConfig: remoteFailedConfig_2
    } = R,
    remoteDecision_3 = R.remoteDecision,
    S = selectedEntry?.config ?? null,
    state_5 = "none";
  if (remoteDecision_3?.helperRefusesOnFailure === !0 && (remoteFailedConfig_2 !== null || remoteDecision_3.verified && remoteDecision_3.tuple !== void 0 && !remoteDecision_3.helperMayExec)) state_5 = "refuse_pending";else if (lastFailure !== null) state_5 = lastFailure;else if (remoteDecision_3 !== null && !remoteDecision_3.verified && (remoteDecision_3.tuple !== void 0 || !remoteDecision_3.payloadServable)) state_5 = "unverified";else if (remoteDecision_3 !== null && (S !== null && !remoteDecision_3.helperMayExec || selectedEntry !== null && S === null && !remoteDecision_3.payloadServable)) state_5 = "consent_missing";else if (S !== null && state_4?.serving === "helper") state_5 = "ok";
  return {
    state: state_5,
    applied: state_4 === null ? "none" : state_4.serving === "helper" ? "output" : "fallback",
    entry: selectedEntry && {
      key: selectedEntry.key,
      ...(S?.path !== void 0 && {
        path: S.path
      }),
      ...(S?.script !== void 0 && selectedEntry.key !== "policyHelper" && {
        script: S.script
      })
    }
  };
}
function mt() {
  return [...R.selectionWarnings, ...(R.state?.warnings ?? [])];
}
function clear() {
  R.reset(), R.startsNoSession = !1;
}
var or = null;
function bHo(e) {
  or = e;
}
var baseMs = 500,
  floorMs = 250,
  capMs = 4000;
function $i(e) {
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
var Nn = 2048;
function Gi(e) {
  let n = D_(e);
  if (n.length <= Nn) return n;
  let r = re(n, Nn);
  return `${r}\u2026 (+${n.length - r.length} chars not shown; the full output is in the debug log)`;
}
async function St(e, n, r, s) {
  let g = n ? e.retries : void 0,
    S = g !== void 0 && Number.isInteger(g) && g > 0 ? Math.min(g, F1r) : 0;
  for (let attempts = 1;; attempts++) {
    let h = await Wi(e, n, r);
    if (!("error" in h)) return {
      ...h,
      attempts: attempts
    };
    let A = Gi(h.error),
      T = {
        error: attempts > 1 ? `after ${attempts} attempts: ${A}` : A,
        code: h.code,
        attempts: attempts
      };
    if (attempts > S || !$i(h.code) || !s()) return T;
    let I = e5({
      baseMs: baseMs,
      floorMs: floorMs,
      capMs: capMs,
      attempt: attempts - 1
    });
    if (t(`policyHelper attempt ${attempts} of ${S + 1} failed [${h.code}]; retrying in ${I}ms: ${A}`, {
      level: "warn"
    }), await Q(I), !s()) return T;
  }
}
async function Wi(e, n, r) {
  let s = ir(),
    error_4 = sr(e, s, n, r);
  if (error_4) return {
    error: error_4,
    code: "bad_path"
  };
  let S = jt(e);
  if ("error" in S) return S;
  let {
      plan: plan
    } = S,
    h = Math.min(e.timeoutMs ?? Ti, L6n),
    A = performance.now(),
    error_5 = await zt(plan, h, R.pendingStats);
  if (error_5) return {
    error: error_5,
    code: "not_a_file"
  };
  let timeout = Math.ceil(h - (performance.now() - A));
  if (timeout <= 0) return {
    error: Qe(plan.file, h),
    code: "not_a_file"
  };
  let cwd_4;
  if (!r || plan.input !== void 0) cwd_4 = Vt(plan);else if (e.path === void 0) return {
    error: "remote-armed helper has no path",
    code: "bad_path"
  };else cwd_4 = (s === "win32" ? bn : Cn).dirname(e.path);
  let env = process.env,
    k = r ? On(or?.() ?? env, s) : env,
    {
      stdout: stdout_2,
      stderr: stderr,
      code: code_4,
      error: error_6,
      maxBufferExceeded: maxBufferExceeded,
      timedOut: timedOut
    } = await Ve(plan.file, plan.args, {
      timeout: timeout,
      cwd: cwd_4,
      useToolMemoryCgroup: !1,
      maxBuffer: Le + 1,
      env: {
        ...Bt(k, plan),
        CLAUDE_CODE_VERSION: {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.283",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-09-25T00:44:42Z",
          GIT_SHA: "4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",
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
    error: `${stderr.length > stdout_2.length ? "stderr" : "stdout"} exceeded ${Le} bytes`,
    code: "oversize"
  };
  if (timedOut) return {
    error: `timed out after ${h}ms`,
    code: "timed_out"
  };
  let ue = J => {
    if (stdout_2) t(`policyHelper stdout: ${stdout_2}`, {
      level: "debug"
    });
    return J;
  };
  if (code_4 !== 0) return ue({
    error: `exited with code ${code_4}: ${stderr || stdout_2 || error_6 || ""}`,
    code: "exit_nonzero"
  });
  if (Buffer.byteLength(stdout_2, "utf8") > Le) return {
    error: `stdout exceeded ${Le} bytes`,
    code: "oversize"
  };
  let de = ct(stdout_2, !1);
  if (de === null || typeof de !== "object") return ue({
    error: "stdout is not a JSON object",
    code: "parse_failed"
  });
  let Y = Ii().safeParse(de);
  if (!Y.success) return ue({
    error: `invalid envelope: ${Y.error.message}`,
    code: "envelope_invalid"
  });
  let output = {},
    warnings = [];
  if (Y.data.managedSettings !== void 0) {
    let J = jn(Y.data.managedSettings, "policyHelper");
    if ("error" in J) return ue({
      error: J.error,
      code: "schema_rejected"
    });
    if (warnings = J.warnings, r) warnings = fUe(warnings), delete J.settings.claudeMd;
    output.managedSettings = J.settings;
  }
  if (Y.data.claudeMd !== void 0) output.claudeMd = Y.data.claudeMd;
  if (Y.data.appendSystemPrompt !== void 0) output.appendSystemPrompt = Y.data.appendSystemPrompt;
  return {
    output: output,
    warnings: warnings
  };
}
function ir() {
  return O() === "windows" ? "win32" : "posix";
}
function sr(e, n, r, s) {
  if (e.script == null && e.interpreter == null) return Ki(e.path, n, r, s);
  if (!r) return "inline scripts are not supported on the singular policyHelper key";
  if (e.path != null) return $1r;
  return _Fo(e, n === "win32" ? "windows" : "linux");
}
function Ki(e, n, r, s) {
  let g = n === "win32" ? bn : Cn;
  if (typeof e !== "string") return "path must be a string";
  if (!g.isAbsolute(e)) return `path must be absolute: ${e}`;
  if (n === "win32") {
    if (r && !D1r.test(e)) return `path must end in .exe or .ps1 on Windows: ${e}`;
    if (!r && !e.toLowerCase().endsWith(".exe")) return `path must end in .exe on Windows: ${e}`;
    if (N1r(e)) return `${H1r}: ${e}`;
  }
  if (s && (n === "win32" ? I1r(e) : NUt(e) || O1r(e))) return `path must not be a UNC, network-automount (/net, /Network/Servers, or macOS /.vol /.file /.nofollow /.resolve) or kernel magic-link (/proc, /dev/fd) path when delivered via remote managed settings: ${e}`;
  if (!M1r(e, n, {
    rejectDriveRelative: n === "win32"
  })) return n === "win32" ? `path must be a drive-qualified (C:\\...) or UNC path in normalized form (no "." or ".." segments, no doubled or trailing separators, no ":" or trailing "."/space in a component, no device-namespace prefix): ${e}` : `path must be in normalized form (no "." or ".." segments, no doubled or trailing separators): ${e}`;
  return null;
}
async function H3n(e, n, r) {
  let s = await e.read([{
    key: Ae.userSettings(),
    offset: 0,
    length: dh + 1
  }]);
  if (!s.ok) return {
    kind: "failing",
    code: s.error.code,
    failureClass: "failureClass" in s.error ? s.error.failureClass : void 0
  };
  let g = s.value.items[0];
  if (!g.found) return Bi(e.hostFiles, n);
  if (g.totalBytes > dh) return {
    kind: "oversize"
  };
  let contentHash = Kt(g.value),
    parsed = r !== void 0 && r.contentHash === contentHash ? r.parsed : Gye(r_e(g.value), n);
  return {
    kind: "seeded",
    contentHash: contentHash,
    size: g.totalBytes,
    parsed: parsed
  };
}
async function Bi(e, n) {
  let r;
  try {
    r = await e.stat(Gu.home(n));
  } catch (error) {
    return {
      kind: "failing",
      code: l(error)
    };
  }
  if (r.ok) return r.value.kind === "absent" ? {
    kind: "absent"
  } : {
    kind: "failing",
    code: r.value.kind
  };
  return y9e(r.error) ? {
    kind: "absent"
  } : ke(r.error);
}
async function rBr(e, n) {
  if (!H()) return;
  let epoch = e.epoch;
  try {
    let s = await n.read(),
      g = s.kind === "seeded" ? s.parsed : s.kind === "absent" && n.whenAbsent === "seedAbsence" ? Vye() : void 0;
    if (g === void 0) {
      t(`settings: ${n.label} not re-seeded (${Zfn(s)}); the file read serves`);
      return;
    }
    if (n.source !== "userSettings" && e.walkReadDiffers(n.path, g)) {
      t(`settings: ${n.label} not re-seeded (the file read already saw different content this generation); the file read serves`);
      return;
    }
    if (s.kind === "absent") mUe(n.path);
    return e.seedParsedFile(n.path, n.source, g, epoch) ? e.retainLayer(n.path, g) : void 0;
  } catch (error) {
    t(`settings: ${n.label} not re-seeded: ${l(error)}; the file read serves`, {
      level: "warn"
    });
    return;
  }
}
function oBr(e, path_3) {
  return {
    source: "userSettings",
    path: path_3,
    read: () => H3n(e, path_3),
    label: "user settings",
    whenAbsent: "seedAbsence"
  };
}
async function Vi(e, n) {
  if (!e.serves("userNamed")) return {
    kind: "failing",
    code: code_5
  };
  return zi(e, Gu.userNamed(n), n, !1);
}
async function ji(e, n, r) {
  let s = await ar(e, Gu.system(n));
  if (s.kind !== "bytes") return s;
  return {
    kind: "seeded",
    contentHash: s.contentHash,
    size: s.size,
    parsed: r !== void 0 && r.contentHash === s.contentHash ? r.parsed : Gye(r_e(s.bytes), n, !0)
  };
}
async function zi(e, n, r, s) {
  let g = await ar(e, n);
  if (g.kind !== "bytes") return g;
  return {
    kind: "seeded",
    contentHash: g.contentHash,
    size: g.size,
    parsed: Gye(r_e(g.bytes), r, s)
  };
}
async function ar(e, n) {
  let r = await e.stat(n);
  if (!r.ok) return ke(r.error);
  if (r.value.kind === "absent") return {
    kind: "absent"
  };
  if (r.value.kind !== "file") return {
    kind: "failing",
    code: r.value.kind
  };
  if (r.value.size > dh) return {
    kind: "oversize"
  };
  let s = await e.readBytes(n);
  if (!s.ok) return ke(s.error);
  if (!s.value.found) return {
    kind: "absent"
  };
  if (s.value.bytes > dh) return {
    kind: "oversize"
  };
  return {
    kind: "bytes",
    bytes: s.value.value,
    contentHash: Kt(s.value.value),
    size: s.value.bytes
  };
}
async function SHo(e, n) {
  let r = await e.listFolder(Gu.system(n));
  if (!r.ok) {
    if (r.error.code === "Failed" && r.error.telemetryCode === "ENOTDIR") return {
      kind: "listed",
      names: []
    };
    return ke(r.error);
  }
  if (!r.value.found) return {
    kind: "listed",
    names: []
  };
  return {
    kind: "listed",
    names: r.value.entries.filter(item => (item.kind === "file" || item.kind === "link") && vY(item.name)).map(item => item.name).sort()
  };
}
function Zfn(e) {
  if (e.kind !== "failing") return e.kind;
  return e.code === code_5 ? "the backend does not serve this space" : `backend read failed: ${e.code}`;
}
function ke(e) {
  return {
    kind: "failing",
    code: e.telemetryCode ?? e.code,
    failureClass: e.failureClass
  };
}
function sBr(e, source, path_4, label_2) {
  return {
    source: source,
    path: path_4,
    read: () => Vi(e.hostFiles, path_4),
    label: label_2,
    whenAbsent: "seedAbsence"
  };
}
function iBr(e, path_5, label_3, s) {
  return {
    source: "policySettings",
    path: path_5,
    read: () => ji(e.hostFiles, path_5, s.managedFileReads.get(path_5)),
    label: label_3,
    whenAbsent: "fileServes"
  };
}
async function F3n(e, n, r) {
  return rBr(n, oBr(e, r));
}
class gr {
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
var WGo = new q(() => new gr());
function zS(e, n, r) {
  return m2(e, dl(), n, r);
}
function F() {
  let e = {
    store: dl(),
    cwd: hm(),
    projectConfigDir: Fo() ?? void 0,
    allowedSources: Oxe(),
    onLegacyLocalSettingsRead: n => WGo.of(j().host).fire(n),
    parentManaged: PVr(),
    hostManagedProvider: a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST,
    flagInline: aT(),
    flagPath: U$(),
    flagExpectedContent: YI() ?? Hde(),
    coworkPlugins: gjt(),
    canonicalGitRoot: canonicalGitRoot,
    mdm: () => dY(),
    hkcu: () => L$e(),
    helper: () => er(),
    helperArmedFromRemote: () => nr(),
    helperMergesOutput: () => rr(),
    helperWarnings: () => mt(),
    wslInherits: () => m$(),
    helperArmedFromUserWritableBase: () => j$t(),
    credentialHelperKeysFrom: n => zGo(n)
  };
  return e.file = () => fft(e), e;
}
function $3n(e) {
  if (!$1()) return !1;
  if (e !== "policySettings") return !0;
  let n = gC();
  return !((J1(n) || n === "remote") && dY().userWritable !== !0 && !j$t() && (JE() === null || Bv()));
}
function zGo(e) {
  if (!$1()) return "as_read";
  if (e !== "policySettings") return "none";
  return $3n(e) ? "machine_admin" : "as_read";
}
function u5o(e) {
  return VUt(e, F());
}
function aBr() {
  let e = F();
  if (e.cwd === null) return;
  let n = X6n(e.cwd, e.canonicalGitRoot);
  return n.decided === void 0 ? n.root : void 0;
}
function wr(e) {
  return qye(e, F());
}
function gne(e) {
  return xjr(e, F());
}
function Lpt(e) {
  return djr(e, F());
}
function Nv() {
  return Kye(F());
}
function mC() {
  let e = wr("projectSettings"),
    n = wr("userSettings");
  return !!e && !!n && lr(e) === lr(n);
}
function W$t() {
  let e = wr("localSettings");
  if (!e) return [];
  return zS(e).errors;
}
function lBr() {
  return Qq(F());
}
function emn() {
  return fft(F());
}
function he(e) {
  if ($$() && _b.has(e)) return null;
  return k8e(e, F());
}
function hne() {
  return ujr(F());
}
function cBr() {
  return pjr(F());
}
function dBr() {
  return fjr(F());
}
function uBr() {
  return mjr(F());
}
function NI(e) {
  return vgn(e, F(), {
    includeLegacyLocalSettings: !1
  });
}
var GGo = 5000;
function fAe(e = GGo) {
  return nt(dl().backgroundWorkTail, e).then(() => {
    return;
  });
}
var VGo = new q(() => new Map());
function pBr(e) {
  let n = F(),
    r = [qye(e, n), ...(e === "localSettings" ? [Kye(n)] : [])].filter(item => item !== void 0),
    s = VGo.of(j().host),
    g = r.map(item => ljr(item, s));
  if (g.some(({
    settings: settings_4,
    errors: errors_3
  }) => settings_4 === null && errors_3.some(item => item.severity !== "warning"))) return "unreadable";
  let [S, E] = g.map(({
    settings: settings_5
  }) => settings_5);
  return {
    settings: E === null || E === void 0 ? S ?? null : G1({}, E, S ?? {}, kY)
  };
}
function p5o() {
  let e = F();
  if (!G(e.flagInline)) return !1;
  if (!$e(e.flagInline)) return !1;
  return v8e(e).settings === null;
}
function fBr(e) {
  let n = F();
  if (!G(n.flagInline) || !(e in n.flagInline)) return !1;
  return v8e(n).settings === null;
}
function $$e() {
  return Ejr(F());
}
function mBr() {
  return zN(F());
}
function z$t() {
  return rYn(F());
}
function gBr() {
  return BI(F()).shadowedHelperSources;
}
function $e(e) {
  if (!G(e)) return !1;
  let attribution = e.attribution;
  return "includeCoAuthoredBy" in e || attribution === !1 || G(attribution) && ("commitTrailers" in attribution || "commit" in attribution || "pr" in attribution);
}
function f5o() {
  let e = F(),
    n = qye("flagSettings", e);
  if (!n) return !1;
  if (m2(n, e.store, e.flagExpectedContent).settings !== null) return !1;
  if (e.flagExpectedContent !== void 0) {
    let r = ct(e.flagExpectedContent, !1);
    if (!G(r)) return !0;
    return $e(r);
  }
  return Et(n);
}
function Et(e) {
  let n;
  try {
    let {
      resolvedPath: resolvedPath
    } = jo(ce(), e);
    n = ct(tj(resolvedPath, dh), !1);
  } catch (error) {
    if (B(error)) return !1;
    return !0;
  }
  if (!G(n)) return !0;
  return $e(n);
}
function hBr(e, n) {
  let r = F(),
    s = h => h.settings === null && h.errors.some(item => item.severity !== "warning");
  if (e === "flagSettings" && r.flagInline && n in r.flagInline) {
    let h = v8e(r);
    if (s(h)) return r.flagInline[n];
    if (h.settings?.[n] !== void 0) return;
  }
  let g = qye(e, r);
  if (!g) return;
  let S = e === "flagSettings" ? r.flagExpectedContent : void 0;
  if (!s(m2(g, r.store, S))) return;
  let E;
  try {
    if (S !== void 0) E = ct(S, !1);else {
      let {
        resolvedPath: resolvedPath_2
      } = jo(ce(), g);
      E = ct(tj(resolvedPath_2, dh), !1);
    }
  } catch {
    return;
  }
  if (!G(E) || !(n in E)) return;
  return E[n];
}
async function m5o(e, n) {
  let r = F(),
    s = qye(e, r);
  if (!s) return !1;
  let g = m2(s, r.store);
  if (g.settings !== null) return !1;
  if (g.errors.length === 0) return !1;
  if (H() && n !== void 0 && Ge(e, s)) {
    let S;
    try {
      S = await fr(n);
    } catch {
      return !0;
    }
    switch (S.kind) {
      case "absent":
        return !1;
      case "object":
        return $e(S.raw);
      default:
        return !0;
    }
  }
  return Et(s);
}
function Ge(e, n) {
  return e === "userSettings" && Ji(n) === X1.default;
}
async function fr(e) {
  let n = await e.read([Ae.userSettings()]);
  if (!n.ok) return {
    kind: "unreadable",
    code: n.error.code
  };
  let r = n.value.items[0];
  if (!r.found) return {
    kind: "absent"
  };
  if (r.totalBytes > dh) return {
    kind: "oversize"
  };
  let s = r_e(r.value);
  if (!s.trim()) return {
    kind: "empty"
  };
  let raw_3 = ct(s, !1);
  if (!G(raw_3)) return {
    kind: "non-object"
  };
  return {
    kind: "object",
    raw: raw_3
  };
}
function g5o() {
  let e = F(),
    n = Kye(e);
  if (!n) return !1;
  let r = m2(n, e.store);
  if (r.settings !== null) return !1;
  if (r.errors.length === 0) return !1;
  return Et(n);
}
function U3n() {
  let e = F(),
    n = Kye(e);
  if (!n) return null;
  return m2(n, e.store).settings ?? null;
}
function pu() {
  return Sgn(F());
}
function yBr() {
  return sYn(F());
}
function _Br() {
  return Sjr(F());
}
function Npt(e) {
  return Ajr(F(), e);
}
function bBr() {
  return dl().lastPolicyEnvComposition;
}
function EJ() {
  return Cjr(F());
}
function qGo() {
  return wjr(F());
}
function SBr() {
  return Rjr(F());
}
function tmn() {
  return {
    slot: he("policySettings"),
    adminTiers: qGo()
  };
}
function wBr() {
  return kjr(F());
}
function vBr(e) {
  let n = tmn(),
    r = pUe(n);
  return {
    mcpLockFromLowerSource: r && n.slot?.allowManagedMcpServersOnly !== !0,
    mcpAllowlistFromLowerSource: r && n.slot?.allowedMcpServers === void 0 && _8e(n) !== void 0,
    mcpShadowedSourceCount: e.length,
    mcpShadowedKeyCount: e.reduce((acc, {
      keys: keys
    }) => acc + keys.length, 0)
  };
}
function Je() {
  return yb().settings || {};
}
var Vn = Je;
function B3n() {
  Ss();
  let sources = [];
  for (let source_2 of fs()) {
    let settings_6 = he(source_2);
    if (settings_6 && Object.keys(settings_6).length > 0) sources.push({
      source: source_2,
      settings: settings_6
    });
  }
  return {
    effective: Je(),
    sources: sources
  };
}
function Nx(e) {
  let n = fs();
  for (let r = n.length - 1; r >= 0; r--) {
    let s = n[r];
    if (he(s)?.[e] !== void 0) return s;
  }
  return null;
}
function yb() {
  let e = dl(),
    mergedSettings = e.mergedSettings;
  if (mergedSettings !== null) return mergedSettings;
  Ur("loadSettingsFromDisk_start");
  let r = iYn(F());
  return Ur("loadSettingsFromDisk_end"), e.mergedSettings = r, r;
}
function kBr() {
  for (let e of OJ(m$())) {
    let hasBase = hUe(zS(Pe(e, "managed-settings.json"), void 0, !0)),
      hasDropIns = !1;
    try {
      let s = Pe(e, "managed-settings.d"),
        g = E => hUe(zS(Pe(s, E), void 0, !0)),
        S = dl().primedFolderListing(s);
      if (S !== void 0) hasDropIns = S.some(g);else hasDropIns = ce().readdirSync(s).some(item => {
        if (!(item.isFile() || item.isSymbolicLink()) || !vY(item.name)) return !1;
        return g(item.name);
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
function uY() {
  let e = {
      ...F(),
      helper: void 0
    },
    {
      present: present,
      heldEmpty: heldEmpty
    } = BI(e);
  if (heldEmpty) return {};
  if (present.remote) return Qq(e).settings;
  if (present.mdm) return dY().settings;
  if (present.file) return emn().settings;
  let {
    settings: settings_7
  } = mft(e);
  if (settings_7) return settings_7;
  let g = L$e();
  return Object.keys(g.settings).length > 0 ? g.settings : null;
}
function Wq() {
  let e = nYn({
    ...F(),
    helper: void 0
  });
  return e === "helper" ? null : e;
}
function nmn() {
  return Tjr(F());
}
function gC() {
  let e = dl(),
    n = e.policy.origin;
  if (n !== void 0) return n.value;
  let value_3 = nYn(F());
  return e.policy.origin = {
    value: value_3
  }, value_3;
}
function EBr() {
  let e = dl(),
    remoteVerified = Bv(),
    vouchedTiers = e.policy.vouchedTiers;
  if (vouchedTiers !== void 0 && vouchedTiers.remoteVerified === remoteVerified) return vouchedTiers.value;
  let value_4 = vjr(F(), remoteVerified);
  return e.policy.vouchedTiers = {
    remoteVerified: remoteVerified,
    value: value_4
  }, value_4;
}
function H5e() {
  let e = dl(),
    hostLoginPins = e.policy.hostLoginPins;
  if (hostLoginPins !== void 0) return hostLoginPins.value;
  let value_5 = gjr(F());
  return e.policy.hostLoginPins = {
    value: value_5
  }, value_5;
}
function TBr() {
  return hjr(F());
}
function CBr() {
  return yjr(F());
}
function G$t() {
  let e = dl(),
    slotAdminOrParentComposed = e.policy.slotAdminOrParentComposed;
  if (slotAdminOrParentComposed !== void 0) return slotAdminOrParentComposed;
  let r = _jr(F());
  return e.policy.slotAdminOrParentComposed = r, r;
}
function RBr() {
  let e = dl(),
    adminRetentionGoverned = e.policy.adminRetentionGoverned;
  if (adminRetentionGoverned !== void 0) return adminRetentionGoverned;
  let s = [Qq(F()).settings, dY().settings, fft(F()).settings].some(item => item?.cleanupPeriodDays !== void 0);
  return e.policy.adminRetentionGoverned = s, s;
}
function Hx() {
  let e = dl(),
    loadErrors_2 = e.policy.loadErrors;
  if (loadErrors_2 !== void 0) return loadErrors_2;
  let r = [];
  return r.push(...Qq(F()).errors), r.push(..._r()), r.push(...emn().errors), r.push(...mft(F()).errors), r.push(...L$e().errors), e.policy.loadErrors = r, r;
}
function _r() {
  return Y6n(dY().errors, () => Qq(F()));
}
function mAe() {
  return [...dY().errors, ...emn().errors];
}
function mr() {
  let e = dl(),
    adminLoadErrors = e.policy.adminLoadErrors;
  if (adminLoadErrors !== void 0) return adminLoadErrors;
  let r = [];
  return r.push(...Qq(F()).errors), r.push(..._r()), r.push(...emn().errors), e.policy.adminLoadErrors = r, r;
}
function rmn() {
  return mr().some(item => item.userWritable !== !0 && item.wslIgnored !== !0);
}
function gAe() {
  return hAe(mr());
}
function hAe(e) {
  return e.filter(item => item.severity !== "warning");
}
function KGo() {
  let e = dl(),
    adminSurvivor = e.policy.adminSurvivor;
  if (adminSurvivor !== void 0) return adminSurvivor;
  let r = F(),
    s = zN(r),
    g = dY(),
    S = s.composes === "tier" && !j$t() && !g.userWritable || gUe(Qq(r)) || !g.userWritable && gUe(g) || gUe(emn());
  return e.policy.adminSurvivor = S, S;
}
function Pye() {
  return !KGo() && gAe().length > 0;
}
function Xi() {
  try {
    let e = he("policySettings");
    return [...Z6n(e), ...eYn(e)];
  } catch {
    return [];
  }
}
function ABr() {
  let e = Hx(),
    n = [...mt().filter(item => !NAe(item.path)), ...Xi()];
  if (e.length === 0 && n.length === 0) return;
  let fatal = e.some(item => item.severity !== "warning"),
    s = [];
  if (e.length > 0) {
    let g = fatal ? "Managed settings failed to load; policies from the failed source are NOT in effect:" : "Managed settings contain invalid entries (remaining valid policies are still enforced):";
    s.push(`${g}
${e.map(cr).join(`
`)}`);
  }
  if (n.length > 0) s.push(`Managed settings notices:
${n.map(cr).join(`
`)}`);
  if (process.stderr.write(`${s.join(`
`)}
`), e.length === 0) return;
  i("tengu_managed_settings_validation_errors", {
    error_count: e.length,
    remote_error_count: U(e, g => g.file === "remote managed settings"),
    fatal: fatal
  });
}
function cr(e) {
  return `  ${e.file ?? "managed settings"}${e.path ? ` (${e.path})` : ""}: ${e.message}`;
}
function ln(e, n, r, s) {
  return Ha(e, () => n, r, s);
}
function Ha(e, n, r, s) {
  if (e === "policySettings" || e === "flagSettings") return Promise.resolve({
    error: null
  });
  let g = wr(e);
  if (!g) return Promise.resolve({
    error: hm() === null ? new IC() : null
  });
  return Sr.run(g, () => Qi(e, n, g, r, s));
}
var Sr = Fm();
function j3n() {
  return Sr.drain();
}
dAe(j3n);
async function Er(e, n, r) {
  try {
    await Hv(e, n, r);
  } catch (error) {
    if (!(error instanceof sf) || !(await Zi(e))) throw error;
    t(`Writing settings through symlinked path ${e}`), await Hv(e, n, {
      ...r,
      allowSymlink: !0,
      checkParentDir: !1
    });
  }
}
async function Zi(e) {
  return !1;
}
async function Qi(e, n, r, s, g) {
  let S = H() && g !== void 0 && Ge(e, r),
    E = s?.legacyRevocation === "skip",
    error_8 = null,
    A;
  using T = {
    [Symbol.dispose]: () => A?.()
  };
  try {
    let I = vgn(e, F(), {
        includeLegacyLocalSettings: !1
      }),
      w = I !== null && m2(r, F().store).errors.some(item => item.preserveOnWrite);
    if (w) I = null;
    if (!I) {
      let D = null;
      try {
        D = (await ug(r)).content;
      } catch (error) {
        if (!B(error)) throw error;
      }
      if (D !== null && D.trim() !== "") {
        let x = ct(D, !1);
        if (x === null) return t(`updateSettingsForSource: invalid JSON in settings file at ${r}`, {
          level: "error"
        }), {
          error: Error(`Invalid JSON syntax in settings file at ${r}`)
        };
        if (x && typeof x === "object") {
          let V = tm(x);
          Mne(V, r), I = V, t(w ? `Using raw settings from ${r} so entries this build does not recognize survive the write` : `Using raw settings from ${r} due to validation failure`);
        }
      }
    }
    let M = n(I ?? null);
    if (M === null) {
      if (e === "localSettings" && !E) {
        let D = await pr(n);
        if (D.error) return {
          error: D.error
        };
        if (D.changed) {
          if (H() && g !== void 0) A = await ur(g, r);
          try {
            yb();
          } catch (error) {
            d(error);
          }
          dr(e);
        }
      }
      return {
        error: null
      };
    }
    await ce().mkdir(ye(r));
    let k = G1(I || {}, M, (D, x, V, le) => {
      if (x === void 0 && le && typeof V === "string") {
        delete le[V];
        return;
      }
      if (Array.isArray(x)) return x;
      if (V === "extraKnownMarketplaces" && G(D) && G(x)) return yft(D, x);
      return;
    });
    I5e(r);
    let N = b(k, null, 2) + `
`;
    if (S) {
      let D = await g.write(Ae.userSettings(), N, {
        publishDiscipline: "followAtomic"
      });
      if (!D.ok) throw new P(`settings storageV5 write failed: ${D.error.code}${"failureClass" in D.error ? ` (${D.error.failureClass})` : ""}`, "settings storageV5 write failed");
    } else {
      let D = zde(ye(r));
      await Er(r, N, {
        encoding: "utf-8",
        allowSymlink: e === "userSettings" || D,
        checkParentDir: (e === "projectSettings" || e === "localSettings") && !D,
        stagingDir: Pe(ye(r), ND)
      });
    }
    if (Ss(), S) A = qi(r, N);
    if (e === "localSettings" && !E) {
      let D = await pr(n);
      if (D.error && D.phase !== void 0 && !hr(M)) t(`localSettings: legacy settings.local.json could not be evaluated (${D.phase} failure) but this write contains no removals \u2014 canonical write succeeded, ignoring: ${D.error.message}`, {
        level: "warn"
      });else error_8 = D.error;
    }
    if (e === "localSettings") {
      let D = M3n(UI("localSettings"), Fo() ?? we()).then(V => {
          if (!V.written) return;
          if (V.effective) _("gitignore_global_rule");else if (V.reason === "already_tracked") p("gitignore_global_rule", V.reason);else m("gitignore_global_rule", V.reason ?? "write_ineffective");
        }).catch(() => {
          return;
        }),
        x = dl();
      x.backgroundWorkTail = Promise.all([x.backgroundWorkTail, D]).then(() => {
        return;
      });
    }
  } catch (I) {
    let error_7 = Error(`Failed to read raw settings from ${r}: ${I}`, {
      cause: I
    });
    return t(error_7.message, {
      level: "error"
    }), {
      error: error_7
    };
  }
  if (H() && g !== void 0 && !S) A = await ur(g, r);
  try {
    yb();
  } catch (error) {
    d(error);
  }
  return dr(e), {
    error: error_8
  };
}
async function ur(e, n) {
  let r = wr("userSettings");
  if (r === void 0 || r === n || !Ge("userSettings", r)) return;
  return F3n(e, dl(), r);
}
function qi(e, n) {
  if (Buffer.byteLength(n) > dh) return;
  let r;
  try {
    r = Gye(n, e);
  } catch (error) {
    t(`updateSettingsForSource: written settings not seeded: ${l(error)}`);
    return;
  }
  let s = dl();
  return s.seedParsedFile(e, "userSettings", r, s.epoch), s.retainLayer(e, r);
}
function hr(e) {
  if (e === void 0 || Array.isArray(e)) return !0;
  if (e === null || typeof e !== "object") return !1;
  return Object.values(e).some(hr);
}
function dr(e) {
  try {
    dl().changed.emit(e);
  } catch (error) {
    for (let r of error instanceof AggregateError ? error.errors : [error]) d(r);
  }
}
async function pr(e) {
  let n = Kye(F());
  if (!n) return {
    changed: !1,
    error: null
  };
  let r;
  try {
    r = (await ug(n, dh)).content;
  } catch (T) {
    if (B(T)) return {
      changed: !1,
      error: null
    };
    let error_9 = new P(`Failed to read legacy settings.local.json at ${n}: ${T}`, "Failed to read legacy settings.local.json");
    return t(error_9.message, {
      level: "error"
    }), {
      changed: !1,
      error: error_9,
      phase: "read"
    };
  }
  let s = ct(r, !1);
  if (!s || typeof s !== "object" || Array.isArray(s)) return {
    changed: !1,
    error: null
  };
  let g = tm(s);
  Mne(g, n);
  let S = g,
    E;
  try {
    E = e(tm(S));
  } catch (T) {
    let error_10 = new P(`Transform failed against legacy settings.local.json at ${n} (malformed legacy content?): ${T}`, "Transform failed against legacy settings.local.json");
    return t(error_10.message, {
      level: "error"
    }), {
      changed: !1,
      error: error_10,
      phase: "transform"
    };
  }
  if (E === null) return {
    changed: !1,
    error: null
  };
  let h = G1(tm(S), E, (T, I, w, M) => {
      if (I === void 0 && M && typeof w === "string") {
        delete M[w];
        return;
      }
      if (Array.isArray(I)) return I;
      return;
    }),
    A = wHo(S, h);
  if (b(A) === b(S)) return {
    changed: !1,
    error: null
  };
  try {
    I5e(n);
    let allowSymlink = zde(ye(n));
    return await Er(n, b(A, null, 2) + `
`, {
      encoding: "utf-8",
      allowSymlink: allowSymlink,
      checkParentDir: !allowSymlink,
      stagingDir: Pe(ye(n), ND)
    }), Ss(), {
      changed: !0,
      error: null
    };
  } catch (T) {
    let error_11 = new P(`Failed to revoke from legacy settings.local.json at ${n}: ${T}`, "Failed to revoke from legacy settings.local.json");
    return t(error_11.message, {
      level: "error"
    }), {
      changed: !1,
      error: error_11
    };
  }
}
function wHo(e, n) {
  if (Array.isArray(e) && Array.isArray(n)) {
    let r = new Set(n.map(item => b(item)));
    return e.filter(item => r.has(b(item)));
  }
  if (G(e) && G(n)) {
    let r = {};
    for (let s of Object.keys(e)) {
      if (!(s in n) || n[s] === void 0) continue;
      r[s] = wHo(e[s], n[s]);
    }
    return r;
  }
  return e;
}
function xBr(e) {
  let n = Jb().strip().parse(e),
    r = ["permissions", "sandbox", "hooks"],
    s = [],
    g = {
      permissions: new Set(Object.keys(yFo().shape)),
      sandbox: new Set(Object.keys(_mn().shape)),
      hooks: new Set(Mm)
    };
  for (let S of Object.keys(n)) if (r.includes(S) && n[S] && typeof n[S] === "object") {
    let E = n[S],
      h = g[S];
    if (h) {
      for (let A of Object.keys(E)) if (h.has(A)) s.push(`${S}.${A}`);
    }
  } else s.push(S);
  return s.sort();
}
function V$t(e) {
  if (!dl().pluginBaseLoaded) i("tengu_plugin_settings_premature_read", {
    key: c(e)
  });
  let {
    settings: settings_8
  } = yb();
  return (settings_8 || {})[e];
}
function hC(e) {
  return yne(e).map(item => item.value);
}
var W3n = ["policySettings", "flagSettings", "userSettings"];
function yne(e) {
  let n = [];
  for (let source_3 of W3n) {
    let value_6 = he(source_3)?.[e];
    if (value_6 !== void 0) n.push({
      source: source_3,
      value: value_6
    });
  }
  return n;
}
function U1() {
  return !!(he("userSettings")?.skipDangerousModePermissionPrompt || he("localSettings")?.skipDangerousModePermissionPrompt || he("flagSettings")?.skipDangerousModePermissionPrompt || he("policySettings")?.skipDangerousModePermissionPrompt);
}
function q$t() {
  return !!(he("policySettings")?.skipDangerousModePermissionPrompt || he("userSettings")?.skipDangerousModePermissionPrompt);
}
function z3n() {
  return !!(he("userSettings")?.skipWorkflowUsageWarning || he("localSettings")?.skipWorkflowUsageWarning || he("flagSettings")?.skipWorkflowUsageWarning || he("policySettings")?.skipWorkflowUsageWarning);
}
function yAe() {
  return fs().some(item => he(item)?.isolatePeerMachines === !0);
}
function tde() {
  return fs().some(item => he(item)?.disableClaudeAiConnectors === !0) || EJ().some(item => item.disableClaudeAiConnectors === !0);
}
function PBr() {
  return !0;
}
function omn(e) {
  return ![...pu(), ...EJ(), he("policySettings"), he("flagSettings"), he("userSettings"), he("localSettings"), U3n()].some(item => item?.[e] === !1);
}
function K$t() {
  return omn("useAutoModeDuringPlan");
}
function F5e() {
  return hC("askUserQuestionTimeout")[0];
}
function Y$t() {
  return hC("dialogExpiry")[0];
}
function $5e() {
  return hC("modelProposedGoals")[0] ?? "auto";
}
async function IBr(e) {
  let n = hC("modelProposedGoals")[0];
  if (n !== void 0) return n;
  if ((await bAe("modelProposedGoals", e)) !== "absent") return "alwaysAsk";
  return "auto";
}
var pY = f(() => u({
    allow: C(o()).optional(),
    soft_deny: C(o()).optional(),
    hard_deny: C(o()).optional(),
    deny: C(o()).optional(),
    environment: C(o()).optional()
  })),
  _Ae = ["userSettings", "flagSettings", "policySettings"];
function Yk() {
  let e = pY(),
    n = dl();
  if (!n.autoModeUntrustedSourceWarned) for (let h of ["projectSettings", "localSettings"]) {
    if (h === "projectSettings" && mC()) continue;
    let A = he(h)?.autoMode;
    if (A && e.safeParse(A).success) n.autoModeUntrustedSourceWarned = !0, t(`settings autoMode in ${h} ignored \u2014 only user/flag/managed settings may set classifier rules (projectSettings and localSettings are repo-controllable)`, {
      level: "warn"
    }), i("tengu_settings_auto_mode_rules_untrusted_source_ignored", {
      source: c(h)
    });
  }
  let allow = [],
    soft_deny = [],
    hard_deny = [],
    environment = [],
    E = !1;
  for (let h of _Ae) {
    let A = he(h);
    if (!A) continue;
    let T = e.safeParse(A.autoMode);
    if (T.success) {
      if (T.data.allow) allow.push(...T.data.allow);
      if (T.data.soft_deny) soft_deny.push(...T.data.soft_deny);
      if (T.data.hard_deny) hard_deny.push(...T.data.hard_deny);
      if (T.data.environment) environment.push(...T.data.environment);
    }
  }
  if (allow.length > 0 || soft_deny.length > 0 || hard_deny.length > 0 || environment.length > 0 || E) return {
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
function OBr() {
  for (let e of _Ae) if (he(e)?.autoMode?.classifyAllShell === !0) return !0;
  return !1;
}
async function bAe(e, n, r) {
  let s = F(),
    g = zUt(s),
    S = !1,
    E = !1;
  for (let h of g) {
    let A = h !== "policySettings" && (r?.presenceSources === void 0 || r.presenceSources.includes(h));
    if (A && h === "flagSettings" && G(s.flagInline) && e in s.flagInline && e !== "attribution" && e !== "includeCoAuthoredBy") S = !0;
    if (h === "flagSettings" && s.flagExpectedContent !== void 0) {
      if (!s.flagExpectedContent.trim()) continue;
      let k = ct(s.flagExpectedContent, !1);
      if (k === null || typeof k !== "object" || Array.isArray(k)) E = !0;else if (A && e in k && e !== "attribution" && e !== "includeCoAuthoredBy") S = !0;
      continue;
    }
    let T = qye(h, s);
    if (!T) continue;
    if (H() && n !== void 0 && h === "projectSettings" && g.includes("userSettings") && mC()) continue;
    let I = h === "localSettings" ? Kye(s) : void 0,
      w = I ? [T, I] : [T],
      M = H() && n !== void 0 && Ge(h, T);
    for (let k of w) {
      if (M) {
        let N = await fr(n);
        switch (N.kind) {
          case "unreadable":
            t(`rawSettingsKeyPresence: v5 user-settings read failed: ${N.code}`), E = !0;
            break;
          case "oversize":
          case "non-object":
            E = !0;
            break;
          case "object":
            if (A && e in N.raw && !(e === "attribution" || e === "includeCoAuthoredBy")) S = !0;
            break;
          case "absent":
          case "empty":
            break;
        }
        continue;
      }
      try {
        let {
            resolvedPath: resolvedPath_3
          } = jo(ce(), k),
          D = tj(resolvedPath_3, dh);
        if (!D.trim()) continue;
        let x = ct(D, !1);
        if (x === null || typeof x !== "object" || Array.isArray(x)) E = !0;else if (A && e in x && !(e === "attribution" || e === "includeCoAuthoredBy")) S = !0;
      } catch (error) {
        if (K6n(error, k), !B(error)) E = !0;
      }
    }
  }
  if (E) return "unknowable";
  return S ? "present" : "absent";
}
export { AD, Ipt, I3n, canonicalGitRoot as Lx, V0, L$t, QNo, O3n, M3n, jq, Opt, Gfn, $1, FUr, ZNo, $Ur, UUr, dAe, LN, N$t, I5e, Vfn, eHo, O5e, dY, L$e, m$, H$t, qfn, BUr, M5e, text as uAe, jUr, F$t, tHo, pAe, WUr, D5e, D3n, nHo, N$e, zUr, GUr, fne, VUr, Mpt, qUr, $$t, Kfn, KUr, Yfn, L5e, YUr, XUr, JUr, H$e, Xfn, QUr, L3n, mne, regExp_3 as U$t, Jfn, rHo, B$t, oHo, sHo, F$e, ZUr, XE, eBr, tBr, refreshed as iHo, Dpt, aHo, nBr, lHo, Qfn, cHo, N5e, dHo, j$t, uHo, pHo, N3n, fHo, mHo, gHo, hHo, yHo, _Ho, bHo, H3n, rBr, oBr, SHo, Zfn, sBr, iBr, F3n, WGo, zS, $3n, zGo, u5o, aBr, wr, gne, Lpt, Nv, mC, W$t, lBr, emn, he, hne, cBr, dBr, uBr, NI, GGo, fAe, VGo, pBr, p5o, fBr, $$e, mBr, z$t, gBr, f5o, hBr, m5o, g5o, U3n, pu, yBr, _Br, Npt, bBr, EJ, qGo, SBr, tmn, wBr, vBr, Je, Vn, B3n, Nx, yb, kBr, uY, Wq, nmn, gC, EBr, H5e, TBr, CBr, G$t, RBr, Hx, mAe, rmn, gAe, hAe, KGo, Pye, ABr, ln, Ha, j3n, wHo, xBr, V$t, hC, W3n, yne, U1, q$t, z3n, yAe, tde, PBr, omn, K$t, F5e, Y$t, $5e, IBr, pY, _Ae, Yk, OBr, bAe };