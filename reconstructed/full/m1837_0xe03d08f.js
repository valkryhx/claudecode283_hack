// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  g3
} from "B:/~BUN/root/chunk-6wgkxd9a.js";
import {
  mn,
  No,
  txe,
  QN,
  tt,
  Ve
} from "B:/~BUN/root/chunk-py7yqpgt.js";
import {
  l,
  v,
  B,
  Pf
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  oe
} from "B:/~BUN/root/chunk-shgdrs47.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  d,
  O
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  tS,
  yt
} from "B:/~BUN/root/chunk-339q6g5w.js";
import {
  Rf
} from "B:/~BUN/root/chunk-8hs4bwwk.js";
import {
  uc
} from "B:/~BUN/root/chunk-bt3h0syz.js";
import {
  hs
} from "B:/~BUN/root/chunk-ceg1zct0.js";
import {
  cst,
  b$n,
  ZDe,
  ftn,
  Lke,
  S$n,
  PPt,
  mtn,
  gtn,
  dst,
  Kqe,
  htn,
  ust,
  v$n,
  iEr
} from "B:/~BUN/root/chunk-y39emrp9.js";
import {
  Ra
} from "B:/~BUN/root/chunk-d36ctpgs.js";
import {
  Ge,
  LE
} from "B:/~BUN/root/chunk-d8zzdckb.js";
import {
  e0e,
  Ukt
} from "B:/~BUN/root/chunk-918gkwtq.js";
import {
  sbn,
  pzt
} from "B:/~BUN/root/chunk-0zh1abnx.js";
import {
  sU,
  iU
} from "B:/~BUN/root/chunk-mkb49049.js";
import {
  L
} from "B:/~BUN/root/chunk-z1enakv9.js";
import {
  open as ot,
  realpath as q
} from "fs/promises";
import {
  basename as ge,
  dirname as he,
  join as we
} from "path";
import {
  constants as N
} from "fs";
import {
  lstat as ie,
  mkdir as U,
  mkdtemp as be,
  open as re,
  opendir as K,
  rm as Oe,
  writeFile as ve
} from "fs/promises";
import {
  tmpdir as Ae
} from "os";
import {
  join as w
} from "path";
var Pe = 65536,
  te = 1e6,
  Fe = 33554432,
  Ie = 65536,
  Ne = 65536,
  Me = 1e6,
  xe = 67108864,
  Be = 256,
  Ce = 20000,
  Le = 4096,
  He = [
    ["core.commitGraph", "false"],
    ["core.multiPackIndex", "false"]
  ],
  se = {
    disposition: "skip"
  },
  ae = new Map([
    ["config", {
      disposition: "copy",
      kind: "file",
      maxBytes: te
    }],
    ["config.worktree", {
      disposition: "copy",
      kind: "file",
      maxBytes: te
    }],
    ["HEAD", {
      disposition: "copy",
      kind: "file",
      maxBytes: Pe
    }],
    ["packed-refs", {
      disposition: "copy",
      kind: "file",
      maxBytes: Fe
    }],
    ["shallow", {
      disposition: "copy",
      kind: "file",
      maxBytes: Ne
    }],
    ["refs", {
      disposition: "copy",
      kind: "dir",
      maxFileBytes: Ie,
      entries: "all"
    }],
    ["info", {
      disposition: "copy",
      kind: "dir",
      maxFileBytes: Me,
      entries: new Set(["exclude", "attributes", "sparse-checkout", "grafts"])
    }],
    ["objects", {
      disposition: "in-place",
      kind: "dir"
    }],
    ["index", {
      disposition: "in-place",
      kind: "file"
    }],
    ["commondir", {
      disposition: "refuse"
    }],
    ["gitdir", {
      disposition: "refuse"
    }],
    ["reftable", {
      disposition: "refuse"
    }], ...["hooks", "logs", "branches", "remotes", "FETCH_HEAD", "ORIG_HEAD", "MERGE_HEAD", "AUTO_MERGE", "REBASE_HEAD", "CHERRY_PICK_HEAD", "REVERT_HEAD", "MERGE_AUTOSTASH", "COMMIT_EDITMSG", "MERGE_MSG", "MERGE_MODE", "MERGE_RR", "SQUASH_MSG", "TAG_EDITMSG", "rebase-merge", "rebase-apply", "sequencer", "rr-cache", "worktrees", "modules", "lfs", "gc.log", "gc.pid", "description", "gitk.cache"].map((e) => [e, se])
  ]),
  ze = /^(?:BISECT_[A-Z_]+|fsmonitor--daemon.*|.+\.lock)$/;

