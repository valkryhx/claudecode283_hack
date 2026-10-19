// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { K } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { Zd } from "B:/~BUN/root/chunk-8v3gkznb.js";
import { pO, Jfe } from "B:/~BUN/root/chunk-xf25v2pj.js";
import { Rd } from "B:/~BUN/root/chunk-aqd86p9a.js";
import { Om, eZt } from "B:/~BUN/root/chunk-nq10jsxs.js";
import { Bb, CBe } from "B:/~BUN/root/chunk-bvhc5fp3.js";
import { Lu } from "B:/~BUN/root/chunk-9080897a.js";
import { xQt } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { YKe } from "B:/~BUN/root/chunk-n9art1rm.js";
var c = ["default", "reset", "none", "gray", "grey"];
async function fri(n, e, o) {
  return n(await Zcr(o, e), {
    display: "system"
  }), null;
}
async function Zcr(n, e) {
  if (Zd()) return "Cannot set color: This session is a teammate. Teammate colors are assigned by the team leader.";
  let o = n?.trim() ?? "",
    t = o === "" ? Bb[Math.floor(Math.random() * Bb.length)] : o.toLowerCase(),
    r = c.includes(t);
  if (!r && !Bb.includes(t)) {
    let s = Bb.join(", ");
    return `Invalid color "${t}". Available colors: ${s}, default`;
  }
  let d = K(),
    m = Lu(),
    i = r ? "default" : t,
    l = r ? void 0 : t;
  await xQt(d, i, m, e.storageV5), e.setAppState(s => YKe(s, {
    color: l
  }));
  let a = e.getAppState(),
    g = a.agent ? a.agentDefinitions.activeAgents.find(item => item.agentType === a.agent) : void 0;
  return eZt(Om(), CBe({
    userOverride: l,
    agentDefinitionColor: g?.color
  }), e.storageV5), p(i, e.credentials), r ? "Session color reset to default" : `Session color set to: ${t}`;
}
function p(n, credentials) {
  let o = Rd()?.bridgeSessionId;
  if (!o) return;
  let t = pO();
  import("B:/~BUN/root/chunk-m1jag8f2.js").then(({
    updateBridgeSessionColorTag: updateBridgeSessionColorTag
  }) => updateBridgeSessionColorTag(o, n, Bb, {
    baseUrl: Jfe(),
    getAccessToken: t ? () => t : void 0,
    credentials: credentials
  }).catch(() => {}));
}
export { fri, Zcr };