// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { j } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { Et, wn, Er, Z3, Gt, mA, Ce, ue } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { kS } from "B:/~BUN/root/chunk-8w42v0dp.js";
import { ge, Vo, sr, St, Ld } from "B:/~BUN/root/chunk-rm2gz7kj.js";
var A = "tengu_lilac_loom",
  campaign_4 = "feature_of_the_week",
  _ = 86400000,
  b = () => ge().refine(e => !Number.isNaN(Date.parse(e)) && /(z|[+-]\d{2}:?\d{2})$/i.test(e), "must be ISO 8601 with timezone, e.g. 2026-06-04T16:00:00Z"),
  c = () => ge().optional().transform(e => e === "" ? void 0 : e),
  v = f(() => St({
    feature: ge().min(1),
    command: ge().optional().transform(e => e === "" ? void 0 : e),
    startsAt: b(),
    endsAt: b(),
    hideCommandChip: Vo().optional(),
    creditless: Vo().optional(),
    titleLabel: c(),
    commandBlurb: c(),
    tipBlurb: c(),
    isTopPriorityAnnouncement: Vo().optional(),
    announcementLines: sr(St({
      text: ge(),
      style: Ld(["bold", "dim"]).optional()
    })).optional().transform(e => {
      let n = e?.filter(i => i.text !== "");
      return n?.length ? n : void 0;
    }).catch(void 0),
    tips: sr(ge()).optional().transform(e => {
      let n = e?.filter(Boolean);
      return n?.length ? n : void 0;
    }).catch(void 0),
    redeemBy: c()
  }));
class w {
  parsedCampaign = null;
  inFlightEligibilityRefresh = null;
}
var x = new z(() => new w());
function C() {
  return x.of(j().host);
}
function Coe() {
  let raw = mA(A, null);
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
function Sdr() {
  return Coe()?.command ?? null;
}
function S(e) {
  if (!Et()) return "excluded";
  let n = Er();
  if (!n) return "excluded";
  if (e.creditless) return "viewer";
  if (Z3()) return "claimant";
  if (n === "team") {
    if (!wn()?.organizationRole) return "excluded";
    return kS() ? "claimant" : "viewer";
  }
  return "excluded";
}
function u() {
  let campaign = Coe();
  if (!campaign) return null;
  let orgId = wn()?.organizationUuid;
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
function wdr(e) {
  let n = Sdr();
  return n !== null && e === n;
}
function vdr(e) {
  return wdr(e) && KNe();
}
function KNe() {
  let e = u();
  if (!e || e.audience !== "claimant") return !1;
  if (!e.campaign.command) return !1;
  let n = d(e.orgId, e.campaign.feature);
  return n !== null && n.eligible && n.available;
}
function Uot() {
  let e = u();
  if (!e || e.audience !== "viewer") return !1;
  if (!e.campaign.command) return !1;
  return !P(e.orgId, e.campaign.feature);
}
function ibe() {
  let e = Coe(),
    n = wn()?.organizationUuid;
  if (!e || !n) return null;
  let i = d(n, e.feature);
  if (!i || i.amount_minor_units === null || !i.currency) return null;
  return {
    amountMinorUnits: i.amount_minor_units,
    currency: i.currency
  };
}
function nxn(e) {
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
  if (d(orgId_2, campaign_2.feature) !== null) return null;
  let a;
  try {
    a = await Gt.get(`/api/oauth/organizations/:orgUUID/overage_credit_grant?campaign=${campaign_4}`, {
      auth: "teleport-org",
      timeout: 1e4,
      validateStatus: o => o < 500,
      credentials: credentials
    });
  } catch (error) {
    return p("api_fotw_eligibility_fetch", "request_failed"), t(`FotW eligibility fetch failed: ${error}`, {
      level: "warn"
    }), null;
  }
  if (!a.ok || a.status >= 400) return p("api_fotw_eligibility_fetch", "unavailable"), null;
  if (g("api_fotw_eligibility_fetch"), a.data.granted) h(orgId_2, campaign_2.feature);
  if (a.data.eligible && a.data.needs_payment_setup === !0) {
    if (a.data.amount_minor_units == null || !a.data.currency) return null;
    return {
      amountMinorUnits: a.data.amount_minor_units,
      currency: a.data.currency
    };
  }
  if (d(orgId_2, campaign_2.feature) !== null) return null;
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
function d(e, n) {
  let r = ue().fotwEligibilityCache?.[e]?.[n];
  if (!r) return null;
  if (Date.now() - r.timestamp > _) return null;
  return r.info;
}
async function Sos(e, credentials_2) {
  if (!vdr(e)) return {
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
    o = ibe(),
    l;
  try {
    l = await Gt.post("/api/oauth/organizations/:orgUUID/overage_credit_grant", {
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
    return p("api_fotw_claim", "not_available"), F(orgId_3, campaign_3.feature, {
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
var M = f(() => St({
  error: St({
    message: ge()
  })
}));
function U(e) {
  let n = M().safeParse(e);
  return n.success ? n.data.error.message : void 0;
}
function I(e, n) {
  let fotwClaimedFeatures = ue().fotwClaimedFeatures;
  return Boolean(fotwClaimedFeatures?.[e]?.includes(n));
}
function h(e, n) {
  Ce(i => {
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
  let fotwUpsellFulfilled = ue().fotwUpsellFulfilled;
  return Boolean(fotwUpsellFulfilled?.[e]?.includes(n));
}
function wos(e) {
  let n = u();
  if (!n || n.audience !== "viewer" || !wdr(e)) return;
  let {
    orgId: orgId_4,
    campaign: campaign_5
  } = n;
  Ce(a => {
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
  Ce(a => {
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
export { Coe, Sdr, wdr, vdr, KNe, Uot, ibe, nxn, Sos, wos };