// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Ki
} from "B:/~BUN/root/chunk-33tn3weg.js";
import {
  Jd,
  Ze
} from "B:/~BUN/root/chunk-y04k89s2.js";
import {
  l,
  v,
  B
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  b,
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  O
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  Cn
} from "B:/~BUN/root/chunk-2swveyqa.js";
import {
  f
} from "B:/~BUN/root/chunk-zv3zxqya.js";
import {
  ct
} from "B:/~BUN/root/chunk-tsjnk8ma.js";
import {
  gu,
  Ru
} from "B:/~BUN/root/chunk-zv4xh2j0.js";
import {
  gde,
  Kgn
} from "B:/~BUN/root/chunk-339q6g5w.js";
import {
  ci
} from "B:/~BUN/root/chunk-1rjcv085.js";
import {
  sa,
  sge,
  rn,
  TB,
  Mt,
  $Ee,
  L3,
  ex,
  AAr,
  Tee
} from "B:/~BUN/root/chunk-1mdeqc2r.js";
import {
  K7e,
  Dwt,
  Lwt,
  oar,
  Nwt,
  sar
} from "B:/~BUN/root/chunk-sx5j3dhs.js";
import {
  i4
} from "B:/~BUN/root/chunk-brgnhyc0.js";
import {
  zeo,
  i3t
} from "B:/~BUN/root/chunk-fj96ftrb.js";
import {
  tqe
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  Cg
} from "B:/~BUN/root/chunk-esqb9g1a.js";
import {
  Ms
} from "B:/~BUN/root/chunk-6492v1c5.js";
import {
  o,
  E,
  ae,
  C,
  u,
  tK,
  A
} from "B:/~BUN/root/chunk-n8qdr73v.js";
import {
  U,
  L
} from "B:/~BUN/root/chunk-z1enakv9.js";
import {
  createHash as jt
} from "crypto";
var fe = {
    file: "100644",
    executable: "100755",
    symlink: "120000",
    directory: "40000",
    gitlink: "160000"
  },
  At = ["file", "executable", "symlink", "directory", "gitlink"],
  de = 4096,
  Le = /^git~\d+$/,
  Dt = /[gG~]/,
  Nt = Ye("gitmod", "gi7eba"),
  vt = Ye("gitatt", "gi7d29"),
  De = /[<>\n\0]/,
  zt = 1439;

function te(e) {
  return e === "sha256" ? 32 : 20
}

function l7(e, n) {
  return e.length === 2 * te(n) && rn.test(e) && TB(e)
}

function Z(e, n, r) {
  return {
    id: jt(r).update(`${e} ${n.length}\x00`).update(n).digest("hex"),
    type: e,
    body: n
  }
}

function ke({
  name: e,
  kind: n,
  id: r
}, i) {
  if (e === "") return "empty_name";
  if (e.includes("/")) return "name_has_slash";
  if (e.includes("\x00")) return "name_has_nul";
  if (!Jd(e)) return "name_not_unicode";
  if (e === "." || e === "..") return "dot_name";
  if (Buffer.byteLength(e) > de) return "name_too_long";
  let a = Dt.test(e) ? me(e) : [];
  if (a.some(Gt)) return "dotgit_name";
  if (n !== "file" && n !== "executable" && a.some(He)) return "gitmodules_not_regular_file";
  if ((n === "directory" || n === "gitlink") && a.some($e)) return "gitattributes_directory";
  if (!l7(r, i)) return "bad_id";
  return null
}

function Ee(e) {
  return me(e).some(He)
}

function _e(e) {
  return me(e).some($e)
}

function Gt(e) {
  return e === ".git" || Le.test(e)
}

function He(e) {
  return e === ".gitmodules" || Nt.test(e)
}

function $e(e) {
  return e === ".gitattributes" || vt.test(e)
}

function cCn(e, n) {
  let r = e.some((m) => m.nameBytes !== void 0),
    i = new Set;
  for (let m of e) {
    let p = r ? Te(m).toString("latin1") : m.name,
      h = i.has(p) ? "duplicate_name" : m.nameBytes === void 0 ? ke(m, n) : $t(m, n);
    if (h !== null) return {
      ok: !1,
      reason: h,
      name: m.name
    };
    i.add(p)
  }
  if (r) return {
    ok: !0,
    tree: Ht(e, n)
  };
  let a = e.toSorted(Lt),
    c = te(n),
    s = Buffer.alloc(a.reduce((m, p) => m + fe[p.kind].length + Buffer.byteLength(p.name) + 2 + c, 0)),
    d = 0;
  for (let m of a) d += s.write(`${fe[m.kind]} ${m.name}\x00`, d), d += s.write(m.id, d, "hex");
  return {
    ok: !0,
    tree: Z("tree", s, n)
  }
}

function Lt(e, n) {
  let r = Math.min(e.name.length, n.name.length);
  for (let i = 0; i < r; i++) {
    let a = we(e.name.charCodeAt(i)) - we(n.name.charCodeAt(i));
    if (a !== 0) return a
  }
  return Ne(e, r) - Ne(n, r)
}

function Ne({
  name: e,
  kind: n
}, r) {
  return r < e.length ? we(e.charCodeAt(r)) : n === "directory" ? 47 : 0
}

function we(e) {
  return e < 55296 ? e : e < 57344 ? e + 8192 : e - 2048
}

function Ht(e, n) {
  let r = e.map((i) => {
    let a = Te(i);
    return {
      sortKey: i.kind === "directory" ? Buffer.concat([a, Buffer.from("/")]) : a,
      bytes: Buffer.concat([Buffer.from(`${fe[i.kind]} `), a, Buffer.from([0]), Buffer.from(i.id, "hex")])
    }
  }).toSorted((i, a) => Buffer.compare(i.sortKey, a.sortKey));
  return Z("tree", Buffer.concat(r.map((i) => i.bytes)), n)
}

function $t(e, n) {
  let r = Te(e);
  if (r.length === 0) return "empty_name";
  if (r.length > de) return "name_too_long";
  if (r.includes(0)) return "name_has_nul";
  if (r.includes(47)) return "name_has_slash";
  let {
    name: i,
    kind: a,
    id: c
  } = e;
  if (i === "." || i === "..") return "dot_name";
  if (me(i).some((s) => s === ".git" || Le.test(s))) return "dotgit_name";
  if (a !== "file" && a !== "executable" && Ee(i)) return "gitmodules_not_regular_file";
  if ((a === "directory" || a === "gitlink") && _e(i)) return "gitattributes_directory";
  if (!l7(c, n)) return "bad_id";
  return null
}

function Te(e) {
  return e.nameBytes === void 0 ? Buffer.from(e.name, "utf8") : Buffer.from(e.nameBytes, "hex")
}

function x4t(e, n) {
  let r = te(n),
    i = [],
    a = new Set,
    c = new Map,
    s = 0;
  while (s < e.length) {
    let d = e.indexOf(32, s),
      m = d < 0 ? -1 : e.indexOf(0, d + 1);
    if (d < 0 || m <= d + 1 || m + 1 + r > e.length) return null;
    let p = e.toString("latin1", s, d),
      h = At.find((x) => fe[x] === p);
    if (h === void 0) return null;
    let g = e.subarray(d + 1, m),
      S = g.toString("latin1"),
      y = g.toString("utf8");
    if (y === "." || y === ".." || y.includes("/") || a.has(S)) return null;
    a.add(S);
    let k = {
      name: y,
      kind: h,
      id: e.toString("hex", m + 1, m + 1 + r)
    };
    if (!Buffer.from(y, "utf8").equals(g)) k.nameIssue = "not_utf8", k.nameBytes = g.toString("hex");
    let T = c.get(y);
    if (T === void 0) c.set(y, k);
    else {
      for (let x of [T, k]) x.nameIssue = "same_text_as_another", x.nameBytes ??= Buffer.from(x.name, "utf8").toString("hex");
      k.nameBytes = g.toString("hex")
    }
    i.push(k), s = m + 1 + r
  }
  return i
}

function We({
  tree: e,
  parents: n,
  author: r,
  committer: i,
  message: a
}, c) {
  if (![e, ...n].every((d) => l7(d, c))) return {
    ok: !1,
    reason: "bad_id"
  };
  if (!ze(r) || !ze(i)) return {
    ok: !1,
    reason: "bad_signature"
  };
  if (a.includes("\x00")) return {
    ok: !1,
    reason: "nul_in_message"
  };
  let s = [`tree ${e}`, ...n.map((d) => `parent ${d}`), `author ${Ge(r)}`, `committer ${Ge(i)}`, "", a].join(`
`);
  return {
    ok: !0,
    commit: Z("commit", Buffer.from(s), c)
  }
}

function P4t(e, n) {
  let [r = "", ...i] = e.toString("latin1").split(`
`), a = ve(r, "tree", n), c = i.findIndex((d) => !d.startsWith("parent ")), s = i.slice(0, c < 0 ? i.length : c).map((d) => ve(d, "parent", n));
  return a !== null && s.every((d) => d !== null) ? {
    tree: a,
    parents: s
  } : null
}

function ve(e, n, r) {
  let i = e.startsWith(`${n} `) ? e.slice(n.length + 1) : "";
  return i.length === 2 * te(r) && rn.test(i) ? i : null
}

function ze({
  name: e,
  email: n,
  unixSeconds: r,
  utcOffsetMinutes: i
}) {
  return e !== "" && !De.test(e) && !De.test(n) && Number.isSafeInteger(r) && r >= 0 && Number.isInteger(i) && Math.abs(i) <= zt
}

function Ge({
  name: e,
  email: n,
  unixSeconds: r,
  utcOffsetMinutes: i
}) {
  let a = Math.abs(i),
    c = String(Math.floor(a / 60) * 100 + a % 60);
  return `${e} <${n}> ${r} ${i<0?"-":"+"}${c.padStart(4,"0")}`
}

function me(e) {
  return e.split("\\").map((n) => Ki(Ze(n, ":")))
}

