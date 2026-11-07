// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  eh,
  aGs,
  dGs
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  b,
  f
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  yt
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  ts,
  Te
} from "B:/~BUN/root/chunk-8f4z6bdn.js";
import {
  qp,
  i$t,
  Az,
  zon,
  w3i,
  N3,
  Zgt,
  HPs,
  eS,
  vOr,
  d$t,
  u$t,
  iVe,
  FZe,
  rt,
  jm
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  byr,
  eft,
  tft,
  nft,
  PW,
  yTe,
  QDe
} from "B:/~BUN/root/chunk-cxcakgnv.js";
import {
  $t
} from "B:/~BUN/root/chunk-zpne314q.js";

function T(r) {
  let o = u$t("sonnet", r),
    u = u$t("opus", r),
    a = u$t("haiku", r);
  return o === void 0 || u === void 0 || a === void 0 ? void 0 : eft(u, o, a)
}

function P(r) {
  let o = T(r);
  if (o === void 0) return;
  let u = yt().modelOverrides;
  for (let a of nft(o, u)) {
    let {
      documentTarget: s,
      fromDocument: c
    } = o[a.tier], n = s?.modelId ?? ts[a.defaultKey][r];
    if (n === null || PW(n)) continue;
    let d = yTe(a.defaultKey, a.tier, s !== void 0),
      e = d.findIndex((m) => {
        let p = ts[m][r];
        return p !== null && (Az(p) || i$t(p))
      }),
      k = e < 0 ? d : d.slice(0, e),
      E = new Set(k.filter((m) => Boolean(u?.[ts[m].firstParty]))),
      g = c === !0 ? k.find((m) => E.has(m) && !PW(String(qp()[m]))) : void 0,
      v = [s === void 0 ? D(a.defaultKey, n) : {
        id: n,
        name: s.name
      }, ...(g === void 0 ? k : k.slice(0, k.indexOf(g))).flatMap((m) => {
        let p = ts[m][r];
        return p === null || E.has(m) || PW(p) ? [] : [D(m, p)]
      }), ...g === void 0 ? [] : [D(g, String(qp()[g]))]];
    Zgt(r, a.tier, a.envVar, v)
  }
}

function D(r, o) {
  let u = ts[r].firstParty;
  return {
    id: o,
    name: jm(u) ?? u
  }
}
var H0 = {
  fable: "Fable",
  sonnet: "Sonnet",
  opus: "Opus",
  haiku: "Haiku"
};
async function kqt(r, o, u = byr) {
  let a;
  try {
    return await Promise.race([o, new Promise((s) => {
      a = setTimeout((c, n, d) => {
        t(`[3p-probe] ${n} hit ${d}ms deadline; proceeding without it`), c([])
      }, u, s, r, u)
    })])
  } finally {
    clearTimeout(a)
  }
}
async function A(r, o, u, a = byr) {
  let s = Date.now(),
    c = await kqt(`${r}-fallback`, o(), a),
    n = a - (Date.now() - s),
    d = n > 0 ? await kqt(`${r}-document-default`, u(), n) : [];
  return [c, d]
}

function _(r) {
  switch (r) {
    case "ANTHROPIC_DEFAULT_SONNET_MODEL":
      return i.ANTHROPIC_DEFAULT_SONNET_MODEL !== void 0 && !N3("sonnet");
    case "ANTHROPIC_DEFAULT_OPUS_MODEL":
      return i.ANTHROPIC_DEFAULT_OPUS_MODEL !== void 0 && !N3("opus");
    case "ANTHROPIC_DEFAULT_HAIKU_MODEL":
      return i.ANTHROPIC_DEFAULT_HAIKU_MODEL !== void 0 && !N3("haiku");
    case "ANTHROPIC_SMALL_FAST_MODEL":
      return i.ANTHROPIC_SMALL_FAST_MODEL !== void 0;
    default:
      return !1
  }
}

