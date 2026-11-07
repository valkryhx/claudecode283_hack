// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { H } from "B:/~BUN/root/chunk-game8aqv.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { Rt, hn, dr, hV, jt, oM, Le, fe } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { LS } from "B:/~BUN/root/chunk-yhafkw66.js";
import { ge, ws, vr, Ft, Ec } from "B:/~BUN/root/chunk-b3kw6jpx.js";
var A = "tengu_lilac_loom",
  campaign_4 = "feature_of_the_week",
  _ = 86400000,
  b = () => ge().refine(e => !Number.isNaN(Date.parse(e)) && /(z|[+-]\d{2}:?\d{2})$/i.test(e), "must be ISO 8601 with timezone, e.g. 2026-06-04T16:00:00Z"),
  d = () => ge().optional().transform(e => e === "" ? void 0 : e),
  v = p(() => Ft({
    feature: ge().min(1),
    command: ge().optional().transform(e => e === "" ? void 0 : e),
    startsAt: b(),
    endsAt: b(),
    hideCommandChip: ws().optional(),
    creditless: ws().optional(),
    titleLabel: d(),
    commandBlurb: d(),
    tipBlurb: d(),
    isTopPriorityAnnouncement: ws().optional(),
    announcementLines: vr(Ft({
      text: ge(),
      style: Ec(["bold", "dim"]).optional()
    })).optional().transform(e => {
      let n = e?.filter(i => i.text !== "");
      return n?.length ? n : void 0;
    }).catch(void 0),
    tips: vr(ge()).optional().transform(e => {
      let n = e?.filter(Boolean);
      return n?.length ? n : void 0;
    }).catch(void 0),
    redeemBy: d()
  }));
