// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Po, Dxe } from "B:/~BUN/root/chunk-game8aqv.js";
import { d, k, K, wr, Nh } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { En } from "B:/~BUN/root/chunk-h4acfc9y.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { MDn, Igs, Mgs, e0t, d_e, muo, t0t, huo, IQt, Ngs, n0t, Hgs, MQt, guo, B0e, DDn, c_e, lJe, $gs, Ugs, bpt, V6, XSr, F2, r0t } from "B:/~BUN/root/chunk-hjds4dtx.js";
import { ku } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Qo, tt, M5 } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { ZF } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { um, lxe, tg, ty, Pt } from "B:/~BUN/root/chunk-1g25msn4.js";
import { pe } from "B:/~BUN/root/chunk-thn0wk2x.js";
import { yn, ys } from "B:/~BUN/root/chunk-88zb3509.js";
import { gxe, NSt, lnt, rY, ut, lt } from "B:/~BUN/root/chunk-3mm90xb6.js";
import { Cp } from "B:/~BUN/root/chunk-5xx1vfdh.js";
import { tn, Gpe, $1t, ZGn, ddn, rta } from "B:/~BUN/root/chunk-1fg2bpc3.js";
import { D9i } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { es } from "B:/~BUN/root/chunk-0s9zh2h6.js";
import { Aa } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { fD, x0n, Y$ } from "B:/~BUN/root/chunk-b7bhhce8.js";
import { oGr, B9s } from "B:/~BUN/root/chunk-qf9ct1qb.js";
import { Ge } from "B:/~BUN/root/chunk-z7bs0q82.js";
import { Kmr, Jso, A9 as timeout, Jmr, bWe, kXt, wPn } from "B:/~BUN/root/chunk-2fedt3ag.js";
import { qP } from "B:/~BUN/root/chunk-pw7914mv.js";
import { $3n, VFo, KFo, YFo, XFo, v8s } from "B:/~BUN/root/chunk-kxp3hy4n.js";
import { H1e } from "B:/~BUN/root/chunk-5kj9dj0y.js";
import { jEe, CPn, P9e } from "B:/~BUN/root/chunk-7q19e5st.js";
import { tLe, wHi } from "B:/~BUN/root/chunk-ymawhbhz.js";
import { ou } from "B:/~BUN/root/chunk-epyd9ybj.js";
import { po } from "B:/~BUN/root/chunk-67erjrg5.js";
import { L } from "B:/~BUN/root/chunk-5ha2avah.js";
import { constants as Ht } from "fs";
import { access as jt, appendFile as Ce, lstat as Bt, mkdir as Ut, mkdtemp as Wt, readdir as be, rm as Yt, writeFile as Fe } from "fs/promises";
import { tmpdir as zt } from "os";
import { basename as Kt, join as O, resolve as Xt } from "path";
import { lstat as j, opendir as Be, realpath as ae } from "fs/promises";
import { join as H, sep as le } from "path";
async function _mn() {
  let root = V() ? null : await wPn();
  if (root !== null) return {
    root: root,
    nested: !1,
    followsShell: !1
  };
  let n = await Ye();
  return n === null ? null : {
    ...n,
    nested: !0
  };
}
var Ue = new W(() => new Set());
function V() {
  if (rta()) return !0;
  if (!Gpe()) return !1;
  let e = Po(Ue),
    n = bWe();
  if (!e.has(n) && !kXt()) e.add(n);
  return e.has(n);
}
var We = 256;
async function Ye() {
  try {
    if (!(tn() || Gpe()) || Ge.isSandboxingEnabled()) return null;
    let e = bWe(),
      n = tn() ? null : Cp(await ae(e));
    if (n !== null && ![$1t(), ZGn($1t())].some(item => En(n) === Cp(item))) return t("workspace diff: the process has left the directory in which it was started, so no nested repository is looked for", {
      level: "warn"
    }), null;
    if (ty(e) !== null) return null;
    let o = pe(),
      r = await ze(n, e);
    if (r.size > 1) {
      let E = Jso(o),
        u = E === void 0 ? void 0 : r.get(E),
        root_2 = u !== void 0 && (await X(u)) === "directory" ? await q(u, n) : null;
      return root_2 === null ? null : {
        root: root_2,
        followsShell: !0
      };
    }
    let [s] = r.values();
    if (s !== void 0) {
      let E = await X(s);
      if (E === "directory") {
        let root_3 = await q(s, n);
        return root_3 === null ? null : {
          root: root_3,
          followsShell: !1
        };
      }
      if (E === "other") return null;
    }
    let l = [],
      f = 0;
    for await (let E of await Be(e)) {
      if (++f > We) return null;
      if (!E.isDirectory() || E.name.startsWith(".")) continue;
      let u = H(e, E.name);
      if ((await X(u)) !== "absent") l.push(u);
    }
    let p = Cp(o),
      w = l.find(item => {
        let u = Cp(item);
        return p === u || p.startsWith(u + le);
      }) ?? (l.length === 1 ? l[0] : void 0),
      root_4 = w === void 0 ? null : await q(w, n);
    return root_4 === null ? null : {
      root: root_4,
      followsShell: l.length > 1
    };
  } catch (error) {
    if (Nh(error)) t(`workspace diff: nested repository scan failed: ${d(error)}`, {
      level: "warn"
    });else a(error);
    return null;
  }
}
async function ze(e, n) {
  let o = Kmr();
  if (e === null) return o;
  let r = new Map();
  for (let [s, l] of o) {
    let f = await fe(l, n);
    if (f !== null && ce(f, e)) r.set(s, f);
  }
  if (r.size < o.size) t(`workspace diff: ignored ${o.size - r.size} declared checkout(s) that do not resolve or lie outside the launch directory`, {
    level: "warn"
  });
  return r;
}
function ce(e, n) {
  let o = Cp(e);
  return o === n || o.startsWith(n + le);
}
async function fe(e, n) {
  if (!ddn(e, n) || lxe(e, n)) return null;
  try {
    return await ae(e);
  } catch {
    return null;
  }
}
async function X(e) {
  try {
    return (await j(H(e, ".git"))).isDirectory() ? "directory" : "other";
  } catch (error) {
    let o = k(error);
    if (o === "ENOENT" || o === "ENOTDIR") return "absent";
    throw error;
  }
}
async function Ke(e) {
  try {
    let [n, o, r] = await Promise.all([j(H(e, "HEAD")), j(H(e, "objects")), j(H(e, "refs"))]);
    return n.isFile() && o.isDirectory() && r.isDirectory();
  } catch {
    return !1;
  }
}
async function q(e, n) {
  let o = Jmr(e);
  if (o === null) return null;
  if (n !== null) {
    if (D9i(o.gitDir) !== !1) return null;
    if (!(await Ke(o.gitDir))) return null;
  }
  let r = n === null ? await wPn(void 0, e) : o.workTree;
  if (r === null || n === null) return r;
  let s = await fe(r, ZGn($1t()));
  return s !== null && ce(s, n) ? s : null;
}
import { relative as Xe } from "path";
function de(e) {
  let n = Y$([e]);
  return L(Y$(fD()).flatMap(item => n.flatMap(r => {
    if (ou(item, r, !0)) return [""];
    return ou(r, item, !1) ? [`${Xe(r, item)}/`] : [];
  })));
}
import { constants as B } from "fs";
import { lstat as we, mkdir as Y, mkdtemp as qe, open as Ee, opendir as J, rm as Ve, writeFile as Je } from "fs/promises";
import { tmpdir as Qe } from "os";
import { isAbsolute as Ze, join as N } from "path";
var maxBytes_2 = 65536,
  maxBytes = 1e6,
  maxBytes_3 = 33554432,
  maxFileBytes = 65536,
  maxBytes_4 = 65536,
  maxFileBytes_2 = 1e6,
  st = 67108864,
  at = 256,
  ct = 20000,
  ft = 4096,
  dt = [["core.commitGraph", "false"], ["core.multiPackIndex", "false"]],
  he = {
    disposition: "skip"
  },
  Se = new Map([["config", {
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
  }], ...["hooks", "logs", "branches", "remotes", "FETCH_HEAD", "ORIG_HEAD", "MERGE_HEAD", "AUTO_MERGE", "REBASE_HEAD", "CHERRY_PICK_HEAD", "REVERT_HEAD", "MERGE_AUTOSTASH", "COMMIT_EDITMSG", "MERGE_MSG", "MERGE_MODE", "MERGE_RR", "SQUASH_MSG", "TAG_EDITMSG", "rebase-merge", "rebase-apply", "sequencer", "rr-cache", "worktrees", "modules", "lfs", "gc.log", "gc.pid", "description", "gitk.cache"].map(item => [item, he])]),
  pt = /^(?:BISECT_[A-Z_]+|fsmonitor--daemon.*|.+\.lock)$/;
