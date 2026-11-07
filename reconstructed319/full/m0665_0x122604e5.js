// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  bTe,
  Sq
} from "B:/~BUN/root/chunk-apgsnbqk.js";

function lr(e, r, o = "foreground") {
  return (t) => {
    if (!e) return t;
    if (e.startsWith("rgb(") || e.startsWith("#") || e.startsWith("ansi256(") || e.startsWith("ansi:")) return bTe(t, e, o);
    let i = typeof r === "string" ? Sq(r) : r;
    return bTe(t, i[e], o)
  }
}
export {
  lr
};
