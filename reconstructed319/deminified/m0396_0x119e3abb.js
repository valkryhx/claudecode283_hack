// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Pe, rs } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { Ee, bP, v$e, Gl } from "B:/~BUN/root/chunk-game8aqv.js";
import { R, d, k, K } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { we } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { CG, MT, Cl, jb, q5, Noa, DT, $Io, q$r, M$e, Vae, Wp } from "B:/~BUN/root/chunk-h4acfc9y.js";
import { fr } from "B:/~BUN/root/chunk-1g25msn4.js";
import { vt, t, ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Ue } from "B:/~BUN/root/chunk-eev762xg.js";
import { OVn, Lw } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { g, m, c, ao } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { Cwe, owt, yl } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { St, a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { Mqe as message, ME, au } from "B:/~BUN/root/chunk-gq1er5y2.js";
import { lt } from "B:/~BUN/root/chunk-3mm90xb6.js";
import { Ae } from "B:/~BUN/root/chunk-eds8xkh8.js";
import { Q_, qGe, Zgo, oHn, xht, XNt, Kc, ML, nFt, YCr, XCr, JGe, Nht, Rse, BCe } from "B:/~BUN/root/chunk-esnm3r09.js";
import { jJ, NAe, Cte, GBt, FRo, HRo, Rg } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { Et, Qe } from "B:/~BUN/root/chunk-2f1svh63.js";
import { sU, sO, sht } from "B:/~BUN/root/chunk-wss0tnsx.js";
import { Ab, v, Xh } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { r5, RAe, xAe } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { hd } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { rc } from "B:/~BUN/root/chunk-b91sxvrb.js";
import { X4 } from "B:/~BUN/root/chunk-wthaftk0.js";
import { es } from "B:/~BUN/root/chunk-0s9zh2h6.js";
import { vF, j9 } from "B:/~BUN/root/chunk-fkz77yzp.js";
import { z6 } from "B:/~BUN/root/chunk-4110my9j.js";
import { sX } from "B:/~BUN/root/chunk-dx2wvwvf.js";
import { D } from "B:/~BUN/root/chunk-8mqsat26.js";
import { kd } from "B:/~BUN/root/chunk-jbjsy1k0.js";
import { L } from "B:/~BUN/root/chunk-5ha2avah.js";
import { createHash as st } from "crypto";
function j7t() {
  if (St()) return !1;
  if (Qft()) return !1;
  return B();
}
function B() {
  return v("tengu_plugin_command_source_refresh", !0);
}
var Re = 30000;
function Qft() {
  let e = Kc(),
    n = Vae(sO());
  if (x() === "windows" ? Noa(e) : Cl(e)) return !0;
  let provenLocalRoots = Ae().provenLocalRoots,
    i = provenLocalRoots.get(n);
  if (i === void 0 || !sU(i, Re)) {
    if (q5(n, {
      allowLocalWsl: !0
    })) return provenLocalRoots.delete(n), !0;
    provenLocalRoots.set(n, Date.now());
  }
  if (Wp(Ue(), n)) return !1;
  return Ce().some(item => Wp(n, item, {
    foldCase: !0
  }) || Wp(item, n, {
    foldCase: !0
  }));
}
function Ce() {
  return L([Ee(), ...Gl()].flatMap(item => [item, fr(item), r5(item)].filter(item => item !== null)));
}
import { createHash as pe } from "crypto";
import { lstat as me, mkdir as j, open as Ie, readdir as P, readFile as Oe, readlink as O, realpath as W, rename as Le, stat as De, symlink as ge, writeFile as he } from "fs/promises";
import { homedir as Fe } from "os";
import { dirname as fe, isAbsolute as F, join as E, relative as z, resolve as se, sep as I } from "path";
var He = ["local", "npm", "github", "git", "subdir", "archive", "command", "unknown"];
function IDt(e) {
  let n = Math.random().toString(36).slice(2, 2 + Q).padEnd(1, "0");
  return `${Z}${e}_${Date.now()}_${n}`;
}
var Z = "temp_",
  Q = 6,
  jXe = "_x",
  Fms = ".clone",
  regExp = new RegExp(`^${Z}(?:${He.join("|")})_(\\d{10,})_[a-z0-9]{1,${Q}}(?:${jXe}|\\${Fms})?$`);
function te(e, n) {
  return `${e}${ne}${n}`;
}
var ne = ".linking-",
  regExp_2 = new RegExp(`\\${ne}(\\d+)$`);
import { spawn as Ne } from "child_process";
var re = 2000;
function oe(e, {
  cwd: cwd,
  env: env,
  timeoutMs: timeoutMs,
  maxStdoutBytes: maxStdoutBytes,
  maxStderrBytes: maxStderrBytes
}) {
  if (ME()) return Promise.resolve({
    kind: "spawn-error",
    message: message,
    stdout: "",
    stderr: ""
  });
  return new Promise(u => {
    let stdout = "",
      stderr = "",
      f = 0,
      h = 0,
      w = !1,
      S = !1,
      A,
      b,
      _ = Ne(e, [], {
        shell: !0,
        cwd: cwd,
        env: env,
        stdio: ["ignore", "pipe", "pipe"],
        detached: x() !== "windows",
        windowsHide: !0,
        ...au("plugin")
      }),
      be = vt(async () => {
        if (!w && _.pid !== void 0) await Ab(_.pid, "SIGKILL");
      });
    function C(y) {
      if (w) return;
      if (w = !0, be(), clearTimeout(V), b) clearTimeout(b);
      _.stdout?.removeAllListeners("data"), _.stderr?.removeAllListeners("data"), _.stdout?.destroy(), _.stderr?.destroy(), u(y);
    }
    function q(kind) {
      if (A) return;
      A = kind, _.stdout?.removeAllListeners("data"), _.stderr?.removeAllListeners("data"), _.stdout?.pause(), _.stderr?.pause();
      let T = {
          kind: kind,
          stdout: stdout,
          stderr: stderr
        },
        H = () => {
          if (w) return;
          if (S) {
            C(T);
            return;
          }
          let N = () => C(T);
          if (_.once("exit", N), b = setTimeout(G => G(), re, N), typeof b === "object") b.unref();
        };
      if (_.pid === void 0) {
        C(T);
        return;
      }
      Ab(_.pid, "SIGKILL").then(H, H);
    }
    let V = setTimeout(y => y("timed-out"), timeoutMs, q);
    _.stdout?.setEncoding("utf8"), _.stderr?.setEncoding("utf8"), _.stdout?.on("data", y => {
      if (f += Buffer.byteLength(y), f > maxStdoutBytes) {
        q("stdout-overflow");
        return;
      }
      stdout += y;
    }), _.stderr?.on("data", y => {
      if (h >= maxStderrBytes) return;
      h += Buffer.byteLength(y), stderr += y;
    }), _.once("error", y => {
      C({
        kind: "spawn-error",
        message: y.message,
        stdout: stdout,
        stderr: stderr
      });
    });
    function J(exitCode, T) {
      if (A) return;
      if (typeof exitCode === "number") C({
        kind: "exited",
        exitCode: exitCode,
        stdout: stdout,
        stderr: stderr
      });else C({
        kind: "signaled",
        signal: T ?? "unknown",
        stdout: stdout,
        stderr: stderr
      });
    }
    _.once("exit", (y, T) => {
      if (S = !0, w || A) return;
      if (clearTimeout(V), b = setTimeout((H, N, G) => H(N, G), re, J, y, T), typeof b === "object") b.unref();
    }), _.once("close", (y, T) => {
      J(y, T);
    });
  });
}
import { readdir as ie, stat as xe } from "fs/promises";
import { join as M } from "path";
var MMn = ".claude-plugin",
  Nm = M(MMn, "plugin.json"),
  mze = "plugin.json",
  W7t = M(MMn, "marketplace.json"),
  z7t = ["commands", "skills", "agents", "hooks", "themes", "output-styles", "monitors", "workflows"],
  $e = ["SKILL.md", ".mcp.json", ".lsp.json"],
  MDt = [MMn, ...z7t, ...$e];
async function DDt(e) {
  return (await ie(e)).filter(item => !ae(item)).some(gco);
}
async function DMn(e) {
  let n = (await ie(e, {
    withFileTypes: !0
  })).filter(item => !ae(item.name));
  if (n.some(item => item.name === ".claude-plugin")) return e;
  if (n.length === 1 && n[0].isDirectory()) {
    let r = M(e, n[0].name);
    if (await Me(M(r, ".claude-plugin"))) return r;
    if (!gco(n[0].name) && (await DDt(r))) return r;
  }
  return e;
}
function gco(e) {
  return MDt.includes(e);
}
function pLi(e) {
  return z7t.includes(e);
}
async function Me(e) {
  try {
    return await xe(e), !0;
  } catch {
    return !1;
  }
}
function ae(e) {
  return e === "__MACOSX" || e === ".DS_Store";
}
var Ge = 60,
  maxStdoutBytes_2 = 65536,
  maxStderrBytes_2 = 65536,
  de = 500,
  ce = 268435456,
  ue = 20000,
  Ke = new Set(MDt);
async function je(e) {
  let timeoutMs_2 = (e.timeout ?? Ge) * 1000,
    r = Et(e.command, 200);
  t(`Plugin command source: running \`${r}\` (timeout ${timeoutMs_2}ms)`);
  let i = await oe(e.command, {
      cwd: Fe(),
      env: es(),
      timeoutMs: timeoutMs_2,
      maxStdoutBytes: maxStdoutBytes_2,
      maxStderrBytes: maxStderrBytes_2
    }),
    o = Et(i.stderr.trim(), de),
    s = o ? ` (stderr: ${o})` : "";
  switch (i.kind) {
    case "exited":
      if (i.exitCode !== 0) throw new R(`Plugin source command \`${r}\` exited with code ${i.exitCode}` + (o ? `: ${o}` : " and no error output."), "plugin command source exited non-zero");
      break;
    case "timed-out":
      throw new R(`Plugin source command \`${r}\` did not finish within ${timeoutMs_2 / 1000}s and was stopped.${s}`, "plugin command source timed out");
    case "stdout-overflow":
      throw new R(`Plugin source command \`${r}\` printed more than ${maxStdoutBytes_2 / 1024} KB and was stopped; it must print a single absolute path.`, "plugin command source exceeded the stdout cap");
    case "signaled":
      throw new R(`Plugin source command \`${r}\` was killed by ${i.signal} before it finished.${s}`, "plugin command source killed by a signal");
    case "spawn-error":
      throw new R(`Plugin source command \`${r}\` could not be started: ` + Et(i.message, de), "plugin command source failed to spawn");
  }
  let u = i.stdout.split(/\r?\n/).map(item => item.trim()).filter(item => item.length > 0);
  if (u.length === 0) throw new R(`Plugin source command \`${r}\` printed nothing; it must print the absolute path of the plugin directory.`, "plugin command source printed nothing");
  if (u.length > 1) throw new R(`Plugin source command \`${r}\` printed ${u.length} lines; it must print exactly one absolute path.`, "plugin command source printed multiple lines");
  let l = u[0];
  if (!F(l)) throw new R(`Plugin source command \`${r}\` printed \`${Et(l, 200)}\`, which is not an absolute path.`, "plugin command source printed a relative path");
  if (x() === "windows" && DT(l) || jb(l)) throw new yc(`Plugin source command \`${r}\` printed \`${Et(l, 200)}\`, a network path (UNC or automount), which is not supported as a plugin directory.`, "plugin command source printed a network path");
  if (M$e(l)) throw new yc(`Plugin source command \`${r}\` printed \`${Et(l, 200)}\`, which is reached through a link onto a network location (or one that cannot be trusted); that is not supported as a plugin directory.`, "plugin command source printed a path through a suspect link");
  let p;
  try {
    p = await W(l);
  } catch (error) {
    throw new R(`Plugin source command \`${r}\` printed \`${Et(l, 200)}\`, but that path could not be resolved (${k(error) ?? "unknown error"}).`, "plugin command source path does not resolve");
  }
  if (jb(p) || x() === "windows" && DT(p)) throw new yc(`Plugin source command \`${r}\` printed a path that resolves to a network location, which is not supported as a plugin directory.`, "plugin command source path resolves to a network path");
  let f;
  try {
    f = await P(p);
  } catch (error) {
    let w = k(error);
    throw new R(`Plugin source command \`${r}\` printed \`${Et(l, 200)}\`, ` + (w === "ENOTDIR" ? "which is not a directory." : `which could not be read as a directory (${w ?? "unknown error"}).`), "plugin command source path is not a readable directory");
  }
  if (!f.some(item => Ke.has(item))) throw new R(`Plugin source command \`${r}\` printed \`${Et(l, 200)}\`, but that directory has no plugin content (expected .claude-plugin/ or a commands/, skills/, agents/, hooks/, themes/, output-styles/, monitors/, workflows/, SKILL.md, .mcp.json, or .lsp.json at the top level). Nothing was installed.`, "plugin command source directory has no plugin content");
  return t(`Plugin command source: resolved plugin directory ${p}`), p;
}
async function ye(e, n, r) {
  let i = [],
    o = 0,
    s = 0;
  async function u(l) {
    let p = await P(l, {
      withFileTypes: !0
    });
    for (let f of p) {
      if (s++, s > ue) throw new R(`Plugin directory has more than ${ue} entries; refusing to install it as a plugin.`, "plugin command source directory has too many files");
      let h = E(l, f.name),
        w = await Cwe(l, f);
      if (w.isDirectory) {
        if (l === e && f.name === ".git") continue;
        await u(h);
      } else if (w.isFile) {
        let S = w.size ?? (await me(h)).size;
        if (r?.set(h, S), o += S, o > ce) throw new R(`Plugin directory is larger than ${ce / 1048576} MB; refusing to install it as a plugin.`, "plugin command source directory too large");
        i.push(h);
      } else if (w.isSymbolicLink) n?.push(h);
    }
  }
  return await u(e), n?.sort(), i.sort();
}
async function ze(e) {
  let n = [],
    r = new Map(),
    i = await ye(e, n, r),
    o = pe("sha256");
  for (let s of i) {
    let u = r.get(s) ?? 0;
    o.update(`f ${z(e, s).split(I).join("/")}\x00${u}\x00`);
    let l = u;
    if (u > 0) {
      let p = await Ie(s, "r");
      try {
        for await (let f of p.createReadStream({
          start: 0,
          end: u - 1
        })) o.update(f), l -= f.length;
      } finally {
        await p.close();
      }
    }
    if (l > 0) o.update(Buffer.alloc(l));
  }
  for (let s of n) {
    let u = await O(s);
    o.update(`l ${z(e, s).split(I).join("/")}\x00`), o.update(`${Buffer.byteLength(u)}\x00${u}`);
  }
  return o.digest("hex");
}
var G7t = 'This plugin source uses mode "link", which is not supported on Windows yet; the marketplace can use mode "copy" instead.';
function FW(e) {
  return e.mode === "link" ? `${e.command}${oHn}` : e.command;
}
function LMn(e) {
  return e.mode === "link" ? 'mode "link": its output directory is used in place (linked, not copied)' : 'mode "copy": its output directory is copied into the plugin cache';
}
class yc extends R {}
function We(e, n) {
  if (n && n.kind !== "none" && n.command === FW(e)) return;
  let r = Et(e.command, GBt) + (e.mode === "link" ? " [mode: link]" : ""),
    i = n?.pluginId !== void 0 ? Et(n.pluginId, 200) : void 0,
    o = i ?? "This plugin",
    s = i ?? "";
  if (n?.kind === "recorded" && n.command !== void 0) throw new yc(`${o}'s marketplace changed the command that installs it, or how its output is used (now \`${r}\`), since it was accepted, so it was not run. Review and accept the new command: ${Rg("plugin update", s, {
    tail: "in a terminal (add `--scope` for a project/local install)",
    fallback: "an explicit plugin update in a terminal reviews it"
  })}.`, "plugin command source command changed since consent");
  if (n?.kind === "recorded") throw new yc(`${o}'s marketplace entry now installs it by running a command on this machine (\`${r}\`) that has not been reviewed yet, so it was not run. Review and accept it: ${Rg("plugin update", s, {
    tail: "in a terminal (add `--scope` for a project/local install)",
    fallback: "an explicit plugin update in a terminal reviews it"
  })}.`, "plugin command source never consented for an installed plugin");
  if (n?.kind === "shown") throw new yc(`${o}'s marketplace entry changed while it was being installed (it now declares \`${r}\`, not the command that was shown), so nothing was run. Re-run the install/update to review the current command.`, "plugin command source changed between display and run");
  throw new yc(`${o} is installed by running a command on this machine (\`${r}\`) that has not been reviewed yet, so it was not run. Review and accept it from its /plugin details pane, or in a terminal: ${Rg("plugin install", s, {
    fallback: "an explicit plugin install reviews it"
  })}.`, "plugin command source without consent");
}
async function Xe(target_2, n) {
  let r = (await P(target_2)).filter(item => !NMn(item)).sort(),
    i = await _e(target_2, r.map(s => ({
      name: s,
      path: E(target_2, s)
    })));
  await j(n, {
    recursive: !0
  });
  for (let {
    name: name,
    target: target,
    isDirectory: isDirectory
  } of i) await ge(target, E(n, name), isDirectory ? "dir" : "file");
  await he(E(n, qGe), JSON.stringify({
    target: target_2
  }), {
    flag: "wx"
  });
  let o = pe("sha256");
  o.update(`${target_2}\x00`);
  for (let {
    name: name_2,
    target: target_3
  } of i) o.update(`${Buffer.byteLength(name_2)}\x00${name_2}`), o.update(`${Buffer.byteLength(target_3)}\x00${target_3}`);
  return o.digest("hex");
}
async function _e(e, n) {
  let r = [];
  for (let {
    name: name_3,
    path: path
  } of n) {
    if (q$r(path, fe(path))) throw new yc(`A top-level entry of the plugin directory (${Et(name_3, 100)}) points at a network location or through a link that cannot be trusted; refusing to link it.`, "plugin command source entry traverses a suspect link");
    let target_4, isDirectory_2;
    try {
      target_4 = await W(path), isDirectory_2 = (await De(target_4)).isDirectory();
    } catch {
      throw new R(`A top-level entry of the plugin directory its command produced could not be resolved (${Et(name_3, 80)}); refusing to link it.`, "plugin command source link entry unresolvable");
    }
    let l = z(e, target_4);
    if (l === "" || l === ".." || l.startsWith(`..${I}`) || F(l)) throw new yc(`A top-level entry of the plugin directory its command produced (${Et(name_3, 80)}) points outside that directory; refusing to link it.`, "plugin command source link escapes producer directory");
    r.push({
      name: name_3,
      target: target_4,
      isDirectory: isDirectory_2
    });
  }
  return r;
}
async function mLi(e, n) {
  let r = se(Ee(), e),
    i = se(Ee(), n),
    o = await X(E(r, qGe)),
    target_5 = Zgo().parse(JSON.parse(o)).target;
  if ($Io(target_5)) throw new yc("The link farm points at a producer reached through a link that cannot be trusted; refusing to relink it.", "plugin command source relink target traverses a suspect link");
  let u = await W(target_5);
  if (DT(u)) throw new yc("The link farm points at a producer that now resolves to a network location; refusing to relink it.", "plugin command source relink target resolves to a network path");
  let l = [];
  for (let w of await P(r, {
    withFileTypes: !0
  })) {
    if (NMn(w.name)) continue;
    if ((await owt(r, w))?.isSymbolicLink) l.push(w);
  }
  let p = [];
  for (let w of l) {
    let S;
    try {
      S = await O(E(r, w.name));
    } catch (error) {
      if (K(error)) continue;
      throw new yc(`A link in the staged farm could not be read (${Et(d(error), 120)}); refusing to relink it.`, "plugin command source relink entry unreadable");
    }
    if (CG(S)) throw new yc("A link in the staged farm is not in canonical form; refusing to relink it.", "plugin command source relink entry not canonical");
    p.push(w);
  }
  let f = await _e(u, p.map(item => ({
    name: item.name,
    path: E(r, item.name)
  })));
  await j(fe(i), {
    recursive: !0
  });
  let h = te(i, process.pid);
  await yl(h), await j(h);
  try {
    for (let {
      name: name_4,
      target: target_6,
      isDirectory: isDirectory_3
    } of f) await ge(target_6, E(h, name_4), isDirectory_3 ? "dir" : "file");
    await he(E(h, qGe), o, {
      flag: "wx"
    }), await Le(h, i);
  } catch (error) {
    await yl(h).catch(() => {});
    let S = k(error);
    if ((S === "ENOTEMPTY" || S === "EEXIST") && (await yco(i)) === "live" && !(await V7t(i, u))) return;
    throw error;
  }
}
async function Hms(e, {
  keepGit: keepGit
}) {
  for (let r of await P(e)) if (NMn(r) && !(keepGit && MT(r) === ".git")) await yl(E(e, r));
}
function NMn(e) {
  return XNt(e, Ye);
}
var Ye = new Set([...xht, ".git"]);
async function FMn(e, {
  unclassifiableIsFarm = !1
} = {}) {
  let r = await yco(e);
  return r === "live" || r === "unclassifiable" && unclassifiableIsFarm;
}
async function yco(e) {
  try {
    Zgo().parse(JSON.parse(await X(E(e, qGe))));
  } catch (error) {
    if (k(error) !== void 0) return n(error);
  }
  try {
    for (let r of await P(e, {
      withFileTypes: !0
    })) {
      if (NMn(r.name)) continue;
      try {
        let i = await Cwe(e, r);
        if (i.isSymbolicLink && F(i.linkTarget ?? (await O(E(e, r.name))))) return "live";
      } catch (error) {
        if (k(error) === "ENOENT") continue;
        return n(error);
      }
    }
    return "not-live";
  } catch (error) {
    return n(error);
  }
  function n(r) {
    let i = k(r);
    return i === "ENOENT" || i === "ENOTDIR" ? "not-live" : "unclassifiable";
  }
}
var qe = new Set([".ds_store", "thumbs.db", "desktop.ini", "icon\r"]);
function Ve(e) {
  let n = MT(e);
  return qe.has(n) || n.startsWith("._");
}
function Je(e) {
  return xht.has(e);
}
async function V7t(e, n) {
  let r = n.replace(/[\\/]+$/, "") + I;
  try {
    for (let i of await P(e, {
      withFileTypes: !0
    })) {
      if (Je(i.name)) continue;
      let o;
      try {
        let s = await Cwe(e, i);
        if (s.isFile && (Ve(i.name) || XNt(i.name, xht))) continue;
        if (!s.isSymbolicLink) return !0;
        o = s.linkTarget ?? (await O(E(e, i.name)));
      } catch (error) {
        if (k(error) === "ENOENT") continue;
        return !0;
      }
      if (!F(o) || CG(o) || DT(o) || !o.startsWith(r)) return !0;
    }
    return !1;
  } catch (error) {
    let o = k(error);
    return o !== "ENOENT" && o !== "ENOTDIR";
  }
}
async function hLi(e) {
  try {
    return Zgo().parse(JSON.parse(await X(E(e, qGe)))).target;
  } catch {
    return;
  }
}
var Ze = 16384;
async function X(e) {
  let n = await me(e);
  if (!n.isFile() || n.size > Ze) throw new yc("The link-farm marker is not a small regular file; refusing to read it.", "plugin command source link marker not a small regular file");
  return Oe(e, "utf8");
}
function Qye(e) {
  return typeof e === "object" && e.source === "command" ? e : void 0;
}
function Ooe(e) {
  return Qye(e)?.mode === "link";
}
async function gLi(e, n, r, i) {
  if (kd()) throw new yc("A tool server doesn't run a plugin's command on its own. The plugin was not installed or updated and its command was not run.", "plugin command source not started by a tool server daemon");
  if (ML()) throw Nht(), new yc(Rse(), Q_() === "unanswered" ? "plugin command source held for the organization answer" : "plugin command source disabled by managed policy");
  if (e.mode === "link" && x() === "windows") throw new yc(G7t, "plugin command source link mode unsupported on windows");
  return We(e, i), ao("plugin_command_install", async () => {
    let producerDirectory = await je(e);
    if (Wp(producerDirectory, Ee(), {
      foldCase: !0
    })) throw new yc(`Plugin source command printed the working directory or one of its parents (${Et(producerDirectory, 300)}); refusing to use it as a plugin.`, "plugin command source printed cwd or an ancestor");
    if (sht(producerDirectory), e.mode === "link") return {
      contentSha256: await Xe(producerDirectory, n),
      producerDirectory: producerDirectory
    };
    return await ye(producerDirectory), await r(producerDirectory, n), await Hms(n, {
      keepGit: !1
    }), {
      contentSha256: await ze(n),
      producerDirectory: producerDirectory
    };
  });
}
import { homedir as et } from "os";
var timeout = 1e4,
  maxBuffer = 1e6;
function rt(e) {
  if (Xh(e)) return !0;
  return (e === void 0 || e === et()) && bP() && v$e();
}
async function Vbr(e) {
  if (e.isRepoResidentConfig && !rt(e.repoResidentOrigin)) return {
    ok: !1,
    reason: "missing_trust"
  };
  let n = e.readEnvAsStarts !== void 0 ? e.readEnvAsStarts(() => ({
      env: U(e),
      withoutContextEnv: U({
        ...e,
        env: void 0
      })
    })) : {
      env: U(e),
      withoutContextEnv: void 0
    },
    env_2 = n.env;
  if (e.pluginId !== void 0) z6(e.pluginId, env_2, n.withoutContextEnv ?? U({
    ...e,
    env: void 0
  }));
  let i = await lt(e.command, [], {
    shell: !0,
    timeout: timeout,
    maxBuffer: maxBuffer,
    cwd: e.cwd,
    env: env_2,
    extendEnv: !1
  });
  if (i.code !== 0 || !i.stdout) return {
    ok: !1,
    reason: "exec_failed"
  };
  let o;
  try {
    o = ee(i.stdout.trim());
  } catch {
    return {
      ok: !1,
      reason: "parse_failed"
    };
  }
  if (!D(o)) return {
    ok: !1,
    reason: "non_object"
  };
  let headers = {};
  for (let [u, l] of Object.entries(o)) {
    if (typeof l !== "string") return {
      ok: !1,
      reason: "non_string_value"
    };
    headers[u] = l;
  }
  return {
    ok: !0,
    headers: headers
  };
}
function U(e) {
  let n = {
    ...es()
  };
  if (!e.scrubCredentialEnv) return {
    ...n,
    ...e.env
  };
  let r = [];
  for (let u of xAe()) {
    let l = process.env[u] ?? n[u];
    if (l !== void 0 && l !== "" && !Pe(l) && !rs(l)) r.push(l);
    delete n[u];
  }
  let env_3 = process.env,
    o = {};
  for (let u of new Set([...Object.keys(n), ...Object.keys(env_3)])) o[u] = env_3[u] ?? n[u];
  for (let u of RAe(o).lostCredential) {
    let l = o[u];
    if (l !== void 0 && l !== "") r.push(l);
  }
  Object.assign(n, RAe(n).respelled), r.sort((itemA, itemB) => itemB.length - itemA.length);
  let s = {};
  for (let [u, l] of Object.entries(e.env ?? {})) s[u] = l === e.cwd ? l : r.reduce((acc, item) => acc.split(item).join("REDACTED"), l);
  return {
    ...n,
    ...s
  };
}
var f1 = {
  wait: void 0,
  ask: void 0,
  fetches: void 0
};
function WXe() {
  let organizationAsk = Ae().organizationAsk;
  return organizationAsk.asking ??= Promise.resolve().then(() => f1.wait?.()).then(() => Q_() === "unanswered" ? f1.ask?.() : void 0).catch(a).finally(() => {
    organizationAsk.asking = null;
  }), organizationAsk.asking;
}
var _co = 30000;
var bco = 3000;
function K7t(e) {
  let organizationAsk_2 = Ae().organizationAsk;
  return organizationAsk_2.answerWait ??= we(WXe(), bco, e).then(() => {}), organizationAsk_2.answerWait;
}
var maxContentLength = 268435456,
  q7t = 5242880,
  timeout_2 = 120000,
  $ms = "Claude-Code-Plugin-Manager";
async function yLi(e, n = {}) {
  if (!HRo(e)) throw new R(`${FRo}: ${Lw(e)}`, "plugin archive URL policy rejected");
  let r = Lw(e);
  t(`Downloading plugin archive from ${r}`);
  let i = n.headers ?? {},
    headers_2 = {
      ...i,
      "User-Agent": $ms
    },
    s = X4(e) ? sX.get : hd.get,
    u = performance.now(),
    data;
  try {
    let f = await s(e, {
      timeout: timeout_2,
      responseType: "arraybuffer",
      maxRedirects: 5,
      maxContentLength: maxContentLength,
      headers: headers_2,
      beforeRedirect: ct(e, Ums(i))
    });
    vF("plugin_archive", e, "success", performance.now() - u), data = Buffer.from(f.data);
  } catch (error) {
    vF("plugin_archive", e, "failure", performance.now() - u, j9(error));
    let h = Wms(error);
    if (h) throw h;
    throw new R(ut(error, e, r), "plugin archive download failed");
  }
  let contentSha256 = st("sha256").update(data).digest("hex");
  if (n.sha256 && n.sha256.toLowerCase() !== contentSha256) throw new R(`Plugin archive integrity check failed for ${r}: expected sha256 ${n.sha256.toLowerCase()}, got ${contentSha256}. The archive was not installed. Verify the sha256 in the marketplace entry, or that the URL serves the intended file.`, "plugin archive sha256 mismatch");
  return {
    data: data,
    contentSha256: contentSha256
  };
}
function Ums(e) {
  return Object.keys(e ?? {}).filter(item => item.toLowerCase() !== "user-agent");
}
function ve(e, n, r = "plugin archive") {
  let i = new Set(n.map(item => item.toLowerCase()));
  return o => {
    if (i.size === 0 || !o.headers) return;
    let s = NAe(o);
    if (s && Cte(e, s)) return;
    let u = 0;
    for (let l of Object.keys(o.headers)) if (i.has(l.toLowerCase())) delete o.headers[l], u++;
    if (u > 0) t(`Fetch of ${r} redirected to a different origin; dropped inherited marketplace headers`);
  };
}
function ct(e, n) {
  let r = ve(e, n);
  return i => {
    let o = NAe(i);
    if (!HRo(o)) throw new R("Plugin archive redirected to a disallowed URL and was refused \u2014 " + `every hop must satisfy the archive URL policy (${FRo.replace(/^Archive URLs must /, "")}): ` + (o ? Lw(o) : "(unparseable redirect target)"), "plugin archive redirect policy rejected");
    r(i);
  };
}
function _Li(e, n) {
  let r = ve(e, n, "marketplace catalog");
  return i => {
    let o = NAe(i);
    if (!(o !== "" && (Cte(e, o) || o.toLowerCase().startsWith("https:") && !jJ(Tt(o))))) throw new R("Marketplace catalog redirected to a disallowed URL and was refused \u2014 " + "a server-chosen cross-origin redirect must use https:// and must not point at a loopback, link-local, or cloud-metadata host (only a hop that stays on the origin you started from is exempt): " + (o ? Lw(o) : "(unparseable redirect target)"), "marketplace catalog redirect policy rejected");
    r(i);
  };
}
function ut(e, n, r) {
  let i = o => o.replaceAll(n, () => r);
  if (rc(e)) {
    if (e.code === "ECONNREFUSED" || e.code === "ENOTFOUND") return `Could not connect to ${r}. Check your network connection and that the archive URL is correct.

Technical details: ${i(e.message)}`;
    if (e.code === "ETIMEDOUT" || e.code === "ECONNABORTED") return `Timed out downloading plugin archive from ${r}. The server may be slow or unreachable.

Technical details: ${i(e.message)}`;
    if (e.response) {
      let o = e.response.status;
      return `HTTP ${o} while downloading plugin archive from ${r}.${o === 401 || o === 403 ? " The server rejected the request \u2014 if it requires authentication, add `headers` to the marketplace source (they are forwarded to plugin archives on the same origin) or configure your proxy." : ""}

Technical details: ${i(e.message)}`;
    }
  }
  return `Failed to download plugin archive from ${r}: ${i(d(e))}`;
}
function hze(e) {
  return typeof e.headersHelper === "string" && e.headersHelper !== "";
}
var Kbr = {
  unshown: "entry_helper_unshown",
  command: "entry_helper_changed",
  archive_url: "entry_archive_url_changed"
};
function HMn(e, archiveUrl) {
  let {
    entry: entry
  } = e;
  return hze(entry) && entry.headersHelper !== void 0 && (!e.requireInlinedManifest || entry.strict === !1) ? {
    command: entry.headersHelper,
    archiveUrl: archiveUrl
  } : null;
}
function qbr(e, n) {
  if (e === void 0 || e === null) return n === null ? null : "unshown";
  if (n === null) return null;
  if (e.command !== n.command) return "command";
  if (Se(n.archiveUrl) !== Se(e.archiveUrl)) return "archive_url";
  return null;
}
function Se(e) {
  let n = OVn(e);
  return n === null ? e : BCe(n);
}
function $Mn(e, n = "lockdown") {
  let r = Qe(e);
  if (n === "organization_unanswered") return `"${r}" fetches its archive through a marketplace-declared headersHelper command, which was not run: your organization's settings haven't been read, so it isn't known whether it allows such commands. The plugin was not installed or updated. It can be once your organization's settings are read, if it allows them.`;
  if (n === "remote_policy_unconsented") return `"${r}" fetches its archive through a headersHelper command that was not run: ${XCr}. The plugin was not installed or updated.`;
  return `"${r}" fetches its archive through a marketplace-declared headersHelper command, and your organization's managed settings disable marketplace-declared commands (disableCommandPluginSources / allowManagedHooksOnly). The plugin was not installed or updated and the command was not run; ` + (YCr() ? "ask your admin to allow it or to declare the marketplace in managed settings." : "ask your admin to allow it.");
}
function UMn(e) {
  switch (e) {
    case "remote_policy_unconsented":
      return "entry_helper_remote_policy_unconsented";
    case "organization_unanswered":
      return "entry_helper_organization_unanswered";
    case "lockdown":
      return "entry_helper_disabled_by_policy";
  }
}
var pt = {
  entry_helper_unshown: "plugin entry helper consent mismatch at install: entry_helper_unshown",
  entry_helper_changed: "plugin entry helper consent mismatch at install: entry_helper_changed",
  entry_archive_url_changed: "plugin entry helper consent mismatch at install: entry_archive_url_changed",
  entry_helper_deferred: "plugin headers helper deferred to explicit install",
  entry_helper_disabled_by_policy: "plugin entry helper disabled by managed policy",
  entry_helper_unconfirmed: "plugin entry helper unconfirmed at install (nothing was announced)",
  entry_helper_not_inlined: "plugin entry headersHelper requires strict:false (catalog authoring error)",
  entry_helper_remote_policy_unconsented: "plugin entry helper declared by remote managed settings not yet verified and approved for the session",
  entry_helper_organization_unanswered: "plugin entry helper held for the organization answer"
};
function mt(e) {
  return Bms[e] === "sad";
}
var Bms = {
  entry_helper_unshown: "sad",
  entry_helper_changed: "sad",
  entry_archive_url_changed: "sad",
  entry_helper_deferred: "sad",
  entry_helper_disabled_by_policy: "sad",
  entry_helper_unconfirmed: "sad",
  entry_helper_remote_policy_unconsented: "sad",
  entry_helper_organization_unanswered: "sad",
  entry_helper_not_inlined: "bad"
};
function Zft(e) {
  if (e instanceof Hce) return {
    code: e.failureCode,
    kind: mt(e.failureCode) ? "sad" : "bad"
  };
  return {
    code: "command_source_refused",
    kind: "sad"
  };
}
class Hce extends yc {
  failureCode;
  constructor(e, n) {
    super(e, pt[n]);
    this.failureCode = n;
  }
}
function Ybr(e, n, r) {
  let i = Qe(n),
    o = r === "update" ? "Review the command now shown, then update again." : "Reopen its details in /plugin to review it, then install again.";
  if (e === "unshown") return r === "update" ? `This update would run a headersHelper command for "${i}" that was not shown on this pane. ${o}` : `This install would run a headersHelper command for "${i}" that was not shown to you first. Retry the same install to review the command before it runs.`;
  return e === "command" ? `The headersHelper command for "${i}" changed since it was shown. ${o}` : `The archive URL for "${i}" changed since its headersHelper command was shown. ${o}`;
}
function zXe(e) {
  let n = e.trustedSettingsEntryAuth !== void 0 && e.trustedSettingsEntryAuth.origin !== "settings" && e.marketplaceSource?.source !== "settings" ? void 0 : e.trustedSettingsEntryAuth;
  if (n !== void 0) {
    let operatorAuthored = n.origin === "settings";
    if (!At(n.archiveUrl, e.archiveUrl)) return {
      entry: {},
      operatorAuthored: operatorAuthored,
      requireInlinedManifest: !1
    };
    if (n.headersHelper !== void 0 && n.operatorTier === "policySettings" && !nFt()) throw new Hce(`This plugin's headersHelper was not run: ${XCr}.`, "entry_helper_remote_policy_unconsented");
    return {
      entry: {
        headers: n.headers,
        headersHelper: n.origin === "addDir" ? void 0 : n.headersHelper
      },
      operatorAuthored: operatorAuthored,
      requireInlinedManifest: !1
    };
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
  };
}
async function Xbr(e, n) {
  if (e?.source !== "url") return {};
  let trustedDeclaration = n.trustedDeclaration,
    i = `marketplace ${Qe(n.marketplaceName ?? Lw(e.url))}`,
    o = (f, h) => Jbr(f, `${i} (${h})`, {
      operatorAuthored: trustedDeclaration?.operatorAuthored === !0
    }),
    s = o(trustedDeclaration ? {
      ...trustedDeclaration.headers
    } : {
      ...e.headers
    }, trustedDeclaration ? trustedDeclaration.operatorAuthored ? "operator declaration" : "repo-tier declaration" : "state copy");
  if (trustedDeclaration?.headersHelper === void 0) return s;
  if (!/^https:\/\//i.test(e.url)) return t(`${i}: headersHelper not run \u2014 marketplace URL is not https`, {
    level: "warn"
  }), s;
  if (kd()) throw new yc(`${i}: a tool server doesn't run a marketplace's headersHelper on its own: the command was not run and the marketplace was not fetched.`, "marketplace headersHelper not started by a tool server daemon");
  if (Q_() === "unanswered") await K7t();
  if (Q_() === "unanswered") throw Nht("marketplace"), new yc(`${i}: your organization's settings haven't been read, so it isn't known whether it allows marketplace-declared commands. This marketplace's headersHelper is one: the command was not run and the marketplace was not fetched. It can be fetched once your organization's settings are read, if it allows them.`, "marketplace headersHelper held for the organization answer");
  if (trustedDeclaration.authoredBy === "policySettings" && !nFt()) throw c("plugin_headers_helper", "remote_policy_unconsented"), new yc(`${i}: headersHelper not run \u2014 ${XCr}. The marketplace was not fetched.`, "marketplace headersHelper from remote managed settings not yet verified and approved for the session");
  let u = YCr(),
    l = trustedDeclaration.authoredBy === "policySettings" && u;
  if (ML() && !l) throw new yc(`${i}: your organization's managed settings disable marketplace-declared commands (disableCommandPluginSources / allowManagedHooksOnly), ` + (u ? "and this marketplace's headersHelper is not declared in managed settings. The marketplace was not fetched and the command was not run; ask your admin to allow it or to declare the marketplace in managed settings." : "and in this session a declaration in managed settings does not exempt a headersHelper. The marketplace was not fetched and the command was not run; ask your admin to allow it."), "marketplace headersHelper disabled by managed policy");
  if (!B()) return t(`${i}: headersHelper not run \u2014 disabled by the plugin command kill switch`, {
    level: "warn"
  }), s;
  let p = await ht(trustedDeclaration.headersHelper, e.url, n.marketplaceName, trustedDeclaration.operatorAuthored);
  return {
    ...s,
    ...o(p, "helper output")
  };
}
var gt = 60000;
async function ht(e, n, r, i) {
  let o = `${e}\x00${n}\x00${r ?? ""}\x00${i ? "operator" : "repo"}`,
    s = Date.now(),
    {
      marketplaceHelperMemo: marketplaceHelperMemo
    } = Ae(),
    l = marketplaceHelperMemo.get(o);
  if (l && l.expiresAt > s) return l.headers;
  let headers_3 = ft(e, n, r, i);
  marketplaceHelperMemo.set(o, {
    expiresAt: s + gt,
    headers: headers_3
  });
  try {
    return await headers_3;
  } catch (error) {
    throw marketplaceHelperMemo.delete(o), error;
  }
}
async function ft(command, CLAUDE_CODE_MARKETPLACE_URL, CLAUDE_CODE_MARKETPLACE_NAME, i) {
  let o = await Vbr({
    command: command,
    scrubCredentialEnv: !i,
    isRepoResidentConfig: !1,
    cwd: Ue(),
    env: {
      CLAUDE_CODE_MARKETPLACE_URL: CLAUDE_CODE_MARKETPLACE_URL,
      ...(CLAUDE_CODE_MARKETPLACE_NAME !== void 0 && {
        CLAUDE_CODE_MARKETPLACE_NAME: CLAUDE_CODE_MARKETPLACE_NAME
      })
    }
  });
  if (!o.ok) throw m("plugin_headers_helper", o.reason), new R(`marketplace headersHelper failed (${o.reason})`, "marketplace headers helper failed");
  return g("plugin_headers_helper"), o.headers;
}
async function wt(e, n) {
  let r = s => Jbr(s, `plugin ${Qe(n.pluginName)}`, {
      operatorAuthored: n.operatorAuthored === !0
    }),
    i = r(e.headers ?? {});
  if (!hze(e) || e.headersHelper === void 0) return i;
  Te(e, {
    ...n,
    disabledByPolicy: JGe(n.marketplaceSource, n.marketplaceName)
  });
  let o = await Vbr({
    command: e.headersHelper,
    scrubCredentialEnv: !n.operatorAuthored,
    cwd: Ue(),
    isRepoResidentConfig: !1,
    env: {
      CLAUDE_CODE_PLUGIN_NAME: n.pluginName,
      CLAUDE_CODE_PLUGIN_ARCHIVE_URL: n.archiveUrl
    }
  });
  if (!o.ok) throw m("plugin_headers_helper", o.reason), new R(`plugin headersHelper for "${Y(n.pluginName)}" failed (${o.reason})`, "plugin headers helper failed");
  return g("plugin_headers_helper"), {
    ...i,
    ...r(o.headers)
  };
}
var yt = new Set(["host", "cookie", "forwarded", "x-real-ip", "x-client-ip", "true-client-ip", "client-ip", "cf-connecting-ip", "fastly-client-ip", "x-originating-ip", "x-remote-ip", "x-remote-addr", "x-cluster-client-ip", "connection", "upgrade", "transfer-encoding", "content-length", "te", "trailer", "expect", "via"]),
  _t = ["x-forwarded-", "x-original-", "proxy-"],
  kt = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;
