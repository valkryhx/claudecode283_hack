// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { l } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { x } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { aFe, $Dr } from "B:/~BUN/root/chunk-9qtz41py.js";
import { Gle } from "B:/~BUN/root/chunk-hjery5bx.js";
import { obt } from "B:/~BUN/root/chunk-6q0mnrxy.js";
import { Di, qRr } from "B:/~BUN/root/chunk-1mdeqc2r.js";
function xtr() {
  if (!qRr()) return "off";
  try {
    return x("tengu_vast_tulip", !1) === !0 ? "enforce" : "observe";
  } catch {
    return t("tool host attestation: reading tengu_vast_tulip threw; observing", {
      level: "warn"
    }), "observe";
  }
}
function s(e) {
  let o = Gle(),
    {
      status: status,
      meetsLevel: meetsLevel,
      configException: configException
    } = $Dr(e, o, {
      isCloudWorker: !1
    });
  return {
    status: status,
    verdict: !o.enforce ? "not_policed" : meetsLevel ? "pass" : configException ? "config_exception" : "below_floor"
  };
}
function EIe(e) {
  let mode = xtr();
  return mode === "off" ? void 0 : {
    mode: mode,
    ...s(aFe(e))
  };
}
function TIe(e) {
  return e?.mode === "enforce" && e.verdict === "below_floor";
}
function Fje() {
  let attestation = EIe("UNSPECIFIED");
  return {
    attestation: attestation,
    heldBack: TIe(attestation)
  };
}
function qVt(e) {
  try {
    e?.(obt, Di["repository_trust.served_calls.unattested"]);
  } catch (error) {
    t(`[remote-tools] the notice sink threw on ${obt}: ${l(error)}`, {
      level: "error"
    });
  }
}
export { xtr, EIe, TIe, Fje, qVt };