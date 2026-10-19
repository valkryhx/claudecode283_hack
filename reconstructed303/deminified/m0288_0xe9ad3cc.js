// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { j, ms, Eg, Lw } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { iMe, Ji, ao, Pr, gB, En, E } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { oP, ju } from "B:/~BUN/root/chunk-gyr2a6wz.js";
import { Np, y5n } from "B:/~BUN/root/chunk-ejm0pmyj.js";
import { Ec, nVs } from "B:/~BUN/root/chunk-we0fhavr.js";
import { N$r } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { xs } from "B:/~BUN/root/chunk-6a9s3k2y.js";
import { gd, Rne, O2, nE, I2, X_t, O9n, zn, Sn } from "B:/~BUN/root/chunk-a0k8qg0d.js";
import { KHo } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { $s, dt, Kt, We, xt } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { Xu } from "B:/~BUN/root/chunk-hkc0g0wr.js";
import { ht } from "B:/~BUN/root/chunk-2fccb5hn.js";
import { go } from "B:/~BUN/root/chunk-y59h61rh.js";
import { pr } from "B:/~BUN/root/chunk-j1zjtkgf.js";
import { Ur, nIe } from "B:/~BUN/root/chunk-hdc8p5sh.js";
import { Yi } from "B:/~BUN/root/chunk-s39maerh.js";
import { Qe } from "B:/~BUN/root/chunk-5k20pvvh.js";
import { KJ, co, uo, si, Cc, PBo, N7e, OBo, NKs } from "B:/~BUN/root/chunk-b0487zs4.js";
import { He } from "B:/~BUN/root/chunk-8znbjmp4.js";
var k2n = ["mcp__Claude_Preview__", "mcp__Claude_Browser__", "mcp__remote-devices__Claude_Browser__"];
var UCo = "mcp__claude-device__chrome_",
  rke = ["mcp__claude-in-chrome__", "mcp__Claude_in_Chrome__", "mcp__remote-devices__claude-in-chrome__", "mcp__remote-devices__Claude_in_Chrome__", "mcp__claude-device__chrome_", ...k2n];
function k(e) {
  if (!e.startsWith("mcp__claude-device__chrome_")) return null;
  let n = e.slice(27);
  return n === "" || n.startsWith("_") || n.includes("__") ? null : n;
}
function BCo(e) {
  let n = k(e);
  return n === null ? e : "mcp__claude-in-chrome__" + n;
}
function iDs(e, n) {
  let o = k(e);
  return o !== null && n === "chrome_" + o ? o : n;
}
var regExp = new RegExp("(?<![\\w-])mcp__claude-device__chrome_[\\w-]*", "g");
function Yxr(e) {
  return e.replace(regExp, n => n === "mcp__claude-device__chrome_" ? "mcp__claude-in-chrome__" : BCo(n));
}
function FC(e) {
  return rke.some(item => e.startsWith(item));
}
function Pon(e) {
  return k2n.some(item => e.startsWith(item));
}
var Q = "bot_protected_tengu_atomic_magpie",
  Z = new Set(["session", "cliArg"]),
  v = new z(() => ({
    value: !1
  }));
