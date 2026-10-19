// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  N
} from "B:/~BUN/root/chunk-nkxgam12.js";

function N5o(e, l) {
  let t = new Map,
    o = [];
  if (e === void 0 || e === null) return {
    manifests: t,
    malformedField: !1,
    malformedServerNames: o
  };
  if (!N(e)) return {
    manifests: t,
    malformedField: !0,
    malformedServerNames: o
  };
  for (let r of l) {
    if (!Object.hasOwn(e, r)) continue;
    let n = e[r],
      s = N(n) ? n.initializeResult : void 0,
      i = N(n) && n.toolsListResult !== null ? n.toolsListResult : void 0;
    if (N(s) && (i === void 0 || N(i))) t.set(r, i === void 0 ? {
      initializeResult: s
    } : {
      initializeResult: s,
      toolsListResult: i
    });
    else o.push(r)
  }
  return {
    manifests: t,
    malformedField: !1,
    malformedServerNames: o
  }
}
var d = "notifications/tools/list_changed";

function JSn(e) {
  return N(e) && !("id" in e) && e.method === d
}
export {
  N5o,
  JSn
};
