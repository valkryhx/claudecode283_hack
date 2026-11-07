// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  d
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  Te
} from "B:/~BUN/root/chunk-8f4z6bdn.js";
var u = 10,
  yfo = 50,
  J0e = /^(?:session|cse)_[A-Za-z0-9_-]+$/;

function y(e) {
  let r = (e.title ?? "").trim();
  return r !== "" && !jwr(r)
}

function jwr(e) {
  return e.includes("__CBU_POOLED__") || e === "__warming__" || e.startsWith("ditto:")
}
async function pSa(e) {
  if (Te() !== "firstParty") return [];
  try {
    await import("B:/~BUN/root/chunk-3y97d4j8.js");
    let {
      axiosGetWithRetry: r,
      prepareApiRequest: o,
      getOAuthRequestHeaders: f
    } = await import("B:/~BUN/root/chunk-xc64vz5b.js"), {
      getOauthConfig: S
    } = await import("B:/~BUN/root/chunk-nyvj6bfd.js"), {
      accessToken: R
    } = await o(e?.credentials), C = (e?.statuses ?? []).map((c) => `&statuses=${c}`).join(""), m = `${S().BASE_API_URL}/v1/code/sessions?limit=100${C}`, b = {
      ...f(R),
      ...e?.requestReason && {
        "anthropic-client-request-reason": e.requestReason
      }
    }, g = new Set, n = [], h = 0, s = null, a = 0;
    for (; a < u; a++) {
      let c = s ? `${m}&cursor=${encodeURIComponent(s)}` : m,
        i;
      try {
        i = await r(c, {
          headers: b,
          timeout: 15000
        })
      } catch (t) {
        if (e?.throwOnError) throw t;
        let {
          logForDebugging: v
        } = await import("B:/~BUN/root/chunk-h3v718dc.js");
        v(`[ccr:list] page ${a} failed (${n.length} rows so far): ${d(t)}`);
        break
      }
      h += i.data.data.length;
      for (let t of i.data.data) {
        if (g.has(t.id)) continue;
        if (g.add(t.id), t.status !== "archived" && (e?.includeBridgeKind || t.environment_kind !== "bridge") && J0e.test(t.id) && (e?.includeBridgeKind && t.environment_kind === "bridge" ? !jwr((t.title ?? "").trim()) : y(t)) && (e?.accept?.(t) ?? !0)) n.push(t)
      }
      s = i.data.next_cursor ?? null;
      let l = i.data.data.at(-1),
        _ = l ? Date.parse(l.last_event_at ?? l.created_at) : Number.NaN;
      if (!s || !e?.exhaustive && n.length >= yfo || e?.stopWhenOlderThan !== void 0 && !Number.isNaN(_) && _ < e.stopWhenOlderThan) break
    }
    let {
      logForDebugging: w
    } = await import("B:/~BUN/root/chunk-h3v718dc.js"), p = a >= u && s !== null;
    if (e?.status) e.status.truncated = p, e.status.moreRemain = Boolean(s);
    return w(`[ccr:list]: ${h} fetched, ${n.length} after archive/bridge/husk${e?.accept?"/accept":""} filter${p?` (TRUNCATED: ${u}-page budget exhausted with more remaining)`:""}`), n
  } catch (r) {
    if (e?.throwOnError) throw r;
    let {
      logForDebugging: o
    } = await import("B:/~BUN/root/chunk-h3v718dc.js");
    o(`[ccr:list] failed: ${d(r)}`)
  }
  return []
}
export {
  yfo,
  J0e,
  jwr,
  pSa
};
