// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { jn, Ae } from "B:/~BUN/root/chunk-5w2ecytn.js";
import { v, B } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Em, Xc } from "B:/~BUN/root/chunk-f71hcy5v.js";
import { qo } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { d, O } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { R4e, kS, $9, dNe, Aee, _w, nx, MV, ZO } from "B:/~BUN/root/chunk-30zp50p7.js";
import { cl } from "B:/~BUN/root/chunk-3wnb3s8p.js";
import { wt } from "B:/~BUN/root/chunk-rwwxddqq.js";
import { VP, u3, BDe } from "B:/~BUN/root/chunk-9sy3w2pa.js";
import { Or } from "B:/~BUN/root/chunk-51n463p1.js";
import { Xce, cne, eAe } from "B:/~BUN/root/chunk-83yxmdy5.js";
import { ih } from "B:/~BUN/root/chunk-bt3h0syz.js";
import { be } from "B:/~BUN/root/chunk-yv67t8hr.js";
import { lstat as T, readdir as w, unlink as p } from "fs/promises";
import { connect as b } from "net";
import { basename as S, join as P } from "path";
async function qSn(n, e) {
  if (e.launch.mode !== "exec" || !n) return null;
  try {
    let r = await cl(MV(n), 8192);
    if (r == null) return null;
    let t = JSON.parse(r);
    if (typeof t?.code !== "number") return null;
    let o = wt(typeof t.tail === "string" ? t.tail : "").replace(/\r\n?/g, `
`).split(`
`).findLast(y => y.trim())?.trim() ?? "",
      a = Xc(qo(o), Em);
    if (t.code === 0) return {
      state: "done",
      detail: a || "(no output)",
      code: 0
    };
    let signal = typeof t.signal === "string" ? t.signal : void 0;
    if (signal === "SIGINT" || signal === "SIGQUIT") return {
      state: "stopped",
      detail: "stopped",
      code: t.code
    };
    let f = signal ? `${signal} (${t.code})` : `exit ${t.code}`;
    return {
      state: "crashed",
      detail: a ? `${f} \u2014 ${a}` : f,
      signal: signal,
      code: t.code
    };
  } catch {
    return null;
  }
}
async function x7n(n = {}, e) {
  return Or("daemon_bg_reap_all", async () => {
    let r = await VP({
        silent: !0
      }, e),
      t = new Map();
    for (let [s, i] of Object.entries(r.workers)) t.set(s, {
      pid: i.pid,
      procStart: i.procStart,
      ptySock: i.ptySock,
      dispatch: i.dispatch,
      replPid: i.replPid,
      replProcStart: i.replProcStart
    });
    let o = O() === "windows",
      [a, c] = o ? [dNe(), ".pid"] : [R4e(), ".sock"],
      f = o && e ? await P7n(e) : await w(a).catch(() => []),
      y = new Set(f.filter(item => item.endsWith(c)));
    for (let s of f) {
      if (!s.endsWith(c)) {
        if (!o) {
          let l = [".err", ".late", ".exec-exit", ".err.read"].find(item => s.endsWith(`.sock${item}`));
          if (l && !y.has(s.slice(0, -l.length))) {
            let g = s.slice(0, -`.sock${l}`.length);
            if (!(l === ".exec-exit" && t.has(g))) await p(P(a, s)).catch(() => {});
          }
        }
        continue;
      }
      let i = s.slice(0, -c.length);
      if (t.has(i)) continue;
      let pid = o ? Number((e ? await I7n(e, i) : await cl(Aee(i), ayt)) ?? "0") : 0;
      t.set(i, {
        pid: pid,
        ptySock: kS(i)
      });
    }
    if (!o) {
      let s = new Set();
      for (let u of t.values()) if (u.ptySock) s.add(u.ptySock);
      let i = await w($9()).catch(() => []);
      for (let u of i) {
        if (!u.endsWith(".pty.sock")) continue;
        let ptySock = P($9(), u);
        if (s.has(ptySock)) continue;
        t.set(`spare:${u}`, {
          pid: 0,
          ptySock: ptySock
        });
      }
    }
    let reaped = 0,
      k = new Set();
    if (await Promise.all(Array.from(t.entries()).map(async ([s, i]) => {
      let u = i.dispatch ? await qSn(i.ptySock, i.dispatch) : null;
      if (i.ptySock && (await $Pe(i.ptySock, e))) reaped++;else if (i.pid) {
        let l = await O7n(i.pid, i.procStart),
          g = l !== "unverified" && (await cne(i.replPid, i.replProcStart));
        switch (l) {
          case "killed":
            reaped++;
            break;
          case "unverified":
            k.add(s);
            return;
          case "gone":
          case "foreign":
            if (g) reaped++;
            break;
          default:
        }
      }
      if (!s.startsWith("spare:")) {
        let l = {
            state: "stopped",
            detail: "stopped"
          },
          g = u?.state === "done" ? u : n.supervisorKilledAll ? l : u ?? l;
        if (await BDe(s, g.state, g.detail, void 0, e), o && e) await e.delete(Ae.daemon(["pty-pids", S(MV(i.ptySock ?? kS(s)))])).catch(() => {});else await p(MV(i.ptySock ?? kS(s))).catch(() => {});
      }
      if (o) if (e) await C(e, s);else {
        await p(Aee(s)).catch(() => {});
        let l = _w(kS(s));
        await p(l).catch(() => {}), await p(`${l}.read`).catch(() => {}), await p(nx(kS(s))).catch(() => {});
      }
    })), t.size > 0) await u3(s => {
      for (let i of t.keys()) if (!k.has(i)) delete s.workers[i];
    }, e).catch(d);
    return {
      reaped: reaped,
      kept: k.size
    };
  });
}
async function P7n(n) {
  let e = [],
    cursor;
  do {
    let t = await n.listEntries({
      namespace: "daemon",
      relPath: ["pty-pids"]
    }, {
      cursor: cursor,
      skipKeyStats: !0,
      skipScopeStats: !0
    }).catch(() => {
      return;
    });
    if (t === void 0 || !t.ok) return [];
    for (let o of t.value.items) if (o.kind === "key" && o.key.namespace === "daemon") {
      let a = o.key.relPath.at(-1);
      if (a !== void 0 && o.key.relPath.length === 2 && jn(a)) e.push(a);
    }
    cursor = t.value.cursor;
  } while (cursor !== void 0);
  return e;
}
var ayt = 4096;
async function A(n) {
  try {
    let e = await T(Aee(n));
    return !e.isFile() || e.size > ayt;
  } catch (error) {
    return !B(error);
  }
}
async function I7n(n, e) {
  if (await A(e)) return null;
  let r = await n.readText([{
    key: Ae.daemon(["pty-pids", `${e}.pid`]),
    offset: 0,
    length: ayt + 1
  }]).catch(() => {
    return;
  });
  if (r === void 0 || !r.ok) return null;
  let t = r.value.items[0];
  if (!t.found || t.totalBytes > ayt) return null;
  return t.value;
}
async function C(n, e) {
  await n.delete(Ae.daemon(["pty-pids", `${e}.pid`])).catch(() => {}), await x(n, kS(e));
}
async function x(n, e) {
  let r = _w(e);
  for (let t of [S(r), `${S(r)}.read`, S(nx(e))]) await n.delete(Ae.daemon(["pty-pids", t])).catch(() => {});
}
function $Pe(n, e) {
  return new Promise(r => {
    let t = !1,
      o = c => {
        if (t) return;
        t = !0, r(c);
      },
      a = b(n);
    a.unref(), a.setTimeout(2000, () => {
      a.destroy(), o(!1);
    }), a.on("error", () => {
      p(n).catch(() => {});
      let c = _w(n);
      if (e && O() === "windows") x(e, n).catch(() => {});else p(c).catch(() => {}), p(`${c}.read`).catch(() => {}), p(nx(n)).catch(() => {});
      o(!1);
    }), a.once("connect", () => {
      a.resume(), a.write(ZO({
        t: "kill",
        sig: "SIGTERM"
      }));
    }), a.once("close", () => o(!0));
  });
}
function U2t(n) {
  return new Promise(e => {
    let r = !1,
      t = a => {
        if (r) return;
        r = !0, e(a);
      },
      o = b(n);
    o.unref(), o.setTimeout(250, () => {
      o.destroy(), t(!1);
    }), o.on("error", () => t(!1)), o.once("connect", () => {
      o.end(ZO({
        t: "pong"
      })), t(!0);
    });
  });
}
async function O7n(n, e) {
  try {
    process.kill(n, 0);
  } catch (error) {
    if (v(error) !== "ESRCH") return "foreign";
    return Xce([-n, n], e) ? "killed" : "gone";
  }
  if (e === void 0) return "foreign";
  let r = await eAe(n);
  if (r === void 0) return "unverified";
  if (r !== e) return "foreign";
  return Xce([-n, n], e) ? "killed" : "gone";
}
var h = be(ih(), 1),
  N = ["dev", "engine"];
