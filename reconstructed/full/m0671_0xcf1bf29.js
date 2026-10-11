// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  c
} from "B:/~BUN/root/chunk-kks4mj3w.js";
import {
  P
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  Dn
} from "B:/~BUN/root/chunk-54p0h65d.js";
import {
  Se
} from "B:/~BUN/root/chunk-4p6z9qq1.js";
import {
  i
} from "B:/~BUN/root/chunk-728mwbhs.js";
import {
  _,
  m,
  p
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  f
} from "B:/~BUN/root/chunk-zv3zxqya.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  Kt
} from "B:/~BUN/root/chunk-9fcn5kmc.js";
import {
  Bur,
  e0e,
  jur
} from "B:/~BUN/root/chunk-918gkwtq.js";
import {
  qV,
  QL,
  can,
  dan
} from "B:/~BUN/root/chunk-pqs37yts.js";
import {
  _et
} from "B:/~BUN/root/chunk-etbe3g70.js";
import {
  G3
} from "B:/~BUN/root/chunk-mac0vc34.js";
import {
  o,
  E,
  C,
  u
} from "B:/~BUN/root/chunk-n8qdr73v.js";
import {
  randomUUID as O
} from "crypto";
import {
  lstat as I,
  mkdir as R,
  readdir as U,
  stat as T,
  unlink as N,
  writeFile as M
} from "fs/promises";
import {
  basename as z,
  dirname as k,
  isAbsolute as B,
  join as y,
  resolve as j
} from "path";
var X = dan * 24 * 60 * 60 * 1000,
  H = "file-transfers";

function b(r) {
  t(`[peer-file-transfer] ${r}`)
}

function Fkt(r) {
  let e = z(r).replace(/[^a-zA-Z0-9._-]/g, "_") || "attachment",
    n = e.lastIndexOf("."),
    a = n > 0 && e.length - n <= 16 ? e.slice(n) : "",
    s = a ? e.slice(0, n) : e,
    l = 200 - a.length;
  return (s.length > l ? s.slice(0, l) : s) + a
}

function g5t(r, e) {
  return `[SendFile: "${Fkt(r)}" was not delivered \u2014 ${e}]`
}

function h5t(r) {
  return `[SendFile: ${r} additional attachment(s) were dropped \u2014 max ${QL} per message]`
}

function y5t(r, e) {
  if (typeof e.file_size === "number" && r.length !== e.file_size) return !1;
  return Kt(r) === e.sha256
}

function Cxn(r, e, n) {
  if (i("tengu_send_file_received", {
      transport: c(r),
      file_count: e,
      verified_count: n
    }), n === e) _("peer_file_receive");
  else if (n > 0) p("peer_file_receive", "partial_failed");
  else m("peer_file_receive", "all_failed")
}
async function i2e(r, e) {
  try {
    let a = await T(r);
    if (!a.isFile() || a.size > e) return null
  } catch {
    return null
  }
  let n;
  try {
    n = await jur(r)
  } catch {
    return null
  }
  try {
    let a = await n.stat();
    if (!a.isFile() || a.size > e) return null;
    let s = await e0e(n, e, a.size);
    return s.overLimit ? null : s.bytes
  } catch {
    return null
  } finally {
    await n.close().catch(() => {})
  }
}

function Rxn(r, e) {
  if (!e) return r;
  let n = /^<cross-session-message\b[^>]*>\n?/.exec(r);
  return n ? n[0] + e + r.slice(n[0].length) : e + r
}

function $kt() {
  return y(Se(), H)
}

function Y() {
  return G3()
}
var G = /^[0-9a-f]{64}$/,
  V = f(() => u({
    path: o(),
    file_name: o(),
    file_size: E().int().nonnegative(),
    sha256: o().regex(G),
    media_type: o().optional()
  })),
  Z = f(() => C(V()));
async function $ur(r) {
  let e = await i2e(r, qV);
  if (e === null) throw new P(can, "peer file transfer: source unreadable or over the size limit");
  let n = Kt(e),
    a = $kt();
  await R(a, {
    recursive: !0,
    mode: 448
  });
  let s = z(r),
    l = y(a, `${n.slice(0,8)}-${O().slice(0,8)}-${Fkt(s)}`);
  return await M(l, e, {
    mode: 384
  }), {
    path: l,
    file_name: s,
    file_size: e.length,
    sha256: n,
    media_type: _et(s)
  }
}
async function Uur() {
  let r = $kt();
  try {
    let e = await U(r),
      n = Date.now() - X;
    for (let a of e.slice(0, 200)) {
      let s = y(r, a);
      try {
        let l = await T(s);
        if (l.isFile() && l.mtimeMs < n) await N(s)
      } catch {}
    }
  } catch {}
}
var q = {
  prefix: "",
  received: 0,
  verified: 0
};
async function a4o(r) {
  let e = Z().safeParse(r);
  if (!e.success || e.data.length === 0) {
    if (!e.success) b(`ignoring malformed file_attachments: ${e.error.message}`);
    return q
  }
  let n = [],
    a = e.data;
  if (a.length > QL) n.push(h5t(a.length - QL)), a = a.slice(0, QL);
  let s = Y(),
    l = $kt(),
    x = !1,
    D = [],
    L = 0;
  for (let d of a) {
    let g = (F) => {
      b(`${d.file_name}: ${F}`), n.push(g5t(d.file_name, F))
    };
    if (Dn(d.path) || Bur(d.path) || !B(d.path)) {
      g("invalid transfer path");
      continue
    }
    let h = j(d.path),
      w = k(h);
    if (Dn(h) || Bur(h) || z(w) !== H) {
      g("transfer path is outside the file-transfer spool");
      continue
    }
    try {
      if (!(await I(w)).isDirectory() || !(await I(h)).isFile()) {
        g("the transfer copy is not a regular file");
        continue
      }
    } catch {
      g("the transfer copy could not be read (it may have expired)");
      continue
    }
    let v = await i2e(h, qV);
    if (v === null) {
      g("the transfer copy could not be read (it may have expired)");
      continue
    }
    if (!y5t(v, d)) {
      g("it failed integrity verification");
      continue
    }
    let S = y(s, `${d.sha256.slice(0,8)}-${O().slice(0,8)}-${Fkt(d.file_name)}`);
    try {
      if (!x) await R(s, {
        recursive: !0,
        mode: 448
      }), x = !0;
      await M(S, v, {
        mode: 384,
        flag: "wx"
      })
    } catch (F) {
      g("it could not be written to the uploads directory"), b(`write ${S} failed: ${F}`);
      continue
    }
    if (L++, D.push(`@"${S}"`), w === l) N(h).catch(() => {})
  }
  let A = [...D, ...n];
  return {
    prefix: A.length > 0 ? A.join(" ") + " " : "",
    received: a.length,
    verified: L
  }
}
export {
  Fkt,
  g5t,
  h5t,
  y5t,
  Cxn,
  i2e,
  Rxn,
  $kt,
  $ur,
  Uur,
  a4o
};
