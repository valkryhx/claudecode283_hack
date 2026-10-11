// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { we } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { H } from "B:/~BUN/root/chunk-dkxhwhft.js";
import { y, c, ue } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { l, v, B } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Q } from "B:/~BUN/root/chunk-17wqwt36.js";
import { xn, Dn, Ka, _i, Yi } from "B:/~BUN/root/chunk-54p0h65d.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { b, J, Uh, eM, ce, qo, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { I, Ze, fr } from "B:/~BUN/root/chunk-y04k89s2.js";
import { d, O } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { em, UJ, Fn, NBt, yt } from "B:/~BUN/root/chunk-339q6g5w.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { oe } from "B:/~BUN/root/chunk-shgdrs47.js";
import { mn, No, tt, Ve } from "B:/~BUN/root/chunk-py7yqpgt.js";
import { nT, Bo, Cn } from "B:/~BUN/root/chunk-2swveyqa.js";
import { R$, $h, F_, IY } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { Kt } from "B:/~BUN/root/chunk-9fcn5kmc.js";
import { Ae } from "B:/~BUN/root/chunk-5w2ecytn.js";
import { Sne } from "B:/~BUN/root/chunk-8hs4bwwk.js";
import { pe } from "B:/~BUN/root/chunk-nf4z9ga7.js";
import { Kk, Dv, $c } from "B:/~BUN/root/chunk-83yxmdy5.js";
import { cl } from "B:/~BUN/root/chunk-3wnb3s8p.js";
import { kp, JZ, nae } from "B:/~BUN/root/chunk-8b53pnky.js";
import { lje } from "B:/~BUN/root/chunk-vczknmbj.js";
import { oQe } from "B:/~BUN/root/chunk-4tkwpa6e.js";
import { Qer, G8r, Eje, eQe, SVt, aoe, wVt } from "B:/~BUN/root/chunk-e1thvnpv.js";
import { Ny } from "B:/~BUN/root/chunk-0rtwbec7.js";
import { oL, jj, Cje, gP, hP, AVt } from "B:/~BUN/root/chunk-p3ewqd1e.js";
import { Ttn } from "B:/~BUN/root/chunk-ky4py1p3.js";
import { nO, m5r, Aj, VSn, oyt } from "B:/~BUN/root/chunk-0ff63ng8.js";
import { yw, _ge, usn, Ree, Lae, kS, RB } from "B:/~BUN/root/chunk-30zp50p7.js";
import { Sc as proto, DL, d3, jen, dkr, vqe, pkr, Lot, Not, Fot, Tke, LDe, $ot, NDe, Uot, HDe, Bot, VP, u3, zen, Zxt, WA, Pr, ja, ml, Ju, Ir, rPt, cv, zA, Mi, CE, Pqe } from "B:/~BUN/root/chunk-9sy3w2pa.js";
import { hg } from "B:/~BUN/root/chunk-tdy3z3fm.js";
import { iyt, $Pe } from "B:/~BUN/root/chunk-7bmdhxn6.js";
import { nZt, DAt, nDe, Pie, qve, iDe, FAt, VNn, oZt, sZt, j8, $At, qNn } from "B:/~BUN/root/chunk-3jyp964r.js";
import { Em, Xc } from "B:/~BUN/root/chunk-f71hcy5v.js";
import { KOt, N3 } from "B:/~BUN/root/chunk-affnknva.js";
import { jer, vje, Jer } from "B:/~BUN/root/chunk-trcn2d68.js";
import { yU, WQe } from "B:/~BUN/root/chunk-mr1whbdb.js";
import { Kh } from "B:/~BUN/root/chunk-hjz4emsq.js";
import { pE } from "B:/~BUN/root/chunk-c50e3nb9.js";
import { Voo } from "B:/~BUN/root/chunk-qq6w89ha.js";
import { Am } from "B:/~BUN/root/chunk-10m2dkry.js";
import { ua } from "B:/~BUN/root/chunk-358c43wz.js";
import { Hm } from "B:/~BUN/root/chunk-w5bkq1td.js";
import { Fm } from "B:/~BUN/root/chunk-dfh5rt4g.js";
import { _e } from "B:/~BUN/root/chunk-batgyebn.js";
import { de, fn, Xn, lt } from "B:/~BUN/root/chunk-8386ms9e.js";
import { randomUUID as gn } from "crypto";
import { lstat as _n, readdir as bn, realpath as We, rm as yn, unlink as wn, writeFile as kn } from "fs/promises";
import { isAbsolute as ut, join as At, normalize as En, relative as Sn } from "path";
import { readFile as xr, unlink as Dr } from "fs/promises";
import { join as Nr } from "path";
var Fr = 250,
  jr = 604800000,
  Ur = 256,
  Lr = f(() => lt({
    writtenAtMs: fn().optional(),
    shells: Xn(lt({
      pid: fn().int().positive(),
      procStart: de().optional(),
      startTimeTicks: fn().int().optional()
    })).catch([])
  }));
async function Wt(e, r = {}) {
  let o = Nr(e, "adopt.json"),
    n = `${o}.reap.${process.pid}`,
    h = Date.now() + (r.waitMs ?? 0);
  for (;;) try {
    await Bo(o, n);
    break;
  } catch (error) {
    if (Date.now() >= h) {
      if (!B(error)) t(`[adopt] reap claim failed: ${error}`, {
        level: "warn"
      });
      return {
        found: !1,
        reaped: 0
      };
    }
    await Q(Fr);
  }
  try {
    let s = Lr().safeParse(J(await xr(n, "utf-8")));
    if (!s.success) return {
      found: !0,
      reaped: 0
    };
    let {
        writtenAtMs: writtenAtMs,
        shells: shells
      } = s.data,
      w = writtenAtMs !== void 0 ? Date.now() - writtenAtMs : void 0;
    if (w !== void 0 && w > jr || shells.length > Ur) return t(`[adopt] reap skipped: implausible payload (age ${w ?? "?"}ms, ${shells.length} entries)`, {
      level: "warn"
    }), {
      found: !0,
      reaped: 0
    };
    if (await Promise.all(shells.map(item => lje(item.pid, item.startTimeTicks, item.procStart))), shells.length > 0) i("tengu_adopt_exit_reap", {
      reaped_shells: shells.length
    });
    return {
      found: !0,
      reaped: shells.length
    };
  } catch (error) {
    return t(`[adopt] reap read/parse failed: ${error}`, {
      level: "warn"
    }), {
      found: !0,
      reaped: 0
    };
  } finally {
    await Dr(n).catch(() => {});
  }
}
import { randomUUID as zr } from "crypto";
import { connect as Yr } from "net";
import { lstat as nt, mkdir as Jr, readdir as $r, rename as qt, unlink as rt } from "fs/promises";
import { join as ge } from "path";
var Vt = 900000,
  bt = 86400000;
function Le(e, r) {
  return r - e >= bt || e > r + 60000;
}
var zt = /^[A-Za-z0-9-]{1,64}$/;
function at(e) {
  return ge(Ree(), `${e}.json`);
}
var ot = 8192;
function Ue(e) {
  return Ae.daemon([usn, e]);
}
function _t(e) {
  return Ue(`${e}.json`);
}
var Yt = Fm();
function it(e, r) {
  return Yt.run("g:" + e, r).catch(() => {});
}
async function HPe(gestureId, surface, o) {
  if (!zt.test(gestureId)) return;
  let n = {
    gestureId: gestureId,
    surface: surface,
    startedAtEpochMs: Date.now(),
    attempt: 0
  };
  nO().ownedBeacons.set(gestureId, n), await it(gestureId, async () => {
    if (n.pid = process.pid, n.procStart = await Dv(), o) {
      if (!(await wt(o, gestureId, n, !0))) nO().ownedBeacons.delete(gestureId);
      return;
    }
    if (await Jr(Ree(), {
      recursive: !0,
      mode: 448
    }), !(await ke())) {
      nO().ownedBeacons.delete(gestureId);
      return;
    }
    if (nO().ownedBeacons.get(gestureId) !== n) return;
    await Cn(at(gestureId), b(n), 384);
  }), await Kr(o);
}
async function wt(e, r, o, n = !1) {
  if (!(await ke(n))) return !1;
  if (nO().ownedBeacons.get(r) === o) await e.write(_t(r), b(o));
  return !0;
}
function Xt(e, r, o) {
  let n = nO().ownedBeacons.get(e);
  if (!n || !Number.isInteger(r) || r <= (n.attempt ?? 0)) return;
  n.attempt = r, it(e, async () => {
    if (n.procStart ??= await Dv(), o) {
      await wt(o, e, n);
      return;
    }
    if (!(await ke())) return;
    if (nO().ownedBeacons.get(e) !== n) return;
    await Cn(at(e), b(n), 384);
  });
}
function uJe(e, r, o) {
  let n = nO().ownedBeacons.get(e);
  if (!n) return;
  if (r.marksExpected !== void 0) n.marksExpected = n.marksExpected === !0 || r.marksExpected;
  if (r.daemonBooted !== void 0) n.daemonBooted = n.daemonBooted === !0 || r.daemonBooted;
  if (r.interactiveReached) n.interactiveReached = !0;
  if (r.attachMs !== void 0) n.attachMs ??= r.attachMs;
  if (r.msgsLoaded !== void 0) n.msgsLoaded ??= r.msgsLoaded;
  if (r.msgsInJsonl !== void 0) n.msgsInJsonl ??= r.msgsInJsonl;
  if (r.msgsRenderedAtFirstPaint !== void 0) n.msgsRenderedAtFirstPaint ??= r.msgsRenderedAtFirstPaint;
  if (r.attachCold !== void 0 && n.interactiveReached !== !0) n.attachCold = r.attachCold;
  if (r.via !== void 0 && n.interactiveReached !== !0) n.via = r.via;
  it(e, async () => {
    if (n.procStart ??= await Dv(), o) {
      await wt(o, e, n);
      return;
    }
    if (!(await ke())) return;
    if (nO().ownedBeacons.get(e) !== n) return;
    await Cn(at(e), b(n), 384);
  });
}
async function YD(e, r) {
  if (!zt.test(e)) return;
  nO().ownedBeacons.delete(e), await it(e, async () => {
    if (r) {
      if (!(await ke())) return;
      let n = !1;
      for (let h = 0;; h++) {
        let s = await r.delete(_t(e));
        if (s.ok) return;
        let u = "telemetryCode" in s.error ? s.error.telemetryCode : void 0;
        if (n = u !== void 0 && nT.has(u), n && O() === "windows" && h < Gt - 1) {
          await Q(Ht);
          continue;
        }
        break;
      }
      if (!n) return;
      await r.write(_t(e), "{}");
      return;
    }
    let o = at(e);
    if (!(await ke())) return;
    for (let n = 0;; n++) try {
      await rt(o);
      return;
    } catch (error) {
      let s = v(error);
      if (s === "ENOENT") return;
      if (O() === "windows" && s !== void 0 && nT.has(s) && n < Gt - 1) {
        await Q(Ht);
        continue;
      }
      break;
    }
    await qt(o, `${o}.${process.pid}.cleared`).catch(() => {});
  });
}
var Gt = 4,
  Ht = 50;
