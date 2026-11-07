// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { b } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { IN } from "B:/~BUN/root/chunk-15vbkr6z.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { g } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { Et, Wd } from "B:/~BUN/root/chunk-2f1svh63.js";
import { rsn, Sc, AA, Pz, w$t, v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { aSt, rxe, YV } from "B:/~BUN/root/chunk-c79wfkj4.js";
import { YW } from "B:/~BUN/root/chunk-fcp4egnh.js";
async function WDo(n) {
  try {
    if (!rxe() || rsn() || !v("tengu_memoized_newt", !0)) return null;
    let o = await Pz(n);
    if (!Sc() || !AA() || !YW()) return null;
    let e = YV();
    if (e?.createdBy === aSt.created_by) return null;
    let i = typeof e?.organizationName === "string" ? Wd(Et(e.organizationName.replace(/[\u00B7\u26A0]/g, " "), 60).replace(/[\u00B7\u26A0]/g, " ")) : "";
    return {
      reason: o ? "login_ended" : "no_login",
      organization: /[\p{L}\p{N}]/u.test(i) ? `${i} (Claude Console)` : "your Claude Console organization"
    };
  } catch (error) {
    return t(`Could not tell whether an Anthropic profile is billed: ${d(error)}`, {
      level: "error"
    }), null;
  }
}
function nYs(n, o) {
  let e = !1;
  async function i() {
    let r = await WDo(o);
    if (e || r?.reason !== "login_ended") return;
    e = !0;
    try {
      IN(`Warning: the claude.ai login on this machine has ended. This run uses the sign-in from ant auth login instead, and its usage is billed to ${r.organization}. Run claude auth login to sign in again, or claude auth logout to remove the ended login and keep that sign-in without this warning.
`), g("auth_profile_billing_notice", {
        reason: b("login_ended")
      });
    } catch (error) {
      a(error);
    }
  }
  i(), w$t(n, () => void i());
}
export { WDo, nYs };