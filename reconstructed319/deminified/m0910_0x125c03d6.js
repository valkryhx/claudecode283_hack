// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { Le, fe } from "B:/~BUN/root/chunk-1ks9vs37.js";
var p = ["c4e-ultrareview", "claude-design-command", "claude-security-plugin", "claude-security-review-closing", "content-link-long-sessions", "default-permission-mode-config", "desktop-app", "desktop-contextual", "desktop-ios-simulator", "desktop-shortcut", "explanatory-output-style", "focus-view", "frontend-design-plugin", "ide-upsell-external-terminal", "install-github-app", "install-slack-app", "install-slack-app-mcp", "memory-command", "no-flicker", "permissions", "plugin-disuse-review", "status-line", "team-onboarding-share", "voice-mode", "web-setup-github", "workflow-size-prompting", "workflow-size-prompting-ambient", "you-should-know-plugin", ...[]];
function u(t) {
  return p.includes(t);
}
function RBe(tipId, i, n) {
  let numStartups = fe().numStartups;
  Le(e => {
    let s = e.tipsHistory ?? {};
    if (s[tipId] === numStartups) return e;
    let r = e.tipLifetimeShownCounts ?? {};
    return {
      ...e,
      tipsHistory: {
        ...s,
        [tipId]: numStartups
      },
      tipLifetimeShownCounts: {
        ...r,
        [tipId]: (r[tipId] ?? 0) + 1
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
function C6e(t) {
  let i = fe(),
    n = i.tipsHistoryByCommand?.[t];
  if (typeof n !== "object" || n === null) return {};
  let o = i.numStartups - n.numStartups;
  if (!(o >= 0)) return {};
  return {
    via_tip: !0,
    tip_launches_ago: Math.min(o, g),
    ...(u(n.tipId) && {
      tip_id: f(n.tipId)
    })
  };
}
function dQ(t) {
  return fe().tipLifetimeShownCounts?.[t] ?? 0;
}
function Uai(t) {
  return fe().pluginSuggestionShownCounts?.[t] ?? 0;
}
function AB(t) {
  let i = fe(),
    n = i.tipsHistory?.[t];
  if (!n) return 1 / 0;
  return i.numStartups - n;
}
function Bai(t) {
  return fe().pluginSuggestionDiscoverShownCounts?.[t] ?? 0;
}
function jai(t, i) {
  if (t.length === 0) return;
  Le(n => {
    let o = n.pluginSuggestionDiscoverShownCounts ?? {};
    if (t.every(item => (o[item] ?? 0) > 0)) return n;
    let pluginSuggestionDiscoverShownCounts = {
      ...o
    };
    for (let s of t) pluginSuggestionDiscoverShownCounts[s] = (pluginSuggestionDiscoverShownCounts[s] ?? 0) + 1;
    return {
      ...n,
      pluginSuggestionDiscoverShownCounts: pluginSuggestionDiscoverShownCounts
    };
  }, i);
}
export { RBe, C6e, dQ, Uai, AB, Bai, jai };