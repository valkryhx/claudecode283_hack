// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { v } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { JS } from "B:/~BUN/root/chunk-54p0h65d.js";
import { O } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { oe } from "B:/~BUN/root/chunk-shgdrs47.js";
import { XS, Bo } from "B:/~BUN/root/chunk-2swveyqa.js";
import { Ye } from "B:/~BUN/root/chunk-qqgpf856.js";
import { Bt } from "B:/~BUN/root/chunk-yehxgs7w.js";
import { Fu } from "B:/~BUN/root/chunk-0y3bphdf.js";
import { Bf, NE } from "B:/~BUN/root/chunk-z51p19sq.js";
import { F7, $U } from "B:/~BUN/root/chunk-7z8vew74.js";
import { to, xS, Ew, NF } from "B:/~BUN/root/chunk-d36ctpgs.js";
import { unlink as D } from "fs/promises";
import { join as g, normalize as y, sep as w } from "path";
function m(n) {
  let t = n.split("/"),
    r = O();
  if (r === "windows" && t.some(item => /[<>"|*]/.test(item) || JS(item) || /[. ]$/.test(item))) return `path ${Fu(n)} cannot be a file name on Windows (reserved device name, trailing dot or space, or one of < > " | *)`;
  if ((r === "windows" || r === "wsl") && t.some(item => /~\d/.test(item))) return `path ${Fu(n)} carries a NAME~1 short-name alias, which a Windows filesystem resolves to a differently named entry`;
  return;
}
function aG(n) {
  let t = n,
    r = i => {
      let o = t[i];
      return typeof o === "string" ? o : void 0;
    },
    e = NE(t.paths),
    paths = e === void 0 ? void 0 : e === Bf ? [] : e.filter(item => typeof item === "string");
  return {
    path: r("path"),
    paths: paths,
    outDir: r("out_dir")
  };
}
function QQ(n, {
  outDirJudged = !1
} = {}) {
  let {
    path: path,
    outDir: outDir
  } = aG(n);
  if (path === void 0) return {
    reason: "read_file requires `path` \u2014 a published path from a list_files result"
  };
  let s = $U(path);
  if ("errMsg" in s) return {
    reason: s.errMsg
  };
  let i = s.key.split("/"),
    reason = m(s.key);
  if (reason !== void 0) return {
    reason: reason
  };
  let d = O(),
    a = d === "windows" || d === "wsl",
    base,
    f = !1;
  try {
    if (outDir === void 0 || outDir === "") {
      let {
          url: url
        } = n,
        c = typeof url === "string" ? Bt(url) : null,
        p = c !== null ? YK(c.slug) : null;
      f = p !== null, base = p ?? oe();
    } else base = Ye(outDir);
  } catch {
    return {
      reason: "out_dir cannot be resolved to a local directory"
    };
  }
  if (!outDirJudged && d === "windows" && base.split(w).some(item => item !== "" && /[. ]$/.test(item))) return {
    reason: `${outDir === void 0 || outDir === "" ? "the default save directory" : `out_dir ${Fu(outDir)}`} has a name ending in a dot or space, which Windows would save under a different name`
  };
  if (!outDirJudged && a && outDir !== void 0 && outDir.split(/[\\/]/).some(item => /~\d/.test(item))) return {
    reason: `out_dir ${Fu(outDir)} names a directory by a NAME~1 short-name alias, which a Windows filesystem resolves to a differently named directory`
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
function zIe(n, t = {}) {
  let r = n,
    {
      paths: paths_2,
      url: url_2,
      out_dir: out_dir
    } = r,
    o = typeof paths_2 === "object" && paths_2 !== null ? paths_2 : void 0,
    key = [typeof url_2 === "string" ? url_2 : "", typeof out_dir === "string" ? out_dir : "", t.outDirJudged === !0 ? "judged" : "", oe(), (xS() ? Ew() : null) ?? ""].join("\x00"),
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
  } = aG(n);
  if (paths_3 === void 0 || paths_3.length === 0) return {
    reason: "read_file requires `path`, or `paths` naming at least one published path"
  };
  if (paths_3.length > F7) return {
    reason: `\`paths\` names ${paths_3.length} paths; at most ${F7} can be read in one call`
  };
  let e = {
    ...n
  };
  delete e.paths;
  let s,
    files = [],
    o = new Map();
  for (let path_2 of paths_3) {
    let a = QQ({
      ...e,
      path: path_2
    }, t);
    if ("reason" in a) return a;
    let l = $U(path_2),
      path_3 = "key" in l ? l.key : path_2,
      u = to(y(a.dest).normalize("NFC").toUpperCase().toLowerCase()),
      c = o.get(u);
    if (c !== void 0) return {
      reason: c === path_3 ? `\`paths\` names ${Fu(path_2)} more than once` : `\`paths\` names ${Fu(c)} and ${Fu(path_2)}, which could save to the same file on a case-insensitive volume; read one of them on its own`
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
var _or = "artifact-files";
function YK(n) {
  let t = xS() ? Ew() : null;
  return t === null ? null : g(t, _or, n);
}
function I5(n) {
  return n.length > 0 && n.every(item => item.length > 0 && item.every(item => NF(item)));
}
function GIe(n) {
  let t = xS() ? Ew() : null;
  return t !== null && to(y(n)).startsWith(to(t) + w);
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
async function VIe(n, t, r) {
  let e = !0;
  try {
    await Bo(n, t, r);
    return;
  } catch (error) {
    let i = v(error);
    if (i === void 0 || !XS.has(i)) throw error;
    await D(t).catch(o => {
      if (v(o) !== "ENOENT") throw error;
      e = !1;
    });
  }
  try {
    await Bo(n, t, r);
  } catch (error) {
    throw new PartialKeptError(n, error, e);
  }
}
export { aG, QQ, zIe, _or, YK, I5, GIe, PartialKeptError as XK, VIe };