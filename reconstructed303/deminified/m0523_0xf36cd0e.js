// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { b, c, pe } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { d, k, pS, G } from "B:/~BUN/root/chunk-3aez4b53.js";
import { ke } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { W } from "B:/~BUN/root/chunk-hg8ngszx.js";
import { Y } from "B:/~BUN/root/chunk-89mss1tj.js";
import { $n, jn, ul, Vi, pl } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { _, J, Ey, w$, se, ps, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { O, nt, zr } from "B:/~BUN/root/chunk-nggrknsv.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { ce } from "B:/~BUN/root/chunk-nxwmyxnk.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { kn, ks } from "B:/~BUN/root/chunk-yw21pggd.js";
import { lt, ct } from "B:/~BUN/root/chunk-6ft8yhc8.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { Uh, O_, ad } from "B:/~BUN/root/chunk-2ypz4cxh.js";
import { qB, ns, An } from "B:/~BUN/root/chunk-rvc0n7zm.js";
import { Be } from "B:/~BUN/root/chunk-d9rmnpx3.js";
import { CF, J6o, lLe, Ttt, xre, sY, e3o, _er, _Gt } from "B:/~BUN/root/chunk-smv8ep0q.js";
import { DE, pOe, HWn, Dfe, Ave, LE, lK } from "B:/~BUN/root/chunk-7qatwz9y.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { al } from "B:/~BUN/root/chunk-v6pbq6dm.js";
import { $W, oS, gv, Mne } from "B:/~BUN/root/chunk-nvgn0qsr.js";
import { ac as proto, Z0, $Z, N$n, vgo, $dt, Ego, PIt, OIt, MIt, tUe, l3e, DIt, d3e, LIt, c3e, NIt, lN, UZ, U$n, K7t, tD, io, $l, hl, qp, Zr, Z7t, zR, kC, Ta, Iv, Vdt } from "B:/~BUN/root/chunk-nq10jsxs.js";
import { he } from "B:/~BUN/root/chunk-4qqgabd5.js";
import { Gm, $2, yr, Vfn, Ot } from "B:/~BUN/root/chunk-2zk4vqr8.js";
import { BW } from "B:/~BUN/root/chunk-xrp58hm9.js";
import { Gl } from "B:/~BUN/root/chunk-vpgpdrbv.js";
import { bn, vu } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { uf, Fpe, Rwe } from "B:/~BUN/root/chunk-78zw0pmb.js";
import { pEt } from "B:/~BUN/root/chunk-2efkaa0v.js";
import { j4r, k9o, Bnt, ekt, fVt, Jre, ivn } from "B:/~BUN/root/chunk-3md9ngvz.js";
import { Ev } from "B:/~BUN/root/chunk-sk7eej8z.js";
import { w1, _Y, Wnt, AL, xL, fvn } from "B:/~BUN/root/chunk-1d35msqn.js";
import { I6, A$n } from "B:/~BUN/root/chunk-0x8xex6w.js";
import { Rg } from "B:/~BUN/root/chunk-y659v3h6.js";
import { knt } from "B:/~BUN/root/chunk-64czng1s.js";
import { SGt, Q2e } from "B:/~BUN/root/chunk-eh8e5tst.js";
import { Yf, su } from "B:/~BUN/root/chunk-2wpqgvtg.js";
import { rNn, LXt, JYe, USe, KHe, e6e, HXt, Uyr, iNn, aNn, xse, $Xt, Byr, yys } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { Srn, Oee } from "B:/~BUN/root/chunk-pwz0pnkt.js";
import { x4r, Hnt, B4r } from "B:/~BUN/root/chunk-1jz9m9yh.js";
import { Bw } from "B:/~BUN/root/chunk-34t4kgx5.js";
import { xV, pkt } from "B:/~BUN/root/chunk-brmpd59q.js";
import { qss } from "B:/~BUN/root/chunk-cy4hjzy6.js";
import { pp } from "B:/~BUN/root/chunk-0p1hpv0s.js";
import { Ia } from "B:/~BUN/root/chunk-9xr0x7gd.js";
import { ge, mn, sr, St } from "B:/~BUN/root/chunk-rm2gz7kj.js";
import { st } from "B:/~BUN/root/chunk-7aw74be3.js";
import { Qg } from "B:/~BUN/root/chunk-q9dtdza4.js";
import { ye } from "B:/~BUN/root/chunk-shj1mfyk.js";
import { lstat as tt, mkdir as Jn, readdir as Hn, rename as Xt, unlink as et } from "fs/promises";
import { join as me } from "path";
var Zt = 900000,
  wt = 86400000;
function We(e, n) {
  return n - e >= wt || e > n + 60000;
}
var Qt = /^[A-Za-z0-9-]{1,64}$/;
function ot(e) {
  return me(Dfe(), `${e}.json`);
}
var rt = 8192;
function $e(e) {
  return Be.daemon([HWn, e]);
}
function yt(e) {
  return $e(`${e}.json`);
}
var en = Qg();
function at(e, n) {
  return en.run("g:" + e, n).catch(() => {});
}
async function X2e(gestureId, surface, o) {
  if (!Qt.test(gestureId)) return;
  let r = {
    gestureId: gestureId,
    surface: surface,
    startedAtEpochMs: Date.now(),
    attempt: 0
  };
  CF().ownedBeacons.set(gestureId, r), await at(gestureId, async () => {
    if (r.pid = process.pid, r.procStart = await O_(), o) {
      if (!(await kt(o, gestureId, r, !0))) CF().ownedBeacons.delete(gestureId);
      return;
    }
    if (await Jn(Dfe(), {
      recursive: !0,
      mode: 448
    }), !(await Ee())) {
      CF().ownedBeacons.delete(gestureId);
      return;
    }
    if (CF().ownedBeacons.get(gestureId) !== r) return;
    await An(ot(gestureId), _(r), 384);
  }), await Vn(o);
}
async function kt(e, n, o, r = !1) {
  if (!(await Ee(r))) return !1;
  if (CF().ownedBeacons.get(n) === o) await e.write(yt(n), _(o));
  return !0;
}
function tn(e, n, o) {
  let r = CF().ownedBeacons.get(e);
  if (!r || !Number.isInteger(n) || n <= (r.attempt ?? 0)) return;
  r.attempt = n, at(e, async () => {
    if (r.procStart ??= await O_(), o) {
      await kt(o, e, r);
      return;
    }
    if (!(await Ee())) return;
    if (CF().ownedBeacons.get(e) !== r) return;
    await An(ot(e), _(r), 384);
  });
}
function Lwt(e, n, o) {
  let r = CF().ownedBeacons.get(e);
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
  at(e, async () => {
    if (r.procStart ??= await O_(), o) {
      await kt(o, e, r);
      return;
    }
    if (!(await Ee())) return;
    if (CF().ownedBeacons.get(e) !== r) return;
    await An(ot(e), _(r), 384);
  });
}
async function I$(e, n) {
  if (!Qt.test(e)) return;
  CF().ownedBeacons.delete(e), await at(e, async () => {
    if (n) {
      if (!(await Ee())) return;
      let r = !1;
      for (let u = 0;; u++) {
        let s = await n.delete(yt(e));
        if (s.ok) return;
        let h = "telemetryCode" in s.error ? s.error.telemetryCode : void 0;
        if (r = h !== void 0 && qB.has(h), r && I() === "windows" && u < zt - 1) {
          await Y(Yt);
          continue;
        }
        break;
      }
      if (!r) return;
      await n.write(yt(e), "{}");
      return;
    }
    let o = ot(e);
    if (!(await Ee())) return;
    for (let r = 0;; r++) try {
      await et(o);
      return;
    } catch (error) {
      let s = k(error);
      if (s === "ENOENT") return;
      if (I() === "windows" && s !== void 0 && qB.has(s) && r < zt - 1) {
        await Y(Yt);
        continue;
      }
      break;
    }
    await Xt(o, `${o}.${process.pid}.cleared`).catch(() => {});
  });
}
var zt = 4,
  Yt = 50;
async function Ee(e = !1) {
  try {
    return (await tt(Dfe())).isDirectory();
  } catch (error) {
    return e && k(error) === "ENOENT";
  }
}
async function Gn(e) {
  try {
    let n = await al(me(Dfe(), e), rt);
    if (n === null) return null;
    return nn(n);
  } catch {
    return null;
  }
}
async function Kn(e, n) {
  let o = $e(n),
    r = await e.statMeta(o);
  if (!r.ok || r.value.size > rt) return null;
  let u = await e.read([o]);
  if (!u.ok) return null;
  let s = u.value.items[0];
  if (!s.found || s.totalBytes > rt) return null;
  let entry = nn(Buffer.from(s.value).toString("utf8"));
  return entry === null ? null : {
    entry: entry,
    version: s.version,
    mtimeMs: s.mtimeMs
  };
}
function nn(e) {
  try {
    let n = J(e);
    return !!n && typeof n === "object" && typeof n.gestureId === "string" && typeof n.startedAtEpochMs === "number" && Number.isFinite(n.startedAtEpochMs) && n.startedAtEpochMs <= Date.now() + 60000 ? n : null;
  } catch {
    return null;
  }
}
async function rn(e) {
  if (typeof e.pid !== "number" || !Number.isInteger(e.pid) || e.pid <= 0) return !1;
  if (!Ia(e.pid)) return !0;
  if (e.procStart === void 0) return !1;
  let n = await ad(e.pid);
  return n !== void 0 && n !== e.procStart;
}
async function qn(e, n) {
  try {
    let o = await tt(me(Dfe(), e));
    return We(o.mtimeMs, n);
  } catch {
    return !1;
  }
}
function Vn(e) {
  return en.run("reconcile", () => zn(e));
}
async function zn(e) {
  if (e) return Yn(e);
  if (!(await Ee())) return [];
  let n;
  try {
    n = await Hn(Dfe());
  } catch {
    return [];
  }
  let o = Date.now(),
    r = [];
  for (let u of n) {
    if (!u.endsWith(".json")) {
      try {
        let S = await tt(me(Dfe(), u));
        if (We(S.mtimeMs, o)) await et(me(Dfe(), u));
      } catch {}
      continue;
    }
    let s = await Gn(u);
    if (s === null) {
      try {
        let S = await tt(me(Dfe(), u));
        if (We(S.mtimeMs, o)) await et(me(Dfe(), u));
      } catch {}
      continue;
    }
    let h = o - s.startedAtEpochMs;
    if (!(typeof s.pid === "number" && Number.isInteger(s.pid) && s.pid > 0 ? h >= Zt && ((await rn(s)) || s.procStart === void 0 && (await qn(u, o))) : h >= wt)) {
      r.push(s);
      continue;
    }
    let T = me(Dfe(), `${u}.${process.pid}.claimed`);
    try {
      await Xt(me(Dfe(), u), T);
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
  i("tengu_bg_attach_outcome", {
    outcome: c(n || o ? "detached" : "error"),
    got_ack: n || typeof e.marksExpected === "boolean",
    got_first_frame: n ? !0 : o ? void 0 : !1,
    synthetic: !0,
    apc_detach: !1,
    timed_out: n || o ? void 0 : !0,
    journal_recovered: !0,
    attach_ms: attach_ms,
    first_frame_kind: pe(n ? "real" : void 0),
    marks_expected: n ? !0 : typeof e.marksExpected === "boolean" ? e.marksExpected : void 0,
    attempt: typeof e.attempt === "number" && Number.isInteger(e.attempt) && e.attempt >= 0 && e.attempt < 1e6 ? e.attempt + 1 : 0,
    gesture_id: ye(e.gestureId),
    surface: pe(e.surface === "fleet" || e.surface === "bg_cli" ? e.surface : void 0),
    daemon_booted: typeof e.daemonBooted === "boolean" ? e.daemonBooted : void 0,
    attach_cold: typeof e.attachCold === "boolean" ? e.attachCold : void 0,
    via: pe(pkt(e.via)),
    msgs_loaded: n ? $dt(e.msgsLoaded) : void 0,
    msgs_in_jsonl: n ? $dt(e.msgsInJsonl) : void 0,
    msgs_rendered_at_first_paint: n ? $dt(e.msgsRenderedAtFirstPaint) : void 0
  });
}
async function Yn(e) {
  if (!(await Ee())) return [];
  let n = [],
    cursor;
  do {
    let s = await e.listEntries({
      namespace: "daemon",
      relPath: [HWn]
    }, cursor === void 0 ? void 0 : {
      cursor: cursor
    });
    if (!s.ok) return [];
    for (let h of s.value.items) {
      if (h.kind !== "key" || h.key.namespace !== "daemon" || h.key.relPath.length !== 2 || h.key.relPath[0] !== HWn) continue;
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
    let w = mtimeMs !== void 0 && We(mtimeMs, r);
    if (!file_2.endsWith(".json")) {
      if (w) await e.delete($e(file_2));
      continue;
    }
    let T = size !== void 0 && size > rt ? null : await Kn(e, file_2);
    if (T === null) {
      if (w) await e.delete($e(file_2));
      continue;
    }
    let entry_2 = T.entry,
      v = r - entry_2.startedAtEpochMs;
    if (!(typeof entry_2.pid === "number" && Number.isInteger(entry_2.pid) && entry_2.pid > 0 ? v >= Zt && ((await rn(entry_2)) || entry_2.procStart === void 0 && We(T.mtimeMs, r)) : v >= wt)) {
      u.push(entry_2);
      continue;
    }
    let j = await e.delete($e(file_2), {
      precondition: {
        type: "ifMatch",
        version: T.version
      }
    });
    if (!j.ok || !j.value.existed) continue;
    on(entry_2);
  }
  return u;
}
import { randomUUID as Xn } from "crypto";
import { connect as Zn } from "net";
var Qn = 1e4,
  Nbn = "ENORESPONSE",
  Nwt = "Session isn't responding",
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
function er(e) {
  return Object.hasOwn(an, e) ? an[e] : "unknown_code";
}
function tr(e) {
  if (e === void 0 || e === "") return;
  if (c3e.test(e)) return "ekicked";
  if (e.includes("ERESPAWNING")) return "erespawning";
  if (e.includes("ESTARTING")) return "estarting";
  if (e.includes("ESTALLED")) return "estalled";
  if (e.includes("EUNVERIFIED")) return "eunverified";
  if (e.includes("EHOSTDEAD")) return "ehostdead";
  if (NIt.test(e)) return "unknown_code";
  return "worker_detach";
}
function oY(e, n, o) {
  if (!e) return;
  let r = e.interactive?.reached,
    u = n === "detached" ? e.interactive?.marksExpected : void 0,
    s = n === "detached" && r === void 0 && u === !0,
    h = s && e.t0 !== void 0 ? Math.round(performance.now() - e.t0) : void 0;
  i("tengu_bg_attach_outcome", {
    outcome: c(n),
    got_ack: !1,
    got_first_frame: !1,
    synthetic: !0,
    apc_detach: !1,
    failure_class: pe(n === "error" ? o ?? "daemon_unavailable" : void 0),
    gesture_id: ye(e.gestureId),
    attempt: ++e.attempt,
    surface: pe(e.surface),
    daemon_booted: e.daemonBooted,
    via: pe(e.interactive?.via),
    attach_cold: e.interactive?.attachCold,
    attach_ms: r !== void 0 ? r.attachMs : h,
    content_paint_ms: r !== void 0 ? Math.round(r.contentPaintMs) : void 0,
    prompt_idle_ms: r !== void 0 ? Math.round(r.promptIdleMs) : void 0,
    msgs_loaded: r?.msgsLoaded,
    msgs_in_jsonl: r?.msgsInJsonl,
    msgs_rendered_at_first_paint: r?.msgsRenderedAtFirstPaint,
    first_frame_kind: pe(r !== void 0 ? "real" : void 0),
    marks_expected: r !== void 0 ? !0 : u,
    attach_censored: s ? !0 : void 0
  });
}
async function Fbn(short) {
  let n = await Rg({
    proto: proto,
    op: "has",
    short: short
  });
  return n.ok && n.op === "has" && n.present === !1;
}
var vt = 2,
  cn = 26,
  ln = 100,
  nr = 8,
  rr = Buffer.from([127]),
  un = 98,
  fn = 122,
  it = Buffer.from("\x1B[27;5;98~", "latin1"),
  pn = Buffer.from("\x1B[27;5;122~", "latin1"),
  or = Buffer.from("\x1B[27u", "latin1"),
  ar = Buffer.from("\x1B[27;1u", "latin1"),
  ir = 3,
  dr = 99,
  cr = Buffer.from("\x1B[27;5;99~", "latin1"),
  sn = Buffer.from($Z, "ascii"),
  Et = Buffer.from(N$n, "ascii"),
  dn = Buffer.from("\x1B_cc-d", "ascii"),
  Je = Buffer.from("\x1B[?9001", "ascii"),
  lr = 100;
function Te(e, n, o) {
  return e.length - n >= o.length && e.compare(o, 0, o.length, n, n + o.length) === 0;
}
function He(e, n, o) {
  if (e[n] !== 27 || e[n + 1] !== 91) return 0;
  let r = n + 2,
    u = () => {
      let w = -1;
      for (let T = 0; T < 8 && r < e.length; T++) {
        let S = e[r];
        if (S < 48 || S > 57) break;
        w = (w < 0 ? 0 : w) * 10 + (S - 48), r++;
      }
      return w;
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
function Ie(e, n) {
  let o = Math.min(e.length, n.length - 1);
  e: for (let r = o; r > 0; r--) {
    let u = e.length - r;
    for (let s = 0; s < r; s++) if (e[u + s] !== n[s]) continue e;
    return r;
  }
  return 0;
}
var Z = Buffer.alloc(0);
function hn(e, prefixArmed) {
  for (let o = 0; o < e.length; o++) {
    let r = e[o];
    if (prefixArmed) {
      if (prefixArmed = !1, r === ln) return {
        matched: !0,
        prefixArmed: !1
      };
      continue;
    }
    if (r === cn || r === ir || He(e, o, fn) || Te(e, o, pn) || He(e, o, dr) || Te(e, o, cr)) return {
      matched: !0,
      prefixArmed: !1
    };
    let u = r === vt ? 1 : He(e, o, un) || (Te(e, o, it) ? it.length : 0);
    if (u) o += u - 1, prefixArmed = !0;
  }
  return {
    matched: !1,
    prefixArmed: prefixArmed
  };
}
function gn(e) {
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
          w = hn(A, o);
        if (o = w.prefixArmed, w.matched) {
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
function Hbn(e) {
  return hn(e, !1).matched;
}
async function cer(short_2, n = {}) {
  let o = n.stdin ?? process.stdin,
    r = n.stdout ?? process.stdout,
    cols_2 = "columns" in r ? r.columns || 120 : 120,
    rows_2 = "rows" in r ? r.rows || 30 : 30,
    cols = cols_2,
    rows = rows_2,
    attachId = Xn(),
    auth = await pOe(),
    S = Date.now(),
    v = performance.now(),
    D = n.telemetry?.t0,
    U = D !== void 0 && Number.isFinite(D) && D >= 0 && D <= v && v - D < 86400000 ? D : v;
  if (n.telemetry?.gestureId !== void 0) tn(n.telemetry.gestureId, n.telemetry.attempt, n.telemetry.storageV5);
  let contentPaintMs,
    promptIdleMs,
    msgsLoaded,
    msgsInJsonl,
    msgsRenderedAtFirstPaint,
    N = Z,
    P = n.telemetry?.interactive?.reached,
    _e = !1,
    De,
    be = setTimeout(() => {
      if (P === void 0 && (contentPaintMs === void 0 || promptIdleMs === void 0)) _e = !0, De = performance.now() - U;
    }, Math.max(0, 30000 - (v - U))),
    Ce = !1,
    ack_ms,
    via,
    le,
    Fe,
    we,
    stale,
    ve,
    cached,
    requireNonce,
    got_first_frame = !1,
    meaningful_ms;
  function qe(B) {
    let ms = Date.now() - S;
    if (B && meaningful_ms === void 0) meaningful_ms = ms;
    if (got_first_frame) return;
    got_first_frame = !0, Ce = !B, i("tengu_bg_attach_first_frame", {
      ms: ms,
      meaningful_ms: meaningful_ms,
      ack_ms: ack_ms,
      gesture_id: ye(n.telemetry?.gestureId),
      attempt: n.telemetry?.attempt,
      via: pe(via),
      tempo: pe(Fe),
      stale: stale,
      state: xV(we),
      cached: cached
    });
  }
  let Ve,
    promise_2 = new Promise(B => {
      Ve = B;
    }),
    X = !1,
    got_ack = !1,
    ie,
    Q = !1,
    oe,
    xt = cols_2,
    It = rows_2,
    ze = SGt(),
    Nt = () => ekt({
      legacyKitty: ve !== {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.303",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-18T20:20:57Z",
        GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
        HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "win32"
      }.VERSION
    }),
    Pn = I() === "windows" && !x4r(),
    Mn = n.holdScreenOnDisconnect && I() === "windows" ? !0 : "isRaw" in o ? Boolean(o.isRaw) : !1,
    pt = I() === "windows",
    Pe = Buffer.from(AL, "ascii"),
    xn = Buffer.from(xL, "ascii"),
    Dt = pt && B4r(),
    Ft = !1,
    ht,
    de;
  try {
    de = Zn(lK());
  } catch (error) {
    let R = n.telemetry?.interactive?.reached,
      E = typeof n.telemetry?.interactive?.marksExpected === "boolean" ? n.telemetry.interactive.marksExpected : void 0;
    return i("tengu_bg_attach_outcome", {
      outcome: c("error"),
      got_ack: !1,
      got_first_frame: !1,
      ms: Date.now() - S,
      apc_detach: !1,
      failure_class: c("connect_throw"),
      gesture_id: ye(n.telemetry?.gestureId),
      attempt: n.telemetry?.attempt,
      surface: pe(n.telemetry?.surface),
      daemon_booted: n.telemetry?.daemonBooted,
      attach_ms: R !== void 0 ? R.attachMs : E === !0 ? Math.round(performance.now() - U) : void 0,
      content_paint_ms: R !== void 0 ? Math.round(R.contentPaintMs) : void 0,
      prompt_idle_ms: R !== void 0 ? Math.round(R.promptIdleMs) : void 0,
      msgs_loaded: R?.msgsLoaded,
      msgs_in_jsonl: R?.msgsInJsonl,
      msgs_rendered_at_first_paint: R?.msgsRenderedAtFirstPaint,
      first_frame_kind: pe(R !== void 0 ? "real" : void 0),
      marks_expected: R !== void 0 ? !0 : E,
      attach_censored: R === void 0 && E === !0 ? !0 : void 0,
      via: pe(n.telemetry?.interactive?.via),
      attach_cold: n.telemetry?.interactive?.attachCold
    }), clearTimeout(be), {
      outcome: "error",
      msg: DE(d(error))
    };
  }
  de.setTimeout(1e4, () => {
    if (!got_ack) ne("error", `${uf()} did not respond \u2014 it may be stalled${Rwe("restart")}`, {
      failureClass: "ack_timeout"
    });
  });
  function ne(outcome, msg, E) {
    if (X) return;
    let {
      viaApc: viaApc,
      beforeFirstFrame: beforeFirstFrame,
      failureClass: failureClass
    } = E ?? {};
    X = !0, clearTimeout(ht), clearTimeout(be), clearTimeout(ie);
    let F = Math.round(performance.now() - U),
      x = contentPaintMs !== void 0 && promptIdleMs !== void 0 ? Math.round(Math.max(contentPaintMs, promptIdleMs)) : void 0,
      K = requireNonce !== void 0 || n.telemetry?.interactive?.marksExpected === !0,
      timed_out = P === void 0 && K && _e && x === void 0,
      attach_censored = P === void 0 && K && !timed_out && x === void 0,
      attach_ms_2 = P !== void 0 ? P.attachMs : timed_out ? Math.round(De ?? F) : attach_censored ? F : x,
      Un = P !== void 0 ? "real" : x !== void 0 ? "real" : got_first_frame ? Ce && meaningful_ms === void 0 ? "dimhint" : "unknown" : void 0;
    if (i("tengu_bg_attach_outcome", {
      outcome: c(outcome),
      got_ack: got_ack,
      got_first_frame: got_first_frame,
      ms: Date.now() - S,
      gesture_id: ye(n.telemetry?.gestureId),
      attempt: n.telemetry?.attempt,
      via: pe(n.telemetry?.interactive?.via ?? via),
      tempo: pe(Fe),
      apc_detach: viaApc === !0,
      failure_class: pe(failureClass),
      state: xV(we),
      cached: cached,
      meaningful_ms: meaningful_ms,
      input_accepted_ms: Ye,
      input_delivered_ms: Ye,
      keys_dropped: keys_dropped,
      attach_ms: attach_ms_2,
      content_paint_ms: P !== void 0 ? Math.round(P.contentPaintMs) : contentPaintMs !== void 0 ? Math.round(contentPaintMs) : void 0,
      prompt_idle_ms: P !== void 0 ? Math.round(P.promptIdleMs) : promptIdleMs !== void 0 ? Math.round(promptIdleMs) : void 0,
      timed_out: timed_out,
      attach_censored: attach_censored,
      marks_expected: P !== void 0 ? !0 : got_ack || typeof n.telemetry?.interactive?.marksExpected === "boolean" ? K : void 0,
      attach_cold: n.telemetry?.interactive?.attachCold ?? (via !== void 0 ? via === "cold" && (le ?? !0) : void 0),
      daemon_booted: n.telemetry?.daemonBooted,
      surface: pe(n.telemetry?.surface),
      first_frame_kind: pe(Un),
      msgs_loaded: P?.msgsLoaded ?? msgsLoaded,
      msgs_in_jsonl: P?.msgsInJsonl ?? msgsInJsonl,
      msgs_rendered_at_first_paint: P?.msgsRenderedAtFirstPaint ?? msgsRenderedAtFirstPaint
    }), got_ack) {
      let Wn = n.alreadyInAlt || outcome === "disconnected" && n.holdScreenOnDisconnect;
      r.write(Wnt + ze.snapshot().map(_Y).reverse().join("") + AL + (I() === "windows" ? fvn : "") + "\x1B[0m\x1B7" + Mne + "\x1B8" + (Bnt() ? A$n : "") + (Wn ? "" : Jre()));
    }
    if (!Mn) Bw(o, !1);
    if (o.removeListener("readable", _t), o.removeListener("end", Wt), "removeListener" in r) r.removeListener("resize", gt);
    clearTimeout(oe), de.destroy(), Ve({
      outcome: outcome,
      msg: msg,
      viaApc: viaApc,
      beforeFirstFrame: beforeFirstFrame
    });
  }
  function In() {
    ne("error", `${Nbn}: ${Nwt}`, {
      failureClass: "no_response"
    });
  }
  function gt() {
    if (X) return;
    if (oe === void 0) xt = cols, It = rows;
    cols = "columns" in r ? r.columns || cols_2 : cols_2, rows = "rows" in r ? r.rows || rows_2 : rows_2, clearTimeout(oe), oe = setTimeout(() => {
      if (oe = void 0, X) return;
      if (cols < xt || rows < It) r.write(gv + oS);
      Lt(), Rg({
        proto: proto,
        op: "resize",
        short: short_2,
        cols: cols,
        rows: rows,
        attachId: attachId
      });
    }, 50);
  }
  let jt = performance.now();
  function Lt() {
    let B = ze.snapshot();
    if (!B.includes(1004)) return;
    r.write(Nt() + B.map(w1).join(""));
  }
  let Ut = n.gateStdinUntilFirstFrame === !0 && "isTTY" in o && o.isTTY === !0,
    Ye,
    keys_dropped = 0,
    Nn = J6o();
  function Re(B) {
    let R = () => Nn(B.toString("latin1"));
    if (!Ut || got_first_frame) {
      if (Ye === void 0 && !R()) Ye = Date.now() - S;
      de.write(B);
    } else if (!R()) keys_dropped++;
  }
  function Dn(B) {
    if (X) return;
    let R = typeof B === "string" ? Buffer.from(B, "utf8") : B,
      E = 0;
    for (let M = 0; M < R.length; M++) {
      let y = R[M];
      if (Q) {
        if (Q = !1, M > E) Re(R.subarray(E, M));
        if (y === ln) return ne("detached");
        Re(Buffer.from([vt, y])), E = M + 1;
        continue;
      }
      if (Ut && !got_first_frame && (y === 27 && R.length === 1 || Te(R, M, or) || Te(R, M, ar))) return ne("detached", void 0, {
        beforeFirstFrame: !0
      });
      if (y === cn || He(R, M, fn) || Te(R, M, pn)) {
        if (M > E) Re(R.subarray(E, M));
        return ne("detached");
      }
      if (Pn && y === nr) {
        if (M > E) Re(R.subarray(E, M));
        Re(rr), E = M + 1;
        continue;
      }
      let L = y === vt ? 1 : He(R, M, un) || (Te(R, M, it) ? it.length : 0);
      if (L) {
        if (M > E) Re(R.subarray(E, M));
        M += L - 1, E = M + 1, Q = !0;
      }
    }
    if (E < R.length) Re(R.subarray(E));
  }
  function _t() {
    let B = performance.now();
    if (B - jt > ivn) Lt();
    jt = B;
    let R;
    while ((R = o.read()) !== null) Dn(R);
  }
  function Wt() {
    ne("detached");
  }
  let Ue = Z,
    Xe = Z,
    Me = Z,
    Ae = Z;
  function Jt(B) {
    if (!pt) return B;
    let R = Me.length > 0,
      E = R ? Buffer.concat([Me, B]) : B;
    if (R) Me = Z;
    if (Dt) {
      let q = E.lastIndexOf(Pe),
        Se = E.lastIndexOf(xn);
      if (q !== Se) Ft = q > Se;
    }
    let M = E.indexOf(Pe);
    if (M < 0) {
      let q = Ie(E, Pe);
      if (q === 0) return E;
      return Me = Buffer.from(E.subarray(E.length - q)), E.subarray(0, E.length - q);
    }
    let y = [],
      L = 0,
      F = M;
    for (;;) {
      if (F > L) y.push(E.subarray(L, F));
      if (L = F + Pe.length, F = E.indexOf(Pe, L), F < 0) break;
    }
    let x = E.subarray(L),
      K = Ie(x, Pe);
    if (K > 0) Me = Buffer.from(x.subarray(x.length - K));
    if (x.length > K) y.push(x.subarray(0, x.length - K));
    if (y.length === 0) return Z;
    if (y.length === 1) return y[0];
    return Buffer.concat(y);
  }
  function Ht(B) {
    let R = Ae.length > 0,
      E = R ? Buffer.concat([Ae, B]) : B;
    if (R) Ae = Z;
    let M = E.indexOf(Je);
    if (M < 0) {
      let x = Ie(E, Je);
      if (x === 0) return E;
      return Ae = Buffer.from(E.subarray(E.length - x)), E.subarray(0, E.length - x);
    }
    let y = [],
      L = 0,
      F = M;
    while (F >= 0) {
      let x = F + Je.length;
      if (x >= E.length) {
        if (F > L) y.push(E.subarray(L, F));
        Ae = Buffer.from(E.subarray(F)), L = E.length;
        break;
      }
      let K = E[x];
      if (K === 104 || K === 108) {
        if (F > L) y.push(E.subarray(L, F));
        L = x + 1;
      }
      F = E.indexOf(Je, Math.max(L, F + 1));
    }
    if (L < E.length) {
      let x = E.subarray(L),
        K = Ie(x, Je);
      if (K > 0) Ae = Buffer.from(x.subarray(x.length - K));
      if (x.length > K) y.push(x.subarray(0, x.length - K));
    }
    if (y.length === 0) return Z;
    if (y.length === 1) return y[0];
    return Buffer.concat(y);
  }
  let Gt = n.alreadyInAlt && !n.holdingFrame;
  function Kt(B) {
    let {
      out: out,
      meaningful: meaningful,
      renders: renders
    } = Fn(B);
    if (out.length === 0) return;
    if (!renders) {
      r.write(out);
      return;
    }
    if (Gt) Gt = !1, r.write(gv + oS);
    r.write(out), ze.feed(out.toString("latin1"), y => {
      if (y === 1004) {
        let L = Nt();
        if (L) r.write(L);
      }
    }), qe(meaningful);
  }
  let Ze = Z,
    Qe = !1,
    xe = !1,
    bt = !1;
  function qt(B) {
    let R = !1,
      E = 0;
    if (bt) {
      if (bt = !1, xe = !1, B[0] === 92) E = 1;
    }
    while (E < B.length) {
      if (xe) {
        let y = E;
        while (y < B.length && B[y] !== 27 && B[y] !== 24 && B[y] !== 26) y++;
        if (y >= B.length) return R;
        if (B[y] !== 27) {
          xe = !1, E = y + 1;
          continue;
        }
        if (y === B.length - 1) return bt = !0, R;
        if (B[y + 1] === 92) {
          xe = !1, E = y + 2;
          continue;
        }
        xe = !1, E = y;
        continue;
      }
      let M = B.indexOf(dn, E);
      if (M < 0) return !0;
      R ||= M > E, xe = !0, E = M + dn.length;
    }
    return R;
  }
  function Fn(B) {
    let R = Ze.length > 0 ? Buffer.concat([Ze, B]) : B;
    Ze = Z;
    let meaningful_2 = !1,
      M = !1,
      y = [],
      L = 0;
    for (;;) {
      let q = R.indexOf(Et, L);
      if (q < 0) break;
      if (q > L) {
        let Se = R.subarray(L, q);
        if (y.push(Se), !Qe) meaningful_2 = qt(Se) || meaningful_2;else M = !0;
      }
      Qe = !Qe, L = q + Et.length;
    }
    let F = R.subarray(L),
      x = Ie(F, Et);
    if (x > 0) Ze = Buffer.from(F.subarray(F.length - x)), F = F.subarray(0, F.length - x);
    if (F.length > 0) if (y.push(F), !Qe) meaningful_2 = qt(F) || meaningful_2;else M = !0;
    return {
      out: y.length === 0 ? Z : y.length === 1 ? y[0] : Buffer.concat(y),
      meaningful: meaningful_2,
      renders: meaningful_2 || M
    };
  }
  function Vt(B) {
    if (X) return;
    let R = requireNonce !== void 0 && P === void 0 && (contentPaintMs === void 0 || promptIdleMs === void 0),
      E = vgo(N, B, {
        requireNonce: requireNonce
      });
    N = E.carry;
    let cleaned = E.cleaned;
    if (R) for (let x of E.marks) {
      let K = performance.now() - U;
      if (x.kind === "content_paint" && contentPaintMs === void 0) contentPaintMs = K, msgsLoaded = x.msgsLoaded, msgsInJsonl = x.msgsInJsonl, msgsRenderedAtFirstPaint = x.msgsRenderedAtFirstPaint;else if (x.kind === "prompt_idle" && promptIdleMs === void 0) promptIdleMs = K;
      if (contentPaintMs !== void 0 && promptIdleMs !== void 0) {
        clearTimeout(be);
        let attachMs = Math.round(Math.max(contentPaintMs, promptIdleMs));
        if (n.telemetry?.interactive !== void 0) n.telemetry.interactive.reached = {
          attachMs: attachMs,
          contentPaintMs: contentPaintMs,
          promptIdleMs: promptIdleMs,
          msgsLoaded: msgsLoaded,
          msgsInJsonl: msgsInJsonl,
          msgsRenderedAtFirstPaint: msgsRenderedAtFirstPaint
        };
        if (n.telemetry?.gestureId !== void 0) Lwt(n.telemetry.gestureId, {
          interactiveReached: !0,
          attachMs: attachMs,
          msgsLoaded: msgsLoaded,
          msgsInJsonl: msgsInJsonl,
          msgsRenderedAtFirstPaint: msgsRenderedAtFirstPaint
        }, n.telemetry.storageV5);
      }
    }
    let y = Xe.length > 0 ? Buffer.concat([Xe, cleaned]) : cleaned,
      L = y.indexOf(sn);
    if (L >= 0) {
      let x = y.subarray(0, L);
      if (L > 0) {
        let q = Ht(Jt(x));
        if (q.length > 0) Kt(q);
      }
      Xe = Z, Me = Z, Ae = Z;
      let K = Ego(x);
      return ne("detached", K, {
        viaApc: !0,
        failureClass: tr(K)
      });
    }
    let F = Ie(y, sn);
    if (y.length > F) {
      let x = y.subarray(0, y.length - F),
        K = Ht(Jt(x));
      if (K.length > 0) Kt(K);
    }
    if (Xe = F > 0 ? Buffer.from(y.subarray(y.length - F)) : Z, Dt) clearTimeout(ht), ht = setTimeout(() => {
      if (!X && Ft) r.write(AL);
    }, lr);
  }
  return de.on("data", B => {
    if (X) return;
    if (got_ack) {
      clearTimeout(ie), Vt(B);
      return;
    }
    Ue = Buffer.concat([Ue, B]);
    let R = Ue.indexOf(10);
    if (R < 0) return;
    let E = Ue.subarray(0, R).toString("utf8"),
      M = Ue.subarray(R + 1),
      y;
    try {
      y = J(E);
    } catch (error) {
      return ne("error", `bad ack: ${d(error)}`, {
        failureClass: "bad_ack"
      });
    }
    if (typeof y !== "object" || y === null) return ne("error", "bad ack: non-object ack line", {
      failureClass: "bad_ack"
    });
    if (!y.ok) return ne("error", `${y.code}: ${y.error}`, {
      failureClass: er(y.code)
    });
    if (got_ack = !0, de.setTimeout(0), !n.holdingFrame && M.length === 0) ie = setTimeout(In, Qn);
    if (ack_ms = Date.now() - S, via = y.op === "attach" ? pkt(y.via) : void 0, le = y.op === "attach" && typeof y.booting === "boolean" ? y.booting : void 0, requireNonce = y.op === "attach" && typeof y.imarkNonce === "string" ? y.imarkNonce : void 0, n.telemetry?.gestureId !== void 0) Lwt(n.telemetry.gestureId, {
      marksExpected: requireNonce !== void 0,
      daemonBooted: typeof n.telemetry.daemonBooted === "boolean" ? n.telemetry.daemonBooted : void 0,
      attachCold: via !== void 0 ? via === "cold" && (le ?? !0) : void 0,
      via: via
    }, n.telemetry.storageV5);
    if (n.telemetry?.interactive !== void 0) {
      if (n.telemetry.interactive.marksExpected = n.telemetry.interactive.marksExpected === !0 || requireNonce !== void 0, via !== void 0 && n.telemetry.interactive.reached === void 0) n.telemetry.interactive.attachCold = via === "cold" && (le ?? !0), n.telemetry.interactive.via = via;
    }
    if (Fe = y.op === "attach" ? y.tempo : void 0, we = y.op === "attach" ? y.state : void 0, stale = y.op === "attach" ? y.stale : void 0, ve = y.op === "attach" ? y.workerCliVersion : void 0, cached = y.op === "attach" ? y.cached : void 0, a.TMUX && !CF().tmuxRgbApplied) CF().tmuxRgbApplied = !0, lt("tmux", ["set", "-as", "terminal-features", ",*:RGB"]);
    let F = ((y.op === "attach" ? y.decModes : void 0) ?? []).map(w1).join("");
    if (ze.feed(F), "ref" in o) o.ref();
    Bw(o, !0);
    let legacyKitty = ve !== {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.303",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-18T20:20:57Z",
      GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION;
    if (r.write(n.alreadyInAlt ? xL + ekt({
      legacyKitty: legacyKitty
    }) + F : fVt({
      legacyKitty: legacyKitty
    }) + F + (pt ? xL : "") + `
  \x1B[2mAttaching\u2026\x1B[0m
`), "on" in r) r.on("resize", gt);
    if ("columns" in r && (r.columns || cols_2) !== cols_2 || "rows" in r && (r.rows || rows_2) !== rows_2) gt();
    if (o.on("readable", _t), "resume" in o && "pause" in o) o.resume(), o.pause();
    if (o.once("end", Wt), _t(), M.length) Vt(M);
  }), de.on("error", B => ne("error", DE(d(B)), {
    failureClass: "socket_error"
  })), de.once("close", () => {
    if (!X) ne(got_ack ? "disconnected" : "error", "control socket closed", {
      failureClass: "socket_closed"
    });
  }), de.once("connect", () => {
    de.write(_({
      proto: proto,
      op: "attach",
      short: short_2,
      auth: auth,
      cols: cols_2,
      rows: rows_2,
      attachId: attachId,
      caps: {
        ...ur(),
        ...(n.sessionTabs !== void 0 && {
          sessionTabs: n.sessionTabs,
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
function ur() {
  return {
    imark: !0,
    terminal: a.terminal,
    mux: a.TMUX ? "tmux" : process.env.ZELLIJ != null ? "zellij" : a.STY ? "screen" : null,
    ssh: a.isSSH(),
    wheelFlood: j4r(),
    hyperlinks: Ev(),
    progressReporting: Bnt(),
    printsUnknownSequences: I6(),
    wtSession: !!a.WT_SESSION,
    isVscodeTerm: a.TERM_PROGRAM === "vscode",
    keyDialect: pEt(a.TERM),
    browser: a.BROWSER ?? null,
    colorLevel: he.level,
    syncOutput: k9o(),
    editor: a.VISUAL || a.EDITOR || null,
    systemTheme: qss(),
    ...(a.TMUX && {
      tmuxSocket: nt(a.TMUX, ",")
    })
  };
}
import { randomUUID as vr } from "crypto";
import { lstat as Rr, readdir as Ar, realpath as Ke, rm as Tr, unlink as Cr, writeFile as Or } from "fs/promises";
import { isAbsolute as mt, join as Mt, normalize as Br, relative as Pr } from "path";
import { readFile as fr, unlink as mr } from "fs/promises";
import { join as pr } from "path";
var hr = 250,
  gr = 604800000,
  _r = 256,
  br = f(() => St({
    writtenAtMs: mn().optional(),
    shells: sr(St({
      pid: mn().int().positive(),
      procStart: ge().optional(),
      startTimeTicks: mn().int().optional()
    })).catch([])
  }));
async function _n(e, n = {}) {
  let o = pr(e, "adopt.json"),
    r = `${o}.reap.${process.pid}`,
    u = Date.now() + (n.waitMs ?? 0);
  for (;;) try {
    await ns(o, r);
    break;
  } catch (error) {
    if (Date.now() >= u) {
      if (!G(error)) t(`[adopt] reap claim failed: ${error}`, {
        level: "warn"
      });
      return {
        found: !1,
        reaped: 0
      };
    }
    await Y(hr);
  }
  try {
    let s = br().safeParse(J(await fr(r, "utf-8")));
    if (!s.success) return {
      found: !0,
      reaped: 0
    };
    let {
        writtenAtMs: writtenAtMs,
        shells: shells
      } = s.data,
      w = writtenAtMs !== void 0 ? Date.now() - writtenAtMs : void 0;
    if (w !== void 0 && w > gr || shells.length > _r) return t(`[adopt] reap skipped: implausible payload (age ${w ?? "?"}ms, ${shells.length} entries)`, {
      level: "warn"
    }), {
      found: !0,
      reaped: 0
    };
    if (await Promise.all(shells.map(item => knt(item.pid, item.startTimeTicks, item.procStart))), shells.length > 0) i("tengu_adopt_exit_reap", {
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
    await mr(r).catch(() => {});
  }
}
var wr = 7,
  kr = {
    head: 40,
    tail: 20
  },
  Sr = {
    head: 50,
    tail: 30
  },
  yn = 1000,
  maxBuffer = 1e6;
async function dt(e) {
  let [n, o] = await Promise.all([Rt(e, ["log", "--no-show-signature", `--max-count=${yn}`, "--format=%H%x00%s", "HEAD", "--not", "--remotes"]), Rt(e, ["symbolic-ref", "-q", "--short", "HEAD"])]);
  if (n.code !== 0) return;
  let r = n.stdout.split(`
`).map(item => item.split("\x00")).filter(item => item.length === 2 && item[0] !== ""),
    u = r[0];
  if (u === void 0 || !$2(u[0])) return;
  return {
    branch: o.code === 0 ? Gl(o.stdout, Sr) || null : null,
    count: r.length,
    headSha: u[0],
    shortSha: u[0].slice(0, wr),
    subject: Gl(u[1], kr)
  };
}
function lVr(e) {
  return `${e.count}${wn(e)} unpushed ${O(e.count, "commit")} on ${e.branch ?? "detached HEAD"}`;
}
function X6o(e) {
  let n = e.count > 1 ? ` and ${e.count - 1}${wn(e)} more` : "";
  return `${lVr(e)}: ${[e.shortSha, e.subject].filter(Boolean).join(" ")}${n}`;
}
async function At(e, n) {
  if (!$2(n)) return !1;
  let o = await Rt(e, ["rev-parse", "HEAD"]);
  return o.code === 0 && o.stdout.trim() === n;
}
async function Rt(cwd, n) {
  return ct(Ot(), [...kn, ...n], {
    cwd: cwd,
    env: ks(),
    maxBuffer: maxBuffer
  });
}
function wn(e) {
  return e.count >= yn ? "+" : "";
}
var fGt = "recap.trigger";
function Mr(e, n) {
  if (W() && n !== void 0) {
    let o = Be.job(e, [fGt]);
    if (Gm(o) === void 0) {
      n.write(o, "", {
        publishDiscipline: "inPlace"
      }).catch(() => {});
      return;
    }
  }
  Or(Mt(io(e), fGt), "").catch(() => {});
}
async function ECe(short_3, n, o, r) {
  if (n?.backend === "peer") return {
    confirmed: !0
  };
  let handoff = o?.handoff ? !0 : void 0,
    evict = o?.evict ? !0 : void 0,
    h = o?.knownGone ? {
      ok: !1,
      code: "ENOJOB",
      error: "job already gone (caller-verified)"
    } : await Rg({
      proto: proto,
      op: "kill",
      short: short_3,
      handoff: handoff,
      evict: evict
    });
  for (let A = 0; !h.ok && h.code === "ESTARTING" && A < 10; A++) await Y(200), h = await Rg({
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
    let A = await uer(short_3, r);
    if (A.anyMatch && h.code === "ENOJOB") return {
      confirmed: A.confirmed
    };
    let w = !1,
      noWorkerFound = !1;
    if (h.code === "ENOCONN" || h.code === "ETIMEOUT") {
      let confirmed;
      if (A.anyMatch) confirmed = A.confirmed;else {
        let v = await lN({
            silent: !0
          }, r),
          D = v.workers[short_3];
        if (D !== void 0) {
          let U = await U$n(D.pid, D.procStart);
          if (U === "zombie") {
            if (D.procStart !== void 0 && (await Uh(D.pid, D.procStart)) === !0) {
              try {
                process.kill(-D.pid, "SIGKILL");
              } catch {
                try {
                  process.kill(D.pid, "SIGKILL");
                } catch {}
              }
              confirmed = !0;
            } else confirmed = !1;
          } else confirmed = U !== "live";
        } else {
          let U = h.code === "ENOCONN" && !A.scanFailed && !v.parseFailed;
          w = U && n?.state !== void 0 && Ta({
            state: n.state,
            tempo: n.tempo
          }), confirmed = w, noWorkerFound = U && !confirmed;
        }
      }
      if (evict && confirmed && h.code === "ENOCONN" && !w) await UZ(v => {
        delete v.workers[short_3];
      }, r).catch(v => l(v));
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
async function uer(e, n) {
  let ctrlSent = await Q2e(LE(e)),
    anyMatch = !1,
    confirmed_2 = !0,
    scanFailed = !1,
    h = await Oee(n).catch(() => (scanFailed = !0, []));
  for (let A of h) if (A.kind === "bg" && (A.jobId === e || A.sessionId?.startsWith(e))) {
    if (anyMatch = !0, !ctrlSent) try {
      process.kill(A.pid, "SIGTERM");
    } catch {}
    let w = Date.now() + 3000,
      T = !0;
    while ((T = await K7t(A.pid, A.procStart)) && Date.now() < w) await Y(100);
    if (T) {
      i("tengu_bg_killjob_ctrl_fallback", {
        ctrlSent: ctrlSent
      });
      try {
        process.kill(A.pid, "SIGTERM");
      } catch {}
      let S = Date.now() + 500;
      while ((T = await K7t(A.pid, A.procStart)) && Date.now() < S) await Y(100);
    }
    if (T) confirmed_2 = !1;
  }
  return {
    confirmed: confirmed_2,
    anyMatch: anyMatch,
    scanFailed: scanFailed
  };
}
async function mGt(e) {
  let n = await Rg({
    proto: proto,
    op: "list"
  });
  if (n.ok && n.op === "list") return {
    shorts: new Set(n.jobs.map(item => item.short)),
    records: n.jobs.filter(item => !item.outcome)
  };
  let o = await lN({
      silent: !0
    }, e),
    r = Object.entries(o.workers),
    u = await Promise.all(r.map(([, s]) => K7t(s.pid, s.procStart)));
  return {
    shorts: new Set(r.filter((item, index) => u[index]).map(([s]) => s)),
    records: []
  };
}
async function $bn(short_4, n) {
  let o = await Rg({
    proto: proto,
    op: "has",
    short: short_4
  });
  if (o.ok && o.op === "has") return {
    alive: o.alive,
    present: o.present ?? o.alive,
    daemonUp: !0
  };
  let r = (await lN({
      silent: !0
    }, n)).workers[short_4],
    u = r !== void 0 && (await K7t(r.pid, r.procStart));
  return {
    alive: u,
    present: u,
    daemonUp: !1
  };
}
async function dVr(short_5) {
  let n = await Rg({
    proto: proto,
    op: "has",
    short: short_5
  });
  return n.ok && n.op === "has" ? n.present ?? n.alive : !1;
}
function ktt(e, n) {
  let o = e.tempo === "blocked" && e.state !== "blocked" && e.block === void 0 && yys(e.needs);
  return {
    ...e,
    ...(Vdt(e) && {
      state: "working"
    }),
    detail: su(ps(n).replace(/\s+/g, " ").trim(), Yf),
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
var err_2 = "That session isn't running \u2014 respawn it first",
  err = "Can't send \u2014 that session is running in another terminal";
function Rn() {
  return `Couldn't reach the ${uf()} \u2014 it may be restarting. Press Enter to retry`;
}
function cVr(e) {
  return e.startsWith(Rn());
}
var Tt = " \u2014 your message was saved and will be sent when you next restart this session";
async function Sn(e, n, o) {
  qp(e);
  let r = await Zr(e, o);
  if (!r || lLe(n, r)) return !1;
  let u = Ttt(r);
  if (u !== void 0) return u === n;
  return xre(e, r, n, o);
}
async function Ett(short_6, text, o, r, u, s, {
  nextTurn = !1
} = {}) {
  let A = Date.now(),
    w = (N, P, _e) => {
      i("tengu_bg_reply_outcome", {
        ms: Date.now() - A,
        outcome: c(N),
        error_code: pe(P),
        errno: pS(_e)
      });
    };
  if (o?.backend === "peer") {
    if (!o.sock) return g("job_reply"), w("ok"), {
      err: err
    };
    try {
      return await Srn(o.sock, text, s), g("job_reply"), w("ok"), null;
    } catch (error) {
      return m("job_reply", "job_reply_peer_send_failed"), w("bad", "job_reply_peer_send_failed"), {
        err: `Couldn't send to that session \u2014 ${d(error)}`
      };
    }
  }
  let T = io(short_6),
    S = r ?? (await Zr(T, s)),
    auth_2 = await pOe(),
    D = !1,
    U = !1,
    j = async () => {
      if (nextTurn) {
        let P = await Rg({
          proto: proto,
          op: "ping"
        });
        if (!P.ok) return P;
        if (P.op !== "ping" || P.version !== {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.303",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-10-18T20:20:57Z",
          GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
          HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          DD_SOURCEMAP_GROUP: "win32"
        }.VERSION) return U = !0, {
          ok: !1,
          error: "its supervisor runs a different Claude Code build",
          code: "ESKEW"
        };
      }
      let N = await Rg({
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
    C = await j(),
    z = async () => {
      let N = 10;
      for (let P = 0; !C.ok && (C.code === "ESTARTING" || C.code === "ENOREPLY" || C.code === "ERESPAWNING") && P < N; P++) {
        if (C.code === "ERESPAWNING") N = 60;
        await Y(200), C = await j();
      }
    };
  if (await z(), !C.ok && C.code === "EAUTH") {
    let N = await pOe();
    if (N && N !== auth_2) auth_2 = N, C = await j();
  }
  let ensure_failed = !1;
  if (!C.ok && (C.code === "ENOCONN" || C.code === "ETIMEOUT") && !(nextTurn && D)) {
    let N = await sY({
      forceTransient: !0
    }, s);
    if (ensure_failed = !N.ok, N.ok) auth_2 = (await pOe()) ?? auth_2, C = await j(), await z();
  }
  if (C.ok) {
    if (S && !r) {
      qp(T);
      let N = (await Zr(T, s)) ?? S,
        P = ktt(N, text);
      if (P.queuedPrompt === text) P.queuedPrompt = void 0;
      $l(T, P, s).catch(hl);
    }
    if (!r) i("tengu_bg_agent_action", {
      action: b("reply"),
      wasTerminal: S ? kC(S.state) : !1,
      daemon: !0,
      jobSessionId: ye(o?.sessionId ?? S?.sessionId),
      ...u?.()
    }), g("job_reply"), w("ok");
    return null;
  }
  if (C.code === "ESKEW") {
    let N = U ? "job_reply_daemon_skewed" : "job_reply_worker_skewed";
    return m("job_reply", N), w("bad", N), {
      err: C.error,
      code: C.code
    };
  }
  if (C.code === "ENOJOB") {
    if (!r) p("job_reply", "job_reply_not_running"), w("sad", "job_reply_not_running");
    return {
      err: err_2,
      code: C.code
    };
  }
  if (C.code === "ENOCONN" || C.code === "ETIMEOUT") {
    if (!r && C.code === "ENOCONN") {
      let P = (await lN({
        silent: !0
      }, s)).workers[S?.daemonShort ?? short_6];
      if (P && !(await K7t(P.pid, P.procStart))) return p("job_reply", "job_reply_not_running"), w("sad", "job_reply_not_running"), {
        err: err_2,
        code: "ENOJOB"
      };
    }
    if (!r) m("job_reply", "job_reply_daemon_unreachable", {
      errno: c(C.code),
      ensure_failed: ensure_failed
    }), w("bad", "job_reply_daemon_unreachable");
    let queued = !r && C.code === "ENOCONN" && !C.connected && !D && (await Sn(T, text, s));
    if (nextTurn && !D) return {
      err: "its supervisor did not answer" + (queued ? Tt : ""),
      code: "EUNREACHABLE",
      queued: queued
    };
    return {
      err: Rn() + (queued ? Tt : ""),
      code: C.code,
      queued: queued
    };
  }
  if (!r) m("job_reply", "job_reply_send_failed"), w("bad", "job_reply_send_failed", C.code);
  let queued_2 = !r && !D && (await Sn(T, text, s));
  return {
    err: `Couldn't send your message \u2014 ${C.error}` + (queued_2 ? Tt : ""),
    code: C.code,
    queued: queued_2
  };
}
async function En(e, n, o) {
  let r = await Z7t(io(e), o);
  if (r === null) return g("job_attach"), oY(n, "detached"), {
    kind: "error",
    ended: !0,
    msg: "That session was removed \u2014 back to the list"
  };
  if (r.state === "done" || r.state === "stopped" || r.state === "blocked") return g("job_attach"), oY(n, "detached"), {
    kind: "error",
    ended: !0,
    msg: r.state === "stopped" ? "That session was stopped \u2014 back to the list" : r.state === "blocked" ? "That session is blocked \u2014 back to the list" : "That session ended \u2014 back to the list"
  };
  if (r.state === "failed") {
    if (r.detail === tUe || r.detail === DIt) return m("job_attach", "job_attach_host_dead"), oY(n, "error"), {
      kind: "error",
      msg: r.detail === DIt ? d3e : `${l3e} \u2014 press Enter to restart it`
    };
    let u = r.detail.includes("before init");
    return p("job_attach", u ? "job_attach_pre_init_crash" : "job_attach_crash_loop"), {
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
async function uVr(e, n = {}) {
  return await xr(e, n, {
    overStream: !1,
    onlyToRetry: !1
  });
}
async function xr(e, n, o) {
  Mr(e, n.storageV5), t("[PERF:bg-attach-start]"), Hnt();
  let r = OIt,
    sessionTabs = void 0,
    s = PIt,
    h = {
      holdScreenOnDisconnect: !0,
      alreadyInAlt: n.alreadyInAlt,
      gateStdinUntilFirstFrame: n.gateStdinUntilFirstFrame,
      sessionTabs: sessionTabs,
      tabsLanding: n.tabsLanding
    },
    A = {
      ...h,
      holdingFrame: !0,
      gateStdinUntilFirstFrame: !1,
      tabsLanding: void 0
    },
    w = n.gesture ?? {
      gestureId: vr(),
      attempt: 0,
      interactive: {}
    },
    T = !n.alreadyInAlt,
    S = await Ge(e, o, {
      ...h,
      telemetry: {
        gestureId: w.gestureId,
        attempt: ++w.attempt,
        t0: w.t0,
        surface: w.surface,
        daemonBooted: w.daemonBooted,
        interactive: w.interactive,
        storageV5: n.storageV5
      }
    }),
    v;
  if (S.outcome === "error" && S.msg && r.test(S.msg)) {
    if (v = await sY(Ct, n.storageV5), v.ok) S = await Ge(e, o, {
      ...h,
      telemetry: {
        gestureId: w.gestureId,
        attempt: ++w.attempt,
        t0: w.t0,
        surface: w.surface,
        daemonBooted: w.daemonBooted,
        interactive: w.interactive,
        storageV5: n.storageV5
      }
    });
  }
  for (let U = 0; S.msg && s.test(S.msg) && U < 20; U++) await Y(500), S = await Ge(e, o, {
    ...h,
    telemetry: {
      gestureId: w.gestureId,
      attempt: ++w.attempt,
      t0: w.t0,
      surface: w.surface,
      daemonBooted: w.daemonBooted,
      interactive: w.interactive,
      storageV5: n.storageV5
    }
  });
  let D = async () => {
    if (T) process.stdout.write(Jre());
    let U = await En(e, w, n.storageV5);
    if (U) return U;
    return p("job_attach", "job_attach_crashed"), {
      kind: "error",
      orphaned: !0,
      msg: "Session crashed \u2014 press Enter to respawn"
    };
  };
  while (S.outcome === "disconnected") {
    if (bn()) {
      if (T) process.stdout.write(Jre());
      return Bt("loop_head", n);
    }
    let U = " Reconnecting\u2026 ",
      j = Math.max(1, (process.stdout.columns ?? 80) - U.length);
    process.stdout.write(`\x1B7${$W(1, j)}\x1B[2;7m${U}\x1B[0m\x1B8`);
    let C;
    if (process.stdin.isTTY) {
      let V = "isRaw" in process.stdin ? Boolean(process.stdin.isRaw) : !1;
      if (!V) Bw(process.stdin, !0);
      let N = gn(process.stdin);
      try {
        C = await Promise.race([sY(Ct, n.storageV5), N.promise.then(() => "detach")]);
      } finally {
        if (N.cancel(), !V) Bw(process.stdin, !1);
      }
    } else C = await sY(Ct, n.storageV5);
    if (C === "detach") {
      if (T) process.stdout.write(Jre());
      return t("[PERF:bg-attach-end]"), g("job_attach"), oY(w, "detached"), {
        kind: "detached"
      };
    }
    let z = C;
    if (!z.ok) {
      if (T) process.stdout.write(Jre());
      if (z.stoodDown) return Bt("reconnect", n, z);
      return m("job_attach", `job_attach_daemon_start_failed_${z.causeCode}`), oY(w, "error"), {
        kind: "error",
        msg: `Couldn't restart the ${uf()} \u2014 ${z.reason}`
      };
    }
    let ee = Hnt();
    if (ee && Hbn(ee)) {
      if (T) process.stdout.write(Jre());
      return t("[PERF:bg-attach-end]"), g("job_attach"), oY(w, "detached"), {
        kind: "detached"
      };
    }
    if (await Fbn(e)) return t(`[bg-attach] worker gone on reconnect probe short=${e} \u2014 settled while attached`), D();
    S = await Ge(e, o, {
      ...A,
      telemetry: {
        gestureId: w.gestureId,
        attempt: ++w.attempt,
        t0: w.t0,
        surface: w.surface,
        daemonBooted: w.daemonBooted,
        interactive: w.interactive,
        storageV5: n.storageV5
      }
    });
    for (let V = 0; S.msg && s.test(S.msg) && V < 10; V++) await Y(200), S = await Ge(e, o, {
      ...A,
      telemetry: {
        gestureId: w.gestureId,
        attempt: ++w.attempt,
        t0: w.t0,
        surface: w.surface,
        daemonBooted: w.daemonBooted,
        interactive: w.interactive,
        storageV5: n.storageV5
      }
    });
    if (S.msg?.includes("ENOJOB")) return t(`[bg-attach] ENOJOB on reconnect short=${e} \u2014 daemon has no handle (or it's killing/settled)`), D();
    if (S.outcome === "error" && T) process.stdout.write(Jre());
  }
  if (S.outcome === "detached" && S.msg && !o.onlyToRetry && (LIt.test(S.msg) || s.test(S.msg))) {
    if (T) process.stdout.write(Jre());
    return m("job_attach", "job_attach_stalled"), {
      kind: "error",
      msg: S.msg.replace(/^E(STALLED|RESPAWNING|STARTING):\s*/, "")
    };
  }
  if (S.outcome === "error") {
    if (S.msg?.startsWith(`${MIt}:`)) {
      m("job_attach", "job_attach_host_dead");
      let j = await Zr(io(e), n.storageV5).catch(() => null),
        C = S.msg.slice(MIt.length + 1).trim();
      return {
        kind: "error",
        msg: j !== null && Iv(j) ? C : `${C} \u2014 press Enter to restart it`
      };
    }
    if (S.msg?.startsWith(`${Nbn}:`)) {
      m("job_attach", "job_attach_no_response");
      let j = await Zr(io(e), n.storageV5).catch(() => null);
      if (j !== null && Iv(j)) return {
        kind: "error",
        msg: `${Nwt} \u2014 it runs a shell command, which is never run again for you; ctrl+x stops it`
      };
      return {
        kind: "error",
        notResponding: !0,
        msg: `${Nwt} \u2014 press Enter again to restart it (the conversation is saved)`
      };
    }
    if (S.msg?.includes("ENOJOB")) {
      t(`[bg-attach] ENOJOB on first attach short=${e} \u2014 daemon has no handle (or it's killing/settled)`);
      let j = await En(e, void 0, n.storageV5);
      if (j) return j;
      return p("job_attach", "job_attach_orphaned"), {
        kind: "error",
        orphaned: !0,
        msg: `${Fpe()} lost track of this job \u2014 press Enter to respawn it`
      };
    }
    if (v && !v.ok) {
      if (v.stoodDown) return Bt("first_attach", n, v);
      return m("job_attach", `job_attach_daemon_start_failed_${v.causeCode}`), oY(w, "error"), {
        kind: "error",
        msg: `Couldn't start the ${uf()} \u2014 ${v.reason}`
      };
    }
    let msg_2 = S.msg && s.test(S.msg) ? `${Fpe()} is still starting \u2014 try again in a moment` : S.msg && r.test(S.msg) ? `${Fpe()} didn't respond after starting \u2014 try again in a moment` : S.msg ? `Couldn't attach \u2014 ${S.msg}` : "Couldn't attach to that session";
    return m("job_attach", "job_attach_failed"), {
      kind: "error",
      msg: msg_2
    };
  }
  if (t("[PERF:bg-attach-end]"), g("job_attach"), S.msg && c3e.test(S.msg)) return {
    kind: "detached",
    msg: S.msg.replace(c3e, "")
  };
  return S.beforeFirstFrame ? {
    kind: "detached",
    beforeFirstFrame: !0
  } : {
    kind: "detached"
  };
}
var Ir = "Background sessions still running will stop in about a minute. Run 'claude agents' to keep them.";
async function Bt(e, n, o) {
  let r = I(),
    [u, service_restart] = o ? [void 0, o.viaService === !0 && r !== "macos"] : await Promise.all([Rg({
      proto: proto,
      op: "ping"
    }, {
      timeoutMs: 300
    }), e3o()]),
    daemon_up = u !== void 0 && (u.ok || u.code === "ETIMEOUT"),
    A = !daemon_up && !service_restart && r !== "windows" && process.stdout.isTTY ? `${Ir}
` : "";
  if (t(`[bg-attach] held: this process is exiting (${e})`), i("tengu_bg_attach_held_at_exit", {
    loop_head: e === "loop_head",
    first_attach: e === "first_attach",
    daemon_up: daemon_up,
    service_restart: service_restart,
    notice: A !== ""
  }), n.alreadyInAlt) n.onExitNotice?.(A);else if (A) process.stdout.write(A);
  return vu();
}
var Tn = 32,
  Nr = {
    head: 50,
    tail: 30
  },
  Dr = {
    head: 60,
    tail: 100
  },
  regExp = new RegExp(`^[0-9a-f]{${Tn}}$`);
function Fr(e) {
  return st(e).slice(0, Tn);
}
async function zQ(e, n = {}, storageV5) {
  let r = await Zr(io(e), storageV5),
    u = r?.worktreePath ? await Oee(storageV5).catch(() => []) : [],
    s = new Set();
  for (let v of u) if (v.kind === "bg" && (v.jobId === e || v.sessionId?.startsWith(e))) s.add(v.pid);
  let h = await ECe(e, r ?? void 0, {
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
      z = "present",
      ee = !1,
      keptErrorSummary,
      keptUnpushed,
      P,
      {
        dirty: dirty,
        trackedChanges: trackedChanges,
        gitError: gitError,
        submoduleWork: submoduleWork
      } = await KHe(worktreePath, void 0),
      te = rNn(worktreePath, r.originCwd) ?? void 0,
      H = await Ke(worktreePath).catch(() => worktreePath),
      worktreeDigest = Fr(H);
    T = n.discardUnpushed !== void 0 && !gitError && n.discardUnpushed.worktreeDigest === worktreeDigest && (await At(H, n.discardUnpushed.headSha));
    let Fe = !gitError && te ? await USe(te).catch(() => null) : null,
      we,
      je = !1;
    for (let [re, ie] of (Fe ?? []).entries()) if ((await Ke(ie.worktreePath).catch(() => ie.worktreePath)) === H) {
      we = ie, je = re > 0 && !ie.prunable;
      break;
    }
    let ve = Uyr(H),
      Le = te !== void 0 && ve !== null && (await Ke(ve).catch(() => ve)) === (await Ke(te).catch(() => te)),
      ae = je && Le ? submoduleWork?.kind === "unverifiable" ? "submodule" : trackedChanges ? "tracked_changes" : void 0 : te !== void 0 && (await iNn(H, te)) ? void 0 : "not_registered",
      forceRemoveRequested = n.forceRemoveWorktree !== void 0 && n.forceRemoveWorktree === worktreeDigest,
      fe = forceRemoveRequested && ae === void 0 && aNn(H),
      qe = fe ? "job_delete_force_remove" : n.force === !0 || T ? "job_delete_force" : "job_delete",
      Ve = HXt(qe),
      Oe = LXt(we?.lockReason),
      X;
    if ((X = await jr(e, H, worktreePath, storageV5)) !== null) keptReason = "in_use", keptErrorSummary = X.verified && Z0.test(X.jobId) ? X.jobId : void 0, t(`deleteJob: ${worktreePath} is claimed by running job ${X.jobId}'s state.json (${X.verified ? "verified" : "unverifiable claim"}) \u2014 not ours to remove`, {
      level: "warn"
    });else if (((ee = (await Vfn(worktreePath)) === null) || T || fe) && (z = await BW(worktreePath)) !== "gone" && (C = z === "unreadable" ? "unreadable" : await Pt(e, H, worktreePath, {
      includeUnsettled: T || fe
    }, storageV5)) !== null) {
      if (C === "claimed" && !ee && T) keptReason = "unpushed_shared", keptUnpushed = await dt(worktreePath).catch(() => {
        return;
      });else keptReason = C === "claimed" ? "shared_record" : "records_unreadable";
      t(C === "claimed" ? `deleteJob: ${worktreePath} is also recorded by another settled job's state.json \u2014 not removing another session's output` : `deleteJob: could not verify ${worktreePath} against sibling records \u2014 refusing until records are readable`, {
        level: "warn"
      });
    } else if (!(await JYe(we?.lockReason)) && !(Oe !== null && s.has(Oe))) keptReason = "live_lock", keptErrorSummary = Oe !== null ? `pid ${Oe}` : void 0, t(`deleteJob: ${worktreePath} is locked by a live Claude Code process, or with a reason we did not write (${we?.lockReason}) \u2014 not ours to remove`, {
      level: "warn"
    });else if ((P = await Lr(u, e, s, H, worktreePath)) !== void 0 && (await BW(worktreePath)) !== "gone") keptReason = "occupied", keptErrorSummary = P.pid === process.pid ? `${typeof P.parkedJobId === "string" && Z0.test(P.parkedJobId) ? `session ${P.parkedJobId},` : "a session"} moved to the background from this window, pid ${P.pid}` : P.kind === "bg" && typeof P.jobId === "string" && Z0.test(P.jobId) ? `background session ${P.jobId}, pid ${P.pid}` : `pid ${P.pid}, ${P.kind}`, t(`deleteJob: ${worktreePath} is the working directory of a live session (pid ${P.pid}, ${P.kind}) \u2014 not ours to remove`, {
      level: "warn"
    });else if (dirty && !gitError && !Ve) keptReason = "dirty", t(`deleteJob: worktree has uncommitted changes, kept ${worktreePath}`, {
      level: "warn"
    });else if (!gitError && te && !T && !(await Byr(worktreePath, await $Xt(te), {
      primaryCheckoutVouches: !0
    }))) {
      if ((await Pt(e, H, worktreePath, {
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
      let re = rNn(worktreePath, r.originCwd) ?? void 0,
        ie = (r.originCwd ? yr(r.originCwd) : null) ?? void 0,
        Q = await xse(worktreePath, r.worktreeBranch, re, r.worktreeHookBased, qe, H, ie, {
          storageV5: storageV5,
          forceRemoveRequested: forceRemoveRequested
        }).catch(oe => (t(`deleteJob: removeAgentWorktree threw for ${worktreePath}: ${d(oe)}`, {
          level: "error"
        }), {
          outcome: "failed",
          errorSummary: `the removal failed unexpectedly (${Gl(d(oe), Dr)})`
        }));
      if (Q.outcome === "failed") {
        if (keptReason = Q.needsForce ? "unverified" : Q.errorSummary === e6e ? "identity_changed" : "remove_failed", keptErrorSummary = Q.needsForce ? void 0 : Q.errorSummary, Q.forceRemovable !== void 0 && aNn(H)) if (ae !== void 0) forceRemoveWithheld = ae;else if ((await Pt(e, H, worktreePath, {
          includeUnsettled: !1
        }, storageV5)) === "claimed") forceRemoveWithheld = "shared_record";else cause = Q.forceRemovable;
      } else if (Q.outcome === "left_in_place") leftWorktreeDir = Gl(worktreePath);else if (Q.forcedDirectoryRemoval) {
        let {
          keptBranch: keptBranch
        } = Q.forcedDirectoryRemoval;
        forcedWorktreeRemoval = {
          worktree: Gl(H),
          ...(keptBranch !== void 0 && {
            keptBranch: Gl(keptBranch, Nr)
          })
        };
      }
    }
    if (keptReason) {
      if (!n.internal) p("job_delete", `worktree_kept_${keptReason}`, {
        had_worktree: !0
      });
      return {
        removed: !1,
        keptWorktree: Gl(H),
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
        })
      };
    }
  }
  let S = r?.fan?.some(v => v.kind === "shell" && v.doneAt === void 0) ?? !1;
  await _n(io(e), {
    waitMs: S ? 4000 : 0
  });
  try {
    await Tr(io(e), {
      recursive: !0,
      force: !0
    });
  } catch (v) {
    if (qp(io(e)), t(`deleteJob: failed to remove job dir for ${e}: ${d(v)}`, {
      level: "warn"
    }), !n.internal) m("job_delete", "jobdir_rm_failed", {
      had_worktree: Boolean(r?.worktreePath)
    });
    return {
      removed: !1,
      error: `couldn't remove the session's state directory (${zr(d(v))})`,
      errorCode: "jobdir_rm_failed"
    };
  }
  if (W() && storageV5 !== void 0 && Gm(_er(e)) === void 0) await _Gt(storageV5, e);else await Cr(Ave(e)).catch(() => {});
  if (qp(io(e)), !n.internal) if (leftWorktreeDir) p("job_delete", "worktree_left_in_place", {
    had_worktree: !0,
    discard_confirmed: T
  });else if (forcedWorktreeRemoval) p("job_delete", "worktree_force_removed", {
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
async function jr(e, n, o, r) {
  for (let u of await zR(void 0, r).catch(() => [])) {
    if (u.id === e || !u.state.worktreePath || Ta(u.state)) continue;
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
  if (!ul(e)) return "no_match";
  let r = Br(e);
  if (Ne(r, o) || Ne(r, n)) return "match";
  return mt(e) && !jn(e) && !pl(e) ? "unverifiable" : "no_match";
}
function Ne(e, n) {
  return ft(e) === ft(n);
}
function ft(e) {
  return pp($n(e));
}
function vn(e, n) {
  let o = Pr(ft(n), ft(e));
  return o.split(/[/\\]/, 1)[0] !== ".." && !mt(o);
}
async function Lr(e, n, o, r, u) {
  for (let s of e) {
    if (s.kind !== "interactive" && s.kind !== "bg") continue;
    if (o.has(s.pid) || s.parkedJobId === n) continue;
    if (s.pid === process.pid && s.parkedJobId === void 0) continue;
    let h = s.pid === process.pid ? ke() : s.cwd;
    if (typeof h !== "string" || !mt(h)) continue;
    if (!vn(h, r) && !vn(h, u)) continue;
    if (s.kind === "bg" && typeof s.jobId === "string" && Z0.test(s.jobId)) {
      if ((await Bn(io(s.jobId))) === "missing") continue;
    }
    return s;
  }
  return;
}
function On(e, n) {
  let o = ce();
  if (!mt(e) || ul(e) || Vi(e, o) && Vi(e, n)) return e;
  let r = w$(se(), e, {
    surfaceNetworkRaw: !0,
    anchors: [o, n]
  });
  if (r === Ey) return e;
  if (r !== void 0 && (ul(r) || Vi(r, o) && Vi(r, n))) return e;
  return Ke(e).catch(() => e);
}
async function Bn(e) {
  return Rr(Mt(e, "state.json")).then(() => "present", n => G(n) ? "missing" : "unreadable");
}
async function Pt(e, n, o, {
  includeUnsettled: includeUnsettled
}, u) {
  let s;
  try {
    s = await Ar(tD(), {
      withFileTypes: !0
    });
  } catch (error) {
    return G(error) ? null : "unreadable";
  }
  for (let h of s) {
    if (!h.isDirectory() || h.name === e) continue;
    let A = Mt(tD(), h.name),
      w = await Zr(A, u);
    if (w === null) {
      if ((await Bn(A)) === "missing") continue;
      return "unreadable";
    }
    if (!w.worktreePath || !includeUnsettled && !Ta(w)) continue;
    let T = Cn(w.worktreePath, n, o);
    if (T === "match") return "claimed";
    if (T === "unverifiable") return "unreadable";
    let S = await On(w.worktreePath, o);
    if (Ne(S, n)) return "claimed";
  }
  return null;
}
async function Ge(e, n, o) {
  return await cer(e, o);
}
export { X2e, Lwt, I$, Nbn, Nwt, oY, Fbn, Hbn, cer, lVr, X6o, fGt, ECe, uer, mGt, $bn, dVr, ktt, err_2 as aLe, err as per, cVr, Ett, uVr, regExp as fer, zQ };