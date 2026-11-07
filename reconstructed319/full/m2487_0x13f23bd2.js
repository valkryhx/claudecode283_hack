// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  WX
} from "B:/~BUN/root/chunk-ajvcvya3.js";
import {
  yn
} from "B:/~BUN/root/chunk-88zb3509.js";
import {
  lt
} from "B:/~BUN/root/chunk-3mm90xb6.js";
import {
  Iw,
  m2n,
  Pt
} from "B:/~BUN/root/chunk-1g25msn4.js";
import {
  rz,
  Aa
} from "B:/~BUN/root/chunk-j05gjqgd.js";
import {
  A9,
  Ymr,
  SPn,
  Xmr,
  wXt,
  wPn,
  lio,
  dio,
  SWe
} from "B:/~BUN/root/chunk-2fedt3ag.js";
import {
  _mn,
  w8s,
  H3n,
  k8s
} from "B:/~BUN/root/chunk-9y5bmv7e.js";
import {
  qP
} from "B:/~BUN/root/chunk-pw7914mv.js";
import {
  r1r,
  JYn
} from "B:/~BUN/root/chunk-cb4cdgp6.js";
import {
  $ri
} from "B:/~BUN/root/chunk-hynxrdwm.js";
import {
  n1,
  cL
} from "B:/~BUN/root/chunk-cxcakgnv.js";
import {
  createHash as ft
} from "crypto";
import {
  open as ct,
  realpath as T
} from "fs/promises";
import {
  basename as Q,
  dirname as V,
  join as N
} from "path";
async function dt(t) {
  let e = V(t),
    i = [Q(t)];
  for (let r = 0; r < 64; r++) {
    try {
      let s = await T(e);
      return N(s, ...i)
    } catch (s) {
      if (s?.code !== "ENOENT") return
    }
    let n = V(e);
    if (n === e) return;
    i.unshift(Q(e)), e = n
  }
  return
}
var pt = 2000000,
  gt = new Set(["100644", "100755", "100664"]),
  B = 1e7,
  ht = 1e4,
  mt = {
    perFileMs: 5000,
    totalMs: 1e4
  },
  kt = r1r;

function tt(t) {
  if (t.length === 0 || t.startsWith('"')) return !1;
  if (/[\u0000-\u001f\u007f\uFFFD]/.test(t)) return !1;
  if (t.startsWith("-") || t.startsWith(":") || t.includes(" => ") || t.includes("\\") || !lio(t)) return !1;
  return t.split("/").every((e) => e !== "" && rz(e) !== ".")
}

function F(t) {
  if (!dio.test(t)) return t;
  let e = t.length > 1 && t.startsWith('"') && t.endsWith('"') && !t.includes('" => ');
  return $ri(e ? SWe(t.slice(1, -1)) : t)
}
var it = /^[0-9a-f]{40,64}$/;

function P(t) {
  return ["--literal-pathspecs", ...yn, ...t]
}

function _(t, e) {
  return {
    ...e,
    cwd: t,
    timeout: A9,
    preserveOutputOnError: !1
  }
}
async function wt(t, e, i, r) {
  let {
    stdout: n,
    code: s
  } = await lt(Pt(), P(["ls-tree", "-r", "-l", "-z", "--full-tree", e, "--", ...i]), {
    ..._(t, r),
    maxBuffer: 1e7
  });
  if (s !== 0) return null;
  let u = new Map;
  for (let o of n.split("\x00")) {
    if (!o) continue;
    let d = o.match(/^(\d{6}) (\S+) ([0-9a-f]{40,64}) +(\d+|-)\t(.+)$/s);
    if (!d) continue;
    let [, f = "", l, p = "", k, w] = d;
    if (w === void 0) continue;
    u.set(w, {
      mode: f,
      oid: p,
      size: l === "blob" && k !== "-" ? Number(k) : -1
    })
  }
  return u
}
async function St(t, e, i) {
  let {
    stdout: r,
    code: n
  } = await lt(Pt(), P(["ls-files", "--stage", "-v", "-z", "--", ...e]), {
    ..._(t, i),
    maxBuffer: 1e7
  });
  if (n !== 0) return null;
  let s = new Map;
  for (let u of r.split("\x00")) {
    let o = u.match(/^(\S) (\d{6}) ([0-9a-f]{40,64}) (\d)\t(.+)$/s);
    if (!o) continue;
    let [, d = "", , f = "", l, p = ""] = o;
    s.set(p, {
      entryIsNewSide: l === "0" && (d === "S" || /[a-z]/.test(d)),
      oid: f
    })
  }
  return s
}

function x(t, e) {
  let i = typeof t === "string" ? Buffer.from(t, "utf-8") : t;
  return ft(e.length === 64 ? "sha256" : "sha1").update(`blob ${i.length}\x00`).update(i).digest("hex")
}

