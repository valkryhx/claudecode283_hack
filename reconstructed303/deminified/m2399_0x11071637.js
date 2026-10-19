// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { cu as v, _sn, jU } from "B:/~BUN/root/chunk-hkc0g0wr.js";
import { ce } from "B:/~BUN/root/chunk-nxwmyxnk.js";
import { FG } from "B:/~BUN/root/chunk-hdc8p5sh.js";
import { randomBytes as l } from "crypto";
function FZs(o, t) {
  let e = o.mapToolResultToToolResultBlockParam(t.data, `toolu_serve_${l(12).toString("hex")}`);
  return HQn(e?.content ?? "", t.data, e?.is_error === !0);
}
function HQn(content, output, is_error = !1, notes = []) {
  return jU({
    envelope: {
      v: v,
      outcome: "completed",
      target: CWt(),
      is_error: is_error,
      content: _sn(content),
      output: output,
      ...(notes.length > 0 && {
        notes: notes
      })
    },
    content: content
  });
}
function CWt() {
  return {
    name: FG(),
    working_dir: ce()
  };
}
export { FZs, HQn, CWt };