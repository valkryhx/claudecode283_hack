// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  H
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  _
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  Q8s
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  Nct
} from "B:/~BUN/root/chunk-r1z1wgpe.js";

function uqe() {
  try {
    return Nct() || Q8s({
      kind: "bridge"
    })
  } catch (r) {
    return l(H(r)), !0
  }
}
var e = /\u2028|\u2029/g;

function w_e(r) {
  return _(r).replace(e, (o) => o === "\u2028" ? "\\u2028" : "\\u2029")
}
export {
  w_e,
  uqe
};