function We(e) {
  return ae.get(e) ?? (ze.test(e) ? se : void 0)
}
var $e = [/^(?:commit|tag|pull|push|rebase|init|advice|color|column|help|status|fetch|user|branch)\..+$/, /^core\.(?:repositoryformatversion|filemode|bare|logallrefupdates|ignorecase|precomposeunicode|symlinks|autocrlf|eol|safecrlf|longpaths|sparsecheckout|sparsecheckoutcone|quotepath|abbrev|checkstat|trustctime|untrackedcache)$/, /^remote\..+\.(?:url|pushurl|fetch|promisor|partialclonefilter|tagopt|prune|mirror|gh-resolved)$/, /^submodule\.active$/, /^submodule\..+\.(?:active|branch|url)$/, /^http\.(?:.+\.)?extraheader$/, /^maintenance\..+$/, /^(?:extensions\.(?:objectformat|partialclone|worktreeconfig)|lfs\.repositoryformatversion)$/],
  je = new Set(["checkout", "rebase", "merge", "none"]);
async function ce(e) {
  let n = gtn(e);
  if (n === null || n.workTree === null) return null;
  let {
    gitDir: r,
    workTree: o
  } = n, i;
  try {
    let s = await Ke(r);
    if (typeof s === "string") return M(s);
    let u = await Xe(w(r, "objects"));
    if (u !== void 0) return M(u);
    i = await be(w(Ae(), "ccdiff-"));
    let c = i,
      f = await Ye(r, c, s) ?? await Je(c, s.has("config.worktree"));
    if (f !== void 0) return await j(c), M(f);
    return {
      spawn: Ue(c, r, o),
      dispose: () => j(c)
    }
  } catch (s) {
    if (i !== void 0) await j(i);
    return M(`unexpected error (${l(s)})`)
  }
}
async function j(e) {
  await Oe(e, {
    recursive: !0,
    force: !0
  }).catch(() => {
    return
  })
}

function M(e) {
  return t(`workspace diff: discovered repository refused (${e})`, {
    level: "warn"
  }), null
}

function ue() {
  return [...txe(), ...He]
}

