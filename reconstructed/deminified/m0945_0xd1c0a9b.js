// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Y } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { nl } from "B:/~BUN/root/chunk-6spmd6p4.js";
import { p0, Yee } from "B:/~BUN/root/chunk-8gym6yya.js";
import { Vl } from "B:/~BUN/root/chunk-n2rcpjj1.js";
import { vp, oPt } from "B:/~BUN/root/chunk-9sy3w2pa.js";
import { Th, JEe } from "B:/~BUN/root/chunk-rdxve5qj.js";
import { Rd } from "B:/~BUN/root/chunk-06ra9xdn.js";
import { ext } from "B:/~BUN/root/chunk-3jyp964r.js";
import { iOe } from "B:/~BUN/root/chunk-80sarwew.js";
var c = ["default", "reset", "none", "gray", "grey"];
async function kKo(n, e, o) {
  return n(await sCn(o, e), {
    display: "system"
  }), null;
}
async function sCn(n, e) {
  if (nl()) return "Cannot set color: This session is a teammate. Teammate colors are assigned by the team leader.";
  let o = n?.trim() ?? "",
    t = o === "" ? Th[Math.floor(Math.random() * Th.length)] : o.toLowerCase(),
    r = c.includes(t);
  if (!r && !Th.includes(t)) {
    let s = Th.join(", ");
    return `Invalid color "${t}". Available colors: ${s}, default`;
  }
  let d = Y(),
    m = Rd(),
    i = r ? "default" : t,
    l = r ? void 0 : t;
  await ext(d, i, m, e.storageV5), e.setAppState(s => iOe(s, {
    color: l
  }));
  let a = e.getAppState(),
    g = a.agent ? a.agentDefinitions.activeAgents.find(item => item.agentType === a.agent) : void 0;
  return oPt(vp(), JEe({
    userOverride: l,
    agentDefinitionColor: g?.color
  }), e.storageV5), p(i, e.credentials), r ? "Session color reset to default" : `Session color set to: ${t}`;
}
function p(n, credentials) {
  let o = Vl()?.bridgeSessionId;
  if (!o) return;
  let t = p0();
  import("B:/~BUN/root/chunk-f33cyajj.js").then(({
    updateBridgeSessionColorTag: updateBridgeSessionColorTag
  }) => updateBridgeSessionColorTag(o, n, Th, {
    baseUrl: Yee(),
    getAccessToken: t ? () => t : void 0,
    credentials: credentials
  }).catch(() => {}));
}
export { kKo, sCn };