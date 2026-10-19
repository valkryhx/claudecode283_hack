// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Wgt,
  Zln,
  np,
  Gt
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  Vt
} from "B:/~BUN/root/chunk-9ka04m0y.js";
import {
  F,
  L,
  at,
  we
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  d,
  k
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  Y
} from "B:/~BUN/root/chunk-89mss1tj.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  vp,
  ln
} from "B:/~BUN/root/chunk-jpdys232.js";
import {
  bt,
  Km,
  _,
  W5,
  ps,
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  O,
  ne
} from "B:/~BUN/root/chunk-nggrknsv.js";
import {
  Zx,
  aF,
  ude
} from "B:/~BUN/root/chunk-2zk4vqr8.js";
import {
  Kr,
  jt
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  ce
} from "B:/~BUN/root/chunk-nxwmyxnk.js";
import {
  Hf
} from "B:/~BUN/root/chunk-wegca9zh.js";
import {
  pt
} from "B:/~BUN/root/chunk-cqkcn3bx.js";
import {
  f
} from "B:/~BUN/root/chunk-frrkt2bs.js";
import {
  ZO,
  jJ
} from "B:/~BUN/root/chunk-8ye9n4fk.js";
import {
  Rt,
  Xs
} from "B:/~BUN/root/chunk-vpgpdrbv.js";
import {
  dt,
  Kt
} from "B:/~BUN/root/chunk-kad4nq7y.js";
import {
  zD
} from "B:/~BUN/root/chunk-h9p45fg5.js";
import {
  Qt
} from "B:/~BUN/root/chunk-hkc0g0wr.js";
import {
  SXe,
  mp,
  mje
} from "B:/~BUN/root/chunk-zayh6xmh.js";
import {
  Af,
  apt
} from "B:/~BUN/root/chunk-1fjjnb3f.js";
import {
  rae,
  Sxr,
  lft,
  u1e,
  FOe,
  ON,
  p1e,
  oy
} from "B:/~BUN/root/chunk-c44qc88s.js";
import {
  BP,
  Rk,
  Bio,
  xk,
  G1,
  tM,
  sU,
  _q,
  FNn,
  APt,
  cys
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  gCs,
  TU,
  yCs
} from "B:/~BUN/root/chunk-dn8rakwm.js";
import {
  zy
} from "B:/~BUN/root/chunk-472kxa0t.js";
import {
  h1e,
  dc,
  Ho
} from "B:/~BUN/root/chunk-ses0c36n.js";
import {
  kqe
} from "B:/~BUN/root/chunk-a9ttgpjt.js";
import {
  iu
} from "B:/~BUN/root/chunk-72n790j1.js";
import {
  _ve,
  yPs,
  _Ps
} from "B:/~BUN/root/chunk-f06s8ws5.js";
import {
  ih,
  Ysr,
  vqe
} from "B:/~BUN/root/chunk-6h80td9s.js";
import {
  Tir,
  X8r,
  rTn,
  mKt,
  nes,
  Cir
} from "B:/~BUN/root/chunk-6mmdj4ax.js";
import {
  lH
} from "B:/~BUN/root/chunk-0g1grf6f.js";
import {
  ha
} from "B:/~BUN/root/chunk-rsysgs10.js";
import {
  Jk
} from "B:/~BUN/root/chunk-j2tkftkw.js";
import {
  o,
  v,
  M,
  oe,
  T,
  u,
  De,
  U,
  C
} from "B:/~BUN/root/chunk-g3snhg6n.js";
import {
  U_,
  st
} from "B:/~BUN/root/chunk-7aw74be3.js";
import {
  Zt
} from "B:/~BUN/root/chunk-ekswf6ps.js";
import {
  ve,
  Mr
} from "B:/~BUN/root/chunk-ef0msk7r.js";
var Kqt = {};
Mr(Kqt, {
  MAX_CARD_FILES: () => g8r,
  default: () => Kqt
});
import {
  resolve as qu
} from "path";
var cp = (e) => e.kind === "needs-manifest" ? e.draft : void 0;
import {
  realpath as em
} from "fs/promises";
import {
  join as rm,
  resolve as om
} from "path";
import {
  dirname as hp,
  join as gp
} from "path";
var ao = BP(hp(gp(Af)));

function fo(e) {
  let r = e instanceof Error ? e.cause : void 0;
  return [d(e), typeof r === "string" ? r : ""].filter(Boolean)
}
var xp = (e, r) => ({
  kind: e,
  details: r
});
var l = (e, r = []) => ({
  kind: "refused",
  refusal: xp(e, r)
});
var B = (e) => e.catch((r) => l("unreadable", fo(r)));
import {
  rm as Rp
} from "fs/promises";
var yp = 3;
var bp = 100;
async function Me(e, r = yp) {
  let s = await Rp(e, {
    recursive: !0,
    force: !0
  }).then(() => {
    return
  }, (i) => i);
  if (s === void 0) return;
  if (r > 0) return await Y(bp), Me(e, r - 1);
  t(`A copy made to validate a plugin could not be removed: ${k(s)??"no code"}`, {
    level: "warn"
  })
}
var re = () => Error("The copy to validate was ended as the process ends");
var Fe = (e, r) => e.path.localeCompare(r.path, "en");
var Ce = 1e4;
import {
  readdir as Qp
} from "fs/promises";
import {
  join as Yp
} from "path";
import {
  lstat as Sp
} from "fs/promises";
var Ap = (e) => e.isSymbolicLink() && "link" || e.isDirectory() && "folder" || e.isFile() && "file" || "special";
async function Op(e) {
  let r = await Sp(e);
  return {
    path: e,
    kind: Ap(r),
    bytes: r.size,
    mode: r.mode,
    links: r.nlink
  }
}
var Ue = 32;
import {
  join as Tp
} from "path";
var go = ".gitignore";
var Ao = ve(rae(), 1);
import {
  join as Ep
} from "path";
var Pp = (e) => e.split(/\r?\n/).map((r, s) => ({
  line: r,
  named: `line ${s+1}: ${r}`
})).find((r) => Sxr(r.line) !== null)?.named;
import {
  lstat as wp
} from "fs/promises";
var _p = Object.freeze(["ENOENT", "ENOTDIR"]);
var bo = (e) => _p.includes(k(e) ?? "");
var Lp = (e) => wp(e).then(() => Promise.reject(Error("A .gitignore here cannot be read")), (r) => bo(r) ? "" : Promise.reject(r));
async function So(e) {
  let r = Ep(e, go),
    s = await sU(r) ?? await Lp(r),
    i = Pp(s);
  if (i !== void 0) throw Error("A .gitignore line cannot be read", {
    cause: `${r} ${i}`
  });
  let n = lft(s);
  return n.length > 0 ? [{
    base: e,
    rules: Ao.default().add(n)
  }] : []
}
async function Ip(e, r) {
  let s = Tp(e, go);
  if (r.some((n) => n.path === s && n.kind === "file" && n.links > 1)) throw Error("A .gitignore here cannot be read", {
    cause: s
  });
  return So(e)
}
import {
  relative as Mp
} from "path";
var K = (e, r) => BP(Mp(e, r.path));
import {
  basename as jp
} from "path";
import {
  basename as kp
} from "path";
var Po = Object.freeze([".mcp.json"]);
var Np = (e, r) => !Po.includes(r) && (TU(`/${r}`) || TU(`/${kp(e)}/${r}`) || yCs(`/${r}`));
import {
  dirname as Fp,
  join as zp
} from "path";
var Dp = Object.freeze({
  file: "",
  folder: "/",
  link: "",
  special: ""
});
var wo = (e, r) => e.toReversed().map(({
  base: s,
  rules: i
}) => i.test(K(s, r) + Dp[r.kind])).find((s) => s.ignored || s.unignored)?.ignored ?? !1;

function Cp(e, r, s) {
  let i = zp(e, Af),
    n = Fp(i);
  return !(s.path === i || s.path === n) && (wo(r.scope, s) || r.path === n && wo(r.scope.filter((p) => p.base !== n), {
    ...s,
    path: n,
    kind: "folder"
  }))
}
import {
  basename as Io
} from "path";
var Up = [...FNn, ".hg", ".svn", ".jj", ".sl", ".bzr"];

function Hp(e) {
  let r = [Io(e.path), ...gCs(Io(e.path))];
  return e.kind === "folder" && r.some((s) => s.endsWith(".git")) || r.some((s) => Up.includes(s))
}
var Bp = (e, r, s) => X8r([s.kind === "link" && "link", s.kind === "special" && "special", s.kind === "file" && s.links > 1 && "hard-link", jp(s.path).includes("\\") && "backslash", Hp(s) && "never", APt(e, s.path) && "generated", Np(e, K(e, s)) && "secret", Cp(e, r, s) && "ignored"]);

