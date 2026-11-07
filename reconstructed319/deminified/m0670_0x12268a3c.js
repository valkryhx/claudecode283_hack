// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Na, v, fe } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { De } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { H } from "B:/~BUN/root/chunk-game8aqv.js";
import { b, f, de } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { d, k, tr, db, Jwt, Qwt } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { J, we } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { t, _, ee, ds } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Q, Pa, D5, Yr } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { pe } from "B:/~BUN/root/chunk-thn0wk2x.js";
import { ov, ywe, RT } from "B:/~BUN/root/chunk-1w2vha2y.js";
import { Zte, z1s } from "B:/~BUN/root/chunk-0w2htvr6.js";
import { _nt, Jte } from "B:/~BUN/root/chunk-t4qpmjt5.js";
import { snt, Hc, u1s, f1s, ct } from "B:/~BUN/root/chunk-bkfncj77.js";
import { Jo, Kan } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { Se } from "B:/~BUN/root/chunk-x24hm796.js";
import { nb, _n } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { yd, PU } from "B:/~BUN/root/chunk-xqymp2nr.js";
import { OU } from "B:/~BUN/root/chunk-pzs4x0zd.js";
import { D9e, L9e, bio, py } from "B:/~BUN/root/chunk-fc7k1zas.js";
import { CA, am, Mp, pU, rCs, oCs, Jht, r4 } from "B:/~BUN/root/chunk-ht2sp6s6.js";
import { zc, r_e } from "B:/~BUN/root/chunk-wt8tyqt4.js";
import { hEt, $hn, yEt } from "B:/~BUN/root/chunk-cp9bs6ky.js";
import { Iy } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { rit, eF, eQ, PTt, r_n, KJn, nKt, FT, o6e } from "B:/~BUN/root/chunk-0s4jbh2t.js";
import { Rfo, yA, PHi, P0n, S_s as reason, nue } from "B:/~BUN/root/chunk-8qv1t8b3.js";
import { sOn, xut } from "B:/~BUN/root/chunk-nw79m6g4.js";
import { Vu, $Pn, zIt, xye, VIt, BXt, but, UPn, Sut, wut, zls, Phr, Gls, U9e, vut, Ohr, tce, No, ic, Td, Fo, qPn } from "B:/~BUN/root/chunk-4vcs773m.js";
import { t_ } from "B:/~BUN/root/chunk-4f7cx6fw.js";
import { J8n as carriedPromptsFormat } from "B:/~BUN/root/chunk-sbp8fbqp.js";
import { Y8n, UUo, agn, sOe, lgn, X8n } from "B:/~BUN/root/chunk-75drs7xs.js";
import { kK, bB } from "B:/~BUN/root/chunk-pnm80mz6.js";
import { Dse } from "B:/~BUN/root/chunk-tjfmeakx.js";
import { hK } from "B:/~BUN/root/chunk-wcj4tqqj.js";
import { MGt, VN } from "B:/~BUN/root/chunk-qxtmkh4q.js";
import { gHi, k0t } from "B:/~BUN/root/chunk-5gm1xyqv.js";
import { re } from "B:/~BUN/root/chunk-xkw95p5n.js";
import { bot, Sot } from "B:/~BUN/root/chunk-b522n0qj.js";
import { l8 } from "B:/~BUN/root/chunk-djnp90dd.js";
import { Mk } from "B:/~BUN/root/chunk-y8c6wwat.js";
import { lr } from "B:/~BUN/root/chunk-75wha2r5.js";
import { nTn } from "B:/~BUN/root/chunk-t1tr39xg.js";
import { Rx, wb } from "B:/~BUN/root/chunk-1b2nf93s.js";
import { Mee } from "B:/~BUN/root/chunk-xdzcgcjh.js";
import { Sa } from "B:/~BUN/root/chunk-63176a0t.js";
import { ce } from "B:/~BUN/root/chunk-w7vsj9wa.js";
import { gme } from "B:/~BUN/root/chunk-tr26qctc.js";
import { $a } from "B:/~BUN/root/chunk-12nc74pv.js";
import { Of } from "B:/~BUN/root/chunk-bvb659eh.js";
import { Oe } from "B:/~BUN/root/chunk-4qfwb3rf.js";
var Ne = Oe(nb(), 1);
import { lstat as Nr, readFile as Lr, realpath as Mr, rm as Be } from "fs/promises";
import { dirname as Fe } from "path";
import { setTimeout as Ie } from "timers/promises";
import { access as Ft, readFile as Ht, stat as Ke } from "fs/promises";
import { homedir as Wt } from "os";
import { join as Me } from "path";
var serviceId = "com.anthropic.claude-daemon";
async function _ot() {
  return !1;
}
function DNo() {
  if (!Of()) return process.argv[1];
  return Me(Mee(), "claude");
}
function Ut() {
  let r = i.XDG_CONFIG_HOME || Me(Wt(), ".config");
  return Me(r, "systemd", "user", `${serviceId}.service`);
}
async function at() {
  return !1;
}
async function $pn(r) {
  let {
      jsonPath: jsonPath,
      logPath: logPath
    } = r,
    p = await Jht();
  if (p) return {
    ok: !1,
    error: `${p} \u2014 refusing to install a service that would run unwrapped`,
    serviceId: serviceId,
    servicePath: ""
  };
  let u = [...am(), DNo()],
    h = i.PATH || "/usr/local/bin:/usr/bin:/bin";
  return {
    ok: !1,
    error: `service install not available on ${"win32"} \u2014 the daemon runs on demand instead`,
    serviceId: serviceId,
    servicePath: ""
  };
}
async function nGt() {
  return {
    ok: !1,
    error: "service uninstall not available on win32"
  };
}
async function bjr() {
  return ze("start");
}
async function Upn() {
  return ze("stop");
}
async function a5s() {
  return ze("restart");
}
async function ze(r) {
  if (!1) switch (r) {
    case "start":
    case "stop":
    case "restart":
  }
  return {
    ok: !1,
    error: `service ${r} not available on ${"win32"} \u2014 the daemon runs on demand instead`
  };
}
async function jt() {
  return null;
}
function it(r) {
  return r.replaceAll("%%", "%");
}
async function Sjr() {
  let r = {
      execPathStale: !1,
      launcherPrefixDead: !1
    },
    e = await jt();
  if (!e) return r;
  let o = e.lastIndexOf("daemon"),
    p = o > 0 ? e[o - 1] : void 0;
  if (!p) return r;
  try {
    await Ft(it(p));
  } catch {
    r.execPathStale = !0;
  }
  let u = e.slice(0, o - 1).map(it);
  for (let h of oCs(u)) if (!(await rCs(h))) {
    r.launcherPrefixDead = !0;
    break;
  }
  return r;
}
async function EPe() {
  return !1;
}
class st {
  daemonConfirmedUp = !1;
  ensureInFlight = null;
  lastTransientSpawnAt = null;
  prefixAxis = "idle";
  prefixContractViolationLogged = !1;
  tmuxRgbApplied = !1;
  ownedBeacons = new Map();
  reset() {
    this.daemonConfirmedUp = !1, this.ensureInFlight = null, this.lastTransientSpawnAt = null, this.prefixAxis = "idle", this.prefixContractViolationLogged = !1, this.tmuxRgbApplied = !1, this.ownedBeacons.clear();
  }
}
var Vt = new W(() => new st());
function Dj() {
  return Vt.of(H().host);
}
import { setTimeout as Gt } from "timers/promises";
var Ye = 120000,
  lt = 5000,
  dt = 5000;
