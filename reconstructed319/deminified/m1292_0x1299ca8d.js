// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { k } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { FE } from "B:/~BUN/root/chunk-h4acfc9y.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { kM, Is } from "B:/~BUN/root/chunk-nsneqfcc.js";
import { pe } from "B:/~BUN/root/chunk-thn0wk2x.js";
import { mt } from "B:/~BUN/root/chunk-d10hhz4p.js";
import { fn } from "B:/~BUN/root/chunk-3v92y8yw.js";
import { kl } from "B:/~BUN/root/chunk-gnvjfqfc.js";
import { Op, bw } from "B:/~BUN/root/chunk-jxvayzd7.js";
import { yge, U8 } from "B:/~BUN/root/chunk-gjq813eb.js";
import { To, kA, Hx, a3 } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { unlink as D } from "fs/promises";
import { join as g, normalize as y, sep as w } from "path";
function m(n) {
  let t = n.split("/"),
    r = x();
  if (r === "windows" && t.some(item => /[<>"|*]/.test(item) || FE(item) || /[. ]$/.test(item))) return `path ${kl(n)} cannot be a file name on Windows (reserved device name, trailing dot or space, or one of < > " | *)`;
  if ((r === "windows" || r === "wsl") && t.some(item => /~\d/.test(item))) return `path ${kl(n)} carries a NAME~1 short-name alias, which a Windows filesystem resolves to a differently named entry`;
  return;
}
function Nne(n) {
  let t = n,
    r = i => {
      let o = t[i];
      return typeof o === "string" ? o : void 0;
    },
    e = bw(t.paths),
    paths = e === void 0 ? void 0 : e === Op ? [] : e.filter(item => typeof item === "string");
  return {
    path: r("path"),
    paths: paths,
    outDir: r("out_dir")
  };
}
function Lke(n, {
  outDirJudged = !1
} = {}) {
  let {
    path: path,
    outDir: outDir
  } = Nne(n);
  if (path === void 0) return {
    reason: "read_file requires `path` \u2014 a published path from a list_files result"
  };
  let s = U8(path);
  if ("errMsg" in s) return {
    reason: s.errMsg
  };
  let i = s.key.split("/"),
    reason = m(s.key);
  if (reason !== void 0) return {
    reason: reason
  };
  let d = x(),
    a = d === "windows" || d === "wsl",
    base,
    f = !1;
  try {
    if (outDir === void 0 || outDir === "") {
      let {
          url: url
        } = n,
        c = typeof url === "string" ? fn(url) : null,
        p = c !== null ? rQ(c.slug) : null;
      f = p !== null, base = p ?? pe();
    } else base = mt(outDir);
  } catch {
    return {
      reason: "out_dir cannot be resolved to a local directory"
    };
  }
  if (!outDirJudged && d === "windows" && base.split(w).some(item => item !== "" && /[. ]$/.test(item))) return {
    reason: `${outDir === void 0 || outDir === "" ? "the default save directory" : `out_dir ${kl(outDir)}`} has a name ending in a dot or space, which Windows would save under a different name`
  };
  if (!outDirJudged && a && outDir !== void 0 && outDir.split(/[\\/]/).some(item => /~\d/.test(item))) return {
    reason: `out_dir ${kl(outDir)} names a directory by a NAME~1 short-name alias, which a Windows filesystem resolves to a differently named directory`
  };
  return {
    dest: g(base, ...i),
    base: base,
    ...(f && {
      defaultDir: !0
    })
  };
}
var weakMap = new WeakMap();
function fit(n, t = {}) {
  let r = n,
    {
      paths: paths_2,
      url: url_2,
      out_dir: out_dir
    } = r,
    o = typeof paths_2 === "object" && paths_2 !== null ? paths_2 : void 0,
    key = [typeof url_2 === "string" ? url_2 : "", typeof out_dir === "string" ? out_dir : "", t.outDirJudged === !0 ? "judged" : "", pe(), (kA() ? Hx() : null) ?? ""].join("\x00"),
    a = o === void 0 ? void 0 : weakMap.get(o);
  if (a !== void 0 && a.key === key) return a.value;
  let value = b(n, t);
  if (o !== void 0) weakMap.set(o, {
    key: key,
    value: value
  });
  return value;
}
function b(n, t) {
  let {
    paths: paths_3
  } = Nne(n);
  if (paths_3 === void 0 || paths_3.length === 0) return {
    reason: "read_file requires `path`, or `paths` naming at least one published path"
  };
  if (paths_3.length > yge) return {
    reason: `\`paths\` names ${paths_3.length} paths; at most ${yge} can be read in one call`
  };
  let e = {
    ...n
  };
  delete e.paths;
  let s,
    files = [],
    o = new Map();
  for (let path_2 of paths_3) {
    let a = Lke({
      ...e,
      path: path_2
    }, t);
    if ("reason" in a) return a;
    let l = U8(path_2),
      path_3 = "key" in l ? l.key : path_2,
      u = To(y(a.dest).normalize("NFC").toUpperCase().toLowerCase()),
      c = o.get(u);
    if (c !== void 0) return {
      reason: c === path_3 ? `\`paths\` names ${kl(path_2)} more than once` : `\`paths\` names ${kl(c)} and ${kl(path_2)}, which could save to the same file on a case-insensitive volume; read one of them on its own`
    };
    o.set(u, path_3), s ??= {
      base: a.base,
      ...(a.defaultDir && {
        defaultDir: a.defaultDir
      })
    }, files.push({
      path: path_3,
      dest: a.dest
    });
  }
  return {
    ...s,
    files: files
  };
}
var L2o = "artifact-files";
function rQ(n) {
  let t = kA() ? Hx() : null;
  return t === null ? null : g(t, L2o, n);
}
function Nhe(n) {
  return n.length > 0 && n.every(item => item.length > 0 && item.every(item => a3(item)));
}
function pit(n) {
  let t = kA() ? Hx() : null;
  return t !== null && To(y(n)).startsWith(To(t) + w);
}
class PartialKeptError extends Error {
  partial;
  renameError;
  removedEarlier;
  constructor(n, t, r) {
    super("the staged file could not be moved into place");
    this.partial = n;
    this.renameError = t;
    this.removedEarlier = r;
    this.name = "PartialKeptError";
  }
}
async function mit(n, t, r) {
  let e = !0;
  try {
    await Is(n, t, r);
    return;
  } catch (error) {
    let i = k(error);
    if (i === void 0 || !kM.has(i)) throw error;
    await D(t).catch(o => {
      if (k(o) !== "ENOENT") throw error;
      e = !1;
    });
  }
  try {
    await Is(n, t, r);
  } catch (error) {
    throw new PartialKeptError(n, error, e);
  }
}
export { Nne, Lke, fit, L2o, rQ, Nhe, pit, PartialKeptError as p8, mit };