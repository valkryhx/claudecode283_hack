// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Pe } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { b, f, de } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { F, d, k } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { J } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { Oc, W$r, pne } from "B:/~BUN/root/chunk-h4acfc9y.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { P, Oi, tt, Wn, Il } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { Nn } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { fr } from "B:/~BUN/root/chunk-1g25msn4.js";
import { pe } from "B:/~BUN/root/chunk-thn0wk2x.js";
import { yn, fS, ys } from "B:/~BUN/root/chunk-88zb3509.js";
import { ro, u0, xna, Pna, o$e, hjt } from "B:/~BUN/root/chunk-nsneqfcc.js";
import { xf, BHe } from "B:/~BUN/root/chunk-x1xft50h.js";
import { ku, Ds, Ol, Cc } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { be, Ga } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { hs } from "B:/~BUN/root/chunk-zn7b14jn.js";
import { ent } from "B:/~BUN/root/chunk-1x03q1j7.js";
import { Qyo } from "B:/~BUN/root/chunk-m749kjym.js";
import { uDn, gy, JXe, jhs, jco, GLi, bSr } from "B:/~BUN/root/chunk-3v5ng1y2.js";
import { d_e, Dgs, Lgs, Ix, B0e, yuo, c_e, bpt, Bgs, r0t } from "B:/~BUN/root/chunk-hjds4dtx.js";
import { L0i, C0e, N7t, kbr, vbr, Kdo, Ebr, qdo as flag, Ydo, mms, Eb, Xdo, Tbr, Jdo, wMn, N0i, Qdo, Cbr, F0i, uze, kMn, hms, Rbr, $0i, gms, F7t, vMn, U0i, B0i, U$, LZ, j0i, TDt, Zdo, CDt, EMn, eco, Abr, xbr, W0i, TMn, yms, CMn, RDt, _ms, bms, fze, Pbr, Sms, wms, B9, H7t, z0i, Wft, $7t, Obr, zft as env_6, Mce, RMn, kms, Dce } from "B:/~BUN/root/chunk-4tz0m6qq.js";
import { pOi, fyr, COi } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { Vwn, tui } from "B:/~BUN/root/chunk-f75fgfra.js";
import { mFi } from "B:/~BUN/root/chunk-8ytf4evt.js";
import { DFi } from "B:/~BUN/root/chunk-yscb2r3d.js";
import { tLe } from "B:/~BUN/root/chunk-ymawhbhz.js";
import { Ja } from "B:/~BUN/root/chunk-v91d7hbv.js";
import { en } from "B:/~BUN/root/chunk-mdq0dxn3.js";
import { U, L } from "B:/~BUN/root/chunk-5ha2avah.js";
import { lstat as Ot, open as ad, realpath as dd, stat as Vi, unlink as _r } from "fs/promises";
import { basename as Ji, dirname as Ze, isAbsolute as ld, join as ut, resolve as wo } from "path";
import { mkdtemp as Ho, open as Uo, rm as Wo } from "fs/promises";
import { join as Yr } from "path";
async function Kr(e, n = xf()) {
  let r = await Ho(Yr(n, `${e}-`));
  return {
    path: Yr(r, "out.bundle"),
    dispose: () => Wo(r, {
      recursive: !0,
      force: !0
    }).catch(() => {})
  };
}
async function Xr(e, n) {
  let r;
  try {
    r = await Uo(e, Cc());
  } catch (error) {
    return {
      kind: "unreadable",
      detail: String(error)
    };
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
    let content = Buffer.alloc(o.size),
      a = 0;
    while (a < o.size) {
      let {
        bytesRead: bytesRead
      } = await r.read(content, a, o.size - a, a);
      if (bytesRead === 0) break;
      a += bytesRead;
    }
    return a === o.size ? {
      kind: "read",
      content: content
    } : {
      kind: "unreadable",
      detail: "changed while being read"
    };
  } catch (error) {
    return {
      kind: "unreadable",
      detail: String(error)
    };
  } finally {
    await r.close();
  }
}
import { chmod as zo, mkdir as zn, open as al, readdir as Yo, readFile as Ko, rm as Xo, stat as qo, writeFile as qr } from "fs/promises";
import { join as Ue } from "path";
var Vo = new Map([["# v2 git bundle", "sha1"], [`# v3 git bundle
@object-format=sha1`, "sha1"], [`# v3 git bundle
@object-format=sha256`, "sha256"]]),
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
    o = r.findIndex((item, index) => index > 0 && !item.startsWith("@")),
    objectFormat = Vo.get(r.slice(0, o).join(`
`));
  if (o < 0 || objectFormat === void 0) return null;
  let refs = r.slice(o).flatMap(item => {
    let [, id_2, name] = Jo[objectFormat].exec(item) ?? [];
    return id_2 === void 0 || name === void 0 ? [] : [{
      id: id_2,
      name: name
    }];
  });
  return refs.length === r.length - o && L(refs.map(item => item.name)).length === refs.length ? {
    objectFormat: objectFormat,
    refs: refs,
    packOffset: n + 2
  } : null;
}
async function is(e, n) {
  let r = await Ko(e).catch(() => null);
  if (r === null || r.length < sn || !r.subarray(0, an.length).equals(an)) return null;
  let o = Buffer.from(n, "hex"),
    s = u => u < 0 ? 0 : r.readUInt32BE(an.length + u * 4),
    [a, h] = [s(o[0] - 1), s(o[0])];
  if (sn + h * o.length > r.length) return null;
  return Array.from({
    length: h - a
  }, (u, p) => a + p).some(item => r.subarray(sn + item * o.length, sn + (item + 1) * o.length).equals(o));
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
  };
}
async function Jr(e, {
  scratchRoot: scratchRoot
}, r) {
  let o = rs(e);
  if (o === null) return {
    ok: !1,
    kind: "header",
    detail: "not a whole bundle"
  };
  let input = e.subarray(o.packOffset),
    a = Ue(scratchRoot, "check"),
    detail = await ss(a, o.objectFormat);
  if (detail !== null) return {
    ok: !1,
    kind: "scratch",
    detail: detail
  };
  try {
    let env = os(a),
      p = await r(["-C", a, "index-pack", "--index-version=2", "--stdin"], {
        env: env,
        input: input
      });
    if (p.code !== 0) return {
      ok: !1,
      kind: p.exitCode === void 0 ? "unfinished" : "index",
      detail: Vr(p)
    };
    let [, w] = /^pack\t([0-9a-f]+)$/m.exec(p.stdout) ?? [],
      _ = Ue(a, "objects", "pack", `pack-${w}`),
      y = await qo(`${_}.pack`).catch(() => null);
    if (y === null) return {
      ok: !1,
      kind: "index",
      detail: "no indexed pack to read"
    };
    if (y.size !== input.length) return {
      ok: !1,
      kind: "trailing",
      detail: `${input.length - y.size} bytes follow the pack`
    };
    let E = ns[o.objectFormat],
      B = await is(`${_}.idx`, E);
    if (B === null) return {
      ok: !1,
      kind: "index",
      detail: "no pack index to read"
    };
    let I = await r(["-C", a, "rev-list", "--objects", "--count", "--stdin"], {
      env: env,
      input: `${[...L(o.refs.map(item => item.id)), `^${E}`].join(`
`)}
`
    });
    if (I.code !== 0 || Qo.test(C0e(I))) return {
      ok: !1,
      kind: I.exitCode === void 0 ? "unfinished" : Zo.test(C0e(I)) ? "objects" : "walk",
      detail: Vr(I)
    };
    let R = input.readUInt32BE(ts) - (B ? 1 : 0),
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
    };
  } catch (error) {
    return {
      ok: !1,
      kind: "unfinished",
      detail: String(error)
    };
  } finally {
    await Zr(a);
  }
}
async function Zr(e) {
  let n = Ue(e, "objects", "pack"),
    r = await Yo(n).catch(() => []);
  await Promise.all(r.map(item => zo(Ue(n, item), 420).catch(() => {}))), await Xo(e, {
    recursive: !0,
    force: !0
  }).catch(() => {});
}
async function ss(e, n) {
  try {
    await zn(e);
  } catch (error) {
    return String(error);
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
    return null;
  } catch (error) {
    return await Zr(e), String(error);
  }
}
function Vr(e) {
  return Wn(e.stderr.trim()) || (e.exitCode === void 0 ? "git did not finish" : `exit ${e.code}`);
}
function Qr(e) {
  if (e?.checkout === void 0) return "layout_not_read";
  if (e.checkout === "main") return "main_checkout";
  let n = CDt(e.commonDir),
    r = gy(n, e.workTree);
  if (n === e.commonDir) return r ? "beneath_git_directory" : "outside_git_directory";
  return r ? "beneath_repository" : "outside_repository";
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
      return g("teleport_git_bundle_from_layout_not_read");
  }
}
var ti = "Do not run git in this folder: git may act on what was put there.",
  ni = "a fresh clone from the remote (with no remote: a new folder and git init), copy your files over by hand, but not the .git folder, then",
  ri = "Keep this folder: commits that you have not pushed, other branches and stashes exist only here.";
