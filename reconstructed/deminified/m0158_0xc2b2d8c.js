// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { Ze } from "B:/~BUN/root/chunk-y04k89s2.js";
import { dde, Tn } from "B:/~BUN/root/chunk-rwwxddqq.js";
import { J, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Ki } from "B:/~BUN/root/chunk-33tn3weg.js";
import { pLt, Vln } from "B:/~BUN/root/chunk-j14vfkmm.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { O } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { cl } from "B:/~BUN/root/chunk-3wnb3s8p.js";
import { o, u } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { resolve as y } from "path";
function $ln(n) {
  let e = y(n).normalize("NFC");
  return O() === "windows" ? e.toLowerCase() : e;
}
function R2n(n, e, r, i) {
  let c = new Map();
  if (Buffer.byteLength(e) > r) return t(`Ignoring ${n}: larger than the size cap`), c;
  let l;
  try {
    l = J(e);
  } catch {
    return t(`Ignoring ${n}: not valid JSON`), c;
  }
  if (typeof l !== "object" || l === null || Array.isArray(l)) return t(`Ignoring ${n}: not a JSON object`), c;
  for (let [s, p] of Object.entries(l)) {
    let d = i(p);
    if (d !== void 0) c.set($ln(s), d);
  }
  return c;
}
var vct = ".meta.json",
  LHe = "server_plugin_id",
  Uln = "marketplace_name",
  Bln = "installation_preference",
  regExp = new RegExp(`^(?!\\s)(?![\\s\\S]*\\s$)[^@${dde}]{1,128}$`, "u");
function H0r(n) {
  return regExp.test(n);
}
var A2n = /^plugin_(?:staging_|local_)?[A-Za-z0-9]{1,64}$/;
function Cle(n) {
  return A2n.test(n);
}
var x = f(() => u({
    [LHe]: o().regex(A2n).optional().catch(void 0),
    [Uln]: o().regex(regExp).optional().catch(void 0),
    [Bln]: pLt().optional().catch(void 0)
  })),
  F0r = 4096;
async function w(n) {
  let e = n + vct,
    r = await cl(e, F0r);
  if (r === null) return {};
  let i;
  try {
    i = J(r);
  } catch {
    return t(`Ignoring plugin attribution sidecar at ${e}: not valid JSON`), {};
  }
  return E(i, `sidecar at ${e}`);
}
function E(n, e) {
  let r = x().safeParse(n);
  if (!r.success) return t(`Ignoring plugin attribution ${e}: not a JSON object`), {};
  let i = {},
    c = r.data[LHe];
  if (typeof c === "string" && Cle(c)) i.serverPluginId = c;
  let l = r.data[Uln];
  if (typeof l === "string" && H0r(l)) i.marketplaceName = l;
  let s = Vln(r.data[Bln]);
  if (s !== void 0) i.installationPreference = s;
  if (typeof n === "object" && n !== null) {
    for (let [p, d] of [[LHe, i.serverPluginId], [Uln, i.marketplaceName], [Bln, i.installationPreference]]) if (p in n && d === void 0) t(`Ignoring plugin attribution field (${e}): invalid ${p}`);
  }
  return i;
}
var h = 65536;
function D(n) {
  let CLAUDE_CODE_PLUGIN_ATTRIBUTION = a.CLAUDE_CODE_PLUGIN_ATTRIBUTION;
  if (CLAUDE_CODE_PLUGIN_ATTRIBUTION === void 0) return;
  return R2n("CLAUDE_CODE_PLUGIN_ATTRIBUTION", CLAUDE_CODE_PLUGIN_ATTRIBUTION, h, r => E(r, "CLAUDE_CODE_PLUGIN_ATTRIBUTION entry")).get($ln(n));
}
async function jln(n) {
  return D(n) ?? (await w(n));
}
import { basename as N, isAbsolute as L, join as g, relative as T, sep as b } from "path";
var rD = "manifest.json",
  kct = ".marketplaces.json",
  R = /^[A-Za-z0-9_-]{1,128}$/;
function ute(n) {
  return R.test(n);
}
var m = ".marketplace-";
function $0r(n) {
  if (!ute(n)) throw Error("claude.ai marketplace id is not a tagged id");
  return `${m}${n}.json`;
}
function bxo(n) {
  return n.startsWith(m) && n.endsWith(".json") && ute(n.slice(m.length, -5));
}
var Sxo = ".last-complete-round";
function x2n(n, e = {
  pid: process.pid,
  procStart: void 0
}) {
  return `${e.pid}:${e.procStart ?? ""}/${n}`;
}
function u6e(name) {
  let e = name.indexOf("/");
  if (e === -1) return {
    name: name,
    ownerPid: void 0,
    ownerProcStart: void 0
  };
  let r = name.slice(0, e),
    i = r.indexOf(":"),
    c = i === -1 ? r : r.slice(0, i),
    l = i === -1 ? "" : r.slice(i + 1),
    s = Number(c);
  return {
    name: name.slice(e + 1),
    ownerPid: Number.isInteger(s) && s > 0 ? s : void 0,
    ownerProcStart: l || void 0
  };
}
class LegacyReservedSpellingError extends Error {
  constructor() {
    super("synced item name is a legacy alias of a reserved path");
    this.name = "LegacyReservedSpellingError";
  }
}
var d6 = "synced",
  P2n = ".trash",
  rq = ".staging",
  _ = "unbound",
  U = /^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i;
