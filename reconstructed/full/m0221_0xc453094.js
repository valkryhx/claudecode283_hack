// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Nt,
  we,
  sT,
  YI,
  Hde,
  ABe,
  IBe,
  JVr,
  QVr,
  cQ,
  MBe,
  Yn,
  xu
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  c
} from "B:/~BUN/root/chunk-kks4mj3w.js";
import {
  P,
  l,
  v,
  yQ,
  B,
  Xs
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  Q,
  nt
} from "B:/~BUN/root/chunk-17wqwt36.js";
import {
  G$,
  HC,
  Yi,
  qg,
  FBe,
  KBo,
  uA,
  T9n,
  Uyn,
  Bxe,
  AK,
  Km
} from "B:/~BUN/root/chunk-54p0h65d.js";
import {
  Se
} from "B:/~BUN/root/chunk-4p6z9qq1.js";
import {
  f
} from "B:/~BUN/root/chunk-zv3zxqya.js";
import {
  cxe,
  oBe,
  qa,
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  o9e
} from "B:/~BUN/root/chunk-zksmb712.js";
import {
  gt,
  J,
  v1t,
  Bh,
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  It,
  O
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  Br
} from "B:/~BUN/root/chunk-3daz140w.js";
import {
  ar
} from "B:/~BUN/root/chunk-290k5gh5.js";
import {
  i
} from "B:/~BUN/root/chunk-728mwbhs.js";
import {
  _,
  m,
  p,
  Or
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  CN,
  tl
} from "B:/~BUN/root/chunk-bt3h0syz.js";
import {
  G,
  yY,
  eft,
  i8e,
  A6n,
  x6n
} from "B:/~BUN/root/chunk-ah3egpyh.js";
import {
  Fn
} from "B:/~BUN/root/chunk-339q6g5w.js";
import {
  K
} from "B:/~BUN/root/chunk-5px6g0cn.js";
import {
  Ea,
  Ve
} from "B:/~BUN/root/chunk-py7yqpgt.js";
import {
  AD,
  pAe,
  F$e,
  zS,
  wr,
  Nv,
  he,
  fBr,
  $$e,
  EJ,
  gC,
  gAe,
  hAe,
  omn
} from "B:/~BUN/root/chunk-3rzkfay5.js";
import {
  Ie,
  zn
} from "B:/~BUN/root/chunk-sd4cj2qx.js";
import {
  fu
} from "B:/~BUN/root/chunk-vyq5y0zs.js";
import {
  dc,
  un,
  $i,
  Dt,
  x,
  Yf
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  hs
} from "B:/~BUN/root/chunk-ceg1zct0.js";
import {
  z0,
  Bq
} from "B:/~BUN/root/chunk-4h4gje25.js";
import {
  Fl
} from "B:/~BUN/root/chunk-ejjy06g8.js";
import {
  pr
} from "B:/~BUN/root/chunk-1rjcv085.js";
import {
  dt
} from "B:/~BUN/root/chunk-hhgrczac.js";
import {
  s6e,
  r2n,
  zDt,
  pct,
  qDt,
  Zc
} from "B:/~BUN/root/chunk-hfe3cbfz.js";
import {
  Fk
} from "B:/~BUN/root/chunk-f1dj0k6n.js";
import {
  Vln
} from "B:/~BUN/root/chunk-j14vfkmm.js";
import {
  WT,
  G4e,
  Ysn,
  Rge,
  HV,
  Mee
} from "B:/~BUN/root/chunk-384x2wn9.js";
import {
  Az,
  Sv,
  AHe
} from "B:/~BUN/root/chunk-pt7v2bpc.js";
import {
  Cle
} from "B:/~BUN/root/chunk-gj0n7q1s.js";
import {
  IB,
  ER,
  OB
} from "B:/~BUN/root/chunk-xmtkv29j.js";
import {
  yIr
} from "B:/~BUN/root/chunk-h7t9e2fk.js";
import {
  Qf
} from "B:/~BUN/root/chunk-sa6ew4xs.js";
import {
  cn,
  Pt
} from "B:/~BUN/root/chunk-w5bkq1td.js";
import {
  o,
  u
} from "B:/~BUN/root/chunk-n8qdr73v.js";
import {
  L
} from "B:/~BUN/root/chunk-z1enakv9.js";
import {
  de,
  ho,
  Xn,
  lt
} from "B:/~BUN/root/chunk-8386ms9e.js";

function ejn(e) {
  let n = (d, g) => {
      let y = zS(d, g);
      return y.settings === null && hAe(y.errors).length > 0
    },
    r = ["userSettings", "localSettings", "flagSettings"].some((d) => {
      let g = wr(d);
      if (g === void 0) return !1;
      switch (d) {
        case "flagSettings":
          return n(g, YI() ?? Hde());
        case "localSettings": {
          let y = Nv();
          return n(g) || y !== void 0 && y !== g && n(y)
        }
        case "userSettings":
          return n(g)
      }
    }),
    s = Bq(e.policyKey);
  return !omn(e.settingKey) || gAe().length > 0 && gC() !== "helper" || r || fBr(e.settingKey) || ABe() && $$e() || s === "org_denied" || s === "latched" || s === "unregistered"
}

function tjn(e) {
  if (!omn(e.settingKey)) return !1;
  if (!e.isTierInPlay()) return !1;
  if (Ie() !== "firstParty") return !1;
  if (a.ANTHROPIC_UNIX_SOCKET) return !1;
  if (Yn()) return !1;
  if (dc().source !== "claude.ai") return !1;
  if (It()) return !1;
  if (!z0(e.policyKey)) return !1;
  return H(e)
}

function h0t() {
  return dc().source === "claude.ai" && !Yn()
}

function H(e) {
  return x(e.flagName, !1) === !0
}

function njn(e) {
  return !yIr() && We(e)
}

function We(e) {
  let n = Bq(e.policyKey);
  return n === "cache_miss" || n === "route_missing"
}

function rjn(e) {
  let n = [...EJ(), he("userSettings")],
    r = Bq(e.policyKey);
  return n.some((s) => s?.[e.settingKey] === !1) || r === "org_denied" || r === "latched"
}
var D = {
  settingKey: "syncClaudeAiPlugins",
  policyKey: "allow_account_plugins_sync",
  flagName: "tengu_claudeai_plugins_sync_enabled",
  isTierInPlay: () => _Ne()
};

function Msn() {
  ojn();
  let e = Xe() && !cQ();
  return JVr(e), e
}

function ojn() {
  QVr(ejn(D))
}

function y0t() {
  return ojn(), cQ()
}

function nTo() {
  return IBe().length > 0 || _0t()
}

function _0t() {
  return Dsn() || sjn()
}

function sjn() {
  return !Dsn() && H(D) && h0t()
}

function Axr() {
  return Dsn() || h0t()
}

function wat() {
  return H(D) && h0t() && _Ne() && !y0t()
}

function rTo() {
  return H(D)
}

function Dsn() {
  return a.CLAUDE_CODE_SYNC_PLUGINS || a.CLAUDE_CODE_SYNC_SESSION_REFS
}

function Lsn() {
  return njn(D)
}

function _Ne() {
  return !Br("plugins") && ar("userSettings")
}

function Xe() {
  return tjn(D)
}

function oTo() {
  return rjn(D)
}
import {
  readdir as pe,
  stat as qe
} from "fs/promises";
import {
  join as Y
} from "path";
var b0t = ".claude-plugin",
  n0 = Y(b0t, "plugin.json"),
  S0t = "plugin.json",
  ijn = Y(b0t, "marketplace.json"),
  ajn = ["commands", "skills", "agents", "hooks", "themes", "output-styles", "monitors", "workflows"],
  Je = ["SKILL.md", ".mcp.json", ".lsp.json"],
  W4e = [b0t, ...ajn, ...Je];
async function Nsn(e) {
  return (await pe(e)).filter((r) => !me(r)).some(ljn)
}
async function w0t(e) {
  let n = (await pe(e, {
    withFileTypes: !0
  })).filter((r) => !me(r.name));
  if (n.some((r) => r.name === ".claude-plugin")) return e;
  if (n.length === 1 && n[0].isDirectory()) {
    let r = Y(e, n[0].name);
    if (await Ze(Y(r, ".claude-plugin"))) return r;
    if (!ljn(n[0].name) && await Nsn(r)) return r
  }
  return e
}