import { randomBytes as as } from "crypto";
import { createReadStream as ds, createWriteStream as ls } from "fs";
import { unlink as us } from "fs/promises";
import { Transform as cs } from "stream";
import { pipeline as fs } from "stream/promises";
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
  };
}
function oi(e, n = Date.now()) {
  return e.filter(item => {
    if (item === yt || item === bt) return !0;
    let o = ps.exec(item);
    return o !== null && Math.abs(n - Number(o[1])) > gs;
  });
}
async function si(e, n, r, signal) {
  let s = new ai(r);
  try {
    return await fs(ds(e), s, ls(n, {
      flags: "wx"
    }), {
      signal: signal
    }), {
      ok: !0,
      sizeBytes: s.outputBytes
    };
  } catch (a) {
    if (k(a) !== "EEXIST") await us(n).catch(() => {});
    return {
      ok: !1,
      error: d(a)
    };
  }
}
class ai extends cs {
  labels;
  outputBytes = 0;
  state = "signature";
  version = 2;
  sawRef = !1;
  pending = Buffer.alloc(0);
  applied = new Set();
  constructor(e) {
    super();
    this.labels = e;
  }
  _transform(e, n, r) {
    try {
      if (this.state === "pack") this.writeOut(e);else this.pending = this.pending.length === 0 ? e : Buffer.concat([this.pending, e]), this.consumeHeaderLines();
      r();
    } catch (error) {
      r(F(error));
    }
  }
  _flush(e) {
    e(this.state === "pack" ? null : Error("bundle ended before the end of its header"));
  }
  writeOut(e) {
    let n = typeof e === "string" ? Buffer.from(e, "latin1") : e;
    this.outputBytes += n.length, this.push(n);
  }
  consumeHeaderLines() {
    for (;;) {
      let e = this.pending.indexOf(10);
      if (e < 0) {
        if (this.pending.length > ms) throw Error("bundle header line too long");
        return;
      }
      let n = this.pending.toString("latin1", 0, e);
      if (this.pending = this.pending.subarray(e + 1), this.state === "signature") {
        if (n === "# v2 git bundle") this.version = 2;else if (n === "# v3 git bundle") this.version = 3;else throw Error("not a v2 or v3 git bundle");
        this.state = "header", this.writeOut(`${n}
`);
        continue;
      }
      if (n === "") {
        if (this.applied.size !== this.labels.size) throw Error("bundle header does not name every ref to relabel");
        this.state = "pack", this.writeOut(`
`), this.writeOut(this.pending), this.pending = Buffer.alloc(0);
        return;
      }
      this.writeOut(`${this.headerLine(n)}
`);
    }
  }
  headerLine(e) {
    if (e.startsWith("@")) {
      if (this.version !== 3 || this.sawRef) throw Error("bundle capability line out of place");
      return e;
    }
    this.sawRef = !0;
    let n = e.indexOf(" "),
      r = n < 0 ? e : e.slice(0, n);
    if (e.startsWith("-")) {
      if (!Dce.test(r.slice(1))) throw Error("malformed bundle prerequisite line");
      return e;
    }
    let o = r,
      s = e.slice(n + 1);
    if (n < 0 || s === "" || !Dce.test(o)) throw Error("malformed bundle ref line");
    let a = this.labels.get(s);
    if (a !== void 0) {
      if (this.applied.has(s)) throw Error("bundle header names a ref to relabel twice");
      return this.applied.add(s), `${o} ${a}`;
    }
    if (s.startsWith(Yn)) throw Error("bundle header carries a seed ref that is not this build's");
    return e;
  }
}
import { createHash as xn, randomBytes as _i } from "crypto";
import { lstat as lt, stat as ma, mkdir as ki, mkdtemp as Yt, open as At, readdir as Mi, readFile as pa, readlink as wa, rm as It, unlink as Rn, writeFile as dr } from "fs/promises";
import { dirname as wr, isAbsolute as ya, join as ae } from "path";
import { constants as ws } from "fs";
import { open as bs, realpath as _s } from "fs/promises";
import { release as ks } from "os";
var Es = [".git", "git~1"];
function je(e, n) {
  return !Rs(e) && !(x() === "wsl" && e.includes("\\")) && !Ss(e, n);
}
function Rs(e) {
  return e.includes("\x00") || !Vwn(Kn(e)) || Kn(e).split("/").some(item => Es.includes(Ol(item))) || tui(Kn(e));
}
function Ss(e, n) {
  return n && e.replaceAll("\\", "/").split("/").some(item => item.includes(":") || /[. ]$/.test(item));
}
var xs = /^[^~.]{1,6}~[0-9]+(?:\.[^.]{1,3})?$/;
function it(e) {
  let n = x();
  return (n === "windows" || n === "wsl") && e.replaceAll("\\", "/").split("/").some(item => xs.test(tt(item, ":").replace(/[. ]+$/, "")));
}
async function Ft(e) {
  return (await vs(e)) !== "no";
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
`).filter(item => item !== ""),
    u = h.flatMap(item => {
      let _ = item.split(" "),
        y = _.indexOf("-"),
        [id_3, parent,,, I] = _,
        fstype = y >= 0 ? _[y + 1] : void 0;
      if (id_3 === void 0 || parent === void 0 || I === void 0 || fstype === void 0) return [];
      let options = [_[5], _[y + 3]].filter(Boolean).join(",");
      return [{
        id: id_3,
        parent: parent,
        point: o$e(I),
        windowsSide: xna({
          fstype: fstype,
          source: _[y + 2],
          options: options
        }),
        windowsDrive: Pna(fstype, options)
      }];
    });
  if (u.length !== h.length) return "unsure";
  if (u.some(item => item.windowsSide && item.point !== r && hjt(item.point, r))) return "unsure";
  let p = Ts(r, u);
  return p === null || p === "unsure" ? "unsure" : p.windowsDrive ? "yes" : p.windowsSide ? "unsure" : "no";
}
function Ts(e, n) {
  if (U(n, u => u.point === "/") > 1) return "unsure";
  let r = new Set(n.map(item => item.id)),
    o = u => {
      let p = u.filter(item => hjt(e, item.point)),
        w = Math.min(...p.map(item => item.point.length)),
        [_, y] = p.filter(item => item.point.length === w);
      return _ === void 0 ? null : y === void 0 ? _ : "unsure";
    },
    s = (u, p) => {
      if (p === 0) return null;
      let w = o(n.filter(item => item.parent === u.id && item !== u));
      return w === null ? u : w === "unsure" ? w : s(w, p - 1);
    },
    [a, h] = n.filter(item => (!r.has(item.parent) || item.parent === item.id) && hjt(e, item.point));
  return a === void 0 ? null : h !== void 0 ? "unsure" : s(a, n.length);
}
function Kn(e) {
  return x() === "windows" ? e.replaceAll("\\", "/") : e;
}
var di = 4194304;
async function li() {
  let [, e, n] = /^(\d+)\.(\d+)/.exec(ks()) ?? [];
  if (!(Number(e) > 5 || Number(e) === 5 && Number(n) >= 8)) return null;
  let r = await Cs("/proc/self/mountinfo", di).catch(() => null);
  return r === null || r.length >= di ? null : r;
}
async function Cs(e, n) {
  let r = await bs(e, ws.O_RDONLY | ro);
  try {
    let o = [],
      s = 0;
    while (s < n) {
      let a = Buffer.allocUnsafe(65536),
        {
          bytesRead: bytesRead_2
        } = await r.read(a, 0, a.length, null);
      if (bytesRead_2 === 0) break;
      o.push(a.subarray(0, bytesRead_2)), s += bytesRead_2;
    }
    return Buffer.concat(o);
  } finally {
    await r.close();
  }
}
import { createHash as Mt } from "crypto";
import { constants as at } from "fs";
import { lstat as _t, mkdir as Bs, open as Jn, readlink as dn, unlink as Xn } from "fs/promises";
import { basename as As, dirname as Tt, join as dt } from "path";
var Is = 8,
  ln = 1048576,
  Os = 536870912;
async function Zn(e, n, r, o, s) {
  let a = r.find(item => !Vwn(item));
  if (a !== void 0) return {
    refused: `${a}: not a path git writes`,
    tooLarge: !1,
    momentary: !1
  };
  let claimedBytes = 0,
    u = null,
    p = Gt(r),
    w = new Set(r),
    _ = Ja(Is, async path => {
      await s.beforeOpen?.(path);
      let A = !1,
        T = await Ye(e, path);
      if (T === "symlink") return {
        kind: "absent",
        path: path
      };
      if (T === "unreadable") return {
        refused: `${path}: a directory above it could not be inspected`,
        tooLarge: !1,
        momentary: !0
      };
      await s.beforeRead?.(path);
      let S = await un(e, path, s.ntfsRules),
        z = Y => Ns(e, path, Y);
      switch (S.kind) {
        case "absent":
          return {
            kind: "absent",
            path: path
          };
        case "refused":
          return w.has(path) ? {
            refused: `${path}: ${S.why}`,
            tooLarge: !1,
            momentary: S.momentary
          } : {
            kind: "absent",
            path: path
          };
        case "hardlinked":
          return {
            kind: "hardlinked",
            path: path
          };
        case "moved":
          return {
            kind: "changed",
            path: path
          };
        case "not_read":
          return (S.why === "name_not_plain" || S.why === "beyond_a_link") && !w.has(path) ? {
            kind: "absent",
            path: path
          } : {
            kind: "not_read",
            path: path,
            why: S.why
          };
        case "symlink":
          return {
            kind: "symlink",
            path: path,
            target: S.target
          };
        case "file":
          try {
            if (claimedBytes += S.size, u === null || S.size > u.size) u = {
              path: path,
              size: S.size
            };
            if (claimedBytes > o) return {
              refused: `${u.path} (largest, ${u.size} bytes): ${claimedBytes} bytes of changed files exceed the ${o}-byte cap`,
              tooLarge: !0,
              momentary: !1
            };
            let D = dt(n, path);
            await Bs(Tt(D), {
              recursive: !0
            });
            let H;
            try {
              H = await Jn(D, at.O_WRONLY | at.O_CREAT | at.O_EXCL | ro, S.executable ? 493 : 420);
            } catch (error) {
              if (k(error) === "EEXIST") return {
                refused: `${path}: collides with another changed path that differs only in case or normalization`,
                tooLarge: !1,
                momentary: !1
              };
              throw error;
            }
            try {
              let O = await S.handle.stat({
                bigint: !0
              });
              if (s.notOlderThanNs !== void 0 && O.ctimeNs >= s.notOlderThanNs && O.ctimeNs < (BigInt(Date.now()) + 1n) * 1000000n) return await H.close(), await Xn(D).catch(() => {}), {
                kind: "changed",
                path: path,
                sincePassStart: !0
              };
              let me = Mt("sha256"),
                X = s.objectFormat === void 0 ? null : Mt(s.objectFormat).update(`blob ${O.size}\x00`),
                ve = 0,
                le = !1,
                Te = Buffer.allocUnsafe(Math.min(S.size, ln)),
                bytes = 0;
              while (bytes < S.size) {
                let {
                  bytesRead: bytesRead_3
                } = await S.handle.read(Te, 0, Math.min(Te.length, S.size - bytes), bytes);
                if (bytesRead_3 === 0) break;
                if (me.update(Te.subarray(0, bytesRead_3)), X !== null) {
                  let W = Te.subarray(0, bytesRead_3);
                  X.update(W), ve += gi(W, le), le = W.at(-1) === 13;
                }
                let Ne = 0;
                while (Ne < bytesRead_3) {
                  let {
                    bytesWritten: bytesWritten
                  } = await H.write(Te, Ne, bytesRead_3 - Ne);
                  Ne += bytesWritten;
                }
                bytes += bytesRead_3;
              }
              await s.afterRead?.(path);
              let K = await S.handle.stat({
                  bigint: !0
                }),
                _e = s.objectFormat !== void 0 && ve > 0 ? fi(s.objectFormat, bytes, ve) : null;
              if (BigInt(bytes) !== O.size || K.size !== O.size || K.mtimeNs !== O.mtimeNs || K.ctimeNs !== O.ctimeNs || !(await $s(S.handle, bytes, me.digest(), _e?.update))) return await H.close(), await Xn(D).catch(() => {}), {
                kind: "changed",
                path: path
              };
              let kind = await z(S);
              if (kind !== "same") return await H.close(), await Xn(D).catch(() => {}), {
                kind: kind,
                path: path
              };
              await H.utimes(S.atime, S.mtime);
              let he = await H.stat({
                bigint: !0
              });
              return {
                kind: "file",
                path: path,
                bytes: bytes,
                copy: {
                  ino: Number(he.ino),
                  dev: Number(he.dev),
                  ctimeNs: he.ctimeNs,
                  size: Number(he.size),
                  identity: ci(he),
                  ...(X !== null && {
                    blobId: X.digest("hex"),
                    ...(_e !== null && {
                      lfBlobId: _e.digest()
                    })
                  })
                }
              };
            } finally {
              await H.close().catch(() => {});
            }
          } catch (error) {
            let D = k(error);
            return {
              refused: `${path}: could not be staged (${D ?? d(error)})`,
              tooLarge: !1,
              momentary: D === void 0 || !Vn.has(D)
            };
          } finally {
            await S.handle.close();
          }
      }
    }),
    y = await Promise.all([...r, ...p].map(_)),
    E = y.find(item => "refused" in item);
  if (E !== void 0) return E.tooLarge ? {
    ...E,
    claimedBytes: claimedBytes
  } : E;
  let B = y.filter(item => !("refused" in item)),
    I = B.flatMap(item => item.kind === "not_read" ? [item.why] : []);
  return {
    entries: B.filter(item => w.has(item.path) || item.kind === "hardlinked" || item.kind === "changed" || item.kind === "not_read"),
    copies: B.flatMap(item => item.kind === "file" ? [item] : Qn(item.path) ? [{
      kind: "absent",
      path: item.path
    }] : [])
  };
}
async function ui(e, n) {
  return (await Promise.all(n.map(async item => {
    if (item.kind === "absent") return _t(dt(e, item.path)).then(() => !1, s => {
      let a = k(s);
      return a === "ENOENT" || a === "ENOTDIR";
    });
    if (item.kind !== "file") return !0;
    try {
      let s = await _t(dt(e, item.path), {
        bigint: !0
      });
      return s.isFile() && s.nlink === 1n && Number(s.ino) === item.copy.ino && Number(s.dev) === item.copy.dev && ci(s) === item.copy.identity && s.ctimeNs === item.copy.ctimeNs && Number(s.size) === item.copy.size;
    } catch {
      return !1;
    }
  }))).every(Boolean);
}
function ci(e) {
  return e.dev === 0n || e.ino === 0n ? null : `${e.dev}:${e.ino}`;
}
async function Ns(e, n, r) {
  let o = await _t(dt(e, n), {
    bigint: !0
  }).catch(() => null);
  if (o !== null && o.isFile() && o.nlink > 1n) return "hardlinked";
  return o === null || !o.isFile() || o.ino !== r.ino || o.dev !== r.dev || (await Ye(e, n)) !== "clear" ? "changed" : "same";
}
async function $s(e, n, r, o) {
  let s = Mt("sha256"),
    a = Buffer.allocUnsafe(Math.min(n + 1, ln)),
    h = 0;
  for (;;) {
    let {
      bytesRead: bytesRead_4
    } = await e.read(a, 0, a.length, h);
    if (bytesRead_4 === 0) break;
    if (s.update(a.subarray(0, bytesRead_4)), o?.(a.subarray(0, bytesRead_4)), h += bytesRead_4, h > n) return !1;
  }
  return h === n && s.digest().equals(r);
}
function fi(e, n, r) {
  let o = Mt(e).update(`blob ${n - r}\x00`),
    s = !1;
  return {
    update(a) {
      if (a.length === 0) return;
      if (s && a[0] !== 10) o.update(Buffer.from([13]));
      s = a.at(-1) === 13;
      let h = s ? a.subarray(0, a.length - 1) : a;
      o.update(h.toString("latin1").replaceAll(`\r
`, `
`), "latin1");
    },
    digest() {
      if (s) o.update(Buffer.from([13]));
      return o.digest("hex");
    }
  };
}
function Qn(e) {
  let n = x(),
    r = hi(e).at(-1) ?? "";
  return n === "macos" || n === "windows" || n === "wsl" ? r.toLowerCase() === ".gitattributes" : r === ".gitattributes";
}
function Gt(e) {
  let n = new Set(e);
  return (e.length === 0 ? [] : [".gitattributes", ...pOi(e).map(item => `${item}/.gitattributes`)]).filter(item => !n.has(item));
}
var Vn = new Set(["ENAMETOOLONG", "ENOTDIR", "EISDIR", "EINVAL", "ELOOP"]);
var Ps = 92,
  Fs = 47;
function Ls(e, n = x()) {
  return n === "windows" ? Buffer.from(e.map(item => item === Ps ? Fs : item)) : e;
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
    }) : s === `${Tt(e)} (deleted)` ? "moved" : "elsewhere";
  } finally {
    await r.close();
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
    handle;
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
      };
    }
    handle = await Jn(o, s === "win32" ? "r" : a);
  } catch (error) {
    let p = k(error);
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
      };
    } catch {
      return {
        kind: "refused",
        why: "changed while being read",
        momentary: !0
      };
    }
    let w = s === "win32" ? null : await _t(o).catch(() => null),
      _ = w !== null && !w.isFile() && !w.isSymbolicLink();
    return {
      kind: "refused",
      why: `could not be opened (${p ?? "unknown"})`,
      momentary: !_ && (p === void 0 || !Vn.has(p))
    };
  }
  try {
    let u = await handle.stat({
      bigint: !0
    });
    if (!u.isFile()) return await handle.close(), {
      kind: "refused",
      why: "not a regular file",
      momentary: !1
    };
    if (u.nlink > 1n) return await handle.close(), {
      kind: "hardlinked"
    };
    if (s === "linux") {
      let p = await dn(`/proc/self/fd/${handle.fd}`);
      if (p !== o) return await handle.close(), p === `${o} (deleted)` || Tt(p) === Tt(o) ? {
        kind: "moved"
      } : {
        kind: "refused",
        why: "resolved outside its directory",
        momentary: !1
      };
    }
    return {
      kind: "file",
      handle: handle,
      size: Number(u.size),
      ino: u.ino,
      dev: u.dev,
      executable: (u.mode & 0o111n) !== 0n,
      atime: u.atime,
      mtime: u.mtime
    };
  } catch (error) {
    await handle.close().catch(() => {});
    let p = k(error);
    return {
      kind: "refused",
      why: d(error),
      momentary: p === void 0 || !Vn.has(p)
    };
  }
}
function hi(e) {
  return (x() === "windows" ? e.replaceAll("\\", "/") : e).split("/");
}
async function Ye(e, n) {
  let r = e;
  for (let o of hi(n).slice(0, -1)) {
    r = dt(r, o);
    try {
      if ((await _t(r)).isSymbolicLink()) return "symlink";
    } catch (error) {
      let a = k(error);
      if (a === "ENOENT" || a === "ENOTDIR") return "clear";
      return "unreadable";
    }
  }
  return "clear";
}
async function er(e, n, r, o, s) {
  if ((await Ye(e, n)) !== "clear") return null;
  let a = await un(e, n, s);
  if (a.kind !== "file") return null;
  try {
    if (a.size > o) return null;
    let h = Buffer.alloc(a.size + 1),
      u = 0;
    while (u < h.length) {
      let {
        bytesRead: bytesRead_5
      } = await a.handle.read(h, u, h.length - u, u);
      if (bytesRead_5 === 0) break;
      u += bytesRead_5;
    }
    if (u !== a.size) return null;
    let p = await _t(dt(e, n), {
      bigint: !0
    }).catch(() => null);
    if (p === null || !p.isFile() || p.nlink > 1n || p.ino !== a.ino || p.dev !== a.dev || (await Ye(e, n)) !== "clear") return null;
    return Gs(h.subarray(0, a.size), r);
  } catch {
    return null;
  } finally {
    await a.handle.close().catch(() => {});
  }
}
function Gs(e, n) {
  let r = n === 64 ? "sha256" : "sha1",
    o = Us(e);
  return [e, ...(o === null ? [] : [o])].flatMap(item => js(item, r));
}
function js(e, n) {
  let r = Mt(n).update(`blob ${e.length}\x00`).update(e).digest("hex"),
    o = gi(e, !1);
  if (o === 0) return [r];
  let s = fi(n, e.length, o);
  for (let a = 0; a < e.length; a += ln) s.update(e.subarray(a, a + ln));
  return [r, s.digest()];
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
      a = e[h] === qn ? h : -1;
    }
    if (a === -1) r[o++] = e[s++];else o += Hs.copy(r, o), s = a + 1;
  }
  return o === e.length ? null : r.subarray(0, o);
}
function gi(e, n) {
  let r = n && e[0] === 10 ? 1 : 0;
  if (!e.includes(13)) return r;
  for (let o = 1; o < e.length; o++) if (e[o] === 10 && e[o - 1] === 13) r++;
  return r;
}
import { createHash as sr, randomBytes as cu } from "crypto";
import { access as hu, copyFile as gu, mkdir as ta, readdir as mu, rename as pu, rm as wu, writeFile as yu } from "fs/promises";
import { dirname as na, join as _u } from "path";
import { deflate as ra } from "zlib";
import { promisify as ia } from "util";
import { createHash as Ws } from "crypto";
import { constants as tr } from "fs";
import { mkdtemp as zs, open as Ys, rm as Ks } from "fs/promises";
import { join as mi } from "path";
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
  return typeof e === "object" && e !== null && !Array.isArray(e) && !(e instanceof Map) && "failed" in e && typeof e.failed === "string";
}
var Ht = "40000",
  yi = "160000",
  Zs = "120000",
  pi = e => e.padStart(6, "0"),
  wi = e => e === yi ? "gitlink" : e === Zs ? "link" : "file";
function nr(e, n) {
  return async r => {
    let o = null;
    try {
      o = await zs(mi(n, "claude-seed-reads-"));
      let s = await Ys(mi(o, "batch"), tr.O_RDWR | tr.O_CREAT | tr.O_EXCL | ro, 384);
      try {
        let a = await e(["cat-file", "--batch"], void 0, r, void 0, s.fd),
          {
            size: size
          } = await s.stat();
        if (a.code !== 0 || size > qs) return null;
        let u = Buffer.alloc(size);
        for (let p = 0; p < size;) {
          let {
            bytesRead: bytesRead_6
          } = await s.read(u, p, size - p, p);
          if (bytesRead_6 === 0) return null;
          p += bytesRead_6;
        }
        return u;
      } finally {
        await s.close().catch(() => {});
      }
    } catch {
      return null;
    } finally {
      if (o !== null) await Ks(o, {
        recursive: !0,
        force: !0
      }).catch(() => {});
    }
  };
}
class rr {
  fetch;
  listings = new Map();
  bodies = new Map();
  algorithm;
  idLength;
  constructor(e, n) {
    this.fetch = e;
    this.algorithm = n.length === 64 ? "sha256" : "sha1", this.idLength = n.length;
  }
  hashes(e, n, r) {
    return Ws(this.algorithm).update(`${e} ${n.length}\x00`).update(n).digest("hex") === r;
  }
  async trees(e) {
    let n = L(e.filter(item => !this.listings.has(item)));
    if (n.length === 0) return !0;
    let r = await this.read("tree", n);
    if (Ie(r)) return r;
    for (let [tree, s] of r) {
      let a = Qs(s, this.idLength / 2);
      if (a === null) return jt;
      if (a === "malformed") return {
        failed: "malformed",
        tree: tree
      };
      this.listings.set(tree, a);
    }
    return !0;
  }
  listing(e) {
    return this.listings.get(e);
  }
  async commit(e) {
    let n = await this.commits([e]);
    return Ie(n) ? n : n.get(e);
  }
  async commits(e) {
    let n = L([...e]),
      r = n.length === 0 ? new Map() : await this.read("commit", n);
    if (Ie(r)) return r;
    let o = new Map();
    for (let [s, a] of r) {
      let h = a.subarray(0, Math.max(0, a.indexOf(`

`))).toString("latin1").split(`
`),
        tree_2 = /^tree ([0-9a-f]{40,64})$/.exec(h[0] ?? "")?.[1],
        parents = [];
      for (let w of h.slice(1)) {
        let _ = /^parent ([0-9a-f]{40,64})$/.exec(w)?.[1];
        if (_ === void 0) break;
        parents.push(_);
      }
      if (tree_2 === void 0 || [tree_2, ...parents].some(item => item.length !== this.idLength)) return jt;
      o.set(s, {
        tree: tree_2,
        parents: parents
      });
    }
    return o;
  }
  async blobs(e) {
    return e.length === 0 ? new Map() : this.read("blob", L([...e]));
  }
  async read(e, n) {
    let r = await this.fetch(n.map(item => `${item}
`).join(""));
    if (r === null) return cn;
    if (Ie(r)) return r;
    let o = new Map(),
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
      o.set(a, _), s = h + 1 + w + 1;
    }
    return o;
  }
}
function Qs(e, n) {
  let r = new Map(),
    o = 0,
    s = null,
    a = !1;
  while (o < e.length) {
    let h = e.indexOf(32, o),
      u = h === -1 ? -1 : e.indexOf(0, h + 1);
    if (h === -1 || u === -1 || u + 1 + n > e.length) return null;
    let name_2 = e.subarray(h + 1, u),
      w = e.subarray(o, h).toString("latin1");
    if (!fn(w)) return null;
    let mode = hn(w),
      y = {
        name: name_2,
        isTree: mode === Ht
      },
      E = name_2.toString("latin1");
    if (!ir(name_2) || r.has(E)) return null;
    if (!Js.has(mode) || s !== null && ea(s, y) >= 0) a = !0;
    s = y, r.set(E, {
      mode: mode,
      id: e.subarray(u + 1, u + 1 + n).toString("hex")
    }), o = u + 1 + n;
  }
  return a ? "malformed" : r;
}
function ir(e) {
  return e.length > 0 && !e.includes(47) && !(e.length === 1 && e[0] === 46) && !(e.length === 2 && e[0] === 46 && e[1] === 46);
}
function ea(e, n) {
  let r = Math.min(e.name.length, n.name.length),
    o = e.name.subarray(0, r).compare(n.name.subarray(0, r));
  if (o !== 0) return o;
  let s = a => a.name.length > r ? a.name[r] : a.isTree ? 47 : 0;
  return s(e) - s(n);
}
function fn(e) {
  return /^[0-7]+$/.test(e);
}
function hn(e) {
  let n = fn(e) ? Array.from(e.slice(-11)).reduce((acc, item) => (acc << 3 | Number(item)) >>> 0, 0) : 0;
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
      return e.replace(/^0+/, "");
  }
}
async function Ut(e, base, other) {
  let o = "0".repeat(e.idLength),
    s = [],
    a = base === other ? [] : [{
      prefix: Buffer.alloc(0),
      base: base,
      other: other
    }],
    h = 0;
  while (a.length > 0) {
    let u = a.flatMap(({
        base: base_2,
        other: other_2
      }) => [base_2, other_2]).filter(item => item !== null),
      p = await e.trees(u);
    if (p !== !0) {
      if (p.failed !== "malformed") return p;
      let _ = a.find(({
        base: base_3,
        other: other_3
      }) => base_3 === p.tree || other_3 === p.tree);
      return _ === void 0 ? p : {
        ...p,
        dir: _.prefix.toString("utf8").replace(/\/$/, "")
      };
    }
    let w = [];
    for (let {
      prefix: prefix,
      base: base_4,
      other: other_4
    } of a) {
      let B = base_4 === null ? new Map() : e.listing(base_4),
        I = other_4 === null ? new Map() : e.listing(other_4),
        R = L([...B.keys(), ...I.keys()]).sort();
      if (h += R.length, h > Vs) return jt;
      for (let A of R) {
        let T = B.get(A),
          S = I.get(A);
        if (T !== void 0 && S !== void 0 && T.id === S.id && T.mode === S.mode) continue;
        let pathBytes = Buffer.concat([prefix, Buffer.from(A, "latin1")]),
          Y = T?.mode === Ht,
          D = S?.mode === Ht;
        if (Y || D) w.push({
          prefix: Buffer.concat([pathBytes, Buffer.from("/")]),
          base: Y ? T.id : null,
          other: D ? S.id : null
        });
        let H = T !== void 0 && !Y ? T : void 0,
          O = S !== void 0 && !D ? S : void 0;
        if (H === void 0 && O === void 0) continue;
        s.push({
          path: pathBytes.toString("utf8"),
          pathBytes: pathBytes,
          status: H === void 0 ? "A" : O === void 0 ? "D" : wi(H.mode) !== wi(O.mode) ? "T" : "M",
          oldMode: H === void 0 ? "000000" : pi(H.mode),
          newMode: O === void 0 ? "000000" : pi(O.mode),
          oldId: H?.id ?? o,
          newId: O?.id ?? o
        });
      }
    }
    a = w;
  }
  return s;
}
async function Ct(e, tree_3, r) {
  let o = new Map(),
    s = await e.trees([tree_3]);
  if (s !== !0) return s;
  let a = r.map(h => ({
    name: h,
    segments: h.split("/"),
    at: 0,
    tree: tree_3
  }));
  while (a.length > 0) {
    let h = await e.trees(a.map(({
      tree: tree_4
    }) => tree_4));
    if (h !== !0) return h;
    let u = [],
      p = [];
    for (let w of a) {
      let _ = e.listing(w.tree)?.get(Buffer.from(w.segments[w.at], "utf8").toString("latin1"));
      if (_ === void 0) continue;
      let y = w.at === w.segments.length - 1;
      if (_.mode === Ht) {
        if (y) p.push(_.id);else u.push({
          ...w,
          at: w.at + 1,
          tree: _.id
        });
      } else if (y) o.set(w.name, {
        id: _.id,
        mode: _.mode
      });
    }
    if (p.length > 0) {
      let w = await e.trees(p);
      if (w !== !0) return w;
    }
    a = u;
  }
  return o;
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
    return Buffer.from(h, "latin1").equals(o) ? "latin1" : "utf8";
  })();
  return r.catch(() => {
    if (or === r) or = void 0;
    return "utf8";
  });
}
var $u = ia(ra);
var oa = ["filter", "working-tree-encoding", "ident"];
async function mn(e, n, r, o, s) {
  if (n.length === 0) return [];
  let a = new Set(n.filter(item => r.get(item) === null)),
    h = E => [E, ...(r.get(E) ?? [])],
    u = E => h(E).flatMap(item => s.normalizationBlind ? L([item, item.normalize("NFC"), item.normalize("NFD")]) : [item]),
    p = L(n.flatMap(u));
  if (o?.prepareIndexAndStore !== void 0) {
    let E = await o.prepareIndexAndStore(p, o);
    if (E !== !0) return E;
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
      name: name_3,
      id: id_4,
      text: text,
      markStripped: markStripped
    } of R.blobs) {
      let Y = await e(["hash-object", "-w", "--stdin"], B, Buffer.from(text, I)),
        D = Y.stdout.trim();
      if (Y.code !== 0 || D !== id_4 && !markStripped) return null;
      if (D !== id_4) {
        let H = await e(["hash-object", "-w", "--stdin"], B, Buffer.from(gn[I] + text, I));
        if (H.code !== 0 || H.stdout.trim() !== id_4) return null;
        if ((await e(["-c", "core.splitIndex=false", "update-index", "--cacheinfo", `100644,${D},${name_3}`], B)).code !== 0) return null;
      }
    }
  }
  let w = await e([...(s.caseBlind ? ["-c", "core.ignorecase=true"] : []), "-c", "core.sparseCheckout=false", "check-attr", ...(o === null ? [] : ["--cached"]), "-z", "--stdin", ...oa], o === null ? void 0 : {
    GIT_INDEX_FILE: o.indexPath,
    GIT_OBJECT_DIRECTORY: o.objectsDir,
    GIT_ALTERNATE_OBJECT_DIRECTORIES: ""
  }, p.map(item => `${item}\x00`).join(""));
  if (w.maxBufferExceeded) return "overflow";
  if (w.code !== 0) return null;
  let _ = w.stdout.split("\x00"),
    y = new Set();
  for (let E = 0; E + 2 < _.length; E += 3) {
    let [B, I] = [_[E + 1], _[E + 2]];
    if (!(I === "unspecified" || I === "unset" || B === "ident" && I === "false")) y.add(_[E]);
  }
  return n.filter(item => a.has(item) || u(item).some(item => y.has(item)));
}
async function sa(e, n, GIT_INDEX_FILE, o, s, a) {
  let h = L([...Gt(o), ...o.filter(item => item.split("/").at(-1) === ".gitattributes")]),
    u = await Ydo(e, GIT_INDEX_FILE, new Set(h), na(GIT_INDEX_FILE));
  if (u === null) return null;
  let p = n.commit !== void 0 ? await ca(e, n.commit, h, s) : await bi(e, n.tree, h);
  if (p === null || p === "tampered") return p;
  if (a && [...p.values()].some(({
    mode: mode_2
  }) => mode_2 === "160000")) return null;
  let w = A => {
    let T = p.get(A),
      S = u.get(A);
    return T === void 0 ? S === void 0 : S !== void 0 && Kdo(S) && S.id === T.id && hn(S.mode) === T.mode;
  };
  if (h.some(item => !w(item))) return "tampered";
  let _ = [...p],
    y = await kbr(_.map(([A]) => `:0:${A}`)).reduce(async (acc, item) => {
      let S = await acc;
      if (S === "tampered" || S === null) return S;
      let z = await e(["-c", "core.precomposeUnicode=false", "rev-parse", ...item], {
        GIT_INDEX_FILE: GIT_INDEX_FILE
      });
      return z.code === 0 ? [...S, ...z.stdout.split(`
`).filter(item => item !== "")] : z.exitCode === 128 ? "tampered" : null;
    }, Promise.resolve([]));
  if (y === null) return null;
  if (y === "tampered" || y.length !== _.length || _.some(([, A], index) => y[index] !== A.id)) return "tampered";
  let E,
    B = new Map(),
    I = async A => {
      let T = B.get(A);
      if (T !== void 0) return T;
      let S = await e(["cat-file", "--batch"], void 0, `${A}
`, s === "latin1" ? "latin1" : void 0),
        z = S.stdout.indexOf(`
`),
        Y = z === -1 ? S.stdout : S.stdout.slice(0, z),
        D = z === -1 ? "" : S.stdout.slice(z + 1),
        H = A.length === 64 ? "sha256" : "sha1",
        O = S.code !== 0 ? null : !new RegExp(`^${A} blob [0-9]+$`).test(Y) ? /^[0-9a-f]{40,64} [a-z]+ [0-9]+$/.test(Y) ? "tampered" : null : [D, `${D}\r`].find(item => {
          let X = Buffer.from(item, s);
          return sr(H).update(`blob ${X.length}\x00`).update(X).digest("hex") === A;
        }) ?? (s === "latin1" ? "tampered" : null);
      return B.set(A, O), O;
    },
    blobs = [];
  for (let [name_4, {
    id: id_5,
    mode: mode_3
  }] of p) {
    let z = await I(id_5);
    if (z === "tampered") return "tampered";
    let Y = z === null ? null : aa(z, mode_3, s);
    if (Y === null) return null;
    if (Y.isLink) {
      if (E ??= la(e), !(await E)) return "old_git";
    }
    if (Y.text === null) return null;
    blobs.push({
      name: name_4,
      id: id_5,
      text: Y.text,
      markStripped: Y.markStripped
    });
  }
  return {
    blobs: blobs
  };
}
function aa(text_2, n, r) {
  if (text_2.includes("\x00")) return null;
  if (n !== "100644" && n !== "100755" && n !== "120000") return null;
  let o = text_2.startsWith(gn[r]);
  if (n === "120000") return {
    isLink: !0,
    text: o ? null : text_2,
    markStripped: !1
  };
  if (!o) return {
    isLink: !1,
    text: text_2,
    markStripped: !1
  };
  let text_3 = text_2.slice(gn[r].length);
  return text_3.startsWith(gn[r]) ? null : {
    isLink: !1,
    text: text_3,
    markStripped: !0
  };
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
      continue;
    }
    let h = r[s + 1] ?? "";
    if (/^[0-3][0-7]{2}$/.test(r.slice(s + 1, s + 4))) o.push(parseInt(r.slice(s + 1, s + 4), 8)), s += 3;else o.push(n[h] ?? h.charCodeAt(0)), s += 1;
  }
  return Buffer.from(o);
}
async function la(e) {
  let n = await e(["version"]),
    r = n.code === 0 ? tLe(n.stdout) : null;
  return r !== null && (r.major > 2 || r.major === 2 && r.minor >= 32);
}
async function ua(e, n, r) {
  let o = r ?? (await ar(e, {})),
    s = n.length === 64 ? "sha256" : "sha1",
    a = (_, y, E) => sr(s).update(`${_} ${y.length}\x00`).update(y).digest("hex") === E,
    h = await e(["cat-file", "--batch"], void 0, `${n}
`, o === "latin1" ? "latin1" : void 0);
  if (h.code !== 0) return null;
  let u = h.stdout.indexOf(`
`),
    p = u === -1 ? "" : h.stdout.slice(u + 1);
  if (!h.stdout.startsWith(`${n} commit `)) return /^[0-9a-f]{40,64} [a-z]+ /.test(h.stdout) ? "tampered" : null;
  if (![p, `${p}\r`].some(item => a("commit", Buffer.from(item, o), n))) return o === "latin1" ? "tampered" : null;
  let w = /^tree ([0-9a-f]{40,64})\n/.exec(p)?.[1];
  if (w === void 0) return "tampered";
  return w;
}
async function ca(e, n, r, o = "utf8") {
  let s = await ua(e, n, o);
  if (s === null || s === "tampered") return s;
  return bi(e, s, r);
}
var fa = 512,
  ha = 262144;
async function ga(e, n) {
  let r = n.length === 64 ? "sha256" : "sha1",
    o = (w, _, y) => sr(r).update(`${w} ${_.length}\x00`).update(_).digest("hex") === y,
    s = new Map(),
    a = w => {
      if (!w.every(({
        nameBytes: nameBytes
      }) => ir(nameBytes))) return null;
      let _ = new Map(w.map(({
        nameBytes: nameBytes_2,
        mode: mode_4,
        id: id_6
      }) => [nameBytes_2.toString("latin1"), {
        mode: mode_4,
        id: id_6
      }]));
      return _.size === w.length ? _ : null;
    },
    readsManyTreesInOneRun = (await ar(e, {})) === "latin1",
    listingsOf = async w => {
      let _ = L(w.filter(item => !s.has(item)));
      if (_.length === 0) return !0;
      if (!readsManyTreesInOneRun) {
        for (let A of _) {
          let T = await p(A);
          if (T === null || T === "tampered") return T;
        }
        return !0;
      }
      let y = await e(["cat-file", "--batch"], void 0, [..._, _[0]].map(item => `${item}
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
          }), me = le + 1 + B;
        }
        let X = a(O);
        if (X === null) return "tampered";
        s.set(T, X);
      }
      return !0;
    },
    p = async w => {
      let _ = s.get(w);
      if (_ !== void 0) return _;
      let y = await e(["-c", "core.quotePath=true", "ls-tree", w]);
      if (y.code !== 0) return null;
      let E = y.stdout.split(`
`).filter(item => item !== "").map(item => {
          let A = item.indexOf("\t"),
            [T,, S] = item.slice(0, A).split(" "),
            nameBytes_3 = da(item.slice(A + 1));
          return {
            mode: (T ?? "").replace(/^0+/, ""),
            id: S ?? "",
            nameBytes: nameBytes_3
          };
        }),
        B = Buffer.concat(E.map(({
          mode: mode_5,
          id: id_7,
          nameBytes: nameBytes_4
        }) => Buffer.concat([Buffer.from(`${mode_5} `, "utf8"), nameBytes_4, Buffer.from([0]), Buffer.from(id_7, "hex")])));
      if (!o("tree", B, w)) return null;
      let I = a(E);
      if (I === null) return "tampered";
      return s.set(w, I), I;
    };
  return {
    listingsOf: listingsOf,
    listing: w => s.get(w),
    readsManyTreesInOneRun: readsManyTreesInOneRun
  };
}
async function bi(e, tree_5, r) {
  let {
      listingsOf: listingsOf_2,
      listing: listing
    } = await ga(e, tree_5),
    a = new Map(),
    h = await listingsOf_2([tree_5]);
  if (h !== !0) return h;
  let u = r.map(p => ({
    name: p,
    segments: p.split("/"),
    at: 0,
    tree: tree_5
  }));
  while (u.length > 0) {
    let p = await listingsOf_2(u.map(({
      tree: tree_6
    }) => tree_6));
    if (p !== !0) return p;
    let w = [],
      _ = [];
    for (let y of u) {
      let E = listing(y.tree);
      if (E === void 0) return null;
      let B = y.segments[y.at],
        I = E.get(Buffer.from(B, "utf8").toString("latin1"));
      if (I === void 0) continue;
      let R = y.at === y.segments.length - 1;
      if (R && I.mode !== "40000") a.set(y.name, {
        id: I.id,
        mode: I.mode
      });else if (I.mode === "40000") if (!R) w.push({
        ...y,
        at: y.at + 1,
        tree: I.id
      });else _.push(I.id);
    }
    if (_.length > 0) {
      let y = await listingsOf_2(_);
      if (y !== !0) return y;
    }
    u = w;
  }
  return a;
}
var ba = /^:([0-7]{6}) ([0-7]{6}) ([0-9a-f]{40}(?:[0-9a-f]{24})?) ([0-9a-f]{40}(?:[0-9a-f]{24})?) ([A-Z])[0-9]*$/,
  Gi = ["100644", "100755"],
  lr = "160000",
  mode_6 = "120000",
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
  return xn("sha1").update(`blob ${e.length}\x00`).update(e).digest("hex");
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
  xi = e => (n, ...r) => e(["-c", "core.longpaths=true", ...n], ...r);
