// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  f,
  bo
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  zae
} from "B:/~BUN/root/chunk-eev762xg.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  $D,
  aT,
  fin,
  Zk,
  Fz,
  XL,
  DVe
} from "B:/~BUN/root/chunk-1s0yt4vj.js";
import {
  ts,
  Te
} from "B:/~BUN/root/chunk-8f4z6bdn.js";
import {
  yt
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  WUn,
  HHt,
  K2e,
  _on,
  JUn,
  Awo,
  qp,
  Lt,
  Zgt,
  Zse,
  _4,
  wOr,
  ID,
  yBn,
  kBn,
  jm,
  md,
  zbe,
  ete,
  sie
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  E_e
} from "B:/~BUN/root/chunk-yhafkw66.js";
import {
  oIe,
  aRt,
  lRt,
  J6e,
  Q6e,
  cnr,
  unr
} from "B:/~BUN/root/chunk-69dvfjjs.js";
import {
  qOn,
  eft,
  dus,
  YOn,
  tft,
  nft,
  PW,
  sXe,
  yTe,
  XOn,
  AMt
} from "B:/~BUN/root/chunk-cxcakgnv.js";

function M() {
  return eft(yBn)
}
async function jya() {
  if (Te() !== "bedrock") return [];
  if (i.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST) return [];
  let e = YOn(M(), (c) => c.includes("application-inference-profile"));
  if (e.length === 0) return [];
  l("tengu_bedrock_upgrade_check", {
    stale_tiers: bo(e.length)
  });
  let o;
  try {
    o = await WUn()
  } catch {
    return []
  }
  let d = _on(await $D()),
    r = [];
  for (let c of e) {
    let k = ts[c.defaultKey].firstParty,
      g = HHt(o, k, d);
    if (!g) continue;
    if (PW(g)) {
      t(`[bedrock-upgrade] ${sXe(c.tier,"upgrade",[g])}`);
      continue
    }
    let A = jm(ts[c.pinnedKey].firstParty),
      _ = jm(ts[c.defaultKey].firstParty);
    if (!A || !_) continue;
    r.push({
      tier: c.tier,
      envVar: c.envVar,
      fromKey: c.pinnedKey,
      fromMarketingName: A,
      toKey: c.defaultKey,
      toMarketingName: _,
      toBedrockId: g
    })
  }
  let m = (await Promise.all(r.map(async (c) => {
    let k = await Wer(c.toBedrockId, c.tier, {
      isDefault: !0,
      versionTooOld: "unavailable"
    });
    return l("tengu_bedrock_probe_result", {
      tier: f(c.tier),
      model_id: Lt(c.toBedrockId),
      accessible: k
    }), k ? c : null
  }))).filter((c) => c !== null);
  return t(`[bedrock-upgrade] tiersWithPin=${e.length} candidates=${m.length}`), m
}

