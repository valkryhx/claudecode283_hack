// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Mw } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { dw, RT, Oo } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { wr } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { Bs } from "B:/~BUN/root/chunk-yw21pggd.js";
import { VKo } from "B:/~BUN/root/chunk-74peyjsq.js";
import { NP } from "B:/~BUN/root/chunk-mh8d9g35.js";
function Ozr(e, r) {
  return VKo(r.scope) && !Oo(e);
}
function f2e(e, r) {
  return Ozr(e, r) && !o(r);
}
function o(e) {
  return import.meta.require("B:/~BUN/root/chunk-xk11xf74.js").mcpClientModule().isFirstPartyDesignServerConfig(e);
}
function Izr(e) {
  switch (e.type) {
    case void 0:
    case "stdio":
    case "http":
    case "sse":
    case "ws":
      return !0;
    case "sdk":
    case "sse-ide":
    case "ws-ide":
    case "claudeai-proxy":
      return !1;
  }
}
function t(e) {
  return Object.assign(dw(), Bs(e, Izr));
}
async function Net({
  storageV5: storageV5
} = {}) {
  if (Mw() || wr()) return dw();
  await NP();
  let {
    servers: servers
  } = await RT({}, {
    purpose: "deviceBridge",
    storageV5: storageV5
  });
  return t(servers);
}
export { Ozr, f2e, Izr, Net };