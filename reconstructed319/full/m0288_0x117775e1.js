// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  H,
  Po,
  er,
  e_
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  M5
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  I_,
  Hp
} from "B:/~BUN/root/chunk-65j2302z.js";
import {
  hVe,
  gi,
  Qr,
  _r,
  Gy,
  pn,
  v
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  yi
} from "B:/~BUN/root/chunk-6n5g80b8.js";
import {
  Yl
} from "B:/~BUN/root/chunk-ja520myc.js";
import {
  RDr
} from "B:/~BUN/root/chunk-grwykqvw.js";
import {
  Rf,
  _Ji
} from "B:/~BUN/root/chunk-q8eknvfd.js";
import {
  QRo,
  Pi,
  gM,
  di
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  FR
} from "B:/~BUN/root/chunk-begxsvab.js";
import {
  Xl,
  Upe,
  h5,
  dS,
  wC,
  dqe,
  HNr,
  yr,
  mn
} from "B:/~BUN/root/chunk-44q965xg.js";
import {
  NR,
  fUs,
  CGn,
  HA,
  gr,
  to,
  br,
  fi,
  PHe,
  XAo,
  OHe,
  pUs,
  sSt
} from "B:/~BUN/root/chunk-sy1h8mf0.js";
import {
  nFs
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  yo
} from "B:/~BUN/root/chunk-1s0yt4vj.js";
import {
  pXi
} from "B:/~BUN/root/chunk-dm4rzkqc.js";
import {
  dt,
  Yt,
  Me
} from "B:/~BUN/root/chunk-9kvvd0hy.js";
import {
  cr,
  z_e,
  que
} from "B:/~BUN/root/chunk-wxhfn3za.js";
import {
  co
} from "B:/~BUN/root/chunk-tjfmeakx.js";
import {
  uf,
  FF
} from "B:/~BUN/root/chunk-v29ccgfa.js";
import {
  ft
} from "B:/~BUN/root/chunk-2x2z0t2k.js";
import {
  Ov
} from "B:/~BUN/root/chunk-2r9r3hfm.js";
import {
  aU,
  m_
} from "B:/~BUN/root/chunk-21s8ygah.js";
import {
  Ftn
} from "B:/~BUN/root/chunk-e99p2x0p.js";
import {
  Vn
} from "B:/~BUN/root/chunk-tacrdmts.js";
import {
  zg
} from "B:/~BUN/root/chunk-hdtrfvjw.js";
import {
  Fs
} from "B:/~BUN/root/chunk-fkcdzerj.js";
import {
  $r
} from "B:/~BUN/root/chunk-xbnyqyft.js";
import {
  ze
} from "B:/~BUN/root/chunk-xwzn0yxv.js";
import {
  kt
} from "B:/~BUN/root/chunk-86hj8bna.js";
import {
  K4,
  rG,
  bn
} from "B:/~BUN/root/chunk-2631cdbp.js";
import {
  he
} from "B:/~BUN/root/chunk-fet34rqr.js";
var ee = "bot_protected_tengu_atomic_magpie",
  oe = new Set(["session", "cliArg"]),
  x = new W(() => ({
    value: !1
  }));

function wFn(e, o) {
  if (e === Rf && !Yl(o) && "url" in o && typeof o.url === "string" && RDr(o.url)) Po(x).value = !0
}

function YLe(e) {
  if (e !== Vn && e !== uf || !(Po(x).value || i.CLAUDE_CODE_PROJECTS_SESSION || hVe(e_()))) return !1;
  let o = pn(ee, !1);
  return !(o.value === !0 && o.source === "payload" && !Gy())
}

function A(e) {
  let o = typeof e !== "string",
    r = !o && dS(e);
  return [Vn, uf].some((n) => (o || r || Xl(e) === n) && YLe(n) && (!r || dqe(e, n)))
}

function k(e, o) {
  return !oe.has(e) && YLe(o)
}

function L() {
  return YLe(Vn) || YLe(uf)
}

function D(e) {
  if (typeof e !== "object" || e === null) return !0;
  if (e.type !== "addRules" && e.type !== "replaceRules" && e.type !== "removeRules") return !1;
  let o = "rules" in e ? e.rules : void 0;
  return !Array.isArray(o) || o.some((r) => typeof r !== "object" || r === null || !("toolName" in r) || typeof r.toolName !== "string" || ("ruleContent" in r) && r.ruleContent !== void 0 && typeof r.ruleContent !== "string")
}

