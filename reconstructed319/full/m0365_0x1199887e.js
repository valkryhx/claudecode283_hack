// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Bf
} from "B:/~BUN/root/chunk-sjvfcp1z.js";
import {
  Ae
} from "B:/~BUN/root/chunk-eds8xkh8.js";
import {
  dZe,
  lon,
  awo
} from "B:/~BUN/root/chunk-2gz7xsvb.js";
import {
  NNe
} from "B:/~BUN/root/chunk-02j0cm13.js";
import {
  vm
} from "B:/~BUN/root/chunk-78gy49b7.js";

function Wco(o, e, t, n) {
  return awo(o.matcherFor(e), t, n, vm(o) ? dZe : lon)
}

function Li(o, e, t) {
  let n = e && NNe(o);
  return (t ?? Ae().loadedModules).some((r) => r.hooks(o) && Bf(r) && (e === void 0 || Wco(r, o, e, n)))
}
export {
  Wco,
  Li
};
