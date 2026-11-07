// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Pe
} from "B:/~BUN/root/chunk-vz9zea4j.js";
import {
  b,
  f,
  de
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  F,
  d,
  k
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  J
} from "B:/~BUN/root/chunk-r5zmhp23.js";
import {
  Oc,
  W$r,
  pne
} from "B:/~BUN/root/chunk-h4acfc9y.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  g,
  m,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  v
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  P,
  Oi,
  tt,
  Wn,
  Il
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  Nn
} from "B:/~BUN/root/chunk-jdtvghyw.js";
import {
  x
} from "B:/~BUN/root/chunk-mwfggkjt.js";
import {
  fr
} from "B:/~BUN/root/chunk-1g25msn4.js";
import {
  pe
} from "B:/~BUN/root/chunk-thn0wk2x.js";
import {
  yn,
  fS,
  ys
} from "B:/~BUN/root/chunk-88zb3509.js";
import {
  ro,
  u0,
  xna,
  Pna,
  o$e,
  hjt
} from "B:/~BUN/root/chunk-nsneqfcc.js";
import {
  xf,
  BHe
} from "B:/~BUN/root/chunk-x1xft50h.js";
import {
  ku,
  Ds,
  Ol,
  Cc
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  be,
  Ga
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  hs
} from "B:/~BUN/root/chunk-zn7b14jn.js";
import {
  ent
} from "B:/~BUN/root/chunk-1x03q1j7.js";
import {
  Qyo
} from "B:/~BUN/root/chunk-m749kjym.js";
import {
  uDn,
  gy,
  JXe,
  jhs,
  jco,
  GLi,
  bSr
} from "B:/~BUN/root/chunk-3v5ng1y2.js";
import {
  d_e,
  Dgs,
  Lgs,
  Ix,
  B0e,
  yuo,
  c_e,
  bpt,
  Bgs,
  r0t
} from "B:/~BUN/root/chunk-hjds4dtx.js";
import {
  L0i,
  C0e,
  N7t,
  kbr,
  vbr,
  Kdo,
  Ebr,
  qdo,
  Ydo,
  mms,
  Eb,
  Xdo,
  Tbr,
  Jdo,
  wMn,
  N0i,
  Qdo,
  Cbr,
  F0i,
  uze,
  kMn,
  hms,
  Rbr,
  $0i,
  gms,
  F7t,
  vMn,
  U0i,
  B0i,
  U$,
  LZ,
  j0i,
  TDt,
  Zdo,
  CDt,
  EMn,
  eco,
  Abr,
  xbr,
  W0i,
  TMn,
  yms,
  CMn,
  RDt,
  _ms,
  bms,
  fze,
  Pbr,
  Sms,
  wms,
  B9,
  H7t,
  z0i,
  Wft,
  $7t,
  Obr,
  zft,
  Mce,
  RMn,
  kms,
  Dce
} from "B:/~BUN/root/chunk-4tz0m6qq.js";
import {
  pOi,
  fyr,
  COi
} from "B:/~BUN/root/chunk-cxcakgnv.js";
import {
  Vwn,
  tui
} from "B:/~BUN/root/chunk-f75fgfra.js";
import {
  mFi
} from "B:/~BUN/root/chunk-8ytf4evt.js";
import {
  DFi
} from "B:/~BUN/root/chunk-yscb2r3d.js";
import {
  tLe
} from "B:/~BUN/root/chunk-ymawhbhz.js";
import {
  Ja
} from "B:/~BUN/root/chunk-v91d7hbv.js";
import {
  en
} from "B:/~BUN/root/chunk-mdq0dxn3.js";
import {
  U,
  L
} from "B:/~BUN/root/chunk-5ha2avah.js";
import {
  lstat as Ot,
  open as ad,
  realpath as dd,
  stat as Vi,
  unlink as _r
} from "fs/promises";
import {
  basename as Ji,
  dirname as Ze,
  isAbsolute as ld,
  join as ut,
  resolve as wo
} from "path";
import {
  mkdtemp as Ho,
  open as Uo,
  rm as Wo
} from "fs/promises";
import {
  join as Yr
} from "path";
async function Kr(e, n = xf()) {
  let r = await Ho(Yr(n, `${e}-`));
  return {
    path: Yr(r, "out.bundle"),
    dispose: () => Wo(r, {
      recursive: !0,
      force: !0
    }).catch(() => {})
  }
}
async function Xr(e, n) {
  let r;
  try {
    r = await Uo(e, Cc())
  } catch (o) {
    return {
      kind: "unreadable",
      detail: String(o)
    }
  }
  try {
    let o = await r.stat();
    if (!o.isFile() || o.nlink !== 1) return {
      kind: "unreadable",
      detail: "not a single regular file"
    };
    if (o.size > n) return {
      kind: "too_large",
      sizeBytes: o.size
    };
    let s = Buffer.alloc(o.size),
      a = 0;
    while (a < o.size) {
      let {
        bytesRead: h
      } = await r.read(s, a, o.size - a, a);
      if (h === 0) break;
      a += h
    }
    return a === o.size ? {
      kind: "read",
      content: s
    } : {
      kind: "unreadable",
      detail: "changed while being read"
    }
  } catch (o) {
    return {
      kind: "unreadable",
      detail: String(o)
    }
  } finally {
    await r.close()
  }
}
import {
  chmod as zo,
  mkdir as zn,
  open as al,
  readdir as Yo,
  readFile as Ko,
  rm as Xo,
  stat as qo,
  writeFile as qr
} from "fs/promises";
import {
  join as Ue
} from "path";
var Vo = new Map([
    ["# v2 git bundle", "sha1"],
    [`# v3 git bundle
@object-format=sha1`, "sha1"],
    [`# v3 git bundle
@object-format=sha256`, "sha256"]
  ]),
  Jo = {
    sha1: /^([0-9a-f]{40}) ([^\0-\x20\x7f]+)$/,
    sha256: /^([0-9a-f]{64}) ([^\0-\x20\x7f]+)$/
  },
  Zo = /unable to read [0-9a-f]{40}|missing (?:blob|tree|commit|tag) object|bad (?:tree )?object [0-9a-f]{40}|[Cc]ould not read [0-9a-f]{40}|Failed to traverse parents|bogus commit object|too-short tree (?:object|file)|malformed mode in tree entry|empty filename in tree entry|[Oo]bject [0-9a-f]{40,64} (?:is a \w+, )?not a (?:tree|commit|blob|tag)|mode, but is not a (?:tree|blob)|exceeded maximum allowed tree depth/,
  Qo = /^(?:error|fatal):/m,
  es = Buffer.from("PACK\x00\x00\x00\x02", "latin1"),
  ts = es.length;
var ns = {
    sha1: "4b825dc642cb6eb9a060e54bf8d69288fbee4904",
    sha256: "6ef19b41225c5369f1c104d45d8d85efa9b057b53b14b4b9b939dd74decc5321"
  },
  an = Buffer.from("\xFFtOc\x00\x00\x00\x02", "latin1"),
  sn = an.length + 1024;

function rs(e) {
  let n = e.indexOf(`

`),
    r = e.toString("latin1", 0, Math.max(n, 0)).split(`
`),
    o = r.findIndex((h, u) => u > 0 && !h.startsWith("@")),
    s = Vo.get(r.slice(0, o).join(`
`));
  if (o < 0 || s === void 0) return null;
  let a = r.slice(o).flatMap((h) => {
    let [, u, p] = Jo[s].exec(h) ?? [];
    return u === void 0 || p === void 0 ? [] : [{
      id: u,
      name: p
    }]
  });
  return a.length === r.length - o && L(a.map((h) => h.name)).length === a.length ? {
    objectFormat: s,
    refs: a,
    packOffset: n + 2
  } : null
}
async function is(e, n) {
  let r = await Ko(e).catch(() => null);
  if (r === null || r.length < sn || !r.subarray(0, an.length).equals(an)) return null;
  let o = Buffer.from(n, "hex"),
    s = (u) => u < 0 ? 0 : r.readUInt32BE(an.length + u * 4),
    [a, h] = [s(o[0] - 1), s(o[0])];
  if (sn + h * o.length > r.length) return null;
  return Array.from({
    length: h - a
  }, (u, p) => a + p).some((u) => r.subarray(sn + u * o.length, sn + (u + 1) * o.length).equals(o))
}

function os(e) {
  return {
    GIT_DIR: e,
    GIT_COMMON_DIR: e,
    GIT_WORK_TREE: e,
    GIT_OBJECT_DIRECTORY: Ue(e, "objects"),
    GIT_ALTERNATE_OBJECT_DIRECTORIES: "",
    GIT_NO_LAZY_FETCH: "1",
    GIT_GRAFT_FILE: Ue(e, "info", "grafts"),
    GIT_SHALLOW_FILE: Ue(e, "shallow"),
    GIT_NO_REPLACE_OBJECTS: "1",
    GIT_CONFIG_NOSYSTEM: "1",
    GIT_CONFIG_GLOBAL: Ue(e, "no-global-config"),
    GIT_CONFIG_COUNT: "0",
    GIT_CONFIG_PARAMETERS: "",
    GIT_ATTR_NOSYSTEM: "1",
    XDG_CONFIG_HOME: e,
    GIT_TEST_PACK_PATH_WALK: "0",
    LC_ALL: "C",
    LANGUAGE: "C"
  }
}
async function Jr(e, {
  scratchRoot: n
}, r) {
  let o = rs(e);
  if (o === null) return {
    ok: !1,
    kind: "header",
    detail: "not a whole bundle"
  };
  let s = e.subarray(o.packOffset),
    a = Ue(n, "check"),
    h = await ss(a, o.objectFormat);
  if (h !== null) return {
    ok: !1,
    kind: "scratch",
    detail: h
  };
  try {
    let u = os(a),
      p = await r(["-C", a, "index-pack", "--index-version=2", "--stdin"], {
        env: u,
        input: s
      });
    if (p.code !== 0) return {
      ok: !1,
      kind: p.exitCode === void 0 ? "unfinished" : "index",
      detail: Vr(p)
    };
    let [, w] = /^pack\t([0-9a-f]+)$/m.exec(p.stdout) ?? [], _ = Ue(a, "objects", "pack", `pack-${w}`), y = await qo(`${_}.pack`).catch(() => null);
    if (y === null) return {
      ok: !1,
      kind: "index",
      detail: "no indexed pack to read"
    };
    if (y.size !== s.length) return {
      ok: !1,
      kind: "trailing",
      detail: `${s.length-y.size} bytes follow the pack`
    };
    let E = ns[o.objectFormat],
      B = await is(`${_}.idx`, E);
    if (B === null) return {
      ok: !1,
      kind: "index",
      detail: "no pack index to read"
    };
    let I = await r(["-C", a, "rev-list", "--objects", "--count", "--stdin"], {
      env: u,
      input: `${[...L(o.refs.map((T)=>T.id)),`^${E}`].join(`
`)}
`
    });
    if (I.code !== 0 || Qo.test(C0e(I))) return {
      ok: !1,
      kind: I.exitCode === void 0 ? "unfinished" : Zo.test(C0e(I)) ? "objects" : "walk",
      detail: Vr(I)
    };
    let R = s.readUInt32BE(ts) - (B ? 1 : 0),
      A = I.stdout.trim();
    if (!/^\d+$/.test(A)) return {
      ok: !1,
      kind: "walk",
      detail: "git printed no object count"
    };
    return A === String(R) ? {
      ok: !0
    } : {
      ok: !1,
      kind: "unlisted",
      detail: `${R} objects packed, its refs lead to ${A}, the empty tree not counted`
    }
  } catch (u) {
    return {
      ok: !1,
      kind: "unfinished",
      detail: String(u)
    }
  } finally {
    await Zr(a)
  }
}
async function Zr(e) {
  let n = Ue(e, "objects", "pack"),
    r = await Yo(n).catch(() => []);
  await Promise.all(r.map((o) => zo(Ue(n, o), 420).catch(() => {}))), await Xo(e, {
    recursive: !0,
    force: !0
  }).catch(() => {})
}
async function ss(e, n) {
  try {
    await zn(e)
  } catch (r) {
    return String(r)
  }
  try {
    if (await zn(Ue(e, "objects", "pack"), {
        recursive: !0
      }), await zn(Ue(e, "refs")), await qr(Ue(e, "HEAD"), `ref: refs/heads/rebuild
`), n === "sha256") await qr(Ue(e, "config"), `[core]
	repositoryformatversion = 1
[extensions]
	objectformat = sha256
`);
    return null
  } catch (r) {
    return await Zr(e), String(r)
  }
}

function Vr(e) {
  return Wn(e.stderr.trim()) || (e.exitCode === void 0 ? "git did not finish" : `exit ${e.code}`)
}

function Qr(e) {
  if (e?.checkout === void 0) return "layout_not_read";
  if (e.checkout === "main") return "main_checkout";
  let n = CDt(e.commonDir),
    r = gy(n, e.workTree);
  if (n === e.commonDir) return r ? "beneath_git_directory" : "outside_git_directory";
  return r ? "beneath_repository" : "outside_repository"
}

function ei(e) {
  switch (e) {
    case "main_checkout":
      return g("teleport_git_bundle_from_main_checkout");
    case "beneath_repository":
      return g("teleport_git_bundle_from_beneath_repository");
    case "outside_repository":
      return g("teleport_git_bundle_from_outside_repository");
    case "beneath_git_directory":
      return g("teleport_git_bundle_from_beneath_git_directory");
    case "outside_git_directory":
      return g("teleport_git_bundle_from_outside_git_directory");
    case "layout_not_read":
      return g("teleport_git_bundle_from_layout_not_read")
  }
}
var ti = "Do not run git in this folder: git may act on what was put there.",
  ni = "a fresh clone from the remote (with no remote: a new folder and git init), copy your files over by hand, but not the .git folder, then",
  ri = "Keep this folder: commits that you have not pushed, other branches and stashes exist only here.";
import {
  randomBytes as as
} from "crypto";
import {
  createReadStream as ds,
  createWriteStream as ls
} from "fs";
import {
  unlink as us
} from "fs/promises";
import {
  Transform as cs
} from "stream";
import {
  pipeline as fs
} from "stream/promises";
var yt = "refs/seed/stash",
  bt = "refs/seed/root",
  Yn = "refs/seed/",
  gs = 7200000,
  ms = 65536,
  ps = /^refs\/seed\/(\d+)-[0-9a-f]{16}\/(?:stash|root)$/;

function ii(e = Date.now()) {
  let n = `${e}-${as(8).toString("hex")}`;
  return {
    stash: `${Yn}${n}/stash`,
    root: `${Yn}${n}/root`
  }
}

function oi(e, n = Date.now()) {
  return e.filter((r) => {
    if (r === yt || r === bt) return !0;
    let o = ps.exec(r);
    return o !== null && Math.abs(n - Number(o[1])) > gs
  })
}
async function si(e, n, r, o) {
  let s = new ai(r);
  try {
    return await fs(ds(e), s, ls(n, {
      flags: "wx"
    }), {
      signal: o
    }), {
      ok: !0,
      sizeBytes: s.outputBytes
    }
  } catch (a) {
    if (k(a) !== "EEXIST") await us(n).catch(() => {});
    return {
      ok: !1,
      error: d(a)
    }
  }
}
class ai extends cs {
  labels;
  outputBytes = 0;
  state = "signature";
  version = 2;
  sawRef = !1;
  pending = Buffer.alloc(0);
  applied = new Set;
  constructor(e) {
    super();
    this.labels = e
  }
  _transform(e, n, r) {
    try {
      if (this.state === "pack") this.writeOut(e);
      else this.pending = this.pending.length === 0 ? e : Buffer.concat([this.pending, e]), this.consumeHeaderLines();
      r()
    } catch (o) {
      r(F(o))
    }
  }
  _flush(e) {
    e(this.state === "pack" ? null : Error("bundle ended before the end of its header"))
  }
  writeOut(e) {
    let n = typeof e === "string" ? Buffer.from(e, "latin1") : e;
    this.outputBytes += n.length, this.push(n)
  }
  consumeHeaderLines() {
    for (;;) {
      let e = this.pending.indexOf(10);
      if (e < 0) {
        if (this.pending.length > ms) throw Error("bundle header line too long");
        return
      }
      let n = this.pending.toString("latin1", 0, e);
      if (this.pending = this.pending.subarray(e + 1), this.state === "signature") {
        if (n === "# v2 git bundle") this.version = 2;
        else if (n === "# v3 git bundle") this.version = 3;
        else throw Error("not a v2 or v3 git bundle");
        this.state = "header", this.writeOut(`${n}
`);
        continue
      }
      if (n === "") {
        if (this.applied.size !== this.labels.size) throw Error("bundle header does not name every ref to relabel");
        this.state = "pack", this.writeOut(`
`), this.writeOut(this.pending), this.pending = Buffer.alloc(0);
        return
      }
      this.writeOut(`${this.headerLine(n)}
`)
    }
  }
  headerLine(e) {
    if (e.startsWith("@")) {
      if (this.version !== 3 || this.sawRef) throw Error("bundle capability line out of place");
      return e
    }
    this.sawRef = !0;
    let n = e.indexOf(" "),
      r = n < 0 ? e : e.slice(0, n);
    if (e.startsWith("-")) {
      if (!Dce.test(r.slice(1))) throw Error("malformed bundle prerequisite line");
      return e
    }
    let o = r,
      s = e.slice(n + 1);
    if (n < 0 || s === "" || !Dce.test(o)) throw Error("malformed bundle ref line");
    let a = this.labels.get(s);
    if (a !== void 0) {
      if (this.applied.has(s)) throw Error("bundle header names a ref to relabel twice");
      return this.applied.add(s), `${o} ${a}`
    }
    if (s.startsWith(Yn)) throw Error("bundle header carries a seed ref that is not this build's");
    return e
  }
}
import {
  createHash as xn,
  randomBytes as _i
} from "crypto";
import {
  lstat as lt,
  stat as ma,
  mkdir as ki,
  mkdtemp as Yt,
  open as At,
  readdir as Mi,
  readFile as pa,
  readlink as wa,
  rm as It,
  unlink as Rn,
  writeFile as dr
} from "fs/promises";
import {
  dirname as wr,
  isAbsolute as ya,
  join as ae
} from "path";
import {
  constants as ws
} from "fs";
import {
  open as bs,
  realpath as _s
} from "fs/promises";
import {
  release as ks
} from "os";
var Es = [".git", "git~1"];

function je(e, n) {
  return !Rs(e) && !(x() === "wsl" && e.includes("\\")) && !Ss(e, n)
}

function Rs(e) {
  return e.includes("\x00") || !Vwn(Kn(e)) || Kn(e).split("/").some((n) => Es.includes(Ol(n))) || tui(Kn(e))
}

function Ss(e, n) {
  return n && e.replaceAll("\\", "/").split("/").some((r) => r.includes(":") || /[. ]$/.test(r))
}
var xs = /^[^~.]{1,6}~[0-9]+(?:\.[^.]{1,3})?$/;

function it(e) {
  let n = x();
  return (n === "windows" || n === "wsl") && e.replaceAll("\\", "/").split("/").some((r) => xs.test(tt(r, ":").replace(/[. ]+$/, "")))
}
async function Ft(e) {
  return await vs(e) !== "no"
}
async function vs(e) {
  let n = x();
  if (n === "windows") return "yes";
  if (n !== "wsl") return "no";
  let r = e.split("/").includes("..") || Oc(e) ? null : await _s(e).catch(() => null);
  if (r === null) return "unsure";
  let o = await li(),
    s = o === null ? null : await li();
  if (o === null || s === null || !o.equals(s)) return "unsure";
  let h = o.toString("utf8").split(`
`).filter((w) => w !== ""),
    u = h.flatMap((w) => {
      let _ = w.split(" "),
        y = _.indexOf("-"),
        [E, B, , , I] = _,
        R = y >= 0 ? _[y + 1] : void 0;
      if (E === void 0 || B === void 0 || I === void 0 || R === void 0) return [];
      let A = [_[5], _[y + 3]].filter(Boolean).join(",");
      return [{
        id: E,
        parent: B,
        point: o$e(I),
        windowsSide: xna({
          fstype: R,
          source: _[y + 2],
          options: A
        }),
        windowsDrive: Pna(R, A)
      }]
    });
  if (u.length !== h.length) return "unsure";
  if (u.some((w) => w.windowsSide && w.point !== r && hjt(w.point, r))) return "unsure";
  let p = Ts(r, u);
  return p === null || p === "unsure" ? "unsure" : p.windowsDrive ? "yes" : p.windowsSide ? "unsure" : "no"
}

function Ts(e, n) {
  if (U(n, (u) => u.point === "/") > 1) return "unsure";
  let r = new Set(n.map((u) => u.id)),
    o = (u) => {
      let p = u.filter((E) => hjt(e, E.point)),
        w = Math.min(...p.map((E) => E.point.length)),
        [_, y] = p.filter((E) => E.point.length === w);
      return _ === void 0 ? null : y === void 0 ? _ : "unsure"
    },
    s = (u, p) => {
      if (p === 0) return null;
      let w = o(n.filter((_) => _.parent === u.id && _ !== u));
      return w === null ? u : w === "unsure" ? w : s(w, p - 1)
    },
    [a, h] = n.filter((u) => (!r.has(u.parent) || u.parent === u.id) && hjt(e, u.point));
  return a === void 0 ? null : h !== void 0 ? "unsure" : s(a, n.length)
}

function Kn(e) {
  return x() === "windows" ? e.replaceAll("\\", "/") : e
}
var di = 4194304;
async function li() {
  let [, e, n] = /^(\d+)\.(\d+)/.exec(ks()) ?? [];
  if (!(Number(e) > 5 || Number(e) === 5 && Number(n) >= 8)) return null;
  let r = await Cs("/proc/self/mountinfo", di).catch(() => null);
  return r === null || r.length >= di ? null : r
}
async function Cs(e, n) {
  let r = await bs(e, ws.O_RDONLY | ro);
  try {
    let o = [],
      s = 0;
    while (s < n) {
      let a = Buffer.allocUnsafe(65536),
        {
          bytesRead: h
        } = await r.read(a, 0, a.length, null);
      if (h === 0) break;
      o.push(a.subarray(0, h)), s += h
    }
    return Buffer.concat(o)
  } finally {
    await r.close()
  }
}
import {
  createHash as Mt
} from "crypto";
import {
  constants as at
} from "fs";
import {
  lstat as _t,
  mkdir as Bs,
  open as Jn,
  readlink as dn,
  unlink as Xn
} from "fs/promises";
import {
  basename as As,
  dirname as Tt,
  join as dt
} from "path";
var Is = 8,
  ln = 1048576,
  Os = 536870912;
async function Zn(e, n, r, o, s) {
  let a = r.find((R) => !Vwn(R));
  if (a !== void 0) return {
    refused: `${a}: not a path git writes`,
    tooLarge: !1,
    momentary: !1
  };
  let h = 0,
    u = null,
    p = Gt(r),
    w = new Set(r),
    _ = Ja(Is, async (R) => {
      await s.beforeOpen?.(R);
      let A = !1,
        T = await Ye(e, R);
      if (T === "symlink") return {
        kind: "absent",
        path: R
      };
      if (T === "unreadable") return {
        refused: `${R}: a directory above it could not be inspected`,
        tooLarge: !1,
        momentary: !0
      };
      await s.beforeRead?.(R);
      let S = await un(e, R, s.ntfsRules),
        z = (Y) => Ns(e, R, Y);
      switch (S.kind) {
        case "absent":
          return {
            kind: "absent", path: R
          };
        case "refused":
          return w.has(R) ? {
            refused: `${R}: ${S.why}`,
            tooLarge: !1,
            momentary: S.momentary
          } : {
            kind: "absent",
            path: R
          };
        case "hardlinked":
          return {
            kind: "hardlinked", path: R
          };
        case "moved":
          return {
            kind: "changed", path: R
          };
        case "not_read":
          return (S.why === "name_not_plain" || S.why === "beyond_a_link") && !w.has(R) ? {
            kind: "absent",
            path: R
          } : {
            kind: "not_read",
            path: R,
            why: S.why
          };
        case "symlink":
          return {
            kind: "symlink", path: R, target: S.target
          };
        case "file":
          try {
            if (h += S.size, u === null || S.size > u.size) u = {
              path: R,
              size: S.size
            };
            if (h > o) return {
              refused: `${u.path} (largest, ${u.size} bytes): ${h} bytes of changed files exceed the ${o}-byte cap`,
              tooLarge: !0,
              momentary: !1
            };
            let D = dt(n, R);
            await Bs(Tt(D), {
              recursive: !0
            });
            let H;
            try {
              H = await Jn(D, at.O_WRONLY | at.O_CREAT | at.O_EXCL | ro, S.executable ? 493 : 420)
            } catch (O) {
              if (k(O) === "EEXIST") return {
                refused: `${R}: collides with another changed path that differs only in case or normalization`,
                tooLarge: !1,
                momentary: !1
              };
              throw O
            }
            try {
              let O = await S.handle.stat({
                bigint: !0
              });
              if (s.notOlderThanNs !== void 0 && O.ctimeNs >= s.notOlderThanNs && O.ctimeNs < (BigInt(Date.now()) + 1n) * 1000000n) return await H.close(), await Xn(D).catch(() => {}), {
                kind: "changed",
                path: R,
                sincePassStart: !0
              };
              let me = Mt("sha256"),
                X = s.objectFormat === void 0 ? null : Mt(s.objectFormat).update(`blob ${O.size}\x00`),
                ve = 0,
                le = !1,
                Te = Buffer.allocUnsafe(Math.min(S.size, ln)),
                ie = 0;
              while (ie < S.size) {
                let {
                  bytesRead: Re
                } = await S.handle.read(Te, 0, Math.min(Te.length, S.size - ie), ie);
                if (Re === 0) break;
                if (me.update(Te.subarray(0, Re)), X !== null) {
                  let W = Te.subarray(0, Re);
                  X.update(W), ve += gi(W, le), le = W.at(-1) === 13
                }
                let Ne = 0;
                while (Ne < Re) {
                  let {
                    bytesWritten: W
                  } = await H.write(Te, Ne, Re - Ne);
                  Ne += W
                }
                ie += Re
              }
              await s.afterRead?.(R);
              let K = await S.handle.stat({
                  bigint: !0
                }),
                _e = s.objectFormat !== void 0 && ve > 0 ? fi(s.objectFormat, ie, ve) : null;
              if (BigInt(ie) !== O.size || K.size !== O.size || K.mtimeNs !== O.mtimeNs || K.ctimeNs !== O.ctimeNs || !await $s(S.handle, ie, me.digest(), _e?.update)) return await H.close(), await Xn(D).catch(() => {}), {
                kind: "changed",
                path: R
              };
              let Ce = await z(S);
              if (Ce !== "same") return await H.close(), await Xn(D).catch(() => {}), {
                kind: Ce,
                path: R
              };
              await H.utimes(S.atime, S.mtime);
              let he = await H.stat({
                bigint: !0
              });
              return {
                kind: "file",
                path: R,
                bytes: ie,
                copy: {
                  ino: Number(he.ino),
                  dev: Number(he.dev),
                  ctimeNs: he.ctimeNs,
                  size: Number(he.size),
                  identity: ci(he),
                  ...X !== null && {
                    blobId: X.digest("hex"),
                    ..._e !== null && {
                      lfBlobId: _e.digest()
                    }
                  }
                }
              }
            } finally {
              await H.close().catch(() => {})
            }
          } catch (Y) {
            let D = k(Y);
            return {
              refused: `${R}: could not be staged (${D??d(Y)})`,
              tooLarge: !1,
              momentary: D === void 0 || !Vn.has(D)
            }
          } finally {
            await S.handle.close()
          }
      }
    }),
    y = await Promise.all([...r, ...p].map(_)),
    E = y.find((R) => ("refused" in R));
  if (E !== void 0) return E.tooLarge ? {
    ...E,
    claimedBytes: h
  } : E;
  let B = y.filter((R) => !("refused" in R)),
    I = B.flatMap((R) => R.kind === "not_read" ? [R.why] : []);
  return {
    entries: B.filter((R) => w.has(R.path) || R.kind === "hardlinked" || R.kind === "changed" || R.kind === "not_read"),
    copies: B.flatMap((R) => R.kind === "file" ? [R] : Qn(R.path) ? [{
      kind: "absent",
      path: R.path
    }] : [])
  }
}
async function ui(e, n) {
  return (await Promise.all(n.map(async (o) => {
    if (o.kind === "absent") return _t(dt(e, o.path)).then(() => !1, (s) => {
      let a = k(s);
      return a === "ENOENT" || a === "ENOTDIR"
    });
    if (o.kind !== "file") return !0;
    try {
      let s = await _t(dt(e, o.path), {
        bigint: !0
      });
      return s.isFile() && s.nlink === 1n && Number(s.ino) === o.copy.ino && Number(s.dev) === o.copy.dev && ci(s) === o.copy.identity && s.ctimeNs === o.copy.ctimeNs && Number(s.size) === o.copy.size
    } catch {
      return !1
    }
  }))).every(Boolean)
}

function ci(e) {
  return e.dev === 0n || e.ino === 0n ? null : `${e.dev}:${e.ino}`
}
async function Ns(e, n, r) {
  let o = await _t(dt(e, n), {
    bigint: !0
  }).catch(() => null);
  if (o !== null && o.isFile() && o.nlink > 1n) return "hardlinked";
  return o === null || !o.isFile() || o.ino !== r.ino || o.dev !== r.dev || await Ye(e, n) !== "clear" ? "changed" : "same"
}
async function $s(e, n, r, o) {
  let s = Mt("sha256"),
    a = Buffer.allocUnsafe(Math.min(n + 1, ln)),
    h = 0;
  for (;;) {
    let {
      bytesRead: u
    } = await e.read(a, 0, a.length, h);
    if (u === 0) break;
    if (s.update(a.subarray(0, u)), o?.(a.subarray(0, u)), h += u, h > n) return !1
  }
  return h === n && s.digest().equals(r)
}

function fi(e, n, r) {
  let o = Mt(e).update(`blob ${n-r}\x00`),
    s = !1;
  return {
    update(a) {
      if (a.length === 0) return;
      if (s && a[0] !== 10) o.update(Buffer.from([13]));
      s = a.at(-1) === 13;
      let h = s ? a.subarray(0, a.length - 1) : a;
      o.update(h.toString("latin1").replaceAll(`\r
`, `
`), "latin1")
    },
    digest() {
      if (s) o.update(Buffer.from([13]));
      return o.digest("hex")
    }
  }
}

