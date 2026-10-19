// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  x,
  d,
  Cm
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  g,
  m
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  E,
  Ce,
  ue
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  WEe
} from "B:/~BUN/root/chunk-8v3gkznb.js";
import {
  Xce,
  K$,
  h6t
} from "B:/~BUN/root/chunk-bz422xf8.js";
import {
  Gs
} from "B:/~BUN/root/chunk-dn8rakwm.js";
var f = "tengu_violin_guarneri";

function u() {
  try {
    return E(f, !1) === !0
  } catch {
    return !1
  }
}

function p() {
  return u() && !WEe() && !K$() && ue().hasBeenAskedUnattendedServingUpFront !== !0
}

function prr(e) {
  try {
    return e === "unset" && p() && !h6t()
  } catch {
    return !1
  }
}
async function U() {
  try {
    return p() && prr(await Xce())
  } catch {
    return !1
  }
}
async function frr(e) {
  try {
    await Ce((n) => n.hasBeenAskedUnattendedServingUpFront === !0 ? n : {
      ...n,
      hasBeenAskedUnattendedServingUpFront: !0
    }, e)
  } catch (n) {
    t(`unattended-serving up-front question: mark not saved (${d(n)})`, {
      level: "warn"
    })
  }
}
var _ = 60000;

function skt(e) {
  if (e === "answered") g("remote_control_unattended_up_front");
  else m("remote_control_unattended_up_front", e)
}
async function v(e) {
  let {
    showUnattendedServingUpFrontQuestion: n
  } = await import("B:/~BUN/root/chunk-y4r87tf1.js");
  return n(e)
}

function S(e) {
  process.stdout.write(`${e}
`)
}
async function lti({
  couldOfferFolder: e,
  allowUnattendedToolCalls: n,
  storageV5: c,
  seams: o = {}
}) {
  let a = !1,
    i = !1;
  try {
    if (n || !(o.hasTerminal ?? F)() || !await U() || !await e()) return "carry_on";
    a = !0;
    let r = await (o.showDialog ?? v)(_);
    if (r === "interrupted") return "interrupted";
    i = !0;
    let s = o.print ?? S;
    if (r === "not_saved") return skt("save_failed"), s(Gs["consent.unattended.upfront.not_saved"]), "carry_on";
    if (skt("answered"), await frr(c), r === "timed_out") s(Gs["consent.unattended.upfront.timed_out"])
  } catch (r) {
    if (a && !i) skt("ask_failed");
    l(new x(`the up-front unattended-serving question could not be asked (${Cm(r)??typeof r})`, "the up-front unattended-serving question could not be asked"))
  }
  return "carry_on"
}

function F() {
  return process.stdin.isTTY === !0 && process.stdout.isTTY === !0
}
export {
  prr,
  frr,
  skt,
  lti
};