function Wya(e) {
  return tft(e, M())
}
async function zya() {
  if (Te() !== "bedrock") return [];
  if (i.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST) return [];
  let e = qOn(Date.now()),
    o = yt().modelOverrides,
    d = dus() ? await $D() : void 0,
    r = M(),
    u = nft(r, o);
  if (u.length === 0) return [];
  l("tengu_bedrock_default_check", {
    unpinned_tiers: bo(u.length)
  });
  let m;
  try {
    m = await WUn()
  } catch {
    m = []
  }
  let c = d ?? await $D(),
    k = _on(c),
    g = u.some((a) => a.tier === "sonnet"),
    A = await Promise.all(u.map(async (a) => {
      let h = ts[a.defaultKey],
        b = r[a.tier].documentTarget,
        E = r[a.tier].fromDocument === !0,
        T = b === void 0 ? void 0 : O(b.modelId, m, k),
        n = T ?? w(a.defaultKey, m, k);
      if (!n) return null;
      if (PW(n)) return t(`[bedrock-fallback] ${sXe(a.tier,"check",[n])}`), null;
      await S(a, n, m, k, o, b, E, g);
      let p = {},
        y = await Wer(n, a.tier, {
          isDefault: !0,
          ...r[a.tier].fromDocument && {
            versionTooOld: "unavailable"
          },
          onVerdict: (v, C) => {
            p.verdict = v, p.at = C
          }
        });
      if (l("tengu_bedrock_probe_result", {
          tier: f(a.tier),
          model_id: Lt(n),
          accessible: y
        }), y || p.verdict === "temporary") return null;
      if (p.verdict === "refused") _4(n, Zse(n), (p.at ?? Date.now()) + oIe);
      let s = await B(a.defaultKey, a.tier, m, k, o, e, b !== void 0, E);
      if (!s) return null;
      if (p.verdict !== "refused") {
        if (!(s.answeredLive === !0 || s.adminMapped === !0 || await Wer(s.regionalId, s.crossTier ? "sonnet" : a.tier, {
            live: !0
          }))) return null;
        if (p.verdict === "denied" && s.adminMapped !== !0) _4(n, Zse(n), Date.now() + oIe), Kia(n, a.tier, "refused")
      }
      let D = b?.name ?? jm(h.firstParty),
        R = jm(ts[s.key].firstParty);
      if (!D || !R) return null;
      return {
        tier: a.tier,
        envVar: a.envVar,
        defaultKey: a.defaultKey,
        defaultName: D,
        ...T !== void 0 && {
          documentTargetId: T
        },
        fallbackKey: s.key,
        fallbackName: R,
        fallbackBedrockId: s.regionalId,
        ...s.crossTier && {
          crossTier: !0
        }
      }
    })),
    _ = [];
  for (let a of A)
    if (a !== null) _.push(a);
  return t(`[bedrock-fallback] unpinnedTiers=${u.length} fallbacks=${_.length}`), _
}
async function Gya() {
  if (Te() !== "bedrock" || i.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST || !kBn()) return [];
  await $D(), await WUn().catch(() => {
    return
  });
  let e = await XOn(async (o, d) => {
    let r = {},
      u = await Wer(o, d, {
        isDefault: !0,
        versionTooOld: "unavailable",
        onVerdict: (m) => {
          r.verdict = m
        }
      });
    return l("tengu_bedrock_probe_result", {
      tier: f(d ?? "default"),
      model_id: Lt(o),
      accessible: u
    }), u || r.verdict === "temporary"
  }, yt().modelOverrides);
  return t(`[bedrock-fallback] refutedDocumentDefaults=${e.length}`), e
}
async function S(e, o, d, r, u, m, c, k) {
  let g = (n, p) => ({
      id: p,
      name: jm(ts[n].firstParty) ?? ts[n].firstParty
    }),
    A = (n) => Boolean(u?.[ts[n].firstParty]),
    _ = (n) => A(n) && !PW(String(qp()[n])),
    a = (n) => n.flatMap((p) => {
      let y = w(p, d, r);
      return y && !PW(y) ? [g(p, y)] : []
    }),
    h = (n, p) => a(yTe(n, p).filter((y) => !A(y))),
    b = yTe(e.defaultKey, e.tier, m !== void 0),
    E = c ? b.find(_) : void 0,
    T = [m === void 0 ? g(e.defaultKey, o) : {
      id: o,
      name: m.name
    }, ...a((E === void 0 ? b : b.slice(0, b.indexOf(E))).filter((n) => !A(n)))];
  if (E !== void 0) T.push(g(E, String(qp()[E])));
  else if (e.tier === "opus") {
    let n = w(ID, d, r),
      p = !n ? [] : !PW(n) ? [g(ID, n)] : k ? h(ID, "sonnet") : [];
    T.push(...p.map((y) => ({
      ...y,
      crossTier: !0
    })))
  }
  Zgt("bedrock", e.tier, e.envVar, T), await Promise.all(T.slice(1).map(async (n) => {
    let p = n.crossTier ? "sonnet" : e.tier,
      y = await I(n.id, p);
    if (y?.state === "refused") _4(n.id, Zse(n.id), y.at + oIe)
  })).catch(() => {})
}

function w(e, o, d) {
  let r = ts[e],
    u = HHt(o, r.firstParty, d);
  if (u) return u;
  if (!r.bedrock) return null;
  return K2e(r.bedrock, d)
}

function O(e, o, d) {
  let r = JUn(e);
  return (r === void 0 ? void 0 : Awo(r, o, d)) ?? e
}
async function B(e, o, d, r, u, m, c = !1, k = !1) {
  let g = [];

  function A(s, D) {
    return s.flatMap((R) => {
      let v = w(R, d, r);
      if (!v) return [];
      if (PW(v)) return g.push(D === o ? v : `${v} (the cross-tier Sonnet default)`), [];
      return [{
        key: R,
        regionalId: v,
        probeTier: D
      }]
    })
  }
  let _ = (s) => Boolean(u?.[ts[s].firstParty]),
    a = (s) => _(s) && !PW(String(qp()[s])),
    h = yTe(e, o, c),
    b = k ? h.find(a) : void 0,
    E = (b === void 0 ? h : h.slice(0, h.indexOf(b))).filter((s) => !_(s)),
    T = [A(E, o)];
  if (o === "opus" && b === void 0) T.push(A([ID], "sonnet"));
  if (g.length > 0) t(`[bedrock-fallback] ${sXe(o,"fallback",g)}`);
  let n = new Set,
    p = (s) => ({
      onVerdict: (D, R) => {
        if (D === "refused") _4(s.regionalId, Zse(s.regionalId), (R ?? Date.now()) + oIe);
        else if (D === "accessible") {
          if (wOr(s.regionalId), R === void 0) n.add(s.regionalId)
        }
      }
    }),
    y = await unr(T, (s, D) => Wer(s.regionalId, s.probeTier, {
      ...D && {
        live: D
      },
      ...c && s.key === e && {
        isDefault: !0
      },
      ...k && {
        versionTooOld: "unavailable"
      },
      ...p(s)
    }), async (s) => (await I(s.regionalId, s.probeTier))?.state === "refused", m);
  if (!y) return b === void 0 ? null : {
    key: b,
    regionalId: String(qp()[b]),
    adminMapped: !0
  };
  return {
    key: y.key,
    regionalId: y.regionalId,
    ...y.probeTier !== o && {
      crossTier: !0
    },
    ...n.has(y.regionalId) && {
      answeredLive: !0
    }
  }
}
async function Wer(e, o, d) {
  let r = await P(o);
  if (r === void 0) return d?.onVerdict?.("temporary"), !1;
  return await cnr("bedrock", await K(r), e, () => L(e, r), d) === "accessible"
}
async function Kia(e, o, d) {
  try {
    let r = await P(o),
      u = r && await K(r);
    if (u) await Q6e(u, e, d)
  } catch (r) {
    t(`[3p-model-memory] bedrock record failed: ${r}`)
  }
}
async function P(e) {
  try {
    return e === "haiku" && zae(i.ANTHROPIC_SMALL_FAST_MODEL_AWS_REGION) || await $D()
  } catch {
    return
  }
}

