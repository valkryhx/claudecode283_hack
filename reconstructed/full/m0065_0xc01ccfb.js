// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  zo
} from "B:/~BUN/root/chunk-ekrhn4q1.js";
import {
  q,
  di
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  y,
  c
} from "B:/~BUN/root/chunk-kks4mj3w.js";
import {
  P,
  st,
  te,
  v,
  ao,
  as
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  nt
} from "B:/~BUN/root/chunk-17wqwt36.js";
import {
  oe
} from "B:/~BUN/root/chunk-shgdrs47.js";
import {
  gm,
  fa,
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  I$,
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  d,
  O
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  Q0
} from "B:/~BUN/root/chunk-e7p62566.js";
import {
  i
} from "B:/~BUN/root/chunk-728mwbhs.js";
import {
  _,
  m
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  Qr
} from "B:/~BUN/root/chunk-0bx1tycm.js";
import {
  Yr
} from "B:/~BUN/root/chunk-n0832wgz.js";
import {
  tBe,
  RUo
} from "B:/~BUN/root/chunk-23aycy1d.js";
import {
  be,
  k,
  Re
} from "B:/~BUN/root/chunk-yv67t8hr.js";
var Lt = k(function(Hs, Ft) {
  Ft.exports = Gt;
  Gt.sync = kr;
  var vt = Re("fs");

  function Lr(e, n) {
    var r = n.pathExt !== void 0 ? n.pathExt : process.env.PATHEXT;
    if (!r) return !0;
    if (r = r.split(";"), r.indexOf("") !== -1) return !0;
    for (var o = 0; o < r.length; o++) {
      var s = r[o].toLowerCase();
      if (s && e.substr(-s.length).toLowerCase() === s) return !0
    }
    return !1
  }

  function At(e, n, r) {
    if (!e.isSymbolicLink() && !e.isFile()) return !1;
    return Lr(n, r)
  }

  function Gt(e, n, r) {
    vt.stat(e, function(o, s) {
      r(o, o ? !1 : At(s, e, n))
    })
  }

  function kr(e, n) {
    return At(vt.statSync(e), e, n)
  }
});
var $t = k(function(Ys, kt) {
  var Vs = Re("fs"),
    Ge;
  Ge = Lt();
  kt.exports = Fe;
  Fe.sync = $r;

  function Fe(e, n, r) {
    if (typeof n === "function") r = n, n = {};
    if (!r) {
      if (typeof Promise !== "function") throw TypeError("callback not provided");
      return new Promise(function(o, s) {
        Fe(e, n || {}, function(u, l) {
          if (u) s(u);
          else o(l)
        })
      })
    }
    Ge(e, n || {}, function(o, s) {
      if (o) {
        if (o.code === "EACCES" || n && n.ignoreErrors) o = null, s = !1
      }
      r(o, s)
    })
  }

  function $r(e, n) {
    try {
      return Ge.sync(e, n || {})
    } catch (r) {
      if (n && n.ignoreErrors || r.code === "EACCES") return !1;
      else throw r
    }
  }
});
var jt = k(function(zs, Bt) {
  var ue = Re("path"),
    Le = $t(),
    Mt = (e) => Object.assign(Error(`not found: ${e}`), {
      code: "ENOENT"
    }),
    Dt = (e, n) => {
      let r = n.colon || ";",
        o = e.match(/\//) || e.match(/\\/) ? [""] : [process.cwd(), ...(n.path || process.env.PATH || "").split(r)],
        s = n.pathExt || process.env.PATHEXT || ".EXE;.CMD;.BAT;.COM",
        u = s.split(r);
      if (e.indexOf(".") !== -1 && u[0] !== "") u.unshift("");
      return {
        pathEnv: o,
        pathExt: u,
        pathExtExe: s
      }
    },
    Ut = (e, n, r) => {
      if (typeof n === "function") r = n, n = {};
      if (!n) n = {};
      let {
        pathEnv: o,
        pathExt: s,
        pathExtExe: u
      } = Dt(e, n), l = [], f = (g) => new Promise((h, S) => {
        if (g === o.length) return n.all && l.length ? h(l) : S(Mt(e));
        let E = o[g],
          C = /^".*"$/.test(E) ? E.slice(1, -1) : E,
          T = ue.join(C, e),
          w = !C && /^\.[\\\/]/.test(e) ? e.slice(0, 2) + T : T;
        h(p(w, g, 0))
      }), p = (g, h, S) => new Promise((E, C) => {
        if (S === s.length) return E(f(h + 1));
        let T = s[S];
        Le(g + T, {
          pathExt: u
        }, (w, N) => {
          if (!w && N)
            if (n.all) l.push(g + T);
            else return E(g + T);
          return E(p(g, h, S + 1))
        })
      });
      return r ? f(0).then((g) => r(null, g), r) : f(0)
    },
    Mr = (e, n) => {
      n = n || {};
      let {
        pathEnv: r,
        pathExt: o,
        pathExtExe: s
      } = Dt(e, n), u = [];
      for (let l = 0; l < r.length; l++) {
        let f = r[l],
          p = /^".*"$/.test(f) ? f.slice(1, -1) : f,
          g = ue.join(p, e),
          h = !p && /^\.[\\\/]/.test(e) ? e.slice(0, 2) + g : g;
        for (let S = 0; S < o.length; S++) {
          let E = h + o[S];
          try {
            if (Le.sync(E, {
                pathExt: s
              }))
              if (n.all) u.push(E);
              else return E
          } catch (C) {}
        }
      }
      if (n.all && u.length) return u;
      if (n.nothrow) return null;
      throw Mt(e)
    };
  Bt.exports = Ut;
  Ut.sync = Mr
});
var Kt = k(function(Js, ke) {
  var Wt = (e = {}) => {
    let n = e.env || process.env;
    if ((e.platform || "win32") !== "win32") return "PATH";
    return Object.keys(n).reverse().find((o) => o.toUpperCase() === "PATH") || "Path"
  };
  ke.exports = Wt;
  ke.exports.default = Wt
});
var zt = k(function(qs, Yt) {
  var de = Re("path"),
    Vt = jt(),
    Dr = Kt();

  function Ht(e, n) {
    let r = e.options.env || process.env,
      o = process.cwd(),
      s = e.options.cwd != null,
      u = s && process.chdir !== void 0 && !process.chdir.disabled;
    if (u) try {
      process.chdir(e.options.cwd)
    } catch (f) {}
    let l;
    try {
      l = Vt.sync(e.command, {
        path: r[Dr({
          env: r
        })],
        pathExt: n ? de.delimiter : void 0
      })
    } catch (f) {} finally {
      if (u) try {
        process.chdir(o)
      } catch (f) {
        let p = f !== null && typeof f === "object" && typeof f.code === "string" ? f.code : "";
        if (!(/^E[A-Z0-9]+$/.test(p) || p === "UNKNOWN" || p.startsWith("Unknown system error"))) throw f
      }
    }
    if (l) l = de.resolve(s ? e.options.cwd : "", l);
    return l
  }

  function Ur(e) {
    return Ht(e) || Ht(e, !0)
  }
  Yt.exports = Ur
});
var Jt = k(function(Wr, Me) {
  var $e = /([()\][%!^"`<>&|;, *?])/g;

  function Br(e) {
    return e = e.replace($e, "^$1"), e
  }

  function jr(e, n) {
    if (e = `${e}`, e = e.replace(/(?=(\\+?)?)\1"/g, "$1$1\\\""), e = e.replace(/(?=(\\+?)?)\1$/, "$1$1"), e = `"${e}"`, e = e.replace($e, "^$1"), n) e = e.replace($e, "^$1");
    return e
  }
  Wr.command = Br;
  Wr.argument = jr
});
var Xt = k(function(Xs, qt) {
  qt.exports = /^#!(.*)/
});
var Qt = k(function(Zs, Zt) {
  var Vr = Xt();
  Zt.exports = (e = "") => {
    let n = e.match(Vr);
    if (!n) return null;
    let [r, o] = n[0].replace(/#! ?/, "").split(" "), s = r.split("/").pop();
    if (s === "env") return o;
    return o ? `${s} ${o}` : s
  }
});
var tn = k(function(Qs, en) {
  var D = Re("fs"),
    zr = Qt();

  function Jr(e) {
    let r = Buffer.alloc(150),
      o;
    try {
      o = D.openSync(e, "r"), D.readSync(o, r, 0, 150, 0), D.closeSync(o)
    } catch (s) {}
    return zr(r.toString())
  }
  en.exports = Jr
});
var sn = k(function(ec, on) {
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
    return e.file
  }

  function to(e) {
    let n = eo(e),
      r = !Xr.test(n);
    if (e.options.forceShell || r) {
      let o = Zr.test(n);
      e.command = rn.normalize(e.command), e.command = le.command(e.command), e.args = e.args.map((u) => le.argument(u, o));
      let s = [e.command].concat(e.args).join(" ");
      e.args = ["/d", "/s", "/c", `"${s}"`], e.command = process.env.comspec || "cmd.exe", e.options.windowsVerbatimArguments = !0
    }
    return e
  }

  function no(e, n, r) {
    if (n && !Array.isArray(n)) r = n, n = null;
    n = n ? n.slice(0) : [], r = Object.assign({}, r);
    let o = {
      command: e,
      args: n,
      options: r,
      file: void 0,
      original: {
        command: e,
        args: n
      }
    };
    return r.shell ? o : to(o)
  }
  on.exports = no
});
var un = k(function(tc, an) {
  function De(e, n) {
    return Object.assign(Error(`${n} ${e.command} ENOENT`), {
      code: "ENOENT",
      errno: "ENOENT",
      syscall: `${n} ${e.command}`,
      path: e.command,
      spawnargs: e.args
    })
  }

  function ro(e, n) {
    let r = e.emit;
    e.emit = function(o, s) {
      if (o === "exit") {
        let u = cn(s, n);
        if (u) return r.call(e, "error", u)
      }
      return r.apply(e, arguments)
    }
  }

  function cn(e, n) {
    if (e === 1 && !n.file) return De(n.original, "spawn");
    return null
  }

  function oo(e, n) {
    if (e === 1 && !n.file) return De(n.original, "spawnSync");
    return null
  }
  an.exports = {
    hookChildProcess: ro,
    verifyENOENT: cn,
    verifyENOENTSync: oo,
    notFoundError: De
  }
});
var ihn = k(function(nc, U) {
  var fe = Re("child_process"),
    Ue = sn(),
    Y = un();

  function dn(e, n, r) {
    let o = Ue(e, n, r),
      s = fe.spawn(o.command, o.args, o.options);
    return Y.hookChildProcess(s, o), s
  }

  function io(e, n, r) {
    let o = Ue(e, n, r),
      s = fe.spawnSync(o.command, o.args, o.options);
    return s.error = s.error || Y.verifyENOENTSync(s.status, o), s
  }
  U.exports = dn;
  U.exports.spawn = dn;
  U.exports.sync = io;
  U.exports._parse = Ue;
  U.exports._enoent = Y
});
var Un = k(function(ca, Dn) {
  var {
    PassThrough: ci
  } = Re("stream");
  Dn.exports = function() {
    var e = [],
      n = new ci({
        objectMode: !0
      });
    return n.setMaxListeners(0), n.add = r, n.isEmpty = o, n.on("unpipe", s), Array.prototype.slice.call(arguments).forEach(r), n;

    function r(u) {
      if (Array.isArray(u)) return u.forEach(r), this;
      return e.push(u), u.once("end", s.bind(null, u)), u.once("error", n.emit.bind(n, "error")), u.pipe(n, {
        end: !1
      }), this
    }

    function o() {
      return e.length == 0
    }

    function s(u) {
      if (e = e.filter(function(l) {
          return l !== u
        }), !e.length && n.readable) n.end()
    }
  }
});
var Qn = be(ihn(), 1);
import {
  Buffer as Oi
} from "buffer";
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
  return e
}
import me from "process";
import z from "path";
import {
  fileURLToPath as ln
} from "url";

function pe(e = {}) {
  let {
    env: n = process.env,
    platform: r = "win32"
  } = e;
  if (r !== "win32") return "PATH";
  return Object.keys(n).reverse().find((o) => o.toUpperCase() === "PATH") || "Path"
}
var so = ({
    cwd: e = me.cwd(),
    path: n = me.env[pe()],
    preferLocal: r = !0,
    execPath: o = me.execPath,
    addExecPath: s = !0
  } = {}) => {
    let u = e instanceof URL ? ln(e) : e,
      l = z.resolve(u),
      f = [];
    if (r) co(f, l);
    if (s) uo(f, o, l);
    return [...f, n].join(z.delimiter)
  },
  co = (e, n) => {
    let r;
    while (r !== n) e.push(z.join(n, "node_modules/.bin")), r = n, n = z.resolve(n, "..")
  },
  uo = (e, n, r) => {
    let o = n instanceof URL ? ln(n) : n;
    e.push(z.resolve(r, o, ".."))
  },
  fn = ({
    env: e = me.env,
    ...n
  } = {}) => {
    e = {
      ...e
    };
    let r = pe({
      env: e
    });
    return n.path = e[r], e[r] = so(n), e
  };
var lo = (e, n, r, o) => {
    if (r === "length" || r === "prototype") return;
    if (r === "arguments" || r === "caller") return;
    let s = Object.getOwnPropertyDescriptor(e, r),
      u = Object.getOwnPropertyDescriptor(n, r);
    if (!fo(s, u) && o) return;
    Object.defineProperty(e, r, u)
  },
  fo = function(e, n) {
    return e === void 0 || e.configurable || e.writable === n.writable && e.enumerable === n.enumerable && e.configurable === n.configurable && (e.writable || e.value === n.value)
  },
  po = (e, n) => {
    let r = Object.getPrototypeOf(n);
    if (r === Object.getPrototypeOf(e)) return;
    Object.setPrototypeOf(e, r)
  },
  mo = (e, n) => `/* Wrapped ${e}*/
${n}`,
  go = Object.getOwnPropertyDescriptor(Function.prototype, "toString"),
  ho = Object.getOwnPropertyDescriptor(Function.prototype.toString, "name"),
  yo = (e, n, r) => {
    let o = r === "" ? "" : `with ${r.trim()}() `,
      s = mo.bind(null, o, n.toString());
    Object.defineProperty(s, "name", ho), Object.defineProperty(e, "toString", {
      ...go,
      value: s
    })
  };

function je(e, n, {
  ignoreNonConfigurable: r = !1
} = {}) {
  let {
    name: o
  } = e;
  for (let s of Reflect.ownKeys(n)) lo(e, n, s, r);
  return po(e, n), yo(e, n, o), e
}
var ge = new WeakMap,
  pn = (e, n = {}) => {
    if (typeof e !== "function") throw TypeError("Expected a function");
    let r, o = 0,
      s = e.displayName || e.name || "<anonymous>",
      u = function(...l) {
        if (ge.set(u, ++o), o === 1) r = e.apply(this, l), e = null;
        else if (n.throw === !0) throw Error(`Function \`${s}\` can only be called once`);
        return r
      };
    return je(u, e), ge.set(u, o), u
  };
pn.callCount = (e) => {
  if (!ge.has(e)) throw Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);
  return ge.get(e)
};
var gn = pn;
import Io from "process";
import {
  constants as To
} from "os";
var hn = () => {
    let e = We - yn + 1;
    return Array.from({
      length: e
    }, So)
  },
  So = (e, n) => ({
    name: `SIGRT${n+1}`,
    number: yn + n,
    action: "terminate",
    description: "Application-specific signal (realtime)",
    standard: "posix"
  }),
  yn = 34,
  We = 64;
import {
  constants as Eo
} from "os";
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
    return [...Sn, ...e].map(xo)
  },
  xo = ({
    name: e,
    number: n,
    description: r,
    action: o,
    forced: s = !1,
    standard: u
  }) => {
    let {
      signals: {
        [e]: l
      }
    } = Eo, f = l !== void 0;
    return {
      name: e,
      number: f ? l : n,
      description: r,
      supported: f,
      action: o,
      forced: s,
      standard: u
    }
  };
