// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Nt
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  te
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  d
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  R1
} from "B:/~BUN/root/chunk-bt3h0syz.js";
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
var KA = new Nt(() => new n);

function Rg(r) {
  let e = KA.of(r);
  return e.hostedWorker || R1() && e.transportPersists !== !1
}

function Po(r) {
  return Rg(r) || KA.of(r).bridgeMayBeLive()
}

function tTr(r, e) {
  return Rg(r) ? nTr(e) : e
}

function nTr(r) {
  return r.map((e) => ({
    name: e.name,
    status: e.status
  }))
}

function rTr(r, e) {
  return Rg(r) ? [] : e
}

function rUn(r, e, s, i = "last") {
  try {
    if (!Rg(r)) return i === "first" ? [e, ...s] : [...s, e];
    for (let o of s) t(`error_during_execution detail: ${o}`, {
      level: "error"
    });
    return [e]
  } catch (o) {
    return d(te(o)), [e]
  }
}

function w3(r, e, s) {
  return Rg(r) ? s : e
}
export {
  KA,
  Rg,
  Po,
  tTr,
  nTr,
  rTr,
  rUn,
  w3
};
