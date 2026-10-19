// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { K, Qr, so, DA, QGo, Tm, qTe, Q5 } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { Wt } from "B:/~BUN/root/chunk-3aez4b53.js";
import { _, se, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { dre } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { VB } from "B:/~BUN/root/chunk-rvc0n7zm.js";
import { Cbt, fR } from "B:/~BUN/root/chunk-xrp58hm9.js";
import { Hle } from "B:/~BUN/root/chunk-2ypz4cxh.js";
import { pt } from "B:/~BUN/root/chunk-cqkcn3bx.js";
import { randomUUID as I } from "crypto";
import { readFileSync as D } from "fs";
import { mkdir as P } from "fs/promises";
import { join as b } from "path";
var T = [{
  min: 0,
  max: 59
}, {
  min: 0,
  max: 23
}, {
  min: 1,
  max: 31
}, {
  min: 1,
  max: 12
}, {
  min: 0,
  max: 6
}];
function x(e, s) {
  let {
      min: min,
      max: max
    } = s,
    i = new Set();
  for (let a of e.split(",")) {
    let o = a.match(/^\*(?:\/(\d+))?$/);
    if (o) {
      let m = o[1] ? parseInt(o[1], 10) : 1;
      if (m < 1) return null;
      for (let g = min; g <= max; g += m) i.add(g);
      continue;
    }
    let d = a.match(/^(\d+)-(\d+)(?:\/(\d+))?$/);
    if (d) {
      let m = parseInt(d[1], 10),
        g = parseInt(d[2], 10),
        u = d[3] ? parseInt(d[3], 10) : 1,
        h = min === 0 && max === 6,
        c = h ? 7 : max;
      if (m > g || u < 1 || m < min || g > c) return null;
      for (let f = m; f <= g; f += u) i.add(h && f === 7 ? 0 : f);
      continue;
    }
    if (a.match(/^\d+$/)) {
      let m = parseInt(a, 10);
      if (min === 0 && max === 6 && m === 7) m = 0;
      if (m < min || m > max) return null;
      i.add(m);
      continue;
    }
    return null;
  }
  if (i.size === 0) return null;
  return Array.from(i).sort((itemA, itemB) => itemA - itemB);
}
function nK(e) {
  let s = e.trim().split(/\s+/);
  if (s.length !== 5) return null;
  let n = [];
  for (let r = 0; r < 5; r++) {
    let i = x(s[r], T[r]);
    if (!i) return null;
    n.push(i);
  }
  return {
    minute: n[0],
    hour: n[1],
    dayOfMonth: n[2],
    month: n[3],
    dayOfWeek: n[4]
  };
}
function k(e) {
  let date = new Date(e.getTime());
  return date.setMinutes(date.getMinutes()), date.getTime() !== e.getTime();
}
function G0t(e, s, {
  oneShot = !1
} = {}) {
  let r = new Set(e.minute),
    i = new Set(e.hour),
    a = new Set(e.dayOfMonth),
    o = new Set(e.month),
    d = new Set(e.dayOfWeek),
    p = e.dayOfMonth.length === 31,
    m = e.dayOfWeek.length === 7,
    g = c => p && m ? !0 : p ? d.has(c.getDay()) : m ? a.has(c.getDate()) : a.has(c.getDate()) || d.has(c.getDay()),
    date_2 = new Date(Math.floor(s.getTime() / 60000) * 60000 + 60000);
  if (Number.isNaN(date_2.getTime())) return null;
  let h = 527040;
  for (let c = 0; c < h; c++) {
    if (k(date_2)) {
      if (oneShot && o.has(date_2.getMonth() + 1) && g(date_2) && i.has(date_2.getHours()) && r.has(date_2.getMinutes())) return date_2;
      date_2.setTime(date_2.getTime() + 60000);
      continue;
    }
    let f = date_2.getMonth() + 1;
    if (!o.has(f)) {
      date_2.setMonth(date_2.getMonth() + 1, 1), date_2.setHours(0, 0, 0, 0);
      continue;
    }
    if (!g(date_2)) {
      date_2.setDate(date_2.getDate() + 1), date_2.setHours(0, 0, 0, 0);
      continue;
    }
    if (!i.has(date_2.getHours()) || !r.has(date_2.getMinutes())) {
      if (oneShot) date_2.setTime(date_2.getTime() + 60000);else if (!i.has(date_2.getHours())) date_2.setHours(date_2.getHours() + 1, 0, 0, 0);else date_2.setMinutes(date_2.getMinutes() + 1);
      continue;
    }
    return date_2;
  }
  return null;
}
var S = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function F(e, s) {
  return new Date(2000, 0, 1, s, e).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit"
  });
}
function w(e, s) {
  let date_3 = new Date();
  return date_3.setUTCHours(s, e, 0, 0), date_3.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short"
  });
}
function QR(e, s) {
  let n = s?.utc ?? !1,
    r = e.trim().split(/\s+/);
  if (r.length !== 5) return e;
  let [i, a, o, d, p] = r;
  if (a === "*" && o === "*" && d === "*" && p === "*") {
    if (i === "*") return "Every minute";
    let c = i.match(/^\*\/(\d+)$/);
    if (c) {
      let f = parseInt(c[1], 10);
      return f === 1 ? "Every minute" : `Every ${f} minutes`;
    }
  }
  if (i.match(/^\d+$/) && a === "*" && o === "*" && d === "*" && p === "*") {
    let c = parseInt(i, 10);
    if (c === 0) return "Every hour";
    return `Every hour at :${c.toString().padStart(2, "0")}`;
  }
  let m = a.match(/^\*\/(\d+)$/);
  if (i.match(/^\d+$/) && m && o === "*" && d === "*" && p === "*") {
    let c = parseInt(m[1], 10),
      f = parseInt(i, 10),
      y = f === 0 ? "" : ` at :${f.toString().padStart(2, "0")}`;
    return c === 1 ? `Every hour${y}` : `Every ${c} hours${y}`;
  }
  if (!i.match(/^\d+$/) || !a.match(/^\d+$/)) return e;
  let g = parseInt(i, 10),
    u = parseInt(a, 10),
    h = n ? w : F;
  if (o === "*" && d === "*" && p === "*") return `Every day at ${h(g, u)}`;
  if (o === "*" && d === "*" && p.match(/^\d$/)) {
    let c = parseInt(p, 10) % 7,
      f;
    if (n) {
      let date_4 = new Date(),
        M = (c - date_4.getUTCDay() + 7) % 7;
      date_4.setUTCDate(date_4.getUTCDate() + M), date_4.setUTCHours(u, g, 0, 0), f = S[date_4.getDay()];
    } else f = S[c];
    if (f) return `Every ${f} at ${h(g, u)}`;
  }
  if (o === "*" && d === "*" && p === "1-5") return `Weekdays at ${h(g, u)}`;
  return e;
}
function gBe(e) {
  let cron_2 = e.trim();
  if (cron_2 === "") return {
    error: "required"
  };
  let n = cron_2.match(/^(\d+)\s*([smhd])$/i);
  if (n) {
    let r = parseInt(n[1], 10),
      i = n[2].toLowerCase();
    if (r < 1) return {
      error: "interval must be at least 1"
    };
    let cron;
    switch (i) {
      case "s":
        return {
          error: "minimum interval is 1 minute"
        };
      case "m":
        if (r > 59) return {
          error: "minute interval must be 1\u201359 (use hours instead)"
        };
        cron = r === 1 ? "* * * * *" : `*/${r} * * * *`;
        break;
      case "h":
        if (r > 23) return {
          error: "hour interval must be 1\u201323 (use days instead)"
        };
        cron = r === 1 ? "0 * * * *" : `0 */${r} * * *`;
        break;
      case "d":
        if (r === 1) {
          cron = "0 0 * * *";
          break;
        }
        if (r > 28) return {
          error: "day interval must be 1\u201328 (use a cron expression)"
        };
        cron = `0 0 */${r} * *`;
        break;
      default:
        return {
          error: "unknown interval unit"
        };
    }
    return {
      cron: cron,
      human: QR(cron)
    };
  }
  if (nK(cron_2) !== null) return {
    cron: cron_2,
    human: QR(cron_2)
  };
  return {
    error: "use an interval (5m, 2h, 1d) or 5-field cron (*/5 * * * *)"
  };
}
var Kjn = 300000,
  A = /^\*\/\d+ \* \* \* \*$/,
  v = b(".claude", "scheduled_tasks.json");
