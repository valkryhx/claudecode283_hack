// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  f
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  R,
  Sr,
  k,
  kh,
  qt
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  Po,
  lne,
  q
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  we
} from "B:/~BUN/root/chunk-r5zmhp23.js";
import {
  En,
  hWt
} from "B:/~BUN/root/chunk-h4acfc9y.js";
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  g,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  t,
  u$e,
  ane,
  Zqe,
  ie
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  nf
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  on
} from "B:/~BUN/root/chunk-09sn55yf.js";
import {
  x
} from "B:/~BUN/root/chunk-mwfggkjt.js";
import {
  yie
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  Iw,
  m2n
} from "B:/~BUN/root/chunk-1g25msn4.js";
import {
  Xm,
  pe
} from "B:/~BUN/root/chunk-thn0wk2x.js";
import {
  mt,
  ime,
  O_,
  ame,
  bN
} from "B:/~BUN/root/chunk-d10hhz4p.js";
import {
  ro,
  u0
} from "B:/~BUN/root/chunk-nsneqfcc.js";
import {
  ku
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  sk,
  kho,
  Gc,
  Aa,
  iNt,
  oht,
  ACe,
  PCe
} from "B:/~BUN/root/chunk-j05gjqgd.js";
import {
  LQt,
  qP
} from "B:/~BUN/root/chunk-pw7914mv.js";
import {
  yv
} from "B:/~BUN/root/chunk-w36xzzgx.js";
import {
  n1,
  oPi,
  cL
} from "B:/~BUN/root/chunk-cxcakgnv.js";
import {
  ou
} from "B:/~BUN/root/chunk-epyd9ybj.js";
import {
  U,
  L
} from "B:/~BUN/root/chunk-5ha2avah.js";
import {
  isUtf8 as gt
} from "buffer";
import {
  constants as wt
} from "fs";
import {
  lstat as Rt,
  open as Et,
  readlink as St,
  realpath as Ae
} from "fs/promises";
import {
  normalize as Ft
} from "path";
import {
  normalize as Ie,
  parse as Me,
  sep as z
} from "path";
var He = 512,
  $e = 4096;

function ne(e) {
  return Array.isArray(e) && e.length > 0 && e.length <= He && e.every(je) ? e : void 0
}

function je(e) {
  return typeof e === "string" && e.length <= $e && !e.includes("\x00") && ame(e) && Ie(e) === e
}

function oe(e, n) {
  return e.some((i) => {
    let r = i.endsWith(z) && Me(i).root !== i ? i.slice(0, -z.length) : i;
    return n === r || n.startsWith(r + z)
  })
}
import {
  dirname as Se,
  join as ct,
  resolve as Fe
} from "path";
import {
  constants as et
} from "fs";
import {
  lstat as _e,
  open as tt,
  readdir as nt,
  readlink as it
} from "fs/promises";
import {
  join as ye,
  normalize as ot,
  sep as H
} from "path";
import {
  isAbsolute as re,
  normalize as se,
  parse as Be,
  sep as M
} from "path";
var B = 32,
  Xe = 4096;
