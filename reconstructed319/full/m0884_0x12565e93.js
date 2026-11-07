// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  F,
  Ai
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  V
} from "B:/~BUN/root/chunk-f9dwrymq.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  yf
} from "B:/~BUN/root/chunk-65j2302z.js";
import {
  jt
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  A0e
} from "B:/~BUN/root/chunk-63btkzab.js";
import {
  lco,
  X0i,
  nLi,
  $br,
  rLi,
  fco,
  pco,
  Poe,
  zbr
} from "B:/~BUN/root/chunk-nk59bmc9.js";
import {
  eci
} from "B:/~BUN/root/chunk-j9zj5nqq.js";
import {
  writeFile as k
} from "fs/promises";
var _ = 30000,
  c3o = 300000,
  m = A0e,
  f = 16777216,
  u = "/api/oauth/organizations/:orgUUID/skills/list-skills?include_wiggle_skills=true";

function y(t) {
  return t ? `${u}&entrypoint=${encodeURIComponent(t)}` : u
}
var g = "&wrapped_skills_as_plugins=true";
async function bwn(t = {}) {
  let r = await d(t);
  if (!r.success && Poe(r)) return d(t);
  return r
}
async function d(t) {
  try {
    let r = `${y(yf())}${t.convertedSkillsAsPlugins===!0?g:""}`,
      n = await jt.get(r, {
        auth: "teleport-org",
        isBackground: t.isBackground,
        timeout: _,
        maxContentLength: f,
        credentials: t.credentials,
        earlyAnswer: t.earlyAnswer
      });
    if (!n.ok || !Array.isArray(n.data?.skills)) return fco("skills", n);
    let o = n.data.skills.filter(rLi),
      l = o.filter((s) => t.withoutAnthropicsOwn !== !0 || $br(s) !== "anthropic"),
      i = l.map(nLi);
    try {
      eci([...l, ...o])
    } catch (s) {
      V("warn", "skills_sync_ownerships_not_recorded"), a(F(s))
    }
    try {
      X0i(o)
    } catch (s) {
      V("warn", "skills_sync_host_mount_kinds_not_recorded"), a(F(s))
    }
    return {
      success: !0,
      skills: i
    }
  } catch (r) {
    return pco(r)
  }
}
async function Zdi(t, r, n, o = {}) {
  let l = yf(),
    i = [];
  if (l) i.push(`entrypoint=${encodeURIComponent(l)}`);
  if (n) i.push(`version=${encodeURIComponent(n)}`);
  let s = i.length > 0 ? `?${i.join("&")}` : "",
    c;
  try {
    let e = await jt.get(`/api/oauth/organizations/:orgUUID/skills/${encodeURIComponent(t)}/download${s}`, {
      auth: "teleport-org",
      isBackground: o.isBackground,
      timeout: c3o,
      responseType: "arraybuffer",
      maxContentLength: m,
      credentials: o.credentials
    });
    if (!e.ok || !e.data) return V("warn", "skills_sync_download_not_ok", {
      reason: e.ok ? "empty_body" : e.reason
    }), !1;
    if (c = Buffer.from(e.data), !lco(c)) return V("warn", "skills_sync_download_not_zip", {
      serverError: zbr(c),
      bodyLen: c.length
    }), !1
  } catch (e) {
    let {
      kind: p
    } = Ai(e);
    return V("warn", "skills_sync_download_exception", {
      kind: p
    }), !1
  }
  return await k(r, c), !0
}
export {
  c3o,
  bwn,
  Zdi
};