function ljn(e) {
  return W4e.includes(e)
}

function sTo(e) {
  return ajn.includes(e)
}
async function Ze(e) {
  try {
    return await qe(e), !0
  } catch {
    return !1
  }
}

function me(e) {
  return e === "__MACOSX" || e === ".DS_Store"
}

function vat() {
  if (It()) return !1;
  if (bNe()) return !1;
  return q()
}

function q() {
  return x("tengu_plugin_command_source_refresh", !0)
}
var Qe = 30000;

function bNe() {
  let e = Zc(),
    n = AK(Sv());
  if (O() === "windows" ? KBo(e) : Yi(e)) return !0;
  let r = dt().provenLocalRoots,
    s = r.get(n);
  if (s === void 0 || !Az(s, Qe)) {
    if (FBe(n, {
        allowLocalWsl: !0
      })) return r.delete(n), !0;
    r.set(n, Date.now())
  }
  if (Km(Se(), n)) return !1;
  return et().some((d) => Km(n, d, {
    foldCase: !0
  }) || Km(d, n, {
    foldCase: !0
  }))
}

function et() {
  return L([we(), ...xu()].flatMap((e) => [e, Fn(e), AD(e)].filter((n) => n !== null)))
}
var tt = ["local", "npm", "github", "git", "subdir", "archive", "command", "unknown"];

function z4e(e) {
  let n = Math.random().toString(36).slice(2, 2 + fe).padEnd(1, "0");
  return `${ge}${e}_${Date.now()}_${n}`
}
var ge = "temp_",
  fe = 6,
  ZEe = "_x",
  xxr = ".clone",
  cjn = new RegExp(`^${ge}(?:${tt.join("|")})_(\\d{10,})_[a-z0-9]{1,${fe}}(?:${ZEe}|\\${xxr})?$`);

function ye(e, n) {
  return `${e}${_e}${n}`
}
var _e = ".linking-",
  iTo = new RegExp(`\\${_e}(\\d+)$`);
import {
  createHash as Te
} from "crypto";
import {
  lstat as Ce,
  mkdir as Z,
  open as ot,
  readdir as F,
  readFile as it,
  readlink as W,
  realpath as te,
  rename as st,
  stat as at,
  symlink as xe,
  writeFile as Le
} from "fs/promises";
import {
  homedir as ct
} from "os";
import {
  dirname as Ne,
  isAbsolute as V,
  join as T,
  relative as ee,
  resolve as be,
  sep as z
} from "path";
import {
  spawn as rt
} from "child_process";
var ke = 2000;

function Ee(e, {
  cwd: n,
  env: r,
  timeoutMs: s,
  maxStdoutBytes: d,
  maxStderrBytes: g
}) {
  return new Promise((y) => {
    let h = "",
      w = "",
      S = 0,
      k = 0,
      E = !1,
      R = !1,
      N, C, b = rt(e, [], {
        shell: !0,
        cwd: n,
        env: r,
        stdio: ["ignore", "pipe", "pipe"],
        detached: O() !== "windows",
        windowsHide: !0,
        ...Ea("plugin")
      }),
      ae = gt(async () => {
        if (!E && b.pid !== void 0) await Qf(b.pid, "SIGKILL")
      });

    function I(A) {
      if (E) return;
      if (E = !0, ae(), clearTimeout(ce), C) clearTimeout(C);
      b.stdout?.removeAllListeners("data"), b.stderr?.removeAllListeners("data"), b.stdout?.destroy(), b.stderr?.destroy(), y(A)
    }

    function le(A) {
      if (N) return;
      N = A, b.stdout?.removeAllListeners("data"), b.stderr?.removeAllListeners("data"), b.stdout?.pause(), b.stderr?.pause();
      let M = {
          kind: A,
          stdout: h,
          stderr: w
        },
        U = () => {
          if (E) return;
          if (R) {
            I(M);
            return
          }
          let j = () => I(M);
          if (b.once("exit", j), C = setTimeout((X) => X(), ke, j), typeof C === "object") C.unref()
        };
      if (b.pid === void 0) {
        I(M);
        return
      }
      Qf(b.pid, "SIGKILL").then(U, U)
    }
    let ce = setTimeout((A) => A("timed-out"), s, le);
    b.stdout?.setEncoding("utf8"), b.stderr?.setEncoding("utf8"), b.stdout?.on("data", (A) => {
      if (S += Buffer.byteLength(A), S > d) {
        le("stdout-overflow");
        return
      }
      h += A
    }), b.stderr?.on("data", (A) => {
      if (k >= g) return;
      k += Buffer.byteLength(A), w += A
    }), b.once("error", (A) => {
      I({
        kind: "spawn-error",
        message: A.message,
        stdout: h,
        stderr: w
      })
    });

    function ue(A, M) {
      if (N) return;
      if (typeof A === "number") I({
        kind: "exited",
        exitCode: A,
        stdout: h,
        stderr: w
      });
      else I({
        kind: "signaled",
        signal: M ?? "unknown",
        stdout: h,
        stderr: w
      })
    }
    b.once("exit", (A, M) => {
      if (R = !0, E || N) return;
      if (clearTimeout(ce), C = setTimeout((U, j, X) => U(j, X), ke, ue, A, M), typeof C === "object") C.unref()
    }), b.once("close", (A, M) => {
      ue(A, M)
    })
  })
}
var ut = 60,
  Pe = 65536,
  pt = 65536,
  Ae = 500,
  Re = 268435456,
  ve = 20000,
  mt = new Set(W4e);
