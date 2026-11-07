// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { wr } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { lqn } from "B:/~BUN/root/chunk-h4acfc9y.js";
import { tt } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { Ol } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { VLt } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { nt } from "B:/~BUN/root/chunk-tq5dzbq9.js";
import { hostname as H, networkInterfaces as ae } from "os";
import { posix as p } from "path";
var X = /(^|\/)\.[^/]*$/,
  k = /(^|\/)\.(?!\.\/)(?!claude[^/]*\/|config\/)[^/]+\//i,
  Z = ["shell-snapshots", "session-env", "projects", "file-history", "backups"],
  regExp = new RegExp(String.raw`(^|/)\.claude[^/]*/(?:${Z.join("|")})/`, "i");
function y(e) {
  let t = e.slice(e.lastIndexOf("/") + 1);
  return R.test(t) || t !== "" && !t.includes(".");
}
function b(text, quote) {
  return {
    text: text,
    quote: quote,
    start: 0,
    end: text.length
  };
}
var le = new Set(["python3", "python", "bash", "sh", "node"]);
function Y(e) {
  return le.has(e);
}
var Pfo = /^(?:sh|bash|zsh|dash|ash|ksh\d*|mksh|rbash|fish|csh|tcsh|python(?:\d+(?:\.\d+)?)?|pypy\d*(?:\.\d+)?|node(?:js)?\d*|deno|bun|perl|ruby|irb|erb|php|lua|tclsh[\d.]*|wish[\d.]*|expect|m4|Rscript|R|script|osascript|pwsh|env)$/iu,
  Q = /^[A-Za-z_][A-Za-z0-9_]*\+?=/,
  ue = /^(?:~|\$HOME|\$\{HOME\})\//,
  ce = /^(?:\$HOME|\$\{HOME\})\//,
  de = /^(?:\$HOME|\$\{HOME\}|\$CLAUDE_PROJECT_DIR|\$\{CLAUDE_PROJECT_DIR\}|\$CLAUDE_PLUGIN_ROOT|\$\{CLAUDE_PLUGIN_ROOT\})$/,
  U = /^(?:\$CLAUDE_PROJECT_DIR|\$\{CLAUDE_PROJECT_DIR\})\//,
  q = /^(?:\$CLAUDE_PLUGIN_ROOT|\$\{CLAUDE_PLUGIN_ROOT\})\//,
  pe = /\$\{?CLAUDE_PLUGIN_ROOT\b/,
  fe = "${CLAUDE_PLUGIN_ROOT}",
  T = /[$~*?[\]()\{\}#!|&;<>`\\\p{Cc}\p{Cf}]|[^\S ]/u,
  K = /[\p{Cc}\p{Cf}]/u;
function he(e) {
  let t = [],
    start = 0;
  while (start < e.length) {
    if (e[start] === " ") {
      start += 1;
      continue;
    }
    let r = e[start],
      quote_2 = r === '"' || r === "'" ? r : null;
    if (quote_2) {
      let s = e.indexOf(quote_2, start + 1);
      if (s === -1) return null;
      let text_2 = e.slice(start + 1, s),
        i = e[s + 1];
      if (i !== void 0 && i !== " ") {
        let end = s + 1;
        while (end < e.length && e[end] !== " ") {
          if (e[end] === '"' || e[end] === "'") return null;
          end += 1;
        }
        if (quote_2 !== '"' || !de.test(text_2)) return null;
        t.push({
          text: text_2 + e.slice(s + 1, end),
          quote: quote_2,
          start: start,
          end: end
        }), start = end;
        continue;
      }
      t.push({
        text: text_2,
        quote: quote_2,
        start: start,
        end: s + 1
      }), start = s + 1;
    } else {
      let end_2 = start;
      while (end_2 < e.length && e[end_2] !== " ") {
        if (e[end_2] === '"' || e[end_2] === "'") return null;
        end_2 += 1;
      }
      t.push({
        text: e.slice(start, end_2),
        quote: null,
        start: start,
        end: end_2
      }), start = end_2;
    }
  }
  return t;
}
function ge(e) {
  return e.quote === null ? ue : e.quote === '"' ? ce : null;
}
function h(e) {
  let t = ge(e);
  if (t !== null && t.test(e.text)) return {
    rest: e.text.replace(t, ""),
    hadPrefix: !0,
    base: "home"
  };
  if (e.quote !== "'" && U.test(e.text)) return {
    rest: e.text.replace(U, ""),
    hadPrefix: !0,
    base: "project"
  };
  if (e.quote !== "'" && q.test(e.text)) return {
    rest: e.text.replace(q, ""),
    hadPrefix: !0,
    base: "plugin"
  };
  return {
    rest: e.text,
    hadPrefix: !1,
    base: null
  };
}
var me = /[\s*?[\]]/u;
function _e(e, t) {
  return e.quote !== null || e.text.startsWith("~/") || !me.test(t);
}
var R = /\.(?:py|sh|bash|zsh|js|mjs|cjs|ts|rb|pl)$/iu,
  Ee = new Set(["/usr/bin", "/bin", "/usr/local/bin", "/opt/homebrew/bin"]),
  g = /(^|\/)\.\.(\/|$)/;
function I(e) {
  return g.test(e.replace(/^(?:\.\.?\/)+/, ""));
}
function m(e) {
  if (e.quote === null && Q.test(e.text)) return !1;
  let {
    rest: rest,
    hadPrefix: hadPrefix
  } = h(e);
  if (rest.startsWith("-") || X.test(rest) || k.test(rest) || regExp.test(rest) || rest.endsWith("/") || !y(rest) && !T.test(rest)) return !1;
  return hadPrefix || rest.startsWith("/") || rest.startsWith("./") || rest.startsWith("../") || rest.includes("/") && R.test(rest);
}
function w(e) {
  let {
    rest: rest_2
  } = h(e);
  return m(e) || rest_2.includes("/") || R.test(rest_2);
}
function A(interpreter, t, n, site = {
  form: "shell",
  start: t.start,
  end: t.end
}) {
  let {
      rest: rest_3,
      base: base
    } = h(t),
    o = ee(base, n);
  if (o === null) return {
    kind: "opaque",
    reason: "shell_syntax"
  };
  return {
    kind: "script",
    interpreter: interpreter,
    rawPath: t.text,
    resolvedPath: p.resolve(n.hookCwd, o === "" ? rest_3 : `${o}/${rest_3}`),
    site: site
  };
}
function ee(e, t) {
  switch (e) {
    case "home":
      return t.home;
    case "project":
      return t.projectDir;
    case "plugin":
      return t.pluginRoot ?? null;
    case null:
      return "";
  }
}
function be(e) {
  let [path_2, path] = e;
  if (path_2 === void 0) return {
    interpreter: null,
    path: void 0,
    refusal: null
  };
  if (path_2.quote === null && path_2.text === "uv" && path?.text === "run") return {
    interpreter: null,
    path: void 0,
    refusal: "uv_project"
  };
  let interpreter_2 = path_2.text.toLowerCase();
  if (path_2.quote === null && Y(interpreter_2)) {
    let s = path !== void 0 && m(path) && e.slice(2).some(w);
    return {
      interpreter: interpreter_2,
      path: path,
      refusal: s ? "ambiguous_program" : null
    };
  }
  let l = e.slice(1).some(w);
  if (m(path_2)) {
    let s = path_2.text.slice(path_2.text.lastIndexOf("/") + 1);
    if (path === void 0 && Pfo.test(s)) return {
      interpreter: null,
      path: void 0,
      refusal: null
    };
    return {
      interpreter: null,
      path: path_2,
      refusal: l || path !== void 0 && !R.test(s) ? "ambiguous_program" : null
    };
  }
  return {
    interpreter: null,
    path: void 0,
    refusal: l ? "unsupported_interpreter" : null
  };
}
function RJe(e, t) {
  if ([e.command, ...(e.args ?? [])].some(item => K.test(item))) return {
    kind: "opaque",
    reason: "shell_syntax"
  };
  if (t.pluginRoot === void 0 && [e.command, ...(e.args ?? [])].some(item => pe.test(item))) return {
    kind: "opaque",
    reason: "shell_syntax"
  };
  let {
      pluginRoot: pluginRoot
    } = t,
    r = e.args !== void 0 && pluginRoot !== void 0 ? {
      ...e,
      command: v(e.command, pluginRoot),
      args: e.args.map(item => v(item, pluginRoot))
    } : e;
  if ((r.shell ?? t.defaultShell) !== "bash") return {
    kind: "opaque",
    reason: "unsupported_shell"
  };
  if (t.shellPrefix !== void 0 && t.shellPrefix !== "" && r.args === void 0) return {
    kind: "opaque",
    reason: "shell_prefix"
  };
  if (!t.hookCwd.startsWith("/") || !t.home.startsWith("/") || !t.projectDir.startsWith("/") || t.pluginRoot !== void 0 && (!t.pluginRoot.startsWith("/") || g.test(t.pluginRoot))) return {
    kind: "opaque",
    reason: "unsupported_platform"
  };
  if (r.args !== void 0) {
    let c = r.command.startsWith("/") && !g.test(r.command) ? p.normalize(r.command) : r.command,
      W = c.startsWith("/") ? c.slice(0, c.lastIndexOf("/")) : null,
      S = W === null ? c.toLowerCase() : Ee.has(W.toLowerCase()) ? c.slice(c.lastIndexOf("/") + 1).toLowerCase() : "";
    if (S === "uv") return {
      kind: "opaque",
      reason: r.args[0] === "run" ? "uv_project" : "args_form"
    };
    if (r.args.some(item => item.includes("${")) || /\/\.?$/u.test(r.command)) return {
      kind: "opaque",
      reason: "args_form"
    };
    let P = Y(S) ? S : null;
    if (P === null) {
      let E = r.command.startsWith("/") || r.command.startsWith("./") || r.command.startsWith("../"),
        N = r.command.slice(r.command.lastIndexOf("/") + 1),
        oe = r.args.length === 0 && !Pfo.test(N) || r.args.length > 0 && R.test(N) && !r.args.some(item => w(b(item, "'")));
      return E && oe && m(b(r.command, null)) && !T.test(r.command) && !I(r.command) ? A(null, b(r.command, null), t, {
        form: "exec",
        slot: "command"
      }) : {
        kind: "opaque",
        reason: "args_form"
      };
    }
    let _ = r.args[0];
    if (_ === void 0 || r.args.slice(1).some(item => w(b(item, "'")))) return {
      kind: "opaque",
      reason: "args_form"
    };
    let L = b(_, "'");
    return m(L) && y(_) && !T.test(_) && !I(_) ? A(P, L, t, {
      form: "exec",
      slot: "arg0"
    }) : {
      kind: "opaque",
      reason: "args_form"
    };
  }
  let l = he(r.command);
  if (l === null) return {
    kind: "opaque",
    reason: "shell_syntax"
  };
  let [s] = l;
  if (s !== void 0 && s.quote === null && Q.test(s.text)) return {
    kind: "opaque",
    reason: "shell_syntax"
  };
  let {
    interpreter: interpreter_3,
    path: path_3,
    refusal: a
  } = be(l);
  if (a !== null) return {
    kind: "opaque",
    reason: a
  };
  if (path_3 === void 0 || !m(path_3)) {
    let c = path_3 ?? s;
    return {
      kind: "opaque",
      reason: c !== void 0 && k.test(h(c).rest) ? "private_dotdir" : "no_path"
    };
  }
  let f = r.command.slice(0, path_3.start),
    u = r.command.slice(path_3.end);
  if ([f, h(path_3).rest, u].some(item => T.test(item))) return {
    kind: "opaque",
    reason: "shell_syntax"
  };
  let {
    rest: rest_4,
    hadPrefix: hadPrefix_2,
    base: base_2
  } = h(path_3);
  if (hadPrefix_2 && !_e(path_3, ee(base_2, t) ?? "") || (hadPrefix_2 ? g.test(rest_4) : I(rest_4))) return {
    kind: "opaque",
    reason: "shell_syntax"
  };
  return A(interpreter_3, path_3, t);
}
function v(e, t) {
  return e.split(fe).join(t);
}
var J$ = "/",
  Re = /^[A-Za-z]:[\\/]/,
  xe = /^[\\/]{2}[^\\/]+[\\/]+[^\\/]+/,
  Te = /^(?:[\\/]{2,}[?.][\\/]+|\\\?\?\\)(?=[A-Za-z]:)/,
  j = /^(?:[\\/]{2,}[?.][\\/]+|\\\?\?\\)UNC[\\/]+/i,
  te = /^(?:[\\/]{2}[?.]|[\\/]\?\?)(?:[\\/]|$)/;
function Iq(e, t) {
  return x() === "windows" ? we(e, t) : M0n(e, t);
}
function M0n(e, t) {
  let n = t.length > 1 && t.endsWith("/") ? t.slice(0, -1) : t;
  return e === n || e.startsWith(n === "/" ? "/" : `${n}/`);
}
function we(e, t) {
  let n = z(t).replace(/\\+$/, "");
  if (n === "") return !0;
  let r = z(e);
  return r === n || r.startsWith(`${n}\\`);
}
function z(e) {
  return e.replace(/\//g, "\\").replace(/^[a-z](?=:)/, t => t.toUpperCase());
}
function Ofo(e) {
  return j.test(e) ? `\\\\${e.replace(j, "")}` : e.replace(Te, "");
}
function D0n(e) {
  let t = Ofo(e),
    n = Ce.exec(t);
  return n !== null && ne(n[1], !1) ? `${n[2]}:\\${t.slice(n[0].length)}` : t;
}
var Ce = /^[\\/]{2,}([^\\/]+)[\\/]+([A-Za-z])\$(?:[\\/]+|$)/;
function ne(e, t = !0) {
  let n = e.toLowerCase().replace(/\.$/, ""),
    r = x() === "windows",
    l = r && t ? re : i => i.toLowerCase(),
    s = l(H()),
    o = tt(s, ".");
  return n === "localhost" || /^127(?:\.\d{1,3}){3}$/.test(n) || n === s || r && (n === o || t && (n === o.slice(0, C) || n === l(tt(H(), ".").slice(0, C)))) || n.startsWith(`${o}.`) || Se.test(n) && (E_s()?.has(n) ?? t);
}
var Se = /^\d{1,3}(?:\.\d{1,3}){3}$|\.ipv6-literal\.net$/;
function E_s() {
  let e = $e();
  if (e === null) return null;
  return new Set(Object.values(e).flatMap(item => (item ?? []).flatMap(({
    address: address
  }) => [address.toLowerCase(), `${address.toLowerCase().replaceAll(":", "-").replaceAll("%", "s")}.ipv6-literal.net`])));
}
function $e() {
  try {
    return ae();
  } catch {
    return null;
  }
}
function LI(e) {
  if (x() !== "windows") return e.startsWith("/");
  let t = Ofo(e);
  return !te.test(t) && (Re.test(t) || xe.test(t));
}
function cf(e) {
  switch (x()) {
    case "macos":
      return O(e);
    case "windows":
      return L0n(e);
    default:
      return e;
  }
}
function L0n(e) {
  let t = D0n(e),
    n = /^[\\/]+/.exec(t)?.[0] ?? "",
    r = t.slice(n.length).split(/[\\/]+/),
    l = n === "" && /^[A-Za-z]:$/.test(r[0] ?? ""),
    s = n === "" && /^[A-Za-z]:./.test(r[0] ?? ""),
    o = [];
  r.forEach((item, index) => {
    if (index === 0 && l) o.push(item.toLowerCase());else if (index === 0 && s) o.push(item.toLowerCase());else if (index === 0 && n.length >= 2) o.push(re(item));else if (item === "..") {
      if (o.length > (l || s ? 1 : n.length >= 2 ? 2 : 0)) o.pop();
    } else if (/^[. ]+$/.test(item) && item !== ".") o.push("");else if (item !== "." && item !== "") o.push(Ol(item.toLowerCase().toUpperCase().toLowerCase()));
  });
  let i = o.filter(item => item !== "");
  return (n.length >= 2 ? "\\\\" : n.length === 1 ? "\\" : "") + i.join("\\") + (/[\\/]$/.test(t) && i.length > 0 ? "\\" : "");
}
function re(e) {
  if (/^[?.]$/.test(e)) return e;
  let t = e.toLowerCase().toUpperCase().toLowerCase();
  return e.includes(":") ? t.replace(/[. ]+$/, "") : Ol(t);
}
function O(e) {
  return e.normalize("NFC").toLowerCase().toUpperCase().toLowerCase().normalize("NFC");
}
function AJe(e, t) {
  return Vze(cf(e), cf(t));
}
function Vze(e, t) {
  return Iq(e, t) || x() === "windows" && (Ie(e, t) || e.startsWith("\\\\") && t.startsWith("\\\\")) || VLt(e, t);
}
function Ie(e, t) {
  return [e, t].some(Oe) || T_s(e, t);
}
function T_s(e, t) {
  return V.test(e) !== V.test(t);
}
function NHi(e, t) {
  let n = B.exec(e),
    r = B.exec(t);
  return n !== null && r !== null && n[1] === r[1] && n[2] !== r[2] && (F.test(n[2]) || F.test(r[2]));
}
var B = /^\\\\([^\\]+)\\([^\\]+)/,
  F = /^[a-z]\$$/;
function C_s(e, t) {
  if (!Ae(e, t)) return e;
  let n = /^\\\\([^\\]+)(?=\\|$)/.exec(t)?.[1];
  return n === void 0 ? e : e.replace(/^\\\\[^\\]+/, () => `\\\\${n}`);
}
function Ae(e, t) {
  let n = tt(tt(/^\\\\([^\\]+)(?=\\)/.exec(e)?.[1] ?? "", "@"), "."),
    r = tt(tt(/^\\\\([^\\]+)(?=\\|$)/.exec(t)?.[1] ?? "", "@"), ".");
  return n !== "" && r !== "" && (n === r || M(n) && r.startsWith(n) || M(r) && n.startsWith(r));
}
var C = 15;
function M(e) {
  let t = x() === "windows" ? e.match(/ss/g)?.length ?? 0 : 0;
  return e.length >= C && e.length - t <= C;
}
function Oe(e) {
  return L0t(e) !== void 0;
}
function L0t(e) {
  let t = /^\\\\([^\\]+)\\/.exec(e)?.[1],
    n = t === void 0 ? void 0 : ke.exec(t)?.[1];
  if (t !== void 0 && ne(n ?? t)) return "own_host";
  if (t !== void 0 && We.has(t)) return "wsl_host";
  if (e.split("\\").some(ye)) return "short_name";
  if (te.test(e)) return "device_namespace";
  if (De.test(e)) return "drive_relative";
  if (t === void 0) return;
  if (n !== void 0) return G.test(n) ? "numeric_host" : "webdav_host";
  if (Pe.test(t)) return "odd_host";
  if (G.test(t)) return "numeric_host";
  return;
}
var ke = /^((?=[^@]*[a-z])[a-z0-9](?:[a-z0-9.-]*[a-z0-9])?)(?:@ssl(?:@\d+)?|@\d+)$/i;
function ye(e) {
  return /^[\x20-\x7e]*$/.test(e) ? lqn(e.replaceAll("ss", "s")) : /~\d+(?:\.[^.]*)?$/.test(e);
}
var V = /^\\[^\\]/,
  De = /^[a-z]:(?![\\/]|$)/,
  We = new Set(["wsl.localhost", "wsl$"]),
  Pe = /[:@]|[^\x21-\x7e]|^\.+$/,
  G = /^(?:(?:0x[0-9a-f]*|\d+)(?:\.(?:0x[0-9a-f]*|\d+)){0,3}|.*\.ipv6-literal\.net)$/i;
function Le(e) {
  return p.isAbsolute(e) && !X.test(e) && !k.test(e) && !regExp.test(e) && !K.test(e) && y(e);
}
async function FHi(e, t, n) {
  let realPath;
  try {
    realPath = await n.realpath(e);
  } catch (error) {
    return {
      location: "elsewhere",
      realPath: null,
      missing: wr(error)
    };
  }
  if (!Le(realPath)) return {
    location: "elsewhere",
    realPath: null,
    missing: !1
  };
  if (p.isAbsolute(t.configHomeReal) && Z.some(item => Iq(O(realPath), O(p.join(t.configHomeReal, item))))) return {
    location: "elsewhere",
    realPath: null,
    missing: !1
  };
  let s = [["in_checkout", t.launchDirReal], ["in_config_home", t.configHomeReal]].filter(([, o]) => p.isAbsolute(o) && Iq(realPath, o)).sort(([, o], [, i]) => i.length - o.length)[0];
  return {
    location: s ? s[0] : "elsewhere",
    realPath: realPath
  };
}
var Ne = 262144;
async function cZt(e, t, n = Ne) {
  let r;
  try {
    r = await t.open(e);
  } catch {
    return {
      ok: !1,
      reason: "unreadable"
    };
  }
  try {
    let l = await r.stat();
    if (!l.isFile()) return {
      ok: !1,
      reason: "not_regular"
    };
    if (l.nlink > 1) return {
      ok: !1,
      reason: "multiply_linked"
    };
    let s = Buffer.alloc(n + 1),
      o = 0;
    while (o < s.length) {
      let {
        bytesRead: bytesRead
      } = await r.read(s, o, s.length - o, o);
      if (bytesRead === 0) break;
      o += bytesRead;
    }
    if (o > n) return {
      ok: !1,
      reason: "too_large"
    };
    let bytes = Buffer.from(s.subarray(0, o));
    return {
      ok: !0,
      sha256: nt(bytes),
      bytes: bytes
    };
  } catch {
    return {
      ok: !1,
      reason: "unreadable"
    };
  } finally {
    await r.close().catch(() => {});
  }
}
var He = new Set(["/usr/bin/env", "/bin/env"]),
  Ue = [{
    names: /^(?:bash|dash|ash|sh|rbash|mksh|ksh[0-9]*)$/,
    letters: "aefhiklmnprtuvxBCEHPT",
    long: new Set(["login", "posix", "norc", "noprofile", "restricted"]),
    ends: ["-", "--"]
  }, {
    names: /^zsh$/,
    letters: "aefhiklmnprtuvxBCEHPT",
    long: new Set(["login"]),
    ends: ["-", "--", "-b"]
  }, {
    names: /^node(?:js)?$/,
    letters: "",
    long: new Set(["enable-source-maps", "no-warnings", "no-deprecation", "throw-deprecation", "trace-warnings", "trace-deprecation", "pending-deprecation", "experimental-strip-types"])
  }, {
    names: /^rscript$/,
    letters: "",
    long: new Set(["vanilla", "no-save", "no-restore", "no-site-file", "no-init-file", "no-environ"]),
    inReachNeeds: [["vanilla"], ["no-init-file", "no-environ", "no-site-file"]]
  }, {
    names: /^osascript$/,
    letters: "",
    valued: "l"
  }, {
    names: /^fish$/,
    letters: "N",
    long: new Set(["no-config"])
  }, {
    names: /^(?:tclsh|wish)[0-9.]*$/,
    letters: ""
  }, {
    names: /^(?:python|pypy)[0-9.]*$/,
    letters: "bBdEIOPqRsSuvx",
    ends: ["--"]
  }, {
    names: /^perl[0-9.]*$/,
    letters: "acnpsTtwWX",
    ends: ["--"]
  }, {
    names: /^ruby[0-9.]*$/,
    letters: "acdlnpsvwy",
    ends: ["--"]
  }, {
    names: /^[gnm]?awk$/,
    letters: "",
    nextWord: "fE"
  }, {
    names: /^g?sed$/,
    letters: "nEru",
    nextWord: "f"
  }, {
    names: /^php[0-9.]*$/,
    letters: "nqeH"
  }, {
    names: /^t?csh$/,
    letters: "efnvx",
    ends: ["-b"]
  }, {
    names: /^expect$/,
    letters: "",
    ends: ["--"],
    nextWord: "f"
  }, {
    names: /^(?:g|b|p|gnu)?make$/,
    letters: "",
    nextWord: "f",
    requiresTerminal: !0
  }];
function Qwr(e, t, {
  childStartsInReach = !0
} = {}) {
  let r = Ue.find(item => item.names.test(t.toLowerCase()));
  if (r === void 0) return !childStartsInReach && e.length === 0;
  if (childStartsInReach && r.inReachNeeds !== void 0 && !r.inReachNeeds.some(item => item.every(item => e.includes(`--${item}`)))) return !1;
  let l = u => u.startsWith("--") ? r.long?.has(u.slice(2)) ?? !1 : /^-[A-Za-z]{1,3}$/.test(u) && u.slice(1).split("").every(item => r.letters.includes(item)),
    s = u => (r.ends?.includes(u) ?? !1) || r.nextWord !== void 0 && /^-[A-Za-z]{1,3}$/.test(u) && r.nextWord.includes(u.at(-1)) && u.slice(1, -1).split("").every(item => r.letters.includes(item)),
    o = u => r.valued !== void 0 && new RegExp(`^-[${r.valued}]$`).test(u);
  if (e.length > 0 && o(e.at(-1))) return !1;
  let i = e.filter((item, index) => !(index > 0 && o(e[index - 1]))),
    a = i.at(-1),
    f = a !== void 0 && !l(a) && s(a);
  if (r.requiresTerminal && !(f && a !== "--" && a !== "-")) return !1;
  return i.every((item, index) => l(item) || o(item) || index === i.length - 1 && s(item));
}
function HHi(e) {
  let t = e.subarray(0, 512).toString("utf8");
  if (!t.startsWith("#!")) return null;
  let n = t.indexOf(`
`),
    r = t.slice(2, n === -1 ? void 0 : n).replace(/^[ \t]+|[ \t]+$/g, "").split(/[ \t]+/),
    l = r[0];
  if (l === void 0 || l === "") return null;
  if (r.some(item => /[^\x21-\x7e]/.test(item))) return "unjudgeable";
  if (!l.startsWith("/") || g.test(l)) return {
    kind: "cwd"
  };
  let path_4 = p.normalize(l);
  if (!He.has(cf(path_4))) {
    if (cf(p.basename(path_4)) === "env") return "unjudgeable";
    return Qwr(r.slice(1), p.basename(path_4)) ? {
      kind: "absolute",
      path: path_4
    } : r.slice(1).some(item => !item.startsWith("-")) ? {
      kind: "cwd"
    } : "unjudgeable";
  }
  let o = r[1] === "-S" ? r.slice(2) : r.slice(1),
    program = o[0];
  if (program === void 0 || program.startsWith("-") || program.includes("=")) return "unjudgeable";
  if (!Qwr(o.slice(1), p.basename(program))) return o.slice(1).some(item => !item.startsWith("-")) ? {
    kind: "cwd"
  } : "unjudgeable";
  if (program.startsWith("/")) return g.test(program) || /[\\$"'#\s]/.test(program) ? "unjudgeable" : {
    kind: "absolute",
    path: p.normalize(program)
  };
  if (program.includes("/")) return {
    kind: "cwd"
  };
  return /^[\w.+-]+$/.test(program) ? {
    kind: "env",
    program: program
  } : "unjudgeable";
}
export { Pfo, RJe, J$, Iq, M0n, Ofo, D0n, E_s, LI, cf, L0n, AJe, Vze, T_s, NHi, C_s, L0t, FHi, cZt, Qwr, HHi };