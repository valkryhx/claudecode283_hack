// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Gg,
  W$
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  Je
} from "B:/~BUN/root/chunk-3rzkfay5.js";
import {
  bo
} from "B:/~BUN/root/chunk-846280n0.js";
import {
  zt
} from "B:/~BUN/root/chunk-msy8grqx.js";
import {
  co
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  Qp
} from "B:/~BUN/root/chunk-xyqb4s7p.js";
import {
  cI
} from "B:/~BUN/root/chunk-zav2qxje.js";
import {
  Ub
} from "B:/~BUN/root/chunk-hyp140x7.js";

function fSe(o) {
  let l = bo();
  return l.workflowAuthoringSkillAvailable ??= e(), l.workflowAuthoringSkillAvailable && (o === void 0 || i(o))
}

function e() {
  if (!Qp()) return !1;
  if (Ub() || Gg()) return !1;
  if (a.CLAUDE_CODE_ENTRYPOINT === "local-agent") return !1;
  let o = Je().skillOverrides?.[cI];
  if (o === "off" || o === "user-invocable-only") return !1;
  let l = W$();
  if (l !== void 0 && !l.includes(cI)) return !1;
  return !0
}

function i(o) {
  return o.some((l) => zt(l, co))
}
export {
  fSe
};