async function le(e, {
  directories: n,
  unprobedDirectories: i = [],
  gate: r,
  heldFiles: o,
  filesEndingIn: a
}) {
  try {
    if (e === "" || e !== e.trim() || e.length > Xe || e.includes("\x00") || /^~(?:\/|$)/.test(e) || Be(e).root !== "" && !ame(e)) return {
      path: null,
      why: "unfit_text"
    };
    let m = n.filter((w) => ame(w)),
      d = i.filter((w) => ame(w)),
      u = new Set((re(e) ? [e] : m).map((w) => O_(e, w))),
      s = await G([...u], e, r);
    if (s === null) return {
      path: null,
      why: "too_many"
    };
    let p = new Set(o()),
      _ = new Set(s.flat());
    if ([...u, ...d.map((w) => O_(e, w))].some((w) => p.has(w) && !_.has(w))) return {
      path: null,
      why: "held_file_unreadable"
    };
    let E = s.filter((w) => w.some((F) => p.has(F)));
    if (s.length > 0) return Q(E.length > 0 ? E : s, "directories");
    let h = se(e);
    if (m.length === 0 || re(e) || h.length !== e.length || h.split(M).some((w) => ["", ".", ".."].includes(w))) return {
      path: null,
      why: "no_file"
    };
    let y = V(M + h, p, m),
      S = new Set(y);
    if (V(M + h, p, d).some((w) => !S.has(w))) return {
      path: null,
      why: "held_file_unreadable"
    };
    if (y.length === 0) {
      if (a === void 0) return {
        path: null,
        why: "needs_file_search"
      };
      if ([...p].some((F) => F.endsWith(M + h))) return {
        path: null,
        why: "held_file_unreadable"
      };
      let w = await a(h);
      if (w === null) return {
        path: null,
        why: "search_incomplete"
      };
      return w.length > B ? {
        path: null,
        why: "too_many"
      } : Q(await G(V(M + h, w, m), e, r), "file_search")
    }
    let T = await G(y, e, r);
    return T !== null && T.flat().length < y.length ? {
      path: null,
      why: "held_file_unreadable"
    } : Q(T, "file_state")
  } catch (m) {
    if (m instanceof ime) return {
      path: null,
      why: "unfit_text"
    };
    try {
      let d = k(m),
        u = m instanceof Error ? m.name : typeof m;
      t(`resolveAsWrittenPath failed: ${d===void 0?u:`${u}/${d}`}`, {
        level: "error"
      })
    } catch {}
    return {
      path: null,
      why: "fault"
    }
  }
}
async function G(e, n, i) {
  if (e.length > B) return null;
  let r = new Map;
  for (let o of e) {
    let a = await i(o, n);
    if (a !== null) r.set(a, [...r.get(a) ?? [], o])
  }
  return [...r.values()]
}

function Q(e, n) {
  if (e === null) return {
    path: null,
    why: "too_many"
  };
  let i = e[0]?.[0];
  return i === void 0 ? {
    path: null,
    why: "no_file"
  } : e.length > 1 ? {
    path: null,
    why: "tie"
  } : {
    path: i,
    step: n
  }
}

function V(e, n, i) {
  let r = new Set;
  for (let o of n)
    if (o.endsWith(e) && ame(o) && se(o) === o && i.some((a) => ou(a, o, !1))) r.add(o);
  return [...r]
}
import {
  constants as de
} from "fs";
import {
  lstat as ue,
  open as ce,
  opendir as Ue,
  readlink as Ye
} from "fs/promises";
import {
  isAbsolute as ze,
  join as Ge,
  resolve as he,
  sep as X,
  win32 as Qe
} from "path";
var Ufn = {
    invalid_path: "sad",
    unsupported_name: "sad",
    symlink_in_path: "sad",
    path_not_canonical: "sad",
    read_rule: "sad",
    not_found: "sad",
    not_a_directory: "sad",
    os_permission_denied: "sad",
    workspace_moved: "bad",
    unexpected_error: "bad"
  },
  ae = "list denied: ";

function xG(e, n) {
  return new Sr(`${ae}${e}`, n, e)
}

function Wrt(e) {
  if (!(e instanceof Sr)) return;
  let n = e.errorClass;
  return n !== void 0 && Ke(n) && e.message === `${ae}${n}` ? n : void 0
}

function Ke(e) {
  return Object.hasOwn(Ufn, e)
}
var YYn = 5000,
  J = 10 * YYn,
  Ve = 1024;