function Qn(e) {
  let n = x(),
    r = hi(e).at(-1) ?? "";
  return n === "macos" || n === "windows" || n === "wsl" ? r.toLowerCase() === ".gitattributes" : r === ".gitattributes"
}

function Gt(e) {
  let n = new Set(e);
  return (e.length === 0 ? [] : [".gitattributes", ...pOi(e).map((r) => `${r}/.gitattributes`)]).filter((r) => !n.has(r))
}
var Vn = new Set(["ENAMETOOLONG", "ENOTDIR", "EISDIR", "EINVAL", "ELOOP"]);
var Ps = 92,
  Fs = 47;

function Ls(e, n = x()) {
  return n === "windows" ? Buffer.from(e.map((r) => r === Ps ? Fs : r)) : e
}
async function Ms(e, n) {
  if (n !== "linux") return dn(e, {
    encoding: "buffer"
  });
  let r = await Jn(Tt(e), u0 | at.O_DIRECTORY | ro);
  try {
    let o = `/proc/self/fd/${r.fd}`,
      s = await dn(o);
    return s === Tt(e) ? await dn(dt(o, As(e)), {
      encoding: "buffer"
    }) : s === `${Tt(e)} (deleted)` ? "moved" : "elsewhere"
  } finally {
    await r.close()
  }
}
async function un(e, n, r) {
  if (!je(n, r)) return {
    kind: "refused",
    why: "not a path git writes",
    momentary: !1
  };
  let o = dt(e, n),
    s = "win32",
    a = at.O_RDONLY | (s === "darwin" ? Os : at.O_NOFOLLOW) | (at.O_NONBLOCK ?? 0) | (at.O_NOCTTY ?? 0),
    h;
  try {
    if (s === "win32") {
      let u = await _t(o);
      if (u.isSymbolicLink()) throw Object.assign(Error("symbolic link"), {
        code: "ELOOP"
      });
      if (!u.isFile()) return {
        kind: "refused",
        why: "not a regular file",
        momentary: !1
      }
    }
    h = await Jn(o, s === "win32" ? "r" : a)
  } catch (u) {
    let p = k(u);
    if (p === "ENOENT" || p === "ENOTDIR") return {
      kind: "absent"
    };
    if (p === "ELOOP" || p === "EMLINK" || p === "EFTYPE") try {
      let y = await Ms(o, s);
      if (y === "moved") return {
        kind: "moved"
      };
      let E = await Ye(e, n);
      if (E === "symlink") return {
        kind: "absent"
      };
      if (E === "unreadable") return {
        kind: "refused",
        why: "a directory above it could not be inspected",
        momentary: !0
      };
      if (y !== "elsewhere") return {
        kind: "symlink",
        target: Ls(y)
      };
      return l("tengu_upload_stage_link_read_elsewhere", {}), {
        kind: "refused",
        why: "resolved outside its directory",
        momentary: !1
      }
    } catch {
      return {
        kind: "refused",
        why: "changed while being read",
        momentary: !0
      }
    }
    let w = s === "win32" ? null : await _t(o).catch(() => null),
      _ = w !== null && !w.isFile() && !w.isSymbolicLink();
    return {
      kind: "refused",
      why: `could not be opened (${p??"unknown"})`,
      momentary: !_ && (p === void 0 || !Vn.has(p))
    }
  }
  try {
    let u = await h.stat({
      bigint: !0
    });
    if (!u.isFile()) return await h.close(), {
      kind: "refused",
      why: "not a regular file",
      momentary: !1
    };
    if (u.nlink > 1n) return await h.close(), {
      kind: "hardlinked"
    };
    if (s === "linux") {
      let p = await dn(`/proc/self/fd/${h.fd}`);
      if (p !== o) return await h.close(), p === `${o} (deleted)` || Tt(p) === Tt(o) ? {
        kind: "moved"
      } : {
        kind: "refused",
        why: "resolved outside its directory",
        momentary: !1
      }
    }
    return {
      kind: "file",
      handle: h,
      size: Number(u.size),
      ino: u.ino,
      dev: u.dev,
      executable: (u.mode & 0o111n) !== 0n,
      atime: u.atime,
      mtime: u.mtime
    }
  } catch (u) {
    await h.close().catch(() => {});
    let p = k(u);
    return {
      kind: "refused",
      why: d(u),
      momentary: p === void 0 || !Vn.has(p)
    }
  }
}

function hi(e) {
  return (x() === "windows" ? e.replaceAll("\\", "/") : e).split("/")
}
async function Ye(e, n) {
  let r = e;
  for (let o of hi(n).slice(0, -1)) {
    r = dt(r, o);
    try {
      if ((await _t(r)).isSymbolicLink()) return "symlink"
    } catch (s) {
      let a = k(s);
      if (a === "ENOENT" || a === "ENOTDIR") return "clear";
      return "unreadable"
    }
  }
  return "clear"
}
async function er(e, n, r, o, s) {
  if (await Ye(e, n) !== "clear") return null;
  let a = await un(e, n, s);
  if (a.kind !== "file") return null;
  try {
    if (a.size > o) return null;
    let h = Buffer.alloc(a.size + 1),
      u = 0;
    while (u < h.length) {
      let {
        bytesRead: w
      } = await a.handle.read(h, u, h.length - u, u);
      if (w === 0) break;
      u += w
    }
    if (u !== a.size) return null;
    let p = await _t(dt(e, n), {
      bigint: !0
    }).catch(() => null);
    if (p === null || !p.isFile() || p.nlink > 1n || p.ino !== a.ino || p.dev !== a.dev || await Ye(e, n) !== "clear") return null;
    return Gs(h.subarray(0, a.size), r)
  } catch {
    return null
  } finally {
    await a.handle.close().catch(() => {})
  }
}

function Gs(e, n) {
  let r = n === 64 ? "sha256" : "sha1",
    o = Us(e);
  return [e, ...o === null ? [] : [o]].flatMap((s) => js(s, r))
}

function js(e, n) {
  let r = Mt(n).update(`blob ${e.length}\x00`).update(e).digest("hex"),
    o = gi(e, !1);
  if (o === 0) return [r];
  let s = fi(n, e.length, o);
  for (let a = 0; a < e.length; a += ln) s.update(e.subarray(a, a + ln));
  return [r, s.digest()]
}
var qn = 36,
  Lt = Buffer.from("$Id:"),
  Hs = Buffer.from("$Id$");

function Us(e) {
  let n = e.indexOf(Lt);
  if (n === -1) return null;
  let r = Buffer.allocUnsafe(e.length),
    o = e.copy(r, 0, 0, n),
    s = n;
  while (s < e.length) {
    let a = -1;
    if (e[s] === qn && e[s + 1] === Lt[1] && e[s + 2] === Lt[2] && e[s + 3] === Lt[3]) {
      let h = s + Lt.length;
      while (h < e.length && e[h] !== qn && e[h] !== 10) h++;
      a = e[h] === qn ? h : -1
    }
    if (a === -1) r[o++] = e[s++];
    else o += Hs.copy(r, o), s = a + 1
  }
  return o === e.length ? null : r.subarray(0, o)
}

function gi(e, n) {
  let r = n && e[0] === 10 ? 1 : 0;
  if (!e.includes(13)) return r;
  for (let o = 1; o < e.length; o++)
    if (e[o] === 10 && e[o - 1] === 13) r++;
  return r
}
import {
  createHash as sr,
  randomBytes as cu
} from "crypto";
import {
  access as hu,
  copyFile as gu,
  mkdir as ta,
  readdir as mu,
  rename as pu,
  rm as wu,
  writeFile as yu
} from "fs/promises";
import {
  dirname as na,
  join as _u
} from "path";
import {
  deflate as ra
} from "zlib";
import {
  promisify as ia
} from "util";
import {
  createHash as Ws
} from "crypto";
import {
  constants as tr
} from "fs";
import {
  mkdtemp as zs,
  open as Ys,
  rm as Ks
} from "fs/promises";
import {
  join as mi
} from "path";
var cn = {
    failed: "unreadable"
  },
  jt = {
    failed: "tampered"
  },
  Xs = {
    failed: "missing"
  },
  qs = 67108864,
  Vs = 4000000,
  Js = new Set(["100644", "100755", "120000", "40000", "160000"]);

function Ie(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e) && !(e instanceof Map) && "failed" in e && typeof e.failed === "string"
}
var Ht = "40000",
  yi = "160000",
  Zs = "120000",
  pi = (e) => e.padStart(6, "0"),
  wi = (e) => e === yi ? "gitlink" : e === Zs ? "link" : "file";

function nr(e, n) {
  return async (r) => {
    let o = null;
    try {
      o = await zs(mi(n, "claude-seed-reads-"));
      let s = await Ys(mi(o, "batch"), tr.O_RDWR | tr.O_CREAT | tr.O_EXCL | ro, 384);
      try {
        let a = await e(["cat-file", "--batch"], void 0, r, void 0, s.fd),
          {
            size: h
          } = await s.stat();
        if (a.code !== 0 || h > qs) return null;
        let u = Buffer.alloc(h);
        for (let p = 0; p < h;) {
          let {
            bytesRead: w
          } = await s.read(u, p, h - p, p);
          if (w === 0) return null;
          p += w
        }
        return u
      } finally {
        await s.close().catch(() => {})
      }
    } catch {
      return null
    } finally {
      if (o !== null) await Ks(o, {
        recursive: !0,
        force: !0
      }).catch(() => {})
    }
  }
}
class rr {
  fetch;
  listings = new Map;
  bodies = new Map;
  algorithm;
  idLength;
  constructor(e, n) {
    this.fetch = e;
    this.algorithm = n.length === 64 ? "sha256" : "sha1", this.idLength = n.length
  }
  hashes(e, n, r) {
    return Ws(this.algorithm).update(`${e} ${n.length}\x00`).update(n).digest("hex") === r
  }
  async trees(e) {
    let n = L(e.filter((o) => !this.listings.has(o)));
    if (n.length === 0) return !0;
    let r = await this.read("tree", n);
    if (Ie(r)) return r;
    for (let [o, s] of r) {
      let a = Qs(s, this.idLength / 2);
      if (a === null) return jt;
      if (a === "malformed") return {
        failed: "malformed",
        tree: o
      };
      this.listings.set(o, a)
    }
    return !0
  }
  listing(e) {
    return this.listings.get(e)
  }
  async commit(e) {
    let n = await this.commits([e]);
    return Ie(n) ? n : n.get(e)
  }
  async commits(e) {
    let n = L([...e]),
      r = n.length === 0 ? new Map : await this.read("commit", n);
    if (Ie(r)) return r;
    let o = new Map;
    for (let [s, a] of r) {
      let h = a.subarray(0, Math.max(0, a.indexOf(`

`))).toString("latin1").split(`
`),
        u = /^tree ([0-9a-f]{40,64})$/.exec(h[0] ?? "")?.[1],
        p = [];
      for (let w of h.slice(1)) {
        let _ = /^parent ([0-9a-f]{40,64})$/.exec(w)?.[1];
        if (_ === void 0) break;
        p.push(_)
      }
      if (u === void 0 || [u, ...p].some((w) => w.length !== this.idLength)) return jt;
      o.set(s, {
        tree: u,
        parents: p
      })
    }
    return o
  }
  async blobs(e) {
    return e.length === 0 ? new Map : this.read("blob", L([...e]))
  }
  async read(e, n) {
    let r = await this.fetch(n.map((a) => `${a}
`).join(""));
    if (r === null) return cn;
    if (Ie(r)) return r;
    let o = new Map,
      s = 0;
    for (let a of n) {
      let h = r.indexOf(10, s);
      if (h === -1) return cn;
      let u = r.subarray(s, h).toString("latin1");
      if (u === `${a} missing`) return Xs;
      let p = /^([0-9a-f]{40,64}) (\w+) (\d+)$/.exec(u);
      if (p === null || p[1] !== a) return cn;
      if (p[2] !== e) return jt;
      let w = Number(p[3]),
        _ = Buffer.from(r.subarray(h + 1, h + 1 + w));
      if (_.length !== w) return cn;
      if (!this.hashes(e, _, a)) return jt;
      if (e !== "blob") this.bodies.set(a, _);
      o.set(a, _), s = h + 1 + w + 1
    }
    return o
  }
}

function Qs(e, n) {
  let r = new Map,
    o = 0,
    s = null,
    a = !1;
  while (o < e.length) {
    let h = e.indexOf(32, o),
      u = h === -1 ? -1 : e.indexOf(0, h + 1);
    if (h === -1 || u === -1 || u + 1 + n > e.length) return null;
    let p = e.subarray(h + 1, u),
      w = e.subarray(o, h).toString("latin1");
    if (!fn(w)) return null;
    let _ = hn(w),
      y = {
        name: p,
        isTree: _ === Ht
      },
      E = p.toString("latin1");
    if (!ir(p) || r.has(E)) return null;
    if (!Js.has(_) || s !== null && ea(s, y) >= 0) a = !0;
    s = y, r.set(E, {
      mode: _,
      id: e.subarray(u + 1, u + 1 + n).toString("hex")
    }), o = u + 1 + n
  }
  return a ? "malformed" : r
}

function ir(e) {
  return e.length > 0 && !e.includes(47) && !(e.length === 1 && e[0] === 46) && !(e.length === 2 && e[0] === 46 && e[1] === 46)
}

function ea(e, n) {
  let r = Math.min(e.name.length, n.name.length),
    o = e.name.subarray(0, r).compare(n.name.subarray(0, r));
  if (o !== 0) return o;
  let s = (a) => a.name.length > r ? a.name[r] : a.isTree ? 47 : 0;
  return s(e) - s(n)
}

function fn(e) {
  return /^[0-7]+$/.test(e)
}

function hn(e) {
  let n = fn(e) ? Array.from(e.slice(-11)).reduce((r, o) => (r << 3 | Number(o)) >>> 0, 0) : 0;
  switch (n & 61440) {
    case 32768:
      return n & 64 ? "100755" : "100644";
    case 40960:
      return "120000";
    case 16384:
      return Ht;
    case 57344:
      return yi;
    default:
      return e.replace(/^0+/, "")
  }
}
async function Ut(e, n, r) {
  let o = "0".repeat(e.idLength),
    s = [],
    a = n === r ? [] : [{
      prefix: Buffer.alloc(0),
      base: n,
      other: r
    }],
    h = 0;
  while (a.length > 0) {
    let u = a.flatMap(({
        base: _,
        other: y
      }) => [_, y]).filter((_) => _ !== null),
      p = await e.trees(u);
    if (p !== !0) {
      if (p.failed !== "malformed") return p;
      let _ = a.find(({
        base: y,
        other: E
      }) => y === p.tree || E === p.tree);
      return _ === void 0 ? p : {
        ...p,
        dir: _.prefix.toString("utf8").replace(/\/$/, "")
      }
    }
    let w = [];
    for (let {
        prefix: _,
        base: y,
        other: E
      }
      of a) {
      let B = y === null ? new Map : e.listing(y),
        I = E === null ? new Map : e.listing(E),
        R = L([...B.keys(), ...I.keys()]).sort();
      if (h += R.length, h > Vs) return jt;
      for (let A of R) {
        let T = B.get(A),
          S = I.get(A);
        if (T !== void 0 && S !== void 0 && T.id === S.id && T.mode === S.mode) continue;
        let z = Buffer.concat([_, Buffer.from(A, "latin1")]),
          Y = T?.mode === Ht,
          D = S?.mode === Ht;
        if (Y || D) w.push({
          prefix: Buffer.concat([z, Buffer.from("/")]),
          base: Y ? T.id : null,
          other: D ? S.id : null
        });
        let H = T !== void 0 && !Y ? T : void 0,
          O = S !== void 0 && !D ? S : void 0;
        if (H === void 0 && O === void 0) continue;
        s.push({
          path: z.toString("utf8"),
          pathBytes: z,
          status: H === void 0 ? "A" : O === void 0 ? "D" : wi(H.mode) !== wi(O.mode) ? "T" : "M",
          oldMode: H === void 0 ? "000000" : pi(H.mode),
          newMode: O === void 0 ? "000000" : pi(O.mode),
          oldId: H?.id ?? o,
          newId: O?.id ?? o
        })
      }
    }
    a = w
  }
  return s
}
async function Ct(e, n, r) {
  let o = new Map,
    s = await e.trees([n]);
  if (s !== !0) return s;
  let a = r.map((h) => ({
    name: h,
    segments: h.split("/"),
    at: 0,
    tree: n
  }));
  while (a.length > 0) {
    let h = await e.trees(a.map(({
      tree: w
    }) => w));
    if (h !== !0) return h;
    let u = [],
      p = [];
    for (let w of a) {
      let _ = e.listing(w.tree)?.get(Buffer.from(w.segments[w.at], "utf8").toString("latin1"));
      if (_ === void 0) continue;
      let y = w.at === w.segments.length - 1;
      if (_.mode === Ht)
        if (y) p.push(_.id);
        else u.push({
          ...w,
          at: w.at + 1,
          tree: _.id
        });
      else if (y) o.set(w.name, {
        id: _.id,
        mode: _.mode
      })
    }
    if (p.length > 0) {
      let w = await e.trees(p);
      if (w !== !0) return w
    }
    a = u
  }
  return o
}
var gn = {
    latin1: "\xEF\xBB\xBF",
    utf8: "\uFEFF"
  },
  or;

function ar(e, n) {
  let r = or ??= (async () => {
    let o = Buffer.from([65, 233, 128, 255, 195, 40, 66]),
      s = await e(["hash-object", "-w", "--stdin"], n, o);
    if (s.code !== 0) throw Error("probe blob not written");
    let a = await e(["cat-file", "--batch"], n, `${s.stdout.trim()}
`, "latin1");
    if (a.code !== 0) throw Error("probe blob not read");
    let h = a.stdout.slice(a.stdout.indexOf(`
`) + 1);
    return Buffer.from(h, "latin1").equals(o) ? "latin1" : "utf8"
  })();
  return r.catch(() => {
    if (or === r) or = void 0;
    return "utf8"
  })
}
var $u = ia(ra);
var oa = ["filter", "working-tree-encoding", "ident"];
async function mn(e, n, r, o, s) {
  if (n.length === 0) return [];
  let a = new Set(n.filter((E) => r.get(E) === null)),
    h = (E) => [E, ...r.get(E) ?? []],
    u = (E) => h(E).flatMap((B) => s.normalizationBlind ? L([B, B.normalize("NFC"), B.normalize("NFD")]) : [B]),
    p = L(n.flatMap(u));
  if (o?.prepareIndexAndStore !== void 0) {
    let E = await o.prepareIndexAndStore(p, o);
    if (E !== !0) return E
  } else if (o !== null) {
    if ((await e(["-c", "core.splitIndex=false", "read-tree", o.commit ?? o.tree], {
        GIT_INDEX_FILE: o.indexPath
      })).code !== 0) return null;
    await ta(o.objectsDir, {
      recursive: !0,
      mode: 448
    });
    let B = {
        GIT_INDEX_FILE: o.indexPath,
        GIT_OBJECT_DIRECTORY: o.objectsDir,
        GIT_ALTERNATE_OBJECT_DIRECTORIES: ""
      },
      I = await ar(e, B),
      R = await sa(e, o, o.indexPath, p, I, o.refusesGitlinkedRules === !0);
    if (R === null || R === "old_git" || R === "tampered") return R;
    for (let {
        name: A,
        id: T,
        text: S,
        markStripped: z
      }
      of R.blobs) {
      let Y = await e(["hash-object", "-w", "--stdin"], B, Buffer.from(S, I)),
        D = Y.stdout.trim();
      if (Y.code !== 0 || D !== T && !z) return null;
      if (D !== T) {
        let H = await e(["hash-object", "-w", "--stdin"], B, Buffer.from(gn[I] + S, I));
        if (H.code !== 0 || H.stdout.trim() !== T) return null;
        if ((await e(["-c", "core.splitIndex=false", "update-index", "--cacheinfo", `100644,${D},${A}`], B)).code !== 0) return null
      }
    }
  }
  let w = await e([...s.caseBlind ? ["-c", "core.ignorecase=true"] : [], "-c", "core.sparseCheckout=false", "check-attr", ...o === null ? [] : ["--cached"], "-z", "--stdin", ...oa], o === null ? void 0 : {
    GIT_INDEX_FILE: o.indexPath,
    GIT_OBJECT_DIRECTORY: o.objectsDir,
    GIT_ALTERNATE_OBJECT_DIRECTORIES: ""
  }, p.map((E) => `${E}\x00`).join(""));
  if (w.maxBufferExceeded) return "overflow";
  if (w.code !== 0) return null;
  let _ = w.stdout.split("\x00"),
    y = new Set;
  for (let E = 0; E + 2 < _.length; E += 3) {
    let [B, I] = [_[E + 1], _[E + 2]];
    if (!(I === "unspecified" || I === "unset" || B === "ident" && I === "false")) y.add(_[E])
  }
  return n.filter((E) => a.has(E) || u(E).some((B) => y.has(B)))
}
async function sa(e, n, r, o, s, a) {
  let h = L([...Gt(o), ...o.filter((A) => A.split("/").at(-1) === ".gitattributes")]),
    u = await Ydo(e, r, new Set(h), na(r));
  if (u === null) return null;
  let p = n.commit !== void 0 ? await ca(e, n.commit, h, s) : await bi(e, n.tree, h);
  if (p === null || p === "tampered") return p;
  if (a && [...p.values()].some(({
      mode: A
    }) => A === "160000")) return null;
  let w = (A) => {
    let T = p.get(A),
      S = u.get(A);
    return T === void 0 ? S === void 0 : S !== void 0 && Kdo(S) && S.id === T.id && hn(S.mode) === T.mode
  };
  if (h.some((A) => !w(A))) return "tampered";
  let _ = [...p],
    y = await kbr(_.map(([A]) => `:0:${A}`)).reduce(async (A, T) => {
      let S = await A;
      if (S === "tampered" || S === null) return S;
      let z = await e(["-c", "core.precomposeUnicode=false", "rev-parse", ...T], {
        GIT_INDEX_FILE: r
      });
      return z.code === 0 ? [...S, ...z.stdout.split(`
`).filter((Y) => Y !== "")] : z.exitCode === 128 ? "tampered" : null
    }, Promise.resolve([]));
  if (y === null) return null;
  if (y === "tampered" || y.length !== _.length || _.some(([, A], T) => y[T] !== A.id)) return "tampered";
  let E, B = new Map,
    I = async (A) => {
      let T = B.get(A);
      if (T !== void 0) return T;
      let S = await e(["cat-file", "--batch"], void 0, `${A}
`, s === "latin1" ? "latin1" : void 0),
        z = S.stdout.indexOf(`
`),
        Y = z === -1 ? S.stdout : S.stdout.slice(0, z),
        D = z === -1 ? "" : S.stdout.slice(z + 1),
        H = A.length === 64 ? "sha256" : "sha1",
        O = S.code !== 0 ? null : !new RegExp(`^${A} blob [0-9]+$`).test(Y) ? /^[0-9a-f]{40,64} [a-z]+ [0-9]+$/.test(Y) ? "tampered" : null : [D, `${D}\r`].find((me) => {
          let X = Buffer.from(me, s);
          return sr(H).update(`blob ${X.length}\x00`).update(X).digest("hex") === A
        }) ?? (s === "latin1" ? "tampered" : null);
      return B.set(A, O), O
    }, R = [];
  for (let [A, {
      id: T,
      mode: S
    }] of p) {
    let z = await I(T);
    if (z === "tampered") return "tampered";
    let Y = z === null ? null : aa(z, S, s);
    if (Y === null) return null;
    if (Y.isLink) {
      if (E ??= la(e), !await E) return "old_git"
    }
    if (Y.text === null) return null;
    R.push({
      name: A,
      id: T,
      text: Y.text,
      markStripped: Y.markStripped
    })
  }
  return {
    blobs: R
  }
}

function aa(e, n, r) {
  if (e.includes("\x00")) return null;
  if (n !== "100644" && n !== "100755" && n !== "120000") return null;
  let o = e.startsWith(gn[r]);
  if (n === "120000") return {
    isLink: !0,
    text: o ? null : e,
    markStripped: !1
  };
  if (!o) return {
    isLink: !1,
    text: e,
    markStripped: !1
  };
  let s = e.slice(gn[r].length);
  return s.startsWith(gn[r]) ? null : {
    isLink: !1,
    text: s,
    markStripped: !0
  }
}

function da(e) {
  if (!(e.startsWith('"') && e.endsWith('"'))) return Buffer.from(e, "utf8");
  let n = {
      a: 7,
      b: 8,
      t: 9,
      n: 10,
      v: 11,
      f: 12,
      r: 13,
      "\\": 92,
      '"': 34
    },
    r = e.slice(1, -1),
    o = [];
  for (let s = 0; s < r.length; s += 1) {
    let a = r[s] ?? "";
    if (a !== "\\") {
      o.push(...Buffer.from(a, "utf8"));
      continue
    }
    let h = r[s + 1] ?? "";
    if (/^[0-3][0-7]{2}$/.test(r.slice(s + 1, s + 4))) o.push(parseInt(r.slice(s + 1, s + 4), 8)), s += 3;
    else o.push(n[h] ?? h.charCodeAt(0)), s += 1
  }
  return Buffer.from(o)
}
async function la(e) {
  let n = await e(["version"]),
    r = n.code === 0 ? tLe(n.stdout) : null;
  return r !== null && (r.major > 2 || r.major === 2 && r.minor >= 32)
}
async function ua(e, n, r) {
  let o = r ?? await ar(e, {}),
    s = n.length === 64 ? "sha256" : "sha1",
    a = (_, y, E) => sr(s).update(`${_} ${y.length}\x00`).update(y).digest("hex") === E,
    h = await e(["cat-file", "--batch"], void 0, `${n}
`, o === "latin1" ? "latin1" : void 0);
  if (h.code !== 0) return null;
  let u = h.stdout.indexOf(`
`),
    p = u === -1 ? "" : h.stdout.slice(u + 1);
  if (!h.stdout.startsWith(`${n} commit `)) return /^[0-9a-f]{40,64} [a-z]+ /.test(h.stdout) ? "tampered" : null;
  if (![p, `${p}\r`].some((_) => a("commit", Buffer.from(_, o), n))) return o === "latin1" ? "tampered" : null;
  let w = /^tree ([0-9a-f]{40,64})\n/.exec(p)?.[1];
  if (w === void 0) return "tampered";
  return w
}
async function ca(e, n, r, o = "utf8") {
  let s = await ua(e, n, o);
  if (s === null || s === "tampered") return s;
  return bi(e, s, r)
}
var fa = 512,
  ha = 262144;
async function ga(e, n) {
  let r = n.length === 64 ? "sha256" : "sha1",
    o = (w, _, y) => sr(r).update(`${w} ${_.length}\x00`).update(_).digest("hex") === y,
    s = new Map,
    a = (w) => {
      if (!w.every(({
          nameBytes: y
        }) => ir(y))) return null;
      let _ = new Map(w.map(({
        nameBytes: y,
        mode: E,
        id: B
      }) => [y.toString("latin1"), {
        mode: E,
        id: B
      }]));
      return _.size === w.length ? _ : null
    },
    h = await ar(e, {}) === "latin1",
    u = async (w) => {
      let _ = L(w.filter((A) => !s.has(A)));
      if (_.length === 0) return !0;
      if (!h) {
        for (let A of _) {
          let T = await p(A);
          if (T === null || T === "tampered") return T
        }
        return !0
      }
      let y = await e(["cat-file", "--batch"], void 0, [..._, _[0]].map((A) => `${A}
`).join(""), "latin1");
      if (y.code !== 0) return null;
      let E = Buffer.from(y.stdout, "latin1"),
        B = n.length / 2,
        I = 0,
        R = 0;
      for (let [A, T] of _.entries()) {
        if (A > 0 && A % fa === 0 || R >= ha) await ku(), R = 0;
        let S = E.indexOf(10, I);
        if (S === -1) return null;
        let z = E.subarray(I, S).toString("latin1"),
          Y = /^([0-9a-f]{40,64}) tree (\d+)$/.exec(z);
        if (Y === null || Y[1] !== T) return /^[0-9a-f]{40,64} [a-z]+ \d+$/.test(z) ? "tampered" : null;
        let D = Number(Y[2]);
        R += D;
        let H = E.subarray(S + 1, S + 1 + D);
        if (H.length !== D) return null;
        if (!o("tree", H, T)) return "tampered";
        I = S + 1 + D + 1;
        let O = [],
          me = 0;
        while (me < H.length) {
          let ve = H.indexOf(32, me),
            le = H.indexOf(0, ve + 1);
          if (ve === -1 || le === -1 || le + 1 + B > H.length) return "tampered";
          let Te = H.subarray(me, ve).toString("latin1");
          if (!fn(Te)) return "tampered";
          O.push({
            mode: hn(Te),
            nameBytes: Buffer.from(H.subarray(ve + 1, le)),
            id: H.subarray(le + 1, le + 1 + B).toString("hex")
          }), me = le + 1 + B
        }
        let X = a(O);
        if (X === null) return "tampered";
        s.set(T, X)
      }
      return !0
    }, p = async (w) => {
      let _ = s.get(w);
      if (_ !== void 0) return _;
      let y = await e(["-c", "core.quotePath=true", "ls-tree", w]);
      if (y.code !== 0) return null;
      let E = y.stdout.split(`
`).filter((R) => R !== "").map((R) => {
          let A = R.indexOf("\t"),
            [T, , S] = R.slice(0, A).split(" "),
            z = da(R.slice(A + 1));
          return {
            mode: (T ?? "").replace(/^0+/, ""),
            id: S ?? "",
            nameBytes: z
          }
        }),
        B = Buffer.concat(E.map(({
          mode: R,
          id: A,
          nameBytes: T
        }) => Buffer.concat([Buffer.from(`${R} `, "utf8"), T, Buffer.from([0]), Buffer.from(A, "hex")])));
      if (!o("tree", B, w)) return null;
      let I = a(E);
      if (I === null) return "tampered";
      return s.set(w, I), I
    };
  return {
    listingsOf: u,
    listing: (w) => s.get(w),
    readsManyTreesInOneRun: h
  }
}
async function bi(e, n, r) {
  let {
    listingsOf: o,
    listing: s
  } = await ga(e, n), a = new Map, h = await o([n]);
  if (h !== !0) return h;
  let u = r.map((p) => ({
    name: p,
    segments: p.split("/"),
    at: 0,
    tree: n
  }));
  while (u.length > 0) {
    let p = await o(u.map(({
      tree: y
    }) => y));
    if (p !== !0) return p;
    let w = [],
      _ = [];
    for (let y of u) {
      let E = s(y.tree);
      if (E === void 0) return null;
      let B = y.segments[y.at],
        I = E.get(Buffer.from(B, "utf8").toString("latin1"));
      if (I === void 0) continue;
      let R = y.at === y.segments.length - 1;
      if (R && I.mode !== "40000") a.set(y.name, {
        id: I.id,
        mode: I.mode
      });
      else if (I.mode === "40000")
        if (!R) w.push({
          ...y,
          at: y.at + 1,
          tree: I.id
        });
        else _.push(I.id)
    }
    if (_.length > 0) {
      let y = await o(_);
      if (y !== !0) return y
    }
    u = w
  }
  return a
}
var ba = /^:([0-7]{6}) ([0-7]{6}) ([0-9a-f]{40}(?:[0-9a-f]{24})?) ([0-9a-f]{40}(?:[0-9a-f]{24})?) ([A-Z])[0-9]*$/,
  Gi = ["100644", "100755"],
  lr = "160000",
  Kt = "120000",
  pn = {
    sha1: "e69de29bb2d1d6434b8b29ae775ad8c2e48c5391",
    sha256: "473a0f4c3be8a93681a267e3b1e9a7dcda1185436fe141f7749120a303721813"
  },
  ji = /^0+$/,
  _a = 65536,
  Bt = 8,
  vn = 129,
  Wt = "the trees just built could not be read back as what their ids name",
  Ei = "a commit just made could not be read back as what its id names";

