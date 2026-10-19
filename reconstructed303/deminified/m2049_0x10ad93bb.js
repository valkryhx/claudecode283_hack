// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { d, G, Wt } from "B:/~BUN/root/chunk-3aez4b53.js";
import { J, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { Rt, Gl } from "B:/~BUN/root/chunk-vpgpdrbv.js";
import { no, mpn, f5, r7e, _pn, oF, hn, Tr, uKs, Nf, uv, GJ, Sp, m5, nS, Cn, PW, Oi, jm, zl, Wn, t9n, bhe } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { hk } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { L } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { ro } from "B:/~BUN/root/chunk-fsp20me0.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { Ut } from "B:/~BUN/root/chunk-cx57tr4b.js";
import { ce } from "B:/~BUN/root/chunk-nxwmyxnk.js";
import { sS, ks } from "B:/~BUN/root/chunk-yw21pggd.js";
import { Bo } from "B:/~BUN/root/chunk-cqkcn3bx.js";
import { cde, V7e, yr, Ot } from "B:/~BUN/root/chunk-2zk4vqr8.js";
import { lt } from "B:/~BUN/root/chunk-6ft8yhc8.js";
import { _h } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { EA } from "B:/~BUN/root/chunk-m94tqsvv.js";
import { OG, csn } from "B:/~BUN/root/chunk-472kxa0t.js";
import { mK, Wpt } from "B:/~BUN/root/chunk-2vhqkymb.js";
import { H3e } from "B:/~BUN/root/chunk-vnmfp48d.js";
import { xue, G1, tM, sU, uU, Pys, OJt, Vw, Iy, CT, qd, YP } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { vw } from "B:/~BUN/root/chunk-dq7zfs8r.js";
import { te } from "B:/~BUN/root/chunk-9tx73f8x.js";
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { oz } from "B:/~BUN/root/chunk-g7dr8rv2.js";
import { Yqt, Vsr, qsr, Xqt, ih, Xsr } from "B:/~BUN/root/chunk-6h80td9s.js";
import { e } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { SRn } from "B:/~BUN/root/chunk-pq83r6r3.js";
import { AKe, Xdr, c6t, u6t, p6t } from "B:/~BUN/root/chunk-ce7rdtzh.js";
import { y, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { Su } from "B:/~BUN/root/chunk-9dv7wnd0.js";
import { o, u } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { ve } from "B:/~BUN/root/chunk-ef0msk7r.js";
var We = /^[\x21-\x7e]+$/,
  se = /^[A-Za-z0-9._-]{1,64}$/;
function $A(r) {
  return Tr === "" || Y(r, We) ? r : Z(r);
}
function wwt(r) {
  if (Y(r, se)) return r;
  return Ut(Tr === "" ? Rt(r, 64) : Z(r));
}
function pbn(r) {
  return Y(r, se) ? r : Z(r);
}
function Y(r, n) {
  return n.test(r) && !f5(r) && !uKs(Tr, ae(r));
}
function Z(r) {
  return Gl(Rt(ae(r), 64)) || "\u201C\u201D";
}
function ae(r) {
  return Wn(r).replace(t9n, "").trimEnd();
}
import { join as le } from "path";
async function H2e(r, n, i, a) {
  let s = Object.hasOwn(i, r) ? i[r]?.installLocation : void 0;
  if (s === void 0) return n;
  let f;
  try {
    f = Vw();
  } catch {
    return n;
  }
  return vw(n, p => ze(p, r, s, i, f, a), {
    concurrency: 8
  });
}
async function ze(r, n, i, a, s, f) {
  let source = r.source;
  if (!r7e(source)) return r;
  try {
    let c = await OG(uU(r.name, n), i, source, a, s, f, Iy(i) !== void 0 ? "system" : "workspace");
    if (c.kind !== "ok") return r;
    let m = le(c.entryPath, ".claude-plugin");
    if (!(await G1(m))) return r;
    let manifestPath = le(m, "plugin.json"),
      P = await sU(manifestPath);
    if (P === void 0) return r;
    let b = xue(J(Bo(P)), "plugin-json", {
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
    return t(`Display metadata for ${uU(r.name, n)} not read from its plugin.json: ${d(error)}`), r;
  }
}
function C(r) {
  return bhe(r) === void 0;
}
B();
function ot(Be) {
  return {
    label: Be,
    value: Be
  };
}
function LZn(r, n, i, a) {
  let s = {};
  for (let f of r) {
    let p = i[f],
      c = O(no(n, f) ?? "");
    if (c === "") {
      if (p?.sensitive === !0 && no(a ?? {}, f) !== void 0) continue;
      if (p?.type === "number") continue;
      if (p?.required !== !0 && no(a ?? {}, f) === void 0) continue;
    }
    if (p?.type === "number") {
      let m = Number(c);
      s[f] = Number.isNaN(m) ? c : m;
    } else if (p?.type === "boolean") {
      let m = AKe(c);
      if (m !== void 0) s[f] = m;
    } else s[f] = c;
  }
  return s;
}
function Uzt(r) {
  let m = w(22),
    {
      title: title,
      subtitle: subtitle,
      configSchema: configSchema,
      initialValues: initialValues,
      onSave: onSave,
      onCancel: onCancel
    } = r,
    c = Object.keys(configSchema),
    h;
  if (m[0] !== configSchema || m[1] !== initialValues) h = () => NZn(configSchema, initialValues), m[0] = configSchema, m[1] = initialValues, m[2] = h;else h = m[2];
  let [values, b] = y(h),
    x;
  if (m[3] !== configSchema || m[4] !== initialValues) x = key => {
    let k = configSchema[key];
    let S = fbn(k);
    if (S !== void 0) {
      return {
        type: "select",
        key: key,
        label: k?.title || key,
        options: S.map(ot),
        hint: () => k?.description
      };
    }
    let A = k?.sensitive === !0;
    let v = A && no(initialValues ?? {}, key) !== void 0;
    return {
      type: "text",
      key: key,
      label: k?.title || key,
      required: k?.required === !0 && !v,
      mask: A ? "*" : void 0,
      placeholder: v ? "(unchanged)" : void 0,
      validate: k?.type === "number" ? R => O(R) === "" || p6t.numberOfInput(O(R), k) !== void 0 ? null : p6t.numberInputHint(k) : void 0,
      hint: () => k?.description
    };
  }, m[3] = configSchema, m[4] = initialValues, m[5] = x;else x = m[5];
  let fields = c.map(x);
  if (c.length === 0) {
    return null;
  }
  let onChange;
  if (m[6] !== b) onChange = (ur, cr) => b(fr => ({
    ...fr,
    [ur]: cr
  })), m[6] = b, m[7] = onChange;else onChange = m[7];
  let onSubmit;
  if (m[8] !== configSchema || m[9] !== c || m[10] !== initialValues || m[11] !== onSave || m[12] !== values) onSubmit = () => onSave(LZn(c, values, configSchema, initialValues)), m[8] = configSchema, m[9] = c, m[10] = initialValues, m[11] = onSave, m[12] = values, m[13] = onSubmit;else onSubmit = m[13];
  let Ke;
  if (m[14] !== fields || m[15] !== onCancel || m[16] !== subtitle || m[17] !== onChange || m[18] !== onSubmit || m[19] !== title || m[20] !== values) Ke = e(oz, {
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
function NZn(r, n) {
  let i = {};
  for (let a of Object.keys(r)) {
    let s = r[a],
      f = s?.sensitive === !0 ? void 0 : no(n ?? {}, a),
      p = fbn(s);
    if (s?.type === "boolean") {
      i[a] = String(Xdr(no(n ?? {}, a) ?? s.default));
      continue;
    }
    i[a] = p === void 0 ? f === void 0 ? "" : String(f) : [f, s?.default].find(item => typeof item === "string" && p.includes(item)) ?? p[0] ?? "";
  }
  return i;
}
function fbn(r) {
  if (r?.type === "boolean") return nt;
  return r?.type === "string" && r.multiple !== !0 ? r.options : void 0;
}
var nt = ["true", "false"];
function O(r) {
  return (r.split(/\r\n|\r|\n/, 1)[0] ?? "").trim();
}
function Bzt(r, n) {
  return r.map(item => {
    let a = n[item.marketplaceName]?.source;
    return a && Nf(a) ? {
      ...item,
      fromPluginDirectory: !0
    } : item;
  });
}
var E = r => r.fromPluginDirectory === !0;
function it(r, n) {
  let i = f => r[f] ?? n.find(item => item.entry[f] !== void 0)?.entry[f],
    a = ["displayName", "description", "author", "homepage", "category", "tags", "keywords", "relevance"],
    s = {};
  for (let f of a) {
    let p = i(f);
    if (p !== void 0) Object.assign(s, {
      [f]: p
    });
  }
  return s;
}
function f6o(r, n) {
  let i = c => uv(c.entry.source, GJ(n[c.marketplaceName]?.source)),
    a = c => E(c) && H3e(c.entry.name),
    s = new Set();
  for (let c of r) if (a(c)) {
    let m = i(c);
    if (m !== void 0) s.add(m);
  }
  if (s.size === 0) return r;
  let f = new Map();
  for (let c of r) {
    if (E(c) || !zl(c.marketplaceName)) continue;
    if (OJt(c.marketplaceName, c.entry)) continue;
    let m = i(c);
    if (m !== void 0 && s.has(m)) f.set(m, [...(f.get(m) ?? []), c]);
  }
  let p = [];
  for (let c of r) {
    let m = i(c),
      h = m === void 0 ? void 0 : f.get(m);
    if (!E(c)) {
      if (!h?.includes(c)) p.push(c);
      continue;
    }
    if (h === void 0 || !a(c)) {
      p.push(c);
      continue;
    }
    p.push({
      ...c,
      entry: {
        ...c.entry,
        ...it(c.entry, h)
      },
      isInstalled: c.isInstalled || h.some(item => item.isInstalled),
      alsoListedIn: L(h.map(item => item.marketplaceName)),
      installCountIds: h.map(item => item.pluginId)
    });
  }
  return p;
}
async function mbn(r, n) {
  let i = new Set(),
    plugins = qd().plugins;
  for (let [s, f] of Object.entries(plugins)) {
    if (Cn(s).marketplace !== hn || !f.some(YP)) continue;
    let p = await CT(s, n),
      c = p && uv(p.entry.source, GJ(r[hn]?.source));
    if (c) i.add(c);
  }
  return i;
}
function gbn(r, n, i = new Set()) {
  let a = c => uv(c.entry.source, GJ(n[c.marketplaceName]?.source)),
    s = new Set(i),
    f = new Set(),
    p = new Set();
  for (let c of r) {
    let m = c.isInstalled ? a(c) : void 0;
    if (m === void 0) continue;
    if (E(c)) s.add(m), f.add(m);else if (zl(c.marketplaceName)) p.add(m);
  }
  if (s.size === 0 && p.size === 0) return r;
  return r.filter(item => {
    if (item.isInstalled) return !0;
    let m = a(item);
    if (m === void 0) return !0;
    if (E(item)) return !p.has(m) && !f.has(m);
    return !zl(item.marketplaceName) || !s.has(m);
  });
}
function FZn(r, n) {
  if (!n) return;
  let i = n.get(r.pluginId);
  for (let a of r.installCountIds ?? []) {
    let s = n.get(a);
    if (s !== void 0 && (i === void 0 || s > i)) i = s;
  }
  return i;
}
function C2r(r, n) {
  let i = new Map(r.map((item, index) => [item, index]));
  r.sort((itemA, itemB) => {
    let f = FZn(itemA, n) ?? 0,
      p = FZn(itemB, n) ?? 0;
    if (f !== p) return p - f;
    let c = E(itemA),
      m = E(itemB);
    if (c !== m) return c ? -1 : 1;
    return c ? (i.get(itemA) ?? 0) - (i.get(itemB) ?? 0) : itemA.entry.name.localeCompare(itemB.entry.name);
  });
}
function hbn(r) {
  return E(r) ? Tr : pbn(r.marketplaceName);
}
function ybn(r) {
  let n = r.alsoListedIn ?? [];
  if (n.length === 0) return;
  let i = new Map(R2r(r).map(item => [item.marketplace, item.name]));
  return `Also listed in ${n.map(item => {
    let s = i.get(item);
    return s === void 0 ? item : `${item} as ${s}`;
  }).join(", ")}`;
}
function R2r(r) {
  {
    let n = [];
    for (let i of r.installCountIds ?? []) {
      let {
        name: name,
        marketplace: marketplace
      } = Cn(i);
      if (marketplace !== void 0 && name !== r.entry.name) n.push({
        marketplace: marketplace,
        name: name
      });
    }
    return n;
  }
  return [];
}
function m6o(r) {
  let n = i => i === Su ? "official" : i;
  return [E(r) ? Tr : r.marketplaceName, ...(r.alsoListedIn ?? []).map(n)].join(" + ");
}
function ye(r) {
  return /^[A-Za-z0-9._/@:~-]{1,120}$/.test(r) ? r : Gl(Rt(r, 120));
}
function _bn(r) {
  let source_2 = r.entry.source;
  if (typeof source_2 !== "object" || source_2 === null) return;
  let i;
  if (source_2.source === "github") i = source_2.repo;else if (source_2.source === "url" || source_2.source === "git-subdir") i = source_2.url;
  if (i === void 0) return;
  let a = i;
  try {
    let f = new URL(i);
    a = ro(f.hostname) ? f.pathname.replace(/^\/+/, "") : `${f.host}${f.pathname}`;
  } catch {}
  if (a = ye(a.replace(/\.git$/, "").replace(/\/+$/, "")), a === "") return;
  let s = source_2.source === "git-subdir" ? ye(source_2.path) : "";
  return s === "" ? a : `${a} (${s})`;
}
function g6o(r) {
  let n = new Map(),
    i;
  for (let s of r) {
    if (E(s)) i = s.marketplaceName;
    for (let f of [s.marketplaceName, ...(s.alsoListedIn ?? [])]) n.set(f, (n.get(f) ?? 0) + 1);
  }
  let a = [...n].map(([marketplace_2, count]) => ({
    marketplace: marketplace_2,
    label: marketplace_2 === i ? Tr : pbn(marketplace_2),
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
  }, ...a];
}
var HZn = 4;
function h6o(r, n) {
  let i = r.slice(0, HZn),
    a = r.find(item => item.marketplace === n);
  if (a && !i.includes(a)) i[i.length - 1] = a;
  return i;
}
function y6o(r, n, i) {
  return [r.marketplaceName, ...(r.alsoListedIn ?? [])].some(item => {
    if (!n.has(item)) return !1;
    if (item === Su) return !0;
    let s = i[item]?.source;
    return s !== void 0 && csn(item, s);
  });
}
function _6o(r, n) {
  return n === null || r.marketplaceName === n || (r.alsoListedIn?.includes(n) ?? !1);
}
function re(r, n, i) {
  if (bbn(r)) return !1;
  if (r.source === n) return !0;
  return "plugin" in r && r.plugin === i && nS(r.source) === nS(n);
}
function bbn(r) {
  return "orphan" in r && r.orphan === !0;
}
function $Zn(r, n) {
  return re(r, n.source, n.name);
}
function UZn(r, n) {
  return re(r, n.source, n.name);
}
function st(r, n, i) {
  if (m5(r.source)) return !1;
  if (r.source === n) return !0;
  let a = Oi(r.source);
  return "plugin" in r && r.plugin === i && (a === void 0 || a === Oi(n));
}
function _Ce(r, n, i) {
  return Sp(Oi(n)) ? re(r, n, i) : st(r, n, i) && !bbn(r);
}
function A2r(r, n) {
  let i = n.filter(item => _Ce(r, item.source, item.name)),
    a = i.length === 1 ? i[0] : i.find(item => jm(item.source, r.source));
  if (a) return {
    name: a.name,
    marketplace: Oi(a.source)
  };
  let [s] = i;
  if (s !== void 0) return {
    name: s.name,
    marketplace: void 0
  };
  let {
    name: name_2,
    marketplace: marketplace_3
  } = PW(r.source);
  if (marketplace_3 !== void 0) return {
    name: name_2,
    marketplace: marketplace_3
  };
  let marketplace_4 = nS(r.source);
  return {
    name: marketplace_4 !== void 0 && "plugin" in r && r.plugin ? r.plugin : name_2,
    marketplace: marketplace_4
  };
}
var he = ve(_h(), 1);
import { readFile as at, stat as ut } from "fs/promises";
import { dirname as _, join as V, relative as j, resolve as ct } from "path";
async function jzt(r, n = {}) {
  let warnings = [],
    a = await ft(r);
  if (!a.ok) return {
    ok: !1,
    error: a.error,
    warnings: warnings
  };
  let {
      pluginRoot: pluginRoot,
      manifestPath: manifestPath_2,
      manifest: manifest_2
    } = a,
    c = typeof manifest_2.name === "string" && manifest_2.name.length > 0 ? await pt(pluginRoot, manifest_2.name) : void 0,
    m = await Xqt(manifestPath_2, c !== void 0 && mpn(c.marketplaceName) ? {
      kind: "anthropic"
    } : {
      kind: "alone"
    }),
    validation = [m];
  if (m.success) validation.push(...(await Xsr(pluginRoot)));
  for (let v of validation) for (let R of v.warnings) warnings.push(`${j(ce(), v.filePath)}: ${R.message}`);
  let P = validation.find(item => !item.success);
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
  let x = typeof manifest_2.version === "string" && manifest_2.version.length > 0 ? manifest_2.version : void 0,
    version,
    versionFrom;
  if (x !== void 0) version = x, versionFrom = "plugin.json";else if (c?.entry.version) version = c.entry.version, versionFrom = "marketplace entry";else return {
    ok: !1,
    error: `No version to tag. Set "version" in ${j(ce(), manifestPath_2)}` + (c ? ` or in the marketplace entry at ${j(ce(), c.path)} plugins[${c.entryIndex}].` : ".") + " Tags are only used for dependency version constraints, which require an explicit semver \u2014 the git-SHA fallback does not need a tag.",
    warnings: warnings
  };
  if (c?.entry.version && x !== void 0 && c.entry.version !== x) return {
    ok: !1,
    error: `Version mismatch: plugin.json says "${x}" but ${j(ce(), c.path)} plugins[${c.entryIndex}].version says "${c.entry.version}". plugin.json wins at install time, so update the marketplace entry to "${x}" (or remove it) before tagging.`,
    warnings: warnings
  };
  if (he.valid(version) === null) return {
    ok: !1,
    error: `Version "${version}" is not valid semver. Dependency resolution (resolveVersionRange) ignores tags whose suffix doesn't parse as semver, so this tag would never be selected.`,
    warnings: warnings
  };
  let tag = Pys(pluginName, version);
  if (!hk(tag)) return {
    ok: !1,
    error: `Computed tag name "${tag}" is not a valid git ref. Check the plugin name for characters git rejects (spaces, ~, ^, :, ?, *, [, \\, or sequences like .., @{, //).`,
    warnings: warnings
  };
  let gitRoot = yr(pluginRoot);
  if (gitRoot === null) return {
    ok: !1,
    error: `${pluginRoot} is not inside a git repository. Dependency tags are resolved via git ls-remote, so the plugin must live in a git repo.`,
    warnings: warnings
  };
  if (!n.force) {
    let v = await dt(gitRoot, c ? [pluginRoot, c.path] : [pluginRoot]);
    if (v.length > 0) {
      let R = v.slice(0, 5).join(`
  `),
        F = v.length > 5 ? `
  \u2026and ${v.length - 5} more` : "";
      return {
        ok: !1,
        error: `Uncommitted changes affecting this release \u2014 commit them first so the tag points at the version you intend to release (or use --force):
  ${R}${F}`,
        warnings: warnings
      };
    }
  }
  if (!n.force) {
    if (await mt(gitRoot, tag)) return {
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
      } : void 0,
      validation: validation
    }
  };
}
async function Wzt(r, n) {
  let i = ks(),
    a = await Wpt(r.gitRoot, gt, {
      envPins: {},
      base: i,
      repository: mK(r.gitRoot)
    });
  if (a === null) t(`[plugin tag] could not read the user's git signing configuration; ${r.tag} is created unsigned`, {
    level: "warn"
  });
  let s = ["-C", r.gitRoot, ...[...yt, ...(a ?? [])].flatMap(([m, h]) => ["-c", `${m}=${h}`]), "tag"];
  if (n.force) s.push("-f");
  s.push("-a", "-m", vwt(r, n.message), "--", r.tag, "HEAD");
  let f = await lt(Ot(), s, {
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
  let c = await lt("git", p, {
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
function vwt(r, n) {
  return n === void 0 ? `${r.pluginName} ${r.version}` : n.replaceAll("%s", r.version);
}
async function ft(r) {
  let n = ct(r),
    i;
  try {
    i = await ut(n);
  } catch (s) {
    return {
      ok: !1,
      error: G(s) ? `Path not found: ${n}` : `Cannot stat ${n}: ${d(s)}`
    };
  }
  let a = i.isFile() ? [[_(_(n)), n]] : [[n, V(n, ".claude-plugin", "plugin.json")], [_(n), V(n, "plugin.json")]];
  for (let [pluginRoot_2, manifestPath_3] of a) {
    let p;
    try {
      p = await at(manifestPath_3, {
        encoding: "utf-8"
      });
    } catch (m) {
      if (G(m)) continue;
      return {
        ok: !1,
        error: `Cannot read ${manifestPath_3}: ${d(m)}`
      };
    }
    let c;
    try {
      c = J(Bo(p));
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
async function pt(root, name_3) {
  let i = yr(root) ?? void 0,
    a = root;
  for (;;) {
    let path = V(a, ".claude-plugin", "marketplace.json"),
      f = await qsr(path);
    if (f) {
      for (let [entryIndex, entry] of f.plugins.entries()) if (Vsr(entry, a, {
        root: root,
        name: name_3
      })) return {
        path: path,
        marketplaceName: f.name,
        entryIndex: entryIndex,
        entry: entry
      };
    }
    if (a === i) return;
    let p = _(a);
    if (p === a) return;
    a = p;
  }
}
async function dt(r, n) {
  let i = n.map(item => j(r, item) || "."),
    a = await lt(Ot(), ["-C", r, "--no-optional-locks", "status", "--porcelain", sS, "--", ...i], {
      env: ks(),
      useCwd: !0
    });
  if (a.code !== 0) return [];
  return a.stdout.split(`
`).map(item => item.slice(3).trim()).filter(item => item.length > 0);
}
async function mt(r, n) {
  let i = await lt(Ot(), ["-C", r, "tag", "-l", "--", n], {
    env: ks(),
    useCwd: !0
  });
  return i.code === 0 && i.stdout.trim() === n;
}
var gt = "^(tag\\.(gpgsign|forcesignannotated)|user\\.signingkey|gpg\\.(format|program)|gpg\\.(openpgp|x509|ssh)\\.program|gpg\\.ssh\\.defaultkeycommand)$",
  yt = [["tag.gpgSign", "false"], ["tag.forceSignAnnotated", "false"], ["gpg.format", "openpgp"], ["gpg.program", "gpg"], ["gpg.x509.program", "gpgsm"], ["gpg.ssh.program", "ssh-keygen"], ["gpg.ssh.defaultKeyCommand", ""]];
var M = "<owner>/<repo>";
var xe = ["Validate the folder that holds its marketplace.json", `to have ${M} filled in,`, "and the name its marketplace lists it under."].join(" ");
import { join as kt } from "path";
function Pe({
  name: name_4,
  listing: listing
}) {
  let i = listing !== void 0 && listing.entry === void 0;
  return [`This README has no line that installs "${name_4}"`, "from a marketplace.", ...(i ? [kt(listing.root, ".claude-plugin", "marketplace.json"), "has no entry for it. Add one."] : []), `${i ? "Then add" : "Add"} the install line,`, "which works in one step on Claude Code 2.1.275 or later."].join(" ");
}
var ke = 128;
function D(r, n, i) {
  let a = r.get(n) ?? i(n);
  return r.set(n, a), a;
}
var be = [`In it, replace ${M}`, "with the repository that holds the marketplace."].join(" ");
var U = 1024;
import { join as we } from "path";
var Ie = r => cde(r) ? "" : V7e(r, "remote", "origin", "pushurl") || V7e(r, "remote", "origin", "url") || "";
function Ee({
  host: host,
  owner: owner,
  name: name_5
}) {
  let a = ro(host),
    s = host.includes(":");
  return a ? `${owner}/${name_5}` : s ? void 0 : `https://${host}/${owner}/${name_5}.git`;
}
async function Re(r) {
  let n = we(r, ".git"),
    a = (await G1(n)) ? await sU(we(n, "config")).catch(() => {
      return;
    }) : void 0,
    s = Ie(a ?? ""),
    p = /^(https|ssh):\/\//i.test(s) || !s.includes("://") ? EA(s) : null;
  return p === null ? void 0 : Ee(p);
}
function H(r) {
  let n = r.split("").map(item => !"`'\"()<>[]*.,;:!?".includes(item));
  return r.slice(n.findIndex(Boolean), n.findLastIndex(Boolean) + 1);
}
var ne = (r, n) => r.byName.has(n) || r.bySource.has(H(n));
import { readdir as _t } from "fs/promises";
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
function Oe(r) {
  let n = r.split(`
`).flatMap(item => item.split(/plugin[ \t]+(?:install|i)[ \t]+/).slice(1)).map(Ae);
  return {
    bySource: new Set(n.filter(Se).map(Me)),
    byName: new Set(n.map(Ce))
  };
}
async function oe(r) {
  let n = (await _t(r, {
      withFileTypes: !0
    }).catch(() => [])).filter(item => item.isFile()).map(item => item.name).filter(item => /^readme(\.[a-z0-9.-]+)?$/i.test(item)),
    i = n.find(item => item.toLowerCase() === "readme.md") ?? n.toSorted()[0],
    a = i === void 0 ? void 0 : await sU(je(r, i)).catch(() => {
      return;
    });
  return i !== void 0 && a !== void 0 ? {
    file: je(r, i),
    installs: Oe(a)
  } : void 0;
}
async function Le({
  root: root_2,
  name: name_6,
  listing: listing_2
}, a) {
  let s = await D(a.readmes, root_2, oe),
    f = listing_2?.entry !== void 0 && !Yqt(listing_2.root, root_2),
    p = f && listing_2.marketplace.plugins.length === 1,
    c = s !== void 0 && !ne(s.installs, name_6),
    h = f && (p || c) ? await D(a.readmes, listing_2.root, oe) : void 0;
  return [s, h].some(item => item !== void 0 && ne(item.installs, name_6)) ? void 0 : s ?? (p ? h : void 0);
}
async function $e(r, n) {
  let {
      name: i,
      listing: listing_3
    } = r,
    f = i.length <= ke && oF(i) ? await Le(r, n) : void 0;
  if (f === void 0) return [];
  let p = listing_3 === void 0,
    c = p ? void 0 : await D(n.sources, listing_3.root, Re),
    h = p ? [xe] : c !== void 0 ? [] : [be];
  return [{
    file: ih(f.file, U),
    message: ih([Pe(r), ...h].join(" "), U),
    installLine: ih(SRn({
      plugin: i,
      marketplaceSource: c ?? M
    }), U)
  }];
}
function zzt(r) {
  return r.length === 0 ? [] : [`${te.info} Advice (does not change the verdict):`, "", ...r.flatMap(item => [`  ${te.pointer} ${item.file}: ${item.message}`, `      ${item.installLine}`]), ""];
}
var De = (r, n) => r.reduce(async (acc, item) => [...(await acc), ...(await $e(item, n))], Promise.resolve([]));
import { basename as Jt, dirname as Ue, resolve as Qt } from "path";
import { join as Fe } from "path";
async function K(r, n) {
  let i = Fe(r, ".claude-plugin");
  return (await G1(i)) ? (await sU(Fe(i, n))) ?? "" : "";
}
async function W(r) {
  try {
    let n = u({
      name: o()
    }).safeParse(J(Bo(await K(r, "plugin.json"))));
    return n.success ? n.data.name : void 0;
  } catch {
    return;
  }
}
import { resolve as ie } from "path";
var Te = 64;
async function _e(r) {
  try {
    let n = _pn().safeParse(J(Bo(await K(r, "marketplace.json"))));
    return n.success ? n.data : void 0;
  } catch {
    return;
  }
}
async function Ve(root_3) {
  let marketplace_5 = await _e(root_3),
    i = await Promise.all((marketplace_5?.plugins ?? []).filter(item => typeof item.source === "string").slice(0, Te).map(async p => {
      let {
        source: source_3
      } = p;
      return marketplace_5 !== void 0 && typeof source_3 === "string" && !source_3.split(/[\\/]/).includes("..") && (await tM(root_3, ie(root_3, source_3))) === "ok" ? [{
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
    entry_2 = marketplace_5?.plugins.find(p => Vsr(p, root_3, {
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
  let a = Ue(n?.filePath ?? ""),
    root_4 = Ue(a),
    f = Jt(a) === ".claude-plugin" && [n, ...i].every(item => item?.errors.length === 0),
    p = f && n?.fileType === "plugin",
    m = f && n?.fileType === "marketplace" && Yqt(Qt(r), root_4) ? await Ve(root_4) : [];
  return p ? [{
    root: root_4,
    name: (await W(root_4)) ?? "",
    listing: void 0
  }] : m;
}
function Ge(r) {
  return Wt(r) ? t(`No install advice: ${d(r)}`) : l(r), [];
}
var Gzt = (r, n, i) => He(r, n, i).then(a => De(a, {
  readmes: new Map(),
  sources: new Map()
})).catch(Ge);
export { $A, wwt, pbn, H2e, LZn, Uzt, NZn, fbn, Bzt, f6o, mbn, gbn, FZn, C2r, hbn, ybn, R2r, m6o, _bn, g6o, HZn, h6o, y6o, _6o, bbn, $Zn, UZn, _Ce, A2r, jzt, Wzt, vwt, zzt, Gzt };