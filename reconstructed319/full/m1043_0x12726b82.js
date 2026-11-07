// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  SK,
  Dm
} from "B:/~BUN/root/chunk-31b4g6te.js";
import {
  ve,
  At,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
j();
var r = () => () => {};

function nke(n) {
  let {
    focusManager: e
  } = ve(Dm);
  return At(e?.subscribe ?? r, () => {
    let t = n.current,
      o = e?.activeElement;
    if (!t || !o) return !1;
    return SK(o, t)
  }, () => !1)
}
export {
  nke
};