function K(e) {
  return lRt("bedrock", () => [e, i.ANTHROPIC_BEDROCK_BASE_URL, i.CLAUDE_CODE_SKIP_BEDROCK_AUTH ? "skip-auth" : void 0, ...W6r(), aRt()])
}
async function I(e, o) {
  let d = await P(o),
    r = d && await K(d);
  return r ? J6e(r, e) : void 0
}

function W6r() {
  let e = yt();
  return [i.AWS_PROFILE, i.AWS_CONFIG_FILE, i.AWS_SHARED_CREDENTIALS_FILE, i.AWS_ACCESS_KEY_ID, i.AWS_ROLE_ARN, i.AWS_WEB_IDENTITY_TOKEN_FILE, i.AWS_CONTAINER_CREDENTIALS_RELATIVE_URI, i.AWS_CONTAINER_CREDENTIALS_FULL_URI, e.awsCredentialExport, e.awsAuthRefresh]
}
async function L(e, o) {
  try {
    let [{
      AnthropicBedrock: d
    }, {
      getProxyFetchOptions: r
    }] = await Promise.all([import("B:/~BUN/root/chunk-2kt7cm15.js"), import("B:/~BUN/root/chunk-hm55wvr0.js")]), u = {
      awsRegion: o,
      maxRetries: 0,
      timeout: 8000,
      fetchOptions: r({
        url: i.ANTHROPIC_BEDROCK_BASE_URL || `https://bedrock-runtime.${o}.amazonaws.com`
      })
    }, m, c = E_e(), k = i.AWS_BEARER_TOKEN_BEDROCK;
    if (k) m = new d({
      ...u,
      apiKey: k,
      defaultHeaders: {
        ...c,
        ...Zk(),
        ...Fz(),
        Authorization: `Bearer ${k}`,
        ...!aT() && {
          "X-Api-Key": null
        }
      }
    });
    else {
      let g = i.CLAUDE_CODE_SKIP_BEDROCK_AUTH,
        A = md(),
        _ = {
          authToken: null,
          defaultHeaders: {
            ...c,
            ...Zk(),
            ...Fz(),
            Authorization: null,
            ...!aT() && {
              "X-Api-Key": null
            }
          },
          ...XL
        },
        a = g ? DVe() : void 0,
        h = g || A ? null : await ete();
      m = h ? new d({
        ...u,
        ..._,
        awsAccessKey: h.accessKeyId,
        awsSecretKey: h.secretAccessKey,
        awsSessionToken: h.sessionToken
      }) : new d({
        ...u,
        ...g && !a && {
          skipAuth: !0,
          authToken: null,
          defaultHeaders: {
            ...c,
            ...Fz()
          },
          ...XL
        },
        ...g && a && {
          apiKey: a.match(/^Bearer (.+)$/i)?.[1] ?? a,
          defaultHeaders: {
            ...c,
            ...Fz(),
            Authorization: a,
            ...fin()
          }
        },
        ...!g && _,
        ...!g && A && {
          providerChainResolver: zbe("Bedrock").providerChainResolver
        },
        ...!g && !A && {
          providerChainResolver: sie(o)
        }
      })
    }
    return await m.messages.create(AMt(e)), {
      accessible: !0
    }
  } catch (d) {
    if (d?.status === 429) return {
      accessible: !0
    };
    return {
      accessible: !1,
      error: d
    }
  }
}
export {
  jya,
  Wya,
  zya,
  Gya,
  Wer,
  Kia,
  W6r
};
