// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { j } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { up } from "B:/~BUN/root/chunk-efcxwmhb.js";
import { Uge, Myt } from "B:/~BUN/root/chunk-ejm0pmyj.js";
import { uM } from "B:/~BUN/root/chunk-vnmfp48d.js";
import { _N } from "B:/~BUN/root/chunk-dn8rakwm.js";
function Aoe(e, config) {
  return e.config.scope === config.scope && e.config.pluginSource === config.pluginSource ? e : {
    ...e,
    config: config
  };
}
var s = 128,
  m = /^[a-z0-9._:-]+$/;
function i(e) {
  let o = e?.trim().toLowerCase();
  if (!o || o.length > s || !m.test(o)) return;
  return o;
}
function XRe(e, o) {
  if (o.type !== "http" || _N(e, o) !== "dynamic") return;
  let n = i(Uge(o));
  if (n) return n;
  let t = Myt.peek(j())?.read?.();
  return i(t?.[e]);
}
var c = (e, o) => ({
  ...o,
  scope: e.config.scope,
  pluginSource: e.config.pluginSource,
  source: _N(e.name, e.config),
  pluginTelemetry: void 0,
  ...(e.config.pluginSource !== void 0 && {
    pluginTelemetry: uM(e.config.pluginSource, up())
  }),
  serverIdStamp: XRe(e.name, e.config)
});
function O8(e, o) {
  let n = o.map(item => {
    if (item.mcpInfo === void 0) return item;
    return item.mcpInfo.scope === e.config.scope && item.mcpInfo.pluginSource === e.config.pluginSource ? item : {
      ...item,
      mcpInfo: c(e, item.mcpInfo)
    };
  });
  return n.every((item, index) => item === o[index]) ? o : n;
}
export { XRe, Aoe, O8 };