function Ye(e, n) {
  let r = Array.from({
    length: n.length + 1
  }, (i, a) => `${n.slice(0,a)}~[1-9]\\d{${6-a}}`);
  return new RegExp(`^(?:${e}~\\d+|${r.join("|")})$`)
}
var Ke = 128,
  xe = 1e6,
  pe = 67108864,
  Ue = 8,
  Wt = 16,
  Yt = 16,
  Ut = 4,
  Kt = 12,
  Xt = 44,
  Xe = {
    file: 33188,
    executable: 33261,
    symlink: 40960,
    directory: 16384,
    gitlink: 57344
  },
  Vt = ["file", "executable", "symlink", "gitlink"];

function I4t({
  store: e,
  identity: n
}) {
  let r = e.objectFormat,
    i = new Map,
    a = new Map,
    c = new Map,
    s = new Map,
    d = 0;
  async function m(k) {
    let T = await e.get(k);
    if (T.kind !== "ok") return T.kind === "absent" ? {
      kind: "absent"
    } : {
      kind: "unreadable"
    };
    let x = T.object.type === "commit" ? P4t(T.object.body, r) : null;
    return x === null ? {
      kind: "unreadable"
    } : {
      kind: "ok",
      ...x
    }
  }
  async function p(k) {
    let T = await e.get(k);
    if (T.kind !== "ok") return T.kind === "absent" ? {
      kind: "absent"
    } : {
      kind: "unreadable"
    };
    let x = T.object.type === "tree" ? x4t(T.object.body, r) : null;
    return x === null ? {
      kind: "unreadable"
    } : {
      kind: "ok",
      entries: x
    }
  }
  async function h(k) {
    let T = Oe(i, k);
    if (T !== void 0) return {
      kind: "ok",
      listing: T
    };
    let x = new Map,
      M = new Map,
      R = [],
      D = new Map,
      G = 0,
      W = [{
        id: k,
        path: "",
        depth: 0
      }];
    for (let z = W.pop(); z !== void 0; z = W.pop()) {
      if (z.depth > Ke) return {
        kind: "too_large"
      };
      let V = D.get(z.id);
      if (V === void 0) {
        let Y = await p(z.id);
        if (Y.kind !== "ok") return {
          kind: Y.kind,
          id: z.id,
          at: z.path
        };
        V = Y.entries, D.set(z.id, V)
      }
      if (x.size + M.size + W.length + R.length + V.length > xe) return {
        kind: "too_large"
      };
      M.set(z.path, z.id);
      for (let Y of V) {
        if (Y.nameIssue !== void 0) {
          let _ = Y.nameBytes ?? Buffer.from(Y.name, "utf8").toString("hex");
          if (_.length / 2 > de) return {
            kind: "unreadable",
            id: z.id,
            at: z.path
          };
          if (G += z.path.length + 1 + Y.name.length + _.length, G > pe) return {
            kind: "too_large"
          };
          R.push({
            directory: z.path,
            name: Y.name,
            nameBytes: _,
            kind: Y.kind,
            id: Y.id,
            reason: Y.nameIssue === "not_utf8" ? "name_not_utf8" : "name_same_text_as_another"
          });
          continue
        }
        if (Buffer.byteLength(Y.name) > de) return {
          kind: "unreadable",
          id: z.id,
          at: z.path
        };
        let w = z.path === "" ? Y.name : z.path + "/" + Y.name;
        if (G += w.length, G > pe) return {
          kind: "too_large"
        };
        if (Y.kind === "directory") W.push({
          id: Y.id,
          path: w,
          depth: z.depth + 1
        });
        else x.set(w, {
          mode: Xe[Y.kind],
          blobId: Y.id
        })
      }
    }
    let q = {
      rootTree: k,
      files: x,
      trees: M,
      leftOut: R
    };
    return ge(i, k, q, Ue), {
      kind: "ok",
      listing: q
    }
  }
  async function g(k, T) {
    let x = [],
      M = [k];
    for (let R = M.pop(); R !== void 0; R = M.pop()) {
      if (T.has(R)) continue;
      T.add(R);
      let D = await p(R);
      if (D.kind !== "ok") {
        x.push(R);
        continue
      }
      for (let G of D.entries)
        if (G.kind === "directory") M.push(G.id);
        else if (G.kind !== "gitlink") T.add(G.id)
    }
    return {
      unread: x
    }
  }
  async function S(k) {
    let T = new Set,
      x = new Set;
    for (let M of k) {
      let R = new Set,
        D = [],
        G = [M];
      for (let W = G.pop(); W !== void 0; W = G.pop()) {
        if (R.has(W)) continue;
        let q = Oe(c, W);
        if (q !== void 0) {
          for (let V of q) R.add(V);
          continue
        }
        R.add(W);
        let z = await m(W);
        if (z.kind !== "ok") {
          D.push(W);
          continue
        }
        for (let V of z.parents) G.push(V)
      }
      if (D.length === 0) ge(c, M, R, Yt);
      for (let W of R) T.add(W);
      for (let W of D) x.add(W)
    }
    return {
      reached: T,
      unread: [...x]
    }
  }
  async function y(k) {
    let T = Oe(a, k);
    if (T !== void 0) return {
      objects: T,
      unread: []
    };
    let x = new Set,
      M = await m(k);
    if (M.kind !== "ok") return {
      objects: x,
      unread: [k]
    };
    let {
      unread: R
    } = await g(M.tree, x);
    if (R.length === 0) ge(a, k, x, Wt);
    return {
      objects: x,
      unread: R
    }
  }
  return {
    store: e,
    async writeTree(k) {
      let T = qt(k);
      if (!T.ok) return T;
      let x = new Map;
      d += 1;
      let M = {
          built: s,
          pass: d
        },
        R = await Ve(T.node, "", x, e, M);
      if (en(s, d - Ut + 1), !R.ok) return R;
      let D = {
        rootTree: R.id,
        files: new Map(k),
        trees: x,
        leftOut: []
      };
      return ge(i, R.id, D, Ue), {
        ok: !0,
        rootTree: R.id,
        listing: D
      }
    },
    async writeCommit({
      tree: k,
      parents: T,
      message: x,
      whenUnix: M
    }) {
      let R = {
          ...n,
          unixSeconds: M,
          utcOffsetMinutes: 0
        },
        D = We({
          tree: k,
          parents: T,
          author: R,
          committer: R,
          message: x
        }, r);
      if (!D.ok) return D;
      return {
        ok: !0,
        id: await e.put("commit", D.commit.body)
      }
    },
    async listingOf(k) {
      let T = await m(k);
      if (T.kind !== "ok") return {
        kind: T.kind,
        id: k,
        at: "commit"
      };
      let x = await h(T.tree);
      return x.kind === "ok" ? {
        kind: "ok",
        listing: {
          commit: k,
          ...x.listing
        }
      } : x
    },
    async treeOf(k) {
      let T = await m(k);
      return T.kind === "ok" ? T.tree : null
    },
    async objectsToSend({
      tip: k,
      peerHolds: T
    }) {
      let x = await S(T),
        M = x.reached,
        R = [],
        D = [],
        G = [],
        W = [...x.unread],
        q = new Set(W),
        z = new Set,
        V = new Set(T),
        Y = [k],
        w = [];
      for (let P = Y.shift(); P !== void 0; P = Y.shift()) {
        if (z.has(P)) continue;
        if (M.has(P)) {
          V.add(P);
          continue
        }
        z.add(P);
        let j = await m(P);
        if (j.kind !== "ok") {
          W.push(P);
          continue
        }
        R.push(P), w.push(j.tree);
        for (let N of j.parents) Y.push(N)
      }
      let _ = new Set;
      for (let P of V) {
        let j = await y(P);
        for (let N of j.objects) _.add(N);
        for (let N of j.unread)
          if (!q.has(N)) q.add(N), W.push(N)
      }
      let I = [...w];
      for (let P = I.pop(); P !== void 0; P = I.pop()) {
        if (_.has(P) || z.has(P)) continue;
        z.add(P);
        let j = await p(P);
        if (j.kind !== "ok") {
          W.push(P);
          continue
        }
        D.push(P);
        for (let N of j.entries)
          if (N.kind === "directory") I.push(N.id);
          else if (N.kind !== "gitlink" && !_.has(N.id) && !z.has(N.id))
          if (z.add(N.id), await e.has(N.id)) G.push(N.id);
          else W.push(N.id)
      }
      let F = [...R, ...D, ...G].reduce((P, j) => P + (e.deflatedSize(j) ?? 0) + Kt, Xt);
      return {
        ids: {
          commits: R,
          trees: D,
          blobs: G
        },
        bytesEstimate: F,
        missing: W
      }
    },
    changedPaths(k, T) {
      let x = new Map;
      for (let [M, R] of k.files) {
        let D = T.files.get(M) ?? null;
        if (D === null || D.mode !== R.mode || D.blobId !== R.blobId) x.set(M, {
          before: R,
          after: D
        })
      }
      for (let [M, R] of T.files)
        if (!k.files.has(M)) x.set(M, {
          before: null,
          after: R
        });
      return x
    },
    async isAncestor(k, T) {
      let x = !1,
        M = new Set,
        R = [T];
      for (let D = R.pop(); D !== void 0; D = R.pop()) {
        if (D === k) return !0;
        if (M.has(D)) continue;
        M.add(D);
        let G = await m(D);
        if (G.kind === "ok")
          for (let W of G.parents) R.push(W);
        else x = !0
      }
      return x ? "unknown" : !1
    },
    async commitParents(k) {
      let T = await m(k);
      return T.kind === "ok" ? T.parents : T.kind === "absent" ? "none" : "unknown"
    }
  }
}

function Jt(e) {
  return Vt.find((n) => Xe[n] === e) ?? null
}

