// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  TR
} from "B:/~BUN/root/chunk-damrp3r8.js";
import {
  on,
  mY
} from "B:/~BUN/root/chunk-pw5vpw1q.js";
import {
  Cs
} from "B:/~BUN/root/chunk-cbtzavb5.js";
import {
  mT
} from "B:/~BUN/root/chunk-91at02k2.js";
import {
  ae,
  Z,
  y,
  B
} from "B:/~BUN/root/chunk-5hr2ysa5.js";
B();

function qo(i, r, e = !0) {
  let {
    handleInterrupt: n,
    handleExit: t,
    exitState: o
  } = c(r, i), a = Z(() => ({
    "app:interrupt": n,
    "app:exit": t
  }), [n, t]);
  return on(a, {
    context: "Global",
    isActive: e
  }), o
}

function Ovt(i, r, e = !0) {
  let {
    handleInterrupt: n,
    handleExit: t,
    exitState: o
  } = c(r, i);
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

function c(i, r) {
  let {
    exit: e
  } = TR(), [n, t] = y({
    pending: !1,
    keyName: null
  }), o = Z(() => r ?? e, [r, e]), a = mT(), l = Cs("app:interrupt", "Global", "Ctrl-C"), p = Cs("app:exit", "Global", "Ctrl-D"), d = a && l ? l : "Ctrl-C", m = a && p ? p : "Ctrl-D", u = mY((s) => t({
    pending: s,
    keyName: d
  }), o), x = mY((s) => t({
    pending: s,
    keyName: m
  }), o), b = ae(() => {
    if (i?.()) return;
    u()
  }, [u, i]), C = ae(() => {
    x()
  }, [x]);
  return {
    handleInterrupt: b,
    handleExit: C,
    exitState: n
  }
}
export {
  qo,
  Ovt
};
