// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  l,
  v
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
var s = new Set(["EIO", "ENOTTY", "EBADF"]);

function pE(e, n) {
  if (!("setRawMode" in e) || typeof e.setRawMode !== "function") return;
  try {
    e.setRawMode(n)
  } catch (o) {
    let r = l(o),
      a = v(o);
    if (r.includes("setRawMode failed") || s.has(a ?? "")) {
      t(`setRawMode(${n}) failed on revoked tty: ${r}`);
      return
    }
    throw o
  }
}
export {
  pE
};
