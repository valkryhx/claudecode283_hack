// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  O
} from "B:/~BUN/root/chunk-nggrknsv.js";
import {
  _,
  Bi,
  J,
  ti,
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  c
} from "B:/~BUN/root/chunk-jthpk6wv.js";
import {
  d,
  G
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  F,
  L
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  i
} from "B:/~BUN/root/chunk-1kfn24jp.js";
import {
  g,
  m,
  p
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  Pe
} from "B:/~BUN/root/chunk-fbyz9h0p.js";
import {
  f
} from "B:/~BUN/root/chunk-frrkt2bs.js";
import {
  ZO,
  BJ,
  _ze,
  x_t,
  JD,
  che,
  xw,
  Tc,
  $u,
  oi,
  Pw,
  Kx,
  Oi
} from "B:/~BUN/root/chunk-8ye9n4fk.js";
import {
  UM
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  F4
} from "B:/~BUN/root/chunk-fsp20me0.js";
import {
  gn
} from "B:/~BUN/root/chunk-pjgzz98k.js";
import {
  Be
} from "B:/~BUN/root/chunk-d9rmnpx3.js";
import {
  xs,
  Wo,
  ef
} from "B:/~BUN/root/chunk-6a9s3k2y.js";
import {
  me
} from "B:/~BUN/root/chunk-1gpjpba6.js";
import {
  Gn
} from "B:/~BUN/root/chunk-c44qc88s.js";
import {
  Kee,
  GOe,
  zc
} from "B:/~BUN/root/chunk-472kxa0t.js";
import {
  lfe,
  oee,
  fxs
} from "B:/~BUN/root/chunk-dn8rakwm.js";
import {
  oue,
  Uas
} from "B:/~BUN/root/chunk-rsyvg95p.js";
import {
  hr
} from "B:/~BUN/root/chunk-7gwemd3j.js";
import {
  sct
} from "B:/~BUN/root/chunk-qegjq8ky.js";
import {
  Flt,
  nd,
  Epe,
  Aq,
  Hse
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  zq
} from "B:/~BUN/root/chunk-r1z1wgpe.js";
import {
  te
} from "B:/~BUN/root/chunk-9tx73f8x.js";
import {
  v_e,
  YVt
} from "B:/~BUN/root/chunk-gwsmg415.js";
import {
  bOn
} from "B:/~BUN/root/chunk-r2pnjptx.js";
import {
  c3t
} from "B:/~BUN/root/chunk-zqb056nq.js";
import {
  Uie,
  Su
} from "B:/~BUN/root/chunk-9dv7wnd0.js";
import {
  GG
} from "B:/~BUN/root/chunk-xpy44yvr.js";
import {
  N
} from "B:/~BUN/root/chunk-nkxgam12.js";
import {
  o,
  v,
  T,
  u,
  U,
  C
} from "B:/~BUN/root/chunk-g3snhg6n.js";
import {
  hostname as yn
} from "os";
import {
  dirname as wn,
  join as kn
} from "path";
var Sn = f(() => u({
    version: C(1),
    choice: U(["accepted", "declined"]),
    decidedAt: o(),
    hostname: o()
  })),
  Le = "cloud-plugins-consent";

function De() {
  return Be.state(Le)
}

function uLe() {
  return kn(Pe(), "state", `${Le}.json`)
}
async function xe(e) {
  let n;
  try {
    n = await e.readText()
  } catch (r) {
    return t(`cloud-plugins consent: store unreadable (${d(r)})`, {
      level: "warn"
    }), "unreadable"
  }
  if (n === void 0) return "unset";
  try {
    let r = Sn().safeParse(J(n));
    return r.success && r.data.hostname === e.hostname() ? r.data.choice : "unset"
  } catch {
    return "unset"
  }
}
async function bn(e) {
  let n = await xe(e);
  return n === "unreadable" ? "unset" : n
}

function Pn(e, n) {
  return n === "declined" || n === "unset" && e ? "declined" : "accepted"
}
async function p3o(e, n) {
  try {
    return await n.writeText(_({
      version: 1,
      choice: e,
      decidedAt: n.now().toISOString(),
      hostname: n.hostname()
    }, null, 2) + `
`), !0
  } catch (r) {
    return t(`cloud-plugins consent: answer not saved (${d(r)})`, {
      level: "warn"
    }), !1
  }
}

function Gwt(e) {
  return {
    readText: async () => {
      if (e) {
        let n = await e.readText([De()]);
        if (!n.ok) throw Error("cloud-plugins consent read failed");
        let r = n.value.items[0];
        return r.found ? r.value : void 0
      }
      try {
        return await gn().read(uLe())
      } catch (n) {
        if (G(n)) return;
        throw n
      }
    },
    writeText: async (n) => {
      if (e) {
        if (!(await e.write(De(), n, {
            mode: 384
          })).ok) throw Error("cloud-plugins consent write failed");
        return
      }
      let r = uLe();
      await gn().mkdir(wn(r), 448), await gn().atomicWrite(r, n, 384)
    },
    now: () => new Date,
    hostname: yn
  }
}

function f3o() {
  return {
    value: null,
    persisted: !1,
    given: !1
  }
}
async function Itt(e, n, r) {
  let {
    answer: s,
    given: a
  } = await Rn(e, n);
  if (s !== "accepted" || a || r === void 0 || !await r.storeUntrusted().catch(() => !0)) return s;
  return Cn(r.onUntrusted), "unset"
}
async function Rn(e, n) {
  let r = !1;
  if (e.value === null) r = !0, e.value = bn(n).then((M) => (e.persisted = M !== "unset", M)), e.given = !1;
  let {
    value: s,
    given: a
  } = e, k = await s;
  if (k !== "accepted" || r) return {
    answer: k,
    given: a
  };
  let P = await xe(n),
    {
      value: S,
      given: h
    } = e;
  if (S !== null && S !== s) return {
    answer: await S,
    given: h
  };
  if (P === "accepted") e.persisted = !0;
  let D = Pn(e.persisted, P);
  if (D === "declined") return e.value = Promise.resolve(D), e.given = !1, {
    answer: D,
    given: !1
  };
  return {
    answer: D,
    given: a
  }
}

