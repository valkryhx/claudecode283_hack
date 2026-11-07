// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  q
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  f
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  R
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  or
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
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Ue
} from "B:/~BUN/root/chunk-eev762xg.js";
import {
  dIe
} from "B:/~BUN/root/chunk-k6fyzzmm.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  pdn,
  Iw,
  nnt
} from "B:/~BUN/root/chunk-1g25msn4.js";
import {
  T_e,
  uue,
  kvr,
  OBi,
  vvr
} from "B:/~BUN/root/chunk-wy3ha3b9.js";
import {
  bat
} from "B:/~BUN/root/chunk-g5ztxne9.js";
import {
  Av
} from "B:/~BUN/root/chunk-zx0hhrva.js";
import {
  o,
  E,
  C,
  u
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
import {
  nt
} from "B:/~BUN/root/chunk-tq5dzbq9.js";
import {
  randomUUID as A
} from "crypto";
import {
  lstat as I,
  mkdir as k,
  readdir as H,
  stat as O,
  unlink as N,
  writeFile as T
} from "fs/promises";
import {
  basename as w,
  dirname as U,
  isAbsolute as B,
  join as y,
  resolve as j
} from "path";
var G = vvr * 24 * 60 * 60 * 1000,
  M = "file-transfers";

function b(r) {
  t(`[peer-file-transfer] ${r}`)
}

function _at(r) {
  let e = w(r).replace(/[^a-zA-Z0-9._-]/g, "_") || "attachment",
    i = e.lastIndexOf("."),
    n = i > 0 && e.length - i <= 16 ? e.slice(i) : "",
    a = n ? e.slice(0, i) : e,
    s = 200 - n.length;
  return (a.length > s ? a.slice(0, s) : a) + n
}

function Tnr(r, e) {
  return `[SendFile: "${_at(r)}" was not delivered \u2014 ${e}]`
}

function Cnr(r) {
  return `[SendFile: ${r} additional attachment(s) were dropped \u2014 max ${uue} per message]`
}

function Rnr(r, e) {
  if (typeof e.file_size === "number" && r.length !== e.file_size) return !1;
  return nt(r) === e.sha256
}

function d5r(r, e, i) {
  if (l("tengu_send_file_received", {
      transport: f(r),
      file_count: e,
      verified_count: i
    }), i === e) g("peer_file_receive");
  else if (i > 0) c("peer_file_receive", "partial_failed");
  else m("peer_file_receive", "all_failed")
}
async function Ble(r, e) {
  try {
    let n = await O(r);
    if (!n.isFile() || n.size > e) return null
  } catch {
    return null
  }
  let i;
  try {
    i = await nnt(r)
  } catch {
    return null
  }
  try {
    let n = await i.stat();
    if (!n.isFile() || n.size > e) return null;
    let a = await Iw(i, e, n.size);
    return a.overLimit ? null : a.bytes
  } catch {
    return null
  } finally {
    await i.close().catch(() => {})
  }
}

function c5r(r, e) {
  if (!e) return r;
  let i = /^<cross-session-message\b[^>]*>\n?/.exec(r);
  return i ? i[0] + e + r.slice(i[0].length) : e + r
}

function Own() {
  return y(Ue(), M)
}

function X() {
  return Av()
}
var Y = /^[0-9a-f]{64}$/,
  K = p(() => u({
    path: o(),
    file_name: o(),
    file_size: E().int().nonnegative(),
    sha256: o().regex(Y),
    media_type: o().optional()
  })),
  V = p(() => C(K()));
async function D3o(r) {
  if (q()) throw new R(OBi, "peer file transfer: no disk in this session");
  let e = await Ble(r, T_e);
  if (e === null) throw new R(kvr, "peer file transfer: source unreadable or over the size limit");
  let i = nt(e),
    n = Own();
  await k(n, {
    recursive: !0,
    mode: 448
  });
  let a = w(r),
    s = y(n, `${i.slice(0,8)}-${A().slice(0,8)}-${_at(a)}`);
  return await T(s, e, {
    mode: 384
  }), {
    path: s,
    file_name: a,
    file_size: e.length,
    sha256: i,
    media_type: bat(a)
  }
}
async function L3o() {
  if (q()) return;
  let r = Own();
  try {
    let e = await H(r),
      i = Date.now() - G;
    for (let n of e.slice(0, 200)) {
      let a = y(r, n);
      try {
        let s = await O(a);
        if (s.isFile() && s.mtimeMs < i) await N(a)
      } catch {}
    }
  } catch {}
}
var L = {
  prefix: "",
  received: 0,
  verified: 0
};
async function u_a(r) {
  if (q()) return L;
  let e = V().safeParse(r);
  if (!e.success || e.data.length === 0) {
    if (!e.success) b(`ignoring malformed file_attachments: ${e.error.message}`);
    return L
  }
  let i = [],
    n = e.data;
  if (n.length > uue) i.push(Cnr(n.length - uue)), n = n.slice(0, uue);
  let a = X(),
    s = Own(),
    z = [],
    x = 0;
  for (let d of n) {
    let h = (_) => {
      b(`${d.file_name}: ${_}`), i.push(Tnr(d.file_name, _))
    };
    if (or(d.path) || pdn(d.path) || !B(d.path)) {
      h("invalid transfer path");
      continue
    }
    let F = j(d.path),
      P = U(F);
    if (or(F) || pdn(F) || w(P) !== M) {
      h("transfer path is outside the file-transfer spool");
      continue
    }
    try {
      if (!(await I(P)).isDirectory() || !(await I(F)).isFile()) {
        h("the transfer copy is not a regular file");
        continue
      }
    } catch {
      h("the transfer copy could not be read (it may have expired)");
      continue
    }
    let S = await Ble(F, T_e);
    if (S === null) {
      h("the transfer copy could not be read (it may have expired)");
      continue
    }
    if (!Rnr(S, d)) {
      h("it failed integrity verification");
      continue
    }
    let v = y(a, `${d.sha256.slice(0,8)}-${A().slice(0,8)}-${_at(d.file_name)}`);
    try {
      let _ = await dIe(a);
      try {
        await T(y(_.at, w(v)), S, {
          mode: 384,
          flag: "wx"
        })
      } finally {
        await _.release()
      }
    } catch (_) {
      h("it could not be written to the uploads directory"), b(`write ${v} failed: ${_}`);
      continue
    }
    if (x++, z.push(`@"${v}"`), P === s) N(F).catch(() => {})
  }
  let D = [...z, ...i];
  return {
    prefix: D.length > 0 ? D.join(" ") + " " : "",
    received: n.length,
    verified: x
  }
}
export {
  _at,
  Tnr,
  Cnr,
  Rnr,
  d5r,
  Ble,
  c5r,
  Own,
  D3o,
  L3o,
  u_a
};
