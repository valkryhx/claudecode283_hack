// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { sH, d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { i3e } from "B:/~BUN/root/chunk-wefm1yd9.js";
import { P, l, v, as, gg, Q$, Pf } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Y, Wo } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { H } from "B:/~BUN/root/chunk-dkxhwhft.js";
import { Q } from "B:/~BUN/root/chunk-17wqwt36.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { b, J, ce, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Se, LBe } from "B:/~BUN/root/chunk-4p6z9qq1.js";
import { re, xr } from "B:/~BUN/root/chunk-y04k89s2.js";
import { Qt } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { jn, Ae } from "B:/~BUN/root/chunk-5w2ecytn.js";
import { Do } from "B:/~BUN/root/chunk-9xz983aj.js";
import { YYe, Om, Rr } from "B:/~BUN/root/chunk-v4qhg3t2.js";
import { EF } from "B:/~BUN/root/chunk-rdxve5qj.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { Ri, $m } from "B:/~BUN/root/chunk-vpejnsp4.js";
import { ti } from "B:/~BUN/root/chunk-nhxcgss8.js";
import { G, Umn } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { Gk, ca } from "B:/~BUN/root/chunk-6spmd6p4.js";
import { mi as to, yye, e5e } from "B:/~BUN/root/chunk-3wnb3s8p.js";
import { B4e } from "B:/~BUN/root/chunk-pgrf1rrh.js";
import { pz } from "B:/~BUN/root/chunk-ymhw5dt2.js";
import { lo, o3e } from "B:/~BUN/root/chunk-988g5svb.js";
import { o, M, ae, C, u, ut, Qo, fe, z, A } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { cp, Ks } from "B:/~BUN/root/chunk-1652axk8.js";
import { U } from "B:/~BUN/root/chunk-z1enakv9.js";
import { gf, rt } from "B:/~BUN/root/chunk-mmkravm0.js";
import { join as be } from "path";
var st = new Set(["to", "summary", "message", "notify_when_idle"]),
  pe = "antml:",
  se = "</summary>",
  Re = '<parameter name="message">',
  Pe = `<${pe}parameter name="message">`,
  regExp = new RegExp(`<(?:${pe})?parameter\\b|</(?:${pe})?(?:parameter|invoke|function_calls|message)>`);
function G1n(e) {
  let n = ve(e);
  return n !== void 0 && n.unrepaired === void 0 ? n.split : void 0;
}
function ve(e) {
  if (!G(e)) return;
  let {
    message: message,
    summary: summary
  } = e;
  if (typeof e.to !== "string" || message !== void 0 && message !== null || typeof summary !== "string" || !Object.keys(e).every(item => st.has(item))) return;
  let i = summary.indexOf(se);
  while (i !== -1) {
    let c = i + se.length;
    while (c < summary.length && /\s/.test(summary.charAt(c))) c++;
    let openerForm = summary.startsWith(Pe, c) ? "namespaced" : summary.startsWith(Re, c) ? "bare" : void 0;
    if (openerForm !== void 0) {
      let s = openerForm === "namespaced" ? Pe : Re,
        message_2 = summary.slice(c + s.length).trimEnd();
      if (message_2.trim().length === 0) return;
      return {
        split: {
          summary: summary.slice(0, i).trim(),
          message: message_2,
          openerForm: openerForm
        },
        unrepaired: regExp.test(message_2) ? "markup" : ot(message_2) ? "json" : void 0
      };
    }
    i = summary.indexOf(se, i + se.length);
  }
  return;
}
function Tsn(e, {
  applySplit = !0
} = {}) {
  if (!G(e)) return null;
  let {
      message: message_3,
      summary: summary_2
    } = e,
    c = [],
    g = ve(e),
    s = g?.unrepaired === void 0 ? g?.split : void 0;
  if (s !== void 0 && applySplit) message_3 = s.message, summary_2 = s.summary, c.push(`split_slipped_summary_${s.openerForm}`);
  if (typeof message_3 === "string" && (typeof summary_2 !== "string" || summary_2.trim().length === 0)) {
    let h = xr(message_3.trim()).trim();
    if (h.length > 0) summary_2 = h, c.push("derive_summary");
  }
  if (typeof summary_2 === "string" && summary_2.length > o3e) summary_2 = re(summary_2, o3e - 1) + "\u2026", c.push("truncate_summary");
  let [k] = c,
    shapeClass = g?.unrepaired !== void 0 ? `split_slipped_summary_${g.split.openerForm}_unrepaired_${g.unrepaired}` : s !== void 0 && !applySplit ? `split_slipped_summary_${s.openerForm}_detect_only` : k;
  if (shapeClass === void 0) return null;
  return {
    input: {
      ...e,
      ...(message_3 !== void 0 && {
        message: message_3
      }),
      summary: summary_2
    },
    shapeClass: shapeClass
  };
}
function ot(e) {
  let n = e.trim();
  if (!n.startsWith("{") && !n.startsWith("[")) return !1;
  try {
    let r = J(n);
    return typeof r === "object" && r !== null;
  } catch {
    return !1;
  }
}
function I() {
  return ti().mailbox.ledger;
}
function pxr(e, n) {
  let r = Rr(e);
  return Object.values(n ?? {}).find(item => Rr(item.name) === r);
}
function at(e, n) {
  if (n.isPaneTeammate) return !1;
  if (!Object.values(n.roster ?? {}).some(item => item.tmuxPaneId === "leader")) return !1;
  let i = Rr(e);
  if (i === to || i === yye || i === e5e) return !0;
  let g = pxr(e, n.roster);
  return g?.tmuxPaneId === "in-process" || g?.tmuxPaneId === "leader";
}
function Wae(e, n, r) {
  let i = I(),
    c = new Set(),
    g = new Map();
  for (let s of e) if (s.msg_id !== void 0 && !c.has(s.msg_id) && i.wrote(n, s) && s.msg_id !== void 0) c.add(s.msg_id), g.set(s, "verified");else g.set(s, at(s.from, r) ? "forged" : "unverifiable");
  return g;
}
import { readdir as ge, readFile as ze, unlink as Fe, writeFile as ie } from "fs/promises";
import { join as X } from "path";
function qEo(e) {
  if (ti().taskList.leaderTeamName === e) return;
  ti().taskList.leaderTeamName = e, j();
}
function KEo(e) {
  return ti().taskList.updated.subscribe(e);
}
function j() {
  try {
    ti().taskList.updated.emit();
  } catch {}
}
var fat = f(() => z(["pending", "in_progress", "completed"])),
  De = f(() => u({
    id: o(),
    subject: o(),
    description: o(),
    activeForm: o().optional(),
    owner: o().optional(),
    status: fat(),
    blocks: C(o()),
    blockedBy: C(o()),
    metadata: fe(o(), ae()).optional()
  })),
  dxr = ".highwatermark",
  $e = 16,
  ct = new Set(["ELOOP", "EISDIR", "ENXIO"]);
