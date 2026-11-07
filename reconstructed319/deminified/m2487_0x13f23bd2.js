// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { WX } from "B:/~BUN/root/chunk-ajvcvya3.js";
import { yn } from "B:/~BUN/root/chunk-88zb3509.js";
import { lt } from "B:/~BUN/root/chunk-3mm90xb6.js";
import { Iw, m2n, Pt } from "B:/~BUN/root/chunk-1g25msn4.js";
import { rz, Aa } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { A9 as timeout, Ymr, SPn, Xmr, wXt, wPn, lio, dio, SWe } from "B:/~BUN/root/chunk-2fedt3ag.js";
import { _mn, w8s, H3n, k8s } from "B:/~BUN/root/chunk-9y5bmv7e.js";
import { qP } from "B:/~BUN/root/chunk-pw7914mv.js";
import { r1r, JYn } from "B:/~BUN/root/chunk-cb4cdgp6.js";
import { $ri } from "B:/~BUN/root/chunk-hynxrdwm.js";
import { n1, cL } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { createHash as ft } from "crypto";
import { open as ct, realpath as T } from "fs/promises";
import { basename as Q, dirname as V, join as N } from "path";
async function dt(t) {
  let e = V(t),
    i = [Q(t)];
  for (let r = 0; r < 64; r++) {
    try {
      let s = await T(e);
      return N(s, ...i);
    } catch (error) {
      if (error?.code !== "ENOENT") return;
    }
    let n = V(e);
    if (n === e) return;
    i.unshift(Q(e)), e = n;
  }
  return;
}
var pt = 2000000,
  gt = new Set(["100644", "100755", "100664"]),
  B = 1e7,
  maxEditLength = 1e4,
  mt = {
    perFileMs: 5000,
    totalMs: 1e4
  },
  kt = r1r;
