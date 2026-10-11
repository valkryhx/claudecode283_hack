// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Ki } from "B:/~BUN/root/chunk-33tn3weg.js";
import { Jd, Ze } from "B:/~BUN/root/chunk-y04k89s2.js";
import { l, v, B } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { b, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { O } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { Cn } from "B:/~BUN/root/chunk-2swveyqa.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { ct } from "B:/~BUN/root/chunk-tsjnk8ma.js";
import { gu, Ru } from "B:/~BUN/root/chunk-zv4xh2j0.js";
import { gde, Kgn } from "B:/~BUN/root/chunk-339q6g5w.js";
import { ci } from "B:/~BUN/root/chunk-1rjcv085.js";
import { sa, sge, rn, TB, Mt, $Ee, L3, ex, AAr, Tee } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { K7e, Dwt, Lwt, oar, Nwt, sar } from "B:/~BUN/root/chunk-sx5j3dhs.js";
import { i4 } from "B:/~BUN/root/chunk-brgnhyc0.js";
import { zeo as branch, i3t } from "B:/~BUN/root/chunk-fj96ftrb.js";
import { tqe } from "B:/~BUN/root/chunk-3jyp964r.js";
import { Cg } from "B:/~BUN/root/chunk-esqb9g1a.js";
import { Ms } from "B:/~BUN/root/chunk-6492v1c5.js";
import { o, E, ae, C, u, tK, A } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { U, L } from "B:/~BUN/root/chunk-z1enakv9.js";
import { createHash as jt } from "crypto";
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
  return e === "sha256" ? 32 : 20;
}
function l7(e, n) {
  return e.length === 2 * te(n) && rn.test(e) && TB(e);
}
function Z(type, body, r) {
  return {
    id: jt(r).update(`${type} ${body.length}\x00`).update(body).digest("hex"),
    type: type,
    body: body
  };
}
function ke({
  name: name,
  kind: kind,
  id: id
}, i) {
  if (name === "") return "empty_name";
  if (name.includes("/")) return "name_has_slash";
  if (name.includes("\x00")) return "name_has_nul";
  if (!Jd(name)) return "name_not_unicode";
  if (name === "." || name === "..") return "dot_name";
  if (Buffer.byteLength(name) > de) return "name_too_long";
  let a = Dt.test(name) ? me(name) : [];
  if (a.some(Gt)) return "dotgit_name";
  if (kind !== "file" && kind !== "executable" && a.some(He)) return "gitmodules_not_regular_file";
  if ((kind === "directory" || kind === "gitlink") && a.some($e)) return "gitattributes_directory";
  if (!l7(id, i)) return "bad_id";
  return null;
}
function Ee(e) {
  return me(e).some(He);
}
function _e(e) {
  return me(e).some($e);
}
function Gt(e) {
  return e === ".git" || Le.test(e);
}
function He(e) {
  return e === ".gitmodules" || Nt.test(e);
}
function $e(e) {
  return e === ".gitattributes" || vt.test(e);
}
function cCn(e, n) {
  let r = e.some(item => item.nameBytes !== void 0),
    i = new Set();
  for (let m of e) {
    let p = r ? Te(m).toString("latin1") : m.name,
      reason = i.has(p) ? "duplicate_name" : m.nameBytes === void 0 ? ke(m, n) : $t(m, n);
    if (reason !== null) return {
      ok: !1,
      reason: reason,
      name: m.name
    };
    i.add(p);
  }
  if (r) return {
    ok: !0,
    tree: Ht(e, n)
  };
  let a = e.toSorted(Lt),
    c = te(n),
    s = Buffer.alloc(a.reduce((acc, item) => acc + fe[item.kind].length + Buffer.byteLength(item.name) + 2 + c, 0)),
    d = 0;
  for (let m of a) d += s.write(`${fe[m.kind]} ${m.name}\x00`, d), d += s.write(m.id, d, "hex");
  return {
    ok: !0,
    tree: Z("tree", s, n)
  };
}
function Lt(e, n) {
  let r = Math.min(e.name.length, n.name.length);
  for (let i = 0; i < r; i++) {
    let a = we(e.name.charCodeAt(i)) - we(n.name.charCodeAt(i));
    if (a !== 0) return a;
  }
  return Ne(e, r) - Ne(n, r);
}
function Ne({
  name: name_2,
  kind: kind_2
}, r) {
  return r < name_2.length ? we(name_2.charCodeAt(r)) : kind_2 === "directory" ? 47 : 0;
}
function we(e) {
  return e < 55296 ? e : e < 57344 ? e + 8192 : e - 2048;
}
function Ht(e, n) {
  let r = e.map(item => {
    let a = Te(item);
    return {
      sortKey: item.kind === "directory" ? Buffer.concat([a, Buffer.from("/")]) : a,
      bytes: Buffer.concat([Buffer.from(`${fe[item.kind]} `), a, Buffer.from([0]), Buffer.from(item.id, "hex")])
    };
  }).toSorted((i, a) => Buffer.compare(i.sortKey, a.sortKey));
  return Z("tree", Buffer.concat(r.map(item => item.bytes)), n);
}
function $t(e, n) {
  let r = Te(e);
  if (r.length === 0) return "empty_name";
  if (r.length > de) return "name_too_long";
  if (r.includes(0)) return "name_has_nul";
  if (r.includes(47)) return "name_has_slash";
  let {
    name: name_3,
    kind: kind_3,
    id: id_2
  } = e;
  if (name_3 === "." || name_3 === "..") return "dot_name";
  if (me(name_3).some(item => item === ".git" || Le.test(item))) return "dotgit_name";
  if (kind_3 !== "file" && kind_3 !== "executable" && Ee(name_3)) return "gitmodules_not_regular_file";
  if ((kind_3 === "directory" || kind_3 === "gitlink") && _e(name_3)) return "gitattributes_directory";
  if (!l7(id_2, n)) return "bad_id";
  return null;
}
function Te(e) {
  return e.nameBytes === void 0 ? Buffer.from(e.name, "utf8") : Buffer.from(e.nameBytes, "hex");
}
function x4t(e, n) {
  let r = te(n),
    i = [],
    a = new Set(),
    c = new Map(),
    s = 0;
  while (s < e.length) {
    let d = e.indexOf(32, s),
      m = d < 0 ? -1 : e.indexOf(0, d + 1);
    if (d < 0 || m <= d + 1 || m + 1 + r > e.length) return null;
    let p = e.toString("latin1", s, d),
      kind_4 = At.find(item => fe[item] === p);
    if (kind_4 === void 0) return null;
    let g = e.subarray(d + 1, m),
      S = g.toString("latin1"),
      name_4 = g.toString("utf8");
    if (name_4 === "." || name_4 === ".." || name_4.includes("/") || a.has(S)) return null;
    a.add(S);
    let k = {
      name: name_4,
      kind: kind_4,
      id: e.toString("hex", m + 1, m + 1 + r)
    };
    if (!Buffer.from(name_4, "utf8").equals(g)) k.nameIssue = "not_utf8", k.nameBytes = g.toString("hex");
    let T = c.get(name_4);
    if (T === void 0) c.set(name_4, k);else {
      for (let x of [T, k]) x.nameIssue = "same_text_as_another", x.nameBytes ??= Buffer.from(x.name, "utf8").toString("hex");
      k.nameBytes = g.toString("hex");
    }
    i.push(k), s = m + 1 + r;
  }
  return i;
}
function We({
  tree: tree,
  parents: parents,
  author: author,
  committer: committer,
  message: message
}, c) {
  if (![tree, ...parents].every(item => l7(item, c))) return {
    ok: !1,
    reason: "bad_id"
  };
  if (!ze(author) || !ze(committer)) return {
    ok: !1,
    reason: "bad_signature"
  };
  if (message.includes("\x00")) return {
    ok: !1,
    reason: "nul_in_message"
  };
  let s = [`tree ${tree}`, ...parents.map(item => `parent ${item}`), `author ${Ge(author)}`, `committer ${Ge(committer)}`, "", message].join(`
`);
  return {
    ok: !0,
    commit: Z("commit", Buffer.from(s), c)
  };
}
function P4t(e, n) {
  let [r = "", ...i] = e.toString("latin1").split(`
`),
    tree_2 = ve(r, "tree", n),
    c = i.findIndex(item => !item.startsWith("parent ")),
    parents_2 = i.slice(0, c < 0 ? i.length : c).map(item => ve(item, "parent", n));
  return tree_2 !== null && parents_2.every(item => item !== null) ? {
    tree: tree_2,
    parents: parents_2
  } : null;
}
function ve(e, n, r) {
  let i = e.startsWith(`${n} `) ? e.slice(n.length + 1) : "";
  return i.length === 2 * te(r) && rn.test(i) ? i : null;
}
function ze({
  name: name_5,
  email: email,
  unixSeconds: unixSeconds,
  utcOffsetMinutes: utcOffsetMinutes
}) {
  return name_5 !== "" && !De.test(name_5) && !De.test(email) && Number.isSafeInteger(unixSeconds) && unixSeconds >= 0 && Number.isInteger(utcOffsetMinutes) && Math.abs(utcOffsetMinutes) <= zt;
}
function Ge({
  name: name_6,
  email: email_2,
  unixSeconds: unixSeconds_2,
  utcOffsetMinutes: utcOffsetMinutes_2
}) {
  let a = Math.abs(utcOffsetMinutes_2),
    c = String(Math.floor(a / 60) * 100 + a % 60);
  return `${name_6} <${email_2}> ${unixSeconds_2} ${utcOffsetMinutes_2 < 0 ? "-" : "+"}${c.padStart(4, "0")}`;
}
function me(e) {
  return e.split("\\").map(item => Ki(Ze(item, ":")));
}
function Ye(e, n) {
  let r = Array.from({
    length: n.length + 1
  }, (i, a) => `${n.slice(0, a)}~[1-9]\\d{${6 - a}}`);
  return new RegExp(`^(?:${e}~\\d+|${r.join("|")})$`);
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
  store: store,
  identity: identity
}) {
  let objectFormat = store.objectFormat,
    i = new Map(),
    a = new Map(),
    c = new Map(),
    built = new Map(),
    pass = 0;
  async function m(k) {
    let T = await store.get(k);
    if (T.kind !== "ok") return T.kind === "absent" ? {
      kind: "absent"
    } : {
      kind: "unreadable"
    };
    let x = T.object.type === "commit" ? P4t(T.object.body, objectFormat) : null;
    return x === null ? {
      kind: "unreadable"
    } : {
      kind: "ok",
      ...x
    };
  }
  async function p(k) {
    let T = await store.get(k);
    if (T.kind !== "ok") return T.kind === "absent" ? {
      kind: "absent"
    } : {
      kind: "unreadable"
    };
    let entries = T.object.type === "tree" ? x4t(T.object.body, objectFormat) : null;
    return entries === null ? {
      kind: "unreadable"
    } : {
      kind: "ok",
      entries: entries
    };
  }
  async function h(k) {
    let listing = Oe(i, k);
    if (listing !== void 0) return {
      kind: "ok",
      listing: listing
    };
    let files = new Map(),
      trees = new Map(),
      leftOut = [],
      D = new Map(),
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
        V = Y.entries, D.set(z.id, V);
      }
      if (files.size + trees.size + W.length + leftOut.length + V.length > xe) return {
        kind: "too_large"
      };
      trees.set(z.path, z.id);
      for (let Y of V) {
        if (Y.nameIssue !== void 0) {
          let nameBytes = Y.nameBytes ?? Buffer.from(Y.name, "utf8").toString("hex");
          if (nameBytes.length / 2 > de) return {
            kind: "unreadable",
            id: z.id,
            at: z.path
          };
          if (G += z.path.length + 1 + Y.name.length + nameBytes.length, G > pe) return {
            kind: "too_large"
          };
          leftOut.push({
            directory: z.path,
            name: Y.name,
            nameBytes: nameBytes,
            kind: Y.kind,
            id: Y.id,
            reason: Y.nameIssue === "not_utf8" ? "name_not_utf8" : "name_same_text_as_another"
          });
          continue;
        }
        if (Buffer.byteLength(Y.name) > de) return {
          kind: "unreadable",
          id: z.id,
          at: z.path
        };
        let path = z.path === "" ? Y.name : z.path + "/" + Y.name;
        if (G += path.length, G > pe) return {
          kind: "too_large"
        };
        if (Y.kind === "directory") W.push({
          id: Y.id,
          path: path,
          depth: z.depth + 1
        });else files.set(path, {
          mode: Xe[Y.kind],
          blobId: Y.id
        });
      }
    }
    let listing_2 = {
      rootTree: k,
      files: files,
      trees: trees,
      leftOut: leftOut
    };
    return ge(i, k, listing_2, Ue), {
      kind: "ok",
      listing: listing_2
    };
  }
  async function g(k, T) {
    let unread = [],
      M = [k];
    for (let R = M.pop(); R !== void 0; R = M.pop()) {
      if (T.has(R)) continue;
      T.add(R);
      let D = await p(R);
      if (D.kind !== "ok") {
        unread.push(R);
        continue;
      }
      for (let G of D.entries) if (G.kind === "directory") M.push(G.id);else if (G.kind !== "gitlink") T.add(G.id);
    }
    return {
      unread: unread
    };
  }
  async function S(k) {
    let reached = new Set(),
      x = new Set();
    for (let M of k) {
      let R = new Set(),
        D = [],
        G = [M];
      for (let W = G.pop(); W !== void 0; W = G.pop()) {
        if (R.has(W)) continue;
        let q = Oe(c, W);
        if (q !== void 0) {
          for (let V of q) R.add(V);
          continue;
        }
        R.add(W);
        let z = await m(W);
        if (z.kind !== "ok") {
          D.push(W);
          continue;
        }
        for (let V of z.parents) G.push(V);
      }
      if (D.length === 0) ge(c, M, R, Yt);
      for (let W of R) reached.add(W);
      for (let W of D) x.add(W);
    }
    return {
      reached: reached,
      unread: [...x]
    };
  }
  async function y(k) {
    let objects = Oe(a, k);
    if (objects !== void 0) return {
      objects: objects,
      unread: []
    };
    let objects_2 = new Set(),
      M = await m(k);
    if (M.kind !== "ok") return {
      objects: objects_2,
      unread: [k]
    };
    let {
      unread: unread_2
    } = await g(M.tree, objects_2);
    if (unread_2.length === 0) ge(a, k, objects_2, Wt);
    return {
      objects: objects_2,
      unread: unread_2
    };
  }
  return {
    store: store,
    async writeTree(k) {
      let T = qt(k);
      if (!T.ok) return T;
      let trees_2 = new Map();
      pass += 1;
      let M = {
          built: built,
          pass: pass
        },
        R = await Ve(T.node, "", trees_2, store, M);
      if (en(built, pass - Ut + 1), !R.ok) return R;
      let listing_3 = {
        rootTree: R.id,
        files: new Map(k),
        trees: trees_2,
        leftOut: []
      };
      return ge(i, R.id, listing_3, Ue), {
        ok: !0,
        rootTree: R.id,
        listing: listing_3
      };
    },
    async writeCommit({
      tree: tree_3,
      parents: parents_3,
      message: message_2,
      whenUnix: M
    }) {
      let R = {
          ...identity,
          unixSeconds: M,
          utcOffsetMinutes: 0
        },
        D = We({
          tree: tree_3,
          parents: parents_3,
          author: R,
          committer: R,
          message: message_2
        }, objectFormat);
      if (!D.ok) return D;
      return {
        ok: !0,
        id: await store.put("commit", D.commit.body)
      };
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
      } : x;
    },
    async treeOf(k) {
      let T = await m(k);
      return T.kind === "ok" ? T.tree : null;
    },
    async objectsToSend({
      tip: tip,
      peerHolds: peerHolds
    }) {
      let x = await S(peerHolds),
        reached_2 = x.reached,
        commits = [],
        trees_3 = [],
        blobs = [],
        missing = [...x.unread],
        q = new Set(missing),
        z = new Set(),
        V = new Set(peerHolds),
        Y = [tip],
        w = [];
      for (let P = Y.shift(); P !== void 0; P = Y.shift()) {
        if (z.has(P)) continue;
        if (reached_2.has(P)) {
          V.add(P);
          continue;
        }
        z.add(P);
        let j = await m(P);
        if (j.kind !== "ok") {
          missing.push(P);
          continue;
        }
        commits.push(P), w.push(j.tree);
        for (let N of j.parents) Y.push(N);
      }
      let _ = new Set();
      for (let P of V) {
        let j = await y(P);
        for (let N of j.objects) _.add(N);
        for (let N of j.unread) if (!q.has(N)) q.add(N), missing.push(N);
      }
      let I = [...w];
      for (let P = I.pop(); P !== void 0; P = I.pop()) {
        if (_.has(P) || z.has(P)) continue;
        z.add(P);
        let j = await p(P);
        if (j.kind !== "ok") {
          missing.push(P);
          continue;
        }
        trees_3.push(P);
        for (let N of j.entries) if (N.kind === "directory") I.push(N.id);else if (N.kind !== "gitlink" && !_.has(N.id) && !z.has(N.id)) if (z.add(N.id), await store.has(N.id)) blobs.push(N.id);else missing.push(N.id);
      }
      let bytesEstimate = [...commits, ...trees_3, ...blobs].reduce((acc, item) => acc + (store.deflatedSize(item) ?? 0) + Kt, Xt);
      return {
        ids: {
          commits: commits,
          trees: trees_3,
          blobs: blobs
        },
        bytesEstimate: bytesEstimate,
        missing: missing
      };
    },
    changedPaths(k, T) {
      let x = new Map();
      for (let [M, before] of k.files) {
        let after = T.files.get(M) ?? null;
        if (after === null || after.mode !== before.mode || after.blobId !== before.blobId) x.set(M, {
          before: before,
          after: after
        });
      }
      for (let [M, after_2] of T.files) if (!k.files.has(M)) x.set(M, {
        before: null,
        after: after_2
      });
      return x;
    },
    async isAncestor(k, T) {
      let x = !1,
        M = new Set(),
        R = [T];
      for (let D = R.pop(); D !== void 0; D = R.pop()) {
        if (D === k) return !0;
        if (M.has(D)) continue;
        M.add(D);
        let G = await m(D);
        if (G.kind === "ok") for (let W of G.parents) R.push(W);else x = !0;
      }
      return x ? "unknown" : !1;
    },
    async commitParents(k) {
      let T = await m(k);
      return T.kind === "ok" ? T.parents : T.kind === "absent" ? "none" : "unknown";
    }
  };
}
function Jt(e) {
  return Vt.find(item => Xe[item] === e) ?? null;
}
function qt(e) {
  let node = {
      entries: new Map()
    },
    r = new Map([["", node]]),
    i = e.size,
    a = 0;
  if (i > xe) return {
    ok: !1,
    reason: "too_large",
    path: ""
  };
  let c = s => {
    let d = r.get(s);
    if (d !== void 0) return d;
    let m = s.lastIndexOf("/"),
      p = c(m < 0 ? "" : s.slice(0, m));
    if (typeof p === "string") return p;
    let h = s.slice(m + 1);
    if (p.entries.has(h)) return "path_conflict";
    if (i += 1, a += s.length, i > xe || a > pe) return "too_large";
    let g = {
      entries: new Map()
    };
    return p.entries.set(h, g), r.set(s, g), g;
  };
  for (let [path_2, d] of e) {
    if (a += path_2.length, a > pe) return {
      ok: !1,
      reason: "too_large",
      path: path_2
    };
    let m = Zt(path_2);
    if (m === "bad_path") return {
      ok: !1,
      reason: "bad_path",
      path: path_2
    };
    if (m - 1 > Ke) return {
      ok: !1,
      reason: "too_large",
      path: path_2
    };
    let p = path_2.lastIndexOf("/"),
      reason_2 = c(p < 0 ? "" : path_2.slice(0, p));
    if (typeof reason_2 === "string") return {
      ok: !1,
      reason: reason_2,
      path: path_2
    };
    let g = path_2.slice(p + 1);
    if (reason_2.entries.has(g)) return {
      ok: !1,
      reason: "path_conflict",
      path: path_2
    };
    reason_2.entries.set(g, d);
  }
  return {
    ok: !0,
    node: node
  };
}
function Zt(e) {
  let n = 0;
  for (let r = 0; r <= e.length; n++) {
    let i = e.indexOf("/", r),
      a = i < 0 ? e.length : i,
      c = e.slice(r, a);
    if (c === "" || c === "." || c === "..") return "bad_path";
    r = a + 1;
  }
  return n;
}
async function Ve(e, n, r, i, a) {
  let c = [];
  for (let [name_7, g] of e.entries) {
    let path_3 = n === "" ? name_7 : n + "/" + name_7;
    if ("entries" in g) {
      let k = await Ve(g, path_3, r, i, a);
      if (!k.ok) return k;
      c.push({
        name: name_7,
        kind: "directory",
        id: k.id
      });
      continue;
    }
    let kind_5 = Jt(g.mode);
    if (kind_5 === null) return {
      ok: !1,
      reason: "bad_mode",
      path: path_3
    };
    c.push({
      name: name_7,
      kind: kind_5,
      id: g.blobId
    });
  }
  let s = Qt(c),
    d = a.built.get(s);
  if (d !== void 0 && (await i.hasHere(d.id))) return a.built.set(s, {
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
  let id_3 = await i.put("tree", m.tree.body);
  return a.built.set(s, {
    id: id_3,
    pass: a.pass
  }), r.set(n, id_3), {
    ok: !0,
    id: id_3
  };
}
function Qt(e) {
  return e.map(({
    name: name_8,
    kind: kind_6,
    id: id_4
  }) => `${name_8.length}:${name_8}${kind_6}:${id_4.length}:${id_4}`).join(`
`);
}
function en(e, n) {
  for (let [r, i] of e) if (i.pass < n) e.delete(r);
}
function Oe(e, n) {
  let r = e.get(n);
  if (r !== void 0) e.delete(n), e.set(n, r);
  return r;
}
function ge(e, n, r, i) {
  e.delete(n), e.set(n, r);
  for (let a of e.keys()) {
    if (e.size <= i) break;
    e.delete(a);
  }
}
import { createHash as qe } from "crypto";
import { promisify as Qe } from "util";
import { deflate as tn, deflateSync as nn, inflate as on, inflateSync as sn } from "zlib";
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
  let r = new Set(),
    i = e.filter(item => r.has(item.id) ? !1 : Boolean(r.add(item.id))),
    a = Buffer.alloc(he);
  a.write(et, 0, "latin1"), a.writeUInt32BE(tt, 4), a.writeUInt32BE(i.length, 8);
  let c = [a],
    s = qe(n).update(a);
  for (let [d, m] of i.entries()) {
    if (d % oe === oe - 1) await be();
    let p = "deflated" in m ? m.size : m.body.length,
      h = "deflated" in m ? m.deflated : await En(m.body);
    for (let g of [yn(nt[m.type], p), h]) c.push(g), s.update(g);
  }
  return Buffer.concat([...c, s.digest()]);
}
async function eeo(e, {
  objectFormat: objectFormat_2,
  maxInflatedBytes: maxInflatedBytes,
  maxObjects: maxObjects
}) {
  try {
    return await gn(Buffer.from(e.buffer, e.byteOffset, e.length), objectFormat_2, maxInflatedBytes, maxObjects);
  } catch (error) {
    return X("malformed", `unexpected: ${String(error)}`);
  }
}
function X(reason_3, detail) {
  return {
    ok: !1,
    reason: reason_3,
    detail: detail
  };
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
    p = new Set(),
    h = he,
    g = 0;
  for (let S = 0; S < c; S++) {
    if (S % oe === oe - 1) await be();
    let y = await pn(e, h, s, a, r - g);
    if (!y.ok) return y;
    if (y.entry.base.kind === "offset" && !p.has(y.entry.base.offset)) return X("malformed", `an offset delta at ${h} does not point at an object`);
    p.add(h), m.push(y.entry), h = y.next, g += y.inflatedBytes;
  }
  if (h !== s) return X("malformed", "bytes between the last object and the trailer");
  return bn(m, n, r - g);
}
async function pn(e, offset, r, i, a) {
  if (offset >= r) return X("truncated", "the header counts more objects than the pack holds");
  let c = e.readUInt8(offset),
    s = c >> 4 & 7,
    d = Re(e, offset + 1, r, (c & 128) !== 0);
  if (d === null) return X("malformed", `an unreadable size at ${offset}`);
  let inflatedBytes = (c & 15) + 16 * d.value,
    p = d.next,
    base,
    type_2 = an.find(item => nt[item] === s);
  if (type_2 !== void 0) base = {
    kind: "none",
    type: type_2
  };else if (s === ln) {
    let y = Sn(e, p, r);
    if (y === null || y.value > offset - he) return X("malformed", `an offset delta at ${offset} points outside the pack`);
    base = {
      kind: "offset",
      offset: offset - y.value
    }, p = y.next;
  } else if (s === dn) {
    if (p + i > r) return X("malformed", `a delta base id at ${offset} runs past the pack`);
    base = {
      kind: "id",
      id: e.toString("hex", p, p + i)
    }, p += i;
  } else return X("malformed", `object type ${s} at ${offset}`);
  if (inflatedBytes > a) return X("over_budget", "the objects inflate past the budget");
  let S = await Be(e.subarray(p, r), inflatedBytes);
  if (!S.ok) return X(S.reason, `${S.detail} at ${offset}`);
  return {
    ok: !0,
    entry: {
      offset: offset,
      data: S.data,
      base: base
    },
    next: p + S.consumed,
    inflatedBytes: inflatedBytes
  };
}
async function Be(e, n) {
  let r = {
      info: !0,
      maxOutputLength: Math.max(1, n),
      chunkSize: Math.max(it, n + 1)
    },
    i;
  try {
    i = n < ot ? sn(e, r) : await mn(e, r);
  } catch (error) {
    return v(error) === "Z_BUF_ERROR" ? X("truncated", "a zlib stream ends early") : X("malformed", "a zlib stream does not inflate to its declared size");
  }
  if (!hn(i) || i.buffer.length !== n) return X("malformed", "a zlib stream is shorter than its declared size");
  return {
    ok: !0,
    data: i.buffer,
    consumed: i.engine.bytesWritten
  };
}
function hn(e) {
  return typeof e === "object" && e !== null && "buffer" in e && Buffer.isBuffer(e.buffer) && "engine" in e && typeof e.engine === "object" && e.engine !== null && "bytesWritten" in e.engine && typeof e.engine.bytesWritten === "number";
}
async function bn(e, n, r) {
  let i = new Map(),
    a = new Map();
  for (let h of e) if (h.base.kind === "offset") {
    let g = i.get(h.base.offset) ?? [];
    g.push(h), i.set(h.base.offset, g);
  } else if (h.base.kind === "id") {
    let g = a.get(h.base.id) ?? [];
    g.push(h), a.set(h.base.id, g);
  }
  let c = new Map(),
    s = new Map(),
    d = e.filter(item => item.base.kind === "none"),
    m = r;
  for (let h = d.pop(); h !== void 0; h = d.pop()) {
    if (c.size % oe === oe - 1) await be();
    let g;
    if (h.base.kind === "none") g = Z(h.base.type, h.data, n);else {
      let S = h.base.kind === "offset" ? c.get(h.base.offset) : s.get(h.base.id);
      if (S === void 0) return X("malformed", `a delta at ${h.offset} was ready before its base`);
      let y = wn(h.data);
      if (y === null) return X("malformed", `an unreadable delta header at ${h.offset}`);
      if (y.resultSize > m) return X("over_budget", "the objects inflate past the budget");
      m -= y.resultSize;
      let k = kn(S.body, h.data, y);
      if (k === null) return X("malformed", `a delta at ${h.offset} does not apply to its base`);
      g = Z(S.type, k, n);
    }
    if (c.set(h.offset, g), !s.has(g.id)) s.set(g.id, g);
    for (let S of i.get(h.offset) ?? []) d.push(S);
    for (let S of a.get(g.id) ?? []) d.push(S);
    i.delete(h.offset), a.delete(g.id);
  }
  let objects_3 = e.map(item => c.get(item.offset));
  if (!objects_3.every(item => item !== void 0)) return X("thin_pack", "a delta rests on an object the pack does not carry");
  return {
    ok: !0,
    objects: objects_3
  };
}
function yn(e, n) {
  let r = [];
  for (let i = Math.floor(n / 16); i > 0; i = Math.floor(i / 128)) r.push(i % 128);
  return Buffer.from([e << 4 | n % 16 | (r.length > 0 ? 128 : 0), ...r.map((item, index) => index < r.length - 1 ? item | 128 : item)]);
}
function Re(e, n, r, i) {
  let value = 0,
    c = 1,
    next = n,
    d = i;
  for (let m = 0; d; m++) {
    let p = e[next];
    if (p === void 0 || next >= r || m >= rt) return null;
    value += (p & 127) * c, c *= 128, next += 1, d = (p & 128) !== 0;
  }
  return {
    value: value,
    next: next
  };
}
function Sn(e, n, r) {
  let value_2 = -1,
    next_2 = n;
  for (let c = 0;; c++) {
    let s = e[next_2];
    if (s === void 0 || next_2 >= r || c >= rt) return null;
    if (value_2 = (value_2 + 1) * 128 + (s & 127), next_2 += 1, (s & 128) === 0) return {
      value: value_2,
      next: next_2
    };
  }
}
function wn(e) {
  let n = Re(e, 0, e.length, !0),
    r = n === null ? null : Re(e, n.next, e.length, !0);
  return n === null || r === null ? null : {
    baseSize: n.value,
    resultSize: r.value,
    next: r.next
  };
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
      continue;
    }
    let d = 0,
      m = 0;
    for (let h = 0; h < 7; h++) {
      if ((s & 1 << h) === 0) continue;
      let g = n[c];
      if (g === void 0) return null;
      if (c += 1, h < 4) d += g * 2 ** (8 * h);else m += g * 2 ** (8 * (h - 4));
    }
    let p = m === 0 ? cn : m;
    if (d + p > e.length || a + p > i.length) return null;
    e.copy(i, a, d, d + p), a += p;
  }
  return a === i.length ? i : null;
}
async function En(e) {
  let n = {
    chunkSize: Math.min(un, Math.max(it, e.length))
  };
  return e.length < ot ? nn(e, n) : await fn(e, n);
}
function be() {
  return new Promise(e => setImmediate(e));
}
import { randomBytes as _n } from "crypto";
import { link as Tn, lstat as ye, mkdir as On, open as ue, readdir as Pe, realpath as se, rm as xn, unlink as ft } from "fs/promises";
import { join as ne } from "path";
import { promisify as Rn } from "util";
import { deflate as Bn, deflateSync as Pn } from "zlib";
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
  mode = 448,
  Ln = Rn(Bn);
