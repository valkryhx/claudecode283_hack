// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Ao
} from "B:/~BUN/root/chunk-r5zmhp23.js";
import {
  setMaxListeners as A
} from "events";
var BDr = 1000;

function lan(e, r, o, {
  unref: t
} = {
  unref: !0
}) {
  let n = {
    onExpire: e,
    clock: o,
    expiresAt: o.monotonicNow() + r,
    unref: t,
    cancel: void 0
  };
  return l(n, r), {
    clear: m.bind(void 0, n)
  }
}

function l(e, r) {
  e.cancel = e.clock.setTimeout(k.bind(void 0, e), Math.min(Math.max(0, r || 0), 2147483647), {
    unref: e.unref
  })
}

function k(e) {
  e.cancel = void 0;
  let r = e.expiresAt - e.clock.monotonicNow();
  if (!(r > 1000)) {
    e.onExpire();
    return
  }
  l(e, r)
}

function m(e) {
  e.cancel?.(), e.cancel = void 0
}
var d = 50;

function Xn(e = d) {
  let r = new AbortController;
  return A(e, r.signal), r
}

function f(e) {
  let r = this.deref();
  e.deref()?.abort(r?.signal.reason)
}

function R(e) {
  let r = this.deref(),
    o = e.deref();
  if (r && o) r.signal.removeEventListener("abort", o)
}
var w = new FinalizationRegistry(({
    parentSignalRef: e,
    handler: r
  }) => {
    e.deref()?.removeEventListener("abort", r)
  }),
  p = new WeakMap;

function _() {
  p.delete(this)
}

function i(e, r, o) {
  p.set(r.signal, r), r.signal.addEventListener("abort", _, {
    once: !0
  });
  let t = new WeakRef(r),
    n = new WeakRef(e);
  if (e.signal.aborted) {
    o.call(n, t);
    return
  }
  let a = o.bind(n, t);
  e.signal.addEventListener("abort", a, {
    once: !0
  }), w.register(r, {
    parentSignalRef: new WeakRef(e.signal),
    handler: a
  }), r.signal.addEventListener("abort", R.bind(n, new WeakRef(a)), {
    once: !0
  })
}

function Ju(e, r) {
  let o = Xn(r);
  return i(e, o, f), o
}
class OV extends AbortController {
  turnController;
  constructor(e) {
    super();
    this.turnController = e;
    A(d, this.signal), i(e, this, f)
  }
}
var E = "ask-withdrawn-by-asker",
  u = new DOMException(E, "AbortError");

function jDr(e) {
  return e.aborted && Zs(e.reason) === E
}

function WDr(e, r) {
  let o = new OV(e);
  if (o.signal.addEventListener("abort", () => {
      if (!r.aborted && !e.signal.aborted) e.abort(o.signal.reason)
    }, {
      once: !0
    }), r.aborted) o.abort(u);
  else r.addEventListener("abort", () => o.abort(u), {
    once: !0
  });
  return o
}

function xR(e) {
  let r = e;
  while (r instanceof OV) r = r.turnController;
  return r
}

function AJ(e, r) {
  if (e.signal.aborted) return r.abort(e.signal.reason), () => {};
  let o = () => r.abort(e.signal.reason);
  return e.signal.addEventListener("abort", o, {
    once: !0
  }), () => e.signal.removeEventListener("abort", o)
}
var S = {
  "user-cancel": new DOMException("user-cancel", "AbortError"),
  "remote-cancel": new DOMException("remote-cancel", "AbortError"),
  shutdown: new DOMException("shutdown", "AbortError"),
  interrupt: new DOMException("interrupt", "AbortError"),
  "turn-abort": new DOMException("turn-abort", "AbortError"),
  background: new DOMException("background", "AbortError"),
  "refusal-fallback-edit": new DOMException("refusal-fallback-edit", "AbortError"),
  "recovery-timeout": new DOMException("recovery-timeout", "AbortError"),
  "permission-stop": new DOMException("permission-stop", "AbortError")
};

function $l(e) {
  return S[e]
}

function Zs(e) {
  return e instanceof DOMException && e.name === "AbortError" ? e.message : e
}
async function vJi(e, r, o) {
  let t = new AbortController;

  function n() {
    if (Zs(r.reason) !== "interrupt") t.abort()
  }
  if (r.aborted) n();
  else r.addEventListener("abort", n, {
    once: !0
  });
  try {
    return await Ao(e, t.signal, o)
  } finally {
    r.removeEventListener("abort", n)
  }
}
var x = new Set(["user-cancel", "remote-cancel", "shutdown", "interrupt", "turn-abort"]);

function Vjn(e) {
  return x.has(Zs(e))
}
var v = new Set(["user-cancel", "remote-cancel"]);

function KFe(e) {
  return v.has(Zs(e))
}
var g = new Set(["remote-cancel", "interrupt"]);

function EJi(e) {
  return g.has(Zs(e))
}
var C = new Set(["interrupt", "turn-abort", "refusal-fallback-edit", "permission-stop"]);

function Aie(e) {
  return C.has(Zs(e))
}

function Jx(e) {
  return Zs(e.reason) === "shutdown" ? !0 : void 0
}
var s = "server-fallback-tombstone";

function fpe(e) {
  return e.aborted && Zs(e.reason) === s
}
var O = new DOMException(s, "AbortError");

function Kjn() {
  return O
}
var c = "subagent-park",
  T = new DOMException(c, "AbortError");

function TJi() {
  return T
}

function CJi(e) {
  return e.aborted && Zs(e.reason) === c
}

function gAe(e) {
  switch (Zs(e)) {
    case "user-cancel":
      return "user_cancel";
    case "remote-cancel":
      return "remote_cancel";
    case "shutdown":
      return "shutdown";
    case "interrupt":
      return "interrupt";
    case "turn-abort":
      return "interrupt";
    case "background":
      return "background";
    case "recovery-timeout":
      return "recovery_timeout";
    case "permission-stop":
      return "turn_teardown";
    case s:
      return "server_fallback_tombstone";
    case c:
      return "subagent_park";
    default:
      return "turn_teardown"
  }
}

function RJi(e) {
  switch (e) {
    case "user_cancel":
    case "remote_cancel":
    case "shutdown":
    case "interrupt":
    case "background":
    case "subagent_park":
      return !0;
    case "turn_teardown":
    case "recovery_timeout":
    case "server_fallback_tombstone":
      return !1
  }
}

function y(e) {
  let r = this.deref();
  if (!r || !Vjn(r.signal.reason)) return;
  e.deref()?.abort(r.signal.reason)
}
var b = 600000;

function zTo(e) {
  if (Number.isNaN(e)) return b;
  return Math.min(3600000, Math.max(b, Math.round(e * 1.5)))
}

function M(e) {
  e.deref()?.abort($l("recovery-timeout"))
}

function zDr(e, r, o) {
  return lan(M.bind(void 0, new WeakRef(e)), r, o)
}

function AJi(e, r, o) {
  let t = Xn();
  if (i(e, t, y), t.signal.aborted) return t;
  return t.signal.addEventListener("abort", zDr(t, r, o).clear, {
    once: !0
  }), t
}
export {
  BDr,
  lan,
  Xn,
  Ju,
  OV,
  jDr,
  WDr,
  xR,
  AJ,
  $l,
  Zs,
  vJi,
  Vjn,
  KFe,
  EJi,
  Aie,
  Jx,
  fpe,
  Kjn,
  TJi,
  CJi,
  gAe,
  RJi,
  zTo,
  zDr,
  AJi
};