function Xe(r) {
  let e = {
    ...r,
    childExit: null,
    childExitAt: null,
    stderr: null,
    budgetExtended: !1,
    nextLivenessProbeAt: r.spawnIssuedAt + lt,
    siblingHolderSeen: !1
  };
  return r.child?.exited.then(o => {
    e.childExit = o, e.childExitAt = Date.now();
  }), e;
}
async function ut(r, e) {
  let childExit = r.childExit;
  if (!childExit || r.siblingHolderSeen) return !1;
  if (childExit.code === 0 && childExit.signal === null) return !1;
  if (!lgn(e)) return !1;
  switch (await UUo(e)) {
    case "missing":
    case "fresh_stub":
      return !0;
    case "stale_stub":
      return !1;
    case "present":
      return (await $e(r)).includes(nTn);
  }
}
function ft(r) {
  if (r.trim().length === 0) return;
  if (r.includes(nTn)) return b("npm_stub");
  if (/current working directory was deleted|uv_cwd|getcwd/i.test(r)) return b("cwd_deleted");
  if (/launchctl|Could not switch to audit session|posix_spawn/.test(r)) return b("launchctl");
  if (/Cannot find module|MODULE_NOT_FOUND|Module not found/.test(r)) return b("module_not_found");
  if (/dyld|Segmentation fault|Illegal instruction|Abort trap|Killed: 9|panic|bun has crashed|^error: /im.test(r)) return b("runtime");
  if (/^\s*(claude|Claude Code|daemon|bg manager)\b/im.test(r)) return b("claude_error");
  return b("other");
}
async function $e(r, e = !1) {
  if (r.stderr === null || e) r.stderr = r.stderrPath ? ((await yd(r.stderrPath, 1048576)) ?? "").slice(0, 2000) : "";
  return r.stderr;
}
async function qe(r) {
  let childExit_2 = r.childExit;
  if (!childExit_2 || r.siblingHolderSeen) return !1;
  if (!r.budgetExtended) {
    if ((await $e(r)).trim().length === 0) return !1;
    if (r.wrapperConfigured && childExit_2.code === 0 && childExit_2.signal === null) return !1;
  }
  let o = await pt(r, PTt);
  if (o !== !1) return r.siblingHolderSeen = o === !0, !1;
  return !0;
}
async function Re(r, e, o) {
  let p = e;
  while (!0) {
    if (await qe(r)) return !1;
    if (Date.now() >= p) return !1;
    if ((await t_({
      proto: Vu,
      op: "ping"
    })).ok) return !0;
    if (o && Date.now() >= r.nextLivenessProbeAt) {
      r.nextLivenessProbeAt = Date.now() + lt;
      let w = await pt(r, 1);
      if (!r.budgetExtended && w === !0) r.budgetExtended = !0, p = Math.max(p, r.spawnIssuedAt + Ye);else if (r.budgetExtended && w === !1 && Date.now() >= e) return !1;
    }
    await Gt(100);
  }
}
async function pt(r, e) {
  let o;
  try {
    o = await FT(e, r.storageV5);
  } catch {
    return null;
  }
  return o !== null && !o.bgDisabled && o.startedAt >= r.spawnIssuedAt - dt;
}
async function mt(r) {
  let e;
  try {
    e = await eQ(r.storageV5);
  } catch {
    return {
      lock_at_deadline: b("unreadable")
    };
  }
  if (!e) return {
    lock_at_deadline: b("absent")
  };
  let o = {
    holder_age_ms: Math.max(0, Date.now() - e.startedAt),
    holder_version_skew: e.version !== {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.319",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-11-05T18:14:18Z",
      GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION
  };
  if (r.child?.pid !== void 0 && e.pid === r.child.pid || e.startedAt >= r.spawnIssuedAt - dt) return {
    lock_at_deadline: b("self_child"),
    ...o
  };
  try {
    process.kill(e.pid, 0);
  } catch (error) {
    if (k(error) !== "EPERM") return {
      lock_at_deadline: b("other_dead"),
      ...o
    };
    return {
      lock_at_deadline: (await KJn(e)) ? b("other_eperm_stale") : b("other_eperm"),
      ...o
    };
  }
  return {
    lock_at_deadline: (await r_n(e.pid, PU(e), 1).catch(() => !1)) ? b("other_alive") : b("other_dead"),
    ...o
  };
}
import { randomBytes as yr } from "crypto";
import { unlink as vt } from "fs/promises";
import { createServer as vr } from "net";
import { StringDecoder as xr } from "string_decoder";
function eYe(r, e) {
  let o = r.trimStart();
  return Mk(o) !== "prompt" || o.startsWith("/") || e?.tempo === "blocked" && (e.block?.questions.length ?? 0) > 0;
}
function pvt(r) {
  return r.queuedPrompt !== void 0 && eYe(r.queuedPrompt, null) ? void 0 : r.queuedPrompt;
}
function LNo(r, e) {
  return r === e || r.endsWith(`

${e}`);
}
async function Kme(r, e, o, p, u) {
  if (eYe(o, null)) return !1;
  let h = u ? pvt(e) : void 0;
  return ic(r, {
    ...e,
    queuedPrompt: !h ? o : LNo(h, o) ? h : `${h}

${o}`,
    updatedAt: new Date().toISOString()
  }, p).then(() => !0, w => (Td(w), !1));
}
var gt = /\x1b\[(?:<\d+;\d+;\d+[Mm]|M[\s\S]{3}|I|O|\??\d+;\d+(?:;\d+)*R|[?>]\d+(?:;\d+)*c|\?\d+(?:;\d+)*\$y|\?997;[12]n|\?\d+u)|\x1bP[^\x1b]*\x1b\\|\x1b\][^\x07\x1b]*(?:\x07|\x1b\\)/g;
function ht(r) {
  if (!r.includes("\x1B")) return !1;
  return r.replace(gt, "").length === 0;
}
var Kt = "\x1B[<",
  zt = /^(\d+);\d+;\d+[Mm]/,
  Yt = 96;
function wt(r) {
  return r.split(Kt).slice(1).some(item => {
    let o = zt.exec(item)?.[1];
    return o !== void 0 && (Number(o) & Yt) === 0;
  });
}
var Xt = 64,
  qt = /^\x1b(?:$|\[(?:[<?>]?\d*(?:;\d*)*\$?|M[\s\S]{0,2})$|P(?:$|[>01][^\x1b]*\x1b?$)|\](?:$|\d[^\x07\x1b]*\x1b?$))/;
function i5s() {
  let r = "";
  return e => {
    let o = r + e;
    if (r = "", !o.includes("\x1B")) return !1;
    let p = o.replace(gt, "");
    if (p.length === 0) return !0;
    if (p.length <= Xt && qt.test(p)) return r = p, !0;
    return !1;
  };
}
import { closeSync as Jt, lstatSync as Qt, openSync as Zt, readSync as er } from "fs";
var _t = 262144,
  rr = 32768,
  nr = 200,
  or = 4096,
  ir = 50;
function ar(r) {
  let e = 0,
    o = 0,
    p = 0;
  for (let u of r.split(`
`)) {
    let h = 0;
    while (h < u.length && (u[h] === ">" || u[h] === " ")) {
      if (u[h] === ">") p++;
      h++;
    }
    if (/^ {0,3}(?:=+|-+)\s*$/.test(u)) o++;
    for (let w = h; w < u.length; w++) {
      let S = u[w];
      if (S === "[") e++;else if (S === "]" && e > 0) e--;
    }
  }
  return e > 256 || o > 64 || p > 512;
}
var sr = "\x1B[2m",
  bt = "\x1B[0m",
  dr = 2,
  cr = "dark",
  pointer = re.pointer,
  ur = "  Session is starting \u2014 showing its transcript until it appears. Ctrl+Z to detach";
function fr(r) {
  if (!/[\x00-\x09\x0b-\x1f\x7f-\x9f]/.test(r)) return r;
  return $a(r).replace(/\t/g, "  ").replace(D5, "").replace(/[\v\f\r]/g, "");
}
var regExp = new RegExp(`(${snt(";")})`),
  regExp_2 = new RegExp(`^${snt(";")}$`),
  regExp_3 = new RegExp(regExp.source, "g");
function gr(r) {
  if (!r.includes("\x1B")) return r;
  let e = "",
    o = 0;
  while (o < r.length) {
    let p = r.indexOf("\x1B", o);
    if (p < 0) {
      e += r.slice(o);
      break;
    }
    e += r.slice(o, p);
    let u = r[p + 1];
    if (u === "[") {
      let h = p + 2;
      while (h < r.length) {
        let w = r.charCodeAt(h);
        if (w >= 64 && w <= 126) {
          let S = r.slice(p, h + 1);
          if (regExp_2.test(S)) e += S;
          h++;
          break;
        }
        if (w < 32 || w > 63) break;
        h++;
      }
      o = h;
    } else if (u === "]" || u === "P" || u === "X" || u === "^" || u === "_") {
      let h = p + 2,
        w = r.length;
      while (h < r.length) {
        if (u === "]" && r.charCodeAt(h) === 7) {
          w = h + 1;
          break;
        }
        if (r.charCodeAt(h) === 27 && r[h + 1] === "\\") {
          w = h + 2;
          break;
        }
        h++;
      }
      o = w;
    } else if (u === void 0) o = r.length;else o = p + 2;
  }
  return e;
}
var hr = 128;
function wr(r) {
  let e = r.filter(item => item !== "").join(";");
  return e === "" || e.length > hr ? "" : `\x1B[${e}m`;
}
function _r(r, e) {
  if (ce(r) <= e) return [r];
  let o = [],
    p = "",
    u = 0,
    h = u1s();
  for (let w of r.split(regExp)) {
    if (w === "") continue;
    if (w.charCodeAt(0) === 27) {
      f1s(w, h), p += w;
      continue;
    }
    for (let {
      segment: segment
    } of Sa().segment(w)) {
      let E = segment.length === 1 && segment.charCodeAt(0) < 127 ? 1 : ce(segment);
      if (u > 0 && u + E > e) o.push(h.some(item => item !== "") ? p + bt : p), p = wr(h), u = 0;
      p += segment, u += E;
    }
  }
  return o.push(p), o;
}
function Je(r, e) {
  return Hc(r, e, {
    hard: !1,
    trim: !1
  }).split(`
`).flatMap(item => _r(item, e));
}
function Sr(r) {
  let e;
  try {
    e = ds(r);
  } catch {
    return [];
  }
  if (typeof e !== "object" || e === null) return [];
  let o = e;
  if (o.type !== "user" && o.type !== "assistant" || o.isSidechain === !0 || o.isMeta === !0) return [];
  let p = o.message?.content;
  if (typeof p === "string") {
    if (o.type === "user") return Et(Zte(p, o.pluginPrompt));
    let text = p.trim();
    return text === "" ? [] : [{
      role: "assistant",
      text: text
    }];
  }
  if (!Array.isArray(p)) return [];
  if (o.type === "user") {
    let S = [];
    for (let E of p) {
      let D = E;
      if (D?.type === "text" && typeof D.text === "string") S.push(D.text);
    }
    return Et(S.join(`
`));
  }
  let u = [],
    h = [],
    w = () => {
      let text_2 = h.join(`
`).trim();
      if (h = [], text_2 !== "") u.push({
        role: "assistant",
        text: text_2
      });
    };
  for (let S of p) {
    let E = S;
    if (E?.type === "text" && typeof E.text === "string") h.push(E.text);else if (E?.type === "tool_use" && typeof E.name === "string") {
      w();
      let D = "";
      if (typeof E.input === "object" && E.input !== null) {
        for (let R of Object.values(E.input)) if (typeof R === "string" && R !== "") {
          D = R;
          break;
        }
      }
      u.push({
        role: "tool",
        text: `${Dse(E.name)}(${D})`
      });
    } else if (E?.type === "thinking" && typeof E.thinking === "string" && E.thinking.trim() !== "") w(), u.push({
      role: "thinking",
      text: E.thinking
    });
  }
  return w(), u;
}
function Et(r) {
  let text_3 = gme(r).trim();
  if (text_3 === "") return [];
  let o = /^<bash-input>([\s\S]*?)<\/bash-input>/.exec(text_3);
  if (o) text_3 = `! ${o[1].trim()}`;else if (z1s.test(text_3)) return [];
  return [{
    role: "user",
    text: text_3
  }];
}
function Er(r, e) {
  return MGt(), gr(Iy.lexer(r).map(item => VN(item, e, {
    listDepth: 0,
    orderedListNumber: null,
    parent: null,
    highlight: hK(),
    linkCap: !1,
    windowed: !1
  })).join("")).trim();
}
function br(r, e, o, p) {
  let u = Math.max(1, e),
    h = p?.colorLevel ?? dr,
    w = p?.theme ?? cr,
    S = C => h > 0 && C !== "" ? sr + C + bt : C,
    E = C => Math.max(1, Math.ceil(ce(C) / u)),
    D = "\u2500".repeat(u),
    R = ["", D, pointer, D, ur],
    N = R.reduce((acc, item) => acc + E(item), 0),
    L = o - N;
  if (L < 1) return null;
  let B = Math.min(Math.ceil((L + 1) / 2), nr),
    j = r.split(`
`),
    M = [],
    Y = rr;
  e: for (let C = j.length - 1; C >= 0; C--) {
    let U = Sr(j[C]);
    for (let V = U.length - 1; V >= 0; V--) {
      if (M.length >= B) break e;
      let z = U[V];
      if (z.text.length > Y) {
        if (M.length === 0) {
          let text_4 = Pa(z.text, Y),
            oe = text_4.indexOf(`
`);
          if (oe >= 0) text_4 = text_4.slice(oe + 1);
          if (text_4.trim() !== "") M.unshift({
            role: z.role,
            text: text_4
          });
        }
        break e;
      }
      Y -= z.text.length, M.unshift(z);
    }
  }
  if (M.length === 0) return null;
  let Z = [],
    q = u >= 4 ? 2 : 0,
    F = Math.max(1, u - q),
    level = Se.level;
  Se.level = h;
  let ue = performance.now();
  try {
    for (let C of M) {
      if (Z.length > 0) Z.push({
        text: "",
        dim: !1
      });
      let U = fr(C.text);
      switch (C.role) {
        case "tool":
          {
            let text_5 = ct(`${Jo} ${U.replace(/\n/g, " ")}`, u);
            Z.push({
              text: text_5,
              dim: !0
            });
            break;
          }
        case "thinking":
          {
            let V = U.replace(/\s+/g, " ").trim();
            for (let [z, X] of Je(V, F).entries()) {
              let oe = q === 0 || X === "" ? "" : z === 0 ? `${Kan} ` : "  ";
              Z.push({
                text: oe + Se.italic(X),
                dim: !0
              });
            }
            break;
          }
        case "assistant":
          {
            let V = U;
            if (U.length <= or && performance.now() - ue < ir && !ar(U)) try {
              V = Er(U, w);
            } catch {
              V = U;
            }
            let z = lr("text", w)(Jo);
            for (let [X, oe] of Je(V, F).entries()) {
              let ie = q === 0 || oe === "" ? "" : X === 0 ? `${z} ` : "  ";
              Z.push({
                text: ie + oe,
                dim: !1
              });
            }
            break;
          }
        case "user":
          {
            let V = lr("inactive", w)(`${pointer} `),
              z = lr("text", w),
              X = lr("userMessageBackground", w, "background");
            for (let [oe, ie] of Je(U, F).entries()) {
              let te = q === 0 ? "" : oe === 0 ? V : "  ";
              Z.push({
                text: X(te + z(ie)),
                dim: !1
              });
            }
            break;
          }
        default:
          C.role;
      }
    }
  } finally {
    Se.level = level;
  }
  let s = 0,
    n = [];
  for (let C = Z.length - 1; C >= 0; C--) {
    let U = Z[C],
      V = E(U.text);
    if (s + V > L) break;
    s += V, n.unshift(U.dim ? S(U.text) : U.text);
  }
  if (n.length === 0) return null;
  let y = o - s - N,
    T = [];
  for (let C = 0; C < y; C++) T.push("");
  T.push(...n);
  for (let C of R) T.push(S(C));
  let K = T.join(`\r
`);
  if (K.length > 65536 + o * u * 32) K = K.replace(regExp_3, "");
  return bB + K;
}
function Qe(r, e, o, p) {
  let u;
  try {
    let h = Qt(r);
    if (!h.isFile() || h.size === 0) return null;
    let w = h.size;
    u = Zt(r, "r");
    let S = Math.max(0, w - _t),
      E = Buffer.alloc(Math.min(w, _t)),
      D = er(u, E, 0, E.length, S),
      R = E.subarray(0, D).toString("utf8");
    if (S > 0) {
      let N = R.indexOf(`
`);
      if (N < 0) return null;
      R = R.slice(N + 1);
    }
    return br(R, e, o, p);
  } catch {
    return null;
  } finally {
    if (u !== void 0) try {
      Jt(u);
    } catch {}
  }
}
var Ce = 1048576,
  kr = 5000,
  Tr = 12000,
  Ze = 1000,
  xt = 500,
  Pr = 6000,
  Rr = 30000;
function Ar() {
  let r = v("tengu_bg_attach_stall_ms", kr);
  if (r === 0) return 0;
  let e = am().length > 0 ? Tr : 2000;
  return Math.max(e, r);
}
function Cr(r, e, o, p, u, h) {
  let dispatch = r.dispatch;
  if (r.getPhase().kind !== "running" || e.destroyed || p()) return;
  u.add(dispatch.short);
  let S = Fo(No(dispatch.short), h).catch(() => null);
  r.kill("SIGTERM"), (async () => {
    let E = Date.now() + Pr;
    while (Date.now() < E && !r.record.outcome) await J(100);
    if (!u.has(dispatch.short)) return;
    let D = await Fo(No(dispatch.short), h).catch(() => null),
      R = D === null ? await bot(No(dispatch.short), h) : void 0,
      sessionId = D?.resumeSessionId ?? dispatch.sessionId,
      cwd = D?.cwd ?? dispatch.cwd,
      B = wb(Rx(h)),
      j = await Jte(sessionId, cwd, D?.linkScanPath, void 0, B),
      hasMessages = j.hasMessages;
    if (!hasMessages) await _nt(j.path, B);
    if (!u.has(dispatch.short)) return;
    let Y = D?.respawnFlags ?? dispatch.respawnFlags,
      Z = (await S)?.tempo === "active";
    if (R) Sot("attach_stall", R);
    await o({
      ...dispatch,
      cwd: cwd,
      source: "respawn",
      reattachEnv: void 0,
      attachStallRespawns: (dispatch.attachStallRespawns ?? 0) + 1,
      launch: hasMessages ? {
        mode: "resume",
        sessionId: sessionId,
        transcriptPath: j.path,
        fork: !1,
        flagArgs: Z ? sOn(Y) : xut(Y)
      } : sessionId !== dispatch.sessionId ? {
        mode: "prompt",
        args: ["--session-id", sessionId, ...Y]
      } : dispatch.launch
    });
  })().catch(E => a(E)).finally(() => u.delete(dispatch.short));
}
var et = 1e4,
  Dr = 2500;
async function l5s(handles, onDispatch, onNudge, onShutdown = () => 0, ready = () => !0, onYield = () => !1, whenReady = new Promise(() => {}), storageV5) {
  let E = nue();
  await P0n();
  let controlKey = await PHi();
  await vt(E).catch(() => {});
  let R = new Set(),
    stallRespawnPending = new Set(),
    settledDispatches = new Map(),
    B = new Map(),
    onLeaseChange = De(),
    Z = {
      handles: handles,
      onDispatch: onDispatch,
      onNudge: onNudge,
      onShutdown: onShutdown,
      ready: ready,
      whenReady: whenReady,
      onYield: onYield,
      addLease: (s, client) => {
        if (B.has(s)) return;
        B.set(s, client);
        let label = Or(client?.label);
        l("tengu_daemon_lease", {
          op: b("open"),
          label: label
        }), s.once("close", () => {
          B.delete(s), l("tengu_daemon_lease", {
            op: b("close"),
            label: label
          }), onLeaseChange.emit({
            op: "close",
            client: client
          });
        }), onLeaseChange.emit({
          op: "open",
          client: client
        });
      },
      listLeases: () => {
        let s = [];
        for (let n of B.values()) if (n) s.push(n);
        return s;
      },
      stallRespawnPending: stallRespawnPending,
      settledDispatches: settledDispatches,
      controlKey: controlKey,
      storageV5: storageV5,
      legacyOpProbe: new Rt()
    },
    q = !1,
    F = vr(s => {
      if (q) {
        s.destroy();
        return;
      }
      s.on("error", () => s.destroy()), s.setTimeout(30000, () => s.destroy()), R.add(s), s.once("close", () => R.delete(s));
      let error_2 = gHi(s);
      if (error_2) {
        l("tengu_daemon_peer_uid_reject", {}), s.once("data", () => P(s, {
          ok: !1,
          code: "EPEERUID",
          error: error_2
        }));
        return;
      }
      let y = Buffer.alloc(0),
        T = K => {
          y = Buffer.concat([y, K]);
          let C = y.indexOf(10);
          if (C < 0) {
            if (y.length > Ce) s.off("data", T), P(s, {
              ok: !1,
              code: "ETOOLARGE",
              error: `request exceeds ${Ce >> 20}MB \u2014 shorten the prompt or send in parts`
            });
            return;
          }
          s.off("data", T), s.setTimeout(0);
          let U = y.subarray(0, C).toString("utf8"),
            V = y.subarray(C + 1);
          Ir(Z, s, U, V).catch(z => {
            P(s, {
              ok: !1,
              error: d(z),
              code: "EUNKNOWN"
            });
          });
        };
      s.on("data", T);
    }),
    ne = !1;
  F.on("error", s => {
    if (ne) {
      t(`bg control server bind: ${yA(d(s))}`, {
        level: "warn"
      });
      return;
    }
    a(s);
  });
  let ue = Date.now() + et;
  for (;;) try {
    await new Promise((s, n) => {
      let y = T => {
        ne = !1, n(T);
      };
      ne = !0, F.once("error", y), F.listen(E, () => {
        ne = !1, F.removeListener("error", y), s();
      });
    });
    break;
  } catch (error) {
    if (k(error) !== "EADDRINUSE" || Date.now() >= ue) throw error;
    F.removeAllListeners("listening"), await J(100);
  }
  return {
    close: s => new Promise(n => {
      for (let y of R) y.destroy();
      if (s?.skipUnlink) return q = !0, F.unref(), void n();
      F.close(() => {
        if (!s?.skipUnlink) vt(E).catch(() => {});
        n();
      });
    }),
    leaseCount: () => B.size,
    onLeaseChange: onLeaseChange,
    announceExit: closing => {
      for (let [n, y] of B) if (y?.label === vut) n.write(_({
        op: "lease",
        closing: closing
      }) + `
`);
    },
    noteSettledDispatch: (s, nonce, refusal) => {
      settledDispatches.set(s, {
        nonce: nonce,
        refusal: refusal
      }), setTimeout((T, K, C) => {
        if (T.get(K)?.nonce === C) T.delete(K);
      }, Rr, settledDispatches, s, nonce).unref();
    }
  };
}
function P(r, e) {
  if (r.destroyed) return;
  r.end(_(e) + `
`);
}
function Ae(r, e) {
  if (r.destroyed) return;
  if (r.writableLength > Ce) {
    r.destroy();
    return;
  }
  r.write(_(e) + `
`);
}
function ke(r) {
  return !r.record.outcome && !r.isRetiring && !r.isKilling;
}
function kt(r, e) {
  return r !== void 0 && e === void 0 ? we(r, 25) : J(25);
}
async function Tt(r, e, o, op, short, h, w, S) {
  let E = Date.now() + Math.min(w, 30000),
    D = !1,
    R = !1,
    N,
    L,
    B = S?.then(j => {
      L = j;
    }, j => {
      a(j), L = "dropped";
    });
  while (Date.now() < E) {
    if (o.destroyed) return;
    let j = L === "dup-live" || L === "dropped" || L === "refused" || L === "closed",
      M = r.get(short),
      Y = h !== void 0 && M?.record.nonce !== h ? e.get(short) : void 0;
    if (Y !== void 0 && Y.nonce === h) {
      if (Y.refusal !== void 0) return P(o, {
        ok: !1,
        error: Y.refusal,
        code: "ECWDGONE"
      });
      return P(o, {
        ok: !0,
        op: op,
        short: short,
        pid: 0,
        messagingSock: "",
        via: "cold"
      });
    }
    if (M) {
      if (h && M.record.nonce !== h) {
        if (R = !0, N = ke(M) ? M : void 0, j) break;
        if (!N && !D) D = !0, E += Math.min(w, 30000);
        await kt(B, L);
        continue;
      }
      return P(o, {
        ok: !0,
        op: op,
        short: short,
        pid: M.record.pid,
        messagingSock: M.record.messagingSock ?? "",
        via: M.via
      });
    }
    if (N = void 0, j) break;
    await kt(B, L);
  }
  if (R) {
    if (N && r.get(short) === N && ke(N)) return P(o, {
      ok: !0,
      op: op,
      short: short,
      pid: N.record.pid,
      messagingSock: N.record.messagingSock ?? "",
      via: N.via
    });
    return P(o, {
      ok: !1,
      error: "a previous dispatch with this id is still being cleaned up \u2014 retry in a moment",
      code: "ESTALE"
    });
  }
  return P(o, {
    ok: !1,
    error: `${py()} didn't acknowledge in time \u2014 retry`,
    code: "ETIMEOUT"
  });
}
class Rt {
  fired = new Set();
  markFired(r) {
    if (this.fired.has(r)) return !1;
    return this.fired.add(r), !0;
  }
}
function Pt(r, e) {
  if (!r.markFired(e)) return;
  l("tengu_dead_probe_bg_legacy_op", {
    op: f(e)
  });
}
async function Ir(r, e, o, p) {
  let {
      handles: handles_2,
      onDispatch: onDispatch_2,
      onNudge: onNudge_2,
      onShutdown: onShutdown_2,
      ready: ready_2,
      whenReady: whenReady_2,
      onYield: onYield_2,
      addLease: addLease,
      listLeases: listLeases,
      stallRespawnPending: stallRespawnPending_2,
      settledDispatches: settledDispatches_2,
      controlKey: controlKey_2,
      storageV5: storageV5_2,
      legacyOpProbe: legacyOpProbe
    } = r,
    q;
  try {
    q = ee(o);
  } catch {
    return P(e, {
      ok: !1,
      error: "bad json",
      code: "EUNKNOWN"
    });
  }
  if (q === null || typeof q !== "object") return P(e, {
    ok: !1,
    error: "bad json",
    code: "EUNKNOWN"
  });
  let op_2 = q.op;
  if (op_2 === "ping") return P(e, {
    ok: !0,
    op: "ping",
    version: {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.319",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-11-05T18:14:18Z",
      GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION,
    proto: Vu,
    carriedPromptsFormat: carriedPromptsFormat
  });
  if (op_2 === "nudge") {
    let n = await onNudge_2();
    return P(e, {
      ok: !0,
      op: "nudge",
      restarting: n.restarting,
      upgradePending: n.upgradePending,
      version: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.319",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-11-05T18:14:18Z",
        GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
        HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "win32"
      }.VERSION,
      processWrapper: r4()
    });
  }
  if (op_2 === "yield") return P(e, {
    ok: !0,
    op: "yield",
    yielding: onYield_2()
  });
  if (op_2 === "lease") {
    let n = U9e().safeParse(q.client).data;
    addLease(e, n ? {
      ...n,
      pid: k0t(e) ?? n.pid
    } : null), e.write(_({
      ok: !0,
      op: "lease"
    }) + `
`);
    return;
  }
  if (op_2 === "leases") return P(e, {
    ok: !0,
    op: "leases",
    clients: listLeases()
  });
  if (op_2 === "shutdown") {
    let n = q.reapWorkers !== !1,
      reaped = onShutdown_2(n);
    return P(e, {
      ok: !0,
      op: "shutdown",
      reaped: reaped
    });
  }
  if (!ready_2() && op_2 === "attach") {
    if (await Promise.race([whenReady_2, J(Dr, void 0, {
      unref: !0
    })]), e.destroyed) return;
  }
  if (!ready_2()) return P(e, {
    ok: !1,
    error: `${py()} starting (adoption in progress)`,
    code: "ESTARTING"
  });
  let proto = q.proto;
  if (typeof proto !== "number" || !Number.isInteger(proto) || proto < $Pn || proto > Vu) return l("tengu_bg_proto_mismatch", {
    client_proto: typeof proto === "number" ? proto : -1,
    server_proto: Vu
  }), P(e, {
    ok: !1,
    error: `proto mismatch (server=${Vu}, client=${proto}) \u2014 ${py()} and CLI versions differ; restart claude`,
    code: "EPROTO",
    serverProto: Vu,
    serverVersion: {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.319",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-11-05T18:14:18Z",
      GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION
  });
  let ue = Gls().safeParse(q);
  if (!ue.success) return P(e, {
    ok: !1,
    error: `malformed request: ${ue.error.issues[0]?.message ?? "invalid"}`,
    code: "EUNKNOWN"
  });
  let s = ue.data;
  switch (s.op) {
    case "ping":
    case "nudge":
    case "yield":
    case "lease":
    case "leases":
    case "shutdown":
      return;
    case "list":
      return P(e, {
        ok: !0,
        op: "list",
        jobs: Array.from(handles_2.values()).map(item => item.isKilling || item.isRetiring ? {
          ...item.record,
          dying: !0
        } : item.record)
      });
    case "has":
      {
        let n = handles_2.get(s.short),
          y = stallRespawnPending_2.has(s.short);
        return P(e, {
          ok: !0,
          op: "has",
          alive: n !== void 0 && ke(n) || y,
          present: n !== void 0 || y,
          ready: n !== void 0 && !n.isBooting
        });
      }
    case "await-ack":
      return Tt(handles_2, settledDispatches_2, e, "await-ack", s.short, s.nonce, s.timeoutMs);
    case "dispatch":
      if (!OU(s.auth, controlKey_2)) return P(e, {
        ok: !1,
        error: "dispatch rejected: this client didn't present the daemon control key",
        code: "EAUTH"
      });
      if (await J(0), e.readableEnded || e.destroyed) {
        l("tengu_bg_dispatch_stale_drop", {});
        return;
      }
      return Tt(handles_2, settledDispatches_2, e, "dispatch", s.d.short, s.d.nonce, s.timeoutMs, onDispatch_2(s.d));
    case "reply":
      {
        if (!OU(s.auth, controlKey_2)) return P(e, {
          ok: !1,
          error: s.auth === void 0 ? "reply rejected: this window didn't present the daemon control key \u2014 it is likely running a Claude Code older than the daemon (left open across an update?); restart this window and retry, or stop driving the control socket directly" : "reply rejected: the presented daemon control key doesn't match \u2014 retry, and restart the Claude Code daemon if this persists",
          code: "EAUTH"
        });
        let n = handles_2.get(s.short);
        if (stallRespawnPending_2.has(s.short) && (!n || !ke(n))) return P(e, {
          ok: !1,
          error: `worker ${but} \u2014 restarting it; retry reply`,
          code: "ERESPAWNING"
        });
        if (!n || n.isRetiring || n.isKilling || n.record.outcome) return P(e, {
          ok: !1,
          error: "job not found \u2014 it may have already exited",
          code: "ENOJOB"
        });
        if (n.isUpgrading) return P(e, {
          ok: !1,
          error: `job is restarting on the ${BXt}; retry reply`,
          code: "ERESPAWNING"
        });
        if (s.nextTurn === !0 && n.record.cliVersion !== {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.319",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-11-05T18:14:18Z",
          GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
          HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          DD_SOURCEMAP_GROUP: "win32"
        }.VERSION) return P(e, {
          ok: !1,
          error: "it runs a different Claude Code build",
          code: "ESKEW"
        });
        if (!(await n.reply(s.text, {
          nextTurn: s.nextTurn === !0
        }))) {
          if ((n.isBooting || n.isSpawnPending && n.isReplyQueueOnly) && !n.isUnverified && !n.record.legacy) {
            let code = "ERESPAWNING";
            if (!n.isBooting && s.nextTurn !== !0) {
              let T = No(s.short);
              if ((eYe(s.text, null) || (await qPn(T, storageV5_2).then(C => C === "absent" ? n.dispatch.source === "spare" : C !== null && eYe(s.text, C)).catch(() => !1))) && !n.isBooting) code = "ENOREPLY";
            }
            return P(e, {
              ok: !1,
              error: "the session is still starting",
              code: code
            });
          }
          return P(e, {
            ok: !1,
            error: "job isn't accepting replies \u2014 it may be in a non-interactive state",
            code: "ENOREPLY"
          });
        }
        return P(e, {
          ok: !0,
          op: "reply"
        });
      }
    case "kill":
      {
        if (stallRespawnPending_2.delete(s.short), s.evict) tce(y => {
          delete y.workers[s.short];
        }, storageV5_2).catch(y => a(y));
        let n = handles_2.get(s.short);
        if (!n) return P(e, {
          ok: !1,
          error: "job not found \u2014 it may have already exited",
          code: "ENOJOB"
        });
        if (n.dispatch.launch.mode === "exec" && n.record.outcome) return handles_2.delete(s.short), P(e, {
          ok: !0,
          op: "kill"
        });
        return n.kill(s.signal ?? "SIGTERM", s.handoff ? "handoff" : "killed"), P(e, {
          ok: !0,
          op: "kill"
        });
      }
    case "respawn-stale":
      {
        Pt(legacyOpProbe, "respawn_stale");
        let n = handles_2.get(s.short);
        if (!n) return P(e, {
          ok: !1,
          error: "job not found \u2014 it may have already exited",
          code: "ENOJOB"
        });
        let y = await n.respawnIfIdleStale();
        return P(e, {
          ok: !0,
          op: "respawn-stale",
          ...y
        });
      }
    case "resize":
      {
        let n = handles_2.get(s.short);
        if (!n) return P(e, {
          ok: !1,
          error: "job not found \u2014 it may have already exited",
          code: "ENOJOB"
        });
        if (s.attachId) {
          let y = n.attachers.get(s.attachId);
          if (!y) return P(e, {
            ok: !0,
            op: "resize"
          });
          if (y.cols = s.cols, y.rows = s.rows, y.repaint) return y.repaint(), P(e, {
            ok: !0,
            op: "resize"
          });
        }
        return n.resize(s.cols, s.rows), P(e, {
          ok: !0,
          op: "resize"
        });
      }
    case "attach":
      {
        if (s.auth === void 0) t("[bg-attach] legacy client (no control key) \u2014 allowed via peerUid", {
          level: "warn"
        });else if (!OU(s.auth, controlKey_2)) return P(e, {
          ok: !1,
          error: "attach rejected: the presented daemon control key doesn't match \u2014 retry, and restart the Claude Code daemon if this persists",
          code: "EAUTH"
        });
        let n = handles_2.get(s.short);
        if (stallRespawnPending_2.has(s.short) && (!n || !ke(n))) return P(e, {
          ok: !1,
          error: `worker ${but} \u2014 restarting it; retry attach`,
          code: "ERESPAWNING"
        });
        if (!n || n.isKilling || n.record.outcome && n.dispatch.launch.mode !== "exec") return P(e, {
          ok: !1,
          error: "job not found \u2014 it may have already exited",
          code: "ENOJOB"
        });
        if (n.isUnverified) return P(e, {
          ok: !1,
          error: "worker is live but supervisor could not verify its identity \u2014 try restarting the supervisor to re-adopt",
          code: "EUNVERIFIED"
        });
        if (n.isRetiring) return P(e, {
          ok: !1,
          error: "job is retiring; retry attach",
          code: "ERESPAWNING"
        });
        if (n.record.legacy) {
          let dispatch_2 = n.dispatch,
            O = await Fo(No(dispatch_2.short), storageV5_2).catch(() => null),
            le = O === null && dispatch_2.launch.mode !== "exec" ? await bot(No(dispatch_2.short), storageV5_2) : void 0,
            sessionId_2 = O?.resumeSessionId ?? dispatch_2.sessionId,
            cwd_2 = O?.cwd ?? dispatch_2.cwd,
            Te = wb(Rx(storageV5_2)),
            xe = await Jte(sessionId_2, cwd_2, O?.linkScanPath, void 0, Te),
            hasMessages_2 = xe.hasMessages;
          if (!hasMessages_2) await _nt(xe.path, Te);
          if (handles_2.get(s.short) !== n || e.destroyed) return P(e, {
            ok: !1,
            error: "supervisor restarting",
            code: "ERESPAWNING"
          });
          if (!n.isKilling) {
            if (l("tengu_bg_attach_legacy_autorespawn", {}), le) Sot("legacy_attach", le);
            n.kill("SIGTERM"), onDispatch_2({
              ...dispatch_2,
              cwd: cwd_2,
              source: "respawn",
              reattachEnv: void 0,
              launch: hasMessages_2 ? {
                mode: "resume",
                sessionId: sessionId_2,
                transcriptPath: xe.path,
                fork: !1,
                flagArgs: O?.tempo === "active" ? sOn(O?.respawnFlags ?? dispatch_2.respawnFlags) : xut(O?.respawnFlags ?? dispatch_2.respawnFlags)
              } : sessionId_2 !== dispatch_2.sessionId ? {
                mode: "prompt",
                args: ["--session-id", sessionId_2, ...(O?.respawnFlags ?? dispatch_2.respawnFlags)]
              } : dispatch_2.launch
            }).catch(Bt => a(Bt));
          }
          return P(e, {
            ok: !1,
            error: `${UPn} job respawning with worker-owned PTY; retry attach`,
            code: "ERESPAWNING"
          });
        }
        if (n.isUpgrading) return P(e, {
          ok: !1,
          error: `job is restarting on the ${BXt}; retry attach`,
          code: "ERESPAWNING"
        });
        if (await n.failIfHostExited("attach")) return P(e, {
          ok: !1,
          error: n.dispatch.launch.mode === "exec" ? wut : Sut,
          code: "EHOSTDEAD"
        });
        if (e.destroyed) return;
        if (stallRespawnPending_2.has(s.short) && (handles_2.get(s.short) !== n || !ke(n))) return P(e, {
          ok: !1,
          error: `worker ${but} \u2014 restarting it; retry attach`,
          code: "ERESPAWNING"
        });
        if (handles_2.get(s.short) !== n || n.isKilling || n.record.outcome && n.dispatch.launch.mode !== "exec") return P(e, {
          ok: !1,
          error: "job not found \u2014 it may have already exited",
          code: "ENOJOB"
        });
        let y = n.liveTranscriptPath !== void 0 ? n.liveTranscriptPath : n.dispatch.launch.mode === "resume" ? n.dispatch.launch.transcriptPath : void 0,
          T = s.holdingFrame !== !0 && n.isBooting && y != null ? Qe(y, s.cols, s.rows, {
            colorLevel: s.caps?.colorLevel,
            theme: s.caps?.systemTheme
          }) : null;
        addLease(e, null);
        let imarkNonce = n.marksCapable ? yr(16).toString("hex") : void 0;
        if (e.write(_({
          ok: !0,
          op: "attach",
          imarkNonce: imarkNonce,
          decModes: n.decModeSnapshot(),
          via: n.via,
          booting: n.bootingForAttachMetrics,
          tempo: n.record.tempo,
          state: n.record.state,
          cached: T !== null,
          stale: Boolean(n.record.cliVersion && n.record.cliVersion !== {
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.319",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-11-05T18:14:18Z",
            GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
            HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "win32"
          }.VERSION),
          workerCliVersion: n.record.cliVersion
        }) + `
`), l("tengu_bg_attach", {
          tempo: f(n.record.tempo),
          state: l8(n.record.state),
          via: f(n.via),
          attachers: n.attachers.size,
          stale: Boolean(n.record.cliVersion && n.record.cliVersion !== {
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.319",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-11-05T18:14:18Z",
            GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
            HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "win32"
          }.VERSION)
        }), T !== null) e.write(RT + ov + T);
        let U = ov + ywe,
          V = 6,
          z = [],
          X = 0,
          oe = "",
          ie = () => {},
          te,
          Ee = 0,
          me = !1,
          ye = Ar(),
          be = ye === 0 ? 0 : Math.max(1, Math.ceil((ye - xt) / Ze)),
          ve = A => zIt(RT + ov + `
  \x1B[2m${A}\x1B[0m
`),
          ge,
          I = !1,
          G = () => {
            if (!I) return;
            if (I = !1, typeof n.replayInteractiveMarksTo === "function") n.replayInteractiveMarksTo(s.attachId ?? e);
          },
          ae = A => {
            if (z === null) return;
            ge?.();
            let O = z;
            if (z = null, clearTimeout(Ue), A && !e.destroyed) for (let le of O) e.write(le);
            if (I = !0, A && O.length > 0) G();
          },
          Ue = setTimeout(() => {
            let A = z !== null && X === 0,
              O = A && (s.holdingFrame === !0 || T !== null);
            if (!O) ae(!0);
            if (A && !e.destroyed) {
              if (!O) {
                let state = n.record.state,
                  _e = state === "starting" || state === "resuming" || state === "adopted" || state === "crashed" ? "Session is starting \u2014 it will appear once ready. Ctrl+Z to detach" : "Waiting for session to redraw\u2026 Ctrl+Z to detach";
                e.write(ve(_e));
              }
              let le = Date.now();
              te = setInterval(() => {
                let se = Date.now(),
                  _e = se - le;
                if (le = se, _e > Ze * 3) Ee = 0;
                if (Ee++, be > 0 && Ee >= be && !n.isKilling && !n.isRetiring && !n.isBooting && n.dispatch.launch.mode !== "exec") {
                  clearInterval(te), te = void 0, ie();
                  let attempt = n.dispatch.attachStallRespawns ?? 0,
                    Pe = {
                      state: l8(n.record.state),
                      via: f(n.via),
                      attempt: attempt
                    };
                  if (attempt >= 2) {
                    if (l("tengu_bg_attach_stall_gave_up", Pe), e.write(ve("Session keeps stalling at startup.") + xye(Phr("ESTALLED", s.caps?.sessionTabs, `Session ${s.short} keeps stalling at startup \u2014 check ${No(s.short)} for logs.`))), !n.isKilling) n.kill("SIGKILL", "failed", "session keeps stalling at startup");
                    return;
                  }
                  if (l("tengu_bg_attach_stall_respawn", Pe), e.write(ve("Session not responding \u2014 restarting it\u2026")), Cr(n, e, onDispatch_2, () => me, stallRespawnPending_2, storageV5_2), !e.destroyed) e.write(xye(Phr(VIt, s.caps?.sessionTabs, `worker ${but}, restarting`)));
                  return;
                }
                let Te = n.attachers.get(he);
                ie(), ie = n.resizeForRepaint(Te?.cols ?? s.cols, Te?.rows ?? s.rows);
              }, Ze), te.unref();
            }
          }, xt),
          rt = () => {
            if (te) clearInterval(te), te = void 0;
          },
          je = n.onStream.subscribe(A => {
            if (e.destroyed) return;
            if (me = !0, z !== null) {
              let O = oe + A;
              if (O.includes(RT) || O.includes(U)) {
                rt();
                let le = A.includes(RT) || A.includes(U) ? A : O;
                if (ie(), ae(!1), e.writableLength <= Ce) e.write(n.decModeSnapshot().map(kK).join("") + le), G();else e.destroy();
                return;
              }
              if (z.push(A), X += A.length, oe = O.slice(-V), X > 65536) ae(!0);
              return;
            }
            if (rt(), e.writableLength > Ce) {
              e.destroy();
              return;
            }
            e.write(A), G();
          }),
          Ve = n.onRepaintDone.subscribe(() => {
            ie(), ae(!0);
          });
        if (x() === "windows") for (let A of n.attachers.values()) A.kick();
        let he = s.attachId ?? e;
        if (n.attachers.set(he, {
          cols: s.cols,
          rows: s.rows,
          caps: s.caps,
          imarkNonce: imarkNonce,
          deliver: A => {
            if (!e.destroyed) e.write(A);
          },
          kick: () => {
            if (l("tengu_bg_attach_kick", {}), te) clearInterval(te), te = void 0;
            if (clearTimeout(Ue), ie(), je(), Ve(), e.removeAllListeners("data"), !e.destroyed) e.write(xye(Phr("EKICKED", s.caps?.sessionTabs, zls))), e.end();
            n.attachers.delete(he);
          }
        }), T !== null && y != null) {
          let A = n.attachers.get(he);
          if (A) A.repaint = () => {
            if (e.destroyed) return;
            n.resize(A.cols, A.rows);
            let O = Qe(y, A.cols, A.rows, {
              colorLevel: s.caps?.colorLevel,
              theme: s.caps?.systemTheme
            });
            e.write(RT + ov + (O ?? ""));
          }, ge = () => {
            A.repaint = void 0, ge = void 0;
          };
        }
        n.noteActivity(), n.seedFocus(!0), n.sendAttacherCaps(s.caps ?? null);
        let Le;
        if (n.dispatch.launch.mode === "exec") {
          let A = zIt(RT + ov);
          e.write(A);
          for (let O of n.ringSnapshot()) e.write(O);
          if (ae(!1), Le = () => {
            let O = n.attachers.get(he);
            if (e.destroyed || !O) return;
            let le = n.record.outcome === "done" ? "done" : n.record.outcome === "killed" ? "stopped" : "failed",
              se = zIt(`\r
\x1B[2m\u2014 ${le} \xB7 Ctrl+Z to return \u2014\x1B[0m\r
`);
            e.write(se), O.repaint = () => {
              if (e.destroyed) return;
              e.write(A);
              for (let _e of n.ringSnapshot()) e.write(_e);
              e.write(se);
            };
          }, n.record.outcome) {
            Le(), e.once("close", () => {
              clearTimeout(Ue), je(), Ve(), n.attachers.delete(he);
            });
            return;
          }
        }
        ie = n.resizeForRepaint(s.cols, s.rows);
        let Mt = n.onSettle.subscribe(() => {
            if (Le && n.record.outcome !== "killed") return Le();
            e.end();
          }),
          nt = new xr("utf8"),
          $t = s.caps?.sessionTabs !== void 0,
          ot = A => {
            let O = nt.write(A);
            if (O.length > 0 && (!ht(O) || $t && wt(O))) n.lastInputAttacher = he;
            n.write(O);
          };
        if (p.length) ot(p);
        e.on("data", ot), e.once("close", () => {
          if (te) clearInterval(te);
          if (ie(), ae(!1), je(), Mt(), Ve(), !n.attachers.delete(he)) return;
          let A = nt.end();
          if (A) n.write(A);
          if (n.attachers.size > 0) {
            let O = [...n.attachers.values()].at(-1);
            n.resizeForRepaint(O.cols, O.rows), n.sendAttacherCaps(O.caps ? {
              ...O.caps,
              systemTheme: void 0
            } : null);
          } else n.seedFocus(!1), n.sendAttacherCaps(null);
        });
        return;
      }
    case "ensure-spare":
      return Pt(legacyOpProbe, "ensure_spare"), P(e, {
        ok: !0,
        op: "ensure-spare"
      });
    case "permission-response":
      if (!OU(s.auth, controlKey_2)) return P(e, {
        ok: !1,
        error: "permission-response rejected: this client didn't present the daemon control key",
        code: "EAUTH"
      });
      return P(e, {
        ok: !0,
        op: "permission-response"
      });
    case "subscribe":
      {
        let n = handles_2.get(s.short);
        if (!n) return P(e, {
          ok: !1,
          error: "job not found \u2014 it may have already exited",
          code: "ENOJOB"
        });
        if (addLease(e, null), Ae(e, {
          type: "snapshot",
          record: n.record,
          streamTail: n.tail(s.tail ?? 200)
        }), n.record.outcome) {
          Ae(e, {
            type: "settled",
            outcome: n.record.outcome
          }), e.end();
          return;
        }
        let y = [n.onStream.subscribe(line => Ae(e, {
          type: "stream",
          line: line
        })), n.onState.subscribe(patch => Ae(e, {
          type: "state",
          patch: patch
        })), n.onSettle.subscribe(outcome => {
          Ae(e, {
            type: "settled",
            outcome: outcome
          }), e.end();
        })];
        e.on("close", () => {
          for (let T of y) T();
        });
        return;
      }
    default:
      return P(e, {
        ok: !1,
        error: `unknown op: ${s.op}`,
        code: "EUNKNOWN"
      });
  }
}
function Or(r) {
  if (r === void 0) return;
  return de(Ohr.find(item => item === r)) ?? b("other");
}
var e8 = 45000;
async function rGt(r) {
  let e = Date.now() + r;
  while (Date.now() < e) {
    if ((await t_({
      proto: Vu,
      op: "ping"
    })).ok) return !0;
    await Ie(100);
  }
  return !1;
}
async function wjr(r, e) {
  let o = Date.now() + r,
    p = 0;
  while (!0) {
    let u = o - Date.now();
    if (u <= 0) return null;
    if (await rGt(Math.min(u, 1000))) {
      let h = Date.now();
      if (h >= p) {
        p = h + 1000;
        let w = await FT(1, e).catch(() => null);
        if (w?.origin === "service") return w;
        if (w?.origin === "foreground") return null;
      }
      await Ie(100);
    }
  }
}
async function $r(r, e) {
  let o = Date.now(),
    p = !1,
    u,
    h = "restarting",
    connect_errno;
  while (Date.now() < o + (p ? 30000 : 1e4)) {
    let S = await t_({
      proto: Vu,
      op: "nudge"
    });
    if (S.ok && S.op === "nudge") {
      if (p = !0, u = S.version, !S.restarting) {
        if (await Fr(S.version, r, S.processWrapper, S.upgradePending === !0, e)) return "retired";
        let refuse = Mp();
        if (refuse && !S.processWrapper) return {
          refuse: refuse
        };
        if (!S.processWrapper && r4() !== "" && !(await pU())) return {
          refuse: tt()
        };
        Nt(S.processWrapper);
        let skewed = S.version !== {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.319",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-11-05T18:14:18Z",
          GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
          HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          DD_SOURCEMAP_GROUP: "win32"
        }.VERSION;
        if (Date.now() - o > 200 || skewed) l("tengu_bg_skew_nudge", {
          converged: !0,
          duration_ms: Date.now() - o,
          daemon_version: Na(S.version),
          skewed: skewed
        });
        return "up";
      }
      h = "restarting", await Ie(100);
      continue;
    }
    if (!S.ok && S.code === "ETIMEOUT") {
      p = !0, h = "etimeout", await Ie(100);
      continue;
    }
    if (!S.ok && S.code === "ENOCONN") {
      if (!p) {
        let E = await FT(1, e).catch(() => null);
        if (E?.bgDisabled) return "down";
        if (E) p = !0;
      }
      if (connect_errno = db(S.errno), !p) return "down";
      h = "enoconn", await Ie(100);
      continue;
    }
    {
      let refuse_2 = Mp();
      if (refuse_2) return {
        refuse: refuse_2
      };
      if (r4() !== "" && !(await pU())) return {
        refuse: tt()
      };
    }
    return "up";
  }
  return l("tengu_bg_skew_nudge", {
    converged: !1,
    restarting: h === "restarting",
    etimeout: h === "etimeout",
    enoconn: h === "enoconn",
    daemon_version: Na(u),
    ...(connect_errno && {
      connect_errno: connect_errno
    })
  }), "down";
}
async function D7(r = {}, e) {
  if (x() !== "windows" && Rfo()) return m("daemon_ensure_running", "uid_collapse"), {
    ok: !1,
    reason: reason,
    causeCode: "uid_collapse"
  };
  return Dt(r, e, !1);
}
async function Dt(r, storageV5_3, o) {
  let p = Date.now(),
    u = await $r(r.forceTransient ?? !1, storageV5_3);
  if (u === "up") return He(o), {
    ok: !0
  };
  if (typeof u === "object") {
    if (r.spawnIntent) return m("daemon_ensure_running", "daemon_ensure_client_wrapper_refused"), m("agent_launcher", "raw_daemon_client_misconfigured"), {
      ok: !1,
      reason: u.refuse,
      causeCode: "wrapper"
    };
    return He(o), {
      ok: !0
    };
  }
  let h = Date.now(),
    clock_jump = h - p > 40000,
    S = r.standsDownAtExit && u !== "retired",
    E = await It(),
    D = E ? await Sjr() : {
      execPathStale: !1,
      launcherPrefixDead: !1
    },
    R = E && (D.execPathStale || D.launcherPrefixDead);
  if (R) l("tengu_bg_daemon_service_stale_exec", {
    launcher_dead: D.launcherPrefixDead
  }), t(D.execPathStale ? "daemon service exec path is stale (binary deleted) \u2014 falling back to transient spawn. Run 'claude daemon install' to repair." : "daemon service unit starts through a launcher that was deleted or is no longer executable \u2014 falling back to transient spawn. Run 'claude daemon install' to repair.", {
    level: "warn"
  });
  let N = !1;
  if (E && !R) {
    if (N = !0, S && _n()) return At(!0, p);
    r.onStarting?.();
    let I = await Ct(storageV5_3);
    if (I) return m("daemon_ensure_running", I.code), {
      ok: !1,
      reason: I.reason,
      causeCode: I.causeCode
    };
    let G = await bjr(),
      outcome_ok = await rGt(5000);
    if (l("tengu_bg_daemon_install", {
      outcome_ok: outcome_ok,
      via_service: !0,
      fresh_install: !1,
      clock_jump: clock_jump,
      duration_ms: Date.now() - p,
      platform_darwin: x() === "macos",
      platform_linux: x() === "linux",
      platform_windows: x() === "windows"
    }), outcome_ok) return He(o), {
      ok: !0
    };
    l("tengu_bg_daemon_service_poll_fallthrough", {
      sr_ok: G.ok
    }), t(`daemon service ${Jwt} 5s${G.ok ? "" : ` (${G.error})`} \u2014 falling back to transient spawn. Run 'claude daemon install' to repair.`, {
      level: "warn"
    });
  }
  if (!E && !r.forceTransient && bio() === "ask" && (await Lt()) && !fe().daemonInstallPromptDismissed) return l("tengu_bg_daemon_cold_start_ask", {}), {
    ok: !1,
    askInstall: !0,
    causeCode: "ask",
    reason: "No background daemon is running. Run 'claude daemon install' to set it up as a persistent service."
  };
  if (!N) {
    let I = Mp();
    if (!(await pU()) && (await FT(1, storageV5_3).catch(() => null))) return m("daemon_ensure_running", "daemon_ensure_client_wrapper_refused"), m("agent_launcher", "zombie_kill_client_misconfigured"), {
      ok: !1,
      reason: I ?? tt(),
      causeCode: "wrapper"
    };
    if (S && _n()) return At(!1, p);
    r.onStarting?.();
    let G = await Ct(storageV5_3);
    if (G) return m("daemon_ensure_running", G.code), {
      ok: !1,
      reason: G.reason,
      causeCode: G.causeCode
    };
  }
  let L = Dj(),
    spawn_gap_ms = L.lastTransientSpawnAt === null ? null : Date.now() - L.lastTransientSpawnAt;
  L.lastTransientSpawnAt = Date.now();
  let j = _({
      label: Wr(),
      cwd: pe(),
      ...r.spawnedBy,
      pid: process.pid
    }),
    M = Date.now(),
    Y = ["daemon", "run", "--origin", "transient", "--spawned-by", j],
    Z = () => agn(Y, void 0, {
      withoutOAuthTokenEnv: r.withoutOAuthTokenEnv
    }),
    q = await Z(),
    {
      err: err,
      child: child,
      recoveredAfterReinstallWait: recoveredAfterReinstallWait,
      gaveUpOnNpmInstallInProgress: gaveUpOnNpmInstallInProgress,
      reinstallWaitedMs = 0
    } = q,
    stderrPath = q.stderrPath;
  if (err) {
    if (stderrPath) Be(Fe(stderrPath), {
      recursive: !0,
      force: !0
    }).catch(() => {});
    return l("tengu_bg_daemon_spawn_failed", {
      errno_enoent: k(err) === "ENOENT",
      errno_eacces: k(err) === "EACCES",
      errno: tr(err) ?? b("unknown"),
      launcher_configured: am().length > 0 || Mp() !== null
    }), m("daemon_ensure_running", "daemon_ensure_spawn_failed"), {
      ok: !1,
      reason: gaveUpOnNpmInstallInProgress ? `Claude Code is being updated by npm on this machine (still not runnable after ${Math.round(Y8n / 60000)} min, ${tr(err) ?? "spawn failed"}) \u2014 try again when the update finishes` : `spawn ${py()}: ${d(err)}`,
      causeCode: tr(err) ?? "spawn"
    };
  }
  let T = Xe({
      spawnIssuedAt: M + reinstallWaitedMs,
      child: child,
      stderrPath: stderrPath,
      wrapperConfigured: am().length > 0,
      storageV5: storageV5_3
    }),
    outcome_ok_2 = await Re(T, Date.now() + 30000, !1),
    C = Date.now() - h - reinstallWaitedMs > 60000;
  if (!outcome_ok_2 && C) outcome_ok_2 = await Re(T, Date.now() + 5000, !1);
  if (!outcome_ok_2 && !C) outcome_ok_2 = await Re(T, Math.max(Date.now() + (e8 - 30000), T.spawnIssuedAt + e8), !0);
  let reinstall_respawn = !1,
    V = 0,
    z = !1;
  if (!outcome_ok_2 && !C && (await ut(T, We()))) {
    let I = await X8n(We());
    if (V += I.waitedMs, l("tengu_bg_daemon_spawn_reinstall_wait", {
      waited_ms: I.waitedMs,
      recovered: I.recovered,
      extended: I.extended,
      install_in_progress: I.installInProgressAtEnd,
      after_child_exit: !0
    }), z = !I.recovered && I.installInProgressAtEnd, I.recovered) {
      let G = await Z();
      if (G.err === null) {
        if (reinstall_respawn = !0, V = 0, stderrPath) Be(Fe(stderrPath), {
          recursive: !0,
          force: !0
        }).catch(() => {});
        stderrPath = G.stderrPath, T = Xe({
          spawnIssuedAt: Date.now(),
          child: G.child,
          stderrPath: stderrPath,
          wrapperConfigured: am().length > 0,
          storageV5: storageV5_3
        }), t(`daemon: ${We()} was being reinstalled when the first daemon was spawned (it exited at once); restarted it after ${I.waitedMs}ms`), outcome_ok_2 = await Re(T, T.spawnIssuedAt + e8, !0);
      } else if (t(`daemon: respawn after the npm reinstall window failed: ${d(G.err)}`, {
        level: "warn"
      }), l("tengu_bg_daemon_spawn_failed", {
        errno: tr(G.err) ?? b("unknown"),
        launcher_configured: am().length > 0 || Mp() !== null,
        after_reinstall_wait: !0
      }), G.stderrPath) Be(Fe(G.stderrPath), {
        recursive: !0,
        force: !0
      }).catch(() => {});
    }
  }
  let X = T.budgetExtended ? Ye : e8,
    oe = !outcome_ok_2 && !C && Date.now() - T.spawnIssuedAt - V > X + 60000,
    ie = !outcome_ok_2 && (C || oe) && !o && !(await qe(T)),
    had_stderr = !1,
    Ee,
    me,
    stderr_class;
  if (!outcome_ok_2) {
    let I = await $e(T, !0);
    if (stderr_class = ft(I), I.length > 0) {
      had_stderr = !0, t(`daemon: transient spawn stderr:
${I}`, {
        level: "error"
      }), Ee = [...I.matchAll(/\bE[A-Z]{2,14}\b/g)].find(item => !"/\\".includes(I[item.index - 1] ?? "."))?.[0];
      let G = I.split(/\r?\n/).map(item => Yr($a(item))).find(item => item.length > 0);
      me = G && G.length > 200 ? `${Q(G, 200)}\u2026` : G;
    }
  }
  if (stderrPath) Be(Fe(stderrPath), {
    recursive: !0,
    force: !0
  }).catch(() => {});
  if (l("tengu_bg_daemon_install", {
    outcome_ok: outcome_ok_2,
    via_service: !1,
    fresh_install: !1,
    clock_jump: C || clock_jump || oe,
    duration_ms: Date.now() - p,
    platform_darwin: x() === "macos",
    platform_linux: x() === "linux",
    platform_windows: x() === "windows",
    had_stderr: had_stderr,
    child_exited: T.childExit !== null,
    ...(T.childExit?.code !== void 0 && T.childExit.code !== null && {
      exit_code: T.childExit.code
    }),
    ...(T.childExit?.signal && {
      exit_signal: de(T.childExit.signal)
    }),
    ...(T.childExitAt !== null && {
      child_exit_ms: Math.max(0, T.childExitAt - T.spawnIssuedAt)
    }),
    ...(stderr_class && {
      stderr_class: stderr_class
    }),
    reinstall_respawn: reinstall_respawn,
    budget_extended: T.budgetExtended,
    ...(ie && {
      clock_jump_retry: b("scheduled")
    }),
    ...(o && {
      clock_jump_retry: b("retry")
    }),
    ...(spawn_gap_ms !== null && {
      spawn_gap_ms: spawn_gap_ms
    }),
    ...(r.spawnedBy !== void 0 && {
      spawned_by: de(Ohr.find(item => item === r.spawnedBy?.label)) ?? b("other")
    }),
    ...(Ee && {
      stderr_errno: db(Ee)
    }),
    ...(!outcome_ok_2 && (await mt(T)))
  }), outcome_ok_2) {
    if (Ur(), recoveredAfterReinstallWait || reinstall_respawn) c("daemon_ensure_running", "daemon_ensure_spawn_waited_reinstall");else He(o);
    if (am().length > 0) {
      let I = await t_({
        proto: Vu,
        op: "nudge"
      }).catch(() => null);
      Nt(I?.ok && I.op === "nudge" ? I.processWrapper : void 0);
    }
    return {
      ok: !0
    };
  }
  if (ie) return t("daemon: the clock jumped during the cold start (machine slept?) and the daemon is still unreachable \u2014 retrying the whole start once", {
    level: "warn"
  }), Dt({
    ...r,
    onStarting: void 0,
    standsDownAtExit: !1
  }, storageV5_3, !0);
  m("daemon_ensure_running", "daemon_ensure_transient_unreachable");
  let be = z ? ` \u2014 Claude Code is being updated by npm on this machine (still not runnable after ${Math.round(Y8n / 60000)} min); try again when the update finishes` : "",
    ve = am()[0];
  if (ve) return l("tengu_bg_daemon_spawn_failed", {
    launcher_configured: !0,
    failed_stage: b("unknown")
  }), m("agent_launcher", "daemon_never_reachable"), {
    ok: !1,
    causeCode: "timeout",
    reason: `launcher \`${ve}\` ran but Claude Code never started${me ? ` \u2014 ${me}` : ` (nothing on stderr within ${X / 1000}s)`}${be}`
  };
  let ge = T.siblingHolderSeen ? null : T.childExit;
  if (ge) {
    let I = ge.signal ? `signal ${ge.signal}` : `exit code ${ge.code ?? "?"}`;
    return {
      ok: !1,
      causeCode: "exited",
      reason: me ? `${py()} ${Qwt} (${I}): ${me}${be}` : `${py()} ${Qwt} (${I}, nothing on stderr) and no other ${py()} answered within ${Math.round(Math.min(Date.now() - T.spawnIssuedAt - V, X) / 1000)}s${be}`
    };
  }
  return {
    ok: !1,
    causeCode: "timeout",
    reason: `${py()} ${Jwt} ${X / 1000}s${be}`
  };
}
function At(r, e) {
  return t("daemon: not started, because this process is exiting"), l("tengu_bg_daemon_stood_down_at_exit", {
    via_service: r,
    duration_ms: Date.now() - e
  }), c("daemon_ensure_running", "daemon_ensure_stood_down_at_exit"), {
    ok: !1,
    stoodDown: !0,
    viaService: r,
    causeCode: "exiting",
    reason: "this process is exiting"
  };
}
function He(r) {
  if (r) {
    c("daemon_ensure_running", "daemon_ensure_clock_jump_retried");
    return;
  }
  g("daemon_ensure_running");
}
function We() {
  return zc().target;
}
function Br(r) {
  if (r.daemonOrigin !== "transient") return !1;
  if (r.daemonVersion === r.clientVersion) return !1;
  if (r.daemonTarget === r.clientTarget) return !1;
  let e = yEt(r.daemonVersion),
    o = yEt(r.clientVersion);
  if (e !== null && o !== null) {
    if (hEt(r.daemonVersion) !== hEt(r.clientVersion)) return !1;
    return o > e;
  }
  if ($hn(r.daemonVersion) || $hn(r.clientVersion)) return !1;
  return Ne.valid(r.clientVersion) !== null && Ne.valid(r.daemonVersion) !== null && Ne.gt(r.clientVersion, r.daemonVersion);
}
async function Fr(r, e, o, p, u) {
  if (Mp() !== null) return !1;
  if (!v("tengu_bg_binary_takeover", !0)) return !1;
  let h = r !== {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.319",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-11-05T18:14:18Z",
      GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION,
    w = h && !p,
    S = Hr(o, h);
  if (!w && !S) return !1;
  if (!(await pU())) return !1;
  if (await It()) return !1;
  if (!e && bio() === "ask" && (await Lt()) && !fe().daemonInstallPromptDismissed) return !1;
  let clientTarget = await Mr(We()).catch(() => null);
  if (!clientTarget) return !1;
  let cmd = r_e().cmd;
  if (!(await sOe(cmd))) {
    let cmd_2 = r_e({
      pinToCurrentBinary: !0
    }).cmd;
    if (cmd_2 === cmd || !(await sOe(cmd_2))) return !1;
  }
  let R = await FT(1, u).catch(() => null);
  if (!R) return !1;
  if (!nKt(R)) return t(`bg: skipping stale-daemon retire \u2014 lock pid ${R.pid} has no procStart identity`), !1;
  let N = Br({
      daemonVersion: R.version,
      daemonOrigin: R.origin,
      daemonTarget: R.launchTarget,
      clientVersion: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.319",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-11-05T18:14:18Z",
        GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
        HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "win32"
      }.VERSION,
      clientTarget: clientTarget
    }),
    via_version = w && N,
    via_prefix = S && R.origin === "transient" && !R.processWrapper && (R.version === {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.319",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-11-05T18:14:18Z",
      GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION || p && N);
  if (!via_version && !via_prefix) return !1;
  let j = await rit(R.pid);
  if (j === "timed-out") {
    try {
      process.kill(R.pid, "SIGKILL");
    } catch {}
    j = await rit(R.pid);
  }
  if (j !== "exited") return !1;
  if (via_prefix) Dj().prefixAxis = "took-over";
  return t(via_version ? `bg: ${py()} pid ${R.pid} runs ${R.version}; this binary (${{
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.319",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-11-05T18:14:18Z",
    GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
    HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "win32"
  }.VERSION}) is a newer build \u2014 retired the stale ${py()} so new sessions use the current binary` : `bg: ${py()} pid ${R.pid} predates CLAUDE_CODE_PROCESS_WRAPPER and spawns sessions unwrapped \u2014 retired it so the replacement runs through the configured launcher`, {
    level: "warn"
  }), l("tengu_bg_daemon_binary_takeover", {
    daemon_age_ms: Date.now() - R.startedAt,
    via_prefix: via_prefix,
    via_version: via_version,
    daemon_version: Na(R.version)
  }), !0;
}
function Hr(r, e) {
  if (r4() === "" || r) return !1;
  let p = Dj();
  if (p.prefixAxis === "took-over") {
    if (e) return !1;
    if (!p.prefixContractViolationLogged) p.prefixContractViolationLogged = !0, t(`bg: a raw ${py()} is running again after this session's launcher-driven restart. Two causes look identical from here: a claude session started BEFORE CLAUDE_CODE_PROCESS_WRAPPER was deployed cold-started it (restart those sessions), or the launcher does not pass that variable through in the environment it hands to \`exec\` (launcher contract #3). Sessions dispatched to it run unwrapped either way; \`claude daemon status\` shows the launcher it records.`, {
      level: "warn"
    }), l("tengu_bg_launcher_replacement_raw", {});
    return !1;
  }
  if (e) return !0;
  if (p.prefixAxis === "attempted") return !1;
  return p.prefixAxis = "attempted", !0;
}
async function Ct(r) {
  let e = await FT(1, r).catch(() => null);
  if (!e) return null;
  if (e.bgDisabled) return l("tengu_bg_daemon_bg_disabled_skip", {
    origin_service: e.origin === "service"
  }), {
    reason: "the background service on this machine is running without background sessions \u2014 its control socket failed to start. " + "Check the cause with 'claude daemon status' (daemon.log), then restart the service (launchctl/systemctl, or reboot).",
    code: "daemon_ensure_bg_disabled",
    causeCode: "bg_disabled"
  };
  if (Date.now() - e.startedAt <= et + 5000) return null;
  let o = await t_({
      proto: Vu,
      op: "ping"
    }, {
      timeoutMs: 1000
    }),
    p = {
      started_ago_ms: Date.now() - e.startedAt,
      origin_transient: e.origin === "transient",
      origin_service: e.origin === "service",
      version_skew: e.version !== {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.319",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-11-05T18:14:18Z",
        GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
        HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "win32"
      }.VERSION
    };
  if (o.ok || o.code === "ETIMEOUT") return l("tengu_bg_daemon_zombie_false_positive", {
    ...p,
    recheck_etimeout: !o.ok
  }), null;
  if (!nKt(e)) return t(`bg: supervisor lock pid ${e.pid} alive but identity unverifiable (no procStart) \u2014 not signalled`, {
    level: "warn"
  }), {
    reason: `${o6e({
      pid: e.pid,
      outcome: "unverified"
    })}. If no daemon is running, delete ${eF()}; if pid ${e.pid} is a live process you own, stop it yourself first.`,
    code: "daemon_ensure_zombie_unverified",
    causeCode: "zombie"
  };
  let sock_exists = !1;
  try {
    sock_exists = await Nr(nue()).then(() => !0, () => !1);
  } catch {}
  if (t(`bg: supervisor pid ${e.pid} alive but control socket unreachable \u2014 signalling restart`, {
    level: "warn"
  }), (await rit(e.pid)) === "eperm") return {
    reason: `${py()} socket missing; could not restart supervisor (EPERM)`,
    code: "daemon_ensure_zombie_kill_failed",
    causeCode: "zombie"
  };
  return l("tengu_bg_daemon_zombie_restart", {
    pid: e.pid,
    ...p,
    sock_exists: sock_exists
  }), null;
}
async function It() {
  if (Ot() || !(await _ot())) return !1;
  return EPe().catch(() => !1);
}
function Ot() {
  return Boolean(process.env.CLAUDE_CONFIG_DIR);
}
async function d5s() {
  return !Ot() && at();
}
function Wr() {
  let r = process.argv.slice(2);
  if (r[0] === "agents") return "claude agents";
  if (r.includes("--bg")) return "claude --bg";
  return "claude";
}
async function Ur() {
  let r = x();
  if (r !== "linux" && r !== "wsl") return;
  let e = await Lr("/etc/systemd/logind.conf", "utf8").catch(() => "");
  if (!/^\s*KillUserProcesses\s*=\s*yes\b/im.test(e)) return;
  t("logind KillUserProcesses=yes \u2014 SSH disconnect will kill the transient daemon and its background jobs. Run `loginctl enable-linger $USER` or `claude daemon install` to keep it alive across logout.", {
    level: "warn"
  });
}
function tt() {
  return `${CA}: launcher \`${am()[0]}\` was deleted or is not executable \u2014 restore it (or fix the setting); background sessions are not started unwrapped`;
}
function Nt(r) {
  let e = r4();
  if (e === "" || !r) return;
  if (r === e) g("agent_launcher");else c("agent_launcher", "served_by_skewed_wrapper");
}
async function Lt() {
  return L9e() && (await _ot()) && !process.env.CLAUDE_CONFIG_DIR && D9e();
}
export { Dj, i5s, _ot, DNo, $pn, nGt, bjr, Upn, a5s, Sjr, EPe, eYe, pvt, LNo, Kme, l5s, e8, rGt, wjr, D7, d5s };