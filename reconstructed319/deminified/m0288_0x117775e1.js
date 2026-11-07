// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { H, Po, er, e_ } from "B:/~BUN/root/chunk-game8aqv.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { M5 } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { I_, Hp } from "B:/~BUN/root/chunk-65j2302z.js";
import { hVe, gi, Qr, _r, Gy, pn, v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { yi } from "B:/~BUN/root/chunk-6n5g80b8.js";
import { Yl } from "B:/~BUN/root/chunk-ja520myc.js";
import { RDr } from "B:/~BUN/root/chunk-grwykqvw.js";
import { Rf, _Ji } from "B:/~BUN/root/chunk-q8eknvfd.js";
import { QRo, Pi, gM, di } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { FR } from "B:/~BUN/root/chunk-begxsvab.js";
import { Xl, Upe, h5, dS, wC, dqe, HNr, yr, mn } from "B:/~BUN/root/chunk-44q965xg.js";
import { NR, fUs, CGn, HA, gr, to, br, fi, PHe, XAo, OHe, pUs, sSt } from "B:/~BUN/root/chunk-sy1h8mf0.js";
import { nFs } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { yo } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { pXi } from "B:/~BUN/root/chunk-dm4rzkqc.js";
import { dt, Yt, Me } from "B:/~BUN/root/chunk-9kvvd0hy.js";
import { cr, z_e, que } from "B:/~BUN/root/chunk-wxhfn3za.js";
import { co } from "B:/~BUN/root/chunk-tjfmeakx.js";
import { uf, FF } from "B:/~BUN/root/chunk-v29ccgfa.js";
import { ft } from "B:/~BUN/root/chunk-2x2z0t2k.js";
import { Ov } from "B:/~BUN/root/chunk-2r9r3hfm.js";
import { aU, m_ } from "B:/~BUN/root/chunk-21s8ygah.js";
import { Ftn } from "B:/~BUN/root/chunk-e99p2x0p.js";
import { Vn } from "B:/~BUN/root/chunk-tacrdmts.js";
import { zg } from "B:/~BUN/root/chunk-hdtrfvjw.js";
import { Fs } from "B:/~BUN/root/chunk-fkcdzerj.js";
import { $r } from "B:/~BUN/root/chunk-xbnyqyft.js";
import { ze } from "B:/~BUN/root/chunk-xwzn0yxv.js";
import { kt } from "B:/~BUN/root/chunk-86hj8bna.js";
import { K4, rG, bn } from "B:/~BUN/root/chunk-2631cdbp.js";
import { he } from "B:/~BUN/root/chunk-fet34rqr.js";
var ee = "bot_protected_tengu_atomic_magpie",
  oe = new Set(["session", "cliArg"]),
  x = new W(() => ({
    value: !1
  }));
function wFn(e, o) {
  if (e === Rf && !Yl(o) && "url" in o && typeof o.url === "string" && RDr(o.url)) Po(x).value = !0;
}
function YLe(e) {
  if (e !== Vn && e !== uf || !(Po(x).value || i.CLAUDE_CODE_PROJECTS_SESSION || hVe(e_()))) return !1;
  let o = pn(ee, !1);
  return !(o.value === !0 && o.source === "payload" && !Gy());
}
function A(e) {
  let o = typeof e !== "string",
    r = !o && dS(e);
  return [Vn, uf].some(item => (o || r || Xl(e) === item) && YLe(item) && (!r || dqe(e, item)));
}
function k(e, o) {
  return !oe.has(e) && YLe(o);
}
function L() {
  return YLe(Vn) || YLe(uf);
}
function D(e) {
  if (typeof e !== "object" || e === null) return !0;
  if (e.type !== "addRules" && e.type !== "replaceRules" && e.type !== "removeRules") return !1;
  let o = "rules" in e ? e.rules : void 0;
  return !Array.isArray(o) || o.some(item => typeof item !== "object" || item === null || !("toolName" in item) || typeof item.toolName !== "string" || "ruleContent" in item && item.ruleContent !== void 0 && typeof item.ruleContent !== "string");
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
      a = c => mn(yr(c)),
      u = new Set(e.rules.map(item => a(mn(item)))),
      f = m.map(item => yr(item)).filter(item => o(item.toolName) && !u.has(a(mn(item))));
    return f.length === 0 ? void 0 : [{
      ...e,
      rules: [...e.rules, ...f]
    }];
  }
  let rules = e.rules.filter(item => !o(item.toolName));
  if (rules.length === e.rules.length) return;
  return rules.length === 0 ? [] : [{
    ...e,
    rules: rules
  }];
}
function lTr(e, o) {
  if (!L()) return e;
  return ivs(e, A, o);
}
function ivs(e, o, r) {
  let n = !1,
    s = e.flatMap(item => {
      if (D(item)) return n = !0, [];
      let m = U(item, o, r);
      if (m !== void 0) return n = !0, m;
      if (item.type !== "addRules" && item.type !== "replaceRules" || item.behavior !== "allow") return [item];
      let rules_2 = item.rules.filter(item => !o(item.toolName));
      if (rules_2.length === item.rules.length) return [item];
      return n = !0, rules_2.length === 0 ? [] : [{
        ...item,
        rules: rules_2
      }];
    });
  return n ? s : e;
}
function Mtn(e, o) {
  let toolName = fi(e);
  if (toolName === uf) return {
    toolName: toolName
  };
  let n = typeof o === "object" && o !== null && "url" in o ? o.url : void 0;
  if (toolName !== Vn || typeof n !== "string") return;
  try {
    let hostname = new URL(n).hostname;
    return hostname.includes("*") ? void 0 : {
      toolName: toolName,
      ruleContent: `domain:${hostname}`
    };
  } catch {
    return;
  }
}
function yee(e, o, r) {
  if (!L()) return e;
  let n = !1,
    s = e.flatMap(item => {
      if (D(item)) return n = !0, [];
      let m = U(item, A, r);
      if (m !== void 0) return n = !0, m;
      if (item.type !== "addRules" && item.type !== "replaceRules" || item.behavior !== "allow") return [item];
      let a = item.rules.filter(item => A(item.toolName));
      if (a.length === 0) return [item];
      n = !0;
      let rules_3 = item.rules.filter(item => !A(item.toolName)),
        rules_4 = item.type === "addRules" && o !== void 0 ? a.filter(item => Xl(item.toolName) === o.toolName && item.ruleContent === o.ruleContent) : [];
      return [...(rules_3.length > 0 ? [{
        ...item,
        rules: rules_3
      }] : []), ...(rules_4.length > 0 ? [{
        ...item,
        destination: "session",
        rules: rules_4
      }] : [])];
    });
  return n ? s : e;
}
var re = "tengu_steady_finch";
function zq() {
  return Uho() || pXi()?.convertedSkillsAsPlugins === !0;
}
function Uho() {
  return v(re, !1) === !0;
}
function wX(e) {
  return e !== void 0 && di(gM(e)) === Pi && zq();
}
function dTr(e) {
  return Hp() || !e && zq() && !er();
}
function cTr() {
  return Hp() && zq();
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
  return `Claude requested permissions to use ${e}, but you haven't granted it yet.`;
}
var ne = new Set(),
  weakMap = new WeakMap(),
  weakMap_2 = new WeakMap();
