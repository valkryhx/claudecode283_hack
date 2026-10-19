// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Cr,
  Be
} from "B:/~BUN/root/chunk-d9rmnpx3.js";
import {
  k,
  G
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  Yf,
  su
} from "B:/~BUN/root/chunk-2wpqgvtg.js";
import {
  pn,
  ps
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  I
} from "B:/~BUN/root/chunk-je1b1drr.js";
import {
  mpt,
  LE,
  Bie,
  _8e,
  Lfe,
  OT,
  cD,
  aX,
  bH
} from "B:/~BUN/root/chunk-7qatwz9y.js";
import {
  al
} from "B:/~BUN/root/chunk-v6pbq6dm.js";
import {
  lN,
  UZ,
  h3e
} from "B:/~BUN/root/chunk-nq10jsxs.js";
import {
  po
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  zEe,
  Nge,
  Fge
} from "B:/~BUN/root/chunk-2ypz4cxh.js";
import {
  _h
} from "B:/~BUN/root/chunk-kad4nq7y.js";
import {
  ve
} from "B:/~BUN/root/chunk-ef0msk7r.js";
var h = ve(_h(), 1),
  B = ["dev", "engine"];

function Ctt(n) {
  return B.find((e) => n.includes(`-${e}.`)) ?? null
}

function bGt(n) {
  return Ctt(n) !== null
}

function Rtt(n, e) {
  if (!n) return !1;
  let r = Ctt(n),
    t = Ctt(e);
  return r !== null && t !== null && r !== t
}

function Att(n) {
  let e;
  for (let f of n.matchAll(/-(?:dev|engine)\.(\d{8})\.t(\d{6})(?:\.|$)/g)) e = f;
  let r = e?.[1],
    t = e?.[2];
  if (!r || !t) return null;
  let i = Date.UTC(Number(r.slice(0, 4)), Number(r.slice(4, 6)) - 1, Number(r.slice(6, 8)), Number(t.slice(0, 2)), Number(t.slice(2, 4)), Number(t.slice(4, 6)));
  return new Date(i).toISOString().slice(0, 19).replace(/[-:]/g, "").replace("T", "t") === `${r}t${t}` ? i : null
}

function n3o(n, e) {
  let r = Att(n),
    t = Att(e);
  return r !== null && t !== null && t < r
}

function $wt(n, e) {
  let r = Att(n),
    t = Att(e);
  if (r !== null && t !== null) {
    if (Ctt(n) !== Ctt(e)) return !1;
    return r > t
  }
  if (bGt(n) || bGt(e)) return !1;
  return h.valid(n) !== null && h.valid(e) !== null && h.gt(n, e)
}

