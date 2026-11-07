// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { b, f, de } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { d, k, db, K } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { Ee } from "B:/~BUN/root/chunk-game8aqv.js";
import { J } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { En, or, bl, ca, Cl } from "B:/~BUN/root/chunk-h4acfc9y.js";
import { t, _, ee, Zy, Tj, ie } from "B:/~BUN/root/chunk-2pp12te6.js";
import { P, tt, Yr } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { _s } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { yd, Xy, Rw, tc } from "B:/~BUN/root/chunk-xqymp2nr.js";
import { pe } from "B:/~BUN/root/chunk-thn0wk2x.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { yn, ys } from "B:/~BUN/root/chunk-88zb3509.js";
import { ut, lt } from "B:/~BUN/root/chunk-3mm90xb6.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { OH, Is, zn } from "B:/~BUN/root/chunk-nsneqfcc.js";
import { Ve } from "B:/~BUN/root/chunk-myfamxtp.js";
import { Dj, i5s, eYe, pvt, Kme, D7, d5s } from "B:/~BUN/root/chunk-79g8vcsc.js";
import { El } from "B:/~BUN/root/chunk-pzs4x0zd.js";
import { yA, Gze, Jwr, tCe, rLe, Upt, _A, nue } from "B:/~BUN/root/chunk-8qv1t8b3.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { yj, ov, RT, Zpe } from "B:/~BUN/root/chunk-1w2vha2y.js";
import { Vu as proto, nD, WIt, ece, Ahr, Bls, GIt, Wls, $Xt, UXt, jXt, $9e, Sut, WXt, wut, zXt, kut, GXt, t1, tce, Ihr, BPn, M$, No, ic, Td, rh, Fo, YPn, EI, $P, ml, GE, QIt } from "B:/~BUN/root/chunk-4vcs773m.js";
import { Se } from "B:/~BUN/root/chunk-x24hm796.js";
import { eg, S5, fr, k2n, Pt } from "B:/~BUN/root/chunk-1g25msn4.js";
import { Jte } from "B:/~BUN/root/chunk-t4qpmjt5.js";
import { JU } from "B:/~BUN/root/chunk-5xx1vfdh.js";
import { Wd } from "B:/~BUN/root/chunk-2f1svh63.js";
import { _e } from "B:/~BUN/root/chunk-4vxp7kvb.js";
import { _n, jd, Tf } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { py, zEe, DPn } from "B:/~BUN/root/chunk-fc7k1zas.js";
import { T7n } from "B:/~BUN/root/chunk-9957329g.js";
import { mZ, ohr, PXt } from "B:/~BUN/root/chunk-bfwh5k9e.js";
import { S$o, l9s, fEt, d2t, c2t, mhe, X5n } from "B:/~BUN/root/chunk-dwg8my6z.js";
import { TS } from "B:/~BUN/root/chunk-y781qzhe.js";
import { kK, Y7, mEt, _B, bB, r8n } from "B:/~BUN/root/chunk-pnm80mz6.js";
import { t_ } from "B:/~BUN/root/chunk-4f7cx6fw.js";
import { Xvt } from "B:/~BUN/root/chunk-a4zd2bs8.js";
import { mur, TRn, nct, VMe, S8e, M5t, oct, ARn, cto, yur, _ur, nye, xRn, uto, xur } from "B:/~BUN/root/chunk-27h4st9h.js";
import { Qce } from "B:/~BUN/root/chunk-5gm1xyqv.js";
import { pg, np } from "B:/~BUN/root/chunk-wznngf8b.js";
import { c$o, dEt, b$o } from "B:/~BUN/root/chunk-31b4g6te.js";
import { Bpn, kjr, Wpn, vjr, NNo, wot } from "B:/~BUN/root/chunk-b522n0qj.js";
import { Ik } from "B:/~BUN/root/chunk-4w2c6jye.js";
import { l8, V2t } from "B:/~BUN/root/chunk-djnp90dd.js";
import { XSn } from "B:/~BUN/root/chunk-qed5a8pe.js";
import { Rx, wb } from "B:/~BUN/root/chunk-1b2nf93s.js";
import { ge, Mn, vr, Ft } from "B:/~BUN/root/chunk-b3kw6jpx.js";
import { Qy } from "B:/~BUN/root/chunk-tx4kppkg.js";
import { nt } from "B:/~BUN/root/chunk-tq5dzbq9.js";
import { X } from "B:/~BUN/root/chunk-g9pw24zp.js";
import { lstat as rt, mkdir as Jn, readdir as Gn, rename as Xt, unlink as et } from "fs/promises";
import { join as ce } from "path";
var Zt = 900000,
  kt = 86400000;
function Je(e, n) {
  return n - e >= kt || e > n + 60000;
}
var Qt = /^[A-Za-z0-9-]{1,64}$/;
function at(e) {
  return ce(tCe(), `${e}.json`);
}
var ot = 8192;
function We(e) {
  return Ve.daemon([Jwr, e]);
}
function wt(e) {
  return We(`${e}.json`);
}
var en = Qy();
function it(e, n) {
  return en.run("g:" + e, n).catch(() => {});
}
async function yot(gestureId, surface, o) {
  if (!Qt.test(gestureId)) return;
  let r = {
    gestureId: gestureId,
    surface: surface,
    startedAtEpochMs: Date.now(),
    attempt: 0
  };
  Dj().ownedBeacons.set(gestureId, r), await it(gestureId, async () => {
    if (r.pid = process.pid, r.procStart = await Rw(), o) {
      if (!(await St(o, gestureId, r, !0))) Dj().ownedBeacons.delete(gestureId);
      return;
    }
    if (await Jn(tCe(), {
      recursive: !0,
      mode: 448
    }), !(await we())) {
      Dj().ownedBeacons.delete(gestureId);
      return;
    }
    if (Dj().ownedBeacons.get(gestureId) !== r) return;
    await zn(at(gestureId), _(r), 384);
  }), await Vn(o);
}
async function St(e, n, o, r = !1) {
  if (!(await we(r))) return !1;
  if (Dj().ownedBeacons.get(n) === o) await e.write(wt(n), _(o));
  return !0;
}
function tn(e, n, o) {
  let r = Dj().ownedBeacons.get(e);
  if (!r || !Number.isInteger(n) || n <= (r.attempt ?? 0)) return;
  r.attempt = n, it(e, async () => {
    if (r.procStart ??= await Rw(), o) {
      await St(o, e, r);
      return;
    }
    if (!(await we())) return;
    if (Dj().ownedBeacons.get(e) !== r) return;
    await zn(at(e), _(r), 384);
  });
}
function eGt(e, n, o) {
  let r = Dj().ownedBeacons.get(e);
  if (!r) return;
  if (n.marksExpected !== void 0) r.marksExpected = r.marksExpected === !0 || n.marksExpected;
  if (n.daemonBooted !== void 0) r.daemonBooted = r.daemonBooted === !0 || n.daemonBooted;
  if (n.interactiveReached) r.interactiveReached = !0;
  if (n.attachMs !== void 0) r.attachMs ??= n.attachMs;
  if (n.msgsLoaded !== void 0) r.msgsLoaded ??= n.msgsLoaded;
  if (n.msgsInJsonl !== void 0) r.msgsInJsonl ??= n.msgsInJsonl;
  if (n.msgsRenderedAtFirstPaint !== void 0) r.msgsRenderedAtFirstPaint ??= n.msgsRenderedAtFirstPaint;
  if (n.attachCold !== void 0 && r.interactiveReached !== !0) r.attachCold = n.attachCold;
  if (n.via !== void 0 && r.interactiveReached !== !0) r.via = n.via;
  it(e, async () => {
    if (r.procStart ??= await Rw(), o) {
      await St(o, e, r);
      return;
    }
    if (!(await we())) return;
    if (Dj().ownedBeacons.get(e) !== r) return;
    await zn(at(e), _(r), 384);
  });
}
async function OG(e, n) {
  if (!Qt.test(e)) return;
  Dj().ownedBeacons.delete(e), await it(e, async () => {
    if (n) {
      if (!(await we())) return;
      let r = !1;
      for (let u = 0;; u++) {
        let s = await n.delete(wt(e));
        if (s.ok) return;
        let h = "telemetryCode" in s.error ? s.error.telemetryCode : void 0;
        if (r = h !== void 0 && OH.has(h), r && x() === "windows" && u < zt - 1) {
          await J(Yt);
          continue;
        }
        break;
      }
      if (!r) return;
      await n.write(wt(e), "{}");
      return;
    }
    let o = at(e);
    if (!(await we())) return;
    for (let r = 0;; r++) try {
      await et(o);
      return;
    } catch (error) {
      let s = k(error);
      if (s === "ENOENT") return;
      if (x() === "windows" && s !== void 0 && OH.has(s) && r < zt - 1) {
        await J(Yt);
        continue;
      }
      break;
    }
    await Xt(o, `${o}.${process.pid}.cleared`).catch(() => {});
  });
}
var zt = 4,
  Yt = 50;
