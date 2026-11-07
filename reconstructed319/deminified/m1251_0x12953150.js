// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { nr, xe, AZt, xZt, DS, YZ, _y, ibs, Wfo, Q0n } from "B:/~BUN/root/chunk-yhafkw66.js";
import { ZRs, nHt, _gt, Bm, kbo, eAs } from "B:/~BUN/root/chunk-qdcjp7da.js";
import { xr } from "B:/~BUN/root/chunk-y2g9f85n.js";
import * as w from "fs/promises";
import * as Z from "fs";
import * as g from "path";
import * as ve from "child_process";
import * as rt from "crypto";
import * as it from "readline";
function R(r) {
  if (r.inputSchema.type !== "object") throw Error(`JSON schema for tool "${r.name}" must be an object, but got ${r.inputSchema.type}`);
  return {
    type: "custom",
    name: r.name,
    input_schema: r.inputSchema,
    description: r.description,
    run: r.run,
    parse: e => e,
    ...(r.close ? {
      close: r.close
    } : {})
  };
}
var promises = _gt.promises,
  mode = 448,
  dt = 384;
function te(r, e) {
  let t = Bm.relative(r, e);
  return t === "" || !t.startsWith(".." + Bm.sep) && t !== ".." && !Bm.isAbsolute(t);
}
async function ue(r, e) {
  for (let t of r) if (te(await q(Bm.resolve(t)), e)) return t;
  return;
}
var ht = 40;
function G(r) {
  let e = r?.code;
  return typeof e === "string" ? e : void 0;
}
async function q(r) {
  let e = [],
    t = r,
    n = 0;
  for (;;) {
    let i;
    try {
      i = await promises.realpath(t);
    } catch (error) {
      let s;
      try {
        s = (await promises.lstat(t)).isSymbolicLink();
      } catch (error) {
        let l = G(error);
        if (l !== "ENOENT" && l !== "ENOTDIR") throw error;
        let f = Bm.dirname(t);
        if (f === t) throw error;
        e.push(Bm.basename(t)), t = f;
        continue;
      }
      if (!s) throw error;
      if (++n > ht) throw Object.assign(Error("too many levels of symbolic links"), {
        code: "ELOOP"
      });
      t = Bm.resolve(Bm.dirname(t), await promises.readlink(t));
      continue;
    }
    return e.length ? Bm.join(i, ...e.reverse()) : i;
  }
}
async function ke(r, e, t) {
  let n = t?.allowedRoots ?? [],
    i = await q(Bm.resolve(r)),
    o;
  try {
    o = await q(Bm.resolve(i, e));
  } catch (error) {
    throw new _y(P(error, `path ${JSON.stringify(e)}`));
  }
  if (te(i, o) || (await ue(n, o)) !== void 0) return o;
  let s = n.length ? "the session's working directory and its other permitted directories" : "the session's working directory";
  throw new _y(`path ${JSON.stringify(e)} is outside ${s}`);
}
async function pe(r, e) {
  let t = Bm.dirname(r),
    n = Bm.join(t, `.tmp-${process.pid}-${nHt.randomUUID()}`),
    i = await promises.stat(r).then(s => s.mode & 511, () => {
      return;
    }),
    o;
  try {
    if (o = await promises.open(n, "wx", dt), i !== void 0) await o.chmod(i);
    await o.writeFile(e, "utf-8"), await o.sync(), await o.close(), o = void 0, await promises.rename(n, r);
  } catch (error) {
    if (o) await o.close().catch(() => {});
    throw await promises.unlink(n).catch(() => {}), error;
  }
}
function P(r, e) {
  let t = G(r);
  switch (t) {
    case "ENOENT":
      return `${e}: no such file or directory`;
    case "EACCES":
    case "EPERM":
      return `${e}: permission denied`;
    case "ENOTDIR":
      return `${e}: not a directory`;
    case "EISDIR":
      return `${e}: is a directory`;
    case "ELOOP":
      return `${e}: too many levels of symbolic links`;
    case "ENAMETOOLONG":
      return `${e}: file name too long`;
    case "ENOSPC":
      return `${e}: no space left on device`;
    case "EMFILE":
    case "ENFILE":
      return `${e}: too many open files`;
    default:
      return `${e}: ${t !== void 0 ? `i/o error (${t})` : "i/o error"}`;
  }
}
var promises_2 = _gt.promises,
  mt = eAs.promisify(ZRs.execFile);
async function ut(r) {
  let {
    client: client,
    sessionId: sessionId
  } = r;
  if (!client) return async () => {};
  let n = DS(client),
    session = r.session;
  if (!session) {
    if (sessionId === void 0) return async () => {};
    n.warn("AgentToolContext.sessionId is deprecated and costs an extra session fetch; fetch the session once and set `session` instead", {
      component: "agent-tool-context"
    }), session = await client.beta.sessions.retrieve(sessionId);
  }
  let o = Bm.resolve(r.workdir, "skills"),
    s = [];
  for (let a of session.agent.skills) try {
    let l = await client.beta.skills.versions.retrieve(a.version, {
        skill_id: a.skill_id
      }),
      f = Bm.basename(l.name.trim());
    if (f === "" || f === "." || f === "..") f = a.skill_id;
    let dest = Bm.resolve(o, f);
    if (dest !== o && !dest.startsWith(o + Bm.sep)) {
      n.warn("skill name escapes the skills dir; skipping", {
        component: "agent-tool-context",
        name: l.name
      });
      continue;
    }
    let h = await client.beta.skills.versions.download(l.id, {
      skill_id: a.skill_id
    });
    await promises_2.rm(dest, {
      recursive: !0,
      force: !0
    }), await promises_2.mkdir(dest, {
      recursive: !0,
      mode: mode
    }), s.push(dest), await Re(h, dest), n.info("downloaded skill", {
      component: "agent-tool-context",
      skill_id: a.skill_id,
      version: l.id,
      dest: dest
    });
  } catch (l) {
    n.warn("failed to download skill", {
      component: "agent-tool-context",
      skill_id: a.skill_id,
      error: String(l)
    });
  }
  return async () => {
    for (let dest_2 of s) await promises_2.rm(dest_2, {
      recursive: !0,
      force: !0
    }).catch(l => {
      n.warn("failed to clean up skill", {
        component: "agent-tool-context",
        dest: dest_2,
        error: String(l)
      });
    });
  };
}
function pt(r) {
  for (let e of r) {
    let t = e.trim();
    if (!t) continue;
    if (Bm.isAbsolute(t) || t.split(/[\\/]/).includes("..")) throw new xr(`refusing to extract unsafe archive member: ${t}`);
  }
}
var we = "skill archive listing is inconsistent; refusing to extract",
  yt = {
    unzip: new Set(["-", "d", "?"]),
    tar: new Set(["-", "d", "C"])
  };
