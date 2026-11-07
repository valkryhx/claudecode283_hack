// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { d, k } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { J } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { t, AN, ds } from "B:/~BUN/root/chunk-2pp12te6.js";
import { _l } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { Dn } from "B:/~BUN/root/chunk-9jpwd6f1.js";
import { Nte } from "B:/~BUN/root/chunk-2f1svh63.js";
import { Mw } from "B:/~BUN/root/chunk-bkfncj77.js";
import { ph, Het, Xy, Rw, tc } from "B:/~BUN/root/chunk-xqymp2nr.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { El, hte, Xx } from "B:/~BUN/root/chunk-pzs4x0zd.js";
import { gq } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { o, E, Xc, u, T } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { U } from "B:/~BUN/root/chunk-5ha2avah.js";
import { join as y } from "path";
var pUo = /^[A-Za-z0-9]{1,64}$/,
  B = /^background-[A-Za-z0-9]{1,64}\.jsonl$/,
  S = 80,
  _ = 64,
  L = 8192,
  z = 256,
  w = 32,
  C = 250,
  D = p(() => u({
    v: T(1),
    id: o().regex(pUo),
    owner: Xc().positive().max(2147483647),
    owner_start: o().min(1).max(64).optional(),
    pid: Xc().positive().max(2147483647).optional(),
    pid_start: o().min(1).max(64).optional(),
    pids_in: o().min(1).max(1024).optional(),
    started_at: E().nonnegative(),
    command: o().max(4 * S),
    caller: o().max(4 * _),
    folder: o().min(1).max(4096)
  }));
async function mUo(e) {
  if (!pUo.test(e.id)) return;
  try {
    let n = {
      v: 1,
      id: e.id,
      owner: process.pid,
      owner_start: await Rw(),
      pid: e.pid,
      pid_start: e.pid === void 0 ? void 0 : await tc(e.pid, {
        skipCache: !0
      }),
      pids_in: await P(),
      started_at: Date.now(),
      command: c(e.command, S),
      caller: c(e.caller, _),
      folder: e.folder
    };
    await Dn().mkdir(gq(), 448), await Dn().writeExclusive(m(e.id), AN(n), 384), await gXs();
  } catch (error) {
    t(`[remote-tools] background command record not written: ${d(error)}`, {
      level: "warn"
    });
  }
}
async function SGr(e) {
  await f(l(e)), await f(m(e));
}
function wGr(e) {
  return f(l(e));
}
async function gXs() {
  let e = [];
  try {
    let n = await Dn().list(gq());
    for (let i of n.filter(item => B.test(item)).slice(0, z)) {
      let r = await Usa(i.slice(11, -6));
      if (r !== void 0 && r !== "ended") e.push(r);
    }
  } catch (error) {
    t(`served background records: ${d(error)}`);
  }
  return e.sort((itemA, itemB) => itemA.folder.localeCompare(itemB.folder) || itemA.caller.localeCompare(itemB.caller) || itemA.started_at - itemB.started_at || itemA.id.localeCompare(itemB.id));
}
async function Usa(e) {
  if (!pUo.test(e)) return;
  try {
    let n = await Dn().readTail(m(e), L, {
        noFollow: !0
      }),
      i = D().safeParse(ds(n.toString("utf8").trim()));
    if (!i.success || i.data.id !== e) return;
    let r = i.data,
      a = r.owner === process.pid && r.owner_start !== void 0 && r.owner_start === (await Rw()) || (await h(r.owner, r.owner_start));
    if (a || (await h(r.pid, r.pid_start))) return {
      ...r,
      ownerGone: !a
    };
    if (await A(r)) return await SGr(e), "ended";
  } catch {}
  return;
}
async function Eha(e) {
  return U(await gXs(), n => !n.ownerGone && e.includes(n.folder));
}
async function Tha(e, n = 1e4) {
  let i = Dn();
  try {
    await i.writeExclusive(l(e), `{}
`, 384);
  } catch (error) {
    if (k(error) !== "EEXIST") return "not_asked";
  }
  let r = Date.now() + n;
  while (Date.now() < r) if (await J(C), (await i.lstat(m(e)).catch(() => null)) === void 0) return await wGr(e), "stopped";
  return (await f(l(e))) ? "unanswered" : "pending";
}
function Cha(e, {
  now: now,
  stopHint: stopHint
}) {
  if (e.length === 0) return [];
  let r = ["background commands started by cloud sessions:"],
    a;
  for (let s of e.slice(0, w)) {
    let g = `  in ${c(s.folder, 200)}, cloud session ${c(s.caller, _ + 1)}:`;
    if (g !== a) a = g, r.push(g);
    let b = s.pid === void 0 ? "pid unknown" : `pid ${s.pid}`,
      R = Mw(Math.max(0, now - s.started_at));
    r.push(`    ${s.id}  ${b}  running ${R}  ${c(s.command, S + 1)}${s.ownerGone ? "  (its serving process is gone: nothing here will stop it)" : ""}`);
  }
  if (e.length > w) r.push(`  and ${e.length - w} more`);
  if (stopHint) r.push("  stop one: claude daemon remote-control stop-shell <id>");
  return r;
}
function m(e) {
  return y(gq(), `background-${e}.jsonl`);
}
function l(e) {
  return y(gq(), `background-${e}.stop.jsonl`);
}
async function h(e, n) {
  return e !== void 0 && El(e) && (n === void 0 || (await Xy(e, n)) !== !1);
}
async function A(e) {
  if (e.pids_in === void 0 || e.pids_in !== (await P()) || !(await Het()) || !(await v(e.owner, e.owner_start))) return !1;
  let {
    pid: pid
  } = e;
  if (pid === void 0 || !(await v(pid, e.pid_start))) return !1;
  if (!ph(pid) || x() === "windows") return !0;
  try {
    return process.kill(-pid, 0), !1;
  } catch (error) {
    return k(error) === "ESRCH";
  }
}
async function v(e, n) {
  return ph(e) || n !== void 0 && (await Xy(e, n)) === !1;
}
async function P() {
  try {
    return `${await Xx()} ${hte()}`;
  } catch {
    return;
  }
}
async function f(e) {
  try {
    return await Dn().delete(e), !0;
  } catch {
    return !1;
  }
}
function c(e, n) {
  return Nte(_l(e), n);
}
export { pUo, mUo, SGr, wGr, gXs, Usa, Eha, Tha, Cha };