function Ue(e, n, r) {
  return {
    env: {
      ...No(void 0, {
        base: hs(),
        repository: {
          gitDir: e,
          workTree: r,
          commonDir: e
        }
      }),
      ...ZDe,
      ...QN(void 0, ue()),
      GIT_OBJECT_DIRECTORY: w(n, "objects"),
      GIT_INDEX_FILE: w(n, "index")
    },
    extendEnv: !1
  }
}
async function Ke(e) {
  let n = new Set,
    r = 0;
  for await (let o of await K(e)) {
    if (++r > Be) return "oversized .git";
    let i = We(o.name);
    if (i === void 0) return "unknown .git entry";
    switch (i.disposition) {
      case "skip":
        continue;
      case "refuse":
        return `.git/${o.name}`;
      case "copy":
      case "in-place":
        if (o.name === "index") {
          let s = await ie(w(e, o.name));
          if (!s.isFile() || s.nlink > 1) return "symlinked, hardlinked or unexpected .git/index"
        } else if (await X(e, o) !== i.kind) return `symlinked or unexpected .git/${o.name}`;
        n.add(o.name)
    }
  }
  if (!n.has("config") || !n.has("HEAD")) return "no .git/config or .git/HEAD";
  return n
}
async function Xe(e) {
  for (let n of [e, w(e, "pack"), w(e, "info")])
    if (!await Ze(n)) return "symlinked or oversized .git/objects entry";
  if (await Qe(w(e, "info", "alternates"))) return ".git/objects/info/alternates";
  return
}
async function Ye(e, n, r) {
  await U(w(n, "refs"), {
    recursive: !0
  });
  let o = {
    entries: 0,
    bytes: 0
  };
  for (let [i, s] of ae) {
    if (s.disposition !== "copy" || !r.has(i)) continue;
    let u = w(e, i),
      c = w(n, i);
    if (s.kind === "file") {
      if (await de(u, c, s.maxBytes, o) !== "copied") return `unreadable, linked or oversized .git/${i}`;
      continue
    }
    if (await U(c, {
        recursive: !0
      }), !await fe(u, c, s.maxFileBytes, o, s.entries)) return `unreadable, linked or oversized entry under .git/${i}`
  }
  return
}
async function Je(e, n) {
  let r = new Set(ue().map(([i]) => i.toLowerCase())),
    o = n ? ["config", "config.worktree"] : ["config"];
  for (let i of o) {
    let s = await tt(yt(), ["config", "--file", w(e, i), "--no-includes", "-z", "--list"], {
      timeout: Lke,
      maxBuffer: 4000000,
      env: {
        ...No(void 0, {
          base: hs()
        }),
        ...ZDe
      },
      extendEnv: !1,
      stdin: "ignore"
    });
    if (s.code !== 0) return `config ${i} unlistable`;
    for (let u of s.stdout.split("\x00")) {
      if (u === "") continue;
      let c = u.indexOf(`
`),
        f = c === -1 ? u : u.slice(0, c),
        p = c === -1 ? "" : u.slice(c + 1);
      if (p.includes(`
`)) return `multi-line value for ${ne(f)}`;
      if (!qe(f, p, r)) return `config entry ${ne(f)}`
    }
  }
  return
}

function qe(e, n, r) {
  if (e === "extensions.refstorage") return n === "files";
  if (/^submodule\..+\.update$/.test(e)) return je.has(n);
  return r.has(e) || $e.some((o) => o.test(e))
}

function ne(e) {
  let n = e.split(".");
  return n.length <= 2 ? e : `${n[0]}.<...>.${n.at(-1)}`
}
async function fe(e, n, r, o, i) {
  let s;
  try {
    s = await K(e)
  } catch (u) {
    return B(u)
  }
  for await (let u of s) {
    if (++o.entries > Ce) return !1;
    if (i !== "all" && !i.has(u.name)) continue;
    let c = w(e, u.name),
      f = w(n, u.name),
      p = await X(e, u);
    if (p === "dir" && i === "all") {
      if (await U(f, {
          recursive: !0
        }), !await fe(c, f, r, o, "all")) return !1
    } else if (p === "file") {
      if (await de(c, f, r, o) !== "copied") return !1
    } else return !1
  }
  return !0
}
async function X(e, n) {
  if (n.isSymbolicLink()) return "reject";
  if (n.isDirectory()) return "dir";
  if (n.isFile()) return "file";
  try {
    let r = await ie(w(e, n.name));
    return r.isSymbolicLink() ? "reject" : r.isDirectory() ? "dir" : r.isFile() ? "file" : "reject"
  } catch {
    return "reject"
  }
}
async function Ze(e) {
  let n;
  try {
    n = await K(e)
  } catch (o) {
    return B(o)
  }
  let r = 0;
  for await (let o of n) if (++r > Le || await X(e, o) === "reject") return !1;
  return !0
}

