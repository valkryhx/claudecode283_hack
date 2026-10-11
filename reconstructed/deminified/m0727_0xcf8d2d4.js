// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { md } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { y, c, bn } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { tt } from "B:/~BUN/root/chunk-py7yqpgt.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { _, m } from "B:/~BUN/root/chunk-51n463p1.js";
import { MJ } from "B:/~BUN/root/chunk-65064145.js";
import { Mo } from "B:/~BUN/root/chunk-4py062qg.js";
import { XH, FO } from "B:/~BUN/root/chunk-3jyp964r.js";
import { r7e, cKt } from "B:/~BUN/root/chunk-4vy1c7wv.js";
var g = /^[A-Za-z0-9][A-Za-z0-9._+-]{0,63}$/;
function _yt(e) {
  if (e == null) return;
  if (g.test(e)) return bn(e);
  return y("nonconforming");
}
var u = new Set(["Apple_Terminal", "contour", "foot", "ghostty", "iTerm.app", "iTerm2", "kitty", "Konsole", "libghostty", "libvterm", "mintty", "Rio", "ShellFish", "SwiftTerm", "Tabby", "terminology", "Termius", "tmux", "VTE", "Warp", "WezTerm", "xterm", "xterm-ghostty", "XTerm", "xterm.js", "Zap", "Zellij"]),
  N = [/^(?:next-)?v?\d{1,8}(?:\.\d{1,8}){0,5}[a-z]?$/, /^\d{1,8}\.\d{1,8}\.\d{1,8}-?(?:alpha|beta|rc|pre|dev)\.?\d{0,8}$/, /^\d{8}[-_]\d{6}[-_][0-9a-f]{8}$/, /^v\d\.\d{4}(?:\.\d{2}){4}\.(?:stable|preview|beta|dev)_\d{2}$/],
  S = /^\d{1,8}(?:\.\d{1,8}){1,3}/,
  v = /^([A-Za-z][A-Za-z0-9_.]*)(.*)$/,
  b = /^([A-Za-z][A-Za-z0-9_.-]*[A-Za-z0-9_.])(.*)$/,
  A = /[):]{1,4}$/;
function q5r(e) {
  if (e === void 0) return y("no_reply");
  let n = e.length <= 128 ? v.exec(e) : null;
  if (!n) return y("other");
  let r = b.exec(e),
    [, o = "", s = ""] = r && u.has(r[1] ?? "") ? r : n;
  if (!u.has(o)) return y("other");
  if (s === "") return bn(o);
  let l = s[0],
    f = s.slice(1).replace(A, "");
  if (f === "") return bn(l === "(" ? `${o}()` : o);
  let d = N.some(item => item.test(f)) ? f : S.exec(f)?.[0] ?? "other";
  switch (l) {
    case "(":
      return bn(`${o}(${d})`);
    case " ":
    case "-":
      return bn(`${o}${l}${d}`);
    default:
      return bn(`${o} ${d}`);
  }
}
async function aM(e, n, {
  storageV5: storageV5,
  credentials: credentials
} = {}) {
  let s = Mo("preferredNotifChannel", "auto").value;
  await FO(XH(), e, {
    storageV5: storageV5,
    credentials: credentials
  });
  let l = await E(s, e, n);
  if (l === "error") m("notification_show", "send_failed");else _("notification_show");
  i("tengu_notification_method_used", {
    configured_channel: c(MJ.includes(s) ? s : "invalid"),
    notification_type: c(e.notificationType),
    method_used: c(l),
    term: _yt(a.terminal),
    attacher_term: _yt(md()?.terminal)
  });
}
var p = "Claude Code";
async function E(e, n, r) {
  if (e === "auto") {
    let s = await I();
    return T(s, n, r), s;
  }
  let o;
  switch (e) {
    case "iterm2":
    case "iterm2_with_bell":
    case "kitty":
    case "ghostty":
    case "terminal_bell":
      o = e;
      break;
    case "notifications_disabled":
      o = "disabled";
      break;
    default:
      o = "none";
  }
  try {
    return T(o, n, r), o;
  } catch {
    return "error";
  }
}
async function I() {
  switch (md()?.terminal ?? a.terminal) {
    case "Apple_Terminal":
      return (await w()) ? "terminal_bell" : "no_method_available";
    case "iTerm.app":
      return "iterm2";
    case "kitty":
      return "kitty";
    case "ghostty":
      return "ghostty";
    default:
      return "no_method_available";
  }
}
function T(e, n, r) {
  switch (e) {
    case "iterm2":
      r.notifyITerm2(n);
      return;
    case "iterm2_with_bell":
      r.notifyITerm2(n), r.notifyBell();
      return;
    case "kitty":
      r.notifyKitty({
        ...n,
        title: n.title || p,
        id: O()
      });
      return;
    case "ghostty":
      r.notifyGhostty({
        ...n,
        title: n.title || p
      });
      return;
    case "terminal_bell":
      r.notifyBell();
      return;
    case "disabled":
    case "none":
    case "no_method_available":
      return;
  }
}
function O() {
  return Math.floor(Math.random() * 1e4);
}
async function w() {
  try {
    let n = (await tt("osascript", ["-e", 'tell application "Terminal" to name of current settings of front window'])).stdout.trim();
    if (!n) return !1;
    let r = await tt("defaults", ["export", "com.apple.Terminal", "-"]);
    if (r.code !== 0) return !1;
    let o = cKt(r.stdout);
    if (!r7e(o)) return t("Failed to read Apple Terminal bell setting: defaults export is not a plist dict"), !1;
    let s = o["Window Settings"],
      l = r7e(s) ? s[n] : void 0;
    if (!r7e(l)) return t("Failed to read Apple Terminal bell setting: no settings dict for the current profile"), !1;
    return l.Bell === !1;
  } catch (error) {
    return t(`Failed to read Apple Terminal bell setting: ${error instanceof Error ? error.message : String(error)}`, {
      level: "error"
    }), !1;
  }
}
export { _yt, q5r, aM };