async function Hi(e, n, r = {}) {
  let o = r.probes ?? fze(),
    s = bn(e, n, r.signal, void 0, o),
    a = (ee, $e, ce, Fe, St) => s($e?.GIT_INDEX_FILE === void 0 ? [...ee] : ["-c", "core.splitIndex=false", ...ee], $e, ce, Fe, St),
    h = ee => (r.neverRead ?? r.alsoLeaveOut)?.(ee) ?? !1,
    u = L([Wft(e), n.workTree]).filter(item => bpt.some(([, $e]) => Bgs(`${item}/${$e}`))),
    p = ee => u.some(item => Bgs(`${item}/${ee}`)),
    w = ee => Ix(ee) || p(ee) || (r.alsoLeaveOut?.(ee) ?? !1),
    _ = await va(a, n.adminDir ?? LZ());
  if (_.kind !== "inspected") return _;
  let {
      gitDir: gitDir,
      workTree: workTree
    } = n,
    {
      base: B,
      baseTree: baseTree,
      iTree: iTree,
      reader: reader,
      namesWindowsCannotHold: namesWindowsCannotHold
    } = _.inspection;
  if (namesWindowsCannotHold > 0) t(`[wipStash] tracked names that Windows cannot hold, listed as deleted and passed over: ${namesWindowsCannotHold}`), r.onNamesWindowsCannotHold?.(namesWindowsCannotHold);
  let ntfsRules = n.bound === !0 && x() === "wsl" || (await Ft(workTree)) || (await Ft(n.adminDir ?? LZ())),
    refused = Ta(_.inspection, ntfsRules);
  if (refused.length > 0) return {
    kind: "refused",
    refused: refused,
    decidedOn: "listing"
  };
  let leftOut = r.leaveOutUncommittedCredentialFiles ? await Ca(workTree, _.inspection, w, ntfsRules, h) : [],
    D = new Set(leftOut.map(({
      path: path_2
    }) => path_2)),
    H = new Set(_.inspection.staged.map(({
      path: path_3
    }) => path_3)),
    O = new Set(_.inspection.staged.flatMap(({
      path: path_4,
      status: status
    }) => status === "D" ? [path_4] : [])),
    me = Date.now(),
    X = Ja(Bt, ee => r.signal?.aborted === !0 || D.has(ee.path) || H.has(ee.path) ? Promise.resolve("changed") : zi(workTree, ee, ntfsRules, ka, r.signal)),
    ve = await Promise.all(_.inspection.working.map(X)),
    le = _.inspection.working.filter((item, index) => ve[index] !== "unchanged"),
    Te = U(ve, ee => ee === "open_refused");
  if (Te > 0) r.onOpenRefusedAtTheLook?.(Te);
  let ie = _.inspection.working.length - le.length;
  if (ie > 0) t(`[wipStash] ${ie} of ${_.inspection.working.length} stat-dirty tracked files were unchanged (${Date.now() - me}ms)`);
  if (le.length === 0 && iTree === baseTree) return {
    kind: "none",
    leftOut: leftOut
  };
  if (await nd(gitDir), n.adminDir === void 0) await td(LZ());
  let GIT_INDEX_FILE_2 = ae(n.adminDir ?? gitDir, `ccr-seed-${process.pid}-${_i(6).toString("hex")}.index`),
    _e = null,
    workTree_2 = null,
    he = null,
    Re = [],
    Ne = new Set(),
    W = [],
    ct = new Map(),
    ft = [],
    Qe = new Map(),
    GIT_INDEX_FILE_3 = null;
  try {
    let ee = await a(["read-tree", "--no-recurse-submodules", `--index-output=${GIT_INDEX_FILE_2}`, "-m", iTree]);
    if (ee.code !== 0) return j("read-tree", ee.stderr, ee);
    if (n.adminDir === void 0) {
      _e = await Yt(ae(LZ(), `claude-seed-index-${process.pid}-`));
      let N = ae(_e, "index"),
        V = await Di(GIT_INDEX_FILE_2, N);
      if (V !== null) return await Rn(GIT_INDEX_FILE_2).catch(() => {}), j(V.kind === "disk" ? "scratch-index" : "rewritten", V.detail);
      let se = await ed(GIT_INDEX_FILE_2);
      if (se !== null) t(`[wipStash] the scratch index read-tree wrote could not be removed after it was carried off (${se}); left for the sweep`);
      GIT_INDEX_FILE_2 = N;
    }
    let $e = await Ra(a, GIT_INDEX_FILE_2, n.adminDir ?? LZ(), reader, iTree, ntfsRules);
    if ($e.kind === "failed") return $e;
    if ($e.kind === "differ") return j("read-tree", "the index changed while it was read, or its trees do not list what it holds (an object is not what its id names) \u2014 retry");
    let ce = await a(["write-tree", "--ignore-cache-tree"]);
    if (ce.code !== 0) return j("write-tree", ce.stderr || ce.stdout, ce);
    if (ce.stdout.trim() !== iTree) return j("read-tree", "the index changed while the uncommitted changes were being read \u2014 retry");
    let tree_7 = iTree;
    if (D.size > 0) {
      let N = await wn(a, reader, GIT_INDEX_FILE_2, baseTree, [...D]);
      if (N !== null) return {
        kind: "failed",
        ...N
      };
      let V = await a(["write-tree", "--ignore-cache-tree"], {
        GIT_INDEX_FILE: GIT_INDEX_FILE_2
      });
      if (V.code !== 0) return j("write-tree", V.stderr || V.stdout, V);
      tree_7 = V.stdout.trim();
    }
    let St = r.leaveOutUncommittedCredentialFiles ? le.filter(({
        status: status_2,
        path: path_5
      }) => status_2 === "D" && !D.has(path_5) && w(path_5)).map(({
        path: path_6
      }) => path_6) : [],
      et = N => !D.has(N) && (!r.leaveOutUncommittedCredentialFiles || !w(N)),
      ht = L(le.flatMap(({
        path: path_7,
        status: status_3,
        newMode: newMode,
        newId: newId
      }) => status_3 === "D" || newMode === lr || !ji.test(newId) ? [path_7] : [])),
      Nt = new Set(await Pi(workTree, ht)),
      Fn = new Set(ht.filter(item => !Nt.has(item))),
      Zt = L(le.map(({
        path: path_8
      }) => path_8)).filter(item => !Fn.has(item) && et(item)),
      $t = [...H].filter(et),
      Se = _.inspection.staged.filter(({
        status: status_4
      }) => status_4 !== "D"),
      nt = qa(),
      M = Se.length === 0 && !r.leaveOutUncommittedCredentialFiles ? {
        elsewhere: [],
        withheldTracked: new Map()
      } : await Sa(a, GIT_INDEX_FILE_2, new Map(Se.map(({
        newId: newId_2,
        path: path_9
      }) => [newId_2, path_9])), r.leaveOutUncommittedCredentialFiles ? N => nt(N) || p(N) : () => !1, n.adminDir ?? LZ(), ntfsRules, r.signal);
    if (M === null) return j("ls-files", r.signal?.aborted ? "cancelled, or out of time, before the index was listed and its names judged" : "could not list the index");
    let {
        elsewhere: elsewhere,
        withheldTracked: withheldTracked
      } = M,
      Xe = L([...le.map(({
        path: path_10
      }) => path_10), ...H, ...elsewhere]),
      qe = new Set(),
      xt = new Set(),
      rt;
    if (Xe.length > 0) {
      he = await Yt(ae(n.adminDir ?? LZ(), "claude-seed-attrs-")), rt = await ja(a, workTree);
      let N = await Ua(he, {
        caseBlind: rt.caseBlind,
        objectFormat: B.length === 64 ? "sha256" : "sha1",
        objectsDir: ae(n.commonDir, "objects")
      });
      if (N !== null) return j("check-attr", N);
      let V = bn(e, {
          gitDir: he,
          commonDir: he,
          workTree: workTree,
          configPins: n.configPins
        }, r.signal, TDt(n), o),
        se = await mn(V, Xe, new Map(Xe.map(item => [item, c_e(item)])), {
          commit: B,
          indexPath: ae(he, "head.index"),
          objectsDir: ae(he, "verified")
        }, rt);
      if (se === "overflow") return j("check-attr", "too many changed files to read the attributes of");
      if (se === "old_git") return j("check-attr", "a committed .gitattributes is a symbolic link, which the installed git (older than 2.32, or of a version this build cannot read) follows on disk: update git, then retry");
      if (se === "tampered") return j("verify", "HEAD's commit, a tree on the way to a committed .gitattributes, or that file's blob is not the object its id names");
      if (se === null) return j("check-attr", yr);
      qe = new Set(se);
      let ge = L([...Xe.filter(item => qe.has(item)), ...D]);
      if (ge.length > 0 || withheldTracked.size > 0) {
        let Z = await Ct(reader, baseTree, ge);
        if (Ie(Z)) return We(Z, "cat-file", "HEAD's trees to the changed files could not be read back as what their ids name");
        xt = new Set(qe);
        let fe = new Set([...qe, ...D]),
          Ge = Ja(Bt, async xe => {
            let st = await er(workTree, xe, baseTree.length, mr, ntfsRules),
              vt = withheldTracked.get(xe);
            return st !== null && (fe.has(xe) || !st.includes(vt ?? "")) ? st : [];
          }),
          Qt = (await Promise.all(L([...fe, ...withheldTracked.keys()]).filter(item => !h(item)).map(Ge))).flat(),
          gt = xe => xe !== pn.sha1 && xe !== pn.sha256,
          mt = new Set([...[...Z.values()].map(({
            id: id_8
          }) => id_8).filter(gt), ...Se.filter(({
            path: path_11
          }) => fe.has(path_11)).map(({
            newId: newId_3
          }) => newId_3).filter(gt), ...Qt.filter(gt)]);
        Ne = mt, Se.filter(({
          path: path_12,
          newId: newId_4
        }) => mt.has(newId_4) && et(path_12)).forEach(({
          path: path_13
        }) => qe.add(path_13));
      }
      let ne = $t.filter(item => qe.has(item));
      if (ne.length > 0) {
        let Z = await wn(a, reader, GIT_INDEX_FILE_2, baseTree, ne);
        if (Z !== null) return {
          kind: "failed",
          ...Z
        };
        let fe = await a(["write-tree", "--ignore-cache-tree"], {
          GIT_INDEX_FILE: GIT_INDEX_FILE_2
        });
        if (fe.code !== 0) return j("write-tree", fe.stderr || fe.stdout, fe);
        tree_7 = fe.stdout.trim(), leftOut.push(...ne.map(Ge => ({
          path: Ge,
          why: "filtered"
        })));
      }
    }
    let ze = new Set(leftOut.flatMap(({
        path: path_14,
        why: why
      }) => why === "filtered" ? [path_14] : [])),
      G = new Set(Zt),
      Q = Se.flatMap(({
        path: path_15,
        newMode: newMode_2
      }) => newMode_2 !== lr && et(path_15) && !G.has(path_15) ? [path_15] : []),
      te = [...Zt, ...(await Pi(workTree, Q))];
    if (te.length > 0 || Q.length > 0) {
      let N = await Yt(ae(n.adminDir ?? LZ(), "claude-seed-stage-"));
      workTree_2 = N;
      let objectFormat_2 = baseTree.length === 64 ? "sha256" : "sha1",
        se = await Zn(workTree, N, te, r.maxStagedBytes ?? Si, {
          ...r.stageHooks,
          objectFormat: objectFormat_2,
          ntfsRules: ntfsRules
        });
      if ("refused" in se) return j("stage", se.refused);
      let ge = await zt(a, {
        GIT_INDEX_FILE: GIT_INDEX_FILE_2
      }, se.entries.flatMap(item => item.kind === "absent" ? [item.path] : []));
      if (ge === null) return j("ls-files", "could not list the index entries");
      let ne = await sd(se, new Set(te), new Set(le.flatMap(({
        path: path_16,
        status: status_5
      }) => status_5 === "D" || ge.unseen.has(path_16) ? [] : [path_16])), N, C => Zn(workTree, N, C, r.maxStagedBytes ?? Si, {
        ...r.stageHooks,
        objectFormat: objectFormat_2,
        ntfsRules: ntfsRules
      }));
      if ("refused" in ne) return j("stage", ne.refused);
      let Z = ne.entries.find(item => item.kind === "changed" && (!te.includes(item.path) || Qn(item.path)));
      if (Z !== void 0) return j("stage", `${Z.path} changed while it was being read`);
      let fe = xi(bn(e, {
          ...n,
          workTree: workTree_2
        }, r.signal, TDt(n), o)),
        Ge = (C, ye, wt, rn, Dt) => fe(ye?.GIT_INDEX_FILE === void 0 ? [...C] : ["-c", "core.splitIndex=false", ...C], ye, wt, rn, Dt),
        Qt = new Set(te),
        gt = L([...ne.entries.flatMap(item => item.kind !== "absent" && Qt.has(item.path) ? [item.path] : []), ...Se.flatMap(({
          path: path_17,
          newMode: newMode_3
        }) => newMode_3 !== lr && et(path_17) ? [path_17] : [])]),
        mt = await hr(n.commonDir);
      if (mt.kind !== "none") return j("check-attr", mt.kind === "touches" ? ".git/info/attributes sets or unsets filter attributes (or defines a macro, quotes a pattern, or holds a line of 2,048 bytes or more)" : ".git/info/attributes could not be read as a plain file");
      let xe = xi(bn(e, {
          gitDir: he,
          commonDir: he,
          workTree: workTree_2,
          configPins: n.configPins
        }, r.signal, TDt(n), o)),
        st = new Map(gt.map(item => [item, c_e(item)])),
        [vt, tn] = await Promise.all([mn(Ge, gt, st, null, rt), mn(xe, gt, st, null, rt)]);
      if (vt === "overflow" || tn === "overflow") return j("check-attr", "too many changed files to read the attributes of");
      if (vt === null || !Array.isArray(vt)) return j("check-attr", "could not read the attributes in force");
      if (tn === null || !Array.isArray(tn)) return j("check-attr", "could not read the staged .gitattributes on their own");
      let Dr = vt,
        Pr = tn,
        nn = new Set([...Dr, ...Pr].filter(item => !xt.has(item))),
        $o = C => C !== pn.sha1 && C !== pn.sha256,
        Do = Ja(Bt, C => er(workTree, C, baseTree.length, mr, ntfsRules)),
        Po = (await Promise.all([...nn].filter(item => !h(item)).map(Do))).flatMap(item => item ?? []),
        Fr = new Set([...Se.filter(({
          path: path_18
        }) => nn.has(path_18)).map(({
          newId: newId_5
        }) => newId_5), ...Po].filter($o)),
        Lr = Se.filter(({
          path: path_19,
          newId: newId_6
        }) => Fr.has(newId_6) && et(path_19) && !nn.has(path_19) && !qe.has(path_19)).map(({
          path: path_20
        }) => path_20);
      Ne = new Set([...Ne, ...Fr]);
      let Mr = L([...Dr, ...Pr, ...ne.entries.flatMap(item => qe.has(item.path) ? [item.path] : []), ...Lr]),
        Fo = await hr(n.commonDir);
      if (!Bi(mt, Fo)) return j("check-attr", ".git/info/attributes changed while the attributes were read");
      let Gr = L([...$t.filter(item => nn.has(item)), ...Lr]);
      if (Gr.length > 0) {
        let C = await wn(a, reader, GIT_INDEX_FILE_2, baseTree, Gr);
        if (C !== null) return {
          kind: "failed",
          ...C
        };
        let ye = await a(["write-tree", "--ignore-cache-tree"], {
          GIT_INDEX_FILE: GIT_INDEX_FILE_2
        });
        if (ye.code !== 0) return j("write-tree", ye.stderr || ye.stdout, ye);
        tree_7 = ye.stdout.trim();
      }
      let jr = ne.entries.flatMap(item => (item.kind === "hardlinked" || item.kind === "changed") && Qt.has(item.path) && !ze.has(item.path) ? [{
          path: item.path,
          why: item.kind === "hardlinked" ? "hardlinked" : "unstable"
        }] : []),
        Lo = new Set([...ze, ...jr.map(({
          path: path_21
        }) => path_21)]),
        Hr = [...jr, ...Mr.filter(item => !Lo.has(item)).map(C => ({
          path: C,
          why: "filtered"
        }))],
        Ln = new Set([...Hr.map(({
          path: path_22
        }) => path_22), ...Mr]);
      leftOut.push(...Hr);
      let Mn = ne.entries.flatMap(item => item.kind === "file" || item.kind === "symlink" ? [item.path] : []),
        Gn = await zt(a, void 0, Mn);
      if (Gn === null) return j("ls-files", "could not list the index entries");
      let Ur = Mn.filter(item => !Ln.has(item)),
        Wr = await zt(a, {
          GIT_INDEX_FILE: GIT_INDEX_FILE_2
        }, Ur);
      if (Wr === null) return j("ls-files", "could not list the index entries");
      if (Ur.some(item => Gn.unseen.has(item) !== Wr.unseen.has(item))) return j("rewritten", "an entry this upload read was marked assume-unchanged or skip-worktree in one copy of the index and not the other since the build began");
      Qe = new Map(Se.map(({
        path: path_23,
        newId: ye,
        newMode: wt
      }) => [path_23, {
        id: ye,
        mode: wt
      }]));
      let Mo = new Set(le.flatMap(({
        path: path_24,
        newId: newId_7
      }) => /^0+$/.test(newId_7) ? [path_24] : []));
      ft = Mn.filter(item => Gn.unseen.has(item) && Qe.has(item) && !Mo.has(item) && !Ln.has(item));
      let jn = new Set([...Ln, ...ft]),
        Hn = await Wa(a, GIT_INDEX_FILE_2, ne.entries.filter(item => !jn.has(item.path)));
      if (Hn.kind === "failed") return Hn;
      let zr = ne.entries.flatMap(item => item.kind === "absent" && G.has(item.path) && !ge.skipWorktree.has(item.path) ? [item.path] : []);
      Re = zr.filter(item => !O.has(item));
      let Un = await Fi(a, {
        GIT_INDEX_FILE: GIT_INDEX_FILE_2
      }, baseTree, zr);
      if (Un.code !== 0) return j("update-index", Un.stderr, Un);
      let pt = ne.entries.flatMap(item => item.kind === "file" && !jn.has(item.path) ? [item.path] : []);
      if (W = ne.entries.flatMap(item => (item.kind === "file" || item.kind === "symlink") && !jn.has(item.path) ? [item.path] : []), ct = new Map([...Hn.ids].map(([C, id_9]) => [C, {
        mode: mode_6,
        id: id_9
      }])), pt.length > 0) {
        GIT_INDEX_FILE_3 = ae(wr(GIT_INDEX_FILE_2), `replay-${_i(6).toString("hex")}.index`);
        let C = await Di(GIT_INDEX_FILE_2, GIT_INDEX_FILE_3);
        if (C !== null) return j(C.kind === "disk" ? "scratch-index" : "rewritten", C.detail);
        let ye = await zt(Ge, {
          GIT_INDEX_FILE: GIT_INDEX_FILE_3
        }, pt);
        if (ye === null) return j("update-index", "the laid paths could not be listed");
        if (ye.unseen.size > 0) return j("rewritten", "an entry this upload is about to lay was marked assume-unchanged or skip-worktree in the scratch index since it was written");
        let wt = (Ae, GIT_INDEX_FILE_4 = GIT_INDEX_FILE_2) => Ge(["-c", "core.bigFileThreshold=512m", "-c", "core.checkStat=default", "-c", "core.trustctime=true", "update-index", ...Ae, "-z", "--add", "--stdin"], {
            GIT_INDEX_FILE: GIT_INDEX_FILE_4
          }, pt.map(item => `${item}\x00`).join("")),
          rn = await wt(["--ignore-skip-worktree-entries"]),
          Dt = rn.exitCode === vn ? await wt([]) : rn;
        if (Dt.code !== 0) return j("update-index", Dt.stderr, Dt);
        let on = await za(Ge, GIT_INDEX_FILE_3, wt, pt);
        if (on === null) return j("update-index", "the lay could not be replayed to learn the laid entries");
        let Go = new Map(ne.entries.flatMap(item => item.kind === "file" ? [[item.path, item.copy]] : [])),
          jo = new Map([...le.map(({
            path: path_25,
            oldMode: oldMode
          }) => [path_25, oldMode]), ..._.inspection.staged.map(({
            path: path_26,
            newMode: newMode_4
          }) => [path_26, newMode_4])]);
        if (pt.find(item => {
          let Oe = on.get(item)?.mode;
          return !(Oe !== void 0 && (Gi.includes(Oe) || Oe === mode_6 && jo.get(item) === mode_6));
        }) !== void 0) return j("rewritten", "an entry this upload laid as a file is recorded as something else in the scratch index");
        if (pt.find(item => {
          let Oe = on.get(item)?.id,
            Pt = Go.get(item);
          return Pt === void 0 || Oe !== Pt.blobId && Oe !== Pt.lfBlobId;
        }) !== void 0) return j("rewritten", "an entry this upload laid does not hold the bytes staged for it");
        for (let GIT_INDEX_FILE_5 of [GIT_INDEX_FILE_2, GIT_INDEX_FILE_3]) {
          let Oe = await zt(Ge, {
            GIT_INDEX_FILE: GIT_INDEX_FILE_5
          }, pt);
          if (Oe === null) return j("update-index", "the laid paths could not be listed");
          if (Oe.unseen.size > 0 || Oe.absent.size > 0) return j("rewritten", "an entry this upload laid is marked assume-unchanged or skip-worktree in the scratch index, or is no longer there by its name");
        }
        if (!(await ui(workTree_2, ne.copies))) return j("stage", "the staged copies changed while git read them");
        if (!Bi(mt, await hr(n.commonDir))) return j("check-attr", ".git/info/attributes changed while the changes were hashed");
        on.forEach((item, index) => ct.set(index, item));
      }
    }
    let ue = await Fi(a, {
      GIT_INDEX_FILE: GIT_INDEX_FILE_2
    }, baseTree, St);
    if (ue.code !== 0) return j("update-index", ue.stderr, ue);
    let q = await a(["write-tree", "--ignore-cache-tree"], {
      GIT_INDEX_FILE: GIT_INDEX_FILE_2
    });
    if (q.code !== 0) return j("write-tree", q.stderr || q.stdout, q);
    let tree_8 = q.stdout.trim();
    if (r.leaveOutUncommittedCredentialFiles) {
      let N = await Ti(reader, baseTree, tree_8, w, ntfsRules);
      if (Ie(N)) return We(N, "cat-file", Wt);
      let V = N.filter(({
        why: why_2
      }) => why_2 !== "forged" && why_2 !== "alias");
      if (V.length > 0) {
        let Z = await wn(a, reader, GIT_INDEX_FILE_2, baseTree, V.map(({
          path: path_27
        }) => path_27));
        if (Z !== null) return {
          kind: "failed",
          ...Z
        };
        let fe = await a(["write-tree", "--ignore-cache-tree"], {
          GIT_INDEX_FILE: GIT_INDEX_FILE_2
        });
        if (fe.code !== 0) return j("write-tree", fe.stderr || fe.stdout, fe);
        tree_8 = fe.stdout.trim(), leftOut.push(...V);
      }
      let se = await Promise.all(L([tree_8, tree_7]).map(item => Ti(reader, baseTree, item, w, ntfsRules))),
        ge = se.find(Ie);
      if (ge !== void 0) return We(ge, "cat-file", Wt);
      let refused_2 = [...new Map(se.flatMap(item => Ie(item) ? [] : item).map(item => [item.path, item])).values()];
      if (refused_2.length > 0) return {
        kind: "refused",
        refused: refused_2,
        decidedOn: "tree"
      };
    }
    let oe = await Ut(reader, baseTree, tree_7);
    if (Ie(oe)) return We(oe, "cat-file", Wt);
    let ot = oe.filter(({
      status: status_6,
      newId: newId_8
    }) => status_6 !== "D" && Ne.has(newId_8));
    if (ot.length > 0) return Ci(ot);
    let Ve = tree_8 === tree_7 ? oe : await Ut(reader, baseTree, tree_8);
    if (Ie(Ve)) return We(Ve, "cat-file", Wt);
    if (tree_8 !== tree_7) {
      let N = new Set(W),
        V = Ve.filter(({
          path: path_28,
          status: status_7,
          newId: newId_9
        }) => status_7 !== "D" && !N.has(path_28) && Ne.has(newId_9));
      if (V.length > 0) return Ci(V);
    }
    if (ft.length > 0) {
      let N = [oe, Ve].map(item => new Map(item.map(({
        path: path_29,
        status: status_8,
        newId: Z,
        newMode: fe
      }) => [path_29, status_8 === "D" ? null : {
        mode: fe,
        id: Z
      }])));
      if (ft.find(item => N.some(ge => {
        let ne = ge.get(item),
          Z = Qe.get(item);
        return ne === void 0 || ne === null || Z === void 0 || ne.id !== Z.id || ne.mode !== Z.mode;
      })) !== void 0) return j("rewritten", "a staged entry this upload left as the index had it was replaced in the scratch index before the trees were written");
    }
    if (W.length > 0) {
      let N = new Map(Ve.map(({
          path: path_30,
          status: status_9,
          newId: fe,
          newMode: Ge
        }) => [path_30, status_9 === "D" ? null : {
          mode: Ge,
          id: fe
        }])),
        V = W.filter(item => !N.has(item)),
        se = V.length > 0 ? await Ct(reader, baseTree, V) : new Map();
      if (Ie(se)) return We(se, "cat-file", Wt);
      if (W.find(item => {
        let Z = N.has(item) ? N.get(item) : se.get(item),
          fe = ct.get(item);
        return Z === null || Z === void 0 || fe === void 0 || Z.id !== fe.id || Z.mode !== fe.mode;
      }) !== void 0) return j("rewritten", "an entry this upload laid was replaced in the scratch index before the work tree was written");
    }
    if (tree_8 === baseTree && tree_7 === baseTree) return {
      kind: "none",
      leftOut: leftOut
    };
    let Me = await od(a, B),
      He = await a(["commit-tree", tree_7, "-p", B, "-m", `index on ${Me}`], Sn);
    if (He.code !== 0) return j("commit-tree", He.stderr, He);
    let re = await a(["commit-tree", tree_8, "-p", B, "-p", He.stdout.trim(), "-m", `WIP on ${Me}`], Sn);
    if (re.code !== 0) return j("commit-tree", re.stderr, re);
    let we = [{
      id: He.stdout.trim(),
      tree: tree_7,
      parents: [B]
    }, {
      id: re.stdout.trim(),
      tree: tree_8,
      parents: [B, He.stdout.trim()]
    }];
    for (let {
      id: id_10,
      tree: tree_9,
      parents: parents_2
    } of we) {
      let ge = await reader.commit(id_10);
      if (Ie(ge)) return We(ge, "commit-tree", Ei);
      if (ge.tree !== tree_9 || ge.parents.length !== parents_2.length || ge.parents.some((item, index) => item !== parents_2[index])) return j("verify", Ei);
    }
    return {
      kind: "created",
      commit: re.stdout.trim(),
      leftOut: leftOut,
      deletedUnstaged: [...Re]
    };
  } catch (error) {
    return j("scratch-index", d(error));
  } finally {
    await Promise.all([...[GIT_INDEX_FILE_2, `${GIT_INDEX_FILE_2}.lock`, ...(GIT_INDEX_FILE_3 === null ? [] : [GIT_INDEX_FILE_3, `${GIT_INDEX_FILE_3}.lock`])].map(item => Rn(item).catch(() => {})), ...[...(_e === null ? [] : [_e]), ...(workTree_2 === null ? [] : [workTree_2]), ...(he === null ? [] : [he])].map(item => It(item, {
      recursive: !0,
      force: !0
    }).catch(() => {}))]);
  }
}
async function Ui(e, n, signal_2, o) {
  let s = await Eb(e, [...Mce, ...vMn(o), ...kms, "stash", "create"], {
    hardened: !1,
    signal: signal_2,
    env: {
      ...env_6,
      ...F7t(o)
    }
  });
  if (s.code === 0) {
    let commit = s.stdout.trim();
    return commit === "" ? {
      kind: "none",
      leftOut: []
    } : {
      kind: "created",
      commit: commit,
      leftOut: [],
      deletedUnstaged: []
    };
  }
  let silent = C0e(s).trim() === "";
  if (s.exitCode === 1 && silent) return t(`[gitBundle] git stash create exited ${s.code} with no output \u2014 treating as no uncommitted changes`), {
    kind: "none",
    leftOut: []
  };
  return !n ? {
    kind: "none",
    leftOut: []
  } : silent ? {
    ...j("stash create", s.exitCode === void 0 ? "it was stopped, ran out of time or could not start, and left no message" : `it ended with exit status ${s.exitCode} and left no message`),
    silent: silent
  } : j("stash create", s.stderr, s);
}
async function wn(e, n, GIT_INDEX_FILE_6, o, s) {
  let a = await Ct(n, o, s);
  if (Ie(a)) return We(a, "cat-file", "the trees holding the entries to restore could not be read back as what their ids name");
  let h = `0 ${"0".repeat(o.length)}`,
    u = await e(["update-index", "-z", "--index-info"], {
      GIT_INDEX_FILE: GIT_INDEX_FILE_6
    }, s.map(item => {
      let y = a.get(item);
      return `${y === void 0 ? h : `${y.mode.padStart(6, "0")} ${y.id}`}	${item}\x00`;
    }).join(""));
  if (u.code !== 0) return j("update-index", u.stderr, u);
  let p = Oa(C0e(u), s);
  if (p.length > 0) return {
    step: "refused-name",
    detail: `git refuses a name it was asked to restore: ${p.slice(0, 3).join(", ")}`
  };
  let w = await Ydo(e, GIT_INDEX_FILE_6, new Set(s), wr(GIT_INDEX_FILE_6));
  if (w === null) return {
    step: "ls-files",
    detail: "could not list the index entries"
  };
  return s.some(item => {
    let y = w.get(item);
    return y !== void 0 && !Kdo(y) || y?.id !== a.get(item)?.id || y?.mode !== a.get(item)?.mode.padStart(6, "0");
  }) ? {
    step: "verify",
    detail: "the entries just restored are not the ones the verified trees hold"
  } : null;
}
async function Ea(e) {
  let n = xn("sha256");
  return await vbr(e, r => {
    n.update(r);
  }), n.digest("hex");
}
function ur({
  detail: detail_2,
  run: run
}) {
  return j("read-tree", detail_2, run);
}
async function Ra(e, GIT_INDEX_FILE_7, r, o, s, a) {
  let h = await Yt(ae(r, "claude-seed-listings-"));
  try {
    let u = 0,
      p = async (A, T, S) => {
        let z = S.length === 0 ? [] : ["--", ".", ...S.map(item => `:(exclude,literal)${item}`)];
        for (let Y of [["--sparse"], []]) {
          let D = await At(ae(h, `${A}.${u++}`), Ebr, 384);
          try {
            let run_2 = await e(["ls-files", ...Y, "-s", "-z", ...z], {
              GIT_GLOB_PATHSPECS: "0",
              GIT_ICASE_PATHSPECS: "0",
              ...T
            }, void 0, void 0, D.fd);
            if (run_2.code === 0) return await Ea(D);
            if (run_2.exitCode !== vn || Y.length === 0) return {
              detail: run_2.stderr || "could not list the index",
              run: run_2
            };
          } finally {
            await D.close();
          }
        }
        return {
          detail: "could not list the index"
        };
      },
      w = async A => {
        let [T, S] = await Promise.all([p("trees", {
          GIT_INDEX_FILE: GIT_INDEX_FILE_7
        }, []), p("index", void 0, A)]);
        if (typeof T !== "string") return T;
        if (typeof S !== "string") return S;
        return T === S ? "agree" : "differ";
      },
      _ = await w([]);
    if (_ !== "differ") return _ === "agree" ? {
      kind: "agree"
    } : ur(_);
    let run_3 = await e(["diff-files", "-z", "--name-only", "--diff-filter=AD", "--ignore-submodules=dirty"], N7t);
    if (run_3.code !== 0) return ur({
      detail: run_3.stderr,
      run: run_3
    });
    let E = run_3.stdout.split("\x00").filter(item => item !== ""),
      B = await Ct(o, s, E);
    if (Ie(B)) return We(B, "cat-file", "the index's trees could not be read back as what their ids name");
    let I = E.filter(item => !B.has(item));
    if (I.length === 0 || I.some(item => !je(item, a))) return {
      kind: "differ"
    };
    let R = await w(I);
    return R === "agree" ? {
      kind: "agree"
    } : R === "differ" ? {
      kind: "differ"
    } : ur(R);
  } finally {
    await It(h, {
      recursive: !0,
      force: !0
    }).catch(() => {});
  }
}
async function Sa(e, GIT_INDEX_FILE_8, r, o, s, a, h) {
  let u = await Yt(ae(s, "claude-seed-ids-"));
  try {
    let p = 0;
    for (let w of [["--sparse"], []]) {
      let _ = await At(ae(u, `index.${p++}`), Ebr, 384);
      try {
        let y = await e(["ls-files", ...w, "-s", "-z"], {
          GIT_INDEX_FILE: GIT_INDEX_FILE_8
        }, void 0, void 0, _.fd);
        if (y.code === 0) {
          let elsewhere_2 = [],
            withheldTracked_2 = new Map(),
            I = "";
          if (await vbr(_, R => {
            if (h?.aborted) return;
            let A = (I + R.toString("latin1")).split("\x00");
            I = A.pop() ?? "";
            for (let T of A) {
              let S = T.indexOf("\t"),
                [, z = "", Y = ""] = T.slice(0, S).split(" "),
                D = Buffer.from(T.slice(S + 1), "latin1").toString("utf8");
              if (!je(D, a) || it(D)) continue;
              if (Y === "0" && o(D)) withheldTracked_2.set(D, z);
              let H = r.get(z);
              if (H !== void 0 && D !== H) elsewhere_2.push(D);
            }
          }), h?.aborted) return null;
          return I === "" ? {
            elsewhere: elsewhere_2,
            withheldTracked: withheldTracked_2
          } : null;
        }
        if (y.exitCode !== vn) return null;
      } finally {
        await _.close();
      }
    }
    return null;
  } finally {
    await It(u, {
      recursive: !0,
      force: !0
    }).catch(() => {});
  }
}
var yr = "HEAD's commit or its .gitattributes could not be read to be verified",
  stderr = "internal error: no git directory was chosen for this linked worktree, so git was not run";
