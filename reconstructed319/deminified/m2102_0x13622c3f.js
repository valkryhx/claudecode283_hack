// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { b, f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { Rt, Fl, v, Le, fe, fl, Sy } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Ct } from "B:/~BUN/root/chunk-thn0wk2x.js";
import { Te } from "B:/~BUN/root/chunk-8f4z6bdn.js";
import { Wne } from "B:/~BUN/root/chunk-0yg1pq2n.js";
import { QWe } from "B:/~BUN/root/chunk-vyjvp8sa.js";
import { Hs } from "B:/~BUN/root/chunk-3xtmwvra.js";
var p = "tengu_reflective_bee",
  S = ["off", "survey"],
  d = 3,
  _ = 86400000,
  u = "tengu_web_setup_push_offer",
  g1o = "Pushed to GitHub. Connect GitHub to claude.ai so you can work on this repo even when this machine is offline?",
  y1o = 1000,
  aVt = new W(() => Hs({
    status: "none"
  }));
function M7s({
  trigger: trigger,
  host: host,
  storageV5: storageV5
}) {
  let r = aVt.of(host);
  if (r.getState().status !== "none") return;
  if (Fl()) return;
  if (Te() !== "firstParty" || !Rt() || !QWe()) return;
  if (Ct()) return;
  if (i()) return;
  if (Wne.of(host).peek(void 0, storageV5) !== "not_connected") return;
  l(u, {
    event: b("eligible"),
    trigger: f(trigger)
  });
  let n = v(p, "off"),
    variant = S.find(item => item === n);
  r.setState(() => variant === void 0 || variant === "off" ? {
    status: "resolved"
  } : {
    status: "pending",
    variant: variant,
    trigger: trigger
  });
}
function i() {
  let webSetupPushOffer = fe().webSetupPushOffer;
  if (webSetupPushOffer?.dismissedForever) return !0;
  if (fl().webSetupPushOfferShown) return !0;
  if (webSetupPushOffer?.lastShownAt !== void 0 && Date.now() - webSetupPushOffer.lastShownAt < _) return !0;
  return (webSetupPushOffer?.shownCount ?? 0) >= d;
}
function _1o(t, o) {
  let s = aVt.of(t);
  if (s.getState().status !== "pending") return !1;
  if (!i() && Wne.of(t).peek(void 0, o) === "not_connected") return !1;
  return s.setState(() => ({
    status: "resolved"
  })), !0;
}
function b1o(t, o) {
  let s = aVt.of(t),
    r = s.getState();
  if (r.status !== "pending") return;
  s.setState(() => ({
    ...r,
    status: "shown"
  })), l(u, {
    event: b("shown"),
    variant: f(r.variant),
    trigger: f(r.trigger)
  }), g("remote_setup_push_offer");
  let lastShownAt = Date.now();
  Le(e => e.webSetupPushOffer?.lastShownAt === lastShownAt ? e : {
    ...e,
    webSetupPushOffer: {
      ...e.webSetupPushOffer,
      lastShownAt: lastShownAt,
      shownCount: (e.webSetupPushOffer?.shownCount ?? 0) + 1
    }
  }, o), Sy(e => e.webSetupPushOfferShown ? e : {
    ...e,
    webSetupPushOfferShown: !0
  }, o);
}
function Cst(t, o, s) {
  let r = aVt.of(t),
    n = r.getState();
  if (n.status !== "shown") return;
  if (r.setState(() => ({
    status: "resolved"
  })), l(u, {
    event: f(o),
    variant: f(n.variant),
    trigger: f(n.trigger)
  }), o === "dont_ask_again") Le(e => e.webSetupPushOffer?.dismissedForever ? e : {
    ...e,
    webSetupPushOffer: {
      ...e.webSetupPushOffer,
      dismissedForever: !0
    }
  }, s);
}
export { g1o, y1o, aVt, M7s, _1o, b1o, Cst };