async function rLo(e, n, i, r) {
  try {
    if (typeof e !== "string" || e.length > Ve || e.includes("\x00") || e.includes("\\") || !nf(e) || Qe.parse(e).root !== "" || bN(e)) throw xG("invalid_path");
    if (!ze(n) || x() !== "linux") throw xG("unexpected_error");
    let o = he(n, e);
    if (!ou(n, o, !0)) throw xG("invalid_path");
    let a = i();
    if (cL(o, a.trustedNetworkDirectories) !== void 0) throw xG("unsupported_name");
    if (me(n, o, a)) throw xG("read_rule");
    await using m = await oLo(n, o);
    if (!(await Ye(`/proc/self/fd/${m.fd}`, {
        encoding: "buffer"
      }).catch((y) => {
        throw k(y) === "ENOENT" ? xG("unexpected_error") : y
      })).equals(Buffer.from(o))) throw xG("path_not_canonical");
    let u = await Je(m);
    if (r()) throw xG("workspace_moved");
    let s = i();
    if (s !== a && me(n, o, s)) throw xG("read_rule");
    let p = u.length > J;
    u.length = Math.min(u.length, J), u.sort((y, S) => y.name < S.name ? -1 : y.name > S.name ? 1 : 0);
    let _ = [],
      E = Xm(n, () => {
        for (let y of u) {
          let S = Ge(o, y.name);
          if (XYn(S, s, !y.isFile())) continue;
          if (y.name.trimEnd() !== y.name && XYn(`${S}${X}`, s, !y.isFile())) continue;
          if (_.length === YYn) return !0;
          _.push(y)
        }
        return !1
      }),
      h = await Promise.all(_.map((y) => Ze(m, y)));
    return {
      absPath: o,
      entries: h.filter((y) => y !== null),
      truncated: E || p && _.length > 0
    }
  } catch (o) {
    throw Wrt(o) !== void 0 ? o : qe(o)
  }
}
var fe = u0 | de.O_DIRECTORY | de.O_NOFOLLOW | ro;
async function oLo(e, n) {
  let i = n.split(X).filter((a) => a !== ""),
    r = U(he(e).split(X), (a) => a !== "") - 1,
    o = await ce(X, fe);
  for (let [a, m] of i.entries()) {
    await using d = o;
    let u = `/proc/self/fd/${d.fd}/${m}`;
    o = await ce(u, fe).catch(async (s) => {
      let p = k(s);
      if (p === "ENOENT") await ue(`/proc/self/fd/${d.fd}`).catch(() => {
        throw xG("unexpected_error")
      });
      if (p === "ENOTDIR" && (await ue(u)).isSymbolicLink()) throw xG(a < r ? "path_not_canonical" : "symlink_in_path");
      throw s
    })
  }
  return o
}
async function Je(e) {
  let n = await Ue(`/proc/self/fd/${e.fd}`).catch((r) => {
      throw k(r) === "ENOENT" ? xG("unexpected_error") : r
    }),
    i = [];
  for await (let r of n) if (i.push(r), i.length > J) break;
  return i
}
async function Ze(e, n) {
  let i = await yv(n, `/proc/self/fd/${e.fd}/${n.name}`, "unknown");
  if (i === "unknown") return null;
  if (i === "symlink") return {
    name: n.name,
    isDirectory: !1,
    isSymlink: !0
  };
  if (i === "other") return {
    name: n.name,
    isDirectory: !1,
    isSpecial: !0
  };
  return {
    name: n.name,
    isDirectory: i === "dir"
  }
}

function me(e, n, i) {
  return sLo(i) || Xm(e, () => iLo(n, i))
}

function sLo(e) {
  return ACe([], e).layer !== "allow"
}

function iLo(e, n) {
  return XYn(e, n, !0) || ["deny", "ask"].some((i) => iNt(e, n, "read", i) !== null)
}

function XYn(e, n, i) {
  return (i ? [{}, {
    isDirectory: !0
  }] : [{}]).some((o) => ["deny", "ask"].some((a) => Aa(e, n, "read", a, o) !== null))
}

function qe(e) {
  switch (k(e)) {
    case "ENOENT":
      return xG("not_found");
    case "ENOTDIR":
      return xG("not_a_directory");
    case "ELOOP":
      return xG("symlink_in_path");
    case "ENAMETOOLONG":
      return xG("invalid_path");
    case "EACCES":
    case "EPERM":
      return xG("os_permission_denied");
    default:
      let n = `list_directory failed: ${kh(e)??"not a filesystem error"}`;
      return t(n, {
        level: "error"
      }), xG("unexpected_error", n)
  }
}
var rt = 20000,
  st = 64,
  lt = 1024,
  at = 4096,
  ge = 16,
  dt = new Set([".git", "node_modules"]),
  ut = u0 | et.O_NOFOLLOW | ro;
class K extends Error {
  constructor() {
    super("searchFilesEndingIn: its time ran out before the search ended");
    this.name = "SearchCutShort"
  }
}

function v(e, n) {
  if (e.isOver()) throw new K;
  return e.counted(n())
}
async function Z(e, n) {
  if (e.work += n, e.work >= at) {
    if (e.work = 0, await ku(), e.isOver()) throw new K
  }
}

