// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { Ao } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { bmt } from "B:/~BUN/root/chunk-taw9ve37.js";
import { ul } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { St } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { Fn } from "B:/~BUN/root/chunk-8f4z6bdn.js";
import { nDt } from "B:/~BUN/root/chunk-vyjvp8sa.js";
import { gTe } from "B:/~BUN/root/chunk-cxcakgnv.js";
function _4o(e) {
  return `To fix: ${e.webSetupHint ? `${e.webSetupHint}, or connect` : "connect"} an account at ${nDt()} \u2014 ${e.rerun} (allow a minute after connecting).`;
}
function fer(e) {
  return `${e.subject} with the GitHub account connected to your Claude account, and none is connected (or the connection expired). ${_4o(e)}`;
}
function per(e) {
  let r = e.apostrophe ?? "'",
    o = `install the app at ${bmt}`,
    webSetupHint = e.webSetupHint,
    i = webSetupHint && e.leadWithWebSetup ? `${webSetupHint}, or ${o}` : `${o}${webSetupHint ? `, or ${webSetupHint}` : ""}`;
  return `Your connected GitHub account can${r}t see ${e.owner}/${e.name} \u2014 usually the Claude GitHub app isn${r}t installed on ${e.owner} or wasn${r}t granted this repo (web-connected accounts need it for private repos), or a different GitHub account is connected. To fix: ${i} \u2014 ${e.rerun}.`;
}
var b = 5000,
  l = 2147483647;
async function mer(e, r, o = b) {
  let n = {
    verdict: "inconclusive",
    httpStatus: null
  };
  if (St() || !Fn()) return n;
  let i = Number.isSafeInteger(o) && o > 0 ? Math.min(o, l) : 0;
  if (i === 0) return n;
  let c = AbortSignal.timeout(i),
    a = (async () => {
      if (await ul(), c.aborted) return n;
      let {
        linkedAccountAccess: s,
        httpStatus: httpStatus
      } = await gTe(e, r, c, {
        resyncUndetermined: !1
      });
      return {
        verdict: s,
        httpStatus: httpStatus
      };
    })(),
    u = await Ao(a, c, () => Error("budget expired")).catch(s => (t(`linked GitHub account access probe gave up, treating as inconclusive: ${d(s)}`), n));
  return t(`linked GitHub account access to ${e}/${r}: ${u.verdict} (HTTP ${u.httpStatus ?? "none"})`), u;
}
export { _4o, fer, per, mer };