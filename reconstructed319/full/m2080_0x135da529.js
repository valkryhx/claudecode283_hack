// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Wt
} from "B:/~BUN/root/chunk-b91sxvrb.js";
import {
  Jae
} from "B:/~BUN/root/chunk-q78ga0zw.js";
import {
  lB,
  f4e,
  vzs
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  K
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  or,
  ad
} from "B:/~BUN/root/chunk-h4acfc9y.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  St
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  Fn
} from "B:/~BUN/root/chunk-8f4z6bdn.js";
import {
  PO
} from "B:/~BUN/root/chunk-xc0c1vfp.js";
import {
  cb
} from "B:/~BUN/root/chunk-xwsv2hvn.js";
import {
  stat as I
} from "fs/promises";
var m = 5000,
  _ = Jae(),
  y = {
    teardown: () => {},
    pulseIfClientPresent: () => {}
  };
async function U() {
  let a = i.CLAUDE_CLIENT_PRESENCE_FILE;
  if (!a) return !1;
  if (or(a) && !ad(a)) return !1;
  try {
    return await I(a), !0
  } catch (c) {
    if (!K(c)) t(`[presence] client-presence-marker stat failed: ${c}`);
    return !1
  }
}

function qYn(a, c, b, A = () => Promise.resolve(!1)) {
  if (St()) return y;
  let u = {
      sessionId: a,
      baseUrl: c,
      getAuthHeaders: b,
      onUnauthorized: A
    },
    r = `[presence session=${a}]`,
    d = null,
    f = 0,
    g = Promise.resolve(),
    h = async (e, s) => {
      let n = await u.getAuthHeaders();
      if (n === null) return t(`${r} ${e} skipped (no credential to send under)`), null;
      if (!Fn()) return t(`${r} ${e} skipped (non-first-party provider)`), null;
      let l = `${u.baseUrl}/v1/code/sessions/${u.sessionId}/client/presence`;
      return t(`${r} ${e} \u2192 ${l}`), Wt.post(l, {
        client_id: _,
        ...s
      }, {
        headers: {
          ...n,
          "anthropic-version": "2023-06-01",
          "anthropic-client-platform": cb()
        },
        timeout: m,
        validateStatus: () => !0
      }).then((o) => {
        if (o.status >= 400) t(`${r} ${e} got ${o.status}`);
        let E = o.config?.headers?.get?.("Authorization");
        return {
          status: o.status,
          sentHeaders: typeof E === "string" ? {
            ...n,
            Authorization: E
          } : PO(o.config) ? null : n
        }
      }, (o) => (t(`${r} ${e} failed: ${Wt.isAxiosError(o)?o.code??"request_error":"error"}`), null))
    }, P = async (e) => {
      let s = e.clear === !0 ? "clear" : "pulse";
      if (!Fn()) {
        t(`${r} ${s} skipped (non-first-party provider)`);
        return
      }
      try {
        let n = await h(s, e);
        if (n?.status === 401 && (n.sentHeaders === null || await u.onUnauthorized(n.sentHeaders, "first"))) {
          t(`${r} ${s} retrying ${n.sentHeaders===null?"once: the first went with no credential":"after credential refresh"}`);
          let l = await h(s, e);
          if (l?.status === 401 && l.sentHeaders !== null) u.onUnauthorized(l.sentHeaders, "resend").catch(() => {})
        }
      } catch (n) {
        t(`${r} ${s} skipped (credential unavailable: ${n instanceof Error?n.name:"error"})`)
      }
    }, v = () => {
      let e = Date.now();
      f = e, d ??= new Date(e).toISOString();
      let s = P({
        connected_at: d
      });
      return g = g.then(() => s), s
    }, w = () => {
      if (f4e() === !1) {
        t(`${r} pulse skipped (terminal blurred)`);
        return
      }
      if (Date.now() - f < m) return;
      v()
    }, H = lB(w), C = vzs(() => {
      let e = f4e();
      if (t(`${r} terminal focus \u2192 ${e===void 0?"unknown":e?"focused":"blurred"}`), e === !0) w()
    });
  t(`${r} wired`);
  let p = !1;
  return {
    teardown() {
      if (p) return;
      if (p = !0, H?.(), H = null, C?.(), C = null, d !== null) g.then(() => P({
        clear: !0
      }));
      d = null
    },
    pulseIfClientPresent() {
      if (p || Date.now() - f < m) return;
      U().then((e) => {
        if (e && !p && Date.now() - f >= m) t(`${r} client-presence-marker active \u2192 pulse`), v()
      })
    }
  }
}
export {
  qYn
};
