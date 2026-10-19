// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Uv } from "B:/~BUN/root/chunk-vfmvkxsr.js";
import { b, c, xn } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { d, G } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Me } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { Gr, L, we } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { W } from "B:/~BUN/root/chunk-hg8ngszx.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { $Mo, E } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { Pe } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { pk, a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { bt, J, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { nt, Nl } from "B:/~BUN/root/chunk-nggrknsv.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { Be } from "B:/~BUN/root/chunk-d9rmnpx3.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { tde } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { xr } from "B:/~BUN/root/chunk-vttg4n7q.js";
import { o, Sf, T, u, $e, fe, U } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { yt } from "B:/~BUN/root/chunk-hz8x9zsh.js";
import { readFileSync as ve } from "fs";
import { readFile as on, stat as sn } from "fs/promises";
import { dirname as an, join as cn } from "path";
var O = I(),
  Oe = O === "windows" || O === "wsl",
  Le = Oe ? "alt+v" : "ctrl+v",
  Fe = O !== "windows" || (pk() ? $Mo("1.4.4", ">=1.2.23") : $Mo(process.versions.node, ">=22.17.0 <23.0.0 || >=24.2.0")),
  le = Fe ? "shift+tab" : "meta+m",
  gj = [{
    context: "Global",
    bindings: {
      "ctrl+c": "app:interrupt",
      "ctrl+d": "app:exit",
      "ctrl+t": "app:toggleTodos",
      "ctrl+o": "app:toggleTranscript",
      "ctrl+shift+b": "app:toggleBrief",
      "ctrl+r": "history:search",
      "ctrl+up": "app:diffFileListUp",
      "ctrl+down": "app:diffFileListDown",
      "meta+up": "app:diffFileListUp",
      "meta+down": "app:diffFileListDown",
      ...{},
      ...{
        "ctrl+]": "app:openArtifact"
      },
      ...{},
      ...{}
    }
  }, {
    context: "DiffPanel",
    bindings: {
      "ctrl+x b": "app:cycleDiffBase"
    }
  }, {
    context: "FeedbackSurvey",
    bindings: {
      "ctrl+x 1": "feedbackSurvey:bad",
      "ctrl+x 2": "feedbackSurvey:fine",
      "ctrl+x 3": "feedbackSurvey:good"
    }
  }, {
    context: "Chat",
    bindings: {
      escape: "chat:cancel",
      "ctrl+l": "chat:clearInput",
      "cmd+k": "chat:clearScreen",
      "ctrl+x ctrl+k": "chat:killAgents",
      ...{
        [le]: "chat:cycleMode"
      },
      ...{},
      "meta+p": "chat:modelPicker",
      ...{},
      "meta+o": "chat:fastMode",
      "ctrl+y": "chat:defaultToNewerModel",
      "meta+t": "chat:thinkingToggle",
      "meta+w": "chat:workflowKeywordToggle",
      enter: "chat:submit",
      "ctrl+x enter": "chat:queueSubmit",
      "ctrl+x ctrl+s": "chat:sendNow",
      "ctrl+enter": "chat:sendNow",
      "ctrl+j": "chat:newline",
      up: "history:previous",
      down: "history:next",
      "ctrl+_": "chat:undo",
      "ctrl+-": "chat:undo",
      "ctrl+shift+-": "chat:undo",
      "ctrl+shift+_": "chat:undo",
      "ctrl+x ctrl+e": "chat:externalEditor",
      "ctrl+x ctrl+a": "abovePrompt:toggle",
      "ctrl+x tab": "abovePrompt:focus",
      "ctrl+g": "chat:externalEditor",
      "ctrl+s": "chat:stash",
      [Le]: "chat:imagePaste",
      ...(O === "wsl" && {
        "ctrl+v": "chat:imagePaste"
      }),
      space: "voice:pushToTalk"
    }
  }, {
    context: "Autocomplete",
    bindings: {
      tab: "autocomplete:accept",
      escape: "autocomplete:dismiss",
      up: "autocomplete:previous",
      down: "autocomplete:next"
    }
  }, {
    context: "Settings",
    bindings: {
      escape: "confirm:no",
      up: "select:previous",
      down: "select:next",
      k: "select:previous",
      j: "select:next",
      "ctrl+p": "select:previous",
      "ctrl+n": "select:next",
      home: "select:first",
      end: "select:last",
      pageup: "select:pageUp",
      pagedown: "select:pageDown",
      space: "select:accept",
      enter: "select:accept",
      "/": "settings:search",
      r: "settings:retry",
      d: "settings:periodDay",
      w: "settings:periodWeek",
      t: "settings:sortByTokens",
      "ctrl+u": "scroll:halfPageUp",
      "ctrl+d": "scroll:halfPageDown"
    }
  }, {
    context: "Confirmation",
    bindings: {
      enter: "confirm:yes",
      escape: "confirm:no",
      up: "confirm:previous",
      down: "confirm:next",
      tab: "confirm:nextField",
      space: "confirm:toggle",
      [le]: "confirm:cycleMode"
    }
  }, {
    context: "Tabs",
    bindings: {
      tab: "tabs:next",
      "shift+tab": "tabs:previous",
      right: "tabs:next",
      left: "tabs:previous"
    }
  }, {
    context: "Transcript",
    bindings: {
      "ctrl+e": "transcript:toggleShowAll",
      "ctrl+c": "transcript:exit",
      escape: "transcript:exit",
      q: "transcript:exit",
      "ctrl+u": "scroll:halfPageUp",
      "ctrl+d": "scroll:halfPageDown",
      "ctrl+b": "scroll:fullPageUp",
      "ctrl+f": "scroll:fullPageDown",
      "ctrl+n": "scroll:lineDown",
      "ctrl+p": "scroll:lineUp",
      g: "scroll:top",
      "shift+g": "scroll:bottom",
      j: "scroll:lineDown",
      k: "scroll:lineUp",
      space: "scroll:fullPageDown",
      b: "scroll:fullPageUp",
      up: "scroll:lineUp",
      down: "scroll:lineDown",
      home: "scroll:top",
      end: "scroll:bottom"
    }
  }, {
    context: "HistorySearch",
    bindings: {
      "ctrl+r": "historySearch:next",
      escape: "historySearch:accept",
      tab: "historySearch:accept",
      "ctrl+c": "historySearch:cancel",
      enter: "historySearch:execute",
      "ctrl+s": "historySearch:cycleScope"
    }
  }, {
    context: "Task",
    bindings: {
      "ctrl+x ctrl+b": "task:background",
      "ctrl+b": "task:background"
    }
  }, {
    context: "ThemePicker",
    bindings: {
      "ctrl+t": "theme:toggleSyntaxHighlighting",
      "ctrl+e": "theme:editCustom"
    }
  }, {
    context: "Scroll",
    bindings: {
      pageup: "scroll:pageUp",
      pagedown: "scroll:pageDown",
      wheelup: "scroll:lineUp",
      wheeldown: "scroll:lineDown",
      "ctrl+home": "scroll:top",
      "ctrl+end": "scroll:bottom",
      "ctrl+shift+c": "selection:copy",
      "cmd+c": "selection:copy",
      "shift+left": "selection:extendLeft",
      "shift+right": "selection:extendRight",
      "shift+up": "selection:extendUp",
      "shift+down": "selection:extendDown",
      "shift+home": "selection:extendLineStart",
      "shift+end": "selection:extendLineEnd"
    }
  }, {
    context: "Help",
    bindings: {
      escape: "help:dismiss"
    }
  }, ...[], {
    context: "Attachments",
    bindings: {
      right: "attachments:next",
      left: "attachments:previous",
      backspace: "attachments:remove",
      delete: "attachments:remove",
      down: "attachments:exit",
      escape: "attachments:exit"
    }
  }, {
    context: "Footer",
    bindings: {
      up: "footer:up",
      "ctrl+p": "footer:up",
      down: "footer:down",
      "ctrl+n": "footer:down",
      right: "footer:next",
      left: "footer:previous",
      enter: "footer:openSelected",
      escape: "footer:clearSelection",
      x: "footer:close",
      ...{}
    }
  }, {
    context: "AbovePrompt",
    bindings: {
      tab: "abovePrompt:next",
      right: "abovePrompt:next",
      "shift+tab": "abovePrompt:previous",
      left: "abovePrompt:previous",
      enter: "abovePrompt:press",
      space: "abovePrompt:press",
      escape: "abovePrompt:leave",
      up: "pane:scrollUp",
      down: "pane:scrollDown",
      pageup: "pane:pageUp",
      pagedown: "pane:pageDown",
      home: "pane:top",
      end: "pane:bottom"
    }
  }, {
    context: "AbovePromptInput",
    bindings: {
      tab: "abovePrompt:next",
      "shift+tab": "abovePrompt:previous",
      enter: "abovePrompt:press",
      escape: "abovePrompt:leave"
    }
  }, {
    context: "AbovePromptSelect",
    bindings: {
      tab: "abovePrompt:next",
      "shift+tab": "abovePrompt:previous",
      down: "abovePrompt:highlightNext",
      up: "abovePrompt:highlightPrevious",
      enter: "abovePrompt:press",
      escape: "abovePrompt:leave"
    }
  }, {
    context: "Pane",
    bindings: {
      tab: "abovePrompt:next",
      "shift+tab": "abovePrompt:previous",
      enter: "abovePrompt:press",
      escape: "abovePrompt:leave",
      up: "pane:scrollUp",
      down: "pane:scrollDown",
      pageup: "pane:pageUp",
      pagedown: "pane:pageDown",
      home: "pane:top",
      end: "pane:bottom",
      "ctrl+x left": "pane:grow",
      "ctrl+x up": "pane:grow",
      "ctrl+x right": "pane:shrink",
      "ctrl+x down": "pane:shrink",
      "ctrl+x x": "pane:close"
    }
  }, {
    context: "PaneField",
    bindings: {
      "ctrl+x x": "pane:close"
    }
  }, {
    context: "DiffDialog",
    bindings: {
      escape: "diff:dismiss",
      left: "diff:previousSource",
      right: "diff:nextSource",
      up: "diff:previousFile",
      down: "diff:nextFile",
      j: "diff:nextFile",
      k: "diff:previousFile",
      pageup: "scroll:pageUp",
      pagedown: "scroll:pageDown",
      space: "scroll:fullPageDown",
      "shift+space": "scroll:fullPageUp",
      b: "scroll:fullPageUp",
      g: "scroll:top",
      "shift+g": "scroll:bottom",
      home: "scroll:top",
      end: "scroll:bottom"
    }
  }, {
    context: "ModelPicker",
    bindings: {
      left: "modelPicker:decreaseEffort",
      right: "modelPicker:increaseEffort",
      s: "modelPicker:thisSessionOnly"
    }
  }, {
    context: "EffortSlider",
    bindings: {
      left: "effortSlider:decreaseEffort",
      right: "effortSlider:increaseEffort",
      tab: "effortSlider:toggleUltracode",
      s: "effortSlider:thisSessionOnly"
    }
  }, {
    context: "Select",
    bindings: {
      up: "select:previous",
      down: "select:next",
      j: "select:next",
      k: "select:previous",
      "ctrl+n": "select:next",
      "ctrl+p": "select:previous",
      pageup: "select:pageUp",
      pagedown: "select:pageDown",
      home: "select:first",
      end: "select:last",
      enter: "select:accept",
      escape: "select:cancel"
    }
  }, {
    context: "Plugin",
    bindings: {
      space: "plugin:toggle",
      i: "plugin:install",
      f: "plugin:favorite",
      ...{
        "ctrl+s": "plugin:cycleMarketplace"
      }
    }
  }, {
    context: "Agents",
    bindings: {
      "ctrl+s": "agents:switchView",
      "ctrl+t": "agents:togglePin",
      "ctrl+f": "agents:find",
      "ctrl+r": "agents:rename",
      "ctrl+up": "agents:previousGroup",
      "meta+up": "agents:previousGroup",
      "ctrl+down": "agents:nextGroup",
      "meta+down": "agents:nextGroup",
      ...{}
    }
  }];