function mt(e) {
  return Se.get(e) ?? (pt.test(e) ? he : void 0);
}
var gt = [/^(?:commit|tag|pull|push|rebase|init|advice|color|column|help|status|fetch|user|branch)\..+$/, /^core\.(?:repositoryformatversion|filemode|bare|logallrefupdates|ignorecase|precomposeunicode|symlinks|autocrlf|eol|safecrlf|longpaths|sparsecheckout|sparsecheckoutcone|quotepath|abbrev|checkstat|trustctime|untrackedcache)$/, /^remote\..+\.(?:url|pushurl|fetch|promisor|partialclonefilter|tagopt|prune|mirror|gh-resolved)$/, /^submodule\.active$/, /^submodule\..+\.(?:active|branch|url)$/, /^http\.(?:.+\.)?extraheader$/, /^maintenance\..+$/, /^(?:extensions\.(?:objectformat|partialclone|worktreeconfig)|lfs\.repositoryformatversion)$/],
  _t = [/^http\.(?:.+\.)?(?:sslcainfo|sslcapath|sslverify|proxy)$/, /^lfs\..+\.(?:access|locksverify)$/, /^merge\.conflictstyle$/],
  wt = new Set(["checkout", "rebase", "merge", "none"]);
async function w8s(e, n, o) {
  let r = Jmr(e);
  if (r === null || r.workTree === null) return null;
  if (Gpe() && Cp(r.workTree) !== Cp(e)) return C("a folder that is no longer the one that was checked", n);
  let {
      gitDir: gitDir,
      workTree: workTree
    } = r,
    f;
  try {
    let p = await Nt(gitDir);
    if (typeof p === "string") return C(p, n);
    let w = await It(N(gitDir, "objects"));
    if (w !== void 0) return C(w, n);
    let S = await Et();
    if (S === null) return C(Re, n);
    f = await qe(N(S, "ccdiff-"));
    let E = f,
      u = (await Ot(gitDir, E, p)) ?? (await kt(E, p.has("config.worktree")));
    if (u !== void 0) return await U(E), C(u, n);
    let spawn = Z(E, gitDir, workTree);
    if (!(await Q(e, spawn, o))) return await U(E), C(ye, n);
    return {
      spawn: spawn,
      dispose: () => U(E)
    };
  } catch (error) {
    if (f !== void 0) await U(f);
    return C(`unexpected error (${d(error)})`, n);
  }
}
var ye = "git older than 2.32, or its version unread";
async function Q(cwd, n, abortSignal) {
  let {
    stdout: stdout,
    code: code
  } = await lt(Pt(), ["version"], {
    ...n,
    cwd: cwd,
    timeout: timeout,
    abortSignal: abortSignal,
    preserveOutputOnError: !1,
    stdin: "ignore"
  }).catch(() => ({
    stdout: "",
    code: 1
  }));
  return code === 0 && wHi(tLe(stdout));
}
var Re = "no folder for the copy";
async function Et() {
  if (!Gpe()) return Qe();
  let CLAUDE_CODE_DIFF_COPY_ROOT = i.CLAUDE_CODE_DIFF_COPY_ROOT;
  if (CLAUDE_CODE_DIFF_COPY_ROOT === void 0 || !Ze(CLAUDE_CODE_DIFF_COPY_ROOT)) return null;
  return await Y(CLAUDE_CODE_DIFF_COPY_ROOT, {
    recursive: !0,
    mode: 448
  }), CLAUDE_CODE_DIFF_COPY_ROOT;
}
async function U(e) {
  await Ve(e, {
    recursive: !0,
    force: !0
  }).catch(() => {
    return;
  });
}
function C(e, n) {
  if (t(`workspace diff: discovered repository refused (${e})`, {
    level: "warn"
  }), n !== void 0) Rt(e, ht.of(n));
  return null;
}
var ht = new W(() => new Set()),
  St = 8,
  me = "",
  yt = /^[a-z0-9-]{1,40}(?:\.<\.\.\.>)?\.[a-z0-9-]{1,40}$/;
