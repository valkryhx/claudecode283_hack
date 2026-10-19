// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  VGe
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  c
} from "B:/~BUN/root/chunk-jthpk6wv.js";
import {
  x,
  k,
  Fr
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  jn
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  i
} from "B:/~BUN/root/chunk-1kfn24jp.js";
import {
  g,
  m,
  p
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  Pe
} from "B:/~BUN/root/chunk-fbyz9h0p.js";
import {
  X
} from "B:/~BUN/root/chunk-yrjpmz6e.js";
import {
  f
} from "B:/~BUN/root/chunk-frrkt2bs.js";
import {
  D1o,
  lE,
  Ffn
} from "B:/~BUN/root/chunk-2zk4vqr8.js";
import {
  Zs,
  Pne
} from "B:/~BUN/root/chunk-wegca9zh.js";
import {
  tae,
  Dee,
  vGn,
  kGn
} from "B:/~BUN/root/chunk-6xef02qz.js";
import {
  tit
} from "B:/~BUN/root/chunk-sp89wf0w.js";
import {
  EN
} from "B:/~BUN/root/chunk-ma5pke8s.js";
import {
  o,
  v,
  T,
  u
} from "B:/~BUN/root/chunk-g3snhg6n.js";
import {
  st
} from "B:/~BUN/root/chunk-7aw74be3.js";
import {
  randomUUID as Y
} from "crypto";
import {
  lstat as j,
  mkdir as re,
  readdir as ie,
  stat as K,
  unlink as V,
  writeFile as W
} from "fs/promises";
import {
  basename as O,
  dirname as ne,
  isAbsolute as oe,
  join as b,
  resolve as ae
} from "path";
import {
  randomUUID as Z
} from "crypto";
import {
  constants as A
} from "fs";
import {
  lstat as q,
  mkdir as N,
  open as I,
  readlink as J,
  realpath as Q,
  rename as ee,
  rmdir as C,
  stat as te
} from "fs/promises";
import {
  basename as z,
  dirname as M,
  join as B
} from "path";
var R = Pne | A.O_DIRECTORY | A.O_NOFOLLOW | Zs;

function P(r) {
  return `/proc/self/fd/${r.fd}`
}
async function U(r) {
  return (await r.stat()).uid === process.getuid?.()
}
async function P5t(r, e) {
  return "not_linux"
}
async function $In(r) {
  let e = B(r.at, `.probe-${Z()}`),
    n = `${e}-moved`,
    a;
  try {
    await N(e, {
      mode: 448
    }), a = await I(e, R), await ee(e, n);
    let s = await J(P(a)).catch(() => ""),
      l = await te(P(a)).catch(() => {
        return
      });
    return z(s) === z(n) && l?.ino === (await a.stat()).ino || "holds_do_not_follow"
  } catch (s) {
    return Fr(s) ?? "unknown"
  } finally {
    await a?.close(), await Promise.allSettled([C(e), C(n)])
  }
}
async function jRt(r) {
  let e = VGe();
  if (e === null || M(r) !== e) return await N(r, {
    recursive: !0,
    mode: 448
  }), {
    at: r,
    release: async () => {}
  };
  let n = await P5t(r, 2);
  if (typeof n === "string") throw X("warn", "attachments_in_user_data", {
    state: "write_refused",
    reason: n
  }), m("bridge_attachment_user_data_root", n), new x(`nothing was saved: the attachments folder cannot be used (${n})`, "nothing was saved: the attachments folder cannot be used");
  return n
}
var se = kGn * 24 * 60 * 60 * 1000,
  G = "file-transfers";

function H(r) {
  t(`[peer-file-transfer] ${r}`)
}

function I4e(r) {
  let e = O(r).replace(/[^a-zA-Z0-9._-]/g, "_") || "attachment",
    n = e.lastIndexOf("."),
    a = n > 0 && e.length - n <= 16 ? e.slice(n) : "",
    s = a ? e.slice(0, n) : e,
    l = 200 - a.length;
  return (s.length > l ? s.slice(0, l) : s) + a
}

function UIn(r, e) {
  return `[SendFile: "${I4e(r)}" was not delivered \u2014 ${e}]`
}

function BIn(r) {
  return `[SendFile: ${r} additional attachment(s) were dropped \u2014 max ${Dee} per message]`
}

function jIn(r, e) {
  if (typeof e.file_size === "number" && r.length !== e.file_size) return !1;
  return st(r) === e.sha256
}

