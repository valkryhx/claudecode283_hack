// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  HBs
} from "B:/~BUN/root/chunk-1g25msn4.js";
import {
  Ai
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  we
} from "B:/~BUN/root/chunk-r5zmhp23.js";
import {
  V
} from "B:/~BUN/root/chunk-f9dwrymq.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  jt,
  v
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  o,
  E,
  u,
  Be
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
import {
  he
} from "B:/~BUN/root/chunk-fet34rqr.js";
import {
  createHash as c
} from "crypto";

function S_a() {
  let e = v("tengu_quiet_ledger", "off");
  return e === "count" || e === "on" ? e : "off"
}
var P5o = 67108864,
  l = 3000,
  m = 1e4,
  O5o = 300000,
  d = he({
    pausedUntilMs: 0
  }, (e) => {
    e.pausedUntilMs = 0
  });

function I5o() {
  return Date.now() < d.pausedUntilMs
}

function Znr(e, t) {
  let i = Math.max(d.pausedUntilMs, Date.now() + t);
  if (i === d.pausedUntilMs) return;
  d.pausedUntilMs = i, V("warn", "stage_file_store_check_paused", {
    cause: e,
    until: Number.isFinite(t) ? "timer" : "process_exit",
    ...Number.isFinite(t) && {
      for_s: Math.round(t / 1000)
    }
  })
}
var f = p(() => u({
    file: u({
      file: u({
        size: Be([o(), E()]).optional(),
        md5: o().optional()
      })
    })
  })),
  h = /^[0-9a-f]{32}$/;
async function M5o(e, t) {
  let i = AbortSignal.timeout(l);
  try {
    let n = await jt.post("/v1/filestore/fs/readFileMetadata", {
      filesystem_id: e.filesystemId,
      path: t
    }, {
      auth: "none",
      host: "api",
      baseUrl: e.filestoreUrl,
      headers: {
        Authorization: `Bearer ${e.filestoreJwt}`
      },
      timeout: l,
      signal: i,
      maxContentLength: 65536,
      validateStatus: () => !0
    });
    if (!n.ok) return {
      answer: "not_sent"
    };
    if (n.status === 404) return {
      answer: "not_found"
    };
    if (n.status === 401) return {
      answer: "credential_expired"
    };
    if (n.status === 403) return {
      answer: "credential_refused"
    };
    if (n.status < 200 || n.status >= 300) return {
      answer: "other_http_status"
    };
    let r = f().safeParse(n.data);
    if (!r.success) return {
      answer: "unexpected_shape"
    };
    let s = Number(r.data.file.file.size ?? 0),
      a = (r.data.file.file.md5 ?? "").toLowerCase();
    if (!Number.isSafeInteger(s) || s < 0) return {
      answer: "unexpected_shape"
    };
    return h.test(a) ? {
      answer: "size_and_md5",
      size: s,
      md5: a
    } : {
      answer: "no_usable_md5"
    }
  } catch (n) {
    return {
      answer: i.aborted || Ai(n).kind === "timeout" ? "timed_out" : "request_error"
    }
  }
}

function D5r(e, t) {
  return e.dev === t.dev && e.ino === t.ino && e.nlink === t.nlink && e.size === t.size && e.mtimeNs === t.mtimeNs && e.ctimeNs === t.ctimeNs
}
async function D5o(e, t) {
  return await we(g(e, t), m) ?? "timed_out"
}
async function g(e, t) {
  let i;
  try {
    let {
      handle: n,
      withNoAtime: r
    } = await HBs(e);
    i = n;
    let s = await i.stat({
      bigint: !0
    });
    if (!s.isFile() || !D5r(t, s)) return "changed";
    let a = c("md5");
    for await (let _ of i.createReadStream({
      autoClose: !1,
      start: 0,
      end: Number(s.size),
      signal: AbortSignal.timeout(m)
    })) a.update(_);
    return {
      md5: a.digest("hex"),
      opened: s,
      withNoAtime: r
    }
  } catch {
    return "unreadable"
  } finally {
    i?.close().catch(() => {})
  }
}
export {
  S_a,
  P5o,
  O5o,
  I5o,
  Znr,
  M5o,
  D5r,
  D5o
};
