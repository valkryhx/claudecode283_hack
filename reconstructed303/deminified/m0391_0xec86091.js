// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { F, K, de } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { W } from "B:/~BUN/root/chunk-hg8ngszx.js";
import { x, d, k, Ts, o_, tz, fm } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Y } from "B:/~BUN/root/chunk-89mss1tj.js";
import { Cr, Be, Ebt } from "B:/~BUN/root/chunk-d9rmnpx3.js";
import { _, J, se, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { Pe, fet } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { ne, mk, Sr } from "B:/~BUN/root/chunk-nggrknsv.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { qW, l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { dl, zm } from "B:/~BUN/root/chunk-7c8rc0p5.js";
import { ga } from "B:/~BUN/root/chunk-vqar0j99.js";
import { _A, id } from "B:/~BUN/root/chunk-8v3gkznb.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { gn } from "B:/~BUN/root/chunk-pjgzz98k.js";
import { x8n } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { lmt } from "B:/~BUN/root/chunk-f25646gd.js";
import { Vs } from "B:/~BUN/root/chunk-cx57tr4b.js";
import { hyt, Sh, lo } from "B:/~BUN/root/chunk-e4q58xft.js";
import { _G } from "B:/~BUN/root/chunk-bvhc5fp3.js";
import { Oa as to, WMe, kyt } from "B:/~BUN/root/chunk-v6pbq6dm.js";
import { wpt } from "B:/~BUN/root/chunk-92fjqg3t.js";
import { s3 } from "B:/~BUN/root/chunk-nbprdt7j.js";
import { Rn, Byt } from "B:/~BUN/root/chunk-hwnj8m4g.js";
import { N } from "B:/~BUN/root/chunk-nkxgam12.js";
import { o, M, oe, T, u, _t, Jr, fe, U, C } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { Em, pa } from "B:/~BUN/root/chunk-wg7rg6k5.js";
import { um, yt } from "B:/~BUN/root/chunk-hz8x9zsh.js";
import { readdir as ce, readFile as Ne, unlink as be, writeFile as Q } from "fs/promises";
import { join as re } from "path";
function jOs(e) {
  if (ga().taskList.leaderTeamName === e) return;
  ga().taskList.leaderTeamName = e, q();
}
function WOs(e) {
  return ga().taskList.updated.subscribe(e);
}
function q() {
  try {
    ga().taskList.updated.emit();
  } catch {}
}
var xve = f(() => U(["pending", "in_progress", "completed"])),
  Fe = f(() => u({
    id: o(),
    subject: o(),
    description: o(),
    activeForm: o().optional(),
    owner: o().optional(),
    status: xve(),
    blocks: T(o()),
    blockedBy: T(o()),
    metadata: fe(o(), oe()).optional()
  })),
  cko = ".highwatermark",
  ze = 16,
  dt = new Set(["ELOOP", "EISDIR", "ENXIO"]);
function De(e) {
  return e.code === "AlreadyExists" || e.code === "Failed" && e.telemetryCode !== void 0 && dt.has(e.telemetryCode);
}
var pe = {
  retries: {
    retries: 30,
    minTimeout: 5,
    maxTimeout: 100
  },
  onCompromised: e => l(e)
};
function Ce(e) {
  return re(SH(e), cko);
}
async function G(e, n) {
  return (await qe(e, n)) ?? 0;
}
async function qe(e, n) {
  if (n) {
    let s = await n.read([Be.taskListHighWaterMark(aO(e))]);
    if (!s.ok) return null;
    let c = s.value.items[0];
    if (!c?.found) return 0;
    let y = parseInt(Buffer.from(c.value).toString("utf8").trim(), 10);
    return isNaN(y) ? null : y;
  }
  let r = Ce(e);
  try {
    let s = (await Ne(r, "utf8")).trim(),
      c = parseInt(s, 10);
    return isNaN(c) ? null : c;
  } catch (error) {
    return k(error) === "ENOENT" ? 0 : null;
  }
}
async function X(e, n, r) {
  if (r) {
    let c = await r.write(Be.taskListHighWaterMark(aO(e)), String(n), {
      publishDiscipline: "inPlace"
    });
    if (!c.ok) {
      let code = tz(um(c.error));
      throw Object.assign(new x(`[Tasks] high-water mark write failed: ${c.error.code}`, "tasks high-water mark v5 write failed"), code === void 0 ? {} : {
        code: code
      });
    }
    return;
  }
  let s = Ce(e);
  await Q(s, String(n), {
    encoding: "utf8"
  });
}
async function ct(e, n, r) {
  try {
    if (n > (await G(e, r))) await X(e, n, r);
  } catch (error) {
    t(`[Tasks] could not record skipped task id ${n}: ${d(error)}`);
  }
}
function iO() {
  if (a.CLAUDE_CODE_ENABLE_TASKS === !1) return !1;
  return !0;
}
async function zOs(e, n) {
  let r = SH(e),
    s;
  try {
    s = await Z(e, n);
    let c = [];
    if (n) {
      let i = await Te(n, e);
      if (i === null) return !1;
      if (c = i.filter(item => !item.startsWith(".")), c.length > 0) {
        let b = await n.read(c.map(item => B(e, item)));
        if (!b.ok) return t(`[Tasks] Failed to read task list ${e} before a reset: ${b.error.code}`), !1;
        if (b.value.items.length !== c.length) return !1;
        for (let [h, w] of b.value.items.entries()) {
          if (!w.found) continue;
          let S = me(c[h], Buffer.from(w.value).toString("utf8"));
          if (S === null) continue;
          if (S.status !== "completed") return !1;
        }
      }
    } else if ((await uD(e)).some(item => item.status !== "completed")) return !1;
    let y = n ? xe(c) : await Le(e);
    if (y > 0) {
      let i = await G(e, n);
      if (y > i) await X(e, y, n);
    }
    if (n) for (let i of c) await n.delete(Be.task(aO(e), i));else {
      let i;
      try {
        i = await ce(r);
      } catch {
        i = [];
      }
      for (let b of i) if (b.endsWith(".json") && !b.startsWith(".")) {
        let h = re(r, b);
        try {
          await be(h);
        } catch {}
      }
    }
    return q(), !0;
  } finally {
    await zm(s, "[Tasks] resetTaskList");
  }
}
function Hk() {
  if (a.CLAUDE_CODE_TASK_LIST_ID) return a.CLAUDE_CODE_TASK_LIST_ID;
  let e = _A();
  if (e) return e.teamName;
  return id() || ga().taskList.leaderTeamName || K();
}
function aO(e) {
  return e.replace(/[^a-zA-Z0-9_-]/g, "-");
}
function SH(e) {
  return re(Pe(), "tasks", aO(e));
}
function I(e, n) {
  return re(SH(e), `${aO(n)}.json`);
}
function B(e, n) {
  return Be.task(aO(e), aO(n));
}
async function Te(e, n) {
  let r = {
      namespace: "task",
      listId: aO(n)
    },
    s = [],
    c = await pa(cursor => e.listEntries(r, {
      cursor: cursor,
      skipKeyStats: !0
    }), y => {
      for (let i of y) if (i.kind === "key" && i.key.namespace === "task" && "taskId" in i.key) s.push(i.key.taskId);
    });
  switch (c.status) {
    case "done":
      return s;
    case "error":
      return t(`[Tasks] Failed to list task list ${n}: ${c.error.code}`), null;
    case "capped":
      return t(`[Tasks] Listing task list ${n} exceeded ${Em} pages; treating the listing as failed`), null;
  }
}
async function je(e, n) {
  let r = {
      namespace: "task",
      listId: aO(n)
    },
    s = [],
    c;
  try {
    c = await pa(cursor_2 => e.listEntries(r, {
      cursor: cursor_2,
      includeValue: !0
    }), i => {
      for (let b of i) {
        if (b.kind !== "key" || b.key.namespace !== "task" || !("taskId" in b.key)) continue;
        let taskId = b.key.taskId;
        if (b.value instanceof Uint8Array && taskId === aO(taskId)) s.push(me(taskId, Buffer.from(b.value).toString("utf8")));else s.push(dK(n, taskId, e));
      }
    });
  } finally {
    await Promise.allSettled(s);
  }
  switch (c.status) {
    case "done":
      break;
    case "error":
      return t(`[Tasks] Failed to list task list ${n}: ${c.error.code}`), null;
    case "capped":
      return t(`[Tasks] Listing task list ${n} exceeded ${Em} pages; treating the listing as failed`), null;
  }
  return (await Promise.all(s)).filter(item => item !== null).sort((itemA, itemB) => Number(itemA.id) - Number(itemB.id));
}
async function GOs(e, n) {
  if (W() && n !== void 0) return je(n, e);
  return uD(e);
}
async function Lnn(e, n) {
  let r = SH(e);
  try {
    if (W() && n !== void 0) {
      await n.ensureScope({
        namespace: "task",
        listId: aO(e)
      });
      return;
    }
    await se().mkdir(r);
  } catch {}
}
function xe(e) {
  let n = 0;
  for (let r of e) {
    let s = parseInt(r, 10);
    if (!isNaN(s) && s > n) n = s;
  }
  return n;
}
async function Le(e, n) {
  if (n) {
    let y = await Te(n, e);
    if (y === null) throw new x("[Tasks] Could not list the task list to determine its highest task id");
    return xe(y);
  }
  let r = SH(e),
    s;
  try {
    s = await ce(r);
  } catch {
    return 0;
  }
  let c = 0;
  for (let y of s) {
    if (!y.endsWith(".json")) continue;
    let i = parseInt(y.replace(".json", ""), 10);
    if (!isNaN(i) && i > c) c = i;
  }
  return c;
}
async function TRr(e, n) {
  let [r, s] = await Promise.all([Le(e, n), G(e, n)]);
  return Math.max(r, s);
}
async function VOs(e, n, r) {
  let s;
  try {
    s = await Z(e, r);
    let c = await TRr(e, r),
      id_2 = String(c + 1);
    if (r) for (let i = 1;; i++) {
      let b = {
          id: id_2,
          ...n
        },
        h = await r.write(B(e, id_2), _(b, null, 2), {
          precondition: {
            type: "ifAbsent"
          }
        });
      if (h.ok) break;
      if (!De(h.error)) throw new x(`[Tasks] Failed to create task ${id_2}: ${h.error.code}`, "[Tasks] v5 task create write failed");
      let w = h.error.code === "Failed" ? h.error.telemetryCode : void 0;
      if (t(`[Tasks] createTask: task id ${id_2} is held by an entry the listing did not report (${w ?? h.error.code}); taking the next id`), await ct(e, Number(id_2), r), i >= ze) throw new x(`[Tasks] Failed to create a task: could not claim a free task id after ${ze} attempts; last tried ${I(e, id_2)}, which exists and could not be claimed \u2014 the task listing may have failed, or the entry is not a task file`, "[Tasks] v5 task create gave up: no free task id");
      id_2 = String(Number(id_2) + 1);
    } else {
      let i = {
          id: id_2,
          ...n
        },
        b = I(e, id_2);
      await Q(b, _(i, null, 2), {
        encoding: "utf8"
      });
    }
    return q(), id_2;
  } finally {
    await zm(s, "[Tasks] createTask");
  }
}
function me(e, n) {
  try {
    let r = J(n),
      s = Fe().safeParse(r);
    if (!s.success) return t(`[Tasks] Task ${e} failed schema validation: ${s.error.message}`), null;
    return s.data;
  } catch (error) {
    if (t(`[Tasks] Failed to read task ${e}: ${d(error)}`), !(error instanceof SyntaxError)) l(error);
    return null;
  }
}
async function Ue(e, n, r) {
  let s = await e.read([B(n, r)]);
  if (!s.ok) return t(`[Tasks] Failed to read task ${r}: ${s.error.code}`), null;
  let c = s.value.items[0];
  if (!c.found) return null;
  return me(r, Buffer.from(c.value).toString("utf8"));
}
async function uko(e, n, r, s, {
  wholeOrNothing = !1
} = {}) {
  let y,
    written = 0,
    b = [],
    h = async () => {
      let w = 0;
      for (let S of b) {
        let E;
        try {
          if (s) {
            let R = await s.delete(B(e, S));
            E = R.ok ? void 0 : R.error.code;
          } else await be(I(e, S));
        } catch (error) {
          let v = k(error);
          E = v === "ENOENT" ? void 0 : v ?? d(error);
        }
        if (E !== void 0) w++, t(`[Tasks] restoreTaskList: task ${S} not taken back: ${E}`);
      }
      return w;
    };
  try {
    if (y = await Z(e, s), (await TRr(e, s)) > 0) return {
      restored: !1,
      written: written
    };
    for (let w of n) {
      if (s) {
        let S = await s.write(B(e, w.id), _(w, null, 2), {
          precondition: {
            type: "ifAbsent"
          }
        });
        if (S.ok) written++, b.push(w.id);else t(`[Tasks] restoreTaskList: task ${w.id} not written: ${S.error.code}`);
        continue;
      }
      try {
        await Q(I(e, w.id), _(w, null, 2), {
          encoding: "utf8",
          flag: "wx"
        }), written++, b.push(w.id);
      } catch (error) {
        t(`[Tasks] restoreTaskList: task ${w.id} not written: ${k(error) ?? "unknown"}`);
      }
    }
    if (wholeOrNothing && written < n.length) {
      let left = await h();
      return {
        restored: !1,
        written: 0,
        refused: n.length - written,
        ...(left > 0 && {
          left: left
        })
      };
    }
    await X(e, r, s);
  } catch (error) {
    if (wholeOrNothing) await h();
    throw error;
  } finally {
    await zm(y, "[Tasks] restoreTaskList");
  }
  return q(), {
    restored: !0,
    written: written
  };
}
async function qOs(e, n, r) {
  let s;
  try {
    s = await Z(e, r);
    let c = !1;
    if (r) {
      let i = await r.write(B(e, n.id), _(n, null, 2), {
        precondition: {
          type: "ifAbsent"
        }
      });
      if (!i.ok && !De(i.error)) throw new x(`[Tasks] Failed to write task ${n.id}: ${i.error.code}`, "[Tasks] v5 task write under id failed");
      c = i.ok;
    } else try {
      await Q(I(e, n.id), _(n, null, 2), {
        encoding: "utf8",
        flag: "wx"
      }), c = !0;
    } catch (error) {
      if (k(error) !== "EEXIST") throw error;
    }
    let y = Number(n.id);
    if (Number.isSafeInteger(y) && y > (await G(e, r))) await X(e, y, r);
    if (c) q();
    return c;
  } finally {
    await zm(s, "[Tasks] writeTaskUnderId");
  }
}
async function BWn(e, n, r) {
  let s;
  try {
    if (s = await Z(e, r), n <= (await G(e, r))) return !1;
    return await X(e, n, r), !0;
  } finally {
    await zm(s, "[Tasks] raiseTaskIdMark");
  }
}
async function dK(e, n, r) {
  if (r) return Ue(r, e, n);
  let s = I(e, n);
  try {
    let c = await Ne(s, "utf8"),
      y = J(c),
      i = Fe().safeParse(y);
    if (!i.success) return t(`[Tasks] Task ${n} failed schema validation: ${i.error.message}`), null;
    return i.data;
  } catch (error) {
    if (k(error) === "ENOENT") return null;
    if (t(`[Tasks] Failed to read task ${n}: ${d(error)}`, {
      level: "error"
    }), !(error instanceof SyntaxError) && !fm(error) && !o_(error)) l(error);
    return null;
  }
}
async function Ke(e, id_3, r, s) {
  if (s) return He(s, e, id_3, r);
  let c = await dK(e, id_3);
  if (!c) return null;
  let y = {
      ...c,
      ...r,
      id: id_3
    },
    i = I(e, id_3);
  return await Q(i, _(y, null, 2), {
    encoding: "utf8"
  }), q(), y;
}
var pt = 5,
  mt = wpt(50);
async function he(e, n, r, s) {
  let c = B(n, r);
  for (let y = 1;; y++) {
    let i = await e.update(c, h => {
      let w = h === void 0 ? null : me(r, Buffer.from(h.value).toString("utf8")),
        S = s(w);
      return "write" in S ? {
        write: _(S.write, null, 2),
        result: S.result
      } : {
        skip: !0,
        result: S.result
      };
    });
    if (i.ok) {
      if (i.value.written) q();
      return i.value.result;
    }
    if (!(i.error.code === "Unavailable" && i.error.telemetryCode === "LockSuspect") || y >= pt) throw t(`[Tasks] update of task ${r} failed after ${y} attempt(s): ${i.error.code}${"telemetryCode" in i.error && i.error.telemetryCode ? ` (${i.error.telemetryCode})` : ""}`), new x(`[Tasks] Failed to update task ${r}: ${i.error.code}`, "[Tasks] v5 task update write failed");
    await (i.error.retryAfterMs !== void 0 ? Y(i.error.retryAfterMs) : mt(y));
  }
}
function We(e, n, id_4) {
  return {
    ...e,
    ...n,
    id: id_4
  };
}
async function He(e, n, r, s) {
  return (await he(e, n, r, y => {
    if (!y) return {
      result: null
    };
    let i = We(y, s, r);
    return {
      write: i,
      result: i
    };
  })) ?? null;
}
async function Nfe(e, n, r, s) {
  let c = I(e, n);
  if (s) {
    if (!(await Ue(s, e, n))) return null;
    let b;
    try {
      return b = await Qe(e, n), await He(s, e, n, r);
    } finally {
      await zm(b, "[Tasks] updateTask");
    }
  }
  if (!(await dK(e, n))) return null;
  let i;
  try {
    return i = await dl(c, pe), await Ke(e, n, r);
  } finally {
    await zm(i, "[Tasks] updateTask");
  }
}
async function cDt(e, n, r) {
  let s = I(e, n);
  try {
    let c = parseInt(n, 10);
    if (!isNaN(c)) {
      let i = await G(e, r);
      if (c > i) await X(e, c, r);
    }
    if (r) {
      let i = await r.delete(B(e, n));
      if (!i.ok) return t(`[Tasks] Failed to delete task ${n}: ${i.error.code}`), !1;
      if (!i.value.existed) return !1;
    } else try {
      await be(s);
    } catch (error) {
      if (k(error) === "ENOENT") return !1;
      throw error;
    }
    let y = await uD(e, r);
    for (let i of y) {
      let blocks = i.blocks.filter(item => item !== n),
        blockedBy = i.blockedBy.filter(item => item !== n);
      if (blocks.length !== i.blocks.length || blockedBy.length !== i.blockedBy.length) await Nfe(e, i.id, {
        blocks: blocks,
        blockedBy: blockedBy
      }, r);
    }
    return q(), !0;
  } catch {
    return !1;
  }
}
async function uD(e, n) {
  if (n) return (await je(n, e)) ?? [];
  let r = SH(e),
    s;
  try {
    s = await ce(r);
  } catch {
    return [];
  }
  let c = s.filter(item => item.endsWith(".json")).map(item => item.replace(".json", ""));
  return (await Promise.all(c.map(item => dK(e, item)))).filter(item => item !== null).sort((itemA, itemB) => Number(itemA.id) - Number(itemB.id));
}
function pko(e) {
  return /^[1-9]\d*$/.test(e);
}
async function fko(e, n) {
  let r;
  if (n) r = await Te(n, e);else try {
    r = (await ce(SH(e))).filter(item => item.endsWith(".json")).map(item => item.replace(".json", ""));
  } catch (error) {
    r = k(error) === "ENOENT" ? [] : null;
  }
  if (r === null) return null;
  let s = r.filter(pko).sort((itemA, itemB) => Number(itemA) - Number(itemB)),
    c = await Promise.all(s.map(item => dK(e, item, n))),
    y = await qe(e, n);
  if (y === null) return null;
  let i = c.filter((item, index) => item?.id === s[index]);
  return {
    tasks: i.length === s.length ? i : null,
    highestId: Math.max(y, xe(r))
  };
}
function uDt(e, n) {
  let r = {
    ...e
  };
  for (let [s, c] of Object.entries(n)) if (c === null) delete r[s];else r[s] = c;
  return r;
}
async function pDt(e, n, r, s) {
  let [c, y] = await Promise.all([dK(e, n, s), dK(e, r, s)]);
  if (!c || !y) return !1;
  if (!c.blocks.includes(r)) await Nfe(e, n, {
    blocks: [...c.blocks, r]
  }, s);
  if (!y.blockedBy.includes(n)) await Nfe(e, r, {
    blockedBy: [...y.blockedBy, n]
  }, s);
  return !0;
}
async function ft(e, n) {
  await Lnn(e, n);
  let r = re(SH(e), ".lock");
  try {
    await se().mkdir(SH(e)), await Q(r, "", {
      flag: "wx"
    });
  } catch {}
  return r;
}
async function Z(e, n) {
  if (de()) return Ge(aO(e));
  let r = await ft(e, n);
  return dl(r, pe);
}
function Qe(e, n) {
  if (de()) return Ge(`${aO(e)}/${aO(n)}`);
  let r = I(e, n);
  return dl(`${r}.v5-lock-anchor`, {
    lockfilePath: `${r}.lock`,
    realpath: !1,
    ...pe
  });
}
function Ge(e) {
  return new Promise(n => {
    ga().taskList.locks.run(e, () => new Promise(r => n(async () => r())));
  });
}
async function KOs(e, n, owner, s = {}, c) {
  let y = I(e, n);
  if (!(await dK(e, n, c))) return {
    success: !1,
    reason: "task_not_found"
  };
  if (s.checkAgentBusy) return gt(e, n, owner, c);
  let b;
  try {
    if (b = c ? await Qe(e, n) : await dl(y, pe), c) {
      let v = await he(c, e, n, P => Oe(P, n, owner, void 0));
      if (v !== "needs_open_blockers") return v ?? {
        success: !1,
        reason: "task_not_found"
      };
      let O = await uD(e, c),
        ke = new Set(O.filter(item => item.status !== "completed").map(item => item.id)),
        H = await he(c, e, n, P => Oe(P, n, owner, ke));
      return H === void 0 || H === "needs_open_blockers" ? {
        success: !1,
        reason: "task_not_found"
      } : H;
    }
    let task = await dK(e, n, c);
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
    let w = await uD(e, c),
      S = new Set(w.filter(item => item.status !== "completed").map(item => item.id)),
      blockedByTasks = task.blockedBy.filter(item => S.has(item));
    if (blockedByTasks.length > 0) return {
      success: !1,
      reason: "blocked",
      task: task,
      blockedByTasks: blockedByTasks
    };
    return {
      success: !0,
      task: await Ke(e, n, {
        owner: owner
      }, c)
    };
  } catch (error) {
    return t(`[Tasks] Failed to claim task ${n}: ${d(error)}`), l(error), {
      success: !1,
      reason: "task_not_found"
    };
  } finally {
    await zm(b, "[Tasks] claimTask");
  }
}
function Oe(task_2, n, owner_2, s) {
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
    if (!s) return {
      result: "needs_open_blockers"
    };
    let blockedByTasks_2 = task_2.blockedBy.filter(item => s.has(item));
    if (blockedByTasks_2.length > 0) return {
      result: {
        success: !1,
        reason: "blocked",
        task: task_2,
        blockedByTasks: blockedByTasks_2
      }
    };
  }
  let c = We(task_2, {
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
async function gt(e, n, owner_3, s) {
  let c;
  try {
    c = await Z(e, s);
    let y = await uD(e, s),
      task_3 = y.find(item => item.id === n);
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
    let b = new Set(y.filter(item => item.status !== "completed").map(item => item.id)),
      blockedByTasks_3 = task_3.blockedBy.filter(item => b.has(item));
    if (blockedByTasks_3.length > 0) return {
      success: !1,
      reason: "blocked",
      task: task_3,
      blockedByTasks: blockedByTasks_3
    };
    let w = y.filter(item => item.status !== "completed" && item.owner === owner_3 && item.id !== n);
    if (w.length > 0) return {
      success: !1,
      reason: "agent_busy",
      task: task_3,
      busyWithTasks: w.map(item => item.id)
    };
    return {
      success: !0,
      task: await Nfe(e, n, {
        owner: owner_3
      }, s)
    };
  } catch (error) {
    return t(`[Tasks] Failed to claim task ${n} with busy check: ${d(error)}`), l(error), {
      success: !1,
      reason: "task_not_found"
    };
  } finally {
    await zm(c, "[Tasks] claimTaskWithBusyCheck");
  }
}
async function hpt(e, n, r, s, c) {
  let i = (await uD(e, c)).filter(item => item.status !== "completed" && (item.owner === n || item.owner === r));
  for (let w of i) await Nfe(e, w.id, {
    owner: void 0,
    status: "pending"
  }, c);
  if (i.length > 0) t(`[Tasks] Unassigned ${i.length} task(s) from ${r}`);
  let notificationMessage = `${r} ${s === "terminated" ? "was terminated" : "has shut down"}.`;
  if (i.length > 0) {
    let w = i.map(item => `#${item.id} "${item.subject}"`).join(", ");
    notificationMessage += ` ${i.length} task(s) were unassigned: ${w}. Use TaskList to check availability and TaskUpdate with owner to reassign them to idle teammates.`;
  }
  return {
    unassignedTasks: i.map(item => ({
      id: item.id,
      subject: item.subject
    })),
    notificationMessage: notificationMessage
  };
}
import { join as Ee } from "path";
var kt = new Set(["to", "summary", "message", "notify_when_idle"]),
  _e = "antml:",
  ge = "</summary>",
  Xe = '<parameter name="message">',
  Ye = `<${_e}parameter name="message">`,
  regExp = new RegExp(`<(?:${_e})?parameter\\b|</(?:${_e})?(?:parameter|invoke|function_calls|message)>`);
function CRr(e) {
  let n = Ze(e);
  return n !== void 0 && n.unrepaired === void 0 ? n.split : void 0;
}
function Ze(e) {
  if (!N(e)) return;
  let {
    message: message,
    summary: summary
  } = e;
  if (typeof e.to !== "string" || message !== void 0 && message !== null || typeof summary !== "string" || !Object.keys(e).every(item => kt.has(item))) return;
  let s = summary.indexOf(ge);
  while (s !== -1) {
    let c = s + ge.length;
    while (c < summary.length && /\s/.test(summary.charAt(c))) c++;
    let openerForm = summary.startsWith(Ye, c) ? "namespaced" : summary.startsWith(Xe, c) ? "bare" : void 0;
    if (openerForm !== void 0) {
      let i = openerForm === "namespaced" ? Ye : Xe,
        message_2 = summary.slice(c + i.length).trimEnd();
      if (message_2.trim().length === 0) return;
      return {
        split: {
          summary: summary.slice(0, s).trim(),
          message: message_2,
          openerForm: openerForm
        },
        unrepaired: regExp.test(message_2) ? "markup" : bt(message_2) ? "json" : void 0
      };
    }
    s = summary.indexOf(ge, s + ge.length);
  }
  return;
}
function jWn(e, {
  applySplit = !0
} = {}) {
  if (!N(e)) return null;
  let {
      message: message_3,
      summary: summary_2
    } = e,
    c = [],
    y = Ze(e),
    i = y?.unrepaired === void 0 ? y?.split : void 0;
  if (i !== void 0 && applySplit) message_3 = i.message, summary_2 = i.summary, c.push(`split_slipped_summary_${i.openerForm}`);
  if (typeof message_3 === "string" && (typeof summary_2 !== "string" || summary_2.trim().length === 0)) {
    let w = Sr(message_3.trim()).trim();
    if (w.length > 0) summary_2 = w, c.push("derive_summary");
  }
  if (typeof summary_2 === "string" && summary_2.length > Byt) summary_2 = ne(summary_2, Byt - 1) + "\u2026", c.push("truncate_summary");
  let [b] = c,
    shapeClass = y?.unrepaired !== void 0 ? `split_slipped_summary_${y.split.openerForm}_unrepaired_${y.unrepaired}` : i !== void 0 && !applySplit ? `split_slipped_summary_${i.openerForm}_detect_only` : b;
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
function bt(e) {
  let n = e.trim();
  if (!n.startsWith("{") && !n.startsWith("[")) return !1;
  try {
    let r = J(n);
    return typeof r === "object" && r !== null;
  } catch {
    return !1;
  }
}
function we(e) {
  let key = wt(e);
  return xt(`\x00k${Ebt(key)}`, {
    at: "store",
    key: key
  });
}
function YOs(e, n, r) {
  if (typeof e === "string") return n(e);
  let s = r(e.key);
  return s === void 0 ? void 0 : we(s);
}
var ye = new Map(),
  finalizationRegistry = new FinalizationRegistry(e => {
    if (ye.get(e)?.deref() === void 0) ye.delete(e);
  });
function xt(e, n) {
  let r = ye.get(e)?.deref();
  if (r !== void 0) return r;
  let s = Object.freeze({
    ...n,
    toString: () => e
  });
  return ye.set(e, new WeakRef(s)), finalizationRegistry.register(s, e), s;
}
function wt(e) {
  return Object.freeze(Object.fromEntries(Object.entries(e).filter(([, n]) => n !== void 0).map(([n, r]) => [n, Array.isArray(r) ? Object.freeze([...r]) : r])));
}
function z() {
  return ga().mailbox.ledger;
}
function mko(e, n) {
  let r = lo(e);
  return Object.values(n ?? {}).find(item => lo(item.name) === r);
}
function St(e, n) {
  if (n.isPaneTeammate) return !1;
  if (!Object.values(n.roster ?? {}).some(item => item.tmuxPaneId === "leader")) return !1;
  let s = lo(e);
  if (s === to || s === WMe || s === kyt) return !0;
  let y = mko(e, n.roster);
  return y?.tmuxPaneId === "in-process" || y?.tmuxPaneId === "leader";
}
function Pve(e, n, r) {
  let s = z(),
    c = new Set(),
    y = new Map();
  for (let i of e) if (i.msg_id !== void 0 && !c.has(i.msg_id) && s.wrote(n, i) && i.msg_id !== void 0) c.add(i.msg_id), y.set(i, "verified");else y.set(i, St(i.from, r) ? "forged" : "unverifiable");
  return y;
}
var V = {
    retries: {
      retries: 10,
      minTimeout: 5,
      maxTimeout: 100
    },
    onCompromised: e => l(e)
  },
  Ve = f(() => _t({
    type: o().optional(),
    from: o(),
    text: o(),
    timestamp: o(),
    read: M().optional(),
    color: o().optional(),
    summary: o().optional(),
    from_plugin: o().optional()
  }));
function et(e, n) {
  if (e === null || typeof e !== "object" || Array.isArray(e)) return `entry is ${e === null ? "null" : Array.isArray(e) ? "an array" : typeof e}`;
  return n.map(item => {
    let s = item.path[0],
      c = typeof s === "string" ? s : String(s),
      y = e[c],
      i = y === void 0 ? c in e ? "undefined" : "missing" : y === null ? "null" : typeof y;
    return `${c}:${item.code}:${i}`;
  }).join(", ");
}
var tt = 100,
  Mt = 2048;
function Et(e, n) {
  try {
    let r = _(n);
    return `${e}\x00${r.length}:${r.slice(0, Mt)}`;
  } catch {
    return `${e}\x00(unserializable)`;
  }
}
function Rt(e, n, r) {
  let reportedDroppedEntries = ga().mailbox.reportedDroppedEntries;
  if (reportedDroppedEntries.size >= tt) return !1;
  let c = Et(e, n);
  if (reportedDroppedEntries.has(c)) return !1;
  reportedDroppedEntries.add(c);
  let y = `[TeammateMailbox] dropped schema-invalid inbox entry (${r})`;
  if (n === null || typeof n !== "object" || Array.isArray(n)) return l(new x(y, "TeammateMailbox: dropped inbox entry that is not an object")), !0;
  let i = n.text;
  if (i === void 0) l(new x(y, "TeammateMailbox: dropped inbox entry with missing text"));else if (i === null) l(new x(y, "TeammateMailbox: dropped inbox entry with null text"));else if (typeof i !== "string") l(new x(y, "TeammateMailbox: dropped inbox entry with non-string text"));else l(new x(y, "TeammateMailbox: dropped inbox entry failing schema validation"));
  return !0;
}
function Pt(e, n) {
  let reportedDroppedEntries_2 = ga().mailbox.reportedDroppedEntries;
  if (reportedDroppedEntries_2.size >= tt) return;
  let s = `${e}\x00(not-an-array)`;
  if (reportedDroppedEntries_2.has(s)) return;
  reportedDroppedEntries_2.add(s), l(new x(`[TeammateMailbox] inbox file top level is ${n === null ? "null" : typeof n}, expected an array`, "TeammateMailbox: inbox file is not an array"));
}
function Re(e, n) {
  if (!Array.isArray(e)) return Pt(n, e), {
    valid: [],
    droppedCount: 1
  };
  let valid = [],
    droppedCount = 0;
  for (let c of e) {
    let y = Ve().safeParse(c);
    if (y.success) valid.push(c);else {
      droppedCount++;
      let i = et(c, y.error.issues);
      if (Rt(n, c, i)) t(`[TeammateMailbox] dropping schema-invalid inbox entry (${i})`, {
        level: "warn"
      });
    }
  }
  return {
    valid: valid,
    droppedCount: droppedCount
  };
}
async function Joi() {
  await Promise.all(Array.from(ga().mailbox.pendingPrunes.values()));
}
function vt(e, n, r) {
  let pendingPrunes = ga().mailbox.pendingPrunes;
  if (pendingPrunes.has(e)) return;
  let c = fJs(e, n, r).finally(() => {
    pendingPrunes.delete(e);
  });
  pendingPrunes.set(e, c);
}
async function fJs(e, n, r) {
  if (W() && n !== void 0 && r !== void 0) {
    try {
      let y = await te(n, r, e, i => i.droppedCount === 0 ? {
        skip: !0,
        result: 0
      } : {
        messages: i.messages,
        result: i.droppedCount
      }, !1);
      if (y) t(`[TeammateMailbox] pruned ${y} schema-invalid entr${y === 1 ? "y" : "ies"} at ${e}`);
    } catch (error) {
      t(`[TeammateMailbox] invalid-entry prune skipped: ${error}`);
    }
    return;
  }
  let lockfilePath = `${e}.lock`,
    c;
  try {
    c = await dl(e, {
      lockfilePath: lockfilePath,
      ...V
    });
    let y = await gn().read(e),
      {
        valid: valid_2,
        droppedCount: droppedCount_2
      } = Re(J(y), e);
    if (droppedCount_2 === 0) {
      j(e, valid_2, valid_2);
      return;
    }
    await gn().atomicWrite(e, _(valid_2, null, 2)), j(e, valid_2, valid_2), t(`[TeammateMailbox] pruned ${droppedCount_2} schema-invalid entr${droppedCount_2 === 1 ? "y" : "ies"} at ${e}`);
  } catch (error) {
    t(`[TeammateMailbox] invalid-entry prune skipped: ${error}`);
  } finally {
    await zm(c, "[TeammateMailbox] pruneInvalidMailboxEntries");
  }
}
function vj(e, n) {
  let r = n || id() || "default",
    s = aO(r),
    c = aO(e),
    y = Ee(fet(), s, "inboxes"),
    i = Ee(y, `${c}.json`);
  return t(`[TeammateMailbox] getInboxPath: agent=${e}, team=${r}, fullPath=${i}`), i;
}
async function At(e) {
  let n = e || id() || "default",
    r = aO(n),
    s = Ee(fet(), r, "inboxes");
  await gn().mkdir(s), t(`[TeammateMailbox] Ensured inbox directory: ${s}`);
}
function ee(e, n) {
  let r = aO(n || id() || "default"),
    s = aO(e);
  return Cr(r) && Cr(s) ? Be.mailbox(r, s) : void 0;
}
function $t(e, n, r) {
  return de() ? we(e) : vj(n, r);
}
function It(e, n, r) {
  let s;
  try {
    s = J(e);
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
  } = Re(s, n);
  if (r) {
    for (let i of c) if (i.type === void 0) i.type = "message";
  }
  return {
    messages: c,
    droppedCount: droppedCount_3,
    corrupt: !1
  };
}
async function te(e, n, r, s, c = !0) {
  let y,
    i = await e.updateText(n, b => {
      let h = b === void 0 ? {
          messages: [],
          droppedCount: 0
        } : It(b.value, r, c),
        w = s({
          messages: h.messages,
          droppedCount: h.droppedCount,
          found: b !== void 0
        });
      return y = {
        read: h.messages,
        remaining: "skip" in w ? h.messages : w.messages
      }, "skip" in w ? {
        skip: !0,
        result: w.result
      } : {
        write: _(w.messages, null, 2),
        result: w.result
      };
    }, {
      mode: 438 & ~process.umask()
    });
  if (!i.ok) throw t(`[TeammateMailbox] inbox update failed: ${yt(i.error)}`, {
    level: "error"
  }), Error("teammate inbox storage update failed");
  if (y !== void 0) j(r, y.read, y.remaining);
  return i.value.result;
}
function j(e, n, r) {
  let s = new Set(r),
    c = new Set();
  for (let i of n) if (!s.has(i) && i.msg_id !== void 0) c.add(i.msg_id);
  let y = new Set();
  for (let i of r) if (i.msg_id !== void 0 && !c.has(i.msg_id)) y.add(i.msg_id);
  z().retain(e, y);
}
async function S8e(e, n, r, s) {
  let c = vj(e, n);
  t(`[TeammateMailbox] readMailbox: path=${c}`);
  let y = W() && r !== void 0 ? ee(e, n) : void 0;
  try {
    let i;
    if (W() && r !== void 0 && y !== void 0) {
      let w = await r.readText([y]);
      if (!w.ok) throw t(`[TeammateMailbox] readMailbox: inbox read failed: ${yt(w.error)}`), Error("teammate inbox storage read failed");
      if (!w.value.items[0].found) return t("[TeammateMailbox] readMailbox: file does not exist"), [];
      i = w.value.items[0].value;
    } else i = await gn().read(c);
    let {
      valid: valid_3,
      droppedCount: droppedCount_4
    } = Re(J(i), c);
    if (droppedCount_4 > 0) vt(c, r, y);
    for (let w of valid_3) if (w.type === void 0) w.type = "message";
    return t(`[TeammateMailbox] readMailbox: read ${valid_3.length} message(s)` + (droppedCount_4 > 0 ? `, dropped ${droppedCount_4} invalid` : "")), valid_3;
  } catch (error) {
    if (k(error) === "ENOENT") return t("[TeammateMailbox] readMailbox: file does not exist"), [];
    if (error instanceof SyntaxError) return t(`[TeammateMailbox] readMailbox: unparseable inbox, treating as empty: ${error}`), [];
    if (s?.throwOnUnknownReadError) throw error;
    return t(`Failed to read inbox for ${e}: ${error}`), l(error), [];
  }
}
async function w8e(e, n, r) {
  let s = await S8e(e, n, r),
    c = s.filter(item => !item.read);
  return t(`[TeammateMailbox] readUnreadMessages: ${c.length} unread of ${s.length} total`), c;
}
async function Zw(e, n, r, s) {
  let c = Ve().safeParse(n);
  if (!c.success) {
    let w = et(n, c.error.issues);
    t(`[TeammateMailbox] writeToMailbox: refusing schema-invalid message for ${e} (${w})`, {
      level: "warn"
    }), l(typeof n.text !== "string" ? new x(`[TeammateMailbox] refused mailbox write (${w})`, "TeammateMailbox: refused mailbox write with non-string text") : new x(`[TeammateMailbox] refused mailbox write (${w})`, "TeammateMailbox: refused mailbox write failing schema validation"));
    return;
  }
  let y = W() && s !== void 0 ? ee(e, r) : void 0;
  if (W() && s !== void 0 && y !== void 0) {
    let w = {
        ...n,
        ...s3(),
        type: "message",
        read: !1
      },
      S = $t(y, e, r);
    try {
      return await te(s, y, S, E => (z().record(S, w), {
        messages: [...E.messages, w],
        result: !0
      })), t(`[TeammateMailbox] Wrote message to ${e}'s inbox from ${n.from}`), w.msg_id;
    } catch (error) {
      t(`Failed to write to inbox for ${e}: ${error}`, {
        level: "error"
      }), l(error);
      return;
    }
  }
  if (de()) {
    t(`[TeammateMailbox] writeToMailbox: nothing written for "${e}": this session has no disk, and the message cannot go to a store (tengu_hover_rest is off, no store was handed in, or the recipient's name is empty)`, {
      level: "error"
    });
    return;
  }
  try {
    await At(r);
  } catch (error) {
    t(`[TeammateMailbox] writeToMailbox: failed to ensure inbox dir: ${error}`, {
      level: "error"
    });
    return;
  }
  let i = vj(e, r),
    lockfilePath_2 = `${i}.lock`;
  t(`[TeammateMailbox] writeToMailbox: recipient=${e}, from=${n.from}, path=${i}`);
  try {
    await gn().writeExclusive(i, "[]"), t("[TeammateMailbox] writeToMailbox: created new inbox file");
  } catch (error) {
    if (k(error) !== "EEXIST") {
      if (t(`[TeammateMailbox] writeToMailbox: failed to create inbox file: ${error}`, {
        level: "error"
      }), !Ts(error)) l(error);
      return;
    }
  }
  let h;
  try {
    h = await dl(i, {
      lockfilePath: lockfilePath_2,
      ...V
    });
    let w = await S8e(e, r),
      S = {
        ...n,
        ...s3(),
        type: "message",
        read: !1
      };
    w.push(S), z().record(i, S);
    try {
      await gn().atomicWrite(i, _(w, null, 2));
    } catch (error) {
      throw z().retire(i, S.msg_id === void 0 ? [] : [S.msg_id]), error;
    }
    return t(`[TeammateMailbox] Wrote message to ${e}'s inbox from ${n.from}`), S.msg_id;
  } catch (error) {
    if (t(`Failed to write to inbox for ${e}: ${error}`, {
      level: "error"
    }), !Ts(error)) l(error);
    return;
  } finally {
    await zm(h, `[TeammateMailbox] writeToMailbox(${e})`);
  }
}
function zt(e, n) {
  let r = e.findIndex(item => !item.read && item.from === n.from && item.timestamp === n.timestamp && item.text === n.text);
  return {
    messages: (r === -1 ? e : e.toSpliced(r, 1)).filter(item => !item.read),
    found: r !== -1
  };
}
async function RRr(e, n, r, s) {
  let c = vj(e, n);
  t(`[TeammateMailbox] markSingleMessageAsRead called: agentName=${e}, teamName=${n}, target=${r.from}@${r.timestamp}, path=${c}`);
  let y = W() && s !== void 0 ? ee(e, n) : void 0;
  if (W() && s !== void 0 && y !== void 0) {
    try {
      let h = await te(s, y, c, w => {
        if (!w.found) return {
          skip: !0,
          result: "absent"
        };
        let S = zt(w.messages, r);
        return {
          messages: S.messages,
          result: S.found
        };
      });
      t(h === "absent" ? `[TeammateMailbox] markSingleMessageAsRead: file does not exist at ${c}` : `[TeammateMailbox] markSingleMessageAsRead: dropped target (${h ? "found" : "not found"}) at ${c}`);
    } catch (error) {
      t(`[TeammateMailbox] markSingleMessageAsRead FAILED for ${e}: ${error}`), l(error);
    }
    return;
  }
  let lockfilePath_3 = `${c}.lock`,
    b;
  try {
    b = await dl(c, {
      lockfilePath: lockfilePath_3,
      ...V
    });
    let h = await S8e(e, n),
      w = [...h],
      S = h.findIndex(item => !item.read && item.from === r.from && item.timestamp === r.timestamp && item.text === r.text);
    if (S !== -1) h.splice(S, 1);
    let E = h.filter(item => !item.read);
    await gn().atomicWrite(c, _(E, null, 2)), j(c, w, E), t(`[TeammateMailbox] markSingleMessageAsRead: dropped target (${S === -1 ? "not found" : "found"}); ${E.length} remain at ${c}`);
  } catch (error) {
    if (k(error) === "ENOENT") {
      z().forget(c), t(`[TeammateMailbox] markSingleMessageAsRead: file does not exist at ${c}`);
      return;
    }
    t(`[TeammateMailbox] markSingleMessageAsRead FAILED for ${e}: ${error}`), l(error);
  } finally {
    await zm(b, "[TeammateMailbox] markSingleMessageAsRead");
  }
}
var mOe = 5;
function wH(e) {
  return `${e.from}|${e.timestamp}|${e.text}`;
}
async function gOe(e, n, r, s) {
  let c = vj(e, n);
  t(`[TeammateMailbox] markMessagesAsRead called: agentName=${e}, teamName=${n}, path=${c}`);
  let y = W() && s !== void 0 ? ee(e, n) : void 0;
  if (W() && s !== void 0 && y !== void 0) {
    let h = r === void 0 ? null : new Set(r.map(wH));
    try {
      let w = await te(s, y, c, S => {
        if (!S.found || S.messages.length === 0) return {
          skip: !0,
          result: null
        };
        let messages = S.messages.filter(item => !item.read && h !== null && !h.has(wH(item)));
        return {
          messages: messages,
          result: {
            pruned: S.messages.length - messages.length,
            remain: messages.length
          }
        };
      });
      return t(w ? `[TeammateMailbox] markMessagesAsRead: pruned ${w.pruned} delivered message(s), ${w.remain} remain at ${c}` : "[TeammateMailbox] markMessagesAsRead: no messages to mark"), !0;
    } catch (error) {
      return t(`[TeammateMailbox] markMessagesAsRead FAILED for ${e}: ${error}`), l(error), !1;
    }
  }
  let lockfilePath_4 = `${c}.lock`,
    b;
  try {
    t("[TeammateMailbox] markMessagesAsRead: acquiring lock..."), b = await dl(c, {
      lockfilePath: lockfilePath_4,
      ...V
    }), t("[TeammateMailbox] markMessagesAsRead: lock acquired");
    let h = await S8e(e, n, void 0, {
      throwOnUnknownReadError: !0
    });
    if (t(`[TeammateMailbox] markMessagesAsRead: read ${h.length} messages after lock`), h.length === 0) return j(c, h, h), t("[TeammateMailbox] markMessagesAsRead: no messages to mark"), !0;
    let w = F(h, R => !R.read);
    t(`[TeammateMailbox] markMessagesAsRead: ${w} unread of ${h.length} total`);
    let S = r === void 0 ? null : new Set(r.map(wH)),
      E = h.filter(item => !item.read && S !== null && !S.has(wH(item)));
    return await gn().atomicWrite(c, _(E, null, 2)), j(c, h, E), t(`[TeammateMailbox] markMessagesAsRead: pruned ${h.length - E.length} delivered message(s), ${E.length} remain at ${c}`), !0;
  } catch (error) {
    if (k(error) === "ENOENT") return z().forget(c), t(`[TeammateMailbox] markMessagesAsRead: file does not exist at ${c}`), !0;
    return t(`[TeammateMailbox] markMessagesAsRead FAILED for ${e}: ${error}`), l(error), !1;
  } finally {
    await zm(b, "[TeammateMailbox] markMessagesAsRead");
  }
}
async function WWn(e, n, r) {
  let s = vj(e, n),
    c = W() && r !== void 0 ? ee(e, n) : void 0;
  if (W() && r !== void 0 && c !== void 0) {
    try {
      if (await te(r, c, s, h => h.found ? {
        messages: [],
        result: !0
      } : {
        skip: !0,
        result: !1
      })) t(`[TeammateMailbox] Cleared inbox for ${e}`);
    } catch (error) {
      t(`Failed to clear inbox for ${e}: ${error}`), l(error);
    }
    return;
  }
  let lockfilePath_5 = `${s}.lock`,
    i;
  try {
    i = await dl(s, {
      lockfilePath: lockfilePath_5,
      ...V
    }), await gn().atomicWrite(s, "[]"), z().forget(s), t(`[TeammateMailbox] Cleared inbox for ${e}`);
  } catch (error) {
    if (k(error) === "ENOENT") {
      z().forget(s);
      return;
    }
    t(`Failed to clear inbox for ${e}: ${error}`), l(error);
  } finally {
    await zm(i, "[TeammateMailbox] clearMailbox");
  }
}
function Nnn(e) {
  let n = _G(e.color) ? ` color="${e.color}"` : "",
    r = jie(e.summary),
    s = r ? ` summary="${Vs(r)}"` : "",
    c = Hg(e.from, Nv) || fw,
    y = e.provenance === "forged" ? ' verified="false"' : "",
    i = hyt(e.text);
  if (i !== e.text) for (let b = 0; b < 4; b++) {
    let h = hyt(lX(i, e.from));
    if (h === i) break;
    i = h;
  }
  return `<${qW} teammate_id="${Vs(c)}"${n}${s}${y}>
${i}
</${qW}>`;
}
function TBe(e, n) {
  let s = yJs(e).map(item => Nnn(n.recipientIsLead || item.provenance === "forged" ? item : {
    ...item,
    text: bDt(item.text, item.from)
  })).join(`

`);
  return n.recipientIsLead ? lmt(s, {
    midTurn: !1
  }) : s;
}
var Ffe = f(() => u({
    type: C("idle_notification"),
    from: o(),
    timestamp: o(),
    idleReason: U(["available", "interrupted", "failed"]).optional(),
    summary: o().optional(),
    completedTaskId: o().optional(),
    completedStatus: U(["resolved", "blocked", "failed"]).optional(),
    failureReason: o().optional(),
    result: o().optional()
  })),
  bound_4 = 200,
  XOs = 200;
function jie(e) {
  let n = e ? Sr(e).trim() : "";
  return Wie(n, XOs);
}
function Fnn(e) {
  let n = e ? Sr(e).trim() : "";
  return kH(ne(n, bound_4));
}
var bound = 40000;
function yG(e, n) {
  if (!e) return "";
  let r = kH(e),
    s = ne(r, n);
  if (s.length >= r.length) return r;
  return `${kH(s)}
[truncated for display]`;
}
var bound_2 = 4000,
  JOs = 16000;
function mJs(e, n = !0) {
  let r = e ? at(e) : "";
  if (!r) return "";
  let s = ne(r, bound_2);
  if (s.length >= r.length) return s;
  let c = kH(s);
  return n ? `${c}
[result truncated \u2014 ask the agent for the rest via ${Rn}]` : `${c}
[result truncated]`;
}
var nt = 200,
  bound_3 = XOs * 2 + 16,
  Nv = 256,
  ie = 256,
  ve = 4,
  ypt = bound_2 + nt + bound_3 + bound_4 + 3 * Nv + 1024;
function ae(e, n) {
  if (typeof e === "string") return Wie(e, ie);
  if (e === null || typeof e !== "object") return e;
  if (n <= 0) return null;
  if (Array.isArray(e)) return e.map(item => ae(item, n - 1));
  let r = [];
  for (let [s, c] of Object.entries(e)) r.push([Wie(s, ie), ae(c, n - 1)]);
  return Object.fromEntries(r);
}
function GWn(e, n) {
  let r = kH(e);
  if (ne(r, bound_2 + nt).length >= r.length) return r;
  let c = kH(ne(r, bound_2));
  return n ? `${c}
[result truncated \u2014 ask the agent for the rest via ${Rn}]` : `${c}
[result truncated]`;
}
var rt = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,9})?(?:Z|[+-]\d{2}:\d{2})$/,
  hko = "[invalid timestamp]",
  VWn = "[invalid id]",
  v8e = "[display sanitized; the agent reads the raw frame]",
  fw = "[unknown sender]",
  Ot = /^perm-[0-9]{1,20}-[0-9a-z]{1,12}$/,
  Nt = /^(?:shutdown|plan_approval)-[0-9]{1,20}@[^@\n]{1,300}(?:@[^@\n]{1,300})?$/u,
  Ft = 320;
function Dt(e) {
  return !e.includes(`
`) && !e.includes("\r") && kH(e) === e && [...e].length <= Ft && (Ot.test(e) || Nt.test(e)) ? e : VWn;
}
var Bt = /^(%[0-9]{1,10}|[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12})$/;
function Ct(e) {
  return Bt.test(e) ? e : VWn;
}
var qt = {
  tmux: !0,
  iterm2: !0,
  "in-process": !0
};
function jt(e) {
  return Object.hasOwn(qt, e) ? e : VWn;
}
function st(text, idle, r) {
  let result = typeof idle.result === "string" && idle.result ? GWn(idle.result, idle.idleReason !== "failed") : idle.result,
    summary_3 = typeof idle.summary === "string" && idle.summary ? Wie(idle.summary, bound_3) : idle.summary,
    failureReason = typeof idle.failureReason === "string" && idle.failureReason ? Fnn(idle.failureReason) : idle.failureReason,
    i = typeof idle.from === "string" && idle.from ? Hg(idle.from, Nv) : idle.from,
    b = typeof r === "string" ? Hg(r, Nv) || fw : void 0,
    h = b !== void 0 && typeof i === "string" && i !== b ? b : i,
    timestamp = typeof idle.timestamp === "string" && rt.test(idle.timestamp) ? idle.timestamp : hko,
    completedTaskId = typeof idle.completedTaskId === "string" && idle.completedTaskId ? Hg(idle.completedTaskId, Nv) : idle.completedTaskId,
    E = J(text),
    R = E !== null && typeof E === "object" && !Array.isArray(E) ? E : {
      ...idle
    },
    v = new Set(Object.keys(Ffe().shape)),
    O = [];
  for (let [A, D] of Object.entries(R)) {
    if (v.has(A)) {
      O.push([A, D]);
      continue;
    }
    let ue = Wie(A, ie);
    if (v.has(ue)) continue;
    O.push([ue, ae(D, ve)]);
  }
  let ke = Object.fromEntries(O),
    H = {
      result: result,
      summary: summary_3,
      failureReason: failureReason,
      from: h,
      timestamp: timestamp,
      completedTaskId: completedTaskId
    },
    idle_2 = {
      ...idle,
      ...H
    },
    text_2 = _({
      ...ke,
      ...H
    });
  if (text_2.length > ypt) text_2 = _(idle_2);
  let Ae = !1;
  while (text_2.length > ypt) {
    let A,
      D = 0;
    for (let key_2 of ["result", "summary", "failureReason"]) {
      let value = idle_2[key_2];
      if (typeof value === "string" && value) {
        let Ie = _(value).length;
        if (Ie > D) A = {
          key: key_2,
          value: value
        }, D = Ie;
      }
    }
    if (!A) break;
    let ue = [...A.value].length;
    Ae ||= A.key === "result", idle_2 = {
      ...idle_2,
      [A.key]: kH(ne(A.value, Math.floor(ue / 2)))
    }, text_2 = _(idle_2);
  }
  if (Ae && idle_2.result) {
    let A = {
        ...idle_2,
        result: `${idle_2.result}
[result truncated]`
      },
      D = _(A);
    if (D.length <= ypt) idle_2 = A, text_2 = D;
  }
  return text_2 === text ? {
    text: text,
    idle: idle
  } : {
    text: text_2,
    idle: idle_2
  };
}
function it(e, n) {
  let r = kH(e),
    s = ne(r, n);
  if (s.length >= r.length) return r;
  return `${kH(s)}
[truncated]`;
}
var Lt = 1024,
  Ut = 2048,
  gJs = new Map([["plan_approval_request", {
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
function qWn(e, n) {
  if (!ot.test(e)) return null;
  let r;
  try {
    r = J(e);
  } catch {
    return null;
  }
  if (!N(r)) return null;
  let s = r,
    c = s.type,
    y = typeof c === "string" ? gJs.get(c) : void 0;
  if (!y) return null;
  let i = new Set(Object.keys(y)),
    b = [],
    h = 0;
  for (let [S, E] of Object.entries(s)) {
    if (S === "type") {
      b.push([S, c]);
      continue;
    }
    if (i.has(S)) {
      b.push([S, Kt(y[S], E, n)]);
      continue;
    }
    let R = Wie(S, ie);
    if (R === "type" || i.has(R)) continue;
    let v = ae(E, ve),
      O = _(v).length + R.length;
    if (h + O > Ut) continue;
    h += O, b.push([R, v]);
  }
  let w = _(Object.fromEntries(b));
  return w === e ? null : w;
}
function Kt(e, n, r) {
  if (e.kind === "generic") {
    let s = typeof n === "string" ? Wie(n, ie) : ae(n, ve);
    if (s !== null && typeof s === "object" && _(s).length > Lt) return null;
    return s;
  }
  if (typeof n !== "string") switch (e.kind) {
    case "envelope-pinned-id":
      return (typeof r === "string" ? Hg(r, Nv) || fw : void 0) ?? VWn;
    case "id":
    case "request-id":
    case "pane-id":
    case "backend-type":
      return VWn;
    case "timestamp":
      return hko;
    case "line":
    case "body":
      return "";
  }
  switch (e.kind) {
    case "id":
      return Hg(n, Nv);
    case "request-id":
      return Dt(n);
    case "pane-id":
      return Ct(n);
    case "backend-type":
      return jt(n);
    case "envelope-pinned-id":
      {
        let s = Hg(n, Nv),
          c = typeof r === "string" ? Hg(r, Nv) || fw : void 0;
        return c !== void 0 && s !== c ? c : s;
      }
    case "timestamp":
      return rt.test(n) ? n : hko;
    case "line":
      return Hg(n, bound_3);
    case "body":
      return it(n, e.bound);
  }
}
function hJs(e, n) {
  let r = Date.parse(e.timestamp);
  return Number.isNaN(r) ? Number.NEGATIVE_INFINITY : Math.min(r, n);
}
function yJs(e) {
  if (weakSet_2.has(e)) return e;
  let n = e.slice(),
    r = [],
    s = Date.now();
  for (let index_2 = 0; index_2 < n.length; index_2++) {
    let b = mDt(n[index_2].text);
    if (!b) {
      let text_3 = qWn(n[index_2].text, n[index_2].from);
      if (text_3 !== null) n[index_2] = {
        ...n[index_2],
        text: text_3
      };
      continue;
    }
    let h = st(n[index_2].text, b, n[index_2].from);
    if (h.text !== n[index_2].text) n[index_2] = {
      ...n[index_2],
      text: h.text
    };
    let idle_3 = h.idle;
    if (typeof idle_3.result === "string" && idle_3.result) r.push({
      index: index_2,
      recency: hJs(idle_3, s),
      idle: idle_3
    });
  }
  r.sort((itemA, itemB) => itemB.recency - itemA.recency || itemB.index - itemA.index);
  let c = JOs,
    y = 0;
  for (let {
    index: index_3,
    idle: idle_4
  } of r) {
    let h = n[index_3];
    if (h.text.length <= c) {
      c -= h.text.length;
      continue;
    }
    let w = idle_4.idleReason === "failed" ? "" : `; ask the agent for it via ${Rn}`,
      S = {
        type: "idle_notification",
        from: idle_4.from,
        timestamp: idle_4.timestamp,
        idleReason: idle_4.idleReason,
        summary: idle_4.summary,
        completedTaskId: idle_4.completedTaskId,
        completedStatus: idle_4.completedStatus,
        failureReason: idle_4.failureReason
      },
      text_4 = _({
        ...S,
        result: `[result truncated \u2014 this drain's results exceeded ${JOs} characters${w}]`
      });
    if (text_4.length > c) text_4 = _({
      ...S,
      result: "[result truncated]"
    });
    if (text_4.length >= h.text.length) {
      c = Math.max(0, c - h.text.length);
      continue;
    }
    if (c = Math.max(0, c - text_4.length), text_4 !== h.text) y++, n[index_3] = {
      ...h,
      text: text_4
    };
  }
  if (y > 0 && !weakSet.has(e)) weakSet.add(e), p("swarm_idle_result_delivery", "budget_truncated");
  if (n.every((item, index) => item === e[index])) return weakSet_2.add(e), e;
  return weakSet_2.add(n), n;
}
var weakSet = new WeakSet(),
  weakSet_2 = new WeakSet();
function fDt(e, n) {
  let result_2 = mJs(n?.result, n?.senderReachable ?? n?.idleReason !== "failed") || void 0;
  return {
    type: "idle_notification",
    from: e,
    timestamp: new Date().toISOString(),
    idleReason: n?.idleReason,
    summary: n?.summary ? kH(n.summary) : void 0,
    completedTaskId: n?.completedTaskId,
    completedStatus: n?.completedStatus,
    failureReason: Fnn(n?.failureReason ? kH(n.failureReason) : void 0) || void 0,
    result: result_2
  };
}
function _pt(e, n, r) {
  if (e.result === void 0) return;
  if (r === void 0) m("swarm_idle_result_delivery", "mailbox_write_failed");else if (n !== void 0 && e.result === at(n)) g("swarm_idle_result_delivery");else p("swarm_idle_result_delivery", "per_frame_truncated");
}
var Wt = /[\u0000-\u0008\u000B-\u001F\u007F-\u009F\u2028\u2029]|(?![\u200C\u200D\uFE00-\uFE0F\u{E0100}-\u{E01EF}])[\p{Cf}\p{Default_Ignorable_Code_Point}]/u,
  regExp_2 = new RegExp(Wt.source, "gu"),
  Me = /[\u200C\u200D\uFE00-\uFE0F\u{E0100}-\u{E01EF}]/gu,
  Qt = 8,
  Gt = 7,
  Xt = 16,
  Yt = 4;
function Zt(e) {
  let n = (e.match(Me) ?? []).length,
    r = [...e].length - n,
    s = Math.max(Xt, Math.ceil(r / Yt));
  return e.split(`
`).map(item => {
    let y = (item.match(Me) ?? []).length,
      i = Math.max(Qt, Math.ceil(([...item].length - y) / Gt)),
      b = 0;
    return item.replace(Me, h => b++ < i && s-- > 0 ? h : "");
  }).join(`
`);
}
function kH(e) {
  return Zt(mk(e).replace(regExp_2, ""));
}
function Wie(e, n) {
  let r = kH(e),
    s = ne(r, n);
  return s.length >= r.length ? s : kH(s);
}
function Hg(e, n) {
  return Wie(e, n).replace(/\s+/g, " ").trim();
}
var ot = /^\s*\{/;
function lX(e, n) {
  let r = ot.test(e) ? mDt(e) : null;
  if (r) return st(e, r, n).text;
  return qWn(e, n) ?? e;
}
function at(e) {
  return kH(e.trim());
}
function mDt(e) {
  try {
    let n = Ffe().safeParse(J(e));
    return n.success ? n.data : null;
  } catch {}
  return null;
}
var QOs = f(() => u({
    tool_use_id: o(),
    tool_name: o(),
    input_digest: o()
  })),
  _Js = f(() => Jr("subtype", [u({
    type: C("permission_response"),
    request_id: o().min(1),
    subtype: C("success"),
    tool_use_id: o().optional(),
    approved_request: QOs().optional(),
    response: u({
      updated_input: fe(o(), oe()).optional(),
      permission_updates: T(oe()).optional()
    }).optional()
  }), u({
    type: C("permission_response"),
    request_id: o().min(1),
    subtype: C("error"),
    tool_use_id: o().optional(),
    approved_request: QOs().optional(),
    error: o()
  })]));
function yko(e) {
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
function _ko(e) {
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
function ARr(e) {
  try {
    let n = J(e);
    if (n && n.type === "permission_request") return n;
  } catch {}
  return null;
}
function gDt(e) {
  let n;
  try {
    n = J(e);
  } catch {
    return null;
  }
  if (n === null || typeof n !== "object" || !("type" in n) || n.type !== "permission_response") return null;
  let r = _Js().safeParse(n);
  if (r.success) return r.data;
  return t(`[TeammateMailbox] Dropping malformed permission_response frame: ${r.error.issues.map(item => `${item.path.join(".")}: ${item.message}`).join("; ")}`, {
    level: "warn"
  }), null;
}
function bko(e) {
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
function Sko(e) {
  return {
    type: "sandbox_permission_response",
    requestId: e.requestId,
    host: e.host,
    allow: e.allow,
    timestamp: new Date().toISOString()
  };
}
function xRr(e) {
  try {
    let n = J(e);
    if (n && n.type === "sandbox_permission_request") return n;
  } catch {}
  return null;
}
function PRr(e) {
  try {
    let n = J(e);
    if (n && n.type === "sandbox_permission_response") return n;
  } catch {}
  return null;
}
var ORr = f(() => u({
    type: C("plan_approval_request"),
    from: o(),
    timestamp: o(),
    planFilePath: o(),
    planContent: o(),
    requestId: o()
  })),
  IRr = f(() => u({
    type: C("plan_approval_response"),
    requestId: o(),
    approved: M(),
    feedback: o().optional(),
    timestamp: o(),
    permissionMode: x8n().optional()
  }));
var MRr = f(() => u({
    type: C("shutdown_request"),
    requestId: o(),
    from: o(),
    reason: o().optional(),
    timestamp: o()
  })),
  hDt = f(() => u({
    type: C("shutdown_approved"),
    requestId: o(),
    from: o(),
    timestamp: o(),
    paneId: o().optional(),
    backendType: o().optional()
  })),
  wko = f(() => u({
    type: C("shutdown_rejected"),
    requestId: o(),
    from: o(),
    reason: o(),
    timestamp: o()
  }));
function vko(e) {
  return {
    type: "shutdown_request",
    requestId: e.requestId,
    from: e.from,
    reason: e.reason,
    timestamp: new Date().toISOString()
  };
}
function kko(e) {
  return {
    type: "shutdown_approved",
    requestId: e.requestId,
    from: e.from,
    timestamp: new Date().toISOString(),
    paneId: e.paneId,
    backendType: e.backendType
  };
}
function Eko(e) {
  return {
    type: "shutdown_rejected",
    requestId: e.requestId,
    from: e.from,
    reason: e.reason,
    timestamp: new Date().toISOString()
  };
}
function bpt(e) {
  try {
    let n = MRr().safeParse(J(e));
    if (n.success) return n.data;
  } catch {}
  return null;
}
function KWn(e) {
  try {
    let n = ORr().safeParse(J(e));
    if (n.success) return n.data;
  } catch {}
  return null;
}
function hOe(e) {
  try {
    let n = hDt().safeParse(J(e));
    if (n.success) return n.data;
  } catch {}
  return null;
}
var bJs = !0;
function Hnn(e, n) {
  if (!e) return bJs ? "unbound" : "mismatch";
  if (e.answered) return "already_answered";
  return e.requestId === n.requestId ? "bound" : "mismatch";
}
function $nn(e) {
  return {
    type: "plan_approval_response",
    requestId: e.requestId,
    approved: !1,
    feedback: "The team lead's verdict was for a different request, not this plan. Call ExitPlanMode again to resubmit it for approval.",
    timestamp: e.timestamp
  };
}
function Unn(e) {
  try {
    let n = IRr().safeParse(J(e));
    if (n.success) return n.data;
  } catch {}
  return null;
}
var Jt = f(() => u({
  type: C("task_assignment"),
  taskId: o(),
  subject: o(),
  description: o(),
  assignedBy: o(),
  timestamp: o()
}));
function Tko(e) {
  return lO(Jt(), e);
}
var yDt = f(() => u({
    type: C("task_completed"),
    from: o().optional(),
    taskId: o(),
    taskSubject: o().optional(),
    timestamp: o().optional()
  })),
  DRr = f(() => u({
    type: C("teammate_terminated"),
    message: o()
  }));
function lO(e, n) {
  try {
    let r = e.strict().safeParse(J(n));
    if (r.success) return r.data;
  } catch {}
  return null;
}
function _Dt(e) {
  return e.filter(item => {
    let r = item;
    if (!N(r)) return !1;
    if (r.provenance === "forged") return !0;
    if (r.summary !== void 0 && typeof r.summary !== "string") return !0;
    if (jie(r.summary)) return !0;
    if (typeof r.text !== "string") return !0;
    return !lO(hDt(), r.text);
  });
}
function Cko(e) {
  try {
    let n = J(e);
    return !!n && n.type === "team_permission_update";
  } catch {
    return !1;
  }
}
function Bnn(e) {
  try {
    let n = J(e);
    return !!n && n.type === "mode_set_request";
  } catch {
    return !1;
  }
}
var Rko = "Teammate prompt must not be a mailbox protocol frame (permission/mode/plan/shutdown JSON) \u2014 pass plain-text instructions";
function vN(e) {
  try {
    let n = J(e);
    if (!n || typeof n !== "object" || !("type" in n)) return !1;
    let r = n.type;
    return r === "permission_request" || r === "permission_response" || r === "sandbox_permission_request" || r === "sandbox_permission_response" || r === "shutdown_request" || r === "shutdown_response" || r === "shutdown_approved" || r === "team_permission_update" || r === "mode_set_request" || r === "plan_approval_request" || r === "plan_approval_response";
  } catch {
    return !1;
  }
}
function jnn(e) {
  let n = e.feedback ? it(e.feedback, bound_2) : "";
  if (e.approved) return n ? `[Plan Approved] ${n}` : "[Plan Approved] You can now proceed with implementation";
  return `[Plan Rejected] ${n || "Please revise your plan"}`;
}
var Vt = /^shutdown-[0-9]{1,20}@[\w.-]{1,64}$/,
  en = "<requestId of the shutdown request>";
function SJs(e) {
  let n = Vt.test(e),
    r = _({
      to: to,
      message: {
        type: "shutdown_response",
        request_id: n ? e : en,
        approve: !0
      }
    });
  return `To approve it, call ${Rn} with exactly this input, where "message" is a JSON object rather than a string${n ? "" : " and request_id is the request's requestId value, copied verbatim"}: ${r}. Approving ends your process; a plain-text acknowledgment does not shut you down. To decline, for example because you're mid-task, send the same input with "approve": false and a "reason".`;
}
function bDt(e, n) {
  if (n !== to || !e.includes('"shutdown_request"')) return e;
  let r = bpt(e);
  return r ? `${e}

This is a shutdown request. ${SJs(r.requestId)}` : e;
}
function Ako(e) {
  return !vN(e) || hOe(e) !== null || bpt(e) !== null || KWn(e) !== null;
}
async function Wnn(e, n, r, s) {
  let c = vj(e, r),
    y = W() && s !== void 0 ? ee(e, r) : void 0;
  if (W() && s !== void 0 && y !== void 0) try {
    return await te(s, y, c, h => !h.found || h.messages.length === 0 ? {
      skip: !0,
      result: void 0
    } : {
      messages: h.messages.filter(item => !item.read && !n(item)),
      result: void 0
    }), !0;
  } catch (error) {
    return l(error), !1;
  }
  let lockfilePath_6 = `${c}.lock`,
    b;
  try {
    b = await dl(c, {
      lockfilePath: lockfilePath_6,
      ...V
    });
    let h = await S8e(e, r, void 0, {
      throwOnUnknownReadError: !0
    });
    if (h.length === 0) return j(c, h, h), !0;
    let w = h.filter(item => !item.read && !n(item));
    return await gn().atomicWrite(c, _(w, null, 2)), j(c, h, w), !0;
  } catch (error) {
    if (k(error) === "ENOENT") return z().forget(c), !0;
    return l(error), !1;
  } finally {
    await zm(b, "[TeammateMailbox] markMessagesAsReadByPredicate");
  }
}
function YWn(e) {
  return e.type === "user" && e.isMeta !== !0 && e.turnCompanion !== !0 && (typeof e.message.content === "string" || !e.message.content.some(item => item.type === "tool_result"));
}
function xko(e) {
  for (let n = e.length - 1; n >= 0; n--) {
    let r = e[n];
    if (!r) continue;
    if (YWn(r)) break;
    if (r.type !== "assistant") continue;
    for (let s of r.message.content) if (s.type === "tool_use" && s.name === Rn && typeof s.input === "object" && s.input !== null && "to" in s.input && typeof s.input.to === "string" && s.input.to !== "*" && s.input.to !== to && s.input.to !== Sh) {
      let c = "message" in s.input ? s.input.message : void 0,
        y = "summary" in s.input && typeof s.input.summary === "string" ? s.input.summary : void 0,
        i = CRr(s.input);
      if (i !== void 0) return `[to ${jie(s.input.to)}] ${jie(i.summary.length > 0 ? i.summary : i.message.trim())}`;
      if (typeof c === "string") return `[to ${jie(s.input.to)}] ${jie(y !== void 0 ? y : ne(c, 80))}`;
    }
  }
  return;
}
export { jOs, WOs, xve, cko, iO, zOs, Hk, aO, SH, GOs, Lnn, TRr, VOs, uko, qOs, BWn, dK, Nfe, cDt, uD, pko, fko, uDt, pDt, KOs, hpt, CRr, jWn, YOs, mko, Pve, Joi, fJs, vj, S8e, w8e, Zw, RRr, mOe, wH, gOe, WWn, Nnn, TBe, Ffe, bound_4 as gko, XOs, jie, Fnn, bound as zWn, yG, bound_2 as cK, JOs, mJs, bound_3 as vH, Nv, ypt, GWn, hko, VWn, v8e, fw, gJs, qWn, hJs, yJs, fDt, _pt, kH, Wie, Hg, lX, mDt, QOs, _Js, yko, _ko, ARr, gDt, bko, Sko, xRr, PRr, ORr, IRr, MRr, hDt, wko, vko, kko, Eko, bpt, KWn, hOe, bJs, Hnn, $nn, Unn, Tko, yDt, DRr, lO, _Dt, Cko, Bnn, Rko, vN, jnn, SJs, bDt, Ako, Wnn, YWn, xko };