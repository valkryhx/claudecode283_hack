// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { tK } from "B:/~BUN/root/chunk-x4gdh7dq.js";
import { d, G } from "B:/~BUN/root/chunk-3aez4b53.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { kn, ks } from "B:/~BUN/root/chunk-yw21pggd.js";
import { oGe, UW, lt, ct } from "B:/~BUN/root/chunk-6ft8yhc8.js";
import { lE, Nfn, Ot } from "B:/~BUN/root/chunk-2zk4vqr8.js";
import { ss } from "B:/~BUN/root/chunk-5g9fghtv.js";
import { k7t, kwe, Yxe as timeout, dvr, T7t, l$n, C7t, dIt, A7t, pvr, fvr, Xxe } from "B:/~BUN/root/chunk-k382hx6g.js";
import { AG, la } from "B:/~BUN/root/chunk-c44qc88s.js";
import { IT } from "B:/~BUN/root/chunk-r0jnxjth.js";
import { rZn, z_n } from "B:/~BUN/root/chunk-a25z4ah4.js";
import { YGt } from "B:/~BUN/root/chunk-3djvawwh.js";
import { XZo } from "B:/~BUN/root/chunk-hz07t54z.js";
import { hN, yN } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { createHash as tt } from "crypto";
import { open as nt, realpath as B } from "fs/promises";
import { basename as Ee, dirname as ye, join as N } from "path";
import { constants as F } from "fs";
import { lstat as ue, mkdir as K, mkdtemp as Ae, open as le, opendir as X, rm as Oe, writeFile as Ie } from "fs/promises";
import { tmpdir as Fe } from "os";
import { join as m } from "path";
var maxBytes_2 = 65536,
  maxBytes = 1e6,
  maxBytes_3 = 33554432,
  maxFileBytes = 65536,
  maxBytes_4 = 65536,
  maxFileBytes_2 = 1e6,
  Le = 67108864,
  Ce = 256,
  He = 20000,
  We = 4096,
  $e = [["core.commitGraph", "false"], ["core.multiPackIndex", "false"]],
  de = {
    disposition: "skip"
  },
  fe = new Map([["config", {
    disposition: "copy",
    kind: "file",
    maxBytes: maxBytes
  }], ["config.worktree", {
    disposition: "copy",
    kind: "file",
    maxBytes: maxBytes
  }], ["HEAD", {
    disposition: "copy",
    kind: "file",
    maxBytes: maxBytes_2
  }], ["packed-refs", {
    disposition: "copy",
    kind: "file",
    maxBytes: maxBytes_3
  }], ["shallow", {
    disposition: "copy",
    kind: "file",
    maxBytes: maxBytes_4
  }], ["refs", {
    disposition: "copy",
    kind: "dir",
    maxFileBytes: maxFileBytes,
    entries: "all"
  }], ["info", {
    disposition: "copy",
    kind: "dir",
    maxFileBytes: maxFileBytes_2,
    entries: new Set(["exclude", "attributes", "sparse-checkout", "grafts"])
  }], ["objects", {
    disposition: "in-place",
    kind: "dir"
  }], ["index", {
    disposition: "in-place",
    kind: "file"
  }], ["commondir", {
    disposition: "refuse"
  }], ["gitdir", {
    disposition: "refuse"
  }], ["reftable", {
    disposition: "refuse"
  }], ...["hooks", "logs", "branches", "remotes", "FETCH_HEAD", "ORIG_HEAD", "MERGE_HEAD", "AUTO_MERGE", "REBASE_HEAD", "CHERRY_PICK_HEAD", "REVERT_HEAD", "MERGE_AUTOSTASH", "COMMIT_EDITMSG", "MERGE_MSG", "MERGE_MODE", "MERGE_RR", "SQUASH_MSG", "TAG_EDITMSG", "rebase-merge", "rebase-apply", "sequencer", "rr-cache", "worktrees", "modules", "lfs", "gc.log", "gc.pid", "description", "gitk.cache"].map(item => [item, de])]),
  ze = /^(?:BISECT_[A-Z_]+|fsmonitor--daemon.*|.+\.lock)$/;