function qji(e, o) {
  weakMap_2.set(e, o);
}
function Dtn(toolName_2) {
  return {
    source: "mcpServerPolicy",
    ruleBehavior: "ask",
    ruleValue: {
      toolName: toolName_2
    }
  };
}
function kFn(e, o) {
  return {
    behavior: "ask",
    message: Bho(e.name),
    decisionReason: {
      type: "rule",
      rule: Dtn(o)
    }
  };
}
function XLe(e, o) {
  let mcpPolicyAsksLiftedInAcceptEdits = e.mcpPolicyAsksLiftedInAcceptEdits,
    n = se(e, o);
  if (mcpPolicyAsksLiftedInAcceptEdits === void 0 && n === void 0 || e.mode !== "acceptEdits" || (e.modeBeforeRewrite ?? "acceptEdits") !== "acceptEdits" || i.CLAUDE_CODE_EVAL_CONFINED) return ne;
  let s = weakMap.get(e);
  if (s === void 0) s = V(e, new Set(mcpPolicyAsksLiftedInAcceptEdits)), weakMap.set(e, s);
  return n === void 0 ? s : new Set([...s, ...V(e, new Set([n]))]);
}
function se(e, o) {
  let r = o && weakMap_2.get(o);
  return r !== void 0 && e.mcpPolicyFileAsksLiftedInAcceptEdits?.includes(r) ? r : void 0;
}
function V(e, o) {
  let r = Object.keys(e.mcpPermissionModeOverrides).map(to);
  return new Set(e.alwaysAskRules.mcpServerPolicy?.filter(n => o.has(n) && gr(n)?.toolName !== void 0 && !r.some(item => n.startsWith(item))));
}
var G = he(new Set(), e => e.clear());
function uTr(e, o) {
  let toolName_3 = e.toolName;
  if (G.has(toolName_3)) return;
  G.add(toolName_3), t(o.mcpInfo ? `Allow rule "${toolName_3}" does not allow the tools named "${to(o.mcpInfo.serverName)}<tool>": they belong to another MCP server than the rule names. To allow them, use "${to(o.mcpInfo.serverName)}*".` : `Allow rule "${toolName_3}" does not allow "${o.name}": the name reads as more than one MCP server's. To allow it, use the tool's full name.`, {
    level: "warn"
  });
}
var te = "tengu_greedy_shore";
function $Ge() {
  return v(te, !1) === !0;
}
var ie = new W(() => new Set());
function jho(e, o) {
  for (let r of o) M().add(br(e, r));
}
function w(e) {
  if (!e.startsWith("mcp__")) return !1;
  for (let name of M()) if (e === name || sSt(e, {
    name: name
  })) return !0;
  return !1;
}
function Yji() {
  return M().size > 0;
}
function M() {
  return ie.of(H().host);
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
  return pTr(o, Y);
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
          if (!c.includes("=") && u + 1 < a.length && !a[u + 1].startsWith("-")) u++;
        }
        let f = a[u];
        if (f === void 0) {
          if ((s === "curl" || s === "wget") && a.some(item => item.includes("://"))) continue;
          return !0;
        }
        if (m?.has(f)) return !0;
        continue;
      }
      if (l.startsWith("-")) {
        let m = l.slice(0, -1);
        if (!(/^python[\d.]*$/.test(s) && /^-m\s+\w+\.[\w.]+(\s*:|\s+)$/.test(m))) return !0;
      }
    }
  }
  return !1;
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
      m = l === -1 ? `${s}.exe` : `${s.slice(0, l)}.exe${s.slice(l)}`;
    if (r === m) return !0;
    if (r === `${m}:*`) return !0;
    if (r === `${m}*`) return !0;
    if (r === `${m} *`) return !0;
    if (r.startsWith(`${m} -`) && r.endsWith("*")) return !0;
  }
  return !1;
}
function Ica(e, o) {
  return Xl(e) === ft;
}
function ae(e) {
  return e === Fs;
}
class q {
  verdicts = new Map();
  lookup(e) {
    return this.verdicts.get(e);
  }
  remember(e, o) {
    this.verdicts.set(e, o);
  }
  reset() {
    this.verdicts.clear();
  }
}
var z = new q();
function _se() {
  return I_() || nFs();
}
function Ltn(e, o) {
  let r = `${e}\x00${o ?? ""}`,
    n = z.lookup(r);
  if (n !== void 0) return n;
  let s = Gho(e, o) || Vho(e, o) || Ica(e, o) || ae(e) || e === import.meta.require("B:/~BUN/root/chunk-mh92bc27.js").APPIFACT_REPL_TOOL_NAME;
  return z.remember(r, s), s;
}
function cht(e) {
  let o = fi(e);
  return w(o) || FR() && e.mcpInfo === void 0 && e.name === co || I_() && (o.startsWith(HA) || (e.name === zg || e.name === iU) && $Ge() || Ltn(e.name, void 0));
}
function _ee(e, o) {
  if (FR() && e === co) return !0;
  if ((e === Me || e === kt) && _se()) return !0;
  if (w(e)) return !0;
  return Ltn(e, o);
}
function mTr(e) {
  if (e === Me || e === kt) return _se() ? void 0 : e;
  if (Ov(e) || _ee(e, void 0) || hTr(e)) return;
  return e === Yt || e === gi ? dt : e;
}
var ue = new Set(Array.from(_Ji, e => br(Rf, e)));
function hTr(e) {
  return ue.has(e);
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
  return !e.mcpInfo && ce.has(e.name);
}
function _D(e, o) {
  if (yo(e.mode, e.servedCall === !0)) {
    let l = i.CLAUDE_CODE_EVAL_CONFINED ? {
        cliArg: e.alwaysAllowRules.cliArg
      } : e.alwaysAllowRules,
      m = [];
    for (let source of bse) {
      let u = l[source];
      if (u === void 0) continue;
      for (let f of u) {
        let ruleValue = m_(f, "allow");
        if (_ee(ruleValue.toolName, ruleValue.ruleContent)) continue;
        if (hTr(ruleValue.toolName)) continue;
        if (k(source, ruleValue.toolName)) continue;
        m.push({
          source: source,
          ruleBehavior: "allow",
          ruleValue: ruleValue
        });
      }
    }
    return m;
  }
  if (i.CLAUDE_CODE_EVAL_CONFINED) return N7e({
    cliArg: e.alwaysAllowRules.cliArg
  }, "allow");
  let r = XLe(e, o),
    n = N7e(r.size === 0 ? e.alwaysAllowRules : {
      ...e.alwaysAllowRules,
      mcpServerPolicy: [...(e.alwaysAllowRules.mcpServerPolicy ?? []), ...r]
    }, "allow"),
    s;
  for (let [l, m] of n.entries()) if (k(m.source, m.ruleValue.toolName)) s ??= n.slice(0, l);else s?.push(m);
  return s ?? n;
}
function N7e(e, ruleBehavior) {
  let r = [];
  for (let source_2 of bse) {
    let s = e[source_2];
    if (s === void 0) continue;
    for (let l of s) r.push({
      source: source_2,
      ruleBehavior: ruleBehavior,
      ruleValue: m_(l, ruleBehavior)
    });
  }
  return r;
}
function Wl(e) {
  return N7e(e.alwaysDenyRules, "deny");
}
function Vc(e, o) {
  let r = XLe(e, o);
  return N7e(r.size === 0 ? e.alwaysAskRules : {
    ...e.alwaysAskRules,
    mcpServerPolicy: e.alwaysAskRules.mcpServerPolicy?.filter(n => !r.has(n))
  }, "ask");
}
function uht(e, o, r = {}) {
  if (o.ruleValue.ruleContent !== void 0) return !1;
  return y(e, o, r);
}
function Xji(e) {
  let o = e.filter(item => item.ruleValue.ruleContent === void 0).map(r => ({
    rule: r,
    ruleName: C(r)
  }));
  return r => {
    let n = S(r, void 0);
    return o.filter(({
      rule: rule,
      ruleName: ruleName
    }) => y(r, rule, {}, ruleName, n)).map(({
      rule: rule_2
    }) => rule_2);
  };
}
function y(e, o, {
  proxyExpansion = !1,
  globMatching = !1,
  toolAliases: toolAliases
} = {}, l = C(o), m = S(e, toolAliases)) {
  if (o.ruleBehavior !== "allow" && e.mcpInfo !== void 0) {
    let d = {
      proxyExpansion: proxyExpansion,
      globMatching: globMatching,
      toolAliases: toolAliases
    };
    if (m.otherDenyOrAskReads().some(item => y({
      name: item.name
    }, o, d, l, item))) return !0;
    let p = CGn(o.ruleValue.toolName, m.name);
    if (p !== void 0 && y({
      name: p.row
    }, I(p.rule, o), d)) return !0;
  }
  let a = m.name;
  if (o.ruleValue.toolName === a) return !0;
  let u = "familyParentToolName" in e ? e.familyParentToolName : void 0;
  if (u !== void 0 && e.mcpInfo === void 0 && o.ruleValue.toolName === u) return !0;
  if (proxyExpansion && Upe(o.ruleValue.toolName, toolAliases).includes(a)) return !0;
  let {
    matchesGlob: matchesGlob
  } = l;
  if (globMatching && matchesGlob !== void 0 && (matchesGlob(a) || proxyExpansion && m.aliasSources().some(matchesGlob))) return !0;
  let c = l.coversMcpTool(m.mcpInfo());
  if (o.ruleBehavior === "allow") {
    if (!c) return !1;
    if (pUs(o.ruleValue.toolName, e)) return !0;
    return uTr(o.ruleValue, e), !1;
  }
  return c || Z(o) && m.mcpServerRuleNames().includes(o.ruleValue.toolName);
}
function Z({
  source: source_3,
  ruleValue: ruleValue_2
}) {
  return source_3 !== "mcpServerPolicy" && ruleValue_2.toolName.startsWith(HA);
}
function C({
  ruleValue: {
    toolName: toolName_4
  }
}) {
  let o, r;
  return {
    matchesGlob: dS(toolName_4) ? n => (o ??= HNr(toolName_4))(n) : void 0,
    coversMcpTool: n => (r ??= XAo(toolName_4))(n)
  };
}
function S(e, o) {
  let name_2 = fi(e),
    n,
    s,
    l,
    m;
  return {
    name: name_2,
    mcpInfo: () => m === void 0 ? m = gr(name_2) : m,
    aliasSources: () => n ??= h5(name_2, o),
    mcpServerRuleNames: () => s ??= OHe(e),
    otherDenyOrAskReads: () => l ??= PHe(e).map(a => S({
      name: a
    }, o))
  };
}
function Q(e) {
  return e.mcpInfo === void 0 ? void 0 : e.checkPermissions;
}
function q2(e, o) {
  return _D(e, Q(o)).find(item => uht(o, item)) || null;
}
function Ntn(e) {
  return e.source !== "cliArg" && e.source !== "toolsNarrowing";
}
function X_(e, o, r, n = C(r), s, l = !1) {
  let m = {
    proxyExpansion: Ntn(r),
    globMatching: !0,
    toolAliases: e.toolAliases
  };
  if (y(o, r, m, n, s)) return !0;
  if (("aliasSkillToolNames" in o ? o.aliasSkillToolNames : void 0)?.some(name_3 => y({
    name: name_3
  }, r, m, n))) return !0;
  let u = "packagingAliasSkillToolNames" in o ? o.packagingAliasSkillToolNames : void 0;
  if (u === void 0 || dS(r.ruleValue.toolName) && !dTr(l)) return !1;
  return u.some(f => y({
    name: f
  }, r, m, n));
}
function lo(e, o, r, n = !1) {
  if (Gq(o)) return null;
  let s;
  return (r ?? Wl(e)).find(item => vFn(o, item, e, void 0, s ??= S(o, e.toolAliases), n)) || null;
}
function lvs(e) {
  return /^[\s*]+$/.test(e);
}
function fe(e) {
  return e.startsWith("//") && /^\/(?:\*\*\/)?\*+(?:\/\*\*)?$/.test(e.replace(/\/{2,}/g, "/"));
}
var X = [dt, Yt, gi],
  ask = [ze, _r, Qr],
  de = new Map([[ze, {
    deny: [...ask, dt, Yt],
    ask: ask
  }], [dt, {
    deny: X,
    ask: X
  }]]);
