// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Br } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { jXe, Fn, Et, wn, _Ee } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { Ooe } from "B:/~BUN/root/chunk-qc6mvzn1.js";
import { kCe, Iwt, Fye } from "B:/~BUN/root/chunk-7tx78keh.js";
import { e } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { Hs } from "B:/~BUN/root/chunk-ac9kwvf4.js";
function s(a) {
  return `https://claude.ai/upgrade/max?utm_source=claude_code&utm_medium=cli&utm_campaign=${a}`;
}
async function Sei(a, i) {
  return F2e(a, i, "upgrade_command");
}
async function F2e(a, i, m) {
  let u = Ooe(a),
    c = s(m);
  try {
    if (Et()) {
      let o = Fn(),
        n = !1;
      if (o?.subscriptionType && o?.rateLimitTier) n = o.subscriptionType === "max" && o.rateLimitTier === "default_claude_max_20x";else if (o?.accessToken) {
        let t = await jXe(o.accessToken);
        n = t?.organization?.organization_type === "claude_max" && t?.organization?.rate_limit_tier === "default_claude_max_20x";
      }
      if (n) {
        let t = _Ee();
        return setTimeout(u, 0, t ? `You\u2019re already on the highest Max subscription plan. For additional usage, run ${t}.` : "You are already on the highest Max subscription plan. For additional usage, run /login to switch to an API usage-billed account."), null;
      }
    }
    await Hs(c);
    let r = wn(),
      previousAccount = r && {
        accountUuid: r.accountUuid,
        organizationUuid: r.organizationUuid
      },
      previousGatewayAuth = Br();
    return e(Fye, {
      startingMessage: "Starting new login following /upgrade. Exit with Ctrl-C to use existing account.",
      onDone: async (o, n, setAppState) => {
        let g = await kCe(i, o, {
          setAppState: setAppState,
          previousAccount: previousAccount,
          previousGatewayAuth: previousGatewayAuth
        });
        u(...Iwt(i, o, g));
      }
    });
  } catch (error) {
    l(error), setTimeout(u, 0, `Failed to open browser. Please visit ${c} to upgrade.`);
  }
  return null;
}
export { Sei, F2e };