function Kp(e, r, s) {
  let i = Bp(e, r, s);
  return i === void 0 ? [] : [{
    path: K(e, s),
    why: i
  }]
}
var Do = 33188;
var qp = 73;
var zo = 33261;

function $p(e) {
  return (e.mode & qp) !== 0 ? zo : Do
}
var Xp = (e, r) => ({
  path: K(e, r),
  bytes: r.bytes,
  mode: $p(r)
});

function Gp(e, r, s) {
  let i = s.flatMap((m) => Kp(e, r, m)),
    n = new Set(i.map((m) => m.path)),
    p = s.filter((m) => !n.has(K(e, m)));
  return {
    files: p.filter((m) => m.kind === "file").map((m) => Xp(e, m)),
    leftOut: i,
    folders: p.filter((m) => m.kind === "folder").map((m) => ({
      path: m.path,
      scope: r.scope
    }))
  }
}
async function Vp(e, r) {
  let s = ha(Ue, (n) => Op(Yp(r.path, n))),
    i = await Promise.all((await Qp(r.path)).toSorted().map(s));
  return Gp(e, {
    path: r.path,
    scope: r.scope.concat(await Ip(r.path, i))
  }, i)
}
import {
  dirname as Zp
} from "path";

function Bo(e) {
  let r = Zp(e);
  return r === e ? [e] : [e, ...Bo(r)]
}
import {
  lstat as Jp
} from "fs/promises";
import {
  join as ef
} from "path";
var rf = (e) => Jp(ef(e, ".git")).then(() => !0, (r) => bo(r) ? !1 : Promise.reject(r));
async function of(e) {
  let r = Bo(e);
  for (let [s, i] of r.entries())
    if (await rf(i)) return r.slice(1, s + 1).toReversed();
  return []
}
var tf = async (e) => (await Promise.all((await of(e)).map(So))).flat();
async function $e(e) {
  let r = [],
    s = [],
    i = [{
      path: e,
      scope: await tf(e)
    }];
  for (let n of i) {
    if (r.length > Ce) break;
    let m = await Vp(e, n);
    r.push(...m.files), s.push(...m.leftOut), i.push(...m.folders)
  }
  return {
    files: r.toSorted(Fe),
    leftOut: s.toSorted(Fe)
  }
}
import {
  mkdir as _f,
  mkdtemp as vf
} from "fs/promises";
import {
  basename as wf,
  join as lt
} from "path";
import {
  mkdir as xf,
  writeFile as yf
} from "fs/promises";
import {
  dirname as bf,
  join as tt
} from "path";
var Go = 448;
var sf = 384;
import {
  join as gf
} from "path";
import {
  lstat as af,
  realpath as pf
} from "fs/promises";
var nf = !1;
var Vo = 1n;
var Zo = Object.freeze({
  bigint: !0
});
async function ff(e, r, s) {
  let i = await pf(r).catch(() => e),
    p = zy(e, i, nf) ? await af(i, Zo).catch(() => {
      return
    }) : void 0;
  return p?.ino === s.ino && p.dev === s.dev && p.nlink === Vo
}
import {
  open as lf
} from "fs/promises";
var mf = Object.freeze(["ENOENT", "ENOTDIR", "ELOOP", "EISDIR"]);
var uf = (e) => lf(e, iu()).catch((r) => mf.includes(k(r) ?? "") ? void 0 : Promise.reject(r));
import {
  lstat as df
} from "fs/promises";
import {
  dirname as cf
} from "path";
var hf = async (e, r) => await tM(e, cf(r)) === "ok" && (await df(r).catch(() => {
  return
}))?.isFile() === !0;
async function Ye(e, r) {
  let s = gf(e, r.path),
    n = await hf(e, s) ? await uf(s) : void 0;
  try {
    let p = await n?.stat(Zo),
      h = p?.isFile() === !0 && p.size === BigInt(r.bytes) && p.nlink === Vo && await ff(e, s, p) ? await n?.readFile() : void 0;
    return h?.length === r.bytes ? h : void 0
  } finally {
    await n?.close()
  }
}
async function Rf(e, r, s) {
  let i = await Ye(e, s);
  if (i === void 0) return;
  return await xf(bf(tt(r, s.path)), {
    recursive: !0,
    mode: Go
  }).then(() => yf(tt(r, s.path), i, {
    flag: "wx",
    mode: sf
  })).catch((n) => Promise.reject(Error("A file could not be copied to be validated", {
    cause: `${k(n)??""} ${s.path}`.trim()
  }))), st(i)
}
async function Sf(e, r, s) {
  e.abort(), await r, await s()
}
var Of = (e, r) => Object.fromEntries(e.map((s, i) => [s.path, r[i] ?? ""]));
var Pf = (e, r, s) => ({
  home: e,
  dir: r,
  hashes: s
});
async function Lf(e, r) {
  if (Km()) return Promise.reject(re());
  let s = await vf(lt(Hf(), "claude-publish-")).catch((R) => Promise.reject(Error("A folder to validate a copy in could not be made", {
      cause: k(R) ?? ""
    }))),
    i = Jk(() => Me(s));
  if (Km()) return await i(), Promise.reject(re());
  let n = lt(s, "copy", wf(e)),
    p = new AbortController,
    m = Promise.resolve().then(() => _f(n, {
      recursive: !0,
      mode: Go
    })).catch(() => {
      return
    }).then(() => Promise.allSettled(r.map(ha(Ue, (R) => p.signal.aborted ? Promise.resolve(void 0) : Rf(e, n, R).catch((S) => (p.abort(), Promise.reject(S)))))));
  using h = bt(() => Sf(p, m, i));
  let g = await m,
    b = g.find((R) => R.status === "rejected"),
    y = r.find((R, S) => g[S]?.status === "fulfilled" && !g[S].value);
  if (await (b === void 0 && y === void 0 && !p.signal.aborted ? void 0 : i()), b?.status === "rejected") return Promise.reject(b.reason);
  if (p.signal.aborted) return await i(), Promise.reject(re());
  if (y !== void 0) return {
    missed: y.path
  };
  return Pf(s, n, Of(r, g.map((R) => R.status === "fulfilled" ? R.value : void 0)))
}
var Ve = (e) => l("changed", [`${e.missed} is not the file that was listed`]);

function Ef(e, r) {
  let s = new Set(e.listing.files.map((i) => i.path));
  return [...e.listing.files.filter((i) => !Object.hasOwn(r.hashes, i.path)).map((i) => "Among the files to send only since the folder was read: " + i.path), ...Object.keys(r.hashes).filter((i) => !s.has(i)).map((i) => "No longer among the files to send since the folder was read: " + i), ...e.listing.files.filter((i) => Object.hasOwn(r.hashes, i.path) && e.hashes[i.path] !== r.hashes[i.path]).map((i) => `${i.path} is not the file that was listed`)].slice(0, 1)
}

function Tf(e, r) {
  let s = e.kind === "ready" ? Ef(e, r) : [];
  return s.length === 0 && (e.kind !== "ready" || e.listing.files.length === Object.keys(r.hashes).length) ? e : l("changed", s)
}
import {
  basename as If
} from "path";
var fe = (e) => e.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-").replaceAll(/^-|-$/g, "") || "plugin";

function Mf(e) {
  let r = kqe(fe(If(e)));
  return r?.severity === "error" ? [`${r.message} The name comes from the folder: rename it.`] : []
}
import {
  basename as Df
} from "path";
var xt = 300;
var kf = (e) => e && Rt(e, xt);
var Nf = "0.1.0";
var Ff = (e, r) => `${_({name:fe(Df(e)),version:Nf,description:kf(r)},null,2)}
`;
var zf = (e, r) => ({
  kind: "needs-manifest",
  root: e,
  draft: Ff(e, r)
});
var Cf = (e) => e.flatMap((r) => r.errors.map((s) => `${r.filePath}: ${s.path}: ${ps(s.message)}`));
import {
  join as jf
} from "path";
var Uf = (e) => ({
  name: e.name,
  version: e.version,
  description: e.description
});
var Wf = f(() => u({
  name: o(),
  version: o().optional(),
  description: o().optional()
}));
async function Bf(e) {
  let r = await _q(jf(e, Af)),
    s = Wf().safeParse(pt(r.kind === "ok" ? r.content : ""));
  if (r.kind === "absent") return "absent";
  return s.success ? Uf(s.data) : "unreadable"
}

