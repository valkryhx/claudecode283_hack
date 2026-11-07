// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { LKe, vp, SH, FLr, Rg, hp, Pi, ri, dm, wk, zLr, $n, di, Un, Sd, KLr, Ttt } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { P } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { Et, Qe, Wd } from "B:/~BUN/root/chunk-2f1svh63.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { Ef, dr } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { $o } from "B:/~BUN/root/chunk-6n5g80b8.js";
import { CNs, be, Pl, Ste, uHe, bpe, rtt, HSe, M0r, qNs } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { nb } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { bRe } from "B:/~BUN/root/chunk-hnth82be.js";
import { J_ } from "B:/~BUN/root/chunk-79dw4seg.js";
import { Tee, Q_, KEs, knn, Fht } from "B:/~BUN/root/chunk-esnm3r09.js";
import { Ae } from "B:/~BUN/root/chunk-eds8xkh8.js";
import { L$n, GFt, mqi } from "B:/~BUN/root/chunk-sjvfdrzm.js";
import { D } from "B:/~BUN/root/chunk-8mqsat26.js";
import { nt } from "B:/~BUN/root/chunk-tq5dzbq9.js";
import { Oe } from "B:/~BUN/root/chunk-4qfwb3rf.js";
import { he } from "B:/~BUN/root/chunk-fet34rqr.js";
var Ese = LKe + "@" + ri;
var gGi = () => ({
  outermost: [Ese],
  seat: `${Ese} seated outermost by default: it is not known that neither policy nor plan would seat it`
});
var yCr = he(Ef(), e => e.set(null));
var vee = he(Ef(), e => e.set(null));
function _Cr() {
  let e = yCr.get(),
    n = e === "pro" || e === "max",
    o = vee.get() === "empty" && Q_() === "answered";
  return n && o && mqi() === e;
}
function $go() {
  if (vee.get() === "empty") vee.set(null);
}
function Ugo() {
  if (vee.get() !== "served") vee.set("empty");
}
function Bgo(e, n) {
  let o = vp() ? L$n() : null;
  if (o?.kind === "bearer" && nt(o.token) === e && !GFt()) yCr.set(n ?? null);
}
function jgo(e) {
  let n = D(e),
    o = n ? e.settings : void 0,
    r = D(o) && Object.keys(o).length === 0,
    s = e === null || e === void 0 || e === "" || n && Object.keys(e).length === 0;
  if (!r && !s) vee.set("served");
}
var nnn = Ef();
function zue() {
  let e = be("policySettings");
  return e !== null && Object.keys(e).length > 0;
}
var Wgo = he(Ef(), e => e.set(null));
function zgo(e) {
  let n = e !== void 0,
    o = e?.indexOf(Ese) ?? -1,
    r = o !== -1,
    s = zue() || M0r(),
    a = s || nnn.get()?.() === !0,
    u = n || a ? void 0 : dr(),
    l = u === "team" || u === "enterprise",
    f = Wgo.get() === !0,
    i = n ? r : a || l || f,
    d = n ? r ? `seated by managed prependPlugins at position ${o + 1}` : "not seated: managed prependPlugins does not list it" : a ? s ? "seated outermost: this machine has managed settings" : "seated outermost: this machine has a managed MCP server file" : l ? `seated outermost: the organization is ${u}` : f ? "seated outermost: it was seated earlier in this session, and a seat holds until the session ends" : `not seated: no managed settings and not a Team or Enterprise organization (${u ?? "none"})`;
  if (i) Wgo.set(!0);
  return {
    outermost: i ? [Ese] : [],
    seat: `${Ese} ${d}`
  };
}
var yGi = !0;
function N(e, n) {
  let {
    name: name,
    marketplace: marketplace
  } = $n(n);
  if (marketplace === void 0) return;
  let s = e?.extraKnownMarketplaces ?? {},
    a = Object.keys(s).filter(item => Un(item) === Un(marketplace)).flatMap(item => {
      let u = s[item]?.pluginDigests ?? {};
      return Object.keys(u).filter(item => Un(item) === Un(name)).map(item => u[item] ?? []);
    });
  return a.length > 0 ? a.flat() : void 0;
}
function _(e, n) {
  let o = Un(n),
    r = e?.enabledPlugins ?? {},
    s = Object.keys(r).some(item => r[item] === !0 && Un(item) === o),
    a = [...(e?.prependPlugins ?? []), ...(e?.appendPlugins ?? [])].some(item => Un(item) === o);
  return s && a ? N(e, n) : void 0;
}
function rnn(e) {
  if (bRe()) return;
  let n = uHe(),
    o = n.servedSnapshot || n.settings !== null && !Ttt(),
    r = o ? Ste() : HSe(),
    s = _(r, e),
    a = N(n.settings, e);
  return s === void 0 || o || a !== void 0 && s.every(item => a.includes(item)) ? s : _(Ste(), e);
}
var S = Oe(nb(), 1);
import { win32 as J } from "path";
function bCr(e, n) {
  return G(e) === G(n);
}
function j(e, n, o) {
  return e.scope === n && e.projectPath === o;
}
function SCr(e, n, o) {
  if (e.scope !== n) return !1;
  if (e.projectPath === void 0 || o === void 0) return e.projectPath === o;
  return bCr(e.projectPath, o);
}
function _Gi(e, n, o) {
  return !j(e, n, o) && SCr(e, n, o);
}
function GI(e, n, o) {
  let r = kEs(e, n, o);
  return r >= 0 ? e?.[r] : void 0;
}
function kEs(e, n, o) {
  if (e === void 0) return -1;
  let r = e.findIndex(item => j(item, n, o));
  return r >= 0 ? r : e.findIndex(item => SCr(item, n, o));
}
function onn(e, n, o) {
  let r = (e ?? []).filter(item => j(item, n, o));
  if (r.length > 0) return r;
  let s = GI(e, n, o);
  return s === void 0 ? [] : [s];
}
function G(e) {
  if (x() !== "windows" || /^\/(?!\/)/.test(e) || /^[\\/]{2}[?.][\\/]/.test(e) || /(^|[\\/])\.{1,2}([\\/]|$)/.test(e)) return e;
  let n = J.normalize(e),
    o = n.length > J.parse(n).root.length ? n.replace(/[\\/]+$/, "") : n;
  return /^[a-z]:/i.test(o) ? o[0].toLowerCase() + o.slice(1) : o;
}
function bGi(e) {
  if (e === null || typeof e !== "object") return;
  let n = "dependencies" in e ? e.dependencies : void 0;
  if (!Array.isArray(n)) return;
  let o = new Map();
  for (let r of n) {
    if (r === null || typeof r !== "object") continue;
    let s = "name" in r ? r.name : void 0;
    if (typeof s !== "string" || s.length === 0) continue;
    let version = "version" in r && typeof r.version === "string" ? r.version : void 0,
      sha = "sha" in r && typeof r.sha === "string" ? r.sha : void 0;
    if (version === void 0 && sha === void 0) continue;
    let u = "marketplace" in r && typeof r.marketplace === "string" ? r.marketplace : void 0,
      l = u ? `${s}@${u}` : s;
    o.set(l, {
      version: version,
      sha: sha
    });
  }
  return o.size > 0 ? o : void 0;
}
function SD(e, n) {
  if ($n(e).marketplace) return e;
  let marketplace_2 = $n(n).marketplace;
  if (!marketplace_2 || dm(marketplace_2)) return e;
  return `${e}@${marketplace_2}`;
}
function zNt(e, n, o) {
  let r = wk(e),
    s = $n(r),
    a = $n(n);
  if (!s.marketplace) return a.name === s.name || n === F(e);
  return n === r || a.name === s.name && a.marketplace === hp || n === U(r, o);
}
function U(e, n) {
  let {
    name: name_2,
    marketplace: marketplace_3
  } = $n(e);
  if (marketplace_3 === void 0 || SH(marketplace_3.toLowerCase()) || $n(n).marketplace !== Pi) return;
  let s = `${name_2}@${Pi}`;
  return s === n ? void 0 : s;
}
var C = 1024,
  q = 4096;
