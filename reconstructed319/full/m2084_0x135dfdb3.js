// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  _
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  dt,
  Yt,
  Me
} from "B:/~BUN/root/chunk-9kvvd0hy.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  yr,
  mn
} from "B:/~BUN/root/chunk-44q965xg.js";
import {
  gi
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  ze
} from "B:/~BUN/root/chunk-xwzn0yxv.js";
import {
  it
} from "B:/~BUN/root/chunk-09e9xfa4.js";
import {
  o,
  E,
  C,
  He
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
import {
  L
} from "B:/~BUN/root/chunk-5ha2avah.js";
import {
  createHash as u
} from "crypto";
var Urt = "anthropic/returnToolOutput",
  VBr = [2],
  JYs = 4194304;

function F0o() {
  return !0
}

function LYn(e) {
  return it(e) && e.tool_host_interface !== void 0
}
var d = 64;
var l = 1024,
  a = 1024,
  c = 65536,
  i = p(() => C(E().int()).max(d)),
  y = p(() => C(o().min(1).max(a)).max(l).refine((e) => e.reduce((n, t) => n + t.length, 0) <= c)),
  f = p(() => He({
    versions: i(),
    deny_rules_digest: o().regex(/^[0-9a-f]{64}$/)
  }));

function QYs(e) {
  let n = s(e)?.[Urt];
  if (n === void 0) return {
    kind: "absent"
  };
  let t = i().safeParse(s(n)?.versions);
  if (!t.success) return {
    kind: "malformed"
  };
  if (m(t.data).length === 0) return {
    kind: "no_shared_version",
    versions: t.data
  };
  let r = f().safeParse(n);
  return r.success ? {
    kind: "requested",
    denyRulesDigest: r.data.deny_rules_digest
  } : {
    kind: "malformed"
  }
}

function m(e) {
  return VBr.filter((n) => e.includes(n))
}
var O = {
    [Me]: [ze, dt],
    [dt]: [ze],
    [Yt]: [dt, ze],
    [gi]: [dt, ze]
  },
  T = L([Me, ...Object.values(O).flat()]);

function H0o(e) {
  return L(e.map(yr).filter(({
    toolName: n,
    ruleContent: t
  }) => t !== void 0 && T.includes(n)).map(mn)).toSorted()
}

function $0o(e) {
  return y().safeParse(e).success
}

function ZYs(e) {
  return u("sha256").update(_(e)).digest("hex")
}

function e6s({
  tools: e,
  denyRules: n
}) {
  return {
    versions: [...VBr],
    tools: [...e],
    deny_rules: H0o(n)
  }
}

function s(e) {
  return it(e) ? e : void 0
}
export {
  Urt,
  VBr,
  JYs,
  F0o,
  LYn,
  QYs,
  H0o,
  $0o,
  ZYs,
  e6s
};
