// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { homedir as B } from "os";
import * as h from "path";
import * as G from "fs";
import * as J from "fs";
function FFi() {
  return;
}
function JE() {
  switch ("win32") {
    case "darwin":
      return "macos";
    case "linux":
      return "linux";
    case "win32":
      return "windows";
    default:
      return "unknown";
  }
}
function Ot(e, t) {
  if (!process.env.SRT_DEBUG) return;
  let r = t?.level || "info",
    n = "[SandboxDebug]";
  switch (r) {
    case "error":
      console.error(`${n} ${e}`);
      break;
    case "warn":
      console.warn(`${n} ${e}`);
      break;
    default:
      console.error(`${n} ${e}`);
  }
}
import * as L from "fs";
import * as U from "path";
var re = 40;
function P(e, t) {
  let r = e(t);
  if (r.includes("\uFFFD") && !e(t, "buffer").equals(Buffer.from(r))) throw Object.assign(Error(`EILSEQ: illegal byte sequence, '${t}'`), {
    code: "EILSEQ"
  });
  return r;
}
function KTe(e) {
  return L.realpathSync(e);
}
function uys(path) {
  let real = "",
    r = 0,
    rest = path.split("/");
  for (let c = rest.shift(); c !== void 0; c = rest.shift()) {
    if (c === "" || c === "." || c === "..") {
      try {
        L.lstatSync(`${real}/.`);
      } catch (i) {
        if (i.code !== "EACCES") throw i;
        return {
          real: real,
          rest: [c, ...rest],
          notThere: i
        };
      }
      if (c === "..") real = real.slice(0, real.lastIndexOf("/"));
      continue;
    }
    let f = `${real}/${c}`,
      a;
    try {
      a = L.lstatSync(f).isSymbolicLink();
    } catch (i) {
      let {
        code: code
      } = i;
      if (code !== "ENOENT" && code !== "ENOTDIR" && code !== "EACCES") throw i;
      return {
        real: real,
        rest: [c, ...rest],
        notThere: i
      };
    }
    if (!a) {
      real = f;
      continue;
    }
    if (++r > re) throw Object.assign(Error(`ELOOP: too many symbolic links encountered, realpath '${path}'`), {
      code: "ELOOP",
      syscall: "realpath",
      path: path
    });
    let o = P(L.readlinkSync, f);
    if (o.startsWith("/")) real = "";
    rest.unshift(...o.split("/"));
  }
  return {
    real: real,
    rest: rest
  };
}
var O;
(function (e) {
  e.Text = "text", e.Separator = "separator", e.AnyChar = "anyChar", e.Star = "star", e.Globstar = "globstar", e.GlobstarSlash = "globstarSlash", e.Set = "set";
})(O || (O = {}));
function se(e) {
  if (e === "") return;
  let t = [];
  for (let r = 0; r < e.length; r++) {
    let n = e[r + 1] === "-" && r + 2 < e.length,
      c = e.charCodeAt(r);
    if (n) r += 2;
    let f = e.charCodeAt(r);
    if (f < c) return;
    t.push([c, f]);
  }
  return t;
}
var ee = 47;
function W(e) {
  let t = [],
    r = 0,
    n = i => {
      if (r < i) {
        let text = e.slice(r, i);
        t.push({
          kind: O.Text,
          text: text
        });
      }
    },
    c = kind => {
      let {
          Star: Star,
          Globstar: C,
          GlobstarSlash: GlobstarSlash
        } = O,
        S = I => t[t.length - I]?.kind;
      if (S(1) === C || S(1) === kind) return;
      if (!(kind === C || S(2) === kind && (S(1) === Star || S(1) === GlobstarSlash))) {
        t.push({
          kind: kind
        });
        return;
      }
      while (S(1) === Star || S(1) === GlobstarSlash) t.pop();
      t.push({
        kind: C
      });
    },
    f = 0,
    a = [],
    o = 0;
  while (o < e.length) switch (e[o]) {
    case "/":
      n(o), t.push({
        kind: O.Separator
      }), r = ++o;
      break;
    case "?":
      n(o), t.push({
        kind: O.AnyChar
      }), r = ++o;
      break;
    case "*":
      {
        n(o);
        let i = o;
        while (e[o] === "*") o++;
        let s = o - i >= 2 && e[o] === "/",
          C = o - i - (s ? 2 : 0);
        if (C >= 2) c(O.Globstar);
        if (C === 1) c(O.Star);
        if (s) c(O.GlobstarSlash);
        r = s ? ++o : o;
        break;
      }
    case "[":
      {
        if (o < f) {
          o++;
          break;
        }
        let i = e.indexOf("]", o + 1);
        if (i === -1) {
          a.push(e.slice(o)), f = e.length, o++;
          break;
        }
        let members = e.slice(o + 1, i),
          C = se(members);
        if (C === void 0) {
          a.push(`[${members}]`), f = i + 1, o++;
          break;
        }
        n(o), t.push({
          kind: O.Set,
          members: members,
          matchesSeparator: C.some(([w, S]) => w <= ee && ee <= S)
        }), r = o = i + 1;
        break;
      }
    default:
      o++;
  }
  if (n(o), a.length > 0) Ot(`[Sandbox] The brackets in ${a.join(", ")} spell no set of characters, so they are read as text: ${e}`, {
    level: "warn"
  });
  return t;
}
function GQt(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function X(e) {
  switch (e.kind) {
    case O.Text:
      return GQt(e.text);
    case O.Separator:
      return "/";
    case O.AnyChar:
      return "[^/]";
    case O.Star:
      return "[^/]*";
    case O.Globstar:
      return ".*";
    case O.GlobstarSlash:
      return "(.*/)?";
    case O.Set:
      return `[${e.members.replace(/[.^$+{}()|\\]/g, "\\$&")}]`;
  }
}
function m0t(e) {
  return `^${W(e).map(X).join("")}$`;
}
function KDn(e) {
  return m0t(e).slice(0, -1) + "(/.*)?$";
}
var Cwr = [".gitconfig", ".gitmodules", ".bashrc", ".bash_profile", ".zshrc", ".zprofile", ".profile", ".ripgreprc", ".mcp.json"],
  oe = [".git", ".vscode", ".idea"];
function Rwr() {
  return [...oe.filter(item => item !== ".git"), ".claude/commands", ".claude/agents"];
}
function VQt(e) {
  return e.toLowerCase();
}
function hw(e, t) {
  return e === t || e.startsWith(t === "/" ? "/" : t + "/");
}
function xpt(e, t) {
  return e !== t && hw(e, t);
}
function* qDn(e) {
  for (let t = e.lastIndexOf("/"); t > 0; t = e.lastIndexOf("/", t - 1)) yield e.slice(0, t);
  if (e !== "/") yield "/";
}
function KQt(e) {
  try {
    let t = KTe(e);
    if (t !== e) return [e, t];
  } catch {}
  return [e];
}
function sfo(e, t) {
  if (e === "/") return e;
  let r = t(h.dirname(e));
  return `${r === "/" ? "" : r}/${h.basename(e)}`;
}
function YDn() {
  try {
    return process.cwd();
  } catch {
    return;
  }
}
function yJe(e) {
  let t = e?.code;
  return t === "ENOENT" || t === "ENOTDIR" || t === "ELOOP" || t === "ENAMETOOLONG";
}
function ac(e) {
  return e.includes("*") || e.includes("?") || e.includes("[") || e.includes("]");
}
function h_e(e) {
  return e.includes("*") || e.includes("?");
}
function h0t(e) {
  return JE() === "windows" ? h_e(e) : ac(e);
}
function qQt(e) {
  let t = e;
  if (t === null || typeof t !== "object" || typeof t.path !== "string" || t.path === "" || t.literal !== !0) throw TypeError(`A filesystem path entry must be a path, or { path, literal: true }; got ${JSON.stringify(e) ?? String(e)}`);
  return t.path;
}
function XP(e) {
  if (/^\\\\\?\\unc\\/i.test(e)) return "\\\\" + e.slice(8);
  if (e.startsWith("\\\\?\\")) return e.slice(4);
  return e;
}
function YQt(e) {
  let t = h.win32.toNamespacedPath(e);
  return /^[\\/]{2}[?.][\\/]unc[\\/]/i.test(t);
}
function p_(e) {
  return e.replace(/\/\*\*$/, "") || "/";
}
function XDn(e, t) {
  let r = h.normalize(e),
    n = h.normalize(t);
  if (n === r) return !1;
  if (r.startsWith("/tmp/") && n === "/private" + r) return !1;
  if (r.startsWith("/var/") && n === "/private" + r) return !1;
  if (n === "/") return !0;
  if (n.split("/").filter(Boolean).length <= 1) return !0;
  if (r.startsWith(n + "/")) return !0;
  let f = r;
  if (r.startsWith("/tmp/")) f = "/private" + r;else if (r.startsWith("/var/")) f = "/private" + r;
  if (f !== r && f.startsWith(n + "/")) return !0;
  let a = n.startsWith(r + "/"),
    o = f !== r && n.startsWith(f + "/");
  if (!(f !== r && n === f) && !a && !o) return !0;
  return !1;
}
function XQt(e) {
  if (e === "~") return B();
  if (e.startsWith("~/") || e.startsWith("~\\")) return B() + e.slice(1);
  return e;
}
function Ppt(e) {
  let t = B(),
    r = /^[A-Za-z]:/.test(t) ? t.slice(0, 2) : "",
    n = r ? t.slice(2) : t;
  return e.replace(/%USERPROFILE%/gi, t).replace(/%HOMEDRIVE%/gi, r).replace(/%HOMEPATH%/gi, n);
}
function fys(e) {
  return e.replace(/\/{2,}/g, "/").replace(/\/\.(?=\/)/g, "");
}
function z(e) {
  if (JE() !== "windows" && /(?:^|\/)\.\.(?:\/|$)/.test(e)) Ot(`[Sandbox] "${e}" could not be resolved and still contains a ".." component, so a rule spelled this way may not match.`, {
    level: "warn"
  });
  return e;
}
function gw(e, t) {
  let r = c => !t?.literal && h0t(c);
  if (JE() === "windows") {
    if (e = XP(Ppt(e)), /^[a-z]:/.test(e)) e = e[0].toUpperCase() + e.slice(1);
    if (YQt(e) && !r(e)) return h.win32.normalize(e);
  }
  if (JE() !== "windows" && e.endsWith("/") && !r(e)) e = e.replace(/\/+$/, "") || "/";
  let n = XQt(e);
  if (n === e && !h.isAbsolute(e)) n = h.resolve(process.cwd(), e);
  if (JE() !== "windows") n = fys(n);
  if (r(n)) {
    let c = JE() === "windows" ? /[*?]/ : /[*?[\]]/,
      f = n.split(c)[0];
    if (f && f !== "/") {
      let a = f.endsWith("/") ? f.slice(0, -1) : h.dirname(f);
      try {
        let o = KTe(a);
        if (!XDn(a, o)) {
          let i = n.slice(a.length);
          return z(o + i);
        }
      } catch {}
    }
    return z(n);
  }
  if (JE() !== "windows" && n !== "") n = n.replace(/\/\.$/, "").replace(/\/+$/, "") || "/";
  try {
    let c = KTe(n);
    if (!XDn(n, c)) n = c;
  } catch {}
  return z(n);
}
var ie = ["/dev/stdout", "/dev/stderr", "/dev/null", "/dev/tty", "/dev/dtracehelper", "/dev/autofs_nowait", "/tmp/claude", "/private/tmp/claude"],
  te = [".npm/_logs", ".claude/debug"];
function DI(e) {
  let t = B(),
    r = !e || e.denyRead.length === 0 ? te : ce(t, e.denyRead, e.allowRead);
  return [...ie, ...r.map(item => h.join(t, item))];
}
function ce(e, t, r = []) {
  let n = [...new Set([e, gw(e, {
      literal: !0
    })])],
    c = t.map(item => ae(item)),
    f = r.flatMap(item => {
      if (typeof item !== "string") return [qQt(item)];
      let o = p_(item);
      return h0t(o) ? [] : [o];
    }).map(item => gw(item, {
      literal: !0
    }));
  return te.filter(item => {
    let o = n.map(i => h.join(i, item));
    return !c.some(item => o.some(item) && !f.some(s => item(s) && o.some(item => hw(item, s))));
  });
}
function ae(e) {
  if (typeof e !== "string") {
    let n = gw(qQt(e), {
      literal: !0
    });
    return c => hw(c, n);
  }
  let t = p_(e);
  if (h0t(t)) {
    let n = le(gw(t));
    return n === null ? () => !0 : c => n.test(c);
  }
  let r = gw(t, {
    literal: !0
  });
  return n => hw(n, r);
}
function le(e) {
  let t = K.get(e);
  if (t === void 0) {
    try {
      t = new RegExp(KDn(e)), t.test("");
    } catch {
      t = null;
    }
    if (Z += e.length, Z > fe) K.clear(), Z = e.length;
    K.set(e, t);
  }
  return t;
}
var K = new Map(),
  Z = 0,
  fe = 1048576,
  ue = ["NODE_EXTRA_CA_CERTS", "SSL_CERT_FILE", "CURL_CA_BUNDLE", "REQUESTS_CA_BUNDLE", "PIP_CERT", "GIT_SSL_CAINFO", "AWS_CA_BUNDLE", "CARGO_HTTP_CAINFO", "DENO_CERT", "CLOUDSDK_CORE_CUSTOM_CA_CERTS_FILE", "NIX_SSL_CERT_FILE"];
function Opt(e, t, r, n, c, f) {
  let a = he(f),
    o = a === bJe ? a : encodeURIComponent(a),
    i = n ? `${o}:${n}@` : "",
    s = ["SANDBOX_RUNTIME=1"];
  if (!c) {
    let I = process.env.CLAUDE_CODE_TMPDIR || process.env.CLAUDE_TMPDIR || "/tmp/claude";
    s.push(`TMPDIR=${I}`);
  }
  if (r) for (let I of ue) s.push(`${I}=${r}`);
  if (!e && !t) return s;
  let C = ["localhost", "127.0.0.1", "::1", "169.254.0.0/16", "10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16"].join(",");
  s.push(`NO_PROXY=${C}`), s.push(`no_proxy=${C}`);
  let w = n ? "127.0.0.1" : "localhost",
    S = n && e === t ? "127.0.0.1" : "localhost";
  if (e) {
    if (s.push(`HTTP_PROXY=http://${i}${w}:${e}`), s.push(`HTTPS_PROXY=http://${i}${w}:${e}`), s.push(`http_proxy=http://${i}${w}:${e}`), s.push(`https_proxy=http://${i}${w}:${e}`), n) s.push("GIT_CONFIG_PARAMETERS='http.proxyAuthMethod=basic'");
  }
  let A = e ? `http://${i}${w}:${e}` : `socks5h://${i}${S}:${t}`;
  if (s.push(`ALL_PROXY=${A}`), s.push(`all_proxy=${A}`), s.push(`GRPC_PROXY=${A}`), s.push(`grpc_proxy=${A}`), t) {
    let p = JE();
    if (p === "macos" && n && e === t) {
      let E = Buffer.from(`${a}:${n}`);
      s.push(`SRT_SSH_PROXY_COMMAND=${de(t, E.toString("base64"))}`, `GIT_SSH_COMMAND=ssh -o ControlMaster=no -o ControlPath=none -o ProxyCommand="/bin/sh -c 'eval \\"\\\${SRT_SSH_PROXY_COMMAND:?unset, but GIT_SSH_COMMAND needs it}\\"' sh '%h' %p"`);
    } else if (p === "macos") s.push(`GIT_SSH_COMMAND=ssh -o ControlMaster=no -o ControlPath=none -o ProxyCommand='nc -X 5 -x localhost:${t} %h %p'`);else if (p === "linux" && e) {
      let E = n ? `,proxyauth=${a}:${n}` : "";
      s.push(`GIT_SSH_COMMAND=ssh -o ControlMaster=no -o ControlPath=none -o ProxyCommand='socat - PROXY:${w}:%h:%p,proxyport=${e}${E}'`);
    }
    if (s.push(`FTP_PROXY=socks5h://${i}${S}:${t}`), s.push(`ftp_proxy=socks5h://${i}${S}:${t}`), s.push(`RSYNC_PROXY=${S}:${t}`), s.push(`DOCKER_HTTP_PROXY=http://${i}${e ? w : S}:${e || t}`), s.push(`DOCKER_HTTPS_PROXY=http://${i}${e ? w : S}:${e || t}`), e) {
      if (s.push("CLOUDSDK_PROXY_TYPE=http"), s.push(`CLOUDSDK_PROXY_ADDRESS=${w}`), s.push(`CLOUDSDK_PROXY_PORT=${e}`), n) s.push(`CLOUDSDK_PROXY_USERNAME=${a}`), s.push(`CLOUDSDK_PROXY_PASSWORD=${n}`);
    }
  }
  return s;
}
function de(e, t, r = "/usr/bin/nc") {
  return `LC_ALL=C; no() { printf "sandbox proxy: %s\\n" "$*" >&2; exit 1; }; case $1 in ""|*[!A-Za-z0-9._:-]*) no bad host;; *:*) set -- "[$1]" "$2";; esac; case $2 in ""|*[!0-9]*) no bad port;; esac; exec 3<&0; { printf "CONNECT %s HTTP/1.1\\r\\nHost: %s\\r\\nProxy-Authorization: Basic ${t}\\r\\n\\r\\n" "$1:$2" "$1:$2"; exec /bin/cat <&3; } | ${r} 127.0.0.1 ${e} | { read -r v why; while read -r v; do case $v in ""|?) break;; esac; done; case $why in "200 "*) exec /bin/cat;; esac; why=\${why%?}; no "$1:$2: \${why:-no answer}"; } & exec >&-; wait $!`;
}
var pe = 8;
function ifo(e) {
  if (e.baseEnv?.GIT_CONFIG_COUNT === "0") return {};
  let t = Number.parseInt(e.baseEnv?.GIT_CONFIG_COUNT ?? "", 10),
    r = Number.isFinite(t) && t >= 0 ? t : 0,
    n = r,
    c = {},
    f = (o, i) => {
      c[`GIT_CONFIG_KEY_${n}`] = o, c[`GIT_CONFIG_VALUE_${n}`] = i, n++;
    },
    a = [...new Set(e.safeDirs.filter(item => !!item).map(item => {
      let s = item.replace(/\\/g, "/").replace(/\/+$/, "");
      if (s === "" || /^[A-Za-z]:$/.test(s)) return `${s}/`;
      return s;
    }))];
  if (a.length > pe) f("safe.directory", "*");else for (let o of a) f("safe.directory", o), f("safe.directory", o.endsWith("/") ? `${o}*` : `${o}/*`);
  if (e.schannelCa) f("http.schannelUseSSLCAInfo", "true"), f("http.schannelCheckRevoke", "false");
  if (e.opensslBackend) f("http.sslBackend", "openssl");
  if (n === r) return {};
  return c.GIT_CONFIG_COUNT = String(n), c;
}
function afo(e) {
  let baseEnv = {
    GIT_CONFIG_COUNT: process.env.GIT_CONFIG_COUNT
  };
  for (let r of e.unsetEnvVars ?? []) delete baseEnv[r];
  return Object.assign(baseEnv, e.setEnvVars ?? {}), ifo({
    safeDirs: e.safeDirs,
    baseEnv: baseEnv
  });
}
var pys = 100;
function g0t(e, t) {
  return !t ? e : t;
}
function qTe(e) {
  let t = e.slice(0, pys);
  return Buffer.from(t).toString("base64");
}
function _Je(e) {
  return Buffer.from(e, "base64").toString("utf8");
}
var bJe = "srt",
  ne = 255,
  mys = ne - Buffer.byteLength(`${bJe}.`);
function he(e) {
  if (!e) return bJe;
  let t = `${bJe}.${e}`;
  return Buffer.byteLength(t) <= ne ? t : bJe;
}
function JDn(e) {
  if (!e || !e.startsWith(`${bJe}.`)) return;
  let t = e.slice(bJe.length + 1);
  if (!t || Buffer.byteLength(t) > mys) return;
  return t;
}
function QDn(e) {
  for (;;) {
    let t = e.next();
    if (t.done) return t.value;
  }
}
var me = 10;
async function HFi(e, t) {
  t?.throwIfAborted();
  let r = performance.now();
  for (;;) {
    let n = e.next();
    if (!n.done && performance.now() - r < me) continue;
    if (!n.done) await new Promise(c => setImmediate(c));
    if (t?.throwIfAborted(), n.done) return n.value;
    r = performance.now();
  }
}
function Awr(e, t = {}) {
  return $e(e, t).matches;
}
function Se(e, t) {
  let regExp = new RegExp(m0t(e), t),
    n = p_(e),
    c = n !== e ? new RegExp(m0t(n), t) : void 0,
    f = {
      splits: !1,
      start: [0],
      next: () => [0],
      matches: (p, E, _) => regExp.test(_),
      matchesDirectoryForm: (p, E, _) => c?.test(_) === !0
    },
    a = [],
    o = X({
      kind: O.Star
    }),
    i = p => {
      let E = p.map(X),
        _ = new Map(),
        T = then => a.push({
          then: then
        }) - 1,
        R = (d, y) => {
          let m = `${d}${y ? "*" : ""}`,
            b = _.get(m);
          if (b !== void 0) return b;
          if (!y && p[d]?.kind === O.GlobstarSlash) {
            let u = T(void 0);
            return _.set(m, u), a[u].then = R(d + 1, !1), u;
          }
          if (!y && p[d]?.kind === O.Globstar && d === p.length - 1) {
            let u = T(void 0);
            return _.set(m, u), u;
          }
          let x = {
              edges: []
            },
            D = a.push(x) - 1;
          _.set(m, D);
          let g = (u, to) => {
              x.edges.push({
                regex: new RegExp(`^${u}$`, t),
                to: to
              });
            },
            l = y ? o : "";
          for (let u = d;; u++) {
            let v = p[u];
            if (v === void 0) {
              g(l, void 0);
              break;
            }
            if (v.kind === O.Separator) {
              g(l, R(u + 1, !1));
              break;
            }
            if (v.kind === O.Globstar) g(l + o, T(R(u + 1, !0))), l += o;else if (v.kind === O.GlobstarSlash) g(l + o, T(R(u + 1, !1)));else if (v.kind === O.Set && v.matchesSeparator) g(l, R(u + 1, !1)), l += `(?!/)${E[u]}`;else l += E[u];
          }
          return D;
        };
      return R(0, !1);
    },
    s,
    C;
  try {
    if (s = [i(W(e))], C = a.length, c) s.push(i(W(n)));
  } catch {
    return f;
  }
  let w = (p, E) => {
      for (let _ = E; _ !== void 0 && !p.has(_);) {
        p.add(_);
        let T = a[_];
        _ = "then" in T ? T.then : void 0;
      }
    },
    S = p => [...p].sort((itemA, itemB) => itemA - itemB),
    A = (p, E, _) => p.some(item => {
      if (item >= C !== _) return !1;
      let R = a[item];
      return "then" in R ? R.then === void 0 : R.edges.some(item => item.to === void 0 && item.regex.test(E));
    }),
    I = new Set();
  for (let p of s) w(I, p);
  return {
    splits: !0,
    start: S(I),
    next: (p, E) => {
      let _ = new Set();
      for (let T of p) {
        let R = a[T];
        if ("then" in R) w(_, T);else for (let d of R.edges) if (d.to !== void 0 && d.regex.test(E)) w(_, d.to);
      }
      return S(_);
    },
    matches: (p, E) => A(p, E, !1),
    matchesDirectoryForm: (p, E) => A(p, E, !0)
  };
}
function hys(e) {
  let t = e.split(/[*?[\]]/)[0];
  if (!t) return "";
  return t.endsWith("/") ? t.slice(0, -1) : h.posix.dirname(t);
}
function gys(e) {
  return e === "" || e === "/";
}
function JQt(e) {
  return e.replace(/\\/g, "/");
}
function $e(e, t = {}) {
  return QDn(xwr(e, t));
}
function* xwr(e, t = {}) {
  let r = {
      baseLocation: "",
      matches: [],
      directoryMatches: [],
      symlinks: new Set(),
      uninspectableLinks: new Set(),
      unlisted: [],
      realOf: new Map()
    },
    n = t.anchor === void 0 ? void 0 : JQt(t.anchor),
    c = n === void 0 ? JQt(gw(e)) : JQt(e).slice(n.length);
  if (n !== void 0 && (!/[^/]/.test(n) || !JQt(e).startsWith(n) || !(n.endsWith("/") || /^(\/|$)/.test(c)))) throw TypeError(`Glob pattern ${e} does not lie beneath the anchor ${t.anchor}`);
  let f = hys(c),
    a = f === "/" ? "" : f,
    o = n === void 0 ? f : n + a;
  if (gys(o)) return Ot(`[Sandbox] Glob pattern has no literal directory below the root to start from, skipping: ${e}`, {
    level: "warn"
  }), r;
  let i = t.caseInsensitive ? "is" : "s",
    s = Se(c, i);
  if (t.followSymlinkedDirectories && !s.splits) Ot(`[Sandbox] Glob pattern ${e} cannot be followed one path component at a time, so it is matched against real paths only and not through symlinked directories`, {
    level: "warn"
  });
  let C = new Map(),
    w = t.listings ?? new Map(),
    S = [],
    A = d => d?.code,
    I = (d, y, m, b, x) => {
      try {
        return m(d);
      } catch (error) {
        if (y === d) throw error;
        let g;
        try {
          g = m(y);
        } catch (l) {
          throw b(error) && !b(l) ? l : error;
        }
        if (!b(error) && A(error) !== "ENAMETOOLONG") Ot(`[Sandbox] ${d} could not be read for glob pattern ${e}, so it is covered whole, whatever ${y} leads to: ${error}`, {
          level: "warn"
        }), x();
        return g;
      }
    },
    p = new Map(),
    E = (d, y) => {
      let m = p.get(y);
      if (m !== void 0) return m;
      let b;
      try {
        let unread = !1;
        b = {
          ...I(y, d, g => ({
            isDirectory: G.statSync(g).isDirectory(),
            real: KTe(g)
          }), yJe, () => unread = !0),
          unread: unread
        };
      } catch (error) {
        b = yJe(error) ? "absent" : "uninspectable";
      }
      return p.set(y, b), b;
    },
    _ = (d, y, m) => {
      if (d.isFile() || d.isDirectory() || d.isSymbolicLink() || d.isFIFO() || d.isSocket() || d.isCharacterDevice() || d.isBlockDevice()) return d;
      let {
          name: name
        } = d,
        x = h.join(y, name),
        D = "other";
      try {
        let g = G.lstatSync(x);
        if (g.isDirectory()) D = "directory";else if (g.isSymbolicLink()) D = "link";
      } catch {
        try {
          let g = G.statSync(x).isDirectory();
          if (KTe(x) !== h.join(m, name)) D = "link";else if (g) D = "directory";
        } catch (error) {
          let l = error?.code;
          if (l === "ELOOP") D = "link";else if (l !== "ENOENT") D = "directory", w.set(h.join(m, name), error instanceof Error ? error : Error(String(error)));
        }
      }
      return {
        name: name,
        isDirectory: () => D === "directory",
        isSymbolicLink: () => D === "link"
      };
    },
    dir = /^[A-Za-z]:$/.test(o) ? `${o}/` : o,
    real_2 = dir;
  try {
    real_2 = KTe(dir);
  } catch {}
  r.baseLocation = real_2, S.push({
    dir: dir,
    real: real_2,
    short: dir.length < real_2.length ? dir : real_2,
    positions: (n === void 0 ? o : a).split("/").reduce(s.next, s.start)
  });
  for (let d = S.pop(); d !== void 0; d = S.pop()) {
    let {
        dir: dir_2,
        real: real_3
      } = d,
      b = C.get(real_3) ?? {
        listedFor: new Set()
      };
    C.set(real_3, b);
    let x = d.positions.filter(item => !b.listedFor.has(item));
    if (x.length === 0) continue;
    yield;
    let D = () => {
        if (b.unlisted) return;
        if (b.unlisted = !0, r.unlisted.push(dir_2), real_3 !== dir_2) r.realOf.set(dir_2, real_3);
      },
      g;
    try {
      let l = w.get(real_3);
      if (l instanceof Error) throw l;
      g = l ?? I(real_3, d.short, u => G.readdirSync(u, {
        withFileTypes: !0
      }).map(item => _(item, u, real_3)), u => A(u) === "ENOENT", D), w.set(real_3, g);
    } catch (error) {
      let u = A(error);
      if (Ot(`[Sandbox] Error listing ${dir_2} for glob pattern ${e}: ${error}`, {
        level: u === "ENOENT" ? "info" : "warn"
      }), u !== "ENOENT") {
        if (t.listings !== void 0) w.set(real_3, error instanceof Error ? error : Error(String(error)));
        D();
      }
      continue;
    }
    for (let l of x) b.listedFor.add(l);
    for (let l of g) {
      if (s.splits && !l.isDirectory() && !l.isSymbolicLink() && !s.matches(x, l.name, "")) continue;
      let dir_3 = h.join(dir_2, l.name),
        real_4 = h.join(real_3, l.name),
        Y = JQt(dir_3),
        H = n !== void 0 && Y.startsWith(n) ? Y.slice(n.length) : Y,
        M = s.matches(x, l.name, H);
      if (M) r.matches.push(dir_3);
      if (l.isDirectory()) {
        let positions = s.next(x, l.name),
          q = t.withDirectoryForm === !0 && s.matchesDirectoryForm(x, l.name, H);
        if (q) r.directoryMatches.push(dir_3);
        if ((M || q) && real_4 !== dir_3) r.realOf.set(dir_3, real_4);
        if (positions.length > 0) S.push({
          dir: dir_3,
          real: real_4,
          short: h.join(d.short, l.name),
          positions: positions
        });
        continue;
      }
      if (!l.isSymbolicLink()) {
        if (M && real_4 !== dir_3) r.realOf.set(dir_3, real_4);
        continue;
      }
      if (r.symlinks.add(dir_3), !t.followSymlinkedDirectories) continue;
      let F = t.withDirectoryForm === !0 && s.matchesDirectoryForm(x, l.name, H),
        positions_2 = s.splits ? s.next(x, l.name) : [];
      if (!M && !F && positions_2.length === 0) continue;
      let V = h.join(d.short, l.name),
        N = E(V, real_4);
      if (N === "absent") continue;
      let k = N === "uninspectable" || N.unread;
      if (k) {
        if (r.uninspectableLinks.add(dir_3), F) r.directoryMatches.push(dir_3);
      }
      if (N === "uninspectable") continue;
      if (k && (M || F && N.isDirectory)) r.matches.push(N.real === "/" ? real_3 : N.real);
      if (M && !k) r.realOf.set(dir_3, N.real);
      if (!N.isDirectory) continue;
      if (F && !k) r.directoryMatches.push(dir_3), r.realOf.set(dir_3, N.real);
      if (positions_2.length === 0) continue;
      if (hw(real_3, N.real) || hw(real_2, N.real)) {
        Ot(`[Sandbox] Not following symlink ${dir_3} -> ${N.real} for glob pattern ${e}: it leads back up the tree`);
        continue;
      }
      Ot(`[Sandbox] Following symlink ${dir_3} -> ${N.real} for glob pattern ${e}`), S.push({
        dir: N.real,
        real: N.real,
        short: V.length < N.real.length ? V : N.real,
        positions: positions_2
      });
    }
  }
  return r;
}
export { FFi, JE, Ot, KTe, uys, GQt, m0t, KDn, Cwr, Rwr, VQt, hw, xpt, qDn, KQt, sfo, YDn, yJe, ac, h_e, h0t, qQt, XP, YQt, p_, XDn, XQt, Ppt, fys, gw, DI, Opt, ifo, afo, pys, g0t, qTe, _Je, bJe, mys, JDn, QDn, HFi, Awr, hys, gys, JQt, xwr };