var Co = () => {
    let e = Ke();
    return Object.fromEntries(e.map(_o))
  },
  _o = ({
    name: e,
    number: n,
    description: r,
    supported: o,
    action: s,
    forced: u,
    standard: l
  }) => [e, {
    name: e,
    number: n,
    description: r,
    supported: o,
    action: s,
    forced: u,
    standard: l
  }],
  En = Co(),
  bo = () => {
    let e = Ke(),
      n = We + 1,
      r = Array.from({
        length: n
      }, (o, s) => wo(s, e));
    return Object.assign({}, ...r)
  },
  wo = (e, n) => {
    let r = Oo(e, n);
    if (r === void 0) return {};
    let {
      name: o,
      description: s,
      supported: u,
      action: l,
      forced: f,
      standard: p
    } = r;
    return {
      [e]: {
        name: o,
        number: e,
        description: s,
        supported: u,
        action: l,
        forced: f,
        standard: p
      }
    }
  },
  Oo = (e, n) => {
    let r = n.find(({
      name: o
    }) => To.signals[o] === e);
    if (r !== void 0) return r;
    return n.find((o) => o.number === e)
  },
  Cc = bo();
var Po = ({
    timedOut: e,
    timeout: n,
    errorCode: r,
    signal: o,
    signalDescription: s,
    exitCode: u,
    isCanceled: l
  }) => {
    if (e) return `timed out after ${n} milliseconds`;
    if (l) return "was canceled";
    if (r !== void 0) return `failed with ${r}`;
    if (o !== void 0) return `was killed with ${o} (${s})`;
    if (u !== void 0) return `failed with exit code ${u}`;
    return "failed"
  },
  J = ({
    stdout: e,
    stderr: n,
    all: r,
    error: o,
    signal: s,
    exitCode: u,
    command: l,
    escapedCommand: f,
    timedOut: p,
    isCanceled: g,
    killed: h,
    parsed: {
      options: {
        timeout: S,
        cwd: E = Io.cwd()
      }
    }
  }) => {
    u = u === null ? void 0 : u, s = s === null ? void 0 : s;
    let C = s === void 0 ? void 0 : En[s].description,
      T = o && o.code,
      N = `Command ${Po({timedOut:p,timeout:S,errorCode:T,signal:s,signalDescription:C,exitCode:u,isCanceled:g})}: ${l}`,
      F = Object.prototype.toString.call(o) === "[object Error]",
      L = F ? `${N}
${o.message}` : N,
      M = [L, n, e].filter(Boolean).join(`
`);
    if (F) o.originalMessage = o.message, o.message = M;
    else o = Error(M);
    if (o.shortMessage = L, o.command = l, o.escapedCommand = f, o.exitCode = u, o.signal = s, o.signalDescription = C, o.stdout = e, o.stderr = n, o.cwd = E, r !== void 0) o.all = r;
    if ("bufferedData" in o) delete o.bufferedData;
    return o.failed = !0, o.timedOut = Boolean(p), o.isCanceled = g, o.killed = h && !p, o
  };
var he = ["stdin", "stdout", "stderr"],
  Ro = (e) => he.some((n) => e[n] !== void 0),
  xn = (e) => {
    if (!e) return;
    let {
      stdio: n
    } = e;
    if (n === void 0) return he.map((o) => e[o]);
    if (Ro(e)) throw Error(`It's not possible to provide \`stdio\` in combination with one of ${he.map((o)=>`\`${o}\``).join(", ")}`);
    if (typeof n === "string") return n;
    if (!Array.isArray(n)) throw TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof n}\``);
    let r = Math.max(n.length, he.length);
    return Array.from({
      length: r
    }, (o, s) => n[s])
  };
