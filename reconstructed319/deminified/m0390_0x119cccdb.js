// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { er } from "B:/~BUN/root/chunk-game8aqv.js";
import { Ol, ULr } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { Fte, pBs } from "B:/~BUN/root/chunk-pwj77283.js";
import { Kze, qze, R_s, $Hi } from "B:/~BUN/root/chunk-rv3pfsrw.js";
import { fD, g_s, nLe } from "B:/~BUN/root/chunk-b7bhhce8.js";
import { Uze } from "B:/~BUN/root/chunk-s4gx10ck.js";
import { kd } from "B:/~BUN/root/chunk-jbjsy1k0.js";
import { L } from "B:/~BUN/root/chunk-5ha2avah.js";
import { realpath as be } from "fs/promises";
import { basename as B, dirname as Ce, resolve as Oe } from "path";
import { isAbsolute as O } from "path";
var S = String.raw`\.sw[a-p]|\.un~|\.rej|\.save\.\d+|\.save|\.tmp|\.temp|\.bak|\.old|\.orig|\.backup|\.~\d+~|~`,
  U = String.raw`\.part(?:ial)?|\.(?:cr)?download| copy| - copy| \d+| ?\(\d+\)| \((?=[^()/]*(?:conflict|copy))[^()/]*\)|\.sync-conflict-[\w-]+`,
  MDn = `${S}|${U}`,
  h = ".~ (";
var Igs = [".ssh", ".aws", ".azure", ".gnupg", ".kube", ".docker"],
  Mgs = [[".config", "git"], [".config", "gh"], [".config", "glab-cli"], [".config", "gcloud"], ["appdata", "roaming", "gcloud"], [".cargo", "credentials"], [".cargo", "credentials.toml"], [".gem", "credentials"], [".m2", "settings.xml"], [".gradle", "gradle.properties"], ["documents", "powershell", "profile.ps1"], ["documents", "windowspowershell", "profile.ps1"], [".config", "powershell", "profile.ps1"], [".claude", "settings.json"], [".claude", "settings.local.json"], [".claude", "state", "unattended-serving-consent.json"], [".claude", "state", "device-mcp-consent.json"], [".claude", "state", "device-mcp-snapshot.json"], [".claude", "state", "served-calls"], [".claude", "state", "settings-review.json"], [".claude", "state"], ["appdata", "roaming", "github cli"], ["appdata", "roaming", "gh"], ["appdata", "roaming", "glab-cli"], ["appdata", "roaming", "gnupg"], ["appdata", "local", "microsoft", "credentials"], ["appdata", "roaming", "microsoft", "credentials"], ["appdata", "local", "microsoft", "vault"], ["appdata", "roaming", "microsoft", "vault"], ["appdata", "roaming", "microsoft", "protect"], ["library", "keychains"]],
  Y = [".netrc", "_netrc", ".git-credentials", ".gitconfig", Kze, qze, R_s, ".envrc", ".mcp.json", ".npmrc", ".yarnrc", ".yarnrc.yml", ".pypirc", ".pgpass", ".my.cnf", ".mylogin.cnf", ".terraformrc", "terraform.rc", "credentials.tfrc.json", ".boto", ".s3cfg", "kubeconfig", "kubeconfig.yaml", "kubeconfig.yml", "kubeconfig.json", ".bashrc", ".bash_profile", ".bash_login", ".bash_logout", ".bash_aliases", ".profile", ".zshrc", ".zshenv", ".zprofile", ".zlogin", ".zlogout", "config.fish", "microsoft.powershell_profile.ps1", "microsoft.vscode_profile.ps1", "microsoft.powershellise_profile.ps1", ".bash_history", ".zsh_history", "fish_history", "consolehost_history.txt", ".python_history", ".node_repl_history", ".psql_history", ".mysql_history"],
  D = /(?:\.(?:pem|key|p12|pfx|keystore|jks)|_(?:rsa|dsa|ecdsa|ed25519)(?:_sk(?:_rk(?:_.*)?)?)?|secrets?\.(?:ya?ml|json|toml))$/s,
  g = ".env",
  V = R_s,
  F = ["example", "sample", "template", "dist"],
  regExp = new RegExp(`(?:${MDn})$`, "i"),
  regExp_2 = new RegExp(`(?:${S})$`, "i"),
  regExp_3 = new RegExp(`(?:${MDn})((?!(?:${MDn})$)(?!\\.\\d+$)\\.[^./]+)$`, "i"),
  e0t = 64,
  d_e = 255,
  Q = [/(?!)/, /:[^:]*$/, /:[^:]*:[^:]*$/, /:.*$/s],
  Z = /~[^/~.][^/~]*$/,
  Dgs = "(?:BACKUP|BASE|LOCAL|REMOTE)",
  Lgs = `_${Dgs}_(?:[LR]CONFL_)?\\d{2,}`,
  regExp_4 = new RegExp(`^(.*)${Lgs}(\\.[^./]*)?$`, "is"),
  te = ".git",
  T = "config";
