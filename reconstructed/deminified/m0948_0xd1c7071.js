// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { y } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { cr } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { Je, ln } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { hp, Nf, SRt, xT, Hnt } from "B:/~BUN/root/chunk-3jyp964r.js";
function g(r, e) {
  let {
      window: window,
      configured: configured,
      source: source
    } = xT(hp(r), e),
    t = configured > window ? ` \xB7 capped to ${cr(window)} by model` : "",
    a = [`Auto-compact window: ${source === "auto" ? "auto" : source === "experiment" || source === "clientdata" ? `auto (${cr(configured)} tokens)${t}` : source === "env" ? `${cr(configured)} tokens (from CLAUDE_CODE_AUTO_COMPACT_WINDOW)${t}` : source === "unknown-model" ? `${cr(configured)} tokens (default for an unrecognized model)${t}` : source === "model-default" ? `${cr(configured)} tokens (default for this model)${t}` : `${cr(configured)} tokens (from settings)${t}`}`];
  if (!Nf()) a.push("Auto-compact is currently disabled (see /config)");
  if (a.push("Auto-compact summarizes the conversation when context usage approaches this limit. The actual threshold is the minimum of this setting and your model's maximum context window."), a.push("The auto setting picks a window tuned for your model and is strongly recommended for the best cost and performance."), Hnt(source)) a.push("Overriding auto may result in high token usage, especially when resuming long sessions.");
  return a.join(`
`);
}
async function rwt(r, e) {
  let mainLoopModel = e.options.mainLoopModel;
  if (xT(hp(mainLoopModel), void 0).source === "env") return "CLAUDE_CODE_AUTO_COMPACT_WINDOW is set and takes precedence. Unset it to change this setting.";
  let o = r.trim().toLowerCase(),
    t = o === "reset" || o === "unset" || o === "default" ? "auto" : SRt(o);
  if (t === void 0) return `Couldn't parse '${r}'. Expected 'auto' or 100k\u20131M tokens (e.g. 500k, 200000, or 200 as shorthand)`;
  let u = t === "auto" ? void 0 : t,
    {
      error: error
    } = await ln("userSettings", {
      autoCompactWindow: u
    }, void 0, e.storageV5);
  if (error) return `Couldn't save setting: ${error.message}`;
  let autoCompactWindow = Je().autoCompactWindow,
    {
      window: window_2,
      source: source_2
    } = xT(hp(mainLoopModel), autoCompactWindow),
    c = source_2 === "env" || autoCompactWindow !== u,
    f = c ? autoCompactWindow : u;
  if (e.onQueryEvent?.({
    type: "apply_flag_settings",
    settings: {
      autoCompactWindow: f ?? null
    }
  }), i("tengu_autocompact_command", {
    action: y(t === "auto" ? "auto" : "set"),
    ...(u !== void 0 && {
      tokens: u
    })
  }), t === "auto") return c ? `Auto-compact window set to auto in settings, but a higher-priority override is active (${cr(window_2)} tokens)` : "Auto-compact window set to auto";
  let p = "";
  if (c) p = `, but a higher-priority override is active (${cr(window_2)} tokens)`;else if (window_2 < t) p = ` (capped to model limit of ${cr(window_2)})`;
  return `Auto-compact window set to ${cr(t)} tokens${p}`;
}
var EKo = async (r, e) => {
  let n = r.trim();
  if (!n) return {
    type: "text",
    value: g(e.options.mainLoopModel, e.options.autoCompactWindow)
  };
  return {
    type: "text",
    value: await rwt(n, e)
  };
};
export { rwt, EKo };