async function ft(e) {
  let n = (e.timeout ?? ut) * 1000,
    r = cn(e.command, 200);
  t(`Plugin command source: running \`${r}\` (timeout ${n}ms)`);
  let s = await Ee(e.command, {
      cwd: ct(),
      env: hs(),
      timeoutMs: n,
      maxStdoutBytes: Pe,
      maxStderrBytes: pt
    }),
    d = cn(s.stderr.trim(), Ae),
    g = d ? ` (stderr: ${d})` : "";
  switch (s.kind) {
    case "exited":
      if (s.exitCode !== 0) throw new P(`Plugin source command \`${r}\` exited with code ${s.exitCode}` + (d ? `: ${d}` : " and no error output."), "plugin command source exited non-zero");
      break;
    case "timed-out":
      throw new P(`Plugin source command \`${r}\` did not finish within ${n/1000}s and was stopped.${g}`, "plugin command source timed out");
    case "stdout-overflow":
      throw new P(`Plugin source command \`${r}\` printed more than ${Pe/1024} KB and was stopped; it must print a single absolute path.`, "plugin command source exceeded the stdout cap");
    case "signaled":
      throw new P(`Plugin source command \`${r}\` was killed by ${s.signal} before it finished.${g}`, "plugin command source killed by a signal");
    case "spawn-error":
      throw new P(`Plugin source command \`${r}\` could not be started: ` + cn(s.message, Ae), "plugin command source failed to spawn")
  }
  let y = s.stdout.split(/\r?\n/).map((k) => k.trim()).filter((k) => k.length > 0);
  if (y.length === 0) throw new P(`Plugin source command \`${r}\` printed nothing; it must print the absolute path of the plugin directory.`, "plugin command source printed nothing");
  if (y.length > 1) throw new P(`Plugin source command \`${r}\` printed ${y.length} lines; it must print exactly one absolute path.`, "plugin command source printed multiple lines");
  let h = y[0];
  if (!V(h)) throw new P(`Plugin source command \`${r}\` printed \`${cn(h,200)}\`, which is not an absolute path.`, "plugin command source printed a relative path");
  if (O() === "windows" && uA(h) || qg(h)) throw new Rl(`Plugin source command \`${r}\` printed \`${cn(h,200)}\`, a network path (UNC or automount), which is not supported as a plugin directory.`, "plugin command source printed a network path");
  if (Bxe(h)) throw new Rl(`Plugin source command \`${r}\` printed \`${cn(h,200)}\`, which is reached through a link onto a network location (or one that cannot be trusted); that is not supported as a plugin directory.`, "plugin command source printed a path through a suspect link");
  let w;
  try {
    w = await te(h)
  } catch (k) {
    throw new P(`Plugin source command \`${r}\` printed \`${cn(h,200)}\`, but that path could not be resolved (${v(k)??"unknown error"}).`, "plugin command source path does not resolve")
  }
  if (qg(w) || O() === "windows" && uA(w)) throw new Rl(`Plugin source command \`${r}\` printed a path that resolves to a network location, which is not supported as a plugin directory.`, "plugin command source path resolves to a network path");
  let S;
  try {
    S = await F(w)
  } catch (k) {
    let E = v(k);
    throw new P(`Plugin source command \`${r}\` printed \`${cn(h,200)}\`, ` + (E === "ENOTDIR" ? "which is not a directory." : `which could not be read as a directory (${E??"unknown error"}).`), "plugin command source path is not a readable directory")
  }
  if (!S.some((k) => mt.has(k))) throw new P(`Plugin source command \`${r}\` printed \`${cn(h,200)}\`, but that directory has no plugin content (expected .claude-plugin/ or a commands/, skills/, agents/, hooks/, themes/, output-styles/, monitors/, workflows/, SKILL.md, .mcp.json, or .lsp.json at the top level). Nothing was installed.`, "plugin command source directory has no plugin content");
  return t(`Plugin command source: resolved plugin directory ${w}`), w
}
async function Me(e, n, r) {
  let s = [],
    d = 0,
    g = 0;
  async function y(h) {
    let w = await F(h, {
      withFileTypes: !0
    });
    for (let S of w) {
      if (g++, g > ve) throw new P(`Plugin directory has more than ${ve} entries; refusing to install it as a plugin.`, "plugin command source directory has too many files");
      let k = T(h, S.name),
        E = await cxe(h, S);
      if (E.isDirectory) {
        if (h === e && S.name === ".git") continue;
        await y(k)
      } else if (E.isFile) {
        let R = E.size ?? (await Ce(k)).size;
        if (r?.set(k, R), d += R, d > Re) throw new P(`Plugin directory is larger than ${Re/1048576} MB; refusing to install it as a plugin.`, "plugin command source directory too large");
        s.push(k)
      } else if (E.isSymbolicLink) n?.push(k)
    }
  }
  return await y(e), n?.sort(), s.sort()
}
async function ht(e) {
  let n = [],
    r = new Map,
    s = await Me(e, n, r),
    d = Te("sha256");
  for (let g of s) {
    let y = r.get(g) ?? 0;
    d.update(`f ${ee(e,g).split(z).join("/")}\x00${y}\x00`);
    let h = y;
    if (y > 0) {
      let w = await ot(g, "r");
      try {
        for await (let S of w.createReadStream({
          start: 0,
          end: y - 1
        })) d.update(S), h -= S.length
      } finally {
        await w.close()
      }
    }
    if (h > 0) d.update(Buffer.alloc(h))
  }
  for (let g of n) {
    let y = await W(g);
    d.update(`l ${ee(e,g).split(z).join("/")}\x00`), d.update(`${Buffer.byteLength(y)}\x00${y}`)
  }
  return d.digest("hex")
}
var kat = 'This plugin source uses mode "link", which is not supported on Windows yet; the marketplace can use mode "copy" instead.';

function r0(e) {
  return e.mode === "link" ? `${e.command}${zDt}` : e.command
}

function v0t(e) {
  return e.mode === "link" ? 'mode "link": its output directory is used in place (linked, not copied)' : 'mode "copy": its output directory is copied into the plugin cache'
}
class Rl extends P {}

function yt(e, n) {
  if (n && n.kind !== "none" && n.command === r0(e)) return;
  let r = cn(e.command, i8e) + (e.mode === "link" ? " [mode: link]" : ""),
    s = n?.pluginId !== void 0 ? cn(n.pluginId, 200) : void 0,
    d = s ?? "This plugin",
    g = s ?? "";
  if (n?.kind === "recorded" && n.command !== void 0) throw new Rl(`${d}'s marketplace changed the command that installs it, or how its output is used (now \`${r}\`), since it was accepted, so it was not run. Review and accept the new command: ${Fk("plugin update",g,{tail:"in a terminal (add `--scope` for a project/local install)",fallback:"an explicit plugin update in a terminal reviews it"})}.`, "plugin command source command changed since consent");
  if (n?.kind === "recorded") throw new Rl(`${d}'s marketplace entry now installs it by running a command on this machine (\`${r}\`) that has not been reviewed yet, so it was not run. Review and accept it: ${Fk("plugin update",g,{tail:"in a terminal (add `--scope` for a project/local install)",fallback:"an explicit plugin update in a terminal reviews it"})}.`, "plugin command source never consented for an installed plugin");
  if (n?.kind === "shown") throw new Rl(`${d}'s marketplace entry changed while it was being installed (it now declares \`${r}\`, not the command that was shown), so nothing was run. Re-run the install/update to review the current command.`, "plugin command source changed between display and run");
  throw new Rl(`${d} is installed by running a command on this machine (\`${r}\`) that has not been reviewed yet, so it was not run. Review and accept it from its /plugin details pane, or in a terminal: ${Fk("plugin install",g,{fallback:"an explicit plugin install reviews it"})}.`, "plugin command source without consent")
}
async function _t(e, n) {
  let r = (await F(e)).filter((g) => !k0t(g)).sort(),
    s = await Oe(e, r.map((g) => ({
      name: g,
      path: T(e, g)
    })));
  await Z(n, {
    recursive: !0
  });
  for (let {
      name: g,
      target: y,
      isDirectory: h
    }
    of s) await xe(y, T(n, g), h ? "dir" : "file");
  await Le(T(n, s6e), JSON.stringify({
    target: e
  }), {
    flag: "wx"
  });
  let d = Te("sha256");
  d.update(`${e}\x00`);
  for (let {
      name: g,
      target: y
    }
    of s) d.update(`${Buffer.byteLength(g)}\x00${g}`), d.update(`${Buffer.byteLength(y)}\x00${y}`);
  return d.digest("hex")
}
async function Oe(e, n) {
  let r = [];
  for (let {
      name: s,
      path: d
    }
    of n) {
    if (Uyn(d, Ne(d))) throw new Rl(`A top-level entry of the plugin directory (${cn(s,100)}) points at a network location or through a link that cannot be trusted; refusing to link it.`, "plugin command source entry traverses a suspect link");
    let g, y;
    try {
      g = await te(d), y = (await at(g)).isDirectory()
    } catch {
      throw new P(`A top-level entry of the plugin directory its command produced could not be resolved (${cn(s,80)}); refusing to link it.`, "plugin command source link entry unresolvable")
    }
    let h = ee(e, g);
    if (h === "" || h === ".." || h.startsWith(`..${z}`) || V(h)) throw new Rl(`A top-level entry of the plugin directory its command produced (${cn(s,80)}) points outside that directory; refusing to link it.`, "plugin command source link escapes producer directory");
    r.push({
      name: s,
      target: g,
      isDirectory: y
    })
  }
  return r
}
async function aTo(e, n) {
  let r = be(we(), e),
    s = be(we(), n),
    d = await ne(T(r, s6e)),
    g = r2n().parse(JSON.parse(d)).target;
  if (T9n(g)) throw new Rl("The link farm points at a producer reached through a link that cannot be trusted; refusing to relink it.", "plugin command source relink target traverses a suspect link");
  let y = await te(g);
  if (uA(y)) throw new Rl("The link farm points at a producer that now resolves to a network location; refusing to relink it.", "plugin command source relink target resolves to a network path");
  let h = [];
  for (let E of await F(r, {
      withFileTypes: !0
    })) {
    if (k0t(E.name)) continue;
    if ((await oBe(r, E))?.isSymbolicLink) h.push(E)
  }
  let w = [];
  for (let E of h) {
    let R;
    try {
      R = await W(T(r, E.name))
    } catch (N) {
      if (B(N)) continue;
      throw new Rl(`A link in the staged farm could not be read (${cn(l(N),120)}); refusing to relink it.`, "plugin command source relink entry unreadable")
    }
    if (G$(R)) throw new Rl("A link in the staged farm is not in canonical form; refusing to relink it.", "plugin command source relink entry not canonical");
    w.push(E)
  }
  let S = await Oe(y, w.map((E) => ({
    name: E.name,
    path: T(r, E.name)
  })));
  await Z(Ne(s), {
    recursive: !0
  });
  let k = ye(s, process.pid);
  await qa(k), await Z(k);
  try {
    for (let {
        name: E,
        target: R,
        isDirectory: N
      }
      of S) await xe(R, T(k, E), N ? "dir" : "file");
    await Le(T(k, s6e), d, {
      flag: "wx"
    }), await st(k, s)
  } catch (E) {
    await qa(k).catch(() => {});
    let R = v(E);
    if ((R === "ENOTEMPTY" || R === "EEXIST") && await djn(s) === "live" && !await Eat(s, y)) return;
    throw E
  }
}
async function Pxr(e, {
  keepGit: n
}) {
  for (let r of await F(e))
    if (k0t(r) && !(n && HC(r) === ".git")) await qa(T(e, r))
}

