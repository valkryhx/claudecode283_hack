// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  d
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  ka
} from "B:/~BUN/root/chunk-89mss1tj.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  e1e
} from "B:/~BUN/root/chunk-rnh5g2g4.js";
import {
  ba
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  At
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  Xn
} from "B:/~BUN/root/chunk-8pmnanyd.js";
import {
  Dct
} from "B:/~BUN/root/chunk-arcgcnq8.js";
import {
  LYe
} from "B:/~BUN/root/chunk-9grc6xh0.js";

function QXr(e) {
  return `To fix: ${e.webSetupHint?`${e.webSetupHint}, or connect`:"connect"} an account at ${Dct()} \u2014 ${e.rerun} (allow a minute after connecting).`
}

function kRn(e) {
  return `${e.subject} with the GitHub account connected to your Claude account, and none is connected (or the connection expired). ${QXr(e)}`
}

function ERn(e) {
  let r = e.apostrophe ?? "'",
    o = `install the app at ${e1e}`,
    n = e.webSetupHint,
    i = n && e.leadWithWebSetup ? `${n}, or ${o}` : `${o}${n?`, or ${n}`:""}`;
  return `Your connected GitHub account can${r}t see ${e.owner}/${e.name} \u2014 usually the Claude GitHub app isn${r}t installed on ${e.owner} or wasn${r}t granted this repo (web-connected accounts need it for private repos), or a different GitHub account is connected. To fix: ${i} \u2014 ${e.rerun}.`
}
var b = 5000,
  l = 2147483647;
async function TRn(e, r, o = b) {
  let n = {
    verdict: "inconclusive",
    httpStatus: null
  };
  if (At() || !Xn()) return n;
  let i = Number.isSafeInteger(o) && o > 0 ? Math.min(o, l) : 0;
  if (i === 0) return n;
  let c = AbortSignal.timeout(i),
    a = (async () => {
      if (await ba(), c.aborted) return n;
      let {
        linkedAccountAccess: s,
        httpStatus: p
      } = await LYe(e, r, c, {
        resyncUndetermined: !1
      });
      return {
        verdict: s,
        httpStatus: p
      }
    })(),
    u = await ka(a, c, () => Error("budget expired")).catch((s) => (t(`linked GitHub account access probe gave up, treating as inconclusive: ${d(s)}`), n));
  return t(`linked GitHub account access to ${e}/${r}: ${u.verdict} (HTTP ${u.httpStatus??"none"})`), u
}
export {
  QXr,
  kRn,
  ERn,
  TRn
};
