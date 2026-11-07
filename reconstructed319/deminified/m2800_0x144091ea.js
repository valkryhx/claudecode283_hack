// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { dt } from "B:/~BUN/root/chunk-9kvvd0hy.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { ln, pM } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { swe, yr, mn } from "B:/~BUN/root/chunk-44q965xg.js";
import { jI, Nks, ULe } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { vA } from "B:/~BUN/root/chunk-wss0tnsx.js";
import { bse } from "B:/~BUN/root/chunk-detjgwj4.js";
import { n6s } from "B:/~BUN/root/chunk-wr6kgh84.js";
import { ze } from "B:/~BUN/root/chunk-xwzn0yxv.js";
function TY(s, e, n, o) {
  let r = n6s(s);
  for (let [i, {
    source: source
  }] of r.additionalWorkingDirectories) if (source !== "cliArg") Nks(i);
  return {
    ...r,
    ...KMo(r, e, n, o, "native")
  };
}
function KMo(s, e, n, o, r) {
  let i = u => Object.fromEntries(bse.map(item => [item, [...f(s[u][item] ?? [], item, u === "alwaysDenyRules" ? "deny" : "ask", o), ...(e[u][item] ?? []).filter(item => {
      if (!pM.test(item)) return !0;
      return t(`Ignoring the launch ${u === "alwaysDenyRules" ? "deny" : "ask"} rule "${item}" (from CLAUDE_CODE_MCP_SERVE_SETTINGS, or for ReadFileForRemote and ListDirectoryForRemote a settings file here): a rule starting with "!" removes paths from the rules listed before it instead of restricting anything, and here those include the calling session's own rules. Spell the rule without the exception instead.`, {
        level: "warn"
      }), !1;
    }).flatMap(item => [item, ...d(item, n)])]])),
    l = {
      alwaysDenyRules: i("alwaysDenyRules"),
      alwaysAskRules: i("alwaysAskRules")
    };
  return o === void 0 ? l : p(l, r);
}
function p(s, e) {
  let {
      composedRepoRules: composedRepoRules
    } = vA(),
    o = composedRepoRules[e];
  if (o !== void 0 && ln(o, s)) return o;
  let r = {
    alwaysDenyRules: R(s.alwaysDenyRules),
    alwaysAskRules: R(s.alwaysAskRules)
  };
  return composedRepoRules[e] = r, r;
}
function R(s) {
  return Object.values(s).forEach(item => Object.freeze(item)), Object.freeze(s);
}
function f(s, e, n, o) {
  if (o === void 0 || e !== "userSettings" && e !== "projectSettings" && e !== "localSettings") return s;
  return [...o[e][n], ...s.filter(item => !pM.test(item))];
}
function d(s, e) {
  let {
    toolName: toolName,
    ruleContent: ruleContent
  } = yr(s);
  if (ruleContent === void 0 || toolName !== ze && toolName !== dt) return [];
  let {
    relativePattern: relativePattern,
    root: root
  } = ULe(ruleContent, e);
  if (root !== null) return [];
  return [mn({
    toolName: toolName,
    ruleContent: `/${swe(`${jI(e)}/`, {
      escapeGlobs: !0
    })}**/${relativePattern}`
  })];
}
export { TY, KMo };