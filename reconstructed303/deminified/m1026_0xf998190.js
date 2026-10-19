// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { k } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Fw } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { xA, ns } from "B:/~BUN/root/chunk-rvc0n7zm.js";
import { ce } from "B:/~BUN/root/chunk-nxwmyxnk.js";
import { it } from "B:/~BUN/root/chunk-ek28wssa.js";
import { Yt } from "B:/~BUN/root/chunk-qp0344nb.js";
import { xf } from "B:/~BUN/root/chunk-ggdk44cm.js";
import { Pf, zv } from "B:/~BUN/root/chunk-cw2ph5fw.js";
import { qoe, eq } from "B:/~BUN/root/chunk-grt0b3xy.js";
import { mo, NE, NT, xG } from "B:/~BUN/root/chunk-c44qc88s.js";
import { unlink as D } from "fs/promises";
import { join as g, normalize as y, sep as w } from "path";
function m(n) {
  let t = n.split("/"),
    r = I();
  if (r === "windows" && t.some(item => /[<>"|*]/.test(item) || Fw(item) || /[. ]$/.test(item))) return `path ${xf(n)} cannot be a file name on Windows (reserved device name, trailing dot or space, or one of < > " | *)`;
  if ((r === "windows" || r === "wsl") && t.some(item => /~\d/.test(item))) return `path ${xf(n)} carries a NAME~1 short-name alias, which a Windows filesystem resolves to a differently named entry`;
  return;
}
function k8(n) {
  let t = n,
    r = i => {
      let o = t[i];
      return typeof o === "string" ? o : void 0;
    },
    e = zv(t.paths),
    paths = e === void 0 ? void 0 : e === Pf ? [] : e.filter(item => typeof item === "string");
  return {
    path: r("path"),
    paths: paths,
    outDir: r("out_dir")
  };
}
function Ace(n, {
  outDirJudged = !1
} = {}) {
  let {
    path: path,
    outDir: outDir
  } = k8(n);
  if (path === void 0) return {
    reason: "read_file requires `path` \u2014 a published path from a list_files result"
  };
  let s = eq(path);
  if ("errMsg" in s) return {
    reason: s.errMsg
  };
  let i = s.key.split("/"),
    reason = m(s.key);
  if (reason !== void 0) return {
    reason: reason
  };
  let d = I(),
    a = d === "windows" || d === "wsl",
    base,
    f = !1;
  try {
    if (outDir === void 0 || outDir === "") {
      let {
          url: url
        } = n,
        c = typeof url === "string" ? Yt(url) : null,
        p = c !== null ? l7(c.slug) : null;
      f = p !== null, base = p ?? ce();
    } else base = it(outDir);
  } catch {
    return {
      reason: "out_dir cannot be resolved to a local directory"
    };
  }
  if (!outDirJudged && d === "windows" && base.split(w).some(item => item !== "" && /[. ]$/.test(item))) return {
    reason: `${outDir === void 0 || outDir === "" ? "the default save directory" : `out_dir ${xf(outDir)}`} has a name ending in a dot or space, which Windows would save under a different name`
  };
  if (!outDirJudged && a && outDir !== void 0 && outDir.split(/[\\/]/).some(item => /~\d/.test(item))) return {
    reason: `out_dir ${xf(outDir)} names a directory by a NAME~1 short-name alias, which a Windows filesystem resolves to a differently named directory`
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
function Oqe(n, t = {}) {
  let r = n,
    {
      paths: paths_2,
      url: url_2,
      out_dir: out_dir
    } = r,
    o = typeof paths_2 === "object" && paths_2 !== null ? paths_2 : void 0,
    key = [typeof url_2 === "string" ? url_2 : "", typeof out_dir === "string" ? out_dir : "", t.outDirJudged === !0 ? "judged" : "", ce(), (NE() ? NT() : null) ?? ""].join("\x00"),
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
  } = k8(n);
  if (paths_3 === void 0 || paths_3.length === 0) return {
    reason: "read_file requires `path`, or `paths` naming at least one published path"
  };
  if (paths_3.length > qoe) return {
    reason: `\`paths\` names ${paths_3.length} paths; at most ${qoe} can be read in one call`
  };
  let e = {
    ...n
  };
  delete e.paths;
  let s,
    files = [],
    o = new Map();
  for (let path_2 of paths_3) {
    let a = Ace({
      ...e,
      path: path_2
    }, t);
    if ("reason" in a) return a;
    let l = eq(path_2),
      path_3 = "key" in l ? l.key : path_2,
      u = mo(y(a.dest).normalize("NFC").toUpperCase().toLowerCase()),
      c = o.get(u);
    if (c !== void 0) return {
      reason: c === path_3 ? `\`paths\` names ${xf(path_2)} more than once` : `\`paths\` names ${xf(c)} and ${xf(path_2)}, which could save to the same file on a case-insensitive volume; read one of them on its own`
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
var s9r = "artifact-files";
function l7(n) {
  let t = NE() ? NT() : null;
  return t === null ? null : g(t, s9r, n);
}
function coe(n) {
  return n.length > 0 && n.every(item => item.length > 0 && item.every(item => xG(item)));
}
function Iqe(n) {
  let t = NE() ? NT() : null;
  return t !== null && mo(y(n)).startsWith(mo(t) + w);
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
async function Mqe(n, t, r) {
  let e = !0;
  try {
    await ns(n, t, r);
    return;
  } catch (error) {
    let i = k(error);
    if (i === void 0 || !xA.has(i)) throw error;
    await D(t).catch(o => {
      if (k(o) !== "ENOENT") throw error;
      e = !1;
    });
  }
  try {
    await ns(n, t, r);
  } catch (error) {
    throw new PartialKeptError(n, error, e);
  }
}
export { k8, Ace, Oqe, s9r, l7, coe, Iqe, PartialKeptError as d7, Mqe };