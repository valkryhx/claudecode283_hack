// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  F
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  k,
  Tg
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  qm
} from "B:/~BUN/root/chunk-nxwmyxnk.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  mc
} from "B:/~BUN/root/chunk-nggrknsv.js";
import {
  I
} from "B:/~BUN/root/chunk-je1b1drr.js";
import {
  lL
} from "B:/~BUN/root/chunk-ek28wssa.js";
import {
  Zs,
  Pne
} from "B:/~BUN/root/chunk-wegca9zh.js";
import {
  la,
  Tft,
  p1e
} from "B:/~BUN/root/chunk-c44qc88s.js";
import {
  zy
} from "B:/~BUN/root/chunk-472kxa0t.js";
import {
  wF,
  Met
} from "B:/~BUN/root/chunk-15zc3ybq.js";
import {
  Cv
} from "B:/~BUN/root/chunk-6yvm6c0j.js";
import {
  yN
} from "B:/~BUN/root/chunk-dn8rakwm.js";
import {
  constants as _
} from "fs";
import {
  lstat as w,
  open as R,
  opendir as L,
  readlink as C
} from "fs/promises";
import {
  isAbsolute as b,
  join as x,
  resolve as g,
  sep as p,
  win32 as v
} from "path";
var tyn = 5000,
  h = 10 * tyn,
  P = 1024;
async function dzr(n, e, r, s) {
  try {
    if (typeof n !== "string" || n.length > P || n.includes("\x00") || n.includes("\\") || !mc(n) || v.parse(n).root !== "" || lL(n)) throw wF("invalid_path");
    if (!b(e) || I() !== "linux") throw wF("unexpected_error");
    let o = g(e, n);
    if (!zy(e, o, !0)) throw wF("invalid_path");
    let a = r();
    if (yN(o, a.trustedNetworkDirectories) !== void 0) throw wF("unsupported_name");
    if (O(e, o, a)) throw wF("read_rule");
    await using m = await S(e, o);
    if (!(await C(`/proc/self/fd/${m.fd}`, {
        encoding: "buffer"
      }).catch((i) => {
        throw k(i) === "ENOENT" ? wF("unexpected_error") : i
      })).equals(Buffer.from(o))) throw wF("path_not_canonical");
    let l = await A(m);
    if (s()) throw wF("workspace_moved");
    let c = r();
    if (c !== a && O(e, o, c)) throw wF("read_rule");
    let d = l.length > h;
    l.length = Math.min(l.length, h), l.sort((i, f) => i.name < f.name ? -1 : i.name > f.name ? 1 : 0);
    let u = [],
      T = qm(e, () => {
        for (let i of l) {
          let f = x(o, i.name);
          if (E(f, c, !i.isFile())) continue;
          if (i.name.trimEnd() !== i.name && E(`${f}${p}`, c, !i.isFile())) continue;
          if (u.length === tyn) return !0;
          u.push(i)
        }
        return !1
      }),
      N = await Promise.all(u.map((i) => W(m, i)));
    return {
      absPath: o,
      entries: N.filter((i) => i !== null),
      truncated: T || d && u.length > 0
    }
  } catch (o) {
    throw Met(o) !== void 0 ? o : H(o)
  }
}
var D = Pne | _.O_DIRECTORY | _.O_NOFOLLOW | Zs;
async function S(n, e) {
  let r = e.split(p).filter((a) => a !== ""),
    s = F(g(n).split(p), (a) => a !== "") - 1,
    o = await R(p, D);
  for (let [a, m] of r.entries()) {
    await using y = o;
    let l = `/proc/self/fd/${y.fd}/${m}`;
    o = await R(l, D).catch(async (c) => {
      let d = k(c);
      if (d === "ENOENT") await w(`/proc/self/fd/${y.fd}`).catch(() => {
        throw wF("unexpected_error")
      });
      if (d === "ENOTDIR" && (await w(l)).isSymbolicLink()) throw wF(a < s ? "path_not_canonical" : "symlink_in_path");
      throw c
    })
  }
  return o
}
async function A(n) {
  let e = await L(`/proc/self/fd/${n.fd}`).catch((s) => {
      throw k(s) === "ENOENT" ? wF("unexpected_error") : s
    }),
    r = [];
  for await (let s of e) if (r.push(s), r.length > h) break;
  return r
}
async function W(n, e) {
  let r = await Cv(e, `/proc/self/fd/${n.fd}/${e.name}`, "unknown");
  if (r === "unknown") return null;
  if (r === "symlink") return {
    name: e.name,
    isDirectory: !1,
    isSymlink: !0
  };
  if (r === "other") return {
    name: e.name,
    isDirectory: !1,
    isSpecial: !0
  };
  return {
    name: e.name,
    isDirectory: r === "dir"
  }
}

function O(n, e, r) {
  return p1e([], r).layer !== "allow" || qm(n, () => E(e, r, !0) || ["deny", "ask"].some((s) => Tft(e, r, "read", s) !== null))
}

function E(n, e, r) {
  return (r ? [{}, {
    isDirectory: !0
  }] : [{}]).some((o) => ["deny", "ask"].some((a) => la(n, e, "read", a, o) !== null))
}

function H(n) {
  switch (k(n)) {
    case "ENOENT":
      return wF("not_found");
    case "ENOTDIR":
      return wF("not_a_directory");
    case "ELOOP":
      return wF("symlink_in_path");
    case "ENAMETOOLONG":
      return wF("invalid_path");
    case "EACCES":
    case "EPERM":
      return wF("os_permission_denied");
    default:
      let e = `list_directory failed: ${Tg(n)??"not a filesystem error"}`;
      return t(e, {
        level: "error"
      }), wF("unexpected_error", e)
  }
}
export {
  tyn,
  dzr
};
