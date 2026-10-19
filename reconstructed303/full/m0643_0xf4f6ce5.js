// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  W
} from "B:/~BUN/root/chunk-hg8ngszx.js";
import {
  c
} from "B:/~BUN/root/chunk-jthpk6wv.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  bde,
  GW
} from "B:/~BUN/root/chunk-gyr2a6wz.js";
import {
  xe
} from "B:/~BUN/root/chunk-8pmnanyd.js";
import {
  i
} from "B:/~BUN/root/chunk-1kfn24jp.js";
import {
  In,
  JO
} from "B:/~BUN/root/chunk-1gpjpba6.js";
import {
  E
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  ZZ
} from "B:/~BUN/root/chunk-8w42v0dp.js";

function y6t() {
  return JO("feedbackDrafts")[0] ?? "notify"
}

function X7r() {
  if (ZZ() !== null) return !1;
  if (bde()) return !1;
  if (GW()) return !1;
  if (xe() !== "firstParty") return !1;
  let e = a.CLAUDE_CODE_SEND_FEEDBACK;
  if (e === !1) return !1;
  if (e === !0) return E("tengu_juniper_relay", !1);
  return E("tengu_juniper_relay", !1)
}

function VV() {
  return y6t() !== "off" && X7r()
}

function $xn(e, {
  storageV5: t,
  via: r
}) {
  let n = W() && t !== void 0 ? In("userSettings", {
    feedbackDrafts: e
  }, void 0, t) : In("userSettings", {
    feedbackDrafts: e
  });
  return i("tengu_feedback_drafts_setting_changed", {
    value: c(e),
    via: c(r)
  }), n
}
export {
  y6t,
  X7r,
  VV,
  $xn
};
