// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { lbe, UFt } from "B:/~BUN/root/chunk-teehnwdh.js";
import { ENe } from "B:/~BUN/root/chunk-w0nyevkg.js";
import { la, vOn, Zcs } from "B:/~BUN/root/chunk-cxcakgnv.js";
function MUo() {
  if (!Zcs()) return "off";
  try {
    return v("tengu_vast_tulip", !1) === !0 ? "enforce" : "observe";
  } catch {
    return t("tool host attestation: reading tengu_vast_tulip threw; observing", {
      level: "warn"
    }), "observe";
  }
}
function s(e) {
  let o = ENe(),
    {
      status: status,
      meetsLevel: meetsLevel,
      configException: configException
    } = UFt(e, o, {
      isCloudWorker: !1
    });
  return {
    status: status,
    verdict: !o.enforce ? "not_policed" : meetsLevel ? "pass" : configException ? "config_exception" : "below_floor"
  };
}
function wke(e) {
  let mode = MUo();
  return mode === "off" ? void 0 : {
    mode: mode,
    ...s(lbe(e))
  };
}
function oOe(e) {
  return e?.mode === "enforce" && e.verdict === "below_floor";
}
function z8n() {
  let attestation = wke("UNSPECIFIED");
  return {
    attestation: attestation,
    heldBack: oOe(attestation)
  };
}
function yJs(e) {
  try {
    e?.(vOn, la["repository_trust.served_calls.unattested"]);
  } catch (error) {
    t(`[remote-tools] the notice sink threw on ${vOn}: ${d(error)}`, {
      level: "error"
    });
  }
}
export { MUo, wke, oOe, z8n, yJs };