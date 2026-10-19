// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { eo } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { XW } from "B:/~BUN/root/chunk-xf0m410v.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { g, m } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { Zln, wn, Z3, lv, Gt, Ce, ue } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { Yn } from "B:/~BUN/root/chunk-9grc6xh0.js";
var f = 86400000,
  timeout = 3000,
  woe = eo(async credentials => {
    try {
      return {
        success: !0,
        data: (await lv(async () => {
          let o = await Gt.get("/api/oauth/account/settings", {
            timeout: timeout,
            credentials: credentials
          });
          if (!o.ok) throw Error(`Failed to get Grove settings: ${o.reason}`);
          return o;
        }, {
          credentials: credentials
        })).data
      };
    } catch (error) {
      if (!(error instanceof Error) || !/data-residency|essential-traffic-only|no-auth/.test(error.message)) t(`Failed to fetch Grove settings: ${error}`, {
        level: "error"
      });
      return woe.cache.clear?.(), {
        success: !1
      };
    }
  }, () => "account");
async function Var(credentials_2) {
  try {
    await lv(async () => {
      let e = await Gt.post("/api/oauth/account/grove_notice_viewed", {}, {
        credentials: credentials_2
      });
      if (!e.ok) throw Error(`Failed to mark Grove notice viewed: ${e.reason}`);
      return e;
    }, {
      credentials: credentials_2
    }), woe.cache.clear?.(), g("api_grove_notice_mark_viewed");
  } catch (error) {
    t(`Failed to mark Grove notice viewed: ${error instanceof Error ? error.message : String(error)}`, {
      level: "error"
    }), m("api_grove_notice_mark_viewed", "request_failed");
  }
}
async function bTt(grove_enabled, credentials_3) {
  try {
    await lv(async () => {
      let o = await Gt.patch("/api/oauth/account/settings", {
        grove_enabled: grove_enabled
      }, {
        credentials: credentials_3
      });
      if (!o.ok) throw Error(`Failed to update Grove settings: ${o.reason}`);
      return o;
    }, {
      credentials: credentials_3
    }), woe.cache.clear?.(), g("api_grove_settings_update");
  } catch (error) {
    t(`updateGroveSettings failed: ${String(error)}`, {
      level: "error"
    }), m("api_grove_settings_update", "request_failed");
  }
}
async function wot(r, e) {
  if (!Z3()) return !1;
  if (!Zln()) return !1;
  let o = wn()?.accountUuid;
  if (!o) return !1;
  let n = ue().groveConfigCache?.[o],
    s = Date.now();
  if (!n) return t("Grove: No cache, fetching config in background (dialog skipped this session)"), u(o, r, e), !1;
  if (s - n.timestamp > f) return t("Grove: Cache stale, returning cached data and refreshing in background"), u(o, r, e), n.grove_enabled;
  return t("Grove: Using fresh cached config"), n.grove_enabled;
}
async function u(r, e, o) {
  try {
    let a = await LRe(o);
    if (!a.success) return;
    let grove_enabled_2 = a.data.grove_enabled,
      s = ue().groveConfigCache?.[r];
    if (s?.grove_enabled === grove_enabled_2 && Date.now() - s.timestamp <= f) return;
    await Ce(c => ({
      ...c,
      groveConfigCache: {
        ...c.groveConfigCache,
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
var LRe = eo(async credentials_4 => {
  try {
    let e = await lv(async () => {
        let c = await Gt.get("/api/claude_code_grove", {
          timeout: timeout,
          credentials: credentials_4
        });
        if (!c.ok) throw Error(`Failed to fetch Grove notice config: ${c.reason}`);
        return c;
      }, {
        credentials: credentials_4
      }),
      {
        grove_enabled: grove_enabled_3,
        domain_excluded: domain_excluded,
        notice_is_grace_period: notice_is_grace_period,
        notice_reminder_frequency: notice_reminder_frequency
      } = e.data;
    return {
      success: !0,
      data: {
        grove_enabled: grove_enabled_3,
        domain_excluded: domain_excluded ?? !1,
        notice_is_grace_period: notice_is_grace_period ?? !0,
        notice_reminder_frequency: notice_reminder_frequency
      }
    };
  } catch (error) {
    return t(`Failed to fetch Grove notice config: ${error}`), {
      success: !1
    };
  }
}, () => "config");
function qar(r, e, o) {
  if (!r.success || !e.success) return !1;
  let a = r.data,
    n = e.data;
  if (a.grove_enabled !== null) return !1;
  if (o) return !0;
  if (!n.notice_is_grace_period) return !0;
  let notice_reminder_frequency_2 = n.notice_reminder_frequency;
  if (notice_reminder_frequency_2 !== null && a.grove_notice_viewed_at) {
    let d = new Date(a.grove_notice_viewed_at).getTime();
    if (isNaN(d)) return l(Error(`Invalid grove_notice_viewed_at from API: ${a.grove_notice_viewed_at}`)), !0;
    return Math.floor((Date.now() - d) / 86400000) >= notice_reminder_frequency_2;
  } else {
    let grove_notice_viewed_at = a.grove_notice_viewed_at;
    return grove_notice_viewed_at === null || grove_notice_viewed_at === void 0;
  }
}
async function mns(r) {
  let [e, o] = await Promise.all([woe(r), LRe(r)]);
  if (qar(e, o, !1)) {
    let n = o.success ? o.data : null;
    if (i("tengu_grove_print_viewed", {
      dismissable: n?.notice_is_grace_period
    }), n === null || n.notice_is_grace_period) XW(`
An update to our Consumer Terms and Privacy Policy will take effect on October 8, 2025. Run \`claude\` to review the updated terms.

`), await Var(r);else XW(`
[ACTION REQUIRED] An update to our Consumer Terms and Privacy Policy has taken effect on October 8, 2025. You must run \`claude\` to review the updated terms.

`), await Yn(1);
  }
}
export { woe, Var, bTt, wot, LRe, qar, mns };