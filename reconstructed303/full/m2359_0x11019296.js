// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  w4
} from "B:/~BUN/root/chunk-8ye9n4fk.js";
import {
  ode,
  zn,
  Sn
} from "B:/~BUN/root/chunk-a0k8qg0d.js";
import {
  dt
} from "B:/~BUN/root/chunk-kad4nq7y.js";
import {
  tA,
  eke
} from "B:/~BUN/root/chunk-c44qc88s.js";
import {
  UU
} from "B:/~BUN/root/chunk-ses0c36n.js";
import {
  TKo
} from "B:/~BUN/root/chunk-m3m0fcyj.js";
import {
  Qe
} from "B:/~BUN/root/chunk-5k20pvvh.js";

function Gde(a, s, e) {
  let o = TKo(a),
    i = (r) => Object.fromEntries(UU.map((l) => [l, [...o[r][l] ?? [], ...(s[r][l] ?? []).filter((n) => {
      if (!w4.test(n)) return !0;
      return t(`Ignoring the launch ${r==="alwaysDenyRules"?"deny":"ask"} rule "${n}" (from CLAUDE_CODE_MCP_SERVE_SETTINGS, or for ReadFileForRemote and ListDirectoryForRemote a settings file here): a rule starting with "!" removes paths from the rules listed before it instead of restricting anything, and here those include the calling session's own rules. Spell the rule without the exception instead.`, {
        level: "warn"
      }), !1
    }).flatMap((n) => [n, ...m(n, e)])]]));
  return {
    ...o,
    alwaysDenyRules: i("alwaysDenyRules"),
    alwaysAskRules: i("alwaysAskRules")
  }
}

function m(a, s) {
  let {
    toolName: e,
    ruleContent: o
  } = zn(a);
  if (o === void 0 || e !== Qe && e !== dt) return [];
  let {
    relativePattern: i,
    root: r
  } = eke(o, s);
  if (r !== null) return [];
  return [Sn({
    toolName: e,
    ruleContent: `/${ode(`${tA(s)}/`,{escapeGlobs:!0})}**/${i}`
  })]
}
export {
  Gde
};
