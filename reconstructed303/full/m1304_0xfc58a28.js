// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  c,
  jr
} from "B:/~BUN/root/chunk-jthpk6wv.js";
import {
  i
} from "B:/~BUN/root/chunk-1kfn24jp.js";
import {
  HQ
} from "B:/~BUN/root/chunk-fbyz9h0p.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  WM,
  KC,
  pUt,
  Zb,
  XH,
  zO,
  TMe
} from "B:/~BUN/root/chunk-kad4nq7y.js";
import {
  zo,
  xe
} from "B:/~BUN/root/chunk-8pmnanyd.js";
import {
  ut
} from "B:/~BUN/root/chunk-1gpjpba6.js";
import {
  j4n,
  Fgt,
  Bje,
  sln,
  wt,
  Eln,
  oJ,
  iW,
  wYn,
  xx,
  Rln,
  wm,
  fd,
  gle,
  Q3,
  dJ
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  gie
} from "B:/~BUN/root/chunk-8w42v0dp.js";
import {
  Pbe,
  Pst,
  Ost,
  kFe,
  EFe,
  HOn,
  $On
} from "B:/~BUN/root/chunk-1djsy5g3.js";
import {
  hut,
  vtn,
  ktn,
  Etn,
  Ttn,
  Ctn,
  WPe,
  QUe,
  yut
} from "B:/~BUN/root/chunk-dn8rakwm.js";
var E = ktn(Rln);
async function wri() {
  if (xe() !== "bedrock") return [];
  if (a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST) return [];
  let r = Etn(E, (n) => n.includes("application-inference-profile"));
  if (r.length === 0) return [];
  i("tengu_bedrock_upgrade_check", {
    stale_tiers: jr(r.length)
  });
  let l;
  try {
    l = await j4n()
  } catch {
    return []
  }
  let s = sln(await WM()),
    o = [];
  for (let n of r) {
    let m = zo[n.defaultKey].firstParty,
      e = Fgt(l, m, s);
    if (!e) continue;
    if (WPe(e)) {
      t(`[bedrock-upgrade] ${QUe(n.tier,"upgrade",[e])}`);
      continue
    }
    let f = wm(zo[n.pinnedKey].firstParty),
      d = wm(zo[n.defaultKey].firstParty);
    if (!f || !d) continue;
    o.push({
      tier: n.tier,
      envVar: n.envVar,
      fromKey: n.pinnedKey,
      fromMarketingName: f,
      toKey: n.defaultKey,
      toMarketingName: d,
      toBedrockId: e
    })
  }
  let k = (await Promise.all(o.map(async (n) => {
    let m = await NOn(n.toBedrockId, n.tier, {
      isDefault: !0,
      versionTooOld: "unavailable"
    });
    return i("tengu_bedrock_probe_result", {
      tier: c(n.tier),
      model_id: wt(n.toBedrockId),
      accessible: m
    }), m ? n : null
  }))).filter((n) => n !== null);
  return t(`[bedrock-upgrade] tiersWithPin=${r.length} candidates=${k.length}`), k
}