function qt(e) {
  let n = {
      entries: new Map
    },
    r = new Map([
      ["", n]
    ]),
    i = e.size,
    a = 0;
  if (i > xe) return {
    ok: !1,
    reason: "too_large",
    path: ""
  };
  let c = (s) => {
    let d = r.get(s);
    if (d !== void 0) return d;
    let m = s.lastIndexOf("/"),
      p = c(m < 0 ? "" : s.slice(0, m));
    if (typeof p === "string") return p;
    let h = s.slice(m + 1);
    if (p.entries.has(h)) return "path_conflict";
    if (i += 1, a += s.length, i > xe || a > pe) return "too_large";
    let g = {
      entries: new Map
    };
    return p.entries.set(h, g), r.set(s, g), g
  };
  for (let [s, d] of e) {
    if (a += s.length, a > pe) return {
      ok: !1,
      reason: "too_large",
      path: s
    };
    let m = Zt(s);
    if (m === "bad_path") return {
      ok: !1,
      reason: "bad_path",
      path: s
    };
    if (m - 1 > Ke) return {
      ok: !1,
      reason: "too_large",
      path: s
    };
    let p = s.lastIndexOf("/"),
      h = c(p < 0 ? "" : s.slice(0, p));
    if (typeof h === "string") return {
      ok: !1,
      reason: h,
      path: s
    };
    let g = s.slice(p + 1);
    if (h.entries.has(g)) return {
      ok: !1,
      reason: "path_conflict",
      path: s
    };
    h.entries.set(g, d)
  }
  return {
    ok: !0,
    node: n
  }
}

function Zt(e) {
  let n = 0;
  for (let r = 0; r <= e.length; n++) {
    let i = e.indexOf("/", r),
      a = i < 0 ? e.length : i,
      c = e.slice(r, a);
    if (c === "" || c === "." || c === "..") return "bad_path";
    r = a + 1
  }
  return n
}
async function Ve(e, n, r, i, a) {
  let c = [];
  for (let [h, g] of e.entries) {
    let S = n === "" ? h : n + "/" + h;
    if ("entries" in g) {
      let k = await Ve(g, S, r, i, a);
      if (!k.ok) return k;
      c.push({
        name: h,
        kind: "directory",
        id: k.id
      });
      continue
    }
    let y = Jt(g.mode);
    if (y === null) return {
      ok: !1,
      reason: "bad_mode",
      path: S
    };
    c.push({
      name: h,
      kind: y,
      id: g.blobId
    })
  }
  let s = Qt(c),
    d = a.built.get(s);
  if (d !== void 0 && await i.hasHere(d.id)) return a.built.set(s, {
    id: d.id,
    pass: a.pass
  }), r.set(n, d.id), {
    ok: !0,
    id: d.id
  };
  let m = cCn(c, i.objectFormat);
  if (!m.ok) return {
    ok: !1,
    reason: m.reason,
    path: n === "" ? m.name : n + "/" + m.name
  };
  let p = await i.put("tree", m.tree.body);
  return a.built.set(s, {
    id: p,
    pass: a.pass
  }), r.set(n, p), {
    ok: !0,
    id: p
  }
}

function Qt(e) {
  return e.map(({
    name: n,
    kind: r,
    id: i
  }) => `${n.length}:${n}${r}:${i.length}:${i}`).join(`
`)
}

function en(e, n) {
  for (let [r, i] of e)
    if (i.pass < n) e.delete(r)
}

function Oe(e, n) {
  let r = e.get(n);
  if (r !== void 0) e.delete(n), e.set(n, r);
  return r
}

function ge(e, n, r, i) {
  e.delete(n), e.set(n, r);
  for (let a of e.keys()) {
    if (e.size <= i) break;
    e.delete(a)
  }
}
import {
  createHash as qe
} from "crypto";
import {
  promisify as Qe
} from "util";
import {
  deflate as tn,
  deflateSync as nn,
  inflate as on,
  inflateSync as sn
} from "zlib";
var et = "PACK",
  tt = 2,
  he = 12,
  nt = {
    commit: 1,
    tree: 2,
    blob: 3,
    tag: 4
  },
  an = ["commit", "tree", "blob", "tag"],
  ln = 6,
  dn = 7,
  rt = 8,
  cn = 65536,
  ot = 262144,
  it = 64,
  un = 16384,
  oe = 512,
  Je = 8388608,
  fn = Qe(tn),
  mn = Qe(on);
async function O4t(e, n) {
  let r = new Set,
    i = e.filter((d) => r.has(d.id) ? !1 : Boolean(r.add(d.id))),
    a = Buffer.alloc(he);
  a.write(et, 0, "latin1"), a.writeUInt32BE(tt, 4), a.writeUInt32BE(i.length, 8);
  let c = [a],
    s = qe(n).update(a);
  for (let [d, m] of i.entries()) {
    if (d % oe === oe - 1) await be();
    let p = "deflated" in m ? m.size : m.body.length,
      h = "deflated" in m ? m.deflated : await En(m.body);
    for (let g of [yn(nt[m.type], p), h]) c.push(g), s.update(g)
  }
  return Buffer.concat([...c, s.digest()])
}
async function eeo(e, {
  objectFormat: n,
  maxInflatedBytes: r,
  maxObjects: i
}) {
  try {
    return await gn(Buffer.from(e.buffer, e.byteOffset, e.length), n, r, i)
  } catch (a) {
    return X("malformed", `unexpected: ${String(a)}`)
  }
}

function X(e, n) {
  return {
    ok: !1,
    reason: e,
    detail: n
  }
}
async function gn(e, n, r, i) {
  let a = te(n);
  if (e.length < he + a || e.toString("latin1", 0, 4) !== et) return X("not_a_pack", "no pack signature");
  if (e.readUInt32BE(4) !== tt) return X("unsupported_version", `version ${e.readUInt32BE(4)}`);
  let c = e.readUInt32BE(8);
  if (c > i) return X("over_budget", `${c} objects is more than the budget`);
  let s = e.length - a,
    d = qe(n);
  for (let S = 0; S < s; S += Je) d.update(e.subarray(S, Math.min(s, S + Je))), await be();
  if (!d.digest().equals(e.subarray(s))) return X("checksum_mismatch", "the trailer does not hash the pack");
  let m = [],
    p = new Set,
    h = he,
    g = 0;
  for (let S = 0; S < c; S++) {
    if (S % oe === oe - 1) await be();
    let y = await pn(e, h, s, a, r - g);
    if (!y.ok) return y;
    if (y.entry.base.kind === "offset" && !p.has(y.entry.base.offset)) return X("malformed", `an offset delta at ${h} does not point at an object`);
    p.add(h), m.push(y.entry), h = y.next, g += y.inflatedBytes
  }
  if (h !== s) return X("malformed", "bytes between the last object and the trailer");
  return bn(m, n, r - g)
}
async function pn(e, n, r, i, a) {
  if (n >= r) return X("truncated", "the header counts more objects than the pack holds");
  let c = e.readUInt8(n),
    s = c >> 4 & 7,
    d = Re(e, n + 1, r, (c & 128) !== 0);
  if (d === null) return X("malformed", `an unreadable size at ${n}`);
  let m = (c & 15) + 16 * d.value,
    p = d.next,
    h, g = an.find((y) => nt[y] === s);
  if (g !== void 0) h = {
    kind: "none",
    type: g
  };
  else if (s === ln) {
    let y = Sn(e, p, r);
    if (y === null || y.value > n - he) return X("malformed", `an offset delta at ${n} points outside the pack`);
    h = {
      kind: "offset",
      offset: n - y.value
    }, p = y.next
  } else if (s === dn) {
    if (p + i > r) return X("malformed", `a delta base id at ${n} runs past the pack`);
    h = {
      kind: "id",
      id: e.toString("hex", p, p + i)
    }, p += i
  } else return X("malformed", `object type ${s} at ${n}`);
  if (m > a) return X("over_budget", "the objects inflate past the budget");
  let S = await Be(e.subarray(p, r), m);
  if (!S.ok) return X(S.reason, `${S.detail} at ${n}`);
  return {
    ok: !0,
    entry: {
      offset: n,
      data: S.data,
      base: h
    },
    next: p + S.consumed,
    inflatedBytes: m
  }
}
async function Be(e, n) {
  let r = {
      info: !0,
      maxOutputLength: Math.max(1, n),
      chunkSize: Math.max(it, n + 1)
    },
    i;
  try {
    i = n < ot ? sn(e, r) : await mn(e, r)
  } catch (a) {
    return v(a) === "Z_BUF_ERROR" ? X("truncated", "a zlib stream ends early") : X("malformed", "a zlib stream does not inflate to its declared size")
  }
  if (!hn(i) || i.buffer.length !== n) return X("malformed", "a zlib stream is shorter than its declared size");
  return {
    ok: !0,
    data: i.buffer,
    consumed: i.engine.bytesWritten
  }
}

function hn(e) {
  return typeof e === "object" && e !== null && "buffer" in e && Buffer.isBuffer(e.buffer) && "engine" in e && typeof e.engine === "object" && e.engine !== null && "bytesWritten" in e.engine && typeof e.engine.bytesWritten === "number"
}
async function bn(e, n, r) {
  let i = new Map,
    a = new Map;
  for (let h of e)
    if (h.base.kind === "offset") {
      let g = i.get(h.base.offset) ?? [];
      g.push(h), i.set(h.base.offset, g)
    } else if (h.base.kind === "id") {
    let g = a.get(h.base.id) ?? [];
    g.push(h), a.set(h.base.id, g)
  }
  let c = new Map,
    s = new Map,
    d = e.filter((h) => h.base.kind === "none"),
    m = r;
  for (let h = d.pop(); h !== void 0; h = d.pop()) {
    if (c.size % oe === oe - 1) await be();
    let g;
    if (h.base.kind === "none") g = Z(h.base.type, h.data, n);
    else {
      let S = h.base.kind === "offset" ? c.get(h.base.offset) : s.get(h.base.id);
      if (S === void 0) return X("malformed", `a delta at ${h.offset} was ready before its base`);
      let y = wn(h.data);
      if (y === null) return X("malformed", `an unreadable delta header at ${h.offset}`);
      if (y.resultSize > m) return X("over_budget", "the objects inflate past the budget");
      m -= y.resultSize;
      let k = kn(S.body, h.data, y);
      if (k === null) return X("malformed", `a delta at ${h.offset} does not apply to its base`);
      g = Z(S.type, k, n)
    }
    if (c.set(h.offset, g), !s.has(g.id)) s.set(g.id, g);
    for (let S of i.get(h.offset) ?? []) d.push(S);
    for (let S of a.get(g.id) ?? []) d.push(S);
    i.delete(h.offset), a.delete(g.id)
  }
  let p = e.map((h) => c.get(h.offset));
  if (!p.every((h) => h !== void 0)) return X("thin_pack", "a delta rests on an object the pack does not carry");
  return {
    ok: !0,
    objects: p
  }
}

