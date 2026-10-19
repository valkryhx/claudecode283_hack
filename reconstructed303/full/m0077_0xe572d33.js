// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  ws
} from "B:/~BUN/root/chunk-rwkgcmm8.js";
import {
  ms,
  de,
  Dw
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  b,
  c
} from "B:/~BUN/root/chunk-jthpk6wv.js";
import {
  x,
  k,
  Fr
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  z
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  i
} from "B:/~BUN/root/chunk-1kfn24jp.js";
import {
  g,
  m
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  V2,
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  I
} from "B:/~BUN/root/chunk-je1b1drr.js";
import {
  pF
} from "B:/~BUN/root/chunk-j704adqd.js";
import {
  ho
} from "B:/~BUN/root/chunk-fqc7tjgr.js";
import {
  I5,
  UYs
} from "B:/~BUN/root/chunk-7j1crw74.js";
import {
  ve,
  R,
  Ue
} from "B:/~BUN/root/chunk-ef0msk7r.js";
var ct = R(function(ti, ut) {
  ut.exports = at;
  at.sync = Un;
  var it = Ue("fs");

  function Dn(e, n) {
    var r = n.pathExt !== void 0 ? n.pathExt : process.env.PATHEXT;
    if (!r) return !0;
    if (r = r.split(";"), r.indexOf("") !== -1) return !0;
    for (var o = 0; o < r.length; o++) {
      var s = r[o].toLowerCase();
      if (s && e.substr(-s.length).toLowerCase() === s) return !0
    }
    return !1
  }

  function st(e, n, r) {
    if (!e.isSymbolicLink() && !e.isFile()) return !1;
    return Dn(n, r)
  }

  function at(e, n, r) {
    it.stat(e, function(o, s) {
      r(o, o ? !1 : st(s, e, n))
    })
  }

  function Un(e, n) {
    return st(it.statSync(e), e, n)
  }
});
var lt = R(function(ri, dt) {
  var ni = Ue("fs"),
    pe;
  pe = ct();
  dt.exports = me;
  me.sync = Bn;

  function me(e, n, r) {
    if (typeof n === "function") r = n, n = {};
    if (!r) {
      if (typeof Promise !== "function") throw TypeError("callback not provided");
      return new Promise(function(o, s) {
        me(e, n || {}, function(u, d) {
          if (u) s(u);
          else o(d)
        })
      })
    }
    pe(e, n || {}, function(o, s) {
      if (o) {
        if (o.code === "EACCES" || n && n.ignoreErrors) o = null, s = !1
      }
      r(o, s)
    })
  }

  function Bn(e, n) {
    try {
      return pe.sync(e, n || {})
    } catch (r) {
      if (n && n.ignoreErrors || r.code === "EACCES") return !1;
      else throw r
    }
  }
});
var ht = R(function(oi, gt) {
  var X = Ue("path"),
    ge = lt(),
    ft = (e) => Object.assign(Error(`not found: ${e}`), {
      code: "ENOENT"
    }),
    pt = (e, n) => {
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
    mt = (e, n, r) => {
      if (typeof n === "function") r = n, n = {};
      if (!n) n = {};
      let {
        pathEnv: o,
        pathExt: s,
        pathExtExe: u
      } = pt(e, n), d = [], l = (p) => new Promise((h, S) => {
        if (p === o.length) return n.all && d.length ? h(d) : S(ft(e));
        let y = o[p],
          w = /^".*"$/.test(y) ? y.slice(1, -1) : y,
          C = X.join(w, e),
          P = !w && /^\.[\\\/]/.test(e) ? e.slice(0, 2) + C : C;
        h(f(P, p, 0))
      }), f = (p, h, S) => new Promise((y, w) => {
        if (S === s.length) return y(l(h + 1));
        let C = s[S];
        ge(p + C, {
          pathExt: u
        }, (P, O) => {
          if (!P && O)
            if (n.all) d.push(p + C);
            else return y(p + C);
          return y(f(p, h, S + 1))
        })
      });
      return r ? l(0).then((p) => r(null, p), r) : l(0)
    },
    Kn = (e, n) => {
      n = n || {};
      let {
        pathEnv: r,
        pathExt: o,
        pathExtExe: s
      } = pt(e, n), u = [];
      for (let d = 0; d < r.length; d++) {
        let l = r[d],
          f = /^".*"$/.test(l) ? l.slice(1, -1) : l,
          p = X.join(f, e),
          h = !f && /^\.[\\\/]/.test(e) ? e.slice(0, 2) + p : p;
        for (let S = 0; S < o.length; S++) {
          let y = h + o[S];
          try {
            if (ge.sync(y, {
                pathExt: s
              }))
              if (n.all) u.push(y);
              else return y
          } catch (w) {}
        }
      }
      if (n.all && u.length) return u;
      if (n.nothrow) return null;
      throw ft(e)
    };
  gt.exports = mt;
  mt.sync = Kn
});
var St = R(function(ii, he) {
  var yt = (e = {}) => {
    let n = e.env || process.env;
    if ((e.platform || "win32") !== "win32") return "PATH";
    return Object.keys(n).reverse().find((o) => o.toUpperCase() === "PATH") || "Path"
  };
  he.exports = yt;
  he.exports.default = yt
});
var wt = R(function(si, Ct) {
  var Y = Ue("path"),
    bt = ht(),
    Wn = St();

  function xt(e, n) {
    let r = e.options.env || process.env,
      o = process.cwd(),
      s = e.options.cwd != null,
      u = s && process.chdir !== void 0 && !process.chdir.disabled;
    if (u) try {
      process.chdir(e.options.cwd)
    } catch (l) {}
    let d;
    try {
      d = bt.sync(e.command, {
        path: r[Wn({
          env: r
        })],
        pathExt: n ? Y.delimiter : void 0
      })
    } catch (l) {} finally {
      if (u) try {
        process.chdir(o)
      } catch (l) {
        let f = l !== null && typeof l === "object" && typeof l.code === "string" ? l.code : "";
        if (!(/^E[A-Z0-9]+$/.test(f) || f === "UNKNOWN" || f.startsWith("Unknown system error"))) throw l
      }
    }
    if (d) d = Y.resolve(s ? e.options.cwd : "", d);
    return d
  }

  function zn(e) {
    return xt(e) || xt(e, !0)
  }
  Ct.exports = zn
});
var Et = R(function(Vn, Se) {
  var ye = /([()\][%!^"`<>&|;, *?])/g;

  function qn(e) {
    return e = e.replace(ye, "^$1"), e
  }

  function Hn(e, n) {
    if (e = `${e}`, e = e.replace(/(?=(\\+?)?)\1"/g, "$1$1\\\""), e = e.replace(/(?=(\\+?)?)\1$/, "$1$1"), e = `"${e}"`, e = e.replace(ye, "^$1"), n) e = e.replace(ye, "^$1");
    return e
  }
  Vn.command = qn;
  Vn.argument = Hn
});
var Pt = R(function(ai, Tt) {
  Tt.exports = /^#!(.*)/
});
var Ot = R(function(ui, It) {
  var Zn = Pt();
  It.exports = (e = "") => {
    let n = e.match(Zn);
    if (!n) return null;
    let [r, o] = n[0].replace(/#! ?/, "").split(" "), s = r.split("/").pop();
    if (s === "env") return o;
    return o ? `${s} ${o}` : s
  }
});
var At = R(function(ci, vt) {
  var v = Ue("fs"),
    Qn = Ot();

  function Jn(e) {
    let r = Buffer.alloc(150),
      o;
    try {
      o = v.openSync(e, "r"), v.readSync(o, r, 0, 150, 0), v.closeSync(o)
    } catch (s) {}
    return Qn(r.toString())
  }
  vt.exports = Jn
});
var kt = R(function(di, $t) {
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
    return e.file
  }

  function or(e) {
    let n = rr(e),
      r = !tr.test(n);
    if (e.options.forceShell || r) {
      let o = nr.test(n);
      e.command = _t.normalize(e.command), e.command = Z.command(e.command), e.args = e.args.map((u) => Z.argument(u, o));
      let s = [e.command].concat(e.args).join(" ");
      e.args = ["/d", "/s", "/c", `"${s}"`], e.command = process.env.comspec || "cmd.exe", e.options.windowsVerbatimArguments = !0
    }
    return e
  }

  function ir(e, n, r) {
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
    return r.shell ? o : or(o)
  }
  $t.exports = ir
});
var Lt = R(function(li, Nt) {
  function xe(e, n) {
    return Object.assign(Error(`${n} ${e.command} ENOENT`), {
      code: "ENOENT",
      errno: "ENOENT",
      syscall: `${n} ${e.command}`,
      path: e.command,
      spawnargs: e.args
    })
  }

  function sr(e, n) {
    let r = e.emit;
    e.emit = function(o, s) {
      if (o === "exit") {
        let u = Ft(s, n);
        if (u) return r.call(e, "error", u)
      }
      return r.apply(e, arguments)
    }
  }

  function Ft(e, n) {
    if (e === 1 && !n.file) return xe(n.original, "spawn");
    return null
  }

  function ar(e, n) {
    if (e === 1 && !n.file) return xe(n.original, "spawnSync");
    return null
  }
  Nt.exports = {
    hookChildProcess: sr,
    verifyENOENT: Ft,
    verifyENOENTSync: ar,
    notFoundError: xe
  }
});
var RXn = R(function(fi, A) {
  var Q = Ue("child_process"),
    be = kt(),
    N = Lt();

  function Gt(e, n, r) {
    let o = be(e, n, r),
      s = Q.spawn(o.command, o.args, o.options);
    return N.hookChildProcess(s, o), s
  }

  function ur(e, n, r) {
    let o = be(e, n, r),
      s = Q.spawnSync(o.command, o.args, o.options);
    return s.error = s.error || N.verifyENOENTSync(s.status, o), s
  }
  A.exports = Gt;
  A.exports.spawn = Gt;
  A.exports.sync = ur;
  A.exports._parse = be;
  A.exports._enoent = N
});
var pn = R(function(Ss, fn) {
  var {
    PassThrough: ao
  } = Ue("stream");
  fn.exports = function() {
    var e = [],
      n = new ao({
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
      if (e = e.filter(function(d) {
          return d !== u
        }), !e.length && n.readable) n.end()
    }
  }
});
var In = ve(RXn(), 1);
import {
  Buffer as Oo
} from "buffer";
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
  return e
}
import ee from "process";
import L from "path";
import {
  fileURLToPath as jt
} from "url";

function J(e = {}) {
  let {
    env: n = process.env,
    platform: r = "win32"
  } = e;
  if (r !== "win32") return "PATH";
  return Object.keys(n).reverse().find((o) => o.toUpperCase() === "PATH") || "Path"
}
var cr = ({
    cwd: e = ee.cwd(),
    path: n = ee.env[J()],
    preferLocal: r = !0,
    execPath: o = ee.execPath,
    addExecPath: s = !0
  } = {}) => {
    let u = e instanceof URL ? jt(e) : e,
      d = L.resolve(u),
      l = [];
    if (r) dr(l, d);
    if (s) lr(l, o, d);
    return [...l, n].join(L.delimiter)
  },
  dr = (e, n) => {
    let r;
    while (r !== n) e.push(L.join(n, "node_modules/.bin")), r = n, n = L.resolve(n, "..")
  },
  lr = (e, n, r) => {
    let o = n instanceof URL ? jt(n) : n;
    e.push(L.resolve(r, o, ".."))
  },
  Mt = ({
    env: e = ee.env,
    ...n
  } = {}) => {
    e = {
      ...e
    };
    let r = J({
      env: e
    });
    return n.path = e[r], e[r] = cr(n), e
  };
var fr = (e, n, r, o) => {
    if (r === "length" || r === "prototype") return;
    if (r === "arguments" || r === "caller") return;
    let s = Object.getOwnPropertyDescriptor(e, r),
      u = Object.getOwnPropertyDescriptor(n, r);
    if (!pr(s, u) && o) return;
    Object.defineProperty(e, r, u)
  },
  pr = function(e, n) {
    return e === void 0 || e.configurable || e.writable === n.writable && e.enumerable === n.enumerable && e.configurable === n.configurable && (e.writable || e.value === n.value)
  },
  mr = (e, n) => {
    let r = Object.getPrototypeOf(n);
    if (r === Object.getPrototypeOf(e)) return;
    Object.setPrototypeOf(e, r)
  },
  gr = (e, n) => `/* Wrapped ${e}*/
${n}`,
  hr = Object.getOwnPropertyDescriptor(Function.prototype, "toString"),
  yr = Object.getOwnPropertyDescriptor(Function.prototype.toString, "name"),
  Sr = (e, n, r) => {
    let o = r === "" ? "" : `with ${r.trim()}() `,
      s = gr.bind(null, o, n.toString());
    Object.defineProperty(s, "name", yr), Object.defineProperty(e, "toString", {
      ...hr,
      value: s
    })
  };

function we(e, n, {
  ignoreNonConfigurable: r = !1
} = {}) {
  let {
    name: o
  } = e;
  for (let s of Reflect.ownKeys(n)) fr(e, n, s, r);
  return mr(e, n), Sr(e, n, o), e
}
var te = new WeakMap,
  Dt = (e, n = {}) => {
    if (typeof e !== "function") throw TypeError("Expected a function");
    let r, o = 0,
      s = e.displayName || e.name || "<anonymous>",
      u = function(...d) {
        if (te.set(u, ++o), o === 1) r = e.apply(this, d), e = null;
        else if (n.throw === !0) throw Error(`Function \`${s}\` can only be called once`);
        return r
      };
    return we(u, e), te.set(u, o), u
  };
Dt.callCount = (e) => {
  if (!te.has(e)) throw Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);
  return te.get(e)
};
var Ut = Dt;
import vr from "process";
import {
  constants as wr
} from "os";
var Bt = () => {
    let e = Ee - Kt + 1;
    return Array.from({
      length: e
    }, xr)
  },
  xr = (e, n) => ({
    name: `SIGRT${n+1}`,
    number: Kt + n,
    action: "terminate",
    description: "Application-specific signal (realtime)",
    standard: "posix"
  }),
  Kt = 34,
  Ee = 64;
import {
  constants as br
} from "os";
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
    return [...Wt, ...e].map(Cr)
  },
  Cr = ({
    name: e,
    number: n,
    description: r,
    action: o,
    forced: s = !1,
    standard: u
  }) => {
    let {
      signals: {
        [e]: d
      }
    } = br, l = d !== void 0;
    return {
      name: e,
      number: l ? d : n,
      description: r,
      supported: l,
      action: o,
      forced: s,
      standard: u
    }
  };
var Er = () => {
    let e = Te();
    return Object.fromEntries(e.map(Tr))
  },
  Tr = ({
    name: e,
    number: n,
    description: r,
    supported: o,
    action: s,
    forced: u,
    standard: d
  }) => [e, {
    name: e,
    number: n,
    description: r,
    supported: o,
    action: s,
    forced: u,
    standard: d
  }],
  zt = Er(),
  Pr = () => {
    let e = Te(),
      n = Ee + 1,
      r = Array.from({
        length: n
      }, (o, s) => Ir(s, e));
    return Object.assign({}, ...r)
  },
  Ir = (e, n) => {
    let r = Or(e, n);
    if (r === void 0) return {};
    let {
      name: o,
      description: s,
      supported: u,
      action: d,
      forced: l,
      standard: f
    } = r;
    return {
      [e]: {
        name: o,
        number: e,
        description: s,
        supported: u,
        action: d,
        forced: l,
        standard: f
      }
    }
  },
  Or = (e, n) => {
    let r = n.find(({
      name: o
    }) => wr.signals[o] === e);
    if (r !== void 0) return r;
    return n.find((o) => o.number === e)
  },
  $i = Pr();
var Ar = ({
    timedOut: e,
    timeout: n,
    errorCode: r,
    signal: o,
    signalDescription: s,
    exitCode: u,
    isCanceled: d
  }) => {
    if (e) return `timed out after ${n} milliseconds`;
    if (d) return "was canceled";
    if (r !== void 0) return `failed with ${r}`;
    if (o !== void 0) return `was killed with ${o} (${s})`;
    if (u !== void 0) return `failed with exit code ${u}`;
    return "failed"
  },
  G = ({
    stdout: e,
    stderr: n,
    all: r,
    error: o,
    signal: s,
    exitCode: u,
    command: d,
    escapedCommand: l,
    timedOut: f,
    isCanceled: p,
    killed: h,
    parsed: {
      options: {
        timeout: S,
        cwd: y = vr.cwd()
      }
    }
  }) => {
    u = u === null ? void 0 : u, s = s === null ? void 0 : s;
    let w = s === void 0 ? void 0 : zt[s].description,
      C = o && o.code,
      O = `Command ${Ar({timedOut:f,timeout:S,errorCode:C,signal:s,signalDescription:w,exitCode:u,isCanceled:p})}: ${d}`,
      q = Object.prototype.toString.call(o) === "[object Error]",
      H = q ? `${O}
${o.message}` : O,
      V = [H, n, e].filter(Boolean).join(`
`);
    if (q) o.originalMessage = o.message, o.message = V;
    else o = Error(V);
    if (o.shortMessage = H, o.command = d, o.escapedCommand = l, o.exitCode = u, o.signal = s, o.signalDescription = w, o.stdout = e, o.stderr = n, o.cwd = y, r !== void 0) o.all = r;
    if ("bufferedData" in o) delete o.bufferedData;
    return o.failed = !0, o.timedOut = Boolean(f), o.isCanceled = p, o.killed = h && !f, o
  };
var ne = ["stdin", "stdout", "stderr"],
  Rr = (e) => ne.some((n) => e[n] !== void 0),
  qt = (e) => {
    if (!e) return;
    let {
      stdio: n
    } = e;
    if (n === void 0) return ne.map((o) => e[o]);
    if (Rr(e)) throw Error(`It's not possible to provide \`stdio\` in combination with one of ${ne.map((o)=>`\`${o}\``).join(", ")}`);
    if (typeof n === "string") return n;
    if (!Array.isArray(n)) throw TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof n}\``);
    let r = Math.max(n.length, ne.length);
    return Array.from({
      length: r
    }, (o, s) => n[s])
  };