function j1e(n) {
  return N.find(item => n.includes(`-${item}.`)) ?? null;
}
function syt(n) {
  return j1e(n) !== null;
}
function W1e(n, e) {
  if (!n) return !1;
  let r = j1e(n),
    t = j1e(e);
  return r !== null && t !== null && r !== t;
}
function z1e(n) {
  let e;
  for (let f of n.matchAll(/-(?:dev|engine)\.(\d{8})\.t(\d{6})(?:\.|$)/g)) e = f;
  let r = e?.[1],
    t = e?.[2];
  if (!r || !t) return null;
  let o = Date.UTC(Number(r.slice(0, 4)), Number(r.slice(4, 6)) - 1, Number(r.slice(6, 8)), Number(t.slice(0, 2)), Number(t.slice(2, 4)), Number(t.slice(4, 6)));
  return new Date(o).toISOString().slice(0, 19).replace(/[-:]/g, "").replace("T", "t") === `${r}t${t}` ? o : null;
}
function _5r(n, e) {
  let r = z1e(n),
    t = z1e(e);
  return r !== null && t !== null && t < r;
}
function gJe(n, e) {
  let r = z1e(n),
    t = z1e(e);
  if (r !== null && t !== null) {
    if (j1e(n) !== j1e(e)) return !1;
    return r > t;
  }
  if (syt(n) || syt(e)) return !1;
  return h.valid(n) !== null && h.valid(e) !== null && h.gt(n, e);
}
function A7n(n, e, r) {
  if (!n) return !1;
  if (n === r) return !0;
  let t = z1e(n);
  if (t !== null) return t >= e.commitMs;
  if (syt(n)) return !1;
  return h.valid(n) !== null && h.gte(n, e.release);
}
var E = new Set([1000, 1002, 1003, 1004, 1006, 2004, 2031]),
  D = /\x1b\[\?([\d;]+)([hl])/g;
function iyt() {
  let n = new Set(),
    e = "";
  return {
    feed(r, t) {
      let o = e ? e + r : r,
        a = 0,
        c = !1;
      for (let m of o.matchAll(D)) {
        let k = m[2] === "h";
        for (let s of m[1].split(";")) {
          let i = Number(s);
          if (E.has(i) && n.has(i) !== k) {
            if (k) n.add(i), t?.(i);else n.delete(i);
            c = !0;
          }
        }
        a = m.index + m[0].length;
      }
      let f = o.slice(Math.max(a, o.length - 16)),
        y = f.lastIndexOf("\x1B");
      return e = y >= 0 && /^\x1b(\[(\?[\d;]*)?)?$/.test(f.slice(y)) ? f.slice(y) : "", c;
    },
    seed(r) {
      for (let t of r) if (E.has(t)) n.add(t);
    },
    snapshot() {
      return [...n];
    }
  };
}
export { j1e, syt, W1e, z1e, _5r, gJe, A7n, iyt, qSn, x7n, P7n, ayt, I7n, $Pe, U2t, O7n };