function O(r, o) {
  switch (r) {
    case "ANTHROPIC_DEFAULT_SONNET_MODEL":
      i.set("ANTHROPIC_DEFAULT_SONNET_MODEL", o);
      break;
    case "ANTHROPIC_DEFAULT_OPUS_MODEL":
      i.set("ANTHROPIC_DEFAULT_OPUS_MODEL", o);
      break;
    default:
      return
  }
  zon(r, o), w3i(r, o)
}

function H6r() {
  aGs({
    sonnet: i.ANTHROPIC_DEFAULT_SONNET_MODEL !== void 0 && !N3("sonnet"),
    opus: i.ANTHROPIC_DEFAULT_OPUS_MODEL !== void 0 && !N3("opus")
  })
}
async function uYo(r) {
  H6r();
  let o = r?.pendingUserModel?.trim(),
    a = vOr(o === "default" || o === "inherit" || o === "" ? void 0 : o ?? void 0),
    s = iVe(),
    c = a != null && a !== "" ? a : o !== void 0 && a == null ? s ?? void 0 : eS() ?? s ?? void 0;
  switch (Te()) {
    case "bedrock":
      return {
        lines: await I(c), hasHardFailure: !1
      };
    case "vertex":
      return {
        lines: await M(c), hasHardFailure: !1
      };
    case "mantle": {
      let n = !1;
      if (s !== null) {
        let e = $t(s.trim().toLowerCase());
        n = !(e === "opus" || e === "best" || rt(e) === rt(ts[d$t].firstParty)) && FZe()
      }
      let d = a != null && a !== "" || eS() != null || n;
      return N(d)
    }
    case "foundry": {
      let n = T("foundry"),
        d = n && tft(c, n);
      if (d && !_(d.envVar)) O(d.envVar, d.value);
      return P("foundry"), {
        lines: [],
        hasHardFailure: !1
      }
    }
    default:
      return {
        lines: [], hasHardFailure: !1
      }
  }
}

