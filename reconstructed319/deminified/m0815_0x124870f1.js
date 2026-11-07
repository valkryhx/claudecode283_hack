// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { g } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { xC, ng } from "B:/~BUN/root/chunk-65j2302z.js";
import { tn } from "B:/~BUN/root/chunk-1fg2bpc3.js";
import { $Fn, vi } from "B:/~BUN/root/chunk-knfpag6d.js";
var t = "Browser extension is not connected. The user's last message came from the Claude mobile app, where Claude in Chrome cannot be set up, so give no setup or troubleshooting steps unless they ask. In one or two short sentences, tell them you could not reach Claude in Chrome, then carry on another way if you can (web search, for example), and offer to try again once they are at a computer with Chrome open and the Claude in Chrome extension signed in. Unless they say Chrome is now open, do not call a Claude in Chrome tool again in this reply.";
function Isr() {
  if ((tn() || xC()) && ng() && $Fn(vi().lastTurnClientPlatform) && v("tengu_glowing_pancake", !1)) return g("chrome_phone_answer"), t;
  return;
}
function Tfi(e) {
  return () => {
    let n = e(),
      o = vi();
    return o.disconnectedAnswerCount++, o.disconnectedAnswerTexts.add(n), n;
  };
}
function p9o() {
  return vi().disconnectedAnswerCount;
}
function Msr(e) {
  return vi().disconnectedAnswerTexts.has(e);
}
function mvn() {
  let e = vi();
  return e.disconnectedAnswerCount > 0 || e.notConnectedSeenByPriorWorker;
}
function Cfi() {
  vi().notConnectedSeenByPriorWorker = !0;
}
export { Isr, Tfi, p9o, Msr, mvn, Cfi };