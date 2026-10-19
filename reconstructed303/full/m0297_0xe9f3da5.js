// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  x
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  R8n,
  hne
} from "B:/~BUN/root/chunk-8ye9n4fk.js";
import {
  f
} from "B:/~BUN/root/chunk-frrkt2bs.js";
import {
  Ai
} from "B:/~BUN/root/chunk-0r89607w.js";
import {
  _t
} from "B:/~BUN/root/chunk-g3snhg6n.js";
var c = new Set(["server/discover", "initialize", "notifications/initialized", "ping", "tools/list", "tools/call", "notifications/cancelled", "notifications/roots/list_changed"]);

function qR(e) {
  return hne({
    serverName: e.name
  }) ? new x(R8n, "hosted desktop reached past its tools") : void 0
}

function gPe(e, o) {
  let t = qR(e);
  if (t === void 0) return;
  let i = o.send.bind(o);
  o.send = async (n, ...s) => {
    if (!("method" in n ? typeof n.method === "string" && c.has(n.method) : !Array.isArray(n) && ("id" in n) && (("result" in n) || ("error" in n)))) throw t;
    return i(n, ...s)
  }
}

function r(e, o) {
  let t = qR(e) ?? void 0;
  return t && Promise.reject(t)
}

function sj(e, o, t, i = !1) {
  return r(e, i ? o.name : void 0) ?? import.meta.require("B:/~BUN/root/chunk-xk11xf74.js").mcpClientModule().invokeToolRaw(e.client, o, t)
}

function hPe(e, o, t) {
  return r(e) ?? import.meta.require("B:/~BUN/root/chunk-xk11xf74.js").mcpClientModule().readResourceRaw(e.client, o, t)
}

function dct(e, o) {
  return r(e) ?? import.meta.require("B:/~BUN/root/chunk-xk11xf74.js").mcpClientModule().listToolsRaw(e.client, o)
}
var l = f(() => _t({}));

function Hho(e, o, t) {
  return r(e) ?? Ai(e.client).request(o, l(), {
    ...t,
    cacheMode: "bypass"
  })
}

function Bq(e, o, t) {
  import.meta.require("B:/~BUN/root/chunk-xk11xf74.js").mcpClientModule().onMcpNotification(e, o, t)
}

function Qpe(e, o) {
  Ai(e.client).onclose = o
}

function oks(e, o) {
  let t = Ai(e.client),
    i = t.onclose;
  t.onclose = () => {
    i?.(), o()
  }
}

function sks(e, o) {
  return r(e) ?? Ai(e.client).notification(o)
}

function iks(e, o) {
  Ai(e.client)?.transport?.onmessage?.(o)
}
export {
  qR,
  gPe,
  sj,
  hPe,
  dct,
  Hho,
  Bq,
  Qpe,
  oks,
  sks,
  iks
};
