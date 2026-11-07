// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { nC } from "B:/~BUN/root/chunk-eswth6m1.js";
import { b, f, Yn } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { d, K } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { De } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { ye } from "B:/~BUN/root/chunk-game8aqv.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Ue } from "B:/~BUN/root/chunk-eev762xg.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { vt, t, ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { tt, Il } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { Ve } from "B:/~BUN/root/chunk-myfamxtp.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { YSe } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { ur } from "B:/~BUN/root/chunk-y5gyn2hc.js";
import { cV, G4i, iZe, Hxs, K4i, aon, F2e, rwo } from "B:/~BUN/root/chunk-fnf5t6te.js";
import { o, u, me } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { Ht } from "B:/~BUN/root/chunk-cbjnh04j.js";
import { X } from "B:/~BUN/root/chunk-g9pw24zp.js";
import { L } from "B:/~BUN/root/chunk-5ha2avah.js";
import { readFileSync as an } from "fs";
import { readFile as Tn, stat as Nn } from "fs/promises";
import { dirname as Ln, join as Mn } from "path";
function Ace(n) {
  let r = n.split("+"),
    e = {
      key: "",
      ctrl: !1,
      alt: !1,
      shift: !1,
      meta: !1,
      super: !1
    };
  for (let s of r) {
    let a = s.toLowerCase();
    switch (a) {
      case "ctrl":
      case "control":
        e.ctrl = !0;
        break;
      case "alt":
      case "opt":
      case "option":
        e.alt = !0;
        break;
      case "shift":
        e.shift = !0;
        break;
      case "meta":
        e.meta = !0;
        break;
      case "cmd":
      case "command":
      case "super":
      case "win":
        e.super = !0;
        break;
      case "esc":
        e.key = "escape";
        break;
      case "return":
        e.key = "enter";
        break;
      case "del":
        e.key = "delete";
        break;
      case "space":
        e.key = " ";
        break;
      case "\u2191":
        e.key = "up";
        break;
      case "\u2193":
        e.key = "down";
        break;
      case "\u2190":
        e.key = "left";
        break;
      case "\u2192":
        e.key = "right";
        break;
      default:
        e.key = a;
        break;
    }
  }
  return e;
}
function woe(n) {
  if (n === " ") return [Ace("space")];
  return n.trim().split(/\s+/).map(Ace);
}
function kn(n) {
  let r = [];
  if (n.ctrl) r.push("ctrl");
  if (n.alt) r.push("alt");
  if (n.shift) r.push("shift");
  if (n.meta) r.push("meta");
  if (n.super) r.push("cmd");
  let e = nn(n.key);
  return r.push(e), r.join("+");
}
function nn(n) {
  switch (n) {
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
      return n;
  }
}
function d1(n) {
  return n.map(kn).join(" ");
}
function wn(n, r = "linux") {
  let e = [];
  if (n.ctrl) e.push("ctrl");
  if (n.alt || n.meta) e.push(r === "macos" ? "opt" : "alt");
  if (n.shift) e.push("shift");
  if (n.super) e.push(r === "macos" ? "cmd" : "super");
  let s = nn(n.key);
  return e.push(s), e.join("+");
}
function koe(n, r = "linux") {
  return n.map(item => wn(item, r)).join(" ");
}
function xTe(n) {
  let r = [];
  for (let e of n) for (let [s, action] of Object.entries(e.bindings)) r.push({
    chord: woe(s),
    action: action,
    context: e.context
  });
  return r;
}
var _n = p(() => u({
  context: o(),
  bindings: me(o(), o().nullable())
}));
function Kn(n) {
  return _n().safeParse(n).success;
}
function E(n) {
  return Array.isArray(n) && n.every(Kn);
}
var sn = aon,
  en = [{
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
  tn = ["ctrl", "alt", "shift", "meta", "super"],
  rn = 3,
  N = 80;
function xn(n) {
  return sn.includes(n);
}
function vn(key, r) {
  let e = key.trim(),
    s = key === " " ? [] : e.split(/\s+/),
    a = key !== " " && key.split("+").some(item => !item.trim()),
    y = /\s\+|\+\s/.test(e) && s.some(item => Ace(item).key === "");
  if (a || y) {
    let P = Il(key, N);
    return {
      type: "parse_error",
      severity: "error",
      message: a ? `Empty key part in "${P}"` : `A space next to "+" splits "${P}" into separate presses, and one of them has no key`,
      key: key,
      suggestion: a ? 'Remove extra "+" characters' : 'Remove the spaces next to "+"'
    };
  }
  let h = [],
    w = [],
    k = !0;
  for (let P of s) {
    let J = P.split("+"),
      hn = J.findLastIndex(z => Ace(z).key !== ""),
      Z = Ace(P),
      W = [];
    for (let [z, F] of J.entries()) {
      if (z === hn || Ace(F).key === "") {
        W.push(F);
        continue;
      }
      h.push(F);
      let U = YSe(F.toLowerCase(), en);
      if (U === void 0) {
        k = !1;
        continue;
      }
      let Q = Ace(U);
      if (tn.some(item => Z[item] && Q[item])) continue;
      W.push(U);
      for (let T of tn) Z[T] ||= Q[T];
    }
    w.push(W.join("+"));
  }
  if (h.length === 0) return null;
  let _ = L(h),
    C = _.length > rn + 1 ? rn : _.length,
    B = _.slice(0, C).map(item => `"${Il(item, N)}"`);
  if (_.length > C) B.push(`${_.length - C} more`);
  let S = new Intl.ListFormat("en", {
      type: "conjunction"
    }).format(B),
    D = new Intl.ListFormat("en", {
      type: "disjunction"
    }).format(en.map(item => item.name)),
    yn = _.length === 1 ? "is not a modifier" : "are not modifiers",
    pn = r ? ` in ${r}` : "",
    mn = Il(key, N),
    bn = Il(d1(woe(key)), N),
    q = w.join(" ");
  return {
    type: "parse_error",
    severity: "error",
    message: `${S} ${yn}, so "${mn}"${pn} applies to "${bn}" instead`,
    key: key,
    suggestion: k && q.length <= N ? `Did you mean "${q}"?` : `Use ${D} before "+"; for keys pressed one after another, put a space between them, as in "ctrl+x ctrl+s"`
  };
}
function Cn(n, r) {
  let e = [];
  if (typeof n !== "object" || n === null) return e.push({
    type: "parse_error",
    severity: "error",
    message: `Keybinding block ${r + 1} is not an object`
  }), e;
  let s = n,
    context = s.context,
    context_2;
  if (typeof context !== "string") e.push({
    type: "parse_error",
    severity: "error",
    message: `Keybinding block ${r + 1} missing "context" field`
  });else if (!xn(context)) e.push({
    type: "invalid_context",
    severity: "error",
    message: `Unknown context "${context}"`,
    context: context,
    suggestion: `Valid contexts: ${sn.join(", ")}`
  });else context_2 = context;
  if (typeof s.bindings !== "object" || s.bindings === null) return e.push({
    type: "parse_error",
    severity: "error",
    message: `Keybinding block ${r + 1} missing "bindings" field`
  }), e;
  let bindings = s.bindings;
  for (let [key_2, action_2] of Object.entries(bindings)) {
    let _ = vn(key_2, context_2);
    if (_) _.context = context_2, e.push(_);
    if (action_2 !== null && typeof action_2 !== "string") e.push({
      type: "invalid_action",
      severity: "error",
      message: `Invalid action for "${key_2}": must be a string or null`,
      key: key_2,
      context: context_2
    });else if (typeof action_2 === "string" && action_2.startsWith("command:")) {
      if (!/^command:[a-zA-Z0-9:\-_]+$/.test(action_2)) e.push({
        type: "invalid_action",
        severity: "warning",
        message: `Invalid command binding "${action_2}" for "${key_2}": command name may only contain alphanumeric characters, colons, hyphens, and underscores`,
        key: key_2,
        context: context_2,
        action: action_2
      });
      if (context_2 && context_2 !== "Chat") e.push({
        type: "invalid_action",
        severity: "warning",
        message: `Command binding "${action_2}" must be in "Chat" context, not "${context_2}"`,
        key: key_2,
        context: context_2,
        action: action_2,
        suggestion: 'Move this binding to a block with "context": "Chat"'
      });
    } else if (typeof action_2 === "string" && !rwo(action_2) && !Hxs(action_2)) e.push({
      type: "invalid_action",
      severity: "error",
      message: `Unknown action "${action_2}" for "${key_2}"${context_2 ? ` in ${context_2}` : ""} \u2014 this binding is ignored`,
      key: key_2,
      context: context_2,
      action: action_2,
      suggestion: Bn(action_2)
    });else if (action_2 === "voice:pushToTalk") {
      let C = woe(key_2)[0];
      if (C && !C.ctrl && !C.alt && !C.shift && !C.meta && !C.super && /^[a-z]$/.test(C.key)) e.push({
        type: "invalid_action",
        severity: "warning",
        message: `Binding "${key_2}" to voice:pushToTalk prints into the input during warmup; use space or a modifier combo like meta+k`,
        key: key_2,
        context: context_2,
        action: action_2
      });
    }
  }
  return e;
}
function Bn(n) {
  let r,
    e = 1 / 0;
  for (let h of F2e) {
    let w = Sn(n.toLowerCase(), h.toLowerCase());
    if (w < e) e = w, r = h;
  }
  if (r && e <= 2) return `Did you mean "${r}"?`;
  let s = tt(n, ":"),
    a = F2e.filter(item => item.startsWith(`${s}:`));
  if (a.length > 0) return `Valid "${s}:" actions: ${a.join(", ")}`;
  return `Valid action namespaces: ${L(F2e.map(item => tt(item, ":"))).map(item => `${item}:`).join(", ")}`;
}
function Sn(n, r) {
  let e = Array.from({
    length: r.length + 1
  }, (s, a) => a);
  for (let s = 1; s <= n.length; s++) {
    let a = [s];
    for (let y = 1; y <= r.length; y++) {
      let h = n[s - 1] === r[y - 1] ? 0 : 1;
      a[y] = Math.min((e[y] ?? 0) + 1, (a[y - 1] ?? 0) + 1, (e[y - 1] ?? 0) + h);
    }
    e = a;
  }
  return e[r.length] ?? 0;
}
function j(n) {
  let r = [],
    e = /"bindings"\s*:\s*\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}/g,
    s;
  while ((s = e.exec(n)) !== null) {
    let a = s[1];
    if (!a) continue;
    let context_3 = n.slice(0, s.index).match(/"context"\s*:\s*"([^"]+)"[^{]*$/)?.[1] ?? "unknown",
      k = /"([^"]+)"\s*:/g,
      _ = new Map(),
      C;
    while ((C = k.exec(a)) !== null) {
      let key_3 = C[1];
      if (!key_3) continue;
      let S = (_.get(key_3) ?? 0) + 1;
      if (_.set(key_3, S), S === 2) r.push({
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
function Pn(n) {
  let r = [];
  if (!Array.isArray(n)) return r.push({
    type: "parse_error",
    severity: "error",
    message: "keybindings.json must contain an array",
    suggestion: "Wrap your bindings in [ ]"
  }), r;
  for (let e = 0; e < n.length; e++) r.push(...Cn(n[e], e));
  return r;
}
function An(n) {
  let r = [],
    e = new Map();
  for (let s of n) {
    let a = e.get(s.context) ?? new Map();
    e.set(s.context, a);
    for (let [key_4, h] of Object.entries(s.bindings)) {
      let w = iZe(key_4),
        k = a.get(w);
      if (k && k !== h) r.push({
        type: "duplicate",
        severity: "warning",
        message: `Duplicate binding "${key_4}" in ${s.context} context`,
        key: key_4,
        context: s.context,
        action: h ?? "null (unbind)",
        suggestion: `Previously bound to "${k}". Only the last binding will be used.`
      });
      a.set(w, h ?? "null");
    }
  }
  return r;
}
function En(n) {
  let r = [],
    e = G4i();
  for (let s of n) {
    let key_5 = d1(s.chord),
      y = iZe(key_5);
    for (let h of e) if (iZe(h.key) === y) r.push({
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
function $n(n) {
  let r = [];
  for (let e of n) for (let [s, action_3] of Object.entries(e.bindings)) {
    let chord = s.split(" ").map(item => Ace(item));
    r.push({
      chord: chord,
      action: action_3,
      context: e.context
    });
  }
  return r;
}
function O(n, r) {
  let e = [];
  if (e.push(...Pn(n)), E(n)) {
    e.push(...An(n));
    let a = $n(n);
    e.push(...En(a));
  }
  let s = new Set();
  return e.filter(item => {
    let y = `${item.type}:${item.key}:${item.context}`;
    if (s.has(y)) return !1;
    return s.add(y), !0;
  });
}
function voe() {
  return v("tengu_keybinding_customization_release", !0);
}
var stabilityThreshold = 500,
  pollInterval = 200;
function jn() {
  let n = {
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
    changed: De(),
    [Symbol.dispose]() {
      if (n.disposed = !0, n.watcher) n.watcher.close(), n.watcher = null;
      n.changed.clear();
    }
  };
  return n;
}
var Px = jn();
function Y(n, user_binding_count) {
  let e = new Date().toISOString().slice(0, 10);
  if (n.lastCustomBindingsLogDate === e) return;
  n.lastCustomBindingsLogDate = e, l("tengu_custom_keybindings_loaded", {
    user_binding_count: user_binding_count
  });
}
function QIn() {
  return Mn(Ue(), "keybindings.json");
}
var bps = Ve.state("keybindings");
function I() {
  return xTe(cV);
}
function R(n) {
  return xTe(K4i(n)).filter(item => item.action === null || rwo(item.action));
}
function H(n) {
  for (let r of n) t(`[keybindings] [${r.severity}] ${r.message}${r.suggestion ? ` \u2014 ${r.suggestion}` : ""}`, {
    level: "warn"
  });
}
function A(n, r) {
  if (n?.suppressFeatureEvents) return;
  if (r === "ok") g("keybinding_load_user_config");else m("keybinding_load_user_config", r);
}
function G() {
  return !voe() || ur("keybindings");
}
function Sps(n) {
  let r = I();
  if (G()) return r;
  if (X() && n !== void 0) return r;
  try {
    let e = an(QIn(), "utf-8"),
      s = ee(e),
      a = typeof s === "object" && s !== null && "bindings" in s ? s.bindings : void 0;
    return E(a) ? [...r, ...R(a)] : r;
  } catch {
    return r;
  }
}
async function dn(n, r, e) {
  let bindings_2 = I();
  if (!voe() || ur("keybindings")) return {
    bindings: bindings_2,
    warnings: []
  };
  let a = QIn();
  if (r) {
    let y = await r.read([bps]);
    if (!y.ok) {
      let w = y.error,
        k = Ht(w);
      if (t(`[keybindings] Error loading ${a}: ${k}`), e?.suppressFeatureEvents) c("keybinding_load_user_config", "warm_backend_read_failed_fell_back");
      return A(e, "keybinding_config_parse_error"), {
        bindings: bindings_2,
        warnings: [{
          type: "parse_error",
          severity: "error",
          message: `Failed to parse keybindings.json: ${k}`
        }]
      };
    }
    let h = y.value.items[0];
    if (!h.found) return A(e, "ok"), {
      bindings: bindings_2,
      warnings: []
    };
    return On(Buffer.from(h.value).toString("utf-8"), n, bindings_2, a, e);
  }
  try {
    let y = await Tn(a, "utf-8"),
      h = ee(y),
      w;
    if (typeof h === "object" && h !== null && "bindings" in h) w = h.bindings;else return t('[keybindings] Invalid keybindings.json: keybindings.json must have a "bindings" array'), A(e, "keybinding_config_invalid_format"), {
      bindings: bindings_2,
      warnings: [{
        type: "parse_error",
        severity: "error",
        message: 'keybindings.json must have a "bindings" array',
        suggestion: 'Use format: { "bindings": [ ... ] }'
      }]
    };
    if (!E(w)) {
      let message = !Array.isArray(w) ? '"bindings" must be an array' : "keybindings.json contains invalid block structure",
        suggestion = !Array.isArray(w) ? 'Set "bindings" to an array of keybinding blocks' : 'Each block must have "context" (string) and "bindings" (object mapping keys to a string action or null)';
      return t(`[keybindings] Invalid keybindings.json: ${message}`), A(e, "keybinding_config_invalid_structure"), {
        bindings: bindings_2,
        warnings: [{
          type: "parse_error",
          severity: "error",
          message: message,
          suggestion: suggestion
        }]
      };
    }
    let k = R(w);
    t(`[keybindings] Loaded ${k.length} user bindings from ${a}`);
    let bindings_3 = [...bindings_2, ...k];
    Y(n, k.length);
    let warnings = [...j(y), ...O(w, bindings_3)];
    if (warnings.length > 0) t(`[keybindings] Found ${warnings.length} validation issue(s)`), H(warnings);
    return A(e, "ok"), {
      bindings: bindings_3,
      warnings: warnings
    };
  } catch (error) {
    if (K(error)) return A(e, "ok"), {
      bindings: bindings_2,
      warnings: []
    };
    return t(`[keybindings] Error loading ${a}: ${d(error)}`), A(e, "keybinding_config_parse_error"), {
      bindings: bindings_2,
      warnings: [{
        type: "parse_error",
        severity: "error",
        message: `Failed to parse keybindings.json: ${d(error)}`
      }]
    };
  }
}
function On(n, r, bindings_4, s, a) {
  try {
    let y = ee(n),
      h;
    if (typeof y === "object" && y !== null && "bindings" in y) h = y.bindings;else return t('[keybindings] Invalid keybindings.json: keybindings.json must have a "bindings" array'), A(a, "keybinding_config_invalid_format"), {
      bindings: bindings_4,
      warnings: [{
        type: "parse_error",
        severity: "error",
        message: 'keybindings.json must have a "bindings" array',
        suggestion: 'Use format: { "bindings": [ ... ] }'
      }]
    };
    if (!E(h)) {
      let message_2 = !Array.isArray(h) ? '"bindings" must be an array' : "keybindings.json contains invalid block structure",
        suggestion_2 = !Array.isArray(h) ? 'Set "bindings" to an array of keybinding blocks' : 'Each block must have "context" (string) and "bindings" (object mapping keys to a string action or null)';
      return t(`[keybindings] Invalid keybindings.json: ${message_2}`), A(a, "keybinding_config_invalid_structure"), {
        bindings: bindings_4,
        warnings: [{
          type: "parse_error",
          severity: "error",
          message: message_2,
          suggestion: suggestion_2
        }]
      };
    }
    let w = R(h);
    t(`[keybindings] Loaded ${w.length} user bindings from ${s}`);
    let bindings_5 = [...bindings_4, ...w];
    Y(r, w.length);
    let warnings_2 = [...j(n), ...O(h, bindings_5)];
    if (warnings_2.length > 0) t(`[keybindings] Found ${warnings_2.length} validation issue(s)`), H(warnings_2);
    return A(a, "ok"), {
      bindings: bindings_5,
      warnings: warnings_2
    };
  } catch (error) {
    return t(`[keybindings] Error loading ${s}: ${d(error)}`), A(a, "keybinding_config_parse_error"), {
      bindings: bindings_4,
      warnings: [{
        type: "parse_error",
        severity: "error",
        message: `Failed to parse keybindings.json: ${d(error)}`
      }]
    };
  }
}
async function EDi(n, r) {
  if (n.bindings) return n.bindings;
  if (n.warmAttempted) return;
  if (ye()) return;
  if (G()) return;
  let e = await dn(n, r, {
    suppressFeatureEvents: !0
  });
  if (n.warmAttempted = !0, e.warnings.length > 0) return e.bindings;
  if (!n.bindings) n.bindings = e.bindings, n.warnings = [], n.warmedFromBackend = !0, g("keybinding_load_user_config");
  return n.bindings;
}
function gn(n) {
  if (!n.warmedFromBackend) return !1;
  if (G()) return n.bindings = null, n.warnings = [], n.warmedFromBackend = !1, !0;
  return n.warmedFromBackend = !1, !1;
}
function W_r(n) {
  if (n.bindings && !gn(n)) return n.bindings;
  return v7t(n).bindings;
}
function v7t(n) {
  if (n.bindings && !gn(n)) return {
    bindings: n.bindings,
    warnings: n.warnings
  };
  n.warmedFromBackend = !1;
  let r = I();
  if (!voe() || ur("keybindings")) return n.bindings = r, n.warnings = [], {
    bindings: n.bindings,
    warnings: n.warnings
  };
  let e = QIn();
  try {
    let s = an(e, "utf-8"),
      a = ee(s),
      y;
    if (typeof a === "object" && a !== null && "bindings" in a) y = a.bindings;else return m("keybinding_load_user_config", "keybinding_config_invalid_format"), n.bindings = r, n.warnings = [{
      type: "parse_error",
      severity: "error",
      message: 'keybindings.json must have a "bindings" array',
      suggestion: 'Use format: { "bindings": [ ... ] }'
    }], {
      bindings: n.bindings,
      warnings: n.warnings
    };
    if (!E(y)) {
      let message_3 = !Array.isArray(y) ? '"bindings" must be an array' : "keybindings.json contains invalid block structure",
        suggestion_3 = !Array.isArray(y) ? 'Set "bindings" to an array of keybinding blocks' : 'Each block must have "context" (string) and "bindings" (object mapping keys to a string action or null)';
      return m("keybinding_load_user_config", "keybinding_config_invalid_structure"), n.bindings = r, n.warnings = [{
        type: "parse_error",
        severity: "error",
        message: message_3,
        suggestion: suggestion_3
      }], {
        bindings: n.bindings,
        warnings: n.warnings
      };
    }
    let h = R(y);
    t(`[keybindings] Loaded ${h.length} user bindings from ${e}`), n.bindings = [...r, ...h], Y(n, h.length);
    let w = j(s);
    if (n.warnings = [...w, ...O(y, n.bindings)], n.warnings.length > 0) t(`[keybindings] Found ${n.warnings.length} validation issue(s)`), H(n.warnings);
    return g("keybinding_load_user_config"), {
      bindings: n.bindings,
      warnings: n.warnings
    };
  } catch (error) {
    if (K(error)) return g("keybinding_load_user_config"), n.bindings = r, n.warnings = [], {
      bindings: n.bindings,
      warnings: n.warnings
    };
    return t(`[keybindings] Error loading ${e}: ${d(error)}`), m("keybinding_load_user_config", "keybinding_config_parse_error"), n.bindings = r, n.warnings = [{
      type: "parse_error",
      severity: "error",
      message: `Failed to parse keybindings.json: ${d(error)}`
    }], {
      bindings: n.bindings,
      warnings: n.warnings
    };
  }
}
async function TDi(n) {
  if (n.initialized || n.disposed) return;
  if (!voe() || ur("keybindings")) {
    t("[keybindings] Skipping file watcher - user customization disabled");
    return;
  }
  let r = QIn(),
    e = Ln(r);
  try {
    if (!(await Nn(e)).isDirectory()) {
      t(`[keybindings] Not watching: ${e} is not a directory`), c("keybinding_watcher_init", "watch_dir_inaccessible");
      return;
    }
  } catch {
    t(`[keybindings] Not watching: ${e} does not exist`), c("keybinding_watcher_init", "watch_dir_inaccessible");
    return;
  }
  n.initialized = !0, t(`[keybindings] Watching for changes to ${r}`), n.watcher = nC.watch(r, {
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
  }), n.watcher.on("add", s => on(n, s)), n.watcher.on("change", s => on(n, s)), n.watcher.on("unlink", s => In(n, s)), n.watcher.on("error", s => t(`[keybindings] watcher error: ${d(s)}`, {
    level: "warn"
  })), vt(n), g("keybinding_watcher_init");
}
async function on(n, r) {
  t(`[keybindings] Detected change to ${r}`);
  try {
    let e = await dn(n);
    n.bindings = e.bindings, n.warnings = e.warnings, n.warmedFromBackend = !1, n.changed.emit(e), g("keybinding_hot_reload");
  } catch (error) {
    t(`[keybindings] Error reloading: ${d(error)}`), c("keybinding_hot_reload", "keybinding_reload_failed");
  }
}
function In(n, r) {
  t(`[keybindings] Detected deletion of ${r}`);
  let bindings_6 = I();
  n.bindings = bindings_6, n.warnings = [], n.warmedFromBackend = !1, n.changed.emit({
    bindings: bindings_6,
    warnings: []
  });
}
var V = {
  "\u2020": "t"
};
function cn(n) {
  return Object.hasOwn(V, n);
}
var Rdo = {
  π: "alt+p",
  ø: "alt+o"
};
function wps(n) {
  return Object.hasOwn(Rdo, n);
}
function $6() {
  let n = x();
  if (n === "macos") return n;
  if (i.LC_TERMINAL === "iTerm2" || i.TERM_PROGRAM === "Apple_Terminal" || i.TERM_PROGRAM === "iTerm.app") return "macos";
  return n;
}
var Rn = {
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
function ZIn(n, r, e) {
  let s = !1,
    a;
  for (let y = 0; y < e.length; y++) {
    let h = e[y];
    if (!h || h.context !== r || h.action !== n) continue;
    if (s = !0, !ln(e, y)) a = h.chord;
  }
  if (a) return a;
  return s ? null : void 0;
}
function eMn(n, r, e) {
  let s = [];
  return e.forEach((item, index) => {
    if (item.context === r && item.action === n && !ln(e, index)) s.push(item.chord);
  }), s;
}
function CDi(n, r, e) {
  let s = e.filter(item => item.context === r && item.action === n);
  return s.length > 0 && s.every(item => e.findLast(y => y.context === r && M(y.chord, item.chord))?.action === null);
}
function z_r(n, r, e, s) {
  let a,
    y = -1;
  for (let h of eMn(n, r, e)) {
    let w = s.some(item => item.context === r && item.action === n && M(item.chord, h)),
      k = h.length === 1 ? h[0] : void 0,
      _ = k !== void 0 && !k.ctrl && !k.alt && !k.meta && !k.super,
      C = 0;
    if (_ && Wn.has(k.key)) C = 2;else if (_ && k.key.length === 1) C = 1;
    let B = (w ? 0 : 3) + C;
    if (B > y) a = h, y = B;
  }
  return a;
}
var Wn = new Set(["up", "down", "left", "right", "enter", "escape", "tab", " ", "pageup", "pagedown", "home", "end", "backspace", "delete"]);
function ln(n, r) {
  let e = n[r];
  if (!e) return !1;
  for (let s = r + 1; s < n.length; s++) {
    let a = n[s];
    if (a && a.context === e.context && M(a.chord, e.chord)) return !0;
  }
  return !1;
}
function kps(n, r, e) {
  let s = null;
  for (let a of e) {
    if (a.context !== r || a.chord.length !== 1) continue;
    let y = a.chord[0];
    if (y && AXe(y, n)) s = a.action;
  }
  return s;
}
function G_r(n, r, e) {
  let s;
  for (let a of e) {
    if (a.chord.length !== 1 || !r.includes(a.context)) continue;
    let y = a.chord[0];
    if (y && AXe(y, n)) s = a.action;
  }
  return s;
}
function RDi(n, r, e) {
  let s = new Set();
  for (let a of e) {
    let y = a.chord[0];
    if (a.context !== n || a.chord.length !== 1 || a.action === null || !y) continue;
    let h = G_r(y, [n, "Global"], e),
      w = G_r(y, [r, "Global"], e);
    if (h === a.action && w && w !== h) s.add(w);
  }
  return s;
}
function M(n, r) {
  if (n.length !== r.length) return !1;
  for (let e = 0; e < n.length; e++) {
    let s = n[e],
      a = r[e];
    if (!s || !a || !AXe(s, a)) return !1;
  }
  return !0;
}
function RXe(n, r, e) {
  let s = ZIn(n, r, e);
  return s ? koe(s, $6()) : s;
}
function h0e(n) {
  let r = n.name === "enter" ? `
` : n.key,
    e = n.meta;
  if (x() === "macos" && !n.meta && !n.ctrl && cn(r)) r = V[r], e = !0;
  let key_6 = Rn[n.name] ?? (r.length === 1 ? r.toLowerCase() : null);
  if (!key_6) return null;
  let shift = !(n.shift && r.length === 1 && n.name.length === 1 && r !== n.name && r.toLowerCase() === r.toUpperCase()) && (n.shift || r.length === 1 && r !== r.toLowerCase() && r === r.toUpperCase());
  return {
    key: key_6,
    ctrl: n.ctrl,
    alt: e,
    shift: shift,
    meta: e,
    super: n.superKey
  };
}
function AXe(n, r) {
  return n.key === r.key && n.ctrl === r.ctrl && n.shift === r.shift && (n.alt || n.meta) === (r.alt || r.meta) && n.super === r.super;
}
function un(n, r) {
  if (n.length >= r.chord.length) return !1;
  for (let e = 0; e < n.length; e++) {
    let s = n[e],
      a = r.chord[e];
    if (!s || !a) return !1;
    if (!AXe(s, a)) return !1;
  }
  return !0;
}
function Lft(n, r, e, s) {
  if (n.name === "escape" && s !== null) return {
    type: "chord_cancelled"
  };
  let a = h0e(n);
  if (!a) {
    if (s !== null) return {
      type: "chord_cancelled"
    };
    return {
      type: "none"
    };
  }
  let pending = s ? [...s, a] : [a],
    h = null,
    w;
  for (let k of e) {
    if (!r.includes(k.context)) continue;
    if (k.chord.length > pending.length) {
      if (un(pending, k)) h ??= new Map(), h.set(d1(k.chord), k.action);
    } else if (M(pending, k.chord)) w = k;
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
function Ado(n, r, e, s) {
  if (n.name === "escape" && s !== null) return {
    type: "chord_cancelled"
  };
  let a = h0e(n);
  if (!a) {
    if (s !== null) return {
      type: "chord_cancelled"
    };
    return {
      type: "none"
    };
  }
  let pending_2 = s ? [...s, a] : [a],
    h = new Set(r),
    w = new Map(),
    k = new Map();
  for (let _ of e) {
    if (!h.has(_.context)) continue;
    if (_.chord.length > pending_2.length) {
      if (un(pending_2, _)) w.set(d1(_.chord), _.action);
    } else if (M(pending_2, _.chord)) k.set(_.context, _);
  }
  for (let _ of w.values()) if (_ !== null) return {
    type: "chord_started",
    pending: pending_2
  };
  for (let _ of r) {
    let C = k.get(_);
    if (C) {
      if (C.action === null) return {
        type: "unbound"
      };
      return {
        type: "match",
        action: C.action
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
var zn = new Set(F2e);
function fn(n) {
  if (n.startsWith("command:")) return b("command:custom");
  if (zn.has(n)) return Yn(n);
  return b("unknown");
}
var Un = /^[A-Za-z0-9 +\-_/[\]\u2191\u2193\u2190\u2192]{1,32}$/u;
function Hn(n) {
  return Un.test(n) ? Yn(n) : b("invalid");
}
var Gn = 1000;
function tMn(n) {
  let r = Date.now(),
    actionFiredLoggedAt = Px.actionFiredLoggedAt,
    s = actionFiredLoggedAt.get(n);
  if (s !== void 0 && r - s < Gn) return;
  actionFiredLoggedAt.set(n, r), l("tengu_keybinding_fired", {
    action_id: fn(n)
  });
}
function fDt(n, r, e, s) {
  l("tengu_keybinding_fallback_used", {
    action: fn(n),
    context: f(r),
    fallback: Hn(e),
    reason: f(s)
  });
}
export { Ace, woe, d1, koe, xTe, voe, Px, QIn, bps, Sps, EDi, W_r, v7t, TDi, Rdo, wps, $6, ZIn, eMn, CDi, z_r, kps, G_r, RDi, RXe, h0e, AXe, Lft, Ado, tMn, fDt };