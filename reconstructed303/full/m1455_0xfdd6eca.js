// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  CCt
} from "B:/~BUN/root/chunk-62ynkm2y.js";
import {
  KP
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  B5e,
  Gs
} from "B:/~BUN/root/chunk-dn8rakwm.js";
import {
  I8,
  K$,
  h6t,
  cCt
} from "B:/~BUN/root/chunk-bz422xf8.js";

function xvt() {
  return CCt() || B5e("auto_mode_off") || cCt() || B5e("unattended_serving_off")
}

function Pvt(n) {
  try {
    if (CCt()) return KP() === "settings" ? "settings" : "breaker";
    if (B5e("auto_mode_off")) return "settings";
    let e = B5e("unattended_serving_off");
    if (!cCt(n) && !e) return "none";
    if (K$() || e) return "consent_forced_off";
    let t = I8();
    if (t === "declined") return "consent_declined";
    return t === "accepted" || h6t() ? "consent_unknown" : "consent_unset"
  } catch {
    return "consent_unknown"
  }
}

function HKr(n) {
  let e = Pvt();
  if (e === "none") return;
  return {
    key: `served-auto-off-${e==="consent_unset"||e==="consent_declined"?"consent":e}`,
    text: Gs.auto_off_notice(n, Gs[`auto_off.reason.${e}`])
  }
}
export {
  xvt,
  Pvt,
  HKr
};