function bn(e, layout, signal_3, o, probes = fze(), {
  hardenedMaxBuffer: hardenedMaxBuffer
} = {}) {
  if (layout.checkout === "linked" && layout.adminDir === void 0 && layout.runsInOwnDirectories !== !0) return () => Promise.resolve({
    stdout: "",
    stderr: stderr,
    code: 126
  });
  let reachRoots = o ?? TDt(layout),
    screenMemo = probes.screenMemo ?? Zdo();
  return (p, env_2, input_2, encoding, stdoutFd) => Eb(e, p, {
    hardened: !0,
    layout: layout,
    signal: signal_3,
    probes: probes,
    env: env_2,
    input: input_2,
    ...(encoding !== void 0 && {
      encoding: encoding
    }),
    ...(stdoutFd !== void 0 && {
      stdoutFd: stdoutFd
    }),
    ...(reachRoots !== void 0 && {
      reachRoots: reachRoots,
      screenMemo: screenMemo
    }),
    ...(hardenedMaxBuffer !== void 0 && {
      hardenedMaxBuffer: hardenedMaxBuffer
    })
  });
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
    return S.code === 0 && ["tree", "blob"].includes(S.stdout.trim()) ? j("verify", "HEAD names a tree or blob, not a commit") : j("rev-parse", o.stderr || "HEAD is not a commit");
  }
  let base_5 = o.stdout.trim(),
    reader_2 = new rr(nr(e, n), base_5),
    [h, u] = await Promise.all([reader_2.commit(base_5), e(["write-tree", "--ignore-cache-tree"])]);
  if (Ie(h)) return We(h, "rev-parse", "HEAD could not be read back as the commit its id names");
  if (u.code !== 0) return j("write-tree", u.stderr || u.stdout, u);
  let p = h.tree,
    iTree_2 = u.stdout.trim(),
    _ = await Ut(reader_2, p, iTree_2);
  if (Ie(_)) return We(_, "cat-file", "HEAD's or the index's trees could not be read back as what their ids name");
  let staged = _,
    E = await e(["--no-optional-locks", "diff-files", "-z", "--no-renames", "--ignore-submodules=dirty"]),
    B = E.code === 0 ? Na(E.stdout) : null;
  if (B === null) return j("diff-files", E.stderr, E);
  if ([...B, ...staged].some(({
    path: path_31
  }) => path_31.includes("\uFFFD"))) return j("path-encoding", "a changed path is not valid UTF-8");
  let I = await Ct(reader_2, p, B.map(({
    path: path_32
  }) => path_32));
  if (Ie(I)) return We(I, "cat-file", "HEAD's trees to the changed files could not be read back as what their ids name");
  let newId_10 = "0".repeat(p.length),
    A = new Set(B.map(({
      path: path_33
    }) => path_33)),
    working = [...staged.filter(({
      path: path_34
    }) => !A.has(path_34)), ...B.flatMap(item => {
      let z = I.get(item.path);
      if (item.status === "D") return z === void 0 || vi(item, I) ? [] : [{
        path: item.path,
        status: "D",
        oldMode: z.mode.padStart(6, "0"),
        newMode: "000000",
        oldId: z.id,
        newId: newId_10
      }];
      return [{
        path: item.path,
        status: z === void 0 ? "A" : "M",
        oldMode: z === void 0 ? "000000" : z.mode.padStart(6, "0"),
        newMode: item.newMode,
        oldId: z?.id ?? newId_10,
        newId: newId_10
      }];
    })];
  return {
    kind: "inspected",
    inspection: {
      base: base_5,
      baseTree: p,
      iTree: iTree_2,
      staged: staged,
      working: working,
      reader: reader_2,
      namesWindowsCannotHold: U(B, S => vi(S, I))
    }
  };
}
function vi(e, n) {
  return x() === "windows" && e.status === "D" && n.has(e.path) && DFi(e.path) && !e.path.includes("\\") && je(e.path, !0) && !it(e.path);
}
function Ta({
  staged: staged_2,
  working: working_2
}, r) {
  return L([...staged_2, ...working_2].map(({
    path: path_35
  }) => path_35)).sort().flatMap(s => !je(s, r) ? [{
    path: s,
    why: "forged"
  }] : it(s) ? [{
    path: s,
    why: "alias"
  }] : []);
}
async function Ca(e, {
  staged: staged_3,
  working: working_3
}, o, s, a = () => !1) {
  let h = L([...staged_3, ...working_3].map(({
      path: path_36
    }) => path_36)),
    u = h.filter(item => !je(item, s)),
    p = h.filter(item => je(item, s) && it(item)),
    w = new Set([...u, ...p]),
    _ = ({
      path: path_37
    }) => !w.has(path_37) && o(path_37),
    y = staged_3.filter(_),
    E = new Set(y.map(({
      path: path_38
    }) => path_38)),
    B = Ja(Bt, async O => !E.has(O.path) && !a(O.path) && (await zi(e, O, s)) === "unchanged" ? [] : [O]),
    I = (await Promise.all(working_3.filter(_).map(B))).flat(),
    R = L([...y, ...I].filter(({
      status: status_10
    }) => status_10 === "A").map(({
      path: path_39
    }) => path_39)),
    A = new Set(R),
    T = L([...y, ...I].filter(({
      path: path_40,
      status: status_11
    }) => status_11 !== "D" && !A.has(path_40)).map(({
      path: path_41
    }) => path_41)),
    S = new Set([...R, ...T]),
    z = L([...y, ...I].map(({
      path: path_42
    }) => path_42).filter(item => !S.has(item))),
    Y = Ja(Bt, async O => (await br(e, O)) ? [O] : []),
    D = (await Promise.all(z.map(Y))).flat();
  return [...u.map(O => ({
    path: O,
    why: "forged"
  })), ...p.map(O => ({
    path: O,
    why: "alias"
  })), ...R.map(O => ({
    path: O,
    why: "added"
  })), ...T.map(O => ({
    path: O,
    why: "changed"
  })), ...D.map(O => ({
    path: O,
    why: "resurrected"
  }))].sort((itemA, itemB) => itemA.path < itemB.path ? -1 : itemA.path > itemB.path ? 1 : 0);
}
async function Ti(e, n, r, o, s) {
  let a = await Ut(e, n, r);
  if (Ie(a)) return a;
  let h = a.filter(({
      path: path_43,
      status: status_12
    }) => status_12 !== "D" && (!je(path_43, s) || it(path_43) || o(path_43))),
    u = new Map(h.map(({
      path: path_44,
      status: status_13
    }) => [path_44, status_13]));
  return L(h.map(({
    path: path_45
  }) => path_45)).sort().map(p => ({
    path: p,
    why: !je(p, s) ? "forged" : it(p) ? "alias" : u.get(p) === "A" ? "added" : "changed"
  }));
}
var Ba = /invalid object \d+ [0-9a-f]+ for|could not fetch [0-9a-f]+ from promisor remote|lazy fetching disabled|missing blob/,
  Aa = /needs merge|you need to resolve your current index first|unmerged/i;
function Ia(e) {
  let n = Wn(C0e(e).trim());
  return Ba.test(n) ? "object_missing" : Aa.test(n) ? "unmerged" : n.includes("index.lock") ? "index_locked" : void 0;
}
function j(step, n, r) {
  let said = r && Ia(r);
  return {
    kind: "failed",
    step: step,
    detail: Wn(n.trim()),
    ...(said !== void 0 && {
      said: said
    })
  };
}
function Ci(e) {
  return {
    kind: "refused",
    refused: e.map(({
      path: path_46
    }) => ({
      path: path_46,
      why: "same-bytes"
    })),
    decidedOn: "tree"
  };
}
function Oa(e, n) {
  let r = new Set(e.split(`
`));
  return n.filter(item => r.has(`Ignoring path ${item}`));
}
function We(e, n, r) {
  return e.failed === "tampered" ? j("verify", r) : e.failed === "malformed" ? j("malformed-tree", e.dir ?? "") : j(n, r);
}
function Wi(e) {
  return e === void 0 || e === "" ? "the top of the checkout" : `directory '${Oi(e.replace(/[\p{Cc}\p{Cf}']/gu, "?"), 120)}'`;
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
    } : null;
  });
  return r.every(item => item !== null) ? r : null;
}
function Bi(e, n) {
  return e.kind !== "unreadable" && n.kind === "none" && (e.bytes === null ? n.bytes === null : n.bytes !== null && e.bytes.equals(n.bytes)) && $a(e.stamp, n.stamp);
}
function $a(e, n) {
  return e === null || n === null ? e === n : e.ino === n.ino && e.size === n.size && e.mtimeMs === n.mtimeMs && e.ctimeMs === n.ctimeMs;
}
function kn(e) {
  return {
    size: Number(e.size),
    mtimeMs: Number(e.mtimeNs) / 1e6,
    ctimeMs: Number(e.ctimeNs) / 1e6,
    ino: e.ino
  };
}
async function cr(e, n = lt) {
  try {
    return await n(e, {
      bigint: !0
    });
  } catch (error) {
    if (k(error) === "ENOENT" || k(error) === "ENOTDIR") return null;
    throw error;
  }
}
var Da = /(?:^|\s|")[-!]?(?:filter|working-tree-encoding|ident)(?:=|\s|$)/,
  Pa = /^[ \t\r]*(?:\[attr\]|")/,
  Fa = 2048;
function La(e) {
  return e.split(`
`).some(item => Buffer.byteLength(item) >= Fa);
}
function Ma(e) {
  return e.replace(/^\uFEFF/, "").split(`
`).map(item => tt(item, "\x00")).filter(item => !/^[ \t\r]*#/.test(item));
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
  };
}
async function hr(e, {
  shouldStampAbove = !1,
  shouldStopAtLink = !1
} = {}) {
  let o = ae(e, "info"),
    s = ae(o, "attributes"),
    dir = await Ha(o, shouldStampAbove, shouldStopAtLink).catch(() => {
      return;
    });
  if (dir === void 0) return {
    kind: "unreadable",
    bytes: null,
    stamp: null
  };
  if (shouldStopAtLink && dir.link) return {
    kind: "none",
    bytes: null,
    stamp: null,
    dir: dir
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
      let stamp = kn(u),
        w = Number(u.size);
      if (w === 0) return {
        kind: "none",
        bytes: Buffer.alloc(0),
        stamp: stamp,
        dir: dir
      };
      let bytes_2 = Buffer.alloc(w),
        {
          bytesRead: bytesRead_7
        } = await h.read(bytes_2, 0, w, 0);
      if (bytesRead_7 !== w) return {
        kind: "unreadable",
        bytes: null,
        stamp: null
      };
      let E = bytes_2.toString("utf8"),
        B = Ma(E),
        by = La(E) ? "overlong_line" : B.some(item => Pa.test(item)) ? "macro_or_quoted" : B.some(item => Da.test(item)) ? "rule" : void 0;
      return by === void 0 ? {
        kind: "none",
        bytes: bytes_2,
        stamp: stamp,
        dir: dir
      } : {
        kind: "touches",
        by: by,
        bytes: bytes_2,
        stamp: stamp,
        dir: dir
      };
    } finally {
      await h.close();
    }
  } catch (error) {
    return k(error) === "ENOENT" || k(error) === "ENOTDIR" ? {
      kind: "none",
      bytes: null,
      stamp: null,
      dir: dir
    } : {
      kind: "unreadable",
      bytes: null,
      stamp: null
    };
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
    ...(s && {
      above: kn(s)
    })
  };
}
async function Ua(e, n) {
  if (!ya(n.objectsDir) || /[\r\n]/.test(n.objectsDir) || /^["#]/.test(n.objectsDir)) return "the objects directory cannot be named in an alternates file";
  let r = {
    flag: flag,
    mode: 384
  };
  return await ki(ae(e, "objects", "info"), {
    recursive: !0,
    mode: 448
  }), await Promise.all([ki(ae(e, "refs"), {
    mode: 448
  }), dr(ae(e, "HEAD"), `ref: refs/heads/attributes-view
`, r), dr(ae(e, "config"), ["[core]", `	repositoryformatversion = ${n.objectFormat === "sha256" ? 1 : 0}`, `	ignorecase = ${n.caseBlind}`, ...(n.objectFormat === "sha256" ? ["[extensions]", "\tobjectformat = sha256"] : []), ""].join(`
`), r), dr(ae(e, "objects", "info", "alternates"), `${n.objectsDir}
`, r)]), null;
}
async function Wa(e, GIT_INDEX_FILE_9, r) {
  let o = r.filter(item => item.kind === "symlink"),
    s = [],
    ids = new Map();
  for (let u of o) {
    let p = u.target.toString("utf8");
    if (!Buffer.from(p, "utf8").equals(u.target)) return j("path-encoding", `${u.path}: link target is not valid UTF-8`);
    let w = await e(["hash-object", "-w", "--stdin"], void 0, p);
    if (w.code !== 0) return j("hash-object", w.stderr, w);
    s.push(`${mode_6} ${w.stdout.trim()}	${u.path}`), ids.set(u.path, w.stdout.trim().toLowerCase());
  }
  if (s.length === 0) return {
    kind: "laid",
    ids: ids
  };
  let h = await e(["update-index", "-z", "--index-info"], {
    GIT_INDEX_FILE: GIT_INDEX_FILE_9
  }, s.map(item => `${item}\x00`).join(""));
  return h.code === 0 ? {
    kind: "laid",
    ids: ids
  } : j("update-index", h.stderr, h);
}
async function za(e, GIT_INDEX_FILE_10, r, o) {
  let s = await r(["--ignore-skip-worktree-entries"], GIT_INDEX_FILE_10);
  if ((s.exitCode === vn ? await r([], GIT_INDEX_FILE_10) : s).code !== 0) return null;
  let h = new Set(o),
    u = new Map(),
    p = await At(`${GIT_INDEX_FILE_10}.listing`, Ebr, 384);
  try {
    if ((await e(["ls-files", "-s", "-z"], {
      GIT_INDEX_FILE: GIT_INDEX_FILE_10
    }, void 0, void 0, p.fd)).code !== 0) return null;
    let _ = "";
    await vbr(p, y => {
      let E = (_ + y.toString("latin1")).split("\x00");
      _ = E.pop() ?? "";
      for (let B of E) {
        let I = B.indexOf("\t"),
          [mode_7, A, T] = I === -1 ? [] : B.slice(0, I).split(" "),
          S = Buffer.from(B.slice(I + 1), "latin1").toString("utf8");
        if (mode_7 !== void 0 && A !== void 0 && T === "0" && h.has(S)) u.set(S, {
          mode: mode_7,
          id: A.toLowerCase()
        });
      }
    });
  } finally {
    await p.close().catch(() => {}), await It(`${GIT_INDEX_FILE_10}.listing`, {
      force: !0
    }).catch(() => {});
  }
  return o.every(item => u.has(item)) ? u : null;
}
async function br(e, n) {
  if (n.includes("\uFFFD") || (await Ye(e, n)) !== "clear") return !0;
  try {
    return !(await lt(ae(e, n))).isDirectory();
  } catch (error) {
    let o = k(error);
    return o !== "ENOENT" && o !== "ENOTDIR";
  }
}
async function zi(e, {
  path: path_47,
  status: status_14,
  oldMode: oldMode_2,
  newMode: newMode_5,
  oldId: oldId,
  newId: newId_11
}, u, p = mr, w) {
  if (status_14 !== "M" || oldMode_2 !== newMode_5 || !ji.test(newId_11) || oldId.length !== 40 || path_47.includes("\uFFFD")) return "changed";
  if ((await Ye(e, path_47)) !== "clear") return "changed";
  try {
    let _ = await un(e, path_47, u);
    if (_.kind === "symlink") return newMode_5 === mode_6 && (Ri(_.target) === oldId || x() === "windows" && Ri(await wa(ae(e, path_47), {
      encoding: "buffer"
    })) === oldId) ? "unchanged" : "changed";
    if (_.kind !== "file") return _.kind === "refused" ? "open_refused" : "changed";
    let {
      handle: handle_2,
      size: size_2
    } = _;
    try {
      if (!Gi.includes(newMode_5) || size_2 > p) return "changed";
      let B = await handle_2.stat({
          bigint: !0
        }),
        I = xn("sha1").update(`blob ${size_2}\x00`),
        R = Buffer.allocUnsafe(Math.min(size_2, 1048576)),
        A = 0;
      while (A < size_2) {
        if (w?.aborted) return "changed";
        let {
          bytesRead: bytesRead_8
        } = await handle_2.read(R, 0, Math.min(R.length, size_2 - A), A);
        if (bytesRead_8 === 0) return "changed";
        I.update(R.subarray(0, bytesRead_8)), A += bytesRead_8;
      }
      if (I.digest("hex") !== oldId) return "changed";
      let T = await handle_2.stat({
        bigint: !0
      });
      return B.size === BigInt(size_2) && T.size === B.size && T.mtimeNs === B.mtimeNs && T.ctimeNs === B.ctimeNs && T.nlink === 1n ? "unchanged" : "changed";
    } finally {
      await handle_2.close();
    }
  } catch {
    return "changed";
  }
}
var Ya = /^ccr-seed-([0-9]+)-[0-9a-f]{12}\.index(?:\.lock)?$/,
  _n = /env|netrc|npmrc|yarnrc|pypirc|pgpass|\.cnf|terraform|tfvars|tfstate|boto|s3cfg|credential|gitconfig|mcp|claude|config|bash|profile|zsh|zlog|fish|history|consolehost|\.(?:pem|key|p12|pfx|keystore|jks|kdbx|ovpn|vars|ssh|aws|azure|gnupg|kube|docker|git)|_(?:rsa|dsa|ecdsa|ed25519)|secret|settings|gradle\.properties|device-keys|service.?account|deploy_key|htpasswd|htdigest|vault[-_](?:token|pass)|dockercfg|msmtprc|fetchmailrc|sentryclirc|clasprc|transifexrc|databrickscfg|remote-sync|wakatime/i,
  Yi = `[${yuo.replace(/[\\\]^-]/g, "\\$&")}]|_${Dgs}_`,
  Ka = L(bpt.map(([e]) => e)),
  regExp = new RegExp(`(?:^|/)(?:(?:${Yi})[^/]*)?(?:\\.(?:ssh|aws|azure|gnupg|kube|docker|config|cargo|gem|m2|gradle|claude)|documents|appdata|library|(?:${Ka.join("|")})(?![a-z0-9-]))|\\.git`, "i"),
  Ii = yuo.replace(/[\\\]^-]/g, "\\$&"),
  regExp_2 = new RegExp(`(?:[${Ii}][^/${Ii}]*){4}|${Lgs}`, "i"),
  regExp_3 = new RegExp(`(?:^|/)[^/]{${d_e + 1}}`);
function qa() {
  let e = new Map(),
    n = new Map(),
    r = new Map();
  return o => {
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
        R = B ? p.split("/").map((item, index) => {
          let S = I[index];
          if (S !== void 0 && !pr(item, S)) return "passed";
          let z = n.get(item) ?? (S !== void 0 && !Ni(item, S) || !Ix(`${item}/.bak`) ? "passed" : Ix(`${item}/x`) ? "withheld" : "asked");
          return n.set(item, z), z;
        }) : [];
      w = R.includes("withheld") ? "withheld" : R.includes("asked") || a !== -1 && (regExp.test(h) || En(regExp, p)) ? "asked" : "passed", e.set(p, w);
    }
    if (w !== "passed") return w === "withheld" || Ix(o);
    let _ = s.slice(a + 1),
      y = o.slice(u + 1);
    if (a !== -1 && (regExp_4.test(_) || regExp_4.test(y)) && (_n.test(h) || En(_n, p))) return Ix(o);
    if (!_n.test(_) && !Ni(y, _) && !En(_n, y)) return !1;
    let E = r.get(y);
    if (E === void 0) E = Ix(y), r.set(y, E);
    return E;
  };
}
function En(e, n) {
  return n.includes(":") && n.split("/").filter(item => item.includes(":")).some(item => {
    let o = B0e(item);
    return r0t(item).some(item => o.some(a => e.test(item(a))));
  });
}
function pr(e, n) {
  return e.length > d_e && regExp_3.test(e) || regExp_2.test(e) || n !== e && regExp_2.test(n) || En(regExp_2, e);
}
function Ni(e, n) {
  return pr(e, n) && (e.length > d_e || B0e(e).length > 1 || r0t(e).some(item => B0e(item(e)).length > 1));
}
var Va = /[^\x20-\x7e]/gu,
  Za = /^[\x20-\x7e]*$/,
  regExp_4 = new RegExp(`^(?:${Yi})`, "i");
async function Di(e, n) {
  let r;
  try {
    r = await At(e, Cc());
  } catch (error) {
    let s = k(error);
    return s === "ELOOP" || s === "ENOENT" || s === "ENOTDIR" ? {
      kind: "tamper",
      detail: `something other than the scratch index this build wrote stands at its name (${s})`
    } : {
      kind: "disk",
      detail: `the scratch index could not be opened (${s ?? "an error"})`
    };
  }
  try {
    let o = await r.stat();
    if (!o.isFile() || o.nlink !== 1) return {
      kind: "tamper",
      detail: "something other than the scratch index this build wrote stands at its name"
    };
    let s = await At(n, flag, 384);
    try {
      let a = Buffer.allocUnsafe(1048576);
      for (let h = 0; h < o.size;) {
        let {
          bytesRead: bytesRead_9
        } = await r.read(a, 0, Math.min(a.length, o.size - h), h);
        if (bytesRead_9 === 0) return {
          kind: "tamper",
          detail: "the scratch index changed while it was carried off"
        };
        await s.write(a, 0, bytesRead_9), h += bytesRead_9;
      }
      await s.utimes(o.atime, o.mtime);
    } finally {
      await s.close().catch(() => {});
    }
    return null;
  } catch (error) {
    return {
      kind: "disk",
      detail: `the scratch index could not be carried off (${k(error) ?? d(error)})`
    };
  } finally {
    await r.close().catch(() => {});
  }
}
var Ki = 600000,
  Qa = /^claude-seed-index-([0-9]+)-/;
async function ed(e) {
  for (let n = 0;; n++) try {
    return await Rn(e), null;
  } catch (error) {
    let o = k(error);
    if (o === "ENOENT") return null;
    if (n >= 3 || o !== "EBUSY" && o !== "EPERM" && o !== "EACCES") return o ?? d(error);
    await J(50);
  }
}
async function td(e) {
  try {
    await Promise.all((await Mi(e)).map(async item => {
      let r = Qa.exec(item)?.[1];
      if (r === void 0) return;
      let o = ae(e, item),
        s = await lt(o);
      if (s.isDirectory() && Date.now() - s.mtimeMs > Ki && !Xi(Number(r))) await It(o, {
        recursive: !0,
        force: !0
      });
    }));
  } catch {}
}
async function nd(e) {
  try {
    await Promise.all((await Mi(e)).map(async item => {
      let r = Ya.exec(item)?.[1];
      if (r === void 0) return;
      let o = ae(e, item);
      if (Date.now() - (await lt(o)).mtimeMs > Ki && !Xi(Number(r))) await It(o, {
        force: !0
      });
    }));
  } catch {}
}
function Xi(e) {
  try {
    return process.kill(e, 0), !0;
  } catch (error) {
    return k(error) === "EPERM";
  }
}
async function Pi(e, n) {
  return (await rd(e, n)).notDirectories;
}
async function rd(e, n) {
  let r = Ja(Bt, async s => (await Ye(e, s)) === "clear" ? id(ae(e, s)) : "other"),
    o = await Promise.all(n.map(r));
  return {
    notDirectories: n.filter((item, index) => o[index] !== "directory"),
    special: n.filter((item, index) => o[index] === "special")
  };
}
async function id(e) {
  try {
    let n = await lt(e);
    return n.isDirectory() ? "directory" : n.isFile() || n.isSymbolicLink() ? "other" : "special";
  } catch {
    return "other";
  }
}
async function od(e, n) {
  let [r, o] = await Promise.all([e(["symbolic-ref", "-q", "HEAD"]), e(["rev-list", "--max-count=1", "--format=%h %s", n, "--"])]),
    s = r.code === 0 ? r.stdout.trim().replace(/^refs\/heads\//, "") : "(no branch)",
    a = o.code === 0 ? o.stdout.trim().split(`
`).at(-1) ?? "" : "";
  return `${s}: ${a}`;
}
async function sd(e, n, r, o, s) {
  let a = e.entries.filter(item => (item.kind === "changed" || item.kind === "absent") && n.has(item.path)).map(({
    path: path_48
  }) => path_48);
  if (a.length === 0) return e;
  let h = new Set(e.entries.flatMap(item => item.kind === "absent" && n.has(item.path) ? [item.path] : [])),
    u = Gt(a),
    p = [...a, ...u.filter(item => n.has(item))],
    w = new Set(e.entries.flatMap(item => item.kind === "changed" ? [item.path] : [])),
    _ = await Promise.all(u.map(item => Li(ae(o, item))));
  await Promise.all(u.map(item => Rn(ae(o, item)).catch(() => {})));
  let y = await s(p);
  if ("refused" in y) return y;
  let E = await Promise.all(u.map(item => Li(ae(o, item)))),
    B = new Set(y.copies.flatMap(item => item.kind === "file" ? [item.path] : [])),
    I = u.find((item, index) => w.has(item) ? !B.has(item) : _[index] === null || _[index] !== E[index]);
  if (I !== void 0) return {
    refused: `${I}: changed while it was being read`,
    tooLarge: !1,
    momentary: !0
  };
  let R = new Set([...a, ...u]),
    A = new Set(a);
  return {
    entries: [...e.entries.filter(item => !R.has(item.path)), ...y.entries.filter(item => R.has(item.path)).map(item => item.kind === "absent" && A.has(item.path) && (!h.has(item.path) || r.has(item.path)) ? {
      kind: "changed",
      path: item.path
    } : item)],
    copies: [...e.copies.filter(item => !R.has(item.path)), ...y.copies]
  };
}
async function Fi(e, n, r, o) {
  return o.length === 0 ? {
    code: 0,
    stderr: ""
  } : e(["update-index", "-z", "--index-info"], n, o.map(item => `0 ${"0".repeat(r.length)}	${item}\x00`).join(""));
}
async function zt(e, n, r) {
  let o = await Promise.all(kbr(r).map(item => e(["-c", "core.precomposeUnicode=false", "ls-files", "-z", "-v", "--", ...item], {
    ...N7t,
    ...n
  })));
  if (o.some(item => item.code !== 0)) return null;
  let s = o.flatMap(item => item.stdout.split("\x00")).flatMap(item => item.length > 2 ? [{
      tag: item[0],
      path: item.slice(2)
    }] : []),
    skipWorktree = new Set(s.flatMap(({
      tag: tag,
      path: path_49
    }) => tag === "S" || tag === "s" ? [path_49] : [])),
    h = new Set(s.map(({
      path: path_50
    }) => path_50));
  return {
    skipWorktree: skipWorktree,
    unseen: new Set([...skipWorktree, ...s.flatMap(({
      tag: tag_2,
      path: path_51
    }) => tag_2 !== tag_2.toUpperCase() ? [path_51] : [])]),
    absent: new Set(r.filter(item => !h.has(item)))
  };
}
async function Li(e) {
  try {
    return xn("sha1").update(await pa(e)).digest("hex");
  } catch (error) {
    let r = k(error);
    return r === "ENOENT" || r === "ENOTDIR" ? "absent" : null;
  }
}
var ud = 104857600,
  expiresInSeconds = 3600,
  fd = 10,
  yo = 120,
  Jt = 300,
  hd = 180000,
  error_2 = "This partial clone does not hold every file of its working tree locally (a sparse checkout, or blobs never downloaded), so it cannot be uploaded without fetching from its remote, which the upload does not do \u2014 a full clone, made without --filter, would upload. If no file is missing from the working tree, the index names an object that this repository has lost: `git fsck --name-objects` prints it as \u201Cmissing blob <id> (:<path>)\u201D, and `git rm --cached <path>` then `git add <path>` stores it again",
  kr = 32,
  gd = ["rev-parse", "cat-file", "diff-files"];
function xr() {
  return v("tengu_ccr_bundle_max_bytes", null) ?? ud;
}
var env_3 = {
    ...env_6,
    ...Obr
  },
  _o = 64,
  maxBuffer = 65536,
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
          bytesRead: bytesRead_10
        } = await n.read(o, 0, r.size, 0);
      if (bytesRead_10 !== r.size) return null;
      let a = o.toString("utf8").split(/\r?\n/).filter(item => item !== "");
      return a.length > _o || a.some(item => !/^[0-9a-f]{40,64}$/.test(item)) ? null : a;
    } finally {
      await n.close();
    }
  } catch {
    return null;
  }
}
var yd = e => tt(e, `

`).split(`
`).some(item => item.startsWith("parent ")),
  bd = {
    complete: "HEAD's history is complete \u2014 bundling it as usual, without the widest tier",
    cut: "HEAD's history crosses the boundary \u2014 bundling a snapshot of the working tree, without history",
    unborn: "HEAD is unborn and no local branch or tag is cut \u2014 trying the widest tier (branches and tags), the only one that can carry it",
    unborn_cut: "HEAD is unborn and a local branch or tag is cut \u2014 nothing can be bundled"
  };