function uLt(n) {
  return U.test(n);
}
function Wln(n, e) {
  return `${n.toLowerCase()}_${e?.toLowerCase() ?? _}`;
}
function S(n) {
  let [org, account, ...i] = n.split("_");
  if (i.length > 0 || org === void 0 || account === void 0 || !uLt(org) || !(account === _ || uLt(account))) return null;
  return {
    org: org,
    account: account
  };
}
function dCe(n) {
  return S(n) !== null;
}
function HHe(n) {
  return S(n)?.org ?? null;
}
var k = ".bucket-";
function I2n(n, e) {
  return g(n, `${k}${e}`);
}
function wxo(n) {
  let e = S(n);
  if (e === null) return null;
  return e.account === _ ? "<org>_unbound" : "<org>_<account>";
}
var C = /~g(?:[2-9]|[1-9]\d+)$/;
function vxo(n) {
  return n.replace(C, "");
}
function Ect(n) {
  return n.replace(/[. ]+$/, "");
}
function P(n) {
  let e = Ect(n.replace(/[<>:"|?*\\/]/g, "_"));
  if (!e) throw Error("synced item name resolves to sync root");
  return e;
}
function v(n, e) {
  let r = g(e, n),
    i = T(e, r);
  if (!i || L(i) || i === ".." || i.startsWith(`..${b}`)) throw Error("synced item name escapes the sync root");
  return r;
}
function Fb(n) {
  return n.replace(/[\u200c-\u200f\u202a-\u202e\u206a-\u206f\ufeff]/g, "").replace(/\u1e9e/g, "\xDF").normalize("NFD").toUpperCase().toLowerCase();
}
var G = /^[!-~]+$/;
function b0(n) {
  if (G.test(n)) return n.toLowerCase();
  return Fb(n.normalize("NFKC").replace(/[\p{Z}\p{Cc}\p{Cf}\p{Default_Ignorable_Code_Point}\u2800]/gu, "").replace(/[\p{Pd}\u2212]/gu, "-").replace(/[\ua789\u2236\u0589\u05c3\u02d0]/g, ":"));
}
function Mz(n) {
  return Ki(n).startsWith(".");
}
function U0r(n) {
  return Ki(n) === ".git";
}
function r1(n) {
  return Fb(Ect(n)) === d6;
}
function p6e(n, e) {
  let r = P(n);
  if (Tn(r) !== r) throw Error("synced item name contains display-hazard characters");
  if (Mz(r)) throw Error("synced item name resolves to reserved path");
  if (Fb(r).endsWith(vct)) throw Error("synced item name resolves to reserved path");
  if (C.test(Fb(r))) throw Error("synced item name resolves to reserved path");
  if (dCe(Fb(r))) throw Error("synced item name resolves to reserved path");
  return f6e(n, e);
}
function B0r(n, e, r) {
  let i = p6e(n, r);
  return e <= 1 ? i : g(r, `${N(i)}~g${e}`);
}
function f6e(n, e) {
  let r = P(n),
    i = Fb(Ki(r));
  if (i === rD || i === rq) {
    let c = r.toLowerCase();
    if (c === rD || c === rq) throw Error("synced item name resolves to reserved path");
    throw new LegacyReservedSpellingError();
  }
  if (I(i)) {
    if (I(r.toLowerCase())) throw Error("synced item name resolves to reserved path");
    throw new LegacyReservedSpellingError();
  }
  return v(r, e);
}
function I(n) {
  let e = Ze(n, ".").replace(/ +$/, "");
  return /~\d/.test(n) || /^(con|prn|aux|nul|com[0-9\u00B9\u00B2\u00B3]|lpt[0-9\u00B9\u00B2\u00B3])$/.test(e);
}
function zln(n, e) {
  let r;
  try {
    r = JSON.parse(n);
  } catch {
    return "claim-all";
  }
  if (!Array.isArray(r?.skills)) return "claim-all";
  if (r.staleDirs !== void 0 && !Array.isArray(r.staleDirs)) return "claim-all";
  if (r.pendingClaims !== void 0 && !Array.isArray(r.pendingClaims)) return "claim-all";
  let i = new Set(),
    c = r.skills.flatMap(item => typeof item === "object" && item !== null && typeof item.name === "string" ? [item.name] : []),
    l = (r.pendingClaims ?? []).flatMap(item => typeof item === "string" ? [u6e(item).name] : []);
  for (let s of [c, r.staleDirs, l]) if (Array.isArray(s)) {
    for (let p of s) if (typeof p === "string") for (let d of B(p, e)) i.add(d);
  }
  return i;
}
function B(n, e) {
  let r = [Tct(n)];
  try {
    r.push(Tct(N(f6e(n, e))));
  } catch {}
  return r;
}
function Tct(n) {
  return Fb(Ki(n));
}
var u6 = g("skills", d6),
  FHe = g("skills", P2n),
  Gln = g("skills", rq),
  kxo = g(u6, rq),
  Dz = g("plugins", d6),
  uCe = g("plugins", P2n),
  Exo = g(Dz, rq);
export { $ln, R2n, vct, LHe, Uln, Bln, H0r, A2n, Cle, F0r, jln, rD, kct, ute, $0r, bxo, Sxo, x2n, u6e, LegacyReservedSpellingError as NHe, d6, P2n, rq, uLt, Wln, dCe, HHe, I2n, wxo, vxo, Ect, Fb, b0, Mz, U0r, r1, p6e, B0r, f6e, zln, Tct, u6, FHe, Gln, kxo, Dz, uCe, Exo };