function Kf(e, r) {
  return e !== void 0 && r !== void 0 ? [
    [e.path, st(r)]
  ] : []
}
async function Et(e, r, s) {
  let i = await Promise.all(e.map(ha(Ue, r))),
    n = e.find((m, h) => i[h] === void 0);
  return n === void 0 ? i.flatMap((m, h) => s(e[h], m)) : {
    missed: n.path
  }
}
async function qf(e, r) {
  let s = await Et(r, (i) => Ye(e, i), Kf);
  return "missed" in s ? s : {
    hashes: Object.fromEntries(s)
  }
}
var It = (e) => e.files.map((r) => r.path).filter((r) => `/${r}`.endsWith(`/${BP(Af)}`));
var rr = 52428800;

function Mt(e, r) {
  let s = It(e);
  if (s.length > 1) return l("findings", [`More than one manifest: ${s.join(", ")}`]);
  if (e.files.length > Ce) return l("too-many-files");
  return r > rr ? l("too-large") : void 0
}
async function kt(e, r) {
  let s = await $e(e),
    i = s.files.reduce((h, g) => h + g.bytes, 0),
    n = Mt(s, i);
  if (n !== void 0) return n;
  let p = await qf(e, s.files);
  return "missed" in p ? Ve(p) : {
    kind: "ready",
    root: e,
    manifest: r,
    listing: s,
    bytes: i,
    hashes: p.hashes
  }
}
import {
  basename as zt,
  dirname as Ct
} from "path";
var $f = [" ", "\t", `
`, '"', "'", "("];
var Xf = (e) => e.slice(0, 1 + Math.max(...$f.map((r) => e.lastIndexOf(r))));

function Gf(e, r, s) {
  let i = e.split(r);
  return i.slice(0, -1).map((n) => Xf(n) + s).concat(i.at(-1) ?? "").join("")
}

function sr(e, r, s) {
  let i = Ct(r.dir),
    n = Ct(s).replace(/[\\/]$/, "");
  return [`${zt(r.home)}/copy`, `${zt(r.home)}\\copy`].reduce((p, m) => Gf(p, m, n), e.replaceAll(i, () => n).replaceAll(ih(i, i.length), () => n))
}
var Qf = (e, r, s) => e.map((i) => ({
  ...i,
  filePath: sr(i.filePath, r, s),
  errors: i.errors.map((n) => ({
    ...n,
    message: sr(n.message, r, s)
  }))
}));

function Yf(e) {
  return e.kind === "ready" && It(e.listing).length === 0 ? l("unreadable", [BP(Af)]) : e
}
async function Vf(e, r, s) {
  let {
    manifest: i,
    contents: n
  } = await vqe(r.dir), p = i?.errors.some((y) => y.code === Ysr) ?? !0, m = Cf(Qf(p ? n : [i ?? [], n].flat(), r, e)).concat(p ? Mf(e) : []), h = p ? await apt(r.dir) : i?.fileType === "plugin", g = await Bf(r.dir);
  if (!h) return l("not-a-plugin");
  if (m.length > 0) return l("findings", m);
  if (g === "unreadable") return l("unreadable", [BP(Af)]);
  return g === "absent" ? zf(e, s) : Tf(Yf(await kt(e, g)), r)
}

function Zf(e) {
  let r = BP(Af);
  return e.leftOut.some((i) => i.path === r) ? l("unreadable", [r]) : void 0
}
async function Jf(e, r) {
  let s = await $e(e),
    i = Zf(s) ?? Mt(s, s.files.reduce((h, g) => h + g.bytes, 0));
  if (i !== void 0) return i;
  let n = await Lf(e, s.files);
  if ("missed" in n) return Ve(n);
  let p = Jk(() => Me(n.home));
  using m = bt(p);
  if (Km()) return await p(), Promise.reject(re());
  try {
    return await Vf(e, n, r).catch((h) => l("unreadable", fo(h).map((g) => sr(g, n, e))))
  } finally {
    await p()
  }
}
async function $t(e, r) {
  let s = await em(om(ce(), e)).catch(() => {
    return
  });
  if (!(s !== void 0 && await G1(s))) return l("no-folder", [e]);
  return await tM(s, rm(s, ao)) === "refused" ? l("unreadable", [ao]) : B(Jf(s, r))
}
var tm = (e) => ({
  path: BP(Af),
  bytes: Buffer.byteLength(e.draft),
  mode: Do
});
import {
  basename as sm
} from "path";

function im(e) {
  let r = jJ().safeParse(pt(e.draft));
  return {
    name: r.data?.name ?? sm(e.root),
    version: r.data?.version,
    description: r.data?.description
  }
}
var nm = (e, r) => ({
  files: e.files.concat(r).toSorted(Fe),
  leftOut: e.leftOut
});
var am = (e, r, s) => ({
  ...e,
  [r]: st(s)
});
var pm = (e, r, s) => ({
  ...e,
  bytes: e.bytes + r.bytes,
  listing: nm(e.listing, r),
  hashes: am(e.hashes, r.path, s.draft)
});
async function fm(e) {
  let r = tm(e),
    s = await kt(e.root, im(e));
  return s.kind === "ready" ? pm(s, r, e) : s
}
async function mm(e) {
  return e.kind === "needs-manifest" ? B(fm(e)) : e
}
async function ar(e, r) {
  let s = await $t(e.folder, e.description),
    i = await mm(s);
  if (i.kind === "refused") return i;
  return i.kind === "ready" ? {
    wanted: e,
    plan: i,
    organization: r,
    draft: cp(s),
    withheld: !1
  } : l("unreadable")
}
var ss = Object.freeze({
  nothing: "Nothing was sent.",
  uploading: "The upload was on its way: look in your uploads on claude.ai, where it may have arrived. Nothing was submitted.",
  shelved: "The upload had arrived on your own shelf, where only you see it. It was not submitted.",
  submitting: "The upload had arrived, and its submission was on its way: it may have reached your organization."
});

function E(e, r, s) {
  return e.signal.aborted ? l("stopped", [ss[s]]) : r
}

function is(e) {
  return e === "." || e === ".." ? e.replaceAll(".", "%252E") : encodeURIComponent(e).replaceAll(".", "%2E")
}
var lm = (e) => `/api/oauth/organizations/${is(e.organization.id)}`;
var lr = (e, r) => `${lm(e)}/${r.map(is).join("/")}`;
var de = (e, r) => ({
  method: "get",
  path: lr(e, r),
  body: void 0,
  headers: {},
  bound: "clock",
  signal: e.signal
});
var um = 200;
var dm = 300;
var I = (e) => e.status >= um && e.status < dm;
var cm = 400;
var hm = 405;
var gm = 404;
var xm = 501;
var ym = 422;
var bm = Object.freeze([cm, gm, hm, ym, xm]);
var Rm = 20;
var Am = 300;
var Sm = Object.freeze(["scan", "other"]);
var Om = (e, r) => [...r.findings, ...[r.message ?? ""].filter((s) => s !== "" && Sm.includes(e))].slice(0, Rm).map((s) => ne(s, Am));
var Pm = f(() => u({
  error: u({
    message: o().optional(),
    details: u({
      error_code: o().optional(),
      validation_errors: u({
        message: o().optional(),
        plugins: T(u({
          name: o().optional(),
          error: o().optional()
        })).optional()
      }).optional()
    }).optional()
  }).optional()
}));

function ur(e) {
  let r = Pm().safeParse(e.data).data?.error,
    s = r?.details?.validation_errors;
  return {
    code: r?.details?.error_code,
    message: r?.message,
    findings: [s?.message ?? "", ...(s?.plugins ?? []).map((i) => [i.name, i.error].filter(Boolean).join(": "))].filter(Boolean)
  }
}

function ge(e, r) {
  let s = ur(e),
    i = r.codes[s.code ?? ""] ?? r.statuses[e.status] ?? "other";
  return l(i, Om(i, s))
}
var _m = Object.freeze({});
var vm = 120000;
var wm = 15000;
var Lm = Object.freeze({
  get: wm,
  post: vm
});

function Em(e) {
  return e.bound === "progress" ? {
    streamUpload: _m
  } : {
    timeout: Lm[e.method]
  }
}
var Tm = (e) => ({
  ...e.headers,
  "anthropic-beta": vp
});
var Im = 4194304;
var Ls = (e) => ({
  auth: "teleport-org",
  headers: Tm(e),
  ...Em(e),
  signal: e.signal,
  maxBodyLength: Buffer.byteLength(e.body ?? ""),
  maxContentLength: Im,
  maxRedirects: 0,
  validateStatus: () => !0
});

function Mm(e) {
  return e.method === "get" ? Gt.get(e.path, Ls(e)) : Gt.post(e.path, e.body, Ls(e))
}
var Is = Object.freeze({
  status: 0,
  data: void 0
});

