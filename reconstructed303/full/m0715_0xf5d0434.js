// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  H,
  pi
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  X
} from "B:/~BUN/root/chunk-yrjpmz6e.js";
import {
  ip
} from "B:/~BUN/root/chunk-gyr2a6wz.js";
import {
  Gt
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  Cve
} from "B:/~BUN/root/chunk-1fjjnb3f.js";
import {
  iOs,
  lOs,
  aRr,
  lRr,
  oX,
  TWn
} from "B:/~BUN/root/chunk-8gzvb73z.js";
import {
  pRr,
  bOs
} from "B:/~BUN/root/chunk-72n790j1.js";
import {
  Eas
} from "B:/~BUN/root/chunk-c3y383tr.js";
import {
  writeFile as p
} from "fs/promises";
var m = 30000,
  zeo = 300000,
  y = Cve,
  f = 16777216,
  c = "/api/oauth/organizations/:orgUUID/skills/list-skills?include_wiggle_skills=true";

function k(r) {
  return r ? `${c}&entrypoint=${encodeURIComponent(r)}` : c
}
async function i3t(r = {}) {
  let e = await d(r);
  if (!e.success && oX(e)) return d(r);
  return e
}
async function d(r) {
  try {
    let e = k(ip()),
      s = await Gt.get(e, {
        auth: "teleport-org",
        isBackground: r.isBackground,
        timeout: m,
        maxContentLength: f,
        credentials: r.credentials,
        earlyAnswer: r.earlyAnswer
      });
    if (!s.ok || !Array.isArray(s.data?.skills)) return aRr("skills", s);
    let n = s.data.skills.filter(lOs),
      a = n.map(iOs);
    try {
      Eas(n)
    } catch (t) {
      X("warn", "skills_sync_ownerships_not_recorded"), l(H(t))
    }
    try {
      bOs(n)
    } catch (t) {
      X("warn", "skills_sync_host_mount_kinds_not_recorded"), l(H(t))
    }
    return {
      success: !0,
      skills: a
    }
  } catch (e) {
    return lRr(e)
  }
}
async function kas(r, e, s, n = {}) {
  let a = ip(),
    t = [];
  if (a) t.push(`entrypoint=${encodeURIComponent(a)}`);
  if (s) t.push(`version=${encodeURIComponent(s)}`);
  let u = t.length > 0 ? `?${t.join("&")}` : "";
  try {
    let o = await Gt.get(`/api/oauth/organizations/:orgUUID/skills/${encodeURIComponent(r)}/download${u}`, {
      auth: "teleport-org",
      isBackground: n.isBackground,
      timeout: zeo,
      responseType: "arraybuffer",
      maxContentLength: y,
      credentials: n.credentials
    });
    if (!o.ok || !o.data) return X("warn", "skills_sync_download_not_ok", {
      reason: o.ok ? "empty_body" : o.reason
    }), !1;
    let i = Buffer.from(o.data);
    if (!pRr(i)) return X("warn", "skills_sync_download_not_zip", {
      serverError: TWn(i),
      bodyLen: i.length
    }), !1;
    return await p(e, i), !0
  } catch (o) {
    let {
      kind: i
    } = pi(o);
    return X("warn", "skills_sync_download_exception", {
      kind: i
    }), !1
  }
}
export {
  zeo,
  i3t,
  kas
};
