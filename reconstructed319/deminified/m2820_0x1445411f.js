// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import "B:/~BUN/root/chunk-vz9zea4j.js";
import "B:/~BUN/root/chunk-q78ga0zw.js";
import "B:/~BUN/root/chunk-db8vh085.js";
import "B:/~BUN/root/chunk-game8aqv.js";
import "B:/~BUN/root/chunk-wt4dg253.js";
import "B:/~BUN/root/chunk-drx9cnw1.js";
import { F } from "B:/~BUN/root/chunk-y2g9f85n.js";
import "B:/~BUN/root/chunk-r5zmhp23.js";
import "B:/~BUN/root/chunk-h4acfc9y.js";
import "B:/~BUN/root/chunk-ppmmt0c3.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import "B:/~BUN/root/chunk-dayhhbfr.js";
import "B:/~BUN/root/chunk-eev762xg.js";
import "B:/~BUN/root/chunk-15vbkr6z.js";
import "B:/~BUN/root/chunk-n8cnxns2.js";
import "B:/~BUN/root/chunk-09sn55yf.js";
import "B:/~BUN/root/chunk-jdtvghyw.js";
import { Rc } from "B:/~BUN/root/chunk-rzaxm471.js";
import "B:/~BUN/root/chunk-12nc74pv.js";
import "B:/~BUN/root/chunk-9wbhv9z5.js";
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
      l?.clear(), l = null;
    },
    v = () => {
      if (m(), e === null) return;
      let n = e;
      l = i.setTimer(() => {
        if (l = null, e !== n) return;
        if (i.now() < n.leaseExpiresAt) {
          v();
          return;
        }
        let o = {
          ...n,
          entries: []
        };
        e = o.templates.length === 0 ? null : o;
        for (let u of [...(i.onLeaseExpired ? [i.onLeaseExpired] : []), ...p]) try {
          u(o);
        } catch (error) {
          t(`[deviceHooks] lease-expiry listener threw: ${F(error).stack ?? String(error)}`, {
            level: "error"
          });
        }
      }, Math.min(Rc, Math.max(0, n.leaseExpiresAt - i.now())));
    };
  return {
    current: () => e,
    generation: () => d,
    recordMiss(n, o) {
      if (e === null || e.instanceId !== n || o !== d) return !1;
      if (a += 1, !r && a >= y) r = !0, s = i.now();
      return r;
    },
    recordHit(n) {
      if (e !== null && e.instanceId === n) a = 0;
    },
    isAway: n => e !== null && e.instanceId === n && r,
    awaySince: n => e !== null && e.instanceId === n && r ? s : null,
    replaceOwner(n) {
      let replaced = e !== null && e.instanceId !== n.instanceId ? e.instanceId : void 0,
        u = e !== null && replaced === void 0,
        awaySince = u && r ? s : null;
      if (e = n, !u || awaySince !== null) a = 0, r = !1, s = null;
      return d += 1, v(), {
        ...(replaced !== void 0 && {
          replaced: replaced
        }),
        ...(awaySince !== null && {
          awaySince: awaySince
        })
      };
    },
    removeOwner(n) {
      if (e === null || e.instanceId !== n) return !1;
      return e = null, a = 0, r = !1, s = null, m(), !0;
    },
    clear() {
      e = null, a = 0, r = !1, s = null, m();
    },
    onLeaseExpired(n) {
      p.push(n);
    }
  };
}
function H(i, e) {
  let l = setTimeout(i, e);
  return l.unref(), {
    clear: () => clearTimeout(l)
  };
}
export { D as createDeviceHookRegistry, H as productionRegistryTimer };