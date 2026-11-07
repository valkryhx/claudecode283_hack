// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Ixe,
  Ee,
  Vs,
  MC,
  Awt,
  q,
  FN,
  xn,
  ZKn
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  k
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  En,
  Zxe,
  Foa,
  Y$r
} from "B:/~BUN/root/chunk-h4acfc9y.js";
import {
  sa
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  AsyncLocalStorage as f
} from "async_hooks";
import {
  realpathSync as g,
  statSync as d
} from "fs";
import {
  dirname as C
} from "path";
var a = {
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
    sendNow: !0,
    deliveryReports: !0
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
    sendNow: !1,
    deliveryReports: !1
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
    sendNow: !1,
    deliveryReports: !1
  }
};
var APo = {
  isRemoteMode: !1
};

function rr() {
  return FN().remote
}
var JFr = "Stopped waiting for the remote \u2014 the command may still complete there";

function Ct() {
  return xn() || rr() !== null
}

function s$e(e, n) {
  return Ct() ? n : e
}

function Tl() {
  return rjs(rr())
}

function rjs(e) {
  return e?.caps?.controlChannel === !0 && !e.viewerOnly
}

function QFr() {
  return !1
}

function PT(e) {
  return rr()?.caps?.[e] === !0
}

function xPo(e, n) {
  return n && !(e.isRemoteMode && e.viewerOnly)
}

function m(e) {
  return Promise.reject(Error(`sendControlRequest not yet wired for ${e} transport`))
}

function PPo(e, n, o, t, s = !1) {
  if (!n.isRemoteMode) return APo;
  return {
    kind: e,
    isRemoteMode: !0,
    viewerOnly: o,
    caps: a[e],
    sessionId: t,
    ...s && {
      consoleProfileBearer: s
    },
    sendMessage: n.sendMessage,
    cancelRequest: n.cancelRequest,
    cancelHeldMessages: n.cancelHeldMessages ?? (() => !1),
    sendQueuedNow: n.sendQueuedNow ?? (() => Promise.resolve("failed")),
    workerSendsNow: n.workerSendsNow ?? (() => !1),
    serviceTimeMs: n.serviceTimeMs ?? (() => {
      return
    }),
    holdsSends: n.holdsSends ?? (() => !1),
    disconnect: n.disconnect,
    sendControlRequest: n.sendControlRequest ?? (() => m(e)),
    ...!1
  }
}
var i = new f,
  ojs = "walked:";

function Xm(e, n) {
  return i.run({
    cwd: En(e)
  }, n)
}
async function ZFr(e, {
  recoversIfAlreadyGone: n
} = {
  recoversIfAlreadyGone: !1
}) {
  let o = ol();
  if (o === null) return e();
  let t = r(),
    s = {
      outer: t,
      isOver: !1,
      physical: Ydn(o),
      recoversIfAlreadyGone: n && t?.call?.recoversIfAlreadyGone !== !1
    };
  try {
    return await i.run({
      cwd: o,
      call: s
    }, e)
  } finally {
    s.isOver = !0
  }
}

function JSt(e) {
  let n = c();
  return n === void 0 ? i.exit(e) : i.run(n, e)
}

function QSt() {
  let e = r();
  return e?.call === void 0 ? void 0 : e.cwd
}

function Mna() {
  return r()?.call?.physical
}

function eHr(e) {
  let n = r()?.call;
  return n === void 0 || e !== !1 && n.physical === e
}

function Dna() {
  let e = r()?.call;
  return e?.recoversIfAlreadyGone === !0 && e.physical === null
}
async function sjs(e) {
  return q() ? void 0 : p(e, await Foa(e))
}

function Ydn(e) {
  return q() ? void 0 : p(e, Zxe(e))
}

function Lna(e) {
  return Ct() ? e() : i.exit(e)
}

function uVn(e, n) {
  return Xm(e ?? pe(), n)
}

function fVn(e, n) {
  return e === null ? n() : uVn(e.cwd, n)
}

function eB() {
  return c() !== void 0
}

function Xdn(e) {
  let n = En(e),
    o = r(),
    t = o?.call === void 0 ? void 0 : Ydn(n);
  while (o?.call !== void 0) o.cwd = n, o.call.physical = t, o = l(o.call.outer);
  if (o) o.cwd = n;
  else Awt(e)
}

function pVn() {
  return r()?.cwd ?? MC()
}

function ol() {
  if (r()?.cwd === void 0 && Vs() === null) return null;
  return pe()
}

function pe() {
  try {
    return pVn()
  } catch (e) {
    if (Ixe(e) && Vs() === null) throw e;
    return Ee()
  }
}

function OPo() {
  return !eB() && Ct() ? void 0 : pe()
}

function ZSt(e) {
  return ZKn() ?? e
}

function u(e) {
  return eB() ? e : ZSt(e)
}

function ewt() {
  return u(pe())
}

function Nna() {
  try {
    let e = ol();
    return e === null ? null : u(e)
  } catch {
    return null
  }
}

function l(e) {
  let n = e;
  while (n?.call?.isOver === !0) n = n.call.outer;
  return n
}

function r() {
  return l(i.getStore())
}

function c() {
  let e = r();
  while (e?.call !== void 0) e = l(e.call.outer);
  return e
}

function p(e, n) {
  if (n.real !== void 0) return n.real;
  switch (n.code) {
    case "ENOENT":
      return null;
    case "EPERM":
    case "EACCES":
      return;
    case "UNKNOWN":
    case "EUNKNOWN":
    case "EISDIR":
      try {
        let {
          dev: o,
          ino: t
        } = Y$r(() => d(e, {
          bigint: !0
        }));
        if (sa(t)) return !1;
        try {
          let s = Y$r(() => d(C(e), {
            bigint: !0
          }));
          if (s.dev !== o || s.ino === t) return !1;
          return `${ojs}${o}:${t}:${Y$r(()=>g(e))}`
        } catch {
          return !1
        }
      } catch (o) {
        return k(o) === "ENOENT" ? null : !1
      }
    default:
      return !1
  }
}
export {
  APo,
  rr,
  JFr,
  Ct,
  s$e,
  Tl,
  rjs,
  QFr,
  PT,
  xPo,
  PPo,
  ojs,
  Xm,
  ZFr,
  JSt,
  QSt,
  Mna,
  eHr,
  Dna,
  sjs,
  Ydn,
  Lna,
  uVn,
  fVn,
  eB,
  Xdn,
  pVn,
  ol,
  pe,
  OPo,
  ZSt,
  ewt,
  Nna
};