function km(e, r) {
  return t(`plugin publish: ${e.method} ${e.path} got no answer: ` + d(r), {
    level: "error"
  }), Is
}
var Nm = Object.freeze({
  "data-residency": "third-party",
  "essential-traffic-only": "traffic-off",
  "no-auth": "signed-out"
});
async function xe(e) {
  let r = await Mm(e).catch((i) => km(e, i));
  return "status" in r ? {
    status: r.status,
    data: r.data
  } : l(Nm[r.reason] ?? "other")
}
var Dm = Object.freeze(["plugin_upload_conflict", "plugin_previous_save_scanning", "plugin_upload_busy", "plugin_content_scan_rate_limited", "org_library_submission_conflict", "org_library_submission_source_changed"]);
var Fm = 429;
var zm = 503;
var Cm = Object.freeze([Fm, zm]);
var Um = (e, r) => e.method === "get" && r.status === Is.status || Cm.includes(r.status) || Dm.includes(ur(r).code ?? "");
var Hm = 3;
var Wm = 2000;
async function Q(e, r = Hm) {
  let s = await xe(e);
  if (!(r > 0 && !e.signal.aborted && ("status" in s) && Um(e, s))) return s;
  return await Y(Wm, e.signal), Q(e, r - 1)
}
var Ws = (e) => [e, ...Object.values(Object(e))].find(Array.isArray) ?? [];
var js = f(() => u({
  uuid: o().optional(),
  plugin_id: o().nullish(),
  plugin_name: o().nullish(),
  status: o().optional(),
  publish_state: o().nullish(),
  updates_published_plugin_id: o().nullish(),
  denial_reason: o().nullish(),
  outcome: u({
    published_plugin_id: o().nullish(),
    published_marketplace_id: o().nullish(),
    failure_reason: o().nullish()
  }).nullish()
}));
var jm = (e) => Ws(e).flatMap((r) => [js().safeParse(r)].flatMap((s) => s.success ? [s.data] : []));
var Bm = Object.freeze({
  plugin_version_scan_pending: "scan-pending",
  plugin_version_scan_failed: "scan",
  org_library_submission_already_pending: "already-pending",
  org_library_submission_nothing_to_publish: "nothing-new",
  org_library_submission_publish_in_progress: "in-progress",
  org_library_submission_update_needs_admin: "needs-admin",
  org_library_submission_update_needs_org_settings: "needs-org-settings",
  org_library_submission_name_taken: "name-conflict",
  org_library_submission_library_full: "library-full",
  org_library_submission_update_name_mismatch: "busy",
  org_library_submission_update_target_deleted: "busy",
  org_library_submission_install_preference_requires_review: "busy",
  org_library_submission_conflict: "busy",
  org_library_submission_source_changed: "busy",
  plugin_upload_busy: "busy",
  plugin_content_scan_rate_limited: "busy",
  legal_attestation_required: "legal"
});
var qm = Object.freeze({
  0: "busy",
  401: "signed-out",
  404: "publishing-off",
  409: "already-pending",
  429: "busy",
  503: "busy"
});
var $s = Object.freeze({
  codes: Bm,
  statuses: qm
});
async function Gs(e) {
  let r = await Q(de(e, ["library_submissions", "me"]));
  if ("kind" in r) return r;
  if (bm.includes(r.status)) return l("not-served");
  return I(r) ? jm(r.data) : ge(r, $s)
}
var yr = (e) => `${ln().CLAUDE_AI_ORIGIN}/customize/plugins/` + encodeURIComponent(e);
var br = (e, r) => l(e.refusal.kind, e.refusal.details.concat(`See or remove the upload: ${yr(r.id)}`));
var $m = Object.freeze({
  plugin_version_scan_pending: "scan-pending",
  plugin_version_scan_failed: "scan",
  org_library_submission_publish_not_started: "busy",
  org_library_submission_publish_timed_out: "busy",
  org_library_submission_publisher_unavailable: "busy"
});
var Xm = "claudeai-organization-library";
var Gm = f(() => u({
  name: o().optional(),
  marketplace_name: o().optional()
}));

function Qm(e, r) {
  let s = Gm().safeParse(e).data,
    i = Bio(s?.marketplace_name ?? "") ?? Xm;
  return `${s?.name??r}@${i}`
}
async function Ym(e, r, s) {
  let i = await xe(de(e, ["plugins", r]));
  return Qm("status" in i ? i.data : void 0, s)
}
var Vm = 64;
var Re = (e) => fe(fe(e.name).slice(0, Vm));
async function Zm(e, r, s) {
  let i = await Ym(e, r, Re(e.manifest));
  return {
    kind: "published",
    manifest: e.manifest,
    verdict: s.verdict,
    install: i,
    link: yr(r)
  }
}
var Jm = (e, r, s) => ({
  kind: r,
  manifest: e.manifest,
  verdict: s.verdict,
  id: s.id
});
async function el(e, r, s) {
  let i = r.outcome?.published_plugin_id ?? void 0,
    n = r.publish_state === "completed" && i !== void 0,
    p = r.status === "approved" && r.publish_state === "failed",
    m = r.status === "approved";
  if (p) return l($m[r.outcome?.failure_reason ?? ""] ?? "other");
  return m && n ? Zm(e, i, s) : Jm(e, m ? "publishing" : "in-review", s)
}
var si = (e, r, s) => e.find((i) => i.plugin_id === r.id && i.status === s);
var rl = (e) => e === void 0 ? "available" : void 0;
var ol = (e) => ({
  kind: "plugin",
  id: e.id
});
var tl = (e, r) => ({
  source: ol(e),
  proposed_install_preference: rl(si(r, e, "approved")),
  predecessor_uuid: si(r, e, "denied")?.uuid
});
var sl = Object.freeze({
  "Content-Type": "application/json"
});
var mi = (e, r, s) => ({
  method: "post",
  path: lr(e, r),
  body: _(s),
  headers: sl,
  bound: "clock",
  signal: e.signal
});
async function il(e, r) {
  let s = await Q(mi(e, ["library_submissions"], r));
  if ("kind" in s) return s;
  return I(s) ? js().safeParse(s.data).data ?? l("other") : ge(s, $s)
}
var nl = 40;
var di = (e) => [e.verdict ?? ""].filter(Boolean).map((r) => "Security scan on claude.ai: " + Rt(r, nl));

function al(e, r) {
  if (e.signal.aborted || r.scan === "failed") return br(E(e, l("scan", di(r)), "shelved"), r);
  if (r.isAwaitingCurrent) return br(l("not-current"), r);
  return r.scan === "processing" ? {
    kind: "on-shelf",
    manifest: e.manifest,
    id: r.id
  } : void 0
}
async function pl(e, r, s) {
  let i = al(e, r);
  if (i !== void 0) return i;
  let n = await il(e, tl(r, s));
  return "kind" in n ? br(E(e, n, "submitting"), r) : el(e, n, r)
}
var gi = "manual";
var fl = Object.freeze({
  name: "My Uploads",
  source: gi,
  source_url: ""
});
var ml = f(() => u({
  id: o().min(1),
  source: o().optional()
}));
var ll = (e) => [e, ...Ws(e)].map((r) => ml().safeParse(r).data).find((r) => r?.source === gi)?.id;
var ul = Object.freeze({
  plugin_upload_already_exists: "exists",
  plugin_upload_validation_failed: "invalid",
  plugin_upload_limit_reached: "shelf-full",
  plugin_previous_save_failed_scan: "scan",
  plugin_upload_conflict: "busy",
  plugin_previous_save_scanning: "busy",
  plugin_upload_busy: "busy",
  plugin_content_scan_rate_limited: "busy",
  legal_attestation_required: "legal"
});
var dl = Object.freeze({
  0: "busy",
  401: "signed-out",
  403: "creation-off",
  413: "too-large",
  429: "busy",
  503: "busy"
});
var Si = Object.freeze({
  codes: ul,
  statuses: dl
});
async function Oi(e, r) {
  let s = await Q(e);
  if ("kind" in s) return s;
  return I(s) ? ll(s.data) ?? r() : ge(s, Si)
}
var cl = (e) => Oi(mi(e, ["marketplaces", "create-account-marketplace"], fl), async () => l("other"));
var hl = 60;
var gl = (e) => ({
  "Content-Type": `multipart/form-data; boundary=${e.boundary}`
});
var xl = (e, r, s) => ({
  ...s,
  archive: e,
  manifest: r.manifest
});
var yl = Object.freeze(["pass", "warn", "unknown"]);