function yee(e) {
  let r = e.split("+"),
    n = {
      key: "",
      ctrl: !1,
      alt: !1,
      shift: !1,
      meta: !1,
      super: !1
    };
  for (let s of r) {
    let l = s.toLowerCase();
    switch (l) {
      case "ctrl":
      case "control":
        n.ctrl = !0;
        break;
      case "alt":
      case "opt":
      case "option":
        n.alt = !0;
        break;
      case "shift":
        n.shift = !0;
        break;
      case "meta":
        n.meta = !0;
        break;
      case "cmd":
      case "command":
      case "super":
      case "win":
        n.super = !0;
        break;
      case "esc":
        n.key = "escape";
        break;
      case "return":
        n.key = "enter";
        break;
      case "del":
        n.key = "delete";
        break;
      case "space":
        n.key = " ";
        break;
      case "\u2191":
        n.key = "up";
        break;
      case "\u2193":
        n.key = "down";
        break;
      case "\u2190":
        n.key = "left";
        break;
      case "\u2192":
        n.key = "right";
        break;
      default:
        n.key = l;
        break;
    }
  }
  return n;
}
function Z9(e) {
  if (e === " ") return [yee("space")];
  return e.trim().split(/\s+/).map(yee);
}
function je(e) {
  let r = [];
  if (e.ctrl) r.push("ctrl");
  if (e.alt) r.push("alt");
  if (e.shift) r.push("shift");
  if (e.meta) r.push("meta");
  if (e.super) r.push("cmd");
  let n = de(e.key);
  return r.push(n), r.join("+");
}
function de(e) {
  switch (e) {
    case "escape":
      return "Esc";
    case " ":
      return "space";
    case "tab":
      return "tab";
    case "enter":
      return "Enter";
    case "backspace":
      return "Backspace";
    case "delete":
      return "Delete";
    case "up":
      return "\u2191";
    case "down":
      return "\u2193";
    case "left":
      return "\u2190";
    case "right":
      return "\u2192";
    case "pageup":
      return "PageUp";
    case "pagedown":
      return "PageDown";
    case "home":
      return "Home";
    case "end":
      return "End";
    default:
      return e;
  }
}
function hj(e) {
  return e.map(je).join(" ");
}
function OCr(e, r = "linux") {
  let n = [];
  if (e.ctrl) n.push("ctrl");
  if (e.alt || e.meta) n.push(r === "macos" ? "opt" : "alt");
  if (e.shift) n.push("shift");
  if (e.super) n.push(r === "macos" ? "cmd" : "super");
  let s = de(e.key);
  return n.push(s), n.join("+");
}
function Rfe(e, r = "linux") {
  return e.map(item => OCr(item, r)).join(" ");
}
function Afe(e) {
  let r = [];
  for (let n of e) for (let [s, action] of Object.entries(n.bindings)) r.push({
    chord: Z9(s),
    action: action,
    context: n.context
  });
  return r;
}
var Z = ["messageSelector:up", "messageSelector:down", "messageSelector:top", "messageSelector:bottom", "messageSelector:select", "diff:viewDetails"],
  Re = {
    "messageSelector:up": "select:previous",
    "messageSelector:down": "select:next",
    "messageSelector:top": "select:first",
    "messageSelector:bottom": "select:last",
    "messageSelector:select": "select:accept",
    "diff:viewDetails": "select:accept"
  };