function Rt(e, n) {
  if (!Gpe()) return;
  let o = Tt(e);
  if (n.has(o)) return;
  if (n.size >= St) {
    if (!n.has(me)) n.add(me), process.stderr.write(`${KFo}
`);
    return;
  }
  n.add(o), process.stderr.write(`${o}
`);
}
function Tt(e) {
  return `${$3n} ${Dt(e)} ${VFo}`;
}
function Dt(e) {
  let n = /^(config entry|config value of|multi-line value for) (.+)$/.exec(e);
  if (n !== null) {
    let r = n[2] ?? "";
    if (!yt.test(r)) return "Its own git settings (.git/config or .git/config.worktree) have a setting whose name is not shown: it is too long, or not plain letters, digits and dashes.";
    let s = r.includes("<...>") ? 'shown in lower case, "<...>" for the middle of its name' : "shown in lower case";
    if (n[1] === "config entry") return `Its own git settings (.git/config or .git/config.worktree) have the setting "${r}" (${s}), which is not one Claude Code accepts there.`;
    return n[1] === "config value of" ? `Its own git settings (.git/config or .git/config.worktree) give the setting "${r}" (${s}) a value that is not one Claude Code accepts there.` : `Its own git settings (.git/config or .git/config.worktree) give the setting "${r}" (${s}) a value that runs over several lines.`;
  }
  if (e === Re) return YFo;
  if (e === ye) return XFo;
  let o = tt(e, " (");
  if (o === "unexpected error") return "An unexpected error stopped the check of its .git folder; the session's debug log has the details.";
  return v8s(o) ? `The check of its .git folder stopped at: ${o}.` : "The check of its .git folder stopped for a reason that is not shown.";
}
function Te() {
  return [...lnt(), ...dt];
}
function Z(e, n, workTree_2) {
  return {
    env: {
      ...ys(jEe, {
        base: es(),
        repository: {
          gitDir: e,
          workTree: workTree_2,
          commonDir: e
        }
      }),
      ...P9e,
      ...rY(void 0, Te()),
      GIT_OBJECT_DIRECTORY: N(n, "objects"),
      GIT_INDEX_FILE: N(n, "index"),
      [NSt]: "1"
    },
    extendEnv: !1,
    gitStartsIn: gxe.filesystemRoot()
  };
}
async function Nt(e) {
  let n = new Set(),
    o = 0;
  for await (let r of await J(e)) {
    if (++o > at) return "oversized .git";
    let s = mt(r.name);
    if (s === void 0) return "unknown .git entry";
    switch (s.disposition) {
      case "skip":
        continue;
      case "refuse":
        return `.git/${r.name}`;
      case "copy":
      case "in-place":
        if (r.name === "index") {
          let l = await we(N(e, r.name));
          if (!l.isFile() || l.nlink > 1) return "symlinked, hardlinked or unexpected .git/index";
        } else if ((await ee(e, r)) !== s.kind) return `symlinked or unexpected .git/${r.name}`;
        n.add(r.name);
    }
  }
  if (!n.has("config") || !n.has("HEAD")) return "no .git/config or .git/HEAD";
  return n;
}
async function It(e) {
  let o = await _e(e);
  if (o === null) return "symlinked or oversized .git/objects entry";
  for (let r of o) if ((await _e(N(e, r))) === null) return "symlinked or oversized .git/objects entry";
  if (await vt(N(e, "info", "alternates"))) return ".git/objects/info/alternates";
  return;
}
async function Ot(e, n, o) {
  await Y(N(n, "refs"), {
    recursive: !0
  });
  let r = {
    entries: 0,
    bytes: 0
  };
  for (let [s, l] of Se) {
    if (l.disposition !== "copy" || !o.has(s)) continue;
    let f = N(e, s),
      p = N(n, s);
    if (l.kind === "file") {
      if ((await Oe(f, p, l.maxBytes, r)) !== "copied") return `unreadable, linked or oversized .git/${s}`;
      continue;
    }
    if (await Y(p, {
      recursive: !0
    }), !(await Ne(f, p, l.maxFileBytes, r, l.entries))) return `unreadable, linked or oversized entry under .git/${s}`;
  }
  return;
}
async function kt(e, n) {
  let o = new Set(Te().map(([s]) => s.toLowerCase())),
    r = n ? ["config", "config.worktree"] : ["config"];
  for (let s of r) {
    let l = await ut(Pt(), ["config", "--file", N(e, s), "--no-includes", "-z", "--list"], {
      cwd: gxe.filesystemRoot().path,
      gitStartsIn: gxe.filesystemRoot(),
      timeout: timeout,
      maxBuffer: 4000000,
      env: {
        ...ys(jEe, {
          base: es()
        }),
        ...P9e,
        GIT_DIR: N(e, "no-repository-here"),
        [NSt]: "1"
      },
      extendEnv: !1,
      stdin: "ignore"
    });
    if (l.code !== 0) return `config ${s} unlistable`;
    for (let f of l.stdout.split("\x00")) {
      if (f === "") continue;
      let p = f.indexOf(`
`),
        w = p === -1 ? f : f.slice(0, p),
        S = p === -1 ? "" : f.slice(p + 1);
      if (S.includes(`
`)) return `multi-line value for ${ge(w)}`;
      if (!bt(w, S, o)) return `${At(w) ? "config value of" : "config entry"} ${ge(w)}`;
    }
  }
  return;
}
var De = /^submodule\..+\.update$/;
function At(e) {
  return e === "extensions.refstorage" || De.test(e);
}
function bt(e, n, o) {
  if (e === "extensions.refstorage") return n === "files";
  if (De.test(e)) return wt.has(n);
  return o.has(e) || gt.some(item => item.test(e)) || Gpe() && _t.some(item => item.test(e));
}
function ge(e) {
  let n = e.split(".");
  return n.length <= 2 ? e : `${n[0]}.<...>.${n.at(-1)}`;
}
async function Ne(e, n, o, r, s) {
  let l;
  try {
    l = await J(e);
  } catch (error) {
    return K(error);
  }
  for await (let f of l) {
    if (++r.entries > ct) return !1;
    if (s !== "all" && !s.has(f.name)) continue;
    let p = N(e, f.name),
      w = N(n, f.name),
      S = await ee(e, f);
    if (S === "dir" && s === "all") {
      if (await Y(w, {
        recursive: !0
      }), !(await Ne(p, w, o, r, "all"))) return !1;
    } else if (S === "file") {
      if ((await Oe(p, w, o, r)) !== "copied") return !1;
    } else return !1;
  }
  return !0;
}
async function ee(e, n) {
  if (n.isSymbolicLink()) return "reject";
  if (n.isDirectory()) return "dir";
  if (n.isFile()) return "file";
  try {
    let o = await we(N(e, n.name));
    return o.isSymbolicLink() ? "reject" : o.isDirectory() ? "dir" : o.isFile() ? "file" : "reject";
  } catch {
    return "reject";
  }
}
async function _e(e) {
  let n;
  try {
    n = await J(e);
  } catch (error) {
    return K(error) ? [] : null;
  }
  let o = [],
    r = 0;
  for await (let s of n) {
    if (++r > ft) return null;
    let l = await ee(e, s);
    if (l === "reject") return null;
    if (l === "dir") o.push(s.name);
  }
  return o;
}
function Ie() {
  return x() === "windows" ? B.O_RDONLY : B.O_RDONLY | B.O_NONBLOCK | B.O_NOFOLLOW;
}
async function Oe(e, n, o, r) {
  let s;
  try {
    s = await Ee(e, Ie());
  } catch (error) {
    return K(error) ? "absent" : "refused";
  }
  try {
    let l = await s.stat();
    if (!l.isFile() || l.nlink > 1 || l.size > o) return "refused";
    if (r.bytes += l.size, r.bytes > st) return "refused";
    let f = Buffer.alloc(l.size),
      p = 0;
    while (p < l.size) {
      let {
        bytesRead: bytesRead
      } = await s.read(f, p, l.size - p, p);
      if (bytesRead === 0) break;
      p += bytesRead;
    }
    if (p !== l.size) return "refused";
    return await Je(n, f), "copied";
  } catch {
    return "refused";
  } finally {
    await s.close().catch(() => {
      return;
    });
  }
}
async function vt(e) {
  let n;
  try {
    n = await Ee(e, Ie());
  } catch (error) {
    return !K(error);
  }
  try {
    let o = await n.stat();
    return !o.isFile() || o.size > 0;
  } finally {
    await n.close().catch(() => {
      return;
    });
  }
}
import { isAbsolute as Ft } from "path";
var regExp = new RegExp(String.raw`^[#.]*(\.env(\..*)?|\.envrc|.*\.(pem|key|p12|pfx|p8|ppk|keystore|jks)|.*_(rsa|dsa|ecdsa|ed25519)(_sk(_rk(_.*)?)?)?|.*credentials.*|device-keys\.json.*|.*secrets?\.(ya?ml|json|toml)|terraform\.tfvars(\.json)?|\.netrc|\.npmrc|\.pypirc|deploykey|kubeconfig(\.(ya?ml|json))?)(` + MDn + String.raw`|#)*$`, "is"),
  P = [...Igs.map(item => [item]), ...Mgs],
  Lt = P.filter(([e, n]) => e !== ".claude" || n !== "settings.json"),
  ne = ["config", "config.worktree", "config.lock", "config.worktree.lock"],
  xt = Math.max(...P.map(item => item.length)),
  Gt = /^[\x00-\x7f]*$/;
