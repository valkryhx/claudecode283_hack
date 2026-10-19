// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  f
} from "B:/~BUN/root/chunk-frrkt2bs.js";
import {
  F,
  L
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  _,
  J,
  BWo,
  G6s,
  Qbt,
  Gmn
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  $t
} from "B:/~BUN/root/chunk-nggrknsv.js";
import {
  ZO,
  vze,
  w0e,
  che,
  xw
} from "B:/~BUN/root/chunk-8ye9n4fk.js";
import {
  my
} from "B:/~BUN/root/chunk-k2ekj8re.js";
import {
  AEe,
  dt,
  Kt,
  xt
} from "B:/~BUN/root/chunk-kad4nq7y.js";
import {
  Ji,
  ao,
  Pr
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  ur
} from "B:/~BUN/root/chunk-fsp20me0.js";
import {
  Ss,
  bQe
} from "B:/~BUN/root/chunk-ejm0pmyj.js";
import {
  nE,
  X_t,
  zn
} from "B:/~BUN/root/chunk-a0k8qg0d.js";
import {
  cn,
  Vte
} from "B:/~BUN/root/chunk-qp0344nb.js";
import {
  eke
} from "B:/~BUN/root/chunk-c44qc88s.js";
import {
  XU
} from "B:/~BUN/root/chunk-r4y1700s.js";
import {
  t4e,
  $oe,
  p3t,
  f3t,
  rRt
} from "B:/~BUN/root/chunk-sn0w05nq.js";
import {
  _ve,
  OU
} from "B:/~BUN/root/chunk-f06s8ws5.js";
import {
  au
} from "B:/~BUN/root/chunk-tkkhtfwq.js";
import {
  oue,
  bto,
  Fas
} from "B:/~BUN/root/chunk-rsyvg95p.js";
import {
  jq
} from "B:/~BUN/root/chunk-0hq7zw7b.js";
import {
  pr
} from "B:/~BUN/root/chunk-j1zjtkgf.js";
import {
  Yi
} from "B:/~BUN/root/chunk-s39maerh.js";
import {
  Qe
} from "B:/~BUN/root/chunk-5k20pvvh.js";
import {
  $a,
  Q2s
} from "B:/~BUN/root/chunk-m0xdacj9.js";
import {
  co,
  si
} from "B:/~BUN/root/chunk-b0487zs4.js";
import {
  N
} from "B:/~BUN/root/chunk-nkxgam12.js";
import {
  o,
  JKs,
  Bu,
  M,
  oe,
  T,
  u,
  De,
  fe,
  C
} from "B:/~BUN/root/chunk-g3snhg6n.js";
import {
  U_,
  st
} from "B:/~BUN/root/chunk-7aw74be3.js";
var b = 1,
  gur = 2147483648,
  kOn = 8388608,
  I = 32,
  ce = 1e5,
  de = 1024,
  D = 4096,
  pe = I + 16,
  w = new Set(["__proto__", "constructor", "prototype"]),
  me = new Set(["language", "outputStyle", "attribution", "includeCoAuthoredBy", "includeGitInstructions", "alwaysThinkingEnabled", "showThinkingSummaries", "permissions"]),
  he = new Set(["commit", "pr", "sessionUrl", "commitTrailers"]),
  ge = new Set(["allow", "deny", "ask"]),
  _e = 32,
  ye = 64,
  H = f(() => Bu().min(0)),
  p = f(() => Bu().min(0).default(0)),
  Se = f(() => u({
    version: Bu()
  })),
  we = f(() => u({
    generation: Bu().min(1).max(gur)
  })),
  Ae = f(() => u({
    withheldSensitive: p(),
    withheldReadDenied: p(),
    rulesUnreadable: M().default(!1),
    includesNotSent: p(),
    symlinksNotSent: p(),
    notDestinations: p(),
    overCap: p(),
    unreadable: p(),
    settingsKeysWithheld: p(),
    credentialTextsWithheld: p(),
    rulesCoveringDeviceTools: p(),
    droppedRules: u({
      rooted: p(),
      device: p(),
      invalid: p(),
      overCap: p(),
      credential: p(),
      credentialRestrictions: p(),
      guarded: p()
    }).default(() => ({
      rooted: 0,
      device: 0,
      invalid: 0,
      overCap: 0,
      credential: 0,
      credentialRestrictions: 0,
      guarded: 0
    }))
  })),
  Ee = f(() => De({
    path: o().min(1).max(de),
    size: H(),
    sha256: o().regex(U_),
    content: JKs()
  })),
  z = f(() => u({
    version: C(b),
    generation: Bu().min(1).max(gur),
    writtenAtMs: H(),
    files: T(Ee()).max(D),
    settings: fe(o(), oe()).nullable(),
    summary: Ae()
  }));