function Q(e) {
  return Z.some(item => item === e);
}
function ge(e) {
  return e.map(item => ({
    context: item.context,
    bindings: Gr(item.bindings, n => n !== null && Q(n) ? Re[n] : n)
  }));
}
var Vtn = ["Global", "Chat", "Autocomplete", "Confirmation", "Help", "ProactivityMenu", "Transcript", "HistorySearch", "Task", "ThemePicker", "Settings", "Tabs", "Attachments", "Footer", "AbovePrompt", "AbovePromptInput", "AbovePromptSelect", "Pane", "PaneField", "MessageSelector", "DiffDialog", "DiffPanel", "FeedbackSurvey", "ModelPicker", "EffortSlider", "Select", "Plugin", "Scroll", "Agents"],
  Ue = new Set(Vtn);
function jxs(e) {
  return Ue.has(e);
}
var Wxs = {
    Global: "Active everywhere, regardless of focus",
    Chat: "When the chat input is focused",
    Autocomplete: "When autocomplete menu is visible",
    Confirmation: "When a confirmation/permission dialog is shown",
    Help: "When the help overlay is open",
    ProactivityMenu: "When the proactivity dialog is open",
    Transcript: "When viewing the transcript",
    HistorySearch: "When searching command history (ctrl+r)",
    Task: "When a task/agent is running in the foreground",
    ThemePicker: "When the theme picker is open",
    Settings: "When the settings menu is open",
    Tabs: "When tab navigation is active",
    Attachments: "When navigating image attachments in a select dialog",
    Footer: "When footer indicators are focused",
    AbovePrompt: "When a plugin's panel above the prompt, or a button in it, has keyboard focus",
    AbovePromptInput: "When a plugin's input field above the prompt has keyboard focus",
    AbovePromptSelect: "When a plugin's select above the prompt has keyboard focus",
    Pane: "When a plugin's pane has keyboard focus",
    PaneField: "When an input field or select in a plugin's pane has keyboard focus",
    MessageSelector: "When the message selector (rewind) is open",
    DiffDialog: "When the diff dialog is open",
    DiffPanel: "When the diff sidebar panel is open",
    FeedbackSurvey: "When the session feedback survey has been typed over",
    ModelPicker: "When the model picker is open",
    EffortSlider: "When the effort slider is open",
    Select: "When a select/list component is focused",
    Plugin: "When the plugin dialog is open",
    Scroll: "When a scrollable view is focused (fullscreen layout)",
    Agents: "When the agents view (`claude agents`) is open"
  },
  dBe = ["app:interrupt", "app:exit", "app:toggleTodos", "app:toggleTranscript", "app:toggleBrief", "app:toggleReplTab", "app:toggleDiffNoiseFilter", "app:diffFileListUp", "app:diffFileListDown", "app:toggleDiffPreSession", "app:cycleDiffBase", "app:toggleTerminal", "app:redraw", "app:openArtifact", "strip:jump1", "strip:jump2", "strip:jump3", "strip:jump4", "strip:jump5", "strip:jump6", "strip:jump7", "strip:jump8", "strip:jump9", "strip:next", "strip:previous", "strip:tabNext", "strip:tabPrevious", "strip:viewAll", "strip:toggle", "strip:new", "history:search", "history:previous", "history:next", "chat:cancel", "chat:killAgents", "chat:cycleMode", "chat:cycleProactivity", "chat:attentionUp", "chat:attentionDown", "chat:modelPicker", "chat:increaseEffort", "chat:decreaseEffort", "chat:fastMode", "chat:defaultToNewerModel", "chat:thinkingToggle", "chat:workflowKeywordToggle", "chat:submit", "chat:queueSubmit", "chat:sendNow", "chat:newline", "chat:undo", "chat:externalEditor", "chat:stash", "chat:imagePaste", "chat:clearInput", "chat:clearScreen", "autocomplete:accept", "autocomplete:dismiss", "autocomplete:previous", "autocomplete:next", "confirm:yes", "confirm:no", "confirm:previous", "confirm:next", "confirm:nextField", "confirm:previousField", "confirm:cycleMode", "confirm:toggle", "tabs:next", "tabs:previous", "transcript:toggleShowAll", "transcript:exit", "historySearch:next", "historySearch:accept", "historySearch:cancel", "historySearch:execute", "historySearch:cycleScope", "task:background", "theme:toggleSyntaxHighlighting", "theme:editCustom", "help:dismiss", "proactivityMenu:previousMode", "proactivityMenu:nextMode", "attachments:next", "attachments:previous", "attachments:remove", "attachments:exit", "footer:up", "footer:down", "footer:next", "footer:previous", "footer:openSelected", "footer:clearSelection", "footer:close", "footer:dismiss", "abovePrompt:toggle", "abovePrompt:focus", "abovePrompt:next", "abovePrompt:previous", "abovePrompt:press", "abovePrompt:leave", "abovePrompt:highlightNext", "abovePrompt:highlightPrevious", "pane:scrollUp", "pane:scrollDown", "pane:pageUp", "pane:pageDown", "pane:top", "pane:bottom", "pane:grow", "pane:shrink", "pane:close", "pane:next", "pane:previous", "diff:dismiss", "diff:previousSource", "diff:nextSource", "diff:back", "diff:previousFile", "diff:nextFile", "feedbackSurvey:bad", "feedbackSurvey:fine", "feedbackSurvey:good", "modelPicker:decreaseEffort", "modelPicker:increaseEffort", "modelPicker:thisSessionOnly", "effortSlider:decreaseEffort", "effortSlider:increaseEffort", "effortSlider:toggleUltracode", "effortSlider:thisSessionOnly", "select:next", "select:previous", "select:pageUp", "select:pageDown", "select:first", "select:last", "select:accept", "select:cancel", "plugin:toggle", "plugin:install", "plugin:favorite", "plugin:cycleMarketplace", "permission:toggleDebug", "settings:search", "settings:retry", "settings:periodDay", "settings:periodWeek", "settings:sortByTokens", "voice:pushToTalk", "scroll:pageUp", "scroll:pageDown", "scroll:lineUp", "scroll:lineDown", "scroll:top", "scroll:bottom", "scroll:halfPageUp", "scroll:halfPageDown", "scroll:fullPageUp", "scroll:fullPageDown", "selection:copy", "selection:clear", "selection:extendLeft", "selection:extendRight", "selection:extendUp", "selection:extendDown", "selection:extendLineStart", "selection:extendLineEnd", "agents:switchView", "agents:togglePin", "agents:find", "agents:nextGroup", "agents:previousGroup", "agents:rename", "agents:setGroup"];
