// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Y, kr, Fo, $$, dVr, U_, $de, $2 } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { Et } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { b, ce, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { zde } from "B:/~BUN/root/chunk-4p6z9qq1.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { ND } from "B:/~BUN/root/chunk-2swveyqa.js";
import { q5e, Hv } from "B:/~BUN/root/chunk-8hs4bwwk.js";
import { _J } from "B:/~BUN/root/chunk-83yxmdy5.js";
import { ct } from "B:/~BUN/root/chunk-tsjnk8ma.js";
var x = [{
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
function T(r, s) {
  let {
      min: min,
      max: max
    } = s,
    i = new Set();
  for (let a of r.split(",")) {
    let o = a.match(/^\*(?:\/(\d+))?$/);
    if (o) {
      let u = o[1] ? parseInt(o[1], 10) : 1;
      if (u < 1) return null;
      for (let f = min; f <= max; f += u) i.add(f);
      continue;
    }
    let c = a.match(/^(\d+)-(\d+)(?:\/(\d+))?$/);
    if (c) {
      let u = parseInt(c[1], 10),
        f = parseInt(c[2], 10),
        g = c[3] ? parseInt(c[3], 10) : 1,
        y = min === 0 && max === 6,
        l = y ? 7 : max;
      if (u > f || g < 1 || u < min || f > l) return null;
      for (let m = u; m <= f; m += g) i.add(y && m === 7 ? 0 : m);
      continue;
    }
    if (a.match(/^\d+$/)) {
      let u = parseInt(a, 10);
      if (min === 0 && max === 6 && u === 7) u = 0;
      if (u < min || u > max) return null;
      i.add(u);
      continue;
    }
    return null;
  }
  if (i.size === 0) return null;
  return Array.from(i).sort((itemA, itemB) => itemA - itemB);
}
function LB(r) {
  let s = r.trim().split(/\s+/);
  if (s.length !== 5) return null;
  let n = [];
  for (let e = 0; e < 5; e++) {
    let i = T(s[e], x[e]);
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
function Pat(r, s) {
  let n = new Set(r.minute),
    e = new Set(r.hour),
    i = new Set(r.dayOfMonth),
    a = new Set(r.month),
    o = new Set(r.dayOfWeek),
    c = r.dayOfMonth.length === 31,
    p = r.dayOfWeek.length === 7,
    date = new Date(s.getTime());
  date.setSeconds(0, 0), date.setMinutes(date.getMinutes() + 1);
  let f = 527040;
  for (let g = 0; g < f; g++) {
    let y = date.getMonth() + 1;
    if (!a.has(y)) {
      date.setMonth(date.getMonth() + 1, 1), date.setHours(0, 0, 0, 0);
      continue;
    }
    let l = date.getDate(),
      m = date.getDay();
    if (!(c && p ? !0 : c ? o.has(m) : p ? i.has(l) : i.has(l) || o.has(m))) {
      date.setDate(date.getDate() + 1), date.setHours(0, 0, 0, 0);
      continue;
    }
    if (!e.has(date.getHours())) {
      date.setHours(date.getHours() + 1, 0, 0, 0);
      continue;
    }
    if (!n.has(date.getMinutes())) {
      date.setMinutes(date.getMinutes() + 1);
      continue;
    }
    return date;
  }
  return null;
}
var C = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function w(r, s) {
  return new Date(2000, 0, 1, s, r).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit"
  });
}
function F(r, s) {
  let date_2 = new Date();
  return date_2.setUTCHours(s, r, 0, 0), date_2.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short"
  });
}
function Ck(r, s) {
  let n = s?.utc ?? !1,
    e = r.trim().split(/\s+/);
  if (e.length !== 5) return r;
  let [i, a, o, c, p] = e;
  if (a === "*" && o === "*" && c === "*" && p === "*") {
    if (i === "*") return "Every minute";
    let l = i.match(/^\*\/(\d+)$/);
    if (l) {
      let m = parseInt(l[1], 10);
      return m === 1 ? "Every minute" : `Every ${m} minutes`;
    }
  }
  if (i.match(/^\d+$/) && a === "*" && o === "*" && c === "*" && p === "*") {
    let l = parseInt(i, 10);
    if (l === 0) return "Every hour";
    return `Every hour at :${l.toString().padStart(2, "0")}`;
  }
  let u = a.match(/^\*\/(\d+)$/);
  if (i.match(/^\d+$/) && u && o === "*" && c === "*" && p === "*") {
    let l = parseInt(u[1], 10),
      m = parseInt(i, 10),
      h = m === 0 ? "" : ` at :${m.toString().padStart(2, "0")}`;
    return l === 1 ? `Every hour${h}` : `Every ${l} hours${h}`;
  }
  if (!i.match(/^\d+$/) || !a.match(/^\d+$/)) return r;
  let f = parseInt(i, 10),
    g = parseInt(a, 10),
    y = n ? F : w;
  if (o === "*" && c === "*" && p === "*") return `Every day at ${y(f, g)}`;
  if (o === "*" && c === "*" && p.match(/^\d$/)) {
    let l = parseInt(p, 10) % 7,
      m;
    if (n) {
      let date_3 = new Date(),
        k = (l - date_3.getUTCDay() + 7) % 7;
      date_3.setUTCDate(date_3.getUTCDate() + k), date_3.setUTCHours(g, f, 0, 0), m = C[date_3.getDay()];
    } else m = C[l];
    if (m) return `Every ${m} at ${y(f, g)}`;
  }
  if (o === "*" && c === "*" && p === "1-5") return `Weekdays at ${y(f, g)}`;
  return r;
}
function cTe(r) {
  let cron_2 = r.trim();
  if (cron_2 === "") return {
    error: "required"
  };
  let n = cron_2.match(/^(\d+)\s*([smhd])$/i);
  if (n) {
    let e = parseInt(n[1], 10),
      i = n[2].toLowerCase();
    if (e < 1) return {
      error: "interval must be at least 1"
    };
    let cron;
    switch (i) {
      case "s":
        return {
          error: "minimum interval is 1 minute"
        };
      case "m":
        if (e > 59) return {
          error: "minute interval must be 1\u201359 (use hours instead)"
        };
        cron = e === 1 ? "* * * * *" : `*/${e} * * * *`;
        break;
      case "h":
        if (e > 23) return {
          error: "hour interval must be 1\u201323 (use days instead)"
        };
        cron = e === 1 ? "0 * * * *" : `0 */${e} * * *`;
        break;
      case "d":
        if (e === 1) {
          cron = "0 0 * * *";
          break;
        }
        if (e > 28) return {
          error: "day interval must be 1\u201328 (use a cron expression)"
        };
        cron = `0 0 */${e} * *`;
        break;
      default:
        return {
          error: "unknown interval unit"
        };
    }
    return {
      cron: cron,
      human: Ck(cron)
    };
  }
  if (LB(cron_2) !== null) return {
    cron: cron_2,
    human: Ck(cron_2)
  };
  return {
    error: "use an interval (5m, 2h, 1d) or 5-field cron (*/5 * * * *)"
  };
}
import { randomUUID as I } from "crypto";
import { readFileSync as P } from "fs";
import { mkdir as D } from "fs/promises";
import { join as S } from "path";
var oin = 300000,
  A = /^\*\/\d+ \* \* \* \*$/,
  v = S(".claude", "scheduled_tasks.json");