function xon(e, n) {
  if (e === Ec && !Np(n) && "url" in n && typeof n.url === "string" && y5n(n.url)) ms(v).value = !0;
}
function pae(e) {
  if (e !== pr && e !== Xu || !(ms(v).value || a.CLAUDE_CODE_PROJECTS_SESSION || iMe(Lw()))) return !1;
  let n = En(Q, !1);
  return !(n.value === !0 && n.source === "payload" && !gB());
}
function R(e) {
  let n = typeof e !== "string",
    o = !n && nE(e);
  return [pr, Xu].some(item => (n || o || gd(e) === item) && pae(item) && (!o || X_t(e, item)));
}
function C(e, n) {
  return !Z.has(e) && pae(n);
}
function L() {
  return pae(pr) || pae(Xu);
}
function M(e) {
  if (typeof e !== "object" || e === null) return !0;
  if (e.type !== "addRules" && e.type !== "replaceRules" && e.type !== "removeRules") return !1;
  let n = "rules" in e ? e.rules : void 0;
  return !Array.isArray(n) || n.some(item => typeof item !== "object" || item === null || !("toolName" in item) || typeof item.toolName !== "string" || "ruleContent" in item && item.ruleContent !== void 0 && typeof item.ruleContent !== "string");
}
function D(e, n) {
  if (e.type !== "removeRules" && e.type !== "replaceRules" || e.behavior === "allow") return;
  if (e.type === "replaceRules") {
    if (n === void 0) return e.rules.length === 0 ? [] : [{
      type: "addRules",
      rules: e.rules,
      behavior: e.behavior,
      destination: e.destination
    }];
    let r = (e.behavior === "deny" ? n.alwaysDenyRules : n.alwaysAskRules) ?? {},
      s = Object.hasOwn(r, e.destination) ? r[e.destination] : void 0,
      i = Array.isArray(s) ? s : [],
      m = c => Sn(zn(c)),
      l = new Set(e.rules.map(item => m(Sn(item)))),
      u = i.map(item => zn(item)).filter(item => R(item.toolName) && !l.has(m(Sn(item))));
    return u.length === 0 ? void 0 : [{
      ...e,
      rules: [...e.rules, ...u]
    }];
  }
  let rules = e.rules.filter(item => !R(item.toolName));
  if (rules.length === e.rules.length) return;
  return rules.length === 0 ? [] : [{
    ...e,
    rules: rules
  }];
}
function b2n(e, n) {
  if (!L()) return e;
  let o = !1,
    r = e.flatMap(item => {
      if (M(item)) return o = !0, [];
      let i = D(item, n);
      if (i !== void 0) return o = !0, i;
      if (item.type !== "addRules" && item.type !== "replaceRules" || item.behavior !== "allow") return [item];
      let rules_2 = item.rules.filter(item => !R(item.toolName));
      if (rules_2.length === item.rules.length) return [item];
      return o = !0, rules_2.length === 0 ? [] : [{
        ...item,
        rules: rules_2
      }];
    });
  return o ? r : e;
}
function JLt(e, n) {
  let toolName = Cc(e);
  if (toolName === Xu) return {
    toolName: toolName
  };
  let r = typeof n === "object" && n !== null && "url" in n ? n.url : void 0;
  if (toolName !== pr || typeof r !== "string") return;
  try {
    let hostname = new URL(r).hostname;
    return hostname.includes("*") ? void 0 : {
      toolName: toolName,
      ruleContent: `domain:${hostname}`
    };
  } catch {
    return;
  }
}
function c3(e, n, o) {
  if (!L()) return e;
  let r = !1,
    s = e.flatMap(item => {
      if (M(item)) return r = !0, [];
      let m = D(item, o);
      if (m !== void 0) return r = !0, m;
      if (item.type !== "addRules" && item.type !== "replaceRules" || item.behavior !== "allow") return [item];
      let l = item.rules.filter(item => R(item.toolName));
      if (l.length === 0) return [item];
      r = !0;
      let rules_3 = item.rules.filter(item => !R(item.toolName)),
        rules_4 = item.type === "addRules" && n !== void 0 ? l.filter(item => gd(item.toolName) === n.toolName && item.ruleContent === n.ruleContent) : [];
      return [...(rules_3.length > 0 ? [{
        ...item,
        rules: rules_3
      }] : []), ...(rules_4.length > 0 ? [{
        ...item,
        destination: "session",
        rules: rules_4
      }] : [])];
    });
  return r ? s : e;
}
var ee = "tengu_cached_pebble";
function sme() {
  return E(ee, !1) === !0;
}
function S2n(e) {
  return ju() || !e && sme() && !Eg();
}
function w2n() {
  return ju() && sme();
}
var F = He(new Set(), e => e.clear());
function v2n(e, n) {
  let toolName_2 = e.toolName;
  if (F.has(toolName_2)) return;
  F.add(toolName_2), t(n.mcpInfo ? `Allow rule "${toolName_2}" does not allow the tools named "${uo(n.mcpInfo.serverName)}<tool>": they belong to another MCP server than the rule names. To allow them, use "${uo(n.mcpInfo.serverName)}*".` : `Allow rule "${toolName_2}" does not allow "${n.name}": the name reads as more than one MCP server's. To allow it, use the tool's full name.`, {
    level: "warn"
  });
}
var ne = new z(() => new Set());
function jCo(e, n) {
  for (let o of n) x().add(si(e, o));
}
function w(e) {
  if (!e.startsWith("mcp__")) return !1;
  for (let name of x()) if (e === name || NKs(e, {
    name: name
  })) return !0;
  return !1;
}
function aDs() {
  return x().size > 0;
}
function x() {
  return ne.of(j().host);
}
var oe = [],
  E2n = [...oe, "python", "python3", "python2", "node", "deno", "tsx", "ruby", "perl", "php", "lua", "npx", "bunx", "npm run", "yarn run", "pnpm run", "bun run", "bash", "sh", "ssh"],
  WCo = [...E2n, "zsh", "fish", "eval", "exec", "env", "xargs", "sudo"],
  Xxr = ["curl", "wget", "kubectl", "aws", "gcloud", "gsutil"],
  Jxr = [],
  U = new Set([...Xxr, ...Jxr]),
  H = {
    kubectl: new Set(["exec", "apply", "create", "delete", "run", "cp", "port-forward", "proxy", "patch", "edit", "replace", "attach", "debug", "scale", "rollout", "drain", "cordon", "taint"]),
    ...!1
  },
  V = [...WCo, ...[]];