function ee(e, n, i) {
  return e.length > lt || cL(e, n.trustedNetworkDirectories) !== void 0 || !qP(e, n, "read", Zqe(e)).allowed || (i ? iLo(e, n) : XYn(e, n, !1))
}
async function Re(e, n, i, r) {
  if (e.directoriesRead.size >= e.maxDirectories) return e.isWhole = !1, !1;
  e.directoriesRead.add(i);
  let o = `/proc/self/fd/${n.fd}`,
    a = await v(e, () => nt(o, {
      withFileTypes: !0
    })).catch((d) => {
      if (qt(d)) return [];
      throw d
    }),
    m = [];
  for (let d of a) {
    await Z(e, 1);
    let {
      name: u
    } = d;
    if (["", ".", ".."].includes(u) || /[/\0]/.test(u)) continue;
    if (d.isDirectory()) {
      m.push(u);
      continue
    }
    let s = d.isFile();
    if (d.isFIFO() || d.isSocket() || d.isBlockDevice() || d.isCharacterDevice() || (s || d.isSymbolicLink()) && !e.names.has(u)) continue;
    await Z(e, ge);
    let p = ye(i, u);
    if (ee(p, e.rules, !s)) continue;
    let _ = d;
    if (!s && !d.isSymbolicLink()) {
      if (u.includes("\uFFFD")) return e.isWhole = !1, !1;
      try {
        _ = await v(e, () => _e(`${o}/${u}`))
      } catch (E) {
        if (qt(E)) continue;
        throw E
      }
    }
    if (_.isDirectory()) m.push(u);
    else if (_.isFile() && p.endsWith(e.suffix)) {
      if (e.found.add(p), e.found.size > B) return !1
    } else if (_.isSymbolicLink() && e.leadingRuns.some((E) => p.endsWith(E))) return e.isWhole = !1, !1
  }
  a.length = 0;
  for (let d of m) {
    await Z(e, ge);
    let u = ye(i, d);
    if (dt.has(d) || r >= st || e.directoriesRead.has(u) || ee(u, e.rules, !0)) continue;
    if (d.includes("\uFFFD")) return e.isWhole = !1, !1;
    let s;
    try {
      s = await v(e, () => tt(`${o}/${d}`, ut))
    } catch (E) {
      if (k(E) === "ENOENT") await v(e, () => _e(o));
      if (qt(E)) continue;
      throw E
    }
    await using p = s;
    let _ = await v(e, () => p.stat({
      bigint: !0
    }));
    if (_.isDirectory() && _.dev === e.device && !await Re(e, p, u, r + 1)) return !1
  }
  return !0
}
async function Ee(e, {
  roots: n,
  rules: i,
  counted: r,
  isOver: o,
  maxDirectories: a = rt
}) {
  if (sLo(i)) return [];
  if (e.includes("\uFFFD")) return null;
  let m = e.split(H),
    d = {
      rules: i,
      counted: r,
      isOver: o,
      maxDirectories: a,
      suffix: H + e,
      leadingRuns: m.map((u, s) => H + m.slice(0, s + 1).join(H)),
      names: new Set(m),
      found: new Set,
      directoriesRead: new Set,
      device: 0n,
      isWhole: !0,
      work: 0
    };
  try {
    for (let u of n) {
      let s = u.replace(/\/+$/, "") || H;
      if (!ame(u) || s !== ot(s) || d.directoriesRead.has(s) || ee(s, i, !0)) continue;
      let p;
      try {
        p = await v(d, () => oLo(s, s))
      } catch (h) {
        let y = Wrt(h);
        if (y === "symlink_in_path" || y === "path_not_canonical" || y === void 0 && qt(h)) continue;
        throw h
      }
      await using _ = p;
      if (!(await v(d, () => it(`/proc/self/fd/${_.fd}`, {
          encoding: "buffer"
        }))).equals(Buffer.from(s))) continue;
      if (d.device = (await v(d, () => _.stat({
          bigint: !0
        }))).dev, !await Re(d, _, s, 0)) break
    }
  } catch (u) {
    if (u instanceof K) return null;
    throw u
  }
  return d.isWhole ? [...d.found] : null
}
var ft = 1000;
async function pt(e, n, i) {
  if (q()) return null;
  let r = Fe(e);
  if (n.unresolved || n.landing !== En(r)) return null;
  let o = ie();
  for (let a = r; !i(); a = Se(a)) {
    let m = await o.lstat(ct(a, ".git")).catch(() => {
      return
    });
    if (m?.isDirectory() === !0 || m?.isFile() === !0 || m?.isSymbolicLink() === !0) return En(a);
    if (Se(a) === a) return null
  }
  return null
}
async function be(e, {
  heldFiles: n,
  search: i,
  timeLimitMs: r,
  stranded: o,
  whyNotBegin: a
}, m, d) {
  if (o.probes > 0) return {
    path: null,
    why: "stranded"
  };
  let u = a();
  if (u !== void 0) return {
    path: null,
    why: u
  };
  let s = pe(),
    p = (F) => cL(F, m.trustedNetworkDirectories) === void 0,
    _ = performance.now() + r,
    E = !1,
    h = () => E || performance.now() >= _,
    y = 0,
    S = (F) => (y++, F.finally(() => {
      y--, o.probes -= E ? 1 : 0
    })),
    T = {
      path: null,
      why: "no_file"
    },
    w = async () => {
      let F = null;
      if (p(s)) {
        let b = await S(ane(Fe(s)));
        if (h()) return T;
        F = await S(pt(s, b, h))
      }
      if (h()) return T;
      let N = [...sk(m)],
        A = L([s, F ?? s, ...N]),
        I = A.filter(p);
      for (let b of I) {
        if (h()) return T;
        if (b !== s) await S(ane(b))
      }
      if (h()) return T;
      return le(e, {
        directories: I,
        unprobedDirectories: A.filter((b) => !p(b)),
        gate: (b, D) => h() ? Promise.resolve(null) : S(d(b, D, m)),
        heldFiles: n,
        ...i?.isOn() === !0 && x() === "linux" && !q() && {
          filesEndingIn: (b) => {
            let D = Math.min(performance.now() + i.limitMs, _ - ft);
            return Ee(b, {
              roots: N.filter(p),
              rules: m,
              counted: S,
              isOver: () => h() || performance.now() >= D
            })
          }
        }
      })
    };
  try {
    let F = await we(Xm(s, w), r);
    return F === void 0 || h() ? {
      path: null,
      why: "time_limit"
    } : F
  } finally {
    E = !0, o.probes += y
  }
}
import {
  isAbsolute as ht,
  join as te,
  relative as _t,
  sep as yt
} from "path";