function ber(n, e, r) {
  if (!n) return !1;
  if (n === r) return !0;
  let t = Att(n);
  if (t !== null) return t >= e.commitMs;
  if (bGt(n)) return !1;
  return h.valid(n) !== null && h.gte(n, e.release)
}
var b = new Set([1000, 1002, 1003, 1004, 1006, 2004, 2031]),
  A = /\x1b\[\?([\d;]+)([hl])/g;

function SGt() {
  let n = new Set,
    e = "";
  return {
    feed(r, t) {
      let i = e ? e + r : r,
        a = 0,
        c = !1;
      for (let m of i.matchAll(A)) {
        let S = m[2] === "h";
        for (let P of m[1].split(";")) {
          let o = Number(P);
          if (b.has(o) && n.has(o) !== S) {
            if (S) n.add(o), t?.(o);
            else n.delete(o);
            c = !0
          }
        }
        a = m.index + m[0].length
      }
      let f = i.slice(Math.max(a, i.length - 16)),
        y = f.lastIndexOf("\x1B");
      return e = y >= 0 && /^\x1b(\[(\?[\d;]*)?)?$/.test(f.slice(y)) ? f.slice(y) : "", c
    },
    seed(r) {
      for (let t of r)
        if (b.has(t)) n.add(t)
    },
    snapshot() {
      return [...n]
    }
  }
}
import {
  lstat as C,
  readdir as x,
  unlink as p
} from "fs/promises";
import {
  connect as E
} from "net";
import {
  basename as w,
  join as v
} from "path";
async function Ser(n, e) {
  if (e.launch.mode !== "exec" || !n) return null;
  try {
    let r = await al(aX(n), 8192);
    if (r == null) return null;
    let t = JSON.parse(r);
    if (typeof t?.code !== "number") return null;
    let i = pn(typeof t.tail === "string" ? t.tail : "").replace(/\r\n?/g, `
`).split(`
`).findLast((y) => y.trim())?.trim() ?? "",
      a = su(ps(i), Yf);
    if (t.code === 0) return {
      state: "done",
      detail: a || "(no output)",
      code: 0
    };
    let c = typeof t.signal === "string" ? t.signal : void 0;
    if (c === "SIGINT" || c === "SIGQUIT") return {
      state: "stopped",
      detail: "stopped",
      code: t.code
    };
    let f = c ? `${c} (${t.code})` : `exit ${t.code}`;
    return {
      state: "crashed",
      detail: a ? `${f} \u2014 ${a}` : f,
      signal: c,
      code: t.code
    }
  } catch {
    return null
  }
}
async function mVr(n = {}, e) {
  return po("daemon_bg_reap_all", async () => {
    let r = await lN({
        silent: !0
      }, e),
      t = new Map;
    for (let [o, s] of Object.entries(r.workers)) t.set(o, {
      pid: s.pid,
      procStart: s.procStart,
      ptySock: s.ptySock,
      dispatch: s.dispatch,
      replPid: s.replPid,
      replProcStart: s.replProcStart
    });
    let i = I() === "windows",
      [a, c] = i ? [_8e(), ".pid"] : [mpt(), ".sock"],
      f = i && e ? await gVr(e) : await x(a).catch(() => []),
      y = new Set(f.filter((o) => o.endsWith(c)));
    for (let o of f) {
      if (!o.endsWith(c)) {
        if (!i) {
          let d = [".err", ".late", ".exec-exit", ".err.read"].find((g) => o.endsWith(`.sock${g}`));
          if (d && !y.has(o.slice(0, -d.length))) {
            let g = o.slice(0, -`.sock${d}`.length);
            if (!(d === ".exec-exit" && t.has(g))) await p(v(a, o)).catch(() => {})
          }
        }
        continue
      }
      let s = o.slice(0, -c.length);
      if (t.has(s)) continue;
      let u = i ? Number((e ? await hVr(e, s) : await al(Lfe(s), wGt)) ?? "0") : 0;
      t.set(s, {
        pid: u,
        ptySock: LE(s)
      })
    }
    if (!i) {
      let o = new Set;
      for (let u of t.values())
        if (u.ptySock) o.add(u.ptySock);
      let s = await x(Bie()).catch(() => []);
      for (let u of s) {
        if (!u.endsWith(".pty.sock")) continue;
        let d = v(Bie(), u);
        if (o.has(d)) continue;
        t.set(`spare:${u}`, {
          pid: 0,
          ptySock: d
        })
      }
    }
    let m = 0,
      S = new Set,
      P = setInterval(() => {}, 60000);
    if (await Promise.all(Array.from(t.entries()).map(async ([o, s]) => {
        let u = s.dispatch ? await Ser(s.ptySock, s.dispatch) : null;
        if (s.ptySock && await Q2e(s.ptySock, e)) m++;
        else if (s.pid) {
          let d = await yVr(s.pid, s.procStart),
            g = d !== "unverified" && await Nge(s.replPid, s.replProcStart);
          switch (d) {
            case "killed":
              m++;
              break;
            case "unverified":
              S.add(o);
              return;
            case "gone":
            case "foreign":
              if (g) m++;
              break;
            default:
          }
        }
        if (!o.startsWith("spare:")) {
          let d = {
              state: "stopped",
              detail: "stopped"
            },
            g = u?.state === "done" ? u : n.supervisorKilledAll ? d : u ?? d;
          if (await h3e(o, g.state, g.detail, void 0, e), i && e) await e.delete(Be.daemon(["pty-pids", w(aX(s.ptySock ?? LE(o)))])).catch(() => {});
          else await p(aX(s.ptySock ?? LE(o))).catch(() => {})
        }
        if (i)
          if (e) await D(e, o);
          else {
            await p(Lfe(o)).catch(() => {});
            let d = OT(LE(o));
            await p(d).catch(() => {}), await p(`${d}.read`).catch(() => {}), await p(cD(LE(o))).catch(() => {})
          }
      })).finally(() => clearInterval(P)), t.size > 0) await UZ((o) => {
      for (let s of t.keys())
        if (!S.has(s)) delete o.workers[s]
    }, e).catch(l);
    return {
      reaped: m,
      kept: S.size
    }
  })
}
async function gVr(n) {
  let e = [],
    r;
  do {
    let t = await n.listEntries({
      namespace: "daemon",
      relPath: ["pty-pids"]
    }, {
      cursor: r,
      skipKeyStats: !0,
      skipScopeStats: !0
    }).catch(() => {
      return
    });
    if (t === void 0 || !t.ok) return [];
    for (let i of t.value.items)
      if (i.kind === "key" && i.key.namespace === "daemon") {
        let a = i.key.relPath.at(-1);
        if (a !== void 0 && i.key.relPath.length === 2 && Cr(a)) e.push(a)
      } r = t.value.cursor
  } while (r !== void 0);
  return e
}
var wGt = 4096;
async function N(n) {
  try {
    let e = await C(Lfe(n));
    return !e.isFile() || e.size > wGt
  } catch (e) {
    return !G(e)
  }
}
async function hVr(n, e) {
  if (await N(e)) return null;
  let r = await n.readText([{
    key: Be.daemon(["pty-pids", `${e}.pid`]),
    offset: 0,
    length: wGt + 1
  }]).catch(() => {
    return
  });
  if (r === void 0 || !r.ok) return null;
  let t = r.value.items[0];
  if (!t.found || t.totalBytes > wGt) return null;
  return t.value
}
async function D(n, e) {
  await n.delete(Be.daemon(["pty-pids", `${e}.pid`])).catch(() => {}), await T(n, LE(e))
}
async function T(n, e) {
  let r = OT(e);
  for (let t of [w(r), `${w(r)}.read`, w(cD(e))]) await n.delete(Be.daemon(["pty-pids", t])).catch(() => {})
}

function Q2e(n, e) {
  return new Promise((r) => {
    let t = !1,
      i = (c) => {
        if (t) return;
        t = !0, r(c)
      },
      a = E(n);
    a.unref(), a.setTimeout(2000, () => {
      a.destroy(), i(!1)
    }), a.on("error", () => {
      p(n).catch(() => {});
      let c = OT(n);
      if (e && I() === "windows") T(e, n).catch(() => {});
      else p(c).catch(() => {}), p(`${c}.read`).catch(() => {}), p(cD(n)).catch(() => {});
      i(!1)
    }), a.once("connect", () => {
      a.resume(), a.write(bH({
        t: "kill",
        sig: "SIGTERM"
      }))
    }), a.once("close", () => i(!0))
  })
}

function jbn(n) {
  return new Promise((e) => {
    let r = !1,
      t = (a) => {
        if (r) return;
        r = !0, e(a)
      },
      i = E(n);
    i.unref(), i.setTimeout(250, () => {
      i.destroy(), t(!1)
    }), i.on("error", () => t(!1)), i.once("connect", () => {
      i.end(bH({
        t: "pong"
      })), t(!0)
    })
  })
}
async function yVr(n, e) {
  try {
    process.kill(n, 0)
  } catch (t) {
    if (k(t) !== "ESRCH") return "foreign";
    return zEe([-n, n], e) ? "killed" : "gone"
  }
  if (e === void 0) return "foreign";
  let r = await Fge(n);
  if (r === void 0) return "unverified";
  if (r !== e) return "foreign";
  return zEe([-n, n], e) ? "killed" : "gone"
}
export {
  Ctt,
  bGt,
  Rtt,
  Att,
  n3o,
  $wt,
  ber,
  SGt,
  Ser,
  mVr,
  gVr,
  wGt,
  hVr,
  Q2e,
  jbn,
  yVr
};