function muo(e, t = f(e)) {
  if (!O(e)) return !1;
  let r = `/${t.map(Ol).join("/")}`;
  if ((r === e ? [e] : [e, r]).some(item => nLe(item) || b(item).some(nLe))) return !0;
  let o = `/${t.join("/")}`;
  if ((o === r ? [o] : [o, r]).some(re)) return !0;
  let s = `/${t.map((item, index) => index === t.length - 1 ? item : R(item, _)).join("/")}`;
  if (s !== o && (nLe(s) || b(s).some(nLe))) return !0;
  return !1;
}
function t0t(e) {
  return ne(e, {
    exceptFiles: exceptFiles,
    withGitConfigBelowGitFolders: !0
  });
}
var exceptFiles = new Set();
function ne(e, {
  exceptFiles: exceptFiles_2,
  withGitConfigBelowGitFolders: withGitConfigBelowGitFolders
}) {
  let r = f(e);
  if (r.some(item => item.length > d_e)) return !0;
  if (muo(e, r)) return !0;
  let {
      readingsByFold: readingsByFold,
      readings: readings,
      present: present
    } = v(r),
    c = readings.at(-1) ?? [];
  return readingsByFold.some(item => item.some(item => item.length > e0t)) || readings.some(item => item.some(item => Igs.includes(item))) || Mgs.some(item => MQt(readings, item) || MQt(present, item)) || H(present) && N() || guo(readings) || guo(present) || c.some(item => Ugs(item, exceptFiles_2)) || withGitConfigBelowGitFolders && huo(readings);
}
function huo(e) {
  return (e.at(-1) ?? []).some(Ee) && e.slice(0, -1).some(item => item.some(item => item.endsWith(te)));
}
function v(e) {
  let readingsByFold_2 = e.map((item, index) => d(item, index === e.length - 1)),
    readings_2 = readingsByFold_2.map(item => L(item.flat()));
  return {
    readingsByFold: readingsByFold_2,
    readings: readings_2,
    present: readings_2.filter((item, index) => index === e.length - 1 || !readingsByFold_2[index]?.[0]?.some(u))
  };
}
function d(e, leadingDot) {
  let n = B0e(e, {
    leadingDot: leadingDot
  });
  return r0t(e).map(item => L([...B0e(item(e), {
    leadingDot: leadingDot
  }), ...n.map(item)]));
}
function IQt(e) {
  return L(d(e, !1).flat());
}
function Ngs(e) {
  return L(d(e, !0).flat());
}
function R(e, t) {
  if (e.length > d_e) return e;
  let n = e;
  for (;;) {
    let r = t.reduce((acc, item) => acc === n ? item(acc) : acc, n);
    if (r === n || E.has(r)) return n;
    n = r;
  }
}
function n0t(e) {
  let t = e.split("/"),
    n = t.at(-1) ?? "",
    r = t.slice(0, -1),
    o = r.filter(item => !u(item)).map(item => R(item, M)),
    s = R(n, _),
    i = u(n) || u(s) || n.length <= d_e && B0e(n, {
      leadingDot: !0
    }).some(u) ? "" : s,
    c = (l, a) => [...l, a].join("/");
  return L([c(r, i), c(r, I(n)), c(r, p(n)), c(r, p(i)), c(o, n), c(o, i), c(o, p(i))]).filter(item => item !== e);
}
function b(e) {
  let t = x() === "windows" ? Math.max(e.lastIndexOf("/"), e.lastIndexOf("\\")) : e.lastIndexOf("/");
  if (t === -1) return [];
  let n = e.slice(t + 1);
  return B0e(n, {
    leadingDot: !0
  }).filter(item => item !== n).map(item => `${e.slice(0, t + 1)}${item}`);
}
function re(e) {
  let t = c_e(e);
  return t === null ? !0 : t.some(item => O(item) && nLe(item));
}
function Ix(e) {
  return [e, ...n0t(e)].some(t0t);
}
function Fgs(e) {
  let t = f(e).at(-1);
  if (t === void 0) return !0;
  return r0t(t).flatMap(item => [item(t), DDn(item(DDn(t)))]).some(item => P(item) || D.test(item));
}
function Hgs() {
  return x() === "windows" ? /[\\/]/ : "/";
}
function f(e) {
  return e.split(Hgs()).filter(item => item !== "");
}
function MQt(e, t) {
  return e.some((item, index) => t.every((item, s) => e[index + s]?.includes(item) === !0));
}
function guo(e) {
  return e.some((item, index) => item.includes(".claude") && e[index + 1]?.some(r => g_s.some(item => r === item || r.startsWith(`${item}.`))) === !0);
}
var G = [ce, ae, k, I, DDn],
  M = [ie, ...G],
  _ = [se, le, ...G],
  oe = [..._, p],
  E = new Set(["", ".", ".."]);
