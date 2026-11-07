// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  z,
  q
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  R,
  qe,
  d,
  k,
  tPe
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  J
} from "B:/~BUN/root/chunk-r5zmhp23.js";
import {
  op
} from "B:/~BUN/root/chunk-ke150ry1.js";
import {
  t,
  io,
  ps,
  ie,
  Mnt,
  gP
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Hn,
  tb
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  Eqe,
  iG,
  RSt,
  JS
} from "B:/~BUN/root/chunk-1g25msn4.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  x
} from "B:/~BUN/root/chunk-mwfggkjt.js";
import {
  Is
} from "B:/~BUN/root/chunk-nsneqfcc.js";
import {
  hh
} from "B:/~BUN/root/chunk-5xx1vfdh.js";
import {
  Hm,
  eO,
  To
} from "B:/~BUN/root/chunk-j05gjqgd.js";
import {
  aGe
} from "B:/~BUN/root/chunk-ym6b88b3.js";
import {
  L
} from "B:/~BUN/root/chunk-5ha2avah.js";
import {
  randomBytes as Tt
} from "crypto";
import {
  constants as O,
  fstat as Et
} from "fs";
import {
  copyFile as bt,
  link as vt,
  lstat as S,
  mkdir as rt,
  open as Y,
  readdir as St,
  readlink as F,
  realpath as H,
  symlink as Z,
  unlink as v
} from "fs/promises";
import {
  basename as M,
  dirname as y,
  isAbsolute as ct,
  join as E,
  resolve as C,
  sep as N
} from "path";
var W = O.O_NOFOLLOW ?? 0,
  Nt = 8388608,
  cLt = 5368709120,
  $po = "5GB",
  Rv = 67108864;

function ALn() {
  return Hm()
}

function een() {
  let e = tb()?.adoptShellOutputRoot;
  if (e !== void 0) return E(e, z(), "tasks");
  let n = Hn();
  if (n.outputDir === void 0 || q()) n.outputDir = E(eO(), z(), "tasks");
  return n.outputDir
}

function ASs(e) {
  return E(eO(), e, "tasks")
}

function xLn() {
  return tb()?.adoptShellOutputRoot !== void 0 ? een() : (q() ? void 0 : Hn().outputDir) ?? E(eO(), z(), "tasks")
}

function $t() {
  let e = Hn();
  if (e.outputDir === void 0) {
    if (tb() !== null) return E(eO(), z(), "tasks");
    e.outputDir = E(eO(), z(), "tasks")
  }
  return e.outputDir
}

function ten(e) {
  if (q()) throw Error("Task output is not written to disk in a diskless session");
  let n = Hn().outputPathBindings.get(e);
  if (n !== void 0) return n;
  let i = Upo(e);
  return Hn().outputPathBindings.set(e, i), i
}

function Upo(e) {
  return E(een(), `${e}.output`)
}

function Rd(e) {
  if (q()) throw Error("Task output has no file in a diskless session");
  let n = Hn().outputPathBindings.get(e);
  if (n !== void 0) return n;
  return E($t(), `${e}.output`)
}

function B(e) {
  let n = Hn().pendingOutputOps;
  return n.add(e), e.finally(() => n.delete(e)).catch(() => {}), e
}
var Rt = 16777216,
  I = `
[output omitted: it could not be written to disk]
`,
  Q = [50, 100, 200, 400, 800, 1600],
  j = Q.reduce((e, n) => e + n, 0);