function k0t(e) {
  return qDt(e, wt)
}
var wt = new Set([...pct, ".git"]);
async function E0t(e, {
  unclassifiableIsFarm: n = !1
} = {}) {
  let r = await djn(e);
  return r === "live" || r === "unclassifiable" && n
}
async function djn(e) {
  try {
    r2n().parse(JSON.parse(await ne(T(e, s6e))))
  } catch (r) {
    if (v(r) !== void 0) return n(r)
  }
  try {
    for (let r of await F(e, {
        withFileTypes: !0
      })) {
      if (k0t(r.name)) continue;
      try {
        let s = await cxe(e, r);
        if (s.isSymbolicLink && V(s.linkTarget ?? await W(T(e, r.name)))) return "live"
      } catch (s) {
        if (v(s) === "ENOENT") continue;
        return n(s)
      }
    }
    return "not-live"
  } catch (r) {
    return n(r)
  }

  function n(r) {
    let s = v(r);
    return s === "ENOENT" || s === "ENOTDIR" ? "not-live" : "unclassifiable"
  }
}
var St = new Set([".ds_store", "thumbs.db", "desktop.ini", "icon\r"]);

function kt(e) {
  let n = HC(e);
  return St.has(n) || n.startsWith("._")
}

function Et(e) {
  return pct.has(e)
}
async function Eat(e, n) {
  let r = n.replace(/[\\/]+$/, "") + z;
  try {
    for (let s of await F(e, {
        withFileTypes: !0
      })) {
      if (Et(s.name)) continue;
      let d;
      try {
        let g = await cxe(e, s);
        if (g.isFile && (kt(s.name) || qDt(s.name, pct))) continue;
        if (!g.isSymbolicLink) return !0;
        d = g.linkTarget ?? await W(T(e, s.name))
      } catch (g) {
        if (v(g) === "ENOENT") continue;
        return !0
      }
      if (!V(d) || G$(d) || uA(d) || !d.startsWith(r)) return !0
    }
    return !1
  } catch (s) {
    let d = v(s);
    return d !== "ENOENT" && d !== "ENOTDIR"
  }
}
async function lTo(e) {
  try {
    return r2n().parse(JSON.parse(await ne(T(e, s6e)))).target
  } catch {
    return
  }
}
var bt = 16384;
async function ne(e) {
  let n = await Ce(e);
  if (!n.isFile() || n.size > bt) throw new Rl("The link-farm marker is not a small regular file; refusing to read it.", "plugin command source link marker not a small regular file");
  return it(e, "utf8")
}

function z9(e) {
  return typeof e === "object" && e.source === "command" ? e : void 0
}

function F3(e) {
  return z9(e)?.mode === "link"
}
async function cTo(e, n, r, s) {
  if (WT()) throw new Rl(HV, "plugin command source disabled by managed policy");
  if (e.mode === "link" && O() === "windows") throw new Rl(kat, "plugin command source link mode unsupported on windows");
  return yt(e, s), Or("plugin_command_install", async () => {
    let d = await ft(e);
    if (Km(d, we(), {
        foldCase: !0
      })) throw new Rl(`Plugin source command printed the working directory or one of its parents (${cn(d,300)}); refusing to use it as a plugin.`, "plugin command source printed cwd or an ancestor");
    if (AHe(d), e.mode === "link") return {
      contentSha256: await _t(d, n),
      producerDirectory: d
    };
    return await Me(d), await r(d, n), await Pxr(n, {
      keepGit: !1
    }), {
      contentSha256: await ht(n),
      producerDirectory: d
    }
  })
}
import {
  createHash as xt
} from "crypto";
import {
  homedir as At
} from "os";
var Rt = 1e4,
  vt = 1e6;

function Tt(e) {
  if (Yf(e)) return !0;
  return (e === void 0 || e === At()) && sT() && MBe()
}
async function Hsn(e) {
  if (e.isRepoResidentConfig && !Tt(e.repoResidentOrigin)) return {
    ok: !1,
    reason: "missing_trust"
  };
  let n = await Ve(e.command, [], {
    shell: !0,
    timeout: Rt,
    maxBuffer: vt,
    cwd: e.cwd,
    env: Ct(e),
    extendEnv: !1
  });
  if (n.code !== 0 || !n.stdout) return {
    ok: !1,
    reason: "exec_failed"
  };
  let r;
  try {
    r = J(n.stdout.trim())
  } catch {
    return {
      ok: !1,
      reason: "parse_failed"
    }
  }
  if (!G(r)) return {
    ok: !1,
    reason: "non_object"
  };
  let s = {};
  for (let [d, g] of Object.entries(r)) {
    if (typeof g !== "string") return {
      ok: !1,
      reason: "non_string_value"
    };
    s[d] = g
  }
  return {
    ok: !0,
    headers: s
  }
}

function Ct(e) {
  let n = {
    ...hs()
  };
  if (!e.scrubCredentialEnv) return {
    ...n,
    ...e.env
  };
  let r = [];
  for (let y of F$e()) {
    let h = process.env[y] ?? n[y];
    if (h !== void 0 && h !== "") r.push(h);
    delete n[y]
  }
  let s = process.env,
    d = {};
  for (let y of new Set([...Object.keys(n), ...Object.keys(s)])) d[y] = s[y] ?? n[y];
  for (let y of pAe(d).lostCredential) {
    let h = d[y];
    if (h !== void 0 && h !== "") r.push(h)
  }
  Object.assign(n, pAe(n).respelled), r.sort((y, h) => h.length - y.length);
  let g = {};
  for (let [y, h] of Object.entries(e.env ?? {})) g[y] = r.reduce((w, S) => w.split(S).join("REDACTED"), h);
  return {
    ...n,
    ...g
  }
}
var Ege = 268435456,
  Fsn = 5242880,
  Lt = 120000,
  Ixr = "Claude-Code-Plugin-Manager";
async function dTo(e, n = {}) {
  if (!x6n(e)) throw new P(`${A6n}: ${Bh(e)}`, "plugin archive URL policy rejected");
  let r = Bh(e);
  t(`Downloading plugin archive from ${r}`);
  let s = n.headers ?? {},
    d = {
      ...s,
      "User-Agent": Ixr
    },
    g = CN(e) ? IB.get : tl.get,
    y = performance.now(),
    h;
  try {
    let S = await g(e, {
      timeout: Lt,
      responseType: "arraybuffer",
      maxRedirects: 5,
      maxContentLength: Ege,
      headers: d,
      beforeRedirect: Mt(e, Oxr(s))
    });
    ER("plugin_archive", e, "success", performance.now() - y), h = Buffer.from(S.data)
  } catch (S) {
    ER("plugin_archive", e, "failure", performance.now() - y, OB(S));
    let k = Lxr(S);
    if (k) throw k;
    throw new P(Ot(S, e, r), "plugin archive download failed")
  }
  let w = xt("sha256").update(h).digest("hex");
  if (n.sha256 && n.sha256.toLowerCase() !== w) throw new P(`Plugin archive integrity check failed for ${r}: expected sha256 ${n.sha256.toLowerCase()}, got ${w}. The archive was not installed. Verify the sha256 in the marketplace entry, or that the URL serves the intended file.`, "plugin archive sha256 mismatch");
  return {
    data: h,
    contentSha256: w
  }
}