function Ri(e) {
  return xn("sha1").update(`blob ${e.length}\x00`).update(e).digest("hex")
}
var mr = 1048576,
  ka = 67108864,
  Si = 536870912,
  Sn = {
    GIT_AUTHOR_NAME: "git stash",
    GIT_AUTHOR_EMAIL: "git@stash",
    GIT_COMMITTER_NAME: "git stash",
    GIT_COMMITTER_EMAIL: "git@stash"
  },
  xi = (e) => (n, ...r) => e(["-c", "core.longpaths=true", ...n], ...r);
async function Hi(e, n, r = {}) {
  let o = r.probes ?? fze(),
    s = bn(e, n, r.signal, void 0, o),
    a = (ee, $e, ce, Fe, St) => s($e?.GIT_INDEX_FILE === void 0 ? [...ee] : ["-c", "core.splitIndex=false", ...ee], $e, ce, Fe, St),
    h = (ee) => (r.neverRead ?? r.alsoLeaveOut)?.(ee) ?? !1,
    u = L([Wft(e), n.workTree]).filter((ee) => bpt.some(([, $e]) => Bgs(`${ee}/${$e}`))),
    p = (ee) => u.some(($e) => Bgs(`${$e}/${ee}`)),
    w = (ee) => Ix(ee) || p(ee) || (r.alsoLeaveOut?.(ee) ?? !1),
    _ = await va(a, n.adminDir ?? LZ());
  if (_.kind !== "inspected") return _;
  let {
    gitDir: y,
    workTree: E
  } = n, {
    base: B,
    baseTree: I,
    iTree: R,
    reader: A,
    namesWindowsCannotHold: T
  } = _.inspection;
  if (T > 0) t(`[wipStash] tracked names that Windows cannot hold, listed as deleted and passed over: ${T}`), r.onNamesWindowsCannotHold?.(T);
  let S = n.bound === !0 && x() === "wsl" || await Ft(E) || await Ft(n.adminDir ?? LZ()),
    z = Ta(_.inspection, S);
  if (z.length > 0) return {
    kind: "refused",
    refused: z,
    decidedOn: "listing"
  };
  let Y = r.leaveOutUncommittedCredentialFiles ? await Ca(E, _.inspection, w, S, h) : [],
    D = new Set(Y.map(({
      path: ee
    }) => ee)),
    H = new Set(_.inspection.staged.map(({
      path: ee
    }) => ee)),
    O = new Set(_.inspection.staged.flatMap(({
      path: ee,
      status: $e
    }) => $e === "D" ? [ee] : [])),
    me = Date.now(),
    X = Ja(Bt, (ee) => r.signal?.aborted === !0 || D.has(ee.path) || H.has(ee.path) ? Promise.resolve("changed") : zi(E, ee, S, ka, r.signal)),
    ve = await Promise.all(_.inspection.working.map(X)),
    le = _.inspection.working.filter((ee, $e) => ve[$e] !== "unchanged"),
    Te = U(ve, (ee) => ee === "open_refused");
  if (Te > 0) r.onOpenRefusedAtTheLook?.(Te);
  let ie = _.inspection.working.length - le.length;
  if (ie > 0) t(`[wipStash] ${ie} of ${_.inspection.working.length} stat-dirty tracked files were unchanged (${Date.now()-me}ms)`);
  if (le.length === 0 && R === I) return {
    kind: "none",
    leftOut: Y
  };
  if (await nd(y), n.adminDir === void 0) await td(LZ());
  let K = ae(n.adminDir ?? y, `ccr-seed-${process.pid}-${_i(6).toString("hex")}.index`),
    _e = null,
    Ce = null,
    he = null,
    Re = [],
    Ne = new Set,
    W = [],
    ct = new Map,
    ft = [],
    Qe = new Map,
    Le = null;
  try {
    let ee = await a(["read-tree", "--no-recurse-submodules", `--index-output=${K}`, "-m", R]);
    if (ee.code !== 0) return j("read-tree", ee.stderr, ee);
    if (n.adminDir === void 0) {
      _e = await Yt(ae(LZ(), `claude-seed-index-${process.pid}-`));
      let N = ae(_e, "index"),
        V = await Di(K, N);
      if (V !== null) return await Rn(K).catch(() => {}), j(V.kind === "disk" ? "scratch-index" : "rewritten", V.detail);
      let se = await ed(K);
      if (se !== null) t(`[wipStash] the scratch index read-tree wrote could not be removed after it was carried off (${se}); left for the sweep`);
      K = N
    }
    let $e = await Ra(a, K, n.adminDir ?? LZ(), A, R, S);
    if ($e.kind === "failed") return $e;
    if ($e.kind === "differ") return j("read-tree", "the index changed while it was read, or its trees do not list what it holds (an object is not what its id names) \u2014 retry");
    let ce = await a(["write-tree", "--ignore-cache-tree"]);
    if (ce.code !== 0) return j("write-tree", ce.stderr || ce.stdout, ce);
    if (ce.stdout.trim() !== R) return j("read-tree", "the index changed while the uncommitted changes were being read \u2014 retry");
    let Fe = R;
    if (D.size > 0) {
      let N = await wn(a, A, K, I, [...D]);
      if (N !== null) return {
        kind: "failed",
        ...N
      };
      let V = await a(["write-tree", "--ignore-cache-tree"], {
        GIT_INDEX_FILE: K
      });
      if (V.code !== 0) return j("write-tree", V.stderr || V.stdout, V);
      Fe = V.stdout.trim()
    }
    let St = r.leaveOutUncommittedCredentialFiles ? le.filter(({
        status: N,
        path: V
      }) => N === "D" && !D.has(V) && w(V)).map(({
        path: N
      }) => N) : [],
      et = (N) => !D.has(N) && (!r.leaveOutUncommittedCredentialFiles || !w(N)),
      ht = L(le.flatMap(({
        path: N,
        status: V,
        newMode: se,
        newId: ge
      }) => V === "D" || se === lr || !ji.test(ge) ? [N] : [])),
      Nt = new Set(await Pi(E, ht)),
      Fn = new Set(ht.filter((N) => !Nt.has(N))),
      Zt = L(le.map(({
        path: N
      }) => N)).filter((N) => !Fn.has(N) && et(N)),
      $t = [...H].filter(et),
      Se = _.inspection.staged.filter(({
        status: N
      }) => N !== "D"),
      nt = qa(),
      M = Se.length === 0 && !r.leaveOutUncommittedCredentialFiles ? {
        elsewhere: [],
        withheldTracked: new Map
      } : await Sa(a, K, new Map(Se.map(({
        newId: N,
        path: V
      }) => [N, V])), r.leaveOutUncommittedCredentialFiles ? (N) => nt(N) || p(N) : () => !1, n.adminDir ?? LZ(), S, r.signal);
    if (M === null) return j("ls-files", r.signal?.aborted ? "cancelled, or out of time, before the index was listed and its names judged" : "could not list the index");
    let {
      elsewhere: Be,
      withheldTracked: Ke
    } = M, Xe = L([...le.map(({
      path: N
    }) => N), ...H, ...Be]), qe = new Set, xt = new Set, rt;
    if (Xe.length > 0) {
      he = await Yt(ae(n.adminDir ?? LZ(), "claude-seed-attrs-")), rt = await ja(a, E);
      let N = await Ua(he, {
        caseBlind: rt.caseBlind,
        objectFormat: B.length === 64 ? "sha256" : "sha1",
        objectsDir: ae(n.commonDir, "objects")
      });
      if (N !== null) return j("check-attr", N);
      let V = bn(e, {
          gitDir: he,
          commonDir: he,
          workTree: E,
          configPins: n.configPins
        }, r.signal, TDt(n), o),
        se = await mn(V, Xe, new Map(Xe.map((Z) => [Z, c_e(Z)])), {
          commit: B,
          indexPath: ae(he, "head.index"),
          objectsDir: ae(he, "verified")
        }, rt);
      if (se === "overflow") return j("check-attr", "too many changed files to read the attributes of");
      if (se === "old_git") return j("check-attr", "a committed .gitattributes is a symbolic link, which the installed git (older than 2.32, or of a version this build cannot read) follows on disk: update git, then retry");
      if (se === "tampered") return j("verify", "HEAD's commit, a tree on the way to a committed .gitattributes, or that file's blob is not the object its id names");
      if (se === null) return j("check-attr", yr);
      qe = new Set(se);
      let ge = L([...Xe.filter((Z) => qe.has(Z)), ...D]);
      if (ge.length > 0 || Ke.size > 0) {
        let Z = await Ct(A, I, ge);
        if (Ie(Z)) return We(Z, "cat-file", "HEAD's trees to the changed files could not be read back as what their ids name");
        xt = new Set(qe);
        let fe = new Set([...qe, ...D]),
          Ge = Ja(Bt, async (xe) => {
            let st = await er(E, xe, I.length, mr, S),
              vt = Ke.get(xe);
            return st !== null && (fe.has(xe) || !st.includes(vt ?? "")) ? st : []
          }),
          Qt = (await Promise.all(L([...fe, ...Ke.keys()]).filter((xe) => !h(xe)).map(Ge))).flat(),
          gt = (xe) => xe !== pn.sha1 && xe !== pn.sha256,
          mt = new Set([...[...Z.values()].map(({
            id: xe
          }) => xe).filter(gt), ...Se.filter(({
            path: xe
          }) => fe.has(xe)).map(({
            newId: xe
          }) => xe).filter(gt), ...Qt.filter(gt)]);
        Ne = mt, Se.filter(({
          path: xe,
          newId: st
        }) => mt.has(st) && et(xe)).forEach(({
          path: xe
        }) => qe.add(xe))
      }
      let ne = $t.filter((Z) => qe.has(Z));
      if (ne.length > 0) {
        let Z = await wn(a, A, K, I, ne);
        if (Z !== null) return {
          kind: "failed",
          ...Z
        };
        let fe = await a(["write-tree", "--ignore-cache-tree"], {
          GIT_INDEX_FILE: K
        });
        if (fe.code !== 0) return j("write-tree", fe.stderr || fe.stdout, fe);
        Fe = fe.stdout.trim(), Y.push(...ne.map((Ge) => ({
          path: Ge,
          why: "filtered"
        })))
      }
    }
    let ze = new Set(Y.flatMap(({
        path: N,
        why: V
      }) => V === "filtered" ? [N] : [])),
      G = new Set(Zt),
      Q = Se.flatMap(({
        path: N,
        newMode: V
      }) => V !== lr && et(N) && !G.has(N) ? [N] : []),
      te = [...Zt, ...await Pi(E, Q)];
    if (te.length > 0 || Q.length > 0) {
      let N = await Yt(ae(n.adminDir ?? LZ(), "claude-seed-stage-"));
      Ce = N;
      let V = I.length === 64 ? "sha256" : "sha1",
        se = await Zn(E, N, te, r.maxStagedBytes ?? Si, {
          ...r.stageHooks,
          objectFormat: V,
          ntfsRules: S
        });
      if ("refused" in se) return j("stage", se.refused);
      let ge = await zt(a, {
        GIT_INDEX_FILE: K
      }, se.entries.flatMap((C) => C.kind === "absent" ? [C.path] : []));
      if (ge === null) return j("ls-files", "could not list the index entries");
      let ne = await sd(se, new Set(te), new Set(le.flatMap(({
        path: C,
        status: ye
      }) => ye === "D" || ge.unseen.has(C) ? [] : [C])), N, (C) => Zn(E, N, C, r.maxStagedBytes ?? Si, {
        ...r.stageHooks,
        objectFormat: V,
        ntfsRules: S
      }));
      if ("refused" in ne) return j("stage", ne.refused);
      let Z = ne.entries.find((C) => C.kind === "changed" && (!te.includes(C.path) || Qn(C.path)));
      if (Z !== void 0) return j("stage", `${Z.path} changed while it was being read`);
      let fe = xi(bn(e, {
          ...n,
          workTree: Ce
        }, r.signal, TDt(n), o)),
        Ge = (C, ye, wt, rn, Dt) => fe(ye?.GIT_INDEX_FILE === void 0 ? [...C] : ["-c", "core.splitIndex=false", ...C], ye, wt, rn, Dt),
        Qt = new Set(te),
        gt = L([...ne.entries.flatMap((C) => C.kind !== "absent" && Qt.has(C.path) ? [C.path] : []), ...Se.flatMap(({
          path: C,
          newMode: ye
        }) => ye !== lr && et(C) ? [C] : [])]),
        mt = await hr(n.commonDir);
      if (mt.kind !== "none") return j("check-attr", mt.kind === "touches" ? ".git/info/attributes sets or unsets filter attributes (or defines a macro, quotes a pattern, or holds a line of 2,048 bytes or more)" : ".git/info/attributes could not be read as a plain file");
      let xe = xi(bn(e, {
          gitDir: he,
          commonDir: he,
          workTree: Ce,
          configPins: n.configPins
        }, r.signal, TDt(n), o)),
        st = new Map(gt.map((C) => [C, c_e(C)])),
        [vt, tn] = await Promise.all([mn(Ge, gt, st, null, rt), mn(xe, gt, st, null, rt)]);
      if (vt === "overflow" || tn === "overflow") return j("check-attr", "too many changed files to read the attributes of");
      if (vt === null || !Array.isArray(vt)) return j("check-attr", "could not read the attributes in force");
      if (tn === null || !Array.isArray(tn)) return j("check-attr", "could not read the staged .gitattributes on their own");
      let Dr = vt,
        Pr = tn,
        nn = new Set([...Dr, ...Pr].filter((C) => !xt.has(C))),
        $o = (C) => C !== pn.sha1 && C !== pn.sha256,
        Do = Ja(Bt, (C) => er(E, C, I.length, mr, S)),
        Po = (await Promise.all([...nn].filter((C) => !h(C)).map(Do))).flatMap((C) => C ?? []),
        Fr = new Set([...Se.filter(({
          path: C
        }) => nn.has(C)).map(({
          newId: C
        }) => C), ...Po].filter($o)),
        Lr = Se.filter(({
          path: C,
          newId: ye
        }) => Fr.has(ye) && et(C) && !nn.has(C) && !qe.has(C)).map(({
          path: C
        }) => C);
      Ne = new Set([...Ne, ...Fr]);
      let Mr = L([...Dr, ...Pr, ...ne.entries.flatMap((C) => qe.has(C.path) ? [C.path] : []), ...Lr]),
        Fo = await hr(n.commonDir);
      if (!Bi(mt, Fo)) return j("check-attr", ".git/info/attributes changed while the attributes were read");
      let Gr = L([...$t.filter((C) => nn.has(C)), ...Lr]);
      if (Gr.length > 0) {
        let C = await wn(a, A, K, I, Gr);
        if (C !== null) return {
          kind: "failed",
          ...C
        };
        let ye = await a(["write-tree", "--ignore-cache-tree"], {
          GIT_INDEX_FILE: K
        });
        if (ye.code !== 0) return j("write-tree", ye.stderr || ye.stdout, ye);
        Fe = ye.stdout.trim()
      }
      let jr = ne.entries.flatMap((C) => (C.kind === "hardlinked" || C.kind === "changed") && Qt.has(C.path) && !ze.has(C.path) ? [{
          path: C.path,
          why: C.kind === "hardlinked" ? "hardlinked" : "unstable"
        }] : []),
        Lo = new Set([...ze, ...jr.map(({
          path: C
        }) => C)]),
        Hr = [...jr, ...Mr.filter((C) => !Lo.has(C)).map((C) => ({
          path: C,
          why: "filtered"
        }))],
        Ln = new Set([...Hr.map(({
          path: C
        }) => C), ...Mr]);
      Y.push(...Hr);
      let Mn = ne.entries.flatMap((C) => C.kind === "file" || C.kind === "symlink" ? [C.path] : []),
        Gn = await zt(a, void 0, Mn);
      if (Gn === null) return j("ls-files", "could not list the index entries");
      let Ur = Mn.filter((C) => !Ln.has(C)),
        Wr = await zt(a, {
          GIT_INDEX_FILE: K
        }, Ur);
      if (Wr === null) return j("ls-files", "could not list the index entries");
      if (Ur.some((C) => Gn.unseen.has(C) !== Wr.unseen.has(C))) return j("rewritten", "an entry this upload read was marked assume-unchanged or skip-worktree in one copy of the index and not the other since the build began");
      Qe = new Map(Se.map(({
        path: C,
        newId: ye,
        newMode: wt
      }) => [C, {
        id: ye,
        mode: wt
      }]));
      let Mo = new Set(le.flatMap(({
        path: C,
        newId: ye
      }) => /^0+$/.test(ye) ? [C] : []));
      ft = Mn.filter((C) => Gn.unseen.has(C) && Qe.has(C) && !Mo.has(C) && !Ln.has(C));
      let jn = new Set([...Ln, ...ft]),
        Hn = await Wa(a, K, ne.entries.filter((C) => !jn.has(C.path)));
      if (Hn.kind === "failed") return Hn;
      let zr = ne.entries.flatMap((C) => C.kind === "absent" && G.has(C.path) && !ge.skipWorktree.has(C.path) ? [C.path] : []);
      Re = zr.filter((C) => !O.has(C));
      let Un = await Fi(a, {
        GIT_INDEX_FILE: K
      }, I, zr);
      if (Un.code !== 0) return j("update-index", Un.stderr, Un);
      let pt = ne.entries.flatMap((C) => C.kind === "file" && !jn.has(C.path) ? [C.path] : []);
      if (W = ne.entries.flatMap((C) => (C.kind === "file" || C.kind === "symlink") && !jn.has(C.path) ? [C.path] : []), ct = new Map([...Hn.ids].map(([C, ye]) => [C, {
          mode: Kt,
          id: ye
        }])), pt.length > 0) {
        Le = ae(wr(K), `replay-${_i(6).toString("hex")}.index`);
        let C = await Di(K, Le);
        if (C !== null) return j(C.kind === "disk" ? "scratch-index" : "rewritten", C.detail);
        let ye = await zt(Ge, {
          GIT_INDEX_FILE: Le
        }, pt);
        if (ye === null) return j("update-index", "the laid paths could not be listed");
        if (ye.unseen.size > 0) return j("rewritten", "an entry this upload is about to lay was marked assume-unchanged or skip-worktree in the scratch index since it was written");
        let wt = (Ae, Oe = K) => Ge(["-c", "core.bigFileThreshold=512m", "-c", "core.checkStat=default", "-c", "core.trustctime=true", "update-index", ...Ae, "-z", "--add", "--stdin"], {
            GIT_INDEX_FILE: Oe
          }, pt.map((Pt) => `${Pt}\x00`).join("")),
          rn = await wt(["--ignore-skip-worktree-entries"]),
          Dt = rn.exitCode === vn ? await wt([]) : rn;
        if (Dt.code !== 0) return j("update-index", Dt.stderr, Dt);
        let on = await za(Ge, Le, wt, pt);
        if (on === null) return j("update-index", "the lay could not be replayed to learn the laid entries");
        let Go = new Map(ne.entries.flatMap((Ae) => Ae.kind === "file" ? [
            [Ae.path, Ae.copy]
          ] : [])),
          jo = new Map([...le.map(({
            path: Ae,
            oldMode: Oe
          }) => [Ae, Oe]), ..._.inspection.staged.map(({
            path: Ae,
            newMode: Oe
          }) => [Ae, Oe])]);
        if (pt.find((Ae) => {
            let Oe = on.get(Ae)?.mode;
            return !(Oe !== void 0 && (Gi.includes(Oe) || Oe === Kt && jo.get(Ae) === Kt))
          }) !== void 0) return j("rewritten", "an entry this upload laid as a file is recorded as something else in the scratch index");
        if (pt.find((Ae) => {
            let Oe = on.get(Ae)?.id,
              Pt = Go.get(Ae);
            return Pt === void 0 || Oe !== Pt.blobId && Oe !== Pt.lfBlobId
          }) !== void 0) return j("rewritten", "an entry this upload laid does not hold the bytes staged for it");
        for (let Ae of [K, Le]) {
          let Oe = await zt(Ge, {
            GIT_INDEX_FILE: Ae
          }, pt);
          if (Oe === null) return j("update-index", "the laid paths could not be listed");
          if (Oe.unseen.size > 0 || Oe.absent.size > 0) return j("rewritten", "an entry this upload laid is marked assume-unchanged or skip-worktree in the scratch index, or is no longer there by its name")
        }
        if (!await ui(Ce, ne.copies)) return j("stage", "the staged copies changed while git read them");
        if (!Bi(mt, await hr(n.commonDir))) return j("check-attr", ".git/info/attributes changed while the changes were hashed");
        on.forEach((Ae, Oe) => ct.set(Oe, Ae))
      }
    }
    let ue = await Fi(a, {
      GIT_INDEX_FILE: K
    }, I, St);
    if (ue.code !== 0) return j("update-index", ue.stderr, ue);
    let q = await a(["write-tree", "--ignore-cache-tree"], {
      GIT_INDEX_FILE: K
    });
    if (q.code !== 0) return j("write-tree", q.stderr || q.stdout, q);
    let ke = q.stdout.trim();
    if (r.leaveOutUncommittedCredentialFiles) {
      let N = await Ti(A, I, ke, w, S);
      if (Ie(N)) return We(N, "cat-file", Wt);
      let V = N.filter(({
        why: Z
      }) => Z !== "forged" && Z !== "alias");
      if (V.length > 0) {
        let Z = await wn(a, A, K, I, V.map(({
          path: Ge
        }) => Ge));
        if (Z !== null) return {
          kind: "failed",
          ...Z
        };
        let fe = await a(["write-tree", "--ignore-cache-tree"], {
          GIT_INDEX_FILE: K
        });
        if (fe.code !== 0) return j("write-tree", fe.stderr || fe.stdout, fe);
        ke = fe.stdout.trim(), Y.push(...V)
      }
      let se = await Promise.all(L([ke, Fe]).map((Z) => Ti(A, I, Z, w, S))),
        ge = se.find(Ie);
      if (ge !== void 0) return We(ge, "cat-file", Wt);
      let ne = [...new Map(se.flatMap((Z) => Ie(Z) ? [] : Z).map((Z) => [Z.path, Z])).values()];
      if (ne.length > 0) return {
        kind: "refused",
        refused: ne,
        decidedOn: "tree"
      }
    }
    let oe = await Ut(A, I, Fe);
    if (Ie(oe)) return We(oe, "cat-file", Wt);
    let ot = oe.filter(({
      status: N,
      newId: V
    }) => N !== "D" && Ne.has(V));
    if (ot.length > 0) return Ci(ot);
    let Ve = ke === Fe ? oe : await Ut(A, I, ke);
    if (Ie(Ve)) return We(Ve, "cat-file", Wt);
    if (ke !== Fe) {
      let N = new Set(W),
        V = Ve.filter(({
          path: se,
          status: ge,
          newId: ne
        }) => ge !== "D" && !N.has(se) && Ne.has(ne));
      if (V.length > 0) return Ci(V)
    }
    if (ft.length > 0) {
      let N = [oe, Ve].map((se) => new Map(se.map(({
        path: ge,
        status: ne,
        newId: Z,
        newMode: fe
      }) => [ge, ne === "D" ? null : {
        mode: fe,
        id: Z
      }])));
      if (ft.find((se) => N.some((ge) => {
          let ne = ge.get(se),
            Z = Qe.get(se);
          return ne === void 0 || ne === null || Z === void 0 || ne.id !== Z.id || ne.mode !== Z.mode
        })) !== void 0) return j("rewritten", "a staged entry this upload left as the index had it was replaced in the scratch index before the trees were written")
    }
    if (W.length > 0) {
      let N = new Map(Ve.map(({
          path: ne,
          status: Z,
          newId: fe,
          newMode: Ge
        }) => [ne, Z === "D" ? null : {
          mode: Ge,
          id: fe
        }])),
        V = W.filter((ne) => !N.has(ne)),
        se = V.length > 0 ? await Ct(A, I, V) : new Map;
      if (Ie(se)) return We(se, "cat-file", Wt);
      if (W.find((ne) => {
          let Z = N.has(ne) ? N.get(ne) : se.get(ne),
            fe = ct.get(ne);
          return Z === null || Z === void 0 || fe === void 0 || Z.id !== fe.id || Z.mode !== fe.mode
        }) !== void 0) return j("rewritten", "an entry this upload laid was replaced in the scratch index before the work tree was written")
    }
    if (ke === I && Fe === I) return {
      kind: "none",
      leftOut: Y
    };
    let Me = await od(a, B),
      He = await a(["commit-tree", Fe, "-p", B, "-m", `index on ${Me}`], Sn);
    if (He.code !== 0) return j("commit-tree", He.stderr, He);
    let re = await a(["commit-tree", ke, "-p", B, "-p", He.stdout.trim(), "-m", `WIP on ${Me}`], Sn);
    if (re.code !== 0) return j("commit-tree", re.stderr, re);
    let we = [{
      id: He.stdout.trim(),
      tree: Fe,
      parents: [B]
    }, {
      id: re.stdout.trim(),
      tree: ke,
      parents: [B, He.stdout.trim()]
    }];
    for (let {
        id: N,
        tree: V,
        parents: se
      }
      of we) {
      let ge = await A.commit(N);
      if (Ie(ge)) return We(ge, "commit-tree", Ei);
      if (ge.tree !== V || ge.parents.length !== se.length || ge.parents.some((ne, Z) => ne !== se[Z])) return j("verify", Ei)
    }
    return {
      kind: "created",
      commit: re.stdout.trim(),
      leftOut: Y,
      deletedUnstaged: [...Re]
    }
  } catch (ee) {
    return j("scratch-index", d(ee))
  } finally {
    await Promise.all([...[K, `${K}.lock`, ...Le === null ? [] : [Le, `${Le}.lock`]].map((ee) => Rn(ee).catch(() => {})), ...[..._e === null ? [] : [_e], ...Ce === null ? [] : [Ce], ...he === null ? [] : [he]].map((ee) => It(ee, {
      recursive: !0,
      force: !0
    }).catch(() => {}))])
  }
}
async function Ui(e, n, r, o) {
  let s = await Eb(e, [...Mce, ...vMn(o), ...kms, "stash", "create"], {
    hardened: !1,
    signal: r,
    env: {
      ...zft,
      ...F7t(o)
    }
  });
  if (s.code === 0) {
    let h = s.stdout.trim();
    return h === "" ? {
      kind: "none",
      leftOut: []
    } : {
      kind: "created",
      commit: h,
      leftOut: [],
      deletedUnstaged: []
    }
  }
  let a = C0e(s).trim() === "";
  if (s.exitCode === 1 && a) return t(`[gitBundle] git stash create exited ${s.code} with no output \u2014 treating as no uncommitted changes`), {
    kind: "none",
    leftOut: []
  };
  return !n ? {
    kind: "none",
    leftOut: []
  } : a ? {
    ...j("stash create", s.exitCode === void 0 ? "it was stopped, ran out of time or could not start, and left no message" : `it ended with exit status ${s.exitCode} and left no message`),
    silent: a
  } : j("stash create", s.stderr, s)
}
async function wn(e, n, r, o, s) {
  let a = await Ct(n, o, s);
  if (Ie(a)) return We(a, "cat-file", "the trees holding the entries to restore could not be read back as what their ids name");
  let h = `0 ${"0".repeat(o.length)}`,
    u = await e(["update-index", "-z", "--index-info"], {
      GIT_INDEX_FILE: r
    }, s.map((_) => {
      let y = a.get(_);
      return `${y===void 0?h:`${y.mode.padStart(6,"0")} ${y.id}`}	${_}\x00`
    }).join(""));
  if (u.code !== 0) return j("update-index", u.stderr, u);
  let p = Oa(C0e(u), s);
  if (p.length > 0) return {
    step: "refused-name",
    detail: `git refuses a name it was asked to restore: ${p.slice(0,3).join(", ")}`
  };
  let w = await Ydo(e, r, new Set(s), wr(r));
  if (w === null) return {
    step: "ls-files",
    detail: "could not list the index entries"
  };
  return s.some((_) => {
    let y = w.get(_);
    return y !== void 0 && !Kdo(y) || y?.id !== a.get(_)?.id || y?.mode !== a.get(_)?.mode.padStart(6, "0")
  }) ? {
    step: "verify",
    detail: "the entries just restored are not the ones the verified trees hold"
  } : null
}
async function Ea(e) {
  let n = xn("sha256");
  return await vbr(e, (r) => {
    n.update(r)
  }), n.digest("hex")
}