class bvr {
  #p;
  #n = null;
  #t = [];
  #h = 0;
  #o = !1;
  #e = 0;
  #r = 0;
  #i = !1;
  #u = new Set;
  #c = !1;
  #s = null;
  #a = null;
  #l = null;
  #f = null;
  constructor(e, n) {
    this.#p = n ?? ten(e)
  }
  append(e) {
    if (this.#o) return;
    if (this.#h += e.length, this.#h > cLt) this.#o = !0;
    let n = this.#o ? `
[output truncated: exceeded ${$po} disk cap]
` : e;
    if (this.#t.push(n), this.#e += n.length, !this.#l) this.#l = new Promise((i) => {
      this.#f = i
    }), B(this.#O())
  }
  appendTrailer(e, n) {
    if (!this.#o) this.#s = n;
    this.append(e)
  }
  flush() {
    return this.#l ?? Promise.resolve()
  }
  get failing() {
    return this.#i
  }
  get lostOutput() {
    return this.#c
  }
  get unwrittenChars() {
    return this.#e
  }
  cancel() {
    this.#r += 1, this.#t.length = 0, this.#e = 0, this.#s = null, this.#a?.abort(), this.#a = null
  }
  async #d() {
    while (!0) {
      try {
        if (!this.#n) this.#n = await UJe(this.#p);
        while (!0) {
          let e = this.#r;
          try {
            await this.#y()
          } catch (n) {
            if (this.#r === e) this.#c = !0, this.#t.unshift(I), this.#e += I.length;
            throw n
          }
          if (this.#t.length === 0) break
        }
      } finally {
        if (this.#n) {
          let e = this.#n;
          this.#n = null, await e.close()
        }
      }
      if (this.#t.length) continue;
      break
    }
  }
  #y() {
    return this.#n.appendFile(this.#m())
  }
  #m() {
    let e = this.#t.splice(0, this.#t.length);
    this.#e = 0, this.#s = null;
    let n = 0;
    for (let r of e) n += Buffer.byteLength(r, "utf8");
    let i = Buffer.allocUnsafe(n),
      s = 0;
    for (let r of e) s += i.write(r, s, "utf8");
    return i
  }
  async #O() {
    try {
      await this.#d(), this.#w()
    } catch (e) {
      if (this.#g(e) !== null) {
        if (!this.#i) this.#i = !0, t(`Task output closing line delayed: its file is busy (EBUSY); trying again for up to ${j} ms`);
        for (let [n, i] of Q.entries()) {
          if (this.#a ??= new AbortController, await J(i, this.#a.signal), this.#t.length === 0) return;
          let s = this.#r;
          try {
            await this.#d(), this.#w();
            return
          } catch (r) {
            if (this.#t.length === 0 && this.#r !== s) return;
            let o = this.#g(r);
            if (o === null || n === Q.length - 1) {
              this.#k(r, o);
              return
            }
          }
        }
        return
      }
      if (!this.#i) this.#i = !0, t(`Task output drain failed (will retry once): ${e}`, {
        level: "error"
      });
      if (this.#t.length > 0) try {
        await this.#d(), this.#w()
      } catch (n) {
        this.#k(n, null)
      }
    } finally {
      let e = this.#f;
      this.#l = null, this.#f = null, e()
    }
  }
  #w() {
    this.#i = !1, this.#u.clear()
  }
  #g(e) {
    return x() === "windows" && k(e) === "EBUSY" ? this.#s : null
  }
  #k(e, n) {
    let i = k(e),
      s = i !== void 0 && tPe.has(i) ? "exhaustion" : n ?? "unexpected",
      r = `${s}:${i??"no errno"}`;
    if (!this.#u.has(r)) switch (this.#u.add(r), s) {
      case "exhaustion":
        t(`Task output drain retry failed (${i}): ${e}`, {
          level: "error"
        });
        break;
      case "exited":
        t(`Task output closing line not written (EBUSY): the file was still busy after ${j} ms`, {
          level: "warn"
        });
        break;
      case "killed":
        a(qe(e, `closing line of a stopped shell command not written: output file still busy after ${j} ms`));
        break;
      case "unexpected":
        a(e);
        break
    }
    if (this.#e > Rt) t(`Task output still cannot be written (${i??"no errno"}); dropped ${this.#e} chars of unwritten output`, {
      level: "error"
    }), this.#c = !0, this.#t.length = 0, this.#t.push(I), this.#e = I.length, this.#s = null
  }
}

function pt(e) {
  let n = Hn().diskOutputs.get(e);
  if (!n) n = new bvr(e), Hn().diskOutputs.set(e, n);
  return n
}

function fmt(e, n) {
  pt(e).append(n)
}

function uLt(e, n) {
  let i = pt(e);
  if (n === "killed") i.appendTrailer(`
[killed]
`, "killed");
  else i.appendTrailer(`
[exited with code ${n.exitCode??"unknown"}]
`, "exited")
}

function Kp(e) {
  return B((async () => {
    let n = Hn(),
      i = n.diskOutputs.get(e);
    if (i) {
      if (await i.flush(), i.failing && i.unwrittenChars > 0) t(`Task output writer evicted while failing; discarded ${i.unwrittenChars} chars of unwritten output`, {
        level: "error"
      });
      n.diskOutputs.delete(e)
    }
    PLn(e)
  })())
}

function PLn(e) {
  let n = Hn().outputPathBindings.get(e);
  if (n !== void 0 && tb() === null && n === E(een(), `${e}.output`)) Hn().outputPathBindings.delete(e)
}
async function xSs(e, n, i = Nt) {
  try {
    let s = await kLe(Rd(e));
    if (!s) return {
      content: "",
      newOffset: n
    };
    let r;
    try {
      r = await Mnt(s, n, i)
    } finally {
      await s.close()
    }
    if (!r) return {
      content: "",
      newOffset: n
    };
    return {
      content: r.content,
      newOffset: n + r.bytesRead
    }
  } catch (s) {
    let r = k(s);
    if (r === "ENOENT" || BJe(s)) return {
      content: "",
      newOffset: n
    };
    if (r && tPe.has(r)) t(`getTaskOutputDelta failed (${r}): ${s}`, {
      level: "error"
    });
    else a(s);
    return {
      content: "",
      newOffset: n
    }
  }
}
async function dCe(e) {
  try {
    let n = await kLe(Rd(e));
    if (!n) return 0;
    try {
      return (await n.stat()).size
    } finally {
      await n.close()
    }
  } catch (n) {
    if (BJe(n)) throw n;
    let i = k(n);
    if (i === "ENOENT") return 0;
    if (i === "EACCES" || i === "EPERM") {
      let s = await S(Rd(e)).catch(() => null);
      if (s !== null && s.isFile() && (s.mode & 256) === 0) return s.size;
      h(Rd(e), `output no longer measurable (${i})`)
    }
    if (i && tPe.has(i)) t(`getTaskOutputSize failed (${i}): ${n}`, {
      level: "error"
    });
    else a(n);
    return 0
  }
}
async function TSa(e, n) {
  if (q()) return;
  let i = Hn(),
    s = L([...i.outputDir !== void 0 ? [i.outputDir] : [], ...[...i.outputPathBindings.values()].map((o) => y(o))]);
  if (s.length === 0) return;
  let r = e + N;
  for (let o of s) {
    let l;
    try {
      l = await St(o)
    } catch (u) {
      let f = k(u);
      if (f !== "ENOENT")
        if (f && tPe.has(f)) t(`repointTaskOutputSymlinks readdir failed (${f}): ${u}`, {
          level: "error"
        });
        else a(u);
      continue
    }
    await xt(o, l, r, e, n)
  }
}
async function xt(e, n, i, s, r) {
  let o = Hn().linkedOutputs;
  for (let l of n) {
    if (!l.endsWith(".output")) continue;
    let u = E(e, l),
      f = o.get(u),
      c;
    try {
      c = x() === "windows" ? void 0 : await D(u, {
        replaceLeaf: !0
      });
      let w = c?.ioPath ?? u;
      if (f === void 0 && e === Hn().outputDir) f = await F(w).then((p) => ht(u, w, p)).catch(() => {
        return
      });
      if (f === void 0 || !f.startsWith(i)) continue;
      let g = r + f.slice(s.length),
        m = await et(w);
      if (m === null) continue;
      if (m !== f) h(u, "output symlink was re-pointed");
      if (await c?.recheckBeforeWrite(), await v(w), o.get(u) === f) await st(u, g);
      try {
        await c?.recheckBeforeWrite(), await Z(g, w).catch(async (p) => {
          if (k(p) !== "EEXIST") throw p;
          let b = await F(w).catch(() => {
            return
          });
          if (b !== g && b !== o.get(u)) throw p
        })
      } catch (p) {
        if (o.get(u) === g) o.delete(u);
        throw p
      }
      if (await F(w).catch(() => {
          return
        }) === g) o.set(u, g)
    } catch (w) {
      if (k(w) !== "ENOENT" && !BJe(w)) a(w)
    } finally {
      await c?.close()
    }
  }
}
async function _(e, n, i = 0) {
  if (q()) throw Error("Task output is not written to disk in a diskless session");
  if (x() === "windows") return await rt(y(e), {
    recursive: !0
  }), Y(e, n.windowsFlags);
  let s = await D(e, {
    replaceLeaf: !0
  });
  try {
    let r = await nt(s.ioPath);
    if (r?.isSymbolicLink()) {
      let u = await tt(e, s.ioPath);
      if (u === null) {
        if (n.relooked) h(e, "output leaf changed during open");
        return await s.close(), _(e, {
          ...n,
          relooked: !0
        }, i)
      }
      if (n.exclusive || i > 0 || !P(u)) h(e, "output link is not appendable");
      return await _(u, {
        exclusive: n.exclusive,
        windowsFlags: n.windowsFlags
      }, i + 1)
    }
    if (r !== null && (!r.isFile() || r.nlink !== 1 && i === 0)) h(e, "existing output is not a plain file");
    await s.recheckBeforeWrite();
    let o = n.exclusive || r === null,
      l;
    try {
      l = await iG(s.ioPath, O.O_WRONLY | O.O_APPEND | (o ? O.O_CREAT | O.O_EXCL : 0) | W | (O.O_NONBLOCK ?? 0), x())
    } catch (u) {
      if (!n.exclusive && k(u) === "EEXIST" && !n.retried) return await s.close(), _(e, {
        ...n,
        retried: !0
      }, i);
      throw u
    }
    if (i > 0 && r === null) {
      let u = await l.stat();
      K.set(e, {
        dev: u.dev,
        ino: u.ino
      })
    }
    try {
      await it(l, r, e, {
        registeredIdentity: i > 0 ? gt(e) : void 0
      })
    } catch (u) {
      throw await l.close().catch(() => {}), u
    }
    return l
  } catch (r) {
    throw X(r, e)
  } finally {
    await s.close()
  }
}
async function kLe(e, n = 0, i = !1) {
  if (x() === "windows") {
    let r = await nt(e);
    if (r === null) return null;
    if (r.isSymbolicLink()) {
      let l = await tt(e, e);
      if (l === null) {
        if (i) h(e, "output leaf changed during open");
        return kLe(e, n, !0)
      }
      return ft(l, n, e)
    }
    if (!r.isFile()) h(e, "not a regular file");
    let o = await Y(e, "r");
    return await it(o, r, e, {
      anyLinkCount: !0
    }), o
  }
  let s;
  try {
    s = await D(e, {
      replaceLeaf: !0,
      create: !1
    })
  } catch (r) {
    if (k(r) === "ENOENT") return null;
    throw r
  }
  try {
    let r = await nt(s.ioPath);
    if (r === null) return null;
    if (r.isSymbolicLink()) {
      let l = await tt(e, s.ioPath);
      if (l === null) {
        if (i) h(e, "output leaf changed during open");
        return await s.close(), kLe(e, n, !0)
      }
      return await ft(l, n, e)
    }
    if (n === 0 && r.isFile() && r.nlink === 0) return null;
    if (!r.isFile() || r.nlink !== 1 && n === 0) h(e, "not a regular nlink-1 file");
    await s.recheckBeforeWrite();
    let o = await iG(s.ioPath, O.O_RDONLY | W | (O.O_NONBLOCK ?? 0), x());
    try {
      if (await it(o, r, e, {
          registeredIdentity: n > 0 ? gt(e) : void 0,
          unlinkedIsGone: n === 0
        }) === "gone") return null
    } catch (l) {
      throw await o.close().catch(() => {}), l
    }
    return o
  } catch (r) {
    if (k(r) === "ENOENT") return null;
    throw X(r, e)
  } finally {
    await s.close()
  }
}
async function ht(e, n, i) {
  let s = ct(i) && C(i).startsWith(C(op()) + N);
  if (!ct(i) || !P(i) && !s) return h(e, "output is an unregistered symlink of a shape this session does not create");
  let r = await S(n);
  if (!r.isSymbolicLink() || r.ctimeMs >= Hn().linksInheritedBeforeFor(y(e))) return h(e, "output is an unregistered symlink made during this session");
  return await st(e, i), i
}
async function tt(e, n) {
  let i = Hn().linkedOutputs.get(e);
  if (i === void 0) {
    if (!OLn(e)) return h(e, "output is an unregistered symlink outside any tasks directory");
    let r = await et(n);
    if (r === null) return null;
    i = await ht(e, n, r)
  }
  let s = await et(n);
  if (s === null) return null;
  if (s !== i) return h(e, "output symlink was re-pointed");
  return i
}
async function et(e) {
  try {
    return await F(e)
  } catch (n) {
    if (k(n) === "EINVAL") return null;
    throw n
  }
}
async function ft(e, n, i) {
  if (P(e)) {
    if (n > 0) return h(i, "output links chain");
    return kLe(e, n + 1)
  }
  let s, r;
  try {
    let o = await H(e);
    if (P(o)) return h(i, "output link leads back into the tasks tree");
    r = await S(o), s = await iG(o, O.O_RDONLY | W | (O.O_NONBLOCK ?? 0), x())
  } catch (o) {
    if (BJe(o)) throw o;
    if (k(o) === "ENOENT") return null;
    throw X(o, i)
  }
  try {
    let o = await s.stat();
    if (!o.isFile() || o.ino !== r.ino || o.dev !== r.dev) h(i, "link target is not a regular file")
  } catch (o) {
    throw await s.close().catch(() => {}), o
  }
  return s
}

function P(e) {
  let n = Hm();
  return e === n || e.startsWith(n.endsWith(N) ? n : n + N)
}
async function nt(e) {
  try {
    return await S(e)
  } catch (n) {
    if (k(n) === "ENOENT") return null;
    throw n
  }
}
var K = new Map;

function gt(e) {
  let n = K.get(e);
  if (n === void 0) return h(e, "link target identity was never recorded");
  return n
}
async function st(e, n) {
  if (P(n)) await kt(n);
  Hn().linkedOutputs.set(e, n)
}
async function kt(e) {
  let n = await D(e, {
    replaceLeaf: !0,
    create: !1
  });
  try {
    let i = await iG(n.ioPath, O.O_RDONLY | W | (O.O_NONBLOCK ?? 0), x()).catch((s) => {
      throw X(s, e)
    });
    try {
      let s = await i.stat();
      if (!s.isFile() || s.nlink !== 1) h(e, "link target is not a regular single-link file");
      K.set(e, {
        dev: s.dev,
        ino: s.ino
      })
    } finally {
      await i.close()
    }
  } finally {
    await n.close()
  }
}
async function it(e, n, i, s) {
  try {
    let r = await e.stat(),
      o = s?.registeredIdentity;
    if (s?.unlinkedIsGone && o === void 0 && !s.anyLinkCount && n !== null && r.isFile() && r.nlink === 0 && r.ino === n.ino && r.dev === n.dev) return await e.close().catch(() => {}), "gone";
    if (!r.isFile() || (o !== void 0 ? r.ino !== o.ino || r.dev !== o.dev : !s?.anyLinkCount && r.nlink !== 1) || n !== null && (r.ino !== n.ino || r.dev !== n.dev)) h(i, "output file identity changed");
    return "same"
  } catch (r) {
    throw await e.close().catch(() => {}), r
  }
}

function X(e, n) {
  let i = k(e);
  if (i === "ELOOP" || i === "EISDIR" || i === "ENOTDIR" || i === "ENXIO" || i === "EOPNOTSUPP" || i === "ENOTSUP") try {
    h(n, `open refused a swapped leaf (${i})`)
  } catch (s) {
    return s
  }
  return e
}

function Ft(e) {
  let n = ot(),
    i = C(e);
  if (i.startsWith(n + N)) return i;
  let s = ie(),
    r = y(y(y(y(i)))),
    {
      resolvedPath: o
    } = io(s, r);
  return To(o) === To(n) ? E(n, i.slice(r.length + 1)) : i
}

function ot() {
  return y(y(y(C(een()))))
}

function OLn(e) {
  let n = ot(),
    i = ie(),
    s = new Set([n, io(i, n).resolvedPath].map((r) => To(r)));
  return ps(e).some((r) => {
    let o = y(C(r));
    return To(M(o)) === "tasks" && yt(M(y(o))) && s.has(To(y(y(y(o)))))
  })
}

function G() {
  let e = ["????????-????-????-????-????????????", "session_*", "cse_*"],
    n = z();
  if (!aGe(n) && /^[A-Za-z0-9._-]+$/.test(n)) e.push(n);
  return e
}

function yt(e) {
  return aGe(e) || e === z()
}

function PSs(e) {
  let n = ot(),
    i = ie(),
    s = L([n, io(i, n).resolvedPath]),
    r = new Set,
    o = (u, f) => {
      let c = u.endsWith(N) ? u : u + N;
      return To(f).startsWith(To(c)) ? f.slice(c.length) : null
    },
    l = (u) => u.replaceAll("\\", "/");
  for (let u of ps(e)) {
    let f = C(u);
    for (let c of s) {
      let w = M(c);
      if (To(f) === To(c)) {
        for (let p of G()) r.add(`!/*/${p}/tasks/**`), r.add(`!**/${w}/*/${p}/tasks/**`);
        continue
      }
      let g = o(f, c);
      if (g !== null) {
        for (let p of G()) r.add(`!/${l(g)}/*/${p}/tasks/**`), r.add(`!**/${w}/*/${p}/tasks/**`);
        continue
      }
      let m = o(c, f);
      if (m !== null) {
        let p = m.split(N);
        if (p.length === 1)
          for (let b of G()) r.add(`!/${b}/tasks/**`), r.add(`!**/${w}/${l(m)}/${b}/tasks/**`);
        else if (!yt(p[1] ?? ""));
        else if (p.length === 2) r.add("!/tasks/**"), r.add(`!**/${w}/${l(m)}/tasks/**`);
        else if (To(p[2] ?? "") === "tasks") r.add("!**")
      }
    }
  }
  return [...r]
}
async function Svr(e) {
  e = Ft(e);
  let n = await kLe(e);
  if (n === null) throw await S(e), new R(`task output ${e} is no longer available (the file it pointed to was removed)`, "task output link target removed");
  let i = x();
  return {
    ioPath: (i === "linux" || i === "wsl") && await F(`/proc/self/fd/${n.fd}`).then(() => !0, () => !1) ? Eqe(n.fd) : i === "macos" ? `/dev/fd/${n.fd}` : e,
    canonicalPath: e,
    handle: n,
    close: () => n.close()
  }
}
var Bpo = 8192;
async function pmt(e) {
  return cCe(Rd(e), Bpo)
}
async function cCe(e, n) {
  let i = await kLe(e);
  if (i === null) return {
    content: "",
    bytesRead: 0,
    bytesTotal: 0
  };
  try {
    return await gP(i, n)
  } finally {
    await i.close()
  }
}
async function vLe(e) {
  let n = Hn().linkedOutputs.get(e);
  if (Hn().linkedOutputs.delete(e), n !== void 0) K.delete(n);
  if (x() === "windows") {
    await v(e);
    return
  }
  let i;
  try {
    i = await D(e, {
      replaceLeaf: !0,
      create: !1
    })
  } catch (s) {
    if (k(s) === "ENOENT") return;
    throw s
  }
  try {
    await i.recheckBeforeWrite(), await v(i.ioPath)
  } finally {
    await i.close()
  }
}
var _t = new Uint8Array([10]);
async function OSs(e) {
  let n = `${e}.${Tt(6).toString("hex")}.probe`;
  try {
    let i;
    try {
      i = await _(n, {
        exclusive: !0,
        windowsFlags: "wx"
      })
    } catch {
      return null
    }
    try {
      await i.write(_t)
    } finally {
      await i.close()
    }
    return null
  } catch (i) {
    return k(i) ?? null
  } finally {
    await vLe(n).catch((i) => {
      t(`probeTaskOutputWrite: could not delete ${n}: ${d(i)}`)
    })
  }
}
async function ISs(e, n) {
  let i = await _(e, {
    exclusive: !1,
    windowsFlags: "w"
  });
  try {
    await i.truncate(0), await i.writeFile(n)
  } finally {
    await i.close()
  }
}
async function dt(e, n) {
  try {
    return await JS(e, [e], {
      createParents: n?.create ?? !0,
      ...n?.replaceLeaf && {
        leaf: "replace"
      }
    })
  } catch (i) {
    if (i instanceof hh) {
      if (!await Pt()) {
        if (n?.create ?? !0) await rt(y(e), {
          recursive: !0,
          mode: 448
        });
        return {
          ioPath: e,
          canonicalPath: e,
          readExisting: () => Promise.resolve(null),
          recheckBeforeWrite: () => {},
          close: async () => {}
        }
      }
      t(`task output: pin of ${y(e)} refused: ${d(i)}`, {
        level: "warn"
      }), h(e, "tasks dir moved or linked", `restart Claude Code with CLAUDE_CODE_TMPDIR set to a fresh directory; or, if ${eO().replace(/[\\/]+$/,"")} is a stray directory or a symbolic link that should not be there, remove that entry itself (not what it points to) and restart`)
    }
    throw i
  }
}
async function D(e, n) {
  let i = y(e),
    s = M(e),
    r = T.get(i);
  if (r !== void 0) {
    let c = await r.catch(() => null);
    if (c !== null) {
      let g = await Promise.all([c.handleStat(), S(i)]).then(([m, p]) => m.nlink > 0 && p.isDirectory() && p.ino === m.ino && p.dev === m.dev, () => !1) ? c.viewFor(s) : null;
      if (g !== null) return g;
      if (T.get(i) === r) T.delete(i);
      await c.release()
    } else {
      if (T.get(i) === r) T.delete(i);
      return dt(e, n)
    }
  }
  let o = T.get(i);
  if (o !== void 0 && o !== r) return D(e, n);
  let l = (async () => {
      let c = await dt(e, n),
        w = /^\/proc\/self\/fd\/(\d+)\//.exec(c.ioPath);
      if (w === null) return c;
      let g = c.ioPath.slice(0, c.ioPath.length - s.length - 1),
        m = Number(w[1]),
        p = 0,
        b = !1,
        at = !1,
        lt = async () => {
          if (b && p === 0 && !at) at = !0, await c.close()
        };
      return {
        handleStat: () => Dt(m),
        release: () => (b = !0, lt()),
        viewFor: (A) => {
          if (b) return null;
          p++;
          let ut = !1;
          return {
            ioPath: `${g}/${A}`,
            canonicalPath: E(i, A),
            readExisting: (Ot) => RSt(`${g}/${A}`, E(i, A), x(), Ot),
            recheckBeforeWrite: () => {},
            close: async () => {
              if (!ut) ut = !0, p--, await lt()
            }
          }
        }
      }
    })(),
    u = l.then((c) => ("viewFor" in c) ? c : Promise.reject(Error("not held")));
  u.catch(() => {}), T.set(i, u);
  let f;
  try {
    f = await l
  } catch (c) {
    if (T.get(i) === u) T.delete(i);
    throw c
  }
  if (!("viewFor" in f)) {
    if (T.get(i) === u) T.delete(i);
    return f
  }
  if (T.size > Lt) {
    for (let [c, w] of T)
      if (c !== i) {
        T.delete(c), w.then((g) => g.release(), () => {});
        break
      }
  }
  return f.viewFor(s) ?? Promise.reject(Error("unreachable: fresh hold retired"))
}
var V;
async function Pt() {
  let e = Hm();
  if (V?.root === e) return V.ok;
  let n = await H(e).then(() => !0, (i) => k(i) !== "EPERM");
  if (n) V = {
    root: e,
    ok: Promise.resolve(!0)
  };
  return n
}
var T = new Map;

function Dt(e) {
  return new Promise((n, i) => Et(e, (s, r) => s ? i(s) : n(r)))
}
var Lt = 8;

function UJe(e, n = "a") {
  return _(e, {
    exclusive: !1,
    windowsFlags: n
  })
}

function mmt(e) {
  return B((async () => {
    let n = ten(e);
    return await (await _(n, {
      exclusive: !0,
      windowsFlags: "wx"
    })).close(), n
  })())
}
var mt = Symbol("taskOutputSwapRefused");

function BJe(e) {
  return e instanceof Error && mt in e
}

function h(e, n, i) {
  let s = `task output swap refused (${n}): ${e}` + (i === void 0 ? "" : `. To recover: ${i}.`),
    r = Object.assign(new R(s, `task output swap refused (${n})`), {
      [mt]: !0
    });
  t(s, {
    level: "error"
  });
  let o = `${n}\x00${e}`;
  if (!U.has(o)) {
    if (U.size >= Ct) U.clear();
    U.add(o), a(r)
  }
  throw r
}
var U = new Set,
  Ct = 256;
async function fLt(e, n) {
  let i;
  try {
    i = await S(e)
  } catch (l) {
    let u = k(l);
    if (u === "ELOOP" || u === "ENOTDIR") h(e, `lstat refused a swapped path (${u})`);
    throw l
  }
  if (!i.isFile() || i.nlink !== 1) h(e, "not a regular nlink-1 file");
  let s = !0,
    r = i.size > n,
    o;
  try {
    o = await Y(e, s ? r ? "r+" : "r" : (r ? O.O_RDWR : O.O_RDONLY) | W | (O.O_NONBLOCK ?? 0))
  } catch (l) {
    let u = k(l);
    if (u === "ELOOP" || u === "EISDIR" || u === "ENOTDIR" || u === "ENXIO" || u === "EOPNOTSUPP" || u === "ENOTSUP") h(e, `open refused a swapped path (${u})`);
    throw l
  }
  try {
    let l = await o.stat();
    if (!l.isFile() || l.dev !== i.dev || l.ino !== i.ino || l.nlink !== 1) h(e, "file changed between lstat and open");
    if (r && l.size > n) await o.truncate(n);
    return {
      handle: o,
      size: l.size
    }
  } catch (l) {
    throw await o.close(), l
  }
}
async function cue(e, n, i = cLt) {
  let s;
  try {
    s = await fLt(Rd(e), cLt)
  } catch (l) {
    if (k(l) === "ENOENT") return {
      content: "",
      omittedBytes: 0
    };
    throw l
  }
  let {
    handle: r
  } = s, o = Math.min(s.size, cLt, i);
  try {
    let l = Math.max(0, o - n),
      u = Buffer.allocUnsafe(o - l),
      f = 0;
    while (f < u.length) {
      let {
        bytesRead: w
      } = await r.read(u, f, u.length - f, l + f);
      if (w === 0) break;
      f += w
    }
    let c = 0;
    while (l > 0 && c < f && (u[c] & 192) === 128) c++;
    return {
      content: u.toString("utf8", c, f),
      omittedBytes: l + c
    }
  } finally {
    await r.close()
  }
}
async function ILn(e, n, i) {
  let {
    handle: r,
    size: o
  } = await fLt(e, i);
  try {
    let l = await Y(n, "w");
    try {
      let u = Buffer.alloc(1048576),
        f = 0;
      while (f < i) {
        let c = Math.min(u.length, i - f),
          {
            bytesRead: w
          } = await r.read(u, 0, c, f);
        if (w === 0) break;
        let g = 0;
        while (g < w) {
          let {
            bytesWritten: m
          } = await l.write(u, g, w - g, f + g);
          g += m
        }
        f += w
      }
    } finally {
      await l.close()
    }
    return o
  } finally {
    await r.close()
  }
}
async function wt(e, n, i = e) {
  if (e === n) return !0;
  try {
    if (!(await S(i)).isFile()) return !1;
    return await H(i) === await H(n)
  } catch {
    return !1
  }
}

function MLn(e, n, i) {
  return B((async () => {
    let s = ten(e);
    if (await rt(y(s), {
        recursive: !0
      }), await wt(s, n)) return i?.("noop"), s;
    let r = `${s}.staging`;
    await v(r).catch(() => {});
    let o;
    try {
      await vt(n, r), o = "hardlink"
    } catch (l) {
      if (k(l) !== "ENOENT") try {
        await bt(n, r), o = "copy"
      } catch {
        await v(r).catch(() => {})
      }
      if (o === void 0) t(`[adopt] win32 link ${n} failed: ${l}`, {
        level: "warn"
      })
    }
    if (o !== void 0) try {
      await Is(r, s)
    } catch (l) {
      t(`[adopt] win32 swap for ${e} failed: ${l}`, {
        level: "warn"
      }), await v(r).catch(() => {}), o = void 0
    }
    if (o !== void 0) return i?.(o), s;
    i?.("fail");
    try {
      if ((await S(s)).isFile()) return s
    } catch (l) {
      if (k(l) !== "ENOENT") return s
    }
    return await v(s).catch(() => {}), mmt(e)
  })())
}
export {
  cLt,
  $po,
  Rv,
  ALn,
  een,
  ASs,
  xLn,
  ten,
  Upo,
  Rd,
  bvr,
  fmt,
  uLt,
  Kp,
  PLn,
  xSs,
  dCe,
  TSa,
  kLe,
  OLn,
  PSs,
  Svr,
  Bpo,
  pmt,
  cCe,
  vLe,
  OSs,
  ISs,
  UJe,
  mmt,
  BJe,
  fLt,
  cue,
  ILn,
  MLn
};
