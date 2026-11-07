// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  d,
  K,
  qt
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  Et,
  Wd
} from "B:/~BUN/root/chunk-2f1svh63.js";
import {
  Wr,
  Fzn,
  Rte,
  hbt,
  Bzn,
  dj,
  In,
  eo,
  yZi,
  Zh,
  ST,
  Xie,
  dm,
  xte,
  ob,
  $n,
  W4,
  di,
  ky,
  Sd,
  Qn,
  KLr,
  qAe
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  eE
} from "B:/~BUN/root/chunk-vz9zea4j.js";
import {
  t,
  ee
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  fo
} from "B:/~BUN/root/chunk-46ahshhq.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  Xt
} from "B:/~BUN/root/chunk-jgwwv4gf.js";
import {
  pe
} from "B:/~BUN/root/chunk-thn0wk2x.js";
import {
  fS,
  ys
} from "B:/~BUN/root/chunk-88zb3509.js";
import {
  gs
} from "B:/~BUN/root/chunk-fkr27nhj.js";
import {
  pwe,
  wSt,
  fr,
  Pt
} from "B:/~BUN/root/chunk-1g25msn4.js";
import {
  ut
} from "B:/~BUN/root/chunk-3mm90xb6.js";
import {
  nb,
  vO
} from "B:/~BUN/root/chunk-1s0yt4vj.js";
import {
  UA
} from "B:/~BUN/root/chunk-1x03q1j7.js";
import {
  _3,
  hHn
} from "B:/~BUN/root/chunk-esnm3r09.js";
import {
  C0t
} from "B:/~BUN/root/chunk-65j4e9bn.js";
import {
  vft
} from "B:/~BUN/root/chunk-ex2shtaj.js";
import {
  Nve,
  g7r,
  Ngi,
  f2,
  Tki,
  dAn,
  zE,
  AS,
  vx,
  eu,
  iL
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  re
} from "B:/~BUN/root/chunk-xkw95p5n.js";
import {
  m1,
  gA,
  HW
} from "B:/~BUN/root/chunk-k5xd4a86.js";
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  MY
} from "B:/~BUN/root/chunk-58807hdh.js";
import {
  Jyn,
  zKr,
  GKr,
  Qyn,
  Ay,
  qKr
} from "B:/~BUN/root/chunk-zsg9mhrx.js";
import {
  e
} from "B:/~BUN/root/chunk-t16eynda.js";
import {
  zQn
} from "B:/~BUN/root/chunk-sf5pa5dd.js";
import {
  Yit,
  q6r,
  LSn,
  NSn,
  FSn
} from "B:/~BUN/root/chunk-n7pt3r9e.js";
import {
  y,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
import {
  wf
} from "B:/~BUN/root/chunk-dew5sv9w.js";
import {
  Y_
} from "B:/~BUN/root/chunk-vtghd2qd.js";
import {
  o,
  u
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
import {
  L
} from "B:/~BUN/root/chunk-5ha2avah.js";
import {
  Oe
} from "B:/~BUN/root/chunk-4qfwb3rf.js";
var ze = /^[\x21-\x7e]+$/,
  ae = /^[A-Za-z0-9._-]{1,64}$/;

function OM(r) {
  return eo === "" || Y(r, ze) ? r : Z(r)
}

function Lzt(r) {
  if (Y(r, ae)) return r;
  return Xt(eo === "" ? Et(r, 64) : Z(r))
}

function E6n(r) {
  return Y(r, ae) ? r : Z(r)
}

function Y(r, n) {
  return n.test(r) && !Rte(r) && !yZi(eo, le(r))
}

function Z(r) {
  return Wd(Et(le(r), 64)) || "\u201C\u201D"
}

function le(r) {
  return Qn(r).replace(KLr, "").trimEnd()
}
import {
  join as ue
} from "path";
async function oot(r, n, i, l) {
  let s = Object.hasOwn(i, r) ? i[r]?.installLocation : void 0;
  if (s === void 0) return n;
  let f;
  try {
    f = zE()
  } catch {
    return n
  }
  return Y_(n, (p) => qe(p, r, s, i, f, l), {
    concurrency: 8
  })
}
async function qe(r, n, i, l, s, f) {
  let p = r.source;
  if (!hbt(p)) return r;
  try {
    let c = await _3(f2(r.name, n), i, p, l, s, f, AS(i) !== void 0 ? "system" : "workspace");
    if (c.kind !== "ok") return r;
    let m = ue(c.entryPath, ".claude-plugin");
    if (!await m1(m)) return r;
    let x = ue(m, "plugin.json"),
      P = await HW(x);
    if (P === void 0) return r;
    let b = Nve(ee(gs(P)), "plugin-json", {
      pluginName: r.name,
      manifestPath: x
    });
    if (!b.ok) return r;
    let h = b.manifest,
      g = {
        ...r
      };
    if (C(g.displayName) && h.displayName !== void 0) g.displayName = h.displayName;
    if (C(g.description) && h.description !== void 0) g.description = h.description;
    if (g.author === void 0 && h.author !== void 0) g.author = h.author;
    if (C(g.homepage) && h.homepage !== void 0) g.homepage = h.homepage;
    if (C(g.repository) && h.repository !== void 0) g.repository = h.repository;
    if (C(g.license) && h.license !== void 0) g.license = h.license;
    if (!g.keywords?.length && h.keywords !== void 0) g.keywords = h.keywords;
    return g
  } catch (c) {
    return t(`Display metadata for ${f2(r.name,n)} not read from its plugin.json: ${d(c)}`), r
  }
}

function C(r) {
  return qAe(r) === void 0
}
j();

function it(We) {
  return {
    label: We,
    value: We
  }
}

function H1r(r, n, i, l) {
  let s = {};
  for (let f of r) {
    let p = i[f],
      c = O(Wr(n, f) ?? "");
    if (c === "") {
      if (p?.sensitive === !0 && Wr(l ?? {}, f) !== void 0) continue;
      if (p?.type === "number") continue;
      if (p?.required !== !0 && Wr(l ?? {}, f) === void 0) continue
    }
    if (p?.type === "number") {
      let m = Number(c);
      s[f] = Number.isNaN(m) ? c : m
    } else if (p?.type === "boolean") {
      let m = Yit(c);
      if (m !== void 0) s[f] = m
    } else s[f] = c
  }
  return s
}

function apn(r) {
  let m = S(22),
    {
      title: n,
      subtitle: i,
      configSchema: l,
      initialValues: s,
      onSave: f,
      onCancel: p
    } = r,
    c = Object.keys(l),
    x;
  if (m[0] !== l || m[1] !== s) x = () => $1r(l, s), m[0] = l, m[1] = s, m[2] = x;
  else x = m[2];
  let [P, b] = y(x), h;
  if (m[3] !== l || m[4] !== s) h = (g) => {
    let k = l[g];
    let R = T6n(k);
    if (R !== void 0) {
      return {
        type: "select",
        key: g,
        label: k?.title || g,
        options: R.map(it),
        hint: () => k?.description
      }
    }
    let A = k?.sensitive === !0;
    let v = A && Wr(s ?? {}, g) !== void 0;
    return {
      type: "text",
      key: g,
      label: k?.title || g,
      required: k?.required === !0 && !v,
      mask: A ? "*" : void 0,
      placeholder: v ? "(unchanged)" : void 0,
      validate: k?.type === "number" ? (w) => O(w) === "" || FSn.numberOfInput(O(w), k) !== void 0 ? null : FSn.numberInputHint(k) : void 0,
      hint: () => k?.description
    }
  }, m[3] = l, m[4] = s, m[5] = h;
  else h = m[5];
  let F = c.map(h);
  if (c.length === 0) {
    return null
  }
  let z;
  if (m[6] !== b) z = (yr, xr) => b((hr) => ({
    ...hr,
    [yr]: xr
  })), m[6] = b, m[7] = z;
  else z = m[7];
  let q;
  if (m[8] !== l || m[9] !== c || m[10] !== s || m[11] !== f || m[12] !== P) q = () => f(H1r(c, P, l, s)), m[8] = l, m[9] = c, m[10] = s, m[11] = f, m[12] = P, m[13] = q;
  else q = m[13];
  let Ke;
  if (m[14] !== F || m[15] !== p || m[16] !== i || m[17] !== z || m[18] !== q || m[19] !== n || m[20] !== P) Ke = e(MY, {
    title: n,
    subtitle: i,
    fields: F,
    values: P,
    onChange: z,
    onSubmit: q,
    onCancel: p,
    submitLabel: "Save configuration"
  }), m[14] = F, m[15] = p, m[16] = i, m[17] = z, m[18] = q, m[19] = n, m[20] = P, m[21] = Ke;
  else Ke = m[21];
  return Ke
}

function $1r(r, n) {
  let i = {};
  for (let l of Object.keys(r)) {
    let s = r[l],
      f = s?.sensitive === !0 ? void 0 : Wr(n ?? {}, l),
      p = T6n(s);
    if (s?.type === "boolean") {
      i[l] = String(q6r(Wr(n ?? {}, l) ?? s.default));
      continue
    }
    i[l] = p === void 0 ? f === void 0 ? "" : String(f) : [f, s?.default].find((c) => typeof c === "string" && p.includes(c)) ?? p[0] ?? ""
  }
  return i
}

function T6n(r) {
  if (r?.type === "boolean") return ot;
  return r?.type === "string" && r.multiple !== !0 ? r.options : void 0
}
var ot = ["true", "false"];

function O(r) {
  return (r.split(/\r\n|\r|\n/, 1)[0] ?? "").trim()
}

function lpn(r, n) {
  return r.map((i) => {
    let l = n[i.marketplaceName]?.source;
    return l && Zh(l) ? {
      ...i,
      fromPluginDirectory: !0
    } : i
  })
}
var I = (r) => r.fromPluginDirectory === !0;

function st(r, n) {
  let i = (f) => r[f] ?? n.find((p) => p.entry[f] !== void 0)?.entry[f],
    l = ["displayName", "description", "author", "homepage", "category", "tags", "keywords", "relevance"],
    s = {};
  for (let f of l) {
    let p = i(f);
    if (p !== void 0) Object.assign(s, {
      [f]: p
    })
  }
  return s
}

function u3s(r, n) {
  let i = (c) => ST(c.entry.source, Xie(n[c.marketplaceName]?.source)),
    l = (c) => I(c) && vft(c.entry.name),
    s = new Set;
  for (let c of r)
    if (l(c)) {
      let m = i(c);
      if (m !== void 0) s.add(m)
    } if (s.size === 0) return r;
  let f = new Map;
  for (let c of r) {
    if (I(c) || !Sd(c.marketplaceName)) continue;
    if (dAn(c.marketplaceName, c.entry)) continue;
    let m = i(c);
    if (m !== void 0 && s.has(m)) f.set(m, [...f.get(m) ?? [], c])
  }
  let p = [];
  for (let c of r) {
    let m = i(c),
      x = m === void 0 ? void 0 : f.get(m);
    if (!I(c)) {
      if (!x?.includes(c)) p.push(c);
      continue
    }
    if (x === void 0 || !l(c)) {
      p.push(c);
      continue
    }
    p.push({
      ...c,
      entry: {
        ...c.entry,
        ...st(c.entry, x)
      },
      isInstalled: c.isInstalled || x.some((P) => P.isInstalled),
      alsoListedIn: L(x.map((P) => P.marketplaceName)),
      installCountIds: x.map((P) => P.pluginId)
    })
  }
  return p
}
async function C6n(r, n) {
  let i = new Set,
    l = eu().plugins;
  for (let [s, f] of Object.entries(l)) {
    if ($n(s).marketplace !== In || !f.some(iL)) continue;
    let p = await vx(s, n),
      c = p && ST(p.entry.source, Xie(r[In]?.source));
    if (c) i.add(c)
  }
  return i
}

function R6n(r, n, i = new Set) {
  let l = (c) => ST(c.entry.source, Xie(n[c.marketplaceName]?.source)),
    s = new Set(i),
    f = new Set,
    p = new Set;
  for (let c of r) {
    let m = c.isInstalled ? l(c) : void 0;
    if (m === void 0) continue;
    if (I(c)) s.add(m), f.add(m);
    else if (Sd(c.marketplaceName)) p.add(m)
  }
  if (s.size === 0 && p.size === 0) return r;
  return r.filter((c) => {
    if (c.isInstalled) return !0;
    let m = l(c);
    if (m === void 0) return !0;
    if (I(c)) return !p.has(m) && !f.has(m);
    return !Sd(c.marketplaceName) || !s.has(m)
  })
}

function U1r(r, n) {
  if (!n) return;
  let i = n.get(r.pluginId);
  for (let l of r.installCountIds ?? []) {
    let s = n.get(l);
    if (s !== void 0 && (i === void 0 || s > i)) i = s
  }
  return i
}

function ULo(r, n) {
  let i = new Map(r.map((l, s) => [l, s]));
  r.sort((l, s) => {
    let f = U1r(l, n) ?? 0,
      p = U1r(s, n) ?? 0;
    if (f !== p) return p - f;
    let c = I(l),
      m = I(s);
    if (c !== m) return c ? -1 : 1;
    return c ? (i.get(l) ?? 0) - (i.get(s) ?? 0) : l.entry.name.localeCompare(s.entry.name)
  })
}

function A6n(r) {
  return I(r) ? eo : E6n(r.marketplaceName)
}

function x6n(r) {
  let n = r.alsoListedIn ?? [];
  if (n.length === 0) return;
  let i = new Map(BLo(r).map((l) => [l.marketplace, l.name]));
  return `Also listed in ${n.map((l)=>{let s=i.get(l);return s===void 0?l:`${l} as ${s}`}).join(", ")}`
}

function BLo(r) {
  {
    let n = [];
    for (let i of r.installCountIds ?? []) {
      let {
        name: l,
        marketplace: s
      } = $n(i);
      if (s !== void 0 && l !== r.entry.name) n.push({
        marketplace: s,
        name: l
      })
    }
    return n
  }
  return []
}

function f3s(r) {
  let n = (i) => i === wf ? "official" : i;
  return [I(r) ? eo : r.marketplaceName, ...(r.alsoListedIn ?? []).map(n)].join(" + ")
}

function xe(r) {
  return /^[A-Za-z0-9._/@:~-]{1,120}$/.test(r) ? r : Wd(Et(r, 120))
}

function P6n(r) {
  let n = r.entry.source;
  if (typeof n !== "object" || n === null) return;
  let i;
  if (n.source === "github") i = n.repo;
  else if (n.source === "url" || n.source === "git-subdir") i = n.url;
  if (i === void 0) return;
  let l = i;
  try {
    let f = new URL(i);
    l = fo(f.hostname) ? f.pathname.replace(/^\/+/, "") : `${f.host}${f.pathname}`
  } catch {}
  if (l = xe(l.replace(/\.git$/, "").replace(/\/+$/, "")), l === "") return;
  let s = n.source === "git-subdir" ? xe(n.path) : "";
  return s === "" ? l : `${l} (${s})`
}

function p3s(r) {
  let n = new Map,
    i;
  for (let s of r) {
    if (I(s)) i = s.marketplaceName;
    for (let f of [s.marketplaceName, ...s.alsoListedIn ?? []]) n.set(f, (n.get(f) ?? 0) + 1)
  }
  let l = [...n].map(([s, f]) => ({
    marketplace: s,
    label: s === i ? eo : E6n(s),
    count: f
  })).sort((s, f) => {
    if (s.marketplace === i) return -1;
    if (f.marketplace === i) return 1;
    return f.count - s.count || s.label.localeCompare(f.label)
  });
  return [{
    marketplace: null,
    label: "All",
    count: r.length
  }, ...l]
}
var B1r = 4;

function m3s(r, n) {
  let i = r.slice(0, B1r),
    l = r.find((s) => s.marketplace === n);
  if (l && !i.includes(l)) i[i.length - 1] = l;
  return i
}

function h3s(r, n, i) {
  return [r.marketplaceName, ...r.alsoListedIn ?? []].some((l) => {
    if (!n.has(l)) return !1;
    if (l === wf) return !0;
    let s = i[l]?.source;
    return s !== void 0 && hHn(l, s)
  })
}

function g3s(r, n) {
  return n === null || r.marketplaceName === n || (r.alsoListedIn?.includes(n) ?? !1)
}

function te(r, n, i) {
  if (O6n(r)) return !1;
  if (r.source === n) return !0;
  return "plugin" in r && r.plugin === i && ob(r.source) === ob(n)
}

function O6n(r) {
  return "orphan" in r && r.orphan === !0
}

function j1r(r, n) {
  return te(r, n.source, n.name)
}

function W1r(r, n) {
  return te(r, n.source, n.name)
}

function at(r, n, i) {
  if (xte(r.source)) return !1;
  if (r.source === n) return !0;
  let l = di(r.source);
  return "plugin" in r && r.plugin === i && (l === void 0 || l === di(n))
}

function eUe(r, n, i) {
  return dm(di(n)) ? te(r, n, i) : at(r, n, i) && !O6n(r)
}

function jLo(r, n) {
  let i = n.filter((m) => eUe(r, m.source, m.name)),
    l = i.length === 1 ? i[0] : i.find((m) => ky(m.source, r.source));
  if (l) return {
    name: l.name,
    marketplace: di(l.source)
  };
  let [s] = i;
  if (s !== void 0) return {
    name: s.name,
    marketplace: void 0
  };
  let {
    name: f,
    marketplace: p
  } = W4(r.source);
  if (p !== void 0) return {
    name: f,
    marketplace: p
  };
  let c = ob(r.source);
  return {
    name: c !== void 0 && "plugin" in r && r.plugin ? r.plugin : f,
    marketplace: c
  }
}
var he = Oe(nb(), 1);
import {
  readFile as lt,
  stat as ct
} from "fs/promises";
import {
  dirname as G,
  join as V,
  relative as D,
  resolve as ft
} from "path";
async function dpn(r, n = {}) {
  let i = [],
    l = await pt(r);
  if (!l.ok) return {
    ok: !1,
    error: l.error,
    warnings: i
  };
  let {
    pluginRoot: s,
    manifestPath: f,
    manifest: p
  } = l, c = typeof p.name === "string" && p.name.length > 0 ? await dt(s, p.name) : void 0, m = await Qyn(f, c !== void 0 && Fzn(c.marketplaceName) ? {
    kind: "anthropic"
  } : {
    kind: "alone"
  }), x = [m];
  if (m.success) x.push(...await qKr(s));
  for (let v of x)
    for (let w of v.warnings) i.push(`${D(pe(),v.filePath)}: ${w.message}`);
  let P = x.find((v) => !v.success);
  if (P) {
    let v = P.errors.map((w) => `  ${w.path}: ${w.message}`).join(`
`);
    return {
      ok: !1,
      error: `Plugin validation failed for ${P.filePath}:
${v}`,
      warnings: i
    }
  }
  let b = p.name;
  if (typeof b !== "string" || b.length === 0) return {
    ok: !1,
    error: `plugin.json at ${f} has no "name" field`,
    warnings: i
  };
  let h = typeof p.version === "string" && p.version.length > 0 ? p.version : void 0,
    g, k;
  if (h !== void 0) g = h, k = "plugin.json";
  else if (c?.entry.version) g = c.entry.version, k = "marketplace entry";
  else return {
    ok: !1,
    error: `No version to tag. Set "version" in ${D(pe(),f)}` + (c ? ` or in the marketplace entry at ${D(pe(),c.path)} plugins[${c.entryIndex}].` : ".") + " Tags are only used for dependency version constraints, which require an explicit semver \u2014 the git-SHA fallback does not need a tag.",
    warnings: i
  };
  if (c?.entry.version && h !== void 0 && c.entry.version !== h) return {
    ok: !1,
    error: `Version mismatch: plugin.json says "${h}" but ${D(pe(),c.path)} plugins[${c.entryIndex}].version says "${c.entry.version}". plugin.json wins at install time, so update the marketplace entry to "${h}" (or remove it) before tagging.`,
    warnings: i
  };
  if (he.valid(g) === null) return {
    ok: !1,
    error: `Version "${g}" is not valid semver. Dependency resolution (resolveVersionRange) ignores tags whose suffix doesn't parse as semver, so this tag would never be selected.`,
    warnings: i
  };
  let R = Tki(b, g);
  if (!eE(R)) return {
    ok: !1,
    error: `Computed tag name "${R}" is not a valid git ref. Check the plugin name for characters git rejects (spaces, ~, ^, :, ?, *, [, \\, or sequences like .., @{, //).`,
    warnings: i
  };
  let A = fr(s);
  if (A === null) return {
    ok: !1,
    error: `${s} is not inside a git repository. Dependency tags are resolved via git ls-remote, so the plugin must live in a git repo.`,
    warnings: i
  };
  if (!n.force) {
    let v = await mt(A, c ? [s, c.path] : [s]);
    if (v.length > 0) {
      let w = v.slice(0, 5).join(`
  `),
        F = v.length > 5 ? `
  \u2026and ${v.length-5} more` : "";
      return {
        ok: !1,
        error: `Uncommitted changes affecting this release \u2014 commit them first so the tag points at the version you intend to release (or use --force):
  ${w}${F}`,
        warnings: i
      }
    }
  }
  if (!n.force) {
    if (await gt(A, R)) return {
      ok: !1,
      error: `Tag "${R}" already exists locally. Bump the version in ${k}, or re-run with --force to move the tag.`,
      warnings: i
    }
  }
  return {
    ok: !0,
    warnings: i,
    plan: {
      pluginName: b,
      version: g,
      versionFrom: k,
      tag: R,
      pluginRoot: s,
      gitRoot: A,
      marketplace: c ? {
        path: c.path,
        entryIndex: c.entryIndex,
        entryVersion: c.entry.version
      } : void 0
    }
  }
}
async function cpn(r, n) {
  let i = ys(void 0, {
      userLocale: !0
    }),
    l = await C0t(r.gitRoot, yt, {
      envPins: {},
      base: i,
      repository: vO(r.gitRoot)
    });
  if (l === null) t(`[plugin tag] could not read the user's git signing configuration; ${r.tag} is created unsigned`, {
    level: "warn"
  });
  let s = ["-C", r.gitRoot, ...[...xt, ...l ?? []].flatMap(([m, x]) => ["-c", `${m}=${x}`]), "tag"];
  if (n.force) s.push("-f");
  s.push("-a", "-m", Nzt(r, n.message), "--", r.tag, "HEAD");
  let f = await ut(Pt(), s, {
    env: i,
    useCwd: !0
  });
  if (f.code !== 0) return {
    ok: !1,
    error: `git tag failed (exit ${f.code}): ${f.stderr.trim()||f.stdout.trim()}`
  };
  if (!n.push) return {
    ok: !0,
    pushed: !1
  };
  if (!/^[A-Za-z0-9][A-Za-z0-9._/-]*$/.test(n.remote)) return {
    ok: !1,
    error: `Tag created locally but not pushed: "${n.remote}" is not a valid remote name.`
  };
  let p = ["-C", r.gitRoot, "push"];
  if (n.force) p.push("--force");
  p.push(n.remote, `refs/tags/${r.tag}`);
  let c = await ut("git", p, {
    allowRepoGitHooks: !0,
    allowGitTerminalPrompt: n.allowGitTerminalPrompt,
    useCwd: !0
  });
  if (c.code !== 0) return {
    ok: !1,
    error: `Tag created locally but push failed (exit ${c.code}): ${c.stderr.trim()||c.stdout.trim()}`
  };
  return {
    ok: !0,
    pushed: !0
  }
}

function Nzt(r, n) {
  return n === void 0 ? `${r.pluginName} ${r.version}` : n.replaceAll("%s", r.version)
}
async function pt(r) {
  let n = ft(r),
    i;
  try {
    i = await ct(n)
  } catch (s) {
    return {
      ok: !1,
      error: K(s) ? `Path not found: ${n}` : `Cannot stat ${n}: ${d(s)}`
    }
  }
  let l = i.isFile() ? [
    [G(G(n)), n]
  ] : [
    [n, V(n, ".claude-plugin", "plugin.json")],
    [G(n), V(n, "plugin.json")]
  ];
  for (let [s, f] of l) {
    let p;
    try {
      p = await lt(f, {
        encoding: "utf-8"
      })
    } catch (m) {
      if (K(m)) continue;
      return {
        ok: !1,
        error: `Cannot read ${f}: ${d(m)}`
      }
    }
    let c;
    try {
      c = ee(gs(p))
    } catch (m) {
      return {
        ok: !1,
        error: `Invalid JSON in ${f}: ${d(m)}`
      }
    }
    return {
      ok: !0,
      pluginRoot: s,
      manifestPath: f,
      manifest: typeof c === "object" && c !== null ? c : {}
    }
  }
  return {
    ok: !1,
    error: `No plugin manifest found. Expected ${V(n,".claude-plugin","plugin.json")}.`
  }
}
async function dt(r, n) {
  let i = fr(r) ?? void 0,
    l = r;
  for (;;) {
    let s = V(l, ".claude-plugin", "marketplace.json"),
      f = await GKr(s);
    if (f) {
      for (let [c, m] of f.plugins.entries())
        if (zKr(m, l, {
            root: r,
            name: n
          })) return {
          path: s,
          marketplaceName: f.name,
          entryIndex: c,
          entry: m
        }
    }
    if (l === i) return;
    let p = G(l);
    if (p === l) return;
    l = p
  }
}
async function mt(r, n) {
  let i = n.map((s) => D(r, s) || "."),
    l = await ut(Pt(), ["-C", r, "--no-optional-locks", "status", "--porcelain", fS, "--", ...i], {
      env: ys(void 0, {
        userLocale: !0
      }),
      useCwd: !0
    });
  if (l.code !== 0) return [];
  return l.stdout.split(`
`).map((s) => s.slice(3).trim()).filter((s) => s.length > 0)
}
async function gt(r, n) {
  let i = await ut(Pt(), ["-C", r, "tag", "-l", "--", n], {
    env: ys(),
    useCwd: !0
  });
  return i.code === 0 && i.stdout.trim() === n
}
var yt = "^(tag\\.(gpgsign|forcesignannotated)|user\\.signingkey|gpg\\.(format|program)|gpg\\.(openpgp|x509|ssh)\\.program|gpg\\.ssh\\.defaultkeycommand)$",
  xt = [
    ["tag.gpgSign", "false"],
    ["tag.forceSignAnnotated", "false"],
    ["gpg.format", "openpgp"],
    ["gpg.program", "gpg"],
    ["gpg.x509.program", "gpgsm"],
    ["gpg.ssh.program", "ssh-keygen"],
    ["gpg.ssh.defaultKeyCommand", ""]
  ];
var M = "<owner>/<repo>";
var Pe = ["Validate the folder that holds its marketplace.json", `to have ${M} filled in,`, "and the name its marketplace lists it under."].join(" ");
import {
  join as bt
} from "path";

function ke({
  name: r,
  listing: n
}) {
  let i = n !== void 0 && n.entry === void 0;
  return [`This README has no line that installs "${r}"`, "from a marketplace.", ...i ? [bt(n.root, ".claude-plugin", "marketplace.json"), "has no entry for it. Add one."] : [], `${i?"Then add":"Add"} the install line,`, "which works in one step on Claude Code 2.1.275 or later."].join(" ")
}
var ve = 128;

function T(r, n, i) {
  let l = r.get(n) ?? i(n);
  return r.set(n, l), l
}
var be = [`In it, replace ${M}`, "with the repository that holds the marketplace."].join(" ");
var U = 1024;
import {
  join as we
} from "path";
var Ee = (r) => pwe(r) ? "" : wSt(r, "remote", "origin", "pushurl") || wSt(r, "remote", "origin", "url") || "";

function Ie({
  host: r,
  owner: n,
  name: i
}) {
  let l = fo(r),
    s = r.includes(":");
  return l ? `${n}/${i}` : s ? void 0 : `https://${r}/${n}/${i}.git`
}
async function Re(r) {
  let n = we(r, ".git"),
    l = await m1(n) ? await HW(we(n, "config")).catch(() => {
      return
    }) : void 0,
    s = Ee(l ?? ""),
    p = /^(https|ssh):\/\//i.test(s) || !s.includes("://") ? UA(s) : null;
  return p === null ? void 0 : Ie(p)
}

function H(r) {
  let n = r.split("").map((i) => !"`'\"()<>[]*.,;:!?".includes(i));
  return r.slice(n.findIndex(Boolean), n.findLastIndex(Boolean) + 1)
}
var ne = (r, n) => r.byName.has(n) || r.bySource.has(H(n));
import {
  readdir as Gt
} from "fs/promises";
import {
  join as je
} from "path";
var Se = (r) => r.some((n, i) => n.startsWith("--marketplace=") ? /^--marketplace=[^<>]+$/.test(n) : n === "--marketplace" && /^[^-<>][^<>]*$/.test(r[i + 1] ?? ""));
var Ae = (r) => r.split(/\s+/).map(H).filter((n) => n !== "");
var Ne = Object.freeze(["--marketplace", "--scope", "-s", "--config", "--accept-command", "--registry"]);
var Me = (r) => r.find((n, i) => !n.startsWith("-") && !Ne.includes(r[i - 1] ?? "")) ?? "";

function Ce(r) {
  let n = r.find((s) => s.lastIndexOf("@") > 0) ?? "",
    i = n.indexOf("@");
  return i > 0 && n.length > i + 1 && !/[<>]/.test(n) ? n.slice(0, i) : ""
}

function Le(r) {
  let n = r.split(`
`).flatMap((i) => i.split(/plugin[ \t]+(?:install|i)[ \t]+/).slice(1)).map(Ae);
  return {
    bySource: new Set(n.filter(Se).map(Me)),
    byName: new Set(n.map(Ce))
  }
}
async function oe(r) {
  let n = (await Gt(r, {
      withFileTypes: !0
    }).catch(() => [])).filter((f) => f.isFile()).map((f) => f.name).filter((f) => /^readme(\.[a-z0-9.-]+)?$/i.test(f)),
    i = n.find((f) => f.toLowerCase() === "readme.md") ?? n.toSorted()[0],
    l = i === void 0 ? void 0 : await HW(je(r, i)).catch(() => {
      return
    });
  return i !== void 0 && l !== void 0 ? {
    file: je(r, i),
    installs: Le(l)
  } : void 0
}
async function De({
  root: r,
  name: n,
  listing: i
}, l) {
  let s = await T(l.readmes, r, oe),
    f = i?.entry !== void 0 && !Jyn(i.root, r),
    p = f && i.marketplace.plugins.length === 1,
    c = s !== void 0 && !ne(s.installs, n),
    x = f && (p || c) ? await T(l.readmes, i.root, oe) : void 0;
  return [s, x].some((b) => b !== void 0 && ne(b.installs, n)) ? void 0 : s ?? (p ? x : void 0)
}
async function $e(r, n) {
  let {
    name: i,
    listing: l
  } = r, f = i.length <= ve && dj(i) ? await De(r, n) : void 0;
  if (f === void 0) return [];
  let p = l === void 0,
    c = p ? void 0 : await T(n.sources, l.root, Re),
    x = p ? [Pe] : c !== void 0 ? [] : [be];
  return [{
    file: Ay(f.file, U),
    message: Ay([ke(r), ...x].join(" "), U),
    installLine: Ay(zQn({
      plugin: i,
      marketplaceSource: c ?? M
    }), U)
  }]
}

function upn(r) {
  return r.length === 0 ? [] : [`${re.info} Advice (does not change the verdict):`, "", ...r.flatMap((i) => [`  ${re.pointer} ${i.file}: ${i.message}`, `      ${i.installLine}`]), ""]
}
var Te = (r, n) => r.reduce(async (i, l) => [...await i, ...await $e(l, n)], Promise.resolve([]));
import {
  basename as Qt,
  dirname as Ue,
  resolve as er
} from "path";
import {
  join as Fe
} from "path";
async function B(r, n) {
  let i = Fe(r, ".claude-plugin");
  return await m1(i) ? await HW(Fe(i, n)) ?? "" : ""
}
async function W(r) {
  try {
    let n = u({
      name: o()
    }).safeParse(ee(gs(await B(r, "plugin.json"))));
    return n.success ? n.data.name : void 0
  } catch {
    return
  }
}
import {
  resolve as ie
} from "path";
var _e = 64;
async function Ge(r) {
  try {
    let n = Bzn().safeParse(ee(gs(await B(r, "marketplace.json"))));
    return n.success ? n.data : void 0
  } catch {
    return
  }
}
async function Ve(r) {
  let n = await Ge(r),
    i = await Promise.all((n?.plugins ?? []).filter((p) => typeof p.source === "string").slice(0, _e).map(async (p) => {
      let {
        source: c
      } = p;
      return n !== void 0 && typeof c === "string" && !c.split(/[\\/]/).includes("..") && await gA(r, ie(r, c)) === "ok" ? [{
        root: ie(r, c),
        name: p.name,
        listing: {
          root: r,
          marketplace: n,
          entry: p
        }
      }] : []
    })),
    l = await W(r) ?? "",
    s = n?.plugins.find((p) => zKr(p, r, {
      root: r,
      name: l
    }));
  return n !== void 0 && !i.flat().some((p) => p.root === ie(r)) ? [...i.flat(), {
    root: r,
    name: s?.name ?? l,
    listing: {
      root: r,
      marketplace: n,
      entry: s
    }
  }] : i.flat()
}
async function He(r, n, i) {
  let l = Ue(n?.filePath ?? ""),
    s = Ue(l),
    f = Qt(l) === ".claude-plugin" && [n, ...i].every((x) => x?.errors.length === 0),
    p = f && n?.fileType === "plugin",
    m = f && n?.fileType === "marketplace" && Jyn(er(r), s) ? await Ve(s) : [];
  return p ? [{
    root: s,
    name: await W(s) ?? "",
    listing: void 0
  }] : m
}

function Be(r) {
  return qt(r) ? t(`No install advice: ${d(r)}`) : a(r), []
}
var fpn = (r, n, i) => He(r, n, i).then((l) => Te(l, {
  readmes: new Map,
  sources: new Map
})).catch(Be);
var Fzt = 200;
var pr = "(text shaped like a digest)",
  se = String.raw`[^A-Za-z0-9+/=\-\n:$,]`,
  dr = new RegExp(se, "gu"),
  mr = new RegExp([...g7r, ...Array.from({
    length: Ngi
  }, () => "[A-Za-z0-9+/]")].join(`${se}*`) + `(?:${se}*=)?(?![A-Za-z0-9+/])`, "gu");

function Vkt(r, n) {
  return r.replaceAll(mr, (i) => i.replaceAll(dr, "") === n ? i : pr)
}
export {
  OM,
  Lzt,
  E6n,
  oot,
  H1r,
  apn,
  $1r,
  T6n,
  lpn,
  u3s,
  C6n,
  R6n,
  U1r,
  ULo,
  A6n,
  x6n,
  BLo,
  f3s,
  P6n,
  p3s,
  B1r,
  m3s,
  h3s,
  g3s,
  O6n,
  j1r,
  W1r,
  eUe,
  jLo,
  dpn,
  cpn,
  Nzt,
  upn,
  fpn,
  Fzt,
  Vkt
};