function yn(e, n) {
  let r = [];
  for (let i = Math.floor(n / 16); i > 0; i = Math.floor(i / 128)) r.push(i % 128);
  return Buffer.from([e << 4 | n % 16 | (r.length > 0 ? 128 : 0), ...r.map((i, a) => a < r.length - 1 ? i | 128 : i)])
}

function Re(e, n, r, i) {
  let a = 0,
    c = 1,
    s = n,
    d = i;
  for (let m = 0; d; m++) {
    let p = e[s];
    if (p === void 0 || s >= r || m >= rt) return null;
    a += (p & 127) * c, c *= 128, s += 1, d = (p & 128) !== 0
  }
  return {
    value: a,
    next: s
  }
}

function Sn(e, n, r) {
  let i = -1,
    a = n;
  for (let c = 0;; c++) {
    let s = e[a];
    if (s === void 0 || a >= r || c >= rt) return null;
    if (i = (i + 1) * 128 + (s & 127), a += 1, (s & 128) === 0) return {
      value: i,
      next: a
    }
  }
}

function wn(e) {
  let n = Re(e, 0, e.length, !0),
    r = n === null ? null : Re(e, n.next, e.length, !0);
  return n === null || r === null ? null : {
    baseSize: n.value,
    resultSize: r.value,
    next: r.next
  }
}

function kn(e, n, r) {
  if (r.baseSize !== e.length) return null;
  let i = Buffer.alloc(r.resultSize),
    a = 0,
    c = r.next;
  while (c < n.length) {
    let s = n.readUInt8(c);
    if (c += 1, s === 0) return null;
    if ((s & 128) === 0) {
      if (c + s > n.length || a + s > i.length) return null;
      n.copy(i, a, c, c + s), c += s, a += s;
      continue
    }
    let d = 0,
      m = 0;
    for (let h = 0; h < 7; h++) {
      if ((s & 1 << h) === 0) continue;
      let g = n[c];
      if (g === void 0) return null;
      if (c += 1, h < 4) d += g * 2 ** (8 * h);
      else m += g * 2 ** (8 * (h - 4))
    }
    let p = m === 0 ? cn : m;
    if (d + p > e.length || a + p > i.length) return null;
    e.copy(i, a, d, d + p), a += p
  }
  return a === i.length ? i : null
}
async function En(e) {
  let n = {
    chunkSize: Math.min(un, Math.max(it, e.length))
  };
  return e.length < ot ? nn(e, n) : await fn(e, n)
}

function be() {
  return new Promise((e) => setImmediate(e))
}
import {
  randomBytes as _n
} from "crypto";
import {
  link as Tn,
  lstat as ye,
  mkdir as On,
  open as ue,
  readdir as Pe,
  realpath as se,
  rm as xn,
  unlink as ft
} from "fs/promises";
import {
  join as ne
} from "path";
import {
  promisify as Rn
} from "util";
import {
  deflate as Bn,
  deflateSync as Pn
} from "zlib";
var Ie = "store",
  mt = /^([A-Za-z0-9][A-Za-z0-9_-]{0,127})\.(\d{6,12})-([0-9a-f]{8})\.seg$/,
  gt = 1,
  BWe = 134217728,
  pt = /^[A-Za-z0-9][A-Za-z0-9_-]{0,127}$/,
  ie = Buffer.from("ccobjs", "latin1"),
  st = ie.length + 2,
  ht = {
    sha1: 1,
    sha256: 2
  },
  bt = 197,
  yt = {
    commit: 1,
    tree: 2,
    blob: 3,
    tag: 4
  },
  Fn = ["commit", "tree", "blob", "tag"],
  St = 5,
  Fe = 64,
  wt = 8,
  Mn = 2 + 2 * wt + 32,
  In = 1048576,
  jn = 262144,
  An = 6,
  Dn = 999999999999,
  Nn = 4,
  vn = ".dropped-",
  zn = 384,
  Gn = 448,
  Ln = Rn(Bn);

function Hn(e, n) {
  return pt.test(n) ? ne(e, n, Ie) : null
}
async function teo({
  root: e,
  sessionId: n,
  budgetBytes: r,
  objectFormat: i = "sha1",
  signal: a
}) {
  let c = Hn(e, n);
  if (c === null) return {
    kind: "unreadable",
    detail: "not an id a directory can be named after"
  };
  let s;
  try {
    if (await On(c, {
        recursive: !0,
        mode: Gn
      }), s = ne(await se(e), n, Ie), await se(c) !== s) return {
      kind: "unreadable",
      detail: "the session directory is not a plain directory under the root"
    }
  } catch (S) {
    return {
      kind: "unreadable",
      detail: "cannot create the session directory: " + String(S)
    }
  }
  let d = await Wn(e, n);
  if (d === null) return {
    kind: "unreadable",
    detail: "cannot list the root directory"
  };
  let m = new Map,
    p = new Set;
  for (let S of d) {
    if (a?.aborted) return {
      kind: "unreadable",
      detail: "aborted"
    };
    await Kn(S, i, m, p)
  }
  t("dir-sync object store: opened with " + String(m.size) + " objects in " + String(d.length) + " segments, " + String(d.reduce((S, y) => S + y.bytes, 0)) + " bytes on disk");
  let h = 0;
  for (let S of d)
    if (S.own) h = Math.max(h, Number(mt.exec(S.name)?.[2] ?? 0));
  let g = h + 1;
  return {
    kind: "ok",
    store: $n({
      objectFormat: i,
      budgetBytes: r,
      ownDirectory: s,
      sessionId: n,
      nextSequence: g,
      segments: d,
      index: m,
      adopted: p
    })
  }
}

function neo({
  objectFormat: e = "sha1",
  budgetBytes: n = Number.POSITIVE_INFINITY
} = {}) {
  let r = new Map;

  function i() {
    let s = 0;
    for (let d of r.values()) s += d.deflated.length;
    return s
  }
  async function a(s) {
    let d = r.get(s);
    if (d === void 0) return "absent";
    let m = await Se(d.deflated, d.size);
    return m !== null && Z(d.type, m, e).id === s ? {
      object: d,
      body: m
    } : "corrupt"
  }
  return {
    store: {
      objectFormat: e,
      has: (s) => Promise.resolve(r.has(s)),
      hasHere: (s) => Promise.resolve(r.has(s)),
      async get(s) {
        let d = await a(s);
        return d === "absent" || d === "corrupt" ? {
          kind: d
        } : {
          kind: "ok",
          object: {
            type: d.object.type,
            body: d.body
          }
        }
      },
      async getDeflated(s) {
        let d = await a(s);
        return d === "absent" || d === "corrupt" ? {
          kind: d
        } : {
          kind: "ok",
          object: d.object
        }
      },
      deflatedSize: (s) => r.get(s)?.deflated.length ?? null,
      async put(s, d) {
        let {
          id: m
        } = Z(s, d, e);
        if (!r.has(m)) r.set(m, {
          id: m,
          type: s,
          size: d.length,
          deflated: await Et(d)
        });
        return m
      },
      async putDeflated(s, d, m, p) {
        if (r.has(s)) return !0;
        let h = l7(s, e) ? await Se(p, m) : null;
        if (h === null || Z(d, h, e).id !== s) return !1;
        return r.set(s, {
          id: s,
          type: d,
          size: m,
          deflated: p
        }), !0
      },
      hold: (s) => Promise.resolve(s.filter((d) => !r.has(d))),
      stats: () => Promise.resolve({
        objects: r.size,
        bytes: i(),
        sessionBytes: i(),
        budgetBytes: n,
        segments: 0
      }),
      wouldExceed: (s) => i() + s > n,
      flush: () => Promise.resolve(),
      close: () => Promise.resolve()
    },
    objects: () => [...r.values()]
  }
}