function Qxr(e, n) {
  if (e !== We) return !1;
  if (n === void 0 || n === "") return !0;
  if (/^[\s*]+$/.test(n)) return !0;
  return T2n(n, V);
}
function T2n(e, n) {
  let o = e.trim().toLowerCase();
  if (o === "*") return !0;
  for (let r of n) {
    let s = r.toLowerCase();
    if (o === s) return !0;
    if (o === `${s}:*` || o === `${s} *`) return !0;
    if (o === `${s}*`) return !0;
    if (o.startsWith(`${s} `) && o.endsWith("*")) {
      let i = o.slice(s.length + 1);
      if (U.has(s)) {
        if (/[$`]/.test(i)) return !0;
        let m = H[s];
        if (m === "all") return !0;
        let l = i.replace(/[\s:*]+$/, "").split(/\s+/).filter(Boolean),
          u = 0;
        for (; u < l.length; u++) {
          let f = l[u];
          if (!f.startsWith("-")) break;
          if (!f.includes("=") && u + 1 < l.length && !l[u + 1].startsWith("-")) u++;
        }
        let c = l[u];
        if (c === void 0) {
          if ((s === "curl" || s === "wget") && l.some(item => item.includes("://"))) continue;
          return !0;
        }
        if (m?.has(c)) return !0;
        continue;
      }
      if (i.startsWith("-")) {
        let m = i.slice(0, -1);
        if (!(/^python[\d.]*$/.test(s) && /^-m\s+\w+\.[\w.]+(\s*:|\s+)$/.test(m))) return !0;
      }
    }
  }
  return !1;
}
function Zxr(e, n) {
  if (e !== xt) return !1;
  if (n === void 0 || n === "") return !0;
  if (/^[\s*]+$/.test(n)) return !0;
  let o = n.trim().toLowerCase();
  if (o === "*") return !0;
  let r = [...E2n, "pwsh", "powershell", "cmd", "wsl", "iex", "invoke-expression", "icm", "invoke-command", "start-process", "saps", "start", "start-job", "sajb", "start-threadjob", "invoke-wmimethod", "iwmi", "invoke-cimmethod", "icim", "wmic", "register-objectevent", "register-engineevent", "register-wmievent", "register-scheduledjob", "new-pssession", "nsn", "enter-pssession", "etsn", "add-type", "new-object"];
  for (let s of r) {
    if (o === s) return !0;
    if (o === `${s}:*`) return !0;
    if (o === `${s}*`) return !0;
    if (o === `${s} *`) return !0;
    if (o.startsWith(`${s} -`) && o.endsWith("*")) return !0;
    let i = s.indexOf(" "),
      m = i === -1 ? `${s}.exe` : `${s.slice(0, i)}.exe${s.slice(i)}`;
    if (o === m) return !0;
    if (o === `${m}:*`) return !0;
    if (o === `${m}*`) return !0;
    if (o === `${m} *`) return !0;
    if (o.startsWith(`${m} -`) && o.endsWith("*")) return !0;
  }
  return !1;
}
function CJs(e, n) {
  return gd(e) === ht;
}
function te(e) {
  return e === Yi;
}
class W {
  verdicts = new Map();
  lookup(e) {
    return this.verdicts.get(e);
  }
  remember(e, n) {
    this.verdicts.set(e, n);
  }
  reset() {
    this.verdicts.clear();
  }
}
var B = new W();
function g1e() {
  return oP() || KHo();
}
function QLt(e, n) {
  let o = `${e}\x00${n ?? ""}`,
    r = B.lookup(o);
  if (r !== void 0) return r;
  let s = Qxr(e, n) || Zxr(e, n) || CJs(e, n) || te(e) || e === import.meta.require("B:/~BUN/root/chunk-h1h124j8.js").APPIFACT_REPL_TOOL_NAME;
  return B.remember(o, s), s;
}
function ePr(e) {
  return w(Cc(e)) || oP() && QLt(e.name, void 0);
}
function fae(e, n) {
  if ((e === We || e === xt) && g1e()) return !0;
  if (w(e)) return !0;
  return QLt(e, n);
}
function lDs(e) {
  if (e === We || e === xt) return g1e() ? void 0 : e;
  if (FC(e) || fae(e, void 0) || C2n(e)) return;
  return e === Kt || e === Ji ? dt : e;
}
var se = new Set(Array.from(nVs, e => si(Ec, e)));
function C2n(e) {
  return se.has(e);
}
var UU = [...xs, "cliArg", "command", "session", "toolsNarrowing", "mcpServerPolicy", "hostCredential"],
  h1e = ["toolsNarrowing", "command"],
  ie = new Set([import.meta.require("B:/~BUN/root/chunk-wn2e3h4c.js").END_CONVERSATION_TOOL_NAME]);
function u3(e) {
  return !e.mcpInfo && ie.has(e.name);
}
function IN(e) {
  if ($s(e.mode, e.servedCall === !0)) {
    let r = a.CLAUDE_CODE_EVAL_CONFINED ? {
        cliArg: e.alwaysAllowRules.cliArg
      } : e.alwaysAllowRules,
      s = [];
    for (let source of UU) {
      let m = r[source];
      if (m === void 0) continue;
      for (let l of m) {
        let ruleValue = zn(l);
        if (fae(ruleValue.toolName, ruleValue.ruleContent)) continue;
        if (C2n(ruleValue.toolName)) continue;
        if (C(source, ruleValue.toolName)) continue;
        s.push({
          source: source,
          ruleBehavior: "allow",
          ruleValue: ruleValue
        });
      }
    }
    return s;
  }
  if (a.CLAUDE_CODE_EVAL_CONFINED) return y1e({
    cliArg: e.alwaysAllowRules.cliArg
  }, "allow");
  let n = y1e(e.alwaysAllowRules, "allow"),
    o;
  for (let [r, s] of n.entries()) if (C(s.source, s.ruleValue.toolName)) o ??= n.slice(0, r);else o?.push(s);
  return o ?? n;
}
function y1e(e, ruleBehavior) {
  let o = [];
  for (let source_2 of UU) {
    let s = e[source_2];
    if (s === void 0) continue;
    for (let i of s) o.push({
      source: source_2,
      ruleBehavior: ruleBehavior,
      ruleValue: zn(i)
    });
  }
  return o;
}
function dc(e) {
  return y1e(e.alwaysDenyRules, "deny");
}
function sg(e) {
  return y1e(e.alwaysAskRules, "ask");
}
function Oon(e, n, o = {}) {
  if (n.ruleValue.ruleContent !== void 0) return !1;
  return y(e, n, o);
}
function y(e, n, {
  proxyExpansion = !1,
  globMatching = !1,
  toolAliases: toolAliases
} = {}, i = b(n), m = T(e, toolAliases)) {
  let l = m.name;
  if (n.ruleValue.toolName === l) return !0;
  let u = "familyParentToolName" in e ? e.familyParentToolName : void 0;
  if (u !== void 0 && e.mcpInfo === void 0 && n.ruleValue.toolName === u) return !0;
  if (proxyExpansion && Rne(n.ruleValue.toolName, toolAliases).includes(l)) return !0;
  let {
    matchesGlob: matchesGlob
  } = i;
  if (globMatching && matchesGlob !== void 0 && (matchesGlob(l) || proxyExpansion && m.aliasSources().some(matchesGlob))) return !0;
  let f = i.coversMcpTool(m.mcpInfo());
  if (n.ruleBehavior === "allow") {
    if (!f) return !1;
    if (OBo(n.ruleValue.toolName, e)) return !0;
    return v2n(n.ruleValue, e), !1;
  }
  return f || Y(n) && m.mcpServerRuleNames().includes(n.ruleValue.toolName);
}
function Y({
  source: source_3,
  ruleValue: ruleValue_2
}) {
  return source_3 !== "mcpServerPolicy" && ruleValue_2.toolName.startsWith(KJ);
}
function b({
  ruleValue: {
    toolName: toolName_3
  }
}) {
  let n, o;
  return {
    matchesGlob: nE(toolName_3) ? r => (n ??= O9n(toolName_3))(r) : void 0,
    coversMcpTool: r => (o ??= PBo(toolName_3))(r)
  };
}
function T(e, n) {
  let name_2 = Cc(e),
    r,
    s,
    i;
  return {
    name: name_2,
    mcpInfo: () => i === void 0 ? i = co(name_2) : i,
    aliasSources: () => r ??= O2(name_2, n),
    mcpServerRuleNames: () => s ??= N7e(e)
  };
}
function _K(e, n) {
  return IN(e).find(item => Oon(n, item)) || null;
}
function g(e) {
  return e.source !== "cliArg" && e.source !== "toolsNarrowing";
}
function fO(e, n, o, r = b(o), s, i = !1) {
  let m = {
    proxyExpansion: g(o),
    globMatching: !0,
    toolAliases: e.toolAliases
  };
  if (y(n, o, m, r, s)) return !0;
  if (("aliasSkillToolNames" in n ? n.aliasSkillToolNames : void 0)?.some(name_3 => y({
    name: name_3
  }, o, m, r))) return !0;
  let u = "packagingAliasSkillToolNames" in n ? n.packagingAliasSkillToolNames : void 0;
  if (u === void 0 || nE(o.ruleValue.toolName) && !S2n(i)) return !1;
  return u.some(c => y({
    name: c
  }, o, m, r));
}
function Ho(e, n, o, r = !1) {
  if (u3(n)) return null;
  let s;
  return (o ?? dc(e)).find(item => N(n, item, e, void 0, s ??= T(n, e.toolAliases), r)) || null;
}
function zCo(e) {
  return /^[\s*]+$/.test(e);
}
function le(e) {
  return e.startsWith("//") && /^\/(?:\*\*\/)?\*+(?:\/\*\*)?$/.test(e.replace(/\/{2,}/g, "/"));
}
var G = [dt, Kt, Ji],
  ask = [Qe, Pr, ao],
  ae = new Map([[Qe, {
    deny: [...ask, dt, Kt],
    ask: ask
  }], [dt, {
    deny: G,
    ask: G
  }]]);
function S({
  ruleBehavior: ruleBehavior_2,
  ruleValue: {
    toolName: toolName_4,
    ruleContent: ruleContent
  }
}, r) {
  if (ruleContent === void 0 || ruleBehavior_2 === "allow") return !1;
  return toolName_4 === We ? r === We && zCo(ruleContent) : le(ruleContent) && (ae.get(toolName_4)?.[ruleBehavior_2] ?? []).includes(r);
}
function N(e, n, o, r, s, i = !1) {
  if (n.ruleValue.ruleContent === void 0) return fO(o, e, n, r, s, i);
  let {
      name: name_4,
      aliasSources: aliasSources
    } = s ?? T(e, o.toolAliases),
    u = n.ruleValue.toolName === name_4,
    c = g(n);
  return aliasSources().some(item => item !== name_4 && (c && S(n, item) || u && S(K(item, n), item)));
}
function K(toolName_5, n) {
  return {
    ...n,
    ruleValue: {
      ...n.ruleValue,
      toolName: toolName_5
    }
  };
}
function ue(e) {
  if (nE(e)) return !0;
  let n = co(e);
  return n !== null && n.toolName === void 0;
}
function GCo(e, n) {
  let names = new Set(),
    parentNames = new Set(),
    mcpServerNames = new Set(),
    patterns = [],
    withContent = [];
  for (let rule of n) {
    let {
      toolName: toolName_6,
      ruleContent: ruleContent_2
    } = rule.ruleValue;
    if (ruleContent_2 !== void 0) {
      if (Object.entries(e.toolAliases ?? {}).some(([d, _]) => S(rule, d) || _ === toolName_6 && S(K(d, rule), d))) withContent.push(rule);
      continue;
    }
    if (ue(toolName_6)) {
      patterns.push({
        rule: rule,
        ruleName: b(rule)
      });
      continue;
    }
    if (Y(rule)) mcpServerNames.add(toolName_6);
    parentNames.add(toolName_6);
    let f = g(rule) ? Rne(toolName_6, e.toolAliases) : [toolName_6];
    for (let d of f) names.add(d);
  }
  return {
    names: names,
    parentNames: parentNames,
    mcpServerNames: mcpServerNames,
    patterns: patterns,
    withContent: withContent
  };
}
function ime(e) {
  let rules_5 = dc(e);
  return {
    rules: rules_5,
    index: GCo(e, rules_5)
  };
}
function _9e(e, n, o) {
  if (u3(o) || n.names.size === 0 && n.patterns.length === 0 && n.withContent.length === 0) return !1;
  let r = T(o, e.toolAliases);
  if (n.names.has(r.name)) return !0;
  let s = "familyParentToolName" in o ? o.familyParentToolName : void 0;
  if (s !== void 0 && o.mcpInfo === void 0 && n.parentNames.has(s)) return !0;
  let i = "aliasSkillToolNames" in o ? o.aliasSkillToolNames : void 0;
  if (i?.some(l => n.names.has(l))) return !0;
  let m = "packagingAliasSkillToolNames" in o ? o.packagingAliasSkillToolNames : void 0;
  if (m?.some(l => n.names.has(l))) return !0;
  if (n.mcpServerNames.size > 0 && (r.mcpServerRuleNames().some(item => n.mcpServerNames.has(item)) || [...(i ?? []), ...(m ?? [])].some(l => N7e({
    name: l
  }).some(item => n.mcpServerNames.has(item))))) return !0;
  return n.patterns.some(({
    rule: rule_2,
    ruleName: ruleName
  }) => N(o, rule_2, e, ruleName, r)) || r.aliasSources().length > 0 && n.withContent.some(item => N(o, item, e, void 0, r));
}
function dDs(e, n) {
  if (!u3(n)) return !1;
  if (IN(e).some(item => item.ruleValue.toolName === n.name)) return !1;
  return dc(e).some(item => Oon(n, item, {
    proxyExpansion: g(item),
    globMatching: !0,
    toolAliases: e.toolAliases
  }));
}
function mae(e, n, o) {
  return dc(e).find(item => item.ruleValue.toolName === n && item.ruleValue.ruleContent === o) || null;
}
function cDs(e, n, o) {
  return sg(e).find(item => item.ruleValue.toolName === n && item.ruleValue.ruleContent === o) || null;
}
function uDs(e, n, o) {
  let r = new Set();
  for (let s of dc(n)) if (s.ruleValue.toolName === o && s.ruleValue.ruleContent !== void 0) r.add(s.ruleValue.ruleContent);
  return e.filter(item => !r.has(item.agentType));
}
function Ul(e, n, o) {
  if (u3(n)) return null;
  let r;
  return (o ?? sg(e)).find(item => N(n, item, e, void 0, r ??= T(n, e.toolAliases))) || null;
}
function me(e) {
  if (e === void 0 || e === null) return null;
  if (typeof e !== "object") return String(e);
  return null;
}
function ce(e) {
  let n = e.indexOf(":");
  if (n <= 0) return null;
  let key = e.slice(0, n).trim(),
    expected = e.slice(n + 1).trim();
  return key === "" || expected === "" ? null : {
    key: key,
    expected: expected
  };
}
function Aft(e, n) {
  return `Permission to use ${e} with ${n.ruleValue.ruleContent} has been denied.`;
}
function Bg(e, n, o, r) {
  let s = Cc(n),
    i = [...("aliasSkillToolNames" in n ? n.aliasSkillToolNames ?? [] : []), ...("packagingAliasSkillToolNames" in n ? n.packagingAliasSkillToolNames ?? [] : [])],
    m = [[s, !1], ...i.map(item => [item, !1]), ...O2(s, e.toolAliases).map(item => [item, !0])];
  for (let [u, c] of m) {
    let f = oke(e, u, r).filter(item => !c || g(item));
    for (let [d = "", _] of new Map(f.map(item => [item.ruleValue.ruleContent, item]))) {
      let p = ce(d);
      if (p === null) continue;
      let {
        key: key_2,
        expected: expected_2
      } = p;
      if (key_2 === n.ruleContentField) continue;
      let A = key_2 === nIe && !Object.hasOwn(o, key_2) && Object.hasOwn(o, Ur) ? Ur : key_2;
      if (!Object.hasOwn(o, A)) continue;
      let O = me(o[A]);
      if (O === null) continue;
      if (I2(expected_2, O.trim())) return _;
      if (s === go && A === "skill") {
        let J = O.trim(),
          I = N$r(J);
        if (I !== void 0) {
          if ((!expected_2.includes("*") || ju()) && I2(expected_2, I)) return _;
        }
      }
    }
  }
  let name_5 = "familyParentToolName" in n ? n.familyParentToolName : void 0;
  if (name_5 !== void 0 && n.mcpInfo === void 0 && n.toFamilyParentInput !== void 0) return Bg(e, {
    name: name_5,
    ruleContentField: n.ruleContentField
  }, n.toFamilyParentInput(o), r);
  return null;
}
function gae(e, n, o) {
  return MN(e, Cc(n), o);
}
function MN(e, n, o) {
  let r = new Map();
  for (let s of oke(e, n, o)) if (s.ruleValue.ruleContent !== void 0) r.set(s.ruleValue.ruleContent, s);
  return r;
}
function oke(e, n, o) {
  let r = [];
  switch (o) {
    case "allow":
      r = IN(e);
      break;
    case "deny":
      r = dc(e);
      break;
    case "ask":
      r = sg(e);
      break;
  }
  let s = [];
  for (let i of r) if (i.ruleValue.toolName === n && i.ruleValue.ruleContent !== void 0 && i.ruleBehavior === o) s.push(i);
  return s;
}
export { xon, pae, b2n, JLt, c3, sme, S2n, w2n, v2n, k2n, UCo, rke, BCo, iDs, Yxr, FC, Pon, jCo, aDs, E2n, WCo, Xxr, Jxr, Qxr, T2n, Zxr, CJs, g1e, QLt, ePr, fae, lDs, C2n, UU, h1e, u3, IN, y1e, dc, sg, Oon, _K, fO, Ho, zCo, GCo, ime, _9e, dDs, mae, cDs, uDs, Ul, Aft, Bg, gae, MN, oke };