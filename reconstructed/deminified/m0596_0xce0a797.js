// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { fp, UGr } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { y, c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { Io, Ie } from "B:/~BUN/root/chunk-sd4cj2qx.js";
import { Dh, nun, lYe, lRe, cRe, Be } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { Jt } from "B:/~BUN/root/chunk-r833zsf7.js";
function _(n, r) {
  if (n === "ANTHROPIC_DEFAULT_SONNET_MODEL") a.set("CLAUDE_CODE_3P_PROBE_WROTE_SONNET_DEFAULT", r);else if (n === "ANTHROPIC_DEFAULT_OPUS_MODEL") a.set("CLAUDE_CODE_3P_PROBE_WROTE_OPUS_DEFAULT", r);
}
function spe(n) {
  let r = n === "sonnet" ? a.ANTHROPIC_DEFAULT_SONNET_MODEL : a.ANTHROPIC_DEFAULT_OPUS_MODEL,
    f = n === "sonnet" ? a.CLAUDE_CODE_3P_PROBE_WROTE_SONNET_DEFAULT : a.CLAUDE_CODE_3P_PROBE_WROTE_OPUS_DEFAULT;
  return r !== void 0 && r === f;
}
var yT = {
    fable: "Fable",
    sonnet: "Sonnet",
    opus: "Opus",
    haiku: "Haiku"
  },
  O = 20000;
