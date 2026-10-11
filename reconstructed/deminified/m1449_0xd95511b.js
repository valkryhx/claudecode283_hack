// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { mt } from "B:/~BUN/root/chunk-vyq5y0zs.js";
import { Ide, BY, H_e, sGr } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { B } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Dn, kl } from "B:/~BUN/root/chunk-54p0h65d.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { It } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { zn } from "B:/~BUN/root/chunk-sd4cj2qx.js";
import { jg } from "B:/~BUN/root/chunk-fwzy34jf.js";
import { stat as I } from "fs/promises";
var timeout = 5000,
  client_id = Ide(),
  y = {
    teardown: () => {},
    pulseIfClientPresent: () => {}
  };
async function A() {
  let CLAUDE_CLIENT_PRESENCE_FILE = a.CLAUDE_CLIENT_PRESENCE_FILE;
  if (!CLAUDE_CLIENT_PRESENCE_FILE) return !1;
  if (Dn(CLAUDE_CLIENT_PRESENCE_FILE) && !kl(CLAUDE_CLIENT_PRESENCE_FILE)) return !1;
  try {
    return await I(CLAUDE_CLIENT_PRESENCE_FILE), !0;
  } catch (error) {
    if (!B(error)) t(`[presence] client-presence-marker stat failed: ${error}`);
    return !1;
  }
}
function Pzt(sessionId, baseUrl, getAuthHeaders, onUnauthorized = () => Promise.resolve(!1)) {
  if (It()) return y;
  let u = {
      sessionId: sessionId,
      baseUrl: baseUrl,
      getAuthHeaders: getAuthHeaders,
      onUnauthorized: onUnauthorized
    },
    r = `[presence session=${sessionId}]`,
    connected_at = null,
    d = 0,
    m = Promise.resolve(),
    g = async (e, n) => {
      let sentHeaders = await u.getAuthHeaders();
      if (sentHeaders === null) return t(`${r} ${e} skipped (no credential to send under)`), null;
      if (!zn()) return t(`${r} ${e} skipped (non-first-party provider)`), null;
      let E = `${u.baseUrl}/v1/code/sessions/${u.sessionId}/client/presence`;
      return t(`${r} ${e} \u2192 ${E}`), mt.post(E, {
        client_id: client_id,
        ...n
      }, {
        headers: {
          ...sentHeaders,
          "anthropic-version": "2023-06-01",
          "anthropic-client-platform": jg()
        },
        timeout: timeout,
        validateStatus: () => !0
      }).then(i => {
        if (i.status >= 400) t(`${r} ${e} got ${i.status}`);
        return {
          status: i.status,
          sentHeaders: sentHeaders
        };
      }, i => (t(`${r} ${e} failed: ${mt.isAxiosError(i) ? i.code ?? "request_error" : "error"}`), null));
    },
    P = async e => {
      let n = e.clear === !0 ? "clear" : "pulse";
      if (!zn()) {
        t(`${r} ${n} skipped (non-first-party provider)`);
        return;
      }
      try {
        let s = await g(n, e);
        if (s?.status === 401 && (await u.onUnauthorized(s.sentHeaders))) t(`${r} ${n} retrying after credential refresh`), await g(n, e);
      } catch (error) {
        t(`${r} ${n} skipped (credential unavailable: ${error instanceof Error ? error.name : "error"})`);
      }
    },
    v = () => {
      let e = Date.now();
      d = e, connected_at ??= new Date(e).toISOString();
      let n = P({
        connected_at: connected_at
      });
      return m = m.then(() => n), n;
    },
    h = () => {
      if (H_e() === !1) {
        t(`${r} pulse skipped (terminal blurred)`);
        return;
      }
      if (Date.now() - d < timeout) return;
      v();
    },
    w = BY(h),
    C = sGr(() => {
      let e = H_e();
      if (t(`${r} terminal focus \u2192 ${e === void 0 ? "unknown" : e ? "focused" : "blurred"}`), e === !0) h();
    });
  t(`${r} wired`);
  let f = !1;
  return {
    teardown() {
      if (f) return;
      if (f = !0, w?.(), w = null, C?.(), C = null, connected_at !== null) m.then(() => P({
        clear: !0
      }));
      connected_at = null;
    },
    pulseIfClientPresent() {
      if (f || Date.now() - d < timeout) return;
      A().then(e => {
        if (e && !f && Date.now() - d >= timeout) t(`${r} client-presence-marker active \u2192 pulse`), v();
      });
    }
  };
}
export { Pzt };