// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { z } from "B:/~BUN/root/chunk-game8aqv.js";
import { we } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { St } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { rr, Tl, PT } from "B:/~BUN/root/chunk-thn0wk2x.js";
import { qS, KVe } from "B:/~BUN/root/chunk-xqymp2nr.js";
import { OJ } from "B:/~BUN/root/chunk-xc0c1vfp.js";
import { Fc } from "B:/~BUN/root/chunk-trd3c21n.js";
import { bA } from "B:/~BUN/root/chunk-q2s07yzr.js";
import { Ad } from "B:/~BUN/root/chunk-x4zqd4cy.js";
import { my, XPn } from "B:/~BUN/root/chunk-4vcs773m.js";
import { bp } from "B:/~BUN/root/chunk-ke150ry1.js";
import { vxn } from "B:/~BUN/root/chunk-27h4st9h.js";
import { UBe } from "B:/~BUN/root/chunk-p18mw08q.js";
var h = ["default", "reset", "none", "gray", "grey"],
  A = 5000;
async function Qya(i, e, r) {
  return i(await H3r(r, e), {
    display: "system"
  }), null;
}
async function H3r(i, e) {
  if (Fc()) return "Cannot set color: This session is a teammate. Teammate colors are assigned by the team leader.";
  let r = i?.trim() ?? "",
    o = r === "" ? qS[Math.floor(Math.random() * qS.length)] : r.toLowerCase(),
    n = h.includes(o);
  if (!n && !qS.includes(o)) {
    let t = qS.join(", ");
    return `Invalid color "${o}". Available colors: ${t}, default`;
  }
  let S = z(),
    C = bp(),
    a = n ? "default" : o,
    f = n ? void 0 : o,
    u = PT("sessionRecord");
  if (!u) await vxn(S, a, C, e.storageV5);
  e.setAppState(t => UBe(t, {
    color: f
  }));
  let d = n ? "Session color reset to default" : `Session color set to: ${o}`;
  if (u) {
    l("tengu_agent_color_set", {});
    let t = rr()?.sessionId;
    if (!t || !Tl() || St()) return `${d} on this screen only: this terminal can't save it to the cloud session.`;
    let {
        updateSessionColorTag: updateSessionColorTag
      } = await import("B:/~BUN/root/chunk-xc64vz5b.js"),
      s = (await we(updateSessionColorTag(t, a, qS, e.credentials), A)) ?? {
        code: "timeout"
      };
    if (s.code === "saved") return g("cloud_session_color"), d;
    c("cloud_session_color", s.code);
    let p = `${d} on this screen only. It couldn't be saved to the cloud session, so it may not show elsewhere or after you leave.`;
    if (s.code === "no_access") return `${p} ${s.refusal}`;
    return s.code === "timeout" || s.code === "request_failed" || /^http_(429|5\d\d)$/.test(s.code) ? `${p} Run /color ${a} to try again.` : p;
  }
  let m = e.getAppState(),
    y = m.agent ? m.agentDefinitions.activeAgents.find(item => item.agentType === m.agent) : void 0;
  return XPn(my(), KVe({
    userOverride: f,
    agentDefinitionColor: y?.color
  }), e.storageV5), _(a, e.credentials), d;
}
function _(i, credentials) {
  let r = Ad()?.bridgeSessionId;
  if (!r) return;
  let o = bA();
  import("B:/~BUN/root/chunk-2fze9nr7.js").then(({
    updateBridgeSessionColorTag: updateBridgeSessionColorTag
  }) => updateBridgeSessionColorTag(r, i, qS, {
    baseUrl: OJ(),
    getAccessToken: o ? () => o : void 0,
    credentials: credentials
  }).catch(() => {}));
}
export { Qya, H3r };