function bl(e, r, s) {
  let i = s ? e.content_scan === null : e.content_scan == null,
    n = r === !1 && i,
    p = Boolean(e.pending_version) && e.served !== !0,
    m = yl.includes(e.content_scan?.combined_assessment ?? "");
  return X8r([e.content_scan?.status === "errored" && "failed", !n && e.content_scan?.status !== "completed" && "processing", e.served === !1 && "processing", p && "processing", n && "none", !m && "failed"]) ?? "passed"
}
var Rl = (e, r, s) => ({
  id: e,
  name: r.name,
  version: r.version,
  scan: bl(r, r.scan_requested ?? s?.isScanAsked, s !== void 0),
  isScanAsked: r.scan_requested ?? s?.isScanAsked,
  verdict: r.content_scan?.combined_assessment ?? r.content_scan?.status,
  isAwaitingCurrent: r.awaiting_make_current === !0 || s?.isAwaitingCurrent === !0
});
var Al = f(() => u({
  id: o().min(1).optional(),
  name: o().optional(),
  version: o().optional(),
  marketplace_id: o().optional(),
  served: M().optional(),
  pending_version: o().nullish(),
  scan_requested: M().nullish(),
  awaiting_make_current: oe().optional(),
  content_scan: u({
    status: o().optional(),
    combined_assessment: o().nullish()
  }).nullish()
}));

function Mi(e, r) {
  let s = Al().safeParse(e).data ?? {},
    i = r?.id ?? s.id;
  return i !== void 0 ? Rl(i, s, r) : void 0
}
var Sl = (e, r, s) => `${lr(r,["marketplaces",e,"plugins","account-upload"])}?overwrite=${String(s==="replace")}`;
import {
  randomUUID as Pl
} from "crypto";

function Ol(e, r) {
  let s = Re(r);
  return s !== r.name ? `\r
--${e}\r
Content-Disposition: form-data; name="new_name"\r
\r
` + s : ""
}

function _l(e, r) {
  let s = `----PluginPublish${Pl()}`,
    i = Re(r);
  return {
    boundary: s,
    body: Buffer.concat([Buffer.from(`--${s}\r
Content-Disposition: form-data; name="file"; filename="${i}.zip"\r
Content-Type: application/zip\r
\r
`), e, Buffer.from(Ol(s, r) + `\r
--${s}--\r
`)])
  }
}

function vl(e, r, s) {
  let i = _l(r.archive, r.manifest);
  return {
    method: "post",
    path: Sl(e, r, s),
    body: i.body,
    headers: gl(i),
    bound: "progress",
    signal: r.signal
  }
}
async function zi(e, r, s) {
  let i = await Q(vl(e, r, s));
  if ("kind" in i) return i;
  if (ur(i).code === "plugin_upload_already_exists") return "exists";
  return I(i) ? Mi(i.data, void 0) ?? l("other") : ge(i, Si)
}
async function wl(e, r) {
  let s = await zi(e, r, "replace");
  return s === "exists" ? l("busy") : s
}
var Ll = 5000;
async function El(e, r) {
  let s = await xe(de(e, ["plugins", r.id, "scan-status"]));
  return "status" in s && I(s) ? Mi(s.data, r) ?? r : r
}
var Tl = 300000;
async function ji(e, r, s = {
  left: hl,
  until: Date.now() + Tl
}) {
  if (!(r.scan === "processing" && !r.isAwaitingCurrent && !e.signal.aborted && s.left > 0 && Date.now() < s.until)) return r;
  return await Y(Ll, e.signal), ji(e, await El(e, r), {
    left: s.left - 1,
    until: s.until
  })
}
var Il = (e) => Oi(de(e, ["marketplaces", "list-account-marketplaces"]), () => cl(e));
async function Ml(e, r) {
  let s = await zi(e, r, "new");
  if (s !== "exists") return s;
  return r.mode === "replace" ? wl(e, r) : l("exists")
}
var kl = f(() => u({
  organization: u({
    uuid: o(),
    name: o().min(1)
  })
}));
var Nl = 5000;
async function Dl(e, r) {
  if (!Zln()) return;
  let s = await xe({
      method: "get",
      path: "/api/oauth/profile",
      body: void 0,
      headers: {},
      bound: "clock",
      signal: AbortSignal.any([r, AbortSignal.timeout(Nl)])
    }),
    i = kl().safeParse("status" in s && I(s) ? s.data : void 0).data;
  return i?.organization.uuid === e ? i.organization.name : void 0
}
async function Fl(e, r) {
  return e.name !== void 0 ? e : {
    ...e,
    name: await Dl(e.id, r)
  }
}
async function Cl() {
  let e = Vt(rTn() ? a.CLAUDE_CODE_ORGANIZATION_UUID : await Wgt()),
    r = np(),
    s = r?.organizationUuid === e;
  if (e === null) return;
  return {
    id: e,
    name: s && r?.organizationName || void 0
  }
}
async function Zi(e) {
  return e !== void 0 ? void 0 : Cl()
}
var Ji = () => rTn() ? "no-organization" : nes();
async function Ul(e, r) {
  let s = await Zi(e);
  if (s === void 0) return l(e ?? Ji());
  let i = {
      organization: s,
      signal: r
    },
    n = await Gs(i);
  return Array.isArray(n) ? Fl(s, r) : E(i, n, "nothing")
}
var B7o = (e) => [e ?? []].flat().flatMap((r) => [`Writes this manifest first, to ${r.path}:`, ...r.text.trimEnd().split(`
`)]);

function on(e) {
  return e.draft !== void 0 ? {
    path: BP(Af),
    text: e.draft ?? ""
  } : void 0
}
var Hl = (e) => B7o(on(e));
var D = 4096;
var sn = (e) => `${Xs(e.path,D)} (${Zt(e.bytes)})`;
var U7o = (e) => [e].filter((r) => r > 0).map((r) => `${r} ${O(r,"entry stays","entries stay")} on this machine (secrets, links, ignored files)`);
var Wl = (e) => U7o(e.plan.listing.leftOut.length);
var kr = (e) => Rt([e.name, e.version].filter(Boolean).join(" "));
var Nr = (e) => Rt(e.organization.name ?? `organization ${e.organization.id}`);
var pn = (e) => ["First uploads it to your own shelf on claude.ai (My Uploads), where it is scanned", `Then submits it to ${Nr(e)} for an administrator's review; where the organization publishes without review, it is published at once`, ...[Re(e.plan.manifest)].filter((r) => r !== e.plan.manifest.name).map((r) => `Listed under the name ${r}`), ...[e.wanted.mode].filter((r) => r === "replace").map(() => "Replaces the plugin of this name on your shelf, if any")];
var jl = (e) => e.plan.listing.files.filter((r) => Po.includes(r.path)).map((r) => `Sends ${r.path}: keys and tokens written in it go with it`);
var Bl = "Entries stay behind that are neither named nor counted here: this session's rules deny reading them.";
var un = (e) => e.withheld ? [Bl] : [];
var dn = (e) => [...jl(e), ...un(e)];
var z = (e) => ({
  question: `Publish ${kr(e.plan.manifest)} to ${Nr(e)}?`,
  lines: [`Folder: ${Xs(e.plan.root)}`, `Sends ${e.plan.listing.files.length} ${O(e.plan.listing.files.length,"file")}, ` + Zt(e.plan.bytes), ...dn(e), ...Wl(e), ...pn(e), ...Hl(e)],
  values: e.plan.listing.files.map(sn)
});
var Kl = 48;
var g8r = 20;

function ql(e, r) {
  let s = e.slice(0, g8r).filter((p, m) => e.slice(0, m + 1).join(`
`).length + Kl <= r),
    i = e.length - s.length;
  return i === 0 ? s : s.concat(`and ${i} more ${O(i,"file")} not named here`)
}
var gn = (e, r) => [z(e).question, `Organization: ${Nr(e)}`, ...z(e).lines, ...r];
var $l = 1800;

function Xl(e, r) {
  let s = gn(e, r);
  return s.concat(ql(z(e).values, $l - s.join(`
`).length))
}

function bn(e, r) {
  let s = r.withheld ? "Every file, and what stays behind that is named, is listed in" : "Every file, and what stays behind, is listed in";
  return [e ?? ""].filter(Boolean).map((i) => `${s} ${i}`)
}
var Gl = (e) => ({
  type: "other",
  reason: e.join(`
`)
});
var $7o = (e) => `${e.path} (${Zt(e.bytes)})`;
var f8r = (e, r) => [e].filter((s) => s > 0).map((s) => `and ${s} more ${O(s,r)} not named here`);
var Ql = 128;
var x = 2 * D + Ql;
var zsr = (e) => (/^ */.exec(e)?.[0] ?? "") + Rt(e, x);
var Yl = (e) => `stays here: ${e.path} (${e.words})`;
var j7o = (e) => [...e.files.map($7o), ...f8r(e.unnamed?.files ?? 0, "file"), ...e.stays.map(Yl), ...f8r(e.unnamed?.stays ?? 0, "entry")].map(zsr);
var W = 500;
var Vl = 1e5;

