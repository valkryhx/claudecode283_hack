// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  et
} from "B:/~BUN/root/chunk-fkr27nhj.js";
import {
  _
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  Xc,
  I,
  u,
  B,
  T
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
var t = 1,
  f = 65536,
  r = p(() => Xc().min(0).default(0)),
  m = p(() => u({
    version: Xc()
  })),
  n = p(() => u({
    version: T(t),
    generation: Xc().min(1),
    appliedBeforeFirstAsk: I(),
    outcome: B(["applied", "partial"]),
    filesApplied: r(),
    filesRefused: r(),
    settingsWritten: I().default(!1),
    replacedForeign: r(),
    writtenAtMs: Xc().min(0)
  }));

function W6o(o) {
  let e = n().safeParse({
    ...o,
    version: t
  });
  if (!e.success) throw Error("home ready row is off-schema");
  return Buffer.from(_(e.data))
}

function Qtr(o) {
  if (o.length > f) return {
    ok: !1,
    reason: "oversize"
  };
  let e = et(o.toString("utf8"), !1),
    s = m().safeParse(e);
  if (s.success && s.data.version !== t) return {
    ok: !1,
    reason: "unsupported_version"
  };
  let a = n().safeParse(e);
  if (!a.success) return {
    ok: !1,
    reason: "malformed"
  };
  let {
    version: l,
    ...i
  } = a.data;
  return {
    ok: !0,
    ready: i
  }
}
export {
  W6o,
  Qtr
};