import Go from "os";
var X = [];
X.push("SIGHUP", "SIGINT", "SIGTERM");
var ye = (e) => !!e && typeof e === "object" && typeof e.removeListener === "function" && typeof e.emit === "function" && typeof e.reallyExit === "function" && typeof e.listeners === "function" && typeof e.kill === "function" && typeof e.pid === "number" && typeof e.on === "function",
  He = Symbol.for("signal-exit emitter"),
  Ye = globalThis,
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
    if (Ye[He]) return Ye[He];
    vo(Ye, He, {
      value: this,
      writable: !1,
      enumerable: !1,
      configurable: !1
    })
  }
  on(e, n) {
    this.listeners[e].push(n)
  }
  removeListener(e, n) {
    let r = this.listeners[e],
      o = r.indexOf(n);
    if (o === -1) return;
    if (o === 0 && r.length === 1) r.length = 0;
    else r.splice(o, 1)
  }
  emit(e, n, r) {
    if (this.emitted[e]) return !1;
    this.emitted[e] = !0;
    let o = !1;
    for (let s of this.listeners[e]) o = s(n, r) === !0 || o;
    if (e === "exit") o = this.emit("afterExit", n, r) || o;
    return o
  }
}
class Je {}
var Ao = (e) => ({
  onExit(n, r) {
    return e.onExit(n, r)
  },
  load() {
    return e.load()
  },
  unload() {
    return e.unload()
  }
});
class Cn extends Je {
  onExit() {
    return () => {}
  }
  load() {}
  unload() {}
}
class _n extends Je {
  #s = ze.platform === "win32" ? "SIGINT" : "SIGHUP";
  #t = new Tn;
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
          count: o
        } = this.#t,
        s = e;
      if (typeof s.__signal_exit_emitter__ === "object" && typeof s.__signal_exit_emitter__.count === "number") o += s.__signal_exit_emitter__.count;
      if (r.length === o) {
        this.unload();
        let u = this.#t.emit("exit", null, n),
          l = n === "SIGHUP" ? this.#s : n;
        if (!u) e.kill(e.pid, l)
      }
    };
    this.#i = e.reallyExit, this.#o = e.emit
  }
  onExit(e, n) {
    if (!ye(this.#e)) return () => {};
    if (this.#n === !1) this.load();
    let r = n?.alwaysLast ? "afterExit" : "exit";
    return this.#t.on(r, e), () => {
      if (this.#t.removeListener(r, e), this.#t.listeners.exit.length === 0 && this.#t.listeners.afterExit.length === 0) this.unload()
    }
  }
  load() {
    if (this.#n) return;
    this.#n = !0, this.#t.count += 1;
    for (let e of X) try {
      let n = this.#r[e];
      if (n) this.#e.on(e, n)
    } catch (n) {}
    this.#e.emit = (e, ...n) => this.#a(e, ...n), this.#e.reallyExit = (e) => this.#c(e)
  }
  unload() {
    if (!this.#n) return;
    this.#n = !1, X.forEach((e) => {
      let n = this.#r[e];
      if (!n) throw Error("Listener not defined for signal: " + e);
      try {
        this.#e.removeListener(e, n)
      } catch (r) {}
    }), this.#e.emit = this.#o, this.#e.reallyExit = this.#i, this.#t.count -= 1
  }
  #c(e) {
    if (!ye(this.#e)) return 0;
    return this.#e.exitCode = e || 0, this.#t.emit("exit", this.#e.exitCode, null), this.#i.call(this.#e, this.#e.exitCode)
  }
  #a(e, ...n) {
    let r = this.#o;
    if (e === "exit" && ye(this.#e)) {
      if (typeof n[0] === "number") this.#e.exitCode = n[0];
      let o = r.call(this.#e, e, ...n);
      return this.#t.emit("exit", this.#e.exitCode, null), o
    } else return r.call(this.#e, e, ...n)
  }
}
var ze = globalThis.process,
  {
    onExit: ere,
    load: Nc,
    unload: vc
  } = Ao(ye(ze) ? new _n(ze) : new Cn);
var Fo = 5000,
  bn = (e, n = "SIGTERM", r = {}) => {
    let o = e(n);
    return Lo(e, n, r, o), o
  },
  Lo = (e, n, r, o) => {
    if (!ko(n, r, o)) return;
    let s = Mo(r),
      u = setTimeout(() => {
        e("SIGKILL")
      }, s);
    if (u.unref) u.unref()
  },
  ko = (e, {
    forceKillAfterTimeout: n
  }, r) => $o(e) && n !== !1 && r,
  $o = (e) => e === Go.constants.signals.SIGTERM || typeof e === "string" && e.toUpperCase() === "SIGTERM",
  Mo = ({
    forceKillAfterTimeout: e = !0
  }) => {
    if (e === !0) return Fo;
    if (!Number.isFinite(e) || e < 0) throw TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);
    return e
  },
  wn = (e, n) => {
    if (e.kill()) n.isCanceled = !0
  },
  Do = (e, n, r) => {
    e.kill(n), r(Object.assign(Error("Timed out"), {
      timedOut: !0,
      signal: n
    }))
  },
  On = (e, {
    timeout: n,
    killSignal: r = "SIGTERM"
  }, o) => {
    if (n === 0 || n === void 0) return o;
    let s, u = new Promise((f, p) => {
        s = setTimeout(() => {
          Do(e, r, p)
        }, n)
      }),
      l = o.finally(() => {
        clearTimeout(s)
      });
    return Promise.race([u, l])
  },
  In = ({
    timeout: e
  }) => {
    if (e !== void 0 && (!Number.isFinite(e) || e < 0)) throw TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`)
  },
  Pn = async (e, {
    cleanup: n,
    detached: r
  }, o) => {
    if (!n || r) return o;
    let s = ere(() => {
      e.kill()
    });
    return o.finally(() => {
      s()
    })
  };
import {
  createWriteStream as Uo
} from "fs";
import {
  ChildProcess as Bo
} from "child_process";

function Se(e) {
  return e !== null && typeof e === "object" && typeof e.pipe === "function"
}

function qe(e) {
  return Se(e) && e.writable !== !1 && typeof e._write === "function" && typeof e._writableState === "object"
}
var jo = (e) => e instanceof Bo && typeof e.then === "function",
  Xe = (e, n, r) => {
    if (typeof r === "string") return e[n].pipe(Uo(r)), e;
    if (qe(r)) return e[n].pipe(r), e;
    if (!jo(r)) throw TypeError("The second argument must be a string, a stream or an Execa child process.");
    if (!qe(r.stdin)) throw TypeError("The target child process's stdin must be available.");
    return e[n].pipe(r.stdin), r
  },
  Rn = (e) => {
    if (e.stdout !== null) e.pipeStdout = Xe.bind(void 0, e, "stdout");
    if (e.stderr !== null) e.pipeStderr = Xe.bind(void 0, e, "stderr");
    if (e.all !== void 0) e.pipeAll = Xe.bind(void 0, e, "all")
  };
import {
  createReadStream as ai,
  readFileSync as ui
} from "fs";
import {
  setTimeout as li
} from "timers/promises";
var Z = async (e, {
  init: n,
  convertChunk: r,
  getSize: o,
  truncateChunk: s,
  addChunk: u,
  getFinalChunk: l,
  finalize: f
}, {
  maxBuffer: p = Number.POSITIVE_INFINITY
} = {}) => {
  if (!Ko(e)) throw Error("The first argument must be a Readable, a ReadableStream, or an async iterable.");
  let g = n();
  g.length = 0;
  try {
    for await (let h of e) {
      let S = Ho(h),
        E = r[S](h, g);
      An({
        convertedChunk: E,
        state: g,
        getSize: o,
        truncateChunk: s,
        addChunk: u,
        maxBuffer: p
      })
    }
    return Wo({
      state: g,
      convertChunk: r,
      getSize: o,
      truncateChunk: s,
      addChunk: u,
      getFinalChunk: l,
      maxBuffer: p
    }), f(g)
  } catch (h) {
    throw h.bufferedData = f(g), h
  }
}, Wo = ({
  state: e,
  getSize: n,
  truncateChunk: r,
  addChunk: o,
  getFinalChunk: s,
  maxBuffer: u
}) => {
  let l = s(e);
  if (l !== void 0) An({
    convertedChunk: l,
    state: e,
    getSize: n,
    truncateChunk: r,
    addChunk: o,
    maxBuffer: u
  })
}, An = ({
  convertedChunk: e,
  state: n,
  getSize: r,
  truncateChunk: o,
  addChunk: s,
  maxBuffer: u
}) => {
  let l = r(e),
    f = n.length + l;
  if (f <= u) {
    Nn(e, n, s, f);
    return
  }
  let p = o(e, u - n.length);
  if (p !== void 0) Nn(p, n, s, u);
  throw new Ze
}, Nn = (e, n, r, o) => {
  n.contents = r(e, n, o), n.length = o
}, Ko = (e) => typeof e === "object" && e !== null && typeof e[Symbol.asyncIterator] === "function", Ho = (e) => {
  let n = typeof e;
  if (n === "string") return "string";
  if (n !== "object" || e === null) return "others";
  if (globalThis.Buffer?.isBuffer(e)) return "buffer";
  let r = vn.call(e);
  if (r === "[object ArrayBuffer]") return "arrayBuffer";
  if (r === "[object DataView]") return "dataView";
  if (Number.isInteger(e.byteLength) && Number.isInteger(e.byteOffset) && vn.call(e.buffer) === "[object ArrayBuffer]") return "typedArray";
  return "others"
}, {
  toString: vn
} = Object.prototype;
class Ze extends Error {
  name = "MaxBufferError";
  constructor() {
    super("maxBuffer exceeded")
  }
}
var Qe = (e) => e,
  et = () => {
    return
  },
  rt = ({
    contents: e
  }) => e,
  Ee = (e) => {
    throw Error(`Streams in object mode are not supported: ${String(e)}`)
  },
  xe = (e) => e.length;
async function ot(e, n) {
  return Z(e, ti, n)
}
var Vo = () => ({
    contents: new ArrayBuffer(0)
  }),
  Yo = (e) => Jo.encode(e),
  Jo = new TextEncoder,
  Gn = (e) => new Uint8Array(e),
  Fn = (e) => new Uint8Array(e.buffer, e.byteOffset, e.byteLength),
  qo = (e, n) => e.slice(0, n),
  Xo = (e, {
    contents: n,
    length: r
  }, o) => {
    let s = $n() ? Qo(n, o) : Zo(n, o);
    return new Uint8Array(s).set(e, r), s
  },
  Zo = (e, n) => {
    if (n <= e.byteLength) return e;
    let r = new ArrayBuffer(kn(n));
    return new Uint8Array(r).set(new Uint8Array(e), 0), r
  },
  Qo = (e, n) => {
    if (n <= e.maxByteLength) return e.resize(n), e;
    let r = new ArrayBuffer(n, {
      maxByteLength: kn(n)
    });
    return new Uint8Array(r).set(new Uint8Array(e), 0), r
  },
  kn = (e) => Ln ** Math.ceil(Math.log(e) / Math.log(Ln)),
  Ln = 2,
  ei = ({
    contents: e,
    length: n
  }) => $n() ? e : e.slice(0, n),
  $n = () => ("resize" in ArrayBuffer.prototype),
  ti = {
    init: Vo,
    convertChunk: {
      string: Yo,
      buffer: Gn,
      arrayBuffer: Gn,
      dataView: Fn,
      typedArray: Fn,
      others: Ee
    },
    getSize: xe,
    truncateChunk: qo,
    addChunk: Xo,
    getFinalChunk: et,
    finalize: ei
  };
async function Te(e, n) {
  if (!("Buffer" in globalThis)) throw Error("getStreamAsBuffer() is only supported in Node.js");
  try {
    return Mn(await ot(e, n))
  } catch (r) {
    if (r.bufferedData !== void 0) r.bufferedData = Mn(r.bufferedData);
    throw r
  }
}
var Mn = (e) => globalThis.Buffer.from(e);
async function it(e, n) {
  return Z(e, si, n)
}
var ni = () => ({
    contents: "",
    textDecoder: new TextDecoder
  }),
  Ce = (e, {
    textDecoder: n
  }) => n.decode(e, {
    stream: !0
  }),
  ri = (e, {
    contents: n
  }) => n + e,
  oi = (e, n) => e.slice(0, n),
  ii = ({
    textDecoder: e
  }) => {
    let n = e.decode();
    return n === "" ? void 0 : n
  },
  si = {
    init: ni,
    convertChunk: {
      string: Qe,
      buffer: Ce,
      arrayBuffer: Ce,
      dataView: Ce,
      typedArray: Ce,
      others: Ee
    },
    getSize: xe,
    truncateChunk: oi,
    addChunk: ri,
    getFinalChunk: ii,
    finalize: rt
  };
var Bn = be(Un(), 1),
  jn = (e) => {
    if (e !== void 0) throw TypeError("The `input` and `inputFile` options cannot be both set.")
  },
  fi = ({
    input: e,
    inputFile: n
  }) => {
    if (typeof n !== "string") return e;
    return jn(e), ui(n)
  },
  Wn = (e) => {
    let n = fi(e);
    if (Se(n)) throw TypeError("The `input` option cannot be a stream in sync mode");
    return n
  },
  pi = ({
    input: e,
    inputFile: n
  }) => {
    if (typeof n !== "string") return e;
    return jn(e), ai(n)
  },
  Kn = (e, n) => {
    let r = pi(n);
    if (r === void 0) return;
    if (Se(r)) r.pipe(e.stdin);
    else e.stdin.end(r)
  },
  Hn = (e, {
    all: n
  }) => {
    if (!n || !e.stdout && !e.stderr) return;
    let r = Bn.default();
    if (e.stdout) r.add(e.stdout);
    if (e.stderr) r.add(e.stderr);
    return r
  },
  ct = async (e, n) => {
    if (!e || n === void 0) return;
    await li(0), e.destroy();
    try {
      return await n
    } catch (r) {
      return r.bufferedData
    }
  }, at = (e, {
    encoding: n,
    buffer: r,
    maxBuffer: o
  }) => {
    if (!e || !r) return;
    if (n === "utf8" || n === "utf-8") return it(e, {
      maxBuffer: o
    });
    if (n === null || n === "buffer") return Te(e, {
      maxBuffer: o
    });
    return mi(e, o, n)
  }, mi = async (e, n, r) => (await Te(e, {
    maxBuffer: n
  })).toString(r), Vn = async ({
    stdout: e,
    stderr: n,
    all: r
  }, {
    encoding: o,
    buffer: s,
    maxBuffer: u
  }, l) => {
    let f = at(e, {
        encoding: o,
        buffer: s,
        maxBuffer: u
      }),
      p = at(n, {
        encoding: o,
        buffer: s,
        maxBuffer: u
      }),
      g = at(r, {
        encoding: o,
        buffer: s,
        maxBuffer: u * 2
      });
    try {
      return await Promise.all([l, f, p, g])
    } catch (h) {
      return Promise.all([{
        error: h,
        signal: h.signal,
        timedOut: h.timedOut
      }, ct(e, f), ct(n, p), ct(r, g)])
    }
  };
var gi = (async () => {})().constructor.prototype,
  hi = ["then", "catch", "finally"].map((e) => [e, Reflect.getOwnPropertyDescriptor(gi, e)]),
  ut = (e, n) => {
    for (let [r, o] of hi) {
      let s = typeof n === "function" ? (...u) => Reflect.apply(o.value, n(), u) : o.value.bind(n);
      Reflect.defineProperty(e, r, {
        ...o,
        value: s
      })
    }
  },
  Yn = (e) => new Promise((n, r) => {
    if (e.on("exit", (o, s) => {
        n({
          exitCode: o,
          signal: s
        })
      }), e.on("error", (o) => {
        r(o)
      }), e.stdin) e.stdin.on("error", (o) => {
      r(o)
    })
  });
import {
  Buffer as yi
} from "buffer";
import {
  ChildProcess as Si
} from "child_process";
var qn = (e, n = []) => {
    if (!Array.isArray(n)) return [e];
    return [e, ...n]
  },
  Ei = /^[\w.-]+$/,
  xi = (e) => {
    if (typeof e !== "string" || Ei.test(e)) return e;
    return `"${e.replaceAll('"',"\\\"")}"`
  },
  dt = (e, n) => qn(e, n).join(" "),
  lt = (e, n) => qn(e, n).map((r) => xi(r)).join(" "),
  Ti = / +/g;
var zn = (e) => {
    let n = typeof e;
    if (n === "string") return e;
    if (n === "number") return String(e);
    if (n === "object" && e !== null && !(e instanceof Si) && "stdout" in e) {
      let r = typeof e.stdout;
      if (r === "string") return e.stdout;
      if (yi.isBuffer(e.stdout)) return e.stdout.toString();
      throw TypeError(`Unexpected "${r}" stdout in template expression`)
    }
    throw TypeError(`Unexpected "${n}" in template expression`)
  },
  Jn = (e, n, r) => r || e.length === 0 || n.length === 0 ? [...e, ...n] : [...e.slice(0, -1), `${e.at(-1)}${n[0]}`, ...n.slice(1)],
  Ci = ({
    templates: e,
    expressions: n,
    tokens: r,
    index: o,
    template: s
  }) => {
    let u = s ?? e.raw[o],
      l = u.split(Ti).filter(Boolean),
      f = Jn(r, l, u.startsWith(" "));
    if (o === n.length) return f;
    let p = n[o],
      g = Array.isArray(p) ? p.map((h) => zn(h)) : [zn(p)];
    return Jn(f, g, u.endsWith(" "))
  },
  ft = (e, n) => {
    let r = [];
    for (let [o, s] of e.entries()) r = Ci({
      templates: e,
      expressions: n,
      tokens: r,
      index: o,
      template: s
    });
    return r
  };
import {
  debuglog as _i
} from "util";
import bi from "process";
var Xn = _i("execa").enabled,
  _e = (e, n) => String(e).padStart(n, "0"),
  wi = () => {
    let e = new Date;
    return `${_e(e.getHours(),2)}:${_e(e.getMinutes(),2)}:${_e(e.getSeconds(),2)}.${_e(e.getMilliseconds(),3)}`
  },
  pt = (e, {
    verbose: n
  }) => {
    if (!n) return;
    bi.stderr.write(`[${wi()}] ${e}
`)
  };
var Pi = 1e8,
  Ri = ({
    env: e,
    extendEnv: n,
    preferLocal: r,
    localDir: o,
    execPath: s
  }) => {
    let u = n ? {
      ...we.env,
      ...e
    } : e;
    if (r) return fn({
      env: u,
      cwd: o,
      execPath: s
    });
    return u
  },
  er = (e, n, r = {}) => {
    let o = Qn.default._parse(e, n, r);
    if (e = o.command, n = o.args, r = o.options, r = {
        maxBuffer: Pi,
        buffer: !0,
        stripFinalNewline: !0,
        extendEnv: !0,
        preferLocal: !1,
        localDir: r.cwd || we.cwd(),
        execPath: we.execPath,
        encoding: "utf8",
        reject: !0,
        cleanup: !0,
        all: !1,
        windowsHide: !0,
        verbose: Xn,
        ...r
      }, r.env = Ri(r), r.stdio = xn(r), we.platform === "win32" && Ii.basename(e, ".exe") === "cmd") n.unshift("/q");
    return {
      file: e,
      args: n,
      options: r,
      parsed: o
    }
  },
  Q = (e, n, r) => {
    if (typeof n !== "string" && !Oi.isBuffer(n)) return r === void 0 ? void 0 : "";
    if (e.stripFinalNewline) return Be(n);
    return n
  };

function A(e, n, r) {
  let o = er(e, n, r),
    s = dt(e, n),
    u = lt(e, n);
  pt(u, o.options), In(o.options);
  let l;
  try {
    l = mt.spawn(o.file, o.args, o.options)
  } catch (C) {
    let T = new mt.ChildProcess,
      w = Promise.reject(J({
        error: C,
        stdout: "",
        stderr: "",
        all: "",
        command: s,
        escapedCommand: u,
        parsed: o,
        timedOut: !1,
        isCanceled: !1,
        killed: !1
      }));
    return ut(T, w), T
  }
  let f = Yn(l),
    p = On(l, o.options, f),
    g = Pn(l, o.options, p),
    h = {
      isCanceled: !1
    };
  l.kill = bn.bind(null, l.kill.bind(l)), l.cancel = wn.bind(null, l, h);
  let E = gn(async () => {
    let [{
      error: C,
      exitCode: T,
      signal: w,
      timedOut: N
    }, F, L, M] = await Vn(l, o.options, g), ae = Q(o.options, F), G = Q(o.options, L), K = Q(o.options, M);
    if (C || T !== 0 || w !== null) {
      let H = J({
        error: C,
        exitCode: T,
        signal: w,
        stdout: ae,
        stderr: G,
        all: K,
        command: s,
        escapedCommand: u,
        parsed: o,
        timedOut: N,
        isCanceled: h.isCanceled || (o.options.signal ? o.options.signal.aborted : !1),
        killed: l.killed
      });
      if (!o.options.reject) return H;
      throw H
    }
    return {
      command: s,
      escapedCommand: u,
      exitCode: 0,
      stdout: ae,
      stderr: G,
      all: K,
      failed: !1,
      timedOut: !1,
      isCanceled: !1,
      killed: !1
    }
  });
  return Kn(l, o.options), l.all = Hn(l, o.options), Rn(l), ut(l, E), l
}

function ee(e, n, r) {
  let o = er(e, n, r),
    s = dt(e, n),
    u = lt(e, n);
  pt(u, o.options);
  let l = Wn(o.options),
    f;
  try {
    f = mt.spawnSync(o.file, o.args, {
      ...o.options,
      input: l
    })
  } catch (h) {
    throw J({
      error: h,
      stdout: "",
      stderr: "",
      all: "",
      command: s,
      escapedCommand: u,
      parsed: o,
      timedOut: !1,
      isCanceled: !1,
      killed: !1
    })
  }
  let p = Q(o.options, f.stdout, f.error),
    g = Q(o.options, f.stderr, f.error);
  if (f.error || f.status !== 0 || f.signal !== null) {
    let h = J({
      stdout: p,
      stderr: g,
      error: f.error,
      signal: f.signal,
      exitCode: f.status,
      command: s,
      escapedCommand: u,
      parsed: o,
      timedOut: f.error && f.error.code === "ETIMEDOUT",
      isCanceled: !1,
      killed: f.signal !== null
    });
    if (!o.options.reject) return h;
    throw h
  }
  return {
    command: s,
    escapedCommand: u,
    exitCode: 0,
    stdout: p,
    stderr: g,
    failed: !1,
    timedOut: !1,
    isCanceled: !1,
    killed: !1
  }
}
var Ni = ({
    input: e,
    inputFile: n,
    stdio: r
  }) => e === void 0 && n === void 0 && r === void 0 ? {
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
    return A(s, u, Zn(e))
  }
  return n.sync = (r, ...o) => {
    if (!Array.isArray(r)) throw TypeError("Please use $(options).sync`command` instead of $.sync(options)`command`.");
    let [s, ...u] = ft(r, o);
    return ee(s, u, Zn(e))
  }, n
}
var Da = tr();
import {
  basename as $s
} from "path";
import {
  homedir as vi
} from "os";
import {
  sep as Ai
} from "path";
var Oe = "<user-code>";

function Gi() {
  try {
    return vi()
  } catch {
    return ""
  }
}
var nr = "cli",
  rr = new Set(["cli.js", nr, "sdk.mjs", "browser-sdk.js", "agentSdk.js"]),
  or = /^chunk-[0-9a-z]+\.js$/;

function ir(e) {
  return e[0] === "/" && or.test(e.slice(1))
}

function sr(e) {
  return ir(e) || e[0] === "/" && rr.has(e.slice(1))
}

function oUo(e) {
  return ir(e) ? "/" + nr : e
}
var Fi = /^(?:\/(?:\$bunfs|~BUN)|\/?[A-Za-z]:[\\/](?:\$bunfs|~BUN))[\\/]/;

function cr(e) {
  let n = e.startsWith("file://") ? e.slice(7) : e;
  return Fi.test(n)
}

function Li(e) {
  let n = e;
  if (n.startsWith("file://")) n = n.slice(7);
  if (cr(n)) return ar(n);
  if (n.startsWith("/snapshot/")) n = n.slice(10);
  let r = Gi();
  if (r && n.startsWith(r + Ai)) n = "~" + n.slice(r.length);
  return n
}
var ki = ["src/", "packages/"];

function ar(e) {
  let n = Math.max(e.lastIndexOf("/"), e.lastIndexOf("\\"));
  return n === -1 ? e : e.slice(n + 1)
}

function sUo(e) {
  return sr(e.file) || ki.some((n) => e.file.startsWith(n))
}
var $i = ["node:", "bun:", "internal:"],
  Mi = new Set(["native", "unknown", "ws", "undici", "node-fetch", "isomorphic-fetch", "vercel_fetch", "utf-8-validate"]);

function ur(e) {
  return Mi.has(e) || $i.some((n) => e.startsWith(n))
}

function Di(e) {
  return ur(e.file)
}

function iUo(e) {
  let n = e.find((r) => !Di(r));
  if (n === void 0) return e.length >= dr;
  return n.file === Oe || n.file.startsWith("node_modules/")
}

function aUo(e) {
  return sr(e.file) && (e.function == null || e.function === "<anonymous>")
}

function Ui(e) {
  let n = e.split(/[/\\]/),
    r = -1;
  for (let l = n.length - 1; l >= 0; l--)
    if (n[l] === "node_modules") {
      r = l;
      break
    } if (r === -1 || r >= n.length - 1) return null;
  let o = n[r + 1],
    s;
  if (o.startsWith("@")) {
    if (r + 2 >= n.length) return null;
    s = `${o}/${n[r+2]}`
  } else s = o;
  let u = n.at(-1);
  if (!u) return null;
  return `node_modules/${s}/${u}`
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
  return Oe
}

function ji(e) {
  let n = e.trim();
  if (!n.startsWith("at ")) return null;
  let r = n.slice(3),
    o = r.indexOf(" ("),
    s, u;
  if (o !== -1 && r.endsWith(")")) s = r.slice(0, o).trim(), u = r.slice(o + 2, -1);
  else u = r.trim();
  if (s) {
    if (s = s.replace(/^async\s+/, "").replace(/^new\s+/, ""), s = s.replace(/\s*\[as\s+[^\]]+\]$/, ""), !s) s = void 0
  }
  let l = u.match(/^(.*):(\d+):(\d+)$/);
  if (!l) return null;
  let [, f, p, g] = l, h = Bi(f);
  return {
    file: h,
    line: Number(p),
    column: Number(g),
    function: h === Oe && s ? Oe : s
  }
}
var dr = 50;

function yzr(e, n = dr) {
  let r = [];
  for (let o of f5n(e).split(`
`)) {
    let s = ji(o);
    if (s) {
      if (r.push(s), r.length >= n) break
    }
  }
  return r
}

function f5n(e) {
  let n = typeof e.stack === "string" ? e.stack : "",
    r = typeof e.message === "string" ? e.message : "",
    o = Wi(n, e.name, r);
  return o === -1 ? n : n.slice(o + 1)
}

function Wi(e, n, r) {
  let o = (u) => u !== "" && e.startsWith(`${u}
`);
  if (r !== "") {
    let u = typeof n === "string" && n !== "" ? `${n}: ${r}` : "";
    if (u !== "" && o(u)) return u.length;
    let l = `: ${r}`,
      f = e.indexOf(`${l}
`);
    return f > 0 && !e.slice(0, f).includes(`
`) ? f + l.length : n === "" && o(r) ? r.length : -1
  }
  let s = n === void 0 ? "Error" : typeof n === "string" ? n : typeof n === "number" || typeof n === "boolean" || typeof n === "bigint" || n === null ? String(n) : "";
  return o(s) ? s.length : -1
}

function lr(e, n) {
  try {
    let r = typeof e.stack === "string" ? e.stack : "",
      o = f5n(e),
      u = o.length < r.length && r.endsWith(o) ? o.replace(/\n$/, "").split(`
`) : [],
      l = u.every((f) => f.trimStart().startsWith("at ")) ? u : [];
    e.stack = [`${e.name}: ${n}`, ...l].join(`
`), e.message = n
  } catch {}
  return e
}

function lUo(e, n) {
  return [`${e.name}: ${e.message}`, ...n.map((r) => {
    let o = `${r.file}${r.line?`:${r.line}`:""}${r.column?`:${r.column}`:""}`;
    return r.function ? `    at ${r.function} (${o})` : `    at ${o}`
  })].join(`
`)
}
import {
  mkdir as Ji
} from "fs/promises";
import {
  basename as pr,
  delimiter as Ie,
  dirname as gt,
  resolve as qi
} from "path";
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
  JBt = new RegExp(Vi.source, "i"),
  Yi = new Set(YUe);

function No(e, n = {}) {
  let r = e?.GIT_ALLOW_PROTOCOL?.split(":").includes("ssh") ?? !1;
  return fr({
    ...Ki,
    ...!r && Hi
  }, e, n)
}

function dhn(e, n = {}) {
  let r = fr({}, e, n);
  for (let o of zi)
    if (!(o in r)) r[o] = void 0;
  return r
}
var zi = ["GIT_LFS_SKIP_SMUDGE", "GIT_NO_LAZY_FETCH", "GIT_NO_REPLACE_OBJECTS"];

function fr(e, n, {
  base: r = process.env,
  repository: o
}) {
  let s = {
      ...e,
      ...o !== void 0 && {
        GIT_DIR: o.gitDir,
        GIT_COMMON_DIR: o.commonDir
      },
      ...o !== void 0 && (o.workTree !== null ? {
        GIT_WORK_TREE: o.workTree
      } : {
        GIT_IMPLICIT_WORK_TREE: "0"
      }),
      ...n
    },
    u = {};
  for (let f of YUe) u[f] = void 0;
  let l = new Set(Object.keys(s).map((f) => f.toUpperCase()));
  for (let f of Object.keys(r)) {
    let p = f.toUpperCase();
    if (Yi.has(p) || JBt.test(f) || l.has(p) && !(f in s)) u[f] = void 0
  }
  return {
    ...r,
    ...u,
    ...s
  }
}

function J8e() {
  return a.CLAUDE_CODE_REMOTE || a.CLAUDE_CODE_PLUGIN_PREFER_HTTPS
}
var tre = "--upload-pack=git-upload-pack";

function m5n() {
  return O() === "windows" ? "\\\\.\\NUL" : "/dev/null"
}
var Xi = /^core\.hooksPath=(?:\/dev\/null|\\\\\.\\nul)$/i;

function txe() {
  return [
    ["core.fsmonitor", ""],
    ["core.hooksPath", m5n()],
    ["core.askPass", ""],
    ["protocol.ext.allow", "never"],
    ["submodule.recurse", "false"],
    ["log.showSignature", "false"],
    ["gc.auto", "0"],
    ["maintenance.auto", "false"]
  ]
}
var Zi = new Set(["core.hooksPath", "core.askPass", "submodule.recurse"]),
  g5n = {
    GIT_NO_LAZY_FETCH: "1",
    GIT_NO_REPLACE_OBJECTS: "1",
    GIT_TERMINAL_PROMPT: "0",
    ...ne
  };

function _zr(e, {
  allowGitTerminalPrompt: n = !1
} = {}) {
  return Qr(g5n, (r, o) => !(n && o === "GIT_TERMINAL_PROMPT") && !ts(e, o))
}

function XUe(e, n, r, o = r.GIT_CONFIG_COUNT, {
  allowRepoGitHooks: s = !1,
  allowGitTerminalPrompt: u = !1
} = {}) {
  let l = pr(e).toLowerCase();
  if (!/^git(\.exe|\.cmd|\.bat|\.com)?$/.test(l)) return null;
  let f = s ? txe().filter(([g]) => !Zi.has(g)) : txe(),
    p = mr(n).map((g) => n[g]);
  return {
    args: f.filter(([g]) => !p.some((h) => h.startsWith(`${g}=`))).flatMap(([g, h]) => ["-c", `${g}=${h}`]).concat(es(n)),
    env: {
      ...r,
      ..._zr(r, {
        allowGitTerminalPrompt: u
      }),
      ...QN(o, f),
      GIT_PROXY_COMMAND: r.GIT_PROXY_COMMAND ?? ""
    }
  }
}
var Qi = new Set(["-C", "--git-dir", "--work-tree", "--namespace", "--super-prefix", "--config-env", "--attr-source", "--exec-path"]);

function mr(e) {
  let n = [],
    r = 0;
  while (r < e.length) {
    let o = e[r];
    if (o === "-c" && r + 1 < e.length) n.push(r + 1), r += 2;
    else if (Qi.has(o) && r + 1 < e.length) r += 2;
    else if (o.startsWith("-")) r += 1;
    else break
  }
  return n
}

function es(e) {
  let n = [...e];
  for (let r of mr(n))
    if (Xi.test(n[r])) n[r] = `core.hooksPath=${m5n()}`;
  return n
}
var lK = {
  GIT_TERMINAL_PROMPT: "0",
  GIT_ASKPASS: "",
  GCM_INTERACTIVE: "never"
};

function cUo(e) {
  let n = {};
  for (let [r, o] of Object.entries(lK))
    if (JN(e, r) === void 0) n[r] = o;
  return n
}

function Q8e(e = process.env) {
  return {
    ...e,
    ...B(e, (n, r) => Object.hasOwn(lK, n) && r !== n),
    ...lK,
    ...QN(JN(e, "GIT_CONFIG_COUNT"), [
      ["credential.interactive", "false"]
    ], e)
  }
}

function B(e, n) {
  let r = {};
  for (let o of Object.keys(e))
    if (n(o.toUpperCase(), o)) r[o] = void 0;
  return r
}

function JN(e, n) {
  if (e[n] !== void 0 || O() !== "windows") return e[n];
  for (let [r, o] of Object.entries(e))
    if (r.toUpperCase() === n && o !== void 0) return o;
  return
}

function ts(e, n) {
  if (Object.hasOwn(e, n)) return !0;
  return O() === "windows" && Object.keys(e).some((r) => r.toUpperCase() === n)
}

function QN(e, n, r = {}) {
  let o = Number(e),
    s = Number.isInteger(o) && o > 0 ? o : 0,
    u = {
      GIT_CONFIG_COUNT: String(s + n.length)
    };
  n.forEach(([f, p], g) => {
    u[`GIT_CONFIG_KEY_${s+g}`] = f, u[`GIT_CONFIG_VALUE_${s+g}`] = p
  });
  let l = new Set(Object.keys(u));
  return {
    ...B(r, (f, p) => l.has(f) && !l.has(p)),
    ...u
  }
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
    ...B(e, (u) => u === "GIT_SSH_COMMAND" || u === "GIT_SSH"),
    GIT_SSH: void 0,
    GIT_SSH_COMMAND: `${s} ${ns}`
  }
}

function rs(e, n) {
  let r = JN(e, "GIT_SSH_VARIANT")?.trim().toLowerCase();
  if (r !== void 0 && r !== "" && r !== "auto") return r === "ssh" ? "ssh" : "other";
  return pr(n.trim().replace(/\\/g, "/")).toLowerCase().replace(/\.exe$/, "") === "ssh" ? "ssh" : "other"
}

function os(e) {
  let n = e.trim().match(/^(?:"([^"]*)"|'([^']*)'|(\S+))/);
  return n?.[1] ?? n?.[2] ?? n?.[3] ?? ""
}
var is = ["-c", "protocol.ext.allow=never", "-c", "protocol.fd.allow=never", "-c", "protocol.git.allow=never", "-c", "protocol.ftp.allow=never", "-c", "protocol.ftps.allow=never"];

function ss(e) {
  return {
    ...e,
    ...B(e, (n) => n === "GIT_ALLOW_PROTOCOL"),
    GIT_ALLOW_PROTOCOL: void 0
  }
}

function cs(e) {
  let n = JN(e, "GIT_ALLOW_PROTOCOL");
  if (n === void 0) return [];
  let r = new Set(n.split(":"));
  return ["https", "http", "ssh", "file"].filter((o) => !r.has(o)).flatMap((o) => ["-c", `protocol.${o}.allow=never`])
}

function us(e) {
  return [...is, ...cs(e)]
}

function ds(e = Q8e(ls())) {
  let n = us(e);
  return {
    pinArgs: n,
    inCheckoutArgs: [...mn, ...nxe, ...n],
    env: {
      ...bzr(ss(e)),
      ...B(e, (r, o) => Object.hasOwn(ne, r) && o !== r),
      ...ne
    }
  }
}

function ls() {
  let e = new Set(chn),
    n = process.env;
  return {
    ...n,
    ...B(n, (r) => e.has(r)),
    ...Object.fromEntries([...e].map((r) => [r, void 0]))
  }
}

function rxe(e) {
  let n = ds();
  return {
    ...n,
    env: {
      ...n.env,
      GIT_CEILING_DIRECTORIES: gr(gt(e))
    }
  }
}

function uhn(e) {
  let n = {};
  for (let r of [...Object.keys(lK), "GIT_CEILING_DIRECTORIES"]) {
    let o = e[r];
    if (o !== void 0) n[r] = o
  }
  return n
}

function gr(e) {
  if (e = qi(e), e.includes(Ie)) throw new P(`Cannot run git under ${e}: its path contains "${Ie}", which git's discovery ceiling (a "${Ie}"-separated list) cannot express. Use a location without "${Ie}" for this directory (the plugins cache \u2014 CLAUDE_CODE_PLUGIN_CACHE_DIR \u2014 or the temporary directory \u2014 TMPDIR \u2014 whichever this path is under).`, "git working directory path contains the PATH delimiter; git discovery ceiling inexpressible");
  return e
}
async function phn(e, n) {
  let r = gt(e);
  return await Ji(r, {
    recursive: !0
  }), {
    cwd: r,
    env: {
      ...n,
      GIT_CEILING_DIRECTORIES: gr(gt(r))
    }
  }
}
import {
  mkdirSync as St,
  readFileSync as W,
  rmdirSync as yr,
  statSync as fs,
  writeFileSync as Pe
} from "fs";
import {
  totalmem as ps
} from "os";
import {
  posix as I
} from "path";
var ht = "claude-code-bash",
  ms = "claude-code-keeper",
  Sr = 1073741824,
  gs = Sr,
  yt = ["mcp", "lsp", "hooks", "plugin", "tmux", "helper", "agent"];
class Er {
  reader = null;
  subscribeRefresh = null;
  register(e) {
    let n = this.reader;
    return this.reader = e, n
  }
  read(e, n) {
    return this.reader ? this.reader(e, n) : n
  }
}
var j = new Er;

function dUo(e, n) {
  if (n !== void 0) j.subscribeRefresh = n;
  return j.register(e)
}
class xr {
  dir = void 0;
  layout = void 0;
  limit = 0;
  activatedClasses = new Set;
  pendingPids = new Map;
  pendingUnsubscribe = void 0;
  oomKillsSeen = void 0
}
var R = new q(() => new xr);

function Et() {
  let e = di(R);
  if (e.dir !== void 0) return e.dir ?? void 0;
  let n = O();
  if (n !== "linux" && n !== "wsl") {
    e.dir = null;
    return
  }
  let r = a.CLAUDE_CODE_TOOL_MEMORY_LIMIT?.trim().toLowerCase();
  if (r && (zo(r) || r === "none")) {
    e.dir = null;
    return
  }
  let o = Fs(r);
  if (o === void 0 && j.read("tengu_tool_memory_cgroup", !1) !== !0) return;
  try {
    let s = Is(W("/proc/self/cgroup", "utf8"));
    if (!s) throw Error("no memory cgroup hierarchy");
    let u = Gs(o, ps());
    if (u === void 0) {
      e.dir = null, t("tool cgroup: disabled (host too small for the default cap)"), i("tengu_tool_cgroup", {
        status: y("host_too_small")
      });
      return
    }
    Or(s, u), e.dir = s.dir, e.layout = s, e.limit = u, t(`tool cgroup: ${s.dir} ${s.reuse?"(nested: already capped, reusing our own)":`limit=${u}`}`), _("shell_memory_cgroup"), i("tengu_tool_cgroup", s.reuse ? {
      status: y("nested")
    } : {
      status: y("enabled"),
      limit_bytes: u
    })
  } catch (s) {
    e.dir = null, t(`tool cgroup: disabled (${v(s)??s})`), m("shell_memory_cgroup", ao(s) ?? "no_hierarchy"), i("tengu_tool_cgroup", {
      status: y("disabled")
    })
  }
  return e.dir ?? void 0
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
  return r
}

function uUo(e) {
  return typeof di(R).dir === "string" && (e === "shell" || !Tr().has(e))
}

function hs(e, n = {
  exists: ys,
  mkdirSync: St,
  writeFileSync: Pe,
  rmdirSync: yr
}) {
  if (e.dir === void 0 || e.dir === null) return;
  try {
    if (n.exists(e.dir)) return e.dir;
    if (e.layout === void 0 || e.layout.reuse) throw Error("enclosing tool cgroup is gone");
    return Or(e.layout, e.limit, n), t(`tool cgroup: ${e.dir} vanished; re-created`), i("tengu_tool_cgroup", {
      status: y("recreated")
    }), e.dir
  } catch (r) {
    e.dir = null, t(`tool cgroup: disabled (dir vanished: ${v(r)??r})`), i("tengu_tool_cgroup", {
      status: y("vanished")
    });
    return
  }
}

function ys(e) {
  return fs(e, {
    throwIfNoEntry: !1
  }) !== void 0
}

function Tr() {
  let e = a.CLAUDE_CODE_TOOL_MEMORY_CGROUP_EXCLUDE?.trim(),
    n = Ss(e);
  if (n.has("mcp") || !Es(!e)) return n;
  return new Set([...n, "mcp"])
}

function Ss(e) {
  if (e) return hr(e.split(","));
  let n = j.read("tengu_tool_cgroup_exclude_classes", null);
  if (Array.isArray(n)) return hr(n);
  return new Set(yt)
}

function Es(e) {
  let n = a.CLAUDE_CODE_MCP_MEMORY_CGROUP?.trim().toLowerCase();
  if (n && (zo(n) || n === "none")) return !0;
  return e && j.read("tengu_mcp_memory_cgroup", null) === !1
}

function hr(e) {
  let n = new Set;
  for (let r of e) {
    let o = typeof r === "string" ? r.trim().toLowerCase() : "";
    if (o === "all-new") {
      yt.forEach((u) => n.add(u));
      continue
    }
    let s = yt.find((u) => u === o);
    if (s !== void 0) n.add(s)
  }
  return n
}

function Ea(e) {
  let n = re(e);
  return n === void 0 ? {} : {
    cgroup: n
  }
}

function fhn(e, n, r) {
  let o = re(e);
  if (o === void 0) return {
    command: n,
    args: [...r],
    pending: Z8e(),
    capped: !1
  };
  if (I$(n) === null) return {
    command: n,
    args: [...r],
    pending: !0,
    capped: !1
  };
  return {
    pending: !1,
    capped: !0,
    command: "/bin/sh",
    args: ["-c", '{ echo 0 > "$0"/cgroup.procs; } 2>/dev/null; exec "$@"', o, n, ...r]
  }
}

function Z8e() {
  return di(R).dir === void 0
}
var xs = 64,
  mhn = {
    readStarttime: Cs,
    writeFileSync: Pe,
    readCgroupPids: bs,
    readProcIdentity: _s
  };

function oxe(e, n, r, o = mhn) {
  try {
    if (!n) return;
    Et();
    let s = di(R);
    if (s.dir === null) return;
    let u = o.readStarttime(n);
    if (u === void 0) return;
    let l = {
      cls: e,
      starttime: u,
      shouldStayUncapped: r
    };
    if (s.dir !== void 0) {
      Cr(n, l, o);
      return
    }
    if (_r(s, o), s.pendingPids.size >= xs) {
      t(`tool cgroup: pending pid ${n} not parked (full)`);
      return
    }
    s.pendingPids.set(n, l), s.pendingUnsubscribe ??= j.subscribeRefresh?.(() => Ts())
  } catch (s) {
    t(`tool cgroup: pending pid not parked (${s})`)
  }
}

function Ts(e = mhn) {
  let n = di(R);
  try {
    if (Et(), n.dir === void 0) {
      _r(n, e);
      return
    }
    if (n.dir !== null)
      for (let [r, o] of n.pendingPids) Cr(r, o, e)
  } catch (r) {
    t(`tool cgroup: late attach skipped (${r})`)
  }
  n.pendingPids.clear(), n.pendingUnsubscribe?.(), n.pendingUnsubscribe = void 0
}

function Cr(e, {
  cls: n,
  starttime: r,
  shouldStayUncapped: o
}, s) {
  let u = re(n);
  if (u === void 0 || s.readStarttime(e) !== r) return;
  try {
    if (o?.()) {
      t(`tool cgroup: ${n} pid ${e} left uncapped`);
      return
    }
    let l = I.join(u, "cgroup.procs");
    s.writeFileSync(l, String(e));
    let f = 1,
      p = di(R).layout;
    if (p !== void 0 && !p.reuse) f += wr(e, p.selfDir, l, s, "attached");
    t(`tool cgroup: late-attached ${n} pid ${e} (${f} process${f===1?"":"es"})`)
  } catch (l) {
    t(`tool cgroup: late attach of pid ${e} failed (${v(l)??l})`)
  }
}

function _r(e, n) {
  for (let [r, {
      starttime: o
    }] of e.pendingPids)
    if (n.readStarttime(r) !== o) e.pendingPids.delete(r)
}

function Cs(e) {
  try {
    return tBe(W(`/proc/${e}/stat`, "utf8"))
  } catch {
    return
  }
}

function _s(e) {
  try {
    let n = W(`/proc/${e}/stat`, "utf8"),
      r = RUo(n),
      o = tBe(n);
    return r === void 0 || o === void 0 ? void 0 : {
      ppid: r,
      starttime: o
    }
  } catch {
    return
  }
}

function bs(e) {
  return W(I.join(e, "cgroup.procs"), "utf8").split(`
`).map((n) => Number.parseInt(n, 10)).filter((n) => !Number.isNaN(n))
}

function ws(e) {
  let n = /^oom_kill (\d+)$/m.exec(e);
  return n ? Number.parseInt(n[1], 10) : void 0
}

function xt(e) {
  return I.join(e.dir, e.v2 ? "memory.events" : "memory.oom_control")
}

function ie(e) {
  return W(e, "utf8")
}

function Tt(e, n = ie) {
  try {
    return ws(n(e))
  } catch {
    return
  }
}

function Szr(e = ie) {
  let {
    dir: n,
    layout: r
  } = di(R);
  if (!n || r === void 0) return;
  return Tt(xt(r), e)
}

function pUo(e, n = ie) {
  let r = di(R),
    o = e ?? r.oomKillsSeen,
    s = Szr(n);
  return br(r, n, s), o === void 0 || s === void 0 ? void 0 : s > o
}

function br(e, n = ie, r) {
  try {
    let o = e.layout;
    if (!e.dir || o === void 0 || o.reuse) return;
    let s = r ?? Tt(xt(o), n);
    if (s === void 0) return;
    let u = e.oomKillsSeen;
    if (e.oomKillsSeen = s, u === void 0 || s <= u) return;
    t(`tool cgroup: OOM killer fired ${s-u} time(s) in ${o.dir} since last check`), i("tengu_tool_cgroup", {
      status: y("oom_kill"),
      oom_kills: s - u,
      cgroup_v2: o.v2
    })
  } catch (o) {
    t(`tool cgroup: oom_kill check skipped (${o})`)
  }
}

function fUo(e, n = ie) {
  let r = re(e),
    o = di(R).layout;
  if (r === void 0 || o === void 0) return;
  let s = xt(o);
  return () => Tt(s, n)
}

function mUo(e, n) {
  let r = re(e);
  if (r === void 0) return n;
  return `sh -c '{ echo $PPID > "$1"/cgroup.procs; } 2>/dev/null' sh ${Yr([r])}; ${n}`
}

function ghn(e, n, r = mhn) {
  try {
    let o = di(R);
    if (o.dir === void 0) {
      if (o.pendingPids.get(e)?.starttime !== n) return !1;
      return o.pendingPids.delete(e), t(`tool cgroup: unparked pid ${e}; it stays uncapped`), !0
    }
    let s = o.layout;
    if (!o.dir || s === void 0 || s.reuse) return !1;
    if (r.readStarttime(e) !== n) return !1;
    let u = I.join(s.selfDir, "cgroup.procs");
    r.writeFileSync(u, String(e));
    let l = 1 + wr(e, s.dir, u, r, "released");
    return t(`tool cgroup: released pid ${e} (${l} process${l===1?"":"es"}) to ${s.selfDir}`), i("tengu_tool_cgroup", {
      status: y("released"),
      released_count: l
    }), !0
  } catch (o) {
    return t(`tool cgroup: release of pid ${e} failed (${v(o)??o})`), !1
  }
}

function wr(e, n, r, o, s) {
  let u = 0;
  for (let {
      pid: l,
      starttime: f
    }
    of Os(e, n, o)) {
    if (o.readStarttime(l) !== f) {
      t(`tool cgroup: descendant ${l} of pid ${e} exited or was recycled; skipped`);
      continue
    }
    try {
      o.writeFileSync(r, String(l)), u++
    } catch (p) {
      t(`tool cgroup: descendant ${l} of pid ${e} not ${s} (${v(p)??p})`)
    }
  }
  return u
}

function Os(e, n, r) {
  let o;
  try {
    o = r.readCgroupPids(n)
  } catch (f) {
    return t(`tool cgroup: members of ${n} unreadable (${v(f)??f}); moving pid ${e} alone`), []
  }
  let s = new Map;
  for (let f of o) {
    if (f === e) continue;
    let p;
    try {
      p = r.readProcIdentity(f)
    } catch {
      p = void 0
    }
    if (p === void 0) continue;
    let g = {
        pid: f,
        starttime: p.starttime
      },
      h = s.get(p.ppid);
    if (h) h.push(g);
    else s.set(p.ppid, [g])
  }
  let u = [],
    l = [e];
  for (let f = 0; f < l.length; f++)
    for (let p of s.get(l[f]) ?? []) u.push(p), l.push(p.pid);
  return u
}

function Or(e, n, r = {
  mkdirSync: St,
  writeFileSync: Pe,
  rmdirSync: yr
}) {
  if (e.reuse) return;
  let o = !0;
  try {
    r.mkdirSync(e.dir)
  } catch (s) {
    if (v(s) !== "EEXIST") throw s;
    o = !1
  }
  try {
    r.writeFileSync(I.join(e.dir, e.v2 ? "memory.max" : "memory.limit_in_bytes"), String(n))
  } catch (s) {
    if (o) try {
      r.rmdirSync?.(e.dir)
    } catch {}
    throw s
  }
}

function Is(e) {
  let n = Ir(e);
  if (!n) return;
  return vs(n.mountRoot, n.path, n.v2 ? I.dirname(n.path) : n.path, n.v2)
}

function Ir(e) {
  let n;
  for (let r of e.split(`
`)) {
    let [o, s, u] = r.split(":");
    if (s === void 0 || u === void 0) continue;
    if (s.split(",").includes("memory")) return {
      mountRoot: "/sys/fs/cgroup/memory",
      path: u,
      v2: !1
    };
    if (o === "0" && s === "") n = u
  }
  return n === void 0 ? void 0 : {
    mountRoot: "/sys/fs/cgroup",
    path: n,
    v2: !0
  }
}

function Ps(e) {
  let n = Ir(e);
  if (!n) return;
  let r = n.path.split("/"),
    o = r.indexOf(ht);
  if (o < 0) return;
  let s = I.join(n.mountRoot, ...r.slice(0, o));
  return n.v2 ? {
    dir: I.join(s, ms),
    create: !0
  } : {
    dir: s,
    create: !1
  }
}
var Rs = {
  readSelfCgroup: () => W("/proc/self/cgroup", "utf8"),
  mkdirSync: St,
  writeFileSync: Pe
};

function Ns(e) {
  let n = O();
  if (n !== "linux" && n !== "wsl") return;
  try {
    let r = Ps(e.readSelfCgroup());
    if (r === void 0) return;
    if (r.create) try {
      e.mkdirSync(r.dir)
    } catch (o) {
      if (v(o) !== "EEXIST") throw o
    }
    return r.dir
  } catch (r) {
    t(`tool cgroup: keeper dir unavailable (${v(r)??r})`);
    return
  }
}

function tT(e, n = Rs) {
  if (!e) return;
  let r = Ns(n);
  if (r === void 0) return;
  try {
    n.writeFileSync(I.join(r, "cgroup.procs"), String(e)), t(`tool cgroup: keeper pid ${e} moved to ${r}`)
  } catch (o) {
    t(`tool cgroup: keeper pid ${e} not moved (${v(o)??o})`)
  }
}

function vs(e, n, r, o) {
  let s = n.split("/").includes(ht),
    u = I.join(e, n, ".");
  return s ? {
    dir: u,
    v2: o,
    reuse: !0,
    selfDir: u
  } : {
    dir: I.join(e, r, ht),
    v2: o,
    reuse: !1,
    selfDir: u
  }
}

function As(e) {
  return Math.floor(e - Math.max(2 * Sr, e * 0.15))
}

function Gs(e, n) {
  if (e !== void 0) return e;
  let r = As(n);
  return r >= gs ? r : void 0
}

function Fs(e) {
  let n = /^(\d+(?:\.\d+)?)\s*([kmgt]?)(?:i?b)?$/i.exec(e?.trim() ?? "");
  if (!n) return;
  let r = Math.floor(Number(n[1]) * 1024 ** " kmgt".indexOf((n[2] || " ").toLowerCase()));
  return r >= 1 ? r : void 0
}

function se({
  useToolMemoryCgroup: e = !0,
  toolCgroupClass: n = "helper"
}) {
  return e ? Ea(n) : {}
}

function Ct() {
  return !0
}
async function jm(e, n = [], r = {}) {
  let {
    useToolMemoryCgroup: o,
    toolCgroupClass: s,
    ...u
  } = r, l = {
    ...se({
      useToolMemoryCgroup: o,
      toolCgroupClass: s
    }),
    ...u
  };
  if (Ct()) {
    let f = Q0(e);
    if (f === null) throw Error(`Command '${e}' not found or is in an unsafe location (current directory)`);
    return A(f, n, l)
  }
  return A(e, n, l)
}

function oA(e, n = [], r = {}) {
  let {
    useToolMemoryCgroup: o,
    toolCgroupClass: s,
    ...u
  } = r, l = e;
  if (Ct()) {
    let g = Q0(e);
    if (g === null) throw Object.assign(new P(`Command '${e}' not found or is in an unsafe location (current directory)`, "safeSpawn: command not found or is in an unsafe location (current directory)"), {
      code: "ENOENT"
    });
    l = g
  }
  let f = se({
      useToolMemoryCgroup: o,
      toolCgroupClass: s
    }),
    p = A(l, n, {
      ...f,
      ...u,
      buffer: !1,
      reject: !1
    });
  if (o !== !1 && f.cgroup === void 0 && Z8e()) oxe(s ?? "helper", p.pid);
  return p.catch(() => {}), p
}

function wzr(e, n = [], r = {}) {
  let {
    useToolMemoryCgroup: o,
    toolCgroupClass: s,
    ...u
  } = r, l = {
    ...se({
      useToolMemoryCgroup: o,
      toolCgroupClass: s
    }),
    ...u
  };
  if (Ct()) {
    let f = Q0(e);
    if (f === null) throw Error(`Command '${e}' not found or is in an unsafe location (current directory)`);
    return ee(f, n, l)
  }
  return ee(e, n, l)
}
async function EC(e, n = {}) {
  let {
    useToolMemoryCgroup: r,
    toolCgroupClass: o,
    ...s
  } = n;
  return A(e, {
    ...se({
      useToolMemoryCgroup: r,
      toolCgroupClass: o
    }),
    ...s,
    shell: !0
  })
}

function Pr(e, n = {}) {
  let {
    useToolMemoryCgroup: r,
    toolCgroupClass: o,
    ...s
  } = n;
  return ee(e, {
    ...se({
      useToolMemoryCgroup: r,
      toolCgroupClass: o
    }),
    ...s,
    shell: !0
  })
}
var Ls = 1000,
  ks = 60;

function QBt(e, {
  abortSignal: n,
  timeout: r = 10 * ks * Ls,
  input: o,
  stdio: s = ["ignore", "pipe", "pipe"],
  useToolMemoryCgroup: u
} = {}) {
  n?.throwIfAborted();
  using l = gm`exec: ${e.slice(0,200)}`;
  try {
    let f = Pr(e, {
      env: process.env,
      maxBuffer: 1e6,
      timeout: r,
      cwd: oe(),
      stdio: s,
      reject: !1,
      input: o,
      useToolMemoryCgroup: u
    });
    if (!f.stdout) return null;
    return f.stdout.trim() || null
  } catch {
    return null
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
  })
}
var Ms = 6000;
async function Ds(e, n) {
  if (e.pid === void 0 || e.exitCode !== null || e.signalCode !== null) return;
  await nt(new Promise((r) => e.once("exit", () => r())), n)
}

