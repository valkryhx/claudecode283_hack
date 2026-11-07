// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { stat as Ut } from "fs";
import { stat as Gt, readdir as Kt } from "fs/promises";
import { EventEmitter as Vt } from "events";
import * as d from "path";
import { stat as _t, lstat as G, readdir as wt, realpath as pt } from "fs/promises";
import { Readable as yt } from "stream";
import { resolve as K, relative as Et, join as Pt, sep as gt } from "path";
var p = {
    FILE_TYPE: "files",
    DIR_TYPE: "directories",
    FILE_DIR_TYPE: "files_directories",
    EVERYTHING_TYPE: "all"
  },
  L = {
    root: ".",
    fileFilter: t => !0,
    directoryFilter: t => !0,
    type: p.FILE_TYPE,
    lstat: !1,
    depth: 2147483648,
    alwaysStat: !1,
    highWaterMark: 4096
  };
Object.freeze(L);
var J = "READDIRP_RECURSIVE_ERROR",
  Rt = new Set(["ENOENT", "EPERM", "EACCES", "ELOOP", J]),
  V = [p.DIR_TYPE, p.EVERYTHING_TYPE, p.FILE_DIR_TYPE, p.FILE_TYPE],
  Dt = new Set([p.DIR_TYPE, p.EVERYTHING_TYPE, p.FILE_DIR_TYPE]),
  bt = new Set([p.EVERYTHING_TYPE, p.FILE_DIR_TYPE, p.FILE_TYPE]),
  It = t => Rt.has(t.code),
  Tt = !0,
  B = t => !0,
  q = t => {
    if (t === void 0) return B;
    if (typeof t === "function") return t;
    if (typeof t === "string") {
      let e = t.trim();
      return i => i.basename === e;
    }
    if (Array.isArray(t)) {
      let e = t.map(item => item.trim());
      return i => e.some(item => i.basename === item);
    }
    return B;
  };
class Q extends yt {
  constructor(t = {}) {
    super({
      objectMode: !0,
      autoDestroy: !0,
      highWaterMark: t.highWaterMark
    });
    let e = {
        ...L,
        ...t
      },
      {
        root: root,
        type: type
      } = e;
    this._fileFilter = q(e.fileFilter), this._directoryFilter = q(e.directoryFilter);
    let r = e.lstat ? G : _t;
    if (Tt) this._stat = a => r(a, {
      bigint: !0
    });else this._stat = r;
    this._maxDepth = e.depth ?? L.depth, this._wantsDir = type ? Dt.has(type) : !1, this._wantsFile = type ? bt.has(type) : !1, this._wantsEverything = type === p.EVERYTHING_TYPE, this._root = K(root), this._isDirent = !e.alwaysStat, this._statsProp = this._isDirent ? "dirent" : "stats", this._rdOptions = {
      encoding: "utf8",
      withFileTypes: this._isDirent
    }, this.parents = [this._exploreDir(root, 1)], this.reading = !1, this.parent = void 0;
  }
  async _read(t) {
    if (this.reading) return;
    this.reading = !0;
    try {
      while (!this.destroyed && t > 0) {
        let parent = this.parent,
          i = parent && parent.files;
        if (i && i.length > 0) {
          let {
              path: path,
              depth: depth
            } = parent,
            a = i.splice(0, t).map(item => this._formatEntry(item, path)),
            o = await Promise.all(a);
          for (let n of o) {
            if (!n) continue;
            if (this.destroyed) return;
            let l = await this._getEntryType(n);
            if (l === "directory" && this._directoryFilter(n)) {
              if (depth <= this._maxDepth) this.parents.push(this._exploreDir(n.fullPath, depth + 1));
              if (this._wantsDir) this.push(n), t--;
            } else if ((l === "file" || this._includeAsFile(n)) && this._fileFilter(n)) {
              if (this._wantsFile) this.push(n), t--;
            }
          }
        } else {
          let s = this.parents.pop();
          if (!s) {
            this.push(null);
            break;
          }
          if (this.parent = await s, this.destroyed) return;
        }
      }
    } catch (error) {
      this.destroy(error);
    } finally {
      this.reading = !1;
    }
  }
  async _exploreDir(path_2, depth_2) {
    let files;
    try {
      files = await wt(path_2, this._rdOptions);
    } catch (error) {
      this._onError(error);
    }
    return {
      files: files,
      depth: depth_2,
      path: path_2
    };
  }
  async _formatEntry(t, e) {
    let i,
      basename = this._isDirent ? t.name : t;
    try {
      let fullPath = K(Pt(e, basename));
      i = {
        path: Et(this._root, fullPath),
        fullPath: fullPath,
        basename: basename
      }, i[this._statsProp] = this._isDirent ? t : await this._stat(fullPath);
    } catch (error) {
      this._onError(error);
      return;
    }
    return i;
  }
  _onError(t) {
    if (It(t) && !this.destroyed) this.emit("warn", t);else this.destroy(t);
  }
  async _getEntryType(t) {
    if (!t && this._statsProp in t) return "";
    let e = t[this._statsProp];
    if (!e) return "";
    if (e.isFile()) return "file";
    if (e.isDirectory()) return "directory";
    if (e && e.isSymbolicLink()) {
      let fullPath_2 = t.fullPath;
      try {
        let s = await pt(fullPath_2),
          r = await G(s);
        if (r.isFile()) return "file";
        if (r.isDirectory()) {
          let a = s.length;
          if (fullPath_2.startsWith(s) && fullPath_2.substr(a, 1) === gt) {
            let o = Error(`Circular symlink detected: "${fullPath_2}" points to "${s}"`);
            return o.code = J, this._onError(o);
          }
          return "directory";
        }
      } catch (error) {
        return this._onError(error), "";
      }
    }
  }
  _includeAsFile(t) {
    let e = t && t[this._statsProp];
    return e && this._wantsEverything && !e.isDirectory();
  }
}
function X(t, e = {}) {
  let i = e.entryType || e.type;
  if (i === "both") i = p.FILE_DIR_TYPE;
  if (i) e.type = i;
  if (!t) throw Error("readdirp: root argument is required. Usage: readdirp(root, options)");else if (typeof t !== "string") throw TypeError("readdirp: root argument must be a string. Usage: readdirp(root, options)");else if (i && !V.includes(i)) throw Error(`readdirp: Invalid type passed. Use one of ${V.join(", ")}`);
  return e.root = t, new Q(e);
}
import { watchFile as et, unwatchFile as C, watch as xt } from "fs";
import { open as Z, stat, lstat, realpath as k } from "fs/promises";
import * as _ from "path";
import { type as St } from "os";
var Ft = "data",
  z = "end",
  st = "close",
  I = () => {};