function ur({
  detail: e,
  run: n
}) {
  return j("read-tree", e, n)
}
async function Ra(e, n, r, o, s, a) {
  let h = await Yt(ae(r, "claude-seed-listings-"));
  try {
    let u = 0,
      p = async (A, T, S) => {
        let z = S.length === 0 ? [] : ["--", ".", ...S.map((Y) => `:(exclude,literal)${Y}`)];
        for (let Y of [
            ["--sparse"],
            []
          ]) {
          let D = await At(ae(h, `${A}.${u++}`), Ebr, 384);
          try {
            let H = await e(["ls-files", ...Y, "-s", "-z", ...z], {
              GIT_GLOB_PATHSPECS: "0",
              GIT_ICASE_PATHSPECS: "0",
              ...T
            }, void 0, void 0, D.fd);
            if (H.code === 0) return await Ea(D);
            if (H.exitCode !== vn || Y.length === 0) return {
              detail: H.stderr || "could not list the index",
              run: H
            }
          } finally {
            await D.close()
          }
        }
        return {
          detail: "could not list the index"
        }
      }, w = async (A) => {
        let [T, S] = await Promise.all([p("trees", {
          GIT_INDEX_FILE: n
        }, []), p("index", void 0, A)]);
        if (typeof T !== "string") return T;
        if (typeof S !== "string") return S;
        return T === S ? "agree" : "differ"
      }, _ = await w([]);
    if (_ !== "differ") return _ === "agree" ? {
      kind: "agree"
    } : ur(_);
    let y = await e(["diff-files", "-z", "--name-only", "--diff-filter=AD", "--ignore-submodules=dirty"], N7t);
    if (y.code !== 0) return ur({
      detail: y.stderr,
      run: y
    });
    let E = y.stdout.split("\x00").filter((A) => A !== ""),
      B = await Ct(o, s, E);
    if (Ie(B)) return We(B, "cat-file", "the index's trees could not be read back as what their ids name");
    let I = E.filter((A) => !B.has(A));
    if (I.length === 0 || I.some((A) => !je(A, a))) return {
      kind: "differ"
    };
    let R = await w(I);
    return R === "agree" ? {
      kind: "agree"
    } : R === "differ" ? {
      kind: "differ"
    } : ur(R)
  } finally {
    await It(h, {
      recursive: !0,
      force: !0
    }).catch(() => {})
  }
}
async function Sa(e, n, r, o, s, a, h) {
  let u = await Yt(ae(s, "claude-seed-ids-"));
  try {
    let p = 0;
    for (let w of [
        ["--sparse"],
        []
      ]) {
      let _ = await At(ae(u, `index.${p++}`), Ebr, 384);
      try {
        let y = await e(["ls-files", ...w, "-s", "-z"], {
          GIT_INDEX_FILE: n
        }, void 0, void 0, _.fd);
        if (y.code === 0) {
          let E = [],
            B = new Map,
            I = "";
          if (await vbr(_, (R) => {
              if (h?.aborted) return;
              let A = (I + R.toString("latin1")).split("\x00");
              I = A.pop() ?? "";
              for (let T of A) {
                let S = T.indexOf("\t"),
                  [, z = "", Y = ""] = T.slice(0, S).split(" "),
                  D = Buffer.from(T.slice(S + 1), "latin1").toString("utf8");
                if (!je(D, a) || it(D)) continue;
                if (Y === "0" && o(D)) B.set(D, z);
                let H = r.get(z);
                if (H !== void 0 && D !== H) E.push(D)
              }
            }), h?.aborted) return null;
          return I === "" ? {
            elsewhere: E,
            withheldTracked: B
          } : null
        }
        if (y.exitCode !== vn) return null
      } finally {
        await _.close()
      }
    }
    return null
  } finally {
    await It(u, {
      recursive: !0,
      force: !0
    }).catch(() => {})
  }
}
var yr = "HEAD's commit or its .gitattributes could not be read to be verified",
  xa = "internal error: no git directory was chosen for this linked worktree, so git was not run";

function bn(e, n, r, o, s = fze(), {
  hardenedMaxBuffer: a
} = {}) {
  if (n.checkout === "linked" && n.adminDir === void 0 && n.runsInOwnDirectories !== !0) return () => Promise.resolve({
    stdout: "",
    stderr: xa,
    code: 126
  });
  let h = o ?? TDt(n),
    u = s.screenMemo ?? Zdo();
  return (p, w, _, y, E) => Eb(e, p, {
    hardened: !0,
    layout: n,
    signal: r,
    probes: s,
    env: w,
    input: _,
    ...y !== void 0 && {
      encoding: y
    },
    ...E !== void 0 && {
      stdoutFd: E
    },
    ...h !== void 0 && {
      reachRoots: h,
      screenMemo: u
    },
    ...a !== void 0 && {
      hardenedMaxBuffer: a
    }
  })
}
async function va(e, n) {
  let r = await e(["rev-parse", "-q", "--verify", "HEAD"]);
  if (r.code !== 0) return r.exitCode === 1 ? {
    kind: "none",
    leftOut: []
  } : j("rev-parse", r.stderr, r);
  let o = await e(["rev-parse", "-q", "--verify", `${r.stdout.trim()}^{commit}`]);
  if (o.code !== 0) {
    let S = await e(["cat-file", "-t", r.stdout.trim()]);
    return S.code === 0 && ["tree", "blob"].includes(S.stdout.trim()) ? j("verify", "HEAD names a tree or blob, not a commit") : j("rev-parse", o.stderr || "HEAD is not a commit")
  }
  let s = o.stdout.trim(),
    a = new rr(nr(e, n), s),
    [h, u] = await Promise.all([a.commit(s), e(["write-tree", "--ignore-cache-tree"])]);
  if (Ie(h)) return We(h, "rev-parse", "HEAD could not be read back as the commit its id names");
  if (u.code !== 0) return j("write-tree", u.stderr || u.stdout, u);
  let p = h.tree,
    w = u.stdout.trim(),
    _ = await Ut(a, p, w);
  if (Ie(_)) return We(_, "cat-file", "HEAD's or the index's trees could not be read back as what their ids name");
  let y = _,
    E = await e(["--no-optional-locks", "diff-files", "-z", "--no-renames", "--ignore-submodules=dirty"]),
    B = E.code === 0 ? Na(E.stdout) : null;
  if (B === null) return j("diff-files", E.stderr, E);
  if ([...B, ...y].some(({
      path: S
    }) => S.includes("\uFFFD"))) return j("path-encoding", "a changed path is not valid UTF-8");
  let I = await Ct(a, p, B.map(({
    path: S
  }) => S));
  if (Ie(I)) return We(I, "cat-file", "HEAD's trees to the changed files could not be read back as what their ids name");
  let R = "0".repeat(p.length),
    A = new Set(B.map(({
      path: S
    }) => S)),
    T = [...y.filter(({
      path: S
    }) => !A.has(S)), ...B.flatMap((S) => {
      let z = I.get(S.path);
      if (S.status === "D") return z === void 0 || vi(S, I) ? [] : [{
        path: S.path,
        status: "D",
        oldMode: z.mode.padStart(6, "0"),
        newMode: "000000",
        oldId: z.id,
        newId: R
      }];
      return [{
        path: S.path,
        status: z === void 0 ? "A" : "M",
        oldMode: z === void 0 ? "000000" : z.mode.padStart(6, "0"),
        newMode: S.newMode,
        oldId: z?.id ?? R,
        newId: R
      }]
    })];
  return {
    kind: "inspected",
    inspection: {
      base: s,
      baseTree: p,
      iTree: w,
      staged: y,
      working: T,
      reader: a,
      namesWindowsCannotHold: U(B, (S) => vi(S, I))
    }
  }
}

function vi(e, n) {
  return x() === "windows" && e.status === "D" && n.has(e.path) && DFi(e.path) && !e.path.includes("\\") && je(e.path, !0) && !it(e.path)
}

function Ta({
  staged: e,
  working: n
}, r) {
  return L([...e, ...n].map(({
    path: s
  }) => s)).sort().flatMap((s) => !je(s, r) ? [{
    path: s,
    why: "forged"
  }] : it(s) ? [{
    path: s,
    why: "alias"
  }] : [])
}
async function Ca(e, {
  staged: n,
  working: r
}, o, s, a = () => !1) {
  let h = L([...n, ...r].map(({
      path: O
    }) => O)),
    u = h.filter((O) => !je(O, s)),
    p = h.filter((O) => je(O, s) && it(O)),
    w = new Set([...u, ...p]),
    _ = ({
      path: O
    }) => !w.has(O) && o(O),
    y = n.filter(_),
    E = new Set(y.map(({
      path: O
    }) => O)),
    B = Ja(Bt, async (O) => !E.has(O.path) && !a(O.path) && await zi(e, O, s) === "unchanged" ? [] : [O]),
    I = (await Promise.all(r.filter(_).map(B))).flat(),
    R = L([...y, ...I].filter(({
      status: O
    }) => O === "A").map(({
      path: O
    }) => O)),
    A = new Set(R),
    T = L([...y, ...I].filter(({
      path: O,
      status: me
    }) => me !== "D" && !A.has(O)).map(({
      path: O
    }) => O)),
    S = new Set([...R, ...T]),
    z = L([...y, ...I].map(({
      path: O
    }) => O).filter((O) => !S.has(O))),
    Y = Ja(Bt, async (O) => await br(e, O) ? [O] : []),
    D = (await Promise.all(z.map(Y))).flat();
  return [...u.map((O) => ({
    path: O,
    why: "forged"
  })), ...p.map((O) => ({
    path: O,
    why: "alias"
  })), ...R.map((O) => ({
    path: O,
    why: "added"
  })), ...T.map((O) => ({
    path: O,
    why: "changed"
  })), ...D.map((O) => ({
    path: O,
    why: "resurrected"
  }))].sort((O, me) => O.path < me.path ? -1 : O.path > me.path ? 1 : 0)
}
async function Ti(e, n, r, o, s) {
  let a = await Ut(e, n, r);
  if (Ie(a)) return a;
  let h = a.filter(({
      path: p,
      status: w
    }) => w !== "D" && (!je(p, s) || it(p) || o(p))),
    u = new Map(h.map(({
      path: p,
      status: w
    }) => [p, w]));
  return L(h.map(({
    path: p
  }) => p)).sort().map((p) => ({
    path: p,
    why: !je(p, s) ? "forged" : it(p) ? "alias" : u.get(p) === "A" ? "added" : "changed"
  }))
}
var Ba = /invalid object \d+ [0-9a-f]+ for|could not fetch [0-9a-f]+ from promisor remote|lazy fetching disabled|missing blob/,
  Aa = /needs merge|you need to resolve your current index first|unmerged/i;

function Ia(e) {
  let n = Wn(C0e(e).trim());
  return Ba.test(n) ? "object_missing" : Aa.test(n) ? "unmerged" : n.includes("index.lock") ? "index_locked" : void 0
}

function j(e, n, r) {
  let o = r && Ia(r);
  return {
    kind: "failed",
    step: e,
    detail: Wn(n.trim()),
    ...o !== void 0 && {
      said: o
    }
  }
}

function Ci(e) {
  return {
    kind: "refused",
    refused: e.map(({
      path: n
    }) => ({
      path: n,
      why: "same-bytes"
    })),
    decidedOn: "tree"
  }
}

function Oa(e, n) {
  let r = new Set(e.split(`
`));
  return n.filter((o) => r.has(`Ignoring path ${o}`))
}

function We(e, n, r) {
  return e.failed === "tampered" ? j("verify", r) : e.failed === "malformed" ? j("malformed-tree", e.dir ?? "") : j(n, r)
}

function Wi(e) {
  return e === void 0 || e === "" ? "the top of the checkout" : `directory '${Oi(e.replace(/[\p{Cc}\p{Cf}']/gu,"?"),120)}'`
}

function Na(e) {
  let n = e.split("\x00");
  if (n.pop() !== "" || n.length % 2 !== 0) return null;
  let r = Array.from({
    length: n.length / 2
  }, (o, s) => {
    let a = ba.exec(n[2 * s]);
    return a ? {
      path: n[2 * s + 1],
      oldMode: a[1],
      newMode: a[2],
      oldId: a[3],
      newId: a[4],
      status: a[5]
    } : null
  });
  return r.every((o) => o !== null) ? r : null
}

function Bi(e, n) {
  return e.kind !== "unreadable" && n.kind === "none" && (e.bytes === null ? n.bytes === null : n.bytes !== null && e.bytes.equals(n.bytes)) && $a(e.stamp, n.stamp)
}

function $a(e, n) {
  return e === null || n === null ? e === n : e.ino === n.ino && e.size === n.size && e.mtimeMs === n.mtimeMs && e.ctimeMs === n.ctimeMs
}

