// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  q
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  y,
  c
} from "B:/~BUN/root/chunk-kks4mj3w.js";
import {
  i
} from "B:/~BUN/root/chunk-728mwbhs.js";
import {
  _
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  pt,
  fm,
  x,
  Ee,
  le,
  Is,
  Bu
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  Lt
} from "B:/~BUN/root/chunk-339q6g5w.js";
import {
  Ie
} from "B:/~BUN/root/chunk-sd4cj2qx.js";
import {
  DH
} from "B:/~BUN/root/chunk-db33zsv9.js";
import {
  Lme
} from "B:/~BUN/root/chunk-jz4j9jvf.js";
import {
  Hs
} from "B:/~BUN/root/chunk-aky7m4ay.js";
var p = "tengu_reflective_bee",
  S = ["off", "survey"],
  d = 3,
  h = 86400000,
  f = "tengu_web_setup_push_offer",
  bJn = "Pushed to GitHub. Connect GitHub to claude.ai so you can work on this repo even when this machine is offline?",
  SJn = 1000,
  CXe = new q(() => Hs({
    status: "none"
  }));

function V3r({
  trigger: t,
  host: o,
  storageV5: s
}) {
  let r = CXe.of(o);
  if (r.getState().status !== "none") return;
  if (fm()) return;
  if (Ie() !== "firstParty" || !pt() || !Lme()) return;
  if (Lt()) return;
  if (u()) return;
  if (DH.of(o).peek(void 0, s) !== "not_connected") return;
  i(f, {
    event: y("eligible"),
    trigger: c(t)
  });
  let n = x(p, "off"),
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
  let t = le().webSetupPushOffer;
  if (t?.dismissedForever) return !0;
  if (Is().webSetupPushOfferShown) return !0;
  if (t?.lastShownAt !== void 0 && Date.now() - t.lastShownAt < h) return !0;
  return (t?.shownCount ?? 0) >= d
}

function wJn(t, o) {
  let s = CXe.of(t);
  if (s.getState().status !== "pending") return !1;
  if (!u() && DH.of(t).peek(void 0, o) === "not_connected") return !1;
  return s.setState(() => ({
    status: "resolved"
  })), !0
}

function vJn(t, o) {
  let s = CXe.of(t),
    r = s.getState();
  if (r.status !== "pending") return;
  s.setState(() => ({
    ...r,
    status: "shown"
  })), i(f, {
    event: y("shown"),
    variant: c(r.variant),
    trigger: c(r.trigger)
  }), _("remote_setup_push_offer");
  let n = Date.now();
  Ee((e) => e.webSetupPushOffer?.lastShownAt === n ? e : {
    ...e,
    webSetupPushOffer: {
      ...e.webSetupPushOffer,
      lastShownAt: n,
      shownCount: (e.webSetupPushOffer?.shownCount ?? 0) + 1
    }
  }, o), Bu((e) => e.webSetupPushOfferShown ? e : {
    ...e,
    webSetupPushOfferShown: !0
  }, o)
}

function pPe(t, o, s) {
  let r = CXe.of(t),
    n = r.getState();
  if (n.status !== "shown") return;
  if (r.setState(() => ({
      status: "resolved"
    })), i(f, {
      event: c(o),
      variant: c(n.variant),
      trigger: c(n.trigger)
    }), o === "dont_ask_again") Ee((e) => e.webSetupPushOffer?.dismissedForever ? e : {
    ...e,
    webSetupPushOffer: {
      ...e.webSetupPushOffer,
      dismissedForever: !0
    }
  }, s)
}
export {
  bJn,
  SJn,
  CXe,
  V3r,
  wJn,
  vJn,
  pPe
};
