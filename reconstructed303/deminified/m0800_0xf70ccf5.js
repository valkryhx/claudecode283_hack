// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { K, de } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { W } from "B:/~BUN/root/chunk-hg8ngszx.js";
import { b, c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { d, G, Wt, o_ } from "B:/~BUN/root/chunk-3aez4b53.js";
import { J, jo, se, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { Pe, fet } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { nt } from "B:/~BUN/root/chunk-nggrknsv.js";
import { Bbt, l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { dI, vXn, Uhe } from "B:/~BUN/root/chunk-rvc0n7zm.js";
import { hv, oDe, EBr, fmn, Tjo } from "B:/~BUN/root/chunk-4bgg5sdy.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { ud, z2n, G2n, _D, gNt } from "B:/~BUN/root/chunk-472kxa0t.js";
import { pYs, Cr, cQ, Be, gYs } from "B:/~BUN/root/chunk-d9rmnpx3.js";
import { C0e, U_t } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { Gie, WRr, ABe, ezn, YRr, wDt, vDt, sIs, iIs, Dko as maxAgeDays_3, JRr } from "B:/~BUN/root/chunk-r0jnxjth.js";
import { Hf, eXn, tXn, wd } from "B:/~BUN/root/chunk-wegca9zh.js";
import { Mgo, p3e, Ta } from "B:/~BUN/root/chunk-nq10jsxs.js";
import { ek } from "B:/~BUN/root/chunk-2ypz4cxh.js";
import { nn } from "B:/~BUN/root/chunk-6a9s3k2y.js";
import { eDo, LD, E, SMe, Zi } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { P1t, K9n, b4s, S4s, T1o, C1o, w4s, _Te } from "B:/~BUN/root/chunk-2zk4vqr8.js";
import { Pmn } from "B:/~BUN/root/chunk-gyr2a6wz.js";
import { dl, zm } from "B:/~BUN/root/chunk-7c8rc0p5.js";
import { me, nr, UHo, M_, JO, dze } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { Ni } from "B:/~BUN/root/chunk-h9p45fg5.js";
import { hOn } from "B:/~BUN/root/chunk-rkhevgsf.js";
import { SD, RX, M1e, Dj, $9e, uVn, ZDs, Lj, D1e, eLs } from "B:/~BUN/root/chunk-hhgqcegv.js";
import { vxo } from "B:/~BUN/root/chunk-yjayxywk.js";
import { wst, Aas } from "B:/~BUN/root/chunk-b62g3t2f.js";
import { cae, d3, hi } from "B:/~BUN/root/chunk-h1tq8zce.js";
import { tto } from "B:/~BUN/root/chunk-vac5hr4g.js";
import { FOn, Zas } from "B:/~BUN/root/chunk-1djsy5g3.js";
import { Fz, Aue, rq, SAt, WP, Ydo, Xdo } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { Xp } from "B:/~BUN/root/chunk-9080897a.js";
import { lOr } from "B:/~BUN/root/chunk-hkc0g0wr.js";
import { Hon } from "B:/~BUN/root/chunk-9w4ppz44.js";
import { tGn, nGn, rGn, oGn } from "B:/~BUN/root/chunk-fb07w30y.js";
import { ree, C_o, u5e, VMt, ibo, ZCs, Zwe, GRs } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { kSs } from "B:/~BUN/root/chunk-qdaqzk6w.js";
import { kGn } from "B:/~BUN/root/chunk-6xef02qz.js";
import { O5t } from "B:/~BUN/root/chunk-sg9k8m28.js";
import { Cbe } from "B:/~BUN/root/chunk-adys8ehb.js";
import { Cv } from "B:/~BUN/root/chunk-6yvm6c0j.js";
import { Ras } from "B:/~BUN/root/chunk-6rnb9677.js";
import { Ia } from "B:/~BUN/root/chunk-9xr0x7gd.js";
import { o, v, u } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { yt } from "B:/~BUN/root/chunk-hz8x9zsh.js";
import * as A from "fs/promises";
import { homedir as he, tmpdir as Ce } from "os";
import { basename as q, dirname as we, join as h } from "path";
import { join as oe } from "path";
var _e = "image-cache";
async function ce() {
  let e = se(),
    r = oe(Pe(), _e),
    s = K();
  try {
    let n;
    try {
      n = await e.readdir(r);
    } catch {
      return;
    }
    for (let p of n) {
      if (p.name === s) continue;
      let a = oe(r, p.name);
      try {
        await e.rm(a, {
          recursive: !0,
          force: !0
        }), t(`Cleaned up old image cache: ${a}`);
      } catch {}
    }
    try {
      if ((await e.lstat(r)).isDirectory()) await e.rmdir(r);
    } catch {}
  } catch {}
}
var yr = f(() => u({
  key: o(),
  integrity: o().nullable(),
  time: v()
}));
var ve = 0,
  Oe = ["ccr-tip.json", "custom-title.json", "precompact.json", "sent-prefix.json", tGn];
function le(e) {
  let r = cQ(e);
  return Cr(e) && r.length === 1 && r[0] === e.toLowerCase() && w4s(e);
}
function be(e) {
  return Oe.some(item => e === item || dI(e, item)) || e.startsWith(nGn) && (e.endsWith(".json") || e.includes(".json.tmp.")) || e.startsWith(rGn) && e.endsWith(".md");
}
async function gOn(e) {
  if (!nn("userSettings") && nr()?.cleanupPeriodDays === void 0) return t("Skipping retention cleanup: userSettings source is disabled (--setting-sources) and no enabled source provides cleanupPeriodDays."), "user_source_disabled";
  if (me("policySettings")?.cleanupPeriodDays !== void 0) return null;
  if (Cbe().errors.filter(item => !item.mcpErrorMetadata && item.severity !== "warning").length > 0) for (let s of U_t) {
    let n = await dze(s, e, s === "desktopSessionCleanupPeriodDays" ? {
      presenceSources: ["userSettings", "flagSettings"]
    } : void 0);
    if (n === "unknowable") return t(`Skipping cleanup: a settings file could not be read or parsed, so ${s} may be set to a value that cannot be seen. Fix the settings file (see /doctor) to re-enable cleanup.`), "settings_unknowable";
    if (n === "present") return t(`Skipping cleanup: settings have validation errors but ${s} was explicitly set. Fix settings errors to enable cleanup.`), "settings_invalid_key_set";
  }
  return null;
}
async function Veo(e) {
  return (await gOn(e)) === null;
}
function Ib(e) {
  let s = (nr() || {}).cleanupPeriodDays ?? vDt;
  if (s === 0) return null;
  if (e !== void 0 && e < s) s = e;
  let n = s * 24 * 60 * 60 * 1000;
  return new Date(Date.now() - n);
}
var Z = ".desktop-released.json",
  Fe = 4096;
function ee(e) {
  return e.slice(0, -6) + Z;
}
var Ie = f(() => u({
  reason: o().optional()
}));
async function ue(e, r, s) {
  let n = await r.readFileFdGated(e, Fe);
  if (n === null) return "none";
  let p;
  try {
    let a = Ie().safeParse(J(n.content));
    p = a.success ? a.data.reason : void 0;
  } catch {
    return "none";
  }
  if (p === "delete") return "release-now";
  if (p === "archive") return n.stats.mtime < s ? "release-now" : "grace";
  return "none";
}
function Te(e) {
  return /^[0-9A-Za-z_-]{1,64}$/.test(e);
}
function xe() {
  return re("desktopSessionCleanupPeriodDays", ve);
}
function re(e, r) {
  let s = JO(e)[0] ?? r;
  if (s === 0) return null;
  return new Date(Date.now() - s * 24 * 60 * 60 * 1000);
}
function Ae() {
  if (me("policySettings")?.cleanupPeriodDays !== void 0) return !0;
  if (UHo()) return !0;
  return M_().some(item => item.file !== C0e && (U_t.some(r => r === item.path) || item.severity !== "warning"));
}
function Tas() {
  return Ae() || Ni("hipaa") || Ni("zdr");
}
function _() {
  return {
    messages: 0,
    errors: 0,
    filesRetainedFresh: 0,
    filesPastCutoff: 0
  };
}
function N(e, r) {
  return {
    messages: e.messages + r.messages,
    errors: e.errors + r.errors,
    filesRetainedFresh: e.filesRetainedFresh + r.filesRetainedFresh,
    filesPastCutoff: e.filesPastCutoff + r.filesPastCutoff
  };
}
function je(e) {
  let r = nt(e, ".").replace(/T(\d{2})-(\d{2})-(\d{2})-(\d{3})Z/, "T$1:$2:$3.$4Z");
  return new Date(r);
}
function Tbe(e) {
  return Wt(e) || o_(e);
}
async function fe(e, r, s) {
  let n = _();
  try {
    let p = await se().readdir(e);
    for (let a of p) try {
      if (je(a.name) < r) if (await se().unlink(h(e, a.name)), s) n.messages++;else n.errors++;
    } catch (error) {
      t(`Failed to clean up file ${a.name} in ${e}: ${error}`, {
        level: "error"
      });
    }
  } catch (error) {
    if (G(error)) ;else if (Tbe(error)) t(`cleanup readdir ${e} failed: ${error.code}`, {
      level: "error"
    });else l(error);
  }
  return n;
}
async function Ne() {
  let e = se(),
    r = Ib();
  if (r === null) return _();
  let s = Bbt.errors(),
    n = Bbt.baseLogs(),
    p = await fe(s, r, !1);
  try {
    let a;
    try {
      a = await e.readdir(n);
    } catch {
      return p;
    }
    let w = a.filter(item => item.isDirectory() && item.name.startsWith("mcp-logs-")).map(item => h(n, item.name));
    for (let g of w) p = N(p, await fe(g, r, !0)), await I(g, e);
  } catch (error) {
    if (G(error)) ;else if (Tbe(error)) t(`cleanup mcp-logs scan failed: ${error.code}`, {
      level: "error"
    });else l(error);
  }
  return p;
}
async function x(e, r, s, n, p = r, a) {
  let w;
  try {
    w = await s.stat(e);
  } catch (error) {
    if (G(error)) return !1;
    throw error;
  }
  if (!(w.mtime < r)) return n.filesRetainedFresh++, !1;
  if (a !== void 0 && (await a(e, w))) return !1;
  try {
    await s.unlink(e);
  } catch (error) {
    if (G(error)) return !1;
    if (w.mtime < p) n.filesPastCutoff++;
    throw error;
  }
  return !0;
}
async function I(e, r) {
  if (!(await Y(e, r))) return;
  try {
    await r.rmdir(e);
  } catch {}
}
var te = [b4s, S4s];
async function Me(e, r, s, n) {
  try {
    for (let m of te) await ye(h(e, m), r, s, n);
    let p = !1;
    try {
      let {
          sweepCheckoutSessionTrash: sweepCheckoutSessionTrash
        } = await import("B:/~BUN/root/chunk-q4b89rxg.js"),
        S = await sweepCheckoutSessionTrash(e, r.getTime());
      n.messages += S.removed, n.errors += S.errors, p = S.newestKeptMs !== null;
    } catch {
      n.errors++, p = !0;
    }
    let a = (await s.readdir(e)).filter(item => !te.includes(item.name)),
      w = null;
    for (let m of a) {
      let S = h(e, m.name),
        R = (await ne(m, S, s)) === "directory" ? await X(S, s, {
          requireCompleteWalk: !0
        }) : (await s.lstat(S)).mtimeMs;
      if (R !== null) w = Math.max(w ?? -1 / 0, R);
    }
    if (!((w ?? (await ge(e, s))) < r.getTime())) return;
    let y = (await Promise.all(te.map(item => s.lstat(h(e, item)).then(S => S.isDirectory(), S => {
        if (G(S)) return !1;
        throw S;
      })))).includes(!0),
      D = a.toSorted((m, S) => Number(m.name === T1o) - Number(S.name === T1o));
    if (y || p) {
      let m = !1;
      for (let S of D) {
        if (p && S.name === K9n) {
          m = (await We(h(e, S.name), s)) || m;
          continue;
        }
        await s.rm(h(e, S.name), {
          recursive: !0,
          force: !0
        }), m = !0;
      }
      if (m) n.messages++;
      return;
    }
    for (let m of D.slice(0, -1)) await s.rm(h(e, m.name), {
      recursive: !0,
      force: !0
    });
    await s.rm(e, {
      recursive: !0,
      force: !0
    }), n.messages++;
  } catch (error) {
    if (!G(error)) n.errors++;
  }
}
async function ye(e, r, s, n) {
  if (!(await Y(e, s))) return;
  let p = await s.readdir(e).catch(() => []);
  for (let a of p) {
    let w = await ne(a, h(e, a.name), s).catch(y => {
      if (!G(y)) n.errors++;
      return "other";
    });
    if (w === "file") {
      try {
        if (await x(h(e, a.name), r, s, n)) n.messages++;
      } catch {
        n.errors++;
      }
      continue;
    }
    if (w !== "directory") continue;
    let g = h(e, a.name);
    try {
      if (((await X(g, s, {
        requireCompleteWalk: !0
      })) ?? (await ge(g, s))) < r.getTime()) await s.rm(g, {
        recursive: !0,
        force: !0
      }), n.messages++;
    } catch (error) {
      if (!G(error)) n.errors++;
    }
  }
  await I(e, s);
}
async function ne(e, r, s) {
  if (e.isDirectory()) return "directory";
  if (e.isFile()) return "file";
  if (e.isSymbolicLink() || e.isFIFO() || e.isSocket() || e.isBlockDevice() || e.isCharacterDevice()) return "other";
  let n = await s.lstat(r);
  return n.isDirectory() ? "directory" : n.isFile() ? "file" : "other";
}
async function ge(e, r) {
  return (await r.lstat(e)).mtimeMs;
}
async function Le(e) {
  let r = Ib(),
    s = _();
  if (r === null) return s;
  let n = Xp(),
    p = se();
  for (let a of await p.readdir(n).catch(() => [])) {
    let w = h(n, a.name),
      g = h(w, P1t);
    if (a.isDirectory() && (await Y(g, p))) await Me(g, r, p, s), await I(w, p);
  }
  return s;
}
async function We(e, r) {
  let s = e,
    n = !1;
  for (let p of ["objects", "info", "alternates"]) {
    if (!(await r.lstat(s)).isDirectory()) return await r.rm(s, {
      recursive: !0,
      force: !0
    }), !0;
    for (let a of await r.readdir(s)) if (a.name !== p) await r.rm(h(s, a.name), {
      recursive: !0,
      force: !0
    }), n = !0;
    s = h(s, p);
  }
  return n;
}
async function Y(e, r) {
  try {
    return (await r.lstat(e)).isDirectory();
  } catch {
    return !1;
  }
}
async function Q(e, r, s, n, p = {}) {
  let {
      entryMatcher: entryMatcher
    } = p,
    w = await s.readdir(e).catch(g => {
      if (p.countEnumerationFailures === !0 && !G(g)) n.errors++;
      return [];
    });
  for (let g of w) {
    let y = h(e, g.name);
    if (g.isDirectory()) await Q(y, r, s, n, p);else if (entryMatcher !== void 0 && !entryMatcher(g.name)) ;else if (g.isFile()) try {
      if (await x(y, r, s, n)) n.messages++;
    } catch {
      n.errors++;
    } else try {
      if ((await s.lstat(y)).mtime < r) await s.unlink(y), n.messages++;
    } catch {
      n.errors++;
    }
  }
  await I(e, s);
}
async function X(e, r, {
  requireCompleteWalk = !1
} = {}) {
  let n = -1 / 0,
    p = await r.readdir(e).catch(a => {
      if (requireCompleteWalk && !G(a)) throw a;
      return [];
    });
  for (let a of p) {
    let w = h(e, a.name),
      g = requireCompleteWalk ? await ne(a, w, r).catch(y => {
        if (G(y)) return "other";
        throw y;
      }) : a.isDirectory() ? "directory" : a.isFile() ? "file" : "other";
    if (g === "directory") {
      let y = await X(w, r, {
        requireCompleteWalk: requireCompleteWalk
      });
      if (y !== null) n = Math.max(n, y);
    } else if (g === "file") try {
      let {
        mtimeMs: mtimeMs
      } = await r.stat(w);
      n = Math.max(n, mtimeMs);
    } catch (error) {
      if (requireCompleteWalk && !G(error)) throw error;
    }
  }
  return n === -1 / 0 ? null : n;
}
async function He() {
  let e = Ib(),
    r = {
      ..._(),
      transcripts: 0,
      transcriptsExemptedDesktop: 0
    };
  if (e === null) return r;
  let s = Xp(),
    n = se(),
    p;
  try {
    p = await n.readdir(s);
  } catch {
    return r;
  }
  let a;
  try {
    if (a = wd(), !(await n.lstat(a)).isDirectory()) a = null;
  } catch {
    a = null;
  }
  let w = Tas(),
    g = xe(),
    y = null,
    D = w ? void 0 : async (m, S) => {
      if (Ni("hipaa") || Ni("zdr")) return !1;
      if (g !== null && S.mtime < g) return !1;
      let R = await ue(ee(m), n, e);
      if (R === "release-now") return !1;
      if (R === "grace") return r.transcriptsExemptedDesktop++, !0;
      if (S.size === 0) {
        if (!(await n.stat(m.slice(0, -6)).then(T => T.isDirectory(), () => !1))) return r.transcriptsExemptedDesktop++, !0;
      }
      y ??= Buffer.allocUnsafe(hv);
      let {
        head: head,
        tail: tail
      } = await fmn(m, S.size, y);
      if (head === "" && S.size > 0) throw await n.stat(m), Error("transient read failure while classifying a transcript for the desktop retention exemption");
      let F = S.size > hv ? Tjo(tail) : tail,
        k = oDe(head, "entrypoint"),
        j = EBr(F, "entrypoint");
      if (!(k !== void 0 && Pmn(k) || j !== void 0 && Pmn(j))) return !1;
      let H = q(m).startsWith("agent-") ? oDe(head, "sessionId") ?? EBr(F, "sessionId") : void 0;
      if (H !== void 0 && Te(H)) {
        let B = h(we(m), `${H}${Z}`);
        if (B !== ee(m)) {
          if ((await ue(B, n, e)) === "release-now") return !1;
        }
      }
      return r.transcriptsExemptedDesktop++, !0;
    };
  for (let m of p) {
    if (!m.isDirectory()) continue;
    let S = h(s, m.name),
      R;
    try {
      R = await n.readdir(S);
    } catch {
      r.errors++;
      continue;
    }
    R.sort((itemA, itemB) => Number(itemB.isDirectory()) - Number(itemA.isDirectory()));
    let P = [],
      O = null,
      F = new Set(R.filter(item => item.isFile() && item.name.endsWith(".jsonl")).map(item => item.name.slice(0, -6)));
    for (let k of R) {
      if (O === null && !k.isDirectory()) O = r.errors;
      if (k.isFile()) {
        if (k.name.endsWith(Z) && F.has(k.name.slice(0, -Z.length))) continue;
        if (!k.name.endsWith(".jsonl") && !k.name.endsWith(".cast") && !k.name.endsWith(".ccr-tip.json") && !k.name.endsWith(".precompact.json") && !k.name.endsWith(Z) && !k.name.includes(".desktop-released.json.tmp") && !k.name.endsWith(".dir-sync.json") && !k.name.endsWith(".dir-sync-empty.json") && !k.name.endsWith(".cloud-worktrees.json") && !k.name.includes(".ccr-tip.json.tmp.") && !k.name.includes(".precompact.json.tmp.") && !k.name.includes(".dir-sync.json.tmp.") && !k.name.includes(".dir-sync-empty.json.tmp.") && !k.name.includes(".cloud-worktrees.json.tmp.") && !k.name.includes(".jsonl.compact.tmp.") && !k.name.includes(".jsonl.superseded-")) continue;
        let j = h(S, k.name);
        try {
          if (await x(j, e, n, r, void 0, k.name.endsWith(".jsonl") ? D : void 0)) {
            if (r.messages++, k.name.endsWith(".jsonl")) {
              r.transcripts++;
              let L = k.name.slice(0, -6);
              if (le(L)) {
                if (await n.unlink(h(S, `${L}.ccr-tip.json`)).catch(() => {}), await n.unlink(h(S, `${L}.precompact.json`)).catch(() => {}), P.push(ee(j)), await n.rm(h(S, L), {
                  recursive: !0,
                  force: !0
                }).catch(() => {
                  r.errors++;
                }), a !== null) {
                  let H = h(a, m.name),
                    B = await n.lstat(H).catch(() => null);
                  if (B?.isDirectory()) {
                    if (await n.rm(h(H, L), {
                      recursive: !0,
                      force: !0
                    }).catch(() => {
                      r.errors++;
                    }), B.mtime < e) await I(H, n);
                  }
                }
              }
            }
          }
        } catch (error) {
          if (!G(error)) r.errors++;
        }
      } else if (k.isDirectory()) {
        let j = h(S, k.name);
        if (k.name === "bagel") {
          let T = await X(j, n);
          if (T !== null && T < e.getTime()) try {
            await n.rm(j, {
              recursive: !0,
              force: !0
            }), r.messages++;
          } catch {
            r.errors++;
          }
          continue;
        }
        if (k.name === P1t) continue;
        if (!le(k.name)) {
          let T = await n.lstat(j).catch(() => null);
          if (T !== null && T.mtime < e) await I(j, n);
          continue;
        }
        let L = h(j, _Te);
        if (await Y(L, n)) {
          let T = await n.readdir(L).catch(() => []);
          for (let U of T) if (U.isFile()) try {
            if (await x(h(L, U.name), e, n, r)) r.messages++;
          } catch {
            r.errors++;
          } else if (U.isDirectory()) {
            let V = h(L, U.name),
              ie;
            try {
              ie = await n.readdir(V);
            } catch {
              continue;
            }
            for (let ae of ie) {
              if (!ae.isFile()) continue;
              try {
                if (await x(h(V, ae.name), e, n, r)) r.messages++;
              } catch {
                r.errors++;
              }
            }
            await I(V, n);
          }
          await I(L, n);
        }
        let H = await n.readdir(j).catch(() => []);
        for (let T of H) {
          if (!T.isFile() || !(be(T.name) || C1o(T.name) !== void 0)) continue;
          if (T.name === "custom-title.json" && F.has(k.name)) continue;
          try {
            if (await x(h(j, T.name), e, n, r)) r.messages++;
          } catch {
            r.errors++;
          }
        }
        let B = h(j, "mcp-tasks");
        if (await Y(B, n)) {
          for (let T of await n.readdir(B).catch(() => [])) {
            let U = T.name.endsWith(".json") || T.name.includes(".json.tmp.");
            if (!T.isFile() || !U) continue;
            try {
              if (await x(h(B, T.name), e, n, r)) r.messages++;
            } catch {
              r.errors++;
            }
          }
          await I(B, n);
        }
        if (!F.has(k.name)) for (let T of ["subagents", "workflows", "remote-agents"]) {
          let U = h(j, T);
          if (await Y(U, n)) await Q(U, e, n, r);
        }
        await I(j, n);
      }
    }
    if (O !== null && r.errors > O) P.length = 0;
    for (let k of P) await n.unlink(k).catch(() => {});
    await I(S, n);
  }
  return r;
}
async function C(e, r, s = !0, n, p) {
  let a = p === void 0 ? Ib(n) : p,
    w = _();
  if (a === null) return w;
  let g = p !== void 0 || n === void 0 ? a : Ib() ?? a,
    y = typeof r === "string" ? S => S.endsWith(r) : r,
    D = se(),
    m;
  try {
    m = await D.readdir(e);
  } catch {
    return w;
  }
  for (let S of m) {
    if (!S.isFile() || !y(S.name)) continue;
    try {
      if (await x(h(e, S.name), a, D, w, g)) w.messages++;
    } catch {
      w.errors++;
    }
  }
  if (s) await I(e, D);
  return w;
}
async function $e() {
  let e = _(),
    r = Ib();
  if (r === null) return e;
  let s = h(Pe(), "hfi-auth.json");
  try {
    if (await x(s, r, se(), e)) e.messages++;
  } catch (error) {
    if (!G(error)) t(`Failed to clean up HFI auth file: ${error}`, {
      level: "error"
    }), e.errors++;
  }
  return e;
}
async function Ue() {
  let e = _(),
    r = Ib();
  if (r === null) return e;
  let s = h(Pe(), "cache", "team-discovery.json");
  try {
    if (await x(s, r, se(), e)) e.messages++;
  } catch (error) {
    if (!G(error)) if (e.errors++, Tbe(error)) t(`cleanup team-discovery-cache failed: ${error.code}`, {
      level: "error"
    });else l(error);
  }
  return e;
}
async function Ye() {
  let e = _(),
    r = Ib();
  if (r === null) return e;
  for (let s of [FOn(), Zas()]) try {
    if (await x(s, r, se(), e)) e.messages++;
  } catch (error) {
    if (!G(error)) if (e.errors++, Tbe(error)) t(`cleanup model-access memory failed: ${error.code}`, {
      level: "error"
    });else l(error);
  }
  return e;
}
async function Ge() {
  return C(LD(), e => e !== eDo && e !== tto && (e.endsWith(".json") || e.includes(".json.tmp.")));
}
async function ze() {
  let e = _(),
    r = Ib();
  if (r === null) return e;
  let s = h(Pe(), "mcp-needs-auth-cache.json");
  try {
    if (await x(s, r, se(), e)) e.messages++;
  } catch (error) {
    if (!G(error)) if (e.errors++, Tbe(error)) t(`cleanup mcp-auth-cache failed: ${error.code}`, {
      level: "error"
    });else l(error);
  }
  return e;
}
async function Ke() {
  let e = _(),
    r = Ib();
  if (r === null) return e;
  let s = h(Pe(), "state", "device-unbound-creates.json");
  try {
    if (await x(s, r, se(), e)) e.messages++;
  } catch (error) {
    if (!G(error)) if (e.errors++, Tbe(error)) t(`cleanup device-unbound-creates failed: ${error.code}`, {
      level: "error"
    });else l(error);
  }
  return e;
}
async function Xe() {
  let e = _(),
    r = Ib();
  if (r === null) return e;
  let s = h(Pe(), "state", "mcp-discover-verdicts.json");
  try {
    if (await x(s, r, se(), e)) e.messages++;
  } catch (error) {
    if (!G(error)) if (e.errors++, Tbe(error)) t(`cleanup mcp-discover-verdicts failed: ${error.code}`, {
      level: "error"
    });else l(error);
  }
  return e;
}
async function Je(e = h(he(), ".claude", "state", "served-calls")) {
  return C(e, r => r.endsWith(".jsonl") || r.includes(".jsonl.tmp."), !0, void 0, re("cleanupPeriodDays", vDt));
}
async function Ze(e = h(he(), ".claude", "state", "unattended-serving-runs")) {
  return C(e, r => {
    let s = /^([1-9][0-9]{0,9})\.json$/.exec(r)?.[1];
    return s === void 0 ? r.includes(".json.tmp.") : !Ia(Number(s));
  }, !0, void 0, re("cleanupPeriodDays", vDt));
}
async function qe(e) {
  let r = _(),
    s = Ib();
  if (s === null) return r;
  try {
    r.messages += await kSs(s, e);
  } catch (error) {
    if (r.errors++, Tbe(error)) t(`cleanup settings-review store failed: ${error.code}`, {
      level: "error"
    });else l(error);
  }
  return r;
}
function Qe(e) {
  if (!e) return !1;
  try {
    let r = jo(e);
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
function Ve(e, r) {
  if (!e) return !1;
  try {
    let s = jo(e);
    if (typeof s !== "object" || s === null || !("timestamp" in s)) return !1;
    let {
      timestamp: timestamp_2
    } = s;
    return typeof timestamp_2 === "number" && Number.isFinite(timestamp_2) && timestamp_2 < r;
  } catch {
    return !1;
  }
}
async function et(e, r) {
  let s;
  try {
    s = await A.readdir(e);
  } catch {
    return;
  }
  let n = r.getTime();
  await Promise.all(s.filter(item => dI(item, "history.jsonl") || ree(item)).map(async item => {
    let a = h(e, item);
    try {
      let w = await A.lstat(a);
      if (w.isFile() && w.mtimeMs < n) await A.unlink(a);
    } catch {}
  }));
}
async function tt(e) {
  let r = h(Pe(), "history.jsonl"),
    s = e.getTime(),
    n = y => Ve(y, s) || Qe(y),
    p,
    a;
  try {
    if (p = await A.lstat(r), !p.isFile()) return t("History retention prune skipped: history.jsonl is not a regular file", {
      level: "error"
    }), {
      entriesPruned: 0,
      errors: 1
    };
    a = await ibo(r, n, {
      start: 0,
      end: p.size,
      tail: "defer",
      expect: {
        ino: p.ino,
        birthtimeMs: p.birthtimeMs
      }
    });
  } catch (error) {
    if (G(error)) return {
      entriesPruned: 0,
      errors: 0
    };
    if (error instanceof VMt) return t("History retention prune deferred: history.jsonl changed under the scan"), {
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
  if (a.dropped === 0 && a.consumed === p.size) return {
    entriesPruned: 0,
    errors: 0
  };
  let w,
    g = !1;
  try {
    w = await dl(r, {
      ...u5e,
      onCompromised: y => {
        g = !0, t(`History retention lock compromised: ${y}`, {
          level: "error"
        });
      }
    });
  } catch (error) {
    if (G(error)) return {
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
    let y = await A.lstat(r);
    if (!y.isFile() || y.size < a.consumed || p.ino !== 0 && y.ino !== p.ino || y.birthtimeMs !== p.birthtimeMs) return t("History retention prune deferred: history.jsonl changed under the scan"), {
      entriesPruned: 0,
      errors: 0
    };
    let D = await ibo(r, n, {
        start: a.consumed,
        end: y.size,
        tail: "judge",
        expect: {
          ino: y.ino,
          birthtimeMs: y.birthtimeMs
        },
        verifiedHead: {
          bytes: a.consumed,
          digest: a.digest
        },
        residueBytes: p.size - a.consumed
      }),
      entriesPruned = a.dropped + D.dropped;
    if (g) throw Error("history lock compromised before the rewrite");
    if (entriesPruned === 0 && D.terminated && !D.split) return {
      entriesPruned: 0,
      errors: 0
    };
    let S = a.kept.concat(D.kept);
    return await Uhe(r, S.length ? `${S.join(`
`)}
` : "", {
      exactMode: y.mode & 511
    }), {
      entriesPruned: entriesPruned,
      errors: 0
    };
  } catch (error) {
    if (error instanceof VMt) return t("History retention prune deferred: history.jsonl changed under the scan"), {
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
    await zm(w, "history retention");
  }
}
async function rt() {
  let e = h(Pe(), "mcp-discovery-cache"),
    r = await C(e, a => a.endsWith(".json") || a.includes(".json.tmp."), !1),
    s = Ib();
  if (s === null) return r;
  let n = se(),
    p;
  try {
    p = await n.readdir(e);
  } catch {
    return r;
  }
  for (let a of p) {
    if (!a.isDirectory() || !a.name.endsWith(".json.lock")) continue;
    let w = h(e, a.name);
    try {
      if ((await n.stat(w)).mtime < s) await n.rmdir(w), r.messages++;
    } catch {
      r.errors++;
    }
  }
  return await I(e, n), r;
}
async function st(e) {
  if (de()) return _();
  let r = h(Pe(), "plans");
  try {
    if (e !== void 0) return await C(r, s => s.endsWith(".md") || s.includes(".md.tmp."));
    return await C(r, ".md");
  } finally {
    Hon();
  }
}
async function M(rootLabel, {
  exclude: exclude,
  skipIf: skipIf,
  refuseRedirectedRoot = !1,
  removeEmptyBaseDir = !0,
  maxAgeDays: maxAgeDays,
  baseDir: baseDir,
  storageV5: storageV5
} = {}) {
  let y = Ib(maxAgeDays),
    D = _();
  if (y === null) return D;
  let m = se(),
    S = Pe(),
    R = baseDir ?? h(S, rootLabel);
  if (refuseRedirectedRoot) {
    if ((await Fz(R, S, {
      event: "cleanup_sweep_root_refused",
      phase: "sweep",
      rootLabel: rootLabel
    }, {
      storageV5: storageV5
    })) !== "real") return D;
  }
  let P;
  try {
    P = await m.readdir(R);
  } catch {
    return D;
  }
  for (let O of P) {
    if (!O.isDirectory() || exclude?.has(O.name)) continue;
    let F = h(R, O.name);
    try {
      if ((await m.stat(F)).mtime < y) {
        if (await skipIf?.(F)) continue;
        await m.rm(F, {
          recursive: !0,
          force: !0
        }), D.messages++;
      }
    } catch {
      D.errors++;
    }
  }
  if (removeEmptyBaseDir) await I(R, m);
  return D;
}
function it() {
  return M("file-history");
}
function at() {
  return M("session-env");
}
function ot() {
  return M("tasks");
}
function ct() {
  return M("uploads");
}
function lt() {
  let e = WP.get()?.folder,
    r = Ib();
  return M("dev-mods", {
    exclude: new Set([K(), ...(e === void 0 ? [] : [q(e)])]),
    skipIf: s => ke(s, r, ut),
    removeEmptyBaseDir: !1
  });
}
var ut = 3,
  maxAgeDays_2 = 2;
async function dt() {
  let baseDir_2 = ABe(),
    r = await Gie(baseDir_2).catch(() => null);
  if (!r) return _();
  return M(WRr, {
    removeEmptyBaseDir: !1,
    maxAgeDays: maxAgeDays_2,
    baseDir: baseDir_2,
    skipIf: async s => !(await ezn(s, r))
  });
}
async function pt() {
  try {
    return await GRs();
  } catch (error) {
    if (Tbe(error)) t(`[cleanup] the sweep of seed-admin did not run: ${error.code}`, {
      level: "warn"
    });else l(error);
    return {
      removed: 0,
      errors: 1,
      held: 0,
      refused: "no"
    };
  }
}
async function mt(e) {
  if (W() && e !== void 0) {
    let n = await ht(e);
    if (n !== "unaddressed") return n;
  }
  let baseDir_3 = wDt(),
    s = await Gie(baseDir_3).catch(() => null);
  if (!s) return _();
  return M(YRr, {
    removeEmptyBaseDir: !1,
    maxAgeDays: maxAgeDays_3,
    baseDir: baseDir_3,
    skipIf: async n => {
      let p = await Gie(baseDir_3);
      return p?.ino !== s.ino || p.dev !== s.dev || (await Gie(n)) === null || (await A.realpath(n)) !== h(await A.realpath(we(baseDir_3)), YRr, q(n));
    }
  });
}
async function ht(e) {
  let r = _(),
    s = gYs(),
    n = await e.scopeKind(s);
  if (!n.ok) return n.error.code === "InvalidArgument" ? "unaddressed" : r;
  if (n.value.kind !== "directory" || n.value.object === void 0 || n.value.owner === "other") return r;
  let p = Ib(maxAgeDays_3);
  if (p === null) return r;
  let a = await e.deleteScope(s, {
    olderThanMs: Math.max(0, Date.now() - p.getTime())
  });
  if (!a.ok) return r;
  return r.messages += a.value.deleted, r.errors += a.value.failed ?? 0, r;
}
function wt() {
  return C(O5t(), "", !1, kGn);
}
async function gt(storageV5_2) {
  return N(N(await M(uVn, {
    refuseRedirectedRoot: !0,
    storageV5: storageV5_2
  }), await M(ZDs, {
    refuseRedirectedRoot: !0,
    storageV5: storageV5_2
  })), await Se(Dj, storageV5_2));
}
async function Se(rootLabel_2, storageV5_3) {
  let s = _();
  if (Ib() === null) return s;
  let n = Pe(),
    p = h(n, rootLabel_2);
  if ((await Fz(p, n, {
    event: "cleanup_sweep_root_refused",
    phase: "sweep",
    rootLabel: rootLabel_2
  }, {
    storageV5: storageV5_3
  })) !== "real") return s;
  let w;
  try {
    w = await se().readdir(p);
  } catch {
    return s;
  }
  for (let g of w) {
    if (!g.isDirectory() || !M1e(g.name)) continue;
    s = N(s, await M(h(rootLabel_2, "*", RX), {
      baseDir: h(p, g.name, RX),
      refuseRedirectedRoot: !0,
      storageV5: storageV5_3
    }));
  }
  return s;
}
function St(storageV5_4) {
  return M($9e, {
    refuseRedirectedRoot: !0,
    storageV5: storageV5_4
  });
}
async function De(rootLabel_3, r, failureEvent, storageV5_5) {
  let p = _(),
    a = Ib();
  if (a === null) return p;
  let w = await _D().catch(P => {
    l(P);
    return;
  });
  if (w === void 0) return p;
  let g = w ?? gNt(),
    configHome = Pe(),
    D = h(configHome, rootLabel_3);
  if ((await Fz(D, configHome, {
    event: "cleanup_sweep_root_refused",
    phase: "sweep",
    rootLabel: rootLabel_3
  }, {
    storageV5: storageV5_5
  })) !== "real") return p;
  let S = se(),
    R;
  try {
    R = await S.readdir(D);
  } catch {
    return p;
  }
  for (let P of R) {
    if (!P.isDirectory() || !M1e(P.name) || P.name === g || !(await rq(D, P.name))) continue;
    let dir = h(D, P.name),
      F;
    try {
      F = (await S.lstat(h(dir, SD)).catch(() => S.lstat(dir))).mtime;
    } catch {
      continue;
    }
    if (F >= a) {
      p.filesRetainedFresh++;
      continue;
    }
    if (p.filesPastCutoff++, await Aue({
      dir: dir,
      trashRoot: h(configHome, r),
      configHome: configHome,
      failureEvent: failureEvent,
      storageV5: storageV5_5
    })) await SAt(D, P.name).catch(() => {}), p.messages++;else p.errors++;
  }
  return p;
}
function Dt(e) {
  return De(Lj, D1e, "plugins_sync_trash_move_failed", e);
}
function Rt(e) {
  return De(Dj, $9e, "skills_sync_trash_move_failed", e);
}
function kt(storageV5_6) {
  return M(D1e, {
    refuseRedirectedRoot: !0,
    storageV5: storageV5_6
  });
}
async function Pt(storageV5_7) {
  return N(await M(eLs, {
    refuseRedirectedRoot: !0,
    storageV5: storageV5_7
  }), await Se(Lj, storageV5_7));
}
async function _t() {
  let e = h(ud(), "store"),
    r = await C(e, n => n.endsWith(".json") || n.includes(".json.tmp."), !1),
    s = Ib();
  if (s !== null) await ye(e, s, se(), r);
  return r;
}
function Et() {
  return C(ud(), e => z2n(e) || G2n(e), !1);
}
async function Ct() {
  let e = Ib(),
    r = _();
  if (e === null) return r;
  let s = se(),
    n = h(Pe(), wst),
    p;
  try {
    p = await s.readdir(n);
  } catch {
    return r;
  }
  for (let a of p) {
    if (!a.isDirectory()) continue;
    let w = h(n, a.name),
      g = (await Aas(w))?.cacheKey ?? null,
      y;
    try {
      y = await s.readdir(w);
    } catch {
      r.errors++;
      continue;
    }
    for (let D of y) {
      if (!D.isDirectory() || D.name === g) continue;
      let m = h(w, D.name);
      try {
        if ((await s.stat(m)).mtime < e) await s.rm(m, {
          recursive: !0,
          force: !0
        }), r.messages++;
      } catch {
        r.errors++;
      }
    }
    try {
      if ((await s.stat(w)).mtime < e) await s.rm(w, {
        recursive: !0,
        force: !0
      }), r.messages++;
    } catch {
      r.errors++;
    }
  }
  return await I(n, s), r;
}
async function vt() {
  let e = h(Pe(), "usage-data"),
    r = await C(h(e, "facets"), s => s.endsWith(".json") || s.includes(".json.tmp."));
  return r = N(r, await C(h(e, "session-meta"), s => s.endsWith(".json") || s.includes(".json.tmp."))), r = N(r, await C(e, s => s.endsWith(".html") || pYs(s), !1)), await I(e, se()), r;
}
async function Ot() {
  let e = Ib(),
    r = _();
  if (e === null) return r;
  let s = se(),
    n;
  try {
    n = wd();
  } catch {
    return r;
  }
  let p;
  try {
    p = await s.readdir(n);
  } catch {
    return r;
  }
  for (let a of p) {
    let w = a.name.startsWith("cc-transcript-") && a.name.endsWith(".txt"),
      g = a.name.startsWith(oGn) && a.name.endsWith(".md"),
      y = a.name.startsWith(lOr) && (a.name.endsWith(".json") || a.name.endsWith(".diff")),
      D = !1;
    if (!a.isFile() || !w && !g && !y && !0) continue;
    try {
      if (await x(h(n, a.name), e, s, r)) r.messages++;
    } catch {
      r.errors++;
    }
  }
  return r;
}
async function bt() {
  let e = _(),
    r = Ib(iIs);
  if (r === null) return e;
  let s = se(),
    n;
  try {
    if (n = wd(), !(await s.lstat(n)).isDirectory()) return e;
  } catch {
    return e;
  }
  let p = h(n, "speculation"),
    a;
  try {
    a = await s.lstat(p);
  } catch {
    return e;
  }
  if (!a.isDirectory()) return e;
  try {
    if (((await X(p, s, {
      requireCompleteWalk: !0
    })) ?? a.mtimeMs) < r.getTime()) return await s.rm(p, {
      recursive: !0,
      force: !0
    }), e.messages++, e;
  } catch {
    e.errors++;
  }
  return await I(p, s), e;
}
async function Ft() {
  let e = h(Pe(), "shares"),
    r = await M("shares");
  return r = N(r, await C(e, s => s.endsWith(".zip") || s.includes(".zip.tmp.") && vXn(s), !1)), await I(e, se()), r;
}
async function It() {
  let e = h(Pe(), "telemetry"),
    r = await C(e, ".json", !1),
    s = Ib();
  if (s === null) return r;
  let n = h(e, "runs"),
    p = se();
  if ((await Y(e, p)) && (await Y(n, p))) await Q(n, s, p, r, {
    entryMatcher: a => a.endsWith(".json")
  });
  return await I(e, se()), r;
}
function Tt() {
  return C(h(Pe(), "dump-prompts"), ".jsonl", !0, sIs);
}
function xt() {
  return C(h(Pe(), "shell-snapshots"), ".sh", !1);
}
async function At() {
  let e = Ib(),
    r = _();
  if (e === null) return r;
  let s = se(),
    n = fet();
  for (let p of await s.readdir(n).catch(() => [])) {
    if (!p.isDirectory()) continue;
    let a = h(n, p.name, "inboxes");
    if (await Y(a, s)) {
      for (let w of await s.readdir(a).catch(() => [])) {
        if (!w.isFile() || !w.name.endsWith(".json")) continue;
        try {
          if (await x(h(a, w.name), e, s, r)) r.messages++;
        } catch {
          r.errors++;
        }
      }
      await I(a, s);
    }
    await I(h(n, p.name), s);
  }
  return r;
}
async function jt(e, r = Ce()) {
  let s = _(),
    n = se(),
    p = process.getuid?.(),
    a;
  try {
    a = await n.readdir(r);
  } catch (error) {
    if (!G(error)) s.errors++;
    return s;
  }
  for (let w of a) {
    if (!w.name.startsWith("cc-daemon-")) continue;
    let g = w.name.slice(10);
    if (/^\d+$/.test(g) || p !== void 0 && g === String(p) || /^[0-9a-f]{16}$/.test(g)) continue;
    let y = h(r, w.name);
    try {
      let D = await Gie(y);
      if (D === null) continue;
      let m = await n.readdir(y);
      if (m.length !== 1 || m[0].name !== "stderr.log") continue;
      let S = h(y, "stderr.log"),
        R = await n.lstat(S);
      if (!R.isFile()) continue;
      if (!(R.mtime < e)) {
        s.filesRetainedFresh++;
        continue;
      }
      let P = await Gie(y);
      if (P === null || P.dev !== D.dev || P.ino !== D.ino) continue;
      try {
        await n.unlink(S);
      } catch (error) {
        if (G(error)) continue;
        throw s.filesPastCutoff++, error;
      }
      s.messages++, await I(y, n);
    } catch (error) {
      if (!G(error)) s.errors++;
    }
  }
  return s;
}
var regExp = new RegExp(`^${eXn}[A-Za-z0-9]{6}$`);
async function Mt(e = Ib(), r = Hf()) {
  let s = _();
  if (e === null) return s;
  let n = se(),
    p;
  try {
    p = await n.readdir(r);
  } catch (error) {
    if (!G(error)) s.errors++;
    return s;
  }
  for (let a of p) {
    if (!regExp.test(a.name)) continue;
    let w = h(r, a.name);
    try {
      let g = await Gie(w);
      if (g === null) continue;
      if (!(g.mtime < e)) {
        s.filesRetainedFresh++;
        continue;
      }
      let y = await n.readdir(w),
        D = y.filter(item => /^p-\d+\.jpg$/.test(item.name));
      if (D.length !== y.length) continue;
      if (!(await Promise.all(D.map(item => Cv(item, h(w, item.name), "other")))).every(item => item === "file")) continue;
      let S = await Gie(w);
      if (S === null || S.dev !== g.dev || S.ino !== g.ino) continue;
      await Promise.all(D.map(item => n.unlink(h(w, item.name)))), await I(w, n), s.messages++;
    } catch (error) {
      if (!G(error)) s.errors++;
    }
  }
  return s;
}
var regExp_2 = new RegExp(`^${tXn}[A-Za-z0-9]{6}$`);
async function Bt(e = Ib(), r = Hf()) {
  let s = _();
  if (e === null) return s;
  let n = se(),
    p;
  try {
    p = await n.readdir(r);
  } catch (error) {
    if (!G(error)) s.errors++;
    return s;
  }
  for (let a of p) {
    if (!regExp_2.test(a.name)) continue;
    let w = h(r, a.name);
    try {
      let g = await Gie(w);
      if (g === null) continue;
      if (!(((await X(w, n, {
        requireCompleteWalk: !0
      })) ?? g.mtimeMs) < e.getTime())) {
        s.filesRetainedFresh++;
        continue;
      }
      let D = await Gie(w);
      if (D === null || D.dev !== g.dev || D.ino !== g.ino) continue;
      await n.rm(w, {
        recursive: !0,
        force: !0
      }), s.messages++;
    } catch (error) {
      if (!G(error)) s.errors++;
    }
  }
  return s;
}
async function Ht(e, r) {
  let s = Pe(),
    n = await C(h(s, "jobs", "settled"), ".json");
  n = N(n, await C(h(s, "daemon", "dispatch", "rejected"), ".json")), n = N(n, await C(h(s, "daemon", "dispatch"), ".json", !1)), n = N(n, await C(h(s, "daemon", "auth"), ".json"));
  try {
    let D = h(s, "daemon", "host-managed"),
      m = se(),
      S = Ib();
    if (S) for (let R of await m.readdir(D)) {
      if (!R.isFile()) continue;
      try {
        await m.lstat(h(s, "jobs", R.name));
      } catch (error) {
        if (!G(error)) {
          n.errors++;
          continue;
        }
        try {
          if (await x(h(D, R.name), S, m, n)) n.messages++;
        } catch (error) {
          if (!G(error)) n.errors++;
        }
      }
    }
  } catch (error) {
    if (!G(error)) n.errors++;
  }
  let p = Tas(),
    cutoff = Ib(),
    exclude_2 = new Set();
  if (!p) for (let D of await p3e(e)) exclude_2.add(D);
  let g = !1,
    y = !1;
  try {
    let D = h(s, "daemon", "roster.json"),
      m = await se().lstat(D);
    if (!m.isFile() || m.size > 8388608) throw Error("not a regular file");
    let S = await se().readFile(D, {
        encoding: "utf-8"
      }),
      R = J(S);
    if (R !== null && typeof R === "object" && "workers" in R) {
      let workers = R.workers;
      if (workers !== null && typeof workers === "object") {
        g = !0;
        for (let [O, F] of Object.entries(workers)) if (F !== null && typeof F === "object" && "pid" in F && typeof F.pid === "number" && Ia(F.pid) && (await ek(F.pid, "procStart" in F && typeof F.procStart === "string" ? F.procStart : void 0))) exclude_2.add(O), y = !0;
      }
    }
  } catch {}
  if (n = N(n, await M("jobs", {
    exclude: exclude_2,
    skipIf: async D => {
      let m;
      try {
        m = await Mgo(D, e);
      } catch (error) {
        throw l(error), t(`[cleanup] jobs/${q(D)}: job state read threw \u2014 keeping the folder (${d(error)})`, {
          level: "error"
        }), error;
      }
      if (!p && (m === null || !Ta(m))) return !0;
      if (m?.worktreePath && Ta(m) && cutoff) {
        let S = await Xdo({
          worktreePath: m.worktreePath,
          worktreeBranch: m.worktreeBranch,
          originCwd: m.originCwd,
          hookBased: m.worktreeHookBased,
          cutoff: cutoff,
          ...{}
        }).catch(R => (l(R), !1));
      }
      return !1;
    }
  })), cutoff !== null) {
    n = N(n, await jt(cutoff));
    let D = se();
    for (let S of [h(s, "daemon.log"), h(s, "daemon.log.1")]) try {
      if (await x(S, cutoff, D, n)) n.messages++;
    } catch (error) {
      if (!G(error)) n.errors++;
    }
    let m = h(s, "daemon", "roster.json");
    try {
      if ((await D.lstat(m)).mtime < cutoff && !y && (g || p)) await D.unlink(m), n.messages++;
    } catch (error) {
      if (!G(error)) n.errors++;
    }
    for (let S of await D.readdir(h(s, "daemon")).catch(() => [])) {
      if (!S.isFile() || !S.name.startsWith("roster.json.corrupt.")) continue;
      try {
        if (await x(h(s, "daemon", S.name), cutoff, D, n)) n.messages++;
      } catch {
        n.errors++;
      }
    }
  }
  return await hOn(), n;
}
function $t() {
  return C(h(Pe(), "backups"), "", !1);
}
async function Ut() {
  let e = Ib(),
    r = _();
  if (e === null) return r;
  let s = se(),
    n = h(Pe(), "debug"),
    p;
  try {
    p = await s.readdir(n);
  } catch {
    return r;
  }
  for (let a of p) {
    if (a.name === "latest" || !a.isFile()) continue;
    try {
      if (await x(h(n, a.name), e, s, r)) r.messages++;
    } catch {
      r.errors++;
    }
  }
  return r;
}
async function Yt() {
  return C(h(Pe(), "feedback-bundles"), ".zip");
}
async function Gt() {
  return C(h(Pe(), "feedback", "drafts"), e => e.endsWith(".json") || e.includes(".json.tmp."), !0, 30);
}
async function zt() {
  let e = h(Pe(), "remote-control", "fork-seeds"),
    r = await C(e, p => p.endsWith(".json") || p.includes(".json.tmp."));
  if (Ib() === null) return r;
  let date = new Date(),
    n = se();
  for (let p of await n.readdir(e).catch(() => [])) try {
    let a = h(e, p.name);
    if (p.isFile() && (await n.stat(a)).mtime > date) await A.lutimes(a, date, date);
  } catch {
    r.errors++;
  }
  return r;
}
async function Kt() {
  let e = await C(h(Pe(), "traces"), ".json"),
    r = await C(h(Pe(), "startup-perf"), ".txt"),
    s = await C(h(Pe(), "startup-perf"), ".json");
  return N(N(e, r), s);
}
var Xt = 86400000,
  Re = C_o;
function Jt(e) {
  if (e === void 0) return b("none");
  if (!Re.has(e)) return b("other");
  return e === "ELOOP" ? b("ELOOP") : e === "EISDIR" ? b("EISDIR") : b("ENXIO");
}
function Zt(e) {
  return e.code === "Failed" && e.telemetryCode !== void 0 && Re.has(e.telemetryCode);
}
function qt(e) {
  if (e.ok) return "removed it";
  return ("telemetryCode" in e.error ? e.error.telemetryCode : void 0) === "EISDIR" ? "could not remove it (EISDIR): a directory at the marker path stays and the marker write will keep failing" : `could not remove it (${e.error.code})`;
}
async function qeo(e) {
  let r = await e.statMeta(Be.state("last-cleanup"));
  if (r.ok || r.error.code === "NotFound" || !Zt(r.error)) return;
  i("tengu_cleanup_throttle_marker", {
    marker: b("last-cleanup"),
    verdict: b("not_regular_rerun"),
    code: c(r.error.code),
    errno: Jt("telemetryCode" in r.error ? r.error.telemetryCode : void 0)
  });
  let s = await e.delete(Be.state("last-cleanup"));
  t(`.last-cleanup: sentinel is not a regular file (${yt(r.error)}) \u2014 ${qt(s)}; rewriting`, {
    level: "warn"
  });
}
var Qt = [".npm-cache-cleanup", ".version-cleanup", ".last-cleanup", ".deep-link-register-failed"];
async function Keo(e, r) {
  if (!r.claimStagingReap()) return;
  let s;
  try {
    s = await A.readdir(e);
  } catch {
    return;
  }
  let n = Date.now() - Xt;
  await Promise.all(s.filter(item => Qt.some(a => dI(item, a))).map(async item => {
    let a = h(e, item);
    try {
      let w = await A.lstat(a);
      if (w.isFile() && w.mtimeMs < n) await A.unlink(a);
    } catch {}
  }));
}
async function Vt() {
  let e = Ib(),
    r = _();
  if (e === null) return r;
  let s = se();
  for (let n of JRr) {
    let p = h(Pe(), n),
      a = await s.lstat(p).catch(y => {
        if (!G(y)) r.errors++;
        return null;
      });
    if (a === null || !a.isDirectory()) continue;
    let w;
    try {
      w = await s.readdir(p);
    } catch {
      continue;
    }
    let g = !1;
    for (let y of w) {
      let D = h(p, y.name);
      try {
        if (!((await s.stat(D)).mtime < e)) continue;
        let S = await s.lstat(p).catch(() => null);
        if (S === null || !S.isDirectory() || S.dev !== a.dev || S.ino !== a.ino) {
          g = !0;
          break;
        }
        if (y.isDirectory()) await s.rm(D, {
          recursive: !0,
          force: !0
        });else await s.unlink(D);
        r.messages++;
      } catch {
        r.errors++;
      }
    }
    if (!g) await I(p, s);
  }
  return r;
}
async function er() {
  let e = _(),
    r = Ib();
  if (r === null) return e;
  let s = h(SMe(), "projects"),
    n = se(),
    p = await n.lstat(s).catch(w => {
      if (!G(w)) e.errors++;
      return null;
    });
  if (p === null || !p.isDirectory()) return e;
  let a = await n.readdir(s).catch(w => {
    if (!G(w)) e.errors++;
    return [];
  });
  for (let w of a) {
    if (!w.isDirectory()) continue;
    let g = h(s, w.name, "tiny_memory"),
      y = await n.lstat(g).catch(D => {
        if (!G(D)) e.errors++;
        return null;
      });
    if (y === null || !y.isDirectory()) continue;
    await Q(g, r, n, e, {
      countEnumerationFailures: !0
    });
  }
  return e;
}
async function tr() {
  let r = _(),
    s = Ib();
  if (s === null) return r;
  let n = h(SMe(), "projects"),
    p = se(),
    a = await p.readdir(n).catch(() => []);
  for (let w of a) {
    if (!w.isDirectory()) continue;
    r = N(r, await pe(h(n, w.name, "memory", "proposals"), s, p));
  }
  return N(r, await pe(h(Zi(), "proposals"), s, p));
}
var rr = "skill-proposal";
async function pe(e, r, s) {
  let n = _();
  try {
    if ((await s.lstat(e)).isSymbolicLink()) return n;
  } catch (error) {
    if (!Wt(error)) n.errors++;
    return n;
  }
  let p = await s.readdir(e).catch(a => {
    if (!G(a)) n.errors++;
    return [];
  });
  for (let a of p) {
    if (!a.isFile() || !a.name.endsWith(".md")) continue;
    let w = h(e, a.name);
    try {
      let {
        content: content,
        mtimeMs: mtimeMs_2
      } = await Zwe(w, 0, cae, d3, void 0, {
        truncateOnByteLimit: !0
      });
      if (!(mtimeMs_2 < r.getTime())) continue;
      if (hi(content, w).frontmatter.type !== rr) continue;
      await s.unlink(w), n.messages++;
    } catch (error) {
      if (!G(error)) n.errors++;
    }
  }
  return await I(e, s), n;
}
async function Yeo(e) {
  await ce();
  let r = await pt(),
    s = {
      seedAdminRemoved: r.removed,
      seedAdminErrors: r.errors,
      seedAdminHeld: r.held,
      seedAdminRefused: c(r.refused)
    },
    skipReason = await gOn(e),
    p = nr()?.cleanupPeriodDays;
  if (skipReason !== null) {
    i("tengu_retention_sweep", {
      skipped: !0,
      skipReason: c(skipReason),
      ...s
    }), vxo({
      result: "skipped",
      skipReason: skipReason,
      periodDays: p ?? vDt,
      usedDefault: p === void 0
    });
    return;
  }
  i("tengu_retention_sweep", {
    phase: b("start"),
    ...s
  });
  let a = void 0,
    w,
    g = () => w ??= Le(a);
  await using y = {
    [Symbol.asyncDispose]: () => g().then(() => {}, () => {})
  };
  await Ne();
  let D = await He(),
    m = [D];
  m.push(await st(e)), m.push(await it()), m.push(await at()), m.push(await ot()), m.push(await ct()), m.push(await lt()), m.push(await mt(e)), m.push(await dt()), m.push(await wt()), m.push(await vt()), m.push(await gt(e)), m.push(await Pt(e)), m.push(await Rt(e)), m.push(await Dt(e)), m.push(await St(e)), m.push(await kt(e)), m.push(await _t()), m.push(await Et()), m.push(await Ct()), m.push(await Ot()), m.push(await Mt()), m.push(await Bt()), m.push(await bt()), m.push(await Ft()), m.push(await It()), m.push(await Ut()), m.push(await Yt()), m.push(await Gt()), m.push(await zt()), m.push(await Kt()), m.push(await Tt()), m.push(await xt()), m.push(await At()), m.push(await Ht(e, a)), m.push(await $t()), m.push(await $e()), m.push(await ze()), m.push(await Ke()), m.push(await Xe()), m.push(await Je()), m.push(await Ze()), m.push(await qe()), m.push(await rt()), m.push(await Ue()), m.push(await Ye()), m.push(await Ge()), m.push(await Vt()), m.push(await er()), m.push(await tr());
  let S = {
      entriesPruned: 0,
      errors: 0
    },
    R = Ib();
  if (R !== null) {
    await ZCs(R, e);
    let O = await Ras(R);
    m.push({
      ..._(),
      messages: O.removed,
      errors: O.errors
    });
    let removed = await Ydo(R, a, !1);
    if (removed > 0) i("tengu_worktree_cleanup", {
      removed: removed
    });
    if (await et(Pe(), R), Ni("hipaa") && E("tengu_hipaa_history_retention_prune", !0)) S = await tt(R), m.push({
      ..._(),
      errors: S.errors
    });
  }
  m.push(await g());
  let P = m.reduce(N, _());
  i("tengu_retention_sweep", {
    phase: b("complete"),
    skipped: !1,
    transcriptsDeleted: D.transcripts,
    transcriptsExemptedDesktop: D.transcriptsExemptedDesktop,
    sessionFilesDeleted: D.messages,
    artifactsDeleted: P.messages,
    filesRetainedFresh: P.filesRetainedFresh,
    filesPastCutoff: P.filesPastCutoff,
    errors: P.errors,
    historyEntriesPruned: S.entriesPruned,
    periodDays: p ?? vDt,
    usedDefault: p === void 0
  }), vxo({
    result: "complete",
    periodDays: p ?? vDt,
    usedDefault: p === void 0,
    transcriptsDeleted: D.transcripts,
    transcriptsExemptedDesktop: D.transcriptsExemptedDesktop,
    sessionFilesDeleted: D.messages,
    artifactsDeleted: P.messages,
    filesRetainedFresh: P.filesRetainedFresh,
    filesPastCutoff: P.filesPastCutoff,
    errorCount: P.errors,
    historyEntriesPruned: S.entriesPruned
  });
}
async function ke(e, r, s) {
  if (r === null) return !0;
  let n = await A.readdir(e, {
    withFileTypes: !0
  }).catch(() => []);
  for (let p of n) {
    let a = h(e, p.name),
      w = await A.lstat(a).catch(() => null);
    if (w !== null && w.mtime > r) return !0;
    if (s > 1 && p.isDirectory() && (await ke(a, r, s - 1))) return !0;
  }
  return !1;
}
export { gOn, Veo, Ib, Tas, Tbe, qeo, Keo, Yeo };