// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { ms, k$, hSt } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { jo, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { rze, JT } from "B:/~BUN/root/chunk-rfp1pa77.js";
import { SPo } from "B:/~BUN/root/chunk-429xgjya.js";
import { cDe } from "B:/~BUN/root/chunk-fy6tg5jq.js";
import { xl } from "B:/~BUN/root/chunk-648jq7hr.js";
import { closeSync as c, openSync as d } from "fs";
import { devNull as g } from "os";
class p {
  line;
}
var l = new z(() => new p());
function DGr(e = 0) {
  {
    if (!process.argv.includes("--session-tunnel") || !xl()) return;
    cDe(u => t(`[session tunnel] ${u}`, {
      level: "warn"
    }));
    let o = rze(e, "the session tunnel's line of JSON") ?? void 0;
    ms(l).line = o;
    let f = d(g, "r");
    if (f !== e) c(f);
    let n;
    try {
      n = jo(o ?? "null");
    } catch {
      n = null;
    }
    let r = typeof n?.oauth_token === "string" ? n.oauth_token.trim() : "",
      i = typeof n?.agent_proxy_token === "string" ? n.agent_proxy_token.trim() : "";
    if (r !== "") JT(), k$(r), hSt("CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR");
    let a = typeof n?.env === "object" && n.env !== null && !Array.isArray(n.env) ? Object.entries(n.env) : [],
      s = {};
    for (let [u, m] of a) if (typeof m === "string") s[u] = m;
    return SPo(s), t(`[session tunnel] the line has ${r === "" ? "no" : "an"} OAuth token, ${i === "" ? "no" : "an"} agent proxy token; variables: ${Object.keys(s).length} of ${a.length}`), i === "" ? void 0 : i;
  }
  return;
}
function dei() {
  return ms(l).line;
}
function LGr() {
  let e = ms(l),
    line = e.line;
  return e.line = void 0, line;
}
export { DGr, dei, LGr };