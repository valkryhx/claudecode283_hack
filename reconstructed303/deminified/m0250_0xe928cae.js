// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { d0e, i$, V8n, Jg, Tc, Pi, oi, Sp, Pw, Z8n, Cn, Oi, rr, zl, t9n } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { O } from "B:/~BUN/root/chunk-nggrknsv.js";
import { Rt, Ge, Gl } from "B:/~BUN/root/chunk-vpgpdrbv.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { _h } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { Wo } from "B:/~BUN/root/chunk-6a9s3k2y.js";
import { _Ho, me, hBt, tTe, Oun, nTe, Y5n, BHo } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { hf, Er } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { Ngt } from "B:/~BUN/root/chunk-d544j3ga.js";
import { nv } from "B:/~BUN/root/chunk-0n2201tc.js";
import { Ne } from "B:/~BUN/root/chunk-nvdqbkrt.js";
import { CRo, hNt, usn } from "B:/~BUN/root/chunk-472kxa0t.js";
import { AK } from "B:/~BUN/root/chunk-y424etr5.js";
import { He } from "B:/~BUN/root/chunk-8znbjmp4.js";
import { ve } from "B:/~BUN/root/chunk-ef0msk7r.js";
var ume = d0e + "@" + oi;
var CDs = () => ({
  outermost: [ume],
  seat: `${ume} seated outermost by default: a mod a person installs never loads without it`
});
var bPr = hf();
function Vee() {
  let e = me("policySettings");
  return e !== null && Object.keys(e).length > 0;
}
var SPr = He(hf(), e => e.set(null));
function wPr(e) {
  let n = e !== void 0,
    o = e?.indexOf(ume) ?? -1,
    s = o !== -1,
    i = Vee() || Y5n(),
    d = i || bPr.get()?.() === !0,
    u = n || d ? void 0 : Er(),
    f = u === "team" || u === "enterprise",
    l = SPr.get() === !0,
    r = n ? s : d || f || l,
    a = n ? s ? `seated by managed prependPlugins at position ${o + 1}` : "not seated: managed prependPlugins does not list it" : d ? i ? "seated outermost: this machine has managed settings" : "seated outermost: this machine has a managed MCP server file" : f ? `seated outermost: the organization is ${u}` : l ? "seated outermost: it was seated earlier in this session, and a seat holds until the session ends" : `not seated: no managed settings and not a Team or Enterprise organization (${u ?? "none"})`;
  if (r) SPr.set(!0);
  return {
    outermost: r ? [ume] : [],
    seat: `${ume} ${a}`
  };
}
var RDs = !0;
var S = ve(_h(), 1);
import { win32 as K } from "path";
function F2n(e, n) {
  return H(e) === H(n);
}
function C(e, n, o) {
  return e.scope === n && e.projectPath === o;
}
function H2n(e, n, o) {
  if (e.scope !== n) return !1;
  if (e.projectPath === void 0 || o === void 0) return e.projectPath === o;
  return F2n(e.projectPath, o);
}
function ADs(e, n, o) {
  return !C(e, n, o) && H2n(e, n, o);
}
function rA(e, n, o) {
  let s = _Ro(e, n, o);
  return s >= 0 ? e?.[s] : void 0;
}
function _Ro(e, n, o) {
  if (e === void 0) return -1;
  let s = e.findIndex(item => C(item, n, o));
  return s >= 0 ? s : e.findIndex(item => H2n(item, n, o));
}
function iNt(e, n, o) {
  let s = (e ?? []).filter(item => C(item, n, o));
  if (s.length > 0) return s;
  let i = rA(e, n, o);
  return i === void 0 ? [] : [i];
}
function H(e) {
  if (I() !== "windows" || /^\/(?!\/)/.test(e) || /^[\\/]{2}[?.][\\/]/.test(e) || /(^|[\\/])\.{1,2}([\\/]|$)/.test(e)) return e;
  let n = K.normalize(e),
    o = n.length > K.parse(n).root.length ? n.replace(/[\\/]+$/, "") : n;
  return /^[a-z]:/i.test(o) ? o[0].toLowerCase() + o.slice(1) : o;
}
function xDs(e) {
  if (e === null || typeof e !== "object") return;
  let n = "dependencies" in e ? e.dependencies : void 0;
  if (!Array.isArray(n)) return;
  let o = new Map();
  for (let s of n) {
    if (s === null || typeof s !== "object") continue;
    let i = "name" in s ? s.name : void 0;
    if (typeof i !== "string" || i.length === 0) continue;
    let version = "version" in s && typeof s.version === "string" ? s.version : void 0,
      sha = "sha" in s && typeof s.sha === "string" ? s.sha : void 0;
    if (version === void 0 && sha === void 0) continue;
    let u = "marketplace" in s && typeof s.marketplace === "string" ? s.marketplace : void 0,
      f = u ? `${i}@${u}` : i;
    o.set(f, {
      version: version,
      sha: sha
    });
  }
  return o.size > 0 ? o : void 0;
}
function RH(e, n) {
  if (Cn(e).marketplace) return e;
  let marketplace = Cn(n).marketplace;
  if (!marketplace || Sp(marketplace)) return e;
  return `${e}@${marketplace}`;
}
function $2n(e, n, o) {
  let s = Pw(e),
    i = Cn(s),
    d = Cn(n);
  if (!i.marketplace) return d.name === i.name || n === j(e);
  return n === s || d.name === i.name && d.marketplace === Tc || n === D(s, o);
}
function D(e, n) {
  let {
    name: name,
    marketplace: marketplace_2
  } = Cn(e);
  if (marketplace_2 === void 0 || i$(marketplace_2.toLowerCase()) || Cn(n).marketplace !== Pi) return;
  let i = `${name}@${Pi}`;
  return i === n ? void 0 : i;
}
var L = 1024,
  V = 4096;
