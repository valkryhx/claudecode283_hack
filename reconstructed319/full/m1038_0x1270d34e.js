// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  b
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  R,
  K,
  qt
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  t,
  _
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  D0,
  G
} from "B:/~BUN/root/chunk-tmdrwqnv.js";
import {
  xa,
  at,
  v,
  Le,
  fe
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  Rwe,
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  x,
  rra
} from "B:/~BUN/root/chunk-mwfggkjt.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  g,
  m,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  ut
} from "B:/~BUN/root/chunk-3mm90xb6.js";
import {
  zn
} from "B:/~BUN/root/chunk-nsneqfcc.js";
import {
  gf
} from "B:/~BUN/root/chunk-5xx1vfdh.js";
import {
  Rqe,
  Hc
} from "B:/~BUN/root/chunk-bkfncj77.js";
import {
  gs,
  Dtt,
  EGn,
  TNr,
  iqe,
  cUs,
  zZi
} from "B:/~BUN/root/chunk-fkr27nhj.js";
import {
  Se
} from "B:/~BUN/root/chunk-x24hm796.js";
import {
  Rm,
  QL
} from "B:/~BUN/root/chunk-amar4116.js";
import {
  oa,
  Rn,
  pl,
  HG
} from "B:/~BUN/root/chunk-qey16aan.js";
import {
  N0,
  fhe,
  mke
} from "B:/~BUN/root/chunk-31b4g6te.js";
import {
  Lo
} from "B:/~BUN/root/chunk-npkbazqf.js";
import {
  sw
} from "B:/~BUN/root/chunk-9957329g.js";
import {
  Fe
} from "B:/~BUN/root/chunk-vxjrk7vf.js";
import {
  sEt,
  z5n,
  rst
} from "B:/~BUN/root/chunk-waswqpwd.js";
import {
  KYe,
  Kgn
} from "B:/~BUN/root/chunk-chv9g988.js";
import {
  dcs,
  X9e,
  J9e,
  ROn,
  cTe
} from "B:/~BUN/root/chunk-cxcakgnv.js";
import {
  G7
} from "B:/~BUN/root/chunk-v95bwhaa.js";
import {
  hhn,
  ghn
} from "B:/~BUN/root/chunk-9ezywpz7.js";
import {
  n$o,
  B_
} from "B:/~BUN/root/chunk-z8bb1299.js";
import {
  Cla,
  Rla,
  Lfr
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  j_
} from "B:/~BUN/root/chunk-nyy541yq.js";
import {
  Ign,
  Mgn,
  D7s,
  V9n
} from "B:/~BUN/root/chunk-af319kny.js";
import {
  KUe,
  Mk,
  fVt
} from "B:/~BUN/root/chunk-y8c6wwat.js";
import {
  i6e
} from "B:/~BUN/root/chunk-ggpp2a6r.js";
import {
  lr
} from "B:/~BUN/root/chunk-75wha2r5.js";
import {
  hQ,
  Qke,
  H3o,
  $3o,
  bci
} from "B:/~BUN/root/chunk-yjbw4jd5.js";
import {
  ue,
  ve,
  O,
  qo,
  Z,
  A,
  y,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
import {
  Al
} from "B:/~BUN/root/chunk-md18120p.js";
import {
  D
} from "B:/~BUN/root/chunk-8mqsat26.js";
import {
  Sa,
  t7,
  g1s
} from "B:/~BUN/root/chunk-63176a0t.js";
import {
  ce
} from "B:/~BUN/root/chunk-w7vsj9wa.js";
import {
  Ro
} from "B:/~BUN/root/chunk-143z690c.js";
import {
  po
} from "B:/~BUN/root/chunk-67erjrg5.js";
j();

function wS(e, r, n = !1) {
  O(() => {
    let s = e.current;
    if (!s) return;
    let o = N0(s);
    if (!r) {
      if (n && o.activeElement === s) o.blur();
      return
    }
    return o.focus(s), o.subscribe(() => {
      let u = e.current;
      if (!u || o.activeElement === u) return;
      if (!o.activeElement) {
        o.focus(u);
        return
      }
      let f = u.parentNode;
      while (f) {
        if (f === o.activeElement) {
          o.focus(u);
          return
        }
        f = f.parentNode
      }
    })
  }, [r, e, n])
}
j();
import {
  randomBytes as De
} from "crypto";
import {
  copyFile as Ne,
  mkdir as ht,
  readFile as Ce,
  writeFile as Xe
} from "fs/promises";
import {
  homedir as Qe,
  platform as We
} from "os";
import {
  dirname as mr,
  join as oe
} from "path";
var p = `
`,
  Ie = {
    ghostty: "Ghostty",
    kitty: "Kitty",
    "iTerm.app": "iTerm2",
    WezTerm: "WezTerm",
    WarpTerminal: "Warp",
    "windows-terminal": "Windows Terminal"
  };

function et() {
  let e = i.VSCODE_GIT_ASKPASS_MAIN ?? "",
    r = i.PATH ?? "";
  return e.includes(".vscode-server") || e.includes(".cursor-server") || e.includes(".windsurf-server") || e.includes(".devin-server") || r.includes(".vscode-server") || r.includes(".cursor-server") || r.includes(".windsurf-server") || r.includes(".devin-server")
}

function mzr() {
  if (!i.terminal || !(i.terminal in Ie)) return null;
  return Ie[i.terminal] ?? null
}

function Ze() {
  return ""
}
async function hzr(e, r, n) {
  let s = "",
    o = !0;
  switch (i.terminal) {
    case "Apple_Terminal":
      s = await pr(r, n);
      break;
    case "vscode":
      s = await ft(e, "VSCode", r), s += await dt(e, "VSCode", r), s += await e$o(e, "VSCode", r);
      break;
    case "cursor":
      s = await ft(e, "Cursor", r), s += await dt(e, "Cursor", r), s += await e$o(e, "Cursor", r);
      break;
    case "windsurf":
      s = await ft(e, "Devin Desktop", r), s += await dt(e, "Devin Desktop", r), s += await e$o(e, "Devin Desktop", r);
      break;
    case "alacritty":
      s = await gr(r);
      break;
    case "zed": {
      let u = await br(r);
      s = u.message, o = u.installed;
      break
    }
    case null:
      break
  }
  return await Le((u) => {
    if (o && vt.includes(i.terminal ?? "")) {
      if (u.shiftEnterKeyBindingInstalled === !0) return u;
      return {
        ...u,
        shiftEnterKeyBindingInstalled: !0
      }
    } else if (i.terminal === "Apple_Terminal") {
      if (u.optionAsMetaKeyInstalled === !0) return u;
      return {
        ...u,
        optionAsMetaKeyInstalled: !0
      }
    }
    return u
  }, n), s
}
var _t = 'iTerm2 \u2192 Settings \u2192 General \u2192 Selection \u2192 check "Applications in terminal may access clipboard"';
async function Msa(e) {
  let r = Se.dim(_t);
  try {
    let {
      stdout: n,
      code: s
    } = await ut("defaults", ["read", "com.googlecode.iterm2", "AllowClipboardAccess"]);
    if (s === 0 && n.trim() === "1") return `${lr("success",e)("iTerm2 clipboard access already enabled")}${p}${p}`;
    let {
      code: o
    } = await ut("defaults", ["write", "com.googlecode.iterm2", "AllowClipboardAccess", "-bool", "true"]);
    if (o !== 0) return `${lr("warning",e)("Couldn't update iTerm2 clipboard setting.")}${p}${r}${p}${p}`;
    return `${lr("success",e)('Enabled "Applications in terminal may access clipboard" in iTerm2')}${p}${Se.dim("Restart iTerm2 for this to take effect. Undo: defaults write com.googlecode.iterm2 AllowClipboardAccess -bool false")}${p}${p}`
  } catch (n) {
    return a(n), `${lr("warning",e)("Couldn't update iTerm2 clipboard setting.")}${p}${r}${p}${p}`
  }
}

function Dsa() {
  return fe().shiftEnterKeyBindingInstalled === !0
}
var vt = ["vscode", "cursor", "windsurf", "alacritty", "zed"];

function lke() {
  if (i.terminal === "Apple_Terminal" && We() === "darwin") return !0;
  if (i.terminal && i.terminal in Ie) return !0;
  return vt.includes(i.terminal ?? "") && Dsa()
}

function QHo() {
  return fe().hasUsedBackslashReturn === !0
}

function Y8s(e) {
  if (!fe().hasUsedBackslashReturn) Le((n) => ({
    ...n,
    hasUsedBackslashReturn: !0
  }), e)
}
async function hha(e, r, n) {
  if (We() === "darwin" && i.__CFBundleIdentifier === "com.googlecode.iterm2" && (i.terminal === "iTerm.app" || i.terminal === "tmux" || i.terminal === "screen" || i.terminal === null)) {
    let u = `${await Msa(r.options.theme)}Shift+Enter is natively supported in iTerm2.

No configuration needed. Just use Shift+Enter to add newlines.${Ze()}`;
    return e(u), null
  }
  if (i.terminal && i.terminal in Ie) {
    let o = `Shift+Enter is natively supported in ${Ie[i.terminal]}.

No configuration needed. Just use Shift+Enter to add newlines.${Ze()}`;
    return e(o), null
  }
  if (!i6e()) {
    let o = i.terminal || "your current terminal",
      u = x(),
      f = "";
    if (u === "macos") f = `   \u2022 macOS: Apple Terminal
`;
    let h = i.LC_TERMINAL === "iTerm2" ? `${p}${p}You appear to be connected from iTerm2 on another machine. For /copy to reach your local clipboard, on that machine open:${p}${Se.dim(_t)}` : "",
      T = `Terminal setup cannot be run from ${o}.

This command configures a convenient Shift+Enter shortcut for multi-line prompts.
${Se.dim("Note: You can already use backslash (\\\\) + return to add newlines.")}

To set up the shortcut (optional):
1. Exit tmux/screen temporarily
2. Run /terminal-setup directly in one of these terminals:
${f}   \u2022 IDE: VSCode, Cursor, Devin Desktop, Zed
   \u2022 Other: Alacritty
3. Return to tmux/screen - settings will persist

${Se.dim("Note: iTerm2, WezTerm, Ghostty, Kitty, Warp, and Windows Terminal support Shift+Enter natively.")}${h}${Ze()}`;
    return e(T), null
  }
  let s = await hzr(r.session.host, r.options.theme, r.storageV5);
  return e(s + Ze()), null
}
var Re = "terminal.integrated.mouseWheelScrollSensitivity",
  Me = 3,
  Je = "terminal.integrated.gpuAcceleration",
  ct = "off";
async function ZHo(e) {
  let r = hr();
  if (!r || et()) return null;
  try {
    let n = await Ce(oe(await gzr.of(e).pathFor(r), "settings.json"), {
        encoding: "utf-8"
      }),
      s = iqe(n),
      o = D(s) ? s[Re] : void 0;
    return {
      editor: r,
      sensitivity: typeof o === "number" ? o : null,
      recommended: Me
    }
  } catch (n) {
    if (!qt(n)) a(n);
    return {
      editor: r,
      sensitivity: null,
      recommended: Me
    }
  }
}

function hr() {
  switch (i.terminal) {
    case "vscode":
      return "VSCode";
    case "cursor":
      return "Cursor";
    case "windsurf":
      return "Devin Desktop";
    default:
      return null
  }
}
class Pt {
  pathFor = po(async (e) => {
    let r = (n) => oe(Qe(), We() === "win32" ? oe("AppData", "Roaming", n, "User") : We() === "darwin" ? oe("Library", "Application Support", n, "User") : oe(".config", n, "User"));
    if (e === "VSCode") return r("Code");
    if (e === "Devin Desktop") {
      let n = r("Devin");
      return await gf(n) ? n : r("Windsurf")
    }
    return r(e)
  }, (e) => `${e}:${Qe()}`)
}
var gzr = new W(() => new Pt);
async function dt(e, r, n) {
  let s = Se.dim(`For smoother scrolling, set "${Re}": ${Me} in ${r} settings.`);
  if (et()) return `${s}${p}`;
  let o = oe(await gzr.of(e).pathFor(r), "settings.json");
  try {
    let u = "{}",
      f = !1;
    try {
      u = await Ce(o, {
        encoding: "utf-8"
      }), f = !0
    } catch (S) {
      if (!qt(S)) throw S
    }
    let h = iqe(u);
    if (!D(h)) return `${lr("warning",n)(`${r} settings.json isn't a JSON object; not modifying it.`)}${p}${s}${p}`;
    if (Re in h) return `${lr("success",n)(`${r} ${Re} already set; leaving as-is`)}${p}${Se.dim(`See ${o}`)}${p}`;
    let T = cUs(u, Re, Me);
    if (T === u) return `${lr("warning",n)(`Couldn't update ${r} settings.json.`)}${p}${s}${p}`;
    if (f) {
      let S = `${o}.${De(4).toString("hex")}.bak`;
      try {
        await Ne(o, S)
      } catch {
        return `${lr("warning",n)(`Couldn't back up ${r} settings.json; not modifying it.`)}${p}${s}${p}`
      }
    }
    return await Xe(o, T, {
      encoding: "utf-8"
    }), `${lr("success",n)(`Set ${r} terminal scroll sensitivity to ${Me}`)}${p}${Se.dim(`See ${o}`)}${p}`
  } catch (u) {
    return t(`Couldn't update ${r} settings.json at ${o}: ${u instanceof Error?u.message:String(u)}`, {
      level: "error"
    }), `${lr("warning",n)(`Couldn't update ${r} settings.json.`)}${p}${s}${p}`
  }
}
async function e$o(e, r, n) {
  let s = Se.dim(`To fix garbled text, set "${Je}": "${ct}" in ${r} settings (undo: set it back to "auto").`);
  if (et()) return c("terminal_setup_gpu_accel", "remote_ssh"), `${s}${p}`;
  let o = oe(await gzr.of(e).pathFor(r), "settings.json");
  try {
    let u = "{}",
      f = !1;
    try {
      u = await Ce(o, {
        encoding: "utf-8"
      }), f = !0
    } catch (S) {
      if (!qt(S)) throw S
    }
    let h = iqe(u);
    if (!D(h)) return c("terminal_setup_gpu_accel", "not_json_object"), `${lr("warning",n)(`${r} settings.json isn't a JSON object; not modifying it.`)}${p}${s}${p}`;
    if (h[Je] === ct) return g("terminal_setup_gpu_accel"), `${lr("success",n)(`${r} GPU acceleration already off; leaving as-is`)}${p}${Se.dim(`See ${o}`)}${p}`;
    let T = cUs(u, Je, ct);
    if (T === u) return c("terminal_setup_gpu_accel", "write_failed"), `${lr("warning",n)(`Couldn't update ${r} settings.json.`)}${p}${s}${p}`;
    if (f) {
      let S = `${o}.${De(4).toString("hex")}.bak`;
      try {
        await Ne(o, S)
      } catch {
        return c("terminal_setup_gpu_accel", "backup_failed"), `${lr("warning",n)(`Couldn't back up ${r} settings.json; not modifying it.`)}${p}${s}${p}`
      }
    }
    return await Xe(o, T, {
      encoding: "utf-8"
    }), g("terminal_setup_gpu_accel"), `${lr("success",n)(`Turned off ${r} GPU acceleration to fix garbled text`)}${p}${Se.dim(`Reload the ${r} window to apply. Undo: set "${Je}" back to "auto".`)}${p}${Se.dim(`See ${o}`)}${p}`
  } catch (u) {
    return c("terminal_setup_gpu_accel", "write_failed"), t(`Couldn't update ${r} settings.json at ${o}: ${u instanceof Error?u.message:String(u)}`, {
      level: "error"
    }), `${lr("warning",n)(`Couldn't update ${r} settings.json.`)}${p}${s}${p}`
  }
}
async function ft(e, r = "VSCode", n) {
  if (et()) return `${lr("warning",n)(`Cannot install keybindings from a remote ${r} session.`)}${p}${p}${r} keybindings must be installed on your local machine, not the remote server.${p}${p}To install the Shift+Enter keybinding:${p}1. Open ${r} on your local machine (not connected to remote)${p}2. Open the Command Palette (Cmd/Ctrl+Shift+P) \u2192 "Preferences: Open Keyboard Shortcuts (JSON)"${p}3. Add this keybinding (the file must be a JSON array):${p}${p}${Se.dim(`[
  {
    "key": "shift+enter",
    "command": "workbench.action.terminal.sendSequence",
    "args": { "text": "\\u001b\\r" },
    "when": "terminalFocus"
  }
]`)}${p}`;
  let s = await gzr.of(e).pathFor(r),
    o = oe(s, "keybindings.json");
  try {
    await ht(s, {
      recursive: !0
    });
    let u = "[]",
      f = [],
      h = !1;
    try {
      u = await Ce(o, {
        encoding: "utf-8"
      }), h = !0, f = iqe(u) ?? []
    } catch (k) {
      if (!qt(k)) throw k
    }
    if (h) {
      let k = De(4).toString("hex"),
        F = `${o}.${k}.bak`;
      try {
        await Ne(o, F)
      } catch {
        return `${lr("warning",n)(`Error backing up existing ${r} terminal keybindings. Bailing out.`)}${p}${Se.dim(`See ${o}`)}${p}${Se.dim(`Backup path: ${F}`)}${p}`
      }
    }
    let T = {
        key: "shift+enter",
        command: "workbench.action.terminal.sendSequence",
        args: {
          text: "\x1B\r"
        },
        when: "terminalFocus"
      },
      S = f.find((k) => k.key === T.key && k.command === T.command && k.when === T.when);
    if (S) {
      let k = Se.dim(`See ${o}`);
      if (S.args?.text === T.args.text) return `${lr("success",n)(`${r} terminal Shift+Enter key binding already configured`)}${p}${k}${p}`;
      return `${lr("warning",n)(`${r} already has a Shift+Enter terminal binding with different args; leaving it as-is.`)}${p}${k}${p}`
    }
    let C = zZi(u, T);
    return await Xe(o, C, {
      encoding: "utf-8"
    }), `${lr("success",n)(`Installed ${r} terminal Shift+Enter key binding`)}${p}${Se.dim(`See ${o}`)}${p}`
  } catch (u) {
    throw t(`Failed to install ${r} terminal Shift+Enter keybinding: ${u instanceof Error?u.message:String(u)}`, {
      level: "error"
    }), Error(`Failed to install ${r} terminal Shift+Enter key binding`)
  }
}
async function $t(e) {
  let {
    code: r
  } = await ut("/usr/libexec/PlistBuddy", ["-c", `Add :'Window Settings':'${e}':useOptionAsMetaKey bool true`, Mgn()]);
  if (r !== 0) {
    let {
      code: n
    } = await ut("/usr/libexec/PlistBuddy", ["-c", `Set :'Window Settings':'${e}':useOptionAsMetaKey true`, Mgn()]);
    if (n !== 0) return t(`Failed to enable Option as Meta key for Terminal.app profile: ${e}`, {
      level: "error"
    }), !1
  }
  return !0
}
async function Lt(e) {
  let {
    code: r
  } = await ut("/usr/libexec/PlistBuddy", ["-c", `Add :'Window Settings':'${e}':Bell bool false`, Mgn()]);
  if (r !== 0) {
    let {
      code: n
    } = await ut("/usr/libexec/PlistBuddy", ["-c", `Set :'Window Settings':'${e}':Bell false`, Mgn()]);
    if (n !== 0) return t(`Failed to disable audio bell for Terminal.app profile: ${e}`, {
      level: "error"
    }), !1
  }
  return !0
}
async function pr(e, r) {
  let n = (rra() ?? 0) >= 27,
    s = Rm();
  if (n && s) return `${lr("success",e)("No Terminal.app changes needed.")}${p}${Se.dim("Shift+Return already enters a newline on this macOS version, and screen-reader mode leaves the audible bell setting unchanged.")}${p}`;
  try {
    if (!await D7s(r)) throw Error("Failed to create backup of Terminal.app preferences, bailing out");
    let {
      stdout: u,
      code: f
    } = await ut("defaults", ["read", "com.apple.Terminal", "Default Window Settings"]);
    if (f !== 0 || !u.trim()) throw Error("Failed to read default Terminal.app profile");
    let {
      stdout: h,
      code: T
    } = await ut("defaults", ["read", "com.apple.Terminal", "Startup Window Settings"]);
    if (T !== 0 || !h.trim()) throw Error("Failed to read startup Terminal.app profile");
    let S = !1,
      C = u.trim(),
      k = n ? !1 : await $t(C),
      F = s ? !1 : await Lt(C);
    if (k || F) S = !0;
    let se = h.trim();
    if (se !== C) {
      let le = n ? !1 : await $t(se),
        H = s ? !1 : await Lt(se);
      if (le || H) S = !0
    }
    if (!S) {
      if (n) throw Error("Failed to disable audio bell for any Terminal.app profile");
      if (s) throw Error("Failed to enable Option as Meta key for any Terminal.app profile");
      throw Error("Failed to enable Option as Meta key or disable audio bell for any Terminal.app profile")
    }
    await ut("killall", ["cfprefsd"]), await Ign(r);
    let J = [lr("success", e)("Configured Terminal.app settings:")];
    if (!n) J.push(lr("success", e)('- Enabled "Use Option as Meta key"'));
    if (!s) J.push(lr("success", e)("- Disabled the audible bell"));
    else J.push(Se.dim("- Left the audible bell setting unchanged (screen-reader mode uses it)"));
    let ee = n ? Se.dim("Shift+Return will now enter a newline.") : Se.dim("Option+Enter will now enter a newline.");
    return `${J.join(p)}${p}${ee}${p}${Se.dim("You must restart Terminal.app for changes to take effect.")}${p}`
  } catch (o) {
    t(`Terminal.app setup failed: ${o instanceof Error?o.message:String(o)}`, {
      level: "error"
    });
    let u = await V9n(r),
      f = n ? "Failed to disable the audio bell for Terminal.app." : "Failed to enable Option as Meta key for Terminal.app.";
    if (u.status === "restored") throw Error(`${f} Your settings have been restored from backup.`);
    else if (u.status === "failed") throw Error(`${f} Restoring from backup failed, try manually with: defaults import com.apple.Terminal ${u.backupPath}`);
    else throw Error(`${f} No backup was available to restore from.`)
  }
}
async function gr(e) {
  let n = [],
    s = i.XDG_CONFIG_HOME;
  if (s) n.push(oe(s, "alacritty", "alacritty.toml"));
  else n.push(oe(Qe(), ".config", "alacritty", "alacritty.toml"));
  if (We() === "win32") {
    let h = i.APPDATA;
    if (h) n.push(oe(h, "alacritty", "alacritty.toml"))
  }
  let o = null,
    u = "",
    f = !1;
  for (let h of n) try {
    u = await Ce(h, {
      encoding: "utf-8"
    }), o = h, f = !0;
    break
  } catch (T) {
    if (!qt(T)) throw T
  }
  if (!o) o = n[0] ?? null;
  if (!o) throw Error("No valid config path found for Alacritty");
  try {
    if (f) {
      if (u.includes('mods = "Shift"') && u.includes('key = "Return"')) return `${lr("success",e)("Alacritty Shift+Enter key binding already configured")}${p}${Se.dim(`See ${o}`)}${p}`;
      let T = De(4).toString("hex"),
        S = `${o}.${T}.bak`;
      try {
        await Ne(o, S)
      } catch {
        return `${lr("warning",e)("Error backing up existing Alacritty config. Bailing out.")}${p}${Se.dim(`See ${o}`)}${p}${Se.dim(`Backup path: ${S}`)}${p}`
      }
    } else await ht(mr(o), {
      recursive: !0
    });
    let h = u;
    if (u && !u.endsWith(`
`)) h += `
`;
    return h += `
[[keyboard.bindings]]
key = "Return"
mods = "Shift"
chars = "\\u001B\\r"
`, await Xe(o, h, {
      encoding: "utf-8"
    }), `${lr("success",e)("Installed Alacritty Shift+Enter key binding")}${p}${lr("success",e)("You may need to restart Alacritty for changes to take effect")}${p}${Se.dim(`See ${o}`)}${p}`
  } catch (h) {
    throw t(`Failed to install Alacritty keybinding: ${h instanceof Error?h.message:String(h)}`, {
      level: "error"
    }), Error("Failed to install Alacritty Shift+Enter key binding")
  }
}
var mt = ["terminal::SendText", "\x1B\r"];

function kt(e) {
  return D(e) && e.context === "Terminal" && D(e.bindings) && "shift-enter" in e.bindings
}
async function br(e) {
  let r = x() === "linux" ? i.XDG_CONFIG_HOME : void 0,
    n = r ? oe(r, "zed") : oe(Qe(), ".config", "zed"),
    s = oe(n, "keymap.json"),
    o = Se.dim(`See ${s}`),
    u = Se.dim(`To add the binding yourself, add this block to the keymap array in ${s}:${p}{ "context": "Terminal", "bindings": { "shift-enter": ["terminal::SendText", "\\u001b\\r"] } }`),
    f = `${lr("success",e)("Installed Zed Shift+Enter key binding")}${p}${o}${p}`,
    h = `${lr("warning",e)("Couldn't read your Zed keymap, so it was left unchanged.")}${p}${u}${p}`,
    T = `${lr("warning",e)("Your Zed keymap isn't a readable list of keybindings, so it was left unchanged.")}${p}${u}${p}`;
  try {
    await ht(n, {
      recursive: !0
    });
    let S = null;
    try {
      S = await Ce(s, {
        encoding: "utf-8"
      })
    } catch (M) {
      if (!qt(M)) throw M;
      if (!K(M)) return {
        message: h,
        installed: !1
      }
    }
    if (S === null || gs(S).trim() === "") return await zn(s, _([{
      context: "Terminal",
      bindings: {
        "shift-enter": mt
      }
    }], null, 2) + `
`), {
      message: f,
      installed: !0
    };
    let C = [],
      k = gs(S),
      F = Dtt(k, C, {
        allowTrailingComma: !0
      });
    if (C.length > 0 || !Array.isArray(F)) return {
      message: T,
      installed: !1
    };
    if (F.some(kt)) return {
      message: `${lr("success",e)("Zed Shift+Enter key binding already configured")}${p}${o}${p}`,
      installed: !0
    };
    let se = De(4).toString("hex"),
      J = `${s}.${se}.bak`;
    try {
      await Ne(s, J)
    } catch (M) {
      return t(`Failed to back up Zed keymap: ${M instanceof Error?M.message:String(M)}`, {
        level: "error"
      }), {
        message: `${lr("warning",e)("Couldn't back up your Zed keymap; not modifying it.")}${p}${u}${p}`,
        installed: !1
      }
    }
    let ee = F.findIndex((M) => D(M) && M.context === "Terminal" && D(M.bindings)),
      le = {
        insertSpaces: !0,
        tabSize: 2
      },
      H = null;
    try {
      let M = ee >= 0 ? EGn(k, [ee, "bindings", "shift-enter"], mt, {
        formattingOptions: le
      }) : EGn(k, [F.length], {
        context: "Terminal",
        bindings: {
          "shift-enter": mt
        }
      }, {
        formattingOptions: le,
        isArrayInsertion: !0
      });
      H = M.length > 0 ? TNr(k, M) : null
    } catch (M) {
      t(`Failed to edit Zed keymap: ${M instanceof Error?M.message:String(M)}`, {
        level: "error"
      })
    }
    let U = [],
      Y = H === null ? null : Dtt(H, U, {
        allowTrailingComma: !0
      });
    if (H === null || U.length > 0 || !Array.isArray(Y) || !Y.some(kt)) return {
      message: `${lr("warning",e)("Couldn't update your Zed keymap, so it was left unchanged.")}${p}${u}${p}`,
      installed: !1
    };
    return await zn(s, H), {
      message: f,
      installed: !0
    }
  } catch (S) {
    throw t(`Failed to install Zed Shift+Enter key binding: ${S instanceof Error?S.message:String(S)}`, {
      level: "error"
    }), Error("Failed to install Zed Shift+Enter key binding")
  }
}
var tt = /[\u001b\u0080-\u009f]/g,
  Rt = "\u2060";

function Wt(e, r, n = Hc) {
  let s = e.search(tt) === -1 ? e : wr(e),
    o = n(s, r, {
      hard: !0,
      trim: !1
    }).split(`
`),
    u = [],
    f = 0,
    h = !0;
  for (let T of o) {
    if (!s.startsWith(T, f)) return {
      rows: Mt(e, r),
      degraded: !0
    };
    let S = f + T.length,
      C = s.startsWith(`\r
`, S) ? 2 : s[S] === `
` || s[S] === "\r" ? 1 : 0;
    u.push({
      text: e.slice(f, S),
      startOffset: f,
      isPrecededByNewline: h,
      endsWithNewline: C > 0
    }), h = C > 0, f = S + C
  }
  return f === e.length ? {
    rows: u,
    degraded: !1
  } : {
    rows: Mt(e, r),
    degraded: !0
  }
}

function wr(e) {
  let r = Rqe();
  return e.split(`
`).map((n) => n.search(tt) === -1 ? n : n.split("\r").map((s) => s.search(tt) === -1 ? s : [...r.feed(s), ...r.flush()].map((o) => o.type === "sequence" ? Rt.repeat(o.value.length) : o.value.replace(tt, Rt)).join("")).join("\r")).join(`
`)
}

function Mt(e, r) {
  let n = [],
    s = 0;
  for (let o of e.split(/\r\n|[\n\r]/)) {
    let u = 0,
      f = 0;
    for (let {
        segment: S,
        index: C
      }
      of Sa().segment(o)) {
      let k = ce(S);
      if (f + k > r && C > u) n.push({
        text: o.slice(u, C),
        startOffset: s + u,
        isPrecededByNewline: u === 0,
        endsWithNewline: !1
      }), u = C, f = 0;
      f += k
    }
    let h = s + o.length,
      T = e.startsWith(`\r
`, h) ? 2 : h < e.length ? 1 : 0;
    n.push({
      text: o.slice(u),
      startOffset: s + u,
      isPrecededByNewline: u === 0,
      endsWithNewline: T > 0
    }), s = h + T
  }
  return n
}
var yr = /^[\p{L}\p{N}\p{M}_]+$/u,
  xr = /[\p{L}\p{N}][\p{L}\p{N}\p{M}]*/gu,
  Be = /\s/,
  pt = "(?:\\[(?:Pasted text|Image|\\.\\.\\.Truncated text|\u2726 Team setup guide) #\\d+(?: \\+\\d+ lines)?\\.*\\]|\\[\u29C9 [^\\]\\n]+\\])",
  Tr = new RegExp(pt + "$"),
  Dt = new RegExp("^" + pt),
  X8s = (e, r) => e[r] === "[" && Dt.test(e.slice(r)),
  Nt = new RegExp(pt, "g");

function J8s(e) {
  return e.replace(Nt, (r) => " ".repeat(r.length))
}
var tst = (e) => yr.test(e),
  TYe = (e) => Be.test(e),
  Zvt = (e) => e.length > 0 && !TYe(e) && !tst(e);
class va {
  measuredText;
  selection;
  offset;
  constructor(e, r = 0, n = 0) {
    this.measuredText = e;
    this.selection = n;
    this.offset = Math.max(0, Math.min(this.text.length, r))
  }
  static fromText(e, r, n = 0, s = 0) {
    return new va(new Ft(e, r - 1), n, s)
  }
  getViewportStartLine(e) {
    if (e === void 0 || e <= 0) return 0;
    let {
      line: r
    } = this.getPosition(), n = this.measuredText.getWrappedText();
    if (n.length <= e) return 0;
    let s = Math.floor(e / 2),
      o = Math.max(0, r - s),
      u = Math.min(n.length, o + e);
    if (u - o < e) o = Math.max(0, u - e);
    return o
  }
  getRenderedRowStartOffsets(e) {
    let {
      startLine: r,
      endLine: n
    } = this.getViewportLineRange(e);
    return this.measuredText.getWrappedLines().slice(r, n).map((s) => s.displayStartOffset)
  }
  getViewportLineRange(e) {
    let r = this.measuredText.getWrappedLines().length,
      n = this.getViewportStartLine(e),
      s = e !== void 0 && e > 0 ? Math.min(r, n + e) : r;
    return {
      startLine: n,
      endLine: s
    }
  }
  render(e, r, n, s, o, u, f, h, T, S) {
    let C = this.measuredText.getWrappedLines(),
      {
        startLine: k,
        endLine: F
      } = this.getViewportLineRange(o);
    if (u !== void 0) {
      let H = Math.min(u, this.offset),
        U = Math.max(u, this.offset),
        Y = f ? this.findLogicalLineStart(H) : H,
        M = f ? this.findLogicalLineEnd(U) : this.measuredText.nextOffset(U);
      return C.slice(k, F).map((z, he) => {
        let we = (h ?? !1) && (z.endsWithNewline || he + k === C.length - 1),
          {
            displayText: E,
            displayStartOffset: V
          } = z,
          ie = V + E.length;
        if (M <= V || Y >= ie) {
          if (V === ie && Y <= V && (f ? M >= ie : M > ie)) return h ?? !1 ? "" : n(" ");
          return we ? E : E.trimEnd()
        }
        if (V === ie) return h ?? !1 ? "" : n(" ");
        let te = Math.max(0, Y - V),
          Q = Math.min(E.length, M - V);
        if (h ?? !1) {
          let I = we ? E : E.trimEnd(),
            q = Math.min(te, I.length),
            re = Math.min(Q, I.length);
          return I.slice(0, q) + It(I, {
            from: q,
            to: re
          }, n, {
            spans: T ?? [],
            rowStart: V
          }) + I.slice(re)
        }
        return E.slice(0, te) + It(E, {
          from: te,
          to: Q
        }, n, {
          spans: T ?? [],
          rowStart: V
        }) + E.slice(Q).trimEnd()
      }).join(`
`)
    }
    let {
      line: se,
      column: J
    } = this.getPosition(), ee = this.measuredText.getWrappedText(), le = this.measuredText.getWrappedLines();
    return ee.slice(k, F).map((H, U) => {
      let Y = U + k,
        M = (h ?? !1) && ((le[Y]?.endsWithNewline ?? !1) || Y === ee.length - 1),
        z = H;
      if (r) {
        let I = Array.from(Sa().segment(H));
        if (Y === ee.length - 1 && !S) {
          let q = Math.min(6, I.length),
            re = I.length - q,
            B = I.length > q ? I[re].index : 0;
          z = r.repeat(re) + H.slice(B)
        } else z = r.repeat(I.length)
      }
      if (se !== Y) return M ? z : z.trimEnd();
      let he = "",
        we = e,
        E = "",
        V = 0,
        ie = !1;
      for (let {
          segment: I
        }
        of Sa().segment(z)) {
        if (ie) {
          E += I;
          continue
        }
        let q = V + ce(I);
        if (q > J) we = I, ie = !0;
        else V = q, he += I
      }
      let te, Q = "";
      if (s && Y === ee.length - 1 && this.isAtEnd() && s.text.length > 0) {
        let I = t7(s.text) || s.text[0];
        te = e ? n(I) : I;
        let q = s.text.slice(I.length);
        if (q.length > 0) Q = s.dim(q)
      } else te = e ? n(we) : we;
      if (h && !M && e === "") return (he + te + Q + E).trimEnd();
      return he + te + Q + (M ? E : E.trimEnd())
    }).join(`
`)
  }
  left() {
    if (this.offset === 0) return this;
    let e = this.placeholderEndingAt(this.offset);
    if (e) return new va(this.measuredText, e.start);
    let r = this.measuredText.prevOffset(this.offset);
    return new va(this.measuredText, r)
  }
  right() {
    if (this.offset >= this.text.length) return this;
    let e = this.placeholderStartingAt(this.offset);
    if (e) return new va(this.measuredText, e.end);
    let r = this.measuredText.nextOffset(this.offset);
    return new va(this.measuredText, Math.min(r, this.text.length))
  }
  placeholderEndingAt(e) {
    if (this.text[e - 1] !== "]") return null;
    let r = this.text.slice(0, e).match(Tr);
    return r ? {
      start: e - r[0].length,
      end: e
    } : null
  }
  placeholderStartingAt(e) {
    if (this.text[e] !== "[") return null;
    let r = this.text.slice(e).match(Dt);
    return r ? {
      start: e,
      end: e + r[0].length
    } : null
  }
  placeholderContaining(e) {
    for (let r of this.text.matchAll(Nt)) {
      let n = r.index,
        s = n + r[0].length;
      if (e > n && e < s) return {
        start: n,
        end: s
      };
      if (n >= e) break
    }
    return null
  }
  snapOutOfPlaceholder(e, r) {
    let n = this.placeholderContaining(e);
    if (!n) return e;
    return r === "start" ? n.start : n.end
  }
  up() {
    let {
      line: e,
      column: r
    } = this.getPosition();
    if (e === 0) return this;
    let n = this.measuredText.getWrappedText()[e - 1];
    if (n === void 0) return this;
    let s = ce(n);
    if (r > s) {
      let u = this.getOffset({
        line: e - 1,
        column: s
      });
      return new va(this.measuredText, u, 0)
    }
    let o = this.getOffset({
      line: e - 1,
      column: r
    });
    return new va(this.measuredText, o, 0)
  }
  down() {
    let {
      line: e,
      column: r
    } = this.getPosition();
    if (e >= this.measuredText.lineCount - 1) return this;
    let n = this.measuredText.getWrappedText()[e + 1];
    if (n === void 0) return this;
    let s = ce(n);
    if (r > s) {
      let u = this.getOffset({
        line: e + 1,
        column: s
      });
      return new va(this.measuredText, u, 0)
    }
    let o = this.getOffset({
      line: e + 1,
      column: r
    });
    return new va(this.measuredText, o, 0)
  }
  startOfCurrentLine() {
    let {
      line: e
    } = this.getPosition();
    return new va(this.measuredText, this.getOffset({
      line: e,
      column: 0
    }), 0)
  }
  startOfLine() {
    let {
      line: e,
      column: r
    } = this.getPosition();
    if (r === 0 && e > 0) return new va(this.measuredText, this.getOffset({
      line: e - 1,
      column: 0
    }), 0);
    return this.startOfCurrentLine()
  }
  endOfLine() {
    let {
      line: e,
      column: r
    } = this.getPosition(), n = this.measuredText.getLineLength(e);
    if (r >= n && e < this.measuredText.lineCount - 1) {
      let o = this.measuredText.getLineLength(e + 1),
        u = this.getOffset({
          line: e + 1,
          column: o
        });
      return new va(this.measuredText, u, 0)
    }
    let s = this.getOffset({
      line: e,
      column: n
    });
    return new va(this.measuredText, s, 0)
  }
  findLogicalLineStart(e = this.offset) {
    if (e === 0) return 0;
    let r = this.text.lastIndexOf(`
`, e - 1);
    return r === -1 ? 0 : r + 1
  }
  findLogicalLineEnd(e = this.offset) {
    let r = this.text.indexOf(`
`, e);
    return r === -1 ? this.text.length : r
  }
  getLogicalLineBounds() {
    return {
      start: this.findLogicalLineStart(),
      end: this.findLogicalLineEnd()
    }
  }
  createCursorWithColumn(e, r, n) {
    let s = r - e,
      o = Math.min(n, s),
      u = e + o,
      f = this.measuredText.snapToGraphemeBoundary(u);
    return new va(this.measuredText, f, 0)
  }
  endOfLogicalLine() {
    return new va(this.measuredText, this.findLogicalLineEnd(), 0)
  }
  lastCharInLogicalLine() {
    let e = this.findLogicalLineStart(),
      r = this.findLogicalLineEnd(),
      n = r > e ? this.measuredText.prevOffset(r) : e;
    return new va(this.measuredText, n, 0)
  }
  startOfLogicalLine() {
    return new va(this.measuredText, this.findLogicalLineStart(), 0)
  }
  firstNonBlankInLogicalLine() {
    let {
      start: e,
      end: r
    } = this.getLogicalLineBounds(), s = this.text.slice(e, r).match(/\S/), o = e + (s?.index ?? 0);
    return new va(this.measuredText, o, 0)
  }
  upLogicalLine() {
    let {
      start: e
    } = this.getLogicalLineBounds();
    if (e === 0) return new va(this.measuredText, 0, 0);
    let r = this.offset - e,
      n = e - 1,
      s = this.findLogicalLineStart(n);
    return this.createCursorWithColumn(s, n, r)
  }
  downLogicalLine() {
    let {
      start: e,
      end: r
    } = this.getLogicalLineBounds();
    if (r >= this.text.length) return new va(this.measuredText, this.text.length, 0);
    let n = this.offset - e,
      s = r + 1,
      o = this.findLogicalLineEnd(s);
    return this.createCursorWithColumn(s, o, n)
  }
  forwardWord() {
    if (this.isAtEnd()) return this;
    let e = this.placeholderStartingAt(this.offset) ?? this.placeholderContaining(this.offset);
    if (e) return new va(this.measuredText, e.end);
    for (let r of this.measuredText.getReadlineWordBoundaries())
      if (r.end > this.offset) {
        let n = this.snapOutOfPlaceholder(r.end, "end");
        return new va(this.measuredText, n)
      } return new va(this.measuredText, this.text.length)
  }
  backwardWord() {
    if (this.isAtStart()) return this;
    let e = this.placeholderEndingAt(this.offset) ?? this.placeholderContaining(this.offset);
    if (e) return new va(this.measuredText, e.start);
    let r = this.measuredText.getReadlineWordBoundaries();
    for (let n = r.length - 1; n >= 0; n--) {
      let s = r[n];
      if (s.start < this.offset) {
        let o = this.snapOutOfPlaceholder(s.start, "start");
        return new va(this.measuredText, o)
      }
    }
    return new va(this.measuredText, 0)
  }
  killWord() {
    let e = this.forwardWord();
    if (e.offset === this.offset) return {
      cursor: this,
      killed: ""
    };
    return this.killRange(this.offset, e.offset)
  }
  backwardKillWord() {
    let e = this.backwardWord();
    if (e.offset === this.offset) return {
      cursor: this,
      killed: ""
    };
    return this.killRange(e.offset, this.offset)
  }
  nextVimWord() {
    if (this.isAtEnd()) return this;
    let e = this.placeholderStartingAt(this.offset) ?? this.placeholderContaining(this.offset);
    if (e) return new va(this.measuredText, this.skipBlanks(e.end));
    let r = this.offset,
      n = (o) => this.measuredText.nextOffset(o),
      s = this.graphemeAt(r);
    if (!s) return this;
    if (this.isOnEmptyLine(r)) r = n(r);
    else if (tst(s))
      while (r < this.text.length && tst(this.graphemeAt(r))) r = n(r);
    else if (Zvt(s))
      while (r < this.text.length && Zvt(this.graphemeAt(r))) r = n(r);
    return new va(this.measuredText, this.snapOutOfPlaceholder(this.skipBlanks(r), "end"))
  }
  skipBlanks(e) {
    let r = e;
    while (r < this.text.length && Be.test(this.graphemeAt(r)) && !this.isOnEmptyLine(r)) r = this.measuredText.nextOffset(r);
    return r
  }
  isOnEmptyLine(e) {
    return this.text[e] === `
` && (e === 0 || this.text[e - 1] === `
`)
  }
  endOfVimWord() {
    if (this.isAtEnd()) return this;
    let e = this.placeholderStartingAt(this.offset) ?? this.placeholderContaining(this.offset);
    if (e && this.offset < e.end - 1) return new va(this.measuredText, e.end - 1);
    let r = this.text,
      n = this.offset,
      s = (f) => this.measuredText.nextOffset(f);
    if (this.graphemeAt(n) === "") return this;
    n = s(n);
    while (n < r.length && Be.test(this.graphemeAt(n))) n = s(n);
    if (n >= r.length) return new va(this.measuredText, r.length);
    let o = this.graphemeAt(n);
    if (tst(o))
      while (n < r.length) {
        let f = s(n);
        if (f >= r.length || !tst(this.graphemeAt(f))) break;
        n = f
      } else if (Zvt(o))
        while (n < r.length) {
          let f = s(n);
          if (f >= r.length || !Zvt(this.graphemeAt(f))) break;
          n = f
        }
    let u = this.placeholderStartingAt(n) ?? this.placeholderContaining(n);
    if (u) n = u.end - 1;
    return new va(this.measuredText, n)
  }
  prevVimWord() {
    if (this.isAtStart()) return this;
    let e = this.placeholderEndingAt(this.offset);
    if (e) return new va(this.measuredText, e.start);
    let r = this.placeholderContaining(this.offset);
    if (r) return new va(this.measuredText, r.start);
    let n = this.offset,
      s = (u) => this.measuredText.prevOffset(u);
    n = s(n);
    while (n > 0 && Be.test(this.graphemeAt(n))) n = s(n);
    if (n === 0 && Be.test(this.graphemeAt(0))) return new va(this.measuredText, 0);
    let o = this.graphemeAt(n);
    if (tst(o))
      while (n > 0) {
        let u = s(n);
        if (!tst(this.graphemeAt(u))) break;
        n = u
      } else if (Zvt(o))
        while (n > 0) {
          let u = s(n);
          if (!Zvt(this.graphemeAt(u))) break;
          n = u
        }
    return new va(this.measuredText, this.snapOutOfPlaceholder(n, "start"))
  }
  nextWORD() {
    let e = this;
    if (this.isOnEmptyLine(this.offset)) e = this.right();
    else
      while (!e.isOverWhitespace() && !e.isAtEnd()) e = e.right();
    while (e.isOverWhitespace() && !e.isAtEnd() && !this.isOnEmptyLine(e.offset)) e = e.right();
    return e
  }
  endOfWORD() {
    if (this.isAtEnd()) return this;
    let e = this.placeholderStartingAt(this.offset) ?? this.placeholderContaining(this.offset);
    if (e && this.offset < e.end - 1) return new va(this.measuredText, e.end - 1);
    let r = this;
    if (!r.isOverWhitespace() && (r.right().isOverWhitespace() || r.right().isAtEnd())) return r = r.right(), r.endOfWORD();
    if (r.isOverWhitespace()) {
      while (r.isOverWhitespace() && !r.isAtEnd()) r = r.nextWORD();
      let s = r.placeholderStartingAt(r.offset);
      if (s) return new va(this.measuredText, s.end - 1)
    }
    while (!r.right().isOverWhitespace() && !r.isAtEnd()) r = r.right();
    return r
  }
  prevWORD() {
    let e = this;
    if (e.left().isOverWhitespace()) e = e.left();
    while (e.isOverWhitespace() && !e.isAtStart()) e = e.left();
    if (!e.isOverWhitespace())
      while (!e.left().isOverWhitespace() && !e.isAtStart()) e = e.left();
    return e
  }
  modifyText(e, r = "") {
    let n = this.offset,
      s = e.offset,
      o = this.text.slice(0, n) + r,
      u = o + this.text.slice(s),
      f = o.normalize("NFC").length,
      h = va.fromText(u, this.columns, f),
      T = f !== n + r.normalize("NFC").length,
      {
        measuredText: S,
        offset: C
      } = h;
    if (T && S.snapToGraphemeBoundary(C) !== C) return new va(S, S.nextOffset(C));
    return h
  }
  insert(e) {
    return this.modifyText(this, e)
  }
  del() {
    if (this.isAtEnd()) return this;
    return this.modifyText(this.right())
  }
  backspace() {
    if (this.isAtStart()) return this;
    return this.left().modifyText(this)
  }
  deleteToLineStart(e) {
    if (this.offset > 0 && this.text[this.offset - 1] === `
`) return {
      cursor: this.left().modifyText(this),
      killed: `
`
    };
    let r = e ?? this.startOfLine();
    return this.killRange(r.offset, this.offset)
  }
  deleteToLineEnd(e) {
    if (this.text[this.offset] === `
`) return {
      cursor: this.modifyText(this.right()),
      killed: `
`
    };
    return this.killRange(this.offset, (e ?? this.endOfLine()).offset)
  }
  deleteWORDBefore() {
    if (this.isAtStart()) return {
      cursor: this,
      killed: ""
    };
    return this.killRange(this.prevWORD().offset, this.offset)
  }
  killRange(e, r) {
    let n = this.snapOutOfPlaceholder(e, "start"),
      s = this.snapOutOfPlaceholder(r, "end"),
      o = new va(this.measuredText, n),
      u = new va(this.measuredText, s);
    return {
      cursor: o.modifyText(u),
      killed: this.text.slice(n, s)
    }
  }
  graphemeAt(e) {
    if (e >= this.text.length) return "";
    let r = this.measuredText.nextOffset(e);
    return this.text.slice(e, r)
  }
  isOverWhitespace() {
    let e = this.text[this.offset] ?? "";
    return /\s/.test(e)
  }
  equals(e) {
    return this.offset === e.offset && this.measuredText === e.measuredText
  }
  isAtStart() {
    return this.offset === 0
  }
  isAtEnd() {
    return this.offset >= this.text.length
  }
  startOfFirstLine() {
    return new va(this.measuredText, 0, 0)
  }
  startOfLastLine() {
    let e = this.text.lastIndexOf(`
`);
    if (e === -1) return this.startOfLine();
    return new va(this.measuredText, e + 1, 0)
  }
  goToLine(e) {
    let r = this.text.split(`
`),
      n = Math.min(Math.max(0, e - 1), r.length - 1),
      s = 0;
    for (let o = 0; o < n; o++) s += (r[o]?.length ?? 0) + 1;
    return new va(this.measuredText, s, 0)
  }
  get text() {
    return this.measuredText.text
  }
  get columns() {
    return this.measuredText.columns + 1
  }
  getPosition() {
    return this.measuredText.getPositionFromOffset(this.offset)
  }
  getOffset(e) {
    return this.measuredText.getOffsetFromPosition(e)
  }
  findCharacter(e, r, n = 1) {
    let s = r === "f" || r === "t",
      o = r === "t" || r === "T",
      u = 0;
    if (s) {
      let f = this.findLogicalLineEnd(),
        h = this.measuredText.nextOffset(this.offset);
      while (h < f) {
        if (this.graphemeAt(h) === e) {
          if (u++, u === n) return o ? Math.max(this.offset, this.measuredText.prevOffset(h)) : h
        }
        h = this.measuredText.nextOffset(h)
      }
    } else {
      let f = this.findLogicalLineStart();
      if (this.offset <= f) return null;
      let h = this.measuredText.prevOffset(this.offset);
      while (h >= f) {
        if (this.graphemeAt(h) === e) {
          if (u++, u === n) return o ? Math.min(this.offset, this.measuredText.nextOffset(h)) : h
        }
        if (h === f) break;
        h = this.measuredText.prevOffset(h)
      }
    }
    return null
  }
}
class Bt {
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
    this.displayText = n ? e : e.trimStart(), this.displayStartOffset = r + (e.length - this.displayText.length)
  }
}
class Ft {
  columns;
  _wrappedLines;
  text;
  navigationCache;
  graphemeBoundaries;
  constructor(e, r) {
    this.columns = r;
    this.text = e.normalize("NFC"), this.navigationCache = new Map
  }
  get wrappedLines() {
    if (!this._wrappedLines) {
      let {
        rows: e,
        degraded: r
      } = Wt(this.text, this.columns);
      if (r) Sr(this.columns, this.text.length);
      this._wrappedLines = e.map((n) => new Bt(n.text, n.startOffset, n.isPrecededByNewline, n.endsWithNewline))
    }
    return this._wrappedLines
  }
  getGraphemeBoundaries() {
    if (!this.graphemeBoundaries) {
      this.graphemeBoundaries = [];
      for (let {
          index: e
        }
        of Sa().segment(this.text)) this.graphemeBoundaries.push(e);
      this.graphemeBoundaries.push(this.text.length)
    }
    return this.graphemeBoundaries
  }
  wordBoundariesCache;
  getWordBoundaries() {
    if (!this.wordBoundariesCache) {
      this.wordBoundariesCache = [];
      for (let e of g1s().segment(this.text)) this.wordBoundariesCache.push({
        start: e.index,
        end: e.index + e.segment.length
      })
    }
    return this.wordBoundariesCache
  }
  readlineWordBoundariesCache;
  getReadlineWordBoundaries() {
    if (!this.readlineWordBoundariesCache) {
      let e = [],
        r = !1;
      for (let n of this.getWordBoundaries()) {
        let s = this.text.slice(n.start, n.end);
        for (let o of s.matchAll(xr)) {
          let u = this.snapToGraphemeBoundary(n.start + o.index),
            f = n.start + o.index + o[0].length,
            h = this.snapToGraphemeBoundary(f),
            T = h === f ? f : this.nextOffset(h),
            S = e.at(-1);
          if (S && (u < S.end || u === S.end && r)) S.end = Math.max(S.end, T);
          else e.push({
            start: u,
            end: T
          });
          r = T !== f
        }
      }
      this.readlineWordBoundariesCache = e
    }
    return this.readlineWordBoundariesCache
  }
  binarySearchBoundary(e, r, n) {
    let s = 0,
      o = e.length - 1,
      u = n ? this.text.length : 0;
    while (s <= o) {
      let f = Math.floor((s + o) / 2),
        h = e[f];
      if (h === void 0) break;
      if (n)
        if (h > r) u = h, o = f - 1;
        else s = f + 1;
      else if (h < r) u = h, s = f + 1;
      else o = f - 1
    }
    return u
  }
  stringIndexToDisplayWidth(e, r) {
    if (r <= 0) return 0;
    if (r >= e.length) return ce(e);
    return ce(e.substring(0, r))
  }
  displayWidthToStringIndex(e, r) {
    if (r <= 0) return 0;
    if (!e) return 0;
    if (e === this.text) return this.offsetAtDisplayWidth(r);
    let n = 0,
      s = 0;
    for (let {
        segment: o,
        index: u
      }
      of Sa().segment(e)) {
      let f = ce(o);
      if (n + f > r) break;
      n += f, s = u + o.length
    }
    return s
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
        h = ce(f);
      if (r + h > e) return o;
      r += h
    }
    return this.text.length
  }
  getWrappedText() {
    return this.wrappedLines.map((e) => e.displayText)
  }
  getWrappedLines() {
    return this.wrappedLines
  }
  getLine(e) {
    let r = this.wrappedLines;
    return r[Math.max(0, Math.min(e, r.length - 1))]
  }
  getOffsetFromPosition(e) {
    let r = this.getLine(e.line);
    if (r.text.length === 0 && r.endsWithNewline) return r.startOffset;
    let n = r.displayStartOffset - r.startOffset,
      s = e.column + n,
      o = this.displayWidthToStringIndex(r.text, s),
      u = r.startOffset + o;
    return this.snapToGraphemeBoundary(u)
  }
  getLineLength(e) {
    let r = this.getLine(e);
    return ce(r.text)
  }
  getPositionFromOffset(e) {
    let r = this.wrappedLines;
    for (let o = 0; o < r.length; o++) {
      let u = r[o],
        f = r[o + 1];
      if (e >= u.startOffset && (!f || e < f.startOffset)) {
        let h = e - u.startOffset,
          T;
        if (u.isPrecededByNewline) T = this.stringIndexToDisplayWidth(u.text, h);
        else {
          let S = u.displayStartOffset - u.startOffset;
          if (h < S) T = 0;
          else {
            let C = u.displayText,
              k = h - S;
            T = this.stringIndexToDisplayWidth(C, k)
          }
        }
        return {
          line: o,
          column: Math.max(0, T)
        }
      }
    }
    let n = r.length - 1,
      s = this.wrappedLines[n];
    return {
      line: n,
      column: ce(s.text)
    }
  }
  get lineCount() {
    return this.wrappedLines.length
  }
  withCache(e, r) {
    let n = this.navigationCache.get(e);
    if (n !== void 0) return n;
    let s = r();
    return this.navigationCache.set(e, s), s
  }
  nextOffset(e) {
    return this.withCache(`next:${e}`, () => {
      let r = this.getGraphemeBoundaries();
      return this.binarySearchBoundary(r, e, !0)
    })
  }
  prevOffset(e) {
    if (e <= 0) return 0;
    return this.withCache(`prev:${e}`, () => {
      let r = this.getGraphemeBoundaries();
      return this.binarySearchBoundary(r, e, !1)
    })
  }
  snapToGraphemeBoundary(e) {
    if (e <= 0) return 0;
    if (e >= this.text.length) return this.text.length;
    let r = this.getGraphemeBoundaries(),
      n = 0,
      s = r.length - 1;
    while (n < s) {
      let o = n + s + 1 >> 1;
      if (r[o] <= e) n = o;
      else s = o - 1
    }
    return r[n]
  }
}

