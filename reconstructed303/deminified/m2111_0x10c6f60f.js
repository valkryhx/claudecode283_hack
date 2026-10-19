// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Br } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { wn, Er, Ht, E } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { Ooe } from "B:/~BUN/root/chunk-qc6mvzn1.js";
import { kCe, Iwt, Fye } from "B:/~BUN/root/chunk-7tx78keh.js";
import { _yn, byn } from "B:/~BUN/root/chunk-kxp9j9f6.js";
import { e } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { cot, _4t, j_e } from "B:/~BUN/root/chunk-hg52p7e3.js";
import { o, u, Jr, C } from "B:/~BUN/root/chunk-g3snhg6n.js";
function a() {
  return o().regex(/^\P{Cc}*$/u);
}
var h = f(() => Jr("mode", [u({
  mode: C("one_step")
}), u({
  mode: C("confirm"),
  title: a().optional(),
  body: a().optional(),
  note: a().optional(),
  send: a().optional(),
  cancel: a().optional()
})]));
function Ibn() {
  let i = E("tengu_tidy_lemon", null);
  if (i === null || i === void 0) return null;
  let r = h().safeParse(i);
  return r.success ? r.data : null;
}
async function htt(i, r) {
  let onDone = Ooe(i);
  if (_4t()) return e(byn, {
    onDone: onDone
  });
  let t = await j_e({
    openInBrowser: !0
  }, r.credentials);
  if (t.type === "message") return onDone(t.value), null;
  if (t.type === "confirm-admin-request") {
    if (Ht()) return onDone(cot), null;
    return e(_yn, {
      extraUsage: t.extraUsage,
      flag: Ibn(),
      wouldTakeAnswer: () => !0,
      onDone: onDone
    });
  }
  let l = Er();
  if (l === "team" || l === "enterprise") return onDone(t.opened ? `Opened ${t.url} in your browser to manage usage credits for your organization.` : `Visit ${t.url} to manage usage credits for your organization.`), null;
  if (!t.opened) return onDone(`Visit ${t.url} to manage usage credits.`), null;
  let s = wn(),
    previousAccount = s && {
      accountUuid: s.accountUuid,
      organizationUuid: s.organizationUuid
    },
    previousGatewayAuth = Br();
  return e(Fye, {
    startingMessage: "Starting new login following /usage-credits. Exit with Ctrl-C to use existing account.",
    onDone: async (m, A, setAppState) => {
      let d = await kCe(r, m, {
        setAppState: setAppState,
        previousAccount: previousAccount,
        previousGatewayAuth: previousGatewayAuth
      });
      onDone(...Iwt(r, m, d));
    }
  });
}
export { Ibn, htt };