async function _d(cwd, n, r = null, probes_2 = fze()) {
  let s = ["rev-parse", "--is-shallow-repository", "--git-path", "shallow"],
    a = r ? await Eb(cwd, s, {
      hardened: !0,
      layout: r.layout,
      signal: n,
      probes: probes_2
    }) : await Tbr([...yn, ...Mce, ...s], {
      cwd: cwd,
      abortSignal: n,
      ...Xdo()
    }),
    [h, u] = a.stdout.split(/\r?\n/);
  if (a.code !== 0 || h !== "true") return "not_shallow";
  let p = B => r ? Eb(cwd, B, {
      hardened: !0,
      layout: r.layout,
      signal: n,
      probes: probes_2,
      env: env_3
    }) : Tbr([...yn, ...Mce, ...B], {
      cwd: cwd,
      ...Xdo(env_3),
      abortSignal: n,
      maxBuffer: maxBuffer
    }),
    _ = (await p(["rev-parse", "--verify", "--quiet", "HEAD^{commit}"])).exitCode === 1,
    y = _ ? "unborn_cut" : "cut",
    E = await wd(wo(cwd, u ?? ut(".git", "shallow")));
  if (E === null) return y;
  for (let B of E) {
    if (_) {
      let R = await p(["for-each-ref", "--count=1", "--format=%(refname)", `--contains=${B}`, "refs/heads/", "refs/tags/"]);
      if (R.exitCode === 0 && R.stdout.trim() === "") continue;
    } else {
      let R = await p(["merge-base", "--is-ancestor", B, "HEAD"]);
      if (R.exitCode === 1) continue;
      if (R.exitCode !== 0) return y;
    }
    let I = await p(["cat-file", "commit", B]);
    if (I.exitCode !== 0 || yd(I.stdout)) return y;
  }
  return _ ? "unborn" : "complete";
}
var Zi = 5000,
  Br = 100,
  Ar = 5000000;
async function ko(e, hardened, layout_2, signal_4, s, probes_3) {
  let h = await Eb(e, ["count-objects", "-v"], {
      hardened: hardened,
      layout: layout_2,
      signal: signal_4,
      probes: probes_3,
      ...(layout_2?.borrowedObjects !== void 0 && {
        env: {
          GIT_OBJECT_DIRECTORY: layout_2.borrowedObjects
        }
      })
    }),
    {
      sizeBytes: sizeBytes,
      inPackCount: inPackCount
    } = Eo(h);
  if (sizeBytes === null || s === null || sizeBytes <= s || sizeBytes > Br * s || inPackCount !== null && inPackCount > Ar) return {
    sizeBytes: sizeBytes,
    inPackCount: inPackCount
  };
  let w = await Eb(e, ["config", "-z", "--list"], {
    hardened: hardened,
    layout: layout_2,
    signal: signal_4,
    probes: probes_3
  });
  if (w.code !== 0 || $r(w.stdout)) return {
    sizeBytes: sizeBytes,
    inPackCount: inPackCount
  };
  let signal_5 = signal_4 === void 0 ? AbortSignal.timeout(Zi) : AbortSignal.any([signal_4, AbortSignal.timeout(Zi)]),
    y = await Eb(e, ["rev-list", "--disk-usage", "--objects", "--missing=allow-any", "--all"], {
      hardened: hardened,
      layout: layout_2,
      signal: signal_5,
      probes: probes_3,
      ...(!hardened && {
        env: {
          GIT_NO_LAZY_FETCH: "1"
        }
      })
    }),
    E = y.code === 0 && /^\d+\s*$/.test(y.stdout) ? Number(y.stdout.trim()) : null;
  if (E !== null && E < sizeBytes) t(`[gitBundle] packs hold ${sizeBytes} bytes but only ${E} are reachable: sizing the tiers by the reachable figure`);
  return {
    sizeBytes: E !== null && E < sizeBytes ? E : sizeBytes,
    inPackCount: inPackCount
  };
}
function Eo({
  code: code,
  stdout: stdout
}) {
  if (code !== 0) return {
    sizeBytes: null,
    inPackCount: null
  };
  let r = stdout.match(/^size-pack:\s*(\d+)/m),
    o = stdout.match(/^in-pack:\s*(\d+)/m);
  return {
    sizeBytes: r ? Number(r[1]) * 1024 : null,
    inPackCount: o ? Number(o[1]) : null
  };
}
async function G6o(e) {
  let n = e?.gitRoot ?? fr(pe());
  if (!n) return {
    tooLarge: !1,
    sizeBytes: null,
    inPackCount: null
  };
  let {
    sizeBytes: sizeBytes_2,
    inPackCount: inPackCount_2
  } = e === void 0 ? await ko(n, !1, void 0, void 0, null, fze()) : Eo(await ent(e.spawn([...yn, "count-objects", "-v"]), {
    abortSignal: e.signal,
    preserveOutputOnError: !1,
    stdin: "ignore"
  }));
  if (sizeBytes_2 === null) return {
    tooLarge: !1,
    sizeBytes: null,
    inPackCount: inPackCount_2
  };
  let s = xr();
  return {
    tooLarge: sizeBytes_2 > 3 * s && (sizeBytes_2 > Br * s || inPackCount_2 !== null && inPackCount_2 > Ar),
    sizeBytes: sizeBytes_2,
    inPackCount: inPackCount_2
  };
}
async function Ro(e, n, r) {
  let {
      hardened: hardened_2,
      layout: layout_3,
      signal: signal_6,
      probes: probes_4
    } = r,
    u = [r.seedRefs.stash, r.seedRefs.root],
    p = r.hasStash ? [r.seedRefs.stash] : [],
    w = ["--glob=refs/heads/*", "--glob=refs/tags/*", ...(r.headResolves ? ["HEAD"] : [])],
    _ = async (scope, K) => {
      let shown = layout_3 === void 0 ? void 0 : await zd(e, layout_3, u, signal_6, probes_4);
      if (shown === null) return {
        ok: !1,
        ...kt()
      };
      let Ce = await Eb(e, [...(hardened_2 ? [] : Mce), "bundle", "create", n, ...K, ...p, "--"], {
        hardened: hardened_2,
        layout: layout_3,
        signal: signal_6,
        probes: probes_4,
        ...(!hardened_2 && {
          env: env_3
        })
      });
      if (layout_3 && !(await uze(layout_3, u))) return {
        ok: !1,
        ...kt()
      };
      if (Ce.code !== 0) {
        if (!hardened_2 && !signal_6?.aborted) {
          let Re = await Eb(e, ["config", "-z", "--list"], {
            hardened: hardened_2,
            layout: layout_3,
            signal: signal_6,
            probes: probes_4
          });
          if (Re.code === 0 && $r(Re.stdout)) return t(`[gitBundle] partial clone: git bundle create ${K.join(" ")} failed (${Ce.code}), bundling a snapshot of the working tree instead: ${Et(Ce.stderr, hardened_2)}`), {
            ...(await Ro(e, n, {
              ...r,
              forceScope: "squashed",
              partialClone: !0
            })),
            promisorFallback: !0
          };
        }
        return Cn(`git bundle create ${hardened_2 ? Et(K.join(" "), !0) : K.join(" ")}`, Ce, hardened_2);
      }
      let {
        size: size_3
      } = await Vi(n);
      if (size_3 <= r.maxBytes) {
        let Re = r.hasStash ? await Qi(e, n, r.relabelledPath, new Map([[r.seedRefs.stash, yt]]), {
          hardened: hardened_2,
          layout: layout_3,
          signal: signal_6,
          probes: probes_4
        }) : null;
        if (Re !== null && !Re.ok) return eo(Re.error);
        let path_52 = Re === null ? n : r.relabelledPath,
          W = hardened_2 ? await uo(e, path_52, [...K, ...(r.hasStash ? [yt] : [])], {
            layout: layout_3,
            signal: signal_6,
            probes: probes_4,
            expected: r.stashCommit === void 0 ? {} : {
              [yt]: r.stashCommit
            },
            shown: shown
          }) : r.bindJudgedStash === !0 && r.hasStash && r.stashCommit !== void 0 ? await lo(e, path_52, yt, r.stashCommit, signal_6) : Tr;
        if (layout_3 && !(await uze(layout_3, u))) return {
          ok: !1,
          ...kt()
        };
        return co(W, hardened_2) ?? {
          ok: !0,
          path: path_52,
          size: Re === null ? size_3 : Re.sizeBytes,
          scope: scope
        };
      }
      return t(`[gitBundle] ${scope} bundle is ${(size_3 / 1024 / 1024).toFixed(1)}MB (> ${(r.maxBytes / 1024 / 1024).toFixed(0)}MB cap), trying the next tier`), null;
    },
    {
      sizeBytes: sizeBytes_3,
      inPackCount: inPackCount_3
    } = await ko(e, hardened_2, layout_3, signal_6, r.forceScope === void 0 ? r.maxBytes : null, probes_4),
    B = r.forceScope === "squashed",
    I = sizeBytes_3 !== null && sizeBytes_3 > r.maxBytes,
    R = B || r.skipAllRefs || I,
    A = sizeBytes_3 !== null && sizeBytes_3 > 3 * r.maxBytes,
    T = B || A,
    S = A && (sizeBytes_3 !== null && sizeBytes_3 > Br * r.maxBytes || inPackCount_3 !== null && inPackCount_3 > Ar);
  if (B) t("[gitBundle] forceScope=squashed \u2014 skipping the all-branches and HEAD tiers");else if (I) t(r.currentBranchOnly ? `[gitBundle] size-pack ${(sizeBytes_3 / 1024 / 1024).toFixed(0)}MB vs ${(r.maxBytes / 1024 / 1024).toFixed(0)}MB cap; ${T ? "skipping the branch tier" : "trying the branch tier"}${S ? ", skipping squashed" : ""}` : `[gitBundle] size-pack ${(sizeBytes_3 / 1024 / 1024).toFixed(0)}MB > ${(r.maxBytes / 1024 / 1024).toFixed(0)}MB cap; skipping all-branches${T ? " and HEAD" : ""}${S ? " and squashed" : ""}`);
  if (r.currentBranchOnly) {
    let ie = await Eb(e, ["rev-parse", "--verify", "--quiet", "--symbolic-full-name", "HEAD"], {
      hardened: hardened_2,
      layout: layout_3,
      signal: signal_6,
      probes: probes_4
    });
    if (ie.exitCode === 1) return {
      ok: !1,
      error: "The current branch has no commits yet",
      failReason: "empty_repo"
    };
    if (ie.code !== 0) return Cn("git rev-parse HEAD", ie, hardened_2);
    if (!T) {
      let K = ie.stdout.trim(),
        _e = K === "HEAD" ? await _("head", ["HEAD"]) : await _("current_branch", [K, "HEAD"]);
      if (_e !== null) return _e;
    }
  } else {
    if (!R) {
      let ie = await _("all", w);
      if (ie !== null) return ie;
    }
    if (!T) {
      let ie = await _("head", ["HEAD"]);
      if (ie !== null) return ie;
    }
  }
  if (S) return {
    ok: !1,
    error: `This repository is too large to upload: its git history is ${Bn(sizeBytes_3)}, and an upload can be at most ${Bn(r.maxBytes)}`,
    failReason: "too_large",
    sizeBytes: sizeBytes_3 ?? void 0
  };
  let z = hardened_2 && !r.hasStash ? await Wd(e, layout_3, u, signal_6, probes_4) : void 0;
  if (z === null) return {
    ok: !1,
    ...kt()
  };
  if (hardened_2 && !r.hasStash && z === void 0) return {
    ok: !1,
    error: "git rev-parse HEAD^{tree} failed: HEAD names no commit",
    failReason: "git_error"
  };
  let env_4 = {
      ...env_3,
      GIT_NO_LAZY_FETCH: "1"
    },
    env_5 = {
      ...(hardened_2 ? {} : env_4),
      ...Sn
    },
    H = r.hasStash ? `${r.stashCommit ?? r.seedRefs.stash}^{tree}` : z ?? "HEAD^{tree}",
    O = [];
  if (r.baseRef) {
    let [ie, K] = await Promise.all([H, `${r.baseRef}^{tree}`].map(item => Eb(e, [...(hardened_2 ? [] : RMn), "rev-parse", item], {
      hardened: hardened_2,
      layout: layout_3,
      signal: signal_6,
      probes: probes_4,
      ...(!hardened_2 && {
        env: env_4
      })
    })));
    if (ie?.code === 0 && ie.stdout.trim() === K?.stdout.trim()) return {
      ok: !1,
      error: r.leftOutCount > 0 ? `It doesn't look like you have any new commits or changes to review: the only uncommitted changes here are to ${r.leftOutCount} ${P(r.leftOutCount, "file")} that ${P(r.leftOutCount, "stays", "stay")} on this machine (named like credentials or keys, ${r.withheldByRules ? "covered by a Read rule or a sandbox read-deny setting of yours, linked from your Claude Code configuration, " : ""}hard-linked to another file, kept by a git filter such as LFS, or still being written while read) and ${P(r.leftOutCount, "is", "are")} not uploaded. Stage or commit any other work first.` : "It doesn't look like you have any new commits or changes to review. Stage or commit them first?",
      failReason: "no_changes"
    };
    let _e = await Eb(e, [...(hardened_2 ? [] : RMn), "commit-tree", `${r.baseRef}^{tree}`, "-m", "seed-base"], {
      hardened: hardened_2,
      layout: layout_3,
      signal: signal_6,
      probes: probes_4,
      env: env_5
    });
    if (_e.code === 0) O = ["-p", _e.stdout.trim()];else t(`[gitBundle] baseRef commit-tree failed (${_e.code}), squashing without parent: ${Et(_e.stderr, hardened_2)}`);
  }
  let me = await Eb(e, [...(hardened_2 ? [] : RMn), "commit-tree", H, ...O, "-m", "seed"], {
    hardened: hardened_2,
    layout: layout_3,
    signal: signal_6,
    probes: probes_4,
    env: env_5
  });
  if (me.code !== 0) return Cn("git commit-tree", me, hardened_2);
  let rootCommit = me.stdout.trim();
  if (layout_3 && !(await uze(layout_3, u))) return {
    ok: !1,
    ...kt()
  };
  let ve = await An(e, [r.seedRefs.root, rootCommit], {
    hardened: hardened_2,
    layout: layout_3,
    probes: probes_4,
    ...(hardened_2 && {
      signal: signal_6
    })
  });
  if (hardened_2 && signal_6?.aborted) return {
    ok: !1,
    error: "Bundle upload aborted",
    failReason: "git_error"
  };
  if (ve.code !== 0) return {
    ok: !1,
    ...Io(ve.stderr, layout_3?.adminDir),
    heldSeedRef: {
      exitCode: ve.code
    }
  };
  let le = await Eb(e, [...(hardened_2 ? [] : Mce), "bundle", "create", n, r.seedRefs.root, "--"], {
    hardened: hardened_2,
    layout: layout_3,
    signal: signal_6,
    probes: probes_4,
    ...(!hardened_2 && {
      env: env_4
    })
  });
  if (layout_3 && !(await uze(layout_3, u))) return {
    ok: !1,
    ...kt()
  };
  if (le.code !== 0) return {
    ok: !1,
    ...(r.partialClone ? {
      error: error_2,
      failReason: "git_error"
    } : Cn("git bundle create for the squashed root", le, hardened_2))
  };
  let {
    size: Te
  } = await Vi(n);
  if (Te <= r.maxBytes) {
    let ie = await Qi(e, n, r.relabelledPath, new Map([[r.seedRefs.root, bt]]), {
      hardened: hardened_2,
      layout: layout_3,
      signal: signal_6,
      probes: probes_4
    });
    if (!ie.ok) return eo(ie.error);
    let K = hardened_2 ? await uo(e, r.relabelledPath, [bt], {
      layout: layout_3,
      signal: signal_6,
      probes: probes_4,
      expected: {
        [bt]: rootCommit
      },
      shown: new Map()
    }) : r.bindJudgedStash === !0 ? await lo(e, r.relabelledPath, bt, rootCommit, signal_6) : Tr;
    if (layout_3 && !(await uze(layout_3, u))) return {
      ok: !1,
      ...kt()
    };
    return co(K, hardened_2) ?? {
      ok: !0,
      path: r.relabelledPath,
      size: ie.sizeBytes,
      scope: "squashed",
      rootCommit: rootCommit
    };
  }
  return {
    ok: !1,
    error: `This repository is too large to upload: even without its history it is ${Bn(Te)}, and an upload can be at most ${Bn(r.maxBytes)}`,
    failReason: "too_large",
    sizeBytes: Te
  };
}
async function Qi(e, n, r, o, s) {
  let a = await si(n, r, o, s.signal);
  if (!a.ok) return a;
  let h = await Eb(e, ["bundle", "list-heads", r], s);
  return h.code === 0 ? a : {
    ok: !1,
    error: `git bundle list-heads exited ${h.code}: ${Et(h.stderr, s.hardened)}`
  };
}
function eo(e) {
  return {
    ok: !1,
    error: `Could not prepare the upload of this working tree (${e}). Retry; if it keeps failing, check that the temporary directory has room for a second copy of the bundle and that nothing else is writing to this checkout.`,
    failReason: "git_error"
  };
}
function Ir(e) {
  return e.detail === "git_file" && e.gitDir === "";
}
function So(e) {
  return e.misplaced === "linked_worktree" || vo[e.misplaced] !== void 0 || Ir(e);
}
async function kd(e, n, r, o) {
  let s = (notThePreviousWay, refusedAs = n) => ({
    handedBack: !1,
    refusedAs: refusedAs,
    notThePreviousWay: notThePreviousWay
  });
  if (r !== null) return s(r);
  let a = E => {
    let B = E === null ? null : eco(E),
      I = o ?? (E === null || B === null ? null : `${Or(B, E)} and this checkout\u2019s git directory (${Ee(E)}) is inside it, so a Claude Code session started there can write that directory\u2019s configuration${n.misplaced === "git_file" ? " \u2014 start from an ordinary clone instead" : ""}`);
    return I === null ? {
      handedBack: !0
    } : {
      ...s(I),
      belowHomeCheckout: !0
    };
  };
  if (Ir(n)) {
    let E = await Ao(e);
    return s(E === "link" ? "its .git entry is a symbolic link, which this checkout\u2019s own session can re-point and nothing pins in place, so where it leads when that capture runs cannot be bound to this tree \u2014 start from an ordinary clone instead" : E === "second_name" ? "its .git pointer file has a second name (a hard link), so what it names cannot be trusted between this read and git\u2019s \u2014 remove the other name, or start from an ordinary clone" : "its .git entry is a pointer file this upload could not follow (not the one gitdir line git writes), so where it leads cannot be judged \u2014 start from an ordinary clone instead");
  }
  if (n.gitDir !== "" && (n.misplaced === "linked_worktree" || n.detail === "git_file")) {
    if ((await Pbr(e)).some(item => gy(item, n.gitDir))) return s(n.misplaced === "linked_worktree" ? `its .git file names a worktree entry under a temporary directory (${Ee(n.gitDir)}), where sessions write \u2014 run git worktree repair if this tree was moved, or start from the repository\u2019s main checkout` : `its .git file names a git directory under a temporary directory (${Ee(n.gitDir)}), where sessions write \u2014 start from an ordinary clone of the repository`);
  }
  if (n.detail === "git_file" && n.gitDir !== "") {
    let E = EMn(n.gitDir)[0];
    if (E !== void 0) return s(`its git directory (${Ee(n.gitDir)}) lies inside another checkout (${Ee(E)}), whose Claude Code sessions can write its configuration \u2014 start from an ordinary clone instead`);
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
      entry: entry,
      repository: p
    } = h,
    misplaced = (entry === null ? null : await Rbr(entry)) ?? (await Rbr(p));
  if (misplaced !== null) return s(xo[misplaced], {
    ...n,
    misplaced: misplaced,
    commonDir: p
  });
  if (entry === null && (await To(p))) return s("its git directory holds a commondir file, which git writes only in a linked working tree\u2019s entry and which would send that capture to another repository\u2019s configuration \u2014 start from an ordinary clone", {
    ...n,
    detail: "common_dir"
  });
  if (entry !== null && (await Sms(entry)) !== "absent") return s(to.worktree_config, {
    ...n,
    misplaced: "linked_worktree",
    detail: "worktree_config"
  });
  let _ = a(p);
  if (!_.handedBack) return _;
  let y = await W0i(p, e, entry !== null);
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
  };
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
  work_tree = "its git configuration points the work tree somewhere else (core.worktree), so that capture would read the directory it names rather than this one; remove core.worktree or start from an ordinary clone",
  vo = {
    ...xo,
    included_config: "a cloud session could change a file that git reads this checkout\u2019s configuration from, so that capture would run under whatever is put there",
    many_includes: "its git configuration pulls in more include files than are followed, so that capture would run every program those files name and enter any nested repository registered here; trim the include chain",
    work_tree: work_tree
  };