function $n({
  objectFormat: e,
  budgetBytes: n,
  ownDirectory: r,
  sessionId: i,
  nextSequence: a,
  segments: c,
  index: s,
  adopted: d
}) {
  let m = Promise.resolve(),
    p = null,
    h = !1,
    g = !1,
    S = !1,
    y = new Set,
    k = new Set;

  function T(w) {
    let _ = m.then(w, w);
    return m = _.catch(() => {
      return
    }), _
  }

  function x(w, _) {
    let I = s.get(w);
    if (I === void 0) return;
    if (I === _) {
      if (_.next === null) s.delete(w);
      else s.set(w, _.next);
      return
    }
    for (let F = I; F.next !== null; F = F.next)
      if (F.next === _) {
        F.next = _.next;
        return
      }
  }

  function M(w, _) {
    let I = s.get(w);
    if (I === void 0 || I === _) return;
    for (let F = I; F.next !== null; F = F.next)
      if (F.next === _) {
        F.next = _.next, _.next = I, s.set(w, _);
        return
      }
  }
  async function R(w) {
    if (S) return "absent";
    let _ = [];
    for (let P = s.get(w) ?? null; P !== null; P = P.next) _.push(P);
    let I = !1;
    for (let P of _) {
      if (P.segment.vanished) continue;
      let j = await Jn(P);
      if (j === "vanished") qn(P.segment, s);
      else if (j === "unreadable") I = !0;
      else {
        let N = await Se(j, P.size);
        if (N !== null && Z(P.type, N, e).id === w) {
          if (y.delete(w), P.segment.own && !P.kept) k.add(w);
          return M(w, P), {
            entry: P,
            deflated: j,
            body: N
          }
        }
        I = !0, x(w, P)
      }
    }
    let F = s.get(w);
    if (F !== void 0 && !_.includes(F)) return R(w);
    if (I && F !== void 0) y.add(w);
    return I ? "corrupt" : "absent"
  }
  async function D() {
    if (h) throw Error("this session can append nothing more in this process: its segment could not be made or mended");
    if (p ??= await Un(r, i, Math.min(a, Dn), e), p === null) throw h = !0, Error("cannot create a segment to append to");
    if (!c.includes(p.segment)) c.unshift(p.segment), g = !0;
    return p
  }

  function G(w) {
    let _ = s.get(w);
    return _ !== void 0 && _.segment.own && !_.kept
  }

  function W(w) {
    for (let _ = s.get(w) ?? null; _ !== null; _ = _.next)
      if (_.segment.own && !_.kept) return !0;
    return !1
  }

  function q(w) {
    return T(async () => {
      if (S || d.has(w) || G(w)) return;
      let _ = await D(),
        I = at({
          type: "adopt",
          size: 0,
          deflatedSize: 0,
          id: w
        });
      try {
        await Me(_.handle, I, _.offset)
      } catch (F) {
        throw await _.handle.truncate(_.offset).catch(() => {
          h = !0
        }), F
      }
      _.offset += I.length, _.segment.bytes = _.offset, d.add(w)
    })
  }

  function z(w, _, I, F, P = !1) {
    return T(async () => {
      if (S) throw Error("the object store is closed");
      if (s.get(w)?.segment.own && !y.has(w)) return;
      if (F.length > BWe) throw Error("an object larger than the store takes");
      let j = await D(),
        N = at({
          type: _,
          kept: P,
          size: I,
          deflatedSize: F.length,
          id: w
        });
      try {
        await Me(j.handle, Buffer.concat([N, F]), j.offset)
      } catch (K) {
        throw await j.handle.truncate(j.offset).catch(() => {
          h = !0
        }), K
      }
      let ee = j.offset + N.length;
      j.offset = ee + F.length, j.segment.bytes = j.offset, s.set(w, {
        segment: j.segment,
        type: _,
        size: I,
        dataOffset: ee,
        deflatedSize: F.length,
        kept: P,
        next: s.get(w) ?? null
      }), y.delete(w), k.add(w)
    })
  }
  async function V(w) {
    if (S) return [...w];
    let _ = [],
      I = new Map;
    for (let F of w) {
      let P = s.get(F);
      if (P === void 0) {
        _.push(F);
        continue
      }
      if (P.segment.own && !y.has(F)) continue;
      let j = await R(F);
      if (j === "absent" || j === "corrupt") _.push(F);
      else if (!j.entry.segment.secured) {
        let N = I.get(j.entry.segment) ?? [];
        N.push(F), I.set(j.entry.segment, N)
      }
    }
    for (let [F, P] of I) {
      if (!F.name.startsWith(i + ".") && await Zn(F, r)) {
        g = !0;
        continue
      }
      for (let j of P) {
        let N = await R(j);
        if (N === "absent" || N === "corrupt") _.push(j);
        else if (!N.entry.segment.secured) try {
          await z(j, N.entry.type, N.entry.size, N.deflated, !0)
        } catch (ee) {
          t("dir-sync object store: cannot carry a copy over: " + String(ee)), _.push(j)
        }
      }
    }
    return _
  }

  function Y(w) {
    let _ = new Map;
    for (let F of c)
      if (!F.vanished && w(F)) _.set(F.inode, F.bytes);
    let I = 0;
    for (let F of _.values()) I += F;
    return I
  }
  return {
    objectFormat: e,
    has: (w) => Promise.resolve(!S && s.has(w)),
    hasHere: (w) => Promise.resolve(!S && !y.has(w) && (W(w) || d.has(w) && s.has(w))),
    async get(w) {
      let _ = await R(w);
      return _ === "absent" || _ === "corrupt" ? {
        kind: _
      } : {
        kind: "ok",
        object: {
          type: _.entry.type,
          body: _.body
        }
      }
    },
    async getDeflated(w) {
      let _ = await R(w);
      return _ === "absent" || _ === "corrupt" ? {
        kind: _
      } : {
        kind: "ok",
        object: {
          id: w,
          type: _.entry.type,
          size: _.entry.size,
          deflated: _.deflated
        }
      }
    },
    deflatedSize: (w) => S ? null : s.get(w)?.deflatedSize ?? null,
    async put(w, _) {
      if (S) throw Error("the object store is closed");
      if (_.length > BWe) throw Error("an object larger than the store takes");
      let {
        id: I
      } = Z(w, _, e), F = s.get(I);
      if (F === void 0 || y.has(I) || (F.segment.own ? !k.has(I) && typeof await R(I) !== "object" : (await V([I])).length > 0)) await z(I, w, _.length, await Et(_));
      else if (!G(I)) await q(I).catch((P) => {
        t("dir-sync object store: adoption not recorded: " + String(P))
      });
      return I
    },
    async putDeflated(w, _, I, F) {
      if (S) throw Error("the object store is closed");
      if (!l7(w, e) || !Number.isSafeInteger(I) || I < 0 || I > BWe || F.length > BWe) return !1;
      let P = await Se(F, I);
      if (P === null || Z(_, P, e).id !== w) return !1;
      let j = s.get(w);
      if (j !== void 0 && !y.has(w) && (j.segment.own ? typeof await R(w) === "object" : (await V([w])).length === 0)) {
        if (!G(w)) await q(w).catch((N) => {
          t("dir-sync object store: adoption not recorded: " + String(N))
        });
        return !0
      }
      return await z(w, _, I, F), !0
    },
    hold: V,
    async stats() {
      return await m, {
        objects: s.size,
        bytes: Y(() => !0),
        sessionBytes: Y((w) => w.secured),
        budgetBytes: n,
        segments: new Set(c.filter((w) => !w.vanished).map((w) => w.inode)).size
      }
    },
    wouldExceed: (w) => Y(() => !0) + w > n,
    flush: () => T(async () => {
      if (S) return;
      if (await p?.handle.sync(), g) g = !1, await er(r)
    }),
    close: () => T(async () => {
      if (S) return;
      S = !0, await p?.handle.sync().catch(() => {
        return
      }), await p?.handle.close().catch(() => {
        return
      })
    })
  }
}
async function Wn(e, n) {
  let r, i;
  try {
    i = await se(e), r = (await Pe(e, {
      withFileTypes: !0
    })).filter((s) => s.isDirectory() && pt.test(s.name)).map((s) => s.name).toSorted((s, d) => Number(d === n) - Number(s === n) || (s < d ? -1 : 1))
  } catch {
    return null
  }
  await Yn(i);
  let a = [],
    c = new Map;
  for (let s of r) {
    let d = ne(i, s, Ie),
      m, p;
    try {
      if (await se(d) !== d) continue;
      p = ut(await ye(d, {
        bigint: !0
      }));
      let g = (await Pe(d, {
          withFileTypes: !0
        })).filter((y) => y.isFile() && mt.test(y.name)).map((y) => y.name).toSorted(),
        S = n + ".";
      m = s === n ? [...g.filter((y) => y.startsWith(S)).toReversed(), ...g.filter((y) => !y.startsWith(S))] : g
    } catch (g) {
      if (!B(g)) t("dir-sync object store: cannot list a session directory: " + String(g));
      continue
    }
    let h = [];
    for (let g of m) {
      let S = ne(d, g);
      try {
        let y = await ye(S, {
            bigint: !0
          }),
          k = ce(y);
        if (k !== "") h.push({
          name: g,
          path: S,
          inode: k,
          bytes: Number(y.size)
        })
      } catch {
        continue
      }
    }
    try {
      if (await se(d) !== d || ut(await ye(d, {
          bigint: !0
        })) !== p) continue
    } catch {
      continue
    }
    for (let {
        name: g,
        path: S,
        inode: y,
        bytes: k
      }
      of h) {
      let T = c.get(y);
      if (T !== void 0) {
        T.paths.push(S);
        continue
      }
      let x = {
        name: g,
        paths: [S],
        inode: y,
        bytes: k,
        secured: s === n,
        own: s === n && g.startsWith(n + "."),
        vanished: !1
      };
      c.set(y, x), a.push(x)
    }
  }
  return a
}
async function Yn(e) {
  try {
    let n = (await Pe(e, {
      withFileTypes: !0
    })).filter((r) => r.name.startsWith(vn));
    await Promise.all(n.map((r) => xn(ne(e, r.name), {
      recursive: !0,
      force: !0
    }).catch(() => {
      return
    })))
  } catch {}
}
async function Un(e, n, r, i) {
  let a = n + "." + String(r).padStart(An, "0") + "-" + _n(4).toString("hex") + ".seg",
    c = ne(e, a),
    s;
  try {
    s = await ue(c, "wx", zn)
  } catch (d) {
    return t("dir-sync object store: cannot create a segment: " + String(d)), null
  }
  try {
    if (await se(c) !== c) throw Error("the new segment is not inside the session directory");
    let d = Buffer.concat([ie, Buffer.from([gt, ht[i]])]);
    await Me(s, d, 0);
    let m = await s.stat({
      bigint: !0
    });
    return {
      segment: {
        name: a,
        paths: [c],
        inode: ce(m),
        bytes: d.length,
        secured: !0,
        own: !0,
        vanished: !1
      },
      handle: s,
      offset: d.length
    }
  } catch (d) {
    return t("dir-sync object store: cannot write a new segment: " + String(d)), await s.close().catch(() => {
      return
    }), await ft(c).catch(() => {
      return
    }), null
  }
}
async function Me(e, n, r) {
  let i = 0;
  while (i < n.length) {
    let {
      bytesWritten: a
    } = await e.write(n, i, n.length - i, r + i);
    if (a <= 0) throw Error("the segment file accepted no bytes");
    i += a
  }
}
async function Kn(e, n, r, i) {
  let a = await kt(e);
  if (a === "vanished" || a === "unreadable") return;
  let c = te(n),
    s = Buffer.alloc(0),
    d = 0,
    m = 0;
  async function p(h, g) {
    if (m >= d && m + g <= d + s.length) return s.subarray(m - d, m - d + g);
    let S = Math.min(Math.max(g, In), e.bytes - m);
    if (S < g) return null;
    let y = Buffer.alloc(S),
      k = 0;
    while (k < S) {
      let {
        bytesRead: T
      } = await h.read(y, k, S - k, m + k);
      if (T === 0) break;
      k += T
    }
    return s = y.subarray(0, k), d = m, k >= g ? s.subarray(0, g) : null
  }
  try {
    let h = await p(a, st);
    if (h === null || !h.subarray(0, ie.length).equals(ie) || h[ie.length] !== gt || h[ie.length + 1] !== ht[n]) return;
    m = st;
    while (m < e.bytes) {
      let g = Math.min(Mn, e.bytes - m),
        S = await p(a, g),
        y = S === null ? null : Vn(S, c);
      if (y === null || m + y.headerBytes + y.deflatedSize > e.bytes) return;
      let k = m + y.headerBytes;
      if (y.type === "adopt") {
        if (e.own) i.add(y.id)
      } else Xn(r, y.id, {
        segment: e,
        type: y.type,
        size: y.size,
        dataOffset: k,
        deflatedSize: y.deflatedSize,
        kept: y.kept,
        next: null
      });
      m = k + y.deflatedSize
    }
  } catch (h) {
    t("dir-sync object store: a segment could not be scanned whole: " + String(h))
  } finally {
    await a.close().catch(() => {
      return
    })
  }
}

