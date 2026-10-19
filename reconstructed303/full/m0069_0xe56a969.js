// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  PDe,
  ke,
  ii,
  yR,
  JZe,
  wI,
  Bn
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  $n
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  AsyncLocalStorage as a
} from "async_hooks";
var n = {
  ccr: {
    controlChannel: !0,
    modelCatalog: !0,
    setPermissionMode: !0,
    sessionRecord: !0,
    fanout: !0,
    presence: !0,
    catchupReplay: !0,
    bashExec: !0,
    fileRead: !0,
    sendNow: !0
  },
  ssh: {
    controlChannel: !0,
    modelCatalog: !0,
    setPermissionMode: !0,
    sessionRecord: !1,
    fanout: !1,
    presence: !1,
    catchupReplay: !1,
    bashExec: !1,
    fileRead: !0,
    sendNow: !1
  },
  direct: {
    controlChannel: !1,
    modelCatalog: !1,
    setPermissionMode: !1,
    sessionRecord: !1,
    fanout: !1,
    presence: !1,
    catchupReplay: !1,
    bashExec: !1,
    fileRead: !1,
    sendNow: !1
  }
};
var LBr = {
  isRemoteMode: !1
};

function Rr() {
  return wI().remote
}
var TXn = "Stopped waiting for the remote \u2014 the command may still complete there";

function Tt() {
  return Bn() || Rr() !== null
}

function ATe(e, o) {
  return Tt() ? o : e
}

function kl() {
  return $jo(Rr())
}

function $jo(e) {
  return e?.caps?.controlChannel === !0 && !e.viewerOnly
}

function CXn() {
  return !1
}

function lT(e) {
  return Rr()?.caps?.[e] === !0
}

function NBr(e, o) {
  return o && !(e.isRemoteMode && e.viewerOnly)
}

function l(e) {
  return Promise.reject(Error(`sendControlRequest not yet wired for ${e} transport`))
}

function FBr(e, o, r, s) {
  if (!o.isRemoteMode) return LBr;
  return {
    kind: e,
    isRemoteMode: !0,
    viewerOnly: r,
    caps: n[e],
    sessionId: s,
    sendMessage: o.sendMessage,
    cancelRequest: o.cancelRequest,
    cancelHeldMessages: o.cancelHeldMessages ?? (() => !1),
    sendQueuedNow: o.sendQueuedNow ?? (() => Promise.resolve("failed")),
    workerSendsNow: o.workerSendsNow ?? (() => !1),
    holdsSends: o.holdsSends ?? (() => !1),
    disconnect: o.disconnect,
    sendControlRequest: o.sendControlRequest ?? (() => l(e))
  }
}
var t = new a;

function qm(e, o) {
  return t.run({
    cwd: $n(e)
  }, o)
}

function MYs(e) {
  return Tt() ? e() : t.exit(e)
}

function vmn(e, o) {
  return qm(e ?? ce(), o)
}

function kmn(e, o) {
  return e === null ? o() : vmn(e.cwd, o)
}

function $4() {
  return t.getStore() !== void 0
}

function Emn(e) {
  let o = t.getStore();
  if (o) o.cwd = $n(e);
  else JZe(e)
}

function Tmn() {
  return t.getStore()?.cwd ?? yR()
}

function Ll() {
  if (t.getStore()?.cwd === void 0 && ii() === null) return null;
  return ce()
}

function ce() {
  try {
    return Tmn()
  } catch (e) {
    if (PDe(e) && ii() === null) throw e;
    return ke()
  }
}

function HBr() {
  return !$4() && Tt() ? void 0 : ce()
}
export {
  LBr,
  Rr,
  TXn,
  Tt,
  ATe,
  kl,
  $jo,
  CXn,
  lT,
  NBr,
  FBr,
  qm,
  MYs,
  vmn,
  kmn,
  $4,
  Emn,
  Tmn,
  Ll,
  ce,
  HBr
};