function pt(e) {
  return e.code === "AlreadyExists" || e.code === "Failed" && e.telemetryCode !== void 0 && ct.has(e.telemetryCode);
}
var oe = {
  retries: {
    retries: 30,
    minTimeout: 5,
    maxTimeout: 100
  },
  onCompromised: e => d(e)
};
function Oe(e) {
  return X(KM(e), dxr);
}
async function ue(e, n) {
  if (n) {
    let i = await n.read([Ae.taskListHighWaterMark(BT(e))]),
      c = i.ok ? i.value.items[0] : void 0;
    if (!c?.found) return 0;
    let g = parseInt(Buffer.from(c.value).toString("utf8").trim(), 10);
    return isNaN(g) ? 0 : g;
  }
  let r = Oe(e);
  try {
    let i = (await ze(r, "utf8")).trim(),
      c = parseInt(i, 10);
    return isNaN(c) ? 0 : c;
  } catch {
    return 0;
  }
}
async function ye(e, n, r) {
  if (r) {
    let c = await r.write(Ae.taskListHighWaterMark(BT(e)), String(n), {
      publishDiscipline: "inPlace"
    });
    if (!c.ok) {
      let code = Q$(gf(c.error));
      throw Object.assign(new P(`[Tasks] high-water mark write failed: ${c.error.code}`, "tasks high-water mark v5 write failed"), code === void 0 ? {} : {
        code: code
      });
    }
    return;
  }
  let i = Oe(e);
  await ie(i, String(n), {
    encoding: "utf8"
  });
}
async function mt(e, n, r) {
  try {
    if (n > (await ue(e, r))) await ye(e, n, r);
  } catch (error) {
    t(`[Tasks] could not record skipped task id ${n}: ${l(error)}`);
  }
}
function fv() {
  if (a.CLAUDE_CODE_ENABLE_TASKS === !1) return !1;
  return !0;
}
async function YEo(e, n) {
  let r = KM(e),
    i;
  try {
    i = await ke(e, n);
    let c = [];
    if (n) {
      let s = await Ce(n, e);
      if (s === null) return !1;
      if (c = s.filter(item => !item.startsWith(".")), c.length > 0) {
        let k = await n.read(c.map(item => Z(e, item)));
        if (!k.ok) return t(`[Tasks] Failed to read task list ${e} before a reset: ${k.error.code}`), !1;
        if (k.value.items.length !== c.length) return !1;
        for (let [y, h] of k.value.items.entries()) {
          if (!h.found) continue;
          let T = le(c[y], Buffer.from(h.value).toString("utf8"));
          if (T === null) continue;
          if (T.status !== "completed") return !1;
        }
      }
    } else if ((await rx(e)).some(item => item.status !== "completed")) return !1;
    let g = n ? Be(c) : await Ne(e);
    if (g > 0) {
      let s = await ue(e, n);
      if (g > s) await ye(e, g, n);
    }
    if (n) for (let s of c) await n.delete(Ae.task(BT(e), s));else {
      let s;
      try {
        s = await ge(r);
      } catch {
        s = [];
      }
      for (let k of s) if (k.endsWith(".json") && !k.startsWith(".")) {
        let y = X(r, k);
        try {
          await Fe(y);
        } catch {}
      }
    }
    return j(), !0;
  } finally {
    await $m(i, "[Tasks] resetTaskList");
  }
}
function kR() {
  if (a.CLAUDE_CODE_TASK_LIST_ID) return a.CLAUDE_CODE_TASK_LIST_ID;
  let e = Gk();
  if (e) return e.teamName;
  return ca() || ti().taskList.leaderTeamName || Y();
}
function BT(e) {
  return e.replace(/[^a-zA-Z0-9_-]/g, "-");
}
function KM(e) {
  return X(Se(), "tasks", BT(e));
}
function O(e, n) {
  return X(KM(e), `${BT(n)}.json`);
}
function Z(e, n) {
  return Ae.task(BT(e), BT(n));
}
async function Ce(e, n) {
  let r = {
      namespace: "task",
      listId: BT(n)
    },
    i = [],
    c = await Ks(cursor => e.listEntries(r, {
      cursor: cursor,
      skipKeyStats: !0
    }), g => {
      for (let s of g) if (s.kind === "key" && s.key.namespace === "task" && "taskId" in s.key) i.push(s.key.taskId);
    });
  switch (c.status) {
    case "done":
      return i;
    case "error":
      return t(`[Tasks] Failed to list task list ${n}: ${c.error.code}`), null;
    case "capped":
      return t(`[Tasks] Listing task list ${n} exceeded ${cp} pages; treating the listing as failed`), null;
  }
}
async function qe(e, n) {
  let r = {
      namespace: "task",
      listId: BT(n)
    },
    i = [],
    c;
  try {
    c = await Ks(cursor_2 => e.listEntries(r, {
      cursor: cursor_2,
      includeValue: !0
    }), s => {
      for (let k of s) {
        if (k.kind !== "key" || k.key.namespace !== "task" || !("taskId" in k.key)) continue;
        let taskId = k.key.taskId;
        if (k.value instanceof Uint8Array && taskId === BT(taskId)) i.push(le(taskId, Buffer.from(k.value).toString("utf8")));else i.push(jae(n, taskId, e));
      }
    });
  } finally {
    await Promise.allSettled(i);
  }
  switch (c.status) {
    case "done":
      break;
    case "error":
      return t(`[Tasks] Failed to list task list ${n}: ${c.error.code}`), null;
    case "capped":
      return t(`[Tasks] Listing task list ${n} exceeded ${cp} pages; treating the listing as failed`), null;
  }
  return (await Promise.all(i)).filter(item => item !== null).sort((itemA, itemB) => Number(itemA.id) - Number(itemB.id));
}
async function XEo(e, n) {
  if (H() && n !== void 0) return qe(n, e);
  return rx(e);
}
async function a0t(e, n) {
  let r = KM(e);
  try {
    if (H() && n !== void 0) {
      await n.ensureScope({
        namespace: "task",
        listId: BT(e)
      });
      return;
    }
    await ce().mkdir(r);
  } catch {}
}
function Be(e) {
  let n = 0;
  for (let r of e) {
    let i = parseInt(r, 10);
    if (!isNaN(i) && i > n) n = i;
  }
  return n;
}
async function Ne(e, n) {
  if (n) {
    let g = await Ce(n, e);
    if (g === null) throw new P("[Tasks] Could not list the task list to determine its highest task id");
    return Be(g);
  }
  let r = KM(e),
    i;
  try {
    i = await ge(r);
  } catch {
    return 0;
  }
  let c = 0;
  for (let g of i) {
    if (!g.endsWith(".json")) continue;
    let s = parseInt(g.replace(".json", ""), 10);
    if (!isNaN(s) && s > c) c = s;
  }
  return c;
}
async function ft(e, n) {
  let [r, i] = await Promise.all([Ne(e, n), ue(e, n)]);
  return Math.max(r, i);
}
async function JEo(e, n, r) {
  let i;
  try {
    i = await ke(e, r);
    let c = await ft(e, r),
      id = String(c + 1);
    if (r) for (let s = 1;; s++) {
      let k = {
          id: id,
          ...n
        },
        y = await r.write(Z(e, id), b(k, null, 2), {
          precondition: {
            type: "ifAbsent"
          }
        });
      if (y.ok) break;
      if (!pt(y.error)) throw new P(`[Tasks] Failed to create task ${id}: ${y.error.code}`, "[Tasks] v5 task create write failed");
      let h = y.error.code === "Failed" ? y.error.telemetryCode : void 0;
      if (t(`[Tasks] createTask: task id ${id} is held by an entry the listing did not report (${h ?? y.error.code}); taking the next id`), await mt(e, Number(id), r), s >= $e) throw new P(`[Tasks] Failed to create a task: could not claim a free task id after ${$e} attempts; last tried ${O(e, id)}, which exists and could not be claimed \u2014 the task listing may have failed, or the entry is not a task file`, "[Tasks] v5 task create gave up: no free task id");
      id = String(Number(id) + 1);
    } else {
      let s = {
          id: id,
          ...n
        },
        k = O(e, id);
      await ie(k, b(s, null, 2), {
        encoding: "utf8"
      });
    }
    return j(), id;
  } finally {
    await $m(i, "[Tasks] createTask");
  }
}
function le(e, n) {
  try {
    let r = J(n),
      i = De().safeParse(r);
    if (!i.success) return t(`[Tasks] Task ${e} failed schema validation: ${i.error.message}`), null;
    return i.data;
  } catch (error) {
    if (t(`[Tasks] Failed to read task ${e}: ${l(error)}`), !(error instanceof SyntaxError)) d(error);
    return null;
  }
}
async function je(e, n, r) {
  let i = await e.read([Z(n, r)]);
  if (!i.ok) return t(`[Tasks] Failed to read task ${r}: ${i.error.code}`), null;
  let c = i.value.items[0];
  if (!c.found) return null;
  return le(r, Buffer.from(c.value).toString("utf8"));
}
async function jae(e, n, r) {
  if (r) return je(r, e, n);
  let i = O(e, n);
  try {
    let c = await ze(i, "utf8"),
      g = J(c),
      s = De().safeParse(g);
    if (!s.success) return t(`[Tasks] Task ${n} failed schema validation: ${s.error.message}`), null;
    return s.data;
  } catch (error) {
    if (v(error) === "ENOENT") return null;
    if (t(`[Tasks] Failed to read task ${n}: ${l(error)}`, {
      level: "error"
    }), !(error instanceof SyntaxError) && !Pf(error) && !gg(error)) d(error);
    return null;
  }
}
async function Ue(e, id_2, r, i) {
  if (i) return We(i, e, id_2, r);
  let c = await jae(e, id_2);
  if (!c) return null;
  let g = {
      ...c,
      ...r,
      id: id_2
    },
    s = O(e, id_2);
  return await ie(s, b(g, null, 2), {
    encoding: "utf8"
  }), j(), g;
}
var gt = 5,
  yt = B4e(50);
