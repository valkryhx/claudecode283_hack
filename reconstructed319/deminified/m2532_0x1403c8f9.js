// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Xr } from "B:/~BUN/root/chunk-game8aqv.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { Z2e, Ln, Rt, hn, $Re, ER } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Xhe } from "B:/~BUN/root/chunk-dqprk713.js";
import { oUe, Wzt, wPe } from "B:/~BUN/root/chunk-af0azp4f.js";
import { e } from "B:/~BUN/root/chunk-t16eynda.js";
import { Zi } from "B:/~BUN/root/chunk-r2kdqtaa.js";
function d(n) {
  return `https://claude.ai/upgrade/max?utm_source=claude_code&utm_medium=cli&utm_campaign=${n}`;
}
async function Ima(n, u) {
  return rot(n, u, "upgrade_command");
}
async function rot(n, u, g) {
  let l = Xhe(n),
    c = d(g);
  try {
    if (Rt()) {
      let t = Ln(),
        s = !1;
      if (t?.subscriptionType && t?.rateLimitTier) s = t.subscriptionType === "max" && t.rateLimitTier === "default_claude_max_20x";else if (t?.accessToken) {
        let o = await Z2e(t.accessToken);
        s = o?.organization?.organization_type === "claude_max" && o?.organization?.rate_limit_tier === "default_claude_max_20x";
      }
      if (s) {
        let o = $Re();
        return setTimeout(l, 0, o ? `You\u2019re already on the highest individual plan. For additional usage, run ${o}.` : "You are already on the highest individual plan. For additional usage, run /login to switch to an API usage-billed account."), null;
      }
      let r = hn()?.billingType;
      if (ER() && (r === "apple_subscription" || r === "google_play_subscription")) {
        let o = $Re(),
          p = r === "apple_subscription" ? "Your plan is billed through the App Store. To change it, open Claude for iOS and go to Settings \u2192 Billing. After you change it, run /login here so the new plan takes effect." : "Your plan is billed through Google Play. To change it, open Claude for Android and go to Settings. After you change it, run /login here so the new plan takes effect.";
        return setTimeout(l, 0, o ? `${p} For additional usage now, run ${o}.` : p), null;
      }
    }
    await Zi(c);
    let i = hn(),
      previousAccount = i && {
        accountUuid: i.accountUuid,
        organizationUuid: i.organizationUuid
      },
      previousGatewayAuth = Xr();
    return e(wPe, {
      startingMessage: "Starting new login following /upgrade. Exit with Ctrl-C to use existing account.",
      onDone: async (t, s, setAppState) => {
        let o = await oUe(u, t, {
          setAppState: setAppState,
          previousAccount: previousAccount,
          previousGatewayAuth: previousGatewayAuth
        });
        l(...Wzt(u, t, o));
      }
    });
  } catch (error) {
    a(error), setTimeout(l, 0, `Failed to open browser. Please visit ${c} to upgrade.`);
  }
  return null;
}
export { Ima, rot };