function Et(t, e) {
  if (x(t, e) === e) return t;
  if (!t.includes(`\r
`)) return null;
  let i = t.replaceAll(`\r
`, `
`);
  return x(i, e) === e ? i : null
}
async function yt(t, e, i) {
  if (!it.test(e)) return null;
  let {
    stdout: r,
    code: n
  } = await lt(Pt(), P(["cat-file", "blob", e]), {
    ..._(t, i),
    maxBuffer: B + 65536,
    stripFinalNewline: !1,
    encoding: "latin1"
  });
  if (n !== 0) return null;
  let s = Buffer.from(r, "latin1");
  return x(s, e) === e ? s.toString("utf-8") : null
}
async function Dt(t, e, i) {
  let r;
  try {
    r = await ct(t, kt)
  } catch (n) {
    return n?.code === "ENOENT" ? {
      kind: "missing"
    } : {
      kind: "restricted"
    }
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
      s = await T(t)
    } catch {
      return {
        kind: "restricted"
      }
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
    if (!await JYn(s, i)) return {
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
    }
  } catch {
    return {
      kind: "restricted"
    }
  } finally {
    await r.close().catch(() => {})
  }
}
async function et(t, e) {
  let i;
  try {
    i = await T(t)
  } catch (r) {
    i = r?.code === "ENOENT" ? await dt(t) : void 0
  }
  return i !== void 0 && cL(i, e.trustedNetworkDirectories) === void 0 && await JYn(i, e)
}
async function _t(t, e, i) {
  let {
    stdout: r,
    code: n
  } = await lt(Pt(), P(["check-attr", "-z", "-a", "--", ...e]), {
    ..._(t, i),
    maxBuffer: 1e7
  });
  if (n !== 0) return null;
  let s = new Map(e.map((o) => [o, {
      text: "unspecified",
      eol: "unspecified",
      converted: !1
    }])),
    u = r.split("\x00");
  for (let o = 0; o + 2 < u.length; o += 3) {
    let d = u[o],
      f = u[o + 1],
      l = u[o + 2];
    if (d === void 0 || f === void 0 || l === void 0) continue;
    let p = s.get(d);
    if (!p) continue;
    if (f === "text") p.text = l;
    else if (f === "eol") p.eol = l;
    else if (f === "filter" || f === "working-tree-encoding") p.converted = !0
  }
  return s
}
async function Rt(t, e) {
  let {
    stdout: i,
    exitCode: r
  } = await lt(Pt(), P(["config", "--get", "core.autocrlf"]), _(t, e));
  if (r !== 0) return !1;
  let n = i.trim().toLowerCase();
  return n === "true" ? "true" : n === "input" ? "input" : !1
}

function bt(t) {
  return t.slice(0, 8000).includes("\x00")
}

function vt(t, e, i, r) {
  if (!e || e.converted) return "unsupported";
  if (e.text === "unset") return t;
  let n;
  if (e.text === "set") n = !1;
  else if (e.text === "auto") n = !0;
  else if (e.text === "unspecified")
    if (i === "true" || i === "input") n = !0;
    else if (e.eol === "crlf" || e.eol === "lf") n = !0;
  else return t;
  else return t;
  if (!t.includes(`\r
`)) return t;
  if (n && (bt(t) || r.includes(`\r
`))) return t;
  return t.replaceAll(`\r
`, `
`)
}

function Ft(t, e, i) {
  let r = WX("a", "b", t, e, "", "", {
    context: 3,
    maxEditLength: ht,
    timeout: i
  });
  if (!r) return null;
  return r.hunks.map((n) => ({
    oldStart: n.oldStart,
    oldLines: n.oldLines,
    newStart: n.newStart,
    newLines: n.newLines,
    lines: n.lines.filter((s) => !s.startsWith("\\"))
  })).filter((n) => n.lines.length > 0)
}

