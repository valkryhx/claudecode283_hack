// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { ta } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { g, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
N();
var Fj = 150,
  oo = 250;
function Ol(e, n, t = Fj) {
  let o = e() - n;
  if (o >= 0) return o < t;
  return n <= Date.now();
}
function L8r(key) {
  let n = ta(),
    [t, o] = g(() => ({
      key: key,
      at: Date.now()
    }));
  if (t.key !== key) o({
    key: key,
    at: Date.now()
  });
  return function () {
    return Ol(n, t.at);
  };
}
export { Fj, oo, Ol, L8r };