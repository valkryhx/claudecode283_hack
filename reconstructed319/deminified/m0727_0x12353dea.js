// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Po, DN, Wxe } from "B:/~BUN/root/chunk-game8aqv.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { t, ds } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Qtt, IE } from "B:/~BUN/root/chunk-pwj77283.js";
import { ZTs } from "B:/~BUN/root/chunk-m749kjym.js";
import { kd } from "B:/~BUN/root/chunk-jbjsy1k0.js";
import { EY } from "B:/~BUN/root/chunk-bnk7yrnd.js";
import { closeSync as c, openSync as d } from "fs";
import { devNull as g } from "os";
class p {
  line;
}
var l = new W(() => new p());
function Xjo(e = 0) {
  {
    if (!process.argv.includes("--session-tunnel") || !kd()) return;
    EY(u => t(`[session tunnel] ${u}`, {
      level: "warn"
    }));
    let o = Qtt(e, "the session tunnel's line of JSON") ?? void 0;
    Po(l).line = o;
    let f = d(g, "r");
    if (f !== e) c(f);
    let n;
    try {
      n = ds(o ?? "null");
    } catch {
      n = null;
    }
    let r = typeof n?.oauth_token === "string" ? n.oauth_token.trim() : "",
      i = typeof n?.agent_proxy_token === "string" ? n.agent_proxy_token.trim() : "";
    if (r !== "") IE(), DN(r), Wxe("CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR");
    let a = typeof n?.env === "object" && n.env !== null && !Array.isArray(n.env) ? Object.entries(n.env) : [],
      s = {};
    for (let [u, m] of a) if (typeof m === "string") s[u] = m;
    return ZTs(s), t(`[session tunnel] the line has ${r === "" ? "no" : "an"} OAuth token, ${i === "" ? "no" : "an"} agent proxy token; variables: ${Object.keys(s).length} of ${a.length}`), i === "" ? void 0 : i;
  }
  return;
}
function gga() {
  return Po(l).line;
}
function Jjo() {
  let e = Po(l),
    line = e.line;
  return e.line = void 0, line;
}
export { Xjo, gga, Jjo };