function Hn(e, n) {
  return pt.test(n) ? ne(e, n, Ie) : null;
}
async function teo({
  root: root,
  sessionId: sessionId,
  budgetBytes: budgetBytes,
  objectFormat: objectFormat_3 = "sha1",
  signal: signal
}) {
  let c = Hn(root, sessionId);
  if (c === null) return {
    kind: "unreadable",
    detail: "not an id a directory can be named after"
  };
  let ownDirectory;
  try {
    if (await On(c, {
      recursive: !0,
      mode: mode
    }), ownDirectory = ne(await se(root), sessionId, Ie), (await se(c)) !== ownDirectory) return {
      kind: "unreadable",
      detail: "the session directory is not a plain directory under the root"
    };
  } catch (error) {
    return {
      kind: "unreadable",
      detail: "cannot create the session directory: " + String(error)
    };
  }
  let segments = await Wn(root, sessionId);
  if (segments === null) return {
    kind: "unreadable",
    detail: "cannot list the root directory"
  };
  let index_2 = new Map(),
    adopted = new Set();
  for (let S of segments) {
    if (signal?.aborted) return {
      kind: "unreadable",
      detail: "aborted"
    };
    await Kn(S, objectFormat_3, index_2, adopted);
  }
  t("dir-sync object store: opened with " + String(index_2.size) + " objects in " + String(segments.length) + " segments, " + String(segments.reduce((acc, item) => acc + item.bytes, 0)) + " bytes on disk");
  let h = 0;
  for (let S of segments) if (S.own) h = Math.max(h, Number(mt.exec(S.name)?.[2] ?? 0));
  let nextSequence = h + 1;
  return {
    kind: "ok",
    store: $n({
      objectFormat: objectFormat_3,
      budgetBytes: budgetBytes,
      ownDirectory: ownDirectory,
      sessionId: sessionId,
      nextSequence: nextSequence,
      segments: segments,
      index: index_2,
      adopted: adopted
    })
  };
}
function neo({
  objectFormat: objectFormat_4 = "sha1",
  budgetBytes: budgetBytes_2 = Number.POSITIVE_INFINITY
} = {}) {
  let r = new Map();
  function i() {
    let s = 0;
    for (let d of r.values()) s += d.deflated.length;
    return s;
  }
  async function a(s) {
    let object = r.get(s);
    if (object === void 0) return "absent";
    let body_2 = await Se(object.deflated, object.size);
    return body_2 !== null && Z(object.type, body_2, objectFormat_4).id === s ? {
      object: object,
      body: body_2
    } : "corrupt";
  }
  return {
    store: {
      objectFormat: objectFormat_4,
      has: s => Promise.resolve(r.has(s)),
      hasHere: s => Promise.resolve(r.has(s)),
      async get(s) {
        let kind_7 = await a(s);
        return kind_7 === "absent" || kind_7 === "corrupt" ? {
          kind: kind_7
        } : {
          kind: "ok",
          object: {
            type: kind_7.object.type,
            body: kind_7.body
          }
        };
      },
      async getDeflated(s) {
        let kind_8 = await a(s);
        return kind_8 === "absent" || kind_8 === "corrupt" ? {
          kind: kind_8
        } : {
          kind: "ok",
          object: kind_8.object
        };
      },
      deflatedSize: s => r.get(s)?.deflated.length ?? null,
      async put(type_3, d) {
        let {
          id: id_5
        } = Z(type_3, d, objectFormat_4);
        if (!r.has(id_5)) r.set(id_5, {
          id: id_5,
          type: type_3,
          size: d.length,
          deflated: await Et(d)
        });
        return id_5;
      },
      async putDeflated(id_6, type_4, size, deflated) {
        if (r.has(id_6)) return !0;
        let h = l7(id_6, objectFormat_4) ? await Se(deflated, size) : null;
        if (h === null || Z(type_4, h, objectFormat_4).id !== id_6) return !1;
        return r.set(id_6, {
          id: id_6,
          type: type_4,
          size: size,
          deflated: deflated
        }), !0;
      },
      hold: s => Promise.resolve(s.filter(item => !r.has(item))),
      stats: () => Promise.resolve({
        objects: r.size,
        bytes: i(),
        sessionBytes: i(),
        budgetBytes: budgetBytes_2,
        segments: 0
      }),
      wouldExceed: s => i() + s > budgetBytes_2,
      flush: () => Promise.resolve(),
      close: () => Promise.resolve()
    },
    objects: () => [...r.values()]
  };
}
function $n({
  objectFormat: objectFormat_5,
  budgetBytes: budgetBytes_3,
  ownDirectory: ownDirectory_2,
  sessionId: sessionId_2,
  nextSequence: nextSequence_2,
  segments: segments_2,
  index: index_3,
  adopted: adopted_2
}) {
  let m = Promise.resolve(),
    p = null,
    h = !1,
    g = !1,
    S = !1,
    y = new Set(),
    k = new Set();
  function T(w) {
    let _ = m.then(w, w);
    return m = _.catch(() => {
      return;
    }), _;
  }
  function x(w, _) {
    let I = index_3.get(w);
    if (I === void 0) return;
    if (I === _) {
      if (_.next === null) index_3.delete(w);else index_3.set(w, _.next);
      return;
    }
    for (let F = I; F.next !== null; F = F.next) if (F.next === _) {
      F.next = _.next;
      return;
    }
  }
  function M(w, _) {
    let I = index_3.get(w);
    if (I === void 0 || I === _) return;
    for (let F = I; F.next !== null; F = F.next) if (F.next === _) {
      F.next = _.next, _.next = I, index_3.set(w, _);
      return;
    }
  }
  async function R(w) {
    if (S) return "absent";
    let _ = [];
    for (let P = index_3.get(w) ?? null; P !== null; P = P.next) _.push(P);
    let I = !1;
    for (let entry of _) {
      if (entry.segment.vanished) continue;
      let deflated_2 = await Jn(entry);
      if (deflated_2 === "vanished") qn(entry.segment, index_3);else if (deflated_2 === "unreadable") I = !0;else {
        let body_3 = await Se(deflated_2, entry.size);
        if (body_3 !== null && Z(entry.type, body_3, objectFormat_5).id === w) {
          if (y.delete(w), entry.segment.own && !entry.kept) k.add(w);
          return M(w, entry), {
            entry: entry,
            deflated: deflated_2,
            body: body_3
          };
        }
        I = !0, x(w, entry);
      }
    }
    let F = index_3.get(w);
    if (F !== void 0 && !_.includes(F)) return R(w);
    if (I && F !== void 0) y.add(w);
    return I ? "corrupt" : "absent";
  }
  async function D() {
    if (h) throw Error("this session can append nothing more in this process: its segment could not be made or mended");
    if (p ??= await Un(ownDirectory_2, sessionId_2, Math.min(nextSequence_2, Dn), objectFormat_5), p === null) throw h = !0, Error("cannot create a segment to append to");
    if (!segments_2.includes(p.segment)) segments_2.unshift(p.segment), g = !0;
    return p;
  }
  function G(w) {
    let _ = index_3.get(w);
    return _ !== void 0 && _.segment.own && !_.kept;
  }
  function W(w) {
    for (let _ = index_3.get(w) ?? null; _ !== null; _ = _.next) if (_.segment.own && !_.kept) return !0;
    return !1;
  }
  function q(id_7) {
    return T(async () => {
      if (S || adopted_2.has(id_7) || G(id_7)) return;
      let _ = await D(),
        I = at({
          type: "adopt",
          size: 0,
          deflatedSize: 0,
          id: id_7
        });
      try {
        await Me(_.handle, I, _.offset);
      } catch (error) {
        throw await _.handle.truncate(_.offset).catch(() => {
          h = !0;
        }), error;
      }
      _.offset += I.length, _.segment.bytes = _.offset, adopted_2.add(id_7);
    });
  }
  function z(id_8, type_5, size_2, F, kept = !1) {
    return T(async () => {
      if (S) throw Error("the object store is closed");
      if (index_3.get(id_8)?.segment.own && !y.has(id_8)) return;
      if (F.length > BWe) throw Error("an object larger than the store takes");
      let j = await D(),
        N = at({
          type: type_5,
          kept: kept,
          size: size_2,
          deflatedSize: F.length,
          id: id_8
        });
      try {
        await Me(j.handle, Buffer.concat([N, F]), j.offset);
      } catch (error) {
        throw await j.handle.truncate(j.offset).catch(() => {
          h = !0;
        }), error;
      }
      let dataOffset = j.offset + N.length;
      j.offset = dataOffset + F.length, j.segment.bytes = j.offset, index_3.set(id_8, {
        segment: j.segment,
        type: type_5,
        size: size_2,
        dataOffset: dataOffset,
        deflatedSize: F.length,
        kept: kept,
        next: index_3.get(id_8) ?? null
      }), y.delete(id_8), k.add(id_8);
    });
  }
  async function hold(w) {
    if (S) return [...w];
    let _ = [],
      I = new Map();
    for (let F of w) {
      let P = index_3.get(F);
      if (P === void 0) {
        _.push(F);
        continue;
      }
      if (P.segment.own && !y.has(F)) continue;
      let j = await R(F);
      if (j === "absent" || j === "corrupt") _.push(F);else if (!j.entry.segment.secured) {
        let N = I.get(j.entry.segment) ?? [];
        N.push(F), I.set(j.entry.segment, N);
      }
    }
    for (let [F, P] of I) {
      if (!F.name.startsWith(sessionId_2 + ".") && (await Zn(F, ownDirectory_2))) {
        g = !0;
        continue;
      }
      for (let j of P) {
        let N = await R(j);
        if (N === "absent" || N === "corrupt") _.push(j);else if (!N.entry.segment.secured) try {
          await z(j, N.entry.type, N.entry.size, N.deflated, !0);
        } catch (error) {
          t("dir-sync object store: cannot carry a copy over: " + String(error)), _.push(j);
        }
      }
    }
    return _;
  }
  function Y(w) {
    let _ = new Map();
    for (let F of segments_2) if (!F.vanished && w(F)) _.set(F.inode, F.bytes);
    let I = 0;
    for (let F of _.values()) I += F;
    return I;
  }
  return {
    objectFormat: objectFormat_5,
    has: w => Promise.resolve(!S && index_3.has(w)),
    hasHere: w => Promise.resolve(!S && !y.has(w) && (W(w) || adopted_2.has(w) && index_3.has(w))),
    async get(w) {
      let kind_9 = await R(w);
      return kind_9 === "absent" || kind_9 === "corrupt" ? {
        kind: kind_9
      } : {
        kind: "ok",
        object: {
          type: kind_9.entry.type,
          body: kind_9.body
        }
      };
    },
    async getDeflated(id_9) {
      let kind_10 = await R(id_9);
      return kind_10 === "absent" || kind_10 === "corrupt" ? {
        kind: kind_10
      } : {
        kind: "ok",
        object: {
          id: id_9,
          type: kind_10.entry.type,
          size: kind_10.entry.size,
          deflated: kind_10.deflated
        }
      };
    },
    deflatedSize: w => S ? null : index_3.get(w)?.deflatedSize ?? null,
    async put(w, _) {
      if (S) throw Error("the object store is closed");
      if (_.length > BWe) throw Error("an object larger than the store takes");
      let {
          id: id_10
        } = Z(w, _, objectFormat_5),
        F = index_3.get(id_10);
      if (F === void 0 || y.has(id_10) || (F.segment.own ? !k.has(id_10) && typeof (await R(id_10)) !== "object" : (await hold([id_10])).length > 0)) await z(id_10, w, _.length, await Et(_));else if (!G(id_10)) await q(id_10).catch(P => {
        t("dir-sync object store: adoption not recorded: " + String(P));
      });
      return id_10;
    },
    async putDeflated(w, _, I, F) {
      if (S) throw Error("the object store is closed");
      if (!l7(w, objectFormat_5) || !Number.isSafeInteger(I) || I < 0 || I > BWe || F.length > BWe) return !1;
      let P = await Se(F, I);
      if (P === null || Z(_, P, objectFormat_5).id !== w) return !1;
      let j = index_3.get(w);
      if (j !== void 0 && !y.has(w) && (j.segment.own ? typeof (await R(w)) === "object" : (await hold([w])).length === 0)) {
        if (!G(w)) await q(w).catch(N => {
          t("dir-sync object store: adoption not recorded: " + String(N));
        });
        return !0;
      }
      return await z(w, _, I, F), !0;
    },
    hold: hold,
    async stats() {
      return await m, {
        objects: index_3.size,
        bytes: Y(() => !0),
        sessionBytes: Y(w => w.secured),
        budgetBytes: budgetBytes_3,
        segments: new Set(segments_2.filter(item => !item.vanished).map(item => item.inode)).size
      };
    },
    wouldExceed: w => Y(() => !0) + w > budgetBytes_3,
    flush: () => T(async () => {
      if (S) return;
      if (await p?.handle.sync(), g) g = !1, await er(ownDirectory_2);
    }),
    close: () => T(async () => {
      if (S) return;
      S = !0, await p?.handle.sync().catch(() => {
        return;
      }), await p?.handle.close().catch(() => {
        return;
      });
    })
  };
}
async function Wn(e, n) {
  let r, i;
  try {
    i = await se(e), r = (await Pe(e, {
      withFileTypes: !0
    })).filter(item => item.isDirectory() && pt.test(item.name)).map(item => item.name).toSorted((s, d) => Number(d === n) - Number(s === n) || (s < d ? -1 : 1));
  } catch {
    return null;
  }
  await Yn(i);
  let a = [],
    c = new Map();
  for (let s of r) {
    let d = ne(i, s, Ie),
      m,
      p;
    try {
      if ((await se(d)) !== d) continue;
      p = ut(await ye(d, {
        bigint: !0
      }));
      let g = (await Pe(d, {
          withFileTypes: !0
        })).filter(item => item.isFile() && mt.test(item.name)).map(item => item.name).toSorted(),
        S = n + ".";
      m = s === n ? [...g.filter(item => item.startsWith(S)).toReversed(), ...g.filter(item => !item.startsWith(S))] : g;
    } catch (error) {
      if (!B(error)) t("dir-sync object store: cannot list a session directory: " + String(error));
      continue;
    }
    let h = [];
    for (let name_9 of m) {
      let path_4 = ne(d, name_9);
      try {
        let y = await ye(path_4, {
            bigint: !0
          }),
          inode = ce(y);
        if (inode !== "") h.push({
          name: name_9,
          path: path_4,
          inode: inode,
          bytes: Number(y.size)
        });
      } catch {
        continue;
      }
    }
    try {
      if ((await se(d)) !== d || ut(await ye(d, {
        bigint: !0
      })) !== p) continue;
    } catch {
      continue;
    }
    for (let {
      name: name_10,
      path: path_5,
      inode: inode_2,
      bytes: bytes
    } of h) {
      let T = c.get(inode_2);
      if (T !== void 0) {
        T.paths.push(path_5);
        continue;
      }
      let x = {
        name: name_10,
        paths: [path_5],
        inode: inode_2,
        bytes: bytes,
        secured: s === n,
        own: s === n && name_10.startsWith(n + "."),
        vanished: !1
      };
      c.set(inode_2, x), a.push(x);
    }
  }
  return a;
}
async function Yn(e) {
  try {
    let n = (await Pe(e, {
      withFileTypes: !0
    })).filter(item => item.name.startsWith(vn));
    await Promise.all(n.map(item => xn(ne(e, item.name), {
      recursive: !0,
      force: !0
    }).catch(() => {
      return;
    })));
  } catch {}
}
async function Un(e, n, r, i) {
  let name_11 = n + "." + String(r).padStart(An, "0") + "-" + _n(4).toString("hex") + ".seg",
    c = ne(e, name_11),
    handle;
  try {
    handle = await ue(c, "wx", zn);
  } catch (error) {
    return t("dir-sync object store: cannot create a segment: " + String(error)), null;
  }
  try {
    if ((await se(c)) !== c) throw Error("the new segment is not inside the session directory");
    let d = Buffer.concat([ie, Buffer.from([gt, ht[i]])]);
    await Me(handle, d, 0);
    let m = await handle.stat({
      bigint: !0
    });
    return {
      segment: {
        name: name_11,
        paths: [c],
        inode: ce(m),
        bytes: d.length,
        secured: !0,
        own: !0,
        vanished: !1
      },
      handle: handle,
      offset: d.length
    };
  } catch (error) {
    return t("dir-sync object store: cannot write a new segment: " + String(error)), await handle.close().catch(() => {
      return;
    }), await ft(c).catch(() => {
      return;
    }), null;
  }
}
async function Me(e, n, r) {
  let i = 0;
  while (i < n.length) {
    let {
      bytesWritten: bytesWritten
    } = await e.write(n, i, n.length - i, r + i);
    if (bytesWritten <= 0) throw Error("the segment file accepted no bytes");
    i += bytesWritten;
  }
}
async function Kn(segment, n, r, i) {
  let a = await kt(segment);
  if (a === "vanished" || a === "unreadable") return;
  let c = te(n),
    s = Buffer.alloc(0),
    d = 0,
    m = 0;
  async function p(h, g) {
    if (m >= d && m + g <= d + s.length) return s.subarray(m - d, m - d + g);
    let S = Math.min(Math.max(g, In), segment.bytes - m);
    if (S < g) return null;
    let y = Buffer.alloc(S),
      k = 0;
    while (k < S) {
      let {
        bytesRead: bytesRead
      } = await h.read(y, k, S - k, m + k);
      if (bytesRead === 0) break;
      k += bytesRead;
    }
    return s = y.subarray(0, k), d = m, k >= g ? s.subarray(0, g) : null;
  }
  try {
    let h = await p(a, st);
    if (h === null || !h.subarray(0, ie.length).equals(ie) || h[ie.length] !== gt || h[ie.length + 1] !== ht[n]) return;
    m = st;
    while (m < segment.bytes) {
      let g = Math.min(Mn, segment.bytes - m),
        S = await p(a, g),
        y = S === null ? null : Vn(S, c);
      if (y === null || m + y.headerBytes + y.deflatedSize > segment.bytes) return;
      let dataOffset_2 = m + y.headerBytes;
      if (y.type === "adopt") {
        if (segment.own) i.add(y.id);
      } else Xn(r, y.id, {
        segment: segment,
        type: y.type,
        size: y.size,
        dataOffset: dataOffset_2,
        deflatedSize: y.deflatedSize,
        kept: y.kept,
        next: null
      });
      m = dataOffset_2 + y.deflatedSize;
    }
  } catch (error) {
    t("dir-sync object store: a segment could not be scanned whole: " + String(error));
  } finally {
    await a.close().catch(() => {
      return;
    });
  }
}
function Xn(e, n, r) {
  let i = e.get(n);
  if (i === void 0) {
    e.set(n, r);
    return;
  }
  let a = i,
    c = 1;
  while (a.next !== null) a = a.next, c += 1;
  if (c >= Nn) return;
  a.next = r;
}
function Vn(e, n) {
  if (e.length < 2 || e[0] !== bt) return null;
  let r = (e[1] ?? 0) & ~Fe,
    kept_2 = ((e[1] ?? 0) & Fe) !== 0,
    type_6 = r === St ? kept_2 ? void 0 : "adopt" : Fn.find(item => yt[item] === r),
    c = type_6 === void 0 ? null : dt(e, 2),
    s = c === null ? null : dt(e, c.next);
  if (type_6 === void 0 || c === null || s === null || c.value > BWe || s.value > BWe || type_6 === "adopt" && (c.value !== 0 || s.value !== 0) || s.next + n > e.length) return null;
  return {
    type: type_6,
    kept: kept_2,
    size: c.value,
    deflatedSize: s.value,
    id: e.toString("hex", s.next, s.next + n),
    headerBytes: s.next + n
  };
}
function at({
  type: type_7,
  kept: kept_3 = !1,
  size: size_3,
  deflatedSize: deflatedSize,
  id: id_11
}) {
  return Buffer.concat([Buffer.from([bt, (type_7 === "adopt" ? St : yt[type_7]) | (kept_3 ? Fe : 0)]), lt(size_3), lt(deflatedSize), Buffer.from(id_11, "hex")]);
}
function lt(e) {
  let n = [],
    r = e;
  do {
    let i = r % 128;
    r = Math.floor(r / 128), n.push(r > 0 ? i | 128 : i);
  } while (r > 0);
  return Buffer.from(n);
}
function dt(e, n) {
  let value_3 = 0,
    i = 1;
  for (let a = 0; a < wt; a++) {
    let c = e[n + a];
    if (c === void 0) return null;
    if (value_3 += (c & 127) * i, i *= 128, (c & 128) === 0) return {
      value: value_3,
      next: n + a + 1
    };
  }
  return null;
}
async function kt(e) {
  while (e.paths[0] !== void 0) try {
    let n = await ue(e.paths[0], sa());
    if (ce(await n.stat({
      bigint: !0
    })) !== e.inode) return await n.close().catch(() => {
      return;
    }), "unreadable";
    return n;
  } catch (error) {
    let r = v(error);
    if (r === "EMFILE" || r === "ENFILE") throw error;
    if (r !== "ENOENT") return "unreadable";
    e.paths.shift();
  }
  return e.vanished = !0, "vanished";
}
async function Jn(e) {
  let n = await kt(e.segment);
  if (n === "vanished" || n === "unreadable") return n;
  try {
    let r = Buffer.alloc(e.deflatedSize),
      i = 0;
    while (i < e.deflatedSize) {
      let {
        bytesRead: bytesRead_2
      } = await n.read(r, i, e.deflatedSize - i, e.dataOffset + i);
      if (bytesRead_2 === 0) return "unreadable";
      i += bytesRead_2;
    }
    return r;
  } catch {
    return "unreadable";
  } finally {
    await n.close().catch(() => {
      return;
    });
  }
}
function qn(e, n) {
  e.vanished = !0;
  for (let [r, i] of n) {
    let a = [];
    for (let s = i; s !== null; s = s.next) if (s.segment !== e) a.push(s);
    a.forEach((item, index) => {
      item.next = a[index + 1] ?? null;
    });
    let [c] = a;
    if (c === void 0) n.delete(r);else if (c !== i) n.set(r, c);
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
      await Tn(r, i);
    } finally {
      await a.close().catch(() => {
        return;
      });
    }
  } catch (error) {
    return t("dir-sync object store: cannot link a segment, copying its records instead: " + String(error)), !1;
  }
  try {
    if (ce(await ye(i, {
      bigint: !0
    })) !== e.inode) return await ft(i).catch(() => {
      return;
    }), !1;
  } catch {
    return !1;
  }
  return e.paths.unshift(i), e.secured = !0, await Qn(i), !0;
}
function ut(e) {
  return String(e.dev) + ":" + String(e.ino);
}
function ce(e) {
  return e.isFile() ? String(e.dev) + ":" + String(e.ino) : "";
}
async function Qn(e) {
  try {
    let n = await ue(e, sa());
    try {
      await n.sync();
    } finally {
      await n.close();
    }
  } catch {}
}
async function Se(e, n) {
  let r = await Be(e, n);
  return r.ok && r.consumed === e.length ? r.data : null;
}
async function Et(e) {
  return e.length < jn ? Pn(e) : await Ln(e);
}
async function er(e) {
  try {
    let n = await ue(e, "r");
    try {
      await n.sync();
    } finally {
      await n.close();
    }
  } catch {}
}
import { mkdir as tr, open as nr } from "fs/promises";
import { dirname as rr } from "path";
var version = 1,
  _t = 262144,
  Tt = 67108864,
  or = 384,
  mode_4 = 448,
  sr = f(() => tK([o().min(1), E().int().nonnegative(), E(), E(), E().int().nonnegative(), E().nonnegative(), E(), o().regex(rn)])),
  ar = f(() => u({
    version: A(version),
    entries: C(ae()).max(_t)
  }));