function B(e) {
  let t = e.map(f3t),
    n = new Set(t.flatMap((r) => r.split("/").slice(0, -1).map((s, i, c) => c.slice(0, i + 1).join("/"))));
  return new Set(t).size === t.length && t.every((r) => !n.has(r))
}

function Das(e, t) {
  return {
    path: e,
    content: t,
    sha256: st(t)
  }
}

function W(e) {
  return e.length <= t4e && e.every((t) => t <= $oe) && e.reduce((t, n) => t + n, 0) <= p3t
}

function Re(e) {
  return W(e.map((t) => t.content.length))
}

function Las(e) {
  let {
    kept: t,
    droppedOverCap: n
  } = e.reduce((r, s) => {
    if (r.kept.length < t4e && s.content.length <= $oe && r.keptBytes + s.content.length <= p3t) r.kept.push(s), r.keptBytes += s.content.length;
    else r.droppedOverCap.push(s);
    return r
  }, {
    kept: [],
    droppedOverCap: [],
    keptBytes: 0
  });
  return {
    kept: t,
    droppedOverCap: n
  }
}

function tRt(e) {
  if (!Re(e.files)) throw Error("home pack files exceed the caps");
  if (!B(e.files.map((i) => i.path))) throw Error("home pack lists two paths that are one file, or one as a directory of another");
  if (e.files.some((i) => st(i.content) !== i.sha256)) throw Error("home pack file digest is stale");
  if (!e.files.every((i) => rRt(i.path))) throw Error("home pack names a path that is no destination");
  if (e.settings !== null && !G(e.settings)) throw Error("home pack settings nest too deep or hold too much");
  if (e.settings !== null && !j(e.settings)) throw Error("home pack settings hold a value JSON cannot carry");
  let t = K(e.settings);
  if (t === "over_bounds") throw Error("home pack settings carry more or longer keys than the portable filter writes");
  if (t === "not_portable_key") throw Error("home pack settings carry a key the portable filter never writes");
  let n = {
      version: b,
      generation: e.generation,
      writtenAtMs: e.writtenAtMs,
      files: e.files.toSorted(ke).map((i) => ({
        path: i.path,
        size: i.content.length,
        sha256: i.sha256,
        content: i.content.toString("base64")
      })),
      settings: e.settings === null ? null : O(e.settings),
      summary: e.summary
    },
    r = z().safeParse(n);
  if (!r.success) throw Error("home pack is off its own schema");
  let s = Buffer.from(_(r.data));
  if (s.length > kOn) throw Error("home pack exceeds the row byte cap");
  return s
}

function nue(e) {
  if (e.length > kOn) return {
    ok: !1,
    reason: "oversize"
  };
  let t = e.toString("utf8");
  if (U(t)) return {
    ok: !1,
    reason: "malformed"
  };
  let n = u3t(t),
    r = Se().safeParse(n);
  if (r.success && r.data.version !== b) return {
    ok: !1,
    reason: "unsupported_version"
  };
  if (be(n)) return {
    ok: !1,
    reason: "malformed"
  };
  if (!Oe(n)) return {
    ok: !1,
    reason: "malformed"
  };
  let s = z().safeParse(n);
  if (!s.success) return {
    ok: !1,
    reason: "malformed"
  };
  let i = s.data,
    c = i.files.filter(Pe);
  if (!B(c.map((h) => h.path))) return {
    ok: !1,
    reason: "malformed"
  };
  let a = c.filter((h) => h.size <= $oe);
  if (!W(a.map((h) => h.size))) return {
    ok: !1,
    reason: "over_cap"
  };
  let l = a.map(Ce),
    m = l.filter((h) => h !== null);
  if (m.length !== l.length) return {
    ok: !1,
    reason: "content_mismatch"
  };
  let d = K(i.settings);
  return {
    ok: !0,
    pack: {
      generation: i.generation,
      writtenAtMs: i.writtenAtMs,
      files: m,
      settings: i.settings === null ? null : d === "none" ? O(i.settings) : uto(i.settings),
      summary: i.summary
    },
    refused: {
      destination: i.files.length - c.length,
      overCap: c.length - a.length,
      settings: d
    }
  }
}

function Nas(e) {
  if (e.length > kOn) return null;
  let t = e.toString("utf8");
  if (U(t)) return null;
  let n = we().safeParse(u3t(t));
  return n.success ? n.data.generation : null
}

