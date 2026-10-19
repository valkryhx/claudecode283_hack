// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  k,
  G
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  eo
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  _,
  J,
  se
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  Pe
} from "B:/~BUN/root/chunk-fbyz9h0p.js";
import {
  I
} from "B:/~BUN/root/chunk-je1b1drr.js";
import {
  An,
  dL
} from "B:/~BUN/root/chunk-rvc0n7zm.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  qWe
} from "B:/~BUN/root/chunk-m3q01n4y.js";
import {
  createHash as A,
  randomBytes as h
} from "crypto";
import {
  lstatSync as B,
  mkdirSync as L,
  readFileSync as K,
  rmSync as j,
  writeFileSync as z
} from "fs";
import {
  chmod as S,
  lstat as m,
  mkdir as d,
  readdir as w,
  readFile as P,
  rm as D,
  utimes as V
} from "fs/promises";
import {
  connect as W
} from "net";
import {
  basename as X,
  dirname as F,
  join as i,
  resolve as H
} from "path";
import {
  readFile as b
} from "fs/promises";
var y = 65534;
async function T() {
  return
}

function U(e) {
  let n = [];
  for (let t of e.split(`
`)) {
    if (t.trim() === "") continue;
    let r = t.trim().split(/\s+/),
      o = Number(r[0]),
      s = Number(r[1]),
      u = Number(r[2]);
    if (r.length !== 3 || !Number.isSafeInteger(o) || o < 0 || !Number.isSafeInteger(s) || s < 0 || !Number.isSafeInteger(u) || u <= 0) return;
    n.push({
      innerStart: o,
      hostStart: s,
      count: u
    })
  }
  return n
}

function v(e) {
  return e.length === 1 && e[0].innerStart === 0 && e[0].count >= 4294967295
}
async function C() {
  try {
    return N(await b("/proc/sys/kernel/overflowuid", "utf8"))
  } catch {
    return
  }
}

function N(e) {
  let n = e.trim();
  if (!/^\d+$/.test(n)) return;
  let t = Number(n);
  return Number.isSafeInteger(t) ? t : void 0
}
async function LOs() {
  let e = process.getuid?.();
  if (e === void 0) return;
  return e
}

function vRr() {
  return qWe.uidsCollapse ??= M(se()), qWe.uidsCollapse
}

function M(e) {
  return !1
}

function c(e) {
  return e === void 0 ? i(Pe(), "daemon") : i(e, "daemon")
}

function Y() {
  return A("sha256").update(H(Pe())).digest("hex").slice(0, 8)
}

function uOe() {
  let e = process.getuid?.() ?? 0,
    n = a.TERMUX_VERSION && a.PREFIX ? i(a.PREFIX, "tmp") : "/tmp";
  return i(n, `cc-daemon-${e}`, Y())
}
var q = /^[a-f0-9]{16}$/;

function oko(e) {
  return i(c(e), "pipe.key")
}
var Q = eo(() => {
  let e = oko();
  for (let n = 0; n < 8; n++) {
    let t;
    try {
      let o = B(e);
      if (!o.isFile() || o.size > 4096) {
        try {
          j(e, {
            recursive: !0,
            force: !0
          })
        } catch {}
        t = "invalid"
      } else t = K(e, "utf8").trim()
    } catch (o) {
      if (!G(o)) throw o
    }
    if (t !== void 0) {
      if (q.test(t)) return t;
      if (t === "" && n < 3) continue;
      let o = h(8).toString("hex");
      return dL(e, o, 384), o
    }
    let r = h(8).toString("hex");
    L(c(), {
      recursive: !0,
      mode: 448
    });
    try {
      return z(e, r, {
        flag: "wx",
        mode: 384
      }), r
    } catch (o) {
      if (k(o) !== "EEXIST") throw o
    }
  }
  throw Error("daemon pipe.key is not a valid nonce")
}, () => Pe());

function x(e) {
  return `\\\\.\\pipe\\cc-daemon-${Q()}-${e}`
}

function DE(e) {
  return e.replace(/cc-daemon-[0-9a-f]{16}/g, "cc-daemon-*")
}

