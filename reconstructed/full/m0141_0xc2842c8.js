// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  setMaxListeners as l
} from "events";
var b = 50;

function Hn(e = b) {
  let r = new AbortController;
  return l(e, r.signal), r
}

function A(e) {
  let r = this.deref();
  e.deref()?.abort(r?.signal.reason)
}

function d(e) {
  let r = this.deref(),
    t = e.deref();
  if (r && t) r.signal.removeEventListener("abort", t)
}
var f = new FinalizationRegistry(({
  parentSignalRef: e,
  handler: r
}) => {
  e.deref()?.removeEventListener("abort", r)
});

function s(e, r, t) {
  let o = new WeakRef(r),
    n = new WeakRef(e);
  if (e.signal.aborted) {
    t.call(n, o);
    return
  }
  let a = t.bind(n, o);
  e.signal.addEventListener("abort", a, {
    once: !0
  }), f.register(r, {
    parentSignalRef: new WeakRef(e.signal),
    handler: a
  }), r.signal.addEventListener("abort", d.bind(n, new WeakRef(a)), {
    once: !0
  })
}

function Ih(e, r) {
  let t = Hn(r);
  return s(e, t, A), t
}
class whe extends AbortController {
  turnController;
  constructor(e) {
    super();
    this.turnController = e;
    l(b, this.signal), s(e, this, A)
  }
}

function lN(e) {
  let r = e;
  while (r instanceof whe) r = r.turnController;
  return r
}

function Ile(e, r) {
  if (e.signal.aborted) return r.abort(e.signal.reason), () => {};
  let t = () => r.abort(e.signal.reason);
  return e.signal.addEventListener("abort", t, {
    once: !0
  }), () => e.signal.removeEventListener("abort", t)
}
var p = {
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

function Kl(e) {
  return p[e]
}

function Ci(e) {
  return e instanceof DOMException && e.name === "AbortError" ? e.message : e
}
var R = new Set(["user-cancel", "remote-cancel", "shutdown", "interrupt", "turn-abort"]);

function Ict(e) {
  return R.has(Ci(e))
}
var E = new Set(["interrupt", "turn-abort", "refusal-fallback-edit", "permission-stop"]);

function gte(e) {
  return E.has(Ci(e))
}

function $E(e) {
  return Ci(e.reason) === "shutdown" ? !0 : void 0
}
var i = "server-fallback-tombstone";

function AX(e) {
  return e.aborted && Ci(e.reason) === i
}
var k = new DOMException(i, "AbortError");

function Oct() {
  return k
}
var c = "subagent-park",
  m = new DOMException(c, "AbortError");

function iMr() {
  return m
}

function aMr(e) {
  return e.aborted && Ci(e.reason) === c
}

function E6e(e) {
  switch (Ci(e)) {
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
    case i:
      return "server_fallback_tombstone";
    case c:
      return "subagent_park";
    default:
      return "turn_teardown"
  }
}

function lMr(e) {
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

function w(e) {
  let r = this.deref();
  if (!r || !Ict(r.signal.reason)) return;
  e.deref()?.abort(r.signal.reason)
}
var u = 600000;

function cMr(e) {
  if (Number.isNaN(e)) return u;
  return Math.min(3600000, Math.max(u, Math.round(e * 1.5)))
}

function _(e) {
  e.deref()?.abort(Kl("recovery-timeout"))
}

function dMr(e, r) {
  let t = Hn();
  if (s(e, t, w), t.signal.aborted) return t;
  let o = setTimeout(_, r, new WeakRef(t));
  return o.unref(), t.signal.addEventListener("abort", clearTimeout.bind(void 0, o), {
    once: !0
  }), t
}
export {
  Hn,
  Ih,
  whe,
  lN,
  Ile,
  Kl,
  Ci,
  Ict,
  gte,
  $E,
  AX,
  Oct,
  iMr,
  aMr,
  E6e,
  lMr,
  cMr,
  dMr
};
