// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  F,
  L,
  ke,
  so,
  LA,
  bv,
  de,
  DQ,
  hc
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  b,
  c
} from "B:/~BUN/root/chunk-jthpk6wv.js";
import {
  Ve,
  k
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  jn,
  NA,
  Na,
  Qa,
  Ds
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  Pe
} from "B:/~BUN/root/chunk-fbyz9h0p.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  _,
  gI,
  qbt,
  _o,
  se,
  _n,
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  O,
  mc,
  nt,
  $t
} from "B:/~BUN/root/chunk-nggrknsv.js";
import {
  it,
  Es
} from "B:/~BUN/root/chunk-ek28wssa.js";
import {
  dr,
  xs,
  Wo,
  nn,
  ef
} from "B:/~BUN/root/chunk-6a9s3k2y.js";
import {
  i5,
  IWe
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  i
} from "B:/~BUN/root/chunk-1kfn24jp.js";
import {
  wp
} from "B:/~BUN/root/chunk-xrp58hm9.js";
import {
  vl,
  $u,
  Pi,
  Oi,
  rr,
  lR
} from "B:/~BUN/root/chunk-8ye9n4fk.js";
import {
  nE,
  X_t
} from "B:/~BUN/root/chunk-a0k8qg0d.js";
import {
  fn,
  rk,
  wh,
  me,
  Bm
} from "B:/~BUN/root/chunk-1gpjpba6.js";
import {
  BH,
  Qj
} from "B:/~BUN/root/chunk-r4y1700s.js";
import {
  bBn,
  RC
} from "B:/~BUN/root/chunk-dn8rakwm.js";
import {
  ULt
} from "B:/~BUN/root/chunk-c44qc88s.js";
import {
  HE
} from "B:/~BUN/root/chunk-h1tq8zce.js";
import {
  Mj
} from "B:/~BUN/root/chunk-hhgqcegv.js";
import {
  hgr,
  j1,
  jue,
  cLn,
  Yhr,
  mXt,
  Vat,
  cxe,
  Guo,
  Vuo,
  rwe
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  xr,
  OC
} from "B:/~BUN/root/chunk-vttg4n7q.js";
import {
  G9
} from "B:/~BUN/root/chunk-r1z1wgpe.js";
import {
  iu
} from "B:/~BUN/root/chunk-72n790j1.js";
import {
  Das,
  Las,
  tRt,
  Rbe,
  EOn,
  fto
} from "B:/~BUN/root/chunk-ryerxfb6.js";
import {
  xz,
  rue
} from "B:/~BUN/root/chunk-cw50jvp0.js";
import {
  t4e,
  $oe,
  p3t,
  j7,
  uAe,
  n4e,
  f3t,
  pAe,
  vst
} from "B:/~BUN/root/chunk-sn0w05nq.js";
import {
  N0
} from "B:/~BUN/root/chunk-a5n8jkcn.js";
import {
  N
} from "B:/~BUN/root/chunk-nkxgam12.js";
import {
  st
} from "B:/~BUN/root/chunk-7aw74be3.js";
import {
  Zt
} from "B:/~BUN/root/chunk-ekswf6ps.js";
import {
  lstat as Oe,
  readdir as De,
  readlink as Pn,
  realpath as En,
  stat as Ne
} from "fs/promises";
import {
  dirname as vt,
  extname as ue,
  join as ne,
  posix as te,
  relative as K,
  resolve as Fn,
  sep as j,
  win32 as he
} from "path";
import {
  lstat as en,
  open as tn,
  realpath as rn
} from "fs/promises";
import {
  isAbsolute as on,
  join as sn,
  relative as an,
  sep as ln
} from "path";

function Qe(e, n = xz) {
  if (e.isSymbolicLink()) return "symlink";
  if (!e.isFile()) return "not_regular_file";
  if (e.nlink > 1) return "hard_link";
  if (e.size > n) return "too_large";
  return null
}

function un(e) {
  return e === "" || e === ".." || e.startsWith(`..${ln}`) || on(e)
}
async function dn(e, n) {
  let r = Buffer.allocUnsafe(n),
    o = 0;
  while (o < n) {
    let {
      bytesRead: s
    } = await e.read(r, o, n - o, o);
    if (s === 0) break;
    o += s
  }
  return r.subarray(0, o)
}
async function et(e, n, r) {
  let o = await dn(e, Number(n.size));
  if (BigInt(o.length) < n.size) return t(`working file ${r}: ${o.length} of the ${n.size} bytes that its stat promised came, with no error; skipped as changed`), {
    kind: "skip",
    skipped: {
      path: r,
      reason: "changed"
    }
  };
  return {
    kind: "read",
    content: o,
    mode: Number(n.mode) & 511,
    dev: n.dev,
    ino: n.ino,
    mtimeMs: Number(n.mtimeNs) / 1e6,
    ctimeMs: Number(n.ctimeNs) / 1e6
  }
}
async function tt(e, n, r, o = null, s = xz) {
  try {
    if (o !== null) return await cn(o, r, s);
    let a = sn(e, r),
      u = await en(a, {
        bigint: !0
      }),
      d = Qe(u, s);
    if (d !== null) return {
      kind: "skip",
      skipped: {
        path: r,
        reason: d
      }
    };
    if (NA(a)) return {
      kind: "skip",
      skipped: {
        path: r,
        reason: "unreadable"
      }
    };
    if (un(an(n, await rn(a)))) return {
      kind: "skip",
      skipped: {
        path: r,
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
          path: r,
          reason: "changed"
        }
      };
      if (p.size > s) return {
        kind: "skip",
        skipped: {
          path: r,
          reason: "too_large"
        }
      };
      return await et(f, p, r)
    } finally {
      await f.close()
    }
  } catch (a) {
    let u = k(a),
      d = u === "ELOOP" || u === "EMLINK" || u === "WORKING_PARENT_NOT_DIRECTORY" ? "symlink" : "unreadable";
    return {
      kind: "skip",
      skipped: {
        path: r,
        reason: d
      },
      ...d === "unreadable" && u !== void 0 && {
        errnoCode: u
      }
    }
  }
}
async function cn(e, n, r) {
  let o = await e.open(n, iu());
  try {
    let s = await o.stat({
        bigint: !0
      }),
      a = Qe(s, r);
    if (a !== null) return {
      kind: "skip",
      skipped: {
        path: n,
        reason: a
      }
    };
    return await et(o, s, n)
  } finally {
    await o.close()
  }
}
var He = /(^|[\s\][])@(?=((?:[^\s\\]|\\ )+))/g;

function Le(e, n = re, r) {
  let o = e.replace(/\r\n?/g, `
`),
    s = r === void 0 ? n : (u) => {
      let d = n(u);
      if (!d) r.push(u);
      return d
    },
    a = lt(o, new RC({
      gfm: !1
    }).lex(o), ut, s);
  return Te(a, n) ? ee(a) : a
}
var re = () => !1;

function pn(e, n) {
  if (e.type === "code" || e.type === "codespan" || e.type === "escape") return e.raw;
  if (e.type === "html") return mn(e.raw, n);
  let r = [...e.tokens ?? [], ...e.items ?? []];
  if (r.length === 0) return e.type === "text" ? rt(e.raw, n) : e.raw;
  let o = lt(e.raw, r, (s) => s, n);
  return e.type === "text" ? rt(o, n) : o
}

function lt(e, n, r, o) {
  let s = "",
    a = 0;
  for (let u of n) {
    let d = e.indexOf(u.raw, a);
    if (d === -1) return s + ut(e.slice(a));
    s += r(e.slice(a, d)) + pn(u, o), a = d + u.raw.length
  }
  return s + r(e.slice(a))
}

function rt(e, n) {
  return e.replace(He, (r, o, s) => n(pe(s)) ? r : `${o}\\@`)
}

function pe(e) {
  return nt(e, "#").replaceAll("\\ ", " ")
}

function mn(e, n) {
  let r = e.trimStart();
  if (!(r.startsWith("<!--") && r.includes("-->"))) return e;
  let o = [],
    s = "",
    a = 0;
  for (let d of e.matchAll(/<!--[\s\S]*?-->/g)) o.push({
    rawStart: a,
    residueStart: s.length
  }), s += e.slice(a, d.index), a = d.index + d[0].length;
  return o.push({
    rawStart: a,
    residueStart: s.length
  }), s += e.slice(a), [...s.matchAll(He)].filter((d) => !n(pe(d[2] ?? ""))).map((d) => {
    let f = d.index + (d[1] ?? "").length,
      {
        rawStart: p,
        residueStart: g
      } = o.findLast((y) => y.residueStart <= f) ?? {
        rawStart: 0,
        residueStart: 0
      };
    return p + (f - g)
  }).reduceRight((d, f) => `${d.slice(0,f)}\\${d.slice(f)}`, e)
}

