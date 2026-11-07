// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Xr } from "B:/~BUN/root/chunk-game8aqv.js";
import { hn, dr, Gt } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Xhe } from "B:/~BUN/root/chunk-dqprk713.js";
import { oUe, Wzt, wPe } from "B:/~BUN/root/chunk-af0azp4f.js";
import { y4n, _4n } from "B:/~BUN/root/chunk-cbbfqbjt.js";
import { e } from "B:/~BUN/root/chunk-t16eynda.js";
import { nCt, V_n, Tle } from "B:/~BUN/root/chunk-6t2ekv26.js";
async function Zkt(s, n) {
  let onDone = Xhe(s);
  if (V_n()) return e(_4n, {
    onDone: onDone
  });
  let o = await Tle({
    openInBrowser: !0
  }, n.credentials);
  if (o.type === "message") return onDone(o.value), null;
  if (o.type === "confirm-admin-request") {
    if (Gt()) return onDone(nCt), null;
    return e(y4n, {
      extraUsage: o.extraUsage,
      wouldTakeAnswer: () => !0,
      onDone: onDone
    });
  }
  let i = dr();
  if (i === "team" || i === "enterprise") return onDone(o.opened ? `Opened ${o.url} in your browser to manage usage credits for your organization.` : `Visit ${o.url} to manage usage credits for your organization.`), null;
  if (!o.opened) return onDone(`Visit ${o.url} to manage usage credits.`), null;
  let r = hn(),
    previousAccount = r && {
      accountUuid: r.accountUuid,
      organizationUuid: r.organizationUuid
    },
    previousGatewayAuth = Xr();
  return e(wPe, {
    startingMessage: "Starting new login following /usage-credits. Exit with Ctrl-C to use existing account.",
    onDone: async (a, c, setAppState) => {
      let g = await oUe(n, a, {
        setAppState: setAppState,
        previousAccount: previousAccount,
        previousGatewayAuth: previousGatewayAuth
      });
      onDone(...Wzt(n, a, g));
    }
  });
}
export { Zkt };