function kn(e) {
  return {
    size: Number(e.size),
    mtimeMs: Number(e.mtimeNs) / 1e6,
    ctimeMs: Number(e.ctimeNs) / 1e6,
    ino: e.ino
  }
}
async function cr(e, n = lt) {
  try {
    return await n(e, {
      bigint: !0
    })
  } catch (r) {
    if (k(r) === "ENOENT" || k(r) === "ENOTDIR") return null;
    throw r
  }
}
var Da = /(?:^|\s|")[-!]?(?:filter|working-tree-encoding|ident)(?:=|\s|$)/,
  Pa = /^[ \t\r]*(?:\[attr\]|")/,
  Fa = 2048;

function La(e) {
  return e.split(`
`).some((n) => Buffer.byteLength(n) >= Fa)
}

function Ma(e) {
  return e.replace(/^\uFEFF/, "").split(`
`).map((n) => tt(n, "\x00")).filter((n) => !/^[ \t\r]*#/.test(n))
}
async function ja(e, n) {
  let r = x(),
    [o, s] = await Promise.all([lt(ae(n, ".git"), {
      bigint: !0
    }).catch(() => null), lt(ae(n, ".GIT"), {
      bigint: !0
    }).catch(() => null)]),
    a = o !== null && s !== null && o.ino === s.ino && o.dev === s.dev,
    h = await e(["config", "--bool", "core.ignorecase"]);
  return {
    caseBlind: r === "macos" || r === "windows" || a || h.code === 0 && h.stdout.trim() === "true",
    normalizationBlind: r === "macos"
  }
}
async function hr(e, {
  shouldStampAbove: n = !1,
  shouldStopAtLink: r = !1
} = {}) {
  let o = ae(e, "info"),
    s = ae(o, "attributes"),
    a = await Ha(o, n, r).catch(() => {
      return
    });
  if (a === void 0) return {
    kind: "unreadable",
    bytes: null,
    stamp: null
  };
  if (r && a.link) return {
    kind: "none",
    bytes: null,
    stamp: null,
    dir: a
  };
  try {
    if (x() === "windows" && !(await lt(s)).isFile()) return {
      kind: "unreadable",
      bytes: null,
      stamp: null
    };
    let h = await At(s, Cc());
    try {
      let u = await h.stat({
        bigint: !0
      });
      if (!u.isFile() || u.size > _a) return {
        kind: "unreadable",
        bytes: null,
        stamp: null
      };
      let p = kn(u),
        w = Number(u.size);
      if (w === 0) return {
        kind: "none",
        bytes: Buffer.alloc(0),
        stamp: p,
        dir: a
      };
      let _ = Buffer.alloc(w),
        {
          bytesRead: y
        } = await h.read(_, 0, w, 0);
      if (y !== w) return {
        kind: "unreadable",
        bytes: null,
        stamp: null
      };
      let E = _.toString("utf8"),
        B = Ma(E),
        I = La(E) ? "overlong_line" : B.some((R) => Pa.test(R)) ? "macro_or_quoted" : B.some((R) => Da.test(R)) ? "rule" : void 0;
      return I === void 0 ? {
        kind: "none",
        bytes: _,
        stamp: p,
        dir: a
      } : {
        kind: "touches",
        by: I,
        bytes: _,
        stamp: p,
        dir: a
      }
    } finally {
      await h.close()
    }
  } catch (h) {
    return k(h) === "ENOENT" || k(h) === "ENOTDIR" ? {
      kind: "none",
      bytes: null,
      stamp: null,
      dir: a
    } : {
      kind: "unreadable",
      bytes: null,
      stamp: null
    }
  }
}
async function Ha(e, n, r) {
  let o = await cr(e),
    s = n && o === null ? await cr(wr(e)) : null,
    a = !o?.isSymbolicLink() ? o : r ? null : await cr(e, ma),
    h = x() === "windows" && o?.isDirectory() === !0 ? await pne(e) : null,
    u = h !== null && h.kind !== "directory" && !(h.kind === "error" && h.code === "EISDIR");
  return {
    node: o && kn(o),
    link: (o?.isSymbolicLink() ?? !1) || u,
    target: a && kn(a),
    ...s && {
      above: kn(s)
    }
  }
}
async function Ua(e, n) {
  if (!ya(n.objectsDir) || /[\r\n]/.test(n.objectsDir) || /^["#]/.test(n.objectsDir)) return "the objects directory cannot be named in an alternates file";
  let r = {
    flag: qdo,
    mode: 384
  };
  return await ki(ae(e, "objects", "info"), {
    recursive: !0,
    mode: 448
  }), await Promise.all([ki(ae(e, "refs"), {
    mode: 448
  }), dr(ae(e, "HEAD"), `ref: refs/heads/attributes-view
`, r), dr(ae(e, "config"), ["[core]", `	repositoryformatversion = ${n.objectFormat==="sha256"?1:0}`, `	ignorecase = ${n.caseBlind}`, ...n.objectFormat === "sha256" ? ["[extensions]", "\tobjectformat = sha256"] : [], ""].join(`
`), r), dr(ae(e, "objects", "info", "alternates"), `${n.objectsDir}
`, r)]), null
}
async function Wa(e, n, r) {
  let o = r.filter((u) => u.kind === "symlink"),
    s = [],
    a = new Map;
  for (let u of o) {
    let p = u.target.toString("utf8");
    if (!Buffer.from(p, "utf8").equals(u.target)) return j("path-encoding", `${u.path}: link target is not valid UTF-8`);
    let w = await e(["hash-object", "-w", "--stdin"], void 0, p);
    if (w.code !== 0) return j("hash-object", w.stderr, w);
    s.push(`${Kt} ${w.stdout.trim()}	${u.path}`), a.set(u.path, w.stdout.trim().toLowerCase())
  }
  if (s.length === 0) return {
    kind: "laid",
    ids: a
  };
  let h = await e(["update-index", "-z", "--index-info"], {
    GIT_INDEX_FILE: n
  }, s.map((u) => `${u}\x00`).join(""));
  return h.code === 0 ? {
    kind: "laid",
    ids: a
  } : j("update-index", h.stderr, h)
}
async function za(e, n, r, o) {
  let s = await r(["--ignore-skip-worktree-entries"], n);
  if ((s.exitCode === vn ? await r([], n) : s).code !== 0) return null;
  let h = new Set(o),
    u = new Map,
    p = await At(`${n}.listing`, Ebr, 384);
  try {
    if ((await e(["ls-files", "-s", "-z"], {
        GIT_INDEX_FILE: n
      }, void 0, void 0, p.fd)).code !== 0) return null;
    let _ = "";
    await vbr(p, (y) => {
      let E = (_ + y.toString("latin1")).split("\x00");
      _ = E.pop() ?? "";
      for (let B of E) {
        let I = B.indexOf("\t"),
          [R, A, T] = I === -1 ? [] : B.slice(0, I).split(" "),
          S = Buffer.from(B.slice(I + 1), "latin1").toString("utf8");
        if (R !== void 0 && A !== void 0 && T === "0" && h.has(S)) u.set(S, {
          mode: R,
          id: A.toLowerCase()
        })
      }
    })
  } finally {
    await p.close().catch(() => {}), await It(`${n}.listing`, {
      force: !0
    }).catch(() => {})
  }
  return o.every((w) => u.has(w)) ? u : null
}
async function br(e, n) {
  if (n.includes("\uFFFD") || await Ye(e, n) !== "clear") return !0;
  try {
    return !(await lt(ae(e, n))).isDirectory()
  } catch (r) {
    let o = k(r);
    return o !== "ENOENT" && o !== "ENOTDIR"
  }
}
async function zi(e, {
  path: n,
  status: r,
  oldMode: o,
  newMode: s,
  oldId: a,
  newId: h
}, u, p = mr, w) {
  if (r !== "M" || o !== s || !ji.test(h) || a.length !== 40 || n.includes("\uFFFD")) return "changed";
  if (await Ye(e, n) !== "clear") return "changed";
  try {
    let _ = await un(e, n, u);
    if (_.kind === "symlink") return s === Kt && (Ri(_.target) === a || x() === "windows" && Ri(await wa(ae(e, n), {
      encoding: "buffer"
    })) === a) ? "unchanged" : "changed";
    if (_.kind !== "file") return _.kind === "refused" ? "open_refused" : "changed";
    let {
      handle: y,
      size: E
    } = _;
    try {
      if (!Gi.includes(s) || E > p) return "changed";
      let B = await y.stat({
          bigint: !0
        }),
        I = xn("sha1").update(`blob ${E}\x00`),
        R = Buffer.allocUnsafe(Math.min(E, 1048576)),
        A = 0;
      while (A < E) {
        if (w?.aborted) return "changed";
        let {
          bytesRead: S
        } = await y.read(R, 0, Math.min(R.length, E - A), A);
        if (S === 0) return "changed";
        I.update(R.subarray(0, S)), A += S
      }
      if (I.digest("hex") !== a) return "changed";
      let T = await y.stat({
        bigint: !0
      });
      return B.size === BigInt(E) && T.size === B.size && T.mtimeNs === B.mtimeNs && T.ctimeNs === B.ctimeNs && T.nlink === 1n ? "unchanged" : "changed"
    } finally {
      await y.close()
    }
  } catch {
    return "changed"
  }
}
var Ya = /^ccr-seed-([0-9]+)-[0-9a-f]{12}\.index(?:\.lock)?$/,
  _n = /env|netrc|npmrc|yarnrc|pypirc|pgpass|\.cnf|terraform|tfvars|tfstate|boto|s3cfg|credential|gitconfig|mcp|claude|config|bash|profile|zsh|zlog|fish|history|consolehost|\.(?:pem|key|p12|pfx|keystore|jks|kdbx|ovpn|vars|ssh|aws|azure|gnupg|kube|docker|git)|_(?:rsa|dsa|ecdsa|ed25519)|secret|settings|gradle\.properties|device-keys|service.?account|deploy_key|htpasswd|htdigest|vault[-_](?:token|pass)|dockercfg|msmtprc|fetchmailrc|sentryclirc|clasprc|transifexrc|databrickscfg|remote-sync|wakatime/i,
  Yi = `[${yuo.replace(/[\\\]^-]/g,"\\$&")}]|_${Dgs}_`,
  Ka = L(bpt.map(([e]) => e)),
  Ai = new RegExp(`(?:^|/)(?:(?:${Yi})[^/]*)?(?:\\.(?:ssh|aws|azure|gnupg|kube|docker|config|cargo|gem|m2|gradle|claude)|documents|appdata|library|(?:${Ka.join("|")})(?![a-z0-9-]))|\\.git`, "i"),
  Ii = yuo.replace(/[\\\]^-]/g, "\\$&"),
  gr = new RegExp(`(?:[${Ii}][^/${Ii}]*){4}|${Lgs}`, "i"),
  Xa = new RegExp(`(?:^|/)[^/]{${d_e+1}}`);

function qa() {
  let e = new Map,
    n = new Map,
    r = new Map;
  return (o) => {
    if (!Vwn(o) || o.includes("\\") || o.includes(":") && x() === "windows") return Ix(o);
    let s = Za.test(o) ? o : o.replaceAll("\u0131", "i").replaceAll("\u017F", "s").replaceAll("\u212A", "k").replace(Va, ""),
      a = s.lastIndexOf("/"),
      h = a === -1 ? "" : s.slice(0, a),
      u = o.lastIndexOf("/"),
      p = u === -1 ? "" : o.slice(0, u),
      w = e.get(p);
    if (w === void 0) {
      let B = a !== -1 && pr(p, h),
        I = B ? h.split("/") : [],
        R = B ? p.split("/").map((A, T) => {
          let S = I[T];
          if (S !== void 0 && !pr(A, S)) return "passed";
          let z = n.get(A) ?? (S !== void 0 && !Ni(A, S) || !Ix(`${A}/.bak`) ? "passed" : Ix(`${A}/x`) ? "withheld" : "asked");
          return n.set(A, z), z
        }) : [];
      w = R.includes("withheld") ? "withheld" : R.includes("asked") || a !== -1 && (Ai.test(h) || En(Ai, p)) ? "asked" : "passed", e.set(p, w)
    }
    if (w !== "passed") return w === "withheld" || Ix(o);
    let _ = s.slice(a + 1),
      y = o.slice(u + 1);
    if (a !== -1 && ($i.test(_) || $i.test(y)) && (_n.test(h) || En(_n, p))) return Ix(o);
    if (!_n.test(_) && !Ni(y, _) && !En(_n, y)) return !1;
    let E = r.get(y);
    if (E === void 0) E = Ix(y), r.set(y, E);
    return E
  }
}

function En(e, n) {
  return n.includes(":") && n.split("/").filter((r) => r.includes(":")).some((r) => {
    let o = B0e(r);
    return r0t(r).some((s) => o.some((a) => e.test(s(a))))
  })
}

function pr(e, n) {
  return e.length > d_e && Xa.test(e) || gr.test(e) || n !== e && gr.test(n) || En(gr, e)
}

function Ni(e, n) {
  return pr(e, n) && (e.length > d_e || B0e(e).length > 1 || r0t(e).some((r) => B0e(r(e)).length > 1))
}
var Va = /[^\x20-\x7e]/gu,
  Za = /^[\x20-\x7e]*$/,
  $i = new RegExp(`^(?:${Yi})`, "i");
async function Di(e, n) {
  let r;
  try {
    r = await At(e, Cc())
  } catch (o) {
    let s = k(o);
    return s === "ELOOP" || s === "ENOENT" || s === "ENOTDIR" ? {
      kind: "tamper",
      detail: `something other than the scratch index this build wrote stands at its name (${s})`
    } : {
      kind: "disk",
      detail: `the scratch index could not be opened (${s??"an error"})`
    }
  }
  try {
    let o = await r.stat();
    if (!o.isFile() || o.nlink !== 1) return {
      kind: "tamper",
      detail: "something other than the scratch index this build wrote stands at its name"
    };
    let s = await At(n, qdo, 384);
    try {
      let a = Buffer.allocUnsafe(1048576);
      for (let h = 0; h < o.size;) {
        let {
          bytesRead: u
        } = await r.read(a, 0, Math.min(a.length, o.size - h), h);
        if (u === 0) return {
          kind: "tamper",
          detail: "the scratch index changed while it was carried off"
        };
        await s.write(a, 0, u), h += u
      }
      await s.utimes(o.atime, o.mtime)
    } finally {
      await s.close().catch(() => {})
    }
    return null
  } catch (o) {
    return {
      kind: "disk",
      detail: `the scratch index could not be carried off (${k(o)??d(o)})`
    }
  } finally {
    await r.close().catch(() => {})
  }
}
var Ki = 600000,
  Qa = /^claude-seed-index-([0-9]+)-/;
async function ed(e) {
  for (let n = 0;; n++) try {
    return await Rn(e), null
  } catch (r) {
    let o = k(r);
    if (o === "ENOENT") return null;
    if (n >= 3 || o !== "EBUSY" && o !== "EPERM" && o !== "EACCES") return o ?? d(r);
    await J(50)
  }
}
async function td(e) {
  try {
    await Promise.all((await Mi(e)).map(async (n) => {
      let r = Qa.exec(n)?.[1];
      if (r === void 0) return;
      let o = ae(e, n),
        s = await lt(o);
      if (s.isDirectory() && Date.now() - s.mtimeMs > Ki && !Xi(Number(r))) await It(o, {
        recursive: !0,
        force: !0
      })
    }))
  } catch {}
}
async function nd(e) {
  try {
    await Promise.all((await Mi(e)).map(async (n) => {
      let r = Ya.exec(n)?.[1];
      if (r === void 0) return;
      let o = ae(e, n);
      if (Date.now() - (await lt(o)).mtimeMs > Ki && !Xi(Number(r))) await It(o, {
        force: !0
      })
    }))
  } catch {}
}

function Xi(e) {
  try {
    return process.kill(e, 0), !0
  } catch (n) {
    return k(n) === "EPERM"
  }
}
async function Pi(e, n) {
  return (await rd(e, n)).notDirectories
}
async function rd(e, n) {
  let r = Ja(Bt, async (s) => await Ye(e, s) === "clear" ? id(ae(e, s)) : "other"),
    o = await Promise.all(n.map(r));
  return {
    notDirectories: n.filter((s, a) => o[a] !== "directory"),
    special: n.filter((s, a) => o[a] === "special")
  }
}
async function id(e) {
  try {
    let n = await lt(e);
    return n.isDirectory() ? "directory" : n.isFile() || n.isSymbolicLink() ? "other" : "special"
  } catch {
    return "other"
  }
}
async function od(e, n) {
  let [r, o] = await Promise.all([e(["symbolic-ref", "-q", "HEAD"]), e(["rev-list", "--max-count=1", "--format=%h %s", n, "--"])]), s = r.code === 0 ? r.stdout.trim().replace(/^refs\/heads\//, "") : "(no branch)", a = o.code === 0 ? o.stdout.trim().split(`
`).at(-1) ?? "" : "";
  return `${s}: ${a}`
}
async function sd(e, n, r, o, s) {
  let a = e.entries.filter((T) => (T.kind === "changed" || T.kind === "absent") && n.has(T.path)).map(({
    path: T
  }) => T);
  if (a.length === 0) return e;
  let h = new Set(e.entries.flatMap((T) => T.kind === "absent" && n.has(T.path) ? [T.path] : [])),
    u = Gt(a),
    p = [...a, ...u.filter((T) => n.has(T))],
    w = new Set(e.entries.flatMap((T) => T.kind === "changed" ? [T.path] : [])),
    _ = await Promise.all(u.map((T) => Li(ae(o, T))));
  await Promise.all(u.map((T) => Rn(ae(o, T)).catch(() => {})));
  let y = await s(p);
  if ("refused" in y) return y;
  let E = await Promise.all(u.map((T) => Li(ae(o, T)))),
    B = new Set(y.copies.flatMap((T) => T.kind === "file" ? [T.path] : [])),
    I = u.find((T, S) => w.has(T) ? !B.has(T) : _[S] === null || _[S] !== E[S]);
  if (I !== void 0) return {
    refused: `${I}: changed while it was being read`,
    tooLarge: !1,
    momentary: !0
  };
  let R = new Set([...a, ...u]),
    A = new Set(a);
  return {
    entries: [...e.entries.filter((T) => !R.has(T.path)), ...y.entries.filter((T) => R.has(T.path)).map((T) => T.kind === "absent" && A.has(T.path) && (!h.has(T.path) || r.has(T.path)) ? {
      kind: "changed",
      path: T.path
    } : T)],
    copies: [...e.copies.filter((T) => !R.has(T.path)), ...y.copies]
  }
}
async function Fi(e, n, r, o) {
  return o.length === 0 ? {
    code: 0,
    stderr: ""
  } : e(["update-index", "-z", "--index-info"], n, o.map((s) => `0 ${"0".repeat(r.length)}	${s}\x00`).join(""))
}
async function zt(e, n, r) {
  let o = await Promise.all(kbr(r).map((u) => e(["-c", "core.precomposeUnicode=false", "ls-files", "-z", "-v", "--", ...u], {
    ...N7t,
    ...n
  })));
  if (o.some((u) => u.code !== 0)) return null;
  let s = o.flatMap((u) => u.stdout.split("\x00")).flatMap((u) => u.length > 2 ? [{
      tag: u[0],
      path: u.slice(2)
    }] : []),
    a = new Set(s.flatMap(({
      tag: u,
      path: p
    }) => u === "S" || u === "s" ? [p] : [])),
    h = new Set(s.map(({
      path: u
    }) => u));
  return {
    skipWorktree: a,
    unseen: new Set([...a, ...s.flatMap(({
      tag: u,
      path: p
    }) => u !== u.toUpperCase() ? [p] : [])]),
    absent: new Set(r.filter((u) => !h.has(u)))
  }
}
async function Li(e) {
  try {
    return xn("sha1").update(await pa(e)).digest("hex")
  } catch (n) {
    let r = k(n);
    return r === "ENOENT" || r === "ENOTDIR" ? "absent" : null
  }
}
var ud = 104857600,
  cd = 3600,
  fd = 10,
  yo = 120,
  Jt = 300,
  hd = 180000,
  bo = "This partial clone does not hold every file of its working tree locally (a sparse checkout, or blobs never downloaded), so it cannot be uploaded without fetching from its remote, which the upload does not do \u2014 a full clone, made without --filter, would upload. If no file is missing from the working tree, the index names an object that this repository has lost: `git fsck --name-objects` prints it as \u201Cmissing blob <id> (:<path>)\u201D, and `git rm --cached <path>` then `git add <path>` stores it again",
  kr = 32,
  gd = ["rev-parse", "cat-file", "diff-files"];

function xr() {
  return v("tengu_ccr_bundle_max_bytes", null) ?? ud
}
var On = {
    ...zft,
    ...Obr
  },
  _o = 64,
  md = 65536,
  pd = (_o + 1) * 65;
async function wd(e) {
  try {
    if (!(await Ot(e)).isFile()) return null;
    let n = await ad(e, Cc());
    try {
      let r = await n.stat();
      if (!r.isFile() || r.size > pd) return null;
      let o = Buffer.allocUnsafe(r.size),
        {
          bytesRead: s
        } = await n.read(o, 0, r.size, 0);
      if (s !== r.size) return null;
      let a = o.toString("utf8").split(/\r?\n/).filter((h) => h !== "");
      return a.length > _o || a.some((h) => !/^[0-9a-f]{40,64}$/.test(h)) ? null : a
    } finally {
      await n.close()
    }
  } catch {
    return null
  }
}
var yd = (e) => tt(e, `

`).split(`
`).some((n) => n.startsWith("parent ")),
  bd = {
    complete: "HEAD's history is complete \u2014 bundling it as usual, without the widest tier",
    cut: "HEAD's history crosses the boundary \u2014 bundling a snapshot of the working tree, without history",
    unborn: "HEAD is unborn and no local branch or tag is cut \u2014 trying the widest tier (branches and tags), the only one that can carry it",
    unborn_cut: "HEAD is unborn and a local branch or tag is cut \u2014 nothing can be bundled"
  };
async function _d(e, n, r = null, o = fze()) {
  let s = ["rev-parse", "--is-shallow-repository", "--git-path", "shallow"],
    a = r ? await Eb(e, s, {
      hardened: !0,
      layout: r.layout,
      signal: n,
      probes: o
    }) : await Tbr([...yn, ...Mce, ...s], {
      cwd: e,
      abortSignal: n,
      ...Xdo()
    }),
    [h, u] = a.stdout.split(/\r?\n/);
  if (a.code !== 0 || h !== "true") return "not_shallow";
  let p = (B) => r ? Eb(e, B, {
      hardened: !0,
      layout: r.layout,
      signal: n,
      probes: o,
      env: On
    }) : Tbr([...yn, ...Mce, ...B], {
      cwd: e,
      ...Xdo(On),
      abortSignal: n,
      maxBuffer: md
    }),
    _ = (await p(["rev-parse", "--verify", "--quiet", "HEAD^{commit}"])).exitCode === 1,
    y = _ ? "unborn_cut" : "cut",
    E = await wd(wo(e, u ?? ut(".git", "shallow")));
  if (E === null) return y;
  for (let B of E) {
    if (_) {
      let R = await p(["for-each-ref", "--count=1", "--format=%(refname)", `--contains=${B}`, "refs/heads/", "refs/tags/"]);
      if (R.exitCode === 0 && R.stdout.trim() === "") continue
    } else {
      let R = await p(["merge-base", "--is-ancestor", B, "HEAD"]);
      if (R.exitCode === 1) continue;
      if (R.exitCode !== 0) return y
    }
    let I = await p(["cat-file", "commit", B]);
    if (I.exitCode !== 0 || yd(I.stdout)) return y
  }
  return _ ? "unborn" : "complete"
}
var Zi = 5000,
  Br = 100,
  Ar = 5000000;
async function ko(e, n, r, o, s, a) {
  let h = await Eb(e, ["count-objects", "-v"], {
      hardened: n,
      layout: r,
      signal: o,
      probes: a,
      ...r?.borrowedObjects !== void 0 && {
        env: {
          GIT_OBJECT_DIRECTORY: r.borrowedObjects
        }
      }
    }),
    {
      sizeBytes: u,
      inPackCount: p
    } = Eo(h);
  if (u === null || s === null || u <= s || u > Br * s || p !== null && p > Ar) return {
    sizeBytes: u,
    inPackCount: p
  };
  let w = await Eb(e, ["config", "-z", "--list"], {
    hardened: n,
    layout: r,
    signal: o,
    probes: a
  });
  if (w.code !== 0 || $r(w.stdout)) return {
    sizeBytes: u,
    inPackCount: p
  };
  let _ = o === void 0 ? AbortSignal.timeout(Zi) : AbortSignal.any([o, AbortSignal.timeout(Zi)]),
    y = await Eb(e, ["rev-list", "--disk-usage", "--objects", "--missing=allow-any", "--all"], {
      hardened: n,
      layout: r,
      signal: _,
      probes: a,
      ...!n && {
        env: {
          GIT_NO_LAZY_FETCH: "1"
        }
      }
    }),
    E = y.code === 0 && /^\d+\s*$/.test(y.stdout) ? Number(y.stdout.trim()) : null;
  if (E !== null && E < u) t(`[gitBundle] packs hold ${u} bytes but only ${E} are reachable: sizing the tiers by the reachable figure`);
  return {
    sizeBytes: E !== null && E < u ? E : u,
    inPackCount: p
  }
}

function Eo({
  code: e,
  stdout: n
}) {
  if (e !== 0) return {
    sizeBytes: null,
    inPackCount: null
  };
  let r = n.match(/^size-pack:\s*(\d+)/m),
    o = n.match(/^in-pack:\s*(\d+)/m);
  return {
    sizeBytes: r ? Number(r[1]) * 1024 : null,
    inPackCount: o ? Number(o[1]) : null
  }
}
async function G6o(e) {
  let n = e?.gitRoot ?? fr(pe());
  if (!n) return {
    tooLarge: !1,
    sizeBytes: null,
    inPackCount: null
  };
  let {
    sizeBytes: r,
    inPackCount: o
  } = e === void 0 ? await ko(n, !1, void 0, void 0, null, fze()) : Eo(await ent(e.spawn([...yn, "count-objects", "-v"]), {
    abortSignal: e.signal,
    preserveOutputOnError: !1,
    stdin: "ignore"
  }));
  if (r === null) return {
    tooLarge: !1,
    sizeBytes: null,
    inPackCount: o
  };
  let s = xr();
  return {
    tooLarge: r > 3 * s && (r > Br * s || o !== null && o > Ar),
    sizeBytes: r,
    inPackCount: o
  }
}
async function Ro(e, n, r) {
  let {
    hardened: o,
    layout: s,
    signal: a,
    probes: h
  } = r, u = [r.seedRefs.stash, r.seedRefs.root], p = r.hasStash ? [r.seedRefs.stash] : [], w = ["--glob=refs/heads/*", "--glob=refs/tags/*", ...r.headResolves ? ["HEAD"] : []], _ = async (ie, K) => {
    let _e = s === void 0 ? void 0 : await zd(e, s, u, a, h);
    if (_e === null) return {
      ok: !1,
      ...kt()
    };
    let Ce = await Eb(e, [...o ? [] : Mce, "bundle", "create", n, ...K, ...p, "--"], {
      hardened: o,
      layout: s,
      signal: a,
      probes: h,
      ...!o && {
        env: On
      }
    });
    if (s && !await uze(s, u)) return {
      ok: !1,
      ...kt()
    };
    if (Ce.code !== 0) {
      if (!o && !a?.aborted) {
        let Re = await Eb(e, ["config", "-z", "--list"], {
          hardened: o,
          layout: s,
          signal: a,
          probes: h
        });
        if (Re.code === 0 && $r(Re.stdout)) return t(`[gitBundle] partial clone: git bundle create ${K.join(" ")} failed (${Ce.code}), bundling a snapshot of the working tree instead: ${Et(Ce.stderr,o)}`), {
          ...await Ro(e, n, {
            ...r,
            forceScope: "squashed",
            partialClone: !0
          }),
          promisorFallback: !0
        }
      }
      return Cn(`git bundle create ${o?Et(K.join(" "),!0):K.join(" ")}`, Ce, o)
    }
    let {
      size: he
    } = await Vi(n);
    if (he <= r.maxBytes) {
      let Re = r.hasStash ? await Qi(e, n, r.relabelledPath, new Map([
        [r.seedRefs.stash, yt]
      ]), {
        hardened: o,
        layout: s,
        signal: a,
        probes: h
      }) : null;
      if (Re !== null && !Re.ok) return eo(Re.error);
      let Ne = Re === null ? n : r.relabelledPath,
        W = o ? await uo(e, Ne, [...K, ...r.hasStash ? [yt] : []], {
          layout: s,
          signal: a,
          probes: h,
          expected: r.stashCommit === void 0 ? {} : {
            [yt]: r.stashCommit
          },
          shown: _e
        }) : r.bindJudgedStash === !0 && r.hasStash && r.stashCommit !== void 0 ? await lo(e, Ne, yt, r.stashCommit, a) : Tr;
      if (s && !await uze(s, u)) return {
        ok: !1,
        ...kt()
      };
      return co(W, o) ?? {
        ok: !0,
        path: Ne,
        size: Re === null ? he : Re.sizeBytes,
        scope: ie
      }
    }
    return t(`[gitBundle] ${ie} bundle is ${(he/1024/1024).toFixed(1)}MB (> ${(r.maxBytes/1024/1024).toFixed(0)}MB cap), trying the next tier`), null
  }, {
    sizeBytes: y,
    inPackCount: E
  } = await ko(e, o, s, a, r.forceScope === void 0 ? r.maxBytes : null, h), B = r.forceScope === "squashed", I = y !== null && y > r.maxBytes, R = B || r.skipAllRefs || I, A = y !== null && y > 3 * r.maxBytes, T = B || A, S = A && (y !== null && y > Br * r.maxBytes || E !== null && E > Ar);
  if (B) t("[gitBundle] forceScope=squashed \u2014 skipping the all-branches and HEAD tiers");
  else if (I) t(r.currentBranchOnly ? `[gitBundle] size-pack ${(y/1024/1024).toFixed(0)}MB vs ${(r.maxBytes/1024/1024).toFixed(0)}MB cap; ${T?"skipping the branch tier":"trying the branch tier"}${S?", skipping squashed":""}` : `[gitBundle] size-pack ${(y/1024/1024).toFixed(0)}MB > ${(r.maxBytes/1024/1024).toFixed(0)}MB cap; skipping all-branches${T?" and HEAD":""}${S?" and squashed":""}`);
  if (r.currentBranchOnly) {
    let ie = await Eb(e, ["rev-parse", "--verify", "--quiet", "--symbolic-full-name", "HEAD"], {
      hardened: o,
      layout: s,
      signal: a,
      probes: h
    });
    if (ie.exitCode === 1) return {
      ok: !1,
      error: "The current branch has no commits yet",
      failReason: "empty_repo"
    };
    if (ie.code !== 0) return Cn("git rev-parse HEAD", ie, o);
    if (!T) {
      let K = ie.stdout.trim(),
        _e = K === "HEAD" ? await _("head", ["HEAD"]) : await _("current_branch", [K, "HEAD"]);
      if (_e !== null) return _e
    }
  } else {
    if (!R) {
      let ie = await _("all", w);
      if (ie !== null) return ie
    }
    if (!T) {
      let ie = await _("head", ["HEAD"]);
      if (ie !== null) return ie
    }
  }
  if (S) return {
    ok: !1,
    error: `This repository is too large to upload: its git history is ${Bn(y)}, and an upload can be at most ${Bn(r.maxBytes)}`,
    failReason: "too_large",
    sizeBytes: y ?? void 0
  };
  let z = o && !r.hasStash ? await Wd(e, s, u, a, h) : void 0;
  if (z === null) return {
    ok: !1,
    ...kt()
  };
  if (o && !r.hasStash && z === void 0) return {
    ok: !1,
    error: "git rev-parse HEAD^{tree} failed: HEAD names no commit",
    failReason: "git_error"
  };
  let Y = {
      ...On,
      GIT_NO_LAZY_FETCH: "1"
    },
    D = {
      ...o ? {} : Y,
      ...Sn
    },
    H = r.hasStash ? `${r.stashCommit??r.seedRefs.stash}^{tree}` : z ?? "HEAD^{tree}",
    O = [];
  if (r.baseRef) {
    let [ie, K] = await Promise.all([H, `${r.baseRef}^{tree}`].map((Ce) => Eb(e, [...o ? [] : RMn, "rev-parse", Ce], {
      hardened: o,
      layout: s,
      signal: a,
      probes: h,
      ...!o && {
        env: Y
      }
    })));
    if (ie?.code === 0 && ie.stdout.trim() === K?.stdout.trim()) return {
      ok: !1,
      error: r.leftOutCount > 0 ? `It doesn't look like you have any new commits or changes to review: the only uncommitted changes here are to ${r.leftOutCount} ${P(r.leftOutCount,"file")} that ${P(r.leftOutCount,"stays","stay")} on this machine (named like credentials or keys, ${r.withheldByRules?"covered by a Read rule or a sandbox read-deny setting of yours, linked from your Claude Code configuration, ":""}hard-linked to another file, kept by a git filter such as LFS, or still being written while read) and ${P(r.leftOutCount,"is","are")} not uploaded. Stage or commit any other work first.` : "It doesn't look like you have any new commits or changes to review. Stage or commit them first?",
      failReason: "no_changes"
    };
    let _e = await Eb(e, [...o ? [] : RMn, "commit-tree", `${r.baseRef}^{tree}`, "-m", "seed-base"], {
      hardened: o,
      layout: s,
      signal: a,
      probes: h,
      env: D
    });
    if (_e.code === 0) O = ["-p", _e.stdout.trim()];
    else t(`[gitBundle] baseRef commit-tree failed (${_e.code}), squashing without parent: ${Et(_e.stderr,o)}`)
  }
  let me = await Eb(e, [...o ? [] : RMn, "commit-tree", H, ...O, "-m", "seed"], {
    hardened: o,
    layout: s,
    signal: a,
    probes: h,
    env: D
  });
  if (me.code !== 0) return Cn("git commit-tree", me, o);
  let X = me.stdout.trim();
  if (s && !await uze(s, u)) return {
    ok: !1,
    ...kt()
  };
  let ve = await An(e, [r.seedRefs.root, X], {
    hardened: o,
    layout: s,
    probes: h,
    ...o && {
      signal: a
    }
  });
  if (o && a?.aborted) return {
    ok: !1,
    error: "Bundle upload aborted",
    failReason: "git_error"
  };
  if (ve.code !== 0) return {
    ok: !1,
    ...Io(ve.stderr, s?.adminDir),
    heldSeedRef: {
      exitCode: ve.code
    }
  };
  let le = await Eb(e, [...o ? [] : Mce, "bundle", "create", n, r.seedRefs.root, "--"], {
    hardened: o,
    layout: s,
    signal: a,
    probes: h,
    ...!o && {
      env: Y
    }
  });
  if (s && !await uze(s, u)) return {
    ok: !1,
    ...kt()
  };
  if (le.code !== 0) return {
    ok: !1,
    ...r.partialClone ? {
      error: bo,
      failReason: "git_error"
    } : Cn("git bundle create for the squashed root", le, o)
  };
  let {
    size: Te
  } = await Vi(n);
  if (Te <= r.maxBytes) {
    let ie = await Qi(e, n, r.relabelledPath, new Map([
      [r.seedRefs.root, bt]
    ]), {
      hardened: o,
      layout: s,
      signal: a,
      probes: h
    });
    if (!ie.ok) return eo(ie.error);
    let K = o ? await uo(e, r.relabelledPath, [bt], {
      layout: s,
      signal: a,
      probes: h,
      expected: {
        [bt]: X
      },
      shown: new Map
    }) : r.bindJudgedStash === !0 ? await lo(e, r.relabelledPath, bt, X, a) : Tr;
    if (s && !await uze(s, u)) return {
      ok: !1,
      ...kt()
    };
    return co(K, o) ?? {
      ok: !0,
      path: r.relabelledPath,
      size: ie.sizeBytes,
      scope: "squashed",
      rootCommit: X
    }
  }
  return {
    ok: !1,
    error: `This repository is too large to upload: even without its history it is ${Bn(Te)}, and an upload can be at most ${Bn(r.maxBytes)}`,
    failReason: "too_large",
    sizeBytes: Te
  }
}
async function Qi(e, n, r, o, s) {
  let a = await si(n, r, o, s.signal);
  if (!a.ok) return a;
  let h = await Eb(e, ["bundle", "list-heads", r], s);
  return h.code === 0 ? a : {
    ok: !1,
    error: `git bundle list-heads exited ${h.code}: ${Et(h.stderr,s.hardened)}`
  }
}

function eo(e) {
  return {
    ok: !1,
    error: `Could not prepare the upload of this working tree (${e}). Retry; if it keeps failing, check that the temporary directory has room for a second copy of the bundle and that nothing else is writing to this checkout.`,
    failReason: "git_error"
  }
}

function Ir(e) {
  return e.detail === "git_file" && e.gitDir === ""
}

function So(e) {
  return e.misplaced === "linked_worktree" || vo[e.misplaced] !== void 0 || Ir(e)
}
async function kd(e, n, r, o) {
  let s = (E, B = n) => ({
    handedBack: !1,
    refusedAs: B,
    notThePreviousWay: E
  });
  if (r !== null) return s(r);
  let a = (E) => {
    let B = E === null ? null : eco(E),
      I = o ?? (E === null || B === null ? null : `${Or(B,E)} and this checkout\u2019s git directory (${Ee(E)}) is inside it, so a Claude Code session started there can write that directory\u2019s configuration${n.misplaced==="git_file"?" \u2014 start from an ordinary clone instead":""}`);
    return I === null ? {
      handedBack: !0
    } : {
      ...s(I),
      belowHomeCheckout: !0
    }
  };
  if (Ir(n)) {
    let E = await Ao(e);
    return s(E === "link" ? "its .git entry is a symbolic link, which this checkout\u2019s own session can re-point and nothing pins in place, so where it leads when that capture runs cannot be bound to this tree \u2014 start from an ordinary clone instead" : E === "second_name" ? "its .git pointer file has a second name (a hard link), so what it names cannot be trusted between this read and git\u2019s \u2014 remove the other name, or start from an ordinary clone" : "its .git entry is a pointer file this upload could not follow (not the one gitdir line git writes), so where it leads cannot be judged \u2014 start from an ordinary clone instead")
  }
  if (n.gitDir !== "" && (n.misplaced === "linked_worktree" || n.detail === "git_file")) {
    if ((await Pbr(e)).some((B) => gy(B, n.gitDir))) return s(n.misplaced === "linked_worktree" ? `its .git file names a worktree entry under a temporary directory (${Ee(n.gitDir)}), where sessions write \u2014 run git worktree repair if this tree was moved, or start from the repository\u2019s main checkout` : `its .git file names a git directory under a temporary directory (${Ee(n.gitDir)}), where sessions write \u2014 start from an ordinary clone of the repository`)
  }
  if (n.detail === "git_file" && n.gitDir !== "") {
    let E = EMn(n.gitDir)[0];
    if (E !== void 0) return s(`its git directory (${Ee(n.gitDir)}) lies inside another checkout (${Ee(E)}), whose Claude Code sessions can write its configuration \u2014 start from an ordinary clone instead`)
  }
  if (So(n)) return s(vo[n.misplaced] ?? to[n.detail ?? "admin_dir"]);
  let h = n.gitDir === "" ? null : n.misplaced === "old_git" ? $n(n.gitDir) ? {
    entry: n.gitDir,
    repository: Ze(Ze(n.gitDir))
  } : {
    entry: null,
    repository: n.gitDir
  } : n.misplaced === "git_file" ? {
    entry: null,
    repository: n.gitDir
  } : null;
  if (h === null) return a(null);
  let {
    entry: u,
    repository: p
  } = h, w = (u === null ? null : await Rbr(u)) ?? await Rbr(p);
  if (w !== null) return s(xo[w], {
    ...n,
    misplaced: w,
    commonDir: p
  });
  if (u === null && await To(p)) return s("its git directory holds a commondir file, which git writes only in a linked working tree\u2019s entry and which would send that capture to another repository\u2019s configuration \u2014 start from an ordinary clone", {
    ...n,
    detail: "common_dir"
  });
  if (u !== null && await Sms(u) !== "absent") return s(to.worktree_config, {
    ...n,
    misplaced: "linked_worktree",
    detail: "worktree_config"
  });
  let _ = a(p);
  if (!_.handedBack) return _;
  let y = await W0i(p, e, u !== null);
  if (y.kind === "clear") return {
    handedBack: !0
  };
  return {
    ...s(Ed(y, n.misplaced === "old_git" ? "update git (2.31 or newer), or " : "", n.misplaced !== "old_git"), y.kind === "work_tree" ? {
      ...n,
      misplaced: "work_tree"
    } : y.kind === "worktree_config" ? {
      ...n,
      misplaced: "linked_worktree",
      detail: "worktree_config"
    } : n),
    screened: y.kind
  }
}
var to = {
    worktree_config: "its administrative entry carries a per-worktree configuration file, one a Claude Code session of this repository could have written there \u2014 delete that file only if nothing in it matters (`git rev-parse --git-path config.worktree` names it; git sparse-checkout writes one, and a sparse tree needs it to stay sparse), or start from the repository\u2019s main checkout",
    common_dir: "the commondir file in its administrative directory, which does not read as git writes it, would decide which repository that way takes its configuration from",
    keyed_elsewhere: "its .git file leads git to another repository than the one under which Claude Code keeps this folder\u2019s trust and settings, and that way would run under the other\u2019s configuration \u2014 start from the repository\u2019s main checkout",
    placement: "its repository is placed or named as git does not place one this upload takes a repository from (not <name>.git or .git, inside the working tree, or under another git directory) \u2014 rename a bare repository\u2019s directory to <name>.git and run git worktree repair from it, or start from an ordinary clone",
    back_link: "its administrative entry does not point back at this tree (a moved tree, or a back link something rewrote) \u2014 run git worktree repair, or start from the repository\u2019s main checkout",
    admin_dir: "its .git file names a worktree entry that does not exist or is not one git made, so where it would lead that capture cannot be judged \u2014 run git worktree repair if this tree was moved, or start from the repository\u2019s main checkout",
    foreign_mount: "something is mounted over its administrative entry in the repository (.git/worktrees/<name>), so what stands there is not the repository\u2019s own \u2014 unmount it, or start from the repository\u2019s main checkout",
    git_file: "its .git entry is a pointer file this upload could not follow, so where it leads cannot be judged \u2014 start from an ordinary clone instead"
  },
  xo = {
    reftable: "this repository keeps (or appears to keep) its refs in reftable storage \u2014 a state a Claude Code session can bring about without the user, under which that capture would run git; start from an ordinary clone of the repository",
    borrowed_objects: "this repository borrows objects from another through an alternates file \u2014 a state a Claude Code session can bring about without the user, under which that capture would run git; start from an ordinary clone of the repository"
  },
  vr = "its git configuration points the work tree somewhere else (core.worktree), so that capture would read the directory it names rather than this one; remove core.worktree or start from an ordinary clone",
  vo = {
    ...xo,
    included_config: "a cloud session could change a file that git reads this checkout\u2019s configuration from, so that capture would run under whatever is put there",
    many_includes: "its git configuration pulls in more include files than are followed, so that capture would run every program those files name and enter any nested repository registered here; trim the include chain",
    work_tree: vr
  };

function Ed(e, n, r) {
  if (e.file === TMn) switch (e.kind) {
    case "includes":
      return `its launch environment\u2019s git configuration (GIT_CONFIG_PARAMETERS / GIT_CONFIG_COUNT) includes a file inside this working tree, its repository or a directory your settings open to Claude Code sessions \u2014 configuration this upload could not have git list here, where a file a session may write could say what that capture runs; ${n}drop that include from the environment, or start from an ordinary clone`;
    case "work_tree":
      return vr;
    case "worktree_config":
      return `its launch environment\u2019s git configuration switches per-worktree configuration on (extensions.worktreeConfig), under which that capture would also read a configuration file a session of the repository can plant in this tree\u2019s administrative entry; ${n}start from the repository\u2019s main checkout`;
    case "second_name":
      return `its launch environment\u2019s git configuration (GIT_CONFIG_PARAMETERS / GIT_CONFIG_COUNT) includes a file that has a second name \u2014 a hard link \u2014 so a session that can reach the other name could change what that capture runs under; ${n}give that file a single name again (copy it aside and move the copy back over it), drop that include from the environment, or start from an ordinary clone`;
    case "unread":
      return "the git configuration its launch environment carries (GIT_CONFIG_PARAMETERS / GIT_CONFIG_COUNT) does not parse as git would parse it, or includes a file that cannot be read or followed here, so what that capture would run under cannot be judged; check those variables, or start from an ordinary clone";
    case "home_checkout":
      return io(e, n, r);
    case "settings_unreadable":
      return no(e.file, n);
    case "config_in_checkout":
      return `its launch environment\u2019s git configuration (GIT_CONFIG_PARAMETERS / GIT_CONFIG_COUNT) includes a file that lies inside \u2014 or links into \u2014 a git checkout (${Ee(e.checkout)}), which a Claude Code session started there can write; ${n}drop that include from the environment, keep the file outside any checkout, or start from an ordinary clone`
  }
  let o = Ee(e.file);
  switch (e.kind) {
    case "includes":
      return `its git configuration (${o}) pulls in include files, lies inside this working tree, its repository or a directory your settings open to Claude Code sessions, or includes a file there \u2014 configuration this upload could not have git list here, where a file a session may write could say what that capture runs; ${n}move what the includes hold into the configuration file itself, stop granting sessions the directory that holds it (permissions.additionalDirectories, sandbox.filesystem.allowWrite, an Edit rule or --add-dir), or start from an ordinary clone`;
    case "second_name":
      return `its git configuration file ${o} (or a file it includes) has a second name \u2014 a hard link \u2014 so a session that can reach the other name could change what that capture runs under; ${n}give the file a single name again (copy it aside and move the copy back over it), or start from an ordinary clone`;
    case "work_tree":
      return vr;
    case "worktree_config":
      return `its git configuration (${o}) switches per-worktree configuration on (extensions.worktreeConfig), under which that capture would also read a configuration file a session of the repository can plant in this tree\u2019s administrative entry; ${n}start from the repository\u2019s main checkout`;
    case "unread":
      return `its git configuration file ${o} could not be read as a plain file git would parse, or is reached through a link that cannot be followed here, so what that capture would run under cannot be judged; ${n}check that file, or start from an ordinary clone`;
    case "settings_unreadable":
      return no(e.file, n);
    case "home_checkout":
      return io(e, n, r);
    case "config_in_checkout":
      return `the user-level git configuration file ${o}, or a file it includes, lies inside \u2014 or links into \u2014 a git checkout (${Ee(e.checkout)}), so a Claude Code session started there can write what that capture would run under, whether or not the file exists yet; ${n}${r?"start from an ordinary clone, or ":""}keep user-level git configuration outside any checkout`
  }
}

function no(e, n) {
  return `a Claude Code settings file inside this working tree (${Ee(ut(e,"settings.json"))} or settings.local.json) stands but cannot be read, so which directories it opens to sessions \u2014 and so whether a session could write the configuration that capture would run under \u2014 cannot be told; ${n}fix or remove that settings file, then retry`
}

function io({
  file: e,
  checkout: n
}, r, o) {
  let s = o ? "start from an ordinary clone, or " : "";
  switch (xbr(n, Ze(e))) {
    case "home":
      return `your home directory is itself a git checkout, so a Claude Code session started there can write the user-level git configuration that capture would run under (${Ee(e)}, whether or not that file exists yet); ${r}${s}keep the dotfiles repository\u2019s git directory outside your home (a bare repository used with --git-dir)`;
    case "above_home":
    case "elsewhere":
      return `your home directory lies inside a git checkout (${Ee(n)}), so a Claude Code session started there can write the user-level git configuration that capture would run under (${Ee(e)}, whether or not that file exists yet); ${r}${s}move your home directory out of that checkout, or remove the stray git entry that makes it one`
  }
}

function Rd(e) {
  let n = Abr(e);
  return n === null ? "" : xbr(n, e) === "home" ? ` (yours is itself a git checkout: ${Ee(n)})` : ` (yours lies inside the git checkout at ${Ee(n)})`
}

function Or(e, n) {
  return xbr(e, n) === "home" ? `your home directory (${Ee(e)}) is itself a git checkout` : `your home directory lies inside a git checkout (${Ee(e)})`
}
var Ee = (e) => Il(Nn(e), yo);

function Sd(e) {
  return `this checkout sits inside another checkout (${Ee(e)}), whose Claude Code sessions can write this one\u2019s git files \u2014 start from a checkout of this repository that stands inside no other`
}

function xd(e) {
  let n = eco(e);
  return n === null ? null : `${Or(n,e)} and this working tree\u2019s repository (${Ee(e)}) is inside it, so a Claude Code session started there can write the repository\u2019s git files`
}

function vd(e) {
  return `this working tree\u2019s repository sits inside another checkout (${Ee(e)}), whose Claude Code sessions can write its git files \u2014 start from a working tree of a repository that stands inside no other checkout`
}
async function Td(e) {
  let n = ut(e, ".git"),
    r;
  try {
    r = await Ot(n)
  } catch (s) {
    let a = k(s);
    return a === "ENOENT" || a === "ENOTDIR" ? null : "unreadable"
  }
  let o;
  if (r.isDirectory()) o = [n];
  else {
    if (!r.isFile()) return "unreadable";
    let s = uDn(await $7t(n, {
      oneName: !0
    }).catch(() => {
      return
    }));
    if (s === void 0 || CMn(s, e)) return "unreadable";
    let a = ld(s) ? s : wo(e, s);
    o = $n(a) ? [a, Ze(Ze(a))] : [a]
  }
  for (let s of o) {
    let a = await Rbr(s);
    if (a !== null) return a;
    if (!$n(s) && await To(s)) return "common_dir"
  }
  return null
}
async function To(e) {
  return Ot(ut(e, "commondir")).then(() => !0, (n) => {
    let r = k(n);
    return !(r === "ENOENT" || r === "ENOTDIR")
  })
}

function $n(e) {
  return e !== "" && Ji(e) !== ".git" && Ji(Ze(e)) === "worktrees"
}
var Dn = `${ni} retry there. ${ri}`,
  Rt = `${ti} Use ${Dn}`,
  oo = "`git reset` then rebuilds the index from HEAD (what was staged becomes unstaged; your files are untouched)",
  Tn = `look at the file named index in this checkout\u2019s git directory (in an ordinary checkout: ls -l .git/index; a link shows an arrow, ->). If it is a link, do not run git in this folder, since git would write through it to whatever it points at: use ${Dn} If it is not a link,`,
  so = {
    index_link: ` Git never makes it a link: if you did not, something else did, and git would write through it. ${Rt}`,
    index_second_name: ` Git never gives it a second name, and through that name something else can change the file under git. Look at it (ls -l). Remove the other name if you can find it (\`find . -samefile\` with the file named above, run in this directory), or remove that file itself: ${oo}. Then retry.`,
    index_too_large: " This upload has no way round that limit.",
    index_other: ` Look at it first (ls -l) and remove it if it is not an index git wrote; ${oo}. Then retry.`,
    shallow_link: ` Git never makes it a link: if you did not, something else did. ${Rt}`,
    shallow_second_name: " Git never gives it a second name. Look at it (ls -l) and remove the other name if you can find it (`find . -samefile` with the file named above, run in this directory); or copy the file named above to a new name and move the copy over it. Then retry.",
    shallow_other: " Look at it (ls -l): git keeps the list of this clone\u2019s shallow commits there, as a small plain file \u2014 if this clone was not made with --depth, nothing should stand there and it can be removed. Then retry.",
    shared_index: ` Look at the split-index files (sharedindex.*) first (ls -l; a link shows an arrow, ->). If one is a link, git did not make it so, and git reads the index through it: do not run git in this folder, and use ${Dn} If none is a link, do not delete any of these files by hand: the index may need one of them, and which one can change whenever git writes the index. Use a fresh clone in this case too, by the same steps.`,
    shared_index_too_large: ` Do not delete that split-index file by hand: the index may need it. If this project has so many files that a fresh clone\u2019s index would be over that limit too, this upload has no way round it. If not, use ${Dn}`,
    head: ` First ${Tn} check out a branch or a commit (\`git switch\`), and retry.`,
    symbolic_head: ` First ${Tn} check out a branch by its own name (\`git switch\`; if it is the one that \`git status\` already shows, git answers \u201CAlready on\u201D, and your uncommitted work stays), and retry.`,
    refs: " `git for-each-ref` shows what git makes of them: rename or repair that branch or tag, then retry.",
    config: ` First ${Tn} check \`git status\` here, and retry.`,
    other: ` Retry; if it keeps happening, first ${Tn} \`git status\` here shows whether git itself still reads this checkout.`
  };

function Cd({
  kind: e,
  setting: n,
  where: r = "",
  relative: o
}) {
  let s = Nn(r),
    a = "Claude Code\u2019s environment (set by your shell or your Claude Code settings)",
    h = `Move the attribute rules it points to into a .gitattributes file committed with the project first, then remove the setting from ${s} and retry.`,
    u = `Remove ${n} from your shell or your Claude Code settings, then start Claude Code again.`,
    [p, w] = {
      attributes_file: o ? [`${n} in ${s} is not a full path, which the git this upload runs may read as a different file than yours does`, "Set it to a full path (on Windows, one that starts with a drive letter) or a ~/ path, then retry."] : [`${n} is set in ${s}`, `Move the attribute rules it points to into a .gitattributes file committed with the project, or set core.attributesFile directly in your user or system git config file to an absolute or ~/ path; then remove the setting from ${s} and retry.`],
      attr_tree: [`${n} is set in ${s}`, h],
      ignore_case: [`${n} (which decides whether .gitattributes patterns match file names regardless of letter case) is set in ${s}`, "Move the core.ignoreCase line into this repository\u2019s .git/config or directly into your ~/.gitconfig, then retry."],
      config_location: [`${n} is a relative path in ${"Claude Code\u2019s environment (set by your shell or your Claude Code settings)"}, which git resolves from whatever directory it runs in`, `Set ${n==="HOMEPATH"||n==="USERPROFILE"?"HOME":n} to a full path (on Windows, one that starts with a drive letter), then start Claude Code again.`],
      env_config: [`${n} in ${"Claude Code\u2019s environment (set by your shell or your Claude Code settings)"} carries an include, core.attributesFile, attr.tree or core.ignoreCase, or does not parse`, u],
      attr_source_env: [`${n} is set in ${"Claude Code\u2019s environment (set by your shell or your Claude Code settings)"}`, u]
    } [e];
  return `Not uploading this working tree: ${p}, and the upload cannot follow that setting, so a file git would change before storing it (to encrypt it, for example) could be uploaded as it is on disk. ${w}`
}

function Xt(e) {
  return ` It is not uploaded the previous way either: ${e}.`
}

function Bd(e) {
  switch (e) {
    case "git_file":
    case "linked_worktree":
    case "work_tree":
    case "included_config":
    case "many_includes":
    case "old_git":
    case "borrowed_objects":
    case "reftable":
      return e;
    default:
      return null
  }
}

function ao(e, n) {
  let r = jhs;
  try {
    let o = GLi(e, n);
    if (o === null) return {
      kind: "unreadable"
    };
    let s = [...o, ...jco().flatMap((h) => Object.keys(Ga(h)?.env ?? {}))].find((h) => r.includes(h.toUpperCase()));
    if (s !== void 0) return {
      kind: "names",
      name: s
    };
    let a = bSr(r);
    return a === void 0 ? null : {
      kind: "moved",
      name: a
    }
  } catch (o) {
    return t(`[gitBundle] could not read the repository's settings: ${d(o)}`), {
      kind: "unreadable"
    }
  }
}

function n_a() {
  try {
    let e = ["projectSettings", "localSettings"].flatMap((n) => Object.keys(be(n)?.env ?? {}).filter((r) => {
      let o = r.toUpperCase();
      return Ad.includes(o) && Qyo.has(o)
    }));
    return e.filter((n, r) => e.findIndex((o) => o.toUpperCase() === n.toUpperCase()) === r)
  } catch {
    return []
  }
}
var Ad = ["CCR_ENABLE_BUNDLE", "CCR_FORCE_BUNDLE"];

function Er(e) {
  if (e.kind === "unreadable") return `Not uploading this working tree this way: ${"a settings file a cloud session could reach (this repository\u2019s .claude/settings.json or .claude/settings.local.json, or a --settings file)"} could not be parsed, so what it sets cannot be checked. Fix or remove it (see /status), then restart Claude Code.`;
  let s = JXe.includes(e.name.toUpperCase());
  if (e.kind === "names") return s ? `Not uploading this working tree this way: ${"a settings file a cloud session could reach (this repository\u2019s .claude/settings.json or .claude/settings.local.json, or a --settings file)"} names ${e.name}, which decides where your own settings are found. Remove it there; if you put it there yourself and need it, set it in your shell instead. Then restart Claude Code.` : `Not uploading this working tree this way: ${"a settings file a cloud session could reach (this repository\u2019s .claude/settings.json or .claude/settings.local.json, or a --settings file)"} names ${e.name}, and the upload's own git runs would have to trust what it names. If you did not put it there yourself, remove it. If you did, move it to your user settings (~/.claude/settings.json), managed settings or your shell (or pass the settings inline). Then restart Claude Code.`;
  return s ? `Not uploading this working tree this way: ${e.name} was changed by a settings file after Claude Code started; it decides where your own settings are found, so the upload only trusts the value the process was started with. Set it in the shell rather than in a settings file, then restart Claude Code.` : `Not uploading this working tree this way: ${e.name} was set by ${"a settings file a cloud session could reach (this repository\u2019s .claude/settings.json or .claude/settings.local.json, or a --settings file)"} that no longer names it, and the upload's own git runs would still have to trust it. Keep it out of those files and restart Claude Code.`
}

function Kdi() {
  return x() === "windows"
}

function r_a(e) {
  switch (e?.kind) {
    case void 0:
      return "An older upload method, which took more layouts, is retired on macOS and Linux. To start without an upload, push your work and connect GitHub at https://claude.ai/code; /ultrareview also takes a pull request number.";
    case "forced_bundle":
      return "An older upload method, which took more layouts, is retired on macOS and Linux. To start without an upload, unset CCR_FORCE_BUNDLE, push your work and connect GitHub at https://claude.ai/code.";
    case "other_forge":
      return `An older upload method, which took more layouts, is retired on macOS and Linux. Cloud sessions can't clone from ${e.forge} yet, so an upload is the only way to start one from this repository.`
  }
}

function Id(e, n) {
  return {
    success: !1,
    error: n,
    failReason: "unsupported_layout",
    layoutKind: e
  }
}
var Od = {
    folder_is_home: "Not uploading this working tree: this checkout\u2019s git root is your home directory, or a folder above it (a repository rooted there makes every folder under it part of it, so the upload would carry your tracked home files). Start from a project folder that is its own repository, or work on these files from a separate clone.",
    folder_is_root: "Not uploading this working tree: this checkout\u2019s git root is the filesystem root. Start from a project folder that is its own repository.",
    folder_holds_config: "Not uploading this working tree: this checkout\u2019s git root holds (or sits inside) Claude Code\u2019s own configuration directory. Start from a project folder that is its own repository."
  },
  Nr = 268435456;
async function Nd(e, n, r) {
  let o = fr(e ?? pe());
  if (!o) return {
    gitRoot: "",
    paths: [],
    added: new Set,
    deleted: [],
    gitlinks: [],
    unwrittenModes: []
  };
  let s = (w) => Tbr([...yn, ...Mce, ...vMn(r), ...w], {
      cwd: o,
      abortSignal: n,
      env: {
        ...ys({
          ...zft,
          ...F7t(r)
        }, {
          base: Jdo(),
          userLocale: !0
        }),
        ...wMn
      },
      maxBuffer: Nr
    }),
    [a, h] = await Promise.all([s(["rev-parse", "--verify", "--quiet", "HEAD^{commit}"]), Ld(o, n, r)]);
  if (h === null) return null;
  if (h.unwrittenModes.length > 0) return {
    gitRoot: o,
    paths: [],
    added: new Set,
    deleted: [],
    ...h
  };
  if (a.exitCode === 1) return {
    gitRoot: o,
    paths: [],
    added: new Set,
    deleted: [],
    ...h
  };
  let [u, p] = await Promise.all([s(["diff", "--name-status", "-z", "--no-renames", fS, "HEAD", "--"]), s(["diff", "--cached", "--name-status", "-z", "--no-renames", fS, "HEAD", "--"])]);
  if (a.code !== 0 || u.code !== 0 || p.code !== 0) return null;
  return {
    ...Co(Pn(u.stdout), Pn(p.stdout), o),
    ...h
  }
}

function Co(e, n, r) {
  let o = (h, u) => h.filter(({
      status: p,
      path: w
    }) => u(p) && w !== "").map(({
      path: p
    }) => p),
    s = L([...o(e, (h) => h !== "D"), ...o(n, (h) => h !== "D")]),
    a = new Set(s);
  return {
    gitRoot: r,
    paths: s,
    added: new Set(o(n, (h) => h === "A")),
    deleted: L([...o(e, (h) => h === "D"), ...o(n, (h) => h === "D")]).filter((h) => !a.has(h))
  }
}

function Pn(e) {
  let n = e.split("\x00");
  return Array.from({
    length: Math.floor(n.length / 2)
  }, (r, o) => ({
    status: n[2 * o],
    path: n[2 * o + 1]
  }))
}
var $d = new Set([33188, 33261, 40960, 57344]),
  Dd = 61440,
  Pd = 57344;

function Fd(e) {
  let n = /^([0-7]{1,11}) [0-9a-f]+ \d\t(.*)$/s.exec(e);
  if (n === null) return {
    kind: "unwritten_mode",
    path: e.slice(e.indexOf("\t") + 1)
  };
  let r = Number.parseInt(n[1], 8),
    o = n[2];
  return (r & Dd) === Pd ? {
    kind: "gitlink",
    path: o
  } : {
    kind: $d.has(r) ? "ordinary" : "unwritten_mode",
    path: o
  }
}
async function Ld(e, n, r) {
  let o = await Eb(e, [...Mce, ...vMn(r), "ls-files", "-s", "-z"], {
    hardened: !1,
    signal: n,
    env: {
      ...zft,
      ...F7t(r)
    },
    maxBuffer: Nr
  });
  if (o.code !== 0) return null;
  let s = o.stdout.split("\x00").filter((h) => h !== "").map(Fd),
    a = (h) => L(s.filter((u) => u.kind === h).map(({
      path: u
    }) => u));
  return {
    gitlinks: a("gitlink"),
    unwrittenModes: a("unwritten_mode")
  }
}
async function Bo(e, n, r, o, s = []) {
  let a = (w) => Ix(w) || o?.(w) === !0,
    h = await Ft(e),
    u = async (w, _) => {
      if (!je(w, h)) return {
        path: w,
        why: "forged"
      };
      if (it(w)) return {
        path: w,
        why: "alias"
      };
      let y = await Md(e, w);
      if (y === "linked") return {
        path: w,
        why: "hardlinked"
      };
      if (a(w)) {
        if (_ === "changed") return {
          path: w,
          why: r.has(w) ? "added" : "changed"
        };
        if (await br(e, w)) return {
          path: w,
          why: "resurrected"
        }
      }
      return y === "unexamined" ? {
        path: w,
        why: "unexamined"
      } : null
    };
  return (await Promise.all([...s.map((w) => u(w, "deleted")), ...n.map((w) => u(w, "changed"))])).filter((w) => w !== null).sort((w, _) => w.path.localeCompare(_.path))
}
async function Md(e, n) {
  if (n.includes("\uFFFD")) return "unexamined";
  let r = await Ye(e, n);
  if (r !== "clear") return r === "symlink" ? "single" : "unexamined";
  try {
    let o = await Ot(ut(e, n));
    return o.isFile() && o.nlink > 1 ? "linked" : "single"
  } catch (o) {
    let s = k(o);
    return s === "ENOENT" || s === "ENOTDIR" ? "single" : "unexamined"
  }
}
async function Gd(e, n, r, o) {
  let s = (p) => Eb(e, [...Mce, ...p], {
      hardened: !1,
      signal: r,
      env: zft,
      maxBuffer: Nr
    }),
    [a, h] = await Promise.all([s(["diff", "--name-status", "-z", "--no-renames", fS, `${n}^1`, n, "--"]), s(["diff", "--name-status", "-z", "--no-renames", fS, `${n}^1`, `${n}^2`, "--"])]);
  if (a.code !== 0 || h.code !== 0) return null;
  let u = Co(Pn(a.stdout), Pn(h.stdout), e);
  return Bo(e, u.paths, u.added, o, u.deleted)
}
async function o_a(e, n, r) {
  let o = fr(e ?? pe()),
    s = o ? await U0i(o, n) : null;
  if (s?.kind === "failed") return {
    kind: "refused",
    sentence: `It is not uploaded the previous way either: a private copy of this checkout's index could not be made (${Il(Nn(s.detail),Jt)}), and that way runs only over such a copy. Nothing was uploaded; once that is put right, retry, or start from an ordinary clone.`,
    named: 0,
    added: 0,
    unexamined: 0,
    gitlinks: 0,
    indexCopied: !1,
    indexCopyCause: s.cause
  };
  let a;
  try {
    a = await jd(e, n, r, s?.indexFile)
  } catch (u) {
    throw await s?.dispose(), u
  }
  if (a.kind === "refused") return await s?.dispose(), a;
  let h = null;
  try {
    h = s === null ? null : await B0i(o, s.indexFile, n)
  } catch (u) {
    throw await s?.dispose(), u
  }
  if (h?.kind === "failed") return await s?.dispose(), {
    kind: "refused",
    sentence: `It is not uploaded the previous way either: that way runs only over a private copy of this checkout's index, and ${Il(Nn(h.detail),Jt)}. Nothing was uploaded; once that is put right, retry, or start from an ordinary clone.`,
    named: 0,
    added: 0,
    unexamined: 0,
    gitlinks: 0,
    indexCopied: !1,
    indexCopyCause: "index_tree"
  };
  return {
    kind: "proceed",
    pinnedIndex: s === null ? null : {
      path: s.indexFile,
      dispose: s.dispose
    }
  }
}
async function jd(e, n, r, o) {
  let s = await Nd(e, n, o);
  if (s === null) return {
    kind: "refused",
    sentence: "It is not uploaded the previous way either: its uncommitted changes could not be listed, so they cannot be checked for files that must stay on this machine \u2014 retry; if it keeps happening, git status in this checkout will show what git cannot list.",
    named: 0,
    added: 0,
    unexamined: 0,
    gitlinks: 0,
    indexCopied: !0
  };
  let {
    gitlinks: a
  } = s;
  if (a.length > 0) return {
    kind: "refused",
    sentence: `It is not uploaded the previous way either: this checkout's index registers ${a.length} nested ${P(a.length,"repository","repositories")} (a submodule or gitlink: ${De(a,3)}), which that way would enter, running git under the nested repository\u2019s own configuration \u2014 one a session of this checkout can write. If the entry is not meant, remove it from the index with \`git update-index --force-remove -- <path>\` (not \`git rm\`, which first runs git inside the nested repository); otherwise update git (2.31 or newer) if it is older, or start from an ordinary clone.`,
    named: 0,
    added: 0,
    unexamined: 0,
    gitlinks: a.length,
    indexCopied: !0
  };
  let {
    unwrittenModes: h
  } = s;
  if (h.length > 0) return {
    kind: "refused",
    sentence: `It is not uploaded the previous way either: this checkout's index lists ${h.length} ${P(h.length,"entry","entries")} under a file mode git itself never writes (${De(h,3)}), so something other than git wrote the index and what the previous way would carry cannot be checked. Remove each such entry with \`git update-index --force-remove -- <path>\` (the file itself stays on disk), then \`git add -- <path>\` if it should be tracked; or start from an ordinary clone.`,
    named: 0,
    added: 0,
    unexamined: h.length,
    gitlinks: 0,
    indexCopied: !0
  };
  let u = s.gitRoot === "" ? void 0 : await r?.(s.gitRoot),
    p = await Bo(s.gitRoot, s.paths, s.added, u, s.deleted);
  return p.length === 0 ? {
    kind: "proceed"
  } : {
    kind: "refused",
    sentence: `It is not uploaded the previous way either (that way keeps nothing back): ${Cr(p,r!==void 0).replace(/^Not uploading this working tree: /,"")}`,
    named: p.length,
    added: U(p, ({
      why: w
    }) => w === "added"),
    unexamined: U(p, ({
      why: w
    }) => w === "unexamined"),
    gitlinks: 0,
    indexCopied: !0
  }
}
async function Ao(e) {
  let n = await Ot(ut(e, ".git")).catch(() => null);
  return n?.isSymbolicLink() === !0 ? "link" : n?.isFile() === !0 && n.nlink !== 1 ? "second_name" : "other"
}
async function Hd(e) {
  let n = ut(e, ".git"),
    r = await Ot(n).catch(() => null);
  if (r?.isSymbolicLink()) return "symlink";
  if (!r?.isFile()) return "other";
  let o = await $7t(n).catch(() => {
      return
    }),
    s = uDn(o)?.replaceAll("\\", "/");
  if (s === void 0) return "other";
  return /\/worktrees\/[^/]+\/?$/.test(s) ? "linked_worktree" : /\/modules\//.test(s) ? "submodule" : "separate_git_dir"
}

function s_a(e) {
  return `This checkout ${{git_file:"is a submodule, a checkout with a separate git directory, or one whose .git pointer could not be followed",linked_worktree:"is a linked working tree whose pointer files could not be verified (try git worktree repair), which uses per-worktree configuration, or whose repository sits somewhere this upload does not trust",work_tree:"has core.worktree set",included_config:"reads git configuration from a file inside the working tree",many_includes:`is used with a git configuration that includes more files, or a longer chain of nested includes, than the new upload path follows (over ${Cbr} include files or 8 levels deep)`,old_git:"is used with a git older than 2.31",borrowed_objects:"borrows objects from another repository",reftable:"keeps its refs in the reftable format"}[e]}; the new upload path does not support that yet, so the working tree is being uploaded the previous way for this session.`
}

function Ud() {
  let e = U$(void 0),
    n = Pe(Ds(e, "CLAUDE_CODE_LEGACY_BUNDLE")),
    r = i.CLAUDE_CODE_LEGACY_BUNDLE === !0,
    o = r && !n;
  if (o) {
    let s = JXe.some((a) => Ds(process.env, a) !== Ds(e, a));
    t(s ? "[gitBundle] CLAUDE_CODE_LEGACY_BUNDLE is set, but a settings tier also moves where settings are read from (HOME, CLAUDE_CONFIG_DIR, ...): no settings tier counts as the owner's word then, so it is ignored and the default upload method runs" : "[gitBundle] CLAUDE_CODE_LEGACY_BUNDLE is set by a settings file, not by the environment claude was started with or the owner's own settings: ignored, the default upload method runs", {
      level: "warn"
    })
  }
  return {
    requested: n && r,
    ignored: o
  }
}
var Tr = {
  missing: [],
  foreign: []
};
async function lo(e, n, r, o, s) {
  let a = await Eb(e, [...Mce, "bundle", "list-heads", n], {
    hardened: !1,
    signal: s,
    env: zft
  });
  if (a.code !== 0) return {
    missing: [r],
    foreign: [],
    unlisted: Wn(a.stderr.trim()) || `exit ${a.code}`
  };
  return a.stdout.split(`
`).some((u) => u === `${o} ${r}`) ? Tr : {
    missing: [r],
    foreign: []
  }
}
async function uo(e, n, r, o) {
  let s = r.filter((y) => !y.startsWith("-")),
    a = await Eb(e, ["bundle", "list-heads", n], {
      hardened: !0,
      layout: o.layout,
      signal: o.signal,
      probes: o.probes
    });
  if (a.code !== 0) return {
    missing: s,
    foreign: [],
    unlisted: Wn(a.stderr.trim()) || `exit ${a.code}`
  };
  let h = new Map(a.stdout.split(`
`).flatMap((y) => {
      let [E, B] = y.split(" ");
      return E === void 0 || B === void 0 ? [] : [
        [B, E]
      ]
    })),
    u = s.filter((y) => {
      let E = h.get(y),
        B = o.expected[y];
      return E === void 0 || B !== void 0 && E !== B
    }),
    p = o.shown === void 0 ? [] : [...h].flatMap(([y, E]) => Object.hasOwn(o.expected, y) || o.shown?.get(y) === E ? [] : [y]);
  if (o.shown === void 0 || u.length > 0 || p.length > 0) return {
    missing: u,
    foreign: p
  };
  let w = await Eb(e, ["cat-file", "--batch-check"], {
      hardened: !0,
      layout: o.layout,
      signal: o.signal,
      probes: o.probes,
      input: [...h.values()].map((y) => `${y}
`).join("")
    }),
    _ = w.code === 0 ? [...h].flatMap(([y, E]) => w.stdout.includes(`${E} missing`) ? [y] : []) : [...h.keys()];
  return {
    missing: u,
    foreign: p,
    notHeld: _
  }
}
async function Wd(e, n, r, o, s) {
  if (n === void 0 || !await uze(n, r)) return null;
  let a = await Eb(e, ["rev-parse", "-q", "--verify", "HEAD^{tree}"], {
      hardened: !0,
      layout: n,
      signal: o,
      probes: s
    }),
    h = a.stdout.trim();
  if (!await uze(n, r)) return null;
  return a.code === 0 && /^[0-9a-f]{40}(?:[0-9a-f]{24})?$/.test(h) ? h : void 0
}
async function zd(e, n, r, o, s) {
  if (!await uze(n, r)) return null;
  let [a, h] = await Promise.all([Eb(e, ["for-each-ref", "--format=%(objectname) %(refname)", "refs/heads/", "refs/tags/"], {
    hardened: !0,
    layout: n,
    signal: o,
    probes: s
  }), Eb(e, ["rev-parse", "-q", "--verify", "HEAD"], {
    hardened: !0,
    layout: n,
    signal: o,
    probes: s
  })]);
  if (a.code !== 0 || h.code !== 0 && h.exitCode !== 1 || !await uze(n, r)) return null;
  let u = h.code === 0 ? [
    ["HEAD", h.stdout.trim()]
  ] : [];
  return new Map([...a.stdout.split(`
`).flatMap((p) => {
    let [w, _] = p.split(" ");
    return w === void 0 || _ === void 0 ? [] : [
      [_, w]
    ]
  }), ...u])
}

function co(e, n) {
  if (e.unlisted !== void 0) return {
    ok: !1,
    error: `git bundle list-heads failed: ${Et(e.unlisted,n)}`,
    failReason: "git_error"
  };
  if (e.missing.length > 0) return Yd(e.missing);
  if (e.foreign.length > 0) return fo(e.foreign);
  return (e.notHeld?.length ?? 0) > 0 ? fo(e.notHeld ?? [], "not_held") : null
}

function fo(e, n = "changed") {
  return {
    ok: !1,
    error: n === "changed" ? `git bundle create packed ${De(e)}, which this checkout did not show when the upload read its refs: its refs changed, or were redirected elsewhere, while the bundle was made. Make sure nothing else is writing to this checkout, inspect its git directory (a commondir file there was not written by git), then retry.` : `git bundle create packed ${De(e)} at commits this checkout's own object store does not hold: another object store stood in while the bundle was made. Make sure nothing else is writing to this checkout's git directory (objects/info in particular), then retry.`,
    failReason: "git_dir_tampered",
    refsChanged: !0
  }
}

function Yd(e) {
  return {
    ok: !1,
    error: `git bundle create left out or altered ${De(e)}: another ref in this repository (a branch or tag spelled like it) makes the name ambiguous, or the temporary ref was rewritten while the bundle was made, so the upload would not carry your changes as captured. Make sure nothing else is writing to this checkout, rename or delete such a branch or tag (see \`git for-each-ref\`), then retry.`,
    failReason: "git_error"
  }
}

function De(e, n = fd) {
  let r = e.slice(0, n).map((s) => Il(Nn(s), yo)).join(", "),
    o = e.length - n;
  return o > 0 ? `${r} and ${o} more` : r
}

function Kd(e, n) {
  switch (e) {
    case "objects":
      return {
        outcome: "bundle_objects_missing", error: `Not uploading this working tree: git could not read a complete history back out of the bundle it just made (${n}), so an object in this repository's .git/objects is most likely damaged. Run \`git fsck\` in this checkout, repair or re-clone the repository, then retry.`, failReason: "git_dir_tampered"
      };
    case "unlisted":
      return {
        outcome: "bundle_objects_unlisted", error: `Not uploading this working tree: the bundle git just made carries objects that none of the branches and tags it lists lead to (${n}). In \`git for-each-ref\`, look for a name that holds refs/ twice (such as refs/tags/refs/heads/x), rename or delete that branch or tag (on the remote too, or the next fetch brings it back), then retry.`, failReason: "refused"
      };
    case "trailing":
      return {
        outcome: "bundle_trailing_bytes", error: `Not uploading this working tree: the bundle git just made does not end with its pack (${n}). git does not write that on its own, so a pack file in this repository's .git/objects is most likely damaged or was not written by git. Clone the repository anew, then retry.`, failReason: "git_dir_tampered"
      };
    case "header":
    case "scratch":
    case "index":
    case "walk":
    case "unfinished":
      return {
        outcome: "git_error", error: `Could not check the bundle before upload, so nothing was uploaded (${n}). Retry; if it happens again, run \`git fsck\` in this checkout.`, failReason: "git_error"
      }
  }
}

function Cn(e, n, r) {
  let o = r ? void 0 : mms(C0e(n)),
    s = Et(n.stderr, r),
    a = n.stderr === L0i;
  return {
    ok: !1,
    error: o !== void 0 ? No[o] : `${e} failed (${n.code})${s&&`: ${s}`}${a?"; `git fsck` in this checkout may show why":""}`,
    failReason: "git_error",
    ...o !== void 0 && {
      gitRefused: o
    }
  }
}

function Et(e, n) {
  return n ? Il(Nn(e), 200) : e.slice(0, 200)
}
var Rr = {
  git_file: "whose .git file does not hold the single pointer git writes there.",
  admin_dir: "whose .git file does not name the administrative directory git uses for it (or that directory is not where git keeps one, under the repository\u2019s .git/worktrees).",
  foreign_mount: "whose administrative directory under the repository\u2019s .git/worktrees has something mounted over it (another device or, on Linux, another mount) \u2014 unmount it first.",
  back_link: "whose administrative directory does not point back at it \u2014 usually a working tree that was moved; git worktree repair (run here) rewrites the pointer.",
  common_dir: "whose administrative directory names a different repository than git resolves for it.",
  keyed_elsewhere: "whose .git file leads git to a different repository from the one under which Claude Code keeps this folder\u2019s trust and settings. The usual cause is a symbolic link on the path in that file, or on the path to this folder.",
  placement: "whose repository sits inside this working tree (or the tree inside it), inside another git directory or under a temporary directory, or is not named the way git names one (.git, or name.git for a bare repository) \u2014 places and shapes this upload does not take a repository from.",
  worktree_config: "that uses per-worktree configuration (extensions.worktreeConfig, or a config.worktree file), which this upload does not support yet."
};

function Xd(e) {
  let n = e.startsWith("included"),
    r = n ? "a file that your git configuration includes" : e.startsWith("repository") ? "this repository\u2019s own git configuration file" : "your own or the system-wide git configuration file",
    o = n ? " `git config --show-origin --get-regexp include` lists each include line and its file." : e.startsWith("repository") ? "" : " `git config --list --show-origin --name-only` shows the files in use.",
    s = "then retry; if the line is not yours to change, this checkout cannot be uploaded.",
    [a, h] = e.endsWith("_inside") ? ["lies inside this checkout or its git directory (even if it does not exist yet), where a cloud session could change it", n ? "Remove that line or point it outside this checkout, then retry; if the line is not yours to change, this checkout cannot be uploaded." : "Keep that file outside this checkout, or start from a checkout that does not hold it."] : e.endsWith("_not_text") ? ["has a name that is not valid text, so it cannot be checked", `Give the file and every folder in its path a name that is valid text, ${n?"update the include line to match, ":""}${e.startsWith("repository")?"":"keep the file outside this checkout, "}then retry.`] : ["can be reached from this checkout (through a link, a hard link or another spelling of its path) or is on a network path, so a cloud session could change it or it cannot be checked", n ? "Remove that line, or point it by its plain path at an ordinary local file outside this checkout, then retry; if the line is not yours to change, this checkout cannot be uploaded." : "Put an ordinary local file (no link, no hard link) in its place, then retry."];
  return `Not uploading this working tree: ${r} ${a}.${o} ${h}`
}

function ho(e) {
  switch (e.misplaced) {
    case "git_file":
      return `Not uploading this working tree: ${e.pointerFollowed?"this checkout\u2019s .git is a pointer file (a submodule, a checkout with a separate git directory), which this upload does not support yet. Before running any git command here, look at the directory that it leads to (the .git file names it), unless you know it. Start":e.dotGitEntry==="link"?"this checkout\u2019s .git is a symbolic link, which this upload does not follow. Start":e.dotGitEntry==="second_name"?"this checkout\u2019s .git pointer file has a second name (a hard link), so what it names cannot be trusted. Remove the other name and retry, or start":"this checkout\u2019s .git is something this upload could not follow (it could not be read, is not the one gitdir line git writes, or names another host). Start"} from an ordinary clone of the repository \u2014 its main checkout \u2014 instead.`;
    case "linked_worktree":
      return e.detail === "worktree_config" ? `Not uploading this working tree: this checkout is a linked working tree ${Rr.worktree_config} Start from the repository\u2019s main checkout instead (a new worktree made from this one would be refused too: a current git copies this file into it).` : e.detail === "placement" ? `Not uploading this working tree: this checkout is a linked working tree ${Rr.placement} Start from the repository\u2019s main checkout, or from a working tree made with git worktree add in an ordinary location, instead; where neither serves, from an ordinary clone of the repository.` : `Not uploading this working tree: this checkout is a linked working tree ${Rr[e.detail??"admin_dir"]} Start from the repository\u2019s main checkout, or from a working tree made with git worktree add in an ordinary location, instead.`;
    case "work_tree":
      return e.unexamined ? "Not uploading this working tree: this checkout\u2019s own folder could not be examined just now, so it could not be checked that git\u2019s working tree is this folder. Retry; if it goes on, check that you can still open this folder." : "Not uploading this working tree: git resolves this checkout\u2019s working tree to another directory (core.worktree is set), which this upload does not support yet. Start from an ordinary clone of the repository instead, or unset core.worktree if nothing here relies on it.";
    case "included_config":
      return Xd(e.writable ?? "included_indirect");
    case "many_includes":
      return `Not uploading this working tree: the git configuration in force for this checkout (~/.gitconfig, .git/config and the files they include) pulls in more include files, or a longer chain of nested includes, than this upload follows (over ${Cbr} files or 8 levels deep), so the programs that configuration names cannot all be switched off while the upload is prepared. Trim the include chain (directives naming files that do not exist do not count), then retry.`;
    case "old_git":
      return "Not uploading this working tree: the installed git is older than 2.31, which cannot be kept from running programs this checkout\u2019s configuration names while the upload is prepared. Update git (2.31 or newer), then retry.";
    case "borrowed_objects":
      return `Not uploading this working tree: this checkout borrows objects from another repository (an objects/info/alternates or http-alternates file \u2014 a clone made with --shared or --reference, or a file something else put there), so an upload could carry that repository\u2019s history too, which this upload does not support. Start from an ordinary clone of the repository instead.${e.sharedDirectoryElsewhere?" (This checkout is a linked working tree: that file is in its repository\u2019s git directory, which this checkout\u2019s .git file points into.)":""}`;
    case "reftable":
      return "Not uploading this working tree: this repository keeps its refs in the reftable format, whose tables the upload cannot yet vouch for one by one. Start from a clone made with the default (files) ref format instead.";
    case "ref_storage":
      return `Not uploading this working tree: ${N0i(e.keptBy??"setting")}. Nothing was uploaded.`;
    case "temp_root":
      return "Not uploading this working tree: this checkout stands \u2014 or a link on the way to it leads \u2014 under a directory cloud sessions on this machine use as scratch space, so nothing in it can be told apart from what such a session put there. Start from the checkout at its ordinary location instead.";
    case "git_dir":
      return "Not uploading this working tree: git does not use this checkout\u2019s own .git directory, which happens only when something in .git (usually HEAD) was emptied or overwritten by something other than git. Look at .git and put back what was changed before retrying, or start from an ordinary clone of the repository instead.";
    case "common_dir":
      return `Not uploading this working tree: the commondir file in this checkout\u2019s .git directory was written by something other than git, and it sends git to a directory where git itself would not keep this checkout\u2019s shared files. ${Rt}`
  }
}

function go(e) {
  return {
    misplaced: e.misplaced,
    unexamined: e.unexamined,
    keptBy: e.keptBy,
    writable: e.writable,
    detail: e.detail,
    pointerFollowed: e.gitDir !== "",
    sharedDirectoryElsewhere: e.commonDir !== e.gitDir
  }
}

function i_a(e) {
  return `${e.length} tracked ${P(e.length,"file")} ${P(e.length,"was","were")} missing when read and ${P(e.length,"is","are")} uploaded as deleted (${De(e,3)}) \u2014 if a build was rewriting ${P(e.length,"it","them")} just then, start the session again once it settles.`
}

function a_a(e, {
  readRules: n = !1,
  ofThisUploadOnly: r = !1
} = {}) {
  return `${r?"Left out of this upload":"Left on this machine"}: ${e.length} uncommitted ${P(e.length,"file")} named like credentials or keys, ${n?"covered by a Read rule or a sandbox read-deny setting of yours, linked from your Claude Code configuration, ":""}hard-linked to another file, kept by a git filter such as LFS, or still being written by another program while ${P(e.length,"it was","they were")} read (${De(e)})${r?"":`, ${P(e.length,"was","were")} not uploaded`} \u2014 the cloud session starts with the version git already holds for ${P(e.length,"it","them")} (committed or staged), or without ${P(e.length,"it","them")}.`
}

function Cr(e, n = !1) {
  let r = (y) => e.filter((E) => E.why === y).map(({
      path: E
    }) => E),
    o = r("forged");
  if (o.length > 0) return `Not uploading this working tree: git reports changed paths spelled in a way git itself never writes (${De(o)}), so this checkout's index or HEAD was edited by something other than git. Inspect it (git status, git log) before retrying.`;
  let s = r("same-bytes");
  if (s.length > 0) return `Not uploading this working tree: while it was read, an index entry appeared (${De(s)}) holding, byte for byte, the content of a file that stays on this machine (named like credentials or keys${n?", covered by a Read rule or a sandbox read-deny setting of yours, linked from your Claude Code configuration":""}, or kept by a git filter) \u2014 at a name no step of this upload put it under, so something else wrote into the index copy this upload works in while it ran. Retry; if it recurs, check what else is running in this checkout.`;
  let a = r("alias");
  if (a.length > 0) return `Not uploading this working tree: its uncommitted changes include paths shaped like Windows 8.3 short names (${De(a)}), which can open a different file than they name. Rename or remove them \u2014 committing them as they stand would put whatever they open into git \u2014 then retry.`;
  let h = r("hardlinked");
  if (h.length > 0) return `Not uploading this working tree: ${h.length} changed ${P(h.length,"file has","files have")} a second hard link (${De(h)}) \u2014 another name for what may be a file outside this tree, linked in without reading it \u2014 so ${P(h.length,"it is","they are")} never read for an upload. Remove the extra link (or commit the file if it is yours), then retry.`;
  let u = r("unexamined");
  if (u.length > 0) return `Not uploading this working tree: ${u.length} changed ${P(u.length,"file")} could not be examined where ${P(u.length,"it stands","they stand")} (${De(u)}) \u2014 a directory above could not be inspected, the name is not valid UTF-8, or the entry could not be read \u2014 so whether another name leads outside this tree cannot be told. Check the path (ls -la along it), or commit the change if it is yours, then retry.`;
  let p = r("added"),
    w = r("changed"),
    _ = r("resurrected");
  return [`Not uploading this working tree: its uncommitted changes include ${e.length} ${P(e.length,"file")} named like credentials or keys${n?", covered by a Read rule or a sandbox read-deny setting of yours, or linked from your Claude Code configuration":""} (${De(e.map(({path:y})=>y))}).`, ...p.length > 0 ? [`${De(p)} ${P(p.length,"was","were")} added to git's index but never committed: unless you meant to start tracking ${P(p.length,"it","them")}, take ${P(p.length,"it","them")} back out with ` + "`git rm --cached -- <file>` (the file itself stays on disk) \u2014 if you did not add " + `${P(p.length,"it","them")} yourself, something else did.`] : [], ...w.length > 0 ? [`${De(w)} ${P(w.length,"differs","differ")} from what is committed: commit the change if it belongs in git; if ` + "`git status` shows no change there, running it once settled the difference \u2014 retry; if git should not be tracking " + `${P(w.length,"that file","those files")} at all, this checkout's history was rewritten \u2014 see ` + "`git log -- <file>`."] : [], ..._.length > 0 ? [`${De(_)} ${P(_.length,"is","are")} committed but removed from the index while the file is, or may still be, on disk: commit the removal, or if you never committed ${P(_.length,"it","them")}, see \`git log -- <file>\` for who did.`] : [], "Then retry."].join(" ")
}

function Bn(e) {
  return e === null ? "?" : en(e)
}
async function l_a(e, n) {
  if (hs("hipaa")) return l("tengu_ccr_bundle_upload", {
    outcome: b("refused_hipaa")
  }), m("teleport_git_bundle_upload", "refused_hipaa"), {
    success: !1,
    error: "Cloud sessions started from an uploaded copy of this working tree are disabled by your organization's policy. Start the session from a GitHub repository source instead.",
    failReason: "refused"
  };
  let r = n?.cwd ?? pe(),
    o = n?.currentBranchOnly === !0,
    s = fr(r);
  if (!s) return l("tengu_ccr_bundle_upload", {
    outcome: b("not_a_repo")
  }), m("teleport_git_bundle_upload", "not_a_repo"), {
    success: !1,
    error: "Not in a git repository",
    failReason: "not_a_repo"
  };
  let a = n?.hardenForDeviceSessions === !0,
    h = n?.hardenForDeviceSessions === void 0 && x() !== "windows" ? Ud() : {
      requested: !1,
      ignored: !1
    },
    u = n?.hardenForDeviceSessions ?? !Kdi(),
    p = !a && (n?.previousCaptureServes ?? Kdi());
  if (h.requested) t("[gitBundle] CLAUDE_CODE_LEGACY_BUNDLE is not honoured on macOS and Linux: the default upload method runs", {
    level: "warn"
  });
  let w = u ? {
      hardened: !0,
      ...fyr(),
      ...h.ignored && {
        legacy_switch_ignored: !0
      },
      ...h.requested && {
        legacy_switch_retired: !0
      }
    } : {
      legacy_bundle: !0
    },
    _ = () => (l("tengu_ccr_bundle_upload", {
      outcome: b("admin_dir_failed"),
      admin_dir_reason: b("path_misread"),
      ...w
    }), m("teleport_git_bundle_upload", "admin_dir_failed"), {
      success: !1,
      error: "Not uploading this working tree: a folder with a backslash (\\) in its name is in its path (as written or with links followed) or in the path of the folder Claude Code was started in. Claude Code would read the backslash as a folder separator and check a different folder. Rename that folder, then start Claude Code again.",
      failReason: "refused"
    });
  if (Oc(s) || W$r()) return _();
  let y = u ? await dd(s).catch(() => null) : s;
  if (y === null) return l("tengu_ccr_bundle_upload", {
    outcome: b("admin_dir_failed"),
    admin_dir_reason: b("unresolved_root"),
    ...w
  }), m("teleport_git_bundle_upload", "admin_dir_failed"), {
    success: !1,
    error: "Not uploading this working tree: its own path could not be resolved just now (a link on the way to it changed or could not be read), so nothing was uploaded this way; retry from the directory itself.",
    failReason: "refused"
  };
  if (Oc(y)) return _();
  await using E = wms();
  let B = u ? await Jd(E, y) : null;
  if (B !== null && H7t(B) === "none") l("tengu_ccr_bundle_root_names_no_object", {
    device_zero: B.startsWith("0:")
  });
  let I = u ? EMn(y) : [],
    R = COi(s, n?.rootAnchors);
  if (R !== null) return l("tengu_ccr_bundle_upload", {
    outcome: b("refused_home_root"),
    root_kind: f(R),
    ...w
  }), m("teleport_git_bundle_upload", "refused_home_root"), {
    success: !1,
    error: Od[R],
    failReason: "git_dir_tampered"
  };
  let A = ii(),
    T = [A.stash, A.root],
    S = n?.signal,
    z = u ? AbortSignal.timeout(hd) : void 0,
    Y = Date.now(),
    D = z === void 0 ? S : S === void 0 ? z : AbortSignal.any([S, z]),
    H = new RDt("operation"),
    O = (G) => {
      let Q = {
        phase: f(G),
        elapsed_ms: Date.now() - Y
      };
      if (S?.aborted === !0 || z?.aborted !== !0) return l("tengu_ccr_bundle_upload", {
        ...w,
        outcome: b("aborted"),
        current_branch_only: o,
        ...Q
      }), {
        success: !1,
        error: "Bundle cancelled"
      };
      return l("tengu_ccr_bundle_upload", {
        ...w,
        outcome: b("build_budget_expired"),
        current_branch_only: o,
        ...Q
      }), m("teleport_git_bundle_upload", "build_budget_expired"), {
        success: !1,
        error: "Preparing the upload took too long and was stopped (a file in this checkout that git reads, such as a .gitattributes, may be a pipe or otherwise blocking). Check the checkout, then retry.",
        failReason: "git_error"
      }
    };
  await using me = wms();
  let X = u ? await Qdo(s, D, {
    linkedTrees: !0,
    bound: a,
    startsInProject: n?.startsInProject,
    perWorktreeConfig: "serve",
    probes: H,
    holder: me
  }) : void 0;
  if (u && D?.aborted) return O("layout_read");
  let ve = X?.kind === "read" ? z0i(X.layout, y, B) : "the_same";
  if (ve !== "the_same") return qt({
    on: "root_at_layout_read",
    folderRead: ve
  });
  let le = X?.kind === "read" && X.layout.checkout === "linked" ? CDt(X.layout.commonDir) : X?.kind === "tampered" && $n(X.gitDir) ? CDt(Ze(Ze(X.gitDir))) : null,
    Te = le === null ? [] : EMn(le),
    ie = L([...I, ...Te]),
    K = I[0] !== void 0 ? Sd(I[0]) : Te[0] !== void 0 ? vd(Te[0]) : null,
    _e = u && K === null ? eco(y) : null,
    Ce = _e !== null ? `${Or(_e,y)} and this checkout is inside it, so a Claude Code session started there can write this checkout\u2019s git files` : u && K === null && le !== null ? xd(le) : null,
    he = X?.kind === "read" ? X.layout.worktreeConfig : void 0,
    Ne = a || K !== null || Ce !== null || he !== void 0;
  if (X?.kind === "tampered") {
    t(`[gitBundle] Refusing to bundle: misplaced ${X.misplaced}`);
    let G = Bd(X.misplaced),
      Q = G === null ? "git_dir_tampered" : `unsupported_${G}`,
      te = X.misplaced === "git_file" ? await Hd(s) : null,
      ue = G === null || a || !p && So(X) ? {
        handedBack: !1,
        refusedAs: X,
        notThePreviousWay: ""
      } : p ? await kd(y, X, K, Ce) : {
        handedBack: !0
      },
      q = ue.handedBack,
      ke = q && p ? ao({
        workTree: s
      }) : null;
    if (ke !== null) return l("tengu_ccr_bundle_upload", {
      ...w,
      outcome: b("admin_dir_failed"),
      steering: f(ke.kind),
      enclosed: ie.length > 0
    }), m("teleport_git_bundle_upload", "admin_dir_failed"), {
      success: !1,
      error: Er(ke),
      failReason: "refused"
    };
    let oe = ue.handedBack ? X : ue.refusedAs;
    if (l("tengu_ccr_bundle_upload", {
        ...w,
        outcome: f(Q),
        tampered_on: f(oe.misplaced),
        ...oe.unexamined && {
          unexamined: !0
        },
        ...oe.keptBy !== void 0 && {
          refs_kept_by: f(oe.keptBy)
        },
        ...oe.writable !== void 0 && {
          writable_config: f(oe.writable)
        },
        ...oe.includedBy !== void 0 && {
          included_by: f(oe.includedBy)
        },
        ...oe.detail !== void 0 && {
          worktree_check: f(oe.detail)
        },
        ...!ue.handedBack && ue.screened !== void 0 && {
          unlisted_config: f(ue.screened)
        },
        ...!ue.handedBack && ue.belowHomeCheckout === !0 && {
          below_home_checkout: !0
        },
        ...G !== null && {
          fallback_eligible: q,
          ...!a && {
            enclosed: ie.length > 0
          }
        },
        ...te !== null && {
          git_file_kind: f(te)
        }
      }), ue.handedBack && G !== null) return {
      ...Id(G, ho(go(X))),
      ...te !== null && {
        gitFileKind: te
      }
    };
    return m("teleport_git_bundle_upload", oe.misplaced === "included_config" && oe.writable !== void 0 ? `${Q}_${oe.writable}${oe.includedBy===void 0?"":`_by_${oe.includedBy}`}` : oe.misplaced === "linked_worktree" && oe.detail !== void 0 ? `${Q}_${oe.detail}` : Q), {
      success: !1,
      error: ho({
        ...go(oe),
        ...Ir(oe) && {
          dotGitEntry: await Ao(y)
        }
      }) + (ue.handedBack || !p || G === null || oe.unexamined ? "" : Xt(ue.notThePreviousWay)),
      failReason: "git_dir_tampered"
    }
  }
  if (X?.kind === "failed") {
    if (t(`[gitBundle] could not read the checkout's git layout: ${X.detail.slice(0,200)}`), X.why === "changed_under_hold") return qt({
      on: "changed_under_hold",
      unopened: X.unopened
    });
    if (X.why === "settings_unreadable") return l("tengu_ccr_bundle_upload", {
      ...w,
      outcome: b("admin_dir_failed"),
      steering: b("unreadable")
    }), m("teleport_git_bundle_upload", "admin_dir_failed"), {
      success: !1,
      error: Er({
        kind: "unreadable"
      }),
      failReason: "refused"
    };
    let G = X.why === "git_not_found",
      Q = X.why === "changed_under_read",
      te = G ? "git_not_on_path" : X.cause ?? "wip_unreadable";
    if (l("tengu_ccr_bundle_upload", {
        ...w,
        outcome: f(te),
        ...Q && {
          changed_under_read: !0
        },
        ...G && _ms() && {
          git_script_wrapper_only: !0
        }
      }), m("teleport_git_bundle_upload", te), X.cause !== void 0) return {
      success: !1,
      error: No[X.cause],
      failReason: "git_error"
    };
    return G ? a ? {
      success: !1,
      error: `Not uploading this working tree: git was not found on the PATH this process was started with once the directories a cloud session can write here were left out (those inside this checkout or a checkout enclosing it, such as a worktree\u2019s main checkout; those below your home directory when it is, or lies inside, a git checkout${Rd(y)}; a session temp directory; or one whose git links into them). Install git outside those, or put that directory on PATH, then retry.${bms()} ${yms}`,
      failReason: "refused"
    } : {
      success: !1,
      error: `git was not found on the PATH this process was started with, so nothing was uploaded. Install git, or put its directory on PATH, then retry.${bms()}`,
      failReason: "git_error"
    } : Q ? {
      success: !1,
      error: "This linked worktree\u2019s git files, in its repository\u2019s .git directory, changed while they were being read (removed, moved or replaced meanwhile), so nothing was uploaded. Retry; if it keeps happening, check what else is changing that .git directory.",
      failReason: "git_error"
    } : {
      success: !1,
      error: "Could not read where git keeps this checkout, so nothing was uploaded. Run `git rev-parse --git-dir --show-toplevel` here (it changes nothing) to see what git says, then retry.",
      failReason: "git_error"
    }
  }
  let W = X?.layout;
  if (W !== void 0 && !F0i(W) && gms(U$(void 0)) === null) return l("tengu_ccr_bundle_upload", {
    ...w,
    outcome: b("ambiguous_filter_driver")
  }), m("teleport_git_bundle_upload", "ambiguous_filter_driver"), {
    success: !1,
    error: 'Not uploading this working tree: your git configuration defines a filter driver named "unset" or "unspecified" (a file your configuration includes counts too, even one included only for other repositories), and git reports files that use such a driver as having no filter, so they would be uploaded as they are on disk, without the filter. Nothing was uploaded. Rename the driver in your git configuration, and in any attributes file that uses it, then retry.',
    failReason: "refused"
  };
  let ct = W?.checkout === "linked",
    ft = W ? await kMn(W, T) : null;
  if (ft !== null) return qt({
    on: "mid_build",
    fault: ft
  });
  let Qe = W !== void 0 && await qd(s, W, D, H);
  if (u && D?.aborted) return O("promisor_probe");
  if (Qe) t("[gitBundle] partial clone \u2014 bundling a snapshot of the working tree, without history");
  let Le = Ne && W !== void 0 ? ao(W) : null;
  if (Le !== null) return l("tengu_ccr_bundle_upload", {
    ...w,
    outcome: b("admin_dir_failed"),
    steering: f(Le.kind),
    steered_by: de(Le.kind === "unreadable" ? void 0 : jhs.find((G) => G === Le.name.toUpperCase()))
  }), m("teleport_git_bundle_upload", "admin_dir_failed"), {
    success: !1,
    error: Er(Le),
    failReason: "refused"
  };
  let ee = u || n?.refuseCredentialNamedInStash === !0,
    $e = ee ? LZ() : xf();
  await using ce = W !== void 0 ? await $0i(s, W, D, H, "own") : void 0;
  if (ce?.kind === "failed") {
    if (D?.aborted) return O("admin_dir");
    if (t(`[gitBundle] could not set up the private git dir: ${ce.detail.slice(0,200)}`), ce.cause === "attribute_source") {
      let {
        kind: ue
      } = ce.source;
      return l("tengu_ccr_bundle_upload", {
        ...w,
        outcome: b("attribute_source_unread"),
        attribute_source: f(ue),
        linked_worktree: ct
      }), m("teleport_git_bundle_upload", "attribute_source_unread"), {
        success: !1,
        error: Cd(ce.source),
        failReason: "refused"
      }
    }
    l("tengu_ccr_bundle_upload", {
      ...w,
      outcome: b("admin_dir_failed"),
      linked_worktree: ct,
      admin_dir_reason: f(ce.reason),
      admin_dir_cause: f(ce.cause),
      ...!a && {
        enclosed: ie.length > 0
      }
    }), m("teleport_git_bundle_upload", "admin_dir_failed");
    let G = Il(Nn(ce.detail), Jt),
      Q = !p ? "" : K !== null ? Xt(K) : he === "extension" ? Xt("its repository has per-worktree configuration switched on (extensions.worktreeConfig, which git sparse-checkout sets)") : he === "inert" ? Xt("a per-worktree configuration file (config.worktree) stands in its administrative entry") : ct ? Xt("a linked working tree is uploaded under that private directory only") : "";
    return {
      success: !1,
      error: ce.cause === "symbolic_head" ? `Not uploading this working tree: ${G}. Nothing was uploaded.${so.symbolic_head}` : ce.cause === "placement" ? `Not uploading this working tree this way: the private git directory the upload must trust would stand where a cloud session can write \u2014 ${G}. Nothing was uploaded; retry once that is changed.` : ce.cause === "home" ? `Could not prepare a private git directory for the upload (${G}), so nothing was uploaded. It is kept under your configuration home: check that ${Ee(ce.home)} is a writable directory of yours, and that ${Ee(ut(ce.home,"seed-admin"))}, if it exists, is a directory only you can write. Look at it first: ls -ld, with no / after the name (tab completion adds one, and with it a link to a folder shows as a plain folder). A directory there holds scratch only and can be removed (rm -r, again with no /). A link or a file there is removed by its name (rm, with no -r and no / after the name). Then retry.${Q}` : `Could not prepare a private git directory for the upload (${G}), so nothing was uploaded. The upload builds from private copies of this checkout\u2019s HEAD, index and refs, and copies them only when they are ordinary files (no links, one name each).${so[ce.cause]}${Q}`,
      failReason: "refused"
    }
  }
  let Fe = (G) => {
      let Q = W === void 0 ? void 0 : j0i(W, H.screenMemo);
      if (Q === void 0) return null;
      return l("tengu_ccr_bundle_upload", {
        ...w,
        outcome: b("config_level_not_read"),
        config_level: f(Q),
        config_level_asked: f(G)
      }), m("teleport_git_bundle_upload", "config_level_not_read"), {
        success: !1,
        error: `Not uploading this working tree: ${Q} names a git configuration file that a Claude Code session could change, so the git that this upload runs does not read it, and a file git would change before storing it (to encrypt it, for example) could be uploaded as it is on disk. Move its settings into ${Q==="GIT_CONFIG_GLOBAL"?"~/.gitconfig":"git\u2019s default system file"} and remove ${Q} from your shell or your Claude Code settings; or keep the file outside this checkout, any checkout around it or around your home directory, Claude Code\u2019s temp folder, and any folder that settings open to sessions. Then start Claude Code again.`,
        failReason: "refused"
      }
    },
    St = Fe("before_build");
  if (St !== null) return St;
  if (W !== void 0 && ce?.kind === "made") W = {
    ...W,
    adminDir: ce.path,
    borrowedObjects: ce.borrowedObjects
  };
  let et = W ? await kMn(W, T) : null;
  if (et !== null) return qt({
    on: "mid_build",
    fault: et
  });
  if (!u) {
    let G = await Eb(s, ["for-each-ref", "--format=%(refname)", "refs/seed/"], {
      hardened: u,
      probes: H
    });
    if (G.code !== 0) t(`[gitBundle] could not list refs/seed/ (${G.code}), so private refs a killed build left are not swept this run (the two fixed names still are): ${Et(G.stderr,u)}`);
    let Q = L([yt, bt, ...oi(G.code === 0 ? G.stdout.split(`
`).filter((te) => te !== "") : [])]);
    for (let te of Q) {
      let ue = await An(s, ["-d", te], {
        hardened: u,
        layout: void 0,
        probes: H
      });
      if (ue.code !== 0) t(`[gitBundle] could not sweep a stale seed ref: ${ue.stderr.slice(0,200)}`)
    }
  }
  let ht = await Eb(s, ["rev-parse", "--verify", "--quiet", "HEAD"], {
      hardened: u,
      layout: W,
      probes: H,
      ...u && {
        signal: D
      }
    }),
    Nt = ht.code === 0,
    Fn = ht.exitCode === 1,
    Zt = ht.exitCode === void 0 && ht.stderr === "",
    $t = await Eb(s, ["for-each-ref", "--count=1", "refs/heads/", "refs/tags/"], {
      hardened: u,
      layout: W,
      probes: H,
      ...u && {
        signal: D
      }
    });
  if (u && D?.aborted) return O("ref_probe");
  if ($t.code === 0 && $t.stdout.trim() === "" && !Nt) return l("tengu_ccr_bundle_upload", {
    ...w,
    outcome: b("empty_repo"),
    current_branch_only: o
  }), m("teleport_git_bundle_upload", "empty_repo"), {
    success: !1,
    error: "Repository has no local branch, tag, or checkout to seed from yet",
    advice: Vd,
    failReason: "empty_repo"
  };
  let Se = Fn && !o ? await (async () => {
    let G = {
        hardened: u,
        layout: W,
        probes: H,
        signal: D,
        ...!u && {
          env: {
            ...zft,
            GIT_NO_LAZY_FETCH: "1",
            ...F7t(n?.pinnedIndexFile)
          }
        }
      },
      Q = u ? [] : Mce,
      te = await Eb(s, [...Q, "hash-object", "-t", "tree", "--stdin"], {
        ...G,
        input: ""
      }),
      ue = await Eb(s, [...Q, "for-each-ref", `--count=${kr+1}`, "--sort=-creatordate", "--format=%(if)%(*objecttype)%(then)%(*objecttype)%(else)%(objecttype)%(end) %(objectname)", "refs/heads/", "refs/tags/"], G),
      q = async (re) => {
        let we = await Eb(s, [...Q, ...re], G);
        return we.exitCode === 1 ? !0 : we.exitCode === 0 || we.code === 0 ? !1 : null
      }, ke = (re) => q(["diff-index", "--cached", "--quiet", "--ita-invisible-in-index", re, "--"]), oe = ue.code === 0 ? ue.stdout.split(`
`).flatMap((re) => {
        let [we, N] = re.split(" ");
        return we === "commit" && N !== void 0 ? [N] : []
      }) : null, ot = te.code === 0 ? await ke(te.stdout.trim()) : null, Ve = async (re) => {
        if (re.length === 0) return !1;
        let we = await ke(`${re[0]}^{tree}`);
        return we === null ? null : we ? Ve(re.slice(1)) : !0
      };
    if (ot === !1) return "empty";
    if (ot === null || oe === null) return "unread";
    let Me = await Ve(oe.slice(0, kr));
    if (!Me) return Me === null ? "unread" : oe.length > kr ? "over_cap" : "off_branch";
    let He = await q(["--no-optional-locks", "diff-files", "--quiet", fS]);
    return He === null ? "worktree_unread" : He ? "unstaged" : "on_branch"
  })() : void 0;
  if (D?.aborted) return O("ref_probe");
  if (Se === "off_branch" || Se === "over_cap" || Se === "unstaged" || Se === "unread" || Se === "worktree_unread") return l("tengu_ccr_bundle_upload", {
    ...w,
    outcome: b("empty_repo"),
    current_branch_only: o,
    unborn_staged: Se !== "unstaged" && Se !== "worktree_unread",
    unborn_index: f(Se)
  }), m("teleport_git_bundle_upload", "empty_repo"), {
    success: !1,
    error: "The current branch has no commits yet",
    advice: Vt,
    failReason: "empty_repo"
  };
  let nt = 0,
    M = W ? await Hi(s, W, {
      signal: D,
      probes: H,
      onNamesWindowsCannotHold: (G) => {
        nt = G
      },
      onOpenRefusedAtTheLook: (G) => {
        l("tengu_ccr_bundle_look_open_refused", {
          files: G
        })
      },
      leaveOutUncommittedCredentialFiles: !0,
      alsoLeaveOut: await po(n?.withholdFor, s, W.workTree),
      neverRead: await po(n?.neverReadFor, s, W.workTree),
      maxStagedBytes: 2 * xr()
    }) : await Ui(s, Nt || Zt, D, n?.pinnedIndexFile),
    Be = nt > 0 ? {
      ...w,
      names_windows_cannot_hold: nt
    } : w;
  if (D?.aborted) return O("wip_stash");
  if (M.kind === "created" && W === void 0 && n?.refuseCredentialNamedInStash === !0) {
    let G = await Gd(s, M.commit, D, await n?.withholdFor?.(s));
    if (D?.aborted) return O("wip_stash");
    if (G === null || G.length > 0) return l("tengu_ccr_bundle_upload", {
      ...Be,
      outcome: b("uncommitted_credentials"),
      refused_paths: G?.length ?? 0,
      refused_unexamined: U(G ?? [], ({
        why: Q
      }) => Q === "unexamined"),
      refused_on: b("stash_trees")
    }), m("teleport_git_bundle_upload", "uncommitted_credentials"), {
      success: !1,
      error: G === null ? "Not uploading this working tree: the uncommitted changes just captured could not be listed back, so they cannot be checked for files that must stay on this machine \u2014 retry." : Cr(G, n?.withholdFor !== void 0),
      failReason: "uncommitted_credentials"
    }
  }
  if (M.kind === "refused") return t(`[gitBundle] Refusing to stash: ${M.refused.length} forged path(s), or credential-named path(s) that reached a built tree`), l("tengu_ccr_bundle_upload", {
    ...Be,
    outcome: b("uncommitted_credentials"),
    credential_paths: M.refused.length,
    refused_on: f(M.decidedOn)
  }), m("teleport_git_bundle_upload", "uncommitted_credentials"), {
    success: !1,
    error: Cr(M.refused, n?.withholdFor !== void 0),
    failReason: "uncommitted_credentials"
  };
  if (M.kind === "failed" && M.step === "path-encoding") {
    l("tengu_ccr_bundle_upload", {
      ...Be,
      outcome: b("wip_path_encoding")
    }), m("teleport_git_bundle_upload", "wip_path_encoding");
    let G = "A changed file in this checkout has a name \u2014 or a changed symbolic link a target \u2014 that is not valid UTF-8, which this upload cannot carry yet. Commit or rename it, then retry.";
    return {
      success: !1,
      error: G,
      advice: G,
      failReason: "stash_failed"
    }
  }
  if (M.kind === "failed" && (M.step === "verify" || M.step === "refused-name" || M.step === "rewritten")) return t(`[gitBundle] the checkout's git directory holds what git never wrote (${M.step}): ${M.detail.slice(0,200)}`), l("tengu_ccr_bundle_upload", {
    ...Be,
    outcome: b("wip_tampered"),
    wip_step: f(M.step)
  }), m("teleport_git_bundle_upload", "wip_tampered"), {
    success: !1,
    error: M.step === "verify" ? "Not uploading this working tree: its git directory holds an object that is not what its id names \u2014 something other than git wrote it there (`git fsck` usually names it). Nothing was uploaded; repair or re-clone the repository, then retry." : M.step === "rewritten" ? "Not uploading this working tree: the scratch copy of the index this upload works in was changed by another process while the upload ran. Nothing was uploaded; retry, and if it recurs check what else is running in this checkout." : `Not uploading this working tree: its git index names a path git itself refuses to write (a ".git"-like or "git~1" name) \u2014 something other than git put it there. ${Rt}`,
    failReason: "git_dir_tampered"
  };
  if (M.kind === "failed" && M.step === "malformed-tree") {
    t(`[gitBundle] a committed tree is stored in a form git no longer writes: ${M.detail.slice(0,200)}`), l("tengu_ccr_bundle_upload", {
      ...Be,
      outcome: b("wip_legacy_tree")
    }), m("teleport_git_bundle_upload", "wip_legacy_tree");
    let G = `the committed tree for ${Wi(M.detail)} is stored in a form git reads but does not itself write (some old tools wrote trees this way: entries out of order, or an unknown file mode). Commit a change to any file ${M.detail===""?"at the top of the checkout":"in that directory"} so git rewrites the tree, then retry.`;
    return {
      success: !1,
      error: `Not uploading this working tree: ${G}`,
      advice: G,
      failReason: "stash_failed"
    }
  }
  if (M.kind === "failed" && gd.includes(M.step)) return t(`[gitBundle] could not read the checkout's uncommitted state (git ${M.step}): ${M.detail.slice(0,200)}`), l("tengu_ccr_bundle_upload", {
    ...Be,
    outcome: b("wip_unreadable")
  }), m("teleport_git_bundle_upload", "wip_unreadable"), {
    success: !1,
    error: "Could not read the uncommitted changes of this checkout with git before uploading them (HEAD or the index is not in a state git reports on cleanly), so nothing was uploaded. Check `git status` here, then retry.",
    failReason: "git_error"
  };
  if (M.kind === "failed" && (M.step === "write-tree" || M.step === "read-tree") && Qe && M.said === "object_missing") return l("tengu_ccr_bundle_upload", {
    ...Be,
    outcome: b("stash_failed"),
    wip_step: f(M.step),
    current_branch_only: o,
    partial_clone: !0
  }), m("teleport_git_bundle_upload", "stash_failed"), {
    success: !1,
    error: bo,
    failReason: "git_error"
  };
  if (M.kind === "failed") {
    t(`[gitBundle] could not capture uncommitted changes (git ${M.step}): ${M.detail.slice(0,200)}`), l("tengu_ccr_bundle_upload", {
      ...Be,
      outcome: b("stash_failed"),
      wip_step: f(M.step),
      ...M.silent && {
        wip_silent: !0
      },
      ...M.said !== void 0 && {
        git_said: f(M.said)
      },
      current_branch_only: o
    }), m("teleport_git_bundle_upload", "stash_failed");
    let G = u ? Il(Nn(M.detail), Jt) : M.detail,
      Q = M.said === "unmerged" ? "This checkout has an unfinished merge or rebase (git status lists the conflicted files): resolve or abort it here first, or start the session from a branch with --ref." : M.said === "index_locked" ? "Another git process is running in this checkout; retry in a moment." : M.said === "object_missing" ? "Retry; if it stops here again, run `git fsck` in this checkout." : void 0,
      te = !u ? M.silent ? "Retry; if it stops here again, run `git --version` here to see whether git starts." : Q ?? Vt : M.step === "scratch-index" ? "A scratch copy of the index could not be written (next to .git/index, under ~/.claude/seed-admin, or under the temporary directory); check the disk and permissions there, then retry." : M.step === "stage" ? "A changed file could not be copied for upload as it stands (too large in total, still being written, or not a plain file); commit or stash such files, then retry. If nothing here is really uncommitted (a copied or restored checkout), run git status once so git refreshes its index, then retry." : M.step === "check-attr" ? M.detail === yr ? nt > 0 ? mo(nt) : "HEAD's .gitattributes rules could not be read reliably: retry first. If it stops here again, save each committed .gitattributes above a changed file as plain UTF-8 text with no byte-order mark (one saved as UTF-16 stops it, for example, and so does one that git lists as a submodule) and commit that; or commit all your changes; or check the repository's objects (git fsck)." : "The attributes in force could not be vouched for: in .git/info/attributes, move any filter rules, attribute macros or quoted patterns into a .gitattributes file and shorten any line of 2,048 bytes or more (or remove .git/info/attributes), or commit your changes first, then retry." : Q ?? (nt > 0 ? mo(nt) : Vt);
    return {
      success: !1,
      error: `Could not capture uncommitted changes (git ${M.step}: ${G}). ${te}`,
      advice: te,
      failReason: "stash_failed"
    }
  }
  let Ke = M.kind === "created",
    Xe = M.kind === "created" || M.kind === "none" ? M.leftOut.map(({
      path: G
    }) => G).sort() : [],
    qe = M.kind === "created" || M.kind === "none" ? U(M.leftOut, ({
      why: G
    }) => G === "unstable") : 0,
    xt = M.kind === "created" ? [...M.deletedUnstaged].sort() : [];
  if (Xe.length > 0) t(`[gitBundle] ${Xe.length} uncommitted path(s) kept out of the WIP commit (credential-named, hard-linked, filtered, or changed while read)`);
  if (Ke) {
    t(`[gitBundle] Captured WIP as stash ${M.commit}`);
    let G = W ? await kMn(W, T) : null;
    if (G !== null) return qt({
      on: "mid_build",
      fault: G
    });
    let Q = await An(s, [A.stash, M.commit], {
      hardened: u,
      layout: W,
      probes: H,
      ...u && {
        signal: D
      }
    });
    if (Q.code !== 0) return D?.aborted ? O("seed_refs") : Zd(Q.stderr, W?.adminDir, Be, {
      held_ref: b("stash"),
      git_exit_code: Q.code
    })
  }
  let rt = null,
    ze = ee ? "" : BHe("ccr-seed", ".bundle");
  try {
    if (ee) {
      try {
        rt = await Kr("claude-seed", $e)
      } catch (re) {
        return t(`[gitBundle] no private bundle directory: ${d(re)}`), l("tengu_ccr_bundle_upload", {
          ...Be,
          outcome: b("git_error"),
          current_branch_only: o
        }), m("teleport_git_bundle_upload", "git_error"), {
          success: !1,
          error: "Could not create a private directory for the bundle.",
          failReason: "git_error"
        }
      }
      ze = rt.path
    }
    let G = `${ze}.relabelled`,
      Q = xr(),
      te = await _d(s, D, W ? {
        layout: W
      } : null, H);
    if (te !== "not_shallow") t(`[gitBundle] shallow repository: ${bd[te]}`);
    let ue = Date.now(),
      q = te === "unborn_cut" ? {
        ok: !1,
        error: "The current branch has no commits yet, and the other branches of this shallow clone are cut short, so nothing here can be bundled; commit first, or deepen the clone (git fetch --unshallow)",
        failReason: "empty_repo"
      } : await Ro(s, ze, {
        maxBytes: Q,
        seedRefs: A,
        relabelledPath: G,
        hasStash: Ke,
        ...M.kind === "created" && {
          stashCommit: M.commit
        },
        leftOutCount: Xe.length,
        withheldByRules: n?.withholdFor !== void 0,
        currentBranchOnly: o,
        headResolves: Nt,
        hardened: u,
        layout: W,
        signal: D,
        probes: H,
        baseRef: n?.baseRef,
        forceScope: Qe || te === "cut" ? "squashed" : n?.forceScope,
        partialClone: Qe,
        skipAllRefs: te === "complete" || te === "cut",
        bindJudgedStash: n?.refuseCredentialNamedInStash === !0
      });
    if (!q.ok) {
      if (u && D?.aborted) return O("bundle_create");
      t(`[gitBundle] ${q.error}`);
      let re = S?.aborted === !0,
        we = q.heldSeedRef ? "seed_ref_held" : q.refsChanged ? "bundle_refs_changed" : q.gitRefused ?? q.failReason,
        N = we === "git_dir_tampered" && W !== void 0 ? await kMn(W, T) : null,
        V = N ?? we;
      if (l("tengu_ccr_bundle_upload", {
          ...Be,
          outcome: re ? b("aborted") : f(V),
          max_bytes: Q,
          size_bytes: q.sizeBytes,
          current_branch_only: o,
          ...q.failReason === "git_dir_tampered" && {
            tampered_on: b("mid_build")
          },
          ...q.heldSeedRef !== void 0 && {
            held_ref: b("root"),
            git_exit_code: q.heldSeedRef.exitCode
          },
          ...q.promisorFallback && {
            promisor_fallback: !0
          },
          ...q.failReason === "git_error" && _ms() && {
            git_script_wrapper_only: !0
          },
          shallow_repository: te !== "not_shallow",
          shallow_head: te === "cut",
          build_ms: Date.now() - ue
        }), !re) m("teleport_git_bundle_upload", V);
      return {
        success: !1,
        error: N === null ? q.error : Oo[N],
        ...q.failReason === "empty_repo" && te !== "unborn_cut" && {
          advice: Vt
        },
        failReason: q.failReason
      }
    }
    if (n?.signal?.aborted) return l("tengu_ccr_bundle_upload", {
      ...Be,
      outcome: b("aborted"),
      max_bytes: Q,
      current_branch_only: o,
      build_ms: Date.now() - ue
    }), {
      success: !1,
      error: "Bundle cancelled"
    };
    l("tengu_ccr_bundle_built", {
      scope: f(q.scope),
      size_bytes: q.size,
      has_wip: Ke,
      current_branch_only: o,
      build_ms: Date.now() - ue
    }), n?.onBundled?.({
      sizeBytes: q.size,
      scope: q.scope
    });
    let ke, oe;
    if (ee) {
      let re = await Xr(q.path, Q);
      if (re.kind !== "read") {
        let we = re.kind === "too_large" ? `bundle grew to ${re.sizeBytes} bytes` : re.detail;
        return t(`[gitBundle] bundle unreadable after create: ${we}`), l("tengu_ccr_bundle_upload", {
          ...Be,
          outcome: b("git_error"),
          max_bytes: Q,
          current_branch_only: o
        }), m("teleport_git_bundle_upload", "git_error"), {
          success: !1,
          error: `The bundle could not be read back for upload (${Il(Nn(we),200)}).`,
          failReason: "git_error"
        }
      }
      ke = re.content
    }
    let ot = Fe("before_upload");
    if (ot !== null) return ot;
    if (ke !== void 0) {
      let re = Date.now(),
        we = await Jr(ke, {
          scratchRoot: Ze(q.path)
        }, (N, V) => Eb(s, N, {
          hardened: u,
          layout: W,
          probes: H,
          signal: S,
          ...V
        }));
      if (oe = Date.now() - re, !we.ok) {
        if (S?.aborted) return O("bundle_check");
        t(`[gitBundle] the bundle failed its check (${we.kind}): ${we.detail}`);
        let N = Kd(we.kind, Il(Nn(we.detail), 200));
        return l("tengu_ccr_bundle_upload", {
          ...Be,
          outcome: f(N.outcome),
          check_failure: f(we.kind),
          check_ms: oe,
          size_bytes: q.size,
          scope: f(q.scope),
          current_branch_only: o,
          has_wip: Ke,
          ...q.promisorFallback && {
            promisor_fallback: !0
          },
          shallow_repository: te !== "not_shallow",
          shallow_head: te === "cut"
        }), m("teleport_git_bundle_upload", N.outcome), {
          success: !1,
          error: N.error,
          failReason: N.failReason
        }
      }
    }
    if (!u && n?.refuseCredentialNamedInStash === !0) {
      let re = await Td(s);
      if (re !== null) return l("tengu_ccr_bundle_upload", {
        ...Be,
        outcome: b("hand_back_store_planted"),
        tampered_on: f(re)
      }), m("teleport_git_bundle_upload", "hand_back_store_planted"), {
        success: !1,
        error: re === "unreadable" ? "Not uploading this working tree: its git directory could not be re-read after the capture ran, so what was packed cannot be vouched for. Inspect the checkout\u2019s .git, then retry." : re === "common_dir" ? "Not uploading this working tree: a commondir file appeared in its git directory while the upload was prepared \u2014 git writes one only in a linked working tree\u2019s entry \u2014 so what was packed cannot be vouched for. Inspect the git directory, then retry." : `Not uploading this working tree: ${re==="borrowed_objects"?"an objects/info/alternates file":"a reftable directory"} appeared in its git directory while the upload was prepared, so what was packed may hold another repository\u2019s history. ${Rt}`,
        failReason: "git_dir_tampered"
      }
    }
    let Ve = Date.now(),
      Me = await mFi(q.path, "_source_seed.bundle", e, {
        signal: S,
        ...ke !== void 0 && {
          content: ke
        },
        expiresInSeconds: cd
      }),
      He = Date.now() - Ve;
    if (!Me.success) {
      let re = n?.signal?.aborted === !0;
      if (l("tengu_ccr_bundle_upload", {
          ...Be,
          outcome: re ? b("aborted") : b("failed"),
          upload_error_type: f(Me.reason),
          size_bytes: q.size,
          scope: f(q.scope),
          current_branch_only: o,
          ...q.promisorFallback && {
            promisor_fallback: !0
          },
          shallow_repository: te !== "not_shallow",
          shallow_head: te === "cut",
          upload_ms: He
        }), !re) m("teleport_git_bundle_upload", "upload_failed");
      return {
        success: !1,
        error: Me.error,
        failReason: "upload_failed"
      }
    }
    if (t(`[gitBundle] Uploaded ${Me.size} bytes`), l("tengu_ccr_bundle_upload", {
        ...Be,
        outcome: b("success"),
        size_bytes: Me.size,
        scope: f(q.scope),
        has_wip: Ke,
        current_branch_only: o,
        ...Se !== void 0 && {
          unborn_index: f(Se)
        },
        ...u && {
          credential_paths_left_out: Xe.length,
          left_out_unstable: qe,
          deleted_unstaged: xt.length,
          partial_clone: Qe,
          withhold_rules: n?.withholdFor !== void 0,
          linked_worktree: W?.checkout === "linked",
          ...W?.workTreeRespelled && {
            work_tree_respelled: !0
          },
          ...W?.worktreeConfig === "inert" && {
            worktree_check: b("inert_config")
          },
          private_admin_dir: W?.adminDir !== void 0
        },
        ...q.promisorFallback && {
          promisor_fallback: !0
        },
        shallow_repository: te !== "not_shallow",
        shallow_head: te === "cut",
        upload_ms: He,
        ...oe !== void 0 && {
          check_ms: oe
        },
        ...!1
      }), q.scope === "head" && !o) c("teleport_git_bundle_upload", "fallback_head");
    else if (q.scope === "squashed") c("teleport_git_bundle_upload", "fallback_squashed");
    else g("teleport_git_bundle_upload");
    return ei(Qr(W)), {
      success: !0,
      fileId: Me.fileId,
      bundleSizeBytes: Me.size,
      scope: q.scope,
      hasWip: Ke,
      ...u && {
        leftOut: Xe,
        ...xt.length > 0 && {
          deletedHere: xt
        },
        ...q.scope === "squashed" ? {
          seedCommit: q.rootCommit
        } : M.kind === "created" && {
          seedCommit: M.commit
        }
      }
    }
  } finally {
    if (ze !== "") {
      try {
        await _r(ze)
      } catch {
        t(`[gitBundle] Could not delete ${ze} (non-fatal)`)
      }
      await _r(`${ze}.lock`).catch(() => {}), await _r(`${ze}.relabelled`).catch(() => {})
    }
    if (await rt?.dispose(), !W || await uze(W, T))
      for (let G of T) await An(s, ["-d", G], {
        hardened: u,
        layout: W,
        probes: H
      })
  }
}
async function qd(e, n, r, o) {
  let s = await Eb(e, ["config", "-z", "--list"], {
    hardened: !0,
    layout: n,
    signal: r,
    probes: o
  });
  if (s.code !== 0) return !0;
  return $r(s.stdout)
}

function $r(e) {
  return e.split("\x00").some((n) => {
    let r = n.indexOf(`
`),
      o = r === -1 ? n : n.slice(0, r),
      s = r === -1 ? "true" : n.slice(r + 1);
    return o === "extensions.partialclone" || /^remote\..*\.partialclonefilter$/s.test(o) || /^remote\..*\.promisor$/s.test(o) && !["false", "no", "off", "0", ""].includes(s.toLowerCase())
  })
}

function An(e, n, r) {
  return Eb(e, ["update-ref", "--no-deref", ...n], r)
}
var Vd = 'Commit the files that you want the cloud session to see (git add <file>, then git commit -m "initial"), then retry.',
  Vt = "Commit the files that you changed by name (git add <file>, then git commit), then retry.";

function mo(e) {
  return `${Vt} Do not run \`git add .\` or \`git commit -a\` here: this checkout tracks ${e} file ${e===1?"name":"names"} that Windows cannot hold, which git lists as deleted, and either command would record the ${e===1?"deletion":"deletions"}.`
}
async function Jd(e, n) {
  let r = await e.hold(n);
  return r === "not_held" ? B9(n) : r === "gone" ? null : r.id
}
async function po(e, n, r) {
  if (e === void 0) return;
  let o = await Promise.all((Wft(n) === r ? [n] : [n, r]).map((s) => e(s)));
  return (s) => o.some((a) => a(s))
}

function qt(e) {
  let n = e.on === "mid_build" ? e.fault : e.on === "root_at_layout_read" ? "work_tree_replaced" : "git_dir_tampered",
    r = Oo[n];
  return t(`[gitBundle] ${r}`), l("tengu_ccr_bundle_upload", {
    hardened: !0,
    outcome: f(n),
    tampered_on: f(e.on),
    ...e.on === "changed_under_hold" && {
      hold_unopened: e.unopened
    },
    ...e.on === "root_at_layout_read" && {
      folder_read: f(e.folderRead)
    }
  }), m("teleport_git_bundle_upload", n), {
    success: !1,
    error: r,
    failReason: "git_dir_tampered"
  }
}

function Zd(e, n, r, o) {
  let s = Io(e, n);
  return l("tengu_ccr_bundle_upload", {
    ...r,
    outcome: b("seed_ref_held"),
    ...o
  }), m("teleport_git_bundle_upload", "seed_ref_held"), {
    success: !1,
    ...s
  }
}

function Io(e, n) {
  t(`[gitBundle] could not update a temporary seed ref: ${e.slice(0,200)}`);
  let r = Il(Nn(Wn(e.trim())), Jt);
  return {
    error: n !== void 0 ? `Could not write a temporary ref in the private git directory that this upload builds in (${r}). Retry; if it keeps failing, check that ${Ee(Ze(n))} is writable and its disk has room.` : `Could not write the temporary ref this upload uses under .git/refs/seed (${r}). If another git process is running here, let it finish, then retry; if it keeps failing, check that this checkout\u2019s git directory is writable and its disk has room. If it fails even so, something that git did not put there may be in the way at .git/refs/seed. ${Rt}`,
    failReason: "git_error"
  }
}
var In = "Not uploading this working tree: its git directory changed while the upload was being prepared, holds something git itself never puts there, or could not be inspected \u2014 another git process (a background fetch or gc) may have written packs meanwhile, in which case let it finish and retry; otherwise look for a commondir or objects/info/alternates file, or a link, special or unreadable entry where its branches, tags, HEAD, the temporary refs/seed entries, their logs, or objects go (commondir, refs/heads, refs/tags, refs/seed, logs/refs/seed, logs/HEAD, objects/info, objects/pack) before retrying.";

function kt() {
  return {
    error: In,
    failReason: "git_dir_tampered"
  }
}
var Sr = "is not one plain file: it is a link, has a second name (a hard link, as tools that merge identical files make), is a folder or a special file, is missing where git needs it, or could not be examined. Git normally writes a plain file with one name there. Check with ls -l: a link shows an arrow (->), and the number after the permissions counts the names. If it is a plain file and that number is above 1, copy the file, move the copy over it (cp, then mv; git reads the copy the same), and retry. If it is anything else, start from a fresh clone of the repository instead (your uncommitted changes stay in this folder); where git itself writes links there (its core.preferSymlinkRefs setting), switch that setting off first.",
  Oo = {
    work_tree_replaced: "Not uploading this working tree: this folder was moved, removed or replaced while the upload was being prepared, or could not be examined. Try again; if it happens again, look for another program that moves or recreates this folder.",
    git_dir_replaced: In,
    git_dir_head_not_plain: `Not uploading this working tree: HEAD in its git directory (usually .git/HEAD) ${Sr}`,
    git_dir_packed_refs_not_plain: `Not uploading this working tree: packed-refs in its git directory (usually .git/packed-refs) ${Sr}`,
    git_dir_refs_not_plain: `Not uploading this working tree: an entry at or under refs/heads, refs/tags or refs/remotes in its git directory (in an ordinary checkout, find .git/refs -type l -o -type f -links +1 lists such entries) ${Sr}`,
    git_dir_logs_not_plain: In,
    git_dir_tampered: In,
    git_dir_objects_not_plain: `Not uploading this working tree: the objects folder in its git directory (usually .git/objects) holds a link, a special file, a file directly in it that has a second name (a hard link), a folder where git keeps only files (in objects/pack or in objects/00 to objects/ff), an entry whose name is not valid UTF-8, more than ${hms.toLocaleString("en-US")} folders directly in it, or something that could not be examined (ls -lR .git/objects shows which). ${Rt}`,
    git_dir_objects_changed: "Not uploading this working tree: something wrote to objects/pack or objects/info in its git directory (usually .git) while the upload was being prepared. Usually that is another git process, such as a fetch, gc or maintenance run that an editor started. Let it finish, then retry. If it keeps happening with no git running, find out what else writes there."
  },
  No = {
    git_refused_dubious_ownership: "Git will not work in this checkout because its folder, or the .git in it, belongs to another user (\u201Cdetected dubious ownership\u201D), so nothing was uploaded. That is common in containers and on mounted folders. Whether to go on is a question of whether you trust that user: git\u2019s safe.directory setting grants a folder. Run `git rev-parse --git-dir` here (it changes nothing): git\u2019s answer shows how. If that command works for you, your grant is given only through git\u2019s environment variables (GIT_CONFIG_PARAMETERS, or GIT_CONFIG_COUNT and its keys), which do not reach this upload\u2019s git: the grant has to stand in a file that git reads.",
    git_refused_not_a_repository: "Git does not recognise the .git here as a repository (\u201Cnot a git repository\u201D), so nothing was uploaded. Its HEAD, objects or refs may be missing, empty or unreadable, as after an interrupted copy. Start from a fresh clone, or from the folder that holds the real repository.",
    git_refused_bad_config: "Git cannot parse one of its configuration files (\u201Cbad config\u201D), so nothing was uploaded. Run `git rev-parse --git-dir` here (it changes nothing): its error names the file and the line, or the setting at fault. Fix that, then retry.",
    git_refused_config_unreadable: "Git cannot open one of its configuration files (\u201Cunable to access\u201D), so nothing was uploaded. Run `git rev-parse --git-dir` here (it changes nothing): its error names the file. Make that file readable for your user, or remove the include that points to it, then retry.",
    git_refused_unknown_extension: "This repository uses a git feature that the git on your PATH does not know (\u201Cunknown repository extension\u201D), so nothing was uploaded. Update git, or put a newer git first on the PATH that Claude Code is started with, then retry.",
    git_did_not_run: "The program that runs as git on your PATH started and ran no git, so nothing was uploaded. A version manager\u2019s shim (asdf\u2019s, for one) does that where no git version is set for the folder. Run `git --version` here to see what it says. Set a version, or put a real git first on the PATH that Claude Code is started with, then retry.",
    git_did_not_run_from_outside: "",
    git_dir_objects_folder_missing: "This checkout\u2019s git directory lacks objects/info or objects/pack, so nothing was uploaded. Git makes both in every repository and works without them; a copy that skips empty folders loses them. To make them again, in an ordinary checkout, at its top level, where .git is: first look with ls -ld .git .git/objects (a link shows an arrow, ->). If either is a link, stop, since the folders would be made wherever it points, and start from a fresh clone instead. Otherwise run mkdir .git/objects/info .git/objects/pack (an error that one of them exists does no harm), then retry.",
    launch_folder_unresolved: "This folder\u2019s own path could not be resolved just now: a link on the way to it changed, or a folder above it cannot be entered. So nothing was uploaded. Retry from the folder itself, by its real path.",
    keyed_folder_unresolved: "The folder under which Claude Code keeps this worktree\u2019s trust and settings could not be resolved just now: too many files may be open, or a folder on the way to it changed. So nothing was uploaded. Retry."
  };
export {
  G6o,
  n_a,
  Kdi,
  r_a,
  o_a,
  s_a,
  i_a,
  a_a,
  l_a
};
