// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  dt
} from "B:/~BUN/root/chunk-9kvvd0hy.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  ln,
  pM
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  swe,
  yr,
  mn
} from "B:/~BUN/root/chunk-44q965xg.js";
import {
  jI,
  Nks,
  ULe
} from "B:/~BUN/root/chunk-j05gjqgd.js";
import {
  vA
} from "B:/~BUN/root/chunk-wss0tnsx.js";
import {
  bse
} from "B:/~BUN/root/chunk-detjgwj4.js";
import {
  n6s
} from "B:/~BUN/root/chunk-wr6kgh84.js";
import {
  ze
} from "B:/~BUN/root/chunk-xwzn0yxv.js";

function TY(s, e, n, o) {
  let r = n6s(s);
  for (let [i, {
      source: l
    }] of r.additionalWorkingDirectories)
    if (l !== "cliArg") Nks(i);
  return {
    ...r,
    ...KMo(r, e, n, o, "native")
  }
}

function KMo(s, e, n, o, r) {
  let i = (u) => Object.fromEntries(bse.map((m) => [m, [...f(s[u][m] ?? [], m, u === "alwaysDenyRules" ? "deny" : "ask", o), ...(e[u][m] ?? []).filter((a) => {
      if (!pM.test(a)) return !0;
      return t(`Ignoring the launch ${u==="alwaysDenyRules"?"deny":"ask"} rule "${a}" (from CLAUDE_CODE_MCP_SERVE_SETTINGS, or for ReadFileForRemote and ListDirectoryForRemote a settings file here): a rule starting with "!" removes paths from the rules listed before it instead of restricting anything, and here those include the calling session's own rules. Spell the rule without the exception instead.`, {
        level: "warn"
      }), !1
    }).flatMap((a) => [a, ...d(a, n)])]])),
    l = {
      alwaysDenyRules: i("alwaysDenyRules"),
      alwaysAskRules: i("alwaysAskRules")
    };
  return o === void 0 ? l : p(l, r)
}

function p(s, e) {
  let {
    composedRepoRules: n
  } = vA(), o = n[e];
  if (o !== void 0 && ln(o, s)) return o;
  let r = {
    alwaysDenyRules: R(s.alwaysDenyRules),
    alwaysAskRules: R(s.alwaysAskRules)
  };
  return n[e] = r, r
}

function R(s) {
  return Object.values(s).forEach((e) => Object.freeze(e)), Object.freeze(s)
}

function f(s, e, n, o) {
  if (o === void 0 || e !== "userSettings" && e !== "projectSettings" && e !== "localSettings") return s;
  return [...o[e][n], ...s.filter((r) => !pM.test(r))]
}

function d(s, e) {
  let {
    toolName: n,
    ruleContent: o
  } = yr(s);
  if (o === void 0 || n !== ze && n !== dt) return [];
  let {
    relativePattern: r,
    root: i
  } = ULe(o, e);
  if (i !== null) return [];
  return [mn({
    toolName: n,
    ruleContent: `/${swe(`${jI(e)}/`,{escapeGlobs:!0})}**/${r}`
  })]
}
export {
  TY,
  KMo
};
