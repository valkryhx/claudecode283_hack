// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { OC } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { Xr } from "B:/~BUN/root/chunk-4p6z9qq1.js";
import { LT, jA, Uo } from "B:/~BUN/root/chunk-3jyp964r.js";
import { z4r } from "B:/~BUN/root/chunk-50pgep97.js";
import { jH } from "B:/~BUN/root/chunk-0sj8manb.js";
import { Qr } from "B:/~BUN/root/chunk-0bx1tycm.js";
function kXn(e, r) {
  return z4r(r.scope) && !Uo(e);
}
function Qxe(e, r) {
  return kXn(e, r) && !o(r);
}
function o(e) {
  return import.meta.require("B:/~BUN/root/chunk-m4dhr7e5.js").mcpClientModule().isFirstPartyDesignServerConfig(e);
}
function EXn(e) {
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
  return Object.assign(LT(), Qr(e, EXn));
}
async function XBe({
  storageV5: storageV5
} = {}) {
  if (OC() || Xr()) return LT();
  await jH();
  let {
    servers: servers
  } = await jA({}, {
    purpose: "deviceBridge",
    storageV5: storageV5
  });
  return t(servers);
}
export { kXn, Qxe, EXn, XBe };