function Xpr(r, e, n) {
  if (i("tengu_send_file_received", {
      transport: c(r),
      file_count: e,
      verified_count: n
    }), n === e) g("peer_file_receive");
  else if (n > 0) p("peer_file_receive", "partial_failed");
  else m("peer_file_receive", "all_failed")
}
async function K7(r, e) {
  try {
    let a = await K(r);
    if (!a.isFile() || a.size > e) return null
  } catch {
    return null
  }
  let n;
  try {
    n = await Ffn(r)
  } catch {
    return null
  }
  try {
    let a = await n.stat();
    if (!a.isFile() || a.size > e) return null;
    let s = await lE(n, e, a.size);
    return s.overLimit ? null : s.bytes
  } catch {
    return null
  } finally {
    await n.close().catch(() => {})
  }
}

function Jpr(r, e) {
  if (!e) return r;
  let n = /^<cross-session-message\b[^>]*>\n?/.exec(r);
  return n ? n[0] + e + r.slice(n[0].length) : e + r
}

function O5t() {
  return b(Pe(), G)
}

function le() {
  return EN()
}
var ce = /^[0-9a-f]{64}$/,
  fe = f(() => u({
    path: o(),
    file_name: o(),
    file_size: v().int().nonnegative(),
    sha256: o().regex(ce),
    media_type: o().optional()
  })),
  me = f(() => T(fe()));
async function moo(r) {
  let e = await K7(r, tae);
  if (e === null) throw new x(vGn, "peer file transfer: source unreadable or over the size limit");
  let n = st(e),
    a = O5t();
  await re(a, {
    recursive: !0,
    mode: 448
  });
  let s = O(r),
    l = b(a, `${n.slice(0,8)}-${Y().slice(0,8)}-${I4e(s)}`);
  return await W(l, e, {
    mode: 384
  }), {
    path: l,
    file_name: s,
    file_size: e.length,
    sha256: n,
    media_type: tit(s)
  }
}
async function goo() {
  let r = O5t();
  try {
    let e = await ie(r),
      n = Date.now() - se;
    for (let a of e.slice(0, 200)) {
      let s = b(r, a);
      try {
        let l = await K(s);
        if (l.isFile() && l.mtimeMs < n) await V(s)
      } catch {}
    }
  } catch {}
}
var de = {
  prefix: "",
  received: 0,
  verified: 0
};
async function Dri(r) {
  let e = me().safeParse(r);
  if (!e.success || e.data.length === 0) {
    if (!e.success) H(`ignoring malformed file_attachments: ${e.error.message}`);
    return de
  }
  let n = [],
    a = e.data;
  if (a.length > Dee) n.push(BIn(a.length - Dee)), a = a.slice(0, Dee);
  let s = le(),
    l = O5t(),
    h = [],
    _ = 0;
  for (let d of a) {
    let w = (y) => {
      H(`${d.file_name}: ${y}`), n.push(UIn(d.file_name, y))
    };
    if (jn(d.path) || D1o(d.path) || !oe(d.path)) {
      w("invalid transfer path");
      continue
    }
    let F = ae(d.path),
      S = ne(F);
    if (jn(F) || D1o(F) || O(S) !== G) {
      w("transfer path is outside the file-transfer spool");
      continue
    }
    try {
      if (!(await j(S)).isDirectory() || !(await j(F)).isFile()) {
        w("the transfer copy is not a regular file");
        continue
      }
    } catch {
      w("the transfer copy could not be read (it may have expired)");
      continue
    }
    let D = await K7(F, tae);
    if (D === null) {
      w("the transfer copy could not be read (it may have expired)");
      continue
    }
    if (!jIn(D, d)) {
      w("it failed integrity verification");
      continue
    }
    let L = b(s, `${d.sha256.slice(0,8)}-${Y().slice(0,8)}-${I4e(d.file_name)}`);
    try {
      let y = await jRt(s);
      try {
        await W(b(y.at, O(L)), D, {
          mode: 384,
          flag: "wx"
        })
      } finally {
        await y.release()
      }
    } catch (y) {
      w("it could not be written to the uploads directory"), H(`write ${L} failed: ${y}`);
      continue
    }
    if (_++, h.push(`@"${L}"`), S === l) V(F).catch(() => {})
  }
  let E = [...h, ...n];
  return {
    prefix: E.length > 0 ? E.join(" ") + " " : "",
    received: a.length,
    verified: _
  }
}
export {
  P5t,
  $In,
  jRt,
  I4e,
  UIn,
  BIn,
  jIn,
  Xpr,
  K7,
  Jpr,
  O5t,
  moo,
  goo,
  Dri
};
