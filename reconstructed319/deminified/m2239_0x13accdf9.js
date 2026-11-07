// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import "B:/~BUN/root/chunk-vz9zea4j.js";
import "B:/~BUN/root/chunk-q78ga0zw.js";
import "B:/~BUN/root/chunk-db8vh085.js";
import "B:/~BUN/root/chunk-game8aqv.js";
import "B:/~BUN/root/chunk-wt4dg253.js";
import "B:/~BUN/root/chunk-drx9cnw1.js";
import { k, K, wr } from "B:/~BUN/root/chunk-y2g9f85n.js";
import "B:/~BUN/root/chunk-r5zmhp23.js";
import { En, Oc, ca } from "B:/~BUN/root/chunk-h4acfc9y.js";
import "B:/~BUN/root/chunk-ppmmt0c3.js";
import "B:/~BUN/root/chunk-eev762xg.js";
import "B:/~BUN/root/chunk-0w2htvr6.js";
import "B:/~BUN/root/chunk-n8cnxns2.js";
import "B:/~BUN/root/chunk-83p1z1q5.js";
import { iv, Dw } from "B:/~BUN/root/chunk-t4qpmjt5.js";
import "B:/~BUN/root/chunk-myfamxtp.js";
import { sa, ie } from "B:/~BUN/root/chunk-2pp12te6.js";
import "B:/~BUN/root/chunk-dayhhbfr.js";
import "B:/~BUN/root/chunk-15vbkr6z.js";
import "B:/~BUN/root/chunk-09sn55yf.js";
import "B:/~BUN/root/chunk-jdtvghyw.js";
import "B:/~BUN/root/chunk-xrwdh0g4.js";
import "B:/~BUN/root/chunk-mwfggkjt.js";
import { fdn, uFr } from "B:/~BUN/root/chunk-1g25msn4.js";
import { AEn } from "B:/~BUN/root/chunk-t8dpb5qp.js";
import { Yir } from "B:/~BUN/root/chunk-hfjaqmgk.js";
import "B:/~BUN/root/chunk-3vtkd50k.js";
import "B:/~BUN/root/chunk-mb9chr1y.js";
import "B:/~BUN/root/chunk-kssfps15.js";
import { NOi as trashName, FOi as trashName_2, HOi as ignoreFile } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { Rpt } from "B:/~BUN/root/chunk-56gmm7gd.js";
import { ro, vxe, u0 } from "B:/~BUN/root/chunk-nsneqfcc.js";
import "B:/~BUN/root/chunk-12nc74pv.js";
import "B:/~BUN/root/chunk-9wbhv9z5.js";
import { L } from "B:/~BUN/root/chunk-5ha2avah.js";
import { constants as h } from "fs";
import { basename as I, dirname as T, isAbsolute as z, join as w, parse as U, resolve as v, sep as W } from "path";
var G = 90000,
  S = "writer-locks";
function A(e) {
  return Date.now() - e < G;
}
var b = 8192,
  P = ".git",
  q = W === "\\" ? /[\\/]+/ : /\/+/;