function Y(e, n) {
  return j(e.spelled, n) !== void 0 || j(e.resolved, n) !== void 0
}

function Te(e, n) {
  let [i, r] = j(e.spelled, n) !== void 0 ? [e.spelled, e.resolved] : [e.resolved, e.spelled], o = j(i, n);
  return o === void 0 || i === r ? void 0 : te(r, o)
}

function ke(e, n, i) {
  let r = j(e.resolved, i);
  return r !== void 0 && (n === te(e.spelled, r) || n === te(e.resolved, r))
}

function j(e, n) {
  let i = _t(e, n),
    r = i.split(yt);
  return r.length >= 2 && !ht(i) && r.every((o) => o !== "" && !o.startsWith(".")) ? i : void 0
}
var bt = 1e6,
  r1r = wt.O_RDONLY,
  Pe = {
    realpath: Ae,
    lstat: Rt,
    readlink: St
  },
  o1r = 1e7,
  Tt = new W(() => ({
    promise: void 0
  }));

function kt() {
  let e = Po(Tt);
  return e.promise ??= Promise.all([import("B:/~BUN/root/chunk-5rb1rw0r.js"), import("B:/~BUN/root/chunk-c2x69emx.js")]).then(([n, i]) => [...n.FIXED_USER_DATA_ROOTS, i.SYNCED_FILE_ROOT]).catch((n) => {
    throw e.promise = void 0, n
  }), e.promise
}