function B(e) {
  return t(`intersectConstraints: ${e} \u2014 treating as too complex`, {
    level: "warn"
  }), {
    ok: !1,
    reason: "too-complex"
  };
}
function snn(e) {
  if (e.length === 0) return {
    ok: !0,
    range: "*"
  };
  let n = 0;
  for (let c of e) n += c.length;
  if (n > q) return B(`total input ${n} chars > ${q}`);
  let o = [];
  for (let c of e) {
    let u = S.validRange(c);
    if (u === null) return {
      ok: !1,
      reason: "invalid"
    };
    o.push(u.split("||").map(item => item.trim()).filter(Boolean));
  }
  let r = o[0] ?? [];
  if (r.length > C) return B(`${r.length} conjuncts after 1/${e.length} inputs > ${C}`);
  for (let c = 1; c < o.length; c++) {
    let u = o[c] ?? [],
      l = r.length * u.length;
    if (l > C) return B(`${l} conjuncts after ${c + 1}/${e.length} inputs > ${C}`);
    let f = [];
    for (let i of r) for (let d of u) f.push(`${i} ${d}`);
    r = f;
  }
  let s = r.filter(item => {
    let u = S.validRange(item);
    return u !== null && S.minVersion(u) !== null;
  });
  if (s.length === 0) return {
    ok: !1,
    reason: "disjoint"
  };
  let range = S.validRange(s.join(" || "));
  return range === null ? {
    ok: !1,
    reason: "disjoint"
  } : {
    ok: !0,
    range: range
  };
}
var W = 200;
function Y(e) {
  return /^[\x20-\x7e]+$/.test(e) && S.validRange(e) !== null ? e : Wd(Et(e, 64)) || "\u201C\u201D";
}
function Pe(e) {
  return /^[0-9A-Za-z][0-9A-Za-z.+-]{0,63}$/.test(e) ? e : Wd(Et(e, 64)) || "\u201C\u201D";
}
function Z(e) {
  if (e.length <= W) return e;
  let n = e.slice(0, W),
    o = n.lastIndexOf("\u201C") > n.lastIndexOf("\u201D") ? n.slice(0, n.lastIndexOf("\u201C")) : n;
  return `${o}\u2026 (+${e.length - o.length} chars)`;
}
function QFn(e, n, o, r, s, a) {
  let c = Z(o.map(Y).join(", ")),
    u = GNt(K7e(n));
  switch (r) {
    case "disjoint":
      return `${e} ${u} has conflicting version requirements (no version satisfies all of: ${c})`;
    case "too-complex":
      return `${e} ${u} has version requirements too complex to intersect \u2014 simplify the ranges: ${c}`;
    case "invalid":
      return `${e} ${u} has an invalid version requirement among: ${c}`;
    case "installed-unsatisfied":
      return `${e} ${u} is installed at ${s === void 0 ? "an unknown version" : Pe(s)}, which does not satisfy: ${c}${a ? `. To look for a version in range, ${Rg("plugin update", n, {
        fallback: "update that plugin"
      })}` : ""}`;
  }
}
function wCr(e, n, o) {
  let r = Z(Y(o));
  return `${e} ${GNt(K7e(n))} has no git tag satisfying ${r}`;
}
function kCr(e, n) {
  let o = S.valid(e) ?? S.coerce(e)?.version;
  return o !== void 0 && S.satisfies(o, n);
}
function SGi(e, n) {
  let o = [];
  for (let plugin of n) {
    if (!plugin.depConstraints) continue;
    for (let [s, constraint] of plugin.depConstraints) if (SD(s, plugin.source) === e) {
      o.push({
        plugin: plugin,
        constraint: constraint
      });
      break;
    }
  }
  return o;
}
async function wGi(e, n, o, r = new Set(), s) {
  let marketplace_4 = $n(e).marketplace,
    closure = [],
    u = new Set(),
    l = [];
  async function f(d, requiredBy) {
    if (d !== e && o.has(d) && !s?.has(d)) return null;
    let marketplace_5 = $n(d).marketplace;
    if (!o.has(d) && marketplace_5 !== marketplace_4 && !(marketplace_5 && r.has(marketplace_5))) return {
      ok: !1,
      reason: "cross-marketplace",
      dependency: d,
      requiredBy: requiredBy
    };
    if (l.includes(d)) return {
      ok: !1,
      reason: "cycle",
      chain: [...l, d]
    };
    if (u.has(d)) return null;
    u.add(d);
    let w = await n(d);
    if (!w) {
      if (d !== e && o.has(d)) return t(`resolveDependencyClosure: force-included ${d} has no catalog entry; skipping (pinner stays demoted)`), null;
      return {
        ok: !1,
        reason: "not-found",
        missing: d,
        requiredBy: requiredBy
      };
    }
    l.push(d);
    for (let h of w.dependencies ?? []) {
      let k = SD(h, d),
        y = await f(k, d);
      if (y) return y;
    }
    return l.pop(), closure.push(d), null;
  }
  let i = await f(e, e);
  if (i) return i;
  return {
    ok: !0,
    closure: closure
  };
}
function kGi(e) {
  let n = new Set(e.map(item => item.source)),
    o = new Set(e.filter(item => item.enabled).map(item => item.source)),
    r = new Map(e.map(item => [item.source, item])),
    s = new Set(e.map(item => $n(item.source).name)),
    a = new Map();
  for (let i of o) {
    let d = $n(i).name;
    a.set(d, (a.get(d) ?? 0) + 1);
  }
  let c = [],
    u = !0;
  while (u) {
    u = !1;
    for (let i of e) {
      if (!o.has(i.source)) continue;
      for (let d of i.manifest.dependencies ?? []) {
        let p = wk(SD(d, i.source)),
          g = !$n(p).marketplace,
          w = g ? F(p) : void 0,
          h = g ? void 0 : `${$n(p).name}@${hp}`,
          k = h !== void 0 && !o.has(p) && o.has(h),
          y = U(p, i.source),
          M = y !== void 0 && !o.has(p) && !k && o.has(y),
          v = g ? (a.get(p) ?? 0) > 0 || w !== void 0 && o.has(w) : o.has(p) || k || M,
          I;
        if (!v) {
          let m = h !== void 0 && !n.has(p) && n.has(h),
            b = y !== void 0 && !n.has(p) && !m && n.has(y);
          I = {
            type: "dependency-unsatisfied",
            source: i.source,
            plugin: i.name,
            dependency: m ? h : b ? y : p,
            reason: (g ? s.has(p) || w !== void 0 && n.has(w) : n.has(p) || m || b) ? "not-enabled" : "not-found"
          };
        } else if (!g && !k) {
          let required = i.depConstraints?.get(d)?.version;
          if (required !== void 0) {
            let dependency = M ? y : p,
              E = r.get(dependency),
              installed = E?.resolvedVersion ?? E?.manifest.version;
            if (!(M && installed === void 0) && !kCr(installed, required)) I = {
              type: "dependency-version-unsatisfied",
              source: i.source,
              plugin: i.name,
              dependency: dependency,
              required: required,
              installed: installed
            };
          }
        }
        if (I) {
          o.delete(i.source);
          let m = $n(i.source).name,
            b = a.get(m) ?? 0;
          if (b <= 1) a.delete(m);else a.set(m, b - 1);
          c.push(I), u = !0;
          break;
        }
      }
    }
  }
  let demoted = new Set(e.filter(item => item.enabled && !o.has(item.source)).map(item => item.source)),
    f = new Map();
  for (let i of o) {
    let {
      name: name_3,
      marketplace: marketplace_6
    } = $n(i);
    if (marketplace_6 === Pi) f.set(Un(name_3), i);
  }
  return {
    demoted: demoted,
    errors: c.map(item => {
      if (item.type !== "dependency-unsatisfied" || item.reason !== "not-found") return item;
      let {
          name: name_4,
          marketplace: marketplace_7
        } = $n(item.dependency),
        sameNameSyncedPlugin = marketplace_7 === void 0 || SH(marketplace_7.toLowerCase()) || $n(item.source).marketplace === Pi ? void 0 : f.get(Un(name_4));
      return sameNameSyncedPlugin === void 0 ? item : {
        ...item,
        sameNameSyncedPlugin: sameNameSyncedPlugin
      };
    })
  };
}
function inn(e, n) {
  return Q(e, n).map(item => item.name);
}
function Q(e, n) {
  return n.filter(item => item.enabled && item.source !== e && (item.manifest.dependencies ?? []).some(r => zNt(SD(r, item.source), e, item.source)));
}
function vGi(e, n) {
  let o = new Set([e]),
    r = [],
    s = a => {
      for (let {
        source: source
      } of Q(a, n)) {
        if (o.has(source)) continue;
        o.add(source), s(source), r.push(source);
      }
    };
  return s(e), r;
}
function wD(e) {
  return e === !0 || Array.isArray(e);
}
function Rht(e) {
  return new Set(Object.entries(Pl(e)?.enabledPlugins ?? {}).filter(([, n]) => wD(n)).map(([n]) => n));
}
function EGi(e, n, o, r) {
  let s = new Set(),
    a = new Set();
  for (let [d, p] of Object.entries(e)) {
    let g = GI(p, o, r);
    if (!g) continue;
    if (g.auto === !0) a.add(d);else s.add(d);
  }
  if (a.size === 0) return {
    orphans: new Set(),
    unloadable: [],
    autoCount: 0
  };
  let c = new Map(n.map(item => [item.source, item])),
    unloadable = [];
  for (let d of [...s, ...a]) if (!c.has(d)) unloadable.push(d);
  if (unloadable.length > 0) return {
    orphans: new Set(),
    unloadable: unloadable,
    autoCount: a.size
  };
  let l = new Set();
  function f(d) {
    if (l.has(d)) return;
    l.add(d);
    let p = c.get(d);
    if (!p) return;
    for (let g of p.manifest.dependencies ?? []) f(SD(g, p.source));
  }
  for (let d of s) f(d);
  let orphans = new Set();
  for (let d of a) if (!l.has(d)) orphans.add(d);
  return {
    orphans: orphans,
    unloadable: [],
    autoCount: a.size
  };
}
function TGi(e, n) {
  if (e.size === 0) return "";
  let o = [...e].map(item => V7e($n(item).name)),
    r = 5,
    s = o.length <= r ? o.join(", ") : `${o.slice(0, r).join(", ")}, \u2026`,
    a = n === "user" ? "" : ` --scope ${n}`;
  return `
${e.size} auto-installed ${P(e.size, "dependency", "dependencies")} no longer needed: ${s}. Run \`claude plugin prune${a}\` to remove.`;
}
var Se = /^[A-Za-z0-9][-A-Za-z0-9._]*$/,
  xe = 64,
  Ggo = 256,
  O = 5;
