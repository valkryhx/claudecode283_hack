// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { rs } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { Po, q, Qp } from "B:/~BUN/root/chunk-game8aqv.js";
import { b, f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { R, k, tr } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g, m } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { wj, i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { wN } from "B:/~BUN/root/chunk-83p1z1q5.js";
import { no } from "B:/~BUN/root/chunk-qszgzq5m.js";
import { NH, Fnt } from "B:/~BUN/root/chunk-nxckfnqx.js";
import { Oe, M, je } from "B:/~BUN/root/chunk-4qfwb3rf.js";
var at = M(function (ei, st) {
  st.exports = it;
  it.sync = Mn;
  var rt = je("fs");
  function jn(e, n) {
    var r = n.pathExt !== void 0 ? n.pathExt : process.env.PATHEXT;
    if (!r) return !0;
    if (r = r.split(";"), r.indexOf("") !== -1) return !0;
    for (var o = 0; o < r.length; o++) {
      var s = r[o].toLowerCase();
      if (s && e.substr(-s.length).toLowerCase() === s) return !0;
    }
    return !1;
  }
  function ot(e, n, r) {
    if (!e.isSymbolicLink() && !e.isFile()) return !1;
    return jn(n, r);
  }
  function it(e, n, r) {
    rt.stat(e, function (o, s) {
      r(o, o ? !1 : ot(s, e, n));
    });
  }
  function Mn(e, n) {
    return ot(rt.statSync(e), e, n);
  }
});
var ct = M(function (ni, ut) {
  var ti = je("fs"),
    fe;
  fe = at();
  ut.exports = pe;
  pe.sync = Dn;
  function pe(e, n, r) {
    if (typeof n === "function") r = n, n = {};
    if (!r) {
      if (typeof Promise !== "function") throw TypeError("callback not provided");
      return new Promise(function (o, s) {
        pe(e, n || {}, function (a, u) {
          if (a) s(a);else o(u);
        });
      });
    }
    fe(e, n || {}, function (o, s) {
      if (o) {
        if (o.code === "EACCES" || n && n.ignoreErrors) o = null, s = !1;
      }
      r(o, s);
    });
  }
  function Dn(e, n) {
    try {
      return fe.sync(e, n || {});
    } catch (error) {
      if (n && n.ignoreErrors || error.code === "EACCES") return !1;else throw error;
    }
  }
});
var mt = M(function (ri, pt) {
  var X = je("path"),
    me = ct(),
    dt = e => Object.assign(Error(`not found: ${e}`), {
      code: "ENOENT"
    }),
    lt = (e, n) => {
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
    ft = (e, n, r) => {
      if (typeof n === "function") r = n, n = {};
      if (!n) n = {};
      let {
          pathEnv: pathEnv_2,
          pathExt: pathExt_2,
          pathExtExe: a
        } = lt(e, n),
        u = [],
        c = p => new Promise((h, S) => {
          if (p === pathEnv_2.length) return n.all && u.length ? h(u) : S(dt(e));
          let y = pathEnv_2[p],
            w = /^".*"$/.test(y) ? y.slice(1, -1) : y,
            C = X.join(w, e),
            T = !w && /^\.[\\\/]/.test(e) ? e.slice(0, 2) + C : C;
          h(d(T, p, 0));
        }),
        d = (p, h, S) => new Promise((y, w) => {
          if (S === pathExt_2.length) return y(c(h + 1));
          let C = pathExt_2[S];
          me(p + C, {
            pathExt: a
          }, (T, P) => {
            if (!T && P) if (n.all) u.push(p + C);else return y(p + C);
            return y(d(p, h, S + 1));
          });
        });
      return r ? c(0).then(p => r(null, p), r) : c(0);
    },
    Un = (e, n) => {
      n = n || {};
      let {
          pathEnv: pathEnv_3,
          pathExt: pathExt_3,
          pathExtExe: s
        } = lt(e, n),
        a = [];
      for (let u = 0; u < pathEnv_3.length; u++) {
        let c = pathEnv_3[u],
          d = /^".*"$/.test(c) ? c.slice(1, -1) : c,
          p = X.join(d, e),
          h = !d && /^\.[\\\/]/.test(e) ? e.slice(0, 2) + p : p;
        for (let S = 0; S < pathExt_3.length; S++) {
          let y = h + pathExt_3[S];
          try {
            if (me.sync(y, {
              pathExt: s
            })) if (n.all) a.push(y);else return y;
          } catch (error) {}
        }
      }
      if (n.all && a.length) return a;
      if (n.nothrow) return null;
      throw dt(e);
    };
  pt.exports = ft;
  ft.sync = Un;
});
var ht = M(function (oi, ge) {
  var gt = (e = {}) => {
    let n = e.env || process.env;
    if ((e.platform || "win32") !== "win32") return "PATH";
    return Object.keys(n).reverse().find(item => item.toUpperCase() === "PATH") || "Path";
  };
  ge.exports = gt;
  ge.exports.default = gt;
});
var bt = M(function (ii, xt) {
  var Y = je("path"),
    St = mt(),
    Bn = ht();
  function yt(e, n) {
    let env = e.options.env || process.env,
      o = process.cwd(),
      s = e.options.cwd != null,
      a = s && process.chdir !== void 0 && !process.chdir.disabled;
    if (a) try {
      process.chdir(e.options.cwd);
    } catch (error) {}
    let u;
    try {
      u = St.sync(e.command, {
        path: env[Bn({
          env: env
        })],
        pathExt: n ? Y.delimiter : void 0
      });
    } catch (error) {} finally {
      if (a) try {
        process.chdir(o);
      } catch (error) {
        let d = error !== null && typeof error === "object" && typeof error.code === "string" ? error.code : "";
        if (!(/^E[A-Z0-9]+$/.test(d) || d === "UNKNOWN" || d.startsWith("Unknown system error"))) throw error;
      }
    }
    if (u) u = Y.resolve(s ? e.options.cwd : "", u);
    return u;
  }
  function Kn(e) {
    return yt(e) || yt(e, !0);
  }
  xt.exports = Kn;
});
var Ct = M(function (qn, ye) {
  var he = /([()\][%!^"`<>&|;, *?])/g;
  function Wn(e) {
    return e = e.replace(he, "^$1"), e;
  }
  function zn(e, n) {
    if (e = `${e}`, e = e.replace(/(?=(\\+?)?)\1"/g, "$1$1\\\""), e = e.replace(/(?=(\\+?)?)\1$/, "$1$1"), e = `"${e}"`, e = e.replace(he, "^$1"), n) e = e.replace(he, "^$1");
    return e;
  }
  qn.command = Wn;
  qn.argument = zn;
});
var Et = M(function (si, wt) {
  wt.exports = /^#!(.*)/;
});
var Pt = M(function (ai, Tt) {
  var Xn = Et();
  Tt.exports = (e = "") => {
    let n = e.match(Xn);
    if (!n) return null;
    let [r, o] = n[0].replace(/#! ?/, "").split(" "),
      s = r.split("/").pop();
    if (s === "env") return o;
    return o ? `${s} ${o}` : s;
  };
});
var Ot = M(function (ui, It) {
  var I = je("fs"),
    Yn = Pt();
  function Zn(e) {
    let r = Buffer.alloc(150),
      o;
    try {
      o = I.openSync(e, "r"), I.readSync(o, r, 0, 150, 0), I.closeSync(o);
    } catch (error) {}
    return Yn(r.toString());
  }
  It.exports = Zn;
});
var _t = M(function (ci, Rt) {
  var At = je("path"),
    vt = bt(),
    Z = Ct(),
    Qn = Ot(),
    Jn = /\.(?:com|exe)$/i,
    er = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;
  function nr(e) {
    e.file = vt(e);
    let n = e.file && Qn(e.file);
    if (n) return e.args.unshift(e.file), e.command = n, vt(e);
    return e.file;
  }
  function rr(e) {
    let n = nr(e),
      r = !Jn.test(n);
    if (e.options.forceShell || r) {
      let o = er.test(n);
      e.command = At.normalize(e.command), e.command = Z.command(e.command), e.args = e.args.map(item => Z.argument(item, o));
      let s = [e.command].concat(e.args).join(" ");
      e.args = ["/d", "/s", "/c", `"${s}"`], e.command = process.env.comspec || "cmd.exe", e.options.windowsVerbatimArguments = !0;
    }
    return e;
  }
  function or(command, args, options) {
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
    return options.shell ? o : rr(o);
  }
  Rt.exports = or;
});
var Ft = M(function (di, kt) {
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
        let a = verifyENOENT(s, n);
        if (a) return r.call(e, "error", a);
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
  kt.exports = {
    hookChildProcess: hookChildProcess,
    verifyENOENT: verifyENOENT,
    verifyENOENTSync: verifyENOENTSync,
    notFoundError: notFoundError
  };
});
var AFr = M(function (li, O) {
  var Q = je("child_process"),
    xe = _t(),
    _ = Ft();
  function Nt(e, n, r) {
    let o = xe(e, n, r),
      s = Q.spawn(o.command, o.args, o.options);
    return _.hookChildProcess(s, o), s;
  }
  function ar(e, n, r) {
    let o = xe(e, n, r),
      s = Q.spawnSync(o.command, o.args, o.options);
    return s.error = s.error || _.verifyENOENTSync(s.status, o), s;
  }
  O.exports = Nt;
  O.exports.spawn = Nt;
  O.exports.sync = ar;
  O.exports._parse = xe;
  O.exports._enoent = _;
});
var ln = M(function (ys, dn) {
  var {
    PassThrough: PassThrough
  } = je("stream");
  dn.exports = function exports() {
    var e = [],
      n = new PassThrough({
        objectMode: !0
      });
    return n.setMaxListeners(0), n.add = r, n.isEmpty = o, n.on("unpipe", s), Array.prototype.slice.call(arguments).forEach(r), n;
    function r(a) {
      if (Array.isArray(a)) return a.forEach(r), this;
      return e.push(a), a.once("end", s.bind(null, a)), a.once("error", n.emit.bind(n, "error")), a.pipe(n, {
        end: !1
      }), this;
    }
    function o() {
      return e.length == 0;
    }
    function s(a) {
      if (e = e.filter(function (item) {
        return item !== a;
      }), !e.length && n.readable) n.end();
    }
  };
});
var Tn = Oe(AFr(), 1);
import { Buffer as Io } from "buffer";
import Oo from "path";
import ze from "child_process";
import de from "process";
function be(e) {
  let n = typeof e === "string" ? `
` : `
`.charCodeAt(),
    r = typeof e === "string" ? "\r" : "\r".charCodeAt();
  if (e[e.length - 1] === n) e = e.slice(0, -1);
  if (e[e.length - 1] === r) e = e.slice(0, -1);
  return e;
}
import ee from "process";
import F from "path";
import { fileURLToPath as Lt } from "url";
function J(e = {}) {
  let {
    env: env_2 = process.env,
    platform = "win32"
  } = e;
  if (platform !== "win32") return "PATH";
  return Object.keys(env_2).reverse().find(item => item.toUpperCase() === "PATH") || "Path";
}
var ur = ({
    cwd = ee.cwd(),
    path = ee.env[J()],
    preferLocal = !0,
    execPath = ee.execPath,
    addExecPath = !0
  } = {}) => {
    let a = cwd instanceof URL ? Lt(cwd) : cwd,
      u = F.resolve(a),
      c = [];
    if (preferLocal) cr(c, u);
    if (addExecPath) dr(c, execPath, u);
    return [...c, path].join(F.delimiter);
  },
  cr = (e, n) => {
    let r;
    while (r !== n) e.push(F.join(n, "node_modules/.bin")), r = n, n = F.resolve(n, "..");
  },
  dr = (e, n, r) => {
    let o = n instanceof URL ? Lt(n) : n;
    e.push(F.resolve(r, o, ".."));
  },
  Gt = ({
    env: env_3 = ee.env,
    ...n
  } = {}) => {
    env_3 = {
      ...env_3
    };
    let r = J({
      env: env_3
    });
    return n.path = env_3[r], env_3[r] = ur(n), env_3;
  };
var lr = (e, n, r, o) => {
    if (r === "length" || r === "prototype") return;
    if (r === "arguments" || r === "caller") return;
    let s = Object.getOwnPropertyDescriptor(e, r),
      a = Object.getOwnPropertyDescriptor(n, r);
    if (!fr(s, a) && o) return;
    Object.defineProperty(e, r, a);
  },
  fr = function (e, n) {
    return e === void 0 || e.configurable || e.writable === n.writable && e.enumerable === n.enumerable && e.configurable === n.configurable && (e.writable || e.value === n.value);
  },
  pr = (e, n) => {
    let r = Object.getPrototypeOf(n);
    if (r === Object.getPrototypeOf(e)) return;
    Object.setPrototypeOf(e, r);
  },
  mr = (e, n) => `/* Wrapped ${e}*/
${n}`,
  gr = Object.getOwnPropertyDescriptor(Function.prototype, "toString"),
  hr = Object.getOwnPropertyDescriptor(Function.prototype.toString, "name"),
  yr = (e, n, r) => {
    let o = r === "" ? "" : `with ${r.trim()}() `,
      value = mr.bind(null, o, n.toString());
    Object.defineProperty(value, "name", hr), Object.defineProperty(e, "toString", {
      ...gr,
      value: value
    });
  };
function Ce(e, n, {
  ignoreNonConfigurable = !1
} = {}) {
  let {
    name: name
  } = e;
  for (let s of Reflect.ownKeys(n)) lr(e, n, s, ignoreNonConfigurable);
  return pr(e, n), yr(e, n, name), e;
}
var weakMap = new WeakMap(),
  jt = (e, n = {}) => {
    if (typeof e !== "function") throw TypeError("Expected a function");
    let r,
      o = 0,
      s = e.displayName || e.name || "<anonymous>",
      a = function (...u) {
        if (weakMap.set(a, ++o), o === 1) r = e.apply(this, u), e = null;else if (n.throw === !0) throw Error(`Function \`${s}\` can only be called once`);
        return r;
      };
    return Ce(a, e), weakMap.set(a, o), a;
  };
jt.callCount = e => {
  if (!weakMap.has(e)) throw Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);
  return weakMap.get(e);
};
var Mt = jt;
import Or from "process";
import { constants as Cr } from "os";
var Dt = () => {
    let length = we - Ut + 1;
    return Array.from({
      length: length
    }, Sr);
  },
  Sr = (e, n) => ({
    name: `SIGRT${n + 1}`,
    number: Ut + n,
    action: "terminate",
    description: "Application-specific signal (realtime)",
    standard: "posix"
  }),
  Ut = 34,
  we = 64;
import { constants as xr } from "os";
var Bt = [{
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
var Ee = () => {
    let e = Dt();
    return [...Bt, ...e].map(br);
  },
  br = ({
    name: name_2,
    number: number,
    description: description,
    action: action,
    forced = !1,
    standard: standard
  }) => {
    let {
        signals: {
          [name_2]: u
        }
      } = xr,
      supported = u !== void 0;
    return {
      name: name_2,
      number: supported ? u : number,
      description: description,
      supported: supported,
      action: action,
      forced: forced,
      standard: standard
    };
  };
var wr = () => {
    let e = Ee();
    return Object.fromEntries(e.map(Er));
  },
  Er = ({
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
  Kt = wr(),
  Tr = () => {
    let e = Ee(),
      length_2 = we + 1,
      r = Array.from({
        length: length_2
      }, (o, s) => Pr(s, e));
    return Object.assign({}, ...r);
  },
  Pr = (number_3, n) => {
    let r = Ir(number_3, n);
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
  Ir = (e, n) => {
    let r = n.find(({
      name: name_5
    }) => Cr.signals[name_5] === e);
    if (r !== void 0) return r;
    return n.find(item => item.number === e);
  },
  _i = Tr();
var vr = ({
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
  N = ({
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
        cwd: cwd_2 = Or.cwd()
      }
    }
  }) => {
    exitCode_2 = exitCode_2 === null ? void 0 : exitCode_2, signal_2 = signal_2 === null ? void 0 : signal_2;
    let signalDescription_2 = signal_2 === void 0 ? void 0 : Kt[signal_2].description,
      errorCode_2 = error_2 && error_2.code,
      P = `Command ${vr({
        timedOut: timedOut_2,
        timeout: timeout_2,
        errorCode: errorCode_2,
        signal: signal_2,
        signalDescription: signalDescription_2,
        exitCode: exitCode_2,
        isCanceled: isCanceled_2
      })}: ${command_2}`,
      z = Object.prototype.toString.call(error_2) === "[object Error]",
      H = z ? `${P}
${error_2.message}` : P,
      V = [H, stderr, stdout].filter(Boolean).join(`
`);
    if (z) error_2.originalMessage = error_2.message, error_2.message = V;else error_2 = Error(V);
    if (error_2.shortMessage = H, error_2.command = command_2, error_2.escapedCommand = escapedCommand, error_2.exitCode = exitCode_2, error_2.signal = signal_2, error_2.signalDescription = signalDescription_2, error_2.stdout = stdout, error_2.stderr = stderr, error_2.cwd = cwd_2, all !== void 0) error_2.all = all;
    if ("bufferedData" in error_2) delete error_2.bufferedData;
    return error_2.failed = !0, error_2.timedOut = Boolean(timedOut_2), error_2.isCanceled = isCanceled_2, error_2.killed = killed && !timedOut_2, error_2;
  };
var ne = ["stdin", "stdout", "stderr"],
  Ar = e => ne.some(item => e[item] !== void 0),
  Wt = e => {
    if (!e) return;
    let {
      stdio: stdio
    } = e;
    if (stdio === void 0) return ne.map(item => e[item]);
    if (Ar(e)) throw Error(`It's not possible to provide \`stdio\` in combination with one of ${ne.map(item => `\`${item}\``).join(", ")}`);
    if (typeof stdio === "string") return stdio;
    if (!Array.isArray(stdio)) throw TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof stdio}\``);
    let length_3 = Math.max(stdio.length, ne.length);
    return Array.from({
      length: length_3
    }, (o, s) => stdio[s]);
  };
import $r from "os";
var L = [];
L.push("SIGHUP", "SIGINT", "SIGTERM");
var re = e => !!e && typeof e === "object" && typeof e.removeListener === "function" && typeof e.emit === "function" && typeof e.reallyExit === "function" && typeof e.listeners === "function" && typeof e.kill === "function" && typeof e.pid === "number" && typeof e.on === "function",
  Te = Symbol.for("signal-exit emitter"),
  globalThis_2 = globalThis,
  Rr = Object.defineProperty.bind(Object);
class zt {
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
    if (globalThis_2[Te]) return globalThis_2[Te];
    Rr(globalThis_2, Te, {
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
class ve {}
var _r = e => ({
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
class qt extends ve {
  onExit() {
    return () => {};
  }
  load() {}
  unload() {}
}
class Ht extends ve {
  #s = process_2.platform === "win32" ? "SIGINT" : "SIGHUP";
  #t = new zt();
  #e;
  #o;
  #i;
  #r = {};
  #n = !1;
  constructor(e) {
    super();
    this.#e = e, this.#r = {};
    for (let n of L) this.#r[n] = () => {
      let r = this.#e.listeners(n),
        {
          count: count
        } = this.#t,
        s = e;
      if (typeof s.__signal_exit_emitter__ === "object" && typeof s.__signal_exit_emitter__.count === "number") count += s.__signal_exit_emitter__.count;
      if (r.length === count) {
        this.unload();
        let a = this.#t.emit("exit", null, n),
          u = n === "SIGHUP" ? this.#s : n;
        if (!a) e.kill(e.pid, u);
      }
    };
    this.#i = e.reallyExit, this.#o = e.emit;
  }
  onExit(e, n) {
    if (!re(this.#e)) return () => {};
    if (this.#n === !1) this.load();
    let r = n?.alwaysLast ? "afterExit" : "exit";
    return this.#t.on(r, e), () => {
      if (this.#t.removeListener(r, e), this.#t.listeners.exit.length === 0 && this.#t.listeners.afterExit.length === 0) this.unload();
    };
  }
  load() {
    if (this.#n) return;
    this.#n = !0, this.#t.count += 1;
    for (let e of L) try {
      let n = this.#r[e];
      if (n) this.#e.on(e, n);
    } catch (error) {}
    this.#e.emit = (e, ...n) => this.#u(e, ...n), this.#e.reallyExit = e => this.#a(e);
  }
  unload() {
    if (!this.#n) return;
    this.#n = !1, L.forEach(item => {
      let n = this.#r[item];
      if (!n) throw Error("Listener not defined for signal: " + item);
      try {
        this.#e.removeListener(item, n);
      } catch (error) {}
    }), this.#e.emit = this.#o, this.#e.reallyExit = this.#i, this.#t.count -= 1;
  }
  #a(e) {
    if (!re(this.#e)) return 0;
    return this.#e.exitCode = e || 0, this.#t.emit("exit", this.#e.exitCode, null), this.#i.call(this.#e, this.#e.exitCode);
  }
  #u(e, ...n) {
    let r = this.#o;
    if (e === "exit" && re(this.#e)) {
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
  } = _r(re(process_2) ? new Ht(process_2) : new qt());
var kr = 5000,
  Vt = (e, n = "SIGTERM", r = {}) => {
    let o = e(n);
    return Fr(e, n, r, o), o;
  },
  Fr = (e, n, r, o) => {
    if (!Nr(n, r, o)) return;
    let s = Gr(r),
      a = setTimeout(() => {
        e("SIGKILL");
      }, s);
    if (a.unref) a.unref();
  },
  Nr = (e, {
    forceKillAfterTimeout: forceKillAfterTimeout
  }, r) => Lr(e) && forceKillAfterTimeout !== !1 && r,
  Lr = e => e === $r.constants.signals.SIGTERM || typeof e === "string" && e.toUpperCase() === "SIGTERM",
  Gr = ({
    forceKillAfterTimeout: forceKillAfterTimeout_2 = !0
  }) => {
    if (forceKillAfterTimeout_2 === !0) return kr;
    if (!Number.isFinite(forceKillAfterTimeout_2) || forceKillAfterTimeout_2 < 0) throw TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${forceKillAfterTimeout_2}\` (${typeof forceKillAfterTimeout_2})`);
    return forceKillAfterTimeout_2;
  },
  Xt = (e, n) => {
    if (e.kill()) n.isCanceled = !0;
  },
  jr = (e, signal_3, r) => {
    e.kill(signal_3), r(Object.assign(Error("Timed out"), {
      timedOut: !0,
      signal: signal_3
    }));
  },
  Yt = (e, {
    timeout: timeout_3,
    killSignal = "SIGTERM"
  }, o) => {
    if (timeout_3 === 0 || timeout_3 === void 0) return o;
    let s,
      promise = new Promise((c, d) => {
        s = setTimeout(() => {
          jr(e, killSignal, d);
        }, timeout_3);
      }),
      u = o.finally(() => {
        clearTimeout(s);
      });
    return Promise.race([promise, u]);
  },
  Zt = ({
    timeout: timeout_4
  }) => {
    if (timeout_4 !== void 0 && (!Number.isFinite(timeout_4) || timeout_4 < 0)) throw TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${timeout_4}\` (${typeof timeout_4})`);
  },
  Qt = async (e, {
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
import { createWriteStream as Mr } from "fs";
import { ChildProcess as Dr } from "child_process";
function oe(e) {
  return e !== null && typeof e === "object" && typeof e.pipe === "function";
}
function Ae(e) {
  return oe(e) && e.writable !== !1 && typeof e._write === "function" && typeof e._writableState === "object";
}
var Ur = e => e instanceof Dr && typeof e.then === "function",
  Re = (e, n, r) => {
    if (typeof r === "string") return e[n].pipe(Mr(r)), e;
    if (Ae(r)) return e[n].pipe(r), e;
    if (!Ur(r)) throw TypeError("The second argument must be a string, a stream or an Execa child process.");
    if (!Ae(r.stdin)) throw TypeError("The target child process's stdin must be available.");
    return e[n].pipe(r.stdin), r;
  },
  Jt = e => {
    if (e.stdout !== null) e.pipeStdout = Re.bind(void 0, e, "stdout");
    if (e.stderr !== null) e.pipeStderr = Re.bind(void 0, e, "stderr");
    if (e.all !== void 0) e.pipeAll = Re.bind(void 0, e, "all");
  };
import { createReadStream as ao, readFileSync as uo } from "fs";
import { setTimeout as co } from "timers/promises";
var G = async (e, {
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
    if (!Kr(e)) throw Error("The first argument must be a Readable, a ReadableStream, or an async iterable.");
    let state = init();
    state.length = 0;
    try {
      for await (let h of e) {
        let S = Wr(h),
          convertedChunk = convertChunk[S](h, state);
        nn({
          convertedChunk: convertedChunk,
          state: state,
          getSize: getSize,
          truncateChunk: truncateChunk,
          addChunk: addChunk,
          maxBuffer: maxBuffer
        });
      }
      return Br({
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
  Br = ({
    state: state_2,
    getSize: getSize_2,
    truncateChunk: truncateChunk_2,
    addChunk: addChunk_2,
    getFinalChunk: getFinalChunk_2,
    maxBuffer: maxBuffer_2
  }) => {
    let convertedChunk_2 = getFinalChunk_2(state_2);
    if (convertedChunk_2 !== void 0) nn({
      convertedChunk: convertedChunk_2,
      state: state_2,
      getSize: getSize_2,
      truncateChunk: truncateChunk_2,
      addChunk: addChunk_2,
      maxBuffer: maxBuffer_2
    });
  },
  nn = ({
    convertedChunk: convertedChunk_3,
    state: state_3,
    getSize: getSize_3,
    truncateChunk: truncateChunk_3,
    addChunk: addChunk_3,
    maxBuffer: maxBuffer_3
  }) => {
    let u = getSize_3(convertedChunk_3),
      c = state_3.length + u;
    if (c <= maxBuffer_3) {
      en(convertedChunk_3, state_3, addChunk_3, c);
      return;
    }
    let d = truncateChunk_3(convertedChunk_3, maxBuffer_3 - state_3.length);
    if (d !== void 0) en(d, state_3, addChunk_3, maxBuffer_3);
    throw new _e();
  },
  en = (e, n, r, o) => {
    n.contents = r(e, n, o), n.length = o;
  },
  Kr = e => typeof e === "object" && e !== null && typeof e[Symbol.asyncIterator] === "function",
  Wr = e => {
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
class _e extends Error {
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
async function Ne(e, n) {
  return G(e, Jr, n);
}
var init_2 = () => ({
    contents: new ArrayBuffer(0)
  }),
  string = e => textEncoder.encode(e),
  textEncoder = new TextEncoder(),
  rn = e => new Uint8Array(e),
  on = e => new Uint8Array(e.buffer, e.byteOffset, e.byteLength),
  truncateChunk_4 = (e, n) => e.slice(0, n),
  addChunk_4 = (e, {
    contents: contents_2,
    length: length_4
  }, o) => {
    let s = un() ? Zr(contents_2, o) : Yr(contents_2, o);
    return new Uint8Array(s).set(e, length_4), s;
  },
  Yr = (e, n) => {
    if (n <= e.byteLength) return e;
    let arrayBuffer = new ArrayBuffer(an(n));
    return new Uint8Array(arrayBuffer).set(new Uint8Array(e), 0), arrayBuffer;
  },
  Zr = (e, n) => {
    if (n <= e.maxByteLength) return e.resize(n), e;
    let arrayBuffer_2 = new ArrayBuffer(n, {
      maxByteLength: an(n)
    });
    return new Uint8Array(arrayBuffer_2).set(new Uint8Array(e), 0), arrayBuffer_2;
  },
  an = e => sn ** Math.ceil(Math.log(e) / Math.log(sn)),
  sn = 2,
  finalize_2 = ({
    contents: contents_3,
    length: length_5
  }) => un() ? contents_3 : contents_3.slice(0, length_5),
  un = () => "resize" in ArrayBuffer.prototype,
  Jr = {
    init: init_2,
    convertChunk: {
      string: string,
      buffer: rn,
      arrayBuffer: rn,
      dataView: on,
      typedArray: on,
      others: others
    },
    getSize: getSize_4,
    truncateChunk: truncateChunk_4,
    addChunk: addChunk_4,
    getFinalChunk: getFinalChunk_3,
    finalize: finalize_2
  };
async function ae(e, n) {
  if (!("Buffer" in globalThis)) throw Error("getStreamAsBuffer() is only supported in Node.js");
  try {
    return cn(await Ne(e, n));
  } catch (error) {
    if (error.bufferedData !== void 0) error.bufferedData = cn(error.bufferedData);
    throw error;
  }
}
var cn = e => globalThis.Buffer.from(e);
async function Le(e, n) {
  return G(e, io, n);
}
var init_3 = () => ({
    contents: "",
    textDecoder: new TextDecoder()
  }),
  ue = (e, {
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
  io = {
    init: init_3,
    convertChunk: {
      string: string_2,
      buffer: ue,
      arrayBuffer: ue,
      dataView: ue,
      typedArray: ue,
      others: others
    },
    getSize: getSize_4,
    truncateChunk: truncateChunk_5,
    addChunk: addChunk_5,
    getFinalChunk: getFinalChunk_4,
    finalize: finalize_3
  };
var fn = Oe(ln(), 1),
  pn = e => {
    if (e !== void 0) throw TypeError("The `input` and `inputFile` options cannot be both set.");
  },
  lo = ({
    input: input,
    inputFile: inputFile
  }) => {
    if (typeof inputFile !== "string") return input;
    return pn(input), uo(inputFile);
  },
  mn = e => {
    let n = lo(e);
    if (oe(n)) throw TypeError("The `input` option cannot be a stream in sync mode");
    return n;
  },
  fo = ({
    input: input_2,
    inputFile: inputFile_2
  }) => {
    if (typeof inputFile_2 !== "string") return input_2;
    return pn(input_2), ao(inputFile_2);
  },
  gn = (e, n) => {
    let r = fo(n);
    if (r === void 0) return;
    if (oe(r)) r.pipe(e.stdin);else e.stdin.end(r);
  },
  hn = (e, {
    all: all_2
  }) => {
    if (!all_2 || !e.stdout && !e.stderr) return;
    let r = fn.default();
    if (e.stdout) r.add(e.stdout);
    if (e.stderr) r.add(e.stderr);
    return r;
  },
  Ge = async (e, n) => {
    if (!e || n === void 0) return;
    await co(0), e.destroy();
    try {
      return await n;
    } catch (error) {
      return error.bufferedData;
    }
  },
  Me = (e, {
    encoding: encoding,
    buffer: buffer,
    maxBuffer: maxBuffer_4
  }) => {
    if (!e || !buffer) return;
    if (encoding === "utf8" || encoding === "utf-8") return Le(e, {
      maxBuffer: maxBuffer_4
    });
    if (encoding === null || encoding === "buffer") return ae(e, {
      maxBuffer: maxBuffer_4
    });
    return po(e, maxBuffer_4, encoding);
  },
  po = async (e, maxBuffer_5, r) => (await ae(e, {
    maxBuffer: maxBuffer_5
  })).toString(r),
  yn = async ({
    stdout: stdout_2,
    stderr: stderr_2,
    all: all_3
  }, {
    encoding: encoding_2,
    buffer: buffer_2,
    maxBuffer: maxBuffer_6
  }, u) => {
    let c = Me(stdout_2, {
        encoding: encoding_2,
        buffer: buffer_2,
        maxBuffer: maxBuffer_6
      }),
      d = Me(stderr_2, {
        encoding: encoding_2,
        buffer: buffer_2,
        maxBuffer: maxBuffer_6
      }),
      p = Me(all_3, {
        encoding: encoding_2,
        buffer: buffer_2,
        maxBuffer: maxBuffer_6 * 2
      });
    try {
      return await Promise.all([u, c, d, p]);
    } catch (error_3) {
      return Promise.all([{
        error: error_3,
        signal: error_3.signal,
        timedOut: error_3.timedOut
      }, Ge(stdout_2, c), Ge(stderr_2, d), Ge(all_3, p)]);
    }
  };
var mo = (async () => {})().constructor.prototype,
  go = ["then", "catch", "finally"].map(item => [item, Reflect.getOwnPropertyDescriptor(mo, item)]),
  De = (e, n) => {
    for (let [r, o] of go) {
      let value_2 = typeof n === "function" ? (...a) => Reflect.apply(o.value, n(), a) : o.value.bind(n);
      Reflect.defineProperty(e, r, {
        ...o,
        value: value_2
      });
    }
  },
  Sn = e => new Promise((n, r) => {
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
import { Buffer as ho } from "buffer";
import { ChildProcess as yo } from "child_process";
var Cn = (e, n = []) => {
    if (!Array.isArray(n)) return [e];
    return [e, ...n];
  },
  So = /^[\w.-]+$/,
  xo = e => {
    if (typeof e !== "string" || So.test(e)) return e;
    return `"${e.replaceAll('"', "\\\"")}"`;
  },
  Ue = (e, n) => Cn(e, n).join(" "),
  Be = (e, n) => Cn(e, n).map(item => xo(item)).join(" "),
  bo = / +/g;
var xn = e => {
    let n = typeof e;
    if (n === "string") return e;
    if (n === "number") return String(e);
    if (n === "object" && e !== null && !(e instanceof yo) && "stdout" in e) {
      let r = typeof e.stdout;
      if (r === "string") return e.stdout;
      if (ho.isBuffer(e.stdout)) return e.stdout.toString();
      throw TypeError(`Unexpected "${r}" stdout in template expression`);
    }
    throw TypeError(`Unexpected "${n}" in template expression`);
  },
  bn = (e, n, r) => r || e.length === 0 || n.length === 0 ? [...e, ...n] : [...e.slice(0, -1), `${e.at(-1)}${n[0]}`, ...n.slice(1)],
  Co = ({
    templates: templates,
    expressions: expressions,
    tokens: tokens,
    index: index,
    template: template
  }) => {
    let a = template ?? templates.raw[index],
      u = a.split(bo).filter(Boolean),
      c = bn(tokens, u, a.startsWith(" "));
    if (index === expressions.length) return c;
    let d = expressions[index],
      p = Array.isArray(d) ? d.map(item => xn(item)) : [xn(d)];
    return bn(c, p, a.endsWith(" "));
  },
  Ke = (templates_2, expressions_2) => {
    let tokens_2 = [];
    for (let [index_2, template_2] of templates_2.entries()) tokens_2 = Co({
      templates: templates_2,
      expressions: expressions_2,
      tokens: tokens_2,
      index: index_2,
      template: template_2
    });
    return tokens_2;
  };
import { debuglog as wo } from "util";
import Eo from "process";
var wn = wo("execa").enabled,
  ce = (e, n) => String(e).padStart(n, "0"),
  To = () => {
    let date = new Date();
    return `${ce(date.getHours(), 2)}:${ce(date.getMinutes(), 2)}:${ce(date.getSeconds(), 2)}.${ce(date.getMilliseconds(), 3)}`;
  },
  We = (e, {
    verbose: verbose
  }) => {
    if (!verbose) return;
    Eo.stderr.write(`[${To()}] ${e}
`);
  };
var maxBuffer_7 = 1e8,
  Ao = ({
    env: env_4,
    extendEnv: extendEnv,
    preferLocal: preferLocal_2,
    localDir: o,
    execPath: execPath_2
  }) => {
    let env_5 = extendEnv ? {
      ...de.env,
      ...env_4
    } : env_4;
    if (preferLocal_2) return Gt({
      env: env_5,
      cwd: o,
      execPath: execPath_2
    });
    return env_5;
  },
  Pn = (file, args_2, options_2 = {}) => {
    let parsed = Tn.default._parse(file, args_2, options_2);
    if (file = parsed.command, args_2 = parsed.args, options_2 = parsed.options, options_2 = {
      maxBuffer: maxBuffer_7,
      buffer: !0,
      stripFinalNewline: !0,
      extendEnv: !0,
      preferLocal: !1,
      localDir: options_2.cwd || de.cwd(),
      execPath: de.execPath,
      encoding: "utf8",
      reject: !0,
      cleanup: !0,
      all: !1,
      windowsHide: !0,
      verbose: wn,
      ...options_2
    }, options_2.env = Ao(options_2), options_2.stdio = Wt(options_2), de.platform === "win32" && Oo.basename(file, ".exe") === "cmd") args_2.unshift("/q");
    return {
      file: file,
      args: args_2,
      options: options_2,
      parsed: parsed
    };
  },
  j = (e, n, r) => {
    if (typeof n !== "string" && !Io.isBuffer(n)) return r === void 0 ? void 0 : "";
    if (e.stripFinalNewline) return be(n);
    return n;
  };
function sjt(e, n, r) {
  let parsed_2 = Pn(e, n, r),
    command_3 = Ue(e, n),
    escapedCommand_2 = Be(e, n);
  We(escapedCommand_2, parsed_2.options), Zt(parsed_2.options);
  let u;
  try {
    u = ze.spawn(parsed_2.file, parsed_2.args, parsed_2.options);
  } catch (error_4) {
    let C = new ze.ChildProcess(),
      T = Promise.reject(N({
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
    return De(C, T), C;
  }
  let c = Sn(u),
    d = Yt(u, parsed_2.options, c),
    p = Qt(u, parsed_2.options, d),
    h = {
      isCanceled: !1
    };
  u.kill = Vt.bind(null, u.kill.bind(u)), u.cancel = Xt.bind(null, u, h);
  let y = Mt(async () => {
    let [{
        error: error_5,
        exitCode: exitCode_4,
        signal: signal_5,
        timedOut: timedOut_3
      }, z, H, V] = await yn(u, parsed_2.options, p),
      stdout_3 = j(parsed_2.options, z),
      stderr_3 = j(parsed_2.options, H),
      all_4 = j(parsed_2.options, V);
    if (error_5 || exitCode_4 !== 0 || signal_5 !== null) {
      let nt = N({
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
        killed: u.killed
      });
      if (!parsed_2.options.reject) return nt;
      throw nt;
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
  return gn(u, parsed_2.options), u.all = hn(u, parsed_2.options), Jt(u), De(u, y), u;
}
function D(e, n, r) {
  let parsed_3 = Pn(e, n, r),
    command_4 = Ue(e, n),
    escapedCommand_3 = Be(e, n);
  We(escapedCommand_3, parsed_3.options);
  let input_3 = mn(parsed_3.options),
    c;
  try {
    c = ze.spawnSync(parsed_3.file, parsed_3.args, {
      ...parsed_3.options,
      input: input_3
    });
  } catch (error_6) {
    throw N({
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
  let stdout_4 = j(parsed_3.options, c.stdout, c.error),
    stderr_4 = j(parsed_3.options, c.stderr, c.error);
  if (c.error || c.status !== 0 || c.signal !== null) {
    let h = N({
      stdout: stdout_4,
      stderr: stderr_4,
      error: c.error,
      signal: c.signal,
      exitCode: c.status,
      command: command_4,
      escapedCommand: escapedCommand_3,
      parsed: parsed_3,
      timedOut: c.error && c.error.code === "ETIMEDOUT",
      isCanceled: !1,
      killed: c.signal !== null
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
var Ro = ({
    input: input_4,
    inputFile: inputFile_3,
    stdio: stdio_2
  }) => input_4 === void 0 && inputFile_3 === void 0 && stdio_2 === void 0 ? {
    stdin: "inherit"
  } : {},
  En = (e = {}) => ({
    preferLocal: !0,
    ...Ro(e),
    ...e
  });
function In(e) {
  function n(r, ...o) {
    if (!Array.isArray(r)) return In({
      ...e,
      ...r
    });
    let [s, ...a] = Ke(r, o);
    return sjt(s, a, En(e));
  }
  return n.sync = (r, ...o) => {
    if (!Array.isArray(r)) throw TypeError("Please use $(options).sync`command` instead of $.sync(options)`command`.");
    let [s, ...a] = Ke(r, o);
    return D(s, a, En(e));
  }, n;
}
var Hs = In();
var Mqe = "Programs are unavailable in this session; the command was not run.";
function ME() {
  return q();
}
function dP() {
  if (ME()) throw new R(Mqe, "a program start was refused in a diskless session");
}
import { mkdirSync, readFileSync as A, rmdirSync, statSync as _o, writeFileSync } from "fs";
import { totalmem as $o } from "os";
import { posix as E } from "path";
function xFr(e) {
  let path_3;
  for (let r of e.split(`
`)) {
    let [o, s, ...a] = r.split(":");
    if (s === void 0 || a.length === 0) continue;
    let path_2 = a.join(":");
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
var qe = "claude-code-bash",
  ko = "claude-code-keeper",
  An = 1073741824,
  Fo = An,
  He = ["mcp", "lsp", "hooks", "plugin", "tmux", "helper", "agent"];
class Rn {
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
var v = new Rn();
function una(e, n) {
  if (n !== void 0) v.subscribeRefresh = n;
  return v.register(e);
}
class _n {
  dir = void 0;
  layout = void 0;
  limit = 0;
  activatedClasses = new Set();
  pendingPids = new Map();
  pendingUnsubscribe = void 0;
  oomKillsSeen = void 0;
}
var wxe = new W(() => new _n());
function Xe() {
  let e = Po(wxe);
  if (e.dir !== void 0) return e.dir ?? void 0;
  if (Qp()) {
    e.dir = null;
    return;
  }
  let n = x();
  if (n !== "linux" && n !== "wsl") {
    e.dir = null;
    return;
  }
  let r = i.CLAUDE_CODE_TOOL_MEMORY_LIMIT?.trim().toLowerCase();
  if (r && (rs(r) || r === "none")) {
    e.dir = null;
    return;
  }
  let o = Jo(r);
  if (o === void 0 && v.read("tengu_tool_memory_cgroup", !1) !== !0) return;
  try {
    let s = qo(A("/proc/self/cgroup", "utf8"));
    if (!s) throw Error("no memory cgroup hierarchy");
    let limit_bytes = Qo(o, $o());
    if (limit_bytes === void 0) {
      e.dir = null, t("tool cgroup: disabled (host too small for the default cap)"), l("tengu_tool_cgroup", {
        status: b("host_too_small")
      });
      return;
    }
    Gn(s, limit_bytes), e.dir = s.dir, e.layout = s, e.limit = limit_bytes, t(`tool cgroup: ${s.dir} ${s.reuse ? "(nested: already capped, reusing our own)" : `limit=${limit_bytes}`}`), g("shell_memory_cgroup"), l("tengu_tool_cgroup", s.reuse ? {
      status: b("nested")
    } : {
      status: b("enabled"),
      limit_bytes: limit_bytes
    });
  } catch (error) {
    e.dir = null, t(`tool cgroup: disabled (${k(error) ?? error})`), m("shell_memory_cgroup", tr(error) ?? "no_hierarchy"), l("tengu_tool_cgroup", {
      status: b("disabled")
    });
  }
  return e.dir ?? void 0;
}
function U(e) {
  if (Xe() === void 0) return;
  if (e !== "shell" && $n().has(e)) return;
  let n = Po(wxe),
    r = No(n);
  if (r === void 0) return;
  if (Nn(n), !n.activatedClasses.has(e)) n.activatedClasses.add(e), l("tengu_tool_cgroup", {
    status: b("class_enabled"),
    class: f(e)
  });
  return r;
}
function fna(e) {
  return typeof Po(wxe).dir === "string" && (e === "shell" || !$n().has(e));
}
function No(e, n = {
  exists: exists,
  mkdirSync: mkdirSync,
  writeFileSync: writeFileSync,
  rmdirSync: rmdirSync
}) {
  if (e.dir === void 0 || e.dir === null) return;
  try {
    if (n.exists(e.dir)) return e.dir;
    if (e.layout === void 0 || e.layout.reuse) throw Error("enclosing tool cgroup is gone");
    return Gn(e.layout, e.limit, n), t(`tool cgroup: ${e.dir} vanished; re-created`), l("tengu_tool_cgroup", {
      status: b("recreated")
    }), e.dir;
  } catch (error) {
    e.dir = null, t(`tool cgroup: disabled (dir vanished: ${k(error) ?? error})`), l("tengu_tool_cgroup", {
      status: b("vanished")
    });
    return;
  }
}
function exists(e) {
  return _o(e, {
    throwIfNoEntry: !1
  }) !== void 0;
}
function $n() {
  let e = i.CLAUDE_CODE_TOOL_MEMORY_CGROUP_EXCLUDE?.trim(),
    n = Go(e);
  if (n.has("mcp") || !jo(!e)) return n;
  return new Set([...n, "mcp"]);
}
function Go(e) {
  if (e) return On(e.split(","));
  let n = v.read("tengu_tool_cgroup_exclude_classes", null);
  if (Array.isArray(n)) return On(n);
  return new Set(He);
}
function jo(e) {
  let n = i.CLAUDE_CODE_MCP_MEMORY_CGROUP?.trim().toLowerCase();
  if (n && (rs(n) || n === "none")) return !0;
  return e && v.read("tengu_mcp_memory_cgroup", null) === !1;
}
function On(e) {
  let n = new Set();
  for (let r of e) {
    let o = typeof r === "string" ? r.trim().toLowerCase() : "";
    if (o === "all-new") {
      He.forEach(item => n.add(item));
      continue;
    }
    let s = He.find(item => item === o);
    if (s !== void 0) n.add(s);
  }
  return n;
}
function au(e) {
  let cgroup = U(e);
  return cgroup === void 0 ? {} : {
    cgroup: cgroup
  };
}
function PFr(e, command_5, r) {
  let o = U(e);
  if (o === void 0) return {
    command: command_5,
    args: [...r],
    pending: hnt(),
    capped: !1
  };
  if (wj(command_5) === null) return {
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
function hnt() {
  return Po(wxe).dir === void 0;
}
var Mo = 64,
  OFr = {
    readStarttime: readStarttime,
    writeFileSync: writeFileSync,
    readCgroupPids: readCgroupPids,
    readProcIdentity: readProcIdentity
  };
function gnt(cls, n, shouldStayUncapped, o = OFr) {
  try {
    if (!n) return;
    Xe();
    let s = Po(wxe);
    if (s.dir === null) return;
    let starttime = o.readStarttime(n);
    if (starttime === void 0) return;
    let u = {
      cls: cls,
      starttime: starttime,
      shouldStayUncapped: shouldStayUncapped
    };
    if (s.dir !== void 0) {
      kn(n, u, o);
      return;
    }
    if (Fn(s, o), s.pendingPids.size >= Mo) {
      t(`tool cgroup: pending pid ${n} not parked (full)`);
      return;
    }
    s.pendingPids.set(n, u), s.pendingUnsubscribe ??= v.subscribeRefresh?.(() => Do());
  } catch (error) {
    t(`tool cgroup: pending pid not parked (${error})`);
  }
}
function Do(e = OFr) {
  let n = Po(wxe);
  try {
    if (Xe(), n.dir === void 0) {
      Fn(n, e);
      return;
    }
    if (n.dir !== null) for (let [r, o] of n.pendingPids) kn(r, o, e);
  } catch (error) {
    t(`tool cgroup: late attach skipped (${error})`);
  }
  n.pendingPids.clear(), n.pendingUnsubscribe?.(), n.pendingUnsubscribe = void 0;
}
function kn(e, {
  cls: cls_2,
  starttime: starttime_2,
  shouldStayUncapped: shouldStayUncapped_2
}, s) {
  let a = U(cls_2);
  if (a === void 0 || s.readStarttime(e) !== starttime_2) return;
  try {
    if (shouldStayUncapped_2?.()) {
      t(`tool cgroup: ${cls_2} pid ${e} left uncapped`);
      return;
    }
    let u = E.join(a, "cgroup.procs");
    s.writeFileSync(u, String(e));
    let c = 1,
      layout = Po(wxe).layout;
    if (layout !== void 0 && !layout.reuse) c += Ln(e, layout.selfDir, u, s, "attached");
    t(`tool cgroup: late-attached ${cls_2} pid ${e} (${c} process${c === 1 ? "" : "es"})`);
  } catch (error) {
    t(`tool cgroup: late attach of pid ${e} failed (${k(error) ?? error})`);
  }
}
function Fn(e, n) {
  for (let [r, {
    starttime: starttime_3
  }] of e.pendingPids) if (n.readStarttime(r) !== starttime_3) e.pendingPids.delete(r);
}
function readStarttime(e) {
  try {
    return NH(A(`/proc/${e}/stat`, "utf8"));
  } catch {
    return;
  }
}
function readProcIdentity(e) {
  try {
    let n = A(`/proc/${e}/stat`, "utf8"),
      ppid = Fnt(n),
      starttime_4 = NH(n);
    return ppid === void 0 || starttime_4 === void 0 ? void 0 : {
      ppid: ppid,
      starttime: starttime_4
    };
  } catch {
    return;
  }
}
function readCgroupPids(e) {
  return A(E.join(e, "cgroup.procs"), "utf8").split(`
`).map(item => Number.parseInt(item, 10)).filter(item => !Number.isNaN(item));
}
function Wo(e) {
  let n = /^oom_kill (\d+)$/m.exec(e);
  return n ? Number.parseInt(n[1], 10) : void 0;
}
function Ye(e) {
  return E.join(e.dir, e.v2 ? "memory.events" : "memory.oom_control");
}
function B(e) {
  return A(e, "utf8");
}
function Ze(e, n = B) {
  try {
    return Wo(n(e));
  } catch {
    return;
  }
}
function X2n(e = B) {
  let {
    dir: dir,
    layout: layout_2
  } = Po(wxe);
  if (!dir || layout_2 === void 0) return;
  return Ze(Ye(layout_2), e);
}
function IFr(e, n = B) {
  let r = Po(wxe),
    o = e ?? r.oomKillsSeen,
    s = X2n(n);
  return Nn(r, n, s), o === void 0 || s === void 0 ? void 0 : s > o;
}
function Nn(e, n = B, r) {
  try {
    let layout_3 = e.layout;
    if (!e.dir || layout_3 === void 0 || layout_3.reuse) return;
    let s = r ?? Ze(Ye(layout_3), n);
    if (s === void 0) return;
    let oomKillsSeen = e.oomKillsSeen;
    if (e.oomKillsSeen = s, oomKillsSeen === void 0 || s <= oomKillsSeen) return;
    t(`tool cgroup: OOM killer fired ${s - oomKillsSeen} time(s) in ${layout_3.dir} since last check`), l("tengu_tool_cgroup", {
      status: b("oom_kill"),
      oom_kills: s - oomKillsSeen,
      cgroup_v2: layout_3.v2
    });
  } catch (error) {
    t(`tool cgroup: oom_kill check skipped (${error})`);
  }
}
function pna(e, n = B) {
  let r = U(e),
    layout_4 = Po(wxe).layout;
  if (r === void 0 || layout_4 === void 0) return;
  let s = Ye(layout_4);
  return () => Ze(s, n);
}
function mna(e, n) {
  let r = U(e);
  if (r === void 0) return n;
  return `sh -c '{ echo $PPID > "$1"/cgroup.procs; } 2>/dev/null' sh ${no([r])}; ${n}`;
}
function MFr(e, n, r = OFr) {
  try {
    let o = Po(wxe);
    if (o.dir === void 0) {
      if (o.pendingPids.get(e)?.starttime !== n) return !1;
      return o.pendingPids.delete(e), t(`tool cgroup: unparked pid ${e}; it stays uncapped`), !0;
    }
    let layout_5 = o.layout;
    if (!o.dir || layout_5 === void 0 || layout_5.reuse) return !1;
    if (r.readStarttime(e) !== n) return !1;
    let a = E.join(layout_5.selfDir, "cgroup.procs");
    r.writeFileSync(a, String(e));
    let released_count = 1 + Ln(e, layout_5.dir, a, r, "released");
    return t(`tool cgroup: released pid ${e} (${released_count} process${released_count === 1 ? "" : "es"}) to ${layout_5.selfDir}`), l("tengu_tool_cgroup", {
      status: b("released"),
      released_count: released_count
    }), !0;
  } catch (error) {
    return t(`tool cgroup: release of pid ${e} failed (${k(error) ?? error})`), !1;
  }
}
function Ln(e, n, r, o, s) {
  let a = 0;
  for (let {
    pid: pid,
    starttime: starttime_5
  } of zo(e, n, o)) {
    if (o.readStarttime(pid) !== starttime_5) {
      t(`tool cgroup: descendant ${pid} of pid ${e} exited or was recycled; skipped`);
      continue;
    }
    try {
      o.writeFileSync(r, String(pid)), a++;
    } catch (error) {
      t(`tool cgroup: descendant ${pid} of pid ${e} not ${s} (${k(error) ?? error})`);
    }
  }
  return a;
}
function zo(e, n, r) {
  let o;
  try {
    o = r.readCgroupPids(n);
  } catch (error) {
    return t(`tool cgroup: members of ${n} unreadable (${k(error) ?? error}); moving pid ${e} alone`), [];
  }
  let s = new Map();
  for (let pid_2 of o) {
    if (pid_2 === e) continue;
    let d;
    try {
      d = r.readProcIdentity(pid_2);
    } catch {
      d = void 0;
    }
    if (d === void 0) continue;
    let p = {
        pid: pid_2,
        starttime: d.starttime
      },
      h = s.get(d.ppid);
    if (h) h.push(p);else s.set(d.ppid, [p]);
  }
  let a = [],
    u = [e];
  for (let c = 0; c < u.length; c++) for (let d of s.get(u[c]) ?? []) a.push(d), u.push(d.pid);
  return a;
}
function Gn(e, n, r = {
  mkdirSync: mkdirSync,
  writeFileSync: writeFileSync,
  rmdirSync: rmdirSync
}) {
  if (e.reuse) return;
  let o = !0;
  try {
    r.mkdirSync(e.dir);
  } catch (error) {
    if (k(error) !== "EEXIST") throw error;
    o = !1;
  }
  try {
    r.writeFileSync(E.join(e.dir, e.v2 ? "memory.max" : "memory.limit_in_bytes"), String(n));
  } catch (error) {
    if (o) try {
      r.rmdirSync?.(e.dir);
    } catch {}
    throw error;
  }
}
function qo(e) {
  let n = xFr(e);
  if (!n) return;
  return Yo(n.mountRoot, n.path, n.v2 ? E.dirname(n.path) : n.path, n.v2);
}
function Ho(e) {
  let n = xFr(e);
  if (!n) return;
  let r = n.path.split("/"),
    o = r.indexOf(qe);
  if (o < 0) return;
  let dir_2 = E.join(n.mountRoot, ...r.slice(0, o));
  return n.v2 ? {
    dir: E.join(dir_2, ko),
    create: !0
  } : {
    dir: dir_2,
    create: !1
  };
}
var Vo = {
  readSelfCgroup: () => A("/proc/self/cgroup", "utf8"),
  mkdirSync: mkdirSync,
  writeFileSync: writeFileSync
};
function Xo(e) {
  let n = x();
  if (n !== "linux" && n !== "wsl") return;
  try {
    let r = Ho(e.readSelfCgroup());
    if (r === void 0) return;
    if (r.create) try {
      e.mkdirSync(r.dir);
    } catch (error) {
      if (k(error) !== "EEXIST") throw error;
    }
    return r.dir;
  } catch (error) {
    t(`tool cgroup: keeper dir unavailable (${k(error) ?? error})`);
    return;
  }
}
function l0(e, n = Vo) {
  if (!e) return;
  let r = Xo(n);
  if (r === void 0) return;
  try {
    n.writeFileSync(E.join(r, "cgroup.procs"), String(e)), t(`tool cgroup: keeper pid ${e} moved to ${r}`);
  } catch (error) {
    t(`tool cgroup: keeper pid ${e} not moved (${k(error) ?? error})`);
  }
}
function Yo(e, n, r, v2) {
  let s = n.split("/").includes(qe),
    a = E.join(e, n, ".");
  return s ? {
    dir: a,
    v2: v2,
    reuse: !0,
    selfDir: a
  } : {
    dir: E.join(e, r, qe),
    v2: v2,
    reuse: !1,
    selfDir: a
  };
}
function Zo(e) {
  return Math.floor(e - Math.max(2 * An, e * 0.15));
}
function Qo(e, n) {
  if (e !== void 0) return e;
  let r = Zo(n);
  return r >= Fo ? r : void 0;
}
function Jo(e) {
  let n = /^(\d+(?:\.\d+)?)\s*([kmgt]?)(?:i?b)?$/i.exec(e?.trim() ?? "");
  if (!n) return;
  let r = Math.floor(Number(n[1]) * 1024 ** " kmgt".indexOf((n[2] || " ").toLowerCase()));
  return r >= 1 ? r : void 0;
}
function K({
  useToolMemoryCgroup = !0,
  toolCgroupClass = "helper"
}) {
  return useToolMemoryCgroup ? au(toolCgroupClass) : {};
}
function Qe() {
  return !0;
}
async function pS(e, n = [], r = {}) {
  dP();
  let {
      useToolMemoryCgroup: useToolMemoryCgroup_2,
      toolCgroupClass: toolCgroupClass_2,
      ...a
    } = r,
    u = {
      ...K({
        useToolMemoryCgroup: useToolMemoryCgroup_2,
        toolCgroupClass: toolCgroupClass_2
      }),
      ...a
    };
  if (Qe()) {
    let c = wN(e);
    if (c === null) throw Error(`Command '${e}' not found or is in an unsafe location (current directory)`);
    return sjt(c, n, u);
  }
  return sjt(e, n, u);
}
function d0(e, n = [], r = {}) {
  dP();
  let {
      useToolMemoryCgroup: useToolMemoryCgroup_3,
      toolCgroupClass: toolCgroupClass_3,
      ...a
    } = r,
    u = e;
  if (Qe()) {
    let p = wN(e);
    if (p === null) throw Object.assign(new R(`Command '${e}' not found or is in an unsafe location (current directory)`, "safeSpawn: command not found or is in an unsafe location (current directory)"), {
      code: "ENOENT"
    });
    u = p;
  }
  let c = K({
      useToolMemoryCgroup: useToolMemoryCgroup_3,
      toolCgroupClass: toolCgroupClass_3
    }),
    d = sjt(u, n, {
      ...c,
      ...a,
      buffer: !1,
      reject: !1
    });
  if (useToolMemoryCgroup_3 !== !1 && c.cgroup === void 0 && hnt()) gnt(toolCgroupClass_3 ?? "helper", d.pid);
  return d.catch(() => {}), d;
}
function WSt(e, n = [], r = {}) {
  dP();
  let {
      useToolMemoryCgroup: useToolMemoryCgroup_4,
      toolCgroupClass: toolCgroupClass_4,
      ...a
    } = r,
    u = {
      ...K({
        useToolMemoryCgroup: useToolMemoryCgroup_4,
        toolCgroupClass: toolCgroupClass_4
      }),
      ...a
    };
  if (Qe()) {
    let c = wN(e);
    if (c === null) throw Error(`Command '${e}' not found or is in an unsafe location (current directory)`);
    return D(c, n, u);
  }
  return D(e, n, u);
}
async function _N(e, n = {}) {
  dP();
  let {
    useToolMemoryCgroup: useToolMemoryCgroup_5,
    toolCgroupClass: toolCgroupClass_5,
    ...s
  } = n;
  return sjt(e, {
    ...K({
      useToolMemoryCgroup: useToolMemoryCgroup_5,
      toolCgroupClass: toolCgroupClass_5
    }),
    ...s,
    shell: !0
  });
}
function hna(e, n = {}) {
  dP();
  let {
    useToolMemoryCgroup: useToolMemoryCgroup_6,
    toolCgroupClass: toolCgroupClass_6,
    ...s
  } = n;
  return D(e, {
    ...K({
      useToolMemoryCgroup: useToolMemoryCgroup_6,
      toolCgroupClass: toolCgroupClass_6
    }),
    ...s,
    shell: !0
  });
}
export { AFr, onExit as _ae, sjt, Mqe, ME, dP, xFr, una, wxe, fna, au, PFr, hnt, OFr, gnt, X2n, IFr, pna, mna, MFr, l0, pS, d0, WSt, _N, hna };