async function me(e, n, r, i) {
  let c = Z(n, r);
  for (let g = 1;; g++) {
    let s = await e.update(c, y => {
      let h = y === void 0 ? null : le(r, Buffer.from(y.value).toString("utf8")),
        T = i(h);
      return "write" in T ? {
        write: b(T.write, null, 2),
        result: T.result
      } : {
        skip: !0,
        result: T.result
      };
    });
    if (s.ok) {
      if (s.value.written) j();
      return s.value.result;
    }
    if (!(s.error.code === "Unavailable" && s.error.telemetryCode === "LockSuspect") || g >= gt) throw t(`[Tasks] update of task ${r} failed after ${g} attempt(s): ${s.error.code}${"telemetryCode" in s.error && s.error.telemetryCode ? ` (${s.error.telemetryCode})` : ""}`), new P(`[Tasks] Failed to update task ${r}: ${s.error.code}`, "[Tasks] v5 task update write failed");
    await (s.error.retryAfterMs !== void 0 ? Q(s.error.retryAfterMs) : yt(g));
  }
}
function Le(e, n, id_3) {
  return {
    ...e,
    ...n,
    id: id_3
  };
}
async function We(e, n, r, i) {
  return (await me(e, n, r, g => {
    if (!g) return {
      result: null
    };
    let s = Le(g, i, r);
    return {
      write: s,
      result: s
    };
  })) ?? null;
}
async function YEe(e, n, r, i) {
  let c = O(e, n);
  if (i) {
    if (!(await je(i, e, n))) return null;
    let k;
    try {
      return k = await Ke(e, n), await We(i, e, n, r);
    } finally {
      await $m(k, "[Tasks] updateTask");
    }
  }
  if (!(await jae(e, n))) return null;
  let s;
  try {
    return s = await Ri(c, oe), await Ue(e, n, r);
  } finally {
    await $m(s, "[Tasks] updateTask");
  }
}
async function z1n(e, n, r) {
  let i = O(e, n);
  try {
    let c = parseInt(n, 10);
    if (!isNaN(c)) {
      let s = await ue(e, r);
      if (c > s) await ye(e, c, r);
    }
    if (r) {
      let s = await r.delete(Z(e, n));
      if (!s.ok) return t(`[Tasks] Failed to delete task ${n}: ${s.error.code}`), !1;
      if (!s.value.existed) return !1;
    } else try {
      await Fe(i);
    } catch (error) {
      if (v(error) === "ENOENT") return !1;
      throw error;
    }
    let g = await rx(e, r);
    for (let s of g) {
      let blocks = s.blocks.filter(item => item !== n),
        blockedBy = s.blockedBy.filter(item => item !== n);
      if (blocks.length !== s.blocks.length || blockedBy.length !== s.blockedBy.length) await YEe(e, s.id, {
        blocks: blocks,
        blockedBy: blockedBy
      }, r);
    }
    return j(), !0;
  } catch {
    return !1;
  }
}
async function rx(e, n) {
  if (n) return (await qe(n, e)) ?? [];
  let r = KM(e),
    i;
  try {
    i = await ge(r);
  } catch {
    return [];
  }
  let c = i.filter(item => item.endsWith(".json")).map(item => item.replace(".json", ""));
  return (await Promise.all(c.map(item => jae(e, item)))).filter(item => item !== null).sort((itemA, itemB) => Number(itemA.id) - Number(itemB.id));
}
async function uxr(e, n, r, i) {
  let [c, g] = await Promise.all([jae(e, n, i), jae(e, r, i)]);
  if (!c || !g) return !1;
  if (!c.blocks.includes(r)) await YEe(e, n, {
    blocks: [...c.blocks, r]
  }, i);
  if (!g.blockedBy.includes(n)) await YEe(e, r, {
    blockedBy: [...g.blockedBy, n]
  }, i);
  return !0;
}
async function kt(e, n) {
  await a0t(e, n);
  let r = X(KM(e), ".lock");
  try {
    await ce().mkdir(KM(e)), await ie(r, "", {
      flag: "wx"
    });
  } catch {}
  return r;
}
async function ke(e, n) {
  if (Wo()) return He(BT(e));
  let r = await kt(e, n);
  return Ri(r, oe);
}
function Ke(e, n) {
  if (Wo()) return He(`${BT(e)}/${BT(n)}`);
  let r = O(e, n);
  return Ri(`${r}.v5-lock-anchor`, {
    lockfilePath: `${r}.lock`,
    realpath: !1,
    ...oe
  });
}
function He(e) {
  return new Promise(n => {
    ti().taskList.locks.run(e, () => new Promise(r => n(async () => r())));
  });
}
async function QEo(e, n, owner, i = {}, c) {
  let g = O(e, n);
  if (!(await jae(e, n, c))) return {
    success: !1,
    reason: "task_not_found"
  };
  if (i.checkAgentBusy) return _t(e, n, owner, c);
  let k;
  try {
    if (k = c ? await Ke(e, n) : await Ri(g, oe), c) {
      let E = await me(c, e, n, S => Ie(S, n, owner, void 0));
      if (E !== "needs_open_blockers") return E ?? {
        success: !1,
        reason: "task_not_found"
      };
      let F = await rx(e, c),
        de = new Set(F.filter(item => item.status !== "completed").map(item => item.id)),
        N = await me(c, e, n, S => Ie(S, n, owner, de));
      return N === void 0 || N === "needs_open_blockers" ? {
        success: !1,
        reason: "task_not_found"
      } : N;
    }
    let task = await jae(e, n, c);
    if (!task) return {
      success: !1,
      reason: "task_not_found"
    };
    if (task.owner && task.owner !== owner) return {
      success: !1,
      reason: "already_claimed",
      task: task
    };
    if (task.status === "completed") return {
      success: !1,
      reason: "already_resolved",
      task: task
    };
    let h = await rx(e, c),
      T = new Set(h.filter(item => item.status !== "completed").map(item => item.id)),
      blockedByTasks = task.blockedBy.filter(item => T.has(item));
    if (blockedByTasks.length > 0) return {
      success: !1,
      reason: "blocked",
      task: task,
      blockedByTasks: blockedByTasks
    };
    return {
      success: !0,
      task: await Ue(e, n, {
        owner: owner
      }, c)
    };
  } catch (error) {
    return t(`[Tasks] Failed to claim task ${n}: ${l(error)}`), d(error), {
      success: !1,
      reason: "task_not_found"
    };
  } finally {
    await $m(k, "[Tasks] claimTask");
  }
}
function Ie(task_2, n, owner_2, i) {
  if (!task_2) return {
    result: {
      success: !1,
      reason: "task_not_found"
    }
  };
  if (task_2.owner && task_2.owner !== owner_2) return {
    result: {
      success: !1,
      reason: "already_claimed",
      task: task_2
    }
  };
  if (task_2.status === "completed") return {
    result: {
      success: !1,
      reason: "already_resolved",
      task: task_2
    }
  };
  if (task_2.blockedBy.length > 0) {
    if (!i) return {
      result: "needs_open_blockers"
    };
    let blockedByTasks_2 = task_2.blockedBy.filter(item => i.has(item));
    if (blockedByTasks_2.length > 0) return {
      result: {
        success: !1,
        reason: "blocked",
        task: task_2,
        blockedByTasks: blockedByTasks_2
      }
    };
  }
  let c = Le(task_2, {
    owner: owner_2
  }, n);
  return {
    write: c,
    result: {
      success: !0,
      task: c
    }
  };
}
async function _t(e, n, owner_3, i) {
  let c;
  try {
    c = await ke(e, i);
    let g = await rx(e, i),
      task_3 = g.find(item => item.id === n);
    if (!task_3) return {
      success: !1,
      reason: "task_not_found"
    };
    if (task_3.owner && task_3.owner !== owner_3) return {
      success: !1,
      reason: "already_claimed",
      task: task_3
    };
    if (task_3.status === "completed") return {
      success: !1,
      reason: "already_resolved",
      task: task_3
    };
    let k = new Set(g.filter(item => item.status !== "completed").map(item => item.id)),
      blockedByTasks_3 = task_3.blockedBy.filter(item => k.has(item));
    if (blockedByTasks_3.length > 0) return {
      success: !1,
      reason: "blocked",
      task: task_3,
      blockedByTasks: blockedByTasks_3
    };
    let h = g.filter(item => item.status !== "completed" && item.owner === owner_3 && item.id !== n);
    if (h.length > 0) return {
      success: !1,
      reason: "agent_busy",
      task: task_3,
      busyWithTasks: h.map(item => item.id)
    };
    return {
      success: !0,
      task: await YEe(e, n, {
        owner: owner_3
      }, i)
    };
  } catch (error) {
    return t(`[Tasks] Failed to claim task ${n} with busy check: ${l(error)}`), d(error), {
      success: !1,
      reason: "task_not_found"
    };
  } finally {
    await $m(c, "[Tasks] claimTaskWithBusyCheck");
  }
}
async function N4e(e, n, r, i, c) {
  let s = (await rx(e, c)).filter(item => item.status !== "completed" && (item.owner === n || item.owner === r));
  for (let h of s) await YEe(e, h.id, {
    owner: void 0,
    status: "pending"
  }, c);
  if (s.length > 0) t(`[Tasks] Unassigned ${s.length} task(s) from ${r}`);
  let notificationMessage = `${r} ${i === "terminated" ? "was terminated" : "has shut down"}.`;
  if (s.length > 0) {
    let h = s.map(item => `#${item.id} "${item.subject}"`).join(", ");
    notificationMessage += ` ${s.length} task(s) were unassigned: ${h}. Use TaskList to check availability and TaskUpdate with owner to reassign them to idle teammates.`;
  }
  return {
    unassignedTasks: s.map(item => ({
      id: item.id,
      subject: item.subject
    })),
    notificationMessage: notificationMessage
  };
}
var L = {
    retries: {
      retries: 10,
      minTimeout: 5,
      maxTimeout: 100
    },
    onCompromised: e => d(e)
  },
  Qe = f(() => ut({
    type: o().optional(),
    from: o(),
    text: o(),
    timestamp: o(),
    read: M().optional(),
    color: o().optional(),
    summary: o().optional(),
    from_plugin: o().optional()
  }));
function Xe(e, n) {
  if (e === null || typeof e !== "object" || Array.isArray(e)) return `entry is ${e === null ? "null" : Array.isArray(e) ? "an array" : typeof e}`;
  return n.map(item => {
    let i = item.path[0],
      c = typeof i === "string" ? i : String(i),
      g = e[c],
      s = g === void 0 ? c in e ? "undefined" : "missing" : g === null ? "null" : typeof g;
    return `${c}:${item.code}:${s}`;
  }).join(", ");
}
var Ye = 100,
  ht = 2048;