async function we(e = !1) {
  try {
    return (await rt(tCe())).isDirectory();
  } catch (error) {
    return e && k(error) === "ENOENT";
  }
}
async function Hn(e) {
  try {
    let n = await yd(ce(tCe(), e), ot);
    if (n === null) return null;
    return nn(n);
  } catch {
    return null;
  }
}
async function Kn(e, n) {
  let o = We(n),
    r = await e.statMeta(o);
  if (!r.ok || r.value.size > ot) return null;
  let u = await e.read([o]);
  if (!u.ok) return null;
  let s = u.value.items[0];
  if (!s.found || s.totalBytes > ot) return null;
  let entry = nn(Buffer.from(s.value).toString("utf8"));
  return entry === null ? null : {
    entry: entry,
    version: s.version,
    mtimeMs: s.mtimeMs
  };
}
function nn(e) {
  try {
    let n = ee(e);
    return !!n && typeof n === "object" && typeof n.gestureId === "string" && typeof n.startedAtEpochMs === "number" && Number.isFinite(n.startedAtEpochMs) && n.startedAtEpochMs <= Date.now() + 60000 ? n : null;
  } catch {
    return null;
  }
}
async function rn(e) {
  if (typeof e.pid !== "number" || !Number.isInteger(e.pid) || e.pid <= 0) return !1;
  if (!El(e.pid)) return !0;
  if (e.procStart === void 0) return !1;
  let n = await tc(e.pid);
  return n !== void 0 && n !== e.procStart;
}
async function qn(e, n) {
  try {
    let o = await rt(ce(tCe(), e));
    return Je(o.mtimeMs, n);
  } catch {
    return !1;
  }
}
function Vn(e) {
  return en.run("reconcile", () => Yn(e));
}
async function Yn(e) {
  if (e) return Xn(e);
  if (!(await we())) return [];
  let n;
  try {
    n = await Gn(tCe());
  } catch {
    return [];
  }
  let o = Date.now(),
    r = [];
  for (let u of n) {
    if (!u.endsWith(".json")) {
      try {
        let w = await rt(ce(tCe(), u));
        if (Je(w.mtimeMs, o)) await et(ce(tCe(), u));
      } catch {}
      continue;
    }
    let s = await Hn(u);
    if (s === null) {
      try {
        let w = await rt(ce(tCe(), u));
        if (Je(w.mtimeMs, o)) await et(ce(tCe(), u));
      } catch {}
      continue;
    }
    let h = o - s.startedAtEpochMs;
    if (!(typeof s.pid === "number" && Number.isInteger(s.pid) && s.pid > 0 ? h >= Zt && ((await rn(s)) || s.procStart === void 0 && (await qn(u, o))) : h >= kt)) {
      r.push(s);
      continue;
    }
    let T = ce(tCe(), `${u}.${process.pid}.claimed`);
    try {
      await Xt(ce(tCe(), u), T);
    } catch {
      continue;
    }
    await et(T).catch(() => {}), on(s);
  }
  return r;
}
function on(e) {
  let n = e.interactiveReached === !0,
    o = !n && e.marksExpected === !1,
    attach_ms = n && typeof e.attachMs === "number" && Number.isFinite(e.attachMs) && e.attachMs >= 0 && e.attachMs < 86400000 ? Math.round(e.attachMs) : void 0;
  l("tengu_bg_attach_outcome", {
    outcome: f(n || o ? "detached" : "error"),
    got_ack: n || typeof e.marksExpected === "boolean",
    got_first_frame: n ? !0 : o ? void 0 : !1,
    synthetic: !0,
    apc_detach: !1,
    timed_out: n || o ? void 0 : !0,
    journal_recovered: !0,
    attach_ms: attach_ms,
    first_frame_kind: de(n ? "real" : void 0),
    marks_expected: n ? !0 : typeof e.marksExpected === "boolean" ? e.marksExpected : void 0,
    attempt: typeof e.attempt === "number" && Number.isInteger(e.attempt) && e.attempt >= 0 && e.attempt < 1e6 ? e.attempt + 1 : 0,
    gesture_id: _e(e.gestureId),
    surface: de(e.surface === "fleet" || e.surface === "bg_cli" ? e.surface : void 0),
    daemon_booted: typeof e.daemonBooted === "boolean" ? e.daemonBooted : void 0,
    attach_cold: typeof e.attachCold === "boolean" ? e.attachCold : void 0,
    via: de(V2t(e.via)),
    msgs_loaded: n ? GIt(e.msgsLoaded) : void 0,
    msgs_in_jsonl: n ? GIt(e.msgsInJsonl) : void 0,
    msgs_rendered_at_first_paint: n ? GIt(e.msgsRenderedAtFirstPaint) : void 0
  });
}
async function Xn(e) {
  if (!(await we())) return [];
  let n = [],
    cursor;
  do {
    let s = await e.listEntries({
      namespace: "daemon",
      relPath: [Jwr]
    }, cursor === void 0 ? void 0 : {
      cursor: cursor
    });
    if (!s.ok) return [];
    for (let h of s.value.items) {
      if (h.kind !== "key" || h.key.namespace !== "daemon" || h.key.relPath.length !== 2 || h.key.relPath[0] !== Jwr) continue;
      let file = h.key.relPath[1];
      if (file !== void 0) n.push({
        file: file,
        size: h.size,
        mtimeMs: h.mtimeMs
      });
    }
    cursor = s.value.cursor;
  } while (cursor !== void 0);
  let r = Date.now(),
    u = [];
  for (let {
    file: file_2,
    size: size,
    mtimeMs: mtimeMs
  } of n) {
    let S = mtimeMs !== void 0 && Je(mtimeMs, r);
    if (!file_2.endsWith(".json")) {
      if (S) await e.delete(We(file_2));
      continue;
    }
    let T = size !== void 0 && size > ot ? null : await Kn(e, file_2);
    if (T === null) {
      if (S) await e.delete(We(file_2));
      continue;
    }
    let entry_2 = T.entry,
      v = r - entry_2.startedAtEpochMs;
    if (!(typeof entry_2.pid === "number" && Number.isInteger(entry_2.pid) && entry_2.pid > 0 ? v >= Zt && ((await rn(entry_2)) || entry_2.procStart === void 0 && Je(T.mtimeMs, r)) : v >= kt)) {
      u.push(entry_2);
      continue;
    }
    let L = await e.delete(We(file_2), {
      precondition: {
        type: "ifMatch",
        version: T.version
      }
    });
    if (!L.ok || !L.value.existed) continue;
    on(entry_2);
  }
  return u;
}
import { randomUUID as Zn } from "crypto";
import { connect as Qn } from "net";
var er = 1e4,
  Z6n = "ENORESPONSE",
  tGt = "Session isn't responding",
  an = {
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
    EHOSTDEAD: "ehostdead",
    ESKEW: "eskew"
  };
function tr(e) {
  return Object.hasOwn(an, e) ? an[e] : "unknown_code";
}
function nr(e) {
  if (e === void 0 || e === "") return;
  if (kut.test(e)) return "ekicked";
  if (e.includes("ERESPAWNING")) return "erespawning";
  if (e.includes("ESTARTING")) return "estarting";
  if (e.includes("ESTALLED")) return "estalled";
  if (e.includes("EUNVERIFIED")) return "eunverified";
  if (e.includes("EHOSTDEAD")) return "ehostdead";
  if (GXt.test(e)) return "unknown_code";
  return "worker_detach";
}
function M7(e, n, o) {
  if (!e) return;
  let r = e.interactive?.reached,
    u = n === "detached" ? e.interactive?.marksExpected : void 0,
    s = n === "detached" && r === void 0 && u === !0,
    h = s && e.t0 !== void 0 ? Math.round(performance.now() - e.t0) : void 0;
  l("tengu_bg_attach_outcome", {
    outcome: f(n),
    got_ack: !1,
    got_first_frame: !1,
    synthetic: !0,
    apc_detach: !1,
    failure_class: de(n === "error" ? o ?? "daemon_unavailable" : void 0),
    gesture_id: _e(e.gestureId),
    attempt: ++e.attempt,
    surface: de(e.surface),
    daemon_booted: e.daemonBooted,
    via: de(e.interactive?.via),
    attach_cold: e.interactive?.attachCold,
    attach_ms: r !== void 0 ? r.attachMs : h,
    content_paint_ms: r !== void 0 ? Math.round(r.contentPaintMs) : void 0,
    prompt_idle_ms: r !== void 0 ? Math.round(r.promptIdleMs) : void 0,
    msgs_loaded: r?.msgsLoaded,
    msgs_in_jsonl: r?.msgsInJsonl,
    msgs_rendered_at_first_paint: r?.msgsRenderedAtFirstPaint,
    first_frame_kind: de(r !== void 0 ? "real" : void 0),
    marks_expected: r !== void 0 ? !0 : u,
    attach_censored: s ? !0 : void 0
  });
}
async function e3n(short) {
  let n = await t_({
    proto: proto,
    op: "has",
    short: short
  });
  return n.ok && n.op === "has" && n.present === !1;
}
var vt = 2,
  cn = 26,
  ln = 100,
  rr = 8,
  ar = Buffer.from([127]),
  un = 98,
  fn = 122,
  st = Buffer.from("\x1B[27;5;98~", "latin1"),
  mn = Buffer.from("\x1B[27;5;122~", "latin1"),
  ir = Buffer.from("\x1B[27u", "latin1"),
  sr = Buffer.from("\x1B[27;1u", "latin1"),
  dr = 3,
  cr = 99,
  lr = Buffer.from("\x1B[27;5;99~", "latin1"),
  sn = Buffer.from(ece, "ascii"),
  Et = Buffer.from(Ahr, "ascii"),
  dn = Buffer.from("\x1B_cc-d", "ascii"),
  Ge = Buffer.from("\x1B[?9001", "ascii"),
  ur = 100;
