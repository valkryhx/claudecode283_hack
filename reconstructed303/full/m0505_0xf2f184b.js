// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  ofe,
  dj
} from "B:/~BUN/root/chunk-d69870x4.js";

function Kn(e, r, o = "foreground") {
  return (t) => {
    if (!e) return t;
    if (e.startsWith("rgb(") || e.startsWith("#") || e.startsWith("ansi256(") || e.startsWith("ansi:")) return ofe(t, e, o);
    let i = typeof r === "string" ? dj(r) : r;
    return ofe(t, i[e], o)
  }
}
export {
  Kn
};