function Ie(r) {
  let e = r.split(`
`);
  if (e[e.length - 1] === "") e.pop();
  return e;
}
function wt(r, e) {
  return /^[\x20-\x7E]+$/.test(e) && !/[\\^#]/.test(e) && !(r === "unzip" && e.startsWith("-"));
}
function _t(r, e, t) {
  let n = Ie(e),
    i = Ie(t);
  if (n.length !== i.length) throw new xr(we);
  let plain = [],
    special = [];
  return n.forEach((item, index) => {
    if (yt[r].has(i[index].charAt(0))) {
      plain.push(item);
      return;
    }
    if (!wt(r, item)) throw new xr(`refusing to extract archive: cannot safely exclude member ${JSON.stringify(item)}`);
    special.push(item);
  }), {
    plain: plain,
    special: special
  };
}
async function Ne(r) {
  for (let e of await promises_2.readdir(r, {
    withFileTypes: !0
  })) if (e.isDirectory()) await Ne(Bm.join(r, e.name));else if (!e.isFile()) throw new xr(we);
}
async function ye(r, e) {
  try {
    let {
      stdout: stdout
    } = await mt(r, e);
    return stdout;
  } catch (error) {
    if (G(error) === "ENOENT") throw new xr(`skill extraction requires the \`${r}\` command, but it was not found on PATH`);
    throw error;
  }
}
function gt(r) {
  let e,
    t = !1;
  for (let n of r) {
    let i = n.trim().split("/").filter(item => item !== "" && item !== ".");
    if (i.length === 0) continue;
    let o = i[0];
    if (e === void 0) e = o;else if (o !== e) return "";
    if (i.length > 1) t = !0;
  }
  return e !== void 0 && t ? e : "";
}
async function Re(r, e) {
  let t = Bm.join(e, `.skill-archive-${process.pid}-${Date.now()}`);
  if (!r.body) throw new xr("skill download response had no body");
  await kbo.promises.pipeline(kbo.Readable.fromWeb(r.body), _gt.createWriteStream(t));
  let n = Bm.join(Bm.dirname(e), `.skill-stage-${process.pid}-${Date.now()}`),
    i = Bm.join(Bm.dirname(e), `.skill-exclude-${process.pid}-${Date.now()}`);
  try {
    let o = await Et(t, 4),
      s = o.length >= 4 && o[0] === 80 && o[1] === 75 && o[2] === 3 && o[3] === 4,
      a = s ? "unzip" : "tar",
      l = await ye(a, s ? ["-Z1", t] : ["-tf", t]),
      f = await ye(a, s ? ["-Z", "--h", "--t", t] : ["-tvf", t]),
      {
        plain: plain_2,
        special: special_2
      } = _t(a, l, f);
    pt([...plain_2, ...special_2]);
    let y = gt(plain_2);
    if (await promises_2.mkdir(n, {
      recursive: !0,
      mode: mode
    }), plain_2.length > 0) await ye(a, await St(a, t, n, special_2, i));
    await Ne(n);
    let O = y ? Bm.join(n, y) : n,
      v = await promises_2.readdir(O).catch(M => {
        throw G(M) === "ENOENT" ? new xr(we) : M;
      });
    for (let M of v) await promises_2.rename(Bm.join(O, M), Bm.join(e, M));
  } finally {
    await promises_2.rm(t, {
      force: !0
    }), await promises_2.rm(i, {
      force: !0
    }), await promises_2.rm(n, {
      recursive: !0,
      force: !0
    });
  }
}
async function St(r, e, t, n, i) {
  let o = n.map(item => item.replace(/[*?[\\]/g, "\\$&"));
  if (r === "unzip") return ["-oq", e, "-d", t, ...(o.length > 0 ? ["-x", ...o] : [])];
  if (o.length === 0) return ["-xf", e, "-C", t];
  return await promises_2.writeFile(i, o.join(`
`) + `
`, {
    flag: "wx",
    mode: 384
  }), ["-xf", e, "-C", t, "-X", i];
}
async function Et(r, e) {
  let t = await promises_2.open(r, "r");
  try {
    let n = Buffer.alloc(e),
      {
        bytesRead: bytesRead
      } = await t.read(n, 0, e, 0);
    return n.subarray(0, bytesRead);
  } finally {
    await t.close();
  }
}
var promises_3 = _gt.promises,
  constants = _gt.constants,
  mode_2 = 448,
  bt = 384,
  Ot = 448,
  ge = constants.O_NOFOLLOW ?? 0,
  Mt = constants.O_NONBLOCK ?? 0,
  m = (() => {
    class FileStoreError extends Error {
      constructor(e, t) {
        super(`path ${JSON.stringify(t)} ${e}`);
        this.name = "FileStoreError", this.reason = e, this.relPath = t;
      }
    }
    return FileStoreError.ESCAPES_ROOT = "escapes the store root", FileStoreError.IS_A_SYMLINK = "is a symlink", FileStoreError.NOT_A_FILE = "is not a regular file", FileStoreError.NOT_A_DIRECTORY = "is not a directory", FileStoreError.NOT_UTF8 = "is not valid utf-8", FileStoreError.MOVE_DESTINATION_EXISTS = "already exists", FileStoreError;
  })();
function Se(r) {
  return r.startsWith("/") && !r.split("/").includes("..");
}
var _e = (() => {
  class r {
    constructor(e, t, n = !1) {
      this.hashes = new Map(), this.rootPath = e, this.removedOnDispose = t, this.decoder = n ? new TextDecoder("utf-8", {
        fatal: !0
      }) : void 0;
    }
    static async open(e, t) {
      if (!vt()) throw Error("FileStore requires O_NOFOLLOW support on this platform");
      let n = !1;
      try {
        await promises_3.lstat(e);
      } catch (error) {
        if (error.code !== "ENOENT") throw error;
        n = !0;
      }
      return new r(Bm.resolve(e), n, t?.utf8 ?? !1);
    }
    async createRoot() {
      await kt(this.rootPath);
    }
    root() {
      return {
        path: this.rootPath,
        removedOnDispose: this.removedOnDispose
      };
    }
    async dispose() {
      if (!this.removedOnDispose) return;
      await promises_3.rm(this.rootPath, {
        recursive: !0,
        force: !0
      });
    }
    async put(e, t, n) {
      let i = e.replace(/\\/g, "/");
      if (i.endsWith("/") || i.endsWith("/.") || i === "" || i === ".") throw new m(m.NOT_A_FILE, e);
      let o = this.resolveUnderRoot(e),
        s = typeof t === "string" ? AZt(t) : t;
      this.requireUtf8(e, s), await Te(this.rootPath, Bm.dirname(o)), await It(o, s, n?.executable ?? !1);
    }
    async get(e) {
      let t = this.resolveUnderRoot(e),
        n;
      try {
        n = await De(e, t);
      } catch (error) {
        if (error.code === "ENOENT") return null;
        throw error;
      }
      let i;
      try {
        let o = await n.readFile();
        i = new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
      } finally {
        await n.close();
      }
      return this.requireUtf8(e, i), i;
    }
    async ls(e = "/") {
      let t = this.resolveUnderRoot(e);
      return new Set((await Le(this.rootPath, e, t)).map(([n]) => n));
    }
    async findSymlinks(e = "/") {
      let t = this.resolveUnderRoot(e);
      return Rt(this.rootPath, e, t);
    }
    async hashtree(e = "/") {
      let t = this.resolveUnderRoot(e),
        n = re.nowNs(),
        i = Object.create(null);
      for (let [o, s] of await Le(this.rootPath, e, t)) {
        let a = await this.hashViaCache(o, s, n);
        if (a !== null) i[o] = a;
      }
      return i;
    }
    async hashFile(e) {
      let t = this.resolveUnderRoot(e),
        n;
      try {
        n = await promises_3.lstat(t, {
          bigint: !0
        });
      } catch (error) {
        if (error.code === "ENOENT") return null;
        throw error;
      }
      if (n.isSymbolicLink()) throw new m(m.IS_A_SYMLINK, e);
      if (!n.isFile()) throw new m(m.NOT_A_FILE, e);
      let i = Bm.relative(this.rootPath, t).split(Bm.sep).join("/");
      return this.hashViaCache(i, t, re.nowNs());
    }
    async move(e, t) {
      let n = this.resolveUnderRoot(e),
        i = this.resolveUnderRoot(t);
      if (n === this.rootPath || i === this.rootPath) return;
      if (await promises_3.stat(i).then(() => !0, () => !1)) throw new m(m.MOVE_DESTINATION_EXISTS, t);
      await Te(this.rootPath, Bm.dirname(i)), await promises_3.rename(n, i);
    }
    async remove(e) {
      let t = this.resolveUnderRoot(e);
      if (t === this.rootPath) return;
      let n;
      try {
        n = await promises_3.lstat(t, {
          bigint: !0
        });
      } catch (error) {
        if (error.code === "ENOENT") return;
        throw error;
      }
      if (n.isDirectory()) await promises_3.rm(t, {
        recursive: !0,
        force: !0
      });else try {
        await promises_3.unlink(t);
      } catch (error) {
        if (error.code !== "ENOENT") throw error;
      }
    }
    resolveUnderRoot(e) {
      let t = e.replace(/\\/g, "/").replace(/^\/+/, ""),
        n = t.split("/").filter(item => item !== "" && item !== ".");
      if (Bm.posix.isAbsolute(t) || n.includes("..")) throw new m(m.ESCAPES_ROOT, e);
      return n.length === 0 ? this.rootPath : Bm.join(this.rootPath, ...n);
    }
    requireUtf8(e, t) {
      if (!this.decoder) return;
      try {
        this.decoder.decode(t);
      } catch {
        throw new m(m.NOT_UTF8, e);
      }
    }
    async hashViaCache(e, t, n) {
      let i;
      try {
        i = await promises_3.lstat(t, {
          bigint: !0
        });
      } catch (error) {
        if (error.code === "ENOENT") return null;
        throw error;
      }
      if (!i.isFile()) return null;
      let o = this.hashes.get(e),
        sha;
      if (o !== void 0 && Lt(o, i)) sha = o.sha;else try {
        sha = await re.hashFile(t);
      } catch (error) {
        let l = error.code;
        if (l === "ENOENT" || error instanceof m) return null;
        if (l === "ELOOP" || l === "EMLINK") return null;
        throw error;
      }
      if ($t(i, n)) this.hashes.set(e, {
        mtimeNs: i.mtimeNs,
        ctimeNs: i.ctimeNs,
        size: i.size,
        sha: sha
      });
      return sha;
    }
  }
  return r.isPathLegal = Se, r;
})();
function vt() {
  return ge !== 0;
}
async function kt(r) {
  let e = [],
    t = r;
  for (;;) {
    try {
      await promises_3.stat(t);
      break;
    } catch (error) {
      let o = error.code;
      if (o !== "ENOENT" && o !== "ENOTDIR" && o !== "ELOOP") throw error;
    }
    e.push(t);
    let n = Bm.dirname(t);
    if (n === t) break;
    t = n;
  }
  for (let n of e.reverse()) try {
    await promises_3.mkdir(n, {
      mode: mode_2
    });
  } catch (error) {
    if (error.code !== "EEXIST") throw error;
  }
}
async function Te(r, e) {
  let t = Bm.relative(r, e);
  if (t === "") return;
  let n = r;
  for (let i of t.split(Bm.sep)) {
    n = Bm.join(n, i);
    try {
      await promises_3.mkdir(n, {
        mode: mode_2
      });
    } catch (error) {
      if (error.code !== "EEXIST") throw error;
    }
  }
}
async function It(r, e, t) {
  let n = t ? Ot : bt,
    i = Bm.join(Bm.dirname(r), `.fs-${nHt.randomBytes(8).toString("hex")}.tmp`),
    o;
  try {
    o = await promises_3.open(i, constants.O_WRONLY | constants.O_CREAT | constants.O_EXCL | ge, n), await o.writeFile(e), await o.close(), o = void 0, await promises_3.rename(i, r);
  } catch (error) {
    if (o) await o.close().catch(() => {});
    throw await promises_3.unlink(i).catch(() => {}), error;
  }
}
async function De(r, e) {
  let t;
  try {
    t = await promises_3.open(e, constants.O_RDONLY | ge | Mt);
  } catch (error) {
    let i = error.code;
    if (i === "ELOOP" || i === "EMLINK") throw new m(m.IS_A_SYMLINK, r);
    throw error;
  }
  try {
    if (!(await t.stat()).isFile()) throw new m(m.NOT_A_FILE, r);
  } catch (error) {
    throw await t.close().catch(() => {}), error;
  }
  return t;
}
async function hashFile(r) {
  let e = nHt.createHash("sha256"),
    t = await De(Bm.basename(r), r),
    uint8Array = new Uint8Array(1048576);
  try {
    for (;;) {
      let {
        bytesRead: bytesRead_2
      } = await t.read(uint8Array, 0, uint8Array.length);
      if (bytesRead_2 === 0) break;
      e.update(uint8Array.subarray(0, bytesRead_2));
    }
  } finally {
    await t.close();
  }
  return e.digest("hex");
}
async function Le(r, e, t) {
  if (!(await Tt(e, t))) return [];
  let n = [];
  return await Ce(t, (i, o) => {
    if (o.isFile()) n.push([Bm.relative(r, i).split(Bm.sep).join("/"), i]);
  }), n.sort(), n;
}
async function Rt(r, e, t) {
  let n = s => Bm.relative(r, s).split(Bm.sep).join("/"),
    i;
  try {
    i = await promises_3.lstat(t, {
      bigint: !0
    });
  } catch (error) {
    let a = error.code;
    if (a === "ENOENT" || a === "ENOTDIR") return new Set();
    throw error;
  }
  if (i.isSymbolicLink()) return new Set([n(t)]);
  if (!i.isDirectory()) throw new m(m.NOT_A_DIRECTORY, e);
  let o = new Set();
  return await Ce(t, (s, a) => {
    if (a.isSymbolicLink()) o.add(n(s));
  }), o;
}
async function Tt(r, e) {
  let t;
  try {
    t = await promises_3.lstat(e, {
      bigint: !0
    });
  } catch (error) {
    let i = error.code;
    if (i === "ENOENT" || i === "ENOTDIR") return !1;
    throw error;
  }
  if (!t.isDirectory()) throw new m(m.NOT_A_DIRECTORY, r);
  return !0;
}
async function Ce(r, e) {
  let t = [r];
  while (t.length) {
    let n = t.pop(),
      i;
    try {
      i = await promises_3.readdir(n, {
        withFileTypes: !0
      });
    } catch (error) {
      if (error.code === "ENOENT") continue;
      throw error;
    }
    for (let o of i) {
      let s = Bm.join(n, o.name);
      if (e(s, o), o.isDirectory() && !o.isSymbolicLink()) t.push(s);
    }
  }
}
function Lt(r, e) {
  return e.mtimeNs === r.mtimeNs && e.ctimeNs === r.ctimeNs && e.size === r.size;
}
function $t(r, e) {
  return (r.mtimeNs > r.ctimeNs ? r.mtimeNs : r.ctimeNs) < e - re.timestampTrustMarginNs;
}
var timestampTrustMarginNs = 2000000000n,
  re = {
    hashFile: hashFile,
    timestampTrustMarginNs: timestampTrustMarginNs,
    nowNs: () => BigInt(Date.now()) * 1000000n
  },
  Fe = _e,
  asyncDispose = Symbol.asyncDispose;
if (asyncDispose) Object.defineProperty(_e.prototype, asyncDispose, {
  value: _e.prototype.dispose,
  configurable: !0,
  writable: !0
});
var u,
  I,
  ae,
  H,
  ce,
  d,
  U,
  oe,
  k,
  ze,
  se,
  Ge,
  He,
  Ee,
  Oe,
  Pe,
  We,
  be,
  Ue,
  je,
  ie,
  ne,
  Be,
  Ye,
  xt = 30000,
  j = ".anthropic-memory-store",
  Ke = 1;
function qe(r) {
  return nHt.createHash("sha256").update(`version ${Ke}
${r}`, "utf-8").digest("hex");
}
var Dt = 30000,
  Ct = 100,
  Ft = 20,
  Pt = 16,
  Wt = 32,
  Ut = 8,
  jt = 50;
class SessionMemoryError_2 extends xr {
  constructor(r, e) {
    super(r);
    if (this.name = "SessionMemoryError", e !== void 0) this.cause = e;
  }
}
class Ve {
  constructor(r, e, t) {
    this.mode = r, this.cap = e, this.waiveWindow = t, this.attempted = 0, this.capped = 0, this.suppressed = 0;
  }
  takeSlot() {
    if (this.attempted >= this.cap) return this.capped++, !1;
    return this.attempted++, !0;
  }
}
class Xe {
  constructor(r, e) {
    u.add(this), I.set(this, void 0), ae.set(this, void 0), H.set(this, void 0), ce.set(this, void 0), d.set(this, void 0), U.set(this, void 0), oe.set(this, !1), k.set(this, []), nr(this, I, r, "f"), nr(this, ae, e.workdir, "f"), nr(this, H, e.syncIntervalMs ?? ibs, "f"), Wfo(xe(this, H, "f"), "syncIntervalMs"), nr(this, ce, e.syncDeletions ?? "enabled", "f"), nr(this, d, DS(r), "f"), nr(this, U, Date.now(), "f");
  }
  get roots() {
    return xe(this, k, "f").map(item => item.files.root().path);
  }
  get readOnlyRoots() {
    return xe(this, k, "f").filter(item => item.readOnly).map(item => item.files.root().path);
  }
  async download(r) {
    for (let e of r.resources) {
      if (e.type !== "memory_store") continue;
      let t = xe(this, u, "m", ze).call(this, e),
        n;
      try {
        if (n = {
          memoryStoreId: e.memory_store_id,
          files: await Fe.open(t, {
            utf8: !0
          }),
          readOnly: e.access === "read_only",
          baseline: new Map(),
          refusedShas: new Map(),
          pendingDeletes: new Map()
        }, !n.files.root().removedOnDispose) throw new SessionMemoryError_2(`something already exists at the memory store's path: ${t} (memory_store_id=${e.memory_store_id}); it must not exist when the session starts`);
        try {
          await n.files.createRoot();
        } catch (error) {
          if (!B(error)) throw error;
          throw new SessionMemoryError_2(`cannot create the memory store's folder: ${t} (memory_store_id=${e.memory_store_id}): ${error}; the worker host must make this mount path writable`, error);
        }
        await xe(this, u, "m", Oe).call(this, n), xe(this, d, "f").info("downloaded memories", {
          count: n.baseline.size,
          memory_store_id: n.memoryStoreId,
          dest: n.files.root().path
        }), xe(this, k, "f").push(n);
      } catch (error) {
        if (n) await n.files.dispose().catch(() => {});
        if (error instanceof SessionMemoryError_2) throw error;
        throw new SessionMemoryError_2(`failed to download memory store memory_store_id=${e.memory_store_id}: ${error}`, error);
      }
    }
    nr(this, U, Date.now(), "f");
  }
  async finish() {
    if (xe(this, oe, "f")) throw new xr("finish() was already called: it is the session's last sync and runs once");
    nr(this, oe, !0, "f"), await this.syncAll(!0);
  }
  async syncAll(r) {
    await Promise.all(xe(this, k, "f").map(item => xe(this, u, "m", Ge).call(this, item, r))), nr(this, U, Date.now(), "f");
  }
  async syncIfDue() {
    if (Date.now() - xe(this, U, "f") < xe(this, H, "f")) return;
    await this.syncAll(!1);
  }
  async flushWrites(r) {
    await Promise.all(xe(this, k, "f").map(item => xe(this, u, "m", He).call(this, item, r)));
  }
  async dispose() {
    for (let r of xe(this, k, "f")) {
      let e = r.files.root();
      try {
        let t = await xe(this, u, "m", se).call(this, r);
        if (!t.markerOk && Object.keys(t.files).length > 0) {
          xe(this, d, "f").warn(`${t.distrustReason}; leaving the memory store folder on disk`, {
            root: e.path,
            memory_store_id: r.memoryStoreId
          });
          continue;
        }
        await r.files.dispose();
      } catch (t) {
        if (!(t instanceof m) && !B(t)) throw t;
        xe(this, d, "f").warn("failed to remove the memory store folder", {
          root: r.files.root().path,
          memory_store_id: r.memoryStoreId,
          error: String(t)
        });
        continue;
      }
      if (e.removedOnDispose) xe(this, d, "f").info("removed memory store dir", {
        dest: e.path,
        memory_store_id: r.memoryStoreId
      });
    }
  }
}
I = new WeakMap(), ae = new WeakMap(), H = new WeakMap(), ce = new WeakMap(), d = new WeakMap(), U = new WeakMap(), oe = new WeakMap(), k = new WeakMap(), u = new WeakSet(), ze = function (e) {
  if (e.mount_path) {
    if (!Se(e.mount_path)) throw new SessionMemoryError_2(`memory store mount_path is not a clean absolute path: ${JSON.stringify(e.mount_path)} (memory_store_id=${e.memory_store_id})`);
    return e.mount_path;
  }
  return Bm.join(xe(this, ae, "f"), "memory", e.name || e.memory_store_id);
}, se = async function (e) {
  let files = await e.files.hashtree(),
    n = files[j];
  if (delete files[j], n === qe(e.memoryStoreId)) return {
    files: files,
    markerOk: !0,
    distrustReason: null
  };
  return {
    files: files,
    markerOk: !1,
    distrustReason: n !== void 0 ? "the marker file does not match this store" : "the marker file is gone"
  };
}, Ge = async function (e, t) {
  try {
    let n = await xe(this, u, "m", se).call(this, e),
      files_2 = n.files;
    if (!n.markerOk) {
      if (Object.keys(files_2).length > 0) {
        xe(this, d, "f").warn(`${n.distrustReason}; leaving the memory store folder as found and not syncing`, {
          root: e.files.root().path,
          memory_store_id: e.memoryStoreId
        });
        return;
      }
      await xe(this, u, "m", Ee).call(this, e, "the folder or its marker is gone");
      return;
    }
    if (Object.keys(files_2).length === 0 && e.baseline.size > 1) {
      await xe(this, u, "m", Ee).call(this, e, "every memory file is gone at once");
      return;
    }
    let o = new Map();
    for await (let [c, h] of xe(this, u, "m", ie).call(this, e.memoryStoreId)) o.set(c, h);
    let s = new Ve(xe(this, ce, "f"), Math.max(Ut, Math.min(jt, Math.floor(e.baseline.size / 4))), t),
      a = [],
      l = new Map(),
      f = [...new Set([...o.keys(), ...Object.keys(files_2), ...e.baseline.keys()])].sort();
    for (let c of f) {
      let h = o.get(c),
        y = files_2[c],
        O = e.baseline.get(c),
        v;
      if (y === void 0 && O !== void 0 && h !== void 0 && h.content_sha256 === O && !e.readOnly) v = await xe(this, u, "m", Be).call(this, e, c, h, O, s);else v = await xe(this, u, "m", Pe).call(this, e, c, h, y, a);
      if (v !== void 0) l.set(c, v);
    }
    if (e.baseline = l, await xe(this, u, "m", Ue).call(this, e, a), s.suppressed > 0) xe(this, d, "f").debug("remote deletes are disabled; locally deleted memories stay on the server", {
      count: s.suppressed,
      memory_store_id: e.memoryStoreId
    });
    if (s.capped > 0) xe(this, d, "f").warn(`delete cap reached: ${s.mode === "log_only" ? "would send" : "sent"} ${s.attempted} deletes, held ${s.capped} for later syncs`, {
      memory_store_id: e.memoryStoreId
    });
  } catch (n) {
    xe(this, d, "f").warn("memory sync failed", {
      memory_store_id: e.memoryStoreId,
      error: String(n)
    });
  }
}, He = async function (e, t) {
  let n = new Map(),
    i = new Set(),
    o = async () => {
      if (e.readOnly) return;
      let s = await xe(this, u, "m", se).call(this, e);
      if (!s.markerOk) {
        xe(this, d, "f").warn(`${s.distrustReason}; not uploading anything from the memory store folder`, {
          root: e.files.root().path,
          memory_store_id: e.memoryStoreId
        });
        return;
      }
      for (let [f, c] of Object.entries(s.files)) if (c !== e.baseline.get(f) && e.refusedShas.get(f) !== c) n.set(f, c), i.add(f);
      if (n.size === 0 || t?.aborted) return;
      let a = new Map();
      for await (let [f, c] of xe(this, u, "m", ie).call(this, e.memoryStoreId)) {
        if (t?.aborted) return;
        a.set(f, c);
      }
      let l = [];
      for (let path of [...n.keys()].sort()) {
        let c = n.get(path),
          h = e.baseline.get(path),
          y = a.get(path);
        if (y !== void 0 && y.content_sha256 === c) {
          e.baseline.set(path, y.content_sha256), i.delete(path);
          continue;
        }
        if (y !== void 0 && y.content_sha256 !== h) {
          xe(this, d, "f").warn("memory changed both locally and remotely; the flush leaves the remote version", {
            path: path,
            memory_store_id: e.memoryStoreId
          }), i.delete(path);
          continue;
        }
        l.push([path, c, y]);
      }
      await xe(this, u, "m", je).call(this, e, l, i, t);
    };
  try {
    if (await Bt(o(), t), t?.aborted && i.size > 0) xe(this, d, "f").warn(`memory flush cut off part-way; ${i.size} of ${n.size} changed files had not finished uploading`, {
      memory_store_id: e.memoryStoreId
    });
  } catch (s) {
    xe(this, d, "f").warn("memory flush failed", {
      memory_store_id: e.memoryStoreId,
      error: String(s)
    });
  }
}, Ee = async function (e, t) {
  xe(this, d, "f").warn(`${t}; re-downloading the memory store folder instead of syncing`, {
    root: e.files.root().path,
    memory_store_id: e.memoryStoreId
  }), await e.files.createRoot(), await xe(this, u, "m", Oe).call(this, e);
}, Oe = async function (e) {
  e.baseline = new Map(), e.pendingDeletes.clear(), await e.files.put(j, `version ${Ke}
${e.memoryStoreId}`);
  for await (let [t, n] of xe(this, u, "m", ie).call(this, e.memoryStoreId, "full")) if (await xe(this, u, "m", be).call(this, e, t, n.content ?? "")) e.baseline.set(t, n.content_sha256);
}, Pe = async function (e, path_2, n, i, o) {
  let s = e.baseline.get(path_2);
  if (i !== void 0) e.pendingDeletes.delete(path_2);
  if (!n) {
    if (i === void 0) {
      e.pendingDeletes.delete(path_2);
      return;
    }
    if (s !== void 0) {
      if (i === s) {
        let h = await xe(this, u, "m", We).call(this, e, path_2, s);
        if (h === void 0) return;
        if (h === s) return s;
        i = h;
      }
      if (e.readOnly) xe(this, d, "f").warn("memory deleted remotely but edited locally; keeping the file, which a read-only store cannot push", {
        path: path_2,
        memory_store_id: e.memoryStoreId
      });else if (e.refusedShas.get(path_2) !== i) xe(this, d, "f").info("memory deleted remotely but edited locally; re-creating it from the file", {
        path: path_2,
        memory_store_id: e.memoryStoreId
      });
    }
    if (e.readOnly) return;
    if (e.refusedShas.get(path_2) === i) return;
    return await xe(this, u, "m", ne).call(this, e, path_2, i, void 0);
  }
  let content_sha256 = n.content_sha256,
    l = content_sha256 !== s,
    f = i !== void 0 && i !== s && i !== content_sha256,
    c = !e.readOnly && f;
  if (i === void 0 && s !== void 0) {
    if (l) xe(this, d, "f").warn("memory deleted locally but changed remotely; restoring the remote version", {
      path: path_2,
      memory_store_id: e.memoryStoreId
    }), e.pendingDeletes.delete(path_2), o.push([path_2, n]);
    return s;
  }
  if (l) {
    if (i === content_sha256) return content_sha256;
    if (f) xe(this, d, "f").warn("memory changed both locally and remotely; keeping the remote version", {
      path: path_2,
      memory_store_id: e.memoryStoreId
    });
    return o.push([path_2, n]), s;
  }
  if (c) {
    if (e.refusedShas.get(path_2) === i) return content_sha256;
    return (await xe(this, u, "m", ne).call(this, e, path_2, i, n)) ?? content_sha256;
  }
  return content_sha256;
}, We = async function (e, path_3, n) {
  let i;
  try {
    i = await e.files.hashFile(path_3);
  } catch (error) {
    if (!(error instanceof m) && !B(error)) throw error;
    return n;
  }
  if (i === null) return;
  if (i !== n) return i;
  try {
    await e.files.remove(path_3);
  } catch (o) {
    if (!(o instanceof m) && !B(o)) throw o;
    return xe(this, d, "f").warn("failed to remove memory deleted remotely", {
      path: path_3,
      memory_store_id: e.memoryStoreId,
      error: String(o)
    }), n;
  }
  return;
}, be = async function (e, path_4, n) {
  try {
    await e.files.put(path_4, n);
  } catch (i) {
    if (!(i instanceof m) && !B(i)) throw i;
    return xe(this, d, "f").warn("failed to write memory", {
      path: path_4,
      memory_store_id: e.memoryStoreId,
      error: String(i)
    }), !1;
  }
  return !0;
}, Ue = async function (e, t) {
  if (t.length === 0) return;
  let n = async (path_5, a) => {
      let l;
      try {
        l = await xe(this, I, "f").beta.memoryStores.memories.retrieve(a.id, {
          memory_store_id: e.memoryStoreId,
          view: "full"
        });
      } catch (f) {
        if (YZ(f, 404)) return;
        xe(this, d, "f").warn("failed to fetch memory content", {
          path: path_5,
          memory_store_id: e.memoryStoreId,
          error: String(f)
        });
        return;
      }
      if (await xe(this, u, "m", be).call(this, e, path_5, l.content ?? "")) e.baseline.set(path_5, l.content_sha256);
    },
    i = t[Symbol.iterator](),
    o = async () => {
      for (let [s, a] of i) await n(s, a);
    };
  await Promise.all(Array.from({
    length: Math.min(Pt, t.length)
  }, o));
}, je = async function (e, t, n, i) {
  let o = t[Symbol.iterator](),
    s = async () => {
      for (let [a, l, f] of o) {
        if (i?.aborted) return;
        let c = await xe(this, u, "m", ne).call(this, e, a, l, f);
        if (n.delete(a), c !== void 0) e.baseline.set(a, c);
      }
    };
  await Promise.all(Array.from({
    length: Math.min(Wt, t.length)
  }, s));
}, ie = async function* (memory_store_id, view = "basic") {
  let limit = view === "basic" ? Ct : Ft;
  for await (let i of xe(this, I, "f").beta.memoryStores.memories.list(memory_store_id, {
    view: view,
    limit: limit
  })) {
    if (i.type !== "memory") continue;
    let o = i.path.replace(/^\/+/, "");
    if (o === j) {
      xe(this, d, "f").warn("the server listed the reserved marker path; skipping", {
        path: i.path,
        memory_store_id: memory_store_id
      });
      continue;
    }
    yield [o, i];
  }
}, ne = async function r(e, path_6, n, i) {
  try {
    let o = await e.files.get(path_6);
    if (o === null) return;
    let content = xZt(o),
      a = i ? await xe(this, I, "f").beta.memoryStores.memories.update(i.id, {
        memory_store_id: e.memoryStoreId,
        content: content,
        precondition: {
          type: "content_sha256",
          content_sha256: i.content_sha256
        }
      }) : await xe(this, I, "f").beta.memoryStores.memories.create(e.memoryStoreId, {
        path: "/" + path_6,
        content: content
      });
    return e.refusedShas.delete(path_6), a.content_sha256;
  } catch (o) {
    if (i && YZ(o, 404)) return await xe(this, u, "m", r).call(this, e, path_6, n, void 0);
    let s = o instanceof m || YZ(o, 400) || YZ(o, 413);
    if (i && YZ(o, 409)) xe(this, d, "f").warn("memory changed both locally and remotely; the upload was refused and the local edit loses", {
      path: path_6,
      memory_store_id: e.memoryStoreId
    });else if (s && n !== void 0) e.refusedShas.set(path_6, n), xe(this, d, "f").warn("the server rejected this memory file, so it stays un-synced until its content changes", {
      path: path_6,
      memory_store_id: e.memoryStoreId,
      rejection: String(o)
    });else xe(this, d, "f").warn("failed to upload memory", {
      path: path_6,
      memory_store_id: e.memoryStoreId,
      error: String(o)
    });
    return;
  }
}, Be = async function (e, path_7, n, i, o) {
  if (o.mode === "disabled") return o.suppressed++, i;
  let s = e.pendingDeletes.get(path_7);
  if (s === void 0) s = Date.now(), e.pendingDeletes.set(path_7, s);
  if (!o.waiveWindow && Date.now() - s < Dt) return i;
  let a, l;
  try {
    a = (await e.files.hashFile(j)) === qe(e.memoryStoreId), l = (await e.files.hashFile(path_7)) === null;
  } catch (error) {
    if (!(error instanceof m) && !B(error)) throw error;
    a = l = !1;
  }
  if (!a) return i;
  if (!l) return e.pendingDeletes.delete(path_7), i;
  if (!o.takeSlot()) return i;
  if (o.mode === "log_only") return xe(this, d, "f").info("log-only: sync would delete this memory on the server", {
    path: path_7,
    memory_store_id: e.memoryStoreId
  }), i;
  let f = await xe(this, u, "m", Ye).call(this, e, path_7, n, i);
  if (f === void 0) e.pendingDeletes.delete(path_7);
  return f;
}, Ye = async function (e, path_8, n, expected_content_sha256) {
  try {
    await xe(this, I, "f").beta.memoryStores.memories.delete(n.id, {
      memory_store_id: e.memoryStoreId,
      expected_content_sha256: expected_content_sha256
    });
  } catch (o) {
    if (YZ(o, 404)) return;
    if (YZ(o, 409) || YZ(o, 412)) xe(this, d, "f").warn("memory deleted locally but changed remotely; keeping the remote version", {
      path: path_8,
      memory_store_id: e.memoryStoreId
    });else xe(this, d, "f").warn("failed to delete memory", {
      path: path_8,
      memory_store_id: e.memoryStoreId,
      error: String(o)
    });
    return expected_content_sha256;
  }
  xe(this, d, "f").info("propagated local deletion", {
    path: path_8,
    memory_store_id: e.memoryStoreId
  });
  return;
};
function B(r) {
  return typeof r === "object" && r !== null && typeof r.code === "string";
}
async function Bt(r, e) {
  if (!e) {
    await r;
    return;
  }
  let t,
    promise = new Promise(i => {
      if (t = i, e.aborted) i();
    });
  e.addEventListener("abort", t, {
    once: !0
  });
  try {
    await Promise.race([r, promise]);
  } finally {
    e.removeEventListener("abort", t);
  }
}
var le,
  _,
  S,
  K,
  A,
  b,
  Me,
  fe,
  V,
  de,
  he,
  D,
  C,
  Y,
  x,
  X,
  N,
  tt,
  Je,
  Ze = 102400,
  nt = 120000,
  Yt = 262144,
  highWaterMark = 65536,
  Qe = Buffer.from(`
`),
  J = 102400,
  zt = 2000,
  Gt = 200;
class BashTimeoutError extends xr {
  constructor(r) {
    super(`bash command timed out after ${r}ms`);
    this.name = "BashTimeoutError", this.timeoutMs = r;
  }
}
var Ht = /\x1b\[[0-9;?]*[ -/]*[@-~]/g,
  glob = w.glob;
function st(r) {
  return r === void 0 ? Yt : r;
}
function F(r) {
  if (r === void 0) return;
  throw new xr("The `unrestrictedPaths` option you passed to the agent toolset (AgentToolContext) is no longer supported. The toolset's file tools (read, write, edit, glob, grep) are now always confined to the working directory plus the directories listed in `allowedRoots`. Remove `unrestrictedPaths` from your context; to let the file tools reach any other directory, add it to `allowedRoots`.");
}
function Ur(r) {
  return [Jt(r), Zt(r), er(r), tr(r), ir(r), or(r)];
}
async function Q(r, e) {
  return F(r.unrestrictedPaths), ke(r.workdir, e, {
    allowedRoots: r.allowedRoots ?? []
  });
}
function at(r, e) {
  return ue(r.readOnlyRoots ?? [], e);
}
function Vt() {
  let r = {};
  for (let [e, t] of Object.entries(process.env)) {
    if (e.startsWith("ANTHROPIC_")) continue;
    r[e] = t;
  }
  return r;
}
var Xt = (() => {
  class r {
    constructor(cwd, t = Vt()) {
      le.add(this), _.set(this, void 0), S.set(this, ""), K.set(this, !1), A.set(this, !1), b.set(this, null), nr(this, _, ve.spawn("/bin/bash", ["--noprofile", "--norc"], {
        cwd: cwd,
        env: {
          ...t,
          PS1: "",
          PS2: "",
          TERM: "dumb"
        },
        stdio: ["pipe", "pipe", "pipe"],
        detached: !0
      }), "f"), xe(this, _, "f").stdout.setEncoding("utf8"), xe(this, _, "f").stderr.setEncoding("utf8"), xe(this, _, "f").stdout.on("data", n => xe(this, le, "m", Me).call(this, n)), xe(this, _, "f").stderr.on("data", n => xe(this, le, "m", Me).call(this, n)), xe(this, _, "f").once("close", () => {
        nr(this, A, !0, "f");
        let n = xe(this, b, "f");
        nr(this, b, null, "f"), n?.resolve();
      });
    }
    get closed() {
      return xe(this, A, "f");
    }
    async exec(e, t = {}) {
      if (xe(this, A, "f")) throw new xr("bash session terminated");
      let n = t.timeoutMs ?? nt,
        i = t.signal;
      i?.throwIfAborted(), nr(this, S, "", "f"), nr(this, K, !1, "f");
      let sentinel = `__ANT_CMD_${rt.randomUUID()}_DONE__`,
        s = `${sentinel.slice(0, 8)}''${sentinel.slice(8)}`,
        a = `{ ${e}
} </dev/null 2>&1; printf '\\n${s}%d\\n' $?
`;
      if (xe(this, _, "f").stdin.write(a), xe(this, S, "f").indexOf(sentinel) < 0) {
        let {
          promise: promise_2,
          resolve: resolve
        } = Q0n();
        nr(this, b, {
          sentinel: sentinel,
          resolve: resolve
        }, "f");
        let M, ee;
        try {
          await Promise.race([promise_2, new Promise((ft, me) => {
            M = setTimeout(() => me(new BashTimeoutError(n)), n);
          }), new Promise((ft, me) => {
            if (!i) return;
            ee = () => me(i.reason), i.addEventListener("abort", ee, {
              once: !0
            });
          })]);
        } finally {
          if (M) clearTimeout(M);
          if (ee && i) i.removeEventListener("abort", ee);
          nr(this, b, null, "f");
        }
      }
      let l = xe(this, S, "f").indexOf(sentinel);
      if (l < 0) throw new xr("bash session terminated");
      let c = xe(this, S, "f").slice(l + sentinel.length).match(/^(-?\d+)/),
        exitCode = c ? parseInt(c[1], 10) : -1,
        output = xe(this, S, "f").slice(0, l).replace(Ht, "").replace(/\n+$/, "");
      if (xe(this, K, "f")) output = `[output truncated]
${output}`;
      return {
        output: output,
        exitCode: exitCode
      };
    }
    close() {
      if (xe(this, A, "f")) return;
      nr(this, A, !0, "f");
      let e = xe(this, b, "f");
      nr(this, b, null, "f"), e?.resolve(), xe(this, _, "f").stdout.destroy(), xe(this, _, "f").stderr.destroy(), xe(this, _, "f").stdin.destroy();
      try {
        process.kill(-xe(this, _, "f").pid, "SIGKILL");
      } catch {
        xe(this, _, "f").kill("SIGKILL");
      }
      xe(this, _, "f").unref();
    }
  }
  return _ = new WeakMap(), S = new WeakMap(), K = new WeakMap(), A = new WeakMap(), b = new WeakMap(), le = new WeakSet(), Me = function (t) {
    if (nr(this, S, xe(this, S, "f") + t, "f"), xe(this, S, "f").length > Ze) nr(this, S, xe(this, S, "f").slice(xe(this, S, "f").length - Ze), "f"), nr(this, K, !0, "f");
    if (xe(this, b, "f") && xe(this, S, "f").indexOf(xe(this, b, "f").sentinel) >= 0) {
      let n = xe(this, b, "f");
      nr(this, b, null, "f"), n.resolve();
    }
  }, r;
})();
function Jt(r) {
  F(r.unrestrictedPaths);
  let e,
    t = Promise.resolve();
  return R({
    name: "bash",
    description: "Run a bash command in a persistent shell. State (cwd, env vars) persists across calls.",
    inputSchema: {
      type: "object",
      properties: {
        command: {
          type: "string",
          description: "The command to run"
        },
        restart: {
          type: "boolean",
          description: "Restart the persistent shell before running"
        },
        timeout_ms: {
          type: "integer",
          description: "Per-call timeout in milliseconds"
        }
      }
    },
    run: async ({
      command: command,
      restart: restart,
      timeout_ms: timeout_ms
    }, s) => {
      let a = t,
        l = Q0n();
      t = l.promise;
      try {
        await a;
      } catch {}
      try {
        if (restart) e?.close(), e = void 0;
        if (!command) {
          if (restart) return "bash session restarted";
          throw new _y("bash: command is required");
        }
        e ?? (e = new Xt(r.workdir, r.env));
        try {
          let {
            output: output_2,
            exitCode: exitCode_2
          } = await e.exec(command, {
            timeoutMs: timeout_ms ?? nt,
            signal: s?.signal
          });
          if (exitCode_2 !== 0) throw new _y(output_2 || `exit ${exitCode_2}`);
          return output_2;
        } catch (error) {
          if (error instanceof _y) throw error;
          throw e.close(), e = void 0, new _y(`bash: ${error instanceof Error ? error.message : String(error)}`);
        }
      } finally {
        l.resolve();
      }
    },
    close: () => {
      e?.close(), e = void 0;
    }
  });
}
function Zt(r) {
  return F(r.unrestrictedPaths), R({
    name: "read",
    description: "Read a UTF-8 text file relative to the workdir.",
    inputSchema: {
      type: "object",
      properties: {
        file_path: {
          type: "string"
        },
        view_range: {
          type: "array",
          items: {
            type: "integer"
          },
          description: "[start_line, end_line] 1-indexed inclusive"
        }
      },
      required: ["file_path"]
    },
    run: async ({
      file_path: file_path,
      view_range: view_range
    }) => {
      if (!file_path) throw new _y("read: file_path is required");
      let n = await Q(r, file_path);
      if (view_range?.length && view_range.length !== 2) throw new _y("read: view_range must be [start_line, end_line]");
      let i;
      try {
        let c = await w.stat(n);
        if (!c.isFile()) throw new _y(`read: ${file_path} is not a regular file`);
        let h = st(r.maxFileBytes);
        if (h !== null && c.size > h) {
          if (!view_range?.length) throw new _y(`read: ${file_path} is ${c.size} bytes, exceeds ${h}-byte limit. Use the view_range parameter to read specific line ranges, e.g. view_range: [1, 500].`);
          let [y, O] = view_range;
          return await Qt(n, file_path, y, O, h);
        }
        i = await w.readFile(n, "utf8");
      } catch (error) {
        if (error instanceof _y) throw error;
        throw new _y(`read: ${P(error, file_path)}`);
      }
      if (!view_range?.length) return i;
      let [o, s] = view_range,
        a = i.split(`
`),
        l = Math.max(0, o - 1),
        f = s > 0 ? s : a.length;
      return a.slice(l, f).join(`
`);
    }
  });
}
async function Qt(r, e, t, n, i) {
  let o = new ct(e, t, n, i);
  if (o.rangeIsEmpty()) return "";
  let s = Z.createReadStream(r, {
    highWaterMark: highWaterMark
  });
  try {
    for await (let a of s) if (o.collectFrom(a), o.rangeIsCollected()) break;
  } finally {
    s.destroy();
  }
  return o.text();
}
class ct {
  constructor(r, e, t, n) {
    fe.add(this), V.set(this, void 0), de.set(this, void 0), he.set(this, void 0), D.set(this, void 0), C.set(this, void 0), Y.set(this, void 0), x.set(this, 0), X.set(this, []), N.set(this, 0), nr(this, V, r, "f"), nr(this, de, e, "f"), nr(this, he, t, "f"), nr(this, D, Math.max(0, e - 1), "f"), nr(this, C, t > 0 ? t : 1 / 0, "f"), nr(this, Y, n, "f");
  }
  rangeIsEmpty() {
    return xe(this, C, "f") <= xe(this, D, "f");
  }
  rangeIsCollected() {
    return xe(this, x, "f") >= xe(this, C, "f");
  }
  collectFrom(r) {
    var e;
    let t = 0;
    while (t < r.length && !this.rangeIsCollected()) {
      let n = r.indexOf(10, t),
        i = n < 0 ? r.length : n;
      if (xe(this, x, "f") >= xe(this, D, "f")) xe(this, fe, "m", tt).call(this, r.subarray(t, i), n >= 0);
      if (n < 0) break;
      nr(this, x, (e = xe(this, x, "f"), e++, e), "f"), t = n + 1;
    }
  }
  text() {
    return Buffer.concat(xe(this, X, "f"), xe(this, N, "f")).toString("utf8");
  }
}
V = new WeakMap(), de = new WeakMap(), he = new WeakMap(), D = new WeakMap(), C = new WeakMap(), Y = new WeakMap(), x = new WeakMap(), X = new WeakMap(), N = new WeakMap(), fe = new WeakSet(), tt = function (e, t) {
  if (xe(this, X, "f").push(e), nr(this, N, xe(this, N, "f") + e.length, "f"), t && xe(this, x, "f") + 1 < xe(this, C, "f")) xe(this, X, "f").push(Qe), nr(this, N, xe(this, N, "f") + Qe.length, "f");
  if (xe(this, N, "f") > xe(this, Y, "f")) throw xe(this, fe, "m", Je).call(this);
}, Je = function () {
  if (xe(this, C, "f") - xe(this, D, "f") === 1) return new _y(`read: line ${xe(this, D, "f") + 1} of ${xe(this, V, "f")} alone exceeds ${xe(this, Y, "f")}-byte limit. The read tool cannot return part of a line, so view_range cannot narrow this further.`);
  return new _y(`read: view_range [${xe(this, de, "f")}, ${xe(this, he, "f")}] of ${xe(this, V, "f")} exceeds ${xe(this, Y, "f")}-byte limit. Narrow the view_range to read a smaller portion.`);
};
function er(r) {
  return F(r.unrestrictedPaths), R({
    name: "write",
    description: "Write a UTF-8 text file relative to the workdir, creating parent directories as needed.",
    inputSchema: {
      type: "object",
      properties: {
        file_path: {
          type: "string"
        },
        content: {
          type: "string"
        }
      },
      required: ["file_path", "content"]
    },
    run: async ({
      file_path: file_path_2,
      content: content_2
    }) => {
      if (!file_path_2) throw new _y("write: file_path is required");
      let n = await Q(r, file_path_2),
        i = await at(r, n);
      if (i !== void 0) throw new _y(`write: ${file_path_2} is inside read-only directory ${i}`);
      try {
        await w.mkdir(g.dirname(n), {
          recursive: !0,
          mode: mode
        }), await pe(n, content_2 ?? "");
      } catch (error) {
        throw new _y(`write: ${P(error, file_path_2)}`);
      }
      return `wrote ${Buffer.byteLength(content_2 ?? "")} bytes to ${file_path_2}`;
    }
  });
}
function tr(r) {
  return F(r.unrestrictedPaths), R({
    name: "edit",
    description: "Replace old_string with new_string in a file. old_string must be unique unless replace_all.",
    inputSchema: {
      type: "object",
      properties: {
        file_path: {
          type: "string"
        },
        old_string: {
          type: "string"
        },
        new_string: {
          type: "string"
        },
        replace_all: {
          type: "boolean"
        }
      },
      required: ["file_path", "old_string", "new_string"]
    },
    run: async ({
      file_path: file_path_3,
      old_string: old_string,
      new_string: new_string,
      replace_all: replace_all
    }) => {
      if (!file_path_3) throw new _y("edit: file_path is required");
      if (!old_string) throw new _y("edit: old_string is required");
      let o = await Q(r, file_path_3),
        s = await at(r, o);
      if (s !== void 0) throw new _y(`edit: ${file_path_3} is inside read-only directory ${s}`);
      let a;
      try {
        let c = await w.stat(o);
        if (!c.isFile()) throw new _y(`edit: ${file_path_3} is not a regular file`);
        let h = st(r.maxFileBytes);
        if (h !== null && c.size > h) throw new _y(`edit: ${file_path_3} is ${c.size} bytes, exceeds ${h}-byte limit. The edit tool loads the whole file and cannot modify a file this large.`);
        a = await w.readFile(o, "utf8");
      } catch (error) {
        if (error instanceof _y) throw error;
        throw new _y(`edit: ${P(error, file_path_3)}`);
      }
      let l = a.split(old_string).length - 1;
      if (l === 0) throw new _y(`edit: old_string not found in ${file_path_3}`);
      let f;
      if (replace_all) f = a.split(old_string).join(new_string);else {
        if (l > 1) throw new _y(`edit: old_string appears ${l} times in ${file_path_3} (must be unique)`);
        f = a.replace(old_string, () => new_string);
      }
      try {
        await pe(o, f);
      } catch (error) {
        throw new _y(`edit: write: ${P(error, file_path_3)}`);
      }
      return `edited ${file_path_3} (${replace_all ? l : 1} replacement(s))`;
    }
  });
}
function rr(r) {
  return r.split(/[\\/{},]/).includes("..");
}
function ir(r) {
  return F(r.unrestrictedPaths), R({
    name: "glob",
    description: "Match files under the workdir against a glob pattern. Results are mtime-sorted, newest first.",
    inputSchema: {
      type: "object",
      properties: {
        pattern: {
          type: "string"
        },
        path: {
          type: "string",
          description: "Directory to search in. Defaults to the workdir."
        }
      },
      required: ["pattern"]
    },
    run: async ({
      pattern: pattern,
      path: path_9
    }) => {
      if (!pattern) throw new _y("glob: pattern is required");
      if (g.isAbsolute(pattern)) throw new _y("glob: absolute pattern not permitted; pass a relative pattern (and optionally path)");
      if (rr(pattern)) throw new _y('glob: ".." is not permitted in the pattern');
      let cwd_2 = path_9 ? await Q(r, path_9) : g.resolve(r.workdir),
        i = path_9 ? cwd_2 : await q(cwd_2),
        o = [],
        s = lt;
      try {
        for await (let a of glob(pattern, {
          cwd: cwd_2,
          withFileTypes: !0,
          exclude: l => l.name === ".git" || l.name === "node_modules"
        })) {
          if (s-- <= 0) break;
          if (!a.isFile()) continue;
          let path_10 = g.join(a.parentPath, a.name),
            f;
          try {
            f = await w.realpath(path_10);
          } catch {
            continue;
          }
          if (!te(i, f)) continue;
          let mtime = 0;
          try {
            mtime = (await w.stat(path_10)).mtimeMs;
          } catch {}
          o.push({
            path: path_10,
            mtime: mtime
          });
        }
      } catch (error) {
        throw new _y(`glob: ${error instanceof Error ? error.message : String(error)}`);
      }
      if (o.length === 0) return "no matches";
      return o.sort((itemA, itemB) => itemB.mtime - itemA.mtime), o.slice(0, Gt).map(item => item.path).join(`
`);
    }
  });
}
function or(r) {
  return F(r.unrestrictedPaths), R({
    name: "grep",
    description: "Search file contents for a regex. Uses ripgrep if available, otherwise a built-in walker.",
    inputSchema: {
      type: "object",
      properties: {
        pattern: {
          type: "string"
        },
        path: {
          type: "string"
        }
      },
      required: ["pattern"]
    },
    run: async ({
      pattern: pattern_2,
      path: path_11
    }, n) => {
      if (!pattern_2) throw new _y("grep: pattern is required");
      let i = g.resolve(r.workdir);
      if (path_11) i = await Q(r, path_11);
      let o = await fr();
      return o ? sr(o, pattern_2, i, n?.signal) : ar(pattern_2, i, n?.signal);
    }
  });
}
function sr(r, e, t, signal) {
  return new Promise((i, o) => {
    let s = ve.spawn(r, ["-n", "--no-heading", "-e", e, "--", t], {
        ...(signal ? {
          signal: signal
        } : {})
      }),
      a = "",
      l = "",
      f = !1;
    s.stdout.on("data", c => {
      if (f) return;
      if (a += c, a.length > J) f = !0, a = a.slice(0, J), s.kill("SIGKILL");
    }), s.stderr.on("data", c => l += c), s.on("close", c => {
      if (signal?.aborted) return o(new _y("grep: aborted"));
      if (f) return i(a + `
[output truncated at ${J} bytes]`);
      if (c === 0) return i(a);
      if (c === 1) return i("no matches");
      o(new _y(`grep: rg failed: ${l || `exit ${c}`}`));
    }), s.on("error", c => {
      if (signal?.aborted) return o(new _y("grep: aborted"));
      o(new _y(`grep: rg failed: ${c.message}`));
    });
  });
}
async function ar(r, e, t) {
  let n;
  try {
    n = new RegExp(r);
  } catch (error) {
    throw new _y(`grep: invalid regex: ${error instanceof Error ? error.message : String(error)}`);
  }
  let i = [],
    o = J,
    s = l => {
      if (o -= l.length + 1, o < 0) return i.push(`[output truncated at ${J} bytes]`), !1;
      return i.push(l), !0;
    };
  if ((await w.stat(e).catch(() => null))?.isFile()) await et(e, n, s);else await lr(e, "", l => et(g.join(e, l), n, s), t);
  if (t?.aborted) throw new _y("grep: aborted");
  if (i.length === 0) return "no matches";
  return i.join(`
`);
}
async function et(r, e, t) {
  let input = Z.createReadStream(r, {
      encoding: "utf8"
    }),
    i = it.createInterface({
      input: input,
      crlfDelay: 1 / 0
    }),
    o = 0;
  try {
    for await (let s of i) {
      if (o++, s.length > zt) continue;
      if (e.test(s) && !t(`${r}:${o}:${s}`)) return !1;
    }
  } catch {} finally {
    input.destroy();
  }
  return !0;
}
var cr = 40,
  lt = 50000;
async function lr(r, e, t, n) {
  let i = lt;
  async function o(s, a) {
    if (a > cr) return !0;
    if (n?.aborted) return !1;
    let l;
    try {
      l = await w.readdir(g.join(r, s), {
        withFileTypes: !0
      });
    } catch {
      return !0;
    }
    for (let f of l) {
      if (f.name === ".git" || f.name === "node_modules") continue;
      if (i-- <= 0) return !1;
      if (n?.aborted) return !1;
      let c = s ? g.join(s, f.name) : f.name;
      if (f.isDirectory()) {
        if (!(await o(c, a + 1))) return !1;
      } else if (f.isFile()) {
        if ((await t(c)) === !1) return !1;
      }
    }
    return !0;
  }
  await o(e, 0);
}
async function fr() {
  let r = (process.env.PATH ?? "").split(g.delimiter);
  for (let e of r) {
    let t = g.join(e, "rg");
    try {
      return await w.access(t, Z.constants.X_OK), t;
    } catch {}
  }
  return null;
}
export { xt as MEMORY_FLUSH_TIMEOUT_MS, SessionMemoryError_2 as SessionMemoryError, Xe as SessionMemoryStores, Ur as betaAgentToolset20260401, ut as setupSkills };