// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { ws } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { ms, de, Dw } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { b, c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { x, k, Fr } from "B:/~BUN/root/chunk-3aez4b53.js";
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { g, m } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { V2, a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { pF } from "B:/~BUN/root/chunk-j704adqd.js";
import { ho } from "B:/~BUN/root/chunk-fqc7tjgr.js";
import { I5, UYs } from "B:/~BUN/root/chunk-7j1crw74.js";
import { ve, R, Ue } from "B:/~BUN/root/chunk-ef0msk7r.js";
var ct = R(function (ti, ut) {
  ut.exports = at;
  at.sync = Un;
  var it = Ue("fs");
  function Dn(e, n) {
    var r = n.pathExt !== void 0 ? n.pathExt : process.env.PATHEXT;
    if (!r) return !0;
    if (r = r.split(";"), r.indexOf("") !== -1) return !0;
    for (var o = 0; o < r.length; o++) {
      var s = r[o].toLowerCase();
      if (s && e.substr(-s.length).toLowerCase() === s) return !0;
    }
    return !1;
  }
  function st(e, n, r) {
    if (!e.isSymbolicLink() && !e.isFile()) return !1;
    return Dn(n, r);
  }
  function at(e, n, r) {
    it.stat(e, function (o, s) {
      r(o, o ? !1 : st(s, e, n));
    });
  }
  function Un(e, n) {
    return st(it.statSync(e), e, n);
  }
});
var lt = R(function (ri, dt) {
  var ni = Ue("fs"),
    pe;
  pe = ct();
  dt.exports = me;
  me.sync = Bn;
  function me(e, n, r) {
    if (typeof n === "function") r = n, n = {};
    if (!r) {
      if (typeof Promise !== "function") throw TypeError("callback not provided");
      return new Promise(function (o, s) {
        me(e, n || {}, function (u, d) {
          if (u) s(u);else o(d);
        });
      });
    }
    pe(e, n || {}, function (o, s) {
      if (o) {
        if (o.code === "EACCES" || n && n.ignoreErrors) o = null, s = !1;
      }
      r(o, s);
    });
  }
  function Bn(e, n) {
    try {
      return pe.sync(e, n || {});
    } catch (error) {
      if (n && n.ignoreErrors || error.code === "EACCES") return !1;else throw error;
    }
  }
});
var ht = R(function (oi, gt) {
  var X = Ue("path"),
    ge = lt(),
    ft = e => Object.assign(Error(`not found: ${e}`), {
      code: "ENOENT"
    }),
    pt = (e, n) => {
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
    mt = (e, n, r) => {
      if (typeof n === "function") r = n, n = {};
      if (!n) n = {};
      let {
          pathEnv: pathEnv_2,
          pathExt: pathExt_2,
          pathExtExe: u
        } = pt(e, n),
        d = [],
        l = p => new Promise((h, S) => {
          if (p === pathEnv_2.length) return n.all && d.length ? h(d) : S(ft(e));
          let y = pathEnv_2[p],
            w = /^".*"$/.test(y) ? y.slice(1, -1) : y,
            C = X.join(w, e),
            P = !w && /^\.[\\\/]/.test(e) ? e.slice(0, 2) + C : C;
          h(f(P, p, 0));
        }),
        f = (p, h, S) => new Promise((y, w) => {
          if (S === pathExt_2.length) return y(l(h + 1));
          let C = pathExt_2[S];
          ge(p + C, {
            pathExt: u
          }, (P, O) => {
            if (!P && O) if (n.all) d.push(p + C);else return y(p + C);
            return y(f(p, h, S + 1));
          });
        });
      return r ? l(0).then(p => r(null, p), r) : l(0);
    },
    Kn = (e, n) => {
      n = n || {};
      let {
          pathEnv: pathEnv_3,
          pathExt: pathExt_3,
          pathExtExe: s
        } = pt(e, n),
        u = [];
      for (let d = 0; d < pathEnv_3.length; d++) {
        let l = pathEnv_3[d],
          f = /^".*"$/.test(l) ? l.slice(1, -1) : l,
          p = X.join(f, e),
          h = !f && /^\.[\\\/]/.test(e) ? e.slice(0, 2) + p : p;
        for (let S = 0; S < pathExt_3.length; S++) {
          let y = h + pathExt_3[S];
          try {
            if (ge.sync(y, {
              pathExt: s
            })) if (n.all) u.push(y);else return y;
          } catch (error) {}
        }
      }
      if (n.all && u.length) return u;
      if (n.nothrow) return null;
      throw ft(e);
    };
  gt.exports = mt;
  mt.sync = Kn;
});
var St = R(function (ii, he) {
  var yt = (e = {}) => {
    let n = e.env || process.env;
    if ((e.platform || "win32") !== "win32") return "PATH";
    return Object.keys(n).reverse().find(item => item.toUpperCase() === "PATH") || "Path";
  };
  he.exports = yt;
  he.exports.default = yt;
});
var wt = R(function (si, Ct) {
  var Y = Ue("path"),
    bt = ht(),
    Wn = St();
  function xt(e, n) {
    let env = e.options.env || process.env,
      o = process.cwd(),
      s = e.options.cwd != null,
      u = s && process.chdir !== void 0 && !process.chdir.disabled;
    if (u) try {
      process.chdir(e.options.cwd);
    } catch (error) {}
    let d;
    try {
      d = bt.sync(e.command, {
        path: env[Wn({
          env: env
        })],
        pathExt: n ? Y.delimiter : void 0
      });
    } catch (error) {} finally {
      if (u) try {
        process.chdir(o);
      } catch (error) {
        let f = error !== null && typeof error === "object" && typeof error.code === "string" ? error.code : "";
        if (!(/^E[A-Z0-9]+$/.test(f) || f === "UNKNOWN" || f.startsWith("Unknown system error"))) throw error;
      }
    }
    if (d) d = Y.resolve(s ? e.options.cwd : "", d);
    return d;
  }
  function zn(e) {
    return xt(e) || xt(e, !0);
  }
  Ct.exports = zn;
});
var Et = R(function (Vn, Se) {
  var ye = /([()\][%!^"`<>&|;, *?])/g;
  function qn(e) {
    return e = e.replace(ye, "^$1"), e;
  }
  function Hn(e, n) {
    if (e = `${e}`, e = e.replace(/(?=(\\+?)?)\1"/g, "$1$1\\\""), e = e.replace(/(?=(\\+?)?)\1$/, "$1$1"), e = `"${e}"`, e = e.replace(ye, "^$1"), n) e = e.replace(ye, "^$1");
    return e;
  }
  Vn.command = qn;
  Vn.argument = Hn;
});
var Pt = R(function (ai, Tt) {
  Tt.exports = /^#!(.*)/;
});
var Ot = R(function (ui, It) {
  var Zn = Pt();
  It.exports = (e = "") => {
    let n = e.match(Zn);
    if (!n) return null;
    let [r, o] = n[0].replace(/#! ?/, "").split(" "),
      s = r.split("/").pop();
    if (s === "env") return o;
    return o ? `${s} ${o}` : s;
  };
});
var At = R(function (ci, vt) {
  var v = Ue("fs"),
    Qn = Ot();
  function Jn(e) {
    let r = Buffer.alloc(150),
      o;
    try {
      o = v.openSync(e, "r"), v.readSync(o, r, 0, 150, 0), v.closeSync(o);
    } catch (error) {}
    return Qn(r.toString());
  }
  vt.exports = Jn;
});
var kt = R(function (di, $t) {
  var _t = Ue("path"),
    Rt = wt(),
    Z = Et(),
    er = At(),
    tr = /\.(?:com|exe)$/i,
    nr = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;
  function rr(e) {
    e.file = Rt(e);
    let n = e.file && er(e.file);
    if (n) return e.args.unshift(e.file), e.command = n, Rt(e);
    return e.file;
  }
  function or(e) {
    let n = rr(e),
      r = !tr.test(n);
    if (e.options.forceShell || r) {
      let o = nr.test(n);
      e.command = _t.normalize(e.command), e.command = Z.command(e.command), e.args = e.args.map(item => Z.argument(item, o));
      let s = [e.command].concat(e.args).join(" ");
      e.args = ["/d", "/s", "/c", `"${s}"`], e.command = process.env.comspec || "cmd.exe", e.options.windowsVerbatimArguments = !0;
    }
    return e;
  }
  function ir(command, args, options) {
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
    return options.shell ? o : or(o);
  }
  $t.exports = ir;
});
var Lt = R(function (li, Nt) {
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
  Nt.exports = {
    hookChildProcess: hookChildProcess,
    verifyENOENT: verifyENOENT,
    verifyENOENTSync: verifyENOENTSync,
    notFoundError: notFoundError
  };
});
var RXn = R(function (fi, A) {
  var Q = Ue("child_process"),
    be = kt(),
    N = Lt();
  function Gt(e, n, r) {
    let o = be(e, n, r),
      s = Q.spawn(o.command, o.args, o.options);
    return N.hookChildProcess(s, o), s;
  }
  function ur(e, n, r) {
    let o = be(e, n, r),
      s = Q.spawnSync(o.command, o.args, o.options);
    return s.error = s.error || N.verifyENOENTSync(s.status, o), s;
  }
  A.exports = Gt;
  A.exports.spawn = Gt;
  A.exports.sync = ur;
  A.exports._parse = be;
  A.exports._enoent = N;
});
var pn = R(function (Ss, fn) {
  var {
    PassThrough: PassThrough
  } = Ue("stream");
  fn.exports = function exports() {
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
var In = ve(RXn(), 1);
import { Buffer as Oo } from "buffer";
import vo from "path";
import qe from "child_process";
import le from "process";
function Ce(e) {
  let n = typeof e === "string" ? `
` : `
`.charCodeAt(),
    r = typeof e === "string" ? "\r" : "\r".charCodeAt();
  if (e[e.length - 1] === n) e = e.slice(0, -1);
  if (e[e.length - 1] === r) e = e.slice(0, -1);
  return e;
}
import ee from "process";
import L from "path";
import { fileURLToPath as jt } from "url";
function J(e = {}) {
  let {
    env: env_2 = process.env,
    platform = "win32"
  } = e;
  if (platform !== "win32") return "PATH";
  return Object.keys(env_2).reverse().find(item => item.toUpperCase() === "PATH") || "Path";
}
var cr = ({
    cwd = ee.cwd(),
    path = ee.env[J()],
    preferLocal = !0,
    execPath = ee.execPath,
    addExecPath = !0
  } = {}) => {
    let u = cwd instanceof URL ? jt(cwd) : cwd,
      d = L.resolve(u),
      l = [];
    if (preferLocal) dr(l, d);
    if (addExecPath) lr(l, execPath, d);
    return [...l, path].join(L.delimiter);
  },
  dr = (e, n) => {
    let r;
    while (r !== n) e.push(L.join(n, "node_modules/.bin")), r = n, n = L.resolve(n, "..");
  },
  lr = (e, n, r) => {
    let o = n instanceof URL ? jt(n) : n;
    e.push(L.resolve(r, o, ".."));
  },
  Mt = ({
    env: env_3 = ee.env,
    ...n
  } = {}) => {
    env_3 = {
      ...env_3
    };
    let r = J({
      env: env_3
    });
    return n.path = env_3[r], env_3[r] = cr(n), env_3;
  };
var fr = (e, n, r, o) => {
    if (r === "length" || r === "prototype") return;
    if (r === "arguments" || r === "caller") return;
    let s = Object.getOwnPropertyDescriptor(e, r),
      u = Object.getOwnPropertyDescriptor(n, r);
    if (!pr(s, u) && o) return;
    Object.defineProperty(e, r, u);
  },
  pr = function (e, n) {
    return e === void 0 || e.configurable || e.writable === n.writable && e.enumerable === n.enumerable && e.configurable === n.configurable && (e.writable || e.value === n.value);
  },
  mr = (e, n) => {
    let r = Object.getPrototypeOf(n);
    if (r === Object.getPrototypeOf(e)) return;
    Object.setPrototypeOf(e, r);
  },
  gr = (e, n) => `/* Wrapped ${e}*/
${n}`,
  hr = Object.getOwnPropertyDescriptor(Function.prototype, "toString"),
  yr = Object.getOwnPropertyDescriptor(Function.prototype.toString, "name"),
  Sr = (e, n, r) => {
    let o = r === "" ? "" : `with ${r.trim()}() `,
      value = gr.bind(null, o, n.toString());
    Object.defineProperty(value, "name", yr), Object.defineProperty(e, "toString", {
      ...hr,
      value: value
    });
  };
function we(e, n, {
  ignoreNonConfigurable = !1
} = {}) {
  let {
    name: name
  } = e;
  for (let s of Reflect.ownKeys(n)) fr(e, n, s, ignoreNonConfigurable);
  return mr(e, n), Sr(e, n, name), e;
}
var weakMap = new WeakMap(),
  Dt = (e, n = {}) => {
    if (typeof e !== "function") throw TypeError("Expected a function");
    let r,
      o = 0,
      s = e.displayName || e.name || "<anonymous>",
      u = function (...d) {
        if (weakMap.set(u, ++o), o === 1) r = e.apply(this, d), e = null;else if (n.throw === !0) throw Error(`Function \`${s}\` can only be called once`);
        return r;
      };
    return we(u, e), weakMap.set(u, o), u;
  };
Dt.callCount = e => {
  if (!weakMap.has(e)) throw Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);
  return weakMap.get(e);
};
var Ut = Dt;
import vr from "process";
import { constants as wr } from "os";
var Bt = () => {
    let length = Ee - Kt + 1;
    return Array.from({
      length: length
    }, xr);
  },
  xr = (e, n) => ({
    name: `SIGRT${n + 1}`,
    number: Kt + n,
    action: "terminate",
    description: "Application-specific signal (realtime)",
    standard: "posix"
  }),
  Kt = 34,
  Ee = 64;
import { constants as br } from "os";
var Wt = [{
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
var Te = () => {
    let e = Bt();
    return [...Wt, ...e].map(Cr);
  },
  Cr = ({
    name: name_2,
    number: number,
    description: description,
    action: action,
    forced = !1,
    standard: standard
  }) => {
    let {
        signals: {
          [name_2]: d
        }
      } = br,
      supported = d !== void 0;
    return {
      name: name_2,
      number: supported ? d : number,
      description: description,
      supported: supported,
      action: action,
      forced: forced,
      standard: standard
    };
  };
var Er = () => {
    let e = Te();
    return Object.fromEntries(e.map(Tr));
  },
  Tr = ({
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
  zt = Er(),
  Pr = () => {
    let e = Te(),
      length_2 = Ee + 1,
      r = Array.from({
        length: length_2
      }, (o, s) => Ir(s, e));
    return Object.assign({}, ...r);
  },
  Ir = (number_3, n) => {
    let r = Or(number_3, n);
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
  Or = (e, n) => {
    let r = n.find(({
      name: name_5
    }) => wr.signals[name_5] === e);
    if (r !== void 0) return r;
    return n.find(item => item.number === e);
  },
  $i = Pr();
var Ar = ({
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
  G = ({
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
        cwd: cwd_2 = vr.cwd()
      }
    }
  }) => {
    exitCode_2 = exitCode_2 === null ? void 0 : exitCode_2, signal_2 = signal_2 === null ? void 0 : signal_2;
    let signalDescription_2 = signal_2 === void 0 ? void 0 : zt[signal_2].description,
      errorCode_2 = error_2 && error_2.code,
      O = `Command ${Ar({
        timedOut: timedOut_2,
        timeout: timeout_2,
        errorCode: errorCode_2,
        signal: signal_2,
        signalDescription: signalDescription_2,
        exitCode: exitCode_2,
        isCanceled: isCanceled_2
      })}: ${command_2}`,
      q = Object.prototype.toString.call(error_2) === "[object Error]",
      H = q ? `${O}
${error_2.message}` : O,
      V = [H, stderr, stdout].filter(Boolean).join(`
`);
    if (q) error_2.originalMessage = error_2.message, error_2.message = V;else error_2 = Error(V);
    if (error_2.shortMessage = H, error_2.command = command_2, error_2.escapedCommand = escapedCommand, error_2.exitCode = exitCode_2, error_2.signal = signal_2, error_2.signalDescription = signalDescription_2, error_2.stdout = stdout, error_2.stderr = stderr, error_2.cwd = cwd_2, all !== void 0) error_2.all = all;
    if ("bufferedData" in error_2) delete error_2.bufferedData;
    return error_2.failed = !0, error_2.timedOut = Boolean(timedOut_2), error_2.isCanceled = isCanceled_2, error_2.killed = killed && !timedOut_2, error_2;
  };
var ne = ["stdin", "stdout", "stderr"],
  Rr = e => ne.some(item => e[item] !== void 0),
  qt = e => {
    if (!e) return;
    let {
      stdio: stdio
    } = e;
    if (stdio === void 0) return ne.map(item => e[item]);
    if (Rr(e)) throw Error(`It's not possible to provide \`stdio\` in combination with one of ${ne.map(item => `\`${item}\``).join(", ")}`);
    if (typeof stdio === "string") return stdio;
    if (!Array.isArray(stdio)) throw TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof stdio}\``);
    let length_3 = Math.max(stdio.length, ne.length);
    return Array.from({
      length: length_3
    }, (o, s) => stdio[s]);
  };
import kr from "os";
var j = [];
j.push("SIGHUP", "SIGINT", "SIGTERM");
var re = e => !!e && typeof e === "object" && typeof e.removeListener === "function" && typeof e.emit === "function" && typeof e.reallyExit === "function" && typeof e.listeners === "function" && typeof e.kill === "function" && typeof e.pid === "number" && typeof e.on === "function",
  Pe = Symbol.for("signal-exit emitter"),
  globalThis_2 = globalThis,
  _r = Object.defineProperty.bind(Object);
class Ht {
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
    if (globalThis_2[Pe]) return globalThis_2[Pe];
    _r(globalThis_2, Pe, {
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
class Ae {}
var $r = e => ({
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
class Vt extends Ae {
  onExit() {
    return () => {};
  }
  load() {}
  unload() {}
}
class Xt extends Ae {
  #s = process_2.platform === "win32" ? "SIGINT" : "SIGHUP";
  #t = new Ht();
  #e;
  #o;
  #i;
  #r = {};
  #n = !1;
  constructor(e) {
    super();
    this.#e = e, this.#r = {};
    for (let n of j) this.#r[n] = () => {
      let r = this.#e.listeners(n),
        {
          count: count
        } = this.#t,
        s = e;
      if (typeof s.__signal_exit_emitter__ === "object" && typeof s.__signal_exit_emitter__.count === "number") count += s.__signal_exit_emitter__.count;
      if (r.length === count) {
        this.unload();
        let u = this.#t.emit("exit", null, n),
          d = n === "SIGHUP" ? this.#s : n;
        if (!u) e.kill(e.pid, d);
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
    for (let e of j) try {
      let n = this.#r[e];
      if (n) this.#e.on(e, n);
    } catch (error) {}
    this.#e.emit = (e, ...n) => this.#u(e, ...n), this.#e.reallyExit = e => this.#a(e);
  }
  unload() {
    if (!this.#n) return;
    this.#n = !1, j.forEach(item => {
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
  } = $r(re(process_2) ? new Xt(process_2) : new Vt());
var Nr = 5000,
  Yt = (e, n = "SIGTERM", r = {}) => {
    let o = e(n);
    return Lr(e, n, r, o), o;
  },
  Lr = (e, n, r, o) => {
    if (!Gr(n, r, o)) return;
    let s = Mr(r),
      u = setTimeout(() => {
        e("SIGKILL");
      }, s);
    if (u.unref) u.unref();
  },
  Gr = (e, {
    forceKillAfterTimeout: forceKillAfterTimeout
  }, r) => jr(e) && forceKillAfterTimeout !== !1 && r,
  jr = e => e === kr.constants.signals.SIGTERM || typeof e === "string" && e.toUpperCase() === "SIGTERM",
  Mr = ({
    forceKillAfterTimeout: forceKillAfterTimeout_2 = !0
  }) => {
    if (forceKillAfterTimeout_2 === !0) return Nr;
    if (!Number.isFinite(forceKillAfterTimeout_2) || forceKillAfterTimeout_2 < 0) throw TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${forceKillAfterTimeout_2}\` (${typeof forceKillAfterTimeout_2})`);
    return forceKillAfterTimeout_2;
  },
  Zt = (e, n) => {
    if (e.kill()) n.isCanceled = !0;
  },
  Dr = (e, signal_3, r) => {
    e.kill(signal_3), r(Object.assign(Error("Timed out"), {
      timedOut: !0,
      signal: signal_3
    }));
  },
  Qt = (e, {
    timeout: timeout_3,
    killSignal = "SIGTERM"
  }, o) => {
    if (timeout_3 === 0 || timeout_3 === void 0) return o;
    let s,
      promise = new Promise((l, f) => {
        s = setTimeout(() => {
          Dr(e, killSignal, f);
        }, timeout_3);
      }),
      d = o.finally(() => {
        clearTimeout(s);
      });
    return Promise.race([promise, d]);
  },
  Jt = ({
    timeout: timeout_4
  }) => {
    if (timeout_4 !== void 0 && (!Number.isFinite(timeout_4) || timeout_4 < 0)) throw TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${timeout_4}\` (${typeof timeout_4})`);
  },
  en = async (e, {
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
import { createWriteStream as Ur } from "fs";
import { ChildProcess as Br } from "child_process";
function oe(e) {
  return e !== null && typeof e === "object" && typeof e.pipe === "function";
}
function Re(e) {
  return oe(e) && e.writable !== !1 && typeof e._write === "function" && typeof e._writableState === "object";
}
var Kr = e => e instanceof Br && typeof e.then === "function",
  _e = (e, n, r) => {
    if (typeof r === "string") return e[n].pipe(Ur(r)), e;
    if (Re(r)) return e[n].pipe(r), e;
    if (!Kr(r)) throw TypeError("The second argument must be a string, a stream or an Execa child process.");
    if (!Re(r.stdin)) throw TypeError("The target child process's stdin must be available.");
    return e[n].pipe(r.stdin), r;
  },
  tn = e => {
    if (e.stdout !== null) e.pipeStdout = _e.bind(void 0, e, "stdout");
    if (e.stderr !== null) e.pipeStderr = _e.bind(void 0, e, "stderr");
    if (e.all !== void 0) e.pipeAll = _e.bind(void 0, e, "all");
  };
import { createReadStream as uo, readFileSync as co } from "fs";
import { setTimeout as lo } from "timers/promises";
var M = async (e, {
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
    if (!zr(e)) throw Error("The first argument must be a Readable, a ReadableStream, or an async iterable.");
    let state = init();
    state.length = 0;
    try {
      for await (let h of e) {
        let S = qr(h),
          convertedChunk = convertChunk[S](h, state);
        on({
          convertedChunk: convertedChunk,
          state: state,
          getSize: getSize,
          truncateChunk: truncateChunk,
          addChunk: addChunk,
          maxBuffer: maxBuffer
        });
      }
      return Wr({
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
  Wr = ({
    state: state_2,
    getSize: getSize_2,
    truncateChunk: truncateChunk_2,
    addChunk: addChunk_2,
    getFinalChunk: getFinalChunk_2,
    maxBuffer: maxBuffer_2
  }) => {
    let convertedChunk_2 = getFinalChunk_2(state_2);
    if (convertedChunk_2 !== void 0) on({
      convertedChunk: convertedChunk_2,
      state: state_2,
      getSize: getSize_2,
      truncateChunk: truncateChunk_2,
      addChunk: addChunk_2,
      maxBuffer: maxBuffer_2
    });
  },
  on = ({
    convertedChunk: convertedChunk_3,
    state: state_3,
    getSize: getSize_3,
    truncateChunk: truncateChunk_3,
    addChunk: addChunk_3,
    maxBuffer: maxBuffer_3
  }) => {
    let d = getSize_3(convertedChunk_3),
      l = state_3.length + d;
    if (l <= maxBuffer_3) {
      nn(convertedChunk_3, state_3, addChunk_3, l);
      return;
    }
    let f = truncateChunk_3(convertedChunk_3, maxBuffer_3 - state_3.length);
    if (f !== void 0) nn(f, state_3, addChunk_3, maxBuffer_3);
    throw new $e();
  },
  nn = (e, n, r, o) => {
    n.contents = r(e, n, o), n.length = o;
  },
  zr = e => typeof e === "object" && e !== null && typeof e[Symbol.asyncIterator] === "function",
  qr = e => {
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
class $e extends Error {
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
async function Le(e, n) {
  return M(e, to, n);
}
var init_2 = () => ({
    contents: new ArrayBuffer(0)
  }),
  string = e => textEncoder.encode(e),
  textEncoder = new TextEncoder(),
  sn = e => new Uint8Array(e),
  an = e => new Uint8Array(e.buffer, e.byteOffset, e.byteLength),
  truncateChunk_4 = (e, n) => e.slice(0, n),
  addChunk_4 = (e, {
    contents: contents_2,
    length: length_4
  }, o) => {
    let s = dn() ? Jr(contents_2, o) : Qr(contents_2, o);
    return new Uint8Array(s).set(e, length_4), s;
  },
  Qr = (e, n) => {
    if (n <= e.byteLength) return e;
    let arrayBuffer = new ArrayBuffer(cn(n));
    return new Uint8Array(arrayBuffer).set(new Uint8Array(e), 0), arrayBuffer;
  },
  Jr = (e, n) => {
    if (n <= e.maxByteLength) return e.resize(n), e;
    let arrayBuffer_2 = new ArrayBuffer(n, {
      maxByteLength: cn(n)
    });
    return new Uint8Array(arrayBuffer_2).set(new Uint8Array(e), 0), arrayBuffer_2;
  },
  cn = e => un ** Math.ceil(Math.log(e) / Math.log(un)),
  un = 2,
  finalize_2 = ({
    contents: contents_3,
    length: length_5
  }) => dn() ? contents_3 : contents_3.slice(0, length_5),
  dn = () => "resize" in ArrayBuffer.prototype,
  to = {
    init: init_2,
    convertChunk: {
      string: string,
      buffer: sn,
      arrayBuffer: sn,
      dataView: an,
      typedArray: an,
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
    return ln(await Le(e, n));
  } catch (error) {
    if (error.bufferedData !== void 0) error.bufferedData = ln(error.bufferedData);
    throw error;
  }
}
var ln = e => globalThis.Buffer.from(e);
async function Ge(e, n) {
  return M(e, so, n);
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
  so = {
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
var mn = ve(pn(), 1),
  gn = e => {
    if (e !== void 0) throw TypeError("The `input` and `inputFile` options cannot be both set.");
  },
  fo = ({
    input: input,
    inputFile: inputFile
  }) => {
    if (typeof inputFile !== "string") return input;
    return gn(input), co(inputFile);
  },
  hn = e => {
    let n = fo(e);
    if (oe(n)) throw TypeError("The `input` option cannot be a stream in sync mode");
    return n;
  },
  po = ({
    input: input_2,
    inputFile: inputFile_2
  }) => {
    if (typeof inputFile_2 !== "string") return input_2;
    return gn(input_2), uo(inputFile_2);
  },
  yn = (e, n) => {
    let r = po(n);
    if (r === void 0) return;
    if (oe(r)) r.pipe(e.stdin);else e.stdin.end(r);
  },
  Sn = (e, {
    all: all_2
  }) => {
    if (!all_2 || !e.stdout && !e.stderr) return;
    let r = mn.default();
    if (e.stdout) r.add(e.stdout);
    if (e.stderr) r.add(e.stderr);
    return r;
  },
  je = async (e, n) => {
    if (!e || n === void 0) return;
    await lo(0), e.destroy();
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
    if (encoding === "utf8" || encoding === "utf-8") return Ge(e, {
      maxBuffer: maxBuffer_4
    });
    if (encoding === null || encoding === "buffer") return ae(e, {
      maxBuffer: maxBuffer_4
    });
    return mo(e, maxBuffer_4, encoding);
  },
  mo = async (e, maxBuffer_5, r) => (await ae(e, {
    maxBuffer: maxBuffer_5
  })).toString(r),
  xn = async ({
    stdout: stdout_2,
    stderr: stderr_2,
    all: all_3
  }, {
    encoding: encoding_2,
    buffer: buffer_2,
    maxBuffer: maxBuffer_6
  }, d) => {
    let l = Me(stdout_2, {
        encoding: encoding_2,
        buffer: buffer_2,
        maxBuffer: maxBuffer_6
      }),
      f = Me(stderr_2, {
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
      return await Promise.all([d, l, f, p]);
    } catch (error_3) {
      return Promise.all([{
        error: error_3,
        signal: error_3.signal,
        timedOut: error_3.timedOut
      }, je(stdout_2, l), je(stderr_2, f), je(all_3, p)]);
    }
  };
var go = (async () => {})().constructor.prototype,
  yo = ["then", "catch", "finally"].map(item => [item, Reflect.getOwnPropertyDescriptor(go, item)]),
  De = (e, n) => {
    for (let [r, o] of yo) {
      let value_2 = typeof n === "function" ? (...u) => Reflect.apply(o.value, n(), u) : o.value.bind(n);
      Reflect.defineProperty(e, r, {
        ...o,
        value: value_2
      });
    }
  },
  bn = e => new Promise((n, r) => {
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
import { Buffer as So } from "buffer";
import { ChildProcess as xo } from "child_process";
var En = (e, n = []) => {
    if (!Array.isArray(n)) return [e];
    return [e, ...n];
  },
  bo = /^[\w.-]+$/,
  Co = e => {
    if (typeof e !== "string" || bo.test(e)) return e;
    return `"${e.replaceAll('"', "\\\"")}"`;
  },
  Be = (e, n) => En(e, n).join(" "),
  Ke = (e, n) => En(e, n).map(item => Co(item)).join(" "),
  wo = / +/g;
var Cn = e => {
    let n = typeof e;
    if (n === "string") return e;
    if (n === "number") return String(e);
    if (n === "object" && e !== null && !(e instanceof xo) && "stdout" in e) {
      let r = typeof e.stdout;
      if (r === "string") return e.stdout;
      if (So.isBuffer(e.stdout)) return e.stdout.toString();
      throw TypeError(`Unexpected "${r}" stdout in template expression`);
    }
    throw TypeError(`Unexpected "${n}" in template expression`);
  },
  wn = (e, n, r) => r || e.length === 0 || n.length === 0 ? [...e, ...n] : [...e.slice(0, -1), `${e.at(-1)}${n[0]}`, ...n.slice(1)],
  Eo = ({
    templates: templates,
    expressions: expressions,
    tokens: tokens,
    index: index,
    template: template
  }) => {
    let u = template ?? templates.raw[index],
      d = u.split(wo).filter(Boolean),
      l = wn(tokens, d, u.startsWith(" "));
    if (index === expressions.length) return l;
    let f = expressions[index],
      p = Array.isArray(f) ? f.map(item => Cn(item)) : [Cn(f)];
    return wn(l, p, u.endsWith(" "));
  },
  We = (templates_2, expressions_2) => {
    let tokens_2 = [];
    for (let [index_2, template_2] of templates_2.entries()) tokens_2 = Eo({
      templates: templates_2,
      expressions: expressions_2,
      tokens: tokens_2,
      index: index_2,
      template: template_2
    });
    return tokens_2;
  };
import { debuglog as To } from "util";
import Po from "process";
var Tn = To("execa").enabled,
  ce = (e, n) => String(e).padStart(n, "0"),
  Io = () => {
    let date = new Date();
    return `${ce(date.getHours(), 2)}:${ce(date.getMinutes(), 2)}:${ce(date.getSeconds(), 2)}.${ce(date.getMilliseconds(), 3)}`;
  },
  ze = (e, {
    verbose: verbose
  }) => {
    if (!verbose) return;
    Po.stderr.write(`[${Io()}] ${e}
`);
  };
var maxBuffer_7 = 1e8,
  Ro = ({
    env: env_4,
    extendEnv: extendEnv,
    preferLocal: preferLocal_2,
    localDir: o,
    execPath: execPath_2
  }) => {
    let env_5 = extendEnv ? {
      ...le.env,
      ...env_4
    } : env_4;
    if (preferLocal_2) return Mt({
      env: env_5,
      cwd: o,
      execPath: execPath_2
    });
    return env_5;
  },
  On = (file, args_2, options_2 = {}) => {
    let parsed = In.default._parse(file, args_2, options_2);
    if (file = parsed.command, args_2 = parsed.args, options_2 = parsed.options, options_2 = {
      maxBuffer: maxBuffer_7,
      buffer: !0,
      stripFinalNewline: !0,
      extendEnv: !0,
      preferLocal: !1,
      localDir: options_2.cwd || le.cwd(),
      execPath: le.execPath,
      encoding: "utf8",
      reject: !0,
      cleanup: !0,
      all: !1,
      windowsHide: !0,
      verbose: Tn,
      ...options_2
    }, options_2.env = Ro(options_2), options_2.stdio = qt(options_2), le.platform === "win32" && vo.basename(file, ".exe") === "cmd") args_2.unshift("/q");
    return {
      file: file,
      args: args_2,
      options: options_2,
      parsed: parsed
    };
  },
  D = (e, n, r) => {
    if (typeof n !== "string" && !Oo.isBuffer(n)) return r === void 0 ? void 0 : "";
    if (e.stripFinalNewline) return Ce(n);
    return n;
  };
function Obt(e, n, r) {
  let parsed_2 = On(e, n, r),
    command_3 = Be(e, n),
    escapedCommand_2 = Ke(e, n);
  ze(escapedCommand_2, parsed_2.options), Jt(parsed_2.options);
  let d;
  try {
    d = qe.spawn(parsed_2.file, parsed_2.args, parsed_2.options);
  } catch (error_4) {
    let C = new qe.ChildProcess(),
      P = Promise.reject(G({
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
    return De(C, P), C;
  }
  let l = bn(d),
    f = Qt(d, parsed_2.options, l),
    p = en(d, parsed_2.options, f),
    h = {
      isCanceled: !1
    };
  d.kill = Yt.bind(null, d.kill.bind(d)), d.cancel = Zt.bind(null, d, h);
  let y = Ut(async () => {
    let [{
        error: error_5,
        exitCode: exitCode_4,
        signal: signal_5,
        timedOut: timedOut_3
      }, q, H, V] = await xn(d, parsed_2.options, p),
      stdout_3 = D(parsed_2.options, q),
      stderr_3 = D(parsed_2.options, H),
      all_4 = D(parsed_2.options, V);
    if (error_5 || exitCode_4 !== 0 || signal_5 !== null) {
      let ot = G({
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
        killed: d.killed
      });
      if (!parsed_2.options.reject) return ot;
      throw ot;
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
  return yn(d, parsed_2.options), d.all = Sn(d, parsed_2.options), tn(d), De(d, y), d;
}
function U(e, n, r) {
  let parsed_3 = On(e, n, r),
    command_4 = Be(e, n),
    escapedCommand_3 = Ke(e, n);
  ze(escapedCommand_3, parsed_3.options);
  let input_3 = hn(parsed_3.options),
    l;
  try {
    l = qe.spawnSync(parsed_3.file, parsed_3.args, {
      ...parsed_3.options,
      input: input_3
    });
  } catch (error_6) {
    throw G({
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
  let stdout_4 = D(parsed_3.options, l.stdout, l.error),
    stderr_4 = D(parsed_3.options, l.stderr, l.error);
  if (l.error || l.status !== 0 || l.signal !== null) {
    let h = G({
      stdout: stdout_4,
      stderr: stderr_4,
      error: l.error,
      signal: l.signal,
      exitCode: l.status,
      command: command_4,
      escapedCommand: escapedCommand_3,
      parsed: parsed_3,
      timedOut: l.error && l.error.code === "ETIMEDOUT",
      isCanceled: !1,
      killed: l.signal !== null
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
var _o = ({
    input: input_4,
    inputFile: inputFile_3,
    stdio: stdio_2
  }) => input_4 === void 0 && inputFile_3 === void 0 && stdio_2 === void 0 ? {
    stdin: "inherit"
  } : {},
  Pn = (e = {}) => ({
    preferLocal: !0,
    ..._o(e),
    ...e
  });
function vn(e) {
  function n(r, ...o) {
    if (!Array.isArray(r)) return vn({
      ...e,
      ...r
    });
    let [s, ...u] = We(r, o);
    return Obt(s, u, Pn(e));
  }
  return n.sync = (r, ...o) => {
    if (!Array.isArray(r)) throw TypeError("Please use $(options).sync`command` instead of $.sync(options)`command`.");
    let [s, ...u] = We(r, o);
    return U(s, u, Pn(e));
  }, n;
}
var Xs = vn();
var dDe = "Programs are unavailable in this session; the command was not run.";
function OA() {
  return de();
}
function U4() {
  if (OA()) throw new x(dDe, "a program start was refused in a diskless session");
}
import { mkdirSync, readFileSync as F, rmdirSync, statSync as $o, writeFileSync } from "fs";
import { totalmem as ko } from "os";
import { posix as E } from "path";
function He(e) {
  let path_3;
  for (let r of e.split(`
`)) {
    let [o, s, ...u] = r.split(":");
    if (s === void 0 || u.length === 0) continue;
    let path_2 = u.join(":");
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
var Ve = "claude-code-bash",
  Fo = "claude-code-keeper",
  _n = 1073741824,
  No = _n,
  Xe = ["mcp", "lsp", "hooks", "plugin", "tmux", "helper", "agent"];
class $n {
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
var _ = new $n();
function DYs(e, n) {
  if (n !== void 0) _.subscribeRefresh = n;
  return _.register(e);
}
class kn {
  dir = void 0;
  layout = void 0;
  limit = 0;
  activatedClasses = new Set();
  pendingPids = new Map();
  pendingUnsubscribe = void 0;
  oomKillsSeen = void 0;
}
var T = new z(() => new kn());
function Ze() {
  let e = ms(T);
  if (e.dir !== void 0) return e.dir ?? void 0;
  if (Dw()) {
    e.dir = null;
    return;
  }
  let n = I();
  if (n !== "linux" && n !== "wsl") {
    e.dir = null;
    return;
  }
  let r = a.CLAUDE_CODE_TOOL_MEMORY_LIMIT?.trim().toLowerCase();
  if (r && (ws(r) || r === "none")) {
    e.dir = null;
    return;
  }
  let o = ei(r);
  if (o === void 0 && _.read("tengu_tool_memory_cgroup", !1) !== !0) return;
  try {
    let s = Ho(F("/proc/self/cgroup", "utf8"));
    if (!s) throw Error("no memory cgroup hierarchy");
    let limit_bytes = Jo(o, ko());
    if (limit_bytes === void 0) {
      e.dir = null, t("tool cgroup: disabled (host too small for the default cap)"), i("tengu_tool_cgroup", {
        status: b("host_too_small")
      });
      return;
    }
    Mn(s, limit_bytes), e.dir = s.dir, e.layout = s, e.limit = limit_bytes, t(`tool cgroup: ${s.dir} ${s.reuse ? "(nested: already capped, reusing our own)" : `limit=${limit_bytes}`}`), g("shell_memory_cgroup"), i("tengu_tool_cgroup", s.reuse ? {
      status: b("nested")
    } : {
      status: b("enabled"),
      limit_bytes: limit_bytes
    });
  } catch (error) {
    e.dir = null, t(`tool cgroup: disabled (${k(error) ?? error})`), m("shell_memory_cgroup", Fr(error) ?? "no_hierarchy"), i("tengu_tool_cgroup", {
      status: b("disabled")
    });
  }
  return e.dir ?? void 0;
}
function B(e) {
  if (Ze() === void 0) return;
  if (e !== "shell" && Fn().has(e)) return;
  let n = ms(T),
    r = Lo(n);
  if (r === void 0) return;
  if (Gn(n), !n.activatedClasses.has(e)) n.activatedClasses.add(e), i("tengu_tool_cgroup", {
    status: b("class_enabled"),
    class: c(e)
  });
  return r;
}
function LYs(e) {
  return typeof ms(T).dir === "string" && (e === "shell" || !Fn().has(e));
}
function Lo(e, n = {
  exists: exists,
  mkdirSync: mkdirSync,
  writeFileSync: writeFileSync,
  rmdirSync: rmdirSync
}) {
  if (e.dir === void 0 || e.dir === null) return;
  try {
    if (n.exists(e.dir)) return e.dir;
    if (e.layout === void 0 || e.layout.reuse) throw Error("enclosing tool cgroup is gone");
    return Mn(e.layout, e.limit, n), t(`tool cgroup: ${e.dir} vanished; re-created`), i("tengu_tool_cgroup", {
      status: b("recreated")
    }), e.dir;
  } catch (error) {
    e.dir = null, t(`tool cgroup: disabled (dir vanished: ${k(error) ?? error})`), i("tengu_tool_cgroup", {
      status: b("vanished")
    });
    return;
  }
}
function exists(e) {
  return $o(e, {
    throwIfNoEntry: !1
  }) !== void 0;
}
function Fn() {
  let e = a.CLAUDE_CODE_TOOL_MEMORY_CGROUP_EXCLUDE?.trim(),
    n = jo(e);
  if (n.has("mcp") || !Mo(!e)) return n;
  return new Set([...n, "mcp"]);
}
function jo(e) {
  if (e) return An(e.split(","));
  let n = _.read("tengu_tool_cgroup_exclude_classes", null);
  if (Array.isArray(n)) return An(n);
  return new Set(Xe);
}
function Mo(e) {
  let n = a.CLAUDE_CODE_MCP_MEMORY_CGROUP?.trim().toLowerCase();
  if (n && (ws(n) || n === "none")) return !0;
  return e && _.read("tengu_mcp_memory_cgroup", null) === !1;
}
function An(e) {
  let n = new Set();
  for (let r of e) {
    let o = typeof r === "string" ? r.trim().toLowerCase() : "";
    if (o === "all-new") {
      Xe.forEach(item => n.add(item));
      continue;
    }
    let s = Xe.find(item => item === o);
    if (s !== void 0) n.add(s);
  }
  return n;
}
function vd(e) {
  let cgroup = B(e);
  return cgroup === void 0 ? {} : {
    cgroup: cgroup
  };
}
function AXn(e, command_5, r) {
  let o = B(e);
  if (o === void 0) return {
    command: command_5,
    args: [...r],
    pending: Ibt(),
    capped: !1
  };
  if (V2(command_5) === null) return {
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
function Ibt() {
  return ms(T).dir === void 0;
}
var Do = 64,
  xXn = {
    readStarttime: readStarttime,
    writeFileSync: writeFileSync,
    readCgroupPids: readCgroupPids,
    readProcIdentity: readProcIdentity
  };
function hGe(cls, n, shouldStayUncapped, o = xXn) {
  try {
    if (!n) return;
    Ze();
    let s = ms(T);
    if (s.dir === null) return;
    let starttime = o.readStarttime(n);
    if (starttime === void 0) return;
    let d = {
      cls: cls,
      starttime: starttime,
      shouldStayUncapped: shouldStayUncapped
    };
    if (s.dir !== void 0) {
      Nn(n, d, o);
      return;
    }
    if (Ln(s, o), s.pendingPids.size >= Do) {
      t(`tool cgroup: pending pid ${n} not parked (full)`);
      return;
    }
    s.pendingPids.set(n, d), s.pendingUnsubscribe ??= _.subscribeRefresh?.(() => Uo());
  } catch (error) {
    t(`tool cgroup: pending pid not parked (${error})`);
  }
}
function Uo(e = xXn) {
  let n = ms(T);
  try {
    if (Ze(), n.dir === void 0) {
      Ln(n, e);
      return;
    }
    if (n.dir !== null) for (let [r, o] of n.pendingPids) Nn(r, o, e);
  } catch (error) {
    t(`tool cgroup: late attach skipped (${error})`);
  }
  n.pendingPids.clear(), n.pendingUnsubscribe?.(), n.pendingUnsubscribe = void 0;
}
function Nn(e, {
  cls: cls_2,
  starttime: starttime_2,
  shouldStayUncapped: shouldStayUncapped_2
}, s) {
  let u = B(cls_2);
  if (u === void 0 || s.readStarttime(e) !== starttime_2) return;
  try {
    if (shouldStayUncapped_2?.()) {
      t(`tool cgroup: ${cls_2} pid ${e} left uncapped`);
      return;
    }
    let d = E.join(u, "cgroup.procs");
    s.writeFileSync(d, String(e));
    let l = 1,
      layout = ms(T).layout;
    if (layout !== void 0 && !layout.reuse) l += jn(e, layout.selfDir, d, s, "attached");
    t(`tool cgroup: late-attached ${cls_2} pid ${e} (${l} process${l === 1 ? "" : "es"})`);
  } catch (error) {
    t(`tool cgroup: late attach of pid ${e} failed (${k(error) ?? error})`);
  }
}
function Ln(e, n) {
  for (let [r, {
    starttime: starttime_3
  }] of e.pendingPids) if (n.readStarttime(r) !== starttime_3) e.pendingPids.delete(r);
}
function readStarttime(e) {
  try {
    return I5(F(`/proc/${e}/stat`, "utf8"));
  } catch {
    return;
  }
}
function readProcIdentity(e) {
  try {
    let n = F(`/proc/${e}/stat`, "utf8"),
      ppid = UYs(n),
      starttime_4 = I5(n);
    return ppid === void 0 || starttime_4 === void 0 ? void 0 : {
      ppid: ppid,
      starttime: starttime_4
    };
  } catch {
    return;
  }
}
function readCgroupPids(e) {
  return F(E.join(e, "cgroup.procs"), "utf8").split(`
`).map(item => Number.parseInt(item, 10)).filter(item => !Number.isNaN(item));
}
function zo(e) {
  let n = /^oom_kill (\d+)$/m.exec(e);
  return n ? Number.parseInt(n[1], 10) : void 0;
}
function Qe(e) {
  return E.join(e.dir, e.v2 ? "memory.events" : "memory.oom_control");
}
function K(e) {
  return F(e, "utf8");
}
function Je(e, n = K) {
  try {
    return zo(n(e));
  } catch {
    return;
  }
}
function Ujo(e = K) {
  let {
    dir: dir,
    layout: layout_2
  } = ms(T);
  if (!dir || layout_2 === void 0) return;
  return Je(Qe(layout_2), e);
}
function NYs(e, n = K) {
  let r = ms(T),
    o = e ?? r.oomKillsSeen,
    s = Ujo(n);
  return Gn(r, n, s), o === void 0 || s === void 0 ? void 0 : s > o;
}
function Gn(e, n = K, r) {
  try {
    let layout_3 = e.layout;
    if (!e.dir || layout_3 === void 0 || layout_3.reuse) return;
    let s = r ?? Je(Qe(layout_3), n);
    if (s === void 0) return;
    let oomKillsSeen = e.oomKillsSeen;
    if (e.oomKillsSeen = s, oomKillsSeen === void 0 || s <= oomKillsSeen) return;
    t(`tool cgroup: OOM killer fired ${s - oomKillsSeen} time(s) in ${layout_3.dir} since last check`), i("tengu_tool_cgroup", {
      status: b("oom_kill"),
      oom_kills: s - oomKillsSeen,
      cgroup_v2: layout_3.v2
    });
  } catch (error) {
    t(`tool cgroup: oom_kill check skipped (${error})`);
  }
}
function FYs(e, n = K) {
  let r = B(e),
    layout_4 = ms(T).layout;
  if (r === void 0 || layout_4 === void 0) return;
  let s = Qe(layout_4);
  return () => Je(s, n);
}
function HYs(e, n) {
  let r = B(e);
  if (r === void 0) return n;
  return `sh -c '{ echo $PPID > "$1"/cgroup.procs; } 2>/dev/null' sh ${ho([r])}; ${n}`;
}
function PXn(e, n, r = xXn) {
  try {
    let o = ms(T);
    if (o.dir === void 0) {
      if (o.pendingPids.get(e)?.starttime !== n) return !1;
      return o.pendingPids.delete(e), t(`tool cgroup: unparked pid ${e}; it stays uncapped`), !0;
    }
    let layout_5 = o.layout;
    if (!o.dir || layout_5 === void 0 || layout_5.reuse) return !1;
    if (r.readStarttime(e) !== n) return !1;
    let u = E.join(layout_5.selfDir, "cgroup.procs");
    r.writeFileSync(u, String(e));
    let released_count = 1 + jn(e, layout_5.dir, u, r, "released");
    return t(`tool cgroup: released pid ${e} (${released_count} process${released_count === 1 ? "" : "es"}) to ${layout_5.selfDir}`), i("tengu_tool_cgroup", {
      status: b("released"),
      released_count: released_count
    }), !0;
  } catch (error) {
    return t(`tool cgroup: release of pid ${e} failed (${k(error) ?? error})`), !1;
  }
}
function jn(e, n, r, o, s) {
  let u = 0;
  for (let {
    pid: pid,
    starttime: starttime_5
  } of qo(e, n, o)) {
    if (o.readStarttime(pid) !== starttime_5) {
      t(`tool cgroup: descendant ${pid} of pid ${e} exited or was recycled; skipped`);
      continue;
    }
    try {
      o.writeFileSync(r, String(pid)), u++;
    } catch (error) {
      t(`tool cgroup: descendant ${pid} of pid ${e} not ${s} (${k(error) ?? error})`);
    }
  }
  return u;
}
function qo(e, n, r) {
  let o;
  try {
    o = r.readCgroupPids(n);
  } catch (error) {
    return t(`tool cgroup: members of ${n} unreadable (${k(error) ?? error}); moving pid ${e} alone`), [];
  }
  let s = new Map();
  for (let pid_2 of o) {
    if (pid_2 === e) continue;
    let f;
    try {
      f = r.readProcIdentity(pid_2);
    } catch {
      f = void 0;
    }
    if (f === void 0) continue;
    let p = {
        pid: pid_2,
        starttime: f.starttime
      },
      h = s.get(f.ppid);
    if (h) h.push(p);else s.set(f.ppid, [p]);
  }
  let u = [],
    d = [e];
  for (let l = 0; l < d.length; l++) for (let f of s.get(d[l]) ?? []) u.push(f), d.push(f.pid);
  return u;
}
function Mn(e, n, r = {
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
function Ho(e) {
  let n = He(e);
  if (!n) return;
  return Zo(n.mountRoot, n.path, n.v2 ? E.dirname(n.path) : n.path, n.v2);
}
function Vo(e) {
  let n = He(e);
  if (!n) return;
  let r = n.path.split("/"),
    o = r.indexOf(Ve);
  if (o < 0) return;
  let dir_2 = E.join(n.mountRoot, ...r.slice(0, o));
  return n.v2 ? {
    dir: E.join(dir_2, Fo),
    create: !0
  } : {
    dir: dir_2,
    create: !1
  };
}
var Xo = {
  readSelfCgroup: () => F("/proc/self/cgroup", "utf8"),
  mkdirSync: mkdirSync,
  writeFileSync: writeFileSync
};
function Yo(e) {
  let n = I();
  if (n !== "linux" && n !== "wsl") return;
  try {
    let r = Vo(e.readSelfCgroup());
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
function nP(e, n = Xo) {
  if (!e) return;
  let r = Yo(n);
  if (r === void 0) return;
  try {
    n.writeFileSync(E.join(r, "cgroup.procs"), String(e)), t(`tool cgroup: keeper pid ${e} moved to ${r}`);
  } catch (error) {
    t(`tool cgroup: keeper pid ${e} not moved (${k(error) ?? error})`);
  }
}
function Zo(e, n, r, v2) {
  let s = n.split("/").includes(Ve),
    u = E.join(e, n, ".");
  return s ? {
    dir: u,
    v2: v2,
    reuse: !0,
    selfDir: u
  } : {
    dir: E.join(e, r, Ve),
    v2: v2,
    reuse: !1,
    selfDir: u
  };
}
function Qo(e) {
  return Math.floor(e - Math.max(2 * _n, e * 0.15));
}
function Jo(e, n) {
  if (e !== void 0) return e;
  let r = Qo(n);
  return r >= No ? r : void 0;
}
function ei(e) {
  let n = /^(\d+(?:\.\d+)?)\s*([kmgt]?)(?:i?b)?$/i.exec(e?.trim() ?? "");
  if (!n) return;
  let r = Math.floor(Number(n[1]) * 1024 ** " kmgt".indexOf((n[2] || " ").toLowerCase()));
  return r >= 1 ? r : void 0;
}
function W({
  useToolMemoryCgroup = !0,
  toolCgroupClass = "helper"
}) {
  return useToolMemoryCgroup ? vd(toolCgroupClass) : {};
}
function et() {
  return !0;
}
async function by(e, n = [], r = {}) {
  U4();
  let {
      useToolMemoryCgroup: useToolMemoryCgroup_2,
      toolCgroupClass: toolCgroupClass_2,
      ...u
    } = r,
    d = {
      ...W({
        useToolMemoryCgroup: useToolMemoryCgroup_2,
        toolCgroupClass: toolCgroupClass_2
      }),
      ...u
    };
  if (et()) {
    let l = pF(e);
    if (l === null) throw Error(`Command '${e}' not found or is in an unsafe location (current directory)`);
    return Obt(l, n, d);
  }
  return Obt(e, n, d);
}
function cL(e, n = [], r = {}) {
  U4();
  let {
      useToolMemoryCgroup: useToolMemoryCgroup_3,
      toolCgroupClass: toolCgroupClass_3,
      ...u
    } = r,
    d = e;
  if (et()) {
    let p = pF(e);
    if (p === null) throw Object.assign(new x(`Command '${e}' not found or is in an unsafe location (current directory)`, "safeSpawn: command not found or is in an unsafe location (current directory)"), {
      code: "ENOENT"
    });
    d = p;
  }
  let l = W({
      useToolMemoryCgroup: useToolMemoryCgroup_3,
      toolCgroupClass: toolCgroupClass_3
    }),
    f = Obt(d, n, {
      ...l,
      ...u,
      buffer: !1,
      reject: !1
    });
  if (useToolMemoryCgroup_3 !== !1 && l.cgroup === void 0 && Ibt()) hGe(toolCgroupClass_3 ?? "helper", f.pid);
  return f.catch(() => {}), f;
}
function Bjo(e, n = [], r = {}) {
  U4();
  let {
      useToolMemoryCgroup: useToolMemoryCgroup_4,
      toolCgroupClass: toolCgroupClass_4,
      ...u
    } = r,
    d = {
      ...W({
        useToolMemoryCgroup: useToolMemoryCgroup_4,
        toolCgroupClass: toolCgroupClass_4
      }),
      ...u
    };
  if (et()) {
    let l = pF(e);
    if (l === null) throw Error(`Command '${e}' not found or is in an unsafe location (current directory)`);
    return U(l, n, d);
  }
  return U(e, n, d);
}
async function cI(e, n = {}) {
  U4();
  let {
    useToolMemoryCgroup: useToolMemoryCgroup_5,
    toolCgroupClass: toolCgroupClass_5,
    ...s
  } = n;
  return Obt(e, {
    ...W({
      useToolMemoryCgroup: useToolMemoryCgroup_5,
      toolCgroupClass: toolCgroupClass_5
    }),
    ...s,
    shell: !0
  });
}
function $Ys(e, n = {}) {
  U4();
  let {
    useToolMemoryCgroup: useToolMemoryCgroup_6,
    toolCgroupClass: toolCgroupClass_6,
    ...s
  } = n;
  return U(e, {
    ...W({
      useToolMemoryCgroup: useToolMemoryCgroup_6,
      toolCgroupClass: toolCgroupClass_6
    }),
    ...s,
    shell: !0
  });
}
export { RXn, onExit as yQ, Obt, dDe, OA, U4, DYs, LYs, vd, AXn, Ibt, xXn, hGe, Ujo, NYs, FYs, HYs, PXn, nP, by, cL, Bjo, cI, $Ys };