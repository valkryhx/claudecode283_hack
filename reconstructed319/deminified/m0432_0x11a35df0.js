// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { WX } from "B:/~BUN/root/chunk-ajvcvya3.js";
import { z, pzs } from "B:/~BUN/root/chunk-game8aqv.js";
import { f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { R, d, k, K } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { lb, Ks } from "B:/~BUN/root/chunk-h4acfc9y.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g, m } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { t, _, ee, m0, ie } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Dt } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { vPo, KO, kM, Is, SN } from "B:/~BUN/root/chunk-nsneqfcc.js";
import { mt } from "B:/~BUN/root/chunk-d10hhz4p.js";
import { Udn, uPo, hh, DFr, fPo, XHe, bae, uP } from "B:/~BUN/root/chunk-5xx1vfdh.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { a$n } from "B:/~BUN/root/chunk-jv4ech2n.js";
import { Ib } from "B:/~BUN/root/chunk-6n5g80b8.js";
import { JS } from "B:/~BUN/root/chunk-1g25msn4.js";
import { a$e, fHr } from "B:/~BUN/root/chunk-65j2302z.js";
import { Dn } from "B:/~BUN/root/chunk-9jpwd6f1.js";
import { JSe, Xf, vT } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { pBt, Hie, un } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { Izi, Dzi } from "B:/~BUN/root/chunk-y1b1g4ac.js";
import { zk } from "B:/~BUN/root/chunk-wss0tnsx.js";
import { Fi, To, CCe, oNt, atn, Mks } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { fps } from "B:/~BUN/root/chunk-4xx5w1am.js";
import { o, oe, C, u, me, B, T } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { cG, Ewe, _j, mS } from "B:/~BUN/root/chunk-x3gsqe09.js";
import { nt } from "B:/~BUN/root/chunk-tq5dzbq9.js";
import { U } from "B:/~BUN/root/chunk-5ha2avah.js";
function pe(e) {
  let n = [],
    r = 0;
  while (r < e.length) {
    let i = e.indexOf(`
`, r),
      s = i === -1 ? e.length : i + 1;
    n.push(e.slice(r, s)), r = s;
  }
  return n;
}
function X(e, n, r) {
  let i = e.kinds.length - 1;
  if (n !== 0 && e.kinds[i] === n) e.counts[i] += r;else e.kinds.push(n), e.counts.push(r);
}
function Re(e, n, r, i) {
  let s = e.length,
    c = n.length,
    h = s + c,
    S = h + 1,
    y = new Int32Array(2 * h + 3).fill(-2),
    w = -1;
  while (w + 1 < s && w + 1 < c && e[w + 1] === n[w + 1]) w++;
  if (w + 1 >= s && w + 1 >= c) return new Uint8Array(0);
  y[S] = w;
  let uint8Array = new Uint8Array(4096),
    P = 0,
    O = [0],
    v = [0],
    E = -h,
    A = h;
  for (let F = 1; F <= h; F++) {
    let N = Math.max(E, -F),
      H = Math.min(A, F),
      D = H >= N ? (H - N >> 1) + 1 : 0;
    if (Date.now() > r || P + D > i) return;
    if (O.push(P), v.push(N), P + D > uint8Array.length * 8) {
      let uint8Array_2 = new Uint8Array(Math.max(uint8Array.length * 2, (P + D >> 3) + 1));
      uint8Array_2.set(uint8Array), uint8Array = uint8Array_2;
    }
    for (let I = N; I <= H && I <= A; I += 2) {
      let L = P++,
        G = I + S,
        M = y[G - 1],
        W = y[G + 1];
      if (M !== -2) y[G - 1] = -2;
      let q = W !== -2 && W - I >= 0 && W - I < c,
        he = M !== -2 && M + 1 < s;
      if (!q && !he) {
        y[G] = -2;
        continue;
      }
      if (!he || q && M < W) w = W, uint8Array[L >> 3] |= 1 << (L & 7);else w = M + 1;
      let Z = w - I;
      while (Z + 1 < c && w + 1 < s && e[w + 1] === n[Z + 1]) Z++, w++;
      if (w + 1 >= s && Z + 1 >= c) return De(uint8Array, O, v, F, I);
      if (y[G] = w, w + 1 >= s) A = Math.min(A, I - 1);
      if (Z + 1 >= c) E = Math.max(E, I + 1);
    }
  }
  return;
}
function De(e, n, r, i, s) {
  let uint8Array_3 = new Uint8Array(i),
    h = s;
  for (let S = i; S > 0; S--) {
    let y = n[S] + (h - r[S] >> 1),
      w = e[y >> 3] >> (y & 7) & 1;
    uint8Array_3[S - 1] = w, h += w ? 1 : -1;
  }
  return uint8Array_3;
}
function Fe(e, n, r) {
  let i = {
      kinds: [],
      counts: []
    },
    s = 0,
    c = 0,
    h = () => {
      let S = 0;
      while (s < e.length && c < n.length && e[s] === n[c]) s++, c++, S++;
      if (S > 0) X(i, 0, S);
    };
  h();
  for (let S of r) {
    if (S) c++, X(i, 1, 1);else s++, X(i, 2, 1);
    h();
  }
  return i;
}
function Ie(e, n, r, i) {
  let s = Math.min(e.length, n.length),
    c = 0;
  while (c < s && e[e.length - 1 - c] === n[n.length - 1 - c]) c++;
  let h = e.length - c,
    S = n.length - c,
    uint8Array_4 = new Uint8Array(r);
  for (let b of n) uint8Array_4[b] = 1;
  for (let b = 0; b < h; b++) if (uint8Array_4[e[b]]) return "search";
  uint8Array_4.fill(0);
  for (let b of e) uint8Array_4[b] = 1;
  for (let b = 0; b < S; b++) if (uint8Array_4[n[b]]) return "search";
  if (h * S > i) return;
  let w = {
    kinds: [],
    counts: []
  };
  if (h > 0) X(w, 2, h);
  if (S > 0) X(w, 1, S);
  if (c > 0) X(w, 0, c);
  return w;
}
function Ne(e, n, r, i) {
  let s = [],
    oldStart = 0,
    newStart = 0,
    lines = [],
    y = 1,
    w = 1,
    b = e.kinds.length + 1;
  for (let P = 0; P < b; P++) {
    let O = e.kinds[P] ?? 0,
      v = e.counts[P] ?? 0;
    if (O !== 0) {
      if (!oldStart) {
        if (oldStart = y, newStart = w, P > 0 && i > 0) {
          let E = Math.min(i, e.counts[P - 1]);
          for (let A = w - 1 - E; A < w - 1; A++) lines.push(" " + r[A]);
          oldStart -= E, newStart -= E;
        }
      }
      if (O === 1) {
        for (let E = w - 1; E < w - 1 + v; E++) lines.push("+" + r[E]);
        w += v;
      } else {
        for (let E = y - 1; E < y - 1 + v; E++) lines.push("-" + n[E]);
        y += v;
      }
      continue;
    }
    if (oldStart) {
      let E = v <= i * 2 && P < b - 2,
        A = E ? v : Math.min(v, i);
      for (let F = w - 1; F < w - 1 + A; F++) lines.push(" " + r[F]);
      if (!E) s.push({
        oldStart: oldStart,
        oldLines: y - oldStart + A,
        newStart: newStart,
        newLines: w - newStart + A,
        lines: lines
      }), oldStart = 0, newStart = 0, lines = [];
    }
    y += v, w += v;
  }
  for (let P of s) {
    let O = [];
    for (let v of P.lines) if (v.endsWith(`
`)) O.push(v.slice(0, -1));else O.push(v, "\\ No newline at end of file");
    P.lines = O;
  }
  return s;
}
function Se(e, n, {
  context: context,
  timeout: timeout,
  maxSearchSteps = 268435456
}) {
  let c = Date.now() + timeout,
    h = pe(e),
    S = pe(n),
    y = Math.min(h.length, S.length),
    w = 0;
  while (w < y && h[w] === S[w]) w++;
  let b = 0;
  while (b < y - w && h[h.length - 1 - b] === S[S.length - 1 - b]) b++;
  let P = new Map(),
    O = (F, N) => {
      let int32Array = new Int32Array(F.length - w);
      for (let D = w; D < N; D++) {
        let I = F[D],
          L = P.get(I);
        if (L === void 0) L = P.size, P.set(I, L);
        int32Array[D - w] = L;
      }
      return int32Array;
    },
    v = O(h, h.length),
    E = O(S, S.length - b);
  E.set(v.subarray(v.length - b), E.length - b);
  let A = Ie(v, E, P.size, maxSearchSteps);
  if (A === "search") {
    let F = Re(v, E, c, maxSearchSteps);
    A = F && Fe(v, E, F);
  }
  if (A === void 0) return;
  if (w > 0) A.kinds.unshift(0), A.counts.unshift(w);
  return Ne(A, h, S, context);
}
var context_3 = 3,
  timeout_2 = 5000;
function Nmr(e, n) {
  if (n === 0) return e;
  return e.map(item => ({
    ...item,
    oldStart: item.oldStart + n,
    newStart: item.newStart + n
  }));
}
function Fmr(e, n, r, i) {
  let lines_added = 0,
    lines_removed = 0;
  if (e.length === 0 && (r || i)) lines_added = r ? Dt(r, `
`) + 1 : 0, lines_removed = i ? Dt(i, `
`) + 1 : 0;else lines_added = e.reduce((acc, item) => acc + U(item.lines, y => y.startsWith("+")), 0), lines_removed = e.reduce((acc, item) => acc + U(item.lines, y => y.startsWith("-")), 0);
  return pzs(lines_added, lines_removed), fps()?.add(lines_added, {
    type: "added",
    model: a$n(n)
  }), fps()?.add(lines_removed, {
    type: "removed",
    model: a$n(n)
  }), {
    lines_added: lines_added,
    lines_removed: lines_removed
  };
}
function fXt(...e) {
  l("tengu_file_changed", Fmr(...e));
}
function Cye({
  filePath: filePath,
  oldContent: oldContent,
  newContent: newContent,
  singleHunk = !1,
  convertTabs = !1,
  isForToolResult = !1
}) {
  let context_2 = singleHunk ? 1e5 : context_3,
    S = isForToolResult ? Se(oldContent, newContent, {
      context: context_2,
      timeout: timeout_2
    }) : WX(filePath, filePath, oldContent, newContent, void 0, void 0, {
      context: context_2,
      timeout: timeout_2
    })?.hunks;
  if (!S) return [];
  return convertTabs ? pXt(S) : S;
}
function fZ({
  filePath: filePath_2,
  fileContents: fileContents,
  edits: edits
}) {
  let i = WX(filePath_2, filePath_2, fileContents, edits.reduce((acc, item) => {
    let {
      old_string: old_string,
      new_string: new_string
    } = item;
    if ("replace_all" in item ? item.replace_all : !1) return acc.replaceAll(old_string, () => new_string);else return acc.replace(old_string, () => new_string);
  }, fileContents), void 0, void 0, {
    context: context_3,
    timeout: timeout_2
  });
  if (!i) return [];
  return pXt(i.hunks);
}
function pXt(e) {
  return e.map(item => ({
    ...item,
    lines: item.lines.map(item => item.slice(0, 1) + bae(item.slice(1)))
  }));
}
import { join as qe } from "path";
import { randomBytes as Ce } from "crypto";
import { constants as we } from "fs";
import { lstat as ue, open as Me, readdir as He, realpath as Le, stat as We, unlink as be } from "fs/promises";
import { homedir as Be } from "os";
import { basename as ve, dirname as j, join as V } from "path";
function I6(e) {
  return (e.startsWith("\uFEFF") ? e.slice(1) : e).replaceAll(`\r
`, `
`);
}
var version = 1,
  ze = 64,
  Ue = 1048576,
  Wso = ".proposed-",
  $e = /^[0-9a-f]{8}$/,
  je = 900000,
  Ge = {
    userSettings: "user_settings",
    projectSettings: "project_settings",
    localSettings: "local_settings",
    flagSettings: "policy_settings",
    policySettings: "policy_settings"
  },
  Ve = p(() => u({
    id: o().min(1),
    path: o().min(1),
    resolvedPath: o().min(1),
    baseSha256: o().nullable(),
    proposedSha256: o(),
    proposedContent: o(),
    stagedAt: o(),
    by: u({
      tool: B(["Write", "Edit"]),
      origin: B(["local", "served"]),
      sessionId: o()
    })
  })),
  Xe = p(() => u({
    version: T(version),
    entries: C(Ve())
  }));
function ce() {
  return V(Be(), ".claude", "state", "settings-review.json");
}
var Pe = ["policySettings", "flagSettings", ...Ib];
function J(e) {
  let n = To(e);
  return Pe.find(item => {
    let i = un(item);
    return i !== void 0 && To(i) === n;
  });
}
async function ke(e) {
  let n;
  try {
    n = await locate(e);
  } catch {
    return J(e);
  }
  return ne(e, n);
}
async function ne(e, n) {
  let r = J(e);
  if (r !== void 0) return r;
  let i = To(n);
  for (let s of Pe) {
    let c = un(s);
    if (c === void 0) continue;
    try {
      if (To(await locate(c)) === i) return s;
    } catch {}
  }
  return;
}
function ye(e) {
  let bom = e.content.startsWith("\uFEFF");
  return {
    text: bom ? e.content.slice(1) : e.content,
    encoding: e.encoding,
    bom: bom,
    lineEndings: e.lineEndings
  };
}
function re(e) {
  return {
    readStore: async () => {
      try {
        return await Dn().read(ce());
      } catch (error) {
        if (K(error)) return;
        throw error;
      }
    },
    writeStore: async n => {
      let r = ce();
      await Dn().mkdir(j(r), 448), await Dn().atomicWrite(r, n, 384);
    },
    deleteStore: async () => {
      try {
        await Dn().delete(ce());
      } catch (error) {
        if (!K(error)) throw error;
      }
    },
    readTarget: async n => {
      try {
        return ye(await mS(await Ee(n), Xf)).text;
      } catch (error) {
        if (K(error)) return null;
        throw error;
      }
    },
    writeTarget: async ({
      path: path,
      resolvedPath: resolvedPath,
      baseSha256: baseSha256,
      content: content,
      blockedOnceWritten: blockedOnceWritten
    }) => {
      let h;
      try {
        h = await JS(resolvedPath, [resolvedPath], {
          createParents: !0
        });
      } catch (error) {
        if (error instanceof hh) return "redirected";
        throw error;
      }
      let S = ve(resolvedPath),
        y = `${Wso}${Ce(4).toString("hex")}`,
        stagingDir = V(j(resolvedPath), KO),
        b = V(j(h.ioPath), `${S}${y}`),
        P = !1;
      try {
        b = uPo(stagingDir, h.ioPath, y, !1);
        let O = j(b) !== j(h.ioPath);
        await Ye(j(b), S);
        let v = async () => {
            let M;
            try {
              M = await h.readExisting(Xf);
            } catch (error) {
              if (cG(error)) return "changed";
              throw error;
            }
            let W = M === null ? null : ye(M);
            return (W === null ? null : nt(W.text)) === baseSha256 ? W : "changed";
          },
          E = await v();
        if (E === "changed") return "changed";
        let encoding = E?.encoding ?? "utf8",
          F = (E?.bom ? "\uFEFF" : "") + XHe(content, E?.lineEndings ?? "LF"),
          N = Buffer.from(F, encoding);
        await SN(b, N, 384), P = !0;
        let H = O ? b : V(j(resolvedPath), `${S}${y}`);
        if (await blockedOnceWritten(H)) return "blocked";
        if ((await v()) === "changed") return "changed";
        let D = await Je(b, H, N);
        if (D === null) return "tampered";
        await h.recheckBeforeWrite();
        let I = await ue(b).catch(() => null);
        if (I === null || I.isSymbolicLink() || I.ino !== D.ino || I.dev !== D.dev) return "tampered";
        if (O) Udn(stagingDir);
        try {
          await Is(b, h.ioPath), P = !1;
        } catch (error) {
          if (!kM.has(k(error) ?? "")) throw error;
          await uP(h.ioPath, F, {
            encoding: encoding,
            stagingDir: stagingDir,
            refuseHardLinkedInPlace: !0
          });
        }
        let L = await ne(path, resolvedPath),
          G = L === void 0 ? void 0 : un(L);
        if (G !== void 0) pBt(G, N);
        return "written";
      } catch (error) {
        if (error instanceof DFr) return "hard_linked";
        if (error instanceof hh) return "redirected";
        if (error instanceof fPo) return "tampered";
        throw error;
      } finally {
        if (P) await be(b).catch(O => {
          t(`settings review store: could not remove the proposal sibling (${d(O)}); the next accept of this file sweeps it`, {
            level: "warn"
          });
        });
        await h.close();
      }
    },
    locate: locate,
    isSettingsFile: async n => CCe(n) || atn(n) && oNt(n, await se()),
    configChangeBlocked: async (n, r, i) => {
      let s = await ne(n, r);
      if (s === void 0) return !1;
      if (e?.configChangeHookGate === void 0) return a(Error("settings review store: ConfigChange hook gate not wired")), !0;
      return e.configChangeHookGate(Ge[s], i);
    },
    afterApplied: async (n, r) => {
      let i = await ne(n, r);
      if (i !== void 0) Fi.notifyChange(i);
    },
    now: () => new Date()
  };
}
async function Je(e, n, r) {
  try {
    let i = x() === "windows";
    if (i && (await ue(e)).isSymbolicLink()) return null;
    let s = await Me(e, we.O_RDONLY | (i ? 0 : we.O_NOFOLLOW));
    try {
      let c = await s.stat();
      if (!c.isFile() || c.nlink !== 1) return null;
      if (nt(await s.readFile()) !== nt(r)) return null;
      let h = await We(n);
      return h.dev === c.dev && h.ino === c.ino ? {
        dev: c.dev,
        ino: c.ino
      } : null;
    } finally {
      await s.close();
    }
  } catch {
    return null;
  }
}
async function Ye(e, n) {
  let r;
  try {
    r = await He(e);
  } catch {
    return;
  }
  let i = `${n}${Wso}`,
    s = Date.now() - je;
  for (let c of r) {
    if (!c.startsWith(i) || !$e.test(c.slice(i.length))) continue;
    try {
      if ((await ue(V(e, c))).mtimeMs < s) await be(V(e, c));
    } catch {}
  }
}
async function Ee(e) {
  if (J(e) === "policySettings" || vT(e)) return e;
  let n = await m0(ie(), e);
  return n.linksResolvedPath ?? n.resolvedPath;
}
async function locate(e) {
  return de(await Ee(e));
}
async function de(e) {
  try {
    return await Le(e);
  } catch (error) {
    if (!K(error) || j(e) === e) throw error;
    return V(await de(j(e)), ve(e));
  }
}
async function se() {
  return Mks(de);
}
async function Q(e) {
  let n = await e.readStore();
  if (n === void 0) return [];
  let r;
  try {
    r = ee(n);
  } catch {
    r = void 0;
  }
  let i = Xe().safeParse(r);
  if (!i.success) throw new Te();
  return i.data.entries;
}
class Te extends Error {
  constructor() {
    super("settings review store: malformed or of an unknown version");
  }
}
async function Ke(e, n) {
  return (await n.isSettingsFile(e.path)) || (await n.isSettingsFile(e.resolvedPath));
}
async function ae(entries, n) {
  if (entries.length === 0) {
    await n.deleteStore();
    return;
  }
  await n.writeStore(_({
    version: version,
    entries: entries
  }, null, 2) + `
`);
}
async function xe(e, n = re()) {
  let r = await Q(n),
    i = await n.readTarget(e.path),
    proposedContent = I6(e.proposedContent),
    c = {
      id: Ce(6).toString("hex"),
      path: e.path,
      resolvedPath: await n.locate(e.path),
      baseSha256: i === null ? null : nt(i),
      proposedSha256: nt(proposedContent),
      proposedContent: proposedContent,
      stagedAt: n.now().toISOString(),
      by: e.by
    },
    h = To(c.path),
    S = To(c.resolvedPath),
    y = [...r.filter(item => To(item.path) !== h && To(item.resolvedPath) !== S), c],
    w = 0;
  while (y.length > ze || _(y).length > Ue) {
    let b = y.findIndex(item => item !== c && item.by.sessionId === c.by.sessionId);
    if (b === -1) throw Error("settings review store: no room, proposal not staged");
    y.splice(b, 1), w++;
  }
  if (w > 0) t(`settings review store: full, dropped the ${w} oldest pending proposal(s)`, {
    level: "warn"
  });
  return await ae(y, n), c;
}
async function aRi(e, n = re()) {
  let i = (await Q(n)).find(item => item.id === e.id);
  if (i === void 0 || !(await Ke(i, n))) return "gone";
  if (_(i) !== _(e) || nt(i.proposedContent) !== i.proposedSha256) return "stale";
  if ((await n.locate(i.path)) !== i.resolvedPath) return "redirected";
  let s = await n.readTarget(i.resolvedPath);
  if ((s === null ? null : nt(s)) !== i.baseSha256) return "conflict";
  let h;
  try {
    h = await n.writeTarget({
      path: i.path,
      resolvedPath: i.resolvedPath,
      baseSha256: i.baseSha256,
      content: i.proposedContent,
      blockedOnceWritten: S => n.configChangeBlocked(i.path, i.resolvedPath, S)
    });
  } catch (error) {
    let y = k(error);
    if (y === "EACCES" || y === "EPERM" || y === "EROFS" || y === "EBUSY") return "not_writable";
    throw error;
  }
  switch (h) {
    case "changed":
      return "conflict";
    case "redirected":
    case "hard_linked":
    case "blocked":
    case "tampered":
      return h;
    case "written":
      break;
  }
  await n.afterApplied(i.path, i.resolvedPath);
  try {
    let S = await Q(n);
    await ae(S.filter(item => item.id !== i.id), n);
  } catch (error) {
    t(`settings review store: applied, but the store could not be updated (${d(error)})`, {
      level: "warn"
    });
  }
  return "applied";
}
async function lRi(e, n = re()) {
  let r = await Q(n),
    i = r.filter(item => item.id !== e);
  if (i.length === r.length) return !1;
  return await ae(i, n), !0;
}
async function dRi(e, n = re()) {
  let r = await Q(n),
    i = n.now().getTime(),
    s = r.filter(item => {
      let h = Date.parse(item.stagedAt);
      return Number.isFinite(h) && h >= e.getTime() && h <= i;
    });
  if (s.length !== r.length || r.length === 0) await ae(s, n);
  return r.length - s.length;
}
function zso(e, n) {
  let r = h => {
      if (h === null) return {};
      try {
        let S = me(o(), oe()).safeParse(ee(I6(h)));
        return S.success ? S.data : void 0;
      } catch {
        return;
      }
    },
    i = r(e),
    s = r(n);
  if (s === void 0) return ["not valid JSON"];
  if (i === void 0) return ["replaces a file that was not valid JSON"];
  let c = [];
  for (let h of new Set([...Object.keys(i), ...Object.keys(s)])) if (!(h in i)) c.push(`adds ${h}`);else if (!(h in s)) c.push(`removes ${h}`);else if (_(i[h]) !== _(s[h])) c.push(`changes ${h}`);
  return c;
}
function Ze({
  session: session,
  served: served
}) {
  return !served && a$e() && Izi(session);
}
function Gso({
  session: session_2,
  served: served_2,
  cause: cause
}) {
  if (cause !== "unapproved") return cause;
  if (Ze({
    session: session_2,
    served: served_2
  })) return "card";
  return !served_2 && fHr() ? "cloud" : "review";
}
function Vso(e, n) {
  switch (n) {
    case "card":
      return `Not applied: ${e} was NOT modified. In the Claude desktop app, a change to a Claude Code settings file applies only when the user approves that edit on its permission card. Tell the user what you meant to change. Do not retry the edit or try to make the same change another way.`;
    case "cloud":
      return `Not applied: ${e} was NOT modified. A change to a Claude Code settings file applies only when a person approves it at the computer that Claude Code runs on, and a cloud session cannot take that approval. Approving the edit in this session does not apply it. The /settings-review command does not run in a cloud session, and on another computer it would not list this change. Tell the user what you meant to change. If the file is committed to a repository, the user can make the change themselves outside this session and push it. Do not retry the edit or try to make the same change another way.`;
    case "linked":
      return `Not applied: ${e} was NOT modified. The user approved this edit on its permission card, but this path reaches a Claude Code settings file through a symbolic link, so the approval does not apply it. Tell the user what you meant to change. Do not retry the edit or try to make the same change another way.`;
    case "policy":
      return `Not applied: ${e} was NOT modified. The user approved this edit on its permission card, but this path is, or may be, a managed policy settings file or the --settings file, so the approval does not apply it. Tell the user what you meant to change. Do not retry the edit or try to make the same change another way.`;
    case "review":
      return `Staged for review: ${e} was NOT modified. Changes to Claude Code settings files made without the owner of this computer approving them in person are held for their review; the owner applies or discards them with /settings-review, and the change takes effect only if they accept it. Do not retry the edit or try to make the same change another way.`;
  }
}
class ge extends R {
  constructor(e) {
    super(`Not written: ${e} was NOT modified. Claude Code could not resolve where its managed settings folder is, so it cannot rule out that this path is a managed settings file, and it does not write the file. Tell the user what you meant to change. Do not retry the edit or try to make the same change another way.`, "settings write refused: a managed drop-in directory did not resolve");
  }
}
var Qe = "Staged for your review \xB7 not applied until you accept it in /settings-review",
  et = "Not applied \xB7 a cloud session can't apply Claude's edits to settings files \xB7 if you want this change, make it outside this session";
function Dmr(e) {
  return e === "cloud" ? et : Qe;
}
async function Kso(e, n, r) {
  let served_3 = e.remoteCall !== void 0;
  if (!vPo({
    served: served_3
  })) return;
  if (served_3) {
    let {
        settingsSpellings: settingsSpellings,
        unclassified: unclassified
      } = await _e(n),
      [path_2] = settingsSpellings;
    if (path_2 !== void 0) return {
      path: path_2,
      cause: "unapproved"
    };
    if (unclassified !== void 0) throw new ge(r.absolutePath);
    return;
  }
  if (e.permissionSurface !== void 0) return;
  let {
      settingsSpellings: settingsSpellings_2,
      unclassified: unclassified_2,
      dropIns: dropIns
    } = await _e(n),
    [path_3] = settingsSpellings_2;
  if (path_3 === void 0) {
    if (unclassified_2 !== void 0) throw new ge(r.absolutePath);
    return;
  }
  if (!Dzi(e.session, e.toolUseId, r)) return {
    path: path_3,
    cause: "unapproved"
  };
  let cause_2 = await tt(r.absolutePath, n, settingsSpellings_2, dropIns ?? (await se()));
  return cause_2 === "covered" ? void 0 : {
    path: path_3,
    cause: cause_2
  };
}
async function _e(e) {
  let dropIns_2 = e.some(atn) ? await se() : void 0;
  return {
    settingsSpellings: e.filter(item => CCe(item) || dropIns_2 !== void 0 && oNt(item, dropIns_2)),
    unclassified: dropIns_2 === void 0 || dropIns_2.allResolved ? void 0 : e.find(atn),
    dropIns: dropIns_2
  };
}
async function tt(e, n, r, i) {
  if (!r.includes(e)) return "linked";
  let s = n.filter(item => item !== e);
  if (await rt(n, i)) return s.length === 0 ? "policy" : "linked";
  if (s.length === 0) return "covered";
  let c = J(e);
  if (c === void 0) return "linked";
  for (let h of s) if ((await ke(h)) !== c) return "linked";
  return "covered";
}
async function rt(e, n) {
  if (!n.allResolved || !n.allLocated) return !0;
  let r = new Set();
  for (let i of it()) {
    r.add(zk(i));
    try {
      r.add(zk(await locate(i)));
    } catch {
      return !0;
    }
  }
  for (let i of e) {
    let s;
    try {
      s = await locate(i);
    } catch {
      return !0;
    }
    if (oNt(i, n) || oNt(s, n) || r.has(zk(mt(i))) || r.has(zk(s))) return !0;
  }
  return !1;
}
function it() {
  let e = un("flagSettings");
  return [...JSe(Hie()).map(item => qe(item, "managed-settings.json")), ...(e === void 0 ? [] : [e])];
}
async function qso(e) {
  let origin = e.writeCtx.remoteCall === void 0 ? "local" : "served",
    r;
  try {
    r = await xe({
      path: e.absolutePath,
      proposedContent: e.proposedContent,
      by: {
        tool: e.tool,
        origin: origin,
        sessionId: e.writeCtx.remoteCall?.origin.callerSessionId ?? z()
      }
    });
  } catch (error) {
    throw m("settings_quarantine", "stage_failed"), new R(`Could not stage this change to a Claude Code settings file for the owner's review, so nothing was written. (${d(error)})`, "settings review store: stage failed");
  }
  return l("tengu_settings_change_staged", {
    origin: f(origin),
    tool: f(e.tool),
    source_kind: f(J(e.absolutePath) ?? "other"),
    key_count: zso(e.currentContent, e.proposedContent).length
  }), g("settings_quarantine"), r;
}
import { open as ot } from "fs/promises";
var te = 8192,
  lut = 10485760,
  le = 10,
  st = 13;
async function cRi(e, n, r = 3) {
  let i = await yPn(e);
  if (i === null) return null;
  try {
    return await Yso(i, n, r);
  } finally {
    await i.close();
  }
}
async function yPn(e) {
  if (Ks(e) || lb(e)) return null;
  if (e.includes("\x00")) return null;
  try {
    return await ot(e, "r");
  } catch (error) {
    if (K(error)) return null;
    throw error;
  }
}
async function Yso(e, n, r) {
  if (n === "") return {
    content: "",
    lineOffset: 1,
    truncated: !1
  };
  let i = Buffer.from(n, "utf8"),
    s = 0;
  for (let O = 0; O < i.length; O++) if (i[O] === le) s++;
  let c,
    h = i.length + s - 1,
    S = Math.max(te, h),
    y = Buffer.allocUnsafe(S + h),
    w = 0,
    b = 0,
    P = 0;
  while (w < lut) {
    let {
      bytesRead: bytesRead
    } = await e.read(y, P, S, w);
    if (bytesRead === 0) break;
    let v = P + bytesRead;
    if (w === 0 && Ewe(y.subarray(0, v)) !== "utf8") return {
      content: "",
      lineOffset: 1,
      truncated: !1
    };
    let E = Oe(y, i, v),
      A = i.length;
    if (E === -1 && s > 0) c ??= Buffer.from(n.replaceAll(`
`, `\r
`), "utf8"), E = Oe(y, c, v), A = c.length;
    if (E !== -1) {
      let N = w - P + E;
      return await ct(e, y, N, A, r, b + fe(y, 0, E));
    }
    w += bytesRead;
    let F = Math.min(h, v);
    b += fe(y, 0, v - F), P = F, y.copyWithin(0, v - P, v);
  }
  return {
    content: "",
    lineOffset: 1,
    truncated: w >= lut
  };
}
async function Hmr(e) {
  let n = Buffer.allocUnsafe(te),
    r = 0;
  for (;;) {
    if (r === n.length) {
      let s = Buffer.allocUnsafe(Math.min(n.length * 2, lut + te));
      n.copy(s, 0, 0, r), n = s;
    }
    let {
      bytesRead: bytesRead_2
    } = await e.read(n, r, n.length - r, r);
    if (bytesRead_2 === 0) break;
    if (r += bytesRead_2, r > lut) return null;
  }
  return _j(n.subarray(0, r));
}
function Oe(e, n, r) {
  let i = e.indexOf(n);
  return i === -1 || i + n.length > r ? -1 : i;
}
function fe(e, n, r) {
  let i = 0;
  for (let s = n; s < r; s++) if (e[s] === le) i++;
  return i;
}
function Ae(e) {
  return (e & 192) === 128;
}
function at(e) {
  return e >= 240 ? 4 : e >= 224 ? 3 : e >= 192 ? 2 : 1;
}
function lt(e, n) {
  let r = e.toString("utf8", 0, n);
  return r.includes("\r") ? r.replaceAll(`\r
`, `
`) : r;
}
async function ct(e, n, r, i, s, c) {
  let h = Math.min(r, te),
    {
      bytesRead: bytesRead_3
    } = await e.read(n, 0, h, r - h),
    y = r,
    w = 0;
  for (let D = bytesRead_3 - 1; D >= 0 && w <= s; D--) {
    if (n[D] === le) {
      if (w++, w > s) break;
    }
    y--;
  }
  let b = r - bytesRead_3;
  for (let D = 0; D < 3 && y < r && Ae(n[y - b]); D++) y++;
  let P = r - y,
    lineOffset = c - fe(n, bytesRead_3 - P, bytesRead_3) + 1,
    v = r + i,
    {
      bytesRead: bytesRead_4
    } = await e.read(n, 0, te, v),
    A = v;
  w = 0;
  for (let D = 0; D < bytesRead_4; D++) if (A++, n[D] === le) {
    if (w++, w >= s + 1) break;
  }
  for (let D = 0; D <= 3 && A - 1 - D >= v; D++) {
    let I = n[A - 1 - D - v];
    if (Ae(I)) continue;
    if (I >= 192 && at(I) > D + 1) A -= D + 1;
    break;
  }
  if (A > v && n[A - 1 - v] === st) A--;
  let F = A - y,
    N = F <= n.length ? n : Buffer.allocUnsafe(F),
    {
      bytesRead: bytesRead_5
    } = await e.read(N, 0, F, y);
  return {
    content: lt(N, bytesRead_5),
    lineOffset: lineOffset,
    truncated: !1
  };
}
export { I6, version as jso, Wso, aRi, lRi, dRi, zso, Gso, Vso, Dmr, Kso, qso, context_3 as wIt, timeout_2 as Lmr, Nmr, Fmr, fXt, Cye, fZ, pXt, lut, cRi, yPn, Yso, Hmr };