function T(e) {
  return t(`intersectConstraints: ${e} \u2014 treating as too complex`, {
    level: "warn"
  }), {
    ok: !1,
    reason: "too-complex"
  };
}
function aNt(e) {
  if (e.length === 0) return {
    ok: !0,
    range: "*"
  };
  let n = 0;
  for (let c of e) n += c.length;
  if (n > V) return T(`total input ${n} chars > ${V}`);
  let o = [];
  for (let c of e) {
    let u = S.validRange(c);
    if (u === null) return {
      ok: !1,
      reason: "invalid"
    };
    o.push(u.split("||").map(item => item.trim()).filter(Boolean));
  }
  let s = o[0] ?? [];
  if (s.length > L) return T(`${s.length} conjuncts after 1/${e.length} inputs > ${L}`);
  for (let c = 1; c < o.length; c++) {
    let u = o[c] ?? [],
      f = s.length * u.length;
    if (f > L) return T(`${f} conjuncts after ${c + 1}/${e.length} inputs > ${L}`);
    let l = [];
    for (let r of s) for (let a of u) l.push(`${r} ${a}`);
    s = l;
  }
  let i = s.filter(item => {
    let u = S.validRange(item);
    return u !== null && S.minVersion(u) !== null;
  });
  if (i.length === 0) return {
    ok: !1,
    reason: "disjoint"
  };
  let range = S.validRange(i.join(" || "));
  return range === null ? {
    ok: !1,
    reason: "disjoint"
  } : {
    ok: !0,
    range: range
  };
}
var G = 200;
function J(e) {
  return /^[\x20-\x7e]+$/.test(e) && S.validRange(e) !== null ? e : Gl(Rt(e, 64)) || "\u201C\u201D";
}
function se(e) {
  return /^[0-9A-Za-z][0-9A-Za-z.+-]{0,63}$/.test(e) ? e : Gl(Rt(e, 64)) || "\u201C\u201D";
}
function q(e) {
  if (e.length <= G) return e;
  let n = e.slice(0, G),
    o = n.lastIndexOf("\u201C") > n.lastIndexOf("\u201D") ? n.slice(0, n.lastIndexOf("\u201C")) : n;
  return `${o}\u2026 (+${e.length - o.length} chars)`;
}
function Xon(e, n, o, s, i, d) {
  let c = q(o.map(J).join(", ")),
    u = Nft(T1e(n));
  switch (s) {
    case "disjoint":
      return `${e} ${u} has conflicting version requirements (no version satisfies all of: ${c})`;
    case "too-complex":
      return `${e} ${u} has version requirements too complex to intersect \u2014 simplify the ranges: ${c}`;
    case "invalid":
      return `${e} ${u} has an invalid version requirement among: ${c}`;
    case "installed-unsatisfied":
      return `${e} ${u} is installed at ${i === void 0 ? "an unknown version" : se(i)}, which does not satisfy: ${c}${d ? `. To look for a version in range, ${Jg("plugin update", n, {
        fallback: "update that plugin"
      })}` : ""}`;
  }
}
function U2n(e, n, o) {
  let s = q(J(o));
  return `${e} ${Nft(T1e(n))} has no git tag satisfying ${s}`;
}
function B2n(e, n) {
  let o = S.valid(e) ?? S.coerce(e)?.version;
  return o !== void 0 && S.satisfies(o, n);
}
function PDs(e, n) {
  let o = [];
  for (let plugin of n) {
    if (!plugin.depConstraints) continue;
    for (let [i, constraint] of plugin.depConstraints) if (RH(i, plugin.source) === e) {
      o.push({
        plugin: plugin,
        constraint: constraint
      });
      break;
    }
  }
  return o;
}
async function ODs(e, n, o, s = new Set(), i) {
  let marketplace_3 = Cn(e).marketplace,
    closure = [],
    u = new Set(),
    f = [];
  async function l(a, requiredBy) {
    if (a !== e && o.has(a) && !i?.has(a)) return null;
    let marketplace_4 = Cn(a).marketplace;
    if (!o.has(a) && marketplace_4 !== marketplace_3 && !(marketplace_4 && s.has(marketplace_4))) return {
      ok: !1,
      reason: "cross-marketplace",
      dependency: a,
      requiredBy: requiredBy
    };
    if (f.includes(a)) return {
      ok: !1,
      reason: "cycle",
      chain: [...f, a]
    };
    if (u.has(a)) return null;
    u.add(a);
    let k = await n(a);
    if (!k) {
      if (a !== e && o.has(a)) return t(`resolveDependencyClosure: force-included ${a} has no catalog entry; skipping (pinner stays demoted)`), null;
      return {
        ok: !1,
        reason: "not-found",
        missing: a,
        requiredBy: requiredBy
      };
    }
    f.push(a);
    for (let y of k.dependencies ?? []) {
      let w = RH(y, a),
        h = await l(w, a);
      if (h) return h;
    }
    return f.pop(), closure.push(a), null;
  }
  let r = await l(e, e);
  if (r) return r;
  return {
    ok: !0,
    closure: closure
  };
}
function IDs(e) {
  let n = new Set(e.map(item => item.source)),
    o = new Set(e.filter(item => item.enabled).map(item => item.source)),
    s = new Map(e.map(item => [item.source, item])),
    i = new Set(e.map(item => Cn(item.source).name)),
    d = new Map();
  for (let r of o) {
    let a = Cn(r).name;
    d.set(a, (d.get(a) ?? 0) + 1);
  }
  let c = [],
    u = !0;
  while (u) {
    u = !1;
    for (let r of e) {
      if (!o.has(r.source)) continue;
      for (let a of r.manifest.dependencies ?? []) {
        let g = Pw(RH(a, r.source)),
          p = !Cn(g).marketplace,
          k = p ? j(g) : void 0,
          y = p ? void 0 : `${Cn(g).name}@${Tc}`,
          w = y !== void 0 && !o.has(g) && o.has(y),
          h = D(g, r.source),
          b = h !== void 0 && !o.has(g) && !w && o.has(h),
          M = p ? (d.get(g) ?? 0) > 0 || k !== void 0 && o.has(k) : o.has(g) || w || b,
          P;
        if (!M) {
          let m = y !== void 0 && !n.has(g) && n.has(y),
            x = h !== void 0 && !n.has(g) && !m && n.has(h);
          P = {
            type: "dependency-unsatisfied",
            source: r.source,
            plugin: r.name,
            dependency: m ? y : x ? h : g,
            reason: (p ? i.has(g) || k !== void 0 && n.has(k) : n.has(g) || m || x) ? "not-enabled" : "not-found"
          };
        } else if (!p && !w) {
          let required = r.depConstraints?.get(a)?.version;
          if (required !== void 0) {
            let dependency = b ? h : g,
              R = s.get(dependency),
              installed = R?.resolvedVersion ?? R?.manifest.version;
            if (!(b && installed === void 0) && !B2n(installed, required)) P = {
              type: "dependency-version-unsatisfied",
              source: r.source,
              plugin: r.name,
              dependency: dependency,
              required: required,
              installed: installed
            };
          }
        }
        if (P) {
          o.delete(r.source);
          let m = Cn(r.source).name,
            x = d.get(m) ?? 0;
          if (x <= 1) d.delete(m);else d.set(m, x - 1);
          c.push(P), u = !0;
          break;
        }
      }
    }
  }
  let demoted = new Set(e.filter(item => item.enabled && !o.has(item.source)).map(item => item.source)),
    l = new Map();
  for (let r of o) {
    let {
      name: name_2,
      marketplace: marketplace_5
    } = Cn(r);
    if (marketplace_5 === Pi) l.set(rr(name_2), r);
  }
  return {
    demoted: demoted,
    errors: c.map(item => {
      if (item.type !== "dependency-unsatisfied" || item.reason !== "not-found") return item;
      let {
          name: name_3,
          marketplace: marketplace_6
        } = Cn(item.dependency),
        sameNameSyncedPlugin = marketplace_6 === void 0 || i$(marketplace_6.toLowerCase()) || Cn(item.source).marketplace === Pi ? void 0 : l.get(rr(name_3));
      return sameNameSyncedPlugin === void 0 ? item : {
        ...item,
        sameNameSyncedPlugin: sameNameSyncedPlugin
      };
    })
  };
}
function lNt(e, n) {
  return W(e, n).map(item => item.name);
}
function W(e, n) {
  return n.filter(item => item.enabled && item.source !== e && (item.manifest.dependencies ?? []).some(s => $2n(RH(s, item.source), e, item.source)));
}
function MDs(e, n) {
  let o = new Set([e]),
    s = [],
    i = d => {
      for (let {
        source: source
      } of W(d, n)) {
        if (o.has(source)) continue;
        o.add(source), i(source), s.push(source);
      }
    };
  return i(e), s;
}
function bx(e) {
  return e === !0 || Array.isArray(e);
}
function x9e(e) {
  return new Set(Object.entries(me(e)?.enabledPlugins ?? {}).filter(([, n]) => bx(n)).map(([n]) => n));
}
function DDs(e, n, o, s) {
  let i = new Set(),
    d = new Set();
  for (let [a, g] of Object.entries(e)) {
    let p = rA(g, o, s);
    if (!p) continue;
    if (p.auto === !0) d.add(a);else i.add(a);
  }
  if (d.size === 0) return {
    orphans: new Set(),
    unloadable: [],
    autoCount: 0
  };
  let c = new Map(n.map(item => [item.source, item])),
    unloadable = [];
  for (let a of [...i, ...d]) if (!c.has(a)) unloadable.push(a);
  if (unloadable.length > 0) return {
    orphans: new Set(),
    unloadable: unloadable,
    autoCount: d.size
  };
  let f = new Set();
  function l(a) {
    if (f.has(a)) return;
    f.add(a);
    let g = c.get(a);
    if (!g) return;
    for (let p of g.manifest.dependencies ?? []) l(RH(p, g.source));
  }
  for (let a of i) l(a);
  let orphans = new Set();
  for (let a of d) if (!f.has(a)) orphans.add(a);
  return {
    orphans: orphans,
    unloadable: [],
    autoCount: d.size
  };
}
function LDs(e, n) {
  if (e.size === 0) return "";
  let o = [...e].map(item => E1e(Cn(item).name)),
    s = 5,
    i = o.length <= s ? o.join(", ") : `${o.slice(0, s).join(", ")}, \u2026`,
    d = n === "user" ? "" : ` --scope ${n}`;
  return `
${e.size} auto-installed ${O(e.size, "dependency", "dependencies")} no longer needed: ${i}. Run \`claude plugin prune${d}\` to remove.`;
}
var re = /^[A-Za-z0-9][-A-Za-z0-9._]*$/,
  ie = 64,
  vPr = 256,
  E = 5;
