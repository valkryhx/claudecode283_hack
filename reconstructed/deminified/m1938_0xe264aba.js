// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { wo } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { An, nr, vt, x } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { Q5 } from "B:/~BUN/root/chunk-cj9k3aj6.js";
import { pue, QXe, Hre } from "B:/~BUN/root/chunk-375tt64c.js";
import { TWt } from "B:/~BUN/root/chunk-bm2wsr80.js";
import { e } from "B:/~BUN/root/chunk-qkvevvte.js";
import { MWe, RSt, voe } from "B:/~BUN/root/chunk-jh3vta2f.js";
import { o, u, Qo, A } from "B:/~BUN/root/chunk-n8qdr73v.js";
function a() {
  return o().regex(/^\P{Cc}*$/u);
}
var y = f(() => Qo("mode", [u({
  mode: A("one_step")
}), u({
  mode: A("confirm"),
  title: a().optional(),
  body: a().optional(),
  note: a().optional(),
  send: a().optional(),
  cancel: a().optional()
})]));
function k2t() {
  let i = x("tengu_tidy_lemon", null);
  if (i === null || i === void 0) return null;
  let r = y().safeParse(i);
  return r.success ? r.data : null;
}
var ExtraUsageDialog = import.meta.require("B:/~BUN/root/chunk-dna4e0s3.js").ExtraUsageDialog;
async function x1e(i, r) {
  let onDone = Q5(i);
  if (ExtraUsageDialog && RSt()) return e(ExtraUsageDialog, {
    onDone: onDone
  });
  let t = await voe({
    openInBrowser: !0
  }, r.credentials);
  if (t.type === "message") return onDone(t.value), null;
  if (t.type === "confirm-admin-request") {
    if (vt()) return onDone(MWe), null;
    return e(TWt, {
      extraUsage: t.extraUsage,
      flag: k2t(),
      wouldTakeAnswer: () => !0,
      onDone: onDone
    });
  }
  let l = nr();
  if (l === "team" || l === "enterprise") return onDone(t.opened ? `Opened ${t.url} in your browser to manage usage credits for your organization.` : `Visit ${t.url} to manage usage credits for your organization.`), null;
  if (!t.opened) return onDone(`Visit ${t.url} to manage usage credits.`), null;
  let s = An(),
    previousAccount = s && {
      accountUuid: s.accountUuid,
      organizationUuid: s.organizationUuid
    },
    previousGatewayAuth = wo();
  return e(Hre, {
    startingMessage: "Starting new login following /usage-credits. Exit with Ctrl-C to use existing account.",
    onDone: async (m, _, setAppState) => {
      let h = await pue(r, m, {
        setAppState: setAppState,
        previousAccount: previousAccount,
        previousGatewayAuth: previousGatewayAuth
      });
      onDone(...QXe(r, m, h));
    }
  });
}
export { k2t, x1e };