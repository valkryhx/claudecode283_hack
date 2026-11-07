// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { F } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { HPo } from "B:/~BUN/root/chunk-65j2302z.js";
import { R_, sFr } from "B:/~BUN/root/chunk-1fg2bpc3.js";
import { Je } from "B:/~BUN/root/chunk-9wbhv9z5.js";
class n {
  active = void 0;
  transportPersists = void 0;
  hostedWorker = !1;
  transportHasStored = !1;
  hostOwnedLocalStdin = !1;
  setActive(e) {
    this.active = e, this.transportPersists = e?.persistsOutboundFrames, this.hostedWorker = e?.isHostedWorker === !0, this.transportHasStored ||= e?.persistsOutboundFrames === !0, this.hostOwnedLocalStdin = !1;
  }
  remoteBridgeLive = null;
  bridgeMayBeLive() {
    return this.remoteBridgeLive === null || this.remoteBridgeLive();
  }
  markLocalTransport() {
    this.transportPersists = !1;
  }
  markHeadlessStart(e) {
    this.hostOwnedLocalStdin = !e.sdkUrl && e.readsProcessStdin && !HPo();
  }
}
var Vh = new Je(() => new n());
function km(e) {
  return sFr({
    hostedWorker: LIn(e),
    transportPersists: Vh.of(e).transportPersists
  });
}
function d0e(e) {
  return LIn(e) || Vh.of(e).transportPersists !== !1;
}
function kMi(e) {
  let r = Vh.of(e);
  return r.hostOwnedLocalStdin && r.transportPersists === !1 && !LIn(e) && !HPo();
}
function vMi(e) {
  return R_() && Vh.of(e).transportPersists === !0;
}
function LIn(e) {
  return e.host.launchOptions.diskless() || Vh.of(e).hostedWorker;
}
function jfs(e) {
  let r = Vh.of(e);
  return i.CLAUDE_CODE_REMOTE === !0 || r.transportHasStored || km(e) || r.remoteBridgeLive?.() === !0;
}
function Eo(e) {
  return km(e) || Vh.of(e).bridgeMayBeLive();
}
function u(e) {
  return Vh.of(e).transportPersists !== !1;
}
function Zlo(e) {
  return d0e(e);
}
function SXe(e) {
  return e.redactsPersistedLane() || u(e.session);
}
function Wfs(e, r) {
  return km(e) ? [] : r;
}
function edo(e, r, o, d = "last") {
  try {
    if (!km(e)) return d === "first" ? [r, ...o] : [...o, r];
    for (let s of o) t(`error_during_execution detail: ${s}`, {
      level: "error"
    });
    return [r];
  } catch (error) {
    return a(F(error)), [r];
  }
}
function _oe(e, r, o) {
  return km(e) ? o : r;
}
export { Vh, km, d0e, kMi, vMi, LIn, jfs, Eo, Zlo, SXe, Wfs, edo, _oe };