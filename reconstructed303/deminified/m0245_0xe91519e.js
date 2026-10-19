// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Nn, ke, jgn, de } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { W } from "B:/~BUN/root/chunk-hg8ngszx.js";
import { x, d, k, G, Wt, tz } from "B:/~BUN/root/chunk-3aez4b53.js";
import { NA, ul, C$, gP, pl, sWt, nu, _hn, uT, $Q, fV, OSt, fQn, mQn, gQn, Sv, iWt, uS, Ym, hP } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { Bf, se, Rde, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { Pe, vf } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { Ga, O } from "B:/~BUN/root/chunk-nggrknsv.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { dI } from "B:/~BUN/root/chunk-rvc0n7zm.js";
import { Zc, BW } from "B:/~BUN/root/chunk-xrp58hm9.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { r0, Be } from "B:/~BUN/root/chunk-d9rmnpx3.js";
import { fpn, j$o, hy, _0e, hpn, S$r, w$r, K$o, L8n, N8n, Y$o, ypn, v$r, n7e, Lf, lTe, Zle, qBt, Cn, rr, yy, e1t } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { Rt, Xs } from "B:/~BUN/root/chunk-vpgpdrbv.js";
import { ur, F4 } from "B:/~BUN/root/chunk-fsp20me0.js";
import { nR } from "B:/~BUN/root/chunk-h9p45fg5.js";
import { P1e, MRo, TNt, jPr } from "B:/~BUN/root/chunk-hhgqcegv.js";
import { Ya, Kg, np } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { Ihe, A5 } from "B:/~BUN/root/chunk-wegca9zh.js";
import { LQe, me, tTe, eT } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { Ne } from "B:/~BUN/root/chunk-nvdqbkrt.js";
import { AK, v_ } from "B:/~BUN/root/chunk-y424etr5.js";
import { W3 } from "B:/~BUN/root/chunk-xpy44yvr.js";
import { o, u } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { Cfn } from "B:/~BUN/root/chunk-59tbtn9n.js";
import { Zt } from "B:/~BUN/root/chunk-ekswf6ps.js";
import { yt } from "B:/~BUN/root/chunk-hz8x9zsh.js";
import { readdir as le, rm as Ke, stat as ze } from "fs/promises";
import { delimiter as Ge, join as E } from "path";
import { isAbsolute as Le } from "path";
var Hft = ".claude-plugin-link",
  EPr = f(() => u({
    target: o().min(1).max(4096).refine(e => Le(e), {
      message: "must be an absolute path"
    }).refine(e => !hP(e) && !pl(e), {
      message: "must be a local path"
    }).refine(e => !C$(e), {
      message: "must be canonical"
    })
  })),
  Zon = `
[mode: link]`;
import { isAbsolute as ie, join as P, relative as ae, sep as A } from "path";
import { isAbsolute as Fe, join as te, relative as re, sep as ne } from "path";
function C1e() {
  let e = vf();
  return e === null ? null : te(e, "skills");
}
function Te(e) {
  let r = C1e();
  if (r === null) return !1;
  let n = re(r, e);
  return n !== "" && n !== ".." && !n.startsWith(`..${ne}`) && !Fe(n);
}
function oe(e) {
  let r = C1e();
  if (r === null || !Te(e)) return null;
  let n = re(r, e).split(ne);
  return r0(n) && te(r, ...n) === e ? n : null;
}
function TPr(e) {
  let r = oe(e);
  return r === null ? null : Be.userConfigDir("skills", r);
}
function UDs(e) {
  let relPath = oe(e);
  return relPath === null ? null : {
    namespace: "userConfigDir",
    dir: "skills",
    relPath: relPath
  };
}
var Pj = ".orphaned_at",
  _m = ".in_use",
  $ft = ".gcs-sha",
  BU = ".links_materialized";
function T() {
  return P(Pe(), "plugins", "cache");
}
function H(e, r) {
  let n = T();
  if (r !== n) return null;
  let i = ae(n, e);
  if (i === "" || i === ".." || i.startsWith(`..${A}`) || ie(i)) return null;
  let s = i.split(A);
  return P(n, ...s) === e ? s : null;
}
function K(e) {
  return e.endsWith(".zip");
}
function y3(e, r) {
  let n = H(e, r);
  if (n === null || n.length !== 3 || !r0(n) || K(n[2])) return null;
  let [marketplace, plugin, version] = n;
  return {
    marketplace: marketplace,
    plugin: plugin,
    version: version
  };
}
function BDs(e) {
  return e.namespace === "pluginCache" && e.marketplace !== void 0 && e.plugin !== void 0 && e.version !== void 0 && e.relPath === void 0;
}
function uNt(e, r) {
  let n = y3(e, r);
  return n === null ? null : {
    namespace: "pluginCache",
    ...n
  };
}
function jDs(e, r) {
  let n = [e.marketplace, e.plugin, e.version];
  if (r !== T() || !r0(n) || K(e.version)) return null;
  return P(r, ...n);
}
function $e(e, r) {
  let n = H(e, r);
  if (n === null || n.length < 4 || !r0(n) || K(n[2])) return null;
  let [i, s, c, ...l] = n;
  return Be.pluginCache(i, s, c, l);
}
function esn(e, r) {
  return $e(e, r) ?? TPr(e);
}
function CPr(e, r) {
  return B(r) ? Be.pluginRegistry(e) : null;
}
function RPr(e, r, n) {
  return B(n) && r0([e]) ? Be.marketplaceCache(e, r) : null;
}
function B(e) {
  return e === P(Pe(), "plugins");
}
function He(e, r) {
  if (!B(r)) return null;
  let n = P(r, "marketplaces"),
    i = ae(n, e);
  if (i === "" || i === ".." || i.startsWith(`..${A}`) || ie(i)) return null;
  let s = i.split(A);
  return P(n, ...s) === e ? s : null;
}
function tsn(e, r) {
  let n = He(e, r);
  if (n === null || n.length < 2 || !r0(n)) return null;
  return Be.marketplaceTree(n[0], n.slice(1));
}
function WDs(e) {
  return e === P(Pe(), "plugins", "asset-cache") ? {
    namespace: "pluginAssetCache"
  } : null;
}
function j2n(e, r) {
  if (e === r) return r === T() ? {
    namespace: "pluginCache"
  } : null;
  let n = H(e, r);
  if (n === null || n.length > 2 || !r0(n)) return null;
  let [marketplace_2, plugin_2] = n;
  return plugin_2 === void 0 ? {
    namespace: "pluginCache",
    marketplace: marketplace_2
  } : {
    namespace: "pluginCache",
    marketplace: marketplace_2,
    plugin: plugin_2
  };
}
var pNt = new Set([Hft, _m, Pj]);
function LN(e) {
  return gP(e).replace(/[. ]+$/, "");
}
function nsn(e, r) {
  let n = LN(e);
  if (r.has(n)) return !0;
  for (let i of r) if (dI(n, i)) return !0;
  return !1;
}
function Uft(e) {
  return LN(e) === "node_modules";
}
var ue = "plugins",
  z = "cowork_plugins";
function j() {
  if (jgn()) return z;
  if (a.CLAUDE_CODE_USE_COWORK_PLUGINS) return z;
  return ue;
}
function rsn() {
  return j() === ue && !a.CLAUDE_CODE_PLUGIN_CACHE_DIR;
}
function APr() {
  return j() === z;
}
function ud() {
  let CLAUDE_CODE_PLUGIN_CACHE_DIR = a.CLAUDE_CODE_PLUGIN_CACHE_DIR;
  if (CLAUDE_CODE_PLUGIN_CACHE_DIR) return nu(CLAUDE_CODE_PLUGIN_CACHE_DIR);
  return E(Pe(), j());
}
function yD() {
  let CLAUDE_CODE_PLUGIN_SEED_DIR = a.CLAUDE_CODE_PLUGIN_SEED_DIR;
  if (!CLAUDE_CODE_PLUGIN_SEED_DIR) return [];
  return CLAUDE_CODE_PLUGIN_SEED_DIR.split(Ge).filter(Boolean).map(nu);
}
function fNt(e) {
  return e.replace(/[^a-zA-Z0-9\-_]/g, "-");
}
function bae(e) {
  return fNt(e).toLowerCase();
}
function P9e(e) {
  let r = LN(e.normalize("NFKC"));
  return r.startsWith(Zle) || fNt(r).toLowerCase().startsWith(Zle);
}
function osn(e) {
  return fNt(LN(e.normalize("NFKC"))).toLowerCase();
}
function vRo(e) {
  return e.replace(/[^a-z0-9-]/gu, r => {
    let n = r.codePointAt(0) ?? 0;
    return n <= 255 ? `_${n.toString(16).padStart(2, "0")}` : `__${n.toString(16)}_`;
  });
}
function N(e) {
  if (lTe(e)) {
    let r = e.slice(0, e.lastIndexOf("@"));
    return `${vRo(r)}-${hy}`;
  }
  return fNt(e);
}
function W2n(e, r) {
  return N(e).toLowerCase() === N(r).toLowerCase();
}
function zDs(e, r) {
  return `installed_plugins.set-aside.${e.toISOString().slice(0, 10)}.${r}.json`;
}
function z2n(e) {
  return /^installed_plugins\.set-aside\.\d{4}-\d{2}-\d{2}\.[0-9a-f]{12}\.json$/.test(e);
}
function GDs(e, r) {
  return `installed_plugins.unreadable.${e.toISOString().slice(0, 10)}.${r}.kept`;
}
function G2n(e) {
  return /^installed_plugins\.unreadable\.\d{4}-\d{2}-\d{2}\.[0-9a-f]{12}\.kept$/.test(e);
}
function ag(e) {
  return E(ud(), "data", N(e));
}
function R1e(e) {
  let r = ag(e);
  if (de()) return r;
  return se().mkdirSync(r), r;
}
async function V2n(e, {
  throwIfUnreadable = !1
} = {}) {
  let n = ag(e),
    bytes = 0,
    s = async c => {
      for (let l of await le(c, {
        withFileTypes: !0
      })) {
        let p = E(c, l.name);
        if (l.isDirectory()) await s(p);else try {
          bytes += (await ze(p)).size;
        } catch {}
      }
    };
  try {
    await s(n);
  } catch (error) {
    if (throwIfUnreadable) {
      if ((await BW(n)) === "gone") return null;
      throw error;
    }
    if (Wt(error)) return null;
    throw error;
  }
  if (bytes === 0) return null;
  return {
    bytes: bytes,
    human: Zt(bytes)
  };
}
async function ssn(e) {
  let r = ag(e);
  try {
    return await Ke(r, {
      recursive: !0
    }), "removed";
  } catch (error) {
    if (G(error)) return "absent";
    return t(`Failed to delete plugin data dir ${r}: ${d(error)}`, {
      level: "warn"
    }), "failed";
  }
}
async function VDs(e) {
  let r = E(ud(), "data"),
    n = N(e).toLowerCase();
  try {
    return (await le(r)).filter(item => item.toLowerCase() === n).map(item => E(r, item));
  } catch (error) {
    return G(error) || k(error) === "ENOTDIR" ? [] : void 0;
  }
}
async function q2n(e) {
  return (await BW(ag(e))) === "gone";
}
import { lstat as ot, realpath as v, stat as w } from "fs/promises";
import { basename as it, dirname as C, isAbsolute as he, join as ye, resolve as M } from "path";
import { isAbsolute as We, relative as je, sep as Ve } from "path";
function zy(e, r, n) {
  let i = je(e, r);
  if (i === "") return n;
  return i !== ".." && !i.startsWith(`..${Ve}`) && !We(i);
}
import { stat as Ye } from "fs/promises";
import { isAbsolute as Ze, resolve as fe, sep as Je } from "path";
function qe(e) {
  if (Ze(e)) return Bf.workspace(e);
  return Bf.workspace(I() === "windows" ? fe(e) : se().cwd() + Je + e);
}
function ce(path) {
  return Object.assign(new x(`ENOENT: no such file or directory, stat '${path}'`, "ENOENT: no such file or directory"), {
    code: "ENOENT",
    syscall: "stat",
    path: path
  });
}
function Qon(path_2) {
  return Object.assign(new x(`ENOENT: no such file or directory, open '${path_2}'`, "ENOENT: no such file or directory"), {
    code: "ENOENT",
    syscall: "open",
    path: path_2
  });
}
function pe(e) {
  return e.code === "Failed" && (tz(e.telemetryCode) !== void 0 || /^ERR_/.test(e.telemetryCode ?? "")) && e.cause instanceof Error ? e.cause : void 0;
}
function V(e, r) {
  return e === "workspace" ? qe(r) : Bf.system(fe(r));
}
async function kPr(e, r, n = "workspace") {
  if (!W() || e === void 0) return Ye(r);
  if (r === "") throw ce(r);
  let i = await e.hostFiles.stat(V(n, r), {
    follow: !0
  });
  if (!i.ok) throw pe(i.error) ?? Object.assign(new x(`Failed to probe the local marketplace path ${r}: ${yt(i.error)}`, "failed to probe a local marketplace path (v5 backend error)"), {
    cause: i.error
  });
  if (i.value.kind === "absent") throw ce(r);
  let s = i.value.kind === "directory";
  return {
    isDirectory: () => s
  };
}
async function cNt(e, r, n) {
  if (n === "") return {
    absent: "ENOENT"
  };
  let i = await e.hostFiles.readText(V(r, n));
  if (!i.ok) throw pe(i.error) ?? Object.assign(new x(`Failed to read the marketplace file ${n}: ${yt(i.error)}`, "failed to read a local marketplace file (v5 backend error)"), {
    cause: i.error
  });
  return i.value.found ? {
    text: i.value.value
  } : {
    absent: "ENOENT"
  };
}
async function wRo(e, r, n = "workspace") {
  if (!W() || e === void 0) return Zc(r);
  if (r === "") return !1;
  let i = await e.hostFiles.stat(V(n, r), {
    follow: !0
  });
  return i.ok && i.value.kind !== "absent";
}
import { normalize as Xe, parse as Qe, resolve as Y, sep as et } from "path";
var O9e = `is on a network drive, has "." or ".." in its path, or couldn't be checked`;
function Sx(e, {
  trustedRoots = []
} = {}) {
  let n = tt(e, trustedRoots),
    {
      absolute: absolute,
      root: root,
      tail: tail
    } = n;
  if (n.dotSegmentInTail) return {
    absolute: absolute,
    suspect: !0
  };
  if (root !== void 0) {
    let p = Y(ke(), root);
    return {
      absolute: absolute,
      suspect: iWt(p, tail)
    };
  }
  let suspect = n.networkShapedUnvouched || fV(absolute);
  return {
    absolute: absolute,
    suspect: suspect
  };
}
function tt(e, r) {
  if (e.trim() === "") return {
    absolute: e,
    root: void 0,
    tail: e,
    dotSegmentInTail: !1,
    networkShapedUnvouched: !0
  };
  let absolute_2 = Y(ke(), e),
    {
      root: root_2,
      tail: tail_2
    } = nt(e, r);
  return {
    absolute: absolute_2,
    root: root_2,
    tail: tail_2,
    dotSegmentInTail: C$(tail_2),
    networkShapedUnvouched: root_2 === void 0 && (Sv(e) || Sv(absolute_2))
  };
}
function rt(e) {
  return [ud(), ...yD(), ...e];
}
function nt(tail_4, r) {
  let n = OSt(tail_4),
    i;
  for (let root_3 of rt(r)) for (let c of [root_3, Xe(root_3)]) {
    let l = OSt(c.replace(/[\\/]+$/, ""));
    if (l === "" || l === ".") continue;
    let tail_3;
    if (n === l) tail_3 = "";else if (n.startsWith(l + et) || n.startsWith(l + "/")) tail_3 = tail_4.slice(tail_4.length - (n.length - l.length));
    if (tail_3 !== void 0 && (i === void 0 || tail_3.length < i.tail.length)) i = {
      root: root_3,
      tail: tail_3
    };
  }
  return i ?? {
    root: void 0,
    tail: tail_4
  };
}
function kK(e) {
  switch (I()) {
    case "windows":
      return gP(OSt(e));
    case "macos":
      return gP(e);
    default:
      return e;
  }
}
function mNt(e) {
  if (e.trim() === "") return;
  return kK(uS(Y(ke(), e), {
    foldCase: !0
  }));
}
function kRo(e) {
  if (I() !== "windows") return;
  let walkRoot = Qe(e).root,
    n = s => sWt(uT(s)),
    i = n(walkRoot);
  if (i === void 0) {
    let s = $Q(walkRoot);
    if (s === null) return "undeterminable";
    i = n(s);
  }
  return i === void 0 ? void 0 : {
    walkRoot: walkRoot,
    ...i
  };
}
function xPr(e) {
  let r = kRo(e);
  if (r === void 0 || r === "undeterminable") return r;
  return {
    walkRoot: r.walkRoot,
    distroDir: r.rest.replace(/[\\/]+$/, "").replace(/[\\/]+/g, "/")
  };
}
function PPr(e, r) {
  return gQn(e, {
    exactDots: !0
  }) ?? mQn(e, {
    exactDots: !0
  }) ?? (r === void 0 ? void 0 : fQn(e, r.walkRoot, r.distroDir));
}
function K2n(e) {
  if (!he(e)) return !1;
  return I() !== "windows" || /^(?:[A-Za-z]:[\\/]|[\\/]{2})/.test(e);
}
function Y2n(e, r) {
  if (!Lf(e)) return e;
  let n = r === void 0 ? nu(e.path) : _hn(e.path, r),
    path_3 = K2n(n) ? M(n) : n;
  return path_3 === e.path ? e : {
    ...e,
    path: path_3
  };
}
function Z(e, r) {
  let n = OPr(e);
  if (n === void 0 || e === void 0 || !Lf(e)) return [];
  if (!(r !== void 0 && r.source === e.source && "path" in r && r.path === e.path) || !K2n(n) || ul(n)) return [];
  return [n];
}
function OPr(e) {
  switch (e?.source) {
    case "directory":
      return e.path;
    case "file":
      return it(C(e.path)) === ".claude-plugin" ? C(C(e.path)) : void 0;
    default:
      return;
  }
}
async function qDs(e, {
  entrySource: entrySource,
  marketplaceLocation: marketplaceLocation,
  pluginPath: pluginPath
}) {
  let s = OPr(e);
  if (s === void 0 || typeof entrySource !== "string" || !K2n(s) || M(marketplaceLocation) !== M(s) || !zy(M(s), M(pluginPath), !0) || [s, pluginPath].some(item => NA(item) || ul(item))) return !1;
  let [c, l] = await Promise.all([v(s).catch(() => {
    return;
  }), v(pluginPath).catch(() => {
    return;
  })]);
  return c !== void 0 && l !== void 0 && zy(c, l, !0);
}
function cke(e, r, n) {
  let i = Se(e, r, n);
  return i === void 0 ? [] : Z(i.marketplaceSource, i.corroboratingSource);
}
function ERo(e, r, n) {
  let {
    absolute: absolute_3,
    suspect: suspect_2
  } = Sx(e, {
    trustedRoots: Z(r, n)
  });
  return suspect_2 ? void 0 : absolute_3;
}
function st(e) {
  return `Marketplace directory refused: its recorded location ${Xs(e)} ${O9e}. ${Ga(P1e["network-location"])}.`;
}
var X2n = /^\.(?:[\\/]+|$)/;
function J2n(e) {
  let r = e.replace(X2n, "");
  return r !== "" && (he(r) || C$(r) || Sv(r) || NA(r));
}
function at(e, r) {
  let n = r.replace(X2n, "");
  if (n === "") return e;
  if (J2n(r) || iWt(e, n)) return;
  return ye(e, n);
}
function lt(e) {
  return `Plugin source path refused: ${Rt(e, 300)} does not stay inside its marketplace directory. Check that the marketplace entry has a plain relative path.`;
}
async function IPr(e, r, {
  marketplaceSource: marketplaceSource,
  corroboratingSource: corroboratingSource,
  storageV5: storageV5,
  localMarketplaceSpace = "workspace"
}) {
  let l = ERo(e, marketplaceSource, corroboratingSource);
  if (l === void 0) return {
    kind: "location-refused"
  };
  let p, error_2;
  try {
    p = (marketplaceSource !== void 0 && Lf(marketplaceSource) ? await kPr(storageV5, l, localMarketplaceSpace) : await w(l)).isDirectory();
  } catch (error) {
    error_2 = error;
  }
  let marketplaceDir = ft(l, marketplaceSource, p);
  if (marketplaceDir === void 0) return {
    kind: "entry-refused",
    marketplaceDir: C(l)
  };
  let entryPath = at(marketplaceDir, r);
  if (p === void 0) {
    let y = k(error_2);
    return y === "ENOENT" || y === "ENOTDIR" ? {
      kind: "location-missing",
      error: error_2,
      marketplaceDir: marketplaceDir,
      entryPath: entryPath
    } : {
      kind: "location-error",
      error: error_2,
      marketplaceDir: marketplaceDir,
      entryPath: entryPath,
      entryRefusedLexically: J2n(r)
    };
  }
  if (entryPath === void 0) return {
    kind: "entry-refused",
    marketplaceDir: marketplaceDir
  };
  let R = await ge(marketplaceDir),
    ee = !1;
  if (!R) {
    for (let y of Z(marketplaceSource, corroboratingSource)) if (Ym(y, marketplaceDir) && !(await ge(y))) {
      ee = !0;
      break;
    }
  }
  if (!ee) {
    if (R) {
      if (!(await ut(marketplaceDir, r))) return {
        kind: "entry-refused",
        marketplaceDir: marketplaceDir,
        cause: "plain-directory-walk"
      };
    } else if (!Ym(marketplaceDir, entryPath) || !(await ct(marketplaceDir, entryPath))) return {
      kind: "entry-refused",
      marketplaceDir: marketplaceDir
    };
  }
  return {
    kind: "ok",
    marketplaceDir: marketplaceDir,
    entryPath: entryPath
  };
}
async function ge(e) {
  if (I() === "windows") return !1;
  if (NA(e)) return !0;
  let r;
  try {
    r = await w(e, {
      bigint: !0
    });
  } catch {
    return !1;
  }
  if (!r.isDirectory()) return !1;
  if (r.ino === 0n) return !0;
  let n;
  try {
    n = await v(e);
  } catch {
    return !0;
  }
  try {
    let i = await w(n, {
      bigint: !0
    });
    return i.ino === 0n || i.dev !== r.dev || i.ino !== r.ino;
  } catch {
    return !0;
  }
}
async function ut(e, r) {
  if (J2n(r)) return !1;
  let n = r.replace(X2n, ""),
    i = e;
  for (let s of n.split("/").filter(Boolean)) {
    i = ye(i, s);
    let c;
    try {
      c = await ot(i);
    } catch (error) {
      let p = k(error);
      if (p === "ENOENT" || p === "ENOTDIR") return !0;
      return t(`Marketplace entry ${Xs(i)} refused: lstat failed (${k(error) ?? Rt(d(error), 160)}) while walking a tree realpath cannot judge`), !1;
    }
    if (!c.isDirectory()) return t(`Marketplace entry ${Xs(i)} refused: ${c.isSymbolicLink() ? "a symlink" : "not a directory"} under a marketplace directory realpath cannot judge; only plain directories are allowed there`), !1;
  }
  return !0;
}
async function ct(e, r) {
  if (I() === "windows") return !0;
  let n = m => (t(`Marketplace entry ${Xs(r)} refused: ${m} (its declared spelling does not provably open inside ${Xs(e)})`), !1),
    i = m => k(m) ?? Rt(d(m), 160),
    s;
  try {
    s = await v(r);
  } catch (error) {
    let g = k(error);
    if (g !== "ENOENT" && g !== "ENOTDIR") return n(`realpath failed (${i(error)})`);
    try {
      await w(r);
    } catch (error) {
      let R = k(error);
      return R === "ENOENT" || R === "ENOTDIR" ? !0 : n(`stat failed (${i(error)})`);
    }
    return n("it exists but realpath cannot resolve it as spelled");
  }
  let c;
  try {
    c = await Promise.all([w(r, {
      bigint: !0
    }), w(s, {
      bigint: !0
    })]);
  } catch (error) {
    return n(`stat failed (${i(error)})`);
  }
  let [l, p] = c;
  if (l.ino === 0n || p.ino === 0n) return n("the filesystem reports no inode number");
  if (l.dev !== p.dev || l.ino !== p.ino) return n(`its spelling opens a different file from the one realpath names (${Xs(s)})`);
  if (!Ym(e, s)) return n(`it opens ${Xs(s)}, outside the marketplace directory`);
  return !0;
}
function U(e) {
  return e === "location-refused" ? `its marketplace's recorded location ${O9e}` : "its marketplace entry path does not stay inside the marketplace directory (an absolute, climbing, network-shaped, backslash-containing or link-traversing entry, an entry of a fetched marketplace that resolves or opens outside its tree \u2014 or a relative entry in a url-catalog marketplace, which has no local directory)";
}
function KDs(e) {
  switch (e.kind) {
    case "ok":
    case "location-missing":
      return e.entryPath === void 0 ? {
        entryPath: void 0,
        reason: U("entry-refused")
      } : {
        entryPath: e.entryPath
      };
    case "location-error":
      return e.entryPath !== void 0 ? {
        entryPath: e.entryPath
      } : e.entryRefusedLexically ? {
        entryPath: void 0,
        reason: U("entry-refused")
      } : {
        entryPath: void 0,
        reason: `its marketplace directory could not be examined (${k(e.error) ?? "unknown error"})`
      };
    case "location-refused":
    case "entry-refused":
      return {
        entryPath: void 0,
        reason: U(e.kind)
      };
  }
}
function A1e(e) {
  switch (e.kind) {
    case "ok":
      return {
        entryPath: e.entryPath
      };
    case "location-missing":
      return {
        entryPath: void 0,
        reason: "its marketplace directory does not exist"
      };
    case "location-error":
      return {
        entryPath: void 0,
        reason: `its marketplace directory could not be examined (${k(e.error) ?? "unknown error"})`
      };
    case "location-refused":
    case "entry-refused":
      return {
        entryPath: void 0,
        reason: U(e.kind)
      };
  }
}
async function OG(e, r, n, i, s, storageV5_2, localMarketplaceSpace_2) {
  return IPr(r, n, {
    ...(Se(e, i, s) ?? {
      marketplaceSource: void 0,
      corroboratingSource: void 0
    }),
    storageV5: storageV5_2,
    localMarketplaceSpace: localMarketplaceSpace_2
  });
}
function Se(e, r, n) {
  let {
    marketplace: marketplace_3
  } = Cn(e);
  if (!marketplace_3) return;
  let corroboratingSource_2 = Object.hasOwn(n, marketplace_3) ? n[marketplace_3]?.source : void 0;
  return {
    marketplaceSource: (r !== void 0 && Object.hasOwn(r, marketplace_3) ? r[marketplace_3]?.source : void 0) ?? corroboratingSource_2,
    corroboratingSource: corroboratingSource_2
  };
}
var dt = /[\\/]marketplace\.json$/i;
function ft(e, r, n) {
  if (n === !0) return e;
  if (r?.source === "url" || r === void 0 && /\.json$/i.test(e)) return n === !1 ? void 0 : e;
  return n === !1 || dt.test(e) ? C(e) : e;
}
function I9e(e, r, n) {
  switch (e.kind) {
    case "location-refused":
      return {
        code: "marketplace_location_refused",
        message: st(r)
      };
    case "location-missing":
      return {
        code: "marketplace_dir_missing",
        message: `Marketplace directory not found at path: ${Xs(r)}`
      };
    case "location-error":
      return {
        code: "marketplace_dir_unreadable",
        message: `Marketplace directory could not be read at path: ${Xs(r)} (${k(e.error) ?? "unknown error"})`
      };
    case "entry-refused":
      return {
        code: "marketplace_entry_path_refused",
        message: lt(n) + (e.cause === "plain-directory-walk" ? pt : "")
      };
  }
}
var pt = " The marketplace directory's own path cannot be resolved reliably on this platform (for example, a backslash in one of its components), so only plain directories are accepted as entries there (no links); move the marketplace (or the plugins directory) to a plain path to lift that.";
function b(e) {
  return e !== void 0 && TNt(e) ? e : null;
}
function gt() {
  return b(a.CLAUDE_CODE_ORGANIZATION_UUID ?? np()?.organizationUuid);
}
function we() {
  return b(np()?.organizationUuid);
}
async function _D(e) {
  let r = gt();
  if (r === null) return null;
  switch (await Kg(e)) {
    case "store":
      return gNt();
    case "none":
      if (Ya().source === "claude.ai") return null;
      return jPr(r, b(a.CLAUDE_CODE_ACCOUNT_UUID) ?? void 0);
    case "env":
    case "fd":
      return jPr(r, b(a.CLAUDE_CODE_ACCOUNT_UUID) ?? void 0);
  }
}
function gNt() {
  let e = np(),
    r = b(a.CLAUDE_CODE_ORGANIZATION_UUID ?? e?.organizationUuid),
    n = b(e?.accountUuid);
  return r === null || n === null ? null : jPr(r, n);
}
function YDs() {
  return Ya().source === "claude.ai" ? gNt() : null;
}
function isn() {
  let e = np();
  return `${a.CLAUDE_CODE_ORGANIZATION_UUID ?? e?.organizationUuid ?? ""}_${e?.accountUuid ?? a.CLAUDE_CODE_ACCOUNT_UUID ?? ""}`;
}
var be = {
  source: "pluginDirectory"
};
function Qf(e) {
  let r = me("policySettings")?.enabledPlugins;
  return [e, qBt(e) ?? e].some(item => W3(r, item) === !1);
}
function bD() {
  let e = me("policySettings");
  if (!e?.strictKnownMarketplaces) return null;
  return e.strictKnownMarketplaces;
}
function Kee() {
  if (_()?.some(r => r.source === "skills-dir")) return !1;
  let e = bD();
  return e === null || e.some(item => item.source === "skills-dir");
}
function asn(e) {
  return `Plugins from ${e}/ are blocked by your organization's managed settings (strictKnownMarketplaces or blockedMarketplaces). Ask your administrator to add {"source":"skills-dir"} to strictKnownMarketplaces, or remove it from blockedMarketplaces.`;
}
function Oj() {
  return me("policySettings")?.disableSideloadFlags === !0;
}
function gO() {
  if (v_() === "unanswered") return !0;
  let e = me("policySettings");
  if (e?.disableCommandPluginSources !== void 0) return e.disableCommandPluginSources === !0;
  return e?.allowManagedHooksOnly === !0;
}
function Q2n() {
  {
    let e = me("policySettings")?.disablePluginDirectory;
    return e !== void 0 && e !== !1;
  }
  return !1;
}
function pb() {
  {
    if (Q2n()) return "managed_setting";
    if (_Nt(be)) return "blocklist";
    if (!zc(be)) return "allowlist";
    let e = nR("allow_plugin_directory_search");
    return e === "org_denied" || e === "latched" ? "policy_limit" : null;
  }
  return null;
}
function AH() {
  let e = pb();
  return e === null ? "" : MRo(e);
}
function Bft(url) {
  let r = (_() ?? []).filter(J),
    n = (bD() ?? []).filter(J);
  if (r.length === 0 && n.length === 0) return !1;
  if (url === void 0) return !0;
  let i = {
      source: "git",
      url: url
    },
    s = _e(i);
  if (hpn(url) || F4(url) || D(url) || s === null || s === "") return !0;
  if (r.some(item => !Oe(item.hostPattern) || X(i, item, {
    blocklistDirection: !0
  }))) return !0;
  let c = /^https:\/\//i.test(url);
  return n.length > 0 && !(c && s !== "" && n.some(item => Ae(s, item.hostPattern)));
}
function jft() {
  return eT() !== "remote" || e1t();
}
function Z2n() {
  return !AK();
}
var eVn = "it is declared by remotely managed settings that this session could not verify with the server, or that have not been approved on this machine yet \u2014 make sure Claude Code can reach your managed-settings server, and approve the managed-settings dialog once in an interactive session (or ask your admin)";
function zOe(e, r) {
  if (v_() === "unanswered") return "organization_unanswered";
  if (!gO()) return null;
  if (e === void 0 || !Z2n()) return "lockdown";
  if (!jft()) return "remote_policy_unconsented";
  let n = me("policySettings")?.extraKnownMarketplaces ?? {};
  if (e.source === "settings" && r !== void 0) return (Object.hasOwn(n, r) ? n[r] : void 0)?.source.source !== "settings" ? "lockdown" : null;
  return Object.values(n).some(item => F(e, item.source)) ? null : "lockdown";
}
function TRo(e, r) {
  return zOe(e, r) !== null;
}
function lsn(e, r = []) {
  let n = r.length > 0 ? `: ${r.map(item => yy(item)).join(", ")}` : "",
    i = v_() === "unanswered" ? "(waiting for your organization's settings)" : "(managed policy) \u2014 ask your admin";
  return `${e} ${O(e, "marketplace")} not updated ${i}${n}`;
}
var ht = "Command-sourced plugins are disabled by your organization's managed settings (disableCommandPluginSources / allowManagedHooksOnly). The plugin was not installed or updated and its command was not run.";
function M9e(e) {
  if (v_() === "unanswered") {
    let organizationAsk = Ne().organizationAsk;
    organizationAsk.isCommandHeld = !0, organizationAsk.isMarketplaceHeld ||= e === "marketplace";
  }
}
function CX() {
  return v_() === "unanswered" ? "Command-sourced plugins aren't running in this session yet. Your organization's settings haven't been read, so it isn't known whether it allows them. The plugin was not installed or updated and its command was not run. They'll run once your organization's settings are read, if it allows them." : ht;
}
var MPr = "disabled by your organization's managed settings (disableSideloadFlags)";
function x1e(e) {
  return `${e.join(", ")} ${e.length === 1 ? "is" : "are"} ${MPr}. Plugins, custom agents, and MCP servers can only be loaded from sources your administrator has approved. Ask your administrator to remove disableSideloadFlags from managed settings, or use an approved marketplace / settings file instead.`;
}
function _() {
  let e = me("policySettings");
  if (!e?.blockedMarketplaces) return null;
  return e.blockedMarketplaces;
}
function GOe() {
  let e = _();
  return bD() !== null || e !== null && e.some(item => item.source !== "skills-dir" && item.source !== "pluginDirectory");
}
function Ij(e) {
  return e === void 0 ? GOe() : !zc(e);
}
function DPr() {
  return me("policySettings")?.pluginTrustMessage;
}
function dsn() {
  return me("policySettings")?.pluginSuggestionMarketplaces ?? [];
}
function csn(e, r) {
  let n = tTe(),
    i = n?.extraKnownMarketplaces?.[e]?.source;
  if (i && F(r, i)) return !0;
  return LQe(n?.strictKnownMarketplaces)?.some(s => Q(r, s)) ?? !1;
}
function CRo(e, r) {
  let n = rr(e);
  return Object.keys(r?.extraKnownMarketplaces ?? {}).some(item => rr(item) === n);
}
function hNt(e, r, n) {
  if (e.source === "claudeai") {
    let p = we();
    return p !== null && e.organizationUuid.toLowerCase() === p.toLowerCase() && (e.scope === "org" || e.scope === "default");
  }
  let i = n ? n.policySettings : tTe(),
    s = n?.declaredUnder,
    c = i?.extraKnownMarketplaces,
    l = n7e(e);
  if (l === null) return !1;
  if (l.source === "npm" && (l.registry === void 0 || !_0e(l.package))) return !1;
  if (l.source === "settings" && l.plugins.some(item => {
    if (typeof item.source !== "object") return !0;
    switch (item.source.source) {
      case "npm":
        return item.source.registry === void 0 || !_0e(item.source.package);
      case "url":
      case "github":
      case "git-subdir":
      case "archive":
        return !1;
      default:
        return !0;
    }
  })) return !1;
  if (c !== void 0 && Object.entries(c).some(([p, m]) => {
    if (s !== void 0 && rr(p) !== rr(s)) return !1;
    let g = Y2n(m.source, r),
      h = n7e(g);
    return h !== null && F(l, h) && xe(l, h);
  })) return !0;
  if (s !== void 0) return !1;
  return LQe(i?.strictKnownMarketplaces)?.some(p => {
    if (p.source === "hostPattern" || p.source === "pathPattern" || p.source === "pluginDirectory") return !1;
    if (l.source === "github" && p.source === "github" && (p.path || void 0) !== (l.path || void 0)) return !1;
    let m = Y2n(p, r),
      g = n7e(m);
    return g !== null && Q(l, g) && xe(l, g);
  }) ?? !1;
}
function xe(e, r) {
  if (e.source !== "npm") return !0;
  if (r.source !== "npm" || e.registry === void 0 || r.registry === void 0) return !1;
  let n = Re(e.registry),
    i = Re(r.registry);
  return n !== null && n === i;
}
function Re(e) {
  let r;
  try {
    r = new URL(e);
  } catch {
    return null;
  }
  if (r.hostname = Ihe(r.hostname), !r.pathname.endsWith("/")) r.pathname = `${r.pathname}/`;
  return r.toString();
}
function RRo(e) {
  let r = LQe(tTe()?.strictKnownMarketplaces);
  if (!r) return !1;
  let n;
  try {
    n = new URL(e.tarballUrl);
  } catch {
    return !1;
  }
  let i = ve(n);
  if (i === null) return !1;
  return r.some(item => item.source === "npm" && item.registry !== void 0 && Ue(item, e.packageName, n, i, "allow"));
}
function usn(e) {
  if (e.source !== "github" && e.source !== "git") return !1;
  if (e.source === "git") {
    if (e.url.includes("://")) {
      let r;
      try {
        r = new URL(e.url).protocol;
      } catch {
        r = null;
      }
      if (r === null || !kt.has(r)) return !1;
    } else if (Cfn(e.url) === null) return !1;
  }
  return j$o(e) && (e.ref || void 0) === void 0 && (e.path || void 0) === void 0;
}
var kt = new Set(["https:", "ssh:", "git+https:", "git+ssh:"]);
function F(e, r) {
  if (e.source !== r.source) return !1;
  switch (e.source) {
    case "url":
      return pme(e.url) === pme(r.url);
    case "github":
      return e.repo.toLowerCase() === r.repo.toLowerCase() && (e.ref || void 0) === (r.ref || void 0) && (e.path || void 0) === (r.path || void 0);
    case "git":
      {
        let n = r.url;
        return (D(e.url) || D(n) ? e.url === n : v$r(e.url) === v$r(n)) && (e.ref || void 0) === (r.ref || void 0) && (e.path || void 0) === (r.path || void 0);
      }
    case "npm":
      return e.package === r.package;
    case "file":
      return e.path === r.path;
    case "directory":
      return e.path === r.path;
    case "settings":
      return e.name === r.name && Nn(e.plugins, r.plugins);
    case "pluginDirectory":
      return !0;
    default:
      return !1;
  }
}
function yNt(e) {
  let r = St(e);
  return r === null ? null : Ihe(r);
}
function St(e) {
  let r = De(e);
  return r !== null && q(r) ? null : r;
}
function q(e) {
  return e.startsWith("[") && e.endsWith("]") && fpn(e.slice(1, -1));
}
function D(e) {
  return A5(e);
}
function De(e) {
  switch (e.source) {
    case "github":
      return ur;
    case "git":
      {
        if (hpn(e.url)) return null;
        return Rde(e.url)?.host ?? null;
      }
    case "url":
      try {
        return new URL(e.url).hostname;
      } catch {
        return null;
      }
    case "claudeai":
      return "claude.ai";
    default:
      return null;
  }
}
function _e(e) {
  if (e.source === "git" && !e.url.includes("://")) {
    let r = Cfn(e.url);
    return r ? Ihe(r.host) : null;
  }
  return yNt(e);
}
function X(e, r, n) {
  let i = n?.blocklistDirection ? yNt(e) : _e(e);
  if (!i) return !1;
  let s = n?.blocklistDirection && i === S$r ? [i, ur] : [i];
  try {
    let regExp = new RegExp(r.hostPattern);
    return s.some(item => regExp.test(item));
  } catch {
    return t(`Invalid hostPattern regex in policy settings: ${r.hostPattern}`, {
      level: "error"
    }), !1;
  }
}
function Oe(e) {
  try {
    return new RegExp(e), !0;
  } catch {
    return t(`Invalid hostPattern regex in policy settings: ${e}`, {
      level: "error"
    }), !1;
  }
}
function Ae(e, r) {
  if (!Oe(r)) return !1;
  try {
    return new RegExp(`^(?:${r})$`).test(e);
  } catch {
    return !1;
  }
}
function Ie(e, r) {
  if (e.source !== "file" && e.source !== "directory") return !1;
  try {
    return new RegExp(r.pathPattern).test(e.path);
  } catch {
    return t(`Invalid pathPattern regex in policy settings strictKnownMarketplaces: ${r.pathPattern}`, {
      level: "error"
    }), !1;
  }
}
function ARo() {
  let e = bD();
  if (!e) return [];
  return e.filter(J).map(item => item.hostPattern);
}
function J(e) {
  return e.source === "hostPattern";
}
function Ee(e) {
  let r = w$r(e);
  if (r !== null && r.includes("*")) return t(`Invalid owner-wildcard url in policy settings blockedMarketplaces: ${e} (wildcards are only supported in github-form entries, as "<owner>/*"); entry does not match github.com sources`, {
    level: "error"
  }), null;
  return r;
}
function pme(e) {
  try {
    let r = new URL(e);
    return r.hostname = Ihe(r.hostname), r.toString();
  } catch {
    return e;
  }
}
function Pt(e, r) {
  let n = e.split("/");
  if (n.length !== 2) return !1;
  let [i, s] = n;
  if (i === void 0 || s === void 0 || !L8n(i) || !L8n(s)) return !1;
  return i === r;
}
function L(e, r) {
  let n = Y$o(r),
    i = N8n(e);
  if (i === null) {
    if (e.includes("*")) t(`Invalid owner-wildcard repo in policy settings blockedMarketplaces: ${e} (only "<owner>/*" is supported); entry only matches a literally identical repo string`, {
      level: "error"
    });
    return n === e || r === e;
  }
  let s = n.split("/");
  if (s.length !== 2) return !1;
  let [c, l] = s;
  if (c === void 0 || l === void 0 || !L8n(c) || !K$o.test(l)) return !1;
  return c.toLowerCase() === i.toLowerCase();
}
function Me(e) {
  if (e.startsWith("/") || e.startsWith("\\") || /^[A-Za-z]:/.test(e)) return !1;
  return !e.split(/[\\/]/).some(item => item === "..");
}
function S(e, r) {
  if (!e) return !0;
  return e === (r || void 0);
}
function wt(e, r) {
  if (e.source === r.source) switch (e.source) {
    case "github":
      {
        let n = r;
        if (!L(n.repo, e.repo)) return !1;
        return S(n.ref, e.ref) && S(n.path, e.path);
      }
    case "git":
      {
        let n = r,
          i = Ee(n.url),
          s = i === null ? null : w$r(e.url);
        if (!(i !== null && s !== null ? L(i, s) : ypn(e.url) === ypn(n.url))) return !1;
        return S(n.ref, e.ref) && S(n.path, e.path);
      }
    case "url":
      return pme(e.url) === pme(r.url);
    case "npm":
      return e.package === r.package;
    case "file":
      return e.path === r.path;
    case "directory":
      return e.path === r.path;
    case "settings":
      return e.name === r.name;
    case "pluginDirectory":
      return !0;
    default:
      return !1;
  }
  if (e.source === "git" && r.source === "github") {
    let n = w$r(e.url);
    if (n !== null && L(r.repo, n)) return S(r.ref, e.ref) && S(r.path, e.path);
  }
  if (e.source === "github" && r.source === "git") {
    let n = Ee(r.url);
    if (n !== null && L(n, e.repo)) return S(r.ref, e.ref) && S(r.path, e.path);
  }
  if (e.source === "git" && r.source === "url") {
    if (!e.url.includes("://")) return !1;
    let n = {
      stripDotGit: !0
    };
    return ypn(e.url, n) === ypn(r.url, n);
  }
  return !1;
}
function _Nt(e) {
  let r = _();
  if (r === null) return !1;
  return r.some(item => {
    if (item.source === "hostPattern") return X(e, item, {
      blocklistDirection: !0
    });
    if (item.source === "pathPattern") return Ie(e, item);
    return wt(e, item);
  });
}
function zc(e) {
  if (e.source === "git" && (hpn(e.url) || D(e.url)) && GOe()) return !1;
  let r = De(e);
  if (r !== null && q(r) && GOe()) return !1;
  if (e.source === "pluginDirectory" && Q2n()) return !1;
  if (_Nt(e)) return !1;
  let n = bD();
  if (n === null) return !0;
  return n.some(item => Q(e, item));
}
function tVn(e) {
  let r = _(),
    n = bD();
  if (r === null && n === null) return null;
  let i;
  try {
    i = new URL(e.tarballUrl);
  } catch {
    i = null;
  }
  let s = yy(e.packageName);
  if (i === null) return `${s} cannot be used: the registry answered with a download URL that could not be parsed, and your organization restricts plugin sources`;
  let c = Ihe(i.hostname),
    l = i.port ? `${c}:${i.port}` : c,
    p = ve(i);
  if (p === null) return `${s} cannot be used: the registry answered with a download URL whose path climbs or cannot be decoded, and your organization restricts plugin sources`;
  if (q(i.hostname) && GOe()) return `${s} cannot be used: it downloads from ${l}, an IPv6 spelling of an IPv4 address, which your organization's plugin source rules cannot check. Ask whoever runs the registry to serve it from a hostname or an IPv4 address.`;
  let m = g => h => {
    switch (h.source) {
      case "npm":
        return Ue(h, e.packageName, i, p, g);
      case "hostPattern":
        try {
          return g === "block" ? new RegExp(h.hostPattern).test(c) : Ae(c, h.hostPattern) && i.protocol === "https:";
        } catch {
          return t(`Invalid hostPattern regex in policy settings: ${h.hostPattern}`, {
            level: "error"
          }), g === "block";
        }
      default:
        return !1;
    }
  };
  if (r?.some(m("block"))) return `${s} cannot be used: it resolves to ${l}, which your organization's managed settings block (blockedMarketplaces)`;
  if (n !== null && !n.some(m("allow"))) return `${s} cannot be used: it resolves to ${l}, which is not among the plugin sources your organization allows (strictKnownMarketplaces). Ask your administrator to add an npm or hostPattern entry for it.`;
  return null;
}
function Ue(e, r, n, i, s) {
  return bt(e.package, r) && (e.registry === void 0 || (xt(n, i, e.registry) ?? s === "block"));
}
function bt(e, r) {
  if (e.endsWith("/*") && e.startsWith("@")) return r.startsWith(e.slice(0, -1));
  return e === r;
}
function ve(e) {
  let r;
  try {
    r = decodeURIComponent(e.pathname);
  } catch {
    return null;
  }
  if (r.includes("\\") || /(^|\/)\.\.?(\/|$)/.test(r)) return null;
  return r;
}
function xt(e, r, n) {
  let i;
  try {
    i = new URL(n);
  } catch {
    return null;
  }
  if (e.protocol !== i.protocol || Ihe(e.hostname) !== Ihe(i.hostname) || (e.port || Ce(e.protocol)) !== (i.port || Ce(i.protocol))) return !1;
  let s;
  try {
    s = decodeURIComponent(i.pathname);
  } catch {
    return null;
  }
  if (!s.endsWith("/")) s = `${s}/`;
  return r.startsWith(s);
}
function Ce(e) {
  return e === "https:" ? "443" : e === "http:" ? "80" : "";
}
function Q(e, r) {
  if (e.source === "git" && (F4(e.url) || D(e.url))) return !1;
  if (r.source === "hostPattern") {
    if ((e.source === "github" || e.source === "git") && e.path && !Me(e.path)) return !1;
    if (e.source === "claudeai" && e.scope !== "org" && e.scope !== "default") return !1;
    return X(e, r);
  }
  if (r.source === "pathPattern") return Ie(e, r);
  if (e.source === "github" && r.source === "github") {
    let n = N8n(r.repo);
    if (n === null && r.repo.includes("*")) t(`Invalid owner-wildcard repo in policy settings strictKnownMarketplaces: ${r.repo} (only "<owner>/*" is supported); entry only matches a literally identical repo string`, {
      level: "error"
    });
    if (n !== null) return Pt(e.repo, n) && (r.ref || void 0) === (e.ref || void 0) && (r.path ? r.path === (e.path || void 0) : !e.path || Me(e.path));
  }
  if (r.source === "skills-dir") return !1;
  return F(e, r);
}
export { zy, Qon, kPr, cNt, wRo, Hft, EPr, Zon, C1e, TPr, UDs, Pj, _m, $ft, BU, y3, BDs, uNt, jDs, esn, CPr, RPr, tsn, WDs, j2n, pNt, LN, nsn, Uft, rsn, APr, ud, yD, fNt, bae, P9e, osn, vRo, W2n, zDs, z2n, GDs, G2n, ag, R1e, V2n, ssn, VDs, q2n, O9e, Sx, kK, mNt, kRo, xPr, PPr, K2n, Y2n, OPr, qDs, cke, ERo, X2n, J2n, IPr, KDs, A1e, OG, I9e, _D, gNt, YDs, isn, Qf, bD, Kee, asn, Oj, gO, Q2n, pb, AH, Bft, jft, Z2n, eVn, zOe, TRo, lsn, M9e, CX, MPr, x1e, GOe, Ij, DPr, dsn, csn, CRo, hNt, RRo, usn, yNt, ARo, pme, _Nt, zc, tVn };