// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  d,
  k
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  F
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  Y
} from "B:/~BUN/root/chunk-89mss1tj.js";
import {
  b$,
  jo,
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  Hd
} from "B:/~BUN/root/chunk-nggrknsv.js";
import {
  I
} from "B:/~BUN/root/chunk-je1b1drr.js";
import {
  uR,
  gn
} from "B:/~BUN/root/chunk-pjgzz98k.js";
import {
  k5
} from "B:/~BUN/root/chunk-vpgpdrbv.js";
import {
  am,
  KWe,
  Uh,
  O_,
  ad
} from "B:/~BUN/root/chunk-2ypz4cxh.js";
import {
  f
} from "B:/~BUN/root/chunk-frrkt2bs.js";
import {
  Dge,
  eR
} from "B:/~BUN/root/chunk-m3q01n4y.js";
import {
  uj
} from "B:/~BUN/root/chunk-dn8rakwm.js";
import {
  Ia
} from "B:/~BUN/root/chunk-9xr0x7gd.js";
import {
  o,
  v,
  Bu,
  u,
  C
} from "B:/~BUN/root/chunk-g3snhg6n.js";
import {
  join as P
} from "path";
var EKr = /^[A-Za-z0-9]{1,64}$/,
  R = /^background-[A-Za-z0-9]{1,64}\.jsonl$/,
  S = 80,
  _ = 64,
  B = 8192,
  L = 256,
  w = 32,
  z = 250,
  D = f(() => u({
    v: C(1),
    id: o().regex(EKr),
    owner: Bu().positive().max(2147483647),
    owner_start: o().min(1).max(64).optional(),
    pid: Bu().positive().max(2147483647).optional(),
    pid_start: o().min(1).max(64).optional(),
    pids_in: o().min(1).max(1024).optional(),
    started_at: v().nonnegative(),
    command: o().max(4 * S),
    caller: o().max(4 * _),
    folder: o().min(1).max(4096)
  }));
async function TKr(e) {
  if (!EKr.test(e.id)) return;
  try {
    let n = {
      v: 1,
      id: e.id,
      owner: process.pid,
      owner_start: await O_(),
      pid: e.pid,
      pid_start: e.pid === void 0 ? void 0 : await ad(e.pid, {
        skipCache: !0
      }),
      pids_in: await b(),
      started_at: Date.now(),
      command: c(e.command, S),
      caller: c(e.caller, _),
      folder: e.folder
    };
    await gn().mkdir(uj(), 448), await gn().writeExclusive(p(e.id), b$(n), 384), await R8o()
  } catch (n) {
    t(`[remote-tools] background command record not written: ${d(n)}`, {
      level: "warn"
    })
  }
}
async function enr(e) {
  await m(l(e)), await m(p(e))
}

function tnr(e) {
  return m(l(e))
}
async function R8o() {
  let e = [];
  try {
    let n = await gn().list(uj());
    for (let i of n.filter((r) => R.test(r)).slice(0, L)) {
      let r = await v5s(i.slice(11, -6));
      if (r !== void 0 && r !== "ended") e.push(r)
    }
  } catch (n) {
    t(`served background records: ${d(n)}`)
  }
  return e.sort((n, i) => n.folder.localeCompare(i.folder) || n.caller.localeCompare(i.caller) || n.started_at - i.started_at || n.id.localeCompare(i.id))
}
async function v5s(e) {
  if (!EKr.test(e)) return;
  try {
    let n = await gn().readTail(p(e), B, {
        noFollow: !0
      }),
      i = D().safeParse(jo(n.toString("utf8").trim()));
    if (!i.success || i.data.id !== e) return;
    let r = i.data,
      a = r.owner === process.pid && r.owner_start !== void 0 && r.owner_start === await O_() || await h(r.owner, r.owner_start);
    if (a || await h(r.pid, r.pid_start)) return {
      ...r,
      ownerGone: !a
    };
    if (await A(r)) return await enr(e), "ended"
  } catch {}
  return
}
async function rti(e) {
  return F(await R8o(), (n) => !n.ownerGone && e.includes(n.folder))
}
async function oti(e, n = 1e4) {
  let i = gn();
  try {
    await i.writeExclusive(l(e), `{}
`, 384)
  } catch (a) {
    if (k(a) !== "EEXIST") return "not_asked"
  }
  let r = Date.now() + n;
  while (Date.now() < r)
    if (await Y(z), await i.lstat(p(e)).catch(() => null) === void 0) return await tnr(e), "stopped";
  return await m(l(e)) ? "unanswered" : "pending"
}

function sti(e, {
  now: n,
  stopHint: i
}) {
  if (e.length === 0) return [];
  let r = ["background commands started by cloud sessions:"],
    a;
  for (let s of e.slice(0, w)) {
    let g = `  in ${c(s.folder,200)}, cloud session ${c(s.caller,_+1)}:`;
    if (g !== a) a = g, r.push(g);
    let x = s.pid === void 0 ? "pid unknown" : `pid ${s.pid}`,
      E = uR(Math.max(0, n - s.started_at));
    r.push(`    ${s.id}  ${x}  running ${E}  ${c(s.command,S+1)}${s.ownerGone?"  (its serving process is gone: nothing here will stop it)":""}`)
  }
  if (e.length > w) r.push(`  and ${e.length-w} more`);
  if (i) r.push("  stop one: claude daemon remote-control stop-shell <id>");
  return r
}

function p(e) {
  return P(uj(), `background-${e}.jsonl`)
}

function l(e) {
  return P(uj(), `background-${e}.stop.jsonl`)
}
async function h(e, n) {
  return e !== void 0 && Ia(e) && (n === void 0 || await Uh(e, n) !== !1)
}
async function A(e) {
  if (e.pids_in === void 0 || e.pids_in !== await b() || !await KWe() || !await y(e.owner, e.owner_start)) return !1;
  let {
    pid: n
  } = e;
  if (n === void 0 || !await y(n, e.pid_start)) return !1;
  if (!am(n) || I() === "windows") return !0;
  try {
    return process.kill(-n, 0), !1
  } catch (i) {
    return k(i) === "ESRCH"
  }
}
async function y(e, n) {
  return am(e) || n !== void 0 && await Uh(e, n) === !1
}
async function b() {
  try {
    return `${await eR()} ${Dge()}`
  } catch {
    return
  }
}
async function m(e) {
  try {
    return await gn().delete(e), !0
  } catch {
    return !1
  }
}

function c(e, n) {
  return k5(Hd(e), n)
}
export {
  EKr,
  TKr,
  enr,
  tnr,
  R8o,
  v5s,
  rti,
  oti,
  sti
};