async function ke(e = !1) {
  try {
    return (await nt(Ree())).isDirectory();
  } catch (error) {
    return e && v(error) === "ENOENT";
  }
}
async function Wr(e) {
  try {
    let r = await cl(ge(Ree(), e), ot);
    if (r === null) return null;
    return Zt(r);
  } catch {
    return null;
  }
}
async function Gr(e, r) {
  let o = Ue(r),
    n = await e.statMeta(o);
  if (!n.ok || n.value.size > ot) return null;
  let h = await e.read([o]);
  if (!h.ok) return null;
  let s = h.value.items[0];
  if (!s.found || s.totalBytes > ot) return null;
  let entry = Zt(Buffer.from(s.value).toString("utf8"));
  return entry === null ? null : {
    entry: entry,
    version: s.version,
    mtimeMs: s.mtimeMs
  };
}
function Zt(e) {
  try {
    let r = J(e);
    return !!r && typeof r === "object" && typeof r.gestureId === "string" && typeof r.startedAtEpochMs === "number" && Number.isFinite(r.startedAtEpochMs) && r.startedAtEpochMs <= Date.now() + 60000 ? r : null;
  } catch {
    return null;
  }
}
async function Qt(e) {
  if (typeof e.pid !== "number" || !Number.isInteger(e.pid) || e.pid <= 0) return !1;
  if (!ua(e.pid)) return !0;
  if (e.procStart === void 0) return !1;
  let r = await $c(e.pid);
  return r !== void 0 && r !== e.procStart;
}
async function Hr(e, r) {
  try {
    let o = await nt(ge(Ree(), e));
    return Le(o.mtimeMs, r);
  } catch {
    return !1;
  }
}
function Kr(e) {
  return Yt.run("reconcile", () => qr(e));
}
async function qr(e) {
  if (e) return Vr(e);
  if (!(await ke())) return [];
  let r;
  try {
    r = await $r(Ree());
  } catch {
    return [];
  }
  let o = Date.now(),
    n = [];
  for (let h of r) {
    if (!h.endsWith(".json")) {
      try {
        let M = await nt(ge(Ree(), h));
        if (Le(M.mtimeMs, o)) await rt(ge(Ree(), h));
      } catch {}
      continue;
    }
    let s = await Wr(h);
    if (s === null) {
      try {
        let M = await nt(ge(Ree(), h));
        if (Le(M.mtimeMs, o)) await rt(ge(Ree(), h));
      } catch {}
      continue;
    }
    let u = o - s.startedAtEpochMs;
    if (!(typeof s.pid === "number" && Number.isInteger(s.pid) && s.pid > 0 ? u >= Vt && ((await Qt(s)) || s.procStart === void 0 && (await Hr(h, o))) : u >= bt)) {
      n.push(s);
      continue;
    }
    let C = ge(Ree(), `${h}.${process.pid}.claimed`);
    try {
      await qt(ge(Ree(), h), C);
    } catch {
      continue;
    }
    await rt(C).catch(() => {}), er(s);
  }
  return n;
}
function er(e) {
  let r = e.interactiveReached === !0,
    o = !r && e.marksExpected === !1,
    attach_ms = r && typeof e.attachMs === "number" && Number.isFinite(e.attachMs) && e.attachMs >= 0 && e.attachMs < 86400000 ? Math.round(e.attachMs) : void 0;
  i("tengu_bg_attach_outcome", {
    outcome: c(r || o ? "detached" : "error"),
    got_ack: r || typeof e.marksExpected === "boolean",
    got_first_frame: r ? !0 : o ? void 0 : !1,
    synthetic: !0,
    apc_detach: !1,
    timed_out: r || o ? void 0 : !0,
    journal_recovered: !0,
    attach_ms: attach_ms,
    first_frame_kind: ue(r ? "real" : void 0),
    marks_expected: r ? !0 : typeof e.marksExpected === "boolean" ? e.marksExpected : void 0,
    attempt: typeof e.attempt === "number" && Number.isInteger(e.attempt) && e.attempt >= 0 && e.attempt < 1e6 ? e.attempt + 1 : 0,
    gesture_id: _e(e.gestureId),
    surface: ue(e.surface === "fleet" || e.surface === "bg_cli" ? e.surface : void 0),
    daemon_booted: typeof e.daemonBooted === "boolean" ? e.daemonBooted : void 0,
    attach_cold: typeof e.attachCold === "boolean" ? e.attachCold : void 0,
    via: ue(WQe(e.via)),
    msgs_loaded: r ? vqe(e.msgsLoaded) : void 0,
    msgs_in_jsonl: r ? vqe(e.msgsInJsonl) : void 0,
    msgs_rendered_at_first_paint: r ? vqe(e.msgsRenderedAtFirstPaint) : void 0
  });
}
async function Vr(e) {
  if (!(await ke())) return [];
  let r = [],
    cursor;
  do {
    let s = await e.listEntries({
      namespace: "daemon",
      relPath: [usn]
    }, cursor === void 0 ? void 0 : {
      cursor: cursor
    });
    if (!s.ok) return [];
    for (let u of s.value.items) {
      if (u.kind !== "key" || u.key.namespace !== "daemon" || u.key.relPath.length !== 2 || u.key.relPath[0] !== usn) continue;
      let file = u.key.relPath[1];
      if (file !== void 0) r.push({
        file: file,
        size: u.size,
        mtimeMs: u.mtimeMs
      });
    }
    cursor = s.value.cursor;
  } while (cursor !== void 0);
  let n = Date.now(),
    h = [];
  for (let {
    file: file_2,
    size: size,
    mtimeMs: mtimeMs
  } of r) {
    let w = mtimeMs !== void 0 && Le(mtimeMs, n);
    if (!file_2.endsWith(".json")) {
      if (w) await e.delete(Ue(file_2));
      continue;
    }
    let C = size !== void 0 && size > ot ? null : await Gr(e, file_2);
    if (C === null) {
      if (w) await e.delete(Ue(file_2));
      continue;
    }
    let entry_2 = C.entry,
      k = n - entry_2.startedAtEpochMs;
    if (!(typeof entry_2.pid === "number" && Number.isInteger(entry_2.pid) && entry_2.pid > 0 ? k >= Vt && ((await Qt(entry_2)) || entry_2.procStart === void 0 && Le(C.mtimeMs, n)) : k >= bt)) {
      h.push(entry_2);
      continue;
    }
    let W = await e.delete(Ue(file_2), {
      precondition: {
        type: "ifMatch",
        version: C.version
      }
    });
    if (!W.ok || !W.value.existed) continue;
    er(entry_2);
  }
  return h;
}
var Xr = 1e4,
  M2t = "ENORESPONSE",
  pJe = "Session isn't responding",
  tr = {
    ENOJOB: "enojob",
    ETIMEOUT: "etimeout",
    ECWDGONE: "ecwdgone",
    EUNKNOWN: "eunknown",
    ENOREPLY: "enoreply",
    ERESPAWNING: "erespawning",
    ESTALE: "estale",
    EALIVE: "ealive",
    ESTARTING: "estarting",
    EPEERUID: "epeeruid",
    ETOOLARGE: "etoolarge",
    EUNVERIFIED: "eunverified",
    EAUTH: "eauth",
    EPROTO: "eproto",
    EHOSTDEAD: "ehostdead"
  };
function Zr(e) {
  return Object.hasOwn(tr, e) ? tr[e] : "unknown_code";
}
function Qr(e) {
  if (e === void 0 || e === "") return;
  if (HDe.test(e)) return "ekicked";
  if (e.includes("ERESPAWNING")) return "erespawning";
  if (e.includes("ESTARTING")) return "estarting";
  if (e.includes("ESTALLED")) return "estalled";
  if (e.includes("EUNVERIFIED")) return "eunverified";
  if (e.includes("EHOSTDEAD")) return "ehostdead";
  if (Bot.test(e)) return "unknown_code";
  return "worker_detach";
}
function G2(e, r, o) {
  if (!e) return;
  let n = e.interactive?.reached,
    h = r === "detached" ? e.interactive?.marksExpected : void 0,
    s = r === "detached" && n === void 0 && h === !0,
    u = s && e.t0 !== void 0 ? Math.round(performance.now() - e.t0) : void 0;
  i("tengu_bg_attach_outcome", {
    outcome: c(r),
    got_ack: !1,
    got_first_frame: !1,
    synthetic: !0,
    apc_detach: !1,
    failure_class: ue(r === "error" ? o ?? "daemon_unavailable" : void 0),
    gesture_id: _e(e.gestureId),
    attempt: ++e.attempt,
    surface: ue(e.surface),
    daemon_booted: e.daemonBooted,
    via: ue(e.interactive?.via),
    attach_cold: e.interactive?.attachCold,
    attach_ms: n !== void 0 ? n.attachMs : u,
    content_paint_ms: n !== void 0 ? Math.round(n.contentPaintMs) : void 0,
    prompt_idle_ms: n !== void 0 ? Math.round(n.promptIdleMs) : void 0,
    msgs_loaded: n?.msgsLoaded,
    msgs_in_jsonl: n?.msgsInJsonl,
    msgs_rendered_at_first_paint: n?.msgsRenderedAtFirstPaint,
    first_frame_kind: ue(n !== void 0 ? "real" : void 0),
    marks_expected: n !== void 0 ? !0 : h,
    attach_censored: s ? !0 : void 0
  });
}
async function D2t(short) {
  let r = await hg({
    proto: proto,
    op: "has",
    short: short
  });
  return r.ok && r.op === "has" && r.present === !1;
}
var Et = 2,
  or = 26,
  ar = 100,
  en = 8,
  tn = Buffer.from([127]),
  ir = 98,
  sr = 122,
  st = Buffer.from("\x1B[27;5;98~", "latin1"),
  dr = Buffer.from("\x1B[27;5;122~", "latin1"),
  rn = Buffer.from("\x1B[27u", "latin1"),
  nn = Buffer.from("\x1B[27;1u", "latin1"),
  on = 3,
  an = 99,
  sn = Buffer.from("\x1B[27;5;99~", "latin1"),
  rr = Buffer.from(d3, "ascii"),
  kt = Buffer.from(jen, "ascii"),
  nr = Buffer.from("\x1B_cc-d", "ascii"),
  Je = Buffer.from("\x1B[?9001", "ascii"),
  dn = 100;
