// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { SK, Dm } from "B:/~BUN/root/chunk-31b4g6te.js";
import { ve, At, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
j();
var r = () => () => {};
function nke(n) {
  let {
    focusManager: focusManager
  } = ve(Dm);
  return At(focusManager?.subscribe ?? r, () => {
    let current = n.current,
      o = focusManager?.activeElement;
    if (!current || !o) return !1;
    return SK(o, current);
  }, () => !1);
}
export { nke };