function It(e, {
  from: r,
  to: n
}, s, {
  spans: o,
  rowStart: u
}) {
  let f = r,
    h = "";
  for (let T of o) {
    let S = Math.max(f, T.start - u),
      C = Math.min(n, T.end - u);
    if (C <= S) continue;
    h += (S > f ? s(e.slice(f, S)) : "") + e.slice(S, C), f = C
  }
  return f === r || n > f ? h + s(e.slice(f, n)) : h
}

function Sr(e, r) {
  if (!xa().claim("measured_text_wrap_fallback")) return;
  a(new R(`Wrapped rows do not tile the text (columns=${e}, length=${r}); fell back to plain hard wrapping`, "Wrapped rows do not tile the text; fell back to plain hard wrapping"))
}
class Ht {
  prewarmed = !1;
  claim() {
    if (this.prewarmed) return !1;
    return this.prewarmed = !0, !0
  }
  reset() {
    this.prewarmed = !1
  }
}
var Dn = new W(() => new Ht);

function Gt() {}

function Kt(e) {
  return !1
}
var x5n = 3000,
  P5n = "Press \u2190 again to go back to agents",
  yzr = "Ambiguous \u2190, press again to detach",
  jt = 1000,
  _zr = 150,
  Er = 150;

function bzr() {
  return {
    editedEmptyAtMs: 0,
    armedAtMs: 0,
    absorbAnchorMs: 0,
    lastQualifiedLeftPressMs: 0,
    attachConfirmArmedAtMs: 0,
    absorbLogged: !1
  }
}