function dDt(e) {
  if (e instanceof Error) {
    if (e.message = DE(e.message), typeof e.stack === "string") e.stack = DE(e.stack)
  }
  return e
}

function FWn(e) {
  return i(c(e), "control.key")
}
async function NOs() {
  let e = FWn();
  try {
    let t = await m(e);
    if (t.isFile() && t.size <= 4096) {
      let r = (await P(e, "utf8")).trim();
      if (r) return r
    } else await D(e, {
      recursive: !0,
      force: !0
    }).catch(() => {})
  } catch (t) {
    if (!G(t)) throw t
  }
  let n = h(16).toString("hex");
  return await d(c(), {
    recursive: !0,
    mode: 448
  }), await An(e, n, 384), n
}
async function pOe() {
  try {
    let e = await m(FWn());
    if (!e.isFile() || e.size > 4096) return;
    return (await P(FWn(), "utf8")).trim() || void 0
  } catch {
    return
  }
}
async function FOs() {
  let e = c();
  if (I() === "windows") {
    await d(e, {
      recursive: !0
    }), await S(e, 448).catch(() => {});
    return
  }
  await d(e, {
    recursive: !0,
    mode: 448
  }), E();
  let n = process.getuid?.(),
    t = await m(e);
  if (n !== void 0 && t.uid !== n) throw Error(`refusing to use daemon dir: ${e} is owned by uid ${t.uid}`);
  if ((t.mode & 511) !== 448) await S(e, 448)
}
async function xnn() {
  if (I() === "windows") return;
  let e = uOe();
  await d(e, {
    recursive: !0,
    mode: 448
  });
  let n = new Date;
  await V(e, n, n).catch(() => {}), await R([F(e), e])
}
var kRr = "ENOTOWNED";
async function R(e) {
  let n = process.getuid?.();
  E();
  for (let t of e) {
    let r = await m(t);
    if (n !== void 0 && r.uid !== n) throw Object.assign(Error(`refusing to bind: ${t} is owned by uid ${r.uid}`), {
      code: kRr
    });
    if ((r.mode & 511) !== 448) await S(t, 448)
  }
}
var sko = "refusing to use the daemon socket: this process runs in a user namespace without a uid mapping, so directory and peer ownership cannot be verified (start it with a mapping, e.g. unshare -Ur)";

function E() {
  if (vRr()) throw Object.assign(Error(sko), {
    code: kRr
  })
}
async function HOs(e) {
  if (I() === "windows") {
    await d(e, {
      recursive: !0
    }).catch(() => {});
    return
  }
  await xnn();
  let n = [mpt(), ERr()];
  for (let t of n) await d(t, {
    recursive: !0,
    mode: 448
  });
  if (!n.includes(e)) {
    if (await d(e, {
        recursive: !0,
        mode: 448
      }).then(() => !0, () => !1)) n.push(e)
  }
  await R(n)
}

function $Os() {
  if (I() === "windows") return;
  let e = uOe(),
    n = F(e),
    t = X(e);
  w(n, {
    withFileTypes: !0
  }).then(async (r) => {
    for (let o of r) {
      if (!o.isDirectory() || o.name === t) continue;
      let s = i(n, o.name);
      if (!await Z(i(s, "control.sock"))) continue;
      let u = await m(s).catch(() => null);
      if (!u || Date.now() - u.mtimeMs < 1e4) continue;
      let p = await w(i(s, "rv")).catch(() => []),
        l = await w(i(s, "pty")).catch(() => []),
        g = await w(i(s, "spare")).catch(() => []);
      if (p.length || l.length || g.length) continue;
      await D(s, {
        recursive: !0,
        force: !0
      }).catch(() => {})
    }
  }).catch(() => {})
}

function iko(e) {
  return e === "ENOENT" || e === "ECONNREFUSED" || e === "ENOTSOCK"
}

function Z(e) {
  let n, t = new Promise((o) => {
      n = o
    }),
    r = W(e);
  return r.setTimeout(1000, () => {
    r.destroy(), n(!1)
  }), r.on("error", (o) => {
    n(iko(k(o)))
  }), r.once("connect", () => {
    r.end(`{"op":"ping"}
`), n(!1)
  }), t
}

function Mfe(e) {
  return i(c(e), "dispatch")
}