function le() {
  return O() === "windows" ? N.O_RDONLY : N.O_RDONLY | N.O_NONBLOCK | N.O_NOFOLLOW
}
async function de(e, n, r, o) {
  let i;
  try {
    i = await re(e, le())
  } catch (s) {
    return B(s) ? "absent" : "refused"
  }
  try {
    let s = await i.stat();
    if (!s.isFile() || s.nlink > 1 || s.size > r) return "refused";
    if (o.bytes += s.size, o.bytes > xe) return "refused";
    let u = Buffer.alloc(s.size),
      c = 0;
    while (c < s.size) {
      let {
        bytesRead: f
      } = await i.read(u, c, s.size - c, c);
      if (f === 0) break;
      c += f
    }
    if (c !== s.size) return "refused";
    return await ve(n, u), "copied"
  } catch {
    return "refused"
  } finally {
    await i.close().catch(() => {
      return
    })
  }
}
async function Qe(e) {
  let n;
  try {
    n = await re(e, le())
  } catch (r) {
    return !B(r)
  }
  try {
    let r = await n.stat();
    return !r.isFile() || r.size > 0
  } finally {
    await n.close().catch(() => {
      return
    })
  }
}
import {
  lstat as et,
  opendir as nt
} from "fs/promises";
import {
  join as pe,
  sep as it
} from "path";
var rt = 256;
async function me() {
  try {
    if (!uc() || Ge.isSandboxingEnabled()) return null;
    let e = Kqe();
    if (tS(e) !== null) return null;
    let n = oe(),
      r = a.CLAUDE_CODE_REPO_CHECKOUTS ? cst() : new Map;
    if (r.size > 1) {
      let f = b$n(n),
        p = f === void 0 ? void 0 : r.get(f);
      return p !== void 0 && await Y(p) === "directory" ? await J(p) : null
    }
    let [o] = r.values();
    if (o !== void 0) {
      let f = await Y(o);
      if (f === "directory") return await J(o);
      if (f === "other") return null
    }
    let i = [],
      s = 0;
    for await (let f of await nt(e)) {
      if (++s > rt) return null;
      if (!f.isDirectory() || f.name.startsWith(".")) continue;
      let p = pe(e, f.name);
      if (await Y(p) !== "absent") i.push(p)
    }
    let u = Rf(n),
      c = i.find((f) => {
        let p = Rf(f);
        return u === p || u.startsWith(p + it)
      }) ?? (i.length === 1 ? i[0] : void 0);
    return c === void 0 ? null : await J(c)
  } catch (e) {
    if (Pf(e)) t(`workspace diff: nested repository scan failed: ${l(e)}`, {
      level: "warn"
    });
    else d(e);
    return null
  }
}
async function Y(e) {
  try {
    return (await et(pe(e, ".git"))).isDirectory() ? "directory" : "other"
  } catch (n) {
    let r = v(n);
    if (r === "ENOENT" || r === "ENOTDIR") return "absent";
    throw n
  }
}
async function J(e) {
  return gtn(e) === null ? null : htn(void 0, e)
}
async function st(e) {
  let n = he(e),
    r = [ge(e)];
  for (let o = 0; o < 64; o++) {
    try {
      let s = await q(n);
      return we(s, ...r)
    } catch (s) {
      if (s?.code !== "ENOENT") return
    }
    let i = he(n);
    if (i === n) return;
    r.unshift(ge(n)), n = i
  }
  return
}
var at = 2000000,
  ct = new Set(["100644", "100755", "100664"]),
  V = 1e7,
  ut = 1e4,
  ft = {
    perFileMs: 5000,
    totalMs: 1e4
  },
  lt = sbn;

function dt(e) {
  if (e.length === 0 || e.startsWith('"')) return !1;
  if (/[\u0000-\u001f\u007f]/.test(e)) return !1;
  if (e.startsWith("-") || e.startsWith(":") || e.includes(" => ") || !v$n(e)) return !1;
  return e.split("/").every((n) => n !== "" && iEr(n) !== ".")
}
var ye = /^[0-9a-f]{40,64}$/;

function R(e) {
  return ["--literal-pathspecs", ...mn, ...e]
}

