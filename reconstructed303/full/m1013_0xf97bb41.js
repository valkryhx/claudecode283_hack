// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  hf
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  He
} from "B:/~BUN/root/chunk-8znbjmp4.js";
var J8r = Object.freeze({
  isKept: !0,
  isDenied: !1,
  context: Object.freeze([])
});

function m() {
  let o = hf();
  return {
    setPromptMentionRunner: o.set,
    runPromptMention: (r) => {
      let e = o.get();
      return e ? e(r) : r.read(r.raised, "unhooked").then(() => J8r)
    }
  }
}
var t = He(m(), (o) => o.setPromptMentionRunner(null));
var G5s = t.runPromptMention;
var V5s = t.setPromptMentionRunner;
export {
  J8r,
  G5s,
  V5s
};
