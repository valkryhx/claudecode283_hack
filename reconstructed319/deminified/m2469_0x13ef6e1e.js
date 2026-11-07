// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Nm, DDt } from "B:/~BUN/root/chunk-63btkzab.js";
import { d, k } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { Nt } from "B:/~BUN/root/chunk-q78ga0zw.js";
import { J } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { vt, sg, t, _, m7 } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Q } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { _s } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { O_e, Jmo, zLt, v7e, jLe, LF, ACe, ik } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { lN, Gie, Cc } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { Et } from "B:/~BUN/root/chunk-2f1svh63.js";
import { hI, IQo, XC, Our, B5t } from "B:/~BUN/root/chunk-27h4st9h.js";
import { IQt, Ix, F2 } from "B:/~BUN/root/chunk-hjds4dtx.js";
import { dt, Yt } from "B:/~BUN/root/chunk-9kvvd0hy.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { Jc } from "B:/~BUN/root/chunk-y1kkrqy9.js";
import { QHt, Yd, jt } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { pe } from "B:/~BUN/root/chunk-thn0wk2x.js";
import { xf } from "B:/~BUN/root/chunk-x1xft50h.js";
import { et } from "B:/~BUN/root/chunk-fkr27nhj.js";
import { Am } from "B:/~BUN/root/chunk-xgg9zsk6.js";
import { JLe, Wl, lo } from "B:/~BUN/root/chunk-detjgwj4.js";
import { nit } from "B:/~BUN/root/chunk-dsg3ep96.js";
import { m1, gA, HW, j6 } from "B:/~BUN/root/chunk-k5xd4a86.js";
import { Ay, KKr, tit } from "B:/~BUN/root/chunk-zsg9mhrx.js";
import { Xti, Jti, o_, IKr, Qzo, Zzo, Zti, MKr } from "B:/~BUN/root/chunk-hx3amhsz.js";
import { v2o, D7n, Gri } from "B:/~BUN/root/chunk-z01rp8b9.js";
import { N7n } from "B:/~BUN/root/chunk-nzmdrz0a.js";
import { Ja } from "B:/~BUN/root/chunk-v91d7hbv.js";
import { ou } from "B:/~BUN/root/chunk-epyd9ybj.js";
import { o, I, oe, C, u } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { nt } from "B:/~BUN/root/chunk-tq5dzbq9.js";
import { L } from "B:/~BUN/root/chunk-5ha2avah.js";
import { Oe } from "B:/~BUN/root/chunk-4qfwb3rf.js";
var hs = e => e.kind === "needs-manifest" ? e.draft : void 0;
import { realpath as Zi } from "fs/promises";
import { join as en, resolve as rn } from "path";
import { dirname as bs, join as ys } from "path";
var De = hI(bs(ys(Nm)));
function ze(e) {
  let r = e instanceof Error ? e.cause : void 0;
  return [d(e), typeof r === "string" ? r : ""].filter(Boolean);
}
var Yyn = e => e.catch(r => o_("unreadable", ze(r)));
import { rm as Ss } from "fs/promises";
var xs = 3;
var Rs = 100;
async function G(e, r = xs) {
  let s = await Ss(e, {
    recursive: !0,
    force: !0
  }).then(() => {
    return;
  }, n => n);
  if (s === void 0) return;
  if (r > 0) return await J(Rs), G(e, r - 1);
  t(`A copy made to validate a plugin could not be removed: ${k(s) ?? "no code"}`, {
    level: "warn"
  });
}
var M = () => Error("The copy to validate was ended as the process ends");
var X = (e, r) => e.path.localeCompare(r.path, "en");
import { readdir as Xs } from "fs/promises";
import { join as Qs } from "path";
import { lstat as Os } from "fs/promises";
var Ps = e => e.isSymbolicLink() && "link" || e.isDirectory() && "folder" || e.isFile() && "file" || "special";
async function vs(path) {
  let r = await Os(path);
  return {
    path: path,
    kind: Ps(r),
    bytes: r.size,
    mode: r.mode,
    links: r.nlink
  };
}
var ee = 32;
import { join as Ms } from "path";
var We = ".gitignore";
var Ve = Oe(O_e(), 1);
import { join as Ts } from "path";
var As = e => e.split(/\r?\n/).map((r, index) => ({
  line: r,
  named: `line ${index + 1}: ${r}`
})).find(item => Jmo(item.line) !== null)?.named;
import { lstat as Ls } from "fs/promises";
var Es = Object.freeze(["ENOENT", "ENOTDIR"]);
var $e = e => Es.includes(k(e) ?? "");
var ws = e => Ls(e).then(() => Promise.reject(Error("A .gitignore here cannot be read")), r => $e(r) ? "" : Promise.reject(r));
async function Ye(base) {
  let r = Ts(base, We),
    s = (await HW(r)) ?? (await ws(r)),
    n = As(s);
  if (n !== void 0) throw Error("A .gitignore line cannot be read", {
    cause: `${r} ${n}`
  });
  let a = zLt(s);
  return a.length > 0 ? [{
    base: base,
    rules: Ve.default().add(a)
  }] : [];
}
async function Is(e, r) {
  let cause = Ms(e, We);
  if (r.some(item => item.path === cause && item.kind === "file" && item.links > 1)) throw Error("A .gitignore here cannot be read", {
    cause: cause
  });
  return Ye(e);
}
import { relative as Fs } from "path";
var R = (e, r) => hI(Fs(e, r.path));
import { basename as Ws } from "path";
import { basename as Ns } from "path";
var oni = Object.freeze([".mcp.json"]);
var ks = (e, r) => !oni.includes(r) && (Ix(`/${r}`) || Ix(`/${Ns(e)}/${r}`) || F2(`/${r}`));
import { dirname as Us, join as zs } from "path";
var Ds = Object.freeze({
  file: "",
  folder: "/",
  link: "",
  special: ""
});
var er = (e, r) => e.toReversed().map(({
  base: base_2,
  rules: rules
}) => rules.test(R(base_2, r) + Ds[r.kind])).find(item => item.ignored || item.unignored)?.ignored ?? !1;
function Cs(e, r, s) {
  let n = zs(e, Nm),
    path_2 = Us(n);
  return !(s.path === n || s.path === path_2) && (er(r.scope, s) || r.path === path_2 && er(r.scope.filter(item => item.base !== path_2), {
    ...s,
    path: path_2,
    kind: "folder"
  }));
}
import { basename as sr } from "path";
var Bs = [...Our, ".hg", ".svn", ".jj", ".sl", ".bzr"];
function js(e) {
  let r = [sr(e.path), ...IQt(sr(e.path))];
  return e.kind === "folder" && r.some(item => item.endsWith(".git")) || r.some(item => Bs.includes(item));
}
var Ks = (e, r, s) => v2o([s.kind === "link" && "link", s.kind === "special" && "special", s.kind === "file" && s.links > 1 && "hard-link", Ws(s.path).includes("\\") && "backslash", js(s) && "never", B5t(e, s.path) && "generated", ks(e, R(e, s)) && "secret", Cs(e, r, s) && "ignored"]);
function qs(e, r, s) {
  let why = Ks(e, r, s);
  return why === void 0 ? [] : [{
    path: R(e, s),
    why: why
  }];
}
var mode_3 = 33188;
var $s = 73;
var sni = 33261;
function Gs(e) {
  return (e.mode & $s) !== 0 ? sni : mode_3;
}
var Vs = (e, r) => ({
  path: R(e, r),
  bytes: r.bytes,
  mode: Gs(r)
});
function Ys(e, r, s) {
  let leftOut = s.flatMap(item => qs(e, r, item)),
    a = new Set(leftOut.map(item => item.path)),
    m = s.filter(item => !a.has(R(e, item)));
  return {
    files: m.filter(item => item.kind === "file").map(item => Vs(e, item)),
    leftOut: leftOut,
    folders: m.filter(item => item.kind === "folder").map(item => ({
      path: item.path,
      scope: r.scope
    }))
  };
}
async function Js(e, r) {
  let s = Ja(ee, a => vs(Qs(r.path, a))),
    n = await Promise.all((await Xs(r.path)).toSorted().map(s));
  return Ys(e, {
    path: r.path,
    scope: r.scope.concat(await Is(r.path, n))
  }, n);
}
import { dirname as Zs } from "path";
function gr(e) {
  let r = Zs(e);
  return r === e ? [e] : [e, ...gr(r)];
}
import { lstat as ei } from "fs/promises";
import { join as ri } from "path";
var oi = e => ei(ri(e, ".git")).then(() => !0, r => $e(r) ? !1 : Promise.reject(r));
async function ti(e) {
  let r = gr(e);
  for (let [s, n] of r.entries()) if (await oi(n)) return r.slice(1, s + 1).toReversed();
  return [];
}
var si = async e => (await Promise.all((await ti(e)).map(Ye))).flat();
async function ne(path_3) {
  let r = [],
    s = [],
    n = [{
      path: path_3,
      scope: await si(path_3)
    }];
  for (let a of n) {
    if (r.length > Qzo) break;
    let f = await Js(path_3, a);
    r.push(...f.files), s.push(...f.leftOut), n.push(...f.folders);
  }
  return {
    files: r.toSorted(X),
    leftOut: s.toSorted(X)
  };
}
import { mkdir as vi, mkdtemp as Ai } from "fs/promises";
import { basename as Ei, join as Nr } from "path";
import { mkdir as yi, writeFile as xi } from "fs/promises";
import { dirname as Ri, join as wr } from "path";
var mode = 448;
var mode_2 = 384;
import { join as bi } from "path";
import { lstat as pi, realpath as mi } from "fs/promises";
var ai = !1;
var _r = 1n;
var Or = Object.freeze({
  bigint: !0
});
async function fi(e, r, s) {
  let n = await mi(r).catch(() => e),
    m = ou(e, n, ai) ? await pi(n, Or).catch(() => {
      return;
    }) : void 0;
  return m?.ino === s.ino && m.dev === s.dev && m.nlink === _r;
}
import { open as ui } from "fs/promises";
var li = Object.freeze(["ENOENT", "ENOTDIR", "ELOOP", "EISDIR"]);
var di = e => ui(e, Cc()).catch(r => li.includes(k(r) ?? "") ? void 0 : Promise.reject(r));
import { lstat as ci } from "fs/promises";
import { dirname as gi } from "path";
var hi = async (e, r) => (await gA(e, gi(r))) === "ok" && (await ci(r).catch(() => {
  return;
}))?.isFile() === !0;
async function dGo(e, r) {
  let s = bi(e, r.path),
    a = (await hi(e, s)) ? await di(s) : void 0;
  try {
    let m = await a?.stat(Or),
      c = m?.isFile() === !0 && m.size === BigInt(r.bytes) && m.nlink === _r && (await fi(e, s, m)) ? await a?.readFile() : void 0;
    return c?.length === r.bytes ? c : void 0;
  } finally {
    await a?.close();
  }
}
async function Si(e, r, s) {
  let n = await dGo(e, s);
  if (n === void 0) return;
  return await yi(Ri(wr(r, s.path)), {
    recursive: !0,
    mode: mode
  }).then(() => xi(wr(r, s.path), n, {
    flag: "wx",
    mode: mode_2
  })).catch(a => Promise.reject(Error("A file could not be copied to be validated", {
    cause: `${k(a) ?? ""} ${s.path}`.trim()
  }))), nt(n);
}
async function Pi(e, r, s) {
  e.abort(), await r, await s();
}
var _i = (e, r) => Object.fromEntries(e.map((item, index) => [item.path, r[index] ?? ""]));
var Oi = (home, dir, hashes) => ({
  home: home,
  dir: dir,
  hashes: hashes
});
async function Li(e, r) {
  if (sg()) return Promise.reject(M());
  let s = await Ai(Nr(xf(), "claude-publish-")).catch(h => Promise.reject(Error("A folder to validate a copy in could not be made", {
      cause: k(h) ?? ""
    }))),
    n = Am(() => G(s));
  if (sg()) return await n(), Promise.reject(M());
  let a = Nr(s, "copy", Ei(e)),
    abortController = new AbortController(),
    f = Promise.resolve().then(() => vi(a, {
      recursive: !0,
      mode: mode
    })).catch(() => {
      return;
    }).then(() => Promise.allSettled(r.map(Ja(ee, h => abortController.signal.aborted ? Promise.resolve(void 0) : Si(e, a, h).catch(w => (abortController.abort(), Promise.reject(w)))))));
  using c = vt(() => Pi(abortController, f, n));
  let g = await f,
    E = g.find(item => item.status === "rejected"),
    x = r.find((item, index) => g[index]?.status === "fulfilled" && !g[index].value);
  if (await (E === void 0 && x === void 0 && !abortController.signal.aborted ? void 0 : n()), E?.status === "rejected") return Promise.reject(E.reason);
  if (abortController.signal.aborted) return await n(), Promise.reject(M());
  if (x !== void 0) return {
    missed: x.path
  };
  return Oi(s, a, _i(r, g.map(item => item.status === "fulfilled" ? item.value : void 0)));
}
var cGo = e => o_("changed", [`${e.missed} is not the file that was listed`]);
function wi(e, r) {
  let s = new Set(e.listing.files.map(item => item.path));
  return [...e.listing.files.filter(item => !Object.hasOwn(r.hashes, item.path)).map(item => "Among the files to send only since the folder was read: " + item.path), ...Object.keys(r.hashes).filter(item => !s.has(item)).map(item => "No longer among the files to send since the folder was read: " + item), ...e.listing.files.filter(item => Object.hasOwn(r.hashes, item.path) && e.hashes[item.path] !== r.hashes[item.path]).map(item => `${item.path} is not the file that was listed`)].slice(0, 1);
}
function Ti(e, r) {
  let s = e.kind === "ready" ? wi(e, r) : [];
  return s.length === 0 && (e.kind !== "ready" || e.listing.files.length === Object.keys(r.hashes).length) ? e : o_("changed", s);
}
import { basename as Mi } from "path";
var D = e => e.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-").replaceAll(/^-|-$/g, "") || "plugin";
function Ii(e) {
  let r = nit(D(Mi(e)));
  return r?.severity === "error" ? [`${r.message} The name comes from the folder: rename it.`] : [];
}
import { basename as ki } from "path";
var Fi = e => e && Et(e, Xti);
var version = "0.1.0";
var Di = (e, r) => `${_({
  name: D(ki(e)),
  version: version,
  description: Fi(r)
}, null, 2)}
`;
var Ui = (root, r) => ({
  kind: "needs-manifest",
  root: root,
  draft: Di(root, r)
});
var zi = e => e.flatMap(item => item.errors.map(s => `${item.filePath}: ${s.path}: ${_s(s.message)}`));
import { join as ji } from "path";
var Ci = e => ({
  name: e.name,
  version: e.version,
  description: e.description
});
var Bi = p(() => u({
  name: o(),
  version: o().optional(),
  description: o().optional()
}));
async function Hi(e) {
  let r = await j6(ji(e, Nm)),
    s = Bi().safeParse(et(r.kind === "ok" ? r.content : ""));
  if (r.kind === "absent") return "absent";
  return s.success ? Ci(s.data) : "unreadable";
}
function Wi(e, r) {
  return e !== void 0 && r !== void 0 ? [[e.path, nt(r)]] : [];
}
async function ini(e, r, s) {
  let n = await Promise.all(e.map(Ja(ee, r))),
    a = e.find((item, index) => n[index] === void 0);
  return a === void 0 ? n.flatMap((item, index) => s(e[index], item)) : {
    missed: a.path
  };
}
async function Ki(e, r) {
  let s = await ini(r, n => dGo(e, n), Wi);
  return "missed" in s ? s : {
    hashes: Object.fromEntries(s)
  };
}
var Xr = e => e.files.map(item => item.path).filter(item => `/${item}`.endsWith(`/${hI(Nm)}`));
function Qr(e, r) {
  let s = Xr(e);
  if (s.length > 1) return o_("findings", [`More than one manifest: ${s.join(", ")}`]);
  if (e.files.length > Qzo) return o_("too-many-files");
  return r > IKr ? o_("too-large") : void 0;
}
async function Jr(root_2, manifest) {
  let listing = await ne(root_2),
    bytes = listing.files.reduce((acc, item) => acc + item.bytes, 0),
    a = Qr(listing, bytes);
  if (a !== void 0) return a;
  let m = await Ki(root_2, listing.files);
  return "missed" in m ? cGo(m) : {
    kind: "ready",
    root: root_2,
    manifest: manifest,
    listing: listing,
    bytes: bytes,
    hashes: m.hashes
  };
}
import { basename as oo, dirname as to } from "path";
var qi = [" ", "\t", `
`, '"', "'", "("];
var $i = e => e.slice(0, 1 + Math.max(...qi.map(item => e.lastIndexOf(item))));
function Gi(e, r, s) {
  let n = e.split(r);
  return n.slice(0, -1).map(item => $i(item) + s).concat(n.at(-1) ?? "").join("");
}
function he(e, r, s) {
  let n = to(r.dir),
    a = to(s).replace(/[\\/]$/, "");
  return [`${oo(r.home)}/copy`, `${oo(r.home)}\\copy`].reduce((acc, item) => Gi(acc, item, a), e.replaceAll(n, () => a).replaceAll(Ay(n, n.length), () => a));
}
var Vi = (e, r, s) => e.map(item => ({
  ...item,
  filePath: he(item.filePath, r, s),
  errors: item.errors.map(item => ({
    ...item,
    message: he(item.message, r, s)
  }))
}));
function Yi(e) {
  return e.kind === "ready" && Xr(e.listing).length === 0 ? o_("unreadable", [hI(Nm)]) : e;
}
async function Xi(e, r, s) {
  let {
      manifest: manifest_2,
      contents: contents
    } = await tit(r.dir),
    m = manifest_2?.errors.some(x => x.code === KKr) ?? !0,
    f = zi(Vi(m ? contents : [manifest_2 ?? [], contents].flat(), r, e)).concat(m ? Ii(e) : []),
    c = m ? await DDt(r.dir) : manifest_2?.fileType === "plugin",
    g = await Hi(r.dir);
  if (!c) return o_("not-a-plugin");
  if (f.length > 0) return o_("findings", f);
  if (g === "unreadable") return o_("unreadable", [hI(Nm)]);
  return g === "absent" ? Ui(e, s) : Ti(Yi(await Jr(e, g)), r);
}
function Qi(e) {
  let r = hI(Nm);
  return e.leftOut.some(item => item.path === r) ? o_("unreadable", [r]) : void 0;
}
async function Ji(e, r) {
  let s = await ne(e),
    n = Qi(s) ?? Qr(s, s.files.reduce((acc, item) => acc + item.bytes, 0));
  if (n !== void 0) return n;
  let a = await Li(e, s.files);
  if ("missed" in a) return cGo(a);
  let m = Am(() => G(a.home));
  using f = vt(m);
  if (sg()) return await m(), Promise.reject(M());
  try {
    return await Xi(e, a, r).catch(c => o_("unreadable", ze(c).map(item => he(item, a, e))));
  } finally {
    await m();
  }
}
async function ani(e, r) {
  let s = await Zi(rn(pe(), e)).catch(() => {
    return;
  });
  if (!(s !== void 0 && (await m1(s)))) return o_("no-folder", [e]);
  return (await gA(s, en(s, De))) === "refused" ? o_("unreadable", [De]) : Yyn(Ji(s, r));
}
var on = e => ({
  path: hI(Nm),
  bytes: Buffer.byteLength(e.draft),
  mode: mode_3
});
import { basename as tn } from "path";
function sn(e) {
  let r = Gie().safeParse(et(e.draft));
  return {
    name: r.data?.name ?? tn(e.root),
    version: r.data?.version,
    description: r.data?.description
  };
}
var nn = (e, r) => ({
  files: e.files.concat(r).toSorted(X),
  leftOut: e.leftOut
});
var an = (e, r, s) => ({
  ...e,
  [r]: nt(s)
});
var pn = (e, r, s) => ({
  ...e,
  bytes: e.bytes + r.bytes,
  listing: nn(e.listing, r),
  hashes: an(e.hashes, r.path, s.draft)
});
async function mn(e) {
  let r = on(e),
    s = await Jr(e.root, sn(e));
  return s.kind === "ready" ? pn(s, r, e) : s;
}
async function fn(e) {
  return e.kind === "needs-manifest" ? Yyn(mn(e)) : e;
}
async function HKr(wanted, organization) {
  let s = await ani(wanted.folder, wanted.description),
    plan = await fn(s);
  if (plan.kind === "refused") return plan;
  return plan.kind === "ready" ? {
    wanted: wanted,
    plan: plan,
    organization: organization,
    draft: hs(s),
    withheld: !1
  } : o_("unreadable");
}
var lni = Object.freeze({
  nothing: "Nothing was sent.",
  uploading: "The upload was on its way: look in your uploads on claude.ai, where it may have arrived. Nothing was submitted.",
  shelved: "The upload had arrived on your own shelf, where only you see it. It was not submitted.",
  submitting: "The upload had arrived, and its submission was on its way: it may have reached your organization."
});
function tKt(e, r, s) {
  return e.signal.aborted ? o_("stopped", [lni[s]]) : r;
}
function Ro(e) {
  return e === "." || e === ".." ? e.replaceAll(".", "%252E") : encodeURIComponent(e).replaceAll(".", "%2E");
}
var un = e => `/api/oauth/organizations/${Ro(e.organization.id)}`;
var Re = (e, r) => `${un(e)}/${r.map(Ro).join("/")}`;
var B = (e, r) => ({
  method: "get",
  path: Re(e, r),
  body: void 0,
  headers: {},
  bound: "clock",
  signal: e.signal
});
var dn = 200;
var cn = 300;
var Xyn = e => e.status >= dn && e.status < cn;
var gn = 400;
var hn = 405;
var bn = 404;
var yn = 501;
var xn = 422;
var Rn = Object.freeze([gn, bn, hn, xn, yn]);
var Sn = 20;
var Pn = 300;
var _n = Object.freeze(["scan", "other"]);
var On = (e, r) => [...r.findings, ...[r.message ?? ""].filter(item => item !== "" && _n.includes(e))].slice(0, Sn).map(item => Q(item, Pn));
var vn = p(() => u({
  error: u({
    message: o().optional(),
    details: u({
      error_code: o().optional(),
      validation_errors: u({
        message: o().optional(),
        plugins: C(u({
          name: o().optional(),
          error: o().optional()
        })).optional()
      }).optional()
    }).optional()
  }).optional()
}));
function Se(e) {
  let r = vn().safeParse(e.data).data?.error,
    s = r?.details?.validation_errors;
  return {
    code: r?.details?.error_code,
    message: r?.message,
    findings: [s?.message ?? "", ...(s?.plugins ?? []).map(item => [item.name, item.error].filter(Boolean).join(": "))].filter(Boolean)
  };
}
function H(e, r) {
  let s = Se(e),
    n = r.codes[s.code ?? ""] ?? r.statuses[e.status] ?? "other";
  return o_(n, On(n, s));
}
var streamUpload = Object.freeze({});
var post = 120000;
var Ln = 15000;
var wn = Object.freeze({
  get: Ln,
  post: post
});
function Tn(e) {
  return e.bound === "progress" ? {
    streamUpload: streamUpload
  } : {
    timeout: wn[e.method]
  };
}
var Mn = e => ({
  ...e.headers,
  "anthropic-beta": Jc
});
var maxContentLength = 4194304;
var Ho = e => ({
  auth: "teleport-org",
  headers: Mn(e),
  ...Tn(e),
  signal: e.signal,
  maxBodyLength: Buffer.byteLength(e.body ?? ""),
  maxContentLength: maxContentLength,
  maxRedirects: 0,
  validateStatus: () => !0
});
function Fn(e) {
  return e.method === "get" ? jt.get(e.path, Ho(e)) : jt.post(e.path, e.body, Ho(e));
}
var qo = Object.freeze({
  status: 0,
  data: void 0
});
function Nn(e, r) {
  return t(`plugin publish: ${e.method} ${e.path} got no answer: ` + d(r), {
    level: "error"
  }), qo;
}
var kn = Object.freeze({
  "data-residency": "third-party",
  "essential-traffic-only": "traffic-off",
  "no-auth": "signed-out"
});
async function $Kr(e) {
  let r = await Fn(e).catch(n => Nn(e, n));
  return "status" in r ? {
    status: r.status,
    data: r.data
  } : o_(kn[r.reason] ?? "other");
}
var Dn = Object.freeze(["plugin_upload_conflict", "plugin_previous_save_scanning", "plugin_upload_busy", "plugin_content_scan_rate_limited", "org_library_submission_conflict", "org_library_submission_source_changed"]);
var Un = 429;
var zn = 503;
var Cn = Object.freeze([Un, zn]);
var Bn = (e, r) => e.method === "get" && r.status === qo.status || Cn.includes(r.status) || Dn.includes(Se(r).code ?? "");
var jn = 3;
var Hn = 2000;
async function v(e, r = jn) {
  let s = await $Kr(e);
  if (!(r > 0 && !e.signal.aborted && "status" in s && Bn(e, s))) return s;
  return await J(Hn, e.signal), v(e, r - 1);
}
var ot = e => [e, ...Object.values(Object(e))].find(Array.isArray) ?? [];
var tt = p(() => u({
  uuid: o().optional(),
  plugin_id: o().nullish(),
  plugin_name: o().nullish(),
  status: o().optional(),
  publish_state: o().nullish(),
  updates_published_plugin_id: o().nullish(),
  denial_reason: o().nullish(),
  content_scan: oe().optional(),
  outcome: u({
    published_plugin_id: o().nullish(),
    published_marketplace_id: o().nullish(),
    failure_reason: o().nullish()
  }).nullish()
}));
var Wn = e => ot(e).flatMap(item => [tt().safeParse(item)].flatMap(item => item.success ? [item.data] : []));
var codes = Object.freeze({
  plugin_version_scan_pending: "scan-pending",
  plugin_version_scan_failed: "scan",
  org_library_submission_already_pending: "already-pending",
  org_library_submission_installs_for_members: "installs-for-members",
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
var statuses = Object.freeze({
  0: "busy",
  401: "signed-out",
  404: "publishing-off",
  429: "busy",
  503: "busy"
});
var pt = Object.freeze({
  codes: codes,
  statuses: statuses
});
async function uGo(e) {
  let r = await v(B(e, ["library_submissions", "me"]));
  if ("kind" in r) return r;
  if (Rn.includes(r.status)) return o_("not-served");
  return Xyn(r) ? Wn(r.data) : H(r, pt);
}
var Ee = (e, r) => o_(e.refusal.kind, e.refusal.details.concat(`See or remove the upload: ${Zzo(r.id)}`));
var Vn = Object.freeze({
  plugin_version_scan_pending: "scan-pending",
  plugin_version_scan_failed: "scan",
  org_library_submission_publish_not_started: "busy",
  org_library_submission_publish_timed_out: "busy",
  org_library_submission_publisher_unavailable: "busy"
});
var Yn = "claudeai-organization-library";
var Xn = p(() => u({
  name: o().optional(),
  marketplace_name: o().optional()
}));
function Qn(e, r) {
  let s = Xn().safeParse(e).data,
    n = IQo(s?.marketplace_name ?? "") ?? Yn;
  return `${s?.name ?? r}@${n}`;
}
async function Jn(e, r, s) {
  let n = await $Kr(B(e, ["plugins", r]));
  return Qn("status" in n ? n.data : void 0, s);
}
var Zn = 64;
var UKr = e => D(D(e.name).slice(0, Zn));
async function ea(e, r, s, isUnscanned) {
  let install = await Jn(e, r, UKr(e.manifest));
  return {
    kind: "published",
    manifest: e.manifest,
    isUnscanned: isUnscanned,
    verdict: s.verdict,
    install: install,
    link: Zzo(r)
  };
}
var ra = (e, kind, s, isUnscanned_2) => ({
  kind: kind,
  manifest: e.manifest,
  isUnscanned: isUnscanned_2,
  verdict: s.verdict,
  id: s.id
});
async function oa(e, r, s) {
  let n = r.outcome?.published_plugin_id ?? void 0,
    a = r.publish_state === "completed" && n !== void 0,
    m = r.status === "approved" && r.publish_state === "failed",
    f = r.status === "approved";
  if (m) return o_(Vn[r.outcome?.failure_reason ?? ""] ?? "other");
  let c = f && a,
    g = s.scan === "none" && r.content_scan === null;
  return c ? ea(e, n, s, g) : ra(e, f ? "publishing" : "in-review", s, g);
}
var xt = (e, r, s) => e.find(item => item.plugin_id === r.id && item.status === s);
var ta = e => e === void 0 ? "available" : void 0;
var sa = e => ({
  kind: "plugin",
  id: e.id
});
var ia = (e, r) => ({
  source: sa(e),
  proposed_install_preference: ta(xt(r, e, "approved")),
  predecessor_uuid: xt(r, e, "denied")?.uuid
});
var headers = Object.freeze({
  "Content-Type": "application/json"
});
var At = (e, r, s) => ({
  method: "post",
  path: Re(e, r),
  body: _(s),
  headers: headers,
  bound: "clock",
  signal: e.signal
});
async function aa(e, r) {
  let s = await v(At(e, ["library_submissions"], r));
  if ("kind" in s) return s;
  return Xyn(s) ? tt().safeParse(s.data).data ?? o_("other") : H(s, pt);
}
function pa(e, r) {
  if (e.signal.aborted || r.scan === "failed") return Ee(tKt(e, o_("scan", Zti(r)), "shelved"), r);
  if (r.isAwaitingCurrent) return Ee(o_("not-current"), r);
  return r.scan === "processing" ? {
    kind: "on-shelf",
    manifest: e.manifest,
    id: r.id
  } : void 0;
}
async function yia(e, r, s) {
  let n = pa(e, r);
  if (n !== void 0) return n;
  let a = await aa(e, ia(r, s));
  return "kind" in a ? Ee(tKt(e, a, "submitting"), r) : oa(e, a, r);
}
var source = "manual";
var fa = Object.freeze({
  name: "My Uploads",
  source: source,
  source_url: ""
});
var la = p(() => u({
  id: o().min(1),
  source: o().optional()
}));
var ua = e => [e, ...ot(e)].map(item => la().safeParse(item).data).find(item => item?.source === source)?.id;
var codes_2 = Object.freeze({
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
var statuses_2 = Object.freeze({
  0: "busy",
  401: "signed-out",
  403: "creation-off",
  413: "too-large",
  429: "busy",
  503: "busy"
});
var Ut = Object.freeze({
  codes: codes_2,
  statuses: statuses_2
});
async function zt(e, r) {
  let s = await v(e);
  if ("kind" in s) return s;
  return Xyn(s) ? ua(s.data) ?? r() : H(s, Ut);
}
var ga = e => zt(At(e, ["marketplaces", "create-account-marketplace"], fa), async () => o_("other"));
var left = 60;
var ba = e => ({
  "Content-Type": `multipart/form-data; boundary=${e.boundary}`
});
var _ia = (archive, r, s) => ({
  ...s,
  archive: archive,
  manifest: r.manifest
});
var xa = Object.freeze(["pass", "warn", "unknown"]);
function Ra(e, r, s) {
  let n = s ? e.content_scan === null : e.content_scan == null,
    a = r === !1 && n,
    m = Boolean(e.pending_version) && e.served !== !0,
    f = xa.includes(e.content_scan?.combined_assessment ?? "");
  return v2o([e.content_scan?.status === "errored" && "failed", !a && e.content_scan?.status !== "completed" && "processing", e.served === !1 && "processing", m && "processing", a && "none", !f && "failed"]) ?? "passed";
}
var Sa = (id, r, s) => ({
  id: id,
  name: r.name,
  version: r.version,
  scan: Ra(r, r.scan_requested ?? s?.isScanAsked, s !== void 0),
  isScanAsked: r.scan_requested ?? s?.isScanAsked,
  verdict: r.content_scan?.combined_assessment ?? r.content_scan?.status,
  isAwaitingCurrent: r.awaiting_make_current === !0 || s?.isAwaitingCurrent === !0
});
var Pa = p(() => u({
  id: o().min(1).optional(),
  name: o().optional(),
  version: o().optional(),
  marketplace_id: o().optional(),
  served: I().optional(),
  pending_version: o().nullish(),
  scan_requested: I().nullish(),
  awaiting_make_current: oe().optional(),
  content_scan: u({
    status: o().optional(),
    combined_assessment: o().nullish()
  }).nullish()
}));
function Gt(e, r) {
  let s = Pa().safeParse(e).data ?? {},
    n = r?.id ?? s.id;
  return n !== void 0 ? Sa(n, s, r) : void 0;
}
var _a = (e, r, s) => `${Re(r, ["marketplaces", e, "plugins", "account-upload"])}?overwrite=${String(s === "replace")}`;
import { randomUUID as va } from "crypto";
function Oa(e, r) {
  let s = UKr(r);
  return s !== r.name ? `\r
--${e}\r
Content-Disposition: form-data; name="new_name"\r
\r
` + s : "";
}
function Aa(e, r) {
  let boundary = `----PluginPublish${va()}`,
    n = UKr(r);
  return {
    boundary: boundary,
    body: Buffer.concat([Buffer.from(`--${boundary}\r
Content-Disposition: form-data; name="file"; filename="${n}.zip"\r
Content-Type: application/zip\r
\r
`), e, Buffer.from(Oa(boundary, r) + `\r
--${boundary}--\r
`)])
  };
}
function Ea(e, r, s) {
  let n = Aa(r.archive, r.manifest);
  return {
    method: "post",
    path: _a(e, r, s),
    body: n.body,
    headers: ba(n),
    bound: "progress",
    signal: r.signal
  };
}
async function Zt(e, r, s) {
  let n = await v(Ea(e, r, s));
  if ("kind" in n) return n;
  if (Se(n).code === "plugin_upload_already_exists") return "exists";
  return Xyn(n) ? Gt(n.data, void 0) ?? o_("other") : H(n, Ut);
}
async function La(e, r) {
  let s = await Zt(e, r, "replace");
  return s === "exists" ? o_("busy") : s;
}
var wa = 5000;
async function Ta(e, r) {
  let s = await $Kr(B(e, ["plugins", r.id, "scan-status"]));
  return "status" in s && Xyn(s) ? Gt(s.data, r) ?? r : r;
}
var Ma = 300000;
async function dni(e, r, s = {
  left: left,
  until: Date.now() + Ma
}) {
  if (!(r.scan === "processing" && !r.isAwaitingCurrent && !e.signal.aborted && s.left > 0 && Date.now() < s.until)) return r;
  return await J(wa, e.signal), dni(e, await Ta(e, r), {
    left: s.left - 1,
    until: s.until
  });
}
var bia = e => zt(B(e, ["marketplaces", "list-account-marketplaces"]), () => ga(e));
async function Sia(e, r) {
  let s = await Zt(e, r, "new");
  if (s !== "exists") return s;
  return r.mode === "replace" ? La(e, r) : o_("exists");
}
async function Da() {
  let id_2 = Nt(D7n() ? i.CLAUDE_CODE_ORGANIZATION_UUID : await QHt()),
    r = Yd(),
    s = r?.organizationUuid === id_2;
  if (id_2 === null) return;
  return {
    id: id_2,
    name: s && r?.organizationName || void 0
  };
}
async function fGo(e) {
  return e !== void 0 ? void 0 : Da();
}
var pGo = () => D7n() ? "no-organization" : Gri();
var BKr = e => nt(_([e.plan.root, e.wanted.destination, e.organization.id, MKr(e.plan.manifest), e.wanted.mode, e.plan.listing.files.map(item => [item.path, item.bytes, item.mode, e.plan.hashes[item.path]])]));
function mGo(e, r) {
  return e.refusal.kind === "unreadable" && jLe(r.permissions()) ? {
    ...e,
    refusal: {
      ...e.refusal,
      details: []
    }
  } : e;
}
import { join as is } from "path";
var ja = (e, r, s) => r.files.map(item => item.path).filter(item => LF(is(e[0] ?? "", item), s.permissions(), e.map(a => is(a, item))));
function cni(e, r, s) {
  return ja(e, r, s).length === 0 ? void 0 : o_("read-denied");
}
import { realpath as Ka } from "fs/promises";
import { resolve as qa } from "path";
var Ha = ["bare-deny", "path-deny"];
var Wa = (e, r) => Ha.includes(ACe([e], r.permissions(), {
  refuseAutomounterShapes: !0
}).layer);
async function hGo(e, r) {
  let s = qa(pe(), e.path);
  if (Wa(s, r)) return o_("read-denied");
  if (!jLe(r.permissions())) return;
  let n = await Ka(s).catch(() => s),
    a = await Yyn(ne(n));
  return "kind" in a ? a : cni([s, n], a, r);
}
import { resolve as Ga } from "path";
var fs = (path_4, r, s) => v7e(s.tool, {
  path: path_4
}, s.permissions(), r) !== null;
function Va(e, r) {
  if (fs(e.path, [e.path], r)) return "network-path";
  let s = Ga(pe(), e.path),
    n = m7(s);
  return fs(s, n.paths, r) ? "network-path" : n.vetted ? void 0 : "unreadable";
}
var gGo = (e, r) => N7n() ? Va(e, r) : "flag-off";
var jKr = e => nt(_(lN(e)));
var yGo = e => jKr(Jti().safeParse(e).data ?? e);
var _Go = e => ({
  folder: e.path,
  destination: e.destination ?? "organization",
  description: e.description,
  mode: e.replace === !0 ? "replace" : "new"
});
import { join as rp } from "path";
var Za = (file_path, r) => ik(XC, {
  file_path: file_path,
  content: ""
}, r).behavior === "deny" || LF(file_path, r);
var ep = Object.freeze([Yt, dt].map(e => Object.freeze({
  name: e,
  mcpInfo: void 0,
  familyParentToolName: void 0,
  aliasSkillToolNames: void 0,
  packagingAliasSkillToolNames: void 0
})));
function bGo(e, r) {
  let s = r.permissions(),
    n = Wl(s).filter(item => !JLe.includes(item.source));
  return ep.some(item => lo(s, item, n) !== null) || L(e).some(item => Za(rp(item, Nm), s));
}
export { Yyn, oni, sni, dGo, cGo, ini, ani, HKr, lni, tKt, Xyn, $Kr, uGo, UKr, yia, _ia, dni, bia, Sia, fGo, pGo, BKr, mGo, cni, hGo, gGo, jKr, yGo, _Go, bGo };