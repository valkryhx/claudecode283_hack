// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { RK, en } from "B:/~BUN/root/chunk-bvn0mpsk.js";
import { Y, Wo } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { P, l, v, Sre } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { _d } from "B:/~BUN/root/chunk-06ra9xdn.js";
import { p } from "B:/~BUN/root/chunk-51n463p1.js";
import { jo, To, ce, _xe, Gv, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { er, hb } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { d, O } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { Bo } from "B:/~BUN/root/chunk-2swveyqa.js";
import { sf } from "B:/~BUN/root/chunk-8hs4bwwk.js";
import { tp, xR, to } from "B:/~BUN/root/chunk-d36ctpgs.js";
import { sX, JNe, cy } from "B:/~BUN/root/chunk-q1gfnztc.js";
import { TN } from "B:/~BUN/root/chunk-73hzyafy.js";
import { L } from "B:/~BUN/root/chunk-z1enakv9.js";
function H(e) {
  if (!RK(e)) return !1;
  if (en(e)) return !0;
  return /^[A-Za-z0-9][A-Za-z0-9_]*$/.test(e) && TN(e) !== void 0;
}
function uan(e, n = {}) {
  return n.acceptCustomIds ? RK(e) : H(e);
}
function FTe(adoptedSessionId, n, i = {}) {
  if (n) return {
    adoptedSessionId: null,
    effectiveFork: !0
  };
  if (adoptedSessionId === void 0) return {
    adoptedSessionId: null,
    effectiveFork: !1
  };
  if (uan(adoptedSessionId, i)) return {
    adoptedSessionId: adoptedSessionId,
    effectiveFork: !1
  };
  return t(`resume: transcript session id (${typeof adoptedSessionId}) rejected by the adoption gate; continuing as a fork under the fresh session id`), p("session_resume", "unadoptable_session_id"), {
    adoptedSessionId: null,
    effectiveFork: !0
  };
}
import { randomBytes as me } from "crypto";
import { constants as T, fstat as ye } from "fs";
import { copyFile as Oe, link as Te, lstat as N, mkdir as ne, open as K, readdir as ve, readlink as _, realpath as M, symlink as Z, unlink as F } from "fs/promises";
import { basename as X, dirname as m, isAbsolute as le, join as b, resolve as A, sep as R } from "path";
var I = T.O_NOFOLLOW ?? 0,
  Ee = 8388608,
  olt = 5368709120,
  jWn = "5GB",
  ole = 67108864;
function OMt() {
  return tp();
}
function slt() {
  let e = hb()?.adoptShellOutputRoot;
  if (e !== void 0) return b(e, Y(), "tasks");
  let n = er();
  if (n.outputDir === void 0 || Wo()) n.outputDir = b(xR(), Y(), "tasks");
  return n.outputDir;
}
function zIr(e) {
  return b(xR(), e, "tasks");
}
function GIr() {
  return hb()?.adoptShellOutputRoot !== void 0 ? slt() : (Wo() ? void 0 : er().outputDir) ?? b(xR(), Y(), "tasks");
}
function be() {
  let e = er();
  if (e.outputDir === void 0) {
    if (hb() !== null) return b(xR(), Y(), "tasks");
    e.outputDir = b(xR(), Y(), "tasks");
  }
  return e.outputDir;
}
function ilt(e) {
  if (Wo()) throw Error("Task output is not written to disk in a diskless session");
  let n = er().outputPathBindings.get(e);
  if (n !== void 0) return n;
  let i = b(slt(), `${e}.output`);
  return er().outputPathBindings.set(e, i), i;
}
function ep(e) {
  if (Wo()) throw Error("Task output has no file in a diskless session");
  let n = er().outputPathBindings.get(e);
  if (n !== void 0) return n;
  return b(be(), `${e}.output`);
}
function B(e) {
  let pendingOutputOps = er().pendingOutputOps;
  return pendingOutputOps.add(e), e.finally(() => pendingOutputOps.delete(e)).catch(() => {}), e;
}
var Se = 16777216,
  U = `
[output omitted: it could not be written to disk]
`;
class pan {
  #c;
  #n = null;
  #e = [];
  #f = 0;
  #s = !1;
  #t = 0;
  #o = 0;
  #i = !1;
  #a = new Set();
  #l = !1;
  #r = null;
  #u = null;
  constructor(e, n) {
    this.#c = n ?? ilt(e);
  }
  append(e) {
    if (this.#s) return;
    if (this.#f += e.length, this.#f > olt) this.#s = !0;
    let n = this.#s ? `
[output truncated: exceeded ${jWn} disk cap]
` : e;
    if (this.#e.push(n), this.#t += n.length, !this.#r) this.#r = new Promise(i => {
      this.#u = i;
    }), B(this.#g());
  }
  flush() {
    return this.#r ?? Promise.resolve();
  }
  get failing() {
    return this.#i;
  }
  get lostOutput() {
    return this.#l;
  }
  get unwrittenChars() {
    return this.#t;
  }
  cancel() {
    this.#o += 1, this.#e.length = 0, this.#t = 0;
  }
  async #d() {
    while (!0) {
      try {
        if (!this.#n) this.#n = await llt(this.#c);
        while (!0) {
          let e = this.#o;
          try {
            await this.#p();
          } catch (error) {
            if (this.#o === e) this.#l = !0, this.#e.unshift(U), this.#t += U.length;
            throw error;
          }
          if (this.#e.length === 0) break;
        }
      } finally {
        if (this.#n) {
          let e = this.#n;
          this.#n = null, await e.close();
        }
      }
      if (this.#e.length) continue;
      break;
    }
  }
  #p() {
    return this.#n.appendFile(this.#h());
  }
  #h() {
    let e = this.#e.splice(0, this.#e.length);
    this.#t = 0;
    let n = 0;
    for (let r of e) n += Buffer.byteLength(r, "utf8");
    let i = Buffer.allocUnsafe(n),
      s = 0;
    for (let r of e) s += i.write(r, s, "utf8");
    return i;
  }
  async #g() {
    try {
      await this.#d(), this.#w();
    } catch (error) {
      if (!this.#i) this.#i = !0, t(`Task output drain failed (will retry once): ${error}`, {
        level: "error"
      });
      if (this.#e.length > 0) try {
        await this.#d(), this.#w();
      } catch (error) {
        this.#k(error);
      }
    } finally {
      let e = this.#u;
      this.#r = null, this.#u = null, e();
    }
  }
  #w() {
    this.#i = !1, this.#a.clear();
  }
  #k(e) {
    let n = v(e),
      i = n !== void 0 && Sre.has(n) ? "exhaustion" : "unexpected",
      s = `${i}:${n ?? "no errno"}`;
    if (!this.#a.has(s)) switch (this.#a.add(s), i) {
      case "exhaustion":
        t(`Task output drain retry failed (${n}): ${e}`, {
          level: "error"
        });
        break;
      case "unexpected":
        d(e);
        break;
    }
    if (this.#t > Se) t(`Task output still cannot be written (${n ?? "no errno"}); dropped ${this.#t} chars of unwritten output`, {
      level: "error"
    }), this.#l = !0, this.#e.length = 0, this.#e.push(U), this.#t = U.length;
  }
}
function Fe(e) {
  let n = er().diskOutputs.get(e);
  if (!n) n = new pan(e), er().diskOutputs.set(e, n);
  return n;
}
function alt(e, n) {
  Fe(e).append(n);
}
function Tp(e) {
  return B((async () => {
    let n = er(),
      i = n.diskOutputs.get(e);
    if (i) {
      if (await i.flush(), i.failing && i.unwrittenChars > 0) t(`Task output writer evicted while failing; discarded ${i.unwrittenChars} chars of unwritten output`, {
        level: "error"
      });
      n.diskOutputs.delete(e);
    }
    MMt(e);
  })());
}
function MMt(e) {
  let n = er().outputPathBindings.get(e);
  if (n !== void 0 && hb() === null && n === b(slt(), `${e}.output`)) er().outputPathBindings.delete(e);
}
async function VIr(e, newOffset, i = Ee) {
  try {
    let s = await sle(ep(e));
    if (!s) return {
      content: "",
      newOffset: newOffset
    };
    let r;
    try {
      r = await _xe(s, newOffset, i);
    } finally {
      await s.close();
    }
    if (!r) return {
      content: "",
      newOffset: newOffset
    };
    return {
      content: r.content,
      newOffset: newOffset + r.bytesRead
    };
  } catch (error) {
    let r = v(error);
    if (r === "ENOENT" || w3e(error)) return {
      content: "",
      newOffset: newOffset
    };
    if (r && Sre.has(r)) t(`getTaskOutputDelta failed (${r}): ${error}`, {
      level: "error"
    });else d(error);
    return {
      content: "",
      newOffset: newOffset
    };
  }
}
async function fan(e) {
  try {
    let n = await sle(ep(e));
    if (!n) return 0;
    try {
      return (await n.stat()).size;
    } finally {
      await n.close();
    }
  } catch (error) {
    if (w3e(error)) throw error;
    let i = v(error);
    if (i === "ENOENT") return 0;
    if (i === "EACCES" || i === "EPERM") {
      let s = await N(ep(e)).catch(() => null);
      if (s !== null && s.isFile() && (s.mode & 256) === 0) return s.size;
      g(ep(e), `output no longer measurable (${i})`);
    }
    if (i && Sre.has(i)) t(`getTaskOutputSize failed (${i}): ${error}`, {
      level: "error"
    });else d(error);
    return 0;
  }
}
async function o6o(e, n) {
  if (Wo()) return;
  let i = er(),
    s = L([...(i.outputDir !== void 0 ? [i.outputDir] : []), ...[...i.outputPathBindings.values()].map(item => m(item))]);
  if (s.length === 0) return;
  let r = e + R;
  for (let o of s) {
    let a;
    try {
      a = await ve(o);
    } catch (error) {
      let f = v(error);
      if (f !== "ENOENT") if (f && Sre.has(f)) t(`repointTaskOutputSymlinks readdir failed (${f}): ${error}`, {
        level: "error"
      });else d(error);
      continue;
    }
    await Ne(o, a, r, e, n);
  }
}
async function Ne(e, n, i, s, r) {
  let linkedOutputs = er().linkedOutputs;
  for (let a of n) {
    if (!a.endsWith(".output")) continue;
    let u = b(e, a),
      f = linkedOutputs.get(u),
      c;
    try {
      c = O() === "windows" ? void 0 : await W(u, {
        replaceLeaf: !0
      });
      let w = c?.ioPath ?? u;
      if (f === void 0 && e === er().outputDir) f = await _(w).then(h => de(u, w, h)).catch(() => {
        return;
      });
      if (f === void 0 || !f.startsWith(i)) continue;
      let k = r + f.slice(s.length),
        y = await Q(w);
      if (y === null) continue;
      if (y !== f) g(u, "output symlink was re-pointed");
      if (await c?.recheckBeforeWrite(), await F(w), linkedOutputs.get(u) === f) await ie(u, k);
      try {
        await c?.recheckBeforeWrite(), await Z(k, w).catch(async h => {
          if (v(h) !== "EEXIST") throw h;
          let S = await _(w).catch(() => {
            return;
          });
          if (S !== k && S !== linkedOutputs.get(u)) throw h;
        });
      } catch (error) {
        if (linkedOutputs.get(u) === k) linkedOutputs.delete(u);
        throw error;
      }
      if ((await _(w).catch(() => {
        return;
      })) === k) linkedOutputs.set(u, k);
    } catch (error) {
      if (v(error) !== "ENOENT" && !w3e(error)) d(error);
    } finally {
      await c?.close();
    }
  }
}
async function D(e, n, i = 0) {
  if (Wo()) throw Error("Task output is not written to disk in a diskless session");
  if (O() === "windows") return await ne(m(e), {
    recursive: !0
  }), K(e, n.windowsFlags);
  let s = await W(e, {
    replaceLeaf: !0
  });
  try {
    let r = await ee(s.ioPath);
    if (r?.isSymbolicLink()) {
      let u = await J(e, s.ioPath);
      if (u === null) {
        if (n.relooked) g(e, "output leaf changed during open");
        return await s.close(), D(e, {
          ...n,
          relooked: !0
        }, i);
      }
      if (n.exclusive || i > 0 || !C(u)) g(e, "output link is not appendable");
      return await D(u, {
        exclusive: n.exclusive,
        windowsFlags: n.windowsFlags
      }, i + 1);
    }
    if (r !== null && (!r.isFile() || r.nlink !== 1 && i === 0)) g(e, "existing output is not a plain file");
    await s.recheckBeforeWrite();
    let o = n.exclusive || r === null,
      a;
    try {
      a = await sX(s.ioPath, T.O_WRONLY | T.O_APPEND | (o ? T.O_CREAT | T.O_EXCL : 0) | I | (T.O_NONBLOCK ?? 0), O());
    } catch (error) {
      if (!n.exclusive && v(error) === "EEXIST" && !n.retried) return await s.close(), D(e, {
        ...n,
        retried: !0
      }, i);
      throw error;
    }
    if (i > 0 && r === null) {
      let u = await a.stat();
      j.set(e, {
        dev: u.dev,
        ino: u.ino
      });
    }
    try {
      await te(a, r, e, {
        registeredIdentity: i > 0 ? we(e) : void 0
      });
    } catch (error) {
      throw await a.close().catch(() => {}), error;
    }
    return a;
  } catch (error) {
    throw G(error, e);
  } finally {
    await s.close();
  }
}
async function sle(e, n = 0, i = !1) {
  if (O() === "windows") {
    let r = await ee(e);
    if (r === null) return null;
    if (r.isSymbolicLink()) {
      let a = await J(e, e);
      if (a === null) {
        if (i) g(e, "output leaf changed during open");
        return sle(e, n, !0);
      }
      return ue(a, n, e);
    }
    if (!r.isFile()) g(e, "not a regular file");
    let o = await K(e, "r");
    return await te(o, r, e, {
      anyLinkCount: !0
    }), o;
  }
  let s;
  try {
    s = await W(e, {
      replaceLeaf: !0,
      create: !1
    });
  } catch (error) {
    if (v(error) === "ENOENT") return null;
    throw error;
  }
  try {
    let r = await ee(s.ioPath);
    if (r === null) return null;
    if (r.isSymbolicLink()) {
      let a = await J(e, s.ioPath);
      if (a === null) {
        if (i) g(e, "output leaf changed during open");
        return await s.close(), sle(e, n, !0);
      }
      return await ue(a, n, e);
    }
    if (n === 0 && r.isFile() && r.nlink === 0) return null;
    if (!r.isFile() || r.nlink !== 1 && n === 0) g(e, "not a regular nlink-1 file");
    await s.recheckBeforeWrite();
    let o = await sX(s.ioPath, T.O_RDONLY | I | (T.O_NONBLOCK ?? 0), O());
    try {
      if ((await te(o, r, e, {
        registeredIdentity: n > 0 ? we(e) : void 0,
        unlinkedIsGone: n === 0
      })) === "gone") return null;
    } catch (error) {
      throw await o.close().catch(() => {}), error;
    }
    return o;
  } catch (error) {
    if (v(error) === "ENOENT") return null;
    throw G(error, e);
  } finally {
    await s.close();
  }
}
async function de(e, n, i) {
  let s = le(i) && A(i).startsWith(A(_d()) + R);
  if (!le(i) || !C(i) && !s) return g(e, "output is an unregistered symlink of a shape this session does not create");
  let r = await N(n);
  if (!r.isSymbolicLink() || r.ctimeMs >= er().linksInheritedBeforeFor(m(e))) return g(e, "output is an unregistered symlink made during this session");
  return await ie(e, i), i;
}
async function J(e, n) {
  let i = er().linkedOutputs.get(e);
  if (i === void 0) {
    if (!DMt(e)) return g(e, "output is an unregistered symlink outside any tasks directory");
    let r = await Q(n);
    if (r === null) return null;
    i = await de(e, n, r);
  }
  let s = await Q(n);
  if (s === null) return null;
  if (s !== i) return g(e, "output symlink was re-pointed");
  return i;
}
async function Q(e) {
  try {
    return await _(e);
  } catch (error) {
    if (v(error) === "EINVAL") return null;
    throw error;
  }
}
async function ue(e, n, i) {
  if (C(e)) {
    if (n > 0) return g(i, "output links chain");
    return sle(e, n + 1);
  }
  let s, r;
  try {
    let o = await M(e);
    if (C(o)) return g(i, "output link leads back into the tasks tree");
    r = await N(o), s = await sX(o, T.O_RDONLY | I | (T.O_NONBLOCK ?? 0), O());
  } catch (error) {
    if (w3e(error)) throw error;
    if (v(error) === "ENOENT") return null;
    throw G(error, i);
  }
  try {
    let o = await s.stat();
    if (!o.isFile() || o.ino !== r.ino || o.dev !== r.dev) g(i, "link target is not a regular file");
  } catch (error) {
    throw await s.close().catch(() => {}), error;
  }
  return s;
}
function C(e) {
  let n = tp();
  return e === n || e.startsWith(n.endsWith(R) ? n : n + R);
}
async function ee(e) {
  try {
    return await N(e);
  } catch (error) {
    if (v(error) === "ENOENT") return null;
    throw error;
  }
}
var j = new Map();
function we(e) {
  let n = j.get(e);
  if (n === void 0) return g(e, "link target identity was never recorded");
  return n;
}
async function ie(e, n) {
  if (C(n)) await pe(n);
  er().linkedOutputs.set(e, n);
}
async function pe(e) {
  let n = await W(e, {
    replaceLeaf: !0,
    create: !1
  });
  try {
    let i = await sX(n.ioPath, T.O_RDONLY | I | (T.O_NONBLOCK ?? 0), O()).catch(s => {
      throw G(s, e);
    });
    try {
      let s = await i.stat();
      if (!s.isFile() || s.nlink !== 1) g(e, "link target is not a regular single-link file");
      j.set(e, {
        dev: s.dev,
        ino: s.ino
      });
    } finally {
      await i.close();
    }
  } finally {
    await n.close();
  }
}
async function te(e, n, i, s) {
  try {
    let r = await e.stat(),
      o = s?.registeredIdentity;
    if (s?.unlinkedIsGone && o === void 0 && !s.anyLinkCount && n !== null && r.isFile() && r.nlink === 0 && r.ino === n.ino && r.dev === n.dev) return await e.close().catch(() => {}), "gone";
    if (!r.isFile() || (o !== void 0 ? r.ino !== o.ino || r.dev !== o.dev : !s?.anyLinkCount && r.nlink !== 1) || n !== null && (r.ino !== n.ino || r.dev !== n.dev)) g(i, "output file identity changed");
    return "same";
  } catch (error) {
    throw await e.close().catch(() => {}), error;
  }
}
function G(e, n) {
  let i = v(e);
  if (i === "ELOOP" || i === "EISDIR" || i === "ENOTDIR" || i === "ENXIO" || i === "EOPNOTSUPP" || i === "ENOTSUP") try {
    g(n, `open refused a swapped leaf (${i})`);
  } catch (error) {
    return error;
  }
  return e;
}
function $e(e) {
  let n = re(),
    i = A(e);
  if (i.startsWith(n + R)) return i;
  let s = ce(),
    r = m(m(m(m(i)))),
    {
      resolvedPath: resolvedPath
    } = jo(s, r);
  return to(resolvedPath) === to(n) ? b(n, i.slice(r.length + 1)) : i;
}
function re() {
  return m(m(m(A(slt()))));
}
function DMt(e) {
  let n = re(),
    i = ce(),
    s = new Set([n, jo(i, n).resolvedPath].map(item => to(item)));
  return To(e).some(item => {
    let o = m(A(item));
    return to(X(o)) === "tasks" && he(X(m(o))) && s.has(to(m(m(m(o)))));
  });
}
function q() {
  let e = ["????????-????-????-????-????????????", "session_*", "cse_*"],
    n = Y();
  if (!H(n) && /^[A-Za-z0-9._-]+$/.test(n)) e.push(n);
  return e;
}
function he(e) {
  return H(e) || e === Y();
}
function qIr(e) {
  let n = re(),
    i = ce(),
    s = L([n, jo(i, n).resolvedPath]),
    r = new Set(),
    o = (u, f) => {
      let c = u.endsWith(R) ? u : u + R;
      return to(f).startsWith(to(c)) ? f.slice(c.length) : null;
    },
    a = u => u.replaceAll("\\", "/");
  for (let u of To(e)) {
    let f = A(u);
    for (let c of s) {
      let w = X(c);
      if (to(f) === to(c)) {
        for (let h of q()) r.add(`!/*/${h}/tasks/**`), r.add(`!**/${w}/*/${h}/tasks/**`);
        continue;
      }
      let k = o(f, c);
      if (k !== null) {
        for (let h of q()) r.add(`!/${a(k)}/*/${h}/tasks/**`), r.add(`!**/${w}/*/${h}/tasks/**`);
        continue;
      }
      let y = o(c, f);
      if (y !== null) {
        let h = y.split(R);
        if (h.length === 1) for (let S of q()) r.add(`!/${S}/tasks/**`), r.add(`!**/${w}/${a(y)}/${S}/tasks/**`);else if (!he(h[1] ?? "")) ;else if (h.length === 2) r.add("!/tasks/**"), r.add(`!**/${w}/${a(y)}/tasks/**`);else if (to(h[2] ?? "") === "tasks") r.add("!**");
      }
    }
  }
  return [...r];
}
async function man(canonicalPath) {
  canonicalPath = $e(canonicalPath);
  let handle = await sle(canonicalPath);
  if (handle === null) throw await N(canonicalPath), new P(`task output ${canonicalPath} is no longer available (the file it pointed to was removed)`, "task output link target removed");
  let i = O();
  return {
    ioPath: (i === "linux" || i === "wsl") && (await _(`/proc/self/fd/${handle.fd}`).then(() => !0, () => !1)) ? `/proc/${process.pid}/fd/${handle.fd}` : i === "macos" ? `/dev/fd/${handle.fd}` : canonicalPath,
    canonicalPath: canonicalPath,
    handle: handle,
    close: () => handle.close()
  };
}
async function Vge(e, n) {
  let i = await sle(e);
  if (i === null) return {
    content: "",
    bytesRead: 0,
    bytesTotal: 0
  };
  try {
    return await Gv(i, n);
  } finally {
    await i.close();
  }
}
async function LMt(e) {
  let n = er().linkedOutputs.get(e);
  if (er().linkedOutputs.delete(e), n !== void 0) j.delete(n);
  if (O() === "windows") {
    await F(e);
    return;
  }
  let i;
  try {
    i = await W(e, {
      replaceLeaf: !0,
      create: !1
    });
  } catch (error) {
    if (v(error) === "ENOENT") return;
    throw error;
  }
  try {
    await i.recheckBeforeWrite(), await F(i.ioPath);
  } finally {
    await i.close();
  }
}
var uint8Array = new Uint8Array([10]);
async function KIr(e) {
  let n = `${e}.${me(6).toString("hex")}.probe`;
  try {
    let i;
    try {
      i = await D(n, {
        exclusive: !0,
        windowsFlags: "wx"
      });
    } catch {
      return null;
    }
    try {
      await i.write(uint8Array);
    } finally {
      await i.close();
    }
    return null;
  } catch (error) {
    return v(error) ?? null;
  } finally {
    await LMt(n).catch(i => {
      t(`probeTaskOutputWrite: could not delete ${n}: ${l(i)}`);
    });
  }
}
async function YIr(e, n) {
  let i = await D(e, {
    exclusive: !1,
    windowsFlags: "w"
  });
  try {
    await i.truncate(0), await i.writeFile(n);
  } finally {
    await i.close();
  }
}
async function W(e, n) {
  let i = m(e),
    s = X(e),
    r = E.get(i);
  if (r !== void 0) {
    let c = await r.catch(() => null);
    if (c !== null) {
      let k = (await Promise.all([c.handleStat(), N(i)]).then(([y, h]) => y.nlink > 0 && h.isDirectory() && h.ino === y.ino && h.dev === y.dev, () => !1)) ? c.viewFor(s) : null;
      if (k !== null) return k;
      if (E.get(i) === r) E.delete(i);
      await c.release();
    } else if (E.get(i) === r) E.delete(i);
  }
  let o = E.get(i);
  if (o !== void 0 && o !== r) return W(e, n);
  let a = (async () => {
      let c;
      try {
        c = await cy(e, [e], {
          createParents: n?.create ?? !0,
          ...(n?.replaceLeaf && {
            leaf: "replace"
          })
        });
      } catch (error) {
        if (error instanceof sf) {
          if (!(await Re())) {
            if (n?.create ?? !0) await ne(m(e), {
              recursive: !0,
              mode: 448
            });
            return {
              ioPath: e,
              canonicalPath: e,
              readExisting: () => Promise.resolve(null),
              recheckBeforeWrite: () => {},
              close: async () => {}
            };
          }
          t(`task output: pin of ${m(e)} refused: ${l(error)}`, {
            level: "warn"
          }), g(e, "tasks dir moved or linked", `restart Claude Code with CLAUDE_CODE_TMPDIR set to a fresh directory; or, if ${xR().replace(/[\\/]+$/, "")} is a stray directory or a symbolic link that should not be there, remove that entry itself (not what it points to) and restart`);
        }
        throw error;
      }
      let w = /^\/proc\/self\/fd\/(\d+)\//.exec(c.ioPath);
      if (w === null) return c;
      let k = c.ioPath.slice(0, c.ioPath.length - s.length - 1),
        y = Number(w[1]),
        h = 0,
        S = !1,
        se = !1,
        oe = async () => {
          if (S && h === 0 && !se) se = !0, await c.close();
        };
      return {
        handleStat: () => _e(y),
        release: () => (S = !0, oe()),
        viewFor: x => {
          if (S) return null;
          h++;
          let ae = !1;
          return {
            ioPath: `${k}/${x}`,
            canonicalPath: b(i, x),
            readExisting: ke => JNe(`${k}/${x}`, b(i, x), O(), ke),
            recheckBeforeWrite: () => {},
            close: async () => {
              if (!ae) ae = !0, h--, await oe();
            }
          };
        }
      };
    })(),
    u = a.then(c => "viewFor" in c ? c : Promise.reject(Error("not held")));
  u.catch(() => {}), E.set(i, u);
  let f;
  try {
    f = await a;
  } catch (error) {
    if (E.get(i) === u) E.delete(i);
    throw error;
  }
  if (!("viewFor" in f)) {
    if (E.get(i) === u) E.delete(i);
    return f;
  }
  if (E.size > De) {
    for (let [c, w] of E) if (c !== i) {
      E.delete(c), w.then(k => k.release(), () => {});
      break;
    }
  }
  return f.viewFor(s) ?? Promise.reject(Error("unreachable: fresh hold retired"));
}
var V;
async function Re() {
  let root = tp();
  if (V?.root === root) return V.ok;
  let n = await M(root).then(() => !0, i => v(i) !== "EPERM");
  if (n) V = {
    root: root,
    ok: Promise.resolve(!0)
  };
  return n;
}
var E = new Map();
function _e(e) {
  return new Promise((n, i) => ye(e, (s, r) => s ? i(s) : n(r)));
}
var De = 8;
function llt(e, windowsFlags = "a") {
  return D(e, {
    exclusive: !1,
    windowsFlags: windowsFlags
  });
}
function XNe(e) {
  return B((async () => {
    let n = ilt(e);
    return await (await D(n, {
      exclusive: !0,
      windowsFlags: "wx"
    })).close(), n;
  })());
}
var ge = Symbol("taskOutputSwapRefused");
function w3e(e) {
  return e instanceof Error && ge in e;
}
function g(e, n, i) {
  let s = `task output swap refused (${n}): ${e}` + (i === void 0 ? "" : `. To recover: ${i}.`),
    r = Object.assign(new P(s, "task output swap refused"), {
      [ge]: !0
    });
  t(s, {
    level: "error"
  });
  let o = `${n}\x00${e}`;
  if (!z.has(o)) {
    if (z.size >= Pe) z.clear();
    z.add(o), d(r);
  }
  throw r;
}
var z = new Set(),
  Pe = 256;
async function gan(e, n) {
  let i;
  try {
    i = await N(e);
  } catch (error) {
    let u = v(error);
    if (u === "ELOOP" || u === "ENOTDIR") g(e, `lstat refused a swapped path (${u})`);
    throw error;
  }
  if (!i.isFile() || i.nlink !== 1) g(e, "not a regular nlink-1 file");
  let s = !0,
    r = i.size > n,
    handle_2;
  try {
    handle_2 = await K(e, s ? r ? "r+" : "r" : (r ? T.O_RDWR : T.O_RDONLY) | I | (T.O_NONBLOCK ?? 0));
  } catch (error) {
    let u = v(error);
    if (u === "ELOOP" || u === "EISDIR" || u === "ENOTDIR" || u === "ENXIO" || u === "EOPNOTSUPP" || u === "ENOTSUP") g(e, `open refused a swapped path (${u})`);
    throw error;
  }
  try {
    let a = await handle_2.stat();
    if (!a.isFile() || a.dev !== i.dev || a.ino !== i.ino || a.nlink !== 1) g(e, "file changed between lstat and open");
    if (r && a.size > n) await handle_2.truncate(n);
    return {
      handle: handle_2,
      size: a.size
    };
  } catch (error) {
    throw await handle_2.close(), error;
  }
}
async function NMt(e, n) {
  let i;
  try {
    i = await gan(ep(e), olt);
  } catch (error) {
    if (v(error) === "ENOENT") return {
      content: "",
      omittedBytes: 0
    };
    throw error;
  }
  let {
      handle: handle_3
    } = i,
    r = Math.min(i.size, olt);
  try {
    let o = Math.max(0, r - n),
      a = Buffer.allocUnsafe(r - o),
      u = 0;
    while (u < a.length) {
      let {
        bytesRead: bytesRead
      } = await handle_3.read(a, u, a.length - u, o + u);
      if (bytesRead === 0) break;
      u += bytesRead;
    }
    let f = 0;
    while (o > 0 && f < u && (a[f] & 192) === 128) f++;
    return {
      content: a.toString("utf8", f, u),
      omittedBytes: o + f
    };
  } finally {
    await handle_3.close();
  }
}
async function HMt(e, n, i) {
  let {
    handle: handle_4,
    size: size
  } = await gan(e, i);
  try {
    let a = await K(n, "w");
    try {
      let u = Buffer.alloc(1048576),
        f = 0;
      while (f < i) {
        let c = Math.min(u.length, i - f),
          {
            bytesRead: bytesRead_2
          } = await handle_4.read(u, 0, c, f);
        if (bytesRead_2 === 0) break;
        let k = 0;
        while (k < bytesRead_2) {
          let {
            bytesWritten: bytesWritten
          } = await a.write(u, k, bytesRead_2 - k, f + k);
          k += bytesWritten;
        }
        f += bytesRead_2;
      }
    } finally {
      await a.close();
    }
    return size;
  } finally {
    await handle_4.close();
  }
}
async function fe(e, n, i = e) {
  if (e === n) return !0;
  try {
    if (!(await N(i)).isFile()) return !1;
    return (await M(i)) === (await M(n));
  } catch {
    return !1;
  }
}
function FMt(e, n, i) {
  return B((async () => {
    let s = ilt(e);
    if (await ne(m(s), {
      recursive: !0
    }), await fe(s, n)) return i?.("noop"), s;
    let r = `${s}.staging`;
    await F(r).catch(() => {});
    let o;
    try {
      await Te(n, r), o = "hardlink";
    } catch (error) {
      if (v(error) !== "ENOENT") try {
        await Oe(n, r), o = "copy";
      } catch {
        await F(r).catch(() => {});
      }
      if (o === void 0) t(`[adopt] win32 link ${n} failed: ${error}`, {
        level: "warn"
      });
    }
    if (o !== void 0) try {
      await Bo(r, s);
    } catch (error) {
      t(`[adopt] win32 swap for ${e} failed: ${error}`, {
        level: "warn"
      }), await F(r).catch(() => {}), o = void 0;
    }
    if (o !== void 0) return i?.(o), s;
    i?.("fail");
    try {
      if ((await N(s)).isFile()) return s;
    } catch (error) {
      if (v(error) !== "ENOENT") return s;
    }
    return await F(s).catch(() => {}), XNe(e);
  })());
}
export { uan, FTe, olt, jWn, ole, OMt, slt, zIr, GIr, ilt, ep, pan, alt, Tp, MMt, VIr, fan, o6o, sle, DMt, qIr, man, Vge, LMt, KIr, YIr, llt, XNe, w3e, gan, NMt, HMt, FMt };