function ut(e) {
  let n = null;
  return e.split(`
`).map((r) => {
    let o = /^[\s>]*(`{3,}|~{3,})/.exec(r)?.[1] ?? null;
    if (n === null) {
      if (o === null) return gn(r);
      return n = o, r
    }
    if (o !== null && o[0] === n[0] && o.length >= n.length && /^[\s>]*[`~]+\s*$/.test(r)) n = null;
    return r
  }).join(`
`)
}

function gn(e) {
  return e.replace(/@/g, (n, r) => Ee(e, r) || /[\p{L}\p{N}]/u.test(e[r - 1] ?? "") ? n : "\\@")
}

function dt(e) {
  return Object.keys(new RC({
    gfm: !1
  }).lex(e).links).length > 0
}

function ee(e) {
  return e.replace(/@/g, (n, r) => Ee(e, r) ? n : "\\@")
}

function Ee(e, n) {
  let r = 0;
  while (e[n - 1 - r] === "\\") r++;
  return r % 2 === 1
}
var Re = {
  vettable: !1
};

function Fe(e, n) {
  let r = new RC({
      gfm: !1
    }).lex(n),
    s = [...L(L([n, e]).flatMap((u) => [u, u.replace(/\\([[\]])/g, "$1")])).map((u) => ot(u, "as_loader")), ...hn(r).map((u) => ot(u, "every_at"))],
    a = L([...ft(r), ...s.flatMap((u) => u.vettable ? u.spellings : [])]);
  return s.every((u) => u.vettable) && a.length <= Sn ? {
    vettable: !0,
    spellings: a
  } : Re
}

