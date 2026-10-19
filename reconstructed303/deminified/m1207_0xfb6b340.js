// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { F, L, ke, so, LA, bv, de, DQ, hc } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { b, c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { Ve, k } from "B:/~BUN/root/chunk-3aez4b53.js";
import { jn, NA, Na, Qa, Ds } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { Pe } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { _, gI, qbt, _o, se, _n, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { O, mc, nt, $t } from "B:/~BUN/root/chunk-nggrknsv.js";
import { it, Es } from "B:/~BUN/root/chunk-ek28wssa.js";
import { dr, xs as sources_2, Wo, nn, ef } from "B:/~BUN/root/chunk-6a9s3k2y.js";
import { i5, IWe } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { wp } from "B:/~BUN/root/chunk-xrp58hm9.js";
import { vl, $u, Pi, Oi, rr, lR } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { nE, X_t } from "B:/~BUN/root/chunk-a0k8qg0d.js";
import { fn, rk, wh, me, Bm } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { BH, Qj } from "B:/~BUN/root/chunk-r4y1700s.js";
import { bBn, RC } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { ULt } from "B:/~BUN/root/chunk-c44qc88s.js";
import { HE } from "B:/~BUN/root/chunk-h1tq8zce.js";
import { Mj } from "B:/~BUN/root/chunk-hhgqcegv.js";
import { hgr, j1, jue, cLn, Yhr as createFilter_2, mXt, Vat, cxe, Guo, Vuo, rwe } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { xr, OC } from "B:/~BUN/root/chunk-vttg4n7q.js";
import { G9 } from "B:/~BUN/root/chunk-r1z1wgpe.js";
import { iu } from "B:/~BUN/root/chunk-72n790j1.js";
import { Das, Las, tRt, Rbe, EOn, fto } from "B:/~BUN/root/chunk-ryerxfb6.js";
import { xz, rue } from "B:/~BUN/root/chunk-cw50jvp0.js";
import { t4e, $oe, p3t, j7, uAe, n4e, f3t, pAe, vst } from "B:/~BUN/root/chunk-sn0w05nq.js";
import { N0 } from "B:/~BUN/root/chunk-a5n8jkcn.js";
import { N } from "B:/~BUN/root/chunk-nkxgam12.js";
import { st } from "B:/~BUN/root/chunk-7aw74be3.js";
import { Zt } from "B:/~BUN/root/chunk-ekswf6ps.js";
import { lstat as Oe, readdir as De, readlink as Pn, realpath as En, stat as Ne } from "fs/promises";
import { dirname as vt, extname as ue, join as ne, posix as te, relative as K, resolve as Fn, sep as j, win32 as he } from "path";
import { lstat as en, open as tn, realpath as rn } from "fs/promises";
import { isAbsolute as on, join as sn, relative as an, sep as ln } from "path";
function Qe(e, n = xz) {
  if (e.isSymbolicLink()) return "symlink";
  if (!e.isFile()) return "not_regular_file";
  if (e.nlink > 1) return "hard_link";
  if (e.size > n) return "too_large";
  return null;
}
function un(e) {
  return e === "" || e === ".." || e.startsWith(`..${ln}`) || on(e);
}
async function dn(e, n) {
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
  let content = await dn(e, Number(n.size));
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
async function tt(e, n, path_2, o = null, s = xz) {
  try {
    if (o !== null) return await cn(o, path_2, s);
    let a = sn(e, path_2),
      u = await en(a, {
        bigint: !0
      }),
      reason = Qe(u, s);
    if (reason !== null) return {
      kind: "skip",
      skipped: {
        path: path_2,
        reason: reason
      }
    };
    if (NA(a)) return {
      kind: "skip",
      skipped: {
        path: path_2,
        reason: "unreadable"
      }
    };
    if (un(an(n, await rn(a)))) return {
      kind: "skip",
      skipped: {
        path: path_2,
        reason: "outside_root"
      }
    };
    let f = await tn(a, iu());
    try {
      let p = await f.stat({
        bigint: !0
      });
      if (p.dev !== u.dev || p.ino !== u.ino) return {
        kind: "skip",
        skipped: {
          path: path_2,
          reason: "changed"
        }
      };
      if (p.size > s) return {
        kind: "skip",
        skipped: {
          path: path_2,
          reason: "too_large"
        }
      };
      return await et(f, p, path_2);
    } finally {
      await f.close();
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
async function cn(e, path_3, r) {
  let o = await e.open(path_3, iu());
  try {
    let s = await o.stat({
        bigint: !0
      }),
      reason_3 = Qe(s, r);
    if (reason_3 !== null) return {
      kind: "skip",
      skipped: {
        path: path_3,
        reason: reason_3
      }
    };
    return await et(o, s, path_3);
  } finally {
    await o.close();
  }
}
var He = /(^|[\s\][])@(?=((?:[^\s\\]|\\ )+))/g;
function Le(e, n = re, r) {
  let o = e.replace(/\r\n?/g, `
`),
    s = r === void 0 ? n : u => {
      let d = n(u);
      if (!d) r.push(u);
      return d;
    },
    a = lt(o, new RC({
      gfm: !1
    }).lex(o), ut, s);
  return Te(a, n) ? ee(a) : a;
}
var re = () => !1;
function pn(e, n) {
  if (e.type === "code" || e.type === "codespan" || e.type === "escape") return e.raw;
  if (e.type === "html") return mn(e.raw, n);
  let r = [...(e.tokens ?? []), ...(e.items ?? [])];
  if (r.length === 0) return e.type === "text" ? rt(e.raw, n) : e.raw;
  let o = lt(e.raw, r, s => s, n);
  return e.type === "text" ? rt(o, n) : o;
}
function lt(e, n, r, o) {
  let s = "",
    a = 0;
  for (let u of n) {
    let d = e.indexOf(u.raw, a);
    if (d === -1) return s + ut(e.slice(a));
    s += r(e.slice(a, d)) + pn(u, o), a = d + u.raw.length;
  }
  return s + r(e.slice(a));
}
function rt(e, n) {
  return e.replace(He, (r, o, s) => n(pe(s)) ? r : `${o}\\@`);
}
function pe(e) {
  return nt(e, "#").replaceAll("\\ ", " ");
}
function mn(e, n) {
  let r = e.trimStart();
  if (!(r.startsWith("<!--") && r.includes("-->"))) return e;
  let o = [],
    s = "",
    rawStart = 0;
  for (let d of e.matchAll(/<!--[\s\S]*?-->/g)) o.push({
    rawStart: rawStart,
    residueStart: s.length
  }), s += e.slice(rawStart, d.index), rawStart = d.index + d[0].length;
  return o.push({
    rawStart: rawStart,
    residueStart: s.length
  }), s += e.slice(rawStart), [...s.matchAll(He)].filter(item => !n(pe(item[2] ?? ""))).map(item => {
    let f = item.index + (item[1] ?? "").length,
      {
        rawStart: rawStart_2,
        residueStart: residueStart
      } = o.findLast(y => y.residueStart <= f) ?? {
        rawStart: 0,
        residueStart: 0
      };
    return rawStart_2 + (f - residueStart);
  }).reduceRight((acc, item) => `${acc.slice(0, item)}\\${acc.slice(item)}`, e);
}
function ut(e) {
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
  return e.replace(/@/g, (n, r) => Ee(e, r) || /[\p{L}\p{N}]/u.test(e[r - 1] ?? "") ? n : "\\@");
}
function dt(e) {
  return Object.keys(new RC({
    gfm: !1
  }).lex(e).links).length > 0;
}
function ee(e) {
  return e.replace(/@/g, (n, r) => Ee(e, r) ? n : "\\@");
}
function Ee(e, n) {
  let r = 0;
  while (e[n - 1 - r] === "\\") r++;
  return r % 2 === 1;
}
var Re = {
  vettable: !1
};
function Fe(e, n) {
  let r = new RC({
      gfm: !1
    }).lex(n),
    s = [...L(L([n, e]).flatMap(item => [item, item.replace(/\\([[\]])/g, "$1")])).map(item => ot(item, "as_loader")), ...hn(r).map(item => ot(item, "every_at"))],
    spellings = L([...ft(r), ...s.flatMap(item => item.vettable ? item.spellings : [])]);
  return s.every(item => item.vettable) && spellings.length <= Sn ? {
    vettable: !0,
    spellings: spellings
  } : Re;
}
function hn(e) {
  let n = r => r.flatMap(item => {
    if (item.type === "code" || item.type === "codespan") return [];
    if (item.type === "html") {
      let s = item.raw.trimStart();
      return s.startsWith("<!--") && s.includes("-->") ? [item.raw.replace(/<!--[\s\S]*?-->/g, "")] : [];
    }
    return n([...(item.tokens ?? []), ...(item.items ?? [])]);
  });
  return n(e);
}
var ct = 4096,
  yn = 64,
  Sn = 4096,
  bn = 1048576,
  kn = /@(?!@)(?=[^\s\\]|\\ )/g,
  regExp = new RegExp(String.raw`(?:[^\s\\]|\\ ){1,${ct + 1}}`, "y"),
  ve = /[\p{L}\p{N}]/u,
  Rn = /[*_[\]!<`]/g;
function ot(e, n) {
  let r = [],
    o = 0,
    regExp_2 = new RegExp(regExp);
  for (let a of e.matchAll(kn)) {
    if (n === "as_loader" && (ve.test(e[a.index - 1] ?? "") || Ee(e, a.index))) continue;
    regExp_2.lastIndex = a.index + 1;
    let run = regExp_2.exec(e)?.[0] ?? "";
    if (o += run.length, run.length > ct || o > bn) return Re;
    let closers = vn(run);
    if (closers.length > yn) return Re;
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
      let f = pe(item);
      return f === "" || f.startsWith("@") ? [] : [f];
    }))
  };
}
function vn(e) {
  return [...e.matchAll(Rn)].filter(item => item.index > 0 && !Hn(e, item)).map(item => item.index);
}
function Hn(e, n) {
  return n[0] === "_" && ve.test(e[n.index - 1] ?? "") && ve.test(e[n.index + 1] ?? "");
}
function Te(e, n = re) {
  return xe(e).some(item => !n(item));
}
function xe(e) {
  return ft(new RC({
    gfm: !1
  }).lex(e));
}
function ft(e) {
  let n = r => r.flatMap(item => {
    if (item.type === "code" || item.type === "codespan") return [];
    if (item.type === "html") {
      let s = item.raw.trimStart();
      return s.startsWith("<!--") && s.includes("-->") ? at(item.raw.replace(/<!--[\s\S]*?-->/g, "")) : [];
    }
    return [...(item.type === "text" ? at(item.text ?? item.raw) : []), ...n([...(item.tokens ?? []), ...(item.items ?? [])])];
  });
  return n(e);
}
function at(e) {
  return [...e.matchAll(He)].flatMap(item => {
    let r = pe(item[2] ?? "");
    return r.startsWith("./") || r.startsWith("~/") || r.startsWith("/") && r !== "/" || !r.startsWith("@") && !/^[#%^&*()]+/.test(r) && /^[a-zA-Z0-9._-]/.test(r) ? [r] : [];
  });
}
function Ie(e) {
  let o = new RC({
    gfm: !1
  }).lex(`${e}

<!-- ccr-home-probe -->
`).findLast(s => s.type !== "space");
  return !(o?.type === "html" && o.raw.trim() === "<!-- ccr-home-probe -->");
}
function pt(e) {
  return `

<!-- inlined import: ${encodeURI(e)} -->

`;
}
import { join as mt } from "path";
var gt = 4096,
  includeExternal = !0;
async function ht(e, n) {
  if (de()) return t("home inventory: memory files not read in a diskless session; nothing is sent"), null;
  let r = {
      reads: 0
    },
    o = await Ln(e, r, n);
  if (o === null) return null;
  let s = new Map();
  for (let a = o.pop(); a !== void 0; a = o.pop()) {
    let u = `${a.type}\x00${wp(a.path)}`;
    if (s.has(u)) continue;
    if (n?.aborted) return null;
    s.set(u, a);
    let d = await j1(a.path, a.type, new Set(), includeExternal, hgr - 2);
    if (r.reads += d.length, r.reads > gt) return null;
    o.push(...d.filter(item => item.path !== a.path));
  }
  return [...s.values()];
}
async function Ln(e, n, r) {
  let o = (d, f) => () => j1(d, f, new Set(), includeExternal, f === "User" ? 0 : hgr - 1),
    s = (rulesDir, type) => async () => [...(await jue({
      rulesDir: rulesDir,
      type: type,
      processedPaths: new Set(),
      includeExternal: includeExternal,
      conditionalRule: !1
    })), ...(await jue({
      rulesDir: rulesDir,
      type: type,
      processedPaths: new Set(),
      includeExternal: includeExternal,
      conditionalRule: !0
    }))],
    a = [o(i5("Managed"), "Managed"), s(IWe(), "Managed"), o(mt(e, j7), "User"), s(mt(e, uAe), "User")],
    u = [];
  for (let d of a) {
    if (r?.aborted) return null;
    let f = await d();
    if (n.reads += f.length, n.reads > gt) return null;
    u.push(...f);
  }
  return u;
}
var oe = ".md",
  Tn = 50000,
  Ht = j === he.sep ? he : te,
  xn = j === he.sep ? /[\\/]+/ : /\/+/;
function ce(e, n) {
  return (n === "/" ? e : e.split(n).join("/")).normalize("NFC");
}
function G(e, n = Ht) {
  return e === ".." || e.startsWith(`..${n.sep}`) || n.isAbsolute(e);
}
function In(e, n, r = Ht) {
  let o = r.relative(e, n);
  if (r.isAbsolute(o)) return null;
  let s = r.resolve(e, o),
    a = r.resolve(n);
  return (r === he ? s.toLowerCase() === a.toLowerCase() : s === a) ? o : null;
}
async function W(e) {
  if (NA(e)) throw Error("realpath would misread a backslash in the path");
  return En(e);
}
function yt(resolvedPath) {
  return NA(resolvedPath) ? {
    resolvedPath: resolvedPath,
    isSymlink: !1,
    isCanonical: !1
  } : _o(se(), resolvedPath);
}
var An = 4096;
async function $e(e, n, r, o) {
  let realPath;
  try {
    realPath = await W(n);
  } catch {
    return "unresolvable";
  }
  let nativeRel = K(e.realConfigHome, realPath);
  if (nativeRel === "" || G(nativeRel)) return "outside";
  let rel = ce(nativeRel, j);
  return {
    realPath: realPath,
    nativeRel: nativeRel,
    rel: rel,
    lexicalRel: r ?? rel,
    rawRels: L([Lt(nativeRel), ...(o === null ? [] : [o])])
  };
}
async function Mn(e, n) {
  try {
    let r = await W(n);
    return Se(e, r) || !G(K(e.realConfigHome, r));
  } catch {
    return !0;
  }
}
function Se(e, n) {
  return !G(K(n, e.realConfigHome));
}
function Lt(e) {
  return j === "/" ? e : e.split(j).join("/");
}
function Pt(e, n) {
  let r = [e.configHome, e.realConfigHome].map(item => K(item, n)).find(item => item !== "" && !G(item));
  return r === void 0 ? null : {
    rel: ce(r, j),
    raw: Lt(r)
  };
}
function Ke(e) {
  let n = vl(nt(e, "/"));
  return mc(e) && e.includes("/") && ue(e).toLowerCase() === oe && !rue(e) && !Un.test(e) && !cLn.has(n) && !n.startsWith("agent-memory") && !Cn(e) && !Et(e);
}
function Et(e) {
  let n = vl(nt(e, "/"));
  return n === vl(uAe) || n === vl(n4e);
}
function Cn(e) {
  let [n, r] = e.split("/");
  return vl(n ?? "") === "skills" && vl(r ?? "") === Mj;
}
var Un = /~\d/,
  Bn = 32;
async function On(e) {
  let n = e,
    r = new Set();
  for (let o = 0; o < Bn; o += 1) {
    if (r.has(n)) return !1;
    r.add(n);
    let s;
    try {
      s = await Pn(n);
    } catch (error) {
      return St(error);
    }
    if (s.includes("\uFFFD")) throw Error("link body is not valid UTF-8");
    let a;
    try {
      a = Fn(await W(vt(n)), s);
    } catch (error) {
      if (k(error) === "ENAMETOOLONG") throw error;
      return St(error);
    }
    if ($n(s)) throw Error("link body climbs out of a directory it entered");
    if (Ds(s) || gI(a)) return !0;
    try {
      if (!(await Oe(a)).isSymbolicLink()) return !1;
    } catch (error) {
      if (!B(error) || k(error) === "ENAMETOOLONG" && !Dn(s)) throw error;
      return !1;
    }
    n = a;
  }
  throw Error("link chain too long to vet");
}
function St(e) {
  if (B(e) || k(e) === "EINVAL") return !0;
  throw e;
}
function B(e) {
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
    return B(error);
  }
}
async function Nn(e) {
  try {
    return !(await Ne(e)).isDirectory();
  } catch (error) {
    return B(error);
  }
}
function $n(e) {
  let n = !1;
  for (let r of e.split(xn)) if (r === "..") {
    if (n) return !0;
  } else if (r !== "" && r !== ".") n = !0;
  return !1;
}
var le = {
  ok: !1,
  reason: "aborted"
};
async function Tt({
  configHome: configHome,
  isUserSettingsFileSendable: isUserSettingsFileSendable,
  readRules: readRules,
  createFilter: createFilter,
  signal: signal,
  aliasDirectories: a = An,
  settingsToCloud = BH
}) {
  if (de()) return {
    ok: !1,
    reason: "diskless"
  };
  if (!(await settingsToCloud().catch(() => !1))) return {
    ok: !1,
    reason: "flag_off"
  };
  try {
    if (!isUserSettingsFileSendable || !readRules.complete) return Ae({
      rulesUnreadable: !0
    });
    if (!nn("userSettings")) return Ae({
      rulesUnreadable: !1
    });
    let d;
    try {
      d = await W(configHome);
    } catch (error) {
      if (B(error) && (await Ft(configHome))) return Ae({
        rulesUnreadable: !1
      });
      return {
        ok: !1,
        reason: "alias_unreadable"
      };
    }
    let f = {
      configHome: configHome,
      realConfigHome: d,
      aliasBudget: {
        left: a
      },
      giveUp: null,
      topLevelLinks: []
    };
    f.topLevelLinks = await Wn(f);
    let p = createFilter(configHome, {
        realRoot: d,
        readRules: readRules
      }),
      g = {
        held: new Map()
      },
      y = new Set(),
      S = new Set(),
      E = new Map(),
      H = new Map(),
      P = OC() ? {
        files: [],
        leftBehind: []
      } : await Gn(f);
    if (f.giveUp === null) {
      let v = await ht(configHome, signal);
      if (N0(signal)) return le;
      if (v === null) return {
        ok: !1,
        reason: "too_many_links"
      };
      for (let T of v) {
        if (N0(signal)) return le;
        await We(f, p, T, H);
      }
    }
    let I = await Xn(f, p, P.files, g, y, S, E, H, signal);
    if (I === null) return le;
    let x = xr("outputStyles") ? {
        files: [],
        leftBehind: []
      } : await It(f, n4e),
      h = await qn(f, p, x.files, g, y, S, H);
    if (f.giveUp !== null) return {
      ok: !1,
      reason: f.giveUp
    };
    let m = [...g.held.values()],
      C = new Set(),
      w = new Map();
    for (let v of [...m.filter(item => item.kind === "output_style"), ...m.filter(item => item.kind !== "output_style")]) {
      if (N0(signal)) return le;
      let T = await Zn(f, p, v, H, C, S);
      if (T.entry === null) C.add(v.location.realPath);
      w.set(v, T);
    }
    let R = m.flatMap(item => w.get(item) ?? []),
      {
        kept: kept,
        droppedOverCap: droppedOverCap
      } = Las(R.flatMap(({
        entry: entry,
        foldedIncludes: foldedIncludes
      }) => entry === null ? [] : [{
        content: entry.content,
        entry: entry,
        foldedIncludes: foldedIncludes
      }]).toSorted((v, T) => Kn(v.entry, T.entry))),
      D = [...E].filter(([v]) => !y.has(v) && !S.has(v)).map(([v, T]) => H.get(v) ?? T),
      leftBehind = [...P.leftBehind, ...I, ...D, ...x.leftBehind, ...h, ...R.flatMap(item => item.leftBehind), ...droppedOverCap.flatMap(({
        entry: entry_2,
        foldedIncludes: foldedIncludes_2
      }) => [{
        path: entry_2.path,
        reason: "over_cap"
      }, ...foldedIncludes_2.map(ae => ({
        path: ae,
        reason: "include_not_sent"
      }))])],
      entries = kept.map(({
        entry: entry_3
      }) => entry_3);
    return {
      ok: !0,
      inventory: {
        entries: entries,
        summary: xt(entries, leftBehind),
        leftBehind: leftBehind
      }
    };
  } catch (error) {
    if (N0(signal)) return le;
    return t(`home inventory: gave the run up \u2014 ${error instanceof Error ? error.message : String(error)}`), {
      ok: !1,
      reason: "alias_unreadable"
    };
  }
}
function Ae({
  rulesUnreadable: rulesUnreadable
}) {
  return {
    ok: !0,
    inventory: {
      entries: [],
      summary: {
        ...xt([], []),
        rulesUnreadable: rulesUnreadable
      },
      leftBehind: []
    }
  };
}
function xt(e, n) {
  return {
    withheldSensitive: Y(n, "sensitive"),
    withheldReadDenied: Y(n, "read_denied"),
    rulesUnreadable: !1,
    includesNotSent: Y(n, "include_not_sent"),
    symlinksNotSent: Y(n, "symlink_not_sent"),
    notDestinations: Y(n, "not_destination"),
    unreadable: Y(n, "unreadable"),
    overCap: Y(n, "over_cap"),
    undefusable: Y(n, "undefusable"),
    inlinedImports: e.reduce((acc, item) => acc + item.folded.length, 0),
    defusedImports: e.reduce((acc, item) => acc + item.defused, 0)
  };
}
function Y(e, n) {
  return F(e, r => r.reason === n);
}
var _t = {
  claude_md: 0,
  rule: 1,
  output_style: 2
};
function Kn(e, n) {
  return _t[e.kind] - _t[n.kind] || e.content.length - n.content.length || (e.path < n.path ? -1 : e.path > n.path ? 1 : 0);
}
async function Gn(e) {
  let path_4 = ne(e.configHome, j7),
    r = await At(e, path_4),
    o = await It(e, uAe);
  if (r === null) return o;
  let s = r.isSymlink ? await fe(e, path_4) : void 0;
  if (s?.isDirectory() === !0 && (await Mn(e, path_4))) e.giveUp ??= "alias_unreadable";
  if (s === null || s !== void 0 && !s.isFile()) return {
    files: o.files,
    leftBehind: [{
      path: j7,
      reason: "symlink_not_sent"
    }, ...o.leftBehind]
  };
  return {
    files: [{
      path: path_4,
      lexicalRel: j7,
      rawLexicalRel: j7,
      viaSymlink: r.isSymlink,
      aliasOnly: !1
    }, ...o.files],
    leftBehind: o.leftBehind
  };
}
async function It(e, n) {
  let path_5 = ne(e.configHome, n),
    o = await At(e, path_5);
  if (o === null) return {
    files: [],
    leftBehind: []
  };
  if (o.isSymlink) {
    let s = await fe(e, path_5);
    if (s === null || !s.isDirectory()) return {
      files: s !== null && s.isFile() ? [{
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
async function Wn(e) {
  let n;
  try {
    n = await De(e.configHome, {
      withFileTypes: !0
    });
  } catch (error) {
    if (!B(error)) e.giveUp ??= "alias_unreadable";
    return [];
  }
  let r = [];
  for (let o of n) {
    let s = ne(e.configHome, o.name),
      a = await je(e, s, o);
    if (a === null || !a.isSymbolicLink()) continue;
    if ((await fe(e, s)) === null) continue;
    let u;
    try {
      u = await W(s);
    } catch {
      e.giveUp ??= "alias_unreadable";
      continue;
    }
    if (Se(e, u)) {
      e.giveUp ??= "alias_unreadable";
      continue;
    }
    let d = K(e.realConfigHome, u);
    if (!G(d)) r.push({
      name: o.name.normalize("NFC"),
      targetRel: ce(d, j)
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
    if (!B(error)) e.giveUp ??= "alias_unreadable";
    return null;
  }
}
async function Mt(e, n, r, o, s) {
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
    let g = await W(n);
    if (s.has(g)) return {
      files: await Ue(e, n, r, new Set([g])),
      leftBehind: []
    };
    let y = K(e.realConfigHome, g);
    if (Se(e, g)) return e.giveUp ??= "alias_unreadable", u;
    if (G(y)) return u;
    let S = `${ce(y, j)}/x.md`;
    if (o && pAe(S) === null) return {
      files: Ke(S) ? await Ue(e, n, r, new Set([g])) : [],
      leftBehind: u.leftBehind
    };
    s.add(g), d = await De(n, {
      withFileTypes: !0
    });
  } catch (error) {
    if (o || !B(error) || !(await Nn(n))) e.giveUp ??= "alias_unreadable";
    return {
      files: [],
      leftBehind: []
    };
  }
  let files = [],
    leftBehind_2 = [];
  for (let g of d.toSorted(Ct)) {
    let path_7 = ne(n, g.name),
      rawLexicalRel = [...r, g.name].join("/"),
      E = rawLexicalRel.normalize("NFC"),
      H = await je(e, path_7, g);
    if (H === null) continue;
    let P = H.isSymbolicLink(),
      I = g.name.endsWith(oe),
      x = P ? await fe(e, path_7) : H;
    if (x === null) {
      if (ue(g.name).toLowerCase() === oe) leftBehind_2.push({
        path: E,
        reason: "symlink_not_sent"
      });
    } else if (x.isDirectory()) {
      let h = await Mt(e, path_7, [...r, g.name], o || P, s);
      files.push(...h.files), leftBehind_2.push(...h.leftBehind);
    } else if (x.isFile() && (I || P || o && ue(g.name).toLowerCase() === oe)) files.push({
      path: path_7,
      lexicalRel: E,
      rawLexicalRel: rawLexicalRel,
      viaSymlink: o || P,
      aliasOnly: !I
    });
  }
  return {
    files: files,
    leftBehind: leftBehind_2
  };
}
async function Ue(e, n, r, o) {
  let s;
  try {
    s = await De(n, {
      withFileTypes: !0
    });
  } catch {
    return e.giveUp ??= "alias_unreadable", [];
  }
  let a = [];
  for (let u of s.toSorted(Ct)) {
    let path_8 = ne(n, u.name),
      rawLexicalRel_2 = [...r, u.name].join("/"),
      p = await je(e, path_8, u);
    if (p === null) continue;
    let viaSymlink = p.isSymbolicLink(),
      y = viaSymlink ? await fe(e, path_8) : p;
    if (y === null) continue;
    if (y.isDirectory()) {
      let S = await Vn(e, path_8, o);
      if (S !== null) a.push(...(await Ue(e, path_8, [...r, u.name], new Set([...o, S]))));
    } else if (y.isFile() && (viaSymlink || ue(u.name).toLowerCase() === oe)) a.push({
      path: path_8,
      lexicalRel: rawLexicalRel_2.normalize("NFC"),
      rawLexicalRel: rawLexicalRel_2,
      viaSymlink: viaSymlink,
      aliasOnly: !0
    });
  }
  return a;
}
async function Vn(e, n, r) {
  let o;
  try {
    o = await W(n);
  } catch {
    return e.giveUp ??= "alias_unreadable", null;
  }
  let s = K(e.realConfigHome, o);
  if (Se(e, o)) return e.giveUp ??= "alias_unreadable", null;
  if (r.has(o) || G(s)) return null;
  let a = `${ce(s, j)}/x.md`;
  if (pAe(a) === null && !Ke(a)) return null;
  if (e.aliasBudget.left <= 0) return e.giveUp ??= "too_many_links", null;
  return e.aliasBudget.left -= 1, o;
}
async function je(e, n, r) {
  if (r.isSymbolicLink() || r.isFile() || r.isDirectory() || r.isFIFO() || r.isSocket() || r.isCharacterDevice() || r.isBlockDevice()) return r;
  try {
    return await Oe(n);
  } catch (error) {
    if (!B(error)) e.giveUp ??= "alias_unreadable";
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
    if (!B(error)) e.giveUp ??= "alias_unreadable";
    return null;
  }
}
function Ct(e, n) {
  return e.name < n.name ? -1 : e.name > n.name ? 1 : 0;
}
function q(e, n, r) {
  if (r !== null || !e.has(n)) e.set(n, r);
}
async function Ut(e, n, r, o, s, a) {
  let location = await $e(e, r.path, r.lexicalRel, r.rawLexicalRel);
  if (r.aliasOnly) {
    if (location === "unresolvable") e.giveUp ??= "alias_unreadable";else if (location !== "outside") {
      let p = Z(e, n, location, r.lexicalRel);
      if (p !== null) q(a, location.realPath, p);
    }
    return {
      kind: "attributed"
    };
  }
  if (location === "unresolvable") {
    if (r.viaSymlink) e.giveUp ??= "alias_unreadable";
    return Me(r, r.viaSymlink ? "symlink_not_sent" : "unreadable");
  }
  if (location === "outside") return Me(r, "symlink_not_sent");
  let d = r.viaSymlink ? location.rel : r.lexicalRel,
    f = vst(d);
  if (f === null) {
    let left = r.viaSymlink ? Z(e, n, location, r.lexicalRel) : null;
    if (!r.viaSymlink || left !== null) q(a, location.realPath, left);
    if (s.has(location.realPath)) return {
      kind: "attributed"
    };
    return s.add(location.realPath), left === null ? Me(r, r.viaSymlink ? "symlink_not_sent" : "not_destination") : {
      kind: "refused",
      left: left
    };
  }
  if (o.has(location.realPath)) {
    let p = Z(e, n, location, r.lexicalRel);
    if (p !== null) q(a, location.realPath, p);
    return {
      kind: "attributed"
    };
  }
  return {
    kind: "candidate",
    candidate: {
      ...f,
      location: location,
      imports: [],
      styleVia: new Map()
    }
  };
}
function Me(e, reason_4) {
  return {
    kind: "refused",
    left: {
      path: e.lexicalRel,
      reason: reason_4
    }
  };
}
function Ge(e, n) {
  let r = f3t(n.destination);
  if (e.held.has(r)) return null;
  return e.held.set(r, n), n;
}
async function Xn(e, n, r, o, s, a, u, d, f) {
  let p = [];
  for (let g of r) {
    if (N0(f)) return null;
    let y = await Ut(e, n, g, s, a, d);
    if (y.kind === "refused") p.push(y.left);
    if (y.kind !== "candidate") continue;
    let {
        candidate: candidate
      } = y,
      E = g.lexicalRel === j7 ? g.path : candidate.location.realPath,
      H = await j1(E, "User", new Set(), !0);
    if (H.length === 0) {
      let P = await Be(e, candidate.location);
      if (P.kind === "read" && P.content.includes(0)) p.push({
        path: g.lexicalRel,
        reason: "unreadable"
      });
      continue;
    }
    if (Ge(o, candidate) === null) {
      for (let P of H) await We(e, n, P, d);
      p.push({
        path: g.lexicalRel,
        reason: "not_destination"
      });
      continue;
    }
    s.add(candidate.location.realPath), p.push(...(await Yn(e, n, candidate, H, o, s, a, u, d)));
  }
  return p;
}
function Ce(e) {
  return e.globs === void 0 ? "" : _(e.globs.toSorted());
}
async function Yn(e, n, r, o, s, a, u, d, f) {
  let p = [],
    g = o.find(item => item.parent === void 0),
    y = o.filter(item => item !== g),
    S = new Map(),
    E = (candidate_2, m) => ({
      candidate: candidate_2,
      isStyle: candidate_2.kind === "output_style",
      withheld: bt(e, n, candidate_2.location) !== null || f.get(candidate_2.location.realPath) != null,
      scope: Ce(m)
    }),
    H = new Map(g === void 0 ? [] : [[g.path, E(r, g)]]),
    P = new Map(),
    I = (h, m) => {
      if (!u.has(h)) u.add(h), P.set(h, p.push(m) - 1);
    },
    x = (h, m) => {
      let C = P.get(h);
      if (C === void 0) I(h, m);else p[C] = m;
    };
  for (let h of o) await We(e, n, h, f);
  for (let h of y) {
    let m = H.get(h.parent ?? "");
    if (m === void 0) continue;
    let C = Pt(e, h.path),
      location_2 = await $e(e, h.path, C?.rel ?? null, C?.raw ?? null);
    if (location_2 === "outside" || location_2 === "unresolvable") {
      I(h.path, {
        path: C?.rel ?? h.path,
        reason: "include_not_sent"
      });
      continue;
    }
    if (a.has(location_2.realPath) || f.has(location_2.realPath)) {
      let A = f.get(location_2.realPath) ?? Z(e, n, location_2, location_2.lexicalRel);
      if (A !== null) q(f, location_2.realPath, A), x(location_2.realPath, A);
      continue;
    }
    let R = vst(location_2.rel);
    if (R !== null) {
      let A = Ge(s, {
        ...R,
        location: location_2,
        imports: [],
        styleVia: new Map()
      });
      if (A === null) {
        I(location_2.realPath, {
          path: location_2.lexicalRel,
          reason: "not_destination"
        });
        continue;
      }
      if (a.add(location_2.realPath), A.kind === "output_style") {
        S.set(h.path, location_2.realPath);
        let v = h.parent === void 0 ? void 0 : S.get(h.parent);
        if (v !== void 0) m.candidate.styleVia.set(location_2.realPath, v);
        if (!m.withheld && !m.isStyle && m.scope === Ce(h)) m.candidate.imports.push({
          location: location_2,
          via: v ?? null,
          asStyle: !0
        });
      }
      H.set(h.path, A.kind === "output_style" ? {
        ...m,
        withheld: m.withheld || bt(e, n, A.location) !== null
      } : E(A, h));
      continue;
    }
    if (m.withheld) continue;
    let M = L([location_2.rel, location_2.lexicalRel, ...location_2.rawRels]).every(Ke),
      U = M ? Z(e, n, location_2, location_2.lexicalRel) : null,
      D = U?.reason ?? null,
      X = Et(location_2.rel) && ue(location_2.rel).toLowerCase() === oe;
    if (U !== null || X) q(f, location_2.realPath, U);
    if (!M || D !== null) {
      I(location_2.realPath, {
        path: location_2.lexicalRel,
        reason: D ?? (X ? "not_destination" : "include_not_sent")
      });
      continue;
    }
    if (m.isStyle || m.scope !== Ce(h)) {
      d.set(location_2.realPath, {
        path: location_2.lexicalRel,
        reason: "include_not_sent"
      });
      continue;
    }
    m.candidate.imports.push({
      location: location_2,
      via: h.parent === void 0 ? null : S.get(h.parent) ?? null
    }), S.set(h.path, location_2.realPath), a.add(location_2.realPath), H.set(h.path, m);
  }
  return p;
}
async function We(e, n, r, o) {
  if (NA(r.path)) {
    e.giveUp ??= "alias_unreadable";
    return;
  }
  let s = vt(yt(r.path).resolvedPath),
    a = Fe(r.content, Q(r.rawContent ?? r.content).body);
  if (!a.vettable) {
    e.giveUp ??= "alias_unreadable";
    return;
  }
  for (let path_9 of a.spellings) {
    if (path_9.includes("\x00")) continue;
    let d = it(path_9, s);
    if ((jn(path_9) || jn(d)) && G(K(e.configHome, d))) continue;
    let f = yt(d);
    if (!f.isCanonical) {
      if (!f.isSymlink && !(await Jn(d))) e.giveUp ??= "alias_unreadable";
      continue;
    }
    let p = Pt(e, d);
    if (p === null) {
      let resolvedPath_2 = f.resolvedPath;
      if (o.get(resolvedPath_2) != null || G(K(e.realConfigHome, resolvedPath_2))) continue;
      let E = In(e.configHome, d);
      if (E === null) {
        e.giveUp ??= "alias_unreadable";
        continue;
      }
      switch (bBn(d) || bBn(resolvedPath_2) ? "sensitive" : n(E, !0)) {
        case "sensitive":
        case "sensitive_tracked":
        case "host_config":
          q(o, resolvedPath_2, {
            path: path_9,
            reason: "sensitive"
          });
          break;
        case "read_denied":
        case "rules_unreadable":
          q(o, resolvedPath_2, {
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
    let g = await $e(e, d, p.rel, p.raw);
    if (g === "unresolvable") {
      e.giveUp ??= "alias_unreadable";
      continue;
    }
    if (g === "outside" || o.get(g.realPath) != null) continue;
    let y = Z(e, n, g, g.lexicalRel);
    if (y !== null) q(o, g.realPath, y);
  }
}
async function Jn(e) {
  if (jn(e) && !Qa(e) || Na(e)) return !0;
  try {
    return await W(e), !1;
  } catch (error) {
    return B(error) && (await Ft(e));
  }
}
async function qn(e, n, r, o, s, a, u) {
  let d = [];
  for (let f of r) {
    let p = await Ut(e, n, f, s, a, u);
    if (p.kind === "refused") d.push(p.left);else if (p.kind === "candidate") if (p.candidate.kind !== "output_style") d.push({
      path: f.lexicalRel,
      reason: "symlink_not_sent"
    });else if (Ge(o, p.candidate) === null) d.push({
      path: f.lexicalRel,
      reason: "not_destination"
    });else s.add(p.candidate.location.realPath);
  }
  return d;
}
function bt(e, n, r) {
  return Bt(e, n, r)?.reason ?? null;
}
function Z(e, n, r, o) {
  let s = Bt(e, n, r);
  return s === null ? null : {
    path: s.alias ?? o,
    reason: s.reason
  };
}
function Bt(e, n, r) {
  let o = L([r.lexicalRel, r.rel, ...r.rawRels]),
    s = L(o.flatMap(item => zn(e, item))).filter(item => !o.includes(item)),
    a = [...o, ...s];
  if ([...a, ...a.map(item => ne(e.configHome, ...item.split("/"))), r.realPath].some(item => bBn(item))) return {
    reason: "sensitive",
    alias: null
  };
  for (let d of a) {
    let alias = s.includes(d) ? d : null;
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
async function Zn(e, n, r, o, s, a) {
  let u = Z(e, n, r.location, r.destination),
    d = o.get(r.location.realPath) ?? null;
  if (u !== null) return J(r, u.reason, a, u.path);
  if (d !== null) return J(r, d.reason, a, d.path);
  if (!(await wt(e, r.location))) return J(r, "unreadable", a);
  let f = await Be(e, r.location);
  if (f.kind === "skip") return J(r, or(f.skipped.reason), a);
  if (f.content.length > $oe) return J(r, "over_cap", a);
  let p = f.content.toString("utf8");
  if (Rbe(p)) {
    let R = J(r, "credential", a);
    return {
      ...R,
      leftBehind: R.leftBehind.map(item => item.reason === "credential" ? {
        ...item,
        ...Rt(p, 0)
      } : item)
    };
  }
  let g = r.kind === "output_style" ? {
      content: f.content,
      defusedPaths: []
    } : Qn(r.destination, f.content, r.imports.length > 0),
    y = [g.content],
    folded = [],
    foldedIncludes_3 = [],
    H = g.content.length,
    leftBehind_3 = [],
    I = r.imports.length > 0 && Ie(Q(g.content.toString("utf8")).body),
    x = new Set(s);
  for (let {
    location: location_3,
    via: via,
    asStyle: asStyle
  } of r.imports) {
    let D = Qt => {
        if (!asStyle) leftBehind_3.push(Qt);
      },
      X = Z(e, n, location_3, location_3.lexicalRel);
    if (X !== null || o.has(location_3.realPath) || x.has(location_3.realPath) || via !== null && nr(via, x, r.styleVia) || I) {
      if (x.add(location_3.realPath), !a.has(location_3.realPath)) a.add(location_3.realPath), D(X ?? o.get(location_3.realPath) ?? {
        path: location_3.lexicalRel,
        reason: "include_not_sent"
      });
      continue;
    }
    let A = (await wt(e, location_3)) ? await Be(e, location_3) : null;
    if (A === null || A.kind === "skip") {
      x.add(location_3.realPath), D({
        path: location_3.lexicalRel,
        reason: "include_not_sent"
      });
      continue;
    }
    let {
      head: head,
      body: body
    } = Q(A.content.toString("utf8"));
    if (Ie(body) || dt(body)) {
      x.add(location_3.realPath), D({
        path: location_3.lexicalRel,
        reason: "include_not_sent"
      });
      continue;
    }
    let ae = Buffer.from(pt(location_3.rel) + Le(body));
    if (H + ae.length > $oe) {
      x.add(location_3.realPath), D({
        path: location_3.lexicalRel,
        reason: "over_cap"
      });
      continue;
    }
    if (Rbe(body)) {
      x.add(location_3.realPath), D({
        path: location_3.lexicalRel,
        reason: "credential",
        ...Rt(body, $t(head, `
`))
      });
      continue;
    }
    if (y.push(ae), folded.push(location_3.lexicalRel), !asStyle) foldedIncludes_3.push(location_3.lexicalRel);
    H += ae.length;
  }
  let h = Buffer.concat(y),
    content_2 = r.kind !== "output_style" && y.length > 1 && er(g.content, h, r.destination) ? tr(h) : h;
  if (r.kind !== "output_style" && content_2 !== h && ye(content_2, re)) return J(r, "undefusable", a);
  if (!content_2.equals(f.content) && Rbe(content_2.toString("utf8"))) {
    let R = J(r, "credential", a),
      M = new Set(leftBehind_3.map(item => item.path));
    return {
      ...R,
      leftBehind: [...R.leftBehind.filter(item => !M.has(item.path)), ...leftBehind_3]
    };
  }
  let C = new Set(folded),
    defused = F(g.defusedPaths, R => !C.has(te.normalize(te.join(te.dirname(r.destination), R)).normalize("NFC")));
  return {
    entry: {
      path: r.destination,
      kind: r.kind,
      content: content_2,
      sha256: st(content_2),
      folded: folded,
      defused: defused
    },
    foldedIncludes: foldedIncludes_3,
    leftBehind: leftBehind_3
  };
}
function Qn(e, content_3, r) {
  let o = I => Ot(e, I),
    s = content_3.toString("utf8").replace(/\r\n?/g, `
`),
    a = Q(s),
    head_2 = a.head,
    d = head_2 !== "" && s.startsWith("\uFEFF") ? "\uFEFF" : "",
    f = r && head_2 === "" && /^\uFEFF?---\s*\n/.test(s) ? `
` : "",
    p = f + d + head_2,
    g = a.body,
    defusedPaths = [],
    S = Le(g, o, defusedPaths),
    E = S === g && f === "" ? {
      content: content_3,
      defusedPaths: []
    } : {
      content: Buffer.from(p + S),
      defusedPaths: defusedPaths
    };
  if (E.content !== content_3 && Q(content_3.toString("utf8")).head === "" !== (head_2 === "")) return {
    content: Buffer.from(ee(s)),
    defusedPaths: kt(g, o)
  };
  if (!ye(E.content, o)) return E;
  let defusedPaths_2 = kt(g, o),
    content_4 = Buffer.from(p + ee(g));
  return ye(content_4, re) ? {
    content: Buffer.from(f + ee(s)),
    defusedPaths: defusedPaths_2
  } : {
    content: content_4,
    defusedPaths: defusedPaths_2
  };
}
function kt(e, n) {
  let r = Fe(e, e);
  return r.vettable ? r.spellings.filter(item => !n(item)) : [];
}
function er(e, n, r) {
  let o = u => Ot(r, u),
    s = u => xe(Q(u.toString("utf8")).body),
    a = s(n);
  return a.some(item => !o(item)) || F(a, o) > F(s(e), o);
}
function tr(e) {
  let n = e.toString("utf8"),
    {
      head: head_3,
      body: body_2
    } = Q(n),
    s = head_3 !== "" && n.startsWith("\uFEFF") ? "\uFEFF" : "",
    a = Buffer.from(s + head_3 + ee(body_2));
  return ye(a, re) ? Buffer.from(ee(n)) : a;
}
function ye(e, n) {
  return Te(Q(e.toString("utf8")).body, n);
}
function Q(body_3) {
  let n = body_3.startsWith("\uFEFF") ? body_3.slice(1) : body_3,
    head_4 = HE.exec(n)?.[0];
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
  let r = te.normalize(te.join(te.dirname(e), n)),
    o = r.startsWith("../") ? null : pAe(r);
  return o === "claude_md" || o === "rule";
}
function nr(e, n, r) {
  let o = new Set();
  for (let s = e; s !== void 0 && !o.has(s); s = r.get(s)) {
    if (n.has(s)) return !0;
    o.add(s);
  }
  return !1;
}
async function wt(e, n) {
  try {
    return (await W(ne(e.realConfigHome, n.nativeRel))) === n.realPath;
  } catch {
    return !1;
  }
}
function Rt(e, n) {
  let r = e.split(`
`),
    o = r.length > Tn ? -1 : r.findIndex(item => Rbe(item));
  return o === -1 ? {} : {
    line: n + o + 1
  };
}
function J(e, reason_5, r, path_10 = e.destination) {
  let s = [{
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
  } of s) if (!r.has(realPath_2)) r.add(realPath_2), leftBehind_4.push(row);
  return {
    entry: null,
    foldedIncludes: [],
    leftBehind: leftBehind_4
  };
}
function Be(e, n) {
  return tt(e.realConfigHome, e.realConfigHome, n.nativeRel);
}
function or(e) {
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
import { readdir as ir } from "fs/promises";
import { isAbsolute as sr, join as ie, relative as ar, sep as lr } from "path";
var z = {
  covers: "all"
};
function _e(e) {
  if (!fto(e)) return {
    covers: "matchers",
    matchers: []
  };
  let n = jt(e);
  if (!Array.isArray(n)) return z;
  let matchers = [];
  for (let o of n) {
    let s = N(o) ? o.matcher : void 0;
    if (typeof s !== "string") return z;
    if (s.trim() === "" || s === "*" || s === ".*") return z;
    matchers.push(s);
  }
  return {
    covers: "matchers",
    matchers: matchers
  };
}
function Kt(e) {
  if (e.covers === "all") return !0;
  let matchers_2 = e.matchers;
  if (matchers_2.length === 0) return !1;
  return r => nE(r) ? matchers_2.some(item => {
    let s = Vuo(item);
    return s === void 0 || s.some(item => X_t(r, item));
  }) : matchers_2.some(item => Guo(item, r));
}
function ur(e) {
  let n = e.filter(fto);
  if (n.length === 0) return;
  let r = n.map(jt);
  return n.find((item, index) => !Array.isArray(r[index])) ?? {
    PreToolUse: r.flatMap(item => Array.isArray(item) ? item : [])
  };
}
function jt(e) {
  return N(e) && Object.hasOwn(e, "PreToolUse") ? e.PreToolUse : void 0;
}
function Gt(e, n) {
  return e.covers === "all" || n.covers === "all" ? z : {
    covers: "matchers",
    matchers: L([...e.matchers, ...n.matchers])
  };
}
function cr({
  sources: sources,
  sourcesIncomplete: sourcesIncomplete,
  processGuard: processGuard,
  plugins: plugins,
  repoEnabledPluginKeys: repoEnabledPluginKeys
}) {
  if (sourcesIncomplete || sources.some(item => !item.read) || plugins === null || plugins.errors.length > 0 || plugins.warnings.some(item => item.type === "project-scope-suppressed-untrusted") || plugins.warnings.some(item => item.type === "plugin-renamed" && (repoEnabledPluginKeys === void 0 || repoEnabledPluginKeys.has(rr(item.source)))) || plugins === null) return z;
  let u = plugins.enabled.filter(item => item.scope === "project" || Oi(item.source) === Pi || item.scope !== "user" && (repoEnabledPluginKeys === void 0 || repoEnabledPluginKeys.has(rr(item.source))));
  if (u.some(item => item.hooksConfig === void 0 && item.manifest.hooks !== void 0)) return z;
  return [processGuard, ...sources.map(item => item.read ? _e(item.hooks) : z), ...u.map(item => _e(item.hooksConfig))].reduce(Gt, {
    covers: "matchers",
    matchers: []
  });
}
function ze(e) {
  return e.some(item => item.severity !== "warning" || item.path === "hooks" || item.path.startsWith("hooks."));
}
function Wt(e, n, settingsToCloud_2 = BH) {
  return {
    sources: sources_2,
    hooksOf: o => {
      if (o === "userSettings" || o === "flagSettings") return;
      if (o === "policySettings") return me(o)?.hooks;
      let s = Je(o).map(we);
      return ur([...s.map(item => item?.hooks), me(o)?.hooks]);
    },
    sourcesIncomplete: () => ze(Bm().errors) || Xe().some(item => ze(zt(item).errors)) || be.some(item => !nn(item)) && pr(),
    processGuard: () => {
      let o = mr(),
        PreToolUse = (n() ?? []).filter(item => item.hooks.length > 0 && !gr(item.skillRoot, o));
      return Gt(_e(DQ()), _e({
        PreToolUse: PreToolUse
      }));
    },
    loadPlugins: async () => {
      if ((await Promise.all(Xe().map(qbt))).some(Boolean)) throw Error("an --add-dir settings file names another host");
      let [o, count] = await Promise.all([rwe(e), nn("projectSettings") ? 0 : fr()]),
        a = count === 0 ? o : {
          ...o,
          warnings: [...o.warnings, {
            type: "project-scope-suppressed-untrusted",
            source: `(unlisted)@${$u}`,
            count: count,
            warning: "project skill directories on disk were not loaded: the project settings source is off for this process"
          }]
        },
        u = new Set(Ye({
          enabledPlugins: {
            ...G9(),
            ...(Bm().settings?.enabledPlugins ?? {})
          }
        })),
        d = Nt().filter(item => !u.has(item)),
        f = be.some(item => !nn(item)) ? a.enabled.filter(item => item.settings?.agent !== void 0) : [];
      return d.length === 0 && f.length === 0 ? a : {
        ...a,
        errors: [...a.errors, ...d.map(p => ({
          type: "generic-error",
          source: p,
          error: "enabled in a settings file this process did not load"
        })), ...f.map(item => ({
          type: "generic-error",
          source: item.source,
          error: "names a main-thread agent this process did not resolve"
        }))]
      };
    },
    repoEnabledPluginKeys: () => new Set([...Nt(), ...Ye(me("policySettings"))].map(rr)),
    settingsToCloud: settingsToCloud_2
  };
}
async function fr() {
  let e = ie(so() ?? ke(), ".claude", "skills");
  if (e === ie(Pe(), "skills")) return 0;
  if (await qbt(e)) return 1;
  return ir(e, {
    withFileTypes: !0
  }).then(n => F(n, r => r.isDirectory() || r.isSymbolicLink()), n => ["ENOENT", "ENOTDIR"].includes(k(n) ?? "") ? 0 : 1);
}
function pr() {
  return Bm().settings?.agent !== void 0 || be.flatMap(item => Je(item).map(we)).some(item => item?.agent !== void 0);
}
var be = sources_2.filter(item => item !== "policySettings" && ef.has(item));
function mr() {
  let e = ie(Pe(), "skills");
  return {
    own: [e, ie(Pe(), "commands"), ULt()],
    synced: ie(e, Mj)
  };
}
function gr(e, n) {
  return e !== void 0 && !Dt(n.synced, e) && n.own.some(item => Dt(item, e));
}
function Dt(e, n) {
  let r = ar(e, n);
  return r !== "" && r.split(lr)[0] !== ".." && !sr(r);
}
function Je(e) {
  return [fn(e), e === "localSettings" ? wh() : void 0].filter(item => item !== void 0);
}
function Xe() {
  return hc().flatMap(item => ["settings.json", "settings.local.json"].map(n => ie(item, ".claude", n)));
}
function we(e) {
  let {
    settings: settings,
    errors: errors
  } = zt(e);
  if (ze(errors)) throw Error("a settings file could not be read");
  return settings;
}
function zt(e) {
  if (gI(e)) throw Error("a settings file names another host");
  return lR(e);
}
function Nt() {
  return [...be.flatMap(item => Je(item).map(we)), ...Xe().map(we)].flatMap(Ye);
}
function Ye(e) {
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
  return cr({
    sources: sources_3,
    sourcesIncomplete: sourcesIncomplete_2,
    processGuard: processGuard_2,
    plugins: plugins_2,
    repoEnabledPluginKeys: repoEnabledPluginKeys_2
  });
}
async function Xt() {
  dr();
  let e = rk("userSettings"),
    n = me("userSettings");
  return e.some(hr) || n === null && (await yr(fn("userSettings"))) ? {
    kind: "broken"
  } : {
    kind: "sendable",
    settings: n ?? {},
    hasLostAnAllowEntry: e.some(Yt)
  };
}
function hr(e) {
  return e.severity !== "warning" || e.path === "permissions" || e.path.startsWith("permissions.") && !Yt(e);
}
function Yt({
  path: path_11
}) {
  return path_11.startsWith("permissions.allow");
}
async function yr(e) {
  try {
    return e !== void 0 && (await se().lstat(e)).isSymbolicLink();
  } catch {
    return !1;
  }
}
var Sr = 3,
  writtenAtMs = 0;
async function ato({
  signal: signal_2,
  storageV5: storageV5,
  sessionPreToolUse = () => {
    return;
  },
  launchConsent: launchConsent,
  now = Date.now,
  hookGuardHere = () => Vt(Wt(storageV5, sessionPreToolUse, Vat(launchConsent).enabled))
} = {}) {
  let u = Vat(launchConsent);
  if (!Qj(u.enabledNow())) return {
    kind: "none",
    reason: "flag_off"
  };
  let d = now(),
    f = await br(signal_2, hookGuardHere, launchConsent, u).catch(p => {
      if (Ve(p) || N0(signal_2)) return {
        kind: "none",
        reason: "aborted"
      };
      return l(p), {
        kind: "none",
        reason: "failed"
      };
    });
  return Jt(f, now() - d), f;
}
async function br(signal_3, n, r, o) {
  if (!cxe(r)) return {
    kind: "none",
    reason: "no_consent"
  };
  if (!Wo().includes("userSettings")) return {
    kind: "none",
    reason: "user_settings_disabled"
  };
  let configHome_2 = Pe(),
    a = await Xt(),
    u = a.kind === "sendable" ? a : null,
    readRules_2 = mXt(),
    [f, p] = await Promise.all([Tt({
      configHome: configHome_2,
      isUserSettingsFileSendable: u !== null,
      readRules: readRules_2,
      createFilter: createFilter_2,
      signal: signal_3,
      settingsToCloud: o.enabled
    }), n().catch(() => ({
      covers: "all"
    }))]);
  if (i("tengu_home_seed_hook_guard", {
    kind: b(p.covers === "all" ? "all" : p.matchers.length > 0 ? "matchers" : "none"),
    matcher_count: p.covers === "all" ? 0 : p.matchers.length,
    allow_entry_lost_at_parse: u?.hasLostAnAllowEntry ?? !1
  }), N0(signal_3) || !f.ok && f.reason === "aborted") return {
    kind: "none",
    reason: "aborted"
  };
  if (!f.ok) return f.reason === "flag_off" ? {
    kind: "none",
    reason: "flag_off"
  } : {
    kind: "none",
    reason: "home_unvettable",
    cause: f.reason === "too_many_links" ? f.reason : "alias_unreadable",
    configHome: configHome_2
  };
  let settings_2 = EOn(u?.settings ?? null, {
    preToolUseHookActiveHere: Kt(p),
    hasLostAnAllowEntryAtParse: u?.hasLostAnAllowEntry ?? !1,
    settingsToCloud: o.enabledNow
  });
  return kr({
    inventory: f.inventory,
    settings: settings_2,
    configHome: configHome_2,
    unreadableSettingsFiles: (readRules_2.unreadableSettingsFiles ?? []).map(item => bv() !== void 0 && item === LA() ? "--settings (inline JSON)" : item),
    writtenAtMs: writtenAtMs
  });
}
function kr({
  inventory: inventory,
  settings: settings_3,
  configHome: configHome_3,
  unreadableSettingsFiles: unreadableSettingsFiles,
  writtenAtMs: writtenAtMs_2
}) {
  let a = settings_3.document,
    summary = vr(inventory, settings_3),
    d = {
      summary: summary,
      leftBehind: inventory.leftBehind,
      unreadable: inventory.summary.unreadable,
      settings: a === null ? settings_3.reason : "sent",
      configHome: configHome_3
    };
  if (inventory.summary.rulesUnreadable) return {
    kind: "empty",
    reason: "rules_unreadable",
    unreadableSettingsFiles: unreadableSettingsFiles,
    ...d,
    settings: a === null ? settings_3.reason : "nothing_to_send"
  };
  if (inventory.entries.length === 0 && a === null) return {
    kind: "empty",
    reason: "nothing_to_send",
    ...d
  };
  return {
    kind: "ready",
    pack: tRt({
      generation: 1,
      writtenAtMs: writtenAtMs_2,
      files: inventory.entries.map(item => Das(item.path, item.content)),
      settings: a,
      summary: summary
    }),
    description: wr(inventory, a),
    ...d
  };
}
function wr(e, n) {
  return {
    claudeMd: e.entries.some(item => item.kind === "claude_md"),
    rules: F(e.entries, r => r.kind === "rule"),
    outputStyles: F(e.entries, r => r.kind === "output_style"),
    inlinedImports: e.summary.inlinedImports,
    settingsKeys: n === null ? [] : Rr(n),
    permissionRules: (n?.permissions?.allow?.length ?? 0) + (n?.permissions?.deny?.length ?? 0) + (n?.permissions?.ask?.length ?? 0)
  };
}
function Rr(e) {
  return Object.keys(qt).filter(item => e[item] !== void 0);
}
function vr(e, n) {
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
var pur = {
  kind: "none",
  reason: "self_hosted_runner"
};
function lto() {
  Jt(pur, 0);
}
function Jt(e, duration_ms) {
  if (e.kind === "none") {
    i("tengu_home_seed_plan", {
      outcome: c(e.reason),
      cause: e.reason === "home_unvettable" ? c(e.cause) : void 0,
      duration_ms: duration_ms
    });
    return;
  }
  let {
      summary: summary_2
    } = e,
    o = mur(e.leftBehind),
    s = {
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
      claude_md_link_not_sent: e.leftBehind.some(item => item.reason === "symlink_not_sent" && item.path === j7),
      not_destinations: summary_2.notDestinations,
      over_cap: summary_2.overCap,
      unreadable: e.unreadable,
      duration_ms: duration_ms
    };
  if (e.kind === "empty") {
    i("tengu_home_seed_plan", {
      outcome: c(e.reason),
      settings: c(e.settings),
      settings_files_in_error: e.reason === "rules_unreadable" ? e.unreadableSettingsFiles.length : void 0,
      ...s
    });
    return;
  }
  let {
    description: description
  } = e;
  i("tengu_home_seed_plan", {
    outcome: b("ready"),
    settings: c(e.settings),
    files: description.rules + description.outputStyles + (description.claudeMd ? 1 : 0),
    pack_bytes: e.pack.length,
    settings_keys: description.settingsKeys.length,
    rules_kept: description.permissionRules,
    includes_inlined: description.inlinedImports,
    ...s
  });
}
var qt = {
  language: "language",
  outputStyle: "output style",
  attribution: "attribution",
  includeCoAuthoredBy: "co-author preference",
  includeGitInstructions: "git-instructions preference",
  alwaysThinkingEnabled: "thinking preference",
  showThinkingSummaries: "thinking-summary preference",
  permissions: "permission rules"
};
function dto(e) {
  let n = [...(e.claudeMd ? ["CLAUDE.md"] : []), ...qe(e.rules, "rules file"), ...qe(e.outputStyles, "output-style file"), ...qe(e.permissionRules, "permission rule"), ...e.settingsKeys.flatMap(item => item === "permissions" ? [] : [qt[item]]), ...(e.inlinedImports > 0 ? [`${e.inlinedImports} @${O(e.inlinedImports, "import")} folded in`] : [])];
  return n.length === 0 ? "Sent settings from this machine to the cloud session: only the narrowed permission allow list" : `Sent settings from this machine to the cloud session: ${n.join(", ")}`;
}
function qe(e, n) {
  return e > 0 ? [`${e} ${O(e, n)}`] : [];
}
var SOn = "Your deny and ask rules are not in force in the cloud session",
  wOn = "The cloud session's settings stay as they were",
  vOn = "Your deny and ask rules may not be in force in the cloud session";
function fur({
  summary: summary_3,
  leftBehind: leftBehind_5,
  unreadable: unreadable,
  settings: settings_4,
  configHome: configHome_4
}, {
  launch: launch,
  settingsFile: settingsFile
}) {
  let d = Es(configHome_4),
    f = [V(leftBehind_5, "symlink_not_sent", summary_3.symlinksNotSent, m => `${m} linked ${O(m, "file")} (links are not followed)`), V(leftBehind_5, "include_not_sent", summary_3.includesNotSent, m => `${m} @${O(m, "import")} outside ${d} or not markdown`), V(leftBehind_5, "sensitive", summary_3.withheldSensitive, m => `${m} ${O(m, "file")} named like credentials`), V(leftBehind_5, "read_denied", summary_3.withheldReadDenied, m => `${m} ${O(m, "file")} your Read rules or sandbox settings cover`), V(leftBehind_5, "not_destination", summary_3.notDestinations, m => `${m} ${O(m, "file")} with ${O(m, "a name", "names")} the cloud session cannot create`), V(leftBehind_5, "over_cap", summary_3.overCap, m => `${m} ${O(m, "file")} over a limit of ${t4e} files, ${Zt($oe)} per file or ${Zt(p3t)} in total`), V(leftBehind_5, "unreadable", unreadable, m => `${m} ${O(m, "file")} that changed while being read`), V(leftBehind_5, "undefusable", F(leftBehind_5, m => m.reason === "undefusable"), m => `${m} ${O(m, "file")} whose @imports could not be made safe`), V(leftBehind_5, "credential", F(leftBehind_5, m => m.reason === "credential"), m => `${m} ${O(m, "file")} ${Ze(m)}`)].flatMap(item => item === null ? [] : [item]),
    p = summary_3.droppedRules.rooted + summary_3.droppedRules.device + summary_3.droppedRules.invalid + summary_3.droppedRules.overCap,
    credentialRestrictions = summary_3.droppedRules.credentialRestrictions,
    y = summary_3.droppedRules.credential - credentialRestrictions,
    credentialTextsWithheld = summary_3.credentialTextsWithheld,
    guarded = summary_3.droppedRules.guarded,
    H = settings_4 === "schema_rejected" ? "failed validation" : settings_4 === "settings_too_large" ? "is over the size limit" : settings_4 === "settings_unreadable" ? "could not be read" : null,
    P = [...(summary_3.settingsKeysWithheld > 0 ? [`${summary_3.settingsKeysWithheld} ${O(summary_3.settingsKeysWithheld, "key")} (hooks, env and the like are never sent)`] : []), ...(p > 0 ? [`${p} permission ${O(p, "rule")} that ${O(p, "names", "name")} a path or device tool on this machine or could not be read`] : []), ...(y > 0 ? [`${y} allow ${O(y, "rule")} ${Ze(y)}`] : []), ...(credentialTextsWithheld > 0 ? [`${credentialTextsWithheld} ${O(credentialTextsWithheld, "text")} (attribution, language, output style) ${Ze(credentialTextsWithheld)}`] : []), ...(guarded > 0 ? [`${guarded} allow ${O(guarded, "rule")} that stayed because a hook, a plugin or a rule that was not sent may guard ${O(guarded, "it", "them")}`] : [])],
    I = f.length > 0 ? [`Not sent from ${d}: ${f.join("; ")}`] : [];
  if (H !== null) return [launch === "reopen_sent_nothing" ? `${wOn}: ${settingsFile} ${H}` : `${SOn}: ${settingsFile} ${H}; ${settings_4 === "settings_too_large" ? "make it smaller" : "fix it"} and ${launch === "reopen_sent" ? "re-open the session" : "start a new cloud session"}`, ...I].join(". ");
  let x = P.length > 0 ? [`Settings kept on this machine: ${P.join("; ")}`] : [],
    h = credentialRestrictions > 0 ? [`${credentialRestrictions} deny or ask ${O(credentialRestrictions, "rule is", "rules are")} not in force in the cloud session: ${O(credentialRestrictions, "it looks like it holds", "they look like they hold")} a credential (reword ${O(credentialRestrictions, "it", "them")} in ${settingsFile})`, ...x, ...I] : [...I, ...x];
  return h.length === 0 ? null : h.join(". ");
}
function mur(e) {
  let n = e.filter(item => item.reason === "credential").map(item => item.path);
  return {
    claudeMd: n.includes(j7),
    others: F(n, r => r !== j7)
  };
}
function cto(e) {
  let n = e.filter(item => item.reason === "symlink_not_sent").map(item => item.path),
    names = [...n.filter(item => item === j7), ...n.filter(item => item !== j7)].slice(0, 2).map(item => item === uAe || item === n4e ? `${item}/` : _n(item));
  return {
    names: names,
    more: n.length - names.length
  };
}
function Ze(e) {
  return `that ${O(e, "looks", "look")} like ${O(e, "it holds", "they hold")} a credential`;
}
function V(e, n, r, o) {
  if (r === 0) return null;
  let s = e.filter(item => item.reason === n).map(item => _n(item.path) + (item.line === void 0 ? "" : `:${item.line}`)),
    a = s.slice(0, Sr),
    u = s.length - a.length,
    d = a.length === 0 ? "" : ` (${a.join(", ")}${u > 0 ? ` and ${u} more` : ""})`;
  return o(r) + d;
}
export { ato, pur, lto, dto, SOn, wOn, vOn, fur, mur, cto };