function U(e, o, r) {
  if (e.type !== "removeRules" && e.type !== "replaceRules" || e.behavior === "allow") return;
  if (e.type === "replaceRules") {
    if (r === void 0) return e.rules.length === 0 ? [] : [{
      type: "addRules",
      rules: e.rules,
      behavior: e.behavior,
      destination: e.destination
    }];
    let s = (e.behavior === "deny" ? r.alwaysDenyRules : r.alwaysAskRules) ?? {},
      l = Object.hasOwn(s, e.destination) ? s[e.destination] : void 0,
      m = Array.isArray(l) ? l : [],
      a = (c) => mn(yr(c)),
      u = new Set(e.rules.map((c) => a(mn(c)))),
      f = m.map((c) => yr(c)).filter((c) => o(c.toolName) && !u.has(a(mn(c))));
    return f.length === 0 ? void 0 : [{
      ...e,
      rules: [...e.rules, ...f]
    }]
  }
  let n = e.rules.filter((s) => !o(s.toolName));
  if (n.length === e.rules.length) return;
  return n.length === 0 ? [] : [{
    ...e,
    rules: n
  }]
}

function lTr(e, o) {
  if (!L()) return e;
  return ivs(e, A, o)
}

function ivs(e, o, r) {
  let n = !1,
    s = e.flatMap((l) => {
      if (D(l)) return n = !0, [];
      let m = U(l, o, r);
      if (m !== void 0) return n = !0, m;
      if (l.type !== "addRules" && l.type !== "replaceRules" || l.behavior !== "allow") return [l];
      let a = l.rules.filter((u) => !o(u.toolName));
      if (a.length === l.rules.length) return [l];
      return n = !0, a.length === 0 ? [] : [{
        ...l,
        rules: a
      }]
    });
  return n ? s : e
}

function Mtn(e, o) {
  let r = fi(e);
  if (r === uf) return {
    toolName: r
  };
  let n = typeof o === "object" && o !== null && "url" in o ? o.url : void 0;
  if (r !== Vn || typeof n !== "string") return;
  try {
    let s = new URL(n).hostname;
    return s.includes("*") ? void 0 : {
      toolName: r,
      ruleContent: `domain:${s}`
    }
  } catch {
    return
  }
}

function yee(e, o, r) {
  if (!L()) return e;
  let n = !1,
    s = e.flatMap((l) => {
      if (D(l)) return n = !0, [];
      let m = U(l, A, r);
      if (m !== void 0) return n = !0, m;
      if (l.type !== "addRules" && l.type !== "replaceRules" || l.behavior !== "allow") return [l];
      let a = l.rules.filter((c) => A(c.toolName));
      if (a.length === 0) return [l];
      n = !0;
      let u = l.rules.filter((c) => !A(c.toolName)),
        f = l.type === "addRules" && o !== void 0 ? a.filter((c) => Xl(c.toolName) === o.toolName && c.ruleContent === o.ruleContent) : [];
      return [...u.length > 0 ? [{
        ...l,
        rules: u
      }] : [], ...f.length > 0 ? [{
        ...l,
        destination: "session",
        rules: f
      }] : []]
    });
  return n ? s : e
}
var re = "tengu_steady_finch";

function zq() {
  return Uho() || pXi()?.convertedSkillsAsPlugins === !0
}

function Uho() {
  return v(re, !1) === !0
}

function wX(e) {
  return e !== void 0 && di(gM(e)) === Pi && zq()
}

function dTr(e) {
  return Hp() || !e && zq() && !er()
}

function cTr() {
  return Hp() && zq()
}
var K2 = "ListMcpResourcesTool",
  Vji = `
Lists available resources from configured MCP servers.
Each resource object includes a 'server' field indicating which server it's from.

Usage examples:
- List all resources from all servers: \`listMcpResources\`
- List resources from a specific server: \`listMcpResources({ server: "myserver" })\`
`,
  Kji = `
List available resources from configured MCP servers.
Each returned resource will include all standard MCP resource fields plus a 'server' field 
indicating which server the resource belongs to.

Parameters:
- server (optional): The name of a specific MCP server to get resources from. If not provided,
  resources from all servers will be returned.
`;
var iU = "ReadMcpResourceDirTool",
  zji = `
List the direct children of a directory resource on an MCP server.
- server: The name of the MCP server to read from
- uri: The URI of the directory resource

Only usable against a server that has declared support for directory listing. The listing is not recursive.
`,
  Gji = `
List the direct children of a directory resource on an MCP server (\`resources/directory/read\`).

Parameters:
- server (required): The name of the MCP server to read from
- uri (required): The URI of the directory resource

The listing is not recursive. Each entry carries its own \`uri\`; subdirectories appear with mimeType "${Ftn}" \u2014 call this tool again on a subdirectory's \`uri\` to descend.

Only usable against a server that has declared support for directory listing; other servers return an error.
`;

