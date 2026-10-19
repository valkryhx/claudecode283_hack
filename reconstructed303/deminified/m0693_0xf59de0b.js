// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Bp, xGo } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { b, c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { zo, xe } from "B:/~BUN/root/chunk-8pmnanyd.js";
import { r$t, ujs, K3, zMo, cy, kYn, rht, oWe, sWe, qe } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { z1n, ave } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { Pt } from "B:/~BUN/root/chunk-j0ghr71r.js";
var MP = {
  fable: "Fable",
  sonnet: "Sonnet",
  opus: "Opus",
  haiku: "Haiku"
};
async function PTt(l, r) {
  let f;
  try {
    return await Promise.race([r, new Promise(n => {
      f = setTimeout((o, s) => {
        t(`[3p-probe] ${s} hit ${z1n}ms deadline; proceeding without it`), o([]);
      }, z1n, n, l);
    })]);
  } finally {
    clearTimeout(f);
  }
}
function d(l) {
  switch (l) {
    case "ANTHROPIC_DEFAULT_SONNET_MODEL":
      return a.ANTHROPIC_DEFAULT_SONNET_MODEL !== void 0 && !K3("sonnet");
    case "ANTHROPIC_DEFAULT_OPUS_MODEL":
      return a.ANTHROPIC_DEFAULT_OPUS_MODEL !== void 0 && !K3("opus");
    case "ANTHROPIC_DEFAULT_HAIKU_MODEL":
      return a.ANTHROPIC_DEFAULT_HAIKU_MODEL !== void 0 && !K3("haiku");
    case "ANTHROPIC_SMALL_FAST_MODEL":
      return a.ANTHROPIC_SMALL_FAST_MODEL !== void 0;
    default:
      return !1;
  }
}
function m(l, r) {
  switch (l) {
    case "ANTHROPIC_DEFAULT_SONNET_MODEL":
      a.set("ANTHROPIC_DEFAULT_SONNET_MODEL", r);
      break;
    case "ANTHROPIC_DEFAULT_OPUS_MODEL":
      a.set("ANTHROPIC_DEFAULT_OPUS_MODEL", r);
      break;
    default:
      return;
  }
  r$t(l, r), ujs(l, r);
}
function ulr() {
  xGo({
    sonnet: a.ANTHROPIC_DEFAULT_SONNET_MODEL !== void 0 && !K3("sonnet"),
    opus: a.ANTHROPIC_DEFAULT_OPUS_MODEL !== void 0 && !K3("opus")
  });
}
async function IJr(l) {
  ulr();
  let r = l?.pendingUserModel?.trim(),
    n = kYn(r === "default" || r === "inherit" || r === "" ? void 0 : r ?? void 0),
    o = oWe(),
    s = n != null && n !== "" ? n : r !== void 0 && n == null ? o ?? void 0 : cy() ?? o ?? void 0;
  switch (xe()) {
    case "bedrock":
      return {
        lines: await k(s),
        hasHardFailure: !1
      };
    case "vertex":
      return {
        lines: await p(s),
        hasHardFailure: !1
      };
    case "mantle":
      {
        let e = !1;
        if (o !== null) {
          let _ = Pt(o.trim().toLowerCase());
          e = !(_ === "opus" || _ === "best" || qe(_) === qe(zo[rht].firstParty)) && sWe();
        }
        let u = n != null && n !== "" || cy() != null || e;
        return T(u);
      }
    default:
      return {
        lines: [],
        hasHardFailure: !1
      };
  }
}
async function k(l) {
  let {
      checkBedrockDefaultAvailability: checkBedrockDefaultAvailability,
      seedEnvDefaultForUserPin: seedEnvDefaultForUserPin
    } = await import("B:/~BUN/root/chunk-taqdy4fx.js"),
    n = seedEnvDefaultForUserPin(l);
  if (n && !d(n.envVar)) m(n.envVar, n.value);
  let o = await PTt("bedrock-fallback", checkBedrockDefaultAvailability()),
    s = [];
  for (let e of o) {
    if (d(e.envVar)) continue;
    if (process.env[e.envVar] = e.fallbackBedrockId, r$t(e.envVar, e.fallbackBedrockId), e.tier === "sonnet") zMo("bedrock", e.fallbackBedrockId, ave);
    if (e.tier === "haiku") {
      if (!d("ANTHROPIC_DEFAULT_HAIKU_MODEL")) process.env.ANTHROPIC_DEFAULT_HAIKU_MODEL = e.fallbackBedrockId;
    }
    if (e.crossTier) process.env.ANTHROPIC_DEFAULT_OPUS_MODEL_NAME = e.fallbackName, process.env.ANTHROPIC_DEFAULT_OPUS_MODEL_DESCRIPTION = `Opus unavailable \u2014 using ${e.fallbackName}`;
    i("tengu_bedrock_default_fallback", {
      tier: c(e.tier),
      default_key: c(e.defaultKey),
      fallback_key: c(e.fallbackKey),
      cross_tier: b(e.crossTier ? "true" : "false")
    }), s.push(e.crossTier ? `${MP[e.tier]}: ${e.defaultName} not available \u2014 using ${e.fallbackName}. Enable ${e.defaultName} in the Bedrock console to upgrade.` : `${MP[e.tier]}: ${e.defaultName} not available \u2014 using ${e.fallbackName} for this session`);
  }
  return s;
}
async function p(l) {
  let {
      checkVertexDefaultAvailability: checkVertexDefaultAvailability,
      seedEnvDefaultForUserPin: seedEnvDefaultForUserPin_2
    } = await import("B:/~BUN/root/chunk-ebxvn4yg.js"),
    n = seedEnvDefaultForUserPin_2(l);
  if (n && !d(n.envVar)) m(n.envVar, n.value);
  let o = await PTt("vertex-fallback", checkVertexDefaultAvailability()),
    s = [];
  for (let e of o) {
    if (d(e.envVar)) continue;
    if (process.env[e.envVar] = e.fallbackVertexId, r$t(e.envVar, e.fallbackVertexId), e.tier === "sonnet") zMo("vertex", e.fallbackVertexId, ave);
    if (e.tier === "haiku") {
      if (!d("ANTHROPIC_DEFAULT_HAIKU_MODEL")) process.env.ANTHROPIC_DEFAULT_HAIKU_MODEL = e.fallbackVertexId;
    }
    if (e.crossTier) process.env.ANTHROPIC_DEFAULT_OPUS_MODEL_NAME = e.fallbackName, process.env.ANTHROPIC_DEFAULT_OPUS_MODEL_DESCRIPTION = `Opus unavailable \u2014 using ${e.fallbackName}`;
    i("tengu_vertex_default_fallback", {
      tier: c(e.tier),
      default_key: c(e.defaultKey),
      fallback_key: c(e.fallbackKey),
      cross_tier: b(e.crossTier ? "true" : "false")
    }), s.push(e.crossTier ? `${MP[e.tier]}: ${e.defaultName} not available \u2014 using ${e.fallbackName}. Enable ${e.defaultName} in Model Garden to upgrade.` : `${MP[e.tier]}: ${e.defaultName} not available \u2014 using ${e.fallbackName} for this session`);
  }
  return s;
}
async function T(userPinned) {
  let {
      checkMantleDefaultAvailability: checkMantleDefaultAvailability
    } = await import("B:/~BUN/root/chunk-f24kttz6.js"),
    f = await PTt("mantle-fallback", checkMantleDefaultAvailability(void 0, {
      userPinned: userPinned
    })),
    lines = [],
    hasHardFailure = !1,
    mantleOverride;
  for (let e of f) if (e.kind === "adminPin") {
    if (!userPinned) Bp(e.adminMantleId), mantleOverride = e.adminMantleId;
  } else if (e.kind === "pinRefuted") {
    if (!userPinned) Bp(e.workingMantleId), mantleOverride = e.workingMantleId, i("tengu_mantle_default_fallback", {
      default_key: c(e.defaultKey),
      fallback_key: c(e.workingKey),
      admin_pin_refuted: b("true")
    }), lines.push(`${MP[e.tier]}: the admin-configured Opus model is not available on this account \u2014 using ${e.workingName} for this session`);
  } else if (e.kind === "fallback") {
    let u = !1;
    if (!d(e.envVar)) process.env[e.envVar] = e.fallbackMantleId, r$t(e.envVar, e.fallbackMantleId), u = !0;
    if (!userPinned) Bp(e.fallbackMantleId), mantleOverride = e.fallbackMantleId, u = !0;
    if (u) i("tengu_mantle_default_fallback", {
      default_key: c(e.defaultKey),
      fallback_key: c(e.fallbackKey)
    }), lines.push(`${MP[e.tier]}: ${e.defaultName} not available \u2014 using ${e.fallbackName} for this session`);
  } else hasHardFailure = !0, i("tengu_mantle_default_fallback", {
    default_key: b("exhausted")
  }), lines.push(`${MP[e.tier]}: no accessible model (tried ${e.triedNames.join(", ")}). Enable ${e.defaultName} in Amazon Bedrock (Mantle).`);
  return {
    lines: lines,
    hasHardFailure: hasHardFailure,
    mantleOverride: mantleOverride
  };
}
export { MP, PTt, ulr, IJr };