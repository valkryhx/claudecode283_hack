// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { z, q } from "B:/~BUN/root/chunk-game8aqv.js";
import { b, f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { d, K, qt, H_ } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { J } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { t, ee, ds, ie } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Ue, af, drt } from "B:/~BUN/root/chunk-eev762xg.js";
import { tt } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { ocn } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { Cjt, a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { jA, GFr, eK } from "B:/~BUN/root/chunk-nsneqfcc.js";
import { sv, Xte, Gdn, eVn, L1s } from "B:/~BUN/root/chunk-t4qpmjt5.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { Kc, DCr, LCr, cU, Cse, Q7e, $F, Z7e, KCr, jGi, D1, XGe, WGi, ED, wnn } from "B:/~BUN/root/chunk-esnm3r09.js";
import { sna, Hr, mae, Ve, lna } from "B:/~BUN/root/chunk-myfamxtp.js";
import { EFs, TFs, _C, Ote, Mbt, JKe, u1t } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { f_e, Suo, uJe, twr, Puo, HQt, $Qt, EFi, TFi, Vgs as maxAgeDays_3, Iuo } from "B:/~BUN/root/chunk-z7bs0q82.js";
import { twt } from "B:/~BUN/root/chunk-65j2302z.js";
import { xf, R2n, A2n, P2n, Mu } from "B:/~BUN/root/chunk-x1xft50h.js";
import { cT } from "B:/~BUN/root/chunk-xqymp2nr.js";
import { KPn, LDe, ml } from "B:/~BUN/root/chunk-4vcs773m.js";
import { El } from "B:/~BUN/root/chunk-pzs4x0zd.js";
import { Kt } from "B:/~BUN/root/chunk-6n5g80b8.js";
import { sIs, vU, v, pet, vl, uMs } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { fdn, uFr, lta, dta, ABs, xBs, cta, Kpe } from "B:/~BUN/root/chunk-1g25msn4.js";
import { be, Ga, Cr, KNs, Ob, n0, itt } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { Zd, uS } from "B:/~BUN/root/chunk-3vtkd50k.js";
import { hs } from "B:/~BUN/root/chunk-zn7b14jn.js";
import { lnr } from "B:/~BUN/root/chunk-gjjn484q.js";
import { wCe, cse, td, AGe, GNn } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { Ae } from "B:/~BUN/root/chunk-eds8xkh8.js";
import { _Jr, VK, Lve, _5e, O6t, TQo, OP, rZr, dns, cns, X8t } from "B:/~BUN/root/chunk-27h4st9h.js";
import { vCs } from "B:/~BUN/root/chunk-64qg3pvz.js";
import { V7o } from "B:/~BUN/root/chunk-pfdcv2sc.js";
import { dnr, oci } from "B:/~BUN/root/chunk-69dvfjjs.js";
import { oIn } from "B:/~BUN/root/chunk-ybkgfvgz.js";
import { op } from "B:/~BUN/root/chunk-ke150ry1.js";
import { okr, skr, ikr, akr } from "B:/~BUN/root/chunk-e8znf4zw.js";
import { sce, gds, Mut, eJt, Hds, vxi } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { H0i } from "B:/~BUN/root/chunk-4tz0m6qq.js";
import { X0e } from "B:/~BUN/root/chunk-5m83sh3a.js";
import { dRi } from "B:/~BUN/root/chunk-w0kge9aq.js";
import { vvr } from "B:/~BUN/root/chunk-wy3ha3b9.js";
import { Own } from "B:/~BUN/root/chunk-2n5m7hvm.js";
import { rIe } from "B:/~BUN/root/chunk-z6w90r70.js";
import { yv } from "B:/~BUN/root/chunk-w36xzzgx.js";
import { Uye } from "B:/~BUN/root/chunk-v04fapnf.js";
import { PBi } from "B:/~BUN/root/chunk-f8zs4vbq.js";
import { o, E, u } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { Ht } from "B:/~BUN/root/chunk-cbjnh04j.js";
import { X } from "B:/~BUN/root/chunk-g9pw24zp.js";
import * as N from "fs/promises";
import { homedir as Re, tmpdir as He } from "os";
import { basename as te, dirname as _e, join as h } from "path";
import { join as Me } from "path";
var pe = "mcp-skill-archives",
  Ne = "meta.json";
var xe = p(() => u({
  uri: o().optional(),
  cacheKey: o(),
  fetchedAt: E()
}));
function je(e) {
  return Uye(Me(e, Ne), () => xe().nullable(), {
    defaultValue: null,
    ensureDir: !0
  });
}
var fe = 64,
  Le = 16,
  Kr = fe + 2 + fe + 2 + Le;
async function me(e) {
  try {
    return await je(e).read();
  } catch {
    return null;
  }
}
import { join as he } from "path";
var Be = "image-cache";
async function we() {
  let e = ie(),
    r = he(Ue(), Be),
    s = z();
  try {
    let n;
    try {
      n = await e.readdir(r);
    } catch {
      return;
    }
    for (let c of n) {
      if (c.name === s) continue;
      let i = he(r, c.name);
      try {
        await e.rm(i, {
          recursive: !0,
          force: !0
        }), t(`Cleaned up old image cache: ${i}`);
      } catch {}
    }
    try {
      if ((await e.lstat(r)).isDirectory()) await e.rmdir(r);
    } catch {}
  } catch {}
}
var sn = p(() => u({
  key: o(),
  integrity: o().nullable(),
  time: E()
}));
async function se(e = oIn) {
  let r = Ae(),
    s = {
      end: () => {}
    },
    abortController = new AbortController();
  if (await Promise.race([Promise.resolve(r.hooksLoadAtStartup).catch(() => {}).then(() => r.hookRegistrationInFlight?.catch(() => {})).then(async () => {
    while (r.hookRegistrationOwed && !abortController.signal.aborted) await new Promise(g => {
      s.end = r.hookRegistrationEnded.subscribe(g);
    }), s.end();
    if (abortController.signal.aborted) return !1;
    return await X8t("a retention sweep starts"), !0;
  }), J(e, abortController.signal).then(() => !1)]).finally(() => abortController.abort())) return r.hooksUnknownCause === void 0 ? "asked" : "load_failed";
  s.end();
  let m = r.hookRegistrationInFlight !== void 0 ? "load_running" : "unanswered",
    y = r.hookRegistrationOwed ? "load_owed" : m;
  return t(`Retention cleanup: the settings.read hooks were not asked within ${e} ms (${y}); the sweep begins on the merge as last held.`), y;
}
var $e = 0,
  We = ["ccr-tip.json", "custom-title.json", "precompact.json", "sent-prefix.json", TQo, okr];
function ye(e) {
  let r = mae(e);
  return Hr(e) && r.length === 1 && r[0] === e.toLowerCase() && cta(e);
}
function Ye(e) {
  return We.some(item => e === item || jA(e, item)) || e.startsWith(skr) && (e.endsWith(".json") || e.includes(".json.tmp.")) || e.startsWith(ikr) && e.endsWith(".md");
}
async function inr(e) {
  if (q()) return "diskless";
  if (!Kt("userSettings") && Cr()?.cleanupPeriodDays === void 0) return t("Skipping retention cleanup: userSettings source is disabled (--setting-sources) and no enabled source provides cleanupPeriodDays."), "user_source_disabled";
  if (be("policySettings")?.cleanupPeriodDays !== void 0) return null;
  if (rIe().errors.filter(item => !item.mcpErrorMetadata && item.severity !== "warning").length > 0) for (let s of u1t) {
    let n = await itt(s, e, s === "desktopSessionCleanupPeriodDays" ? {
      presenceSources: ["userSettings", "flagSettings"]
    } : void 0);
    if (n === "unknowable") return t(`Skipping cleanup: a settings file could not be read or parsed, so ${s} may be set to a value that cannot be seen. Fix the settings file (see /doctor) to re-enable cleanup.`), "settings_unknowable";
    if (n === "present") return t(`Skipping cleanup: settings have validation errors but ${s} was explicitly set. Fix settings errors to enable cleanup.`), "settings_invalid_key_set";
  }
  if (Ote() && Mbt(_C() === !0)) return t("Skipping retention cleanup: this session reads no stored server-managed settings and holds none of its own (its request failed, has not finished, or returned nothing that could be applied), so cleanupPeriodDays may be set to a value that cannot be seen. A later process that is not paused for this reason runs the cleanup."), "remote_settings_unknowable";
  return null;
}
async function u3o(e, r) {
  return await se(r), (await inr(e)) === null;
}
function Ee(e) {
  let date = new Date(Date.now() - e * 24 * 60 * 60 * 1000);
  return Number.isNaN(date.getTime()) ? null : date;
}
function iw(e) {
  let s = (Cr() || {}).cleanupPeriodDays ?? $Qt;
  if (s === 0) return null;
  if (e !== void 0 && e < s) s = e;
  return Ee(s);
}
var Z = ".desktop-released.json",
  Ke = 4096;
function ae(e) {
  return e.slice(0, -6) + Z;
}
var Ge = p(() => u({
  reason: o().optional()
}));
async function ge(e, r, s) {
  let n = await r.readFileFdGated(e, Ke);
  if (n === null) return "none";
  let c;
  try {
    let i = Ge().safeParse(ee(n.content));
    c = i.success ? i.data.reason : void 0;
  } catch {
    return "none";
  }
  if (c === "delete") return "release-now";
  if (c === "archive") return n.stats.mtime < s ? "release-now" : "grace";
  return "none";
}
function ze(e) {
  return /^[0-9A-Za-z_-]{1,64}$/.test(e);
}
function Xe() {
  return ce("desktopSessionCleanupPeriodDays", $e);
}
function ce(e, r) {
  let s = Ga("userSettings")?.[e],
    n = n0(e)[0] ?? (s !== void 0 && r !== 0 && s > r ? s : r);
  if (n === 0) return null;
  return Ee(n);
}
function Je() {
  if (be("policySettings")?.cleanupPeriodDays !== void 0) return !0;
  if (KNs()) return !0;
  return Ob().some(item => item.file !== JKe && (u1t.some(r => r === item.path) || item.severity !== "warning"));
}
function tci() {
  return Je() || hs("hipaa") || hs("zdr");
}
function _() {
  return {
    messages: 0,
    errors: 0,
    filesRetainedFresh: 0,
    filesPastCutoff: 0
  };
}
function x(e, r) {
  return {
    messages: e.messages + r.messages,
    errors: e.errors + r.errors,
    filesRetainedFresh: e.filesRetainedFresh + r.filesRetainedFresh,
    filesPastCutoff: e.filesPastCutoff + r.filesPastCutoff
  };
}
function Ze(e) {
  let r = tt(e, ".").replace(/T(\d{2})-(\d{2})-(\d{2})-(\d{3})Z/, "T$1:$2:$3.$4Z");
  return new Date(r);
}
function Jke(e) {
  return qt(e) || H_(e);
}
async function Se(e, r, s) {
  let n = _();
  try {
    let c = await ie().readdir(e);
    for (let i of c) try {
      if (Ze(i.name) < r) if (await ie().unlink(h(e, i.name)), s) n.messages++;else n.errors++;
    } catch (error) {
      t(`Failed to clean up file ${i.name} in ${e}: ${error}`, {
        level: "error"
      });
    }
  } catch (error) {
    if (K(error)) ;else if (Jke(error)) t(`cleanup readdir ${e} failed: ${error.code}`, {
      level: "error"
    });else a(error);
  }
  return n;
}
async function qe() {
  let e = ie(),
    r = iw();
  if (r === null) return _();
  let s = Cjt.errors(),
    n = Cjt.baseLogs(),
    c = await Se(s, r, !1);
  try {
    let i;
    try {
      i = await e.readdir(n);
    } catch {
      return c;
    }
    let m = i.filter(item => item.isDirectory() && item.name.startsWith("mcp-logs-")).map(item => h(n, item.name));
    for (let y of m) c = x(c, await Se(y, r, !0)), await T(y, e);
  } catch (error) {
    if (K(error)) ;else if (Jke(error)) t(`cleanup mcp-logs scan failed: ${error.code}`, {
      level: "error"
    });else a(error);
  }
  return c;
}
async function M(e, r, s, n, c = r, i) {
  let m;
  try {
    m = await s.stat(e);
  } catch (error) {
    if (K(error)) return !1;
    throw error;
  }
  if (!(m.mtime < r)) return n.filesRetainedFresh++, !1;
  if (i !== void 0 && (await i(e, m))) return !1;
  try {
    await s.unlink(e);
  } catch (error) {
    if (K(error)) return !1;
    if (c !== null && m.mtime < c) n.filesPastCutoff++;
    throw error;
  }
  return !0;
}
async function T(e, r) {
  if (!(await W(e, r))) return;
  try {
    await r.rmdir(e);
  } catch {}
}
var oe = [lta, dta];
async function Qe(e, r, s, n) {
  try {
    for (let D of oe) await Pe(h(e, D), r, s, n);
    let c = !1;
    try {
      let {
          sweepCheckoutSessionTrash: sweepCheckoutSessionTrash
        } = await import("B:/~BUN/root/chunk-jp8qbfn6.js"),
        S = await sweepCheckoutSessionTrash(e, r.getTime());
      n.messages += S.removed, n.errors += S.errors, c = S.newestKeptMs !== null;
    } catch {
      n.errors++, c = !0;
    }
    let i = (await s.readdir(e)).filter(item => !oe.includes(item.name)),
      m = null;
    for (let D of i) {
      let S = h(e, D.name),
        w = (await le(D, S, s)) === "directory" ? await G(S, s, {
          requireCompleteWalk: !0
        }) : (await s.lstat(S)).mtimeMs;
      if (w !== null) m = Math.max(m ?? -1 / 0, w);
    }
    if (!((m ?? (await V(e, s))) < r.getTime())) return;
    let g = (await Promise.all(oe.map(item => s.lstat(h(e, item)).then(S => S.isDirectory(), S => {
        if (K(S)) return !1;
        throw S;
      })))).includes(!0),
      k = i.toSorted((D, S) => Number(D.name === ABs) - Number(S.name === ABs));
    if (g || c) {
      let D = !1;
      for (let S of k) {
        if (c && S.name === uFr) {
          D = (await rt(h(e, S.name), s)) || D;
          continue;
        }
        await s.rm(h(e, S.name), {
          recursive: !0,
          force: !0
        }), D = !0;
      }
      if (D) n.messages++;
      return;
    }
    for (let D of k.slice(0, -1)) await s.rm(h(e, D.name), {
      recursive: !0,
      force: !0
    });
    await s.rm(e, {
      recursive: !0,
      force: !0
    }), n.messages++;
  } catch (error) {
    if (!K(error)) n.errors++;
  }
}
async function Pe(e, r, s, n) {
  if (!(await W(e, s))) return;
  let c = await s.readdir(e).catch(() => []);
  for (let i of c) {
    let m = await le(i, h(e, i.name), s).catch(g => {
      if (!K(g)) n.errors++;
      return "other";
    });
    if (m === "file") {
      try {
        if (await M(h(e, i.name), r, s, n)) n.messages++;
      } catch {
        n.errors++;
      }
      continue;
    }
    if (m !== "directory") continue;
    let y = h(e, i.name);
    try {
      if (((await G(y, s, {
        requireCompleteWalk: !0
      })) ?? (await V(y, s))) < r.getTime()) await s.rm(y, {
        recursive: !0,
        force: !0
      }), n.messages++;
    } catch (error) {
      if (!K(error)) n.errors++;
    }
  }
  await T(e, s);
}
async function le(e, r, s) {
  if (e.isDirectory()) return "directory";
  if (e.isFile()) return "file";
  if (e.isSymbolicLink() || e.isFIFO() || e.isSocket() || e.isBlockDevice() || e.isCharacterDevice()) return "other";
  let n = await s.lstat(r);
  return n.isDirectory() ? "directory" : n.isFile() ? "file" : "other";
}
async function V(e, r) {
  return (await r.lstat(e)).mtimeMs;
}
async function et(e) {
  let r = iw(),
    s = _();
  if (r === null) return s;
  let n = op(),
    c = ie();
  for (let i of await c.readdir(n).catch(() => [])) {
    let m = h(n, i.name),
      y = h(m, fdn);
    if (i.isDirectory() && (await W(y, c))) await Qe(y, r, c, s), await T(m, c);
  }
  return s;
}
async function rt(e, r) {
  let s = e,
    n = !1;
  for (let c of ["objects", "info", "alternates"]) {
    if (!(await r.lstat(s)).isDirectory()) return await r.rm(s, {
      recursive: !0,
      force: !0
    }), !0;
    for (let i of await r.readdir(s)) if (i.name !== c) await r.rm(h(s, i.name), {
      recursive: !0,
      force: !0
    }), n = !0;
    s = h(s, c);
  }
  return n;
}
async function W(e, r) {
  try {
    return (await r.lstat(e)).isDirectory();
  } catch {
    return !1;
  }
}
async function re(e, r, s, n, c = {}) {
  let {
      entryMatcher: entryMatcher
    } = c,
    m = await s.readdir(e).catch(y => {
      if (c.countEnumerationFailures === !0 && !K(y)) n.errors++;
      return [];
    });
  for (let y of m) {
    let g = h(e, y.name);
    if (y.isDirectory()) await re(g, r, s, n, c);else if (entryMatcher !== void 0 && !entryMatcher(y.name)) ;else if (y.isFile()) try {
      if (await M(g, r, s, n)) n.messages++;
    } catch {
      n.errors++;
    } else try {
      if ((await s.lstat(g)).mtime < r) await s.unlink(g), n.messages++;
    } catch {
      n.errors++;
    }
  }
  await T(e, s);
}
async function G(e, r, {
  requireCompleteWalk = !1
} = {}) {
  let n = -1 / 0,
    c = await r.readdir(e).catch(i => {
      if (requireCompleteWalk && !K(i)) throw i;
      return [];
    });
  for (let i of c) {
    let m = h(e, i.name),
      y = requireCompleteWalk ? await le(i, m, r).catch(g => {
        if (K(g)) return "other";
        throw g;
      }) : i.isDirectory() ? "directory" : i.isFile() ? "file" : "other";
    if (y === "directory") {
      let g = await G(m, r, {
        requireCompleteWalk: requireCompleteWalk
      });
      if (g !== null) n = Math.max(n, g);
    } else if (y === "file") try {
      let {
        mtimeMs: mtimeMs
      } = await r.stat(m);
      n = Math.max(n, mtimeMs);
    } catch (error) {
      if (requireCompleteWalk && !K(error)) throw error;
    }
  }
  return n === -1 / 0 ? null : n;
}
async function nt() {
  let e = iw(),
    r = {
      ..._(),
      transcripts: 0,
      transcriptsExemptedDesktop: 0
    };
  if (e === null) return r;
  let s = op(),
    n = ie(),
    c;
  try {
    c = await n.readdir(s);
  } catch (error) {
    if (!K(error)) r.errors++;
    return r;
  }
  let i;
  try {
    if (i = Mu(), !(await n.lstat(i)).isDirectory()) i = null;
  } catch {
    i = null;
  }
  let m = tci(),
    y = Xe(),
    g = null,
    k = m ? void 0 : async (D, S) => {
      if (hs("hipaa") || hs("zdr")) return !1;
      if (y !== null && S.mtime < y) return !1;
      let w = await ge(ae(D), n, e);
      if (w === "release-now") return !1;
      if (w === "grace") return r.transcriptsExemptedDesktop++, !0;
      if (S.size === 0) {
        if (!(await n.stat(D.slice(0, -6)).then(I => I.isDirectory(), () => !1))) return r.transcriptsExemptedDesktop++, !0;
      }
      g ??= Buffer.allocUnsafe(sv);
      let {
        head: head,
        tail: tail
      } = await eVn(D, S.size, g);
      if (head === "" && S.size > 0) throw await n.stat(D), Error("transient read failure while classifying a transcript for the desktop retention exemption");
      let C = S.size > sv ? L1s(tail) : tail,
        R = Xte(head, "entrypoint"),
        A = Gdn(C, "entrypoint");
      if (!(R !== void 0 && twt(R) || A !== void 0 && twt(A))) return !1;
      let Y = te(D).startsWith("agent-") ? Xte(head, "sessionId") ?? Gdn(C, "sessionId") : void 0;
      if (Y !== void 0 && ze(Y)) {
        let B = h(_e(D), `${Y}${Z}`);
        if (B !== ae(D)) {
          if ((await ge(B, n, e)) === "release-now") return !1;
        }
      }
      return r.transcriptsExemptedDesktop++, !0;
    };
  for (let D of c) {
    if (!D.isDirectory()) continue;
    let S = h(s, D.name),
      w;
    try {
      w = await n.readdir(S);
    } catch {
      r.errors++;
      continue;
    }
    w.sort((itemA, itemB) => Number(itemB.isDirectory()) - Number(itemA.isDirectory()));
    let P = [],
      O = null,
      C = new Set(w.filter(item => item.isFile() && item.name.endsWith(".jsonl")).map(item => item.name.slice(0, -6)));
    for (let R of w) {
      if (O === null && !R.isDirectory()) O = r.errors;
      if (R.isFile()) {
        if (R.name.endsWith(Z) && C.has(R.name.slice(0, -Z.length))) continue;
        if (!R.name.endsWith(".jsonl") && !R.name.endsWith(".cast") && !R.name.endsWith(".ccr-tip.json") && !R.name.endsWith(".precompact.json") && !R.name.endsWith(Z) && !R.name.includes(".desktop-released.json.tmp") && !R.name.endsWith(".dir-sync.json") && !R.name.endsWith(".dir-sync-empty.json") && !R.name.endsWith(".cloud-worktrees.json") && !R.name.includes(".ccr-tip.json.tmp.") && !R.name.includes(".precompact.json.tmp.") && !R.name.includes(".dir-sync.json.tmp.") && !R.name.includes(".dir-sync-empty.json.tmp.") && !R.name.includes(".cloud-worktrees.json.tmp.") && !R.name.includes(".jsonl.compact.tmp.") && !R.name.includes(".jsonl.superseded-")) continue;
        let A = h(S, R.name);
        try {
          if (await M(A, e, n, r, void 0, R.name.endsWith(".jsonl") ? k : void 0)) {
            if (r.messages++, R.name.endsWith(".jsonl")) {
              r.transcripts++;
              let j = R.name.slice(0, -6);
              if (ye(j)) {
                if (await n.unlink(h(S, `${j}.ccr-tip.json`)).catch(() => {}), await n.unlink(h(S, `${j}.precompact.json`)).catch(() => {}), P.push(ae(A)), await ocn(h(S, j)).catch(() => {
                  r.errors++;
                }), i !== null) for (let Y of P2n(D.name)) {
                  let B = h(i, Y),
                    I = await n.lstat(B).catch(() => null);
                  if (I?.isDirectory()) {
                    if (await ocn(h(B, j)).catch(() => {
                      r.errors++;
                    }), I.mtime < e) await T(B, n);
                  }
                }
              }
            }
          }
        } catch (error) {
          if (!K(error)) r.errors++;
        }
      } else if (R.isDirectory()) {
        let A = h(S, R.name);
        if (R.name === "bagel") {
          let I = await G(A, n);
          if (I !== null && I < e.getTime()) try {
            await ocn(A), r.messages++;
          } catch {
            r.errors++;
          }
          continue;
        }
        if (R.name === fdn) continue;
        if (!ye(R.name)) {
          let I = await n.lstat(A).catch(() => null);
          if (I !== null && I.mtime < e) await T(A, n);
          continue;
        }
        let j = h(A, Kpe);
        if (await W(j, n)) {
          let I = await n.readdir(j).catch(() => []);
          for (let H of I) if (H.isFile()) try {
            if (await M(h(j, H.name), e, n, r)) r.messages++;
          } catch {
            r.errors++;
          } else if (H.isDirectory()) {
            let Q = h(j, H.name),
              ne;
            try {
              ne = await n.readdir(Q);
            } catch {
              continue;
            }
            for (let ue of ne) {
              if (!ue.isFile()) continue;
              try {
                if (await M(h(Q, ue.name), e, n, r)) r.messages++;
              } catch {
                r.errors++;
              }
            }
            if (ne.length > 0 || (await V(Q, n).catch(() => 1 / 0)) < e.getTime()) await T(Q, n);
          }
          if (I.length > 0 || (await V(j, n).catch(() => 1 / 0)) < e.getTime()) await T(j, n);
        }
        let Y = await n.readdir(A).catch(() => []);
        for (let I of Y) {
          if (!I.isFile() || !(Ye(I.name) || xBs(I.name) !== void 0)) continue;
          if (I.name === "custom-title.json" && C.has(R.name)) continue;
          try {
            if (await M(h(A, I.name), e, n, r)) r.messages++;
          } catch {
            r.errors++;
          }
        }
        let B = h(A, "mcp-tasks");
        if (await W(B, n)) {
          for (let I of await n.readdir(B).catch(() => [])) {
            let H = I.name.endsWith(".json") || I.name.includes(".json.tmp.");
            if (!I.isFile() || !H) continue;
            try {
              if (await M(h(B, I.name), e, n, r)) r.messages++;
            } catch {
              r.errors++;
            }
          }
          await T(B, n);
        }
        if (!C.has(R.name)) for (let I of ["subagents", "workflows", "remote-agents"]) {
          let H = h(A, I);
          if (await W(H, n)) await re(H, e, n, r);
        }
        await T(A, n);
      }
    }
    if (O !== null && r.errors > O) P.length = 0;
    for (let R of P) await n.unlink(R).catch(() => {});
    await T(S, n);
  }
  return r;
}
async function F(e, r, s = !0, n, c) {
  let i = c === void 0 ? iw(n) : c,
    m = _();
  if (i === null) return m;
  let y = c !== void 0 || n === void 0 ? i : iw(),
    g = typeof r === "string" ? S => S.endsWith(r) : r,
    k = ie(),
    D;
  try {
    D = await k.readdir(e);
  } catch {
    return m;
  }
  for (let S of D) {
    if (!S.isFile() || !g(S.name)) continue;
    try {
      if (await M(h(e, S.name), i, k, m, y)) m.messages++;
    } catch {
      m.errors++;
    }
  }
  if (s) await T(e, k);
  return m;
}
async function st() {
  let e = _(),
    r = iw();
  if (r === null) return e;
  let s = h(Ue(), "hfi-auth.json");
  try {
    if (await M(s, r, ie(), e)) e.messages++;
  } catch (error) {
    if (!K(error)) t(`Failed to clean up HFI auth file: ${error}`, {
      level: "error"
    }), e.errors++;
  }
  return e;
}
async function it() {
  let e = _(),
    r = iw();
  if (r === null) return e;
  let s = h(Ue(), "cache", "team-discovery.json");
  try {
    if (await M(s, r, ie(), e)) e.messages++;
  } catch (error) {
    if (!K(error)) if (e.errors++, Jke(error)) t(`cleanup team-discovery-cache failed: ${error.code}`, {
      level: "error"
    });else a(error);
  }
  return e;
}
async function at() {
  let e = _(),
    r = iw();
  if (r === null) return e;
  for (let s of [dnr(), oci()]) try {
    if (await M(s, r, ie(), e)) e.messages++;
  } catch (error) {
    if (!K(error)) if (e.errors++, Jke(error)) t(`cleanup model-access memory failed: ${error.code}`, {
      level: "error"
    });else a(error);
  }
  return e;
}
async function ot() {
  return F(vU(), e => e !== sIs && e !== V7o && (e.endsWith(".json") || e.includes(".json.tmp.")));
}
async function ct() {
  let e = _(),
    r = iw();
  if (r === null) return e;
  let s = h(Ue(), "mcp-needs-auth-cache.json");
  try {
    if (await M(s, r, ie(), e)) e.messages++;
  } catch (error) {
    if (!K(error)) if (e.errors++, Jke(error)) t(`cleanup mcp-auth-cache failed: ${error.code}`, {
      level: "error"
    });else a(error);
  }
  return e;
}
async function lt() {
  let e = _(),
    r = iw();
  if (r === null) return e;
  let s = h(Ue(), "state", "device-unbound-creates.json");
  try {
    if (await M(s, r, ie(), e)) e.messages++;
  } catch (error) {
    if (!K(error)) if (e.errors++, Jke(error)) t(`cleanup device-unbound-creates failed: ${error.code}`, {
      level: "error"
    });else a(error);
  }
  return e;
}
async function ut() {
  let e = _(),
    r = iw();
  if (r === null) return e;
  let s = h(Ue(), "state", "mcp-discover-verdicts.json");
  try {
    if (await M(s, r, ie(), e)) e.messages++;
  } catch (error) {
    if (!K(error)) if (e.errors++, Jke(error)) t(`cleanup mcp-discover-verdicts failed: ${error.code}`, {
      level: "error"
    });else a(error);
  }
  return e;
}
async function ft() {
  let e = _(),
    r = iw(),
    s = af();
  if (r === null || s === null) return e;
  let n = h(s, "state", "device-mcp-consent-not-now.json");
  try {
    if (await M(n, r, ie(), e)) e.messages++;
  } catch (error) {
    if (!K(error)) if (e.errors++, Jke(error)) t(`cleanup device-mcp-not-now failed: ${error.code}`, {
      level: "error"
    });else a(error);
  }
  return e;
}
async function dt(e = h(Re(), ".claude", "state", "served-calls")) {
  return F(e, r => r.endsWith(".jsonl") || r.includes(".jsonl.tmp."), !0, void 0, ce("cleanupPeriodDays", $Qt));
}
async function pt(e = h(Re(), ".claude", "state", "unattended-serving-runs")) {
  return F(e, r => {
    let s = /^([1-9][0-9]{0,9})\.json$/.exec(r)?.[1];
    return s === void 0 ? r.includes(".json.tmp.") : !El(Number(s));
  }, !0, void 0, ce("cleanupPeriodDays", $Qt));
}
async function mt(e) {
  let r = _(),
    s = iw();
  if (s === null) return r;
  try {
    r.messages += await dRi(s, e);
  } catch (error) {
    if (r.errors++, Jke(error)) t(`cleanup settings-review store failed: ${error.code}`, {
      level: "error"
    });else a(error);
  }
  return r;
}
function ht(e) {
  if (!e) return !1;
  try {
    let r = ds(e);
    if (typeof r !== "object" || r === null) return !0;
    if (!("timestamp" in r)) return !0;
    let {
      timestamp: timestamp
    } = r;
    return typeof timestamp !== "number" || !Number.isFinite(timestamp);
  } catch {
    return !0;
  }
}
function wt(e, r) {
  if (!e) return !1;
  try {
    let s = ds(e);
    if (typeof s !== "object" || s === null || !("timestamp" in s)) return !1;
    let {
      timestamp: timestamp_2
    } = s;
    return typeof timestamp_2 === "number" && Number.isFinite(timestamp_2) && timestamp_2 < r;
  } catch {
    return !1;
  }
}
async function yt(e, r) {
  let s;
  try {
    s = await N.readdir(e);
  } catch {
    return;
  }
  let n = r.getTime();
  await Promise.all(s.filter(item => jA(item, "history.jsonl") || sce(item) || jA(item, AGe) || EFs.some(i => item === i || jA(item, i))).map(async item => {
    let i = h(e, item);
    try {
      let m = await N.lstat(i);
      if (m.isFile() && m.mtimeMs < n) await (EFs.includes(item) ? TFs(i) : N.unlink(i));
    } catch {}
  }));
}
async function gt(e) {
  let r = h(Ue(), "history.jsonl"),
    s = e.getTime(),
    n = g => wt(g, s) || ht(g),
    c,
    i;
  try {
    if (c = await N.lstat(r), !c.isFile()) return t("History retention prune skipped: history.jsonl is not a regular file", {
      level: "error"
    }), {
      entriesPruned: 0,
      errors: 1
    };
    i = await Hds(r, n, {
      start: 0,
      end: c.size,
      tail: "defer",
      expect: {
        ino: c.ino,
        birthtimeMs: c.birthtimeMs
      }
    });
  } catch (error) {
    if (K(error)) return {
      entriesPruned: 0,
      errors: 0
    };
    if (error instanceof eJt) return t("History retention prune deferred: history.jsonl changed under the scan"), {
      entriesPruned: 0,
      errors: 0
    };
    return t(`History retention prune failed: ${error}`, {
      level: "error"
    }), {
      entriesPruned: 0,
      errors: 1
    };
  }
  if (i.dropped === 0 && i.consumed === c.size) return {
    entriesPruned: 0,
    errors: 0
  };
  let m,
    y = !1;
  try {
    m = await Zd(r, {
      ...Mut,
      onCompromised: g => {
        y = !0, t(`History retention lock compromised: ${g}`, {
          level: "error"
        });
      }
    });
  } catch (error) {
    if (K(error)) return {
      entriesPruned: 0,
      errors: 0
    };
    return t(`History retention prune failed: ${error}`, {
      level: "error"
    }), {
      entriesPruned: 0,
      errors: 1
    };
  }
  try {
    let g = await N.lstat(r);
    if (!g.isFile() || g.size < i.consumed || c.ino !== 0 && g.ino !== c.ino || g.birthtimeMs !== c.birthtimeMs) return t("History retention prune deferred: history.jsonl changed under the scan"), {
      entriesPruned: 0,
      errors: 0
    };
    let k = await Hds(r, n, {
        start: i.consumed,
        end: g.size,
        tail: "judge",
        expect: {
          ino: g.ino,
          birthtimeMs: g.birthtimeMs
        },
        verifiedHead: {
          bytes: i.consumed,
          digest: i.digest
        },
        residueBytes: c.size - i.consumed
      }),
      entriesPruned = i.dropped + k.dropped;
    if (y) throw Error("history lock compromised before the rewrite");
    if (entriesPruned === 0 && k.terminated && !k.split) return {
      entriesPruned: 0,
      errors: 0
    };
    let S = i.kept.concat(k.kept);
    return await eK(r, S.length ? `${S.join(`
`)}
` : "", {
      exactMode: g.mode & 511
    }), {
      entriesPruned: entriesPruned,
      errors: 0
    };
  } catch (error) {
    if (error instanceof eJt) return t("History retention prune deferred: history.jsonl changed under the scan"), {
      entriesPruned: 0,
      errors: 0
    };
    return t(`History retention prune failed: ${error}`, {
      level: "error"
    }), {
      entriesPruned: 0,
      errors: 1
    };
  } finally {
    await uS(m, "history retention");
  }
}
async function St() {
  let e = h(Ue(), "mcp-discovery-cache"),
    r = await F(e, i => i.endsWith(".json") || i.includes(".json.tmp."), !1),
    s = iw();
  if (s === null) return r;
  let n = ie(),
    c;
  try {
    c = await n.readdir(e);
  } catch {
    return r;
  }
  for (let i of c) {
    if (!i.isDirectory() || !i.name.endsWith(".json.lock")) continue;
    let m = h(e, i.name);
    try {
      if ((await n.stat(m)).mtime < s) await n.rmdir(m), r.messages++;
    } catch {
      r.errors++;
    }
  }
  return await T(e, n), r;
}
async function Dt(e) {
  if (q()) return _();
  let r = h(Ue(), "plans");
  try {
    if (e !== void 0) return await F(r, s => s.endsWith(".md") || s.includes(".md.tmp."));
    return await F(r, ".md");
  } finally {
    GNn();
  }
}
async function L(rootLabel, {
  exclude: exclude,
  skipIf: skipIf,
  refuseRedirectedRoot = !1,
  removeEmptyBaseDir = !0,
  maxAgeDays: maxAgeDays,
  baseDir: baseDir,
  storageV5: storageV5
} = {}) {
  let g = iw(maxAgeDays),
    k = _();
  if (g === null) return k;
  let D = ie(),
    S = Ue(),
    w = baseDir ?? h(S, rootLabel);
  if (refuseRedirectedRoot) {
    if ((await VK(w, S, {
      event: "cleanup_sweep_root_refused",
      phase: "sweep",
      rootLabel: rootLabel
    }, {
      storageV5: storageV5
    })) !== "real") return k;
  }
  let P;
  try {
    P = await D.readdir(w);
  } catch {
    return k;
  }
  for (let O of P) {
    if (!O.isDirectory() || exclude?.has(O.name)) continue;
    let C = h(w, O.name);
    try {
      if ((await D.stat(C)).mtime < g) {
        if (await skipIf?.(C)) continue;
        await D.rm(C, {
          recursive: !0,
          force: !0
        }), k.messages++;
      }
    } catch {
      k.errors++;
    }
  }
  if (removeEmptyBaseDir) await T(w, D);
  return k;
}
function kt() {
  return L("file-history");
}
function Rt() {
  return L("session-env");
}
function _t() {
  return L("tasks");
}
function Et() {
  return L("uploads");
}
function Pt() {
  let e = OP.get()?.folder,
    r = iw();
  return L("dev-mods", {
    exclude: new Set([z(), ...(e === void 0 ? [] : [te(e)])]),
    skipIf: s => Ie(s, r, Ct),
    removeEmptyBaseDir: !1
  });
}
var Ct = 3,
  maxAgeDays_2 = 2;
async function Ot() {
  let baseDir_2 = uJe(),
    r = await f_e(baseDir_2).catch(() => null);
  if (!r) return _();
  return L(Suo, {
    removeEmptyBaseDir: !1,
    maxAgeDays: maxAgeDays_2,
    baseDir: baseDir_2,
    skipIf: async s => !(await twr(s, r))
  });
}
async function bt() {
  try {
    return await H0i();
  } catch (error) {
    if (Jke(error)) t(`[cleanup] the sweep of seed-admin did not run: ${error.code}`, {
      level: "warn"
    });else a(error);
    return {
      removed: 0,
      errors: 1,
      held: 0,
      refused: "no"
    };
  }
}
async function It(e) {
  if (X() && e !== void 0) {
    let n = await Ft(e);
    if (n !== "unaddressed") return n;
  }
  let baseDir_3 = HQt(),
    s = await f_e(baseDir_3).catch(() => null);
  if (!s) return _();
  return L(Puo, {
    removeEmptyBaseDir: !1,
    maxAgeDays: maxAgeDays_3,
    baseDir: baseDir_3,
    skipIf: async n => {
      let c = await f_e(baseDir_3);
      return c?.ino !== s.ino || c.dev !== s.dev || (await f_e(n)) === null || (await N.realpath(n)) !== h(await N.realpath(_e(baseDir_3)), Puo, te(n));
    }
  });
}
async function Ft(e) {
  let r = _(),
    s = lna(),
    n = await e.scopeKind(s);
  if (!n.ok) return n.error.code === "InvalidArgument" ? "unaddressed" : r;
  if (n.value.kind !== "directory" || n.value.object === void 0 || n.value.owner === "other") return r;
  let c = iw(maxAgeDays_3);
  if (c === null) return r;
  let i = await e.deleteScope(s, {
    olderThanMs: Math.max(0, Date.now() - c.getTime())
  });
  if (!i.ok) return r;
  return r.messages += i.value.deleted, r.errors += i.value.failed ?? 0, r;
}
function Tt() {
  return F(Own(), "", !1, vvr);
}
async function At(storageV5_2) {
  return x(x(await L(KCr, {
    refuseRedirectedRoot: !0,
    storageV5: storageV5_2
  }), await L(jGi, {
    refuseRedirectedRoot: !0,
    storageV5: storageV5_2
  })), await Ce($F, storageV5_2));
}
async function Ce(rootLabel_2, storageV5_3) {
  let s = _();
  if (iw() === null) return s;
  let n = Ue(),
    c = h(n, rootLabel_2);
  if ((await VK(c, n, {
    event: "cleanup_sweep_root_refused",
    phase: "sweep",
    rootLabel: rootLabel_2
  }, {
    storageV5: storageV5_3
  })) !== "real") return s;
  let m;
  try {
    m = await ie().readdir(c);
  } catch {
    return s;
  }
  for (let y of m) {
    if (!y.isDirectory() || !Q7e(y.name)) continue;
    s = x(s, await L(h(rootLabel_2, "*", Cse), {
      baseDir: h(c, y.name, Cse),
      refuseRedirectedRoot: !0,
      storageV5: storageV5_3
    }));
  }
  return s;
}
async function De(storageV5_4) {
  let r = _(),
    s = Ue();
  for (let rootLabel_3 of [Z7e, XGe]) {
    let c = h(s, rootLabel_3);
    if ((await VK(c, s, {
      event: "cleanup_sweep_root_refused",
      phase: "sweep",
      rootLabel: rootLabel_3
    }, {
      storageV5: storageV5_4
    })) === "real") {
      let m = await _Jr(c);
      r = x(r, {
        ..._(),
        messages: m.removed,
        errors: m.errors
      });
    }
  }
  return r;
}
function Mt(storageV5_5) {
  return L(Z7e, {
    refuseRedirectedRoot: !0,
    storageV5: storageV5_5
  });
}
async function ve(rootLabel_4, r, failureEvent, storageV5_6) {
  let c = _(),
    i = iw();
  if (i === null) return c;
  let m = await ED().catch(P => {
    a(P);
    return;
  });
  if (m === void 0) return c;
  let y = m ?? wnn(),
    configHome = Ue(),
    k = h(configHome, rootLabel_4);
  if ((await VK(k, configHome, {
    event: "cleanup_sweep_root_refused",
    phase: "sweep",
    rootLabel: rootLabel_4
  }, {
    storageV5: storageV5_6
  })) !== "real") return c;
  let S = ie(),
    w;
  try {
    w = await S.readdir(k);
  } catch {
    return c;
  }
  for (let P of w) {
    if (!P.isDirectory() || !Q7e(P.name) || P.name === y || (await _5e(k, P.name)) === "unmarked") continue;
    let dir = h(k, P.name),
      C;
    try {
      C = (await S.lstat(h(dir, cU)).catch(() => S.lstat(dir))).mtime;
    } catch {
      continue;
    }
    if (C >= i) {
      c.filesRetainedFresh++;
      continue;
    }
    if (c.filesPastCutoff++, await Lve({
      dir: dir,
      trashRoot: h(configHome, r),
      configHome: configHome,
      failureEvent: failureEvent,
      storageV5: storageV5_6
    })) await O6t(k, P.name).catch(() => {}), c.messages++;else c.errors++;
  }
  return c;
}
function Nt(e) {
  return ve(D1, XGe, "plugins_sync_trash_move_failed", e);
}
function xt(e) {
  return ve($F, Z7e, "skills_sync_trash_move_failed", e);
}
function jt(storageV5_7) {
  return L(XGe, {
    refuseRedirectedRoot: !0,
    storageV5: storageV5_7
  });
}
async function Lt(storageV5_8) {
  return x(await L(WGi, {
    refuseRedirectedRoot: !0,
    storageV5: storageV5_8
  }), await Ce(D1, storageV5_8));
}
async function Bt() {
  let e = h(Kc(), "store"),
    r = await F(e, n => n.endsWith(".json") || n.includes(".json.tmp."), !1),
    s = iw();
  if (s !== null) await Pe(e, s, ie(), r);
  return r;
}
function $t() {
  return F(Kc(), e => DCr(e) || LCr(e), !1);
}
async function Wt() {
  return _();
}
async function Ut() {
  let e = iw(),
    r = _();
  if (e === null) return r;
  let s = ie(),
    n = h(Ue(), pe),
    c;
  try {
    c = await s.readdir(n);
  } catch {
    return r;
  }
  for (let i of c) {
    if (!i.isDirectory()) continue;
    let m = h(n, i.name),
      y = (await me(m))?.cacheKey ?? null,
      g;
    try {
      g = await s.readdir(m);
    } catch {
      r.errors++;
      continue;
    }
    for (let k of g) {
      if (!k.isDirectory() || k.name === y) continue;
      let D = h(m, k.name);
      try {
        if ((await s.stat(D)).mtime < e) await s.rm(D, {
          recursive: !0,
          force: !0
        }), r.messages++;
      } catch {
        r.errors++;
      }
    }
    try {
      if ((await s.stat(m)).mtime < e) await s.rm(m, {
        recursive: !0,
        force: !0
      }), r.messages++;
    } catch {
      r.errors++;
    }
  }
  return await T(n, s), r;
}
async function Yt() {
  let e = h(Ue(), "usage-data"),
    r = await F(h(e, "facets"), s => s.endsWith(".json") || s.includes(".json.tmp."));
  return r = x(r, await F(h(e, "session-meta"), s => s.endsWith(".json") || s.includes(".json.tmp."))), r = x(r, await F(e, s => s.endsWith(".html") || sna(s), !1)), await T(e, ie()), r;
}
async function Gt() {
  let e = iw(),
    r = _();
  if (e === null) return r;
  let s = ie(),
    n;
  try {
    n = Mu();
  } catch {
    return r;
  }
  let c;
  try {
    c = await s.readdir(n);
  } catch {
    return r;
  }
  for (let i of c) {
    let m = i.name.startsWith("cc-transcript-") && i.name.endsWith(".txt"),
      y = i.name.startsWith(akr) && i.name.endsWith(".md"),
      g = i.name.startsWith(rZr) && (i.name.endsWith(".json") || i.name.endsWith(".diff")),
      k = !1;
    if (!i.isFile() || !m && !y && !g && !0) continue;
    try {
      if (await M(h(n, i.name), e, s, r)) r.messages++;
    } catch {
      r.errors++;
    }
  }
  return r;
}
async function zt() {
  let e = _(),
    r = iw(TFi);
  if (r === null) return e;
  let s = ie(),
    n;
  try {
    if (n = Mu(), !(await s.lstat(n)).isDirectory()) return e;
  } catch {
    return e;
  }
  let c = h(n, "speculation"),
    i;
  try {
    i = await s.lstat(c);
  } catch {
    return e;
  }
  if (!i.isDirectory()) return e;
  try {
    if (((await G(c, s, {
      requireCompleteWalk: !0
    })) ?? i.mtimeMs) < r.getTime()) return await s.rm(c, {
      recursive: !0,
      force: !0
    }), e.messages++, e;
  } catch {
    e.errors++;
  }
  return await T(c, s), e;
}
async function Xt() {
  let e = h(Ue(), "shares"),
    r = await L("shares");
  return r = x(r, await F(e, s => s.endsWith(".zip") || s.includes(".zip.tmp.") && GFr(s), !1)), await T(e, ie()), r;
}
async function Jt() {
  let e = h(Ue(), "telemetry"),
    r = await F(e, ".json", !1),
    s = iw();
  if (s === null) return r;
  let n = h(e, "runs"),
    c = ie();
  if ((await W(e, c)) && (await W(n, c))) await re(n, s, c, r, {
    entryMatcher: i => i.endsWith(".json")
  });
  return await T(e, ie()), r;
}
function Zt() {
  return F(h(Ue(), "dump-prompts"), ".jsonl", !0, EFi);
}
function Qt() {
  return F(h(Ue(), "shell-snapshots"), ".sh", !1);
}
var Vt = /\.deleted-[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$/;
async function er() {
  let e = iw(),
    r = _();
  if (e === null) return r;
  let s = ie(),
    n = drt();
  for (let c of await s.readdir(n).catch(() => [])) {
    if (!c.isDirectory()) continue;
    if (Vt.test(c.name)) {
      try {
        await s.rm(h(n, c.name), {
          recursive: !0,
          force: !0
        }), r.messages++;
      } catch {
        r.errors++;
      }
      continue;
    }
    let i = h(n, c.name, "inboxes");
    if (await W(i, s)) {
      for (let m of await s.readdir(i).catch(() => [])) {
        if (!m.isFile() || !m.name.endsWith(".json")) continue;
        try {
          if (await M(h(i, m.name), e, s, r)) r.messages++;
        } catch {
          r.errors++;
        }
      }
      await T(i, s);
    }
    await T(h(n, c.name), s);
  }
  return r;
}
async function tr(e, r = He()) {
  let s = _(),
    n = ie(),
    c = process.getuid?.(),
    i;
  try {
    i = await n.readdir(r);
  } catch (error) {
    if (!K(error)) s.errors++;
    return s;
  }
  for (let m of i) {
    if (!m.name.startsWith("cc-daemon-")) continue;
    let y = m.name.slice(10);
    if (/^\d+$/.test(y) || c !== void 0 && y === String(c) || /^[0-9a-f]{16}$/.test(y)) continue;
    let g = h(r, m.name);
    try {
      let k = await f_e(g);
      if (k === null) continue;
      let D = await n.readdir(g);
      if (D.length !== 1 || D[0].name !== "stderr.log") continue;
      let S = h(g, "stderr.log"),
        w = await n.lstat(S);
      if (!w.isFile()) continue;
      if (!(w.mtime < e)) {
        s.filesRetainedFresh++;
        continue;
      }
      let P = await f_e(g);
      if (P === null || P.dev !== k.dev || P.ino !== k.ino) continue;
      try {
        await n.unlink(S);
      } catch (error) {
        if (K(error)) continue;
        throw s.filesPastCutoff++, error;
      }
      s.messages++, await T(g, n);
    } catch (error) {
      if (!K(error)) s.errors++;
    }
  }
  return s;
}
var regExp = new RegExp(`^${R2n}[A-Za-z0-9]{6}$`);
async function nr(e = iw(), r = xf()) {
  let s = _();
  if (e === null) return s;
  let n = ie(),
    c;
  try {
    c = await n.readdir(r);
  } catch (error) {
    if (!K(error)) s.errors++;
    return s;
  }
  for (let i of c) {
    if (!regExp.test(i.name)) continue;
    let m = h(r, i.name);
    try {
      let y = await f_e(m);
      if (y === null) continue;
      if (!(y.mtime < e)) {
        s.filesRetainedFresh++;
        continue;
      }
      let g = await n.readdir(m),
        k = g.filter(item => /^p-\d+\.jpg$/.test(item.name));
      if (k.length !== g.length) continue;
      if (!(await Promise.all(k.map(item => yv(item, h(m, item.name), "other")))).every(item => item === "file")) continue;
      let S = await f_e(m);
      if (S === null || S.dev !== y.dev || S.ino !== y.ino) continue;
      await Promise.all(k.map(item => n.unlink(h(m, item.name)))), await T(m, n), s.messages++;
    } catch (error) {
      if (!K(error)) s.errors++;
    }
  }
  return s;
}
var regExp_2 = new RegExp(`^${A2n}[A-Za-z0-9]{6}$`);
async function ir(e = iw(), r = xf()) {
  let s = _();
  if (e === null) return s;
  let n = ie(),
    c;
  try {
    c = await n.readdir(r);
  } catch (error) {
    if (!K(error)) s.errors++;
    return s;
  }
  for (let i of c) {
    if (!regExp_2.test(i.name)) continue;
    let m = h(r, i.name);
    try {
      let y = await f_e(m);
      if (y === null) continue;
      if (!(((await G(m, n, {
        requireCompleteWalk: !0
      })) ?? y.mtimeMs) < e.getTime())) {
        s.filesRetainedFresh++;
        continue;
      }
      let k = await f_e(m);
      if (k === null || k.dev !== y.dev || k.ino !== y.ino) continue;
      await n.rm(m, {
        recursive: !0,
        force: !0
      }), s.messages++;
    } catch (error) {
      if (!K(error)) s.errors++;
    }
  }
  return s;
}
async function ar(e, r) {
  let s = Ue(),
    n = await F(h(s, "jobs", "settled"), ".json");
  n = x(n, await F(h(s, "daemon", "dispatch", "rejected"), ".json")), n = x(n, await F(h(s, "daemon", "dispatch"), ".json", !1)), n = x(n, await F(h(s, "daemon", "auth"), ".json"));
  for (let k of ["host-managed", "gateway-routed"]) try {
    let D = h(s, "daemon", k),
      S = ie(),
      w = iw();
    if (w) for (let P of await S.readdir(D)) {
      if (!P.isFile()) continue;
      try {
        await S.lstat(h(s, "jobs", P.name));
      } catch (error) {
        if (!K(error)) {
          n.errors++;
          continue;
        }
        try {
          if (await M(h(D, P.name), w, S, n)) n.messages++;
        } catch (error) {
          if (!K(error)) n.errors++;
        }
      }
    }
  } catch (error) {
    if (!K(error)) n.errors++;
  }
  let c = tci(),
    cutoff = iw(),
    exclude_2 = new Set();
  if (!c) for (let k of await LDe(e)) exclude_2.add(k);
  let y = !1,
    g = !1;
  try {
    let k = h(s, "daemon", "roster.json"),
      D = await ie().lstat(k);
    if (!D.isFile() || D.size > 8388608) throw Error("not a regular file");
    let S = await ie().readFile(k, {
        encoding: "utf-8"
      }),
      w = ee(S);
    if (w !== null && typeof w === "object" && "workers" in w) {
      let workers = w.workers;
      if (workers !== null && typeof workers === "object") {
        y = !0;
        for (let [O, C] of Object.entries(workers)) if (C !== null && typeof C === "object" && "pid" in C && typeof C.pid === "number" && El(C.pid) && (await cT(C.pid, "procStart" in C && typeof C.procStart === "string" ? C.procStart : void 0))) exclude_2.add(O), g = !0;
      }
    }
  } catch {}
  if (n = x(n, await L("jobs", {
    exclude: exclude_2,
    skipIf: async k => {
      let D;
      try {
        D = await KPn(k, e);
      } catch (error) {
        throw a(error), t(`[cleanup] jobs/${te(k)}: job state read threw \u2014 keeping the folder (${d(error)})`, {
          level: "error"
        }), error;
      }
      if (!c && (D === null || !ml(D))) return !0;
      if (D?.worktreePath && ml(D) && cutoff) {
        let S = await cns({
          worktreePath: D.worktreePath,
          worktreeBranch: D.worktreeBranch,
          originCwd: D.originCwd,
          hookBased: D.worktreeHookBased,
          cutoff: cutoff,
          ...{}
        }).catch(w => (a(w), !1));
      }
      return !1;
    }
  })), cutoff !== null) {
    n = x(n, await tr(cutoff));
    let k = ie();
    for (let S of [h(s, "daemon.log"), h(s, "daemon.log.1")]) try {
      if (await M(S, cutoff, k, n)) n.messages++;
    } catch (error) {
      if (!K(error)) n.errors++;
    }
    let D = h(s, "daemon", "roster.json");
    try {
      if ((await k.lstat(D)).mtime < cutoff && !g && (y || c)) await k.unlink(D), n.messages++;
    } catch (error) {
      if (!K(error)) n.errors++;
    }
    for (let S of await k.readdir(h(s, "daemon")).catch(() => [])) {
      if (!S.isFile() || !S.name.startsWith("roster.json.corrupt.")) continue;
      try {
        if (await M(h(s, "daemon", S.name), cutoff, k, n)) n.messages++;
      } catch {
        n.errors++;
      }
    }
  }
  return await lnr(), n;
}
async function or() {
  let e = iw();
  if (e !== null) await uMs(e);
  return F(h(Ue(), "backups"), "", !1, void 0, e);
}
async function cr() {
  let e = iw(),
    r = _();
  if (e === null) return r;
  let s = ie(),
    n = h(Ue(), "debug"),
    c;
  try {
    c = await s.readdir(n);
  } catch {
    return r;
  }
  for (let i of c) {
    if (i.name === "latest" || !i.isFile()) continue;
    try {
      if (await M(h(n, i.name), e, s, r)) r.messages++;
    } catch {
      r.errors++;
    }
  }
  return r;
}
async function lr() {
  return F(h(Ue(), "feedback-bundles"), ".zip");
}
async function ur() {
  return F(h(Ue(), "feedback", "drafts"), e => e.endsWith(".json") || e.includes(".json.tmp."), !0, 30);
}
async function fr() {
  let e = h(Ue(), "remote-control", "fork-seeds"),
    r = await F(e, c => c.endsWith(".json") || c.includes(".json.tmp."));
  if (iw() === null) return r;
  let date_2 = new Date(),
    n = ie();
  for (let c of await n.readdir(e).catch(() => [])) try {
    let i = h(e, c.name);
    if (c.isFile() && (await n.stat(i)).mtime > date_2) await N.lutimes(i, date_2, date_2);
  } catch {
    r.errors++;
  }
  return r;
}
async function dr() {
  let e = await F(h(Ue(), "traces"), ".json"),
    r = await F(h(Ue(), "startup-perf"), ".txt"),
    s = await F(h(Ue(), "startup-perf"), ".json");
  return x(x(e, r), s);
}
var pr = 86400000,
  Oe = gds;
function mr(e) {
  if (e === void 0) return b("none");
  if (!Oe.has(e)) return b("other");
  return e === "ELOOP" ? b("ELOOP") : e === "EISDIR" ? b("EISDIR") : b("ENXIO");
}
function hr(e) {
  return e.code === "Failed" && e.telemetryCode !== void 0 && Oe.has(e.telemetryCode);
}
function wr(e) {
  if (e.ok) return "removed it";
  return ("telemetryCode" in e.error ? e.error.telemetryCode : void 0) === "EISDIR" ? "could not remove it (EISDIR): a directory at the marker path stays and the marker write will keep failing" : `could not remove it (${e.error.code})`;
}
async function f3o(e) {
  let r = await e.statMeta(Ve.state("last-cleanup"));
  if (r.ok || r.error.code === "NotFound" || !hr(r.error)) return;
  l("tengu_cleanup_throttle_marker", {
    marker: b("last-cleanup"),
    verdict: b("not_regular_rerun"),
    code: f(r.error.code),
    errno: mr("telemetryCode" in r.error ? r.error.telemetryCode : void 0)
  });
  let s = await e.delete(Ve.state("last-cleanup"));
  t(`.last-cleanup: sentinel is not a regular file (${Ht(r.error)}) \u2014 ${wr(s)}; rewriting`, {
    level: "warn"
  });
}
var yr = [".npm-cache-cleanup", ".version-cleanup", ".last-cleanup", ".deep-link-register-failed"];
async function p3o(e, r) {
  if (!r.claimStagingReap()) return;
  let s;
  try {
    s = await N.readdir(e);
  } catch {
    return;
  }
  let n = Date.now() - pr;
  await Promise.all(s.filter(item => yr.some(i => jA(item, i))).map(async item => {
    let i = h(e, item);
    try {
      let m = await N.lstat(i);
      if (m.isFile() && m.mtimeMs < n) await N.unlink(i);
    } catch {}
  }));
}
async function gr() {
  let e = iw(),
    r = _();
  if (e === null) return r;
  let s = ie();
  for (let n of Iuo) {
    let c = h(Ue(), n),
      i = await s.lstat(c).catch(g => {
        if (!K(g)) r.errors++;
        return null;
      });
    if (i === null || !i.isDirectory()) continue;
    let m;
    try {
      m = await s.readdir(c);
    } catch {
      continue;
    }
    let y = !1;
    for (let g of m) {
      let k = h(c, g.name);
      try {
        if (!((await s.stat(k)).mtime < e)) continue;
        let S = await s.lstat(c).catch(() => null);
        if (S === null || !S.isDirectory() || S.dev !== i.dev || S.ino !== i.ino) {
          y = !0;
          break;
        }
        if (g.isDirectory()) await s.rm(k, {
          recursive: !0,
          force: !0
        });else await s.unlink(k);
        r.messages++;
      } catch {
        r.errors++;
      }
    }
    if (!y) await T(c, s);
  }
  return r;
}
async function Sr() {
  let e = _(),
    r = iw();
  if (r === null) return e;
  let s = h(pet(), "projects"),
    n = ie(),
    c = await n.lstat(s).catch(m => {
      if (!K(m)) e.errors++;
      return null;
    });
  if (c === null || !c.isDirectory()) return e;
  let i = await n.readdir(s).catch(m => {
    if (!K(m)) e.errors++;
    return [];
  });
  for (let m of i) {
    if (!m.isDirectory()) continue;
    let y = h(s, m.name, "tiny_memory"),
      g = await n.lstat(y).catch(k => {
        if (!K(k)) e.errors++;
        return null;
      });
    if (g === null || !g.isDirectory()) continue;
    await re(y, r, n, e, {
      countEnumerationFailures: !0
    });
  }
  return e;
}
async function Dr() {
  let r = _(),
    s = iw();
  if (s === null) return r;
  let n = h(pet(), "projects"),
    c = ie(),
    i = await c.readdir(n).catch(() => []);
  for (let m of i) {
    if (!m.isDirectory()) continue;
    r = x(r, await ke(h(n, m.name, "memory", "proposals"), s, c));
  }
  return x(r, await ke(h(vl(), "proposals"), s, c));
}
var kr = "skill-proposal";
async function ke(e, r, s) {
  let n = _();
  try {
    if ((await s.lstat(e)).isSymbolicLink()) return n;
  } catch (error) {
    if (!qt(error)) n.errors++;
    return n;
  }
  let c = await s.readdir(e).catch(i => {
    if (!K(i)) n.errors++;
    return [];
  });
  for (let i of c) {
    if (!i.isFile() || !i.name.endsWith(".md")) continue;
    let m = h(e, i.name);
    try {
      let {
        content: content,
        mtimeMs: mtimeMs_2
      } = await X0e(m, 0, wCe, cse, void 0, {
        truncateOnByteLimit: !0
      });
      if (!(mtimeMs_2 < r.getTime())) continue;
      if (td(content, m).frontmatter.type !== kr) continue;
      await s.unlink(m), n.messages++;
    } catch (error) {
      if (!K(error)) n.errors++;
    }
  }
  return await T(e, s), n;
}
async function m3o(e) {
  await we();
  let r = await bt(),
    s = {
      seedAdminRemoved: r.removed,
      seedAdminErrors: r.errors,
      seedAdminHeld: r.held,
      seedAdminRefused: f(r.refused)
    },
    n = await se(),
    c = n === "asked" ? {} : {
      hooksUnasked: f(n)
    },
    skipReason = await inr(e),
    m = Cr()?.cleanupPeriodDays;
  if (skipReason !== null) {
    if (l("tengu_retention_sweep", {
      skipped: !0,
      skipReason: f(skipReason),
      ...s,
      ...c
    }), vCs({
      result: "skipped",
      skipReason: skipReason,
      periodDays: m ?? $Qt,
      usedDefault: m === void 0
    }), skipReason !== "diskless") await De(e);
    return skipReason;
  }
  l("tengu_retention_sweep", {
    phase: b("start"),
    ...s,
    ...c
  });
  let y = void 0,
    g,
    k = () => g ??= et(y);
  await using D = {
    [Symbol.asyncDispose]: () => k().then(() => {}, () => {})
  };
  await qe();
  let S = await nt(),
    w = [S];
  w.push(await Dt(e)), w.push(await kt()), w.push(await Rt()), w.push(await _t()), w.push(await Et()), w.push(await Pt()), w.push(await It(e)), w.push(await Ot()), w.push(await Tt()), w.push(await Yt()), w.push(await At(e)), w.push(await Lt(e)), w.push(await xt(e)), w.push(await Nt(e)), w.push(await Mt(e)), w.push(await jt(e)), w.push(await Bt()), w.push(await $t()), w.push(await Wt()), w.push(await Ut()), w.push(await Gt()), w.push(await nr()), w.push(await ir()), w.push(await zt()), w.push(await Xt()), w.push(await Jt()), w.push(await cr()), w.push(await lr()), w.push(await ur()), w.push(await fr()), w.push(await dr()), w.push(await Zt()), w.push(await Qt()), w.push(await er()), w.push(await ar(e, y)), w.push(await or()), w.push(await st()), w.push(await ct()), w.push(await lt()), w.push(await ut()), w.push(await ft()), w.push(await dt()), w.push(await pt()), w.push(await mt()), w.push(await St()), w.push(await it()), w.push(await at()), w.push(await ot()), w.push(await gr()), w.push(await Sr()), w.push(await Dr());
  let P = {
      entriesPruned: 0,
      errors: 0
    },
    O = iw();
  if (O !== null) {
    await vxi(O, e);
    let R = await PBi(O);
    w.push({
      ..._(),
      messages: R.removed,
      errors: R.errors
    });
    let removed = await dns(O, y, !1);
    if (removed > 0) l("tengu_worktree_cleanup", {
      removed: removed
    });
    if (await yt(Ue(), O), hs("hipaa") && v("tengu_hipaa_history_retention_prune", !0)) P = await gt(O), w.push({
      ..._(),
      errors: P.errors
    });
  }
  w.push(await De(e)), w.push(await k());
  let C = w.reduce(x, _());
  l("tengu_retention_sweep", {
    phase: b("complete"),
    skipped: !1,
    transcriptsDeleted: S.transcripts,
    transcriptsExemptedDesktop: S.transcriptsExemptedDesktop,
    sessionFilesDeleted: S.messages,
    artifactsDeleted: C.messages,
    filesRetainedFresh: C.filesRetainedFresh,
    filesPastCutoff: C.filesPastCutoff,
    errors: C.errors,
    historyEntriesPruned: P.entriesPruned,
    periodDays: m ?? $Qt,
    usedDefault: m === void 0
  }), vCs({
    result: "complete",
    periodDays: m ?? $Qt,
    usedDefault: m === void 0,
    transcriptsDeleted: S.transcripts,
    transcriptsExemptedDesktop: S.transcriptsExemptedDesktop,
    sessionFilesDeleted: S.messages,
    artifactsDeleted: C.messages,
    filesRetainedFresh: C.filesRetainedFresh,
    filesPastCutoff: C.filesPastCutoff,
    errorCount: C.errors,
    historyEntriesPruned: P.entriesPruned
  });
}
async function Ie(e, r, s) {
  if (r === null) return !0;
  let n = await N.readdir(e, {
    withFileTypes: !0
  }).catch(() => []);
  for (let c of n) {
    let i = h(e, c.name),
      m = await N.lstat(i).catch(() => null);
    if (m !== null && m.mtime > r) return !0;
    if (s > 1 && c.isDirectory() && (await Ie(i, r, s - 1))) return !0;
  }
  return !1;
}
export { inr, u3o, iw, tci, Jke, f3o, p3o, m3o };