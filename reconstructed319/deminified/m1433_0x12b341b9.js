// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { De } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { z, Ee, Oo, q } from "B:/~BUN/root/chunk-game8aqv.js";
import { d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { t, ie } from "B:/~BUN/root/chunk-2pp12te6.js";
import { rr, Ct, Tl, pe } from "B:/~BUN/root/chunk-thn0wk2x.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { mt } from "B:/~BUN/root/chunk-d10hhz4p.js";
import { O_e, jmt, zLt } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { fr, Pt } from "B:/~BUN/root/chunk-1g25msn4.js";
import { lt } from "B:/~BUN/root/chunk-3mm90xb6.js";
import { ku, bzn, Szn } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { yt } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { fe } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Y9, vpt, X9 } from "B:/~BUN/root/chunk-z7bs0q82.js";
import { ehi, Tge, D7r, _p, mos } from "B:/~BUN/root/chunk-27h4st9h.js";
import { QCt } from "B:/~BUN/root/chunk-4z0sh5pa.js";
import { L } from "B:/~BUN/root/chunk-5ha2avah.js";
import { Oe } from "B:/~BUN/root/chunk-4qfwb3rf.js";
var P = Oe(O_e(), 1);
import { statSync as E } from "fs";
import * as h from "path";
function j() {
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
    ignoreReincludeGlobs: [],
    lastReincludedFiles: [],
    reincludeRetryAtMs: 0,
    trackedBuildPromise: null,
    lastRefreshMs: 0,
    lastScanDurationMs: null,
    lastGitIndexMtime: null,
    loadedTrackedSignature: null,
    loadedMergedSignature: null,
    normalizedTrackedInputs: null,
    indexBuildComplete: De(),
    indexBaseDir: null,
    indexLoadCount: 0
  };
}
var eIe = j();
function b6o(e) {
  e.fileIndex = null, e.fileListRefreshPromise = null, e.cacheGeneration++, e.untrackedFetchPromise = null, e.cachedTrackedFiles = [], e.cachedConfigFiles = [], e.cachedTrackedDirs = [], e.ignorePatternsCache = null, e.ignorePatternsCacheKey = null, e.ignoreReincludeGlobs = [], e.lastReincludedFiles = [], e.reincludeRetryAtMs = 0, e.trackedBuildPromise = null, e.lastRefreshMs = 0, e.lastScanDurationMs = null, e.lastGitIndexMtime = null, e.loadedTrackedSignature = null, e.loadedMergedSignature = null, e.normalizedTrackedInputs = null, e.indexBaseDir = null, e.indexLoadCount++;
}
function R(e, i, s, n) {
  let o = ++e.indexLoadCount,
    r = i.loadFromFileListAsync(s);
  return r.queryable.then(() => {
    if (e.indexLoadCount === o) e.indexBaseDir = n;
  }), r.done;
}
function N(e) {
  let i = e.length,
    s = Math.max(1, Math.floor(i / 500)),
    n = -2128831035;
  for (let o = 0; o < i; o += s) {
    let r = e[o];
    for (let c = 0; c < r.length; c++) n = (n ^ r.charCodeAt(c)) * 16777619 | 0;
    n = n * 16777619 | 0;
  }
  if (i > 0) {
    let o = e[i - 1];
    for (let r = 0; r < o.length; r++) n = (n ^ o.charCodeAt(r)) * 16777619 | 0;
  }
  return `${i}:${(n >>> 0).toString(16)}`;
}
function D(e, i) {
  return `${e}\x00${N(i)}`;
}
function O() {
  let e = fr(pe());
  if (!e) return null;
  try {
    return E(h.join(e, ".git", "index")).mtimeMs;
  } catch {
    return null;
  }
}
async function T(e, i, s) {
  if (s === i) return e;
  let n = Array(e.length),
    o = performance.now();
  for (let r = 0; r < e.length; r++) {
    let c = h.join(i, e[r]);
    if (n[r] = h.relative(s, c), (r & 255) === 255 && performance.now() - o > bzn) await ku(), o = performance.now();
  }
  return n;
}
async function U(e, i, s) {
  if (i.length === 0) return;
  if (!e.fileIndex) return;
  let n = await A(i);
  if (e.normalizedTrackedInputs?.cwd !== s) return;
  let o = [...e.cachedTrackedFiles, ...e.cachedConfigFiles, ...e.cachedTrackedDirs, ...i, ...n],
    r = D(s, o);
  if (r === e.loadedMergedSignature) {
    t("[FileIndex] skipped index rebuild \u2014 merged paths unchanged");
    return;
  }
  if (await R(e, e.fileIndex, o, s)) e.loadedMergedSignature = r, t(`[FileIndex] rebuilt index with ${e.cachedTrackedFiles.length} tracked + ${i.length} untracked files`);
}
async function _(e, i, s) {
  let n = `${i}:${s}`;
  if (e.ignorePatternsCacheKey === n) return e.ignorePatternsCache;
  let o = ie(),
    r = [".ignore", ".rgignore"],
    c = L([i, s]),
    p = P.default(),
    u = !1,
    f = !1,
    g = [],
    m = [],
    x = r.flatMap(item => c.map(C => h.join(C, item))),
    F = await Promise.all(x.map(item => o.readFile(item, {
      encoding: "utf8"
    }).catch(() => null)));
  for (let [S, C] of F.entries()) {
    if (C === null) continue;
    let b = jmt(zLt(C), "file_suggestions_ignore");
    p.add(b), u = !0;
    let k = W(b, h.relative(i, h.dirname(x[S])).replaceAll(h.sep, "/"));
    f ||= k.hasNegation, g.push(...k.augmentations), m.push(...k.rules), t(`[FileIndex] loaded ignore patterns from ${x[S]}`);
  }
  let I = u ? p : null;
  return e.ignorePatternsCache = I, e.ignorePatternsCacheKey = n, e.ignoreReincludeGlobs = f ? [...g, ...m] : [], I;
}
function W(e, i) {
  let augmentations = [],
    rules = [],
    hasNegation = !1,
    r = K(i);
  for (let c of e) {
    let p = c.endsWith("\\ ") ? c : c.trimEnd();
    if (p === "" || p.startsWith("#")) continue;
    let u = p.startsWith("!"),
      f = u ? p.slice(1) : p;
    if (f === "") continue;
    let g = H(f, r);
    if (u) {
      if (hasNegation = !0, rules.push(g), !g.endsWith("**")) {
        let m = g.replace(/\/+$/, "");
        augmentations.push(M(m) ? `**/${m}/**` : `${m}/**`);
      }
    } else rules.push(`!${g}`);
  }
  return {
    hasNegation: hasNegation,
    augmentations: augmentations,
    rules: rules
  };
}
function M(e) {
  return !e.startsWith("/") && !e.replace(/\/+$/, "").includes("/");
}
function K(e) {
  return e.replace(/[[\]{}*?\\]/g, "\\$&").replace(/^[!#]/, "\\$&");
}
function H(e, i) {
  if (i === "") return e;
  if (e.startsWith("/")) return `${i}${e}`;
  return M(e) ? `${i}/**/${e}` : `${i}/${e}`;
}
async function G(e, i) {
  let s = [],
    n = performance.now();
  for (let o = 0; o < i.length; o++) {
    let r = i[o];
    if (!P.default.isPathValid(r) || !e.ignores(r)) s.push(r);
    if ((o & 255) === 255 && performance.now() - n > bzn) await ku(), n = performance.now();
  }
  return s;
}
async function V(e, abortSignal, s, cwd) {
  let o = Date.now(),
    cacheGeneration = e.cacheGeneration;
  t("[FileIndex] getFilesUsingGit called");
  let c = fr(cwd);
  if (!c) return t("[FileIndex] not a git repo, returning null"), null;
  try {
    let p = Date.now(),
      u = await lt(Pt(), ["-c", "core.quotepath=false", "ls-files", "--recurse-submodules"], {
        timeout: 5000,
        abortSignal: abortSignal,
        cwd: c
      });
    if (t(`[FileIndex] git ls-files (tracked) took ${Date.now() - p}ms`), u.code !== 0) return t(`[FileIndex] git ls-files failed (code=${u.code}, stderr=${u.stderr}), falling back to ripgrep`), null;
    let normalizedTrackedInputs = e.normalizedTrackedInputs,
      g,
      m = null;
    if (normalizedTrackedInputs !== null && normalizedTrackedInputs.repoRoot === c && normalizedTrackedInputs.cwd === cwd && normalizedTrackedInputs.rawStdout === u.stdout && e.cachedTrackedFiles.length > 0) g = e.cachedTrackedFiles, t("[FileIndex] skipped path normalization \u2014 raw git paths unchanged");else {
      let F = u.stdout.trim().split(`
`).filter(Boolean);
      g = await T(F, c, cwd);
      let I = await _(e, c, cwd);
      if (I) {
        let S = g.length;
        g = await G(I, g), t(`[FileIndex] applied ignore patterns: ${S} -> ${g.length} files`);
      }
      m = {
        repoRoot: c,
        cwd: cwd,
        rawStdout: u.stdout
      };
    }
    if (cacheGeneration !== e.cacheGeneration) return t("[FileIndex] discarding refresh results \u2014 cache was reset mid-refresh"), g;
    if (m !== null) e.normalizedTrackedInputs = m;
    e.cachedTrackedFiles = g;
    let duration_ms = Date.now() - o;
    return t(`[FileIndex] git ls-files: ${g.length} tracked files in ${duration_ms}ms`), l("tengu_file_suggestions_git_ls_files", {
      file_count: g.length,
      tracked_count: g.length,
      untracked_count: 0,
      duration_ms: duration_ms
    }), ae(e, c, cwd, s), g;
  } catch (error) {
    return t(`[FileIndex] git ls-files error: ${d(error)}`), null;
  }
}
async function A(e) {
  let i = new Set(),
    s = performance.now();
  for (let n = 0; n < e.length; n++) if (X(e, n, n + 1, i), (n & 255) === 255 && performance.now() - s > bzn) await ku(), s = performance.now();
  return [...i].map(item => item + h.sep);
}
function X(e, i, s, n) {
  for (let o = i; o < s; o++) {
    let r = h.dirname(e[o]);
    while (r !== "." && !n.has(r)) {
      let c = h.dirname(r);
      if (c === r) break;
      n.add(r), r = c;
    }
  }
}
async function Y(e, i) {
  return (await Promise.all(ehi.map(item => Tge(item, e, i)))).flatMap(item => item.map(item => item.filePath));
}
var v = [".git", ".svn", ".hg", ".bzr", ".jj", ".sl"],
  J = v.flatMap(item => ["--glob", `!${item}/`]),
  Q = v.flatMap(item => ["--glob", `!${item}`]);
async function Z(e, i, s, n) {
  t(`[FileIndex] getProjectFiles called, respectGitignore=${s}`);
  let o = await V(e, i, s, n);
  if (o !== null) return t(`[FileIndex] using git ls-files result (${o.length} files)`), o;
  t("[FileIndex] git ls-files returned null, falling back to ripgrep"), e.normalizedTrackedInputs = null;
  let r = Date.now(),
    c = null,
    p;
  {
    let g = ["--files", "--follow", "--hidden", ...J];
    if (!s) g.push("--no-ignore-vcs");
    p = await X9(g, n, i, {
      searchOtherAppsData: !0
    });
  }
  let u = p.map(item => h.relative(n, item)),
    duration_ms_2 = Date.now() - r;
  return t(`[FileIndex] ripgrep: ${u.length} files in ${duration_ms_2}ms`), l("tengu_file_suggestions_ripgrep", {
    file_count: u.length,
    duration_ms: duration_ms_2
  }), u;
}
async function ee(e, i) {
  let s = AbortSignal.timeout(1e4),
    n = e.fileIndex ??= new Szn(),
    o = Promise.withResolvers();
  e.trackedBuildPromise = o.promise;
  try {
    let r = yt(),
      c = fe(),
      p = r.respectGitignore ?? c.respectGitignore ?? !0,
      u = pe(),
      [f, g] = await Promise.all([Z(e, s, p, u), Y(u, i)]);
    e.cachedConfigFiles = g;
    let m = [...f, ...g],
      x = await A(m);
    e.cachedTrackedDirs = x;
    let F = [...x, ...m],
      I = D(u, F);
    if (I !== e.loadedTrackedSignature) {
      if (await R(e, n, F, u)) e.loadedTrackedSignature = I, e.loadedMergedSignature = null;
    } else t("[FileIndex] skipped index rebuild \u2014 tracked paths unchanged");
  } catch (error) {
    t(`[FileIndex] getPathsForSuggestions failed: ${d(error)}`, {
      level: "error"
    });
  } finally {
    o.resolve();
  }
  return n;
}
function te(e, i) {
  let s = Math.min(e.length, i.length),
    n = 0;
  while (n < s && e[n] === i[n]) n++;
  return e.substring(0, n);
}
function S6o(e) {
  if (e.length === 0) return "";
  let i = e.map(item => item.displayText),
    s = i[0];
  for (let n = 1; n < i.length; n++) {
    let o = i[n];
    if (s = te(s, o), s === "") return "";
  }
  return s;
}
function w(displayText, score) {
  return {
    id: `file-${displayText}`,
    displayText: displayText,
    metadata: score !== void 0 ? {
      score: score
    } : void 0
  };
}
function y(e) {
  let i = e.slice(0, QCt);
  return i.map((item, index) => w(item, index / Math.max(i.length, 1)));
}
var ne = 5000,
  re = 1000,
  se = 300000;
function Ntr(e, i) {
  if (e.fileListRefreshPromise || q()) return;
  let s = O();
  if (e.fileIndex) {
    if (s === null && e.lastRefreshMs > 0 && e.lastScanDurationMs !== null && e.lastScanDurationMs > re) return;
    if (!(s !== null && s !== e.lastGitIndexMtime) && Date.now() - e.lastRefreshMs < ne) return;
  }
  let cacheGeneration_2 = e.cacheGeneration,
    o = Date.now();
  e.fileIndex ??= new Szn(), e.fileListRefreshPromise = ee(e, i).then(r => {
    if (cacheGeneration_2 !== e.cacheGeneration) return r;
    e.fileListRefreshPromise = null, e.indexBuildComplete.emit(), e.lastGitIndexMtime = s;
    let c = Date.now();
    return e.lastRefreshMs = c, e.lastScanDurationMs = c - o, t(`[FileIndex] cache refresh completed in ${e.lastScanDurationMs}ms`), r;
  }).catch(r => {
    if (t(`[FileIndex] Cache refresh failed: ${d(r)}`), a(r), cacheGeneration_2 === e.cacheGeneration) e.fileListRefreshPromise = null;
    return e.fileIndex ??= new Szn();
  });
}
async function oe(e) {
  let i = ie();
  try {
    return (await i.readdir(e)).map(item => {
      let o = h.join(e, item.name),
        r = h.relative(e, o);
      return item.isDirectory() ? r + h.sep : r;
    });
  } catch (error) {
    return t(`[FileSuggestions] readdir failed for cwd: ${d(error)}`, {
      level: "error"
    }), [];
  }
}
async function iwn(e, i, s = !1, n) {
  let {
    items: items
  } = await raa(e, i, s, n);
  return items;
}
async function raa(e, query, s, n, o = !0) {
  if (q()) return {
    items: [],
    baseDir: void 0
  };
  if (Ct()) {
    if (!query && !s) return {
      items: [],
      baseDir: void 0
    };
    return {
      items: await le(query),
      baseDir: void 0
    };
  }
  let baseDir = pe();
  if (!query && !s) return {
    items: [],
    baseDir: baseDir
  };
  if ((o ? D7r(yt().fileSuggestion) : void 0)?.type === "command") {
    let u = {
        id: z(),
        project: {
          originalCwd: Ee(),
          projectRoot: Oo()
        }
      },
      f = {
        ..._p(u, baseDir),
        query: query
      },
      g = await mos(u, f);
    return {
      items: y(g),
      baseDir: baseDir
    };
  }
  if (query === "" || query === "." || query === "./") {
    let u = await oe(baseDir);
    return Ntr(e, n), {
      items: y(u),
      baseDir: baseDir
    };
  }
  let p = Date.now();
  try {
    let u = e.fileListRefreshPromise !== null;
    Ntr(e, n);
    let f = query,
      g = "." + h.sep;
    if (query.startsWith(g)) f = query.substring(2);
    if (f.startsWith("~")) f = mt(f);
    let items_2 = e.fileIndex ? e.fileIndex.search(f, QCt).map(item => w(item.path, item.score)) : [],
      baseDir_2 = e.indexBaseDir ?? baseDir,
      duration_ms_3 = Date.now() - p;
    return t(`[FileIndex] generateFileSuggestions: ${items_2.length} results in ${duration_ms_3}ms (${u ? "partial" : "full"} index)`), l("tengu_file_suggestions_query", {
      duration_ms: duration_ms_3,
      cache_hit: !u,
      result_count: items_2.length,
      query_length: query.length
    }), {
      items: items_2,
      baseDir: baseDir_2
    };
  } catch (error) {
    return a(error), {
      items: [],
      baseDir: baseDir
    };
  }
}
async function le(query_2) {
  let i = rr();
  if (!i || !Tl()) return [];
  try {
    return (await i.sendControlRequest({
      subtype: "file_suggestions",
      query: query_2
    })).suggestions.map(item => w(item.path, item.score));
  } catch (error) {
    return t(`[FileIndex] remote file_suggestions RPC failed: ${d(error)}`), [];
  }
}
function Ftr({
  suggestion: suggestion,
  input: input,
  partialPath: partialPath,
  startPos: startPos,
  onInputChange: onInputChange,
  setCursorOffset: setCursorOffset
}) {
  let c = typeof suggestion === "string" ? suggestion : suggestion.displayText,
    p = input.substring(0, startPos) + c + input.substring(startPos + partialPath.length);
  onInputChange(p);
  let u = startPos + c.length;
  return setCursorOffset(u), p;
}
function ae(e, cwd_2, s, n) {
  if (e.untrackedFetchPromise) return;
  let o = n ? ["-c", "core.quotepath=false", "ls-files", "--others", "--exclude-standard"] : ["-c", "core.quotepath=false", "ls-files", "--others"],
    cacheGeneration_3 = e.cacheGeneration,
    c = n && e.ignoreReincludeGlobs.length > 0,
    p = c && Date.now() >= e.reincludeRetryAtMs ? X9(["--files", "--hidden", ...e.ignoreReincludeGlobs.flatMap(item => ["--glob", item]), ...Q], ".", AbortSignal.timeout(1e4), {
      cwd: vpt(cwd_2, Y9().rgPath),
      rejectOnPartial: !0
    }).then(u => {
      if (cacheGeneration_3 === e.cacheGeneration) e.lastReincludedFiles = u;
      return u;
    }).catch(u => {
      if (t(`[FileIndex] .ignore re-include listing failed: ${d(u)}`), cacheGeneration_3 === e.cacheGeneration) e.reincludeRetryAtMs = Date.now() + se;
      return e.lastReincludedFiles;
    }) : Promise.resolve(c ? e.lastReincludedFiles : []);
  e.untrackedFetchPromise = Promise.all([lt(Pt(), o, {
    timeout: 1e4,
    cwd: cwd_2
  }), p]).then(async ([u, f]) => {
    if (await e.trackedBuildPromise, cacheGeneration_3 !== e.cacheGeneration) return;
    if (u.code !== 0) return;
    let g = u.stdout.trim().split(`
`).filter(Boolean);
    for (let F of f.map(item => h.normalize(item).replaceAll(h.sep, "/")).sort()) g.push(F);
    let m = await T(g, cwd_2, s),
      x = await _(e, cwd_2, s);
    if (x && m.length > 0) {
      let F = m.length;
      m = await G(x, m), t(`[FileIndex] applied ignore patterns to untracked: ${F} -> ${m.length} files`);
    }
    return t(`[FileIndex] background untracked fetch: ${m.length} files (${f.length} re-included by .ignore)`), U(e, m, s);
  }).catch(u => {
    t(`[FileIndex] background untracked fetch failed: ${u}`);
  }).finally(() => {
    e.untrackedFetchPromise = null;
  });
}
export { eIe, b6o, S6o, Ntr, iwn, raa, Ftr };