function O({
  ruleBehavior: ruleBehavior_2,
  ruleValue: {
    toolName: toolName_5,
    ruleContent: ruleContent
  }
}, n) {
  if (ruleContent === void 0 || ruleBehavior_2 === "allow") return !1;
  return toolName_5 === Me ? n === Me && lvs(ruleContent) : fe(ruleContent) && (de.get(toolName_5)?.[ruleBehavior_2] ?? []).includes(n);
}
function vFn(e, o, r, n, s, l = !1) {
  if (o.ruleValue.ruleContent === void 0) return X_(r, e, o, n, s, l);
  let {
      name: name_4,
      aliasSources: aliasSources
    } = s ?? S(e, r.toolAliases),
    u = o.ruleValue.toolName === name_4,
    f = Ntn(o);
  return aliasSources().some(item => item !== name_4 && (f && O(o, item) || u && O(I(item, o), item)));
}
function I(toolName_6, o) {
  return {
    ...o,
    ruleValue: {
      ...o.ruleValue,
      toolName: toolName_6
    }
  };
}
function dvs(e) {
  if (dS(e)) return !0;
  let o = gr(e);
  return o !== null && o.toolName === void 0;
}
function EFn(e, o) {
  let names = new Set(),
    parentNames = new Set(),
    mcpServerNames = new Set(),
    patterns = [],
    withContent = [];
  for (let rule_3 of o) {
    let {
      toolName: toolName_7,
      ruleContent: ruleContent_2
    } = rule_3.ruleValue;
    if (ruleContent_2 !== void 0) {
      if (Object.entries(e.toolAliases ?? {}).some(([d, p]) => O(rule_3, d) || p === toolName_7 && O(I(d, rule_3), d))) withContent.push(rule_3);
      continue;
    }
    if (dvs(toolName_7) || fUs(toolName_7)) {
      patterns.push({
        rule: rule_3,
        ruleName: C(rule_3)
      });
      continue;
    }
    if (Z(rule_3)) mcpServerNames.add(toolName_7);
    parentNames.add(toolName_7);
    let c = Ntn(rule_3) ? Upe(toolName_7, e.toolAliases) : [toolName_7];
    for (let d of c) names.add(d);
  }
  return {
    names: names,
    parentNames: parentNames,
    mcpServerNames: mcpServerNames,
    patterns: patterns,
    withContent: withContent
  };
}
function DCe(e) {
  let rules_5 = Wl(e);
  return {
    rules: rules_5,
    index: EFn(e, rules_5)
  };
}
function QLe(e, o, r) {
  if (Gq(r) || o.names.size === 0 && o.patterns.length === 0 && o.withContent.length === 0) return !1;
  let n = S(r, e.toolAliases);
  if (o.names.has(n.name)) return !0;
  if (n.otherDenyOrAskReads().some(item => o.names.has(item.name) || item.mcpServerRuleNames().some(item => o.mcpServerNames.has(item)))) return !0;
  let s = "familyParentToolName" in r ? r.familyParentToolName : void 0;
  if (s !== void 0 && r.mcpInfo === void 0 && o.parentNames.has(s)) return !0;
  let l = "aliasSkillToolNames" in r ? r.aliasSkillToolNames : void 0;
  if (l?.some(a => o.names.has(a))) return !0;
  let m = "packagingAliasSkillToolNames" in r ? r.packagingAliasSkillToolNames : void 0;
  if (m?.some(a => o.names.has(a))) return !0;
  if (o.mcpServerNames.size > 0 && (n.mcpServerRuleNames().some(item => o.mcpServerNames.has(item)) || [...(l ?? []), ...(m ?? [])].some(a => OHe({
    name: a
  }).some(item => o.mcpServerNames.has(item))))) return !0;
  return o.patterns.some(({
    rule: rule_4,
    ruleName: ruleName_2
  }) => vFn(r, rule_4, e, ruleName_2, n)) || n.aliasSources().length > 0 && o.withContent.some(item => vFn(r, item, e, void 0, n));
}
function Jji(e, o) {
  if (!Gq(o)) return !1;
  if (_D(e).some(item => item.ruleValue.toolName === o.name)) return !1;
  return Wl(e).some(item => uht(o, item, {
    proxyExpansion: Ntn(item),
    globMatching: !0,
    toolAliases: e.toolAliases
  }));
}
function bee(e, o, r) {
  return Wl(e).find(item => item.ruleValue.toolName === o && item.ruleValue.ruleContent === r) || null;
}
function gTr(e, o, r) {
  return Vc(e).find(item => item.ruleValue.toolName === o && item.ruleValue.ruleContent === r) || null;
}
function Qji(e, o, r) {
  let n = new Set();
  for (let s of Wl(o)) if (s.ruleValue.toolName === r && s.ruleValue.ruleContent !== void 0) n.add(s.ruleValue.ruleContent);
  return e.filter(item => !n.has(item.agentType));
}
function dl(e, o, r) {
  if (Gq(o)) return null;
  let n;
  return (r ?? Vc(e, Q(o))).find(item => vFn(o, item, e, void 0, n ??= S(o, e.toolAliases))) || null;
}
function pe(e) {
  if (e === void 0 || e === null) return null;
  if (typeof e !== "object") return String(e);
  return null;
}
function cvs(e) {
  let o = e.indexOf(":");
  if (o <= 0) return null;
  let key = e.slice(0, o).trim(),
    expected = e.slice(o + 1).trim();
  return key === "" || expected === "" ? null : {
    key: key,
    expected: expected
  };
}
function bNt(e, o) {
  return `Permission to use ${e} with ${o.ruleValue.ruleContent} has been denied.`;
}
function Re(e) {
  let pattern = e.replace(/[^a-zA-Z0-9_*-]/g, "_");
  return {
    pattern: pattern,
    collapsed: pattern.replace(/_+/g, "_").replace(/_$/, "").replace(/_?\*/g, "*")
  };
}
var Te = new Set([K2, iU, zg, FF]);
function Wf(e, o, r, n) {
  let s = fi(o),
    l = [...("aliasSkillToolNames" in o ? o.aliasSkillToolNames ?? [] : []), ...("packagingAliasSkillToolNames" in o ? o.packagingAliasSkillToolNames ?? [] : [])],
    m = [[s, !1], ...PHe(o).map(item => [item, !1]), ...(o.mcpInfo !== void 0 && NR() ? (n === "deny" ? Wl(e) : Vc(e)).map(item => item.ruleValue.toolName).filter(item => {
      let f = CGn(item, s);
      return f !== void 0 && f.rule === f.row;
    }).map(item => [item, !1]) : []), ...l.map(item => [item, !1]), ...h5(s, e.toolAliases).map(item => [item, !0])];
  for (let [u, f] of m) {
    let c = F7e(e, u, n).filter(item => !f || Ntn(item));
    for (let [d = "", p] of new Map(c.map(item => [item.ruleValue.ruleContent, item]))) {
      let T = cvs(d);
      if (T === null) continue;
      let {
        key: key_2,
        expected: expected_2
      } = T;
      if (key_2 === o.ruleContentField) continue;
      let _ = key_2 === z_e && !Object.hasOwn(r, key_2) && Object.hasOwn(r, cr) ? cr : key_2;
      if (!Object.hasOwn(r, _)) continue;
      let g = pe(r[_]);
      if (g === null) continue;
      if (wC(expected_2, g.trim())) return p;
      if (_ === "server" && Te.has(u)) {
        let {
          pattern: pattern_2,
          collapsed: collapsed
        } = Re(expected_2);
        if ([g.trim(), g].map(bn).flatMap(item => [item, M5(item, "_").replace(/^_+/, "")]).some(item => expected_2.startsWith(K4) ? wC(collapsed, item) : wC(pattern_2, item) || expected_2.includes("*") && !pattern_2.startsWith("_") && `${item}_`.startsWith(rG) && wC(collapsed, item))) return p;
      }
      if (_ === cr && (expected_2.includes("*") ? wC(expected_2.toLowerCase(), g.trim()) : que(expected_2, g.trim()))) return p;
      if (s === $r && _ === "skill") {
        let N = g.trim(),
          h = QRo(N);
        if (h !== void 0) {
          if ((!expected_2.includes("*") || Hp()) && wC(expected_2, h)) return p;
        }
      }
    }
  }
  let name_5 = "familyParentToolName" in o ? o.familyParentToolName : void 0;
  if (name_5 !== void 0 && o.mcpInfo === void 0 && o.toFamilyParentInput !== void 0) return Wf(e, {
    name: name_5,
    ruleContentField: o.ruleContentField
  }, o.toFamilyParentInput(r), n);
  return null;
}
function Iue(e, o, r) {
  return bE(e, fi(o), r);
}
function bE(e, o, r) {
  let n = new Map();
  for (let s of F7e(e, o, r)) if (s.ruleValue.ruleContent !== void 0) n.set(s.ruleValue.ruleContent, s);
  return n;
}
function uvs(e, o, r) {
  return F7e(e, fi(o), r).filter(item => me[item.source]);
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
      break;
  }
  let s = [];
  for (let l of n) if (l.ruleValue.toolName === o && l.ruleValue.ruleContent !== void 0 && l.ruleBehavior === r && !(r === "allow" && aU(l.ruleValue))) s.push(l);
  return s;
}
function Zji(e, o) {
  return _D(e).find(({
    ruleValue: ruleValue_3
  }) => ruleValue_3.toolName === o && aU(ruleValue_3)) ?? null;
}
export { iU, zji, Gji, wFn, YLe, lTr, ivs, Mtn, yee, zq, Uho, wX, dTr, cTr, K2, Vji, Kji, Bho, qji, Dtn, kFn, XLe, uTr, $Ge, jho, Yji, fTr, avs, Who, zho, Gho, pTr, Vho, Ica, _se, Ltn, cht, _ee, mTr, hTr, bse, JLe, Gq, _D, N7e, Wl, Vc, uht, Xji, q2, Ntn, X_, lo, lvs, vFn, dvs, EFn, DCe, QLe, Jji, bee, gTr, Qji, dl, cvs, bNt, Wf, Iue, bE, uvs, F7e, Zji };