function E1e(e, n = ie) {
  return e.length <= n && re.test(e) ? e : Gl(Rt(e.replace(t9n, ""), 64)) || "\u201C\u201D";
}
function T1e(e) {
  let {
    name: name_4,
    marketplace: marketplace_7
  } = Cn(e);
  if (marketplace_7 === void 0) return E1e(name_4);
  return `${name_4}@${marketplace_7}` === e ? `${E1e(name_4)}@${E1e(marketplace_7)}` : E1e(e);
}
function Nft(e) {
  return e.startsWith("\u201C") ? e : `"${e}"`;
}
function qee(e) {
  if (e.length === 0) return "";
  let n = e.length,
    o = e.slice(0, E).map(item => E1e(Cn(item).name)),
    s = n <= E ? o.join(", ") : `${o.join(", ")}, \u2026`;
  return ` (+ ${n} ${O(n, "dependency", "dependencies")}: ${s})`;
}
function NDs(e, n) {
  if (e.length === 0) return "";
  let o = e.length,
    s = n.map(item => Cn(item).marketplace).find(item => item !== void 0),
    i = s !== void 0 ? ` Is the ${Nft(E1e(s, vPr))} marketplace added?` : n.length > 0 ? " Add the dependency's marketplace, then re-run install." : "",
    d = e.slice(0, E).map(T1e).join(", "),
    c = o <= E ? `${d}.` : `${d} and ${o - E} more.`;
  return ` \u2014 ${o} ${O(o, "dependency", "dependencies")} still unresolved: ${c}${i}`;
}
function bRo(e) {
  if (!e || e.length === 0) return "";
  return ` \u2014 warning: required by ${e.map(T1e).join(", ")}`;
}
function Jon(e, n) {
  let o = new Map(n.map(item => [item.source, item])),
    s = new Map();
  for (let r of n) {
    let a = s.get(r.name);
    if (!a || !a.enabled && r.enabled) s.set(r.name, r);
  }
  let i = (r, a) => {
      let g = Pw(r),
        {
          name: name_5,
          marketplace: marketplace_8
        } = Cn(g);
      if (!marketplace_8) {
        let M = o.get(g) ?? s.get(g),
          P = j(g),
          m = P === void 0 ? void 0 : o.get(P);
        return M?.enabled || !m?.enabled ? M ?? m : m;
      }
      let y = o.get(g);
      if (y?.enabled) return y;
      let w = o.get(`${name_5}@${Tc}`);
      if (w?.enabled) return w;
      let h = a === void 0 ? void 0 : D(g, a),
        b = h === void 0 ? void 0 : o.get(h);
      if (b?.enabled) return b;
      return y ?? w ?? b;
    },
    closure_2 = [],
    missing = [],
    u = i(e, void 0),
    f = new Set([e]);
  if (u) f.add(u.source);
  let l = u ? (u.manifest.dependencies ?? []).map(r => ({
    id: r,
    declaringId: u.source
  })) : [];
  while (l.length > 0) {
    let r = l.shift();
    if (!r) break;
    let a = RH(r.id, r.declaringId),
      g = i(a, r.declaringId);
    if (!g) {
      if (!f.has(a)) f.add(a), missing.push(a);
      continue;
    }
    if (f.has(g.source)) continue;
    f.add(g.source), closure_2.push(g.source);
    for (let id of g.manifest.dependencies ?? []) l.push({
      id: id,
      declaringId: g.source
    });
  }
  return {
    closure: closure_2,
    missing: missing
  };
}
function j(e) {
  let n = V8n(e);
  return n === e ? void 0 : `${n}@${oi}`;
}
function up() {
  let e = Fft();
  return e ? new Set(e.map(item => item.name)) : null;
}
function kM() {
  let e = me("policySettings"),
    n = B(),
    o = v(e),
    s = n === e ? null : v(n);
  return o && s ? new Set([...o, ...s]) : o ?? s;
}
function SRo() {
  let names_2 = nTe(),
    n = A(names_2),
    o = Q(n),
    enables = o ? names_2 : me("policySettings"),
    names = tTe();
  if (hBt().servedSnapshot) return {
    enables: enables,
    names: names
  };
  if (o) return {
    enables: enables,
    names: names_2
  };
  let d = new Map(),
    c = new Set();
  for (let f of n) {
    let l = Object.entries(f.extraKnownMarketplaces ?? {}).filter(([r]) => !c.has(rr(r)));
    for (let [r, a] of l) d.set(r, a);
    for (let [r] of l) c.add(rr(r));
  }
  let u = c.size > 0 || n.some(item => item.strictKnownMarketplaces !== void 0);
  return {
    enables: enables,
    names: u ? {
      extraKnownMarketplaces: Object.fromEntries(d),
      ...(names_2?.strictKnownMarketplaces !== void 0 && {
        strictKnownMarketplaces: names_2.strictKnownMarketplaces
      })
    } : names
  };
}
function xj() {
  let e = v(B());
  if (e === null || Ngt()) return e;
  let vouchedManagedPluginIds = Ne().vouchedManagedPluginIds,
    o = [...e].filter(item => Oi(item) === oi || vouchedManagedPluginIds.has(rr(item)));
  return o.length > 0 ? new Set(o) : null;
}
function lke(e) {
  let n = rr(e);
  return [...(xj() ?? [])].some(item => rr(item) === n);
}
function FDs(e) {
  let n = SRo(),
    o = new Set([...(v(n.enables) ?? [])].map(rr)),
    s = e.filter(item => o.has(rr(item.source))),
    i = s.filter(item => Oi(item.source) !== oi && !Y(item, n.names)),
    d = tTe();
  for (let l of i) {
    if (l.modulePath === void 0) continue;
    let r = Ge(l.source);
    if (l.readInPlace !== !0) t(`${r} is enabled by managed settings, but it is not read in place from a local folder its marketplace is registered from: it loads from a copy (the plugin cache, an archive or a seed directory), or that marketplace has no folder of its own. Nothing yet records which source a copy was taken from, so it is not treated as the organization's: its hooks module runs in the user tier, and does not load where only managed hooks may. It is seated when managed settings declare its marketplace under extraKnownMarketplaces as a local directory and that marketplace lists it by a relative path. A plugin delivered from a remote source gains the tier in a later release.`, {
      level: "warn"
    });else if (Y(l, d)) t(`${r} is enabled by managed settings, but the source its marketplace is registered from is named only by ${Z}, so it is not treated as the organization's: its hooks module runs in the user tier. It is seated when managed settings the session vouches for (this machine's own, or remote managed settings once the server confirms them) declare that source for its marketplace under extraKnownMarketplaces.`, {
      level: "warn"
    });else t(`${r} is enabled by managed settings, but managed settings do not name the source its marketplace is registered from, so it is not treated as the organization's: its hooks module runs in the user tier. It is seated when the marketplace is registered from the source that managed settings declare for it under extraKnownMarketplaces.`, {
      level: "warn"
    });
  }
  let c = U(A(nTe())) ? "settings it does vouch for list or enable plugins on this machine" : "a managed settings source on this machine was not read whole (a load error, or a plugin key it could not apply), so what it says of plugins is not known",
    u = new Set([...(v(me("policySettings")) ?? [])].map(rr));
  for (let l of e) {
    let r = rr(l.source);
    if (l.modulePath !== void 0 && Oi(l.source) !== oi && u.has(r) && !o.has(r)) t(`${Ge(l.source)} is enabled only by ${Z}, while ${c}, so it is not treated as the organization's: its hooks module runs in the user tier, and does not load where only managed hooks may. It can be seated only once managed settings the session vouches for enable it: this machine's own, or remote managed settings once the server confirms them.`, {
      level: "warn"
    });
  }
  let f = new Set(i.map(item => rr(item.source)));
  Ne().vouchedManagedPluginIds = new Set(s.map(item => rr(item.source)).filter(item => !f.has(item)));
}
function Y(e, policySettings) {
  let declaredUnder = Oi(e.source),
    marketplaceSource = e.marketplaceSource;
  if (declaredUnder === void 0 || marketplaceSource === void 0 || e.readInPlace !== !0 || i$(rr(declaredUnder))) return !1;
  if (zl(declaredUnder)) return usn(marketplaceSource) || hNt(marketplaceSource, void 0, {
    policySettings: policySettings,
    declaredUnder: declaredUnder
  });
  return hNt(marketplaceSource, void 0, {
    policySettings: policySettings,
    declaredUnder: CRo(declaredUnder, policySettings) ? declaredUnder : void 0
  });
}
var Z = "managed settings this session does not vouch for (such as remote managed settings the server has not confirmed this session, or a document your user account can write)";
function B() {
  let e = nTe();
  return Q(A(e)) ? e : me("policySettings");
}
function Q(e) {
  return U(e) || BHo();
}
function v(e) {
  let n = Ngt();
  if (n) return new Set(n.managedIds);
  let o = e?.enabledPlugins;
  if (!o) return null;
  let s = new Set();
  for (let [i, d] of Object.entries(o)) if (d === !0 && i.includes("@")) s.add(Pw(i));
  return s.size > 0 ? s : null;
}
function Fft() {
  let e = me("policySettings")?.enabledPlugins;
  if (!e) return null;
  let n = new Set(_Ho()),
    o = [];
  for (let [s, enabled] of Object.entries(e)) {
    if (typeof enabled !== "boolean" || !s.includes("@")) continue;
    let {
      name: name_6,
      marketplace: marketplace_9
    } = Cn(s);
    if (name_6) {
      let u = `${name_6}@${marketplace_9 ?? ""}` === s;
      o.push({
        name: name_6,
        marketplace: u ? marketplace_9 ?? "" : "",
        enabled: enabled,
        ...(!enabled && n.has(s) && {
          heldOff: !0
        })
      });
    }
  }
  return o.length > 0 ? o : null;
}
function dke(e, n, o) {
  if (!e) return {
    outcome: "unmatched"
  };
  let s = rr(n),
    i = e.filter(item => Z8n(item).some(item => rr(item) === s)),
    d = i.some(item => item.enabled) ? i.filter(item => item.heldOff !== !0) : i,
    entry_2 = d[0];
  if (entry_2 === void 0) return {
    outcome: "unmatched"
  };
  let entry = d.find(item => !item.enabled);
  if (entry) return {
    outcome: "locked",
    entry: entry
  };
  if (o !== void 0 && d.some(item => !i$(rr(item.marketplace)) && rr(item.marketplace) === rr(o))) return {
    outcome: "admitted"
  };
  return {
    outcome: "locked",
    entry: entry_2
  };
}
function h3() {
  let e = Ngt();
  if (e) return e.order;
  let n = Vee() || Y5n(),
    o = Wo().includes("userSettings") ? me("userSettings") : null,
    s = n ? void 0 : wPr(),
    i = s !== void 0 && s.outermost.length > 0,
    d = AK(),
    c = !n && !i && d,
    u = !n && !i && !c,
    holder = n ? nTe() : u ? o : null,
    slot = n ? me("policySettings") : null,
    r = ["prependPlugins", "appendPlugins"],
    a = r.map(item => holder?.[item]?.map(N)),
    g = s ?? wPr(a[0]),
    k = n && g.outermost.length === 0 ? wPr(slot?.prependPlugins?.map(N)) : g,
    y = k.outermost.length > 0 ? k : g,
    h = d && y.outermost.length === 0 && (!n || RDs) ? CDs() : y,
    [b, M] = r.map((P, index) => {
      let ids = a[index] ?? ae({
        key: P,
        slot: slot,
        holder: holder,
        outermost: h.outermost
      });
      return {
        ids: ids,
        from: ids === void 0 ? "none" : n ? "policy" : "user",
        shadowed: !u && o?.[P] !== void 0
      };
    });
  return {
    prepend: b.ids ?? [],
    append: M.ids ?? [],
    from: {
      prepend: b.from,
      append: M.from
    },
    shadowed: r.filter((item, index) => [b, M][index].shadowed),
    ...(i && {
      shadowedBy: "seat"
    }),
    ...(c && {
      shadowedBy: "host"
    }),
    ...h
  };
}
function N(e) {
  return Pw(rr(e));
}
function ae({
  key: key,
  slot: slot_2,
  holder: holder_2,
  outermost: outermost
}) {
  let i = slot_2?.[key]?.map(N);
  if (i === void 0) return;
  let d = A(holder_2);
  if (key === "prependPlugins" && U(d)) return;
  let c = new Set(d.flatMap(item => [...(item.prependPlugins ?? []), ...(item.appendPlugins ?? []), ...Object.keys(item.enabledPlugins ?? {})]).map(N));
  return i.filter(item => !c.has(item) && !outermost.includes(item));
}
function A(e) {
  return [e ?? {}, ...Oun()];
}
function U(e) {
  return e.some(item => (item.prependPlugins?.length ?? 0) > 0 || (item.appendPlugins?.length ?? 0) > 0 || Object.values(item.enabledPlugins ?? {}).some(item => item !== !1));
}
function z() {
  let e = Ngt();
  if (e) return [...e.managedIds];
  return [me("policySettings"), B()].flatMap(item => Object.entries(item?.enabledPlugins ?? {})).filter(([n, o]) => bx(o) && n.includes("@")).map(([n]) => Pw(n));
}
function dNt() {
  return nv() || z().length > 0;
}
function HDs() {
  let e = z();
  return e.length > 0 ? new Set(e) : null;
}
function $Ds(e) {
  let n = rr(e);
  return nv() || z().some(item => rr(item) === n);
}
export { ume, CDs, bPr, Vee, SPr, wPr, RDs, F2n, H2n, ADs, rA, _Ro, iNt, xDs, RH, $2n, aNt, Xon, U2n, B2n, PDs, ODs, IDs, lNt, MDs, bx, x9e, DDs, LDs, vPr, E1e, T1e, Nft, qee, NDs, bRo, Jon, up, kM, SRo, xj, lke, FDs, Fft, dke, h3, dNt, HDs, $Ds };