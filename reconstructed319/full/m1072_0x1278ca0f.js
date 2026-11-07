// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  oE
} from "B:/~BUN/root/chunk-qey16aan.js";
import {
  Sn,
  G7
} from "B:/~BUN/root/chunk-v95bwhaa.js";
import {
  wi
} from "B:/~BUN/root/chunk-hfz1e87n.js";
import {
  sx
} from "B:/~BUN/root/chunk-w3jccevj.js";
import {
  ue,
  Z,
  y,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
j();

function Ws(i, r, e = !0) {
  let {
    handleInterrupt: n,
    handleExit: t,
    exitState: o
  } = s5n(r, i), a = Z(() => ({
    "app:interrupt": n,
    "app:exit": t
  }), [n, t]);
  return Sn(a, {
    context: "Global",
    isActive: e
  }), o
}

function OGt(i, r, e = !0) {
  let {
    handleInterrupt: n,
    handleExit: t,
    exitState: o
  } = s5n(r, i);
  return {
    entries: Z(() => e ? [{
      action: "app:interrupt",
      run: n
    }, {
      action: "app:exit",
      run: t
    }] : [], [e, n, t]),
    exitState: o
  }
}

function s5n(i, r) {
  let {
    exit: e
  } = oE(), [n, t] = y({
    pending: !1,
    keyName: null
  }), o = Z(() => r ?? e, [r, e]), a = sx(), l = wi("app:interrupt", "Global", "Ctrl-C"), p = wi("app:exit", "Global", "Ctrl-D"), c = a && l ? l : "Ctrl-C", d = a && p ? p : "Ctrl-D", u = G7((s) => t({
    pending: s,
    keyName: c
  }), o), x = G7((s) => t({
    pending: s,
    keyName: d
  }), o), m = ue(() => {
    if (i?.()) return;
    u()
  }, [u, i]), b = ue(() => {
    x()
  }, [x]);
  return {
    handleInterrupt: m,
    handleExit: b,
    exitState: n
  }
}
export {
  Ws,
  OGt,
  s5n
};
