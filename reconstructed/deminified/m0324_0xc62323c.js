// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { an } from "B:/~BUN/root/chunk-zksmb712.js";
import { It } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { zc } from "B:/~BUN/root/chunk-snmb1kqg.js";
import { Fx, Ie } from "B:/~BUN/root/chunk-sd4cj2qx.js";
import { w6, Xt, kf } from "B:/~BUN/root/chunk-3hjtxzqy.js";
var policyGate = {
  policy: "allow_remote_sessions"
};
function Dme() {
  let t = Ie();
  if (t !== "firstParty") return `Cloud sessions aren't available with ${Fx[t]}. They run on Anthropic's infrastructure and require an Anthropic account.`;
  let {
    featureLabel: featureLabel,
    verb: verb
  } = w6(policyGate.policy);
  return kf(policyGate.policy, featureLabel, verb);
}
function isEnabled() {
  return !It() && Xt("allow_remote_sessions") && Xt("allow_quick_web_setup");
}
function nee() {
  return !zc() && isEnabled();
}
function pKe() {
  return `${an().CLAUDE_AI_ORIGIN}/connect-github`;
}
function gLe(t = "this repository") {
  let o = pKe(),
    e = nee() ? `Run /web-setup to connect with your GitHub CLI login, or connect on the web at ${o}` : `Connect it on the web at ${o}`;
  return `GitHub isn't connected to your Claude account, so ${t} can't be cloned in the cloud. ${e}`;
}
var n = {
    type: "local-jsx",
    name: "web-setup",
    description: "Set up cloud sessions with your GitHub account",
    availability: ["claude-ai"],
    isEnabled: isEnabled,
    policyGate: policyGate,
    get isHidden() {
      return !Xt("allow_remote_sessions") || !Xt("allow_quick_web_setup");
    }
  },
  F3o = n;
export { policyGate as tee, Dme, isEnabled as Lme, nee, pKe, gLe, F3o };