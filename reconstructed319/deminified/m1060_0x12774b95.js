// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Nt } from "B:/~BUN/root/chunk-q78ga0zw.js";
import { R } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { zqe, i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { IN } from "B:/~BUN/root/chunk-15vbkr6z.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { g, m } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { Tm, t1n, hn, ER, hV, vE, jt, Le, fe } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { sr } from "B:/~BUN/root/chunk-27h4st9h.js";
import { o, E, me } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { po } from "B:/~BUN/root/chunk-67erjrg5.js";
var S = 86400000,
  P = 3600000,
  timeout = 3000;
function k() {
  return {
    "anthropic-client-os": zqe()
  };
}
var S8 = po(async credentials => {
  try {
    return {
      success: !0,
      data: (await vE(async () => {
        let n = await jt.get("/api/oauth/account/settings", {
          timeout: timeout,
          credentials: credentials
        });
        if (!n.ok) throw Error(`Failed to get Grove settings: ${n.reason}`);
        if (h(n.status), n.data?.grove_enabled !== null && typeof n.data?.grove_enabled !== "boolean") throw Error("Grove settings answer has no boolean or null grove_enabled");
        return n;
      }, {
        credentials: credentials
      })).data
    };
  } catch (error) {
    if (!(error instanceof Error) || !/data-residency|essential-traffic-only|no-auth/.test(error.message)) t(`Failed to fetch Grove settings: ${error}`, {
      level: "error"
    });
    return S8.cache.clear?.(), {
      success: !1
    };
  }
}, () => "account");
async function p6r(credentials_2) {
  try {
    await vE(async () => {
      let e = await jt.post("/api/oauth/account/grove_notice_viewed", {}, {
        credentials: credentials_2,
        headers: k()
      });
      if (!e.ok) throw Error(`Failed to mark Grove notice viewed: ${e.reason}`);
      return h(e.status), e;
    }, {
      credentials: credentials_2
    }), g("api_grove_notice_mark_viewed");
  } catch (error) {
    t(`Failed to mark Grove notice viewed: ${error instanceof Error ? error.message : String(error)}`, {
      level: "error"
    }), m("api_grove_notice_mark_viewed", "request_failed");
  } finally {
    S8.cache.clear?.();
  }
}
async function hqt(grove_enabled, credentials_3, {
  onlyIfUnset = !1
} = {}) {
  try {
    let {
      data: data
    } = await vE(async () => {
      let c = await jt.patch(onlyIfUnset ? "/api/oauth/account/settings?opt_in_only_if_unset=grove_enabled" : "/api/oauth/account/settings", {
        grove_enabled: grove_enabled
      }, {
        credentials: credentials_3,
        headers: k()
      });
      if (!c.ok) throw Error(`Failed to update Grove settings: ${c.reason}`);
      return h(c.status), c;
    }, {
      credentials: credentials_3
    });
    return g("api_grove_settings_update"), typeof data === "object" && data !== null && "grove_enabled" in data && typeof data.grove_enabled === "boolean" ? data.grove_enabled : void 0;
  } catch (error) {
    t(`updateGroveSettings failed: ${String(error)}`, {
      level: "error"
    }), m("api_grove_settings_update", "request_failed");
    return;
  } finally {
    S8.cache.clear?.();
  }
}
async function NCt(r, e) {
  if (!hV()) return !1;
  if (!t1n()) return !1;
  let n = hn()?.accountUuid;
  if (!n) return !1;
  let c = fe().groveConfigCache?.[n],
    u = Date.now();
  if (!c) return t("Grove: No cache, fetching config in background (dialog skipped this session)"), y(n, r, e), !1;
  if (u - c.timestamp > S) return t("Grove: Cache stale, returning cached data and refreshing in background"), y(n, r, e), c.grove_enabled;
  return t("Grove: Using fresh cached config"), c.grove_enabled;
}
async function y(r, e, n) {
  try {
    let s = ER(),
      c = await Une(n);
    if (!c.success) {
      if (c.errorStatus !== void 0 && c.errorStatus !== 401 && s && fe().groveConfigCache?.[r]) await Le(d => {
        let v = d.groveConfigCache?.[r];
        return v ? {
          ...d,
          groveConfigCache: {
            ...d.groveConfigCache,
            [r]: {
              ...v,
              timestamp: Date.now()
            }
          }
        } : d;
      }, e);
      return;
    }
    let grove_enabled_2 = c.data.grove_enabled,
      f = fe().groveConfigCache?.[r];
    if (f?.grove_enabled === grove_enabled_2 && Date.now() - f.timestamp <= S) return;
    await Le(d => ({
      ...d,
      groveConfigCache: {
        ...d.groveConfigCache,
        [r]: {
          grove_enabled: grove_enabled_2,
          timestamp: Date.now()
        }
      }
    }), e);
  } catch (error) {
    t(`Grove: Failed to fetch and store config: ${error}`);
  }
}
var Une = po(async credentials_4 => {
  try {
    let e = await vE(async () => {
        let d = await jt.get("/api/claude_code_grove", {
          timeout: timeout,
          credentials: credentials_4
        });
        if (!d.ok) throw Error(`Failed to fetch Grove notice config: ${d.reason}`);
        if (h(d.status), typeof d.data?.grove_enabled !== "boolean") throw Error("Grove notice config answer has no boolean grove_enabled");
        return d;
      }, {
        credentials: credentials_4
      }),
      {
        grove_enabled: grove_enabled_3,
        domain_excluded: domain_excluded,
        notice_is_grace_period: notice_is_grace_period,
        notice_reminder_frequency: notice_reminder_frequency,
        grove_locked_by_claude_science: grove_locked_by_claude_science
      } = e.data;
    return {
      success: !0,
      data: {
        grove_enabled: grove_enabled_3,
        domain_excluded: domain_excluded ?? !1,
        notice_is_grace_period: notice_is_grace_period ?? !0,
        notice_reminder_frequency: notice_reminder_frequency,
        grove_locked_by_claude_science: grove_locked_by_claude_science === !0
      }
    };
  } catch (error) {
    return t(`Failed to fetch Grove notice config: ${error}`), Une.cache.clear?.(), error instanceof C ? {
      success: !1,
      errorStatus: error.status
    } : {
      success: !1
    };
  }
}, () => "config");
function m6r(r, e, n) {
  if (!r.success || !e.success) return !1;
  let s = r.data,
    c = e.data;
  if (s.grove_enabled !== null) return !1;
  if (n) return !0;
  if (!c.notice_is_grace_period) return !0;
  let notice_reminder_frequency_2 = c.notice_reminder_frequency;
  if (notice_reminder_frequency_2 !== null && s.grove_notice_viewed_at) {
    let d = new Date(s.grove_notice_viewed_at).getTime();
    if (isNaN(d)) return a(Error(`Invalid grove_notice_viewed_at from API: ${s.grove_notice_viewed_at}`)), !0;
    return Math.floor((Date.now() - d) / 86400000) >= notice_reminder_frequency_2;
  } else {
    let grove_notice_viewed_at = s.grove_notice_viewed_at;
    return grove_notice_viewed_at === null || grove_notice_viewed_at === void 0;
  }
}
async function O4o(r) {
  let e = await A(r),
    n = e !== void 0 && _(w(fe())[e]);
  if (n) t("Grove: the server recently confirmed a Consumer Terms answer; not asking again");
  return n;
}
async function h6r(r, e, n) {
  let s = Date.now();
  try {
    let grove_enabled_4 = r.grove_enabled;
    if (typeof grove_enabled_4 !== "boolean" && grove_enabled_4 !== null) return;
    let u = grove_enabled_4 !== null,
      f = await A(n);
    if (f === void 0 || u === _(w(fe())[f])) return;
    await Le(d => {
      let v = w(d);
      if (u === _(v[f])) return d;
      let b = Object.entries(v).filter(([O, T]) => O !== f && _(T));
      return {
        ...d,
        groveChoiceSeenAt: Object.fromEntries(u ? [...b, [f, s]] : b)
      };
    }, e);
  } catch (error) {
    t(`Grove: could not save the Consumer Terms check: ${error}`);
  }
}
async function eli(r, e) {
  if (await O4o(e)) return;
  let [n, s] = await Promise.all([S8(e), Une(e)]);
  if (n.success) h6r(n.data, r, e);
  if (m6r(n, s, !1)) {
    let u = s.success ? s.data : null;
    if (l("tengu_grove_print_viewed", {
      dismissable: u?.notice_is_grace_period
    }), u === null || u.notice_is_grace_period) IN(`
An update to our Consumer Terms and Privacy Policy will take effect on October 8, 2025. Run \`claude\` to review the updated terms.

`), await p6r(e);else IN(`
[ACTION REQUIRED] An update to our Consumer Terms and Privacy Policy has taken effect on October 8, 2025. You must run \`claude\` to review the updated terms.

`), await sr(1);
  }
}
function _(r) {
  if (r === void 0) return !1;
  let e = Date.now() - r;
  return e >= 0 && e < P;
}
var H = p(() => me(o(), E()));
function w(r) {
  let e = H().safeParse(r.groveChoiceSeenAt);
  return e.success ? e.data : {};
}
async function A(r) {
  try {
    switch (await Tm(r)) {
      case "store":
        return Nt(hn()?.accountUuid)?.toLowerCase();
      case "env":
      case "fd":
        return Nt(i.CLAUDE_CODE_ACCOUNT_UUID)?.toLowerCase();
      case "none":
        return;
    }
  } catch (error) {
    t(`Grove: account unknown, so asking the server: ${error}`);
    return;
  }
}
class C extends R {
  status;
  constructor(r) {
    super(`HTTP ${r}`, "Grove request answered with an error status");
    this.status = r;
  }
}
function h(r) {
  if (r < 200 || r >= 300) throw new C(r);
}
export { S8, p6r, hqt, NCt, Une, m6r, O4o, h6r, eli };