function hn(e) {
  let n = (r) => r.flatMap((o) => {
    if (o.type === "code" || o.type === "codespan") return [];
    if (o.type === "html") {
      let s = o.raw.trimStart();
      return s.startsWith("<!--") && s.includes("-->") ? [o.raw.replace(/<!--[\s\S]*?-->/g, "")] : []
    }
    return n([...o.tokens ?? [], ...o.items ?? []])
  });
  return n(e)
}
var ct = 4096,
  yn = 64,
  Sn = 4096,
  bn = 1048576,
  kn = /@(?!@)(?=[^\s\\]|\\ )/g,
  wn = new RegExp(String.raw`(?:[^\s\\]|\\ ){1,${ct+1}}`, "y"),
  ve = /[\p{L}\p{N}]/u,
  Rn = /[*_[\]!<`]/g;

function ot(e, n) {
  let r = [],
    o = 0,
    s = new RegExp(wn);
  for (let a of e.matchAll(kn)) {
    if (n === "as_loader" && (ve.test(e[a.index - 1] ?? "") || Ee(e, a.index))) continue;
    s.lastIndex = a.index + 1;
    let u = s.exec(e)?.[0] ?? "";
    if (o += u.length, u.length > ct || o > bn) return Re;
    let d = vn(u);
    if (d.length > yn) return Re;
    r.push({
      run: u,
      closers: d
    })
  }
  return {
    vettable: !0,
    spellings: r.flatMap(({
      run: a,
      closers: u
    }) => L([a, ...u.map((d) => a.slice(0, d))]).flatMap((d) => {
      let f = pe(d);
      return f === "" || f.startsWith("@") ? [] : [f]
    }))
  }
}

function vn(e) {
  return [...e.matchAll(Rn)].filter((n) => n.index > 0 && !Hn(e, n)).map((n) => n.index)
}

function Hn(e, n) {
  return n[0] === "_" && ve.test(e[n.index - 1] ?? "") && ve.test(e[n.index + 1] ?? "")
}

function Te(e, n = re) {
  return xe(e).some((r) => !n(r))
}

function xe(e) {
  return ft(new RC({
    gfm: !1
  }).lex(e))
}

function ft(e) {
  let n = (r) => r.flatMap((o) => {
    if (o.type === "code" || o.type === "codespan") return [];
    if (o.type === "html") {
      let s = o.raw.trimStart();
      return s.startsWith("<!--") && s.includes("-->") ? at(o.raw.replace(/<!--[\s\S]*?-->/g, "")) : []
    }
    return [...o.type === "text" ? at(o.text ?? o.raw) : [], ...n([...o.tokens ?? [], ...o.items ?? []])]
  });
  return n(e)
}

function at(e) {
  return [...e.matchAll(He)].flatMap((n) => {
    let r = pe(n[2] ?? "");
    return r.startsWith("./") || r.startsWith("~/") || r.startsWith("/") && r !== "/" || !r.startsWith("@") && !/^[#%^&*()]+/.test(r) && /^[a-zA-Z0-9._-]/.test(r) ? [r] : []
  })
}

function Ie(e) {
  let o = new RC({
    gfm: !1
  }).lex(`${e}

<!-- ccr-home-probe -->
`).findLast((s) => s.type !== "space");
  return !(o?.type === "html" && o.raw.trim() === "<!-- ccr-home-probe -->")
}

function pt(e) {
  return `

<!-- inlined import: ${encodeURI(e)} -->

`
}
import {
  join as mt
} from "path";
var gt = 4096,
  ge = !0;
async function ht(e, n) {
  if (de()) return t("home inventory: memory files not read in a diskless session; nothing is sent"), null;
  let r = {
      reads: 0
    },
    o = await Ln(e, r, n);
  if (o === null) return null;
  let s = new Map;
  for (let a = o.pop(); a !== void 0; a = o.pop()) {
    let u = `${a.type}\x00${wp(a.path)}`;
    if (s.has(u)) continue;
    if (n?.aborted) return null;
    s.set(u, a);
    let d = await j1(a.path, a.type, new Set, ge, hgr - 2);
    if (r.reads += d.length, r.reads > gt) return null;
    o.push(...d.filter((f) => f.path !== a.path))
  }
  return [...s.values()]
}
async function Ln(e, n, r) {
  let o = (d, f) => () => j1(d, f, new Set, ge, f === "User" ? 0 : hgr - 1),
    s = (d, f) => async () => [...await jue({
      rulesDir: d,
      type: f,
      processedPaths: new Set,
      includeExternal: ge,
      conditionalRule: !1
    }), ...await jue({
      rulesDir: d,
      type: f,
      processedPaths: new Set,
      includeExternal: ge,
      conditionalRule: !0
    })], a = [o(i5("Managed"), "Managed"), s(IWe(), "Managed"), o(mt(e, j7), "User"), s(mt(e, uAe), "User")], u = [];
  for (let d of a) {
    if (r?.aborted) return null;
    let f = await d();
    if (n.reads += f.length, n.reads > gt) return null;
    u.push(...f)
  }
  return u
}
var oe = ".md",
  Tn = 50000,
  Ht = j === he.sep ? he : te,
  xn = j === he.sep ? /[\\/]+/ : /\/+/;

function ce(e, n) {
  return (n === "/" ? e : e.split(n).join("/")).normalize("NFC")
}

function G(e, n = Ht) {
  return e === ".." || e.startsWith(`..${n.sep}`) || n.isAbsolute(e)
}

function In(e, n, r = Ht) {
  let o = r.relative(e, n);
  if (r.isAbsolute(o)) return null;
  let s = r.resolve(e, o),
    a = r.resolve(n);
  return (r === he ? s.toLowerCase() === a.toLowerCase() : s === a) ? o : null
}
async function W(e) {
  if (NA(e)) throw Error("realpath would misread a backslash in the path");
  return En(e)
}

function yt(e) {
  return NA(e) ? {
    resolvedPath: e,
    isSymlink: !1,
    isCanonical: !1
  } : _o(se(), e)
}
var An = 4096;
async function $e(e, n, r, o) {
  let s;
  try {
    s = await W(n)
  } catch {
    return "unresolvable"
  }
  let a = K(e.realConfigHome, s);
  if (a === "" || G(a)) return "outside";
  let u = ce(a, j);
  return {
    realPath: s,
    nativeRel: a,
    rel: u,
    lexicalRel: r ?? u,
    rawRels: L([Lt(a), ...o === null ? [] : [o]])
  }
}
async function Mn(e, n) {
  try {
    let r = await W(n);
    return Se(e, r) || !G(K(e.realConfigHome, r))
  } catch {
    return !0
  }
}

function Se(e, n) {
  return !G(K(n, e.realConfigHome))
}

function Lt(e) {
  return j === "/" ? e : e.split(j).join("/")
}

function Pt(e, n) {
  let r = [e.configHome, e.realConfigHome].map((o) => K(o, n)).find((o) => o !== "" && !G(o));
  return r === void 0 ? null : {
    rel: ce(r, j),
    raw: Lt(r)
  }
}

function Ke(e) {
  let n = vl(nt(e, "/"));
  return mc(e) && e.includes("/") && ue(e).toLowerCase() === oe && !rue(e) && !Un.test(e) && !cLn.has(n) && !n.startsWith("agent-memory") && !Cn(e) && !Et(e)
}

function Et(e) {
  let n = vl(nt(e, "/"));
  return n === vl(uAe) || n === vl(n4e)
}

function Cn(e) {
  let [n, r] = e.split("/");
  return vl(n ?? "") === "skills" && vl(r ?? "") === Mj
}
var Un = /~\d/,
  Bn = 32;
async function On(e) {
  let n = e,
    r = new Set;
  for (let o = 0; o < Bn; o += 1) {
    if (r.has(n)) return !1;
    r.add(n);
    let s;
    try {
      s = await Pn(n)
    } catch (u) {
      return St(u)
    }
    if (s.includes("\uFFFD")) throw Error("link body is not valid UTF-8");
    let a;
    try {
      a = Fn(await W(vt(n)), s)
    } catch (u) {
      if (k(u) === "ENAMETOOLONG") throw u;
      return St(u)
    }
    if ($n(s)) throw Error("link body climbs out of a directory it entered");
    if (Ds(s) || gI(a)) return !0;
    try {
      if (!(await Oe(a)).isSymbolicLink()) return !1
    } catch (u) {
      if (!B(u) || k(u) === "ENAMETOOLONG" && !Dn(s)) throw u;
      return !1
    }
    n = a
  }
  throw Error("link chain too long to vet")
}

function St(e) {
  if (B(e) || k(e) === "EINVAL") return !0;
  throw e
}

function B(e) {
  let n = k(e);
  return n === "ENOENT" || n === "ENOTDIR" || n === "ELOOP" || n === "ENAMETOOLONG"
}

function Dn(e) {
  return e.split(/[\\/]/).some((n) => [...n].length > 255)
}
async function Ft(e) {
  try {
    return await Ne(e), !1
  } catch (n) {
    return B(n)
  }
}
async function Nn(e) {
  try {
    return !(await Ne(e)).isDirectory()
  } catch (n) {
    return B(n)
  }
}

function $n(e) {
  let n = !1;
  for (let r of e.split(xn))
    if (r === "..") {
      if (n) return !0
    } else if (r !== "" && r !== ".") n = !0;
  return !1
}
var le = {
  ok: !1,
  reason: "aborted"
};
async function Tt({
  configHome: e,
  isUserSettingsFileSendable: n,
  readRules: r,
  createFilter: o,
  signal: s,
  aliasDirectories: a = An,
  settingsToCloud: u = BH
}) {
  if (de()) return {
    ok: !1,
    reason: "diskless"
  };
  if (!await u().catch(() => !1)) return {
    ok: !1,
    reason: "flag_off"
  };
  try {
    if (!n || !r.complete) return Ae({
      rulesUnreadable: !0
    });
    if (!nn("userSettings")) return Ae({
      rulesUnreadable: !1
    });
    let d;
    try {
      d = await W(e)
    } catch (v) {
      if (B(v) && await Ft(e)) return Ae({
        rulesUnreadable: !1
      });
      return {
        ok: !1,
        reason: "alias_unreadable"
      }
    }
    let f = {
      configHome: e,
      realConfigHome: d,
      aliasBudget: {
        left: a
      },
      giveUp: null,
      topLevelLinks: []
    };
    f.topLevelLinks = await Wn(f);
    let p = o(e, {
        realRoot: d,
        readRules: r
      }),
      g = {
        held: new Map
      },
      y = new Set,
      S = new Set,
      E = new Map,
      H = new Map,
      P = OC() ? {
        files: [],
        leftBehind: []
      } : await Gn(f);
    if (f.giveUp === null) {
      let v = await ht(e, s);
      if (N0(s)) return le;
      if (v === null) return {
        ok: !1,
        reason: "too_many_links"
      };
      for (let T of v) {
        if (N0(s)) return le;
        await We(f, p, T, H)
      }
    }
    let I = await Xn(f, p, P.files, g, y, S, E, H, s);
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
      C = new Set,
      w = new Map;
    for (let v of [...m.filter((T) => T.kind === "output_style"), ...m.filter((T) => T.kind !== "output_style")]) {
      if (N0(s)) return le;
      let T = await Zn(f, p, v, H, C, S);
      if (T.entry === null) C.add(v.location.realPath);
      w.set(v, T)
    }
    let R = m.flatMap((v) => w.get(v) ?? []),
      {
        kept: M,
        droppedOverCap: U
      } = Las(R.flatMap(({
        entry: v,
        foldedIncludes: T
      }) => v === null ? [] : [{
        content: v.content,
        entry: v,
        foldedIncludes: T
      }]).toSorted((v, T) => Kn(v.entry, T.entry))),
      D = [...E].filter(([v]) => !y.has(v) && !S.has(v)).map(([v, T]) => H.get(v) ?? T),
      X = [...P.leftBehind, ...I, ...D, ...x.leftBehind, ...h, ...R.flatMap((v) => v.leftBehind), ...U.flatMap(({
        entry: v,
        foldedIncludes: T
      }) => [{
        path: v.path,
        reason: "over_cap"
      }, ...T.map((ae) => ({
        path: ae,
        reason: "include_not_sent"
      }))])],
      A = M.map(({
        entry: v
      }) => v);
    return {
      ok: !0,
      inventory: {
        entries: A,
        summary: xt(A, X),
        leftBehind: X
      }
    }
  } catch (d) {
    if (N0(s)) return le;
    return t(`home inventory: gave the run up \u2014 ${d instanceof Error?d.message:String(d)}`), {
      ok: !1,
      reason: "alias_unreadable"
    }
  }
}

function Ae({
  rulesUnreadable: e
}) {
  return {
    ok: !0,
    inventory: {
      entries: [],
      summary: {
        ...xt([], []),
        rulesUnreadable: e
      },
      leftBehind: []
    }
  }
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
    inlinedImports: e.reduce((r, o) => r + o.folded.length, 0),
    defusedImports: e.reduce((r, o) => r + o.defused, 0)
  }
}

function Y(e, n) {
  return F(e, (r) => r.reason === n)
}
var _t = {
  claude_md: 0,
  rule: 1,
  output_style: 2
};

function Kn(e, n) {
  return _t[e.kind] - _t[n.kind] || e.content.length - n.content.length || (e.path < n.path ? -1 : e.path > n.path ? 1 : 0)
}
async function Gn(e) {
  let n = ne(e.configHome, j7),
    r = await At(e, n),
    o = await It(e, uAe);
  if (r === null) return o;
  let s = r.isSymlink ? await fe(e, n) : void 0;
  if (s?.isDirectory() === !0 && await Mn(e, n)) e.giveUp ??= "alias_unreadable";
  if (s === null || s !== void 0 && !s.isFile()) return {
    files: o.files,
    leftBehind: [{
      path: j7,
      reason: "symlink_not_sent"
    }, ...o.leftBehind]
  };
  return {
    files: [{
      path: n,
      lexicalRel: j7,
      rawLexicalRel: j7,
      viaSymlink: r.isSymlink,
      aliasOnly: !1
    }, ...o.files],
    leftBehind: o.leftBehind
  }
}
async function It(e, n) {
  let r = ne(e.configHome, n),
    o = await At(e, r);
  if (o === null) return {
    files: [],
    leftBehind: []
  };
  if (o.isSymlink) {
    let s = await fe(e, r);
    if (s === null || !s.isDirectory()) return {
      files: s !== null && s.isFile() ? [{
        path: r,
        lexicalRel: n,
        rawLexicalRel: n,
        viaSymlink: !0,
        aliasOnly: !0
      }] : [],
      leftBehind: [{
        path: n,
        reason: "symlink_not_sent"
      }]
    }
  }
  return Mt(e, r, [n], o.isSymlink, new Set)
}
async function Wn(e) {
  let n;
  try {
    n = await De(e.configHome, {
      withFileTypes: !0
    })
  } catch (o) {
    if (!B(o)) e.giveUp ??= "alias_unreadable";
    return []
  }
  let r = [];
  for (let o of n) {
    let s = ne(e.configHome, o.name),
      a = await je(e, s, o);
    if (a === null || !a.isSymbolicLink()) continue;
    if (await fe(e, s) === null) continue;
    let u;
    try {
      u = await W(s)
    } catch {
      e.giveUp ??= "alias_unreadable";
      continue
    }
    if (Se(e, u)) {
      e.giveUp ??= "alias_unreadable";
      continue
    }
    let d = K(e.realConfigHome, u);
    if (!G(d)) r.push({
      name: o.name.normalize("NFC"),
      targetRel: ce(d, j)
    })
  }
  return r
}

function zn(e, n) {
  return e.topLevelLinks.flatMap(({
    name: r,
    targetRel: o
  }) => n === o ? [r] : n.startsWith(`${o}/`) ? [`${r}/${n.slice(o.length+1)}`] : [])
}
async function At(e, n) {
  try {
    return {
      isSymlink: (await Oe(n)).isSymbolicLink()
    }
  } catch (r) {
    if (!B(r)) e.giveUp ??= "alias_unreadable";
    return null
  }
}
async function Mt(e, n, r, o, s) {
  let a = r.join("/").normalize("NFC"),
    u = {
      files: [],
      leftBehind: [{
        path: a,
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
    let S = `${ce(y,j)}/x.md`;
    if (o && pAe(S) === null) return {
      files: Ke(S) ? await Ue(e, n, r, new Set([g])) : [],
      leftBehind: u.leftBehind
    };
    s.add(g), d = await De(n, {
      withFileTypes: !0
    })
  } catch (g) {
    if (o || !B(g) || !await Nn(n)) e.giveUp ??= "alias_unreadable";
    return {
      files: [],
      leftBehind: []
    }
  }
  let f = [],
    p = [];
  for (let g of d.toSorted(Ct)) {
    let y = ne(n, g.name),
      S = [...r, g.name].join("/"),
      E = S.normalize("NFC"),
      H = await je(e, y, g);
    if (H === null) continue;
    let P = H.isSymbolicLink(),
      I = g.name.endsWith(oe),
      x = P ? await fe(e, y) : H;
    if (x === null) {
      if (ue(g.name).toLowerCase() === oe) p.push({
        path: E,
        reason: "symlink_not_sent"
      })
    } else if (x.isDirectory()) {
      let h = await Mt(e, y, [...r, g.name], o || P, s);
      f.push(...h.files), p.push(...h.leftBehind)
    } else if (x.isFile() && (I || P || o && ue(g.name).toLowerCase() === oe)) f.push({
      path: y,
      lexicalRel: E,
      rawLexicalRel: S,
      viaSymlink: o || P,
      aliasOnly: !I
    })
  }
  return {
    files: f,
    leftBehind: p
  }
}
async function Ue(e, n, r, o) {
  let s;
  try {
    s = await De(n, {
      withFileTypes: !0
    })
  } catch {
    return e.giveUp ??= "alias_unreadable", []
  }
  let a = [];
  for (let u of s.toSorted(Ct)) {
    let d = ne(n, u.name),
      f = [...r, u.name].join("/"),
      p = await je(e, d, u);
    if (p === null) continue;
    let g = p.isSymbolicLink(),
      y = g ? await fe(e, d) : p;
    if (y === null) continue;
    if (y.isDirectory()) {
      let S = await Vn(e, d, o);
      if (S !== null) a.push(...await Ue(e, d, [...r, u.name], new Set([...o, S])))
    } else if (y.isFile() && (g || ue(u.name).toLowerCase() === oe)) a.push({
      path: d,
      lexicalRel: f.normalize("NFC"),
      rawLexicalRel: f,
      viaSymlink: g,
      aliasOnly: !0
    })
  }
  return a
}
async function Vn(e, n, r) {
  let o;
  try {
    o = await W(n)
  } catch {
    return e.giveUp ??= "alias_unreadable", null
  }
  let s = K(e.realConfigHome, o);
  if (Se(e, o)) return e.giveUp ??= "alias_unreadable", null;
  if (r.has(o) || G(s)) return null;
  let a = `${ce(s,j)}/x.md`;
  if (pAe(a) === null && !Ke(a)) return null;
  if (e.aliasBudget.left <= 0) return e.giveUp ??= "too_many_links", null;
  return e.aliasBudget.left -= 1, o
}
async function je(e, n, r) {
  if (r.isSymbolicLink() || r.isFile() || r.isDirectory() || r.isFIFO() || r.isSocket() || r.isCharacterDevice() || r.isBlockDevice()) return r;
  try {
    return await Oe(n)
  } catch (o) {
    if (!B(o)) e.giveUp ??= "alias_unreadable";
    return null
  }
}
async function fe(e, n) {
  let r;
  try {
    r = await On(n)
  } catch {
    return e.giveUp ??= "alias_unreadable", null
  }
  if (r) return null;
  try {
    return await Ne(n)
  } catch (o) {
    if (!B(o)) e.giveUp ??= "alias_unreadable";
    return null
  }
}

function Ct(e, n) {
  return e.name < n.name ? -1 : e.name > n.name ? 1 : 0
}

function q(e, n, r) {
  if (r !== null || !e.has(n)) e.set(n, r)
}
async function Ut(e, n, r, o, s, a) {
  let u = await $e(e, r.path, r.lexicalRel, r.rawLexicalRel);
  if (r.aliasOnly) {
    if (u === "unresolvable") e.giveUp ??= "alias_unreadable";
    else if (u !== "outside") {
      let p = Z(e, n, u, r.lexicalRel);
      if (p !== null) q(a, u.realPath, p)
    }
    return {
      kind: "attributed"
    }
  }
  if (u === "unresolvable") {
    if (r.viaSymlink) e.giveUp ??= "alias_unreadable";
    return Me(r, r.viaSymlink ? "symlink_not_sent" : "unreadable")
  }
  if (u === "outside") return Me(r, "symlink_not_sent");
  let d = r.viaSymlink ? u.rel : r.lexicalRel,
    f = vst(d);
  if (f === null) {
    let p = r.viaSymlink ? Z(e, n, u, r.lexicalRel) : null;
    if (!r.viaSymlink || p !== null) q(a, u.realPath, p);
    if (s.has(u.realPath)) return {
      kind: "attributed"
    };
    return s.add(u.realPath), p === null ? Me(r, r.viaSymlink ? "symlink_not_sent" : "not_destination") : {
      kind: "refused",
      left: p
    }
  }
  if (o.has(u.realPath)) {
    let p = Z(e, n, u, r.lexicalRel);
    if (p !== null) q(a, u.realPath, p);
    return {
      kind: "attributed"
    }
  }
  return {
    kind: "candidate",
    candidate: {
      ...f,
      location: u,
      imports: [],
      styleVia: new Map
    }
  }
}

function Me(e, n) {
  return {
    kind: "refused",
    left: {
      path: e.lexicalRel,
      reason: n
    }
  }
}

function Ge(e, n) {
  let r = f3t(n.destination);
  if (e.held.has(r)) return null;
  return e.held.set(r, n), n
}
async function Xn(e, n, r, o, s, a, u, d, f) {
  let p = [];
  for (let g of r) {
    if (N0(f)) return null;
    let y = await Ut(e, n, g, s, a, d);
    if (y.kind === "refused") p.push(y.left);
    if (y.kind !== "candidate") continue;
    let {
      candidate: S
    } = y, E = g.lexicalRel === j7 ? g.path : S.location.realPath, H = await j1(E, "User", new Set, !0);
    if (H.length === 0) {
      let P = await Be(e, S.location);
      if (P.kind === "read" && P.content.includes(0)) p.push({
        path: g.lexicalRel,
        reason: "unreadable"
      });
      continue
    }
    if (Ge(o, S) === null) {
      for (let P of H) await We(e, n, P, d);
      p.push({
        path: g.lexicalRel,
        reason: "not_destination"
      });
      continue
    }
    s.add(S.location.realPath), p.push(...await Yn(e, n, S, H, o, s, a, u, d))
  }
  return p
}

function Ce(e) {
  return e.globs === void 0 ? "" : _(e.globs.toSorted())
}
async function Yn(e, n, r, o, s, a, u, d, f) {
  let p = [],
    g = o.find((h) => h.parent === void 0),
    y = o.filter((h) => h !== g),
    S = new Map,
    E = (h, m) => ({
      candidate: h,
      isStyle: h.kind === "output_style",
      withheld: bt(e, n, h.location) !== null || f.get(h.location.realPath) != null,
      scope: Ce(m)
    }),
    H = new Map(g === void 0 ? [] : [
      [g.path, E(r, g)]
    ]),
    P = new Map,
    I = (h, m) => {
      if (!u.has(h)) u.add(h), P.set(h, p.push(m) - 1)
    },
    x = (h, m) => {
      let C = P.get(h);
      if (C === void 0) I(h, m);
      else p[C] = m
    };
  for (let h of o) await We(e, n, h, f);
  for (let h of y) {
    let m = H.get(h.parent ?? "");
    if (m === void 0) continue;
    let C = Pt(e, h.path),
      w = await $e(e, h.path, C?.rel ?? null, C?.raw ?? null);
    if (w === "outside" || w === "unresolvable") {
      I(h.path, {
        path: C?.rel ?? h.path,
        reason: "include_not_sent"
      });
      continue
    }
    if (a.has(w.realPath) || f.has(w.realPath)) {
      let A = f.get(w.realPath) ?? Z(e, n, w, w.lexicalRel);
      if (A !== null) q(f, w.realPath, A), x(w.realPath, A);
      continue
    }
    let R = vst(w.rel);
    if (R !== null) {
      let A = Ge(s, {
        ...R,
        location: w,
        imports: [],
        styleVia: new Map
      });
      if (A === null) {
        I(w.realPath, {
          path: w.lexicalRel,
          reason: "not_destination"
        });
        continue
      }
      if (a.add(w.realPath), A.kind === "output_style") {
        S.set(h.path, w.realPath);
        let v = h.parent === void 0 ? void 0 : S.get(h.parent);
        if (v !== void 0) m.candidate.styleVia.set(w.realPath, v);
        if (!m.withheld && !m.isStyle && m.scope === Ce(h)) m.candidate.imports.push({
          location: w,
          via: v ?? null,
          asStyle: !0
        })
      }
      H.set(h.path, A.kind === "output_style" ? {
        ...m,
        withheld: m.withheld || bt(e, n, A.location) !== null
      } : E(A, h));
      continue
    }
    if (m.withheld) continue;
    let M = L([w.rel, w.lexicalRel, ...w.rawRels]).every(Ke),
      U = M ? Z(e, n, w, w.lexicalRel) : null,
      D = U?.reason ?? null,
      X = Et(w.rel) && ue(w.rel).toLowerCase() === oe;
    if (U !== null || X) q(f, w.realPath, U);
    if (!M || D !== null) {
      I(w.realPath, {
        path: w.lexicalRel,
        reason: D ?? (X ? "not_destination" : "include_not_sent")
      });
      continue
    }
    if (m.isStyle || m.scope !== Ce(h)) {
      d.set(w.realPath, {
        path: w.lexicalRel,
        reason: "include_not_sent"
      });
      continue
    }
    m.candidate.imports.push({
      location: w,
      via: h.parent === void 0 ? null : S.get(h.parent) ?? null
    }), S.set(h.path, w.realPath), a.add(w.realPath), H.set(h.path, m)
  }
  return p
}
async function We(e, n, r, o) {
  if (NA(r.path)) {
    e.giveUp ??= "alias_unreadable";
    return
  }
  let s = vt(yt(r.path).resolvedPath),
    a = Fe(r.content, Q(r.rawContent ?? r.content).body);
  if (!a.vettable) {
    e.giveUp ??= "alias_unreadable";
    return
  }
  for (let u of a.spellings) {
    if (u.includes("\x00")) continue;
    let d = it(u, s);
    if ((jn(u) || jn(d)) && G(K(e.configHome, d))) continue;
    let f = yt(d);
    if (!f.isCanonical) {
      if (!f.isSymlink && !await Jn(d)) e.giveUp ??= "alias_unreadable";
      continue
    }
    let p = Pt(e, d);
    if (p === null) {
      let S = f.resolvedPath;
      if (o.get(S) != null || G(K(e.realConfigHome, S))) continue;
      let E = In(e.configHome, d);
      if (E === null) {
        e.giveUp ??= "alias_unreadable";
        continue
      }
      switch (bBn(d) || bBn(S) ? "sensitive" : n(E, !0)) {
        case "sensitive":
        case "sensitive_tracked":
        case "host_config":
          q(o, S, {
            path: u,
            reason: "sensitive"
          });
          break;
        case "read_denied":
        case "rules_unreadable":
          q(o, S, {
            path: u,
            reason: "read_denied"
          });
          break;
        case "content_filter":
        case null:
          break
      }
      continue
    }
    let g = await $e(e, d, p.rel, p.raw);
    if (g === "unresolvable") {
      e.giveUp ??= "alias_unreadable";
      continue
    }
    if (g === "outside" || o.get(g.realPath) != null) continue;
    let y = Z(e, n, g, g.lexicalRel);
    if (y !== null) q(o, g.realPath, y)
  }
}
async function Jn(e) {
  if (jn(e) && !Qa(e) || Na(e)) return !0;
  try {
    return await W(e), !1
  } catch (n) {
    return B(n) && await Ft(e)
  }
}
async function qn(e, n, r, o, s, a, u) {
  let d = [];
  for (let f of r) {
    let p = await Ut(e, n, f, s, a, u);
    if (p.kind === "refused") d.push(p.left);
    else if (p.kind === "candidate")
      if (p.candidate.kind !== "output_style") d.push({
        path: f.lexicalRel,
        reason: "symlink_not_sent"
      });
      else if (Ge(o, p.candidate) === null) d.push({
      path: f.lexicalRel,
      reason: "not_destination"
    });
    else s.add(p.candidate.location.realPath)
  }
  return d
}

function bt(e, n, r) {
  return Bt(e, n, r)?.reason ?? null
}

function Z(e, n, r, o) {
  let s = Bt(e, n, r);
  return s === null ? null : {
    path: s.alias ?? o,
    reason: s.reason
  }
}

function Bt(e, n, r) {
  let o = L([r.lexicalRel, r.rel, ...r.rawRels]),
    s = L(o.flatMap((d) => zn(e, d))).filter((d) => !o.includes(d)),
    a = [...o, ...s];
  if ([...a, ...a.map((d) => ne(e.configHome, ...d.split("/"))), r.realPath].some((d) => bBn(d))) return {
    reason: "sensitive",
    alias: null
  };
  for (let d of a) {
    let f = s.includes(d) ? d : null;
    switch (n(d, !1)) {
      case "sensitive":
      case "sensitive_tracked":
      case "host_config":
        return {
          reason: "sensitive", alias: f
        };
      case "read_denied":
      case "rules_unreadable":
        return {
          reason: "read_denied", alias: f
        };
      case "content_filter":
      case null:
        break
    }
  }
  return null
}
async function Zn(e, n, r, o, s, a) {
  let u = Z(e, n, r.location, r.destination),
    d = o.get(r.location.realPath) ?? null;
  if (u !== null) return J(r, u.reason, a, u.path);
  if (d !== null) return J(r, d.reason, a, d.path);
  if (!await wt(e, r.location)) return J(r, "unreadable", a);
  let f = await Be(e, r.location);
  if (f.kind === "skip") return J(r, or(f.skipped.reason), a);
  if (f.content.length > $oe) return J(r, "over_cap", a);
  let p = f.content.toString("utf8");
  if (Rbe(p)) {
    let R = J(r, "credential", a);
    return {
      ...R,
      leftBehind: R.leftBehind.map((M) => M.reason === "credential" ? {
        ...M,
        ...Rt(p, 0)
      } : M)
    }
  }
  let g = r.kind === "output_style" ? {
      content: f.content,
      defusedPaths: []
    } : Qn(r.destination, f.content, r.imports.length > 0),
    y = [g.content],
    S = [],
    E = [],
    H = g.content.length,
    P = [],
    I = r.imports.length > 0 && Ie(Q(g.content.toString("utf8")).body),
    x = new Set(s);
  for (let {
      location: R,
      via: M,
      asStyle: U
    }
    of r.imports) {
    let D = (Qt) => {
        if (!U) P.push(Qt)
      },
      X = Z(e, n, R, R.lexicalRel);
    if (X !== null || o.has(R.realPath) || x.has(R.realPath) || M !== null && nr(M, x, r.styleVia) || I) {
      if (x.add(R.realPath), !a.has(R.realPath)) a.add(R.realPath), D(X ?? o.get(R.realPath) ?? {
        path: R.lexicalRel,
        reason: "include_not_sent"
      });
      continue
    }
    let A = await wt(e, R) ? await Be(e, R) : null;
    if (A === null || A.kind === "skip") {
      x.add(R.realPath), D({
        path: R.lexicalRel,
        reason: "include_not_sent"
      });
      continue
    }
    let {
      head: v,
      body: T
    } = Q(A.content.toString("utf8"));
    if (Ie(T) || dt(T)) {
      x.add(R.realPath), D({
        path: R.lexicalRel,
        reason: "include_not_sent"
      });
      continue
    }
    let ae = Buffer.from(pt(R.rel) + Le(T));
    if (H + ae.length > $oe) {
      x.add(R.realPath), D({
        path: R.lexicalRel,
        reason: "over_cap"
      });
      continue
    }
    if (Rbe(T)) {
      x.add(R.realPath), D({
        path: R.lexicalRel,
        reason: "credential",
        ...Rt(T, $t(v, `
`))
      });
      continue
    }
    if (y.push(ae), S.push(R.lexicalRel), !U) E.push(R.lexicalRel);
    H += ae.length
  }
  let h = Buffer.concat(y),
    m = r.kind !== "output_style" && y.length > 1 && er(g.content, h, r.destination) ? tr(h) : h;
  if (r.kind !== "output_style" && m !== h && ye(m, re)) return J(r, "undefusable", a);
  if (!m.equals(f.content) && Rbe(m.toString("utf8"))) {
    let R = J(r, "credential", a),
      M = new Set(P.map((U) => U.path));
    return {
      ...R,
      leftBehind: [...R.leftBehind.filter((U) => !M.has(U.path)), ...P]
    }
  }
  let C = new Set(S),
    w = F(g.defusedPaths, (R) => !C.has(te.normalize(te.join(te.dirname(r.destination), R)).normalize("NFC")));
  return {
    entry: {
      path: r.destination,
      kind: r.kind,
      content: m,
      sha256: st(m),
      folded: S,
      defused: w
    },
    foldedIncludes: E,
    leftBehind: P
  }
}

function Qn(e, n, r) {
  let o = (I) => Ot(e, I),
    s = n.toString("utf8").replace(/\r\n?/g, `
`),
    a = Q(s),
    u = a.head,
    d = u !== "" && s.startsWith("\uFEFF") ? "\uFEFF" : "",
    f = r && u === "" && /^\uFEFF?---\s*\n/.test(s) ? `
` : "",
    p = f + d + u,
    g = a.body,
    y = [],
    S = Le(g, o, y),
    E = S === g && f === "" ? {
      content: n,
      defusedPaths: []
    } : {
      content: Buffer.from(p + S),
      defusedPaths: y
    };
  if (E.content !== n && Q(n.toString("utf8")).head === "" !== (u === "")) return {
    content: Buffer.from(ee(s)),
    defusedPaths: kt(g, o)
  };
  if (!ye(E.content, o)) return E;
  let H = kt(g, o),
    P = Buffer.from(p + ee(g));
  return ye(P, re) ? {
    content: Buffer.from(f + ee(s)),
    defusedPaths: H
  } : {
    content: P,
    defusedPaths: H
  }
}

function kt(e, n) {
  let r = Fe(e, e);
  return r.vettable ? r.spellings.filter((o) => !n(o)) : []
}

function er(e, n, r) {
  let o = (u) => Ot(r, u),
    s = (u) => xe(Q(u.toString("utf8")).body),
    a = s(n);
  return a.some((u) => !o(u)) || F(a, o) > F(s(e), o)
}

function tr(e) {
  let n = e.toString("utf8"),
    {
      head: r,
      body: o
    } = Q(n),
    s = r !== "" && n.startsWith("\uFEFF") ? "\uFEFF" : "",
    a = Buffer.from(s + r + ee(o));
  return ye(a, re) ? Buffer.from(ee(n)) : a
}

function ye(e, n) {
  return Te(Q(e.toString("utf8")).body, n)
}

function Q(e) {
  let n = e.startsWith("\uFEFF") ? e.slice(1) : e,
    r = HE.exec(n)?.[0];
  return r === void 0 ? {
    head: "",
    body: e
  } : {
    head: r,
    body: n.slice(r.length)
  }
}

function Ot(e, n) {
  if (n.startsWith("/") || n.startsWith("~")) return !1;
  let r = te.normalize(te.join(te.dirname(e), n)),
    o = r.startsWith("../") ? null : pAe(r);
  return o === "claude_md" || o === "rule"
}

function nr(e, n, r) {
  let o = new Set;
  for (let s = e; s !== void 0 && !o.has(s); s = r.get(s)) {
    if (n.has(s)) return !0;
    o.add(s)
  }
  return !1
}
async function wt(e, n) {
  try {
    return await W(ne(e.realConfigHome, n.nativeRel)) === n.realPath
  } catch {
    return !1
  }
}

function Rt(e, n) {
  let r = e.split(`
`),
    o = r.length > Tn ? -1 : r.findIndex((s) => Rbe(s));
  return o === -1 ? {} : {
    line: n + o + 1
  }
}

function J(e, n, r, o = e.destination) {
  let s = [{
      realPath: e.location.realPath,
      row: {
        path: o,
        reason: n
      }
    }, ...e.imports.filter((u) => !u.asStyle).map(({
      location: u
    }) => ({
      realPath: u.realPath,
      row: {
        path: u.lexicalRel,
        reason: "include_not_sent"
      }
    }))],
    a = [];
  for (let {
      realPath: u,
      row: d
    }
    of s)
    if (!r.has(u)) r.add(u), a.push(d);
  return {
    entry: null,
    foldedIncludes: [],
    leftBehind: a
  }
}

function Be(e, n) {
  return tt(e.realConfigHome, e.realConfigHome, n.nativeRel)
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
      return "unreadable"
  }
}
import {
  readdir as ir
} from "fs/promises";
import {
  isAbsolute as sr,
  join as ie,
  relative as ar,
  sep as lr
} from "path";
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
  let r = [];
  for (let o of n) {
    let s = N(o) ? o.matcher : void 0;
    if (typeof s !== "string") return z;
    if (s.trim() === "" || s === "*" || s === ".*") return z;
    r.push(s)
  }
  return {
    covers: "matchers",
    matchers: r
  }
}

function Kt(e) {
  if (e.covers === "all") return !0;
  let n = e.matchers;
  if (n.length === 0) return !1;
  return (r) => nE(r) ? n.some((o) => {
    let s = Vuo(o);
    return s === void 0 || s.some((a) => X_t(r, a))
  }) : n.some((o) => Guo(o, r))
}

function ur(e) {
  let n = e.filter(fto);
  if (n.length === 0) return;
  let r = n.map(jt);
  return n.find((s, a) => !Array.isArray(r[a])) ?? {
    PreToolUse: r.flatMap((s) => Array.isArray(s) ? s : [])
  }
}

function jt(e) {
  return N(e) && Object.hasOwn(e, "PreToolUse") ? e.PreToolUse : void 0
}

function Gt(e, n) {
  return e.covers === "all" || n.covers === "all" ? z : {
    covers: "matchers",
    matchers: L([...e.matchers, ...n.matchers])
  }
}

function cr({
  sources: e,
  sourcesIncomplete: n,
  processGuard: r,
  plugins: o,
  repoEnabledPluginKeys: s
}) {
  if (n || e.some((d) => !d.read) || o === null || o.errors.length > 0 || o.warnings.some((d) => d.type === "project-scope-suppressed-untrusted") || o.warnings.some((d) => d.type === "plugin-renamed" && (s === void 0 || s.has(rr(d.source)))) || o === null) return z;
  let u = o.enabled.filter((d) => d.scope === "project" || Oi(d.source) === Pi || d.scope !== "user" && (s === void 0 || s.has(rr(d.source))));
  if (u.some((d) => d.hooksConfig === void 0 && d.manifest.hooks !== void 0)) return z;
  return [r, ...e.map((d) => d.read ? _e(d.hooks) : z), ...u.map((d) => _e(d.hooksConfig))].reduce(Gt, {
    covers: "matchers",
    matchers: []
  })
}

function ze(e) {
  return e.some((n) => n.severity !== "warning" || n.path === "hooks" || n.path.startsWith("hooks."))
}

function Wt(e, n, r = BH) {
  return {
    sources: xs,
    hooksOf: (o) => {
      if (o === "userSettings" || o === "flagSettings") return;
      if (o === "policySettings") return me(o)?.hooks;
      let s = Je(o).map(we);
      return ur([...s.map((a) => a?.hooks), me(o)?.hooks])
    },
    sourcesIncomplete: () => ze(Bm().errors) || Xe().some((o) => ze(zt(o).errors)) || be.some((o) => !nn(o)) && pr(),
    processGuard: () => {
      let o = mr(),
        s = (n() ?? []).filter((a) => a.hooks.length > 0 && !gr(a.skillRoot, o));
      return Gt(_e(DQ()), _e({
        PreToolUse: s
      }))
    },
    loadPlugins: async () => {
      if ((await Promise.all(Xe().map(qbt))).some(Boolean)) throw Error("an --add-dir settings file names another host");
      let [o, s] = await Promise.all([rwe(e), nn("projectSettings") ? 0 : fr()]), a = s === 0 ? o : {
        ...o,
        warnings: [...o.warnings, {
          type: "project-scope-suppressed-untrusted",
          source: `(unlisted)@${$u}`,
          count: s,
          warning: "project skill directories on disk were not loaded: the project settings source is off for this process"
        }]
      }, u = new Set(Ye({
        enabledPlugins: {
          ...G9(),
          ...Bm().settings?.enabledPlugins ?? {}
        }
      })), d = Nt().filter((p) => !u.has(p)), f = be.some((p) => !nn(p)) ? a.enabled.filter((p) => p.settings?.agent !== void 0) : [];
      return d.length === 0 && f.length === 0 ? a : {
        ...a,
        errors: [...a.errors, ...d.map((p) => ({
          type: "generic-error",
          source: p,
          error: "enabled in a settings file this process did not load"
        })), ...f.map((p) => ({
          type: "generic-error",
          source: p.source,
          error: "names a main-thread agent this process did not resolve"
        }))]
      }
    },
    repoEnabledPluginKeys: () => new Set([...Nt(), ...Ye(me("policySettings"))].map(rr)),
    settingsToCloud: r
  }
}
async function fr() {
  let e = ie(so() ?? ke(), ".claude", "skills");
  if (e === ie(Pe(), "skills")) return 0;
  if (await qbt(e)) return 1;
  return ir(e, {
    withFileTypes: !0
  }).then((n) => F(n, (r) => r.isDirectory() || r.isSymbolicLink()), (n) => ["ENOENT", "ENOTDIR"].includes(k(n) ?? "") ? 0 : 1)
}

function pr() {
  return Bm().settings?.agent !== void 0 || be.flatMap((e) => Je(e).map(we)).some((e) => e?.agent !== void 0)
}
var be = xs.filter((e) => e !== "policySettings" && ef.has(e));

function mr() {
  let e = ie(Pe(), "skills");
  return {
    own: [e, ie(Pe(), "commands"), ULt()],
    synced: ie(e, Mj)
  }
}

function gr(e, n) {
  return e !== void 0 && !Dt(n.synced, e) && n.own.some((r) => Dt(r, e))
}

function Dt(e, n) {
  let r = ar(e, n);
  return r !== "" && r.split(lr)[0] !== ".." && !sr(r)
}

function Je(e) {
  return [fn(e), e === "localSettings" ? wh() : void 0].filter((n) => n !== void 0)
}

function Xe() {
  return hc().flatMap((e) => ["settings.json", "settings.local.json"].map((n) => ie(e, ".claude", n)))
}

function we(e) {
  let {
    settings: n,
    errors: r
  } = zt(e);
  if (ze(r)) throw Error("a settings file could not be read");
  return n
}

function zt(e) {
  if (gI(e)) throw Error("a settings file names another host");
  return lR(e)
}

function Nt() {
  return [...be.flatMap((n) => Je(n).map(we)), ...Xe().map(we)].flatMap(Ye)
}

function Ye(e) {
  return Object.entries(e?.enabledPlugins ?? {}).filter(([, n]) => n !== !1).map(([n]) => n)
}
async function Vt(e) {
  if (!await Promise.resolve().then(e.settingsToCloud).catch(() => !1)) return z;
  let n = e.sources.map((u) => {
      try {
        return {
          read: !0,
          hooks: e.hooksOf(u)
        }
      } catch {
        return {
          read: !1
        }
      }
    }),
    r;
  try {
    r = e.sourcesIncomplete()
  } catch {
    r = !0
  }
  let o;
  try {
    o = e.processGuard()
  } catch {
    o = z
  }
  let s;
  try {
    s = await e.loadPlugins()
  } catch {
    s = null
  }
  let a;
  try {
    a = e.repoEnabledPluginKeys?.()
  } catch {
    a = void 0
  }
  return cr({
    sources: n,
    sourcesIncomplete: r,
    processGuard: o,
    plugins: s,
    repoEnabledPluginKeys: a
  })
}
async function Xt() {
  dr();
  let e = rk("userSettings"),
    n = me("userSettings");
  return e.some(hr) || n === null && await yr(fn("userSettings")) ? {
    kind: "broken"
  } : {
    kind: "sendable",
    settings: n ?? {},
    hasLostAnAllowEntry: e.some(Yt)
  }
}

function hr(e) {
  return e.severity !== "warning" || e.path === "permissions" || e.path.startsWith("permissions.") && !Yt(e)
}

function Yt({
  path: e
}) {
  return e.startsWith("permissions.allow")
}
async function yr(e) {
  try {
    return e !== void 0 && (await se().lstat(e)).isSymbolicLink()
  } catch {
    return !1
  }
}
var Sr = 3,
  _r = 0;
async function ato({
  signal: e,
  storageV5: n,
  sessionPreToolUse: r = () => {
    return
  },
  launchConsent: o,
  now: s = Date.now,
  hookGuardHere: a = () => Vt(Wt(n, r, Vat(o).enabled))
} = {}) {
  let u = Vat(o);
  if (!Qj(u.enabledNow())) return {
    kind: "none",
    reason: "flag_off"
  };
  let d = s(),
    f = await br(e, a, o, u).catch((p) => {
      if (Ve(p) || N0(e)) return {
        kind: "none",
        reason: "aborted"
      };
      return l(p), {
        kind: "none",
        reason: "failed"
      }
    });
  return Jt(f, s() - d), f
}
async function br(e, n, r, o) {
  if (!cxe(r)) return {
    kind: "none",
    reason: "no_consent"
  };
  if (!Wo().includes("userSettings")) return {
    kind: "none",
    reason: "user_settings_disabled"
  };
  let s = Pe(),
    a = await Xt(),
    u = a.kind === "sendable" ? a : null,
    d = mXt(),
    [f, p] = await Promise.all([Tt({
      configHome: s,
      isUserSettingsFileSendable: u !== null,
      readRules: d,
      createFilter: Yhr,
      signal: e,
      settingsToCloud: o.enabled
    }), n().catch(() => ({
      covers: "all"
    }))]);
  if (i("tengu_home_seed_hook_guard", {
      kind: b(p.covers === "all" ? "all" : p.matchers.length > 0 ? "matchers" : "none"),
      matcher_count: p.covers === "all" ? 0 : p.matchers.length,
      allow_entry_lost_at_parse: u?.hasLostAnAllowEntry ?? !1
    }), N0(e) || !f.ok && f.reason === "aborted") return {
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
    configHome: s
  };
  let g = EOn(u?.settings ?? null, {
    preToolUseHookActiveHere: Kt(p),
    hasLostAnAllowEntryAtParse: u?.hasLostAnAllowEntry ?? !1,
    settingsToCloud: o.enabledNow
  });
  return kr({
    inventory: f.inventory,
    settings: g,
    configHome: s,
    unreadableSettingsFiles: (d.unreadableSettingsFiles ?? []).map((y) => bv() !== void 0 && y === LA() ? "--settings (inline JSON)" : y),
    writtenAtMs: _r
  })
}

function kr({
  inventory: e,
  settings: n,
  configHome: r,
  unreadableSettingsFiles: o,
  writtenAtMs: s
}) {
  let a = n.document,
    u = vr(e, n),
    d = {
      summary: u,
      leftBehind: e.leftBehind,
      unreadable: e.summary.unreadable,
      settings: a === null ? n.reason : "sent",
      configHome: r
    };
  if (e.summary.rulesUnreadable) return {
    kind: "empty",
    reason: "rules_unreadable",
    unreadableSettingsFiles: o,
    ...d,
    settings: a === null ? n.reason : "nothing_to_send"
  };
  if (e.entries.length === 0 && a === null) return {
    kind: "empty",
    reason: "nothing_to_send",
    ...d
  };
  return {
    kind: "ready",
    pack: tRt({
      generation: 1,
      writtenAtMs: s,
      files: e.entries.map((p) => Das(p.path, p.content)),
      settings: a,
      summary: u
    }),
    description: wr(e, a),
    ...d
  }
}

function wr(e, n) {
  return {
    claudeMd: e.entries.some((r) => r.kind === "claude_md"),
    rules: F(e.entries, (r) => r.kind === "rule"),
    outputStyles: F(e.entries, (r) => r.kind === "output_style"),
    inlinedImports: e.summary.inlinedImports,
    settingsKeys: n === null ? [] : Rr(n),
    permissionRules: (n?.permissions?.allow?.length ?? 0) + (n?.permissions?.deny?.length ?? 0) + (n?.permissions?.ask?.length ?? 0)
  }
}

function Rr(e) {
  return Object.keys(qt).filter((n) => e[n] !== void 0)
}

function vr(e, n) {
  let {
    counts: r
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
    settingsKeysWithheld: r.withheldKeys,
    credentialTextsWithheld: r.withheldCredentialTexts,
    rulesCoveringDeviceTools: r.rules.coveringDeviceTools,
    droppedRules: {
      rooted: r.rules.droppedRooted,
      device: r.rules.droppedDevice,
      invalid: r.rules.droppedInvalid,
      guarded: r.rules.droppedGuarded,
      overCap: r.rules.droppedOverCap,
      credential: r.rules.droppedCredential,
      credentialRestrictions: r.rules.droppedCredentialRestrictions
    }
  }
}
var pur = {
  kind: "none",
  reason: "self_hosted_runner"
};

function lto() {
  Jt(pur, 0)
}

function Jt(e, n) {
  if (e.kind === "none") {
    i("tengu_home_seed_plan", {
      outcome: c(e.reason),
      cause: e.reason === "home_unvettable" ? c(e.cause) : void 0,
      duration_ms: n
    });
    return
  }
  let {
    summary: r
  } = e, o = mur(e.leftBehind), s = {
    settings_keys_withheld: r.settingsKeysWithheld,
    credential_texts_withheld: r.credentialTextsWithheld,
    rules_dropped_rooted: r.droppedRules.rooted,
    rules_dropped_device: r.droppedRules.device,
    rules_dropped_invalid: r.droppedRules.invalid,
    rules_dropped_over_cap: r.droppedRules.overCap,
    rules_dropped_credential: r.droppedRules.credential,
    restrictions_dropped_credential: r.droppedRules.credentialRestrictions,
    rules_dropped_guarded: r.droppedRules.guarded,
    rules_covering_device_tools: r.rulesCoveringDeviceTools,
    withheld_sensitive: r.withheldSensitive,
    withheld_read_denied: r.withheldReadDenied,
    withheld_credential: o.others + (o.claudeMd ? 1 : 0),
    claude_md_withheld_credential: o.claudeMd,
    includes_not_sent: r.includesNotSent,
    symlinks_not_sent: r.symlinksNotSent,
    claude_md_link_not_sent: e.leftBehind.some((u) => u.reason === "symlink_not_sent" && u.path === j7),
    not_destinations: r.notDestinations,
    over_cap: r.overCap,
    unreadable: e.unreadable,
    duration_ms: n
  };
  if (e.kind === "empty") {
    i("tengu_home_seed_plan", {
      outcome: c(e.reason),
      settings: c(e.settings),
      settings_files_in_error: e.reason === "rules_unreadable" ? e.unreadableSettingsFiles.length : void 0,
      ...s
    });
    return
  }
  let {
    description: a
  } = e;
  i("tengu_home_seed_plan", {
    outcome: b("ready"),
    settings: c(e.settings),
    files: a.rules + a.outputStyles + (a.claudeMd ? 1 : 0),
    pack_bytes: e.pack.length,
    settings_keys: a.settingsKeys.length,
    rules_kept: a.permissionRules,
    includes_inlined: a.inlinedImports,
    ...s
  })
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
  let n = [...e.claudeMd ? ["CLAUDE.md"] : [], ...qe(e.rules, "rules file"), ...qe(e.outputStyles, "output-style file"), ...qe(e.permissionRules, "permission rule"), ...e.settingsKeys.flatMap((r) => r === "permissions" ? [] : [qt[r]]), ...e.inlinedImports > 0 ? [`${e.inlinedImports} @${O(e.inlinedImports,"import")} folded in`] : []];
  return n.length === 0 ? "Sent settings from this machine to the cloud session: only the narrowed permission allow list" : `Sent settings from this machine to the cloud session: ${n.join(", ")}`
}

function qe(e, n) {
  return e > 0 ? [`${e} ${O(e,n)}`] : []
}
var SOn = "Your deny and ask rules are not in force in the cloud session",
  wOn = "The cloud session's settings stay as they were",
  vOn = "Your deny and ask rules may not be in force in the cloud session";

function fur({
  summary: e,
  leftBehind: n,
  unreadable: r,
  settings: o,
  configHome: s
}, {
  launch: a,
  settingsFile: u
}) {
  let d = Es(s),
    f = [V(n, "symlink_not_sent", e.symlinksNotSent, (m) => `${m} linked ${O(m,"file")} (links are not followed)`), V(n, "include_not_sent", e.includesNotSent, (m) => `${m} @${O(m,"import")} outside ${d} or not markdown`), V(n, "sensitive", e.withheldSensitive, (m) => `${m} ${O(m,"file")} named like credentials`), V(n, "read_denied", e.withheldReadDenied, (m) => `${m} ${O(m,"file")} your Read rules or sandbox settings cover`), V(n, "not_destination", e.notDestinations, (m) => `${m} ${O(m,"file")} with ${O(m,"a name","names")} the cloud session cannot create`), V(n, "over_cap", e.overCap, (m) => `${m} ${O(m,"file")} over a limit of ${t4e} files, ${Zt($oe)} per file or ${Zt(p3t)} in total`), V(n, "unreadable", r, (m) => `${m} ${O(m,"file")} that changed while being read`), V(n, "undefusable", F(n, (m) => m.reason === "undefusable"), (m) => `${m} ${O(m,"file")} whose @imports could not be made safe`), V(n, "credential", F(n, (m) => m.reason === "credential"), (m) => `${m} ${O(m,"file")} ${Ze(m)}`)].flatMap((m) => m === null ? [] : [m]),
    p = e.droppedRules.rooted + e.droppedRules.device + e.droppedRules.invalid + e.droppedRules.overCap,
    g = e.droppedRules.credentialRestrictions,
    y = e.droppedRules.credential - g,
    S = e.credentialTextsWithheld,
    E = e.droppedRules.guarded,
    H = o === "schema_rejected" ? "failed validation" : o === "settings_too_large" ? "is over the size limit" : o === "settings_unreadable" ? "could not be read" : null,
    P = [...e.settingsKeysWithheld > 0 ? [`${e.settingsKeysWithheld} ${O(e.settingsKeysWithheld,"key")} (hooks, env and the like are never sent)`] : [], ...p > 0 ? [`${p} permission ${O(p,"rule")} that ${O(p,"names","name")} a path or device tool on this machine or could not be read`] : [], ...y > 0 ? [`${y} allow ${O(y,"rule")} ${Ze(y)}`] : [], ...S > 0 ? [`${S} ${O(S,"text")} (attribution, language, output style) ${Ze(S)}`] : [], ...E > 0 ? [`${E} allow ${O(E,"rule")} that stayed because a hook, a plugin or a rule that was not sent may guard ${O(E,"it","them")}`] : []],
    I = f.length > 0 ? [`Not sent from ${d}: ${f.join("; ")}`] : [];
  if (H !== null) return [a === "reopen_sent_nothing" ? `${wOn}: ${u} ${H}` : `${SOn}: ${u} ${H}; ${o==="settings_too_large"?"make it smaller":"fix it"} and ${a==="reopen_sent"?"re-open the session":"start a new cloud session"}`, ...I].join(". ");
  let x = P.length > 0 ? [`Settings kept on this machine: ${P.join("; ")}`] : [],
    h = g > 0 ? [`${g} deny or ask ${O(g,"rule is","rules are")} not in force in the cloud session: ${O(g,"it looks like it holds","they look like they hold")} a credential (reword ${O(g,"it","them")} in ${u})`, ...x, ...I] : [...I, ...x];
  return h.length === 0 ? null : h.join(". ")
}

function mur(e) {
  let n = e.filter((r) => r.reason === "credential").map((r) => r.path);
  return {
    claudeMd: n.includes(j7),
    others: F(n, (r) => r !== j7)
  }
}

function cto(e) {
  let n = e.filter((o) => o.reason === "symlink_not_sent").map((o) => o.path),
    r = [...n.filter((o) => o === j7), ...n.filter((o) => o !== j7)].slice(0, 2).map((o) => o === uAe || o === n4e ? `${o}/` : _n(o));
  return {
    names: r,
    more: n.length - r.length
  }
}

function Ze(e) {
  return `that ${O(e,"looks","look")} like ${O(e,"it holds","they hold")} a credential`
}

function V(e, n, r, o) {
  if (r === 0) return null;
  let s = e.filter((f) => f.reason === n).map((f) => _n(f.path) + (f.line === void 0 ? "" : `:${f.line}`)),
    a = s.slice(0, Sr),
    u = s.length - a.length,
    d = a.length === 0 ? "" : ` (${a.join(", ")}${u>0?` and ${u} more`:""})`;
  return o(r) + d
}
export {
  ato,
  pur,
  lto,
  dto,
  SOn,
  wOn,
  vOn,
  fur,
  mur,
  cto
};
