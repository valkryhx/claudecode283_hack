// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  f
} from "B:/~BUN/root/chunk-frrkt2bs.js";
import {
  o,
  u,
  $e,
  C
} from "B:/~BUN/root/chunk-g3snhg6n.js";
var r = f(() => $e([u({
  v: C(1),
  state: o()
}), u({
  v: C(2),
  engine: C("bridge")
})]));

function NKo(e, n) {
  if (e === void 0 || e === null) return typeof n === "object" && n !== null ? "none" : "unstated";
  let t = r().safeParse(e);
  if (!t.success) return "unreadable";
  if (t.data.v === 2) return "bridge";
  switch (t.data.state) {
    case "connected":
    case "requested":
    case "detached":
      return t.data.state;
    default:
      return "other_state"
  }
}

function Eye(e) {
  return e === "none" || e === "bridge" || e === "this_helper"
}
export {
  NKo,
  Eye
};
