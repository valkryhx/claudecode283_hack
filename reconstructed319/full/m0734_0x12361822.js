// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  $Ze,
  UZe,
  hyt,
  oFe,
  Us
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  Ga,
  Cr
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  XGn,
  sae,
  ySt
} from "B:/~BUN/root/chunk-wthaftk0.js";

function d6e() {
  let e = UZe("proxyAuthHelper", (Cr() || {}).proxyAuthHelper),
    r = sae() !== e;
  if (XGn({
      helper: e,
      fromProjectOrLocal: Ga("projectSettings")?.proxyAuthHelper === e || Ga("localSettings")?.proxyAuthHelper === e || $Ze("proxyAuthHelper"),
      trustAccepted: Us,
      startHelper: oFe,
      readAsHelperStarts: hyt
    }), r) ySt()
}
export {
  d6e
};
