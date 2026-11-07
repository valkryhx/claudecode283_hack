// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { IN } from "B:/~BUN/root/chunk-15vbkr6z.js";
import { P } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { SFe } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { fde } from "B:/~BUN/root/chunk-27h4st9h.js";
import { g } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { X6n } from "B:/~BUN/root/chunk-e52whdbf.js";
var dkt = (t, e) => fde(e) && !SFe(t, e);
var s = 86400000,
  d = 3,
  u = 7 + d;
function Zqn() {
  try {
    let t = X6n();
    return t === null ? {} : {
      credential_expires_at: t.toISOString()
    };
  } catch (error) {
    return a(error), {};
  }
}
function E4s(t = Date.now()) {
  try {
    let e = X6n();
    if (e === null) return null;
    let {
      earliest: earliest,
      latest: latest,
      daysToEarliest: daysToEarliest
    } = l(e, t);
    return `${e.getTime() <= t ? `Sign-in may have ended: between ${earliest} and ${latest}` : daysToEarliest < 1 ? `Sign-in ends: any day now, by ${latest}` : `Sign-in ends: between ${earliest} and ${latest}`} (${e.toISOString()})`;
  } catch (error) {
    return a(error), null;
  }
}
function T4s(t = Date.now()) {
  try {
    let e = X6n();
    if (e === null) return;
    let n = e.getTime() - t;
    if (n >= u * s) return;
    let {
      earliest: earliest_2,
      latest: latest_2,
      daysToEarliest: daysToEarliest_2
    } = l(e, t);
    IN(n <= 0 ? `Warning: this sign-in may have ended between ${earliest_2} and ${latest_2}. If requests are refused, run claude auth login, or use claude setup-token for unattended jobs.
` : daysToEarliest_2 < 1 ? `Warning: this sign-in can end at any time from now until ${latest_2}. Renewing it does not move that date. Run claude auth login now, or use claude setup-token for unattended jobs.
` : `Warning: this sign-in ends between ${earliest_2} and ${latest_2} (in ${daysToEarliest_2} ${P(daysToEarliest_2, "day")} at the earliest). Renewing it does not move those dates. Run claude auth login before then, or use claude setup-token for unattended jobs.
`), g("oauth_expiry_warning");
  } catch (error) {
    a(error);
  }
}
function l(t, e) {
  let n = t.getTime() - d * s;
  return {
    earliest: new Date(n).toISOString().slice(0, 10),
    latest: t.toISOString().slice(0, 10),
    daysToEarliest: Math.floor(n / s) - Math.floor(e / s)
  };
}
export { dkt, Zqn, E4s, T4s };