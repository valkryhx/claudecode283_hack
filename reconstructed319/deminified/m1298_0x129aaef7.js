// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Ef } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { he } from "B:/~BUN/root/chunk-fet34rqr.js";
var N2o = Object.freeze({
  isKept: !0,
  isDenied: !1,
  context: Object.freeze([])
});
function m() {
  let o = Ef();
  return {
    setPromptMentionRunner: o.set,
    runPromptMention: r => {
      let e = o.get();
      return e ? e(r) : r.read(r.raised, "unhooked").then(() => N2o);
    }
  };
}
var t = he(m(), o => o.setPromptMentionRunner(null));
var runPromptMention = t.runPromptMention;
var setPromptMentionRunner = t.setPromptMentionRunner;
export { N2o, runPromptMention as via, setPromptMentionRunner as Eia };