async function D7e(n, r) {
  let f;
  try {
    return await Promise.race([r, new Promise(l => {
      f = setTimeout((o, s) => {
        t(`[3p-probe] ${s} hit ${O}ms deadline; proceeding without it`), o([]);
      }, O, l, n);
    })]);
  } finally {
    clearTimeout(f);
  }
}
function u(n) {
  switch (n) {
    case "ANTHROPIC_DEFAULT_SONNET_MODEL":
      return a.ANTHROPIC_DEFAULT_SONNET_MODEL !== void 0 && !spe("sonnet");
    case "ANTHROPIC_DEFAULT_OPUS_MODEL":
      return a.ANTHROPIC_DEFAULT_OPUS_MODEL !== void 0 && !spe("opus");
    case "ANTHROPIC_DEFAULT_HAIKU_MODEL":
      return a.ANTHROPIC_DEFAULT_HAIKU_MODEL !== void 0;
    case "ANTHROPIC_SMALL_FAST_MODEL":
      return a.ANTHROPIC_SMALL_FAST_MODEL !== void 0;
    default:
      return !1;
  }
}
function T(n, r) {
  switch (n) {
    case "ANTHROPIC_DEFAULT_SONNET_MODEL":
      a.set("ANTHROPIC_DEFAULT_SONNET_MODEL", r);
      break;
    case "ANTHROPIC_DEFAULT_OPUS_MODEL":
      a.set("ANTHROPIC_DEFAULT_OPUS_MODEL", r);
      break;
    default:
      return;
  }
  _(n, r);
}
function eCn() {
  UGr({
    sonnet: a.ANTHROPIC_DEFAULT_SONNET_MODEL !== void 0 && !spe("sonnet"),
    opus: a.ANTHROPIC_DEFAULT_OPUS_MODEL !== void 0 && !spe("opus")
  });
}
async function Zsr(n) {
  eCn();
  let r = n?.pendingUserModel?.trim(),
    l = nun(r === "default" || r === "inherit" || r === "" ? void 0 : r ?? void 0),
    o = lRe(),
    s = l != null && l !== "" ? l : r !== void 0 && l == null ? o ?? void 0 : Dh() ?? o ?? void 0;
  switch (Ie()) {
    case "bedrock":
      return {
        lines: await m(s),
        hasHardFailure: !1
      };
    case "vertex":
      return {
        lines: await k(s),
        hasHardFailure: !1
      };
    case "mantle":
      {
        let e = !1;
        if (o !== null) {
          let E = Jt(o.trim().toLowerCase());
          e = !(E === "opus" || E === "best" || Be(E) === Be(Io[lYe].firstParty)) && cRe();
        }
        let d = l != null && l !== "" || Dh() != null || e;
        return D(d);
      }
    default:
      return {
        lines: [],
        hasHardFailure: !1
      };
  }
}
async function m(n) {
  let {
      checkBedrockDefaultAvailability: checkBedrockDefaultAvailability,
      seedEnvDefaultForUserPin: seedEnvDefaultForUserPin
    } = await import("B:/~BUN/root/chunk-16m5r29n.js"),
    l = seedEnvDefaultForUserPin(n);
  if (l && !u(l.envVar)) T(l.envVar, l.value);
  let o = await D7e("bedrock-fallback", checkBedrockDefaultAvailability()),
    s = [];
  for (let e of o) {
    if (u(e.envVar)) continue;
    if (process.env[e.envVar] = e.fallbackBedrockId, _(e.envVar, e.fallbackBedrockId), e.tier === "haiku") {
      if (!u("ANTHROPIC_DEFAULT_HAIKU_MODEL")) process.env.ANTHROPIC_DEFAULT_HAIKU_MODEL = e.fallbackBedrockId;
    }
    if (e.crossTier) process.env.ANTHROPIC_DEFAULT_OPUS_MODEL_NAME = e.fallbackName, process.env.ANTHROPIC_DEFAULT_OPUS_MODEL_DESCRIPTION = `Opus unavailable \u2014 using ${e.fallbackName}`;
    i("tengu_bedrock_default_fallback", {
      tier: c(e.tier),
      default_key: c(e.defaultKey),
      fallback_key: c(e.fallbackKey),
      cross_tier: y(e.crossTier ? "true" : "false")
    }), s.push(e.crossTier ? `${yT[e.tier]}: ${e.defaultName} not available \u2014 using ${e.fallbackName}. Enable ${e.defaultName} in the Bedrock console to upgrade.` : `${yT[e.tier]}: ${e.defaultName} not available \u2014 using ${e.fallbackName} for this session`);
  }
  return s;
}
async function k(n) {
  let {
      checkVertexDefaultAvailability: checkVertexDefaultAvailability,
      seedEnvDefaultForUserPin: seedEnvDefaultForUserPin_2
    } = await import("B:/~BUN/root/chunk-zj3gq8gq.js"),
    l = seedEnvDefaultForUserPin_2(n);
  if (l && !u(l.envVar)) T(l.envVar, l.value);
  let o = await D7e("vertex-fallback", checkVertexDefaultAvailability()),
    s = [];
  for (let e of o) {
    if (u(e.envVar)) continue;
    if (process.env[e.envVar] = e.fallbackVertexId, _(e.envVar, e.fallbackVertexId), e.tier === "haiku") {
      if (!u("ANTHROPIC_DEFAULT_HAIKU_MODEL")) process.env.ANTHROPIC_DEFAULT_HAIKU_MODEL = e.fallbackVertexId;
    }
    if (e.crossTier) process.env.ANTHROPIC_DEFAULT_OPUS_MODEL_NAME = e.fallbackName, process.env.ANTHROPIC_DEFAULT_OPUS_MODEL_DESCRIPTION = `Opus unavailable \u2014 using ${e.fallbackName}`;
    i("tengu_vertex_default_fallback", {
      tier: c(e.tier),
      default_key: c(e.defaultKey),
      fallback_key: c(e.fallbackKey),
      cross_tier: y(e.crossTier ? "true" : "false")
    }), s.push(e.crossTier ? `${yT[e.tier]}: ${e.defaultName} not available \u2014 using ${e.fallbackName}. Enable ${e.defaultName} in Model Garden to upgrade.` : `${yT[e.tier]}: ${e.defaultName} not available \u2014 using ${e.fallbackName} for this session`);
  }
  return s;
}
async function D(userPinned) {
  let {
      checkMantleDefaultAvailability: checkMantleDefaultAvailability
    } = await import("B:/~BUN/root/chunk-ryeddbwg.js"),
    f = await D7e("mantle-fallback", checkMantleDefaultAvailability(void 0, {
      userPinned: userPinned
    })),
    lines = [],
    hasHardFailure = !1,
    mantleOverride;
  for (let e of f) if (e.kind === "adminPin") {
    if (!userPinned) fp(e.adminMantleId), mantleOverride = e.adminMantleId;
  } else if (e.kind === "pinRefuted") {
    if (!userPinned) fp(e.workingMantleId), mantleOverride = e.workingMantleId, i("tengu_mantle_default_fallback", {
      default_key: c(e.defaultKey),
      fallback_key: c(e.workingKey),
      admin_pin_refuted: y("true")
    }), lines.push(`${yT[e.tier]}: the admin-configured Opus model is not available on this account \u2014 using ${e.workingName} for this session`);
  } else if (e.kind === "fallback") {
    let d = !1;
    if (!u(e.envVar)) process.env[e.envVar] = e.fallbackMantleId, _(e.envVar, e.fallbackMantleId), d = !0;
    if (!userPinned) fp(e.fallbackMantleId), mantleOverride = e.fallbackMantleId, d = !0;
    if (d) i("tengu_mantle_default_fallback", {
      default_key: c(e.defaultKey),
      fallback_key: c(e.fallbackKey)
    }), lines.push(`${yT[e.tier]}: ${e.defaultName} not available \u2014 using ${e.fallbackName} for this session`);
  } else hasHardFailure = !0, i("tengu_mantle_default_fallback", {
    default_key: y("exhausted")
  }), lines.push(`${yT[e.tier]}: no accessible model (tried ${e.triedNames.join(", ")}). Enable ${e.defaultName} in Amazon Bedrock (Mantle).`);
  return {
    lines: lines,
    hasHardFailure: hasHardFailure,
    mantleOverride: mantleOverride
  };
}
export { spe, yT, D7e, eCn, Zsr };