function B0e(e, {
  leadingDot: leadingDot_2 = !0,
  copyMarks = !0
} = {}) {
  let r = leadingDot_2 ? oe : copyMarks ? _ : M;
  if (r.every(item => item(e) === e)) return [e];
  let o = (s, i) => {
    if (i.length === 0 || s.size > e0t) return s;
    let c = L(i.flatMap(item => r.map(a => a(item)))).filter(item => !s.has(item) && !E.has(item));
    return o(new Set([...s, ...c]), c);
  };
  return [...o(new Set([e]), [e])];
}
function se(e) {
  let t = regExp.exec(e);
  return t === null || t.index === 0 ? e : e.slice(0, t.index);
}
function ie(e) {
  let t = regExp_2.exec(e);
  return t === null || t.index === 0 ? e : e.slice(0, t.index);
}
function le(e) {
  let t = regExp_3.exec(e);
  return t === null ? e : e.slice(0, t.index) + (t[1] ?? "");
}
function ce(e) {
  let t = Z.exec(e);
  return t === null || t.index === 0 ? e : e.slice(0, t.index);
}
function ae(e) {
  let t = regExp_4.exec(e),
    n = t === null ? "" : `${t[1]}${t[2] ?? ""}`;
  return n === "" ? e : n;
}
function k(e) {
  return e.length > 2 && e.startsWith("#") && e.endsWith("#") ? e.slice(1, -1) : e;
}
function I(e) {
  return e.length > 2 && e.startsWith(".#") ? e.slice(2) : e;
}
function p(e) {
  return e.replace(/^\.(?=.)/s, "");
}
var j = `
\r\u2028\u2029. `;
function DDn(e) {
  let t = e.length;
  while (t > 0 && j.includes(e[t - 1] ?? "")) t -= 1;
  return e.slice(0, t);
}
function u(e) {
  if (E.has(e) || !yuo.includes(e[0] ?? "") || e.length > d_e) return !1;
  let t = e;
  for (;;) {
    let n = DDn(t.replace(regExp, "")),
      r = k(n),
      o = r === n ? I(n) : r;
    if (o === "") return !0;
    if (o === t) return !1;
    t = o;
  }
}
var yuo = `${h}#${j}`;
function c_e(e) {
  if (lJe(e)) return null;
  let t = C(e);
  if (t === null) return null;
  let n = $gs(e);
  if (n.length === 0) return t;
  let r = n.map(C);
  return r.some(item => item === null) ? null : L([...t, ...n, ...r.flatMap(item => item ?? [])]).filter(item => item !== e);
}
function lJe(e) {
  let t = e.split("/");
  return e.length > me || t.length > _e || t.some(item => item.length > d_e);
}
function C(e) {
  let t = e.split("/"),
    n = t.map((item, index) => {
      let i = index === t.length - 1,
        readings_3 = B0e(item, {
          leadingDot: i,
          copyMarks: i
        });
      return {
        readings: readings_3,
        absentToo: !i && readings_3.some(u)
      };
    });
  if (n.every(item => item.readings.length === 1 && !item.absentToo)) return [];
  let r = n.reduce((acc, {
    readings: readings_4,
    absentToo: absentToo
  }) => {
    if (acc === null || readings_4.length > e0t) return null;
    let c = acc.flatMap(item => [...readings_4.map(a => [...item, a]), ...(absentToo ? [item] : [])]);
    return c.length > e0t ? null : c;
  }, [[]]);
  return r === null ? null : L(r.map(item => item.join("/"))).filter(item => item !== e);
}
function $gs(e) {
  if (de.test(e)) return [];
  let t = e.split("/");
  return L(ue.map(item => t.map(r => {
    let o = item(r);
    return o !== r && ge(o, r) ? o : r;
  }).join("/"))).filter(item => item !== e);
}
var y = e => e.replace(fe, ""),
  ue = [y, e => y(e).normalize("NFKC"), e => y(e).normalize("NFKD").toLowerCase().toUpperCase().toLowerCase().replace(/i\u0307/g, "i").replace(/\u03c2/g, "\u03C3").normalize("NFC")];
function ge(e, t) {
  return !E.has(e) && !e.includes("/") && e.length <= d_e && [...pe].every(item => e.split(item).length - 1 <= t.split(item).length - 1);
}
var de = /^[\x00-\x7f]*$/,
  fe = /\p{Default_Ignorable_Code_Point}/gu,
  pe = '\\:*?"<>|',
  me = 4096,
  _e = 256;
