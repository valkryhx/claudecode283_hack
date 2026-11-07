// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  d
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  v
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  lbe,
  UFt
} from "B:/~BUN/root/chunk-teehnwdh.js";
import {
  ENe
} from "B:/~BUN/root/chunk-w0nyevkg.js";
import {
  la,
  vOn,
  Zcs
} from "B:/~BUN/root/chunk-cxcakgnv.js";

function MUo() {
  if (!Zcs()) return "off";
  try {
    return v("tengu_vast_tulip", !1) === !0 ? "enforce" : "observe"
  } catch {
    return t("tool host attestation: reading tengu_vast_tulip threw; observing", {
      level: "warn"
    }), "observe"
  }
}

function s(e) {
  let o = ENe(),
    {
      status: r,
      meetsLevel: n,
      configException: i
    } = UFt(e, o, {
      isCloudWorker: !1
    });
  return {
    status: r,
    verdict: !o.enforce ? "not_policed" : n ? "pass" : i ? "config_exception" : "below_floor"
  }
}

function wke(e) {
  let o = MUo();
  return o === "off" ? void 0 : {
    mode: o,
    ...s(lbe(e))
  }
}

function oOe(e) {
  return e?.mode === "enforce" && e.verdict === "below_floor"
}

function z8n() {
  let e = wke("UNSPECIFIED");
  return {
    attestation: e,
    heldBack: oOe(e)
  }
}

function yJs(e) {
  try {
    e?.(vOn, la["repository_trust.served_calls.unattested"])
  } catch (o) {
    t(`[remote-tools] the notice sink threw on ${vOn}: ${d(o)}`, {
      level: "error"
    })
  }
}
export {
  MUo,
  wke,
  oOe,
  z8n,
  yJs
};