async function M4t(e, {
  maxEntries = _t
} = {}) {
  let r = new Map();
  for (let [i, size_4, mtimeMs, ctimeMs, mode_2, ino, observedAtMs, blobId] of await lr(e)) r.set(i, {
    stat: {
      size: size_4,
      mtimeMs: mtimeMs,
      mode: mode_2,
      observedAtMs: observedAtMs
    },
    ctimeMs: ctimeMs,
    ino: ino,
    blobId: blobId,
    touched: !1
  });
  return {
    lookup(i, a) {
      let c = r.get(i);
      if (c === void 0 || c.stat.size !== a.size || c.stat.mtimeMs !== a.mtimeMs || c.ctimeMs !== a.ctimeMs || c.stat.mode !== a.mode || c.ino !== a.ino || !AAr(c.stat)) return null;
      return c.touched = !0, c.blobId;
    },
    remember(i, {
      size: size_5,
      mtimeMs: mtimeMs_2,
      ctimeMs: ctimeMs_2,
      mode: mode_3,
      ino: ino_2,
      observedAtMs: observedAtMs_2
    }, blobId_2) {
      let stat = {
        size: size_5,
        mtimeMs: mtimeMs_2,
        mode: mode_3,
        observedAtMs: observedAtMs_2
      };
      if (AAr(stat)) r.set(i, {
        stat: stat,
        ctimeMs: ctimeMs_2,
        ino: ino_2,
        blobId: blobId_2,
        touched: !0
      });else r.delete(i);
    },
    forget(i) {
      r.delete(i);
    },
    get size() {
      return r.size;
    },
    async save() {
      let entries_2 = [...r].toSorted(([, c], [, s]) => Number(s.touched) - Number(c.touched)).slice(0, maxEntries).map(([c, {
          stat: stat_2,
          ctimeMs: ctimeMs_3,
          ino: ino_3,
          blobId: blobId_3
        }]) => [c, stat_2.size, stat_2.mtimeMs, ctimeMs_3, stat_2.mode, ino_3, stat_2.observedAtMs, blobId_3]),
        a = b({
          version: version,
          entries: entries_2
        });
      while (Buffer.byteLength(a) > Tt && entries_2.length > 0) entries_2.length = Math.floor(entries_2.length / 2), a = b({
        version: version,
        entries: entries_2
      });
      try {
        return await tr(rr(e), {
          recursive: !0,
          mode: mode_4
        }), await Cn(e, a, or), !0;
      } catch (error) {
        return t("dir-sync stat cache: not saved: " + String(error)), !1;
      }
    }
  };
}
async function lr(e) {
  try {
    let n = await nr(e, sa());
    try {
      let r = await n.stat();
      if (!r.isFile() || r.size > Tt) return [];
      let i = await $Ee(n, r.size),
        a = ar().safeParse(ct(i.toString("utf8"), !1));
      return a.success ? a.data.entries.flatMap(item => {
        let s = sr().safeParse(item);
        return s.success ? [s.data] : [];
      }) : [];
    } finally {
      await n.close();
    }
  } catch {
    return [];
  }
}
var dr = 3;
function Ot({
  wanted: wanted,
  known: known,
  peer: peer,
  peerHasBlob: peerHasBlob,
  sizeOf: sizeOf,
  outOfSight: outOfSight
}) {
  let commitFiles = new Map(),
    d = new Map(),
    m = (path_6, S, bytes_2) => {
      if (commitFiles.set(path_6, {
        mode: S.mode,
        blobId: S.blobId
      }), peerHasBlob(S.blobId) || d.has(S.blobId)) return;
      d.set(S.blobId, {
        path: path_6,
        bytes: bytes_2
      });
    };
  for (let [g, S] of [...wanted].toSorted(cr)) m(g, S, S.bytes);
  let demoted = [],
    h = L([...known.keys(), ...peer.keys()]).filter(item => !wanted.has(item) && outOfSight(item) !== !1).toSorted();
  for (let path_7 of h) {
    let S = known.get(path_7),
      y = peer.get(path_7),
      k = S === void 0 ? null : sizeOf(S.blobId),
      T = outOfSight(path_7) === "excluded";
    if (!T && S !== void 0 && (peerHasBlob(S.blobId) || k !== null)) {
      m(path_7, S, k ?? 0);
      continue;
    }
    if (y !== void 0) m(path_7, y, 0);
    if (!T && S !== void 0 && S.blobId !== y?.blobId) demoted.push({
      path: path_7,
      kept: y === void 0 ? "none" : "held"
    });
  }
  return {
    commitFiles: commitFiles,
    heldBack: [],
    demoted: demoted,
    bytesPlanned: [...d.values()].reduce((acc, {
      bytes: bytes_3
    }) => acc + bytes_3, 0),
    largest: [...d.values()].toSorted((g, S) => S.bytes - g.bytes || Tee(g, S)).slice(0, dr)
  };
}
function cr(e, n) {
  return Tee({
    path: e[0]
  }, {
    path: n[0]
  });
}
var ur = 33188,
  fr = 33261,
  mr = 64,
  gr = 8,
  pr = 65536,
  hr = 16777216,
  br = 4,
  message_3 = "sync",
  yr = new Set(["ENOENT", "ENOTDIR", "ELOOP", "EACCES", "EPERM", "WORKING_ROOT_NOT_CANONICAL"]);
