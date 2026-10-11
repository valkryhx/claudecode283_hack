// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  $o
} from "B:/~BUN/root/chunk-54p0h65d.js";
import {
  i
} from "B:/~BUN/root/chunk-728mwbhs.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  aH
} from "B:/~BUN/root/chunk-0fnha6bz.js";
import {
  d
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  _,
  m
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  dHr,
  An,
  oJ,
  vy,
  Dt,
  Ee,
  le
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  Kn
} from "B:/~BUN/root/chunk-3jyp964r.js";
var g = 86400000,
  f = 3000,
  F5 = $o(async (r) => {
    try {
      return {
        success: !0,
        data: (await vy(async () => {
          let o = await Dt.get("/api/oauth/account/settings", {
            timeout: f,
            credentials: r
          });
          if (!o.ok) throw Error(`Failed to get Grove settings: ${o.reason}`);
          return o
        }, {
          credentials: r
        })).data
      }
    } catch (e) {
      if (!(e instanceof Error) || !/data-residency|essential-traffic-only|no-auth/.test(e.message)) t(`Failed to fetch Grove settings: ${e}`, {
        level: "error"
      });
      return F5.cache.clear?.(), {
        success: !1
      }
    }
  }, () => "account");
async function zTn(r) {
  try {
    await vy(async () => {
      let e = await Dt.post("/api/oauth/account/grove_notice_viewed", {}, {
        credentials: r
      });
      if (!e.ok) throw Error(`Failed to mark Grove notice viewed: ${e.reason}`);
      return e
    }, {
      credentials: r
    }), F5.cache.clear?.(), _("api_grove_notice_mark_viewed")
  } catch (e) {
    t(`Failed to mark Grove notice viewed: ${e instanceof Error?e.message:String(e)}`, {
      level: "error"
    }), m("api_grove_notice_mark_viewed", "request_failed")
  }
}
async function P7e(r, e) {
  try {
    await vy(async () => {
      let o = await Dt.patch("/api/oauth/account/settings", {
        grove_enabled: r
      }, {
        credentials: e
      });
      if (!o.ok) throw Error(`Failed to update Grove settings: ${o.reason}`);
      return o
    }, {
      credentials: e
    }), F5.cache.clear?.(), _("api_grove_settings_update")
  } catch (o) {
    t(`updateGroveSettings failed: ${String(o)}`, {
      level: "error"
    }), m("api_grove_settings_update", "request_failed")
  }
}
async function HWe(r, e) {
  if (!oJ()) return !1;
  if (!dHr()) return !1;
  let o = An()?.accountUuid;
  if (!o) return !1;
  let n = le().groveConfigCache?.[o],
    s = Date.now();
  if (!n) return t("Grove: No cache, fetching config in background (dialog skipped this session)"), l(o, r, e), !1;
  if (s - n.timestamp > g) return t("Grove: Cache stale, returning cached data and refreshing in background"), l(o, r, e), n.grove_enabled;
  return t("Grove: Using fresh cached config"), n.grove_enabled
}
async function l(r, e, o) {
  try {
    let a = await rpe(o);
    if (!a.success) return;
    let n = a.data.grove_enabled,
      s = le().groveConfigCache?.[r];
    if (s?.grove_enabled === n && Date.now() - s.timestamp <= g) return;
    await Ee((c) => ({
      ...c,
      groveConfigCache: {
        ...c.groveConfigCache,
        [r]: {
          grove_enabled: n,
          timestamp: Date.now()
        }
      }
    }), e)
  } catch (a) {
    t(`Grove: Failed to fetch and store config: ${a}`)
  }
}
var rpe = $o(async (r) => {
  try {
    let e = await vy(async () => {
        let c = await Dt.get("/api/claude_code_grove", {
          timeout: f,
          credentials: r
        });
        if (!c.ok) throw Error(`Failed to fetch Grove notice config: ${c.reason}`);
        return c
      }, {
        credentials: r
      }),
      {
        grove_enabled: o,
        domain_excluded: a,
        notice_is_grace_period: n,
        notice_reminder_frequency: s
      } = e.data;
    return {
      success: !0,
      data: {
        grove_enabled: o,
        domain_excluded: a ?? !1,
        notice_is_grace_period: n ?? !0,
        notice_reminder_frequency: s
      }
    }
  } catch (e) {
    return t(`Failed to fetch Grove notice config: ${e}`), {
      success: !1
    }
  }
}, () => "config");

function GTn(r, e, o) {
  if (!r.success || !e.success) return !1;
  let a = r.data,
    n = e.data;
  if (a.grove_enabled !== null) return !1;
  if (o) return !0;
  if (!n.notice_is_grace_period) return !0;
  let c = n.notice_reminder_frequency;
  if (c !== null && a.grove_notice_viewed_at) {
    let u = new Date(a.grove_notice_viewed_at).getTime();
    if (isNaN(u)) return d(Error(`Invalid grove_notice_viewed_at from API: ${a.grove_notice_viewed_at}`)), !0;
    return Math.floor((Date.now() - u) / 86400000) >= c
  } else {
    let u = a.grove_notice_viewed_at;
    return u === null || u === void 0
  }
}
async function AZr(r) {
  let [e, o] = await Promise.all([F5(r), rpe(r)]);
  if (GTn(e, o, !1)) {
    let n = o.success ? o.data : null;
    if (i("tengu_grove_print_viewed", {
        dismissable: n?.notice_is_grace_period
      }), n === null || n.notice_is_grace_period) aH(`
An update to our Consumer Terms and Privacy Policy will take effect on October 8, 2025. Run \`claude\` to review the updated terms.

`), await zTn(r);
    else aH(`
[ACTION REQUIRED] An update to our Consumer Terms and Privacy Policy has taken effect on October 8, 2025. You must run \`claude\` to review the updated terms.

`), await Kn(1)
  }
}
export {
  F5,
  zTn,
  P7e,
  HWe,
  rpe,
  GTn,
  AZr
};
