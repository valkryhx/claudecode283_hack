// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import "B:/~BUN/root/chunk-9ka04m0y.js";
import "B:/~BUN/root/chunk-rwkgcmm8.js";
import { L } from "B:/~BUN/root/chunk-rpez7z7a.js";
import "B:/~BUN/root/chunk-hg8ngszx.js";
import "B:/~BUN/root/chunk-jthpk6wv.js";
import { k, G, qi } from "B:/~BUN/root/chunk-3aez4b53.js";
import "B:/~BUN/root/chunk-89mss1tj.js";
import { $n, Vi } from "B:/~BUN/root/chunk-4bx17ygx.js";
import "B:/~BUN/root/chunk-fbyz9h0p.js";
import "B:/~BUN/root/chunk-nggrknsv.js";
import "B:/~BUN/root/chunk-j704adqd.js";
import { iS, $_ } from "B:/~BUN/root/chunk-4bgg5sdy.js";
import "B:/~BUN/root/chunk-d9rmnpx3.js";
import { gu, se } from "B:/~BUN/root/chunk-6za2ez23.js";
import "B:/~BUN/root/chunk-xf0m410v.js";
import "B:/~BUN/root/chunk-c09hf5e4.js";
import "B:/~BUN/root/chunk-je1b1drr.js";
import { P1t, K9n } from "B:/~BUN/root/chunk-2zk4vqr8.js";
import { P3t } from "B:/~BUN/root/chunk-2wkdz964.js";
import { jOn } from "B:/~BUN/root/chunk-bmv6ykpx.js";
import "B:/~BUN/root/chunk-7c8rc0p5.js";
import "B:/~BUN/root/chunk-1kfn24jp.js";
import "B:/~BUN/root/chunk-h3vz9w4e.js";
import { sxs as trashName, ixs as trashName_2, axs as ignoreFile } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { znn } from "B:/~BUN/root/chunk-6wyzmyt1.js";
import "B:/~BUN/root/chunk-j2tkftkw.js";
import { Zs, Z7e, Pne } from "B:/~BUN/root/chunk-wegca9zh.js";
import "B:/~BUN/root/chunk-bp5d1azq.js";
import { constants as _ } from "fs";
import { basename as F, dirname as T, isAbsolute as B, join as w, parse as z, resolve as v, sep as H } from "path";
var S = 90000,
  A = "writer-locks";
var b = 8192,
  P = ".git",
  U = H === "\\" ? /[\\/]+/ : /\/+/;
