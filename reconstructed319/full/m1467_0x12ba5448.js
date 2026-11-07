// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  jn
} from "B:/~BUN/root/chunk-rr294jrm.js";
import {
  Jk,
  fe
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  o,
  E,
  C,
  u,
  T
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
import {
  createHash as g
} from "crypto";
var f = 64,
  d = p(() => u({
    generation: E().int().min(1),
    etag: o().optional(),
    allow: C(o()),
    at: E(),
    tried: T(!0).optional()
  }));

function z6o(n) {
  return g("sha256").update(n, "utf8").digest("hex").slice(0, 32)
}

function c(n) {
  return jn(n)
}

function fwn(n) {
  let e = fe().remoteHomeSettingsSent?.[c(n)];
  if (e === void 0) return;
  let r = d().safeParse(e);
  return r.success ? r.data : void 0
}

function zdi(n) {
  let e = fwn(n);
  return e !== void 0 && e.tried !== !0
}
async function V3r(n, e, r) {
  let i = c(n);
  if (!await Jk((a) => ({
      ...a,
      remoteHomeSettingsSent: w({
        ...a.remoteHomeSettingsSent,
        [i]: S(a.remoteHomeSettingsSent?.[i], e)
      })
    }), r)) l("tengu_home_seed_record_unwritten", {}), t("home settings: the record of what was sent could not be written", {
    level: "warn"
  })
}

function S(n, e) {
  let r = d().safeParse(n).data,
    {
      tried: i,
      ...s
    } = e,
    a = !e.etag && (r ? r.tried : e.tried);
  return {
    ...s,
    ...a && {
      tried: !0
    },
    generation: Math.max(e.generation, r?.generation ?? 0),
    allow: e.allow.filter((m) => e.etag || !r || r.allow.includes(m))
  }
}

function w(n) {
  let e = Object.entries(n).flatMap(([r, i]) => {
    let s = d().safeParse(i);
    return s.success && Number.isFinite(s.data.at) ? [
      [r, s.data]
    ] : []
  });
  return Object.fromEntries(e.toSorted(([, r], [, i]) => i.at - r.at).slice(0, f))
}
export {
  z6o,
  fwn,
  zdi,
  V3r
};