function vri(r) {
  return Ttn(r, E)
}
async function kri() {
  if (xe() !== "bedrock") return [];
  if (a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST) return [];
  let r = vtn(Date.now()),
    l = ut().modelOverrides,
    s = Ctn(E, l);
  if (s.length === 0) return [];
  i("tengu_bedrock_default_check", {
    unpinned_tiers: jr(s.length)
  });
  let o;
  try {
    o = await j4n()
  } catch {
    o = []
  }
  let p = sln(await WM()),
    k = s.some((e) => e.tier === "sonnet"),
    n = await Promise.all(s.map(async (e) => {
      let f = zo[e.defaultKey],
        d = h(e.defaultKey, o, p);
      if (!d) return null;
      if (WPe(d)) return t(`[bedrock-fallback] ${QUe(e.tier,"check",[d])}`), null;
      await I(e, d, o, p, l, k);
      let g = {},
        y = await NOn(d, e.tier, {
          isDefault: !0,
          onVerdict: (b, w) => {
            g.verdict = b, g.at = w
          }
        });
      if (i("tengu_bedrock_probe_result", {
          tier: c(e.tier),
          model_id: wt(d),
          accessible: y
        }), y || g.verdict === "temporary") return null;
      if (g.verdict === "refused") iW(d, oJ(d), (g.at ?? Date.now()) + Pbe);
      let u = await K(e.defaultKey, e.tier, o, p, l, r);
      if (!u) return null;
      if (g.verdict !== "refused") {
        if (!(u.answeredLive === !0 || await NOn(u.regionalId, u.crossTier ? "sonnet" : e.tier, {
            live: !0
          }))) return null;
        if (g.verdict === "denied") iW(d, oJ(d), Date.now() + Pbe), M8s(d, e.tier, "refused")
      }
      let A = wm(f.firstParty),
        _ = wm(zo[u.key].firstParty);
      if (!A || !_) return null;
      return {
        tier: e.tier,
        envVar: e.envVar,
        defaultKey: e.defaultKey,
        defaultName: A,
        fallbackKey: u.key,
        fallbackName: _,
        fallbackBedrockId: u.regionalId,
        ...u.crossTier && {
          crossTier: !0
        }
      }
    })),
    m = [];
  for (let e of n)
    if (e !== null) m.push(e);
  return t(`[bedrock-fallback] unpinnedTiers=${s.length} fallbacks=${m.length}`), m
}
async function I(r, l, s, o, p, k) {
  let n = (f, d) => ({
      id: d,
      name: wm(zo[f].firstParty) ?? zo[f].firstParty
    }),
    m = (f, d) => yut(f, d).flatMap((g) => {
      let y = h(g, s, o);
      return y && !p?.[zo[g].firstParty] && !WPe(y) ? [n(g, y)] : []
    }),
    e = [n(r.defaultKey, l), ...m(r.defaultKey, r.tier)];
  if (r.tier === "opus") {
    let f = h(xx, s, o),
      d = !f ? [] : !WPe(f) ? [n(xx, f)] : k ? m(xx, "sonnet") : [];
    e.push(...d.map((g) => ({
      ...g,
      crossTier: !0
    })))
  }
  Eln("bedrock", r.tier, r.envVar, e), await Promise.all(e.slice(1).map(async (f) => {
    let d = f.crossTier ? "sonnet" : r.tier,
      g = await P(f.id, d);
    if (g?.state === "refused") iW(f.id, oJ(f.id), g.at + Pbe)
  })).catch(() => {})
}

function h(r, l, s) {
  let o = zo[r],
    p = Fgt(l, o.firstParty, s);
  if (p) return p;
  if (!o.bedrock) return null;
  return Bje(o.bedrock, s)
}
async function K(r, l, s, o, p, k) {
  let n = [];

  function m(u, A) {
    return u.flatMap((_) => {
      let b = h(_, s, o);
      if (!b) return [];
      if (WPe(b)) return n.push(A === l ? b : `${b} (the cross-tier Sonnet default)`), [];
      return [{
        key: _,
        regionalId: b,
        probeTier: A
      }]
    })
  }
  let e = yut(r, l).filter((u) => !p?.[zo[u].firstParty]),
    f = [m(e, l)];
  if (l === "opus") f.push(m([xx], "sonnet"));
  if (n.length > 0) t(`[bedrock-fallback] ${QUe(l,"fallback",n)}`);
  let d = new Set,
    g = (u) => ({
      onVerdict: (A, _) => {
        if (A === "refused") iW(u.regionalId, oJ(u.regionalId), (_ ?? Date.now()) + Pbe);
        else if (A === "accessible") {
          if (wYn(u.regionalId), _ === void 0) d.add(u.regionalId)
        }
      }
    }),
    y = await $On(f, (u, A) => A ? NOn(u.regionalId, u.probeTier, {
      live: A,
      ...g(u)
    }) : NOn(u.regionalId, u.probeTier, g(u)), async (u) => (await P(u.regionalId, u.probeTier))?.state === "refused", k);
  if (!y) return null;
  return {
    key: y.key,
    regionalId: y.regionalId,
    ...y.probeTier !== l && {
      crossTier: !0
    },
    ...d.has(y.regionalId) && {
      answeredLive: !0
    }
  }
}
async function NOn(r, l, s) {
  let o = await T(l);
  if (o === void 0) return s?.onVerdict?.("temporary"), !1;
  return await HOn("bedrock", await R(o), r, () => v(r, o), s) === "accessible"
}
async function M8s(r, l, s) {
  try {
    let o = await T(l),
      p = o && await R(o);
    if (p) await EFe(p, r, s)
  } catch (o) {
    t(`[3p-model-memory] bedrock record failed: ${o}`)
  }
}
async function T(r) {
  try {
    return r === "haiku" && HQ(a.ANTHROPIC_SMALL_FAST_MODEL_AWS_REGION) || await WM()
  } catch {
    return
  }
}