function te(e) {
  return e.slice(0, 1) + tt(e.slice(1), ".");
}
var regExp_2 = new RegExp(L([...P.map(([e]) => te(e ?? "")), ...bpt.map(([, e]) => te(e))]).map(Qo).join("|"));
function $t(e) {
  if (e.length > d_e) return !0;
  let n = c_e(e);
  if (n === null) return !0;
  let o = [...r0t(e).map(item => item(DDn(e))), e.toLowerCase()].map(item => B0e(item));
  return regExp.test(e) || o.some(item => item.length > e0t) || L([...o.flat(), ...n.map(item => item.toLowerCase())]).some(item => regExp.test(item) || Ugs(item) && e !== ".mcp.json" || XSr(item));
}
function Ae(e) {
  let n = po(_ => IQt(_)),
    o = e.split(Hgs()).filter(item => item !== ""),
    r = [...o, "x"].join("/"),
    s = c_e(r),
    l = [r, ...(s ?? [])].map(item => item.split("/").slice(0, -1)),
    f = l.map(item => item.map(item => n(item))),
    p = `${/^[a-z]:/i.test(e) ? "" : "/"}${o.map(item => `${item}/`).join("")}`,
    w = s !== null && Ft(e) && !lJe(`${p}x`);
  if (f.some(item => P.some(y => MQt(item, y))) || w && muo(`${p}x`)) return () => !0;
  let S = w ? x0n().flatMap(({
      literal: literal,
      tail: tail
    }) => {
      let I = literal.split(/[\\/]/).filter(item => item !== "").map(item => item.toLowerCase()),
        F = tail.toLowerCase().split(/[*?[\]/]/).find(item => item !== "");
      return l.filter(item => item.slice(0, I.length).every((item, index) => item.toLowerCase() === I[index] || n(item).includes(I[index] ?? ""))).map(item => te(I[item.length] ?? F ?? ""));
    }) : [],
    E = S.length === 0 ? null : new RegExp(L(S).map(Qo).join("|")),
    u = f.some(item => huo([...item, ["config"]])),
    h = f.flatMap(item => Array.from({
      length: xt - 1
    }, (y, I) => item.slice(-(I + 1))).filter(item => P.some(I => I.length > item.length && MQt(item, I.slice(0, item.length))))),
    R = L(f.flatMap(item => bpt.map(([y]) => y).filter(y => item.at(-1)?.includes(y)))),
    T = h.length === 0 && R.length === 0;
  return _ => {
    if (lJe(_)) return !0;
    let y = _.toLowerCase(),
      I = Gt.test(_),
      F = [_, ...$gs(_)],
      A = F.flatMap(n0t),
      G = [...F, ...A],
      M = A.map(item => `/${M5(item, "/")}`);
    if (L(G.map(item => item.split("/").filter(item => item !== "").at(-1) ?? "")).some(item => $t(item) || item === ".mcp.json" && !_.endsWith(item) || Ngs(item).some(item => XSr(item) || u && ne.includes(item))) || M.some(item => item.endsWith("/.mcp.json")) || E !== null && (!I || E.test(y)) && F.some(item => muo(`${p}${item}`))) return !0;
    let re = y.indexOf(".git"),
      ie = re === -1 ? -1 : y.indexOf("/", re);
    if (T && I && !regExp_2.test(y) && (ie === -1 || !y.includes("config", ie))) return !1;
    let He = `/${p}${_}`.endsWith("/.claude/settings.json") && !M.some(item => item.endsWith("/.claude/settings.json")) ? Lt : P,
      se = c_e(_);
    return se === null || ["", ...R.map(item => `${item}/`)].some(item => F.some(b => V6(`${item}${b}`))) || L([...G, ...se]).some(item => {
      let b = item.split("/").filter(item => item !== "").map((item, index, je) => index === je.length - 1 ? Ngs(item) : n(item));
      return b.some(item => item.length > e0t) || F2(item) || huo(b) || [[], ...h].some(item => He.some(z => MQt([...item, ...b], z)) || guo([...item, ...b]));
    });
  };
}
var qt = "e69de29bb2d1d6434b8b29ae775ad8c2e48c5391",
  Vt = "4b825dc642cb6eb9a060e54bf8d69288fbee4904",
  Jt = 1e4,
  Qt = 256,
  Zt = 32,
  regExp_3 = new RegExp(`^(?:[^/]*/){${Zt + 1}}`),
  nn = [...ne, "head", ...oGr.map(item => item.toLowerCase())],
  Le = "[0-9a-fA-F]{8}(?:-[0-9a-fA-F]{4}){3}-[0-9a-fA-F]{12}",
  regExp_4 = new RegExp(`^((?:[^]*\\/)?)projects\\/[^/]+\\/${Le}\\.jsonl$`),
  regExp_5 = new RegExp(`^${Le}\\.jsonl$`),
  ve = 256,
  sn = /[^\x20-\x7e]|["\\]/,
  an = 20000000,
  ln = 1e8,
  xe = [".gitignore", ".gitattributes"],
  Pe = ["node_modules", "site-packages", "__pycache__"],
  cn = ["/.*", ...xe.map(item => `!/${item}`), ".*/", ...Pe.map(item => `${item}/`), ""].join(`
`);
function fn(e) {
  let n = e.split("/").slice(0, -1);
  return e.startsWith(".") && !xe.includes(e) || n.some(item => item.startsWith(".") || Pe.includes(item));
}
var dn = `[core]
	repositoryformatversion = 0
	bare = false
	excludesFile = ${CPn}
	attributesFile = ${CPn}
`,
  un = {
    GIT_AUTHOR_NAME: "Claude Code",
    GIT_AUTHOR_EMAIL: "noreply@anthropic.com",
    GIT_COMMITTER_NAME: "Claude Code",
    GIT_COMMITTER_EMAIL: "noreply@anthropic.com"
  };
function Me() {
  return !1;
}
function H3n(e) {
  if (V()) return {
    listed: null,
    noDiffReason: "no-repository"
  };
  let listed = bWe();
  if (tg(listed) !== null) return {
    listed: null,
    noDiffReason: "diff-failed"
  };
  try {
    return Me() ? {
      listed: listed
    } : {
      listed: null,
      noDiffReason: "no-repository"
    };
  } catch {
    if (t("workspace diff (launch folder not in a git repository): reading the settings that switch this listing on threw an error, so no listing was made", {
      level: "warn"
    }), e !== void 0 && ZF.of(e).claim("workspace_diff_no_repository:failed")) m("workspace_diff_no_repository", "failed");
    return {
      listed: null,
      noDiffReason: "diff-failed"
    };
  }
}
async function k8s(e, n, o, r) {
  let s,
    l = !1,
    f = {
      diff: null,
      noDiffReason: "diff-failed"
    };
  try {
    if (!Me()) return null;
    s = await Wt(O(zt(), "ccdiff-empty-"));
    for (let E of ["objects", O("refs", "heads"), "info"]) await Ut(O(s, E), {
      recursive: !0
    });
    let w = Z(s, s, o);
    for (let [E, u] of [["HEAD", `ref: refs/heads/main
`], ["config", dn], [O("info", "exclude"), cn]]) await Fe(O(s, E), u, {
      flag: "wx"
    });
    if (!(await Q(o, w, void 0))) {
      if (t("workspace diff (launch folder not in a git repository): files not listed: this needs git 2.32 or later, and git here is older or its version could not be read", {
        level: "warn"
      }), ZF.of(e).claim("workspace_diff_no_repository:old_or_unknown_git")) m("workspace_diff_no_repository", "old_or_unknown_git");
      return null;
    }
    let S = await pn(w, o, s);
    if (S === null) return null;
    l = S.launchDirLeftOut, await mn(w, o, s, S.files, n), f = await r(w);
  } catch {
    t("workspace diff (launch folder not in a git repository): a step failed; its error is not logged because it can contain file names", {
      level: "warn"
    });
  } finally {
    if (s !== void 0) {
      let gitDirByCwd = um().gitDirByCwd,
        S = Xt(o);
      if (gitDirByCwd.get(S) === null) gitDirByCwd.delete(S);
      await Yt(s, {
        recursive: !0,
        force: !0
      }).catch(() => {
        return;
      });
    }
  }
  let p = f.diff === null ? "failed" : l ? "launch_directory_left_out" : "ok";
  if (ZF.of(e).claim(`workspace_diff_no_repository:${p}`)) if (p === "ok") g("workspace_diff_no_repository");else if (p === "failed") m("workspace_diff_no_repository", p);else c("workspace_diff_no_repository", p);
  return f;
}
async function pn(e, n, o) {
  let s = (await oe(e, n, ["ls-files", "-z", "--others", "--exclude-standard"])).split("\x00").filter(item => item !== "" && !regExp_3.test(item) && !fn(item)),
    files = s.filter(item => !item.endsWith("/"));
  if (s.some(item => /^[^/]+\/$/.test(item)) || files.length > Jt) return null;
  let f = new Set(),
    p = new Set([""]),
    w = new Set(),
    S = performance.now();
  for (let u of files) {
    let h = u.lastIndexOf("/");
    if (oGr.includes(u.slice(h + 1))) f.add(u.slice(0, h + 1));
    let R = regExp_4.exec(u)?.[1];
    if (R !== void 0) f.add(R);
    if (u.slice(h + 1) === "settings.json") w.add(u.slice(0, h + 1));
    for (let T = u.lastIndexOf("/"); T > 0; T = u.lastIndexOf("/", T - 1)) {
      let _ = u.slice(0, T + 1);
      if (p.has(_)) break;
      p.add(_);
    }
    if (performance.now() - S >= 10) await ku(), S = performance.now();
  }
  for (let u of H1e(Array.from(p), Qt)) await Promise.all(u.map(async item => {
    if (await B9s(O(n, item))) f.add(item);
  }));
  for (let u of w) {
    let h = O(n, u, "projects"),
      R = await be(h).catch(_ => wr(_) ? [] : null),
      T = R === null || R.length > ve;
    for (let _ of R?.slice(0, ve) ?? []) {
      if (T) break;
      T = await be(O(h, _)).then(y => y.some(item => regExp_5.test(item)), y => !wr(y));
    }
    if (T) f.add(u);
  }
  for (let u of de(n)) f.add(u);
  if (f.size === 0) return {
    files: files,
    launchDirLeftOut: !1
  };
  await Ce(O(o, "info", "exclude"), Array.from(f, $e).join(""));
  let launchDirLeftOut = f.has("");
  return {
    launchDirLeftOut: launchDirLeftOut,
    files: launchDirLeftOut ? [] : files.filter(item => !Array.from(item.matchAll(/\//g), h => item.slice(0, h.index + 1)).some(item => f.has(item)))
  };
}
async function mn(e, n, o, r, s) {
  let l = (await oe({
    ...e,
    env: {
      ...e.env,
      ...un
    }
  }, n, ["commit-tree", Vt, "-m", "empty"])).trim();
  await Fe(O(o, "refs", "heads", "main"), `${l}
`, {
    flag: "wx"
  });
  let f = Dxe(),
    p = await Promise.all(r.map(async item => {
      let R = O(n, item),
        T = await Bt(R).catch(() => null);
      if (T !== null && Math.max(T.mtimeMs, T.ctimeMs) < f) return "untouched";
      if (!T?.isFile() || T.nlink !== 1 || T.size > an) return null;
      return jt(R, Ht.R_OK).then(() => T.size, () => null);
    }));
  await Ce(O(o, "info", "exclude"), r.filter((item, index) => p[index] === "untouched" && sn.test(item)).map($e).join(""));
  let w = ln,
    S = [],
    E = Ae(n),
    u = performance.now();
  for (let [h, R] of r.entries()) {
    let T = p[h];
    if (typeof T !== "number" || T > w) continue;
    if (performance.now() - u >= 10) await ku(), u = performance.now();
    let _ = O(n, R);
    if (!IQt(Kt(R)).some(item => nn.includes(item)) && !F2(R) && !V6(R) && !t0t(R) && !E(R) && qP(_, s, "read").allowed && Aa(_, s, "read", "ask") === null) w -= T, S.push(R);
  }
  if (S.length > 0) await oe(e, n, ["update-index", "-z", "--index-info"], S.map(item => `100644 ${qt} 0	${item}\x00`).join(""));
}
async function oe(e, cwd_2, o, input) {
  let {
    code: code_2,
    stdout: stdout_2,
    timedOut: timedOut
  } = await ut(Pt(), [...yn, ...o], {
    ...e,
    cwd: cwd_2,
    ...(input === void 0 ? {
      stdin: "ignore"
    } : {
      input: input
    }),
    timeout: timeout,
    preserveOutputOnError: !1,
    maxBuffer: 50000000
  });
  if (code_2 === 0) return stdout_2;
  throw t(`workspace diff (launch folder not in a git repository): git ${o[0]} ${timedOut ? `timed out after ${timeout} ms` : `exited with code ${code_2}`}`, {
    level: "warn"
  }), Error("a git step failed");
}
function $e(e) {
  if (e.includes(`
`)) return "";
  return `/${e.replace(/[\\*?[]/g, "\\$&").replace(/ +$/, o => o.replaceAll(" ", "\\ ")).replaceAll("\r", "[\r]") || "*"}
`;
}
export { _mn, w8s, H3n, k8s };