function Ugs(e, t = exceptFiles) {
  return Y.includes(e) && !t.has(e) || D.test(e) || P(e) || e.startsWith(`${V}.`) || e.startsWith(".config.json.") || e.startsWith(`${Kze}.`) || e.startsWith(`${qze}.`) || Re(e) || Te(e);
}
function P(e) {
  return e === g || e.startsWith(`${g}.`) && !F.includes(e.slice(g.length + 1)) || Se(e);
}
function Ee(e) {
  return e === T || e.startsWith(`${T}.`);
}
function Se(e) {
  return e.endsWith(g) && !m(e.slice(0, -g.length));
}
var ye = /^(.*)\.tfvars(?:\.json)?$/s;
function Re(e) {
  let t = ye.exec(e)?.[1];
  return t !== void 0 && !m(t);
}
var Ie = ["deploy_key", "credentials.json", "application_default_credentials.json", "fish_variables", "htpasswd", ".htdigest", ".msmtprc", ".fetchmailrc", ".sentryclirc", ".dev.vars", ".secrets", ".vault-token", ".dockercfg", ".clasprc.json", ".transifexrc", ".databrickscfg", ".ftpconfig", ".remote-sync.json", ".wakatime.cfg"],
  Ne = /^(?:service[-_]account(?:[-_]?key)?\.json|serviceaccountkey\.json|client_secret_.+\.apps\.googleusercontent\.com\.json|ssh_host_(?:rsa|dsa|ecdsa|ed25519)_key|fishd\.[0-9a-f]{12})$/s,
  he = /^\.(?:dev\.vars\.|vault_pass)/,
  xe = /^(.*)\.(?:tfstate(?:\.\d+)?|kdbx|ovpn)$/s;
function Te(e) {
  return XSr(e) && N();
}
function N() {
  if (er()) return !0;
  if (kd()) return !0;
  return !1;
}
var bpt = [["git", "credentials"], ["gh", "hosts.yml"], ["gcloud", "credentials.db"], ["gcloud", "access_tokens.db"]];
function H(e) {
  return bpt.some(item => MQt(e.slice(-item.length), item));
}
function V6(e) {
  return [e, ...n0t(e)].some(item => {
    let n = f(item);
    if (n.some(item => item.length > d_e)) return !0;
    let r = d(n.at(-1) ?? "", !0).flat();
    if (!bpt.some(([, i]) => r.includes(i))) return !1;
    let {
      readingsByFold: readingsByFold_3,
      present: present_2
    } = v(n);
    return readingsByFold_3.some(item => item.some(item => item.length > e0t)) || H(present_2);
  });
}
function Bgs(e) {
  return V6(e) && N();
}
function XSr(e) {
  let t = xe.exec(e)?.[1];
  return Ie.includes(e) || Ne.test(e) || he.test(e) && !m(e) || t !== void 0 && !m(t);
}
function F2(e) {
  return [e, ...n0t(e)].some(item => d(f(item).at(-1) ?? "", !0).flat().some(XSr));
}
function m(e) {
  return F.includes(e.split(".").at(-1) ?? "");
}
function r0t(e) {
  return e.includes(":") ? [Ol, ...Q.map(item => n => ULr(n.replace(item, "")))] : [Ol];
}
var Hze = 4096;
function z(e) {
  return be(e).catch(() => {
    return;
  });
}
async function dJe(e, t, {
  attached = !1,
  readable = !1,
  realDirectory = z
} = {}) {
  if (Uze(t) || (readable ? K(t) : await Spt(t, realDirectory))) return "own_or_device";
  return !attached && (Ix(e) || t !== e && Ix(t)) ? "credential_name" : void 0;
}
async function UZ(e, t) {
  return (await dJe(e, t)) !== void 0;
}
async function Spt(e, t = z) {
  if (K(e)) return !0;
  let n = W(e);
  for (let r of [...fD(), Ce(Fte)]) {
    let o = W((await t(r)) ?? Oe(r));
    if (n === o || n.startsWith(`${o}/`)) return !0;
  }
  return !1;
}
function K(e) {
  return nLe(e) || De(B(e));
}
function W(e) {
  return e.normalize("NFC").split(/[\\/]/).map(Ol).join("/");
}
function De(e) {
  let t = Ol(e);
  if (/^\.claude.*\.json/.test(t)) return !0;
  return [...$Hi, ...pBs.map(item => B(item))].some(item => {
    let r = Ol(item);
    return t === r || t === `${r}~` || t.startsWith(`${r}.`);
  });
}
export { MDn, Igs, Mgs, e0t, d_e, Dgs, Lgs, muo, t0t, huo, IQt, Ngs, n0t, Ix, Fgs, Hgs, MQt, guo, B0e, DDn, yuo, c_e, lJe, $gs, Ugs, bpt, V6, Bgs, XSr, F2, r0t, Hze, dJe, UZ, Spt };