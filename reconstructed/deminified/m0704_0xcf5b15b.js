// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { l } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Ie } from "B:/~BUN/root/chunk-sd4cj2qx.js";
var d = 10,
  tTn = 50,
  nTn = /^(?:session|cse)_[A-Za-z0-9_-]+$/;
function O(e) {
  let r = (e.title ?? "").trim();
  return r !== "" && !S(r);
}
function S(e) {
  return e.includes("__CBU_POOLED__") || e === "__warming__" || e.startsWith("ditto:");
}
async function iKo(e) {
  if (Ie() !== "firstParty") return [];
  try {
    let {
        axiosGetWithRetry: axiosGetWithRetry,
        prepareApiRequest: prepareApiRequest,
        getOAuthHeaders: getOAuthHeaders
      } = await import("B:/~BUN/root/chunk-an75r2wp.js"),
      {
        getOauthConfig: getOauthConfig
      } = await import("B:/~BUN/root/chunk-dry4g6jq.js"),
      {
        accessToken: accessToken
      } = await prepareApiRequest(e?.credentials),
      u = `${getOauthConfig().BASE_API_URL}/v1/code/sessions`,
      headers = getOAuthHeaders(accessToken),
      g = new Set(),
      n = [],
      m = 0,
      s = null,
      a = 0;
    for (; a < d; a++) {
      let w = s ? `${u}?limit=100&cursor=${encodeURIComponent(s)}` : `${u}?limit=100`,
        i;
      try {
        i = await axiosGetWithRetry(w, {
          headers: headers,
          timeout: 15000
        });
      } catch (error) {
        if (e?.throwOnError) throw error;
        let {
          logForDebugging: logForDebugging
        } = await import("B:/~BUN/root/chunk-589gejwf.js");
        logForDebugging(`[ccr:list] page ${a} failed (${n.length} rows so far): ${l(error)}`);
        break;
      }
      m += i.data.data.length;
      for (let t of i.data.data) {
        if (g.has(t.id)) continue;
        if (g.add(t.id), t.status !== "archived" && (e?.includeBridgeKind || t.environment_kind !== "bridge") && nTn.test(t.id) && (e?.includeBridgeKind && t.environment_kind === "bridge" ? !S((t.title ?? "").trim()) : O(t)) && (e?.accept?.(t) ?? !0)) n.push(t);
      }
      s = i.data.next_cursor ?? null;
      let c = i.data.data.at(-1),
        p = c ? Date.parse(c.last_event_at ?? c.created_at) : Number.NaN;
      if (!s || !e?.exhaustive && n.length >= tTn || e?.stopWhenOlderThan !== void 0 && !Number.isNaN(p) && p < e.stopWhenOlderThan) break;
    }
    let {
        logForDebugging: logForDebugging_2
      } = await import("B:/~BUN/root/chunk-589gejwf.js"),
      h = a >= d && s !== null;
    if (e?.status) e.status.truncated = h;
    return logForDebugging_2(`[ccr:list]: ${m} fetched, ${n.length} after archive/bridge/husk${e?.accept ? "/accept" : ""} filter${h ? ` (TRUNCATED: ${d}-page budget exhausted with more remaining)` : ""}`), n;
  } catch (error) {
    if (e?.throwOnError) throw error;
    let {
      logForDebugging: logForDebugging_3
    } = await import("B:/~BUN/root/chunk-589gejwf.js");
    logForDebugging_3(`[ccr:list] failed: ${l(error)}`);
  }
  return [];
}
export { tTn, nTn, iKo };