function ZPe(e) {
  return b(e ?? Qr(), v);
}
function Yjn(e) {
  return e === void 0 && so() !== null;
}
async function Ztn(e) {
  if (Yjn(e)) return [];
  let s = se(),
    n;
  try {
    n = await s.readFile(ZPe(e), {
      encoding: "utf-8"
    });
  } catch (error) {
    if (Wt(error)) return [];
    return l(error), [];
  }
  let r = pt(n, !1);
  if (!r || typeof r !== "object") return [];
  let i = r;
  if (!Array.isArray(i.tasks)) return [];
  let a = [];
  for (let o of i.tasks) {
    if (!o || typeof o.id !== "string" || typeof o.cron !== "string" || typeof o.prompt !== "string" || typeof o.createdAt !== "number") {
      t(`[ScheduledTasks] skipping malformed task: ${_(o)}`);
      continue;
    }
    if (!nK(o.cron)) {
      t(`[ScheduledTasks] skipping task ${o.id} with invalid cron '${o.cron}'`);
      continue;
    }
    a.push({
      id: o.id,
      cron: o.cron,
      prompt: o.prompt,
      createdAt: o.createdAt,
      ...(typeof o.lastFiredAt === "number" && {
        lastFiredAt: o.lastFiredAt
      }),
      ...(o.recurring && {
        recurring: !0
      }),
      ...(o.permanent && {
        permanent: !0
      }),
      ...(typeof o.createdBySessionId === "string" && {
        createdBySessionId: o.createdBySessionId
      }),
      ...(typeof o.createdByPid === "number" && {
        createdByPid: o.createdByPid
      }),
      ...(typeof o.createdByProcStart === "string" && {
        createdByProcStart: o.createdByProcStart
      }),
      ...(typeof o.createdInProject === "string" && {
        createdInProject: o.createdInProject
      })
    });
  }
  return a;
}
function svo(e) {
  return DA() || QGo(e ?? Qr());
}
function BCr(e) {
  if (Yjn(e)) return !1;
  if (svo(e)) return !1;
  let s;
  try {
    s = D(ZPe(e), "utf-8");
  } catch {
    return !1;
  }
  let n = pt(s, !1);
  if (!n || typeof n !== "object") return !1;
  let tasks = n.tasks;
  return Array.isArray(tasks) && tasks.length > 0;
}
async function Xjn(e, s) {
  if (Yjn(s)) throw Error("Durable scheduled tasks are unavailable in a session started with --project-config-root");
  let n = s ?? Qr(),
    checkParentDir = !dre(b(n, ".claude"));
  if (checkParentDir) await Cbt(n, b(n, ".claude"));
  await P(b(n, ".claude"), {
    recursive: !0
  });
  let i = {
    tasks: e.map(({
      durable: durable,
      ...o
    }) => o)
  };
  await fR(ZPe(n), _(i, null, 2) + `
`, {
    encoding: "utf-8",
    allowSymlink: !checkParentDir,
    checkParentDir: checkParentDir,
    stagingDir: b(n, ".claude", VB)
  });
}
async function jut(cron_3, prompt, n, r, agentId, createdAt = Date.now()) {
  let id = I().slice(0, 8),
    d = {
      id: id,
      cron: cron_3,
      prompt: prompt,
      createdAt: createdAt,
      ...(n && {
        recurring: !0
      })
    };
  if (!r) return qTe({
    ...d,
    ...(agentId && {
      agentId: agentId
    })
  }), id;
  let p = await Ztn();
  return p.push({
    ...d,
    createdBySessionId: K(),
    createdByPid: process.pid,
    createdByProcStart: Hle(),
    createdInProject: Qr()
  }), await Xjn(p), id;
}
async function wve(e, s) {
  if (e.length === 0) return;
  if (s === void 0 && Q5(e) === e.length) return;
  let n = new Set(e),
    r = await Ztn(s),
    i = r.filter(item => !n.has(item.id));
  if (i.length === r.length) return;
  await Xjn(i, s);
}
async function $Ps(e, s, n) {
  if (e.length === 0) return;
  let r = new Set(e),
    i = await Ztn(n),
    a = !1;
  for (let o of i) if (r.has(o.id)) o.lastFiredAt = s, a = !0;
  if (!a) return;
  await Xjn(i, n);
}
async function Lie(e) {
  let s = await Ztn(e);
  if (e !== void 0) return s;
  let n = Tm().map(item => ({
    ...item,
    durable: !1
  }));
  return [...s, ...n];
}
function enn(e, s, n) {
  let r = nK(e);
  if (!r) return null;
  let i = G0t(r, new Date(s), n);
  return i ? i.getTime() : null;
}
var Z6 = {
  recurringFrac: 0.5,
  recurringCapMs: 1800000,
  oneShotMaxMs: 90000,
  oneShotFloorMs: 0,
  oneShotMinuteMod: 30,
  recurringMaxAgeMs: 604800000,
  cacheLeadMs: 15000
};
function C(e) {
  let s = parseInt(e.slice(0, 8), 16) / 4294967296;
  return Number.isFinite(s) ? s : 0;
}
function tnn(e, s, n, r = Z6) {
  let i = enn(e, s);
  if (i === null) return null;
  let a = enn(e, i);
  if (a === null) return i;
  let o = a - i;
  if (A.test(e) && r.cacheLeadMs > 0 && r.cacheLeadMs < o && o >= Kjn && o - r.cacheLeadMs < Kjn) return s + o - r.cacheLeadMs;
  let d = Math.min(C(n) * r.recurringFrac * o, r.recurringCapMs);
  return i + d;
}
function ivo(e, s, n, r = Z6) {
  let i = enn(e, s, {
    oneShot: !0
  });
  if (i === null) return null;
  if (new Date(i).getMinutes() % r.oneShotMinuteMod !== 0) return i;
  let a = r.oneShotFloorMs + C(n) * (r.oneShotMaxMs - r.oneShotFloorMs);
  return Math.max(i - a, s);
}
function Wut(e, s) {
  return e.recurring ? tnn(e.cron, e.lastFiredAt ?? e.createdAt, e.id, s) : ivo(e.cron, e.createdAt, e.id, s);
}
function zut(e) {
  return new Date(Math.round(e / 60000) * 60000);
}
function UPs(e, s) {
  return e.filter(item => {
    let r = enn(item.cron, item.createdAt, {
      oneShot: !item.recurring
    });
    return r !== null && r < s;
  });
}
export { nK, G0t, QR, gBe, Kjn, ZPe, Yjn, Ztn, svo, BCr, Xjn, jut, wve, $Ps, Lie, enn, Z6, tnn, ivo, Wut, zut, UPs };