var xjn = ["FeedbackSurvey"],
  pe = new Set(dBe);
function zxs(e) {
  return pe.has(e);
}
function F(e) {
  return pe.has(e) || e.startsWith("command:");
}
var ze = f(() => u({
    context: U(Vtn).describe("UI context where these bindings apply. Global bindings work everywhere."),
    bindings: fe(o().describe('Keystroke pattern (e.g., "ctrl+k", "shift+tab")'), $e([U([...dBe, ...Z]), o().regex(/^command:[a-zA-Z0-9:\-_]+$/).describe('Command binding (e.g., "command:help", "command:compact"). Executes the slash command as if typed.'), Sf().describe("Set to null to unbind a default shortcut")]).describe("Action to trigger, command to invoke, or null to unbind")).describe("Map of keystroke patterns to actions")
  }).describe("A block of keybindings for a specific context")),
  Tn = f(() => u({
    $schema: o().optional().describe("JSON Schema URL for editor validation"),
    $docs: o().optional().describe("Documentation URL"),
    bindings: T(ze()).describe("Array of keybinding blocks by context")
  }).describe("Claude Code keybindings configuration. Customize keyboard shortcuts by context."));
var lBe = [{
    key: "ctrl+c",
    reason: "Cannot be rebound - used for interrupt/exit (hardcoded)",
    severity: "error"
  }, {
    key: "ctrl+d",
    reason: "Cannot be rebound - used for exit (hardcoded)",
    severity: "error"
  }, {
    key: "ctrl+m",
    reason: "Cannot be rebound - identical to Enter in terminals (both send CR)",
    severity: "error"
  }, {
    key: "ctrl+[",
    reason: "Cannot be rebound - identical to Escape in terminals",
    severity: "error"
  }, {
    key: "ctrl+i",
    reason: "Cannot be rebound - identical to Tab in terminals",
    severity: "error"
  }, {
    key: "ctrl+h",
    reason: "Cannot be rebound - identical to Backspace in terminals",
    severity: "error"
  }, {
    key: "capslock",
    reason: "Caps Lock is not delivered to terminal applications",
    severity: "error"
  }],
  Dwo = [{
    key: "ctrl+z",
    reason: "Unix process suspend (SIGTSTP)",
    severity: "warning"
  }, {
    key: "ctrl+\\",
    reason: "Terminal quit signal (SIGQUIT)",
    severity: "error"
  }],
  Lwo = [{
    key: "cmd+c",
    reason: "macOS system copy",
    severity: "error"
  }, {
    key: "cmd+v",
    reason: "macOS system paste",
    severity: "error"
  }, {
    key: "cmd+x",
    reason: "macOS system cut",
    severity: "error"
  }, {
    key: "cmd+q",
    reason: "macOS quit application",
    severity: "error"
  }, {
    key: "cmd+w",
    reason: "macOS close window/tab",
    severity: "error"
  }, {
    key: "cmd+tab",
    reason: "macOS app switcher",
    severity: "error"
  }, {
    key: "cmd+space",
    reason: "macOS Spotlight",
    severity: "error"
  }];
function ue() {
  let e = I(),
    r = [...lBe, ...Dwo];
  if (e === "macos") r.push(...Lwo);
  return r;
}
function J5e(e) {
  if (e === " ") return "space";
  return e.trim().split(/\s+/).map(Ye).join(" ");
}
var Ge = {
  esc: "escape",
  return: "enter",
  del: "delete",
  "\u2191": "up",
  "\u2193": "down",
  "\u2190": "left",
  "\u2192": "right",
  caps: "capslock",
  "caps-lock": "capslock",
  caps_lock: "capslock"
};
function Ye(e) {
  let r = e.split("+"),
    n = [],
    s = "";
  for (let l of r) {
    let y = l.trim().toLowerCase();
    if (["ctrl", "control", "alt", "opt", "option", "meta", "cmd", "command", "super", "win", "shift"].includes(y)) {
      if (y === "control") n.push("ctrl");else if (y === "option" || y === "opt" || y === "meta") n.push("alt");else if (y === "command" || y === "cmd" || y === "super" || y === "win") n.push("cmd");else n.push(y);
    } else s = Ge[y] ?? y;
  }
  return n.sort(), [...n, s].join("+");
}
var ee;
function Bxs(e) {
  if (!ee) {
    let r = new Set(lBe.map(item => J5e(item.key))),
      n = new Set();
    for (let s of gj) for (let [l, y] of Object.entries(s.bindings)) if (y !== null && r.has(J5e(l))) n.add(y);
    ee = n;
  }
  return ee.has(e);
}
var He = f(() => u({
  context: o(),
  bindings: fe(o(), o().nullable())
}));
function Ve(e) {
  return He().safeParse(e).success;
}
function C(e) {
  return Array.isArray(e) && e.every(Ve);
}
var he = Vtn,
  me = [{
    name: "ctrl",
    aliases: ["control"]
  }, {
    name: "alt",
    aliases: ["opt", "option"]
  }, {
    name: "shift"
  }, {
    name: "meta"
  }, {
    name: "cmd",
    aliases: ["command", "super", "win"]
  }],
  ye = ["ctrl", "alt", "shift", "meta", "super"],
  be = 3,
  N = 80;
