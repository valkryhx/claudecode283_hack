// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  er
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  Ol,
  ULr
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  x
} from "B:/~BUN/root/chunk-mwfggkjt.js";
import {
  Fte,
  pBs
} from "B:/~BUN/root/chunk-pwj77283.js";
import {
  Kze,
  qze,
  R_s,
  $Hi
} from "B:/~BUN/root/chunk-rv3pfsrw.js";
import {
  fD,
  g_s,
  nLe
} from "B:/~BUN/root/chunk-b7bhhce8.js";
import {
  Uze
} from "B:/~BUN/root/chunk-s4gx10ck.js";
import {
  kd
} from "B:/~BUN/root/chunk-jbjsy1k0.js";
import {
  L
} from "B:/~BUN/root/chunk-5ha2avah.js";
import {
  realpath as be
} from "fs/promises";
import {
  basename as B,
  dirname as Ce,
  resolve as Oe
} from "path";
import {
  isAbsolute as O
} from "path";
var S = String.raw`\.sw[a-p]|\.un~|\.rej|\.save\.\d+|\.save|\.tmp|\.temp|\.bak|\.old|\.orig|\.backup|\.~\d+~|~`,
  U = String.raw`\.part(?:ial)?|\.(?:cr)?download| copy| - copy| \d+| ?\(\d+\)| \((?=[^()/]*(?:conflict|copy))[^()/]*\)|\.sync-conflict-[\w-]+`,
  MDn = `${S}|${U}`,
  h = ".~ (";
var Igs = [".ssh", ".aws", ".azure", ".gnupg", ".kube", ".docker"],
  Mgs = [
    [".config", "git"],
    [".config", "gh"],
    [".config", "glab-cli"],
    [".config", "gcloud"],
    ["appdata", "roaming", "gcloud"],
    [".cargo", "credentials"],
    [".cargo", "credentials.toml"],
    [".gem", "credentials"],
    [".m2", "settings.xml"],
    [".gradle", "gradle.properties"],
    ["documents", "powershell", "profile.ps1"],
    ["documents", "windowspowershell", "profile.ps1"],
    [".config", "powershell", "profile.ps1"],
    [".claude", "settings.json"],
    [".claude", "settings.local.json"],
    [".claude", "state", "unattended-serving-consent.json"],
    [".claude", "state", "device-mcp-consent.json"],
    [".claude", "state", "device-mcp-snapshot.json"],
    [".claude", "state", "served-calls"],
    [".claude", "state", "settings-review.json"],
    [".claude", "state"],
    ["appdata", "roaming", "github cli"],
    ["appdata", "roaming", "gh"],
    ["appdata", "roaming", "glab-cli"],
    ["appdata", "roaming", "gnupg"],
    ["appdata", "local", "microsoft", "credentials"],
    ["appdata", "roaming", "microsoft", "credentials"],
    ["appdata", "local", "microsoft", "vault"],
    ["appdata", "roaming", "microsoft", "vault"],
    ["appdata", "roaming", "microsoft", "protect"],
    ["library", "keychains"]
  ],
  Y = [".netrc", "_netrc", ".git-credentials", ".gitconfig", Kze, qze, R_s, ".envrc", ".mcp.json", ".npmrc", ".yarnrc", ".yarnrc.yml", ".pypirc", ".pgpass", ".my.cnf", ".mylogin.cnf", ".terraformrc", "terraform.rc", "credentials.tfrc.json", ".boto", ".s3cfg", "kubeconfig", "kubeconfig.yaml", "kubeconfig.yml", "kubeconfig.json", ".bashrc", ".bash_profile", ".bash_login", ".bash_logout", ".bash_aliases", ".profile", ".zshrc", ".zshenv", ".zprofile", ".zlogin", ".zlogout", "config.fish", "microsoft.powershell_profile.ps1", "microsoft.vscode_profile.ps1", "microsoft.powershellise_profile.ps1", ".bash_history", ".zsh_history", "fish_history", "consolehost_history.txt", ".python_history", ".node_repl_history", ".psql_history", ".mysql_history"],
  D = /(?:\.(?:pem|key|p12|pfx|keystore|jks)|_(?:rsa|dsa|ecdsa|ed25519)(?:_sk(?:_rk(?:_.*)?)?)?|secrets?\.(?:ya?ml|json|toml))$/s,
  g = ".env",
  V = R_s,
  F = ["example", "sample", "template", "dist"],
  A = new RegExp(`(?:${MDn})$`, "i"),
  q = new RegExp(`(?:${S})$`, "i"),
  J = new RegExp(`(?:${MDn})((?!(?:${MDn})$)(?!\\.\\d+$)\\.[^./]+)$`, "i"),
  e0t = 64,
  d_e = 255,
  Q = [/(?!)/, /:[^:]*$/, /:[^:]*:[^:]*$/, /:.*$/s],
  Z = /~[^/~.][^/~]*$/,
  Dgs = "(?:BACKUP|BASE|LOCAL|REMOTE)",
  Lgs = `_${Dgs}_(?:[LR]CONFL_)?\\d{2,}`,
  ee = new RegExp(`^(.*)${Lgs}(\\.[^./]*)?$`, "is"),
  te = ".git",
  T = "config";

