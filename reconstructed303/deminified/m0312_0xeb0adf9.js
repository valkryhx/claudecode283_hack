// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { L, ke, iP, YTe, hc } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { x, d, k, G } from "B:/~BUN/root/chunk-3aez4b53.js";
import { je } from "B:/~BUN/root/chunk-89mss1tj.js";
import { C$, gP, pl, Ry, fV, S3s, Sv, Zjr, hQn, tCe, UQ, Ym } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { yr } from "B:/~BUN/root/chunk-2zk4vqr8.js";
import { bt, J, zmn, G_, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { Pe } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { g, m, p, po } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { bGe, CZe, za } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { At, l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { dDe as message, OA, vd } from "B:/~BUN/root/chunk-j8w5f307.js";
import { ct } from "B:/~BUN/root/chunk-6ft8yhc8.js";
import { Ne } from "B:/~BUN/root/chunk-nvdqbkrt.js";
import { Hft, EPr, Zon, pNt, nsn, ud, gO, jft, Z2n, eVn, zOe, M9e, CX, pme } from "B:/~BUN/root/chunk-472kxa0t.js";
import { yne, hze, Jle, R_t, E$r, T$r, Jg } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { Rt, Ge } from "B:/~BUN/root/chunk-vpgpdrbv.js";
import { E, vm } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { w2, Vge, ZEe } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { fW, sl } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { Rc } from "B:/~BUN/root/chunk-28dw3zbk.js";
import { ss } from "B:/~BUN/root/chunk-5g9fghtv.js";
import { m3, HC, k9e } from "B:/~BUN/root/chunk-cvj1wxdh.js";
import { sK, yM, iK } from "B:/~BUN/root/chunk-nsa84wqe.js";
import { v_ } from "B:/~BUN/root/chunk-y424etr5.js";
import { tS } from "B:/~BUN/root/chunk-7wsxhgty.js";
import { N } from "B:/~BUN/root/chunk-nkxgam12.js";
import { xl } from "B:/~BUN/root/chunk-648jq7hr.js";
import { createHash as at } from "crypto";
function tDt() {
  if (At()) return !1;
  if (m8e()) return !1;
  return B();
}
function B() {
  return E("tengu_plugin_command_source_refresh", !0);
}
var Ae = 30000;
function m8e() {
  let e = ud(),
    n = UQ(HC());
  if (I() === "windows" ? S3s(e) : pl(e)) return !0;
  let provenLocalRoots = Ne().provenLocalRoots,
    i = provenLocalRoots.get(n);
  if (i === void 0 || !m3(i, Ae)) {
    if (fV(n, {
      allowLocalWsl: !0
    })) return provenLocalRoots.delete(n), !0;
    provenLocalRoots.set(n, Date.now());
  }
  if (Ym(Pe(), n)) return !1;
  return Te().some(item => Ym(n, item, {
    foldCase: !0
  }) || Ym(item, n, {
    foldCase: !0
  }));
}
function Te() {
  return L([ke(), ...hc()].flatMap(item => [item, yr(item), w2(item)].filter(item => item !== null)));
}
import { createHash as ue } from "crypto";
import { lstat as pe, mkdir as K, open as $e, readdir as R, readFile as Me, readlink as D, realpath as z, rename as Oe, stat as Ie, symlink as me, writeFile as ge } from "fs/promises";
import { homedir as Le } from "os";
import { dirname as he, isAbsolute as F, join as S, relative as j, resolve as ae, sep as O } from "path";
var be = ["local", "npm", "github", "git", "subdir", "archive", "command", "unknown"];
function lpt(e) {
  let n = Math.random().toString(36).slice(2, 2 + Q).padEnd(1, "0");
  return `${Z}${e}_${Date.now()}_${n}`;
}
var Z = "temp_",
  Q = 6,
  wBe = "_x",
  Vvo = ".clone",
  regExp = new RegExp(`^${Z}(?:${be.join("|")})_(\\d{10,})_[a-z0-9]{1,${Q}}(?:${wBe}|\\${Vvo})?$`);
function ee(e, n) {
  return `${e}${te}${n}`;
}
var te = ".linking-",
  regExp_2 = new RegExp(`\\${te}(\\d+)$`);
import { spawn as Re } from "child_process";
var ne = 2000;
function re(e, {
  cwd: cwd,
  env: env,
  timeoutMs: timeoutMs,
  maxStdoutBytes: maxStdoutBytes,
  maxStderrBytes: maxStderrBytes
}) {
  if (OA()) return Promise.resolve({
    kind: "spawn-error",
    message: message,
    stdout: "",
    stderr: ""
  });
  return new Promise(c => {
    let stdout = "",
      stderr = "",
      f = 0,
      h = 0,
      w = !1,
      v = !1,
      A,
      b,
      _ = Re(e, [], {
        shell: !0,
        cwd: cwd,
        env: env,
        stdio: ["ignore", "pipe", "pipe"],
        detached: I() !== "windows",
        windowsHide: !0,
        ...vd("plugin")
      }),
      ve = bt(async () => {
        if (!w && _.pid !== void 0) await tS(_.pid, "SIGKILL");
      });
    function P(y) {
      if (w) return;
      if (w = !0, ve(), clearTimeout(q), b) clearTimeout(b);
      _.stdout?.removeAllListeners("data"), _.stderr?.removeAllListeners("data"), _.stdout?.destroy(), _.stderr?.destroy(), c(y);
    }
    function Y(kind) {
      if (A) return;
      A = kind, _.stdout?.removeAllListeners("data"), _.stderr?.removeAllListeners("data"), _.stdout?.pause(), _.stderr?.pause();
      let T = {
          kind: kind,
          stdout: stdout,
          stderr: stderr
        },
        H = () => {
          if (w) return;
          if (v) {
            P(T);
            return;
          }
          let C = () => P(T);
          if (_.once("exit", C), b = setTimeout(U => U(), ne, C), typeof b === "object") b.unref();
        };
      if (_.pid === void 0) {
        P(T);
        return;
      }
      tS(_.pid, "SIGKILL").then(H, H);
    }
    let q = setTimeout(y => y("timed-out"), timeoutMs, Y);
    _.stdout?.setEncoding("utf8"), _.stderr?.setEncoding("utf8"), _.stdout?.on("data", y => {
      if (f += Buffer.byteLength(y), f > maxStdoutBytes) {
        Y("stdout-overflow");
        return;
      }
      stdout += y;
    }), _.stderr?.on("data", y => {
      if (h >= maxStderrBytes) return;
      h += Buffer.byteLength(y), stderr += y;
    }), _.once("error", y => {
      P({
        kind: "spawn-error",
        message: y.message,
        stdout: stdout,
        stderr: stderr
      });
    });
    function V(exitCode, T) {
      if (A) return;
      if (typeof exitCode === "number") P({
        kind: "exited",
        exitCode: exitCode,
        stdout: stdout,
        stderr: stderr
      });else P({
        kind: "signaled",
        signal: T ?? "unknown",
        stdout: stdout,
        stderr: stderr
      });
    }
    _.once("exit", (y, T) => {
      if (v = !0, w || A) return;
      if (clearTimeout(q), b = setTimeout((H, C, U) => H(C, U), ne, V, y, T), typeof b === "object") b.unref();
    }), _.once("close", (y, T) => {
      V(y, T);
    });
  });
}
import { readdir as oe, stat as He } from "fs/promises";
import { join as M } from "path";
var ynn = ".claude-plugin",
  Af = M(ynn, "plugin.json"),
  lOe = "plugin.json",
  Z0t = M(ynn, "marketplace.json"),
  eDt = ["commands", "skills", "agents", "hooks", "themes", "output-styles", "monitors", "workflows"],
  Ce = ["SKILL.md", ".mcp.json", ".lsp.json"],
  ipt = [ynn, ...eDt, ...Ce];
async function apt(e) {
  return (await oe(e)).filter(item => !ie(item)).some(fRr);
}
async function _nn(e) {
  let n = (await oe(e, {
    withFileTypes: !0
  })).filter(item => !ie(item.name));
  if (n.some(item => item.name === ".claude-plugin")) return e;
  if (n.length === 1 && n[0].isDirectory()) {
    let r = M(e, n[0].name);
    if (await xe(M(r, ".claude-plugin"))) return r;
    if (!fRr(n[0].name) && (await apt(r))) return r;
  }
  return e;
}
function fRr(e) {
  return ipt.includes(e);
}
function TOs(e) {
  return eDt.includes(e);
}
async function xe(e) {
  try {
    return await He(e), !0;
  } catch {
    return !1;
  }
}
function ie(e) {
  return e === "__MACOSX" || e === ".DS_Store";
}
var De = 60,
  maxStdoutBytes_2 = 65536,
  maxStderrBytes_2 = 65536,
  le = 500,
  de = 268435456,
  ce = 20000,
  Ue = new Set(ipt);
async function Be(e) {
  let timeoutMs_2 = (e.timeout ?? De) * 1000,
    r = Rt(e.command, 200);
  t(`Plugin command source: running \`${r}\` (timeout ${timeoutMs_2}ms)`);
  let i = await re(e.command, {
      cwd: Le(),
      env: ss(),
      timeoutMs: timeoutMs_2,
      maxStdoutBytes: maxStdoutBytes_2,
      maxStderrBytes: maxStderrBytes_2
    }),
    o = Rt(i.stderr.trim(), le),
    a = o ? ` (stderr: ${o})` : "";
  switch (i.kind) {
    case "exited":
      if (i.exitCode !== 0) throw new x(`Plugin source command \`${r}\` exited with code ${i.exitCode}` + (o ? `: ${o}` : " and no error output."), "plugin command source exited non-zero");
      break;
    case "timed-out":
      throw new x(`Plugin source command \`${r}\` did not finish within ${timeoutMs_2 / 1000}s and was stopped.${a}`, "plugin command source timed out");
    case "stdout-overflow":
      throw new x(`Plugin source command \`${r}\` printed more than ${maxStdoutBytes_2 / 1024} KB and was stopped; it must print a single absolute path.`, "plugin command source exceeded the stdout cap");
    case "signaled":
      throw new x(`Plugin source command \`${r}\` was killed by ${i.signal} before it finished.${a}`, "plugin command source killed by a signal");
    case "spawn-error":
      throw new x(`Plugin source command \`${r}\` could not be started: ` + Rt(i.message, le), "plugin command source failed to spawn");
  }
  let c = i.stdout.split(/\r?\n/).map(item => item.trim()).filter(item => item.length > 0);
  if (c.length === 0) throw new x(`Plugin source command \`${r}\` printed nothing; it must print the absolute path of the plugin directory.`, "plugin command source printed nothing");
  if (c.length > 1) throw new x(`Plugin source command \`${r}\` printed ${c.length} lines; it must print exactly one absolute path.`, "plugin command source printed multiple lines");
  let s = c[0];
  if (!F(s)) throw new x(`Plugin source command \`${r}\` printed \`${Rt(s, 200)}\`, which is not an absolute path.`, "plugin command source printed a relative path");
  if (I() === "windows" && Sv(s) || Ry(s)) throw new Yl(`Plugin source command \`${r}\` printed \`${Rt(s, 200)}\`, a network path (UNC or automount), which is not supported as a plugin directory.`, "plugin command source printed a network path");
  if (tCe(s)) throw new Yl(`Plugin source command \`${r}\` printed \`${Rt(s, 200)}\`, which is reached through a link onto a network location (or one that cannot be trusted); that is not supported as a plugin directory.`, "plugin command source printed a path through a suspect link");
  let u;
  try {
    u = await z(s);
  } catch (error) {
    throw new x(`Plugin source command \`${r}\` printed \`${Rt(s, 200)}\`, but that path could not be resolved (${k(error) ?? "unknown error"}).`, "plugin command source path does not resolve");
  }
  if (Ry(u) || I() === "windows" && Sv(u)) throw new Yl(`Plugin source command \`${r}\` printed a path that resolves to a network location, which is not supported as a plugin directory.`, "plugin command source path resolves to a network path");
  let f;
  try {
    f = await R(u);
  } catch (error) {
    let w = k(error);
    throw new x(`Plugin source command \`${r}\` printed \`${Rt(s, 200)}\`, ` + (w === "ENOTDIR" ? "which is not a directory." : `which could not be read as a directory (${w ?? "unknown error"}).`), "plugin command source path is not a readable directory");
  }
  if (!f.some(item => Ue.has(item))) throw new x(`Plugin source command \`${r}\` printed \`${Rt(s, 200)}\`, but that directory has no plugin content (expected .claude-plugin/ or a commands/, skills/, agents/, hooks/, themes/, output-styles/, monitors/, workflows/, SKILL.md, .mcp.json, or .lsp.json at the top level). Nothing was installed.`, "plugin command source directory has no plugin content");
  return t(`Plugin command source: resolved plugin directory ${u}`), u;
}
async function fe(e, n, r) {
  let i = [],
    o = 0,
    a = 0;
  async function c(s) {
    let u = await R(s, {
      withFileTypes: !0
    });
    for (let f of u) {
      if (a++, a > ce) throw new x(`Plugin directory has more than ${ce} entries; refusing to install it as a plugin.`, "plugin command source directory has too many files");
      let h = S(s, f.name),
        w = await bGe(s, f);
      if (w.isDirectory) {
        if (s === e && f.name === ".git") continue;
        await c(h);
      } else if (w.isFile) {
        let v = w.size ?? (await pe(h)).size;
        if (r?.set(h, v), o += v, o > de) throw new x(`Plugin directory is larger than ${de / 1048576} MB; refusing to install it as a plugin.`, "plugin command source directory too large");
        i.push(h);
      } else if (w.isSymbolicLink) n?.push(h);
    }
  }
  return await c(e), n?.sort(), i.sort();
}
async function Ke(e) {
  let n = [],
    r = new Map(),
    i = await fe(e, n, r),
    o = ue("sha256");
  for (let a of i) {
    let c = r.get(a) ?? 0;
    o.update(`f ${j(e, a).split(O).join("/")}\x00${c}\x00`);
    let s = c;
    if (c > 0) {
      let u = await $e(a, "r");
      try {
        for await (let f of u.createReadStream({
          start: 0,
          end: c - 1
        })) o.update(f), s -= f.length;
      } finally {
        await u.close();
      }
    }
    if (s > 0) o.update(Buffer.alloc(s));
  }
  for (let a of n) {
    let c = await D(a);
    o.update(`l ${j(e, a).split(O).join("/")}\x00`), o.update(`${Buffer.byteLength(c)}\x00${c}`);
  }
  return o.digest("hex");
}
var nDt = 'This plugin source uses mode "link", which is not supported on Windows yet; the marketplace can use mode "copy" instead.';
function _H(e) {
  return e.mode === "link" ? `${e.command}${Zon}` : e.command;
}
function bnn(e) {
  return e.mode === "link" ? 'mode "link": its output directory is used in place (linked, not copied)' : 'mode "copy": its output directory is copied into the plugin cache';
}
class Yl extends x {}
function ze(e, n) {
  if (n && n.kind !== "none" && n.command === _H(e)) return;
  let r = Rt(e.command, R_t) + (e.mode === "link" ? " [mode: link]" : ""),
    i = n?.pluginId !== void 0 ? Rt(n.pluginId, 200) : void 0,
    o = i ?? "This plugin",
    a = i ?? "";
  if (n?.kind === "recorded" && n.command !== void 0) throw new Yl(`${o}'s marketplace changed the command that installs it, or how its output is used (now \`${r}\`), since it was accepted, so it was not run. Review and accept the new command: ${Jg("plugin update", a, {
    tail: "in a terminal (add `--scope` for a project/local install)",
    fallback: "an explicit plugin update in a terminal reviews it"
  })}.`, "plugin command source command changed since consent");
  if (n?.kind === "recorded") throw new Yl(`${o}'s marketplace entry now installs it by running a command on this machine (\`${r}\`) that has not been reviewed yet, so it was not run. Review and accept it: ${Jg("plugin update", a, {
    tail: "in a terminal (add `--scope` for a project/local install)",
    fallback: "an explicit plugin update in a terminal reviews it"
  })}.`, "plugin command source never consented for an installed plugin");
  if (n?.kind === "shown") throw new Yl(`${o}'s marketplace entry changed while it was being installed (it now declares \`${r}\`, not the command that was shown), so nothing was run. Re-run the install/update to review the current command.`, "plugin command source changed between display and run");
  throw new Yl(`${o} is installed by running a command on this machine (\`${r}\`) that has not been reviewed yet, so it was not run. Review and accept it from its /plugin details pane, or in a terminal: ${Jg("plugin install", a, {
    fallback: "an explicit plugin install reviews it"
  })}.`, "plugin command source without consent");
}
async function We(target_2, n) {
  let r = (await R(target_2)).filter(item => !Snn(item)).sort(),
    i = await we(target_2, r.map(a => ({
      name: a,
      path: S(target_2, a)
    })));
  await K(n, {
    recursive: !0
  });
  for (let {
    name: name,
    target: target,
    isDirectory: isDirectory
  } of i) await me(target, S(n, name), isDirectory ? "dir" : "file");
  await ge(S(n, Hft), JSON.stringify({
    target: target_2
  }), {
    flag: "wx"
  });
  let o = ue("sha256");
  o.update(`${target_2}\x00`);
  for (let {
    name: name_2,
    target: target_3
  } of i) o.update(`${Buffer.byteLength(name_2)}\x00${name_2}`), o.update(`${Buffer.byteLength(target_3)}\x00${target_3}`);
  return o.digest("hex");
}
async function we(e, n) {
  let r = [];
  for (let {
    name: name_3,
    path: path
  } of n) {
    if (hQn(path, he(path))) throw new Yl(`A top-level entry of the plugin directory (${Rt(name_3, 100)}) points at a network location or through a link that cannot be trusted; refusing to link it.`, "plugin command source entry traverses a suspect link");
    let target_4, isDirectory_2;
    try {
      target_4 = await z(path), isDirectory_2 = (await Ie(target_4)).isDirectory();
    } catch {
      throw new x(`A top-level entry of the plugin directory its command produced could not be resolved (${Rt(name_3, 80)}); refusing to link it.`, "plugin command source link entry unresolvable");
    }
    let s = j(e, target_4);
    if (s === "" || s === ".." || s.startsWith(`..${O}`) || F(s)) throw new Yl(`A top-level entry of the plugin directory its command produced (${Rt(name_3, 80)}) points outside that directory; refusing to link it.`, "plugin command source link escapes producer directory");
    r.push({
      name: name_3,
      target: target_4,
      isDirectory: isDirectory_2
    });
  }
  return r;
}
async function ROs(e, n) {
  let r = ae(ke(), e),
    i = ae(ke(), n),
    o = await W(S(r, Hft)),
    target_5 = EPr().parse(JSON.parse(o)).target;
  if (Zjr(target_5)) throw new Yl("The link farm points at a producer reached through a link that cannot be trusted; refusing to relink it.", "plugin command source relink target traverses a suspect link");
  let c = await z(target_5);
  if (Sv(c)) throw new Yl("The link farm points at a producer that now resolves to a network location; refusing to relink it.", "plugin command source relink target resolves to a network path");
  let s = [];
  for (let w of await R(r, {
    withFileTypes: !0
  })) {
    if (Snn(w.name)) continue;
    if ((await CZe(r, w))?.isSymbolicLink) s.push(w);
  }
  let u = [];
  for (let w of s) {
    let v;
    try {
      v = await D(S(r, w.name));
    } catch (error) {
      if (G(error)) continue;
      throw new Yl(`A link in the staged farm could not be read (${Rt(d(error), 120)}); refusing to relink it.`, "plugin command source relink entry unreadable");
    }
    if (C$(v)) throw new Yl("A link in the staged farm is not in canonical form; refusing to relink it.", "plugin command source relink entry not canonical");
    u.push(w);
  }
  let f = await we(c, u.map(item => ({
    name: item.name,
    path: S(r, item.name)
  })));
  await K(he(i), {
    recursive: !0
  });
  let h = ee(i, process.pid);
  await za(h), await K(h);
  try {
    for (let {
      name: name_4,
      target: target_6,
      isDirectory: isDirectory_3
    } of f) await me(target_6, S(h, name_4), isDirectory_3 ? "dir" : "file");
    await ge(S(h, Hft), o, {
      flag: "wx"
    }), await Oe(h, i);
  } catch (error) {
    await za(h).catch(() => {});
    let v = k(error);
    if ((v === "ENOTEMPTY" || v === "EEXIST") && (await gRr(i)) === "live" && !(await rDt(i, c))) return;
    throw error;
  }
}
async function qvo(e, {
  keepGit: keepGit
}) {
  for (let r of await R(e)) if (Snn(r) && !(keepGit && gP(r) === ".git")) await za(S(e, r));
}
function Snn(e) {
  return nsn(e, Xe);
}
var Xe = new Set([...pNt, ".git"]);
async function wnn(e, {
  unclassifiableIsFarm = !1
} = {}) {
  let r = await gRr(e);
  return r === "live" || r === "unclassifiable" && unclassifiableIsFarm;
}
async function gRr(e) {
  try {
    EPr().parse(JSON.parse(await W(S(e, Hft))));
  } catch (error) {
    if (k(error) !== void 0) return n(error);
  }
  try {
    for (let r of await R(e, {
      withFileTypes: !0
    })) {
      if (Snn(r.name)) continue;
      try {
        let i = await bGe(e, r);
        if (i.isSymbolicLink && F(i.linkTarget ?? (await D(S(e, r.name))))) return "live";
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
var Ye = new Set([".ds_store", "thumbs.db", "desktop.ini", "icon\r"]);
function qe(e) {
  let n = gP(e);
  return Ye.has(n) || n.startsWith("._");
}
function Ve(e) {
  return pNt.has(e);
}
async function rDt(e, n) {
  let r = n.replace(/[\\/]+$/, "") + O;
  try {
    for (let i of await R(e, {
      withFileTypes: !0
    })) {
      if (Ve(i.name)) continue;
      let o;
      try {
        let a = await bGe(e, i);
        if (a.isFile && (qe(i.name) || nsn(i.name, pNt))) continue;
        if (!a.isSymbolicLink) return !0;
        o = a.linkTarget ?? (await D(S(e, i.name)));
      } catch (error) {
        if (k(error) === "ENOENT") continue;
        return !0;
      }
      if (!F(o) || C$(o) || Sv(o) || !o.startsWith(r)) return !0;
    }
    return !1;
  } catch (error) {
    let o = k(error);
    return o !== "ENOENT" && o !== "ENOTDIR";
  }
}
async function AOs(e) {
  try {
    return EPr().parse(JSON.parse(await W(S(e, Hft)))).target;
  } catch {
    return;
  }
}
var Je = 16384;
async function W(e) {
  let n = await pe(e);
  if (!n.isFile() || n.size > Je) throw new Yl("The link-farm marker is not a small regular file; refusing to read it.", "plugin command source link marker not a small regular file");
  return Me(e, "utf8");
}
function $ie(e) {
  return typeof e === "object" && e.source === "command" ? e : void 0;
}
function sX(e) {
  return $ie(e)?.mode === "link";
}
async function xOs(e, n, r, i) {
  if (xl()) throw new Yl("A tool server doesn't run a plugin's command on its own. The plugin was not installed or updated and its command was not run.", "plugin command source not started by a tool server daemon");
  if (gO()) throw M9e(), new Yl(CX(), v_() === "unanswered" ? "plugin command source held for the organization answer" : "plugin command source disabled by managed policy");
  if (e.mode === "link" && I() === "windows") throw new Yl(nDt, "plugin command source link mode unsupported on windows");
  return ze(e, i), po("plugin_command_install", async () => {
    let producerDirectory = await Be(e);
    if (Ym(producerDirectory, ke(), {
      foldCase: !0
    })) throw new Yl(`Plugin source command printed the working directory or one of its parents (${Rt(producerDirectory, 300)}); refusing to use it as a plugin.`, "plugin command source printed cwd or an ancestor");
    if (k9e(producerDirectory), e.mode === "link") return {
      contentSha256: await We(producerDirectory, n),
      producerDirectory: producerDirectory
    };
    return await fe(producerDirectory), await r(producerDirectory, n), await qvo(n, {
      keepGit: !1
    }), {
      contentSha256: await Ke(n),
      producerDirectory: producerDirectory
    };
  });
}
import { homedir as Ze } from "os";
var timeout = 1e4,
  maxBuffer = 1e6;
function tt(e) {
  if (vm(e)) return !0;
  return (e === void 0 || e === Ze()) && iP() && YTe();
}
async function AWn(e) {
  if (e.isRepoResidentConfig && !tt(e.repoResidentOrigin)) return {
    ok: !1,
    reason: "missing_trust"
  };
  let n = await ct(e.command, [], {
    shell: !0,
    timeout: timeout,
    maxBuffer: maxBuffer,
    cwd: e.cwd,
    env: nt(e),
    extendEnv: !1
  });
  if (n.code !== 0 || !n.stdout) return {
    ok: !1,
    reason: "exec_failed"
  };
  let r;
  try {
    r = J(n.stdout.trim());
  } catch {
    return {
      ok: !1,
      reason: "parse_failed"
    };
  }
  if (!N(r)) return {
    ok: !1,
    reason: "non_object"
  };
  let headers = {};
  for (let [o, a] of Object.entries(r)) {
    if (typeof a !== "string") return {
      ok: !1,
      reason: "non_string_value"
    };
    headers[o] = a;
  }
  return {
    ok: !0,
    headers: headers
  };
}
function nt(e) {
  let n = {
    ...ss()
  };
  if (!e.scrubCredentialEnv) return {
    ...n,
    ...e.env
  };
  let r = [];
  for (let c of ZEe()) {
    let s = process.env[c] ?? n[c];
    if (s !== void 0 && s !== "") r.push(s);
    delete n[c];
  }
  let env_2 = process.env,
    o = {};
  for (let c of new Set([...Object.keys(n), ...Object.keys(env_2)])) o[c] = env_2[c] ?? n[c];
  for (let c of Vge(o).lostCredential) {
    let s = o[c];
    if (s !== void 0 && s !== "") r.push(s);
  }
  Object.assign(n, Vge(n).respelled), r.sort((itemA, itemB) => itemB.length - itemA.length);
  let a = {};
  for (let [c, s] of Object.entries(e.env ?? {})) a[c] = r.reduce((acc, item) => acc.split(item).join("REDACTED"), s);
  return {
    ...n,
    ...a
  };
}
var oK = {
  wait: void 0,
  ask: void 0,
  fetches: void 0
};
function oDt() {
  let organizationAsk = Ne().organizationAsk;
  return organizationAsk.asking ??= Promise.resolve().then(() => oK.wait?.()).then(() => v_() === "unanswered" ? oK.ask?.() : void 0).catch(l).finally(() => {
    organizationAsk.asking = null;
  }), organizationAsk.asking;
}
var pJs = 30000;
var hRr = 3000;
function yRr(e) {
  let organizationAsk_2 = Ne().organizationAsk;
  return organizationAsk_2.answerWait ??= je(oDt(), hRr, e).then(() => {}), organizationAsk_2.answerWait;
}
var maxContentLength = 268435456,
  sDt = 5242880,
  timeout_2 = 120000,
  Kvo = "Claude-Code-Plugin-Manager";
async function POs(e, n = {}) {
  if (!T$r(e)) throw new x(`${E$r}: ${G_(e)}`, "plugin archive URL policy rejected");
  let r = G_(e);
  t(`Downloading plugin archive from ${r}`);
  let i = n.headers ?? {},
    headers_2 = {
      ...i,
      "User-Agent": Kvo
    },
    a = fW(e) ? sK.get : sl.get,
    c = performance.now(),
    data;
  try {
    let f = await a(e, {
      timeout: timeout_2,
      responseType: "arraybuffer",
      maxRedirects: 5,
      maxContentLength: maxContentLength,
      headers: headers_2,
      beforeRedirect: lt(e, Yvo(i))
    });
    yM("plugin_archive", e, "success", performance.now() - c), data = Buffer.from(f.data);
  } catch (error) {
    yM("plugin_archive", e, "failure", performance.now() - c, iK(error));
    let h = Qvo(error);
    if (h) throw h;
    throw new x(dt(error, e, r), "plugin archive download failed");
  }
  let contentSha256 = at("sha256").update(data).digest("hex");
  if (n.sha256 && n.sha256.toLowerCase() !== contentSha256) throw new x(`Plugin archive integrity check failed for ${r}: expected sha256 ${n.sha256.toLowerCase()}, got ${contentSha256}. The archive was not installed. Verify the sha256 in the marketplace entry, or that the URL serves the intended file.`, "plugin archive sha256 mismatch");
  return {
    data: data,
    contentSha256: contentSha256
  };
}
function Yvo(e) {
  return Object.keys(e ?? {}).filter(item => item.toLowerCase() !== "user-agent");
}
function Ee(e, n, r = "plugin archive") {
  let i = new Set(n.map(item => item.toLowerCase()));
  return o => {
    if (i.size === 0 || !o.headers) return;
    let a = hze(o);
    if (a && Jle(e, a)) return;
    let c = 0;
    for (let s of Object.keys(o.headers)) if (i.has(s.toLowerCase())) delete o.headers[s], c++;
    if (c > 0) t(`Fetch of ${r} redirected to a different origin; dropped inherited marketplace headers`);
  };
}
function lt(e, n) {
  let r = Ee(e, n);
  return i => {
    let o = hze(i);
    if (!T$r(o)) throw new x("Plugin archive redirected to a disallowed URL and was refused \u2014 " + `every hop must satisfy the archive URL policy (${E$r.replace(/^Archive URLs must /, "")}): ` + (o ? G_(o) : "(unparseable redirect target)"), "plugin archive redirect policy rejected");
    r(i);
  };
}
function OOs(e, n) {
  let r = Ee(e, n, "marketplace catalog");
  return i => {
    let o = hze(i);
    if (!(o !== "" && (Jle(e, o) || o.toLowerCase().startsWith("https:") && !yne(Et(o))))) throw new x("Marketplace catalog redirected to a disallowed URL and was refused \u2014 " + "a server-chosen cross-origin redirect must use https:// and must not point at a loopback, link-local, or cloud-metadata host (only a hop that stays on the origin you started from is exempt): " + (o ? G_(o) : "(unparseable redirect target)"), "marketplace catalog redirect policy rejected");
    r(i);
  };
}
function dt(e, n, r) {
  let i = o => o.replaceAll(n, () => r);
  if (Rc(e)) {
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
function dOe(e) {
  return typeof e.headersHelper === "string" && e.headersHelper !== "";
}
var xWn = {
  unshown: "entry_helper_unshown",
  command: "entry_helper_changed",
  archive_url: "entry_archive_url_changed"
};
function vnn(e, archiveUrl) {
  let {
    entry: entry
  } = e;
  return dOe(entry) && entry.headersHelper !== void 0 && (!e.requireInlinedManifest || entry.strict === !1) ? {
    command: entry.headersHelper,
    archiveUrl: archiveUrl
  } : null;
}
function PWn(e, n) {
  if (e === void 0 || e === null) return n === null ? null : "unshown";
  if (n === null) return null;
  if (e.command !== n.command) return "command";
  if (_e(n.archiveUrl) !== _e(e.archiveUrl)) return "archive_url";
  return null;
}
function _e(e) {
  let n = zmn(e);
  return n === null ? e : pme(n);
}
function knn(e, n = "lockdown") {
  let r = Ge(e);
  if (n === "organization_unanswered") return `"${r}" fetches its archive through a marketplace-declared headersHelper command, which was not run: your organization's settings haven't been read, so it isn't known whether it allows such commands. The plugin was not installed or updated. It can be once your organization's settings are read, if it allows them.`;
  if (n === "remote_policy_unconsented") return `"${r}" fetches its archive through a headersHelper command that was not run: ${eVn}. The plugin was not installed or updated.`;
  return `"${r}" fetches its archive through a marketplace-declared headersHelper command, and your organization's managed settings disable marketplace-declared commands (disableCommandPluginSources / allowManagedHooksOnly). The plugin was not installed or updated and the command was not run; ` + (Z2n() ? "ask your admin to allow it or to declare the marketplace in managed settings." : "ask your admin to allow it.");
}
function Enn(e) {
  switch (e) {
    case "remote_policy_unconsented":
      return "entry_helper_remote_policy_unconsented";
    case "organization_unanswered":
      return "entry_helper_organization_unanswered";
    case "lockdown":
      return "entry_helper_disabled_by_policy";
  }
}
var ut = {
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
function pt(e) {
  return Xvo[e] === "sad";
}
var Xvo = {
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
function g8e(e) {
  if (e instanceof Eee) return {
    code: e.failureCode,
    kind: pt(e.failureCode) ? "sad" : "bad"
  };
  return {
    code: "command_source_refused",
    kind: "sad"
  };
}
class Eee extends Yl {
  failureCode;
  constructor(e, n) {
    super(e, ut[n]);
    this.failureCode = n;
  }
}
function OWn(e, n, r) {
  let i = Ge(n),
    o = r === "update" ? "Review the command now shown, then update again." : "Reopen its details in /plugin to review it, then install again.";
  if (e === "unshown") return r === "update" ? `This update would run a headersHelper command for "${i}" that was not shown on this pane. ${o}` : `This install would run a headersHelper command for "${i}" that was not shown to you first. Retry the same install to review the command before it runs.`;
  return e === "command" ? `The headersHelper command for "${i}" changed since it was shown. ${o}` : `The archive URL for "${i}" changed since its headersHelper command was shown. ${o}`;
}
function vBe(e) {
  let n = e.trustedSettingsEntryAuth !== void 0 && e.trustedSettingsEntryAuth.origin !== "settings" && e.marketplaceSource?.source !== "settings" ? void 0 : e.trustedSettingsEntryAuth;
  if (n !== void 0) {
    let operatorAuthored = n.origin === "settings";
    if (!kt(n.archiveUrl, e.archiveUrl)) return {
      entry: {},
      operatorAuthored: operatorAuthored,
      requireInlinedManifest: !1
    };
    if (n.headersHelper !== void 0 && n.operatorTier === "policySettings" && !jft()) throw new Eee(`This plugin's headersHelper was not run: ${eVn}.`, "entry_helper_remote_policy_unconsented");
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
async function IWn(e, n) {
  if (e?.source !== "url") return {};
  let trustedDeclaration = n.trustedDeclaration,
    i = `marketplace ${Ge(n.marketplaceName ?? G_(e.url))}`,
    o = (f, h) => MWn(f, `${i} (${h})`, {
      operatorAuthored: trustedDeclaration?.operatorAuthored === !0
    }),
    a = o(trustedDeclaration ? {
      ...trustedDeclaration.headers
    } : {
      ...e.headers
    }, trustedDeclaration ? trustedDeclaration.operatorAuthored ? "operator declaration" : "repo-tier declaration" : "state copy");
  if (trustedDeclaration?.headersHelper === void 0) return a;
  if (!/^https:\/\//i.test(e.url)) return t(`${i}: headersHelper not run \u2014 marketplace URL is not https`, {
    level: "warn"
  }), a;
  if (xl()) throw new Yl(`${i}: a tool server doesn't run a marketplace's headersHelper on its own: the command was not run and the marketplace was not fetched.`, "marketplace headersHelper not started by a tool server daemon");
  if (v_() === "unanswered") await yRr();
  if (v_() === "unanswered") throw M9e("marketplace"), new Yl(`${i}: your organization's settings haven't been read, so it isn't known whether it allows marketplace-declared commands. This marketplace's headersHelper is one: the command was not run and the marketplace was not fetched. It can be fetched once your organization's settings are read, if it allows them.`, "marketplace headersHelper held for the organization answer");
  if (trustedDeclaration.authoredBy === "policySettings" && !jft()) throw p("plugin_headers_helper", "remote_policy_unconsented"), new Yl(`${i}: headersHelper not run \u2014 ${eVn}. The marketplace was not fetched.`, "marketplace headersHelper from remote managed settings not yet verified and approved for the session");
  let c = Z2n(),
    s = trustedDeclaration.authoredBy === "policySettings" && c;
  if (gO() && !s) throw new Yl(`${i}: your organization's managed settings disable marketplace-declared commands (disableCommandPluginSources / allowManagedHooksOnly), ` + (c ? "and this marketplace's headersHelper is not declared in managed settings. The marketplace was not fetched and the command was not run; ask your admin to allow it or to declare the marketplace in managed settings." : "and in this session a declaration in managed settings does not exempt a headersHelper. The marketplace was not fetched and the command was not run; ask your admin to allow it."), "marketplace headersHelper disabled by managed policy");
  if (!B()) return t(`${i}: headersHelper not run \u2014 disabled by the plugin command kill switch`, {
    level: "warn"
  }), a;
  let u = await gt(trustedDeclaration.headersHelper, e.url, n.marketplaceName, trustedDeclaration.operatorAuthored);
  return {
    ...a,
    ...o(u, "helper output")
  };
}
var mt = 60000;
async function gt(e, n, r, i) {
  let o = `${e}\x00${n}\x00${r ?? ""}\x00${i ? "operator" : "repo"}`,
    a = Date.now(),
    {
      marketplaceHelperMemo: marketplaceHelperMemo
    } = Ne(),
    s = marketplaceHelperMemo.get(o);
  if (s && s.expiresAt > a) return s.headers;
  let headers_3 = ht(e, n, r, i);
  marketplaceHelperMemo.set(o, {
    expiresAt: a + mt,
    headers: headers_3
  });
  try {
    return await headers_3;
  } catch (error) {
    throw marketplaceHelperMemo.delete(o), error;
  }
}
async function ht(command, CLAUDE_CODE_MARKETPLACE_URL, CLAUDE_CODE_MARKETPLACE_NAME, i) {
  let o = await AWn({
    command: command,
    scrubCredentialEnv: !i,
    isRepoResidentConfig: !1,
    cwd: Pe(),
    env: {
      CLAUDE_CODE_MARKETPLACE_URL: CLAUDE_CODE_MARKETPLACE_URL,
      ...(CLAUDE_CODE_MARKETPLACE_NAME !== void 0 && {
        CLAUDE_CODE_MARKETPLACE_NAME: CLAUDE_CODE_MARKETPLACE_NAME
      })
    }
  });
  if (!o.ok) throw m("plugin_headers_helper", o.reason), new x(`marketplace headersHelper failed (${o.reason})`, "marketplace headers helper failed");
  return g("plugin_headers_helper"), o.headers;
}
async function ft(e, n) {
  let r = a => MWn(a, `plugin ${Ge(n.pluginName)}`, {
      operatorAuthored: n.operatorAuthored === !0
    }),
    i = r(e.headers ?? {});
  if (!dOe(e) || e.headersHelper === void 0) return i;
  Se(e, {
    ...n,
    disabledByPolicy: zOe(n.marketplaceSource, n.marketplaceName)
  });
  let o = await AWn({
    command: e.headersHelper,
    scrubCredentialEnv: !n.operatorAuthored,
    cwd: Pe(),
    isRepoResidentConfig: !1,
    env: {
      CLAUDE_CODE_PLUGIN_NAME: n.pluginName,
      CLAUDE_CODE_PLUGIN_ARCHIVE_URL: n.archiveUrl
    }
  });
  if (!o.ok) throw m("plugin_headers_helper", o.reason), new x(`plugin headersHelper for "${X(n.pluginName)}" failed (${o.reason})`, "plugin headers helper failed");
  return g("plugin_headers_helper"), {
    ...i,
    ...r(o.headers)
  };
}
var wt = new Set(["host", "cookie", "forwarded", "x-real-ip", "x-client-ip", "true-client-ip", "client-ip", "cf-connecting-ip", "fastly-client-ip", "x-originating-ip", "x-remote-ip", "x-remote-addr", "x-cluster-client-ip", "connection", "upgrade", "transfer-encoding", "content-length", "te", "trailer", "expect", "via"]),
  yt = ["x-forwarded-", "x-original-", "proxy-"],
  _t = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;
function Jvo(e) {
  let n = e.toLowerCase().replaceAll("_", "-");
  return wt.has(n) || yt.some(item => n.startsWith(item));
}
function MWn(e, n, {
  operatorAuthored: operatorAuthored_2 = !1
} = {}) {
  let i = {};
  for (let [o, a] of Object.entries(e)) {
    if (!_t.test(o) || /[\r\n\0]/.test(a)) {
      t(`Dropping header "${Ge(o)}" for ${n}: malformed name or value`, {
        level: "warn"
      });
      continue;
    }
    if (!operatorAuthored_2 && Jvo(o)) {
      t(`Dropping header "${Ge(o)}" for ${n}: request-routing/identity headers are not accepted from non-operator sources`, {
        level: "warn"
      });
      continue;
    }
    i[o] = a;
  }
  return i;
}
function X(e) {
  return Ge(e);
}
function Se(e, n) {
  if (n.disabledByPolicy !== null) {
    if (n.disabledByPolicy === "organization_unanswered") M9e();
    throw new Eee(knn(n.pluginName, n.disabledByPolicy), Enn(n.disabledByPolicy));
  }
  if (n.requireInlinedManifest !== !1 && e.strict !== !1) throw new Eee(`Plugin "${X(n.pluginName)}" declares a headersHelper but is not strict:false \u2014 an entry with headersHelper must inline its manifest so its capabilities can be reviewed before the command runs.`, "entry_helper_not_inlined");
  if (!n.runEntryHelper) throw new Eee(`Plugin "${X(n.pluginName)}" fetches its archive through a headersHelper, ` + "which only runs when you install or update it from its own details view \u2014 open this plugin in /plugin (or run `claude plugin install`/`update`), where the command is shown first.", "entry_helper_deferred");
}
async function iDt(e) {
  if (typeof e.pluginSource !== "object" || e.pluginSource.source !== "archive") return;
  let n = e.pluginSource.url,
    {
      entry: entry_2,
      operatorAuthored: operatorAuthored_3,
      requireInlinedManifest: requireInlinedManifest
    } = vBe({
      entry: e.entry,
      archiveUrl: n,
      marketplaceSource: e.marketplaceSource,
      trustedSettingsEntryAuth: e.trustedSettingsEntryAuth
    }),
    a = e.marketplaceSource?.source === "url" ? e.marketplaceSource.url : void 0,
    disabledByPolicy = zOe(e.marketplaceSource, e.marketplaceName);
  if (dOe(entry_2)) Se(entry_2, {
    pluginName: e.pluginName,
    runEntryHelper: e.runEntryHelper,
    requireInlinedManifest: requireInlinedManifest,
    operatorAuthored: operatorAuthored_3,
    disabledByPolicy: disabledByPolicy
  });
  let s = a !== void 0 && Jle(a, n) ? await IWn(e.marketplaceSource, {
      marketplaceName: e.marketplaceName,
      trustedDeclaration: e.trustedMarketplaceAuth
    }) : {},
    u = await ft(entry_2, {
      pluginName: e.pluginName,
      archiveUrl: n,
      runEntryHelper: e.runEntryHelper,
      requireInlinedManifest: requireInlinedManifest,
      operatorAuthored: operatorAuthored_3,
      marketplaceSource: e.marketplaceSource,
      marketplaceName: e.marketplaceName
    }),
    headers_4 = {
      ...s,
      ...u
    };
  if (Object.keys(headers_4).length === 0) return;
  return {
    url: n,
    headers: headers_4
  };
}
function cOe(e, n) {
  let r = RS(e);
  return r ? n[r]?.source : void 0;
}
function RS(e) {
  let n = e.split("@");
  return n.length === 2 && n[1] ? n[1] : void 0;
}
function kt(e, n) {
  return pme(e) === pme(n);
}
function Et(e) {
  try {
    return new URL(e).hostname;
  } catch {
    return "";
  }
}
function Qvo(e) {
  let n = e;
  for (let r = 0; r < 5 && n instanceof Error; r++) {
    if (n instanceof x) return n;
    n = n.cause;
  }
  return;
}
export { ynn, Af, lOe, Z0t, eDt, ipt, apt, _nn, fRr, TOs, tDt, m8e, lpt, wBe, Vvo, regExp as mRr, regExp_2 as COs, nDt, _H, bnn, Yl, ROs, qvo, Snn, wnn, gRr, rDt, AOs, $ie, sX, xOs, AWn, oK, oDt, pJs, hRr, yRr, maxContentLength as Cve, sDt, Kvo, POs, Yvo, OOs, dOe, xWn, vnn, PWn, knn, Enn, Xvo, g8e, Eee, OWn, vBe, IWn, Jvo, MWn, iDt, cOe, RS, Qvo };