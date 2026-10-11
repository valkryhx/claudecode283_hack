// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { zo } from "B:/~BUN/root/chunk-ekrhn4q1.js";
import { q, di } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { y, c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { P, st, te, v, ao, as } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { nt } from "B:/~BUN/root/chunk-17wqwt36.js";
import { oe } from "B:/~BUN/root/chunk-shgdrs47.js";
import { gm, fa, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { I$, a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { d, O } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { Q0 } from "B:/~BUN/root/chunk-e7p62566.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { _, m } from "B:/~BUN/root/chunk-51n463p1.js";
import { Qr } from "B:/~BUN/root/chunk-0bx1tycm.js";
import { Yr } from "B:/~BUN/root/chunk-n0832wgz.js";
import { tBe, RUo } from "B:/~BUN/root/chunk-23aycy1d.js";
import { be, k, Re } from "B:/~BUN/root/chunk-yv67t8hr.js";
var Lt = k(function (Hs, Ft) {
  Ft.exports = Gt;
  Gt.sync = kr;
  var vt = Re("fs");
  function Lr(e, n) {
    var r = n.pathExt !== void 0 ? n.pathExt : process.env.PATHEXT;
    if (!r) return !0;
    if (r = r.split(";"), r.indexOf("") !== -1) return !0;
    for (var o = 0; o < r.length; o++) {
      var s = r[o].toLowerCase();
      if (s && e.substr(-s.length).toLowerCase() === s) return !0;
    }
    return !1;
  }
  function At(e, n, r) {
    if (!e.isSymbolicLink() && !e.isFile()) return !1;
    return Lr(n, r);
  }
  function Gt(e, n, r) {
    vt.stat(e, function (o, s) {
      r(o, o ? !1 : At(s, e, n));
    });
  }
  function kr(e, n) {
    return At(vt.statSync(e), e, n);
  }
});
var $t = k(function (Ys, kt) {
  var Vs = Re("fs"),
    Ge;
  Ge = Lt();
  kt.exports = Fe;
  Fe.sync = $r;
  function Fe(e, n, r) {
    if (typeof n === "function") r = n, n = {};
    if (!r) {
      if (typeof Promise !== "function") throw TypeError("callback not provided");
      return new Promise(function (o, s) {
        Fe(e, n || {}, function (u, l) {
          if (u) s(u);else o(l);
        });
      });
    }
    Ge(e, n || {}, function (o, s) {
      if (o) {
        if (o.code === "EACCES" || n && n.ignoreErrors) o = null, s = !1;
      }
      r(o, s);
    });
  }
  function $r(e, n) {
    try {
      return Ge.sync(e, n || {});
    } catch (error) {
      if (n && n.ignoreErrors || error.code === "EACCES") return !1;else throw error;
    }
  }
});
var jt = k(function (zs, Bt) {
  var ue = Re("path"),
    Le = $t(),
    Mt = e => Object.assign(Error(`not found: ${e}`), {
      code: "ENOENT"
    }),
    Dt = (e, n) => {
      let r = n.colon || ";",
        pathEnv = e.match(/\//) || e.match(/\\/) ? [""] : [process.cwd(), ...(n.path || process.env.PATH || "").split(r)],
        pathExtExe = n.pathExt || process.env.PATHEXT || ".EXE;.CMD;.BAT;.COM",
        pathExt = pathExtExe.split(r);
      if (e.indexOf(".") !== -1 && pathExt[0] !== "") pathExt.unshift("");
      return {
        pathEnv: pathEnv,
        pathExt: pathExt,
        pathExtExe: pathExtExe
      };
    },
    Ut = (e, n, r) => {
      if (typeof n === "function") r = n, n = {};
      if (!n) n = {};
      let {
          pathEnv: pathEnv_2,
          pathExt: pathExt_2,
          pathExtExe: u
        } = Dt(e, n),
        l = [],
        f = g => new Promise((h, S) => {
          if (g === pathEnv_2.length) return n.all && l.length ? h(l) : S(Mt(e));
          let E = pathEnv_2[g],
            C = /^".*"$/.test(E) ? E.slice(1, -1) : E,
            T = ue.join(C, e),
            w = !C && /^\.[\\\/]/.test(e) ? e.slice(0, 2) + T : T;
          h(p(w, g, 0));
        }),
        p = (g, h, S) => new Promise((E, C) => {
          if (S === pathExt_2.length) return E(f(h + 1));
          let T = pathExt_2[S];
          Le(g + T, {
            pathExt: u
          }, (w, N) => {
            if (!w && N) if (n.all) l.push(g + T);else return E(g + T);
            return E(p(g, h, S + 1));
          });
        });
      return r ? f(0).then(g => r(null, g), r) : f(0);
    },
    Mr = (e, n) => {
      n = n || {};
      let {
          pathEnv: pathEnv_3,
          pathExt: pathExt_3,
          pathExtExe: s
        } = Dt(e, n),
        u = [];
      for (let l = 0; l < pathEnv_3.length; l++) {
        let f = pathEnv_3[l],
          p = /^".*"$/.test(f) ? f.slice(1, -1) : f,
          g = ue.join(p, e),
          h = !p && /^\.[\\\/]/.test(e) ? e.slice(0, 2) + g : g;
        for (let S = 0; S < pathExt_3.length; S++) {
          let E = h + pathExt_3[S];
          try {
            if (Le.sync(E, {
              pathExt: s
            })) if (n.all) u.push(E);else return E;
          } catch (error) {}
        }
      }
      if (n.all && u.length) return u;
      if (n.nothrow) return null;
      throw Mt(e);
    };
  Bt.exports = Ut;
  Ut.sync = Mr;
});
var Kt = k(function (Js, ke) {
  var Wt = (e = {}) => {
    let n = e.env || process.env;
    if ((e.platform || "win32") !== "win32") return "PATH";
    return Object.keys(n).reverse().find(item => item.toUpperCase() === "PATH") || "Path";
  };
  ke.exports = Wt;
  ke.exports.default = Wt;
});
var zt = k(function (qs, Yt) {
  var de = Re("path"),
    Vt = jt(),
    Dr = Kt();
  function Ht(e, n) {
    let env = e.options.env || process.env,
      o = process.cwd(),
      s = e.options.cwd != null,
      u = s && process.chdir !== void 0 && !process.chdir.disabled;
    if (u) try {
      process.chdir(e.options.cwd);
    } catch (error) {}
    let l;
    try {
      l = Vt.sync(e.command, {
        path: env[Dr({
          env: env
        })],
        pathExt: n ? de.delimiter : void 0
      });
    } catch (error) {} finally {
      if (u) try {
        process.chdir(o);
      } catch (error) {
        let p = error !== null && typeof error === "object" && typeof error.code === "string" ? error.code : "";
        if (!(/^E[A-Z0-9]+$/.test(p) || p === "UNKNOWN" || p.startsWith("Unknown system error"))) throw error;
      }
    }
    if (l) l = de.resolve(s ? e.options.cwd : "", l);
    return l;
  }
  function Ur(e) {
    return Ht(e) || Ht(e, !0);
  }
  Yt.exports = Ur;
});
var Jt = k(function (Wr, Me) {
  var $e = /([()\][%!^"`<>&|;, *?])/g;
  function Br(e) {
    return e = e.replace($e, "^$1"), e;
  }
  function jr(e, n) {
    if (e = `${e}`, e = e.replace(/(?=(\\+?)?)\1"/g, "$1$1\\\""), e = e.replace(/(?=(\\+?)?)\1$/, "$1$1"), e = `"${e}"`, e = e.replace($e, "^$1"), n) e = e.replace($e, "^$1");
    return e;
  }
  Wr.command = Br;
  Wr.argument = jr;
});
var Xt = k(function (Xs, qt) {
  qt.exports = /^#!(.*)/;
});
var Qt = k(function (Zs, Zt) {
  var Vr = Xt();
  Zt.exports = (e = "") => {
    let n = e.match(Vr);
    if (!n) return null;
    let [r, o] = n[0].replace(/#! ?/, "").split(" "),
      s = r.split("/").pop();
    if (s === "env") return o;
    return o ? `${s} ${o}` : s;
  };
});
var tn = k(function (Qs, en) {
  var D = Re("fs"),
    zr = Qt();
  function Jr(e) {
    let r = Buffer.alloc(150),
      o;
    try {
      o = D.openSync(e, "r"), D.readSync(o, r, 0, 150, 0), D.closeSync(o);
    } catch (error) {}
    return zr(r.toString());
  }
  en.exports = Jr;
});
var sn = k(function (ec, on) {
  var rn = Re("path"),
    nn = zt(),
    le = Jt(),
    qr = tn(),
    Xr = /\.(?:com|exe)$/i,
    Zr = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;
  function eo(e) {
    e.file = nn(e);
    let n = e.file && qr(e.file);
    if (n) return e.args.unshift(e.file), e.command = n, nn(e);
    return e.file;
  }
  function to(e) {
    let n = eo(e),
      r = !Xr.test(n);
    if (e.options.forceShell || r) {
      let o = Zr.test(n);
      e.command = rn.normalize(e.command), e.command = le.command(e.command), e.args = e.args.map(item => le.argument(item, o));
      let s = [e.command].concat(e.args).join(" ");
      e.args = ["/d", "/s", "/c", `"${s}"`], e.command = process.env.comspec || "cmd.exe", e.options.windowsVerbatimArguments = !0;
    }
    return e;
  }
  function no(command, args, options) {
    if (args && !Array.isArray(args)) options = args, args = null;
    args = args ? args.slice(0) : [], options = Object.assign({}, options);
    let o = {
      command: command,
      args: args,
      options: options,
      file: void 0,
      original: {
        command: command,
        args: args
      }
    };
    return options.shell ? o : to(o);
  }
  on.exports = no;
});
var un = k(function (tc, an) {
  function notFoundError(e, n) {
    return Object.assign(Error(`${n} ${e.command} ENOENT`), {
      code: "ENOENT",
      errno: "ENOENT",
      syscall: `${n} ${e.command}`,
      path: e.command,
      spawnargs: e.args
    });
  }
  function hookChildProcess(e, n) {
    let r = e.emit;
    e.emit = function emit(o, s) {
      if (o === "exit") {
        let u = verifyENOENT(s, n);
        if (u) return r.call(e, "error", u);
      }
      return r.apply(e, arguments);
    };
  }
  function verifyENOENT(e, n) {
    if (e === 1 && !n.file) return notFoundError(n.original, "spawn");
    return null;
  }
  function verifyENOENTSync(e, n) {
    if (e === 1 && !n.file) return notFoundError(n.original, "spawnSync");
    return null;
  }
  an.exports = {
    hookChildProcess: hookChildProcess,
    verifyENOENT: verifyENOENT,
    verifyENOENTSync: verifyENOENTSync,
    notFoundError: notFoundError
  };
});
var ihn = k(function (nc, U) {
  var fe = Re("child_process"),
    Ue = sn(),
    Y = un();
  function dn(e, n, r) {
    let o = Ue(e, n, r),
      s = fe.spawn(o.command, o.args, o.options);
    return Y.hookChildProcess(s, o), s;
  }
  function io(e, n, r) {
    let o = Ue(e, n, r),
      s = fe.spawnSync(o.command, o.args, o.options);
    return s.error = s.error || Y.verifyENOENTSync(s.status, o), s;
  }
  U.exports = dn;
  U.exports.spawn = dn;
  U.exports.sync = io;
  U.exports._parse = Ue;
  U.exports._enoent = Y;
});
var Un = k(function (ca, Dn) {
  var {
    PassThrough: PassThrough
  } = Re("stream");
  Dn.exports = function exports() {
    var e = [],
      n = new PassThrough({
        objectMode: !0
      });
    return n.setMaxListeners(0), n.add = r, n.isEmpty = o, n.on("unpipe", s), Array.prototype.slice.call(arguments).forEach(r), n;
    function r(u) {
      if (Array.isArray(u)) return u.forEach(r), this;
      return e.push(u), u.once("end", s.bind(null, u)), u.once("error", n.emit.bind(n, "error")), u.pipe(n, {
        end: !1
      }), this;
    }
    function o() {
      return e.length == 0;
    }
    function s(u) {
      if (e = e.filter(function (item) {
        return item !== u;
      }), !e.length && n.readable) n.end();
    }
  };
});
var Qn = be(ihn(), 1);
import { Buffer as Oi } from "buffer";
import Ii from "path";
import mt from "child_process";
import we from "process";
function Be(e) {
  let n = typeof e === "string" ? `
` : `
`.charCodeAt(),
    r = typeof e === "string" ? "\r" : "\r".charCodeAt();
  if (e[e.length - 1] === n) e = e.slice(0, -1);
  if (e[e.length - 1] === r) e = e.slice(0, -1);
  return e;
}
import me from "process";
import z from "path";
import { fileURLToPath as ln } from "url";
function pe(e = {}) {
  let {
    env: env_2 = process.env,
    platform = "win32"
  } = e;
  if (platform !== "win32") return "PATH";
  return Object.keys(env_2).reverse().find(item => item.toUpperCase() === "PATH") || "Path";
}
var so = ({
    cwd = me.cwd(),
    path = me.env[pe()],
    preferLocal = !0,
    execPath = me.execPath,
    addExecPath = !0
  } = {}) => {
    let u = cwd instanceof URL ? ln(cwd) : cwd,
      l = z.resolve(u),
      f = [];
    if (preferLocal) co(f, l);
    if (addExecPath) uo(f, execPath, l);
    return [...f, path].join(z.delimiter);
  },
  co = (e, n) => {
    let r;
    while (r !== n) e.push(z.join(n, "node_modules/.bin")), r = n, n = z.resolve(n, "..");
  },
  uo = (e, n, r) => {
    let o = n instanceof URL ? ln(n) : n;
    e.push(z.resolve(r, o, ".."));
  },
  fn = ({
    env: env_3 = me.env,
    ...n
  } = {}) => {
    env_3 = {
      ...env_3
    };
    let r = pe({
      env: env_3
    });
    return n.path = env_3[r], env_3[r] = so(n), env_3;
  };
var lo = (e, n, r, o) => {
    if (r === "length" || r === "prototype") return;
    if (r === "arguments" || r === "caller") return;
    let s = Object.getOwnPropertyDescriptor(e, r),
      u = Object.getOwnPropertyDescriptor(n, r);
    if (!fo(s, u) && o) return;
    Object.defineProperty(e, r, u);
  },
  fo = function (e, n) {
    return e === void 0 || e.configurable || e.writable === n.writable && e.enumerable === n.enumerable && e.configurable === n.configurable && (e.writable || e.value === n.value);
  },
  po = (e, n) => {
    let r = Object.getPrototypeOf(n);
    if (r === Object.getPrototypeOf(e)) return;
    Object.setPrototypeOf(e, r);
  },
  mo = (e, n) => `/* Wrapped ${e}*/
${n}`,
  go = Object.getOwnPropertyDescriptor(Function.prototype, "toString"),
  ho = Object.getOwnPropertyDescriptor(Function.prototype.toString, "name"),
  yo = (e, n, r) => {
    let o = r === "" ? "" : `with ${r.trim()}() `,
      value = mo.bind(null, o, n.toString());
    Object.defineProperty(value, "name", ho), Object.defineProperty(e, "toString", {
      ...go,
      value: value
    });
  };
function je(e, n, {
  ignoreNonConfigurable = !1
} = {}) {
  let {
    name: name
  } = e;
  for (let s of Reflect.ownKeys(n)) lo(e, n, s, ignoreNonConfigurable);
  return po(e, n), yo(e, n, name), e;
}
var weakMap = new WeakMap(),
  pn = (e, n = {}) => {
    if (typeof e !== "function") throw TypeError("Expected a function");
    let r,
      o = 0,
      s = e.displayName || e.name || "<anonymous>",
      u = function (...l) {
        if (weakMap.set(u, ++o), o === 1) r = e.apply(this, l), e = null;else if (n.throw === !0) throw Error(`Function \`${s}\` can only be called once`);
        return r;
      };
    return je(u, e), weakMap.set(u, o), u;
  };
pn.callCount = e => {
  if (!weakMap.has(e)) throw Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);
  return weakMap.get(e);
};
var gn = pn;
import Io from "process";
import { constants as To } from "os";
var hn = () => {
    let length = We - yn + 1;
    return Array.from({
      length: length
    }, So);
  },
  So = (e, n) => ({
    name: `SIGRT${n + 1}`,
    number: yn + n,
    action: "terminate",
    description: "Application-specific signal (realtime)",
    standard: "posix"
  }),
  yn = 34,
  We = 64;
import { constants as Eo } from "os";
var Sn = [{
  name: "SIGHUP",
  number: 1,
  action: "terminate",
  description: "Terminal closed",
  standard: "posix"
}, {
  name: "SIGINT",
  number: 2,
  action: "terminate",
  description: "User interruption with CTRL-C",
  standard: "ansi"
}, {
  name: "SIGQUIT",
  number: 3,
  action: "core",
  description: "User interruption with CTRL-\\",
  standard: "posix"
}, {
  name: "SIGILL",
  number: 4,
  action: "core",
  description: "Invalid machine instruction",
  standard: "ansi"
}, {
  name: "SIGTRAP",
  number: 5,
  action: "core",
  description: "Debugger breakpoint",
  standard: "posix"
}, {
  name: "SIGABRT",
  number: 6,
  action: "core",
  description: "Aborted",
  standard: "ansi"
}, {
  name: "SIGIOT",
  number: 6,
  action: "core",
  description: "Aborted",
  standard: "bsd"
}, {
  name: "SIGBUS",
  number: 7,
  action: "core",
  description: "Bus error due to misaligned, non-existing address or paging error",
  standard: "bsd"
}, {
  name: "SIGEMT",
  number: 7,
  action: "terminate",
  description: "Command should be emulated but is not implemented",
  standard: "other"
}, {
  name: "SIGFPE",
  number: 8,
  action: "core",
  description: "Floating point arithmetic error",
  standard: "ansi"
}, {
  name: "SIGKILL",
  number: 9,
  action: "terminate",
  description: "Forced termination",
  standard: "posix",
  forced: !0
}, {
  name: "SIGUSR1",
  number: 10,
  action: "terminate",
  description: "Application-specific signal",
  standard: "posix"
}, {
  name: "SIGSEGV",
  number: 11,
  action: "core",
  description: "Segmentation fault",
  standard: "ansi"
}, {
  name: "SIGUSR2",
  number: 12,
  action: "terminate",
  description: "Application-specific signal",
  standard: "posix"
}, {
  name: "SIGPIPE",
  number: 13,
  action: "terminate",
  description: "Broken pipe or socket",
  standard: "posix"
}, {
  name: "SIGALRM",
  number: 14,
  action: "terminate",
  description: "Timeout or timer",
  standard: "posix"
}, {
  name: "SIGTERM",
  number: 15,
  action: "terminate",
  description: "Termination",
  standard: "ansi"
}, {
  name: "SIGSTKFLT",
  number: 16,
  action: "terminate",
  description: "Stack is empty or overflowed",
  standard: "other"
}, {
  name: "SIGCHLD",
  number: 17,
  action: "ignore",
  description: "Child process terminated, paused or unpaused",
  standard: "posix"
}, {
  name: "SIGCLD",
  number: 17,
  action: "ignore",
  description: "Child process terminated, paused or unpaused",
  standard: "other"
}, {
  name: "SIGCONT",
  number: 18,
  action: "unpause",
  description: "Unpaused",
  standard: "posix",
  forced: !0
}, {
  name: "SIGSTOP",
  number: 19,
  action: "pause",
  description: "Paused",
  standard: "posix",
  forced: !0
}, {
  name: "SIGTSTP",
  number: 20,
  action: "pause",
  description: 'Paused using CTRL-Z or "suspend"',
  standard: "posix"
}, {
  name: "SIGTTIN",
  number: 21,
  action: "pause",
  description: "Background process cannot read terminal input",
  standard: "posix"
}, {
  name: "SIGBREAK",
  number: 21,
  action: "terminate",
  description: "User interruption with CTRL-BREAK",
  standard: "other"
}, {
  name: "SIGTTOU",
  number: 22,
  action: "pause",
  description: "Background process cannot write to terminal output",
  standard: "posix"
}, {
  name: "SIGURG",
  number: 23,
  action: "ignore",
  description: "Socket received out-of-band data",
  standard: "bsd"
}, {
  name: "SIGXCPU",
  number: 24,
  action: "core",
  description: "Process timed out",
  standard: "bsd"
}, {
  name: "SIGXFSZ",
  number: 25,
  action: "core",
  description: "File too big",
  standard: "bsd"
}, {
  name: "SIGVTALRM",
  number: 26,
  action: "terminate",
  description: "Timeout or timer",
  standard: "bsd"
}, {
  name: "SIGPROF",
  number: 27,
  action: "terminate",
  description: "Timeout or timer",
  standard: "bsd"
}, {
  name: "SIGWINCH",
  number: 28,
  action: "ignore",
  description: "Terminal window size changed",
  standard: "bsd"
}, {
  name: "SIGIO",
  number: 29,
  action: "terminate",
  description: "I/O is available",
  standard: "other"
}, {
  name: "SIGPOLL",
  number: 29,
  action: "terminate",
  description: "Watched event",
  standard: "other"
}, {
  name: "SIGINFO",
  number: 29,
  action: "ignore",
  description: "Request for process information",
  standard: "other"
}, {
  name: "SIGPWR",
  number: 30,
  action: "terminate",
  description: "Device running out of power",
  standard: "systemv"
}, {
  name: "SIGSYS",
  number: 31,
  action: "core",
  description: "Invalid system call",
  standard: "other"
}, {
  name: "SIGUNUSED",
  number: 31,
  action: "terminate",
  description: "Invalid system call",
  standard: "other"
}];
var Ke = () => {
    let e = hn();
    return [...Sn, ...e].map(xo);
  },
  xo = ({
    name: name_2,
    number: number,
    description: description,
    action: action,
    forced = !1,
    standard: standard
  }) => {
    let {
        signals: {
          [name_2]: l
        }
      } = Eo,
      supported = l !== void 0;
    return {
      name: name_2,
      number: supported ? l : number,
      description: description,
      supported: supported,
      action: action,
      forced: forced,
      standard: standard
    };
  };
var Co = () => {
    let e = Ke();
    return Object.fromEntries(e.map(_o));
  },
  _o = ({
    name: name_3,
    number: number_2,
    description: description_2,
    supported: supported_2,
    action: action_2,
    forced: forced_2,
    standard: standard_2
  }) => [name_3, {
    name: name_3,
    number: number_2,
    description: description_2,
    supported: supported_2,
    action: action_2,
    forced: forced_2,
    standard: standard_2
  }],
  En = Co(),
  bo = () => {
    let e = Ke(),
      length_2 = We + 1,
      r = Array.from({
        length: length_2
      }, (o, s) => wo(s, e));
    return Object.assign({}, ...r);
  },
  wo = (number_3, n) => {
    let r = Oo(number_3, n);
    if (r === void 0) return {};
    let {
      name: name_4,
      description: description_3,
      supported: supported_3,
      action: action_3,
      forced: forced_3,
      standard: standard_3
    } = r;
    return {
      [number_3]: {
        name: name_4,
        number: number_3,
        description: description_3,
        supported: supported_3,
        action: action_3,
        forced: forced_3,
        standard: standard_3
      }
    };
  },
  Oo = (e, n) => {
    let r = n.find(({
      name: name_5
    }) => To.signals[name_5] === e);
    if (r !== void 0) return r;
    return n.find(item => item.number === e);
  },
  Cc = bo();
var Po = ({
    timedOut: timedOut,
    timeout: timeout,
    errorCode: errorCode,
    signal: signal,
    signalDescription: signalDescription,
    exitCode: exitCode,
    isCanceled: isCanceled
  }) => {
    if (timedOut) return `timed out after ${timeout} milliseconds`;
    if (isCanceled) return "was canceled";
    if (errorCode !== void 0) return `failed with ${errorCode}`;
    if (signal !== void 0) return `was killed with ${signal} (${signalDescription})`;
    if (exitCode !== void 0) return `failed with exit code ${exitCode}`;
    return "failed";
  },
  J = ({
    stdout: stdout,
    stderr: stderr,
    all: all,
    error: error_2,
    signal: signal_2,
    exitCode: exitCode_2,
    command: command_2,
    escapedCommand: escapedCommand,
    timedOut: timedOut_2,
    isCanceled: isCanceled_2,
    killed: killed,
    parsed: {
      options: {
        timeout: timeout_2,
        cwd: cwd_2 = Io.cwd()
      }
    }
  }) => {
    exitCode_2 = exitCode_2 === null ? void 0 : exitCode_2, signal_2 = signal_2 === null ? void 0 : signal_2;
    let signalDescription_2 = signal_2 === void 0 ? void 0 : En[signal_2].description,
      errorCode_2 = error_2 && error_2.code,
      N = `Command ${Po({
        timedOut: timedOut_2,
        timeout: timeout_2,
        errorCode: errorCode_2,
        signal: signal_2,
        signalDescription: signalDescription_2,
        exitCode: exitCode_2,
        isCanceled: isCanceled_2
      })}: ${command_2}`,
      F = Object.prototype.toString.call(error_2) === "[object Error]",
      L = F ? `${N}
${error_2.message}` : N,
      M = [L, stderr, stdout].filter(Boolean).join(`
`);
    if (F) error_2.originalMessage = error_2.message, error_2.message = M;else error_2 = Error(M);
    if (error_2.shortMessage = L, error_2.command = command_2, error_2.escapedCommand = escapedCommand, error_2.exitCode = exitCode_2, error_2.signal = signal_2, error_2.signalDescription = signalDescription_2, error_2.stdout = stdout, error_2.stderr = stderr, error_2.cwd = cwd_2, all !== void 0) error_2.all = all;
    if ("bufferedData" in error_2) delete error_2.bufferedData;
    return error_2.failed = !0, error_2.timedOut = Boolean(timedOut_2), error_2.isCanceled = isCanceled_2, error_2.killed = killed && !timedOut_2, error_2;
  };
var he = ["stdin", "stdout", "stderr"],
  Ro = e => he.some(item => e[item] !== void 0),
  xn = e => {
    if (!e) return;
    let {
      stdio: stdio
    } = e;
    if (stdio === void 0) return he.map(item => e[item]);
    if (Ro(e)) throw Error(`It's not possible to provide \`stdio\` in combination with one of ${he.map(item => `\`${item}\``).join(", ")}`);
    if (typeof stdio === "string") return stdio;
    if (!Array.isArray(stdio)) throw TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof stdio}\``);
    let length_3 = Math.max(stdio.length, he.length);
    return Array.from({
      length: length_3
    }, (o, s) => stdio[s]);
  };
import Go from "os";
var X = [];
X.push("SIGHUP", "SIGINT", "SIGTERM");
var ye = e => !!e && typeof e === "object" && typeof e.removeListener === "function" && typeof e.emit === "function" && typeof e.reallyExit === "function" && typeof e.listeners === "function" && typeof e.kill === "function" && typeof e.pid === "number" && typeof e.on === "function",
  He = Symbol.for("signal-exit emitter"),
  globalThis_2 = globalThis,
  vo = Object.defineProperty.bind(Object);
class Tn {
  emitted = {
    afterExit: !1,
    exit: !1
  };
  listeners = {
    afterExit: [],
    exit: []
  };
  count = 0;
  id = Math.random();
  constructor() {
    if (globalThis_2[He]) return globalThis_2[He];
    vo(globalThis_2, He, {
      value: this,
      writable: !1,
      enumerable: !1,
      configurable: !1
    });
  }
  on(e, n) {
    this.listeners[e].push(n);
  }
  removeListener(e, n) {
    let r = this.listeners[e],
      o = r.indexOf(n);
    if (o === -1) return;
    if (o === 0 && r.length === 1) r.length = 0;else r.splice(o, 1);
  }
  emit(e, n, r) {
    if (this.emitted[e]) return !1;
    this.emitted[e] = !0;
    let o = !1;
    for (let s of this.listeners[e]) o = s(n, r) === !0 || o;
    if (e === "exit") o = this.emit("afterExit", n, r) || o;
    return o;
  }
}
class Je {}
var Ao = e => ({
  onExit(n, r) {
    return e.onExit(n, r);
  },
  load() {
    return e.load();
  },
  unload() {
    return e.unload();
  }
});
class Cn extends Je {
  onExit() {
    return () => {};
  }
  load() {}
  unload() {}
}
class _n extends Je {
  #s = process_2.platform === "win32" ? "SIGINT" : "SIGHUP";
  #t = new Tn();
  #e;
  #o;
  #i;
  #r = {};
  #n = !1;
  constructor(e) {
    super();
    this.#e = e, this.#r = {};
    for (let n of X) this.#r[n] = () => {
      let r = this.#e.listeners(n),
        {
          count: count
        } = this.#t,
        s = e;
      if (typeof s.__signal_exit_emitter__ === "object" && typeof s.__signal_exit_emitter__.count === "number") count += s.__signal_exit_emitter__.count;
      if (r.length === count) {
        this.unload();
        let u = this.#t.emit("exit", null, n),
          l = n === "SIGHUP" ? this.#s : n;
        if (!u) e.kill(e.pid, l);
      }
    };
    this.#i = e.reallyExit, this.#o = e.emit;
  }
  onExit(e, n) {
    if (!ye(this.#e)) return () => {};
    if (this.#n === !1) this.load();
    let r = n?.alwaysLast ? "afterExit" : "exit";
    return this.#t.on(r, e), () => {
      if (this.#t.removeListener(r, e), this.#t.listeners.exit.length === 0 && this.#t.listeners.afterExit.length === 0) this.unload();
    };
  }
  load() {
    if (this.#n) return;
    this.#n = !0, this.#t.count += 1;
    for (let e of X) try {
      let n = this.#r[e];
      if (n) this.#e.on(e, n);
    } catch (error) {}
    this.#e.emit = (e, ...n) => this.#a(e, ...n), this.#e.reallyExit = e => this.#c(e);
  }
  unload() {
    if (!this.#n) return;
    this.#n = !1, X.forEach(item => {
      let n = this.#r[item];
      if (!n) throw Error("Listener not defined for signal: " + item);
      try {
        this.#e.removeListener(item, n);
      } catch (error) {}
    }), this.#e.emit = this.#o, this.#e.reallyExit = this.#i, this.#t.count -= 1;
  }
  #c(e) {
    if (!ye(this.#e)) return 0;
    return this.#e.exitCode = e || 0, this.#t.emit("exit", this.#e.exitCode, null), this.#i.call(this.#e, this.#e.exitCode);
  }
  #a(e, ...n) {
    let r = this.#o;
    if (e === "exit" && ye(this.#e)) {
      if (typeof n[0] === "number") this.#e.exitCode = n[0];
      let o = r.call(this.#e, e, ...n);
      return this.#t.emit("exit", this.#e.exitCode, null), o;
    } else return r.call(this.#e, e, ...n);
  }
}
var process_2 = globalThis.process,
  {
    onExit: onExit,
    load: load,
    unload: unload
  } = Ao(ye(process_2) ? new _n(process_2) : new Cn());
var Fo = 5000,
  bn = (e, n = "SIGTERM", r = {}) => {
    let o = e(n);
    return Lo(e, n, r, o), o;
  },
  Lo = (e, n, r, o) => {
    if (!ko(n, r, o)) return;
    let s = Mo(r),
      u = setTimeout(() => {
        e("SIGKILL");
      }, s);
    if (u.unref) u.unref();
  },
  ko = (e, {
    forceKillAfterTimeout: forceKillAfterTimeout
  }, r) => $o(e) && forceKillAfterTimeout !== !1 && r,
  $o = e => e === Go.constants.signals.SIGTERM || typeof e === "string" && e.toUpperCase() === "SIGTERM",
  Mo = ({
    forceKillAfterTimeout: forceKillAfterTimeout_2 = !0
  }) => {
    if (forceKillAfterTimeout_2 === !0) return Fo;
    if (!Number.isFinite(forceKillAfterTimeout_2) || forceKillAfterTimeout_2 < 0) throw TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${forceKillAfterTimeout_2}\` (${typeof forceKillAfterTimeout_2})`);
    return forceKillAfterTimeout_2;
  },
  wn = (e, n) => {
    if (e.kill()) n.isCanceled = !0;
  },
  Do = (e, signal_3, r) => {
    e.kill(signal_3), r(Object.assign(Error("Timed out"), {
      timedOut: !0,
      signal: signal_3
    }));
  },
  On = (e, {
    timeout: timeout_3,
    killSignal = "SIGTERM"
  }, o) => {
    if (timeout_3 === 0 || timeout_3 === void 0) return o;
    let s,
      promise = new Promise((f, p) => {
        s = setTimeout(() => {
          Do(e, killSignal, p);
        }, timeout_3);
      }),
      l = o.finally(() => {
        clearTimeout(s);
      });
    return Promise.race([promise, l]);
  },
  In = ({
    timeout: timeout_4
  }) => {
    if (timeout_4 !== void 0 && (!Number.isFinite(timeout_4) || timeout_4 < 0)) throw TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${timeout_4}\` (${typeof timeout_4})`);
  },
  Pn = async (e, {
    cleanup: cleanup,
    detached: detached
  }, o) => {
    if (!cleanup || detached) return o;
    let s = onExit(() => {
      e.kill();
    });
    return o.finally(() => {
      s();
    });
  };
import { createWriteStream as Uo } from "fs";
import { ChildProcess as Bo } from "child_process";
function Se(e) {
  return e !== null && typeof e === "object" && typeof e.pipe === "function";
}
function qe(e) {
  return Se(e) && e.writable !== !1 && typeof e._write === "function" && typeof e._writableState === "object";
}
var jo = e => e instanceof Bo && typeof e.then === "function",
  Xe = (e, n, r) => {
    if (typeof r === "string") return e[n].pipe(Uo(r)), e;
    if (qe(r)) return e[n].pipe(r), e;
    if (!jo(r)) throw TypeError("The second argument must be a string, a stream or an Execa child process.");
    if (!qe(r.stdin)) throw TypeError("The target child process's stdin must be available.");
    return e[n].pipe(r.stdin), r;
  },
  Rn = e => {
    if (e.stdout !== null) e.pipeStdout = Xe.bind(void 0, e, "stdout");
    if (e.stderr !== null) e.pipeStderr = Xe.bind(void 0, e, "stderr");
    if (e.all !== void 0) e.pipeAll = Xe.bind(void 0, e, "all");
  };
import { createReadStream as ai, readFileSync as ui } from "fs";
import { setTimeout as li } from "timers/promises";
var Z = async (e, {
    init: init,
    convertChunk: convertChunk,
    getSize: getSize,
    truncateChunk: truncateChunk,
    addChunk: addChunk,
    getFinalChunk: getFinalChunk,
    finalize: finalize
  }, {
    maxBuffer = Number.POSITIVE_INFINITY
  } = {}) => {
    if (!Ko(e)) throw Error("The first argument must be a Readable, a ReadableStream, or an async iterable.");
    let state = init();
    state.length = 0;
    try {
      for await (let h of e) {
        let S = Ho(h),
          convertedChunk = convertChunk[S](h, state);
        An({
          convertedChunk: convertedChunk,
          state: state,
          getSize: getSize,
          truncateChunk: truncateChunk,
          addChunk: addChunk,
          maxBuffer: maxBuffer
        });
      }
      return Wo({
        state: state,
        convertChunk: convertChunk,
        getSize: getSize,
        truncateChunk: truncateChunk,
        addChunk: addChunk,
        getFinalChunk: getFinalChunk,
        maxBuffer: maxBuffer
      }), finalize(state);
    } catch (error) {
      throw error.bufferedData = finalize(state), error;
    }
  },
  Wo = ({
    state: state_2,
    getSize: getSize_2,
    truncateChunk: truncateChunk_2,
    addChunk: addChunk_2,
    getFinalChunk: getFinalChunk_2,
    maxBuffer: maxBuffer_2
  }) => {
    let convertedChunk_2 = getFinalChunk_2(state_2);
    if (convertedChunk_2 !== void 0) An({
      convertedChunk: convertedChunk_2,
      state: state_2,
      getSize: getSize_2,
      truncateChunk: truncateChunk_2,
      addChunk: addChunk_2,
      maxBuffer: maxBuffer_2
    });
  },
  An = ({
    convertedChunk: convertedChunk_3,
    state: state_3,
    getSize: getSize_3,
    truncateChunk: truncateChunk_3,
    addChunk: addChunk_3,
    maxBuffer: maxBuffer_3
  }) => {
    let l = getSize_3(convertedChunk_3),
      f = state_3.length + l;
    if (f <= maxBuffer_3) {
      Nn(convertedChunk_3, state_3, addChunk_3, f);
      return;
    }
    let p = truncateChunk_3(convertedChunk_3, maxBuffer_3 - state_3.length);
    if (p !== void 0) Nn(p, state_3, addChunk_3, maxBuffer_3);
    throw new Ze();
  },
  Nn = (e, n, r, o) => {
    n.contents = r(e, n, o), n.length = o;
  },
  Ko = e => typeof e === "object" && e !== null && typeof e[Symbol.asyncIterator] === "function",
  Ho = e => {
    let n = typeof e;
    if (n === "string") return "string";
    if (n !== "object" || e === null) return "others";
    if (globalThis.Buffer?.isBuffer(e)) return "buffer";
    let r = toString.call(e);
    if (r === "[object ArrayBuffer]") return "arrayBuffer";
    if (r === "[object DataView]") return "dataView";
    if (Number.isInteger(e.byteLength) && Number.isInteger(e.byteOffset) && toString.call(e.buffer) === "[object ArrayBuffer]") return "typedArray";
    return "others";
  },
  {
    toString: toString
  } = Object.prototype;
class Ze extends Error {
  name = "MaxBufferError";
  constructor() {
    super("maxBuffer exceeded");
  }
}
var string_2 = e => e,
  getFinalChunk_3 = () => {
    return;
  },
  finalize_3 = ({
    contents: contents
  }) => contents,
  others = e => {
    throw Error(`Streams in object mode are not supported: ${String(e)}`);
  },
  getSize_4 = e => e.length;
async function ot(e, n) {
  return Z(e, ti, n);
}
var init_2 = () => ({
    contents: new ArrayBuffer(0)
  }),
  string = e => textEncoder.encode(e),
  textEncoder = new TextEncoder(),
  Gn = e => new Uint8Array(e),
  Fn = e => new Uint8Array(e.buffer, e.byteOffset, e.byteLength),
  truncateChunk_4 = (e, n) => e.slice(0, n),
  addChunk_4 = (e, {
    contents: contents_2,
    length: length_4
  }, o) => {
    let s = $n() ? Qo(contents_2, o) : Zo(contents_2, o);
    return new Uint8Array(s).set(e, length_4), s;
  },
  Zo = (e, n) => {
    if (n <= e.byteLength) return e;
    let arrayBuffer = new ArrayBuffer(kn(n));
    return new Uint8Array(arrayBuffer).set(new Uint8Array(e), 0), arrayBuffer;
  },
  Qo = (e, n) => {
    if (n <= e.maxByteLength) return e.resize(n), e;
    let arrayBuffer_2 = new ArrayBuffer(n, {
      maxByteLength: kn(n)
    });
    return new Uint8Array(arrayBuffer_2).set(new Uint8Array(e), 0), arrayBuffer_2;
  },
  kn = e => Ln ** Math.ceil(Math.log(e) / Math.log(Ln)),
  Ln = 2,
  finalize_2 = ({
    contents: contents_3,
    length: length_5
  }) => $n() ? contents_3 : contents_3.slice(0, length_5),
  $n = () => "resize" in ArrayBuffer.prototype,
  ti = {
    init: init_2,
    convertChunk: {
      string: string,
      buffer: Gn,
      arrayBuffer: Gn,
      dataView: Fn,
      typedArray: Fn,
      others: others
    },
    getSize: getSize_4,
    truncateChunk: truncateChunk_4,
    addChunk: addChunk_4,
    getFinalChunk: getFinalChunk_3,
    finalize: finalize_2
  };
async function Te(e, n) {
  if (!("Buffer" in globalThis)) throw Error("getStreamAsBuffer() is only supported in Node.js");
  try {
    return Mn(await ot(e, n));
  } catch (error) {
    if (error.bufferedData !== void 0) error.bufferedData = Mn(error.bufferedData);
    throw error;
  }
}
var Mn = e => globalThis.Buffer.from(e);
async function it(e, n) {
  return Z(e, si, n);
}
var init_3 = () => ({
    contents: "",
    textDecoder: new TextDecoder()
  }),
  Ce = (e, {
    textDecoder: textDecoder
  }) => textDecoder.decode(e, {
    stream: !0
  }),
  addChunk_5 = (e, {
    contents: contents_4
  }) => contents_4 + e,
  truncateChunk_5 = (e, n) => e.slice(0, n),
  getFinalChunk_4 = ({
    textDecoder: textDecoder_2
  }) => {
    let n = textDecoder_2.decode();
    return n === "" ? void 0 : n;
  },
  si = {
    init: init_3,
    convertChunk: {
      string: string_2,
      buffer: Ce,
      arrayBuffer: Ce,
      dataView: Ce,
      typedArray: Ce,
      others: others
    },
    getSize: getSize_4,
    truncateChunk: truncateChunk_5,
    addChunk: addChunk_5,
    getFinalChunk: getFinalChunk_4,
    finalize: finalize_3
  };
var Bn = be(Un(), 1),
  jn = e => {
    if (e !== void 0) throw TypeError("The `input` and `inputFile` options cannot be both set.");
  },
  fi = ({
    input: input,
    inputFile: inputFile
  }) => {
    if (typeof inputFile !== "string") return input;
    return jn(input), ui(inputFile);
  },
  Wn = e => {
    let n = fi(e);
    if (Se(n)) throw TypeError("The `input` option cannot be a stream in sync mode");
    return n;
  },
  pi = ({
    input: input_2,
    inputFile: inputFile_2
  }) => {
    if (typeof inputFile_2 !== "string") return input_2;
    return jn(input_2), ai(inputFile_2);
  },
  Kn = (e, n) => {
    let r = pi(n);
    if (r === void 0) return;
    if (Se(r)) r.pipe(e.stdin);else e.stdin.end(r);
  },
  Hn = (e, {
    all: all_2
  }) => {
    if (!all_2 || !e.stdout && !e.stderr) return;
    let r = Bn.default();
    if (e.stdout) r.add(e.stdout);
    if (e.stderr) r.add(e.stderr);
    return r;
  },
  ct = async (e, n) => {
    if (!e || n === void 0) return;
    await li(0), e.destroy();
    try {
      return await n;
    } catch (error) {
      return error.bufferedData;
    }
  },
  at = (e, {
    encoding: encoding,
    buffer: buffer,
    maxBuffer: maxBuffer_4
  }) => {
    if (!e || !buffer) return;
    if (encoding === "utf8" || encoding === "utf-8") return it(e, {
      maxBuffer: maxBuffer_4
    });
    if (encoding === null || encoding === "buffer") return Te(e, {
      maxBuffer: maxBuffer_4
    });
    return mi(e, maxBuffer_4, encoding);
  },
  mi = async (e, maxBuffer_5, r) => (await Te(e, {
    maxBuffer: maxBuffer_5
  })).toString(r),
  Vn = async ({
    stdout: stdout_2,
    stderr: stderr_2,
    all: all_3
  }, {
    encoding: encoding_2,
    buffer: buffer_2,
    maxBuffer: maxBuffer_6
  }, l) => {
    let f = at(stdout_2, {
        encoding: encoding_2,
        buffer: buffer_2,
        maxBuffer: maxBuffer_6
      }),
      p = at(stderr_2, {
        encoding: encoding_2,
        buffer: buffer_2,
        maxBuffer: maxBuffer_6
      }),
      g = at(all_3, {
        encoding: encoding_2,
        buffer: buffer_2,
        maxBuffer: maxBuffer_6 * 2
      });
    try {
      return await Promise.all([l, f, p, g]);
    } catch (error_3) {
      return Promise.all([{
        error: error_3,
        signal: error_3.signal,
        timedOut: error_3.timedOut
      }, ct(stdout_2, f), ct(stderr_2, p), ct(all_3, g)]);
    }
  };
var gi = (async () => {})().constructor.prototype,
  hi = ["then", "catch", "finally"].map(item => [item, Reflect.getOwnPropertyDescriptor(gi, item)]),
  ut = (e, n) => {
    for (let [r, o] of hi) {
      let value_2 = typeof n === "function" ? (...u) => Reflect.apply(o.value, n(), u) : o.value.bind(n);
      Reflect.defineProperty(e, r, {
        ...o,
        value: value_2
      });
    }
  },
  Yn = e => new Promise((n, r) => {
    if (e.on("exit", (exitCode_3, signal_4) => {
      n({
        exitCode: exitCode_3,
        signal: signal_4
      });
    }), e.on("error", o => {
      r(o);
    }), e.stdin) e.stdin.on("error", o => {
      r(o);
    });
  });
import { Buffer as yi } from "buffer";
import { ChildProcess as Si } from "child_process";
var qn = (e, n = []) => {
    if (!Array.isArray(n)) return [e];
    return [e, ...n];
  },
  Ei = /^[\w.-]+$/,
  xi = e => {
    if (typeof e !== "string" || Ei.test(e)) return e;
    return `"${e.replaceAll('"', "\\\"")}"`;
  },
  dt = (e, n) => qn(e, n).join(" "),
  lt = (e, n) => qn(e, n).map(item => xi(item)).join(" "),
  Ti = / +/g;
var zn = e => {
    let n = typeof e;
    if (n === "string") return e;
    if (n === "number") return String(e);
    if (n === "object" && e !== null && !(e instanceof Si) && "stdout" in e) {
      let r = typeof e.stdout;
      if (r === "string") return e.stdout;
      if (yi.isBuffer(e.stdout)) return e.stdout.toString();
      throw TypeError(`Unexpected "${r}" stdout in template expression`);
    }
    throw TypeError(`Unexpected "${n}" in template expression`);
  },
  Jn = (e, n, r) => r || e.length === 0 || n.length === 0 ? [...e, ...n] : [...e.slice(0, -1), `${e.at(-1)}${n[0]}`, ...n.slice(1)],
  Ci = ({
    templates: templates,
    expressions: expressions,
    tokens: tokens,
    index: index,
    template: template
  }) => {
    let u = template ?? templates.raw[index],
      l = u.split(Ti).filter(Boolean),
      f = Jn(tokens, l, u.startsWith(" "));
    if (index === expressions.length) return f;
    let p = expressions[index],
      g = Array.isArray(p) ? p.map(item => zn(item)) : [zn(p)];
    return Jn(f, g, u.endsWith(" "));
  },
  ft = (templates_2, expressions_2) => {
    let tokens_2 = [];
    for (let [index_2, template_2] of templates_2.entries()) tokens_2 = Ci({
      templates: templates_2,
      expressions: expressions_2,
      tokens: tokens_2,
      index: index_2,
      template: template_2
    });
    return tokens_2;
  };
import { debuglog as _i } from "util";
import bi from "process";
var Xn = _i("execa").enabled,
  _e = (e, n) => String(e).padStart(n, "0"),
  wi = () => {
    let date = new Date();
    return `${_e(date.getHours(), 2)}:${_e(date.getMinutes(), 2)}:${_e(date.getSeconds(), 2)}.${_e(date.getMilliseconds(), 3)}`;
  },
  pt = (e, {
    verbose: verbose
  }) => {
    if (!verbose) return;
    bi.stderr.write(`[${wi()}] ${e}
`);
  };
var maxBuffer_7 = 1e8,
  Ri = ({
    env: env_4,
    extendEnv: extendEnv,
    preferLocal: preferLocal_2,
    localDir: o,
    execPath: execPath_2
  }) => {
    let env_5 = extendEnv ? {
      ...we.env,
      ...env_4
    } : env_4;
    if (preferLocal_2) return fn({
      env: env_5,
      cwd: o,
      execPath: execPath_2
    });
    return env_5;
  },
  er = (file, args_2, options_2 = {}) => {
    let parsed = Qn.default._parse(file, args_2, options_2);
    if (file = parsed.command, args_2 = parsed.args, options_2 = parsed.options, options_2 = {
      maxBuffer: maxBuffer_7,
      buffer: !0,
      stripFinalNewline: !0,
      extendEnv: !0,
      preferLocal: !1,
      localDir: options_2.cwd || we.cwd(),
      execPath: we.execPath,
      encoding: "utf8",
      reject: !0,
      cleanup: !0,
      all: !1,
      windowsHide: !0,
      verbose: Xn,
      ...options_2
    }, options_2.env = Ri(options_2), options_2.stdio = xn(options_2), we.platform === "win32" && Ii.basename(file, ".exe") === "cmd") args_2.unshift("/q");
    return {
      file: file,
      args: args_2,
      options: options_2,
      parsed: parsed
    };
  },
  Q = (e, n, r) => {
    if (typeof n !== "string" && !Oi.isBuffer(n)) return r === void 0 ? void 0 : "";
    if (e.stripFinalNewline) return Be(n);
    return n;
  };
function A(e, n, r) {
  let parsed_2 = er(e, n, r),
    command_3 = dt(e, n),
    escapedCommand_2 = lt(e, n);
  pt(escapedCommand_2, parsed_2.options), In(parsed_2.options);
  let l;
  try {
    l = mt.spawn(parsed_2.file, parsed_2.args, parsed_2.options);
  } catch (error_4) {
    let T = new mt.ChildProcess(),
      w = Promise.reject(J({
        error: error_4,
        stdout: "",
        stderr: "",
        all: "",
        command: command_3,
        escapedCommand: escapedCommand_2,
        parsed: parsed_2,
        timedOut: !1,
        isCanceled: !1,
        killed: !1
      }));
    return ut(T, w), T;
  }
  let f = Yn(l),
    p = On(l, parsed_2.options, f),
    g = Pn(l, parsed_2.options, p),
    h = {
      isCanceled: !1
    };
  l.kill = bn.bind(null, l.kill.bind(l)), l.cancel = wn.bind(null, l, h);
  let E = gn(async () => {
    let [{
        error: error_5,
        exitCode: exitCode_4,
        signal: signal_5,
        timedOut: timedOut_3
      }, F, L, M] = await Vn(l, parsed_2.options, g),
      stdout_3 = Q(parsed_2.options, F),
      stderr_3 = Q(parsed_2.options, L),
      all_4 = Q(parsed_2.options, M);
    if (error_5 || exitCode_4 !== 0 || signal_5 !== null) {
      let H = J({
        error: error_5,
        exitCode: exitCode_4,
        signal: signal_5,
        stdout: stdout_3,
        stderr: stderr_3,
        all: all_4,
        command: command_3,
        escapedCommand: escapedCommand_2,
        parsed: parsed_2,
        timedOut: timedOut_3,
        isCanceled: h.isCanceled || (parsed_2.options.signal ? parsed_2.options.signal.aborted : !1),
        killed: l.killed
      });
      if (!parsed_2.options.reject) return H;
      throw H;
    }
    return {
      command: command_3,
      escapedCommand: escapedCommand_2,
      exitCode: 0,
      stdout: stdout_3,
      stderr: stderr_3,
      all: all_4,
      failed: !1,
      timedOut: !1,
      isCanceled: !1,
      killed: !1
    };
  });
  return Kn(l, parsed_2.options), l.all = Hn(l, parsed_2.options), Rn(l), ut(l, E), l;
}
function ee(e, n, r) {
  let parsed_3 = er(e, n, r),
    command_4 = dt(e, n),
    escapedCommand_3 = lt(e, n);
  pt(escapedCommand_3, parsed_3.options);
  let input_3 = Wn(parsed_3.options),
    f;
  try {
    f = mt.spawnSync(parsed_3.file, parsed_3.args, {
      ...parsed_3.options,
      input: input_3
    });
  } catch (error_6) {
    throw J({
      error: error_6,
      stdout: "",
      stderr: "",
      all: "",
      command: command_4,
      escapedCommand: escapedCommand_3,
      parsed: parsed_3,
      timedOut: !1,
      isCanceled: !1,
      killed: !1
    });
  }
  let stdout_4 = Q(parsed_3.options, f.stdout, f.error),
    stderr_4 = Q(parsed_3.options, f.stderr, f.error);
  if (f.error || f.status !== 0 || f.signal !== null) {
    let h = J({
      stdout: stdout_4,
      stderr: stderr_4,
      error: f.error,
      signal: f.signal,
      exitCode: f.status,
      command: command_4,
      escapedCommand: escapedCommand_3,
      parsed: parsed_3,
      timedOut: f.error && f.error.code === "ETIMEDOUT",
      isCanceled: !1,
      killed: f.signal !== null
    });
    if (!parsed_3.options.reject) return h;
    throw h;
  }
  return {
    command: command_4,
    escapedCommand: escapedCommand_3,
    exitCode: 0,
    stdout: stdout_4,
    stderr: stderr_4,
    failed: !1,
    timedOut: !1,
    isCanceled: !1,
    killed: !1
  };
}
var Ni = ({
    input: input_4,
    inputFile: inputFile_3,
    stdio: stdio_2
  }) => input_4 === void 0 && inputFile_3 === void 0 && stdio_2 === void 0 ? {
    stdin: "inherit"
  } : {},
  Zn = (e = {}) => ({
    preferLocal: !0,
    ...Ni(e),
    ...e
  });
function tr(e) {
  function n(r, ...o) {
    if (!Array.isArray(r)) return tr({
      ...e,
      ...r
    });
    let [s, ...u] = ft(r, o);
    return A(s, u, Zn(e));
  }
  return n.sync = (r, ...o) => {
    if (!Array.isArray(r)) throw TypeError("Please use $(options).sync`command` instead of $.sync(options)`command`.");
    let [s, ...u] = ft(r, o);
    return ee(s, u, Zn(e));
  }, n;
}
var Da = tr();
import { basename as $s } from "path";
import { homedir as vi } from "os";
import { sep as Ai } from "path";
var Oe = "<user-code>";
function Gi() {
  try {
    return vi();
  } catch {
    return "";
  }
}
var nr = "cli",
  rr = new Set(["cli.js", nr, "sdk.mjs", "browser-sdk.js", "agentSdk.js"]),
  or = /^chunk-[0-9a-z]+\.js$/;
function ir(e) {
  return e[0] === "/" && or.test(e.slice(1));
}
function sr(e) {
  return ir(e) || e[0] === "/" && rr.has(e.slice(1));
}
function oUo(e) {
  return ir(e) ? "/" + nr : e;
}
var Fi = /^(?:\/(?:\$bunfs|~BUN)|\/?[A-Za-z]:[\\/](?:\$bunfs|~BUN))[\\/]/;
function cr(e) {
  let n = e.startsWith("file://") ? e.slice(7) : e;
  return Fi.test(n);
}
function Li(e) {
  let n = e;
  if (n.startsWith("file://")) n = n.slice(7);
  if (cr(n)) return ar(n);
  if (n.startsWith("/snapshot/")) n = n.slice(10);
  let r = Gi();
  if (r && n.startsWith(r + Ai)) n = "~" + n.slice(r.length);
  return n;
}
var ki = ["src/", "packages/"];
function ar(e) {
  let n = Math.max(e.lastIndexOf("/"), e.lastIndexOf("\\"));
  return n === -1 ? e : e.slice(n + 1);
}
function sUo(e) {
  return sr(e.file) || ki.some(item => e.file.startsWith(item));
}
var $i = ["node:", "bun:", "internal:"],
  Mi = new Set(["native", "unknown", "ws", "undici", "node-fetch", "isomorphic-fetch", "vercel_fetch", "utf-8-validate"]);
function ur(e) {
  return Mi.has(e) || $i.some(item => e.startsWith(item));
}
function Di(e) {
  return ur(e.file);
}
function iUo(e) {
  let n = e.find(item => !Di(item));
  if (n === void 0) return e.length >= dr;
  return n.file === Oe || n.file.startsWith("node_modules/");
}
function aUo(e) {
  return sr(e.file) && (e.function == null || e.function === "<anonymous>");
}
function Ui(e) {
  let n = e.split(/[/\\]/),
    r = -1;
  for (let l = n.length - 1; l >= 0; l--) if (n[l] === "node_modules") {
    r = l;
    break;
  }
  if (r === -1 || r >= n.length - 1) return null;
  let o = n[r + 1],
    s;
  if (o.startsWith("@")) {
    if (r + 2 >= n.length) return null;
    s = `${o}/${n[r + 2]}`;
  } else s = o;
  let u = n.at(-1);
  if (!u) return null;
  return `node_modules/${s}/${u}`;
}
function Bi(e) {
  let n = Li(e),
    r = ar(n),
    o = Ui(n);
  if (rr.has(r) && (o === null || o.startsWith("node_modules/@anthropic-ai/")) || cr(e) && or.test(r)) return "/" + r;
  let s = null;
  if (s) return s;
  if (ur(n)) return n;
  if (o) return o;
  return Oe;
}
function ji(e) {
  let n = e.trim();
  if (!n.startsWith("at ")) return null;
  let r = n.slice(3),
    o = r.indexOf(" ("),
    s,
    u;
  if (o !== -1 && r.endsWith(")")) s = r.slice(0, o).trim(), u = r.slice(o + 2, -1);else u = r.trim();
  if (s) {
    if (s = s.replace(/^async\s+/, "").replace(/^new\s+/, ""), s = s.replace(/\s*\[as\s+[^\]]+\]$/, ""), !s) s = void 0;
  }
  let l = u.match(/^(.*):(\d+):(\d+)$/);
  if (!l) return null;
  let [, f, p, g] = l,
    file_2 = Bi(f);
  return {
    file: file_2,
    line: Number(p),
    column: Number(g),
    function: file_2 === Oe && s ? Oe : s
  };
}
var dr = 50;
function yzr(e, n = dr) {
  let r = [];
  for (let o of f5n(e).split(`
`)) {
    let s = ji(o);
    if (s) {
      if (r.push(s), r.length >= n) break;
    }
  }
  return r;
}
function f5n(e) {
  let n = typeof e.stack === "string" ? e.stack : "",
    r = typeof e.message === "string" ? e.message : "",
    o = Wi(n, e.name, r);
  return o === -1 ? n : n.slice(o + 1);
}
function Wi(e, n, r) {
  let o = u => u !== "" && e.startsWith(`${u}
`);
  if (r !== "") {
    let u = typeof n === "string" && n !== "" ? `${n}: ${r}` : "";
    if (u !== "" && o(u)) return u.length;
    let l = `: ${r}`,
      f = e.indexOf(`${l}
`);
    return f > 0 && !e.slice(0, f).includes(`
`) ? f + l.length : n === "" && o(r) ? r.length : -1;
  }
  let s = n === void 0 ? "Error" : typeof n === "string" ? n : typeof n === "number" || typeof n === "boolean" || typeof n === "bigint" || n === null ? String(n) : "";
  return o(s) ? s.length : -1;
}
function lr(e, n) {
  try {
    let r = typeof e.stack === "string" ? e.stack : "",
      o = f5n(e),
      u = o.length < r.length && r.endsWith(o) ? o.replace(/\n$/, "").split(`
`) : [],
      l = u.every(item => item.trimStart().startsWith("at ")) ? u : [];
    e.stack = [`${e.name}: ${n}`, ...l].join(`
`), e.message = n;
  } catch {}
  return e;
}
function lUo(e, n) {
  return [`${e.name}: ${e.message}`, ...n.map(item => {
    let o = `${item.file}${item.line ? `:${item.line}` : ""}${item.column ? `:${item.column}` : ""}`;
    return item.function ? `    at ${item.function} (${o})` : `    at ${o}`;
  })].join(`
`);
}
import { mkdir as Ji } from "fs/promises";
import { basename as pr, delimiter as Ie, dirname as gt, resolve as qi } from "path";
var mn = Object.freeze(["-c", "core.hooksPath=/dev/null", "-c", "core.fsmonitor="]),
  vb = "--ignore-submodules=dirty",
  aK = Object.freeze(["status", "--porcelain", "--untracked-files=normal", "--ignore-submodules=dirty"]),
  ne = Object.freeze({
    GIT_LFS_SKIP_SMUDGE: "1"
  }),
  Ki = Object.freeze({
    GIT_ALLOW_PROTOCOL: "none",
    GIT_NO_LAZY_FETCH: "1",
    GIT_NO_REPLACE_OBJECTS: "1",
    GIT_TERMINAL_PROMPT: "0",
    ...ne
  }),
  Hi = Object.freeze({
    GIT_SSH_COMMAND: "false"
  }),
  ahn = 2000,
  lhn = Object.freeze([...mn, "-c", "safe.bareRepository=explicit", "-c", "protocol.file.allow=never"]),
  chn = ["GIT_DIR", "GIT_WORK_TREE", "GIT_COMMON_DIR", "GIT_INDEX_FILE", "GIT_CEILING_DIRECTORIES", "GIT_DISCOVERY_ACROSS_FILESYSTEM", "GIT_OBJECT_DIRECTORY", "GIT_ALTERNATE_OBJECT_DIRECTORIES", "GIT_SHALLOW_FILE", "GIT_NAMESPACE", "GIT_IMPLICIT_WORK_TREE"],
  YUe = [...chn, "GIT_CONFIG_COUNT", "GIT_CONFIG_PARAMETERS", "GIT_CONFIG_GLOBAL", "GIT_CONFIG_SYSTEM", "GIT_CONFIG"],
  Vi = /^GIT_CONFIG_(KEY|VALUE)_\d+$/,
  regExp = new RegExp(Vi.source, "i"),
  Yi = new Set(YUe);
function No(e, n = {}) {
  let r = e?.GIT_ALLOW_PROTOCOL?.split(":").includes("ssh") ?? !1;
  return fr({
    ...Ki,
    ...(!r && Hi)
  }, e, n);
}
function dhn(e, n = {}) {
  let r = fr({}, e, n);
  for (let o of zi) if (!(o in r)) r[o] = void 0;
  return r;
}
var zi = ["GIT_LFS_SKIP_SMUDGE", "GIT_NO_LAZY_FETCH", "GIT_NO_REPLACE_OBJECTS"];
function fr(e, n, {
  base = process.env,
  repository: repository
}) {
  let s = {
      ...e,
      ...(repository !== void 0 && {
        GIT_DIR: repository.gitDir,
        GIT_COMMON_DIR: repository.commonDir
      }),
      ...(repository !== void 0 && (repository.workTree !== null ? {
        GIT_WORK_TREE: repository.workTree
      } : {
        GIT_IMPLICIT_WORK_TREE: "0"
      })),
      ...n
    },
    u = {};
  for (let f of YUe) u[f] = void 0;
  let l = new Set(Object.keys(s).map(item => item.toUpperCase()));
  for (let f of Object.keys(base)) {
    let p = f.toUpperCase();
    if (Yi.has(p) || regExp.test(f) || l.has(p) && !(f in s)) u[f] = void 0;
  }
  return {
    ...base,
    ...u,
    ...s
  };
}
function J8e() {
  return a.CLAUDE_CODE_REMOTE || a.CLAUDE_CODE_PLUGIN_PREFER_HTTPS;
}
var tre = "--upload-pack=git-upload-pack";
function m5n() {
  return O() === "windows" ? "\\\\.\\NUL" : "/dev/null";
}
var Xi = /^core\.hooksPath=(?:\/dev\/null|\\\\\.\\nul)$/i;
function txe() {
  return [["core.fsmonitor", ""], ["core.hooksPath", m5n()], ["core.askPass", ""], ["protocol.ext.allow", "never"], ["submodule.recurse", "false"], ["log.showSignature", "false"], ["gc.auto", "0"], ["maintenance.auto", "false"]];
}
var Zi = new Set(["core.hooksPath", "core.askPass", "submodule.recurse"]),
  g5n = {
    GIT_NO_LAZY_FETCH: "1",
    GIT_NO_REPLACE_OBJECTS: "1",
    GIT_TERMINAL_PROMPT: "0",
    ...ne
  };
function _zr(e, {
  allowGitTerminalPrompt = !1
} = {}) {
  return Qr(g5n, (r, o) => !(allowGitTerminalPrompt && o === "GIT_TERMINAL_PROMPT") && !ts(e, o));
}
function XUe(e, n, r, o = r.GIT_CONFIG_COUNT, {
  allowRepoGitHooks = !1,
  allowGitTerminalPrompt: allowGitTerminalPrompt_2 = !1
} = {}) {
  let l = pr(e).toLowerCase();
  if (!/^git(\.exe|\.cmd|\.bat|\.com)?$/.test(l)) return null;
  let f = allowRepoGitHooks ? txe().filter(([g]) => !Zi.has(g)) : txe(),
    p = mr(n).map(item => n[item]);
  return {
    args: f.filter(([g]) => !p.some(item => item.startsWith(`${g}=`))).flatMap(([g, h]) => ["-c", `${g}=${h}`]).concat(es(n)),
    env: {
      ...r,
      ..._zr(r, {
        allowGitTerminalPrompt: allowGitTerminalPrompt_2
      }),
      ...QN(o, f),
      GIT_PROXY_COMMAND: r.GIT_PROXY_COMMAND ?? ""
    }
  };
}
var Qi = new Set(["-C", "--git-dir", "--work-tree", "--namespace", "--super-prefix", "--config-env", "--attr-source", "--exec-path"]);
function mr(e) {
  let n = [],
    r = 0;
  while (r < e.length) {
    let o = e[r];
    if (o === "-c" && r + 1 < e.length) n.push(r + 1), r += 2;else if (Qi.has(o) && r + 1 < e.length) r += 2;else if (o.startsWith("-")) r += 1;else break;
  }
  return n;
}
function es(e) {
  let n = [...e];
  for (let r of mr(n)) if (Xi.test(n[r])) n[r] = `core.hooksPath=${m5n()}`;
  return n;
}
var lK = {
  GIT_TERMINAL_PROMPT: "0",
  GIT_ASKPASS: "",
  GCM_INTERACTIVE: "never"
};
function cUo(e) {
  let n = {};
  for (let [r, o] of Object.entries(lK)) if (JN(e, r) === void 0) n[r] = o;
  return n;
}
function Q8e(e = process.env) {
  return {
    ...e,
    ...B(e, (n, r) => Object.hasOwn(lK, n) && r !== n),
    ...lK,
    ...QN(JN(e, "GIT_CONFIG_COUNT"), [["credential.interactive", "false"]], e)
  };
}
function B(e, n) {
  let r = {};
  for (let o of Object.keys(e)) if (n(o.toUpperCase(), o)) r[o] = void 0;
  return r;
}
function JN(e, n) {
  if (e[n] !== void 0 || O() !== "windows") return e[n];
  for (let [r, o] of Object.entries(e)) if (r.toUpperCase() === n && o !== void 0) return o;
  return;
}
function ts(e, n) {
  if (Object.hasOwn(e, n)) return !0;
  return O() === "windows" && Object.keys(e).some(item => item.toUpperCase() === n);
}
function QN(e, n, r = {}) {
  let o = Number(e),
    s = Number.isInteger(o) && o > 0 ? o : 0,
    u = {
      GIT_CONFIG_COUNT: String(s + n.length)
    };
  n.forEach(([f, p], index) => {
    u[`GIT_CONFIG_KEY_${s + index}`] = f, u[`GIT_CONFIG_VALUE_${s + index}`] = p;
  });
  let l = new Set(Object.keys(u));
  return {
    ...B(r, (f, p) => l.has(f) && !l.has(p)),
    ...u
  };
}
var nxe = ["-c", "core.sshCommand=ssh -o BatchMode=yes -o StrictHostKeyChecking=yes"],
  ns = "-o BatchMode=yes -o StrictHostKeyChecking=yes";
function bzr(e) {
  let n = JN(e, "GIT_SSH_COMMAND"),
    r = JN(e, "GIT_SSH");
  if (n === void 0 && r === void 0) return e;
  let o = n !== void 0 ? os(n) : r ?? "";
  if (rs(e, o) !== "ssh") return e;
  let s = n !== void 0 && n.trim() !== "" ? n : r !== void 0 && r.trim() !== "" ? Yr([r]) : "ssh";
  return {
    ...e,
    ...B(e, u => u === "GIT_SSH_COMMAND" || u === "GIT_SSH"),
    GIT_SSH: void 0,
    GIT_SSH_COMMAND: `${s} ${ns}`
  };
}
function rs(e, n) {
  let r = JN(e, "GIT_SSH_VARIANT")?.trim().toLowerCase();
  if (r !== void 0 && r !== "" && r !== "auto") return r === "ssh" ? "ssh" : "other";
  return pr(n.trim().replace(/\\/g, "/")).toLowerCase().replace(/\.exe$/, "") === "ssh" ? "ssh" : "other";
}
function os(e) {
  let n = e.trim().match(/^(?:"([^"]*)"|'([^']*)'|(\S+))/);
  return n?.[1] ?? n?.[2] ?? n?.[3] ?? "";
}
var is = ["-c", "protocol.ext.allow=never", "-c", "protocol.fd.allow=never", "-c", "protocol.git.allow=never", "-c", "protocol.ftp.allow=never", "-c", "protocol.ftps.allow=never"];
function ss(e) {
  return {
    ...e,
    ...B(e, n => n === "GIT_ALLOW_PROTOCOL"),
    GIT_ALLOW_PROTOCOL: void 0
  };
}
function cs(e) {
  let n = JN(e, "GIT_ALLOW_PROTOCOL");
  if (n === void 0) return [];
  let r = new Set(n.split(":"));
  return ["https", "http", "ssh", "file"].filter(item => !r.has(item)).flatMap(item => ["-c", `protocol.${item}.allow=never`]);
}
function us(e) {
  return [...is, ...cs(e)];
}
function ds(e = Q8e(ls())) {
  let pinArgs = us(e);
  return {
    pinArgs: pinArgs,
    inCheckoutArgs: [...mn, ...nxe, ...pinArgs],
    env: {
      ...bzr(ss(e)),
      ...B(e, (r, o) => Object.hasOwn(ne, r) && o !== r),
      ...ne
    }
  };
}
function ls() {
  let e = new Set(chn),
    env_6 = process.env;
  return {
    ...env_6,
    ...B(env_6, r => e.has(r)),
    ...Object.fromEntries([...e].map(item => [item, void 0]))
  };
}
function rxe(e) {
  let n = ds();
  return {
    ...n,
    env: {
      ...n.env,
      GIT_CEILING_DIRECTORIES: gr(gt(e))
    }
  };
}
function uhn(e) {
  let n = {};
  for (let r of [...Object.keys(lK), "GIT_CEILING_DIRECTORIES"]) {
    let o = e[r];
    if (o !== void 0) n[r] = o;
  }
  return n;
}
function gr(e) {
  if (e = qi(e), e.includes(Ie)) throw new P(`Cannot run git under ${e}: its path contains "${Ie}", which git's discovery ceiling (a "${Ie}"-separated list) cannot express. Use a location without "${Ie}" for this directory (the plugins cache \u2014 CLAUDE_CODE_PLUGIN_CACHE_DIR \u2014 or the temporary directory \u2014 TMPDIR \u2014 whichever this path is under).`, "git working directory path contains the PATH delimiter; git discovery ceiling inexpressible");
  return e;
}
async function phn(e, n) {
  let cwd_3 = gt(e);
  return await Ji(cwd_3, {
    recursive: !0
  }), {
    cwd: cwd_3,
    env: {
      ...n,
      GIT_CEILING_DIRECTORIES: gr(gt(cwd_3))
    }
  };
}
import { mkdirSync, readFileSync as W, rmdirSync, statSync as fs, writeFileSync } from "fs";
import { totalmem as ps } from "os";
import { posix as I } from "path";
var ht = "claude-code-bash",
  ms = "claude-code-keeper",
  Sr = 1073741824,
  gs = Sr,
  yt = ["mcp", "lsp", "hooks", "plugin", "tmux", "helper", "agent"];
class Er {
  reader = null;
  subscribeRefresh = null;
  register(e) {
    let reader = this.reader;
    return this.reader = e, reader;
  }
  read(e, n) {
    return this.reader ? this.reader(e, n) : n;
  }
}
var j = new Er();
function dUo(e, n) {
  if (n !== void 0) j.subscribeRefresh = n;
  return j.register(e);
}
class xr {
  dir = void 0;
  layout = void 0;
  limit = 0;
  activatedClasses = new Set();
  pendingPids = new Map();
  pendingUnsubscribe = void 0;
  oomKillsSeen = void 0;
}
var R = new q(() => new xr());
function Et() {
  let e = di(R);
  if (e.dir !== void 0) return e.dir ?? void 0;
  let n = O();
  if (n !== "linux" && n !== "wsl") {
    e.dir = null;
    return;
  }
  let r = a.CLAUDE_CODE_TOOL_MEMORY_LIMIT?.trim().toLowerCase();
  if (r && (zo(r) || r === "none")) {
    e.dir = null;
    return;
  }
  let o = Fs(r);
  if (o === void 0 && j.read("tengu_tool_memory_cgroup", !1) !== !0) return;
  try {
    let s = Is(W("/proc/self/cgroup", "utf8"));
    if (!s) throw Error("no memory cgroup hierarchy");
    let limit_bytes = Gs(o, ps());
    if (limit_bytes === void 0) {
      e.dir = null, t("tool cgroup: disabled (host too small for the default cap)"), i("tengu_tool_cgroup", {
        status: y("host_too_small")
      });
      return;
    }
    Or(s, limit_bytes), e.dir = s.dir, e.layout = s, e.limit = limit_bytes, t(`tool cgroup: ${s.dir} ${s.reuse ? "(nested: already capped, reusing our own)" : `limit=${limit_bytes}`}`), _("shell_memory_cgroup"), i("tengu_tool_cgroup", s.reuse ? {
      status: y("nested")
    } : {
      status: y("enabled"),
      limit_bytes: limit_bytes
    });
  } catch (error) {
    e.dir = null, t(`tool cgroup: disabled (${v(error) ?? error})`), m("shell_memory_cgroup", ao(error) ?? "no_hierarchy"), i("tengu_tool_cgroup", {
      status: y("disabled")
    });
  }
  return e.dir ?? void 0;
}
function re(e) {
  if (Et() === void 0) return;
  if (e !== "shell" && Tr().has(e)) return;
  let n = di(R),
    r = hs(n);
  if (r === void 0) return;
  if (br(n), !n.activatedClasses.has(e)) n.activatedClasses.add(e), i("tengu_tool_cgroup", {
    status: y("class_enabled"),
    class: c(e)
  });
  return r;
}
function uUo(e) {
  return typeof di(R).dir === "string" && (e === "shell" || !Tr().has(e));
}
function hs(e, n = {
  exists: exists,
  mkdirSync: mkdirSync,
  writeFileSync: writeFileSync,
  rmdirSync: rmdirSync
}) {
  if (e.dir === void 0 || e.dir === null) return;
  try {
    if (n.exists(e.dir)) return e.dir;
    if (e.layout === void 0 || e.layout.reuse) throw Error("enclosing tool cgroup is gone");
    return Or(e.layout, e.limit, n), t(`tool cgroup: ${e.dir} vanished; re-created`), i("tengu_tool_cgroup", {
      status: y("recreated")
    }), e.dir;
  } catch (error) {
    e.dir = null, t(`tool cgroup: disabled (dir vanished: ${v(error) ?? error})`), i("tengu_tool_cgroup", {
      status: y("vanished")
    });
    return;
  }
}
function exists(e) {
  return fs(e, {
    throwIfNoEntry: !1
  }) !== void 0;
}
function Tr() {
  let e = a.CLAUDE_CODE_TOOL_MEMORY_CGROUP_EXCLUDE?.trim(),
    n = Ss(e);
  if (n.has("mcp") || !Es(!e)) return n;
  return new Set([...n, "mcp"]);
}
function Ss(e) {
  if (e) return hr(e.split(","));
  let n = j.read("tengu_tool_cgroup_exclude_classes", null);
  if (Array.isArray(n)) return hr(n);
  return new Set(yt);
}
function Es(e) {
  let n = a.CLAUDE_CODE_MCP_MEMORY_CGROUP?.trim().toLowerCase();
  if (n && (zo(n) || n === "none")) return !0;
  return e && j.read("tengu_mcp_memory_cgroup", null) === !1;
}
function hr(e) {
  let n = new Set();
  for (let r of e) {
    let o = typeof r === "string" ? r.trim().toLowerCase() : "";
    if (o === "all-new") {
      yt.forEach(item => n.add(item));
      continue;
    }
    let s = yt.find(item => item === o);
    if (s !== void 0) n.add(s);
  }
  return n;
}
function Ea(e) {
  let cgroup = re(e);
  return cgroup === void 0 ? {} : {
    cgroup: cgroup
  };
}
function fhn(e, command_5, r) {
  let o = re(e);
  if (o === void 0) return {
    command: command_5,
    args: [...r],
    pending: Z8e(),
    capped: !1
  };
  if (I$(command_5) === null) return {
    command: command_5,
    args: [...r],
    pending: !0,
    capped: !1
  };
  return {
    pending: !1,
    capped: !0,
    command: "/bin/sh",
    args: ["-c", '{ echo 0 > "$0"/cgroup.procs; } 2>/dev/null; exec "$@"', o, command_5, ...r]
  };
}
function Z8e() {
  return di(R).dir === void 0;
}
var xs = 64,
  mhn = {
    readStarttime: readStarttime,
    writeFileSync: writeFileSync,
    readCgroupPids: readCgroupPids,
    readProcIdentity: readProcIdentity
  };
function oxe(cls, n, shouldStayUncapped, o = mhn) {
  try {
    if (!n) return;
    Et();
    let s = di(R);
    if (s.dir === null) return;
    let starttime = o.readStarttime(n);
    if (starttime === void 0) return;
    let l = {
      cls: cls,
      starttime: starttime,
      shouldStayUncapped: shouldStayUncapped
    };
    if (s.dir !== void 0) {
      Cr(n, l, o);
      return;
    }
    if (_r(s, o), s.pendingPids.size >= xs) {
      t(`tool cgroup: pending pid ${n} not parked (full)`);
      return;
    }
    s.pendingPids.set(n, l), s.pendingUnsubscribe ??= j.subscribeRefresh?.(() => Ts());
  } catch (error) {
    t(`tool cgroup: pending pid not parked (${error})`);
  }
}
function Ts(e = mhn) {
  let n = di(R);
  try {
    if (Et(), n.dir === void 0) {
      _r(n, e);
      return;
    }
    if (n.dir !== null) for (let [r, o] of n.pendingPids) Cr(r, o, e);
  } catch (error) {
    t(`tool cgroup: late attach skipped (${error})`);
  }
  n.pendingPids.clear(), n.pendingUnsubscribe?.(), n.pendingUnsubscribe = void 0;
}
function Cr(e, {
  cls: cls_2,
  starttime: starttime_2,
  shouldStayUncapped: shouldStayUncapped_2
}, s) {
  let u = re(cls_2);
  if (u === void 0 || s.readStarttime(e) !== starttime_2) return;
  try {
    if (shouldStayUncapped_2?.()) {
      t(`tool cgroup: ${cls_2} pid ${e} left uncapped`);
      return;
    }
    let l = I.join(u, "cgroup.procs");
    s.writeFileSync(l, String(e));
    let f = 1,
      layout = di(R).layout;
    if (layout !== void 0 && !layout.reuse) f += wr(e, layout.selfDir, l, s, "attached");
    t(`tool cgroup: late-attached ${cls_2} pid ${e} (${f} process${f === 1 ? "" : "es"})`);
  } catch (error) {
    t(`tool cgroup: late attach of pid ${e} failed (${v(error) ?? error})`);
  }
}
function _r(e, n) {
  for (let [r, {
    starttime: starttime_3
  }] of e.pendingPids) if (n.readStarttime(r) !== starttime_3) e.pendingPids.delete(r);
}
function readStarttime(e) {
  try {
    return tBe(W(`/proc/${e}/stat`, "utf8"));
  } catch {
    return;
  }
}
function readProcIdentity(e) {
  try {
    let n = W(`/proc/${e}/stat`, "utf8"),
      ppid = RUo(n),
      starttime_4 = tBe(n);
    return ppid === void 0 || starttime_4 === void 0 ? void 0 : {
      ppid: ppid,
      starttime: starttime_4
    };
  } catch {
    return;
  }
}
function readCgroupPids(e) {
  return W(I.join(e, "cgroup.procs"), "utf8").split(`
`).map(item => Number.parseInt(item, 10)).filter(item => !Number.isNaN(item));
}
function ws(e) {
  let n = /^oom_kill (\d+)$/m.exec(e);
  return n ? Number.parseInt(n[1], 10) : void 0;
}
function xt(e) {
  return I.join(e.dir, e.v2 ? "memory.events" : "memory.oom_control");
}
function ie(e) {
  return W(e, "utf8");
}
function Tt(e, n = ie) {
  try {
    return ws(n(e));
  } catch {
    return;
  }
}
function Szr(e = ie) {
  let {
    dir: dir,
    layout: layout_2
  } = di(R);
  if (!dir || layout_2 === void 0) return;
  return Tt(xt(layout_2), e);
}
function pUo(e, n = ie) {
  let r = di(R),
    o = e ?? r.oomKillsSeen,
    s = Szr(n);
  return br(r, n, s), o === void 0 || s === void 0 ? void 0 : s > o;
}
function br(e, n = ie, r) {
  try {
    let layout_3 = e.layout;
    if (!e.dir || layout_3 === void 0 || layout_3.reuse) return;
    let s = r ?? Tt(xt(layout_3), n);
    if (s === void 0) return;
    let oomKillsSeen = e.oomKillsSeen;
    if (e.oomKillsSeen = s, oomKillsSeen === void 0 || s <= oomKillsSeen) return;
    t(`tool cgroup: OOM killer fired ${s - oomKillsSeen} time(s) in ${layout_3.dir} since last check`), i("tengu_tool_cgroup", {
      status: y("oom_kill"),
      oom_kills: s - oomKillsSeen,
      cgroup_v2: layout_3.v2
    });
  } catch (error) {
    t(`tool cgroup: oom_kill check skipped (${error})`);
  }
}
function fUo(e, n = ie) {
  let r = re(e),
    layout_4 = di(R).layout;
  if (r === void 0 || layout_4 === void 0) return;
  let s = xt(layout_4);
  return () => Tt(s, n);
}
function mUo(e, n) {
  let r = re(e);
  if (r === void 0) return n;
  return `sh -c '{ echo $PPID > "$1"/cgroup.procs; } 2>/dev/null' sh ${Yr([r])}; ${n}`;
}
function ghn(e, n, r = mhn) {
  try {
    let o = di(R);
    if (o.dir === void 0) {
      if (o.pendingPids.get(e)?.starttime !== n) return !1;
      return o.pendingPids.delete(e), t(`tool cgroup: unparked pid ${e}; it stays uncapped`), !0;
    }
    let layout_5 = o.layout;
    if (!o.dir || layout_5 === void 0 || layout_5.reuse) return !1;
    if (r.readStarttime(e) !== n) return !1;
    let u = I.join(layout_5.selfDir, "cgroup.procs");
    r.writeFileSync(u, String(e));
    let released_count = 1 + wr(e, layout_5.dir, u, r, "released");
    return t(`tool cgroup: released pid ${e} (${released_count} process${released_count === 1 ? "" : "es"}) to ${layout_5.selfDir}`), i("tengu_tool_cgroup", {
      status: y("released"),
      released_count: released_count
    }), !0;
  } catch (error) {
    return t(`tool cgroup: release of pid ${e} failed (${v(error) ?? error})`), !1;
  }
}
function wr(e, n, r, o, s) {
  let u = 0;
  for (let {
    pid: pid,
    starttime: starttime_5
  } of Os(e, n, o)) {
    if (o.readStarttime(pid) !== starttime_5) {
      t(`tool cgroup: descendant ${pid} of pid ${e} exited or was recycled; skipped`);
      continue;
    }
    try {
      o.writeFileSync(r, String(pid)), u++;
    } catch (error) {
      t(`tool cgroup: descendant ${pid} of pid ${e} not ${s} (${v(error) ?? error})`);
    }
  }
  return u;
}
function Os(e, n, r) {
  let o;
  try {
    o = r.readCgroupPids(n);
  } catch (error) {
    return t(`tool cgroup: members of ${n} unreadable (${v(error) ?? error}); moving pid ${e} alone`), [];
  }
  let s = new Map();
  for (let pid_2 of o) {
    if (pid_2 === e) continue;
    let p;
    try {
      p = r.readProcIdentity(pid_2);
    } catch {
      p = void 0;
    }
    if (p === void 0) continue;
    let g = {
        pid: pid_2,
        starttime: p.starttime
      },
      h = s.get(p.ppid);
    if (h) h.push(g);else s.set(p.ppid, [g]);
  }
  let u = [],
    l = [e];
  for (let f = 0; f < l.length; f++) for (let p of s.get(l[f]) ?? []) u.push(p), l.push(p.pid);
  return u;
}
function Or(e, n, r = {
  mkdirSync: mkdirSync,
  writeFileSync: writeFileSync,
  rmdirSync: rmdirSync
}) {
  if (e.reuse) return;
  let o = !0;
  try {
    r.mkdirSync(e.dir);
  } catch (error) {
    if (v(error) !== "EEXIST") throw error;
    o = !1;
  }
  try {
    r.writeFileSync(I.join(e.dir, e.v2 ? "memory.max" : "memory.limit_in_bytes"), String(n));
  } catch (error) {
    if (o) try {
      r.rmdirSync?.(e.dir);
    } catch {}
    throw error;
  }
}
function Is(e) {
  let n = Ir(e);
  if (!n) return;
  return vs(n.mountRoot, n.path, n.v2 ? I.dirname(n.path) : n.path, n.v2);
}
function Ir(e) {
  let path_3;
  for (let r of e.split(`
`)) {
    let [o, s, path_2] = r.split(":");
    if (s === void 0 || path_2 === void 0) continue;
    if (s.split(",").includes("memory")) return {
      mountRoot: "/sys/fs/cgroup/memory",
      path: path_2,
      v2: !1
    };
    if (o === "0" && s === "") path_3 = path_2;
  }
  return path_3 === void 0 ? void 0 : {
    mountRoot: "/sys/fs/cgroup",
    path: path_3,
    v2: !0
  };
}
function Ps(e) {
  let n = Ir(e);
  if (!n) return;
  let r = n.path.split("/"),
    o = r.indexOf(ht);
  if (o < 0) return;
  let dir_2 = I.join(n.mountRoot, ...r.slice(0, o));
  return n.v2 ? {
    dir: I.join(dir_2, ms),
    create: !0
  } : {
    dir: dir_2,
    create: !1
  };
}
var Rs = {
  readSelfCgroup: () => W("/proc/self/cgroup", "utf8"),
  mkdirSync: mkdirSync,
  writeFileSync: writeFileSync
};
function Ns(e) {
  let n = O();
  if (n !== "linux" && n !== "wsl") return;
  try {
    let r = Ps(e.readSelfCgroup());
    if (r === void 0) return;
    if (r.create) try {
      e.mkdirSync(r.dir);
    } catch (error) {
      if (v(error) !== "EEXIST") throw error;
    }
    return r.dir;
  } catch (error) {
    t(`tool cgroup: keeper dir unavailable (${v(error) ?? error})`);
    return;
  }
}
function tT(e, n = Rs) {
  if (!e) return;
  let r = Ns(n);
  if (r === void 0) return;
  try {
    n.writeFileSync(I.join(r, "cgroup.procs"), String(e)), t(`tool cgroup: keeper pid ${e} moved to ${r}`);
  } catch (error) {
    t(`tool cgroup: keeper pid ${e} not moved (${v(error) ?? error})`);
  }
}
function vs(e, n, r, v2) {
  let s = n.split("/").includes(ht),
    u = I.join(e, n, ".");
  return s ? {
    dir: u,
    v2: v2,
    reuse: !0,
    selfDir: u
  } : {
    dir: I.join(e, r, ht),
    v2: v2,
    reuse: !1,
    selfDir: u
  };
}
function As(e) {
  return Math.floor(e - Math.max(2 * Sr, e * 0.15));
}
function Gs(e, n) {
  if (e !== void 0) return e;
  let r = As(n);
  return r >= gs ? r : void 0;
}
function Fs(e) {
  let n = /^(\d+(?:\.\d+)?)\s*([kmgt]?)(?:i?b)?$/i.exec(e?.trim() ?? "");
  if (!n) return;
  let r = Math.floor(Number(n[1]) * 1024 ** " kmgt".indexOf((n[2] || " ").toLowerCase()));
  return r >= 1 ? r : void 0;
}
function se({
  useToolMemoryCgroup = !0,
  toolCgroupClass = "helper"
}) {
  return useToolMemoryCgroup ? Ea(toolCgroupClass) : {};
}
function Ct() {
  return !0;
}
async function jm(e, n = [], r = {}) {
  let {
      useToolMemoryCgroup: useToolMemoryCgroup_2,
      toolCgroupClass: toolCgroupClass_2,
      ...u
    } = r,
    l = {
      ...se({
        useToolMemoryCgroup: useToolMemoryCgroup_2,
        toolCgroupClass: toolCgroupClass_2
      }),
      ...u
    };
  if (Ct()) {
    let f = Q0(e);
    if (f === null) throw Error(`Command '${e}' not found or is in an unsafe location (current directory)`);
    return A(f, n, l);
  }
  return A(e, n, l);
}
function oA(e, n = [], r = {}) {
  let {
      useToolMemoryCgroup: useToolMemoryCgroup_3,
      toolCgroupClass: toolCgroupClass_3,
      ...u
    } = r,
    l = e;
  if (Ct()) {
    let g = Q0(e);
    if (g === null) throw Object.assign(new P(`Command '${e}' not found or is in an unsafe location (current directory)`, "safeSpawn: command not found or is in an unsafe location (current directory)"), {
      code: "ENOENT"
    });
    l = g;
  }
  let f = se({
      useToolMemoryCgroup: useToolMemoryCgroup_3,
      toolCgroupClass: toolCgroupClass_3
    }),
    p = A(l, n, {
      ...f,
      ...u,
      buffer: !1,
      reject: !1
    });
  if (useToolMemoryCgroup_3 !== !1 && f.cgroup === void 0 && Z8e()) oxe(toolCgroupClass_3 ?? "helper", p.pid);
  return p.catch(() => {}), p;
}
function wzr(e, n = [], r = {}) {
  let {
      useToolMemoryCgroup: useToolMemoryCgroup_4,
      toolCgroupClass: toolCgroupClass_4,
      ...u
    } = r,
    l = {
      ...se({
        useToolMemoryCgroup: useToolMemoryCgroup_4,
        toolCgroupClass: toolCgroupClass_4
      }),
      ...u
    };
  if (Ct()) {
    let f = Q0(e);
    if (f === null) throw Error(`Command '${e}' not found or is in an unsafe location (current directory)`);
    return ee(f, n, l);
  }
  return ee(e, n, l);
}
async function EC(e, n = {}) {
  let {
    useToolMemoryCgroup: useToolMemoryCgroup_5,
    toolCgroupClass: toolCgroupClass_5,
    ...s
  } = n;
  return A(e, {
    ...se({
      useToolMemoryCgroup: useToolMemoryCgroup_5,
      toolCgroupClass: toolCgroupClass_5
    }),
    ...s,
    shell: !0
  });
}
function Pr(e, n = {}) {
  let {
    useToolMemoryCgroup: useToolMemoryCgroup_6,
    toolCgroupClass: toolCgroupClass_6,
    ...s
  } = n;
  return ee(e, {
    ...se({
      useToolMemoryCgroup: useToolMemoryCgroup_6,
      toolCgroupClass: toolCgroupClass_6
    }),
    ...s,
    shell: !0
  });
}
var Ls = 1000,
  ks = 60;
function QBt(e, {
  abortSignal: abortSignal,
  timeout: timeout_5 = 10 * ks * Ls,
  input: input_5,
  stdio: stdio_3 = ["ignore", "pipe", "pipe"],
  useToolMemoryCgroup: useToolMemoryCgroup_7
} = {}) {
  abortSignal?.throwIfAborted();
  using l = gm`exec: ${e.slice(0, 200)}`;
  try {
    let f = Pr(e, {
      env: process.env,
      maxBuffer: 1e6,
      timeout: timeout_5,
      cwd: oe(),
      stdio: stdio_3,
      reject: !1,
      input: input_5,
      useToolMemoryCgroup: useToolMemoryCgroup_7
    });
    if (!f.stdout) return null;
    return f.stdout.trim() || null;
  } catch {
    return null;
  }
}
var _t = 1000,
  bt = 60;
function tt(e, n, r = {
  timeout: 10 * bt * _t,
  preserveOutputOnError: !0,
  useCwd: !0
}) {
  return Ve(e, n, {
    allowRepoGitHooks: r.allowRepoGitHooks,
    allowGitTerminalPrompt: r.allowGitTerminalPrompt,
    abortSignal: r.abortSignal,
    timeout: r.timeout,
    preserveOutputOnError: r.preserveOutputOnError,
    cwd: r.cwd ?? (r.useCwd ? oe() : void 0),
    env: r.env,
    extendEnv: r.extendEnv,
    stdin: r.stdin,
    input: r.input,
    stdout: r.stdout,
    stderr: r.stderr,
    maxBuffer: r.maxBuffer,
    stripFinalNewline: r.stripFinalNewline,
    useToolMemoryCgroup: r.useToolMemoryCgroup,
    toolCgroupClass: r.toolCgroupClass,
    waitForExitAfterKill: r.waitForExitAfterKill
  });
}
var Ms = 6000;
async function Ds(e, n) {
  if (e.pid === void 0 || e.exitCode !== null || e.signalCode !== null) return;
  await nt(new Promise(r => e.once("exit", () => r())), n);
}
function Rr(e) {
  return v(e) === "ERR_CHILD_PROCESS_STDIO_MAXBUFFER" || e?.isMaxBuffer === !0 || e?.name === "MaxBufferError";
}
var ce = {
  cwd: "execFileNoThrow spawn rejected: null byte in cwd",
  file: "execFileNoThrow spawn rejected: null byte in executable path",
  argv: "execFileNoThrow spawn rejected: null byte in argv",
  envName: "execFileNoThrow spawn rejected: null byte in env name",
  envValue: "execFileNoThrow spawn rejected: null byte in env value"
};
function Us(e, n, r, o, s, u) {
  let l = `the runtime rejected ${Gr($s(e))} because`;
  if (typeof r === "string" && r.includes("\x00")) return {
    telemetry: ce.cwd,
    local: `${l} the working directory contains a null byte (\\0)`
  };
  if (e.includes("\x00")) return {
    telemetry: ce.file,
    local: `${l} the executable path contains a null byte (\\0)`
  };
  let f = n.findIndex(item => typeof item === "string" && item.includes("\x00"));
  if (f !== -1) return {
    telemetry: ce.argv,
    local: `${l} the argument at index ${f} (zero-based) contains a null byte (\\0)`
  };
  let p = Object.entries({
      ...s,
      ...o
    }).filter(([, S]) => S !== void 0),
    g = p.find(([S]) => S.includes("\x00"));
  if (g !== void 0) return {
    telemetry: ce.envName,
    local: `${l} the name of environment variable ${Ar(g[0])} contains a null byte (\\0)${Nr(g, u)}`
  };
  let h = p.find(([, S]) => typeof S === "string" && S.includes("\x00"));
  return h && {
    telemetry: ce.envValue,
    local: `${l} the value of environment variable ${Ar(h[0])} contains a null byte (\\0)${Nr(h, u)}`
  };
}
function Nr([e, n], r) {
  return r[e] === n ? "; every program this process starts will fail the same way until that variable is removed from its environment" : " (in the env passed for this command)";
}
var vr = 200;
function Bs(e) {
  return e === 1 ? "1 character" : `${e} characters`;
}
function Gr(e) {
  return fa(e).slice(1, -1).replace(/[^\x20-\x7e]/g, n => `\\u${n.charCodeAt(0).toString(16).padStart(4, "0")}`);
}
function Ar(e) {
  let n = e.indexOf("="),
    r = n === -1 ? e : e.slice(0, n),
    o = r.length > vr,
    s = `"${Gr(o ? r.slice(0, vr) : r)}"${o ? "\u2026" : ""}`;
  return n === -1 ? s : `${s} (then '=' and ${Bs(e.length - n - 1)}, not shown)`;
}
var js = new Set(["EPIPE", "ECONNRESET", "ENOTCONN", "EOF"]);
function Ws(e) {
  let n = {},
    r;
  try {
    r = e.stdin;
  } catch {
    return n;
  }
  if (!r) return n;
  return r.removeAllListeners("error"), r.on("error", o => {
    let s = v(o) ?? "unknown";
    if (js.has(s)) return;
    n.truncatedBy ??= s, e.kill();
  }), n;
}
function Ks(e, n) {
  if (e.shortMessage) return e.shortMessage;
  if (typeof e.signal === "string") return e.signal;
  return String(n);
}
function Ne(e) {
  return e instanceof Uint8Array ? Buffer.from(e).toString("latin1") : typeof e === "string" ? e : "";
}
async function Ve(e, n, {
  abortSignal: r,
  timeout: timeout_6 = 10 * bt * _t,
  preserveOutputOnError = !0,
  cwd: cwd_4,
  env: env_7,
  extendEnv: extendEnv_2,
  maxBuffer: maxBuffer_8,
  shell: shell,
  stdin: stdin,
  input: input_6,
  stdout: stdout_5,
  stderr: stderr_5,
  stripFinalNewline: stripFinalNewline,
  encoding: encoding_3,
  allowRepoGitHooks: allowRepoGitHooks_2,
  allowGitTerminalPrompt: allowGitTerminalPrompt_3,
  useToolMemoryCgroup: useToolMemoryCgroup_8 = !0,
  toolCgroupClass: toolCgroupClass_7 = "helper",
  waitForExitAfterKill = !1
} = {
  timeout: 10 * bt * _t,
  preserveOutputOnError: !0,
  maxBuffer: 1e6
}) {
  let G = e;
  if (!shell) {
    let x = Q0(e);
    if (x === null) return {
      stdout: "",
      stderr: `Command '${e}' not found or is in an unsafe location (current directory)`,
      code: 127,
      error: `Command '${e}' not found or is in an unsafe location (current directory)`
    };
    G = x;
  }
  let env_8 = process.env,
    H = XUe(G, n, env_7 === void 0 ? env_8 : extendEnv_2 === !1 ? env_7 : {
      ...env_8,
      ...env_7
    }, env_7 && "GIT_CONFIG_COUNT" in env_7 ? env_7.GIT_CONFIG_COUNT : a.GIT_CONFIG_COUNT, {
      allowRepoGitHooks: allowRepoGitHooks_2,
      allowGitTerminalPrompt: allowGitTerminalPrompt_3
    }),
    Fr = H?.args ?? n,
    env_9 = H?.env ?? env_7,
    b,
    Ae;
  try {
    let x = A(G, Fr, {
      signal: r,
      timeout: timeout_6,
      cwd: cwd_4,
      env: env_9,
      shell: shell,
      stdin: stdin,
      ...(maxBuffer_8 === void 0 ? {} : {
        maxBuffer: maxBuffer_8
      }),
      ...(stripFinalNewline === void 0 ? {} : {
        stripFinalNewline: stripFinalNewline
      }),
      ...(encoding_3 === "latin1" && {
        encoding: "latin1"
      }),
      ...(stdout_5 === void 0 ? {} : {
        stdout: stdout_5
      }),
      ...(stderr_5 === void 0 ? {} : {
        stderr: stderr_5
      }),
      ...(extendEnv_2 === void 0 ? {} : {
        extendEnv: extendEnv_2
      }),
      ...(useToolMemoryCgroup_8 ? Ea(toolCgroupClass_7) : {}),
      reject: !1
    });
    if (Ae = input_6 === void 0 ? void 0 : Ws(x), input_6 !== void 0 && x.pid !== void 0) x.stdin?.end(input_6);
    if (b = await x, waitForExitAfterKill && b.exitCode === void 0 && (r?.aborted === !0 || b.timedOut)) await Ds(x, Ms);
  } catch (error) {
    let Pt = error.message;
    if (as(error)) t(`execFileNoThrow spawn failed: ${v(error)} ${Pt}`, {
      level: "error"
    });else if (Rr(error)) return t(`execFileNoThrow maxBuffer exceeded: ${Pt}`, {
      level: "error"
    }), {
      stdout: "",
      stderr: "",
      code: 1,
      maxBufferExceeded: !0
    };else {
      let env_10 = process.env,
        V = v(error) === "ERR_INVALID_ARG_VALUE" ? Us(G, n, cwd_4, env_9, extendEnv_2 === !1 && env_9 !== void 0 ? void 0 : env_10, env_10) : void 0;
      if (V) t(`execFileNoThrow spawn refused: ${V.local}`, {
        level: "error"
      });
      let Nt = te(error);
      d(st(V ? lr(Nt, V.telemetry) : Nt, V?.telemetry ?? "execFileNoThrow unexpected rejection"));
    }
    return {
      stdout: "",
      stderr: "",
      code: 1
    };
  }
  if (Ae?.truncatedBy !== void 0) {
    let error_7 = `stdin write failed: ${Ae.truncatedBy}`;
    return t(`execFileNoThrow ${error_7}`, {
      level: "error"
    }), {
      stdout: "",
      stderr: "",
      code: 1,
      error: error_7
    };
  }
  if (!b.failed) return {
    stdout: Ne(b.stdout),
    stderr: Ne(b.stderr),
    code: 0,
    exitCode: 0
  };
  let wt = Rr(b) ? {
      maxBufferExceeded: !0
    } : {},
    Ot = b.timedOut ? {
      timedOut: !0
    } : {};
  if (!preserveOutputOnError) return {
    stdout: "",
    stderr: "",
    code: b.exitCode ?? 1,
    exitCode: b.exitCode,
    ...wt,
    ...Ot
  };
  let code = b.exitCode ?? 1;
  return {
    stdout: Ne(b.stdout),
    stderr: Ne(b.stderr),
    code: code,
    error: Ks(b, code),
    exitCode: b.exitCode,
    ...wt,
    ...Ot
  };
}
export { ihn, onExit as ere, oUo, sUo, iUo, aUo, yzr, f5n, lUo, mn, vb, aK, ahn, lhn, chn, YUe, regExp as JBt, No, dhn, J8e, tre, m5n, txe, g5n, _zr, XUe, lK, cUo, Q8e, JN, QN, nxe, bzr, rxe, uhn, phn, dUo, uUo, Ea, fhn, Z8e, mhn, oxe, Szr, pUo, fUo, mUo, ghn, tT, jm, oA, wzr, EC, QBt, tt, Ve };