function Szr(e, r, n, s = v("tengu_left_arrow_editing_guard", !0), o = Kgn(r), u = KYe()) {
  if (n !== !0) return "reject";
  let f = (T) => T !== 0 && T >= u;
  if (o) {
    if (f(e.absorbAnchorMs) && r - e.absorbAnchorMs < jt) return "attach-absorb";
    if (f(e.attachConfirmArmedAtMs) && r - e.attachConfirmArmedAtMs <= 3000) return r - e.attachConfirmArmedAtMs >= Er ? "fire" : "attach-absorb";
    return "attach-arm"
  }
  if (!s) return "fire";
  if (f(e.lastQualifiedLeftPressMs) && r - e.lastQualifiedLeftPressMs < _zr) return "absorb";
  if (f(e.armedAtMs) && r - e.armedAtMs <= 3000) return "fire";
  if (f(e.absorbAnchorMs) && r - e.absorbAnchorMs < jt) return "absorb";
  return f(e.editedEmptyAtMs) && r - e.editedEmptyAtMs < 2000 ? "arm" : "fire"
}

function wzr(e, r, n) {
  switch (r) {
    case "fire":
      if (e.armedAtMs !== 0) e.editedEmptyAtMs = 0;
      e.armedAtMs = 0, e.attachConfirmArmedAtMs = 0, e.absorbAnchorMs = n, e.lastQualifiedLeftPressMs = n, e.absorbLogged = !1;
      return;
    case "arm":
      e.armedAtMs = n, e.absorbAnchorMs = n, e.lastQualifiedLeftPressMs = n, e.absorbLogged = !1;
      return;
    case "absorb":
      if (n - e.lastQualifiedLeftPressMs < _zr) e.absorbAnchorMs = n;
      e.lastQualifiedLeftPressMs = n;
      return;
    case "reject":
      return;
    case "attach-arm":
      e.attachConfirmArmedAtMs = n;
      return;
    case "attach-absorb":
      return
  }
}

