// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { $Ze, UZe, hyt as readAsHelperStarts, oFe as startHelper, Us as trustAccepted } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Ga, Cr } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { XGn, sae, ySt } from "B:/~BUN/root/chunk-wthaftk0.js";
function d6e() {
  let helper = UZe("proxyAuthHelper", (Cr() || {}).proxyAuthHelper),
    r = sae() !== helper;
  if (XGn({
    helper: helper,
    fromProjectOrLocal: Ga("projectSettings")?.proxyAuthHelper === helper || Ga("localSettings")?.proxyAuthHelper === helper || $Ze("proxyAuthHelper"),
    trustAccepted: trustAccepted,
    startHelper: startHelper,
    readAsHelperStarts: readAsHelperStarts
  }), r) ySt();
}
export { d6e };