function L(r, o) {
  let u = [];
  for (let a of r) dGs(a.candidate), l(o === "bedrock" ? "tengu_bedrock_default_fallback" : "tengu_vertex_default_fallback", {
    tier: f(a.tier ?? "default"),
    default_key: b("document_default"),
    fallback_key: b("tier_default"),
    cross_tier: b("false")
  }), u.push(`Default model: ${a.name} not available on this account \u2014 not used as this session's default`);
  return u
}
async function I(r) {
  let {
    checkBedrockDefaultAvailability: o,
    checkBedrockDocumentDefaults: u,
    seedEnvDefaultForUserPin: a
  } = await import("B:/~BUN/root/chunk-dq8astcr.js"), s = a(r);
  if (s && !_(s.envVar)) O(s.envVar, s.value);
  let [c, n] = await A("bedrock", o, u), d = [];
  for (let e of c) {
    if (_(e.envVar)) continue;
    if (process.env[e.envVar] = e.fallbackBedrockId, zon(e.envVar, e.fallbackBedrockId), e.tier === "sonnet") HPs("bedrock", e.fallbackBedrockId, QDe);
    if (e.tier === "haiku") {
      if (!_("ANTHROPIC_DEFAULT_HAIKU_MODEL")) process.env.ANTHROPIC_DEFAULT_HAIKU_MODEL = e.fallbackBedrockId
    }
    if (e.crossTier) process.env.ANTHROPIC_DEFAULT_OPUS_MODEL_NAME = e.fallbackName, process.env.ANTHROPIC_DEFAULT_OPUS_MODEL_DESCRIPTION = `Opus unavailable \u2014 using ${e.fallbackName}`;
    l("tengu_bedrock_default_fallback", {
      tier: f(e.tier),
      default_key: e.documentTargetId ? b("document_target") : f(e.defaultKey),
      fallback_key: f(e.fallbackKey),
      cross_tier: b(e.crossTier ? "true" : "false")
    }), d.push(e.crossTier ? `${H0[e.tier]}: ${e.defaultName} not available \u2014 using ${e.fallbackName}. Enable ${e.defaultName} in the Bedrock console to upgrade.` : `${H0[e.tier]}: ${e.defaultName} not available \u2014 using ${e.fallbackName} for this session`)
  }
  return d.push(...L(n, "bedrock")), d
}
async function M(r) {
  let {
    checkVertexDefaultAvailability: o,
    checkVertexDocumentDefaults: u,
    seedEnvDefaultForUserPin: a
  } = await import("B:/~BUN/root/chunk-czekav7k.js"), s = a(r);
  if (s && !_(s.envVar)) O(s.envVar, s.value);
  let [c, n] = await A("vertex", o, u), d = [];
  for (let e of c) {
    if (_(e.envVar)) continue;
    if (process.env[e.envVar] = e.fallbackVertexId, zon(e.envVar, e.fallbackVertexId), e.tier === "sonnet") HPs("vertex", e.fallbackVertexId, QDe);
    if (e.tier === "haiku") {
      if (!_("ANTHROPIC_DEFAULT_HAIKU_MODEL")) process.env.ANTHROPIC_DEFAULT_HAIKU_MODEL = e.fallbackVertexId
    }
    if (e.crossTier) process.env.ANTHROPIC_DEFAULT_OPUS_MODEL_NAME = e.fallbackName, process.env.ANTHROPIC_DEFAULT_OPUS_MODEL_DESCRIPTION = `Opus unavailable \u2014 using ${e.fallbackName}`;
    l("tengu_vertex_default_fallback", {
      tier: f(e.tier),
      default_key: e.documentTargetId ? b("document_target") : f(e.defaultKey),
      fallback_key: f(e.fallbackKey),
      cross_tier: b(e.crossTier ? "true" : "false")
    }), d.push(e.crossTier ? `${H0[e.tier]}: ${e.defaultName} not available \u2014 using ${e.fallbackName}. Enable ${e.defaultName} in Model Garden to upgrade.` : `${H0[e.tier]}: ${e.defaultName} not available \u2014 using ${e.fallbackName} for this session`)
  }
  return d.push(...L(n, "vertex")), d
}
async function N(r) {
  let {
    checkMantleDefaultAvailability: o
  } = await import("B:/~BUN/root/chunk-mtybznyw.js"), u = await kqt("mantle-fallback", o(void 0, {
    userPinned: r
  })), a = [], s = !1, c;
  for (let n of u)
    if (n.kind === "adminPin") {
      if (!r) eh(n.adminMantleId), c = n.adminMantleId
    } else if (n.kind === "pinRefuted") {
    if (!r) eh(n.workingMantleId), c = n.workingMantleId, l("tengu_mantle_default_fallback", {
      default_key: f(n.defaultKey),
      fallback_key: f(n.workingKey),
      admin_pin_refuted: b("true")
    }), a.push(`${H0[n.tier]}: the admin-configured Opus model is not available on this account \u2014 using ${n.workingName} for this session`)
  } else if (n.kind === "fallback") {
    let d = !1;
    if (!_(n.envVar)) process.env[n.envVar] = n.fallbackMantleId, zon(n.envVar, n.fallbackMantleId), d = !0;
    if (!r) eh(n.fallbackMantleId), c = n.fallbackMantleId, d = !0;
    if (d) l("tengu_mantle_default_fallback", {
      default_key: f(n.defaultKey),
      fallback_key: f(n.fallbackKey)
    }), a.push(`${H0[n.tier]}: ${n.defaultName} not available \u2014 using ${n.fallbackName} for this session`)
  } else s = !0, l("tengu_mantle_default_fallback", {
    default_key: b("exhausted")
  }), a.push(`${H0[n.tier]}: no accessible model (tried ${n.triedNames.join(", ")}). Enable ${n.defaultName} in Amazon Bedrock (Mantle).`);
  return {
    lines: a,
    hasHardFailure: s,
    mantleOverride: c
  }
}
export {
  H0,
  kqt,
  H6r,
  uYo
};
