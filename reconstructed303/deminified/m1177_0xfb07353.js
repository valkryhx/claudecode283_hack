// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Me } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { L, K, ke, Qr, de } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { se, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { Rr, Tt, kl, ce } from "B:/~BUN/root/chunk-nxwmyxnk.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { it } from "B:/~BUN/root/chunk-ek28wssa.js";
import { yr, Ot } from "B:/~BUN/root/chunk-2zk4vqr8.js";
import { ct } from "B:/~BUN/root/chunk-6ft8yhc8.js";
import { Yg, Gun, Vun } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { ut } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { ue } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { rae, n9e, lft } from "B:/~BUN/root/chunk-c44qc88s.js";
import { zie } from "B:/~BUN/root/chunk-r0jnxjth.js";
import { qcs, nse, ogr, ou, Juo } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { gst } from "B:/~BUN/root/chunk-wn53xxxr.js";
import { ve } from "B:/~BUN/root/chunk-ef0msk7r.js";
var S = ve(rae(), 1);
import { statSync as M } from "fs";
import * as p from "path";
function G() {
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
var Ebe = G();
function Eeo(e) {
  e.fileIndex = null, e.fileListRefreshPromise = null, e.cacheGeneration++, e.untrackedFetchPromise = null, e.cachedTrackedFiles = [], e.cachedConfigFiles = [], e.cachedTrackedDirs = [], e.ignorePatternsCache = null, e.ignorePatternsCacheKey = null, e.lastRefreshMs = 0, e.lastScanDurationMs = null, e.lastGitIndexMtime = null, e.loadedTrackedSignature = null, e.loadedMergedSignature = null, e.normalizedTrackedInputs = null, e.indexBaseDir = null, e.indexLoadCount++;
}
function P(e, r, s, n) {
  let a = ++e.indexLoadCount,
    o = r.loadFromFileListAsync(s);
  return o.queryable.then(() => {
    if (e.indexLoadCount === a) e.indexBaseDir = n;
  }), o.done;
}
function v(e) {
  let r = e.length,
    s = Math.max(1, Math.floor(r / 500)),
    n = -2128831035;
  for (let a = 0; a < r; a += s) {
    let o = e[a];
    for (let g = 0; g < o.length; g++) n = (n ^ o.charCodeAt(g)) * 16777619 | 0;
    n = n * 16777619 | 0;
  }
  if (r > 0) {
    let a = e[r - 1];
    for (let o = 0; o < a.length; o++) n = (n ^ a.charCodeAt(o)) * 16777619 | 0;
  }
  return `${r}:${(n >>> 0).toString(16)}`;
}
function w(e, r) {
  return `${e}\x00${v(r)}`;
}
function j() {
  let e = yr(ce());
  if (!e) return null;
  try {
    return M(p.join(e, ".git", "index")).mtimeMs;
  } catch {
    return null;
  }
}
async function y(e, r, s) {
  if (s === r) return e;
  let n = Array(e.length),
    a = performance.now();
  for (let o = 0; o < e.length; o++) {
    let g = p.join(r, e[o]);
    if (n[o] = p.relative(s, g), (o & 255) === 255 && performance.now() - a > Gun) await Yg(), a = performance.now();
  }
  return n;
}
async function B(e, r, s) {
  if (r.length === 0) return;
  if (!e.fileIndex) return;
  let n = await D(r);
  if (e.normalizedTrackedInputs?.cwd !== s) return;
  let a = [...e.cachedTrackedFiles, ...e.cachedConfigFiles, ...e.cachedTrackedDirs, ...r, ...n],
    o = w(s, a);
  if (o === e.loadedMergedSignature) {
    t("[FileIndex] skipped index rebuild \u2014 merged paths unchanged");
    return;
  }
  if (await P(e, e.fileIndex, a, s)) e.loadedMergedSignature = o, t(`[FileIndex] rebuilt index with ${e.cachedTrackedFiles.length} tracked + ${r.length} untracked files`);
}
async function b(e, r, s) {
  let n = `${r}:${s}`;
  if (e.ignorePatternsCacheKey === n) return e.ignorePatternsCache;
  let a = se(),
    o = [".ignore", ".rgignore"],
    g = L([r, s]),
    m = S.default(),
    u = !1,
    c = g.flatMap(item => o.map(F => p.join(item, F))),
    f = await Promise.all(c.map(item => a.readFile(item, {
      encoding: "utf8"
    }).catch(() => null)));
  for (let [x, F] of f.entries()) {
    if (F === null) continue;
    m.add(n9e(lft(F), "file_suggestions_ignore")), u = !0, t(`[FileIndex] loaded ignore patterns from ${c[x]}`);
  }
  let h = u ? m : null;
  return e.ignorePatternsCache = h, e.ignorePatternsCacheKey = n, h;
}
async function T(e, r) {
  let s = [],
    n = performance.now();
  for (let a = 0; a < r.length; a++) {
    let o = r[a];
    if (!S.default.isPathValid(o) || !e.ignores(o)) s.push(o);
    if ((a & 255) === 255 && performance.now() - n > Gun) await Yg(), n = performance.now();
  }
  return s;
}
async function A(e, abortSignal, s, cwd) {
  let a = Date.now(),
    cacheGeneration = e.cacheGeneration;
  t("[FileIndex] getFilesUsingGit called");
  let g = yr(cwd);
  if (!g) return t("[FileIndex] not a git repo, returning null"), null;
  try {
    let m = Date.now(),
      u = await ct(Ot(), ["-c", "core.quotepath=false", "ls-files", "--recurse-submodules"], {
        timeout: 5000,
        abortSignal: abortSignal,
        cwd: g
      });
    if (t(`[FileIndex] git ls-files (tracked) took ${Date.now() - m}ms`), u.code !== 0) return t(`[FileIndex] git ls-files failed (code=${u.code}, stderr=${u.stderr}), falling back to ripgrep`), null;
    let normalizedTrackedInputs = e.normalizedTrackedInputs,
      f,
      h = null;
    if (normalizedTrackedInputs !== null && normalizedTrackedInputs.repoRoot === g && normalizedTrackedInputs.cwd === cwd && normalizedTrackedInputs.rawStdout === u.stdout && e.cachedTrackedFiles.length > 0) f = e.cachedTrackedFiles, t("[FileIndex] skipped path normalization \u2014 raw git paths unchanged");else {
      let F = u.stdout.trim().split(`
`).filter(Boolean);
      f = await y(F, g, cwd);
      let I = await b(e, g, cwd);
      if (I) {
        let _ = f.length;
        f = await T(I, f), t(`[FileIndex] applied ignore patterns: ${_} -> ${f.length} files`);
      }
      h = {
        repoRoot: g,
        cwd: cwd,
        rawStdout: u.stdout
      };
    }
    if (cacheGeneration !== e.cacheGeneration) return t("[FileIndex] discarding refresh results \u2014 cache was reset mid-refresh"), f;
    if (h !== null) e.normalizedTrackedInputs = h;
    e.cachedTrackedFiles = f;
    let duration_ms = Date.now() - a;
    return t(`[FileIndex] git ls-files: ${f.length} tracked files in ${duration_ms}ms`), i("tengu_file_suggestions_git_ls_files", {
      file_count: f.length,
      tracked_count: f.length,
      untracked_count: 0,
      duration_ms: duration_ms
    }), X(e, g, cwd, s), f;
  } catch (error) {
    return t(`[FileIndex] git ls-files error: ${d(error)}`), null;
  }
}
async function D(e) {
  let r = new Set(),
    s = performance.now();
  for (let n = 0; n < e.length; n++) if (E(e, n, n + 1, r), (n & 255) === 255 && performance.now() - s > Gun) await Yg(), s = performance.now();
  return [...r].map(item => item + p.sep);
}
function E(e, r, s, n) {
  for (let a = r; a < s; a++) {
    let o = p.dirname(e[a]);
    while (o !== "." && !n.has(o)) {
      let g = p.dirname(o);
      if (g === o) break;
      n.add(o), o = g;
    }
  }
}
async function N(e, r) {
  return (await Promise.all(qcs.map(item => nse(item, e, r)))).flatMap(item => item.map(item => item.filePath));
}
async function z(e, r, s, n) {
  t(`[FileIndex] getProjectFiles called, respectGitignore=${s}`);
  let a = await A(e, r, s, n);
  if (a !== null) return t(`[FileIndex] using git ls-files result (${a.length} files)`), a;
  t("[FileIndex] git ls-files returned null, falling back to ripgrep"), e.normalizedTrackedInputs = null;
  let o = Date.now(),
    g = null,
    m;
  {
    let f = ["--files", "--follow", "--hidden", "--glob", "!.git/", "--glob", "!.svn/", "--glob", "!.hg/", "--glob", "!.bzr/", "--glob", "!.jj/", "--glob", "!.sl/"];
    if (!s) f.push("--no-ignore-vcs");
    m = await zie(f, n, r, {
      searchOtherAppsData: !0
    });
  }
  let u = m.map(item => p.relative(n, item)),
    duration_ms_2 = Date.now() - o;
  return t(`[FileIndex] ripgrep: ${u.length} files in ${duration_ms_2}ms`), i("tengu_file_suggestions_ripgrep", {
    file_count: u.length,
    duration_ms: duration_ms_2
  }), u;
}
async function q(e, r) {
  let s = AbortSignal.timeout(1e4),
    n = e.fileIndex ??= new Vun();
  try {
    let a = ut(),
      o = ue(),
      g = a.respectGitignore ?? o.respectGitignore ?? !0,
      m = ce(),
      [u, c] = await Promise.all([z(e, s, g, m), N(m, r)]);
    e.cachedConfigFiles = c;
    let f = [...u, ...c],
      h = await D(f);
    e.cachedTrackedDirs = h;
    let x = [...h, ...f],
      F = w(m, x);
    if (F !== e.loadedTrackedSignature) {
      if (await P(e, n, x, m)) e.loadedTrackedSignature = F, e.loadedMergedSignature = null;
    } else t("[FileIndex] skipped index rebuild \u2014 tracked paths unchanged");
  } catch (error) {
    t(`[FileIndex] getPathsForSuggestions failed: ${d(error)}`, {
      level: "error"
    });
  }
  return n;
}
function O(e, r) {
  let s = Math.min(e.length, r.length),
    n = 0;
  while (n < s && e[n] === r[n]) n++;
  return e.substring(0, n);
}
function Teo(e) {
  if (e.length === 0) return "";
  let r = e.map(item => item.displayText),
    s = r[0];
  for (let n = 1; n < r.length; n++) {
    let a = r[n];
    if (s = O(s, a), s === "") return "";
  }
  return s;
}
function C(displayText, score) {
  return {
    id: `file-${displayText}`,
    displayText: displayText,
    metadata: score !== void 0 ? {
      score: score
    } : void 0
  };
}
function k(e) {
  let r = e.slice(0, gst);
  return r.map((item, index) => C(item, index / Math.max(r.length, 1)));
}
var U = 5000,
  W = 1000;
function zPn(e, r) {
  if (e.fileListRefreshPromise || de()) return;
  let s = j();
  if (e.fileIndex) {
    if (s === null && e.lastRefreshMs > 0 && e.lastScanDurationMs !== null && e.lastScanDurationMs > W) return;
    if (!(s !== null && s !== e.lastGitIndexMtime) && Date.now() - e.lastRefreshMs < U) return;
  }
  let cacheGeneration_2 = e.cacheGeneration,
    a = Date.now();
  e.fileIndex ??= new Vun(), e.fileListRefreshPromise = q(e, r).then(o => {
    if (cacheGeneration_2 !== e.cacheGeneration) return o;
    e.fileListRefreshPromise = null, e.indexBuildComplete.emit(), e.lastGitIndexMtime = s;
    let g = Date.now();
    return e.lastRefreshMs = g, e.lastScanDurationMs = g - a, t(`[FileIndex] cache refresh completed in ${e.lastScanDurationMs}ms`), o;
  }).catch(o => {
    if (t(`[FileIndex] Cache refresh failed: ${d(o)}`), l(o), cacheGeneration_2 === e.cacheGeneration) e.fileListRefreshPromise = null;
    return e.fileIndex ??= new Vun();
  });
}
async function H(e) {
  let r = se();
  try {
    return (await r.readdir(e)).map(item => {
      let a = p.join(e, item.name),
        o = p.relative(e, a);
      return item.isDirectory() ? o + p.sep : o;
    });
  } catch (error) {
    return t(`[FileSuggestions] readdir failed for cwd: ${d(error)}`, {
      level: "error"
    }), [];
  }
}
async function J6t(e, r, s = !1, n) {
  let {
    items: items
  } = await P8s(e, r, s, n);
  return items;
}
async function P8s(e, query, s, n, a = !0) {
  if (de()) return {
    items: [],
    baseDir: void 0
  };
  if (Tt()) {
    if (!query && !s) return {
      items: [],
      baseDir: void 0
    };
    return {
      items: await V(query),
      baseDir: void 0
    };
  }
  let baseDir = ce();
  if (!query && !s) return {
    items: [],
    baseDir: baseDir
  };
  if ((a ? ogr(ut().fileSuggestion) : void 0)?.type === "command") {
    let u = {
        id: K(),
        project: {
          originalCwd: ke(),
          projectRoot: Qr()
        }
      },
      c = {
        ...ou(u, baseDir),
        query: query
      },
      f = await Juo(u, c);
    return {
      items: k(f),
      baseDir: baseDir
    };
  }
  if (query === "" || query === "." || query === "./") {
    let u = await H(baseDir);
    return zPn(e, n), {
      items: k(u),
      baseDir: baseDir
    };
  }
  let m = Date.now();
  try {
    let u = e.fileListRefreshPromise !== null;
    zPn(e, n);
    let c = query,
      f = "." + p.sep;
    if (query.startsWith(f)) c = query.substring(2);
    if (c.startsWith("~")) c = it(c);
    let items_2 = e.fileIndex ? e.fileIndex.search(c, gst).map(item => C(item.path, item.score)) : [],
      baseDir_2 = e.indexBaseDir ?? baseDir,
      duration_ms_3 = Date.now() - m;
    return t(`[FileIndex] generateFileSuggestions: ${items_2.length} results in ${duration_ms_3}ms (${u ? "partial" : "full"} index)`), i("tengu_file_suggestions_query", {
      duration_ms: duration_ms_3,
      cache_hit: !u,
      result_count: items_2.length,
      query_length: query.length
    }), {
      items: items_2,
      baseDir: baseDir_2
    };
  } catch (error) {
    return l(error), {
      items: [],
      baseDir: baseDir
    };
  }
}
async function V(query_2) {
  let r = Rr();
  if (!r || !kl()) return [];
  try {
    return (await r.sendControlRequest({
      subtype: "file_suggestions",
      query: query_2
    })).suggestions.map(item => C(item.path, item.score));
  } catch (error) {
    return t(`[FileIndex] remote file_suggestions RPC failed: ${d(error)}`), [];
  }
}
function GPn({
  suggestion: suggestion,
  input: input,
  partialPath: partialPath,
  startPos: startPos,
  onInputChange: onInputChange,
  setCursorOffset: setCursorOffset
}) {
  let g = typeof suggestion === "string" ? suggestion : suggestion.displayText,
    m = input.substring(0, startPos) + g + input.substring(startPos + partialPath.length);
  onInputChange(m);
  let u = startPos + g.length;
  return setCursorOffset(u), m;
}
function X(e, cwd_2, s, n) {
  if (e.untrackedFetchPromise) return;
  let a = n ? ["-c", "core.quotepath=false", "ls-files", "--others", "--exclude-standard"] : ["-c", "core.quotepath=false", "ls-files", "--others"],
    cacheGeneration_3 = e.cacheGeneration;
  e.untrackedFetchPromise = ct(Ot(), a, {
    timeout: 1e4,
    cwd: cwd_2
  }).then(async g => {
    if (cacheGeneration_3 !== e.cacheGeneration) return;
    if (g.code !== 0) return;
    let m = g.stdout.trim().split(`
`).filter(Boolean),
      u = await y(m, cwd_2, s),
      c = await b(e, cwd_2, s);
    if (c && u.length > 0) {
      let f = u.length;
      u = await T(c, u), t(`[FileIndex] applied ignore patterns to untracked: ${f} -> ${u.length} files`);
    }
    return t(`[FileIndex] background untracked fetch: ${u.length} files`), B(e, u, s);
  }).catch(g => {
    t(`[FileIndex] background untracked fetch failed: ${g}`);
  }).finally(() => {
    e.untrackedFetchPromise = null;
  });
}
export { Ebe, Eeo, Teo, zPn, J6t, P8s, GPn };