function muo(e, t = f(e)) {
  if (!O(e)) return !1;
  let r = `/${t.map(Ol).join("/")}`;
  if ((r === e ? [e] : [e, r]).some((i) => nLe(i) || b(i).some(nLe))) return !0;
  let o = `/${t.join("/")}`;
  if ((o === r ? [o] : [o, r]).some(re)) return !0;
  let s = `/${t.map((i,c)=>c===t.length-1?i:R(i,_)).join("/")}`;
  if (s !== o && (nLe(s) || b(s).some(nLe))) return !0;
  return !1
}

function t0t(e) {
  return ne(e, {
    exceptFiles: w,
    withGitConfigBelowGitFolders: !0
  })
}
var w = new Set;

function ne(e, {
  exceptFiles: t,
  withGitConfigBelowGitFolders: n
}) {
  let r = f(e);
  if (r.some((l) => l.length > d_e)) return !0;
  if (muo(e, r)) return !0;
  let {
    readingsByFold: o,
    readings: s,
    present: i
  } = v(r), c = s.at(-1) ?? [];
  return o.some((l) => l.some((a) => a.length > e0t)) || s.some((l) => l.some((a) => Igs.includes(a))) || Mgs.some((l) => MQt(s, l) || MQt(i, l)) || H(i) && N() || guo(s) || guo(i) || c.some((l) => Ugs(l, t)) || n && huo(s)
}

function huo(e) {
  return (e.at(-1) ?? []).some(Ee) && e.slice(0, -1).some((t) => t.some((n) => n.endsWith(te)))
}

function v(e) {
  let t = e.map((r, o) => d(r, o === e.length - 1)),
    n = t.map((r) => L(r.flat()));
  return {
    readingsByFold: t,
    readings: n,
    present: n.filter((r, o) => o === e.length - 1 || !t[o]?.[0]?.some(u))
  }
}

function d(e, t) {
  let n = B0e(e, {
    leadingDot: t
  });
  return r0t(e).map((r) => L([...B0e(r(e), {
    leadingDot: t
  }), ...n.map(r)]))
}

function IQt(e) {
  return L(d(e, !1).flat())
}

function Ngs(e) {
  return L(d(e, !0).flat())
}

function R(e, t) {
  if (e.length > d_e) return e;
  let n = e;
  for (;;) {
    let r = t.reduce((o, s) => o === n ? s(o) : o, n);
    if (r === n || E.has(r)) return n;
    n = r
  }
}

function n0t(e) {
  let t = e.split("/"),
    n = t.at(-1) ?? "",
    r = t.slice(0, -1),
    o = r.filter((l) => !u(l)).map((l) => R(l, M)),
    s = R(n, _),
    i = u(n) || u(s) || n.length <= d_e && B0e(n, {
      leadingDot: !0
    }).some(u) ? "" : s,
    c = (l, a) => [...l, a].join("/");
  return L([c(r, i), c(r, I(n)), c(r, p(n)), c(r, p(i)), c(o, n), c(o, i), c(o, p(i))]).filter((l) => l !== e)
}

function b(e) {
  let t = x() === "windows" ? Math.max(e.lastIndexOf("/"), e.lastIndexOf("\\")) : e.lastIndexOf("/");
  if (t === -1) return [];
  let n = e.slice(t + 1);
  return B0e(n, {
    leadingDot: !0
  }).filter((r) => r !== n).map((r) => `${e.slice(0,t+1)}${r}`)
}

function re(e) {
  let t = c_e(e);
  return t === null ? !0 : t.some((n) => O(n) && nLe(n))
}

function Ix(e) {
  return [e, ...n0t(e)].some(t0t)
}

function Fgs(e) {
  let t = f(e).at(-1);
  if (t === void 0) return !0;
  return r0t(t).flatMap((n) => [n(t), DDn(n(DDn(t)))]).some((n) => P(n) || D.test(n))
}

function Hgs() {
  return x() === "windows" ? /[\\/]/ : "/"
}

function f(e) {
  return e.split(Hgs()).filter((t) => t !== "")
}

function MQt(e, t) {
  return e.some((n, r) => t.every((o, s) => e[r + s]?.includes(o) === !0))
}