var W = "win32",
  F = W === "win32",
  At = W === "darwin",
  Wt = W === "linux",
  Nt = W === "freebsd",
  it = St() === "OS400",
  m = {
    ALL: "all",
    READY: "ready",
    ADD: "add",
    CHANGE: "change",
    ADD_DIR: "addDir",
    UNLINK: "unlink",
    UNLINK_DIR: "unlinkDir",
    RAW: "raw",
    ERROR: "error"
  },
  y = m,
  Lt = "watch",
  kt = {
    lstat: lstat,
    stat: stat
  },
  P = "listeners",
  T = "errHandlers",
  g = "rawEmitters",
  Ct = [P, T, g],
  Ot = new Set(["3dm", "3ds", "3g2", "3gp", "7z", "a", "aac", "adp", "afdesign", "afphoto", "afpub", "ai", "aif", "aiff", "alz", "ape", "apk", "appimage", "ar", "arj", "asf", "au", "avi", "bak", "baml", "bh", "bin", "bk", "bmp", "btif", "bz2", "bzip2", "cab", "caf", "cgm", "class", "cmx", "cpio", "cr2", "cur", "dat", "dcm", "deb", "dex", "djvu", "dll", "dmg", "dng", "doc", "docm", "docx", "dot", "dotm", "dra", "DS_Store", "dsk", "dts", "dtshd", "dvb", "dwg", "dxf", "ecelp4800", "ecelp7470", "ecelp9600", "egg", "eol", "eot", "epub", "exe", "f4v", "fbs", "fh", "fla", "flac", "flatpak", "fli", "flv", "fpx", "fst", "fvt", "g3", "gh", "gif", "graffle", "gz", "gzip", "h261", "h263", "h264", "icns", "ico", "ief", "img", "ipa", "iso", "jar", "jpeg", "jpg", "jpgv", "jpm", "jxr", "key", "ktx", "lha", "lib", "lvp", "lz", "lzh", "lzma", "lzo", "m3u", "m4a", "m4v", "mar", "mdi", "mht", "mid", "midi", "mj2", "mka", "mkv", "mmr", "mng", "mobi", "mov", "movie", "mp3", "mp4", "mp4a", "mpeg", "mpg", "mpga", "mxu", "nef", "npx", "numbers", "nupkg", "o", "odp", "ods", "odt", "oga", "ogg", "ogv", "otf", "ott", "pages", "pbm", "pcx", "pdb", "pdf", "pea", "pgm", "pic", "png", "pnm", "pot", "potm", "potx", "ppa", "ppam", "ppm", "pps", "ppsm", "ppsx", "ppt", "pptm", "pptx", "psd", "pya", "pyc", "pyo", "pyv", "qt", "rar", "ras", "raw", "resources", "rgb", "rip", "rlc", "rmf", "rmvb", "rpm", "rtf", "rz", "s3m", "s7z", "scpt", "sgi", "shar", "snap", "sil", "sketch", "slk", "smv", "snk", "so", "stl", "suo", "sub", "swf", "tar", "tbz", "tbz2", "tga", "tgz", "thmx", "tif", "tiff", "tlz", "ttc", "ttf", "txz", "udf", "uvh", "uvi", "uvm", "uvp", "uvs", "uvu", "viv", "vob", "war", "wav", "wax", "wbmp", "wdp", "weba", "webm", "webp", "whl", "wim", "wm", "wma", "wmv", "wmx", "woff", "woff2", "wrm", "wvx", "xbm", "xif", "xla", "xlam", "xls", "xlsb", "xlsm", "xlsx", "xlt", "xltm", "xltx", "xm", "xmind", "xpi", "xpm", "xwd", "xz", "z", "zip", "zipx"]),
  Mt = t => Ot.has(_.extname(t).slice(1).toLowerCase()),
  O = (t, e) => {
    if (t instanceof Set) t.forEach(e);else e(t);
  },
  D = (t, e, i) => {
    let s = t[e];
    if (!(s instanceof Set)) t[e] = s = new Set([s]);
    s.add(i);
  },
  zt = t => e => {
    let i = t[e];
    if (i instanceof Set) i.clear();else delete t[e];
  },
  b = (t, e, i) => {
    let s = t[e];
    if (s instanceof Set) s.delete(i);else if (s === i) delete t[e];
  },
  rt = t => t instanceof Set ? t.size === 0 : !t,
  x = new Map();
