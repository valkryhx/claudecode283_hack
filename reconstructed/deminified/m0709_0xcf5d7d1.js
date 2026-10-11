// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { y } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { P, B, Et } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { $o } from "B:/~BUN/root/chunk-54p0h65d.js";
import { KJ, a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { q } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { b, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { d, O, hBo } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { pe } from "B:/~BUN/root/chunk-nf4z9ga7.js";
import { Jo, bft, YUt, Egn, Jye, Mjr, LFo } from "B:/~BUN/root/chunk-tsjnk8ma.js";
import { Ny } from "B:/~BUN/root/chunk-0rtwbec7.js";
import { om } from "B:/~BUN/root/chunk-4tkwpa6e.js";
import { it, x, Ee, le } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { ke } from "B:/~BUN/root/chunk-kss0wzj5.js";
import { Cn } from "B:/~BUN/root/chunk-2swveyqa.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { G } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { Od } from "B:/~BUN/root/chunk-8hs4bwwk.js";
import { tt } from "B:/~BUN/root/chunk-py7yqpgt.js";
import { ie, WJ, Wu } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { Ga } from "B:/~BUN/root/chunk-fszjvjk0.js";
import { n_, pJ } from "B:/~BUN/root/chunk-aw2zngte.js";
import { yVt, _Vt, w_t } from "B:/~BUN/root/chunk-jpnyq4t7.js";
import { Js, Ta, pU } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { mT, y_t } from "B:/~BUN/root/chunk-trcn2d68.js";
import { uSe, jbt } from "B:/~BUN/root/chunk-q1b7bx45.js";
import { Yt } from "B:/~BUN/root/chunk-jdm3bsma.js";
import { W } from "B:/~BUN/root/chunk-h23911wn.js";
import { Zr } from "B:/~BUN/root/chunk-cpg4rjtx.js";
import { Ume, Cl } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { $j } from "B:/~BUN/root/chunk-r2yrqvry.js";
import { Der, _g } from "B:/~BUN/root/chunk-rp3kg713.js";
import { s_t, i_t, D8r, nVt } from "B:/~BUN/root/chunk-w15vevdx.js";
import { Bbe } from "B:/~BUN/root/chunk-zza9ywwa.js";
import { $p } from "B:/~BUN/root/chunk-sv155qry.js";
import { NIe, Kh, zQe } from "B:/~BUN/root/chunk-hjz4emsq.js";
import { Pn } from "B:/~BUN/root/chunk-106hagsg.js";
import { o8, E7, tio, nio } from "B:/~BUN/root/chunk-q3x7vf9d.js";
import { se, R, Gr, X, T, g, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
import { ya, q8e, tzr } from "B:/~BUN/root/chunk-nfc48pcb.js";
import { Qr } from "B:/~BUN/root/chunk-0bx1tycm.js";
import { randomBytes as Pe } from "crypto";
import { copyFile as Me, mkdir as st, readFile as Te, writeFile as je } from "fs/promises";
import { homedir as Ke, platform as ve } from "os";
import { dirname as nr, join as ne } from "path";
import { pathToFileURL as ir } from "url";
var h = `
`,
  Re = {
    ghostty: "Ghostty",
    kitty: "Kitty",
    "iTerm.app": "iTerm2",
    WezTerm: "WezTerm",
    WarpTerminal: "Warp",
    "windows-terminal": "Windows Terminal"
  };
function Ve() {
  let e = a.VSCODE_GIT_ASKPASS_MAIN ?? "",
    r = a.PATH ?? "";
  return e.includes(".vscode-server") || e.includes(".cursor-server") || e.includes(".windsurf-server") || e.includes(".devin-server") || r.includes(".vscode-server") || r.includes(".cursor-server") || r.includes(".windsurf-server") || r.includes(".devin-server");
}
function wvn() {
  if (!a.terminal || !(a.terminal in Re)) return null;
  return Re[a.terminal] ?? null;
}
function oe(e) {
  if (!Ny()) return e;
  return `\x1B]8;;${ir(e).href}\x07${e}\x1B]8;;\x07`;
}
function He() {
  return "";
}
async function vvn(e, r, n) {
  let s = "",
    o = !0;
  switch (a.terminal) {
    case "Apple_Terminal":
      s = await or(r, n);
      break;
    case "vscode":
      s = await rt(e, "VSCode", r), s += await et(e, "VSCode", r), s += await Per(e, "VSCode", r);
      break;
    case "cursor":
      s = await rt(e, "Cursor", r), s += await et(e, "Cursor", r), s += await Per(e, "Cursor", r);
      break;
    case "windsurf":
      s = await rt(e, "Devin Desktop", r), s += await et(e, "Devin Desktop", r), s += await Per(e, "Devin Desktop", r);
      break;
    case "alacritty":
      s = await ar(r);
      break;
    case "zed":
      {
        let l = await lr(r);
        s = l.message, o = l.installed;
        break;
      }
    case null:
      break;
  }
  return await Ee(l => {
    if (o && Tt.includes(a.terminal ?? "")) {
      if (l.shiftEnterKeyBindingInstalled === !0) return l;
      return {
        ...l,
        shiftEnterKeyBindingInstalled: !0
      };
    } else if (a.terminal === "Apple_Terminal") {
      if (l.optionAsMetaKeyInstalled === !0) return l;
      return {
        ...l,
        optionAsMetaKeyInstalled: !0
      };
    }
    return l;
  }, n), s;
}
var xt = 'iTerm2 \u2192 Settings \u2192 General \u2192 Selection \u2192 check "Applications in terminal may access clipboard"';
async function W1o(e) {
  let r = pe.dim(xt);
  try {
    let {
      stdout: stdout,
      code: code
    } = await tt("defaults", ["read", "com.googlecode.iterm2", "AllowClipboardAccess"]);
    if (code === 0 && stdout.trim() === "1") return `${Pn("success", e)("iTerm2 clipboard access already enabled")}${h}${h}`;
    let {
      code: code_2
    } = await tt("defaults", ["write", "com.googlecode.iterm2", "AllowClipboardAccess", "-bool", "true"]);
    if (code_2 !== 0) return `${Pn("warning", e)("Couldn't update iTerm2 clipboard setting.")}${h}${r}${h}${h}`;
    return `${Pn("success", e)('Enabled "Applications in terminal may access clipboard" in iTerm2')}${h}${pe.dim("Restart iTerm2 for this to take effect. Undo: defaults write com.googlecode.iterm2 AllowClipboardAccess -bool false")}${h}${h}`;
  } catch (error) {
    return d(error), `${Pn("warning", e)("Couldn't update iTerm2 clipboard setting.")}${h}${r}${h}${h}`;
  }
}
function z1o() {
  return le().shiftEnterKeyBindingInstalled === !0;
}
var Tt = ["vscode", "cursor", "windsurf", "alacritty", "zed"];
function Ube() {
  if (a.terminal === "Apple_Terminal" && ve() === "darwin") return !0;
  if (a.terminal && a.terminal in Re) return !0;
  return Tt.includes(a.terminal ?? "") && z1o();
}
function Aer() {
  return le().hasUsedBackslashReturn === !0;
}
function M8r(e) {
  if (!le().hasUsedBackslashReturn) Ee(n => ({
    ...n,
    hasUsedBackslashReturn: !0
  }), e);
}
async function Pqo(e, r, n) {
  if (ve() === "darwin" && a.__CFBundleIdentifier === "com.googlecode.iterm2" && (a.terminal === "iTerm.app" || a.terminal === "tmux" || a.terminal === "screen" || a.terminal === null)) {
    let l = `${await W1o(r.options.theme)}Shift+Enter is natively supported in iTerm2.

No configuration needed. Just use Shift+Enter to add newlines.${He()}`;
    return e(l), null;
  }
  if (a.terminal && a.terminal in Re) {
    let o = `Shift+Enter is natively supported in ${Re[a.terminal]}.

No configuration needed. Just use Shift+Enter to add newlines.${He()}`;
    return e(o), null;
  }
  if (!Bbe()) {
    let o = a.terminal || "your current terminal",
      l = O(),
      c = "";
    if (l === "macos") c = `   \u2022 macOS: Apple Terminal
`;
    let f = a.LC_TERMINAL === "iTerm2" ? `${h}${h}You appear to be connected from iTerm2 on another machine. For /copy to reach your local clipboard, on that machine open:${h}${pe.dim(xt)}` : "",
      S = `Terminal setup cannot be run from ${o}.

This command configures a convenient Shift+Enter shortcut for multi-line prompts.
${pe.dim("Note: You can already use backslash (\\\\) + return to add newlines.")}

To set up the shortcut (optional):
1. Exit tmux/screen temporarily
2. Run /terminal-setup directly in one of these terminals:
${c}   \u2022 IDE: VSCode, Cursor, Devin Desktop, Zed
   \u2022 Other: Alacritty
3. Return to tmux/screen - settings will persist

${pe.dim("Note: iTerm2, WezTerm, Ghostty, Kitty, Warp, and Windows Terminal support Shift+Enter natively.")}${f}${He()}`;
    return e(S), null;
  }
  let s = await vvn(r.session.host, r.options.theme, r.storageV5);
  return e(s + He()), null;
}
var Le = "terminal.integrated.mouseWheelScrollSensitivity",
  recommended = 3,
  Ge = "terminal.integrated.gpuAcceleration",
  Xe = "off";
async function xer(e) {
  let editor = sr();
  if (!editor || Ve()) return null;
  try {
    let n = await Te(ne(await kvn.of(e).pathFor(editor), "settings.json"), {
        encoding: "utf-8"
      }),
      s = Jye(n),
      o = G(s) ? s[Le] : void 0;
    return {
      editor: editor,
      sensitivity: typeof o === "number" ? o : null,
      recommended: recommended
    };
  } catch (error) {
    if (!Et(error)) d(error);
    return {
      editor: editor,
      sensitivity: null,
      recommended: recommended
    };
  }
}
function sr() {
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
class St {
  pathFor = $o(async e => {
    let r = n => ne(Ke(), ve() === "win32" ? ne("AppData", "Roaming", n, "User") : ve() === "darwin" ? ne("Library", "Application Support", n, "User") : ne(".config", n, "User"));
    if (e === "VSCode") return r("Code");
    if (e === "Devin Desktop") {
      let n = r("Devin");
      return (await Od(n)) ? n : r("Windsurf");
    }
    return r(e);
  }, e => `${e}:${Ke()}`);
}
var kvn = new q(() => new St());
async function et(e, r, n) {
  let s = pe.dim(`For smoother scrolling, set "${Le}": ${recommended} in ${r} settings.`);
  if (Ve()) return `${s}${h}`;
  let o = ne(await kvn.of(e).pathFor(r), "settings.json");
  try {
    let l = "{}",
      c = !1;
    try {
      l = await Te(o, {
        encoding: "utf-8"
      }), c = !0;
    } catch (error) {
      if (!Et(error)) throw error;
    }
    let f = Jye(l);
    if (!G(f)) return `${Pn("warning", n)(`${r} settings.json isn't a JSON object; not modifying it.`)}${h}${s}${h}`;
    if (Le in f) return `${Pn("success", n)(`${r} ${Le} already set; leaving as-is`)}${h}${pe.dim(`See ${oe(o)}`)}${h}`;
    let S = Mjr(l, Le, recommended);
    if (S === l) return `${Pn("warning", n)(`Couldn't update ${r} settings.json.`)}${h}${s}${h}`;
    if (c) {
      let E = `${o}.${Pe(4).toString("hex")}.bak`;
      try {
        await Me(o, E);
      } catch {
        return `${Pn("warning", n)(`Couldn't back up ${r} settings.json; not modifying it.`)}${h}${s}${h}`;
      }
    }
    return await je(o, S, {
      encoding: "utf-8"
    }), `${Pn("success", n)(`Set ${r} terminal scroll sensitivity to ${recommended}`)}${h}${pe.dim(`See ${oe(o)}`)}${h}`;
  } catch (error) {
    return t(`Couldn't update ${r} settings.json at ${o}: ${error instanceof Error ? error.message : String(error)}`, {
      level: "error"
    }), `${Pn("warning", n)(`Couldn't update ${r} settings.json.`)}${h}${s}${h}`;
  }
}
async function Per(e, r, n) {
  let s = pe.dim(`To fix garbled text, set "${Ge}": "${Xe}" in ${r} settings (undo: set it back to "auto").`);
  if (Ve()) return p("terminal_setup_gpu_accel", "remote_ssh"), `${s}${h}`;
  let o = ne(await kvn.of(e).pathFor(r), "settings.json");
  try {
    let l = "{}",
      c = !1;
    try {
      l = await Te(o, {
        encoding: "utf-8"
      }), c = !0;
    } catch (error) {
      if (!Et(error)) throw error;
    }
    let f = Jye(l);
    if (!G(f)) return p("terminal_setup_gpu_accel", "not_json_object"), `${Pn("warning", n)(`${r} settings.json isn't a JSON object; not modifying it.`)}${h}${s}${h}`;
    if (f[Ge] === Xe) return _("terminal_setup_gpu_accel"), `${Pn("success", n)(`${r} GPU acceleration already off; leaving as-is`)}${h}${pe.dim(`See ${oe(o)}`)}${h}`;
    let S = Mjr(l, Ge, Xe);
    if (S === l) return p("terminal_setup_gpu_accel", "write_failed"), `${Pn("warning", n)(`Couldn't update ${r} settings.json.`)}${h}${s}${h}`;
    if (c) {
      let E = `${o}.${Pe(4).toString("hex")}.bak`;
      try {
        await Me(o, E);
      } catch {
        return p("terminal_setup_gpu_accel", "backup_failed"), `${Pn("warning", n)(`Couldn't back up ${r} settings.json; not modifying it.`)}${h}${s}${h}`;
      }
    }
    return await je(o, S, {
      encoding: "utf-8"
    }), _("terminal_setup_gpu_accel"), `${Pn("success", n)(`Turned off ${r} GPU acceleration to fix garbled text`)}${h}${pe.dim(`Reload the ${r} window to apply. Undo: set "${Ge}" back to "auto".`)}${h}${pe.dim(`See ${oe(o)}`)}${h}`;
  } catch (error) {
    return p("terminal_setup_gpu_accel", "write_failed"), t(`Couldn't update ${r} settings.json at ${o}: ${error instanceof Error ? error.message : String(error)}`, {
      level: "error"
    }), `${Pn("warning", n)(`Couldn't update ${r} settings.json.`)}${h}${s}${h}`;
  }
}
async function rt(e, r = "VSCode", n) {
  if (Ve()) return `${Pn("warning", n)(`Cannot install keybindings from a remote ${r} session.`)}${h}${h}${r} keybindings must be installed on your local machine, not the remote server.${h}${h}To install the Shift+Enter keybinding:${h}1. Open ${r} on your local machine (not connected to remote)${h}2. Open the Command Palette (Cmd/Ctrl+Shift+P) \u2192 "Preferences: Open Keyboard Shortcuts (JSON)"${h}3. Add this keybinding (the file must be a JSON array):${h}${h}${pe.dim(`[
  {
    "key": "shift+enter",
    "command": "workbench.action.terminal.sendSequence",
    "args": { "text": "\\u001b\\r" },
    "when": "terminalFocus"
  }
]`)}${h}`;
  let s = await kvn.of(e).pathFor(r),
    o = ne(s, "keybindings.json");
  try {
    await st(s, {
      recursive: !0
    });
    let l = "[]",
      c = [],
      f = !1;
    try {
      l = await Te(o, {
        encoding: "utf-8"
      }), f = !0, c = Jye(l) ?? [];
    } catch (error) {
      if (!Et(error)) throw error;
    }
    if (f) {
      let v = Pe(4).toString("hex"),
        K = `${o}.${v}.bak`;
      try {
        await Me(o, K);
      } catch {
        return `${Pn("warning", n)(`Error backing up existing ${r} terminal keybindings. Bailing out.`)}${h}${pe.dim(`See ${oe(o)}`)}${h}${pe.dim(`Backup path: ${oe(K)}`)}${h}`;
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
      E = c.find(item => item.key === S.key && item.command === S.command && item.when === S.when);
    if (E) {
      let v = pe.dim(`See ${oe(o)}`);
      if (E.args?.text === S.args.text) return `${Pn("success", n)(`${r} terminal Shift+Enter key binding already configured`)}${h}${v}${h}`;
      return `${Pn("warning", n)(`${r} already has a Shift+Enter terminal binding with different args; leaving it as-is.`)}${h}${v}${h}`;
    }
    let L = LFo(l, S);
    return await je(o, L, {
      encoding: "utf-8"
    }), `${Pn("success", n)(`Installed ${r} terminal Shift+Enter key binding`)}${h}${pe.dim(`See ${oe(o)}`)}${h}`;
  } catch (error) {
    throw t(`Failed to install ${r} terminal Shift+Enter keybinding: ${error instanceof Error ? error.message : String(error)}`, {
      level: "error"
    }), Error(`Failed to install ${r} terminal Shift+Enter key binding`);
  }
}
async function bt(e) {
  let {
    code: code_3
  } = await tt("/usr/libexec/PlistBuddy", ["-c", `Add :'Window Settings':'${e}':useOptionAsMetaKey bool true`, i_t()]);
  if (code_3 !== 0) {
    let {
      code: code_4
    } = await tt("/usr/libexec/PlistBuddy", ["-c", `Set :'Window Settings':'${e}':useOptionAsMetaKey true`, i_t()]);
    if (code_4 !== 0) return t(`Failed to enable Option as Meta key for Terminal.app profile: ${e}`, {
      level: "error"
    }), !1;
  }
  return !0;
}
async function wt(e) {
  let {
    code: code_5
  } = await tt("/usr/libexec/PlistBuddy", ["-c", `Add :'Window Settings':'${e}':Bell bool false`, i_t()]);
  if (code_5 !== 0) {
    let {
      code: code_6
    } = await tt("/usr/libexec/PlistBuddy", ["-c", `Set :'Window Settings':'${e}':Bell false`, i_t()]);
    if (code_6 !== 0) return t(`Failed to disable audio bell for Terminal.app profile: ${e}`, {
      level: "error"
    }), !1;
  }
  return !0;
}
async function or(e, r) {
  let n = (hBo() ?? 0) >= 27,
    s = n_();
  if (n && s) return `${Pn("success", e)("No Terminal.app changes needed.")}${h}${pe.dim("Shift+Return already enters a newline on this macOS version, and screen-reader mode leaves the audible bell setting unchanged.")}${h}`;
  try {
    if (!(await D8r(r))) throw Error("Failed to create backup of Terminal.app preferences, bailing out");
    let {
      stdout: stdout_2,
      code: code_7
    } = await tt("defaults", ["read", "com.apple.Terminal", "Default Window Settings"]);
    if (code_7 !== 0 || !stdout_2.trim()) throw Error("Failed to read default Terminal.app profile");
    let {
      stdout: stdout_3,
      code: code_8
    } = await tt("defaults", ["read", "com.apple.Terminal", "Startup Window Settings"]);
    if (code_8 !== 0 || !stdout_3.trim()) throw Error("Failed to read startup Terminal.app profile");
    let E = !1,
      L = stdout_2.trim(),
      v = n ? !1 : await bt(L),
      K = s ? !1 : await wt(L);
    if (v || K) E = !0;
    let j = stdout_3.trim();
    if (j !== L) {
      let z = n ? !1 : await bt(j),
        I = s ? !1 : await wt(j);
      if (z || I) E = !0;
    }
    if (!E) {
      if (n) throw Error("Failed to disable audio bell for any Terminal.app profile");
      if (s) throw Error("Failed to enable Option as Meta key for any Terminal.app profile");
      throw Error("Failed to enable Option as Meta key or disable audio bell for any Terminal.app profile");
    }
    await tt("killall", ["cfprefsd"]), await s_t(r);
    let ee = [Pn("success", e)("Configured Terminal.app settings:")];
    if (!n) ee.push(Pn("success", e)('- Enabled "Use Option as Meta key"'));
    if (!s) ee.push(Pn("success", e)("- Disabled the audible bell"));else ee.push(pe.dim("- Left the audible bell setting unchanged (screen-reader mode uses it)"));
    let V = n ? pe.dim("Shift+Return will now enter a newline.") : pe.dim("Option+Enter will now enter a newline.");
    return `${ee.join(h)}${h}${V}${h}${pe.dim("You must restart Terminal.app for changes to take effect.")}${h}`;
  } catch (error) {
    t(`Terminal.app setup failed: ${error instanceof Error ? error.message : String(error)}`, {
      level: "error"
    });
    let l = await nVt(r),
      c = n ? "Failed to disable the audio bell for Terminal.app." : "Failed to enable Option as Meta key for Terminal.app.";
    if (l.status === "restored") throw Error(`${c} Your settings have been restored from backup.`);else if (l.status === "failed") throw Error(`${c} Restoring from backup failed, try manually with: defaults import com.apple.Terminal ${l.backupPath}`);else throw Error(`${c} No backup was available to restore from.`);
  }
}
async function ar(e) {
  let n = [],
    XDG_CONFIG_HOME = a.XDG_CONFIG_HOME;
  if (XDG_CONFIG_HOME) n.push(ne(XDG_CONFIG_HOME, "alacritty", "alacritty.toml"));else n.push(ne(Ke(), ".config", "alacritty", "alacritty.toml"));
  if (ve() === "win32") {
    let APPDATA = a.APPDATA;
    if (APPDATA) n.push(ne(APPDATA, "alacritty", "alacritty.toml"));
  }
  let o = null,
    l = "",
    c = !1;
  for (let f of n) try {
    l = await Te(f, {
      encoding: "utf-8"
    }), o = f, c = !0;
    break;
  } catch (error) {
    if (!Et(error)) throw error;
  }
  if (!o) o = n[0] ?? null;
  if (!o) throw Error("No valid config path found for Alacritty");
  try {
    if (c) {
      if (l.includes('mods = "Shift"') && l.includes('key = "Return"')) return `${Pn("success", e)("Alacritty Shift+Enter key binding already configured")}${h}${pe.dim(`See ${oe(o)}`)}${h}`;
      let S = Pe(4).toString("hex"),
        E = `${o}.${S}.bak`;
      try {
        await Me(o, E);
      } catch {
        return `${Pn("warning", e)("Error backing up existing Alacritty config. Bailing out.")}${h}${pe.dim(`See ${oe(o)}`)}${h}${pe.dim(`Backup path: ${oe(E)}`)}${h}`;
      }
    } else await st(nr(o), {
      recursive: !0
    });
    let f = l;
    if (l && !l.endsWith(`
`)) f += `
`;
    return f += `
[[keyboard.bindings]]
key = "Return"
mods = "Shift"
chars = "\\u001B\\r"
`, await je(o, f, {
      encoding: "utf-8"
    }), `${Pn("success", e)("Installed Alacritty Shift+Enter key binding")}${h}${Pn("success", e)("You may need to restart Alacritty for changes to take effect")}${h}${pe.dim(`See ${oe(o)}`)}${h}`;
  } catch (error) {
    throw t(`Failed to install Alacritty keybinding: ${error instanceof Error ? error.message : String(error)}`, {
      level: "error"
    }), Error("Failed to install Alacritty Shift+Enter key binding");
  }
}
var nt = ["terminal::SendText", "\x1B\r"];
function yt(e) {
  return G(e) && e.context === "Terminal" && G(e.bindings) && "shift-enter" in e.bindings;
}
async function lr(e) {
  let r = O() === "linux" ? a.XDG_CONFIG_HOME : void 0,
    n = r ? ne(r, "zed") : ne(Ke(), ".config", "zed"),
    s = ne(n, "keymap.json"),
    o = pe.dim(`See ${oe(s)}`),
    l = pe.dim(`To add the binding yourself, add this block to the keymap array in ${oe(s)}:${h}{ "context": "Terminal", "bindings": { "shift-enter": ["terminal::SendText", "\\u001b\\r"] } }`),
    message_2 = `${Pn("success", e)("Installed Zed Shift+Enter key binding")}${h}${o}${h}`,
    message = `${Pn("warning", e)("Couldn't read your Zed keymap, so it was left unchanged.")}${h}${l}${h}`,
    message_3 = `${Pn("warning", e)("Your Zed keymap isn't a readable list of keybindings, so it was left unchanged.")}${h}${l}${h}`;
  try {
    await st(n, {
      recursive: !0
    });
    let E = null;
    try {
      E = await Te(s, {
        encoding: "utf-8"
      });
    } catch (error) {
      if (!Et(error)) throw error;
      if (!B(error)) return {
        message: message,
        installed: !1
      };
    }
    if (E === null || Jo(E).trim() === "") return await Cn(s, b([{
      context: "Terminal",
      bindings: {
        "shift-enter": nt
      }
    }], null, 2) + `
`), {
      message: message_2,
      installed: !0
    };
    let L = [],
      v = Jo(E),
      K = bft(v, L, {
        allowTrailingComma: !0
      });
    if (L.length > 0 || !Array.isArray(K)) return {
      message: message_3,
      installed: !1
    };
    if (K.some(yt)) return {
      message: `${Pn("success", e)("Zed Shift+Enter key binding already configured")}${h}${o}${h}`,
      installed: !0
    };
    let j = Pe(4).toString("hex"),
      ee = `${s}.${j}.bak`;
    try {
      await Me(s, ee);
    } catch (error) {
      return t(`Failed to back up Zed keymap: ${error instanceof Error ? error.message : String(error)}`, {
        level: "error"
      }), {
        message: `${Pn("warning", e)("Couldn't back up your Zed keymap; not modifying it.")}${h}${l}${h}`,
        installed: !1
      };
    }
    let V = K.findIndex(item => G(item) && item.context === "Terminal" && G(item.bindings)),
      formattingOptions = {
        insertSpaces: !0,
        tabSize: 2
      },
      I = null;
    try {
      let k = V >= 0 ? YUt(v, [V, "bindings", "shift-enter"], nt, {
        formattingOptions: formattingOptions
      }) : YUt(v, [K.length], {
        context: "Terminal",
        bindings: {
          "shift-enter": nt
        }
      }, {
        formattingOptions: formattingOptions,
        isArrayInsertion: !0
      });
      I = k.length > 0 ? Egn(v, k) : null;
    } catch (error) {
      t(`Failed to edit Zed keymap: ${error instanceof Error ? error.message : String(error)}`, {
        level: "error"
      });
    }
    let F = [],
      Z = I === null ? null : bft(I, F, {
        allowTrailingComma: !0
      });
    if (I === null || F.length > 0 || !Array.isArray(Z) || !Z.some(yt)) return {
      message: `${Pn("warning", e)("Couldn't update your Zed keymap, so it was left unchanged.")}${h}${l}${h}`,
      installed: !1
    };
    return await Cn(s, I), {
      message: message_2,
      installed: !0
    };
  } catch (error) {
    throw t(`Failed to install Zed Shift+Enter key binding: ${error instanceof Error ? error.message : String(error)}`, {
      level: "error"
    }), Error("Failed to install Zed Shift+Enter key binding");
  }
}
var timeoutMs = 3000,
  JGt = "Press \u2190 again to go back to agents",
  text_3 = "Ambiguous \u2190, press again to detach",
  At = 1000,
  Tvn = 150,
  ur = 150;
function Cvn() {
  return {
    editedEmptyAtMs: 0,
    armedAtMs: 0,
    absorbAnchorMs: 0,
    lastQualifiedLeftPressMs: 0,
    attachConfirmArmedAtMs: 0,
    absorbLogged: !1
  };
}
function Rvn(e, r, n, s = x("tengu_left_arrow_editing_guard", !0), o = jbt(r), l = uSe()) {
  if (n !== !0) return "reject";
  let c = S => S !== 0 && S >= l;
  if (o) {
    if (c(e.absorbAnchorMs) && r - e.absorbAnchorMs < At) return "attach-absorb";
    if (c(e.attachConfirmArmedAtMs) && r - e.attachConfirmArmedAtMs <= 3000) return r - e.attachConfirmArmedAtMs >= ur ? "fire" : "attach-absorb";
    return "attach-arm";
  }
  if (!s) return "fire";
  if (c(e.absorbAnchorMs) && r - e.absorbAnchorMs < At || c(e.lastQualifiedLeftPressMs) && r - e.lastQualifiedLeftPressMs < Tvn) return "absorb";
  if (c(e.armedAtMs) && r - e.armedAtMs <= 3000) return "fire";
  return c(e.editedEmptyAtMs) && r - e.editedEmptyAtMs < 2000 ? "arm" : "fire";
}
function Avn(e, r, n) {
  switch (r) {
    case "fire":
      e.armedAtMs = 0, e.attachConfirmArmedAtMs = 0, e.absorbAnchorMs = n, e.lastQualifiedLeftPressMs = n, e.absorbLogged = !1;
      return;
    case "arm":
      e.armedAtMs = n, e.absorbAnchorMs = n, e.lastQualifiedLeftPressMs = n, e.absorbLogged = !1;
      return;
    case "absorb":
      if (n - e.lastQualifiedLeftPressMs < Tvn) e.absorbAnchorMs = n;
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
function xvn(e, r, n) {
  let ms_since_stamp = r - uSe();
  switch (e) {
    case "fire":
      if (uSe() !== 0) i("tengu_left_arrow_fired", {
        ms_since_stamp: ms_since_stamp
      });
      return;
    case "arm":
      i("tengu_left_arrow_blocked", {
        reason: y("editing-quiet")
      });
      return;
    case "attach-arm":
      i("tengu_left_arrow_blocked", {
        reason: y("attach-quiet-hint"),
        ms_since_stamp: ms_since_stamp
      }), t(`leftArrowGesture: attach-quiet hint armed (ms_since_stamp=${ms_since_stamp})`, {
        level: "debug"
      });
      return;
    case "attach-absorb":
      i("tengu_left_arrow_blocked", {
        reason: y("attach-quiet"),
        ms_since_stamp: ms_since_stamp
      }), t(`leftArrowGesture: attach-quiet silent absorb (ms_since_stamp=${ms_since_stamp})`, {
        level: "debug"
      });
      return;
    case "reject":
      if (Ga().claim("left_arrow_not_solo_reject")) i("tengu_left_arrow_blocked", {
        reason: y("not-solo")
      });
      return;
    case "absorb":
      if (n.absorbAnchorMs === r || n.absorbLogged) return;
      n.absorbLogged = !0;
      let ms_since_press = r - n.absorbAnchorMs;
      i("tengu_left_arrow_blocked", {
        reason: y("absorb"),
        ms_since_press: ms_since_press
      }), t(`leftArrowGesture: human-cadence press absorbed inside the confirm gap (ms_since_press=${ms_since_press})`, {
        level: "debug"
      });
      return;
  }
}
var Ue = /[\u001b\u0080-\u009f]/g,
  Ct = "\u2060";
function Ot(e, r, n = Wu) {
  let s = e.search(Ue) === -1 ? e : cr(e),
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
      rows: $t(e, r),
      degraded: !0
    };
    let E = startOffset + S.length,
      L = s.startsWith(`\r
`, E) ? 2 : s[E] === `
` || s[E] === "\r" ? 1 : 0;
    rows.push({
      text: e.slice(startOffset, E),
      startOffset: startOffset,
      isPrecededByNewline: isPrecededByNewline,
      endsWithNewline: L > 0
    }), isPrecededByNewline = L > 0, startOffset = E + L;
  }
  return startOffset === e.length ? {
    rows: rows,
    degraded: !1
  } : {
    rows: $t(e, r),
    degraded: !0
  };
}
function cr(e) {
  let r = WJ({
    forOutput: !0
  });
  return e.split(`
`).map(item => item.search(Ue) === -1 ? item : item.split("\r").map(item => item.search(Ue) === -1 ? item : [...r.feed(item), ...r.flush()].map(item => item.type === "sequence" ? Ct.repeat(item.value.length) : item.value.replace(Ue, Ct)).join("")).join("\r")).join(`
`);
}
function $t(e, r) {
  let n = [],
    s = 0;
  for (let o of e.split(/\r\n|[\n\r]/)) {
    let l = 0,
      c = 0;
    for (let {
      segment: segment,
      index: index
    } of ya().segment(o)) {
      let v = ie(segment);
      if (c + v > r && index > l) n.push({
        text: o.slice(l, index),
        startOffset: s + l,
        isPrecededByNewline: l === 0,
        endsWithNewline: !1
      }), l = index, c = 0;
      c += v;
    }
    let f = s + o.length,
      S = e.startsWith(`\r
`, f) ? 2 : f < e.length ? 1 : 0;
    n.push({
      text: o.slice(l),
      startOffset: s + l,
      isPrecededByNewline: l === 0,
      endsWithNewline: S > 0
    }), s = f + S;
  }
  return n;
}
var dr = /^[\p{L}\p{N}\p{M}_]+$/u,
  fr = /[\p{L}\p{N}][\p{L}\p{N}\p{M}]*/gu,
  Se = /\s/,
  ot = "(?:\\[(?:Pasted text|Image|Audio|\\.\\.\\.Truncated text) #\\d+(?: \\+\\d+ lines)?\\.*\\]|\\[\u29C9 [^\\]\\n]+\\])",
  regExp = new RegExp(ot + "$"),
  regExp_2 = new RegExp("^" + ot),
  regExp_3 = new RegExp(ot, "g"),
  lIe = e => dr.test(e),
  fje = e => Se.test(e),
  mje = e => e.length > 0 && !fje(e) && !lIe(e);
class ki {
  measuredText;
  selection;
  offset;
  constructor(e, r = 0, n = 0) {
    this.measuredText = e;
    this.selection = n;
    this.offset = Math.max(0, Math.min(this.text.length, r));
  }
  static fromText(e, r, n = 0, s = 0) {
    return new ki(new kt(e, r - 1), n, s);
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
      l = Math.min(n.length, o + e);
    if (l - o < e) o = Math.max(0, l - e);
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
  render(e, r, n, s, o, l, c, f) {
    let S = this.measuredText.getWrappedLines(),
      {
        startLine: startLine_3,
        endLine: endLine_3
      } = this.getViewportLineRange(o);
    if (l !== void 0) {
      let V = Math.min(l, this.offset),
        z = Math.max(l, this.offset),
        I = c ? this.findLogicalLineStart(V) : V,
        F = c ? this.findLogicalLineEnd(z) : this.measuredText.nextOffset(z);
      return S.slice(startLine_3, endLine_3).map((item, index) => {
        let de = (f ?? !1) && (item.endsWithNewline || index + startLine_3 === S.length - 1),
          {
            displayText: displayText,
            displayStartOffset: displayStartOffset
          } = item,
          ue = displayStartOffset + displayText.length;
        if (F <= displayStartOffset || I >= ue) {
          if (displayStartOffset === ue && I <= displayStartOffset && (c ? F >= ue : F > ue)) return f ?? !1 ? "" : n(" ");
          return de ? displayText : displayText.trimEnd();
        }
        if (displayStartOffset === ue) return f ?? !1 ? "" : n(" ");
        let te = Math.max(0, I - displayStartOffset),
          J = Math.min(displayText.length, F - displayStartOffset);
        if (f ?? !1) {
          let H = de ? displayText : displayText.trimEnd(),
            Y = Math.min(te, H.length),
            re = Math.min(J, H.length);
          return H.slice(0, Y) + n(H.slice(Y, re)) + H.slice(re);
        }
        return displayText.slice(0, te) + n(displayText.slice(te, J)) + displayText.slice(J).trimEnd();
      }).join(`
`);
    }
    let {
        line: line_2,
        column: column
      } = this.getPosition(),
      j = this.measuredText.getWrappedText(),
      ee = this.measuredText.getWrappedLines();
    return j.slice(startLine_3, endLine_3).map((item, z) => {
      let I = z + startLine_3,
        F = (f ?? !1) && ((ee[I]?.endsWithNewline ?? !1) || I === j.length - 1),
        Z = item;
      if (r) {
        let H = Array.from(ya().segment(item));
        if (I === j.length - 1) {
          let Y = Math.min(6, H.length),
            re = H.length - Y,
            he = H.length > Y ? H[re].index : 0;
          Z = r.repeat(re) + item.slice(he);
        } else Z = r.repeat(H.length);
      }
      if (line_2 !== I) return F ? Z : Z.trimEnd();
      let k = "",
        de = e,
        U = "",
        A = 0,
        ue = !1;
      for (let {
        segment: segment_2
      } of ya().segment(Z)) {
        if (ue) {
          U += segment_2;
          continue;
        }
        let Y = A + ie(segment_2);
        if (Y > column) de = segment_2, ue = !0;else A = Y, k += segment_2;
      }
      let te,
        J = "";
      if (s && I === j.length - 1 && this.isAtEnd() && s.text.length > 0) {
        let H = q8e(s.text) || s.text[0];
        te = e ? n(H) : H;
        let Y = s.text.slice(H.length);
        if (Y.length > 0) J = s.dim(Y);
      } else te = e ? n(de) : de;
      if (f && !F && e === "") return (k + te + J + U).trimEnd();
      return k + te + J + (F ? U : U.trimEnd());
    }).join(`
`);
  }
  left() {
    if (this.offset === 0) return this;
    let e = this.placeholderEndingAt(this.offset);
    if (e) return new ki(this.measuredText, e.start);
    let r = this.measuredText.prevOffset(this.offset);
    return new ki(this.measuredText, r);
  }
  right() {
    if (this.offset >= this.text.length) return this;
    let e = this.placeholderStartingAt(this.offset);
    if (e) return new ki(this.measuredText, e.end);
    let r = this.measuredText.nextOffset(this.offset);
    return new ki(this.measuredText, Math.min(r, this.text.length));
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
      let l = this.getOffset({
        line: line_3 - 1,
        column: column_3
      });
      return new ki(this.measuredText, l, 0);
    }
    let o = this.getOffset({
      line: line_3 - 1,
      column: column_2
    });
    return new ki(this.measuredText, o, 0);
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
      let l = this.getOffset({
        line: line_4 + 1,
        column: column_5
      });
      return new ki(this.measuredText, l, 0);
    }
    let o = this.getOffset({
      line: line_4 + 1,
      column: column_4
    });
    return new ki(this.measuredText, o, 0);
  }
  startOfCurrentLine() {
    let {
      line: line_5
    } = this.getPosition();
    return new ki(this.measuredText, this.getOffset({
      line: line_5,
      column: 0
    }), 0);
  }
  startOfLine() {
    let {
      line: line_6,
      column: column_6
    } = this.getPosition();
    if (column_6 === 0 && line_6 > 0) return new ki(this.measuredText, this.getOffset({
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
    return new ki(this.measuredText, o, 0);
  }
  endOfLine() {
    let {
        line: line_8,
        column: column_8
      } = this.getPosition(),
      column_10 = this.measuredText.getLineLength(line_8);
    if (column_8 >= column_10 && line_8 < this.measuredText.lineCount - 1) {
      let column_9 = this.measuredText.getLineLength(line_8 + 1),
        l = this.getOffset({
          line: line_8 + 1,
          column: column_9
        });
      return new ki(this.measuredText, l, 0);
    }
    let s = this.getOffset({
      line: line_8,
      column: column_10
    });
    return new ki(this.measuredText, s, 0);
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
      l = e + o,
      c = this.measuredText.snapToGraphemeBoundary(l);
    return new ki(this.measuredText, c, 0);
  }
  endOfLogicalLine() {
    return new ki(this.measuredText, this.findLogicalLineEnd(), 0);
  }
  lastCharInLogicalLine() {
    let e = this.findLogicalLineStart(),
      r = this.findLogicalLineEnd(),
      n = r > e ? this.measuredText.prevOffset(r) : e;
    return new ki(this.measuredText, n, 0);
  }
  startOfLogicalLine() {
    return new ki(this.measuredText, this.findLogicalLineStart(), 0);
  }
  firstNonBlankInLogicalLine() {
    let {
        start: start_2,
        end: end_3
      } = this.getLogicalLineBounds(),
      s = this.text.slice(start_2, end_3).match(/\S/),
      o = start_2 + (s?.index ?? 0);
    return new ki(this.measuredText, o, 0);
  }
  upLogicalLine() {
    let {
      start: start_3
    } = this.getLogicalLineBounds();
    if (start_3 === 0) return new ki(this.measuredText, 0, 0);
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
    if (end_4 >= this.text.length) return new ki(this.measuredText, this.text.length, 0);
    let n = this.offset - start_4,
      s = end_4 + 1,
      o = this.findLogicalLineEnd(s);
    return this.createCursorWithColumn(s, o, n);
  }
  forwardWord() {
    if (this.isAtEnd()) return this;
    let e = this.placeholderStartingAt(this.offset) ?? this.placeholderContaining(this.offset);
    if (e) return new ki(this.measuredText, e.end);
    for (let r of this.measuredText.getReadlineWordBoundaries()) if (r.end > this.offset) {
      let n = this.snapOutOfPlaceholder(r.end, "end");
      return new ki(this.measuredText, n);
    }
    return new ki(this.measuredText, this.text.length);
  }
  backwardWord() {
    if (this.isAtStart()) return this;
    let e = this.placeholderEndingAt(this.offset) ?? this.placeholderContaining(this.offset);
    if (e) return new ki(this.measuredText, e.start);
    let r = this.measuredText.getReadlineWordBoundaries();
    for (let n = r.length - 1; n >= 0; n--) {
      let s = r[n];
      if (s.start < this.offset) {
        let o = this.snapOutOfPlaceholder(s.start, "start");
        return new ki(this.measuredText, o);
      }
    }
    return new ki(this.measuredText, 0);
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
      while (o < this.text.length && Se.test(this.graphemeAt(o))) o = this.measuredText.nextOffset(o);
      return new ki(this.measuredText, o);
    }
    let offset = this.offset,
      n = o => this.measuredText.nextOffset(o),
      s = this.graphemeAt(offset);
    if (!s) return this;
    if (lIe(s)) while (offset < this.text.length && lIe(this.graphemeAt(offset))) offset = n(offset);else if (mje(s)) while (offset < this.text.length && mje(this.graphemeAt(offset))) offset = n(offset);
    while (offset < this.text.length && Se.test(this.graphemeAt(offset))) offset = n(offset);
    return new ki(this.measuredText, this.snapOutOfPlaceholder(offset, "end"));
  }
  endOfVimWord() {
    if (this.isAtEnd()) return this;
    let e = this.placeholderStartingAt(this.offset) ?? this.placeholderContaining(this.offset);
    if (e && this.offset < e.end - 1) return new ki(this.measuredText, e.end - 1);
    let r = this.text,
      offset_2 = this.offset,
      s = c => this.measuredText.nextOffset(c);
    if (this.graphemeAt(offset_2) === "") return this;
    offset_2 = s(offset_2);
    while (offset_2 < r.length && Se.test(this.graphemeAt(offset_2))) offset_2 = s(offset_2);
    if (offset_2 >= r.length) return new ki(this.measuredText, r.length);
    let o = this.graphemeAt(offset_2);
    if (lIe(o)) while (offset_2 < r.length) {
      let c = s(offset_2);
      if (c >= r.length || !lIe(this.graphemeAt(c))) break;
      offset_2 = c;
    } else if (mje(o)) while (offset_2 < r.length) {
      let c = s(offset_2);
      if (c >= r.length || !mje(this.graphemeAt(c))) break;
      offset_2 = c;
    }
    let l = this.placeholderStartingAt(offset_2) ?? this.placeholderContaining(offset_2);
    if (l) offset_2 = l.end - 1;
    return new ki(this.measuredText, offset_2);
  }
  prevVimWord() {
    if (this.isAtStart()) return this;
    let e = this.placeholderEndingAt(this.offset);
    if (e) return new ki(this.measuredText, e.start);
    let r = this.placeholderContaining(this.offset);
    if (r) return new ki(this.measuredText, r.start);
    let offset_3 = this.offset,
      s = l => this.measuredText.prevOffset(l);
    offset_3 = s(offset_3);
    while (offset_3 > 0 && Se.test(this.graphemeAt(offset_3))) offset_3 = s(offset_3);
    if (offset_3 === 0 && Se.test(this.graphemeAt(0))) return new ki(this.measuredText, 0);
    let o = this.graphemeAt(offset_3);
    if (lIe(o)) while (offset_3 > 0) {
      let l = s(offset_3);
      if (!lIe(this.graphemeAt(l))) break;
      offset_3 = l;
    } else if (mje(o)) while (offset_3 > 0) {
      let l = s(offset_3);
      if (!mje(this.graphemeAt(l))) break;
      offset_3 = l;
    }
    return new ki(this.measuredText, this.snapOutOfPlaceholder(offset_3, "start"));
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
    if (e && this.offset < e.end - 1) return new ki(this.measuredText, e.end - 1);
    let r = this;
    if (!r.isOverWhitespace() && (r.right().isOverWhitespace() || r.right().isAtEnd())) return r = r.right(), r.endOfWORD();
    if (r.isOverWhitespace()) {
      r = r.nextWORD();
      let s = r.placeholderStartingAt(r.offset);
      if (s) return new ki(this.measuredText, s.end - 1);
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
      l = o + this.text.slice(offset_5),
      c = o.normalize("NFC").length,
      f = ki.fromText(l, this.columns, c),
      S = c !== offset_4 + r.normalize("NFC").length,
      {
        measuredText: measuredText,
        offset: offset_6
      } = f;
    if (S && measuredText.snapToGraphemeBoundary(offset_6) !== offset_6) return new ki(measuredText, measuredText.nextOffset(offset_6));
    return f;
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
  deleteToLineStart() {
    if (this.offset > 0 && this.text[this.offset - 1] === `
`) return {
      cursor: this.left().modifyText(this),
      killed: `
`
    };
    let e = this.startOfLine();
    return this.killRange(e.offset, this.offset);
  }
  deleteToLineEnd() {
    if (this.text[this.offset] === `
`) return {
      cursor: this.modifyText(this.right()),
      killed: `
`
    };
    return this.killRange(this.offset, this.endOfLine().offset);
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
      o = new ki(this.measuredText, n),
      l = new ki(this.measuredText, s);
    return {
      cursor: o.modifyText(l),
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
    return new ki(this.measuredText, 0, 0);
  }
  startOfLastLine() {
    let e = this.text.lastIndexOf(`
`);
    if (e === -1) return this.startOfLine();
    return new ki(this.measuredText, e + 1, 0);
  }
  goToLine(e) {
    let r = this.text.split(`
`),
      n = Math.min(Math.max(0, e - 1), r.length - 1),
      s = 0;
    for (let o = 0; o < n; o++) s += (r[o]?.length ?? 0) + 1;
    return new ki(this.measuredText, s, 0);
  }
  endOfFile() {
    return new ki(this.measuredText, this.text.length, 0);
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
    let s = this.text,
      o = r === "f" || r === "t",
      l = r === "t" || r === "T",
      c = 0;
    if (o) {
      let f = this.measuredText.nextOffset(this.offset);
      while (f < s.length) {
        if (this.graphemeAt(f) === e) {
          if (c++, c === n) return l ? Math.max(this.offset, this.measuredText.prevOffset(f)) : f;
        }
        f = this.measuredText.nextOffset(f);
      }
    } else {
      if (this.offset === 0) return null;
      let f = this.measuredText.prevOffset(this.offset);
      while (f >= 0) {
        if (this.graphemeAt(f) === e) {
          if (c++, c === n) return l ? Math.min(this.offset, this.measuredText.nextOffset(f)) : f;
        }
        if (f === 0) break;
        f = this.measuredText.prevOffset(f);
      }
    }
    return null;
  }
}
class Lt {
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
class kt {
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
      } = Ot(this.text, this.columns);
      if (degraded) gr(this.columns, this.text.length);
      this._wrappedLines = rows_2.map(item => new Lt(item.text, item.startOffset, item.isPrecededByNewline, item.endsWithNewline));
    }
    return this._wrappedLines;
  }
  getGraphemeBoundaries() {
    if (!this.graphemeBoundaries) {
      this.graphemeBoundaries = [];
      for (let {
        index: index_2
      } of ya().segment(this.text)) this.graphemeBoundaries.push(index_2);
      this.graphemeBoundaries.push(this.text.length);
    }
    return this.graphemeBoundaries;
  }
  wordBoundariesCache;
  getWordBoundaries() {
    if (!this.wordBoundariesCache) {
      this.wordBoundariesCache = [];
      for (let e of tzr().segment(this.text)) this.wordBoundariesCache.push({
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
        for (let o of s.matchAll(fr)) {
          let start_5 = this.snapToGraphemeBoundary(n.start + o.index),
            c = n.start + o.index + o[0].length,
            f = this.snapToGraphemeBoundary(c),
            end_5 = f === c ? c : this.nextOffset(f),
            E = e.at(-1);
          if (E && (start_5 < E.end || start_5 === E.end && r)) E.end = Math.max(E.end, end_5);else e.push({
            start: start_5,
            end: end_5
          });
          r = end_5 !== c;
        }
      }
      this.readlineWordBoundariesCache = e;
    }
    return this.readlineWordBoundariesCache;
  }
  binarySearchBoundary(e, r, n) {
    let s = 0,
      o = e.length - 1,
      l = n ? this.text.length : 0;
    while (s <= o) {
      let c = Math.floor((s + o) / 2),
        f = e[c];
      if (f === void 0) break;
      if (n) {
        if (f > r) l = f, o = c - 1;else s = c + 1;
      } else if (f < r) l = f, s = c + 1;else o = c - 1;
    }
    return l;
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
    } of ya().segment(e)) {
      let c = ie(segment_3);
      if (n + c > r) break;
      n += c, s = index_3 + segment_3.length;
    }
    return s;
  }
  offsetAtDisplayWidth(e) {
    if (e <= 0) return 0;
    let r = 0,
      n = this.getGraphemeBoundaries();
    for (let s = 0; s < n.length - 1; s++) {
      let o = n[s],
        l = n[s + 1];
      if (o === void 0 || l === void 0) continue;
      let c = this.text.substring(o, l),
        f = ie(c);
      if (r + f > e) return o;
      r += f;
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
      l = r.startOffset + o;
    return this.snapToGraphemeBoundary(l);
  }
  getLineLength(e) {
    let r = this.getLine(e);
    return ie(r.text);
  }
  getPositionFromOffset(e) {
    let wrappedLines_2 = this.wrappedLines;
    for (let line_9 = 0; line_9 < wrappedLines_2.length; line_9++) {
      let l = wrappedLines_2[line_9],
        c = wrappedLines_2[line_9 + 1];
      if (e >= l.startOffset && (!c || e < c.startOffset)) {
        let f = e - l.startOffset,
          S;
        if (l.isPrecededByNewline) S = this.stringIndexToDisplayWidth(l.text, f);else {
          let E = l.displayStartOffset - l.startOffset;
          if (f < E) S = 0;else {
            let displayText_2 = l.displayText,
              v = f - E;
            S = this.stringIndexToDisplayWidth(displayText_2, v);
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
function gr(e, r) {
  if (!Ga().claim("measured_text_wrap_fallback")) return;
  d(new P(`Wrapped rows do not tile the text (columns=${e}, length=${r}); fell back to plain hard wrapping`, "Wrapped rows do not tile the text; fell back to plain hard wrapping"));
}
N();
class _t {
  prewarmed = !1;
  claim() {
    if (this.prewarmed) return !1;
    return this.prewarmed = !0, !0;
  }
  reset() {
    this.prewarmed = !1;
  }
}
var Wn = new q(() => new _t());
function vt() {}
function Rt(e) {
  return !1;
}
var br = () => {};
function wr(e, r) {
  if (e === "") return;
  if (r !== "") {
    pJ("deleted");
    return;
  }
  let n = e.trim() === "" ? e.includes(`
`) ? "new line" : e.includes("\t") ? "tab" : "space" : e.replaceAll(`
`, " ").trim();
  pJ(n);
}
var yr = new Set(["insert", "clear", "enter", "center", "undefined", "mouse", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11", "f12"]);
function Ier() {
  return a.terminal === "Apple_Terminal" && Rt("shift");
}
function Pt(e) {
  let r = new Map(e);
  return function (n) {
    return (r.get(n) ?? br)(n);
  };
}
function o_t({
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
  columns: columns,
  leadingPill: leadingPill,
  onImagePaste: onImagePaste,
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
  editRelay: editRelay,
  selectionAnchor: selectionAnchor,
  selectionLinewise = !1
}) {
  let we = Js(),
    ae = w_t();
  if (a.terminal === "Apple_Terminal") vt();
  let offset_7 = externalOffset,
    setOffset = onOffsetChange,
    D = leadingPill?.text ?? "",
    w = ki.fromText(D + value, columns, D.length + offset_7),
    Ye = !1,
    ze,
    qe = !1;
  function ye(u) {
    return inputFilter && ze ? inputFilter(u, ze) : u;
  }
  let {
      addNotification: addNotification,
      removeNotification: removeNotification
    } = Zr(),
    {
      storageV5: storageV5
    } = ke(),
    [be] = g(Cvn),
    key = "left-arrow-again-for-agents",
    De = T({
      key: "Ctrl-C",
      pending: !1
    }),
    Dt = $j(u => {
      De.current.pending = u, onExitMessage?.(u, De.current.key);
    }, () => onExit?.(), () => {
      if (!disableCtrlCClear && value) onChange(""), setOffset(0), onHistoryReset?.();
    });
  function ct(u) {
    if (!De.current.pending) De.current.key = u;
    Dt();
  }
  let Bt = $j(u => {
    if (!value) return;
    if (onEscapeMessage) {
      onEscapeMessage(u);
      return;
    }
    if (!u) return;
    addNotification({
      key: "escape-again-to-clear",
      kind: "feedback",
      text: "Esc again to clear",
      priority: "immediate",
      timeoutMs: 1000
    });
  }, () => {
    if (onEscapeMessage?.(!1), removeNotification("escape-again-to-clear"), value) {
      if (historyOnClear && mask === "" && value.trim() !== "") {
        let pastedContents = getPastedContents ? Qr(getPastedContents(), me => me.type === "text" && me.unavailable === !0) : void 0,
          submitMode = getInputMode?.(),
          display = submitMode !== void 0 ? NIe(value, submitMode) : value,
          Q = pastedContents ? {
            display: display,
            pastedContents: pastedContents
          } : display;
        if (submitMode !== void 0) Ume(Q, storageV5, {
          submitMode: submitMode
        });else Ume(Q, storageV5);
      }
      onChange(""), setOffset(0), onHistoryReset?.();
    }
  });
  function Ft() {
    if (w.text === D && value === "") return ct("Ctrl-D"), w;
    return w.del();
  }
  function dt() {
    if (D !== "" && w.offset === D.length) return ki.fromText(w.text.slice(D.length), columns);
    return w.backspace();
  }
  function Oe(u, direction) {
    let text = u.startsWith(D) ? u.slice(D.length) : u;
    return ae.dispatch(mask === "" ? {
      type: "kill",
      text: text,
      direction: direction
    } : {
      type: "interrupt"
    }), wr(text, mask), text;
  }
  function Qe() {
    let {
      cursor: cursor,
      killed: killed
    } = w.deleteToLineEnd();
    return Oe(killed, "append"), cursor;
  }
  function ft() {
    let {
        cursor: cursor_2,
        killed: killed_2
      } = w.deleteToLineStart(),
      M = Oe(killed_2, "prepend");
    if (mask === "" && M.length >= 3) addNotification({
      key: "kill-paste-hint",
      kind: "hint",
      text: "Ctrl+Y to paste deleted text",
      priority: "immediate",
      timeoutMs: 5000
    });
    return cursor_2;
  }
  function Ht() {
    let {
      cursor: cursor_3,
      killed: killed_3
    } = w.killWord();
    return Oe(killed_3, "append"), cursor_3;
  }
  function Gt() {
    let {
      cursor: cursor_4,
      killed: killed_4
    } = w.backwardKillWord();
    return Oe(killed_4, "prepend"), cursor_4;
  }
  function Kt() {
    let {
      cursor: cursor_5,
      killed: killed_5
    } = w.deleteWORDBefore();
    return Oe(killed_5, "prepend"), cursor_5;
  }
  function jt() {
    let u = ye(yVt(ae.state));
    if (u.length > 0) {
      let start_6 = w.offset - D.length,
        M = w.insert(u);
      return ae.dispatch({
        type: "yank",
        start: start_6,
        length: u.length
      }), M;
    }
    return w;
  }
  function Vt() {
    let u = _Vt(ae.state);
    if (!u) return w;
    let {
        text: text_2,
        length: length
      } = u,
      Q = D.length + u.start,
      me = ye(text_2);
    ae.dispatch({
      type: "yankPop"
    });
    let xe = w.text.slice(0, Q),
      Fe = w.text.slice(Q + length),
      tr = xe + me + Fe,
      rr = Q + me.length;
    return ae.dispatch({
      type: "updateYankLength",
      length: me.length
    }), ki.fromText(tr, columns, rr);
  }
  let Ut = Pt([["a", () => w.startOfLogicalLine()], ["b", () => w.left()], ["c", () => (ct("Ctrl-C"), w)], ["d", Ft], ["e", () => w.endOfLogicalLine()], ["f", () => w.right()], ["h", dt], ["k", Qe], ["n", () => pt()], ["p", () => ht()], ["u", ft], ["w", Kt], ["y", jt]]),
    zt = Pt([["b", () => w.backwardWord()], ["f", () => w.forwardWord()], ["d", Ht], ["y", Vt]]);
  function qt({
    meta: meta,
    shift: shift
  }) {
    if (multiline && !disableBackslashReturn && w.offset > 0 && w.text[w.offset - 1] === "\\") return M8r(storageV5), w.backspace().insert(ye(`
`));
    if (meta || shift) return w.insert(ye(`
`));
    if (Ier()) return w.insert(ye(`
`));
    if (onSubmit) onSubmit(w.text.slice(D.length)), Ye = !0;
    return w;
  }
  function Be() {
    be.editedEmptyAtMs = Date.now();
  }
  function disarmLeftArrowConfirm() {
    if (be.armedAtMs === 0) return;
    be.armedAtMs = 0, removeNotification(key);
  }
  function ht() {
    if (disableCursorMovementForUpDownKeys) return Be(), onHistoryUp?.(), w;
    if (onHistoryUp && w.getPosition().line <= w.measuredText.getPositionFromOffset(D.length).line) return Be(), onHistoryUp(), w;
    let u = w.up();
    if (!u.equals(w)) return u;
    if (multiline) {
      let C = w.upLogicalLine();
      if (!C.equals(w)) return C;
    }
    return w;
  }
  function pt() {
    if (disableCursorMovementForUpDownKeys) return Be(), onHistoryDown?.(), w;
    if (onHistoryDown && w.getPosition().line >= w.measuredText.lineCount - 1) return Be(), onHistoryDown(), w;
    let u = w.down();
    if (!u.equals(w)) return u;
    if (multiline) {
      let C = w.downLogicalLine();
      if (!C.equals(w)) return C;
    }
    return w;
  }
  function Zt(u) {
    if (u.ctrl && (u.key === "k" || u.key === "u" || u.key === "w")) return !0;
    if (u.meta && !u.ctrl && u.key === "d") return !0;
    if (u.key === "backspace" && (u.meta || u.superKey || u.ctrl)) return !0;
    if (u.key === "delete" && (u.meta || u.superKey)) return !0;
    return !1;
  }
  function Jt(u) {
    return (u.ctrl || u.meta) && u.key === "y";
  }
  function Qt(u, C) {
    switch (u.name) {
      case "escape":
        if (disableEscapeDoublePress) return;
        return Bt(), w;
      case "left":
        if (u.superKey) return w.startOfLine();
        if (u.ctrl || u.meta || u.fn) return w.backwardWord();
        if (onLeftArrowOnEmpty && !u.shift && w.text === D) {
          let M = Date.now(),
            Q = Rvn(be, M, u.soloKeypress);
          switch (Avn(be, Q, M), xvn(Q, M, be), Q) {
            case "fire":
              return removeNotification(key), onLeftArrowOnEmpty(), w;
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
                text: text_3,
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
        if (u.superKey) return w.endOfLine();
        if (u.ctrl || u.meta || u.fn) return w.forwardWord();
        return w.right();
      case "up":
        if (u.shift || u.ctrl || u.meta) return;
        return ht();
      case "down":
        if (u.shift || u.ctrl || u.meta) return;
        return pt();
      case "backspace":
        if (u.superKey) return ft();
        if (u.meta || u.ctrl) return Gt();
        return dt();
      case "delete":
        if (u.superKey) return Qe();
        if (u.meta) return Qe();
        return w.del();
      case "home":
        if (u.ctrl) return;
        return w.startOfLine();
      case "end":
        if (u.ctrl) return;
        return w.endOfLine();
      case "pagedown":
        if (we || u.ctrl) return;
        return w.endOfLine();
      case "pageup":
        if (we || u.ctrl) return;
        return w.startOfLine();
      case "return":
        if (u.ctrl) return;
        return qt(u);
      case "enter":
        return w.insert(ye(`
`));
      case "tab":
        return;
    }
    if (multiline && u.ctrl && !u.shift && !u.meta && u.name === "j") return w.insert(ye(`
`));
    if (u.ctrl) return Ut(u.key);
    if (u.meta) return zt(u.key);
    if (yr.has(u.name)) return;
    if (C.length === 0) return;
    if (getInputMode !== void 0 && w.offset === D.length && zQe(C) && getInputMode() !== Kh(C)) return qe = !0, w.insert(C).left();
    return w.insert(C);
  }
  function handleKeyDown(key_2) {
    ze = key_2, qe = !1;
    let C = inputFilter ? inputFilter(key_2.key, key_2) : key_2.key;
    if (C === "" && key_2.key !== "") {
      key_2.preventDefault();
      return;
    }
    if (!Zt(key_2) && !Jt(key_2)) ae.dispatch({
      type: "interrupt"
    });
    if (!(key_2.name === "left" && !key_2.ctrl && !key_2.meta && !key_2.fn && !key_2.superKey && !key_2.shift)) disarmLeftArrowConfirm();
    let M = Qt(key_2, C);
    if (M === void 0) return;
    if (key_2.preventDefault(), !w.equals(M)) {
      let Q = M.text.startsWith(D);
      if (Q && M.offset < D.length) M = new ki(M.measuredText, D.length);
      let text_4 = w.text.slice(D.length),
        text_5 = Q ? M.text.slice(D.length) : M.text,
        cursor_6 = M.offset - (Q ? D.length : 0);
      if (text_4 !== "" && text_5 === "") be.editedEmptyAtMs = Date.now();
      if (text_4 !== text_5) onChange(text_5);
      if (setOffset(cursor_6), editRelay?.isRecording() === !0 && !qe) editRelay.record({
        before: {
          text: text_4,
          cursor: Math.max(0, w.offset - D.length)
        },
        after: {
          text: text_5,
          cursor: cursor_6
        },
        key: key_2
      });
      if (w = M, !Q) D = "", leadingPill?.onDelete();
    }
    if (Ye) {
      if (Ye = !1, clearOnSubmit) w = ki.fromText(D, columns, D.length);
    }
  }
  let er = inlineGhostText && dim && inlineGhostText.insertPosition === offset_7 ? {
      text: inlineGhostText.text,
      dim: dim
    } : void 0,
    gt = w.getPosition();
  return {
    handleKeyDown: handleKeyDown,
    renderedValue: w.render(cursorChar, mask, invert, er, maxVisibleLines, selectionAnchor === void 0 || selectionAnchor === null ? void 0 : D.length + selectionAnchor, selectionLinewise, preserveTrailingWhitespace),
    offset: offset_7,
    setOffset: setOffset,
    cursorLine: gt.line - w.getViewportStartLine(maxVisibleLines),
    cursorColumn: gt.column,
    renderedRowStartOffsets: w.getRenderedRowStartOffsets(maxVisibleLines),
    noteKeystrokeEmptied: () => {
      be.editedEmptyAtMs = Date.now();
    },
    disarmLeftArrowConfirm: disarmLeftArrowConfirm
  };
}
var at = ["\xB7", "\u2722", "\u2733", "\u2736", "\u273B", "\u273B"],
  Mt = ["\xB7", "\u2722", "\u2733", "\u2736", "\u273B", "\u273D"],
  lt = ["\xB7", "\u2722", "*", "\u2736", "\u273B", "\u273D"],
  xr = [...at, ...at.toReversed()],
  ti = [...Mt, ...Mt.toReversed()],
  Tr = [...lt, ...lt.toReversed()];
function QGt() {
  if (a.TERM === "xterm-ghostty") return at;
  return lt;
}
function cIe() {
  if (a.TERM === "xterm-ghostty") return xr;
  return Tr;
}
var It = 8;
function uE(e) {
  return Math.round(e * It) / It;
}
function ZGt(e) {
  return uE(e / 360) * 360;
}
function eVt(e, r) {
  return (1 - Math.cos(2 * Math.PI * e / r)) / 2;
}
function fT(e, r, n) {
  return {
    r: Math.round(e.r + (r.r - e.r) * n),
    g: Math.round(e.g + (r.g - e.g) * n),
    b: Math.round(e.b + (r.b - e.b) * n)
  };
}
function Qv(e) {
  return `rgb(${e.r},${e.g},${e.b})`;
}
function tVt(e) {
  let r = (e % 360 + 360) % 360,
    n = 0.7,
    s = 0.6,
    o = (1 - Math.abs(0.19999999999999996)) * 0.7,
    l = o * (1 - Math.abs(r / 60 % 2 - 1)),
    c = 0.6 - o / 2,
    f = 0,
    S = 0,
    E = 0;
  if (r < 60) f = o, S = l;else if (r < 120) f = l, S = o;else if (r < 180) S = o, E = l;else if (r < 240) S = l, E = o;else if (r < 300) f = l, E = o;else f = o, E = l;
  return {
    r: Math.round((f + c) * 255),
    g: Math.round((S + c) * 255),
    b: Math.round((E + c) * 255)
  };
}
function zC(e) {
  let r = e.match(/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/);
  return r ? {
    r: parseInt(r[1], 10),
    g: parseInt(r[2], 10),
    b: parseInt(r[3], 10)
  } : null;
}
var ut = " \u2581\u2582\u2583\u2584\u2585\u2586\u2587\u2588",
  Er = 0.7,
  Sr = 1.8,
  Ar = 0.15;
function GJe() {
  let e = W(F => $p(F.settings.prefersReducedMotion)),
    r = Der(),
    n = _g(F => F.voiceState) === "recording",
    s = _g(F => F.voiceAudioLevels),
    o = n && !e,
    [l, c] = Ta(o ? 50 : null);
  if (!o) return [l, null];
  let f = s.at(-1) ?? 0,
    S = Math.min(f * Sr, 1),
    E = r.next(S, Er),
    L = Math.max(1, Math.min(Math.round(E * (ut.length - 1)), ut.length - 1)),
    v = f < Ar,
    K = c / 1000 * 90 % 360,
    j = om() ? ZGt(K) : K,
    {
      r: r_2,
      g: g_2,
      b: b_2
    } = v ? {
      r: 128,
      g: 128,
      b: 128
    } : tVt(j),
    hex = `#${(r_2 << 16 | g_2 << 8 | b_2).toString(16).padStart(6, "0")}`;
  return [l, {
    char: ut[L],
    hex: hex
  }];
}
N();
import { basename as Cr } from "path";
var $r = 50;
function Nt() {
  return Cl(it());
}
function gje({
  onPaste: onPaste,
  handleKeyDown: handleKeyDown_2,
  onImagePaste: onImagePaste_2,
  onAudioPaste: onAudioPaste
}) {
  let o = Yt(),
    [isPasting, c] = g(!1),
    f = T(!0),
    S = T(!1),
    E = T(!1),
    [L, v] = g(0),
    K = X(() => O() === "macos", []),
    j = X(() => O() === "wsl", []);
  R(() => () => {
    f.current = !1;
  }, []);
  let ee = Gr(() => {
    handleKeyDown_2(new y_t({
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
  R(() => {
    if (L === 0) return;
    return o.setTimeout(() => {
      if (S.current = !1, E.current) E.current = !1, ee();
    }, 0);
  }, [L, o]);
  let V = se(() => {
      if (!onImagePaste_2 || !f.current) return;
      E7(Nt()).then(A => {
        if (A && f.current) onImagePaste_2(A.base64, {
          mediaType: A.mediaType,
          dimensions: A.dimensions
        });
      }).catch(A => {
        if (f.current) m("input_image_paste", "clipboard_read_failed"), d(A);
      }).finally(() => {
        F();
      });
    }, [onImagePaste_2]),
    z = pU(V, $r);
  function I(A) {
    if (onPaste) {
      onPaste(A);
      return;
    }
    handleKeyDown_2(new y_t({
      kind: "key",
      name: void 0,
      fn: !1,
      ctrl: !1,
      meta: !1,
      shift: !1,
      option: !1,
      super: !1,
      sequence: A,
      raw: A,
      code: void 0,
      col: void 0,
      row: void 0
    }));
  }
  function F() {
    if (!f.current) return;
    S.current = !1, E.current = !1, c(!1);
  }
  function Z() {
    c(!1), v(A => A + 1);
  }
  function k(A, ue = A.length === 0, te = A.endsWith("[I") || A.endsWith("[O")) {
    S.current = !0;
    let J = te ? A.replace(/\[[IO]$/, "") : A;
    if (ue && (K || j) && onImagePaste_2) {
      z();
      return;
    }
    let H = J.split(/ (?=\/|[A-Za-z]:\\)/).flatMap(item => item.split(`
`)).filter(item => item.trim()),
      Y,
      re = [],
      he = [],
      ge = [];
    for (let ce of H) {
      if (onImagePaste_2 && tio(ce)) {
        re.push(ce);
        continue;
      }
      ge.push(ce);
    }
    if (re.length > 0 || he.length > 0) {
      let ce = /\/TemporaryItems\/.*screencaptureui.*\/Screenshot/i.test(J),
        Ae = Nt();
      Promise.all(re.map(item => nio(item, Ae))).then(fe => {
        if (!f.current) return;
        let Ce = fe.filter(item => item !== null);
        if (Ce.length > 0 || he.length > 0) {
          for (let [we, ae] of Ce.entries()) {
            let filename = Cr(ae.path);
            onImagePaste_2?.(ae.base64, {
              mediaType: ae.mediaType,
              filename: filename,
              dimensions: ae.dimensions,
              sourcePath: ae.path,
              continuesGesture: we > 0
            });
          }
          if (Ce.length === 0 && re.length > 0) p("input_image_drag", "read_failed"), ge.push(...re);
          if (ge.length > 0) I(ge.join(`
`));
          F();
        } else if (ce && K) z();else p("input_image_drag", "read_failed"), I(J), F();
      }).catch(fe => {
        if (!f.current) return;
        m("input_image_drag", "read_threw"), t(`Image paste read failed: ${fe instanceof Error ? fe.message : String(fe)}`, {
          level: "error"
        }), I(J), F();
      });
      return;
    }
    I(J), Z();
  }
  function handlePaste(A) {
    A.preventDefault(), c(!0), k(A.text, A.rawEmpty, A.rawEndedWithFocusTail);
  }
  function handleKeyDown_3(A) {
    if (S.current && A.key === "return") {
      A.preventDefault(), E.current = !0;
      return;
    }
    if ((onPaste || onImagePaste_2) && !A.ctrl && !A.meta && A.key.length > o8 && !A.defaultPrevented) {
      A.preventDefault(), c(!0), k(A.key);
      return;
    }
    handleKeyDown_2(A);
  }
  return {
    handleKeyDown: handleKeyDown_3,
    handlePaste: handlePaste,
    isPasting: isPasting
  };
}
N();
function Mf(e, r, n = !1) {
  R(() => {
    let current = e.current;
    if (!current) return;
    let o = mT(current);
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
export { wvn, vvn, W1o, z1o, Ube, Aer, M8r, Pqo, xer, kvn, Per, lIe, fje, mje, ki, timeoutMs as XGt, JGt, text_3 as Evn, Tvn, Cvn, Rvn, Avn, xvn, Ier, o_t, QGt, cIe, uE, ZGt, eVt, fT, Qv, tVt, zC, GJe, gje, Mf };