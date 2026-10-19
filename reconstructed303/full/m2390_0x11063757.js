// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import "B:/~BUN/root/chunk-rwkgcmm8.js";
import "B:/~BUN/root/chunk-9ka04m0y.js";
import "B:/~BUN/root/chunk-rpez7z7a.js";
import "B:/~BUN/root/chunk-hg8ngszx.js";
import "B:/~BUN/root/chunk-jthpk6wv.js";
import {
  H
} from "B:/~BUN/root/chunk-3aez4b53.js";
import "B:/~BUN/root/chunk-89mss1tj.js";
import "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import "B:/~BUN/root/chunk-fbyz9h0p.js";
import "B:/~BUN/root/chunk-xf0m410v.js";
import "B:/~BUN/root/chunk-nggrknsv.js";
import {
  Hu
} from "B:/~BUN/root/chunk-8ye9n4fk.js";
var y = 2;

function D(i) {
  let e = null,
    l = null,
    a = 0,
    r = !1,
    s = null,
    d = 0,
    p = [],
    m = () => {
      l?.clear(), l = null
    },
    v = () => {
      if (m(), e === null) return;
      let n = e;
      l = i.setTimer(() => {
        if (l = null, e !== n) return;
        if (i.now() < n.leaseExpiresAt) {
          v();
          return
        }
        let o = {
          ...n,
          entries: []
        };
        e = o.templates.length === 0 ? null : o;
        for (let u of [...i.onLeaseExpired ? [i.onLeaseExpired] : [], ...p]) try {
          u(o)
        } catch (c) {
          t(`[deviceHooks] lease-expiry listener threw: ${H(c).stack??String(c)}`, {
            level: "error"
          })
        }
      }, Math.min(Hu, Math.max(0, n.leaseExpiresAt - i.now())))
    };
  return {
    current: () => e,
    generation: () => d,
    recordMiss(n, o) {
      if (e === null || e.instanceId !== n || o !== d) return !1;
      if (a += 1, !r && a >= y) r = !0, s = i.now();
      return r
    },
    recordHit(n) {
      if (e !== null && e.instanceId === n) a = 0
    },
    isAway: (n) => e !== null && e.instanceId === n && r,
    awaySince: (n) => e !== null && e.instanceId === n && r ? s : null,
    replaceOwner(n) {
      let o = e !== null && e.instanceId !== n.instanceId ? e.instanceId : void 0,
        u = e !== null && o === void 0,
        c = u && r ? s : null;
      if (e = n, !u || c !== null) a = 0, r = !1, s = null;
      return d += 1, v(), {
        ...o !== void 0 && {
          replaced: o
        },
        ...c !== null && {
          awaySince: c
        }
      }
    },
    removeOwner(n) {
      if (e === null || e.instanceId !== n) return !1;
      return e = null, a = 0, r = !1, s = null, m(), !0
    },
    clear() {
      e = null, a = 0, r = !1, s = null, m()
    },
    onLeaseExpired(n) {
      p.push(n)
    }
  }
}

function k(i, e) {
  let l = setTimeout(i, e);
  return l.unref(), {
    clear: () => clearTimeout(l)
  }
}
export {
  D as createDeviceHookRegistry, k as productionRegistryTimer
};
