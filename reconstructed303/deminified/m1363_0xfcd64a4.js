// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { TR } from "B:/~BUN/root/chunk-damrp3r8.js";
import { on, mY } from "B:/~BUN/root/chunk-pw5vpw1q.js";
import { Cs } from "B:/~BUN/root/chunk-cbtzavb5.js";
import { mT } from "B:/~BUN/root/chunk-91at02k2.js";
import { ae, Z, y, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
B();
function qo(i, r, isActive = !0) {
  let {
      handleInterrupt: handleInterrupt,
      handleExit: handleExit,
      exitState: exitState
    } = c(r, i),
    a = Z(() => ({
      "app:interrupt": handleInterrupt,
      "app:exit": handleExit
    }), [handleInterrupt, handleExit]);
  return on(a, {
    context: "Global",
    isActive: isActive
  }), exitState;
}
function Ovt(i, r, e = !0) {
  let {
    handleInterrupt: n,
    handleExit: t,
    exitState: exitState_2
  } = c(r, i);
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
function c(i, r) {
  let {
      exit: exit
    } = TR(),
    [exitState_3, t] = y({
      pending: !1,
      keyName: null
    }),
    o = Z(() => r ?? exit, [r, exit]),
    a = mT(),
    l = Cs("app:interrupt", "Global", "Ctrl-C"),
    p = Cs("app:exit", "Global", "Ctrl-D"),
    keyName = a && l ? l : "Ctrl-C",
    keyName_2 = a && p ? p : "Ctrl-D",
    u = mY(pending => t({
      pending: pending,
      keyName: keyName
    }), o),
    x = mY(pending_2 => t({
      pending: pending_2,
      keyName: keyName_2
    }), o),
    handleInterrupt_2 = ae(() => {
      if (i?.()) return;
      u();
    }, [u, i]),
    handleExit_2 = ae(() => {
      x();
    }, [x]);
  return {
    handleInterrupt: handleInterrupt_2,
    handleExit: handleExit_2,
    exitState: exitState_3
  };
}
export { qo, Ovt };