// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  f
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  Twe,
  aY
} from "B:/~BUN/root/chunk-65j2302z.js";
import {
  Te
} from "B:/~BUN/root/chunk-8f4z6bdn.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  qn,
  n0
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  Jxs,
  Kee,
  tte,
  v
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  lue
} from "B:/~BUN/root/chunk-yhafkw66.js";
import {
  X
} from "B:/~BUN/root/chunk-g9pw24zp.js";

function Qer() {
  let e = tte();
  if (e.error) return Jxs() ? "gateway" : "no_creds";
  let t = e.headers["x-api-key"];
  return t && Kee(t) === null ? "gateway" : null
}

function $Sn() {
  return n0("feedbackDrafts")[0] ?? "notify"
}

function EYo() {
  if (lue() !== null) return !1;
  if (Twe()) return !1;
  if (aY()) return !1;
  if (Te() !== "firstParty") return !1;
  let e = i.CLAUDE_CODE_SEND_FEEDBACK;
  if (e === !1) return !1;
  return (e === !0 && !1 || v("tengu_juniper_relay", !1)) && Qer() !== "gateway"
}

function v8() {
  return $Sn() !== "off" && EYo()
}

function Zer(e, {
  storageV5: t,
  via: r
}) {
  let n = X() && t !== void 0 ? qn("userSettings", {
    feedbackDrafts: e
  }, void 0, t) : qn("userSettings", {
    feedbackDrafts: e
  });
  return l("tengu_feedback_drafts_setting_changed", {
    value: f(e),
    via: f(r)
  }), n
}
export {
  Qer,
  $Sn,
  EYo,
  v8,
  Zer
};