function Cn(e) {
  try {
    e?.()
  } catch (n) {
    t(`cloud-plugins consent: callback failed (${d(n)})`, {
      level: "warn"
    })
  }
}
var $e = ["userSettings", "projectSettings", "localSettings", "flagSettings"],
  En = new Set(["userSettings", "flagSettings"]),
  vn = xs.toReversed(),
  Fn = 200,
  An = 32,
  Re = 2000,
  Tn = 256,
  On = 1024,
  Nn = 140,
  Dn = 128,
  Ln = 256,
  xn = 16,
  In = 128,
  Mn = 262144,
  jn = new Set([Su, "claude-code-marketplace"]),
  $n = new Set(["https:", "ssh:", "git+ssh:", "git+https:"]),
  Ie = new Set(["http:", "git:", "git+http:"]),
  Wn = new Set(["ssh:", "git+ssh:"]),
  Un = new Set(["https:"]),
  Bn = /^[\x21-\x7e]+$/,
  Kn = /^[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\/[A-Za-z0-9._-]+$/,
  Hn = /^(?:([A-Za-z0-9][A-Za-z0-9._-]*)@)?(\[[0-9A-Fa-f:.]+\]|[A-Za-z0-9][A-Za-z0-9._-]*):(.*)$/,
  Yn = /^[A-Za-z0-9][A-Za-z0-9+.-]*::/,
  zn = /^[A-Za-z0-9._/@+][A-Za-z0-9._/@+-]*$/,
  Vn = /^[A-Za-z0-9._/@+][A-Za-z0-9._/@+ -]*$/,
  We = /(?:^|[/:])\.\.(?:$|[/?#;])/,
  Ue = /%2e|%2f|%5c|%3b|%3f|%23|\\/i,
  qn = /^[^:]*:\/\/[^/?#]*%/,
  Zn = ["invalid_id", "invalid_value", "directory_loaded", "unknown_builtin", "ambiguous_marketplace", "blocked_by_policy", "not_installed_here", "unknown_marketplace", "untrusted_for_folder", "reserved_name_conflict", "not_provided_by_container", "local_marketplace", "needs_credentials", "insecure_transport", "invalid_marketplace", "over_cap", "guard_builtin_not_own_choice"];

function CGt(e) {
  let n = mt(),
    r = [],
    s = new Map,
    a = [],
    k = ot(e),
    P = {
      byPolicy: Me(e.policyRefusedMarketplaces),
      asReserved: Me(e.reservedNameConflicts)
    };
  for (let [A, R] of [...Qn(e, n)].sort(([V], [q]) => ye(V, q))) {
    let V = Oi(A) ?? "",
      q = s.get(V) ?? rt(V, e, P);
    s.set(V, q);
    let j = tt(A, R, V, q, k, e);
    if (j !== void 0) {
      if (n[j]++, j !== "directory_loaded") r.push({
        id: A,
        reason: j
      });
      continue
    }
    let ne = {
      id: A,
      value: R.value === !0,
      ownMention: R.ownMention,
      marketplace: V,
      declaration: q.kind === "declare" && R.value === !0 ? q.source : void 0
    };
    a.push(ne), a.push(...Kx(A).map((W) => ({
      ...ne,
      id: W
    })))
  }
  let S = ht(gt(a, n, r), n, r),
    h = {
      enabledPlugins: Object.fromEntries(S.map(({
        id: A,
        value: R
      }) => [A, R])),
      extraKnownMarketplaces: Object.fromEntries(S.flatMap(({
        marketplace: A,
        declaration: R
      }) => R === void 0 ? [] : [
        [A, {
          source: R
        }]
      ]).sort(([A], [R]) => ye(A, R)))
    },
    D = {
      forwarded: S.length,
      forwardedDisabled: F(S, ({
        value: A
      }) => !A),
      marketplacesDeclared: Object.keys(h.extraKnownMarketplaces).length,
      dropped: n
    };
  r.sort((A, R) => ye(A.id, R.id));
  let M = et(e) ? "over_read_cap" : !che(h).safeParse(h).success ? "schema_rejected" : Buffer.byteLength(Xn(h), "utf8") > Mn ? "too_large" : void 0;
  if (M !== void 0) return {
    patch: {
      enabledPlugins: {},
      extraKnownMarketplaces: {}
    },
    dropped: [...r, ...S.map(({
      id: A
    }) => ({
      id: A,
      reason: "over_cap"
    }))].sort((A, R) => ye(A.id, R.id)),
    counts: {
      forwarded: 0,
      forwardedDisabled: 0,
      marketplacesDeclared: 0,
      dropped: {
        ...n,
        over_cap: n.over_cap + S.length
      }
    },
    refusedWhole: M
  };
  return {
    patch: h,
    dropped: r,
    counts: D
  }
}

function Xn(e) {
  return _(ZO(e))
}

function Ke(e) {
  return {
    forwarded: e.forwarded,
    forwarded_disabled: e.forwardedDisabled,
    marketplaces_declared: e.marketplacesDeclared,
    ...Object.fromEntries(Zn.map((n) => [`dropped_${n}`, e.dropped[n]]))
  }
}

function Jn(e, n) {
  if (!N(n)) return {
    kind: "drop",
    reason: "invalid_marketplace"
  };
  switch (Q(n, "source")) {
    case "github":
      return at(e, n);
    case "git":
      return dt(e, n);
    case "url":
      return lt(e, n);
    case "directory":
    case "file":
    case "npm":
    case "settings":
      return {
        kind: "drop", reason: "local_marketplace"
      };
    default:
      return {
        kind: "drop", reason: "invalid_marketplace"
      }
  }
}

function Qn(e, n) {
  let r = new Map,
    s = new Set;
  for (let a of $e) {
    let k = e.enabledPluginsByTier[a];
    if (!N(k)) continue;
    let P = En.has(a) || a === "localSettings" && e.localSettingsAreOwnChoice,
      S = Object.keys(k);
    n.over_cap += Math.max(0, S.length - Re);
    for (let h of S.slice(0, Re)) {
      let D = k[h],
        M = He(k, h);
      if (D === void 0 || M === void 0) continue;
      if (!GG.includes(a) && e.trustedOnlyBuiltinIds.has(M.toLowerCase())) {
        n.guard_builtin_not_own_choice++;
        continue
      }
      if (!nt(M)) {
        s.add(M);
        continue
      }
      let A = r.get(M);
      r.set(M, {
        value: D,
        ownChoice: (A?.ownChoice ?? !1) || P && D === !0,
        ownMention: (A?.ownMention ?? !1) || P && typeof D === "boolean"
      })
    }
  }
  return n.invalid_id += s.size, r
}

function et(e) {
  return $e.some((n) => {
    let r = e.enabledPluginsByTier[n];
    return N(r) && Object.keys(r).length > Re
  })
}

function nt(e) {
  return e.length <= Tn && JD().safeParse(e).success
}

function tt(e, n, r, s, a, {
  installedPluginIds: k,
  builtinPluginIds: P,
  directoryPluginsAllowedByPolicy: S
}) {
  let h = r.toLowerCase();
  if (h === Tc) return "directory_loaded";
  if (typeof n.value !== "boolean") return "invalid_value";
  if (h === $u && !S) return "blocked_by_policy";
  if (h === oi && !P.has(e)) return "unknown_builtin";
  if (n.value && a.has(e.toLowerCase())) return "blocked_by_policy";
  if (s.kind === "drop" && n.value) return s.reason;
  if (n.value && !n.ownChoice && !k.has(e) && h !== oi && h !== $u) return "not_installed_here";
  return
}

function ot({
  enabledPluginsByTier: e
}) {
  let n = e.policySettings;
  return new Set(N(n) ? Object.keys(n).filter((r) => n[r] === !1).flatMap((r) => He(n, r) ?? []).map((r) => r.toLowerCase()) : [])
}

function He(e, n) {
  let r = Pw(n),
    s = [r, ...Kx(r)],
    a = s.indexOf(n);
  return s.slice(0, a === -1 ? s.length : a).some((P) => Object.hasOwn(e, P) && e[P] !== void 0) ? void 0 : r
}

function Me(e) {
  return new Set([...e].map((n) => n.toLowerCase()))
}

function rt(e, n, r) {
  let s = e.toLowerCase();
  if (s === oi || s === $u) return {
    kind: "reserved"
  };
  if (r.byPolicy.has(s)) return {
    kind: "drop",
    reason: "blocked_by_policy"
  };
  let a = st(e, n),
    k = BJ.has(s);
  if (a === void 0 && n.marketplaceRestrictionPolicyActive && s !== Su) return {
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
  if (_ze(e)) return {
    kind: "drop",
    reason: "reserved_name_conflict"
  };
  if (a === void 0) return {
    kind: "drop",
    reason: je(e, n)
  };
  return Jn(e, a)
}

function je(e, n) {
  return it(e, n) ? "untrusted_for_folder" : "unknown_marketplace"
}

function st(e, n) {
  let r = N(n.registeredMarketplaces) ? Q(n.registeredMarketplaces, e) : void 0;
  if (r !== void 0) return N(r) ? Q(r, "source") ?? null : null;
  for (let s of vn) {
    if (ef.has(s) && !n.folderTrustedForProjectPlugins) continue;
    let a = Ge(n, s, e);
    if (a !== void 0) return N(a) ? Q(a, "source") ?? null : null
  }
  return
}

function it(e, n) {
  return !n.folderTrustedForProjectPlugins && [...ef].some((r) => Ge(n, r, e) !== void 0)
}

function Ge(e, n, r) {
  let s = e.declaredMarketplacesByTier[n];
  return N(s) ? Q(s, r) : void 0
}

function at(e, n) {
  let r = Q(n, "repo");
  if (typeof r !== "string" || r.length > Nn || !Kn.test(r) || r.split("/").some(qe)) return {
    kind: "drop",
    reason: "invalid_marketplace"
  };
  let s = ze(n);
  return s === void 0 ? {
    kind: "drop",
    reason: "invalid_marketplace"
  } : Ce(e, {
    source: "github",
    repo: r,
    ...s
  })
}

function dt(e, n) {
  let r = Q(n, "url"),
    s = Ye(r);
  if (s === void 0) return {
    kind: "drop",
    reason: "invalid_marketplace"
  };
  let a = pt(s);
  if (a !== "network") return {
    kind: "drop",
    reason: a
  };
  if (!sct(s)) return {
    kind: "drop",
    reason: "invalid_marketplace"
  };
  let k = ze(n);
  return k === void 0 ? {
    kind: "drop",
    reason: "invalid_marketplace"
  } : Ce(e, {
    source: "git",
    url: s,
    ...k
  })
}

function lt(e, n) {
  let r = Ye(Q(n, "url"));
  if (r === void 0) return {
    kind: "drop",
    reason: "invalid_marketplace"
  };
  let s = Q(n, "headers");
  if (Q(n, "headersHelper") !== void 0 || s !== void 0 && !(N(s) && Object.keys(s).length === 0)) return {
    kind: "drop",
    reason: "needs_credentials"
  };
  let a = Ze(r, Un);
  return a === "network" ? Ce(e, {
    source: "url",
    url: r
  }) : {
    kind: "drop",
    reason: a
  }
}

function Ye(e) {
  return typeof e === "string" && e.length > 0 && e.length <= On && Bn.test(e) ? e : void 0
}

function ze(e) {
  let n = Q(e, "ref"),
    r = Q(e, "path"),
    s = Q(e, "sparsePaths"),
    a = Q(e, "skipLfs");
  if (n !== void 0 && !ut(n) || r !== void 0 && !ct(r) || s !== void 0 && !ft(s) || a !== void 0 && typeof a !== "boolean") return;
  return {
    ...n !== void 0 && {
      ref: n
    },
    ...r !== void 0 && {
      path: r
    },
    ...s !== void 0 && {
      sparsePaths: s
    },
    ...a !== void 0 && {
      skipLfs: a
    }
  }
}

function ut(e) {
  return typeof e === "string" && e.length <= Dn && zn.test(e) && !e.split("/").some(qe)
}

function ct(e) {
  return typeof e === "string" && e.length <= Ln && Ve(e)
}

function ft(e) {
  return Array.isArray(e) && e.length <= xn && e.every((n) => typeof n === "string" && n.length <= In && Ve(n))
}

function Ve(e) {
  return Vn.test(e) && !e.startsWith("/") && !e.split("/").some((n) => n === "..")
}

function qe(e) {
  return e === "." || e === ".."
}

function Ce(e, n) {
  return xw("extraKnownMarketplaces").safeParse({
    [e]: {
      source: n
    }
  }).success ? {
    kind: "declare",
    source: n
  } : {
    kind: "drop",
    reason: "invalid_marketplace"
  }
}

function pt(e) {
  if (e.startsWith("-") || Yn.test(e) || F4(e)) return "invalid_marketplace";
  if (e.includes("://")) return Ze(e, $n);
  if (/^[A-Za-z]:[\\/]/.test(e) || /^[./~]/.test(e)) return "local_marketplace";
  let n = Hn.exec(e);
  if (n === null) return "invalid_marketplace";
  let [, , r = "", s = ""] = n;
  if (s.length === 0 || /^[-:]/.test(s) || We.test(s) || Ue.test(s)) return "invalid_marketplace";
  if (/[?#]/.test(s)) return "needs_credentials";
  return Xe(r) ? "local_marketplace" : "network"
}

function Ze(e, n) {
  let r;
  try {
    r = new URL(e)
  } catch {
    return "invalid_marketplace"
  }
  if (r.protocol === "file:") return "local_marketplace";
  if (!(n.has(r.protocol) || Ie.has(r.protocol)) || qn.test(e) || r.hostname === "" || /^\[?-/.test(r.hostname) || r.username.startsWith("-")) return "invalid_marketplace";
  if (r.password !== "" || r.username !== "" && !Wn.has(r.protocol) || r.search !== "" || r.hash !== "" || e.includes("?") || e.includes("#")) return "needs_credentials";
  if (Xe(r.hostname)) return "local_marketplace";
  if (We.test(e) || Ue.test(e)) return "invalid_marketplace";
  return Ie.has(r.protocol) ? "insecure_transport" : "network"
}

function Xe(e) {
  return Uas(e, "address") || oue(e) || !/[.:]/.test(e.replace(/\.+$/, ""))
}

function gt(e, n, r) {
  let s = new Map;
  for (let {
      marketplace: a,
      declaration: k
    }
    of e)
    if (k !== void 0) {
      let P = a.toLowerCase(),
        S = s.get(P) ?? new Set;
      S.add(Bi(ZO(k))), s.set(P, S)
    } return e.filter(({
    id: a,
    marketplace: k,
    declaration: P
  }) => {
    if (P === void 0 || (s.get(k.toLowerCase())?.size ?? 0) <= 1) return !0;
    return n.ambiguous_marketplace++, r.push({
      id: a,
      reason: "ambiguous_marketplace"
    }), !1
  })
}

function ht(e, n, r) {
  let s = new Set(_t(e).slice(0, An)),
    a = e.filter(({
      declaration: S,
      marketplace: h
    }) => S === void 0 || s.has(h)),
    k = [...a.filter(({
      value: S,
      ownMention: h
    }) => h && !S), ...a.filter(({
      value: S,
      ownMention: h
    }) => h && S), ...a.filter(({
      value: S,
      ownMention: h
    }) => !h && S), ...a.filter(({
      value: S,
      ownMention: h
    }) => !h && !S)].slice(0, Fn).sort((S, h) => ye(S.id, h.id)),
    P = new Set(k.map(({
      id: S
    }) => S));
  for (let {
      id: S
    }
    of e)
    if (!P.has(S)) n.over_cap++, r.push({
      id: S,
      reason: "over_cap"
    });
  return k
}

function _t(e) {
  let n = e.filter(({
      declaration: a
    }) => a !== void 0),
    r = L(n.filter(({
      ownMention: a
    }) => a).map(({
      marketplace: a
    }) => a)).sort(),
    s = new Set(r);
  return [...r, ...L(n.map(({
    marketplace: a
  }) => a)).filter((a) => !s.has(a)).sort()]
}

function ye(e, n) {
  return e < n ? -1 : e > n ? 1 : 0
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
  }
}

function Q(e, n) {
  return Object.hasOwn(e, n) ? e[n] : void 0
}

function Je({
  admission: e,
  readChoices: n,
  transport: r,
  clock: s,
  bound: a,
  onNotice: k,
  onOutcome: P,
  onState: S
}) {
  let h = a === void 0 ? {} : {
      bound: a
    },
    D = "idle",
    M = null,
    A = (y) => {
      if (D = y, y !== "skipped") M = null;
      fe(() => S?.(y), ke)
    },
    R = null,
    V = null,
    q = !1,
    j = null,
    ne = !1,
    W = null,
    z = null,
    ge = !1;

  function oe(y, b) {
    if (b === "read_failed" || b === "internal_error" || b === "refused_whole") m("ccr_cloud_plugins_forward", b, h);
    M = b, A("skipped"), i("tengu_cloud_plugins_skipped", {
      reason: c(b),
      ...h,
      reattach: y.reattach
    })
  }

  function ue(y) {
    fe(() => P?.(y), ke);
    let b = _(y.refusedByWorker === void 0 ? [y.forwarded, y.forwardedDisabled, y.loaded, y.notApplied, y.stayed] : ["refused", y.refusedByWorker, y.stayed]);
    if (b !== j || y.messageWentFirst && !ne) fe(() => {
      k(y), j = b, ne = y.messageWentFirst
    }, ke)
  }

  function pe(y, b, E, H) {
    let Y = W !== null;
    return {
      forwarded: b.forwarded,
      forwardedDisabled: b.forwardedDisabled,
      loaded: Y ? null : E,
      stayed: b.stayed,
      notApplied: H || Y,
      messageWentFirst: !Y && !H && y.messageWentFirst,
      ...W !== null && {
        refusedByWorker: W.reason
      }
    }
  }

  function ie(y) {
    return fe(() => r.post(y), St)
  }

  function re(y, b, E, H) {
    q = !0;
    let Y = ie({
        subtype: "apply_flag_settings",
        settings: {
          [v_e]: b.patch
        }
      }),
      de = () => Ee(y, H) === "current";
    return Y.response.then(() => {
      if (de()) W = null
    }, (_e) => {
      let se = kt(_e);
      if (i("tengu_cloud_plugins_apply_unconfirmed", {
          at: c(E),
          ...h,
          standing: c(Ee(y, H)),
          ...se !== null && {
            refused_by_worker: c(se)
          }
        }), se !== null && de()) W = {
        reason: se,
        generation: H
      }, ue(pe(y, b, null, !0))
    }), Y
  }

  function he(y, b) {
    let E = CGt(b);
    if (i("tengu_cloud_plugins_forwarded", {
        ...Ke(E.counts),
        refused_whole: E.refusedWhole !== void 0,
        ...h,
        reattach: y.reattach
      }), E.refusedWhole !== void 0) {
      ue({
        forwarded: 0,
        forwardedDisabled: 0,
        loaded: null,
        stayed: E.dropped,
        notApplied: !0,
        messageWentFirst: !1
      }), oe(y, "refused_whole");
      return
    }
    if (E.counts.forwarded === 0 && E.counts.marketplacesDeclared === 0 && !y.reattach && !y.workerKnownAtConnect && !q) {
      if (E.dropped.length > 0) ue({
        forwarded: 0,
        forwardedDisabled: 0,
        loaded: null,
        stayed: E.dropped,
        notApplied: !1,
        messageWentFirst: !1
      });
      oe(y, "nothing_to_forward");
      return
    }
    let H = {
      patch: E.patch,
      patchKey: _(E.patch),
      forwardedEnabledIds: new Set(Object.entries(E.patch.enabledPlugins).filter(([, Y]) => Y).map(([Y]) => Y.toLowerCase())),
      forwarded: E.counts.forwarded,
      forwardedDisabled: E.counts.forwardedDisabled,
      stayed: E.dropped
    };
    if (y.plan = H, A("waiting_for_worker"), y.generation !== null) y.earlyApply = "skipped", B(y, H, y.generation, "connect");
    else ve(re(y, H, "connect", null)).then((Y) => {
      y.earlyApply = Y
    })
  }

  function B(y, b, E, H) {
    if (y.handledGeneration !== null && E <= y.handledGeneration) return;
    let Y = y.handledGeneration !== null;
    y.handledGeneration = E, y.reloadTaken = !1, W = yt(E, y, W), ne = !1;
    let de = () => Ee(y, E),
      _e = (Z) => {
        i("tengu_cloud_plugins_reload", {
          early_apply: c(y.earlyApply),
          generation_changed: Y,
          install_frames_seen: y.installFrames,
          forwarded_enabled: b.forwardedEnabledIds.size,
          ...h,
          reattach: y.reattach,
          ...Z
        })
      };
    A("posted");
    let se = null,
      we = (Z, w, K) => {
        let I = Z === "accepted" && w === "accepted";
        if (de() === "current") {
          if (y.reloadTaken = I, I && W === null) z = {
            generation: E,
            patchKey: b.patchKey
          };
          let X = Z === "session_inactive" || w === "session_inactive";
          if (!I) {
            if (X) p("ccr_cloud_plugins_forward", "session_inactive", {
              ...h
            });
            else m("ccr_cloud_plugins_forward", "posts_refused", {
              ...h
            });
            ue(pe(y, b, null, !0))
          } else if (W !== null) p("ccr_cloud_plugins_forward", "refused_by_worker", {
            ...h
          });
          else g("ccr_cloud_plugins_forward", {
            ...h,
            message_went_first: y.messageWentFirst
          });
          A(I ? "settled" : "failed")
        }
        K.then((X) => {
          if (_e({
              apply_outcome: c(Z),
              reload_outcome: c(w),
              standing: c(de()),
              message_went_first: y.messageWentFirst,
              reload_rtt_ms: se === null ? -1 : s.now() - se,
              answered: X !== null,
              loaded_of_forwarded: X?.loaded ?? -1,
              worker_error_count: X?.workerErrors ?? -1
            }), de() === "current" && (I || X !== null)) {
            if (ue(pe(y, b, X?.loaded ?? null, !1)), y.messageWentFirst = !1, X !== null) {
              if (y.reloadTaken = !0, W === null) z = {
                generation: E,
                patchKey: b.patchKey
              };
              A("settled")
            }
          }
        })
      };
    ve(re(y, b, H, E)).then((Z) => {
      if (Z !== "accepted" || de() !== "current") {
        we(Z, "not_posted", Promise.resolve(null));
        return
      }
      se = s.now();
      let w = ie({
          subtype: "reload_plugins"
        }),
        K = w.response.then((I) => Pt(b, I), () => null);
      ve(w).then((I) => {
        we(Z, I, K)
      })
    })
  }

  function ce(y) {
    return z !== null && y.generation === z.generation && (y.plan === null || y.plan.patchKey === z.patchKey)
  }

  function ae(y) {
    let b = ge && !(z !== null && V === z.generation);
    return ge = !1, {
      reattach: y,
      workerKnownAtConnect: V !== null,
      reloadTaken: !1,
      messageWentFirst: b,
      closed: !1,
      plan: null,
      generation: V,
      handledGeneration: null,
      earlyApply: "pending",
      installFrames: 0
    }
  }
  return {
    connected({
      reattach: y
    }) {
      if (R !== null) R.closed = !0;
      let b = ae(y);
      R = b;
      let E = fe(e, () => "internal_error");
      if (E !== "admitted") {
        oe(b, E);
        return
      }
      A("reading"), Promise.resolve().then(n).then((H) => {
        if (!b.closed) fe(() => he(b, H), () => oe(b, "internal_error"))
      }, () => {
        if (!b.closed) oe(b, "read_failed")
      })
    },
    workerUp(y) {
      if (V !== null && y < V) return;
      if (V = y, R === null || R.generation !== null && y <= R.generation) return;
      R.generation = y;
      let b = R,
        E = b.plan;
      if (E !== null) fe(() => B(b, E, y, "worker_up"), () => oe(b, "internal_error"))
    },
    pluginInstallFrame() {
      if (R !== null) R.installFrames++
    },
    messageSent() {
      if (R === null) {
        ge = !0;
        return
      }
      if (!R.reloadTaken && D !== "skipped" && !ce(R)) R.messageWentFirst = !0
    },
    disconnected() {
      if (R !== null) R.closed = !0, R = null;
      A("idle")
    },
    state: () => D,
    skipped: () => D === "skipped" ? M : null
  }
}

function Ee(e, n) {
  return e.closed ? "disconnected" : e.handledGeneration === n ? "current" : "superseded"
}

function yt(e, n, r) {
  if (r === null || r.generation === e) return r;
  return r.generation === null && !n.workerKnownAtConnect ? {
    ...r,
    generation: e
  } : null
}

function fe(e, n) {
  try {
    return e()
  } catch (r) {
    return l(r), n(r)
  }
}

function ke() {}
var wt = ["not_managed_cloud_worker", "entrypoint", "disabled", "hermetic", "not_admitted", "flag_off", "flag_unsettled", "malformed", "other"];

function kt(e) {
  let n = e instanceof Error ? e.message : typeof e === "string" ? e : "";
  if (n === YVt) return "other";
  let r = `${YVt}: `;
  if (!n.startsWith(r)) return null;
  let s = n.slice(r.length).trim();
  return wt.find((a) => a === s) ?? "other"
}

function St(e) {
  let n = Promise.reject(e);
  return n.catch(ke), {
    posted: Promise.resolve("failed"),
    response: n
  }
}

function ve(e) {
  return e.posted.catch(() => "failed")
}
var bt = f(() => u({
  plugins: T(u({
    source: o().optional()
  })),
  error_count: v().int()
}));

function Pt(e, n) {
  let r = bt().safeParse(n);
  if (!r.success) return {
    loaded: null,
    workerErrors: -1
  };
  return {
    loaded: new Set(r.data.plugins.flatMap(({
      source: s
    }) => s !== void 0 && e.forwardedEnabledIds.has(s.toLowerCase()) ? [s.toLowerCase()] : [])).size,
    workerErrors: r.data.error_count
  }
}
async function Aer(e) {
  let n = Wo().map((h) => [h, me(h)]),
    [r, s] = await Promise.all([nd(e), Aq(e)]),
    a = Flt(),
    k = n.filter(([h]) => a || !ef.has(h)).flatMap(([, h]) => Object.entries(h?.extraKnownMarketplaces ?? {}).map(([D, {
      source: M
    }]) => [D, M])),
    P = [...k, ...Object.entries(r).map(([h, {
      source: D
    }]) => [h, D]), [Su, Uie]],
    S = n.find(([h]) => h === "localSettings")?.[1]?.enabledPlugins;
  return {
    enabledPluginsByTier: Object.fromEntries(n.map(([h, D]) => [h, D?.enabledPlugins])),
    declaredMarketplacesByTier: Object.fromEntries(n.map(([h, D]) => [h, D?.extraKnownMarketplaces])),
    registeredMarketplaces: r,
    folderTrustedForProjectPlugins: a,
    localSettingsAreOwnChoice: !(N(S) && Object.keys(S).length > 0) || !UM({
      onIndeterminate: "tracked"
    }),
    directoryPluginsAllowedByPolicy: Kee(),
    builtinPluginIds: new Set([...hr().builtinPlugins.keys()].map((h) => `${h}@${oi}`)),
    trustedOnlyBuiltinIds: new Set([...hr().builtinPlugins.keys()].map((h) => `${h}@${oi}`).filter(zq).map((h) => h.toLowerCase())),
    installedPluginIds: new Set(Object.entries(s.plugins).filter(([, h]) => Hse(h)).map(([h]) => h)),
    policyRefusedMarketplaces: new Set(P.filter(([, h]) => !zc(h)).map(([h]) => h)),
    marketplaceRestrictionPolicyActive: GOe(),
    reservedNameConflicts: new Set([...Object.entries(r).filter(([h, D]) => Epe(h, D) !== null).map(([h]) => h), ...k.filter(([h, D]) => !Object.hasOwn(r, h) && x_t(h, D) !== null).map(([h]) => h)])
  }
}
var RVr = 5000,
  Fe = 6;

function xer(e) {
  if (e === void 0) return;
  if (e.refusedByWorker !== void 0) return "refused_by_worker";
  if (e.notApplied) return "not_applied";
  let n = e.forwarded - e.forwardedDisabled;
  if (e.forwarded === 0) return e.stayed.length > 0 ? "none_to_send" : void 0;
  if (n === 0) return;
  if (e.loaded === null) return "not_confirmed";
  if (e.loaded < n) return e.loaded === 0 ? "not_installed" : "some_not_installed";
  return
}

function Rt(e) {
  return e === "skipped" || e === "failed"
}

function Ct(e) {
  return e === "reading" || e === "posted"
}

function Et(e) {
  return e === "read_failed" || e === "internal_error" ? e : void 0
}
var AVr = {
  now: () => Date.now(),
  setTimeout(e, n) {
    let r = setTimeout(e, n);
    return () => clearTimeout(r)
  }
};

function qbn(e) {
  let {
    sessionId: n,
    reattach: r,
    manager: s,
    memory: a
  } = e, k = (w) => {
    try {
      e.say(w)
    } catch (K) {
      l(K)
    }
  }, P = e.readChoices ?? (() => Aer(e.storageV5)), S = e.clock ?? AVr, h = e.muted ?? lfe, D = (w) => new Promise((K, I) => {
    let X = S.setTimeout(() => I(Error("a local read for plugin forwarding timed out")), RVr);
    Promise.resolve().then(w).then(K, I).finally(X)
  }), M = () => D(P), A = e.consentDeps ?? Gwt(e.storageV5), R = e.distrust ?? xVr(e.reach), V = () => D(() => Itt(a.consentPin, A, R)), q = new AbortController, j = "no_consent", ne, W, z = () => {
    try {
      e.onChange?.()
    } catch (w) {
      l(w)
    }
  }, ge = (w) => {
    W = w, Qe(w, k), z()
  }, oe = !1, ue = !1, pe = !1, ie = h(), re = !1, he = !1, B = Je({
    admission: () => j,
    readChoices: () => M().then((w) => (oe = !1, w), (w) => {
      throw oe = !0, w
    }),
    transport: {
      post(w) {
        let {
          posted: K,
          response: I
        } = s.postControlRequest(w, {
          answerExpected: !1
        });
        return {
          posted: K.then(({
            outcome: X
          }) => X),
          response: I
        }
      }
    },
    clock: S,
    ...e.bound !== void 0 && {
      bound: e.bound
    },
    onNotice: (w) => {
      if (w.forwarded > w.forwardedDisabled && w.loaded !== 0 && !w.notApplied && w.refusedByWorker === void 0) ue = !0;
      Qe(w, k)
    },
    onOutcome: (w) => {
      W = w, z()
    },
    onState: () => z()
  }), ce = !1, ae = null, y = () => {
    if (!he) he = !0, k({
      line: vt,
      level: "notice"
    })
  }, b = () => {
    if (re) return;
    re = !0, W = void 0, B.disconnected(), y(), i("tengu_cloud_plugins_admission", {
      admission: c("flag_off"),
      source: c("muted"),
      reattach: r
    }), z()
  }, E = () => {
    if (re = !1, W = void 0, k({
        line: Ft,
        level: "notice"
      }), B.connected({
        reattach: r
      }), Y) B.messageSent();
    z()
  }, H = (w) => {
    if (q.signal.aborted) return;
    if (a.setAsideSessions.delete(n), !ce) {
      ae = w;
      return
    }
    let K = w === "accepted" ? "admitted" : "opted_out";
    if (K === j && !oe) return;
    let I = "decided";
    if (j = K, ne = I, W = void 0, z(), i("tengu_cloud_plugins_admission", {
        admission: c(K),
        source: c(I),
        reattach: r
      }), K === "admitted" && ie) {
      b();
      return
    }
    if (re = !1, B.disconnected(), B.connected({
        reattach: r
      }), Y) B.messageSent()
  }, Y = !1, de = a.decided.subscribe((w) => {
    try {
      H(w)
    } catch (K) {
      l(K)
    }
  }), _e = (e.onMuteRecheck ?? oee)(() => {
    try {
      let w = h();
      if (q.signal.aborted || w === ie) return;
      if (ie = w, w) {
        if (j === "admitted" && ce && Ct(B.state())) {
          b();
          return
        }
        z();
        return
      }
      if (he = !1, re) {
        E();
        return
      }
      z()
    } catch (w) {
      l(w)
    }
  }), se = () => {
    if (j !== "admitted") return;
    Itt(a.consentPin, A, R).then((w) => {
      if (w !== "accepted") H("declined")
    }, () => {})
  };
  we().catch((w) => (l(w), {
    admission: "no_consent",
    source: "internal_error",
    unsent: []
  })).then((w) => {
    if (i("tengu_cloud_plugins_admission", {
        admission: c(w.admission),
        source: c(w.source),
        reattach: r
      }), q.signal.aborted) return;
    if (w.source === "read_failed" || w.source === "internal_error") {
      if (m("ccr_cloud_plugins_forward", w.source), ne = w.source, ce = !0, z(), ae !== null) H(ae);
      return
    }
    if (j = w.admission, ne = w.source, ce = !0, j === "admitted" && ie) b();
    else B.connected({
      reattach: r
    }), z();
    if (w.unsent.length > 0) ge(Nt(w.unsent));
    if (ae !== null) H(ae)
  }).catch((w) => {
    l(w)
  });
  async function we() {
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
    let K = await M().then((_n) => _n, () => null);
    if (K === null) return {
      admission: "no_consent",
      source: "read_failed",
      unsent: []
    };
    let I = CGt(K);
    if (I.counts.forwarded === 0 && I.counts.marketplacesDeclared === 0) return {
      admission: "no_consent",
      source: "not_asked",
      unsent: I.dropped
    };
    if (q.signal.aborted) return {
      admission: "no_consent",
      source: "detached",
      unsent: []
    };
    let X = R.withheld();
    if (X !== null) {
      if (a.setAsideSessions.add(n), ae === null) k({
        line: Tt(X),
        level: "warning"
      });
      return {
        admission: "no_consent",
        source: "untrusted_store",
        unsent: []
      }
    }
    if (!a.pointedToCommand.shown && ae === null) a.pointedToCommand.shown = !0, k({
      line: Ot(I.counts.forwarded - I.counts.forwardedDisabled, I.counts.forwarded),
      level: "debug"
    });
    return {
      admission: "no_consent",
      source: "undecided",
      unsent: []
    }
  }
  let Z = (w) => () => {
    try {
      w()
    } catch (K) {
      l(K)
    }
  };
  return {
    workerKnownUp: Z(() => {
      if (j === "admitted" && ie) b();
      B.workerUp(a.generations.known(n))
    }),
    workerCameUp: Z(() => {
      if (j === "opted_out" && ue && !pe) pe = !0, k({
        line: At,
        level: "notice"
      });
      se();
      let w = a.generations.next(n);
      if (j === "admitted" && ie) b();
      else if (j === "admitted" && ce && oe) {
        if (W = void 0, B.disconnected(), B.connected({
            reattach: r
          }), Y) B.messageSent()
      }
      B.workerUp(w)
    }),
    pluginInstallFrame: Z(() => B.pluginInstallFrame()),
    messageSent: Z(() => {
      Y = !0, B.messageSent()
    }),
    teardown: Z(() => {
      if (q.signal.aborted) return;
      a.setAsideSessions.delete(n), q.abort(), _e(), de(), B.disconnected()
    }),
    state: () => ({
      settled: ce,
      admission: j,
      source: ne,
      notice: W,
      muted: re,
      answerPending: j === "admitted" && !re && W === void 0 && !Rt(B.state()),
      gaveUp: Et(B.skipped())
    })
  }
}
var vt = "Remote tool serving was turned off by Anthropic (emergency switch). Your plugins are not sent from this computer while it is off; they are sent again once it is back on.",
  Ft = "Remote tool serving was turned back on by Anthropic. Your plugins are sent to this cloud session again from this computer.",
  At = "This cloud session restarted without your plugins: they are no longer sent from this machine, because the saved Yes was withdrawn (a No in /cloud-plugins, or the answer was removed). Run /cloud-plugins to change that.";

function xVr(e) {
  let n = null,
    r = null,
    s = null,
    a = () => n ??= Promise.resolve().then(() => e.judge()).catch(() => "unknown").then((k) => (r = k, k));
  return {
    storeUntrusted: () => a().then((k) => k !== "outside"),
    onUntrusted: () => {
      s = r === null || r === "outside" ? "unknown" : r
    },
    withheld: () => s
  }
}

function Tt(e) {
  let n = Gn(uLe());
  return `The saved answer about your plugins is not used for this cloud session, because ${e==="in_launch_dir"?`the session itself can change ${n} from the folder or repository it runs in`:e==="in_other_root"?`the session itself can change ${n} through a folder it may write on this machine (an added directory or a settings write grant)`:`it could not be checked that the session cannot change ${n}`}; run /cloud-plugins to decide for this session.`
}

function Ot(e, n) {
  return `${e>0?`Your ${e} enabled ${O(e,"plugin")} can be used in`:`Your ${n} plugin ${O(n,"choice")} can apply to`} your cloud sessions from this machine \u2014 run /cloud-plugins to decide (nothing is sent until you do).`
}

function Nt(e) {
  return {
    forwarded: 0,
    forwardedDisabled: 0,
    loaded: null,
    stayed: e,
    notApplied: !1,
    messageWentFirst: !1
  }
}

function Qe(e, n) {
  Dt(e).forEach(n)
}

function Dt(e) {
  return [...Lt(e), ...xt(e.stayed, e.forwarded === 0)]
}

function Lt(e) {
  if (e.forwarded === 0 && e.refusedByWorker === void 0 && !e.notApplied) return [];
  if (e.refusedByWorker !== void 0) return [{
    line: `This cloud session did not take your plugins: ${Mt[e.refusedByWorker]}. Your plugins on this machine are unchanged.`,
    level: "warning"
  }];
  if (e.notApplied) return [{
    line: "Your plugins may not have reached this cloud session: it did not accept the request. They will be sent again if the session restarts or you reconnect to it; /reload-plugins shows what is loaded there now.",
    level: "warning"
  }];
  let n = e.forwarded - e.forwardedDisabled,
    r = e.forwardedDisabled,
    s = r > 0 ? ` (${r} you turned off here ${O(r,"stays","stay")} off there)` : "";
  if (n === 0) return [{
    line: `The ${r} ${O(r,"plugin")} you turned off here ${O(r,"is","are")} off in this cloud session too.`,
    level: "debug"
  }];
  let a = e.loaded !== null && e.loaded >= n,
    k = O(n, "it", "them"),
    P = e.loaded === null ? `Sent your ${n} enabled ${O(n,"plugin")} to this cloud session${s}; it has not confirmed ${k} \u2014 /reload-plugins shows what loaded.` : e.loaded >= n ? `Using your ${n} ${O(n,"plugin")} in this cloud session${s}.` : e.loaded === 0 ? `${n===1?"Your enabled plugin could not":`None of your ${n} enabled plugins could`} be installed in this cloud session yet${s} \u2014 the session is still fetching ${n===1?"it":"them"} or cannot reach ${n===1?"its":"their"} marketplace; /reload-plugins shows what loaded.` : `Using ${e.loaded} of your ${n} plugins in this cloud session${s}; the other ${n-e.loaded} could not be installed there yet \u2014 the session is still fetching ${n-e.loaded===1?"it":"them"} or cannot reach ${n-e.loaded===1?"its":"their"} marketplace; /reload-plugins shows what loaded.`,
    S = !e.messageWentFirst ? "" : e.loaded === null ? ` If ${O(n,"it","they")} loaded, ${O(n,"it applies","they apply")} from your next prompt; the one already sent may have run without ${k}.` : ` ${O(n,"It applies","They apply")} from your next prompt; the one already sent may have run without ${k}.`;
  return [{
    line: `${P}${S}`,
    level: a && !e.messageWentFirst ? "debug" : "notice"
  }]
}

function xt(e, n) {
  if (e.length === 0) return [];
  let r = e.slice(0, Fe).map(({
      id: k,
      reason: P
    }) => `${ti(k,{maxCodeUnits:80})} (${It[P]})`).join("; "),
    s = e.length > Fe ? `; and ${e.length-Fe} more` : "";
  return [{
    line: `${n?`Not using your plugins in this cloud session; ${e.length} ${O(e.length,"stays","stay")} on this machine`:`${e.length} of your plugin choices ${O(e.length,"stays","stay")} on this machine`}: ${r}${s}.`,
    level: "debug"
  }]
}
var It = {
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
  Mt = {
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
var Per = "Synced from this computer:",
  PVr = {
    files: "A message is waiting \xB7 esc to take it back",
    settings: "A message is waiting for your settings to upload \xB7 esc to take it back"
  },
  TCe = {
    projectFiles: "Project files",
    settings: "Settings",
    plugins: "Plugins",
    localTools: "Local tools"
  },
  an = ["projectFiles", "settings", "plugins"],
  jt = te.tick,
  Oer = te.cross,
  $t = "\u2026",
  Oe = {
    mark: "synced"
  },
  Te = {
    mark: "pending"
  };

function x(e) {
  return {
    mark: "not_synced",
    words: e
  }
}

function Wt(e) {
  switch (e.mark) {
    case "synced":
      return jt;
    case "pending":
      return $t;
    case "not_synced":
      return Oer
  }
}

function be(e, n) {
  let r = `${Wt(n)} ${e}`;
  switch (n.mark) {
    case "synced":
      return n.note === void 0 ? r : `${r} (${n.note})`;
    case "pending":
      return r;
    case "not_synced":
      return `${r} \u2014 ${n.words}`
  }
}

function Ut(e) {
  return [Per, ...an.flatMap((n) => {
    let r = e[n];
    return r === void 0 ? [] : [be(TCe[n], r)]
  }), ...e.localTools === void 0 ? [] : [be(TCe.localTools, e.localTools)]]
}

function m3o(e) {
  let [n, ...r] = Ut(e), s = `${n} ${r.join(" \xB7 ")}`, a = Ier(e), k = a === void 0 ? s : `${s}. ${a}`, P = Mer(e);
  if (P === void 0) return k;
  return a === void 0 ? `${k}. ${P}.` : `${k} ${P}.`
}

function Ier(e) {
  return
}

function Mer(e) {
  if (e.repositoryTrust === void 0 || e.repositoryTrust === "nothing_to_mark") return;
  return fxs(e.repositoryTrust)
}

function g3o(e, n) {
  return e.whileClosed === n.whileClosed && e.repositoryTrust === n.repositoryTrust && en(e.localTools, n.localTools) && an.every((r) => en(e[r], n[r]))
}

function h3o(e, n, r) {
  if (n !== void 0 && e?.on !== !0) return x(n);
  if (e === void 0) return;
  return e.on ? {
    mark: "synced",
    note: `served by this machine (${e.name})`
  } : x("not serving this session")
}

function en(e, n) {
  return e === void 0 || n === void 0 ? e === n : Bt(e, n)
}

function Bt(e, n) {
  return be("", e) === be("", n)
}

function y3o(e) {
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
      return "not_set_up"
  }
}

function _3o(e, n) {
  return e.state === "absent" && e.reason === "not_offered" ? void 0 : Kt(e, n)
}

function Kt(e, n) {
  switch (e.state) {
    case "seeding":
    case "armed":
      return x(Se("off", void 0, n));
    case "absent":
      return x(Se(e.state, e.reason, n));
    case "off":
    case "stopped":
      return x(Se(e.state, e.reason, n))
  }
}

function OVr(e) {
  return
}

function b3o(e) {
  return !1
}

function Kbn(e) {
  return {
    fromUpload: e?.kind === "bundle"
  }
}
var nn = "not set up for this session",
  Ae = {
    not_opted_in: nn,
    not_from_here: "this session was not started from this folder",
    not_set_up: nn,
    lookup_failed: "this computer could not check its records of this session"
  },
  Ht = {},
  tn = {
    ...Ae,
    ...Ht,
    seeded_elsewhere: Ae.not_from_here,
    not_seeded: Ae.not_set_up
  };

function Se(e, n, r, s) {
  return (n !== void 0 && Object.hasOwn(tn, n) ? tn[n] : void 0) ?? (e === "stopped" ? "sync stopped for this session" : "sync is off for this session")
}

function S3o(e) {
  return (e.kind === "absent" ? e.reason : e.outcome?.kind === "none" ? e.outcome.reason : void 0) === "no_project_files" ? {
    kind: "absent",
    reason: "not_sent"
  } : e
}

function w3o(e) {
  if (e.kind === "absent") return x(le[e.reason]);
  let {
    outcome: n,
    readBack: r
  } = e;
  if (n === void 0) return Te;
  let s = n.keptForCredential,
    a = n.keptAsLinks === void 0 ? [] : [Gt(n.keptAsLinks)];
  if (n.kind === "none") {
    let h = [...s === void 0 ? [] : [`${on(s)} kept here: ${O(s.others+(s.claudeMd?1:0),"it looks like it holds","they look like they hold")} a credential`], ...a];
    return x(h.length > 0 && n.reason === "nothing_to_send" ? h.join("; also ") : zt(n.reason))
  }
  let k = [...s === void 0 ? [] : [`without ${on(s)}`], ...a],
    P = k.length === 0 ? Oe : {
      mark: "synced",
      note: k.join("; also ")
    },
    S = n.settingsRefused === void 0 ? void 0 : x(dn[n.settingsRefused]);
  switch (n.outcome) {
    case "sent":
    case "unchanged":
    case "conflict_resolved":
      return S ?? (r === void 0 ? P : rn(r, P));
    case "deadline":
      return S ?? (r === void 0 ? x("the upload took too long") : rn(r, P));
    case "raced":
      return x("another launch of this session sent its settings first");
    case "not_forwarded_at_create":
      return x(un);
    case "lane_full":
      return x("the session holds as many uploaded files as it may");
    case "unavailable":
      return x("not available for this session");
    case "unauthorized":
      return x(c3t);
    case "failed":
      return x("the upload failed");
    case "aborted":
      return x("the upload was cancelled")
  }
}

function on({
  claudeMd: e,
  others: n
}) {
  if (!e) return `${n} ${O(n,"file")}`;
  return n === 0 ? "CLAUDE.md" : `CLAUDE.md and ${n} more ${O(n,"file")}`
}

function Gt({
  names: e,
  more: n
}) {
  let r = n > 0 ? `${e.join(", ")} and ${n} more` : e.join(" and ");
  return e.length + n === 1 ? `${r} is a link, so it wasn't sent` : `${r} are links, so they weren't sent`
}

function rn(e, n) {
  switch (e.verdict) {
    case "applied_before_first_ask":
    case "applied_late":
      return e.left === null ? n : x(bOn[e.left]);
    case "behind":
      return n;
    case "not_applied":
      return x("the cloud session could not apply them");
    case "stale":
      return x("the cloud session holds a different copy");
    case "not_seen":
      return x("the cloud session has not confirmed them");
    case "unreadable":
      return x("the cloud session's answer could not be read")
  }
}
var dn = {
    schema_rejected: "your settings file has errors",
    settings_too_large: "your settings file is too large",
    settings_unreadable: "your settings file could not be read"
  },
  Ne = "turned off by Anthropic for now (emergency switch)",
  Yt = "your rules don't apply on a self-hosted runner",
  ln = `not sent: ${Yt}`,
  un = "this machine has no record of sending them to this session",
  le = {
    unsupported: "not available in this version",
    not_enabled: "not enabled for this account",
    kept_on_this_machine: "you chose not to send them",
    not_decided: "not decided on this machine yet (/config, for new sessions)",
    launch_keeps_them: "this launch keeps them on this machine",
    not_sent: "not sent with this session",
    no_project_files: "not sent with this session"
  };

function zt(e) {
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
      return ln;
    case "home_unvettable":
      return "your settings folder could not be fully examined";
    case "nothing_to_send":
      return "nothing to send from this machine";
    case "rules_unreadable":
      return "a settings file here has errors"
  }
}

function v3o(e, n, r) {
  return e === void 0 ? {
    kind: "absent",
    reason: n
  } : {
    kind: "seed",
    outcome: e.outcome(),
    readBack: r
  }
}
var cn = {
  not_enabled: "not enabled for this account",
  switched_off: "switched off on this machine",
  attach_failed: "could not be sent from this machine"
};

function k3o(e) {
  if (e.kind === "pending") return Te;
  if (e.kind === "absent") return x(cn[e.reason]);
  let {
    state: n
  } = e;
  if (n.muted) return x(Ne);
  if (!n.settled || n.answerPending) return Te;
  switch (n.admission) {
    case "flag_off":
      return x("not enabled for this account");
    case "opted_out":
      return x("you chose not to send them");
    case "no_consent":
      return x(fn(n.source));
    case "admitted":
      return Vt(n)
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
      return Ne;
    case "untrusted_store":
      return "the saved answer here could be changed by this session; run /cloud-plugins to decide for it";
    case void 0:
    case "undecided":
    case "stored":
    case "decided":
      return "run /cloud-plugins to send them"
  }
}

function Vt(e) {
  let n = xer(e.notice);
  if (n !== void 0) return x(pn[n]);
  return e.notice === void 0 && e.gaveUp !== void 0 ? x(fn(e.gaveUp)) : Oe
}
var pn = {
  refused_by_worker: "this cloud session does not take plugins",
  not_applied: "the cloud session did not accept them",
  none_to_send: "no plugins to send from this machine",
  not_confirmed: "sent, not confirmed by the session",
  not_installed: "they could not be installed there",
  some_not_installed: "some could not be installed there"
};

function E3o(e, n) {
  let r = e.directory_sync;
  return {
    projectFiles: x(Se(r.state === "stopped" ? "stopped" : "off", r.reason, {
      fromUpload: r.started_from_upload === !0
    }, n)),
    settings: sn(e.settings),
    plugins: sn(e.plugins),
    ...qt(r),
    ...e.repository_trust !== void 0 && {
      repositoryTrust: e.repository_trust
    }
  }
}

function qt(e) {
  let n = OVr(e.state === "armed" ? {
    state: "armed",
    direction: e.direction ?? "pending",
    firstUpload: e.first_upload === void 0 ? null : e.first_upload === "landed" ? "landed" : "pending"
  } : {
    state: e.state
  });
  return n === void 0 ? {} : {
    whileClosed: n
  }
}

function sn(e) {
  if (e === void 0) return x("not enabled for this launch");
  if (e.state === "forwarded") return Oe;
  return x(e.reason !== void 0 && Zt(e.reason) ? hn[e.reason] : "not sent from this machine")
}

function Zt(e) {
  return Object.hasOwn(hn, e)
}
var hn = {
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
  muted: Ne,
  too_slow: "preparing them took too long",
  no_project_files: le.no_project_files,
  self_hosted_runner: ln,
  home_unvettable: "your settings folder could not be fully examined",
  aborted: "the upload was cancelled",
  deadline: "the upload took too long",
  raced: "another launch of this session sent its settings first",
  not_forwarded_at_create: un,
  lane_full: "the session holds as many uploaded files as it may",
  unavailable: "not available for this session",
  unauthorized: c3t,
  failed: "the upload failed",
  ...dn,
  ...pn,
  unreadable: "your plugin choices here could not be read",
  could_not_send: "they could not be sent this time"
};
export {
  uLe,
  p3o,
  Gwt,
  f3o,
  Itt,
  CGt,
  Aer,
  RVr,
  xer,
  AVr,
  qbn,
  xVr,
  Per,
  PVr,
  TCe,
  Oer,
  m3o,
  Ier,
  Mer,
  g3o,
  h3o,
  y3o,
  _3o,
  OVr,
  b3o,
  Kbn,
  S3o,
  w3o,
  v3o,
  k3o,
  E3o
};
