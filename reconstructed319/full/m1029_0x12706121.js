// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  b
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  Rn
} from "B:/~BUN/root/chunk-qey16aan.js";
import {
  ost
} from "B:/~BUN/root/chunk-31b4g6te.js";
import {
  ue,
  y,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
j();

function u(o, n, r) {
  return o.isWindowActivation || i(n, r)
}

function mv() {
  let o = Rn(),
    [n] = y(() => o.now());
  return ue((r) => {
    let e = o.now();
    if (!u(r, n, e)) return !1;
    let c = r.isWindowActivation ? b("window_activation") : b("mount_settle");
    return t(`Select: dropped stray click (${r.isWindowActivation?"window-activation click":`${e-n}ms after mount`})`), l("tengu_select_stray_click_dropped", {
      reason: c
    }), r.dropAsStray(), !0
  }, [o, n])
}

function e2t() {
  let o = Rn(),
    [n] = y(() => o.now());
  return ue(() => i(n, o.now()), [o, n])
}

function i(o, n) {
  return n - o < ost
}
export {
  mv,
  e2t
};
