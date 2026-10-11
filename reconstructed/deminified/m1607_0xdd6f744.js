// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { Je } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { Io } from "B:/~BUN/root/chunk-sd4cj2qx.js";
import { e$ as defaultKey, dce as defaultKey_3, Lw } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { spe } from "B:/~BUN/root/chunk-acsg9bv8.js";
var u = Object.keys(Io);
function QSt(defaultKey_2) {
  return {
    sonnet: {
      envVarPriority: ["ANTHROPIC_DEFAULT_SONNET_MODEL"],
      defaultKey: defaultKey
    },
    opus: {
      envVarPriority: ["ANTHROPIC_DEFAULT_OPUS_MODEL"],
      defaultKey: defaultKey_2
    },
    haiku: {
      envVarPriority: ["ANTHROPIC_SMALL_FAST_MODEL", "ANTHROPIC_DEFAULT_HAIKU_MODEL"],
      defaultKey: defaultKey_3
    }
  };
}
function l(e) {
  if (e.startsWith("sonnet")) return "sonnet";
  if (e.startsWith("opus")) return "opus";
  if (e.startsWith("haiku")) return "haiku";
  return;
}
function T(e) {
  let o = Lw(e);
  for (let r of u) if (Lw(Io[r].firstParty) === o) return r;
  return;
}
function vKo(e) {
  return `${e.fromKey}-to-${e.toKey}`;
}
function ZSt(e, o) {
  let r = [];
  for (let tier of Object.keys(e)) {
    let n = e[tier],
      envVar,
      pinnedKey;
    for (let c of n.envVarPriority) {
      let K = process.env[c]?.trim();
      if (!K) continue;
      if (c === "ANTHROPIC_DEFAULT_OPUS_MODEL" && spe("opus") || c === "ANTHROPIC_DEFAULT_SONNET_MODEL" && spe("sonnet")) continue;
      if (o?.(K)) continue;
      let y = T(K);
      if (!y || l(y) !== tier || y === n.defaultKey) continue;
      envVar = c, pinnedKey = y;
      break;
    }
    if (!envVar || !pinnedKey) continue;
    let defaultKey_4 = n.defaultKey,
      d = u.indexOf(pinnedKey),
      p = u.indexOf(defaultKey_4);
    if (d >= p) continue;
    r.push({
      tier: tier,
      envVar: envVar,
      pinnedKey: pinnedKey,
      defaultKey: defaultKey_4
    });
  }
  return r;
}
function ewt(e, o) {
  let value = e?.trim();
  if (!value) return;
  if (a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST) return;
  let t = T(value);
  if (!t) return;
  let tier_2 = l(t);
  if (!tier_2) return;
  if (tier_2 === "haiku") return;
  let i = o[tier_2];
  if (Je().modelOverrides?.[Io[i.defaultKey].firstParty]) return;
  return {
    tier: tier_2,
    envVar: i.envVarPriority.at(-1),
    value: value
  };
}
function twt(e, o) {
  let r = [];
  for (let tier_3 of Object.keys(e)) {
    let n = e[tier_3];
    if (o?.[Io[n.defaultKey].firstParty]) continue;
    if (n.envVarPriority.some(item => {
      let s = process.env[item]?.trim();
      if (!s) return !1;
      let d = T(s);
      if (!d) return !0;
      return l(d) === tier_3;
    })) continue;
    r.push({
      tier: tier_3,
      envVar: n.envVarPriority.at(-1),
      defaultKey: n.defaultKey
    });
  }
  return r;
}
function nwt(e, o) {
  let r = u.indexOf(e),
    t = [];
  for (let n = r - 1; n >= 0; n--) {
    let i = u[n];
    if (l(i) === o) t.push(i);
  }
  return t;
}
export { QSt, vKo, ZSt, ewt, twt, nwt };