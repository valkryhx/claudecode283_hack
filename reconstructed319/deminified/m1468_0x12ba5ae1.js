// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { b, f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { We, k } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { or, Oc, Ba, ad, Ks } from "B:/~BUN/root/chunk-h4acfc9y.js";
import { Ue } from "B:/~BUN/root/chunk-eev762xg.js";
import { Ee, mo, q, wY, Gl } from "B:/~BUN/root/chunk-game8aqv.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { t, _, xN, Mjt, io, ie } from "B:/~BUN/root/chunk-2pp12te6.js";
import { P, nf, tt, Dt } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { Nn } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { mt, ks } from "B:/~BUN/root/chunk-d10hhz4p.js";
import { ir, yi as sources_2, $o, Kt, hf } from "B:/~BUN/root/chunk-6n5g80b8.js";
import { ate, get } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { Cp } from "B:/~BUN/root/chunk-5xx1vfdh.js";
import { Ol, xm, Pi, di, Un, Cc, wT } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { dS, dqe } from "B:/~BUN/root/chunk-44q965xg.js";
import { un, hT, Jg, be, Ga, mh } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { yz, o4 } from "B:/~BUN/root/chunk-psjm1gcn.js";
import { t0t } from "B:/~BUN/root/chunk-hjds4dtx.js";
import { ur, fO } from "B:/~BUN/root/chunk-y5gyn2hc.js";
import { Z2 } from "B:/~BUN/root/chunk-esnm3r09.js";
import { mE, ltn } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { M5e, hcr, meo as createFilter_2, nRn, BPt, kje, aos, los, mro, sq, REe, gW } from "B:/~BUN/root/chunk-27h4st9h.js";
import { Rce } from "B:/~BUN/root/chunk-vke7wtay.js";
import { X6o, qdi, rRt, nIe, onr, Z6o } from "B:/~BUN/root/chunk-cs69tdjz.js";
import { qY, nve } from "B:/~BUN/root/chunk-hfrg92x0.js";
import { uat, Qhe, hwn, Ule, zBe, fat, gwn, GBe, oRt } from "B:/~BUN/root/chunk-wgc548g7.js";
import { u$ } from "B:/~BUN/root/chunk-qen8s2b7.js";
import { sRt } from "B:/~BUN/root/chunk-rhxhxyfh.js";
import { D } from "B:/~BUN/root/chunk-8mqsat26.js";
import { nt } from "B:/~BUN/root/chunk-tq5dzbq9.js";
import { en } from "B:/~BUN/root/chunk-mdq0dxn3.js";
import { U, L } from "B:/~BUN/root/chunk-5ha2avah.js";
import { lstat as Oe, readdir as De, readlink as Pn, realpath as Ln, stat as Ne } from "fs/promises";
import { dirname as vt, extname as de, join as re, posix as ne, relative as K, resolve as En, sep as W, win32 as ge } from "path";
import { lstat as tn, open as nn, realpath as rn } from "fs/promises";
import { isAbsolute as on, join as sn, relative as an, sep as ln } from "path";
function Qe(e, n = qY) {
  if (e.isSymbolicLink()) return "symlink";
  if (!e.isFile()) return "not_regular_file";
  if (e.nlink > 1) return "hard_link";
  if (e.size > n) return "too_large";
  return null;
}
function dn(e) {
  return e === "" || e === ".." || e.startsWith(`..${ln}`) || on(e);
}
async function cn(e, n) {
  let r = Buffer.allocUnsafe(n),
    o = 0;
  while (o < n) {
    let {
      bytesRead: bytesRead
    } = await e.read(r, o, n - o, o);
    if (bytesRead === 0) break;
    o += bytesRead;
  }
  return r.subarray(0, o);
}
async function et(e, n, path) {
  let content = await cn(e, Number(n.size));
  if (BigInt(content.length) < n.size) return t(`working file ${path}: ${content.length} of the ${n.size} bytes that its stat promised came, with no error; skipped as changed`), {
    kind: "skip",
    skipped: {
      path: path,
      reason: "changed"
    }
  };
  return {
    kind: "read",
    content: content,
    mode: Number(n.mode) & 511,
    dev: n.dev,
    ino: n.ino,
    mtimeMs: Number(n.mtimeNs) / 1e6,
    ctimeMs: Number(n.ctimeNs) / 1e6
  };
}
async function rt(e, n, path_2, o = null, i = qY) {
  try {
    if (o !== null) return await fn(o, path_2, i);
    let s = sn(e, path_2),
      u = await tn(s, {
        bigint: !0
      }),
      reason = Qe(u, i);
    if (reason !== null) return {
      kind: "skip",
      skipped: {
        path: path_2,
        reason: reason
      }
    };
    if (Oc(s)) return {
      kind: "skip",
      skipped: {
        path: path_2,
        reason: "unreadable"
      }
    };
    if (dn(an(n, await rn(s)))) return {
      kind: "skip",
      skipped: {
        path: path_2,
        reason: "outside_root"
      }
    };
    let c = await nn(s, Cc());
    try {
      let m = await c.stat({
        bigint: !0
      });
      if (m.dev !== u.dev || m.ino !== u.ino) return {
        kind: "skip",
        skipped: {
          path: path_2,
          reason: "changed"
        }
      };
      if (m.size > i) return {
        kind: "skip",
        skipped: {
          path: path_2,
          reason: "too_large"
        }
      };
      return await et(c, m, path_2);
    } finally {
      await c.close();
    }
  } catch (error) {
    let errnoCode = k(error),
      reason_2 = errnoCode === "ELOOP" || errnoCode === "EMLINK" || errnoCode === "WORKING_PARENT_NOT_DIRECTORY" ? "symlink" : "unreadable";
    return {
      kind: "skip",
      skipped: {
        path: path_2,
        reason: reason_2
      },
      ...(reason_2 === "unreadable" && errnoCode !== void 0 && {
        errnoCode: errnoCode
      })
    };
  }
}
async function fn(e, path_3, r) {
  let o = await e.open(path_3, Cc());
  try {
    let i = await o.stat({
        bigint: !0
      }),
      reason_3 = Qe(i, r);
    if (reason_3 !== null) return {
      kind: "skip",
      skipped: {
        path: path_3,
        reason: reason_3
      }
    };
    return await et(o, i, path_3);
  } finally {
    await o.close();
  }
}
var ve = /(^|[\s\][])@(?=((?:[^\s\\]|\\ )+))/g;
function He(e, n = oe, r) {
  let o = e.replace(/\r\n?/g, `
`),
    i = r === void 0 ? n : u => {
      let d = n(u);
      if (!d) r.push(u);
      return d;
    },
    s = at(o, M5e(o), lt, i);
  return Fe(s, n) ? te(s) : s;
}
var oe = () => !1;
function mn(e, n) {
  if (e.type === "code" || e.type === "codespan" || e.type === "escape") return e.raw;
  if (e.type === "html") return pn(e.raw, n);
  let r = [...(e.tokens ?? []), ...(e.items ?? [])];
  if (r.length === 0) return e.type === "text" ? ot(e.raw, n) : e.raw;
  let o = at(e.raw, r, i => i, n);
  return e.type === "text" ? ot(o, n) : o;
}
function at(e, n, r, o) {
  let i = "",
    s = 0;
  for (let u of n) {
    let d = e.indexOf(u.raw, s);
    if (d === -1) return i + lt(e.slice(s));
    i += r(e.slice(s, d)) + mn(u, o), s = d + u.raw.length;
  }
  return i + r(e.slice(s));
}
function ot(e, n) {
  return e.replace(ve, (r, o, i) => n(me(i)) ? r : `${o}\\@`);
}
function me(e) {
  return tt(e, "#").replaceAll("\\ ", " ");
}
function pn(e, n) {
  let r = e.trimStart();
  if (!(r.startsWith("<!--") && r.includes("-->"))) return e;
  let o = [],
    i = "",
    rawStart = 0;
  for (let d of e.matchAll(/<!--[\s\S]*?-->/g)) o.push({
    rawStart: rawStart,
    residueStart: i.length
  }), i += e.slice(rawStart, d.index), rawStart = d.index + d[0].length;
  return o.push({
    rawStart: rawStart,
    residueStart: i.length
  }), i += e.slice(rawStart), [...i.matchAll(ve)].filter(item => !n(me(item[2] ?? ""))).map(item => {
    let c = item.index + (item[1] ?? "").length,
      {
        rawStart: rawStart_2,
        residueStart: residueStart
      } = o.findLast(y => y.residueStart <= c) ?? {
        rawStart: 0,
        residueStart: 0
      };
    return rawStart_2 + (c - residueStart);
  }).reduceRight((acc, item) => `${acc.slice(0, item)}\\${acc.slice(item)}`, e);
}
function lt(e) {
  let n = null;
  return e.split(`
`).map(item => {
    let o = /^[\s>]*(`{3,}|~{3,})/.exec(item)?.[1] ?? null;
    if (n === null) {
      if (o === null) return gn(item);
      return n = o, item;
    }
    if (o !== null && o[0] === n[0] && o.length >= n.length && /^[\s>]*[`~]+\s*$/.test(item)) n = null;
    return item;
  }).join(`
`);
}
function gn(e) {
  return e.replace(/@/g, (n, r) => Pe(e, r) || /[\p{L}\p{N}]/u.test(e[r - 1] ?? "") ? n : "\\@");
}
function ut(e) {
  return Object.keys(M5e(e).links).length > 0;
}
function te(e) {
  return e.replace(/@/g, (n, r) => Pe(e, r) ? n : "\\@");
}
function Pe(e, n) {
  let r = 0;
  while (e[n - 1 - r] === "\\") r++;
  return r % 2 === 1;
}
var we = {
  vettable: !1
};
function Le(e, n) {
  let r = M5e(n),
    i = [...L(L([n, e]).flatMap(item => [item, item.replace(/\\([[\]])/g, "$1")])).map(item => it(item, "as_loader")), ...hn(r).map(item => it(item, "every_at"))],
    spellings = L([...ct(r), ...i.flatMap(item => item.vettable ? item.spellings : [])]);
  return i.every(item => item.vettable) && spellings.length <= Sn ? {
    vettable: !0,
    spellings: spellings
  } : we;
}
function hn(e) {
  let n = r => r.flatMap(item => {
    if (item.type === "code" || item.type === "codespan") return [];
    if (item.type === "html") {
      let i = item.raw.trimStart();
      return i.startsWith("<!--") && i.includes("-->") ? [item.raw.replace(/<!--[\s\S]*?-->/g, "")] : [];
    }
    return n([...(item.tokens ?? []), ...(item.items ?? [])]);
  });
  return n(e);
}
var dt = 4096,
  yn = 64,
  Sn = 4096,
  _n = 1048576,
  kn = /@(?!@)(?=[^\s\\]|\\ )/g,
  regExp = new RegExp(String.raw`(?:[^\s\\]|\\ ){1,${dt + 1}}`, "y"),
  Re = /[\p{L}\p{N}]/u,
  wn = /[*_[\]!<`]/g;
function it(e, n) {
  let r = [],
    o = 0,
    regExp_2 = new RegExp(regExp);
  for (let s of e.matchAll(kn)) {
    if (n === "as_loader" && (Re.test(e[s.index - 1] ?? "") || Pe(e, s.index))) continue;
    regExp_2.lastIndex = s.index + 1;
    let run = regExp_2.exec(e)?.[0] ?? "";
    if (o += run.length, run.length > dt || o > _n) return we;
    let closers = Rn(run);
    if (closers.length > yn) return we;
    r.push({
      run: run,
      closers: closers
    });
  }
  return {
    vettable: !0,
    spellings: r.flatMap(({
      run: run_2,
      closers: closers_2
    }) => L([run_2, ...closers_2.map(item => run_2.slice(0, item))]).flatMap(item => {
      let c = me(item);
      return c === "" || c.startsWith("@") ? [] : [c];
    }))
  };
}
function Rn(e) {
  return [...e.matchAll(wn)].filter(item => item.index > 0 && !vn(e, item)).map(item => item.index);
}
function vn(e, n) {
  return n[0] === "_" && Re.test(e[n.index - 1] ?? "") && Re.test(e[n.index + 1] ?? "");
}
function Fe(e, n = oe) {
  return Te(e).some(item => !n(item));
}
function Te(e) {
  return ct(M5e(e));
}
function ct(e) {
  let n = r => r.flatMap(item => {
    if (item.type === "code" || item.type === "codespan") return [];
    if (item.type === "html") {
      let i = item.raw.trimStart();
      return i.startsWith("<!--") && i.includes("-->") ? st(item.raw.replace(/<!--[\s\S]*?-->/g, "")) : [];
    }
    return [...(item.type === "text" ? st(item.text ?? item.raw) : []), ...n([...(item.tokens ?? []), ...(item.items ?? [])])];
  });
  return n(e);
}
function st(e) {
  return [...e.matchAll(ve)].flatMap(item => {
    let r = me(item[2] ?? "");
    return r.startsWith("./") || r.startsWith("~/") || r.startsWith("/") && r !== "/" || !r.startsWith("@") && !/^[#%^&*()]+/.test(r) && /^[a-zA-Z0-9._-]/.test(r) ? [r] : [];
  });
}
function Ie(e) {
  let o = M5e(`${e}

<!-- ccr-home-probe -->
`).findLast(i => i.type !== "space");
  return !(o?.type === "html" && o.raw.trim() === "<!-- ccr-home-probe -->");
}
function ft(e) {
  return `

<!-- inlined import: ${encodeURI(e)} -->

`;
}
import { join as pt } from "path";
var gt = 4096,
  includeExternal = !0;
async function ht(e, n) {
  if (q()) return t("home inventory: memory files not read in a diskless session; nothing is sent"), null;
  let r = {
      reads: 0
    },
    o = await Hn(e, r, n);
  if (o === null) return null;
  let i = new Map();
  for (let s = o.pop(); s !== void 0; s = o.pop()) {
    let u = `${s.type}\x00${Cp(s.path)}`;
    if (i.has(u)) continue;
    if (n?.aborted) return null;
    i.set(u, s);
    let d = await sq(s.path, s.type, new Set(), includeExternal, mro - 2);
    if (r.reads += d.length, r.reads > gt) return null;
    o.push(...d.filter(item => item.path !== s.path));
  }
  return [...i.values()];
}
async function Hn(e, n, r) {
  let o = (d, c) => () => sq(d, c, new Set(), includeExternal, c === "User" ? 0 : mro - 1),
    i = (rulesDir, type) => async () => [...(await REe({
      rulesDir: rulesDir,
      type: type,
      processedPaths: new Set(),
      includeExternal: includeExternal,
      conditionalRule: !1
    })), ...(await REe({
      rulesDir: rulesDir,
      type: type,
      processedPaths: new Set(),
      includeExternal: includeExternal,
      conditionalRule: !0
    }))],
    s = [o(ate("Managed"), "Managed"), i(get(), "Managed"), o(pt(e, Ule), "User"), i(pt(e, zBe), "User")],
    u = [];
  for (let d of s) {
    if (r?.aborted) return null;
    let c = await d();
    if (n.reads += c.length, n.reads > gt) return null;
    u.push(...c);
  }
  return u;
}
var se = ".md",
  Fn = 50000,
  Ht = W === ge.sep ? ge : ne,
  Tn = W === ge.sep ? /[\\/]+/ : /\/+/;
function ce(e, n) {
  return (n === "/" ? e : e.split(n).join("/")).normalize("NFC");
}
function j(e, n = Ht) {
  return e === ".." || e.startsWith(`..${n.sep}`) || n.isAbsolute(e);
}
function In(e, n, r = Ht) {
  let o = r.relative(e, n);
  if (r.isAbsolute(o)) return null;
  let i = r.resolve(e, o),
    s = r.resolve(n);
  return (r === ge ? i.toLowerCase() === s.toLowerCase() : i === s) ? o : null;
}
async function G(e) {
  if (Oc(e)) throw Error("realpath would misread a backslash in the path");
  return Ln(e);
}
function yt(resolvedPath) {
  return Oc(resolvedPath) ? {
    resolvedPath: resolvedPath,
    isSymlink: !1,
    isCanonical: !1
  } : io(ie(), resolvedPath);
}
var xn = 4096;
async function $e(e, n, r, o) {
  let realPath;
  try {
    realPath = await G(n);
  } catch {
    return "unresolvable";
  }
  let nativeRel = K(e.realConfigHome, realPath);
  if (nativeRel === "" || j(nativeRel)) return "outside";
  let rel = ce(nativeRel, W);
  return {
    realPath: realPath,
    nativeRel: nativeRel,
    rel: rel,
    lexicalRel: r ?? rel,
    rawRels: L([Pt(nativeRel), ...(o === null ? [] : [o])])
  };
}
async function An(e, n) {
  try {
    let r = await G(n);
    return ye(e, r) || !j(K(e.realConfigHome, r));
  } catch {
    return !0;
  }
}
function ye(e, n) {
  return !j(K(n, e.realConfigHome));
}
function Pt(e) {
  return W === "/" ? e : e.split(W).join("/");
}
function Lt(e, n) {
  let r = [e.configHome, e.realConfigHome].map(item => K(item, n)).find(item => item !== "" && !j(item));
  return r === void 0 ? null : {
    rel: ce(r, W),
    raw: Pt(r)
  };
}
function Ke(e) {
  let n = Ol(tt(e, "/"));
  return nf(e) && e.includes("/") && de(e).toLowerCase() === se && !nve(e) && !Cn.test(e) && !hcr.has(n) && !n.startsWith("agent-memory") && !Mn(e) && !Et(e);
}
function Et(e) {
  let n = Ol(tt(e, "/"));
  return n === Ol(zBe) || n === Ol(fat);
}
function Mn(e) {
  let [n, r] = e.split("/");
  return Ol(n ?? "") === "skills" && Ol(r ?? "") === Z2;
}
var Cn = /~\d/,
  Bn = 32;
async function On(e) {
  let n = e,
    r = new Set();
  for (let o = 0; o < Bn; o += 1) {
    if (r.has(n)) return !1;
    r.add(n);
    let i;
    try {
      i = await Pn(n);
    } catch (error) {
      return St(error);
    }
    if (i.includes("\uFFFD")) throw Error("link body is not valid UTF-8");
    let s;
    try {
      s = En(await G(vt(n)), i);
    } catch (error) {
      if (k(error) === "ENAMETOOLONG") throw error;
      return St(error);
    }
    if (Kn(i)) throw Error("link body climbs out of a directory it entered");
    if (Ks(i) || xN(s)) return !0;
    try {
      if (!(await Oe(s)).isSymbolicLink()) return !1;
    } catch (error) {
      if (!O(error) || k(error) === "ENAMETOOLONG" && !Dn(i)) throw error;
      return !1;
    }
    n = s;
  }
  throw Error("link chain too long to vet");
}
function St(e) {
  if (O(e) || k(e) === "EINVAL") return !0;
  throw e;
}
function O(e) {
  let n = k(e);
  return n === "ENOENT" || n === "ENOTDIR" || n === "ELOOP" || n === "ENAMETOOLONG";
}
function Dn(e) {
  return e.split(/[\\/]/).some(item => [...item].length > 255);
}
async function Ft(e) {
  try {
    return await Ne(e), !1;
  } catch (error) {
    return O(error);
  }
}
async function $n(e) {
  try {
    return !(await Ne(e)).isDirectory();
  } catch (error) {
    return O(error);
  }
}
function Kn(e) {
  let n = !1;
  for (let r of e.split(Tn)) if (r === "..") {
    if (n) return !0;
  } else if (r !== "" && r !== ".") n = !0;
  return !1;
}
var ue = {
  ok: !1,
  reason: "aborted"
};
async function Tt({
  configHome: configHome,
  isUserSettingsFileSendable: isUserSettingsFileSendable,
  readRules: readRules,
  createFilter: createFilter,
  signal: signal,
  aliasDirectories: s = xn,
  settingsToCloud = yz
}) {
  if (q()) return {
    ok: !1,
    reason: "diskless"
  };
  if (!(await settingsToCloud().catch(() => !1))) return {
    ok: !1,
    reason: "flag_off"
  };
  try {
    if (!isUserSettingsFileSendable || !readRules.complete) return xe({
      rulesUnreadable: !0
    });
    if (!Kt("userSettings")) return xe({
      rulesUnreadable: !1
    });
    let d;
    try {
      d = await G(configHome);
    } catch (error) {
      if (O(error) && (await Ft(configHome))) return xe({
        rulesUnreadable: !1
      });
      return {
        ok: !1,
        reason: "alias_unreadable"
      };
    }
    let c = {
      configHome: configHome,
      realConfigHome: d,
      aliasBudget: {
        left: s
      },
      giveUp: null,
      topLevelLinks: []
    };
    c.topLevelLinks = await Gn(c);
    let m = createFilter(configHome, {
        realRoot: d,
        readRules: readRules
      }),
      p = {
        held: new Map()
      },
      y = new Set(),
      S = new Set(),
      H = new Map(),
      E = new Map(),
      F = fO() ? {
        files: [],
        leftBehind: []
      } : await jn(c);
    if (c.giveUp === null) {
      let v = await ht(configHome, signal);
      if (u$(signal)) return ue;
      if (v === null) return {
        ok: !1,
        reason: "too_many_links"
      };
      for (let T of v) {
        if (u$(signal)) return ue;
        await ze(c, m, T, E);
      }
    }
    let x = await Vn(c, m, F.files, p, y, S, H, E, signal);
    if (x === null) return ue;
    let I = ur("outputStyles") ? {
        files: [],
        leftBehind: []
      } : await xt(c, fat),
      h = await qn(c, m, I.files, p, y, S, E);
    if (c.giveUp !== null) return {
      ok: !1,
      reason: c.giveUp
    };
    let g = [...p.held.values()],
      C = new Set(),
      w = new Map();
    for (let v of [...g.filter(item => item.kind === "output_style"), ...g.filter(item => item.kind !== "output_style")]) {
      if (u$(signal)) return ue;
      let T = await Zn(c, m, v, E, C, S);
      if (T.entry === null) C.add(v.location.realPath);
      w.set(v, T);
    }
    let R = g.flatMap(item => w.get(item) ?? []),
      {
        kept: kept,
        droppedOverCap: droppedOverCap
      } = qdi(R.flatMap(({
        entry: entry,
        foldedIncludes: foldedIncludes
      }) => entry === null ? [] : [{
        content: entry.content,
        entry: entry,
        foldedIncludes: foldedIncludes
      }]).toSorted((v, T) => Wn(v.entry, T.entry))),
      N = [...H].filter(([v]) => !y.has(v) && !S.has(v)).map(([v, T]) => E.get(v) ?? T),
      leftBehind = [...F.leftBehind, ...x, ...N, ...I.leftBehind, ...h, ...R.flatMap(item => item.leftBehind), ...droppedOverCap.flatMap(({
        entry: entry_2,
        foldedIncludes: foldedIncludes_2
      }) => [{
        path: entry_2.path,
        reason: "over_cap"
      }, ...foldedIncludes_2.map(le => ({
        path: le,
        reason: "include_not_sent"
      }))])],
      entries = kept.map(({
        entry: entry_3
      }) => entry_3);
    return {
      ok: !0,
      inventory: {
        entries: entries,
        summary: It(entries, leftBehind),
        leftBehind: leftBehind
      }
    };
  } catch (error) {
    if (u$(signal)) return ue;
    return t(`home inventory: gave the run up \u2014 ${error instanceof Error ? error.message : String(error)}`), {
      ok: !1,
      reason: "alias_unreadable"
    };
  }
}
function xe({
  rulesUnreadable: rulesUnreadable
}) {
  return {
    ok: !0,
    inventory: {
      entries: [],
      summary: {
        ...It([], []),
        rulesUnreadable: rulesUnreadable
      },
      leftBehind: []
    }
  };
}
function It(e, n) {
  return {
    withheldSensitive: X(n, "sensitive"),
    withheldReadDenied: X(n, "read_denied"),
    rulesUnreadable: !1,
    includesNotSent: X(n, "include_not_sent"),
    symlinksNotSent: X(n, "symlink_not_sent"),
    notDestinations: X(n, "not_destination"),
    unreadable: X(n, "unreadable"),
    overCap: X(n, "over_cap"),
    undefusable: X(n, "undefusable"),
    inlinedImports: e.reduce((acc, item) => acc + item.folded.length, 0),
    defusedImports: e.reduce((acc, item) => acc + item.defused, 0)
  };
}
function X(e, n) {
  return U(e, r => r.reason === n);
}
var _t = {
  claude_md: 0,
  rule: 1,
  output_style: 2
};
function Wn(e, n) {
  return _t[e.kind] - _t[n.kind] || e.content.length - n.content.length || (e.path < n.path ? -1 : e.path > n.path ? 1 : 0);
}
async function jn(e) {
  let path_4 = re(e.configHome, Ule),
    r = await At(e, path_4),
    o = await xt(e, zBe);
  if (r === null) return o;
  let i = r.isSymlink ? await fe(e, path_4) : void 0;
  if (i?.isDirectory() === !0 && (await An(e, path_4))) e.giveUp ??= "alias_unreadable";
  if (i === null || i !== void 0 && !i.isFile()) return {
    files: o.files,
    leftBehind: [{
      path: Ule,
      reason: "symlink_not_sent"
    }, ...o.leftBehind]
  };
  return {
    files: [{
      path: path_4,
      lexicalRel: Ule,
      rawLexicalRel: Ule,
      viaSymlink: r.isSymlink,
      aliasOnly: !1
    }, ...o.files],
    leftBehind: o.leftBehind
  };
}
async function xt(e, n) {
  let path_5 = re(e.configHome, n),
    o = await At(e, path_5);
  if (o === null) return {
    files: [],
    leftBehind: []
  };
  if (o.isSymlink) {
    let i = await fe(e, path_5);
    if (i === null || !i.isDirectory()) return {
      files: i !== null && i.isFile() ? [{
        path: path_5,
        lexicalRel: n,
        rawLexicalRel: n,
        viaSymlink: !0,
        aliasOnly: !0
      }] : [],
      leftBehind: [{
        path: n,
        reason: "symlink_not_sent"
      }]
    };
  }
  return Mt(e, path_5, [n], o.isSymlink, new Set());
}
async function Gn(e) {
  let n;
  try {
    n = await De(e.configHome, {
      withFileTypes: !0
    });
  } catch (error) {
    if (!O(error)) e.giveUp ??= "alias_unreadable";
    return [];
  }
  let r = [];
  for (let o of n) {
    let i = re(e.configHome, o.name),
      s = await je(e, i, o);
    if (s === null || !s.isSymbolicLink()) continue;
    if ((await fe(e, i)) === null) continue;
    let u;
    try {
      u = await G(i);
    } catch {
      e.giveUp ??= "alias_unreadable";
      continue;
    }
    if (ye(e, u)) {
      e.giveUp ??= "alias_unreadable";
      continue;
    }
    let d = K(e.realConfigHome, u);
    if (!j(d)) r.push({
      name: o.name.normalize("NFC"),
      targetRel: ce(d, W)
    });
  }
  return r;
}
function zn(e, n) {
  return e.topLevelLinks.flatMap(({
    name: name,
    targetRel: targetRel
  }) => n === targetRel ? [name] : n.startsWith(`${targetRel}/`) ? [`${name}/${n.slice(targetRel.length + 1)}`] : []);
}
async function At(e, n) {
  try {
    return {
      isSymlink: (await Oe(n)).isSymbolicLink()
    };
  } catch (error) {
    if (!O(error)) e.giveUp ??= "alias_unreadable";
    return null;
  }
}
async function Mt(e, n, r, o, i) {
  let path_6 = r.join("/").normalize("NFC"),
    u = {
      files: [],
      leftBehind: [{
        path: path_6,
        reason: "symlink_not_sent"
      }]
    },
    d;
  try {
    let p = await G(n);
    if (i.has(p)) return {
      files: await Ce(e, n, r, new Set([p])),
      leftBehind: []
    };
    let y = K(e.realConfigHome, p);
    if (ye(e, p)) return e.giveUp ??= "alias_unreadable", u;
    if (j(y)) return u;
    let S = `${ce(y, W)}/x.md`;
    if (o && GBe(S) === null) return {
      files: Ke(S) ? await Ce(e, n, r, new Set([p])) : [],
      leftBehind: u.leftBehind
    };
    i.add(p), d = await De(n, {
      withFileTypes: !0
    });
  } catch (error) {
    if (o || !O(error) || !(await $n(n))) e.giveUp ??= "alias_unreadable";
    return {
      files: [],
      leftBehind: []
    };
  }
  let files = [],
    leftBehind_2 = [];
  for (let p of d.toSorted(Ct)) {
    let path_7 = re(n, p.name),
      rawLexicalRel = [...r, p.name].join("/"),
      H = rawLexicalRel.normalize("NFC"),
      E = await je(e, path_7, p);
    if (E === null) continue;
    let F = E.isSymbolicLink(),
      x = p.name.endsWith(se),
      I = F ? await fe(e, path_7) : E;
    if (I === null) {
      if (de(p.name).toLowerCase() === se) leftBehind_2.push({
        path: H,
        reason: "symlink_not_sent"
      });
    } else if (I.isDirectory()) {
      let h = await Mt(e, path_7, [...r, p.name], o || F, i);
      files.push(...h.files), leftBehind_2.push(...h.leftBehind);
    } else if (I.isFile() && (x || F || o && de(p.name).toLowerCase() === se)) files.push({
      path: path_7,
      lexicalRel: H,
      rawLexicalRel: rawLexicalRel,
      viaSymlink: o || F,
      aliasOnly: !x
    });
  }
  return {
    files: files,
    leftBehind: leftBehind_2
  };
}
async function Ce(e, n, r, o) {
  let i;
  try {
    i = await De(n, {
      withFileTypes: !0
    });
  } catch {
    return e.giveUp ??= "alias_unreadable", [];
  }
  let s = [];
  for (let u of i.toSorted(Ct)) {
    let path_8 = re(n, u.name),
      rawLexicalRel_2 = [...r, u.name].join("/"),
      m = await je(e, path_8, u);
    if (m === null) continue;
    let viaSymlink = m.isSymbolicLink(),
      y = viaSymlink ? await fe(e, path_8) : m;
    if (y === null) continue;
    if (y.isDirectory()) {
      let S = await Yn(e, path_8, o);
      if (S !== null) s.push(...(await Ce(e, path_8, [...r, u.name], new Set([...o, S]))));
    } else if (y.isFile() && (viaSymlink || de(u.name).toLowerCase() === se)) s.push({
      path: path_8,
      lexicalRel: rawLexicalRel_2.normalize("NFC"),
      rawLexicalRel: rawLexicalRel_2,
      viaSymlink: viaSymlink,
      aliasOnly: !0
    });
  }
  return s;
}
async function Yn(e, n, r) {
  let o;
  try {
    o = await G(n);
  } catch {
    return e.giveUp ??= "alias_unreadable", null;
  }
  let i = K(e.realConfigHome, o);
  if (ye(e, o)) return e.giveUp ??= "alias_unreadable", null;
  if (r.has(o) || j(i)) return null;
  let s = `${ce(i, W)}/x.md`;
  if (GBe(s) === null && !Ke(s)) return null;
  if (e.aliasBudget.left <= 0) return e.giveUp ??= "too_many_links", null;
  return e.aliasBudget.left -= 1, o;
}
async function je(e, n, r) {
  if (r.isSymbolicLink() || r.isFile() || r.isDirectory() || r.isFIFO() || r.isSocket() || r.isCharacterDevice() || r.isBlockDevice()) return r;
  try {
    return await Oe(n);
  } catch (error) {
    if (!O(error)) e.giveUp ??= "alias_unreadable";
    return null;
  }
}
async function fe(e, n) {
  let r;
  try {
    r = await On(n);
  } catch {
    return e.giveUp ??= "alias_unreadable", null;
  }
  if (r) return null;
  try {
    return await Ne(n);
  } catch (error) {
    if (!O(error)) e.giveUp ??= "alias_unreadable";
    return null;
  }
}
function Ct(e, n) {
  return e.name < n.name ? -1 : e.name > n.name ? 1 : 0;
}
function Z(e, n, r) {
  if (r !== null || !e.has(n)) e.set(n, r);
}
async function Ut(e, n, r, o, i, s) {
  let location = await $e(e, r.path, r.lexicalRel, r.rawLexicalRel);
  if (r.aliasOnly) {
    if (location === "unresolvable") e.giveUp ??= "alias_unreadable";else if (location !== "outside") {
      let m = Q(e, n, location, r.lexicalRel);
      if (m !== null) Z(s, location.realPath, m);
    }
    return {
      kind: "attributed"
    };
  }
  if (location === "unresolvable") {
    if (r.viaSymlink) e.giveUp ??= "alias_unreadable";
    return Ae(r, r.viaSymlink ? "symlink_not_sent" : "unreadable");
  }
  if (location === "outside") return Ae(r, "symlink_not_sent");
  let d = r.viaSymlink ? location.rel : r.lexicalRel,
    c = oRt(d);
  if (c === null) {
    let left = r.viaSymlink ? Q(e, n, location, r.lexicalRel) : null;
    if (!r.viaSymlink || left !== null) Z(s, location.realPath, left);
    if (i.has(location.realPath)) return {
      kind: "attributed"
    };
    return i.add(location.realPath), left === null ? Ae(r, r.viaSymlink ? "symlink_not_sent" : "not_destination") : {
      kind: "refused",
      left: left
    };
  }
  if (o.has(location.realPath)) {
    let m = Q(e, n, location, r.lexicalRel);
    if (m !== null) Z(s, location.realPath, m);
    return {
      kind: "attributed"
    };
  }
  return {
    kind: "candidate",
    candidate: {
      ...c,
      location: location,
      imports: [],
      styleVia: new Map()
    }
  };
}
function Ae(e, reason_4) {
  return {
    kind: "refused",
    left: {
      path: e.lexicalRel,
      reason: reason_4
    }
  };
}
function Ge(e, n) {
  let r = gwn(n.destination);
  if (e.held.has(r)) return null;
  return e.held.set(r, n), n;
}
async function Vn(e, n, r, o, i, s, u, d, c) {
  let m = [];
  for (let p of r) {
    if (u$(c)) return null;
    let y = await Ut(e, n, p, i, s, d);
    if (y.kind === "refused") m.push(y.left);
    if (y.kind !== "candidate") continue;
    let {
        candidate: candidate
      } = y,
      H = p.lexicalRel === Ule ? p.path : candidate.location.realPath,
      E = await sq(H, "User", new Set(), !0);
    if (E.length === 0) {
      let F = await Be(e, candidate.location);
      if (F.kind === "read" && F.content.includes(0)) m.push({
        path: p.lexicalRel,
        reason: "unreadable"
      });
      continue;
    }
    if (Ge(o, candidate) === null) {
      for (let F of E) await ze(e, n, F, d);
      m.push({
        path: p.lexicalRel,
        reason: "not_destination"
      });
      continue;
    }
    i.add(candidate.location.realPath), m.push(...(await Xn(e, n, candidate, E, o, i, s, u, d)));
  }
  return m;
}
function Me(e) {
  return e.globs === void 0 ? "" : _(e.globs.toSorted());
}
async function Xn(e, n, r, o, i, s, u, d, c) {
  let m = [],
    p = o.find(item => item.parent === void 0),
    y = o.filter(item => item !== p),
    S = new Map(),
    H = (candidate_2, g) => ({
      candidate: candidate_2,
      isStyle: candidate_2.kind === "output_style",
      withheld: kt(e, n, candidate_2.location) !== null || c.get(candidate_2.location.realPath) != null,
      scope: Me(g)
    }),
    E = new Map(p === void 0 ? [] : [[p.path, H(r, p)]]),
    F = new Map(),
    x = (h, g) => {
      if (!u.has(h)) u.add(h), F.set(h, m.push(g) - 1);
    },
    I = (h, g) => {
      let C = F.get(h);
      if (C === void 0) x(h, g);else m[C] = g;
    };
  for (let h of o) await ze(e, n, h, c);
  for (let h of y) {
    let g = E.get(h.parent ?? "");
    if (g === void 0) continue;
    let C = Lt(e, h.path),
      location_2 = await $e(e, h.path, C?.rel ?? null, C?.raw ?? null);
    if (location_2 === "outside" || location_2 === "unresolvable") {
      x(h.path, {
        path: C?.rel ?? h.path,
        reason: "include_not_sent"
      });
      continue;
    }
    if (s.has(location_2.realPath) || c.has(location_2.realPath)) {
      let A = c.get(location_2.realPath) ?? Q(e, n, location_2, location_2.lexicalRel);
      if (A !== null) Z(c, location_2.realPath, A), I(location_2.realPath, A);
      continue;
    }
    let R = oRt(location_2.rel);
    if (R !== null) {
      let A = Ge(i, {
        ...R,
        location: location_2,
        imports: [],
        styleVia: new Map()
      });
      if (A === null) {
        x(location_2.realPath, {
          path: location_2.lexicalRel,
          reason: "not_destination"
        });
        continue;
      }
      if (s.add(location_2.realPath), A.kind === "output_style") {
        S.set(h.path, location_2.realPath);
        let v = h.parent === void 0 ? void 0 : S.get(h.parent);
        if (v !== void 0) g.candidate.styleVia.set(location_2.realPath, v);
        if (!g.withheld && !g.isStyle && g.scope === Me(h)) g.candidate.imports.push({
          location: location_2,
          via: v ?? null,
          asStyle: !0
        });
      }
      E.set(h.path, A.kind === "output_style" ? {
        ...g,
        withheld: g.withheld || kt(e, n, A.location) !== null
      } : H(A, h));
      continue;
    }
    if (g.withheld) continue;
    let M = L([location_2.rel, location_2.lexicalRel, ...location_2.rawRels]).every(Ke),
      B = M ? Q(e, n, location_2, location_2.lexicalRel) : null,
      N = B?.reason ?? null,
      V = Et(location_2.rel) && de(location_2.rel).toLowerCase() === se;
    if (B !== null || V) Z(c, location_2.realPath, B);
    if (!M || N !== null) {
      x(location_2.realPath, {
        path: location_2.lexicalRel,
        reason: N ?? (V ? "not_destination" : "include_not_sent")
      });
      continue;
    }
    if (g.isStyle || g.scope !== Me(h)) {
      d.set(location_2.realPath, {
        path: location_2.lexicalRel,
        reason: "include_not_sent"
      });
      continue;
    }
    g.candidate.imports.push({
      location: location_2,
      via: h.parent === void 0 ? null : S.get(h.parent) ?? null
    }), S.set(h.path, location_2.realPath), s.add(location_2.realPath), E.set(h.path, g);
  }
  return m;
}
async function ze(e, n, r, o) {
  if (Oc(r.path)) {
    e.giveUp ??= "alias_unreadable";
    return;
  }
  let i = vt(yt(r.path).resolvedPath),
    s = Le(r.content, ee(r.rawContent ?? r.content).body);
  if (!s.vettable) {
    e.giveUp ??= "alias_unreadable";
    return;
  }
  for (let path_9 of s.spellings) {
    if (path_9.includes("\x00")) continue;
    let d = mt(path_9, i);
    if ((or(path_9) || or(d)) && j(K(e.configHome, d))) continue;
    let c = yt(d);
    if (!c.isCanonical) {
      if (!c.isSymlink && !(await Jn(d))) e.giveUp ??= "alias_unreadable";
      continue;
    }
    let m = Lt(e, d);
    if (m === null) {
      let resolvedPath_2 = c.resolvedPath;
      if (o.get(resolvedPath_2) != null || j(K(e.realConfigHome, resolvedPath_2))) continue;
      let H = In(e.configHome, d);
      if (H === null) {
        e.giveUp ??= "alias_unreadable";
        continue;
      }
      switch (t0t(d) || t0t(resolvedPath_2) ? "sensitive" : n(H, !0)) {
        case "sensitive":
        case "sensitive_tracked":
        case "host_config":
          Z(o, resolvedPath_2, {
            path: path_9,
            reason: "sensitive"
          });
          break;
        case "read_denied":
        case "rules_unreadable":
          Z(o, resolvedPath_2, {
            path: path_9,
            reason: "read_denied"
          });
          break;
        case "content_filter":
        case null:
          break;
      }
      continue;
    }
    let p = await $e(e, d, m.rel, m.raw);
    if (p === "unresolvable") {
      e.giveUp ??= "alias_unreadable";
      continue;
    }
    if (p === "outside" || o.get(p.realPath) != null) continue;
    let y = Q(e, n, p, p.lexicalRel);
    if (y !== null) Z(o, p.realPath, y);
  }
}
async function Jn(e) {
  if (or(e) && !ad(e) || Ba(e)) return !0;
  try {
    return await G(e), !1;
  } catch (error) {
    return O(error) && (await Ft(e));
  }
}
async function qn(e, n, r, o, i, s, u) {
  let d = [];
  for (let c of r) {
    let m = await Ut(e, n, c, i, s, u);
    if (m.kind === "refused") d.push(m.left);else if (m.kind === "candidate") if (m.candidate.kind !== "output_style") d.push({
      path: c.lexicalRel,
      reason: "symlink_not_sent"
    });else if (Ge(o, m.candidate) === null) d.push({
      path: c.lexicalRel,
      reason: "not_destination"
    });else i.add(m.candidate.location.realPath);
  }
  return d;
}
function kt(e, n, r) {
  return Bt(e, n, r)?.reason ?? null;
}
function Q(e, n, r, o) {
  let i = Bt(e, n, r);
  return i === null ? null : {
    path: i.alias ?? o,
    reason: i.reason
  };
}
function Bt(e, n, r) {
  let o = L([r.lexicalRel, r.rel, ...r.rawRels]),
    i = L(o.flatMap(item => zn(e, item))).filter(item => !o.includes(item)),
    s = [...o, ...i];
  if ([...s, ...s.map(item => re(e.configHome, ...item.split("/"))), r.realPath].some(item => t0t(item))) return {
    reason: "sensitive",
    alias: null
  };
  for (let d of s) {
    let alias = i.includes(d) ? d : null;
    switch (n(d, !1)) {
      case "sensitive":
      case "sensitive_tracked":
      case "host_config":
        return {
          reason: "sensitive",
          alias: alias
        };
      case "read_denied":
      case "rules_unreadable":
        return {
          reason: "read_denied",
          alias: alias
        };
      case "content_filter":
      case null:
        break;
    }
  }
  return null;
}
async function Zn(e, n, r, o, i, s) {
  let u = Q(e, n, r.location, r.destination),
    d = o.get(r.location.realPath) ?? null;
  if (u !== null) return J(r, u.reason, s, u.path);
  if (d !== null) return J(r, d.reason, s, d.path);
  if (!(await wt(e, r.location))) return J(r, "unreadable", s);
  let c = await Be(e, r.location);
  if (c.kind === "skip") return J(r, rr(c.skipped.reason), s);
  if (c.content.length > Qhe) return J(r, "over_cap", s);
  let m = c.content.toString("utf8");
  if (nIe(m)) {
    let R = J(r, "credential", s);
    return {
      ...R,
      leftBehind: R.leftBehind.map(item => item.reason === "credential" ? {
        ...item,
        ...Rt(m, 0)
      } : item)
    };
  }
  let p = r.kind === "output_style" ? {
      content: c.content,
      defusedPaths: []
    } : Qn(r.destination, c.content, r.imports.length > 0),
    y = [p.content],
    folded = [],
    foldedIncludes_3 = [],
    E = p.content.length,
    leftBehind_3 = [],
    x = r.imports.length > 0 && Ie(ee(p.content.toString("utf8")).body),
    I = new Set(i);
  for (let {
    location: location_3,
    via: via,
    asStyle: asStyle
  } of r.imports) {
    let N = Qt => {
        if (!asStyle) leftBehind_3.push(Qt);
      },
      V = Q(e, n, location_3, location_3.lexicalRel);
    if (V !== null || o.has(location_3.realPath) || I.has(location_3.realPath) || via !== null && nr(via, I, r.styleVia) || x) {
      if (I.add(location_3.realPath), !s.has(location_3.realPath)) s.add(location_3.realPath), N(V ?? o.get(location_3.realPath) ?? {
        path: location_3.lexicalRel,
        reason: "include_not_sent"
      });
      continue;
    }
    let A = (await wt(e, location_3)) ? await Be(e, location_3) : null;
    if (A === null || A.kind === "skip") {
      I.add(location_3.realPath), N({
        path: location_3.lexicalRel,
        reason: "include_not_sent"
      });
      continue;
    }
    let {
      head: head,
      body: body
    } = ee(A.content.toString("utf8"));
    if (Ie(body) || ut(body)) {
      I.add(location_3.realPath), N({
        path: location_3.lexicalRel,
        reason: "include_not_sent"
      });
      continue;
    }
    let le = Buffer.from(ft(location_3.rel) + He(body));
    if (E + le.length > Qhe) {
      I.add(location_3.realPath), N({
        path: location_3.lexicalRel,
        reason: "over_cap"
      });
      continue;
    }
    if (nIe(body)) {
      I.add(location_3.realPath), N({
        path: location_3.lexicalRel,
        reason: "credential",
        ...Rt(body, Dt(head, `
`))
      });
      continue;
    }
    if (y.push(le), folded.push(location_3.lexicalRel), !asStyle) foldedIncludes_3.push(location_3.lexicalRel);
    E += le.length;
  }
  let h = Buffer.concat(y),
    content_2 = r.kind !== "output_style" && y.length > 1 && er(p.content, h, r.destination) ? tr(h) : h;
  if (r.kind !== "output_style" && content_2 !== h && he(content_2, oe)) return J(r, "undefusable", s);
  if (!content_2.equals(c.content) && nIe(content_2.toString("utf8"))) {
    let R = J(r, "credential", s),
      M = new Set(leftBehind_3.map(item => item.path));
    return {
      ...R,
      leftBehind: [...R.leftBehind.filter(item => !M.has(item.path)), ...leftBehind_3]
    };
  }
  let C = new Set(folded),
    defused = U(p.defusedPaths, R => !C.has(ne.normalize(ne.join(ne.dirname(r.destination), R)).normalize("NFC")));
  return {
    entry: {
      path: r.destination,
      kind: r.kind,
      content: content_2,
      sha256: nt(content_2),
      folded: folded,
      defused: defused
    },
    foldedIncludes: foldedIncludes_3,
    leftBehind: leftBehind_3
  };
}
function Qn(e, content_3, r) {
  let o = x => Ot(e, x),
    i = content_3.toString("utf8").replace(/\r\n?/g, `
`),
    s = ee(i),
    head_2 = s.head,
    d = head_2 !== "" && i.startsWith("\uFEFF") ? "\uFEFF" : "",
    c = r && head_2 === "" && /^\uFEFF?---\s*\n/.test(i) ? `
` : "",
    m = c + d + head_2,
    p = s.body,
    defusedPaths = [],
    S = He(p, o, defusedPaths),
    H = S === p && c === "" ? {
      content: content_3,
      defusedPaths: []
    } : {
      content: Buffer.from(m + S),
      defusedPaths: defusedPaths
    };
  if (H.content !== content_3 && ee(content_3.toString("utf8")).head === "" !== (head_2 === "")) return {
    content: Buffer.from(te(i)),
    defusedPaths: bt(p, o)
  };
  if (!he(H.content, o)) return H;
  let defusedPaths_2 = bt(p, o),
    content_4 = Buffer.from(m + te(p));
  return he(content_4, oe) ? {
    content: Buffer.from(c + te(i)),
    defusedPaths: defusedPaths_2
  } : {
    content: content_4,
    defusedPaths: defusedPaths_2
  };
}
function bt(e, n) {
  let r = Le(e, e);
  return r.vettable ? r.spellings.filter(item => !n(item)) : [];
}
function er(e, n, r) {
  let o = u => Ot(r, u),
    i = u => Te(ee(u.toString("utf8")).body),
    s = i(n);
  return s.some(item => !o(item)) || U(s, o) > U(i(e), o);
}
function tr(e) {
  let n = e.toString("utf8"),
    {
      head: head_3,
      body: body_2
    } = ee(n),
    i = head_3 !== "" && n.startsWith("\uFEFF") ? "\uFEFF" : "",
    s = Buffer.from(i + head_3 + te(body_2));
  return he(s, oe) ? Buffer.from(te(n)) : s;
}
function he(e, n) {
  return Fe(ee(e.toString("utf8")).body, n);
}
function ee(body_3) {
  let n = body_3.startsWith("\uFEFF") ? body_3.slice(1) : body_3,
    head_4 = mE.exec(n)?.[0];
  return head_4 === void 0 ? {
    head: "",
    body: body_3
  } : {
    head: head_4,
    body: n.slice(head_4.length)
  };
}
function Ot(e, n) {
  if (n.startsWith("/") || n.startsWith("~")) return !1;
  let r = ne.normalize(ne.join(ne.dirname(e), n)),
    o = r.startsWith("../") ? null : GBe(r);
  return o === "claude_md" || o === "rule";
}
function nr(e, n, r) {
  let o = new Set();
  for (let i = e; i !== void 0 && !o.has(i); i = r.get(i)) {
    if (n.has(i)) return !0;
    o.add(i);
  }
  return !1;
}
async function wt(e, n) {
  try {
    return (await G(re(e.realConfigHome, n.nativeRel))) === n.realPath;
  } catch {
    return !1;
  }
}
function Rt(e, n) {
  let r = e.split(`
`),
    o = r.length > Fn ? -1 : r.findIndex(item => nIe(item));
  return o === -1 ? {} : {
    line: n + o + 1
  };
}
function J(e, reason_5, r, path_10 = e.destination) {
  let i = [{
      realPath: e.location.realPath,
      row: {
        path: path_10,
        reason: reason_5
      }
    }, ...e.imports.filter(item => !item.asStyle).map(({
      location: location_4
    }) => ({
      realPath: location_4.realPath,
      row: {
        path: location_4.lexicalRel,
        reason: "include_not_sent"
      }
    }))],
    leftBehind_4 = [];
  for (let {
    realPath: realPath_2,
    row: row
  } of i) if (!r.has(realPath_2)) r.add(realPath_2), leftBehind_4.push(row);
  return {
    entry: null,
    foldedIncludes: [],
    leftBehind: leftBehind_4
  };
}
function Be(e, n) {
  return rt(e.realConfigHome, e.realConfigHome, n.nativeRel);
}
function rr(e) {
  switch (e) {
    case "symlink":
    case "hard_link":
      return "symlink_not_sent";
    case "too_large":
      return "over_cap";
    case "sensitive":
    case "sensitive_tracked":
    case "host_config":
      return "sensitive";
    case "read_denied":
    case "rules_unreadable":
      return "read_denied";
    case "content_filter":
    case "filtered":
    case "dependency_dir":
    case "outside_root":
    case "changed":
    case "not_regular_file":
    case "lane_path":
    case "over_budget":
    case "left_behind":
    case "unreadable":
    case "upload_failed":
    case "unpushed_only":
    case "ignored":
      return "unreadable";
  }
}
import { readdir as sr } from "fs/promises";
import { isAbsolute as ar, join as ae, relative as lr, sep as dr } from "path";
var z = {
  covers: "all"
};
function Se(e) {
  if (!Z6o(e)) return {
    covers: "matchers",
    matchers: []
  };
  let n = jt(e);
  if (!Array.isArray(n)) return z;
  let matchers = [];
  for (let o of n) {
    let i = D(o) ? o.matcher : void 0;
    if (typeof i !== "string") return z;
    if (i.trim() === "" || i === "*" || i === ".*") return z;
    matchers.push(i);
  }
  return {
    covers: "matchers",
    matchers: matchers
  };
}
function Wt(e) {
  if (e.covers === "all") return !0;
  let matchers_2 = e.matchers;
  if (matchers_2.length === 0) return !1;
  return r => dS(r) ? matchers_2.some(item => {
    let i = los(item);
    return i === void 0 || i.some(item => dqe(r, item));
  }) : matchers_2.some(item => aos(item, r));
}
function cr(e) {
  let n = e.filter(Z6o);
  if (n.length === 0) return;
  let r = n.map(jt);
  return n.find((item, index) => !Array.isArray(r[index])) ?? {
    PreToolUse: r.flatMap(item => Array.isArray(item) ? item : [])
  };
}
function jt(e) {
  return D(e) && Object.hasOwn(e, "PreToolUse") ? e.PreToolUse : void 0;
}
function Gt(e, n) {
  return e.covers === "all" || n.covers === "all" ? z : {
    covers: "matchers",
    matchers: L([...e.matchers, ...n.matchers])
  };
}
function fr({
  sources: sources,
  sourcesIncomplete: sourcesIncomplete,
  processGuard: processGuard,
  plugins: plugins,
  repoEnabledPluginKeys: repoEnabledPluginKeys
}) {
  if (sourcesIncomplete || sources.some(item => !item.read) || plugins === null || plugins.errors.length > 0 || plugins.warnings.some(item => item.type === "project-scope-suppressed-untrusted") || plugins.warnings.some(item => item.type === "plugin-renamed" && (repoEnabledPluginKeys === void 0 || repoEnabledPluginKeys.has(Un(item.source)))) || plugins === null) return z;
  let u = plugins.enabled.filter(item => item.scope === "project" || di(item.source) === Pi || item.scope !== "user" && (repoEnabledPluginKeys === void 0 || repoEnabledPluginKeys.has(Un(item.source))));
  if (u.some(item => item.hooksConfig === void 0 && item.manifest.hooks !== void 0)) return z;
  return [processGuard, ...sources.map(item => item.read ? Se(item.hooks) : z), ...u.map(item => Se(item.hooksConfig))].reduce(Gt, {
    covers: "matchers",
    matchers: []
  });
}
function Ye(e) {
  return e.some(item => item.severity !== "warning" || item.path === "hooks" || item.path.startsWith("hooks."));
}
function zt(e, n, settingsToCloud_2 = yz) {
  return {
    sources: sources_2,
    hooksOf: o => {
      if (o === "userSettings" || o === "flagSettings") return;
      if (o === "policySettings") return be(o)?.hooks;
      let i = Je(o).map(ke);
      return cr([...i.map(item => item?.hooks), Ga(o)?.hooks]);
    },
    sourcesIncomplete: () => Ye(mh().errors) || Ve().some(item => Ye(Yt(item).errors)) || _e.some(item => !Kt(item)) && pr(),
    processGuard: () => {
      let o = gr(),
        PreToolUse = (n() ?? []).filter(item => item.hooks.length > 0 && !hr(item.skillRoot, o));
      return Gt(Se(wY()), Se({
        PreToolUse: PreToolUse
      }));
    },
    loadPlugins: async () => {
      if ((await Promise.all(Ve().map(Mjt))).some(Boolean)) throw Error("an --add-dir settings file names another host");
      let [o, count] = await Promise.all([gW(e), Kt("projectSettings") ? 0 : mr()]),
        s = count === 0 ? o : {
          ...o,
          warnings: [...o.warnings, {
            type: "project-scope-suppressed-untrusted",
            source: `(unlisted)@${xm}`,
            count: count,
            warning: "project skill directories on disk were not loaded: the project settings source is off for this process"
          }]
        },
        u = new Set(Xe({
          enabledPlugins: {
            ...Rce(),
            ...(mh().settings?.enabledPlugins ?? {})
          }
        })),
        d = $t().filter(item => !u.has(item)),
        c = _e.some(item => !Kt(item)) ? s.enabled.filter(item => item.settings?.agent !== void 0) : [];
      return d.length === 0 && c.length === 0 ? s : {
        ...s,
        errors: [...s.errors, ...d.map(m => ({
          type: "generic-error",
          source: m,
          error: "enabled in a settings file this process did not load"
        })), ...c.map(item => ({
          type: "generic-error",
          source: item.source,
          error: "names a main-thread agent this process did not resolve"
        }))]
      };
    },
    repoEnabledPluginKeys: () => new Set([...$t(), ...Xe(be("policySettings"))].map(Un)),
    settingsToCloud: settingsToCloud_2
  };
}
async function mr() {
  let e = ae(mo() ?? Ee(), ".claude", "skills");
  if (e === ae(Ue(), "skills")) return 0;
  if (await Mjt(e)) return 1;
  return sr(e, {
    withFileTypes: !0
  }).then(n => U(n, r => r.isDirectory() || r.isSymbolicLink()), n => ["ENOENT", "ENOTDIR"].includes(k(n) ?? "") ? 0 : 1);
}
function pr() {
  return mh().settings?.agent !== void 0 || _e.flatMap(item => Je(item).map(ke)).some(item => item?.agent !== void 0);
}
var _e = sources_2.filter(item => item !== "policySettings" && hf.has(item));
function gr() {
  let e = ae(Ue(), "skills");
  return {
    own: [e, ae(Ue(), "commands"), ltn()],
    synced: ae(e, Z2)
  };
}
function hr(e, n) {
  return e !== void 0 && !Nt(n.synced, e) && n.own.some(item => Nt(item, e));
}
function Nt(e, n) {
  let r = lr(e, n);
  return r !== "" && r.split(dr)[0] !== ".." && !ar(r);
}
function Je(e) {
  return [un(e), e === "localSettings" ? Jg() : void 0].filter(item => item !== void 0);
}
function Ve() {
  return Gl().flatMap(item => ["settings.json", "settings.local.json"].map(n => ae(item, ".claude", n)));
}
function ke(e) {
  let {
    settings: settings,
    errors: errors
  } = Yt(e);
  if (Ye(errors)) throw Error("a settings file could not be read");
  return settings;
}
function Yt(e) {
  if (xN(e)) throw Error("a settings file names another host");
  return wT(e);
}
function $t() {
  return [..._e.flatMap(item => Je(item).map(ke)), ...Ve().map(ke)].flatMap(Xe);
}
function Xe(e) {
  return Object.entries(e?.enabledPlugins ?? {}).filter(([, n]) => n !== !1).map(([n]) => n);
}
async function Vt(e) {
  if (!(await Promise.resolve().then(e.settingsToCloud).catch(() => !1))) return z;
  let sources_3 = e.sources.map(item => {
      try {
        return {
          read: !0,
          hooks: e.hooksOf(item)
        };
      } catch {
        return {
          read: !1
        };
      }
    }),
    sourcesIncomplete_2;
  try {
    sourcesIncomplete_2 = e.sourcesIncomplete();
  } catch {
    sourcesIncomplete_2 = !0;
  }
  let processGuard_2;
  try {
    processGuard_2 = e.processGuard();
  } catch {
    processGuard_2 = z;
  }
  let plugins_2;
  try {
    plugins_2 = await e.loadPlugins();
  } catch {
    plugins_2 = null;
  }
  let repoEnabledPluginKeys_2;
  try {
    repoEnabledPluginKeys_2 = e.repoEnabledPluginKeys?.();
  } catch {
    repoEnabledPluginKeys_2 = void 0;
  }
  return fr({
    sources: sources_3,
    sourcesIncomplete: sourcesIncomplete_2,
    processGuard: processGuard_2,
    plugins: plugins_2,
    repoEnabledPluginKeys: repoEnabledPluginKeys_2
  });
}
async function Xt() {
  ir();
  let e = hT("userSettings"),
    n = be("userSettings");
  return e.some(yr) || n === null && (await Sr(un("userSettings"))) ? {
    kind: "broken"
  } : {
    kind: "sendable",
    settings: n ?? {},
    hasLostAnAllowEntry: e.some(Jt)
  };
}
function yr(e) {
  return e.severity !== "warning" || e.path === "permissions" || e.path.startsWith("permissions.") && !Jt(e);
}
function Jt({
  path: path_11
}) {
  return path_11.startsWith("permissions.allow");
}
async function Sr(e) {
  try {
    return e !== void 0 && (await ie().lstat(e)).isSymbolicLink();
  } catch {
    return !1;
  }
}
var _r = 3,
  writtenAtMs = 0;
async function V6o({
  signal: signal_2,
  storageV5: storageV5,
  sessionPreToolUse = () => {
    return;
  },
  launchConsent: launchConsent,
  now = Date.now,
  hookGuardHere = () => Vt(zt(storageV5, sessionPreToolUse, BPt(launchConsent).enabled)),
  withRunnerPack = !1
} = {}) {
  let d = BPt(launchConsent);
  if (!o4(d.enabledNow())) return {
    kind: "none",
    reason: "flag_off"
  };
  let c = now(),
    m = await br(signal_2, hookGuardHere, launchConsent, d, withRunnerPack).catch(p => {
      if (We(p) || u$(signal_2)) return {
        kind: "none",
        reason: "aborted"
      };
      return a(p), {
        kind: "none",
        reason: "failed"
      };
    });
  return qt(m, now() - c), m;
}
async function br(signal_3, n, r, o, withRunnerPack_2) {
  if (!kje(r)) return {
    kind: "none",
    reason: "no_consent"
  };
  if (!$o().includes("userSettings")) return {
    kind: "none",
    reason: "user_settings_disabled"
  };
  let configHome_2 = Ue(),
    u = await Xt(),
    d = u.kind === "sendable" ? u : null,
    readRules_2 = nRn(),
    [m, p] = await Promise.all([Tt({
      configHome: configHome_2,
      isUserSettingsFileSendable: d !== null,
      readRules: readRules_2,
      createFilter: createFilter_2,
      signal: signal_3,
      settingsToCloud: o.enabled
    }), n().catch(() => ({
      covers: "all"
    }))]);
  if (l("tengu_home_seed_hook_guard", {
    kind: b(p.covers === "all" ? "all" : p.matchers.length > 0 ? "matchers" : "none"),
    matcher_count: p.covers === "all" ? 0 : p.matchers.length,
    allow_entry_lost_at_parse: d?.hasLostAnAllowEntry ?? !1
  }), u$(signal_3) || !m.ok && m.reason === "aborted") return {
    kind: "none",
    reason: "aborted"
  };
  if (!m.ok) return m.reason === "flag_off" ? {
    kind: "none",
    reason: "flag_off"
  } : {
    kind: "none",
    reason: "home_unvettable",
    cause: m.reason === "too_many_links" ? m.reason : "alias_unreadable",
    configHome: configHome_2
  };
  let settings_2 = onr(d?.settings ?? null, {
    preToolUseHookActiveHere: Wt(p),
    hasLostAnAllowEntryAtParse: d?.hasLostAnAllowEntry ?? !1,
    settingsToCloud: o.enabledNow
  });
  return wr({
    inventory: m.inventory,
    settings: settings_2,
    configHome: configHome_2,
    unreadableSettingsFiles: (readRules_2.unreadableSettingsFiles ?? []).map(sRt),
    writtenAtMs: writtenAtMs,
    withRunnerPack: withRunnerPack_2
  });
}
function wr({
  inventory: inventory,
  settings: settings_3,
  configHome: configHome_3,
  unreadableSettingsFiles: unreadableSettingsFiles,
  writtenAtMs: writtenAtMs_2,
  withRunnerPack: withRunnerPack_3 = !1
}) {
  let u = settings_3.document,
    summary = Hr(inventory, settings_3),
    c = {
      summary: summary,
      leftBehind: inventory.leftBehind,
      unreadable: inventory.summary.unreadable,
      settings: u === null ? settings_3.reason : "sent",
      configHome: configHome_3
    };
  if (inventory.summary.rulesUnreadable) return {
    kind: "empty",
    reason: "rules_unreadable",
    unreadableSettingsFiles: unreadableSettingsFiles,
    ...c,
    settings: u === null ? settings_3.reason : "nothing_to_send"
  };
  if (inventory.entries.length === 0 && u === null) return {
    kind: "empty",
    reason: "nothing_to_send",
    ...c
  };
  let p = {
      kind: "ready",
      pack: rRt({
        generation: 1,
        writtenAtMs: writtenAtMs_2,
        files: inventory.entries.map(item => X6o(item.path, item.content)),
        settings: u,
        summary: summary
      }),
      description: Rr(inventory, u),
      ...c
    },
    y = withRunnerPack_3 ? inventory.entries.find(item => item.kind === "claude_md") : void 0;
  return p;
}
function Rr(e, n) {
  return {
    claudeMd: e.entries.some(item => item.kind === "claude_md"),
    rules: U(e.entries, r => r.kind === "rule"),
    outputStyles: U(e.entries, r => r.kind === "output_style"),
    inlinedImports: e.summary.inlinedImports,
    settingsKeys: n === null ? [] : vr(n),
    permissionRules: (n?.permissions?.allow?.length ?? 0) + (n?.permissions?.deny?.length ?? 0) + (n?.permissions?.ask?.length ?? 0)
  };
}
function vr(e) {
  return Object.keys(Zt).filter(item => e[item] !== void 0);
}
function Hr(e, n) {
  let {
    counts: counts
  } = n;
  return {
    withheldSensitive: e.summary.withheldSensitive,
    withheldReadDenied: e.summary.withheldReadDenied,
    rulesUnreadable: e.summary.rulesUnreadable,
    includesNotSent: e.summary.includesNotSent,
    symlinksNotSent: e.summary.symlinksNotSent,
    notDestinations: e.summary.notDestinations,
    overCap: e.summary.overCap,
    unreadable: e.summary.unreadable,
    settingsKeysWithheld: counts.withheldKeys,
    credentialTextsWithheld: counts.withheldCredentialTexts,
    rulesCoveringDeviceTools: counts.rules.coveringDeviceTools,
    droppedRules: {
      rooted: counts.rules.droppedRooted,
      device: counts.rules.droppedDevice,
      invalid: counts.rules.droppedInvalid,
      guarded: counts.rules.droppedGuarded,
      overCap: counts.rules.droppedOverCap,
      credential: counts.rules.droppedCredential,
      credentialRestrictions: counts.rules.droppedCredentialRestrictions
    }
  };
}
var K3r = {
  kind: "none",
  reason: "self_hosted_runner"
};
function K6o() {
  qt(K3r, 0);
}
function qt(e, duration_ms) {
  if (e.kind === "none") {
    l("tengu_home_seed_plan", {
      outcome: f(e.reason),
      cause: e.reason === "home_unvettable" ? f(e.cause) : void 0,
      duration_ms: duration_ms
    });
    return;
  }
  let {
      summary: summary_2
    } = e,
    o = Y3r(e.leftBehind),
    i = {
      settings_keys_withheld: summary_2.settingsKeysWithheld,
      credential_texts_withheld: summary_2.credentialTextsWithheld,
      rules_dropped_rooted: summary_2.droppedRules.rooted,
      rules_dropped_device: summary_2.droppedRules.device,
      rules_dropped_invalid: summary_2.droppedRules.invalid,
      rules_dropped_over_cap: summary_2.droppedRules.overCap,
      rules_dropped_credential: summary_2.droppedRules.credential,
      restrictions_dropped_credential: summary_2.droppedRules.credentialRestrictions,
      rules_dropped_guarded: summary_2.droppedRules.guarded,
      rules_covering_device_tools: summary_2.rulesCoveringDeviceTools,
      withheld_sensitive: summary_2.withheldSensitive,
      withheld_read_denied: summary_2.withheldReadDenied,
      withheld_credential: o.others + (o.claudeMd ? 1 : 0),
      claude_md_withheld_credential: o.claudeMd,
      includes_not_sent: summary_2.includesNotSent,
      symlinks_not_sent: summary_2.symlinksNotSent,
      claude_md_link_not_sent: e.leftBehind.some(item => item.reason === "symlink_not_sent" && item.path === Ule),
      not_destinations: summary_2.notDestinations,
      over_cap: summary_2.overCap,
      unreadable: e.unreadable,
      duration_ms: duration_ms
    };
  if (e.kind === "empty") {
    l("tengu_home_seed_plan", {
      outcome: f(e.reason),
      settings: f(e.settings),
      settings_files_in_error: e.reason === "rules_unreadable" ? e.unreadableSettingsFiles.length : void 0,
      ...i
    });
    return;
  }
  let {
    description: description
  } = e;
  l("tengu_home_seed_plan", {
    outcome: b("ready"),
    settings: f(e.settings),
    files: description.rules + description.outputStyles + (description.claudeMd ? 1 : 0),
    pack_bytes: e.pack.length,
    settings_keys: description.settingsKeys.length,
    rules_kept: description.permissionRules,
    includes_inlined: description.inlinedImports,
    ...i
  });
}
var Zt = {
  language: "language",
  outputStyle: "output style",
  attribution: "attribution",
  includeCoAuthoredBy: "co-author preference",
  includeGitInstructions: "git-instructions preference",
  alwaysThinkingEnabled: "thinking preference",
  showThinkingSummaries: "thinking-summary preference",
  permissions: "permission rules"
};
function q6o(e) {
  let n = [...(e.claudeMd ? ["CLAUDE.md"] : []), ...qe(e.rules, "rules file"), ...qe(e.outputStyles, "output-style file"), ...qe(e.permissionRules, "permission rule"), ...e.settingsKeys.flatMap(item => item === "permissions" ? [] : [Zt[item]]), ...(e.inlinedImports > 0 ? [`${e.inlinedImports} @${P(e.inlinedImports, "import")} folded in`] : [])];
  return n.length === 0 ? "Sent settings from this machine to the cloud session: only the narrowed permission allow list" : `Sent settings from this machine to the cloud session: ${n.join(", ")}`;
}
function qe(e, n) {
  return e > 0 ? [`${e} ${P(e, n)}`] : [];
}
var enr = "Your deny and ask rules are not in force in the cloud session",
  tnr = "The cloud session's settings stay as they were",
  nnr = "Your deny and ask rules may not be in force in the cloud session";
function q3r({
  summary: summary_3,
  leftBehind: leftBehind_5,
  unreadable: unreadable,
  settings: settings_4,
  configHome: configHome_4
}, {
  launch: launch,
  settingsFile: settingsFile
}) {
  let d = ks(configHome_4),
    c = [Y(leftBehind_5, "symlink_not_sent", summary_3.symlinksNotSent, g => `${g} linked ${P(g, "file")} (links are not followed)`), Y(leftBehind_5, "include_not_sent", summary_3.includesNotSent, g => `${g} @${P(g, "import")} outside ${d} or not markdown`), Y(leftBehind_5, "sensitive", summary_3.withheldSensitive, g => `${g} ${P(g, "file")} named like credentials`), Y(leftBehind_5, "read_denied", summary_3.withheldReadDenied, g => `${g} ${P(g, "file")} your Read rules or sandbox settings cover`), Y(leftBehind_5, "not_destination", summary_3.notDestinations, g => `${g} ${P(g, "file")} with ${P(g, "a name", "names")} the cloud session cannot create`), Y(leftBehind_5, "over_cap", summary_3.overCap, g => `${g} ${P(g, "file")} over a limit of ${uat} files, ${en(Qhe)} per file or ${en(hwn)} in total`), Y(leftBehind_5, "unreadable", unreadable, g => `${g} ${P(g, "file")} that changed while being read`), Y(leftBehind_5, "undefusable", U(leftBehind_5, g => g.reason === "undefusable"), g => `${g} ${P(g, "file")} whose @imports could not be made safe`), Y(leftBehind_5, "credential", U(leftBehind_5, g => g.reason === "credential"), g => `${g} ${P(g, "file")} ${Ze(g)}`)].flatMap(item => item === null ? [] : [item]),
    m = summary_3.droppedRules.rooted + summary_3.droppedRules.device + summary_3.droppedRules.invalid + summary_3.droppedRules.overCap,
    credentialRestrictions = summary_3.droppedRules.credentialRestrictions,
    y = summary_3.droppedRules.credential - credentialRestrictions,
    credentialTextsWithheld = summary_3.credentialTextsWithheld,
    guarded = summary_3.droppedRules.guarded,
    E = settings_4 === "schema_rejected" ? "failed validation" : settings_4 === "settings_too_large" ? "is over the size limit" : settings_4 === "settings_unreadable" ? "could not be read" : null,
    F = [...(summary_3.settingsKeysWithheld > 0 ? [`${summary_3.settingsKeysWithheld} ${P(summary_3.settingsKeysWithheld, "key")} (hooks, env and the like are never sent)`] : []), ...(m > 0 ? [`${m} permission ${P(m, "rule")} that ${P(m, "names", "name")} a path or device tool on this machine or could not be read`] : []), ...(y > 0 ? [`${y} allow ${P(y, "rule")} ${Ze(y)}`] : []), ...(credentialTextsWithheld > 0 ? [`${credentialTextsWithheld} ${P(credentialTextsWithheld, "text")} (attribution, language, output style) ${Ze(credentialTextsWithheld)}`] : []), ...(guarded > 0 ? [`${guarded} allow ${P(guarded, "rule")} that stayed because a hook, a plugin or a rule that was not sent may guard ${P(guarded, "it", "them")}`] : [])],
    x = c.length > 0 ? [`Not sent from ${d}: ${c.join("; ")}`] : [];
  if (E !== null) return [launch === "reopen_sent_nothing" ? `${tnr}: ${settingsFile} ${E}` : `${enr}: ${settingsFile} ${E}; ${settings_4 === "settings_too_large" ? "make it smaller" : "fix it"} and ${launch === "reopen_sent" ? "re-open the session" : "start a new cloud session"}`, ...x].join(". ");
  let I = F.length > 0 ? [`Settings kept on this machine: ${F.join("; ")}`] : [],
    h = credentialRestrictions > 0 ? [`${credentialRestrictions} deny or ask ${P(credentialRestrictions, "rule is", "rules are")} not in force in the cloud session: ${P(credentialRestrictions, "it looks like it holds", "they look like they hold")} a credential (reword ${P(credentialRestrictions, "it", "them")} in ${settingsFile})`, ...I, ...x] : [...x, ...I];
  return h.length === 0 ? null : h.join(". ");
}
function Y3r(e) {
  let n = e.filter(item => item.reason === "credential").map(item => item.path);
  return {
    claudeMd: n.includes(Ule),
    others: U(n, r => r !== Ule)
  };
}
function Y6o(e) {
  let n = e.filter(item => item.reason === "symlink_not_sent").map(item => item.path),
    names = [...n.filter(item => item === Ule), ...n.filter(item => item !== Ule)].slice(0, 2).map(item => item === zBe || item === fat ? `${item}/` : Nn(item));
  return {
    names: names,
    more: n.length - names.length
  };
}
function Ze(e) {
  return `that ${P(e, "looks", "look")} like ${P(e, "it holds", "they hold")} a credential`;
}
function Y(e, n, r, o) {
  if (r === 0) return null;
  let i = e.filter(item => item.reason === n).map(item => Nn(item.path) + (item.line === void 0 ? "" : `:${item.line}`)),
    s = i.slice(0, _r),
    u = i.length - s.length,
    d = s.length === 0 ? "" : ` (${s.join(", ")}${u > 0 ? ` and ${u} more` : ""})`;
  return o(r) + d;
}
export { V6o, K3r, K6o, q6o, enr, tnr, nnr, q3r, Y3r, Y6o };