// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  v
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  JS
} from "B:/~BUN/root/chunk-54p0h65d.js";
import {
  O
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  oe
} from "B:/~BUN/root/chunk-shgdrs47.js";
import {
  XS,
  Bo
} from "B:/~BUN/root/chunk-2swveyqa.js";
import {
  Ye
} from "B:/~BUN/root/chunk-qqgpf856.js";
import {
  Bt
} from "B:/~BUN/root/chunk-yehxgs7w.js";
import {
  Fu
} from "B:/~BUN/root/chunk-0y3bphdf.js";
import {
  Bf,
  NE
} from "B:/~BUN/root/chunk-z51p19sq.js";
import {
  F7,
  $U
} from "B:/~BUN/root/chunk-7z8vew74.js";
import {
  to,
  xS,
  Ew,
  NF
} from "B:/~BUN/root/chunk-d36ctpgs.js";
import {
  unlink as D
} from "fs/promises";
import {
  join as g,
  normalize as y,
  sep as w
} from "path";

function m(n) {
  let t = n.split("/"),
    r = O();
  if (r === "windows" && t.some((e) => /[<>"|*]/.test(e) || JS(e) || /[. ]$/.test(e))) return `path ${Fu(n)} cannot be a file name on Windows (reserved device name, trailing dot or space, or one of < > " | *)`;
  if ((r === "windows" || r === "wsl") && t.some((e) => /~\d/.test(e))) return `path ${Fu(n)} carries a NAME~1 short-name alias, which a Windows filesystem resolves to a differently named entry`;
  return
}

function aG(n) {
  let t = n,
    r = (i) => {
      let o = t[i];
      return typeof o === "string" ? o : void 0
    },
    e = NE(t.paths),
    s = e === void 0 ? void 0 : e === Bf ? [] : e.filter((i) => typeof i === "string");
  return {
    path: r("path"),
    paths: s,
    outDir: r("out_dir")
  }
}

function QQ(n, {
  outDirJudged: t = !1
} = {}) {
  let {
    path: r,
    outDir: e
  } = aG(n);
  if (r === void 0) return {
    reason: "read_file requires `path` \u2014 a published path from a list_files result"
  };
  let s = $U(r);
  if ("errMsg" in s) return {
    reason: s.errMsg
  };
  let i = s.key.split("/"),
    o = m(s.key);
  if (o !== void 0) return {
    reason: o
  };
  let d = O(),
    a = d === "windows" || d === "wsl",
    l, f = !1;
  try {
    if (e === void 0 || e === "") {
      let {
        url: u
      } = n, c = typeof u === "string" ? Bt(u) : null, p = c !== null ? YK(c.slug) : null;
      f = p !== null, l = p ?? oe()
    } else l = Ye(e)
  } catch {
    return {
      reason: "out_dir cannot be resolved to a local directory"
    }
  }
  if (!t && d === "windows" && l.split(w).some((u) => u !== "" && /[. ]$/.test(u))) return {
    reason: `${e===void 0||e===""?"the default save directory":`out_dir ${Fu(e)}`} has a name ending in a dot or space, which Windows would save under a different name`
  };
  if (!t && a && e !== void 0 && e.split(/[\\/]/).some((u) => /~\d/.test(u))) return {
    reason: `out_dir ${Fu(e)} names a directory by a NAME~1 short-name alias, which a Windows filesystem resolves to a differently named directory`
  };
  return {
    dest: g(l, ...i),
    base: l,
    ...f && {
      defaultDir: !0
    }
  }
}
var h = new WeakMap;

function zIe(n, t = {}) {
  let r = n,
    {
      paths: e,
      url: s,
      out_dir: i
    } = r,
    o = typeof e === "object" && e !== null ? e : void 0,
    d = [typeof s === "string" ? s : "", typeof i === "string" ? i : "", t.outDirJudged === !0 ? "judged" : "", oe(), (xS() ? Ew() : null) ?? ""].join("\x00"),
    a = o === void 0 ? void 0 : h.get(o);
  if (a !== void 0 && a.key === d) return a.value;
  let l = b(n, t);
  if (o !== void 0) h.set(o, {
    key: d,
    value: l
  });
  return l
}

function b(n, t) {
  let {
    paths: r
  } = aG(n);
  if (r === void 0 || r.length === 0) return {
    reason: "read_file requires `path`, or `paths` naming at least one published path"
  };
  if (r.length > F7) return {
    reason: `\`paths\` names ${r.length} paths; at most ${F7} can be read in one call`
  };
  let e = {
    ...n
  };
  delete e.paths;
  let s, i = [],
    o = new Map;
  for (let d of r) {
    let a = QQ({
      ...e,
      path: d
    }, t);
    if ("reason" in a) return a;
    let l = $U(d),
      f = "key" in l ? l.key : d,
      u = to(y(a.dest).normalize("NFC").toUpperCase().toLowerCase()),
      c = o.get(u);
    if (c !== void 0) return {
      reason: c === f ? `\`paths\` names ${Fu(d)} more than once` : `\`paths\` names ${Fu(c)} and ${Fu(d)}, which could save to the same file on a case-insensitive volume; read one of them on its own`
    };
    o.set(u, f), s ??= {
      base: a.base,
      ...a.defaultDir && {
        defaultDir: a.defaultDir
      }
    }, i.push({
      path: f,
      dest: a.dest
    })
  }
  return {
    ...s,
    files: i
  }
}
var _or = "artifact-files";

function YK(n) {
  let t = xS() ? Ew() : null;
  return t === null ? null : g(t, _or, n)
}

function I5(n) {
  return n.length > 0 && n.every((t) => t.length > 0 && t.every((r) => NF(r)))
}

function GIe(n) {
  let t = xS() ? Ew() : null;
  return t !== null && to(y(n)).startsWith(to(t) + w)
}
class XK extends Error {
  partial;
  renameError;
  removedEarlier;
  constructor(n, t, r) {
    super("the staged file could not be moved into place");
    this.partial = n;
    this.renameError = t;
    this.removedEarlier = r;
    this.name = "PartialKeptError"
  }
}
async function VIe(n, t, r) {
  let e = !0;
  try {
    await Bo(n, t, r);
    return
  } catch (s) {
    let i = v(s);
    if (i === void 0 || !XS.has(i)) throw s;
    await D(t).catch((o) => {
      if (v(o) !== "ENOENT") throw s;
      e = !1
    })
  }
  try {
    await Bo(n, t, r)
  } catch (s) {
    throw new XK(n, s, e)
  }
}
export {
  aG,
  QQ,
  zIe,
  _or,
  YK,
  I5,
  GIe,
  XK,
  VIe
};
