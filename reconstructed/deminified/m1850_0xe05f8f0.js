// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { pt, le } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { qO as install, tge as reconnect, GM, KO } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { ip } from "B:/~BUN/root/chunk-ftthz33s.js";
var permissions = "https://clau.de/chrome/permissions",
  l = {
    install: install,
    reconnect: reconnect,
    permissions: permissions
  };
async function Aqo({
  mcpClients: mcpClients
}) {
  let installed = await KO().catch(e => (t(`[Claude in Chrome] Extension detection failed: ${e instanceof Error ? e.message : String(e)}`, {
      level: "error"
    }), !1)),
    o = le(),
    connected = mcpClients.some(item => item.name === ip && item.type === "connected"),
    paired_browser = o.chromeExtension?.pairedDeviceName;
  return {
    allowed: GM(),
    subscriber: pt(),
    wsl: a.isWslEnvironment(),
    installed: installed,
    connected: connected,
    ...(connected && paired_browser && {
      paired_browser: paired_browser
    }),
    enabled_by_default: o.claudeInChromeDefaultEnabled ?? !1,
    urls: {
      ...l
    }
  };
}
export { permissions as _Gt, Aqo };