function Ln(e) {
  let r = e.slice(0, W);
  return r.slice(0, F(r.reduce((s, i) => s.concat((s.at(-1) ?? 0) + i.path.length), []), (s) => s <= Vl))
}
var Zl = (e) => ({
  files: Ln(e.files),
  stays: Ln(e.leftOut)
});
var Hr = (e) => st(_([e.plan.root, e.wanted.destination, e.organization.id, kr(e.plan.manifest), e.wanted.mode, e.plan.listing.files.map((r) => [r.path, r.bytes, r.mode, e.plan.hashes[r.path]])]));

function Jl(e, r) {
  let s = e.files.length - r.files.length,
    i = e.leftOut.length - r.stays.length;
  return s === 0 && i === 0 ? void 0 : {
    files: s,
    stays: i
  }
}
var Mn = Object.freeze({
  link: "a link, not followed",
  "hard-link": "shares what it holds with another name on this disk",
  ignored: "ignored by .gitignore",
  secret: "may hold a secret",
  never: "never sent",
  generated: "made by Claude Code",
  special: "not a file",
  backslash: "a backslash in its name"
});
var eu = (e) => "stays here: " + Xs(e.path, D) + ` (${Mn[e.why]})`;
var Nn = (e) => [...e.plan.listing.files.map(sn), ...e.plan.listing.leftOut.map(eu)];
var ru = (e) => [...Nn(e), ...un(e)];
var Fn = (e) => `${ru(e).join(`
`)}
`;
var ou = (e, r, s) => ({
  digest: Hr(e),
  title: z(e).question,
  organization: {
    id: Rt(e.organization.id),
    name: e.organization.name && Rt(e.organization.name)
  },
  plugin: {
    name: Rt(e.plan.manifest.name),
    version: e.plan.manifest.version && Rt(e.plan.manifest.version)
  },
  folder: Xs(e.plan.root, D),
  mode: e.wanted.mode,
  steps: pn(e),
  warnings: dn(e),
  writes: on(e),
  sends: {
    files: e.plan.listing.files.length,
    bytes: e.plan.bytes
  },
  files: s.files.map((i) => ({
    path: Xs(i.path, D),
    bytes: i.bytes,
    sha256: e.plan.hashes[i.path] ?? "",
    runs: i.mode === zo
  })),
  staying: e.plan.listing.leftOut.length,
  stays: s.stays.map((i) => ({
    path: Xs(i.path, D),
    why: i.why,
    words: Mn[i.why]
  })),
  list: {
    sha256: st(Fn(e)),
    path: r
  },
  unnamed: Jl(e.plan.listing, s)
});
var tu = (e, r) => ou(e, r, Zl(e.plan.listing));

function su(e, r) {
  let s = tu(e, r);
  return {
    path: e.plan.root,
    destination: e.wanted.destination,
    description: e.wanted.description,
    replace: e.wanted.mode === "replace" || void 0,
    shown: [...gn(e, bn(r, e)), ...j7o(s)],
    question: s
  }
}

function nu(e, r) {
  let s = Xl(e, bn(r, e));
  return {
    behavior: "ask",
    message: z(e).question,
    updatedInput: su(e, r),
    suppressAlwaysAllowRule: !0,
    localDisplayOnly: !1,
    decisionReason: Gl(s)
  }
}
var au = () => !we() && !a.DISABLE_LOGIN_COMMAND;
var pu = () => {
  let e = mp(mKt);
  return (e === "cache_miss" || e === "route_missing") && !mje(mKt) && SXe({
    restrictions: {},
    compliance_taints: []
  }, mKt, zD())
};
var fu = "Claude Code couldn't load your organization's policy, so publishing from here is off for now: try again in a moment, or publish this plugin from claude.ai. Nothing was sent.";
var mu = Object.freeze({
  "flag-off": "Publishing plugins isn't available in this session. Nothing was sent.",
  "third-party": "Publishing goes through claude.ai, and this session uses another provider. Nothing was sent.",
  bare: "Publishing is off under --bare. Nothing was sent.",
  "traffic-off": "Publishing is off while nonessential traffic is disabled (CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC). Nothing was sent.",
  policy: "Your organization's policy doesn't allow publishing from Claude Code: publish this plugin from claude.ai. Nothing was sent.",
  "cloud-session": "Publishing from a cloud session isn't offered yet. Publish from the Claude app or from a terminal on your own computer. Nothing was sent.",
  "signed-out": "Publishing needs a claude.ai sign-in. Sign in with /login, then publish again.",
  "no-organization": "This session is signed in by the app that started it, which didn't say which organization that is. Publish this plugin from claude.ai, or ask Claude in a terminal session signed in to claude.ai. Nothing was sent.",
  "nobody-to-ask": "Publishing waits for your answer, and this session has nobody to ask. Ask Claude to publish it in a session of your own. Nothing was sent.",
  "other-question": "The answer that came back was to another question than the one this session asked, so nothing was sent. Ask Claude to publish again.",
  "network-path": "That path names a place on the network, which publishing does not open. Nothing was read or sent.",
  "read-denied": "This session's permissions don't allow reading that folder, or a file in it that would be sent. Nothing was sent.",
  "write-denied": "This session's permissions don't allow writing the manifest this publish would add to the folder. Nothing was written or sent.",
  "no-folder": "No folder at that path. Nothing was sent.",
  "not-a-plugin": "That folder holds no plugin: no manifest, commands, skills, agents or hooks. Nothing was sent.",
  findings: "The plugin didn't pass validation. Fix these, then publish again. Nothing was sent.",
  "too-many-files": `The plugin has more than ${Ce} files to send. Name what isn't part of it in .gitignore. Nothing was sent.`,
  "too-large": `The plugin is larger than ${Zt(rr)}, the most publishing sends. Nothing was published.`,
  unreadable: "Part of the folder couldn't be read, so nothing was sent.",
  changed: "The folder changed while it was being published, so nothing was sent. Publish again.",
  unwritten: "The manifest couldn't be written to .claude-plugin/plugin.json, so nothing was sent.",
  stopped: "Publishing was stopped.",
  failed: "Publishing ran into an error and stopped.",
  "not-served": "claude.ai doesn't offer publishing from Claude Code for your organization yet. Nothing was sent.",
  "publishing-off": "Your organization doesn't accept member submissions. The upload is on your own shelf on claude.ai (My Uploads), where only you see it and where you can remove it. An administrator chooses a publishing policy in the organization settings.",
  "creation-off": "Your organization has plugin creation turned off. An administrator turns it on in the organization settings on claude.ai.",
  exists: "A plugin of this name is already in your uploads on claude.ai, and it was not replaced.",
  invalid: "claude.ai didn't take the plugin: it failed validation.",
  "shelf-full": "Your uploads on claude.ai are full. Remove one there, then publish again.",
  scan: "The plugin didn't pass the security scan on claude.ai, so it wasn't submitted. It is on your own shelf, where only you see it.",
  "scan-pending": "The security scan of the plugin is still running. Publish again in a few minutes.",
  "not-current": "The new version is saved to your uploads on claude.ai, but it isn't the plugin's current version there, so nothing was sent to your organization. Open the plugin on claude.ai, make the new version current, and publish it from there.",
  "already-pending": "A submission is already pending review.",
  "nothing-new": "This version is already in your organization's library.",
  "in-progress": "An earlier submission of this plugin is being published. Publish again once it is in the library.",
  "needs-admin": "This update needs an administrator: ask one to publish it from claude.ai.",
  "needs-org-settings": "This update needs a change to the organization's settings on claude.ai first. Ask an administrator.",
  "name-conflict": "An item with this name is already in your organization's library. Rename yours and publish again.",
  "library-full": "Your organization's library is full. An administrator makes room on claude.ai.",
  legal: "Your organization requires an attestation with each submission. Publish this plugin from claude.ai.",
  busy: "claude.ai was busy with this plugin or did not answer. Publish again in a moment.",
  other: "claude.ai didn't take the plugin."
});
var lu = "Publishing needs a claude.ai sign-in, and this session has none it can publish on. Publish this plugin from claude.ai, or ask Claude to publish it from a session signed in to claude.ai.";

function uu(e) {
  if (e === "signed-out" && !au()) return lu;
  if (e === "policy" && pu()) return fu;
  return mu[e]
}

