// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import "B:/~BUN/root/chunk-bvn0mpsk.js";
import "B:/~BUN/root/chunk-ekrhn4q1.js";
import "B:/~BUN/root/chunk-4rk7cwxz.js";
import "B:/~BUN/root/chunk-dkxhwhft.js";
import "B:/~BUN/root/chunk-kks4mj3w.js";
import { te } from "B:/~BUN/root/chunk-bgthmgyc.js";
import "B:/~BUN/root/chunk-17wqwt36.js";
import "B:/~BUN/root/chunk-54p0h65d.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import "B:/~BUN/root/chunk-4p6z9qq1.js";
import "B:/~BUN/root/chunk-0fnha6bz.js";
import "B:/~BUN/root/chunk-y04k89s2.js";
import { $g } from "B:/~BUN/root/chunk-ah3egpyh.js";
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
          t(`[deviceHooks] lease-expiry listener threw: ${te(error).stack ?? String(error)}`, {
            level: "error"
          });
        }
      }, Math.min($g, Math.max(0, n.leaseExpiresAt - i.now())));
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