function ako() {
  return i(c(), "dispatch", "rejected")
}

function aK(e) {
  return i(c(e), "roster.json")
}
var HWn = "attach-journal";

function Dfe() {
  return i(c(), HWn)
}

function ERr() {
  return i(uOe(), "rv")
}

function upt(e) {
  return i(c(e), "auth")
}

function ppt(e) {
  return i(upt(), `${e}.json`)
}

function Pnn() {
  return i(c(), "host-managed")
}

function Ave(e) {
  return i(Pnn(), e)
}

function fpt(e) {
  return i(upt(), `${e}.tokens.json`)
}

function Onn(e) {
  if (I() === "windows") return x(`rv-${e}`);
  return i(ERr(), `${e}.sock`)
}

function mpt() {
  return i(uOe(), "pty")
}

function LE(e) {
  if (I() === "windows") return x(`pty-${e}`);
  return i(mpt(), `${e}.sock`)
}

function Bie() {
  return i(uOe(), "spare")
}

function UOs(e) {
  return i(Bie(), `${e}.pty.sock`)
}

function BOs(e) {
  return i(Bie(), `${e}.claim.sock`)
}

function _8e() {
  return i(c(), "pty-pids")
}

function Lfe(e) {
  return i(_8e(), `${e}.pid`)
}

function OT(e) {
  return O(e, "err")
}

function cD(e) {
  return O(e, "late")
}

function O(e, n) {
  if (I() === "windows") return i(_8e(), `${e.split("\\").pop()}.${n}`);
  return `${e}.${n}`
}

function aX(e) {
  if (I() === "windows") return i(_8e(), `${e.split("\\").pop()}.exec-exit`);
  return `${e}.exec-exit`
}

function lK() {
  if (I() === "windows") return x("control");
  return E(), i(uOe(), "control.sock")
}
var gpt = 0,
  $Wn = 1,
  Inn = 262144,
  f = 5,
  Mnn = 1048576,
  fOe = 1e4;

function Dnn(e) {
  let n = typeof e === "string" ? Buffer.from(e, "utf8") : e,
    t = Buffer.allocUnsafe(f + n.length);
  return t.writeUInt32BE(n.length, 0), t.writeUInt8(gpt, 4), n.copy(t, f), t
}

function bH(e) {
  let n = Buffer.from(_(e), "utf8"),
    t = Buffer.allocUnsafe(f + n.length);
  return t.writeUInt32BE(n.length, 0), t.writeUInt8($Wn, 4), n.copy(t, f), t
}

function UWn(e, n) {
  let t = Buffer.alloc(0),
    r = !1;
  return (o) => {
    if (r) return;
    t = t.length === 0 ? o : Buffer.concat([t, o]);
    while (t.length >= f) {
      let s = t.readUInt32BE(0);
      if (s > Mnn) {
        r = !0, n(`frame too large (${s} > ${Mnn})`);
        return
      }
      let u = f + s;
      if (t.length < u) return;
      let p = t.readUInt8(4),
        l = t.subarray(f, u);
      if (t = t.subarray(u), p === gpt) e({
        kind: gpt,
        payload: Buffer.from(l)
      });
      else if (p === $Wn) {
        let g;
        try {
          g = J(l.toString("utf8"))
        } catch {
          r = !0, n("bad ctrl json");
          return
        }
        e({
          kind: $Wn,
          ctrl: g
        })
      } else {
        r = !0, n(`unknown frame kind ${p}`);
        return
      }
    }
  }
}
export {
  LOs,
  vRr,
  uOe,
  oko,
  DE,
  dDt,
  FWn,
  NOs,
  pOe,
  FOs,
  xnn,
  kRr,
  sko,
  HOs,
  $Os,
  iko,
  Mfe,
  ako,
  aK,
  HWn,
  Dfe,
  ERr,
  upt,
  ppt,
  Pnn,
  Ave,
  fpt,
  Onn,
  mpt,
  LE,
  Bie,
  UOs,
  BOs,
  _8e,
  Lfe,
  OT,
  cD,
  aX,
  lK,
  gpt,
  $Wn,
  Inn,
  Mnn,
  fOe,
  Dnn,
  bH,
  UWn
};