import kr from "os";
var j = [];
j.push("SIGHUP", "SIGINT", "SIGTERM");
var re = (e) => !!e && typeof e === "object" && typeof e.removeListener === "function" && typeof e.emit === "function" && typeof e.reallyExit === "function" && typeof e.listeners === "function" && typeof e.kill === "function" && typeof e.pid === "number" && typeof e.on === "function",
  Pe = Symbol.for("signal-exit emitter"),
  Ie = globalThis,
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
    if (Ie[Pe]) return Ie[Pe];
    _r(Ie, Pe, {
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
class Ae {}
var $r = (e) => ({
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
class Vt extends Ae {
  onExit() {
    return () => {}
  }
  load() {}
  unload() {}
}
class Xt extends Ae {
  #s = Oe.platform === "win32" ? "SIGINT" : "SIGHUP";
  #t = new Ht;
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
          count: o
        } = this.#t,
        s = e;
      if (typeof s.__signal_exit_emitter__ === "object" && typeof s.__signal_exit_emitter__.count === "number") o += s.__signal_exit_emitter__.count;
      if (r.length === o) {
        this.unload();
        let u = this.#t.emit("exit", null, n),
          d = n === "SIGHUP" ? this.#s : n;
        if (!u) e.kill(e.pid, d)
      }
    };
    this.#i = e.reallyExit, this.#o = e.emit
  }
  onExit(e, n) {
    if (!re(this.#e)) return () => {};
    if (this.#n === !1) this.load();
    let r = n?.alwaysLast ? "afterExit" : "exit";
    return this.#t.on(r, e), () => {
      if (this.#t.removeListener(r, e), this.#t.listeners.exit.length === 0 && this.#t.listeners.afterExit.length === 0) this.unload()
    }
  }
  load() {
    if (this.#n) return;
    this.#n = !0, this.#t.count += 1;
    for (let e of j) try {
      let n = this.#r[e];
      if (n) this.#e.on(e, n)
    } catch (n) {}
    this.#e.emit = (e, ...n) => this.#u(e, ...n), this.#e.reallyExit = (e) => this.#a(e)
  }
  unload() {
    if (!this.#n) return;
    this.#n = !1, j.forEach((e) => {
      let n = this.#r[e];
      if (!n) throw Error("Listener not defined for signal: " + e);
      try {
        this.#e.removeListener(e, n)
      } catch (r) {}
    }), this.#e.emit = this.#o, this.#e.reallyExit = this.#i, this.#t.count -= 1
  }
  #a(e) {
    if (!re(this.#e)) return 0;
    return this.#e.exitCode = e || 0, this.#t.emit("exit", this.#e.exitCode, null), this.#i.call(this.#e, this.#e.exitCode)
  }
  #u(e, ...n) {
    let r = this.#o;
    if (e === "exit" && re(this.#e)) {
      if (typeof n[0] === "number") this.#e.exitCode = n[0];
      let o = r.call(this.#e, e, ...n);
      return this.#t.emit("exit", this.#e.exitCode, null), o
    } else return r.call(this.#e, e, ...n)
  }
}
var Oe = globalThis.process,
  {
    onExit: yQ,
    load: Di,
    unload: Ui
  } = $r(re(Oe) ? new Xt(Oe) : new Vt);
var Nr = 5000,
  Yt = (e, n = "SIGTERM", r = {}) => {
    let o = e(n);
    return Lr(e, n, r, o), o
  },
  Lr = (e, n, r, o) => {
    if (!Gr(n, r, o)) return;
    let s = Mr(r),
      u = setTimeout(() => {
        e("SIGKILL")
      }, s);
    if (u.unref) u.unref()
  },
  Gr = (e, {
    forceKillAfterTimeout: n
  }, r) => jr(e) && n !== !1 && r,
  jr = (e) => e === kr.constants.signals.SIGTERM || typeof e === "string" && e.toUpperCase() === "SIGTERM",
  Mr = ({
    forceKillAfterTimeout: e = !0
  }) => {
    if (e === !0) return Nr;
    if (!Number.isFinite(e) || e < 0) throw TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);
    return e
  },
  Zt = (e, n) => {
    if (e.kill()) n.isCanceled = !0
  },
  Dr = (e, n, r) => {
    e.kill(n), r(Object.assign(Error("Timed out"), {
      timedOut: !0,
      signal: n
    }))
  },
  Qt = (e, {
    timeout: n,
    killSignal: r = "SIGTERM"
  }, o) => {
    if (n === 0 || n === void 0) return o;
    let s, u = new Promise((l, f) => {
        s = setTimeout(() => {
          Dr(e, r, f)
        }, n)
      }),
      d = o.finally(() => {
        clearTimeout(s)
      });
    return Promise.race([u, d])
  },
  Jt = ({
    timeout: e
  }) => {
    if (e !== void 0 && (!Number.isFinite(e) || e < 0)) throw TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`)
  },
  en = async (e, {
    cleanup: n,
    detached: r
  }, o) => {
    if (!n || r) return o;
    let s = yQ(() => {
      e.kill()
    });
    return o.finally(() => {
      s()
    })
  };
import {
  createWriteStream as Ur
} from "fs";
import {
  ChildProcess as Br
} from "child_process";

function oe(e) {
  return e !== null && typeof e === "object" && typeof e.pipe === "function"
}

function Re(e) {
  return oe(e) && e.writable !== !1 && typeof e._write === "function" && typeof e._writableState === "object"
}
var Kr = (e) => e instanceof Br && typeof e.then === "function",
  _e = (e, n, r) => {
    if (typeof r === "string") return e[n].pipe(Ur(r)), e;
    if (Re(r)) return e[n].pipe(r), e;
    if (!Kr(r)) throw TypeError("The second argument must be a string, a stream or an Execa child process.");
    if (!Re(r.stdin)) throw TypeError("The target child process's stdin must be available.");
    return e[n].pipe(r.stdin), r
  },
  tn = (e) => {
    if (e.stdout !== null) e.pipeStdout = _e.bind(void 0, e, "stdout");
    if (e.stderr !== null) e.pipeStderr = _e.bind(void 0, e, "stderr");
    if (e.all !== void 0) e.pipeAll = _e.bind(void 0, e, "all")
  };
import {
  createReadStream as uo,
  readFileSync as co
} from "fs";
import {
  setTimeout as lo
} from "timers/promises";
var M = async (e, {
  init: n,
  convertChunk: r,
  getSize: o,
  truncateChunk: s,
  addChunk: u,
  getFinalChunk: d,
  finalize: l
}, {
  maxBuffer: f = Number.POSITIVE_INFINITY
} = {}) => {
  if (!zr(e)) throw Error("The first argument must be a Readable, a ReadableStream, or an async iterable.");
  let p = n();
  p.length = 0;
  try {
    for await (let h of e) {
      let S = qr(h),
        y = r[S](h, p);
      on({
        convertedChunk: y,
        state: p,
        getSize: o,
        truncateChunk: s,
        addChunk: u,
        maxBuffer: f
      })
    }
    return Wr({
      state: p,
      convertChunk: r,
      getSize: o,
      truncateChunk: s,
      addChunk: u,
      getFinalChunk: d,
      maxBuffer: f
    }), l(p)
  } catch (h) {
    throw h.bufferedData = l(p), h
  }
}, Wr = ({
  state: e,
  getSize: n,
  truncateChunk: r,
  addChunk: o,
  getFinalChunk: s,
  maxBuffer: u
}) => {
  let d = s(e);
  if (d !== void 0) on({
    convertedChunk: d,
    state: e,
    getSize: n,
    truncateChunk: r,
    addChunk: o,
    maxBuffer: u
  })
}, on = ({
  convertedChunk: e,
  state: n,
  getSize: r,
  truncateChunk: o,
  addChunk: s,
  maxBuffer: u
}) => {
  let d = r(e),
    l = n.length + d;
  if (l <= u) {
    nn(e, n, s, l);
    return
  }
  let f = o(e, u - n.length);
  if (f !== void 0) nn(f, n, s, u);
  throw new $e
}, nn = (e, n, r, o) => {
  n.contents = r(e, n, o), n.length = o
}, zr = (e) => typeof e === "object" && e !== null && typeof e[Symbol.asyncIterator] === "function", qr = (e) => {
  let n = typeof e;
  if (n === "string") return "string";
  if (n !== "object" || e === null) return "others";
  if (globalThis.Buffer?.isBuffer(e)) return "buffer";
  let r = rn.call(e);
  if (r === "[object ArrayBuffer]") return "arrayBuffer";
  if (r === "[object DataView]") return "dataView";
  if (Number.isInteger(e.byteLength) && Number.isInteger(e.byteOffset) && rn.call(e.buffer) === "[object ArrayBuffer]") return "typedArray";
  return "others"
}, {
  toString: rn
} = Object.prototype;
class $e extends Error {
  name = "MaxBufferError";
  constructor() {
    super("maxBuffer exceeded")
  }
}
var ke = (e) => e,
  Fe = () => {
    return
  },
  Ne = ({
    contents: e
  }) => e,
  ie = (e) => {
    throw Error(`Streams in object mode are not supported: ${String(e)}`)
  },
  se = (e) => e.length;
async function Le(e, n) {
  return M(e, to, n)
}
var Hr = () => ({
    contents: new ArrayBuffer(0)
  }),
  Vr = (e) => Xr.encode(e),
  Xr = new TextEncoder,
  sn = (e) => new Uint8Array(e),
  an = (e) => new Uint8Array(e.buffer, e.byteOffset, e.byteLength),
  Yr = (e, n) => e.slice(0, n),
  Zr = (e, {
    contents: n,
    length: r
  }, o) => {
    let s = dn() ? Jr(n, o) : Qr(n, o);
    return new Uint8Array(s).set(e, r), s
  },
  Qr = (e, n) => {
    if (n <= e.byteLength) return e;
    let r = new ArrayBuffer(cn(n));
    return new Uint8Array(r).set(new Uint8Array(e), 0), r
  },
  Jr = (e, n) => {
    if (n <= e.maxByteLength) return e.resize(n), e;
    let r = new ArrayBuffer(n, {
      maxByteLength: cn(n)
    });
    return new Uint8Array(r).set(new Uint8Array(e), 0), r
  },
  cn = (e) => un ** Math.ceil(Math.log(e) / Math.log(un)),
  un = 2,
  eo = ({
    contents: e,
    length: n
  }) => dn() ? e : e.slice(0, n),
  dn = () => ("resize" in ArrayBuffer.prototype),
  to = {
    init: Hr,
    convertChunk: {
      string: Vr,
      buffer: sn,
      arrayBuffer: sn,
      dataView: an,
      typedArray: an,
      others: ie
    },
    getSize: se,
    truncateChunk: Yr,
    addChunk: Zr,
    getFinalChunk: Fe,
    finalize: eo
  };
async function ae(e, n) {
  if (!("Buffer" in globalThis)) throw Error("getStreamAsBuffer() is only supported in Node.js");
  try {
    return ln(await Le(e, n))
  } catch (r) {
    if (r.bufferedData !== void 0) r.bufferedData = ln(r.bufferedData);
    throw r
  }
}
var ln = (e) => globalThis.Buffer.from(e);
async function Ge(e, n) {
  return M(e, so, n)
}
var no = () => ({
    contents: "",
    textDecoder: new TextDecoder
  }),
  ue = (e, {
    textDecoder: n
  }) => n.decode(e, {
    stream: !0
  }),
  ro = (e, {
    contents: n
  }) => n + e,
  oo = (e, n) => e.slice(0, n),
  io = ({
    textDecoder: e
  }) => {
    let n = e.decode();
    return n === "" ? void 0 : n
  },
  so = {
    init: no,
    convertChunk: {
      string: ke,
      buffer: ue,
      arrayBuffer: ue,
      dataView: ue,
      typedArray: ue,
      others: ie
    },
    getSize: se,
    truncateChunk: oo,
    addChunk: ro,
    getFinalChunk: io,
    finalize: Ne
  };
var mn = ve(pn(), 1),
  gn = (e) => {
    if (e !== void 0) throw TypeError("The `input` and `inputFile` options cannot be both set.")
  },
  fo = ({
    input: e,
    inputFile: n
  }) => {
    if (typeof n !== "string") return e;
    return gn(e), co(n)
  },
  hn = (e) => {
    let n = fo(e);
    if (oe(n)) throw TypeError("The `input` option cannot be a stream in sync mode");
    return n
  },
  po = ({
    input: e,
    inputFile: n
  }) => {
    if (typeof n !== "string") return e;
    return gn(e), uo(n)
  },
  yn = (e, n) => {
    let r = po(n);
    if (r === void 0) return;
    if (oe(r)) r.pipe(e.stdin);
    else e.stdin.end(r)
  },
  Sn = (e, {
    all: n
  }) => {
    if (!n || !e.stdout && !e.stderr) return;
    let r = mn.default();
    if (e.stdout) r.add(e.stdout);
    if (e.stderr) r.add(e.stderr);
    return r
  },
  je = async (e, n) => {
    if (!e || n === void 0) return;
    await lo(0), e.destroy();
    try {
      return await n
    } catch (r) {
      return r.bufferedData
    }
  }, Me = (e, {
    encoding: n,
    buffer: r,
    maxBuffer: o
  }) => {
    if (!e || !r) return;
    if (n === "utf8" || n === "utf-8") return Ge(e, {
      maxBuffer: o
    });
    if (n === null || n === "buffer") return ae(e, {
      maxBuffer: o
    });
    return mo(e, o, n)
  }, mo = async (e, n, r) => (await ae(e, {
    maxBuffer: n
  })).toString(r), xn = async ({
    stdout: e,
    stderr: n,
    all: r
  }, {
    encoding: o,
    buffer: s,
    maxBuffer: u
  }, d) => {
    let l = Me(e, {
        encoding: o,
        buffer: s,
        maxBuffer: u
      }),
      f = Me(n, {
        encoding: o,
        buffer: s,
        maxBuffer: u
      }),
      p = Me(r, {
        encoding: o,
        buffer: s,
        maxBuffer: u * 2
      });
    try {
      return await Promise.all([d, l, f, p])
    } catch (h) {
      return Promise.all([{
        error: h,
        signal: h.signal,
        timedOut: h.timedOut
      }, je(e, l), je(n, f), je(r, p)])
    }
  };
var go = (async () => {})().constructor.prototype,
  yo = ["then", "catch", "finally"].map((e) => [e, Reflect.getOwnPropertyDescriptor(go, e)]),
  De = (e, n) => {
    for (let [r, o] of yo) {
      let s = typeof n === "function" ? (...u) => Reflect.apply(o.value, n(), u) : o.value.bind(n);
      Reflect.defineProperty(e, r, {
        ...o,
        value: s
      })
    }
  },
  bn = (e) => new Promise((n, r) => {
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
  Buffer as So
} from "buffer";
import {
  ChildProcess as xo
} from "child_process";
var En = (e, n = []) => {
    if (!Array.isArray(n)) return [e];
    return [e, ...n]
  },
  bo = /^[\w.-]+$/,
  Co = (e) => {
    if (typeof e !== "string" || bo.test(e)) return e;
    return `"${e.replaceAll('"',"\\\"")}"`
  },
  Be = (e, n) => En(e, n).join(" "),
  Ke = (e, n) => En(e, n).map((r) => Co(r)).join(" "),
  wo = / +/g;
var Cn = (e) => {
    let n = typeof e;
    if (n === "string") return e;
    if (n === "number") return String(e);
    if (n === "object" && e !== null && !(e instanceof xo) && "stdout" in e) {
      let r = typeof e.stdout;
      if (r === "string") return e.stdout;
      if (So.isBuffer(e.stdout)) return e.stdout.toString();
      throw TypeError(`Unexpected "${r}" stdout in template expression`)
    }
    throw TypeError(`Unexpected "${n}" in template expression`)
  },
  wn = (e, n, r) => r || e.length === 0 || n.length === 0 ? [...e, ...n] : [...e.slice(0, -1), `${e.at(-1)}${n[0]}`, ...n.slice(1)],
  Eo = ({
    templates: e,
    expressions: n,
    tokens: r,
    index: o,
    template: s
  }) => {
    let u = s ?? e.raw[o],
      d = u.split(wo).filter(Boolean),
      l = wn(r, d, u.startsWith(" "));
    if (o === n.length) return l;
    let f = n[o],
      p = Array.isArray(f) ? f.map((h) => Cn(h)) : [Cn(f)];
    return wn(l, p, u.endsWith(" "))
  },
  We = (e, n) => {
    let r = [];
    for (let [o, s] of e.entries()) r = Eo({
      templates: e,
      expressions: n,
      tokens: r,
      index: o,
      template: s
    });
    return r
  };
import {
  debuglog as To
} from "util";
import Po from "process";
var Tn = To("execa").enabled,
  ce = (e, n) => String(e).padStart(n, "0"),
  Io = () => {
    let e = new Date;
    return `${ce(e.getHours(),2)}:${ce(e.getMinutes(),2)}:${ce(e.getSeconds(),2)}.${ce(e.getMilliseconds(),3)}`
  },
  ze = (e, {
    verbose: n
  }) => {
    if (!n) return;
    Po.stderr.write(`[${Io()}] ${e}
`)
  };
var Ao = 1e8,
  Ro = ({
    env: e,
    extendEnv: n,
    preferLocal: r,
    localDir: o,
    execPath: s
  }) => {
    let u = n ? {
      ...le.env,
      ...e
    } : e;
    if (r) return Mt({
      env: u,
      cwd: o,
      execPath: s
    });
    return u
  },
  On = (e, n, r = {}) => {
    let o = In.default._parse(e, n, r);
    if (e = o.command, n = o.args, r = o.options, r = {
        maxBuffer: Ao,
        buffer: !0,
        stripFinalNewline: !0,
        extendEnv: !0,
        preferLocal: !1,
        localDir: r.cwd || le.cwd(),
        execPath: le.execPath,
        encoding: "utf8",
        reject: !0,
        cleanup: !0,
        all: !1,
        windowsHide: !0,
        verbose: Tn,
        ...r
      }, r.env = Ro(r), r.stdio = qt(r), le.platform === "win32" && vo.basename(e, ".exe") === "cmd") n.unshift("/q");
    return {
      file: e,
      args: n,
      options: r,
      parsed: o
    }
  },
  D = (e, n, r) => {
    if (typeof n !== "string" && !Oo.isBuffer(n)) return r === void 0 ? void 0 : "";
    if (e.stripFinalNewline) return Ce(n);
    return n
  };

function Obt(e, n, r) {
  let o = On(e, n, r),
    s = Be(e, n),
    u = Ke(e, n);
  ze(u, o.options), Jt(o.options);
  let d;
  try {
    d = qe.spawn(o.file, o.args, o.options)
  } catch (w) {
    let C = new qe.ChildProcess,
      P = Promise.reject(G({
        error: w,
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
    return De(C, P), C
  }
  let l = bn(d),
    f = Qt(d, o.options, l),
    p = en(d, o.options, f),
    h = {
      isCanceled: !1
    };
  d.kill = Yt.bind(null, d.kill.bind(d)), d.cancel = Zt.bind(null, d, h);
  let y = Ut(async () => {
    let [{
      error: w,
      exitCode: C,
      signal: P,
      timedOut: O
    }, q, H, V] = await xn(d, o.options, p), tt = D(o.options, q), nt = D(o.options, H), rt = D(o.options, V);
    if (w || C !== 0 || P !== null) {
      let ot = G({
        error: w,
        exitCode: C,
        signal: P,
        stdout: tt,
        stderr: nt,
        all: rt,
        command: s,
        escapedCommand: u,
        parsed: o,
        timedOut: O,
        isCanceled: h.isCanceled || (o.options.signal ? o.options.signal.aborted : !1),
        killed: d.killed
      });
      if (!o.options.reject) return ot;
      throw ot
    }
    return {
      command: s,
      escapedCommand: u,
      exitCode: 0,
      stdout: tt,
      stderr: nt,
      all: rt,
      failed: !1,
      timedOut: !1,
      isCanceled: !1,
      killed: !1
    }
  });
  return yn(d, o.options), d.all = Sn(d, o.options), tn(d), De(d, y), d
}

function U(e, n, r) {
  let o = On(e, n, r),
    s = Be(e, n),
    u = Ke(e, n);
  ze(u, o.options);
  let d = hn(o.options),
    l;
  try {
    l = qe.spawnSync(o.file, o.args, {
      ...o.options,
      input: d
    })
  } catch (h) {
    throw G({
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
  let f = D(o.options, l.stdout, l.error),
    p = D(o.options, l.stderr, l.error);
  if (l.error || l.status !== 0 || l.signal !== null) {
    let h = G({
      stdout: f,
      stderr: p,
      error: l.error,
      signal: l.signal,
      exitCode: l.status,
      command: s,
      escapedCommand: u,
      parsed: o,
      timedOut: l.error && l.error.code === "ETIMEDOUT",
      isCanceled: !1,
      killed: l.signal !== null
    });
    if (!o.options.reject) return h;
    throw h
  }
  return {
    command: s,
    escapedCommand: u,
    exitCode: 0,
    stdout: f,
    stderr: p,
    failed: !1,
    timedOut: !1,
    isCanceled: !1,
    killed: !1
  }
}
var _o = ({
    input: e,
    inputFile: n,
    stdio: r
  }) => e === void 0 && n === void 0 && r === void 0 ? {
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
    return Obt(s, u, Pn(e))
  }
  return n.sync = (r, ...o) => {
    if (!Array.isArray(r)) throw TypeError("Please use $(options).sync`command` instead of $.sync(options)`command`.");
    let [s, ...u] = We(r, o);
    return U(s, u, Pn(e))
  }, n
}
var Xs = vn();
var dDe = "Programs are unavailable in this session; the command was not run.";

function OA() {
  return de()
}

function U4() {
  if (OA()) throw new x(dDe, "a program start was refused in a diskless session")
}
import {
  mkdirSync as Ye,
  readFileSync as F,
  rmdirSync as Rn,
  statSync as $o,
  writeFileSync as fe
} from "fs";
import {
  totalmem as ko
} from "os";
import {
  posix as E
} from "path";

function He(e) {
  let n;
  for (let r of e.split(`
`)) {
    let [o, s, ...u] = r.split(":");
    if (s === void 0 || u.length === 0) continue;
    let d = u.join(":");
    if (s.split(",").includes("memory")) return {
      mountRoot: "/sys/fs/cgroup/memory",
      path: d,
      v2: !1
    };
    if (o === "0" && s === "") n = d
  }
  return n === void 0 ? void 0 : {
    mountRoot: "/sys/fs/cgroup",
    path: n,
    v2: !0
  }
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
    let n = this.reader;
    return this.reader = e, n
  }
  read(e, n) {
    return this.reader ? this.reader(e, n) : n
  }
}
var _ = new $n;

function DYs(e, n) {
  if (n !== void 0) _.subscribeRefresh = n;
  return _.register(e)
}
class kn {
  dir = void 0;
  layout = void 0;
  limit = 0;
  activatedClasses = new Set;
  pendingPids = new Map;
  pendingUnsubscribe = void 0;
  oomKillsSeen = void 0
}
var T = new z(() => new kn);

function Ze() {
  let e = ms(T);
  if (e.dir !== void 0) return e.dir ?? void 0;
  if (Dw()) {
    e.dir = null;
    return
  }
  let n = I();
  if (n !== "linux" && n !== "wsl") {
    e.dir = null;
    return
  }
  let r = a.CLAUDE_CODE_TOOL_MEMORY_LIMIT?.trim().toLowerCase();
  if (r && (ws(r) || r === "none")) {
    e.dir = null;
    return
  }
  let o = ei(r);
  if (o === void 0 && _.read("tengu_tool_memory_cgroup", !1) !== !0) return;
  try {
    let s = Ho(F("/proc/self/cgroup", "utf8"));
    if (!s) throw Error("no memory cgroup hierarchy");
    let u = Jo(o, ko());
    if (u === void 0) {
      e.dir = null, t("tool cgroup: disabled (host too small for the default cap)"), i("tengu_tool_cgroup", {
        status: b("host_too_small")
      });
      return
    }
    Mn(s, u), e.dir = s.dir, e.layout = s, e.limit = u, t(`tool cgroup: ${s.dir} ${s.reuse?"(nested: already capped, reusing our own)":`limit=${u}`}`), g("shell_memory_cgroup"), i("tengu_tool_cgroup", s.reuse ? {
      status: b("nested")
    } : {
      status: b("enabled"),
      limit_bytes: u
    })
  } catch (s) {
    e.dir = null, t(`tool cgroup: disabled (${k(s)??s})`), m("shell_memory_cgroup", Fr(s) ?? "no_hierarchy"), i("tengu_tool_cgroup", {
      status: b("disabled")
    })
  }
  return e.dir ?? void 0
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
  return r
}

function LYs(e) {
  return typeof ms(T).dir === "string" && (e === "shell" || !Fn().has(e))
}

function Lo(e, n = {
  exists: Go,
  mkdirSync: Ye,
  writeFileSync: fe,
  rmdirSync: Rn
}) {
  if (e.dir === void 0 || e.dir === null) return;
  try {
    if (n.exists(e.dir)) return e.dir;
    if (e.layout === void 0 || e.layout.reuse) throw Error("enclosing tool cgroup is gone");
    return Mn(e.layout, e.limit, n), t(`tool cgroup: ${e.dir} vanished; re-created`), i("tengu_tool_cgroup", {
      status: b("recreated")
    }), e.dir
  } catch (r) {
    e.dir = null, t(`tool cgroup: disabled (dir vanished: ${k(r)??r})`), i("tengu_tool_cgroup", {
      status: b("vanished")
    });
    return
  }
}

function Go(e) {
  return $o(e, {
    throwIfNoEntry: !1
  }) !== void 0
}

function Fn() {
  let e = a.CLAUDE_CODE_TOOL_MEMORY_CGROUP_EXCLUDE?.trim(),
    n = jo(e);
  if (n.has("mcp") || !Mo(!e)) return n;
  return new Set([...n, "mcp"])
}

function jo(e) {
  if (e) return An(e.split(","));
  let n = _.read("tengu_tool_cgroup_exclude_classes", null);
  if (Array.isArray(n)) return An(n);
  return new Set(Xe)
}

function Mo(e) {
  let n = a.CLAUDE_CODE_MCP_MEMORY_CGROUP?.trim().toLowerCase();
  if (n && (ws(n) || n === "none")) return !0;
  return e && _.read("tengu_mcp_memory_cgroup", null) === !1
}

function An(e) {
  let n = new Set;
  for (let r of e) {
    let o = typeof r === "string" ? r.trim().toLowerCase() : "";
    if (o === "all-new") {
      Xe.forEach((u) => n.add(u));
      continue
    }
    let s = Xe.find((u) => u === o);
    if (s !== void 0) n.add(s)
  }
  return n
}

function vd(e) {
  let n = B(e);
  return n === void 0 ? {} : {
    cgroup: n
  }
}

function AXn(e, n, r) {
  let o = B(e);
  if (o === void 0) return {
    command: n,
    args: [...r],
    pending: Ibt(),
    capped: !1
  };
  if (V2(n) === null) return {
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

function Ibt() {
  return ms(T).dir === void 0
}
var Do = 64,
  xXn = {
    readStarttime: Bo,
    writeFileSync: fe,
    readCgroupPids: Wo,
    readProcIdentity: Ko
  };

function hGe(e, n, r, o = xXn) {
  try {
    if (!n) return;
    Ze();
    let s = ms(T);
    if (s.dir === null) return;
    let u = o.readStarttime(n);
    if (u === void 0) return;
    let d = {
      cls: e,
      starttime: u,
      shouldStayUncapped: r
    };
    if (s.dir !== void 0) {
      Nn(n, d, o);
      return
    }
    if (Ln(s, o), s.pendingPids.size >= Do) {
      t(`tool cgroup: pending pid ${n} not parked (full)`);
      return
    }
    s.pendingPids.set(n, d), s.pendingUnsubscribe ??= _.subscribeRefresh?.(() => Uo())
  } catch (s) {
    t(`tool cgroup: pending pid not parked (${s})`)
  }
}

function Uo(e = xXn) {
  let n = ms(T);
  try {
    if (Ze(), n.dir === void 0) {
      Ln(n, e);
      return
    }
    if (n.dir !== null)
      for (let [r, o] of n.pendingPids) Nn(r, o, e)
  } catch (r) {
    t(`tool cgroup: late attach skipped (${r})`)
  }
  n.pendingPids.clear(), n.pendingUnsubscribe?.(), n.pendingUnsubscribe = void 0
}

function Nn(e, {
  cls: n,
  starttime: r,
  shouldStayUncapped: o
}, s) {
  let u = B(n);
  if (u === void 0 || s.readStarttime(e) !== r) return;
  try {
    if (o?.()) {
      t(`tool cgroup: ${n} pid ${e} left uncapped`);
      return
    }
    let d = E.join(u, "cgroup.procs");
    s.writeFileSync(d, String(e));
    let l = 1,
      f = ms(T).layout;
    if (f !== void 0 && !f.reuse) l += jn(e, f.selfDir, d, s, "attached");
    t(`tool cgroup: late-attached ${n} pid ${e} (${l} process${l===1?"":"es"})`)
  } catch (d) {
    t(`tool cgroup: late attach of pid ${e} failed (${k(d)??d})`)
  }
}

function Ln(e, n) {
  for (let [r, {
      starttime: o
    }] of e.pendingPids)
    if (n.readStarttime(r) !== o) e.pendingPids.delete(r)
}

function Bo(e) {
  try {
    return I5(F(`/proc/${e}/stat`, "utf8"))
  } catch {
    return
  }
}

function Ko(e) {
  try {
    let n = F(`/proc/${e}/stat`, "utf8"),
      r = UYs(n),
      o = I5(n);
    return r === void 0 || o === void 0 ? void 0 : {
      ppid: r,
      starttime: o
    }
  } catch {
    return
  }
}

function Wo(e) {
  return F(E.join(e, "cgroup.procs"), "utf8").split(`
`).map((n) => Number.parseInt(n, 10)).filter((n) => !Number.isNaN(n))
}

function zo(e) {
  let n = /^oom_kill (\d+)$/m.exec(e);
  return n ? Number.parseInt(n[1], 10) : void 0
}

function Qe(e) {
  return E.join(e.dir, e.v2 ? "memory.events" : "memory.oom_control")
}

function K(e) {
  return F(e, "utf8")
}

function Je(e, n = K) {
  try {
    return zo(n(e))
  } catch {
    return
  }
}

function Ujo(e = K) {
  let {
    dir: n,
    layout: r
  } = ms(T);
  if (!n || r === void 0) return;
  return Je(Qe(r), e)
}

function NYs(e, n = K) {
  let r = ms(T),
    o = e ?? r.oomKillsSeen,
    s = Ujo(n);
  return Gn(r, n, s), o === void 0 || s === void 0 ? void 0 : s > o
}

function Gn(e, n = K, r) {
  try {
    let o = e.layout;
    if (!e.dir || o === void 0 || o.reuse) return;
    let s = r ?? Je(Qe(o), n);
    if (s === void 0) return;
    let u = e.oomKillsSeen;
    if (e.oomKillsSeen = s, u === void 0 || s <= u) return;
    t(`tool cgroup: OOM killer fired ${s-u} time(s) in ${o.dir} since last check`), i("tengu_tool_cgroup", {
      status: b("oom_kill"),
      oom_kills: s - u,
      cgroup_v2: o.v2
    })
  } catch (o) {
    t(`tool cgroup: oom_kill check skipped (${o})`)
  }
}

function FYs(e, n = K) {
  let r = B(e),
    o = ms(T).layout;
  if (r === void 0 || o === void 0) return;
  let s = Qe(o);
  return () => Je(s, n)
}

function HYs(e, n) {
  let r = B(e);
  if (r === void 0) return n;
  return `sh -c '{ echo $PPID > "$1"/cgroup.procs; } 2>/dev/null' sh ${ho([r])}; ${n}`
}

function PXn(e, n, r = xXn) {
  try {
    let o = ms(T);
    if (o.dir === void 0) {
      if (o.pendingPids.get(e)?.starttime !== n) return !1;
      return o.pendingPids.delete(e), t(`tool cgroup: unparked pid ${e}; it stays uncapped`), !0
    }
    let s = o.layout;
    if (!o.dir || s === void 0 || s.reuse) return !1;
    if (r.readStarttime(e) !== n) return !1;
    let u = E.join(s.selfDir, "cgroup.procs");
    r.writeFileSync(u, String(e));
    let d = 1 + jn(e, s.dir, u, r, "released");
    return t(`tool cgroup: released pid ${e} (${d} process${d===1?"":"es"}) to ${s.selfDir}`), i("tengu_tool_cgroup", {
      status: b("released"),
      released_count: d
    }), !0
  } catch (o) {
    return t(`tool cgroup: release of pid ${e} failed (${k(o)??o})`), !1
  }
}

function jn(e, n, r, o, s) {
  let u = 0;
  for (let {
      pid: d,
      starttime: l
    }
    of qo(e, n, o)) {
    if (o.readStarttime(d) !== l) {
      t(`tool cgroup: descendant ${d} of pid ${e} exited or was recycled; skipped`);
      continue
    }
    try {
      o.writeFileSync(r, String(d)), u++
    } catch (f) {
      t(`tool cgroup: descendant ${d} of pid ${e} not ${s} (${k(f)??f})`)
    }
  }
  return u
}

function qo(e, n, r) {
  let o;
  try {
    o = r.readCgroupPids(n)
  } catch (l) {
    return t(`tool cgroup: members of ${n} unreadable (${k(l)??l}); moving pid ${e} alone`), []
  }
  let s = new Map;
  for (let l of o) {
    if (l === e) continue;
    let f;
    try {
      f = r.readProcIdentity(l)
    } catch {
      f = void 0
    }
    if (f === void 0) continue;
    let p = {
        pid: l,
        starttime: f.starttime
      },
      h = s.get(f.ppid);
    if (h) h.push(p);
    else s.set(f.ppid, [p])
  }
  let u = [],
    d = [e];
  for (let l = 0; l < d.length; l++)
    for (let f of s.get(d[l]) ?? []) u.push(f), d.push(f.pid);
  return u
}

function Mn(e, n, r = {
  mkdirSync: Ye,
  writeFileSync: fe,
  rmdirSync: Rn
}) {
  if (e.reuse) return;
  let o = !0;
  try {
    r.mkdirSync(e.dir)
  } catch (s) {
    if (k(s) !== "EEXIST") throw s;
    o = !1
  }
  try {
    r.writeFileSync(E.join(e.dir, e.v2 ? "memory.max" : "memory.limit_in_bytes"), String(n))
  } catch (s) {
    if (o) try {
      r.rmdirSync?.(e.dir)
    } catch {}
    throw s
  }
}

function Ho(e) {
  let n = He(e);
  if (!n) return;
  return Zo(n.mountRoot, n.path, n.v2 ? E.dirname(n.path) : n.path, n.v2)
}

function Vo(e) {
  let n = He(e);
  if (!n) return;
  let r = n.path.split("/"),
    o = r.indexOf(Ve);
  if (o < 0) return;
  let s = E.join(n.mountRoot, ...r.slice(0, o));
  return n.v2 ? {
    dir: E.join(s, Fo),
    create: !0
  } : {
    dir: s,
    create: !1
  }
}
var Xo = {
  readSelfCgroup: () => F("/proc/self/cgroup", "utf8"),
  mkdirSync: Ye,
  writeFileSync: fe
};

function Yo(e) {
  let n = I();
  if (n !== "linux" && n !== "wsl") return;
  try {
    let r = Vo(e.readSelfCgroup());
    if (r === void 0) return;
    if (r.create) try {
      e.mkdirSync(r.dir)
    } catch (o) {
      if (k(o) !== "EEXIST") throw o
    }
    return r.dir
  } catch (r) {
    t(`tool cgroup: keeper dir unavailable (${k(r)??r})`);
    return
  }
}

function nP(e, n = Xo) {
  if (!e) return;
  let r = Yo(n);
  if (r === void 0) return;
  try {
    n.writeFileSync(E.join(r, "cgroup.procs"), String(e)), t(`tool cgroup: keeper pid ${e} moved to ${r}`)
  } catch (o) {
    t(`tool cgroup: keeper pid ${e} not moved (${k(o)??o})`)
  }
}

function Zo(e, n, r, o) {
  let s = n.split("/").includes(Ve),
    u = E.join(e, n, ".");
  return s ? {
    dir: u,
    v2: o,
    reuse: !0,
    selfDir: u
  } : {
    dir: E.join(e, r, Ve),
    v2: o,
    reuse: !1,
    selfDir: u
  }
}

function Qo(e) {
  return Math.floor(e - Math.max(2 * _n, e * 0.15))
}

function Jo(e, n) {
  if (e !== void 0) return e;
  let r = Qo(n);
  return r >= No ? r : void 0
}

function ei(e) {
  let n = /^(\d+(?:\.\d+)?)\s*([kmgt]?)(?:i?b)?$/i.exec(e?.trim() ?? "");
  if (!n) return;
  let r = Math.floor(Number(n[1]) * 1024 ** " kmgt".indexOf((n[2] || " ").toLowerCase()));
  return r >= 1 ? r : void 0
}

function W({
  useToolMemoryCgroup: e = !0,
  toolCgroupClass: n = "helper"
}) {
  return e ? vd(n) : {}
}

function et() {
  return !0
}
async function by(e, n = [], r = {}) {
  U4();
  let {
    useToolMemoryCgroup: o,
    toolCgroupClass: s,
    ...u
  } = r, d = {
    ...W({
      useToolMemoryCgroup: o,
      toolCgroupClass: s
    }),
    ...u
  };
  if (et()) {
    let l = pF(e);
    if (l === null) throw Error(`Command '${e}' not found or is in an unsafe location (current directory)`);
    return Obt(l, n, d)
  }
  return Obt(e, n, d)
}

function cL(e, n = [], r = {}) {
  U4();
  let {
    useToolMemoryCgroup: o,
    toolCgroupClass: s,
    ...u
  } = r, d = e;
  if (et()) {
    let p = pF(e);
    if (p === null) throw Object.assign(new x(`Command '${e}' not found or is in an unsafe location (current directory)`, "safeSpawn: command not found or is in an unsafe location (current directory)"), {
      code: "ENOENT"
    });
    d = p
  }
  let l = W({
      useToolMemoryCgroup: o,
      toolCgroupClass: s
    }),
    f = Obt(d, n, {
      ...l,
      ...u,
      buffer: !1,
      reject: !1
    });
  if (o !== !1 && l.cgroup === void 0 && Ibt()) hGe(s ?? "helper", f.pid);
  return f.catch(() => {}), f
}

function Bjo(e, n = [], r = {}) {
  U4();
  let {
    useToolMemoryCgroup: o,
    toolCgroupClass: s,
    ...u
  } = r, d = {
    ...W({
      useToolMemoryCgroup: o,
      toolCgroupClass: s
    }),
    ...u
  };
  if (et()) {
    let l = pF(e);
    if (l === null) throw Error(`Command '${e}' not found or is in an unsafe location (current directory)`);
    return U(l, n, d)
  }
  return U(e, n, d)
}
async function cI(e, n = {}) {
  U4();
  let {
    useToolMemoryCgroup: r,
    toolCgroupClass: o,
    ...s
  } = n;
  return Obt(e, {
    ...W({
      useToolMemoryCgroup: r,
      toolCgroupClass: o
    }),
    ...s,
    shell: !0
  })
}

function $Ys(e, n = {}) {
  U4();
  let {
    useToolMemoryCgroup: r,
    toolCgroupClass: o,
    ...s
  } = n;
  return U(e, {
    ...W({
      useToolMemoryCgroup: r,
      toolCgroupClass: o
    }),
    ...s,
    shell: !0
  })
}
export {
  RXn,
  yQ,
  Obt,
  dDe,
  OA,
  U4,
  DYs,
  LYs,
  vd,
  AXn,
  Ibt,
  xXn,
  hGe,
  Ujo,
  NYs,
  FYs,
  HYs,
  PXn,
  nP,
  by,
  cL,
  Bjo,
  cI,
  $Ys
};
