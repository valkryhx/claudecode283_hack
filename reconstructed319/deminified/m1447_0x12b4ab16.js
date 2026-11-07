// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { b, f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { Lt, Ps } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Ur } from "B:/~BUN/root/chunk-bkfncj77.js";
import { qn } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { Ku } from "B:/~BUN/root/chunk-rrf8gvt4.js";
import { dTs, p2i } from "B:/~BUN/root/chunk-6j3fjnhn.js";
import { sc, X5e, U3t, obi, CCn, Kb, kes, Ldt, B3t } from "B:/~BUN/root/chunk-27h4st9h.js";
var v = {
  env: "from CLAUDE_CODE_AUTO_COMPACT_WINDOW",
  "unknown-model": "default for an unrecognized model",
  "model-default": "default for this model",
  settings: "from settings"
};
function A(e, o) {
  let s = sc(e),
    {
      window: window,
      configured: configured,
      source: source
    } = Kb(s, o),
    t = configured > window ? ` \xB7 capped to ${Ur(window)} by model` : "",
    d = source === "auto" ? "auto" : source === "experiment" || source === "clientdata" ? `auto (${Ur(configured)} tokens)${t}` : `${Ur(configured)} tokens (${v[source]})${t}`,
    a = [`Auto-compact window for ${Ps(s.settingsKey)}: ${d}`],
    m = X5e(i.CLAUDE_CODE_AUTO_COMPACT_WINDOW);
  if (m !== null) a.push(m);
  if (!Ku()) a.push("Auto-compact is currently disabled (see /config)");
  if (a.push("Auto-compact summarizes the conversation when context usage approaches this limit. The actual threshold is the minimum of this setting and your model's maximum context window."), Gtr(s.settingsKey)) a.push("The auto setting picks a window tuned for your model and is strongly recommended for the best cost and performance.");
  if (Ldt(source) && Vtr(s, configured)) a.push("Overriding auto may result in high token usage, especially when resuming long sessions.");
  return a.join(`
`);
}
function Gtr(e) {
  return !p2i(e);
}
function Vtr(e, o) {
  return Math.min(e.contextWindow, o) > kes(e).window;
}
async function dat(e, o, s) {
  let n = sc(o.options.mainLoopModel);
  if (Kb(n, void 0).source === "env") return "CLAUDE_CODE_AUTO_COMPACT_WINDOW is set and takes precedence. Unset it to change this setting.";
  let r = e.trim().toLowerCase(),
    autoCompactWindow = r === "reset" || r === "unset" || r === "default" ? "auto" : CCn(r);
  if (autoCompactWindow === void 0) return `Couldn't parse '${e}'. Expected 'auto' or 100k\u20131M tokens (e.g. 500k, 200000, or 200 as shorthand)`;
  let d = autoCompactWindow === "auto" ? void 0 : autoCompactWindow,
    a = B3t(n, o.options.autoCompactWindow),
    {
      error: error
    } = await qn("userSettings", dTs(n.model, {
      autoCompactWindow: autoCompactWindow
    }, {
      autoCompactWindow: d
    }), void 0, o.storageV5);
  if (error) return `Couldn't save setting: ${error.message}`;
  obi(n.settingsKey, autoCompactWindow);
  let {
      window: c,
      configured: configured_2,
      source: source_2
    } = Kb(n, U3t()),
    overridden = (source_2 === "settings" ? configured_2 : void 0) !== d;
  o.onQueryEvent?.({
    type: "apply_flag_settings",
    settings: {
      autoCompactWindow: null
    }
  }), l("tengu_autocompact_command", {
    action: b(autoCompactWindow === "auto" ? "auto" : "set"),
    ...(d !== void 0 && {
      tokens: d
    }),
    window_model: Lt(n.settingsKey),
    previous_tokens: a.window,
    previous_origin: f(a.origin),
    resulting_tokens: c,
    overridden: overridden,
    route: f(s)
  });
  let g = `Auto-compact window for ${Ps(n.settingsKey)}`;
  if (autoCompactWindow === "auto") return overridden ? `${g} set to auto in settings, but a higher-priority override is active (${Ur(c)} tokens)` : `${g} set to auto`;
  let w = "";
  if (overridden) w = `, but a higher-priority override is active (${Ur(c)} tokens)`;else if (c < autoCompactWindow) w = ` (capped to model limit of ${Ur(c)})`;
  return `${g} set to ${Ur(autoCompactWindow)} tokens${w}`;
}
var Zya = async (e, o) => {
  let s = e.trim();
  if (!s) return {
    type: "text",
    value: A(o.options.mainLoopModel, o.options.autoCompactWindow)
  };
  return {
    type: "text",
    value: await dat(s, o, "noninteractive")
  };
};
export { Gtr, Vtr, dat, Zya };