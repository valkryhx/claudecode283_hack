// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { Ce, ue } from "B:/~BUN/root/chunk-hb6x4e3n.js";
var p = ["c4e-ultrareview", "claude-design-command", "default-permission-mode-config", "desktop-app", "desktop-contextual", "desktop-ios-simulator", "desktop-shortcut", "focus-view", "frontend-design-plugin", "ide-upsell-external-terminal", "install-github-app", "install-slack-app", "install-slack-app-mcp", "memory-command", "no-flicker", "permissions", "plugin-disuse-review", "status-line", "team-onboarding-share", "voice-mode", "web-setup-github", "workflow-size-prompting", "workflow-size-prompting-ambient", "you-should-know-plugin", ...[]];
function u(t) {
  return p.includes(t);
}
function Bot(tipId, o, n) {
  let numStartups = ue().numStartups;
  Ce(e => {
    let r = e.tipsHistory ?? {};
    if (r[tipId] === numStartups) return e;
    let s = e.tipLifetimeShownCounts ?? {};
    return {
      ...e,
      tipsHistory: {
        ...r,
        [tipId]: numStartups
      },
      tipLifetimeShownCounts: {
        ...s,
        [tipId]: (s[tipId] ?? 0) + 1
      },
      ...(n !== void 0 && {
        tipsHistoryByCommand: {
          ...e.tipsHistoryByCommand,
          [n]: {
            tipId: tipId,
            numStartups: numStartups
          }
        }
      })
    };
  }, o);
}
var g = 100;
function YNe(t) {
  let o = ue(),
    n = o.tipsHistoryByCommand?.[t];
  if (typeof n !== "object" || n === null) return {};
  let i = o.numStartups - n.numStartups;
  if (!(i >= 0)) return {};
  return {
    via_tip: !0,
    tip_launches_ago: Math.min(i, g),
    ...(u(n.tipId) && {
      tip_id: c(n.tipId)
    })
  };
}
function R7(t) {
  return ue().tipLifetimeShownCounts?.[t] ?? 0;
}
function Ros(t) {
  return ue().pluginSuggestionShownCounts?.[t] ?? 0;
}
function Tz(t) {
  let o = ue(),
    n = o.tipsHistory?.[t];
  if (!n) return 1 / 0;
  return o.numStartups - n;
}
function Aos(t) {
  return ue().pluginSuggestionDiscoverShownCounts?.[t] ?? 0;
}
function xos(t, o) {
  if (t.length === 0) return;
  Ce(n => {
    let i = n.pluginSuggestionDiscoverShownCounts ?? {};
    if (t.every(item => (i[item] ?? 0) > 0)) return n;
    let pluginSuggestionDiscoverShownCounts = {
      ...i
    };
    for (let r of t) pluginSuggestionDiscoverShownCounts[r] = (pluginSuggestionDiscoverShownCounts[r] ?? 0) + 1;
    return {
      ...n,
      pluginSuggestionDiscoverShownCounts: pluginSuggestionDiscoverShownCounts
    };
  }, o);
}
export { Bot, YNe, R7, Ros, Tz, Aos, xos };