function D(e, n) {
  return {
    ...n,
    cwd: e,
    timeout: Lke,
    preserveOutputOnError: !1
  }
}
async function pt(e, n, r, o) {
  let {
    stdout: i,
    code: s
  } = await Ve(yt(), R(["ls-tree", "-r", "-l", "-z", "--full-tree", n, "--", ...r]), {
    ...D(e, o),
    maxBuffer: 1e7
  });
  if (s !== 0) return null;
  let u = new Map;
  for (let c of i.split("\x00")) {
    if (!c) continue;
    let f = c.match(/^(\d{6}) (\S+) ([0-9a-f]{40,64}) +(\d+|-)\t(.+)$/s);
    if (!f) continue;
    let [, p = "", h, m = "", y, k] = f;
    if (k === void 0) continue;
    u.set(k, {
      mode: p,
      oid: m,
      size: h === "blob" && y !== "-" ? Number(y) : -1
    })
  }
  return u
}
async function mt(e, n, r) {
  let {
    stdout: o,
    code: i
  } = await Ve(yt(), R(["ls-files", "--stage", "-z", "--", ...n]), {
    ...D(e, r),
    maxBuffer: 1e7
  });
  if (i !== 0) return null;
  let s = new Map,
    u = new Set;
  for (let h of o.split("\x00")) {
    if (!h) continue;
    let m = h.match(/^(\d{6}) ([0-9a-f]{40,64}) (\d+)\t(.+)$/s);
    if (!m) continue;
    let [, y = "", k = "", P, T] = m;
    if (T === void 0) continue;
    if (P !== "0") {
      u.add(T);
      continue
    }
    s.set(T, {
      mode: y,
      oid: k,
      size: -1
    })
  }
  for (let h of u) s.delete(h);
  if (s.size === 0) return s;
  let c = L(Array.from(s.values(), (h) => h.oid)),
    f = await Ve(yt(), R(["cat-file", "--batch-check=%(objectname) %(objectsize)"]), {
      ...D(e, r),
      maxBuffer: 1e7,
      input: c.join(`
`) + `
`
    });
  if (f.code !== 0) return null;
  let p = new Map;
  for (let h of f.stdout.split(`
`)) {
    let m = h.match(/^([0-9a-f]{40,64}) (\d+)$/);
    if (m && m[1] !== void 0) p.set(m[1], Number(m[2]))
  }
  for (let [h, m] of s) {
    let y = p.get(m.oid);
    if (y === void 0) s.delete(h);
    else m.size = y
  }
  return s
}
async function gt(e, n, r) {
  if (!ye.test(n)) return null;
  let {
    stdout: o,
    code: i
  } = await Ve(yt(), R(["cat-file", "blob", n]), {
    ...D(e, r),
    maxBuffer: V + 65536,
    stripFinalNewline: !1
  });
  return i === 0 ? o : null
}
async function ht(e, n) {
  let r;
  try {
    r = await ot(e, lt)
  } catch (o) {
    return o?.code === "ENOENT" ? {
      kind: "missing"
    } : {
      kind: "restricted"
    }
  }
  try {
    let o = await r.stat({
      bigint: !0
    });
    if (!o.isFile()) return {
      kind: "not-regular-file"
    };
    if (o.nlink !== 1n || o.dev === 0n || o.ino === 0n) return {
      kind: "restricted"
    };
    let i;
    try {
      i = await q(e)
    } catch {
      return {
        kind: "restricted"
      }
    }
    let s = await Ukt(r, o, i);
    if (s === void 0) return {
      kind: "restricted"
    };
    if (i = s, !LE(i, n, "read").allowed || Ra(i, n, "read", "ask") !== null) return {
      kind: "restricted"
    };
    if (iU(i, n.trustedNetworkDirectories) !== void 0) return {
      kind: "restricted"
    };
    if (!await pzt(i, n)) return {
      kind: "restricted"
    };
    let u = await e0e(r, V, o.size);
    if (u.overLimit) return {
      kind: "too-large"
    };
    return {
      kind: "ok",
      content: u.bytes.toString("utf-8")
    }
  } catch {
    return {
      kind: "restricted"
    }
  } finally {
    await r.close().catch(() => {})
  }
}
async function Ee(e, n) {
  let r;
  try {
    r = await q(e)
  } catch (o) {
    r = o?.code === "ENOENT" ? await st(e) : void 0
  }
  return r !== void 0 && iU(r, n.trustedNetworkDirectories) === void 0 && await pzt(r, n)
}
async function Et(e, n, r) {
  let {
    stdout: o,
    code: i
  } = await Ve(yt(), R(["check-attr", "-z", "text", "eol", "filter", "working-tree-encoding", "--", ...n]), {
    ...D(e, r),
    maxBuffer: 1e7
  });
  if (i !== 0) return null;
  let s = new Map,
    u = o.split("\x00");
  for (let c = 0; c + 2 < u.length; c += 3) {
    let f = u[c],
      p = u[c + 1],
      h = u[c + 2];
    if (f === void 0 || p === void 0 || h === void 0) continue;
    let m = s.get(f);
    if (!m) m = {
      text: "unspecified",
      eol: "unspecified",
      filter: "unspecified",
      workingTreeEncoding: "unspecified"
    }, s.set(f, m);
    if (p === "text") m.text = h;
    else if (p === "eol") m.eol = h;
    else if (p === "filter") m.filter = h;
    else if (p === "working-tree-encoding") m.workingTreeEncoding = h
  }
  return s
}
async function wt(e, n) {
  let {
    stdout: r,
    exitCode: o
  } = await Ve(yt(), R(["config", "--get", "core.autocrlf"]), D(e, n));
  if (o !== 0) return !1;
  let i = r.trim().toLowerCase();
  return i === "true" ? "true" : i === "input" ? "input" : !1
}

