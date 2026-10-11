// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Xs } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { K } from "B:/~BUN/root/chunk-5px6g0cn.js";
import { Ld } from "B:/~BUN/root/chunk-snmb1kqg.js";
import { Dt } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { Ege, ujn, pjn, Oee, qsn, pTo, fTo } from "B:/~BUN/root/chunk-r6m7remx.js";
import { writeFile as u } from "fs/promises";
var timeout = 30000,
  timeout_2 = 300000,
  maxContentLength_2 = Ege,
  maxContentLength = 16777216,
  a = "/api/oauth/organizations/:orgUUID/skills/list-skills?include_wiggle_skills=true";
async function _kt(s = {}) {
  let e = await c(s);
  if (!e.success && Oee(e)) return c(s);
  return e;
}
async function c(s) {
  let e = Ld(),
    o = e ? `${a}&entrypoint=${encodeURIComponent(e)}` : a;
  try {
    let t = await Dt.get(o, {
      auth: "teleport-org",
      isBackground: s.isBackground,
      timeout: timeout,
      maxContentLength: maxContentLength,
      credentials: s.credentials
    });
    if (!t.ok || !Array.isArray(t.data?.skills)) return ujn("skills", t);
    return {
      success: !0,
      skills: t.data.skills.filter(fTo).map(pTo)
    };
  } catch (error) {
    return pjn(error);
  }
}
async function kso(s, e, o, t = {}) {
  let l = Ld(),
    i = [];
  if (l) i.push(`entrypoint=${encodeURIComponent(l)}`);
  if (o) i.push(`version=${encodeURIComponent(o)}`);
  let d = i.length > 0 ? `?${i.join("&")}` : "";
  try {
    let n = await Dt.get(`/api/oauth/organizations/:orgUUID/skills/${encodeURIComponent(s)}/download${d}`, {
      auth: "teleport-org",
      isBackground: t.isBackground,
      timeout: timeout_2,
      responseType: "arraybuffer",
      maxContentLength: maxContentLength_2,
      credentials: t.credentials
    });
    if (!n.ok || !n.data) return K("warn", "skills_sync_download_not_ok", {
      reason: n.ok ? "empty_body" : n.reason
    }), !1;
    let r = Buffer.from(n.data);
    if (r.length < 2 || r[0] !== 80 || r[1] !== 75) return K("warn", "skills_sync_download_not_zip", {
      serverError: qsn(r),
      bodyLen: r.length
    }), !1;
    return await u(e, r), !0;
  } catch (error) {
    let {
      kind: kind
    } = Xs(error);
    return K("warn", "skills_sync_download_exception", {
      kind: kind
    }), !1;
  }
}
export { _kt, kso };