function bt(e, n) {
  try {
    let r = b(n);
    return `${e}\x00${r.length}:${r.slice(0, ht)}`;
  } catch {
    return `${e}\x00(unserializable)`;
  }
}
function Tt(e, n, r) {
  let reportedDroppedEntries = ti().mailbox.reportedDroppedEntries;
  if (reportedDroppedEntries.size >= Ye) return !1;
  let c = bt(e, n);
  if (reportedDroppedEntries.has(c)) return !1;
  reportedDroppedEntries.add(c);
  let g = `[TeammateMailbox] dropped schema-invalid inbox entry (${r})`;
  if (n === null || typeof n !== "object" || Array.isArray(n)) return d(new P(g, "TeammateMailbox: dropped inbox entry that is not an object")), !0;
  let s = n.text;
  if (s === void 0) d(new P(g, "TeammateMailbox: dropped inbox entry with missing text"));else if (s === null) d(new P(g, "TeammateMailbox: dropped inbox entry with null text"));else if (typeof s !== "string") d(new P(g, "TeammateMailbox: dropped inbox entry with non-string text"));else d(new P(g, "TeammateMailbox: dropped inbox entry failing schema validation"));
  return !0;
}
function xt(e, n) {
  let reportedDroppedEntries_2 = ti().mailbox.reportedDroppedEntries;
  if (reportedDroppedEntries_2.size >= Ye) return;
  let i = `${e}\x00(not-an-array)`;
  if (reportedDroppedEntries_2.has(i)) return;
  reportedDroppedEntries_2.add(i), d(new P(`[TeammateMailbox] inbox file top level is ${n === null ? "null" : typeof n}, expected an array`, "TeammateMailbox: inbox file is not an array"));
}
function Te(e, n) {
  if (!Array.isArray(e)) return xt(n, e), {
    valid: [],
    droppedCount: 1
  };
  let valid = [],
    droppedCount = 0;
  for (let c of e) {
    let g = Qe().safeParse(c);
    if (g.success) valid.push(c);else {
      droppedCount++;
      let s = Xe(c, g.error.issues);
      if (Tt(n, c, s)) t(`[TeammateMailbox] dropping schema-invalid inbox entry (${s})`, {
        level: "warn"
      });
    }
  }
  return {
    valid: valid,
    droppedCount: droppedCount
  };
}
async function Y3o() {
  await Promise.all(Array.from(ti().mailbox.pendingPrunes.values()));
}
function wt(e, n, r) {
  let pendingPrunes = ti().mailbox.pendingPrunes;
  if (pendingPrunes.has(e)) return;
  let c = n2o(e, n, r).finally(() => {
    pendingPrunes.delete(e);
  });
  pendingPrunes.set(e, c);
}
async function n2o(e, n, r) {
  if (H() && n !== void 0 && r !== void 0) {
    try {
      let g = await K(n, r, e, s => s.droppedCount === 0 ? {
        skip: !0,
        result: 0
      } : {
        messages: s.messages,
        result: s.droppedCount
      }, !1);
      if (g) t(`[TeammateMailbox] pruned ${g} schema-invalid entr${g === 1 ? "y" : "ies"} at ${e}`);
    } catch (error) {
      t(`[TeammateMailbox] invalid-entry prune skipped: ${error}`);
    }
    return;
  }
  let lockfilePath = `${e}.lock`,
    c;
  try {
    c = await Ri(e, {
      lockfilePath: lockfilePath,
      ...L
    });
    let g = await Qt().read(e),
      {
        valid: valid_2,
        droppedCount: droppedCount_2
      } = Te(J(g), e);
    if (droppedCount_2 === 0) {
      q(e, valid_2, valid_2);
      return;
    }
    await Qt().atomicWrite(e, b(valid_2, null, 2)), q(e, valid_2, valid_2), t(`[TeammateMailbox] pruned ${droppedCount_2} schema-invalid entr${droppedCount_2 === 1 ? "y" : "ies"} at ${e}`);
  } catch (error) {
    t(`[TeammateMailbox] invalid-entry prune skipped: ${error}`);
  } finally {
    await $m(c, "[TeammateMailbox] pruneInvalidMailboxEntries");
  }
}
function YL(e, n) {
  let r = n || ca() || "default",
    i = BT(r),
    c = BT(e),
    g = be(LBe(), i, "inboxes"),
    s = be(g, `${c}.json`);
  return t(`[TeammateMailbox] getInboxPath: agent=${e}, team=${r}, fullPath=${s}`), s;
}
async function Mt(e) {
  let n = e || ca() || "default",
    r = BT(n),
    i = be(LBe(), r, "inboxes");
  await Qt().mkdir(i), t(`[TeammateMailbox] Ensured inbox directory: ${i}`);
}
function W(e, n) {
  let r = BT(n || ca() || "default"),
    i = BT(e);
  return jn(r) && jn(i) ? Ae.mailbox(r, i) : void 0;
}
function St(e, n, r) {
  let i;
  try {
    i = J(e);
  } catch {
    return {
      messages: [],
      droppedCount: 0,
      corrupt: !0
    };
  }
  let {
    valid: c,
    droppedCount: droppedCount_3
  } = Te(i, n);
  if (r) {
    for (let s of c) if (s.type === void 0) s.type = "message";
  }
  return {
    messages: c,
    droppedCount: droppedCount_3,
    corrupt: !1
  };
}
async function K(e, n, r, i, c = !0) {
  let g,
    s = await e.updateText(n, k => {
      let y = k === void 0 ? {
          messages: [],
          droppedCount: 0
        } : St(k.value, r, c),
        h = i({
          messages: y.messages,
          droppedCount: y.droppedCount,
          found: k !== void 0
        });
      return g = {
        read: y.messages,
        remaining: "skip" in h ? y.messages : h.messages
      }, "skip" in h ? {
        skip: !0,
        result: h.result
      } : {
        write: b(h.messages, null, 2),
        result: h.result
      };
    }, {
      mode: 438 & ~process.umask()
    });
  if (!s.ok) throw t(`[TeammateMailbox] inbox update failed: ${rt(s.error)}`, {
    level: "error"
  }), Error("teammate inbox storage update failed");
  if (g !== void 0) q(r, g.read, g.remaining);
  return s.value.result;
}
function q(e, n, r) {
  let i = new Set(r),
    c = new Set();
  for (let s of n) if (!i.has(s) && s.msg_id !== void 0) c.add(s.msg_id);
  let g = new Set();
  for (let s of r) if (s.msg_id !== void 0 && !c.has(s.msg_id)) g.add(s.msg_id);
  I().retain(e, g);
}
async function gNe(e, n, r, i) {
  let c = YL(e, n);
  t(`[TeammateMailbox] readMailbox: path=${c}`);
  let g = H() && r !== void 0 ? W(e, n) : void 0;
  try {
    let s;
    if (H() && r !== void 0 && g !== void 0) {
      let h = await r.readText([g]);
      if (!h.ok) throw t(`[TeammateMailbox] readMailbox: inbox read failed: ${rt(h.error)}`), Error("teammate inbox storage read failed");
      if (!h.value.items[0].found) return t("[TeammateMailbox] readMailbox: file does not exist"), [];
      s = h.value.items[0].value;
    } else s = await Qt().read(c);
    let {
      valid: valid_3,
      droppedCount: droppedCount_4
    } = Te(J(s), c);
    if (droppedCount_4 > 0) wt(c, r, g);
    for (let h of valid_3) if (h.type === void 0) h.type = "message";
    return t(`[TeammateMailbox] readMailbox: read ${valid_3.length} message(s)` + (droppedCount_4 > 0 ? `, dropped ${droppedCount_4} invalid` : "")), valid_3;
  } catch (error) {
    if (v(error) === "ENOENT") return t("[TeammateMailbox] readMailbox: file does not exist"), [];
    if (error instanceof SyntaxError) return t(`[TeammateMailbox] readMailbox: unparseable inbox, treating as empty: ${error}`), [];
    if (i?.throwOnUnknownReadError) throw error;
    return t(`Failed to read inbox for ${e}: ${error}`), d(error), [];
  }
}
async function hNe(e, n, r) {
  let i = await gNe(e, n, r),
    c = i.filter(item => !item.read);
  return t(`[TeammateMailbox] readUnreadMessages: ${c.length} unread of ${i.length} total`), c;
}
async function S_(e, n, r, i) {
  let c = Qe().safeParse(n);
  if (!c.success) {
    let h = Xe(n, c.error.issues);
    t(`[TeammateMailbox] writeToMailbox: refusing schema-invalid message for ${e} (${h})`, {
      level: "warn"
    }), d(typeof n.text !== "string" ? new P(`[TeammateMailbox] refused mailbox write (${h})`, "TeammateMailbox: refused mailbox write with non-string text") : new P(`[TeammateMailbox] refused mailbox write (${h})`, "TeammateMailbox: refused mailbox write failing schema validation"));
    return;
  }
  let g = H() && i !== void 0 ? W(e, r) : void 0;
  if (H() && i !== void 0 && g !== void 0) {
    let h = {
        ...n,
        ...pz(),
        type: "message",
        read: !1
      },
      T = YL(e, r);
    try {
      return await K(i, g, T, x => (I().record(T, h), {
        messages: [...x.messages, h],
        result: !0
      })), t(`[TeammateMailbox] Wrote message to ${e}'s inbox from ${n.from}`), h.msg_id;
    } catch (error) {
      t(`Failed to write to inbox for ${e}: ${error}`, {
        level: "error"
      }), d(error);
      return;
    }
  }
  try {
    await Mt(r);
  } catch (error) {
    t(`[TeammateMailbox] writeToMailbox: failed to ensure inbox dir: ${error}`, {
      level: "error"
    });
    return;
  }
  let s = YL(e, r),
    lockfilePath_2 = `${s}.lock`;
  t(`[TeammateMailbox] writeToMailbox: recipient=${e}, from=${n.from}, path=${s}`);
  try {
    await Qt().writeExclusive(s, "[]"), t("[TeammateMailbox] writeToMailbox: created new inbox file");
  } catch (error) {
    if (v(error) !== "EEXIST") {
      if (t(`[TeammateMailbox] writeToMailbox: failed to create inbox file: ${error}`, {
        level: "error"
      }), !as(error)) d(error);
      return;
    }
  }
  let y;
  try {
    y = await Ri(s, {
      lockfilePath: lockfilePath_2,
      ...L
    });
    let h = await gNe(e, r),
      T = {
        ...n,
        ...pz(),
        type: "message",
        read: !1
      };
    h.push(T), I().record(s, T);
    try {
      await Qt().atomicWrite(s, b(h, null, 2));
    } catch (error) {
      throw I().retire(s, T.msg_id === void 0 ? [] : [T.msg_id]), error;
    }
    return t(`[TeammateMailbox] Wrote message to ${e}'s inbox from ${n.from}`), T.msg_id;
  } catch (error) {
    if (t(`Failed to write to inbox for ${e}: ${error}`, {
      level: "error"
    }), !as(error)) d(error);
    return;
  } finally {
    await $m(y, `[TeammateMailbox] writeToMailbox(${e})`);
  }
}
function Et(e, n) {
  let r = e.findIndex(item => !item.read && item.from === n.from && item.timestamp === n.timestamp && item.text === n.text);
  return {
    messages: (r === -1 ? e : e.toSpliced(r, 1)).filter(item => !item.read),
    found: r !== -1
  };
}
async function V1n(e, n, r, i) {
  let c = YL(e, n);
  t(`[TeammateMailbox] markSingleMessageAsRead called: agentName=${e}, teamName=${n}, target=${r.from}@${r.timestamp}, path=${c}`);
  let g = H() && i !== void 0 ? W(e, n) : void 0;
  if (H() && i !== void 0 && g !== void 0) {
    try {
      let y = await K(i, g, c, h => {
        if (!h.found) return {
          skip: !0,
          result: "absent"
        };
        let T = Et(h.messages, r);
        return {
          messages: T.messages,
          result: T.found
        };
      });
      t(y === "absent" ? `[TeammateMailbox] markSingleMessageAsRead: file does not exist at ${c}` : `[TeammateMailbox] markSingleMessageAsRead: dropped target (${y ? "found" : "not found"}) at ${c}`);
    } catch (error) {
      t(`[TeammateMailbox] markSingleMessageAsRead FAILED for ${e}: ${error}`), d(error);
    }
    return;
  }
  let lockfilePath_3 = `${c}.lock`,
    k;
  try {
    k = await Ri(c, {
      lockfilePath: lockfilePath_3,
      ...L
    });
    let y = await gNe(e, n),
      h = [...y],
      T = y.findIndex(item => !item.read && item.from === r.from && item.timestamp === r.timestamp && item.text === r.text);
    if (T !== -1) y.splice(T, 1);
    let x = y.filter(item => !item.read);
    await Qt().atomicWrite(c, b(x, null, 2)), q(c, h, x), t(`[TeammateMailbox] markSingleMessageAsRead: dropped target (${T === -1 ? "not found" : "found"}); ${x.length} remain at ${c}`);
  } catch (error) {
    if (v(error) === "ENOENT") {
      I().forget(c), t(`[TeammateMailbox] markSingleMessageAsRead: file does not exist at ${c}`);
      return;
    }
    t(`[TeammateMailbox] markSingleMessageAsRead FAILED for ${e}: ${error}`), d(error);
  } finally {
    await $m(k, "[TeammateMailbox] markSingleMessageAsRead");
  }
}
var Sge = 5;
function e0(e) {
  return `${e.from}|${e.timestamp}|${e.text}`;
}
async function wge(e, n, r, i) {
  let c = YL(e, n);
  t(`[TeammateMailbox] markMessagesAsRead called: agentName=${e}, teamName=${n}, path=${c}`);
  let g = H() && i !== void 0 ? W(e, n) : void 0;
  if (H() && i !== void 0 && g !== void 0) {
    let y = r === void 0 ? null : new Set(r.map(e0));
    try {
      let h = await K(i, g, c, T => {
        if (!T.found || T.messages.length === 0) return {
          skip: !0,
          result: null
        };
        let messages = T.messages.filter(item => !item.read && y !== null && !y.has(e0(item)));
        return {
          messages: messages,
          result: {
            pruned: T.messages.length - messages.length,
            remain: messages.length
          }
        };
      });
      return t(h ? `[TeammateMailbox] markMessagesAsRead: pruned ${h.pruned} delivered message(s), ${h.remain} remain at ${c}` : "[TeammateMailbox] markMessagesAsRead: no messages to mark"), !0;
    } catch (error) {
      return t(`[TeammateMailbox] markMessagesAsRead FAILED for ${e}: ${error}`), d(error), !1;
    }
  }
  let lockfilePath_4 = `${c}.lock`,
    k;
  try {
    t("[TeammateMailbox] markMessagesAsRead: acquiring lock..."), k = await Ri(c, {
      lockfilePath: lockfilePath_4,
      ...L
    }), t("[TeammateMailbox] markMessagesAsRead: lock acquired");
    let y = await gNe(e, n, void 0, {
      throwOnUnknownReadError: !0
    });
    if (t(`[TeammateMailbox] markMessagesAsRead: read ${y.length} messages after lock`), y.length === 0) return q(c, y, y), t("[TeammateMailbox] markMessagesAsRead: no messages to mark"), !0;
    let h = U(y, w => !w.read);
    t(`[TeammateMailbox] markMessagesAsRead: ${h} unread of ${y.length} total`);
    let T = r === void 0 ? null : new Set(r.map(e0)),
      x = y.filter(item => !item.read && T !== null && !T.has(e0(item)));
    return await Qt().atomicWrite(c, b(x, null, 2)), q(c, y, x), t(`[TeammateMailbox] markMessagesAsRead: pruned ${y.length - x.length} delivered message(s), ${x.length} remain at ${c}`), !0;
  } catch (error) {
    if (v(error) === "ENOENT") return I().forget(c), t(`[TeammateMailbox] markMessagesAsRead: file does not exist at ${c}`), !0;
    return t(`[TeammateMailbox] markMessagesAsRead FAILED for ${e}: ${error}`), d(error), !1;
  } finally {
    await $m(k, "[TeammateMailbox] markMessagesAsRead");
  }
}
async function Csn(e, n, r) {
  let i = YL(e, n),
    c = H() && r !== void 0 ? W(e, n) : void 0;
  if (H() && r !== void 0 && c !== void 0) {
    try {
      if (await K(r, c, i, y => y.found ? {
        messages: [],
        result: !0
      } : {
        skip: !0,
        result: !1
      })) t(`[TeammateMailbox] Cleared inbox for ${e}`);
    } catch (error) {
      t(`Failed to clear inbox for ${e}: ${error}`), d(error);
    }
    return;
  }
  let lockfilePath_5 = `${i}.lock`,
    s;
  try {
    s = await Ri(i, {
      lockfilePath: lockfilePath_5,
      ...L
    }), await Qt().atomicWrite(i, "[]"), I().forget(i), t(`[TeammateMailbox] Cleared inbox for ${e}`);
  } catch (error) {
    if (v(error) === "ENOENT") {
      I().forget(i);
      return;
    }
    t(`Failed to clear inbox for ${e}: ${error}`), d(error);
  } finally {
    await $m(s, "[TeammateMailbox] clearMailbox");
  }
}
function l0t(e) {
  let n = EF(e.color) ? ` color="${e.color}"` : "",
    r = j9(e.summary),
    i = r ? ` summary="${Do(r)}"` : "",
    c = Tm(e.from, ib) || jy,
    g = e.provenance === "forged" ? ' verified="false"' : "",
    s = YYe(e.text);
  if (s !== e.text) for (let k = 0; k < 4; k++) {
    let y = YYe(NV(s, e.from));
    if (y === s) break;
    s = y;
  }
  return `<${sH} teammate_id="${Do(c)}"${n}${i}${g}>
${s}
</${sH}>`;
}
function XEe(e, n) {
  let i = i2o(e).map(item => l0t(n.recipientIsLead || item.provenance === "forged" ? item : {
    ...item,
    text: Sat(item.text, item.from)
  })).join(`

`);
  return n.recipientIsLead ? i3e(i, {
    midTurn: !1
  }) : i;
}
var Iee = f(() => u({
    type: A("idle_notification"),
    from: o(),
    timestamp: o(),
    idleReason: z(["available", "interrupted", "failed"]).optional(),
    summary: o().optional(),
    completedTaskId: o().optional(),
    completedStatus: z(["resolved", "blocked", "failed"]).optional(),
    failureReason: o().optional(),
    result: o().optional()
  })),
  bound_4 = 200,
  ZEo = 200;