async function bir({
  folder: e,
  realRoot: realRoot,
  repo: repo,
  statCache: statCache,
  known: known_2,
  peer: peer_2,
  peerHasBlob: peerHasBlob_2,
  budgetBytes: d,
  withheldOf: withheldOf,
  through = null,
  signal: signal_2,
  now = Date.now
}) {
  let S = now(),
    y = await Nwt(e);
  if (y.kind === "unusable") return J(y.reason === "busy" ? "momentary" : "unreadable", `the .gitignore in this folder ${Lwt(y)}`);
  if (withheldOf.hostConfigGround !== void 0) return J("unreadable", tqe(withheldOf.hostConfigGround));
  let k = await sar({
    root: e,
    ignores: Dwt(y.lines, {
      ignoreCase: K7e(e)
    }),
    withheldOf: withheldOf,
    signal: signal_2,
    nestedIgnoreFiles: !0
  });
  if (!k.ok) switch (k.reason) {
    case "aborted":
      return J("aborted", "the sync point was abandoned");
    case "too_many_files":
      return {
        kind: "refused",
        reason: "too_large",
        detail: "this folder holds more files than sync lists",
        totalBytes: 0,
        capBytes: d,
        largest: []
      };
    case "nested_ignores_too_large":
      return J("unreadable", oar);
    case "root_unreadable":
    case "ignore_unreadable":
      return J("unreadable", "this folder cannot be read");
  }
  let {
      listing: listing_4
    } = k,
    x = listing_4.files.flatMap(item => {
      let reason_4 = Sr(item.path);
      return reason_4 === null ? [] : [{
        path: item.path,
        reason: reason_4
      }];
    }),
    M = new Set(x.map(({
      path: path_8
    }) => path_8)),
    candidates = listing_4.files.filter(item => !M.has(item.path)),
    D = now(),
    G = await Rr({
      candidates: candidates,
      folder: e,
      realRoot: realRoot,
      statCache: statCache,
      through: through,
      signal: signal_2
    });
  if (Mt(signal_2)) return J("aborted", "the sync point was abandoned");
  let hashMs = now() - D,
    q = new Map(G.skipped.map(item => [item.path, item.reason])),
    outOfSight_2 = Br(listing_4, M, q),
    wanted_2 = new Map([...G.files].map(([H, Q]) => [H, {
      mode: wr(Q.stat.mode),
      blobId: Q.blobId,
      bytes: Q.stat.size
    }])),
    Y = now(),
    w = Ot({
      wanted: wanted_2,
      known: known_2,
      peer: peer_2,
      peerHasBlob: peerHasBlob_2,
      sizeOf: H => repo.store.deflatedSize(H),
      outOfSight: outOfSight_2
    }),
    planMs = now() - Y,
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
    };
  }
  for (let {
    path: path_9,
    kept: kept_4
  } of w.demoted) t(`folder sync: ${path_9} cannot keep what was last sent this pass; the tree carries ${kept_4 === "held" ? "the cloud session's copy" : "no entry"} for it`);
  let F = Or(w.commitFiles, wanted_2);
  for (let H of F.dropped) t(`folder sync: ${H} kept from an earlier state collides with a directory or file of the same name now; left out of the tree`);
  let P = await Pr({
    plan: F.files,
    wanted: wanted_2,
    sighted: G.files,
    known: known_2,
    peer: peer_2,
    statCache: statCache,
    peerHasBlob: peerHasBlob_2,
    repo: repo,
    folder: e,
    realRoot: realRoot,
    through: through,
    signal: signal_2
  });
  if (Mt(signal_2)) return J("aborted", "the sync point was abandoned");
  let j = await repo.writeTree(P.commitFiles);
  if (!j.ok) return J("git_error", `a tree for this folder could not be built (${j.reason} at ${j.path})`);
  if (G.hashed > 0 || P.slipped.length > 0) await statCache.save();
  let heldBack = P.slipped.toSorted(Tee),
    withheldCounts = Ir(listing_4, x, q),
    report = {
      listedPaths: listing_4.files.length,
      nestedIgnoreFiles: listing_4.nestedIgnoreFiles,
      hashedFiles: G.hashed,
      hashMs: hashMs,
      planMs: planMs,
      heldBack: heldBack,
      withheldCounts: withheldCounts,
      blobsStored: P.blobsStored,
      bytesPlanned: w.bytesPlanned,
      totalMs: now() - S
    };
  return {
    kind: "built",
    rootTree: j.rootTree,
    listing: j.listing,
    commitFiles: P.commitFiles,
    heldBack: heldBack,
    withheldCounts: withheldCounts,
    withheld: Mr(listing_4, x),
    stats: {
      paths: P.commitFiles.size,
      bytes: w.bytesPlanned,
      ms: now() - S
    },
    report: report
  };
}
function reo({
  folder: folder,
  realRoot: realRoot_2,
  repo: repo_2,
  statCache: statCache_2,
  start: start,
  agreedOf: agreedOf,
  lastSentCommit = async () => null,
  ackedOf: ackedOf,
  maxBytes: m,
  withheldOf: withheldOf_2,
  anchor = async () => null,
  onPass: onPass,
  now: now_2 = Date.now
}) {
  let y = null,
    k = null;
  return async T => {
    let {
        basis: basis,
        signal: signal_3
      } = T,
      R = T.alsoParents ?? [];
    try {
      let D = [];
      if (basis === null) for (let K of ((await ackedOf?.()) ?? []).slice(0, br)) {
        let H = await repo_2.commitParents(K);
        if (H !== "none" && H !== "unknown") D.push(K);
      }
      let G = await kr(repo_2, [start.pin, ...[...D].reverse(), ...(basis === null ? [] : [...R, basis])]);
      if (G.kind !== "ok") return G.commit !== start.pin ? J("basis_not_held", `${G.commit} is not held here`) : G.kind === "absent" ? J("start_gone", "this folder's starting snapshot for the session is no longer in its local sync store on this machine (removed, cleaned up, or discarded as damaged), and every later snapshot builds on it; only a new cloud session from this folder starts afresh") : J("git_error", "this folder's starting snapshot for the session could not be read back from its local sync store on this machine");
      let W = new Set(G.listings.flatMap(item => [...item.files.values()].map(item => item.blobId))),
        z = (await Er(repo_2, G.listings, {
          basis: basis,
          acked: basis === null ? [] : R
        })).files,
        Y = (basis === null ? null : G.listings.at(-1) ?? null)?.leftOut ?? [],
        setAside = Y.map(Tr).filter(item => item.length <= _r).slice(0, sge),
        I = setAside.length < Y.length,
        worktreeCommit = await lastSentCommit();
      if (worktreeCommit !== null && (k === null || k.worktreeCommit !== worktreeCommit)) {
        let K = await repo_2.listingOf(worktreeCommit),
          H = await repo_2.commitParents(worktreeCommit);
        if (K.kind !== "ok") return J("git_error", "what this machine last sent could not be read back from its local store");
        k = {
          files: K.listing.files,
          basis: Array.isArray(H) ? H[2] ?? null : null,
          worktreeCommit: worktreeCommit
        };
      }
      let P = k?.files ?? new Map(),
        known_3 = agreedOf === void 0 ? k !== null && k.basis === basis ? new Map([...z, ...P]) : new Map([...P, ...z]) : await agreedOf();
      if (known_3 === null) return J("git_error", "what this machine last sent could not be read back");
      let N;
      try {
        N = await anchor(signal_3);
      } catch (error) {
        if (Mt(signal_3)) return J("aborted", "the sync point was abandoned");
        let H = v(error);
        return t(`folder sync: tree anchor not opened (${H ?? l(error)})`), yr.has(H ?? "") ? J("unreadable", "the folder itself could not be opened for reading (was it moved, renamed or replaced by a link, or were its permissions changed?)") : J("momentary", H === void 0 ? "opening the folder failed (no error code)" : `opening the folder failed with ${H}`);
      }
      if (N !== null && "unavailable" in N) return J("anchor_unavailable", N.unavailable);
      let through_2 = N;
      try {
        let K = await bir({
          folder: folder,
          realRoot: realRoot_2,
          repo: repo_2,
          statCache: statCache_2,
          known: known_3,
          peer: z,
          peerHasBlob: re => W.has(re),
          budgetBytes: m,
          withheldOf: withheldOf_2(),
          through: through_2,
          signal: signal_3,
          now: now_2
        });
        if (K.kind === "refused") return J(K.reason, K.detail);
        onPass?.(K.report);
        let H = [start.pin, ...(basis === null ? [] : [basis, ...R])],
          key = [K.rootTree, ...H].join(" "),
          le = y !== null && y.key === key ? y : await xr(repo_2, K.rootTree, start.pin, H.slice(1), now_2);
        if (le === null) return J("git_error", "the snapshot commits could not be written");
        return y = {
          key: key,
          ...le
        }, k = {
          files: K.commitFiles,
          basis: basis,
          worktreeCommit: le.worktreeCommit
        }, await repo_2.store.flush(), {
          kind: "snapshot",
          snapshot: {
            head: start.pin,
            branch: branch,
            indexCommit: le.indexCommit,
            worktreeCommit: le.worktreeCommit,
            withheld: K.withheld,
            ...(setAside.length > 0 && {
              setAside: setAside
            }),
            ...(I && {
              setAsideTruncated: !0
            }),
            ...(Y.length > 0 && {
              setAsideNames: Y.map(item => item.directory === "" ? item.name : `${item.directory}/${item.name}`)
            }),
            stats: K.stats
          }
        };
      } finally {
        await through_2?.close();
      }
    } catch (error) {
      if (Mt(signal_3)) return J("aborted", "the sync point was abandoned");
      return t(`folder sync: snapshot failed: ${String(error)}`), J("git_error", "this folder could not be written into its local store");
    }
  };
}
function Sr(e) {
  if (e.includes("\uFFFD")) return "name_not_utf8";
  let n = e.split("/"),
    r = n.at(-1) ?? "";
  if (Ee(r)) return "gitmodules";
  if (_e(r)) return "gitattributes";
  return n.some((i, index) => ke({
    name: i,
    kind: index < n.length - 1 ? "directory" : "file",
    id: "1".repeat(40)
  }, "sha1") !== null) ? "name_refused_by_git" : null;
}
function J(reason_5, detail_2) {
  return {
    kind: "refused",
    reason: reason_5,
    detail: detail_2
  };
}
function wr(e) {
  return O() !== "windows" && (e & mr) !== 0 ? fr : ur;
}
async function kr(e, n) {
  let listings = [];
  for (let commit of n) {
    let a = await e.listingOf(commit);
    switch (a.kind) {
      case "ok":
        listings.push(a.listing);
        break;
      case "absent":
        return {
          kind: "absent",
          commit: commit
        };
      case "unreadable":
      case "too_large":
        return {
          kind: "unreadable",
          commit: commit
        };
      default:
        {
          let c = a;
          return {
            kind: "unreadable",
            commit: commit
          };
        }
    }
  }
  return {
    kind: "ok",
    listings: listings
  };
}
function je(e) {
  let n = e.at(-1);
  return {
    files: n?.files ?? new Map(),
    leftOut: n?.leftOut ?? []
  };
}
async function Er(e, n, {
  basis: basis_2,
  acked: acked
}) {
  if (basis_2 === null || acked.length === 0) return je(n);
  for (let [a, c] of acked.entries()) if ((await e.isAncestor(c, basis_2)) === !1) {
    let s = n[1 + a];
    return s === void 0 ? je(n) : {
      files: s.files,
      leftOut: s.leftOut
    };
  }
  return je(n);
}
var _r = 2048;
function Tr(e) {
  return (e.directory === "" ? "" : Buffer.from(`${e.directory}/`, "utf8").toString("hex")) + e.nameBytes.toLowerCase();
}
function Or(e, n) {
  let r = d => n instanceof Map || n instanceof Set ? n.has(d) : !1,
    i = new Set();
  for (let d of e.keys()) for (let m = d.indexOf("/"); m >= 0; m = d.indexOf("/", m + 1)) i.add(d.slice(0, m));
  let a = [],
    files_2 = new Map(),
    s = [];
  for (let [d, m] of e) {
    if (i.has(d)) {
      if (r(d)) s.push(`${d}/`), files_2.set(d, m);else a.push(d);
      continue;
    }
    files_2.set(d, m);
  }
  if (s.length > 0) {
    for (let d of [...files_2.keys()]) if (s.some(item => d.startsWith(item))) files_2.delete(d), a.push(d);
  }
  return {
    files: files_2,
    dropped: a.toSorted()
  };
}
async function xr(e, tree_4, r, i, a) {
  let whenUnix = Math.floor(a() / 1000),
    s = await e.writeCommit({
      tree: tree_4,
      parents: [r],
      message: message_3,
      whenUnix: whenUnix
    });
  if (!s.ok) return null;
  let d = await e.writeCommit({
    tree: tree_4,
    parents: L([r, s.id, ...i]),
    message: message_3,
    whenUnix: whenUnix
  });
  return d.ok ? {
    indexCommit: s.id,
    worktreeCommit: d.id
  } : null;
}
async function Rr({
  candidates: candidates_2,
  folder: folder_2,
  realRoot: realRoot_3,
  statCache: statCache_3,
  through: through_3,
  signal: signal_4
}) {
  let s = 0,
    d = Ms(gr, async stat_3 => {
      let h = stat_3.ctimeMs !== void 0 && stat_3.ino !== void 0,
        g = {
          size: stat_3.size,
          mtimeMs: stat_3.mtimeMs,
          ctimeMs: stat_3.ctimeMs ?? 0,
          mode: stat_3.mode,
          ino: stat_3.ino ?? 0
        },
        blobId_4 = h ? statCache_3.lookup(stat_3.path, g) : null;
      if (blobId_4 !== null) return {
        kind: "file",
        file: {
          stat: stat_3,
          blobId: blobId_4,
          kept: null
        },
        hashed: !1
      };
      if (Mt(signal_4)) return {
        kind: "skip",
        path: stat_3.path,
        reason: "unreadable"
      };
      let y = await L3(folder_2, realRoot_3, stat_3.path, through_3);
      if (y.kind === "skip") return {
        kind: "skip",
        path: stat_3.path,
        reason: y.skipped.reason
      };
      let blobId_5 = ex(y.content),
        stat_4 = {
          ...stat_3,
          size: y.content.length,
          mode: y.mode
        },
        x = {
          ...g,
          size: stat_4.size,
          mode: y.mode,
          observedAtMs: stat_3.observedAtMs
        };
      if (h) statCache_3.remember(stat_3.path, x, blobId_5);
      let M = y.content.length <= pr && s + y.content.length <= hr;
      if (M) s += y.content.length;
      return {
        kind: "file",
        file: {
          stat: stat_4,
          blobId: blobId_5,
          kept: M ? y.content : null
        },
        hashed: !0
      };
    }),
    m = await Promise.all(candidates_2.map(d));
  return {
    files: new Map(m.flatMap(item => item.kind === "file" ? [[item.file.stat.path, item.file]] : [])),
    skipped: m.flatMap(item => item.kind === "skip" ? [{
      path: item.path,
      reason: item.reason
    }] : []),
    hashed: U(m, p => p.kind === "file" && p.hashed)
  };
}
function Br(e, n, r) {
  let i = new Set(e.skipped.filter(item => !Rt.has(item.reason)).map(item => item.path)),
    a = [...e.ignoredDirectories, ...e.unlistedDirectories.filter(item => i.has(item))],
    c = new Set([...i, ...e.ignoredFiles, ...n, ...a]),
    s = new Set([...e.skipped.filter(item => Rt.has(item.reason)).map(item => item.path), ...r.keys()]),
    d = e.unlistedDirectories.filter(item => !i.has(item)),
    m = new Set(a),
    p = new Set(d),
    h = (g, S) => {
      for (let y = S.lastIndexOf("/"); y > 0; y = S.lastIndexOf("/", y - 1)) if (g.has(S.slice(0, y))) return !0;
      return !1;
    };
  return g => {
    if (c.has(g) || h(m, g)) return "excluded";
    if (s.has(g) || p.has(g) || h(p, g)) return "transient";
    return !1;
  };
}
async function Pr({
  plan: plan,
  wanted: wanted_3,
  sighted: sighted,
  known: known_4,
  peer: peer_3,
  statCache: statCache_4,
  peerHasBlob: peerHasBlob_3,
  repo: repo_3,
  folder: folder_3,
  realRoot: realRoot_4,
  through: through_4,
  signal: signal_5
}) {
  let commitFiles_2 = new Map(plan),
    slipped = [],
    blobsStored = 0,
    T = new Set();
  for (let [path_10, R] of plan) {
    let D = wanted_3.get(path_10);
    if (D === void 0 || D.blobId !== R.blobId) continue;
    if (T.has(R.blobId) || peerHasBlob_3(R.blobId) || (await repo_3.store.hasHere(R.blobId))) continue;
    if (Mt(signal_5)) break;
    let W = sighted.get(path_10)?.kept ?? null ?? (await Fr(folder_3, realRoot_4, path_10, through_4));
    if (W === null || ex(W) !== R.blobId) {
      statCache_4.forget(path_10);
      let q = known_4.get(path_10),
        z = q !== void 0 && (peerHasBlob_3(q.blobId) || (await repo_3.store.hasHere(q.blobId))) ? q : peer_3.get(path_10);
      if (z === void 0) commitFiles_2.delete(path_10);else commitFiles_2.set(path_10, {
        mode: z.mode,
        blobId: z.blobId
      });
      slipped.push({
        path: path_10,
        bytes: D.bytes
      });
      continue;
    }
    await repo_3.store.put("blob", W), T.add(R.blobId), blobsStored++;
  }
  let x = await repo_3.store.hold([...commitFiles_2.values()].map(item => item.blobId));
  if (x.length > 0) t(`folder sync: ${String(x.length)} object(s) the tree names could not be secured in this session's store`);
  return {
    commitFiles: commitFiles_2,
    slipped: slipped,
    blobsStored: blobsStored
  };
}
async function Fr(e, n, r, i) {
  let a = await L3(e, n, r, i);
  return a.kind === "read" ? a.content : null;
}
var Rt = new Set(["unreadable", "changed", "too_large"]),
  Pt = new Set(["sensitive", "sensitive_tracked"]),
  Ft = new Set(["host_config"]),
  It = new Set(["read_denied", "rules_unreadable"]),
  Ct = new Set(["symlink", "not_regular_file", "nested_repository", "unsafe_name"]);