function kzr(e, r, n) {
  let s = r - KYe();
  switch (e) {
    case "fire":
      if (KYe() !== 0) l("tengu_left_arrow_fired", {
        ms_since_stamp: s
      });
      return;
    case "arm":
      l("tengu_left_arrow_blocked", {
        reason: b("editing-quiet")
      });
      return;
    case "attach-arm":
      l("tengu_left_arrow_blocked", {
        reason: b("attach-quiet-hint"),
        ms_since_stamp: s
      }), t(`leftArrowGesture: attach-quiet hint armed (ms_since_stamp=${s})`, {
        level: "debug"
      });
      return;
    case "attach-absorb":
      l("tengu_left_arrow_blocked", {
        reason: b("attach-quiet"),
        ms_since_stamp: s
      }), t(`leftArrowGesture: attach-quiet silent absorb (ms_since_stamp=${s})`, {
        level: "debug"
      });
      return;
    case "reject":
      if (xa().claim("left_arrow_not_solo_reject")) l("tengu_left_arrow_blocked", {
        reason: b("not-solo")
      });
      return;
    case "absorb":
      if (n.absorbAnchorMs === r || n.absorbLogged) return;
      n.absorbLogged = !0;
      let o = r - n.absorbAnchorMs;
      l("tengu_left_arrow_blocked", {
        reason: b("absorb"),
        ms_since_press: o
      }), t(`leftArrowGesture: human-cadence press absorbed, too soon after the last \u2190 that fired or showed the hint (ms_since_press=${o})`, {
        level: "debug"
      });
      return
  }
}
var O5n = (e, r) => e.filter((n) => n.start < r),
  vzr = (e, r) => e.normalize("NFC") === e && r.text.normalize("NFC") === r.text;

