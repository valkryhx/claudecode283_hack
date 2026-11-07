// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { d, K, qt } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { Et, Wd } from "B:/~BUN/root/chunk-2f1svh63.js";
import { Wr, Fzn, Rte, hbt, Bzn, dj, In, eo, yZi, Zh, ST, Xie, dm, xte, ob, $n, W4, di, ky, Sd, Qn, KLr, qAe } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { eE } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { t, ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { fo } from "B:/~BUN/root/chunk-46ahshhq.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { Xt } from "B:/~BUN/root/chunk-jgwwv4gf.js";
import { pe } from "B:/~BUN/root/chunk-thn0wk2x.js";
import { fS, ys } from "B:/~BUN/root/chunk-88zb3509.js";
import { gs } from "B:/~BUN/root/chunk-fkr27nhj.js";
import { pwe, wSt, fr, Pt } from "B:/~BUN/root/chunk-1g25msn4.js";
import { ut } from "B:/~BUN/root/chunk-3mm90xb6.js";
import { nb, vO } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { UA } from "B:/~BUN/root/chunk-1x03q1j7.js";
import { _3, hHn } from "B:/~BUN/root/chunk-esnm3r09.js";
import { C0t } from "B:/~BUN/root/chunk-65j4e9bn.js";
import { vft } from "B:/~BUN/root/chunk-ex2shtaj.js";
import { Nve, g7r, Ngi as length, f2, Tki, dAn, zE, AS, vx, eu, iL } from "B:/~BUN/root/chunk-27h4st9h.js";
import { re } from "B:/~BUN/root/chunk-xkw95p5n.js";
import { m1, gA, HW } from "B:/~BUN/root/chunk-k5xd4a86.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { MY } from "B:/~BUN/root/chunk-58807hdh.js";
import { Jyn, zKr, GKr, Qyn, Ay, qKr } from "B:/~BUN/root/chunk-zsg9mhrx.js";
import { e } from "B:/~BUN/root/chunk-t16eynda.js";
import { zQn } from "B:/~BUN/root/chunk-sf5pa5dd.js";
import { Yit, q6r, LSn, NSn, FSn } from "B:/~BUN/root/chunk-n7pt3r9e.js";
import { y, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { wf } from "B:/~BUN/root/chunk-dew5sv9w.js";
import { Y_ } from "B:/~BUN/root/chunk-vtghd2qd.js";
import { o, u } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { L } from "B:/~BUN/root/chunk-5ha2avah.js";
import { Oe } from "B:/~BUN/root/chunk-4qfwb3rf.js";
var ze = /^[\x21-\x7e]+$/,
  ae = /^[A-Za-z0-9._-]{1,64}$/;
function OM(r) {
  return eo === "" || Y(r, ze) ? r : Z(r);
}
function Lzt(r) {
  if (Y(r, ae)) return r;
  return Xt(eo === "" ? Et(r, 64) : Z(r));
}
function E6n(r) {
  return Y(r, ae) ? r : Z(r);
}
function Y(r, n) {
  return n.test(r) && !Rte(r) && !yZi(eo, le(r));
}
function Z(r) {
  return Wd(Et(le(r), 64)) || "\u201C\u201D";
}
function le(r) {
  return Qn(r).replace(KLr, "").trimEnd();
}
import { join as ue } from "path";
async function oot(r, n, i, l) {
  let s = Object.hasOwn(i, r) ? i[r]?.installLocation : void 0;
  if (s === void 0) return n;
  let f;
  try {
    f = zE();
  } catch {
    return n;
  }
  return Y_(n, p => qe(p, r, s, i, f, l), {
    concurrency: 8
  });
}
async function qe(r, n, i, l, s, f) {
  let source = r.source;
  if (!hbt(source)) return r;
  try {
    let c = await _3(f2(r.name, n), i, source, l, s, f, AS(i) !== void 0 ? "system" : "workspace");
    if (c.kind !== "ok") return r;
    let m = ue(c.entryPath, ".claude-plugin");
    if (!(await m1(m))) return r;
    let manifestPath = ue(m, "plugin.json"),
      P = await HW(manifestPath);
    if (P === void 0) return r;
    let b = Nve(ee(gs(P)), "plugin-json", {
      pluginName: r.name,
      manifestPath: manifestPath
    });
    if (!b.ok) return r;
    let manifest = b.manifest,
      g = {
        ...r
      };
    if (C(g.displayName) && manifest.displayName !== void 0) g.displayName = manifest.displayName;
    if (C(g.description) && manifest.description !== void 0) g.description = manifest.description;
    if (g.author === void 0 && manifest.author !== void 0) g.author = manifest.author;
    if (C(g.homepage) && manifest.homepage !== void 0) g.homepage = manifest.homepage;
    if (C(g.repository) && manifest.repository !== void 0) g.repository = manifest.repository;
    if (C(g.license) && manifest.license !== void 0) g.license = manifest.license;
    if (!g.keywords?.length && manifest.keywords !== void 0) g.keywords = manifest.keywords;
    return g;
  } catch (error) {
    return t(`Display metadata for ${f2(r.name, n)} not read from its plugin.json: ${d(error)}`), r;
  }
}
function C(r) {
  return qAe(r) === void 0;
}
j();
function it(We) {
  return {
    label: We,
    value: We
  };
}
function H1r(r, n, i, l) {
  let s = {};
  for (let f of r) {
    let p = i[f],
      c = O(Wr(n, f) ?? "");
    if (c === "") {
      if (p?.sensitive === !0 && Wr(l ?? {}, f) !== void 0) continue;
      if (p?.type === "number") continue;
      if (p?.required !== !0 && Wr(l ?? {}, f) === void 0) continue;
    }
    if (p?.type === "number") {
      let m = Number(c);
      s[f] = Number.isNaN(m) ? c : m;
    } else if (p?.type === "boolean") {
      let m = Yit(c);
      if (m !== void 0) s[f] = m;
    } else s[f] = c;
  }
  return s;
}
function apn(r) {
  let m = S(22),
    {
      title: title,
      subtitle: subtitle,
      configSchema: configSchema,
      initialValues: initialValues,
      onSave: onSave,
      onCancel: onCancel
    } = r,
    c = Object.keys(configSchema),
    x;
  if (m[0] !== configSchema || m[1] !== initialValues) x = () => $1r(configSchema, initialValues), m[0] = configSchema, m[1] = initialValues, m[2] = x;else x = m[2];
  let [values, b] = y(x),
    h;
  if (m[3] !== configSchema || m[4] !== initialValues) h = key => {
    let k = configSchema[key];
    let R = T6n(k);
    if (R !== void 0) {
      return {
        type: "select",
        key: key,
        label: k?.title || key,
        options: R.map(it),
        hint: () => k?.description
      };
    }
    let A = k?.sensitive === !0;
    let v = A && Wr(initialValues ?? {}, key) !== void 0;
    return {
      type: "text",
      key: key,
      label: k?.title || key,
      required: k?.required === !0 && !v,
      mask: A ? "*" : void 0,
      placeholder: v ? "(unchanged)" : void 0,
      validate: k?.type === "number" ? w => O(w) === "" || FSn.numberOfInput(O(w), k) !== void 0 ? null : FSn.numberInputHint(k) : void 0,
      hint: () => k?.description
    };
  }, m[3] = configSchema, m[4] = initialValues, m[5] = h;else h = m[5];
  let fields = c.map(h);
  if (c.length === 0) {
    return null;
  }
  let onChange;
  if (m[6] !== b) onChange = (yr, xr) => b(hr => ({
    ...hr,
    [yr]: xr
  })), m[6] = b, m[7] = onChange;else onChange = m[7];
  let onSubmit;
  if (m[8] !== configSchema || m[9] !== c || m[10] !== initialValues || m[11] !== onSave || m[12] !== values) onSubmit = () => onSave(H1r(c, values, configSchema, initialValues)), m[8] = configSchema, m[9] = c, m[10] = initialValues, m[11] = onSave, m[12] = values, m[13] = onSubmit;else onSubmit = m[13];
  let Ke;
  if (m[14] !== fields || m[15] !== onCancel || m[16] !== subtitle || m[17] !== onChange || m[18] !== onSubmit || m[19] !== title || m[20] !== values) Ke = e(MY, {
    title: title,
    subtitle: subtitle,
    fields: fields,
    values: values,
    onChange: onChange,
    onSubmit: onSubmit,
    onCancel: onCancel,
    submitLabel: "Save configuration"
  }), m[14] = fields, m[15] = onCancel, m[16] = subtitle, m[17] = onChange, m[18] = onSubmit, m[19] = title, m[20] = values, m[21] = Ke;else Ke = m[21];
  return Ke;
}
function $1r(r, n) {
  let i = {};
  for (let l of Object.keys(r)) {
    let s = r[l],
      f = s?.sensitive === !0 ? void 0 : Wr(n ?? {}, l),
      p = T6n(s);
    if (s?.type === "boolean") {
      i[l] = String(q6r(Wr(n ?? {}, l) ?? s.default));
      continue;
    }
    i[l] = p === void 0 ? f === void 0 ? "" : String(f) : [f, s?.default].find(item => typeof item === "string" && p.includes(item)) ?? p[0] ?? "";
  }
  return i;
}
function T6n(r) {
  if (r?.type === "boolean") return ot;
  return r?.type === "string" && r.multiple !== !0 ? r.options : void 0;
}
var ot = ["true", "false"];
function O(r) {
  return (r.split(/\r\n|\r|\n/, 1)[0] ?? "").trim();
}
function lpn(r, n) {
  return r.map(item => {
    let l = n[item.marketplaceName]?.source;
    return l && Zh(l) ? {
      ...item,
      fromPluginDirectory: !0
    } : item;
  });
}
var I = r => r.fromPluginDirectory === !0;
function st(r, n) {
  let i = f => r[f] ?? n.find(item => item.entry[f] !== void 0)?.entry[f],
    l = ["displayName", "description", "author", "homepage", "category", "tags", "keywords", "relevance"],
    s = {};
  for (let f of l) {
    let p = i(f);
    if (p !== void 0) Object.assign(s, {
      [f]: p
    });
  }
  return s;
}
function u3s(r, n) {
  let i = c => ST(c.entry.source, Xie(n[c.marketplaceName]?.source)),
    l = c => I(c) && vft(c.entry.name),
    s = new Set();
  for (let c of r) if (l(c)) {
    let m = i(c);
    if (m !== void 0) s.add(m);
  }
  if (s.size === 0) return r;
  let f = new Map();
  for (let c of r) {
    if (I(c) || !Sd(c.marketplaceName)) continue;
    if (dAn(c.marketplaceName, c.entry)) continue;
    let m = i(c);
    if (m !== void 0 && s.has(m)) f.set(m, [...(f.get(m) ?? []), c]);
  }
  let p = [];
  for (let c of r) {
    let m = i(c),
      x = m === void 0 ? void 0 : f.get(m);
    if (!I(c)) {
      if (!x?.includes(c)) p.push(c);
      continue;
    }
    if (x === void 0 || !l(c)) {
      p.push(c);
      continue;
    }
    p.push({
      ...c,
      entry: {
        ...c.entry,
        ...st(c.entry, x)
      },
      isInstalled: c.isInstalled || x.some(item => item.isInstalled),
      alsoListedIn: L(x.map(item => item.marketplaceName)),
      installCountIds: x.map(item => item.pluginId)
    });
  }
  return p;
}
async function C6n(r, n) {
  let i = new Set(),
    plugins = eu().plugins;
  for (let [s, f] of Object.entries(plugins)) {
    if ($n(s).marketplace !== In || !f.some(iL)) continue;
    let p = await vx(s, n),
      c = p && ST(p.entry.source, Xie(r[In]?.source));
    if (c) i.add(c);
  }
  return i;
}
function R6n(r, n, i = new Set()) {
  let l = c => ST(c.entry.source, Xie(n[c.marketplaceName]?.source)),
    s = new Set(i),
    f = new Set(),
    p = new Set();
  for (let c of r) {
    let m = c.isInstalled ? l(c) : void 0;
    if (m === void 0) continue;
    if (I(c)) s.add(m), f.add(m);else if (Sd(c.marketplaceName)) p.add(m);
  }
  if (s.size === 0 && p.size === 0) return r;
  return r.filter(item => {
    if (item.isInstalled) return !0;
    let m = l(item);
    if (m === void 0) return !0;
    if (I(item)) return !p.has(m) && !f.has(m);
    return !Sd(item.marketplaceName) || !s.has(m);
  });
}
function U1r(r, n) {
  if (!n) return;
  let i = n.get(r.pluginId);
  for (let l of r.installCountIds ?? []) {
    let s = n.get(l);
    if (s !== void 0 && (i === void 0 || s > i)) i = s;
  }
  return i;
}
function ULo(r, n) {
  let i = new Map(r.map((item, index) => [item, index]));
  r.sort((itemA, itemB) => {
    let f = U1r(itemA, n) ?? 0,
      p = U1r(itemB, n) ?? 0;
    if (f !== p) return p - f;
    let c = I(itemA),
      m = I(itemB);
    if (c !== m) return c ? -1 : 1;
    return c ? (i.get(itemA) ?? 0) - (i.get(itemB) ?? 0) : itemA.entry.name.localeCompare(itemB.entry.name);
  });
}
function A6n(r) {
  return I(r) ? eo : E6n(r.marketplaceName);
}
function x6n(r) {
  let n = r.alsoListedIn ?? [];
  if (n.length === 0) return;
  let i = new Map(BLo(r).map(item => [item.marketplace, item.name]));
  return `Also listed in ${n.map(item => {
    let s = i.get(item);
    return s === void 0 ? item : `${item} as ${s}`;
  }).join(", ")}`;
}
function BLo(r) {
  {
    let n = [];
    for (let i of r.installCountIds ?? []) {
      let {
        name: name,
        marketplace: marketplace
      } = $n(i);
      if (marketplace !== void 0 && name !== r.entry.name) n.push({
        marketplace: marketplace,
        name: name
      });
    }
    return n;
  }
  return [];
}
function f3s(r) {
  let n = i => i === wf ? "official" : i;
  return [I(r) ? eo : r.marketplaceName, ...(r.alsoListedIn ?? []).map(n)].join(" + ");
}
function xe(r) {
  return /^[A-Za-z0-9._/@:~-]{1,120}$/.test(r) ? r : Wd(Et(r, 120));
}
function P6n(r) {
  let source_2 = r.entry.source;
  if (typeof source_2 !== "object" || source_2 === null) return;
  let i;
  if (source_2.source === "github") i = source_2.repo;else if (source_2.source === "url" || source_2.source === "git-subdir") i = source_2.url;
  if (i === void 0) return;
  let l = i;
  try {
    let f = new URL(i);
    l = fo(f.hostname) ? f.pathname.replace(/^\/+/, "") : `${f.host}${f.pathname}`;
  } catch {}
  if (l = xe(l.replace(/\.git$/, "").replace(/\/+$/, "")), l === "") return;
  let s = source_2.source === "git-subdir" ? xe(source_2.path) : "";
  return s === "" ? l : `${l} (${s})`;
}
function p3s(r) {
  let n = new Map(),
    i;
  for (let s of r) {
    if (I(s)) i = s.marketplaceName;
    for (let f of [s.marketplaceName, ...(s.alsoListedIn ?? [])]) n.set(f, (n.get(f) ?? 0) + 1);
  }
  let l = [...n].map(([marketplace_2, count]) => ({
    marketplace: marketplace_2,
    label: marketplace_2 === i ? eo : E6n(marketplace_2),
    count: count
  })).sort((itemA, itemB) => {
    if (itemA.marketplace === i) return -1;
    if (itemB.marketplace === i) return 1;
    return itemB.count - itemA.count || itemA.label.localeCompare(itemB.label);
  });
  return [{
    marketplace: null,
    label: "All",
    count: r.length
  }, ...l];
}
var B1r = 4;
function m3s(r, n) {
  let i = r.slice(0, B1r),
    l = r.find(item => item.marketplace === n);
  if (l && !i.includes(l)) i[i.length - 1] = l;
  return i;
}
function h3s(r, n, i) {
  return [r.marketplaceName, ...(r.alsoListedIn ?? [])].some(item => {
    if (!n.has(item)) return !1;
    if (item === wf) return !0;
    let s = i[item]?.source;
    return s !== void 0 && hHn(item, s);
  });
}
function g3s(r, n) {
  return n === null || r.marketplaceName === n || (r.alsoListedIn?.includes(n) ?? !1);
}
function te(r, n, i) {
  if (O6n(r)) return !1;
  if (r.source === n) return !0;
  return "plugin" in r && r.plugin === i && ob(r.source) === ob(n);
}
function O6n(r) {
  return "orphan" in r && r.orphan === !0;
}
function j1r(r, n) {
  return te(r, n.source, n.name);
}
function W1r(r, n) {
  return te(r, n.source, n.name);
}
function at(r, n, i) {
  if (xte(r.source)) return !1;
  if (r.source === n) return !0;
  let l = di(r.source);
  return "plugin" in r && r.plugin === i && (l === void 0 || l === di(n));
}
function eUe(r, n, i) {
  return dm(di(n)) ? te(r, n, i) : at(r, n, i) && !O6n(r);
}
function jLo(r, n) {
  let i = n.filter(item => eUe(r, item.source, item.name)),
    l = i.length === 1 ? i[0] : i.find(item => ky(item.source, r.source));
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
    name: name_2,
    marketplace: marketplace_3
  } = W4(r.source);
  if (marketplace_3 !== void 0) return {
    name: name_2,
    marketplace: marketplace_3
  };
  let marketplace_4 = ob(r.source);
  return {
    name: marketplace_4 !== void 0 && "plugin" in r && r.plugin ? r.plugin : name_2,
    marketplace: marketplace_4
  };
}
var he = Oe(nb(), 1);
import { readFile as lt, stat as ct } from "fs/promises";
import { dirname as G, join as V, relative as D, resolve as ft } from "path";
async function dpn(r, n = {}) {
  let warnings = [],
    l = await pt(r);
  if (!l.ok) return {
    ok: !1,
    error: l.error,
    warnings: warnings
  };
  let {
      pluginRoot: pluginRoot,
      manifestPath: manifestPath_2,
      manifest: manifest_2
    } = l,
    c = typeof manifest_2.name === "string" && manifest_2.name.length > 0 ? await dt(pluginRoot, manifest_2.name) : void 0,
    m = await Qyn(manifestPath_2, c !== void 0 && Fzn(c.marketplaceName) ? {
      kind: "anthropic"
    } : {
      kind: "alone"
    }),
    x = [m];
  if (m.success) x.push(...(await qKr(pluginRoot)));
  for (let v of x) for (let w of v.warnings) warnings.push(`${D(pe(), v.filePath)}: ${w.message}`);
  let P = x.find(item => !item.success);
  if (P) {
    let v = P.errors.map(item => `  ${item.path}: ${item.message}`).join(`
`);
    return {
      ok: !1,
      error: `Plugin validation failed for ${P.filePath}:
${v}`,
      warnings: warnings
    };
  }
  let pluginName = manifest_2.name;
  if (typeof pluginName !== "string" || pluginName.length === 0) return {
    ok: !1,
    error: `plugin.json at ${manifestPath_2} has no "name" field`,
    warnings: warnings
  };
  let h = typeof manifest_2.version === "string" && manifest_2.version.length > 0 ? manifest_2.version : void 0,
    version,
    versionFrom;
  if (h !== void 0) version = h, versionFrom = "plugin.json";else if (c?.entry.version) version = c.entry.version, versionFrom = "marketplace entry";else return {
    ok: !1,
    error: `No version to tag. Set "version" in ${D(pe(), manifestPath_2)}` + (c ? ` or in the marketplace entry at ${D(pe(), c.path)} plugins[${c.entryIndex}].` : ".") + " Tags are only used for dependency version constraints, which require an explicit semver \u2014 the git-SHA fallback does not need a tag.",
    warnings: warnings
  };
  if (c?.entry.version && h !== void 0 && c.entry.version !== h) return {
    ok: !1,
    error: `Version mismatch: plugin.json says "${h}" but ${D(pe(), c.path)} plugins[${c.entryIndex}].version says "${c.entry.version}". plugin.json wins at install time, so update the marketplace entry to "${h}" (or remove it) before tagging.`,
    warnings: warnings
  };
  if (he.valid(version) === null) return {
    ok: !1,
    error: `Version "${version}" is not valid semver. Dependency resolution (resolveVersionRange) ignores tags whose suffix doesn't parse as semver, so this tag would never be selected.`,
    warnings: warnings
  };
  let tag = Tki(pluginName, version);
  if (!eE(tag)) return {
    ok: !1,
    error: `Computed tag name "${tag}" is not a valid git ref. Check the plugin name for characters git rejects (spaces, ~, ^, :, ?, *, [, \\, or sequences like .., @{, //).`,
    warnings: warnings
  };
  let gitRoot = fr(pluginRoot);
  if (gitRoot === null) return {
    ok: !1,
    error: `${pluginRoot} is not inside a git repository. Dependency tags are resolved via git ls-remote, so the plugin must live in a git repo.`,
    warnings: warnings
  };
  if (!n.force) {
    let v = await mt(gitRoot, c ? [pluginRoot, c.path] : [pluginRoot]);
    if (v.length > 0) {
      let w = v.slice(0, 5).join(`
  `),
        F = v.length > 5 ? `
  \u2026and ${v.length - 5} more` : "";
      return {
        ok: !1,
        error: `Uncommitted changes affecting this release \u2014 commit them first so the tag points at the version you intend to release (or use --force):
  ${w}${F}`,
        warnings: warnings
      };
    }
  }
  if (!n.force) {
    if (await gt(gitRoot, tag)) return {
      ok: !1,
      error: `Tag "${tag}" already exists locally. Bump the version in ${versionFrom}, or re-run with --force to move the tag.`,
      warnings: warnings
    };
  }
  return {
    ok: !0,
    warnings: warnings,
    plan: {
      pluginName: pluginName,
      version: version,
      versionFrom: versionFrom,
      tag: tag,
      pluginRoot: pluginRoot,
      gitRoot: gitRoot,
      marketplace: c ? {
        path: c.path,
        entryIndex: c.entryIndex,
        entryVersion: c.entry.version
      } : void 0
    }
  };
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
  let s = ["-C", r.gitRoot, ...[...xt, ...(l ?? [])].flatMap(([m, x]) => ["-c", `${m}=${x}`]), "tag"];
  if (n.force) s.push("-f");
  s.push("-a", "-m", Nzt(r, n.message), "--", r.tag, "HEAD");
  let f = await ut(Pt(), s, {
    env: i,
    useCwd: !0
  });
  if (f.code !== 0) return {
    ok: !1,
    error: `git tag failed (exit ${f.code}): ${f.stderr.trim() || f.stdout.trim()}`
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
    error: `Tag created locally but push failed (exit ${c.code}): ${c.stderr.trim() || c.stdout.trim()}`
  };
  return {
    ok: !0,
    pushed: !0
  };
}
function Nzt(r, n) {
  return n === void 0 ? `${r.pluginName} ${r.version}` : n.replaceAll("%s", r.version);
}
async function pt(r) {
  let n = ft(r),
    i;
  try {
    i = await ct(n);
  } catch (s) {
    return {
      ok: !1,
      error: K(s) ? `Path not found: ${n}` : `Cannot stat ${n}: ${d(s)}`
    };
  }
  let l = i.isFile() ? [[G(G(n)), n]] : [[n, V(n, ".claude-plugin", "plugin.json")], [G(n), V(n, "plugin.json")]];
  for (let [pluginRoot_2, manifestPath_3] of l) {
    let p;
    try {
      p = await lt(manifestPath_3, {
        encoding: "utf-8"
      });
    } catch (m) {
      if (K(m)) continue;
      return {
        ok: !1,
        error: `Cannot read ${manifestPath_3}: ${d(m)}`
      };
    }
    let c;
    try {
      c = ee(gs(p));
    } catch (m) {
      return {
        ok: !1,
        error: `Invalid JSON in ${manifestPath_3}: ${d(m)}`
      };
    }
    return {
      ok: !0,
      pluginRoot: pluginRoot_2,
      manifestPath: manifestPath_3,
      manifest: typeof c === "object" && c !== null ? c : {}
    };
  }
  return {
    ok: !1,
    error: `No plugin manifest found. Expected ${V(n, ".claude-plugin", "plugin.json")}.`
  };
}
async function dt(root, name_3) {
  let i = fr(root) ?? void 0,
    l = root;
  for (;;) {
    let path = V(l, ".claude-plugin", "marketplace.json"),
      f = await GKr(path);
    if (f) {
      for (let [entryIndex, entry] of f.plugins.entries()) if (zKr(entry, l, {
        root: root,
        name: name_3
      })) return {
        path: path,
        marketplaceName: f.name,
        entryIndex: entryIndex,
        entry: entry
      };
    }
    if (l === i) return;
    let p = G(l);
    if (p === l) return;
    l = p;
  }
}
async function mt(r, n) {
  let i = n.map(item => D(r, item) || "."),
    l = await ut(Pt(), ["-C", r, "--no-optional-locks", "status", "--porcelain", fS, "--", ...i], {
      env: ys(void 0, {
        userLocale: !0
      }),
      useCwd: !0
    });
  if (l.code !== 0) return [];
  return l.stdout.split(`
`).map(item => item.slice(3).trim()).filter(item => item.length > 0);
}
async function gt(r, n) {
  let i = await ut(Pt(), ["-C", r, "tag", "-l", "--", n], {
    env: ys(),
    useCwd: !0
  });
  return i.code === 0 && i.stdout.trim() === n;
}
var yt = "^(tag\\.(gpgsign|forcesignannotated)|user\\.signingkey|gpg\\.(format|program)|gpg\\.(openpgp|x509|ssh)\\.program|gpg\\.ssh\\.defaultkeycommand)$",
  xt = [["tag.gpgSign", "false"], ["tag.forceSignAnnotated", "false"], ["gpg.format", "openpgp"], ["gpg.program", "gpg"], ["gpg.x509.program", "gpgsm"], ["gpg.ssh.program", "ssh-keygen"], ["gpg.ssh.defaultKeyCommand", ""]];
var M = "<owner>/<repo>";
var Pe = ["Validate the folder that holds its marketplace.json", `to have ${M} filled in,`, "and the name its marketplace lists it under."].join(" ");
import { join as bt } from "path";
function ke({
  name: name_4,
  listing: listing
}) {
  let i = listing !== void 0 && listing.entry === void 0;
  return [`This README has no line that installs "${name_4}"`, "from a marketplace.", ...(i ? [bt(listing.root, ".claude-plugin", "marketplace.json"), "has no entry for it. Add one."] : []), `${i ? "Then add" : "Add"} the install line,`, "which works in one step on Claude Code 2.1.275 or later."].join(" ");
}
var ve = 128;
function T(r, n, i) {
  let l = r.get(n) ?? i(n);
  return r.set(n, l), l;
}
var be = [`In it, replace ${M}`, "with the repository that holds the marketplace."].join(" ");
var U = 1024;
import { join as we } from "path";
var Ee = r => pwe(r) ? "" : wSt(r, "remote", "origin", "pushurl") || wSt(r, "remote", "origin", "url") || "";
function Ie({
  host: host,
  owner: owner,
  name: name_5
}) {
  let l = fo(host),
    s = host.includes(":");
  return l ? `${owner}/${name_5}` : s ? void 0 : `https://${host}/${owner}/${name_5}.git`;
}
async function Re(r) {
  let n = we(r, ".git"),
    l = (await m1(n)) ? await HW(we(n, "config")).catch(() => {
      return;
    }) : void 0,
    s = Ee(l ?? ""),
    p = /^(https|ssh):\/\//i.test(s) || !s.includes("://") ? UA(s) : null;
  return p === null ? void 0 : Ie(p);
}
function H(r) {
  let n = r.split("").map(item => !"`'\"()<>[]*.,;:!?".includes(item));
  return r.slice(n.findIndex(Boolean), n.findLastIndex(Boolean) + 1);
}
var ne = (r, n) => r.byName.has(n) || r.bySource.has(H(n));
import { readdir as Gt } from "fs/promises";
import { join as je } from "path";
var Se = r => r.some((item, index) => item.startsWith("--marketplace=") ? /^--marketplace=[^<>]+$/.test(item) : item === "--marketplace" && /^[^-<>][^<>]*$/.test(r[index + 1] ?? ""));
var Ae = r => r.split(/\s+/).map(H).filter(item => item !== "");
var Ne = Object.freeze(["--marketplace", "--scope", "-s", "--config", "--accept-command", "--registry"]);
var Me = r => r.find((item, index) => !item.startsWith("-") && !Ne.includes(r[index - 1] ?? "")) ?? "";
function Ce(r) {
  let n = r.find(item => item.lastIndexOf("@") > 0) ?? "",
    i = n.indexOf("@");
  return i > 0 && n.length > i + 1 && !/[<>]/.test(n) ? n.slice(0, i) : "";
}
function Le(r) {
  let n = r.split(`
`).flatMap(item => item.split(/plugin[ \t]+(?:install|i)[ \t]+/).slice(1)).map(Ae);
  return {
    bySource: new Set(n.filter(Se).map(Me)),
    byName: new Set(n.map(Ce))
  };
}
async function oe(r) {
  let n = (await Gt(r, {
      withFileTypes: !0
    }).catch(() => [])).filter(item => item.isFile()).map(item => item.name).filter(item => /^readme(\.[a-z0-9.-]+)?$/i.test(item)),
    i = n.find(item => item.toLowerCase() === "readme.md") ?? n.toSorted()[0],
    l = i === void 0 ? void 0 : await HW(je(r, i)).catch(() => {
      return;
    });
  return i !== void 0 && l !== void 0 ? {
    file: je(r, i),
    installs: Le(l)
  } : void 0;
}
async function De({
  root: root_2,
  name: name_6,
  listing: listing_2
}, l) {
  let s = await T(l.readmes, root_2, oe),
    f = listing_2?.entry !== void 0 && !Jyn(listing_2.root, root_2),
    p = f && listing_2.marketplace.plugins.length === 1,
    c = s !== void 0 && !ne(s.installs, name_6),
    x = f && (p || c) ? await T(l.readmes, listing_2.root, oe) : void 0;
  return [s, x].some(item => item !== void 0 && ne(item.installs, name_6)) ? void 0 : s ?? (p ? x : void 0);
}
async function $e(r, n) {
  let {
      name: i,
      listing: listing_3
    } = r,
    f = i.length <= ve && dj(i) ? await De(r, n) : void 0;
  if (f === void 0) return [];
  let p = listing_3 === void 0,
    c = p ? void 0 : await T(n.sources, listing_3.root, Re),
    x = p ? [Pe] : c !== void 0 ? [] : [be];
  return [{
    file: Ay(f.file, U),
    message: Ay([ke(r), ...x].join(" "), U),
    installLine: Ay(zQn({
      plugin: i,
      marketplaceSource: c ?? M
    }), U)
  }];
}
function upn(r) {
  return r.length === 0 ? [] : [`${re.info} Advice (does not change the verdict):`, "", ...r.flatMap(item => [`  ${re.pointer} ${item.file}: ${item.message}`, `      ${item.installLine}`]), ""];
}
var Te = (r, n) => r.reduce(async (acc, item) => [...(await acc), ...(await $e(item, n))], Promise.resolve([]));
import { basename as Qt, dirname as Ue, resolve as er } from "path";
import { join as Fe } from "path";
async function B(r, n) {
  let i = Fe(r, ".claude-plugin");
  return (await m1(i)) ? (await HW(Fe(i, n))) ?? "" : "";
}
async function W(r) {
  try {
    let n = u({
      name: o()
    }).safeParse(ee(gs(await B(r, "plugin.json"))));
    return n.success ? n.data.name : void 0;
  } catch {
    return;
  }
}
import { resolve as ie } from "path";
var _e = 64;
async function Ge(r) {
  try {
    let n = Bzn().safeParse(ee(gs(await B(r, "marketplace.json"))));
    return n.success ? n.data : void 0;
  } catch {
    return;
  }
}
async function Ve(root_3) {
  let marketplace_5 = await Ge(root_3),
    i = await Promise.all((marketplace_5?.plugins ?? []).filter(item => typeof item.source === "string").slice(0, _e).map(async p => {
      let {
        source: source_3
      } = p;
      return marketplace_5 !== void 0 && typeof source_3 === "string" && !source_3.split(/[\\/]/).includes("..") && (await gA(root_3, ie(root_3, source_3))) === "ok" ? [{
        root: ie(root_3, source_3),
        name: p.name,
        listing: {
          root: root_3,
          marketplace: marketplace_5,
          entry: p
        }
      }] : [];
    })),
    name_7 = (await W(root_3)) ?? "",
    entry_2 = marketplace_5?.plugins.find(p => zKr(p, root_3, {
      root: root_3,
      name: name_7
    }));
  return marketplace_5 !== void 0 && !i.flat().some(item => item.root === ie(root_3)) ? [...i.flat(), {
    root: root_3,
    name: entry_2?.name ?? name_7,
    listing: {
      root: root_3,
      marketplace: marketplace_5,
      entry: entry_2
    }
  }] : i.flat();
}
async function He(r, n, i) {
  let l = Ue(n?.filePath ?? ""),
    root_4 = Ue(l),
    f = Qt(l) === ".claude-plugin" && [n, ...i].every(item => item?.errors.length === 0),
    p = f && n?.fileType === "plugin",
    m = f && n?.fileType === "marketplace" && Jyn(er(r), root_4) ? await Ve(root_4) : [];
  return p ? [{
    root: root_4,
    name: (await W(root_4)) ?? "",
    listing: void 0
  }] : m;
}
function Be(r) {
  return qt(r) ? t(`No install advice: ${d(r)}`) : a(r), [];
}
var fpn = (r, n, i) => He(r, n, i).then(l => Te(l, {
  readmes: new Map(),
  sources: new Map()
})).catch(Be);
var Fzt = 200;
var pr = "(text shaped like a digest)",
  se = String.raw`[^A-Za-z0-9+/=\-\n:$,]`,
  regExp = new RegExp(se, "gu"),
  regExp_2 = new RegExp([...g7r, ...Array.from({
    length: length
  }, () => "[A-Za-z0-9+/]")].join(`${se}*`) + `(?:${se}*=)?(?![A-Za-z0-9+/])`, "gu");
function Vkt(r, n) {
  return r.replaceAll(regExp_2, i => i.replaceAll(regExp, "") === n ? i : pr);
}
export { OM, Lzt, E6n, oot, H1r, apn, $1r, T6n, lpn, u3s, C6n, R6n, U1r, ULo, A6n, x6n, BLo, f3s, P6n, p3s, B1r, m3s, h3s, g3s, O6n, j1r, W1r, eUe, jLo, dpn, cpn, Nzt, upn, fpn, Fzt, Vkt };