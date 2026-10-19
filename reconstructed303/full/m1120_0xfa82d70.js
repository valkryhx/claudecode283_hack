// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  x,
  d
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  W
} from "B:/~BUN/root/chunk-hg8ngszx.js";
import {
  g,
  m,
  p
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  Fn,
  Xa,
  ba,
  Gt
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  At
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  Xn
} from "B:/~BUN/root/chunk-8pmnanyd.js";
import {
  $ns,
  Uns,
  LNe,
  X_e,
  Bns,
  jns
} from "B:/~BUN/root/chunk-wpygyckw.js";
import {
  HRe,
  xJr
} from "B:/~BUN/root/chunk-psnvqzve.js";
import {
  qns,
  Kns,
  Yns
} from "B:/~BUN/root/chunk-mhrrrs4g.js";
var u = ["agent_design_projects"];

function nYt(e) {
  return typeof e === "string" && u.includes(e)
}

function PNe(e) {
  switch (e) {
    case "agent_design_projects":
      return "Connect to Claude Design? Claude can read and edit your Design projects from this tool. Change anytime at claude.ai/design/settings or with /design revoke."
  }
}

function Mns(e) {
  e.consentCache = null, e.consentFetch = null, e.consentCacheGeneration++
}
async function l(e) {
  await ba({
    credentials: e
  });
  let n;
  if (W() && e !== void 0) n = await Xa(e);
  else n = Fn();
  let s = n?.refreshToken && n.scopes?.includes("user:design:read") ? n.accessToken : null;
  if (!s) {
    let r = await xJr(e);
    s = r.ok ? r.accessToken : n?.accessToken ?? null
  }
  return {
    auth: "none",
    ...s && {
      headers: {
        Authorization: `Bearer ${s}`
      }
    }
  }
}
async function y(e) {
  try {
    let n = await Gt.get("/v1/design/consent", {
      ...await l(e),
      validateStatus: (r) => r < 500
    });
    if (!n.ok || n.status !== 200) return {};
    let s = {};
    for (let r of u) {
      let o = n.data?.[r];
      if (typeof o === "boolean") s[r] = o
    }
    return s
  } catch (n) {
    return t(`Design consent pre-flight GET failed (${d(n)}); falling back to 403-seeded cache.`), {}
  }
}

