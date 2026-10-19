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
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  E
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  $ke,
  agt
} from "B:/~BUN/root/chunk-7z3ndmqr.js";
import {
  Fke
} from "B:/~BUN/root/chunk-gygbhz84.js";
import {
  QSo,
  Gs,
  Ltn
} from "B:/~BUN/root/chunk-dn8rakwm.js";

function OKr() {
  if (!QSo()) return "off";
  try {
    return E("tengu_vast_tulip", !1) === !0 ? "enforce" : "observe"
  } catch {
    return t("tool host attestation: reading tengu_vast_tulip threw; observing", {
      level: "warn"
    }), "observe"
  }
}

function s(e) {
  let o = Fke(),
    {
      status: r,
      meetsLevel: n,
      configException: i
    } = agt(e, o, {
      isCloudWorker: !1
    });
  return {
    status: r,
    verdict: !o.enforce ? "not_policed" : n ? "pass" : i ? "config_exception" : "below_floor"
  }
}

function ace(e) {
  let o = OKr();
  return o === "off" ? void 0 : {
    mode: o,
    ...s($ke(e))
  }
}

function i_e(e) {
  return e?.mode === "enforce" && e.verdict === "below_floor"
}

function bwn() {
  let e = ace("UNSPECIFIED");
  return {
    attestation: e,
    heldBack: i_e(e)
  }
}

function Y8o(e) {
  try {
    e?.(Ltn, Gs["repository_trust.served_calls.unattested"])
  } catch (o) {
    t(`[remote-tools] the notice sink threw on ${Ltn}: ${d(o)}`, {
      level: "error"
    })
  }
}
export {
  OKr,
  ace,
  i_e,
  bwn,
  Y8o
};
