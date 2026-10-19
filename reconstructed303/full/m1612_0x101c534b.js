// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  b,
  c
} from "B:/~BUN/root/chunk-jthpk6wv.js";
import {
  z
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  i
} from "B:/~BUN/root/chunk-1kfn24jp.js";
import {
  g
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  Et,
  Hm,
  E,
  Ce,
  ue,
  Sa,
  fg
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  Tt
} from "B:/~BUN/root/chunk-nxwmyxnk.js";
import {
  xe
} from "B:/~BUN/root/chunk-8pmnanyd.js";
import {
  wz
} from "B:/~BUN/root/chunk-w83t0s5z.js";
import {
  EPe
} from "B:/~BUN/root/chunk-arcgcnq8.js";
import {
  _s
} from "B:/~BUN/root/chunk-b4xxgr0r.js";
var p = "tengu_reflective_bee",
  S = ["off", "survey"],
  d = 3,
  _ = 86400000,
  f = "tengu_web_setup_push_offer",
  A6r = "Pushed to GitHub. Connect GitHub to claude.ai so you can work on this repo even when this machine is offline?",
  x6r = 1000,
  Dkt = new z(() => _s({
    status: "none"
  }));

function kJo({
  trigger: t,
  host: o,
  storageV5: s
}) {
  let r = Dkt.of(o);
  if (r.getState().status !== "none") return;
  if (Hm()) return;
  if (xe() !== "firstParty" || !Et() || !EPe()) return;
  if (Tt()) return;
  if (u()) return;
  if (wz.of(o).peek(void 0, s) !== "not_connected") return;
  i(f, {
    event: b("eligible"),
    trigger: c(t)
  });
  let n = E(p, "off"),
    e = S.find((a) => a === n);
  r.setState(() => e === void 0 || e === "off" ? {
    status: "resolved"
  } : {
    status: "pending",
    variant: e,
    trigger: t
  })
}

function u() {
  let t = ue().webSetupPushOffer;
  if (t?.dismissedForever) return !0;
  if (Sa().webSetupPushOfferShown) return !0;
  if (t?.lastShownAt !== void 0 && Date.now() - t.lastShownAt < _) return !0;
  return (t?.shownCount ?? 0) >= d
}

function P6r(t, o) {
  let s = Dkt.of(t);
  if (s.getState().status !== "pending") return !1;
  if (!u() && wz.of(t).peek(void 0, o) === "not_connected") return !1;
  return s.setState(() => ({
    status: "resolved"
  })), !0
}

function O6r(t, o) {
  let s = Dkt.of(t),
    r = s.getState();
  if (r.status !== "pending") return;
  s.setState(() => ({
    ...r,
    status: "shown"
  })), i(f, {
    event: b("shown"),
    variant: c(r.variant),
    trigger: c(r.trigger)
  }), g("remote_setup_push_offer");
  let n = Date.now();
  Ce((e) => e.webSetupPushOffer?.lastShownAt === n ? e : {
    ...e,
    webSetupPushOffer: {
      ...e.webSetupPushOffer,
      lastShownAt: n,
      shownCount: (e.webSetupPushOffer?.shownCount ?? 0) + 1
    }
  }, o), fg((e) => e.webSetupPushOfferShown ? e : {
    ...e,
    webSetupPushOfferShown: !0
  }, o)
}

function oqe(t, o, s) {
  let r = Dkt.of(t),
    n = r.getState();
  if (n.status !== "shown") return;
  if (r.setState(() => ({
      status: "resolved"
    })), i(f, {
      event: c(o),
      variant: c(n.variant),
      trigger: c(n.trigger)
    }), o === "dont_ask_again") Ce((e) => e.webSetupPushOffer?.dismissedForever ? e : {
    ...e,
    webSetupPushOffer: {
      ...e.webSetupPushOffer,
      dismissedForever: !0
    }
  }, s)
}
export {
  A6r,
  x6r,
  Dkt,
  kJo,
  P6r,
  O6r,
  oqe
};