function Ue(e) {
  return fe.get(e) ?? (ze.test(e) ? de : void 0);
}
var je = [/^(?:commit|tag|pull|push|rebase|init|advice|color|column|help|status|fetch|user|branch)\..+$/, /^core\.(?:repositoryformatversion|filemode|bare|logallrefupdates|ignorecase|precomposeunicode|symlinks|autocrlf|eol|safecrlf|longpaths|sparsecheckout|sparsecheckoutcone|quotepath|abbrev|checkstat|trustctime|untrackedcache)$/, /^remote\..+\.(?:url|pushurl|fetch|promisor|partialclonefilter|tagopt|prune|mirror|gh-resolved)$/, /^submodule\.active$/, /^submodule\..+\.(?:active|branch|url)$/, /^http\.(?:.+\.)?extraheader$/, /^maintenance\..+$/, /^(?:extensions\.(?:objectformat|partialclone|worktreeconfig)|lfs\.repositoryformatversion)$/],
  Ke = new Set(["checkout", "rebase", "merge", "none"]);
async function pe(e) {
  let n = C7t(e);
  if (n === null || n.workTree === null) return null;
  let {
      gitDir: gitDir,
      workTree: workTree
    } = n,
    i;
  try {
    let o = await Ye(gitDir);
    if (typeof o === "string") return x(o);
    let c = await Je(m(gitDir, "objects"));
    if (c !== void 0) return x(c);
    i = await Ae(m(Fe(), "ccdiff-"));
    let a = i,
      u = (await qe(gitDir, a, o)) ?? (await Ve(a, o.has("config.worktree")));
    if (u !== void 0) return await j(a), x(u);
    return {
      spawn: Xe(a, gitDir, workTree),
      dispose: () => j(a)
    };
  } catch (error) {
    if (i !== void 0) await j(i);
    return x(`unexpected error (${d(error)})`);
  }
}
async function j(e) {
  await Oe(e, {
    recursive: !0,
    force: !0
  }).catch(() => {
    return;
  });
}
function x(e) {
  return t(`workspace diff: discovered repository refused (${e})`, {
    level: "warn"
  }), null;
}
function me() {
  return [...oGe(), ...$e];
}
function Xe(e, n, workTree_2) {
  return {
    env: {
      ...ks(kwe, {
        base: ss(),
        repository: {
          gitDir: e,
          workTree: workTree_2,
          commonDir: e
        }
      }),
      ...k7t,
      ...UW(void 0, me()),
      GIT_OBJECT_DIRECTORY: m(n, "objects"),
      GIT_INDEX_FILE: m(n, "index")
    },
    extendEnv: !1
  };
}
async function Ye(e) {
  let n = new Set(),
    r = 0;
  for await (let s of await X(e)) {
    if (++r > Ce) return "oversized .git";
    let i = Ue(s.name);
    if (i === void 0) return "unknown .git entry";
    switch (i.disposition) {
      case "skip":
        continue;
      case "refuse":
        return `.git/${s.name}`;
      case "copy":
      case "in-place":
        if (s.name === "index") {
          let o = await ue(m(e, s.name));
          if (!o.isFile() || o.nlink > 1) return "symlinked, hardlinked or unexpected .git/index";
        } else if ((await Y(e, s)) !== i.kind) return `symlinked or unexpected .git/${s.name}`;
        n.add(s.name);
    }
  }
  if (!n.has("config") || !n.has("HEAD")) return "no .git/config or .git/HEAD";
  return n;
}
async function Je(e) {
  for (let n of [e, m(e, "pack"), m(e, "info")]) if (!(await Qe(n))) return "symlinked or oversized .git/objects entry";
  if (await et(m(e, "info", "alternates"))) return ".git/objects/info/alternates";
  return;
}
async function qe(e, n, r) {
  await K(m(n, "refs"), {
    recursive: !0
  });
  let s = {
    entries: 0,
    bytes: 0
  };
  for (let [i, o] of fe) {
    if (o.disposition !== "copy" || !r.has(i)) continue;
    let c = m(e, i),
      a = m(n, i);
    if (o.kind === "file") {
      if ((await we(c, a, o.maxBytes, s)) !== "copied") return `unreadable, linked or oversized .git/${i}`;
      continue;
    }
    if (await K(a, {
      recursive: !0
    }), !(await ge(c, a, o.maxFileBytes, s, o.entries))) return `unreadable, linked or oversized entry under .git/${i}`;
  }
  return;
}
async function Ve(e, n) {
  let r = new Set(me().map(([i]) => i.toLowerCase())),
    s = n ? ["config", "config.worktree"] : ["config"];
  for (let i of s) {
    let o = await lt(Ot(), ["config", "--file", m(e, i), "--no-includes", "-z", "--list"], {
      timeout: timeout,
      maxBuffer: 4000000,
      env: {
        ...ks(kwe, {
          base: ss()
        }),
        ...k7t
      },
      extendEnv: !1,
      stdin: "ignore"
    });
    if (o.code !== 0) return `config ${i} unlistable`;
    for (let c of o.stdout.split("\x00")) {
      if (c === "") continue;
      let a = c.indexOf(`
`),
        u = a === -1 ? c : c.slice(0, a),
        l = a === -1 ? "" : c.slice(a + 1);
      if (l.includes(`
`)) return `multi-line value for ${ce(u)}`;
      if (!Ze(u, l, r)) return `config entry ${ce(u)}`;
    }
  }
  return;
}
function Ze(e, n, r) {
  if (e === "extensions.refstorage") return n === "files";
  if (/^submodule\..+\.update$/.test(e)) return Ke.has(n);
  return r.has(e) || je.some(item => item.test(e));
}
function ce(e) {
  let n = e.split(".");
  return n.length <= 2 ? e : `${n[0]}.<...>.${n.at(-1)}`;
}
async function ge(e, n, r, s, i) {
  let o;
  try {
    o = await X(e);
  } catch (error) {
    return G(error);
  }
  for await (let c of o) {
    if (++s.entries > He) return !1;
    if (i !== "all" && !i.has(c.name)) continue;
    let a = m(e, c.name),
      u = m(n, c.name),
      l = await Y(e, c);
    if (l === "dir" && i === "all") {
      if (await K(u, {
        recursive: !0
      }), !(await ge(a, u, r, s, "all"))) return !1;
    } else if (l === "file") {
      if ((await we(a, u, r, s)) !== "copied") return !1;
    } else return !1;
  }
  return !0;
}
async function Y(e, n) {
  if (n.isSymbolicLink()) return "reject";
  if (n.isDirectory()) return "dir";
  if (n.isFile()) return "file";
  try {
    let r = await ue(m(e, n.name));
    return r.isSymbolicLink() ? "reject" : r.isDirectory() ? "dir" : r.isFile() ? "file" : "reject";
  } catch {
    return "reject";
  }
}
async function Qe(e) {
  let n;
  try {
    n = await X(e);
  } catch (error) {
    return G(error);
  }
  let r = 0;
  for await (let s of n) if (++r > We || (await Y(e, s)) === "reject") return !1;
  return !0;
}
function he() {
  return I() === "windows" ? F.O_RDONLY : F.O_RDONLY | F.O_NONBLOCK | F.O_NOFOLLOW;
}
async function we(e, n, r, s) {
  let i;
  try {
    i = await le(e, he());
  } catch (error) {
    return G(error) ? "absent" : "refused";
  }
  try {
    let o = await i.stat();
    if (!o.isFile() || o.nlink > 1 || o.size > r) return "refused";
    if (s.bytes += o.size, s.bytes > Le) return "refused";
    let c = Buffer.alloc(o.size),
      a = 0;
    while (a < o.size) {
      let {
        bytesRead: bytesRead
      } = await i.read(c, a, o.size - a, a);
      if (bytesRead === 0) break;
      a += bytesRead;
    }
    if (a !== o.size) return "refused";
    return await Ie(n, c), "copied";
  } catch {
    return "refused";
  } finally {
    await i.close().catch(() => {
      return;
    });
  }
}
async function et(e) {
  let n;
  try {
    n = await le(e, he());
  } catch (error) {
    return !G(error);
  }
  try {
    let r = await n.stat();
    return !r.isFile() || r.size > 0;
  } finally {
    await n.close().catch(() => {
      return;
    });
  }
}
async function it(e) {
  let n = ye(e),
    r = [Ee(e)];
  for (let s = 0; s < 64; s++) {
    try {
      let o = await B(n);
      return N(o, ...r);
    } catch (error) {
      if (error?.code !== "ENOENT") return;
    }
    let i = ye(n);
    if (i === n) return;
    r.unshift(Ee(n)), n = i;
  }
  return;
}
var rt = 2000000,
  st = new Set(["100644", "100755", "100664"]),
  J = 1e7,
  maxEditLength = 1e4,
  at = {
    perFileMs: 5000,
    totalMs: 1e4
  },
  ut = rZn;
