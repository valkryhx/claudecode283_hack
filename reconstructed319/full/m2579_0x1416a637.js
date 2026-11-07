// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Rt,
  fe
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  v2,
  NWe,
  BP,
  E2
} from "B:/~BUN/root/chunk-cxcakgnv.js";
import {
  Ta
} from "B:/~BUN/root/chunk-e0q1m1z9.js";
var rWr = "https://clau.de/chrome/permissions",
  m = {
    install: v2,
    reconnect: NWe,
    permissions: rWr
  };
async function oha({
  mcpClients: s,
  atStartup: a
}) {
  let l = await E2().catch((e) => (t(`[Claude in Chrome] Extension detection failed: ${e instanceof Error?e.message:String(e)}`, {
      level: "error"
    }), !1)),
    o = fe(),
    r = s.some((e) => e.name === Ta && e.type === "connected"),
    n = o.chromeExtension?.pairedDeviceName;
  return {
    allowed: BP(),
    subscriber: Rt(),
    wsl: i.isWslEnvironment(),
    installed: l,
    connected: r,
    ...r && n && {
      paired_browser: n
    },
    enabled_by_default: o.claudeInChromeDefaultEnabled ?? !1,
    at_startup: await a(o.claudeInChromeDefaultEnabled === !0),
    urls: {
      ...m
    }
  }
}
export {
  rWr,
  oha
};
