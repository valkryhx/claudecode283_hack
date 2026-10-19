// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  W
} from "B:/~BUN/root/chunk-hg8ngszx.js";
import {
  d,
  G
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  er
} from "B:/~BUN/root/chunk-k9zm82w3.js";
import {
  _,
  J,
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  Pe
} from "B:/~BUN/root/chunk-fbyz9h0p.js";
import {
  gn
} from "B:/~BUN/root/chunk-pjgzz98k.js";
import {
  Be
} from "B:/~BUN/root/chunk-d9rmnpx3.js";
import {
  f
} from "B:/~BUN/root/chunk-frrkt2bs.js";
import {
  o,
  T,
  u,
  C
} from "B:/~BUN/root/chunk-g3snhg6n.js";
import {
  dirname as l,
  join as w
} from "path";
var b = 50,
  D = f(() => u({
    version: C(1),
    sessions: T(u({
      id: o(),
      reason: o(),
      at: o()
    }))
  })),
  m = "device-unbound-creates";

function c() {
  return w(Pe(), "state", `${m}.json`)
}
async function p(r) {
  let i = await r.readText();
  if (i === void 0) return [];
  let n = y(i);
  if (!n.success) return [];
  let e = await r.retentionCutoff();
  return e === null ? n.data.sessions : n.data.sessions.filter((s) => !v(s.at, e))
}

function y(r) {
  try {
    return D().safeParse(J(r))
  } catch {
    return {
      success: !1
    }
  }
}

function v(r, i) {
  let n = Date.parse(r);
  return Number.isNaN(n) || n < i.getTime()
}
async function hri(r, i, n) {
  try {
    let e = er(r),
      a = [...(await p(n)).filter((g) => er(g.id) !== e), {
        id: e,
        reason: i,
        at: n.now().toISOString()
      }].slice(-b);
    await n.writeText(_({
      version: 1,
      sessions: a
    }, null, 2) + `
`)
  } catch (e) {
    t(`[deviceBind] unbound create not recorded (${d(e)})`)
  }
}
async function nto(r, i, n) {
  try {
    let e = er(r),
      s = (await p(n)).find((a) => er(a.id) === e);
    return s !== void 0 && i(s.reason) ? s.reason : void 0
  } catch (e) {
    t(`[deviceBind] unbound-create record unreadable (${d(e)})`);
    return
  }
}

function rto(r) {
  let i = W() && r !== void 0 ? r : void 0,
    n = Be.state(m);
  return {
    readText: async () => {
      if (i) {
        let e = await i.readText([n]);
        if (!e.ok) throw Error("device unbound-creates read failed");
        let s = e.value.items[0];
        return s.found ? s.value : void 0
      }
      try {
        return await gn().read(c())
      } catch (e) {
        if (G(e)) return;
        throw e
      }
    },
    writeText: async (e) => {
      if (i) {
        if (!(await i.write(n, e, {
            mode: 384
          })).ok) throw Error("device unbound-creates write failed");
        return
      }
      let s = c();
      await gn().mkdir(l(s), 448), await gn().atomicWrite(s, e, 384)
    },
    now: () => new Date,
    retentionCutoff: async () => {
      let e = await import("B:/~BUN/root/chunk-01tejdx8.js");
      return await e.isRetentionCleanupSafe(r) ? e.getCutoffDate() : null
    }
  }
}
export {
  hri,
  nto,
  rto
};
