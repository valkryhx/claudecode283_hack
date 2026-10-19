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
  i
} from "B:/~BUN/root/chunk-1kfn24jp.js";
import {
  tFe,
  I8,
  K$,
  tcr,
  ncr
} from "B:/~BUN/root/chunk-bz422xf8.js";
var eFe = {
    accepted: "Allowed",
    declined: "Not allowed",
    unset: "Not asked yet"
  },
  t = "Turned off by your organization's settings (remoteTools.allowUnattendedServing)",
  o = "Turned off in your user settings (remoteTools.allowUnattendedServing: false in ~/.claude/settings.json) \u2014 remove it there to re-enable";

function d6t() {
  return tcr() === "user" ? o : t
}

function Dxn(e) {
  return I8() !== "unset" || ncr() || e
}

function Lxn() {
  return I8() === "accepted" || ncr()
}
async function Nxn(e) {
  if (e === "accepted" && K$()) return "forbidden";
  let n = e === "accepted" ? "accepted" : I8() === "accepted" ? "revoked" : "declined";
  if (!await tFe(e)) return "not_saved";
  return i("tengu_served_unattended_consent", {
    action: c(n),
    surface: b("cli")
  }), "saved"
}
export {
  eFe,
  d6t,
  Dxn,
  Lxn,
  Nxn
};
