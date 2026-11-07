// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { vlt, ZY, mI } from "B:/~BUN/root/chunk-gjq813eb.js";
import { DLt, lee } from "B:/~BUN/root/chunk-h6zqt1s4.js";
import { Fm } from "B:/~BUN/root/chunk-vdqpev1m.js";
async function hTt(t, a, i, credentials) {
  let e = await mI(t, a, i, {
    gatePublicRead: !1,
    credentials: credentials
  });
  if (e.err !== null) {
    if (e.errorCode === "boot_404") return {
      ok: !1,
      reason: vlt(e) ? "never_published" : "not_found"
    };
    if (ZY(e)) return {
      ok: !1,
      reason: "other_org",
      err: e.err
    };
    return {
      ok: !1,
      reason: "failed",
      err: e.err,
      errorCode: e.errorCode
    };
  }
  if (e.assetToken === void 0) return {
    ok: !1,
    reason: "public_outside_org"
  };
  let r = typeof e.data.title === "string" ? e.data.title : void 0,
    title = r !== void 0 ? Fm(r) ?? void 0 : void 0,
    owned = lee({
      role: DLt(e.data.perm?.role)
    });
  return {
    ok: !0,
    ...(title !== void 0 && {
      title: title
    }),
    ...(owned !== void 0 && {
      owned: owned
    })
  };
}
var cJn = 15000;
function uJn(t) {
  switch (t.reason) {
    case "public_outside_org":
      return "Couldn't open that artifact. It's public and from outside your organization.";
    case "other_org":
      return "Couldn't open that artifact. It's in another of your organizations.";
    case "never_published":
      return "Couldn't open that artifact. Nothing has been published to it yet.";
    case "not_found":
      return "Couldn't open that artifact. It may have been deleted, or it isn't shared with you.";
    case "failed":
      return t.errorCode === void 0 || t.errorCode === "boot_request_error" ? "Couldn't check that artifact, so it wasn't opened. Try again." : "Couldn't check that artifact, so it wasn't opened.";
  }
}
export { hTt, cJn, uJn };