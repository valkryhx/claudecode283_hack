// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { P } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { bi } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { d, K } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { t, _, oi, ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Ue } from "B:/~BUN/root/chunk-eev762xg.js";
import { Mr } from "B:/~BUN/root/chunk-xqymp2nr.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { lN, zie, mtt, KBt, s0, Vie, Sk, hp, xm, ri, wk, i0, di } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { sM } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { yi, $o, hf } from "B:/~BUN/root/chunk-6n5g80b8.js";
import { o7 } from "B:/~BUN/root/chunk-46ahshhq.js";
import { Dn } from "B:/~BUN/root/chunk-9jpwd6f1.js";
import { Ve } from "B:/~BUN/root/chunk-myfamxtp.js";
import { be } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { Fr } from "B:/~BUN/root/chunk-ge2k1jpp.js";
import { Kue, QGe, ip } from "B:/~BUN/root/chunk-esnm3r09.js";
import { uV } from "B:/~BUN/root/chunk-t0w3xyzh.js";
import { ZTe, tue } from "B:/~BUN/root/chunk-dcmvdxnm.js";
import { Xke, o3o } from "B:/~BUN/root/chunk-vxh1s12d.js";
import { qMt } from "B:/~BUN/root/chunk-5fdpyc78.js";
import { ePi } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { H6 } from "B:/~BUN/root/chunk-vke7wtay.js";
import { UOt, Nc, xEe, w9, Ude } from "B:/~BUN/root/chunk-27h4st9h.js";
import { re } from "B:/~BUN/root/chunk-xkw95p5n.js";
import { One, Ggn } from "B:/~BUN/root/chunk-akbwbsxm.js";
import { Ztr } from "B:/~BUN/root/chunk-333m7ww5.js";
import { pwn as unauthorized } from "B:/~BUN/root/chunk-6dzdfyja.js";
import { Zye, wf } from "B:/~BUN/root/chunk-dew5sv9w.js";
import { D } from "B:/~BUN/root/chunk-8mqsat26.js";
import { o, E, C, u, B, T } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { U, L } from "B:/~BUN/root/chunk-5ha2avah.js";
import { hostname } from "os";
import { dirname as yn, join as wn } from "path";
var kn = p(() => u({
    version: T(1),
    choice: B(["accepted", "declined"]),
    decidedAt: o(),
    hostname: o()
  })),
  Le = "cloud-plugins-consent";