function Xe(e) {
  return he.includes(e);
}
function qe(key, r) {
  let n = key.trim(),
    s = key === " " ? [] : n.split(/\s+/),
    l = key !== " " && key.split("+").some(item => !item.trim()),
    y = /\s\+|\+\s/.test(n) && s.some(item => yee(item).key === "");
  if (l || y) {
    let P = Nl(key, N);
    return {
      type: "parse_error",
      severity: "error",
      message: l ? `Empty key part in "${P}"` : `A space next to "+" splits "${P}" into separate presses, and one of them has no key`,
      key: key,
      suggestion: l ? 'Remove extra "+" characters' : 'Remove the spaces next to "+"'
    };
  }
  let h = [],
    w = [],
    k = !0;
  for (let P of s) {
    let se = P.split("+"),
      Ie = se.findLastIndex(X => yee(X).key !== ""),
      ae = yee(P),
      V = [];
    for (let [X, M] of se.entries()) {
      if (X === Ie || yee(M).key === "") {
        V.push(M);
        continue;
      }
      h.push(M);
      let q = tde(M.toLowerCase(), me);
      if (q === void 0) {
        k = !1;
        continue;
      }
      let ce = yee(q);
      if (ye.some(item => ae[item] && ce[item])) continue;
      V.push(q);
      for (let B of ye) ae[B] ||= ce[B];
    }
    w.push(V.join("+"));
  }
  if (h.length === 0) return null;
  let v = L(h),
    x = v.length > be + 1 ? be : v.length,
    S = v.slice(0, x).map(item => `"${Nl(item, N)}"`);
  if (v.length > x) S.push(`${v.length - x} more`);
  let _ = new Intl.ListFormat("en", {
      type: "conjunction"
    }).format(S),
    D = new Intl.ListFormat("en", {
      type: "disjunction"
    }).format(me.map(item => item.name)),
    Ce = v.length === 1 ? "is not a modifier" : "are not modifiers",
    Te = r ? ` in ${r}` : "",
    Ne = Nl(key, N),
    De = Nl(hj(Z9(key)), N),
    oe = w.join(" ");
  return {
    type: "parse_error",
    severity: "error",
    message: `${_} ${Ce}, so "${Ne}"${Te} applies to "${De}" instead`,
    key: key,
    suggestion: k && oe.length <= N ? `Did you mean "${oe}"?` : `Use ${D} before "+"; for keys pressed one after another, put a space between them, as in "ctrl+x ctrl+s"`
  };
}
function Je(e, r) {
  let n = [];
  if (typeof e !== "object" || e === null) return n.push({
    type: "parse_error",
    severity: "error",
    message: `Keybinding block ${r + 1} is not an object`
  }), n;
  let s = e,
    context = s.context,
    context_2;
  if (typeof context !== "string") n.push({
    type: "parse_error",
    severity: "error",
    message: `Keybinding block ${r + 1} missing "context" field`
  });else if (!Xe(context)) n.push({
    type: "invalid_context",
    severity: "error",
    message: `Unknown context "${context}"`,
    context: context,
    suggestion: `Valid contexts: ${he.join(", ")}`
  });else context_2 = context;
  if (typeof s.bindings !== "object" || s.bindings === null) return n.push({
    type: "parse_error",
    severity: "error",
    message: `Keybinding block ${r + 1} missing "bindings" field`
  }), n;
  let bindings = s.bindings;
  for (let [key_2, action_2] of Object.entries(bindings)) {
    let v = qe(key_2, context_2);
    if (v) v.context = context_2, n.push(v);
    if (action_2 !== null && typeof action_2 !== "string") n.push({
      type: "invalid_action",
      severity: "error",
      message: `Invalid action for "${key_2}": must be a string or null`,
      key: key_2,
      context: context_2
    });else if (typeof action_2 === "string" && action_2.startsWith("command:")) {
      if (!/^command:[a-zA-Z0-9:\-_]+$/.test(action_2)) n.push({
        type: "invalid_action",
        severity: "warning",
        message: `Invalid command binding "${action_2}" for "${key_2}": command name may only contain alphanumeric characters, colons, hyphens, and underscores`,
        key: key_2,
        context: context_2,
        action: action_2
      });
      if (context_2 && context_2 !== "Chat") n.push({
        type: "invalid_action",
        severity: "warning",
        message: `Command binding "${action_2}" must be in "Chat" context, not "${context_2}"`,
        key: key_2,
        context: context_2,
        action: action_2,
        suggestion: 'Move this binding to a block with "context": "Chat"'
      });
    } else if (typeof action_2 === "string" && !F(action_2) && !Q(action_2)) n.push({
      type: "invalid_action",
      severity: "error",
      message: `Unknown action "${action_2}" for "${key_2}"${context_2 ? ` in ${context_2}` : ""} \u2014 this binding is ignored`,
      key: key_2,
      context: context_2,
      action: action_2,
      suggestion: Ze(action_2)
    });else if (action_2 === "voice:pushToTalk") {
      let x = Z9(key_2)[0];
      if (x && !x.ctrl && !x.alt && !x.shift && !x.meta && !x.super && /^[a-z]$/.test(x.key)) n.push({
        type: "invalid_action",
        severity: "warning",
        message: `Binding "${key_2}" to voice:pushToTalk prints into the input during warmup; use space or a modifier combo like meta+k`,
        key: key_2,
        context: context_2,
        action: action_2
      });
    }
  }
  return n;
}
function Ze(e) {
  let r,
    n = 1 / 0;
  for (let h of dBe) {
    let w = Qe(e.toLowerCase(), h.toLowerCase());
    if (w < n) n = w, r = h;
  }
  if (r && n <= 2) return `Did you mean "${r}"?`;
  let s = nt(e, ":"),
    l = dBe.filter(item => item.startsWith(`${s}:`));
  if (l.length > 0) return `Valid "${s}:" actions: ${l.join(", ")}`;
  return `Valid action namespaces: ${L(dBe.map(item => nt(item, ":"))).map(item => `${item}:`).join(", ")}`;
}
function Qe(e, r) {
  let n = Array.from({
    length: r.length + 1
  }, (s, l) => l);
  for (let s = 1; s <= e.length; s++) {
    let l = [s];
    for (let y = 1; y <= r.length; y++) {
      let h = e[s - 1] === r[y - 1] ? 0 : 1;
      l[y] = Math.min((n[y] ?? 0) + 1, (l[y - 1] ?? 0) + 1, (n[y - 1] ?? 0) + h);
    }
    n = l;
  }
  return n[r.length] ?? 0;
}
function j(e) {
  let r = [],
    n = /"bindings"\s*:\s*\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}/g,
    s;
  while ((s = n.exec(e)) !== null) {
    let l = s[1];
    if (!l) continue;
    let context_3 = e.slice(0, s.index).match(/"context"\s*:\s*"([^"]+)"[^{]*$/)?.[1] ?? "unknown",
      k = /"([^"]+)"\s*:/g,
      v = new Map(),
      x;
    while ((x = k.exec(l)) !== null) {
      let key_3 = x[1];
      if (!key_3) continue;
      let _ = (v.get(key_3) ?? 0) + 1;
      if (v.set(key_3, _), _ === 2) r.push({
        type: "duplicate",
        severity: "warning",
        message: `Duplicate key "${key_3}" in ${context_3} bindings`,
        key: key_3,
        context: context_3,
        suggestion: "This key appears multiple times in the same context. JSON uses the last value, earlier values are ignored."
      });
    }
  }
  return r;
}
function en(e) {
  let r = [];
  if (!Array.isArray(e)) return r.push({
    type: "parse_error",
    severity: "error",
    message: "keybindings.json must contain an array",
    suggestion: "Wrap your bindings in [ ]"
  }), r;
  for (let n = 0; n < e.length; n++) r.push(...Je(e[n], n));
  return r;
}
function nn(e) {
  let r = [],
    n = new Map();
  for (let s of e) {
    let l = n.get(s.context) ?? new Map();
    n.set(s.context, l);
    for (let [key_4, h] of Object.entries(s.bindings)) {
      let w = J5e(key_4),
        k = l.get(w);
      if (k && k !== h) r.push({
        type: "duplicate",
        severity: "warning",
        message: `Duplicate binding "${key_4}" in ${s.context} context`,
        key: key_4,
        context: s.context,
        action: h ?? "null (unbind)",
        suggestion: `Previously bound to "${k}". Only the last binding will be used.`
      });
      l.set(w, h ?? "null");
    }
  }
  return r;
}
function tn(e) {
  let r = [],
    n = ue();
  for (let s of e) {
    let key_5 = hj(s.chord),
      y = J5e(key_5);
    for (let h of n) if (J5e(h.key) === y) r.push({
      type: "reserved",
      severity: h.severity,
      message: `"${key_5}" may not work: ${h.reason}`,
      key: key_5,
      context: s.context,
      action: s.action ?? void 0
    });
  }
  return r;
}
function rn(e) {
  let r = [];
  for (let n of e) for (let [s, action_3] of Object.entries(n.bindings)) {
    let chord = s.split(" ").map(item => yee(item));
    r.push({
      chord: chord,
      action: action_3,
      context: n.context
    });
  }
  return r;
}
function R(e, r) {
  let n = [];
  if (n.push(...en(e)), C(e)) {
    n.push(...nn(e));
    let l = rn(e);
    n.push(...tn(l));
  }
  let s = new Set();
  return n.filter(item => {
    let y = `${item.type}:${item.key}:${item.context}`;
    if (s.has(y)) return !1;
    return s.add(y), !0;
  });
}
function eX() {
  return E("tengu_keybinding_customization_release", !0);
}
var stabilityThreshold = 500,
  pollInterval = 200;