function Ar(e, r, n) {
  let s = n === "up" || n === "down",
    o = e.cursorOver(r);
  for (;;) {
    let u = o[n]();
    if (u.equals(o)) return r;
    let f = u.getPosition().line,
      h = dcs(e.text, u.offset),
      T = (s ? [h, r.measuredText.nextOffset(h), r.measuredText.prevOffset(h)] : [h]).find((S) => S !== r.offset && (!s || e.rowOf(S) === f));
    if (T !== void 0) return new va(r.measuredText, T);
    o = u
  }
}

function gt({
  buffer: e,
  texts: r,
  columns: n,
  side: s
}) {
  if (r.length === 0) return;
  let o = ROn(e, r);
  if (!vzr(e, o)) return;
  let {
    measuredText: u
  } = va.fromText(o.text, n), f = (T) => new va(u, J9e(o, T.offset, s)), h = (T) => u.getPositionFromOffset(J9e(o, T, s)).line;
  return {
    text: o,
    cursorOver: f,
    rowOf: h,
    lastRow: () => {
      let T = J9e(o, e.length, "before");
      return u.getPositionFromOffset(e.endsWith(`
`) ? T : u.prevOffset(T)).line
    },
    rowMoved: (T, S) => Ar({
      text: o,
      cursorOver: f,
      rowOf: h
    }, T, S)
  }
}