function Uce(e, n, s) {
  if (n === "agent_design_projects" && s === !1) Uns(e), Bns(e), $ns(e);
  e.consentCache = {
    ...e.consentCache ?? {},
    [n]: s
  }
}
async function Dns(e) {
  return !!(await HRe(e))?.accessToken
}
async function h(e) {
  if (!Xn()) return {
    ok: !1,
    reason: "wrong_provider"
  };
  if (At()) return {
    ok: !1,
    reason: "essential_traffic_only"
  };
  await ba({
    credentials: e
  });
  let n;
  if (W() && e !== void 0) n = await Xa(e);
  else n = Fn();
  if (n?.accessToken && n.refreshToken && n.scopes?.includes("user:design:read")) return {
    ok: !0,
    accessToken: n.accessToken,
    bearer: "design_scoped_login"
  };
  let s = await xJr(e);
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
  }
}
async function RTt(e) {
  return h(e)
}
async function rYt(e, n) {
  if (!Xn() || At()) return null;
  if (e.consentCache === null) {
    let s = e.consentFetch ??= y(n),
      r = e.consentCacheGeneration,
      o = await s;
    if (e.consentCache === null && e.consentCacheGeneration === r) {
      e.consentCache = {};
      for (let a of u) {
        let i = o[a];
        if (typeof i === "boolean") Uce(e, a, i)
      }
    }
    if (e.consentFetch === s) e.consentFetch = null
  }
  return e.consentCache?.agent_design_projects === !1 ? "agent_design_projects" : null
}
async function AJr(e) {
  if (!Xn() || At()) return !1;
  let n;
  if (W() && e !== void 0) n = (await Xa(e))?.accessToken;
  else n = Fn()?.accessToken;
  if (n) return !1;
  return !(await HRe(e))?.accessToken
}
async function ONe(e, n, s) {
  try {
    let r = await Gt.post("/v1/design/consent", {
      consent: n
    }, {
      ...await l(s),
      validateStatus: (o) => o < 300
    });
    if (!r.ok) throw new x(`Couldn't record Design consent (${r.reason==="no-auth"?r.detail:r.reason}).`, "design consent POST blocked by policy gate")
  } catch (r) {
    throw m("design_consent", "post_failed"), r
  }
  Uce(e, n, !0), g("design_consent")
}
async function Lns(e, n, s) {
  try {
    let r = await Gt.delete("/v1/design/consent", {
      consent: n
    }, {
      ...await l(s),
      validateStatus: (o) => o < 300 || o === 404
    });
    if (!r.ok) throw new x(`Couldn't revoke Design consent (${r.reason==="no-auth"?r.detail:r.reason}).`, "design consent DELETE blocked by policy gate")
  } catch (r) {
    throw m("design_consent", "delete_failed"), r
  }
  Uce(e, n, !1), g("design_consent")
}
async function _(e) {
  try {
    let n = await Gt.get("/v1/design/grants", {
      ...await l(e),
      validateStatus: (o) => o < 500
    });
    if (!n.ok || n.status !== 200) {
      let o = n.ok ? n.status : 0;
      return p("design_project_grant", o === 404 ? "probe_404_old_server" : "probe_http_error", {
        status: o
      }), null
    }
    let s = n.data?.grants;
    if (!Array.isArray(s)) return p("design_project_grant", "probe_shape"), null;
    let r = new Set;
    for (let o of s) {
      let a = o?.project_id;
      if (typeof a === "string" && a.length > 0) r.add(a)
    }
    return r
  } catch (n) {
    return t(`Design project-grant probe failed (${d(n)}); falling back to the per-batch plan flow.`), p("design_project_grant", "probe_network"), null
  }
}
async function BRn(e, n, s) {
  let r = e.grantsFetch ??= _(s);
  try {
    let o = await r;
    if (o === null) return "unavailable";
    return o.has(n) ? "granted" : "notGranted"
  } finally {
    if (e.grantsFetch === r) e.grantsFetch = null
  }
}
async function Nns(e, n, s) {
  let r;
  try {
    let o = await Gt.post("/v1/design/grants", {
      project_id: n
    }, {
      ...await l(s),
      validateStatus: (a) => a < 300 || a === 404
    });
    if (!o.ok) throw new x(`Couldn't record the Design project write grant (${o.reason==="no-auth"?o.detail:o.reason}).`, "design project grant POST blocked by policy gate");
    r = o.status
  } catch (o) {
    throw m("design_project_grant", "post_failed"), o
  }
  if (r === 404) throw jns(e, n), m("design_project_grant", "mint_refused_404"), new x("This project cannot hold a durable write grant for this account (it may be shared from another organization, or not viewable) \u2014 use finalize_plan with writes/deletes and pass the returned plan_token for writes to this project.", "design project grant mint refused for this project");
  LNe(e, n), g("design_project_grant")
}

function Fns(e, n, s) {
  let r = null;
  async function o() {
    let a;
    try {
      let i = await Gt.get("/v1/design/grants", {
        ...await l(s),
        validateStatus: (c) => c < 500
      });
      if (!i.ok || i.status !== 200) return null;
      a = i.data?.grants
    } catch (i) {
      return t(`Server-approval watcher poll failed (${d(i)}); will poll again.`), null
    }
    if (!Array.isArray(a)) return null;
    for (let i of a) {
      let c = i;
      if (c?.project_id !== n) continue;
      let f = typeof c.created_at === "string" ? Date.parse(c.created_at) : NaN;
      if (Number.isNaN(f)) return null;
      return {
        present: !0,
        createdAtMs: f
      }
    }
    return {
      present: !1
    }
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
      if (X_e(e, n)) return !1;
      return LNe(e, n), !0
    }
  }
}
qns(h);
Kns(async (e) => !!await HRe(e));
Yns({
  wouldNeedDesignConsent: rYt,
  consentPromptFor: PNe,
  postDesignConsent: ONe,
  seedDesignConsentBit: Uce,
  isConsentBit: nYt
});
export {
  nYt,
  PNe,
  Mns,
  Uce,
  Dns,
  RTt,
  rYt,
  AJr,
  ONe,
  Lns,
  BRn,
  Nns,
  Fns
};