function Rr(e) {
  return v(e) === "ERR_CHILD_PROCESS_STDIO_MAXBUFFER" || e?.isMaxBuffer === !0 || e?.name === "MaxBufferError"
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
  let f = n.findIndex((S) => typeof S === "string" && S.includes("\x00"));
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
    local: `${l} the name of environment variable ${Ar(g[0])} contains a null byte (\\0)${Nr(g,u)}`
  };
  let h = p.find(([, S]) => typeof S === "string" && S.includes("\x00"));
  return h && {
    telemetry: ce.envValue,
    local: `${l} the value of environment variable ${Ar(h[0])} contains a null byte (\\0)${Nr(h,u)}`
  }
}

function Nr([e, n], r) {
  return r[e] === n ? "; every program this process starts will fail the same way until that variable is removed from its environment" : " (in the env passed for this command)"
}
var vr = 200;

function Bs(e) {
  return e === 1 ? "1 character" : `${e} characters`
}

function Gr(e) {
  return fa(e).slice(1, -1).replace(/[^\x20-\x7e]/g, (n) => `\\u${n.charCodeAt(0).toString(16).padStart(4,"0")}`)
}

function Ar(e) {
  let n = e.indexOf("="),
    r = n === -1 ? e : e.slice(0, n),
    o = r.length > vr,
    s = `"${Gr(o?r.slice(0,vr):r)}"${o?"\u2026":""}`;
  return n === -1 ? s : `${s} (then '=' and ${Bs(e.length-n-1)}, not shown)`
}
var js = new Set(["EPIPE", "ECONNRESET", "ENOTCONN", "EOF"]);

