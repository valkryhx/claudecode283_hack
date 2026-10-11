// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { wo } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { wFe, un, pt, An } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { Q5 } from "B:/~BUN/root/chunk-cj9k3aj6.js";
import { pue, QXe, Hre } from "B:/~BUN/root/chunk-375tt64c.js";
import { e } from "B:/~BUN/root/chunk-qkvevvte.js";
import { Ko } from "B:/~BUN/root/chunk-v8s05yj9.js";
function l(t) {
  return `https://claude.ai/upgrade/max?utm_source=claude_code&utm_medium=cli&utm_campaign=${t}`;
}
async function iqo(t, r) {
  return wPe(t, r, "upgrade_command");
}
async function wPe(t, r, m) {
  let u = Q5(t),
    c = l(m);
  try {
    if (pt()) {
      let o = un(),
        i = !1;
      if (o?.subscriptionType && o?.rateLimitTier) i = o.subscriptionType === "max" && o.rateLimitTier === "default_claude_max_20x";else if (o?.accessToken) {
        let n = await wFe(o.accessToken);
        i = n?.organization?.organization_type === "claude_max" && n?.organization?.rate_limit_tier === "default_claude_max_20x";
      }
      if (i) return setTimeout(u, 0, "You are already on the highest Max subscription plan. For additional usage, run /login to switch to an API usage-billed account."), null;
    }
    await Ko(c);
    let a = An(),
      previousAccount = a && {
        accountUuid: a.accountUuid,
        organizationUuid: a.organizationUuid
      },
      previousGatewayAuth = wo();
    return e(Hre, {
      startingMessage: "Starting new login following /upgrade. Exit with Ctrl-C to use existing account.",
      onDone: async (o, i, setAppState) => {
        let g = await pue(r, o, {
          setAppState: setAppState,
          previousAccount: previousAccount,
          previousGatewayAuth: previousGatewayAuth
        });
        u(...QXe(r, o, g));
      }
    });
  } catch (error) {
    d(error), setTimeout(u, 0, `Failed to open browser. Please visit ${c} to upgrade.`);
  }
  return null;
}
export { iqo, wPe };