function du(e) {
  return e.kind === "published" ? ["Colleagues install it with /plugin install " + Rt(e.install), `See it at ${Rt(e.link)}`] : []
}
var cu = Object.freeze({
  published: "published to your organization's library.",
  "in-review": "uploaded to your shelf and sent to your organization for an administrator's review. It reaches the library once approved.",
  publishing: "uploaded to your shelf and approved. It is on its way into your organization's library.",
  "on-shelf": "uploaded to your own shelf on claude.ai, and not submitted yet: its scan was still running when the wait for it ended. Submit it from claude.ai once the scan has passed."
});
var hu = (e) => [cu[e.kind], ...[e].flatMap((r) => ("verdict" in r) ? [r] : []).flatMap(di), ...du(e), ...[e].flatMap((r) => ("id" in r) ? [r.id] : []).map((r) => `Follow it on claude.ai: ${yr(r)}`)];
var gu = " (the plugin's own version; the library numbers its copies itself)";
var xu = (e) => kr(e) + (e.version ? gu : "");

function qr(e) {
  return e.kind === "refused" ? [uu(e.refusal.kind), ...e.refusal.details.map((s) => Rt(s))] : hu(e).map((s, i) => (i === 0 ? `${xu(e.manifest)}: ` : "") + s)
}
var yu = (e) => ({
  type: "other",
  reason: e
});
var bu = (e) => ({
  behavior: "deny",
  message: e,
  decisionReason: yu(e)
});
var $r = (e, r = []) => bu(qr(l(e, r)).join(`
`));

function ea(e, r) {
  return e.refusal.kind === "unreadable" && FOe(r.permissions()) ? {
    ...e,
    refusal: {
      ...e.refusal,
      details: []
    }
  } : e
}

function ee(e, r) {
  let s = ea(e, r);
  return $r(s.refusal.kind, s.refusal.details)
}
import {
  join as oa
} from "path";
var Ru = (e, r, s) => r.files.map((i) => i.path).filter((i) => ON(oa(e[0] ?? "", i), s.permissions(), e.map((n) => oa(n, i))));

function sa(e, r, s) {
  return Ru(e, r, s).length === 0 ? void 0 : l("read-denied")
}
var Au = (e, r) => r !== void 0 || e.shouldAvoidPermissionPrompts === !0 || e.servedCall === !0 || e.mode === "dontAsk";
import {
  dirname as Ou,
  join as Pu
} from "path";
var Su = 384;
async function _u(e, r, s) {
  let i = Zx(s.session),
    n = lH(e),
    p = Pu(i, `publish-${n}.txt`);
  return (n !== void 0 && Ou(p) === i ? aF(i, void 0) : Promise.reject(Error("The tool use id is no plain token"))).then(() => ude(p, Buffer.from(Fn(r)), Su)).then(() => p, () => {
    return
  })
}
import {
  realpath as Lu
} from "fs/promises";
import {
  resolve as Eu
} from "path";
var vu = ["bare-deny", "path-deny"];
var wu = (e, r) => vu.includes(p1e([e], r.permissions(), {
  refuseAutomounterShapes: !0
}).layer);
async function ma(e, r) {
  let s = Eu(ce(), e.path);
  if (wu(s, r)) return l("read-denied");
  if (!FOe(r.permissions())) return;
  let i = await Lu(s).catch(() => s),
    n = await B($e(i));
  return "kind" in n ? n : sa([s, i], n, r)
}
import {
  resolve as Tu
} from "path";
var la = (e, r, s) => u1e(s.tool, {
  path: e
}, s.permissions(), r) !== null;

function Iu(e, r) {
  if (la(e.path, [e.path], r)) return "network-path";
  let s = Tu(ce(), e.path),
    i = W5(s);
  return la(s, i.paths, r) ? "network-path" : i.vetted ? void 0 : "unreadable"
}
var ca = (e, r) => Tir() ? Iu(e, r) : "flag-off";
var ku = 16;
var m8r = new at(() => new Map);

function Nu(e, r, s) {
  let i = m8r.of(s.session);
  i.set(e, r), Array.from(i.keys()).slice(0, Math.max(0, i.size - ku)).forEach((n) => i.delete(n))
}
var Du = 4000;
var ba = f(() => u({
  digest: o().regex(U_).describe("What a yes binds to: the publish is of this, or refused."),
  title: o().max(x),
  organization: u({
    id: o().max(x),
    name: o().max(x).optional()
  }),
  plugin: u({
    name: o().max(x),
    version: o().max(x).optional()
  }),
  folder: o().max(x),
  mode: U(["new", "replace"]).describe("Whether a plugin of this name on the shelf is replaced."),
  steps: T(o().max(x)).max(W).describe("What a yes sets off, a sentence each, in order."),
  warnings: T(o().max(x)).max(W).describe("What the person is warned of, a sentence each: a file sent although its name is one a secret hides under, and that other entries stay behind unnamed."),
  writes: u({
    path: o().max(x),
    text: o().max(Du)
  }).optional().describe("The manifest a yes writes into the folder first, if any."),
  sends: u({
    files: v(),
    bytes: v()
  }).describe("The whole count and size of what is sent."),
  files: T(u({
    path: o().max(x),
    bytes: v(),
    sha256: o().regex(U_),
    runs: M().describe("Whether it is sent as runnable.")
  })).max(W).describe("The files sent, in the order of their paths."),
  staying: v().describe("How many entries stay on the machine and are counted here."),
  stays: T(u({
    path: o().max(x),
    why: U(["link", "hard-link", "ignored", "secret", "never", "generated", "special", "backslash"]),
    words: o().max(x)
  })).max(W).describe("The entries that stay and are named, each with why."),
  list: u({
    sha256: o().regex(U_),
    path: o().max(x).optional()
  }).describe("The list, a line each, of every file sent and every entry that stays and is named, and a last line saying so where entries stay unnamed: its sha256, and the file that holds it."),
  unnamed: u({
    files: v(),
    stays: v()
  }).optional().describe("Present only when the lists are over the bound: how many files and entries they do not name. The list file names them.")
}));
var Jr = (e) => st(_(ZO(e)));
var Ra = (e) => Jr(ba().safeParse(e).data ?? e);
var Fu = (e, r) => ({
  digest: Hr(e),
  question: Ra(r.question),
  lines: Jr(r.shown),
  drafts: e.draft !== void 0,
  card: z(e),
  everything: Nn(e)
});
var ro = (e) => e.signal.aborted ? l("stopped", [ss.nothing]) : void 0;
import {
  join as oo
} from "path";
var zu = (e, r, s) => [r, oo(r, "within")].some((i) => ON(oo(e[0] ?? "", i), s.permissions(), e.map((n) => oo(n, i))));
var Cu = (e, r) => ({
  ...e,
  plan: {
    ...e.plan,
    listing: {
      ...e.plan.listing,
      leftOut: r
    }
  },
  withheld: r.length < e.plan.listing.leftOut.length
});

function Uu(e, r, s) {
  let i = !FOe(s.permissions());
  return Cu(e, e.plan.listing.leftOut.filter((n) => i || !zu(r, n.path, s)))
}
var va = (e) => ({
  folder: e.path,
  destination: e.destination ?? "organization",
  description: e.description,
  mode: e.replace === !0 ? "replace" : "new"
});
import {
  join as ju
} from "path";
var Hu = (e, r) => oy(xk, {
  file_path: e,
  content: ""
}, r).behavior === "deny" || ON(e, r);
var Wu = Object.freeze([Kt, dt].map((e) => Object.freeze({
  name: e,
  mcpInfo: void 0,
  familyParentToolName: void 0,
  aliasSkillToolNames: void 0,
  packagingAliasSkillToolNames: void 0
})));

function Ea(e, r) {
  let s = r.permissions(),
    i = dc(s).filter((n) => !h1e.includes(n.source));
  return Wu.some((n) => Ho(s, n, i) !== null) || L(e).some((n) => Hu(ju(n, Af), s))
}