function Dt(e, n) {
  if (!n || n.size === 0) return !1;
  for (let i of n.values())
    if (i.includes(e)) return !0;
  return !1
}
async function JYn(e, n) {
  let i = [];
  try {
    i = await kt()
  } catch {}
  for (let r of sk(n)) {
    if (n.additionalWorkingDirectories.has(r) && !Dt(r, n.trustedNetworkDirectories) && await u$e(r, lne())) continue;
    let o;
    try {
      o = kho(r) ? r : await Ae(r)
    } catch {
      continue
    }
    if (hWt(r, o, lne())) continue;
    if (Gc(e, o, {
        caseFold: !1,
        skipPrivateAlias: !0,
        uncShapeParity: !0
      })) return !0
  }
  for (let r of i)
    if (Gc(e, r, {
        caseFold: !1,
        skipPrivateAlias: !0,
        uncShapeParity: !0
      })) return !0;
  return PCe(e, {}, [e], {
    remoteSurface: !0
  }).behavior === "allow"
}
var Ot = {
  nt_namespace: "read_file: NT-namespace path rejected before filesystem access",
  untrusted_unc: "read_file: untrusted UNC path rejected before filesystem access",
  untrusted_automount: "read_file: automount path rejected before filesystem access",
  unvettable_chain: "read_file: unvettable path ancestry rejected before filesystem access",
  link_text_climbs: 'read_file: path through a symlink whose target has ".." past its leading "../" segments rejected',
  suspicious_windows_spelling_nt_device_namespace: "read_file: suspicious Windows path spelling rejected (NT device namespace)",
  suspicious_windows_spelling_colon_past_drive_position: "read_file: suspicious Windows path spelling rejected (colon past the drive-letter position)",
  suspicious_windows_spelling_tilde_digit: "read_file: suspicious Windows path spelling rejected (tilde followed by a digit)",
  suspicious_windows_spelling_device_path_prefix: "read_file: suspicious Windows path spelling rejected (device-path prefix)",
  suspicious_windows_spelling_trailing_dot_or_whitespace: "read_file: suspicious Windows path spelling rejected (trailing dot or whitespace in a segment)",
  suspicious_windows_spelling_dos_device_suffix: "read_file: suspicious Windows path spelling rejected (DOS device-name suffix)",
  suspicious_windows_spelling_dot_run_segment: "read_file: suspicious Windows path spelling rejected (dot-run segment)",
  suspicious_windows_spelling_unc_or_webdav_form: "read_file: suspicious Windows path spelling rejected (UNC-like form: doubled or mixed separators, embedded NT root, or WebDAV marker)"
};

function O(e, n = "remote read denied") {
  return new Sr(`read denied: ${on(e)}`, n)
}
var C = {
    refused: !0,
    telemetryMessage: void 0,
    unsettled: !1,
    openFailure: void 0
  },
  De = {
    ...C,
    unsettled: !0
  };
async function ve(e, n, i, r, o, a, m) {
  let d = a ? await oPi(e, n, i.trustedNetworkDirectories) : n1(e, n, i.trustedNetworkDirectories);
  if (!d.ok) {
    let s = d.reason === "suspicious_windows_spelling" ? `suspicious_windows_spelling_${d.spelling}` : d.reason;
    return {
      ...C,
      telemetryMessage: Ot[s]
    }
  }
  for (let s of d.pathsToCheck)
    if (Oe(s, i, m)) return C;
  let u;
  try {
    u = await Et(n, r1r)
  } catch (s) {
    return {
      ...C,
      openFailure: {
        error: s
      }
    }
  }
  try {
    let s = await u.stat({
      bigint: !0
    });
    if (!s.isFile()) return C;
    let p;
    try {
      p = await r.realpath(n)
    } catch {
      return De
    }
    let _ = await m2n(u, s, p, r);
    if (_ === void 0) return De;
    if (p = _, Oe(p, i, m)) return C;
    if (cL(p, i.trustedNetworkDirectories) !== void 0) return C;
    if (m !== void 0 && Y(m, n) ? !ke(m, n, p) : !await JYn(p, i)) return C;
    return {
      refused: !1,
      value: await o({
        handle: u,
        openedStat: s,
        canonicalPath: p
      })
    }
  } finally {
    await u.close()
  }
}

function Oe(e, n, i) {
  let r = qP(e, n, "read"),
    o = r.allowed || i !== void 0 && n.restricted !== !0 && n.blockReadsOutsideWorkingDirectories !== !0 && LQt(r) && Y(i, e),
    a = i && Te(i, e);
  return !o || Aa(e, n, "read", "ask") !== null || a !== void 0 && ["deny", "ask"].some((m) => Aa(a, n, "read", m) !== null)
}