function gn() {
  let e = {
    bindings: null,
    warmedFromBackend: !1,
    warmAttempted: !1,
    warnings: [],
    watcher: null,
    initialized: !1,
    disposed: !1,
    lastCustomBindingsLogDate: null,
    loggedShortcutFallbacks: new Set(),
    actionFiredLoggedAt: new Map(),
    changed: Me(),
    [Symbol.dispose]() {
      if (e.disposed = !0, e.watcher) e.watcher.close(), e.watcher = null;
      e.changed.clear();
    }
  };
  return e;
}
var xC = gn();
function ne(e, user_binding_count) {
  let n = new Date().toISOString().slice(0, 10);
  if (e.lastCustomBindingsLogDate === n) return;
  e.lastCustomBindingsLogDate = n, i("tengu_custom_keybindings_loaded", {
    user_binding_count: user_binding_count
  });
}
function qtn() {
  return cn(Pe(), "keybindings.json");
}
var Nwo = Be.state("keybindings");
function z() {
  return Afe(gj);
}
function Y(e) {
  return Afe(ge(e)).filter(item => item.action === null || F(item.action));
}
function te(e) {
  for (let r of e) t(`[keybindings] [${r.severity}] ${r.message}${r.suggestion ? ` \u2014 ${r.suggestion}` : ""}`, {
    level: "warn"
  });
}
function K(e, r) {
  if (e?.suppressFeatureEvents) return;
  if (r === "ok") g("keybinding_load_user_config");else m("keybinding_load_user_config", r);
}
function ie() {
  return !eX() || xr("keybindings");
}
function Gxs(e) {
  let r = z();
  if (ie()) return r;
  if (W() && e !== void 0) return r;
  try {
    let n = ve(qtn(), "utf-8"),
      s = J(n),
      l = typeof s === "object" && s !== null && "bindings" in s ? s.bindings : void 0;
    return C(l) ? [...r, ...Y(l)] : r;
  } catch {
    return r;
  }
}
async function xe(e, r, n) {
  let bindings_2 = z();
  if (!eX() || xr("keybindings")) return {
    bindings: bindings_2,
    warnings: []
  };
  let l = qtn();
  if (r) {
    let y = await r.read([Nwo]);
    if (!y.ok) {
      let w = y.error,
        k = yt(w);
      if (t(`[keybindings] Error loading ${l}: ${k}`), n?.suppressFeatureEvents) p("keybinding_load_user_config", "warm_backend_read_failed_fell_back");
      return K(n, "keybinding_config_parse_error"), {
        bindings: bindings_2,
        warnings: [{
          type: "parse_error",
          severity: "error",
          message: `Failed to parse keybindings.json: ${k}`
        }]
      };
    }
    let h = y.value.items[0];
    if (!h.found) return K(n, "ok"), {
      bindings: bindings_2,
      warnings: []
    };
    return pn(Buffer.from(h.value).toString("utf-8"), e, bindings_2, l, n);
  }
  try {
    let y = await on(l, "utf-8"),
      h = J(y),
      w;
    if (typeof h === "object" && h !== null && "bindings" in h) w = h.bindings;else return t('[keybindings] Invalid keybindings.json: keybindings.json must have a "bindings" array'), K(n, "keybinding_config_invalid_format"), {
      bindings: bindings_2,
      warnings: [{
        type: "parse_error",
        severity: "error",
        message: 'keybindings.json must have a "bindings" array',
        suggestion: 'Use format: { "bindings": [ ... ] }'
      }]
    };
    if (!C(w)) {
      let message = !Array.isArray(w) ? '"bindings" must be an array' : "keybindings.json contains invalid block structure",
        suggestion = !Array.isArray(w) ? 'Set "bindings" to an array of keybinding blocks' : 'Each block must have "context" (string) and "bindings" (object mapping keys to a string action or null)';
      return t(`[keybindings] Invalid keybindings.json: ${message}`), K(n, "keybinding_config_invalid_structure"), {
        bindings: bindings_2,
        warnings: [{
          type: "parse_error",
          severity: "error",
          message: message,
          suggestion: suggestion
        }]
      };
    }
    let k = Y(w);
    t(`[keybindings] Loaded ${k.length} user bindings from ${l}`);
    let bindings_3 = [...bindings_2, ...k];
    ne(e, k.length);
    let warnings = [...j(y), ...R(w, bindings_3)];
    if (warnings.length > 0) t(`[keybindings] Found ${warnings.length} validation issue(s)`), te(warnings);
    return K(n, "ok"), {
      bindings: bindings_3,
      warnings: warnings
    };
  } catch (error) {
    if (G(error)) return K(n, "ok"), {
      bindings: bindings_2,
      warnings: []
    };
    return t(`[keybindings] Error loading ${l}: ${d(error)}`), K(n, "keybinding_config_parse_error"), {
      bindings: bindings_2,
      warnings: [{
        type: "parse_error",
        severity: "error",
        message: `Failed to parse keybindings.json: ${d(error)}`
      }]
    };
  }
}
function pn(e, r, bindings_4, s, l) {
  try {
    let y = J(e),
      h;
    if (typeof y === "object" && y !== null && "bindings" in y) h = y.bindings;else return t('[keybindings] Invalid keybindings.json: keybindings.json must have a "bindings" array'), K(l, "keybinding_config_invalid_format"), {
      bindings: bindings_4,
      warnings: [{
        type: "parse_error",
        severity: "error",
        message: 'keybindings.json must have a "bindings" array',
        suggestion: 'Use format: { "bindings": [ ... ] }'
      }]
    };
    if (!C(h)) {
      let message_2 = !Array.isArray(h) ? '"bindings" must be an array' : "keybindings.json contains invalid block structure",
        suggestion_2 = !Array.isArray(h) ? 'Set "bindings" to an array of keybinding blocks' : 'Each block must have "context" (string) and "bindings" (object mapping keys to a string action or null)';
      return t(`[keybindings] Invalid keybindings.json: ${message_2}`), K(l, "keybinding_config_invalid_structure"), {
        bindings: bindings_4,
        warnings: [{
          type: "parse_error",
          severity: "error",
          message: message_2,
          suggestion: suggestion_2
        }]
      };
    }
    let w = Y(h);
    t(`[keybindings] Loaded ${w.length} user bindings from ${s}`);
    let bindings_5 = [...bindings_4, ...w];
    ne(r, w.length);
    let warnings_2 = [...j(e), ...R(h, bindings_5)];
    if (warnings_2.length > 0) t(`[keybindings] Found ${warnings_2.length} validation issue(s)`), te(warnings_2);
    return K(l, "ok"), {
      bindings: bindings_5,
      warnings: warnings_2
    };
  } catch (error) {
    return t(`[keybindings] Error loading ${s}: ${d(error)}`), K(l, "keybinding_config_parse_error"), {
      bindings: bindings_4,
      warnings: [{
        type: "parse_error",
        severity: "error",
        message: `Failed to parse keybindings.json: ${d(error)}`
      }]
    };
  }
}
async function Vxs(e, r) {
  if (e.bindings) return e.bindings;
  if (e.warmAttempted) return;
  if (we()) return;
  if (ie()) return;
  let n = await xe(e, r, {
    suppressFeatureEvents: !0
  });
  if (e.warmAttempted = !0, n.warnings.length > 0) return n.bindings;
  if (!e.bindings) e.bindings = n.bindings, e.warnings = [], e.warmedFromBackend = !0, g("keybinding_load_user_config");
  return e.bindings;
}
function Se(e) {
  if (!e.warmedFromBackend) return !1;
  if (ie()) return e.bindings = null, e.warnings = [], e.warmedFromBackend = !1, !0;
  return e.warmedFromBackend = !1, !1;
}
function Pjn(e) {
  if (e.bindings && !Se(e)) return e.bindings;
  return j0t(e).bindings;
}
function j0t(e) {
  if (e.bindings && !Se(e)) return {
    bindings: e.bindings,
    warnings: e.warnings
  };
  e.warmedFromBackend = !1;
  let r = z();
  if (!eX() || xr("keybindings")) return e.bindings = r, e.warnings = [], {
    bindings: e.bindings,
    warnings: e.warnings
  };
  let n = qtn();
  try {
    let s = ve(n, "utf-8"),
      l = J(s),
      y;
    if (typeof l === "object" && l !== null && "bindings" in l) y = l.bindings;else return m("keybinding_load_user_config", "keybinding_config_invalid_format"), e.bindings = r, e.warnings = [{
      type: "parse_error",
      severity: "error",
      message: 'keybindings.json must have a "bindings" array',
      suggestion: 'Use format: { "bindings": [ ... ] }'
    }], {
      bindings: e.bindings,
      warnings: e.warnings
    };
    if (!C(y)) {
      let message_3 = !Array.isArray(y) ? '"bindings" must be an array' : "keybindings.json contains invalid block structure",
        suggestion_3 = !Array.isArray(y) ? 'Set "bindings" to an array of keybinding blocks' : 'Each block must have "context" (string) and "bindings" (object mapping keys to a string action or null)';
      return m("keybinding_load_user_config", "keybinding_config_invalid_structure"), e.bindings = r, e.warnings = [{
        type: "parse_error",
        severity: "error",
        message: message_3,
        suggestion: suggestion_3
      }], {
        bindings: e.bindings,
        warnings: e.warnings
      };
    }
    let h = Y(y);
    t(`[keybindings] Loaded ${h.length} user bindings from ${n}`), e.bindings = [...r, ...h], ne(e, h.length);
    let w = j(s);
    if (e.warnings = [...w, ...R(y, e.bindings)], e.warnings.length > 0) t(`[keybindings] Found ${e.warnings.length} validation issue(s)`), te(e.warnings);
    return g("keybinding_load_user_config"), {
      bindings: e.bindings,
      warnings: e.warnings
    };
  } catch (error) {
    if (G(error)) return g("keybinding_load_user_config"), e.bindings = r, e.warnings = [], {
      bindings: e.bindings,
      warnings: e.warnings
    };
    return t(`[keybindings] Error loading ${n}: ${d(error)}`), m("keybinding_load_user_config", "keybinding_config_parse_error"), e.bindings = r, e.warnings = [{
      type: "parse_error",
      severity: "error",
      message: `Failed to parse keybindings.json: ${d(error)}`
    }], {
      bindings: e.bindings,
      warnings: e.warnings
    };
  }
}
async function qxs(e) {
  if (e.initialized || e.disposed) return;
  if (!eX() || xr("keybindings")) {
    t("[keybindings] Skipping file watcher - user customization disabled");
    return;
  }
  let r = qtn(),
    n = an(r);
  try {
    if (!(await sn(n)).isDirectory()) {
      t(`[keybindings] Not watching: ${n} is not a directory`), p("keybinding_watcher_init", "watch_dir_inaccessible");
      return;
    }
  } catch {
    t(`[keybindings] Not watching: ${n} does not exist`), p("keybinding_watcher_init", "watch_dir_inaccessible");
    return;
  }
  e.initialized = !0, t(`[keybindings] Watching for changes to ${r}`), e.watcher = Uv.watch(r, {
    persistent: !0,
    ignoreInitial: !0,
    awaitWriteFinish: {
      stabilityThreshold: stabilityThreshold,
      pollInterval: pollInterval
    },
    ignorePermissionErrors: !0,
    usePolling: !0,
    interval: 2000,
    atomic: !0
  }), e.watcher.on("add", s => ke(e, s)), e.watcher.on("change", s => ke(e, s)), e.watcher.on("unlink", s => un(e, s)), e.watcher.on("error", s => t(`[keybindings] watcher error: ${d(s)}`, {
    level: "warn"
  })), bt(e), g("keybinding_watcher_init");
}
async function ke(e, r) {
  t(`[keybindings] Detected change to ${r}`);
  try {
    let n = await xe(e);
    e.bindings = n.bindings, e.warnings = n.warnings, e.warmedFromBackend = !1, e.changed.emit(n), g("keybinding_hot_reload");
  } catch (error) {
    t(`[keybindings] Error reloading: ${d(error)}`), p("keybinding_hot_reload", "keybinding_reload_failed");
  }
}
function un(e, r) {
  t(`[keybindings] Detected deletion of ${r}`);
  let bindings_6 = z();
  e.bindings = bindings_6, e.warnings = [], e.warmedFromBackend = !1, e.changed.emit({
    bindings: bindings_6,
    warnings: []
  });
}
var re = {
  "\u2020": "t"
};
function _e(e) {
  return Object.hasOwn(re, e);
}
var ICr = {
  π: "alt+p",
  ø: "alt+o"
};
function Fwo(e) {
  return Object.hasOwn(ICr, e);
}
function PU() {
  let e = I();
  if (e === "macos") return e;
  if (a.LC_TERMINAL === "iTerm2" || a.TERM_PROGRAM === "Apple_Terminal" || a.TERM_PROGRAM === "iTerm.app") return "macos";
  return e;
}
var fn = {
  escape: "escape",
  return: "enter",
  tab: "tab",
  backspace: "backspace",
  delete: "delete",
  up: "up",
  down: "down",
  left: "left",
  right: "right",
  pageup: "pageup",
  pagedown: "pagedown",
  wheelup: "wheelup",
  wheeldown: "wheeldown",
  home: "home",
  end: "end"
};
function Ktn(e, r, n) {
  let s = !1,
    l;
  for (let y = 0; y < n.length; y++) {
    let h = n[y];
    if (!h || h.context !== r || h.action !== e) continue;
    if (s = !0, !Ke(n, y)) l = h.chord;
  }
  if (l) return l;
  return s ? null : void 0;
}
function Hwo(e, r, n) {
  let s = [];
  return n.forEach((item, index) => {
    if (item.context === r && item.action === e && !Ke(n, index)) s.push(item.chord);
  }), s;
}
function Ojn(e, r, n, s) {
  let l,
    y = -1;
  for (let h of Hwo(e, r, n)) {
    let w = s.some(item => item.context === r && item.action === e && H(item.chord, h)),
      k = h.length === 1 ? h[0] : void 0,
      v = k !== void 0 && !k.ctrl && !k.alt && !k.meta && !k.super,
      x = 0;
    if (v && mn.has(k.key)) x = 2;else if (v && k.key.length === 1) x = 1;
    let S = (w ? 0 : 3) + x;
    if (S > y) l = h, y = S;
  }
  return l;
}
var mn = new Set(["up", "down", "left", "right", "enter", "escape", "tab", " ", "pageup", "pagedown", "home", "end", "backspace", "delete"]);
function Ke(e, r) {
  let n = e[r];
  if (!n) return !1;
  for (let s = r + 1; s < e.length; s++) {
    let l = e[s];
    if (l && l.context === n.context && H(l.chord, n.chord)) return !0;
  }
  return !1;
}
function $wo(e, r, n) {
  let s = null;
  for (let l of n) {
    if (l.context !== r || l.chord.length !== 1) continue;
    let y = l.chord[0];
    if (y && cBe(y, e)) s = l.action;
  }
  return s;
}
function Ijn(e, r, n) {
  let s;
  for (let l of n) {
    if (l.chord.length !== 1 || !r.includes(l.context)) continue;
    let y = l.chord[0];
    if (y && cBe(y, e)) s = l.action;
  }
  return s;
}
function Kxs(e, r, n) {
  let s = new Set();
  for (let l of n) {
    let y = l.chord[0];
    if (l.context !== e || l.chord.length !== 1 || l.action === null || !y) continue;
    let h = Ijn(y, [e, "Global"], n),
      w = Ijn(y, [r, "Global"], n);
    if (h === l.action && w && w !== h) s.add(w);
  }
  return s;
}
function H(e, r) {
  if (e.length !== r.length) return !1;
  for (let n = 0; n < e.length; n++) {
    let s = e[n],
      l = r[n];
    if (!s || !l || !cBe(s, l)) return !1;
  }
  return !0;
}
function Q5e(e, r, n) {
  let s = Ktn(e, r, n);
  return s ? Rfe(s, PU()) : s;
}
function mve(e) {
  let r = e.name === "enter" ? `
` : e.key,
    n = e.meta;
  if (I() === "macos" && !e.meta && !e.ctrl && _e(r)) r = re[r], n = !0;
  let key_6 = fn[e.name] ?? (r.length === 1 ? r.toLowerCase() : null);
  if (!key_6) return null;
  let shift = !(e.shift && r.length === 1 && e.name.length === 1 && r !== e.name && r.toLowerCase() === r.toUpperCase()) && (e.shift || r.length === 1 && r !== r.toLowerCase() && r === r.toUpperCase());
  return {
    key: key_6,
    ctrl: e.ctrl,
    alt: n,
    shift: shift,
    meta: n,
    super: e.superKey
  };
}
function cBe(e, r) {
  return e.key === r.key && e.ctrl === r.ctrl && e.shift === r.shift && (e.alt || e.meta) === (r.alt || r.meta) && e.super === r.super;
}
function Ee(e, r) {
  if (e.length >= r.chord.length) return !1;
  for (let n = 0; n < e.length; n++) {
    let s = e[n],
      l = r.chord[n];
    if (!s || !l) return !1;
    if (!cBe(s, l)) return !1;
  }
  return !0;
}
function Z5e(e, r, n, s) {
  if (e.name === "escape" && s !== null) return {
    type: "chord_cancelled"
  };
  let l = mve(e);
  if (!l) {
    if (s !== null) return {
      type: "chord_cancelled"
    };
    return {
      type: "none"
    };
  }
  let pending = s ? [...s, l] : [l],
    h = null,
    w;
  for (let k of n) {
    if (!r.includes(k.context)) continue;
    if (k.chord.length > pending.length) {
      if (Ee(pending, k)) h ??= new Map(), h.set(hj(k.chord), k.action);
    } else if (H(pending, k.chord)) w = k;
  }
  if (h !== null) {
    for (let k of h.values()) if (k !== null) return {
      type: "chord_started",
      pending: pending
    };
  }
  if (w) {
    if (w.action === null) return {
      type: "unbound"
    };
    return {
      type: "match",
      action: w.action
    };
  }
  if (s !== null) return {
    type: "chord_cancelled"
  };
  return {
    type: "none"
  };
}
function MCr(e, r, n, s) {
  if (e.name === "escape" && s !== null) return {
    type: "chord_cancelled"
  };
  let l = mve(e);
  if (!l) {
    if (s !== null) return {
      type: "chord_cancelled"
    };
    return {
      type: "none"
    };
  }
  let pending_2 = s ? [...s, l] : [l],
    h = new Set(r),
    w = new Map(),
    k = new Map();
  for (let v of n) {
    if (!h.has(v.context)) continue;
    if (v.chord.length > pending_2.length) {
      if (Ee(pending_2, v)) w.set(hj(v.chord), v.action);
    } else if (H(pending_2, v.chord)) k.set(v.context, v);
  }
  for (let v of w.values()) if (v !== null) return {
    type: "chord_started",
    pending: pending_2
  };
  for (let v of r) {
    let x = k.get(v);
    if (x) {
      if (x.action === null) return {
        type: "unbound"
      };
      return {
        type: "match",
        action: x.action
      };
    }
  }
  if (s !== null) return {
    type: "chord_cancelled"
  };
  return {
    type: "none"
  };
}
var yn = new Set(dBe);
function Ae(e) {
  if (e.startsWith("command:")) return b("command:custom");
  if (yn.has(e)) return xn(e);
  return b("unknown");
}
var bn = /^[A-Za-z0-9 +\-_/[\]\u2191\u2193\u2190\u2192]{1,32}$/u;
function hn(e) {
  return bn.test(e) ? xn(e) : b("invalid");
}
var kn = 1000;
function Ytn(e) {
  let r = Date.now(),
    actionFiredLoggedAt = xC.actionFiredLoggedAt,
    s = actionFiredLoggedAt.get(e);
  if (s !== void 0 && r - s < kn) return;
  actionFiredLoggedAt.set(e, r), i("tengu_keybinding_fired", {
    action_id: Ae(e)
  });
}
function Nut(e, r, n, s) {
  i("tengu_keybinding_fallback_used", {
    action: Ae(e),
    context: c(r),
    fallback: hn(n),
    reason: c(s)
  });
}
export { gj, lBe, Dwo, Lwo, J5e, Bxs, Vtn, jxs, Wxs, dBe, xjn, zxs, yee, Z9, hj, OCr, Rfe, Afe, eX, xC, qtn, Nwo, Gxs, Vxs, Pjn, j0t, qxs, ICr, Fwo, PU, Ktn, Hwo, Ojn, $wo, Ijn, Kxs, Q5e, mve, cBe, Z5e, MCr, Ytn, Nut };