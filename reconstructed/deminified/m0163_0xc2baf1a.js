// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { l, B, Et } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { G$, HC, Yi, nd, B2 } from "B:/~BUN/root/chunk-54p0h65d.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { sA, Ae } from "B:/~BUN/root/chunk-5w2ecytn.js";
import { Se } from "B:/~BUN/root/chunk-4p6z9qq1.js";
import { gjt } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { ce, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { TC } from "B:/~BUN/root/chunk-2swveyqa.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { GS, Ine, AJ } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { o, u } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { Ut } from "B:/~BUN/root/chunk-qbrwdgwc.js";
import { isAbsolute as R } from "path";
var s6e = ".claude-plugin-link",
  r2n = f(() => u({
    target: o().min(1).max(4096).refine(e => R(e), {
      message: "must be an absolute path"
    }).refine(e => !B2(e) && !Yi(e), {
      message: "must be a local path"
    }).refine(e => !G$(e), {
      message: "must be canonical"
    })
  })),
  zDt = `
[mode: link]`;
import { isAbsolute as K, join as x, relative as E, sep as N } from "path";
function d() {
  return x(Se(), "skills");
}
function O(e) {
  let n = E(d(), e);
  return n !== "" && n !== ".." && !n.startsWith(`..${N}`) && !K(n);
}
function A(e) {
  if (!O(e)) return null;
  let n = E(d(), e).split(N);
  return sA(n) && x(d(), ...n) === e ? n : null;
}
function o2n(e) {
  let n = A(e);
  return n === null ? null : Ae.userConfigDir("skills", n);
}
function qAo(e) {
  let relPath = A(e);
  return relPath === null ? null : {
    namespace: "userConfigDir",
    dir: "skills",
    relPath: relPath
  };
}
import { isAbsolute as P, join as g, relative as k, sep as m } from "path";
var rN = ".orphaned_at",
  Xp = ".in_use",
  i6e = ".gcs-sha",
  tD = ".links_materialized";
function C() {
  return g(Se(), "plugins", "cache");
}
function h(e, n) {
  let r = C();
  if (n !== r) return null;
  let i = k(r, e);
  if (i === "" || i === ".." || i.startsWith(`..${m}`) || P(i)) return null;
  let s = i.split(m);
  return g(r, ...s) === e ? s : null;
}
function S(e) {
  return e.endsWith(".zip");
}
function xz(e, n) {
  let r = h(e, n);
  if (r === null || r.length !== 3 || !sA(r) || S(r[2])) return null;
  let [marketplace, plugin, version] = r;
  return {
    marketplace: marketplace,
    plugin: plugin,
    version: version
  };
}
function KAo(e) {
  return e.namespace === "pluginCache" && e.marketplace !== void 0 && e.plugin !== void 0 && e.version !== void 0 && e.relPath === void 0;
}
function uct(e, n) {
  let r = xz(e, n);
  return r === null ? null : {
    namespace: "pluginCache",
    ...r
  };
}
function YAo(e, n) {
  let r = [e.marketplace, e.plugin, e.version];
  if (n !== C() || !sA(r) || S(e.version)) return null;
  return g(n, ...r);
}
function b(e, n) {
  let r = h(e, n);
  if (r === null || r.length < 4 || !sA(r) || S(r[2])) return null;
  let [i, s, c, ...p] = r;
  return Ae.pluginCache(i, s, c, p);
}
function GDt(e, n) {
  return b(e, n) ?? o2n(e);
}
function Ele(e, n) {
  return _(n) ? Ae.pluginRegistry(e) : null;
}
function s2n(e, n, r) {
  return _(r) && sA([e]) ? Ae.marketplaceCache(e, n) : null;
}
function _(e) {
  return e === g(Se(), "plugins");
}
function M(e, n) {
  if (!_(n)) return null;
  let r = g(n, "marketplaces"),
    i = k(r, e);
  if (i === "" || i === ".." || i.startsWith(`..${m}`) || P(i)) return null;
  let s = i.split(m);
  return g(r, ...s) === e ? s : null;
}
function VDt(e, n) {
  let r = M(e, n);
  if (r === null || r.length < 2 || !sA(r)) return null;
  return Ae.marketplaceTree(r[0], r.slice(1));
}
function XAo(e) {
  return e === g(Se(), "plugins", "asset-cache") ? {
    namespace: "pluginAssetCache"
  } : null;
}
function wln(e, n) {
  if (e === n) return n === C() ? {
    namespace: "pluginCache"
  } : null;
  let r = h(e, n);
  if (r === null || r.length > 2 || !sA(r)) return null;
  let [marketplace_2, plugin_2] = r;
  return plugin_2 === void 0 ? {
    namespace: "pluginCache",
    marketplace: marketplace_2
  } : {
    namespace: "pluginCache",
    marketplace: marketplace_2,
    plugin: plugin_2
  };
}
var pct = new Set([s6e, Xp, rN]);
function fI(e) {
  return HC(e).replace(/[. ]+$/, "");
}
function qDt(e, n) {
  let r = fI(e);
  if (n.has(r)) return !0;
  for (let i of n) if (TC(r, i)) return !0;
  return !1;
}
function a6e(e) {
  return fI(e) === "node_modules";
}
import { readdir as U, rm as w, stat as v } from "fs/promises";
import { delimiter as z, join as y } from "path";
var I = "plugins",
  F = "cowork_plugins";
function L() {
  if (gjt()) return F;
  if (a.CLAUDE_CODE_USE_COWORK_PLUGINS) return F;
  return I;
}
function JAo() {
  return L() === I && !a.CLAUDE_CODE_PLUGIN_CACHE_DIR;
}
function Zc() {
  let CLAUDE_CODE_PLUGIN_CACHE_DIR = a.CLAUDE_CODE_PLUGIN_CACHE_DIR;
  if (CLAUDE_CODE_PLUGIN_CACHE_DIR) return nd(CLAUDE_CODE_PLUGIN_CACHE_DIR);
  return y(Se(), L());
}
function QT() {
  let CLAUDE_CODE_PLUGIN_SEED_DIR = a.CLAUDE_CODE_PLUGIN_SEED_DIR;
  if (!CLAUDE_CODE_PLUGIN_SEED_DIR) return [];
  return CLAUDE_CODE_PLUGIN_SEED_DIR.split(z).filter(Boolean).map(nd);
}
function fct(e) {
  return e.replace(/[^a-zA-Z0-9\-_]/g, "-");
}
function QAo(e) {
  return fct(e).toLowerCase();
}
function xHe(e) {
  let n = fI(e.normalize("NFKC"));
  return n.startsWith(AJ) || fct(n).toLowerCase().startsWith(AJ);
}
function KDt(e) {
  return fct(fI(e.normalize("NFKC"))).toLowerCase();
}
function k0r(e) {
  return e.replace(/[^a-z0-9-]/gu, n => {
    let r = n.codePointAt(0) ?? 0;
    return r <= 255 ? `_${r.toString(16).padStart(2, "0")}` : `__${r.toString(16)}_`;
  });
}
function D(e) {
  if (Ine(e)) {
    let n = e.slice(0, e.lastIndexOf("@"));
    return `${k0r(n)}-${GS}`;
  }
  return fct(e);
}
function ZAo(e, n) {
  return D(e).toLowerCase() === D(n).toLowerCase();
}
function exo(e, n) {
  return `installed_plugins.set-aside.${e.toISOString().slice(0, 10)}.${n}.json`;
}
function vln(e) {
  return /^installed_plugins\.set-aside\.\d{4}-\d{2}-\d{2}\.[0-9a-f]{12}\.json$/.test(e);
}
function txo(e, n) {
  return `installed_plugins.unreadable.${e.toISOString().slice(0, 10)}.${n}.kept`;
}
function kln(e) {
  return /^installed_plugins\.unreadable\.\d{4}-\d{2}-\d{2}\.[0-9a-f]{12}\.kept$/.test(e);
}
function vX(e) {
  return y(Zc(), "data", D(e));
}
function iCe(e) {
  let n = vX(e);
  return ce().mkdirSync(n), n;
}
async function nxo(e) {
  let n = vX(e),
    bytes = 0,
    i = async s => {
      for (let c of await U(s, {
        withFileTypes: !0
      })) {
        let p = y(s, c.name);
        if (c.isDirectory()) await i(p);else try {
          bytes += (await v(p)).size;
        } catch {}
      }
    };
  try {
    await i(n);
  } catch (error) {
    if (Et(error)) return null;
    throw error;
  }
  if (bytes === 0) return null;
  return {
    bytes: bytes,
    human: Ut(bytes)
  };
}
async function rxo(e) {
  let n = vX(e);
  try {
    return await w(n, {
      recursive: !0
    }), "removed";
  } catch (error) {
    if (B(error)) return "absent";
    return t(`Failed to delete plugin data dir ${n}: ${l(error)}`, {
      level: "warn"
    }), "failed";
  }
}
export { s6e, r2n, zDt, o2n, qAo, rN, Xp, i6e, tD, xz, KAo, uct, YAo, GDt, Ele, s2n, VDt, XAo, wln, pct, fI, qDt, a6e, JAo, Zc, QT, fct, QAo, xHe, KDt, k0r, ZAo, exo, vln, txo, kln, vX, iCe, nxo, rxo };