function Oxr(e) {
  return Object.keys(e ?? {}).filter((n) => n.toLowerCase() !== "user-agent")
}

function Fe(e, n, r = "plugin archive") {
  let s = new Set(n.map((d) => d.toLowerCase()));
  return (d) => {
    if (s.size === 0 || !d.headers) return;
    let g = eft(d);
    if (g && zsn(e, g)) return;
    let y = 0;
    for (let h of Object.keys(d.headers))
      if (s.has(h.toLowerCase())) delete d.headers[h], y++;
    if (y > 0) t(`Fetch of ${r} redirected to a different origin; dropped inherited marketplace headers`)
  }
}

function Mt(e, n) {
  let r = Fe(e, n);
  return (s) => {
    let d = eft(s);
    if (!x6n(d)) throw new P("Plugin archive redirected to a disallowed URL and was refused \u2014 " + `every hop must satisfy the archive URL policy (${A6n.replace(/^Archive URLs must /,"")}): ` + (d ? Bh(d) : "(unparseable redirect target)"), "plugin archive redirect policy rejected");
    r(s)
  }
}

function uTo(e, n) {
  let r = Fe(e, n, "marketplace catalog");
  return (s) => {
    let d = eft(s);
    if (!(d !== "" && (zsn(e, d) || d.toLowerCase().startsWith("https:") && !yY(Wt(d))))) throw new P("Marketplace catalog redirected to a disallowed URL and was refused \u2014 " + "a server-chosen cross-origin redirect must use https:// and must not point at a loopback, link-local, or cloud-metadata host (only a hop that stays on the origin you started from is exempt): " + (d ? Bh(d) : "(unparseable redirect target)"), "marketplace catalog redirect policy rejected");
    r(s)
  }
}

function Ot(e, n, r) {
  let s = (d) => d.replaceAll(n, () => r);
  if (fu(e)) {
    if (e.code === "ECONNREFUSED" || e.code === "ENOTFOUND") return `Could not connect to ${r}. Check your network connection and that the archive URL is correct.

Technical details: ${s(e.message)}`;
    if (e.code === "ETIMEDOUT" || e.code === "ECONNABORTED") return `Timed out downloading plugin archive from ${r}. The server may be slow or unreachable.

Technical details: ${s(e.message)}`;
    if (e.response) {
      let d = e.response.status;
      return `HTTP ${d} while downloading plugin archive from ${r}.${d===401||d===403?" The server rejected the request \u2014 if it requires authentication, add `headers` to the marketplace source (they are forwarded to plugin archives on the same origin) or configure your proxy.":""}

Technical details: ${s(e.message)}`
    }
  }
  return `Failed to download plugin archive from ${r}: ${s(l(e))}`
}

function Tge(e) {
  return typeof e.headersHelper === "string" && e.headersHelper !== ""
}
var $sn = {
  unshown: "entry_helper_unshown",
  command: "entry_helper_changed",
  archive_url: "entry_archive_url_changed"
};

function T0t(e, n) {
  let {
    entry: r
  } = e;
  return Tge(r) && r.headersHelper !== void 0 && (!e.requireInlinedManifest || r.strict === !1) ? {
    command: r.headersHelper,
    archiveUrl: n
  } : null
}

function Usn(e, n) {
  if (e === void 0 || e === null) return n === null ? null : "unshown";
  if (n === null) return null;
  if (e.command !== n.command) return "command";
  if (De(n.archiveUrl) !== De(e.archiveUrl)) return "archive_url";
  return null
}

function De(e) {
  let n = v1t(e);
  return n === null ? e : Mee(n)
}

function C0t(e, n = "lockdown") {
  let r = Pt(e);
  if (n === "remote_policy_unconsented") return `"${r}" fetches its archive through a headersHelper command that was not run: ${Ysn}. The plugin was not installed or updated.`;
  return `"${r}" fetches its archive through a marketplace-declared headersHelper command, and your organization's managed settings disable marketplace-declared commands (disableCommandPluginSources / allowManagedHooksOnly). The plugin was not installed or updated and the command was not run; ask your admin to allow it or to declare the marketplace in managed settings.`
}
var Ft = {
  entry_helper_unshown: "plugin entry helper consent mismatch at install: entry_helper_unshown",
  entry_helper_changed: "plugin entry helper consent mismatch at install: entry_helper_changed",
  entry_archive_url_changed: "plugin entry helper consent mismatch at install: entry_archive_url_changed",
  entry_helper_deferred: "plugin headers helper deferred to explicit install",
  entry_helper_disabled_by_policy: "plugin entry helper disabled by managed policy",
  entry_helper_unconfirmed: "plugin entry helper unconfirmed at install (nothing was announced)",
  entry_helper_not_inlined: "plugin entry headersHelper requires strict:false (catalog authoring error)",
  entry_helper_remote_policy_unconsented: "plugin entry helper declared by remote managed settings not yet verified and approved for the session"
};

function Ht(e) {
  return Mxr[e] === "sad"
}
var Mxr = {
  entry_helper_unshown: "sad",
  entry_helper_changed: "sad",
  entry_archive_url_changed: "sad",
  entry_helper_deferred: "sad",
  entry_helper_disabled_by_policy: "sad",
  entry_helper_unconfirmed: "sad",
  entry_helper_remote_policy_unconsented: "sad",
  entry_helper_not_inlined: "bad"
};

function R0t(e) {
  if (e instanceof $3) return {
    code: e.failureCode,
    kind: Ht(e.failureCode) ? "sad" : "bad"
  };
  return {
    code: "command_source_refused",
    kind: "sad"
  }
}
class $3 extends Rl {
  failureCode;
  constructor(e, n) {
    super(e, Ft[n]);
    this.failureCode = n
  }
}

function Bsn(e, n, r) {
  let s = Pt(n),
    d = r === "update" ? "Review the command now shown, then update again." : "Reopen its details in /plugin to review it, then install again.";
  if (e === "unshown") return r === "update" ? `This update would run a headersHelper command for "${s}" that was not shown on this pane. ${d}` : `This install would run a headersHelper command for "${s}" that was not shown to you first. Retry the same install to review the command before it runs.`;
  return e === "command" ? `The headersHelper command for "${s}" changed since it was shown. ${d}` : `The archive URL for "${s}" changed since its headersHelper command was shown. ${d}`
}