function Nt(t) {
  let e = SPn,
    i = [];
  for (let r of t) {
    if (e <= 0) break;
    let n = r.lines.slice(0, e);
    e -= n.length, i.push({
      ...r,
      lines: n
    })
  }
  return i
}
async function nLo(t, e, i = mt) {
  let r = await _mn();
  if (r === null) {
    let u = H3n(t);
    if (u.listed === null) return {
      diff: null,
      noDiffReason: u.noDiffReason
    };
    let o = u.listed;
    return await k8s(t, e, o, (d) => nt(t, e, i, o, o, d)) ?? {
      diff: null,
      noDiffReason: "no-repository"
    }
  }
  let n = r.nested ? r.root : null,
    s = n === null ? null : await w8s(n, t);
  if (n !== null && s === null) return {
    diff: null,
    noDiffReason: "repository-refused"
  };
  try {
    return await nt(t, e, i, r.root, n, s?.spawn)
  } finally {
    await s?.dispose()
  }
}
async function nt(t, e, i, r, n, s) {
  let u = n ?? void 0,
    o = s ?? {},
    d = "diff-failed",
    f = await Xmr(t, void 0, "branch-point", u, s, (a) => {
      d = a
    });
  if (f === null) return {
    diff: null,
    noDiffReason: d
  };
  let l = n ?? await wPn();
  if (l === null || l !== r) return {
    diff: null,
    noDiffReason: "root-moved"
  };
  let p = wXt(f),
    k = (a) => ({
      diff: {
        stats: f.stats,
        perFileStats: Array.from(f.perFileStats, ([c, h]) => ({
          path: F(c),
          ...h
        })),
        hunks: a.hunks.map((c) => ({
          ...c,
          path: F(c.path)
        })),
        skippedLarge: a.skippedLarge.map(F),
        restricted: a.restricted.map(F),
        source: f.source
      }
    }),
    w = [];
  for (let [a, c] of f.perFileStats) {
    let h = c.newPath ?? a,
      R = c.previousPath ?? h;
    if (c.status === void 0 || c.isUntracked || c.isBinary || !tt(R) || !tt(h)) continue;
    w.push({
      key: a,
      oldPath: R,
      newPath: h,
      removed: c.status === "removed"
    })
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
  let H = w.map((a) => a.newPath),
    [C, z] = await Promise.all([W ? new Map : wt(l, p, w.map((a) => a.oldPath), o), St(l, H, o)]);
  if (C === null || z === null) return k({
    hunks: [],
    skippedLarge: [],
    restricted: []
  });
  let U;
  try {
    U = await T(l)
  } catch {
    return k({
      hunks: [],
      skippedLarge: [],
      restricted: []
    })
  }
  let rt = await _t(l, H, o),
    st = await Rt(l, o),
    y = [],
    E = [],
    j = [],
    K = pt,
    L = i.totalMs;
  for (let {
      key: a,
      oldPath: c,
      newPath: h,
      removed: R
    }
    of w) {
    await new Promise((g) => setImmediate(g));
    let X = N(l, h),
      O = N(l, c),
      b = [];
    for (let g of new Set([X, O])) {
      let v = n1(g, g, e.trustedNetworkDirectories);
      if (!v.ok) {
        b = null;
        break
      }
      b.push(...v.pathsToCheck)
    }
    if (b === null) {
      E.push(a);
      continue
    }
    if (!b.every((g) => qP(g, e, "read").allowed && Aa(g, e, "read", "ask") === null)) {
      E.push(a);
      continue
    }
    let m = C.get(c);
    if (m && !gt.has(m.mode)) continue;
    if (m && (m.size < 0 || m.size > B)) {
      y.push(a);
      continue
    }
    let A = null,
      D = z.get(h);
    if (D === void 0 && !m) {
      E.push(a);
      continue
    }
    let S = R || D === void 0 ? {
      kind: "missing"
    } : await Dt(X, N(U, h), e);
    if (S.kind === "restricted") {
      E.push(a);
      continue
    }
    if (S.kind === "not-regular-file" || S.kind === "off-path") continue;
    if (S.kind === "too-large") {
      y.push(a);
      continue
    }
    let J = D?.entryIsNewSide && S.kind === "ok" ? Et(S.content, D.oid) : null;
    if (D?.entryIsNewSide && J === null) continue;
    if (S.kind === "missing") {
      if (!m) continue;
      if (!await et(O, e)) {
        E.push(a);
        continue
      }
    } else if (A = S.content, m && c !== h && !await et(O, e)) {
      E.push(a);
      continue
    }
    if (L <= 0) {
      y.push(a);
      continue
    }
    let Y = m ? await yt(l, m.oid, o) : "";
    if (Y === null) continue;
    let q = Y,
      G;
    if (A === null) G = "";
    else {
      let g = vt(A, rt?.get(h), st, q);
      if (g === "unsupported") continue;
      G = J ?? g
    }
    let ot = Date.now(),
      Z = Ft(q, G, Math.min(i.perFileMs, L));
    if (L -= Date.now() - ot, Z === null) {
      y.push(a);
      continue
    }
    let M = Nt(Z);
    if (M.length === 0) continue;
    let I = M.reduce((g, v) => g + v.lines.reduce((at, ut) => at + ut.length + 1, 0), 0);
    if (I > Ymr || I > K) {
      y.push(a);
      continue
    }
    K -= I, j.push({
      path: a,
      hunks: M
    })
  }
  return k({
    hunks: j,
    skippedLarge: y,
    restricted: E
  })
}
export {
  nLo
};