function Ce(e, n, o) {
  return e.length - n >= o.length && e.compare(o, 0, o.length, n, n + o.length) === 0;
}
function He(e, n, o) {
  if (e[n] !== 27 || e[n + 1] !== 91) return 0;
  let r = n + 2,
    u = () => {
      let S = -1;
      for (let T = 0; T < 8 && r < e.length; T++) {
        let w = e[r];
        if (w < 48 || w > 57) break;
        S = (S < 0 ? 0 : S) * 10 + (w - 48), r++;
      }
      return S;
    },
    s = u();
  if (s < 0) return 0;
  let h = -1;
  if (e[r] === 58) {
    if (r++, u(), e[r] === 58) r++, h = u();
  }
  if (e[r] !== 59 || e[r + 1] !== 53 || e[r + 2] !== 117) return 0;
  return (s > 127 && h >= 0 ? h : s) === o ? r + 3 - n : 0;
}
function De(e, n) {
  let o = Math.min(e.length, n.length - 1);
  e: for (let r = o; r > 0; r--) {
    let u = e.length - r;
    for (let s = 0; s < r; s++) if (e[u + s] !== n[s]) continue e;
    return r;
  }
  return 0;
}
var Z = Buffer.alloc(0);
function pn(e, prefixArmed) {
  for (let o = 0; o < e.length; o++) {
    let r = e[o];
    if (prefixArmed) {
      if (prefixArmed = !1, r === ln) return {
        matched: !0,
        prefixArmed: !1
      };
      continue;
    }
    if (r === cn || r === dr || He(e, o, fn) || Ce(e, o, mn) || He(e, o, cr) || Ce(e, o, lr)) return {
      matched: !0,
      prefixArmed: !1
    };
    let u = r === vt ? 1 : He(e, o, un) || (Ce(e, o, st) ? st.length : 0);
    if (u) o += u - 1, prefixArmed = !0;
  }
  return {
    matched: !1,
    prefixArmed: prefixArmed
  };
}
function hn(e) {
  let n = !1,
    o = !1,
    r,
    promise = new Promise(h => {
      r = h;
    }),
    s = () => {
      if (n) return;
      let h;
      while ((h = e.read()) !== null) {
        let A = typeof h === "string" ? Buffer.from(h, "utf8") : h,
          S = pn(A, o);
        if (o = S.prefixArmed, S.matched) {
          n = !0, r();
          return;
        }
      }
    };
  if (e.on("readable", s), "resume" in e && "pause" in e) e.resume(), e.pause();
  return s(), {
    promise: promise,
    cancel: () => {
      n = !0, e.removeListener("readable", s);
    }
  };
}
function t3n(e) {
  return pn(e, !1).matched;
}
async function hjr(short_2, n = {}) {
  let o = n.stdin ?? process.stdin,
    r = n.stdout ?? process.stdout,
    cols_2 = "columns" in r ? r.columns || 120 : 120,
    rows_2 = "rows" in r ? r.rows || 30 : 30,
    cols = cols_2,
    rows = rows_2,
    attachId = Zn(),
    auth = await Gze(),
    w = Date.now(),
    v = performance.now(),
    D = n.telemetry?.t0,
    j = D !== void 0 && Number.isFinite(D) && D >= 0 && D <= v && v - D < 86400000 ? D : v;
  if (n.telemetry?.gestureId !== void 0) tn(n.telemetry.gestureId, n.telemetry.attempt, n.telemetry.storageV5);
  let contentPaintMs,
    promptIdleMs,
    msgsLoaded,
    msgsInJsonl,
    msgsRenderedAtFirstPaint,
    N = Z,
    B = n.telemetry?.interactive?.reached,
    le = !1,
    Fe,
    ue = setTimeout(() => {
      if (B === void 0 && (contentPaintMs === void 0 || promptIdleMs === void 0)) le = !0, Fe = performance.now() - j;
    }, Math.max(0, 30000 - (v - j))),
    Oe = !1,
    ack_ms,
    via,
    H,
    fe,
    Le,
    stale,
    Pe,
    cached,
    requireNonce,
    got_first_frame = !1,
    meaningful_ms;
  function Ue(O) {
    let ms = Date.now() - w;
    if (O && meaningful_ms === void 0) meaningful_ms = ms;
    if (got_first_frame) return;
    got_first_frame = !0, Oe = !O, l("tengu_bg_attach_first_frame", {
      ms: ms,
      meaningful_ms: meaningful_ms,
      ack_ms: ack_ms,
      gesture_id: _e(n.telemetry?.gestureId),
      attempt: n.telemetry?.attempt,
      via: de(via),
      tempo: de(fe),
      stale: stale,
      state: l8(Le),
      cached: cached
    });
  }
  let je,
    promise_2 = new Promise(O => {
      je = O;
    }),
    Q = !1,
    got_ack = !1,
    Re,
    ae = !1,
    z,
    be = cols_2,
    It = rows_2,
    ze = Bpn(),
    xt = () => d2t({
      legacyKitty: Pe !== {
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
    }),
    In = x() === "windows" && !c$o(),
    xn = n.holdScreenOnDisconnect && x() === "windows" ? !0 : "isRaw" in o ? Boolean(o.isRaw) : !1,
    ht = x() === "windows",
    Me = Buffer.from(_B, "ascii"),
    Dn = Buffer.from(bB, "ascii"),
    Dt = ht && b$o(),
    Nt = !1,
    gt,
    se;
  try {
    se = Qn(nue());
  } catch (error) {
    let R = n.telemetry?.interactive?.reached,
      E = typeof n.telemetry?.interactive?.marksExpected === "boolean" ? n.telemetry.interactive.marksExpected : void 0;
    return l("tengu_bg_attach_outcome", {
      outcome: f("error"),
      got_ack: !1,
      got_first_frame: !1,
      ms: Date.now() - w,
      apc_detach: !1,
      failure_class: f("connect_throw"),
      gesture_id: _e(n.telemetry?.gestureId),
      attempt: n.telemetry?.attempt,
      surface: de(n.telemetry?.surface),
      daemon_booted: n.telemetry?.daemonBooted,
      attach_ms: R !== void 0 ? R.attachMs : E === !0 ? Math.round(performance.now() - j) : void 0,
      content_paint_ms: R !== void 0 ? Math.round(R.contentPaintMs) : void 0,
      prompt_idle_ms: R !== void 0 ? Math.round(R.promptIdleMs) : void 0,
      msgs_loaded: R?.msgsLoaded,
      msgs_in_jsonl: R?.msgsInJsonl,
      msgs_rendered_at_first_paint: R?.msgsRenderedAtFirstPaint,
      first_frame_kind: de(R !== void 0 ? "real" : void 0),
      marks_expected: R !== void 0 ? !0 : E,
      attach_censored: R === void 0 && E === !0 ? !0 : void 0,
      via: de(n.telemetry?.interactive?.via),
      attach_cold: n.telemetry?.interactive?.attachCold
    }), clearTimeout(ue), {
      outcome: "error",
      msg: yA(d(error))
    };
  }
  se.setTimeout(1e4, () => {
    if (!got_ack) re("error", DPn(), {
      failureClass: "ack_timeout"
    });
  });
  function re(outcome, msg, E) {
    if (Q) return;
    let {
      viaApc: viaApc,
      beforeFirstFrame: beforeFirstFrame,
      failureClass: failureClass
    } = E ?? {};
    Q = !0, clearTimeout(gt), clearTimeout(ue), clearTimeout(Re);
    let F = Math.round(performance.now() - j),
      I = contentPaintMs !== void 0 && promptIdleMs !== void 0 ? Math.round(Math.max(contentPaintMs, promptIdleMs)) : void 0,
      W = requireNonce !== void 0 || n.telemetry?.interactive?.marksExpected === !0,
      timed_out = B === void 0 && W && le && I === void 0,
      attach_censored = B === void 0 && W && !timed_out && I === void 0,
      attach_ms_2 = B !== void 0 ? B.attachMs : timed_out ? Math.round(Fe ?? F) : attach_censored ? F : I,
      $n = B !== void 0 ? "real" : I !== void 0 ? "real" : got_first_frame ? Oe && meaningful_ms === void 0 ? "dimhint" : "unknown" : void 0;
    if (l("tengu_bg_attach_outcome", {
      outcome: f(outcome),
      got_ack: got_ack,
      got_first_frame: got_first_frame,
      ms: Date.now() - w,
      gesture_id: _e(n.telemetry?.gestureId),
      attempt: n.telemetry?.attempt,
      via: de(n.telemetry?.interactive?.via ?? via),
      tempo: de(fe),
      apc_detach: viaApc === !0,
      failure_class: de(failureClass),
      state: l8(Le),
      cached: cached,
      meaningful_ms: meaningful_ms,
      input_accepted_ms: Ye,
      input_delivered_ms: Ye,
      keys_dropped: keys_dropped,
      attach_ms: attach_ms_2,
      content_paint_ms: B !== void 0 ? Math.round(B.contentPaintMs) : contentPaintMs !== void 0 ? Math.round(contentPaintMs) : void 0,
      prompt_idle_ms: B !== void 0 ? Math.round(B.promptIdleMs) : promptIdleMs !== void 0 ? Math.round(promptIdleMs) : void 0,
      timed_out: timed_out,
      attach_censored: attach_censored,
      marks_expected: B !== void 0 ? !0 : got_ack || typeof n.telemetry?.interactive?.marksExpected === "boolean" ? W : void 0,
      attach_cold: n.telemetry?.interactive?.attachCold ?? (via !== void 0 ? via === "cold" && (H ?? !0) : void 0),
      daemon_booted: n.telemetry?.daemonBooted,
      surface: de(n.telemetry?.surface),
      first_frame_kind: de($n),
      msgs_loaded: B?.msgsLoaded ?? msgsLoaded,
      msgs_in_jsonl: B?.msgsInJsonl ?? msgsInJsonl,
      msgs_rendered_at_first_paint: B?.msgsRenderedAtFirstPaint ?? msgsRenderedAtFirstPaint
    }), got_ack) {
      let Wn = n.alreadyInAlt || outcome === "disconnected" && n.holdScreenOnDisconnect;
      r.write(mEt + ze.snapshot().map(Y7).reverse().join("") + _B + (x() === "windows" ? r8n : "") + "\x1B[0m\x1B7" + Zpe + "\x1B8" + (fEt() ? ohr : "") + (Wn ? "" : mhe()));
    }
    if (!xn) Ik(o, !1);
    if (o.removeListener("readable", bt), o.removeListener("end", Wt), "removeListener" in r) r.removeListener("resize", _t);
    clearTimeout(z), se.destroy(), je({
      outcome: outcome,
      msg: msg,
      viaApc: viaApc,
      beforeFirstFrame: beforeFirstFrame
    });
  }
  function Nn() {
    re("error", `${Z6n}: ${tGt}`, {
      failureClass: "no_response"
    });
  }
  function _t() {
    if (Q) return;
    if (z === void 0) be = cols, It = rows;
    cols = "columns" in r ? r.columns || cols_2 : cols_2, rows = "rows" in r ? r.rows || rows_2 : rows_2, clearTimeout(z), z = setTimeout(() => {
      if (z = void 0, Q) return;
      if (cols < be || rows < It) r.write(RT + ov);
      Ut(), t_({
        proto: proto,
        op: "resize",
        short: short_2,
        cols: cols,
        rows: rows,
        attachId: attachId
      });
    }, 50);
  }
  let Lt = performance.now();
  function Ut() {
    let O = ze.snapshot();
    if (!O.includes(1004)) return;
    r.write(xt() + O.map(kK).join(""));
  }
  let jt = n.gateStdinUntilFirstFrame === !0 && "isTTY" in o && o.isTTY === !0,
    Ye,
    keys_dropped = 0,
    Fn = i5s();
  function Ae(O) {
    let R = () => Fn(O.toString("latin1"));
    if (!jt || got_first_frame) {
      if (Ye === void 0 && !R()) Ye = Date.now() - w;
      se.write(O);
    } else if (!R()) keys_dropped++;
  }
  function Ln(O) {
    if (Q) return;
    let R = typeof O === "string" ? Buffer.from(O, "utf8") : O,
      E = 0;
    for (let M = 0; M < R.length; M++) {
      let y = R[M];
      if (ae) {
        if (ae = !1, M > E) Ae(R.subarray(E, M));
        if (y === ln) return re("detached");
        Ae(Buffer.from([vt, y])), E = M + 1;
        continue;
      }
      if (jt && !got_first_frame && (y === 27 && R.length === 1 || Ce(R, M, ir) || Ce(R, M, sr))) return re("detached", void 0, {
        beforeFirstFrame: !0
      });
      if (y === cn || He(R, M, fn) || Ce(R, M, mn)) {
        if (M > E) Ae(R.subarray(E, M));
        return re("detached");
      }
      if (In && y === rr) {
        if (M > E) Ae(R.subarray(E, M));
        Ae(ar), E = M + 1;
        continue;
      }
      let U = y === vt ? 1 : He(R, M, un) || (Ce(R, M, st) ? st.length : 0);
      if (U) {
        if (M > E) Ae(R.subarray(E, M));
        M += U - 1, E = M + 1, ae = !0;
      }
    }
    if (E < R.length) Ae(R.subarray(E));
  }
  function bt() {
    let O = performance.now();
    if (O - Lt > X5n) Ut();
    Lt = O;
    let R;
    while ((R = o.read()) !== null) Ln(R);
  }
  function Wt() {
    re("detached");
  }
  let $e = Z,
    Xe = Z,
    Ie = Z,
    Te = Z;
  function Jt(O) {
    if (!ht) return O;
    let R = Ie.length > 0,
      E = R ? Buffer.concat([Ie, O]) : O;
    if (R) Ie = Z;
    if (Dt) {
      let q = E.lastIndexOf(Me),
        ye = E.lastIndexOf(Dn);
      if (q !== ye) Nt = q > ye;
    }
    let M = E.indexOf(Me);
    if (M < 0) {
      let q = De(E, Me);
      if (q === 0) return E;
      return Ie = Buffer.from(E.subarray(E.length - q)), E.subarray(0, E.length - q);
    }
    let y = [],
      U = 0,
      F = M;
    for (;;) {
      if (F > U) y.push(E.subarray(U, F));
      if (U = F + Me.length, F = E.indexOf(Me, U), F < 0) break;
    }
    let I = E.subarray(U),
      W = De(I, Me);
    if (W > 0) Ie = Buffer.from(I.subarray(I.length - W));
    if (I.length > W) y.push(I.subarray(0, I.length - W));
    if (y.length === 0) return Z;
    if (y.length === 1) return y[0];
    return Buffer.concat(y);
  }
  function Gt(O) {
    let R = Te.length > 0,
      E = R ? Buffer.concat([Te, O]) : O;
    if (R) Te = Z;
    let M = E.indexOf(Ge);
    if (M < 0) {
      let I = De(E, Ge);
      if (I === 0) return E;
      return Te = Buffer.from(E.subarray(E.length - I)), E.subarray(0, E.length - I);
    }
    let y = [],
      U = 0,
      F = M;
    while (F >= 0) {
      let I = F + Ge.length;
      if (I >= E.length) {
        if (F > U) y.push(E.subarray(U, F));
        Te = Buffer.from(E.subarray(F)), U = E.length;
        break;
      }
      let W = E[I];
      if (W === 104 || W === 108) {
        if (F > U) y.push(E.subarray(U, F));
        U = I + 1;
      }
      F = E.indexOf(Ge, Math.max(U, F + 1));
    }
    if (U < E.length) {
      let I = E.subarray(U),
        W = De(I, Ge);
      if (W > 0) Te = Buffer.from(I.subarray(I.length - W));
      if (I.length > W) y.push(I.subarray(0, I.length - W));
    }
    if (y.length === 0) return Z;
    if (y.length === 1) return y[0];
    return Buffer.concat(y);
  }
  let Ht = n.alreadyInAlt && !n.holdingFrame;
  function Kt(O) {
    let {
      out: out,
      meaningful: meaningful,
      renders: renders
    } = Un(O);
    if (out.length === 0) return;
    if (!renders) {
      r.write(out);
      return;
    }
    if (Ht) Ht = !1, r.write(RT + ov);
    r.write(out), ze.feed(out.toString("latin1"), y => {
      if (y === 1004) {
        let U = xt();
        if (U) r.write(U);
      }
    }), Ue(meaningful);
  }
  let Ze = Z,
    Qe = !1,
    xe = !1,
    yt = !1;
  function qt(O) {
    let R = !1,
      E = 0;
    if (yt) {
      if (yt = !1, xe = !1, O[0] === 92) E = 1;
    }
    while (E < O.length) {
      if (xe) {
        let y = E;
        while (y < O.length && O[y] !== 27 && O[y] !== 24 && O[y] !== 26) y++;
        if (y >= O.length) return R;
        if (O[y] !== 27) {
          xe = !1, E = y + 1;
          continue;
        }
        if (y === O.length - 1) return yt = !0, R;
        if (O[y + 1] === 92) {
          xe = !1, E = y + 2;
          continue;
        }
        xe = !1, E = y;
        continue;
      }
      let M = O.indexOf(dn, E);
      if (M < 0) return !0;
      R ||= M > E, xe = !0, E = M + dn.length;
    }
    return R;
  }
  function Un(O) {
    let R = Ze.length > 0 ? Buffer.concat([Ze, O]) : O;
    Ze = Z;
    let meaningful_2 = !1,
      M = !1,
      y = [],
      U = 0;
    for (;;) {
      let q = R.indexOf(Et, U);
      if (q < 0) break;
      if (q > U) {
        let ye = R.subarray(U, q);
        if (y.push(ye), !Qe) meaningful_2 = qt(ye) || meaningful_2;else M = !0;
      }
      Qe = !Qe, U = q + Et.length;
    }
    let F = R.subarray(U),
      I = De(F, Et);
    if (I > 0) Ze = Buffer.from(F.subarray(F.length - I)), F = F.subarray(0, F.length - I);
    if (F.length > 0) if (y.push(F), !Qe) meaningful_2 = qt(F) || meaningful_2;else M = !0;
    return {
      out: y.length === 0 ? Z : y.length === 1 ? y[0] : Buffer.concat(y),
      meaningful: meaningful_2,
      renders: meaningful_2 || M
    };
  }
  function Vt(O) {
    if (Q) return;
    let R = requireNonce !== void 0 && B === void 0 && (contentPaintMs === void 0 || promptIdleMs === void 0),
      E = Bls(N, O, {
        requireNonce: requireNonce
      });
    N = E.carry;
    let cleaned = E.cleaned;
    if (R) for (let I of E.marks) {
      let W = performance.now() - j;
      if (I.kind === "content_paint" && contentPaintMs === void 0) contentPaintMs = W, msgsLoaded = I.msgsLoaded, msgsInJsonl = I.msgsInJsonl, msgsRenderedAtFirstPaint = I.msgsRenderedAtFirstPaint;else if (I.kind === "prompt_idle" && promptIdleMs === void 0) promptIdleMs = W;
      if (contentPaintMs !== void 0 && promptIdleMs !== void 0) {
        clearTimeout(ue);
        let attachMs = Math.round(Math.max(contentPaintMs, promptIdleMs));
        if (n.telemetry?.interactive !== void 0) n.telemetry.interactive.reached = {
          attachMs: attachMs,
          contentPaintMs: contentPaintMs,
          promptIdleMs: promptIdleMs,
          msgsLoaded: msgsLoaded,
          msgsInJsonl: msgsInJsonl,
          msgsRenderedAtFirstPaint: msgsRenderedAtFirstPaint
        };
        if (n.telemetry?.gestureId !== void 0) eGt(n.telemetry.gestureId, {
          interactiveReached: !0,
          attachMs: attachMs,
          msgsLoaded: msgsLoaded,
          msgsInJsonl: msgsInJsonl,
          msgsRenderedAtFirstPaint: msgsRenderedAtFirstPaint
        }, n.telemetry.storageV5);
      }
    }
    let y = Xe.length > 0 ? Buffer.concat([Xe, cleaned]) : cleaned,
      U = y.indexOf(sn);
    if (U >= 0) {
      let I = y.subarray(0, U);
      if (U > 0) {
        let q = Gt(Jt(I));
        if (q.length > 0) Kt(q);
      }
      Xe = Z, Ie = Z, Te = Z;
      let W = Wls(I);
      return re("detached", W, {
        viaApc: !0,
        failureClass: nr(W)
      });
    }
    let F = De(y, sn);
    if (y.length > F) {
      let I = y.subarray(0, y.length - F),
        W = Gt(Jt(I));
      if (W.length > 0) Kt(W);
    }
    if (Xe = F > 0 ? Buffer.from(y.subarray(y.length - F)) : Z, Dt) clearTimeout(gt), gt = setTimeout(() => {
      if (!Q && Nt) r.write(_B);
    }, ur);
  }
  return se.on("data", O => {
    if (Q) return;
    if (got_ack) {
      clearTimeout(Re), Vt(O);
      return;
    }
    $e = Buffer.concat([$e, O]);
    let R = $e.indexOf(10);
    if (R < 0) return;
    let E = $e.subarray(0, R).toString("utf8"),
      M = $e.subarray(R + 1),
      y;
    try {
      y = ee(E);
    } catch (error) {
      return re("error", `bad ack: ${d(error)}`, {
        failureClass: "bad_ack"
      });
    }
    if (typeof y !== "object" || y === null) return re("error", "bad ack: non-object ack line", {
      failureClass: "bad_ack"
    });
    if (!y.ok) return re("error", `${y.code}: ${y.error}`, {
      failureClass: tr(y.code)
    });
    if (got_ack = !0, se.setTimeout(0), !n.holdingFrame && M.length === 0) Re = setTimeout(Nn, er);
    if (ack_ms = Date.now() - w, via = y.op === "attach" ? V2t(y.via) : void 0, H = y.op === "attach" && typeof y.booting === "boolean" ? y.booting : void 0, requireNonce = y.op === "attach" && typeof y.imarkNonce === "string" ? y.imarkNonce : void 0, n.telemetry?.gestureId !== void 0) eGt(n.telemetry.gestureId, {
      marksExpected: requireNonce !== void 0,
      daemonBooted: typeof n.telemetry.daemonBooted === "boolean" ? n.telemetry.daemonBooted : void 0,
      attachCold: via !== void 0 ? via === "cold" && (H ?? !0) : void 0,
      via: via
    }, n.telemetry.storageV5);
    if (n.telemetry?.interactive !== void 0) {
      if (n.telemetry.interactive.marksExpected = n.telemetry.interactive.marksExpected === !0 || requireNonce !== void 0, via !== void 0 && n.telemetry.interactive.reached === void 0) n.telemetry.interactive.attachCold = via === "cold" && (H ?? !0), n.telemetry.interactive.via = via;
    }
    if (fe = y.op === "attach" ? y.tempo : void 0, Le = y.op === "attach" ? y.state : void 0, stale = y.op === "attach" ? y.stale : void 0, Pe = y.op === "attach" ? y.workerCliVersion : void 0, cached = y.op === "attach" ? y.cached : void 0, i.TMUX && !Dj().tmuxRgbApplied) Dj().tmuxRgbApplied = !0, ut("tmux", ["set", "-as", "terminal-features", ",*:RGB"]);
    let F = ((y.op === "attach" ? y.decModes : void 0) ?? []).map(kK).join("");
    if (ze.feed(F), "ref" in o) o.ref();
    Ik(o, !0);
    let legacyKitty = Pe !== {
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
    if (r.write(n.alreadyInAlt ? bB + d2t({
      legacyKitty: legacyKitty
    }) + F : c2t({
      legacyKitty: legacyKitty
    }) + F + (ht ? bB : "") + `
  \x1B[2mAttaching\u2026\x1B[0m
`), "on" in r) r.on("resize", _t);
    if ("columns" in r && (r.columns || cols_2) !== cols_2 || "rows" in r && (r.rows || rows_2) !== rows_2) _t();
    if (o.on("readable", bt), "resume" in o && "pause" in o) o.resume(), o.pause();
    if (o.once("end", Wt), bt(), M.length) Vt(M);
  }), se.on("error", O => re("error", yA(d(O)), {
    failureClass: "socket_error"
  })), se.once("close", () => {
    if (!Q) re(got_ack ? "disconnected" : "error", "control socket closed", {
      failureClass: "socket_closed"
    });
  }), se.once("connect", () => {
    se.write(_({
      proto: proto,
      op: "attach",
      short: short_2,
      auth: auth,
      cols: cols_2,
      rows: rows_2,
      attachId: attachId,
      caps: {
        ...mr(),
        ...(n.sessionTabs !== void 0 && {
          sessionTabs: n.sessionTabs,
          ...(n.cloudTabs === !0 && {
            cloudTabs: !0
          }),
          ...(n.tabsLanding && {
            tabsLanding: n.tabsLanding
          })
        })
      },
      ...(n.holdingFrame && {
        holdingFrame: !0
      })
    }) + `
`);
  }), promise_2;
}
function mr() {
  return {
    imark: !0,
    terminal: i.terminal,
    mux: i.TMUX ? "tmux" : process.env.ZELLIJ != null ? "zellij" : i.STY ? "screen" : null,
    ssh: i.isSSH(),
    wheelFlood: S$o(),
    hyperlinks: TS(),
    progressReporting: fEt(),
    printsUnknownSequences: mZ(),
    wtSession: !!i.WT_SESSION,
    isVscodeTerm: i.TERM_PROGRAM === "vscode",
    isGhosttyXtv: T7n(),
    keyDialect: PXt(i.TERM),
    browser: i.BROWSER ?? null,
    colorLevel: Se.level,
    syncOutput: l9s(),
    editor: i.VISUAL || i.EDITOR || null,
    systemTheme: XSn(),
    ...(i.TMUX && {
      tmuxSocket: tt(i.TMUX, ",")
    })
  };
}
function Npn(e) {
  return WIt.test(e) ? {
    kind: "cloud",
    sessionId: e
  } : {
    kind: "switch",
    short: e
  };
}
import { randomUUID as Ar } from "crypto";
import { lstat as Tr, readdir as Cr, realpath as qe, rm as Or, unlink as kn, writeFile as Br } from "fs/promises";
import { isAbsolute as mt, join as Mt, normalize as Pr, relative as Mr } from "path";
import { readFile as pr, unlink as hr } from "fs/promises";
import { join as gr } from "path";
var _r = 250,
  br = 604800000,
  yr = 256,
  wr = p(() => Ft({
    writtenAtMs: Mn().optional(),
    shells: vr(Ft({
      pid: Mn().int().positive(),
      procStart: ge().optional(),
      startTimeTicks: Mn().int().optional()
    })).catch([])
  }));
async function gn(e, n = {}) {
  let o = gr(e, "adopt.json"),
    r = `${o}.reap.${process.pid}`,
    u = Date.now() + (n.waitMs ?? 0);
  for (;;) try {
    await Is(o, r);
    break;
  } catch (error) {
    if (Date.now() >= u) {
      if (!K(error)) t(`[adopt] reap claim failed: ${error}`, {
        level: "warn"
      });
      return {
        found: !1,
        reaped: 0
      };
    }
    await J(_r);
  }
  try {
    let s = wr().safeParse(ee(await pr(r, "utf-8")));
    if (!s.success) return {
      found: !0,
      reaped: 0
    };
    let {
        writtenAtMs: writtenAtMs,
        shells: shells
      } = s.data,
      S = writtenAtMs !== void 0 ? Date.now() - writtenAtMs : void 0;
    if (S !== void 0 && S > br || shells.length > yr) return t(`[adopt] reap skipped: implausible payload (age ${S ?? "?"}ms, ${shells.length} entries)`, {
      level: "warn"
    }), {
      found: !0,
      reaped: 0
    };
    if (await Promise.all(shells.map(item => Xvt(item.pid, item.startTimeTicks, item.procStart))), shells.length > 0) l("tengu_adopt_exit_reap", {
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
    await hr(r).catch(() => {});
  }
}
var kr = 7,
  Sr = {
    head: 40,
    tail: 20
  },
  Er = {
    head: 50,
    tail: 30
  },
  bn = 1000,
  maxBuffer = 1e6;
async function dt(e) {
  let [n, o] = await Promise.all([Rt(e, ["log", "--no-show-signature", `--max-count=${bn}`, "--format=%H%x00%s", "HEAD", "--not", "--remotes"]), Rt(e, ["symbolic-ref", "-q", "--short", "HEAD"])]);
  if (n.code !== 0) return;
  let r = n.stdout.split(`
`).map(item => item.split("\x00")).filter(item => item.length === 2 && item[0] !== ""),
    u = r[0];
  if (u === void 0 || !S5(u[0])) return;
  return {
    branch: o.code === 0 ? Wd(o.stdout, Er) || null : null,
    count: r.length,
    headSha: u[0],
    shortSha: u[0].slice(0, kr),
    subject: Wd(u[1], Sr)
  };
}
function PNo(e) {
  return `${e.count}${wn(e)} unpushed ${P(e.count, "commit")} on ${e.branch ?? "detached HEAD"}`;
}
function s5s(e) {
  let n = e.count > 1 ? ` and ${e.count - 1}${wn(e)} more` : "";
  return `${PNo(e)}: ${[e.shortSha, e.subject].filter(Boolean).join(" ")}${n}`;
}
async function At(e, n) {
  if (!S5(n)) return !1;
  let o = await Rt(e, ["rev-parse", "HEAD"]);
  return o.code === 0 && o.stdout.trim() === n;
}
async function Rt(cwd, n) {
  return lt(Pt(), [...yn, ...n], {
    cwd: cwd,
    env: ys(),
    maxBuffer: maxBuffer
  });
}
function wn(e) {
  return e.count >= bn ? "+" : "";
}
var Fpn = "recap.trigger";
function Ir(e, n) {
  if (X() && n !== void 0) {
    let o = Ve.job(e, [Fpn]);
    if (eg(o) === void 0) {
      n.write(o, "", {
        publishDiscipline: "inPlace"
      }).catch(() => {});
      return;
    }
  }
  Br(Mt(No(e), Fpn), "").catch(() => {});
}
async function dUe(short_3, n, o, r) {
  let handoff = o?.handoff ? !0 : void 0,
    evict = o?.evict ? !0 : void 0,
    h = o?.knownGone ? {
      ok: !1,
      code: "ENOJOB",
      error: "job already gone (caller-verified)"
    } : await t_({
      proto: proto,
      op: "kill",
      short: short_3,
      handoff: handoff,
      evict: evict
    });
  for (let A = 0; !h.ok && h.code === "ESTARTING" && A < 10; A++) await J(200), h = await t_({
    proto: proto,
    op: "kill",
    short: short_3,
    handoff: handoff,
    evict: evict
  });
  if (h.ok) return {
    confirmed: !0
  };
  if (h.code === "ENOJOB" || h.code === "ENOCONN" || h.code === "ETIMEOUT") {
    let A = await gjr(short_3, r);
    if (A.anyMatch && h.code === "ENOJOB") return {
      confirmed: A.confirmed
    };
    let S = !1,
      noWorkerFound = !1;
    if (h.code === "ENOCONN" || h.code === "ETIMEOUT") {
      let confirmed;
      if (A.anyMatch) confirmed = A.confirmed;else {
        let v = await t1({
            silent: !0
          }, r),
          D = v.workers[short_3];
        if (D !== void 0) {
          let j = await Ihr(D.pid, D.procStart);
          if (j === "zombie") {
            if (D.procStart !== void 0 && (await Xy(D.pid, D.procStart)) === !0) {
              try {
                process.kill(-D.pid, "SIGKILL");
              } catch {
                try {
                  process.kill(D.pid, "SIGKILL");
                } catch {}
              }
              confirmed = !0;
            } else confirmed = !1;
          } else confirmed = j !== "live";
        } else {
          let j = !A.scanFailed && !v.parseFailed;
          S = h.code === "ENOCONN" && j && n?.state !== void 0 && ml({
            state: n.state,
            tempo: n.tempo
          }), confirmed = S, noWorkerFound = j && !confirmed;
        }
      }
      if (evict && confirmed && h.code === "ENOCONN" && !S) await tce(v => {
        delete v.workers[short_3];
      }, r).catch(v => a(v));
      return noWorkerFound ? {
        confirmed: confirmed,
        noWorkerFound: noWorkerFound
      } : {
        confirmed: confirmed
      };
    }
    return {
      confirmed: !0
    };
  }
  return {
    confirmed: !1,
    error: h.error
  };
}
async function gjr(e, n) {
  let ctrlSent = await wot(_A(e)),
    anyMatch = !1,
    confirmed_2 = !0,
    scanFailed = !1,
    h = await Qce(n).catch(() => (scanFailed = !0, []));
  for (let A of h) if (Pn(A, e)) {
    if (anyMatch = !0, !ctrlSent) try {
      process.kill(A.pid, "SIGTERM");
    } catch {}
    let S = Date.now() + 3000,
      T = !0;
    while ((T = await BPn(A.pid, A.procStart)) && Date.now() < S) await J(100);
    if (T) {
      l("tengu_bg_killjob_ctrl_fallback", {
        ctrlSent: ctrlSent
      });
      try {
        process.kill(A.pid, "SIGTERM");
      } catch {}
      let w = Date.now() + 500;
      while ((T = await BPn(A.pid, A.procStart)) && Date.now() < w) await J(100);
    }
    if (T) confirmed_2 = !1;
  }
  return {
    confirmed: confirmed_2,
    anyMatch: anyMatch,
    scanFailed: scanFailed
  };
}
async function Hpn(e) {
  let n = await t_({
    proto: proto,
    op: "list"
  });
  if (n.ok && n.op === "list") return {
    shorts: new Set(n.jobs.map(item => item.short)),
    records: n.jobs.filter(item => !item.outcome)
  };
  let o = await t1({
      silent: !0
    }, e),
    r = Object.entries(o.workers),
    u = await Promise.all(r.map(([, s]) => BPn(s.pid, s.procStart)));
  return {
    shorts: new Set(r.filter((item, index) => u[index]).map(([s]) => s)),
    records: []
  };
}
async function n3n(short_4, n) {
  let o = await t_({
    proto: proto,
    op: "has",
    short: short_4
  });
  if (o.ok && o.op === "has") return {
    alive: o.alive,
    present: o.present ?? o.alive,
    daemonUp: !0
  };
  let r = (await t1({
      silent: !0
    }, n)).workers[short_4],
    u = r !== void 0 && (await BPn(r.pid, r.procStart));
  return {
    alive: u,
    present: u,
    daemonUp: !1
  };
}
async function ONo(short_5) {
  let n = await t_({
    proto: proto,
    op: "has",
    short: short_5
  });
  return n.ok && n.op === "has" ? n.present ?? n.alive : !1;
}
function uvt(e, n) {
  let o = xur(e);
  return {
    ...e,
    ...(QIt(e) && {
      state: "working"
    }),
    detail: np(_s(n).replace(/\s+/g, " ").trim(), pg),
    ...(!o && {
      tempo: "active",
      needs: void 0,
      block: void 0
    }),
    suggestedReply: void 0,
    output: null,
    updatedAt: new Date().toISOString()
  };
}
var err = "That session isn't running \u2014 respawn it first";
function An() {
  return `Couldn't reach the ${py()} \u2014 it may be restarting. Press Enter to retry`;
}
function INo(e) {
  return e.startsWith(An());
}
var Tt = " \u2014 your message was saved and will be sent when you next restart this session";
async function Sn(e, n, o) {
  rh(e);
  let r = await Fo(e, o);
  if (!r || eYe(n, r)) return !1;
  let u = pvt(r);
  if (u !== void 0) return u === n;
  return Kme(e, r, n, o);
}
async function fvt(short_6, text, o, r, u, s, {
  nextTurn = !1
} = {}) {
  let A = Date.now(),
    S = (N, B, le) => {
      l("tengu_bg_reply_outcome", {
        ms: Date.now() - A,
        outcome: f(N),
        error_code: de(B),
        errno: db(le)
      });
    },
    T = No(short_6),
    w = r ?? (await Fo(T, s)),
    auth_2 = await Gze(),
    D = !1,
    j = !1,
    L = async () => {
      if (nextTurn) {
        let B = await t_({
          proto: proto,
          op: "ping"
        });
        if (!B.ok) return B;
        if (B.op !== "ping" || B.version !== {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.319",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-11-05T18:14:18Z",
          GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
          HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          DD_SOURCEMAP_GROUP: "win32"
        }.VERSION) return j = !0, {
          ok: !1,
          error: "its supervisor runs a different Claude Code build",
          code: "ESKEW"
        };
      }
      let N = await t_({
        proto: proto,
        op: "reply",
        short: short_6,
        text: text,
        auth: auth_2,
        ...(nextTurn && {
          nextTurn: nextTurn
        })
      });
      if (!N.ok && "connected" in N && N.connected === !0) D = !0;
      return N;
    },
    C = await L(),
    Y = async () => {
      let N = 10;
      for (let B = 0; !C.ok && (C.code === "ESTARTING" || C.code === "ENOREPLY" || C.code === "ERESPAWNING") && B < N; B++) {
        if (C.code === "ERESPAWNING") N = 60;
        await J(200), C = await L();
      }
    };
  if (await Y(), !C.ok && C.code === "EAUTH") {
    let N = await Gze();
    if (N && N !== auth_2) auth_2 = N, C = await L();
  }
  let ensure_failed = !1;
  if (!C.ok && (C.code === "ENOCONN" || C.code === "ETIMEOUT") && !(nextTurn && D)) {
    let N = await D7({
      forceTransient: !0
    }, s);
    if (ensure_failed = !N.ok, N.ok) auth_2 = (await Gze()) ?? auth_2, C = await L(), await Y();
  }
  if (C.ok) {
    if (w && !r) {
      rh(T);
      let N = (await Fo(T, s)) ?? w,
        B = uvt(N, text);
      if (B.queuedPrompt === text) B.queuedPrompt = void 0;
      ic(T, B, s).catch(Td);
    }
    if (!r) l("tengu_bg_agent_action", {
      action: b("reply"),
      wasTerminal: w ? $P(w.state) : !1,
      daemon: !0,
      jobSessionId: _e(o?.sessionId ?? w?.sessionId),
      ...u?.()
    }), g("job_reply"), S("ok");
    return null;
  }
  if (C.code === "ESKEW") {
    let N = j ? "job_reply_daemon_skewed" : "job_reply_worker_skewed";
    return m("job_reply", N), S("bad", N), {
      err: C.error,
      code: C.code
    };
  }
  if (C.code === "ENOJOB") {
    if (!r) c("job_reply", "job_reply_not_running"), S("sad", "job_reply_not_running");
    return {
      err: err,
      code: C.code
    };
  }
  if (C.code === "ENOCONN" || C.code === "ETIMEOUT") {
    if (!r && C.code === "ENOCONN") {
      let B = (await t1({
        silent: !0
      }, s)).workers[w?.daemonShort ?? short_6];
      if (B && !(await BPn(B.pid, B.procStart))) return c("job_reply", "job_reply_not_running"), S("sad", "job_reply_not_running"), {
        err: err,
        code: "ENOJOB"
      };
    }
    if (!r) m("job_reply", "job_reply_daemon_unreachable", {
      errno: f(C.code),
      ensure_failed: ensure_failed
    }), S("bad", "job_reply_daemon_unreachable");
    let queued = !r && C.code === "ENOCONN" && !C.connected && !D && (await Sn(T, text, s));
    if (nextTurn && !D) return {
      err: "its supervisor did not answer" + (queued ? Tt : ""),
      code: "EUNREACHABLE",
      queued: queued
    };
    return {
      err: An() + (queued ? Tt : ""),
      code: C.code,
      queued: queued
    };
  }
  if (!r) m("job_reply", "job_reply_send_failed"), S("bad", "job_reply_send_failed", C.code);
  let queued_2 = !r && !D && (await Sn(T, text, s));
  return {
    err: `Couldn't send your message \u2014 ${C.error}` + (queued_2 ? Tt : ""),
    code: C.code,
    queued: queued_2
  };
}
async function yjr(e, n) {
  if (GE(e)) return !1;
  let o = wb(Rx(n)),
    r = await Jte(e.resumeSessionId ?? e.sessionId, e.cwd, e.linkScanPath, void 0, o).catch(() => {
      return;
    });
  return r?.hasMessages === !0 && !r.unverifiable;
}
async function vn(e, n, o) {
  let r = await YPn(No(e), o);
  if (r === null) return g("job_attach"), M7(n, "detached"), {
    kind: "error",
    ended: !0,
    msg: "That session was removed \u2014 back to the list"
  };
  if (r.state === "done" || r.state === "stopped" || r.state === "blocked") return g("job_attach"), M7(n, "detached"), {
    kind: "error",
    ended: !0,
    msg: r.state === "stopped" ? "That session was stopped \u2014 back to the list" : r.state === "blocked" ? "That session is blocked \u2014 back to the list" : (await yjr(r, o)) ? "That session's process exited \u2014 press Enter to resume it (the conversation is saved)" : "That session ended \u2014 back to the list"
  };
  if (r.state === "failed") {
    if (r.detail === $9e || r.detail === WXt) return m("job_attach", "job_attach_host_dead"), M7(n, "error"), {
      kind: "error",
      msg: r.detail === WXt ? wut : `${Sut} \u2014 press Enter to restart it`
    };
    let u = r.detail.includes("before init");
    return c("job_attach", u ? "job_attach_pre_init_crash" : "job_attach_crash_loop"), {
      kind: "error",
      ended: !0,
      crashed: !0,
      msg: `Session can't start \u2014 ${r.detail.replace(/^.*?before init(?: \u2014 )?/, "").replace(/^Error:\s*/, "") || r.detail || "it crashed repeatedly"}`
    };
  }
  return;
}
var Ct = {
  forceTransient: !0,
  standsDownAtExit: !0
};
async function MNo(e, n = {}) {
  return await xr(e, n, {
    overStream: !1,
    onlyToRetry: !1
  });
}
async function xr(e, n, o) {
  Ir(e, n.storageV5), t("[PERF:bg-attach-start]"), dEt();
  let r = UXt,
    sessionTabs = void 0,
    s = $Xt,
    h = {
      holdScreenOnDisconnect: !0,
      alreadyInAlt: n.alreadyInAlt,
      gateStdinUntilFirstFrame: n.gateStdinUntilFirstFrame,
      sessionTabs: sessionTabs,
      cloudTabs: n.cloudTabs,
      tabsLanding: n.tabsLanding
    },
    A = {
      ...h,
      holdingFrame: !0,
      gateStdinUntilFirstFrame: !1,
      tabsLanding: void 0
    },
    S = n.gesture ?? {
      gestureId: Ar(),
      attempt: 0,
      interactive: {}
    },
    T = !n.alreadyInAlt,
    w = await Ke(e, o, {
      ...h,
      telemetry: {
        gestureId: S.gestureId,
        attempt: ++S.attempt,
        t0: S.t0,
        surface: S.surface,
        daemonBooted: S.daemonBooted,
        interactive: S.interactive,
        storageV5: n.storageV5
      }
    }),
    v;
  if (w.outcome === "error" && w.msg && r.test(w.msg)) {
    if (v = await D7(Ct, n.storageV5), v.ok) w = await Ke(e, o, {
      ...h,
      telemetry: {
        gestureId: S.gestureId,
        attempt: ++S.attempt,
        t0: S.t0,
        surface: S.surface,
        daemonBooted: S.daemonBooted,
        interactive: S.interactive,
        storageV5: n.storageV5
      }
    });
  }
  for (let j = 0; w.msg && s.test(w.msg) && j < 20; j++) await J(500), w = await Ke(e, o, {
    ...h,
    telemetry: {
      gestureId: S.gestureId,
      attempt: ++S.attempt,
      t0: S.t0,
      surface: S.surface,
      daemonBooted: S.daemonBooted,
      interactive: S.interactive,
      storageV5: n.storageV5
    }
  });
  let D = async () => {
    if (T) process.stdout.write(mhe());
    let j = await vn(e, S, n.storageV5);
    if (j) return j;
    return c("job_attach", "job_attach_crashed"), {
      kind: "error",
      orphaned: !0,
      msg: "Session crashed \u2014 press Enter to respawn"
    };
  };
  while (w.outcome === "disconnected") {
    if (_n()) {
      if (T) process.stdout.write(mhe());
      return Ot("loop_head", n);
    }
    let j = " Reconnecting\u2026 ",
      L = Math.max(1, (process.stdout.columns ?? 80) - j.length);
    process.stdout.write(`\x1B7${yj(1, L)}\x1B[2;7m${j}\x1B[0m\x1B8`);
    let C;
    if (process.stdin.isTTY) {
      let V = "isRaw" in process.stdin ? Boolean(process.stdin.isRaw) : !1;
      if (!V) Ik(process.stdin, !0);
      let N = hn(process.stdin);
      try {
        C = await Promise.race([D7(Ct, n.storageV5), N.promise.then(() => "detach")]);
      } finally {
        if (N.cancel(), !V) Ik(process.stdin, !1);
      }
    } else C = await D7(Ct, n.storageV5);
    if (C === "detach") {
      if (T) process.stdout.write(mhe());
      return t("[PERF:bg-attach-end]"), g("job_attach"), M7(S, "detached"), {
        kind: "detached"
      };
    }
    let Y = C;
    if (!Y.ok) {
      if (T) process.stdout.write(mhe());
      if (Y.stoodDown) return Ot("reconnect", n, Y);
      return m("job_attach", `job_attach_daemon_start_failed_${Y.causeCode}`), M7(S, "error"), {
        kind: "error",
        msg: `Couldn't restart the ${py()} \u2014 ${Y.reason}`
      };
    }
    let ne = dEt();
    if (ne && t3n(ne)) {
      if (T) process.stdout.write(mhe());
      return t("[PERF:bg-attach-end]"), g("job_attach"), M7(S, "detached"), {
        kind: "detached"
      };
    }
    if (await e3n(e)) return t(`[bg-attach] worker gone on reconnect probe short=${e} \u2014 settled while attached`), D();
    w = await Ke(e, o, {
      ...A,
      telemetry: {
        gestureId: S.gestureId,
        attempt: ++S.attempt,
        t0: S.t0,
        surface: S.surface,
        daemonBooted: S.daemonBooted,
        interactive: S.interactive,
        storageV5: n.storageV5
      }
    });
    for (let V = 0; w.msg && s.test(w.msg) && V < 10; V++) await J(200), w = await Ke(e, o, {
      ...A,
      telemetry: {
        gestureId: S.gestureId,
        attempt: ++S.attempt,
        t0: S.t0,
        surface: S.surface,
        daemonBooted: S.daemonBooted,
        interactive: S.interactive,
        storageV5: n.storageV5
      }
    });
    if (w.msg?.includes("ENOJOB")) return t(`[bg-attach] ENOJOB on reconnect short=${e} \u2014 daemon has no handle (or it's killing/settled)`), D();
    if (w.outcome === "error" && T) process.stdout.write(mhe());
  }
  if (w.outcome === "detached" && w.msg && !o.onlyToRetry && (zXt.test(w.msg) || s.test(w.msg))) {
    if (T) process.stdout.write(mhe());
    return m("job_attach", "job_attach_stalled"), {
      kind: "error",
      msg: w.msg.replace(/^E(STALLED|RESPAWNING|STARTING):\s*/, "")
    };
  }
  if (w.outcome === "error") {
    if (w.msg?.startsWith(`${jXt}:`)) {
      m("job_attach", "job_attach_host_dead");
      let L = await Fo(No(e), n.storageV5).catch(() => null),
        C = w.msg.slice(jXt.length + 1).trim();
      return {
        kind: "error",
        msg: L !== null && GE(L) ? C : `${C} \u2014 press Enter to restart it`
      };
    }
    if (w.msg?.startsWith(`${Z6n}:`)) {
      m("job_attach", "job_attach_no_response");
      let L = await Fo(No(e), n.storageV5).catch(() => null);
      if (L !== null && GE(L)) return {
        kind: "error",
        msg: `${tGt} \u2014 it runs a shell command, which is never run again for you; ctrl+x stops it`
      };
      return {
        kind: "error",
        notResponding: !0,
        msg: `${tGt} \u2014 press Enter again to restart it (the conversation is saved)`
      };
    }
    if (w.msg?.includes("ENOJOB")) {
      t(`[bg-attach] ENOJOB on first attach short=${e} \u2014 daemon has no handle (or it's killing/settled)`);
      let L = await vn(e, void 0, n.storageV5);
      if (L) return L;
      return c("job_attach", "job_attach_orphaned"), {
        kind: "error",
        orphaned: !0,
        msg: `${zEe()} lost track of this job \u2014 press Enter to respawn it`
      };
    }
    if (v && !v.ok) {
      if (v.stoodDown) return Ot("first_attach", n, v);
      return m("job_attach", `job_attach_daemon_start_failed_${v.causeCode}`), M7(S, "error"), {
        kind: "error",
        msg: `Couldn't start the ${py()} \u2014 ${v.reason}`
      };
    }
    let msg_2 = w.msg && s.test(w.msg) ? `${zEe()} is still starting \u2014 try again in a moment` : w.msg && r.test(w.msg) ? `${zEe()} didn't respond after starting \u2014 try again in a moment` : w.msg ? `Couldn't attach \u2014 ${w.msg}` : "Couldn't attach to that session";
    return m("job_attach", "job_attach_failed"), {
      kind: "error",
      msg: msg_2
    };
  }
  if (t("[PERF:bg-attach-end]"), g("job_attach"), w.msg && kut.test(w.msg)) return {
    kind: "detached",
    msg: w.msg.replace(kut, "")
  };
  return w.beforeFirstFrame ? {
    kind: "detached",
    beforeFirstFrame: !0
  } : {
    kind: "detached"
  };
}
var Dr = "Background sessions still running will stop in about a minute. Run 'claude agents' to keep them.";
async function Ot(e, n, o) {
  let r = x(),
    [u, service_restart] = o ? [void 0, o.viaService === !0 && r !== "macos"] : await Promise.all([t_({
      proto: proto,
      op: "ping"
    }, {
      timeoutMs: 300
    }), d5s()]),
    daemon_up = u !== void 0 && (u.ok || u.code === "ETIMEOUT"),
    A = !daemon_up && !service_restart && r !== "windows" && process.stdout.isTTY ? `${Dr}
` : "";
  if (t(`[bg-attach] held: this process is exiting (${e})`), l("tengu_bg_attach_held_at_exit", {
    loop_head: e === "loop_head",
    first_attach: e === "first_attach",
    daemon_up: daemon_up,
    service_restart: service_restart,
    notice: A !== ""
  }), n.alreadyInAlt) n.onExitNotice?.(A);else if (A) process.stdout.write(A);
  return jd();
}
var Tn = 32,
  Nr = {
    head: 50,
    tail: 30
  },
  Fr = {
    head: 60,
    tail: 100
  },
  regExp = new RegExp(`^[0-9a-f]{${Tn}}$`);
function Lr(e) {
  return nt(e).slice(0, Tn);
}
async function nle(e, n = {}, storageV5) {
  let r = await Fo(No(e), storageV5),
    u = r?.worktreePath ? await Qce(storageV5).catch(() => []) : [],
    s = new Set();
  for (let v of u) if (Pn(v, e)) s.add(v.pid);
  let h = await dUe(e, r ?? void 0, {
    knownGone: n.knownGone,
    evict: !0
  }, storageV5).catch(v => ({
    confirmed: !1,
    error: d(v)
  }));
  if (!h.confirmed) {
    if (t(`deleteJob: kill unconfirmed for ${e} \u2014 skipping jobdir/worktree removal to avoid stranding a live worker`, {
      level: "warn"
    }), !n.internal) m("job_delete", "kill_unconfirmed", {
      had_worktree: Boolean(r?.worktreePath)
    });
    return {
      removed: !1,
      error: h.error,
      errorCode: "kill_unconfirmed"
    };
  }
  let leftWorktreeDir,
    forcedWorktreeRemoval,
    T = !1;
  if (r?.worktreePath) {
    let worktreePath = r.worktreePath,
      keptReason,
      cause,
      forceRemoveWithheld,
      C = null,
      Y = "present",
      ne = !1,
      keptErrorSummary,
      keptUnpushed,
      B,
      {
        dirty: dirty,
        trackedChanges: trackedChanges,
        gitError: gitError,
        submoduleWork: submoduleWork,
        connectorDownloads: connectorDownloads
      } = await S8e(worktreePath, void 0),
      G = mur(worktreePath, r.originCwd) ?? void 0,
      H = await qe(worktreePath).catch(() => worktreePath),
      worktreeDigest = Lr(H);
    T = n.discardUnpushed !== void 0 && !gitError && n.discardUnpushed.worktreeDigest === worktreeDigest && (await At(H, n.discardUnpushed.headSha));
    let Le = !gitError && G ? await VMe(G).catch(() => null) : null,
      ke,
      Pe = !1;
    for (let [Re, ae] of (Le ?? []).entries()) if ((await qe(ae.worktreePath).catch(() => ae.worktreePath)) === H) {
      ke = ae, Pe = Re > 0 && !ae.prunable;
      break;
    }
    let ve = cto(H),
      me = G !== void 0 && ve !== null && (await qe(ve).catch(() => ve)) === (await qe(G).catch(() => G)),
      oe = Pe && me ? submoduleWork?.kind === "unverifiable" ? "submodule" : trackedChanges ? "tracked_changes" : void 0 : G !== void 0 && (await yur(H, G)) ? void 0 : "not_registered",
      forceRemoveRequested = n.forceRemoveWorktree !== void 0 && n.forceRemoveWorktree === worktreeDigest,
      Ue = forceRemoveRequested && oe === void 0 && _ur(H),
      je = Ue ? "job_delete_force_remove" : n.force === !0 || T ? "job_delete_force" : "job_delete",
      pt = ARn(je),
      Q = TRn(ke?.lockReason),
      te;
    if ((te = await Ur(e, H, worktreePath, storageV5)) !== null) keptReason = "in_use", keptErrorSummary = te.verified && nD.test(te.jobId) ? te.jobId : void 0, t(`deleteJob: ${worktreePath} is claimed by running job ${te.jobId}'s state.json (${te.verified ? "verified" : "unverifiable claim"}) \u2014 not ours to remove`, {
      level: "warn"
    });else if (((ne = (await k2n(worktreePath)) === null) || T || Ue) && (Y = await JU(worktreePath)) !== "gone" && (C = Y === "unreadable" ? "unreadable" : await Bt(e, H, worktreePath, {
      includeUnsettled: T || Ue
    }, storageV5)) !== null) {
      if (C === "claimed" && !ne && T) keptReason = "unpushed_shared", keptUnpushed = await dt(worktreePath).catch(() => {
        return;
      });else keptReason = C === "claimed" ? "shared_record" : "records_unreadable";
      t(C === "claimed" ? `deleteJob: ${worktreePath} is also recorded by another settled job's state.json \u2014 not removing another session's output` : `deleteJob: could not verify ${worktreePath} against sibling records \u2014 refusing until records are readable`, {
        level: "warn"
      });
    } else if (!(await nct(ke?.lockReason)) && !(Q !== null && s.has(Q))) keptReason = "live_lock", keptErrorSummary = Q !== null ? `pid ${Q}` : void 0, t(`deleteJob: ${worktreePath} is locked by a live Claude Code process, or with a reason we did not write (${ke?.lockReason}) \u2014 not ours to remove`, {
      level: "warn"
    });else if ((B = await jr(u, e, s, H, worktreePath)) !== void 0 && (await JU(worktreePath)) !== "gone") keptReason = "occupied", keptErrorSummary = B.pid === process.pid ? `${typeof B.parkedJobId === "string" && nD.test(B.parkedJobId) ? `session ${B.parkedJobId},` : "a session"} moved to the background from this window, pid ${B.pid}` : B.kind === "bg" && typeof B.jobId === "string" && nD.test(B.jobId) ? `background session ${B.jobId}, pid ${B.pid}` : `pid ${B.pid}, ${B.kind}`, t(`deleteJob: ${worktreePath} is the working directory of a live session (pid ${B.pid}, ${B.kind}) \u2014 not ours to remove`, {
      level: "warn"
    });else if (dirty && !gitError && !pt) keptReason = "dirty", t(`deleteJob: kept ${worktreePath} \xB7 ${M5t(connectorDownloads)}`, {
      level: "warn"
    });else if (!gitError && G && !T && !(await uto(worktreePath, await xRn(G), {
      primaryCheckoutVouches: !0
    }))) {
      if ((await Bt(e, H, worktreePath, {
        includeUnsettled: !1
      }, storageV5)) === "claimed") keptReason = "unpushed_shared", t(`deleteJob: ${worktreePath} has unpushed commits and is also recorded by another settled job's state.json \u2014 not offering a discard`, {
        level: "warn"
      });else keptReason = "unpushed", t(`deleteJob: ${worktreePath} has commits that are on no remote, kept`, {
        level: "warn"
      });
      keptUnpushed = await dt(worktreePath).catch(() => {
        return;
      });
    } else if (T && n.discardUnpushed !== void 0 && !(await At(H, n.discardUnpushed.headSha))) keptReason = "unpushed", t(`deleteJob: ${worktreePath} HEAD moved past the confirmed discard pin, kept`, {
      level: "warn"
    }), keptUnpushed = await dt(worktreePath).catch(() => {
      return;
    });else {
      let Re = mur(worktreePath, r.originCwd) ?? void 0,
        ae = (r.originCwd ? fr(r.originCwd) : null) ?? void 0,
        z = await nye(worktreePath, r.worktreeBranch, Re, r.worktreeHookBased, je, H, ae, {
          storageV5: storageV5,
          forceRemoveRequested: forceRemoveRequested
        }).catch(be => (t(`deleteJob: removeAgentWorktree threw for ${worktreePath}: ${d(be)}`, {
          level: "error"
        }), {
          outcome: "failed",
          errorSummary: `the removal failed unexpectedly (${Wd(d(be), Fr)})`
        }));
      if (z.outcome === "failed") {
        if (keptReason = z.needsForce ? "unverified" : z.errorSummary === oct ? "identity_changed" : z.holdsWorktreesInside ? "worktrees_inside" : "remove_failed", keptErrorSummary = z.needsForce ? void 0 : z.errorSummary, z.forceRemovable !== void 0 && _ur(H)) if (oe !== void 0) forceRemoveWithheld = oe;else if ((await Bt(e, H, worktreePath, {
          includeUnsettled: !1
        }, storageV5)) === "claimed") forceRemoveWithheld = "shared_record";else cause = z.forceRemovable;
      } else if (z.outcome === "left_in_place") leftWorktreeDir = Wd(worktreePath);else if (z.forcedDirectoryRemoval) {
        let {
          keptBranch: keptBranch
        } = z.forcedDirectoryRemoval;
        forcedWorktreeRemoval = {
          worktree: Wd(H),
          ...(keptBranch !== void 0 && {
            keptBranch: Wd(keptBranch, Nr)
          })
        };
      }
    }
    if (keptReason) {
      if (!n.internal) c("job_delete", `worktree_kept_${keptReason}`, {
        had_worktree: !0
      });
      return {
        removed: !1,
        keptWorktree: Wd(H),
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
        } : cause !== void 0 && T && n.discardUnpushed !== void 0 && {
          discardUnpushed: n.discardUnpushed
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
        }),
        ...(connectorDownloads !== void 0 && keptReason === "dirty" && {
          connectorDownloads: connectorDownloads
        })
      };
    }
  }
  let w = r?.fan?.some(v => v.kind === "shell" && v.doneAt === void 0) ?? !1;
  await gn(No(e), {
    waitMs: w ? 4000 : 0
  });
  try {
    await Or(No(e), {
      recursive: !0,
      force: !0
    });
  } catch (v) {
    if (rh(No(e)), t(`deleteJob: failed to remove job dir for ${e}: ${d(v)}`, {
      level: "warn"
    }), !n.internal) m("job_delete", "jobdir_rm_failed", {
      had_worktree: Boolean(r?.worktreePath)
    });
    return {
      removed: !1,
      error: `couldn't remove the session's state directory (${Yr(d(v))})`,
      errorCode: "jobdir_rm_failed"
    };
  }
  if (X() && storageV5 !== void 0 && eg(kjr(e)) === void 0) await Wpn(storageV5, e);else await kn(rLe(e)).catch(() => {});
  if (X() && storageV5 !== void 0 && eg(vjr(e)) === void 0) await NNo(storageV5, e);else await kn(Upt(e)).catch(() => {});
  if (rh(No(e)), !n.internal) if (leftWorktreeDir) c("job_delete", "worktree_left_in_place", {
    had_worktree: !0,
    discard_confirmed: T
  });else if (forcedWorktreeRemoval) c("job_delete", "worktree_force_removed", {
    had_worktree: !0,
    discard_confirmed: T
  });else g("job_delete", {
    had_worktree: Boolean(r?.worktreePath),
    discard_confirmed: T
  });
  return {
    removed: !0,
    discardConfirmed: T,
    ...(leftWorktreeDir && {
      leftWorktreeDir: leftWorktreeDir
    }),
    ...(forcedWorktreeRemoval && {
      forcedWorktreeRemoval: forcedWorktreeRemoval
    })
  };
}
async function Ur(e, n, o, r) {
  for (let u of await EI(void 0, r).catch(() => [])) {
    if (u.id === e || !u.state.worktreePath || ml(u.state)) continue;
    let s = Cn(u.state.worktreePath, n, o);
    if (s === "match") return {
      jobId: u.id,
      verified: !0
    };
    if (s === "unverifiable") return {
      jobId: u.id,
      verified: !1
    };
    let h = await On(u.state.worktreePath, o);
    if (Ne(h, n)) return {
      jobId: u.id,
      verified: !0
    };
  }
  return null;
}
function Cn(e, n, o) {
  if (Ne(e, o) || Ne(e, n)) return "match";
  if (!bl(e)) return "no_match";
  let r = Pr(e);
  if (Ne(r, o) || Ne(r, n)) return "match";
  return mt(e) && !or(e) && !Cl(e) ? "unverifiable" : "no_match";
}
function Ne(e, n) {
  return ft(e) === ft(n);
}
function ft(e) {
  return Tf(En(e));
}
function Rn(e, n) {
  let o = Mr(ft(n), ft(e));
  return o.split(/[/\\]/, 1)[0] !== ".." && !mt(o);
}
async function jr(e, n, o, r, u) {
  for (let s of e) {
    if (s.kind !== "interactive" && s.kind !== "bg") continue;
    if (o.has(s.pid) || s.parkedJobId === n) continue;
    if (s.pid === process.pid && s.parkedJobId === void 0) continue;
    let h = s.pid === process.pid ? Ee() : s.cwd;
    if (typeof h !== "string" || !mt(h)) continue;
    if (!Rn(h, r) && !Rn(h, u)) continue;
    if (s.kind === "bg" && typeof s.jobId === "string" && nD.test(s.jobId)) {
      if ((await Bn(No(s.jobId))) === "missing") continue;
    }
    return s;
  }
  return;
}
function On(e, n) {
  let o = pe();
  if (!mt(e) || bl(e) || ca(e, o) && ca(e, n)) return e;
  let r = Tj(ie(), e, {
    surfaceNetworkRaw: !0,
    anchors: [o, n]
  });
  if (r === Zy) return e;
  if (r !== void 0 && (bl(r) || ca(r, o) && ca(r, n))) return e;
  return qe(e).catch(() => e);
}
async function Bn(e) {
  return Tr(Mt(e, "state.json")).then(() => "present", n => K(n) ? "missing" : "unreadable");
}
async function Bt(e, n, o, {
  includeUnsettled: includeUnsettled
}, u) {
  let s;
  try {
    s = await Cr(M$(), {
      withFileTypes: !0
    });
  } catch (error) {
    return K(error) ? null : "unreadable";
  }
  for (let h of s) {
    if (!h.isDirectory() || h.name === e) continue;
    let A = Mt(M$(), h.name),
      S = await Fo(A, u);
    if (S === null) {
      if ((await Bn(A)) === "missing") continue;
      return "unreadable";
    }
    if (!S.worktreePath || !includeUnsettled && !ml(S)) continue;
    let T = Cn(S.worktreePath, n, o);
    if (T === "match") return "claimed";
    if (T === "unverifiable") return "unreadable";
    let w = await On(S.worktreePath, o);
    if (Ne(w, n)) return "claimed";
  }
  return null;
}
async function Ke(e, n, o) {
  return await hjr(e, o);
}
function Pn(e, n) {
  return e.kind === "bg" && (e.jobId === n || e.sessionId?.startsWith(n) === !0);
}
export { Npn, yot, eGt, OG, Z6n, tGt, M7, e3n, t3n, hjr, PNo, s5s, Fpn, dUe, gjr, Hpn, n3n, ONo, uvt, err as Z4e, INo, fvt, yjr, MNo, regExp as _jr, nle };