function We(e) {
  return e === void 0 ? void 0 : f(e)
}
async function B4e(e, n, i, {
  encoding: r = "utf-8",
  anchor: o,
  telemetrySource: a,
  containmentFs: m = Pe,
  asWrittenSources: d,
  syncedSkillsFolder: u
} = {}) {
  let s = Math.min(n && n > 0 ? n : bt, o1r),
    p = o?.kind === "as_written",
    _ = p ? "not_served" : void 0,
    E = !1;
  try {
    let h = o === void 0 || p ? void 0 : await (await import("B:/~BUN/root/chunk-0a71mg0e.js")).resolveAnchoredReadPath(e, o);
    if (h === null) throw O(e);
    let y = () => {
        let D = d?.whyNotServed();
        if (D !== void 0) throw _ = D, O(e)
      },
      S;
    if (p) {
      if (d === void 0) throw O(e);
      y();
      let D = ne(o.within);
      if (D === void 0) throw _ = "unfit_within", O(e);
      _ = "fault";
      let P = await be(e, d, typeof i === "function" ? i() : i, (Ce, Ne, Le) => Wt(Ce, Ne, Le, m));
      if (_ = P.path === null ? P.why : P.step, P.path === null) throw O(e);
      if (!oe(D, P.path)) throw _ = "outside", O(e);
      S = P.path
    }
    let T = typeof i === "function" ? i() : i,
      w = h?.absPath ?? S ?? mt(e),
      F = o === void 0 ? u?.() : void 0,
      N = F !== void 0 && oht(T) ? void 0 : F;
    E = N !== void 0 && Y(N, w);
    let A = await ve(e, w, T, m, ({
      handle: D,
      openedStat: P
    }) => Iw(D, s, P.size), p, N);
    if (A.refused) throw A.openFailure === void 0 ? O(e, A.telemetryMessage) : A.openFailure.error;
    let {
      bytes: I,
      overLimit: b
    } = A.value;
    if (S !== void 0) y();
    if (E && u?.() === void 0) throw O(e);
    if (a) l("tengu_bridge_read_file_served", {
      success: !0,
      source: f(a),
      size_bytes: I.length,
      requested_max_bytes: s,
      truncated: b,
      ext: yie(w),
      as_written_lookup: We(_)
    });
    if (E) g("remote_read_synced_skills");
    return {
      contents: I.toString(r === "base64" ? "base64" : "utf-8"),
      absPath: w,
      ...b && {
        truncated: b
      },
      ...r === "base64" ? {
        encoding: r
      } : {
        lossy: !gt(I)
      },
      ...h !== void 0 && {
        anchor: h.kind
      },
      ...S !== void 0 && {
        anchor: "as_written"
      }
    }
  } catch (h) {
    try {
      let y = h instanceof Error ? "code" in h && typeof h.code === "string" ? `${h.name}/${h.code}` : h.name : typeof h;
      t(`readFileForRemote failed pre-deny: ${y}${_===void 0?"":`, as_written look-up: ${_}`}`, {
        level: "error"
      })
    } catch {}
    try {
      if (a) l("tengu_bridge_read_file_served", {
        success: !1,
        source: f(a),
        as_written_lookup: We(_)
      });
      if (E) c("remote_read_synced_skills", "not_served")
    } catch {}
    try {
      if (_ !== void 0) d?.onRefusal(_)
    } catch {}
    if (h instanceof R && h.message.startsWith("read denied: ")) throw h;
    throw O(e)
  }
}
class xe extends Error {
  constructor() {
    super("probeFileForRemote: cannot tell whether the path names a file");
    this.name = "UnsettledRemoteFileError"
  }
}
async function Wt(e, n, i, r = Pe) {
  if (!ame(e) || Ft(e) !== e) return null;
  let o = await ve(n, e, i, r, ({
    canonicalPath: a
  }) => Promise.resolve(a), !0, void 0);
  if (!o.refused) return o.value;
  if (o.openFailure !== void 0) {
    let {
      error: a
    } = o.openFailure;
    if (qt(a) || ["EISDIR", "ENXIO", "ENOTSUP", "EOPNOTSUPP"].includes(k(a) ?? "")) return null;
    throw a
  }
  if (o.unsettled) throw new xe;
  return null
}
export {
  Ufn,
  xG,
  Wrt,
  YYn,
  rLo,
  oLo,
  sLo,
  iLo,
  XYn,
  r1r,
  o1r,
  JYn,
  B4e
};
