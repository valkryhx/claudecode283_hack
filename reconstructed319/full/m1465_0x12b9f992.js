// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  _,
  ee
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Dt
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  fWs,
  Wra,
  r4e,
  IVn
} from "B:/~BUN/root/chunk-jdtvghyw.js";
import {
  lN,
  _He,
  ybt,
  BAe,
  Vie,
  Sk
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  dt,
  Yt
} from "B:/~BUN/root/chunk-9kvvd0hy.js";
import {
  bu
} from "B:/~BUN/root/chunk-5h4fwkjy.js";
import {
  gi,
  Qr,
  _r
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  jr
} from "B:/~BUN/root/chunk-46ahshhq.js";
import {
  zo,
  tHe
} from "B:/~BUN/root/chunk-5az22yft.js";
import {
  dS,
  dqe,
  yr
} from "B:/~BUN/root/chunk-44q965xg.js";
import {
  gr,
  br
} from "B:/~BUN/root/chunk-sy1h8mf0.js";
import {
  IFe
} from "B:/~BUN/root/chunk-1s0yt4vj.js";
import {
  Qt,
  Z3
} from "B:/~BUN/root/chunk-3v92y8yw.js";
import {
  ULe
} from "B:/~BUN/root/chunk-j05gjqgd.js";
import {
  oV
} from "B:/~BUN/root/chunk-psjm1gcn.js";
import {
  uat,
  Qhe,
  hwn,
  gwn,
  s4t
} from "B:/~BUN/root/chunk-wgc548g7.js";
import {
  oAt
} from "B:/~BUN/root/chunk-rj8dknkb.js";
import {
  Roe
} from "B:/~BUN/root/chunk-8x466dw5.js";
import {
  qu
} from "B:/~BUN/root/chunk-8rnfdnh3.js";
import {
  Xke,
  n3o,
  Jdi
} from "B:/~BUN/root/chunk-vxh1s12d.js";
import {
  TF
} from "B:/~BUN/root/chunk-4hx27rd1.js";
import {
  HF
} from "B:/~BUN/root/chunk-b9f6eh39.js";
import {
  Vn
} from "B:/~BUN/root/chunk-tacrdmts.js";
import {
  Fs
} from "B:/~BUN/root/chunk-fkcdzerj.js";
import {
  ze
} from "B:/~BUN/root/chunk-xwzn0yxv.js";
import {
  kt
} from "B:/~BUN/root/chunk-86hj8bna.js";
import {
  Ta,
  cJi
} from "B:/~BUN/root/chunk-e0q1m1z9.js";
import {
  D
} from "B:/~BUN/root/chunk-8mqsat26.js";
import {
  o,
  Iea,
  Xc,
  I,
  oe,
  C,
  u,
  He,
  me,
  T
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
import {
  fm,
  nt
} from "B:/~BUN/root/chunk-tq5dzbq9.js";
import {
  U,
  L
} from "B:/~BUN/root/chunk-5ha2avah.js";
var b = 1,
  X3r = 2147483648,
  rnr = 8388608,
  N = 32,
  de = 1e5,
  pe = 1024,
  M = 4096,
  fe = N + 16,
  R = new Set(["__proto__", "constructor", "prototype"]),
  he = new Set(["language", "outputStyle", "attribution", "includeCoAuthoredBy", "includeGitInstructions", "alwaysThinkingEnabled", "showThinkingSummaries", "permissions"]),
  ge = new Set(["commit", "pr", "sessionUrl", "commitTrailers"]),
  _e = new Set(["allow", "deny", "ask"]),
  ye = 32,
  Se = 64,
  F = p(() => Xc().min(0)),
  m = p(() => Xc().min(0).default(0)),
  Re = p(() => u({
    version: Xc()
  })),
  Ee = p(() => u({
    generation: Xc().min(1).max(X3r)
  })),
  we = p(() => u({
    withheldSensitive: m(),
    withheldReadDenied: m(),
    rulesUnreadable: I().default(!1),
    includesNotSent: m(),
    symlinksNotSent: m(),
    notDestinations: m(),
    overCap: m(),
    unreadable: m(),
    settingsKeysWithheld: m(),
    credentialTextsWithheld: m(),
    rulesCoveringDeviceTools: m(),
    droppedRules: u({
      rooted: m(),
      device: m(),
      invalid: m(),
      overCap: m(),
      credential: m(),
      credentialRestrictions: m(),
      guarded: m()
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
  Ae = p(() => He({
    path: o().min(1).max(pe),
    size: F(),
    sha256: o().regex(fm),
    content: Iea()
  })),
  H = p(() => u({
    version: T(b),
    generation: Xc().min(1).max(X3r),
    writtenAtMs: F(),
    files: C(Ae()).max(M),
    settings: me(o(), oe()).nullable(),
    summary: we(),
    forRunner: T(!0).optional()
  }));

function z(e) {
  let t = e.map(gwn),
    n = new Set(t.flatMap((r) => r.split("/").slice(0, -1).map((s, i, c) => c.slice(0, i + 1).join("/"))));
  return new Set(t).size === t.length && t.every((r) => !n.has(r))
}

function X6o(e, t) {
  return {
    path: e,
    content: t,
    sha256: nt(t)
  }
}

function B(e) {
  return e.length <= uat && e.every((t) => t <= Qhe) && e.reduce((t, n) => t + n, 0) <= hwn
}

function Te(e) {
  return B(e.map((t) => t.content.length))
}

function qdi(e) {
  let {
    kept: t,
    droppedOverCap: n
  } = e.reduce((r, s) => {
    if (r.kept.length < uat && s.content.length <= Qhe && r.keptBytes + s.content.length <= hwn) r.kept.push(s), r.keptBytes += s.content.length;
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

function rRt(e) {
  if (!Te(e.files)) throw Error("home pack files exceed the caps");
  if (!z(e.files.map((i) => i.path))) throw Error("home pack lists two paths that are one file, or one as a directory of another");
  if (e.files.some((i) => nt(i.content) !== i.sha256)) throw Error("home pack file digest is stale");
  if (!e.files.every((i) => s4t(i.path))) throw Error("home pack names a path that is no destination");
  if (e.settings !== null && !G(e.settings)) throw Error("home pack settings nest too deep or hold too much");
  if (e.settings !== null && !j(e.settings)) throw Error("home pack settings hold a value JSON cannot carry");
  let t = W(e.settings);
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
      summary: e.summary,
      ...e.forRunner && {
        forRunner: e.forRunner
      }
    },
    r = H().safeParse(n);
  if (!r.success) throw Error("home pack is off its own schema");
  let s = Buffer.from(_(r.data));
  if (s.length > rnr) throw Error("home pack exceeds the row byte cap");
  return s
}

function Yke(e) {
  if (e.length > rnr) return {
    ok: !1,
    reason: "oversize"
  };
  let t = e.toString("utf8");
  if (K(t)) return {
    ok: !1,
    reason: "malformed"
  };
  let n = mwn(t),
    r = Re().safeParse(n);
  if (r.success && r.data.version !== b) return {
    ok: !1,
    reason: "unsupported_version"
  };
  if (Oe(n)) return {
    ok: !1,
    reason: "malformed"
  };
  if (!Pe(n)) return {
    ok: !1,
    reason: "malformed"
  };
  let s = H().safeParse(n);
  if (!s.success) return {
    ok: !1,
    reason: "malformed"
  };
  let i = s.data,
    c = i.files.filter(Ce);
  if (!z(c.map((h) => h.path))) return {
    ok: !1,
    reason: "malformed"
  };
  let a = c.filter((h) => h.size <= Qhe);
  if (!B(a.map((h) => h.size))) return {
    ok: !1,
    reason: "over_cap"
  };
  let l = a.map(ve),
    f = l.filter((h) => h !== null);
  if (f.length !== l.length) return {
    ok: !1,
    reason: "content_mismatch"
  };
  let d = W(i.settings);
  return {
    ok: !0,
    pack: {
      generation: i.generation,
      writtenAtMs: i.writtenAtMs,
      files: f,
      settings: i.settings === null ? null : d === "none" ? O(i.settings) : J6o(i.settings),
      summary: i.summary,
      ...i.forRunner && {
        forRunner: i.forRunner
      }
    },
    refused: {
      destination: i.files.length - c.length,
      overCap: c.length - a.length,
      settings: d
    }
  }
}

function Ydi(e) {
  if (e.length > rnr) return null;
  let t = e.toString("utf8");
  if (K(t)) return null;
  let n = Ee().safeParse(mwn(t));
  return n.success ? n.data.generation : null
}

function W(e) {
  if (e === null) return "none";
  let t = Object.keys(e).filter((r) => !R.has(r));
  if (t.length > ye || t.some((r) => r.length > Se)) return "over_bounds";
  return t.every((r) => he.has(r)) && x(e.attribution, ge) && x(e.permissions, _e) && (!D(e.permissions) || Object.entries(e.permissions).every(([r, s]) => R.has(r) || be(s))) ? "none" : "not_portable_key"
}

function J6o(e) {
  let {
    permissions: t
  } = e;
  if (!D(t)) return null;
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
  return e === void 0 || D(e) && Object.keys(e).every((n) => t.has(n) || R.has(n))
}

function be(e) {
  return Array.isArray(e) && e.every((t) => typeof t === "string")
}

function mwn(e) {
  try {
    return ee(e)
  } catch {
    return
  }
}

function K(e) {
  let t = 0,
    n = !1;
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    if (n) {
      if (s === "\\") r++;
      else if (s === '"') n = !1
    } else if (s === '"') n = !0;
    else if (s === "[" || s === "{") {
      if (t++, t > fe) return !0
    } else if (s === "]" || s === "}") t--
  }
  return !1
}

function Oe(e) {
  let t = D(e) ? e.files : void 0;
  return Array.isArray(t) && t.length > M
}

function Pe(e) {
  return !D(e) || G(e.settings) && j(e.settings)
}

function Ce(e) {
  return s4t(e.path)
}

function ve(e) {
  if (e.content.length !== Math.ceil(e.size / 3) * 4) return null;
  let t = Buffer.from(e.content, "base64");
  return t.length === e.size && nt(t) === e.sha256 ? {
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
    if (i > N) return !1;
    if (typeof s !== "object" || s === null) continue;
    let c = Array.isArray(s) ? s : Object.values(s);
    if (n += c.length, n > de) return !1;
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
    if (D(n)) {
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
  return Object.fromEntries(Object.keys(e).filter((t) => !R.has(t)).toSorted().map((t) => [t, Z(e[t])]))
}

function Z(e) {
  return Array.isArray(e) ? e.map(Z) : D(e) ? O(e) : e
}

function ke(e, t) {
  return e.path < t.path ? -1 : e.path > t.path ? 1 : 0
}
var Le = new RegExp(`^(?:${[String.raw`\*+`,String.raw`(["']?)(?:\$(?:env:)?[A-Za-z_]\w*|\$\{(?:env:)?[A-Za-z_][\w.]*(?::?\?[^{}]*)?\}|\$\{\{[^{}]*\}\}|\$\([^()]*\)|%[A-Za-z_]\w*%)\1`,String.raw`<[^<>]*>|\{[^{}]*\}|\{\{[^{}]*\}\}|%s|x+`,"password|passwd|pass|secret|changeme|example"].join("|")})?$`, "i"),
  xe = /^(?:\[[^\]]*\]|[^:?#]*)(?::\d*)?[?#]/,
  Ne = /^sha256:(?:[0-9a-f]{64}(?![\w.-])|[*$<{])/i;

function nIe(e) {
  return V(e) || e.includes("\x00") && V(e.replaceAll("\x00", ""))
}

function V(e) {
  let t = e.replace(/%[0-9A-Fa-f]{2}|\\[nrt]/g, " "),
    n = t.replace(/[^\w.~+/=-]+/g, " "),
    r = [n, n.replace(/[.~+/=]+(?= |$)/g, " "), t.replace(/[^\w-]+/g, " ")];
  return IFe(e) || IFe(t) || r.some((s) => r4e(s).length > 0) || Wra(e).some(({
    start: s,
    end: i,
    separatorEnd: c
  }) => {
    let a = e.slice(s, i),
      l = IVn.exec(a);
    return l !== null && !Le.test(a.slice(l.index + l[0].length)) && !Ne.test(e.slice(c, c + 72)) && !(xe.test(a) && fWs.test(e.slice(Math.max(0, s - 11), s - 3)))
  })
}
var Ie = ["language", "outputStyle", "attribution", "includeCoAuthoredBy", "includeGitInstructions", "alwaysThinkingEnabled", "showThinkingSummaries", "permissions"],
  Me = ["commit", "pr", "sessionUrl", "commitTrailers"],
  Fe = ["allow", "deny", "ask"],
  De = tHe,
  Be = 256,
  We = 8192,
  $e = 1024,
  Y = 1000,
  Ke = 1048576,
  se = new Set([...ybt.filePatternTools, _r, "MultiEdit", "LS"]),
  ie = [ze, _r, Qr, HF, ...Z3, qu, TF, bu, ...cJi.map((e) => br(Ta, e)), ...[..._He].flatMap((e) => oAt.map((t) => br(e, t))), "NotebookRead", "LS", ...ybt.bashPrefixTools, kt, Fs],
  Ue = Z3,
  X = [...ybt.bashPrefixTools, Fs],
  Ge = [dt, Yt, gi, ...Z3, "MultiEdit", Roe, ...ie];

function je(e) {
  if (e === dt) return Ge;
  if (e === Qt) return Ue;
  if (e === ze) return ie;
  if (X.includes(e)) return X;
  let t = gr(e);
  if (t !== null && t.toolName === void 0 && !dS(e)) return [`${br(t.serverName,"")}*`];
  return [e]
}
var Ze = new Set([...ybt.bashPrefixTools, kt]),
  Ve = new Set([Vn, "WebBrowser"]),
  Ye = "/",
  ae = /[\p{Cc}\p{Cf}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}]/u,
  Xe = /[\p{Cf}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}]|[^\P{Cc}\t\n\r]|\r(?!\n)/u,
  qe = /^[\w*-]+$/,
  Je = /\*{3,}/,
  Qe = 8;

function onr(e, {
  settingsToCloud: t = oV,
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
      rules: v()
    }
  };
  if (!D(e)) return {
    document: null,
    reason: "settings_unreadable",
    counts: {
      forwardedKeys: 0,
      withheldKeys: 0,
      withheldCredentialTexts: 0,
      rules: v()
    }
  };
  let s = St(g(e, "permissions"), n, r),
    i = g(e, "language"),
    c = {
      language: ne(typeof i === "string" ? i.trim() : i),
      outputStyle: ne(g(e, "outputStyle")),
      attribution: Pt(g(e, "attribution")),
      includeCoAuthoredBy: E(g(e, "includeCoAuthoredBy")),
      includeGitInstructions: E(g(e, "includeGitInstructions")),
      alwaysThinkingEnabled: E(g(e, "alwaysThinkingEnabled")),
      showThinkingSummaries: E(g(e, "showThinkingSummaries")),
      permissions: s.value
    },
    a = ue(Ie.reduce((A, ce) => vt(A, c, ce), {})),
    l = a.kept ?? {},
    f = Object.keys(e),
    d = {
      forwardedKeys: Object.keys(l).length,
      withheldKeys: U(f, (A) => !Object.hasOwn(l, A)),
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
    withheldKeys: f.length,
    rules: {
      ...d.rules,
      kept: 0,
      coveringDeviceTools: 0
    }
  };
  if (!Vie(l).safeParse(l).success) return {
    document: null,
    reason: "schema_rejected",
    counts: h
  };
  if (Buffer.byteLength(Q6o(l), "utf8") > Ke) return {
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

function Q6o(e) {
  return _(lN(e), null, 2) + `
`
}

function tt(e, t) {
  if (e.length > $e) return "over_cap";
  if (nIe(e)) return "credential";
  if (ae.test(e) || Je.test(e) || U([...e], (s) => s === "*") > Qe || !BAe(e, t).valid) return "invalid";
  let {
    toolName: n,
    ruleContent: r
  } = yr(e);
  if (!qe.test(n)) return "invalid";
  if (gr(n)?.serverName === zo) return t === "allow" ? "device" : "keep_covers_device_tools";
  if (r !== void 0 && (se.has(n) || dS(n))) {
    let s = yt(r);
    if (s === "machine" || s === "home" && t === "allow") return "rooted"
  }
  if (r !== void 0 && t === "allow" && Ze.has(n) && !it(r, n)) return "rooted";
  if (r !== void 0 && t === "allow" && Ve.has(n) && ht(r)) return "rooted";
  if (t !== "allow" && _t(n)) return "keep_covers_device_tools";
  return "keep"
}
var q = "[A-Za-z0-9_.@*+][A-Za-z0-9_.@*+:~-]*",
  rt = new RegExp(`^(?:(?:\\./)?${q}(?:/${q})*/?|-{1,2}(?:[A-Za-z0-9][A-Za-z0-9_.-]*)?)$`),
  ot = new Set(["curl", "wget", "nc", "ncat", "netcat", "telnet", "ssh", "scp", "sftp", "rsync", "ping", "ping6", "traceroute", "dig", "nslookup", "host", "socat", "psql", "mysql", "redis-cli", "mongosh", "ftp", "http", "https", "xh", "nmap", "mtr", "mosh", "grpcurl", "websocat", "aria2c", "w3m", "lynx", "whois", "iwr", "irm", "invoke-webrequest", "invoke-restmethod", "test-netconnection", "tnc", "test-connection", "resolve-dnsname", "pg_dump", "pg_dumpall", "pg_restore", "pg_isready", "createdb", "dropdb", "mysqldump", "mysqladmin", "mariadb", "mariadb-dump", "mongo", "mongodump", "mongorestore", "mongoexport", "mongoimport", "redis-benchmark", "pgcli", "mycli", "mysqlsh", "clickhouse-client", "mongostat", "mongotop", "mongofiles"]),
  J = new Set(["sudo", "doas", "env", "time", "timeout", "gtimeout", "watch", "xargs", "command", "builtin", "exec", "nohup", "nice", "caffeinate", "setsid", "stdbuf", "ionice", "chrt", "strace", "unbuffer", "sshpass", "proxychains", "proxychains4", "torsocks", "tsocks", "taskset", "numactl", "setpriv", "flock", "runuser"]),
  st = new Set([jr, "gitlab.com", "bitbucket.org", "ssh.dev.azure.com", `ssh.${jr}`, "altssh.gitlab.com", "altssh.bitbucket.org", "codeberg.org"]);

function it(e, t) {
  if (/(?:^|[\s:=])\d{4,}:\*$/.test(e.trim())) return !1;
  let n = e.trim().replace(/(?::\*|\s+\*)$/, "").split(/\s+/).filter((i) => i !== ""),
    r = ut(n),
    s = r === null && S(n, 0) !== null && !n.some((i) => w(i) || /[*/\\]/.test(i));
  return n.length > 0 && n.every((i, c) => s && lt(n, c) || rt.test(i) && !i.endsWith(":") && !i.split(/[/:@]/).some(ct) && !(i.startsWith("-") && i.includes("..")) && !/\*[A-Za-z]*\.\./.test(i) && !/^\*+-[A-Za-z]*\.\.(?:\/|$)/.test(i) && !/^~|:\**~/.test(i) && !/^[A-Za-z]:(?!:)/.test(i) && !/[:@]\//.test(i) && !(t === kt && /^\**[A-Za-z][\w*]*:/.test(i)) && !pt(i, r !== null && c > r && !i.startsWith("-")))
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
  if (t !== null && w(e[t] ?? "")) return t;
  let n = e.findIndex((r, s) => s > (t ?? 0) && /^-(?:exec|execdir|ok|okdir)$/.test(r));
  if (n >= 0) {
    let r = S(e, n + 1);
    return r !== null && w(e[r] ?? "") ? r : null
  }
  return null
}

function w(e) {
  return ot.has(e.toLowerCase().replace(/\.(?:exe|cmd|bat|ps1)$/, ""))
}

function S(e, t) {
  let n = e[t];
  if (n === void 0) return null;
  if (/^[A-Za-z_][A-Za-z0-9_]*=/.test(n)) return S(e, t + 1);
  let r = n.toLowerCase().replace(/\.exe$/, "");
  if (!J.has(r)) return t;
  let s = t + 1;
  while (s < e.length) {
    let i = e[s] ?? "";
    if (i.startsWith("-")) {
      let c = (/^(?:-[A-Za-z]|--[A-Za-z][A-Za-z-]*)$/.test(i) || (r === "sudo" || r === "doas") && /^-[A-Za-z]+[ugUCDrtTph]$/.test(i)) && !(e[s + 1] ?? "").startsWith("-") && !w(e[s + 1] ?? "") && !J.has((e[s + 1] ?? "").toLowerCase().replace(/\.exe$/, ""));
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
    return l.length > 1 && l.some((f) => /^(?:\d{4,}|\*+)$/.test(f))
  }) || e.split(/[/@]/).flatMap(mt).some((a) => /\d/.test(a) && /^[0-9a-f:*]+$/i.test(a) && (a.includes("::") || Dt(a, ":") >= 2)) || c.some((a) => {
    let l = a.replace(/[/:].*$/, "").toLowerCase();
    if (st.has(l)) return !1;
    return /^[a-z0-9*-]+(?:\.[a-z0-9*-]+)*\.[a-z*][a-z0-9*-]*$/.test(l) || Xke(l.replace(/\*/g, "")) || /^(?:0+|0x[0-9a-f]*)$/.test(l) || t && l !== ""
  }) || /^0+\//.test(e) || t && /^0+:/.test(e) || i.some((a, l) => ft(a) || (t || r !== void 0 && l === 0) && !e.startsWith("--") && /^(?:0+|0x[0-9a-f]*|[0-9a-fx]*\.[0-9a-fx.]*)$/i.test(a) && /\d/.test(a)) || e.includes("*") && (e.includes(":") || i.some((a) => /^[0-9a-fx.*]+$/i.test(a) && /\d/.test(a) && a.includes("*"))) || i.some((a) => s ? Xke(a.replace(/\*/g, "")) : n3o(a.replace(/\*/g, "")))
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
  return Xke(n) || n === "*" && n !== t || /^[\[\]0-9a-fx.:*]+$/.test(n) && /[\d:]/.test(n) || n.includes("*") && n !== "*" && !/^\*\.[^*]+$/.test(n) || /^\*\./.test(n) && Jdi(n.slice(2))
}

function gt(e) {
  return e.startsWith("~\\") || e.startsWith("\\") && e[1] !== "!" && e[1] !== "#" || /^[A-Za-z]:[/\\]/.test(e)
}

function _t(e) {
  return dS(e) && dqe(e, De)
}

function yt(e) {
  let t = e.replace(/^\s+/, "").replace(/^[!#]/, "").trim();
  if (t.split("/").includes("..") || gt(t) || /^~[^/]/.test(t)) return "machine";
  if (t === "~" || t.startsWith("~/")) return "home";
  return ULe(t, Ye).root !== null ? "machine" : "none"
}

function Z6o(e) {
  let t = D(e) ? g(e, "PreToolUse") : void 0;
  return Array.isArray(t) ? t.length > 0 : t != null
}

function St(e, t, n) {
  if (!D(e)) return {
    value: void 0,
    counts: v()
  };
  let r = Fe.map((a) => {
      let l = At(g(e, a), a);
      return a === "allow" && typeof t === "function" ? Et(l, t) : l
    }),
    s = t === !0 || n || r.some(({
      behavior: a,
      counts: l,
      carveOutLost: f
    }) => a === "allow" ? f : Rt(l) > 0),
    i = r.map((a) => a.behavior === "allow" && s ? wt(a) : a),
    c = i.reduce((a, {
      behavior: l,
      rules: f
    }) => {
      if (f.length > 0) a[l] = f;
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

function Rt(e) {
  return e.droppedRooted + e.droppedDevice + e.droppedInvalid + e.droppedOverCap + e.droppedCredential
}

function Et(e, t) {
  let n = (s) => je(yr(s).toolName).some(t),
    r = e.rules.filter(n);
  if (r.length === 0) return e;
  return {
    ...e,
    rules: e.rules.filter((s) => !n(s)),
    carveOutLost: e.carveOutLost || r.some(le),
    counts: {
      ...e.counts,
      kept: e.counts.kept - r.length,
      droppedGuarded: e.counts.droppedGuarded + r.length
    }
  }
}

function wt(e) {
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

function At(e, t) {
  let n = Array.isArray(e) ? e : [],
    r = n.slice(0, Y),
    s = r.filter((d) => typeof d === "string"),
    i = L(s),
    c = new Set(i),
    a = U(n.slice(Y), (d) => typeof d !== "string" || !c.has(d)),
    l = i.map((d) => ({
      rule: d,
      verdict: tt(d, t)
    })),
    f = l.filter(({
      verdict: d
    }) => te(d));
  return {
    behavior: t,
    rules: f.map(({
      rule: d
    }) => d),
    carveOutLost: t === "allow" && (a > 0 || l.some(({
      rule: d,
      verdict: h
    }) => !te(h) && le(d))),
    counts: {
      kept: f.length,
      duplicates: s.length - i.length + (n.length - r.length - a),
      droppedRooted: y(l, "rooted"),
      droppedDevice: y(l, "device"),
      droppedInvalid: y(l, "invalid") + (r.length - s.length) + (e !== void 0 && !Array.isArray(e) ? 1 : 0),
      droppedOverCap: y(l, "over_cap") + a,
      droppedCredential: y(l, "credential"),
      droppedCredentialRestrictions: t === "allow" ? 0 : y(l, "credential"),
      droppedGuarded: 0,
      coveringDeviceTools: y(f, "keep_covers_device_tools")
    }
  }
}

function te(e) {
  return e === "keep" || e === "keep_covers_device_tools"
}

function le(e) {
  return Tt(e)?.trimStart().startsWith("!") ?? !1
}

function Tt(e) {
  let {
    toolName: t,
    ruleContent: n
  } = yr(e);
  return se.has(t) || dS(t) ? n : void 0
}

function y(e, t) {
  return U(e, ({
    verdict: n
  }) => n === t)
}

function v() {
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
  commit: re,
  pr: re,
  sessionUrl: k,
  commitTrailers: k
};

function Pt(e) {
  if (!D(e)) return;
  let t = Me.reduce((n, r) => Ct(n, e, r), {});
  return Object.keys(t).length > 0 ? t : void 0
}

function ue(e) {
  if (typeof e === "string") return nIe(e) ? {
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
  let t = Object.entries(e).map(([r, s]) => [r, nIe(r) ? {
      kept: void 0,
      withheld: 1
    } : ue(s)]),
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

function vt(e, t, n) {
  let r = t[n];
  if (r !== void 0 && Sk(n).safeParse(r).success) e[n] = r;
  return e
}

function ne(e) {
  return typeof e === "string" && e.trim() !== "" && e.length <= Be && !ae.test(e) ? e : void 0
}

function E(e) {
  return k(e) ? e : void 0
}

function k(e) {
  return typeof e === "boolean"
}

function re(e) {
  return typeof e === "string" && Buffer.byteLength(e, "utf8") <= We && !Xe.test(e)
}

function g(e, t) {
  return Object.hasOwn(e, t) ? e[t] : void 0
}
export {
  X3r,
  rnr,
  X6o,
  qdi,
  rRt,
  Yke,
  Ydi,
  J6o,
  mwn,
  nIe,
  onr,
  Q6o,
  Z6o
};
