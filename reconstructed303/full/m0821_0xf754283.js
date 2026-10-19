// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  xa
} from "B:/~BUN/root/chunk-damrp3r8.js";
import {
  y,
  B
} from "B:/~BUN/root/chunk-5hr2ysa5.js";
B();
var E0 = 150,
  No = 250,
  Pnt = 600;

function El(e, n, t = E0) {
  let o = e() - n;
  if (o >= 0) return o < t;
  return n <= Date.now()
}

function h9o(e) {
  let n = xa(),
    [t, o] = y(() => ({
      key: e,
      at: Date.now()
    }));
  if (t.key !== e) o({
    key: e,
    at: Date.now()
  });
  return function() {
    return El(n, t.at)
  }
}
export {
  E0,
  No,
  Pnt,
  El,
  h9o
};
