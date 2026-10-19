// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { c, jr } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { HQ } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { WM, KC, pUt, Zb, XH, zO, TMe } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { zo, xe } from "B:/~BUN/root/chunk-8pmnanyd.js";
import { ut } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { j4n, Fgt, Bje, sln, wt, Eln, oJ, iW, wYn, xx, Rln, wm, fd, gle, Q3, dJ } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { gie } from "B:/~BUN/root/chunk-8w42v0dp.js";
import { Pbe, Pst, Ost, kFe, EFe, HOn, $On } from "B:/~BUN/root/chunk-1djsy5g3.js";
import { hut, vtn, ktn, Etn, Ttn, Ctn, WPe, QUe, yut } from "B:/~BUN/root/chunk-dn8rakwm.js";
var E = ktn(Rln);
async function wri() {
  if (xe() !== "bedrock") return [];
  if (a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST) return [];
  let r = Etn(E, n => n.includes("application-inference-profile"));
  if (r.length === 0) return [];
  i("tengu_bedrock_upgrade_check", {
    stale_tiers: jr(r.length)
  });
  let l;
  try {
    l = await j4n();
  } catch {
    return [];
  }
  let s = sln(await WM()),
    o = [];
  for (let n of r) {
    let firstParty = zo[n.defaultKey].firstParty,
      toBedrockId = Fgt(l, firstParty, s);
    if (!toBedrockId) continue;
    if (WPe(toBedrockId)) {
      t(`[bedrock-upgrade] ${QUe(n.tier, "upgrade", [toBedrockId])}`);
      continue;
    }
    let fromMarketingName = wm(zo[n.pinnedKey].firstParty),
      toMarketingName = wm(zo[n.defaultKey].firstParty);
    if (!fromMarketingName || !toMarketingName) continue;
    o.push({
      tier: n.tier,
      envVar: n.envVar,
      fromKey: n.pinnedKey,
      fromMarketingName: fromMarketingName,
      toKey: n.defaultKey,
      toMarketingName: toMarketingName,
      toBedrockId: toBedrockId
    });
  }
  let k = (await Promise.all(o.map(async item => {
    let accessible = await NOn(item.toBedrockId, item.tier, {
      isDefault: !0,
      versionTooOld: "unavailable"
    });
    return i("tengu_bedrock_probe_result", {
      tier: c(item.tier),
      model_id: wt(item.toBedrockId),
      accessible: accessible
    }), accessible ? item : null;
  }))).filter(item => item !== null);
  return t(`[bedrock-upgrade] tiersWithPin=${r.length} candidates=${k.length}`), k;
}
function vri(r) {
  return Ttn(r, E);
}
async function kri() {
  if (xe() !== "bedrock") return [];
  if (a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST) return [];
  let r = vtn(Date.now()),
    modelOverrides = ut().modelOverrides,
    s = Ctn(E, modelOverrides);
  if (s.length === 0) return [];
  i("tengu_bedrock_default_check", {
    unpinned_tiers: jr(s.length)
  });
  let o;
  try {
    o = await j4n();
  } catch {
    o = [];
  }
  let p = sln(await WM()),
    k = s.some(item => item.tier === "sonnet"),
    n = await Promise.all(s.map(async item => {
      let f = zo[item.defaultKey],
        d = h(item.defaultKey, o, p);
      if (!d) return null;
      if (WPe(d)) return t(`[bedrock-fallback] ${QUe(item.tier, "check", [d])}`), null;
      await I(item, d, o, p, modelOverrides, k);
      let g = {},
        accessible_2 = await NOn(d, item.tier, {
          isDefault: !0,
          onVerdict: (b, w) => {
            g.verdict = b, g.at = w;
          }
        });
      if (i("tengu_bedrock_probe_result", {
        tier: c(item.tier),
        model_id: wt(d),
        accessible: accessible_2
      }), accessible_2 || g.verdict === "temporary") return null;
      if (g.verdict === "refused") iW(d, oJ(d), (g.at ?? Date.now()) + Pbe);
      let u = await K(item.defaultKey, item.tier, o, p, modelOverrides, r);
      if (!u) return null;
      if (g.verdict !== "refused") {
        if (!(u.answeredLive === !0 || (await NOn(u.regionalId, u.crossTier ? "sonnet" : item.tier, {
          live: !0
        })))) return null;
        if (g.verdict === "denied") iW(d, oJ(d), Date.now() + Pbe), M8s(d, item.tier, "refused");
      }
      let defaultName = wm(f.firstParty),
        fallbackName = wm(zo[u.key].firstParty);
      if (!defaultName || !fallbackName) return null;
      return {
        tier: item.tier,
        envVar: item.envVar,
        defaultKey: item.defaultKey,
        defaultName: defaultName,
        fallbackKey: u.key,
        fallbackName: fallbackName,
        fallbackBedrockId: u.regionalId,
        ...(u.crossTier && {
          crossTier: !0
        })
      };
    })),
    m = [];
  for (let e of n) if (e !== null) m.push(e);
  return t(`[bedrock-fallback] unpinnedTiers=${s.length} fallbacks=${m.length}`), m;
}
async function I(r, l, s, o, p, k) {
  let n = (f, id) => ({
      id: id,
      name: wm(zo[f].firstParty) ?? zo[f].firstParty
    }),
    m = (f, d) => yut(f, d).flatMap(item => {
      let y = h(item, s, o);
      return y && !p?.[zo[item].firstParty] && !WPe(y) ? [n(item, y)] : [];
    }),
    e = [n(r.defaultKey, l), ...m(r.defaultKey, r.tier)];
  if (r.tier === "opus") {
    let f = h(xx, s, o),
      d = !f ? [] : !WPe(f) ? [n(xx, f)] : k ? m(xx, "sonnet") : [];
    e.push(...d.map(item => ({
      ...item,
      crossTier: !0
    })));
  }
  Eln("bedrock", r.tier, r.envVar, e), await Promise.all(e.slice(1).map(async item => {
    let d = item.crossTier ? "sonnet" : r.tier,
      g = await P(item.id, d);
    if (g?.state === "refused") iW(item.id, oJ(item.id), g.at + Pbe);
  })).catch(() => {});
}
function h(r, l, s) {
  let o = zo[r],
    p = Fgt(l, o.firstParty, s);
  if (p) return p;
  if (!o.bedrock) return null;
  return Bje(o.bedrock, s);
}
async function K(r, l, s, o, p, k) {
  let n = [];
  function m(u, probeTier) {
    return u.flatMap(_ => {
      let regionalId = h(_, s, o);
      if (!regionalId) return [];
      if (WPe(regionalId)) return n.push(probeTier === l ? regionalId : `${regionalId} (the cross-tier Sonnet default)`), [];
      return [{
        key: _,
        regionalId: regionalId,
        probeTier: probeTier
      }];
    });
  }
  let e = yut(r, l).filter(item => !p?.[zo[item].firstParty]),
    f = [m(e, l)];
  if (l === "opus") f.push(m([xx], "sonnet"));
  if (n.length > 0) t(`[bedrock-fallback] ${QUe(l, "fallback", n)}`);
  let d = new Set(),
    g = u => ({
      onVerdict: (A, _) => {
        if (A === "refused") iW(u.regionalId, oJ(u.regionalId), (_ ?? Date.now()) + Pbe);else if (A === "accessible") {
          if (wYn(u.regionalId), _ === void 0) d.add(u.regionalId);
        }
      }
    }),
    y = await $On(f, (u, live) => live ? NOn(u.regionalId, u.probeTier, {
      live: live,
      ...g(u)
    }) : NOn(u.regionalId, u.probeTier, g(u)), async u => (await P(u.regionalId, u.probeTier))?.state === "refused", k);
  if (!y) return null;
  return {
    key: y.key,
    regionalId: y.regionalId,
    ...(y.probeTier !== l && {
      crossTier: !0
    }),
    ...(d.has(y.regionalId) && {
      answeredLive: !0
    })
  };
}
async function NOn(r, l, s) {
  let o = await T(l);
  if (o === void 0) return s?.onVerdict?.("temporary"), !1;
  return (await HOn("bedrock", await R(o), r, () => v(r, o), s)) === "accessible";
}
async function M8s(r, l, s) {
  try {
    let o = await T(l),
      p = o && (await R(o));
    if (p) await EFe(p, r, s);
  } catch (error) {
    t(`[3p-model-memory] bedrock record failed: ${error}`);
  }
}
async function T(r) {
  try {
    return r === "haiku" && HQ(a.ANTHROPIC_SMALL_FAST_MODEL_AWS_REGION) || (await WM());
  } catch {
    return;
  }
}
function R(r) {
  return Ost("bedrock", () => [r, a.ANTHROPIC_BEDROCK_BASE_URL, a.CLAUDE_CODE_SKIP_BEDROCK_AUTH ? "skip-auth" : void 0, ...Aur(), Pst()]);
}
async function P(r, l) {
  let s = await T(l),
    o = s && (await R(s));
  return o ? kFe(o, r) : void 0;
}
function Aur() {
  let r = ut();
  return [a.AWS_PROFILE, a.AWS_CONFIG_FILE, a.AWS_SHARED_CREDENTIALS_FILE, a.AWS_ACCESS_KEY_ID, a.AWS_ROLE_ARN, a.AWS_WEB_IDENTITY_TOKEN_FILE, a.AWS_CONTAINER_CREDENTIALS_RELATIVE_URI, a.AWS_CONTAINER_CREDENTIALS_FULL_URI, r.awsCredentialExport, r.awsAuthRefresh];
}
async function v(r, awsRegion) {
  try {
    let [{
        AnthropicBedrock: AnthropicBedrock
      }, {
        getProxyFetchOptions: getProxyFetchOptions
      }] = await Promise.all([import("B:/~BUN/root/chunk-fb2d3n3n.js"), import("B:/~BUN/root/chunk-46qp5t9y.js")]),
      p = {
        awsRegion: awsRegion,
        maxRetries: 0,
        timeout: 8000,
        fetchOptions: getProxyFetchOptions({
          url: a.ANTHROPIC_BEDROCK_BASE_URL || `https://bedrock-runtime.${awsRegion}.amazonaws.com`
        })
      },
      k,
      n = gie(),
      m = a.AWS_BEARER_TOKEN_BEDROCK;
    if (m) k = new AnthropicBedrock({
      ...p,
      apiKey: m,
      defaultHeaders: {
        ...n,
        ...Zb(),
        ...XH(),
        Authorization: `Bearer ${m}`,
        ...(!KC() && {
          "X-Api-Key": null
        })
      }
    });else {
      let CLAUDE_CODE_SKIP_BEDROCK_AUTH = a.CLAUDE_CODE_SKIP_BEDROCK_AUTH,
        f = fd(),
        d = {
          authToken: null,
          defaultHeaders: {
            ...n,
            ...Zb(),
            ...XH(),
            Authorization: null,
            ...(!KC() && {
              "X-Api-Key": null
            })
          },
          ...zO
        },
        Authorization = CLAUDE_CODE_SKIP_BEDROCK_AUTH ? TMe() : void 0,
        y = CLAUDE_CODE_SKIP_BEDROCK_AUTH || f ? null : await Q3();
      k = y ? new AnthropicBedrock({
        ...p,
        ...d,
        awsAccessKey: y.accessKeyId,
        awsSecretKey: y.secretAccessKey,
        awsSessionToken: y.sessionToken
      }) : new AnthropicBedrock({
        ...p,
        ...(CLAUDE_CODE_SKIP_BEDROCK_AUTH && !Authorization && {
          skipAuth: !0,
          authToken: null,
          defaultHeaders: {
            ...n,
            ...XH()
          },
          ...zO
        }),
        ...(CLAUDE_CODE_SKIP_BEDROCK_AUTH && Authorization && {
          apiKey: Authorization.match(/^Bearer (.+)$/i)?.[1] ?? Authorization,
          defaultHeaders: {
            ...n,
            ...XH(),
            Authorization: Authorization,
            ...pUt()
          }
        }),
        ...(!CLAUDE_CODE_SKIP_BEDROCK_AUTH && d),
        ...(!CLAUDE_CODE_SKIP_BEDROCK_AUTH && f && {
          providerChainResolver: gle("Bedrock").providerChainResolver
        }),
        ...(!CLAUDE_CODE_SKIP_BEDROCK_AUTH && !f && {
          providerChainResolver: dJ(awsRegion)
        })
      });
    }
    return await k.messages.create(hut(r)), {
      accessible: !0
    };
  } catch (error_2) {
    if (error_2?.status === 429) return {
      accessible: !0
    };
    return {
      accessible: !1,
      error: error_2
    };
  }
}
export { wri, vri, kri, NOn, M8s, Aur };