function j9(e) {
  let n = e ? xr(e).trim() : "";
  return W9(n, ZEo);
}
function c0t(e) {
  let n = e ? xr(e).trim() : "";
  return PB(re(n, bound_4));
}
var bound = 40000;
function kF(e, n) {
  if (!e) return "";
  let r = PB(e),
    i = re(r, n);
  if (i.length >= r.length) return r;
  return `${PB(i)}
[truncated for display]`;
}
var bound_2 = 4000,
  eTo = 16000;
function r2o(e, n = !0) {
  let r = e ? nt(e) : "";
  if (!r) return "";
  let i = re(r, bound_2);
  if (i.length >= r.length) return i;
  let c = PB(i);
  return n ? `${c}
[result truncated \u2014 ask the agent for the rest via ${lo}]` : `${c}
[result truncated]`;
}
var Ze = 200,
  bound_3 = ZEo * 2 + 16,
  ib = 256,
  V = 256,
  xe = 4,
  H4e = bound_2 + Ze + bound_3 + bound_4 + 3 * ib + 1024;
function ee(e, n) {
  if (typeof e === "string") return W9(e, V);
  if (e === null || typeof e !== "object") return e;
  if (n <= 0) return null;
  if (Array.isArray(e)) return e.map(item => ee(item, n - 1));
  let r = [];
  for (let [i, c] of Object.entries(e)) r.push([W9(i, V), ee(c, n - 1)]);
  return Object.fromEntries(r);
}
function Asn(e, n) {
  let r = PB(e);
  if (re(r, bound_2 + Ze).length >= r.length) return r;
  let c = PB(re(r, bound_2));
  return n ? `${c}
[result truncated \u2014 ask the agent for the rest via ${lo}]` : `${c}
[result truncated]`;
}
var Je = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,9})?(?:Z|[+-]\d{2}:\d{2})$/,
  mxr = "[invalid timestamp]",
  xsn = "[invalid id]",
  yNe = "[display sanitized; the agent reads the raw frame]",
  jy = "[unknown sender]",
  Rt = /^perm-[0-9]{1,20}-[0-9a-z]{1,12}$/,
  Pt = /^(?:shutdown|plan_approval)-[0-9]{1,20}@[^@\n]{1,300}(?:@[^@\n]{1,300})?$/u,
  vt = 320;