function guo(e) {
  return e.some((t, n) => t.includes(".claude") && e[n + 1]?.some((r) => g_s.some((o) => r === o || r.startsWith(`${o}.`))) === !0)
}
var G = [ce, ae, k, I, DDn],
  M = [ie, ...G],
  _ = [se, le, ...G],
  oe = [..._, p],
  E = new Set(["", ".", ".."]);

function B0e(e, {
  leadingDot: t = !0,
  copyMarks: n = !0
} = {}) {
  let r = t ? oe : n ? _ : M;
  if (r.every((s) => s(e) === e)) return [e];
  let o = (s, i) => {
    if (i.length === 0 || s.size > e0t) return s;
    let c = L(i.flatMap((l) => r.map((a) => a(l)))).filter((l) => !s.has(l) && !E.has(l));
    return o(new Set([...s, ...c]), c)
  };
  return [...o(new Set([e]), [e])]
}

function se(e) {
  let t = A.exec(e);
  return t === null || t.index === 0 ? e : e.slice(0, t.index)
}

function ie(e) {
  let t = q.exec(e);
  return t === null || t.index === 0 ? e : e.slice(0, t.index)
}

function le(e) {
  let t = J.exec(e);
  return t === null ? e : e.slice(0, t.index) + (t[1] ?? "")
}

function ce(e) {
  let t = Z.exec(e);
  return t === null || t.index === 0 ? e : e.slice(0, t.index)
}

function ae(e) {
  let t = ee.exec(e),
    n = t === null ? "" : `${t[1]}${t[2]??""}`;
  return n === "" ? e : n
}

function k(e) {
  return e.length > 2 && e.startsWith("#") && e.endsWith("#") ? e.slice(1, -1) : e
}

function I(e) {
  return e.length > 2 && e.startsWith(".#") ? e.slice(2) : e
}

function p(e) {
  return e.replace(/^\.(?=.)/s, "")
}
var j = `
\r\u2028\u2029. `;

function DDn(e) {
  let t = e.length;
  while (t > 0 && j.includes(e[t - 1] ?? "")) t -= 1;
  return e.slice(0, t)
}