function tt(watchedPath, e, i, s, r) {
  let a = (o, n) => {
    if (i(watchedPath), r(o, n, {
      watchedPath: watchedPath
    }), n && watchedPath !== n) v(_.resolve(watchedPath, n), P, _.join(watchedPath, n));
  };
  try {
    return xt(watchedPath, {
      persistent: e.persistent
    }, a);
  } catch (error) {
    s(error);
    return;
  }
}
var v = (t, e, i, s, r) => {
    let a = x.get(t);
    if (!a) return;
    O(a[e], o => {
      o(i, s, r);
    });
  },
  Ht = (t, e, i, s) => {
    let {
        listener: r,
        errHandler: a,
        rawEmitter: o
      } = s,
      n = x.get(e),
      watcher;
    if (!i.persistent) {
      if (watcher = tt(t, i, r, a, o), !watcher) return;
      return watcher.on(y.ERROR, async h => {
        if (F && h.code === "EPERM") try {
          await (await Z(t, "r")).close(), a(h);
        } catch (error) {} else a(h);
      }), watcher.close.bind(watcher);
    }
    if (n) D(n, P, r), D(n, T, a), D(n, g, o);else {
      if (watcher = tt(t, i, v.bind(null, e, P), a, v.bind(null, e, g)), !watcher) return;
      watcher.on(y.ERROR, async h => {
        let f = v.bind(null, e, T);
        if (n) n.watcherUnusable = !0;
        if (F && h.code === "EPERM") try {
          await (await Z(t, "r")).close(), f(h);
        } catch (error) {} else f(h);
      }), n = {
        listeners: r,
        errHandlers: a,
        rawEmitters: o,
        watcher: watcher
      }, x.set(e, n);
    }
    return () => {
      if (b(n, P, r), b(n, T, a), b(n, g, o), rt(n.listeners) && n.watcher) n.watcher.close(), x.delete(e), Ct.forEach(zt(n)), n.watcher = void 0, Object.freeze(n);
    };
  },
  S = new Map(),
  jt = (t, e, options, s) => {
    let {
        listener: r,
        rawEmitter: a,
        folderStamp: folderStamp
      } = s,
      n = S.get(e),
      l = n && n.options;
    if (l && (l.persistent < options.persistent || l.interval > options.interval)) C(e), n = void 0;
    if (n) D(n, P, r), D(n, g, a);else {
      let notify = c => O(n.listeners, u => u(t, c)),
        onPoll = (curr, prev) => {
          O(n.rawEmitters, E => {
            E(y.CHANGE, e, {
              curr: curr,
              prev: prev
            });
          });
          let mtimeMs = curr.mtimeMs;
          if (curr.size !== prev.size || mtimeMs > prev.mtimeMs || mtimeMs === 0) {
            if (n.watcher && n.folderStamp !== void 0) n.folderStamp = A(curr);
            notify(curr);
          }
        };
      n = {
        listeners: r,
        rawEmitters: a,
        options: options,
        onPoll: onPoll,
        notify: notify,
        folderStamp: folderStamp,
        watcher: et(e, options, onPoll)
      }, S.set(e, n);
    }
    return () => {
      if (b(n, P, r), b(n, g, a), rt(n.listeners) && n.watcher) S.delete(e), C(e), n.options = n.watcher = void 0, Object.freeze(n);
    };
  },
  nt = (t, interval) => {
    for (let [i, s] of S) {
      let rawEmitters = s.rawEmitters,
        a = rawEmitters instanceof Set && rawEmitters.size > 1;
      if (!(rawEmitters instanceof Set ? rawEmitters.has(t) : rawEmitters === t) || s.options.interval === interval || a && interval > s.options.interval) continue;
      if (C(i, s.onPoll), s.options = {
        ...s.options,
        interval: interval
      }, s.watcher = et(i, s.options, s.onPoll), s.folderStamp !== void 0) Yt(i, s).catch(I);
    }
  },
  A = t => `${t.mtimeMs}:${t.ctimeMs}`,
  Yt = async (t, e) => {
    let i;
    try {
      i = await stat(t);
    } catch (error) {
      return;
    }
    if (e.watcher && A(i) !== e.folderStamp) e.folderStamp = A(i), e.notify(i);
  };
