// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import "B:/~BUN/root/chunk-2hjjs2xw.js";
import { Ofr, Iso } from "B:/~BUN/root/chunk-s8h3c7k5.js";
var d = /<\/(?:body|html)[\t\n\f\r />]/i;
function m(n) {
  if (!d.test(n)) return n.length;
  let e = -1,
    o = () => {
      e = -1;
    },
    r = () => {},
    {
      tokenizer: tokenizer,
      overBudget: overBudget
    } = Iso({
      sourceCodeLocationInfo: !0
    }, {
      onStartTag(t) {
        let i = Ofr.get(t.tagName);
        if (i !== void 0) tokenizer.state = i, tokenizer.lastStartTagName = t.tagName;
        if (t.tagName !== "html") o();
      },
      onEndTag(t) {
        if (t.tagName !== "body" && t.tagName !== "html") o();else if (e < 0 && t.location) e = t.location.startOffset;
      },
      onComment: r,
      onDoctype: r,
      onCharacter: o,
      onNullCharacter: o,
      onWhitespaceCharacter: r,
      onEof: r
    });
  if (tokenizer.write(n, !0), overBudget()) return;
  return e >= 0 ? e : n.length;
}
export { m as runtimeBlockInsertionIndex };