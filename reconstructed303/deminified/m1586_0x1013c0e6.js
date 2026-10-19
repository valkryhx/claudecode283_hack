// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Ct } from "B:/~BUN/root/chunk-28dw3zbk.js";
import { are } from "B:/~BUN/root/chunk-9ka04m0y.js";
import { K4, FDe, Kzo } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { G } from "B:/~BUN/root/chunk-3aez4b53.js";
import { jn, Qa } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { At } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { Xn } from "B:/~BUN/root/chunk-8pmnanyd.js";
import { kh } from "B:/~BUN/root/chunk-qjf8jcwq.js";
import { stat as I } from "fs/promises";
var timeout = 5000,
  client_id = are(),
  y = {
    teardown: () => {},
    pulseIfClientPresent: () => {}
  };
async function A() {
  let CLAUDE_CLIENT_PRESENCE_FILE = a.CLAUDE_CLIENT_PRESENCE_FILE;
  if (!CLAUDE_CLIENT_PRESENCE_FILE) return !1;
  if (jn(CLAUDE_CLIENT_PRESENCE_FILE) && !Qa(CLAUDE_CLIENT_PRESENCE_FILE)) return !1;
  try {
    return await I(CLAUDE_CLIENT_PRESENCE_FILE), !0;
  } catch (error) {
    if (!G(error)) t(`[presence] client-presence-marker stat failed: ${error}`);
    return !1;
  }
}
function W_n(sessionId, baseUrl, getAuthHeaders, onUnauthorized = () => Promise.resolve(!1)) {
  if (At()) return y;
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
      if (!Xn()) return t(`${r} ${e} skipped (non-first-party provider)`), null;
      let E = `${u.baseUrl}/v1/code/sessions/${u.sessionId}/client/presence`;
      return t(`${r} ${e} \u2192 ${E}`), Ct.post(E, {
        client_id: client_id,
        ...n
      }, {
        headers: {
          ...sentHeaders,
          "anthropic-version": "2023-06-01",
          "anthropic-client-platform": kh()
        },
        timeout: timeout,
        validateStatus: () => !0
      }).then(i => {
        if (i.status >= 400) t(`${r} ${e} got ${i.status}`);
        return {
          status: i.status,
          sentHeaders: sentHeaders
        };
      }, i => (t(`${r} ${e} failed: ${Ct.isAxiosError(i) ? i.code ?? "request_error" : "error"}`), null));
    },
    P = async e => {
      let n = e.clear === !0 ? "clear" : "pulse";
      if (!Xn()) {
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
      if (FDe() === !1) {
        t(`${r} pulse skipped (terminal blurred)`);
        return;
      }
      if (Date.now() - d < timeout) return;
      v();
    },
    w = K4(h),
    C = Kzo(() => {
      let e = FDe();
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
export { W_n };