class H {
  constructor(t) {
    this.fsw = t, this._boundHandleError = e => t._handleError(e);
  }
  _watchWithNodeFs(t, listener, folderStamp_2) {
    let options_2 = this.fsw.options,
      r = _.dirname(t),
      a = _.basename(t);
    this.fsw._getWatchedDir(r).add(a);
    let n = _.resolve(t),
      l = {
        persistent: options_2.persistent
      };
    if (!listener) listener = I;
    let h;
    if (options_2.usePolling) {
      let f = options_2.interval !== options_2.binaryInterval;
      l.interval = f && Mt(a) ? options_2.binaryInterval : options_2.interval, h = jt(t, n, l, {
        listener: listener,
        rawEmitter: this.fsw._emitRaw,
        folderStamp: folderStamp_2
      });
    } else h = Ht(t, n, l, {
      listener: listener,
      errHandler: this._boundHandleError,
      rawEmitter: this.fsw._emitRaw
    });
    return h;
  }
  _handleFile(t, e, i) {
    if (this.fsw.closed) return;
    let s = _.dirname(t),
      r = _.basename(t),
      a = this.fsw._getWatchedDir(s),
      o = e;
    if (a.has(r)) return;
    let n = async (h, f) => {
        if (!this.fsw._throttle(Lt, t, 5)) return;
        if (!f || f.mtimeMs === 0) try {
          let c = await stat(t);
          if (this.fsw.closed) return;
          let {
            atimeMs: atimeMs,
            mtimeMs: mtimeMs_2
          } = c;
          if (!atimeMs || atimeMs <= mtimeMs_2 || mtimeMs_2 !== o.mtimeMs) this.fsw._emit(y.CHANGE, t, c);
          if ((At || Wt || Nt) && o.ino !== c.ino) {
            this.fsw._closeFile(t), o = c;
            let E = this._watchWithNodeFs(t, n);
            if (E) this.fsw._addPathCloser(t, E);
          } else o = c;
        } catch (error) {
          this.fsw._remove(s, r);
        } else if (a.has(r)) {
          let {
            atimeMs: atimeMs_2,
            mtimeMs: mtimeMs_3
          } = f;
          if (!atimeMs_2 || atimeMs_2 <= mtimeMs_3 || mtimeMs_3 !== o.mtimeMs) this.fsw._emit(y.CHANGE, t, f);
          o = f;
        }
      },
      l = this._watchWithNodeFs(t, n);
    if (!(i && this.fsw.options.ignoreInitial) && this.fsw._isntIgnored(t)) {
      if (!this.fsw._throttle(y.ADD, t, 0)) return;
      this.fsw._emit(y.ADD, t, e);
    }
    return l;
  }
  async _handleSymlink(t, e, i, s) {
    if (this.fsw.closed) return;
    let fullPath_3 = t.fullPath,
      a = this.fsw._getWatchedDir(e);
    if (!this.fsw.options.followSymlinks) {
      this.fsw._incrReadyCount();
      let o;
      try {
        o = await k(i);
      } catch (error) {
        return this.fsw._emitReady(), !0;
      }
      if (this.fsw.closed) return;
      if (a.has(s)) {
        if (this.fsw._symlinkPaths.get(fullPath_3) !== o) this.fsw._symlinkPaths.set(fullPath_3, o), this.fsw._emit(y.CHANGE, i, t.stats);
      } else a.add(s), this.fsw._symlinkPaths.set(fullPath_3, o), this.fsw._emit(y.ADD, i, t.stats);
      return this.fsw._emitReady(), !0;
    }
    if (this.fsw._symlinkPaths.has(fullPath_3)) return !0;
    this.fsw._symlinkPaths.set(fullPath_3, !0);
  }
  _handleRead(t, e, i, s, r, a, o) {
    if (t = _.join(t, ""), o = this.fsw._throttle("readdir", t, 1000), !o) return;
    let n = this.fsw._getWatchedDir(i.path),
      l = new Set(),
      h = this.fsw._readdirp(t, {
        fileFilter: f => i.filterPath(f),
        directoryFilter: f => i.filterDir(f)
      });
    if (!h) return;
    return h.on(Ft, async f => {
      if (this.fsw.closed) {
        h = void 0;
        return;
      }
      let c = f.path,
        u = _.join(t, c);
      if (l.add(c), f.stats.isSymbolicLink() && (await this._handleSymlink(f, t, u, c))) return;
      if (this.fsw.closed) {
        h = void 0;
        return;
      }
      if (c === s || !s && !n.has(c)) this.fsw._incrReadyCount(), u = _.join(r, _.relative(r, u)), this._addToNodeFs(u, e, i, a + 1);
    }).on(y.ERROR, this._boundHandleError), new Promise((f, c) => {
      if (!h) return c();
      h.once(z, () => {
        if (this.fsw.closed) {
          h = void 0;
          return;
        }
        let u = o ? o.clear() : !1;
        if (f(void 0), n.getChildren().filter(item => item !== t && !l.has(item)).forEach(item => {
          this.fsw._remove(t, item);
        }), h = void 0, u) this._handleRead(t, !1, i, s, r, a, o);
      });
    });
  }
  async _handleDir(t, e, i, s, r, a, o) {
    let n = this.fsw._getWatchedDir(_.dirname(t)),
      l = n.has(_.basename(t));
    if (!(i && this.fsw.options.ignoreInitial) && !r && !l) this.fsw._emit(y.ADD_DIR, t, e);
    n.add(_.basename(t)), this.fsw._getWatchedDir(t);
    let h,
      f,
      depth_3 = this.fsw.options.depth;
    if ((depth_3 == null || s <= depth_3) && !this.fsw._symlinkPaths.has(o)) {
      if (!r) {
        if (await this._handleRead(t, i, a, r, t, s, h), this.fsw.closed) return;
      }
      f = this._watchWithNodeFs(t, (u, w) => {
        if (w && w.mtimeMs === 0) return;
        this._handleRead(u, !1, a, r, t, s, h);
      }, e ? A(e) : null);
    }
    return f;
  }
  async _addToNodeFs(t, e, i, s, r) {
    let _emitReady = this.fsw._emitReady;
    if (this.fsw._isIgnored(t) || this.fsw.closed) return _emitReady(), !1;
    let o = this.fsw._getWatchHelpers(t);
    if (i) o.filterPath = n => i.filterPath(n), o.filterDir = n => i.filterDir(n);
    try {
      let n = await kt[o.statMethod](o.watchPath);
      if (this.fsw.closed) return;
      if (this.fsw._isIgnored(o.watchPath, n)) return _emitReady(), !1;
      let followSymlinks = this.fsw.options.followSymlinks,
        h;
      if (n.isDirectory()) {
        let f = _.resolve(t),
          c = followSymlinks ? await k(t) : t;
        if (this.fsw.closed) return;
        if (h = await this._handleDir(o.watchPath, n, e, s, r, o, c), this.fsw.closed) return;
        if (f !== c && c !== void 0) this.fsw._symlinkPaths.set(f, c);
      } else if (n.isSymbolicLink()) {
        let f = followSymlinks ? await k(t) : t;
        if (this.fsw.closed) return;
        let c = _.dirname(o.watchPath);
        if (this.fsw._getWatchedDir(c).add(o.watchPath), this.fsw._emit(y.ADD, o.watchPath, n), h = await this._handleDir(c, n, e, s, t, o, f), this.fsw.closed) return;
        if (f !== void 0) this.fsw._symlinkPaths.set(_.resolve(t), f);
      } else h = this._handleFile(o.watchPath, n, e);
      if (_emitReady(), h) this.fsw._addPathCloser(t, h);
      return !1;
    } catch (error) {
      if (this.fsw._handleError(error)) return _emitReady(), t;
    }
  }
} /*! chokidar - MIT License (c) 2012 Paul Miller (paulmillr.com) */
var j = "/",
  Bt = "//",
  ft = ".",
  $t = "..",
  qt = "string",
  Jt = /\\/g,
  ot = /\/\//,
  Qt = /\..*\.(sw[px])$|~$|\.subl.*\.tmp/,
  Xt = /^\.[/\\]/;