function Mr(e, n) {
  let r = i => e.skipped.filter(item => i.has(item.reason)).map(item => item.path);
  return {
    credentialNamed: r(Pt),
    filterAttributed: [],
    hardLinked: r(new Set(["hard_link"])),
    notFiles: [...r(Ct), ...n.map(({
      path: path_11
    }) => path_11)].toSorted(),
    readDenied: r(It),
    hostConfig: r(Ft),
    tooLarge: r(new Set(["too_large"]))
  };
}
function Ir(e, n, r) {
  let i = new Map(),
    a = c => {
      i.set(c, (i.get(c) ?? 0) + 1);
    };
  for (let {
    reason: reason_6
  } of e.skipped) {
    let s = Bt(reason_6);
    if (s !== null) a(s);
  }
  for (let {
    reason: reason_7
  } of n) a(reason_7);
  for (let c of r.values()) a(Bt(c) ?? "unreadable");
  return i;
}
function Bt(e) {
  if (Pt.has(e)) return "credential_name";
  if (Ft.has(e)) return "host_config";
  if (It.has(e)) return "read_denied";
  if (Ct.has(e) || e === "hard_link") return "not_regular_file";
  if (e === "too_large") return "too_large";
  if (e === "unreadable" || e === "changed") return "unreadable";
  return null;
}
import { join as Ae } from "path";
var oeo = "trash",
  Cr = "stat-cache.json";
async function D4t(e, n) {
  return jr(gu(await Ru(e, Cg(n))));
}
function jr(e) {
  return Ae(e, gde, Kgn);
}
function seo(e, n) {
  return Ae(e, i4(ci(n)));
}
function L4t(e) {
  return Ae(e, Cr);
}
export { l7, cCn, x4t, P4t, I4t, O4t, eeo, BWe, teo, neo, M4t, bir, reo, oeo, D4t, seo, L4t };