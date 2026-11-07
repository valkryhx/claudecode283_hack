// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { R, d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { rc } from "B:/~BUN/root/chunk-b91sxvrb.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Ln, Kl, ul, jt } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { St } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { Fn } from "B:/~BUN/root/chunk-8f4z6bdn.js";
import { tfi, nfi, P3e, PIe, rfi, ofi } from "B:/~BUN/root/chunk-mpzcg4gr.js";
import { OBe, yYo } from "B:/~BUN/root/chunk-7cre8w6z.js";
import { dfi, cfi, ufi } from "B:/~BUN/root/chunk-eb8f1fhs.js";
import { X } from "B:/~BUN/root/chunk-g9pw24zp.js";
var f = ["agent_design_projects"];
function isConsentBit(e) {
  return typeof e === "string" && f.includes(e);
}
function consentPromptFor(e) {
  switch (e) {
    case "agent_design_projects":
      return "Connect to Claude Design? Claude can read and edit your Design projects from this tool. Change anytime at claude.ai/design/settings or with /design revoke.";
  }
}
function vli(e) {
  e.consentCache = null, e.consentFetch = null, e.consentCacheGeneration++;
}
async function l(credentials) {
  await ul({
    credentials: credentials
  });
  let n;
  if (X() && credentials !== void 0) n = await Kl(credentials);else n = Ln();
  let s = n?.refreshToken && n.scopes?.includes("user:design:read") ? n.accessToken : null;
  if (!s) {
    let r = await yYo(credentials);
    s = r.ok ? r.accessToken : n?.accessToken ?? null;
  }
  return {
    auth: "none",
    ...(s && {
      headers: {
        Authorization: `Bearer ${s}`
      }
    })
  };
}
async function y(e) {
  try {
    let n = await jt.get("/v1/design/consent", {
      ...(await l(e)),
      validateStatus: r => r < 500
    });
    if (!n.ok || n.status !== 200) return {};
    let s = {};
    for (let r of f) {
      let o = n.data?.[r];
      if (typeof o === "boolean") s[r] = o;
    }
    return s;
  } catch (error) {
    return t(`Design consent pre-flight GET failed (${d(error)}); falling back to 403-seeded cache.`), {};
  }
}
function seedDesignConsentBit(e, n, s) {
  if (n === "agent_design_projects" && s === !1) nfi(e), rfi(e), tfi(e);
  e.consentCache = {
    ...(e.consentCache ?? {}),
    [n]: s
  };
}
async function Eli(e) {
  return !!(await OBe(e))?.accessToken;
}
async function h(credentials_2) {
  if (!Fn()) return {
    ok: !1,
    reason: "wrong_provider"
  };
  if (St()) return {
    ok: !1,
    reason: "essential_traffic_only"
  };
  await ul({
    credentials: credentials_2
  });
  let n;
  if (X() && credentials_2 !== void 0) n = await Kl(credentials_2);else n = Ln();
  if (n?.accessToken && n.refreshToken && n.scopes?.includes("user:design:read")) return {
    ok: !0,
    accessToken: n.accessToken,
    bearer: "design_scoped_login"
  };
  let s = await yYo(credentials_2);
  if (s.ok) return {
    ok: !0,
    accessToken: s.accessToken,
    bearer: "design_credential"
  };
  if (n?.accessToken) return {
    ok: !0,
    accessToken: n.accessToken,
    bearer: n.scopes?.includes("user:design:read") ? "design_scoped_login" : "login"
  };
  return {
    ok: !1,
    reason: s.reason,
    detail: s.detail
  };
}
async function Eqt(e) {
  return h(e);
}
async function wouldNeedDesignConsent(e, n) {
  if (!Fn() || St()) return null;
  if (e.consentCache === null) {
    let s = e.consentFetch ??= y(n),
      consentCacheGeneration = e.consentCacheGeneration,
      o = await s;
    if (e.consentCache === null && e.consentCacheGeneration === consentCacheGeneration) {
      e.consentCache = {};
      for (let a of f) {
        let i = o[a];
        if (typeof i === "boolean") seedDesignConsentBit(e, a, i);
      }
    }
    if (e.consentFetch === s) e.consentFetch = null;
  }
  return e.consentCache?.agent_design_projects === !1 ? "agent_design_projects" : null;
}
async function gYo(e) {
  if (!Fn() || St()) return !1;
  let n;
  if (X() && e !== void 0) n = (await Kl(e))?.accessToken;else n = Ln()?.accessToken;
  if (n) return !1;
  return !(await OBe(e))?.accessToken;
}
async function postDesignConsent(e, consent, s) {
  try {
    let r = await jt.post("/v1/design/consent", {
      consent: consent
    }, {
      ...(await l(s)),
      validateStatus: o => o < 300
    });
    if (!r.ok) throw new R(`Couldn't record Design consent (${r.reason === "no-auth" ? r.detail : r.reason}).`, "design consent POST blocked by policy gate");
  } catch (error) {
    throw m("design_consent", "post_failed"), error;
  }
  seedDesignConsentBit(e, consent, !0), g("design_consent");
}
async function Tli(e, consent_2, s) {
  try {
    let r = await jt.delete("/v1/design/consent", {
      consent: consent_2
    }, {
      ...(await l(s)),
      validateStatus: o => o < 300
    });
    if (!r.ok) throw new R(`Couldn't revoke Design consent (${r.reason === "no-auth" ? r.detail : r.reason}).`, "design consent DELETE blocked by policy gate");
  } catch (error) {
    if (rc(error) && error.response?.status === 404) seedDesignConsentBit(e, consent_2, !1);
    throw m("design_consent", "delete_failed"), error;
  }
  seedDesignConsentBit(e, consent_2, !1), g("design_consent");
}
async function _(e) {
  try {
    let n = await jt.get("/v1/design/grants", {
      ...(await l(e)),
      validateStatus: o => o < 500
    });
    if (!n.ok || n.status !== 200) {
      let status = n.ok ? n.status : 0;
      return c("design_project_grant", status === 404 ? "probe_404_old_server" : "probe_http_error", {
        status: status
      }), null;
    }
    let s = n.data?.grants;
    if (!Array.isArray(s)) return c("design_project_grant", "probe_shape"), null;
    let r = new Set();
    for (let o of s) {
      let a = o?.project_id;
      if (typeof a === "string" && a.length > 0) r.add(a);
    }
    return r;
  } catch (error) {
    return t(`Design project-grant probe failed (${d(error)}); falling back to the per-batch plan flow.`), c("design_project_grant", "probe_network"), null;
  }
}
async function $er(e, n, s) {
  let r = e.grantsFetch ??= _(s);
  try {
    let o = await r;
    if (o === null) return "unavailable";
    return o.has(n) ? "granted" : "notGranted";
  } finally {
    if (e.grantsFetch === r) e.grantsFetch = null;
  }
}
async function Cli(e, project_id, s) {
  let r;
  try {
    let o = await jt.post("/v1/design/grants", {
      project_id: project_id
    }, {
      ...(await l(s)),
      validateStatus: a => a < 300 || a === 404
    });
    if (!o.ok) throw new R(`Couldn't record the Design project write grant (${o.reason === "no-auth" ? o.detail : o.reason}).`, "design project grant POST blocked by policy gate");
    r = o.status;
  } catch (error) {
    throw m("design_project_grant", "post_failed"), error;
  }
  if (r === 404) throw ofi(e, project_id), m("design_project_grant", "mint_refused_404"), new R("This project cannot hold a durable write grant for this account (it may be shared from another organization, or not viewable) \u2014 use finalize_plan with writes/deletes and pass the returned plan_token for writes to this project.", "design project grant mint refused for this project");
  P3e(e, project_id), g("design_project_grant");
}
function Rli(e, n, s) {
  let r = null;
  async function o() {
    let a;
    try {
      let i = await jt.get("/v1/design/grants", {
        ...(await l(s)),
        validateStatus: u => u < 500
      });
      if (!i.ok || i.status !== 200) return null;
      a = i.data?.grants;
    } catch (error) {
      return t(`Server-approval watcher poll failed (${d(error)}); will poll again.`), null;
    }
    if (!Array.isArray(a)) return null;
    for (let i of a) {
      let u = i;
      if (u?.project_id !== n) continue;
      let createdAtMs = typeof u.created_at === "string" ? Date.parse(u.created_at) : NaN;
      if (Number.isNaN(createdAtMs)) return null;
      return {
        present: !0,
        createdAtMs: createdAtMs
      };
    }
    return {
      present: !1
    };
  }
  return {
    async poll() {
      let a = await o();
      if (a === null) return !1;
      if (r === null) return r = {
        createdAtMs: a.present ? a.createdAtMs : null
      }, !1;
      if (!a.present) return !1;
      if (!(r.createdAtMs === null || a.createdAtMs > r.createdAtMs)) return !1;
      if (PIe(e, n)) return !1;
      return P3e(e, n), !0;
    }
  };
}
dfi(h);
cfi(async e => !!(await OBe(e)));
ufi({
  wouldNeedDesignConsent: wouldNeedDesignConsent,
  consentPromptFor: consentPromptFor,
  postDesignConsent: postDesignConsent,
  seedDesignConsentBit: seedDesignConsentBit,
  isConsentBit: isConsentBit
});
export { isConsentBit as RSn, consentPromptFor as L6e, vli, seedDesignConsentBit as Khe, Eli, Eqt, wouldNeedDesignConsent as ASn, gYo, postDesignConsent as N6e, Tli, $er, Cli, Rli };