function Ws(e) {
  let n = {},
    r;
  try {
    r = e.stdin
  } catch {
    return n
  }
  if (!r) return n;
  return r.removeAllListeners("error"), r.on("error", (o) => {
    let s = v(o) ?? "unknown";
    if (js.has(s)) return;
    n.truncatedBy ??= s, e.kill()
  }), n
}

function Ks(e, n) {
  if (e.shortMessage) return e.shortMessage;
  if (typeof e.signal === "string") return e.signal;
  return String(n)
}

function Ne(e) {
  return e instanceof Uint8Array ? Buffer.from(e).toString("latin1") : typeof e === "string" ? e : ""
}
async function Ve(e, n, {
  abortSignal: r,
  timeout: o = 10 * bt * _t,
  preserveOutputOnError: s = !0,
  cwd: u,
  env: l,
  extendEnv: f,
  maxBuffer: p,
  shell: g,
  stdin: h,
  input: S,
  stdout: E,
  stderr: C,
  stripFinalNewline: T,
  encoding: w,
  allowRepoGitHooks: N,
  allowGitTerminalPrompt: F,
  useToolMemoryCgroup: L = !0,
  toolCgroupClass: M = "helper",
  waitForExitAfterKill: ae = !1
} = {
  timeout: 10 * bt * _t,
  preserveOutputOnError: !0,
  maxBuffer: 1e6
}) {
  let G = e;
  if (!g) {
    let x = Q0(e);
    if (x === null) return {
      stdout: "",
      stderr: `Command '${e}' not found or is in an unsafe location (current directory)`,
      code: 127,
      error: `Command '${e}' not found or is in an unsafe location (current directory)`
    };
    G = x
  }
  let K = process.env,
    H = XUe(G, n, l === void 0 ? K : f === !1 ? l : {
      ...K,
      ...l
    }, l && "GIT_CONFIG_COUNT" in l ? l.GIT_CONFIG_COUNT : a.GIT_CONFIG_COUNT, {
      allowRepoGitHooks: N,
      allowGitTerminalPrompt: F
    }),
    Fr = H?.args ?? n,
    ve = H?.env ?? l,
    b, Ae;
  try {
    let x = A(G, Fr, {
      signal: r,
      timeout: o,
      cwd: u,
      env: ve,
      shell: g,
      stdin: h,
      ...p === void 0 ? {} : {
        maxBuffer: p
      },
      ...T === void 0 ? {} : {
        stripFinalNewline: T
      },
      ...w === "latin1" && {
        encoding: "latin1"
      },
      ...E === void 0 ? {} : {
        stdout: E
      },
      ...C === void 0 ? {} : {
        stderr: C
      },
      ...f === void 0 ? {} : {
        extendEnv: f
      },
      ...L ? Ea(M) : {},
      reject: !1
    });
    if (Ae = S === void 0 ? void 0 : Ws(x), S !== void 0 && x.pid !== void 0) x.stdin?.end(S);
    if (b = await x, ae && b.exitCode === void 0 && (r?.aborted === !0 || b.timedOut)) await Ds(x, Ms)
  } catch (x) {
    let Pt = x.message;
    if (as(x)) t(`execFileNoThrow spawn failed: ${v(x)} ${Pt}`, {
      level: "error"
    });
    else if (Rr(x)) return t(`execFileNoThrow maxBuffer exceeded: ${Pt}`, {
      level: "error"
    }), {
      stdout: "",
      stderr: "",
      code: 1,
      maxBufferExceeded: !0
    };
    else {
      let Rt = process.env,
        V = v(x) === "ERR_INVALID_ARG_VALUE" ? Us(G, n, u, ve, f === !1 && ve !== void 0 ? void 0 : Rt, Rt) : void 0;
      if (V) t(`execFileNoThrow spawn refused: ${V.local}`, {
        level: "error"
      });
      let Nt = te(x);
      d(st(V ? lr(Nt, V.telemetry) : Nt, V?.telemetry ?? "execFileNoThrow unexpected rejection"))
    }
    return {
      stdout: "",
      stderr: "",
      code: 1
    }
  }
  if (Ae?.truncatedBy !== void 0) {
    let x = `stdin write failed: ${Ae.truncatedBy}`;
    return t(`execFileNoThrow ${x}`, {
      level: "error"
    }), {
      stdout: "",
      stderr: "",
      code: 1,
      error: x
    }
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
  if (!s) return {
    stdout: "",
    stderr: "",
    code: b.exitCode ?? 1,
    exitCode: b.exitCode,
    ...wt,
    ...Ot
  };
  let It = b.exitCode ?? 1;
  return {
    stdout: Ne(b.stdout),
    stderr: Ne(b.stderr),
    code: It,
    error: Ks(b, It),
    exitCode: b.exitCode,
    ...wt,
    ...Ot
  }
}
export {
  ihn,
  ere,
  oUo,
  sUo,
  iUo,
  aUo,
  yzr,
  f5n,
  lUo,
  mn,
  vb,
  aK,
  ahn,
  lhn,
  chn,
  YUe,
  JBt,
  No,
  dhn,
  J8e,
  tre,
  m5n,
  txe,
  g5n,
  _zr,
  XUe,
  lK,
  cUo,
  Q8e,
  JN,
  QN,
  nxe,
  bzr,
  rxe,
  uhn,
  phn,
  dUo,
  uUo,
  Ea,
  fhn,
  Z8e,
  mhn,
  oxe,
  Szr,
  pUo,
  fUo,
  mUo,
  ghn,
  tT,
  jm,
  oA,
  wzr,
  EC,
  QBt,
  tt,
  Ve
};