function At(e) {
  return !e.includes(`
`) && !e.includes("\r") && PB(e) === e && [...e].length <= vt && (Rt.test(e) || Pt.test(e)) ? e : xsn;
}
var $t = /^(%[0-9]{1,10}|[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12})$/;
function It(e) {
  return $t.test(e) ? e : xsn;
}
var zt = {
  tmux: !0,
  iterm2: !0,
  "in-process": !0
};
function Ft(e) {
  return Object.hasOwn(zt, e) ? e : xsn;
}
function Ve(text, idle, r) {
  let result = typeof idle.result === "string" && idle.result ? Asn(idle.result, idle.idleReason !== "failed") : idle.result,
    summary_3 = typeof idle.summary === "string" && idle.summary ? W9(idle.summary, bound_3) : idle.summary,
    failureReason = typeof idle.failureReason === "string" && idle.failureReason ? c0t(idle.failureReason) : idle.failureReason,
    s = typeof idle.from === "string" && idle.from ? Tm(idle.from, ib) : idle.from,
    k = typeof r === "string" ? Tm(r, ib) || jy : void 0,
    y = k !== void 0 && typeof s === "string" && s !== k ? k : s,
    timestamp = typeof idle.timestamp === "string" && Je.test(idle.timestamp) ? idle.timestamp : mxr,
    completedTaskId = typeof idle.completedTaskId === "string" && idle.completedTaskId ? Tm(idle.completedTaskId, ib) : idle.completedTaskId,
    x = J(text),
    w = x !== null && typeof x === "object" && !Array.isArray(x) ? x : {
      ...idle
    },
    E = new Set(Object.keys(Iee().shape)),
    F = [];
  for (let [R, D] of Object.entries(w)) {
    if (E.has(R)) {
      F.push([R, D]);
      continue;
    }
    let te = W9(R, V);
    if (E.has(te)) continue;
    F.push([te, ee(D, xe)]);
  }
  let de = Object.fromEntries(F),
    N = {
      result: result,
      summary: summary_3,
      failureReason: failureReason,
      from: y,
      timestamp: timestamp,
      completedTaskId: completedTaskId
    },
    idle_2 = {
      ...idle,
      ...N
    },
    text_2 = b({
      ...de,
      ...N
    });
  if (text_2.length > H4e) text_2 = b(idle_2);
  let we = !1;
  while (text_2.length > H4e) {
    let R,
      D = 0;
    for (let key of ["result", "summary", "failureReason"]) {
      let value = idle_2[key];
      if (typeof value === "string" && value) {
        let Ee = b(value).length;
        if (Ee > D) R = {
          key: key,
          value: value
        }, D = Ee;
      }
    }
    if (!R) break;
    let te = [...R.value].length;
    we ||= R.key === "result", idle_2 = {
      ...idle_2,
      [R.key]: PB(re(R.value, Math.floor(te / 2)))
    }, text_2 = b(idle_2);
  }
  if (we && idle_2.result) {
    let R = {
        ...idle_2,
        result: `${idle_2.result}
[result truncated]`
      },
      D = b(R);
    if (D.length <= H4e) idle_2 = R, text_2 = D;
  }
  return text_2 === text ? {
    text: text,
    idle: idle
  } : {
    text: text_2,
    idle: idle_2
  };
}
function et(e, n) {
  let r = PB(e),
    i = re(r, n);
  if (i.length >= r.length) return r;
  return `${PB(i)}
[truncated]`;
}
var Dt = 1024,
  Ot = 2048,
  o2o = new Map([["plan_approval_request", {
    from: {
      kind: "envelope-pinned-id"
    },
    timestamp: {
      kind: "timestamp"
    },
    planFilePath: {
      kind: "id"
    },
    planContent: {
      kind: "body",
      bound: bound
    },
    requestId: {
      kind: "request-id"
    }
  }], ["plan_approval_response", {
    requestId: {
      kind: "request-id"
    },
    approved: {
      kind: "generic"
    },
    feedback: {
      kind: "body",
      bound: bound_2
    },
    timestamp: {
      kind: "timestamp"
    },
    permissionMode: {
      kind: "generic"
    }
  }], ["shutdown_request", {
    requestId: {
      kind: "request-id"
    },
    from: {
      kind: "envelope-pinned-id"
    },
    reason: {
      kind: "body",
      bound: bound_3
    },
    timestamp: {
      kind: "timestamp"
    }
  }], ["shutdown_approved", {
    requestId: {
      kind: "request-id"
    },
    from: {
      kind: "envelope-pinned-id"
    },
    timestamp: {
      kind: "timestamp"
    },
    paneId: {
      kind: "pane-id"
    },
    backendType: {
      kind: "backend-type"
    }
  }], ["shutdown_rejected", {
    requestId: {
      kind: "request-id"
    },
    from: {
      kind: "envelope-pinned-id"
    },
    reason: {
      kind: "body",
      bound: bound_3
    },
    timestamp: {
      kind: "timestamp"
    }
  }], ["task_assignment", {
    taskId: {
      kind: "id"
    },
    subject: {
      kind: "line"
    },
    description: {
      kind: "body",
      bound: bound_2
    },
    assignedBy: {
      kind: "envelope-pinned-id"
    },
    timestamp: {
      kind: "timestamp"
    }
  }], ["task_completed", {
    from: {
      kind: "envelope-pinned-id"
    },
    taskId: {
      kind: "id"
    },
    taskSubject: {
      kind: "line"
    },
    timestamp: {
      kind: "timestamp"
    }
  }], ["teammate_terminated", {
    message: {
      kind: "body",
      bound: bound_2
    }
  }], ["idle_notification", {
    from: {
      kind: "envelope-pinned-id"
    },
    timestamp: {
      kind: "timestamp"
    },
    idleReason: {
      kind: "generic"
    },
    summary: {
      kind: "line"
    },
    completedTaskId: {
      kind: "id"
    },
    completedStatus: {
      kind: "generic"
    },
    failureReason: {
      kind: "body",
      bound: bound_4
    },
    result: {
      kind: "body",
      bound: bound_2
    }
  }]]);