function V7e(e, n = xe) {
  return e.length <= n && Se.test(e) ? e : Wd(Et(e.replace(KLr, ""), 64)) || "\u201C\u201D";
}
function K7e(e) {
  let {
    name: name_5,
    marketplace: marketplace_8
  } = $n(e);
  if (marketplace_8 === void 0) return V7e(name_5);
  return `${name_5}@${marketplace_8}` === e ? `${V7e(name_5)}@${V7e(marketplace_8)}` : V7e(e);
}
function GNt(e) {
  return e.startsWith("\u201C") ? e : `"${e}"`;
}
function Gue(e) {
  if (e.length === 0) return "";
  let n = e.length,
    o = e.slice(0, O).map(item => V7e($n(item).name)),
    r = n <= O ? o.join(", ") : `${o.join(", ")}, \u2026`;
  return ` (+ ${n} ${P(n, "dependency", "dependencies")}: ${r})`;
}
function vEs(e, n) {
  if (e.length === 0) return "";
  let o = e.length,
    r = n.map(item => $n(item).marketplace).find(item => item !== void 0),
    s = r !== void 0 ? ` Is the ${GNt(V7e(r, Ggo))} marketplace added?` : n.length > 0 ? " Add the dependency's marketplace, then re-run install." : "",
    a = e.slice(0, O).map(K7e).join(", "),
    c = o <= O ? `${a}.` : `${a} and ${o - O} more.`;
  return ` \u2014 ${o} ${P(o, "dependency", "dependencies")} still unresolved: ${c}${s}`;
}
function EEs(e) {
  if (!e || e.length === 0) return "";
  return ` \u2014 warning: required by ${e.map(K7e).join(", ")}`;
}
function ZFn(e, n) {
  let o = new Map(n.map(item => [item.source, item])),
    r = new Map();
  for (let i of n) {
    let d = r.get(i.name);
    if (!d || !d.enabled && i.enabled) r.set(i.name, i);
  }
  let s = (i, d) => {
      let p = wk(i),
        {
          name: name_6,
          marketplace: marketplace_9
        } = $n(p);
      if (!marketplace_9) {
        let v = o.get(p) ?? r.get(p),
          I = F(p),
          m = I === void 0 ? void 0 : o.get(I);
        return v?.enabled || !m?.enabled ? v ?? m : m;
      }
      let h = o.get(p);
      if (h?.enabled) return h;
      let k = o.get(`${name_6}@${hp}`);
      if (k?.enabled) return k;
      let y = d === void 0 ? void 0 : U(p, d),
        M = y === void 0 ? void 0 : o.get(y);
      if (M?.enabled) return M;
      return h ?? k ?? M;
    },
    closure_2 = [],
    missing = [],
    u = s(e, void 0),
    l = new Set([e]);
  if (u) l.add(u.source);
  let f = u ? (u.manifest.dependencies ?? []).map(i => ({
    id: i,
    declaringId: u.source
  })) : [];
  while (f.length > 0) {
    let i = f.shift();
    if (!i) break;
    let d = SD(i.id, i.declaringId),
      p = s(d, i.declaringId);
    if (!p) {
      if (!l.has(d)) l.add(d), missing.push(d);
      continue;
    }
    if (l.has(p.source)) continue;
    l.add(p.source), closure_2.push(p.source);
    for (let id of p.manifest.dependencies ?? []) f.push({
      id: id,
      declaringId: p.source
    });
  }
  return {
    closure: closure_2,
    missing: missing
  };
}
function F(e) {
  let n = FLr(e);
  return n === e ? void 0 : `${n}@${ri}`;
}
function sp() {
  let e = VNt();
  return e ? new Set(e.map(item => item.name)) : null;
}
function kD() {
  let e = be("policySettings"),
    n = z(),
    o = A(e),
    r = n === e ? null : A(n);
  return o && r ? new Set([...o, ...r]) : o ?? r;
}
function TEs() {
  let names_2 = HSe(),
    n = R(names_2),
    o = ne(n),
    enables = o ? names_2 : be("policySettings"),
    names = bpe();
  if (uHe().servedSnapshot) return {
    enables: enables,
    names: names
  };
  if (o) return {
    enables: enables,
    names: names_2
  };
  let a = new Map(),
    c = new Set();
  for (let l of n) {
    let f = Object.entries(l.extraKnownMarketplaces ?? {}).filter(([i]) => !c.has(Un(i)));
    for (let [i, d] of f) a.set(i, d);
    for (let [i] of f) c.add(Un(i));
  }
  let u = c.size > 0 || n.some(item => item.strictKnownMarketplaces !== void 0);
  return {
    enables: enables,
    names: u ? {
      extraKnownMarketplaces: Object.fromEntries(a),
      ...(names_2?.strictKnownMarketplaces !== void 0 && {
        strictKnownMarketplaces: names_2.strictKnownMarketplaces
      })
    } : names
  };
}
function IL() {
  let e = A(z());
  if (e === null || bRe()) return e;
  let vouchedManagedPluginIds = Ae().vouchedManagedPluginIds,
    o = [...e].filter(item => di(item) === ri || vouchedManagedPluginIds.has(Un(item)));
  return o.length > 0 ? new Set(o) : null;
}
function oNe(e) {
  let n = Un(e);
  return [...(IL() ?? [])].some(item => Un(item) === n);
}
function CGi(e) {
  let n = TEs(),
    o = new Set([...(A(n.enables) ?? [])].map(Un)),
    r = e.filter(item => o.has(Un(item.source))),
    s = r.filter(item => di(item.source) !== ri && !X(item, n.names)),
    a = bpe();
  for (let f of s) {
    if (f.modulePath === void 0 || rnn(f.source) !== void 0) continue;
    let d = Qe(f.source);
    if (f.readInPlace !== !0) t(`${d} is enabled by managed settings, but it is not read in place from a local folder its marketplace is registered from: it loads from a copy (the plugin cache, an archive or a seed directory), or that marketplace has no folder of its own. Nothing yet records which source a copy was taken from, so it is not treated as the organization's: its hooks module runs in the user tier, and does not load where only managed hooks may. It is seated when managed settings declare its marketplace under extraKnownMarketplaces as a local directory and that marketplace lists it by a relative path. A plugin delivered from a remote source takes the tier when managed settings name its digests under pluginDigests on that marketplace and list it in prependPlugins or appendPlugins.`, {
      level: "warn"
    });else if (X(f, a)) t(`${d} is enabled by managed settings, but the source its marketplace is registered from is named only by ${ee}, so it is not treated as the organization's: its hooks module runs in the user tier. It is seated when managed settings the session vouches for (this machine's own, or remote managed settings once the server confirms them) declare that source for its marketplace under extraKnownMarketplaces.`, {
      level: "warn"
    });else t(`${d} is enabled by managed settings, but managed settings do not name the source its marketplace is registered from, so it is not treated as the organization's: its hooks module runs in the user tier. It is seated when the marketplace is registered from the source that managed settings declare for it under extraKnownMarketplaces.`, {
      level: "warn"
    });
  }
  let c = K(R(HSe())) ? "settings it does vouch for list or enable plugins on this machine" : "a managed settings source on this machine was not read whole (a load error, or a plugin key it could not apply), so what it says of plugins is not known",
    u = new Set([...(A(be("policySettings")) ?? [])].map(Un));
  for (let f of e) {
    let i = Un(f.source);
    if (f.modulePath !== void 0 && di(f.source) !== ri && u.has(i) && !o.has(i)) t(`${Qe(f.source)} is enabled only by ${ee}, while ${c}, so it is not treated as the organization's: its hooks module runs in the user tier, and does not load where only managed hooks may. It can be seated only once managed settings the session vouches for enable it: this machine's own, or remote managed settings once the server confirms them.`, {
      level: "warn"
    });
  }
  let l = new Set(s.map(item => Un(item.source)));
  Ae().vouchedManagedPluginIds = new Set(r.map(item => Un(item.source)).filter(item => !l.has(item)));
}
function X(e, policySettings) {
  let declaredUnder = di(e.source),
    marketplaceSource = e.marketplaceSource;
  if (declaredUnder === void 0 || marketplaceSource === void 0 || e.readInPlace !== !0 || SH(Un(declaredUnder))) return !1;
  if (Sd(declaredUnder)) return Fht(marketplaceSource) || knn(marketplaceSource, void 0, {
    policySettings: policySettings,
    declaredUnder: declaredUnder
  });
  return knn(marketplaceSource, void 0, {
    policySettings: policySettings,
    declaredUnder: KEs(declaredUnder, policySettings) ? declaredUnder : void 0
  });
}
var ee = "managed settings this session does not vouch for (such as remote managed settings the server has not confirmed this session, or a document your user account can write)";
function z() {
  let e = HSe();
  return ne(R(e)) ? e : be("policySettings");
}
function ne(e) {
  return K(e) || qNs();
}
function A(e) {
  let n = bRe();
  if (n) return new Set(n.managedIds);
  let o = e?.enabledPlugins;
  if (!o) return null;
  let r = new Set();
  for (let [s, a] of Object.entries(o)) if (a === !0 && s.includes("@")) r.add(wk(s));
  return r.size > 0 ? r : null;
}
function VNt() {
  let e = be("policySettings")?.enabledPlugins;
  if (!e) return null;
  let n = new Set(CNs()),
    o = [];
  for (let [r, enabled] of Object.entries(e)) {
    if (typeof enabled !== "boolean" || !r.includes("@")) continue;
    let {
      name: name_7,
      marketplace: marketplace_10
    } = $n(r);
    if (name_7) {
      let u = `${name_7}@${marketplace_10 ?? ""}` === r;
      o.push({
        name: name_7,
        marketplace: u ? marketplace_10 ?? "" : "",
        enabled: enabled,
        ...(!enabled && n.has(r) && {
          heldOff: !0
        })
      });
    }
  }
  return o.length > 0 ? o : null;
}
function sNe(e, n, o) {
  if (!e) return {
    outcome: "unmatched"
  };
  let r = Un(n),
    s = e.filter(item => zLr(item).some(item => Un(item) === r)),
    a = s.some(item => item.enabled) ? s.filter(item => item.heldOff !== !0) : s,
    entry_2 = a[0];
  if (entry_2 === void 0) return {
    outcome: "unmatched"
  };
  let entry = a.find(item => !item.enabled);
  if (entry) return {
    outcome: "locked",
    entry: entry
  };
  if (o !== void 0 && a.some(item => !SH(Un(item.marketplace)) && Un(item.marketplace) === Un(o))) return {
    outcome: "admitted"
  };
  return {
    outcome: "locked",
    entry: entry_2
  };
}
function g3() {
  let e = bRe();
  if (e) return e.order;
  let n = zue() || M0r(),
    o = $o().includes("userSettings") ? be("userSettings") : null,
    r = n ? void 0 : zgo(),
    s = r !== void 0 && r.outermost.length > 0,
    a = Tee(),
    c = a && !n && _Cr(),
    u = !n && !s && a && !c,
    l = !n && !s && !u,
    holder = n ? HSe() : l ? o : null,
    slot = n ? be("policySettings") : null,
    d = ["prependPlugins", "appendPlugins"],
    p = d.map(item => holder?.[item]?.map(T)),
    g = r ?? zgo(p[0]),
    h = n && g.outermost.length === 0 ? zgo(slot?.prependPlugins?.map(T)) : g,
    k = h.outermost.length > 0 ? h : g,
    M = a && !c && k.outermost.length === 0 && (!n || yGi) ? gGi() : k,
    [v, I] = d.map((m, index) => {
      let ids = p[index] ?? ke({
        key: m,
        slot: slot,
        holder: holder,
        outermost: M.outermost
      });
      return {
        ids: ids,
        from: ids === void 0 ? "none" : n ? "policy" : "user",
        shadowed: !l && o?.[m] !== void 0
      };
    });
  return {
    prepend: v.ids ?? [],
    append: I.ids ?? [],
    from: {
      prepend: v.from,
      append: I.from
    },
    shadowed: d.filter((item, index) => [v, I][index].shadowed),
    ...(s && {
      shadowedBy: "seat"
    }),
    ...(u && {
      shadowedBy: "host"
    }),
    ...M
  };
}
function T(e) {
  return wk(Un(e));
}
function ke({
  key: key,
  slot: slot_2,
  holder: holder_2,
  outermost: outermost
}) {
  let s = slot_2?.[key]?.map(T);
  if (s === void 0) return;
  let a = R(holder_2);
  if (key === "prependPlugins" && K(a)) return;
  let c = new Set(a.flatMap(item => [...(item.prependPlugins ?? []), ...(item.appendPlugins ?? []), ...Object.keys(item.enabledPlugins ?? {})]).map(T));
  return s.filter(item => !c.has(item) && !outermost.includes(item));
}
function R(e) {
  return [e ?? {}, ...rtt()];
}
function K(e) {
  return e.some(item => (item.prependPlugins?.length ?? 0) > 0 || (item.appendPlugins?.length ?? 0) > 0 || Object.values(item.enabledPlugins ?? {}).some(item => item !== !1));
}
function V() {
  let e = bRe();
  if (e) return [...e.managedIds];
  return [be("policySettings"), z()].flatMap(item => Object.entries(item?.enabledPlugins ?? {})).filter(([n, o]) => wD(o) && n.includes("@")).map(([n]) => wk(n));
}
function KNt() {
  return J_() || V().length > 0;
}
function RGi() {
  let e = V();
  return e.length > 0 ? new Set(e) : null;
}
function vCr(e) {
  let n = Un(e);
  return J_() || V().some(item => Un(item) === n);
}
export { Ese, gGi, yCr, vee, _Cr, $go, Ugo, Bgo, jgo, nnn, zue, Wgo, zgo, yGi, rnn, bCr, SCr, _Gi, GI, kEs, onn, bGi, SD, zNt, snn, QFn, wCr, kCr, SGi, wGi, kGi, inn, vGi, wD, Rht, EGi, TGi, Ggo, V7e, K7e, GNt, Gue, vEs, EEs, ZFn, sp, kD, TEs, IL, oNe, CGi, VNt, sNe, g3, KNt, RGi, vCr };