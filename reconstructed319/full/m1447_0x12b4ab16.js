// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  b,
  f
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  Lt,
  Ps
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  Ur
} from "B:/~BUN/root/chunk-bkfncj77.js";
import {
  qn
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  Ku
} from "B:/~BUN/root/chunk-rrf8gvt4.js";
import {
  dTs,
  p2i
} from "B:/~BUN/root/chunk-6j3fjnhn.js";
import {
  sc,
  X5e,
  U3t,
  obi,
  CCn,
  Kb,
  kes,
  Ldt,
  B3t
} from "B:/~BUN/root/chunk-27h4st9h.js";
var v = {
  env: "from CLAUDE_CODE_AUTO_COMPACT_WINDOW",
  "unknown-model": "default for an unrecognized model",
  "model-default": "default for this model",
  settings: "from settings"
};

function A(e, o) {
  let s = sc(e),
    {
      window: n,
      configured: r,
      source: u
    } = Kb(s, o),
    t = r > n ? ` \xB7 capped to ${Ur(n)} by model` : "",
    d = u === "auto" ? "auto" : u === "experiment" || u === "clientdata" ? `auto (${Ur(r)} tokens)${t}` : `${Ur(r)} tokens (${v[u]})${t}`,
    a = [`Auto-compact window for ${Ps(s.settingsKey)}: ${d}`],
    m = X5e(i.CLAUDE_CODE_AUTO_COMPACT_WINDOW);
  if (m !== null) a.push(m);
  if (!Ku()) a.push("Auto-compact is currently disabled (see /config)");
  if (a.push("Auto-compact summarizes the conversation when context usage approaches this limit. The actual threshold is the minimum of this setting and your model's maximum context window."), Gtr(s.settingsKey)) a.push("The auto setting picks a window tuned for your model and is strongly recommended for the best cost and performance.");
  if (Ldt(u) && Vtr(s, r)) a.push("Overriding auto may result in high token usage, especially when resuming long sessions.");
  return a.join(`
`)
}

function Gtr(e) {
  return !p2i(e)
}

function Vtr(e, o) {
  return Math.min(e.contextWindow, o) > kes(e).window
}
async function dat(e, o, s) {
  let n = sc(o.options.mainLoopModel);
  if (Kb(n, void 0).source === "env") return "CLAUDE_CODE_AUTO_COMPACT_WINDOW is set and takes precedence. Unset it to change this setting.";
  let r = e.trim().toLowerCase(),
    t = r === "reset" || r === "unset" || r === "default" ? "auto" : CCn(r);
  if (t === void 0) return `Couldn't parse '${e}'. Expected 'auto' or 100k\u20131M tokens (e.g. 500k, 200000, or 200 as shorthand)`;
  let d = t === "auto" ? void 0 : t,
    a = B3t(n, o.options.autoCompactWindow),
    {
      error: m
    } = await qn("userSettings", dTs(n.model, {
      autoCompactWindow: t
    }, {
      autoCompactWindow: d
    }), void 0, o.storageV5);
  if (m) return `Couldn't save setting: ${m.message}`;
  obi(n.settingsKey, t);
  let {
    window: c,
    configured: C,
    source: y
  } = Kb(n, U3t()), p = (y === "settings" ? C : void 0) !== d;
  o.onQueryEvent?.({
    type: "apply_flag_settings",
    settings: {
      autoCompactWindow: null
    }
  }), l("tengu_autocompact_command", {
    action: b(t === "auto" ? "auto" : "set"),
    ...d !== void 0 && {
      tokens: d
    },
    window_model: Lt(n.settingsKey),
    previous_tokens: a.window,
    previous_origin: f(a.origin),
    resulting_tokens: c,
    overridden: p,
    route: f(s)
  });
  let g = `Auto-compact window for ${Ps(n.settingsKey)}`;
  if (t === "auto") return p ? `${g} set to auto in settings, but a higher-priority override is active (${Ur(c)} tokens)` : `${g} set to auto`;
  let w = "";
  if (p) w = `, but a higher-priority override is active (${Ur(c)} tokens)`;
  else if (c < t) w = ` (capped to model limit of ${Ur(c)})`;
  return `${g} set to ${Ur(t)} tokens${w}`
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
  }
};
export {
  Gtr,
  Vtr,
  dat,
  Zya
};
