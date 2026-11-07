// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { d, K } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { jn } from "B:/~BUN/root/chunk-rr294jrm.js";
import { t, _, ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Ue } from "B:/~BUN/root/chunk-eev762xg.js";
import { Dn } from "B:/~BUN/root/chunk-9jpwd6f1.js";
import { Ve } from "B:/~BUN/root/chunk-myfamxtp.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { o, C, u, T } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { X } from "B:/~BUN/root/chunk-g9pw24zp.js";
import { dirname as l, join as w } from "path";
var b = 50,
  D = p(() => u({
    version: T(1),
    sessions: C(u({
      id: o(),
      reason: o(),
      at: o()
    }))
  })),
  f = "device-unbound-creates";
function c() {
  return w(Ue(), "state", `${f}.json`);
}
async function m(r) {
  let i = await r.readText();
  if (i === void 0) return [];
  let n = y(i);
  if (!n.success) return [];
  let e = await r.retentionCutoff();
  return e === null ? n.data.sessions : n.data.sessions.filter(item => !v(item.at, e));
}
function y(r) {
  try {
    return D().safeParse(ee(r));
  } catch {
    return {
      success: !1
    };
  }
}
function v(r, i) {
  let n = Date.parse(r);
  return Number.isNaN(n) || n < i.getTime();
}
async function t_a(r, reason, n) {
  try {
    let id = jn(r),
      sessions = [...(await m(n)).filter(item => jn(item.id) !== id), {
        id: id,
        reason: reason,
        at: n.now().toISOString()
      }].slice(-b);
    await n.writeText(_({
      version: 1,
      sessions: sessions
    }, null, 2) + `
`);
  } catch (error) {
    t(`[deviceBind] unbound create not recorded (${d(error)})`);
  }
}
async function U6o(r, i, n) {
  try {
    let e = jn(r),
      s = (await m(n)).find(item => jn(item.id) === e);
    return s !== void 0 && i(s.reason) ? s.reason : void 0;
  } catch (error) {
    t(`[deviceBind] unbound-create record unreadable (${d(error)})`);
    return;
  }
}
function B6o(r) {
  let i = X() && r !== void 0 ? r : void 0,
    n = Ve.state(f);
  return {
    readText: async () => {
      if (i) {
        let e = await i.readText([n]);
        if (!e.ok) throw Error("device unbound-creates read failed");
        let s = e.value.items[0];
        return s.found ? s.value : void 0;
      }
      try {
        return await Dn().read(c());
      } catch (error) {
        if (K(error)) return;
        throw error;
      }
    },
    writeText: async e => {
      if (i) {
        if (!(await i.write(n, e, {
          mode: 384
        })).ok) throw Error("device unbound-creates write failed");
        return;
      }
      let s = c();
      await Dn().mkdir(l(s), 448), await Dn().atomicWrite(s, e, 384);
    },
    now: () => new Date(),
    retentionCutoff: async () => {
      let e = await import("B:/~BUN/root/chunk-kvsxfwhr.js");
      return (await e.isRetentionCleanupSafe(r, 0)) ? e.getCutoffDate() : null;
    }
  };
}
export { t_a, U6o, B6o };