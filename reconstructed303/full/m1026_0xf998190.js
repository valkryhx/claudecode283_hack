// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  k
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  Fw
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  I
} from "B:/~BUN/root/chunk-je1b1drr.js";
import {
  xA,
  ns
} from "B:/~BUN/root/chunk-rvc0n7zm.js";
import {
  ce
} from "B:/~BUN/root/chunk-nxwmyxnk.js";
import {
  it
} from "B:/~BUN/root/chunk-ek28wssa.js";
import {
  Yt
} from "B:/~BUN/root/chunk-qp0344nb.js";
import {
  xf
} from "B:/~BUN/root/chunk-ggdk44cm.js";
import {
  Pf,
  zv
} from "B:/~BUN/root/chunk-cw2ph5fw.js";
import {
  qoe,
  eq
} from "B:/~BUN/root/chunk-grt0b3xy.js";
import {
  mo,
  NE,
  NT,
  xG
} from "B:/~BUN/root/chunk-c44qc88s.js";
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
    r = I();
  if (r === "windows" && t.some((e) => /[<>"|*]/.test(e) || Fw(e) || /[. ]$/.test(e))) return `path ${xf(n)} cannot be a file name on Windows (reserved device name, trailing dot or space, or one of < > " | *)`;
  if ((r === "windows" || r === "wsl") && t.some((e) => /~\d/.test(e))) return `path ${xf(n)} carries a NAME~1 short-name alias, which a Windows filesystem resolves to a differently named entry`;
  return
}

function k8(n) {
  let t = n,
    r = (i) => {
      let o = t[i];
      return typeof o === "string" ? o : void 0
    },
    e = zv(t.paths),
    s = e === void 0 ? void 0 : e === Pf ? [] : e.filter((i) => typeof i === "string");
  return {
    path: r("path"),
    paths: s,
    outDir: r("out_dir")
  }
}

function Ace(n, {
  outDirJudged: t = !1
} = {}) {
  let {
    path: r,
    outDir: e
  } = k8(n);
  if (r === void 0) return {
    reason: "read_file requires `path` \u2014 a published path from a list_files result"
  };
  let s = eq(r);
  if ("errMsg" in s) return {
    reason: s.errMsg
  };
  let i = s.key.split("/"),
    o = m(s.key);
  if (o !== void 0) return {
    reason: o
  };
  let d = I(),
    a = d === "windows" || d === "wsl",
    l, f = !1;
  try {
    if (e === void 0 || e === "") {
      let {
        url: u
      } = n, c = typeof u === "string" ? Yt(u) : null, p = c !== null ? l7(c.slug) : null;
      f = p !== null, l = p ?? ce()
    } else l = it(e)
  } catch {
    return {
      reason: "out_dir cannot be resolved to a local directory"
    }
  }
  if (!t && d === "windows" && l.split(w).some((u) => u !== "" && /[. ]$/.test(u))) return {
    reason: `${e===void 0||e===""?"the default save directory":`out_dir ${xf(e)}`} has a name ending in a dot or space, which Windows would save under a different name`
  };
  if (!t && a && e !== void 0 && e.split(/[\\/]/).some((u) => /~\d/.test(u))) return {
    reason: `out_dir ${xf(e)} names a directory by a NAME~1 short-name alias, which a Windows filesystem resolves to a differently named directory`
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

function Oqe(n, t = {}) {
  let r = n,
    {
      paths: e,
      url: s,
      out_dir: i
    } = r,
    o = typeof e === "object" && e !== null ? e : void 0,
    d = [typeof s === "string" ? s : "", typeof i === "string" ? i : "", t.outDirJudged === !0 ? "judged" : "", ce(), (NE() ? NT() : null) ?? ""].join("\x00"),
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
  } = k8(n);
  if (r === void 0 || r.length === 0) return {
    reason: "read_file requires `path`, or `paths` naming at least one published path"
  };
  if (r.length > qoe) return {
    reason: `\`paths\` names ${r.length} paths; at most ${qoe} can be read in one call`
  };
  let e = {
    ...n
  };
  delete e.paths;
  let s, i = [],
    o = new Map;
  for (let d of r) {
    let a = Ace({
      ...e,
      path: d
    }, t);
    if ("reason" in a) return a;
    let l = eq(d),
      f = "key" in l ? l.key : d,
      u = mo(y(a.dest).normalize("NFC").toUpperCase().toLowerCase()),
      c = o.get(u);
    if (c !== void 0) return {
      reason: c === f ? `\`paths\` names ${xf(d)} more than once` : `\`paths\` names ${xf(c)} and ${xf(d)}, which could save to the same file on a case-insensitive volume; read one of them on its own`
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
var s9r = "artifact-files";

function l7(n) {
  let t = NE() ? NT() : null;
  return t === null ? null : g(t, s9r, n)
}

function coe(n) {
  return n.length > 0 && n.every((t) => t.length > 0 && t.every((r) => xG(r)))
}

function Iqe(n) {
  let t = NE() ? NT() : null;
  return t !== null && mo(y(n)).startsWith(mo(t) + w)
}
class d7 extends Error {
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
async function Mqe(n, t, r) {
  let e = !0;
  try {
    await ns(n, t, r);
    return
  } catch (s) {
    let i = k(s);
    if (i === void 0 || !xA.has(i)) throw s;
    await D(t).catch((o) => {
      if (k(o) !== "ENOENT") throw s;
      e = !1
    })
  }
  try {
    await ns(n, t, r)
  } catch (s) {
    throw new d7(n, s, e)
  }
}
export {
  k8,
  Ace,
  Oqe,
  s9r,
  l7,
  coe,
  Iqe,
  d7,
  Mqe
};