function Psn(e, n) {
  if (!tt.test(e)) return null;
  let r;
  try {
    r = J(e);
  } catch {
    return null;
  }
  if (!G(r)) return null;
  let i = r,
    c = i.type,
    g = typeof c === "string" ? o2o.get(c) : void 0;
  if (!g) return null;
  let s = new Set(Object.keys(g)),
    k = [],
    y = 0;
  for (let [T, x] of Object.entries(i)) {
    if (T === "type") {
      k.push([T, c]);
      continue;
    }
    if (s.has(T)) {
      k.push([T, Ct(g[T], x, n)]);
      continue;
    }
    let w = W9(T, V);
    if (w === "type" || s.has(w)) continue;
    let E = ee(x, xe),
      F = b(E).length + w.length;
    if (y + F > Ot) continue;
    y += F, k.push([w, E]);
  }
  let h = b(Object.fromEntries(k));
  return h === e ? null : h;
}
function Ct(e, n, r) {
  if (e.kind === "generic") {
    let i = typeof n === "string" ? W9(n, V) : ee(n, xe);
    if (i !== null && typeof i === "object" && b(i).length > Dt) return null;
    return i;
  }
  if (typeof n !== "string") switch (e.kind) {
    case "envelope-pinned-id":
      return (typeof r === "string" ? Tm(r, ib) || jy : void 0) ?? xsn;
    case "id":
    case "request-id":
    case "pane-id":
    case "backend-type":
      return xsn;
    case "timestamp":
      return mxr;
    case "line":
    case "body":
      return "";
  }
  switch (e.kind) {
    case "id":
      return Tm(n, ib);
    case "request-id":
      return At(n);
    case "pane-id":
      return It(n);
    case "backend-type":
      return Ft(n);
    case "envelope-pinned-id":
      {
        let i = Tm(n, ib),
          c = typeof r === "string" ? Tm(r, ib) || jy : void 0;
        return c !== void 0 && i !== c ? c : i;
      }
    case "timestamp":
      return Je.test(n) ? n : mxr;
    case "line":
      return Tm(n, bound_3);
    case "body":
      return et(n, e.bound);
  }
}
function s2o(e, n) {
  let r = Date.parse(e.timestamp);
  return Number.isNaN(r) ? Number.NEGATIVE_INFINITY : Math.min(r, n);
}
function i2o(e) {
  if (weakSet_2.has(e)) return e;
  let n = e.slice(),
    r = [],
    i = Date.now();
  for (let index = 0; index < n.length; index++) {
    let k = gat(n[index].text);
    if (!k) {
      let text_3 = Psn(n[index].text, n[index].from);
      if (text_3 !== null) n[index] = {
        ...n[index],
        text: text_3
      };
      continue;
    }
    let y = Ve(n[index].text, k, n[index].from);
    if (y.text !== n[index].text) n[index] = {
      ...n[index],
      text: y.text
    };
    let idle_3 = y.idle;
    if (typeof idle_3.result === "string" && idle_3.result) r.push({
      index: index,
      recency: s2o(idle_3, i),
      idle: idle_3
    });
  }
  r.sort((itemA, itemB) => itemB.recency - itemA.recency || itemB.index - itemA.index);
  let c = eTo,
    g = 0;
  for (let {
    index: index_2,
    idle: idle_4
  } of r) {
    let y = n[index_2];
    if (y.text.length <= c) {
      c -= y.text.length;
      continue;
    }
    let h = idle_4.idleReason === "failed" ? "" : `; ask the agent for it via ${lo}`,
      T = {
        type: "idle_notification",
        from: idle_4.from,
        timestamp: idle_4.timestamp,
        idleReason: idle_4.idleReason,
        summary: idle_4.summary,
        completedTaskId: idle_4.completedTaskId,
        completedStatus: idle_4.completedStatus,
        failureReason: idle_4.failureReason
      },
      text_4 = b({
        ...T,
        result: `[result truncated \u2014 this drain's results exceeded ${eTo} characters${h}]`
      });
    if (text_4.length > c) text_4 = b({
      ...T,
      result: "[result truncated]"
    });
    if (text_4.length >= y.text.length) {
      c = Math.max(0, c - y.text.length);
      continue;
    }
    if (c = Math.max(0, c - text_4.length), text_4 !== y.text) g++, n[index_2] = {
      ...y,
      text: text_4
    };
  }
  if (g > 0 && !weakSet.has(e)) weakSet.add(e), p("swarm_idle_result_delivery", "budget_truncated");
  if (n.every((item, index) => item === e[index])) return weakSet_2.add(e), e;
  return weakSet_2.add(n), n;
}
var weakSet = new WeakSet(),
  weakSet_2 = new WeakSet();
function mat(e, n) {
  let result_2 = r2o(n?.result, n?.senderReachable ?? n?.idleReason !== "failed") || void 0;
  return {
    type: "idle_notification",
    from: e,
    timestamp: new Date().toISOString(),
    idleReason: n?.idleReason,
    summary: n?.summary ? PB(n.summary) : void 0,
    completedTaskId: n?.completedTaskId,
    completedStatus: n?.completedStatus,
    failureReason: c0t(n?.failureReason ? PB(n.failureReason) : void 0) || void 0,
    result: result_2
  };
}
function F4e(e, n, r) {
  if (e.result === void 0) return;
  if (r === void 0) m("swarm_idle_result_delivery", "mailbox_write_failed");else if (n !== void 0 && e.result === nt(n)) _("swarm_idle_result_delivery");else p("swarm_idle_result_delivery", "per_frame_truncated");
}
var qt = /[\u0000-\u0008\u000B-\u001F\u007F-\u009F\u2028\u2029]|(?![\u200C\u200D\uFE00-\uFE0F\u{E0100}-\u{E01EF}])[\p{Cf}\p{Default_Ignorable_Code_Point}]/u,
  regExp_2 = new RegExp(qt.source, "gu"),
  he = /[\u200C\u200D\uFE00-\uFE0F\u{E0100}-\u{E01EF}]/gu,
  Nt = 8,
  jt = 7,
  Ut = 16,
  Lt = 4;
