// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { l, B } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { b, fa, J, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Se } from "B:/~BUN/root/chunk-4p6z9qq1.js";
import { I } from "B:/~BUN/root/chunk-y04k89s2.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { Qt } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { Ae } from "B:/~BUN/root/chunk-5w2ecytn.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { mOe, Meo } from "B:/~BUN/root/chunk-jp5cq9tj.js";
import { w_e } from "B:/~BUN/root/chunk-y72v2pst.js";
import { po } from "B:/~BUN/root/chunk-rwwxddqq.js";
import { G, xne, _6n, a8e, qR, Jb, $I } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { Ui, fs, _b } from "B:/~BUN/root/chunk-290k5gh5.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { he } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { no } from "B:/~BUN/root/chunk-ewvnv67m.js";
import { GF } from "B:/~BUN/root/chunk-gbtzpa3e.js";
import { RI } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { uqe, id, Gie, WW, pw } from "B:/~BUN/root/chunk-3jyp964r.js";
import { U3, V4e, Ep } from "B:/~BUN/root/chunk-384x2wn9.js";
import { hF, XA, JA, Di } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { Rn } from "B:/~BUN/root/chunk-d36ctpgs.js";
import { VXr } from "B:/~BUN/root/chunk-6q0mnrxy.js";
import { jre, pyt } from "B:/~BUN/root/chunk-n67wqpnd.js";
import { Z } from "B:/~BUN/root/chunk-08bth2fj.js";
import { Dee, vu } from "B:/~BUN/root/chunk-xmtkv29j.js";
import { Wd, zd, Ad, xd } from "B:/~BUN/root/chunk-gsxez0fk.js";
import { o, E, C, u, z, A } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { U, L } from "B:/~BUN/root/chunk-z1enakv9.js";
import { hostname } from "os";
import { dirname as mn, join as _n } from "path";
var yn = f(() => u({
    version: A(1),
    choice: z(["accepted", "declined"]),
    decidedAt: o(),
    hostname: o()
  })),
  Le = "cloud-plugins-consent";