function R(r) {
  return Ost("bedrock", () => [r, a.ANTHROPIC_BEDROCK_BASE_URL, a.CLAUDE_CODE_SKIP_BEDROCK_AUTH ? "skip-auth" : void 0, ...Aur(), Pst()])
}
async function P(r, l) {
  let s = await T(l),
    o = s && await R(s);
  return o ? kFe(o, r) : void 0
}

function Aur() {
  let r = ut();
  return [a.AWS_PROFILE, a.AWS_CONFIG_FILE, a.AWS_SHARED_CREDENTIALS_FILE, a.AWS_ACCESS_KEY_ID, a.AWS_ROLE_ARN, a.AWS_WEB_IDENTITY_TOKEN_FILE, a.AWS_CONTAINER_CREDENTIALS_RELATIVE_URI, a.AWS_CONTAINER_CREDENTIALS_FULL_URI, r.awsCredentialExport, r.awsAuthRefresh]
}
async function v(r, l) {
  try {
    let [{
      AnthropicBedrock: s
    }, {
      getProxyFetchOptions: o
    }] = await Promise.all([import("B:/~BUN/root/chunk-fb2d3n3n.js"), import("B:/~BUN/root/chunk-46qp5t9y.js")]), p = {
      awsRegion: l,
      maxRetries: 0,
      timeout: 8000,
      fetchOptions: o({
        url: a.ANTHROPIC_BEDROCK_BASE_URL || `https://bedrock-runtime.${l}.amazonaws.com`
      })
    }, k, n = gie(), m = a.AWS_BEARER_TOKEN_BEDROCK;
    if (m) k = new s({
      ...p,
      apiKey: m,
      defaultHeaders: {
        ...n,
        ...Zb(),
        ...XH(),
        Authorization: `Bearer ${m}`,
        ...!KC() && {
          "X-Api-Key": null
        }
      }
    });
    else {
      let e = a.CLAUDE_CODE_SKIP_BEDROCK_AUTH,
        f = fd(),
        d = {
          authToken: null,
          defaultHeaders: {
            ...n,
            ...Zb(),
            ...XH(),
            Authorization: null,
            ...!KC() && {
              "X-Api-Key": null
            }
          },
          ...zO
        },
        g = e ? TMe() : void 0,
        y = e || f ? null : await Q3();
      k = y ? new s({
        ...p,
        ...d,
        awsAccessKey: y.accessKeyId,
        awsSecretKey: y.secretAccessKey,
        awsSessionToken: y.sessionToken
      }) : new s({
        ...p,
        ...e && !g && {
          skipAuth: !0,
          authToken: null,
          defaultHeaders: {
            ...n,
            ...XH()
          },
          ...zO
        },
        ...e && g && {
          apiKey: g.match(/^Bearer (.+)$/i)?.[1] ?? g,
          defaultHeaders: {
            ...n,
            ...XH(),
            Authorization: g,
            ...pUt()
          }
        },
        ...!e && d,
        ...!e && f && {
          providerChainResolver: gle("Bedrock").providerChainResolver
        },
        ...!e && !f && {
          providerChainResolver: dJ(l)
        }
      })
    }
    return await k.messages.create(hut(r)), {
      accessible: !0
    }
  } catch (s) {
    if (s?.status === 429) return {
      accessible: !0
    };
    return {
      accessible: !1,
      error: s
    }
  }
}
export {
  wri,
  vri,
  kri,
  NOn,
  M8s,
  Aur
};