function Ce(e, r, o) {
  return e.length - r >= o.length && e.compare(o, 0, o.length, r, r + o.length) === 0;
}
function $e(e, r, o) {
  if (e[r] !== 27 || e[r + 1] !== 91) return 0;
  let n = r + 2,
    h = () => {
      let w = -1;
      for (let C = 0; C < 8 && n < e.length; C++) {
        let M = e[n];
        if (M < 48 || M > 57) break;
        w = (w < 0 ? 0 : w) * 10 + (M - 48), n++;
      }
      return w;
    },
    s = h();
  if (s < 0) return 0;
  let u = -1;
  if (e[n] === 58) {
    if (n++, h(), e[n] === 58) n++, u = h();
  }
  if (e[n] !== 59 || e[n + 1] !== 53 || e[n + 2] !== 117) return 0;
  return (s > 127 && u >= 0 ? u : s) === o ? n + 3 - r : 0;
}
function xe(e, r) {
  let o = Math.min(e.length, r.length - 1);
  e: for (let n = o; n > 0; n--) {
    let h = e.length - n;
    for (let s = 0; s < n; s++) if (e[h + s] !== r[s]) continue e;
    return n;
  }
  return 0;
}
var Y = Buffer.alloc(0);
function cr(e, prefixArmed) {
  for (let o = 0; o < e.length; o++) {
    let n = e[o];
    if (prefixArmed) {
      if (prefixArmed = !1, n === ar) return {
        matched: !0,
        prefixArmed: !1
      };
      continue;
    }
    if (n === or || n === on || $e(e, o, sr) || Ce(e, o, dr) || $e(e, o, an) || Ce(e, o, sn)) return {
      matched: !0,
      prefixArmed: !1
    };
    let h = n === Et ? 1 : $e(e, o, ir) || (Ce(e, o, st) ? st.length : 0);
    if (h) o += h - 1, prefixArmed = !0;
  }
  return {
    matched: !1,
    prefixArmed: prefixArmed
  };
}
function lr(e) {
  let r = !1,
    o = !1,
    n,
    promise = new Promise(u => {
      n = u;
    }),
    s = () => {
      if (r) return;
      let u;
      while ((u = e.read()) !== null) {
        let A = typeof u === "string" ? Buffer.from(u, "utf8") : u,
          w = cr(A, o);
        if (o = w.prefixArmed, w.matched) {
          r = !0, n();
          return;
        }
      }
    };
  if (e.on("readable", s), "resume" in e && "pause" in e) e.resume(), e.pause();
  return s(), {
    promise: promise,
    cancel: () => {
      r = !0, e.removeListener("readable", s);
    }
  };
}
function L2t(e) {
  return cr(e, !1).matched;
}
async function $1e(short_2, r = {}) {
  let o = r.stdin ?? process.stdin,
    n = r.stdout ?? process.stdout,
    cols_2 = "columns" in n ? n.columns || 120 : 120,
    rows_2 = "rows" in n ? n.rows || 30 : 30,
    cols = cols_2,
    rows = rows_2,
    attachId = zr(),
    auth = await _ge(),
    M = Date.now(),
    k = performance.now(),
    S = r.telemetry?.t0,
    K = S !== void 0 && Number.isFinite(S) && S >= 0 && S <= k && k - S < 86400000 ? S : k;
  if (r.telemetry?.gestureId !== void 0) Xt(r.telemetry.gestureId, r.telemetry.attempt, r.telemetry.storageV5);
  let contentPaintMs,
    promptIdleMs,
    msgsLoaded,
    msgsInJsonl,
    msgsRenderedAtFirstPaint,
    ae = Y,
    j = r.telemetry?.interactive?.reached,
    Ge = !1,
    He,
    be = setTimeout(() => {
      if (j === void 0 && (contentPaintMs === void 0 || promptIdleMs === void 0)) Ge = !0, He = performance.now() - K;
    }, Math.max(0, 30000 - (k - K))),
    Te = !1,
    ack_ms,
    via,
    fe,
    Ie,
    ye,
    stale,
    Ee,
    cached,
    requireNonce,
    got_first_frame = !1,
    meaningful_ms;
  function Ke(T) {
    let ms = Date.now() - M;
    if (T && meaningful_ms === void 0) meaningful_ms = ms;
    if (got_first_frame) return;
    got_first_frame = !0, Te = !T, i("tengu_bg_attach_first_frame", {
      ms: ms,
      meaningful_ms: meaningful_ms,
      ack_ms: ack_ms,
      gesture_id: _e(r.telemetry?.gestureId),
      attempt: r.telemetry?.attempt,
      via: ue(via),
      tempo: ue(Ie),
      stale: stale,
      state: yU(ye),
      cached: cached
    });
  }
  let qe,
    promise_2 = new Promise(T => {
      qe = T;
    }),
    z = !1,
    got_ack = !1,
    se,
    X = !1,
    ne,
    Ct = cols_2,
    Tt = rows_2,
    ze = iyt(),
    Bt = () => eQe({
      legacyKitty: Ee !== {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.283",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-09-25T00:44:42Z",
        GIT_SHA: "4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",
        HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "win32"
      }.VERSION
    }),
    Sr = O() === "windows" && !jer(),
    vr = r.holdScreenOnDisconnect && O() === "windows" ? !0 : "isRaw" in o ? Boolean(o.isRaw) : !1,
    ft = O() === "windows",
    Oe = Buffer.from(gP, "ascii"),
    Rr = Buffer.from(hP, "ascii"),
    Ot = ft && Jer(),
    Pt = !1,
    mt,
    le;
  try {
    le = Yr(RB());
  } catch (error) {
    let R = r.telemetry?.interactive?.reached,
      E = typeof r.telemetry?.interactive?.marksExpected === "boolean" ? r.telemetry.interactive.marksExpected : void 0;
    return i("tengu_bg_attach_outcome", {
      outcome: c("error"),
      got_ack: !1,
      got_first_frame: !1,
      ms: Date.now() - M,
      apc_detach: !1,
      failure_class: c("connect_throw"),
      gesture_id: _e(r.telemetry?.gestureId),
      attempt: r.telemetry?.attempt,
      surface: ue(r.telemetry?.surface),
      daemon_booted: r.telemetry?.daemonBooted,
      attach_ms: R !== void 0 ? R.attachMs : E === !0 ? Math.round(performance.now() - K) : void 0,
      content_paint_ms: R !== void 0 ? Math.round(R.contentPaintMs) : void 0,
      prompt_idle_ms: R !== void 0 ? Math.round(R.promptIdleMs) : void 0,
      msgs_loaded: R?.msgsLoaded,
      msgs_in_jsonl: R?.msgsInJsonl,
      msgs_rendered_at_first_paint: R?.msgsRenderedAtFirstPaint,
      first_frame_kind: ue(R !== void 0 ? "real" : void 0),
      marks_expected: R !== void 0 ? !0 : E,
      attach_censored: R === void 0 && E === !0 ? !0 : void 0,
      via: ue(r.telemetry?.interactive?.via),
      attach_cold: r.telemetry?.interactive?.attachCold
    }), clearTimeout(be), {
      outcome: "error",
      msg: yw(l(error))
    };
  }
  le.setTimeout(1e4, () => {
    if (!got_ack) te("error", `${kp()} did not respond \u2014 it may be stalled${nae("restart")}`, {
      failureClass: "ack_timeout"
    });
  });
  function te(outcome, msg, E) {
    if (z) return;
    let {
      viaApc: viaApc,
      failureClass: failureClass
    } = E ?? {};
    z = !0, clearTimeout(mt), clearTimeout(be), clearTimeout(se);
    let N = Math.round(performance.now() - K),
      D = contentPaintMs !== void 0 && promptIdleMs !== void 0 ? Math.round(Math.max(contentPaintMs, promptIdleMs)) : void 0,
      x = requireNonce !== void 0 || r.telemetry?.interactive?.marksExpected === !0,
      timed_out = j === void 0 && x && Ge && D === void 0,
      attach_censored = j === void 0 && x && !timed_out && D === void 0,
      attach_ms_2 = j !== void 0 ? j.attachMs : timed_out ? Math.round(He ?? N) : attach_censored ? N : D,
      Or = j !== void 0 ? "real" : D !== void 0 ? "real" : got_first_frame ? Te && meaningful_ms === void 0 ? "dimhint" : "unknown" : void 0;
    if (i("tengu_bg_attach_outcome", {
      outcome: c(outcome),
      got_ack: got_ack,
      got_first_frame: got_first_frame,
      ms: Date.now() - M,
      gesture_id: _e(r.telemetry?.gestureId),
      attempt: r.telemetry?.attempt,
      via: ue(r.telemetry?.interactive?.via ?? via),
      tempo: ue(Ie),
      apc_detach: viaApc === !0,
      failure_class: ue(failureClass),
      state: yU(ye),
      cached: cached,
      meaningful_ms: meaningful_ms,
      input_accepted_ms: Ye,
      input_delivered_ms: Ye,
      keys_dropped: keys_dropped,
      attach_ms: attach_ms_2,
      content_paint_ms: j !== void 0 ? Math.round(j.contentPaintMs) : contentPaintMs !== void 0 ? Math.round(contentPaintMs) : void 0,
      prompt_idle_ms: j !== void 0 ? Math.round(j.promptIdleMs) : promptIdleMs !== void 0 ? Math.round(promptIdleMs) : void 0,
      timed_out: timed_out,
      attach_censored: attach_censored,
      marks_expected: j !== void 0 ? !0 : got_ack || typeof r.telemetry?.interactive?.marksExpected === "boolean" ? x : void 0,
      attach_cold: r.telemetry?.interactive?.attachCold ?? (via !== void 0 ? via === "cold" && (fe ?? !0) : void 0),
      daemon_booted: r.telemetry?.daemonBooted,
      surface: ue(r.telemetry?.surface),
      first_frame_kind: ue(Or),
      msgs_loaded: j?.msgsLoaded ?? msgsLoaded,
      msgs_in_jsonl: j?.msgsInJsonl ?? msgsInJsonl,
      msgs_rendered_at_first_paint: j?.msgsRenderedAtFirstPaint ?? msgsRenderedAtFirstPaint
    }), got_ack) {
      let Mr = r.alreadyInAlt || outcome === "disconnected" && r.holdScreenOnDisconnect;
      n.write(Cje + ze.snapshot().map(jj).reverse().join("") + gP + (O() === "windows" ? AVt : "") + "\x1B[0m\x1B7" + IY + "\x1B8" + (Eje() ? Ttn : "") + (Mr ? "" : aoe()));
    }
    if (!vr) pE(o, !1);
    if (o.removeListener("readable", ht), o.removeListener("end", Nt), "removeListener" in n) n.removeListener("resize", pt);
    clearTimeout(ne), le.destroy(), qe({
      outcome: outcome,
      msg: msg,
      viaApc: viaApc
    });
  }
  function Ar() {
    te("error", `${M2t}: ${pJe}`, {
      failureClass: "no_response"
    });
  }
  function pt() {
    if (z) return;
    if (ne === void 0) Ct = cols, Tt = rows;
    cols = "columns" in n ? n.columns || cols_2 : cols_2, rows = "rows" in n ? n.rows || rows_2 : rows_2, clearTimeout(ne), ne = setTimeout(() => {
      if (ne = void 0, z) return;
      if (cols < Ct || rows < Tt) n.write(F_ + $h);
      xt(), hg({
        proto: proto,
        op: "resize",
        short: short_2,
        cols: cols,
        rows: rows,
        attachId: attachId
      });
    }, 50);
  }
  let Mt = performance.now();
  function xt() {
    let T = ze.snapshot();
    if (!T.includes(1004)) return;
    n.write(Bt() + T.map(oL).join(""));
  }
  let Dt = r.gateStdinUntilFirstFrame === !0 && "isTTY" in o && o.isTTY === !0,
    Ye,
    keys_dropped = 0,
    Cr = m5r();
  function Se(T) {
    let R = () => Cr(T.toString("latin1"));
    if (!Dt || got_first_frame) {
      if (Ye === void 0 && !R()) Ye = Date.now() - M;
      le.write(T);
    } else if (!R()) keys_dropped++;
  }
  function Tr(T) {
    if (z) return;
    let R = typeof T === "string" ? Buffer.from(T, "utf8") : T,
      E = 0;
    for (let P = 0; P < R.length; P++) {
      let g = R[P];
      if (X) {
        if (X = !1, P > E) Se(R.subarray(E, P));
        if (g === ar) return te("detached");
        Se(Buffer.from([Et, g])), E = P + 1;
        continue;
      }
      if (Dt && !got_first_frame && (g === 27 && R.length === 1 || Ce(R, P, rn) || Ce(R, P, nn))) return te("detached");
      if (g === or || $e(R, P, sr) || Ce(R, P, dr)) {
        if (P > E) Se(R.subarray(E, P));
        return te("detached");
      }
      if (Sr && g === en) {
        if (P > E) Se(R.subarray(E, P));
        Se(tn), E = P + 1;
        continue;
      }
      let N = g === Et ? 1 : $e(R, P, ir) || (Ce(R, P, st) ? st.length : 0);
      if (N) {
        if (P > E) Se(R.subarray(E, P));
        P += N - 1, E = P + 1, X = !0;
      }
    }
    if (E < R.length) Se(R.subarray(E));
  }
  function ht() {
    let T = performance.now();
    if (T - Mt > wVt) xt();
    Mt = T;
    let R;
    while ((R = o.read()) !== null) Tr(R);
  }
  function Nt() {
    te("detached");
  }
  let je = Y,
    Xe = Y,
    Pe = Y,
    ve = Y;
  function Ft(T) {
    if (!ft) return T;
    let R = Pe.length > 0,
      E = R ? Buffer.concat([Pe, T]) : T;
    if (R) Pe = Y;
    if (Ot) {
      let V = E.lastIndexOf(Oe),
        Re = E.lastIndexOf(Rr);
      if (V !== Re) Pt = V > Re;
    }
    let P = E.indexOf(Oe);
    if (P < 0) {
      let V = xe(E, Oe);
      if (V === 0) return E;
      return Pe = Buffer.from(E.subarray(E.length - V)), E.subarray(0, E.length - V);
    }
    let g = [],
      N = 0,
      D = P;
    for (;;) {
      if (D > N) g.push(E.subarray(N, D));
      if (N = D + Oe.length, D = E.indexOf(Oe, N), D < 0) break;
    }
    let x = E.subarray(N),
      L = xe(x, Oe);
    if (L > 0) Pe = Buffer.from(x.subarray(x.length - L));
    if (x.length > L) g.push(x.subarray(0, x.length - L));
    if (g.length === 0) return Y;
    if (g.length === 1) return g[0];
    return Buffer.concat(g);
  }
  function jt(T) {
    let R = ve.length > 0,
      E = R ? Buffer.concat([ve, T]) : T;
    if (R) ve = Y;
    let P = E.indexOf(Je);
    if (P < 0) {
      let x = xe(E, Je);
      if (x === 0) return E;
      return ve = Buffer.from(E.subarray(E.length - x)), E.subarray(0, E.length - x);
    }
    let g = [],
      N = 0,
      D = P;
    while (D >= 0) {
      let x = D + Je.length;
      if (x >= E.length) {
        if (D > N) g.push(E.subarray(N, D));
        ve = Buffer.from(E.subarray(D)), N = E.length;
        break;
      }
      let L = E[x];
      if (L === 104 || L === 108) {
        if (D > N) g.push(E.subarray(N, D));
        N = x + 1;
      }
      D = E.indexOf(Je, Math.max(N, D + 1));
    }
    if (N < E.length) {
      let x = E.subarray(N),
        L = xe(x, Je);
      if (L > 0) ve = Buffer.from(x.subarray(x.length - L));
      if (x.length > L) g.push(x.subarray(0, x.length - L));
    }
    if (g.length === 0) return Y;
    if (g.length === 1) return g[0];
    return Buffer.concat(g);
  }
  let Ut = r.alreadyInAlt && !r.holdingFrame;
  function Lt(T) {
    let {
      out: out,
      meaningful: meaningful,
      renders: renders
    } = Br(T);
    if (out.length === 0) return;
    if (!renders) {
      n.write(out);
      return;
    }
    if (Ut) Ut = !1, n.write(F_ + $h);
    n.write(out), ze.feed(out.toString("latin1"), g => {
      if (g === 1004) {
        let N = Bt();
        if (N) n.write(N);
      }
    }), Ke(meaningful);
  }
  let Qe = Y,
    et = !1,
    Me = !1,
    gt = !1;
  function Jt(T) {
    let R = !1,
      E = 0;
    if (gt) {
      if (gt = !1, Me = !1, T[0] === 92) E = 1;
    }
    while (E < T.length) {
      if (Me) {
        let g = E;
        while (g < T.length && T[g] !== 27 && T[g] !== 24 && T[g] !== 26) g++;
        if (g >= T.length) return R;
        if (T[g] !== 27) {
          Me = !1, E = g + 1;
          continue;
        }
        if (g === T.length - 1) return gt = !0, R;
        if (T[g + 1] === 92) {
          Me = !1, E = g + 2;
          continue;
        }
        Me = !1, E = g;
        continue;
      }
      let P = T.indexOf(nr, E);
      if (P < 0) return !0;
      R ||= P > E, Me = !0, E = P + nr.length;
    }
    return R;
  }
  function Br(T) {
    let R = Qe.length > 0 ? Buffer.concat([Qe, T]) : T;
    Qe = Y;
    let meaningful_2 = !1,
      P = !1,
      g = [],
      N = 0;
    for (;;) {
      let V = R.indexOf(kt, N);
      if (V < 0) break;
      if (V > N) {
        let Re = R.subarray(N, V);
        if (g.push(Re), !et) meaningful_2 = Jt(Re) || meaningful_2;else P = !0;
      }
      et = !et, N = V + kt.length;
    }
    let D = R.subarray(N),
      x = xe(D, kt);
    if (x > 0) Qe = Buffer.from(D.subarray(D.length - x)), D = D.subarray(0, D.length - x);
    if (D.length > 0) if (g.push(D), !et) meaningful_2 = Jt(D) || meaningful_2;else P = !0;
    return {
      out: g.length === 0 ? Y : g.length === 1 ? g[0] : Buffer.concat(g),
      meaningful: meaningful_2,
      renders: meaningful_2 || P
    };
  }
  function $t(T) {
    if (z) return;
    let R = requireNonce !== void 0 && j === void 0 && (contentPaintMs === void 0 || promptIdleMs === void 0),
      E = dkr(ae, T, {
        requireNonce: requireNonce
      });
    ae = E.carry;
    let cleaned = E.cleaned;
    if (R) for (let x of E.marks) {
      let L = performance.now() - K;
      if (x.kind === "content_paint" && contentPaintMs === void 0) contentPaintMs = L, msgsLoaded = x.msgsLoaded, msgsInJsonl = x.msgsInJsonl, msgsRenderedAtFirstPaint = x.msgsRenderedAtFirstPaint;else if (x.kind === "prompt_idle" && promptIdleMs === void 0) promptIdleMs = L;
      if (contentPaintMs !== void 0 && promptIdleMs !== void 0) {
        clearTimeout(be);
        let attachMs = Math.round(Math.max(contentPaintMs, promptIdleMs));
        if (r.telemetry?.interactive !== void 0) r.telemetry.interactive.reached = {
          attachMs: attachMs,
          contentPaintMs: contentPaintMs,
          promptIdleMs: promptIdleMs,
          msgsLoaded: msgsLoaded,
          msgsInJsonl: msgsInJsonl,
          msgsRenderedAtFirstPaint: msgsRenderedAtFirstPaint
        };
        if (r.telemetry?.gestureId !== void 0) uJe(r.telemetry.gestureId, {
          interactiveReached: !0,
          attachMs: attachMs,
          msgsLoaded: msgsLoaded,
          msgsInJsonl: msgsInJsonl,
          msgsRenderedAtFirstPaint: msgsRenderedAtFirstPaint
        }, r.telemetry.storageV5);
      }
    }
    let g = Xe.length > 0 ? Buffer.concat([Xe, cleaned]) : cleaned,
      N = g.indexOf(rr);
    if (N >= 0) {
      let x = g.subarray(0, N);
      if (N > 0) {
        let V = jt(Ft(x));
        if (V.length > 0) Lt(V);
      }
      Xe = Y, Pe = Y, ve = Y;
      let L = pkr(x);
      return te("detached", L, {
        viaApc: !0,
        failureClass: Qr(L)
      });
    }
    let D = xe(g, rr);
    if (g.length > D) {
      let x = g.subarray(0, g.length - D),
        L = jt(Ft(x));
      if (L.length > 0) Lt(L);
    }
    if (Xe = D > 0 ? Buffer.from(g.subarray(g.length - D)) : Y, Ot) clearTimeout(mt), mt = setTimeout(() => {
      if (!z && Pt) n.write(gP);
    }, dn);
  }
  return le.on("data", T => {
    if (z) return;
    if (got_ack) {
      clearTimeout(se), $t(T);
      return;
    }
    je = Buffer.concat([je, T]);
    let R = je.indexOf(10);
    if (R < 0) return;
    let E = je.subarray(0, R).toString("utf8"),
      P = je.subarray(R + 1),
      g;
    try {
      g = J(E);
    } catch (error) {
      return te("error", `bad ack: ${l(error)}`, {
        failureClass: "bad_ack"
      });
    }
    if (typeof g !== "object" || g === null) return te("error", "bad ack: non-object ack line", {
      failureClass: "bad_ack"
    });
    if (!g.ok) return te("error", `${g.code}: ${g.error}`, {
      failureClass: Zr(g.code)
    });
    if (got_ack = !0, le.setTimeout(0), !r.holdingFrame && P.length === 0) se = setTimeout(Ar, Xr);
    if (ack_ms = Date.now() - M, via = g.op === "attach" ? WQe(g.via) : void 0, fe = g.op === "attach" && typeof g.booting === "boolean" ? g.booting : void 0, requireNonce = g.op === "attach" && typeof g.imarkNonce === "string" ? g.imarkNonce : void 0, r.telemetry?.gestureId !== void 0) uJe(r.telemetry.gestureId, {
      marksExpected: requireNonce !== void 0,
      daemonBooted: typeof r.telemetry.daemonBooted === "boolean" ? r.telemetry.daemonBooted : void 0,
      attachCold: via !== void 0 ? via === "cold" && (fe ?? !0) : void 0,
      via: via
    }, r.telemetry.storageV5);
    if (r.telemetry?.interactive !== void 0) {
      if (r.telemetry.interactive.marksExpected = r.telemetry.interactive.marksExpected === !0 || requireNonce !== void 0, via !== void 0 && r.telemetry.interactive.reached === void 0) r.telemetry.interactive.attachCold = via === "cold" && (fe ?? !0), r.telemetry.interactive.via = via;
    }
    if (Ie = g.op === "attach" ? g.tempo : void 0, ye = g.op === "attach" ? g.state : void 0, stale = g.op === "attach" ? g.stale : void 0, Ee = g.op === "attach" ? g.workerCliVersion : void 0, cached = g.op === "attach" ? g.cached : void 0, a.TMUX && !nO().tmuxRgbApplied) nO().tmuxRgbApplied = !0, tt("tmux", ["set", "-as", "terminal-features", ",*:RGB"]);
    let D = ((g.op === "attach" ? g.decModes : void 0) ?? []).map(oL).join("");
    if (ze.feed(D), "ref" in o) o.ref();
    pE(o, !0);
    let legacyKitty = Ee !== {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.283",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-09-25T00:44:42Z",
      GIT_SHA: "4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION;
    if (n.write(r.alreadyInAlt ? hP + eQe({
      legacyKitty: legacyKitty
    }) + D : SVt({
      legacyKitty: legacyKitty
    }) + D + (ft ? hP : "") + `
  \x1B[2mAttaching\u2026\x1B[0m
`), "on" in n) n.on("resize", pt);
    if ("columns" in n && (n.columns || cols_2) !== cols_2 || "rows" in n && (n.rows || rows_2) !== rows_2) pt();
    if (o.on("readable", ht), "resume" in o && "pause" in o) o.resume(), o.pause();
    if (o.once("end", Nt), ht(), P.length) $t(P);
  }), le.on("error", T => te("error", yw(l(T)), {
    failureClass: "socket_error"
  })), le.once("close", () => {
    if (!z) te(got_ack ? "disconnected" : "error", "control socket closed", {
      failureClass: "socket_closed"
    });
  }), le.once("connect", () => {
    le.write(b({
      proto: proto,
      op: "attach",
      short: short_2,
      auth: auth,
      cols: cols_2,
      rows: rows_2,
      attachId: attachId,
      caps: cn(),
      ...(r.holdingFrame && {
        holdingFrame: !0
      })
    }) + `
`);
  }), promise_2;
}
function cn() {
  return {
    imark: !0,
    terminal: a.terminal,
    mux: a.TMUX ? "tmux" : process.env.ZELLIJ != null ? "zellij" : a.STY ? "screen" : null,
    ssh: a.isSSH(),
    wheelFlood: Qer(),
    hyperlinks: Ny(),
    progressReporting: Eje(),
    wtSession: !!a.WT_SESSION,
    isVscodeTerm: a.TERM_PROGRAM === "vscode",
    keyDialect: oQe(a.TERM),
    browser: a.BROWSER ?? null,
    colorLevel: pe.level,
    syncOutput: G8r(),
    editor: a.VISUAL || a.EDITOR || null,
    systemTheme: Voo(),
    ...(a.TMUX && {
      tmuxSocket: Ze(a.TMUX, ",")
    })
  };
}
var ln = 7,
  un = {
    head: 40,
    tail: 20
  },
  pn = {
    head: 50,
    tail: 30
  },
  ur = 1000,
  maxBuffer = 1e6;
async function dt(e) {
  let [r, o] = await Promise.all([St(e, ["log", "--no-show-signature", `--max-count=${ur}`, "--format=%H%x00%s", "HEAD", "--not", "--remotes"]), St(e, ["symbolic-ref", "-q", "--short", "HEAD"])]);
  if (r.code !== 0) return;
  let n = r.stdout.split(`
`).map(item => item.split("\x00")).filter(item => item.length === 2 && item[0] !== ""),
    h = n[0];
  if (h === void 0 || !UJ(h[0])) return;
  return {
    branch: o.code === 0 ? Hm(o.stdout, pn) || null : null,
    count: n.length,
    headSha: h[0],
    shortSha: h[0].slice(0, ln),
    subject: Hm(h[1], un)
  };
}
function v7n(e) {
  return `${e.count}${mr(e)} unpushed ${I(e.count, "commit")} on ${e.branch ?? "detached HEAD"}`;
}
function f5r(e) {
  let r = e.count > 1 ? ` and ${e.count - 1}${mr(e)} more` : "";
  return `${v7n(e)}: ${[e.shortSha, e.subject].filter(Boolean).join(" ")}${r}`;
}
async function vt(e, r) {
  if (!UJ(r)) return !1;
  let o = await St(e, ["rev-parse", "HEAD"]);
  return o.code === 0 && o.stdout.trim() === r;
}
async function St(cwd, r) {
  return Ve(yt(), [...mn, ...r], {
    cwd: cwd,
    env: No(),
    maxBuffer: maxBuffer
  });
}
function mr(e) {
  return e.count >= ur ? "+" : "";
}
function k7n(e, r) {
  return e === r || e.endsWith(`

${r}`);
}
async function wbe(e, r, o, n, h) {
  return ja(e, {
    ...r,
    queuedPrompt: !(h && r.queuedPrompt) ? o : k7n(r.queuedPrompt, o) ? r.queuedPrompt : `${r.queuedPrompt}

${o}`,
    updatedAt: new Date().toISOString()
  }, n).then(() => !0, s => (ml(s), !1));
}
var Zht = "recap.trigger";
function vn(e, r) {
  if (H() && r !== void 0) {
    let o = Ae.job(e, [Zht]);
    if (em(o) === void 0) {
      r.write(o, "", {
        publishDiscipline: "inPlace"
      }).catch(() => {});
      return;
    }
  }
  kn(At(Pr(e), Zht), "").catch(() => {});
}
async function mue(short_3, r, o, n) {
  if (r?.backend === "peer") return {
    confirmed: !0
  };
  let handoff = o?.handoff ? !0 : void 0,
    evict = o?.evict ? !0 : void 0,
    u = o?.knownGone ? {
      ok: !1,
      code: "ENOJOB",
      error: "job already gone (caller-verified)"
    } : await hg({
      proto: proto,
      op: "kill",
      short: short_3,
      handoff: handoff,
      evict: evict
    });
  for (let A = 0; !u.ok && u.code === "ESTARTING" && A < 10; A++) await Q(200), u = await hg({
    proto: proto,
    op: "kill",
    short: short_3,
    handoff: handoff,
    evict: evict
  });
  if (u.ok) return {
    confirmed: !0
  };
  if (u.code === "ENOJOB" || u.code === "ENOCONN" || u.code === "ETIMEOUT") {
    let A = await USn(short_3, n);
    if (A.anyMatch && u.code === "ENOJOB") return {
      confirmed: A.confirmed
    };
    let w = !1;
    if (u.code === "ENOCONN" || u.code === "ETIMEOUT") {
      let confirmed;
      if (A.anyMatch) confirmed = A.confirmed;else {
        let M = await VP({
            silent: !0
          }, n),
          k = M.workers[short_3];
        if (k !== void 0) {
          let S = await zen(k.pid, k.procStart);
          if (S === "zombie") {
            if (k.procStart !== void 0 && (await Kk(k.pid, k.procStart)) === !0) {
              try {
                process.kill(-k.pid, "SIGKILL");
              } catch {
                try {
                  process.kill(k.pid, "SIGKILL");
                } catch {}
              }
              confirmed = !0;
            } else confirmed = !1;
          } else confirmed = S !== "live";
        } else w = u.code === "ENOCONN" && !A.scanFailed && !M.parseFailed && r?.state !== void 0 && Mi({
          state: r.state,
          tempo: r.tempo
        }), confirmed = w;
      }
      if (evict && confirmed && u.code === "ENOCONN" && !w) await u3(M => {
        delete M.workers[short_3];
      }, n).catch(M => d(M));
      return {
        confirmed: confirmed
      };
    }
    return {
      confirmed: !0
    };
  }
  return {
    confirmed: !1,
    error: u.error
  };
}
async function USn(e, r) {
  let ctrlSent = await $Pe(kS(e)),
    anyMatch = !1,
    confirmed_2 = !0,
    scanFailed = !1,
    u = await N3(r).catch(() => (scanFailed = !0, []));
  for (let A of u) if (A.kind === "bg" && (A.jobId === e || A.sessionId?.startsWith(e))) {
    if (anyMatch = !0, !ctrlSent) try {
      process.kill(A.pid, "SIGTERM");
    } catch {}
    let w = Date.now() + 3000,
      C = !0;
    while ((C = await Zxt(A.pid, A.procStart)) && Date.now() < w) await Q(100);
    if (C) {
      i("tengu_bg_killjob_ctrl_fallback", {
        ctrlSent: ctrlSent
      });
      try {
        process.kill(A.pid, "SIGTERM");
      } catch {}
      let M = Date.now() + 500;
      while ((C = await Zxt(A.pid, A.procStart)) && Date.now() < M) await Q(100);
    }
    if (C) confirmed_2 = !1;
  }
  return {
    confirmed: confirmed_2,
    anyMatch: anyMatch,
    scanFailed: scanFailed
  };
}
async function eyt(e) {
  let r = await hg({
    proto: proto,
    op: "list"
  });
  if (r.ok && r.op === "list") return {
    shorts: new Set(r.jobs.map(item => item.short)),
    records: r.jobs.filter(item => !item.outcome)
  };
  let o = await VP({
      silent: !0
    }, e),
    n = Object.entries(o.workers),
    h = await Promise.all(n.map(([, s]) => Zxt(s.pid, s.procStart)));
  return {
    shorts: new Set(n.filter((item, index) => h[index]).map(([s]) => s)),
    records: []
  };
}
async function N2t(short_4, r) {
  let o = await hg({
    proto: proto,
    op: "has",
    short: short_4
  });
  if (o.ok && o.op === "has") return {
    alive: o.alive,
    present: o.present ?? o.alive,
    daemonUp: !0
  };
  let n = (await VP({
      silent: !0
    }, r)).workers[short_4],
    h = n !== void 0 && (await Zxt(n.pid, n.procStart));
  return {
    alive: h,
    present: h,
    daemonUp: !1
  };
}
async function E7n(short_5) {
  let r = await hg({
    proto: proto,
    op: "has",
    short: short_5
  });
  return r.ok && r.op === "has" ? r.present ?? r.alive : !1;
}
function U1e(e, r) {
  return {
    ...e,
    ...(Pqe(e) && {
      state: "working"
    }),
    detail: Xc(qo(r).replace(/\s+/g, " ").trim(), Em),
    tempo: "active",
    needs: void 0,
    block: void 0,
    suggestedReply: void 0,
    output: null,
    updatedAt: new Date().toISOString()
  };
}
var err_2 = "That session isn't running \u2014 respawn it first",
  err = "Can't send \u2014 that session is running in another terminal";
function br() {
  return `Couldn't reach the ${kp()} \u2014 it may be restarting. Press Enter to retry`;
}
function T7n(e) {
  return e.startsWith(br());
}
var pr = " \u2014 your message was saved and will be delivered when the session restarts";
async function hr(e, r, o) {
  if (Kh(r) !== "prompt") return !1;
  Ju(e);
  let n = await Ir(e, o);
  if (!n) return !1;
  if (n.queuedPrompt !== void 0) return n.queuedPrompt === r;
  return wbe(e, n, r, o);
}
async function B1e(short_6, text, o, n, h, s) {
  let u = Date.now(),
    A = (F, G) => {
      i("tengu_bg_reply_outcome", {
        ms: Date.now() - u,
        outcome: c(F),
        error_code: ue(G)
      });
    };
  if (o?.backend === "peer") {
    if (!o.sock) return _("job_reply"), A("ok"), {
      err: err
    };
    try {
      return await KOt(o.sock, text, s), _("job_reply"), A("ok"), null;
    } catch (error) {
      return m("job_reply", "job_reply_peer_send_failed"), A("bad", "job_reply_peer_send_failed"), {
        err: `Couldn't send to that session \u2014 ${l(error)}`
      };
    }
  }
  let w = Pr(short_6),
    C = n ?? (await Ir(w, s)),
    auth_2 = await _ge(),
    k = () => hg({
      proto: proto,
      op: "reply",
      short: short_6,
      text: text,
      auth: auth_2
    }),
    S = await k(),
    K = 10;
  for (let F = 0; !S.ok && (S.code === "ESTARTING" || S.code === "ENOREPLY" || S.code === "ERESPAWNING") && F < K; F++) {
    if (S.code === "ERESPAWNING") K = 60;
    await Q(200), S = await k();
  }
  if (!S.ok && S.code === "EAUTH") {
    let F = await _ge();
    if (F && F !== auth_2) auth_2 = F, S = await k();
  }
  let ensure_failed = !1;
  if (!S.ok && (S.code === "ENOCONN" || S.code === "ETIMEOUT")) {
    let F = await Aj({
      forceTransient: !0
    }, s);
    if (ensure_failed = !F.ok, F.ok) {
      auth_2 = (await _ge()) ?? auth_2, S = await k();
      for (let G = 0; !S.ok && (S.code === "ESTARTING" || S.code === "ENOREPLY") && G < 10; G++) await Q(200), S = await k();
    }
  }
  if (S.ok) {
    if (C && !n) {
      Ju(w);
      let F = (await Ir(w, s)) ?? C,
        G = U1e(F, text);
      if (G.queuedPrompt === text) G.queuedPrompt = void 0;
      ja(w, G, s).catch(ml);
    }
    if (!n) i("tengu_bg_agent_action", {
      action: y("reply"),
      wasTerminal: C ? zA(C.state) : !1,
      daemon: !0,
      jobSessionId: _e(o?.sessionId ?? C?.sessionId),
      ...h?.()
    }), _("job_reply"), A("ok");
    return null;
  }
  if (S.code === "ENOJOB") {
    if (!n) p("job_reply", "job_reply_not_running"), A("sad", "job_reply_not_running");
    return {
      err: err_2,
      code: S.code
    };
  }
  if (S.code === "ENOCONN" || S.code === "ETIMEOUT") {
    if (!n && S.code === "ENOCONN") {
      let G = (await VP({
        silent: !0
      }, s)).workers[C?.daemonShort ?? short_6];
      if (G && !(await Zxt(G.pid, G.procStart))) return p("job_reply", "job_reply_not_running"), A("sad", "job_reply_not_running"), {
        err: err_2,
        code: "ENOJOB"
      };
    }
    if (!n) m("job_reply", "job_reply_daemon_unreachable", {
      errno: c(S.code),
      ensure_failed: ensure_failed
    }), A("bad", "job_reply_daemon_unreachable");
    let queued = !n && S.code === "ENOCONN" && !S.connected && (await hr(w, text, s));
    return {
      err: br() + (queued ? pr : ""),
      code: S.code,
      queued: queued
    };
  }
  if (!n) m("job_reply", "job_reply_send_failed"), A("bad", "job_reply_send_failed");
  let queued_2 = !n && (await hr(w, text, s));
  return {
    err: `Couldn't send your message \u2014 ${S.error}` + (queued_2 ? pr : ""),
    code: S.code,
    queued: queued_2
  };
}
async function gr(e, r, o) {
  let n = await rPt(Pr(e), o);
  if (n === null) return _("job_attach"), G2(r, "detached"), {
    kind: "error",
    ended: !0,
    msg: "That session was removed \u2014 back to the list"
  };
  if (n.state === "done" || n.state === "stopped" || n.state === "blocked") return _("job_attach"), G2(r, "detached"), {
    kind: "error",
    ended: !0,
    msg: n.state === "stopped" ? "That session was stopped \u2014 back to the list" : n.state === "blocked" ? "That session is blocked \u2014 back to the list" : "That session ended \u2014 back to the list"
  };
  if (n.state === "failed") {
    if (n.detail === Tke || n.detail === $ot) return m("job_attach", "job_attach_host_dead"), G2(r, "error"), {
      kind: "error",
      msg: n.detail === $ot ? NDe : `${LDe} \u2014 press Enter to restart it`
    };
    let h = n.detail.includes("before init");
    return p("job_attach", h ? "job_attach_pre_init_crash" : "job_attach_crash_loop"), {
      kind: "error",
      ended: !0,
      msg: `Session can't start \u2014 ${n.detail.replace(/^.*?before init(?: \u2014 )?/, "").replace(/^Error:\s*/, "") || n.detail || "it crashed repeatedly"}`
    };
  }
  return;
}
async function C7n(e, r = {}) {
  vn(e, r.storageV5), t("[PERF:bg-attach-start]"), vje();
  let o = Not,
    n = Lot,
    h = {
      holdScreenOnDisconnect: !0,
      alreadyInAlt: r.alreadyInAlt,
      gateStdinUntilFirstFrame: r.gateStdinUntilFirstFrame
    },
    s = {
      ...h,
      holdingFrame: !0,
      gateStdinUntilFirstFrame: !1
    },
    u = r.gesture ?? {
      gestureId: gn(),
      attempt: 0,
      interactive: {}
    },
    A = !r.alreadyInAlt,
    w = await $1e(e, {
      ...h,
      telemetry: {
        gestureId: u.gestureId,
        attempt: ++u.attempt,
        t0: u.t0,
        surface: u.surface,
        daemonBooted: u.daemonBooted,
        interactive: u.interactive,
        storageV5: r.storageV5
      }
    }),
    C;
  if (w.outcome === "error" && w.msg && o.test(w.msg)) {
    if (C = await Aj({
      forceTransient: !0
    }, r.storageV5), C.ok) w = await $1e(e, {
      ...h,
      telemetry: {
        gestureId: u.gestureId,
        attempt: ++u.attempt,
        t0: u.t0,
        surface: u.surface,
        daemonBooted: u.daemonBooted,
        interactive: u.interactive,
        storageV5: r.storageV5
      }
    });
  }
  for (let k = 0; w.msg && n.test(w.msg) && k < 20; k++) await Q(500), w = await $1e(e, {
    ...h,
    telemetry: {
      gestureId: u.gestureId,
      attempt: ++u.attempt,
      t0: u.t0,
      surface: u.surface,
      daemonBooted: u.daemonBooted,
      interactive: u.interactive,
      storageV5: r.storageV5
    }
  });
  let M = async () => {
    if (A) process.stdout.write(aoe());
    let k = await gr(e, u, r.storageV5);
    if (k) return k;
    return p("job_attach", "job_attach_crashed"), {
      kind: "error",
      orphaned: !0,
      msg: "Session crashed \u2014 press Enter to respawn"
    };
  };
  while (w.outcome === "disconnected") {
    let S = Math.max(1, (process.stdout.columns ?? 80) - 15);
    process.stdout.write(`\x1B7${R$(1, S)}\x1B[2;7m${" Reconnecting\u2026 "}\x1B[0m\x1B8`);
    let K;
    if (process.stdin.isTTY) {
      let F = "isRaw" in process.stdin ? Boolean(process.stdin.isRaw) : !1;
      if (!F) pE(process.stdin, !0);
      let G = lr(process.stdin);
      try {
        K = await Promise.race([Aj({
          forceTransient: !0
        }, r.storageV5), G.promise.then(() => "detach")]);
      } finally {
        if (G.cancel(), !F) pE(process.stdin, !1);
      }
    } else K = await Aj({
      forceTransient: !0
    }, r.storageV5);
    if (K === "detach") {
      if (A) process.stdout.write(aoe());
      return t("[PERF:bg-attach-end]"), _("job_attach"), G2(u, "detached"), {
        kind: "detached"
      };
    }
    let W = K;
    if (!W.ok) {
      if (A) process.stdout.write(aoe());
      return m("job_attach", `job_attach_daemon_start_failed_${W.causeCode}`), G2(u, "error"), {
        kind: "error",
        msg: `Couldn't restart the ${kp()} \u2014 ${W.reason}`
      };
    }
    let q = vje();
    if (q && L2t(q)) {
      if (A) process.stdout.write(aoe());
      return t("[PERF:bg-attach-end]"), _("job_attach"), G2(u, "detached"), {
        kind: "detached"
      };
    }
    if (await D2t(e)) return t(`[bg-attach] worker gone on reconnect probe short=${e} \u2014 settled while attached`), M();
    w = await $1e(e, {
      ...s,
      telemetry: {
        gestureId: u.gestureId,
        attempt: ++u.attempt,
        t0: u.t0,
        surface: u.surface,
        daemonBooted: u.daemonBooted,
        interactive: u.interactive,
        storageV5: r.storageV5
      }
    });
    for (let F = 0; w.msg && n.test(w.msg) && F < 10; F++) await Q(200), w = await $1e(e, {
      ...s,
      telemetry: {
        gestureId: u.gestureId,
        attempt: ++u.attempt,
        t0: u.t0,
        surface: u.surface,
        daemonBooted: u.daemonBooted,
        interactive: u.interactive,
        storageV5: r.storageV5
      }
    });
    if (w.msg?.includes("ENOJOB")) return t(`[bg-attach] ENOJOB on reconnect short=${e} \u2014 daemon has no handle (or it's killing/settled)`), M();
    if (w.outcome === "error" && A) process.stdout.write(aoe());
  }
  if (w.outcome === "detached" && w.msg && (Uot.test(w.msg) || n.test(w.msg))) {
    if (A) process.stdout.write(aoe());
    return m("job_attach", "job_attach_stalled"), {
      kind: "error",
      msg: w.msg.replace(/^E(STALLED|RESPAWNING|STARTING):\s*/, "")
    };
  }
  if (w.outcome === "error") {
    if (w.msg?.startsWith(`${Fot}:`)) {
      m("job_attach", "job_attach_host_dead");
      let S = await Ir(Pr(e), r.storageV5).catch(() => null),
        K = w.msg.slice(Fot.length + 1).trim();
      return {
        kind: "error",
        msg: S !== null && CE(S) ? K : `${K} \u2014 press Enter to restart it`
      };
    }
    if (w.msg?.startsWith(`${M2t}:`)) {
      m("job_attach", "job_attach_no_response");
      let S = await Ir(Pr(e), r.storageV5).catch(() => null);
      if (S !== null && CE(S)) return {
        kind: "error",
        msg: `${pJe} \u2014 it runs a shell command, which is never run again for you; ctrl+x stops it`
      };
      return {
        kind: "error",
        notResponding: !0,
        msg: `${pJe} \u2014 press Enter again to restart it (the conversation is saved)`
      };
    }
    if (w.msg?.includes("ENOJOB")) {
      t(`[bg-attach] ENOJOB on first attach short=${e} \u2014 daemon has no handle (or it's killing/settled)`);
      let S = await gr(e, void 0, r.storageV5);
      if (S) return S;
      return p("job_attach", "job_attach_orphaned"), {
        kind: "error",
        orphaned: !0,
        msg: `${JZ()} lost track of this job \u2014 press Enter to respawn it`
      };
    }
    if (C && !C.ok) return m("job_attach", `job_attach_daemon_start_failed_${C.causeCode}`), G2(u, "error"), {
      kind: "error",
      msg: `Couldn't start the ${kp()} \u2014 ${C.reason}`
    };
    let msg_2 = w.msg && n.test(w.msg) ? `${JZ()} is still starting \u2014 try again in a moment` : w.msg && o.test(w.msg) ? `${JZ()} didn't respond after starting \u2014 try again in a moment` : w.msg ? `Couldn't attach \u2014 ${w.msg}` : "Couldn't attach to that session";
    return m("job_attach", "job_attach_failed"), {
      kind: "error",
      msg: msg_2
    };
  }
  if (t("[PERF:bg-attach-end]"), _("job_attach"), w.msg && HDe.test(w.msg)) return {
    kind: "detached",
    msg: w.msg.replace(HDe, "")
  };
  return {
    kind: "detached"
  };
}
var yr = 32,
  Rn = {
    head: 50,
    tail: 30
  },
  An = {
    head: 60,
    tail: 100
  },
  regExp = new RegExp(`^[0-9a-f]{${yr}}$`);
function Tn(e) {
  return Kt(e).slice(0, yr);
}
async function AQ(e, r = {}, storageV5) {
  let n = await Ir(Pr(e), storageV5),
    h = n?.worktreePath ? await N3(storageV5).catch(() => []) : [],
    s = new Set();
  for (let k of h) if (k.kind === "bg" && (k.jobId === e || k.sessionId?.startsWith(e))) s.add(k.pid);
  let u = await mue(e, n ?? void 0, {
    knownGone: r.knownGone,
    evict: !0
  }, storageV5).catch(k => ({
    confirmed: !1,
    error: l(k)
  }));
  if (!u.confirmed) {
    if (t(`deleteJob: kill unconfirmed for ${e} \u2014 skipping jobdir/worktree removal to avoid stranding a live worker`, {
      level: "warn"
    }), !r.internal) m("job_delete", "kill_unconfirmed", {
      had_worktree: Boolean(n?.worktreePath)
    });
    return {
      removed: !1,
      error: u.error,
      errorCode: "kill_unconfirmed"
    };
  }
  let leftWorktreeDir,
    forcedWorktreeRemoval,
    C = !1;
  if (n?.worktreePath) {
    let worktreePath = n.worktreePath,
      keptReason,
      cause,
      forceRemoveWithheld,
      q = null,
      F = "present",
      G = !1,
      keptErrorSummary,
      keptUnpushed,
      j,
      {
        dirty: dirty,
        trackedChanges: trackedChanges,
        gitError: gitError,
        submoduleWork: submoduleWork
      } = await qve(worktreePath, void 0),
      ee = nZt(worktreePath, n.originCwd) ?? void 0,
      U = await We(worktreePath).catch(() => worktreePath),
      worktreeDigest = Tn(U);
    C = r.discardUnpushed !== void 0 && !gitError && r.discardUnpushed.worktreeDigest === worktreeDigest && (await vt(U, r.discardUnpushed.headSha));
    let Ie = !gitError && ee ? await Pie(ee).catch(() => null) : null,
      ye,
      Ne = !1;
    for (let [re, se] of (Ie ?? []).entries()) if ((await We(se.worktreePath).catch(() => se.worktreePath)) === U) {
      ye = se, Ne = re > 0 && !se.prunable;
      break;
    }
    let Ee = VNn(U),
      Fe = ee !== void 0 && Ee !== null && (await We(Ee).catch(() => Ee)) === (await We(ee).catch(() => ee)),
      ie = Ne && Fe ? submoduleWork?.kind === "unverifiable" ? "submodule" : trackedChanges ? "tracked_changes" : void 0 : ee !== void 0 && (await oZt(U, ee)) ? void 0 : "not_registered",
      forceRemoveRequested = r.forceRemoveWorktree !== void 0 && r.forceRemoveWorktree === worktreeDigest,
      he = forceRemoveRequested && ie === void 0 && sZt(U),
      Ke = he ? "job_delete_force_remove" : r.force === !0 || C ? "job_delete_force" : "job_delete",
      qe = FAt(Ke),
      Be = DAt(ye?.lockReason),
      z;
    if ((z = await Bn(e, U, worktreePath, storageV5)) !== null) keptReason = "in_use", keptErrorSummary = z.verified && DL.test(z.jobId) ? z.jobId : void 0, t(`deleteJob: ${worktreePath} is claimed by running job ${z.jobId}'s state.json (${z.verified ? "verified" : "unverifiable claim"}) \u2014 not ours to remove`, {
      level: "warn"
    });else if (((G = (await NBt(worktreePath)) === null) || C || he) && (F = await Sne(worktreePath)) !== "gone" && (q = F === "unreadable" ? "unreadable" : await Rt(e, U, worktreePath, {
      includeUnsettled: C || he
    }, storageV5)) !== null) {
      if (q === "claimed" && !G && C) keptReason = "unpushed_shared", keptUnpushed = await dt(worktreePath).catch(() => {
        return;
      });else keptReason = q === "claimed" ? "shared_record" : "records_unreadable";
      t(q === "claimed" ? `deleteJob: ${worktreePath} is also recorded by another settled job's state.json \u2014 not removing another session's output` : `deleteJob: could not verify ${worktreePath} against sibling records \u2014 refusing until records are readable`, {
        level: "warn"
      });
    } else if (!(await nDe(ye?.lockReason)) && !(Be !== null && s.has(Be))) keptReason = "live_lock", keptErrorSummary = Be !== null ? `pid ${Be}` : void 0, t(`deleteJob: ${worktreePath} is locked by a live Claude Code process, or with a reason we did not write (${ye?.lockReason}) \u2014 not ours to remove`, {
      level: "warn"
    });else if ((j = await On(h, e, s, U, worktreePath)) !== void 0 && (await Sne(worktreePath)) !== "gone") keptReason = "occupied", keptErrorSummary = j.pid === process.pid ? `${typeof j.parkedJobId === "string" && DL.test(j.parkedJobId) ? `session ${j.parkedJobId},` : "a session"} moved to the background from this window, pid ${j.pid}` : j.kind === "bg" && typeof j.jobId === "string" && DL.test(j.jobId) ? `background session ${j.jobId}, pid ${j.pid}` : `pid ${j.pid}, ${j.kind}`, t(`deleteJob: ${worktreePath} is the working directory of a live session (pid ${j.pid}, ${j.kind}) \u2014 not ours to remove`, {
      level: "warn"
    });else if (dirty && !gitError && !qe) keptReason = "dirty", t(`deleteJob: worktree has uncommitted changes, kept ${worktreePath}`, {
      level: "warn"
    });else if (!gitError && ee && !C && !(await qNn(worktreePath, await $At(ee), {
      primaryCheckoutVouches: !0
    }))) {
      if ((await Rt(e, U, worktreePath, {
        includeUnsettled: !1
      }, storageV5)) === "claimed") keptReason = "unpushed_shared", t(`deleteJob: ${worktreePath} has unpushed commits and is also recorded by another settled job's state.json \u2014 not offering a discard`, {
        level: "warn"
      });else keptReason = "unpushed", t(`deleteJob: ${worktreePath} has commits that are on no remote, kept`, {
        level: "warn"
      });
      keptUnpushed = await dt(worktreePath).catch(() => {
        return;
      });
    } else if (C && r.discardUnpushed !== void 0 && !(await vt(U, r.discardUnpushed.headSha))) keptReason = "unpushed", t(`deleteJob: ${worktreePath} HEAD moved past the confirmed discard pin, kept`, {
      level: "warn"
    }), keptUnpushed = await dt(worktreePath).catch(() => {
      return;
    });else {
      let re = nZt(worktreePath, n.originCwd) ?? void 0,
        se = (n.originCwd ? Fn(n.originCwd) : null) ?? void 0,
        X = await j8(worktreePath, n.worktreeBranch, re, n.worktreeHookBased, Ke, U, se, {
          storageV5: storageV5,
          forceRemoveRequested: forceRemoveRequested
        }).catch(ne => (t(`deleteJob: removeAgentWorktree threw for ${worktreePath}: ${l(ne)}`, {
          level: "error"
        }), {
          outcome: "failed",
          errorSummary: `the removal failed unexpectedly (${Hm(l(ne), An)})`
        }));
      if (X.outcome === "failed") {
        if (keptReason = X.needsForce ? "unverified" : X.errorSummary === iDe ? "identity_changed" : "remove_failed", keptErrorSummary = X.needsForce ? void 0 : X.errorSummary, X.forceRemovable !== void 0 && sZt(U)) if (ie !== void 0) forceRemoveWithheld = ie;else if ((await Rt(e, U, worktreePath, {
          includeUnsettled: !1
        }, storageV5)) === "claimed") forceRemoveWithheld = "shared_record";else cause = X.forceRemovable;
      } else if (X.outcome === "left_in_place") leftWorktreeDir = Hm(worktreePath);else if (X.forcedDirectoryRemoval) {
        let {
          keptBranch: keptBranch
        } = X.forcedDirectoryRemoval;
        forcedWorktreeRemoval = {
          worktree: Hm(U),
          ...(keptBranch !== void 0 && {
            keptBranch: Hm(keptBranch, Rn)
          })
        };
      }
    }
    if (keptReason) {
      if (!r.internal) p("job_delete", `worktree_kept_${keptReason}`, {
        had_worktree: !0
      });
      return {
        removed: !1,
        keptWorktree: Hm(U),
        keptReason: keptReason,
        ...(keptErrorSummary !== void 0 && {
          keptErrorSummary: keptErrorSummary
        }),
        ...(keptUnpushed !== void 0 && {
          keptUnpushed: keptUnpushed
        }),
        ...(keptReason === "unpushed" && keptUnpushed !== void 0 ? {
          discardUnpushed: {
            headSha: keptUnpushed.headSha,
            worktreeDigest: worktreeDigest
          }
        } : cause !== void 0 && C && r.discardUnpushed !== void 0 && {
          discardUnpushed: r.discardUnpushed
        }),
        ...(cause !== void 0 && {
          forceRemoveWorktree: {
            worktreeDigest: worktreeDigest,
            cause: cause
          }
        }),
        ...(forceRemoveWithheld !== void 0 && {
          forceRemoveWithheld: forceRemoveWithheld
        }),
        ...(submoduleWork !== void 0 && (keptReason === "dirty" || keptReason === "remove_failed") && {
          submoduleWork: submoduleWork
        })
      };
    }
  }
  let M = n?.fan?.some(k => k.kind === "shell" && k.doneAt === void 0) ?? !1;
  await Wt(Pr(e), {
    waitMs: M ? 4000 : 0
  });
  try {
    await yn(Pr(e), {
      recursive: !0,
      force: !0
    });
  } catch (k) {
    if (Ju(Pr(e)), t(`deleteJob: failed to remove job dir for ${e}: ${l(k)}`, {
      level: "warn"
    }), !r.internal) m("job_delete", "jobdir_rm_failed", {
      had_worktree: Boolean(n?.worktreePath)
    });
    return {
      removed: !1,
      error: `couldn't remove the session's state directory (${fr(l(k))})`,
      errorCode: "jobdir_rm_failed"
    };
  }
  if (H() && storageV5 !== void 0 && em(VSn(e)) === void 0) await oyt(storageV5, e);else await wn(Lae(e)).catch(() => {});
  if (Ju(Pr(e)), !r.internal) if (leftWorktreeDir) p("job_delete", "worktree_left_in_place", {
    had_worktree: !0,
    discard_confirmed: C
  });else if (forcedWorktreeRemoval) p("job_delete", "worktree_force_removed", {
    had_worktree: !0,
    discard_confirmed: C
  });else _("job_delete", {
    had_worktree: Boolean(n?.worktreePath),
    discard_confirmed: C
  });
  return {
    removed: !0,
    discardConfirmed: C,
    ...(leftWorktreeDir && {
      leftWorktreeDir: leftWorktreeDir
    }),
    ...(forcedWorktreeRemoval && {
      forcedWorktreeRemoval: forcedWorktreeRemoval
    })
  };
}
async function Bn(e, r, o, n) {
  for (let h of await cv(void 0, n).catch(() => [])) {
    if (h.id === e || !h.state.worktreePath || Mi(h.state)) continue;
    let s = wr(h.state.worktreePath, r, o);
    if (s === "match") return {
      jobId: h.id,
      verified: !0
    };
    if (s === "unverifiable") return {
      jobId: h.id,
      verified: !1
    };
    let u = await kr(h.state.worktreePath, o);
    if (De(u, r)) return {
      jobId: h.id,
      verified: !0
    };
  }
  return null;
}
function wr(e, r, o) {
  if (De(e, o) || De(e, r)) return "match";
  if (!Ka(e)) return "no_match";
  let n = En(e);
  if (De(n, o) || De(n, r)) return "match";
  return ut(e) && !Dn(e) && !Yi(e) ? "unverifiable" : "no_match";
}
function De(e, r) {
  return ct(e) === ct(r);
}
function ct(e) {
  return Am(xn(e));
}
function _r(e, r) {
  let o = Sn(ct(r), ct(e));
  return o.split(/[/\\]/, 1)[0] !== ".." && !ut(o);
}
async function On(e, r, o, n, h) {
  for (let s of e) {
    if (s.kind !== "interactive" && s.kind !== "bg") continue;
    if (o.has(s.pid) || s.parkedJobId === r) continue;
    if (s.pid === process.pid && s.parkedJobId === void 0) continue;
    let u = s.pid === process.pid ? we() : s.cwd;
    if (typeof u !== "string" || !ut(u)) continue;
    if (!_r(u, n) && !_r(u, h)) continue;
    if (s.kind === "bg" && typeof s.jobId === "string" && DL.test(s.jobId)) {
      if ((await Er(Pr(s.jobId))) === "missing") continue;
    }
    return s;
  }
  return;
}
function kr(e, r) {
  let o = oe();
  if (!ut(e) || Ka(e) || _i(e, o) && _i(e, r)) return e;
  let n = eM(ce(), e, {
    surfaceNetworkRaw: !0,
    anchors: [o, r]
  });
  if (n === Uh) return e;
  if (n !== void 0 && (Ka(n) || _i(n, o) && _i(n, r))) return e;
  return We(e).catch(() => e);
}
async function Er(e) {
  return _n(At(e, "state.json")).then(() => "present", r => B(r) ? "missing" : "unreadable");
}
async function Rt(e, r, o, {
  includeUnsettled: includeUnsettled
}, h) {
  let s;
  try {
    s = await bn(WA(), {
      withFileTypes: !0
    });
  } catch (error) {
    return B(error) ? null : "unreadable";
  }
  for (let u of s) {
    if (!u.isDirectory() || u.name === e) continue;
    let A = At(WA(), u.name),
      w = await Ir(A, h);
    if (w === null) {
      if ((await Er(A)) === "missing") continue;
      return "unreadable";
    }
    if (!w.worktreePath || !includeUnsettled && !Mi(w)) continue;
    let C = wr(w.worktreePath, r, o);
    if (C === "match") return "claimed";
    if (C === "unverifiable") return "unreadable";
    let M = await kr(w.worktreePath, o);
    if (De(M, r)) return "claimed";
  }
  return null;
}
export { HPe, uJe, YD, M2t, pJe, G2, D2t, L2t, $1e, v7n, f5r, k7n, wbe, Zht, mue, USn, eyt, N2t, E7n, U1e, err_2 as vbe, err as BSn, T7n, B1e, C7n, regExp as jSn, AQ };