function Xn(e, n, r) {
  let i = e.get(n);
  if (i === void 0) {
    e.set(n, r);
    return
  }
  let a = i,
    c = 1;
  while (a.next !== null) a = a.next, c += 1;
  if (c >= Nn) return;
  a.next = r
}

function Vn(e, n) {
  if (e.length < 2 || e[0] !== bt) return null;
  let r = (e[1] ?? 0) & ~Fe,
    i = ((e[1] ?? 0) & Fe) !== 0,
    a = r === St ? i ? void 0 : "adopt" : Fn.find((d) => yt[d] === r),
    c = a === void 0 ? null : dt(e, 2),
    s = c === null ? null : dt(e, c.next);
  if (a === void 0 || c === null || s === null || c.value > BWe || s.value > BWe || a === "adopt" && (c.value !== 0 || s.value !== 0) || s.next + n > e.length) return null;
  return {
    type: a,
    kept: i,
    size: c.value,
    deflatedSize: s.value,
    id: e.toString("hex", s.next, s.next + n),
    headerBytes: s.next + n
  }
}

function at({
  type: e,
  kept: n = !1,
  size: r,
  deflatedSize: i,
  id: a
}) {
  return Buffer.concat([Buffer.from([bt, (e === "adopt" ? St : yt[e]) | (n ? Fe : 0)]), lt(r), lt(i), Buffer.from(a, "hex")])
}

function lt(e) {
  let n = [],
    r = e;
  do {
    let i = r % 128;
    r = Math.floor(r / 128), n.push(r > 0 ? i | 128 : i)
  } while (r > 0);
  return Buffer.from(n)
}

function dt(e, n) {
  let r = 0,
    i = 1;
  for (let a = 0; a < wt; a++) {
    let c = e[n + a];
    if (c === void 0) return null;
    if (r += (c & 127) * i, i *= 128, (c & 128) === 0) return {
      value: r,
      next: n + a + 1
    }
  }
  return null
}
async function kt(e) {
  while (e.paths[0] !== void 0) try {
    let n = await ue(e.paths[0], sa());
    if (ce(await n.stat({
        bigint: !0
      })) !== e.inode) return await n.close().catch(() => {
      return
    }), "unreadable";
    return n
  } catch (n) {
    let r = v(n);
    if (r === "EMFILE" || r === "ENFILE") throw n;
    if (r !== "ENOENT") return "unreadable";
    e.paths.shift()
  }
  return e.vanished = !0, "vanished"
}
async function Jn(e) {
  let n = await kt(e.segment);
  if (n === "vanished" || n === "unreadable") return n;
  try {
    let r = Buffer.alloc(e.deflatedSize),
      i = 0;
    while (i < e.deflatedSize) {
      let {
        bytesRead: a
      } = await n.read(r, i, e.deflatedSize - i, e.dataOffset + i);
      if (a === 0) return "unreadable";
      i += a
    }
    return r
  } catch {
    return "unreadable"
  } finally {
    await n.close().catch(() => {
      return
    })
  }
}

function qn(e, n) {
  e.vanished = !0;
  for (let [r, i] of n) {
    let a = [];
    for (let s = i; s !== null; s = s.next)
      if (s.segment !== e) a.push(s);
    a.forEach((s, d) => {
      s.next = a[d + 1] ?? null
    });
    let [c] = a;
    if (c === void 0) n.delete(r);
    else if (c !== i) n.set(r, c)
  }
}
async function Zn(e, n) {
  let r = e.paths[0];
  if (r === void 0) return !1;
  let i = ne(n, e.name);
  try {
    let a = await ue(r, sa());
    try {
      if (ce(await a.stat({
          bigint: !0
        })) !== e.inode) return !1;
      await Tn(r, i)
    } finally {
      await a.close().catch(() => {
        return
      })
    }
  } catch (a) {
    return t("dir-sync object store: cannot link a segment, copying its records instead: " + String(a)), !1
  }
  try {
    if (ce(await ye(i, {
        bigint: !0
      })) !== e.inode) return await ft(i).catch(() => {
      return
    }), !1
  } catch {
    return !1
  }
  return e.paths.unshift(i), e.secured = !0, await Qn(i), !0
}

function ut(e) {
  return String(e.dev) + ":" + String(e.ino)
}

function ce(e) {
  return e.isFile() ? String(e.dev) + ":" + String(e.ino) : ""
}
async function Qn(e) {
  try {
    let n = await ue(e, sa());
    try {
      await n.sync()
    } finally {
      await n.close()
    }
  } catch {}
}
async function Se(e, n) {
  let r = await Be(e, n);
  return r.ok && r.consumed === e.length ? r.data : null
}
async function Et(e) {
  return e.length < jn ? Pn(e) : await Ln(e)
}
async function er(e) {
  try {
    let n = await ue(e, "r");
    try {
      await n.sync()
    } finally {
      await n.close()
    }
  } catch {}
}
import {
  mkdir as tr,
  open as nr
} from "fs/promises";
import {
  dirname as rr
} from "path";
var Ce = 1,
  _t = 262144,
  Tt = 67108864,
  or = 384,
  ir = 448,
  sr = f(() => tK([o().min(1), E().int().nonnegative(), E(), E(), E().int().nonnegative(), E().nonnegative(), E(), o().regex(rn)])),
  ar = f(() => u({
    version: A(Ce),
    entries: C(ae()).max(_t)
  }));
async function M4t(e, {
  maxEntries: n = _t
} = {}) {
  let r = new Map;
  for (let [i, a, c, s, d, m, p, h] of await lr(e)) r.set(i, {
    stat: {
      size: a,
      mtimeMs: c,
      mode: d,
      observedAtMs: p
    },
    ctimeMs: s,
    ino: m,
    blobId: h,
    touched: !1
  });
  return {
    lookup(i, a) {
      let c = r.get(i);
      if (c === void 0 || c.stat.size !== a.size || c.stat.mtimeMs !== a.mtimeMs || c.ctimeMs !== a.ctimeMs || c.stat.mode !== a.mode || c.ino !== a.ino || !AAr(c.stat)) return null;
      return c.touched = !0, c.blobId
    },
    remember(i, {
      size: a,
      mtimeMs: c,
      ctimeMs: s,
      mode: d,
      ino: m,
      observedAtMs: p
    }, h) {
      let g = {
        size: a,
        mtimeMs: c,
        mode: d,
        observedAtMs: p
      };
      if (AAr(g)) r.set(i, {
        stat: g,
        ctimeMs: s,
        ino: m,
        blobId: h,
        touched: !0
      });
      else r.delete(i)
    },
    forget(i) {
      r.delete(i)
    },
    get size() {
      return r.size
    },
    async save() {
      let i = [...r].toSorted(([, c], [, s]) => Number(s.touched) - Number(c.touched)).slice(0, n).map(([c, {
          stat: s,
          ctimeMs: d,
          ino: m,
          blobId: p
        }]) => [c, s.size, s.mtimeMs, d, s.mode, m, s.observedAtMs, p]),
        a = b({
          version: Ce,
          entries: i
        });
      while (Buffer.byteLength(a) > Tt && i.length > 0) i.length = Math.floor(i.length / 2), a = b({
        version: Ce,
        entries: i
      });
      try {
        return await tr(rr(e), {
          recursive: !0,
          mode: ir
        }), await Cn(e, a, or), !0
      } catch (c) {
        return t("dir-sync stat cache: not saved: " + String(c)), !1
      }
    }
  }
}
async function lr(e) {
  try {
    let n = await nr(e, sa());
    try {
      let r = await n.stat();
      if (!r.isFile() || r.size > Tt) return [];
      let i = await $Ee(n, r.size),
        a = ar().safeParse(ct(i.toString("utf8"), !1));
      return a.success ? a.data.entries.flatMap((c) => {
        let s = sr().safeParse(c);
        return s.success ? [s.data] : []
      }) : []
    } finally {
      await n.close()
    }
  } catch {
    return []
  }
}
var dr = 3;

function Ot({
  wanted: e,
  known: n,
  peer: r,
  peerHasBlob: i,
  sizeOf: a,
  outOfSight: c
}) {
  let s = new Map,
    d = new Map,
    m = (g, S, y) => {
      if (s.set(g, {
          mode: S.mode,
          blobId: S.blobId
        }), i(S.blobId) || d.has(S.blobId)) return;
      d.set(S.blobId, {
        path: g,
        bytes: y
      })
    };
  for (let [g, S] of [...e].toSorted(cr)) m(g, S, S.bytes);
  let p = [],
    h = L([...n.keys(), ...r.keys()]).filter((g) => !e.has(g) && c(g) !== !1).toSorted();
  for (let g of h) {
    let S = n.get(g),
      y = r.get(g),
      k = S === void 0 ? null : a(S.blobId),
      T = c(g) === "excluded";
    if (!T && S !== void 0 && (i(S.blobId) || k !== null)) {
      m(g, S, k ?? 0);
      continue
    }
    if (y !== void 0) m(g, y, 0);
    if (!T && S !== void 0 && S.blobId !== y?.blobId) p.push({
      path: g,
      kept: y === void 0 ? "none" : "held"
    })
  }
  return {
    commitFiles: s,
    heldBack: [],
    demoted: p,
    bytesPlanned: [...d.values()].reduce((g, {
      bytes: S
    }) => g + S, 0),
    largest: [...d.values()].toSorted((g, S) => S.bytes - g.bytes || Tee(g, S)).slice(0, dr)
  }
}