function eTe(e) {
  let n = e.trustedSettingsEntryAuth !== void 0 && e.trustedSettingsEntryAuth.origin !== "settings" && e.marketplaceSource?.source !== "settings" ? void 0 : e.trustedSettingsEntryAuth;
  if (n !== void 0) {
    let r = n.origin === "settings";
    if (!zt(n.archiveUrl, e.archiveUrl)) return {
      entry: {},
      operatorAuthored: r,
      requireInlinedManifest: !1
    };
    if (n.headersHelper !== void 0 && n.operatorTier === "policySettings" && !G4e()) throw new $3(`This plugin's headersHelper was not run: ${Ysn}.`, "entry_helper_remote_policy_unconsented");
    return {
      entry: {
        headers: n.headers,
        headersHelper: n.origin === "addDir" ? void 0 : n.headersHelper
      },
      operatorAuthored: r,
      requireInlinedManifest: !1
    }
  }
  if (e.marketplaceSource !== void 0 && e.marketplaceSource.source !== "settings") return {
    entry: e.entry,
    operatorAuthored: !1,
    requireInlinedManifest: !0
  };
  return {
    entry: {
      headers: e.entry.headers
    },
    operatorAuthored: !1,
    requireInlinedManifest: !0
  }
}
async function jsn(e, n) {
  if (e?.source !== "url") return {};
  let r = n.trustedDeclaration,
    s = `marketplace ${Pt(n.marketplaceName??Bh(e.url))}`,
    d = (h, w) => Wsn(h, `${s} (${w})`, {
      operatorAuthored: r?.operatorAuthored === !0
    }),
    g = d(r ? {
      ...r.headers
    } : {
      ...e.headers
    }, r ? r.operatorAuthored ? "operator declaration" : "repo-tier declaration" : "state copy");
  if (r?.headersHelper === void 0) return g;
  if (!/^https:\/\//i.test(e.url)) return t(`${s}: headersHelper not run \u2014 marketplace URL is not https`, {
    level: "warn"
  }), g;
  if (r.authoredBy === "policySettings" && !G4e()) throw p("plugin_headers_helper", "remote_policy_unconsented"), new Rl(`${s}: headersHelper not run \u2014 ${Ysn}. The marketplace was not fetched.`, "marketplace headersHelper from remote managed settings not yet verified and approved for the session");
  if (WT() && r.authoredBy !== "policySettings") throw new Rl(`${s}: your organization's managed settings disable marketplace-declared commands (disableCommandPluginSources / allowManagedHooksOnly), and this marketplace's headersHelper is not declared in managed settings. The marketplace was not fetched and the command was not run; ask your admin to allow it or to declare the marketplace in managed settings.`, "marketplace headersHelper disabled by managed policy");
  if (!q()) return t(`${s}: headersHelper not run \u2014 disabled by the plugin command kill switch`, {
    level: "warn"
  }), g;
  let y = await Ut(r.headersHelper, e.url, n.marketplaceName, r.operatorAuthored);
  return {
    ...g,
    ...d(y, "helper output")
  }
}
var $t = 60000;
async function Ut(e, n, r, s) {
  let d = `${e}\x00${n}\x00${r??""}\x00${s?"operator":"repo"}`,
    g = Date.now(),
    {
      marketplaceHelperMemo: y
    } = dt(),
    h = y.get(d);
  if (h && h.expiresAt > g) return h.headers;
  let w = Gt(e, n, r, s);
  y.set(d, {
    expiresAt: g + $t,
    headers: w
  });
  try {
    return await w
  } catch (S) {
    throw y.delete(d), S
  }
}
async function Gt(e, n, r, s) {
  let d = await Hsn({
    command: e,
    scrubCredentialEnv: !s,
    isRepoResidentConfig: !1,
    cwd: Se(),
    env: {
      CLAUDE_CODE_MARKETPLACE_URL: n,
      ...r !== void 0 && {
        CLAUDE_CODE_MARKETPLACE_NAME: r
      }
    }
  });
  if (!d.ok) throw m("plugin_headers_helper", d.reason), new P(`marketplace headersHelper failed (${d.reason})`, "marketplace headers helper failed");
  return _("plugin_headers_helper"), d.headers
}
async function Bt(e, n) {
  let r = (g) => Wsn(g, `plugin ${Pt(n.pluginName)}`, {
      operatorAuthored: n.operatorAuthored === !0
    }),
    s = r(e.headers ?? {});
  if (!Tge(e) || e.headersHelper === void 0) return s;
  He(e, {
    ...n,
    disabledByPolicy: Rge(n.marketplaceSource, n.marketplaceName)
  });
  let d = await Hsn({
    command: e.headersHelper,
    scrubCredentialEnv: !n.operatorAuthored,
    cwd: Se(),
    isRepoResidentConfig: !1,
    env: {
      CLAUDE_CODE_PLUGIN_NAME: n.pluginName,
      CLAUDE_CODE_PLUGIN_ARCHIVE_URL: n.archiveUrl
    }
  });
  if (!d.ok) throw m("plugin_headers_helper", d.reason), new P(`plugin headersHelper for "${re(n.pluginName)}" failed (${d.reason})`, "plugin headers helper failed");
  return _("plugin_headers_helper"), {
    ...s,
    ...r(d.headers)
  }
}
var Kt = new Set(["host", "cookie", "forwarded", "x-real-ip", "x-client-ip", "true-client-ip", "client-ip", "cf-connecting-ip", "fastly-client-ip", "x-originating-ip", "x-remote-ip", "x-remote-addr", "x-cluster-client-ip", "connection", "upgrade", "transfer-encoding", "content-length", "te", "trailer", "expect", "via"]),
  jt = ["x-forwarded-", "x-original-", "proxy-"],
  Yt = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;

function Dxr(e) {
  let n = e.toLowerCase().replaceAll("_", "-");
  return Kt.has(n) || jt.some((r) => n.startsWith(r))
}

function Wsn(e, n, {
  operatorAuthored: r = !1
} = {}) {
  let s = {};
  for (let [d, g] of Object.entries(e)) {
    if (!Yt.test(d) || /[\r\n\0]/.test(g)) {
      t(`Dropping header "${Pt(d)}" for ${n}: malformed name or value`, {
        level: "warn"
      });
      continue
    }
    if (!r && Dxr(d)) {
      t(`Dropping header "${Pt(d)}" for ${n}: request-routing/identity headers are not accepted from non-operator sources`, {
        level: "warn"
      });
      continue
    }
    s[d] = g
  }
  return s
}

function re(e) {
  return Pt(e)
}

function He(e, n) {
  if (n.disabledByPolicy !== null) throw new $3(C0t(n.pluginName, n.disabledByPolicy), n.disabledByPolicy === "remote_policy_unconsented" ? "entry_helper_remote_policy_unconsented" : "entry_helper_disabled_by_policy");
  if (n.requireInlinedManifest !== !1 && e.strict !== !1) throw new $3(`Plugin "${re(n.pluginName)}" declares a headersHelper but is not strict:false \u2014 an entry with headersHelper must inline its manifest so its capabilities can be reviewed before the command runs.`, "entry_helper_not_inlined");
  if (!n.runEntryHelper) throw new $3(`Plugin "${re(n.pluginName)}" fetches its archive through a headersHelper, ` + "which only runs when you install or update it from its own details view \u2014 open this plugin in /plugin (or run `claude plugin install`/`update`), where the command is shown first.", "entry_helper_deferred")
}
async function Tat(e) {
  if (typeof e.pluginSource !== "object" || e.pluginSource.source !== "archive") return;
  let n = e.pluginSource.url,
    {
      entry: r,
      operatorAuthored: s,
      requireInlinedManifest: d
    } = eTe({
      entry: e.entry,
      archiveUrl: n,
      marketplaceSource: e.marketplaceSource,
      trustedSettingsEntryAuth: e.trustedSettingsEntryAuth
    }),
    g = e.marketplaceSource?.source === "url" ? e.marketplaceSource.url : void 0,
    y = Rge(e.marketplaceSource, e.marketplaceName);
  if (Tge(r)) He(r, {
    pluginName: e.pluginName,
    runEntryHelper: e.runEntryHelper,
    requireInlinedManifest: d,
    operatorAuthored: s,
    disabledByPolicy: y
  });
  let h = g !== void 0 && zsn(g, n) ? await jsn(e.marketplaceSource, {
      marketplaceName: e.marketplaceName,
      trustedDeclaration: e.trustedMarketplaceAuth
    }) : {},
    w = await Bt(r, {
      pluginName: e.pluginName,
      archiveUrl: n,
      runEntryHelper: e.runEntryHelper,
      requireInlinedManifest: d,
      operatorAuthored: s,
      marketplaceSource: e.marketplaceSource,
      marketplaceName: e.marketplaceName
    }),
    S = {
      ...h,
      ...w
    };
  if (Object.keys(S).length === 0) return;
  return {
    url: n,
    headers: S
  }
}

function Cge(e, n) {
  let r = o0(e);
  return r ? n[r]?.source : void 0
}

function o0(e) {
  let n = e.split("@");
  return n.length === 2 && n[1] ? n[1] : void 0
}

function zt(e, n) {
  return Mee(e) === Mee(n)
}

function zsn(e, n) {
  try {
    let r = new URL(e).origin,
      s = new URL(n).origin;
    return r !== "null" && r === s
  } catch {
    return !1
  }
}

function Wt(e) {
  try {
    return new URL(e).hostname
  } catch {
    return ""
  }
}

function Lxr(e) {
  let n = e;
  for (let r = 0; r < 5 && n instanceof Error; r++) {
    if (n instanceof P) return n;
    n = n.cause
  }
  return
}

function tTe(e) {
  let n = e.sessionRefsGate;
  if (n.ccrSessionID() === void 0) {
    let r = a.CLAUDE_CODE_SESSION_ID;
    if (r && pr(r) !== r) n.latchCcrSessionID(r)
  }
  return n.ccrSessionID()
}