function ke(e) {
  if (e.length === 0 || e.startsWith('"')) return !1;
  if (/[\u0000-\u001f\u007f\uFFFD]/.test(e)) return !1;
  if (e.startsWith("-") || e.startsWith(":") || e.includes(" => ") || e.includes("\\") || !pvr(e)) return !1;
  return e.split("/").every(item => item !== "" && AG(item) !== ".");
}
function M(e) {
  if (!fvr.test(e)) return e;
  let n = e.length > 1 && e.startsWith('"') && e.endsWith('"') && !e.includes('" => ');
  return XZo(n ? Xxe(e.slice(1, -1)) : e);
}
var Re = /^[0-9a-f]{40,64}$/;
function D(e) {
  return ["--literal-pathspecs", ...kn, ...e];
}
function P(cwd, n) {
  return {
    ...n,
    cwd: cwd,
    timeout: timeout,
    preserveOutputOnError: !1
  };
}
async function dt(e, n, r, s) {
  let {
    stdout: stdout,
    code: code
  } = await ct(Ot(), D(["ls-tree", "-r", "-l", "-z", "--full-tree", n, "--", ...r]), {
    ...P(e, s),
    maxBuffer: 1e7
  });
  if (code !== 0) return null;
  let c = new Map();
  for (let a of stdout.split("\x00")) {
    if (!a) continue;
    let u = a.match(/^(\d{6}) (\S+) ([0-9a-f]{40,64}) +(\d+|-)\t(.+)$/s);
    if (!u) continue;
    let [, mode = "", h, oid = "", k, b] = u;
    if (b === void 0) continue;
    c.set(b, {
      mode: mode,
      oid: oid,
      size: h === "blob" && k !== "-" ? Number(k) : -1
    });
  }
  return c;
}
async function ft(e, n, r) {
  let {
    stdout: stdout_2,
    code: code_2
  } = await ct(Ot(), D(["ls-files", "--stage", "-v", "-z", "--", ...n]), {
    ...P(e, r),
    maxBuffer: 1e7
  });
  if (code_2 !== 0) return null;
  let o = new Map();
  for (let c of stdout_2.split("\x00")) {
    let a = c.match(/^(\S) (\d{6}) ([0-9a-f]{40,64}) (\d)\t(.+)$/s);
    if (!a) continue;
    let [, u = "",, oid_2 = "", h, g = ""] = a;
    o.set(g, {
      entryIsNewSide: h === "0" && (u === "S" || /[a-z]/.test(u)),
      oid: oid_2
    });
  }
  return o;
}
function Se(e, n) {
  let r = Buffer.from(e, "utf-8");
  return tt(n.length === 64 ? "sha256" : "sha1").update(`blob ${r.length}\x00`).update(r).digest("hex");
}
function pt(e, n) {
  if (Se(e, n) === n) return e;
  if (!e.includes(`\r
`)) return null;
  let r = e.replaceAll(`\r
`, `
`);
  return Se(r, n) === n ? r : null;
}
async function mt(e, n, r) {
  if (!Re.test(n)) return null;
  let {
    stdout: stdout_3,
    code: code_3
  } = await ct(Ot(), D(["cat-file", "blob", n]), {
    ...P(e, r),
    maxBuffer: J + 65536,
    stripFinalNewline: !1
  });
  return code_3 === 0 ? stdout_3 : null;
}
async function gt(e, n, r) {
  let s;
  try {
    s = await nt(e, ut);
  } catch (error) {
    return error?.code === "ENOENT" ? {
      kind: "missing"
    } : {
      kind: "restricted"
    };
  }
  try {
    let i = await s.stat({
      bigint: !0
    });
    if (!i.isFile()) return {
      kind: "not-regular-file"
    };
    if (i.nlink !== 1n || i.dev === 0n || i.ino === 0n) return {
      kind: "restricted"
    };
    let o;
    try {
      o = await B(e);
    } catch {
      return {
        kind: "restricted"
      };
    }
    let c = await Nfn(s, i, o);
    if (c === void 0) return {
      kind: "restricted"
    };
    if (o = c, !IT(o, r, "read").allowed || la(o, r, "read", "ask") !== null) return {
      kind: "restricted"
    };
    if (yN(o, r.trustedNetworkDirectories) !== void 0) return {
      kind: "restricted"
    };
    if (!(await z_n(o, r))) return {
      kind: "restricted"
    };
    if (o !== n) return {
      kind: "off-path"
    };
    let a = await lE(s, J, i.size);
    if (a.overLimit) return {
      kind: "too-large"
    };
    return {
      kind: "ok",
      content: a.bytes.toString("utf-8")
    };
  } catch {
    return {
      kind: "restricted"
    };
  } finally {
    await s.close().catch(() => {});
  }
}
async function _e(e, n) {
  let r;
  try {
    r = await B(e);
  } catch (error) {
    r = error?.code === "ENOENT" ? await it(e) : void 0;
  }
  return r !== void 0 && yN(r, n.trustedNetworkDirectories) === void 0 && (await z_n(r, n));
}
async function ht(e, n, r) {
  let {
    stdout: stdout_4,
    code: code_4
  } = await ct(Ot(), D(["check-attr", "-z", "-a", "--", ...n]), {
    ...P(e, r),
    maxBuffer: 1e7
  });
  if (code_4 !== 0) return null;
  let o = new Map(n.map(item => [item, {
      text: "unspecified",
      eol: "unspecified",
      converted: !1
    }])),
    c = stdout_4.split("\x00");
  for (let a = 0; a + 2 < c.length; a += 3) {
    let u = c[a],
      l = c[a + 1],
      h = c[a + 2];
    if (u === void 0 || l === void 0 || h === void 0) continue;
    let g = o.get(u);
    if (!g) continue;
    if (l === "text") g.text = h;else if (l === "eol") g.eol = h;else if (l === "filter" || l === "working-tree-encoding") g.converted = !0;
  }
  return o;
}
async function wt(e, n) {
  let {
    stdout: stdout_5,
    exitCode: exitCode
  } = await ct(Ot(), D(["config", "--get", "core.autocrlf"]), P(e, n));
  if (exitCode !== 0) return !1;
  let i = stdout_5.trim().toLowerCase();
  return i === "true" ? "true" : i === "input" ? "input" : !1;
}
function Et(e) {
  return e.slice(0, 8000).includes("\x00");
}
function yt(e, n, r, s) {
  if (!n || n.converted) return "unsupported";
  if (n.text === "unset") return e;
  let i;
  if (n.text === "set") i = !1;else if (n.text === "auto") i = !0;else if (n.text === "unspecified") {
    if (r === "true" || r === "input") i = !0;else if (n.eol === "crlf" || n.eol === "lf") i = !0;else return e;
  } else return e;
  if (!e.includes(`\r
`)) return e;
  if (i && (Et(e) || s.includes(`\r
`))) return e;
  return e.replaceAll(`\r
`, `
`);
}
function kt(e, n, timeout_2) {
  let s = tK("a", "b", e, n, "", "", {
    context: 3,
    maxEditLength: maxEditLength,
    timeout: timeout_2
  });
  if (!s) return null;
  return s.hunks.map(item => ({
    oldStart: item.oldStart,
    oldLines: item.oldLines,
    newStart: item.newStart,
    newLines: item.newLines,
    lines: item.lines.filter(item => !item.startsWith("\\"))
  })).filter(item => item.lines.length > 0);
}
function St(e) {
  let n = T7t,
    r = [];
  for (let s of e) {
    if (n <= 0) break;
    let lines = s.lines.slice(0, n);
    n -= lines.length, r.push({
      ...s,
      lines: lines
    });
  }
  return r;
}
async function zGr(e, n, r = at) {
  let s = await YGt();
  if (s === null) return {
    diff: null
  };
  let i = s.nested ? s.root : null,
    o = i === null ? null : await pe(i);
  if (i !== null && o === null) return {
    diff: null
  };
  try {
    return await _t(e, n, r, s.root, i, o?.spawn);
  } finally {
    await o?.dispose();
  }
}
async function _t(e, n, r, s, i, o) {
  let c = i ?? void 0,
    a = o ?? {},
    u = await l$n(e, void 0, "branch-point", c, o);
  if (u === null) return {
    diff: null
  };
  let l = i ?? (await A7t());
  if (l === null || l !== s) return {
    diff: null
  };
  let h = dIt(u),
    g = f => ({
      diff: {
        stats: u.stats,
        perFileStats: Array.from(u.perFileStats, ([p, E]) => ({
          path: M(p),
          ...E
        })),
        hunks: f.hunks.map(item => ({
          ...item,
          path: M(item.path)
        })),
        skippedLarge: f.skippedLarge.map(M),
        restricted: f.restricted.map(M),
        source: u.source
      }
    }),
    k = [];
  for (let [key, p] of u.perFileStats) {
    let newPath = p.newPath ?? key,
      oldPath = p.previousPath ?? newPath;
    if (p.status === void 0 || p.isUntracked || p.isBinary || !ke(oldPath) || !ke(newPath)) continue;
    k.push({
      key: key,
      oldPath: oldPath,
      newPath: newPath,
      removed: p.status === "removed"
    });
  }
  if (k.length === 0) return g({
    hunks: [],
    skippedLarge: [],
    restricted: []
  });
  let b = h === "--cached";
  if (!b && h !== "HEAD" && !Re.test(h)) return g({
    hunks: [],
    skippedLarge: [],
    restricted: []
  });
  let q = k.map(item => item.newPath),
    [V, Z] = await Promise.all([b ? new Map() : dt(l, h, k.map(item => item.oldPath), a), ft(l, q, a)]);
  if (V === null || Z === null) return g({
    hunks: [],
    skippedLarge: [],
    restricted: []
  });
  let Q;
  try {
    Q = await B(l);
  } catch {
    return g({
      hunks: [],
      skippedLarge: [],
      restricted: []
    });
  }
  let be = await ht(l, q, a),
    Te = await wt(l, a),
    skippedLarge = [],
    restricted = [],
    hunks_2 = [],
    te = rt,
    totalMs = r.totalMs;
  for (let {
    key: f,
    oldPath: oldPath_2,
    newPath: newPath_2,
    removed: removed
  } of k) {
    await new Promise(w => setImmediate(w));
    let ne = N(l, newPath_2),
      C = N(l, oldPath_2),
      A = [];
    for (let w of new Set([ne, C])) {
      let O = hN(w, w, n.trustedNetworkDirectories);
      if (!O.ok) {
        A = null;
        break;
      }
      A.push(...O.pathsToCheck);
    }
    if (A === null) {
      restricted.push(f);
      continue;
    }
    if (!A.every(item => IT(item, n, "read").allowed && la(item, n, "read", "ask") === null)) {
      restricted.push(f);
      continue;
    }
    let y = V.get(oldPath_2);
    if (y && !st.has(y.mode)) continue;
    if (y && (y.size < 0 || y.size > J)) {
      skippedLarge.push(f);
      continue;
    }
    let H = null,
      T = Z.get(newPath_2);
    if (T === void 0 && !y) {
      restricted.push(f);
      continue;
    }
    let S = removed || T === void 0 ? {
      kind: "missing"
    } : await gt(ne, N(Q, newPath_2), n);
    if (S.kind === "restricted") {
      restricted.push(f);
      continue;
    }
    if (S.kind === "not-regular-file" || S.kind === "off-path") continue;
    if (S.kind === "too-large") {
      skippedLarge.push(f);
      continue;
    }
    let ie = T?.entryIsNewSide && S.kind === "ok" ? pt(S.content, T.oid) : null;
    if (T?.entryIsNewSide && ie === null) continue;
    if (S.kind === "missing") {
      if (!y) continue;
      if (!(await _e(C, n))) {
        restricted.push(f);
        continue;
      }
    } else if (H = S.content, y && oldPath_2 !== newPath_2 && !(await _e(C, n))) {
      restricted.push(f);
      continue;
    }
    if (totalMs <= 0) {
      skippedLarge.push(f);
      continue;
    }
    let re = y ? await mt(l, y.oid, a) : "";
    if (re === null) continue;
    let se = re,
      W;
    if (H === null) W = "";else {
      let w = yt(H, be?.get(newPath_2), Te, se);
      if (w === "unsupported") continue;
      W = ie ?? w;
    }
    let De = Date.now(),
      oe = kt(se, W, Math.min(r.perFileMs, totalMs));
    if (totalMs -= Date.now() - De, oe === null) {
      skippedLarge.push(f);
      continue;
    }
    let hunks = St(oe);
    if (hunks.length === 0) continue;
    let U = hunks.reduce((acc, item) => acc + item.lines.reduce((acc, item) => acc + item.length + 1, 0), 0);
    if (U > dvr || U > te) {
      skippedLarge.push(f);
      continue;
    }
    te -= U, hunks_2.push({
      path: f,
      hunks: hunks
    });
  }
  return g({
    hunks: hunks_2,
    skippedLarge: skippedLarge,
    restricted: restricted
  });
}
export { zGr };