function cr(e, n) {
  return Tee({
    path: e[0]
  }, {
    path: n[0]
  })
}
var ur = 33188,
  fr = 33261,
  mr = 64,
  gr = 8,
  pr = 65536,
  hr = 16777216,
  br = 4,
  xt = "sync",
  yr = new Set(["ENOENT", "ENOTDIR", "ELOOP", "EACCES", "EPERM", "WORKING_ROOT_NOT_CANONICAL"]);
async function bir({
  folder: e,
  realRoot: n,
  repo: r,
  statCache: i,
  known: a,
  peer: c,
  peerHasBlob: s,
  budgetBytes: d,
  withheldOf: m,
  through: p = null,
  signal: h,
  now: g = Date.now
}) {
  let S = g(),
    y = await Nwt(e);
  if (y.kind === "unusable") return J(y.reason === "busy" ? "momentary" : "unreadable", `the .gitignore in this folder ${Lwt(y)}`);
  if (m.hostConfigGround !== void 0) return J("unreadable", tqe(m.hostConfigGround));
  let k = await sar({
    root: e,
    ignores: Dwt(y.lines, {
      ignoreCase: K7e(e)
    }),
    withheldOf: m,
    signal: h,
    nestedIgnoreFiles: !0
  });
  if (!k.ok) switch (k.reason) {
    case "aborted":
      return J("aborted", "the sync point was abandoned");
    case "too_many_files":
      return {
        kind: "refused", reason: "too_large", detail: "this folder holds more files than sync lists", totalBytes: 0, capBytes: d, largest: []
      };
    case "nested_ignores_too_large":
      return J("unreadable", oar);
    case "root_unreadable":
    case "ignore_unreadable":
      return J("unreadable", "this folder cannot be read")
  }
  let {
    listing: T
  } = k, x = T.files.flatMap((H) => {
    let Q = Sr(H.path);
    return Q === null ? [] : [{
      path: H.path,
      reason: Q
    }]
  }), M = new Set(x.map(({
    path: H
  }) => H)), R = T.files.filter((H) => !M.has(H.path)), D = g(), G = await Rr({
    candidates: R,
    folder: e,
    realRoot: n,
    statCache: i,
    through: p,
    signal: h
  });
  if (Mt(h)) return J("aborted", "the sync point was abandoned");
  let W = g() - D,
    q = new Map(G.skipped.map((H) => [H.path, H.reason])),
    z = Br(T, M, q),
    V = new Map([...G.files].map(([H, Q]) => [H, {
      mode: wr(Q.stat.mode),
      blobId: Q.blobId,
      bytes: Q.stat.size
    }])),
    Y = g(),
    w = Ot({
      wanted: V,
      known: a,
      peer: c,
      peerHasBlob: s,
      sizeOf: (H) => r.store.deflatedSize(H),
      outOfSight: z
    }),
    _ = g() - Y,
    I = i3t(d, w.commitFiles.size);
  if (w.bytesPlanned > I) {
    let H = w.largest[0] ?? {
      path: "(none)",
      bytes: 0
    };
    return {
      kind: "refused",
      reason: "too_large",
      detail: `${H.path} (largest, ${String(H.bytes)} bytes): ${String(w.bytesPlanned)} bytes of changed files exceed the ${String(d)}-byte cap`,
      totalBytes: w.bytesPlanned,
      capBytes: d,
      largest: w.largest
    }
  }
  for (let {
      path: H,
      kept: Q
    }
    of w.demoted) t(`folder sync: ${H} cannot keep what was last sent this pass; the tree carries ${Q==="held"?"the cloud session's copy":"no entry"} for it`);
  let F = Or(w.commitFiles, V);
  for (let H of F.dropped) t(`folder sync: ${H} kept from an earlier state collides with a directory or file of the same name now; left out of the tree`);
  let P = await Pr({
    plan: F.files,
    wanted: V,
    sighted: G.files,
    known: a,
    peer: c,
    statCache: i,
    peerHasBlob: s,
    repo: r,
    folder: e,
    realRoot: n,
    through: p,
    signal: h
  });
  if (Mt(h)) return J("aborted", "the sync point was abandoned");
  let j = await r.writeTree(P.commitFiles);
  if (!j.ok) return J("git_error", `a tree for this folder could not be built (${j.reason} at ${j.path})`);
  if (G.hashed > 0 || P.slipped.length > 0) await i.save();
  let N = P.slipped.toSorted(Tee),
    ee = Ir(T, x, q),
    K = {
      listedPaths: T.files.length,
      nestedIgnoreFiles: T.nestedIgnoreFiles,
      hashedFiles: G.hashed,
      hashMs: W,
      planMs: _,
      heldBack: N,
      withheldCounts: ee,
      blobsStored: P.blobsStored,
      bytesPlanned: w.bytesPlanned,
      totalMs: g() - S
    };
  return {
    kind: "built",
    rootTree: j.rootTree,
    listing: j.listing,
    commitFiles: P.commitFiles,
    heldBack: N,
    withheldCounts: ee,
    withheld: Mr(T, x),
    stats: {
      paths: P.commitFiles.size,
      bytes: w.bytesPlanned,
      ms: g() - S
    },
    report: K
  }
}

function reo({
  folder: e,
  realRoot: n,
  repo: r,
  statCache: i,
  start: a,
  agreedOf: c,
  lastSentCommit: s = async () => null,
  ackedOf: d,
  maxBytes: m,
  withheldOf: p,
  anchor: h = async () => null,
  onPass: g,
  now: S = Date.now
}) {
  let y = null,
    k = null;
  return async (T) => {
    let {
      basis: x,
      signal: M
    } = T, R = T.alsoParents ?? [];
    try {
      let D = [];
      if (x === null)
        for (let K of (await d?.() ?? []).slice(0, br)) {
          let H = await r.commitParents(K);
          if (H !== "none" && H !== "unknown") D.push(K)
        }
      let G = await kr(r, [a.pin, ...[...D].reverse(), ...x === null ? [] : [...R, x]]);
      if (G.kind !== "ok") return G.commit !== a.pin ? J("basis_not_held", `${G.commit} is not held here`) : G.kind === "absent" ? J("start_gone", "this folder's starting snapshot for the session is no longer in its local sync store on this machine (removed, cleaned up, or discarded as damaged), and every later snapshot builds on it; only a new cloud session from this folder starts afresh") : J("git_error", "this folder's starting snapshot for the session could not be read back from its local sync store on this machine");
      let W = new Set(G.listings.flatMap((K) => [...K.files.values()].map((H) => H.blobId))),
        z = (await Er(r, G.listings, {
          basis: x,
          acked: x === null ? [] : R
        })).files,
        Y = (x === null ? null : G.listings.at(-1) ?? null)?.leftOut ?? [],
        _ = Y.map(Tr).filter((K) => K.length <= _r).slice(0, sge),
        I = _.length < Y.length,
        F = await s();
      if (F !== null && (k === null || k.worktreeCommit !== F)) {
        let K = await r.listingOf(F),
          H = await r.commitParents(F);
        if (K.kind !== "ok") return J("git_error", "what this machine last sent could not be read back from its local store");
        k = {
          files: K.listing.files,
          basis: Array.isArray(H) ? H[2] ?? null : null,
          worktreeCommit: F
        }
      }
      let P = k?.files ?? new Map,
        j = c === void 0 ? k !== null && k.basis === x ? new Map([...z, ...P]) : new Map([...P, ...z]) : await c();
      if (j === null) return J("git_error", "what this machine last sent could not be read back");
      let N;
      try {
        N = await h(M)
      } catch (K) {
        if (Mt(M)) return J("aborted", "the sync point was abandoned");
        let H = v(K);
        return t(`folder sync: tree anchor not opened (${H??l(K)})`), yr.has(H ?? "") ? J("unreadable", "the folder itself could not be opened for reading (was it moved, renamed or replaced by a link, or were its permissions changed?)") : J("momentary", H === void 0 ? "opening the folder failed (no error code)" : `opening the folder failed with ${H}`)
      }
      if (N !== null && "unavailable" in N) return J("anchor_unavailable", N.unavailable);
      let ee = N;
      try {
        let K = await bir({
          folder: e,
          realRoot: n,
          repo: r,
          statCache: i,
          known: j,
          peer: z,
          peerHasBlob: (re) => W.has(re),
          budgetBytes: m,
          withheldOf: p(),
          through: ee,
          signal: M,
          now: S
        });
        if (K.kind === "refused") return J(K.reason, K.detail);
        g?.(K.report);
        let H = [a.pin, ...x === null ? [] : [x, ...R]],
          Q = [K.rootTree, ...H].join(" "),
          le = y !== null && y.key === Q ? y : await xr(r, K.rootTree, a.pin, H.slice(1), S);
        if (le === null) return J("git_error", "the snapshot commits could not be written");
        return y = {
          key: Q,
          ...le
        }, k = {
          files: K.commitFiles,
          basis: x,
          worktreeCommit: le.worktreeCommit
        }, await r.store.flush(), {
          kind: "snapshot",
          snapshot: {
            head: a.pin,
            branch: zeo,
            indexCommit: le.indexCommit,
            worktreeCommit: le.worktreeCommit,
            withheld: K.withheld,
            ..._.length > 0 && {
              setAside: _
            },
            ...I && {
              setAsideTruncated: !0
            },
            ...Y.length > 0 && {
              setAsideNames: Y.map((re) => re.directory === "" ? re.name : `${re.directory}/${re.name}`)
            },
            stats: K.stats
          }
        }
      } finally {
        await ee?.close()
      }
    } catch (D) {
      if (Mt(M)) return J("aborted", "the sync point was abandoned");
      return t(`folder sync: snapshot failed: ${String(D)}`), J("git_error", "this folder could not be written into its local store")
    }
  }
}

