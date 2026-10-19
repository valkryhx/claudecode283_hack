// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  Et,
  ue
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  AU,
  VPe,
  AC,
  xU
} from "B:/~BUN/root/chunk-dn8rakwm.js";
import {
  $a
} from "B:/~BUN/root/chunk-m0xdacj9.js";
var ttr = "https://clau.de/chrome/permissions",
  m = {
    install: AU,
    reconnect: VPe,
    permissions: ttr
  };
async function Bei({
  mcpClients: s,
  atStartup: i
}) {
  let l = await xU().catch((e) => (t(`[Claude in Chrome] Extension detection failed: ${e instanceof Error?e.message:String(e)}`, {
      level: "error"
    }), !1)),
    o = ue(),
    r = s.some((e) => e.name === $a && e.type === "connected"),
    n = o.chromeExtension?.pairedDeviceName;
  return {
    allowed: AC(),
    subscriber: Et(),
    wsl: a.isWslEnvironment(),
    installed: l,
    connected: r,
    ...r && n && {
      paired_browser: n
    },
    enabled_by_default: o.claudeInChromeDefaultEnabled ?? !1,
    at_startup: await i(o.claudeInChromeDefaultEnabled === !0),
    urls: {
      ...m
    }
  }
}
export {
  ttr,
  Bei
};
