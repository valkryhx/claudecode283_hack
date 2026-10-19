// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { b } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { x, G, Wt } from "B:/~BUN/root/chunk-3aez4b53.js";
import { z, eo } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { _, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { TP, V } from "B:/~BUN/root/chunk-tgzmva3g.js";
import { wde, a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { I, l6s } from "B:/~BUN/root/chunk-je1b1drr.js";
import { Rh } from "B:/~BUN/root/chunk-2efkaa0v.js";
import { tt, E, Ce, ue } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { Oe } from "B:/~BUN/root/chunk-g5gf7tps.js";
import { An } from "B:/~BUN/root/chunk-rvc0n7zm.js";
import { he } from "B:/~BUN/root/chunk-4qqgabd5.js";
import { Bs } from "B:/~BUN/root/chunk-yw21pggd.js";
import { Bo, Mze, efn, C9n, F0e, xBo, IKs } from "B:/~BUN/root/chunk-cqkcn3bx.js";
import { Zc } from "B:/~BUN/root/chunk-xrp58hm9.js";
import { lt } from "B:/~BUN/root/chunk-6ft8yhc8.js";
import { J0e, Lc } from "B:/~BUN/root/chunk-pjgzz98k.js";
import { ea } from "B:/~BUN/root/chunk-53tmhe2j.js";
import { op, s4 } from "B:/~BUN/root/chunk-htbmes7q.js";
import { Dnt, evn, zVe } from "B:/~BUN/root/chunk-2jzp4p89.js";
import { mi, dn, Aa, F$ } from "B:/~BUN/root/chunk-damrp3r8.js";
import { CP, LLe, mce } from "B:/~BUN/root/chunk-1jz9m9yh.js";
import { YLe, QVt } from "B:/~BUN/root/chunk-3xc6vbb9.js";
import { Kl, X8s, J8s, XJt } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { Rbo, VUe, qUe, zen, _fe } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { Ro } from "B:/~BUN/root/chunk-exdm7pa7.js";
import { mY } from "B:/~BUN/root/chunk-pw5vpw1q.js";
import { Q2t, Z2t } from "B:/~BUN/root/chunk-mvgarwbg.js";
import { T4r, oh } from "B:/~BUN/root/chunk-275mme56.js";
import { sh } from "B:/~BUN/root/chunk-44n8zjk2.js";
import { WVt, zVt, SJo, Skn } from "B:/~BUN/root/chunk-em3vcka2.js";
import { uRe, xb, Hkt } from "B:/~BUN/root/chunk-qtwzafn7.js";
import { sNe } from "B:/~BUN/root/chunk-6a5s81az.js";
import { Kn } from "B:/~BUN/root/chunk-dsby0gnt.js";
import { VY, mue, Pds, _oo, Ods } from "B:/~BUN/root/chunk-tx0dq5y3.js";
import { ae, Ee, P, Mo, Z, A, y, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { N } from "B:/~BUN/root/chunk-nkxgam12.js";
import { ua, iQ, pjo } from "B:/~BUN/root/chunk-pp80ffk4.js";
import { ie } from "B:/~BUN/root/chunk-t7350kw8.js";
B();
import { basename as cr, isAbsolute as fr } from "path";
var dr = 50;
function Ct() {
  return Kl(tt());
}
function Ant({
  onPaste: onPaste,
  handleKeyDown: handleKeyDown,
  onImagePaste: onImagePaste
}) {
  let s = dn(),
    o = Ee(TP),
    [isPasting, f] = y(!1),
    d = A(!0),
    S = A(!1),
    T = A(!1),
    [C, R] = y(0),
    D = Z(() => I() === "macos", []),
    J = Z(() => I() === "wsl", []);
  P(() => () => {
    d.current = !1;
  }, []);
  let q = Mo(() => {
    handleKeyDown(new LLe({
      kind: "key",
      name: "return",
      fn: !1,
      ctrl: !1,
      meta: !1,
      shift: !1,
      option: !1,
      super: !1,
      sequence: "\r",
      raw: "\r",
      code: void 0,
      col: void 0,
      row: void 0
    }));
  });
  P(() => {
    if (C === 0) return;
    return s.setTimeout(() => {
      if (S.current = !1, T.current) T.current = !1, q();
    }, 0);
  }, [C, s]);
  let ne = ae(() => {
      if (!onImagePaste || !d.current) return;
      mue(Ct()).then(O => {
        if (O && d.current) onImagePaste(O.base64, {
          mediaType: O.mediaType,
          dimensions: O.dimensions
        });
      }).catch(O => {
        if (d.current) m("input_image_paste", "clipboard_read_failed"), l(O);
      }).finally(() => {
        F();
      });
    }, [onImagePaste]),
    U = F$(ne, dr);
  function H(O) {
    if (onPaste) {
      onPaste(O);
      return;
    }
    handleKeyDown(new LLe({
      kind: "key",
      name: void 0,
      fn: !1,
      ctrl: !1,
      meta: !1,
      shift: !1,
      option: !1,
      super: !1,
      sequence: O,
      raw: O,
      code: void 0,
      col: void 0,
      row: void 0
    }));
  }
  function F() {
    if (!d.current) return;
    S.current = !1, T.current = !1, f(!1);
  }
  function X() {
    f(!1), R(O => O + 1);
  }
  function L(O, K = O.length === 0, te = O.endsWith("[I") || O.endsWith("[O")) {
    S.current = !0;
    let Q = te ? O.replace(/\[[IO]$/, "") : O;
    if (K && (D || J) && onImagePaste) {
      U();
      return;
    }
    let oe = Q.split(/ (?=\/|[A-Za-z]:\\)/).flatMap(item => item.split(`
`)).filter(item => item.trim()),
      M = [],
      Y = [];
    for (let j of oe) if (Pds(j)) M.push(j);else Y.push(j);
    if (onImagePaste && M.length > 0) {
      let j = /\/TemporaryItems\/.*screencaptureui.*\/Screenshot/i.test(Q),
        xe = Ct();
      Promise.all(M.map(item => Ods(item, xe, fe => X8s(fe, () => {
        let de = o?.getState().toolPermissionContext;
        return de ? [de, J8s(de)] : [];
      }, (de, ye) => XJt(de, ye, "person"))))).then(le => {
        if (!d.current) return;
        let fe = le.includes("refused"),
          de = M.every(item => fr(_oo(item) ?? "")),
          ye = le.filter(item => item !== null && item !== "refused");
        if (ye.length > 0) {
          for (let [we, me] of ye.entries()) {
            let filename = cr(me.path);
            onImagePaste(me.base64, {
              mediaType: me.mediaType,
              filename: filename,
              dimensions: me.dimensions,
              sourcePath: me.path,
              continuesGesture: we > 0
            });
          }
          if (Y.length > 0) H(Y.join(`
`));
          F();
        } else if (j && D && !fe && de) U();else p("input_image_drag", fe ? "read_withheld" : "read_failed"), H(Q), F();
      }).catch(le => {
        if (!d.current) return;
        m("input_image_drag", "read_threw"), t(`Image paste read failed: ${le instanceof Error ? le.message : String(le)}`, {
          level: "error"
        }), H(Q), F();
      });
      return;
    }
    H(Q), X();
  }
  function handlePaste(O) {
    O.preventDefault(), f(!0), L(O.text, O.rawEmpty, O.rawEndedWithFocusTail);
  }
  function handleKeyDown_2(O) {
    if (S.current && O.name === "return") {
      O.preventDefault(), T.current = !0;
      return;
    }
    if ((onPaste || onImagePaste) && !O.ctrl && !O.meta && O.key.length > VY && !O.defaultPrevented) {
      O.preventDefault(), f(!0);
      let K = new mce(O.key);
      L(K.text, K.rawEmpty, K.rawEndedWithFocusTail);
      return;
    }
    handleKeyDown(O);
  }
  return {
    handleKeyDown: handleKeyDown_2,
    handlePaste: handlePaste,
    isPasting: isPasting
  };
}
import { randomBytes as Ie } from "crypto";
import { copyFile as De, mkdir as dt, readFile as Le, writeFile as Je } from "fs/promises";
import { homedir as qe, platform as Me } from "os";
import { dirname as mr, join as re } from "path";
var h = `
`,
  We = {
    ghostty: "Ghostty",
    kitty: "Kitty",
    "iTerm.app": "iTerm2",
    WezTerm: "WezTerm",
    WarpTerminal: "Warp",
    "windows-terminal": "Windows Terminal"
  };
function Ze() {
  let e = a.VSCODE_GIT_ASKPASS_MAIN ?? "",
    r = a.PATH ?? "";
  return e.includes(".vscode-server") || e.includes(".cursor-server") || e.includes(".windsurf-server") || e.includes(".devin-server") || r.includes(".vscode-server") || r.includes(".cursor-server") || r.includes(".windsurf-server") || r.includes(".devin-server");
}
function Pnr() {
  if (!a.terminal || !(a.terminal in We)) return null;
  return We[a.terminal] ?? null;
}
function Ye() {
  return "";
}
async function Onr(e, r, n) {
  let s = "",
    o = !0;
  switch (a.terminal) {
    case "Apple_Terminal":
      s = await pr(r, n);
      break;
    case "vscode":
      s = await ct(e, "VSCode", r), s += await ut(e, "VSCode", r), s += await k4r(e, "VSCode", r);
      break;
    case "cursor":
      s = await ct(e, "Cursor", r), s += await ut(e, "Cursor", r), s += await k4r(e, "Cursor", r);
      break;
    case "windsurf":
      s = await ct(e, "Devin Desktop", r), s += await ut(e, "Devin Desktop", r), s += await k4r(e, "Devin Desktop", r);
      break;
    case "alacritty":
      s = await gr(r);
      break;
    case "zed":
      {
        let u = await br(r);
        s = u.message, o = u.installed;
        break;
      }
    case null:
      break;
  }
  return await Ce(u => {
    if (o && _t.includes(a.terminal ?? "")) {
      if (u.shiftEnterKeyBindingInstalled === !0) return u;
      return {
        ...u,
        shiftEnterKeyBindingInstalled: !0
      };
    } else if (a.terminal === "Apple_Terminal") {
      if (u.optionAsMetaKeyInstalled === !0) return u;
      return {
        ...u,
        optionAsMetaKeyInstalled: !0
      };
    }
    return u;
  }, n), s;
}
var vt = 'iTerm2 \u2192 Settings \u2192 General \u2192 Selection \u2192 check "Applications in terminal may access clipboard"';
async function E5s(e) {
  let r = he.dim(vt);
  try {
    let {
      stdout: stdout,
      code: code
    } = await lt("defaults", ["read", "com.googlecode.iterm2", "AllowClipboardAccess"]);
    if (code === 0 && stdout.trim() === "1") return `${Kn("success", e)("iTerm2 clipboard access already enabled")}${h}${h}`;
    let {
      code: code_2
    } = await lt("defaults", ["write", "com.googlecode.iterm2", "AllowClipboardAccess", "-bool", "true"]);
    if (code_2 !== 0) return `${Kn("warning", e)("Couldn't update iTerm2 clipboard setting.")}${h}${r}${h}${h}`;
    return `${Kn("success", e)('Enabled "Applications in terminal may access clipboard" in iTerm2')}${h}${he.dim("Restart iTerm2 for this to take effect. Undo: defaults write com.googlecode.iterm2 AllowClipboardAccess -bool false")}${h}${h}`;
  } catch (error) {
    return l(error), `${Kn("warning", e)("Couldn't update iTerm2 clipboard setting.")}${h}${r}${h}${h}`;
  }
}
function T5s() {
  return ue().shiftEnterKeyBindingInstalled === !0;
}
var _t = ["vscode", "cursor", "windsurf", "alacritty", "zed"];
function cce() {
  if (a.terminal === "Apple_Terminal" && Me() === "darwin") return !0;
  if (a.terminal && a.terminal in We) return !0;
  return _t.includes(a.terminal ?? "") && T5s();
}
function w4r() {
  return ue().hasUsedBackslashReturn === !0;
}
function p9o(e) {
  if (!ue().hasUsedBackslashReturn) Ce(n => ({
    ...n,
    hasUsedBackslashReturn: !0
  }), e);
}
async function ati(e, r, n) {
  if (Me() === "darwin" && a.__CFBundleIdentifier === "com.googlecode.iterm2" && (a.terminal === "iTerm.app" || a.terminal === "tmux" || a.terminal === "screen" || a.terminal === null)) {
    let u = `${await E5s(r.options.theme)}Shift+Enter is natively supported in iTerm2.

No configuration needed. Just use Shift+Enter to add newlines.${Ye()}`;
    return e(u), null;
  }
  if (a.terminal && a.terminal in We) {
    let o = `Shift+Enter is natively supported in ${We[a.terminal]}.

No configuration needed. Just use Shift+Enter to add newlines.${Ye()}`;
    return e(o), null;
  }
  if (!sNe()) {
    let o = a.terminal || "your current terminal",
      u = I(),
      f = "";
    if (u === "macos") f = `   \u2022 macOS: Apple Terminal
`;
    let d = a.LC_TERMINAL === "iTerm2" ? `${h}${h}You appear to be connected from iTerm2 on another machine. For /copy to reach your local clipboard, on that machine open:${h}${he.dim(vt)}` : "",
      S = `Terminal setup cannot be run from ${o}.

This command configures a convenient Shift+Enter shortcut for multi-line prompts.
${he.dim("Note: You can already use backslash (\\\\) + return to add newlines.")}

To set up the shortcut (optional):
1. Exit tmux/screen temporarily
2. Run /terminal-setup directly in one of these terminals:
${f}   \u2022 IDE: VSCode, Cursor, Devin Desktop, Zed
   \u2022 Other: Alacritty
3. Return to tmux/screen - settings will persist

${he.dim("Note: iTerm2, WezTerm, Ghostty, Kitty, Warp, and Windows Terminal support Shift+Enter natively.")}${d}${Ye()}`;
    return e(S), null;
  }
  let s = await Onr(r.session.host, r.options.theme, r.storageV5);
  return e(s + Ye()), null;
}
var Pe = "terminal.integrated.mouseWheelScrollSensitivity",
  recommended = 3,
  ze = "terminal.integrated.gpuAcceleration",
  at = "off";
async function v4r(e) {
  let editor = hr();
  if (!editor || Ze()) return null;
  try {
    let n = await Le(re(await Inr.of(e).pathFor(editor), "settings.json"), {
        encoding: "utf-8"
      }),
      s = F0e(n),
      o = N(s) ? s[Pe] : void 0;
    return {
      editor: editor,
      sensitivity: typeof o === "number" ? o : null,
      recommended: recommended
    };
  } catch (error) {
    if (!Wt(error)) l(error);
    return {
      editor: editor,
      sensitivity: null,
      recommended: recommended
    };
  }
}
function hr() {
  switch (a.terminal) {
    case "vscode":
      return "VSCode";
    case "cursor":
      return "Cursor";
    case "windsurf":
      return "Devin Desktop";
    default:
      return null;
  }
}
class Pt {
  pathFor = eo(async e => {
    let r = n => re(qe(), Me() === "win32" ? re("AppData", "Roaming", n, "User") : Me() === "darwin" ? re("Library", "Application Support", n, "User") : re(".config", n, "User"));
    if (e === "VSCode") return r("Code");
    if (e === "Devin Desktop") {
      let n = r("Devin");
      return (await Zc(n)) ? n : r("Windsurf");
    }
    return r(e);
  }, e => `${e}:${qe()}`);
}
var Inr = new z(() => new Pt());
async function ut(e, r, n) {
  let s = he.dim(`For smoother scrolling, set "${Pe}": ${recommended} in ${r} settings.`);
  if (Ze()) return `${s}${h}`;
  let o = re(await Inr.of(e).pathFor(r), "settings.json");
  try {
    let u = "{}",
      f = !1;
    try {
      u = await Le(o, {
        encoding: "utf-8"
      }), f = !0;
    } catch (error) {
      if (!Wt(error)) throw error;
    }
    let d = F0e(u);
    if (!N(d)) return `${Kn("warning", n)(`${r} settings.json isn't a JSON object; not modifying it.`)}${h}${s}${h}`;
    if (Pe in d) return `${Kn("success", n)(`${r} ${Pe} already set; leaving as-is`)}${h}${he.dim(`See ${o}`)}${h}`;
    let S = xBo(u, Pe, recommended);
    if (S === u) return `${Kn("warning", n)(`Couldn't update ${r} settings.json.`)}${h}${s}${h}`;
    if (f) {
      let T = `${o}.${Ie(4).toString("hex")}.bak`;
      try {
        await De(o, T);
      } catch {
        return `${Kn("warning", n)(`Couldn't back up ${r} settings.json; not modifying it.`)}${h}${s}${h}`;
      }
    }
    return await Je(o, S, {
      encoding: "utf-8"
    }), `${Kn("success", n)(`Set ${r} terminal scroll sensitivity to ${recommended}`)}${h}${he.dim(`See ${o}`)}${h}`;
  } catch (error) {
    return t(`Couldn't update ${r} settings.json at ${o}: ${error instanceof Error ? error.message : String(error)}`, {
      level: "error"
    }), `${Kn("warning", n)(`Couldn't update ${r} settings.json.`)}${h}${s}${h}`;
  }
}
async function k4r(e, r, n) {
  let s = he.dim(`To fix garbled text, set "${ze}": "${at}" in ${r} settings (undo: set it back to "auto").`);
  if (Ze()) return p("terminal_setup_gpu_accel", "remote_ssh"), `${s}${h}`;
  let o = re(await Inr.of(e).pathFor(r), "settings.json");
  try {
    let u = "{}",
      f = !1;
    try {
      u = await Le(o, {
        encoding: "utf-8"
      }), f = !0;
    } catch (error) {
      if (!Wt(error)) throw error;
    }
    let d = F0e(u);
    if (!N(d)) return p("terminal_setup_gpu_accel", "not_json_object"), `${Kn("warning", n)(`${r} settings.json isn't a JSON object; not modifying it.`)}${h}${s}${h}`;
    if (d[ze] === at) return g("terminal_setup_gpu_accel"), `${Kn("success", n)(`${r} GPU acceleration already off; leaving as-is`)}${h}${he.dim(`See ${o}`)}${h}`;
    let S = xBo(u, ze, at);
    if (S === u) return p("terminal_setup_gpu_accel", "write_failed"), `${Kn("warning", n)(`Couldn't update ${r} settings.json.`)}${h}${s}${h}`;
    if (f) {
      let T = `${o}.${Ie(4).toString("hex")}.bak`;
      try {
        await De(o, T);
      } catch {
        return p("terminal_setup_gpu_accel", "backup_failed"), `${Kn("warning", n)(`Couldn't back up ${r} settings.json; not modifying it.`)}${h}${s}${h}`;
      }
    }
    return await Je(o, S, {
      encoding: "utf-8"
    }), g("terminal_setup_gpu_accel"), `${Kn("success", n)(`Turned off ${r} GPU acceleration to fix garbled text`)}${h}${he.dim(`Reload the ${r} window to apply. Undo: set "${ze}" back to "auto".`)}${h}${he.dim(`See ${o}`)}${h}`;
  } catch (error) {
    return p("terminal_setup_gpu_accel", "write_failed"), t(`Couldn't update ${r} settings.json at ${o}: ${error instanceof Error ? error.message : String(error)}`, {
      level: "error"
    }), `${Kn("warning", n)(`Couldn't update ${r} settings.json.`)}${h}${s}${h}`;
  }
}
async function ct(e, r = "VSCode", n) {
  if (Ze()) return `${Kn("warning", n)(`Cannot install keybindings from a remote ${r} session.`)}${h}${h}${r} keybindings must be installed on your local machine, not the remote server.${h}${h}To install the Shift+Enter keybinding:${h}1. Open ${r} on your local machine (not connected to remote)${h}2. Open the Command Palette (Cmd/Ctrl+Shift+P) \u2192 "Preferences: Open Keyboard Shortcuts (JSON)"${h}3. Add this keybinding (the file must be a JSON array):${h}${h}${he.dim(`[
  {
    "key": "shift+enter",
    "command": "workbench.action.terminal.sendSequence",
    "args": { "text": "\\u001b\\r" },
    "when": "terminalFocus"
  }
]`)}${h}`;
  let s = await Inr.of(e).pathFor(r),
    o = re(s, "keybindings.json");
  try {
    await dt(s, {
      recursive: !0
    });
    let u = "[]",
      f = [],
      d = !1;
    try {
      u = await Le(o, {
        encoding: "utf-8"
      }), d = !0, f = F0e(u) ?? [];
    } catch (error) {
      if (!Wt(error)) throw error;
    }
    if (d) {
      let R = Ie(4).toString("hex"),
        D = `${o}.${R}.bak`;
      try {
        await De(o, D);
      } catch {
        return `${Kn("warning", n)(`Error backing up existing ${r} terminal keybindings. Bailing out.`)}${h}${he.dim(`See ${o}`)}${h}${he.dim(`Backup path: ${D}`)}${h}`;
      }
    }
    let S = {
        key: "shift+enter",
        command: "workbench.action.terminal.sendSequence",
        args: {
          text: "\x1B\r"
        },
        when: "terminalFocus"
      },
      T = f.find(item => item.key === S.key && item.command === S.command && item.when === S.when);
    if (T) {
      let R = he.dim(`See ${o}`);
      if (T.args?.text === S.args.text) return `${Kn("success", n)(`${r} terminal Shift+Enter key binding already configured`)}${h}${R}${h}`;
      return `${Kn("warning", n)(`${r} already has a Shift+Enter terminal binding with different args; leaving it as-is.`)}${h}${R}${h}`;
    }
    let C = IKs(u, S);
    return await Je(o, C, {
      encoding: "utf-8"
    }), `${Kn("success", n)(`Installed ${r} terminal Shift+Enter key binding`)}${h}${he.dim(`See ${o}`)}${h}`;
  } catch (error) {
    throw t(`Failed to install ${r} terminal Shift+Enter keybinding: ${error instanceof Error ? error.message : String(error)}`, {
      level: "error"
    }), Error(`Failed to install ${r} terminal Shift+Enter key binding`);
  }
}
async function $t(e) {
  let {
    code: code_3
  } = await lt("/usr/libexec/PlistBuddy", ["-c", `Add :'Window Settings':'${e}':useOptionAsMetaKey bool true`, zVt()]);
  if (code_3 !== 0) {
    let {
      code: code_4
    } = await lt("/usr/libexec/PlistBuddy", ["-c", `Set :'Window Settings':'${e}':useOptionAsMetaKey true`, zVt()]);
    if (code_4 !== 0) return t(`Failed to enable Option as Meta key for Terminal.app profile: ${e}`, {
      level: "error"
    }), !1;
  }
  return !0;
}
async function Lt(e) {
  let {
    code: code_5
  } = await lt("/usr/libexec/PlistBuddy", ["-c", `Add :'Window Settings':'${e}':Bell bool false`, zVt()]);
  if (code_5 !== 0) {
    let {
      code: code_6
    } = await lt("/usr/libexec/PlistBuddy", ["-c", `Set :'Window Settings':'${e}':Bell false`, zVt()]);
    if (code_6 !== 0) return t(`Failed to disable audio bell for Terminal.app profile: ${e}`, {
      level: "error"
    }), !1;
  }
  return !0;
}
async function pr(e, r) {
  let n = (l6s() ?? 0) >= 27,
    s = op();
  if (n && s) return `${Kn("success", e)("No Terminal.app changes needed.")}${h}${he.dim("Shift+Return already enters a newline on this macOS version, and screen-reader mode leaves the audible bell setting unchanged.")}${h}`;
  try {
    if (!(await SJo(r))) throw Error("Failed to create backup of Terminal.app preferences, bailing out");
    let {
      stdout: stdout_2,
      code: code_7
    } = await lt("defaults", ["read", "com.apple.Terminal", "Default Window Settings"]);
    if (code_7 !== 0 || !stdout_2.trim()) throw Error("Failed to read default Terminal.app profile");
    let {
      stdout: stdout_3,
      code: code_8
    } = await lt("defaults", ["read", "com.apple.Terminal", "Startup Window Settings"]);
    if (code_8 !== 0 || !stdout_3.trim()) throw Error("Failed to read startup Terminal.app profile");
    let T = !1,
      C = stdout_2.trim(),
      R = n ? !1 : await $t(C),
      D = s ? !1 : await Lt(C);
    if (R || D) T = !0;
    let J = stdout_3.trim();
    if (J !== C) {
      let U = n ? !1 : await $t(J),
        H = s ? !1 : await Lt(J);
      if (U || H) T = !0;
    }
    if (!T) {
      if (n) throw Error("Failed to disable audio bell for any Terminal.app profile");
      if (s) throw Error("Failed to enable Option as Meta key for any Terminal.app profile");
      throw Error("Failed to enable Option as Meta key or disable audio bell for any Terminal.app profile");
    }
    await lt("killall", ["cfprefsd"]), await WVt(r);
    let q = [Kn("success", e)("Configured Terminal.app settings:")];
    if (!n) q.push(Kn("success", e)('- Enabled "Use Option as Meta key"'));
    if (!s) q.push(Kn("success", e)("- Disabled the audible bell"));else q.push(he.dim("- Left the audible bell setting unchanged (screen-reader mode uses it)"));
    let ne = n ? he.dim("Shift+Return will now enter a newline.") : he.dim("Option+Enter will now enter a newline.");
    return `${q.join(h)}${h}${ne}${h}${he.dim("You must restart Terminal.app for changes to take effect.")}${h}`;
  } catch (error) {
    t(`Terminal.app setup failed: ${error instanceof Error ? error.message : String(error)}`, {
      level: "error"
    });
    let u = await Skn(r),
      f = n ? "Failed to disable the audio bell for Terminal.app." : "Failed to enable Option as Meta key for Terminal.app.";
    if (u.status === "restored") throw Error(`${f} Your settings have been restored from backup.`);else if (u.status === "failed") throw Error(`${f} Restoring from backup failed, try manually with: defaults import com.apple.Terminal ${u.backupPath}`);else throw Error(`${f} No backup was available to restore from.`);
  }
}
async function gr(e) {
  let n = [],
    XDG_CONFIG_HOME = a.XDG_CONFIG_HOME;
  if (XDG_CONFIG_HOME) n.push(re(XDG_CONFIG_HOME, "alacritty", "alacritty.toml"));else n.push(re(qe(), ".config", "alacritty", "alacritty.toml"));
  if (Me() === "win32") {
    let APPDATA = a.APPDATA;
    if (APPDATA) n.push(re(APPDATA, "alacritty", "alacritty.toml"));
  }
  let o = null,
    u = "",
    f = !1;
  for (let d of n) try {
    u = await Le(d, {
      encoding: "utf-8"
    }), o = d, f = !0;
    break;
  } catch (error) {
    if (!Wt(error)) throw error;
  }
  if (!o) o = n[0] ?? null;
  if (!o) throw Error("No valid config path found for Alacritty");
  try {
    if (f) {
      if (u.includes('mods = "Shift"') && u.includes('key = "Return"')) return `${Kn("success", e)("Alacritty Shift+Enter key binding already configured")}${h}${he.dim(`See ${o}`)}${h}`;
      let S = Ie(4).toString("hex"),
        T = `${o}.${S}.bak`;
      try {
        await De(o, T);
      } catch {
        return `${Kn("warning", e)("Error backing up existing Alacritty config. Bailing out.")}${h}${he.dim(`See ${o}`)}${h}${he.dim(`Backup path: ${T}`)}${h}`;
      }
    } else await dt(mr(o), {
      recursive: !0
    });
    let d = u;
    if (u && !u.endsWith(`
`)) d += `
`;
    return d += `
[[keyboard.bindings]]
key = "Return"
mods = "Shift"
chars = "\\u001B\\r"
`, await Je(o, d, {
      encoding: "utf-8"
    }), `${Kn("success", e)("Installed Alacritty Shift+Enter key binding")}${h}${Kn("success", e)("You may need to restart Alacritty for changes to take effect")}${h}${he.dim(`See ${o}`)}${h}`;
  } catch (error) {
    throw t(`Failed to install Alacritty keybinding: ${error instanceof Error ? error.message : String(error)}`, {
      level: "error"
    }), Error("Failed to install Alacritty Shift+Enter key binding");
  }
}
var ft = ["terminal::SendText", "\x1B\r"];
function kt(e) {
  return N(e) && e.context === "Terminal" && N(e.bindings) && "shift-enter" in e.bindings;
}
async function br(e) {
  let r = I() === "linux" ? a.XDG_CONFIG_HOME : void 0,
    n = r ? re(r, "zed") : re(qe(), ".config", "zed"),
    s = re(n, "keymap.json"),
    o = he.dim(`See ${s}`),
    u = he.dim(`To add the binding yourself, add this block to the keymap array in ${s}:${h}{ "context": "Terminal", "bindings": { "shift-enter": ["terminal::SendText", "\\u001b\\r"] } }`),
    message_2 = `${Kn("success", e)("Installed Zed Shift+Enter key binding")}${h}${o}${h}`,
    message = `${Kn("warning", e)("Couldn't read your Zed keymap, so it was left unchanged.")}${h}${u}${h}`,
    message_3 = `${Kn("warning", e)("Your Zed keymap isn't a readable list of keybindings, so it was left unchanged.")}${h}${u}${h}`;
  try {
    await dt(n, {
      recursive: !0
    });
    let T = null;
    try {
      T = await Le(s, {
        encoding: "utf-8"
      });
    } catch (error) {
      if (!Wt(error)) throw error;
      if (!G(error)) return {
        message: message,
        installed: !1
      };
    }
    if (T === null || Bo(T).trim() === "") return await An(s, _([{
      context: "Terminal",
      bindings: {
        "shift-enter": ft
      }
    }], null, 2) + `
`), {
      message: message_2,
      installed: !0
    };
    let C = [],
      R = Bo(T),
      D = Mze(R, C, {
        allowTrailingComma: !0
      });
    if (C.length > 0 || !Array.isArray(D)) return {
      message: message_3,
      installed: !1
    };
    if (D.some(kt)) return {
      message: `${Kn("success", e)("Zed Shift+Enter key binding already configured")}${h}${o}${h}`,
      installed: !0
    };
    let J = Ie(4).toString("hex"),
      q = `${s}.${J}.bak`;
    try {
      await De(s, q);
    } catch (error) {
      return t(`Failed to back up Zed keymap: ${error instanceof Error ? error.message : String(error)}`, {
        level: "error"
      }), {
        message: `${Kn("warning", e)("Couldn't back up your Zed keymap; not modifying it.")}${h}${u}${h}`,
        installed: !1
      };
    }
    let ne = D.findIndex(item => N(item) && item.context === "Terminal" && N(item.bindings)),
      formattingOptions = {
        insertSpaces: !0,
        tabSize: 2
      },
      H = null;
    try {
      let L = ne >= 0 ? efn(R, [ne, "bindings", "shift-enter"], ft, {
        formattingOptions: formattingOptions
      }) : efn(R, [D.length], {
        context: "Terminal",
        bindings: {
          "shift-enter": ft
        }
      }, {
        formattingOptions: formattingOptions,
        isArrayInsertion: !0
      });
      H = L.length > 0 ? C9n(R, L) : null;
    } catch (error) {
      t(`Failed to edit Zed keymap: ${error instanceof Error ? error.message : String(error)}`, {
        level: "error"
      });
    }
    let F = [],
      X = H === null ? null : Mze(H, F, {
        allowTrailingComma: !0
      });
    if (H === null || F.length > 0 || !Array.isArray(X) || !X.some(kt)) return {
      message: `${Kn("warning", e)("Couldn't update your Zed keymap, so it was left unchanged.")}${h}${u}${h}`,
      installed: !1
    };
    return await An(s, H), {
      message: message_2,
      installed: !0
    };
  } catch (error) {
    throw t(`Failed to install Zed Shift+Enter key binding: ${error instanceof Error ? error.message : String(error)}`, {
      level: "error"
    }), Error("Failed to install Zed Shift+Enter key binding");
  }
}
var Qe = /[\u001b\u0080-\u009f]/g,
  Rt = "\u2060";
function It(e, r, n = Lc) {
  let s = e.search(Qe) === -1 ? e : wr(e),
    o = n(s, r, {
      hard: !0,
      trim: !1
    }).split(`
`),
    rows = [],
    startOffset = 0,
    isPrecededByNewline = !0;
  for (let S of o) {
    if (!s.startsWith(S, startOffset)) return {
      rows: Mt(e, r),
      degraded: !0
    };
    let T = startOffset + S.length,
      C = s.startsWith(`\r
`, T) ? 2 : s[T] === `
` || s[T] === "\r" ? 1 : 0;
    rows.push({
      text: e.slice(startOffset, T),
      startOffset: startOffset,
      isPrecededByNewline: isPrecededByNewline,
      endsWithNewline: C > 0
    }), isPrecededByNewline = C > 0, startOffset = T + C;
  }
  return startOffset === e.length ? {
    rows: rows,
    degraded: !1
  } : {
    rows: Mt(e, r),
    degraded: !0
  };
}
function wr(e) {
  let r = J0e();
  return e.split(`
`).map(item => item.search(Qe) === -1 ? item : item.split("\r").map(item => item.search(Qe) === -1 ? item : [...r.feed(item), ...r.flush()].map(item => item.type === "sequence" ? Rt.repeat(item.value.length) : item.value.replace(Qe, Rt)).join("")).join("\r")).join(`
`);
}
function Mt(e, r) {
  let n = [],
    s = 0;
  for (let o of e.split(/\r\n|[\n\r]/)) {
    let u = 0,
      f = 0;
    for (let {
      segment: segment,
      index: index
    } of ua().segment(o)) {
      let R = ie(segment);
      if (f + R > r && index > u) n.push({
        text: o.slice(u, index),
        startOffset: s + u,
        isPrecededByNewline: u === 0,
        endsWithNewline: !1
      }), u = index, f = 0;
      f += R;
    }
    let d = s + o.length,
      S = e.startsWith(`\r
`, d) ? 2 : d < e.length ? 1 : 0;
    n.push({
      text: o.slice(u),
      startOffset: s + u,
      isPrecededByNewline: u === 0,
      endsWithNewline: S > 0
    }), s = d + S;
  }
  return n;
}
var xr = /^[\p{L}\p{N}\p{M}_]+$/u,
  yr = /[\p{L}\p{N}][\p{L}\p{N}\p{M}]*/gu,
  ke = /\s/,
  mt = "(?:\\[(?:Pasted text|Image|\\.\\.\\.Truncated text|\u2726 Team setup guide) #\\d+(?: \\+\\d+ lines)?\\.*\\]|\\[\u29C9 [^\\]\\n]+\\])",
  regExp = new RegExp(mt + "$"),
  regExp_2 = new RegExp("^" + mt),
  f9o = (e, r) => e[r] === "[" && regExp_2.test(e.slice(r)),
  regExp_3 = new RegExp(mt, "g");
function m9o(e) {
  return e.replace(regExp_3, r => " ".repeat(r.length));
}
var jVe = e => xr.test(e),
  Cnt = e => ke.test(e),
  Rnt = e => e.length > 0 && !Cnt(e) && !jVe(e);
class fi {
  measuredText;
  selection;
  offset;
  constructor(e, r = 0, n = 0) {
    this.measuredText = e;
    this.selection = n;
    this.offset = Math.max(0, Math.min(this.text.length, r));
  }
  static fromText(e, r, n = 0, s = 0) {
    return new fi(new Ht(e, r - 1), n, s);
  }
  getViewportStartLine(e) {
    if (e === void 0 || e <= 0) return 0;
    let {
        line: line
      } = this.getPosition(),
      n = this.measuredText.getWrappedText();
    if (n.length <= e) return 0;
    let s = Math.floor(e / 2),
      o = Math.max(0, line - s),
      u = Math.min(n.length, o + e);
    if (u - o < e) o = Math.max(0, u - e);
    return o;
  }
  getRenderedRowStartOffsets(e) {
    let {
      startLine: startLine,
      endLine: endLine
    } = this.getViewportLineRange(e);
    return this.measuredText.getWrappedLines().slice(startLine, endLine).map(item => item.displayStartOffset);
  }
  getViewportLineRange(e) {
    let r = this.measuredText.getWrappedLines().length,
      startLine_2 = this.getViewportStartLine(e),
      endLine_2 = e !== void 0 && e > 0 ? Math.min(r, startLine_2 + e) : r;
    return {
      startLine: startLine_2,
      endLine: endLine_2
    };
  }
  render(e, r, n, s, o, u, f, d, S) {
    let T = this.measuredText.getWrappedLines(),
      {
        startLine: startLine_3,
        endLine: endLine_3
      } = this.getViewportLineRange(o);
    if (u !== void 0) {
      let U = Math.min(u, this.offset),
        H = Math.max(u, this.offset),
        F = f ? this.findLogicalLineStart(U) : U,
        X = f ? this.findLogicalLineEnd(H) : this.measuredText.nextOffset(H);
      return T.slice(startLine_3, endLine_3).map((item, index) => {
        let be = (d ?? !1) && (item.endsWithNewline || index + startLine_3 === T.length - 1),
          {
            displayText: displayText,
            displayStartOffset: K
          } = item,
          te = K + displayText.length;
        if (X <= K || F >= te) {
          if (K === te && F <= K && (f ? X >= te : X > te)) return d ?? !1 ? "" : n(" ");
          return be ? displayText : displayText.trimEnd();
        }
        if (K === te) return d ?? !1 ? "" : n(" ");
        let Q = Math.max(0, F - K),
          to_2 = Math.min(displayText.length, X - K);
        if (d ?? !1) {
          let M = be ? displayText : displayText.trimEnd(),
            Y = Math.min(Q, M.length),
            to = Math.min(to_2, M.length);
          return M.slice(0, Y) + Dt(M, {
            from: Y,
            to: to
          }, n, {
            spans: S ?? [],
            rowStart: K
          }) + M.slice(to);
        }
        return displayText.slice(0, Q) + Dt(displayText, {
          from: Q,
          to: to_2
        }, n, {
          spans: S ?? [],
          rowStart: K
        }) + displayText.slice(to_2).trimEnd();
      }).join(`
`);
    }
    let {
        line: line_2,
        column: column
      } = this.getPosition(),
      q = this.measuredText.getWrappedText(),
      ne = this.measuredText.getWrappedLines();
    return q.slice(startLine_3, endLine_3).map((item, H) => {
      let F = H + startLine_3,
        X = (d ?? !1) && ((ne[F]?.endsWithNewline ?? !1) || F === q.length - 1),
        L = item;
      if (r) {
        let M = Array.from(ua().segment(item));
        if (F === q.length - 1) {
          let Y = Math.min(6, M.length),
            j = M.length - Y,
            xe = M.length > Y ? M[j].index : 0;
          L = r.repeat(j) + item.slice(xe);
        } else L = r.repeat(M.length);
      }
      if (line_2 !== F) return X ? L : L.trimEnd();
      let ce = "",
        be = e,
        O = "",
        K = 0,
        te = !1;
      for (let {
        segment: segment_2
      } of ua().segment(L)) {
        if (te) {
          O += segment_2;
          continue;
        }
        let Y = K + ie(segment_2);
        if (Y > column) be = segment_2, te = !0;else K = Y, ce += segment_2;
      }
      let Q,
        oe = "";
      if (s && F === q.length - 1 && this.isAtEnd() && s.text.length > 0) {
        let M = iQ(s.text) || s.text[0];
        Q = e ? n(M) : M;
        let Y = s.text.slice(M.length);
        if (Y.length > 0) oe = s.dim(Y);
      } else Q = e ? n(be) : be;
      if (d && !X && e === "") return (ce + Q + oe + O).trimEnd();
      return ce + Q + oe + (X ? O : O.trimEnd());
    }).join(`
`);
  }
  left() {
    if (this.offset === 0) return this;
    let e = this.placeholderEndingAt(this.offset);
    if (e) return new fi(this.measuredText, e.start);
    let r = this.measuredText.prevOffset(this.offset);
    return new fi(this.measuredText, r);
  }
  right() {
    if (this.offset >= this.text.length) return this;
    let e = this.placeholderStartingAt(this.offset);
    if (e) return new fi(this.measuredText, e.end);
    let r = this.measuredText.nextOffset(this.offset);
    return new fi(this.measuredText, Math.min(r, this.text.length));
  }
  placeholderEndingAt(end) {
    if (this.text[end - 1] !== "]") return null;
    let r = this.text.slice(0, end).match(regExp);
    return r ? {
      start: end - r[0].length,
      end: end
    } : null;
  }
  placeholderStartingAt(start) {
    if (this.text[start] !== "[") return null;
    let r = this.text.slice(start).match(regExp_2);
    return r ? {
      start: start,
      end: start + r[0].length
    } : null;
  }
  placeholderContaining(e) {
    for (let r of this.text.matchAll(regExp_3)) {
      let n = r.index,
        end_2 = n + r[0].length;
      if (e > n && e < end_2) return {
        start: n,
        end: end_2
      };
      if (n >= e) break;
    }
    return null;
  }
  snapOutOfPlaceholder(e, r) {
    let n = this.placeholderContaining(e);
    if (!n) return e;
    return r === "start" ? n.start : n.end;
  }
  up() {
    let {
      line: line_3,
      column: column_2
    } = this.getPosition();
    if (line_3 === 0) return this;
    let n = this.measuredText.getWrappedText()[line_3 - 1];
    if (n === void 0) return this;
    let column_3 = ie(n);
    if (column_2 > column_3) {
      let u = this.getOffset({
        line: line_3 - 1,
        column: column_3
      });
      return new fi(this.measuredText, u, 0);
    }
    let o = this.getOffset({
      line: line_3 - 1,
      column: column_2
    });
    return new fi(this.measuredText, o, 0);
  }
  down() {
    let {
      line: line_4,
      column: column_4
    } = this.getPosition();
    if (line_4 >= this.measuredText.lineCount - 1) return this;
    let n = this.measuredText.getWrappedText()[line_4 + 1];
    if (n === void 0) return this;
    let column_5 = ie(n);
    if (column_4 > column_5) {
      let u = this.getOffset({
        line: line_4 + 1,
        column: column_5
      });
      return new fi(this.measuredText, u, 0);
    }
    let o = this.getOffset({
      line: line_4 + 1,
      column: column_4
    });
    return new fi(this.measuredText, o, 0);
  }
  startOfCurrentLine() {
    let {
      line: line_5
    } = this.getPosition();
    return new fi(this.measuredText, this.getOffset({
      line: line_5,
      column: 0
    }), 0);
  }
  startOfLine() {
    let {
      line: line_6,
      column: column_6
    } = this.getPosition();
    if (column_6 === 0 && line_6 > 0) return new fi(this.measuredText, this.getOffset({
      line: line_6 - 1,
      column: 0
    }), 0);
    return this.startOfCurrentLine();
  }
  firstNonBlankInLine() {
    let {
        line: line_7
      } = this.getPosition(),
      n = (this.measuredText.getWrappedText()[line_7] || "").match(/^\s*\S/),
      column_7 = n?.index ? n.index + n[0].length - 1 : 0,
      o = this.getOffset({
        line: line_7,
        column: column_7
      });
    return new fi(this.measuredText, o, 0);
  }
  endOfLine() {
    let {
        line: line_8,
        column: column_8
      } = this.getPosition(),
      column_10 = this.measuredText.getLineLength(line_8);
    if (column_8 >= column_10 && line_8 < this.measuredText.lineCount - 1) {
      let column_9 = this.measuredText.getLineLength(line_8 + 1),
        u = this.getOffset({
          line: line_8 + 1,
          column: column_9
        });
      return new fi(this.measuredText, u, 0);
    }
    let s = this.getOffset({
      line: line_8,
      column: column_10
    });
    return new fi(this.measuredText, s, 0);
  }
  findLogicalLineStart(e = this.offset) {
    if (e === 0) return 0;
    let r = this.text.lastIndexOf(`
`, e - 1);
    return r === -1 ? 0 : r + 1;
  }
  findLogicalLineEnd(e = this.offset) {
    let r = this.text.indexOf(`
`, e);
    return r === -1 ? this.text.length : r;
  }
  getLogicalLineBounds() {
    return {
      start: this.findLogicalLineStart(),
      end: this.findLogicalLineEnd()
    };
  }
  createCursorWithColumn(e, r, n) {
    let s = r - e,
      o = Math.min(n, s),
      u = e + o,
      f = this.measuredText.snapToGraphemeBoundary(u);
    return new fi(this.measuredText, f, 0);
  }
  endOfLogicalLine() {
    return new fi(this.measuredText, this.findLogicalLineEnd(), 0);
  }
  lastCharInLogicalLine() {
    let e = this.findLogicalLineStart(),
      r = this.findLogicalLineEnd(),
      n = r > e ? this.measuredText.prevOffset(r) : e;
    return new fi(this.measuredText, n, 0);
  }
  startOfLogicalLine() {
    return new fi(this.measuredText, this.findLogicalLineStart(), 0);
  }
  firstNonBlankInLogicalLine() {
    let {
        start: start_2,
        end: end_3
      } = this.getLogicalLineBounds(),
      s = this.text.slice(start_2, end_3).match(/\S/),
      o = start_2 + (s?.index ?? 0);
    return new fi(this.measuredText, o, 0);
  }
  upLogicalLine() {
    let {
      start: start_3
    } = this.getLogicalLineBounds();
    if (start_3 === 0) return new fi(this.measuredText, 0, 0);
    let r = this.offset - start_3,
      n = start_3 - 1,
      s = this.findLogicalLineStart(n);
    return this.createCursorWithColumn(s, n, r);
  }
  downLogicalLine() {
    let {
      start: start_4,
      end: end_4
    } = this.getLogicalLineBounds();
    if (end_4 >= this.text.length) return new fi(this.measuredText, this.text.length, 0);
    let n = this.offset - start_4,
      s = end_4 + 1,
      o = this.findLogicalLineEnd(s);
    return this.createCursorWithColumn(s, o, n);
  }
  forwardWord() {
    if (this.isAtEnd()) return this;
    let e = this.placeholderStartingAt(this.offset) ?? this.placeholderContaining(this.offset);
    if (e) return new fi(this.measuredText, e.end);
    for (let r of this.measuredText.getReadlineWordBoundaries()) if (r.end > this.offset) {
      let n = this.snapOutOfPlaceholder(r.end, "end");
      return new fi(this.measuredText, n);
    }
    return new fi(this.measuredText, this.text.length);
  }
  backwardWord() {
    if (this.isAtStart()) return this;
    let e = this.placeholderEndingAt(this.offset) ?? this.placeholderContaining(this.offset);
    if (e) return new fi(this.measuredText, e.start);
    let r = this.measuredText.getReadlineWordBoundaries();
    for (let n = r.length - 1; n >= 0; n--) {
      let s = r[n];
      if (s.start < this.offset) {
        let o = this.snapOutOfPlaceholder(s.start, "start");
        return new fi(this.measuredText, o);
      }
    }
    return new fi(this.measuredText, 0);
  }
  killWord() {
    let e = this.forwardWord();
    if (e.offset === this.offset) return {
      cursor: this,
      killed: ""
    };
    return this.killRange(this.offset, e.offset);
  }
  backwardKillWord() {
    let e = this.backwardWord();
    if (e.offset === this.offset) return {
      cursor: this,
      killed: ""
    };
    return this.killRange(e.offset, this.offset);
  }
  nextVimWord() {
    if (this.isAtEnd()) return this;
    let e = this.placeholderStartingAt(this.offset) ?? this.placeholderContaining(this.offset);
    if (e) {
      let o = e.end;
      while (o < this.text.length && ke.test(this.graphemeAt(o))) o = this.measuredText.nextOffset(o);
      return new fi(this.measuredText, o);
    }
    let offset = this.offset,
      n = o => this.measuredText.nextOffset(o),
      s = this.graphemeAt(offset);
    if (!s) return this;
    if (jVe(s)) while (offset < this.text.length && jVe(this.graphemeAt(offset))) offset = n(offset);else if (Rnt(s)) while (offset < this.text.length && Rnt(this.graphemeAt(offset))) offset = n(offset);
    while (offset < this.text.length && ke.test(this.graphemeAt(offset))) offset = n(offset);
    return new fi(this.measuredText, this.snapOutOfPlaceholder(offset, "end"));
  }
  endOfVimWord() {
    if (this.isAtEnd()) return this;
    let e = this.placeholderStartingAt(this.offset) ?? this.placeholderContaining(this.offset);
    if (e && this.offset < e.end - 1) return new fi(this.measuredText, e.end - 1);
    let r = this.text,
      offset_2 = this.offset,
      s = f => this.measuredText.nextOffset(f);
    if (this.graphemeAt(offset_2) === "") return this;
    offset_2 = s(offset_2);
    while (offset_2 < r.length && ke.test(this.graphemeAt(offset_2))) offset_2 = s(offset_2);
    if (offset_2 >= r.length) return new fi(this.measuredText, r.length);
    let o = this.graphemeAt(offset_2);
    if (jVe(o)) while (offset_2 < r.length) {
      let f = s(offset_2);
      if (f >= r.length || !jVe(this.graphemeAt(f))) break;
      offset_2 = f;
    } else if (Rnt(o)) while (offset_2 < r.length) {
      let f = s(offset_2);
      if (f >= r.length || !Rnt(this.graphemeAt(f))) break;
      offset_2 = f;
    }
    let u = this.placeholderStartingAt(offset_2) ?? this.placeholderContaining(offset_2);
    if (u) offset_2 = u.end - 1;
    return new fi(this.measuredText, offset_2);
  }
  prevVimWord() {
    if (this.isAtStart()) return this;
    let e = this.placeholderEndingAt(this.offset);
    if (e) return new fi(this.measuredText, e.start);
    let r = this.placeholderContaining(this.offset);
    if (r) return new fi(this.measuredText, r.start);
    let offset_3 = this.offset,
      s = u => this.measuredText.prevOffset(u);
    offset_3 = s(offset_3);
    while (offset_3 > 0 && ke.test(this.graphemeAt(offset_3))) offset_3 = s(offset_3);
    if (offset_3 === 0 && ke.test(this.graphemeAt(0))) return new fi(this.measuredText, 0);
    let o = this.graphemeAt(offset_3);
    if (jVe(o)) while (offset_3 > 0) {
      let u = s(offset_3);
      if (!jVe(this.graphemeAt(u))) break;
      offset_3 = u;
    } else if (Rnt(o)) while (offset_3 > 0) {
      let u = s(offset_3);
      if (!Rnt(this.graphemeAt(u))) break;
      offset_3 = u;
    }
    return new fi(this.measuredText, this.snapOutOfPlaceholder(offset_3, "start"));
  }
  nextWORD() {
    let e = this;
    while (!e.isOverWhitespace() && !e.isAtEnd()) e = e.right();
    while (e.isOverWhitespace() && !e.isAtEnd()) e = e.right();
    return e;
  }
  endOfWORD() {
    if (this.isAtEnd()) return this;
    let e = this.placeholderStartingAt(this.offset) ?? this.placeholderContaining(this.offset);
    if (e && this.offset < e.end - 1) return new fi(this.measuredText, e.end - 1);
    let r = this;
    if (!r.isOverWhitespace() && (r.right().isOverWhitespace() || r.right().isAtEnd())) return r = r.right(), r.endOfWORD();
    if (r.isOverWhitespace()) {
      r = r.nextWORD();
      let s = r.placeholderStartingAt(r.offset);
      if (s) return new fi(this.measuredText, s.end - 1);
    }
    while (!r.right().isOverWhitespace() && !r.isAtEnd()) r = r.right();
    return r;
  }
  prevWORD() {
    let e = this;
    if (e.left().isOverWhitespace()) e = e.left();
    while (e.isOverWhitespace() && !e.isAtStart()) e = e.left();
    if (!e.isOverWhitespace()) while (!e.left().isOverWhitespace() && !e.isAtStart()) e = e.left();
    return e;
  }
  modifyText(e, r = "") {
    let offset_4 = this.offset,
      offset_5 = e.offset,
      o = this.text.slice(0, offset_4) + r,
      u = o + this.text.slice(offset_5),
      f = o.normalize("NFC").length,
      d = fi.fromText(u, this.columns, f),
      S = f !== offset_4 + r.normalize("NFC").length,
      {
        measuredText: measuredText,
        offset: offset_6
      } = d;
    if (S && measuredText.snapToGraphemeBoundary(offset_6) !== offset_6) return new fi(measuredText, measuredText.nextOffset(offset_6));
    return d;
  }
  insert(e) {
    return this.modifyText(this, e);
  }
  del() {
    if (this.isAtEnd()) return this;
    return this.modifyText(this.right());
  }
  backspace() {
    if (this.isAtStart()) return this;
    return this.left().modifyText(this);
  }
  deleteToLineStart(e) {
    if (this.offset > 0 && this.text[this.offset - 1] === `
`) return {
      cursor: this.left().modifyText(this),
      killed: `
`
    };
    let r = e ?? this.startOfLine();
    return this.killRange(r.offset, this.offset);
  }
  deleteToLineEnd(e) {
    if (this.text[this.offset] === `
`) return {
      cursor: this.modifyText(this.right()),
      killed: `
`
    };
    return this.killRange(this.offset, (e ?? this.endOfLine()).offset);
  }
  deleteToLogicalLineEnd() {
    if (this.text[this.offset] === `
`) return this.modifyText(this.right());
    return this.killRange(this.offset, this.endOfLogicalLine().offset).cursor;
  }
  deleteWORDBefore() {
    if (this.isAtStart()) return {
      cursor: this,
      killed: ""
    };
    return this.killRange(this.prevWORD().offset, this.offset);
  }
  killRange(e, r) {
    let n = this.snapOutOfPlaceholder(e, "start"),
      s = this.snapOutOfPlaceholder(r, "end"),
      o = new fi(this.measuredText, n),
      u = new fi(this.measuredText, s);
    return {
      cursor: o.modifyText(u),
      killed: this.text.slice(n, s)
    };
  }
  graphemeAt(e) {
    if (e >= this.text.length) return "";
    let r = this.measuredText.nextOffset(e);
    return this.text.slice(e, r);
  }
  isOverWhitespace() {
    let e = this.text[this.offset] ?? "";
    return /\s/.test(e);
  }
  equals(e) {
    return this.offset === e.offset && this.measuredText === e.measuredText;
  }
  isAtStart() {
    return this.offset === 0;
  }
  isAtEnd() {
    return this.offset >= this.text.length;
  }
  startOfFirstLine() {
    return new fi(this.measuredText, 0, 0);
  }
  startOfLastLine() {
    let e = this.text.lastIndexOf(`
`);
    if (e === -1) return this.startOfLine();
    return new fi(this.measuredText, e + 1, 0);
  }
  goToLine(e) {
    let r = this.text.split(`
`),
      n = Math.min(Math.max(0, e - 1), r.length - 1),
      s = 0;
    for (let o = 0; o < n; o++) s += (r[o]?.length ?? 0) + 1;
    return new fi(this.measuredText, s, 0);
  }
  endOfFile() {
    return new fi(this.measuredText, this.text.length, 0);
  }
  get text() {
    return this.measuredText.text;
  }
  get columns() {
    return this.measuredText.columns + 1;
  }
  getPosition() {
    return this.measuredText.getPositionFromOffset(this.offset);
  }
  getOffset(e) {
    return this.measuredText.getOffsetFromPosition(e);
  }
  findCharacter(e, r, n = 1) {
    let s = r === "f" || r === "t",
      o = r === "t" || r === "T",
      u = 0;
    if (s) {
      let f = this.findLogicalLineEnd(),
        d = this.measuredText.nextOffset(this.offset);
      while (d < f) {
        if (this.graphemeAt(d) === e) {
          if (u++, u === n) return o ? Math.max(this.offset, this.measuredText.prevOffset(d)) : d;
        }
        d = this.measuredText.nextOffset(d);
      }
    } else {
      let f = this.findLogicalLineStart();
      if (this.offset <= f) return null;
      let d = this.measuredText.prevOffset(this.offset);
      while (d >= f) {
        if (this.graphemeAt(d) === e) {
          if (u++, u === n) return o ? Math.min(this.offset, this.measuredText.nextOffset(d)) : d;
        }
        if (d === f) break;
        d = this.measuredText.prevOffset(d);
      }
    }
    return null;
  }
}
class Ft {
  text;
  startOffset;
  isPrecededByNewline;
  endsWithNewline;
  displayText;
  displayStartOffset;
  constructor(e, r, n, s) {
    this.text = e;
    this.startOffset = r;
    this.isPrecededByNewline = n;
    this.endsWithNewline = s;
    this.displayText = n ? e : e.trimStart(), this.displayStartOffset = r + (e.length - this.displayText.length);
  }
  equals(e) {
    return this.text === e.text && this.startOffset === e.startOffset;
  }
}
class Ht {
  columns;
  _wrappedLines;
  text;
  navigationCache;
  graphemeBoundaries;
  constructor(e, r) {
    this.columns = r;
    this.text = e.normalize("NFC"), this.navigationCache = new Map();
  }
  get wrappedLines() {
    if (!this._wrappedLines) {
      let {
        rows: rows_2,
        degraded: degraded
      } = It(this.text, this.columns);
      if (degraded) Sr(this.columns, this.text.length);
      this._wrappedLines = rows_2.map(item => new Ft(item.text, item.startOffset, item.isPrecededByNewline, item.endsWithNewline));
    }
    return this._wrappedLines;
  }
  getGraphemeBoundaries() {
    if (!this.graphemeBoundaries) {
      this.graphemeBoundaries = [];
      for (let {
        index: index_2
      } of ua().segment(this.text)) this.graphemeBoundaries.push(index_2);
      this.graphemeBoundaries.push(this.text.length);
    }
    return this.graphemeBoundaries;
  }
  wordBoundariesCache;
  getWordBoundaries() {
    if (!this.wordBoundariesCache) {
      this.wordBoundariesCache = [];
      for (let e of pjo().segment(this.text)) this.wordBoundariesCache.push({
        start: e.index,
        end: e.index + e.segment.length
      });
    }
    return this.wordBoundariesCache;
  }
  readlineWordBoundariesCache;
  getReadlineWordBoundaries() {
    if (!this.readlineWordBoundariesCache) {
      let e = [],
        r = !1;
      for (let n of this.getWordBoundaries()) {
        let s = this.text.slice(n.start, n.end);
        for (let o of s.matchAll(yr)) {
          let start_5 = this.snapToGraphemeBoundary(n.start + o.index),
            f = n.start + o.index + o[0].length,
            d = this.snapToGraphemeBoundary(f),
            end_5 = d === f ? f : this.nextOffset(d),
            T = e.at(-1);
          if (T && (start_5 < T.end || start_5 === T.end && r)) T.end = Math.max(T.end, end_5);else e.push({
            start: start_5,
            end: end_5
          });
          r = end_5 !== f;
        }
      }
      this.readlineWordBoundariesCache = e;
    }
    return this.readlineWordBoundariesCache;
  }
  binarySearchBoundary(e, r, n) {
    let s = 0,
      o = e.length - 1,
      u = n ? this.text.length : 0;
    while (s <= o) {
      let f = Math.floor((s + o) / 2),
        d = e[f];
      if (d === void 0) break;
      if (n) {
        if (d > r) u = d, o = f - 1;else s = f + 1;
      } else if (d < r) u = d, s = f + 1;else o = f - 1;
    }
    return u;
  }
  stringIndexToDisplayWidth(e, r) {
    if (r <= 0) return 0;
    if (r >= e.length) return ie(e);
    return ie(e.substring(0, r));
  }
  displayWidthToStringIndex(e, r) {
    if (r <= 0) return 0;
    if (!e) return 0;
    if (e === this.text) return this.offsetAtDisplayWidth(r);
    let n = 0,
      s = 0;
    for (let {
      segment: segment_3,
      index: index_3
    } of ua().segment(e)) {
      let f = ie(segment_3);
      if (n + f > r) break;
      n += f, s = index_3 + segment_3.length;
    }
    return s;
  }
  offsetAtDisplayWidth(e) {
    if (e <= 0) return 0;
    let r = 0,
      n = this.getGraphemeBoundaries();
    for (let s = 0; s < n.length - 1; s++) {
      let o = n[s],
        u = n[s + 1];
      if (o === void 0 || u === void 0) continue;
      let f = this.text.substring(o, u),
        d = ie(f);
      if (r + d > e) return o;
      r += d;
    }
    return this.text.length;
  }
  getWrappedText() {
    return this.wrappedLines.map(item => item.displayText);
  }
  getWrappedLines() {
    return this.wrappedLines;
  }
  getLine(e) {
    let wrappedLines = this.wrappedLines;
    return wrappedLines[Math.max(0, Math.min(e, wrappedLines.length - 1))];
  }
  getOffsetFromPosition(e) {
    let r = this.getLine(e.line);
    if (r.text.length === 0 && r.endsWithNewline) return r.startOffset;
    let n = r.displayStartOffset - r.startOffset,
      s = e.column + n,
      o = this.displayWidthToStringIndex(r.text, s),
      u = r.startOffset + o;
    return this.snapToGraphemeBoundary(u);
  }
  getLineLength(e) {
    let r = this.getLine(e);
    return ie(r.text);
  }
  getPositionFromOffset(e) {
    let wrappedLines_2 = this.wrappedLines;
    for (let line_9 = 0; line_9 < wrappedLines_2.length; line_9++) {
      let u = wrappedLines_2[line_9],
        f = wrappedLines_2[line_9 + 1];
      if (e >= u.startOffset && (!f || e < f.startOffset)) {
        let d = e - u.startOffset,
          S;
        if (u.isPrecededByNewline) S = this.stringIndexToDisplayWidth(u.text, d);else {
          let T = u.displayStartOffset - u.startOffset;
          if (d < T) S = 0;else {
            let displayText_2 = u.displayText,
              R = d - T;
            S = this.stringIndexToDisplayWidth(displayText_2, R);
          }
        }
        return {
          line: line_9,
          column: Math.max(0, S)
        };
      }
    }
    let line_10 = wrappedLines_2.length - 1,
      s = this.wrappedLines[line_10];
    return {
      line: line_10,
      column: ie(s.text)
    };
  }
  get lineCount() {
    return this.wrappedLines.length;
  }
  withCache(e, r) {
    let n = this.navigationCache.get(e);
    if (n !== void 0) return n;
    let s = r();
    return this.navigationCache.set(e, s), s;
  }
  nextOffset(e) {
    return this.withCache(`next:${e}`, () => {
      let r = this.getGraphemeBoundaries();
      return this.binarySearchBoundary(r, e, !0);
    });
  }
  prevOffset(e) {
    if (e <= 0) return 0;
    return this.withCache(`prev:${e}`, () => {
      let r = this.getGraphemeBoundaries();
      return this.binarySearchBoundary(r, e, !1);
    });
  }
  snapToGraphemeBoundary(e) {
    if (e <= 0) return 0;
    if (e >= this.text.length) return this.text.length;
    let r = this.getGraphemeBoundaries(),
      n = 0,
      s = r.length - 1;
    while (n < s) {
      let o = n + s + 1 >> 1;
      if (r[o] <= e) n = o;else s = o - 1;
    }
    return r[n];
  }
}
function Dt(e, {
  from: r,
  to: to_3
}, s, {
  spans: spans,
  rowStart: rowStart
}) {
  let f = r,
    d = "";
  for (let S of spans) {
    let T = Math.max(f, S.start - rowStart),
      C = Math.min(to_3, S.end - rowStart);
    if (C <= T) continue;
    d += (T > f ? s(e.slice(f, T)) : "") + e.slice(T, C), f = C;
  }
  return f === r || to_3 > f ? d + s(e.slice(f, to_3)) : d;
}
function Sr(e, r) {
  if (!ea().claim("measured_text_wrap_fallback")) return;
  l(new x(`Wrapped rows do not tile the text (columns=${e}, length=${r}); fell back to plain hard wrapping`, "Wrapped rows do not tile the text; fell back to plain hard wrapping"));
}
B();
class Gt {
  prewarmed = !1;
  claim() {
    if (this.prewarmed) return !1;
    return this.prewarmed = !0, !0;
  }
  reset() {
    this.prewarmed = !1;
  }
}
var zn = new z(() => new Gt());
function Kt() {}
function jt(e) {
  return !1;
}
var timeoutMs = 3000,
  jwn = "Press \u2190 again to go back to agents",
  text_4 = "Ambiguous \u2190, press again to detach",
  Ut = 1000,
  Dnr = 150,
  Er = 150;
function Lnr() {
  return {
    editedEmptyAtMs: 0,
    armedAtMs: 0,
    absorbAnchorMs: 0,
    lastQualifiedLeftPressMs: 0,
    attachConfirmArmedAtMs: 0,
    absorbLogged: !1
  };
}
function Nnr(e, r, n, s = E("tengu_left_arrow_editing_guard", !0), o = QVt(r), u = YLe()) {
  if (n !== !0) return "reject";
  let f = S => S !== 0 && S >= u;
  if (o) {
    if (f(e.absorbAnchorMs) && r - e.absorbAnchorMs < Ut) return "attach-absorb";
    if (f(e.attachConfirmArmedAtMs) && r - e.attachConfirmArmedAtMs <= 3000) return r - e.attachConfirmArmedAtMs >= Er ? "fire" : "attach-absorb";
    return "attach-arm";
  }
  if (!s) return "fire";
  if (f(e.lastQualifiedLeftPressMs) && r - e.lastQualifiedLeftPressMs < Dnr) return "absorb";
  if (f(e.armedAtMs) && r - e.armedAtMs <= 3000) return "fire";
  if (f(e.absorbAnchorMs) && r - e.absorbAnchorMs < Ut) return "absorb";
  return f(e.editedEmptyAtMs) && r - e.editedEmptyAtMs < 2000 ? "arm" : "fire";
}
function Fnr(e, r, n) {
  switch (r) {
    case "fire":
      if (e.armedAtMs !== 0) e.editedEmptyAtMs = 0;
      e.armedAtMs = 0, e.attachConfirmArmedAtMs = 0, e.absorbAnchorMs = n, e.lastQualifiedLeftPressMs = n, e.absorbLogged = !1;
      return;
    case "arm":
      e.armedAtMs = n, e.absorbAnchorMs = n, e.lastQualifiedLeftPressMs = n, e.absorbLogged = !1;
      return;
    case "absorb":
      if (n - e.lastQualifiedLeftPressMs < Dnr) e.absorbAnchorMs = n;
      e.lastQualifiedLeftPressMs = n;
      return;
    case "reject":
      return;
    case "attach-arm":
      e.attachConfirmArmedAtMs = n;
      return;
    case "attach-absorb":
      return;
  }
}
function Hnr(e, r, n) {
  let ms_since_stamp = r - YLe();
  switch (e) {
    case "fire":
      if (YLe() !== 0) i("tengu_left_arrow_fired", {
        ms_since_stamp: ms_since_stamp
      });
      return;
    case "arm":
      i("tengu_left_arrow_blocked", {
        reason: b("editing-quiet")
      });
      return;
    case "attach-arm":
      i("tengu_left_arrow_blocked", {
        reason: b("attach-quiet-hint"),
        ms_since_stamp: ms_since_stamp
      }), t(`leftArrowGesture: attach-quiet hint armed (ms_since_stamp=${ms_since_stamp})`, {
        level: "debug"
      });
      return;
    case "attach-absorb":
      i("tengu_left_arrow_blocked", {
        reason: b("attach-quiet"),
        ms_since_stamp: ms_since_stamp
      }), t(`leftArrowGesture: attach-quiet silent absorb (ms_since_stamp=${ms_since_stamp})`, {
        level: "debug"
      });
      return;
    case "reject":
      if (ea().claim("left_arrow_not_solo_reject")) i("tengu_left_arrow_blocked", {
        reason: b("not-solo")
      });
      return;
    case "absorb":
      if (n.absorbAnchorMs === r || n.absorbLogged) return;
      n.absorbLogged = !0;
      let ms_since_press = r - n.absorbAnchorMs;
      i("tengu_left_arrow_blocked", {
        reason: b("absorb"),
        ms_since_press: ms_since_press
      }), t(`leftArrowGesture: human-cadence press absorbed, too soon after the last \u2190 that fired or showed the hint (ms_since_press=${ms_since_press})`, {
        level: "debug"
      });
      return;
  }
}
var Wwn = (e, r) => e.filter(item => item.start < r),
  $nr = (e, r) => e.normalize("NFC") === e && r.text.normalize("NFC") === r.text;
function Or(e, r, n) {
  let s = n === "up" || n === "down",
    o = e.cursorOver(r);
  for (;;) {
    let u = o[n]();
    if (u.equals(o)) return r;
    let line_11 = u.getPosition().line,
      d = Rbo(e.text, u.offset),
      S = (s ? [d, r.measuredText.nextOffset(d), r.measuredText.prevOffset(d)] : [d]).find(item => item !== r.offset && (!s || e.rowOf(item) === line_11));
    if (S !== void 0) return new fi(r.measuredText, S);
    o = u;
  }
}
function ht({
  buffer: buffer,
  texts: texts,
  columns: columns,
  side: side
}) {
  if (texts.length === 0) return;
  let text = zen(buffer, texts);
  if (!$nr(buffer, text)) return;
  let {
      measuredText: measuredText_2
    } = fi.fromText(text.text, columns),
    cursorOver = S => new fi(measuredText_2, qUe(text, S.offset, side)),
    rowOf = S => measuredText_2.getPositionFromOffset(qUe(text, S, side)).line;
  return {
    text: text,
    cursorOver: cursorOver,
    rowOf: rowOf,
    lastRow: () => {
      let S = qUe(text, buffer.length, "before");
      return measuredText_2.getPositionFromOffset(buffer.endsWith(`
`) ? S : measuredText_2.prevOffset(S)).line;
    },
    rowMoved: (S, T) => Or({
      text: text,
      cursorOver: cursorOver,
      rowOf: rowOf
    }, S, T)
  };
}
function zwn({
  buffer: buffer_2,
  offset: offset_7,
  texts: texts_2,
  columns: columns_2,
  side: side_2
}) {
  let cursor = fi.fromText(buffer_2, columns_2, offset_7),
    f = ht({
      buffer: buffer_2,
      texts: texts_2,
      columns: columns_2,
      side: side_2
    });
  if (f === void 0) return {
    cursor: cursor,
    bufferOffset: d => d
  };
  return {
    cursor: f.cursorOver(cursor),
    bufferOffset: d => Rbo(f.text, d)
  };
}
var Ar = () => {};
function Cr(e, r) {
  if (e === "") return;
  if (r !== "") {
    s4("deleted");
    return;
  }
  let n = e.trim() === "" ? e.includes(`
`) ? "new line" : e.includes("\t") ? "tab" : "space" : e.replaceAll(`
`, " ").trim();
  s4(n);
}
var $r = new Set(["insert", "clear", "enter", "center", "undefined", "mouse", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11", "f12"]);
function Y2t() {
  return a.terminal === "Apple_Terminal" && jt("shift");
}
function Vt(e) {
  let r = new Map(e);
  return function (n) {
    return (r.get(n) ?? Ar)(n);
  };
}
function X2t({
  value: value,
  onChange: onChange,
  onSubmit: onSubmit,
  onExit: onExit,
  onExitMessage: onExitMessage,
  onEscapeMessage: onEscapeMessage,
  historyOnClear = !0,
  onLeftArrowOnEmpty: onLeftArrowOnEmpty,
  leftArrowConfirmHint: leftArrowConfirmHint,
  onHistoryUp: onHistoryUp,
  onHistoryDown: onHistoryDown,
  onHistoryReset: onHistoryReset,
  mask = "",
  multiline = !1,
  disableBackslashReturn = !1,
  clearOnSubmit = !0,
  disableCtrlCClear = !1,
  cursorChar: cursorChar,
  preserveTrailingWhitespace = !1,
  invert: invert,
  columns: columns_3,
  leadingPill: leadingPill,
  onImagePaste: onImagePaste_2,
  disableCursorMovementForUpDownKeys = !1,
  disableEscapeDoublePress = !1,
  maxVisibleLines: maxVisibleLines,
  externalOffset: externalOffset,
  onOffsetChange: onOffsetChange,
  inputFilter: inputFilter,
  getPastedContents: getPastedContents,
  getInputMode: getInputMode,
  inlineGhostText: inlineGhostText,
  dim: dim,
  virtualTexts: virtualTexts,
  isCursorOnCharacter = !1,
  editRelay: editRelay,
  commitEdit: commitEdit,
  selectionAnchor: selectionAnchor,
  selectionLinewise = !1
}) {
  let gt = mi(),
    Te = zVe();
  if (a.terminal === "Apple_Terminal") Kt();
  let offset_8 = externalOffset,
    setOffset = onOffsetChange,
    W = leadingPill?.text ?? "",
    w = fi.fromText(W + value, columns_3, W.length + offset_8),
    bt = inlineGhostText && dim && inlineGhostText.insertPosition === offset_8 ? {
      text: inlineGhostText.text,
      dim: dim
    } : void 0,
    wt = bt !== void 0 && offset_8 >= value.length,
    et = Z(() => virtualTexts === void 0 || virtualTexts.length === 0 || value === "" || mask !== "" ? void 0 : ht({
      buffer: W + value,
      texts: VUe(wt ? Wwn(virtualTexts, value.length) : virtualTexts, W.length),
      columns: columns_3,
      side: isCursorOnCharacter ? "after" : "before"
    }), [virtualTexts, value, mask, W, wt, columns_3, isCursorOnCharacter]),
    rt = !1,
    nt,
    Fe = !1;
  function Se(c) {
    return inputFilter && nt ? inputFilter(c, nt) : c;
  }
  let {
      addNotification: addNotification,
      removeNotification: removeNotification
    } = Ro(),
    {
      storageV5: storageV5
    } = Oe(),
    [pe] = y(Lnr),
    key = "left-arrow-again-for-agents",
    Ke = A({
      key: "Ctrl-C",
      pending: !1
    }),
    Yt = mY(c => {
      Ke.current.pending = c, onExitMessage?.(c, Ke.current.key);
    }, () => onExit?.(), () => {
      if (!disableCtrlCClear && value) onChange(""), setOffset(0), onHistoryReset?.();
    });
  function xt(c) {
    if (!Ke.current.pending) Ke.current.key = c;
    Yt();
  }
  let zt = mY(c => {
    if (!value) return;
    if (onEscapeMessage) {
      onEscapeMessage(c);
      return;
    }
    if (!c) return;
    addNotification({
      key: "escape-again-to-clear",
      kind: "feedback",
      text: "Esc again to clear",
      row1Hint: "Esc again to clear",
      priority: "immediate",
      timeoutMs: 1000
    });
  }, () => {
    if (onEscapeMessage?.(!1), removeNotification("escape-again-to-clear"), value) {
      if (historyOnClear && mask === "" && value.trim() !== "") {
        let pastedContents = getPastedContents ? Bs(getPastedContents(), se => se.type === "text" && se.unavailable === !0) : void 0,
          submitMode = getInputMode?.(),
          display = submitMode !== void 0 ? uRe(value, submitMode) : value,
          ee = pastedContents ? {
            display: display,
            pastedContents: pastedContents
          } : display;
        if (submitMode !== void 0) _fe(ee, storageV5, {
          submitMode: submitMode
        });else _fe(ee, storageV5);
      }
      onChange(""), setOffset(0), onHistoryReset?.();
    }
  });
  function qt() {
    if (w.text === W && value === "") return xt("Ctrl-D"), w;
    return w.del();
  }
  function yt() {
    if (W !== "" && w.offset === W.length) return fi.fromText(w.text.slice(W.length), columns_3);
    return w.backspace();
  }
  function ve(c, direction) {
    let text_2 = c.startsWith(W) ? c.slice(W.length) : c;
    return Te.dispatch(mask === "" ? {
      type: "kill",
      text: text_2,
      direction: direction
    } : {
      type: "interrupt"
    }), Cr(text_2, mask), text_2;
  }
  function ot() {
    let {
      cursor: cursor_2,
      killed: killed
    } = w.deleteToLineEnd(ge("endOfLine"));
    return ve(killed, "append"), cursor_2;
  }
  function Tt() {
    let {
        cursor: cursor_3,
        killed: killed_2
      } = w.deleteToLineStart(ge("startOfLine")),
      v = ve(killed_2, "prepend");
    if (mask === "" && v.length >= 3) addNotification({
      key: "kill-paste-hint",
      kind: "hint",
      text: "Ctrl+Y to paste deleted text",
      row1Hint: "ctrl+y to undo delete",
      priority: "immediate",
      timeoutMs: 5000
    });
    return cursor_3;
  }
  function Jt() {
    let {
      cursor: cursor_4,
      killed: killed_3
    } = w.killWord();
    return ve(killed_3, "append"), cursor_4;
  }
  function Zt() {
    let {
      cursor: cursor_5,
      killed: killed_4
    } = w.backwardKillWord();
    return ve(killed_4, "prepend"), cursor_5;
  }
  function Qt() {
    let {
      cursor: cursor_6,
      killed: killed_5
    } = w.deleteWORDBefore();
    return ve(killed_5, "prepend"), cursor_6;
  }
  function Xt() {
    let c = Se(Dnt(Te.state));
    if (c.length > 0) {
      let start_6 = w.offset - W.length,
        v = w.insert(c);
      return Te.dispatch({
        type: "yank",
        start: start_6,
        length: c.length
      }), v;
    }
    return w;
  }
  function er() {
    let c = evn(Te.state);
    if (!c) return w;
    let {
        text: text_3,
        length: length
      } = c,
      ee = W.length + c.start,
      se = Se(text_3);
    Te.dispatch({
      type: "yankPop"
    });
    let Ae = w.text.slice(0, ee),
      Ve = w.text.slice(ee + length),
      lr = Ae + se + Ve,
      ur = ee + se.length;
    return Te.dispatch({
      type: "updateYankLength",
      length: se.length
    }), fi.fromText(lr, columns_3, ur);
  }
  let tr = Vt([["a", () => w.startOfLogicalLine()], ["b", () => w.left()], ["c", () => (xt("Ctrl-C"), w)], ["d", qt], ["e", () => w.endOfLogicalLine()], ["f", () => w.right()], ["h", yt], ["k", ot], ["n", () => Ot()], ["p", () => Et()], ["u", Tt], ["w", Qt], ["y", Xt]]),
    rr = Vt([["b", () => w.backwardWord()], ["f", () => w.forwardWord()], ["d", Jt], ["y", er]]);
  function nr({
    meta: meta,
    shift: shift
  }) {
    if (multiline && !disableBackslashReturn && w.offset > 0 && w.text[w.offset - 1] === "\\") return p9o(storageV5), w.backspace().insert(Se(`
`));
    if (meta || shift) return w.insert(Se(`
`));
    if (Y2t()) return w.insert(Se(`
`));
    if (onSubmit) onSubmit(w.text.slice(W.length)), rt = !0;
    return w;
  }
  function je() {
    pe.editedEmptyAtMs = Date.now();
  }
  function disarmLeftArrowConfirm() {
    if (pe.armedAtMs === 0) return;
    pe.armedAtMs = 0, removeNotification(key);
  }
  function Ue() {
    return et !== void 0 && w.text === et.text.draft ? et : void 0;
  }
  function ge(c) {
    return Ue()?.rowMoved(w, c) ?? w[c]();
  }
  function Et() {
    if (disableCursorMovementForUpDownKeys) return je(), onHistoryUp?.(), w;
    let c = Ue();
    if (onHistoryUp && (c ? c.rowOf(w.offset) <= c.rowOf(W.length) : w.getPosition().line <= w.measuredText.getPositionFromOffset(W.length).line)) return je(), onHistoryUp(), w;
    let k = ge("up");
    if (!k.equals(w)) return k;
    if (multiline) {
      let v = w.upLogicalLine();
      if (!v.equals(w)) return v;
    }
    return w;
  }
  function Ot() {
    if (disableCursorMovementForUpDownKeys) return je(), onHistoryDown?.(), w;
    let c = Ue();
    if (onHistoryDown && (c ? c.rowOf(w.offset) >= c.lastRow() : w.getPosition().line >= w.measuredText.lineCount - 1)) return je(), onHistoryDown(), w;
    let k = ge("down");
    if (!k.equals(w)) return k;
    if (multiline) {
      let v = w.downLogicalLine();
      if (!v.equals(w)) return v;
    }
    return w;
  }
  function sr(c) {
    if (c.ctrl && (c.key === "k" || c.key === "u" || c.key === "w")) return !0;
    if (c.meta && !c.ctrl && c.key === "d") return !0;
    if (c.key === "backspace" && (c.meta || c.superKey || c.ctrl)) return !0;
    if (c.key === "delete" && (c.meta || c.superKey)) return !0;
    return !1;
  }
  function ir(c) {
    return (c.ctrl || c.meta) && c.key === "y";
  }
  function or(c, k) {
    switch (c.name) {
      case "escape":
        if (disableEscapeDoublePress) return;
        return zt(), w;
      case "left":
        if (c.superKey) return ge("startOfLine");
        if (c.ctrl || c.meta || c.fn) return w.backwardWord();
        if (onLeftArrowOnEmpty && !c.shift && w.text === W) {
          let v = Date.now(),
            ee = Nnr(pe, v, c.soloKeypress),
            se = pe.armedAtMs === 0 ? void 0 : v - pe.absorbAnchorMs;
          switch (Fnr(pe, ee, v), Hnr(ee, v, pe), ee) {
            case "fire":
              return removeNotification(key), onLeftArrowOnEmpty(se), w;
            case "arm":
              return addNotification({
                key: key,
                kind: "feedback",
                text: leftArrowConfirmHint ?? "Press \u2190 again",
                priority: "immediate",
                timeoutMs: timeoutMs
              }), w;
            case "absorb":
              return w;
            case "attach-arm":
              return addNotification({
                key: key,
                kind: "feedback",
                text: text_4,
                priority: "immediate",
                timeoutMs: timeoutMs
              }), w;
            case "attach-absorb":
              return w;
            case "reject":
              return w.left();
          }
        }
        return w.left();
      case "right":
        if (c.superKey) return ge("endOfLine");
        if (c.ctrl || c.meta || c.fn) return w.forwardWord();
        return w.right();
      case "up":
        if (c.shift || c.ctrl || c.meta) return;
        return Et();
      case "down":
        if (c.shift || c.ctrl || c.meta) return;
        return Ot();
      case "backspace":
        if (c.superKey) return Tt();
        if (c.meta || c.ctrl) return Zt();
        return yt();
      case "delete":
        if (c.superKey) return ot();
        if (c.meta) return ot();
        return w.del();
      case "home":
        if (c.ctrl) return;
        return ge("startOfLine");
      case "end":
        if (c.ctrl) return;
        return ge("endOfLine");
      case "pagedown":
        if (gt || c.ctrl) return;
        return ge("endOfLine");
      case "pageup":
        if (gt || c.ctrl) return;
        return ge("startOfLine");
      case "return":
        if (c.ctrl) return;
        return nr(c);
      case "enter":
        return w.insert(Se(`
`));
      case "tab":
        return;
    }
    if (multiline && c.ctrl && !c.shift && !c.meta && c.name === "j") return w.insert(Se(`
`));
    if (c.ctrl) return tr(c.key);
    if (c.meta) return rr(c.key);
    if ($r.has(c.name)) return;
    if (k.length === 0) return;
    if (getInputMode !== void 0 && w.offset === W.length && Hkt(k) && getInputMode() !== xb(k)) return Fe = !0, w.insert(k).left();
    return w.insert(k);
  }
  function handleKeyDown_3(key_2) {
    nt = key_2, Fe = !1;
    let k = inputFilter ? inputFilter(key_2.key, key_2) : key_2.key;
    if (k === "" && key_2.key !== "") {
      key_2.preventDefault();
      return;
    }
    if (!sr(key_2) && !ir(key_2)) Te.dispatch({
      type: "interrupt"
    });
    if (!(key_2.name === "left" && !key_2.ctrl && !key_2.meta && !key_2.fn && !key_2.superKey && !key_2.shift)) disarmLeftArrowConfirm();
    let v = or(key_2, k);
    if (v === void 0) return;
    if (key_2.preventDefault(), !w.equals(v)) {
      let ee = v.text.startsWith(W);
      if (ee && v.offset < W.length) v = new fi(v.measuredText, W.length);
      let text_5 = w.text.slice(W.length),
        text_6 = ee ? v.text.slice(W.length) : v.text,
        cursor_7 = v.offset - (ee ? W.length : 0);
      if (text_5 !== "" && text_6 === "") pe.editedEmptyAtMs = Date.now();
      if (text_5 !== text_6) if (commitEdit !== void 0 && !Fe) commitEdit(() => onChange(text_6));else onChange(text_6);
      if (setOffset(cursor_7), editRelay?.isRecording() === !0 && !Fe) editRelay.record({
        before: {
          text: text_5,
          cursor: Math.max(0, w.offset - W.length)
        },
        after: {
          text: text_6,
          cursor: cursor_7
        },
        key: key_2
      });
      if (w = v, !ee) W = "", leadingPill?.onDelete();
    }
    if (rt) {
      if (rt = !1, clearOnSubmit) w = fi.fromText(W, columns_3, W.length);
    }
  }
  let $e = Ue(),
    _e = $e?.cursorOver(w) ?? w,
    At = _e.getPosition();
  return {
    handleKeyDown: handleKeyDown_3,
    renderedValue: _e.render(cursorChar, mask, invert, bt, maxVisibleLines, selectionAnchor === void 0 || selectionAnchor === null ? void 0 : $e ? qUe($e.text, W.length + selectionAnchor, "after") : W.length + selectionAnchor, selectionLinewise, preserveTrailingWhitespace, $e?.text.spans),
    offset: offset_8,
    setOffset: setOffset,
    cursorLine: At.line - _e.getViewportStartLine(maxVisibleLines),
    cursorColumn: At.column,
    renderedRowStartOffsets: _e.getRenderedRowStartOffsets(maxVisibleLines),
    shown: $e && {
      text: $e.text,
      cursorOffset: _e.offset
    },
    noteKeystrokeEmptied: () => {
      pe.editedEmptyAtMs = Date.now();
    },
    disarmLeftArrowConfirm: disarmLeftArrowConfirm
  };
}
B();
function xy(e, r, n = !1) {
  P(() => {
    let current = e.current;
    if (!current) return;
    let o = CP(current);
    if (!r) {
      if (n && o.activeElement === current) o.blur();
      return;
    }
    return o.focus(current), o.subscribe(() => {
      let current_2 = e.current;
      if (!current_2 || o.activeElement === current_2) return;
      if (!o.activeElement) {
        o.focus(current_2);
        return;
      }
      let parentNode = current_2.parentNode;
      while (parentNode) {
        if (parentNode === o.activeElement) {
          o.focus(current_2);
          return;
        }
        parentNode = parentNode.parentNode;
      }
    });
  }, [r, e, n]);
}
var pt = " \u2581\u2582\u2583\u2584\u2585\u2586\u2587\u2588",
  Lr = 0.7,
  kr = 1.8,
  vr = 0.15;
function qvt() {
  let e = V(F => sh(F.settings.prefersReducedMotion)),
    r = T4r(),
    n = oh(F => F.voiceState) === "recording",
    s = oh(F => F.voiceAudioLevels),
    o = n && !e,
    [u, f] = Aa(o ? 50 : null);
  if (!o) return [u, null];
  let d = s.at(-1) ?? 0,
    S = Math.min(d * kr, 1),
    T = r.next(S, Lr),
    C = Math.max(1, Math.min(Math.round(T * (pt.length - 1)), pt.length - 1)),
    R = d < vr,
    D = f / 1000 * 90 % 360,
    J = Rh() ? Q2t(D) : D,
    {
      r: r_2,
      g: g_2,
      b: b_2
    } = R ? {
      r: 128,
      g: 128,
      b: 128
    } : Z2t(J),
    hex = `#${(r_2 << 16 | g_2 << 8 | b_2).toString(16).padStart(6, "0")}`;
  return [u, {
    char: pt[C],
    hex: hex
  }];
}
export { xy, Pnr, Onr, E5s, T5s, cce, w4r, p9o, ati, v4r, Inr, k4r, f9o, m9o, jVe, Cnt, Rnt, fi, timeoutMs as Bwn, jwn, text_4 as Mnr, Dnr, Lnr, Nnr, Fnr, Hnr, Wwn, $nr, zwn, Y2t, X2t, qvt, Ant };