function Vt(e) {
  return tTe(e) !== void 0
}

function fz(e) {
  let n = e.sessionRefsGate.syncEnabled();
  if (n !== void 0) return n;
  return e.sessionRefsGate.latchSyncEnabled(!!a.CLAUDE_CODE_SYNC_SESSION_REFS && Vt(e))
}
async function Xt(e) {
  let n = (s, d) => (t(`[plugins-scope] ${s}: ${d}`), s);
  if (!z0("allow_plugin_skill_search")) return n("send", "policy refuses the plugin routes");
  if (!zn()) return n("send", "not a first-party provider session");
  if (It()) return n("send", "essential traffic only");
  if (Fl()) return n("send", "CCR session token");
  try {
    await $i({
      credentials: e
    })
  } catch (s) {
    t(`[plugins-scope] pre-check token freshen failed: ${l(s)}`)
  }
  let r = un();
  if (!r?.accessToken) return n("send", "no claude.ai token");
  if (r.scopes?.includes(o9e)) return n("send", "token carries user:plugins");
  if (!r.refreshToken) return n("send", "host-injected token, scopes unknown here");
  if (r.clientId) return n("send", "third-party OAuth client");
  return n("skip_no_scope", "login token lacks user:plugins until its next refresh")
}
var qt = 1e4;
async function kge(e, n, r = qt) {
  if (e?.aborted) return "send";
  let s = Xt(n).catch((g) => (t(`[plugins-scope] unexpected gate error: ${l(g)}`), "send")),
    d;
  if (!e) d = await nt(s, r);
  else {
    let g, y = new Promise((h) => {
      g = () => h(void 0), e.addEventListener("abort", g, {
        once: !0
      })
    });
    try {
      d = await nt(Promise.race([s, y]), r)
    } finally {
      e.removeEventListener("abort", g)
    }
  }
  return d ?? "send"
}

function ujn(e, n) {
  if (!n.ok) return n.reason === "no-auth" ? {
    success: !1,
    error: n.detail,
    kind: "no_auth"
  } : {
    success: !1,
    error: n.reason,
    kind: "gated"
  };
  let r = Vsn().safeParse(n.data);
  if (r.success) {
    let s = r.data.error.type ?? "error_envelope_no_type";
    return K("warn", e === "skills" ? "skills_sync_list_error" : "plugins_sync_list_error", {
      serverError: s,
      status: n.status
    }), {
      success: !1,
      error: s,
      kind: "server_error",
      status: n.status
    }
  }
  return K("warn", e === "skills" ? "skills_sync_list_malformed" : "plugins_sync_list_malformed"), {
    success: !1,
    error: `malformed list-${e} response`,
    kind: "malformed"
  }
}

function pjn(e) {
  let {
    kind: n,
    message: r
  } = Xs(e), s = yQ(v(e));
  return {
    success: !1,
    error: r,
    kind: n,
    ...s !== void 0 && {
      errno: s
    }
  }
}

function Oee(e) {
  return e.kind === "server_error" && e.status === 404 && e.error === "not_found_error"
}

function Nxr(e) {
  return e.status === 403 || e.kind === "no_scope" || Oee(e)
}

function Gsn(e) {
  return {
    kind: c(e.kind),
    ...e.status !== void 0 && {
      status: e.status
    },
    ...e.errno !== void 0 && {
      errno: e.errno
    }
  }
}
var Vsn = f(() => lt({
  error: lt({
    type: de().optional(),
    message: de().nullish().catch(void 0)
  })
}));

function qsn(e) {
  try {
    let n = Vsn().safeParse(J(e.toString("utf8", 0, 2048)));
    if (n.success) return n.data.error.type ?? "error_envelope_no_type"
  } catch {}
  return "non_json_body"
}
import {
  createWriteStream as Qt
} from "fs";
import {
  open as en,
  rm as Ge,
  writeFile as tn
} from "fs/promises";
import {
  Transform as nn
} from "stream";
import {
  pipeline as rn
} from "stream/promises";

function $e(e, {
  components: n = !1
} = {}) {
  let r = Vln(e.installation_preference);
  return {
    pluginId: e.id,
    name: e.name,
    description: e.description ?? "",
    version: e.version ?? null,
    updatedAt: e.updated_at ?? null,
    ...typeof e.marketplace_name === "string" && e.marketplace_name && {
      marketplaceName: e.marketplace_name
    },
    ...r && {
      installationPreference: r
    },
    ...typeof e.presents_as === "string" && e.presents_as && {
      presentsAs: e.presents_as
    },
    ...n && Array.isArray(e.components) && {
      components: e.components.flatMap((s) => {
        let d = Zt().safeParse(s);
        if (!d.success) return [];
        let {
          type: g,
          name: y,
          description: h
        } = d.data;
        return [{
          type: g,
          name: y,
          ...h != null && {
            description: h
          }
        }]
      })
    }
  }
}
var Zt = f(() => u({
  type: o(),
  name: o(),
  description: o().nullish()
}));

function Ue(e) {
  return e.enabled !== !1
}
var on = 1e4,
  se = 60000,
  je = 500,
  Be = 100,
  oe = 20,
  ie = Ege;

function sn() {
  return a.CLAUDE_CODE_SYNC_PLUGINS_DOWNLOAD_STALL_MS ?? se
}
var an = "/api/oauth/organizations/:orgUUID/plugins/list-plugins?enabled_only=true&compact=true";
async function ln(e) {
  let n = await e();
  if (n.ok) return n;
  return await Q(je), e()
}
async function A0t(e = {}) {
  if (await kge(e.signal, e.credentials) === "skip_no_scope") return {
    success: !1,
    error: "claude.ai login lacks the user:plugins scope in this session",
    kind: "no_scope"
  };
  let r = await Ke(e);
  if (r.success || r.status === 403) return r;
  await Q(je);
  let s = await Ke(e);
  return !s.success && Oee(s) && !Oee(r) ? {
    success: !1,
    error: s.error,
    kind: s.kind
  } : s
}
async function Ke(e) {
  let n = [];
  try {
    for (let r = 0; r < oe; r++) {
      let s = r * Be,
        d = await Dt.get(`${an}${e.componentDetails===!0?"&include_component_details=true":""}&limit=${Be}&offset=${s}`, {
          auth: "teleport-org",
          isBackground: e.isBackground,
          timeout: on,
          credentials: e.credentials
        });
      if (!d.ok || !Array.isArray(d.data?.plugins)) {
        let g = ujn("plugins", d);
        return r > 0 && Oee(g) ? {
          success: !1,
          error: g.error,
          kind: g.kind
        } : g
      }
      for (let g of d.data.plugins)
        if (Ue(g)) n.push($e(g, {
          components: e.componentDetails === !0
        }));
      if (d.data.has_more !== !0) return {
        success: !0,
        plugins: n
      }
    }
    return K("warn", "plugins_sync_list_page_cap", {
      pages: oe,
      collected: n.length
    }), {
      success: !1,
      error: `list-plugins page cap (${oe}) exceeded`,
      kind: "page_cap"
    }
  } catch (r) {
    return pjn(r)
  }
}