function xe() {
  return Ae.state(Le);
}
function Ebe() {
  return _n(Se(), "state", `${Le}.json`);
}
async function Ne(e) {
  let n;
  try {
    n = await e.readText();
  } catch (error) {
    return t(`cloud-plugins consent: store unreadable (${l(error)})`, {
      level: "warn"
    }), "unreadable";
  }
  if (n === void 0) return "unset";
  try {
    let r = yn().safeParse(J(n));
    return r.success && r.data.hostname === e.hostname() ? r.data.choice : "unset";
  } catch {
    return "unset";
  }
}
async function wn(e) {
  let n = await Ne(e);
  return n === "unreadable" ? "unset" : n;
}
function kn(e, n) {
  return n === "declined" || n === "unset" && e ? "declined" : "accepted";
}
async function P5r(choice, n) {
  try {
    return await n.writeText(b({
      version: 1,
      choice: choice,
      decidedAt: n.now().toISOString(),
      hostname: n.hostname()
    }, null, 2) + `
`), !0;
  } catch (error) {
    return t(`cloud-plugins consent: answer not saved (${l(error)})`, {
      level: "warn"
    }), !1;
  }
}
function bJe(e) {
  return {
    readText: async () => {
      if (e) {
        let n = await e.readText([xe()]);
        if (!n.ok) throw Error("cloud-plugins consent read failed");
        let r = n.value.items[0];
        return r.found ? r.value : void 0;
      }
      try {
        return await Qt().read(Ebe());
      } catch (error) {
        if (B(error)) return;
        throw error;
      }
    },
    writeText: async n => {
      if (e) {
        if (!(await e.write(xe(), n, {
          mode: 384
        })).ok) throw Error("cloud-plugins consent write failed");
        return;
      }
      let r = Ebe();
      await Qt().mkdir(mn(r), 448), await Qt().atomicWrite(r, n, 384);
    },
    now: () => new Date(),
    hostname: hostname
  };
}
function I5r() {
  return {
    value: null,
    persisted: !1,
    given: !1
  };
}
async function K1e(e, n, r) {
  let {
    answer: answer,
    given: given
  } = await Sn(e, n);
  if (answer !== "accepted" || given || r === void 0 || !(await r.storeUntrusted().catch(() => !0))) return answer;
  return Pn(r.onUntrusted), "unset";
}
async function Sn(e, n) {
  let r = !1;
  if (e.value === null) r = !0, e.value = wn(n).then(Y => (e.persisted = Y !== "unset", Y)), e.given = !1;
  let {
      value: value,
      given: given_2
    } = e,
    answer_2 = await value;
  if (answer_2 !== "accepted" || r) return {
    answer: answer_2,
    given: given_2
  };
  let F = await Ne(n),
    {
      value: value_2,
      given: given_3
    } = e;
  if (value_2 !== null && value_2 !== value) return {
    answer: await value_2,
    given: given_3
  };
  if (F === "accepted") e.persisted = !0;
  let answer_3 = kn(e.persisted, F);
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
    t(`cloud-plugins consent: callback failed (${l(error)})`, {
      level: "warn"
    });
  }
}
var Ue = ["userSettings", "projectSettings", "localSettings", "flagSettings"],
  bn = new Set(["userSettings", "flagSettings"]),
  Cn = Ui.toReversed(),
  vn = 200,
  En = 32,
  ve = 2000,
  An = 256,
  Tn = 1024,
  Fn = 140,
  On = 128,
  Dn = 256,
  xn = 16,
  Ln = 128,
  Nn = 262144,
  Mn = new Set([vu, "claude-code-marketplace"]),
  In = new Set(["https:", "ssh:", "git+ssh:", "git+https:"]),
  Me = new Set(["http:", "git:", "git+http:"]),
  $n = new Set(["ssh:", "git+ssh:"]),
  Un = new Set(["https:"]),
  Wn = /^[\x21-\x7e]+$/,
  jn = /^[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\/[A-Za-z0-9._-]+$/,
  Kn = /^(?:([A-Za-z0-9][A-Za-z0-9._-]*)@)?(\[[0-9A-Fa-f:.]+\]|[A-Za-z0-9][A-Za-z0-9._-]*):(.*)$/,
  Bn = /^[A-Za-z0-9][A-Za-z0-9+.-]*::/,
  Hn = /^[A-Za-z0-9._/@+][A-Za-z0-9._/@+-]*$/,
  Gn = /^[A-Za-z0-9._/@+][A-Za-z0-9._/@+ -]*$/,
  We = /(?:^|[/:])\.\.(?:$|[/?#;])/,
  je = /%2e|%2f|%5c|%3b|%3f|%23|\\/i,
  zn = /^[^:]*:\/\/[^/?#]*%/,
  Yn = ["invalid_id", "invalid_value", "directory_loaded", "unknown_builtin", "ambiguous_marketplace", "blocked_by_policy", "not_installed_here", "unknown_marketplace", "untrusted_for_folder", "reserved_name_conflict", "not_provided_by_container", "local_marketplace", "needs_credentials", "insecure_transport", "invalid_marketplace", "over_cap", "guard_builtin_not_own_choice"];
function uyt(e) {
  let dropped = gt(),
    dropped_2 = [],
    s = new Map(),
    a = [],
    w = et(e),
    F = {
      byPolicy: Ie(e.policyRefusedMarketplaces),
      asReserved: Ie(e.reservedNameConflicts)
    };
  for (let [id_2, P] of [...qn(e, dropped)].sort(([V], [q]) => we(V, q))) {
    let marketplace = xd(id_2) ?? "",
      q = s.get(marketplace) ?? nt(marketplace, e, F);
    s.set(marketplace, q);
    let reason = Qn(id_2, P, marketplace, q, w, e);
    if (reason !== void 0) {
      if (dropped[reason]++, reason !== "directory_loaded") dropped_2.push({
        id: id_2,
        reason: reason
      });
      continue;
    }
    a.push({
      id: id_2,
      value: P.value === !0,
      ownMention: P.ownMention,
      marketplace: marketplace,
      declaration: q.kind === "declare" && P.value === !0 ? q.source : void 0
    });
  }
  let S = ft(ct(a, dropped, dropped_2), dropped, dropped_2),
    patch = {
      enabledPlugins: Object.fromEntries(S.map(({
        id: id_3,
        value: value_3
      }) => [id_3, value_3])),
      extraKnownMarketplaces: Object.fromEntries(S.flatMap(({
        marketplace: marketplace_2,
        declaration: P
      }) => P === void 0 ? [] : [[marketplace_2, {
        source: P
      }]]).sort(([O], [P]) => we(O, P)))
    },
    counts = {
      forwarded: S.length,
      forwardedDisabled: U(S, ({
        value: value_4
      }) => !value_4),
      marketplacesDeclared: Object.keys(patch.extraKnownMarketplaces).length,
      dropped: dropped
    };
  dropped_2.sort((itemA, itemB) => we(itemA.id, itemB.id));
  let refusedWhole = Xn(e) ? "over_read_cap" : !Jb().safeParse(patch).success ? "schema_rejected" : Buffer.byteLength(Vn(patch), "utf8") > Nn ? "too_large" : void 0;
  if (refusedWhole !== void 0) return {
    patch: {
      enabledPlugins: {},
      extraKnownMarketplaces: {}
    },
    dropped: [...dropped_2, ...S.map(({
      id: id_4
    }) => ({
      id: id_4,
      reason: "over_cap"
    }))].sort((itemA, itemB) => we(itemA.id, itemB.id)),
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
function Vn(e) {
  return b($I(e));
}
function Ke(e) {
  return {
    forwarded: e.forwarded,
    forwarded_disabled: e.forwardedDisabled,
    marketplaces_declared: e.marketplacesDeclared,
    ...Object.fromEntries(Yn.map(item => [`dropped_${item}`, e.dropped[item]]))
  };
}
function Zn(e, n) {
  if (!G(n)) return {
    kind: "drop",
    reason: "invalid_marketplace"
  };
  switch (ee(n, "source")) {
    case "github":
      return rt(e, n);
    case "git":
      return st(e, n);
    case "url":
      return it(e, n);
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
function qn(e, n) {
  let r = new Map(),
    s = new Set();
  for (let a of Ue) {
    let w = e.enabledPluginsByTier[a];
    if (!G(w)) continue;
    let F = bn.has(a) || a === "localSettings" && e.localSettingsAreOwnChoice,
      S = Object.keys(w);
    n.over_cap += Math.max(0, S.length - ve);
    for (let g of S.slice(0, ve)) {
      let value_5 = w[g];
      if (value_5 === void 0) continue;
      if (!GF.includes(a) && e.trustedOnlyBuiltinIds.has(g.toLowerCase())) {
        n.guard_builtin_not_own_choice++;
        continue;
      }
      if (!Jn(g)) {
        s.add(g);
        continue;
      }
      let Y = r.get(g);
      r.set(g, {
        value: value_5,
        ownChoice: (Y?.ownChoice ?? !1) || F && value_5 === !0,
        ownMention: (Y?.ownMention ?? !1) || F && typeof value_5 === "boolean"
      });
    }
  }
  return n.invalid_id += s.size, r;
}
function Xn(e) {
  return Ue.some(item => {
    let r = e.enabledPluginsByTier[item];
    return G(r) && Object.keys(r).length > ve;
  });
}
function Jn(e) {
  return e.length <= An && qR().safeParse(e).success;
}
function Qn(e, n, r, s, a, {
  installedPluginIds: installedPluginIds,
  builtinPluginIds: builtinPluginIds,
  directoryPluginsAllowedByPolicy: directoryPluginsAllowedByPolicy
}) {
  let g = r.toLowerCase();
  if (g === Wd) return "directory_loaded";
  if (typeof n.value !== "boolean") return "invalid_value";
  if (g === zd && !directoryPluginsAllowedByPolicy) return "blocked_by_policy";
  if (g === Ad && !builtinPluginIds.has(e)) return "unknown_builtin";
  if (n.value && a.has(e.toLowerCase())) return "blocked_by_policy";
  if (s.kind === "drop" && n.value) return s.reason;
  if (n.value && !n.ownChoice && !installedPluginIds.has(e) && g !== Ad && g !== zd) return "not_installed_here";
  return;
}
function et({
  enabledPluginsByTier: enabledPluginsByTier
}) {
  let policySettings = enabledPluginsByTier.policySettings;
  return new Set(G(policySettings) ? Object.keys(policySettings).filter(item => policySettings[item] === !1).map(item => item.toLowerCase()) : []);
}
function Ie(e) {
  return new Set([...e].map(item => item.toLowerCase()));
}
function nt(e, n, r) {
  let s = e.toLowerCase();
  if (s === Ad || s === zd) return {
    kind: "reserved"
  };
  if (r.byPolicy.has(s)) return {
    kind: "drop",
    reason: "blocked_by_policy"
  };
  let a = tt(e, n),
    w = xne.has(s);
  if (a === void 0 && n.marketplaceRestrictionPolicyActive && s !== vu) return {
    kind: "drop",
    reason: w ? "blocked_by_policy" : $e(e, n)
  };
  if (w) return r.asReserved.has(s) ? {
    kind: "drop",
    reason: "reserved_name_conflict"
  } : Mn.has(s) ? {
    kind: "reserved"
  } : {
    kind: "drop",
    reason: "not_provided_by_container"
  };
  if (_6n(e)) return {
    kind: "drop",
    reason: "reserved_name_conflict"
  };
  if (a === void 0) return {
    kind: "drop",
    reason: $e(e, n)
  };
  return Zn(e, a);
}
function $e(e, n) {
  return ot(e, n) ? "untrusted_for_folder" : "unknown_marketplace";
}
function tt(e, n) {
  let r = G(n.registeredMarketplaces) ? ee(n.registeredMarketplaces, e) : void 0;
  if (r !== void 0) return G(r) ? ee(r, "source") ?? null : null;
  for (let s of Cn) {
    if (_b.has(s) && !n.folderTrustedForProjectPlugins) continue;
    let a = Be(n, s, e);
    if (a !== void 0) return G(a) ? ee(a, "source") ?? null : null;
  }
  return;
}
function ot(e, n) {
  return !n.folderTrustedForProjectPlugins && [..._b].some(item => Be(n, item, e) !== void 0);
}
function Be(e, n, r) {
  let s = e.declaredMarketplacesByTier[n];
  return G(s) ? ee(s, r) : void 0;
}
function rt(e, n) {
  let repo = ee(n, "repo");
  if (typeof repo !== "string" || repo.length > Fn || !jn.test(repo) || repo.split("/").some(Ye)) return {
    kind: "drop",
    reason: "invalid_marketplace"
  };
  let s = Ge(n);
  return s === void 0 ? {
    kind: "drop",
    reason: "invalid_marketplace"
  } : Ee(e, {
    source: "github",
    repo: repo,
    ...s
  });
}
function st(e, n) {
  let r = ee(n, "url"),
    url = He(r);
  if (url === void 0) return {
    kind: "drop",
    reason: "invalid_marketplace"
  };
  let reason_2 = ut(url);
  if (reason_2 !== "network") return {
    kind: "drop",
    reason: reason_2
  };
  let w = Ge(n);
  return w === void 0 ? {
    kind: "drop",
    reason: "invalid_marketplace"
  } : Ee(e, {
    source: "git",
    url: url,
    ...w
  });
}
function it(e, n) {
  let url_2 = He(ee(n, "url"));
  if (url_2 === void 0) return {
    kind: "drop",
    reason: "invalid_marketplace"
  };
  let s = ee(n, "headers");
  if (ee(n, "headersHelper") !== void 0 || s !== void 0 && !(G(s) && Object.keys(s).length === 0)) return {
    kind: "drop",
    reason: "needs_credentials"
  };
  let reason_3 = Ve(url_2, Un);
  return reason_3 === "network" ? Ee(e, {
    source: "url",
    url: url_2
  }) : {
    kind: "drop",
    reason: reason_3
  };
}
function He(e) {
  return typeof e === "string" && e.length > 0 && e.length <= Tn && Wn.test(e) ? e : void 0;
}
function Ge(e) {
  let ref = ee(e, "ref"),
    path = ee(e, "path"),
    sparsePaths = ee(e, "sparsePaths"),
    skipLfs = ee(e, "skipLfs");
  if (ref !== void 0 && !at(ref) || path !== void 0 && !dt(path) || sparsePaths !== void 0 && !lt(sparsePaths) || skipLfs !== void 0 && typeof skipLfs !== "boolean") return;
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
function at(e) {
  return typeof e === "string" && e.length <= On && Hn.test(e) && !e.split("/").some(Ye);
}
function dt(e) {
  return typeof e === "string" && e.length <= Dn && ze(e);
}
function lt(e) {
  return Array.isArray(e) && e.length <= xn && e.every(item => typeof item === "string" && item.length <= Ln && ze(item));
}
function ze(e) {
  return Gn.test(e) && !e.startsWith("/") && !e.split("/").some(item => item === "..");
}
function Ye(e) {
  return e === "." || e === "..";
}
function Ee(e, source) {
  return Jb().shape.extraKnownMarketplaces.safeParse({
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
function ut(e) {
  if (e.startsWith("-") || Bn.test(e) || w_e(e)) return "invalid_marketplace";
  if (e.includes("://")) return Ve(e, In);
  if (/^[A-Za-z]:[\\/]/.test(e) || /^[./~]/.test(e)) return "local_marketplace";
  let n = Kn.exec(e);
  if (n === null) return "invalid_marketplace";
  let [,, r = "", s = ""] = n;
  if (s.length === 0 || /^[-:]/.test(s) || We.test(s) || je.test(s)) return "invalid_marketplace";
  if (/[?#]/.test(s)) return "needs_credentials";
  return Ze(r) ? "local_marketplace" : "network";
}
function Ve(e, n) {
  let r;
  try {
    r = new URL(e);
  } catch {
    return "invalid_marketplace";
  }
  if (r.protocol === "file:") return "local_marketplace";
  if (!(n.has(r.protocol) || Me.has(r.protocol)) || zn.test(e) || r.hostname === "" || /^\[?-/.test(r.hostname) || r.username.startsWith("-")) return "invalid_marketplace";
  if (r.password !== "" || r.username !== "" && !$n.has(r.protocol) || r.search !== "" || r.hash !== "" || e.includes("?") || e.includes("#")) return "needs_credentials";
  if (Ze(r.hostname)) return "local_marketplace";
  if (We.test(e) || je.test(e)) return "invalid_marketplace";
  return Me.has(r.protocol) ? "insecure_transport" : "network";
}
function Ze(e) {
  return Meo(e, "address") || mOe(e) || !/[.:]/.test(e.replace(/\.+$/, ""));
}
function ct(e, n, r) {
  let s = new Map();
  for (let {
    marketplace: marketplace_3,
    declaration: declaration
  } of e) if (declaration !== void 0) {
    let F = marketplace_3.toLowerCase(),
      S = s.get(F) ?? new Set();
    S.add(fa($I(declaration))), s.set(F, S);
  }
  return e.filter(({
    id: id_5,
    marketplace: marketplace_4,
    declaration: declaration_2
  }) => {
    if (declaration_2 === void 0 || (s.get(marketplace_4.toLowerCase())?.size ?? 0) <= 1) return !0;
    return n.ambiguous_marketplace++, r.push({
      id: id_5,
      reason: "ambiguous_marketplace"
    }), !1;
  });
}
function ft(e, n, r) {
  let s = new Set(pt(e).slice(0, En)),
    a = e.filter(({
      declaration: declaration_3,
      marketplace: marketplace_5
    }) => declaration_3 === void 0 || s.has(marketplace_5)),
    w = [...a.filter(({
      value: value_6,
      ownMention: ownMention
    }) => ownMention && !value_6), ...a.filter(({
      value: value_7,
      ownMention: ownMention_2
    }) => ownMention_2 && value_7), ...a.filter(({
      value: value_8,
      ownMention: ownMention_3
    }) => !ownMention_3 && value_8), ...a.filter(({
      value: value_9,
      ownMention: ownMention_4
    }) => !ownMention_4 && !value_9)].slice(0, vn).sort((itemA, itemB) => we(itemA.id, itemB.id)),
    F = new Set(w.map(({
      id: id_6
    }) => id_6));
  for (let {
    id: id_7
  } of e) if (!F.has(id_7)) n.over_cap++, r.push({
    id: id_7,
    reason: "over_cap"
  });
  return w;
}
function pt(e) {
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
function we(e, n) {
  return e < n ? -1 : e > n ? 1 : 0;
}
function gt() {
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
function ee(e, n) {
  return Object.hasOwn(e, n) ? e[n] : void 0;
}
async function QSn(e) {
  let n = fs().map(item => [item, he(item)]),
    [registeredMarketplaces, s] = await Promise.all([id(e), WW(e)]),
    folderTrustedForProjectPlugins = uqe(),
    w = n.filter(([g]) => folderTrustedForProjectPlugins || !_b.has(g)).flatMap(([, g]) => Object.entries(g?.extraKnownMarketplaces ?? {}).map(([T, {
      source: source_2
    }]) => [T, source_2])),
    F = [...w, ...Object.entries(registeredMarketplaces).map(([g, {
      source: source_3
    }]) => [g, source_3]), [vu, Dee]],
    S = n.find(([g]) => g === "localSettings")?.[1]?.enabledPlugins;
  return {
    enabledPluginsByTier: Object.fromEntries(n.map(([g, T]) => [g, T?.enabledPlugins])),
    declaredMarketplacesByTier: Object.fromEntries(n.map(([g, T]) => [g, T?.extraKnownMarketplaces])),
    registeredMarketplaces: registeredMarketplaces,
    folderTrustedForProjectPlugins: folderTrustedForProjectPlugins,
    localSettingsAreOwnChoice: !(G(S) && Object.keys(S).length > 0) || !RI({
      onIndeterminate: "tracked"
    }),
    directoryPluginsAllowedByPolicy: U3(),
    builtinPluginIds: new Set([...no().builtinPlugins.keys()].map(item => `${item}@${Ad}`)),
    trustedOnlyBuiltinIds: new Set([...no().builtinPlugins.keys()].map(item => `${item}@${Ad}`).filter(hF).map(item => item.toLowerCase())),
    installedPluginIds: new Set(Object.entries(s.plugins).filter(([, g]) => g.some(pw)).map(([g]) => g)),
    policyRefusedMarketplaces: new Set(F.filter(([, g]) => !Ep(g)).map(([g]) => g)),
    marketplaceRestrictionPolicyActive: V4e(),
    reservedNameConflicts: new Set([...Object.entries(registeredMarketplaces).filter(([g, T]) => Gie(g, T) !== null).map(([g]) => g), ...w.filter(([g, T]) => !Object.hasOwn(registeredMarketplaces, g) && a8e(g, T) !== null).map(([g]) => g)])
  };
}
function qe({
  admission: admission,
  readChoices: readChoices,
  transport: transport,
  clock: clock,
  bound: bound,
  onNotice: onNotice,
  onOutcome: onOutcome,
  onState: onState
}) {
  let g = bound === void 0 ? {} : {
      bound: bound
    },
    T = "idle",
    Y = null,
    O = h => {
      if (T = h, h !== "skipped") Y = null;
      ue(() => onState?.(h), be);
    },
    P = null,
    generation_3 = null,
    q = !1,
    x = null,
    ae = !1,
    W = null,
    H = null,
    me = !1;
  function ne(h, k) {
    if (k === "read_failed" || k === "internal_error" || k === "refused_whole") m("ccr_cloud_plugins_forward", k, g);
    Y = k, O("skipped"), i("tengu_cloud_plugins_skipped", {
      reason: c(k),
      ...g,
      reattach: h.reattach
    });
  }
  function de(h) {
    ue(() => onOutcome?.(h), be);
    let k = b(h.refusedByWorker === void 0 ? [h.forwarded, h.forwardedDisabled, h.loaded, h.notApplied, h.stayed] : ["refused", h.refusedByWorker, h.stayed]);
    if (k !== x || h.messageWentFirst && !ae) ue(() => {
      onNotice(h), x = k, ae = h.messageWentFirst;
    }, be);
  }
  function ce(h, k, R, j) {
    let K = W !== null;
    return {
      forwarded: k.forwarded,
      forwardedDisabled: k.forwardedDisabled,
      loaded: K ? null : R,
      stayed: k.stayed,
      notApplied: j || K,
      messageWentFirst: !K && !j && h.messageWentFirst,
      ...(W !== null && {
        refusedByWorker: W.reason
      })
    };
  }
  function re(h) {
    return ue(() => transport.post(h), yt);
  }
  function te(h, k, R, generation) {
    q = !0;
    let K = re({
        subtype: "apply_flag_settings",
        settings: {
          [jre]: k.patch
        }
      }),
      ie = () => Te(h, generation) === "current";
    return K.response.then(() => {
      if (ie()) W = null;
    }, ye => {
      let reason_4 = _t(ye);
      if (i("tengu_cloud_plugins_apply_unconfirmed", {
        at: c(R),
        ...g,
        standing: c(Te(h, generation)),
        ...(reason_4 !== null && {
          refused_by_worker: c(reason_4)
        })
      }), reason_4 !== null && ie()) W = {
        reason: reason_4,
        generation: generation
      }, de(ce(h, k, null, !0));
    }), K;
  }
  function _e(h, k) {
    let R = uyt(k);
    if (i("tengu_cloud_plugins_forwarded", {
      ...Ke(R.counts),
      refused_whole: R.refusedWhole !== void 0,
      ...g,
      reattach: h.reattach
    }), R.refusedWhole !== void 0) {
      de({
        forwarded: 0,
        forwardedDisabled: 0,
        loaded: null,
        stayed: R.dropped,
        notApplied: !0,
        messageWentFirst: !1
      }), ne(h, "refused_whole");
      return;
    }
    if (R.counts.forwarded === 0 && R.counts.marketplacesDeclared === 0 && !h.reattach && !h.workerKnownAtConnect && !q) {
      if (R.dropped.length > 0) de({
        forwarded: 0,
        forwardedDisabled: 0,
        loaded: null,
        stayed: R.dropped,
        notApplied: !1,
        messageWentFirst: !1
      });
      ne(h, "nothing_to_forward");
      return;
    }
    let j = {
      patch: R.patch,
      patchKey: b(R.patch),
      forwardedEnabledIds: new Set(Object.entries(R.patch.enabledPlugins).filter(([, K]) => K).map(([K]) => K.toLowerCase())),
      forwarded: R.counts.forwarded,
      forwardedDisabled: R.counts.forwardedDisabled,
      stayed: R.dropped
    };
    if (h.plan = j, O("waiting_for_worker"), h.generation !== null) h.earlyApply = "skipped", N(h, j, h.generation, "connect");else Fe(te(h, j, "connect", null)).then(K => {
      h.earlyApply = K;
    });
  }
  function N(h, k, generation_2, j) {
    if (h.handledGeneration !== null && generation_2 <= h.handledGeneration) return;
    let generation_changed = h.handledGeneration !== null;
    h.handledGeneration = generation_2, h.reloadTaken = !1, W = ht(generation_2, h, W), ae = !1;
    let ie = () => Te(h, generation_2),
      ye = X => {
        i("tengu_cloud_plugins_reload", {
          early_apply: c(h.earlyApply),
          generation_changed: generation_changed,
          install_frames_seen: h.installFrames,
          forwarded_enabled: k.forwardedEnabledIds.size,
          ...g,
          reattach: h.reattach,
          ...X
        });
      };
    O("posted");
    let oe = null,
      Pe = (X, y, M) => {
        let D = X === "accepted" && y === "accepted";
        if (ie() === "current") {
          if (h.reloadTaken = D, D && W === null) H = {
            generation: generation_2,
            patchKey: k.patchKey
          };
          let Q = X === "session_inactive" || y === "session_inactive";
          if (!D) {
            if (Q) p("ccr_cloud_plugins_forward", "session_inactive", {
              ...g
            });else m("ccr_cloud_plugins_forward", "posts_refused", {
              ...g
            });
            de(ce(h, k, null, !0));
          } else if (W !== null) p("ccr_cloud_plugins_forward", "refused_by_worker", {
            ...g
          });else _("ccr_cloud_plugins_forward", {
            ...g,
            message_went_first: h.messageWentFirst
          });
          O(D ? "settled" : "failed");
        }
        M.then(Q => {
          if (ye({
            apply_outcome: c(X),
            reload_outcome: c(y),
            standing: c(ie()),
            message_went_first: h.messageWentFirst,
            reload_rtt_ms: oe === null ? -1 : clock.now() - oe,
            answered: Q !== null,
            loaded_of_forwarded: Q?.loaded ?? -1,
            worker_error_count: Q?.workerErrors ?? -1
          }), ie() === "current" && (D || Q !== null)) {
            if (de(ce(h, k, Q?.loaded ?? null, !1)), h.messageWentFirst = !1, Q !== null) {
              if (h.reloadTaken = !0, W === null) H = {
                generation: generation_2,
                patchKey: k.patchKey
              };
              O("settled");
            }
          }
        });
      };
    Fe(te(h, k, j, generation_2)).then(X => {
      if (X !== "accepted" || ie() !== "current") {
        Pe(X, "not_posted", Promise.resolve(null));
        return;
      }
      oe = clock.now();
      let y = re({
          subtype: "reload_plugins"
        }),
        M = y.response.then(D => kt(k, D), () => null);
      Fe(y).then(D => {
        Pe(X, D, M);
      });
    });
  }
  function le(h) {
    return H !== null && h.generation === H.generation && (h.plan === null || h.plan.patchKey === H.patchKey);
  }
  function se(reattach) {
    let messageWentFirst = me && !(H !== null && generation_3 === H.generation);
    return me = !1, {
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
      if (P !== null) P.closed = !0;
      let k = se(reattach_2);
      P = k;
      let R = ue(admission, () => "internal_error");
      if (R !== "admitted") {
        ne(k, R);
        return;
      }
      O("reading"), Promise.resolve().then(readChoices).then(j => {
        if (!k.closed) ue(() => _e(k, j), () => ne(k, "internal_error"));
      }, () => {
        if (!k.closed) ne(k, "read_failed");
      });
    },
    workerUp(h) {
      if (generation_3 !== null && h < generation_3) return;
      if (generation_3 = h, P === null || P.generation !== null && h <= P.generation) return;
      P.generation = h;
      let k = P,
        plan = k.plan;
      if (plan !== null) ue(() => N(k, plan, h, "worker_up"), () => ne(k, "internal_error"));
    },
    pluginInstallFrame() {
      if (P !== null) P.installFrames++;
    },
    messageSent() {
      if (P === null) {
        me = !0;
        return;
      }
      if (!P.reloadTaken && T !== "skipped" && !le(P)) P.messageWentFirst = !0;
    },
    disconnected() {
      if (P !== null) P.closed = !0, P = null;
      O("idle");
    },
    state: () => T,
    skipped: () => T === "skipped" ? Y : null
  };
}
function Te(e, n) {
  return e.closed ? "disconnected" : e.handledGeneration === n ? "current" : "superseded";
}
function ht(generation_4, n, r) {
  if (r === null || r.generation === generation_4) return r;
  return r.generation === null && !n.workerKnownAtConnect ? {
    ...r,
    generation: generation_4
  } : null;
}
function ue(e, n) {
  try {
    return e();
  } catch (error) {
    return d(error), n(error);
  }
}
function be() {}
var mt = ["not_managed_cloud_worker", "entrypoint", "disabled", "hermetic", "not_admitted", "flag_off", "flag_unsettled", "malformed", "other"];
function _t(e) {
  let n = e instanceof Error ? e.message : typeof e === "string" ? e : "";
  if (n === pyt) return "other";
  let r = `${pyt}: `;
  if (!n.startsWith(r)) return null;
  let s = n.slice(r.length).trim();
  return mt.find(item => item === s) ?? "other";
}
function yt(e) {
  let response = Promise.reject(e);
  return response.catch(be), {
    posted: Promise.resolve("failed"),
    response: response
  };
}
function Fe(e) {
  return e.posted.catch(() => "failed");
}
var wt = f(() => u({
  plugins: C(u({
    source: o().optional()
  })),
  error_count: E().int()
}));
function kt(e, n) {
  let r = wt().safeParse(n);
  if (!r.success) return {
    loaded: null,
    workerErrors: -1
  };
  return {
    loaded: new Set(r.data.plugins.flatMap(({
      source: source_4
    }) => source_4 !== void 0 && e.forwardedEnabledIds.has(source_4.toLowerCase()) ? [source_4.toLowerCase()] : [])).size,
    workerErrors: r.data.error_count
  };
}
var U7n = 5000,
  Oe = 6;
function ZSn(e) {
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
function St(e) {
  return e === "skipped" || e === "failed";
}
function Pt(e) {
  return e === "reading" || e === "posted";
}
function bt(e) {
  return e === "read_failed" || e === "internal_error" ? e : void 0;
}
var B7n = {
  now: () => Date.now(),
  setTimeout(e, n) {
    let r = setTimeout(e, n);
    return () => clearTimeout(r);
  }
};
function W2t(e) {
  let {
      sessionId: sessionId,
      reattach: reattach_3,
      manager: manager,
      memory: memory
    } = e,
    w = y => {
      try {
        e.say(y);
      } catch (error) {
        d(error);
      }
    },
    F = e.readChoices ?? (() => QSn(e.storageV5)),
    clock_2 = e.clock ?? B7n,
    g = e.muted ?? XA,
    T = y => new Promise((M, D) => {
      let Q = clock_2.setTimeout(() => D(Error("a local read for plugin forwarding timed out")), U7n);
      Promise.resolve().then(y).then(M, D).finally(Q);
    }),
    Y = () => T(F),
    O = e.consentDeps ?? bJe(e.storageV5),
    P = e.distrust ?? j7n(e.reach),
    V = () => T(() => K1e(memory.consentPin, O, P)),
    abortController = new AbortController(),
    admission_2 = "no_consent",
    source_5,
    notice,
    H = () => {
      try {
        e.onChange?.();
      } catch (error) {
        d(error);
      }
    },
    me = y => {
      notice = y, Xe(y, w), H();
    },
    ne = !1,
    de = !1,
    ce = !1,
    re = g(),
    muted = !1,
    _e = !1,
    N = qe({
      admission: () => admission_2,
      readChoices: () => Y().then(y => (ne = !1, y), y => {
        throw ne = !0, y;
      }),
      transport: {
        post(y) {
          let {
            posted: posted,
            response: response_2
          } = manager.postControlRequest(y, {
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
      onNotice: y => {
        if (y.forwarded > y.forwardedDisabled && y.loaded !== 0 && !y.notApplied && y.refusedByWorker === void 0) de = !0;
        Xe(y, w);
      },
      onOutcome: y => {
        notice = y, H();
      },
      onState: () => H()
    }),
    settled = !1,
    se = null,
    h = () => {
      if (!_e) _e = !0, w({
        line: line,
        level: "notice"
      });
    },
    k = () => {
      if (muted) return;
      muted = !0, notice = void 0, N.disconnected(), h(), i("tengu_cloud_plugins_admission", {
        admission: c("flag_off"),
        source: c("muted"),
        reattach: reattach_3
      }), H();
    },
    R = () => {
      if (muted = !1, notice = void 0, w({
        line: line_2,
        level: "notice"
      }), N.connected({
        reattach: reattach_3
      }), K) N.messageSent();
      H();
    },
    j = y => {
      if (abortController.signal.aborted) return;
      if (memory.setAsideSessions.delete(sessionId), !settled) {
        se = y;
        return;
      }
      let M = y === "accepted" ? "admitted" : "opted_out";
      if (M === admission_2 && !ne) return;
      let D = "decided";
      if (admission_2 = M, source_5 = D, notice = void 0, H(), i("tengu_cloud_plugins_admission", {
        admission: c(M),
        source: c(D),
        reattach: reattach_3
      }), M === "admitted" && re) {
        k();
        return;
      }
      if (muted = !1, N.disconnected(), N.connected({
        reattach: reattach_3
      }), K) N.messageSent();
    },
    K = !1,
    ie = memory.decided.subscribe(y => {
      try {
        j(y);
      } catch (error) {
        d(error);
      }
    }),
    ye = (e.onMuteRecheck ?? JA)(() => {
      try {
        let y = g();
        if (abortController.signal.aborted || y === re) return;
        if (re = y, y) {
          if (admission_2 === "admitted" && settled && Pt(N.state())) {
            k();
            return;
          }
          H();
          return;
        }
        if (_e = !1, muted) {
          R();
          return;
        }
        H();
      } catch (error) {
        d(error);
      }
    }),
    oe = () => {
      if (admission_2 !== "admitted") return;
      K1e(memory.consentPin, O, P).then(y => {
        if (y !== "accepted") j("declined");
      }, () => {});
    };
  Pe().catch(y => (d(y), {
    admission: "no_consent",
    source: "internal_error",
    unsent: []
  })).then(y => {
    if (i("tengu_cloud_plugins_admission", {
      admission: c(y.admission),
      source: c(y.source),
      reattach: reattach_3
    }), abortController.signal.aborted) return;
    if (y.source === "read_failed" || y.source === "internal_error") {
      if (m("ccr_cloud_plugins_forward", y.source), source_5 = y.source, settled = !0, H(), se !== null) j(se);
      return;
    }
    if (admission_2 = y.admission, source_5 = y.source, settled = !0, admission_2 === "admitted" && re) k();else N.connected({
      reattach: reattach_3
    }), H();
    if (y.unsent.length > 0) me(Tt(y.unsent));
    if (se !== null) j(se);
  }).catch(y => {
    d(y);
  });
  async function Pe() {
    let y = await V().catch(() => null);
    if (y === null) return {
      admission: "no_consent",
      source: "read_failed",
      unsent: []
    };
    if (y !== "unset") return {
      admission: y === "accepted" ? "admitted" : "opted_out",
      source: "stored",
      unsent: []
    };
    let M = await Y().then(pn => pn, () => null);
    if (M === null) return {
      admission: "no_consent",
      source: "read_failed",
      unsent: []
    };
    let D = uyt(M);
    if (D.counts.forwarded === 0 && D.counts.marketplacesDeclared === 0) return {
      admission: "no_consent",
      source: "not_asked",
      unsent: D.dropped
    };
    if (abortController.signal.aborted) return {
      admission: "no_consent",
      source: "detached",
      unsent: []
    };
    let Q = P.withheld();
    if (Q !== null) {
      if (memory.setAsideSessions.add(sessionId), se === null) w({
        line: Et(Q),
        level: "warning"
      });
      return {
        admission: "no_consent",
        source: "untrusted_store",
        unsent: []
      };
    }
    if (!memory.pointedToCommand.shown && se === null) memory.pointedToCommand.shown = !0, w({
      line: At(D.counts.forwarded - D.counts.forwardedDisabled, D.counts.forwarded),
      level: "debug"
    });
    return {
      admission: "no_consent",
      source: "undecided",
      unsent: []
    };
  }
  let X = y => () => {
    try {
      y();
    } catch (error) {
      d(error);
    }
  };
  return {
    workerKnownUp: X(() => {
      if (admission_2 === "admitted" && re) k();
      N.workerUp(memory.generations.known(sessionId));
    }),
    workerCameUp: X(() => {
      if (admission_2 === "opted_out" && de && !ce) ce = !0, w({
        line: line_3,
        level: "notice"
      });
      oe();
      let y = memory.generations.next(sessionId);
      if (admission_2 === "admitted" && re) k();else if (admission_2 === "admitted" && settled && ne) {
        if (notice = void 0, N.disconnected(), N.connected({
          reattach: reattach_3
        }), K) N.messageSent();
      }
      N.workerUp(y);
    }),
    pluginInstallFrame: X(() => N.pluginInstallFrame()),
    messageSent: X(() => {
      K = !0, N.messageSent();
    }),
    teardown: X(() => {
      if (abortController.signal.aborted) return;
      memory.setAsideSessions.delete(sessionId), abortController.abort(), ye(), ie(), N.disconnected();
    }),
    state: () => ({
      settled: settled,
      admission: admission_2,
      source: source_5,
      notice: notice,
      muted: muted,
      answerPending: admission_2 === "admitted" && !muted && notice === void 0 && !St(N.state()),
      gaveUp: bt(N.skipped())
    })
  };
}
var line = "Remote tool serving was turned off by Anthropic (emergency switch). Your plugins are not sent from this computer while it is off; they are sent again once it is back on.",
  line_2 = "Remote tool serving was turned back on by Anthropic. Your plugins are sent to this cloud session again from this computer.",
  line_3 = "This cloud session restarted without your plugins: they are no longer sent from this machine, because the saved Yes was withdrawn (a No in /cloud-plugins, or the answer was removed). Run /cloud-plugins to change that.";
function j7n(e) {
  let n = null,
    r = null,
    s = null,
    a = () => n ??= Promise.resolve().then(() => e.judge()).catch(() => "unknown").then(w => (r = w, w));
  return {
    storeUntrusted: () => a().then(w => w !== "outside"),
    onUntrusted: () => {
      s = r === null || r === "outside" ? "unknown" : r;
    },
    withheld: () => s
  };
}
function Et(e) {
  let n = Rn(Ebe());
  return `The saved answer about your plugins is not used for this cloud session, because ${e === "in_launch_dir" ? `the session itself can change ${n} from the folder or repository it runs in` : e === "in_sync_root" ? `the session itself can change ${n} through the folder it syncs` : e === "in_other_root" ? `the session itself can change ${n} through a folder it may write on this machine (an added directory or a settings write grant)` : `it could not be checked that the session cannot change ${n}`}; run /cloud-plugins to decide for this session.`;
}
function At(e, n) {
  return `${e > 0 ? `Your ${e} enabled ${I(e, "plugin")} can be used in` : `Your ${n} plugin ${I(n, "choice")} can apply to`} your cloud sessions from this machine \u2014 run /cloud-plugins to decide (nothing is sent until you do).`;
}
function Tt(stayed) {
  return {
    forwarded: 0,
    forwardedDisabled: 0,
    loaded: null,
    stayed: stayed,
    notApplied: !1,
    messageWentFirst: !1
  };
}
function Xe(e, n) {
  Ft(e).forEach(n);
}
function Ft(e) {
  return [...Ot(e), ...Dt(e.stayed, e.forwarded === 0)];
}
function Ot(e) {
  if (e.forwarded === 0 && e.refusedByWorker === void 0 && !e.notApplied) return [];
  if (e.refusedByWorker !== void 0) return [{
    line: `This cloud session did not take your plugins: ${Lt[e.refusedByWorker]}. Your plugins on this machine are unchanged.`,
    level: "warning"
  }];
  if (e.notApplied) return [{
    line: "Your plugins may not have reached this cloud session: it did not accept the request. They will be sent again if the session restarts or you reconnect to it; /reload-plugins shows what is loaded there now.",
    level: "warning"
  }];
  let n = e.forwarded - e.forwardedDisabled,
    forwardedDisabled = e.forwardedDisabled,
    s = forwardedDisabled > 0 ? ` (${forwardedDisabled} you turned off here ${I(forwardedDisabled, "stays", "stay")} off there)` : "";
  if (n === 0) return [{
    line: `The ${forwardedDisabled} ${I(forwardedDisabled, "plugin")} you turned off here ${I(forwardedDisabled, "is", "are")} off in this cloud session too.`,
    level: "debug"
  }];
  let a = e.loaded !== null && e.loaded >= n,
    w = I(n, "it", "them"),
    F = e.loaded === null ? `Sent your ${n} enabled ${I(n, "plugin")} to this cloud session${s}; it has not confirmed ${w} \u2014 /reload-plugins shows what loaded.` : e.loaded >= n ? `Using your ${n} ${I(n, "plugin")} in this cloud session${s}.` : e.loaded === 0 ? `${n === 1 ? "Your enabled plugin could not" : `None of your ${n} enabled plugins could`} be installed in this cloud session yet${s} \u2014 the session is still fetching ${n === 1 ? "it" : "them"} or cannot reach ${n === 1 ? "its" : "their"} marketplace; /reload-plugins shows what loaded.` : `Using ${e.loaded} of your ${n} plugins in this cloud session${s}; the other ${n - e.loaded} could not be installed there yet \u2014 the session is still fetching ${n - e.loaded === 1 ? "it" : "them"} or cannot reach ${n - e.loaded === 1 ? "its" : "their"} marketplace; /reload-plugins shows what loaded.`,
    S = !e.messageWentFirst ? "" : e.loaded === null ? ` If ${I(n, "it", "they")} loaded, ${I(n, "it applies", "they apply")} from your next prompt; the one already sent may have run without ${w}.` : ` ${I(n, "It applies", "They apply")} from your next prompt; the one already sent may have run without ${w}.`;
  return [{
    line: `${F}${S}`,
    level: a && !e.messageWentFirst ? "debug" : "notice"
  }];
}
function Dt(e, n) {
  if (e.length === 0) return [];
  let r = e.slice(0, Oe).map(({
      id: id_8,
      reason: reason_5
    }) => `${po(id_8, {
      maxCodeUnits: 80
    })} (${xt[reason_5]})`).join("; "),
    s = e.length > Oe ? `; and ${e.length - Oe} more` : "";
  return [{
    line: `${n ? `Not using your plugins in this cloud session; ${e.length} ${I(e.length, "stays", "stay")} on this machine` : `${e.length} of your plugin choices ${I(e.length, "stays", "stay")} on this machine`}: ${r}${s}.`,
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
  Lt = {
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
var Je = {
  files: "some files were skipped there",
  settings: "your settings file was not applied there",
  part: "part of it was not applied there"
};
var ewn = "Synced from this computer:",
  W7n = {
    files: "A message is waiting for your files to finish syncing \xB7 esc to take it back",
    settings: "A message is waiting for your settings to upload \xB7 esc to take it back"
  },
  gue = {
    projectFiles: "Project files",
    settings: "Settings",
    plugins: "Plugins",
    localTools: "Local tools"
  },
  tn = ["projectFiles", "settings", "plugins"],
  tick = Z.tick,
  cross = Z.cross,
  Mt = "\u2026",
  pe = {
    mark: "synced"
  },
  ge = {
    mark: "pending"
  };
function v(words) {
  return {
    mark: "not_synced",
    words: words
  };
}
function It(e) {
  switch (e.mark) {
    case "synced":
      return tick;
    case "pending":
      return Mt;
    case "not_synced":
      return cross;
  }
}
function Ce(e, n) {
  let r = `${It(n)} ${e}`;
  switch (n.mark) {
    case "synced":
      return n.note === void 0 ? r : `${r} (${n.note})`;
    case "pending":
      return r;
    case "not_synced":
      return `${r} \u2014 ${n.words}`;
  }
}
function $t(e) {
  return [ewn, ...tn.map(item => Ce(gue[item], e[item])), ...(e.localTools === void 0 ? [] : [Ce(gue.localTools, e.localTools)])];
}
function O5r(e) {
  let [n, ...r] = $t(e),
    s = `${n} ${r.join(" \xB7 ")}`,
    a = nwn(e),
    w = a === void 0 ? s : `${s}. ${a}`,
    F = rwn(e);
  if (F === void 0) return w;
  return a === void 0 ? `${w}. ${F}.` : `${w} ${F}.`;
}
function nwn(e) {
  return e.whileClosed === void 0 ? void 0 : Di[`while_closed.${e.whileClosed}`];
}
function rwn(e) {
  if (e.repositoryTrust === void 0) return;
  return e.repositoryTrust === "no_repository" && e.projectFiles.mark === "synced" ? Di["repository_trust.state.no_repository.files_synced"] : VXr(e.repositoryTrust);
}
function M5r(e, n) {
  return e.whileClosed === n.whileClosed && e.repositoryTrust === n.repositoryTrust && Ut(e.localTools, n.localTools) && tn.every(item => on(e[item], n[item]));
}
function D5r(e, n) {
  if (n !== void 0 && e?.on !== !0) return v(n);
  if (e === void 0) return;
  return e.on ? {
    mark: "synced",
    note: `served by this machine (${e.name})`
  } : v("not serving this session");
}
function Ut(e, n) {
  return e === void 0 || n === void 0 ? e === n : on(e, n);
}
function on(e, n) {
  return Ce("", e) === Ce("", n);
}
function L5r(e, n) {
  switch (e.state) {
    case "seeding":
      return ge;
    case "armed":
      return sn({
        muted: e.muted,
        otherWindow: e.writerElsewhere,
        firstUploadPending: e.firstUpload === "pending",
        syncedFiles: e.syncedFiles,
        uploadOnly: e.direction === "upload_only"
      });
    case "absent":
    case "off":
    case "stopped":
      return v(an(e.state, e.reason, n));
  }
}
function z7n(e, n) {
  switch (e.state) {
    case "armed":
      if (e.firstUpload === "pending" || e.direction === "pending") return;
      return e.direction;
    case "seeding":
      return;
    case "absent":
    case "off":
    case "stopped":
      return n.serves === !0 && rn.some(item => item === e.reason) ? "through_this_computer" : void 0;
  }
}
var rn = ["refused", "too_large", "lane_full", "start_failed", "withdrawn", "switched_off", "lane_unavailable", "anchor_unavailable"];
function N5r(e) {
  let directory_sync = e.directory_sync;
  if (directory_sync.state === "armed") return directory_sync.direction === void 0;
  return directory_sync.state === "stopped" && rn.some(item => item === directory_sync.reason) && e.device.status === "bound" && e.serving?.state === "pending";
}
function z2t(e) {
  return {
    fromUpload: e?.kind === "bundle"
  };
}
var Wt = ["arm_failed", "internal_error", "seed_incomplete", "engine_unavailable", "layout_unserved"];
function sn(e) {
  if (e.muted) return v(muted_2);
  if (e.otherWindow) return v("another window here is already syncing them");
  if (e.firstUploadPending) return ge;
  if (e.syncedFiles === 0) return v("none of this folder's files are in the session");
  let n = [...(e.syncedFiles === null ? [] : [`${e.syncedFiles} ${I(e.syncedFiles, "file")}`]), ...(e.uploadOnly ? ["upload only"] : [])];
  return n.length === 0 ? pe : {
    mark: "synced",
    note: n.join(", ")
  };
}
var not_set_up = "not set up for this session",
  Re = {
    not_opted_in: "this folder is not set to sync",
    not_from_here: "this session was not started from this folder",
    not_set_up: not_set_up,
    preflight_failed: `${not_set_up}: Claude's access to this repository on GitHub could not be confirmed when the session was created (check the GitHub integration at https://claude.ai/code, then start a new session)`,
    no_container_origin: `${not_set_up}: this computer could not establish what the cloud session's copy of this project started from, so there was nothing to sync against`,
    internal_error: "sync could not be set up",
    arm_failed: "sync could not be set up",
    shut_down: "sync has ended for this session",
    not_armed: "this session did not start from this folder's files",
    seed_incomplete: "the first upload did not complete",
    withdrawn: "this folder is no longer set to sync",
    switched_off: "sync is switched off on this machine",
    engine_declined: "sync is switched off on this machine",
    created_empty_unfilled: "this session was created empty and never received them; start a new cloud session from this folder",
    engine_unsupported: "sync is not available for this session",
    engine_unavailable: "sync is not available for this session",
    layout_unserved: "sync is not available for this session",
    lane_unavailable: "sync is not available for this session",
    compliance_restricted: "your organization's compliance policy does not allow file sync; the cloud session keeps whatever files it has",
    other_writer: "another window or computer is already syncing them",
    unauthorized: "this machine is not signed in for it",
    peer_silent: "the cloud session never answered",
    store_unreadable: "this machine's record of the session was lost",
    store_removed: "this machine's record of the session was lost",
    store_unwritable: "this machine's record of the session was lost",
    writer_lock_lost: "this window lost its hold on the session",
    gave_up: "your changes could not reach the cloud session after repeated tries; sync gave up in this window \u2014 re-open the session to sync again",
    refused: "this folder holds something sync cannot carry; Claude works on this machine directly",
    too_large: "the changes here are too large to sync; Claude works on this machine directly",
    lane_full: "this session's file store is full; Claude works on this machine directly",
    start_failed: "the cloud session could not start from this machine's files; Claude works on this machine directly",
    detached: "sync with this session stopped; its checkout and this folder are separate copies now",
    ended_earlier: "sync ended earlier in this session; Claude works on this machine directly",
    offline: "this folder's changes could not be synced to the cloud; Claude works on this machine directly",
    anchor_unavailable: "this machine cannot place files safely here; Claude works on this machine directly"
  },
  Qe = {
    ...Re,
    seeded_elsewhere: Re.not_from_here,
    not_seeded: Re.not_set_up,
    lookup_failed: Re.internal_error
  };
function an(e, n, r) {
  if (r.fromUpload && Wt.some(item => item === n)) return "uploaded once at start; later changes won't sync";
  return (n !== void 0 && Object.hasOwn(Qe, n) ? Qe[n] : void 0) ?? (e === "stopped" ? "sync stopped for this session" : "sync is off for this session");
}
function H5r(e) {
  if (e.kind === "absent") return v(fe[e.reason]);
  let {
    outcome: outcome_2,
    readBack: readBack
  } = e;
  if (outcome_2 === void 0) return ge;
  if (outcome_2.kind === "none") return v(jt(outcome_2.reason));
  let s = outcome_2.settingsRefused === void 0 ? void 0 : v(dn[outcome_2.settingsRefused]);
  switch (outcome_2.outcome) {
    case "sent":
    case "unchanged":
    case "conflict_resolved":
      return s ?? (readBack === void 0 ? pe : en(readBack));
    case "deadline":
      return s ?? (readBack === void 0 ? v("the upload took too long") : en(readBack));
    case "raced":
      return v("another launch of this session sent its settings first");
    case "not_forwarded_at_create":
    case "no_standing_pack":
      return v("this session was started without them");
    case "lane_full":
      return v("the session holds as many synced files as it may");
    case "unavailable":
      return v("not available for this session");
    case "unauthorized":
      return v("this machine is not signed in for it");
    case "failed":
      return v("the upload failed");
    case "aborted":
      return v("the upload was cancelled");
  }
}
function en(e) {
  switch (e.verdict) {
    case "applied_before_first_ask":
    case "applied_late":
      return e.left === null ? pe : v(Je[e.left]);
    case "behind":
      return pe;
    case "not_applied":
      return v("the cloud session could not apply them");
    case "stale":
      return v("the cloud session holds a different copy");
    case "not_seen":
      return v("the cloud session has not confirmed them");
    case "unreadable":
      return v("the cloud session's answer could not be read");
  }
}
var dn = {
    schema_rejected: "your settings file has errors",
    settings_too_large: "your settings file is too large",
    settings_unreadable: "your settings file could not be read"
  },
  muted_2 = "turned off by Anthropic for now (emergency switch)",
  fe = {
    not_enabled: "not enabled for this account",
    kept_on_this_machine: "you chose not to send them",
    not_decided: "not decided on this machine yet (/config, for new sessions)",
    launch_keeps_them: "this launch keeps them on this machine",
    not_sent: "not sent with this session"
  };
function jt(e) {
  switch (e) {
    case "flag_off":
      return fe.not_enabled;
    case "no_consent":
      return "kept on this machine (see /config)";
    case "user_settings_disabled":
      return "this launch does not load your user settings";
    case "muted":
      return muted_2;
    case "unbound":
      return "this session is not bound to this machine";
    case "aborted":
      return "the upload was cancelled";
    case "failed":
      return "preparing them failed";
    case "too_slow":
      return "preparing them took too long";
    case "home_unvettable":
      return "your settings folder could not be fully examined";
    case "nothing_to_send":
      return "nothing to send from this machine";
    case "rules_unreadable":
      return "a settings file here has errors";
  }
}
function F5r(e, reason_6, readBack_2) {
  return e === void 0 ? {
    kind: "absent",
    reason: reason_6
  } : {
    kind: "seed",
    outcome: e.outcome(),
    readBack: readBack_2
  };
}
var ln = {
  not_enabled: "not enabled for this account",
  switched_off: "switched off on this machine",
  attach_failed: "could not be sent from this machine"
};
function $5r(e) {
  if (e.kind === "pending") return ge;
  if (e.kind === "absent") return v(ln[e.reason]);
  let {
    state: state
  } = e;
  if (state.muted) return v(muted_2);
  if (!state.settled || state.answerPending) return ge;
  switch (state.admission) {
    case "flag_off":
      return v("not enabled for this account");
    case "opted_out":
      return v("you chose not to send them");
    case "no_consent":
      return v(un(state.source));
    case "admitted":
      return Kt(state);
  }
}
function un(e) {
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
function Kt(e) {
  let n = ZSn(e.notice);
  if (n !== void 0) return v(cn[n]);
  return e.notice === void 0 && e.gaveUp !== void 0 ? v(un(e.gaveUp)) : pe;
}
var cn = {
  refused_by_worker: "this cloud session does not take plugins",
  not_applied: "the cloud session did not accept them",
  none_to_send: "no plugins to send from this machine",
  not_confirmed: "sent, not confirmed by the session",
  not_installed: "they could not be installed there",
  some_not_installed: "some could not be installed there"
};
function U5r(e) {
  let directory_sync_2 = e.directory_sync;
  return {
    projectFiles: directory_sync_2.state === "seeding" ? ge : directory_sync_2.state === "armed" ? sn({
      muted: directory_sync_2.muted === !0,
      otherWindow: directory_sync_2.other_window === !0,
      firstUploadPending: directory_sync_2.first_upload !== void 0 && directory_sync_2.first_upload !== "landed",
      syncedFiles: directory_sync_2.synced_files ?? null,
      uploadOnly: directory_sync_2.direction === "upload_only"
    }) : v(an(directory_sync_2.state, directory_sync_2.reason, {
      fromUpload: directory_sync_2.started_from_upload === !0
    })),
    settings: nn(e.settings),
    plugins: nn(e.plugins),
    ...Ht(directory_sync_2, Bt(e)),
    ...(e.repository_trust !== void 0 && {
      repositoryTrust: e.repository_trust
    })
  };
}
function Bt(e) {
  if (e.serving === void 0) return;
  return e.device.status === "bound" && e.serving.state === "on";
}
function Ht(e, serves) {
  let whileClosed = z7n(e.state === "armed" ? {
    state: "armed",
    direction: e.direction ?? "pending",
    firstUpload: e.first_upload === void 0 ? null : e.first_upload === "landed" ? "landed" : "pending"
  } : {
    state: e.state,
    reason: e.reason
  }, {
    serves: serves
  });
  return whileClosed === void 0 ? {} : {
    whileClosed: whileClosed
  };
}
function nn(e) {
  if (e === void 0) return v("not enabled for this launch");
  if (e.state === "forwarded") return pe;
  return v(e.reason !== void 0 && Gt(e.reason) ? fn[e.reason] : "not sent from this machine");
}
function Gt(e) {
  return Object.hasOwn(fn, e);
}
var fn = {
  flag_off: fe.not_enabled,
  launch_flag: fe.launch_keeps_them,
  declined: fe.kept_on_this_machine,
  no_consent: "not decided yet on this machine",
  unbound: "this session is not bound to this machine",
  switched_off: ln.switched_off,
  bound_elsewhere: "this machine could not show that this session is bound to it",
  binding_unknown: "could not check this session's binding",
  not_seeded: fe.not_sent,
  nothing_to_forward: "nothing to send from this machine",
  nothing_to_send: "nothing to send from this machine",
  rules_unreadable: "a settings file here has errors",
  plan_failed: "preparing them failed",
  user_settings_disabled: "this launch does not load your user settings",
  muted: muted_2,
  too_slow: "preparing them took too long",
  home_unvettable: "your settings folder could not be fully examined",
  aborted: "the upload was cancelled",
  deadline: "the upload took too long",
  raced: "another launch of this session sent its settings first",
  not_forwarded_at_create: "this session was started without them",
  no_standing_pack: "this session was started without them",
  lane_full: "the session holds as many synced files as it may",
  unavailable: "not available for this session",
  unauthorized: "this machine is not signed in for it",
  failed: "the upload failed",
  ...dn,
  ...cn,
  unreadable: "your plugin choices here could not be read",
  could_not_send: "they could not be sent this time"
};
export { Ebe, P5r, bJe, I5r, K1e, uyt, QSn, U7n, ZSn, B7n, W2t, j7n, ewn, W7n, gue, cross as twn, O5r, nwn, rwn, M5r, D5r, L5r, z7n, N5r, z2t, H5r, F5r, $5r, U5r };