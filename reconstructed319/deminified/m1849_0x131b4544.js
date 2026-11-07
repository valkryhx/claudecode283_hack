// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import "B:/~BUN/root/chunk-d18pvp1k.js";
import { A9r, q9o } from "B:/~BUN/root/chunk-bjpw1xa2.js";
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
    } = q9o({
      sourceCodeLocationInfo: !0
    }, {
      onStartTag(t) {
        let i = A9r.get(t.tagName);
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