function N(t) {
  return Array.isArray(t) ? t : [t];
}
var Y = t => typeof t === "object" && t !== null && !(t instanceof RegExp);
function Zt(t) {
  if (typeof t === "function") return t;
  if (typeof t === "string") return e => t === e;
  if (t instanceof RegExp) return e => t.test(e);
  if (typeof t === "object" && t !== null) return e => {
    if (t.path === e) return !0;
    if (t.recursive) {
      let i = d.relative(t.path, e);
      if (!i) return !1;
      return !i.startsWith("..") && !d.isAbsolute(i);
    }
    return !1;
  };
  return () => !1;
}
function te(t) {
  if (typeof t !== "string") throw Error("string expected");
  t = d.normalize(t), t = t.replace(/\\/g, "/");
  let e = !1;
  if (t.startsWith("//")) e = !0;
  let i = /\/\//;
  while (t.match(i)) t = t.replace(i, "/");
  if (e) t = "/" + t;
  return t;
}
function at(t, e, i) {
  let s = te(e);
  for (let r = 0; r < t.length; r++) {
    let a = t[r];
    if (a(s, i)) return !0;
  }
  return !1;
}
function ee(t, e) {
  if (t == null) throw TypeError("anymatch: specify first argument");
  let s = N(t).map(item => Zt(item));
  if (e == null) return (r, a) => at(s, r, a);
  return at(s, e);
}
var ht = t => {
    let e = N(t).flat();
    if (!e.every(item => typeof item === qt)) throw TypeError(`Non-string provided as watch path: ${e}`);
    return e.map(dt);
  },
  ct = t => {
    let e = t.replace(Jt, j),
      i = !1;
    if (e.startsWith(Bt)) i = !0;
    while (e.match(ot)) e = e.replace(ot, j);
    if (i) e = j + e;
    return e;
  },
  dt = t => ct(d.normalize(ct(t))),
  lt = (t = "") => e => {
    if (typeof e === "string") return dt(d.isAbsolute(e) ? e : d.join(t, e));else return e;
  },
  se = (t, e) => {
    if (d.isAbsolute(t)) return t;
    return d.join(e, t);
  },
  ie = Object.freeze(new Set());