function K(e) {
  if (e === null) return "none";
  let t = Object.keys(e).filter((r) => !w.has(r));
  if (t.length > _e || t.some((r) => r.length > ye)) return "over_bounds";
  return t.every((r) => me.has(r)) && x(e.attribution, he) && x(e.permissions, ge) && (!N(e.permissions) || Object.entries(e.permissions).every(([r, s]) => w.has(r) || Te(s))) ? "none" : "not_portable_key"
}

function uto(e) {
  let {
    permissions: t
  } = e;
  if (!N(t)) return null;
  let n = ["deny", "ask"].flatMap((r) => {
    let s = t[r],
      i = Array.isArray(s) ? s.filter((c) => typeof c === "string") : [];
    return i.length === 0 ? [] : [
      [r, i]
    ]
  });
  return n.length === 0 ? null : {
    permissions: Object.fromEntries(n)
  }
}

function x(e, t) {
  return e === void 0 || N(e) && Object.keys(e).every((n) => t.has(n) || w.has(n))
}

function Te(e) {
  return Array.isArray(e) && e.every((t) => typeof t === "string")
}

function u3t(e) {
  try {
    return J(e)
  } catch {
    return
  }
}

function U(e) {
  let t = 0,
    n = !1;
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    if (n) {
      if (s === "\\") r++;
      else if (s === '"') n = !1
    } else if (s === '"') n = !0;
    else if (s === "[" || s === "{") {
      if (t++, t > pe) return !0
    } else if (s === "]" || s === "}") t--
  }
  return !1
}

function be(e) {
  let t = N(e) ? e.files : void 0;
  return Array.isArray(t) && t.length > D
}

function Oe(e) {
  return !N(e) || G(e.settings) && j(e.settings)
}

function Pe(e) {
  return rRt(e.path)
}

function Ce(e) {
  if (e.content.length !== Math.ceil(e.size / 3) * 4) return null;
  let t = Buffer.from(e.content, "base64");
  return t.length === e.size && st(t) === e.sha256 ? {
    path: e.path,
    content: t,
    sha256: e.sha256
  } : null
}

function G(e) {
  let t = [{
      value: e,
      depth: 0
    }],
    n = 1;
  for (let r = t.pop(); r !== void 0; r = t.pop()) {
    let {
      value: s,
      depth: i
    } = r;
    if (i > I) return !1;
    if (typeof s !== "object" || s === null) continue;
    let c = Array.isArray(s) ? s : Object.values(s);
    if (n += c.length, n > ce) return !1;
    for (let a of c) t.push({
      value: a,
      depth: i + 1
    })
  }
  return !0
}

function j(e) {
  let t = [e];
  while (t.length > 0) {
    let n = t.pop();
    if (n === null || typeof n === "string" || typeof n === "boolean" || typeof n === "number" && Number.isFinite(n)) continue;
    if (Array.isArray(n)) {
      for (let r = 0; r < n.length; r++) t.push(n[r]);
      continue
    }
    if (N(n)) {
      let r = Object.getPrototypeOf(n);
      if (r === Object.prototype || r === null) {
        for (let s of Object.values(n)) t.push(s);
        continue
      }
    }
    return !1
  }
  return !0
}

function O(e) {
  return Object.fromEntries(Object.keys(e).filter((t) => !w.has(t)).toSorted().map((t) => [t, Z(e[t])]))
}

function Z(e) {
  return Array.isArray(e) ? e.map(Z) : N(e) ? O(e) : e
}