function xge(r) {
  return S(r ?? kr(), v);
}
function sin(r) {
  return r === void 0 && Fo() !== null;
}
async function F0t(r) {
  if (sin(r)) return [];
  let s = ce(),
    n;
  try {
    n = await s.readFile(xge(r), {
      encoding: "utf-8"
    });
  } catch (error) {
    if (Et(error)) return [];
    return d(error), [];
  }
  let e = ct(n, !1);
  if (!e || typeof e !== "object") return [];
  let i = e;
  if (!Array.isArray(i.tasks)) return [];
  let a = [];
  for (let o of i.tasks) {
    if (!o || typeof o.id !== "string" || typeof o.cron !== "string" || typeof o.prompt !== "string" || typeof o.createdAt !== "number") {
      t(`[ScheduledTasks] skipping malformed task: ${b(o)}`);
      continue;
    }
    if (!LB(o.cron)) {
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
function oPr(r) {
  return $$() || dVr(r ?? kr());
}
function wjn(r) {
  if (sin(r)) return !1;
  if (oPr(r)) return !1;
  let s;
  try {
    s = P(xge(r), "utf-8");
  } catch {
    return !1;
  }
  let n = ct(s, !1);
  if (!n || typeof n !== "object") return !1;
  let tasks = n.tasks;
  return Array.isArray(tasks) && tasks.length > 0;
}
async function iin(r, s) {
  if (sin(s)) throw Error("Durable scheduled tasks are unavailable in a session started with --project-config-root");
  let n = s ?? kr(),
    checkParentDir = !zde(S(n, ".claude"));
  if (checkParentDir) await q5e(n, S(n, ".claude"));
  await D(S(n, ".claude"), {
    recursive: !0
  });
  let i = {
    tasks: r.map(({
      durable: durable,
      ...o
    }) => o)
  };
  await Hv(xge(n), b(i, null, 2) + `
`, {
    encoding: "utf-8",
    allowSymlink: !checkParentDir,
    checkParentDir: checkParentDir,
    stagingDir: S(n, ".claude", ND)
  });
}
async function J4e(cron_3, prompt, n, e, agentId) {
  let id = I().slice(0, 8),
    o = {
      id: id,
      cron: cron_3,
      prompt: prompt,
      createdAt: Date.now(),
      ...(n && {
        recurring: !0
      })
    };
  if (!e) return $de({
    ...o,
    ...(agentId && {
      agentId: agentId
    })
  }), id;
  let c = await F0t();
  return c.push({
    ...o,
    createdBySessionId: Y(),
    createdByPid: process.pid,
    createdByProcStart: _J(),
    createdInProject: kr()
  }), await iin(c), id;
}
async function Vae(r, s) {
  if (r.length === 0) return;
  if (s === void 0 && $2(r) === r.length) return;
  let n = new Set(r),
    e = await F0t(s),
    i = e.filter(item => !n.has(item.id));
  if (i.length === e.length) return;
  await iin(i, s);
}
async function UTo(r, s, n) {
  if (r.length === 0) return;
  let e = new Set(r),
    i = await F0t(n),
    a = !1;
  for (let o of i) if (e.has(o.id)) o.lastFiredAt = s, a = !0;
  if (!a) return;
  await iin(i, n);
}
async function q9(r) {
  let s = await F0t(r);
  if (r !== void 0) return s;
  let n = U_().map(item => ({
    ...item,
    durable: !1
  }));
  return [...s, ...n];
}
function $0t(r, s) {
  let n = LB(r);
  if (!n) return null;
  let e = Pat(n, new Date(s));
  return e ? e.getTime() : null;
}
var $V = {
  recurringFrac: 0.5,
  recurringCapMs: 1800000,
  oneShotMaxMs: 90000,
  oneShotFloorMs: 0,
  oneShotMinuteMod: 30,
  recurringMaxAgeMs: 604800000,
  cacheLeadMs: 15000
};
function M(r) {
  let s = parseInt(r.slice(0, 8), 16) / 4294967296;
  return Number.isFinite(s) ? s : 0;
}
function U0t(r, s, n, e = $V) {
  let i = $0t(r, s);
  if (i === null) return null;
  let a = $0t(r, i);
  if (a === null) return i;
  let o = a - i;
  if (A.test(r) && e.cacheLeadMs > 0 && e.cacheLeadMs < o && o >= oin && o - e.cacheLeadMs < oin) return s + o - e.cacheLeadMs;
  let c = Math.min(M(n) * e.recurringFrac * o, e.recurringCapMs);
  return i + c;
}
function ain(r, s, n, e = $V) {
  let i = $0t(r, s);
  if (i === null) return null;
  if (new Date(i).getMinutes() % e.oneShotMinuteMod !== 0) return i;
  let a = e.oneShotFloorMs + M(n) * (e.oneShotMaxMs - e.oneShotFloorMs);
  return Math.max(i - a, s);
}
function BTo(r, s) {
  return r.filter(item => {
    let e = $0t(item.cron, item.createdAt);
    return e !== null && e < s;
  });
}
export { LB, Pat, Ck, cTe, oin, xge, sin, F0t, oPr, wjn, iin, J4e, Vae, UTo, q9, $0t, $V, U0t, ain, BTo };