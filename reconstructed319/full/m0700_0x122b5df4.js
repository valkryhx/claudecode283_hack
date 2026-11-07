// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  d,
  k
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
var s = new Set(["EIO", "ENOTTY", "EBADF"]);

function Ik(e, n) {
  if (!("setRawMode" in e) || typeof e.setRawMode !== "function") return;
  try {
    e.setRawMode(n)
  } catch (o) {
    let a = d(o),
      r = k(o);
    if (a.includes("setRawMode failed") || s.has(r ?? "")) {
      t(`setRawMode(${n}) failed on revoked tty: ${a}`);
      return
    }
    throw o
  }
}
export {
  Ik
};
