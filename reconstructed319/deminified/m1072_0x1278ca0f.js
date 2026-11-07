// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { oE } from "B:/~BUN/root/chunk-qey16aan.js";
import { Sn, G7 } from "B:/~BUN/root/chunk-v95bwhaa.js";
import { wi } from "B:/~BUN/root/chunk-hfz1e87n.js";
import { sx } from "B:/~BUN/root/chunk-w3jccevj.js";
import { ue, Z, y, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
j();
function Ws(i, r, isActive = !0) {
  let {
      handleInterrupt: handleInterrupt,
      handleExit: handleExit,
      exitState: exitState
    } = s5n(r, i),
    a = Z(() => ({
      "app:interrupt": handleInterrupt,
      "app:exit": handleExit
    }), [handleInterrupt, handleExit]);
  return Sn(a, {
    context: "Global",
    isActive: isActive
  }), exitState;
}
function OGt(i, r, e = !0) {
  let {
    handleInterrupt: n,
    handleExit: t,
    exitState: exitState_2
  } = s5n(r, i);
  return {
    entries: Z(() => e ? [{
      action: "app:interrupt",
      run: n
    }, {
      action: "app:exit",
      run: t
    }] : [], [e, n, t]),
    exitState: exitState_2
  };
}
function s5n(i, r) {
  let {
      exit: exit
    } = oE(),
    [exitState_3, t] = y({
      pending: !1,
      keyName: null
    }),
    o = Z(() => r ?? exit, [r, exit]),
    a = sx(),
    l = wi("app:interrupt", "Global", "Ctrl-C"),
    p = wi("app:exit", "Global", "Ctrl-D"),
    keyName = a && l ? l : "Ctrl-C",
    keyName_2 = a && p ? p : "Ctrl-D",
    u = G7(pending => t({
      pending: pending,
      keyName: keyName
    }), o),
    x = G7(pending_2 => t({
      pending: pending_2,
      keyName: keyName_2
    }), o),
    handleInterrupt_2 = ue(() => {
      if (i?.()) return;
      u();
    }, [u, i]),
    handleExit_2 = ue(() => {
      x();
    }, [x]);
  return {
    handleInterrupt: handleInterrupt_2,
    handleExit: handleExit_2,
    exitState: exitState_3
  };
}
export { Ws, OGt, s5n };