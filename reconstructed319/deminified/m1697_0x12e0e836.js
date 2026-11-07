// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { nL } from "B:/~BUN/root/chunk-27h4st9h.js";
import { la, rXe } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { Fqt } from "B:/~BUN/root/chunk-x12sgt91.js";
import { zne, E8, TYo, CYo, Iqt } from "B:/~BUN/root/chunk-s12bzehs.js";
function O2t() {
  return Fqt() || rXe("auto_mode_off") || Iqt() || rXe("unattended_serving_off");
}
function I2t(n) {
  try {
    if (Fqt()) return nL() === "settings" ? "settings" : "breaker";
    if (rXe("auto_mode_off")) return "settings";
    let e = rXe("unattended_serving_off");
    if (!Iqt(n) && !e) return "none";
    if (E8() || e) return "consent_forced_off";
    let t = zne();
    if (t === "declined") return "consent_declined";
    if (t === "accepted" || TYo()) return "consent_unknown";
    return CYo() ? "sandbox_off" : "consent_unset";
  } catch {
    return "consent_unknown";
  }
}
function DUo(n) {
  let e = I2t();
  if (e === "none") return;
  return {
    key: `served-auto-off-${e === "consent_unset" || e === "consent_declined" ? "consent" : e}`,
    text: la.auto_off_notice(n, la[`auto_off.reason.${e}`])
  };
}
export { O2t, I2t, DUo };