class ut {
  constructor(t, e) {
    this.path = t, this._removeWatcher = e, this.items = new Set();
  }
  add(t) {
    let {
      items: items
    } = this;
    if (!items) return;
    if (t !== ft && t !== $t) items.add(t);
  }
  async remove(t) {
    let {
      items: items_2
    } = this;
    if (!items_2) return;
    if (items_2.delete(t), items_2.size > 0) return;
    let i = this.path;
    try {
      await Kt(i);
    } catch (error) {
      if (this._removeWatcher) this._removeWatcher(d.dirname(i), d.basename(i));
    }
  }
  has(t) {
    let {
      items: items_3
    } = this;
    if (!items_3) return;
    return items_3.has(t);
  }
  getChildren() {
    let {
      items: items_4
    } = this;
    if (!items_4) return [];
    return [...items_4.values()];
  }
  dispose() {
    this.items.clear(), this.path = "", this._removeWatcher = I, this.items = ie, Object.freeze(this);
  }
}
var re = "stat",
  ne = "lstat";
class mt {
  constructor(t, e, i) {
    this.fsw = i;
    let s = t;
    this.path = t = t.replace(Xt, ""), this.watchPath = s, this.fullWatchPath = d.resolve(s), this.dirParts = [], this.dirParts.forEach(item => {
      if (item.length > 1) item.pop();
    }), this.followSymlinks = e, this.statMethod = e ? re : ne;
  }
  entryPath(t) {
    return d.join(this.watchPath, d.relative(this.watchPath, t.fullPath));
  }
  filterPath(t) {
    let {
      stats: stats
    } = t;
    if (stats && stats.isSymbolicLink()) return this.filterDir(t);
    let i = this.entryPath(t);
    return this.fsw._isntIgnored(i, stats) && this.fsw._hasReadPermissions(stats);
  }
  filterDir(t) {
    return this.fsw._isntIgnored(this.entryPath(t), t.stats);
  }
}
class FSWatcher extends Vt {
  constructor(t = {}) {
    super();
    this.closed = !1, this._closers = new Map(), this._ignoredPaths = new Set(), this._throttled = new Map(), this._streams = new Set(), this._symlinkPaths = new Map(), this._watched = new Map(), this._pendingWrites = new Map(), this._pendingUnlinks = new Map(), this._readyCount = 0, this._readyEmitted = !1;
    let awaitWriteFinish = t.awaitWriteFinish,
      i = {
        stabilityThreshold: 2000,
        pollInterval: 100
      },
      s = {
        persistent: !0,
        ignoreInitial: !1,
        ignorePermissionErrors: !1,
        interval: 100,
        binaryInterval: 300,
        followSymlinks: !0,
        usePolling: !1,
        atomic: !0,
        ...t,
        ignored: t.ignored ? N(t.ignored) : N([]),
        awaitWriteFinish: awaitWriteFinish === !0 ? i : typeof awaitWriteFinish === "object" ? {
          ...i,
          ...awaitWriteFinish
        } : !1
      };
    if (it) s.usePolling = !0;
    if (s.atomic === void 0) s.atomic = !s.usePolling;
    let CHOKIDAR_USEPOLLING = process.env.CHOKIDAR_USEPOLLING;
    if (CHOKIDAR_USEPOLLING !== void 0) {
      let n = CHOKIDAR_USEPOLLING.toLowerCase();
      if (n === "false" || n === "0") s.usePolling = !1;else if (n === "true" || n === "1") s.usePolling = !0;else s.usePolling = !!n;
    }
    let CHOKIDAR_INTERVAL = process.env.CHOKIDAR_INTERVAL;
    if (CHOKIDAR_INTERVAL) s.interval = Number.parseInt(CHOKIDAR_INTERVAL, 10);
    let o = 0;
    this._emitReady = () => {
      if (o++, o >= this._readyCount) this._emitReady = I, this._readyEmitted = !0, process.nextTick(() => this.emit(m.READY));
    }, this._emitRaw = (...n) => this.emit(m.RAW, ...n), this._boundRemove = this._remove.bind(this), this.options = s, this._nodeFsHandler = new H(this), Object.freeze(s);
  }
  _addIgnoredPath(t) {
    if (Y(t)) {
      for (let e of this._ignoredPaths) if (Y(e) && e.path === t.path && e.recursive === t.recursive) return;
    }
    this._ignoredPaths.add(t);
  }
  _removeIgnoredPath(t) {
    if (this._ignoredPaths.delete(t), typeof t === "string") {
      for (let e of this._ignoredPaths) if (Y(e) && e.path === t) this._ignoredPaths.delete(e);
    }
  }
  add(t, e, i) {
    let {
      cwd: cwd
    } = this.options;
    this.closed = !1, this._closePromise = void 0;
    let r = ht(t);
    if (cwd) r = r.map(item => se(item, cwd));
    if (r.forEach(item => {
      this._removeIgnoredPath(item);
    }), this._userIgnored = void 0, !this._readyCount) this._readyCount = 0;
    return this._readyCount += r.length, Promise.all(r.map(async item => {
      let o = await this._nodeFsHandler._addToNodeFs(item, !i, void 0, 0, e);
      if (o) this._emitReady();
      return o;
    })).then(a => {
      if (this.closed) return;
      a.forEach(item => {
        if (item) this.add(d.dirname(item), d.basename(e || item));
      });
    }), this;
  }
  unwatch(t) {
    if (this.closed) return this;
    let e = ht(t),
      {
        cwd: cwd_2
      } = this.options;
    return e.forEach(s => {
      if (!d.isAbsolute(s) && !this._closers.has(s)) {
        if (cwd_2) s = d.join(cwd_2, s);
        s = d.resolve(s);
      }
      if (this._closePath(s), this._addIgnoredPath(s), this._watched.has(s)) this._addIgnoredPath({
        path: s,
        recursive: !0
      });
      this._userIgnored = void 0;
    }), this;
  }
  close() {
    if (this._closePromise) return this._closePromise;
    this.closed = !0, this.removeAllListeners();
    let t = [];
    return this._closers.forEach(item => item.forEach(item => {
      let s = item();
      if (s instanceof Promise) t.push(s);
    })), this._streams.forEach(item => item.destroy()), this._userIgnored = void 0, this._readyCount = 0, this._readyEmitted = !1, this._watched.forEach(item => item.dispose()), this._closers.clear(), this._watched.clear(), this._streams.clear(), this._symlinkPaths.clear(), this._throttled.clear(), this._closePromise = t.length ? Promise.all(t).then(() => {
      return;
    }) : Promise.resolve(), this._closePromise;
  }
  getWatched() {
    let t = {};
    return this._watched.forEach((item, index) => {
      let r = (this.options.cwd ? d.relative(this.options.cwd, index) : index) || ft;
      t[r] = item.getChildren().sort();
    }), t;
  }
  setPollInterval(t) {
    if (this.options = Object.freeze({
      ...this.options,
      interval: t,
      binaryInterval: t
    }), this.options.usePolling) nt(this._emitRaw, t);
  }
  emitWithAll(t, e) {
    if (this.emit(t, ...e), t !== m.ERROR) this.emit(m.ALL, t, ...e);
  }
  async _emit(t, e, i) {
    if (this.closed) return;
    let options_3 = this.options;
    if (F) e = d.normalize(e);
    if (options_3.cwd) e = d.relative(options_3.cwd, e);
    let r = [e];
    if (i != null) r.push(i);
    let awaitWriteFinish_2 = options_3.awaitWriteFinish,
      o;
    if (awaitWriteFinish_2 && (o = this._pendingWrites.get(e))) return o.lastChange = new Date(), this;
    if (options_3.atomic) {
      if (t === m.UNLINK) return this._pendingUnlinks.set(e, [t, ...r]), setTimeout(() => {
        this._pendingUnlinks.forEach((item, index) => {
          this.emit(...item), this.emit(m.ALL, ...item), this._pendingUnlinks.delete(index);
        });
      }, typeof options_3.atomic === "number" ? options_3.atomic : 100), this;
      if (t === m.ADD && this._pendingUnlinks.has(e)) t = m.CHANGE, this._pendingUnlinks.delete(e);
    }
    if (awaitWriteFinish_2 && (t === m.ADD || t === m.CHANGE) && this._readyEmitted) {
      let n = (l, h) => {
        if (this.closed) return;
        if (l) {
          if (this.listenerCount(m.ERROR) === 0) {
            this._pendingWrites.delete(e);
            return;
          }
          t = m.ERROR, r[0] = l, this.emitWithAll(t, r);
        } else if (h) {
          if (r.length > 1) r[1] = h;else r.push(h);
          this.emitWithAll(t, r);
        }
      };
      return this._awaitWriteFinish(e, awaitWriteFinish_2.stabilityThreshold, t, n), this;
    }
    if (t === m.CHANGE) {
      if (!this._throttle(m.CHANGE, e, 50)) return this;
    }
    if (options_3.alwaysStat && i === void 0 && (t === m.ADD || t === m.ADD_DIR || t === m.CHANGE)) {
      let n = options_3.cwd ? d.join(options_3.cwd, e) : e,
        l;
      try {
        l = await Gt(n);
      } catch (error) {}
      if (!l || this.closed) return;
      r.push(l);
    }
    return this.emitWithAll(t, r), this;
  }
  _handleError(t) {
    let e = t && t.code;
    if (t && !this.closed && this.listenerCount(m.ERROR) > 0 && e !== "ENOENT" && e !== "ENOTDIR" && (!this.options.ignorePermissionErrors || e !== "EPERM" && e !== "EACCES")) this.emit(m.ERROR, t);
    return t || this.closed;
  }
  _throttle(t, e, i) {
    if (!this._throttled.has(t)) this._throttled.set(t, new Map());
    let s = this._throttled.get(t);
    if (!s) throw Error("invalid throttle");
    let r = s.get(e);
    if (r) return r.count++, !1;
    let timeoutObject,
      clear = () => {
        let l = s.get(e),
          h = l ? l.count : 0;
        if (s.delete(e), clearTimeout(timeoutObject), l) clearTimeout(l.timeoutObject);
        return h;
      };
    timeoutObject = setTimeout(clear, i);
    let n = {
      timeoutObject: timeoutObject,
      clear: clear,
      count: 0
    };
    return s.set(e, n), n;
  }
  _incrReadyCount() {
    return this._readyCount++;
  }
  _awaitWriteFinish(t, e, i, s) {
    let awaitWriteFinish_3 = this.options.awaitWriteFinish;
    if (typeof awaitWriteFinish_3 !== "object") return;
    let pollInterval = awaitWriteFinish_3.pollInterval,
      o,
      n = t;
    if (this.options.cwd && !d.isAbsolute(t)) n = d.join(this.options.cwd, t);
    let l = new Date(),
      _pendingWrites = this._pendingWrites;
    function f(c) {
      Ut(n, (u, w) => {
        if (u || !_pendingWrites.has(t)) {
          if (u && u.code !== "ENOENT") s(u);
          return;
        }
        let E = Number(new Date());
        if (c && w.size !== c.size) _pendingWrites.get(t).lastChange = E;
        let R = _pendingWrites.get(t);
        if (E - R.lastChange >= e) _pendingWrites.delete(t), s(void 0, w);else o = setTimeout(f, pollInterval, w);
      });
    }
    if (!_pendingWrites.has(t)) _pendingWrites.set(t, {
      lastChange: l,
      cancelWait: () => (_pendingWrites.delete(t), clearTimeout(o), i)
    }), o = setTimeout(f, pollInterval);
  }
  _isIgnored(t, e) {
    if (this.options.atomic && Qt.test(t)) return !0;
    if (!this._userIgnored) {
      let {
          cwd: cwd_3
        } = this.options,
        r = (this.options.ignored || []).map(lt(cwd_3)),
        o = [...[...this._ignoredPaths].map(lt(cwd_3)), ...r];
      this._userIgnored = ee(o, void 0);
    }
    return this._userIgnored(t, e);
  }
  _isntIgnored(t, e) {
    return !this._isIgnored(t, e);
  }
  _getWatchHelpers(t) {
    return new mt(t, this.options.followSymlinks, this);
  }
  _getWatchedDir(t) {
    let e = d.resolve(t);
    if (!this._watched.has(e)) this._watched.set(e, new ut(e, this._boundRemove));
    return this._watched.get(e);
  }
  _hasReadPermissions(t) {
    if (this.options.ignorePermissionErrors) return !0;
    return Boolean(Number(t.mode) & 256);
  }
  _remove(directory, item_2, isDirectory) {
    let s = [{
      directory: directory,
      item: item_2,
      isDirectory: isDirectory,
      path: "",
      fullPath: "",
      expanded: !1
    }];
    while (s.length > 0) {
      let r = s[s.length - 1];
      if (!r.expanded) {
        r.expanded = !0;
        let directory_2 = d.join(r.directory, r.item),
          u = d.resolve(directory_2);
        if (r.path = directory_2, r.fullPath = u, r.isDirectory = r.isDirectory != null ? r.isDirectory : this._watched.has(directory_2) || this._watched.has(u), !this._throttle("remove", directory_2, 100)) {
          s.pop();
          continue;
        }
        if (!r.isDirectory && this._watched.size === 1) this.add(r.directory, r.item, !0);
        let E = this._getWatchedDir(directory_2).getChildren();
        for (let R = E.length - 1; R >= 0; R--) s.push({
          directory: directory_2,
          item: E[R],
          isDirectory: void 0,
          path: "",
          fullPath: "",
          expanded: !1
        });
        continue;
      }
      s.pop();
      let {
          path: path_3,
          fullPath: fullPath_4
        } = r,
        n = this._getWatchedDir(r.directory),
        l = n.has(r.item);
      if (n.remove(r.item), this._symlinkPaths.has(fullPath_4)) this._symlinkPaths.delete(fullPath_4);
      let h = path_3;
      if (this.options.cwd) h = d.relative(this.options.cwd, path_3);
      if (this.options.awaitWriteFinish && this._pendingWrites.has(h)) {
        if (this._pendingWrites.get(h).cancelWait() === m.ADD) continue;
      }
      this._watched.delete(path_3), this._watched.delete(fullPath_4);
      let f = r.isDirectory ? m.UNLINK_DIR : m.UNLINK;
      if (l && !this._isIgnored(path_3)) this._emit(f, path_3);
      this._closePath(path_3);
    }
  }
  _closePath(t) {
    this._closeFile(t);
    let e = d.dirname(t);
    this._getWatchedDir(e).remove(d.basename(t));
  }
  _closeFile(t) {
    let e = this._closers.get(t);
    if (!e) return;
    e.forEach(item => item()), this._closers.delete(t);
  }
  _addPathCloser(t, e) {
    if (!e) return;
    let i = this._closers.get(t);
    if (!i) i = [], this._closers.set(t, i);
    i.push(e);
  }
  _readdirp(t, e) {
    if (this.closed) return;
    let i = {
        type: m.ALL,
        alwaysStat: !0,
        lstat: !0,
        ...e,
        depth: 0
      },
      s = X(t, i);
    return this._streams.add(s), s.once(st, () => {
      s = void 0;
    }), s.once(z, () => {
      if (s) this._streams.delete(s), s = void 0;
    }), s;
  }
}
function watch(t, e = {}) {
  let i = new FSWatcher(e);
  return i.add(t), i;
}
var nC = {
  watch: watch,
  FSWatcher: FSWatcher
};
export { nC };