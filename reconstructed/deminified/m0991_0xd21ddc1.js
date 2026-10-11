// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { H } from "B:/~BUN/root/chunk-dkxhwhft.js";
import { l, B } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { pr } from "B:/~BUN/root/chunk-1rjcv085.js";
import { b, J, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Se } from "B:/~BUN/root/chunk-4p6z9qq1.js";
import { Qt } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { Ae } from "B:/~BUN/root/chunk-5w2ecytn.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { o, C, u, A } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { dirname as g, join as w } from "path";
var D = 50,
  y = f(() => u({
    version: A(1),
    sessions: C(u({
      id: o(),
      reason: o(),
      at: o()
    }))
  })),
  c = "device-unbound-creates";
function d() {
  return w(Se(), "state", `${c}.json`);
}
async function m(r) {
  let i = await r.readText();
  if (i === void 0) return [];
  let n = v(i);
  if (!n.success) return [];
  let e = await r.retentionCutoff();
  return e === null ? n.data.sessions : n.data.sessions.filter(item => !x(item.at, e));
}
function v(r) {
  try {
    return y().safeParse(J(r));
  } catch {
    return {
      success: !1
    };
  }
}
function x(r, i) {
  let n = Date.parse(r);
  return Number.isNaN(n) || n < i.getTime();
}
async function CKo(r, reason, n) {
  try {
    let id = pr(r),
      sessions = [...(await m(n)).filter(item => pr(item.id) !== id), {
        id: id,
        reason: reason,
        at: n.now().toISOString()
      }].slice(-D);
    await n.writeText(b({
      version: 1,
      sessions: sessions
    }, null, 2) + `
`);
  } catch (error) {
    t(`[deviceBind] unbound create not recorded (${l(error)})`);
  }
}
async function fir(r, i, n) {
  try {
    let e = pr(r),
      s = (await m(n)).find(item => pr(item.id) === e);
    return s !== void 0 && i(s.reason) ? s.reason : void 0;
  } catch (error) {
    t(`[deviceBind] unbound-create record unreadable (${l(error)})`);
    return;
  }
}
function mir(r) {
  let i = H() && r !== void 0 ? r : void 0,
    n = Ae.state(c);
  return {
    readText: async () => {
      if (i) {
        let e = await i.readText([n]);
        if (!e.ok) throw Error("device unbound-creates read failed");
        let s = e.value.items[0];
        return s.found ? s.value : void 0;
      }
      try {
        return await Qt().read(d());
      } catch (error) {
        if (B(error)) return;
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
      let s = d();
      await Qt().mkdir(g(s), 448), await Qt().atomicWrite(s, e, 384);
    },
    now: () => new Date(),
    retentionCutoff: async () => {
      let e = await import("B:/~BUN/root/chunk-mh3051gc.js");
      return (await e.isRetentionCleanupSafe(r)) ? e.getCutoffDate() : null;
    }
  };
}
export { CKo, fir, mir };