function Ed(e, n, r) {
  if (e.file === TMn) switch (e.kind) {
    case "includes":
      return `its launch environment\u2019s git configuration (GIT_CONFIG_PARAMETERS / GIT_CONFIG_COUNT) includes a file inside this working tree, its repository or a directory your settings open to Claude Code sessions \u2014 configuration this upload could not have git list here, where a file a session may write could say what that capture runs; ${n}drop that include from the environment, or start from an ordinary clone`;
    case "work_tree":
      return work_tree;
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
      return `its launch environment\u2019s git configuration (GIT_CONFIG_PARAMETERS / GIT_CONFIG_COUNT) includes a file that lies inside \u2014 or links into \u2014 a git checkout (${Ee(e.checkout)}), which a Claude Code session started there can write; ${n}drop that include from the environment, keep the file outside any checkout, or start from an ordinary clone`;
  }
  let o = Ee(e.file);
  switch (e.kind) {
    case "includes":
      return `its git configuration (${o}) pulls in include files, lies inside this working tree, its repository or a directory your settings open to Claude Code sessions, or includes a file there \u2014 configuration this upload could not have git list here, where a file a session may write could say what that capture runs; ${n}move what the includes hold into the configuration file itself, stop granting sessions the directory that holds it (permissions.additionalDirectories, sandbox.filesystem.allowWrite, an Edit rule or --add-dir), or start from an ordinary clone`;
    case "second_name":
      return `its git configuration file ${o} (or a file it includes) has a second name \u2014 a hard link \u2014 so a session that can reach the other name could change what that capture runs under; ${n}give the file a single name again (copy it aside and move the copy back over it), or start from an ordinary clone`;
    case "work_tree":
      return work_tree;
    case "worktree_config":
      return `its git configuration (${o}) switches per-worktree configuration on (extensions.worktreeConfig), under which that capture would also read a configuration file a session of the repository can plant in this tree\u2019s administrative entry; ${n}start from the repository\u2019s main checkout`;
    case "unread":
      return `its git configuration file ${o} could not be read as a plain file git would parse, or is reached through a link that cannot be followed here, so what that capture would run under cannot be judged; ${n}check that file, or start from an ordinary clone`;
    case "settings_unreadable":
      return no(e.file, n);
    case "home_checkout":
      return io(e, n, r);
    case "config_in_checkout":
      return `the user-level git configuration file ${o}, or a file it includes, lies inside \u2014 or links into \u2014 a git checkout (${Ee(e.checkout)}), so a Claude Code session started there can write what that capture would run under, whether or not the file exists yet; ${n}${r ? "start from an ordinary clone, or " : ""}keep user-level git configuration outside any checkout`;
  }
}
function no(e, n) {
  return `a Claude Code settings file inside this working tree (${Ee(ut(e, "settings.json"))} or settings.local.json) stands but cannot be read, so which directories it opens to sessions \u2014 and so whether a session could write the configuration that capture would run under \u2014 cannot be told; ${n}fix or remove that settings file, then retry`;
}
function io({
  file: file,
  checkout: checkout
}, r, o) {
  let s = o ? "start from an ordinary clone, or " : "";
  switch (xbr(checkout, Ze(file))) {
    case "home":
      return `your home directory is itself a git checkout, so a Claude Code session started there can write the user-level git configuration that capture would run under (${Ee(file)}, whether or not that file exists yet); ${r}${s}keep the dotfiles repository\u2019s git directory outside your home (a bare repository used with --git-dir)`;
    case "above_home":
    case "elsewhere":
      return `your home directory lies inside a git checkout (${Ee(checkout)}), so a Claude Code session started there can write the user-level git configuration that capture would run under (${Ee(file)}, whether or not that file exists yet); ${r}${s}move your home directory out of that checkout, or remove the stray git entry that makes it one`;
  }
}
function Rd(e) {
  let n = Abr(e);
  return n === null ? "" : xbr(n, e) === "home" ? ` (yours is itself a git checkout: ${Ee(n)})` : ` (yours lies inside the git checkout at ${Ee(n)})`;
}
function Or(e, n) {
  return xbr(e, n) === "home" ? `your home directory (${Ee(e)}) is itself a git checkout` : `your home directory lies inside a git checkout (${Ee(e)})`;
}
var Ee = e => Il(Nn(e), yo);
function Sd(e) {
  return `this checkout sits inside another checkout (${Ee(e)}), whose Claude Code sessions can write this one\u2019s git files \u2014 start from a checkout of this repository that stands inside no other`;
}
function xd(e) {
  let n = eco(e);
  return n === null ? null : `${Or(n, e)} and this working tree\u2019s repository (${Ee(e)}) is inside it, so a Claude Code session started there can write the repository\u2019s git files`;
}
function vd(e) {
  return `this working tree\u2019s repository sits inside another checkout (${Ee(e)}), whose Claude Code sessions can write its git files \u2014 start from a working tree of a repository that stands inside no other checkout`;
}
async function Td(e) {
  let n = ut(e, ".git"),
    r;
  try {
    r = await Ot(n);
  } catch (error) {
    let a = k(error);
    return a === "ENOENT" || a === "ENOTDIR" ? null : "unreadable";
  }
  let o;
  if (r.isDirectory()) o = [n];else {
    if (!r.isFile()) return "unreadable";
    let s = uDn(await $7t(n, {
      oneName: !0
    }).catch(() => {
      return;
    }));
    if (s === void 0 || CMn(s, e)) return "unreadable";
    let a = ld(s) ? s : wo(e, s);
    o = $n(a) ? [a, Ze(Ze(a))] : [a];
  }
  for (let s of o) {
    let a = await Rbr(s);
    if (a !== null) return a;
    if (!$n(s) && (await To(s))) return "common_dir";
  }
  return null;
}
async function To(e) {
  return Ot(ut(e, "commondir")).then(() => !0, n => {
    let r = k(n);
    return !(r === "ENOENT" || r === "ENOTDIR");
  });
}
function $n(e) {
  return e !== "" && Ji(e) !== ".git" && Ji(Ze(e)) === "worktrees";
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
  kind: kind_2,
  setting: setting,
  where = "",
  relative: relative
}) {
  let s = Nn(where),
    a = "Claude Code\u2019s environment (set by your shell or your Claude Code settings)",
    h = `Move the attribute rules it points to into a .gitattributes file committed with the project first, then remove the setting from ${s} and retry.`,
    u = `Remove ${setting} from your shell or your Claude Code settings, then start Claude Code again.`,
    [p, w] = {
      attributes_file: relative ? [`${setting} in ${s} is not a full path, which the git this upload runs may read as a different file than yours does`, "Set it to a full path (on Windows, one that starts with a drive letter) or a ~/ path, then retry."] : [`${setting} is set in ${s}`, `Move the attribute rules it points to into a .gitattributes file committed with the project, or set core.attributesFile directly in your user or system git config file to an absolute or ~/ path; then remove the setting from ${s} and retry.`],
      attr_tree: [`${setting} is set in ${s}`, h],
      ignore_case: [`${setting} (which decides whether .gitattributes patterns match file names regardless of letter case) is set in ${s}`, "Move the core.ignoreCase line into this repository\u2019s .git/config or directly into your ~/.gitconfig, then retry."],
      config_location: [`${setting} is a relative path in ${"Claude Code\u2019s environment (set by your shell or your Claude Code settings)"}, which git resolves from whatever directory it runs in`, `Set ${setting === "HOMEPATH" || setting === "USERPROFILE" ? "HOME" : setting} to a full path (on Windows, one that starts with a drive letter), then start Claude Code again.`],
      env_config: [`${setting} in ${"Claude Code\u2019s environment (set by your shell or your Claude Code settings)"} carries an include, core.attributesFile, attr.tree or core.ignoreCase, or does not parse`, u],
      attr_source_env: [`${setting} is set in ${"Claude Code\u2019s environment (set by your shell or your Claude Code settings)"}`, u]
    }[kind_2];
  return `Not uploading this working tree: ${p}, and the upload cannot follow that setting, so a file git would change before storing it (to encrypt it, for example) could be uploaded as it is on disk. ${w}`;
}
function Xt(e) {
  return ` It is not uploaded the previous way either: ${e}.`;
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
      return null;
  }
}
function ao(e, n) {
  let r = jhs;
  try {
    let o = GLi(e, n);
    if (o === null) return {
      kind: "unreadable"
    };
    let name_5 = [...o, ...jco().flatMap(item => Object.keys(Ga(item)?.env ?? {}))].find(item => r.includes(item.toUpperCase()));
    if (name_5 !== void 0) return {
      kind: "names",
      name: name_5
    };
    let name_6 = bSr(r);
    return name_6 === void 0 ? null : {
      kind: "moved",
      name: name_6
    };
  } catch (error) {
    return t(`[gitBundle] could not read the repository's settings: ${d(error)}`), {
      kind: "unreadable"
    };
  }
}
function n_a() {
  try {
    let e = ["projectSettings", "localSettings"].flatMap(item => Object.keys(be(item)?.env ?? {}).filter(item => {
      let o = item.toUpperCase();
      return Ad.includes(o) && Qyo.has(o);
    }));
    return e.filter((item, index) => e.findIndex(o => o.toUpperCase() === item.toUpperCase()) === index);
  } catch {
    return [];
  }
}
var Ad = ["CCR_ENABLE_BUNDLE", "CCR_FORCE_BUNDLE"];
function Er(e) {
  if (e.kind === "unreadable") return `Not uploading this working tree this way: ${"a settings file a cloud session could reach (this repository\u2019s .claude/settings.json or .claude/settings.local.json, or a --settings file)"} could not be parsed, so what it sets cannot be checked. Fix or remove it (see /status), then restart Claude Code.`;
  let s = JXe.includes(e.name.toUpperCase());
  if (e.kind === "names") return s ? `Not uploading this working tree this way: ${"a settings file a cloud session could reach (this repository\u2019s .claude/settings.json or .claude/settings.local.json, or a --settings file)"} names ${e.name}, which decides where your own settings are found. Remove it there; if you put it there yourself and need it, set it in your shell instead. Then restart Claude Code.` : `Not uploading this working tree this way: ${"a settings file a cloud session could reach (this repository\u2019s .claude/settings.json or .claude/settings.local.json, or a --settings file)"} names ${e.name}, and the upload's own git runs would have to trust what it names. If you did not put it there yourself, remove it. If you did, move it to your user settings (~/.claude/settings.json), managed settings or your shell (or pass the settings inline). Then restart Claude Code.`;
  return s ? `Not uploading this working tree this way: ${e.name} was changed by a settings file after Claude Code started; it decides where your own settings are found, so the upload only trusts the value the process was started with. Set it in the shell rather than in a settings file, then restart Claude Code.` : `Not uploading this working tree this way: ${e.name} was set by ${"a settings file a cloud session could reach (this repository\u2019s .claude/settings.json or .claude/settings.local.json, or a --settings file)"} that no longer names it, and the upload's own git runs would still have to trust it. Keep it out of those files and restart Claude Code.`;
}
function Kdi() {
  return x() === "windows";
}
function r_a(e) {
  switch (e?.kind) {
    case void 0:
      return "An older upload method, which took more layouts, is retired on macOS and Linux. To start without an upload, push your work and connect GitHub at https://claude.ai/code; /ultrareview also takes a pull request number.";
    case "forced_bundle":
      return "An older upload method, which took more layouts, is retired on macOS and Linux. To start without an upload, unset CCR_FORCE_BUNDLE, push your work and connect GitHub at https://claude.ai/code.";
    case "other_forge":
      return `An older upload method, which took more layouts, is retired on macOS and Linux. Cloud sessions can't clone from ${e.forge} yet, so an upload is the only way to start one from this repository.`;
  }
}
function Id(layoutKind, error_3) {
  return {
    success: !1,
    error: error_3,
    failReason: "unsupported_layout",
    layoutKind: layoutKind
  };
}
var Od = {
    folder_is_home: "Not uploading this working tree: this checkout\u2019s git root is your home directory, or a folder above it (a repository rooted there makes every folder under it part of it, so the upload would carry your tracked home files). Start from a project folder that is its own repository, or work on these files from a separate clone.",
    folder_is_root: "Not uploading this working tree: this checkout\u2019s git root is the filesystem root. Start from a project folder that is its own repository.",
    folder_holds_config: "Not uploading this working tree: this checkout\u2019s git root holds (or sits inside) Claude Code\u2019s own configuration directory. Start from a project folder that is its own repository."
  },
  maxBuffer_2 = 268435456;
