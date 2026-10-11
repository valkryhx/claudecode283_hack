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
import { l } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { $s } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Ae } from "B:/~BUN/root/chunk-5w2ecytn.js";
import { Ez } from "B:/~BUN/root/chunk-d36ctpgs.js";
import { xh } from "B:/~BUN/root/chunk-06ra9xdn.js";
import { eJr } from "B:/~BUN/root/chunk-ymahamqq.js";
import { ua } from "B:/~BUN/root/chunk-358c43wz.js";
import { mkdir as P, readFile as f, stat as p, unlink as v, utimes as D, writeFile as k } from "fs/promises";
import { join as A } from "path";
var g = ".consolidate-lock",
  y = 3600000;
function s(e) {
  return A(e, g);
}
function c(e) {
  let n = Ez(e);
  return n === void 0 ? void 0 : Ae.memory(n, [g]);
}
function b(e, n) {
  let [a = "", r = ""] = e.split(`
`),
    o = parseInt(a.trim(), 10),
    i = r.trim() === "" ? NaN : Number(r.trim());
  return {
    holderPid: Number.isFinite(o) ? o : void 0,
    lastConsolidatedAt: Number.isFinite(i) ? i : n
  };
}
function h(e, n) {
  return `${e ?? ""}
${n}`;
}
async function Bje(e = $s(), n) {
  let a = H() && n !== void 0 ? c(e) : void 0;
  if (n && a) {
    let r = await n.readText([a]);
    if (!r.ok || !r.value.items[0].found) return 0;
    let {
      value: value,
      mtimeMs: mtimeMs
    } = r.value.items[0];
    return b(value, mtimeMs).lastConsolidatedAt;
  }
  try {
    return (await p(s(e))).mtimeMs;
  } catch {
    return 0;
  }
}
async function jXr(e) {
  return L($s(), e);
}
async function L(e, n) {
  let a = H() && n !== void 0 ? c(e) : void 0;
  if (n && a) return S(n, a);
  let r = s(e),
    o,
    i;
  try {
    let [u, w] = await Promise.all([p(r), f(r, "utf8")]);
    o = u.mtimeMs;
    let m = parseInt(w.trim(), 10);
    i = Number.isFinite(m) ? m : void 0;
  } catch {}
  if (o !== void 0 && Date.now() - o < y) {
    if (i !== void 0 && ua(i)) return t(`[autoDream] lock held by live PID ${i} (mtime ${Math.round((Date.now() - o) / 1000)}s ago)`), null;
  }
  await P(e, {
    recursive: !0
  }), await k(r, String(process.pid));
  let d;
  try {
    d = await f(r, "utf8");
  } catch {
    return null;
  }
  if (parseInt(d.trim(), 10) !== process.pid) return null;
  return o ?? 0;
}
async function SQe(e, n) {
  return C($s(), e, n);
}
async function C(e, n, a) {
  let r = H() && a !== void 0 ? c(e) : void 0;
  if (a && r) return x(a, r, n);
  let o = s(e);
  try {
    if (n === 0) {
      await v(o);
      return;
    }
    await k(o, "");
    let i = n / 1000;
    await D(o, i, i);
  } catch (error) {
    t(`[autoDream] rollback failed: ${l(error)} \u2014 next trigger delayed to minHours`);
  }
}
async function S(e, n) {
  let a = await e.readText([n]),
    r = a.ok ? a.value.items[0] : void 0,
    o = r?.found ? r.version : void 0,
    i = r?.found ? b(r.value, r.mtimeMs) : void 0;
  if (i !== void 0 && Date.now() - i.lastConsolidatedAt < y) {
    if (i.holderPid !== void 0 && ua(i.holderPid)) return t(`[autoDream] lock held by live PID ${i.holderPid} (acquired ${Math.round((Date.now() - i.lastConsolidatedAt) / 1000)}s ago)`), null;
  }
  let d = await e.updateText(n, u => (u?.version ?? void 0) === o ? {
    write: h(process.pid, Date.now()),
    result: !0
  } : {
    skip: !0,
    result: !1
  }, r?.found ? {
    publishDiscipline: "inPlace"
  } : void 0);
  if (!d.ok || d.value.result !== !0) return null;
  return i?.lastConsolidatedAt ?? 0;
}
async function x(e, n, a) {
  let r = a === 0 ? await e.delete(n) : await e.updateText(n, () => ({
    write: h(void 0, a)
  }), {
    publishDiscipline: "inPlace"
  });
  if (!r.ok) t(`[autoDream] rollback failed: ${r.error.code} \u2014 next trigger delayed to minHours`);
}
async function WXr(e, n) {
  let a = xh(we());
  return (await eJr(a, !0, void 0, n)).filter(item => item.mtime > e).map(item => item.sessionId);
}
export { Bje, jXr, SQe, WXr };