function tt(t) {
  if (t.length === 0 || t.startsWith('"')) return !1;
  if (/[\u0000-\u001f\u007f\uFFFD]/.test(t)) return !1;
  if (t.startsWith("-") || t.startsWith(":") || t.includes(" => ") || t.includes("\\") || !lio(t)) return !1;
  return t.split("/").every(item => item !== "" && rz(item) !== ".");
}
function F(t) {
  if (!dio.test(t)) return t;
  let e = t.length > 1 && t.startsWith('"') && t.endsWith('"') && !t.includes('" => ');
  return $ri(e ? SWe(t.slice(1, -1)) : t);
}
var it = /^[0-9a-f]{40,64}$/;
function P(t) {
  return ["--literal-pathspecs", ...yn, ...t];
}
function _(cwd, e) {
  return {
    ...e,
    cwd: cwd,
    timeout: timeout,
    preserveOutputOnError: !1
  };
}
async function wt(t, e, i, r) {
  let {
    stdout: stdout,
    code: code
  } = await lt(Pt(), P(["ls-tree", "-r", "-l", "-z", "--full-tree", e, "--", ...i]), {
    ..._(t, r),
    maxBuffer: 1e7
  });
  if (code !== 0) return null;
  let u = new Map();
  for (let o of stdout.split("\x00")) {
    if (!o) continue;
    let d = o.match(/^(\d{6}) (\S+) ([0-9a-f]{40,64}) +(\d+|-)\t(.+)$/s);
    if (!d) continue;
    let [, mode = "", l, oid = "", k, w] = d;
    if (w === void 0) continue;
    u.set(w, {
      mode: mode,
      oid: oid,
      size: l === "blob" && k !== "-" ? Number(k) : -1
    });
  }
  return u;
}
async function St(t, e, i) {
  let {
    stdout: stdout_2,
    code: code_2
  } = await lt(Pt(), P(["ls-files", "--stage", "-v", "-z", "--", ...e]), {
    ..._(t, i),
    maxBuffer: 1e7
  });
  if (code_2 !== 0) return null;
  let s = new Map();
  for (let u of stdout_2.split("\x00")) {
    let o = u.match(/^(\S) (\d{6}) ([0-9a-f]{40,64}) (\d)\t(.+)$/s);
    if (!o) continue;
    let [, d = "",, oid_2 = "", l, p = ""] = o;
    s.set(p, {
      entryIsNewSide: l === "0" && (d === "S" || /[a-z]/.test(d)),
      oid: oid_2
    });
  }
  return s;
}
function x(t, e) {
  let i = typeof t === "string" ? Buffer.from(t, "utf-8") : t;
  return ft(e.length === 64 ? "sha256" : "sha1").update(`blob ${i.length}\x00`).update(i).digest("hex");
}
function Et(t, e) {
  if (x(t, e) === e) return t;
  if (!t.includes(`\r
`)) return null;
  let i = t.replaceAll(`\r
`, `
`);
  return x(i, e) === e ? i : null;
}
async function yt(t, e, i) {
  if (!it.test(e)) return null;
  let {
    stdout: stdout_3,
    code: code_3
  } = await lt(Pt(), P(["cat-file", "blob", e]), {
    ..._(t, i),
    maxBuffer: B + 65536,
    stripFinalNewline: !1,
    encoding: "latin1"
  });
  if (code_3 !== 0) return null;
  let s = Buffer.from(stdout_3, "latin1");
  return x(s, e) === e ? s.toString("utf-8") : null;
}
async function Dt(t, e, i) {
  let r;
  try {
    r = await ct(t, kt);
  } catch (error) {
    return error?.code === "ENOENT" ? {
      kind: "missing"
    } : {
      kind: "restricted"
    };
  }
  try {
    let n = await r.stat({
      bigint: !0
    });
    if (!n.isFile()) return {
      kind: "not-regular-file"
    };
    if (n.nlink !== 1n || n.dev === 0n || n.ino === 0n) return {
      kind: "restricted"
    };
    let s;
    try {
      s = await T(t);
    } catch {
      return {
        kind: "restricted"
      };
    }
    let u = await m2n(r, n, s);
    if (u === void 0) return {
      kind: "restricted"
    };
    if (s = u, !qP(s, i, "read").allowed || Aa(s, i, "read", "ask") !== null) return {
      kind: "restricted"
    };
    if (cL(s, i.trustedNetworkDirectories) !== void 0) return {
      kind: "restricted"
    };
    if (!(await JYn(s, i))) return {
      kind: "restricted"
    };
    if (s !== e) return {
      kind: "off-path"
    };
    let o = await Iw(r, B, n.size);
    if (o.overLimit) return {
      kind: "too-large"
    };
    return {
      kind: "ok",
      content: o.bytes.toString("utf-8")
    };
  } catch {
    return {
      kind: "restricted"
    };
  } finally {
    await r.close().catch(() => {});
  }
}
async function et(t, e) {
  let i;
  try {
    i = await T(t);
  } catch (error) {
    i = error?.code === "ENOENT" ? await dt(t) : void 0;
  }
  return i !== void 0 && cL(i, e.trustedNetworkDirectories) === void 0 && (await JYn(i, e));
}
async function _t(t, e, i) {
  let {
    stdout: stdout_4,
    code: code_4
  } = await lt(Pt(), P(["check-attr", "-z", "-a", "--", ...e]), {
    ..._(t, i),
    maxBuffer: 1e7
  });
  if (code_4 !== 0) return null;
  let s = new Map(e.map(item => [item, {
      text: "unspecified",
      eol: "unspecified",
      converted: !1
    }])),
    u = stdout_4.split("\x00");
  for (let o = 0; o + 2 < u.length; o += 3) {
    let d = u[o],
      f = u[o + 1],
      l = u[o + 2];
    if (d === void 0 || f === void 0 || l === void 0) continue;
    let p = s.get(d);
    if (!p) continue;
    if (f === "text") p.text = l;else if (f === "eol") p.eol = l;else if (f === "filter" || f === "working-tree-encoding") p.converted = !0;
  }
  return s;
}
async function Rt(t, e) {
  let {
    stdout: stdout_5,
    exitCode: exitCode
  } = await lt(Pt(), P(["config", "--get", "core.autocrlf"]), _(t, e));
  if (exitCode !== 0) return !1;
  let n = stdout_5.trim().toLowerCase();
  return n === "true" ? "true" : n === "input" ? "input" : !1;
}
function bt(t) {
  return t.slice(0, 8000).includes("\x00");
}
function vt(t, e, i, r) {
  if (!e || e.converted) return "unsupported";
  if (e.text === "unset") return t;
  let n;
  if (e.text === "set") n = !1;else if (e.text === "auto") n = !0;else if (e.text === "unspecified") {
    if (i === "true" || i === "input") n = !0;else if (e.eol === "crlf" || e.eol === "lf") n = !0;else return t;
  } else return t;
  if (!t.includes(`\r
`)) return t;
  if (n && (bt(t) || r.includes(`\r
`))) return t;
  return t.replaceAll(`\r
`, `
`);
}
function Ft(t, e, timeout_2) {
  let r = WX("a", "b", t, e, "", "", {
    context: 3,
    maxEditLength: maxEditLength,
    timeout: timeout_2
  });
  if (!r) return null;
  return r.hunks.map(item => ({
    oldStart: item.oldStart,
    oldLines: item.oldLines,
    newStart: item.newStart,
    newLines: item.newLines,
    lines: item.lines.filter(item => !item.startsWith("\\"))
  })).filter(item => item.lines.length > 0);
}
function Nt(t) {
  let e = SPn,
    i = [];
  for (let r of t) {
    if (e <= 0) break;
    let lines = r.lines.slice(0, e);
    e -= lines.length, i.push({
      ...r,
      lines: lines
    });
  }
  return i;
}
async function nLo(t, e, i = mt) {
  let r = await _mn();
  if (r === null) {
    let u = H3n(t);
    if (u.listed === null) return {
      diff: null,
      noDiffReason: u.noDiffReason
    };
    let listed = u.listed;
    return (await k8s(t, e, listed, d => nt(t, e, i, listed, listed, d))) ?? {
      diff: null,
      noDiffReason: "no-repository"
    };
  }
  let n = r.nested ? r.root : null,
    s = n === null ? null : await w8s(n, t);
  if (n !== null && s === null) return {
    diff: null,
    noDiffReason: "repository-refused"
  };
  try {
    return await nt(t, e, i, r.root, n, s?.spawn);
  } finally {
    await s?.dispose();
  }
}
async function nt(t, e, i, r, n, s) {
  let u = n ?? void 0,
    o = s ?? {},
    noDiffReason = "diff-failed",
    f = await Xmr(t, void 0, "branch-point", u, s, a => {
      noDiffReason = a;
    });
  if (f === null) return {
    diff: null,
    noDiffReason: noDiffReason
  };
  let l = n ?? (await wPn());
  if (l === null || l !== r) return {
    diff: null,
    noDiffReason: "root-moved"
  };
  let p = wXt(f),
    k = a => ({
      diff: {
        stats: f.stats,
        perFileStats: Array.from(f.perFileStats, ([c, h]) => ({
          path: F(c),
          ...h
        })),
        hunks: a.hunks.map(item => ({
          ...item,
          path: F(item.path)
        })),
        skippedLarge: a.skippedLarge.map(F),
        restricted: a.restricted.map(F),
        source: f.source
      }
    }),
    w = [];
  for (let [key, c] of f.perFileStats) {
    let newPath = c.newPath ?? key,
      oldPath = c.previousPath ?? newPath;
    if (c.status === void 0 || c.isUntracked || c.isBinary || !tt(oldPath) || !tt(newPath)) continue;
    w.push({
      key: key,
      oldPath: oldPath,
      newPath: newPath,
      removed: c.status === "removed"
    });
  }
  if (w.length === 0) return k({
    hunks: [],
    skippedLarge: [],
    restricted: []
  });
  let W = p === "--cached";
  if (!W && p !== "HEAD" && !it.test(p)) return k({
    hunks: [],
    skippedLarge: [],
    restricted: []
  });
  let H = w.map(item => item.newPath),
    [C, z] = await Promise.all([W ? new Map() : wt(l, p, w.map(item => item.oldPath), o), St(l, H, o)]);
  if (C === null || z === null) return k({
    hunks: [],
    skippedLarge: [],
    restricted: []
  });
  let U;
  try {
    U = await T(l);
  } catch {
    return k({
      hunks: [],
      skippedLarge: [],
      restricted: []
    });
  }
  let rt = await _t(l, H, o),
    st = await Rt(l, o),
    skippedLarge = [],
    restricted = [],
    hunks_2 = [],
    K = pt,
    totalMs = i.totalMs;
  for (let {
    key: a,
    oldPath: oldPath_2,
    newPath: newPath_2,
    removed: removed
  } of w) {
    await new Promise(g => setImmediate(g));
    let X = N(l, newPath_2),
      O = N(l, oldPath_2),
      b = [];
    for (let g of new Set([X, O])) {
      let v = n1(g, g, e.trustedNetworkDirectories);
      if (!v.ok) {
        b = null;
        break;
      }
      b.push(...v.pathsToCheck);
    }
    if (b === null) {
      restricted.push(a);
      continue;
    }
    if (!b.every(item => qP(item, e, "read").allowed && Aa(item, e, "read", "ask") === null)) {
      restricted.push(a);
      continue;
    }
    let m = C.get(oldPath_2);
    if (m && !gt.has(m.mode)) continue;
    if (m && (m.size < 0 || m.size > B)) {
      skippedLarge.push(a);
      continue;
    }
    let A = null,
      D = z.get(newPath_2);
    if (D === void 0 && !m) {
      restricted.push(a);
      continue;
    }
    let S = removed || D === void 0 ? {
      kind: "missing"
    } : await Dt(X, N(U, newPath_2), e);
    if (S.kind === "restricted") {
      restricted.push(a);
      continue;
    }
    if (S.kind === "not-regular-file" || S.kind === "off-path") continue;
    if (S.kind === "too-large") {
      skippedLarge.push(a);
      continue;
    }
    let J = D?.entryIsNewSide && S.kind === "ok" ? Et(S.content, D.oid) : null;
    if (D?.entryIsNewSide && J === null) continue;
    if (S.kind === "missing") {
      if (!m) continue;
      if (!(await et(O, e))) {
        restricted.push(a);
        continue;
      }
    } else if (A = S.content, m && oldPath_2 !== newPath_2 && !(await et(O, e))) {
      restricted.push(a);
      continue;
    }
    if (totalMs <= 0) {
      skippedLarge.push(a);
      continue;
    }
    let Y = m ? await yt(l, m.oid, o) : "";
    if (Y === null) continue;
    let q = Y,
      G;
    if (A === null) G = "";else {
      let g = vt(A, rt?.get(newPath_2), st, q);
      if (g === "unsupported") continue;
      G = J ?? g;
    }
    let ot = Date.now(),
      Z = Ft(q, G, Math.min(i.perFileMs, totalMs));
    if (totalMs -= Date.now() - ot, Z === null) {
      skippedLarge.push(a);
      continue;
    }
    let hunks = Nt(Z);
    if (hunks.length === 0) continue;
    let I = hunks.reduce((acc, item) => acc + item.lines.reduce((acc, item) => acc + item.length + 1, 0), 0);
    if (I > Ymr || I > K) {
      skippedLarge.push(a);
      continue;
    }
    K -= I, hunks_2.push({
      path: a,
      hunks: hunks
    });
  }
  return k({
    hunks: hunks_2,
    skippedLarge: skippedLarge,
    restricted: restricted
  });
}
export { nLo };