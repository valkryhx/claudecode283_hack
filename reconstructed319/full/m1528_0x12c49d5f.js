// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  PAt
} from "B:/~BUN/root/chunk-gnvjfqfc.js";
import {
  pe
} from "B:/~BUN/root/chunk-thn0wk2x.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  Qo,
  tt
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  x
} from "B:/~BUN/root/chunk-mwfggkjt.js";
import {
  z1e,
  cde,
  MQ,
  V1e,
  Rlr,
  e3t,
  ude
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  rz,
  VNn,
  qNn,
  UEr,
  BEr,
  jEr,
  Ymt,
  b7e
} from "B:/~BUN/root/chunk-j05gjqgd.js";
import {
  _t
} from "B:/~BUN/root/chunk-3a409jmn.js";
var jBe = /[\t\n\v\f\r \u0085\u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000]+/,
  w = new RegExp(`^${jBe.source}`);
var te = new RegExp(`${`['"\u2018-\u201F]`}+`, "g");

function pQ(e) {
  let t = e.replace(w, "");
  for (;;)
    if (t.startsWith("<#")) {
      let n = t.indexOf("#>", 2);
      if (n < 0) break;
      t = t.slice(n + 2).replace(w, "")
    } else if (t.startsWith("#")) {
    let n = t.search(/[\r\n]/);
    if (n < 0) break;
    t = t.slice(n).replace(w, "")
  } else break;
  return t
}

function QG(e) {
  return e.replace(te, "")
}
var ne = new RegExp(`^${`['"\u2018-\u201F]`}+|${`['"\u2018-\u201F]`}+$`, "g");

function qne(e) {
  return e.replace(ne, "")
}

function R(e) {
  if (e === "'" || e >= "\u2018" && e <= "\u201B") return "single";
  if (e === '"' || e >= "\u201C" && e <= "\u201E") return "double";
  return null
}

function Jhe(e) {
  let t = "",
    n = null;
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    if (s === "`") {
      if (n === "single") t += "``";
      else if (r + 1 < e.length) t += s + e[r + 1], r++;
      else t += s;
      continue
    }
    let a = R(s);
    if (n === null) {
      if (a !== null) {
        n = a;
        continue
      }
      t += s
    } else if (a === n) {
      if (r + 1 < e.length && R(e[r + 1]) === a) {
        t += e[r + 1], r++;
        continue
      }
      n = null
    } else t += s
  }
  return t
}

function uI(e) {
  return F(e, void 0)
}
var re = {
  t: "\t",
  n: `
`,
  r: "\r",
  f: "\f",
  v: "\v"
};

function E(e) {
  return F(e, re)
}
var se = {
  "0": "\x00"
};

function O(e) {
  return F(e, se)
}

function F(e, t) {
  return e.replace(/`(?:(`)|[\r\n]+\s*|u\{([0-9a-fA-F]{1,6})\}|([\s\S]?))/g, (n, r, s, a) => {
    if (r !== void 0) return "`";
    if (s !== void 0) {
      let c = parseInt(s, 16);
      return c <= 1114111 ? String.fromCodePoint(c) : "\uFFFD"
    }
    if (a === void 0) return "";
    if (t && a in t) return t[a];
    return a
  })
}
var Ytr = /[\t\n\v\f\r ]+/,
  $di = new RegExp(`^${Ytr.source}`);
import {
  statSync as ge
} from "fs";
import {
  join as de
} from "path";
var M6o = ["-verbose", "-debug"],
  A = ["-erroraction", "-warningaction", "-informationaction", "-progressaction"],
  _ = ["-ea", "-wa", "-infa", "-proga"],
  b = ["-errorvariable", "-warningvariable", "-informationvariable", "-outvariable", "-pipelinevariable"],
  I = ["-ev", "-wv", "-iv", "-ov", "-pv"],
  D6o = [...A, ...b, "-outbuffer", ..._],
  T = new Set([...M6o, ...D6o]);

function N(e) {
  if (e.length < 2) return !1;
  return _.includes(e) || A.some((t) => t.startsWith(e))
}
var D = new Set(["silentlycontinue", "0", "stop", "1", "continue", "2", "ignore", "4"]);

function k(e) {
  if (e.length < 2) return !1;
  return I.includes(e) || b.some((t) => t.startsWith(e))
}
var W = new Set(["global", "script", "local", "private", "variable"]),
  M = new Set(["psdefaultparametervalues", "confirmpreference", "debugpreference", "erroractionpreference", "errorview", "formatenumerationlimit", "informationpreference", "maximumhistorycount", "ofs", "outputencoding", "progresspreference", "psemailserver", "psmoduleautoloadingpreference", "psnativecommandargumentpassing", "psnativecommanduseerroractionpreference", "pssessionapplicationname", "pssessionconfigurationname", "pssessionoption", "psstyle", "transcript", "verbosepreference", "warningpreference", "whatifpreference", "logcommandhealthevent", "logcommandlifecycleevent", "logenginehealthevent", "logenginelifecycleevent", "logproviderhealthevent", "logproviderlifecycleevent", "maximumaliascount", "maximumdrivecount", "maximumerrorcount", "maximumfunctioncount", "maximumvariablecount"]),
  H = [...A, ...b, "-outbuffer", "-verbose", "-debug"],
  ae = H.filter((e) => e !== "-progressaction");

function oe(e, t) {
  let n = null;
  for (let r of t)
    if (r.startsWith(e)) {
      if (n !== null) return null;
      n = r
    } return n
}

function ie(e, t) {
  if (e.length < 2) return !1;
  for (let n of [H, ae]) {
    let r = oe(e, n);
    if (r !== null && t.includes(r)) return !0
  }
  return !1
}
var le = new Set([...I, "-ea", "-wa", "-p"]),
  ce = !1;

function ue(e, t, n, r) {
  if (!r && le.has(e)) return !1;
  return t.includes(e) || ie(e, n)
}

function B(e, t, n) {
  return ue(e, t, n, ce)
}

function j(e) {
  return B(e, I, b)
}

function U(e) {
  return B(e, _, A)
}
var Udi = new Set(["add", "clear", "close", "copy", "enter", "exit", "find", "format", "get", "hide", "join", "lock", "move", "new", "open", "optimize", "pop", "push", "redo", "remove", "rename", "reset", "resize", "resume", "search", "select", "set", "show", "skip", "split", "step", "switch", "undo", "unlock", "watch", "connect", "disconnect", "read", "receive", "send", "write", "backup", "checkpoint", "compare", "compress", "convert", "convertfrom", "convertto", "dismount", "edit", "expand", "export", "group", "import", "initialize", "limit", "merge", "mount", "out", "publish", "restore", "save", "sync", "unpublish", "update", "debug", "measure", "ping", "repair", "resolve", "test", "trace", "approve", "assert", "build", "complete", "confirm", "deny", "deploy", "disable", "enable", "install", "invoke", "register", "request", "restart", "start", "stop", "submit", "suspend", "uninstall", "unregister", "wait", "block", "grant", "protect", "revoke", "unblock", "unprotect", "use", "sort", "tee", "where", "foreach"]),
  fe = ["-variable", "-sessionvariable", "-responseheadersvariable", "-statuscodevariable"];

function V(e) {
  if (e.length < 3) return !1;
  return fe.some((t) => t.startsWith(e))
}
var me = new Set(["--list-runtimes", "--list-sdks"]);

function NK(e, t) {
  let n = (t?.elementTypes ?? []).slice(1),
    r = t?.args ?? [],
    s = t?.children;
  for (let a = 0; a < n.length; a++) {
    if (n[a] !== "StringConstant" && n[a] !== "Parameter") {
      if (!/[$(@{[]/.test(r[a] ?? "")) continue;
      return !0
    }
    if (n[a] === "Parameter") {
      let c = s?.[a];
      if (c) {
        if (c.some((o) => o.type !== "StringConstant")) return !0
      } else {
        let o = r[a] ?? "",
          l = o.indexOf(":");
        if (l > 0 && /[$(@{[]/.test(o.slice(l + 1))) return !0
      }
    }
  }
  return !1
}
var G = Object.assign(Object.create(null), {
    "get-childitem": {
      safeFlags: ["-Path", "-LiteralPath", "-Filter", "-Include", "-Exclude", "-Recurse", "-Depth", "-Name", "-Force", "-Attributes", "-Directory", "-File", "-Hidden", "-ReadOnly", "-System"]
    },
    "get-content": {
      safeFlags: ["-Path", "-LiteralPath", "-TotalCount", "-Head", "-Tail", "-Raw", "-Encoding", "-Delimiter", "-ReadCount"]
    },
    "get-item": {
      safeFlags: ["-Path", "-LiteralPath", "-Force", "-Stream"]
    },
    "get-itemproperty": {
      safeFlags: ["-Path", "-LiteralPath", "-Name"]
    },
    "test-path": {
      safeFlags: ["-Path", "-LiteralPath", "-PathType", "-Filter", "-Include", "-Exclude", "-IsValid", "-NewerThan", "-OlderThan"]
    },
    "resolve-path": {
      safeFlags: ["-Path", "-LiteralPath", "-Relative"]
    },
    "get-filehash": {
      safeFlags: ["-Path", "-LiteralPath", "-Algorithm", "-InputStream"]
    },
    "get-acl": {
      safeFlags: ["-Path", "-LiteralPath", "-Audit", "-Filter", "-Include", "-Exclude"]
    },
    "set-location": {
      safeFlags: ["-Path", "-LiteralPath", "-PassThru", "-StackName"]
    },
    "push-location": {
      safeFlags: ["-Path", "-LiteralPath", "-PassThru", "-StackName"]
    },
    "pop-location": {
      safeFlags: ["-PassThru", "-StackName"]
    },
    "select-string": {
      safeFlags: ["-Path", "-LiteralPath", "-Pattern", "-InputObject", "-SimpleMatch", "-CaseSensitive", "-Quiet", "-List", "-NotMatch", "-AllMatches", "-Encoding", "-Context", "-Raw", "-NoEmphasis"]
    },
    "convertto-json": {
      safeFlags: ["-InputObject", "-Depth", "-Compress", "-EnumsAsStrings", "-AsArray"]
    },
    "convertfrom-json": {
      safeFlags: ["-InputObject", "-Depth", "-AsHashtable", "-NoEnumerate"]
    },
    "convertto-csv": {
      safeFlags: ["-InputObject", "-Delimiter", "-NoTypeInformation", "-NoHeader", "-UseQuotes"]
    },
    "convertfrom-csv": {
      safeFlags: ["-InputObject", "-Delimiter", "-Header", "-UseCulture"]
    },
    "convertto-xml": {
      safeFlags: ["-InputObject", "-Depth", "-As", "-NoTypeInformation"]
    },
    "convertto-html": {
      safeFlags: ["-InputObject", "-Property", "-Head", "-Title", "-Body", "-Pre", "-Post", "-As", "-Fragment"]
    },
    "format-hex": {
      safeFlags: ["-Path", "-LiteralPath", "-InputObject", "-Encoding", "-Count", "-Offset"]
    },
    "get-member": {
      safeFlags: ["-InputObject", "-MemberType", "-Name", "-Static", "-View", "-Force"]
    },
    "get-unique": {
      safeFlags: ["-InputObject", "-AsString", "-CaseInsensitive", "-OnType"]
    },
    "compare-object": {
      safeFlags: ["-ReferenceObject", "-DifferenceObject", "-Property", "-SyncWindow", "-CaseSensitive", "-Culture", "-ExcludeDifferent", "-IncludeEqual", "-PassThru"]
    },
    "join-string": {
      safeFlags: ["-InputObject", "-Property", "-Separator", "-SingleQuote", "-DoubleQuote", "-FormatString"]
    },
    "get-random": {
      safeFlags: ["-InputObject", "-Minimum", "-Maximum", "-Count", "-SetSeed", "-Shuffle"]
    },
    "convert-path": {
      safeFlags: ["-Path", "-LiteralPath"]
    },
    "join-path": {
      safeFlags: ["-Path", "-ChildPath", "-AdditionalChildPath"]
    },
    "split-path": {
      safeFlags: ["-Path", "-LiteralPath", "-Qualifier", "-NoQualifier", "-Parent", "-Leaf", "-LeafBase", "-Extension", "-IsAbsolute"]
    },
    "get-itempropertyvalue": {
      safeFlags: ["-Path", "-LiteralPath", "-Name"]
    },
    "get-psprovider": {
      safeFlags: ["-PSProvider"]
    },
    "get-computerinfo": {
      allowAllFlags: !0
    },
    "get-host": {
      allowAllFlags: !0
    },
    "get-date": {
      safeFlags: ["-Date", "-Format", "-UFormat", "-DisplayHint", "-AsUTC"]
    },
    "get-location": {
      safeFlags: ["-PSProvider", "-PSDrive", "-Stack", "-StackName"]
    },
    "get-psdrive": {
      safeFlags: ["-Name", "-PSProvider", "-Scope"]
    },
    "get-module": {
      safeFlags: ["-Name", "-ListAvailable", "-All", "-FullyQualifiedName", "-PSEdition"]
    },
    "get-alias": {
      safeFlags: ["-Name", "-Definition", "-Scope", "-Exclude"]
    },
    "get-history": {
      safeFlags: ["-Id", "-Count"]
    },
    "get-culture": {
      allowAllFlags: !0
    },
    "get-uiculture": {
      allowAllFlags: !0
    },
    "get-timezone": {
      safeFlags: ["-Name", "-Id", "-ListAvailable"]
    },
    "get-uptime": {
      allowAllFlags: !0
    },
    "write-output": {
      safeFlags: ["-InputObject", "-NoEnumerate"],
      additionalCommandIsDangerousCallback: NK
    },
    "write-host": {
      safeFlags: ["-Object", "-NoNewline", "-Separator", "-ForegroundColor", "-BackgroundColor"],
      additionalCommandIsDangerousCallback: NK
    },
    "start-sleep": {
      safeFlags: ["-Seconds", "-Milliseconds", "-Duration"],
      additionalCommandIsDangerousCallback: NK
    },
    "format-table": {
      allowAllFlags: !0,
      additionalCommandIsDangerousCallback: NK
    },
    "format-list": {
      allowAllFlags: !0,
      additionalCommandIsDangerousCallback: NK
    },
    "format-wide": {
      allowAllFlags: !0,
      additionalCommandIsDangerousCallback: NK
    },
    "format-custom": {
      allowAllFlags: !0,
      additionalCommandIsDangerousCallback: NK
    },
    "measure-object": {
      allowAllFlags: !0,
      additionalCommandIsDangerousCallback: NK
    },
    "select-object": {
      allowAllFlags: !0,
      additionalCommandIsDangerousCallback: NK
    },
    "sort-object": {
      allowAllFlags: !0,
      additionalCommandIsDangerousCallback: NK
    },
    "group-object": {
      allowAllFlags: !0,
      additionalCommandIsDangerousCallback: NK
    },
    "where-object": {
      allowAllFlags: !0,
      additionalCommandIsDangerousCallback: NK
    },
    "out-string": {
      allowAllFlags: !0,
      additionalCommandIsDangerousCallback: NK
    },
    "out-host": {
      allowAllFlags: !0,
      additionalCommandIsDangerousCallback: NK
    },
    "get-netadapter": {
      safeFlags: ["-Name", "-InterfaceDescription", "-InterfaceIndex", "-Physical"]
    },
    "get-netipaddress": {
      safeFlags: ["-InterfaceIndex", "-InterfaceAlias", "-AddressFamily", "-Type"]
    },
    "get-netroute": {
      safeFlags: ["-InterfaceIndex", "-InterfaceAlias", "-AddressFamily", "-DestinationPrefix"]
    },
    "get-dnsclient": {
      safeFlags: ["-InterfaceIndex", "-InterfaceAlias"]
    },
    "get-winevent": {
      safeFlags: ["-LogName", "-ListLog", "-ListProvider", "-ProviderName", "-Path", "-MaxEvents", "-FilterXPath", "-Force", "-Oldest"]
    },
    git: {},
    gh: {},
    docker: {},
    ipconfig: {
      safeFlags: ["/all", "/allcompartments"],
      additionalCommandIsDangerousCallback: (e, t) => (t?.args ?? []).some((n) => !n.startsWith("/") && !n.startsWith("-"))
    },
    netstat: {
      safeFlags: ["-a", "-b", "-e", "-f", "-n", "-o", "-p", "-q", "-r", "-s", "-t", "-x", "-y"]
    },
    systeminfo: {
      safeFlags: ["/FO", "/NH"]
    },
    tasklist: {
      safeFlags: ["/M", "/SVC", "/V", "/FI", "/FO", "/NH"]
    },
    "where.exe": {
      allowAllFlags: !0
    },
    hostname: {
      safeFlags: ["-a", "-d", "-f", "-i", "-I", "-s", "-y", "-A"],
      additionalCommandIsDangerousCallback: (e, t) => (t?.args ?? []).some((n) => !n.startsWith("-"))
    },
    whoami: {
      safeFlags: ["/user", "/groups", "/claims", "/priv", "/logonid", "/all", "/fo", "/nh"]
    },
    ver: {
      allowAllFlags: !0
    },
    arp: {
      safeFlags: ["-a", "-g", "-v", "-n"],
      additionalCommandIsDangerousCallback: (e, t) => (t?.args ?? []).some((n) => !n.startsWith("-"))
    },
    route: {
      safeFlags: ["print", "PRINT", "-4", "-6"],
      additionalCommandIsDangerousCallback: (e, t) => {
        if (!t) return !0;
        return t.args.find((r) => !r.startsWith("-"))?.toLowerCase() !== "print"
      }
    },
    getmac: {
      safeFlags: ["/FO", "/NH", "/V"]
    },
    tree: {
      safeFlags: ["/F", "/A", "/Q", "/L"]
    },
    findstr: {
      safeFlags: ["/B", "/E", "/L", "/R", "/S", "/I", "/X", "/V", "/N", "/M", "/O", "/P", "/C", "/G", "/D", "/A"]
    },
    dotnet: {}
  }),
  he = new Set(["out-null"]),
  Se = new Set(["format-table", "format-list", "format-wide", "format-custom", "measure-object", "select-object", "sort-object", "group-object", "where-object", "out-string", "out-host"]),
  Ce = new Set(["where.exe"]),
  Ee = new Set(["git", "gh", "docker", "dotnet"]),
  Pe = ["", ".exe", ".bat", ".cmd", ".com", ".ps1", ".vbs", ".js", ".wsf", ".vbe", ".jse", ".wsh", ".msc", ".cpl"];
class Y {
  listByPathext = new Map;
  regexByPathext = new Map;
  list() {
    let e = i.PATHEXT ?? "",
      t = this.listByPathext.get(e);
    if (t === void 0) {
      let n = new Set(Pe);
      for (let r of e.split(";").slice(0, 64)) {
        let s = r.trim().toLowerCase();
        if (s.startsWith(".") && s.length <= 16) n.add(s)
      }
      t = [...n], this.listByPathext.set(e, t)
    }
    return t
  }
  regex() {
    let e = i.PATHEXT ?? "",
      t = this.regexByPathext.get(e);
    if (t === void 0) {
      let n = this.list().filter((r) => r !== "").map((r) => Qo(r.slice(1)));
      t = new RegExp(`\\.(${n.join("|")})$`, "i"), this.regexByPathext.set(e, t)
    }
    return t
  }
}
var Z = new Y;

function Ae() {
  return Z.list()
}

function be() {
  return Z.regex()
}

function B3r(e) {
  let t = new Set(j3r(e).map((n) => n.stem));
  return t.delete(""), Array.from(t)
}

function j3r(e) {
  let t = be(),
    n = new Set,
    r = [];
  for (let s of [(a) => a, QG, qne, Jhe]) {
    let a = xe(e, s);
    if (n.has(a)) continue;
    n.add(a), r.push({
      base: a,
      stem: a.replace(t, "")
    })
  }
  return r
}

function xe(e, t) {
  let r = t(e).replace(/^[A-Za-z]:(?![\\/])/, ""),
    s = [];
  for (let a of r.split(/[\\/]+/)) {
    let c = rz(a.replace(/:.*$/, ""));
    if (c === "." || c === "") continue;
    if (c === "..") {
      if (s.length > 0 && s.at(-1) !== "..") s.pop();
      else s.push("..");
      continue
    }
    s.push(c)
  }
  return (s.at(-1) ?? "").toLowerCase()
}

function we(e) {
  if (x() !== "windows") return null;
  let t = pe(),
    n = new Set;
  for (let {
      base: r,
      stem: s
    }
    of j3r(e))
    for (let a of r === s ? [s] : [s, r]) {
      if (a === "" || n.has(a)) continue;
      n.add(a);
      for (let c of Ae()) {
        let o = de(t, a + c);
        try {
          if (ge(o).isFile()) return a + c
        } catch {}
      }
    }
  return null
}
var Fe = /\.(exe|cmd|bat|com)$/;

function gv(e, t = (n) => n.toLowerCase()) {
  let n = t(e);
  if (!n.includes("\\") && !n.includes("/")) n = n.replace(Fe, "");
  let r = cde[n];
  if (r) return r.toLowerCase();
  return n
}

function Xtr(e) {
  let t = e.toLowerCase();
  if (t === "cd.." || t === "cd\\" || t === "cd/" || t === "cd~" || /^[a-z]:$/.test(t)) return !0;
  let n = gv(e);
  return n === "set-location" || n === "push-location" || n === "pop-location" || n === "new-psdrive" || x() === "windows" && (n === "ndr" || n === "mount")
}

function e4t(e) {
  let t = gv(e);
  return he.has(t)
}

function L6o(e, t) {
  let n = gv(e.name);
  if (!Se.has(n)) return !1;
  return tRt(e, t)
}

function N6o(e) {
  if (e.statementType !== "PipelineAst") return !1;
  if (e.commands.length === 0) return !1;
  for (let t of e.commands)
    if (t.elementType !== "CommandAst") return !1;
  return !0
}

function _e(e) {
  let t = WBe(),
    n = t(e),
    r = G[n];
  if (r) return r;
  let s = gv(n, t);
  if (s !== n) return G[s];
  return
}

function Bdi(e) {
  let t = e.trim();
  if (!t) return !1;
  if (/\$\(/.test(t)) return !0;
  if (/(?:^|[^\w.])@\w+/.test(t)) return !0;
  if (/\.\w+\s*\(/.test(t)) return !0;
  if (/\$\w+\s*[+\-*/]?=/.test(t)) return !0;
  if (/--%/.test(t)) return !0;
  if (/\\\\/.test(t) || /(?<!:)\/\//.test(t)) return !0;
  if (/::/.test(t)) return !0;
  return !1
}

function t4t(e, t) {
  if (!e.trim()) return !1;
  if (!t) return !1;
  if (!t.valid) return !1;
  let r = ude(t);
  if (r.hasScriptBlocks || r.hasSubExpressions || r.hasExpandableStrings || r.hasSplatting || r.hasMemberInvocations || r.hasAssignments || r.hasStopParsing) return !1;
  let s = Rlr(t);
  if (s.length === 0) return !1;
  if (s.reduce((c, o) => c + o.commands.length, 0) > 1) {
    if (s.some((o) => o.commands.some((l) => Xtr(l.name)))) return !1
  }
  for (let c of s) {
    if (!c || c.commands.length === 0) return !1;
    if (c.redirections.length > 0) {
      if (c.redirections.some((f) => !f.isMerging && !e3t(f.target))) return !1
    }
    let o = c.commands[0];
    if (!o) return !1;
    if (!tRt(o, e)) return !1;
    for (let l = 1; l < c.commands.length; l++) {
      let f = c.commands[l];
      if (!f || f.nameType === "application") return !1;
      if (e4t(f.name) && f.args.length === 0) continue;
      if (!tRt(f, e)) return !1
    }
    if (c.nestedCommands && c.nestedCommands.length > 0) return !1
  }
  return !0
}
var P = (e, t = !1) => t && e.length > 1 && e[1] === "-" ? e : e.replace(/(?!^)[-']/g, "");

function n4t(e, t, n = "full") {
  let r = n === "full" ? N : U;
  for (let s = 0; s < e.length; s++) {
    let a = e[s];
    if (!MQ.has(a[0])) continue;
    if (t !== void 0 && t[s + 1] !== void 0 && t[s + 1] !== "Parameter") continue;
    let c = a[0] === "-" ? a : "-" + a.slice(1),
      o = c.indexOf(":"),
      l = (o > 0 ? c.slice(0, o) : c).toLowerCase(),
      f = null;
    if (!r(l) && !r(P(l, n === "exact"))) {
      let d = uI(l.replace(/`[\r\n]+\s*/g, "")).toLowerCase(),
        S = d.indexOf(":", 1),
        m = S > 0 ? d.slice(0, S) : d;
      if (!r(m) && !r(P(m, n === "exact")) && !/[^\x20-\x7e]/.test(d)) continue;
      if (S > 0) {
        let C = d.slice(S + 1);
        f = C.trim() !== "" ? C : e[s + 1] ?? ""
      }
    }
    let u = o > 0 ? c.slice(o + 1) : null,
      p = (f ?? (u !== null && u.trim() !== "" ? u : e[s + 1] ?? "")).toLowerCase().replace(/^['"]|['"]$/g, "").trim();
    if (p.length > 0 && !D.has(p)) return !0
  }
  return !1
}

function r4t(e, t, n = "full") {
  let r = n === "full" ? k : j,
    s = (a) => r(a) || n === "full" && (a.endsWith("variable") || V(a));
  for (let a = 0; a < e.length; a++) {
    let c = e[a];
    if (!MQ.has(c[0])) continue;
    if (t !== void 0 && t[a + 1] !== void 0 && t[a + 1] !== "Parameter") continue;
    let o = c[0] === "-" ? c : "-" + c.slice(1),
      l = v(o),
      f = (l !== null ? o.slice(0, l.colonIdx) : o).toLowerCase();
    if (!s(f) && !s(P(f, n === "exact"))) {
      let m = uI(f.replace(/`[\r\n]+\s*/g, "")).toLowerCase();
      if (m !== f && (s(m) || s(P(m, n === "exact")))) return !0;
      let C = m.indexOf(":", 1);
      if (C > 0 && s(P(m.slice(0, C), n === "exact"))) return !0;
      if (/[^\x20-\x7e]/.test(m)) return !0;
      continue
    }
    let u;
    if (l !== null) {
      if (l.isHereString) return !0;
      if (l.post.includes("$") || l.post.includes("`")) return !0;
      u = l.postResolved !== "" ? l.postResolved : e[a + 1] ?? ""
    } else u = e[a + 1] ?? "";
    if (u.includes("$") || u.includes("`")) return !0;
    let g = QG(pQ(u)).toLowerCase().trim();
    if (g.length === 0) continue;
    let p = g.startsWith("+") ? g.slice(1) : g,
      d = p.lastIndexOf(":"),
      S = p;
    if (d >= 0) {
      let m = p.slice(0, d);
      if (!W.has(m) && !/^[0-9]+$/.test(m)) return !0;
      S = p.slice(d + 1)
    }
    if (!/^[a-z0-9_]+$/.test(S)) return !0;
    if (M.has(S)) return !0
  }
  return !1
}

function h(e) {
  return e.includes('"') || /[\s\u0085\u180e]/.test(e) && (e.match(/\\+$/)?.[0].length ?? 0) % 2 === 1
}

function v(e) {
  if (e.length === 0 || !(MQ.has(e[0]) || e[0] === "/")) return null;
  let t = e.indexOf(":", 1);
  if (t <= 0) return null;
  let n = pQ(e.slice(t + 1)),
    r = pQ(n.replace(/`[\r\n]+\s*/g, "")),
    s = /^@['"\u2018-\u201F]/.test(n) || /^@['"\u2018-\u201F]/.test(r);
  return {
    colonIdx: t,
    post: n,
    postResolved: r,
    isHereString: s
  }
}

function L(e, t = !0) {
  let n = e.replace(/`[\r\n]+\s*/g, "");
  if (h(e) || h(E(n))) return !0;
  if (t) {
    let r = v(e);
    if (r !== null) {
      let {
        post: s,
        postResolved: a
      } = r;
      if (r.isHereString) return !0;
      let c = QG(a),
        o = QG(s),
        l = qne(a),
        f = qne(s),
        u = Jhe(a),
        g = Jhe(s);
      if (h(c) || h(o) || h(E(c)) || h(l) || h(f) || h(E(l)) || h(u) || h(g) || h(E(u))) return !0
    }
  }
  return !1
}
var Ie = "tengu_hazy_peach";

function F6o() {
  return _t(Ie, {
    safe: !0
  })
}
var ve = "tengu_steady_treehouse";

function WBe(e = W3r()) {
  return e ? PAt : (t) => t.toLowerCase()
}

function W3r() {
  return _t(ve, {
    safe: !0
  })
}

function jdi() {
  return W3r() ? (e) => e.toLowerCase().toUpperCase().toLowerCase() : (e) => e.toLowerCase()
}

function tRt(e, t) {
  if (e.nameType === "application") {
    let o = F6o() ? Ytr : /\s/,
      f = WBe()(e.text.split(o, 1)[0] ?? "");
    if (!Ce.has(f)) return !1
  }
  let n = _e(e.name);
  if (!n) return !1;
  if (n.regex && !n.regex.test(t)) return !1;
  if (n.additionalCommandIsDangerousCallback?.(t, e)) return !1;
  if (!e.elementTypes) return !1;
  for (let o = 1; o < e.elementTypes.length; o++) {
    let l = e.elementTypes[o];
    if (l !== "StringConstant" && l !== "Parameter") {
      if (!/[$(@{[]/.test(e.args[o - 1] ?? "")) continue;
      return !1
    }
    if (l === "Parameter") {
      let f = e.children?.[o - 1];
      if (f) {
        if (f.some((u) => u.type !== "StringConstant")) return !1
      } else {
        let u = e.args[o - 1] ?? "",
          g = u.indexOf(":");
        if (g > 0 && /[$(@{[]/.test(u.slice(g + 1))) return !1
      }
    }
  }
  let r = gv(e.name),
    s = Ee.has(r),
    a = r.includes("-"),
    c = e.nameType !== "cmdlet";
  if (x() === "windows") {
    if (c || s) {
      for (let o of e.args)
        if (L(o, !a || e.nameType === "application")) return !1
    }
    if (we(e.name) !== null) return !1
  }
  if (!a || e.nameType === "application")
    for (let o = 1; o < e.elementTypes.length; o++) {
      let l = e.elementTypes[o];
      if (l !== "StringConstant" && l !== "Parameter") return !1;
      if (l === "Parameter" && !s && (e.args[o - 1] ?? "").includes(":")) return !1
    }
  if (s) {
    let o = null;
    for (let l = 1; l < e.elementTypes.length; l++) {
      let f = e.args[l - 1] ?? "";
      if (e.elementTypes[l] === "Parameter") {
        let u = v(f);
        if (u !== null) {
          if (u.isHereString) return !1;
          o ??= e.args.slice(0, l - 1), o.push(f.slice(0, u.colonIdx), uI(QG(u.postResolved)));
          continue
        }
      }
      o?.push(f)
    }
    if (o !== null && !Q(r, o)) return !1;
    return Q(r, e.args)
  }
  if (a && n4t(e.args, e.elementTypes)) return !1;
  if (a && r4t(e.args, e.elementTypes)) return !1;
  if (n.allowAllFlags) return !0;
  if (!n.safeFlags || n.safeFlags.length === 0) return !e.args.some((l, f) => {
    if (a) return V1e(l, e.elementTypes?.[f + 1]);
    return l.startsWith("-") || l.startsWith("/")
  });
  for (let o = 0; o < e.args.length; o++) {
    let l = e.args[o];
    if (a ? V1e(l, e.elementTypes?.[o + 1]) : l.startsWith("-") || l.startsWith("/")) {
      let u = a ? "-" + l.slice(1) : l;
      if (a || l.startsWith("/")) {
        let d = u.indexOf(":");
        if (d > 0) u = u.substring(0, d)
      }
      let g = u.toLowerCase();
      if (a && T.has(g)) continue;
      if (!(a ? n.safeFlags.some((d) => d.toLowerCase() === g) : n.safeFlags.includes(u))) return !1
    }
  }
  return !0
}

function Q(e, t) {
  for (let n of t)
    if (n.length > 0 && n[0] !== "-" && MQ.has(n[0])) return !1;
  switch (e) {
    case "git":
      return Re(t);
    case "gh":
      return Oe(t);
    case "docker":
      return Ne(t);
    case "dotnet":
      return De(t);
    default:
      return !1
  }
}
var Le = new Set(["-c", "-C", "--exec-path", "--config-env", "--git-dir", "--work-tree", "--bare", "--attr-source", "--help", "-h", "--shallow-file"]),
  J = new Set(["-c", "-C", "--exec-path", "--config-env", "--git-dir", "--work-tree", "--namespace", "--super-prefix", "--shallow-file"]),
  ye = ["-c", "-C"];

function z(e) {
  return !e.includes("=") && J.has(e)
}

function ee(e, t) {
  for (let n = 0; n < e.length; n++) {
    let r = e[n] ?? "",
      s = t[n] ?? "";
    if (s.includes("\x00") || O(r).includes("\x00")) return !1;
    if (Ymt(s) !== Ymt(r) || s === "--" !== (r === "--")) return !1;
    if (Ymt(r) && r !== s && z(r) !== z(s)) return !1
  }
  return !0
}

function y(e) {
  return e.map((t) => z1e(uI(t.replace(/`[\r\n]+\s*/g, ""))))
}

function Re(e) {
  let t = y(e);
  if (!ee(e, t)) return !1;
  return X(e) && X(t)
}

function X(e) {
  if (e.length === 0) return !0;
  if (x() === "windows") {
    for (let u of e)
      if (L(u)) return !1
  }
  for (let u of e)
    if (u.includes("$")) return !1;
  let t = 0;
  while (t < e.length) {
    let u = e[t];
    if (!u || !u.startsWith("-")) break;
    for (let d of ye)
      if (u.length > d.length && u.startsWith(d) && (d === "-C" || u[d.length] !== "-")) return !1;
    let g = u.includes("="),
      p = g ? tt(u, "=") : u;
    if (Le.has(p)) return !1;
    if (!g && J.has(p)) t += 2;
    else t++
  }
  if (t >= e.length) return !0;
  let n = WBe(),
    r = n(e[t] ?? ""),
    s = t + 1 < e.length ? n(e[t + 1] ?? "") : "",
    a = `git ${r} ${s}`,
    c = `git ${r}`,
    o = VNn[a],
    l = 2;
  if (!o) o = VNn[c], l = 1;
  if (!o) return !1;
  let f = e.slice(t + l);
  if (r === "ls-remote") {
    let u = !1;
    for (let g of f) {
      if (!u && g === "--") {
        u = !0;
        continue
      }
      if (u || g === "-" || !g.startsWith("-")) return !1
    }
  }
  if (o.additionalCommandIsDangerousCallback && o.additionalCommandIsDangerousCallback("", f)) return !1;
  return b7e(f, 0, o, {
    commandName: "git"
  })
}

function Oe(e) {
  let t = y(e);
  if (!ee(e, t)) return !1;
  return K(e) && K(t)
}

function K(e) {
  return !1
}
var q = new Set(UEr.filter((e) => /^-[^-]$/.test(e)).map((e) => e[1])),
  Te = [...UEr.filter((e) => e.startsWith("--")), "--tls"];

function Ne(e) {
  if (e.length === 0) return !0;
  let t = y(e);
  if (x() === "windows") {
    for (let c of e)
      if (L(c)) return !1
  }
  for (let c of t)
    if (c.includes("$")) return !1;
  for (let c of t) {
    if (c[0] === "-" && c[1] !== "-")
      for (let l = 1; l < c.length; l++) {
        let f = c[l];
        if (q.has(f)) return !1;
        if (f !== "h" && q.has(f.toLowerCase())) return !1
      }
    let o = c.toLowerCase();
    if (Te.some((l) => o.startsWith(l))) return !1
  }
  let r = `docker ${WBe()(t[0]??"")}`;
  if (jEr.includes(r)) return !0;
  let s = BEr[r];
  if (!s) return !1;
  let a = t.slice(1);
  if (s.additionalCommandIsDangerousCallback && s.additionalCommandIsDangerousCallback("", a)) return !1;
  return b7e(a, 0, s)
}

function De(e) {
  if (e.length === 0) return !1;
  let t = WBe();
  for (let n of e)
    if (!me.has(t(n))) return !1;
  return !0
}
export {
  jBe,
  pQ,
  QG,
  qne,
  Jhe,
  uI,
  Ytr,
  $di,
  M6o,
  D6o,
  Udi,
  NK,
  B3r,
  j3r,
  gv,
  Xtr,
  e4t,
  L6o,
  N6o,
  Bdi,
  t4t,
  n4t,
  r4t,
  F6o,
  WBe,
  W3r,
  jdi,
  tRt
};