function Bho(e) {
  return `Claude requested permissions to use ${e}, but you haven't granted it yet.`
}
var ne = new Set,
  F = new WeakMap,
  B = new WeakMap;

function qji(e, o) {
  B.set(e, o)
}

function Dtn(e) {
  return {
    source: "mcpServerPolicy",
    ruleBehavior: "ask",
    ruleValue: {
      toolName: e
    }
  }
}

function kFn(e, o) {
  return {
    behavior: "ask",
    message: Bho(e.name),
    decisionReason: {
      type: "rule",
      rule: Dtn(o)
    }
  }
}

function XLe(e, o) {
  let r = e.mcpPolicyAsksLiftedInAcceptEdits,
    n = se(e, o);
  if (r === void 0 && n === void 0 || e.mode !== "acceptEdits" || (e.modeBeforeRewrite ?? "acceptEdits") !== "acceptEdits" || i.CLAUDE_CODE_EVAL_CONFINED) return ne;
  let s = F.get(e);
  if (s === void 0) s = V(e, new Set(r)), F.set(e, s);
  return n === void 0 ? s : new Set([...s, ...V(e, new Set([n]))])
}

function se(e, o) {
  let r = o && B.get(o);
  return r !== void 0 && e.mcpPolicyFileAsksLiftedInAcceptEdits?.includes(r) ? r : void 0
}

function V(e, o) {
  let r = Object.keys(e.mcpPermissionModeOverrides).map(to);
  return new Set(e.alwaysAskRules.mcpServerPolicy?.filter((n) => o.has(n) && gr(n)?.toolName !== void 0 && !r.some((s) => n.startsWith(s))))
}
var G = he(new Set, (e) => e.clear());

function uTr(e, o) {
  let r = e.toolName;
  if (G.has(r)) return;
  G.add(r), t(o.mcpInfo ? `Allow rule "${r}" does not allow the tools named "${to(o.mcpInfo.serverName)}<tool>": they belong to another MCP server than the rule names. To allow them, use "${to(o.mcpInfo.serverName)}*".` : `Allow rule "${r}" does not allow "${o.name}": the name reads as more than one MCP server's. To allow it, use the tool's full name.`, {
    level: "warn"
  })
}
var te = "tengu_greedy_shore";

function $Ge() {
  return v(te, !1) === !0
}
var ie = new W(() => new Set);

function jho(e, o) {
  for (let r of o) M().add(br(e, r))
}

function w(e) {
  if (!e.startsWith("mcp__")) return !1;
  for (let o of M())
    if (e === o || sSt(e, {
        name: o
      })) return !0;
  return !1
}

function Yji() {
  return M().size > 0
}

function M() {
  return ie.of(H().host)
}
var le = [],
  fTr = [...le, "python", "python3", "python2", "node", "deno", "tsx", "ruby", "perl", "php", "lua", "npx", "bunx", "npm run", "yarn run", "pnpm run", "bun run", "bash", "sh", "ssh"],
  avs = [...fTr, "zsh", "fish", "eval", "exec", "env", "xargs", "sudo"],
  Who = ["curl", "wget", "kubectl", "aws", "gcloud", "gsutil"],
  zho = [],
  j = new Set([...Who, ...zho]),
  K = {
    kubectl: new Set(["exec", "apply", "create", "delete", "run", "cp", "port-forward", "proxy", "patch", "edit", "replace", "attach", "debug", "scale", "rollout", "drain", "cordon", "taint"]),
    ...!1
  },
  Y = [...avs, ...[]];

function Gho(e, o) {
  if (e !== Me) return !1;
  if (o === void 0 || o === "") return !0;
  if (/^[\s*]+$/.test(o)) return !0;
  return pTr(o, Y)
}