function Wt(e) {
  let n = (e.match(he) ?? []).length,
    r = [...e].length - n,
    i = Math.max(Ut, Math.ceil(r / Lt));
  return e.split(`
`).map(item => {
    let g = (item.match(he) ?? []).length,
      s = Math.max(Nt, Math.ceil(([...item].length - g) / jt)),
      k = 0;
    return item.replace(he, y => k++ < s && i-- > 0 ? y : "");
  }).join(`
`);
}
function PB(e) {
  return Wt(e.replace(regExp_2, ""));
}
function W9(e, n) {
  let r = PB(e),
    i = re(r, n);
  return i.length >= r.length ? i : PB(i);
}
function Tm(e, n) {
  return W9(e, n).replace(/\s+/g, " ").trim();
}
var tt = /^\s*\{/;
function NV(e, n) {
  let r = tt.test(e) ? gat(e) : null;
  if (r) return Ve(e, r, n).text;
  return Psn(e, n) ?? e;
}
function nt(e) {
  return PB(e.trim());
}
function gat(e) {
  try {
    let n = Iee().safeParse(J(e));
    return n.success ? n.data : null;
  } catch {}
  return null;
}
var tTo = f(() => u({
    tool_use_id: o(),
    tool_name: o(),
    input_digest: o()
  })),
  a2o = f(() => Qo("subtype", [u({
    type: A("permission_response"),
    request_id: o().min(1),
    subtype: A("success"),
    tool_use_id: o().optional(),
    approved_request: tTo().optional(),
    response: u({
      updated_input: fe(o(), ae()).optional(),
      permission_updates: C(ae()).optional()
    }).optional()
  }), u({
    type: A("permission_response"),
    request_id: o().min(1),
    subtype: A("error"),
    tool_use_id: o().optional(),
    approved_request: tTo().optional(),
    error: o()
  })]));
function gxr(e) {
  return {
    type: "permission_request",
    request_id: e.request_id,
    agent_id: e.agent_id,
    tool_name: e.tool_name,
    tool_use_id: e.tool_use_id,
    description: e.description,
    input: e.input,
    permission_suggestions: e.permission_suggestions || []
  };
}
function hxr(e) {
  if (e.subtype === "error") return {
    type: "permission_response",
    request_id: e.request_id,
    subtype: "error",
    tool_use_id: e.tool_use_id,
    approved_request: e.approved_request,
    error: e.error || "Permission denied"
  };
  return {
    type: "permission_response",
    request_id: e.request_id,
    subtype: "success",
    tool_use_id: e.tool_use_id,
    approved_request: e.approved_request,
    response: {
      updated_input: e.updated_input,
      permission_updates: e.permission_updates
    }
  };
}
function q1n(e) {
  try {
    let n = J(e);
    if (n && n.type === "permission_request") return n;
  } catch {}
  return null;
}
function hat(e) {
  let n;
  try {
    n = J(e);
  } catch {
    return null;
  }
  if (n === null || typeof n !== "object" || !("type" in n) || n.type !== "permission_response") return null;
  let r = a2o().safeParse(n);
  if (r.success) return r.data;
  return t(`[TeammateMailbox] Dropping malformed permission_response frame: ${r.error.issues.map(item => `${item.path.join(".")}: ${item.message}`).join("; ")}`, {
    level: "warn"
  }), null;
}
function yxr(e) {
  return {
    type: "sandbox_permission_request",
    requestId: e.requestId,
    workerId: e.workerId,
    workerName: e.workerName,
    workerColor: e.workerColor,
    hostPattern: {
      host: e.host
    },
    createdAt: Date.now()
  };
}
function _xr(e) {
  return {
    type: "sandbox_permission_response",
    requestId: e.requestId,
    host: e.host,
    allow: e.allow,
    timestamp: new Date().toISOString()
  };
}
function K1n(e) {
  try {
    let n = J(e);
    if (n && n.type === "sandbox_permission_request") return n;
  } catch {}
  return null;
}
function Y1n(e) {
  try {
    let n = J(e);
    if (n && n.type === "sandbox_permission_response") return n;
  } catch {}
  return null;
}
var X1n = f(() => u({
    type: A("plan_approval_request"),
    from: o(),
    timestamp: o(),
    planFilePath: o(),
    planContent: o(),
    requestId: o()
  })),
  J1n = f(() => u({
    type: A("plan_approval_response"),
    requestId: o(),
    approved: M(),
    feedback: o().optional(),
    timestamp: o(),
    permissionMode: Umn().optional()
  })),
  Q1n = f(() => u({
    type: A("shutdown_request"),
    requestId: o(),
    from: o(),
    reason: o().optional(),
    timestamp: o()
  })),
  yat = f(() => u({
    type: A("shutdown_approved"),
    requestId: o(),
    from: o(),
    timestamp: o(),
    paneId: o().optional(),
    backendType: o().optional()
  }));
var bxr = f(() => u({
  type: A("shutdown_rejected"),
  requestId: o(),
  from: o(),
  reason: o(),
  timestamp: o()
}));
function Sxr(e) {
  return {
    type: "shutdown_request",
    requestId: e.requestId,
    from: e.from,
    reason: e.reason,
    timestamp: new Date().toISOString()
  };
}
function wxr(e) {
  return {
    type: "shutdown_approved",
    requestId: e.requestId,
    from: e.from,
    timestamp: new Date().toISOString(),
    paneId: e.paneId,
    backendType: e.backendType
  };
}
function vxr(e) {
  return {
    type: "shutdown_rejected",
    requestId: e.requestId,
    from: e.from,
    reason: e.reason,
    timestamp: new Date().toISOString()
  };
}
function $4e(e) {
  try {
    let n = Q1n().safeParse(J(e));
    if (n.success) return n.data;
  } catch {}
  return null;
}
function Isn(e) {
  try {
    let n = X1n().safeParse(J(e));
    if (n.success) return n.data;
  } catch {}
  return null;
}
function vge(e) {
  try {
    let n = yat().safeParse(J(e));
    if (n.success) return n.data;
  } catch {}
  return null;
}
var l2o = !0;
function d0t(e, n) {
  if (!e) return l2o ? "unbound" : "mismatch";
  if (e.answered) return "already_answered";
  return e.requestId === n.requestId ? "bound" : "mismatch";
}
function u0t(e) {
  return {
    type: "plan_approval_response",
    requestId: e.requestId,
    approved: !1,
    feedback: "The team lead's verdict was for a different request, not this plan. Call ExitPlanMode again to resubmit it for approval.",
    timestamp: e.timestamp
  };
}
function p0t(e) {
  try {
    let n = J1n().safeParse(J(e));
    if (n.success) return n.data;
  } catch {}
  return null;
}
var Kt = f(() => u({
  type: A("task_assignment"),
  taskId: o(),
  subject: o(),
  description: o(),
  assignedBy: o(),
  timestamp: o()
}));
function kxr(e) {
  return jT(Kt(), e);
}
var _at = f(() => u({
    type: A("task_completed"),
    from: o().optional(),
    taskId: o(),
    taskSubject: o().optional(),
    timestamp: o().optional()
  })),
  Z1n = f(() => u({
    type: A("teammate_terminated"),
    message: o()
  }));
function jT(e, n) {
  try {
    let r = e.strict().safeParse(J(n));
    if (r.success) return r.data;
  } catch {}
  return null;
}
function bat(e) {
  return e.filter(item => {
    let r = item;
    if (!G(r)) return !1;
    if (r.provenance === "forged") return !0;
    if (r.summary !== void 0 && typeof r.summary !== "string") return !0;
    if (j9(r.summary)) return !0;
    if (typeof r.text !== "string") return !0;
    return !jT(yat(), r.text);
  });
}
function Exr(e) {
  try {
    let n = J(e);
    return !!n && n.type === "team_permission_update";
  } catch {
    return !1;
  }
}
function f0t(e) {
  try {
    let n = J(e);
    return !!n && n.type === "mode_set_request";
  } catch {
    return !1;
  }
}
var Txr = "Teammate prompt must not be a mailbox protocol frame (permission/mode/plan/shutdown JSON) \u2014 pass plain-text instructions";
function oI(e) {
  try {
    let n = J(e);
    if (!n || typeof n !== "object" || !("type" in n)) return !1;
    let r = n.type;
    return r === "permission_request" || r === "permission_response" || r === "sandbox_permission_request" || r === "sandbox_permission_response" || r === "shutdown_request" || r === "shutdown_response" || r === "shutdown_approved" || r === "team_permission_update" || r === "mode_set_request" || r === "plan_approval_request" || r === "plan_approval_response";
  } catch {
    return !1;
  }
}
function m0t(e) {
  let n = e.feedback ? et(e.feedback, bound_2) : "";
  if (e.approved) return n ? `[Plan Approved] ${n}` : "[Plan Approved] You can now proceed with implementation";
  return `[Plan Rejected] ${n || "Please revise your plan"}`;
}
var Ht = /^shutdown-[0-9]{1,20}@[\w.-]{1,64}$/,
  Gt = "<requestId of the shutdown request>";
function c2o(e) {
  let n = Ht.test(e),
    r = b({
      to: to,
      message: {
        type: "shutdown_response",
        request_id: n ? e : Gt,
        approve: !0
      }
    });
  return `To approve it, call ${lo} with exactly this input, where "message" is a JSON object rather than a string${n ? "" : " and request_id is the request's requestId value, copied verbatim"}: ${r}. Approving ends your process; a plain-text acknowledgment does not shut you down. To decline, for example because you're mid-task, send the same input with "approve": false and a "reason".`;
}
function Sat(e, n) {
  if (n !== to || !e.includes('"shutdown_request"')) return e;
  let r = $4e(e);
  return r ? `${e}

This is a shutdown request. ${c2o(r.requestId)}` : e;
}
function Cxr(e) {
  return !oI(e) || vge(e) !== null || $4e(e) !== null || Isn(e) !== null;
}
async function g0t(e, n, r, i) {
  let c = YL(e, r),
    g = H() && i !== void 0 ? W(e, r) : void 0;
  if (H() && i !== void 0 && g !== void 0) try {
    return await K(i, g, c, y => !y.found || y.messages.length === 0 ? {
      skip: !0,
      result: void 0
    } : {
      messages: y.messages.filter(item => !item.read && !n(item)),
      result: void 0
    }), !0;
  } catch (error) {
    return d(error), !1;
  }
  let lockfilePath_6 = `${c}.lock`,
    k;
  try {
    k = await Ri(c, {
      lockfilePath: lockfilePath_6,
      ...L
    });
    let y = await gNe(e, r, void 0, {
      throwOnUnknownReadError: !0
    });
    if (y.length === 0) return q(c, y, y), !0;
    let h = y.filter(item => !item.read && !n(item));
    return await Qt().atomicWrite(c, b(h, null, 2)), q(c, y, h), !0;
  } catch (error) {
    if (v(error) === "ENOENT") return I().forget(c), !0;
    return d(error), !1;
  } finally {
    await $m(k, "[TeammateMailbox] markMessagesAsReadByPredicate");
  }
}
function Osn(e) {
  return e.type === "user" && e.isMeta !== !0 && e.turnCompanion !== !0 && (typeof e.message.content === "string" || !e.message.content.some(item => item.type === "tool_result"));
}
function Rxr(e) {
  for (let n = e.length - 1; n >= 0; n--) {
    let r = e[n];
    if (!r) continue;
    if (Osn(r)) break;
    if (r.type !== "assistant") continue;
    for (let i of r.message.content) if (i.type === "tool_use" && i.name === lo && typeof i.input === "object" && i.input !== null && "to" in i.input && typeof i.input.to === "string" && i.input.to !== "*" && i.input.to !== to && i.input.to !== Om) {
      let c = "message" in i.input ? i.input.message : void 0,
        g = "summary" in i.input && typeof i.input.summary === "string" ? i.input.summary : void 0,
        s = G1n(i.input);
      if (s !== void 0) return `[to ${j9(i.input.to)}] ${j9(s.summary.length > 0 ? s.summary : s.message.trim())}`;
      if (typeof c === "string") return `[to ${j9(i.input.to)}] ${j9(g !== void 0 ? g : re(c, 80))}`;
    }
  }
  return;
}
export { qEo, KEo, fat, dxr, fv, YEo, kR, BT, KM, XEo, a0t, JEo, jae, YEe, z1n, rx, uxr, QEo, N4e, G1n, Tsn, pxr, Wae, Y3o, n2o, YL, gNe, hNe, S_, V1n, Sge, e0, wge, Csn, l0t, XEe, Iee, bound_4 as fxr, ZEo, j9, c0t, bound as Rsn, kF, bound_2 as xB, eTo, r2o, bound_3 as t0, ib, H4e, Asn, mxr, xsn, yNe, jy, o2o, Psn, s2o, i2o, mat, F4e, PB, W9, Tm, NV, gat, tTo, a2o, gxr, hxr, q1n, hat, yxr, _xr, K1n, Y1n, X1n, J1n, Q1n, yat, bxr, Sxr, wxr, vxr, $4e, Isn, vge, l2o, d0t, u0t, p0t, kxr, _at, Z1n, jT, bat, Exr, f0t, Txr, oI, m0t, c2o, Sat, Cxr, g0t, Osn, Rxr };