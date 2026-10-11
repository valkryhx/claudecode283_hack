// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { Ee, le } from "B:/~BUN/root/chunk-gf53qpk6.js";
var p = ["c4e-ultrareview", "claude-design-command", "default-permission-mode-config", "desktop-app", "desktop-contextual", "desktop-ios-simulator", "desktop-shortcut", "focus-view", "frontend-design-plugin", "ide-upsell-external-terminal", "install-github-app", "install-slack-app", "memory-command", "no-flicker", "permissions", "plugin-disuse-review", "status-line", "team-onboarding-share", "voice-mode", "web-setup-github", "workflow-size-prompting", "workflow-size-prompting-ambient", ...[]];
function u(t) {
  return p.includes(t);
}
function fze(tipId, i, n) {
  let numStartups = le().numStartups;
  Ee(e => {
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
  }, i);
}
var g = 100;
function WSe(t) {
  let i = le(),
    n = i.tipsHistoryByCommand?.[t];
  if (typeof n !== "object" || n === null) return {};
  let o = i.numStartups - n.numStartups;
  if (!(o >= 0)) return {};
  return {
    via_tip: !0,
    tip_launches_ago: Math.min(o, g),
    ...(u(n.tipId) && {
      tip_id: c(n.tipId)
    })
  };
}
function l4(t) {
  return le().tipLifetimeShownCounts?.[t] ?? 0;
}
function kto(t) {
  return le().pluginSuggestionShownCounts?.[t] ?? 0;
}
function UH(t) {
  let i = le(),
    n = i.tipsHistory?.[t];
  if (!n) return 1 / 0;
  return i.numStartups - n;
}
function Eto(t) {
  return le().pluginSuggestionDiscoverShownCounts?.[t] ?? 0;
}
function Tto(t, i) {
  if (t.length === 0) return;
  Ee(n => {
    let o = n.pluginSuggestionDiscoverShownCounts ?? {};
    if (t.every(item => (o[item] ?? 0) > 0)) return n;
    let pluginSuggestionDiscoverShownCounts = {
      ...o
    };
    for (let r of t) pluginSuggestionDiscoverShownCounts[r] = (pluginSuggestionDiscoverShownCounts[r] ?? 0) + 1;
    return {
      ...n,
      pluginSuggestionDiscoverShownCounts: pluginSuggestionDiscoverShownCounts
    };
  }, i);
}
export { fze, WSe, l4, kto, UH, Eto, Tto };