function Bu(e, r, s) {
  return r.draft !== void 0 && Ea(e, s) ? l("write-denied") : void 0
}
async function $u(e, r, s) {
  let {
    toolUseId: i
  } = r, n = ca(e, s), p = i === void 0 || Au(s.permissions(), s.agentId);
  if (n !== void 0 || p) return $r(n ?? "nobody-to-ask");
  let m = ro(r) ?? await Ul(Cir(), r.signal);
  if ("kind" in m) return ee(m, s);
  let h = await ma(e, s) ?? ro(r);
  if (h !== void 0) return ee(h, s);
  let g = await B(ar(va(e), m));
  if ("kind" in g) return ee(g, s);
  let b = [qu(ce(), e.path), g.plan.root],
    y = sa(b, g.plan.listing, s) ?? Bu(b, g, s);
  if (y !== void 0) return ee(y, s);
  let j = Uu(g, b, s),
    R = await _u(i, j, s),
    S = ro(r);
  if (S !== void 0) return ee(S, s);
  let io = nu(j, R);
  return Nu(i, Fu(j, io.updatedInput), s), io
}
var Xu = 1024;
var Gu = x;
var Qu = 100;
var Yu = 2 * W + Qu;
var W7o = f(() => De({
  path: o().min(1).max(Xu).describe("The plugin's folder on this machine: the one that holds .claude-plugin/plugin.json, or a mod's hooks/ where there is no manifest yet."),
  destination: C("organization").optional().describe("Where to publish. The one destination is the library of the organization the session is signed in to."),
  description: o().max(xt).optional().describe("What the plugin does, in a sentence: used only for a manifest written for a folder that has none."),
  replace: M().optional().describe("True only when the person said to replace the plugin of the same name that is already in their uploads on claude.ai."),
  shown: T(o().max(Gu)).max(Yu).optional().describe("Leave out. The tool fills it for the question the person answers: the organization, the folder, the steps, and the files sent."),
  question: ba().optional().describe("Leave out. The tool fills it with the same question as data, for a surface that draws its own: what a yes binds to, every file sent, and the entries that stay and are named.")
}));
var Vu = 4000;
var Zu = (e) => ({
  state: e.kind,
  refusal: e.kind === "refused" ? e.refusal.kind : void 0,
  lines: qr(e)
});
var Ju = f(() => De({
  state: U(["published", "in-review", "publishing", "on-shelf", "refused"]),
  refusal: o().optional(),
  lines: T(o())
}));

function ed(e) {
  let s = typeof e === "object" && e !== null && "path" in e ? e.path : void 0;
  return typeof s === "string" ? s : ""
}
var Wa = (e, r) => ("plan" in e) && Hr(e) === r.digest;
import {
  mkdir as rd,
  writeFile as od
} from "fs/promises";
import {
  dirname as Ba,
  join as td
} from "path";
async function sd(e) {
  let r = td(e.root, Af);
  return await rd(Ba(r), {
    recursive: !0
  }).catch(() => {
    return
  }), await G1(Ba(r)) ? od(r, e.draft, {
    flag: "wx"
  }).then(() => !0, () => !1) : !1
}
import {
  posix as nd
} from "path";
var id = 420;
async function ad(e, r) {
  let s = BP(Af);
  try {
    return await e.mkdirp(nd.dirname(s)), await e.create(s, Buffer.from(r.draft), id), !0
  } catch {
    return !1
  } finally {
    await e.close()
  }
}
async function pd(e) {
  let {
    openTreeAnchor: r
  } = await import("B:/~BUN/root/chunk-6bcyern3.js"), s = await r(await cys(), {
    gitRoot: e.root,
    realRoot: e.root
  }).catch(() => {
    return
  });
  if (s === void 0) return !1;
  return !("unavailable" in s) ? ad(s, e) : sd(e)
}
async function fd(e, r) {
  let s = await $t(e.folder, e.description),
    i = await ar(e, r.organization),
    n = Wa(i, r) && s.kind === "needs-manifest";
  if (n && !r.drafts) return l("changed");
  let m = n && await pd(s);
  if (n && !m) return l("unwritten");
  let h = m ? await ar(e, r.organization) : i;
  return Wa(h, r) || "kind" in h ? h : l("changed")
}
async function md(e, r, s) {
  let i = await Ye(e, r);
  return i !== void 0 && st(i) === s ? i : void 0
}
var ld = 65535;
var ud = 16;
var dd = 3;
var cd = (e) => ({
  os: dd,
  attrs: (e & ld) << ud
});

function hd(e, r) {
  return e !== void 0 && r !== void 0 ? [
    [e.path, [r, cd(e.mode)]]
  ] : []
}
var gd = 6;
var xd = "1980-01-01T00:00:00";
async function yd(e) {
  let {
    zipSync: r
  } = await import("B:/~BUN/root/chunk-w7q529jd.js"), s = await Et(e.listing.files, (n) => md(e.root, n, e.hashes[n.path]), hd);
  return "missed" in s ? s : r(Object.fromEntries(s), {
    level: gd,
    mtime: xd
  })
}
async function bd(e) {
  let r = await Gs(e);
  if (!Array.isArray(r)) return E(e, r, "nothing");
  let s = await Il(e);
  if (typeof s !== "string") return E(e, s, "nothing");
  let i = await Ml(s, e);
  return "kind" in i ? E(e, i, "uploading") : pl(e, await ji(e, i), r)
}
async function Rd(e, r) {
  let s = await B(yd(e));
  if ("kind" in s) return s;
  if ("missed" in s) return Ve(s);
  return s.length > rr ? l("too-large") : bd(xl(s, e, r)).catch((n) => l("failed", [d(n)]))
}
async function Ad(e, r, s) {
  let i = await fd(e, r);
  return "kind" in i ? i : Rd(i.plan, {
    organization: r.organization,
    mode: e.mode,
    signal: s
  })
}
async function Sd(e, r) {
  let {
    refusal: s,
    organization: i,
    shown: n
  } = r;
  if (s !== void 0) return l(s);
  if (i === void 0) return l(Ji());
  return n !== void 0 ? Ad(va(e), {
    digest: n,
    drafts: r.drafts,
    organization: i
  }, r.signal) : l("nobody-to-ask")
}

function Od(e, r) {
  let s = r.question !== void 0 && Ra(r.question) !== e?.question,
    i = r.shown !== void 0 && Jr(r.shown) !== e?.lines;
  return e !== void 0 && (s || i) ? "other-question" : void 0
}

function Pd(e, r) {
  if (!(e.kind === "refused" && e.refusal.kind === "stopped")) return;
  t(`plugin publish: stopped: ${e.refusal.details.join(" ")}`), r.appendSystemMessage?.(Rk(qr(e).join(`
`), "warning"))
}
import {
  realpath as _d
} from "fs/promises";
import {
  resolve as vd
} from "path";
async function wd(e, r, s) {
  let i = vd(ce(), e.path);
  return r && Ea([i, await _d(i).catch(() => i)], s) ? "write-denied" : void 0
}
async function Ld(e, r, s) {
  let i = m8r.of(s.session),
    n = i.get(r.toolUseId ?? ""),
    p = n?.digest;
  i.delete(r.toolUseId ?? "");
  let m = n?.drafts === !0,
    h = ca(e, s) ?? Cir() ?? Od(n, e) ?? (await ma(e, s))?.refusal.kind ?? await wd(e, m, s),
    g = await Zi(h),
    b = await Sd(e, {
      shown: p,
      drafts: m,
      organization: g,
      refusal: h,
      signal: r.signal
    }),
    y = b.kind === "refused" ? ea(b, s) : b;
  return Pd(y, s), await (y.kind === "refused" ? jt("plugin_publish", y.refusal.kind) : Kr("plugin_publish")), y
}
var Gsr = Qt({
  name: _ve,
  searchHint: "publish or share a plugin or mod with the team or organization library",
  shouldDefer: !0,
  backgrounding: "never",
  maxResultSizeChars: Vu,
  async description() {
    return yPs
  },
  async prompt() {
    return _Ps
  },
  get inputSchema() {
    return W7o()
  },
  get outputSchema() {
    return Ju()
  },
  userFacingName() {
    return "Publish plugin"
  },
  isEnabled() {
    return Tir()
  },
  isConcurrencySafe() {
    return !1
  },
  isReadOnly() {
    return !1
  },
  requiresUserInteraction() {
    return !0
  },
  toAutoClassifierInput(e) {
    return _(e)
  },
  getToolUseSummary() {
    return "Publish a plugin to your organization's library on claude.ai"
  },
  getPath(e) {
    return ed(e)
  },
  renderToolUseMessage(e) {
    return e.path ?? ""
  },
  create(e) {
    let r = {
      ...e,
      tool: Gsr
    };
    return {
      permissionCheckFailureDecision() {
        return $r("failed")
      },
      async checkPermissions(s, i) {
        return $u(s, i, r)
      },
      async call(s, i) {
        return {
          data: Zu(await Ld(s, i, r))
        }
      }
    }
  },
  mapToolResultToToolResultBlockParam(e, r) {
    return {
      type: "tool_result",
      tool_use_id: r,
      ...e.state === "refused" && {
        is_error: !0
      },
      content: _(e)
    }
  }
});
export {
  $7o,
  f8r,
  zsr,
  U7o,
  B7o,
  j7o,
  W7o,
  m8r,
  g8r,
  Kqt,
  Gsr
};
