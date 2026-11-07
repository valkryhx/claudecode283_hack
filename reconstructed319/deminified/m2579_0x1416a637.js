// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Rt, fe } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { v2 as install, NWe as reconnect, BP, E2 } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { Ta } from "B:/~BUN/root/chunk-e0q1m1z9.js";
var permissions = "https://clau.de/chrome/permissions",
  m = {
    install: install,
    reconnect: reconnect,
    permissions: permissions
  };
async function oha({
  mcpClients: mcpClients,
  atStartup: atStartup
}) {
  let installed = await E2().catch(e => (t(`[Claude in Chrome] Extension detection failed: ${e instanceof Error ? e.message : String(e)}`, {
      level: "error"
    }), !1)),
    o = fe(),
    connected = mcpClients.some(item => item.name === Ta && item.type === "connected"),
    paired_browser = o.chromeExtension?.pairedDeviceName;
  return {
    allowed: BP(),
    subscriber: Rt(),
    wsl: i.isWslEnvironment(),
    installed: installed,
    connected: connected,
    ...(connected && paired_browser && {
      paired_browser: paired_browser
    }),
    enabled_by_default: o.claudeInChromeDefaultEnabled ?? !1,
    at_startup: await atStartup(o.claudeInChromeDefaultEnabled === !0),
    urls: {
      ...m
    }
  };
}
export { permissions as rWr, oha };