function Sr(e) {
  if (e.includes("\uFFFD")) return "name_not_utf8";
  let n = e.split("/"),
    r = n.at(-1) ?? "";
  if (Ee(r)) return "gitmodules";
  if (_e(r)) return "gitattributes";
  return n.some((i, a) => ke({
    name: i,
    kind: a < n.length - 1 ? "directory" : "file",
    id: "1".repeat(40)
  }, "sha1") !== null) ? "name_refused_by_git" : null
}

function J(e, n) {
  return {
    kind: "refused",
    reason: e,
    detail: n
  }
}

function wr(e) {
  return O() !== "windows" && (e & mr) !== 0 ? fr : ur
}
async function kr(e, n) {
  let r = [];
  for (let i of n) {
    let a = await e.listingOf(i);
    switch (a.kind) {
      case "ok":
        r.push(a.listing);
        break;
      case "absent":
        return {
          kind: "absent", commit: i
        };
      case "unreadable":
      case "too_large":
        return {
          kind: "unreadable", commit: i
        };
      default: {
        let c = a;
        return {
          kind: "unreadable",
          commit: i
        }
      }
    }
  }
  return {
    kind: "ok",
    listings: r
  }
}

function je(e) {
  let n = e.at(-1);
  return {
    files: n?.files ?? new Map,
    leftOut: n?.leftOut ?? []
  }
}
async function Er(e, n, {
  basis: r,
  acked: i
}) {
  if (r === null || i.length === 0) return je(n);
  for (let [a, c] of i.entries())
    if (await e.isAncestor(c, r) === !1) {
      let s = n[1 + a];
      return s === void 0 ? je(n) : {
        files: s.files,
        leftOut: s.leftOut
      }
    } return je(n)
}
var _r = 2048;

function Tr(e) {
  return (e.directory === "" ? "" : Buffer.from(`${e.directory}/`, "utf8").toString("hex")) + e.nameBytes.toLowerCase()
}

function Or(e, n) {
  let r = (d) => n instanceof Map || n instanceof Set ? n.has(d) : !1,
    i = new Set;
  for (let d of e.keys())
    for (let m = d.indexOf("/"); m >= 0; m = d.indexOf("/", m + 1)) i.add(d.slice(0, m));
  let a = [],
    c = new Map,
    s = [];
  for (let [d, m] of e) {
    if (i.has(d)) {
      if (r(d)) s.push(`${d}/`), c.set(d, m);
      else a.push(d);
      continue
    }
    c.set(d, m)
  }
  if (s.length > 0) {
    for (let d of [...c.keys()])
      if (s.some((m) => d.startsWith(m))) c.delete(d), a.push(d)
  }
  return {
    files: c,
    dropped: a.toSorted()
  }
}
async function xr(e, n, r, i, a) {
  let c = Math.floor(a() / 1000),
    s = await e.writeCommit({
      tree: n,
      parents: [r],
      message: xt,
      whenUnix: c
    });
  if (!s.ok) return null;
  let d = await e.writeCommit({
    tree: n,
    parents: L([r, s.id, ...i]),
    message: xt,
    whenUnix: c
  });
  return d.ok ? {
    indexCommit: s.id,
    worktreeCommit: d.id
  } : null
}
async function Rr({
  candidates: e,
  folder: n,
  realRoot: r,
  statCache: i,
  through: a,
  signal: c
}) {
  let s = 0,
    d = Ms(gr, async (p) => {
      let h = p.ctimeMs !== void 0 && p.ino !== void 0,
        g = {
          size: p.size,
          mtimeMs: p.mtimeMs,
          ctimeMs: p.ctimeMs ?? 0,
          mode: p.mode,
          ino: p.ino ?? 0
        },
        S = h ? i.lookup(p.path, g) : null;
      if (S !== null) return {
        kind: "file",
        file: {
          stat: p,
          blobId: S,
          kept: null
        },
        hashed: !1
      };
      if (Mt(c)) return {
        kind: "skip",
        path: p.path,
        reason: "unreadable"
      };
      let y = await L3(n, r, p.path, a);
      if (y.kind === "skip") return {
        kind: "skip",
        path: p.path,
        reason: y.skipped.reason
      };
      let k = ex(y.content),
        T = {
          ...p,
          size: y.content.length,
          mode: y.mode
        },
        x = {
          ...g,
          size: T.size,
          mode: y.mode,
          observedAtMs: p.observedAtMs
        };
      if (h) i.remember(p.path, x, k);
      let M = y.content.length <= pr && s + y.content.length <= hr;
      if (M) s += y.content.length;
      return {
        kind: "file",
        file: {
          stat: T,
          blobId: k,
          kept: M ? y.content : null
        },
        hashed: !0
      }
    }),
    m = await Promise.all(e.map(d));
  return {
    files: new Map(m.flatMap((p) => p.kind === "file" ? [
      [p.file.stat.path, p.file]
    ] : [])),
    skipped: m.flatMap((p) => p.kind === "skip" ? [{
      path: p.path,
      reason: p.reason
    }] : []),
    hashed: U(m, (p) => p.kind === "file" && p.hashed)
  }
}

function Br(e, n, r) {
  let i = new Set(e.skipped.filter((g) => !Rt.has(g.reason)).map((g) => g.path)),
    a = [...e.ignoredDirectories, ...e.unlistedDirectories.filter((g) => i.has(g))],
    c = new Set([...i, ...e.ignoredFiles, ...n, ...a]),
    s = new Set([...e.skipped.filter((g) => Rt.has(g.reason)).map((g) => g.path), ...r.keys()]),
    d = e.unlistedDirectories.filter((g) => !i.has(g)),
    m = new Set(a),
    p = new Set(d),
    h = (g, S) => {
      for (let y = S.lastIndexOf("/"); y > 0; y = S.lastIndexOf("/", y - 1))
        if (g.has(S.slice(0, y))) return !0;
      return !1
    };
  return (g) => {
    if (c.has(g) || h(m, g)) return "excluded";
    if (s.has(g) || p.has(g) || h(p, g)) return "transient";
    return !1
  }
}
async function Pr({
  plan: e,
  wanted: n,
  sighted: r,
  known: i,
  peer: a,
  statCache: c,
  peerHasBlob: s,
  repo: d,
  folder: m,
  realRoot: p,
  through: h,
  signal: g
}) {
  let S = new Map(e),
    y = [],
    k = 0,
    T = new Set;
  for (let [M, R] of e) {
    let D = n.get(M);
    if (D === void 0 || D.blobId !== R.blobId) continue;
    if (T.has(R.blobId) || s(R.blobId) || await d.store.hasHere(R.blobId)) continue;
    if (Mt(g)) break;
    let W = r.get(M)?.kept ?? null ?? await Fr(m, p, M, h);
    if (W === null || ex(W) !== R.blobId) {
      c.forget(M);
      let q = i.get(M),
        z = q !== void 0 && (s(q.blobId) || await d.store.hasHere(q.blobId)) ? q : a.get(M);
      if (z === void 0) S.delete(M);
      else S.set(M, {
        mode: z.mode,
        blobId: z.blobId
      });
      y.push({
        path: M,
        bytes: D.bytes
      });
      continue
    }
    await d.store.put("blob", W), T.add(R.blobId), k++
  }
  let x = await d.store.hold([...S.values()].map((M) => M.blobId));
  if (x.length > 0) t(`folder sync: ${String(x.length)} object(s) the tree names could not be secured in this session's store`);
  return {
    commitFiles: S,
    slipped: y,
    blobsStored: k
  }
}
async function Fr(e, n, r, i) {
  let a = await L3(e, n, r, i);
  return a.kind === "read" ? a.content : null
}
var Rt = new Set(["unreadable", "changed", "too_large"]),
  Pt = new Set(["sensitive", "sensitive_tracked"]),
  Ft = new Set(["host_config"]),
  It = new Set(["read_denied", "rules_unreadable"]),
  Ct = new Set(["symlink", "not_regular_file", "nested_repository", "unsafe_name"]);

function Mr(e, n) {
  let r = (i) => e.skipped.filter((a) => i.has(a.reason)).map((a) => a.path);
  return {
    credentialNamed: r(Pt),
    filterAttributed: [],
    hardLinked: r(new Set(["hard_link"])),
    notFiles: [...r(Ct), ...n.map(({
      path: i
    }) => i)].toSorted(),
    readDenied: r(It),
    hostConfig: r(Ft),
    tooLarge: r(new Set(["too_large"]))
  }
}

function Ir(e, n, r) {
  let i = new Map,
    a = (c) => {
      i.set(c, (i.get(c) ?? 0) + 1)
    };
  for (let {
      reason: c
    }
    of e.skipped) {
    let s = Bt(c);
    if (s !== null) a(s)
  }
  for (let {
      reason: c
    }
    of n) a(c);
  for (let c of r.values()) a(Bt(c) ?? "unreadable");
  return i
}

function Bt(e) {
  if (Pt.has(e)) return "credential_name";
  if (Ft.has(e)) return "host_config";
  if (It.has(e)) return "read_denied";
  if (Ct.has(e) || e === "hard_link") return "not_regular_file";
  if (e === "too_large") return "too_large";
  if (e === "unreadable" || e === "changed") return "unreadable";
  return null
}
import {
  join as Ae
} from "path";
var oeo = "trash",
  Cr = "stat-cache.json";
async function D4t(e, n) {
  return jr(gu(await Ru(e, Cg(n))))
}

function jr(e) {
  return Ae(e, gde, Kgn)
}

function seo(e, n) {
  return Ae(e, i4(ci(n)))
}

function L4t(e) {
  return Ae(e, Cr)
}
export {
  l7,
  cCn,
  x4t,
  P4t,
  I4t,
  O4t,
  eeo,
  BWe,
  teo,
  neo,
  M4t,
  bir,
  reo,
  oeo,
  D4t,
  seo,
  L4t
};