async function Ae(e, cutoffMs, t = P3t()) {
  let tally = {
    removed: 0,
    errors: 0,
    newestKeptMs: null
  };
  try {
    let s = await C(t, w(e, K9n, "objects", "info", "alternates"), e, c => c.split(/\r?\n/, 1)[0] ?? "");
    if (s === "absent" || s === "leads_nowhere" || s === "malformed" || s !== "refused" && F(s) !== "objects") return tally;
    if (s === "refused") return l(tally), tally;
    let dir = T(s),
      identity = await t.fs.lstat(dir, {
        bigint: !0
      }),
      a = await t.fs.lstat(w(dir, "HEAD")).catch(() => null);
    if (!a?.isFile() && !a?.isSymbolicLink()) return l(tally), tally;
    await x(t, {
      kind: "git_dir",
      dir: dir,
      identity: identity
    }, {
      cutoffMs: cutoffMs,
      isLive: await N(t, e, T(dir)),
      tally: tally
    });
    for (let c of await Q(t, dir, tally)) await x(t, c, {
      cutoffMs: cutoffMs,
      isLive: await N(t, e, c.dir),
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
function h(e, n, t = H) {
  let [r, s] = [e, n].map(item => $n((t === "\\" ? item.replaceAll("/", t) : item).replace(/^[a-z](?=:)/, o => o.toUpperCase())));
  return r === s;
}
function q(e, n) {
  let t = r => r.replace(/[A-Z]/g, s => s.toLowerCase());
  return h(e, n) || h(t(e), t(n));
}
function l(e) {
  e.errors++, g(e);
}
var W = e => e.replace(/(?<![\r\n])[\r\n]+$/, "");
async function C(e, n, t, r, s) {
  let i = await M(e, n, r);
  if (i === "absent" || i === "malformed" || i === "refused") return i;
  if (Vi(i, t)) return "refused";
  let o = s === void 0 ? i : v(s, i);
  if (!B(o)) return "refused";
  let a = await E(e, o);
  return a === "plainly" ? o : a === "missing" && !/[\r\n]/.test(i) ? "leads_nowhere" : "refused";
}
async function E(e, n) {
  let {
      root: root
    } = z(n),
    r = root;
  for (let s of n.slice(root.length).split(U)) {
    if (s === "") continue;
    r = w(r, s);
    try {
      if ((await e.fs.lstat(r)).isSymbolicLink()) return "refused";
    } catch (error) {
      return qi(error) ? "missing" : "refused";
    }
  }
  return "plainly";
}
async function M(e, n, t) {
  try {
    let r = await se().readFileFdGated(n, b);
    if (r === null) {
      let i = await e.fs.lstat(n);
      return i.isFile() && i.size <= b ? "refused" : "malformed";
    }
    let s = t(r.content);
    return s === "" || s.includes("\x00") ? "malformed" : s;
  } catch (error) {
    return G(error) ? "absent" : "refused";
  }
}
async function N(e, n, t) {
  let r = T(T(n)),
    s = w(iS(await $_(t, void 0), r), P1t),
    i = await Promise.all(L([n, s]).map(item => J(e, item)));
  return o => i.some(item => item(o));
}
async function J(e, n) {
  let t = w(n, A),
    r;
  try {
    r = await e.fs.readdir(t);
  } catch (error) {
    return G(error) ? () => !1 : () => !0;
  }
  let s = new Set();
  for (let i of r) {
    let o = i.endsWith(".writer") ? await e.fs.lstat(w(t, i)).catch(() => null) : null;
    if (o !== null && Date.now() - o.mtimeMs < S) s.add(i.slice(0, -7));
  }
  return i => s.has(i);
}
async function Q(e, n, t) {
  let r = w(n, "worktrees"),
    s = await e.fs.lstat(r).catch(a => G(a) ? "absent" : null);
  if (s === "absent") {
    if (!(await e.fs.lstat(n).catch(() => null))?.isDirectory()) l(t);
    return [];
  }
  let i = s?.isDirectory() && (await E(e, r)) === "plainly" ? await e.fs.readdir(r).catch(() => null) : null;
  if (i === null) return l(t), [];
  let o = [];
  for (let a of i) {
    let c = w(r, a),
      m = await e.fs.lstat(c).catch(() => null);
    if (m === null || m.isSymbolicLink()) {
      l(t);
      continue;
    }
    if (!m.isDirectory()) continue;
    let f = await C(e, w(c, "gitdir"), c, p => p.trimEnd(), c);
    if (f === "leads_nowhere") continue;
    if (f === "absent" || f === "refused" || f === "malformed" || F(f) !== P) {
      l(t);
      continue;
    }
    let dir_2 = T(f),
      gitFileLine = await M(e, f, W);
    if (gitFileLine === "absent" || gitFileLine === "refused") {
      l(t);
      continue;
    }
    if (gitFileLine === "malformed" || !gitFileLine.startsWith("gitdir: ")) {
      g(t);
      continue;
    }
    let y = gitFileLine.slice(8);
    if (Vi(y, dir_2)) {
      g(t);
      continue;
    }
    let O = await E(e, v(dir_2, y));
    if (O === "refused") {
      l(t);
      continue;
    }
    if (O === "missing") {
      g(t);
      continue;
    }
    if (h(v(dir_2, y), c)) o.push({
      kind: "linked_worktree",
      dir: dir_2,
      gitFileLine: gitFileLine
    });else {
      let [p, R] = await Promise.all([v(dir_2, y), c].map(item => e.fs.lstat(item, {
        bigint: !0
      }).catch(() => null)));
      if (p?.ino && p.dev === R?.dev && p.ino === R.ino) l(t);else g(t);
    }
  }
  return o;
}
async function X(e, n) {
  switch (n.kind) {
    case "git_dir":
      {
        let t = await e.lstat("");
        return t.dev === n.identity.dev && znn(t.ino, n.identity.ino);
      }
    case "linked_worktree":
      return V(e, n.gitFileLine);
  }
}
var Z = {
  git_dir: {
    trashName: trashName,
    ignoreFile: void 0
  },
  linked_worktree: {
    trashName: trashName_2,
    ignoreFile: ignoreFile
  }
};
async function V(e, n) {
  let t = await e.open(P, _.O_RDONLY | _.O_NONBLOCK).catch(() => null);
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
    return bytesRead <= b && W(i.toString("utf8", 0, bytesRead)) === n;
  } catch {
    return !1;
  } finally {
    await t.close().catch(() => {});
  }
}
function ee(e, n, t) {
  let {
    root: root_2,
    dir: dir_3,
    base: base
  } = e.path.parse(e.path.normalize(t));
  return n.holdOutside(root_2, [...dir_3.slice(root_2.length).split(e.path.sep), base].filter(item => item !== "").join("/"), !0);
}
async function I(e, n, t = n.realRoot) {
  let r = _.O_DIRECTORY | Zs,
    s = r | Pne | _.O_NOFOLLOW,
    i = await (n.backend === "win32_handle" ? ee(e, n, t) : n.backend === "darwin_at" ? e.fs.open(t, r | Z7e) : t.split("/").filter(item => item !== "").reduce(async (acc, item) => {
      let c = await acc;
      return e.fs.open(`/proc/self/fd/${c.fd}/${item}`, s).finally(() => c.close().catch(() => {}));
    }, e.fs.open("/", s))).catch(() => null);
  if (i === null) return !1;
  try {
    let [o, a] = await Promise.all(["fd" in i ? i.stat({
      bigint: !0
    }) : i.stat(), n.lstat("")]);
    return !gu(a.ino) && o.dev === a.dev && o.ino === a.ino;
  } catch {
    return !1;
  } finally {
    await i.close().catch(() => {});
  }
}
async function x(e, n, {
  cutoffMs: cutoffMs_2,
  isLive: isLive,
  tally: tally_2
}) {
  let i = n.dir,
    {
      trashName: trashName_3,
      ignoreFile: ignoreFile_2
    } = Z[n.kind];
  try {
    if (!(await e.fs.lstat(e.path.join(i, trashName_3))).isDirectory()) {
      l(tally_2);
      return;
    }
  } catch (error) {
    if (!G(error) || (await E(e, i)) !== "plainly") l(tally_2);
    return;
  }
  let realRoot = await e.fs.realpath(i).catch(() => null);
  if (realRoot === null || !q(realRoot, i)) {
    l(tally_2);
    return;
  }
  let m = e.path.join(realRoot, trashName_3),
    f = await jOn(e, {
      gitRoot: i,
      realRoot: realRoot
    }).catch(() => null);
  if (f === null || "unavailable" in f) {
    l(tally_2);
    return;
  }
  let d = f;
  try {
    if (!(await I(e, d)) || !h(realRoot, i) && !(await I(e, d, i)) || !(await X(d, n)) || !(await d.lstat(trashName_3)).isDirectory()) {
      l(tally_2);
      return;
    }
    await te(e, d, trashName_3, m, {
      cutoffMs: cutoffMs_2,
      isLive: isLive,
      tally: tally_2
    }), await ie(e, d, trashName_3, m, tally_2, ignoreFile_2);
  } catch (error) {
    if (!G(error)) l(tally_2);
  } finally {
    await d.close().catch(() => {});
  }
}
async function te(e, n, t, r, {
  cutoffMs: cutoffMs_3,
  isLive: isLive_2,
  tally: tally_3
}) {
  let a = await e.fs.readdir(r);
  for (let c of a) {
    let m = `${t}/${c}`;
    try {
      if (!(await n.lstat(m)).isDirectory()) continue;
      if (isLive_2(c.replace(/\.staging$/, ""))) {
        g(tally_3);
        continue;
      }
      let f = await j(e, e.path.join(r, c));
      if (f < cutoffMs_3) await K(n, e, m, cutoffMs_3), tally_3.removed++;else tally_3.newestKeptMs = Math.max(tally_3.newestKeptMs ?? -1 / 0, f);
    } catch (error) {
      if (error instanceof D) g(tally_3);else if (!G(error)) l(tally_3);
    }
  }
}
async function ie(e, n, t, r, s, i) {
  let o = await e.fs.readdir(r).catch(() => ["?"]);
  try {
    if (i !== void 0 && o.length === 1 && o[0] === i) {
      if ((await n.lstat(`${t}/${i}`)).isFile()) await n.unlink(`${t}/${i}`), await n.rmdir(t).catch(async a => {
        if (k(a) !== "ENOTEMPTY") throw a;
        await n.create(`${t}/${i}`, Buffer.from(`*
`), 384);
      });
    } else if (o.length === 0) await n.rmdir(t);
  } catch (error) {
    if (!G(error) && k(error) !== "ENOTEMPTY") s.errors++;
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
      if (!G(error)) throw error;
    }
  }
  return mtimeMs;
}
class D extends Error {}
async function K(e, n, t, r) {
  if (!(Number((await e.lstat(t)).mtimeMs) < r)) throw new D();
  let s = await n.fs.readdir(n.path.join(e.realRoot, ...t.split("/"))).catch(() => []),
    i = [];
  for (let o of s) {
    let a = `${t}/${o}`;
    try {
      if ((await e.lstat(a)).isDirectory()) await K(e, n, a, r);else await e.unlink(a);
    } catch (error) {
      if (error instanceof D || k(error) === "ENOTEMPTY") throw error;
      if (!G(error)) i.push(error);
    }
  }
  if (i.length > 0) throw i[0];
  await e.rmdir(t);
}
export { Ae as sweepCheckoutSessionTrash };