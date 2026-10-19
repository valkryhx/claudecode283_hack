// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { b, c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { cr } from "B:/~BUN/root/chunk-pjgzz98k.js";
import { In } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { wt, Yo } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { Kp } from "B:/~BUN/root/chunk-8w42v0dp.js";
import { sxo, rHs } from "B:/~BUN/root/chunk-8y0chnnr.js";
import { Vd, U9t, B9t, Mb, rlo, _xt, bxt } from "B:/~BUN/root/chunk-9grc6xh0.js";
var y = {
  env: "from CLAUDE_CODE_AUTO_COMPACT_WINDOW",
  "unknown-model": "default for an unrecognized model",
  "model-default": "default for this model",
  settings: "from settings"
};
function v(t, o) {
  let n = Vd(t),
    {
      window: window,
      configured: configured,
      source: source
    } = Mb(n, o),
    e = configured > window ? ` \xB7 capped to ${cr(window)} by model` : "",
    d = source === "auto" ? "auto" : source === "experiment" || source === "clientdata" ? `auto (${cr(configured)} tokens)${e}` : `${cr(configured)} tokens (${y[source]})${e}`,
    a = [`Auto-compact window for ${Yo(n.settingsKey)}: ${d}`];
  if (!Kp()) a.push("Auto-compact is currently disabled (see /config)");
  if (a.push("Auto-compact summarizes the conversation when context usage approaches this limit. The actual threshold is the minimum of this setting and your model's maximum context window."), $Pn(n.settingsKey)) a.push("The auto setting picks a window tuned for your model and is strongly recommended for the best cost and performance.");
  if (_xt(source) && UPn(n, configured)) a.push("Overriding auto may result in high token usage, especially when resuming long sessions.");
  return a.join(`
`);
}
function $Pn(t) {
  return !rHs(t);
}
function UPn(t, o) {
  return Math.min(t.contextWindow, o) > rlo(t).window;
}
async function XKe(t, o, n) {
  let s = Vd(o.options.mainLoopModel);
  if (Mb(s, void 0).source === "env") return "CLAUDE_CODE_AUTO_COMPACT_WINDOW is set and takes precedence. Unset it to change this setting.";
  let r = t.trim().toLowerCase(),
    autoCompactWindow = r === "reset" || r === "unset" || r === "default" ? "auto" : B9t(r);
  if (autoCompactWindow === void 0) return `Couldn't parse '${t}'. Expected 'auto' or 100k\u20131M tokens (e.g. 500k, 200000, or 200 as shorthand)`;
  let d = autoCompactWindow === "auto" ? void 0 : autoCompactWindow,
    a = bxt(s, o.options.autoCompactWindow),
    {
      error: error
    } = await In("userSettings", sxo(s.model, {
      autoCompactWindow: autoCompactWindow
    }, {
      autoCompactWindow: d
    }), void 0, o.storageV5);
  if (error) return `Couldn't save setting: ${error.message}`;
  let {
      window: m,
      configured: configured_2,
      source: source_2
    } = Mb(s, U9t()),
    overridden = (source_2 === "settings" ? configured_2 : void 0) !== d;
  o.onQueryEvent?.({
    type: "apply_flag_settings",
    settings: {
      autoCompactWindow: null
    }
  }), i("tengu_autocompact_command", {
    action: b(autoCompactWindow === "auto" ? "auto" : "set"),
    ...(d !== void 0 && {
      tokens: d
    }),
    window_model: wt(s.settingsKey),
    previous_tokens: a.window,
    previous_origin: c(a.origin),
    resulting_tokens: m,
    overridden: overridden,
    route: c(n)
  });
  let l = `Auto-compact window for ${Yo(s.settingsKey)}`;
  if (autoCompactWindow === "auto") return overridden ? `${l} set to auto in settings, but a higher-priority override is active (${cr(m)} tokens)` : `${l} set to auto`;
  let f = "";
  if (overridden) f = `, but a higher-priority override is active (${cr(m)} tokens)`;else if (m < autoCompactWindow) f = ` (capped to model limit of ${cr(m)})`;
  return `${l} set to ${cr(autoCompactWindow)} tokens${f}`;
}
var gri = async (t, o) => {
  let n = t.trim();
  if (!n) return {
    type: "text",
    value: v(o.options.mainLoopModel, o.options.autoCompactWindow)
  };
  return {
    type: "text",
    value: await XKe(n, o, "noninteractive")
  };
};
export { $Pn, UPn, XKe, gri };