function jms(e) {
  let n = e.toLowerCase().replaceAll("_", "-");
  return yt.has(n) || _t.some(item => n.startsWith(item));
}
function Jbr(e, n, {
  operatorAuthored: operatorAuthored_2 = !1
} = {}) {
  let i = {};
  for (let [o, s] of Object.entries(e)) {
    if (!kt.test(o) || /[\r\n\0]/.test(s)) {
      t(`Dropping header "${Qe(o)}" for ${n}: malformed name or value`, {
        level: "warn"
      });
      continue;
    }
    if (!operatorAuthored_2 && jms(o)) {
      t(`Dropping header "${Qe(o)}" for ${n}: request-routing/identity headers are not accepted from non-operator sources`, {
        level: "warn"
      });
      continue;
    }
    i[o] = s;
  }
  return i;
}
function Y(e) {
  return Qe(e);
}
function Te(e, n) {
  if (n.disabledByPolicy !== null) {
    if (n.disabledByPolicy === "organization_unanswered") Nht();
    throw new Hce($Mn(n.pluginName, n.disabledByPolicy), UMn(n.disabledByPolicy));
  }
  if (n.requireInlinedManifest !== !1 && e.strict !== !1) throw new Hce(`Plugin "${Y(n.pluginName)}" declares a headersHelper but is not strict:false \u2014 an entry with headersHelper must inline its manifest so its capabilities can be reviewed before the command runs.`, "entry_helper_not_inlined");
  if (!n.runEntryHelper) throw new Hce(`Plugin "${Y(n.pluginName)}" fetches its archive through a headersHelper, ` + "which only runs when you install or update it from its own details view \u2014 open this plugin in /plugin (or run `claude plugin install`/`update`), where the command is shown first.", "entry_helper_deferred");
}
async function Y7t(e) {
  if (typeof e.pluginSource !== "object" || e.pluginSource.source !== "archive") return;
  let n = e.pluginSource.url,
    {
      entry: entry_2,
      operatorAuthored: operatorAuthored_3,
      requireInlinedManifest: requireInlinedManifest
    } = zXe({
      entry: e.entry,
      archiveUrl: n,
      marketplaceSource: e.marketplaceSource,
      trustedSettingsEntryAuth: e.trustedSettingsEntryAuth
    }),
    s = e.marketplaceSource?.source === "url" ? e.marketplaceSource.url : void 0,
    disabledByPolicy = JGe(e.marketplaceSource, e.marketplaceName);
  if (hze(entry_2)) Te(entry_2, {
    pluginName: e.pluginName,
    runEntryHelper: e.runEntryHelper,
    requireInlinedManifest: requireInlinedManifest,
    operatorAuthored: operatorAuthored_3,
    disabledByPolicy: disabledByPolicy
  });
  let l = s !== void 0 && Cte(s, n) ? await Xbr(e.marketplaceSource, {
      marketplaceName: e.marketplaceName,
      trustedDeclaration: e.trustedMarketplaceAuth
    }) : {},
    p = await wt(entry_2, {
      pluginName: e.pluginName,
      archiveUrl: n,
      runEntryHelper: e.runEntryHelper,
      requireInlinedManifest: requireInlinedManifest,
      operatorAuthored: operatorAuthored_3,
      marketplaceSource: e.marketplaceSource,
      marketplaceName: e.marketplaceName
    }),
    headers_4 = {
      ...l,
      ...p
    };
  if (Object.keys(headers_4).length === 0) return;
  return {
    url: n,
    headers: headers_4
  };
}
function gze(e, n) {
  let r = Tv(e);
  return r ? n[r]?.source : void 0;
}
function Tv(e) {
  let n = e.split("@");
  return n.length === 2 && n[1] ? n[1] : void 0;
}
function At(e, n) {
  return BCe(e) === BCe(n);
}
function Tt(e) {
  try {
    return new URL(e).hostname;
  } catch {
    return "";
  }
}
function Wms(e) {
  let n = e;
  for (let r = 0; r < 5 && n instanceof Error; r++) {
    if (n instanceof R) return n;
    n = n.cause;
  }
  return;
}
export { j7t, Qft, IDt, jXe, Fms, regExp as hco, regExp_2 as fLi, MMn, Nm, mze, W7t, z7t, MDt, DDt, DMn, gco, pLi, G7t, FW, LMn, yc, mLi, Hms, NMn, FMn, yco, V7t, hLi, Qye, Ooe, gLi, Vbr, f1, WXe, _co, bco, K7t, maxContentLength as A0e, q7t, $ms, yLi, Ums, _Li, hze, Kbr, HMn, qbr, $Mn, UMn, Bms, Zft, Hce, Ybr, zXe, Xbr, jms, Jbr, Y7t, gze, Tv, Wms };