// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  ek
} from "B:/~BUN/root/chunk-1gn8pz4b.js";
import {
  $j,
  Wt
} from "B:/~BUN/root/chunk-r2yrqvry.js";
import {
  os
} from "B:/~BUN/root/chunk-0d8a76zs.js";
import {
  nw
} from "B:/~BUN/root/chunk-cdch6ag4.js";
import {
  se,
  X,
  g,
  N
} from "B:/~BUN/root/chunk-rnj6pcz5.js";
N();

function Wr(i, r, e = !0) {
  let {
    handleInterrupt: n,
    handleExit: t,
    exitState: o
  } = c(r, i), a = X(() => ({
    "app:interrupt": n,
    "app:exit": t
  }), [n, t]);
  return Wt(a, {
    context: "Global",
    isActive: e
  }), o
}

function YJe(i, r, e = !0) {
  let {
    handleInterrupt: n,
    handleExit: t,
    exitState: o
  } = c(r, i);
  return {
    entries: X(() => e ? [{
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
  } = ek(), [n, t] = g({
    pending: !1,
    keyName: null
  }), o = X(() => r ?? e, [r, e]), a = nw(), l = os("app:interrupt", "Global", "Ctrl-C"), p = os("app:exit", "Global", "Ctrl-D"), d = a && l ? l : "Ctrl-C", m = a && p ? p : "Ctrl-D", u = $j((s) => t({
    pending: s,
    keyName: d
  }), o), x = $j((s) => t({
    pending: s,
    keyName: m
  }), o), y = se(() => {
    if (i?.()) return;
    u()
  }, [u, i]), b = se(() => {
    x()
  }, [x]);
  return {
    handleInterrupt: y,
    handleExit: b,
    exitState: n
  }
}
export {
  Wr,
  YJe
};
