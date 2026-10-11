// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Me } from "B:/~BUN/root/chunk-ekrhn4q1.js";
import { Y, we, kr } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { l } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { ce, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { oe } from "B:/~BUN/root/chunk-shgdrs47.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { Ye } from "B:/~BUN/root/chunk-qqgpf856.js";
import { lr, Lt, va, Fn, yt } from "B:/~BUN/root/chunk-339q6g5w.js";
import { Ve } from "B:/~BUN/root/chunk-py7yqpgt.js";
import { Fv, iUt, aUt } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { Je } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { le } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { ple, yle, nln } from "B:/~BUN/root/chunk-d36ctpgs.js";
import { Q9 } from "B:/~BUN/root/chunk-d8zzdckb.js";
import { Mco, sfe, vMn, yc, eSr } from "B:/~BUN/root/chunk-3jyp964r.js";
import { L } from "B:/~BUN/root/chunk-z1enakv9.js";
import { be } from "B:/~BUN/root/chunk-yv67t8hr.js";
var I = be(ple(), 1);
import { statSync as G } from "fs";
import * as p from "path";
function v() {
  return {
    fileIndex: null,
    fileListRefreshPromise: null,
    cacheGeneration: 0,
    untrackedFetchPromise: null,
    cachedTrackedFiles: [],
    cachedConfigFiles: [],
    cachedTrackedDirs: [],
    ignorePatternsCache: null,
    ignorePatternsCacheKey: null,
    lastRefreshMs: 0,
    lastScanDurationMs: null,
    lastGitIndexMtime: null,
    loadedTrackedSignature: null,
    loadedMergedSignature: null,
    normalizedTrackedInputs: null,
    indexBuildComplete: Me(),
    indexBaseDir: null,
    indexLoadCount: 0
  };
}
var Roe = v();
function uir(e) {
  e.fileIndex = null, e.fileListRefreshPromise = null, e.cacheGeneration++, e.untrackedFetchPromise = null, e.cachedTrackedFiles = [], e.cachedConfigFiles = [], e.cachedTrackedDirs = [], e.ignorePatternsCache = null, e.ignorePatternsCacheKey = null, e.lastRefreshMs = 0, e.lastScanDurationMs = null, e.lastGitIndexMtime = null, e.loadedTrackedSignature = null, e.loadedMergedSignature = null, e.normalizedTrackedInputs = null, e.indexBaseDir = null, e.indexLoadCount++;
}
function P(e, r, o, n) {
  let s = ++e.indexLoadCount,
    a = r.loadFromFileListAsync(o);
  return a.queryable.then(() => {
    if (e.indexLoadCount === s) e.indexBaseDir = n;
  }), a.done;
}
function j(e) {
  let r = e.length,
    o = Math.max(1, Math.floor(r / 500)),
    n = -2128831035;
  for (let s = 0; s < r; s += o) {
    let a = e[s];
    for (let g = 0; g < a.length; g++) n = (n ^ a.charCodeAt(g)) * 16777619 | 0;
    n = n * 16777619 | 0;
  }
  if (r > 0) {
    let s = e[r - 1];
    for (let a = 0; a < s.length; a++) n = (n ^ s.charCodeAt(a)) * 16777619 | 0;
  }
  return `${r}:${(n >>> 0).toString(16)}`;
}
function w(e, r) {
  return `${e}\x00${j(r)}`;
}
function B() {
  let e = Fn(oe());
  if (!e) return null;
  try {
    return G(p.join(e, ".git", "index")).mtimeMs;
  } catch {
    return null;
  }
}
async function y(e, r, o) {
  if (o === r) return e;
  let n = Array(e.length),
    s = performance.now();
  for (let a = 0; a < e.length; a++) {
    let g = p.join(r, e[a]);
    if (n[a] = p.relative(o, g), (a & 255) === 255 && performance.now() - s > iUt) await Fv(), s = performance.now();
  }
  return n;
}
async function A(e, r, o) {
  if (r.length === 0) return;
  if (!e.fileIndex) return;
  let n = await D(r);
  if (e.normalizedTrackedInputs?.cwd !== o) return;
  let s = [...e.cachedTrackedFiles, ...e.cachedConfigFiles, ...e.cachedTrackedDirs, ...r, ...n],
    a = w(o, s);
  if (a === e.loadedMergedSignature) {
    t("[FileIndex] skipped index rebuild \u2014 merged paths unchanged");
    return;
  }
  if (await P(e, e.fileIndex, s, o)) e.loadedMergedSignature = a, t(`[FileIndex] rebuilt index with ${e.cachedTrackedFiles.length} tracked + ${r.length} untracked files`);
}
async function b(e, r, o) {
  let n = `${r}:${o}`;
  if (e.ignorePatternsCacheKey === n) return e.ignorePatternsCache;
  let s = ce(),
    a = [".ignore", ".rgignore"],
    g = L([r, o]),
    f = I.default(),
    u = !1,
    m = g.flatMap(item => a.map(h => p.join(item, h))),
    c = await Promise.all(m.map(item => s.readFile(item, {
      encoding: "utf8"
    }).catch(() => null)));
  for (let [x, h] of c.entries()) {
    if (h === null) continue;
    f.add(yle(nln(h), "file_suggestions_ignore")), u = !0, t(`[FileIndex] loaded ignore patterns from ${m[x]}`);
  }
  let F = u ? f : null;
  return e.ignorePatternsCache = F, e.ignorePatternsCacheKey = n, F;
}
async function T(e, r) {
  let o = [],
    n = performance.now();
  for (let s = 0; s < r.length; s++) {
    let a = r[s];
    if (!I.default.isPathValid(a) || !e.ignores(a)) o.push(a);
    if ((s & 255) === 255 && performance.now() - n > iUt) await Fv(), n = performance.now();
  }
  return o;
}
async function E(e, abortSignal, o, cwd) {
  let s = Date.now(),
    cacheGeneration = e.cacheGeneration;
  t("[FileIndex] getFilesUsingGit called");
  let g = Fn(cwd);
  if (!g) return t("[FileIndex] not a git repo, returning null"), null;
  try {
    let f = Date.now(),
      u = await Ve(yt(), ["-c", "core.quotepath=false", "ls-files", "--recurse-submodules"], {
        timeout: 5000,
        abortSignal: abortSignal,
        cwd: g
      });
    if (t(`[FileIndex] git ls-files (tracked) took ${Date.now() - f}ms`), u.code !== 0) return t(`[FileIndex] git ls-files failed (code=${u.code}, stderr=${u.stderr}), falling back to ripgrep`), null;
    let normalizedTrackedInputs = e.normalizedTrackedInputs,
      c,
      F = null;
    if (normalizedTrackedInputs !== null && normalizedTrackedInputs.repoRoot === g && normalizedTrackedInputs.cwd === cwd && normalizedTrackedInputs.rawStdout === u.stdout && e.cachedTrackedFiles.length > 0) c = e.cachedTrackedFiles, t("[FileIndex] skipped path normalization \u2014 raw git paths unchanged");else {
      let h = u.stdout.trim().split(`
`).filter(Boolean);
      c = await y(h, g, cwd);
      let C = await b(e, g, cwd);
      if (C) {
        let R = c.length;
        c = await T(C, c), t(`[FileIndex] applied ignore patterns: ${R} -> ${c.length} files`);
      }
      F = {
        repoRoot: g,
        cwd: cwd,
        rawStdout: u.stdout
      };
    }
    if (cacheGeneration !== e.cacheGeneration) return t("[FileIndex] discarding refresh results \u2014 cache was reset mid-refresh"), c;
    if (F !== null) e.normalizedTrackedInputs = F;
    e.cachedTrackedFiles = c;
    let duration_ms = Date.now() - s;
    return t(`[FileIndex] git ls-files: ${c.length} tracked files in ${duration_ms}ms`), i("tengu_file_suggestions_git_ls_files", {
      file_count: c.length,
      tracked_count: c.length,
      untracked_count: 0,
      duration_ms: duration_ms
    }), X(e, g, cwd, o), c;
  } catch (error) {
    return t(`[FileIndex] git ls-files error: ${l(error)}`), null;
  }
}
async function D(e) {
  let r = new Set(),
    o = performance.now();
  for (let n = 0; n < e.length; n++) if (N(e, n, n + 1, r), (n & 255) === 255 && performance.now() - o > iUt) await Fv(), o = performance.now();
  return [...r].map(item => item + p.sep);
}
function N(e, r, o, n) {
  for (let s = r; s < o; s++) {
    let a = p.dirname(e[s]);
    while (a !== "." && !n.has(a)) {
      let g = p.dirname(a);
      if (g === a) break;
      n.add(a), a = g;
    }
  }
}
async function z(e, r) {
  return (await Promise.all(Mco.map(item => sfe(item, e, r)))).flatMap(item => item.map(item => item.filePath));
}
async function q(e, r, o, n) {
  t(`[FileIndex] getProjectFiles called, respectGitignore=${o}`);
  let s = await E(e, r, o, n);
  if (s !== null) return t(`[FileIndex] using git ls-files result (${s.length} files)`), s;
  t("[FileIndex] git ls-files returned null, falling back to ripgrep"), e.normalizedTrackedInputs = null;
  let a = Date.now(),
    g = null,
    f;
  {
    let c = ["--files", "--follow", "--hidden", "--glob", "!.git/", "--glob", "!.svn/", "--glob", "!.hg/", "--glob", "!.bzr/", "--glob", "!.jj/", "--glob", "!.sl/"];
    if (!o) c.push("--no-ignore-vcs");
    f = await Q9(c, n, r);
  }
  let u = f.map(item => p.relative(n, item)),
    duration_ms_2 = Date.now() - a;
  return t(`[FileIndex] ripgrep: ${u.length} files in ${duration_ms_2}ms`), i("tengu_file_suggestions_ripgrep", {
    file_count: u.length,
    duration_ms: duration_ms_2
  }), u;
}
async function K(e, r) {
  let o = AbortSignal.timeout(1e4),
    n = e.fileIndex ??= new aUt();
  try {
    let s = Je(),
      a = le(),
      g = s.respectGitignore ?? a.respectGitignore ?? !0,
      f = oe(),
      [u, m] = await Promise.all([q(e, o, g, f), z(f, r)]);
    e.cachedConfigFiles = m;
    let c = [...u, ...m],
      F = await D(c);
    e.cachedTrackedDirs = F;
    let x = [...F, ...c],
      h = w(f, x);
    if (h !== e.loadedTrackedSignature) {
      if (await P(e, n, x, f)) e.loadedTrackedSignature = h, e.loadedMergedSignature = null;
    } else t("[FileIndex] skipped index rebuild \u2014 tracked paths unchanged");
  } catch (error) {
    t(`[FileIndex] getPathsForSuggestions failed: ${l(error)}`, {
      level: "error"
    });
  }
  return n;
}
function O(e, r) {
  let o = Math.min(e.length, r.length),
    n = 0;
  while (n < o && e[n] === r[n]) n++;
  return e.substring(0, n);
}
function pir(e) {
  if (e.length === 0) return "";
  let r = e.map(item => item.displayText),
    o = r[0];
  for (let n = 1; n < r.length; n++) {
    let s = r[n];
    if (o = O(o, s), o === "") return "";
  }
  return o;
}
function S(displayText, score) {
  return {
    id: `file-${displayText}`,
    displayText: displayText,
    metadata: score !== void 0 ? {
      score: score
    } : void 0
  };
}
var _ = 15;
function k(e) {
  let r = e.slice(0, _);
  return r.map((item, index) => S(item, index / Math.max(r.length, 1)));
}
var U = 5000,
  W = 1000;
function T4t(e, r) {
  if (e.fileListRefreshPromise) return;
  let o = B();
  if (e.fileIndex) {
    if (o === null && e.lastRefreshMs > 0 && e.lastScanDurationMs !== null && e.lastScanDurationMs > W) return;
    if (!(o !== null && o !== e.lastGitIndexMtime) && Date.now() - e.lastRefreshMs < U) return;
  }
  let cacheGeneration_2 = e.cacheGeneration,
    s = Date.now();
  e.fileIndex ??= new aUt(), e.fileListRefreshPromise = K(e, r).then(a => {
    if (cacheGeneration_2 !== e.cacheGeneration) return a;
    e.fileListRefreshPromise = null, e.indexBuildComplete.emit(), e.lastGitIndexMtime = o;
    let g = Date.now();
    return e.lastRefreshMs = g, e.lastScanDurationMs = g - s, t(`[FileIndex] cache refresh completed in ${e.lastScanDurationMs}ms`), a;
  }).catch(a => {
    if (t(`[FileIndex] Cache refresh failed: ${l(a)}`), d(a), cacheGeneration_2 === e.cacheGeneration) e.fileListRefreshPromise = null;
    return e.fileIndex ??= new aUt();
  });
}
async function H(e) {
  let r = ce();
  try {
    return (await r.readdir(e)).map(item => {
      let s = p.join(e, item.name),
        a = p.relative(e, s);
      return item.isDirectory() ? a + p.sep : a;
    });
  } catch (error) {
    return t(`[FileSuggestions] readdir failed for cwd: ${l(error)}`, {
      level: "error"
    }), [];
  }
}
async function swt(e, r, o = !1, n) {
  let {
    items: items
  } = await _jo(e, r, o, n);
  return items;
}
async function _jo(e, query, o, n) {
  if (Lt()) {
    if (!query && !o) return {
      items: [],
      baseDir: void 0
    };
    return {
      items: await V(query),
      baseDir: void 0
    };
  }
  let baseDir = oe();
  if (!query && !o) return {
    items: [],
    baseDir: baseDir
  };
  if (vMn(Je().fileSuggestion)?.type === "command") {
    let f = {
        id: Y(),
        project: {
          originalCwd: we(),
          projectRoot: kr()
        }
      },
      u = {
        ...yc(f, baseDir),
        query: query
      },
      m = await eSr(f, u);
    return {
      items: k(m),
      baseDir: baseDir
    };
  }
  if (query === "" || query === "." || query === "./") {
    let f = await H(baseDir);
    return T4t(e, n), {
      items: k(f),
      baseDir: baseDir
    };
  }
  let g = Date.now();
  try {
    let f = e.fileListRefreshPromise !== null;
    T4t(e, n);
    let u = query,
      m = "." + p.sep;
    if (query.startsWith(m)) u = query.substring(2);
    if (u.startsWith("~")) u = Ye(u);
    let items_2 = e.fileIndex ? e.fileIndex.search(u, _).map(item => S(item.path, item.score)) : [],
      baseDir_2 = e.indexBaseDir ?? baseDir,
      duration_ms_3 = Date.now() - g;
    return t(`[FileIndex] generateFileSuggestions: ${items_2.length} results in ${duration_ms_3}ms (${f ? "partial" : "full"} index)`), i("tengu_file_suggestions_query", {
      duration_ms: duration_ms_3,
      cache_hit: !f,
      result_count: items_2.length,
      query_length: query.length
    }), {
      items: items_2,
      baseDir: baseDir_2
    };
  } catch (error) {
    return d(error), {
      items: [],
      baseDir: baseDir
    };
  }
}
async function V(query_2) {
  let r = lr();
  if (!r || !va()) return [];
  try {
    return (await r.sendControlRequest({
      subtype: "file_suggestions",
      query: query_2
    })).suggestions.map(item => S(item.path, item.score));
  } catch (error) {
    return t(`[FileIndex] remote file_suggestions RPC failed: ${l(error)}`), [];
  }
}
function C4t({
  suggestion: suggestion,
  input: input,
  partialPath: partialPath,
  startPos: startPos,
  onInputChange: onInputChange,
  setCursorOffset: setCursorOffset
}) {
  let g = typeof suggestion === "string" ? suggestion : suggestion.displayText,
    f = input.substring(0, startPos) + g + input.substring(startPos + partialPath.length);
  onInputChange(f);
  let u = startPos + g.length;
  return setCursorOffset(u), f;
}
function X(e, cwd_2, o, n) {
  if (e.untrackedFetchPromise) return;
  let s = n ? ["-c", "core.quotepath=false", "ls-files", "--others", "--exclude-standard"] : ["-c", "core.quotepath=false", "ls-files", "--others"],
    cacheGeneration_3 = e.cacheGeneration;
  e.untrackedFetchPromise = Ve(yt(), s, {
    timeout: 1e4,
    cwd: cwd_2
  }).then(async g => {
    if (cacheGeneration_3 !== e.cacheGeneration) return;
    if (g.code !== 0) return;
    let f = g.stdout.trim().split(`
`).filter(Boolean),
      u = await y(f, cwd_2, o),
      m = await b(e, cwd_2, o);
    if (m && u.length > 0) {
      let c = u.length;
      u = await T(m, u), t(`[FileIndex] applied ignore patterns to untracked: ${c} -> ${u.length} files`);
    }
    return t(`[FileIndex] background untracked fetch: ${u.length} files`), A(e, u, o);
  }).catch(g => {
    t(`[FileIndex] background untracked fetch failed: ${g}`);
  }).finally(() => {
    e.untrackedFetchPromise = null;
  });
}
export { Roe, uir, pir, T4t, swt, _jo, C4t };