function Hxr(e, n) {
  let r = [];
  if (n) r.push(`version=${encodeURIComponent(n)}`);
  if (a.CLAUDE_CODE_CCR_SURFACE === "tag") r.push("included_default_marketplaces=claude-tag-plugins");
  let s = r.length > 0 ? `?${r.join("&")}` : "";
  return `/api/oauth/organizations/:orgUUID/plugins/${encodeURIComponent(e)}/download${s}`
}
async function fjn(e, n, r, s = {}) {
  return ln(() => dn(e, n, r, s))
}
async function dn(e, n, r, s) {
  let d = Hxr(e, r);
  if (a.CLAUDE_CODE_SYNC_PLUGINS_BUFFERED_DOWNLOAD) return pn(d, n, s);
  let g = 0,
    y = !1;
  try {
    let E = function() {
        y = !0, k.destroy(Error("plugin download stream stalled"))
      },
      h = await Dt.get(d, {
        auth: "teleport-org",
        isBackground: s.isBackground,
        timeout: se,
        responseType: "stream",
        credentials: s.credentials
      });
    if (!h.ok || !h.data) {
      let b = h.ok ? "empty_body" : h.reason;
      return K("warn", "plugins_sync_download_not_ok", {
        reason: b
      }), {
        ok: !1,
        reason: b
      }
    }
    let w = sn(),
      S, k = new nn({
        transform(b, ae, I) {
          if (clearTimeout(S), S = setTimeout(E, w), g += b.length, g > ie) I(Error("plugin zip exceeds download byte cap"));
          else I(null, b)
        },
        flush(b) {
          clearTimeout(S), b()
        }
      });
    S = setTimeout(E, w);
    try {
      await rn(h.data, k, Qt(n))
    } finally {
      clearTimeout(S)
    }
    let R = Buffer.alloc(2048),
      N = await en(n, "r"),
      C;
    try {
      C = (await N.read(R, 0, R.length, 0)).bytesRead
    } finally {
      await N.close()
    }
    if (C < 2 || R[0] !== 80 || R[1] !== 75) {
      await Ge(n, {
        force: !0
      });
      let b = C === 0 ? "empty_body" : qsn(R.subarray(0, C));
      return K("warn", "plugins_sync_download_not_zip", {
        serverError: b,
        bodyLen: g
      }), {
        ok: !1,
        reason: b
      }
    }
    return {
      ok: !0
    }
  } catch (h) {
    await Ge(n, {
      force: !0
    }).catch(() => {});
    let w = h?.response?.data;
    if (w !== null && typeof w === "object" && "destroy" in w && typeof w.destroy === "function") w.destroy();
    let S = h !== null && typeof h === "object" && "code" in h ? h.code : void 0,
      k = y ? "timeout" : g > ie ? "too_large" : S === "ECONNRESET" || S === "EPIPE" || S === "ETIMEDOUT" ? "network" : Xs(h).kind;
    return K("warn", "plugins_sync_download_exception", {
      kind: k
    }), {
      ok: !1,
      reason: k
    }
  }
}
async function pn(e, n, r) {
  try {
    let s = await Dt.get(e, {
      auth: "teleport-org",
      isBackground: r.isBackground,
      timeout: se,
      responseType: "arraybuffer",
      maxContentLength: ie,
      credentials: r.credentials
    });
    if (!s.ok || !s.data) {
      let g = s.ok ? "empty_body" : s.reason;
      return K("warn", "plugins_sync_download_not_ok", {
        reason: g
      }), {
        ok: !1,
        reason: g
      }
    }
    let d = Buffer.from(s.data);
    if (d.length < 2 || d[0] !== 80 || d[1] !== 75) {
      let g = d.length === 0 ? "empty_body" : qsn(d);
      return K("warn", "plugins_sync_download_not_zip", {
        serverError: g,
        bodyLen: d.length
      }), {
        ok: !1,
        reason: g
      }
    }
    return await tn(n, d), {
      ok: !0
    }
  } catch (s) {
    let {
      kind: d
    } = Xs(s);
    return K("warn", "plugins_sync_download_exception", {
      kind: d
    }), {
      ok: !1,
      reason: d
    }
  }
}
var mn = f(() => {
    let e = de().nullish().transform((s) => s ?? ""),
      n = lt({
        id: e,
        name: e,
        description: e,
        version: e,
        directory: e,
        marketplace_name: de().nullish().catch(void 0),
        is_official: ho().nullish().catch(void 0)
      }).transform(({
        marketplace_name: s,
        is_official: d,
        ...g
      }) => ({
        ...g,
        ...s && {
          marketplaceName: s
        },
        ...d === !0 && {
          isOfficial: !0
        }
      })),
      r = Xn(n).nullish().transform((s) => s ?? []);
    return lt({
      skills: r,
      plugins: r
    }).strict()
  }),
  gn = 30000,
  fn = 500;
class ze {
  inflight = null;
  featureEventReported = new Set;
  fetch() {
    if (!this.inflight) {
      let e = hn().finally(() => {
        if (this.inflight === e) this.inflight = null
      });
      this.inflight = e
    }
    return this.inflight
  }
  discardInflight() {
    this.inflight = null
  }
  async listEntries(e) {
    let n = e === "skills" ? "sync_session_refs_skills" : "sync_session_refs_plugins",
      r = !this.featureEventReported.has(e);
    this.featureEventReported.add(e);
    let s = await this.fetch();
    if (!s.ok) {
      if (i(e === "skills" ? "tengu_skills_sync_manifest_failed" : "tengu_plugins_sync_manifest_failed", {
          unavailable: s.reason === "unavailable"
        }), r) m(n, s.reason);
      return {
        success: !1,
        error: `manifest ${s.reason}`,
        kind: "manifest"
      }
    }
    if (r) _(n);
    return {
      success: !0,
      entries: s[e]
    }
  }
}
var nTe = new Nt(() => new ze);
async function hn() {
  let e = await Ye();
  if (e.ok || e.reason === "no_auth" || e.reason === "gated") return e;
  return await Q(fn), Ye()
}
async function Ye() {
  try {
    let e = await Dt.get("/worker/skill-manifest", {
      host: "ccr-session",
      auth: "session-jwt",
      headers: {
        "anthropic-version": "2023-06-01"
      },
      timeout: gn,
      validateStatus: () => !0
    });
    if (!e.ok) {
      if (e.reason === "no-auth") return K("warn", "session_refs_manifest_no_auth"), {
        ok: !1,
        reason: "no_auth"
      };
      return K("warn", "session_refs_manifest_gated", {
        reason: e.reason
      }), {
        ok: !1,
        reason: "gated"
      }
    }
    if (e.status === 503) return K("warn", "session_refs_manifest_unavailable"), {
      ok: !1,
      reason: "unavailable"
    };
    if (e.status >= 300) return K("warn", "session_refs_manifest_http_error", {
      status: e.status
    }), {
      ok: !1,
      reason: "http_error"
    };
    let n = mn().safeParse(e.data);
    if (!n.success) return K("warn", "session_refs_manifest_malformed"), {
      ok: !1,
      reason: "malformed"
    };
    return {
      ok: !0,
      skills: n.data.skills.filter((r) => r.id),
      plugins: n.data.plugins.filter((r) => r.id)
    }
  } catch (e) {
    let {
      kind: n
    } = Xs(e);
    return K("warn", "session_refs_manifest_exception", {
      kind: n
    }), {
      ok: !1,
      reason: "transport"
    }
  }
}

function pTo(e) {
  return {
    skillId: e.id,
    name: e.name,
    description: e.description ?? "",
    source: e.source ?? "custom",
    updatedAt: e.updated_at ?? null,
    ...typeof e.backing_plugin_id === "string" && Cle(e.backing_plugin_id) && {
      backingPluginId: e.backing_plugin_id
    }
  }
}

function fTo(e) {
  return e.enabled !== !1
}
var Cat = "collision-loser";
export {
  ejn,
  tjn,
  h0t,
  njn,
  rjn,
  Msn,
  ojn,
  y0t,
  nTo,
  _0t,
  sjn,
  Axr,
  wat,
  rTo,
  Dsn,
  Lsn,
  _Ne,
  oTo,
  kge,
  b0t,
  n0,
  S0t,
  ijn,
  ajn,
  W4e,
  Nsn,
  w0t,
  ljn,
  sTo,
  vat,
  bNe,
  z4e,
  ZEe,
  xxr,
  cjn,
  iTo,
  kat,
  r0,
  v0t,
  Rl,
  aTo,
  Pxr,
  k0t,
  E0t,
  djn,
  Eat,
  lTo,
  z9,
  F3,
  cTo,
  Hsn,
  Ege,
  Fsn,
  Ixr,
  dTo,
  Oxr,
  uTo,
  Tge,
  $sn,
  T0t,
  Usn,
  C0t,
  Mxr,
  R0t,
  $3,
  Bsn,
  eTe,
  jsn,
  Dxr,
  Wsn,
  Tat,
  Cge,
  o0,
  zsn,
  Lxr,
  ujn,
  pjn,
  Oee,
  Nxr,
  Gsn,
  Vsn,
  qsn,
  A0t,
  Hxr,
  fjn,
  tTe,
  fz,
  nTe,
  pTo,
  fTo,
  Cat
};