function u(e) {
  if (E.has(e) || !yuo.includes(e[0] ?? "") || e.length > d_e) return !1;
  let t = e;
  for (;;) {
    let n = DDn(t.replace(A, "")),
      r = k(n),
      o = r === n ? I(n) : r;
    if (o === "") return !0;
    if (o === t) return !1;
    t = o
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
  return r.some((o) => o === null) ? null : L([...t, ...n, ...r.flatMap((o) => o ?? [])]).filter((o) => o !== e)
}

function lJe(e) {
  let t = e.split("/");
  return e.length > me || t.length > _e || t.some((n) => n.length > d_e)
}

function C(e) {
  let t = e.split("/"),
    n = t.map((o, s) => {
      let i = s === t.length - 1,
        c = B0e(o, {
          leadingDot: i,
          copyMarks: i
        });
      return {
        readings: c,
        absentToo: !i && c.some(u)
      }
    });
  if (n.every((o) => o.readings.length === 1 && !o.absentToo)) return [];
  let r = n.reduce((o, {
    readings: s,
    absentToo: i
  }) => {
    if (o === null || s.length > e0t) return null;
    let c = o.flatMap((l) => [...s.map((a) => [...l, a]), ...i ? [l] : []]);
    return c.length > e0t ? null : c
  }, [
    []
  ]);
  return r === null ? null : L(r.map((o) => o.join("/"))).filter((o) => o !== e)
}

function $gs(e) {
  if (de.test(e)) return [];
  let t = e.split("/");
  return L(ue.map((n) => t.map((r) => {
    let o = n(r);
    return o !== r && ge(o, r) ? o : r
  }).join("/"))).filter((n) => n !== e)
}
var y = (e) => e.replace(fe, ""),
  ue = [y, (e) => y(e).normalize("NFKC"), (e) => y(e).normalize("NFKD").toLowerCase().toUpperCase().toLowerCase().replace(/i\u0307/g, "i").replace(/\u03c2/g, "\u03C3").normalize("NFC")];

function ge(e, t) {
  return !E.has(e) && !e.includes("/") && e.length <= d_e && [...pe].every((n) => e.split(n).length - 1 <= t.split(n).length - 1)
}
var de = /^[\x00-\x7f]*$/,
  fe = /\p{Default_Ignorable_Code_Point}/gu,
  pe = '\\:*?"<>|',
  me = 4096,
  _e = 256;

function Ugs(e, t = w) {
  return Y.includes(e) && !t.has(e) || D.test(e) || P(e) || e.startsWith(`${V}.`) || e.startsWith(".config.json.") || e.startsWith(`${Kze}.`) || e.startsWith(`${qze}.`) || Re(e) || Te(e)
}

function P(e) {
  return e === g || e.startsWith(`${g}.`) && !F.includes(e.slice(g.length + 1)) || Se(e)
}

function Ee(e) {
  return e === T || e.startsWith(`${T}.`)
}

function Se(e) {
  return e.endsWith(g) && !m(e.slice(0, -g.length))
}
var ye = /^(.*)\.tfvars(?:\.json)?$/s;

function Re(e) {
  let t = ye.exec(e)?.[1];
  return t !== void 0 && !m(t)
}
var Ie = ["deploy_key", "credentials.json", "application_default_credentials.json", "fish_variables", "htpasswd", ".htdigest", ".msmtprc", ".fetchmailrc", ".sentryclirc", ".dev.vars", ".secrets", ".vault-token", ".dockercfg", ".clasprc.json", ".transifexrc", ".databrickscfg", ".ftpconfig", ".remote-sync.json", ".wakatime.cfg"],
  Ne = /^(?:service[-_]account(?:[-_]?key)?\.json|serviceaccountkey\.json|client_secret_.+\.apps\.googleusercontent\.com\.json|ssh_host_(?:rsa|dsa|ecdsa|ed25519)_key|fishd\.[0-9a-f]{12})$/s,
  he = /^\.(?:dev\.vars\.|vault_pass)/,
  xe = /^(.*)\.(?:tfstate(?:\.\d+)?|kdbx|ovpn)$/s;

function Te(e) {
  return XSr(e) && N()
}

function N() {
  if (er()) return !0;
  if (kd()) return !0;
  return !1
}
var bpt = [
  ["git", "credentials"],
  ["gh", "hosts.yml"],
  ["gcloud", "credentials.db"],
  ["gcloud", "access_tokens.db"]
];

function H(e) {
  return bpt.some((t) => MQt(e.slice(-t.length), t))
}

function V6(e) {
  return [e, ...n0t(e)].some((t) => {
    let n = f(t);
    if (n.some((i) => i.length > d_e)) return !0;
    let r = d(n.at(-1) ?? "", !0).flat();
    if (!bpt.some(([, i]) => r.includes(i))) return !1;
    let {
      readingsByFold: o,
      present: s
    } = v(n);
    return o.some((i) => i.some((c) => c.length > e0t)) || H(s)
  })
}

function Bgs(e) {
  return V6(e) && N()
}

function XSr(e) {
  let t = xe.exec(e)?.[1];
  return Ie.includes(e) || Ne.test(e) || he.test(e) && !m(e) || t !== void 0 && !m(t)
}

function F2(e) {
  return [e, ...n0t(e)].some((t) => d(f(t).at(-1) ?? "", !0).flat().some(XSr))
}

function m(e) {
  return F.includes(e.split(".").at(-1) ?? "")
}

function r0t(e) {
  return e.includes(":") ? [Ol, ...Q.map((t) => (n) => ULr(n.replace(t, "")))] : [Ol]
}
var Hze = 4096;

function z(e) {
  return be(e).catch(() => {
    return
  })
}
async function dJe(e, t, {
  attached: n = !1,
  readable: r = !1,
  realDirectory: o = z
} = {}) {
  if (Uze(t) || (r ? K(t) : await Spt(t, o))) return "own_or_device";
  return !n && (Ix(e) || t !== e && Ix(t)) ? "credential_name" : void 0
}
async function UZ(e, t) {
  return await dJe(e, t) !== void 0
}
async function Spt(e, t = z) {
  if (K(e)) return !0;
  let n = W(e);
  for (let r of [...fD(), Ce(Fte)]) {
    let o = W(await t(r) ?? Oe(r));
    if (n === o || n.startsWith(`${o}/`)) return !0
  }
  return !1
}

function K(e) {
  return nLe(e) || De(B(e))
}

function W(e) {
  return e.normalize("NFC").split(/[\\/]/).map(Ol).join("/")
}

function De(e) {
  let t = Ol(e);
  if (/^\.claude.*\.json/.test(t)) return !0;
  return [...$Hi, ...pBs.map((n) => B(n))].some((n) => {
    let r = Ol(n);
    return t === r || t === `${r}~` || t.startsWith(`${r}.`)
  })
}
export {
  MDn,
  Igs,
  Mgs,
  e0t,
  d_e,
  Dgs,
  Lgs,
  muo,
  t0t,
  huo,
  IQt,
  Ngs,
  n0t,
  Ix,
  Fgs,
  Hgs,
  MQt,
  guo,
  B0e,
  DDn,
  yuo,
  c_e,
  lJe,
  $gs,
  Ugs,
  bpt,
  V6,
  Bgs,
  XSr,
  F2,
  r0t,
  Hze,
  dJe,
  UZ,
  Spt
};
