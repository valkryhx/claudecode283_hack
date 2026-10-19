// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Ty,
  lV
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  ut
} from "B:/~BUN/root/chunk-1gpjpba6.js";
import {
  Ao
} from "B:/~BUN/root/chunk-s6czymtt.js";
import {
  vt
} from "B:/~BUN/root/chunk-hkc0g0wr.js";
import {
  Wg
} from "B:/~BUN/root/chunk-pmw6knpp.js";
import {
  go
} from "B:/~BUN/root/chunk-y59h61rh.js";
import {
  ED
} from "B:/~BUN/root/chunk-72f62gjz.js";
import {
  WK,
  VG
} from "B:/~BUN/root/chunk-et37ax67.js";

function _Ne(o) {
  let l = Ao();
  return l.workflowAuthoringSkillAvailable ??= e(), l.workflowAuthoringSkillAvailable && !VG(ED) && (o === void 0 || i(o))
}

function e() {
  if (!Wg()) return !1;
  if (WK() || Ty()) return !1;
  if (a.CLAUDE_CODE_ENTRYPOINT === "local-agent") return !1;
  let o = ut().skillOverrides?.[ED];
  if (o === "off" || o === "user-invocable-only") return !1;
  let l = lV();
  if (l !== void 0 && !l.includes(ED)) return !1;
  return !0
}

function i(o) {
  return o.some((l) => vt(l, go))
}
export {
  _Ne
};