function De() {
  return Ve.state(Le);
}
function nYe() {
  return wn(Ue(), "state", `${Le}.json`);
}
async function xe(e) {
  let n;
  try {
    n = await e.readText();
  } catch (error) {
    return t(`cloud-plugins consent: store unreadable (${d(error)})`, {
      level: "warn"
    }), "unreadable";
  }
  if (n === void 0) return "unset";
  try {
    let r = kn().safeParse(ee(n));
    return r.success && r.data.hostname === e.hostname() ? r.data.choice : "unset";
  } catch {
    return "unset";
  }
}
async function Sn(e) {
  let n = await xe(e);
  return n === "unreadable" ? "unset" : n;
}
function bn(e, n) {
  return n === "declined" || n === "unset" && e ? "declined" : "accepted";
}
async function w5s(choice, n) {
  try {
    return await n.writeText(_({
      version: 1,
      choice: choice,
      decidedAt: n.now().toISOString(),
      hostname: n.hostname()
    }, null, 2) + `
`), !0;
  } catch (error) {
    return t(`cloud-plugins consent: answer not saved (${d(error)})`, {
      level: "warn"
    }), !1;
  }
}
function cGt(e) {
  return {
    readText: async () => {
      if (e) {
        let n = await e.readText([De()]);
        if (!n.ok) throw Error("cloud-plugins consent read failed");
        let r = n.value.items[0];
        return r.found ? r.value : void 0;
      }
      try {
        return await Dn().read(nYe());
      } catch (error) {
        if (K(error)) return;
        throw error;
      }
    },
    writeText: async n => {
      if (e) {
        if (!(await e.write(De(), n, {
          mode: 384
        })).ok) throw Error("cloud-plugins consent write failed");
        return;
      }
      let r = nYe();
      await Dn().mkdir(yn(r), 448), await Dn().atomicWrite(r, n, 384);
    },
    now: () => new Date(),
    hostname: hostname
  };
}
function k5s() {
  return {
    value: null,
    persisted: !1,
    given: !1
  };
}
async function gvt(e, n, r) {
  let {
    answer: answer,
    given: given
  } = await Rn(e, n);
  if (answer !== "accepted" || given || r === void 0 || !(await r.storeUntrusted().catch(() => !0))) return answer;
  return Pn(r.onUntrusted), "unset";
}
async function Rn(e, n) {
  let r = !1;
  if (e.value === null) r = !0, e.value = Sn(n).then(I => (e.persisted = I !== "unset", I)), e.given = !1;
  let {
      value: value,
      given: given_2
    } = e,
    answer_2 = await value;
  if (answer_2 !== "accepted" || r) return {
    answer: answer_2,
    given: given_2
  };
  let R = await xe(n),
    {
      value: value_2,
      given: given_3
    } = e;
  if (value_2 !== null && value_2 !== value) return {
    answer: await value_2,
    given: given_3
  };
  if (R === "accepted") e.persisted = !0;
  let answer_3 = bn(e.persisted, R);
  if (answer_3 === "declined") return e.value = Promise.resolve(answer_3), e.given = !1, {
    answer: answer_3,
    given: !1
  };
  return {
    answer: answer_3,
    given: given_2
  };
}
function Pn(e) {
  try {
    e?.();
  } catch (error) {
    t(`cloud-plugins consent: callback failed (${d(error)})`, {
      level: "warn"
    });
  }
}
var $e = ["userSettings", "projectSettings", "localSettings", "flagSettings"],
  Cn = new Set(["userSettings", "flagSettings"]),
  En = yi.toReversed(),
  vn = 200,
  Fn = 32,
  Re = 2000,
  An = 256,
  Tn = 1024,
  On = 140,
  Nn = 128,
  Ln = 256,
  xn = 16,
  In = 128,
  Mn = 262144,
  jn = new Set([wf, "claude-code-marketplace"]),
  $n = new Set(["https:", "ssh:", "git+ssh:", "git+https:"]),
  Ie = new Set(["http:", "git:", "git+http:"]),
  Un = new Set(["ssh:", "git+ssh:"]),
  Wn = new Set(["https:"]),
  Bn = /^[\x21-\x7e]+$/,
  Kn = /^[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\/[A-Za-z0-9._-]+$/,
  Hn = /^(?:([A-Za-z0-9][A-Za-z0-9._-]*)@)?(\[[0-9A-Fa-f:.]+\]|[A-Za-z0-9][A-Za-z0-9._-]*):(.*)$/,
  Yn = /^[A-Za-z0-9][A-Za-z0-9+.-]*::/,
  Gn = /^[A-Za-z0-9._/@+][A-Za-z0-9._/@+-]*$/,
  zn = /^[A-Za-z0-9._/@+][A-Za-z0-9._/@+ -]*$/,
  We = /(?:^|[/:])\.\.(?:$|[/?#;])/,
  Be = /%2e|%2f|%5c|%3b|%3f|%23|\\/i,
  Vn = /^[^:]*:\/\/[^/?#]*%/,
  qn = ["invalid_id", "invalid_value", "directory_loaded", "unknown_builtin", "ambiguous_marketplace", "blocked_by_policy", "not_installed_here", "unknown_marketplace", "untrusted_for_folder", "reserved_name_conflict", "not_provided_by_container", "local_marketplace", "needs_credentials", "insecure_transport", "invalid_marketplace", "over_cap", "guard_builtin_not_own_choice"];
function Xpn(e) {
  let dropped = mt(),
    dropped_2 = [],
    s = new Map(),
    i = [],
    k = tt(e),
    R = {
      byPolicy: Me(e.policyRefusedMarketplaces),
      asReserved: Me(e.reservedNameConflicts)
    };
  for (let [id, v] of [...Jn(e, dropped)].sort(([V], [q]) => _e(V, q))) {
    let marketplace = di(id) ?? "",
      q = s.get(marketplace) ?? ot(marketplace, e, R);
    s.set(marketplace, q);
    let reason = nt(id, v, marketplace, q, k, e);
    if (reason !== void 0) {
      if (dropped[reason]++, reason !== "directory_loaded") dropped_2.push({
        id: id,
        reason: reason
      });
      continue;
    }
    let ne = {
      id: id,
      value: v.value === !0,
      ownMention: v.ownMention,
      marketplace: marketplace,
      declaration: q.kind === "declare" && v.value === !0 ? q.source : void 0
    };
    i.push(ne), i.push(...i0(id).map(j => ({
      ...ne,
      id: j
    })));
  }
  let S = gt(pt(i, dropped, dropped_2), dropped, dropped_2),
    patch = {
      enabledPlugins: Object.fromEntries(S.map(({
        id: id_2,
        value: value_3
      }) => [id_2, value_3])),
      extraKnownMarketplaces: Object.fromEntries(S.flatMap(({
        marketplace: marketplace_2,
        declaration: v
      }) => v === void 0 ? [] : [[marketplace_2, {
        source: v
      }]]).sort(([A], [v]) => _e(A, v)))
    },
    counts = {
      forwarded: S.length,
      forwardedDisabled: U(S, ({
        value: value_4
      }) => !value_4),
      marketplacesDeclared: Object.keys(patch.extraKnownMarketplaces).length,
      dropped: dropped
    };
  dropped_2.sort((itemA, itemB) => _e(itemA.id, itemB.id));
  let refusedWhole = Qn(e) ? "over_read_cap" : !Vie(patch).safeParse(patch).success ? "schema_rejected" : Buffer.byteLength(Zn(patch), "utf8") > Mn ? "too_large" : void 0;
  if (refusedWhole !== void 0) return {
    patch: {
      enabledPlugins: {},
      extraKnownMarketplaces: {}
    },
    dropped: [...dropped_2, ...S.map(({
      id: id_3
    }) => ({
      id: id_3,
      reason: "over_cap"
    }))].sort((itemA, itemB) => _e(itemA.id, itemB.id)),
    counts: {
      forwarded: 0,
      forwardedDisabled: 0,
      marketplacesDeclared: 0,
      dropped: {
        ...dropped,
        over_cap: dropped.over_cap + S.length
      }
    },
    refusedWhole: refusedWhole
  };
  return {
    patch: patch,
    dropped: dropped_2,
    counts: counts
  };
}
function Zn(e) {
  return _(lN(e));
}
function Ke(e) {
  return {
    forwarded: e.forwarded,
    forwarded_disabled: e.forwardedDisabled,
    marketplaces_declared: e.marketplacesDeclared,
    ...Object.fromEntries(qn.map(item => [`dropped_${item}`, e.dropped[item]]))
  };
}
function Xn(e, n) {
  if (!D(n)) return {
    kind: "drop",
    reason: "invalid_marketplace"
  };
  switch (J(n, "source")) {
    case "github":
      return it(e, n);
    case "git":
      return at(e, n);
    case "url":
      return dt(e, n);
    case "directory":
    case "file":
    case "npm":
    case "settings":
      return {
        kind: "drop",
        reason: "local_marketplace"
      };
    default:
      return {
        kind: "drop",
        reason: "invalid_marketplace"
      };
  }
}
function Jn(e, n) {
  let r = new Map(),
    s = new Set();
  for (let i of $e) {
    let k = e.enabledPluginsByTier[i];
    if (!D(k)) continue;
    let R = Cn.has(i) || i === "localSettings" && e.localSettingsAreOwnChoice,
      S = Object.keys(k);
    n.over_cap += Math.max(0, S.length - Re);
    for (let h of S.slice(0, Re)) {
      let value_5 = k[h],
        I = He(k, h);
      if (value_5 === void 0 || I === void 0) continue;
      if (!uV.includes(i) && e.trustedOnlyBuiltinIds.has(I.toLowerCase())) {
        n.guard_builtin_not_own_choice++;
        continue;
      }
      if (!et(I)) {
        s.add(I);
        continue;
      }
      let A = r.get(I);
      r.set(I, {
        value: value_5,
        ownChoice: (A?.ownChoice ?? !1) || R && value_5 === !0,
        ownMention: (A?.ownMention ?? !1) || R && typeof value_5 === "boolean"
      });
    }
  }
  return n.invalid_id += s.size, r;
}
function Qn(e) {
  return $e.some(item => {
    let r = e.enabledPluginsByTier[item];
    return D(r) && Object.keys(r).length > Re;
  });
}
function et(e) {
  return e.length <= An && s0().safeParse(e).success;
}
function nt(e, n, r, s, i, {
  installedPluginIds: installedPluginIds,
  builtinPluginIds: builtinPluginIds,
  directoryPluginsAllowedByPolicy: directoryPluginsAllowedByPolicy
}) {
  let h = r.toLowerCase();
  if (h === hp) return "directory_loaded";
  if (typeof n.value !== "boolean") return "invalid_value";
  if (h === xm && !directoryPluginsAllowedByPolicy) return "blocked_by_policy";
  if (h === ri && !builtinPluginIds.has(e)) return "unknown_builtin";
  if (n.value && i.has(e.toLowerCase())) return "blocked_by_policy";
  if (s.kind === "drop" && n.value) return s.reason;
  if (n.value && !n.ownChoice && !installedPluginIds.has(e) && h !== ri && h !== xm) return "not_installed_here";
  return;
}
function tt({
  enabledPluginsByTier: enabledPluginsByTier
}) {
  let policySettings = enabledPluginsByTier.policySettings;
  return new Set(D(policySettings) ? Object.keys(policySettings).filter(item => policySettings[item] === !1).flatMap(item => He(policySettings, item) ?? []).map(item => item.toLowerCase()) : []);
}
function He(e, n) {
  let r = wk(n),
    s = [r, ...i0(r)],
    i = s.indexOf(n);
  return s.slice(0, i === -1 ? s.length : i).some(item => Object.hasOwn(e, item) && e[item] !== void 0) ? void 0 : r;
}
function Me(e) {
  return new Set([...e].map(item => item.toLowerCase()));
}
function ot(e, n, r) {
  let s = e.toLowerCase();
  if (s === ri || s === xm) return {
    kind: "reserved"
  };
  if (r.byPolicy.has(s)) return {
    kind: "drop",
    reason: "blocked_by_policy"
  };
  let i = rt(e, n),
    k = zie.has(s);
  if (i === void 0 && n.marketplaceRestrictionPolicyActive && s !== wf) return {
    kind: "drop",
    reason: k ? "blocked_by_policy" : je(e, n)
  };
  if (k) return r.asReserved.has(s) ? {
    kind: "drop",
    reason: "reserved_name_conflict"
  } : jn.has(s) ? {
    kind: "reserved"
  } : {
    kind: "drop",
    reason: "not_provided_by_container"
  };
  if (mtt(e)) return {
    kind: "drop",
    reason: "reserved_name_conflict"
  };
  if (i === void 0) return {
    kind: "drop",
    reason: je(e, n)
  };
  return Xn(e, i);
}
function je(e, n) {
  return st(e, n) ? "untrusted_for_folder" : "unknown_marketplace";
}
function rt(e, n) {
  let r = D(n.registeredMarketplaces) ? J(n.registeredMarketplaces, e) : void 0;
  if (r !== void 0) return D(r) ? J(r, "source") ?? null : null;
  for (let s of En) {
    if (hf.has(s) && !n.folderTrustedForProjectPlugins) continue;
    let i = Ye(n, s, e);
    if (i !== void 0) return D(i) ? J(i, "source") ?? null : null;
  }
  return;
}
function st(e, n) {
  return !n.folderTrustedForProjectPlugins && [...hf].some(item => Ye(n, item, e) !== void 0);
}
function Ye(e, n, r) {
  let s = e.declaredMarketplacesByTier[n];
  return D(s) ? J(s, r) : void 0;
}
function it(e, n) {
  let repo = J(n, "repo");
  if (typeof repo !== "string" || repo.length > On || !Kn.test(repo) || repo.split("/").some(Ze)) return {
    kind: "drop",
    reason: "invalid_marketplace"
  };
  let s = ze(n);
  return s === void 0 ? {
    kind: "drop",
    reason: "invalid_marketplace"
  } : Pe(e, {
    source: "github",
    repo: repo,
    ...s
  });
}
function at(e, n) {
  let r = J(n, "url"),
    url = Ge(r);
  if (url === void 0) return {
    kind: "drop",
    reason: "invalid_marketplace"
  };
  let reason_2 = ft(url);
  if (reason_2 !== "network") return {
    kind: "drop",
    reason: reason_2
  };
  if (!qMt(url)) return {
    kind: "drop",
    reason: "invalid_marketplace"
  };
  let k = ze(n);
  return k === void 0 ? {
    kind: "drop",
    reason: "invalid_marketplace"
  } : Pe(e, {
    source: "git",
    url: url,
    ...k
  });
}
function dt(e, n) {
  let url_2 = Ge(J(n, "url"));
  if (url_2 === void 0) return {
    kind: "drop",
    reason: "invalid_marketplace"
  };
  let s = J(n, "headers");
  if (J(n, "headersHelper") !== void 0 || s !== void 0 && !(D(s) && Object.keys(s).length === 0)) return {
    kind: "drop",
    reason: "needs_credentials"
  };
  let reason_3 = Xe(url_2, Wn);
  return reason_3 === "network" ? Pe(e, {
    source: "url",
    url: url_2
  }) : {
    kind: "drop",
    reason: reason_3
  };
}
function Ge(e) {
  return typeof e === "string" && e.length > 0 && e.length <= Tn && Bn.test(e) ? e : void 0;
}
function ze(e) {
  let ref = J(e, "ref"),
    path = J(e, "path"),
    sparsePaths = J(e, "sparsePaths"),
    skipLfs = J(e, "skipLfs");
  if (ref !== void 0 && !lt(ref) || path !== void 0 && !ut(path) || sparsePaths !== void 0 && !ct(sparsePaths) || skipLfs !== void 0 && typeof skipLfs !== "boolean") return;
  return {
    ...(ref !== void 0 && {
      ref: ref
    }),
    ...(path !== void 0 && {
      path: path
    }),
    ...(sparsePaths !== void 0 && {
      sparsePaths: sparsePaths
    }),
    ...(skipLfs !== void 0 && {
      skipLfs: skipLfs
    })
  };
}
function lt(e) {
  return typeof e === "string" && e.length <= Nn && Gn.test(e) && !e.split("/").some(Ze);
}
function ut(e) {
  return typeof e === "string" && e.length <= Ln && qe(e);
}
function ct(e) {
  return Array.isArray(e) && e.length <= xn && e.every(item => typeof item === "string" && item.length <= In && qe(item));
}
function qe(e) {
  return zn.test(e) && !e.startsWith("/") && !e.split("/").some(item => item === "..");
}
function Ze(e) {
  return e === "." || e === "..";
}
function Pe(e, source) {
  return Sk("extraKnownMarketplaces").safeParse({
    [e]: {
      source: source
    }
  }).success ? {
    kind: "declare",
    source: source
  } : {
    kind: "drop",
    reason: "invalid_marketplace"
  };
}
function ft(e) {
  if (e.startsWith("-") || Yn.test(e) || o7(e)) return "invalid_marketplace";
  if (e.includes("://")) return Xe(e, $n);
  if (/^[A-Za-z]:[\\/]/.test(e) || /^[./~]/.test(e)) return "local_marketplace";
  let n = Hn.exec(e);
  if (n === null) return "invalid_marketplace";
  let [,, r = "", s = ""] = n;
  if (s.length === 0 || /^[-:]/.test(s) || We.test(s) || Be.test(s)) return "invalid_marketplace";
  if (/[?#]/.test(s)) return "needs_credentials";
  return Je(r) ? "local_marketplace" : "network";
}
function Xe(e, n) {
  let r;
  try {
    r = new URL(e);
  } catch {
    return "invalid_marketplace";
  }
  if (r.protocol === "file:") return "local_marketplace";
  if (!(n.has(r.protocol) || Ie.has(r.protocol)) || Vn.test(e) || r.hostname === "" || /^\[?-/.test(r.hostname) || r.username.startsWith("-")) return "invalid_marketplace";
  if (r.password !== "" || r.username !== "" && !Un.has(r.protocol) || r.search !== "" || r.hash !== "" || e.includes("?") || e.includes("#")) return "needs_credentials";
  if (Je(r.hostname)) return "local_marketplace";
  if (We.test(e) || Be.test(e)) return "invalid_marketplace";
  return Ie.has(r.protocol) ? "insecure_transport" : "network";
}
function Je(e) {
  return o3o(e, "address") || Xke(e) || !/[.:]/.test(e.replace(/\.+$/, ""));
}
function pt(e, n, r) {
  let s = new Map();
  for (let {
    marketplace: marketplace_3,
    declaration: declaration
  } of e) if (declaration !== void 0) {
    let R = marketplace_3.toLowerCase(),
      S = s.get(R) ?? new Set();
    S.add(oi(lN(declaration))), s.set(R, S);
  }
  return e.filter(({
    id: id_4,
    marketplace: marketplace_4,
    declaration: declaration_2
  }) => {
    if (declaration_2 === void 0 || (s.get(marketplace_4.toLowerCase())?.size ?? 0) <= 1) return !0;
    return n.ambiguous_marketplace++, r.push({
      id: id_4,
      reason: "ambiguous_marketplace"
    }), !1;
  });
}
function gt(e, n, r) {
  let s = new Set(ht(e).slice(0, Fn)),
    i = e.filter(({
      declaration: declaration_3,
      marketplace: marketplace_5
    }) => declaration_3 === void 0 || s.has(marketplace_5)),
    k = [...i.filter(({
      value: value_6,
      ownMention: ownMention
    }) => ownMention && !value_6), ...i.filter(({
      value: value_7,
      ownMention: ownMention_2
    }) => ownMention_2 && value_7), ...i.filter(({
      value: value_8,
      ownMention: ownMention_3
    }) => !ownMention_3 && value_8), ...i.filter(({
      value: value_9,
      ownMention: ownMention_4
    }) => !ownMention_4 && !value_9)].slice(0, vn).sort((itemA, itemB) => _e(itemA.id, itemB.id)),
    R = new Set(k.map(({
      id: id_5
    }) => id_5));
  for (let {
    id: id_6
  } of e) if (!R.has(id_6)) n.over_cap++, r.push({
    id: id_6,
    reason: "over_cap"
  });
  return k;
}
function ht(e) {
  let n = e.filter(({
      declaration: declaration_4
    }) => declaration_4 !== void 0),
    r = L(n.filter(({
      ownMention: ownMention_5
    }) => ownMention_5).map(({
      marketplace: marketplace_6
    }) => marketplace_6)).sort(),
    s = new Set(r);
  return [...r, ...L(n.map(({
    marketplace: marketplace_7
  }) => marketplace_7)).filter(item => !s.has(item)).sort()];
}
function _e(e, n) {
  return e < n ? -1 : e > n ? 1 : 0;
}
function mt() {
  return {
    invalid_id: 0,
    invalid_value: 0,
    directory_loaded: 0,
    unknown_builtin: 0,
    ambiguous_marketplace: 0,
    blocked_by_policy: 0,
    not_installed_here: 0,
    unknown_marketplace: 0,
    untrusted_for_folder: 0,
    reserved_name_conflict: 0,
    not_provided_by_container: 0,
    local_marketplace: 0,
    needs_credentials: 0,
    insecure_transport: 0,
    invalid_marketplace: 0,
    over_cap: 0,
    guard_builtin_not_own_choice: 0
  };
}
function J(e, n) {
  return Object.hasOwn(e, n) ? e[n] : void 0;
}
function Qe({
  admission: admission,
  readChoices: readChoices,
  transport: transport,
  clock: clock,
  bound: bound,
  onNotice: onNotice,
  onOutcome: onOutcome,
  onState: onState
}) {
  let h = bound === void 0 ? {} : {
      bound: bound
    },
    O = "idle",
    I = null,
    A = y => {
      if (O = y, y !== "skipped") I = null;
      fe(() => onState?.(y), we);
    },
    v = null,
    generation_3 = null,
    q = !1,
    M = null,
    ne = !1,
    j = null,
    z = null,
    ge = !1;
  function te(y, b) {
    if (b === "read_failed" || b === "internal_error" || b === "refused_whole") m("ccr_cloud_plugins_forward", b, h);
    I = b, A("skipped"), l("tengu_cloud_plugins_skipped", {
      reason: f(b),
      ...h,
      reattach: y.reattach
    });
  }
  function ue(y) {
    fe(() => onOutcome?.(y), we);
    let b = _(y.refusedByWorker === void 0 ? [y.forwarded, y.forwardedDisabled, y.loaded, y.notApplied, y.stayed] : ["refused", y.refusedByWorker, y.stayed]);
    if (b !== M || y.messageWentFirst && !ne) fe(() => {
      onNotice(y), M = b, ne = y.messageWentFirst;
    }, we);
  }
  function pe(y, b, F, Y) {
    let G = j !== null;
    return {
      forwarded: b.forwarded,
      forwardedDisabled: b.forwardedDisabled,
      loaded: G ? null : F,
      stayed: b.stayed,
      notApplied: Y || G,
      messageWentFirst: !G && !Y && y.messageWentFirst,
      ...(j !== null && {
        refusedByWorker: j.reason
      })
    };
  }
  function ie(y) {
    return fe(() => transport.post(y), kt);
  }
  function oe(y, b, F, generation) {
    q = !0;
    let G = ie({
        subtype: "apply_flag_settings",
        settings: {
          [One]: b.patch
        }
      }),
      de = () => Ce(y, generation) === "current";
    return G.response.then(() => {
      if (de()) j = null;
    }, me => {
      let reason_4 = wt(me);
      if (l("tengu_cloud_plugins_apply_unconfirmed", {
        at: f(F),
        ...h,
        standing: f(Ce(y, generation)),
        ...(reason_4 !== null && {
          refused_by_worker: f(reason_4)
        })
      }), reason_4 !== null && de()) j = {
        reason: reason_4,
        generation: generation
      }, ue(pe(y, b, null, !0));
    }), G;
  }
  function he(y, b) {
    let F = Xpn(b);
    if (l("tengu_cloud_plugins_forwarded", {
      ...Ke(F.counts),
      refused_whole: F.refusedWhole !== void 0,
      ...h,
      reattach: y.reattach
    }), F.refusedWhole !== void 0) {
      ue({
        forwarded: 0,
        forwardedDisabled: 0,
        loaded: null,
        stayed: F.dropped,
        notApplied: !0,
        messageWentFirst: !1
      }), te(y, "refused_whole");
      return;
    }
    if (F.counts.forwarded === 0 && F.counts.marketplacesDeclared === 0 && !y.reattach && !y.workerKnownAtConnect && !q) {
      if (F.dropped.length > 0) ue({
        forwarded: 0,
        forwardedDisabled: 0,
        loaded: null,
        stayed: F.dropped,
        notApplied: !1,
        messageWentFirst: !1
      });
      te(y, "nothing_to_forward");
      return;
    }
    let Y = {
      patch: F.patch,
      patchKey: _(F.patch),
      forwardedEnabledIds: new Set(Object.entries(F.patch.enabledPlugins).filter(([, G]) => G).map(([G]) => G.toLowerCase())),
      forwarded: F.counts.forwarded,
      forwardedDisabled: F.counts.forwardedDisabled,
      stayed: F.dropped
    };
    if (y.plan = Y, A("waiting_for_worker"), y.generation !== null) y.earlyApply = "skipped", W(y, Y, y.generation, "connect");else Ee(oe(y, Y, "connect", null)).then(G => {
      y.earlyApply = G;
    });
  }
  function W(y, b, generation_2, Y) {
    if (y.handledGeneration !== null && generation_2 <= y.handledGeneration) return;
    let generation_changed = y.handledGeneration !== null;
    y.handledGeneration = generation_2, y.reloadTaken = !1, j = _t(generation_2, y, j), ne = !1;
    let de = () => Ce(y, generation_2),
      me = Z => {
        l("tengu_cloud_plugins_reload", {
          early_apply: f(y.earlyApply),
          generation_changed: generation_changed,
          install_frames_seen: y.installFrames,
          forwarded_enabled: b.forwardedEnabledIds.size,
          ...h,
          reattach: y.reattach,
          ...Z
        });
      };
    A("posted");
    let se = null,
      ye = (Z, w, H) => {
        let x = Z === "accepted" && w === "accepted";
        if (de() === "current") {
          if (y.reloadTaken = x, x && j === null) z = {
            generation: generation_2,
            patchKey: b.patchKey
          };
          let X = Z === "session_inactive" || w === "session_inactive";
          if (!x) {
            if (X) c("ccr_cloud_plugins_forward", "session_inactive", {
              ...h
            });else m("ccr_cloud_plugins_forward", "posts_refused", {
              ...h
            });
            ue(pe(y, b, null, !0));
          } else if (j !== null) c("ccr_cloud_plugins_forward", "refused_by_worker", {
            ...h
          });else g("ccr_cloud_plugins_forward", {
            ...h,
            message_went_first: y.messageWentFirst
          });
          A(x ? "settled" : "failed");
        }
        H.then(X => {
          if (me({
            apply_outcome: f(Z),
            reload_outcome: f(w),
            standing: f(de()),
            message_went_first: y.messageWentFirst,
            reload_rtt_ms: se === null ? -1 : clock.now() - se,
            answered: X !== null,
            loaded_of_forwarded: X?.loaded ?? -1,
            worker_error_count: X?.workerErrors ?? -1
          }), de() === "current" && (x || X !== null)) {
            if (ue(pe(y, b, X?.loaded ?? null, !1)), y.messageWentFirst = !1, X !== null) {
              if (y.reloadTaken = !0, j === null) z = {
                generation: generation_2,
                patchKey: b.patchKey
              };
              A("settled");
            }
          }
        });
      };
    Ee(oe(y, b, Y, generation_2)).then(Z => {
      if (Z !== "accepted" || de() !== "current") {
        ye(Z, "not_posted", Promise.resolve(null));
        return;
      }
      se = clock.now();
      let w = ie({
          subtype: "reload_plugins"
        }),
        H = w.response.then(x => bt(b, x), () => null);
      Ee(w).then(x => {
        ye(Z, x, H);
      });
    });
  }
  function ce(y) {
    return z !== null && y.generation === z.generation && (y.plan === null || y.plan.patchKey === z.patchKey);
  }
  function ae(reattach) {
    let messageWentFirst = ge && !(z !== null && generation_3 === z.generation);
    return ge = !1, {
      reattach: reattach,
      workerKnownAtConnect: generation_3 !== null,
      reloadTaken: !1,
      messageWentFirst: messageWentFirst,
      closed: !1,
      plan: null,
      generation: generation_3,
      handledGeneration: null,
      earlyApply: "pending",
      installFrames: 0
    };
  }
  return {
    connected({
      reattach: reattach_2
    }) {
      if (v !== null) v.closed = !0;
      let b = ae(reattach_2);
      v = b;
      let F = fe(admission, () => "internal_error");
      if (F !== "admitted") {
        te(b, F);
        return;
      }
      A("reading"), Promise.resolve().then(readChoices).then(Y => {
        if (!b.closed) fe(() => he(b, Y), () => te(b, "internal_error"));
      }, () => {
        if (!b.closed) te(b, "read_failed");
      });
    },
    workerUp(y) {
      if (generation_3 !== null && y < generation_3) return;
      if (generation_3 = y, v === null || v.generation !== null && y <= v.generation) return;
      v.generation = y;
      let b = v,
        plan = b.plan;
      if (plan !== null) fe(() => W(b, plan, y, "worker_up"), () => te(b, "internal_error"));
    },
    pluginInstallFrame() {
      if (v !== null) v.installFrames++;
    },
    messageSent() {
      if (v === null) {
        ge = !0;
        return;
      }
      if (!v.reloadTaken && O !== "skipped" && !ce(v)) v.messageWentFirst = !0;
    },
    disconnected() {
      if (v !== null) v.closed = !0, v = null;
      A("idle");
    },
    state: () => O,
    skipped: () => O === "skipped" ? I : null
  };
}
function Ce(e, n) {
  return e.closed ? "disconnected" : e.handledGeneration === n ? "current" : "superseded";
}
function _t(generation_4, n, r) {
  if (r === null || r.generation === generation_4) return r;
  return r.generation === null && !n.workerKnownAtConnect ? {
    ...r,
    generation: generation_4
  } : null;
}
function fe(e, n) {
  try {
    return e();
  } catch (error) {
    return a(error), n(error);
  }
}
function we() {}
var yt = ["not_managed_cloud_worker", "entrypoint", "disabled", "hermetic", "not_admitted", "flag_off", "flag_unsettled", "malformed", "other"];
function wt(e) {
  let n = e instanceof Error ? e.message : typeof e === "string" ? e : "";
  if (n === Ggn) return "other";
  let r = `${Ggn}: `;
  if (!n.startsWith(r)) return null;
  let s = n.slice(r.length).trim();
  return yt.find(item => item === s) ?? "other";
}
function kt(e) {
  let response = Promise.reject(e);
  return response.catch(we), {
    posted: Promise.resolve("failed"),
    response: response
  };
}
function Ee(e) {
  return e.posted.catch(() => "failed");
}
var St = p(() => u({
  plugins: C(u({
    source: o().optional()
  })),
  error_count: E().int()
}));
function bt(e, n) {
  let r = St().safeParse(n);
  if (!r.success) return {
    loaded: null,
    workerErrors: -1
  };
  return {
    loaded: new Set(r.data.plugins.flatMap(({
      source: source_2
    }) => source_2 !== void 0 && e.forwardedEnabledIds.has(source_2.toLowerCase()) ? [source_2.toLowerCase()] : [])).size,
    workerErrors: r.data.error_count
  };
}
async function Djr(e) {
  let n = $o().map(item => [item, be(item)]),
    [registeredMarketplaces, s] = await Promise.all([Nc(e), w9(e)]),
    folderTrustedForProjectPlugins = UOt(),
    k = n.filter(([h]) => folderTrustedForProjectPlugins || !hf.has(h)).flatMap(([, h]) => Object.entries(h?.extraKnownMarketplaces ?? {}).map(([O, {
      source: source_3
    }]) => [O, source_3])),
    R = [...k, ...Object.entries(registeredMarketplaces).map(([h, {
      source: source_4
    }]) => [h, source_4]), [wf, Zye]],
    S = n.find(([h]) => h === "localSettings")?.[1]?.enabledPlugins;
  return {
    enabledPluginsByTier: Object.fromEntries(n.map(([h, O]) => [h, O?.enabledPlugins])),
    declaredMarketplacesByTier: Object.fromEntries(n.map(([h, O]) => [h, O?.extraKnownMarketplaces])),
    registeredMarketplaces: registeredMarketplaces,
    folderTrustedForProjectPlugins: folderTrustedForProjectPlugins,
    localSettingsAreOwnChoice: !(D(S) && Object.keys(S).length > 0) || !sM({
      onIndeterminate: "tracked"
    }),
    directoryPluginsAllowedByPolicy: Kue(),
    builtinPluginIds: new Set([...Fr().builtinPlugins.keys()].map(item => `${item}@${ri}`)),
    trustedOnlyBuiltinIds: new Set([...Fr().builtinPlugins.keys()].map(item => `${item}@${ri}`).filter(H6).map(item => item.toLowerCase())),
    installedPluginIds: new Set(Object.entries(s.plugins).filter(([, h]) => Ude(h)).map(([h]) => h)),
    policyRefusedMarketplaces: new Set(R.filter(([, h]) => !ip(h)).map(([h]) => h)),
    marketplaceRestrictionPolicyActive: QGe(),
    reservedNameConflicts: new Set([...Object.entries(registeredMarketplaces).filter(([h, O]) => xEe(h, O) !== null).map(([h]) => h), ...k.filter(([h, O]) => !Object.hasOwn(registeredMarketplaces, h) && KBt(h, O) !== null).map(([h]) => h)])
  };
}
var YNo = 5000,
  ve = 6;
function Ljr(e) {
  if (e === void 0) return;
  if (e.refusedByWorker !== void 0) return "refused_by_worker";
  if (e.notApplied) return "not_applied";
  let n = e.forwarded - e.forwardedDisabled;
  if (e.forwarded === 0) return e.stayed.length > 0 ? "none_to_send" : void 0;
  if (n === 0) return;
  if (e.loaded === null) return "not_confirmed";
  if (e.loaded < n) return e.loaded === 0 ? "not_installed" : "some_not_installed";
  return;
}
function Rt(e) {
  return e === "skipped" || e === "failed";
}
function Pt(e) {
  return e === "reading" || e === "posted";
}
function Ct(e) {
  return e === "read_failed" || e === "internal_error" ? e : void 0;
}
var XNo = {
  now: () => Date.now(),
  setTimeout(e, n) {
    let r = setTimeout(e, n);
    return () => clearTimeout(r);
  }
};
function f3n(e) {
  let {
      sessionId: sessionId,
      reattach: reattach_3,
      manager: manager,
      memory: memory
    } = e,
    k = w => {
      try {
        e.say(w);
      } catch (error) {
        a(error);
      }
    },
    R = e.readChoices ?? (() => Djr(e.storageV5)),
    clock_2 = e.clock ?? XNo,
    h = e.muted ?? ZTe,
    O = w => new Promise((H, x) => {
      let X = clock_2.setTimeout(() => x(Error("a local read for plugin forwarding timed out")), YNo);
      Promise.resolve().then(w).then(H, x).finally(X);
    }),
    I = () => O(R),
    A = e.consentDeps ?? cGt(e.storageV5),
    v = e.distrust ?? JNo(e.reach),
    V = () => O(() => gvt(memory.consentPin, A, v)),
    abortController = new AbortController(),
    admission_2 = "no_consent",
    source_5,
    notice,
    z = () => {
      try {
        e.onChange?.();
      } catch (error) {
        a(error);
      }
    },
    ge = w => {
      notice = w, en(w, k), z();
    },
    te = !1,
    ue = !1,
    pe = !1,
    ie = h(),
    muted = !1,
    he = !1,
    W = Qe({
      admission: () => admission_2,
      readChoices: () => I().then(w => (te = !1, w), w => {
        throw te = !0, w;
      }),
      transport: {
        post(w) {
          let {
            posted: posted,
            response: response_2
          } = manager.postControlRequest(w, {
            answerExpected: !1
          });
          return {
            posted: posted.then(({
              outcome: outcome
            }) => outcome),
            response: response_2
          };
        }
      },
      clock: clock_2,
      ...(e.bound !== void 0 && {
        bound: e.bound
      }),
      onNotice: w => {
        if (w.forwarded > w.forwardedDisabled && w.loaded !== 0 && !w.notApplied && w.refusedByWorker === void 0) ue = !0;
        en(w, k);
      },
      onOutcome: w => {
        notice = w, z();
      },
      onState: () => z()
    }),
    settled = !1,
    ae = null,
    y = () => {
      if (!he) he = !0, k({
        line: line,
        level: "notice"
      });
    },
    b = () => {
      if (muted) return;
      muted = !0, notice = void 0, W.disconnected(), y(), l("tengu_cloud_plugins_admission", {
        admission: f("flag_off"),
        source: f("muted"),
        reattach: reattach_3
      }), z();
    },
    F = () => {
      if (muted = !1, notice = void 0, k({
        line: line_2,
        level: "notice"
      }), W.connected({
        reattach: reattach_3
      }), G) W.messageSent();
      z();
    },
    Y = w => {
      if (abortController.signal.aborted) return;
      if (memory.setAsideSessions.delete(sessionId), !settled) {
        ae = w;
        return;
      }
      let H = w === "accepted" ? "admitted" : "opted_out";
      if (H === admission_2 && !te) return;
      let x = "decided";
      if (admission_2 = H, source_5 = x, notice = void 0, z(), l("tengu_cloud_plugins_admission", {
        admission: f(H),
        source: f(x),
        reattach: reattach_3
      }), H === "admitted" && ie) {
        b();
        return;
      }
      if (muted = !1, W.disconnected(), W.connected({
        reattach: reattach_3
      }), G) W.messageSent();
    },
    G = !1,
    de = memory.decided.subscribe(w => {
      try {
        Y(w);
      } catch (error) {
        a(error);
      }
    }),
    me = (e.onMuteRecheck ?? tue)(() => {
      try {
        let w = h();
        if (abortController.signal.aborted || w === ie) return;
        if (ie = w, w) {
          if (admission_2 === "admitted" && settled && Pt(W.state())) {
            b();
            return;
          }
          z();
          return;
        }
        if (he = !1, muted) {
          F();
          return;
        }
        z();
      } catch (error) {
        a(error);
      }
    }),
    se = () => {
      if (admission_2 !== "admitted") return;
      gvt(memory.consentPin, A, v).then(w => {
        if (w !== "accepted") Y("declined");
      }, () => {});
    };
  ye().catch(w => (a(w), {
    admission: "no_consent",
    source: "internal_error",
    unsent: []
  })).then(w => {
    if (l("tengu_cloud_plugins_admission", {
      admission: f(w.admission),
      source: f(w.source),
      reattach: reattach_3
    }), abortController.signal.aborted) return;
    if (w.source === "read_failed" || w.source === "internal_error") {
      if (m("ccr_cloud_plugins_forward", w.source), source_5 = w.source, settled = !0, z(), ae !== null) Y(ae);
      return;
    }
    if (admission_2 = w.admission, source_5 = w.source, settled = !0, admission_2 === "admitted" && ie) b();else W.connected({
      reattach: reattach_3
    }), z();
    if (w.unsent.length > 0) ge(Ot(w.unsent));
    if (ae !== null) Y(ae);
  }).catch(w => {
    a(w);
  });
  async function ye() {
    let w = await V().catch(() => null);
    if (w === null) return {
      admission: "no_consent",
      source: "read_failed",
      unsent: []
    };
    if (w !== "unset") return {
      admission: w === "accepted" ? "admitted" : "opted_out",
      source: "stored",
      unsent: []
    };
    let H = await I().then(hn => hn, () => null);
    if (H === null) return {
      admission: "no_consent",
      source: "read_failed",
      unsent: []
    };
    let x = Xpn(H);
    if (x.counts.forwarded === 0 && x.counts.marketplacesDeclared === 0) return {
      admission: "no_consent",
      source: "not_asked",
      unsent: x.dropped
    };
    if (abortController.signal.aborted) return {
      admission: "no_consent",
      source: "detached",
      unsent: []
    };
    let X = v.withheld();
    if (X !== null) {
      if (memory.setAsideSessions.add(sessionId), ae === null) k({
        line: At(X),
        level: "warning"
      });
      return {
        admission: "no_consent",
        source: "untrusted_store",
        unsent: []
      };
    }
    if (!memory.pointedToCommand.shown && ae === null) memory.pointedToCommand.shown = !0, k({
      line: Tt(x.counts.forwarded - x.counts.forwardedDisabled, x.counts.forwarded),
      level: "debug"
    });
    return {
      admission: "no_consent",
      source: "undecided",
      unsent: []
    };
  }
  let Z = w => () => {
    try {
      w();
    } catch (error) {
      a(error);
    }
  };
  return {
    workerKnownUp: Z(() => {
      if (admission_2 === "admitted" && ie) b();
      W.workerUp(memory.generations.known(sessionId));
    }),
    workerCameUp: Z(() => {
      if (admission_2 === "opted_out" && ue && !pe) pe = !0, k({
        line: line_3,
        level: "notice"
      });
      se();
      let w = memory.generations.next(sessionId);
      if (admission_2 === "admitted" && ie) b();else if (admission_2 === "admitted" && settled && te) {
        if (notice = void 0, W.disconnected(), W.connected({
          reattach: reattach_3
        }), G) W.messageSent();
      }
      W.workerUp(w);
    }),
    pluginInstallFrame: Z(() => W.pluginInstallFrame()),
    messageSent: Z(() => {
      G = !0, W.messageSent();
    }),
    teardown: Z(() => {
      if (abortController.signal.aborted) return;
      memory.setAsideSessions.delete(sessionId), abortController.abort(), me(), de(), W.disconnected();
    }),
    state: () => ({
      settled: settled,
      admission: admission_2,
      source: source_5,
      notice: notice,
      muted: muted,
      answerPending: admission_2 === "admitted" && !muted && notice === void 0 && !Rt(W.state()),
      gaveUp: Ct(W.skipped())
    })
  };
}
var line = "Remote tool serving was turned off by Anthropic (emergency switch). Your plugins are not sent from this computer while it is off; they are sent again once it is back on.",
  line_2 = "Remote tool serving was turned back on by Anthropic. Your plugins are sent to this cloud session again from this computer.",
  line_3 = "This cloud session restarted without your plugins: they are no longer sent from this machine, because the saved Yes was withdrawn (a No in /cloud-plugins, or the answer was removed). Run /cloud-plugins to change that.";
function JNo(e) {
  let n = null,
    r = null,
    s = null,
    i = () => n ??= Promise.resolve().then(() => e.judge()).catch(() => "unknown").then(k => (r = k, k));
  return {
    storeUntrusted: () => i().then(k => k !== "outside"),
    onUntrusted: () => {
      s = r === null || r === "outside" ? "unknown" : r;
    },
    withheld: () => s
  };
}
function At(e) {
  let n = Mr(nYe());
  return `The saved answer about your plugins is not used for this cloud session, because ${e === "in_launch_dir" ? `the session itself can change ${n} from the folder or repository it runs in` : e === "in_other_root" ? `the session itself can change ${n} through a folder it may write on this machine (an added directory or a settings write grant)` : `it could not be checked that the session cannot change ${n}`}; run /cloud-plugins to decide for this session.`;
}
function Tt(e, n) {
  return `${e > 0 ? `Your ${e} enabled ${P(e, "plugin")} can be used in` : `Your ${n} plugin ${P(n, "choice")} can apply to`} your cloud sessions from this machine \u2014 run /cloud-plugins to decide (nothing is sent until you do).`;
}
function Ot(stayed) {
  return {
    forwarded: 0,
    forwardedDisabled: 0,
    loaded: null,
    stayed: stayed,
    notApplied: !1,
    messageWentFirst: !1
  };
}
function en(e, n) {
  Nt(e).forEach(n);
}
function Nt(e) {
  return [...Dt(e), ...Lt(e.stayed, e.forwarded === 0)];
}
function Dt(e) {
  if (e.forwarded === 0 && e.refusedByWorker === void 0 && !e.notApplied) return [];
  if (e.refusedByWorker !== void 0) return [{
    line: `This cloud session did not take your plugins: ${It[e.refusedByWorker]}. Your plugins on this machine are unchanged.`,
    level: "warning"
  }];
  if (e.notApplied) return [{
    line: "Your plugins may not have reached this cloud session: it did not accept the request. They will be sent again if the session restarts or you reconnect to it; /reload-plugins shows what is loaded there now.",
    level: "warning"
  }];
  let n = e.forwarded - e.forwardedDisabled,
    forwardedDisabled = e.forwardedDisabled,
    s = forwardedDisabled > 0 ? ` (${forwardedDisabled} you turned off here ${P(forwardedDisabled, "stays", "stay")} off there)` : "";
  if (n === 0) return [{
    line: `The ${forwardedDisabled} ${P(forwardedDisabled, "plugin")} you turned off here ${P(forwardedDisabled, "is", "are")} off in this cloud session too.`,
    level: "debug"
  }];
  let i = e.loaded !== null && e.loaded >= n,
    k = P(n, "it", "them"),
    R = e.loaded === null ? `Sent your ${n} enabled ${P(n, "plugin")} to this cloud session${s}; it has not confirmed ${k} \u2014 /reload-plugins shows what loaded.` : e.loaded >= n ? `Using your ${n} ${P(n, "plugin")} in this cloud session${s}.` : e.loaded === 0 ? `${n === 1 ? "Your enabled plugin could not" : `None of your ${n} enabled plugins could`} be installed in this cloud session yet${s} \u2014 the session is still fetching ${n === 1 ? "it" : "them"} or cannot reach ${n === 1 ? "its" : "their"} marketplace; /reload-plugins shows what loaded.` : `Using ${e.loaded} of your ${n} plugins in this cloud session${s}; the other ${n - e.loaded} could not be installed there yet \u2014 the session is still fetching ${n - e.loaded === 1 ? "it" : "them"} or cannot reach ${n - e.loaded === 1 ? "its" : "their"} marketplace; /reload-plugins shows what loaded.`,
    S = !e.messageWentFirst ? "" : e.loaded === null ? ` If ${P(n, "it", "they")} loaded, ${P(n, "it applies", "they apply")} from your next prompt; the one already sent may have run without ${k}.` : ` ${P(n, "It applies", "They apply")} from your next prompt; the one already sent may have run without ${k}.`;
  return [{
    line: `${R}${S}`,
    level: i && !e.messageWentFirst ? "debug" : "notice"
  }];
}
function Lt(e, n) {
  if (e.length === 0) return [];
  let r = e.slice(0, ve).map(({
      id: id_7,
      reason: reason_5
    }) => `${bi(id_7, {
      maxCodeUnits: 80
    })} (${xt[reason_5]})`).join("; "),
    s = e.length > ve ? `; and ${e.length - ve} more` : "";
  return [{
    line: `${n ? `Not using your plugins in this cloud session; ${e.length} ${P(e.length, "stays", "stay")} on this machine` : `${e.length} of your plugin choices ${P(e.length, "stays", "stay")} on this machine`}: ${r}${s}.`,
    level: "debug"
  }];
}
var xt = {
    invalid_id: "not a plugin@marketplace id",
    invalid_value: "its setting is not true or false",
    directory_loaded: "loaded with --plugin-dir, which exists only on this machine",
    unknown_builtin: "this build has no such built-in plugin",
    ambiguous_marketplace: "its marketplace name is spelled in conflicting ways here",
    blocked_by_policy: "your organization's policy does not allow it",
    not_installed_here: "only the repository\u2019s settings enable it and it is not installed on this machine; the cloud session goes by its own copy of the repository for that",
    unknown_marketplace: "its marketplace is not known on this machine",
    untrusted_for_folder: "its marketplace is declared by this folder's files, which you have not trusted for plugins",
    reserved_name_conflict: "its marketplace name is reserved for an official marketplace it does not match",
    not_provided_by_container: "its marketplace name is reserved for an official marketplace that cloud sessions do not have",
    local_marketplace: "its marketplace lives on this machine or your network",
    needs_credentials: "its marketplace needs credentials, which are never sent",
    insecure_transport: "its marketplace is fetched over an unencrypted connection",
    invalid_marketplace: "its marketplace source is malformed",
    over_cap: "over the limit of plugins one cloud session is sent",
    guard_builtin_not_own_choice: "a repository set it, and only your own settings may decide this one"
  },
  It = {
    disabled: "plugin forwarding is switched off in that container",
    not_managed_cloud_worker: "that kind of cloud session does not take plugins from your machine",
    entrypoint: "that kind of cloud session does not take plugins from your machine",
    hermetic: "that cloud session runs sealed off from outside configuration",
    not_admitted: "plugin forwarding is not available there",
    flag_off: "plugin forwarding is not switched on for your account there",
    flag_unsettled: "it could not confirm in time that plugin forwarding is on for your account",
    malformed: "it did not accept the request",
    other: "it did not accept the request"
  };
var Njr = "Synced from this computer:",
  QNo = {
    files: "A message is waiting \xB7 esc to take it back",
    settings: "A message is waiting for your settings to upload \xB7 esc to take it back"
  },
  cUe = {
    projectFiles: "Project files",
    settings: "Settings",
    plugins: "Plugins",
    localTools: "Local tools"
  },
  dn = ["projectFiles", "settings", "plugins"],
  tick = re.tick,
  cross = re.cross,
  jt = "\u2026",
  Te = {
    mark: "synced"
  },
  Ae = {
    mark: "pending"
  };
function N(words) {
  return {
    mark: "not_synced",
    words: words
  };
}
function $t(e) {
  switch (e.mark) {
    case "synced":
      return tick;
    case "pending":
      return jt;
    case "not_synced":
      return cross;
  }
}
function Se(e, n) {
  let r = `${$t(n)} ${e}`;
  switch (n.mark) {
    case "synced":
      return n.note === void 0 ? r : `${r} (${n.note})`;
    case "pending":
      return r;
    case "not_synced":
      return `${r} \u2014 ${n.words}`;
  }
}
function Ut(e) {
  return [Njr, ...dn.flatMap(item => {
    let r = e[item];
    return r === void 0 ? [] : [Se(cUe[item], r)];
  }), ...(e.localTools === void 0 ? [] : [Se(cUe.localTools, e.localTools)])];
}
function v5s(e) {
  let [n, ...r] = Ut(e),
    s = `${n} ${r.join(" \xB7 ")}`,
    i = Hjr(e),
    k = i === void 0 ? s : `${s}. ${i}`,
    R = $jr(e);
  if (R === void 0) return k;
  return i === void 0 ? `${k}. ${R}.` : `${k} ${R}.`;
}
function Hjr(e) {
  return;
}
function $jr(e) {
  if (e.repositoryTrust === void 0 || e.repositoryTrust === "nothing_to_mark") return;
  return ePi(e.repositoryTrust);
}
function E5s(e, n) {
  return e.whileClosed === n.whileClosed && e.repositoryTrust === n.repositoryTrust && nn(e.localTools, n.localTools) && dn.every(item => nn(e[item], n[item]));
}
function T5s(e, n, name) {
  switch (e.kind) {
    case "announced":
      return e.status === "announced" && n === void 0 ? {
        on: !0,
        name: name
      } : {
        on: !1
      };
    case "refused":
    case "unsupported":
      return {
        on: !1
      };
    case "retry":
    case "failed":
      return;
  }
}
function C5s(e, n, r) {
  if (n !== void 0 && e?.on !== !0) return N(n);
  if (e === void 0) return;
  return e.on ? {
    mark: "synced",
    note: `served by this machine (${e.name})`
  } : N("not serving this session");
}
function nn(e, n) {
  return e === void 0 || n === void 0 ? e === n : Wt(e, n);
}
function Wt(e, n) {
  return Se("", e) === Se("", n);
}
function R5s(e) {
  switch (e) {
    case "elsewhere":
      return "not_from_here";
    case "unknown":
    case "failed":
      return "lookup_failed";
    case "here_only":
      return "not_opted_in";
    case "held":
    case "nowhere":
    case "not_looked":
    case void 0:
      return "not_set_up";
  }
}
function A5s(e, n) {
  return e.state === "absent" && e.reason === "not_offered" ? void 0 : Bt(e, n);
}
function Bt(e, n) {
  switch (e.state) {
    case "seeding":
    case "armed":
      return N(ke("off", void 0, n));
    case "absent":
      return N(ke(e.state, e.reason, n));
    case "off":
    case "stopped":
      return N(ke(e.state, e.reason, n));
  }
}
function ZNo(e) {
  return;
}
function x5s(e) {
  return !1;
}
function p3n(e) {
  return {
    fromUpload: e?.kind === "bundle"
  };
}
var tn = "not set up for this session",
  Fe = {
    not_opted_in: tn,
    not_from_here: "this session was not started from this folder",
    not_set_up: tn,
    lookup_failed: "this computer could not check its records of this session"
  },
  Kt = {},
  on = {
    ...Fe,
    ...Kt,
    seeded_elsewhere: Fe.not_from_here,
    not_seeded: Fe.not_set_up
  };
function ke(e, n, r, s) {
  return (n !== void 0 && Object.hasOwn(on, n) ? on[n] : void 0) ?? (e === "stopped" ? "sync stopped for this session" : "sync is off for this session");
}
function P5s(e) {
  return (e.kind === "absent" ? e.reason : e.outcome?.kind === "none" ? e.outcome.reason : void 0) === "no_project_files" ? {
    kind: "absent",
    reason: "not_sent"
  } : e;
}
function O5s(e) {
  if (e.kind === "absent") return N(le[e.reason]);
  let {
    outcome: outcome_2,
    readBack: readBack
  } = e;
  if (outcome_2 === void 0) return Ae;
  let keptForCredential = outcome_2.keptForCredential,
    i = outcome_2.keptAsLinks === void 0 ? [] : [Ht(outcome_2.keptAsLinks)];
  if (outcome_2.kind === "none") {
    let h = [...(keptForCredential === void 0 ? [] : [`${rn(keptForCredential)} kept here: ${P(keptForCredential.others + (keptForCredential.claudeMd ? 1 : 0), "it looks like it holds", "they look like they hold")} a credential`]), ...i];
    return N(h.length > 0 && outcome_2.reason === "nothing_to_send" ? h.join("; also ") : Gt(outcome_2.reason));
  }
  let k = [...(keptForCredential === void 0 ? [] : [`without ${rn(keptForCredential)}`]), ...i],
    R = k.length === 0 ? Te : {
      mark: "synced",
      note: k.join("; also ")
    },
    S = outcome_2.settingsRefused === void 0 ? void 0 : N(outcome_2.settingsRefused === "self_hosted_runner" ? self_hosted_runner : ln[outcome_2.settingsRefused]);
  switch (outcome_2.outcome) {
    case "sent":
    case "unchanged":
    case "conflict_resolved":
      return S ?? (readBack === void 0 ? R : sn(readBack, R));
    case "deadline":
      return S ?? (readBack === void 0 ? N("the upload took too long") : sn(readBack, R));
    case "raced":
      return N("another launch of this session sent its settings first");
    case "not_forwarded_at_create":
      return N(not_forwarded_at_create);
    case "lane_full":
      return N("the session holds as many uploaded files as it may");
    case "unavailable":
      return N("not available for this session");
    case "unauthorized":
      return N(unauthorized);
    case "failed":
      return N("the upload failed");
    case "aborted":
      return N("the upload was cancelled");
  }
}
function rn({
  claudeMd: claudeMd,
  others: others
}) {
  if (!claudeMd) return `${others} ${P(others, "file")}`;
  return others === 0 ? "CLAUDE.md" : `CLAUDE.md and ${others} more ${P(others, "file")}`;
}
function Ht({
  names: names,
  more: more
}) {
  let r = more > 0 ? `${names.join(", ")} and ${more} more` : names.join(" and ");
  return names.length + more === 1 ? `${r} is a link, so it wasn't sent` : `${r} are links, so they weren't sent`;
}
function sn(e, n) {
  switch (e.verdict) {
    case "applied_before_first_ask":
    case "applied_late":
      return e.left === null ? n : N(Ztr[e.left]);
    case "behind":
      return n;
    case "not_applied":
      return N("the cloud session could not apply them");
    case "stale":
      return N("the cloud session holds a different copy");
    case "not_seen":
      return N("the cloud session has not confirmed them");
    case "unreadable":
      return N("the cloud session's answer could not be read");
  }
}
var ln = {
    schema_rejected: "your settings file has errors",
    settings_too_large: "your settings file is too large",
    settings_unreadable: "your settings file could not be read"
  },
  muted_2 = "turned off by Anthropic for now (emergency switch)",
  Yt = "your rules don't apply on a self-hosted runner",
  self_hosted_runner = `not sent: ${Yt}`,
  not_forwarded_at_create = "this machine has no record of sending them to this session",
  le = {
    unsupported: "not available in this version",
    not_enabled: "not enabled for this account",
    kept_on_this_machine: "you chose not to send them",
    not_decided: "not decided on this machine yet (/config, for new sessions)",
    launch_keeps_them: "this launch keeps them on this machine",
    not_sent: "not sent with this session",
    no_project_files: "not sent with this session"
  };
function Gt(e) {
  switch (e) {
    case "flag_off":
      return le.not_enabled;
    case "no_consent":
      return "kept on this machine (see /config)";
    case "user_settings_disabled":
      return "this launch does not load your user settings";
    case "unbound":
      return "this session is not bound to this machine";
    case "aborted":
      return "the upload was cancelled";
    case "failed":
      return "preparing them failed";
    case "too_slow":
      return "preparing them took too long";
    case "no_project_files":
      return le.no_project_files;
    case "self_hosted_runner":
      return self_hosted_runner;
    case "home_unvettable":
      return "your settings folder could not be fully examined";
    case "nothing_to_send":
      return "nothing to send from this machine";
    case "rules_unreadable":
      return "a settings file here has errors";
  }
}
function I5s(e, reason_6, readBack_2) {
  return e === void 0 ? {
    kind: "absent",
    reason: reason_6
  } : {
    kind: "seed",
    outcome: e.outcome(),
    readBack: readBack_2
  };
}
var cn = {
  not_enabled: "not enabled for this account",
  switched_off: "switched off on this machine",
  attach_failed: "could not be sent from this machine"
};
function M5s(e) {
  if (e.kind === "pending") return Ae;
  if (e.kind === "absent") return N(cn[e.reason]);
  let {
    state: state
  } = e;
  if (state.muted) return N(muted_2);
  if (!state.settled || state.answerPending) return Ae;
  switch (state.admission) {
    case "flag_off":
      return N("not enabled for this account");
    case "opted_out":
      return N("you chose not to send them");
    case "no_consent":
      return N(fn(state.source));
    case "admitted":
      return zt(state);
  }
}
function fn(e) {
  switch (e) {
    case "not_asked":
      return "no plugins to send from this machine";
    case "read_failed":
      return "your plugin choices here could not be read";
    case "detached":
    case "internal_error":
      return "they could not be sent this time";
    case "bound_elsewhere":
      return "this machine could not show that this session is bound to it";
    case "binding_unknown":
      return "could not check this session's binding";
    case "muted":
      return muted_2;
    case "untrusted_store":
      return "the saved answer here could be changed by this session; run /cloud-plugins to decide for it";
    case void 0:
    case "undecided":
    case "stored":
    case "decided":
      return "run /cloud-plugins to send them";
  }
}
function zt(e) {
  let n = Ljr(e.notice);
  if (n !== void 0) return N(pn[n]);
  return e.notice === void 0 && e.gaveUp !== void 0 ? N(fn(e.gaveUp)) : Te;
}
var pn = {
  refused_by_worker: "this cloud session does not take plugins",
  not_applied: "the cloud session did not accept them",
  none_to_send: "no plugins to send from this machine",
  not_confirmed: "sent, not confirmed by the session",
  not_installed: "they could not be installed there",
  some_not_installed: "some could not be installed there"
};
function D5s(e, n) {
  let directory_sync = e.directory_sync;
  return {
    projectFiles: N(ke(directory_sync.state === "stopped" ? "stopped" : "off", directory_sync.reason, {
      fromUpload: directory_sync.started_from_upload === !0
    }, n)),
    settings: an(e.settings),
    plugins: an(e.plugins),
    ...Vt(directory_sync),
    ...(e.repository_trust !== void 0 && {
      repositoryTrust: e.repository_trust
    })
  };
}
function Vt(e) {
  let whileClosed = ZNo(e.state === "armed" ? {
    state: "armed",
    direction: e.direction ?? "pending",
    firstUpload: e.first_upload === void 0 ? null : e.first_upload === "landed" ? "landed" : "pending"
  } : {
    state: e.state
  });
  return whileClosed === void 0 ? {} : {
    whileClosed: whileClosed
  };
}
function an(e) {
  if (e === void 0) return N("not enabled for this launch");
  if (e.state === "forwarded") return Te;
  return N(e.reason !== void 0 && qt(e.reason) ? gn[e.reason] : "not sent from this machine");
}
function qt(e) {
  return Object.hasOwn(gn, e);
}
var gn = {
  unsupported: le.unsupported,
  flag_off: le.not_enabled,
  launch_flag: le.launch_keeps_them,
  declined: le.kept_on_this_machine,
  no_consent: "not decided yet on this machine",
  unbound: "this session is not bound to this machine",
  switched_off: cn.switched_off,
  bound_elsewhere: "this machine could not show that this session is bound to it",
  binding_unknown: "could not check this session's binding",
  not_seeded: le.not_sent,
  nothing_to_forward: "nothing to send from this machine",
  nothing_to_send: "nothing to send from this machine",
  rules_unreadable: "a settings file here has errors",
  plan_failed: "preparing them failed",
  user_settings_disabled: "this launch does not load your user settings",
  muted: muted_2,
  too_slow: "preparing them took too long",
  no_project_files: le.no_project_files,
  self_hosted_runner: self_hosted_runner,
  home_unvettable: "your settings folder could not be fully examined",
  aborted: "the upload was cancelled",
  deadline: "the upload took too long",
  raced: "another launch of this session sent its settings first",
  not_forwarded_at_create: not_forwarded_at_create,
  lane_full: "the session holds as many uploaded files as it may",
  unavailable: "not available for this session",
  unauthorized: unauthorized,
  failed: "the upload failed",
  ...ln,
  ...pn,
  unreadable: "your plugin choices here could not be read",
  could_not_send: "they could not be sent this time"
};
export { nYe, w5s, cGt, k5s, gvt, Xpn, Djr, YNo, Ljr, XNo, f3n, JNo, Njr, QNo, cUe, cross as Fjr, v5s, Hjr, $jr, E5s, T5s, C5s, R5s, A5s, ZNo, x5s, p3n, P5s, O5s, I5s, M5s, D5s };