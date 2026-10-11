// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { ek } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { $j, Wt } from "B:/~BUN/root/chunk-r2yrqvry.js";
import { os } from "B:/~BUN/root/chunk-0d8a76zs.js";
import { nw } from "B:/~BUN/root/chunk-cdch6ag4.js";
import { se, X, g, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
N();
function Wr(i, r, isActive = !0) {
  let {
      handleInterrupt: handleInterrupt,
      handleExit: handleExit,
      exitState: exitState
    } = c(r, i),
    a = X(() => ({
      "app:interrupt": handleInterrupt,
      "app:exit": handleExit
    }), [handleInterrupt, handleExit]);
  return Wt(a, {
    context: "Global",
    isActive: isActive
  }), exitState;
}
function YJe(i, r, e = !0) {
  let {
    handleInterrupt: n,
    handleExit: t,
    exitState: exitState_2
  } = c(r, i);
  return {
    entries: X(() => e ? [{
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
    } = ek(),
    [exitState_3, t] = g({
      pending: !1,
      keyName: null
    }),
    o = X(() => r ?? exit, [r, exit]),
    a = nw(),
    l = os("app:interrupt", "Global", "Ctrl-C"),
    p = os("app:exit", "Global", "Ctrl-D"),
    keyName = a && l ? l : "Ctrl-C",
    keyName_2 = a && p ? p : "Ctrl-D",
    u = $j(pending => t({
      pending: pending,
      keyName: keyName
    }), o),
    x = $j(pending_2 => t({
      pending: pending_2,
      keyName: keyName_2
    }), o),
    handleInterrupt_2 = se(() => {
      if (i?.()) return;
      u();
    }, [u, i]),
    handleExit_2 = se(() => {
      x();
    }, [x]);
  return {
    handleInterrupt: handleInterrupt_2,
    handleExit: handleExit_2,
    exitState: exitState_3
  };
}
export { Wr, YJe };