async function Nd(e, abortSignal, r) {
  let o = fr(e ?? pe());
  if (!o) return {
    gitRoot: "",
    paths: [],
    added: new Set(),
    deleted: [],
    gitlinks: [],
    unwrittenModes: []
  };
  let s = w => Tbr([...yn, ...Mce, ...vMn(r), ...w], {
      cwd: o,
      abortSignal: abortSignal,
      env: {
        ...ys({
          ...env_6,
          ...F7t(r)
        }, {
          base: Jdo(),
          userLocale: !0
        }),
        ...wMn
      },
      maxBuffer: maxBuffer_2
    }),
    [a, h] = await Promise.all([s(["rev-parse", "--verify", "--quiet", "HEAD^{commit}"]), Ld(o, abortSignal, r)]);
  if (h === null) return null;
  if (h.unwrittenModes.length > 0) return {
    gitRoot: o,
    paths: [],
    added: new Set(),
    deleted: [],
    ...h
  };
  if (a.exitCode === 1) return {
    gitRoot: o,
    paths: [],
    added: new Set(),
    deleted: [],
    ...h
  };
  let [u, p] = await Promise.all([s(["diff", "--name-status", "-z", "--no-renames", fS, "HEAD", "--"]), s(["diff", "--cached", "--name-status", "-z", "--no-renames", fS, "HEAD", "--"])]);
  if (a.code !== 0 || u.code !== 0 || p.code !== 0) return null;
  return {
    ...Co(Pn(u.stdout), Pn(p.stdout), o),
    ...h
  };
}
function Co(e, n, gitRoot) {
  let o = (h, u) => h.filter(({
      status: status_15,
      path: path_53
    }) => u(status_15) && path_53 !== "").map(({
      path: path_54
    }) => path_54),
    paths = L([...o(e, h => h !== "D"), ...o(n, h => h !== "D")]),
    a = new Set(paths);
  return {
    gitRoot: gitRoot,
    paths: paths,
    added: new Set(o(n, h => h === "A")),
    deleted: L([...o(e, h => h === "D"), ...o(n, h => h === "D")]).filter(item => !a.has(item))
  };
}
function Pn(e) {
  let n = e.split("\x00");
  return Array.from({
    length: Math.floor(n.length / 2)
  }, (r, o) => ({
    status: n[2 * o],
    path: n[2 * o + 1]
  }));
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
    path_55 = n[2];
  return (r & Dd) === Pd ? {
    kind: "gitlink",
    path: path_55
  } : {
    kind: $d.has(r) ? "ordinary" : "unwritten_mode",
    path: path_55
  };
}
async function Ld(e, signal_7, r) {
  let o = await Eb(e, [...Mce, ...vMn(r), "ls-files", "-s", "-z"], {
    hardened: !1,
    signal: signal_7,
    env: {
      ...env_6,
      ...F7t(r)
    },
    maxBuffer: maxBuffer_2
  });
  if (o.code !== 0) return null;
  let s = o.stdout.split("\x00").filter(item => item !== "").map(Fd),
    a = h => L(s.filter(item => item.kind === h).map(({
      path: path_56
    }) => path_56));
  return {
    gitlinks: a("gitlink"),
    unwrittenModes: a("unwritten_mode")
  };
}
async function Bo(e, n, r, o, s = []) {
  let a = w => Ix(w) || o?.(w) === !0,
    h = await Ft(e),
    u = async (path_57, _) => {
      if (!je(path_57, h)) return {
        path: path_57,
        why: "forged"
      };
      if (it(path_57)) return {
        path: path_57,
        why: "alias"
      };
      let y = await Md(e, path_57);
      if (y === "linked") return {
        path: path_57,
        why: "hardlinked"
      };
      if (a(path_57)) {
        if (_ === "changed") return {
          path: path_57,
          why: r.has(path_57) ? "added" : "changed"
        };
        if (await br(e, path_57)) return {
          path: path_57,
          why: "resurrected"
        };
      }
      return y === "unexamined" ? {
        path: path_57,
        why: "unexamined"
      } : null;
    };
  return (await Promise.all([...s.map(item => u(item, "deleted")), ...n.map(item => u(item, "changed"))])).filter(item => item !== null).sort((itemA, itemB) => itemA.path.localeCompare(itemB.path));
}
async function Md(e, n) {
  if (n.includes("\uFFFD")) return "unexamined";
  let r = await Ye(e, n);
  if (r !== "clear") return r === "symlink" ? "single" : "unexamined";
  try {
    let o = await Ot(ut(e, n));
    return o.isFile() && o.nlink > 1 ? "linked" : "single";
  } catch (error) {
    let s = k(error);
    return s === "ENOENT" || s === "ENOTDIR" ? "single" : "unexamined";
  }
}
async function Gd(e, n, signal_8, o) {
  let s = p => Eb(e, [...Mce, ...p], {
      hardened: !1,
      signal: signal_8,
      env: env_6,
      maxBuffer: maxBuffer_2
    }),
    [a, h] = await Promise.all([s(["diff", "--name-status", "-z", "--no-renames", fS, `${n}^1`, n, "--"]), s(["diff", "--name-status", "-z", "--no-renames", fS, `${n}^1`, `${n}^2`, "--"])]);
  if (a.code !== 0 || h.code !== 0) return null;
  let u = Co(Pn(a.stdout), Pn(h.stdout), e);
  return Bo(e, u.paths, u.added, o, u.deleted);
}
async function o_a(e, n, r) {
  let o = fr(e ?? pe()),
    s = o ? await U0i(o, n) : null;
  if (s?.kind === "failed") return {
    kind: "refused",
    sentence: `It is not uploaded the previous way either: a private copy of this checkout's index could not be made (${Il(Nn(s.detail), Jt)}), and that way runs only over such a copy. Nothing was uploaded; once that is put right, retry, or start from an ordinary clone.`,
    named: 0,
    added: 0,
    unexamined: 0,
    gitlinks: 0,
    indexCopied: !1,
    indexCopyCause: s.cause
  };
  let a;
  try {
    a = await jd(e, n, r, s?.indexFile);
  } catch (error) {
    throw await s?.dispose(), error;
  }
  if (a.kind === "refused") return await s?.dispose(), a;
  let h = null;
  try {
    h = s === null ? null : await B0i(o, s.indexFile, n);
  } catch (error) {
    throw await s?.dispose(), error;
  }
  if (h?.kind === "failed") return await s?.dispose(), {
    kind: "refused",
    sentence: `It is not uploaded the previous way either: that way runs only over a private copy of this checkout's index, and ${Il(Nn(h.detail), Jt)}. Nothing was uploaded; once that is put right, retry, or start from an ordinary clone.`,
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
  };
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
    gitlinks: gitlinks
  } = s;
  if (gitlinks.length > 0) return {
    kind: "refused",
    sentence: `It is not uploaded the previous way either: this checkout's index registers ${gitlinks.length} nested ${P(gitlinks.length, "repository", "repositories")} (a submodule or gitlink: ${De(gitlinks, 3)}), which that way would enter, running git under the nested repository\u2019s own configuration \u2014 one a session of this checkout can write. If the entry is not meant, remove it from the index with \`git update-index --force-remove -- <path>\` (not \`git rm\`, which first runs git inside the nested repository); otherwise update git (2.31 or newer) if it is older, or start from an ordinary clone.`,
    named: 0,
    added: 0,
    unexamined: 0,
    gitlinks: gitlinks.length,
    indexCopied: !0
  };
  let {
    unwrittenModes: unwrittenModes
  } = s;
  if (unwrittenModes.length > 0) return {
    kind: "refused",
    sentence: `It is not uploaded the previous way either: this checkout's index lists ${unwrittenModes.length} ${P(unwrittenModes.length, "entry", "entries")} under a file mode git itself never writes (${De(unwrittenModes, 3)}), so something other than git wrote the index and what the previous way would carry cannot be checked. Remove each such entry with \`git update-index --force-remove -- <path>\` (the file itself stays on disk), then \`git add -- <path>\` if it should be tracked; or start from an ordinary clone.`,
    named: 0,
    added: 0,
    unexamined: unwrittenModes.length,
    gitlinks: 0,
    indexCopied: !0
  };
  let u = s.gitRoot === "" ? void 0 : await r?.(s.gitRoot),
    p = await Bo(s.gitRoot, s.paths, s.added, u, s.deleted);
  return p.length === 0 ? {
    kind: "proceed"
  } : {
    kind: "refused",
    sentence: `It is not uploaded the previous way either (that way keeps nothing back): ${Cr(p, r !== void 0).replace(/^Not uploading this working tree: /, "")}`,
    named: p.length,
    added: U(p, ({
      why: why_3
    }) => why_3 === "added"),
    unexamined: U(p, ({
      why: why_4
    }) => why_4 === "unexamined"),
    gitlinks: 0,
    indexCopied: !0
  };
}
async function Ao(e) {
  let n = await Ot(ut(e, ".git")).catch(() => null);
  return n?.isSymbolicLink() === !0 ? "link" : n?.isFile() === !0 && n.nlink !== 1 ? "second_name" : "other";
}
async function Hd(e) {
  let n = ut(e, ".git"),
    r = await Ot(n).catch(() => null);
  if (r?.isSymbolicLink()) return "symlink";
  if (!r?.isFile()) return "other";
  let o = await $7t(n).catch(() => {
      return;
    }),
    s = uDn(o)?.replaceAll("\\", "/");
  if (s === void 0) return "other";
  return /\/worktrees\/[^/]+\/?$/.test(s) ? "linked_worktree" : /\/modules\//.test(s) ? "submodule" : "separate_git_dir";
}
function s_a(e) {
  return `This checkout ${{
    git_file: "is a submodule, a checkout with a separate git directory, or one whose .git pointer could not be followed",
    linked_worktree: "is a linked working tree whose pointer files could not be verified (try git worktree repair), which uses per-worktree configuration, or whose repository sits somewhere this upload does not trust",
    work_tree: "has core.worktree set",
    included_config: "reads git configuration from a file inside the working tree",
    many_includes: `is used with a git configuration that includes more files, or a longer chain of nested includes, than the new upload path follows (over ${Cbr} include files or 8 levels deep)`,
    old_git: "is used with a git older than 2.31",
    borrowed_objects: "borrows objects from another repository",
    reftable: "keeps its refs in the reftable format"
  }[e]}; the new upload path does not support that yet, so the working tree is being uploaded the previous way for this session.`;
}
function Ud() {
  let e = U$(void 0),
    n = Pe(Ds(e, "CLAUDE_CODE_LEGACY_BUNDLE")),
    r = i.CLAUDE_CODE_LEGACY_BUNDLE === !0,
    ignored = r && !n;
  if (ignored) {
    let s = JXe.some(item => Ds(process.env, item) !== Ds(e, item));
    t(s ? "[gitBundle] CLAUDE_CODE_LEGACY_BUNDLE is set, but a settings tier also moves where settings are read from (HOME, CLAUDE_CONFIG_DIR, ...): no settings tier counts as the owner's word then, so it is ignored and the default upload method runs" : "[gitBundle] CLAUDE_CODE_LEGACY_BUNDLE is set by a settings file, not by the environment claude was started with or the owner's own settings: ignored, the default upload method runs", {
      level: "warn"
    });
  }
  return {
    requested: n && r,
    ignored: ignored
  };
}
var Tr = {
  missing: [],
  foreign: []
};
async function lo(e, n, r, o, signal_9) {
  let a = await Eb(e, [...Mce, "bundle", "list-heads", n], {
    hardened: !1,
    signal: signal_9,
    env: env_6
  });
  if (a.code !== 0) return {
    missing: [r],
    foreign: [],
    unlisted: Wn(a.stderr.trim()) || `exit ${a.code}`
  };
  return a.stdout.split(`
`).some(item => item === `${o} ${r}`) ? Tr : {
    missing: [r],
    foreign: []
  };
}
async function uo(e, n, r, o) {
  let missing = r.filter(item => !item.startsWith("-")),
    a = await Eb(e, ["bundle", "list-heads", n], {
      hardened: !0,
      layout: o.layout,
      signal: o.signal,
      probes: o.probes
    });
  if (a.code !== 0) return {
    missing: missing,
    foreign: [],
    unlisted: Wn(a.stderr.trim()) || `exit ${a.code}`
  };
  let h = new Map(a.stdout.split(`
`).flatMap(item => {
      let [E, B] = item.split(" ");
      return E === void 0 || B === void 0 ? [] : [[B, E]];
    })),
    missing_2 = missing.filter(item => {
      let E = h.get(item),
        B = o.expected[item];
      return E === void 0 || B !== void 0 && E !== B;
    }),
    foreign = o.shown === void 0 ? [] : [...h].flatMap(([y, E]) => Object.hasOwn(o.expected, y) || o.shown?.get(y) === E ? [] : [y]);
  if (o.shown === void 0 || missing_2.length > 0 || foreign.length > 0) return {
    missing: missing_2,
    foreign: foreign
  };
  let w = await Eb(e, ["cat-file", "--batch-check"], {
      hardened: !0,
      layout: o.layout,
      signal: o.signal,
      probes: o.probes,
      input: [...h.values()].map(item => `${item}
`).join("")
    }),
    notHeld = w.code === 0 ? [...h].flatMap(([y, E]) => w.stdout.includes(`${E} missing`) ? [y] : []) : [...h.keys()];
  return {
    missing: missing_2,
    foreign: foreign,
    notHeld: notHeld
  };
}
async function Wd(e, layout_4, r, signal_10, probes_5) {
  if (layout_4 === void 0 || !(await uze(layout_4, r))) return null;
  let a = await Eb(e, ["rev-parse", "-q", "--verify", "HEAD^{tree}"], {
      hardened: !0,
      layout: layout_4,
      signal: signal_10,
      probes: probes_5
    }),
    h = a.stdout.trim();
  if (!(await uze(layout_4, r))) return null;
  return a.code === 0 && /^[0-9a-f]{40}(?:[0-9a-f]{24})?$/.test(h) ? h : void 0;
}
async function zd(e, layout_5, r, signal_11, probes_6) {
  if (!(await uze(layout_5, r))) return null;
  let [a, h] = await Promise.all([Eb(e, ["for-each-ref", "--format=%(objectname) %(refname)", "refs/heads/", "refs/tags/"], {
    hardened: !0,
    layout: layout_5,
    signal: signal_11,
    probes: probes_6
  }), Eb(e, ["rev-parse", "-q", "--verify", "HEAD"], {
    hardened: !0,
    layout: layout_5,
    signal: signal_11,
    probes: probes_6
  })]);
  if (a.code !== 0 || h.code !== 0 && h.exitCode !== 1 || !(await uze(layout_5, r))) return null;
  let u = h.code === 0 ? [["HEAD", h.stdout.trim()]] : [];
  return new Map([...a.stdout.split(`
`).flatMap(item => {
    let [w, _] = item.split(" ");
    return w === void 0 || _ === void 0 ? [] : [[_, w]];
  }), ...u]);
}
function co(e, n) {
  if (e.unlisted !== void 0) return {
    ok: !1,
    error: `git bundle list-heads failed: ${Et(e.unlisted, n)}`,
    failReason: "git_error"
  };
  if (e.missing.length > 0) return Yd(e.missing);
  if (e.foreign.length > 0) return fo(e.foreign);
  return (e.notHeld?.length ?? 0) > 0 ? fo(e.notHeld ?? [], "not_held") : null;
}
function fo(e, n = "changed") {
  return {
    ok: !1,
    error: n === "changed" ? `git bundle create packed ${De(e)}, which this checkout did not show when the upload read its refs: its refs changed, or were redirected elsewhere, while the bundle was made. Make sure nothing else is writing to this checkout, inspect its git directory (a commondir file there was not written by git), then retry.` : `git bundle create packed ${De(e)} at commits this checkout's own object store does not hold: another object store stood in while the bundle was made. Make sure nothing else is writing to this checkout's git directory (objects/info in particular), then retry.`,
    failReason: "git_dir_tampered",
    refsChanged: !0
  };
}
function Yd(e) {
  return {
    ok: !1,
    error: `git bundle create left out or altered ${De(e)}: another ref in this repository (a branch or tag spelled like it) makes the name ambiguous, or the temporary ref was rewritten while the bundle was made, so the upload would not carry your changes as captured. Make sure nothing else is writing to this checkout, rename or delete such a branch or tag (see \`git for-each-ref\`), then retry.`,
    failReason: "git_error"
  };
}
function De(e, n = fd) {
  let r = e.slice(0, n).map(item => Il(Nn(item), yo)).join(", "),
    o = e.length - n;
  return o > 0 ? `${r} and ${o} more` : r;
}
function Kd(e, n) {
  switch (e) {
    case "objects":
      return {
        outcome: "bundle_objects_missing",
        error: `Not uploading this working tree: git could not read a complete history back out of the bundle it just made (${n}), so an object in this repository's .git/objects is most likely damaged. Run \`git fsck\` in this checkout, repair or re-clone the repository, then retry.`,
        failReason: "git_dir_tampered"
      };
    case "unlisted":
      return {
        outcome: "bundle_objects_unlisted",
        error: `Not uploading this working tree: the bundle git just made carries objects that none of the branches and tags it lists lead to (${n}). In \`git for-each-ref\`, look for a name that holds refs/ twice (such as refs/tags/refs/heads/x), rename or delete that branch or tag (on the remote too, or the next fetch brings it back), then retry.`,
        failReason: "refused"
      };
    case "trailing":
      return {
        outcome: "bundle_trailing_bytes",
        error: `Not uploading this working tree: the bundle git just made does not end with its pack (${n}). git does not write that on its own, so a pack file in this repository's .git/objects is most likely damaged or was not written by git. Clone the repository anew, then retry.`,
        failReason: "git_dir_tampered"
      };
    case "header":
    case "scratch":
    case "index":
    case "walk":
    case "unfinished":
      return {
        outcome: "git_error",
        error: `Could not check the bundle before upload, so nothing was uploaded (${n}). Retry; if it happens again, run \`git fsck\` in this checkout.`,
        failReason: "git_error"
      };
  }
}
function Cn(e, n, r) {
  let gitRefused = r ? void 0 : mms(C0e(n)),
    s = Et(n.stderr, r),
    a = n.stderr === L0i;
  return {
    ok: !1,
    error: gitRefused !== void 0 ? No[gitRefused] : `${e} failed (${n.code})${s && `: ${s}`}${a ? "; `git fsck` in this checkout may show why" : ""}`,
    failReason: "git_error",
    ...(gitRefused !== void 0 && {
      gitRefused: gitRefused
    })
  };
}
function Et(e, n) {
  return n ? Il(Nn(e), 200) : e.slice(0, 200);
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
    [a, h] = e.endsWith("_inside") ? ["lies inside this checkout or its git directory (even if it does not exist yet), where a cloud session could change it", n ? "Remove that line or point it outside this checkout, then retry; if the line is not yours to change, this checkout cannot be uploaded." : "Keep that file outside this checkout, or start from a checkout that does not hold it."] : e.endsWith("_not_text") ? ["has a name that is not valid text, so it cannot be checked", `Give the file and every folder in its path a name that is valid text, ${n ? "update the include line to match, " : ""}${e.startsWith("repository") ? "" : "keep the file outside this checkout, "}then retry.`] : ["can be reached from this checkout (through a link, a hard link or another spelling of its path) or is on a network path, so a cloud session could change it or it cannot be checked", n ? "Remove that line, or point it by its plain path at an ordinary local file outside this checkout, then retry; if the line is not yours to change, this checkout cannot be uploaded." : "Put an ordinary local file (no link, no hard link) in its place, then retry."];
  return `Not uploading this working tree: ${r} ${a}.${o} ${h}`;
}
function ho(e) {
  switch (e.misplaced) {
    case "git_file":
      return `Not uploading this working tree: ${e.pointerFollowed ? "this checkout\u2019s .git is a pointer file (a submodule, a checkout with a separate git directory), which this upload does not support yet. Before running any git command here, look at the directory that it leads to (the .git file names it), unless you know it. Start" : e.dotGitEntry === "link" ? "this checkout\u2019s .git is a symbolic link, which this upload does not follow. Start" : e.dotGitEntry === "second_name" ? "this checkout\u2019s .git pointer file has a second name (a hard link), so what it names cannot be trusted. Remove the other name and retry, or start" : "this checkout\u2019s .git is something this upload could not follow (it could not be read, is not the one gitdir line git writes, or names another host). Start"} from an ordinary clone of the repository \u2014 its main checkout \u2014 instead.`;
    case "linked_worktree":
      return e.detail === "worktree_config" ? `Not uploading this working tree: this checkout is a linked working tree ${Rr.worktree_config} Start from the repository\u2019s main checkout instead (a new worktree made from this one would be refused too: a current git copies this file into it).` : e.detail === "placement" ? `Not uploading this working tree: this checkout is a linked working tree ${Rr.placement} Start from the repository\u2019s main checkout, or from a working tree made with git worktree add in an ordinary location, instead; where neither serves, from an ordinary clone of the repository.` : `Not uploading this working tree: this checkout is a linked working tree ${Rr[e.detail ?? "admin_dir"]} Start from the repository\u2019s main checkout, or from a working tree made with git worktree add in an ordinary location, instead.`;
    case "work_tree":
      return e.unexamined ? "Not uploading this working tree: this checkout\u2019s own folder could not be examined just now, so it could not be checked that git\u2019s working tree is this folder. Retry; if it goes on, check that you can still open this folder." : "Not uploading this working tree: git resolves this checkout\u2019s working tree to another directory (core.worktree is set), which this upload does not support yet. Start from an ordinary clone of the repository instead, or unset core.worktree if nothing here relies on it.";
    case "included_config":
      return Xd(e.writable ?? "included_indirect");
    case "many_includes":
      return `Not uploading this working tree: the git configuration in force for this checkout (~/.gitconfig, .git/config and the files they include) pulls in more include files, or a longer chain of nested includes, than this upload follows (over ${Cbr} files or 8 levels deep), so the programs that configuration names cannot all be switched off while the upload is prepared. Trim the include chain (directives naming files that do not exist do not count), then retry.`;
    case "old_git":
      return "Not uploading this working tree: the installed git is older than 2.31, which cannot be kept from running programs this checkout\u2019s configuration names while the upload is prepared. Update git (2.31 or newer), then retry.";
    case "borrowed_objects":
      return `Not uploading this working tree: this checkout borrows objects from another repository (an objects/info/alternates or http-alternates file \u2014 a clone made with --shared or --reference, or a file something else put there), so an upload could carry that repository\u2019s history too, which this upload does not support. Start from an ordinary clone of the repository instead.${e.sharedDirectoryElsewhere ? " (This checkout is a linked working tree: that file is in its repository\u2019s git directory, which this checkout\u2019s .git file points into.)" : ""}`;
    case "reftable":
      return "Not uploading this working tree: this repository keeps its refs in the reftable format, whose tables the upload cannot yet vouch for one by one. Start from a clone made with the default (files) ref format instead.";
    case "ref_storage":
      return `Not uploading this working tree: ${N0i(e.keptBy ?? "setting")}. Nothing was uploaded.`;
    case "temp_root":
      return "Not uploading this working tree: this checkout stands \u2014 or a link on the way to it leads \u2014 under a directory cloud sessions on this machine use as scratch space, so nothing in it can be told apart from what such a session put there. Start from the checkout at its ordinary location instead.";
    case "git_dir":
      return "Not uploading this working tree: git does not use this checkout\u2019s own .git directory, which happens only when something in .git (usually HEAD) was emptied or overwritten by something other than git. Look at .git and put back what was changed before retrying, or start from an ordinary clone of the repository instead.";
    case "common_dir":
      return `Not uploading this working tree: the commondir file in this checkout\u2019s .git directory was written by something other than git, and it sends git to a directory where git itself would not keep this checkout\u2019s shared files. ${Rt}`;
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
  };
}
function i_a(e) {
  return `${e.length} tracked ${P(e.length, "file")} ${P(e.length, "was", "were")} missing when read and ${P(e.length, "is", "are")} uploaded as deleted (${De(e, 3)}) \u2014 if a build was rewriting ${P(e.length, "it", "them")} just then, start the session again once it settles.`;
}
function a_a(e, {
  readRules = !1,
  ofThisUploadOnly = !1
} = {}) {
  return `${ofThisUploadOnly ? "Left out of this upload" : "Left on this machine"}: ${e.length} uncommitted ${P(e.length, "file")} named like credentials or keys, ${readRules ? "covered by a Read rule or a sandbox read-deny setting of yours, linked from your Claude Code configuration, " : ""}hard-linked to another file, kept by a git filter such as LFS, or still being written by another program while ${P(e.length, "it was", "they were")} read (${De(e)})${ofThisUploadOnly ? "" : `, ${P(e.length, "was", "were")} not uploaded`} \u2014 the cloud session starts with the version git already holds for ${P(e.length, "it", "them")} (committed or staged), or without ${P(e.length, "it", "them")}.`;
}
function Cr(e, n = !1) {
  let r = y => e.filter(item => item.why === y).map(({
      path: path_58
    }) => path_58),
    o = r("forged");
  if (o.length > 0) return `Not uploading this working tree: git reports changed paths spelled in a way git itself never writes (${De(o)}), so this checkout's index or HEAD was edited by something other than git. Inspect it (git status, git log) before retrying.`;
  let s = r("same-bytes");
  if (s.length > 0) return `Not uploading this working tree: while it was read, an index entry appeared (${De(s)}) holding, byte for byte, the content of a file that stays on this machine (named like credentials or keys${n ? ", covered by a Read rule or a sandbox read-deny setting of yours, linked from your Claude Code configuration" : ""}, or kept by a git filter) \u2014 at a name no step of this upload put it under, so something else wrote into the index copy this upload works in while it ran. Retry; if it recurs, check what else is running in this checkout.`;
  let a = r("alias");
  if (a.length > 0) return `Not uploading this working tree: its uncommitted changes include paths shaped like Windows 8.3 short names (${De(a)}), which can open a different file than they name. Rename or remove them \u2014 committing them as they stand would put whatever they open into git \u2014 then retry.`;
  let h = r("hardlinked");
  if (h.length > 0) return `Not uploading this working tree: ${h.length} changed ${P(h.length, "file has", "files have")} a second hard link (${De(h)}) \u2014 another name for what may be a file outside this tree, linked in without reading it \u2014 so ${P(h.length, "it is", "they are")} never read for an upload. Remove the extra link (or commit the file if it is yours), then retry.`;
  let u = r("unexamined");
  if (u.length > 0) return `Not uploading this working tree: ${u.length} changed ${P(u.length, "file")} could not be examined where ${P(u.length, "it stands", "they stand")} (${De(u)}) \u2014 a directory above could not be inspected, the name is not valid UTF-8, or the entry could not be read \u2014 so whether another name leads outside this tree cannot be told. Check the path (ls -la along it), or commit the change if it is yours, then retry.`;
  let p = r("added"),
    w = r("changed"),
    _ = r("resurrected");
  return [`Not uploading this working tree: its uncommitted changes include ${e.length} ${P(e.length, "file")} named like credentials or keys${n ? ", covered by a Read rule or a sandbox read-deny setting of yours, or linked from your Claude Code configuration" : ""} (${De(e.map(({
    path: path_59
  }) => path_59))}).`, ...(p.length > 0 ? [`${De(p)} ${P(p.length, "was", "were")} added to git's index but never committed: unless you meant to start tracking ${P(p.length, "it", "them")}, take ${P(p.length, "it", "them")} back out with ` + "`git rm --cached -- <file>` (the file itself stays on disk) \u2014 if you did not add " + `${P(p.length, "it", "them")} yourself, something else did.`] : []), ...(w.length > 0 ? [`${De(w)} ${P(w.length, "differs", "differ")} from what is committed: commit the change if it belongs in git; if ` + "`git status` shows no change there, running it once settled the difference \u2014 retry; if git should not be tracking " + `${P(w.length, "that file", "those files")} at all, this checkout's history was rewritten \u2014 see ` + "`git log -- <file>`."] : []), ...(_.length > 0 ? [`${De(_)} ${P(_.length, "is", "are")} committed but removed from the index while the file is, or may still be, on disk: commit the removal, or if you never committed ${P(_.length, "it", "them")}, see \`git log -- <file>\` for who did.`] : []), "Then retry."].join(" ");
}
function Bn(e) {
  return e === null ? "?" : en(e);
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
    workTree_3 = fr(r);
  if (!workTree_3) return l("tengu_ccr_bundle_upload", {
    outcome: b("not_a_repo")
  }), m("teleport_git_bundle_upload", "not_a_repo"), {
    success: !1,
    error: "Not in a git repository",
    failReason: "not_a_repo"
  };
  let bound = n?.hardenForDeviceSessions === !0,
    h = n?.hardenForDeviceSessions === void 0 && x() !== "windows" ? Ud() : {
      requested: !1,
      ignored: !1
    },
    hardened_3 = n?.hardenForDeviceSessions ?? !Kdi(),
    p = !bound && (n?.previousCaptureServes ?? Kdi());
  if (h.requested) t("[gitBundle] CLAUDE_CODE_LEGACY_BUNDLE is not honoured on macOS and Linux: the default upload method runs", {
    level: "warn"
  });
  let w = hardened_3 ? {
      hardened: !0,
      ...fyr(),
      ...(h.ignored && {
        legacy_switch_ignored: !0
      }),
      ...(h.requested && {
        legacy_switch_retired: !0
      })
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
  if (Oc(workTree_3) || W$r()) return _();
  let y = hardened_3 ? await dd(workTree_3).catch(() => null) : workTree_3;
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
  let B = hardened_3 ? await Jd(E, y) : null;
  if (B !== null && H7t(B) === "none") l("tengu_ccr_bundle_root_names_no_object", {
    device_zero: B.startsWith("0:")
  });
  let I = hardened_3 ? EMn(y) : [],
    R = COi(workTree_3, n?.rootAnchors);
  if (R !== null) return l("tengu_ccr_bundle_upload", {
    outcome: b("refused_home_root"),
    root_kind: f(R),
    ...w
  }), m("teleport_git_bundle_upload", "refused_home_root"), {
    success: !1,
    error: Od[R],
    failReason: "git_dir_tampered"
  };
  let seedRefs = ii(),
    T = [seedRefs.stash, seedRefs.root],
    signal_13 = n?.signal,
    z = hardened_3 ? AbortSignal.timeout(hd) : void 0,
    Y = Date.now(),
    signal_12 = z === void 0 ? signal_13 : signal_13 === void 0 ? z : AbortSignal.any([signal_13, z]),
    probes_7 = new RDt("operation"),
    O = G => {
      let Q = {
        phase: f(G),
        elapsed_ms: Date.now() - Y
      };
      if (signal_13?.aborted === !0 || z?.aborted !== !0) return l("tengu_ccr_bundle_upload", {
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
      };
    };
  await using holder = wms();
  let refusedAs_2 = hardened_3 ? await Qdo(workTree_3, signal_12, {
    linkedTrees: !0,
    bound: bound,
    startsInProject: n?.startsInProject,
    perWorktreeConfig: "serve",
    probes: probes_7,
    holder: holder
  }) : void 0;
  if (hardened_3 && signal_12?.aborted) return O("layout_read");
  let folderRead = refusedAs_2?.kind === "read" ? z0i(refusedAs_2.layout, y, B) : "the_same";
  if (folderRead !== "the_same") return qt({
    on: "root_at_layout_read",
    folderRead: folderRead
  });
  let le = refusedAs_2?.kind === "read" && refusedAs_2.layout.checkout === "linked" ? CDt(refusedAs_2.layout.commonDir) : refusedAs_2?.kind === "tampered" && $n(refusedAs_2.gitDir) ? CDt(Ze(Ze(refusedAs_2.gitDir))) : null,
    Te = le === null ? [] : EMn(le),
    ie = L([...I, ...Te]),
    K = I[0] !== void 0 ? Sd(I[0]) : Te[0] !== void 0 ? vd(Te[0]) : null,
    _e = hardened_3 && K === null ? eco(y) : null,
    Ce = _e !== null ? `${Or(_e, y)} and this checkout is inside it, so a Claude Code session started there can write this checkout\u2019s git files` : hardened_3 && K === null && le !== null ? xd(le) : null,
    he = refusedAs_2?.kind === "read" ? refusedAs_2.layout.worktreeConfig : void 0,
    Ne = bound || K !== null || Ce !== null || he !== void 0;
  if (refusedAs_2?.kind === "tampered") {
    t(`[gitBundle] Refusing to bundle: misplaced ${refusedAs_2.misplaced}`);
    let G = Bd(refusedAs_2.misplaced),
      Q = G === null ? "git_dir_tampered" : `unsupported_${G}`,
      gitFileKind = refusedAs_2.misplaced === "git_file" ? await Hd(workTree_3) : null,
      ue = G === null || bound || !p && So(refusedAs_2) ? {
        handedBack: !1,
        refusedAs: refusedAs_2,
        notThePreviousWay: ""
      } : p ? await kd(y, refusedAs_2, K, Ce) : {
        handedBack: !0
      },
      q = ue.handedBack,
      ke = q && p ? ao({
        workTree: workTree_3
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
    let oe = ue.handedBack ? refusedAs_2 : ue.refusedAs;
    if (l("tengu_ccr_bundle_upload", {
      ...w,
      outcome: f(Q),
      tampered_on: f(oe.misplaced),
      ...(oe.unexamined && {
        unexamined: !0
      }),
      ...(oe.keptBy !== void 0 && {
        refs_kept_by: f(oe.keptBy)
      }),
      ...(oe.writable !== void 0 && {
        writable_config: f(oe.writable)
      }),
      ...(oe.includedBy !== void 0 && {
        included_by: f(oe.includedBy)
      }),
      ...(oe.detail !== void 0 && {
        worktree_check: f(oe.detail)
      }),
      ...(!ue.handedBack && ue.screened !== void 0 && {
        unlisted_config: f(ue.screened)
      }),
      ...(!ue.handedBack && ue.belowHomeCheckout === !0 && {
        below_home_checkout: !0
      }),
      ...(G !== null && {
        fallback_eligible: q,
        ...(!bound && {
          enclosed: ie.length > 0
        })
      }),
      ...(gitFileKind !== null && {
        git_file_kind: f(gitFileKind)
      })
    }), ue.handedBack && G !== null) return {
      ...Id(G, ho(go(refusedAs_2))),
      ...(gitFileKind !== null && {
        gitFileKind: gitFileKind
      })
    };
    return m("teleport_git_bundle_upload", oe.misplaced === "included_config" && oe.writable !== void 0 ? `${Q}_${oe.writable}${oe.includedBy === void 0 ? "" : `_by_${oe.includedBy}`}` : oe.misplaced === "linked_worktree" && oe.detail !== void 0 ? `${Q}_${oe.detail}` : Q), {
      success: !1,
      error: ho({
        ...go(oe),
        ...(Ir(oe) && {
          dotGitEntry: await Ao(y)
        })
      }) + (ue.handedBack || !p || G === null || oe.unexamined ? "" : Xt(ue.notThePreviousWay)),
      failReason: "git_dir_tampered"
    };
  }
  if (refusedAs_2?.kind === "failed") {
    if (t(`[gitBundle] could not read the checkout's git layout: ${refusedAs_2.detail.slice(0, 200)}`), refusedAs_2.why === "changed_under_hold") return qt({
      on: "changed_under_hold",
      unopened: refusedAs_2.unopened
    });
    if (refusedAs_2.why === "settings_unreadable") return l("tengu_ccr_bundle_upload", {
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
    let G = refusedAs_2.why === "git_not_found",
      Q = refusedAs_2.why === "changed_under_read",
      te = G ? "git_not_on_path" : refusedAs_2.cause ?? "wip_unreadable";
    if (l("tengu_ccr_bundle_upload", {
      ...w,
      outcome: f(te),
      ...(Q && {
        changed_under_read: !0
      }),
      ...(G && _ms() && {
        git_script_wrapper_only: !0
      })
    }), m("teleport_git_bundle_upload", te), refusedAs_2.cause !== void 0) return {
      success: !1,
      error: No[refusedAs_2.cause],
      failReason: "git_error"
    };
    return G ? bound ? {
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
    };
  }
  let layout_6 = refusedAs_2?.layout;
  if (layout_6 !== void 0 && !F0i(layout_6) && gms(U$(void 0)) === null) return l("tengu_ccr_bundle_upload", {
    ...w,
    outcome: b("ambiguous_filter_driver")
  }), m("teleport_git_bundle_upload", "ambiguous_filter_driver"), {
    success: !1,
    error: 'Not uploading this working tree: your git configuration defines a filter driver named "unset" or "unspecified" (a file your configuration includes counts too, even one included only for other repositories), and git reports files that use such a driver as having no filter, so they would be uploaded as they are on disk, without the filter. Nothing was uploaded. Rename the driver in your git configuration, and in any attributes file that uses it, then retry.',
    failReason: "refused"
  };
  let linked_worktree = layout_6?.checkout === "linked",
    fault = layout_6 ? await kMn(layout_6, T) : null;
  if (fault !== null) return qt({
    on: "mid_build",
    fault: fault
  });
  let Qe = layout_6 !== void 0 && (await qd(workTree_3, layout_6, signal_12, probes_7));
  if (hardened_3 && signal_12?.aborted) return O("promisor_probe");
  if (Qe) t("[gitBundle] partial clone \u2014 bundling a snapshot of the working tree, without history");
  let Le = Ne && layout_6 !== void 0 ? ao(layout_6) : null;
  if (Le !== null) return l("tengu_ccr_bundle_upload", {
    ...w,
    outcome: b("admin_dir_failed"),
    steering: f(Le.kind),
    steered_by: de(Le.kind === "unreadable" ? void 0 : jhs.find(item => item === Le.name.toUpperCase()))
  }), m("teleport_git_bundle_upload", "admin_dir_failed"), {
    success: !1,
    error: Er(Le),
    failReason: "refused"
  };
  let ee = hardened_3 || n?.refuseCredentialNamedInStash === !0,
    $e = ee ? LZ() : xf();
  await using ce = layout_6 !== void 0 ? await $0i(workTree_3, layout_6, signal_12, probes_7, "own") : void 0;
  if (ce?.kind === "failed") {
    if (signal_12?.aborted) return O("admin_dir");
    if (t(`[gitBundle] could not set up the private git dir: ${ce.detail.slice(0, 200)}`), ce.cause === "attribute_source") {
      let {
        kind: kind_3
      } = ce.source;
      return l("tengu_ccr_bundle_upload", {
        ...w,
        outcome: b("attribute_source_unread"),
        attribute_source: f(kind_3),
        linked_worktree: linked_worktree
      }), m("teleport_git_bundle_upload", "attribute_source_unread"), {
        success: !1,
        error: Cd(ce.source),
        failReason: "refused"
      };
    }
    l("tengu_ccr_bundle_upload", {
      ...w,
      outcome: b("admin_dir_failed"),
      linked_worktree: linked_worktree,
      admin_dir_reason: f(ce.reason),
      admin_dir_cause: f(ce.cause),
      ...(!bound && {
        enclosed: ie.length > 0
      })
    }), m("teleport_git_bundle_upload", "admin_dir_failed");
    let G = Il(Nn(ce.detail), Jt),
      Q = !p ? "" : K !== null ? Xt(K) : he === "extension" ? Xt("its repository has per-worktree configuration switched on (extensions.worktreeConfig, which git sparse-checkout sets)") : he === "inert" ? Xt("a per-worktree configuration file (config.worktree) stands in its administrative entry") : linked_worktree ? Xt("a linked working tree is uploaded under that private directory only") : "";
    return {
      success: !1,
      error: ce.cause === "symbolic_head" ? `Not uploading this working tree: ${G}. Nothing was uploaded.${so.symbolic_head}` : ce.cause === "placement" ? `Not uploading this working tree this way: the private git directory the upload must trust would stand where a cloud session can write \u2014 ${G}. Nothing was uploaded; retry once that is changed.` : ce.cause === "home" ? `Could not prepare a private git directory for the upload (${G}), so nothing was uploaded. It is kept under your configuration home: check that ${Ee(ce.home)} is a writable directory of yours, and that ${Ee(ut(ce.home, "seed-admin"))}, if it exists, is a directory only you can write. Look at it first: ls -ld, with no / after the name (tab completion adds one, and with it a link to a folder shows as a plain folder). A directory there holds scratch only and can be removed (rm -r, again with no /). A link or a file there is removed by its name (rm, with no -r and no / after the name). Then retry.${Q}` : `Could not prepare a private git directory for the upload (${G}), so nothing was uploaded. The upload builds from private copies of this checkout\u2019s HEAD, index and refs, and copies them only when they are ordinary files (no links, one name each).${so[ce.cause]}${Q}`,
      failReason: "refused"
    };
  }
  let Fe = G => {
      let Q = layout_6 === void 0 ? void 0 : j0i(layout_6, probes_7.screenMemo);
      if (Q === void 0) return null;
      return l("tengu_ccr_bundle_upload", {
        ...w,
        outcome: b("config_level_not_read"),
        config_level: f(Q),
        config_level_asked: f(G)
      }), m("teleport_git_bundle_upload", "config_level_not_read"), {
        success: !1,
        error: `Not uploading this working tree: ${Q} names a git configuration file that a Claude Code session could change, so the git that this upload runs does not read it, and a file git would change before storing it (to encrypt it, for example) could be uploaded as it is on disk. Move its settings into ${Q === "GIT_CONFIG_GLOBAL" ? "~/.gitconfig" : "git\u2019s default system file"} and remove ${Q} from your shell or your Claude Code settings; or keep the file outside this checkout, any checkout around it or around your home directory, Claude Code\u2019s temp folder, and any folder that settings open to sessions. Then start Claude Code again.`,
        failReason: "refused"
      };
    },
    St = Fe("before_build");
  if (St !== null) return St;
  if (layout_6 !== void 0 && ce?.kind === "made") layout_6 = {
    ...layout_6,
    adminDir: ce.path,
    borrowedObjects: ce.borrowedObjects
  };
  let fault_2 = layout_6 ? await kMn(layout_6, T) : null;
  if (fault_2 !== null) return qt({
    on: "mid_build",
    fault: fault_2
  });
  if (!hardened_3) {
    let G = await Eb(workTree_3, ["for-each-ref", "--format=%(refname)", "refs/seed/"], {
      hardened: hardened_3,
      probes: probes_7
    });
    if (G.code !== 0) t(`[gitBundle] could not list refs/seed/ (${G.code}), so private refs a killed build left are not swept this run (the two fixed names still are): ${Et(G.stderr, hardened_3)}`);
    let Q = L([yt, bt, ...oi(G.code === 0 ? G.stdout.split(`
`).filter(item => item !== "") : [])]);
    for (let te of Q) {
      let ue = await An(workTree_3, ["-d", te], {
        hardened: hardened_3,
        layout: void 0,
        probes: probes_7
      });
      if (ue.code !== 0) t(`[gitBundle] could not sweep a stale seed ref: ${ue.stderr.slice(0, 200)}`);
    }
  }
  let ht = await Eb(workTree_3, ["rev-parse", "--verify", "--quiet", "HEAD"], {
      hardened: hardened_3,
      layout: layout_6,
      probes: probes_7,
      ...(hardened_3 && {
        signal: signal_12
      })
    }),
    headResolves = ht.code === 0,
    Fn = ht.exitCode === 1,
    Zt = ht.exitCode === void 0 && ht.stderr === "",
    $t = await Eb(workTree_3, ["for-each-ref", "--count=1", "refs/heads/", "refs/tags/"], {
      hardened: hardened_3,
      layout: layout_6,
      probes: probes_7,
      ...(hardened_3 && {
        signal: signal_12
      })
    });
  if (hardened_3 && signal_12?.aborted) return O("ref_probe");
  if ($t.code === 0 && $t.stdout.trim() === "" && !headResolves) return l("tengu_ccr_bundle_upload", {
    ...w,
    outcome: b("empty_repo"),
    current_branch_only: o
  }), m("teleport_git_bundle_upload", "empty_repo"), {
    success: !1,
    error: "Repository has no local branch, tag, or checkout to seed from yet",
    advice: advice,
    failReason: "empty_repo"
  };
  let Se = Fn && !o ? await (async () => {
    let G = {
        hardened: hardened_3,
        layout: layout_6,
        probes: probes_7,
        signal: signal_12,
        ...(!hardened_3 && {
          env: {
            ...env_6,
            GIT_NO_LAZY_FETCH: "1",
            ...F7t(n?.pinnedIndexFile)
          }
        })
      },
      Q = hardened_3 ? [] : Mce,
      te = await Eb(workTree_3, [...Q, "hash-object", "-t", "tree", "--stdin"], {
        ...G,
        input: ""
      }),
      ue = await Eb(workTree_3, [...Q, "for-each-ref", `--count=${kr + 1}`, "--sort=-creatordate", "--format=%(if)%(*objecttype)%(then)%(*objecttype)%(else)%(objecttype)%(end) %(objectname)", "refs/heads/", "refs/tags/"], G),
      q = async re => {
        let we = await Eb(workTree_3, [...Q, ...re], G);
        return we.exitCode === 1 ? !0 : we.exitCode === 0 || we.code === 0 ? !1 : null;
      },
      ke = re => q(["diff-index", "--cached", "--quiet", "--ita-invisible-in-index", re, "--"]),
      oe = ue.code === 0 ? ue.stdout.split(`
`).flatMap(item => {
        let [we, N] = item.split(" ");
        return we === "commit" && N !== void 0 ? [N] : [];
      }) : null,
      ot = te.code === 0 ? await ke(te.stdout.trim()) : null,
      Ve = async re => {
        if (re.length === 0) return !1;
        let we = await ke(`${re[0]}^{tree}`);
        return we === null ? null : we ? Ve(re.slice(1)) : !0;
      };
    if (ot === !1) return "empty";
    if (ot === null || oe === null) return "unread";
    let Me = await Ve(oe.slice(0, kr));
    if (!Me) return Me === null ? "unread" : oe.length > kr ? "over_cap" : "off_branch";
    let He = await q(["--no-optional-locks", "diff-files", "--quiet", fS]);
    return He === null ? "worktree_unread" : He ? "unstaged" : "on_branch";
  })() : void 0;
  if (signal_12?.aborted) return O("ref_probe");
  if (Se === "off_branch" || Se === "over_cap" || Se === "unstaged" || Se === "unread" || Se === "worktree_unread") return l("tengu_ccr_bundle_upload", {
    ...w,
    outcome: b("empty_repo"),
    current_branch_only: o,
    unborn_staged: Se !== "unstaged" && Se !== "worktree_unread",
    unborn_index: f(Se)
  }), m("teleport_git_bundle_upload", "empty_repo"), {
    success: !1,
    error: "The current branch has no commits yet",
    advice: advice_2,
    failReason: "empty_repo"
  };
  let names_windows_cannot_hold = 0,
    M = layout_6 ? await Hi(workTree_3, layout_6, {
      signal: signal_12,
      probes: probes_7,
      onNamesWindowsCannotHold: G => {
        names_windows_cannot_hold = G;
      },
      onOpenRefusedAtTheLook: files => {
        l("tengu_ccr_bundle_look_open_refused", {
          files: files
        });
      },
      leaveOutUncommittedCredentialFiles: !0,
      alsoLeaveOut: await po(n?.withholdFor, workTree_3, layout_6.workTree),
      neverRead: await po(n?.neverReadFor, workTree_3, layout_6.workTree),
      maxStagedBytes: 2 * xr()
    }) : await Ui(workTree_3, headResolves || Zt, signal_12, n?.pinnedIndexFile),
    Be = names_windows_cannot_hold > 0 ? {
      ...w,
      names_windows_cannot_hold: names_windows_cannot_hold
    } : w;
  if (signal_12?.aborted) return O("wip_stash");
  if (M.kind === "created" && layout_6 === void 0 && n?.refuseCredentialNamedInStash === !0) {
    let G = await Gd(workTree_3, M.commit, signal_12, await n?.withholdFor?.(workTree_3));
    if (signal_12?.aborted) return O("wip_stash");
    if (G === null || G.length > 0) return l("tengu_ccr_bundle_upload", {
      ...Be,
      outcome: b("uncommitted_credentials"),
      refused_paths: G?.length ?? 0,
      refused_unexamined: U(G ?? [], ({
        why: why_5
      }) => why_5 === "unexamined"),
      refused_on: b("stash_trees")
    }), m("teleport_git_bundle_upload", "uncommitted_credentials"), {
      success: !1,
      error: G === null ? "Not uploading this working tree: the uncommitted changes just captured could not be listed back, so they cannot be checked for files that must stay on this machine \u2014 retry." : Cr(G, n?.withholdFor !== void 0),
      failReason: "uncommitted_credentials"
    };
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
    };
  }
  if (M.kind === "failed" && (M.step === "verify" || M.step === "refused-name" || M.step === "rewritten")) return t(`[gitBundle] the checkout's git directory holds what git never wrote (${M.step}): ${M.detail.slice(0, 200)}`), l("tengu_ccr_bundle_upload", {
    ...Be,
    outcome: b("wip_tampered"),
    wip_step: f(M.step)
  }), m("teleport_git_bundle_upload", "wip_tampered"), {
    success: !1,
    error: M.step === "verify" ? "Not uploading this working tree: its git directory holds an object that is not what its id names \u2014 something other than git wrote it there (`git fsck` usually names it). Nothing was uploaded; repair or re-clone the repository, then retry." : M.step === "rewritten" ? "Not uploading this working tree: the scratch copy of the index this upload works in was changed by another process while the upload ran. Nothing was uploaded; retry, and if it recurs check what else is running in this checkout." : `Not uploading this working tree: its git index names a path git itself refuses to write (a ".git"-like or "git~1" name) \u2014 something other than git put it there. ${Rt}`,
    failReason: "git_dir_tampered"
  };
  if (M.kind === "failed" && M.step === "malformed-tree") {
    t(`[gitBundle] a committed tree is stored in a form git no longer writes: ${M.detail.slice(0, 200)}`), l("tengu_ccr_bundle_upload", {
      ...Be,
      outcome: b("wip_legacy_tree")
    }), m("teleport_git_bundle_upload", "wip_legacy_tree");
    let advice_3 = `the committed tree for ${Wi(M.detail)} is stored in a form git reads but does not itself write (some old tools wrote trees this way: entries out of order, or an unknown file mode). Commit a change to any file ${M.detail === "" ? "at the top of the checkout" : "in that directory"} so git rewrites the tree, then retry.`;
    return {
      success: !1,
      error: `Not uploading this working tree: ${advice_3}`,
      advice: advice_3,
      failReason: "stash_failed"
    };
  }
  if (M.kind === "failed" && gd.includes(M.step)) return t(`[gitBundle] could not read the checkout's uncommitted state (git ${M.step}): ${M.detail.slice(0, 200)}`), l("tengu_ccr_bundle_upload", {
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
    error: error_2,
    failReason: "git_error"
  };
  if (M.kind === "failed") {
    t(`[gitBundle] could not capture uncommitted changes (git ${M.step}): ${M.detail.slice(0, 200)}`), l("tengu_ccr_bundle_upload", {
      ...Be,
      outcome: b("stash_failed"),
      wip_step: f(M.step),
      ...(M.silent && {
        wip_silent: !0
      }),
      ...(M.said !== void 0 && {
        git_said: f(M.said)
      }),
      current_branch_only: o
    }), m("teleport_git_bundle_upload", "stash_failed");
    let G = hardened_3 ? Il(Nn(M.detail), Jt) : M.detail,
      Q = M.said === "unmerged" ? "This checkout has an unfinished merge or rebase (git status lists the conflicted files): resolve or abort it here first, or start the session from a branch with --ref." : M.said === "index_locked" ? "Another git process is running in this checkout; retry in a moment." : M.said === "object_missing" ? "Retry; if it stops here again, run `git fsck` in this checkout." : void 0,
      advice_4 = !hardened_3 ? M.silent ? "Retry; if it stops here again, run `git --version` here to see whether git starts." : Q ?? advice_2 : M.step === "scratch-index" ? "A scratch copy of the index could not be written (next to .git/index, under ~/.claude/seed-admin, or under the temporary directory); check the disk and permissions there, then retry." : M.step === "stage" ? "A changed file could not be copied for upload as it stands (too large in total, still being written, or not a plain file); commit or stash such files, then retry. If nothing here is really uncommitted (a copied or restored checkout), run git status once so git refreshes its index, then retry." : M.step === "check-attr" ? M.detail === yr ? names_windows_cannot_hold > 0 ? mo(names_windows_cannot_hold) : "HEAD's .gitattributes rules could not be read reliably: retry first. If it stops here again, save each committed .gitattributes above a changed file as plain UTF-8 text with no byte-order mark (one saved as UTF-16 stops it, for example, and so does one that git lists as a submodule) and commit that; or commit all your changes; or check the repository's objects (git fsck)." : "The attributes in force could not be vouched for: in .git/info/attributes, move any filter rules, attribute macros or quoted patterns into a .gitattributes file and shorten any line of 2,048 bytes or more (or remove .git/info/attributes), or commit your changes first, then retry." : Q ?? (names_windows_cannot_hold > 0 ? mo(names_windows_cannot_hold) : advice_2);
    return {
      success: !1,
      error: `Could not capture uncommitted changes (git ${M.step}: ${G}). ${advice_4}`,
      advice: advice_4,
      failReason: "stash_failed"
    };
  }
  let Ke = M.kind === "created",
    leftOut_2 = M.kind === "created" || M.kind === "none" ? M.leftOut.map(({
      path: path_60
    }) => path_60).sort() : [],
    left_out_unstable = M.kind === "created" || M.kind === "none" ? U(M.leftOut, ({
      why: why_6
    }) => why_6 === "unstable") : 0,
    deletedHere = M.kind === "created" ? [...M.deletedUnstaged].sort() : [];
  if (leftOut_2.length > 0) t(`[gitBundle] ${leftOut_2.length} uncommitted path(s) kept out of the WIP commit (credential-named, hard-linked, filtered, or changed while read)`);
  if (Ke) {
    t(`[gitBundle] Captured WIP as stash ${M.commit}`);
    let fault_3 = layout_6 ? await kMn(layout_6, T) : null;
    if (fault_3 !== null) return qt({
      on: "mid_build",
      fault: fault_3
    });
    let Q = await An(workTree_3, [seedRefs.stash, M.commit], {
      hardened: hardened_3,
      layout: layout_6,
      probes: probes_7,
      ...(hardened_3 && {
        signal: signal_12
      })
    });
    if (Q.code !== 0) return signal_12?.aborted ? O("seed_refs") : Zd(Q.stderr, layout_6?.adminDir, Be, {
      held_ref: b("stash"),
      git_exit_code: Q.code
    });
  }
  let rt = null,
    ze = ee ? "" : BHe("ccr-seed", ".bundle");
  try {
    if (ee) {
      try {
        rt = await Kr("claude-seed", $e);
      } catch (re) {
        return t(`[gitBundle] no private bundle directory: ${d(re)}`), l("tengu_ccr_bundle_upload", {
          ...Be,
          outcome: b("git_error"),
          current_branch_only: o
        }), m("teleport_git_bundle_upload", "git_error"), {
          success: !1,
          error: "Could not create a private directory for the bundle.",
          failReason: "git_error"
        };
      }
      ze = rt.path;
    }
    let relabelledPath = `${ze}.relabelled`,
      Q = xr(),
      te = await _d(workTree_3, signal_12, layout_6 ? {
        layout: layout_6
      } : null, probes_7);
    if (te !== "not_shallow") t(`[gitBundle] shallow repository: ${bd[te]}`);
    let ue = Date.now(),
      q = te === "unborn_cut" ? {
        ok: !1,
        error: "The current branch has no commits yet, and the other branches of this shallow clone are cut short, so nothing here can be bundled; commit first, or deepen the clone (git fetch --unshallow)",
        failReason: "empty_repo"
      } : await Ro(workTree_3, ze, {
        maxBytes: Q,
        seedRefs: seedRefs,
        relabelledPath: relabelledPath,
        hasStash: Ke,
        ...(M.kind === "created" && {
          stashCommit: M.commit
        }),
        leftOutCount: leftOut_2.length,
        withheldByRules: n?.withholdFor !== void 0,
        currentBranchOnly: o,
        headResolves: headResolves,
        hardened: hardened_3,
        layout: layout_6,
        signal: signal_12,
        probes: probes_7,
        baseRef: n?.baseRef,
        forceScope: Qe || te === "cut" ? "squashed" : n?.forceScope,
        partialClone: Qe,
        skipAllRefs: te === "complete" || te === "cut",
        bindJudgedStash: n?.refuseCredentialNamedInStash === !0
      });
    if (!q.ok) {
      if (hardened_3 && signal_12?.aborted) return O("bundle_create");
      t(`[gitBundle] ${q.error}`);
      let re = signal_13?.aborted === !0,
        we = q.heldSeedRef ? "seed_ref_held" : q.refsChanged ? "bundle_refs_changed" : q.gitRefused ?? q.failReason,
        N = we === "git_dir_tampered" && layout_6 !== void 0 ? await kMn(layout_6, T) : null,
        V = N ?? we;
      if (l("tengu_ccr_bundle_upload", {
        ...Be,
        outcome: re ? b("aborted") : f(V),
        max_bytes: Q,
        size_bytes: q.sizeBytes,
        current_branch_only: o,
        ...(q.failReason === "git_dir_tampered" && {
          tampered_on: b("mid_build")
        }),
        ...(q.heldSeedRef !== void 0 && {
          held_ref: b("root"),
          git_exit_code: q.heldSeedRef.exitCode
        }),
        ...(q.promisorFallback && {
          promisor_fallback: !0
        }),
        ...(q.failReason === "git_error" && _ms() && {
          git_script_wrapper_only: !0
        }),
        shallow_repository: te !== "not_shallow",
        shallow_head: te === "cut",
        build_ms: Date.now() - ue
      }), !re) m("teleport_git_bundle_upload", V);
      return {
        success: !1,
        error: N === null ? q.error : Oo[N],
        ...(q.failReason === "empty_repo" && te !== "unborn_cut" && {
          advice: advice_2
        }),
        failReason: q.failReason
      };
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
    let content_2, check_ms;
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
          error: `The bundle could not be read back for upload (${Il(Nn(we), 200)}).`,
          failReason: "git_error"
        };
      }
      content_2 = re.content;
    }
    let ot = Fe("before_upload");
    if (ot !== null) return ot;
    if (content_2 !== void 0) {
      let re = Date.now(),
        we = await Jr(content_2, {
          scratchRoot: Ze(q.path)
        }, (N, V) => Eb(workTree_3, N, {
          hardened: hardened_3,
          layout: layout_6,
          probes: probes_7,
          signal: signal_13,
          ...V
        }));
      if (check_ms = Date.now() - re, !we.ok) {
        if (signal_13?.aborted) return O("bundle_check");
        t(`[gitBundle] the bundle failed its check (${we.kind}): ${we.detail}`);
        let N = Kd(we.kind, Il(Nn(we.detail), 200));
        return l("tengu_ccr_bundle_upload", {
          ...Be,
          outcome: f(N.outcome),
          check_failure: f(we.kind),
          check_ms: check_ms,
          size_bytes: q.size,
          scope: f(q.scope),
          current_branch_only: o,
          has_wip: Ke,
          ...(q.promisorFallback && {
            promisor_fallback: !0
          }),
          shallow_repository: te !== "not_shallow",
          shallow_head: te === "cut"
        }), m("teleport_git_bundle_upload", N.outcome), {
          success: !1,
          error: N.error,
          failReason: N.failReason
        };
      }
    }
    if (!hardened_3 && n?.refuseCredentialNamedInStash === !0) {
      let re = await Td(workTree_3);
      if (re !== null) return l("tengu_ccr_bundle_upload", {
        ...Be,
        outcome: b("hand_back_store_planted"),
        tampered_on: f(re)
      }), m("teleport_git_bundle_upload", "hand_back_store_planted"), {
        success: !1,
        error: re === "unreadable" ? "Not uploading this working tree: its git directory could not be re-read after the capture ran, so what was packed cannot be vouched for. Inspect the checkout\u2019s .git, then retry." : re === "common_dir" ? "Not uploading this working tree: a commondir file appeared in its git directory while the upload was prepared \u2014 git writes one only in a linked working tree\u2019s entry \u2014 so what was packed cannot be vouched for. Inspect the git directory, then retry." : `Not uploading this working tree: ${re === "borrowed_objects" ? "an objects/info/alternates file" : "a reftable directory"} appeared in its git directory while the upload was prepared, so what was packed may hold another repository\u2019s history. ${Rt}`,
        failReason: "git_dir_tampered"
      };
    }
    let Ve = Date.now(),
      Me = await mFi(q.path, "_source_seed.bundle", e, {
        signal: signal_13,
        ...(content_2 !== void 0 && {
          content: content_2
        }),
        expiresInSeconds: expiresInSeconds
      }),
      upload_ms = Date.now() - Ve;
    if (!Me.success) {
      let re = n?.signal?.aborted === !0;
      if (l("tengu_ccr_bundle_upload", {
        ...Be,
        outcome: re ? b("aborted") : b("failed"),
        upload_error_type: f(Me.reason),
        size_bytes: q.size,
        scope: f(q.scope),
        current_branch_only: o,
        ...(q.promisorFallback && {
          promisor_fallback: !0
        }),
        shallow_repository: te !== "not_shallow",
        shallow_head: te === "cut",
        upload_ms: upload_ms
      }), !re) m("teleport_git_bundle_upload", "upload_failed");
      return {
        success: !1,
        error: Me.error,
        failReason: "upload_failed"
      };
    }
    if (t(`[gitBundle] Uploaded ${Me.size} bytes`), l("tengu_ccr_bundle_upload", {
      ...Be,
      outcome: b("success"),
      size_bytes: Me.size,
      scope: f(q.scope),
      has_wip: Ke,
      current_branch_only: o,
      ...(Se !== void 0 && {
        unborn_index: f(Se)
      }),
      ...(hardened_3 && {
        credential_paths_left_out: leftOut_2.length,
        left_out_unstable: left_out_unstable,
        deleted_unstaged: deletedHere.length,
        partial_clone: Qe,
        withhold_rules: n?.withholdFor !== void 0,
        linked_worktree: layout_6?.checkout === "linked",
        ...(layout_6?.workTreeRespelled && {
          work_tree_respelled: !0
        }),
        ...(layout_6?.worktreeConfig === "inert" && {
          worktree_check: b("inert_config")
        }),
        private_admin_dir: layout_6?.adminDir !== void 0
      }),
      ...(q.promisorFallback && {
        promisor_fallback: !0
      }),
      shallow_repository: te !== "not_shallow",
      shallow_head: te === "cut",
      upload_ms: upload_ms,
      ...(check_ms !== void 0 && {
        check_ms: check_ms
      }),
      ...!1
    }), q.scope === "head" && !o) c("teleport_git_bundle_upload", "fallback_head");else if (q.scope === "squashed") c("teleport_git_bundle_upload", "fallback_squashed");else g("teleport_git_bundle_upload");
    return ei(Qr(layout_6)), {
      success: !0,
      fileId: Me.fileId,
      bundleSizeBytes: Me.size,
      scope: q.scope,
      hasWip: Ke,
      ...(hardened_3 && {
        leftOut: leftOut_2,
        ...(deletedHere.length > 0 && {
          deletedHere: deletedHere
        }),
        ...(q.scope === "squashed" ? {
          seedCommit: q.rootCommit
        } : M.kind === "created" && {
          seedCommit: M.commit
        })
      })
    };
  } finally {
    if (ze !== "") {
      try {
        await _r(ze);
      } catch {
        t(`[gitBundle] Could not delete ${ze} (non-fatal)`);
      }
      await _r(`${ze}.lock`).catch(() => {}), await _r(`${ze}.relabelled`).catch(() => {});
    }
    if (await rt?.dispose(), !layout_6 || (await uze(layout_6, T))) for (let G of T) await An(workTree_3, ["-d", G], {
      hardened: hardened_3,
      layout: layout_6,
      probes: probes_7
    });
  }
}
async function qd(e, layout_7, signal_14, probes_8) {
  let s = await Eb(e, ["config", "-z", "--list"], {
    hardened: !0,
    layout: layout_7,
    signal: signal_14,
    probes: probes_8
  });
  if (s.code !== 0) return !0;
  return $r(s.stdout);
}
function $r(e) {
  return e.split("\x00").some(item => {
    let r = item.indexOf(`
`),
      o = r === -1 ? item : item.slice(0, r),
      s = r === -1 ? "true" : item.slice(r + 1);
    return o === "extensions.partialclone" || /^remote\..*\.partialclonefilter$/s.test(o) || /^remote\..*\.promisor$/s.test(o) && !["false", "no", "off", "0", ""].includes(s.toLowerCase());
  });
}
function An(e, n, r) {
  return Eb(e, ["update-ref", "--no-deref", ...n], r);
}
var advice = 'Commit the files that you want the cloud session to see (git add <file>, then git commit -m "initial"), then retry.',
  advice_2 = "Commit the files that you changed by name (git add <file>, then git commit), then retry.";
function mo(e) {
  return `${advice_2} Do not run \`git add .\` or \`git commit -a\` here: this checkout tracks ${e} file ${e === 1 ? "name" : "names"} that Windows cannot hold, which git lists as deleted, and either command would record the ${e === 1 ? "deletion" : "deletions"}.`;
}
async function Jd(e, n) {
  let r = await e.hold(n);
  return r === "not_held" ? B9(n) : r === "gone" ? null : r.id;
}
async function po(e, n, r) {
  if (e === void 0) return;
  let o = await Promise.all((Wft(n) === r ? [n] : [n, r]).map(item => e(item)));
  return s => o.some(item => item(s));
}
function qt(e) {
  let n = e.on === "mid_build" ? e.fault : e.on === "root_at_layout_read" ? "work_tree_replaced" : "git_dir_tampered",
    error_4 = Oo[n];
  return t(`[gitBundle] ${error_4}`), l("tengu_ccr_bundle_upload", {
    hardened: !0,
    outcome: f(n),
    tampered_on: f(e.on),
    ...(e.on === "changed_under_hold" && {
      hold_unopened: e.unopened
    }),
    ...(e.on === "root_at_layout_read" && {
      folder_read: f(e.folderRead)
    })
  }), m("teleport_git_bundle_upload", n), {
    success: !1,
    error: error_4,
    failReason: "git_dir_tampered"
  };
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
  };
}
function Io(e, n) {
  t(`[gitBundle] could not update a temporary seed ref: ${e.slice(0, 200)}`);
  let r = Il(Nn(Wn(e.trim())), Jt);
  return {
    error: n !== void 0 ? `Could not write a temporary ref in the private git directory that this upload builds in (${r}). Retry; if it keeps failing, check that ${Ee(Ze(n))} is writable and its disk has room.` : `Could not write the temporary ref this upload uses under .git/refs/seed (${r}). If another git process is running here, let it finish, then retry; if it keeps failing, check that this checkout\u2019s git directory is writable and its disk has room. If it fails even so, something that git did not put there may be in the way at .git/refs/seed. ${Rt}`,
    failReason: "git_error"
  };
}
var In = "Not uploading this working tree: its git directory changed while the upload was being prepared, holds something git itself never puts there, or could not be inspected \u2014 another git process (a background fetch or gc) may have written packs meanwhile, in which case let it finish and retry; otherwise look for a commondir or objects/info/alternates file, or a link, special or unreadable entry where its branches, tags, HEAD, the temporary refs/seed entries, their logs, or objects go (commondir, refs/heads, refs/tags, refs/seed, logs/refs/seed, logs/HEAD, objects/info, objects/pack) before retrying.";
function kt() {
  return {
    error: In,
    failReason: "git_dir_tampered"
  };
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
export { G6o, n_a, Kdi, r_a, o_a, s_a, i_a, a_a, l_a };