class w {
  parsedCampaign = null;
  inFlightEligibilityRefresh = null;
}
var x = new W(() => new w());
function C() {
  return x.of(H().host);
}
function Bhe() {
  let raw = oM(A, null);
  if (raw === null || raw === void 0) return null;
  let n = C();
  if (n.parsedCampaign === null || n.parsedCampaign.raw !== raw) {
    let r = v().safeParse(raw);
    if (!r.success) t(`Promo campaign payload failed validation: ${r.error.message}`, {
      level: "warn"
    });
    n.parsedCampaign = r.success ? {
      raw: raw,
      campaign: r.data,
      startsAtMs: Date.parse(r.data.startsAt),
      endsAtMs: Date.parse(r.data.endsAt)
    } : {
      raw: raw,
      campaign: null,
      startsAtMs: 0,
      endsAtMs: 0
    };
  }
  if (n.parsedCampaign.campaign === null) return null;
  let i = Date.now();
  if (i < n.parsedCampaign.startsAtMs) return null;
  if (i > n.parsedCampaign.endsAtMs) return null;
  return n.parsedCampaign.campaign;
}
function I4r() {
  return Bhe()?.command ?? null;
}
function S(e) {
  if (!Rt()) return "excluded";
  let n = dr();
  if (!n) return "excluded";
  if (e.creditless) return "viewer";
  if (hV()) return "claimant";
  if (n === "team") {
    if (!hn()?.organizationRole) return "excluded";
    return LS() ? "claimant" : "viewer";
  }
  return "excluded";
}
function u() {
  let campaign = Bhe();
  if (!campaign) return null;
  let orgId = hn()?.organizationUuid;
  if (!orgId) return null;
  let audience = S(campaign);
  if (audience === "excluded") return null;
  if (audience === "claimant" && I(orgId, campaign.feature)) return null;
  return {
    campaign: campaign,
    orgId: orgId,
    audience: audience
  };
}
function M4r(e) {
  let n = I4r();
  return n !== null && e === n;
}
function D4r(e) {
  return M4r(e) && h6e();
}
function h6e() {
  let e = u();
  if (!e || e.audience !== "claimant") return !1;
  if (!e.campaign.command) return !1;
  let n = f(e.orgId, e.campaign.feature);
  return n !== null && n.eligible && n.available;
}
function fCt() {
  let e = u();
  if (!e || e.audience !== "viewer") return !1;
  if (!e.campaign.command) return !1;
  return !P(e.orgId, e.campaign.feature);
}
function POe() {
  let e = Bhe(),
    n = hn()?.organizationUuid;
  if (!e || !n) return null;
  let i = f(n, e.feature);
  if (!i || i.amount_minor_units === null || !i.currency) return null;
  return {
    amountMinorUnits: i.amount_minor_units,
    currency: i.currency
  };
}
function WQn(e) {
  let n = C();
  return n.inFlightEligibilityRefresh ??= E(e).catch(i => (t(`FotW eligibility refresh failed: ${i}`, {
    level: "warn"
  }), null)).finally(() => {
    n.inFlightEligibilityRefresh = null;
  }), n.inFlightEligibilityRefresh;
}
async function E(credentials) {
  let n = u();
  if (!n || n.audience !== "claimant") return null;
  let {
    campaign: campaign_2,
    orgId: orgId_2
  } = n;
  if (f(orgId_2, campaign_2.feature) !== null) return null;
  let a;
  try {
    a = await jt.get(`/api/oauth/organizations/:orgUUID/overage_credit_grant?campaign=${campaign_4}`, {
      auth: "teleport-org",
      timeout: 1e4,
      validateStatus: o => o < 500,
      credentials: credentials
    });
  } catch (error) {
    return c("api_fotw_eligibility_fetch", "request_failed"), t(`FotW eligibility fetch failed: ${error}`, {
      level: "warn"
    }), null;
  }
  if (!a.ok || a.status >= 400) return c("api_fotw_eligibility_fetch", "unavailable"), null;
  if (g("api_fotw_eligibility_fetch"), a.data.granted) h(orgId_2, campaign_2.feature);
  if (a.data.eligible && a.data.needs_payment_setup === !0) {
    if (a.data.amount_minor_units == null || !a.data.currency) return null;
    return {
      amountMinorUnits: a.data.amount_minor_units,
      currency: a.data.currency
    };
  }
  if (f(orgId_2, campaign_2.feature) !== null) return null;
  return F(orgId_2, campaign_2.feature, {
    available: a.data.available,
    eligible: a.data.eligible,
    granted: a.data.granted,
    amount_minor_units: a.data.amount_minor_units ?? null,
    currency: a.data.currency ?? null
  }, {
    onlyIfAbsent: !0
  }), null;
}
function f(e, n) {
  let r = fe().fotwEligibilityCache?.[e]?.[n];
  if (!r) return null;
  if (Date.now() - r.timestamp > _) return null;
  return r.info;
}
async function Zoi(e, credentials_2) {
  if (!D4r(e)) return {
    outcome: "skipped"
  };
  let i = u();
  if (!i) return {
    outcome: "skipped"
  };
  let {
      campaign: campaign_3,
      orgId: orgId_3
    } = i,
    o = POe(),
    l;
  try {
    l = await jt.post("/api/oauth/organizations/:orgUUID/overage_credit_grant", {
      campaign: campaign_4,
      feature: campaign_3.feature,
      enable_overages: !0
    }, {
      auth: "teleport-org",
      timeout: 60000,
      validateStatus: s => s < 500,
      credentials: credentials_2
    });
  } catch (error) {
    return m("api_fotw_claim", "request_failed"), t(`FotW claim failed: ${error}`, {
      level: "warn"
    }), {
      outcome: "failed"
    };
  }
  if (!l.ok) return {
    outcome: "failed"
  };
  if (l.status >= 400) {
    if (U(l.data) === "Failed to grant credit") return m("api_fotw_claim", "grant_failed"), {
      outcome: "failed"
    };
    return c("api_fotw_claim", "not_available"), F(orgId_3, campaign_3.feature, {
      available: !1,
      eligible: !1,
      granted: !1,
      amount_minor_units: null,
      currency: null
    }), {
      outcome: "not_available"
    };
  }
  if (!l.data.success) return m("api_fotw_claim", "grant_failed"), {
    outcome: "failed"
  };
  return g("api_fotw_claim"), h(orgId_3, campaign_3.feature), {
    outcome: "granted",
    amountMinorUnits: l.data.amount_minor_units ?? o?.amountMinorUnits ?? 0,
    currency: l.data.currency ?? o?.currency ?? "USD",
    expiresAt: l.data.expires_at ?? null
  };
}
var M = p(() => Ft({
  error: Ft({
    message: ge()
  })
}));
function U(e) {
  let n = M().safeParse(e);
  return n.success ? n.data.error.message : void 0;
}
function I(e, n) {
  let fotwClaimedFeatures = fe().fotwClaimedFeatures;
  return Boolean(fotwClaimedFeatures?.[e]?.includes(n));
}
function h(e, n) {
  Le(i => {
    let r = i.fotwClaimedFeatures?.[e] ?? [];
    if (r.includes(n)) return i;
    return {
      ...i,
      fotwClaimedFeatures: {
        ...i.fotwClaimedFeatures,
        [e]: [...r, n]
      }
    };
  });
}
function P(e, n) {
  let fotwUpsellFulfilled = fe().fotwUpsellFulfilled;
  return Boolean(fotwUpsellFulfilled?.[e]?.includes(n));
}
function esi(e) {
  let n = u();
  if (!n || n.audience !== "viewer" || !M4r(e)) return;
  let {
    orgId: orgId_4,
    campaign: campaign_5
  } = n;
  Le(a => {
    let o = a.fotwUpsellFulfilled?.[orgId_4] ?? [];
    if (o.includes(campaign_5.feature)) return a;
    return {
      ...a,
      fotwUpsellFulfilled: {
        ...a.fotwUpsellFulfilled,
        [orgId_4]: [...o, campaign_5.feature]
      }
    };
  });
}
function F(e, n, info, {
  onlyIfAbsent = !1
} = {}) {
  Le(a => {
    let o = a.fotwEligibilityCache?.[e]?.[n],
      l = o && Date.now() - o.timestamp <= _;
    if (onlyIfAbsent && l) return a;
    if (o && o.info.available === info.available && o.info.eligible === info.eligible && o.info.granted === info.granted && o.info.amount_minor_units === info.amount_minor_units && o.info.currency === info.currency && l) return a;
    return {
      ...a,
      fotwEligibilityCache: {
        ...a.fotwEligibilityCache,
        [e]: {
          ...a.fotwEligibilityCache?.[e],
          [n]: {
            info: info,
            timestamp: Date.now()
          }
        }
      }
    };
  });
}
export { Bhe, I4r, M4r, D4r, h6e, fCt, POe, WQn, Zoi, esi };