function I5n({
  buffer: e,
  offset: r,
  texts: n,
  columns: s,
  side: o
}) {
  let u = va.fromText(e, s, r),
    f = gt({
      buffer: e,
      texts: n,
      columns: s,
      side: o
    });
  if (f === void 0) return {
    cursor: u,
    bufferOffset: (h) => h
  };
  return {
    cursor: f.cursorOver(u),
    bufferOffset: (h) => dcs(f.text, h)
  }
}
var Or = () => {};

function Cr(e, r) {
  if (e === "") return;
  if (r !== "") {
    QL("deleted");
    return
  }
  let n = e.trim() === "" ? e.includes(`
`) ? "new line" : e.includes("\t") ? "tab" : "space" : e.replaceAll(`
`, " ").trim();
  QL(n)
}
var $r = new Set(["insert", "clear", "enter", "center", "undefined", "mouse", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11", "f12"]);

function chn() {
  return i.terminal === "Apple_Terminal" && Kt("shift")
}

function Ut(e) {
  let r = new Map(e);
  return function(n) {
    return (r.get(n) ?? Or)(n)
  }
}

function uhn({
  value: e,
  onChange: r,
  onSubmit: n,
  onExit: s,
  onExitMessage: o,
  onEscapeMessage: u,
  historyOnClear: f = !0,
  onLeftArrowOnEmpty: h,
  leftArrowConfirmHint: T,
  onHistoryUp: S,
  onHistoryDown: C,
  onHistoryReset: k,
  mask: F = "",
  maskWhole: se = !1,
  multiline: J = !1,
  disableBackslashReturn: ee = !1,
  clearOnSubmit: le = !0,
  disableCtrlCClear: H = !1,
  cursorChar: U,
  preserveTrailingWhitespace: Y = !1,
  invert: M,
  columns: z,
  leadingPill: he,
  onImagePaste: we,
  disableCursorMovementForUpDownKeys: E = !1,
  disableEscapeDoublePress: V = !1,
  maxVisibleLines: ie,
  externalOffset: te,
  onOffsetChange: Q,
  inputFilter: I,
  getPastedContents: q,
  getInputMode: re,
  inlineGhostText: B,
  dim: de,
  virtualTexts: ae,
  isCursorOnCharacter: ye = !1,
  editRelay: $e,
  commitEdit: xe,
  selectionAnchor: X,
  selectionLinewise: pe = !1
}) {
  let ke = oa(),
    Te = rst();
  if (i.terminal === "Apple_Terminal") Gt();
  let He = te,
    Ge = Q,
    N = he?.text ?? "",
    w = va.fromText(N + e, z, N.length + He),
    wt = B && de && B.insertPosition === He ? {
      text: B.text,
      dim: de
    } : void 0,
    yt = wt !== void 0 && He >= e.length,
    rt = Z(() => ae === void 0 || ae.length === 0 || e === "" || F !== "" ? void 0 : gt({
      buffer: N + e,
      texts: X9e(yt ? O5n(ae, e.length) : ae, N.length),
      columns: z,
      side: ye ? "after" : "before"
    }), [ae, e, F, N, yt, z, ye]),
    nt = !1,
    st, Ke = !1;

  function Ee(d) {
    return I && st ? I(d, st) : d
  }
  let {
    addNotification: je,
    removeNotification: it
  } = Lo(), {
    storageV5: ot
  } = Fe(), [ge] = y(bzr), Ue = "left-arrow-again-for-agents", Ve = A({
    key: "Ctrl-C",
    pending: !1
  }), zt = G7((d) => {
    Ve.current.pending = d, o?.(d, Ve.current.key)
  }, () => s?.(), () => {
    if (!H && e) r(""), Ge(0), k?.()
  });

  function xt(d) {
    if (!Ve.current.pending) Ve.current.key = d;
    zt()
  }
  let Zt = G7((d) => {
    if (!e) return;
    if (u) {
      u(d);
      return
    }
    if (!d) return;
    je({
      key: "escape-again-to-clear",
      kind: "feedback",
      text: "Esc again to clear",
      row1Hint: "Esc again to clear",
      priority: "immediate",
      timeoutMs: 1000
    })
  }, () => {
    if (u?.(!1), it("escape-again-to-clear"), e) {
      if (f && F === "" && e.trim() !== "") {
        let d = q ? Ro(q(), (me) => me.type === "text" && me.unavailable === !0) : void 0,
          L = re?.(),
          P = L !== void 0 ? KUe(e, L) : e,
          ne = d ? {
            display: P,
            pastedContents: d
          } : P;
        if (L !== void 0) cTe(ne, ot, {
          submitMode: L
        });
        else cTe(ne, ot)
      }
      r(""), Ge(0), k?.()
    }
  });

  function Jt() {
    if (w.text === N && e === "") return xt("Ctrl-D"), w;
    return w.del()
  }

  function Tt() {
    if (N !== "" && w.offset === N.length) return va.fromText(w.text.slice(N.length), z);
    return w.backspace()
  }

  function _e(d, L) {
    let P = d.startsWith(N) ? d.slice(N.length) : d;
    return Te.dispatch(F === "" ? {
      type: "kill",
      text: P,
      direction: L
    } : {
      type: "interrupt"
    }), Cr(P, F), P
  }

  function lt() {
    let {
      cursor: d,
      killed: L
    } = w.deleteToLineEnd(be("endOfLine"));
    return _e(L, "append"), d
  }

  function St() {
    let {
      cursor: d,
      killed: L
    } = w.deleteToLineStart(be("startOfLine")), P = _e(L, "prepend");
    if (F === "" && P.length >= 3) je({
      key: "kill-paste-hint",
      kind: "hint",
      text: "Ctrl+Y to paste deleted text",
      row1Hint: "ctrl+y to undo delete",
      priority: "immediate",
      timeoutMs: 5000
    });
    return d
  }

  function Qt() {
    let {
      cursor: d,
      killed: L
    } = w.killWord();
    return _e(L, "append"), d
  }

  function Xt() {
    let {
      cursor: d,
      killed: L
    } = w.backwardKillWord();
    return _e(L, "prepend"), d
  }

  function er() {
    let {
      cursor: d,
      killed: L
    } = w.deleteWORDBefore();
    return _e(L, "prepend"), d
  }

  function tr() {
    let d = Ee(sEt(Te.state));
    if (d.length > 0) {
      let L = w.offset - N.length,
        P = w.insert(d);
      return Te.dispatch({
        type: "yank",
        start: L,
        length: d.length
      }), P
    }
    return w
  }

  function rr() {
    let d = z5n(Te.state);
    if (!d) return w;
    let {
      text: L,
      length: P
    } = d, ne = N.length + d.start, me = Ee(L);
    Te.dispatch({
      type: "yankPop"
    });
    let Ae = w.text.slice(0, ne),
      qe = w.text.slice(ne + P),
      dr = Ae + me + qe,
      fr = ne + me.length;
    return Te.dispatch({
      type: "updateYankLength",
      length: me.length
    }), va.fromText(dr, z, fr)
  }
  let nr = Ut([
      ["a", () => w.startOfLogicalLine()],
      ["b", () => w.left()],
      ["c", () => (xt("Ctrl-C"), w)],
      ["d", Jt],
      ["e", () => w.endOfLogicalLine()],
      ["f", () => w.right()],
      ["h", Tt],
      ["k", lt],
      ["n", () => Ot()],
      ["p", () => At()],
      ["u", St],
      ["w", er],
      ["y", tr]
    ]),
    sr = Ut([
      ["b", () => w.backwardWord()],
      ["f", () => w.forwardWord()],
      ["d", Qt],
      ["y", rr]
    ]);

  function ir({
    meta: d,
    shift: L
  }) {
    if (J && !ee && w.offset > 0 && w.text[w.offset - 1] === "\\") return Y8s(ot), w.backspace().insert(Ee(`
`));
    if (d || L) return w.insert(Ee(`
`));
    if (chn()) return w.insert(Ee(`
`));
    if (n) n(w.text.slice(N.length)), nt = !0;
    return w
  }

  function Ye() {
    ge.editedEmptyAtMs = Date.now()
  }

  function Et() {
    if (ge.armedAtMs === 0) return;
    ge.armedAtMs = 0, it(Ue)
  }

  function ze() {
    return rt !== void 0 && w.text === rt.text.draft ? rt : void 0
  }

  function be(d) {
    return ze()?.rowMoved(w, d) ?? w[d]()
  }

  function At() {
    if (E) return Ye(), S?.(), w;
    let d = ze();
    if (S && (d ? d.rowOf(w.offset) <= d.rowOf(N.length) : w.getPosition().line <= w.measuredText.getPositionFromOffset(N.length).line)) return Ye(), S(), w;
    let L = be("up");
    if (!L.equals(w)) return L;
    if (J) {
      let P = w.upLogicalLine();
      if (!P.equals(w)) return P
    }
    return w
  }

  function Ot() {
    if (E) return Ye(), C?.(), w;
    let d = ze();
    if (C && (d ? d.rowOf(w.offset) >= d.lastRow() : w.getPosition().line >= w.measuredText.lineCount - 1)) return Ye(), C(), w;
    let L = be("down");
    if (!L.equals(w)) return L;
    if (J) {
      let P = w.downLogicalLine();
      if (!P.equals(w)) return P
    }
    return w
  }

  function or(d) {
    if (d.ctrl && (d.key === "k" || d.key === "u" || d.key === "w")) return !0;
    if (d.meta && !d.ctrl && d.key === "d") return !0;
    if (d.key === "backspace" && (d.meta || d.superKey || d.ctrl)) return !0;
    if (d.key === "delete" && (d.meta || d.superKey)) return !0;
    return !1
  }

  function ar(d) {
    return (d.ctrl || d.meta) && d.key === "y"
  }

  function ur(d, L) {
    switch (d.name) {
      case "escape":
        if (V) return;
        return Zt(), w;
      case "left":
        if (d.superKey) return be("startOfLine");
        if (d.ctrl || d.meta || d.fn) return w.backwardWord();
        if (h && !d.shift && w.text === N) {
          let P = Date.now(),
            ne = Szr(ge, P, d.soloKeypress),
            me = ge.armedAtMs === 0 ? void 0 : P - ge.absorbAnchorMs;
          switch (wzr(ge, ne, P), kzr(ne, P, ge), ne) {
            case "fire":
              return it(Ue), h(me), w;
            case "arm":
              return je({
                key: Ue,
                kind: "feedback",
                text: T ?? "Press \u2190 again",
                priority: "immediate",
                timeoutMs: x5n
              }), w;
            case "absorb":
              return w;
            case "attach-arm":
              return je({
                key: Ue,
                kind: "feedback",
                text: yzr,
                priority: "immediate",
                timeoutMs: x5n
              }), w;
            case "attach-absorb":
              return w;
            case "reject":
              return w.left()
          }
        }
        return w.left();
      case "right":
        if (d.superKey) return be("endOfLine");
        if (d.ctrl || d.meta || d.fn) return w.forwardWord();
        return w.right();
      case "up":
        if (d.shift || d.ctrl || d.meta) return;
        return At();
      case "down":
        if (d.shift || d.ctrl || d.meta) return;
        return Ot();
      case "backspace":
        if (d.superKey) return St();
        if (d.meta || d.ctrl) return Xt();
        return Tt();
      case "delete":
        if (d.superKey) return lt();
        if (d.meta) return lt();
        return w.del();
      case "home":
        if (d.ctrl) return;
        return be("startOfLine");
      case "end":
        if (d.ctrl) return;
        return be("endOfLine");
      case "pagedown":
        if (ke || d.ctrl) return;
        return be("endOfLine");
      case "pageup":
        if (ke || d.ctrl) return;
        return be("startOfLine");
      case "return":
        if (d.ctrl) return;
        return ir(d);
      case "enter":
        return w.insert(Ee(`
`));
      case "tab":
        return
    }
    if (J && d.ctrl && !d.shift && !d.meta && d.name === "j") return w.insert(Ee(`
`));
    if (d.ctrl) return nr(d.key);
    if (d.meta) return sr(d.key);
    if ($r.has(d.name)) return;
    if (L.length === 0) return;
    if (re !== void 0 && w.offset === N.length && fVt(L) && re() !== Mk(L)) return Ke = !0, w.insert(L).left();
    return w.insert(L)
  }

  function cr(d) {
    st = d, Ke = !1;
    let L = I ? I(d.key, d) : d.key;
    if (L === "" && d.key !== "") {
      d.preventDefault();
      return
    }
    if (!or(d) && !ar(d)) Te.dispatch({
      type: "interrupt"
    });
    if (!(d.name === "left" && !d.ctrl && !d.meta && !d.fn && !d.superKey && !d.shift)) Et();
    let P = ur(d, L);
    if (P === void 0) return;
    if (d.preventDefault(), !w.equals(P)) {
      let ne = P.text.startsWith(N);
      if (ne && P.offset < N.length) P = new va(P.measuredText, N.length);
      let me = w.text.slice(N.length),
        Ae = ne ? P.text.slice(N.length) : P.text,
        qe = P.offset - (ne ? N.length : 0);
      if (me !== "" && Ae === "") ge.editedEmptyAtMs = Date.now();
      if (me !== Ae)
        if (xe !== void 0 && !Ke) xe(() => r(Ae));
        else r(Ae);
      if (Ge(qe), $e?.isRecording() === !0 && !Ke) $e.record({
        before: {
          text: me,
          cursor: Math.max(0, w.offset - N.length)
        },
        after: {
          text: Ae,
          cursor: qe
        },
        key: d
      });
      if (w = P, !ne) N = "", he?.onDelete()
    }
    if (nt) {
      if (nt = !1, le) w = va.fromText(N, z, N.length)
    }
  }
  let Oe = ze(),
    Pe = Oe?.cursorOver(w) ?? w,
    Ct = Pe.getPosition();
  return {
    handleKeyDown: cr,
    renderedValue: Pe.render(U, F, M, wt, ie, X === void 0 || X === null ? void 0 : Oe ? J9e(Oe.text, N.length + X, "after") : N.length + X, pe, Y, Oe?.text.spans, se),
    offset: He,
    setOffset: Ge,
    cursorLine: Ct.line - Pe.getViewportStartLine(ie),
    cursorColumn: Ct.column,
    renderedRowStartOffsets: Pe.getRenderedRowStartOffsets(ie),
    shown: Oe && {
      text: Oe.text,
      cursorOffset: Pe.offset
    },
    noteKeystrokeEmptied: () => {
      ge.editedEmptyAtMs = Date.now()
    },
    disarmLeftArrowConfirm: Et
  }
}
var bt = " \u2581\u2582\u2583\u2584\u2585\u2586\u2587\u2588",
  Lr = 0.7,
  kr = 1.8,
  _r = 0.15;

function ZGt() {
  let e = G((U) => j_(U.settings.prefersReducedMotion)),
    r = n$o(),
    n = B_((U) => U.voiceState) === "recording",
    s = B_((U) => U.voiceAudioLevels),
    o = n && !e,
    [u, f] = pl(o ? 50 : null);
  if (!o) return [u, null];
  let h = s.at(-1) ?? 0,
    T = Math.min(h * kr, 1),
    S = r.next(T, Lr),
    C = Math.max(1, Math.min(Math.round(S * (bt.length - 1)), bt.length - 1)),
    k = h < _r,
    F = f / 1000 * 90 % 360,
    se = sw() ? hhn(F) : F,
    {
      r: J,
      g: ee,
      b: le
    } = k ? {
      r: 128,
      g: 128,
      b: 128
    } : ghn(se),
    H = `#${(J<<16|ee<<8|le).toString(16).padStart(6,"0")}`;
  return [u, {
    char: bt[C],
    hex: H
  }]
}
j();
import {
  basename as vr,
  isAbsolute as Pr
} from "path";
var Rr = 50,
  Mr = / (?=["']?(?:\/|[A-Za-z]:\\))/,
  Wr = /^(?:\/(?!\/)[^ \r\\/]*(?:\\.[^ \r\\/]*)*\/|[A-Za-z]:\\|\\\\)[^\r]*$/,
  Ir = /^(["'])(?:\/[^/\r]+\/|[A-Za-z]:\\|\\\\)[^\r]*\1$/,
  Dr = /[^\\] /,
  Vt = /\/TemporaryItems\/.*screencaptureui.*\/Screenshot/i;

function Yt() {
  return Al(at())
}

function eEt({
  onPaste: e,
  handleKeyDown: r,
  onImagePaste: n,
  onUnreadImagePaste: s
}) {
  let o = Rn(),
    u = ve(D0),
    [f, h] = y(!1),
    T = A(!0),
    S = A(!1),
    C = A(!1),
    [k, F] = y(0),
    se = Z(() => x() === "macos", []),
    J = Z(() => x() === "wsl", []);
  O(() => () => {
    T.current = !1
  }, []);
  let ee = qo(() => {
    r(new fhe({
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
      col: void 0,
      row: void 0
    }))
  });
  O(() => {
    if (k === 0) return;
    return o.setTimeout(() => {
      if (S.current = !1, C.current) C.current = !1, ee()
    }, 0)
  }, [k, o]);
  let le = ue(() => {
      if (!n || !T.current) return;
      Qke(Yt()).then((E) => {
        if (E && T.current) n(E.base64, {
          mediaType: E.mediaType,
          dimensions: E.dimensions
        })
      }).catch((E) => {
        if (T.current) m("input_image_paste", "clipboard_read_failed"), a(E)
      }).finally(() => {
        Y()
      })
    }, [n]),
    H = HG(le, Rr);

  function U(E) {
    if (e) {
      e(E);
      return
    }
    r(new fhe({
      kind: "key",
      name: void 0,
      fn: !1,
      ctrl: !1,
      meta: !1,
      shift: !1,
      option: !1,
      super: !1,
      sequence: E,
      raw: E,
      col: void 0,
      row: void 0
    }))
  }

  function Y() {
    if (!T.current) return;
    S.current = !1, C.current = !1, h(!1)
  }

  function M() {
    h(!1), F((E) => E + 1)
  }

  function z(E, V = E.length === 0, ie = E.endsWith("[I") || E.endsWith("[O")) {
    S.current = !0;
    let te = ie ? E.replace(/\[[IO]$/, "") : E;
    if (V && (se || J) && n) {
      H();
      return
    }
    if (V && n) s?.();
    let Q = [],
      I = [];
    for (let q of te.split(`
`)) {
      let re = q.split(Mr).filter((B) => B.trim());
      if (re.length > 1 && !re.every((B) => {
          let de = B.trim();
          return Ir.test(de) || Wr.test(de) && (!Dr.test(de) || H3o(de))
        })) {
        I.push(q);
        continue
      }
      for (let B of re)
        if (H3o(B)) I.push(Q.length), Q.push(B);
        else I.push(B)
    }
    if (n && Q.length > 0) {
      let q = Q.some((B) => Vt.test(B)),
        re = Yt();
      Promise.all(Q.map((B) => bci(B, re, (de) => Cla(de, () => {
        let ae = u?.getState().toolPermissionContext;
        return ae ? [ae, Rla(ae)] : []
      }, (ae, ye) => Lfr(ae, ye, "person"))))).then((B) => {
        if (!T.current) return;
        let de = B.includes("refused"),
          ae = Q.every((X) => Pr($3o(X) ?? "")),
          ye = B.filter((X) => X !== null && X !== "refused"),
          $e = ye.length === 0 && q && se && !de && ae,
          xe = I.flatMap((X) => {
            if (typeof X === "string") return [X];
            let pe = Q[X] ?? "";
            return (B[X] === null || B[X] === "refused") && !($e && Vt.test(pe)) ? [pe] : []
          }).join(`
`);
        if (ye.length > 0) {
          for (let [X, pe] of ye.entries()) {
            let ke = vr(pe.path);
            n(pe.base64, {
              mediaType: pe.mediaType,
              filename: ke,
              dimensions: pe.dimensions,
              sourcePath: pe.path,
              continuesGesture: X > 0
            })
          }
          if (xe) U(xe);
          Y()
        } else if ($e) {
          if (xe) U(xe);
          H()
        } else c("input_image_drag", de ? "read_withheld" : "read_failed"), U(te), Y()
      }).catch((B) => {
        if (!T.current) return;
        m("input_image_drag", "read_threw"), t(`Image paste read failed: ${B instanceof Error?B.message:String(B)}`, {
          level: "error"
        }), U(te), Y()
      });
      return
    }
    U(te), M()
  }

  function he(E) {
    E.preventDefault(), h(!0), z(E.text, E.rawEmpty, E.rawEndedWithFocusTail)
  }

  function we(E) {
    if (S.current && E.name === "return") {
      E.preventDefault(), C.current = !0;
      return
    }
    if ((e || n) && !E.ctrl && !E.meta && E.key.length > hQ && !E.defaultPrevented) {
      E.preventDefault(), h(!0);
      let V = new mke(E.key);
      z(V.text, V.rawEmpty, V.rawEndedWithFocusTail);
      return
    }
    r(E)
  }
  return {
    handleKeyDown: we,
    handlePaste: he,
    isPasting: f
  }
}
export {
  wS,
  mzr,
  hzr,
  Msa,
  Dsa,
  lke,
  QHo,
  Y8s,
  hha,
  ZHo,
  gzr,
  e$o,
  X8s,
  J8s,
  tst,
  TYe,
  Zvt,
  va,
  x5n,
  P5n,
  yzr,
  _zr,
  bzr,
  Szr,
  wzr,
  kzr,
  O5n,
  vzr,
  I5n,
  chn,
  uhn,
  ZGt,
  eEt
};
