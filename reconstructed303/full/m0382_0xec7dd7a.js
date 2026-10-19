// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  at
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  H
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  Fx,
  A3n
} from "B:/~BUN/root/chunk-c6mbjdcy.js";
class n {
  active = void 0;
  transportPersists = void 0;
  hostedWorker = !1;
  setActive(r) {
    this.active = r, this.transportPersists = r?.persistsOutboundFrames, this.hostedWorker = r?.isHostedWorker === !0
  }
  remoteBridgeLive = null;
  bridgeMayBeLive() {
    return this.remoteBridgeLive === null || this.remoteBridgeLive()
  }
  markLocalTransport() {
    this.transportPersists = !1
  }
}
var TS = new at(() => new n);

function Yp(r) {
  return A3n({
    hostedWorker: aBn(r),
    transportPersists: TS.of(r).transportPersists
  })
}

function UTs(r) {
  return aBn(r) || TS.of(r).transportPersists !== !1
}

function BTs(r) {
  return Fx() && TS.of(r).transportPersists === !0
}

function aBn(r) {
  return r.host.launchOptions.diskless() || TS.of(r).hostedWorker
}

function bo(r) {
  return Yp(r) || TS.of(r).bridgeMayBeLive()
}

function n_o(r, e) {
  return Yp(r) ? r_o(e) : e
}

function r_o(r) {
  return r.map((e) => ({
    name: e.name,
    status: e.status
  }))
}

function o_o(r, e) {
  return Yp(r) ? [] : e
}

function lEr(r, e, s, i = "last") {
  try {
    if (!Yp(r)) return i === "first" ? [e, ...s] : [...s, e];
    for (let o of s) t(`error_during_execution detail: ${o}`, {
      level: "error"
    });
    return [e]
  } catch (o) {
    return l(H(o)), [e]
  }
}

function nee(r, e, s) {
  return Yp(r) ? s : e
}
export {
  TS,
  Yp,
  UTs,
  BTs,
  aBn,
  bo,
  n_o,
  r_o,
  o_o,
  lEr,
  nee
};