function pTr(e, o) {
  let r = e.trim().toLowerCase();
  if (r === "*") return !0;
  for (let n of o) {
    let s = n.toLowerCase();
    if (r === s) return !0;
    if (r === `${s}:*` || r === `${s} *`) return !0;
    if (r === `${s}*`) return !0;
    if (r.startsWith(`${s} `) && r.endsWith("*")) {
      let l = r.slice(s.length + 1);
      if (j.has(s)) {
        if (/[$`]/.test(l)) return !0;
        let m = K[s];
        if (m === "all") return !0;
        let a = l.replace(/[\s:*]+$/, "").split(/\s+/).filter(Boolean),
          u = 0;
        for (; u < a.length; u++) {
          let c = a[u];
          if (!c.startsWith("-")) break;
          if (!c.includes("=") && u + 1 < a.length && !a[u + 1].startsWith("-")) u++
        }
        let f = a[u];
        if (f === void 0) {
          if ((s === "curl" || s === "wget") && a.some((c) => c.includes("://"))) continue;
          return !0
        }
        if (m?.has(f)) return !0;
        continue
      }
      if (l.startsWith("-")) {
        let m = l.slice(0, -1);
        if (!(/^python[\d.]*$/.test(s) && /^-m\s+\w+\.[\w.]+(\s*:|\s+)$/.test(m))) return !0
      }
    }
  }
  return !1
}

function Vho(e, o) {
  if (e !== kt) return !1;
  if (o === void 0 || o === "") return !0;
  if (/^[\s*]+$/.test(o)) return !0;
  let r = o.trim().toLowerCase();
  if (r === "*") return !0;
  let n = [...fTr, "pwsh", "powershell", "cmd", "wsl", "iex", "invoke-expression", "icm", "invoke-command", "start-process", "saps", "start", "start-job", "sajb", "start-threadjob", "invoke-wmimethod", "iwmi", "invoke-cimmethod", "icim", "wmic", "register-objectevent", "register-engineevent", "register-wmievent", "register-scheduledjob", "new-pssession", "nsn", "enter-pssession", "etsn", "add-type", "new-object"];
  for (let s of n) {
    if (r === s) return !0;
    if (r === `${s}:*`) return !0;
    if (r === `${s}*`) return !0;
    if (r === `${s} *`) return !0;
    if (r.startsWith(`${s} -`) && r.endsWith("*")) return !0;
    let l = s.indexOf(" "),
      m = l === -1 ? `${s}.exe` : `${s.slice(0,l)}.exe${s.slice(l)}`;
    if (r === m) return !0;
    if (r === `${m}:*`) return !0;
    if (r === `${m}*`) return !0;
    if (r === `${m} *`) return !0;
    if (r.startsWith(`${m} -`) && r.endsWith("*")) return !0
  }
  return !1
}

function Ica(e, o) {
  return Xl(e) === ft
}

function ae(e) {
  return e === Fs
}
class q {
  verdicts = new Map;
  lookup(e) {
    return this.verdicts.get(e)
  }
  remember(e, o) {
    this.verdicts.set(e, o)
  }
  reset() {
    this.verdicts.clear()
  }
}
var z = new q;

function _se() {
  return I_() || nFs()
}

function Ltn(e, o) {
  let r = `${e}\x00${o??""}`,
    n = z.lookup(r);
  if (n !== void 0) return n;
  let s = Gho(e, o) || Vho(e, o) || Ica(e, o) || ae(e) || e === import.meta.require("B:/~BUN/root/chunk-mh92bc27.js").APPIFACT_REPL_TOOL_NAME;
  return z.remember(r, s), s
}

function cht(e) {
  let o = fi(e);
  return w(o) || FR() && e.mcpInfo === void 0 && e.name === co || I_() && (o.startsWith(HA) || (e.name === zg || e.name === iU) && $Ge() || Ltn(e.name, void 0))
}

function _ee(e, o) {
  if (FR() && e === co) return !0;
  if ((e === Me || e === kt) && _se()) return !0;
  if (w(e)) return !0;
  return Ltn(e, o)
}

function mTr(e) {
  if (e === Me || e === kt) return _se() ? void 0 : e;
  if (Ov(e) || _ee(e, void 0) || hTr(e)) return;
  return e === Yt || e === gi ? dt : e
}
var ue = new Set(Array.from(_Ji, (e) => br(Rf, e)));

function hTr(e) {
  return ue.has(e)
}
var bse = [...yi, "cliArg", "command", "session", "mcpMount", "toolsNarrowing", "mcpServerPolicy", "hostCredential"],
  JLe = ["toolsNarrowing", "command"],
  me = {
    userSettings: !0,
    projectSettings: !0,
    localSettings: !0,
    flagSettings: !0,
    policySettings: !0,
    cliArg: !0,
    session: !0,
    command: !1,
    toolsNarrowing: !1,
    mcpServerPolicy: !1,
    hostCredential: !1,
    mcpMount: !1
  },
  ce = new Set([import.meta.require("B:/~BUN/root/chunk-m8whekzs.js").END_CONVERSATION_TOOL_NAME]);

function Gq(e) {
  return !e.mcpInfo && ce.has(e.name)
}

function _D(e, o) {
  if (yo(e.mode, e.servedCall === !0)) {
    let l = i.CLAUDE_CODE_EVAL_CONFINED ? {
        cliArg: e.alwaysAllowRules.cliArg
      } : e.alwaysAllowRules,
      m = [];
    for (let a of bse) {
      let u = l[a];
      if (u === void 0) continue;
      for (let f of u) {
        let c = m_(f, "allow");
        if (_ee(c.toolName, c.ruleContent)) continue;
        if (hTr(c.toolName)) continue;
        if (k(a, c.toolName)) continue;
        m.push({
          source: a,
          ruleBehavior: "allow",
          ruleValue: c
        })
      }
    }
    return m
  }
  if (i.CLAUDE_CODE_EVAL_CONFINED) return N7e({
    cliArg: e.alwaysAllowRules.cliArg
  }, "allow");
  let r = XLe(e, o),
    n = N7e(r.size === 0 ? e.alwaysAllowRules : {
      ...e.alwaysAllowRules,
      mcpServerPolicy: [...e.alwaysAllowRules.mcpServerPolicy ?? [], ...r]
    }, "allow"),
    s;
  for (let [l, m] of n.entries())
    if (k(m.source, m.ruleValue.toolName)) s ??= n.slice(0, l);
    else s?.push(m);
  return s ?? n
}

function N7e(e, o) {
  let r = [];
  for (let n of bse) {
    let s = e[n];
    if (s === void 0) continue;
    for (let l of s) r.push({
      source: n,
      ruleBehavior: o,
      ruleValue: m_(l, o)
    })
  }
  return r
}

function Wl(e) {
  return N7e(e.alwaysDenyRules, "deny")
}

function Vc(e, o) {
  let r = XLe(e, o);
  return N7e(r.size === 0 ? e.alwaysAskRules : {
    ...e.alwaysAskRules,
    mcpServerPolicy: e.alwaysAskRules.mcpServerPolicy?.filter((n) => !r.has(n))
  }, "ask")
}

function uht(e, o, r = {}) {
  if (o.ruleValue.ruleContent !== void 0) return !1;
  return y(e, o, r)
}

function Xji(e) {
  let o = e.filter((r) => r.ruleValue.ruleContent === void 0).map((r) => ({
    rule: r,
    ruleName: C(r)
  }));
  return (r) => {
    let n = S(r, void 0);
    return o.filter(({
      rule: s,
      ruleName: l
    }) => y(r, s, {}, l, n)).map(({
      rule: s
    }) => s)
  }
}

function y(e, o, {
  proxyExpansion: r = !1,
  globMatching: n = !1,
  toolAliases: s
} = {}, l = C(o), m = S(e, s)) {
  if (o.ruleBehavior !== "allow" && e.mcpInfo !== void 0) {
    let d = {
      proxyExpansion: r,
      globMatching: n,
      toolAliases: s
    };
    if (m.otherDenyOrAskReads().some((T) => y({
        name: T.name
      }, o, d, l, T))) return !0;
    let p = CGn(o.ruleValue.toolName, m.name);
    if (p !== void 0 && y({
        name: p.row
      }, I(p.rule, o), d)) return !0
  }
  let a = m.name;
  if (o.ruleValue.toolName === a) return !0;
  let u = "familyParentToolName" in e ? e.familyParentToolName : void 0;
  if (u !== void 0 && e.mcpInfo === void 0 && o.ruleValue.toolName === u) return !0;
  if (r && Upe(o.ruleValue.toolName, s).includes(a)) return !0;
  let {
    matchesGlob: f
  } = l;
  if (n && f !== void 0 && (f(a) || r && m.aliasSources().some(f))) return !0;
  let c = l.coversMcpTool(m.mcpInfo());
  if (o.ruleBehavior === "allow") {
    if (!c) return !1;
    if (pUs(o.ruleValue.toolName, e)) return !0;
    return uTr(o.ruleValue, e), !1
  }
  return c || Z(o) && m.mcpServerRuleNames().includes(o.ruleValue.toolName)
}

function Z({
  source: e,
  ruleValue: o
}) {
  return e !== "mcpServerPolicy" && o.toolName.startsWith(HA)
}

function C({
  ruleValue: {
    toolName: e
  }
}) {
  let o, r;
  return {
    matchesGlob: dS(e) ? (n) => (o ??= HNr(e))(n) : void 0,
    coversMcpTool: (n) => (r ??= XAo(e))(n)
  }
}

function S(e, o) {
  let r = fi(e),
    n, s, l, m;
  return {
    name: r,
    mcpInfo: () => m === void 0 ? m = gr(r) : m,
    aliasSources: () => n ??= h5(r, o),
    mcpServerRuleNames: () => s ??= OHe(e),
    otherDenyOrAskReads: () => l ??= PHe(e).map((a) => S({
      name: a
    }, o))
  }
}

function Q(e) {
  return e.mcpInfo === void 0 ? void 0 : e.checkPermissions
}

function q2(e, o) {
  return _D(e, Q(o)).find((r) => uht(o, r)) || null
}

function Ntn(e) {
  return e.source !== "cliArg" && e.source !== "toolsNarrowing"
}

function X_(e, o, r, n = C(r), s, l = !1) {
  let m = {
    proxyExpansion: Ntn(r),
    globMatching: !0,
    toolAliases: e.toolAliases
  };
  if (y(o, r, m, n, s)) return !0;
  if (("aliasSkillToolNames" in o ? o.aliasSkillToolNames : void 0)?.some((f) => y({
      name: f
    }, r, m, n))) return !0;
  let u = "packagingAliasSkillToolNames" in o ? o.packagingAliasSkillToolNames : void 0;
  if (u === void 0 || dS(r.ruleValue.toolName) && !dTr(l)) return !1;
  return u.some((f) => y({
    name: f
  }, r, m, n))
}

function lo(e, o, r, n = !1) {
  if (Gq(o)) return null;
  let s;
  return (r ?? Wl(e)).find((l) => vFn(o, l, e, void 0, s ??= S(o, e.toolAliases), n)) || null
}

function lvs(e) {
  return /^[\s*]+$/.test(e)
}

function fe(e) {
  return e.startsWith("//") && /^\/(?:\*\*\/)?\*+(?:\/\*\*)?$/.test(e.replace(/\/{2,}/g, "/"))
}
var X = [dt, Yt, gi],
  J = [ze, _r, Qr],
  de = new Map([
    [ze, {
      deny: [...J, dt, Yt],
      ask: J
    }],
    [dt, {
      deny: X,
      ask: X
    }]
  ]);

function O({
  ruleBehavior: e,
  ruleValue: {
    toolName: o,
    ruleContent: r
  }
}, n) {
  if (r === void 0 || e === "allow") return !1;
  return o === Me ? n === Me && lvs(r) : fe(r) && (de.get(o)?.[e] ?? []).includes(n)
}

function vFn(e, o, r, n, s, l = !1) {
  if (o.ruleValue.ruleContent === void 0) return X_(r, e, o, n, s, l);
  let {
    name: m,
    aliasSources: a
  } = s ?? S(e, r.toolAliases), u = o.ruleValue.toolName === m, f = Ntn(o);
  return a().some((c) => c !== m && (f && O(o, c) || u && O(I(c, o), c)))
}

function I(e, o) {
  return {
    ...o,
    ruleValue: {
      ...o.ruleValue,
      toolName: e
    }
  }
}

function dvs(e) {
  if (dS(e)) return !0;
  let o = gr(e);
  return o !== null && o.toolName === void 0
}

function EFn(e, o) {
  let r = new Set,
    n = new Set,
    s = new Set,
    l = [],
    m = [];
  for (let a of o) {
    let {
      toolName: u,
      ruleContent: f
    } = a.ruleValue;
    if (f !== void 0) {
      if (Object.entries(e.toolAliases ?? {}).some(([d, p]) => O(a, d) || p === u && O(I(d, a), d))) m.push(a);
      continue
    }
    if (dvs(u) || fUs(u)) {
      l.push({
        rule: a,
        ruleName: C(a)
      });
      continue
    }
    if (Z(a)) s.add(u);
    n.add(u);
    let c = Ntn(a) ? Upe(u, e.toolAliases) : [u];
    for (let d of c) r.add(d)
  }
  return {
    names: r,
    parentNames: n,
    mcpServerNames: s,
    patterns: l,
    withContent: m
  }
}

function DCe(e) {
  let o = Wl(e);
  return {
    rules: o,
    index: EFn(e, o)
  }
}

function QLe(e, o, r) {
  if (Gq(r) || o.names.size === 0 && o.patterns.length === 0 && o.withContent.length === 0) return !1;
  let n = S(r, e.toolAliases);
  if (o.names.has(n.name)) return !0;
  if (n.otherDenyOrAskReads().some((a) => o.names.has(a.name) || a.mcpServerRuleNames().some((u) => o.mcpServerNames.has(u)))) return !0;
  let s = "familyParentToolName" in r ? r.familyParentToolName : void 0;
  if (s !== void 0 && r.mcpInfo === void 0 && o.parentNames.has(s)) return !0;
  let l = "aliasSkillToolNames" in r ? r.aliasSkillToolNames : void 0;
  if (l?.some((a) => o.names.has(a))) return !0;
  let m = "packagingAliasSkillToolNames" in r ? r.packagingAliasSkillToolNames : void 0;
  if (m?.some((a) => o.names.has(a))) return !0;
  if (o.mcpServerNames.size > 0 && (n.mcpServerRuleNames().some((a) => o.mcpServerNames.has(a)) || [...l ?? [], ...m ?? []].some((a) => OHe({
      name: a
    }).some((u) => o.mcpServerNames.has(u))))) return !0;
  return o.patterns.some(({
    rule: a,
    ruleName: u
  }) => vFn(r, a, e, u, n)) || n.aliasSources().length > 0 && o.withContent.some((a) => vFn(r, a, e, void 0, n))
}

function Jji(e, o) {
  if (!Gq(o)) return !1;
  if (_D(e).some((n) => n.ruleValue.toolName === o.name)) return !1;
  return Wl(e).some((n) => uht(o, n, {
    proxyExpansion: Ntn(n),
    globMatching: !0,
    toolAliases: e.toolAliases
  }))
}

function bee(e, o, r) {
  return Wl(e).find((n) => n.ruleValue.toolName === o && n.ruleValue.ruleContent === r) || null
}

function gTr(e, o, r) {
  return Vc(e).find((n) => n.ruleValue.toolName === o && n.ruleValue.ruleContent === r) || null
}

function Qji(e, o, r) {
  let n = new Set;
  for (let s of Wl(o))
    if (s.ruleValue.toolName === r && s.ruleValue.ruleContent !== void 0) n.add(s.ruleValue.ruleContent);
  return e.filter((s) => !n.has(s.agentType))
}

function dl(e, o, r) {
  if (Gq(o)) return null;
  let n;
  return (r ?? Vc(e, Q(o))).find((s) => vFn(o, s, e, void 0, n ??= S(o, e.toolAliases))) || null
}

function pe(e) {
  if (e === void 0 || e === null) return null;
  if (typeof e !== "object") return String(e);
  return null
}

function cvs(e) {
  let o = e.indexOf(":");
  if (o <= 0) return null;
  let r = e.slice(0, o).trim(),
    n = e.slice(o + 1).trim();
  return r === "" || n === "" ? null : {
    key: r,
    expected: n
  }
}

function bNt(e, o) {
  return `Permission to use ${e} with ${o.ruleValue.ruleContent} has been denied.`
}

function Re(e) {
  let o = e.replace(/[^a-zA-Z0-9_*-]/g, "_");
  return {
    pattern: o,
    collapsed: o.replace(/_+/g, "_").replace(/_$/, "").replace(/_?\*/g, "*")
  }
}
var Te = new Set([K2, iU, zg, FF]);

function Wf(e, o, r, n) {
  let s = fi(o),
    l = [..."aliasSkillToolNames" in o ? o.aliasSkillToolNames ?? [] : [], ..."packagingAliasSkillToolNames" in o ? o.packagingAliasSkillToolNames ?? [] : []],
    m = [
      [s, !1], ...PHe(o).map((u) => [u, !1]), ...o.mcpInfo !== void 0 && NR() ? (n === "deny" ? Wl(e) : Vc(e)).map((u) => u.ruleValue.toolName).filter((u) => {
        let f = CGn(u, s);
        return f !== void 0 && f.rule === f.row
      }).map((u) => [u, !1]) : [], ...l.map((u) => [u, !1]), ...h5(s, e.toolAliases).map((u) => [u, !0])
    ];
  for (let [u, f] of m) {
    let c = F7e(e, u, n).filter((d) => !f || Ntn(d));
    for (let [d = "", p] of new Map(c.map((T) => [T.ruleValue.ruleContent, T]))) {
      let T = cvs(d);
      if (T === null) continue;
      let {
        key: E,
        expected: R
      } = T;
      if (E === o.ruleContentField) continue;
      let _ = E === z_e && !Object.hasOwn(r, E) && Object.hasOwn(r, cr) ? cr : E;
      if (!Object.hasOwn(r, _)) continue;
      let g = pe(r[_]);
      if (g === null) continue;
      if (wC(R, g.trim())) return p;
      if (_ === "server" && Te.has(u)) {
        let {
          pattern: N,
          collapsed: h
        } = Re(R);
        if ([g.trim(), g].map(bn).flatMap((P) => [P, M5(P, "_").replace(/^_+/, "")]).some((P) => R.startsWith(K4) ? wC(h, P) : wC(N, P) || R.includes("*") && !N.startsWith("_") && `${P}_`.startsWith(rG) && wC(h, P))) return p
      }
      if (_ === cr && (R.includes("*") ? wC(R.toLowerCase(), g.trim()) : que(R, g.trim()))) return p;
      if (s === $r && _ === "skill") {
        let N = g.trim(),
          h = QRo(N);
        if (h !== void 0) {
          if ((!R.includes("*") || Hp()) && wC(R, h)) return p
        }
      }
    }
  }
  let a = "familyParentToolName" in o ? o.familyParentToolName : void 0;
  if (a !== void 0 && o.mcpInfo === void 0 && o.toFamilyParentInput !== void 0) return Wf(e, {
    name: a,
    ruleContentField: o.ruleContentField
  }, o.toFamilyParentInput(r), n);
  return null
}

function Iue(e, o, r) {
  return bE(e, fi(o), r)
}

function bE(e, o, r) {
  let n = new Map;
  for (let s of F7e(e, o, r))
    if (s.ruleValue.ruleContent !== void 0) n.set(s.ruleValue.ruleContent, s);
  return n
}

function uvs(e, o, r) {
  return F7e(e, fi(o), r).filter((n) => me[n.source])
}

function F7e(e, o, r) {
  let n = [];
  switch (r) {
    case "allow":
      n = _D(e);
      break;
    case "deny":
      n = Wl(e);
      break;
    case "ask":
      n = Vc(e);
      break
  }
  let s = [];
  for (let l of n)
    if (l.ruleValue.toolName === o && l.ruleValue.ruleContent !== void 0 && l.ruleBehavior === r && !(r === "allow" && aU(l.ruleValue))) s.push(l);
  return s
}

function Zji(e, o) {
  return _D(e).find(({
    ruleValue: r
  }) => r.toolName === o && aU(r)) ?? null
}
export {
  iU,
  zji,
  Gji,
  wFn,
  YLe,
  lTr,
  ivs,
  Mtn,
  yee,
  zq,
  Uho,
  wX,
  dTr,
  cTr,
  K2,
  Vji,
  Kji,
  Bho,
  qji,
  Dtn,
  kFn,
  XLe,
  uTr,
  $Ge,
  jho,
  Yji,
  fTr,
  avs,
  Who,
  zho,
  Gho,
  pTr,
  Vho,
  Ica,
  _se,
  Ltn,
  cht,
  _ee,
  mTr,
  hTr,
  bse,
  JLe,
  Gq,
  _D,
  N7e,
  Wl,
  Vc,
  uht,
  Xji,
  q2,
  Ntn,
  X_,
  lo,
  lvs,
  vFn,
  dvs,
  EFn,
  DCe,
  QLe,
  Jji,
  bee,
  gTr,
  Qji,
  dl,
  cvs,
  bNt,
  Wf,
  Iue,
  bE,
  uvs,
  F7e,
  Zji
};