async function Ne(e, cutoffMs, t = AEn()) {
  let tally = {
    removed: 0,
    errors: 0,
    newestKeptMs: null
  };
  try {
    let s = await C(t, w(e, uFr, "objects", "info", "alternates"), e, a => a.split(/\r?\n/, 1)[0] ?? "");
    if (s === "absent" || s === "leads_nowhere" || s === "malformed" || s !== "refused" && I(s) !== "objects") return tally;
    if (s === "refused") return l(tally), tally;
    let dir = T(s),
      identity = await t.fs.lstat(dir, {
        bigint: !0
      }),
      c = await t.fs.lstat(w(dir, "HEAD")).catch(() => null);
    if (!c?.isFile() && !c?.isSymbolicLink()) return l(tally), tally;
    await F(t, {
      kind: "git_dir",
      dir: dir,
      identity: identity
    }, {
      cutoffMs: cutoffMs,
      isLive: await N(t, e, T(dir)),
      tally: tally
    });
    for (let a of await X(t, dir, tally)) await F(t, a, {
      cutoffMs: cutoffMs,
      isLive: await N(t, e, a.dir),
      tally: tally
    }).catch(() => l(tally));
  } catch {
    l(tally);
  }
  return tally;
}
function g(e) {
  e.newestKeptMs = Date.now();
}
function _(e, n, t = W) {
  let [r, s] = [e, n].map(item => En((t === "\\" ? item.replaceAll("/", t) : item).replace(/^[a-z](?=:)/, o => o.toUpperCase())));
  return r === s;
}
function J(e, n) {
  let t = r => r.replace(/[A-Z]/g, s => s.toLowerCase());
  return _(e, n) || _(t(e), t(n));
}
function l(e) {
  e.errors++, g(e);
}
var H = e => e.replace(/(?<![\r\n])[\r\n]+$/, "");
async function C(e, n, t, r, s) {
  let i = await M(e, n, r);
  if (i === "absent" || i === "malformed" || i === "refused") return i;
  if (ca(i, t)) return "refused";
  let o = s === void 0 ? i : v(s, i);
  if (!z(o)) return "refused";
  let c = await D(e, o);
  return c === "plainly" ? o : c === "missing" && !/[\r\n]/.test(i) ? "leads_nowhere" : "refused";
}
async function D(e, n) {
  let {
      root: root
    } = U(n),
    r = root;
  for (let s of n.slice(root.length).split(q)) {
    if (s === "") continue;
    r = w(r, s);
    try {
      if ((await e.fs.lstat(r)).isSymbolicLink()) return "refused";
    } catch (error) {
      return wr(error) ? "missing" : "refused";
    }
  }
  return "plainly";
}
async function M(e, n, t) {
  try {
    let r = await ie().readFileFdGated(n, b);
    if (r === null) {
      let i = await e.fs.lstat(n);
      return i.isFile() && i.size <= b ? "refused" : "malformed";
    }
    let s = t(r.content);
    return s === "" || s.includes("\x00") ? "malformed" : s;
  } catch (error) {
    return K(error) ? "absent" : "refused";
  }
}
async function N(e, n, t) {
  let r = T(T(n)),
    s = w(iv(await Dw(t, void 0), r), fdn),
    i = await Promise.all(L([n, s]).map(item => Q(e, item)));
  return o => i.some(item => item(o));
}
async function Q(e, n) {
  let t = w(n, S),
    r;
  try {
    r = await e.fs.readdir(t);
  } catch (error) {
    return K(error) ? () => !1 : () => !0;
  }
  let s = new Set();
  for (let i of r) {
    let o = i.endsWith(".writer") ? await e.fs.lstat(w(t, i)).catch(() => null) : null;
    if (o !== null && A(o.mtimeMs)) s.add(i.slice(0, -7));
  }
  return i => s.has(i);
}
async function X(e, n, t) {
  let r = w(n, "worktrees"),
    s = await e.fs.lstat(r).catch(c => K(c) ? "absent" : null);
  if (s === "absent") {
    if (!(await e.fs.lstat(n).catch(() => null))?.isDirectory()) l(t);
    return [];
  }
  let i = s?.isDirectory() && (await D(e, r)) === "plainly" ? await e.fs.readdir(r).catch(() => null) : null;
  if (i === null) return l(t), [];
  let o = [];
  for (let c of i) {
    let a = w(r, c),
      u = await e.fs.lstat(a).catch(() => null);
    if (u === null || u.isSymbolicLink()) {
      l(t);
      continue;
    }
    if (!u.isDirectory()) continue;
    let f = await C(e, w(a, "gitdir"), a, p => p.trimEnd(), a);
    if (f === "leads_nowhere") continue;
    if (f === "absent" || f === "refused" || f === "malformed" || I(f) !== P) {
      l(t);
      continue;
    }
    let dir_2 = T(f);
    if (Oc(dir_2)) {
      l(t);
      continue;
    }
    let gitFileLine = await M(e, f, H);
    if (gitFileLine === "absent" || gitFileLine === "refused") {
      l(t);
      continue;
    }
    if (gitFileLine === "malformed" || !gitFileLine.startsWith("gitdir: ")) {
      g(t);
      continue;
    }
    let y = gitFileLine.slice(8);
    if (ca(y, dir_2)) {
      g(t);
      continue;
    }
    let O = await D(e, v(dir_2, y));
    if (O === "refused") {
      l(t);
      continue;
    }
    if (O === "missing") {
      g(t);
      continue;
    }
    if (_(v(dir_2, y), a)) o.push({
      kind: "linked_worktree",
      dir: dir_2,
      gitFileLine: gitFileLine
    });else {
      let [p, R] = await Promise.all([v(dir_2, y), a].map(item => e.fs.lstat(item, {
        bigint: !0
      }).catch(() => null)));
      if (p?.ino && p.dev === R?.dev && p.ino === R.ino) l(t);else g(t);
    }
  }
  return o;
}
async function Z(e, n) {
  switch (n.kind) {
    case "git_dir":
      {
        let t = await e.lstat("");
        return t.dev === n.identity.dev && Rpt(t.ino, n.identity.ino);
      }
    case "linked_worktree":
      return ee(e, n.gitFileLine);
  }
}
var V = {
  git_dir: {
    trashName: trashName,
    ignoreFile: void 0
  },
  linked_worktree: {
    trashName: trashName_2,
    ignoreFile: ignoreFile
  }
};
async function ee(e, n) {
  let t = await e.open(P, h.O_RDONLY | h.O_NONBLOCK).catch(() => null);
  if (t === null) return !1;
  try {
    let [r, s] = await Promise.all([t.stat({
      bigint: !0
    }), e.lstat(P)]);
    if (r.dev !== s.dev || r.ino !== s.ino) return !1;
    let i = Buffer.alloc(b + 1),
      {
        bytesRead: bytesRead
      } = await t.read(i, 0, i.length, 0);
    return bytesRead <= b && H(i.toString("utf8", 0, bytesRead)) === n;
  } catch {
    return !1;
  } finally {
    await t.close().catch(() => {});
  }
}
function te(e, n, t) {
  let {
    root: root_2,
    dir: dir_3,
    base: base
  } = e.path.parse(e.path.normalize(t));
  return n.holdOutside(root_2, [...dir_3.slice(root_2.length).split(e.path.sep), base].filter(item => item !== "").join("/"), !0);
}
async function x(e, n, t = n.realRoot, r) {
  let s = h.O_DIRECTORY | ro,
    i = s | u0 | h.O_NOFOLLOW,
    o = await (n.backend === "win32_handle" ? te(e, n, t) : n.backend === "darwin_at" ? e.fs.open(t, s | vxe) : t.split("/").filter(item => item !== "").reduce(async (acc, item) => {
      let u = await acc;
      return e.fs.open(`/proc/self/fd/${u.fd}/${item}`, i).finally(() => u.close().catch(() => {}));
    }, e.fs.open("/", i))).catch(() => null);
  if (o === null) return !1;
  try {
    let [c, a] = await Promise.all(["fd" in o ? o.stat({
      bigint: !0
    }) : o.stat(), r ?? n.lstat("")]);
    return !sa(a.ino) && c.dev === a.dev && c.ino === a.ino;
  } catch {
    return !1;
  } finally {
    await o.close().catch(() => {});
  }
}
async function F(e, n, {
  cutoffMs: cutoffMs_2,
  isLive: isLive,
  tally: tally_2
}) {
  let i = n.dir,
    {
      trashName: trashName_3,
      ignoreFile: ignoreFile_2
    } = V[n.kind];
  try {
    if (!(await e.fs.lstat(e.path.join(i, trashName_3))).isDirectory()) {
      l(tally_2);
      return;
    }
  } catch (error) {
    if (!K(error) || (await D(e, i)) !== "plainly") l(tally_2);
    return;
  }
  let realRoot = await e.fs.realpath(i).catch(() => null);
  if (realRoot === null || !J(realRoot, i)) {
    l(tally_2);
    return;
  }
  let u = e.path.join(realRoot, trashName_3),
    f = await Yir(e, {
      gitRoot: i,
      realRoot: realRoot
    }).catch(() => null);
  if (f === null || "unavailable" in f) {
    l(tally_2);
    return;
  }
  let d = f;
  try {
    if (!(await x(e, d)) || !_(realRoot, i) && !(await x(e, d, i)) || !(await Z(d, n)) || !(await d.lstat(trashName_3)).isDirectory()) {
      l(tally_2);
      return;
    }
    await ne(e, d, trashName_3, u, {
      cutoffMs: cutoffMs_2,
      isLive: isLive,
      tally: tally_2
    }), await re(e, d, trashName_3, u, tally_2, ignoreFile_2);
  } catch (error) {
    if (!K(error)) l(tally_2);
  } finally {
    await d.close().catch(() => {});
  }
}
async function ne(e, n, t, r, {
  cutoffMs: cutoffMs_3,
  isLive: isLive_2,
  tally: tally_3
}) {
  let c = await e.fs.readdir(r);
  for (let a of c) {
    let u = `${t}/${a}`;
    try {
      if (!(await n.lstat(u)).isDirectory()) continue;
      if (isLive_2(a.replace(/\.(?:staging|set-aside)$/, ""))) {
        g(tally_3);
        continue;
      }
      let f = await j(e, e.path.join(r, a));
      if (f < cutoffMs_3) await B(n, e, u, cutoffMs_3), tally_3.removed++;else tally_3.newestKeptMs = Math.max(tally_3.newestKeptMs ?? -1 / 0, f);
    } catch (error) {
      if (error instanceof E) g(tally_3);else if (!K(error)) l(tally_3);
    }
  }
}
async function re(e, n, t, r, s, i) {
  let o = await e.fs.readdir(r).catch(() => ["?"]);
  try {
    if (i !== void 0 && o.length === 1 && o[0] === i) {
      if ((await n.lstat(`${t}/${i}`)).isFile()) await n.unlink(`${t}/${i}`), await n.rmdir(t).catch(async c => {
        if (k(c) !== "ENOTEMPTY") throw c;
        await n.create(`${t}/${i}`, Buffer.from(`*
`), 384);
      });
    } else if (o.length === 0) await n.rmdir(t);
  } catch (error) {
    if (!K(error) && k(error) !== "ENOTEMPTY") s.errors++;
  }
}
async function j(e, n) {
  let mtimeMs = (await e.fs.lstat(n)).mtimeMs,
    r = await e.fs.readdir(n);
  for (let s of r) {
    let i = e.path.join(n, s);
    try {
      let o = await e.fs.lstat(i);
      if (mtimeMs = Math.max(mtimeMs, o.mtimeMs), o.isDirectory()) mtimeMs = Math.max(mtimeMs, await j(e, i));
    } catch (error) {
      if (!K(error)) throw error;
    }
  }
  return mtimeMs;
}
class E extends Error {}
async function B(e, n, t, r) {
  if (!(Number((await e.lstat(t)).mtimeMs) < r)) throw new E();
  let s = await n.fs.readdir(n.path.join(e.realRoot, ...t.split("/"))).catch(() => []),
    i = [];
  for (let o of s) {
    let c = `${t}/${o}`;
    try {
      if ((await e.lstat(c)).isDirectory()) await B(e, n, c, r);else await e.unlink(c);
    } catch (error) {
      if (error instanceof E || k(error) === "ENOTEMPTY") throw error;
      if (!K(error)) i.push(error);
    }
  }
  if (i.length > 0) throw i[0];
  await e.rmdir(t);
}
export { Ne as sweepCheckoutSessionTrash };