function kt(e) {
  return e.slice(0, 8000).includes("\x00")
}

function St(e, n, r, o) {
  if (!n) return e;
  if (n.filter !== "unspecified" || n.workingTreeEncoding !== "unspecified") return "unsupported";
  if (n.text === "unset") return e;
  let i;
  if (n.text === "set") i = !1;
  else if (n.text === "auto") i = !0;
  else if (n.text === "unspecified")
    if (r === "true" || r === "input") i = !0;
    else if (n.eol === "crlf" || n.eol === "lf") i = !0;
  else return e;
  else return e;
  if (!e.includes(`\r
`)) return e;
  if (i && (kt(e) || o.includes(`\r
`))) return e;
  return e.replaceAll(`\r
`, `
`)
}

function _t(e, n, r) {
  let o = g3("a", "b", e, n, "", "", {
    context: 3,
    maxEditLength: ut,
    timeout: r
  });
  if (!o) return null;
  return o.hunks.map((i) => ({
    oldStart: i.oldStart,
    oldLines: i.oldLines,
    newStart: i.newStart,
    newLines: i.newLines,
    lines: i.lines.filter((s) => !s.startsWith("\\"))
  })).filter((i) => i.lines.length > 0)
}

function Rt(e) {
  let n = PPt,
    r = [];
  for (let o of e) {
    if (n <= 0) break;
    let i = o.lines.slice(0, n);
    n -= i.length, r.push({
      ...o,
      lines: i
    })
  }
  return r
}
async function OXn(e, n, r = ft) {
  let o = await htn(),
    i = o === null ? await me() : null,
    s = o ?? i;
  if (s === null) return {
    diff: null
  };
  let u = i === null ? null : await ce(i);
  if (i !== null && u === null) return {
    diff: null
  };
  try {
    return await Dt(e, n, r, s, i, u?.spawn)
  } finally {
    await u?.dispose()
  }
}
async function Dt(e, n, r, o, i, s) {
  let u = i ?? void 0,
    c = s ?? {},
    f = await mtn(e, void 0, "branch-point", u, s);
  if (f === null) return {
    diff: null
  };
  let p = i ?? await htn();
  if (p === null || p !== o) return {
    diff: null
  };
  let h = dst(f),
    m = (g) => ({
      diff: {
        stats: f.stats,
        perFileStats: Array.from(f.perFileStats, ([S, F]) => ({
          path: S,
          ...F
        })),
        hunks: g.hunks,
        skippedLarge: g.skippedLarge,
        restricted: g.restricted,
        source: f.source
      }
    }),
    y = [];
  for (let [g, S] of f.perFileStats) {
    if (S.isUntracked || S.isBinary || !dt(g)) continue;
    y.push(g)
  }
  if (y.length === 0) return m({
    hunks: [],
    skippedLarge: [],
    restricted: []
  });
  let k = h === "--cached";
  if (!k && h !== "HEAD" && !ye.test(h)) return m({
    hunks: [],
    skippedLarge: [],
    restricted: []
  });
  let P = k ? await mt(p, y, c) : await pt(p, h, y, c);
  if (P === null) return m({
    hunks: [],
    skippedLarge: [],
    restricted: []
  });
  let T = null;
  if (k) {
    let g = await Ve(yt(), R([...ftn, "--numstat"]), {
      ...D(p, c),
      maxBuffer: 1e7
    });
    if (g.code !== 0) return m({
      hunks: [],
      skippedLarge: [],
      restricted: []
    });
    T = new Set(ust(g.stdout, Number.POSITIVE_INFINITY).perFileStats.keys())
  }
  let ke = k ? null : await Et(p, y, c),
    Se = k ? !1 : await wt(p, c),
    b = [],
    A = [],
    Z = [],
    Q = at,
    G = r.totalMs;
  for (let g of y) {
    await new Promise((E) => setImmediate(E));
    let S = we(p, g),
      F = sU(S, S, n.trustedNetworkDirectories);
    if (!F.ok) {
      A.push(g);
      continue
    }
    if (!F.pathsToCheck.every((E) => LE(E, n, "read").allowed && Ra(E, n, "read", "ask") === null)) {
      A.push(g);
      continue
    }
    let _ = P.get(g);
    if (_ && !ct.has(_.mode)) continue;
    if (_ && (_.size < 0 || _.size > V)) {
      b.push(g);
      continue
    }
    let x = null;
    if (k) {
      if (!_ || T?.has(g)) continue;
      if (!await Ee(S, n)) {
        A.push(g);
        continue
      }
    } else {
      let E = await ht(S, n);
      if (E.kind === "restricted") {
        A.push(g);
        continue
      }
      if (E.kind === "not-regular-file") continue;
      if (E.kind === "too-large") {
        b.push(g);
        continue
      }
      if (E.kind === "missing") {
        if (!_) continue;
        if (!await Ee(S, n)) {
          A.push(g);
          continue
        }
      } else x = E.content
    }
    if (G <= 0) {
      b.push(g);
      continue
    }
    let C = _ ? await gt(p, _.oid, c) : "";
    if (C === null) continue;
    let H = C,
      I;
    if (k) H = "", I = C;
    else if (x === null) I = "";
    else {
      let E = St(x, ke?.get(g), Se, H);
      if (E === "unsupported") continue;
      I = E
    }
    let _e = Date.now(),
      ee = _t(H, I, Math.min(r.perFileMs, G));
    if (G -= Date.now() - _e, ee === null) {
      b.push(g);
      continue
    }
    let z = Rt(ee);
    if (z.length === 0) continue;
    let W = z.reduce((E, Re) => E + Re.lines.reduce((De, Te) => De + Te.length + 1, 0), 0);
    if (W > S$n || W > Q) {
      b.push(g);
      continue
    }
    Q -= W, Z.push({
      path: g,
      hunks: z
    })
  }
  return m({
    hunks: Z,
    skippedLarge: b,
    restricted: A
  })
}
export {
  OXn
};