function ke(e, t) {
  return e.path < t.path ? -1 : e.path > t.path ? 1 : 0
}
var ve = new RegExp(`^(?:${[String.raw`\*+`,String.raw`(["']?)(?:\$(?:env:)?[A-Za-z_]\w*|\$\{(?:env:)?[A-Za-z_][\w.]*(?::?\?[^{}]*)?\}|\$\{\{[^{}]*\}\}|\$\([^()]*\)|%[A-Za-z_]\w*%)\1`,String.raw`<[^<>]*>|\{[^{}]*\}|\{\{[^{}]*\}\}|%s|x+`,"password|passwd|pass|secret|changeme|example"].join("|")})?$`, "i"),
  xe = /^(?:\[[^\]]*\]|[^:?#]*)(?::\d*)?[?#]/,
  Le = /^sha256:(?:[0-9a-f]{64}(?![\w.-])|[*$<{])/i;

function Rbe(e) {
  return V(e) || e.includes("\x00") && V(e.replaceAll("\x00", ""))
}

function V(e) {
  let t = e.replace(/%[0-9A-Fa-f]{2}|\\[nrt]/g, " "),
    n = t.replace(/[^\w.~+/=-]+/g, " "),
    r = [n, n.replace(/[.~+/=]+(?= |$)/g, " "), t.replace(/[^\w-]+/g, " ")];
  return AEe(e) || AEe(t) || r.some((s) => Qbt(s).length > 0) || G6s(e).some(({
    start: s,
    end: i,
    separatorEnd: c
  }) => {
    let a = e.slice(s, i),
      l = Gmn.exec(a);
    return l !== null && !ve.test(a.slice(l.index + l[0].length)) && !Le.test(e.slice(c, c + 72)) && !(xe.test(a) && BWo.test(e.slice(Math.max(0, s - 11), s - 3)))
  })
}
var Ne = ["language", "outputStyle", "attribution", "includeCoAuthoredBy", "includeGitInstructions", "alwaysThinkingEnabled", "showThinkingSummaries", "permissions"],
  Ie = ["commit", "pr", "sessionUrl", "commitTrailers"],
  Fe = ["allow", "deny", "ask"],
  Me = bQe,
  He = 256,
  ze = 8192,
  Be = 1024,
  Y = 1000,
  We = 1048576,
  re = new Set([...vze.filePatternTools, Pr, "MultiEdit", "LS"]),
  se = [Qe, Pr, ao, OU, ...Vte, au, jq, my, ...Q2s.map((e) => si($a, e)), "NotebookRead", "LS", ...vze.bashPrefixTools, xt, Yi],
  $e = Vte,
  Ke = [...vze.bashPrefixTools, Yi],
  Ue = [dt, Kt, Ji, ...Vte, "MultiEdit", _ve, ...se];

function Ge(e) {
  if (e === dt) return Ue;
  if (e === cn) return $e;
  if (e === Qe) return se;
  if (vze.bashPrefixTools.includes(e)) return Ke;
  let t = co(e);
  if (t !== null && t.toolName === void 0 && !nE(e)) return [`${si(t.serverName,"")}*`];
  return [e]
}
var je = new Set([...vze.bashPrefixTools, xt]),
  Ze = new Set([pr, "WebBrowser"]),
  Ve = "/",
  ie = /[\p{Cc}\p{Cf}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}]/u,
  Ye = /[\p{Cf}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}]|[^\P{Cc}\t\n\r]|\r(?!\n)/u,
  Xe = /^[\w*-]+$/,
  qe = /\*{3,}/,
  Je = 8;

function EOn(e, {
  settingsToCloud: t = XU,
  preToolUseHookActiveHere: n,
  hasLostAnAllowEntryAtParse: r
}) {
  if (!et(t)) return {
    document: null,
    reason: "flag_off",
    counts: {
      forwardedKeys: 0,
      withheldKeys: 0,
      withheldCredentialTexts: 0,
      rules: k()
    }
  };
  if (!N(e)) return {
    document: null,
    reason: "settings_unreadable",
    counts: {
      forwardedKeys: 0,
      withheldKeys: 0,
      withheldCredentialTexts: 0,
      rules: k()
    }
  };
  let s = St(g(e, "permissions"), n, r),
    i = g(e, "language"),
    c = {
      language: te(typeof i === "string" ? i.trim() : i),
      outputStyle: te(g(e, "outputStyle")),
      attribution: Pt(g(e, "attribution")),
      includeCoAuthoredBy: A(g(e, "includeCoAuthoredBy")),
      includeGitInstructions: A(g(e, "includeGitInstructions")),
      alwaysThinkingEnabled: A(g(e, "alwaysThinkingEnabled")),
      showThinkingSummaries: A(g(e, "showThinkingSummaries")),
      permissions: s.value
    },
    a = le(Ne.reduce((R, ue) => kt(R, c, ue), {})),
    l = a.kept ?? {},
    m = Object.keys(e),
    d = {
      forwardedKeys: Object.keys(l).length,
      withheldKeys: F(m, (R) => !Object.hasOwn(l, R)),
      withheldCredentialTexts: a.withheld,
      rules: s.counts
    };
  if (d.forwardedKeys === 0) return {
    document: null,
    reason: "nothing_to_send",
    counts: d
  };
  let h = {
    ...d,
    forwardedKeys: 0,
    withheldKeys: m.length,
    rules: {
      ...d.rules,
      kept: 0,
      coveringDeviceTools: 0
    }
  };
  if (!che(l).safeParse(l).success) return {
    document: null,
    reason: "schema_rejected",
    counts: h
  };
  if (Buffer.byteLength(pto(l), "utf8") > We) return {
    document: null,
    reason: "settings_too_large",
    counts: h
  };
  return {
    document: l,
    counts: d
  }
}

function et(e) {
  try {
    return e()
  } catch {
    return !1
  }
}

function pto(e) {
  return _(ZO(e), null, 2) + `
`
}

function tt(e, t) {
  if (e.length > Be) return "over_cap";
  if (Rbe(e)) return "credential";
  if (ie.test(e) || qe.test(e) || F([...e], (s) => s === "*") > Je || !w0e(e, t).valid) return "invalid";
  let {
    toolName: n,
    ruleContent: r
  } = zn(e);
  if (!Xe.test(n)) return "invalid";
  if (co(n)?.serverName === Ss) return t === "allow" ? "device" : "keep_covers_device_tools";
  if (r !== void 0 && (re.has(n) || nE(n))) {
    let s = yt(r);
    if (s === "machine" || s === "home" && t === "allow") return "rooted"
  }
  if (r !== void 0 && t === "allow" && je.has(n) && !it(r, n)) return "rooted";
  if (r !== void 0 && t === "allow" && Ze.has(n) && ht(r)) return "rooted";
  if (t !== "allow" && _t(n)) return "keep_covers_device_tools";
  return "keep"
}
var X = "[A-Za-z0-9_.@*+][A-Za-z0-9_.@*+:~-]*",
  nt = new RegExp(`^(?:(?:\\./)?${X}(?:/${X})*/?|-{1,2}(?:[A-Za-z0-9][A-Za-z0-9_.-]*)?)$`),
  rt = new Set(["curl", "wget", "nc", "ncat", "netcat", "telnet", "ssh", "scp", "sftp", "rsync", "ping", "ping6", "traceroute", "dig", "nslookup", "host", "socat", "psql", "mysql", "redis-cli", "mongosh", "ftp", "http", "https", "xh", "nmap", "mtr", "mosh", "grpcurl", "websocat", "aria2c", "w3m", "lynx", "whois", "iwr", "irm", "invoke-webrequest", "invoke-restmethod", "test-netconnection", "tnc", "test-connection", "resolve-dnsname", "pg_dump", "pg_dumpall", "pg_restore", "pg_isready", "createdb", "dropdb", "mysqldump", "mysqladmin", "mariadb", "mariadb-dump", "mongo", "mongodump", "mongorestore", "mongoexport", "mongoimport", "redis-benchmark", "pgcli", "mycli", "mysqlsh", "clickhouse-client", "mongostat", "mongotop", "mongofiles"]),
  q = new Set(["sudo", "doas", "env", "time", "timeout", "gtimeout", "watch", "xargs", "command", "builtin", "exec", "nohup", "nice", "caffeinate", "setsid", "stdbuf", "ionice", "chrt", "strace", "unbuffer", "sshpass", "proxychains", "proxychains4", "torsocks", "tsocks", "taskset", "numactl", "setpriv", "flock", "runuser"]),
  ot = new Set([ur, "gitlab.com", "bitbucket.org", "ssh.dev.azure.com", `ssh.${ur}`, "altssh.gitlab.com", "altssh.bitbucket.org", "codeberg.org"]);

function it(e, t) {
  if (/(?:^|[\s:=])\d{4,}:\*$/.test(e.trim())) return !1;
  let n = e.trim().replace(/(?::\*|\s+\*)$/, "").split(/\s+/).filter((i) => i !== ""),
    r = ut(n),
    s = r === null && S(n, 0) !== null && !n.some((i) => E(i) || /[*/\\]/.test(i));
  return n.length > 0 && n.every((i, c) => s && lt(n, c) || nt.test(i) && !i.endsWith(":") && !i.split(/[/:@]/).some(ct) && !(i.startsWith("-") && i.includes("..")) && !/\*[A-Za-z]*\.\./.test(i) && !/^\*+-[A-Za-z]*\.\.(?:\/|$)/.test(i) && !/^~|:\**~/.test(i) && !/^[A-Za-z]:(?!:)/.test(i) && !/[:@]\//.test(i) && !(t === xt && /^\**[A-Za-z][\w*]*:/.test(i)) && !pt(i, r !== null && c > r && !i.startsWith("-")))
}
var Q = new Set(["--host", "--hostname", "--bind", "--listen", "--addr", "--address", "-H", "-b"]),
  at = new Set(["HOST", "HOSTNAME", "BIND", "BIND_ADDR", "BIND_ADDRESS"]);

function lt(e, t) {
  let n = e[t] ?? "",
    r = /^(--[a-z-]+)=(.+)$/.exec(n);
  if (r !== null) return Q.has(r[1] ?? "") && P(r[2] ?? "");
  let s = /^([A-Z_]+)=(.+)$/.exec(n);
  if (s !== null) return at.has(s[1] ?? "") && P(s[2] ?? "");
  return t > 0 && Q.has(e[t - 1] ?? "") && P(n)
}

function P(e) {
  let t = e.toLowerCase();
  return [t, t.replace(/:\d{1,5}$/, "")].some((n) => n === "0.0.0.0" || n === "127.0.0.1" || n === "localhost" || /^(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+localhost$/.test(n) || n === "::" || n === "[::]" || n === "::1" || n === "[::1]")
}

function ut(e) {
  let t = S(e, 0);
  if (t !== null && E(e[t] ?? "")) return t;
  let n = e.findIndex((r, s) => s > (t ?? 0) && /^-(?:exec|execdir|ok|okdir)$/.test(r));
  if (n >= 0) {
    let r = S(e, n + 1);
    return r !== null && E(e[r] ?? "") ? r : null
  }
  return null
}

function E(e) {
  return rt.has(e.toLowerCase().replace(/\.(?:exe|cmd|bat|ps1)$/, ""))
}

function S(e, t) {
  let n = e[t];
  if (n === void 0) return null;
  if (/^[A-Za-z_][A-Za-z0-9_]*=/.test(n)) return S(e, t + 1);
  let r = n.toLowerCase().replace(/\.exe$/, "");
  if (!q.has(r)) return t;
  let s = t + 1;
  while (s < e.length) {
    let i = e[s] ?? "";
    if (i.startsWith("-")) {
      let c = (/^(?:-[A-Za-z]|--[A-Za-z][A-Za-z-]*)$/.test(i) || (r === "sudo" || r === "doas") && /^-[A-Za-z]+[ugUCDrtTph]$/.test(i)) && !(e[s + 1] ?? "").startsWith("-") && !E(e[s + 1] ?? "") && !q.has((e[s + 1] ?? "").toLowerCase().replace(/\.exe$/, ""));
      s += c ? 2 : 1
    } else if (/^\d[\d.]*[smhd]?$/.test(i)) s += 1;
    else break
  }
  return S(e, s)
}

function ct(e) {
  return /^[.*]+$/.test(e) && !/^(?:\.|\.{3,}|\*{1,2}|\*\.\*)$/.test(e)
}

function pt(e, t = !1) {
  let n = /^-[A-Za-z][A-Za-z0-9_.-]+$/.test(e) ? Array.from({
      length: e.length - 2
    }, (a, l) => l + 2).filter((a) => /^[A-Za-z]+$/.test(e.slice(1, a))).map((a) => e.slice(a)) : [],
    r = n[0],
    s = t || /[:@]/.test(e) || r !== void 0,
    i = e.startsWith("--") ? e.replace(/^--[^=]*=|^--/, "").split(/[/:@]/).filter((a) => a !== "") : e.startsWith("-") ? n : e.split(/[/:@]/).filter((a) => a !== ""),
    c = e.split("@").slice(e.startsWith("@") ? 2 : 1);
  return t && e.includes("*") || e.split("/").some((a) => {
    let l = a.split(":");
    return l.length > 1 && l.some((m) => /^(?:\d{4,}|\*+)$/.test(m))
  }) || e.split(/[/@]/).flatMap(mt).some((a) => /\d/.test(a) && /^[0-9a-f:*]+$/i.test(a) && (a.includes("::") || $t(a, ":") >= 2)) || c.some((a) => {
    let l = a.replace(/[/:].*$/, "").toLowerCase();
    if (ot.has(l)) return !1;
    return /^[a-z0-9*-]+(?:\.[a-z0-9*-]+)*\.[a-z*][a-z0-9*-]*$/.test(l) || oue(l.replace(/\*/g, "")) || /^(?:0+|0x[0-9a-f]*)$/.test(l) || t && l !== ""
  }) || /^0+\//.test(e) || t && /^0+:/.test(e) || i.some((a, l) => ft(a) || (t || r !== void 0 && l === 0) && !e.startsWith("--") && /^(?:0+|0x[0-9a-f]*|[0-9a-fx]*\.[0-9a-fx.]*)$/i.test(a) && /\d/.test(a)) || e.includes("*") && (e.includes(":") || i.some((a) => /^[0-9a-fx.*]+$/i.test(a) && /\d/.test(a) && a.includes("*"))) || i.some((a) => s ? oue(a.replace(/\*/g, "")) : bto(a.replace(/\*/g, "")))
}

function mt(e) {
  let t = [e],
    n = e;
  for (;;) {
    let r = n.replace(/^[a-z][\w-]*:/i, "");
    if (r === n || r === "") return t;
    t.push(r), n = r
  }
}

function ft(e) {
  let t = e.replace(/\.+$/, "");
  return /^(?:(?:\d+|0x[0-9a-f]+)\.){3}(?:\d+|0x[0-9a-f]+)$/i.test(t) || /^(?:127\.|0\d+\.|0x[0-9a-f]*\.)[0-9a-fx.]*$/i.test(t) || /^0x[0-9a-f]+$/i.test(t) || /^\d{8,}$/.test(t)
}

function ht(e) {
  let t = e.replace(/^domain:/i, "").trim().toLowerCase().replace(/%.*$/, ""),
    n = t.replace(/\.+(?=(?::(?:\d+|\*))*$)/, "").replace(/(?::(?:\d+|\*))+$/, "").replace(/\.+$/, "");
  return oue(n) || n === "*" && n !== t || /^[\[\]0-9a-fx.:*]+$/.test(n) && /[\d:]/.test(n) || n.includes("*") && n !== "*" && !/^\*\.[^*]+$/.test(n) || /^\*\./.test(n) && Fas(n.slice(2))
}

function gt(e) {
  return e.startsWith("~\\") || e.startsWith("\\") && e[1] !== "!" && e[1] !== "#" || /^[A-Za-z]:[/\\]/.test(e)
}

function _t(e) {
  return nE(e) && X_t(e, Me)
}

function yt(e) {
  let t = e.replace(/^\s+/, "").replace(/^[!#]/, "").trim();
  if (t.split("/").includes("..") || gt(t) || /^~[^/]/.test(t)) return "machine";
  if (t === "~" || t.startsWith("~/")) return "home";
  return eke(t, Ve).root !== null ? "machine" : "none"
}

function fto(e) {
  let t = N(e) ? g(e, "PreToolUse") : void 0;
  return Array.isArray(t) ? t.length > 0 : t != null
}

function St(e, t, n) {
  if (!N(e)) return {
    value: void 0,
    counts: k()
  };
  let r = Fe.map((a) => {
      let l = Rt(g(e, a), a);
      return a === "allow" && typeof t === "function" ? At(l, t) : l
    }),
    s = t === !0 || n || r.some(({
      behavior: a,
      counts: l,
      carveOutLost: m
    }) => a === "allow" ? m : wt(l) > 0),
    i = r.map((a) => a.behavior === "allow" && s ? Et(a) : a),
    c = i.reduce((a, {
      behavior: l,
      rules: m
    }) => {
      if (m.length > 0) a[l] = m;
      return a
    }, {});
  return {
    value: i.some(({
      rules: a
    }) => a.length > 0) ? c : void 0,
    counts: i.map(({
      counts: a
    }) => a).reduce(bt)
  }
}

function wt(e) {
  return e.droppedRooted + e.droppedDevice + e.droppedInvalid + e.droppedOverCap + e.droppedCredential
}

function At(e, t) {
  let n = (s) => Ge(zn(s).toolName).some(t),
    r = e.rules.filter(n);
  if (r.length === 0) return e;
  return {
    ...e,
    rules: e.rules.filter((s) => !n(s)),
    carveOutLost: e.carveOutLost || r.some(ae),
    counts: {
      ...e.counts,
      kept: e.counts.kept - r.length,
      droppedGuarded: e.counts.droppedGuarded + r.length
    }
  }
}

function Et(e) {
  return {
    behavior: e.behavior,
    rules: [],
    carveOutLost: e.carveOutLost,
    counts: {
      ...e.counts,
      kept: 0,
      coveringDeviceTools: 0,
      droppedGuarded: e.counts.droppedGuarded + e.rules.length
    }
  }
}

function Rt(e, t) {
  let n = Array.isArray(e) ? e : [],
    r = n.slice(0, Y),
    s = r.filter((d) => typeof d === "string"),
    i = L(s),
    c = new Set(i),
    a = F(n.slice(Y), (d) => typeof d !== "string" || !c.has(d)),
    l = i.map((d) => ({
      rule: d,
      verdict: tt(d, t)
    })),
    m = l.filter(({
      verdict: d
    }) => ee(d));
  return {
    behavior: t,
    rules: m.map(({
      rule: d
    }) => d),
    carveOutLost: t === "allow" && (a > 0 || l.some(({
      rule: d,
      verdict: h
    }) => !ee(h) && ae(d))),
    counts: {
      kept: m.length,
      duplicates: s.length - i.length + (n.length - r.length - a),
      droppedRooted: y(l, "rooted"),
      droppedDevice: y(l, "device"),
      droppedInvalid: y(l, "invalid") + (r.length - s.length) + (e !== void 0 && !Array.isArray(e) ? 1 : 0),
      droppedOverCap: y(l, "over_cap") + a,
      droppedCredential: y(l, "credential"),
      droppedCredentialRestrictions: t === "allow" ? 0 : y(l, "credential"),
      droppedGuarded: 0,
      coveringDeviceTools: y(m, "keep_covers_device_tools")
    }
  }
}

function ee(e) {
  return e === "keep" || e === "keep_covers_device_tools"
}

function ae(e) {
  return Tt(e)?.trimStart().startsWith("!") ?? !1
}

function Tt(e) {
  let {
    toolName: t,
    ruleContent: n
  } = zn(e);
  return re.has(t) || nE(t) ? n : void 0
}

function y(e, t) {
  return F(e, ({
    verdict: n
  }) => n === t)
}

function k() {
  return {
    kept: 0,
    duplicates: 0,
    droppedRooted: 0,
    droppedDevice: 0,
    droppedInvalid: 0,
    droppedOverCap: 0,
    droppedCredential: 0,
    droppedCredentialRestrictions: 0,
    droppedGuarded: 0,
    coveringDeviceTools: 0
  }
}

function bt(e, t) {
  return {
    kept: e.kept + t.kept,
    duplicates: e.duplicates + t.duplicates,
    droppedRooted: e.droppedRooted + t.droppedRooted,
    droppedDevice: e.droppedDevice + t.droppedDevice,
    droppedInvalid: e.droppedInvalid + t.droppedInvalid,
    droppedOverCap: e.droppedOverCap + t.droppedOverCap,
    droppedCredential: e.droppedCredential + t.droppedCredential,
    droppedCredentialRestrictions: e.droppedCredentialRestrictions + t.droppedCredentialRestrictions,
    droppedGuarded: e.droppedGuarded + t.droppedGuarded,
    coveringDeviceTools: e.coveringDeviceTools + t.coveringDeviceTools
  }
}
var Ot = {
  commit: ne,
  pr: ne,
  sessionUrl: v,
  commitTrailers: v
};

function Pt(e) {
  if (!N(e)) return;
  let t = Ie.reduce((n, r) => Ct(n, e, r), {});
  return Object.keys(t).length > 0 ? t : void 0
}

function le(e) {
  if (typeof e === "string") return Rbe(e) ? {
    kept: void 0,
    withheld: 1
  } : {
    kept: e,
    withheld: 0
  };
  if (typeof e !== "object" || e === null) return {
    kept: e,
    withheld: 0
  };
  let t = Object.entries(e).map(([r, s]) => [r, Rbe(r) ? {
      kept: void 0,
      withheld: 1
    } : le(s)]),
    n = t.flatMap(([r, s]) => s.kept === void 0 ? [] : [
      [r, s.kept]
    ]);
  return {
    kept: n.length === 0 ? void 0 : Array.isArray(e) ? n.map(([, r]) => r) : Object.fromEntries(n),
    withheld: t.reduce((r, [, s]) => r + s.withheld, 0)
  }
}

function Ct(e, t, n) {
  let r = g(t, n);
  if (Ot[n](r)) e[n] = r;
  return e
}

function kt(e, t, n) {
  let r = t[n];
  if (r !== void 0 && xw(n).safeParse(r).success) e[n] = r;
  return e
}

function te(e) {
  return typeof e === "string" && e.trim() !== "" && e.length <= He && !ie.test(e) ? e : void 0
}

function A(e) {
  return v(e) ? e : void 0
}

function v(e) {
  return typeof e === "boolean"
}

function ne(e) {
  return typeof e === "string" && Buffer.byteLength(e, "utf8") <= ze && !Ye.test(e)
}

function g(e, t) {
  return Object.hasOwn(e, t) ? e[t] : void 0
}
export {
  gur,
  kOn,
  Das,
  Las,
  tRt,
  nue,
  Nas,
  uto,
  u3t,
  Rbe,
  EOn,
  pto,
  fto
};
