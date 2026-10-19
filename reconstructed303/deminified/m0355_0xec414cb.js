// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { j, $c } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { Z2, Khe } from "B:/~BUN/root/chunk-nggrknsv.js";
import { Wd, wde, a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { lt } from "B:/~BUN/root/chunk-6ft8yhc8.js";
import { ZN } from "B:/~BUN/root/chunk-v6pbq6dm.js";
import { RA, B2, rZe, lQ } from "B:/~BUN/root/chunk-nvgn0qsr.js";
import { pw } from "B:/~BUN/root/chunk-d69870x4.js";
import { Ue } from "B:/~BUN/root/chunk-ef0msk7r.js";
class y {
  hooks = null;
  uiMounted = !1;
  setHooks(e) {
    this.hooks = e;
  }
  setUiMounted(e) {
    this.uiMounted = e;
  }
}
var g = new y();
function ygo(e) {
  g.setHooks(e);
}
function _go() {
  return g.hooks;
}
function R(e) {
  g.setUiMounted(e);
}
function O$n() {
  return g.uiMounted;
}
class E extends Map {
  get everMounted() {
    return O$n();
  }
  set everMounted(e) {
    R(e);
  }
  set(e, n) {
    this.everMounted = !0;
    let o = this.get(e);
    if (o && o !== n && !o.hasUnmounted && o.holdsRawMode) l(Error("ink: second root created on a stream whose mounted root still holds stdin (raw mode); unmount the previous root first"));
    return super.set(e, n);
  }
  treeRoots = new Map();
  standaloneRender = null;
  claimForStandaloneRender(e) {
    let n = () => {
        if (this.standaloneRender === o) this.standaloneRender = null;
      },
      o = e.then(n, n);
    this.standaloneRender = o;
  }
  get pendingStandaloneRender() {
    return this.standaloneRender;
  }
}
var D = new z(() => new E());
function ai() {
  return D.of(j().host);
}
var m = null,
  w = !1;
function T() {
  if (w) return m;
  return w = !0, null;
  if (process.env.CLIPBOARD_NAPI_NODE_PATH) try {
    return m = Ue(process.env.CLIPBOARD_NAPI_NODE_PATH), m;
  } catch {}
  let o = ["x64-win32"].flatMap(item => [`./vendor/clipboard-napi/${item}/clipboard-napi.node`, `../clipboard-napi/${item}/clipboard-napi.node`]);
  for (let r of o) try {
    return m = Ue(r), m;
  } catch {}
  return null;
}
import { Buffer as M } from "buffer";
import { isAbsolute as B } from "path";
function I6() {
  return $c()?.printsUnknownSequences ?? pw.hasUnknownSequencePrintingBug(a.terminal);
}
var x = RA + String.fromCharCode(lQ.OSC),
  T$n = RA + "\\";
function C() {
  return $c()?.terminal ?? a.terminal;
}
function U7t() {
  let e = $c();
  if (e) return e.mux;
  if (a.TMUX) return "tmux";
  if (a.STY) return "screen";
  if (a.ZELLIJ) return "zellij";
  return null;
}
function b() {
  return $c()?.ssh ?? !!a.SSH_CONNECTION;
}
function P() {
  let e = $c();
  if (e) {
    if (e.mux !== "tmux" || !e.tmuxSocket) return null;
    return B(e.tmuxSocket) && ZN(e.tmuxSocket) ? ["-S", e.tmuxSocket] : null;
  }
  return a.TMUX ? [] : null;
}
function Z$e() {
  let e = C();
  if (e === "Apple_Terminal") return "Fn";
  if (e === "iTerm.app") return "Option";
  if ($c()?.isVscodeTerm || e && G.has(e)) return I() === "macos" ? "Option" : "Shift";
  if (e && W.has(e)) return "Shift";
  if (a.LC_TERMINAL === "iTerm2") return "Option";
  return b() || U7t() !== null || I() === "macos" ? "Shift (Option in iTerm2, Fn in Terminal.app)" : "Shift";
}
var W = new Set(["ghostty", "kitty", "WezTerm", "alacritty", "xterm", "gnome-terminal", "vte-based", "konsole", "windows-terminal", "mintty", ...wde]),
  G = new Set(["vscode", "cursor", "windsurf", "antigravity", "codium"]);
function nb(...e) {
  let n = C() === "kitty" ? T$n : B2;
  return `${x}${e.join(rZe)}${n}`;
}
function lM(e) {
  let n = U7t();
  if (n === "tmux") return `\x1BPtmux;${e.replaceAll("\x1B", "\x1B\x1B")}\x1B\\`;
  if (n === "screen") return `\x1BP${e.replaceAll("\x1B", "\x1B\x1B")}\x1B\\`;
  return e;
}
class L {
  tool = void 0;
  addonWriteFailed = !1;
  addonWriteSucceeded = !1;
  waylandCopyGeneration = 0;
  async probe() {
    if (I() !== "linux" || typeof this.tool === "string" && this.tool !== "addon") return;
    let {
      display: display,
      waylandDisplay: waylandDisplay
    } = N();
    if (waylandDisplay && (await Wd("wl-copy"))) {
      this.tool = "wl-copy";
      return;
    }
    if (display) {
      if (await Wd("xclip")) {
        this.tool = "xclip";
        return;
      }
      if (await Wd("xsel")) {
        this.tool = "xsel";
        return;
      }
    }
    if (!this.addonWriteFailed && k() && T()?.setLinuxClipboardText) {
      this.tool = "addon";
      return;
    }
    this.tool = null;
  }
  recordAddonWrite(e) {
    if (e) this.addonWriteSucceeded = !0;else this.addonWriteFailed ||= !this.addonWriteSucceeded;
  }
  beginWaylandCopy() {
    return ++this.waylandCopyGeneration;
  }
  isLatestWaylandCopy(e) {
    return e === this.waylandCopyGeneration;
  }
  reset() {
    this.tool = void 0, this.addonWriteFailed = !1, this.addonWriteSucceeded = !1;
  }
}
var H = new z(() => new L());
function f() {
  return H.of(j().host);
}
function Upe() {
  if (!b()) switch (I()) {
    case "macos":
    case "windows":
    case "wsl":
      return "native";
    case "linux":
      if (typeof f().tool === "string") return "native";
      break;
  }
  if (P()) return "tmux-buffer";
  return "osc52";
}
function C$n() {
  return f().probe();
}
function Iws() {
  if (I() !== "linux") return "not_linux";
  let {
    tool: tool
  } = f();
  if (tool === void 0) return "not_probed";
  return tool ?? "none";
}
function Mws() {
  return a.VTE_VERSION != null;
}
function N() {
  return {
    display: process.env.DISPLAY,
    waylandDisplay: process.env.WAYLAND_DISPLAY
  };
}
function k() {
  let {
    display: display_2,
    waylandDisplay: waylandDisplay_2
  } = N();
  if (display_2) return /^(unix)?:/.test(display_2);
  return !!waylandDisplay_2;
}
function F(e) {
  return /[^\x00-\x7f]/.test(e);
}
function R$n(e) {
  if (!pw.hasOsc52ClipboardUtf8Bug() || !F(e)) return null;
  return "VS Code 1.123/1.124 will mojibake this paste \u2014 update to \u22651.125";
}
async function Y(input) {
  let n = P();
  if (!n) return !1;
  let o = {
      input: input,
      useCwd: !1,
      timeout: 2000
    },
    r = a.LC_TERMINAL ?? "unset",
    i = n.length > 0 ? "attacher socket" : "$TMUX",
    {
      code: code
    } = await lt("tmux", [...n, "load-buffer", "-w", "-"], o);
  if (t(`clipboard: tmux load-buffer -w - \u2192 exit ${code} (server=${i} LC_TERMINAL=${r})`), code === 0) return !0;
  let u = await lt("tmux", [...n, "load-buffer", "-"], o);
  return t(`clipboard: retry tmux load-buffer - \u2192 exit ${u.code} (server=${i} LC_TERMINAL=${r})`), u.code === 0;
}
var _ = 76;
async function PE(e) {
  let n = M.from(e, "utf8").toString("base64"),
    o = b(),
    r = I(),
    i = !1;
  if (!o) {
    if (r === "linux" && typeof f().tool !== "string") await f().probe();
    i = K(e);
  }
  await Y(e);
  let s = U7t(),
    u = i && (r === "linux" || r === "wsl") && pw.isVteBasedTerminal(C()) || I6(),
    S = u ? "none(vte)" : s === "tmux" ? "raw+dcs" : s === "screen" ? "dcs" : "raw";
  if (t(`clipboard: setClipboard mux=${s ?? "none"} ssh=${o} native=${i} predicted=${Upe()} emit=${S} bytes=${e.length}`), u) return "";
  if (s === "tmux") {
    let c = `${RA}]52;c;${n}${B2}`;
    return c + lM(c);
  }
  if (s === "screen") {
    let c = [];
    for (let p = 0; p < n.length; p += _) c.push(n.slice(p, p + _));
    return `${RA}P${RA}]52;c;${c.join(`${T$n}${RA}P`)}${B2}${T$n}`;
  }
  return nb(Pm.CLIPBOARD, "c", n);
}
var A = "[Console]::InputEncoding = [Text.Encoding]::UTF8; Set-Clipboard -Value ([Console]::In.ReadToEnd())",
  q = "[Console]::OutputEncoding = [Text.Encoding]::UTF8; Get-Clipboard -Raw";
function K(input_2) {
  let n = {
    input: input_2,
    useCwd: !1,
    timeout: 2000
  };
  switch (I()) {
    case "macos":
      return lt("pbcopy", [], n), !0;
    case "linux":
      {
        let o = f();
        if (o.tool === "wl-copy") return V(input_2), !0;
        if (o.tool === "xclip") {
          let r = {
            ...n,
            useToolMemoryCgroup: !1
          };
          return lt("xclip", ["-selection", "clipboard"], r), lt("xclip", ["-selection", "primary"], r), !0;
        }
        if (o.tool === "xsel") {
          let r = {
            ...n,
            useToolMemoryCgroup: !1
          };
          return lt("xsel", ["--clipboard", "--input"], r), lt("xsel", ["--primary", "--input"], r), !0;
        }
        if (o.tool === "addon") {
          let r;
          try {
            r = T()?.setLinuxClipboardText(input_2) === !0;
          } catch {
            r = !1;
          }
          return o.recordAddonWrite(r), o.probe(), r;
        }
        return !1;
      }
    case "wsl":
      return lt("powershell.exe", ["-NoProfile", "-NonInteractive", "-Command", A], n), !0;
    case "windows":
      return lt("powershell", ["-NoProfile", "-NonInteractive", "-Command", A], n), !0;
  }
  return !1;
}
async function V(input_3) {
  let n = f(),
    o = n.beginWaylandCopy(),
    r = {
      input: input_3,
      useCwd: !1,
      timeout: 2000,
      stdout: "ignore",
      stderr: "ignore",
      useToolMemoryCgroup: !1
    };
  if (await lt("wl-copy", [], r), !n.isLatestWaylandCopy(o)) return;
  await lt("wl-copy", ["--primary"], r);
}
async function kIt(e = "clipboard") {
  if (b()) return "";
  let n = {
    useCwd: !1,
    timeout: 2000
  };
  switch (I()) {
    case "macos":
      {
        let o = await lt("pbpaste", [], n);
        return o.code === 0 ? o.stdout : "";
      }
    case "windows":
    case "wsl":
      {
        let o = await lt(I() === "wsl" ? "powershell.exe" : "powershell", ["-NoProfile", "-NonInteractive", "-Command", q], n);
        return o.code === 0 ? o.stdout.replace(/\r\n/g, `
`).replace(/\n$/, "") : "";
      }
    case "linux":
      {
        let o = e === "primary",
          r = [["wl-paste", o ? ["--primary", "--no-newline"] : ["--no-newline"]], ["xclip", ["-selection", o ? "primary" : "clipboard", "-o"]], ["xsel", [o ? "--primary" : "--clipboard", "--output"]]];
        for (let [i, s] of r) {
          let u = await lt(i, [...s], n);
          if (u.code === 0) return u.stdout;
        }
        return (await X(o, n.timeout)) ?? "";
      }
    default:
      return "";
  }
}
async function X(e, n) {
  if (!k()) return null;
  try {
    return (await T()?.getLinuxClipboardText?.(e, n))?.replace(/\r?\n$|\r$/, "") ?? null;
  } catch (error) {
    return t(`clipboard: addon read: ${d(error)}`), null;
  }
}
var Pm = {
  SET_TITLE_AND_ICON: 0,
  SET_ICON: 1,
  SET_TITLE: 2,
  SET_COLOR: 4,
  SET_CWD: 7,
  HYPERLINK: 8,
  ITERM2: 9,
  SET_FG_COLOR: 10,
  SET_BG_COLOR: 11,
  SET_CURSOR_COLOR: 12,
  CLIPBOARD: 52,
  KITTY: 99,
  RESET_COLOR: 104,
  RESET_FG_COLOR: 110,
  RESET_BG_COLOR: 111,
  RESET_CURSOR_COLOR: 112,
  SEMANTIC_PROMPT: 133,
  GHOSTTY: 777,
  ITERM2_PROPRIETARY: 1337,
  PROGRAM_STATUS: 7501,
  TAB_STATUS: 21337
};
function Dws(e) {
  let n = e.indexOf(";"),
    o = n >= 0 ? e.slice(0, n) : e,
    r = n >= 0 ? e.slice(n + 1) : "",
    i = parseInt(o, 10);
  if (i === Pm.SET_TITLE_AND_ICON) return {
    type: "title",
    action: {
      type: "both",
      title: r
    }
  };
  if (i === Pm.SET_ICON) return {
    type: "title",
    action: {
      type: "iconName",
      name: r
    }
  };
  if (i === Pm.SET_TITLE) return {
    type: "title",
    action: {
      type: "windowTitle",
      title: r
    }
  };
  if (i === Pm.HYPERLINK) {
    let s = r.split(";"),
      u = s[0] ?? "",
      url = s.slice(1).join(";");
    if (url === "") return {
      type: "link",
      action: {
        type: "end"
      }
    };
    let c = {};
    if (u) for (let p of u.split(":")) {
      let h = p.indexOf("=");
      if (h >= 0) c[p.slice(0, h)] = p.slice(h + 1);
    }
    return {
      type: "link",
      action: {
        type: "start",
        url: url,
        params: Object.keys(c).length > 0 ? c : void 0
      }
    };
  }
  if (i === Pm.TAB_STATUS) return {
    type: "tabStatus",
    action: J(r)
  };
  return {
    type: "unknown",
    sequence: `\x1B]${e}`
  };
}
function v(e) {
  let n = e.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  if (n) return {
    type: "rgb",
    r: parseInt(n[1], 16),
    g: parseInt(n[2], 16),
    b: parseInt(n[3], 16)
  };
  let o = e.match(/^rgb:([0-9a-f]{1,4})\/([0-9a-f]{1,4})\/([0-9a-f]{1,4})$/i);
  if (o) {
    let r = i => Math.round(parseInt(i, 16) / (16 ** i.length - 1) * 255);
    return {
      type: "rgb",
      r: r(o[1]),
      g: r(o[2]),
      b: r(o[3])
    };
  }
  return null;
}
function J(e) {
  let n = {};
  for (let [o, r] of Z(e)) switch (o) {
    case "indicator":
      n.indicator = r === "" ? null : v(r);
      break;
    case "status":
      n.status = r === "" ? null : r;
      break;
    case "status-color":
      n.statusColor = r === "" ? null : v(r);
      break;
  }
  return n;
}
function* Z(e) {
  let n = "",
    o = "",
    r = !1,
    i = !1;
  for (let s of e) if (i) {
    if (r) o += s;else n += s;
    i = !1;
  } else if (s === "\\") i = !0;else if (s === ";") yield [n, o], n = "", o = "", r = !1;else if (s === "=" && !r) r = !0;else if (r) o += s;else n += s;
  if (n || r) yield [n, o];
}
var regExp = new RegExp(Z2.source, "g");
function Ddt(e, n) {
  let o = e.replace(regExp, "");
  if (!o) return Ldt;
  let r = {
      id: Q(o),
      ...n
    },
    i = Object.entries(r).map(([s, u]) => `${s}=${u}`).join(":");
  return nb(Pm.HYPERLINK, i, o);
}
function Q(e) {
  let n = 0;
  for (let o = 0; o < e.length; o++) n = (n << 5) - n + e.charCodeAt(o) | 0;
  return (n >>> 0).toString(36);
}
var Ldt = nb(Pm.HYPERLINK, "", ""),
  EIt = {
    NOTIFY: 0,
    BADGE: 2,
    PROGRESS: 4
  },
  TIt = {
    CLEAR: 0,
    SET: 1,
    ERROR: 2,
    INDETERMINATE: 3
  },
  A$n = `${x}${Pm.ITERM2};${EIt.PROGRESS};${TIt.CLEAR};${B2}`,
  Pt = `${x}${Pm.SET_TITLE_AND_ICON};${B2}`,
  x$n = nb(Pm.TAB_STATUS, "indicator=;status=;status-color=");
function B7t() {
  return !1;
}
function Lws(e) {
  let n = [],
    o = r => r.type === "rgb" ? `#${[r.r, r.g, r.b].map(item => item.toString(16).padStart(2, "0")).join("")}` : "";
  if ("indicator" in e) n.push(`indicator=${e.indicator ? o(e.indicator) : ""}`);
  if ("status" in e) n.push(`status=${e.status?.replaceAll("\\", "\\\\").replaceAll(";", "\\;") ?? ""}`);
  if ("statusColor" in e) n.push(`status-color=${e.statusColor ? o(e.statusColor) : ""}`);
  return nb(Pm.TAB_STATUS, n.join(";"));
}
var tt = 2048,
  et = 192,
  nt = 32;
function Nws(e) {
  let n = e.replace(/[^A-Za-z0-9_.+-]/g, "-").slice(0, nt);
  return n.length > 0 ? n : void 0;
}
function O(e, n) {
  let o = Khe(e.replace(regExp, " "), n);
  return M.from(o).toString("base64");
}
function Cvr(e) {
  let n = [`state=${e.state}`, "app=claude-code"];
  if (e.id !== void 0) n.push(`id=${e.id}`);
  if (e.state === "blocked" && e.kind) n.push(`kind=${e.kind}`);
  if ((e.state === "working" || e.state === "blocked") && e.progress !== void 0 && Number.isFinite(e.progress)) {
    let o = Math.min(100, Math.max(0, Math.round(e.progress)));
    n.push(`progress=${o}`);
  }
  if (e.title) n.push(`title=${O(e.title, et)}`);
  if (e.msg) n.push(`msg=${O(e.msg, tt)}`);
  return nb(Pm.PROGRAM_STATUS, n.join(":"));
}
var P$n = `${x}${Pm.PROGRAM_STATUS};state=clear${B2}`;
function Fws(e) {
  return nb(Pm.PROGRAM_STATUS, `state=clear:id=${e}`);
}
export { I6, T$n, U7t, Z$e, nb, lM, Upe, C$n, Iws, Mws, R$n, PE, kIt, Pm, Dws, Ddt, Ldt, EIt, TIt, A$n, x$n, B7t, Lws, Nws, Cvr, P$n, Fws, ygo, _go, O$n, ai };