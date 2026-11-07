// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  k
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  F$r,
  H$r
} from "B:/~BUN/root/chunk-h4acfc9y.js";
import {
  tt
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  x
} from "B:/~BUN/root/chunk-mwfggkjt.js";
import {
  ro,
  a7
} from "B:/~BUN/root/chunk-nsneqfcc.js";
import {
  lNi
} from "B:/~BUN/root/chunk-7rwbs73j.js";
import {
  Ol
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  SX
} from "B:/~BUN/root/chunk-jbf2dde1.js";
import {
  l3
} from "B:/~BUN/root/chunk-j05gjqgd.js";
import {
  uQe
} from "B:/~BUN/root/chunk-7pxn9dsp.js";
import {
  Qnr
} from "B:/~BUN/root/chunk-ekrezzcg.js";
import {
  Go
} from "B:/~BUN/root/chunk-cf143bsb.js";
import {
  constants as d
} from "fs";
import {
  link as I,
  lstat as l,
  mkdir as L,
  open as R,
  readlink as P,
  realpath as w,
  stat as D,
  unlink as A
} from "fs/promises";
import {
  posix as M
} from "path";
import {
  pipeline as b
} from "stream/promises";
var {
  basename: O,
  dirname: f,
  join: m,
  relative: U,
  sep: G
} = M, X = new Set(["claude.md", "claude.local.md", "agent.md"]), W = new Set(["head", "commondir", "node_modules", "site-packages", "dist-packages", "__pycache__"]), Y = new Set(["config", "config.worktree"]), v = new Set(["sitecustomize", "usercustomize"]), C5o = /[^\P{ASCII}\w .()+,=@#%[\]-]/u, B = new RegExp(`^-|\\s-\\S|${C5o.source}`, "u"), R5o = /[\p{Cc}\p{Zl}\p{Zp}]|(?![\u200c\u200d])\p{Cf}|(?:^|\p{ASCII})[\u200c\u200d]/u, Jnr = 255;

function A5o(e, t) {
  let n = Ol(e);
  if (n.startsWith(".")) return "dot_name";
  if (X.has(n) || Qnr.has(n) || e === "ARCHITECTURE.md") return "instruction_file";
  if (W.has(n) || v.has(tt(n, ".")) || t && (SX.has(n) || Y.has(n))) return "unsafe_name";
  if (H$r(e) || F$r.test(e) || B.test(e) || R5o.test(e)) return "odd_spelling";
  return
}

function ZBe(e) {
  let t = e.split(G);
  for (let [n, i] of t.entries()) {
    let r = A5o(i, n === t.length - 1);
    if (r !== void 0) return r
  }
  return
}
async function g(e) {
  try {
    return await w(e)
  } catch (t) {
    if (k(t) !== "ENOENT" || f(e) === e) throw t;
    return m(await g(f(e)), O(e))
  }
}

function _(e, t, n, i) {
  if (!uQe(e, t)) return "outside_home";
  let r = m(t, O(n));
  return ZBe(U(e, r)) ?? (l3(n, [n, r]).safe ? void 0 : "write_would_ask") ?? (i === void 0 || i.includes(r) ? void 0 : "not_as_judged")
}
var z = new Set(["EEXIST", "ENOTDIR", "ENOENT"]);
async function C(e) {
  try {
    return {
      outcome: (await l(e)).isFile() ? "already_present" : "path_occupied"
    }
  } catch (t) {
    if (k(t) === "ENOENT") return;
    throw t
  }
}
async function e1e(e, t) {
  let n = m(e, t),
    i = await w(e);
  try {
    let r = ZBe(t) ?? _(i, await g(f(n)), n, void 0);
    return r === void 0 ? await C(n) : {
      outcome: "refused_name",
      refusal: r
    }
  } catch (r) {
    if (k(r) === "ENOTDIR") return {
      outcome: "path_occupied"
    };
    throw r
  }
}
async function Kwn(e, t, n, i) {
  try {
    await I(e, n)
  } catch (u) {
    if (k(u) === "EEXIST") return;
    if (!lNi(u) && k(u) !== "EXDEV") throw u;
    return await J(t, n, i)
  }
  let [r, o] = await Promise.all([t.stat(), l(n)]);
  if (E(o, r)) return r;
  let c = await S(l(e));
  if (E(c, r)) return;
  for (let u of [c, await S(D(e))])
    if (u !== void 0 && await rve(n, u)) break;
  let s = Error("the source of a home file was exchanged while it was published");
  throw s.code = "HOME_SOURCE_EXCHANGED", s
}

function E(e, t) {
  return e?.ino === t.ino && e.dev === t.dev
}
async function S(e) {
  try {
    return await e
  } catch (t) {
    if (k(t) === "ENOENT") return;
    throw t
  }
}
async function rve(e, t) {
  try {
    if (!E(await S(l(e)), t)) return !1;
    return await A(e), !0
  } catch (n) {
    if (k(n) !== "ENOENT") a(n);
    return !1
  }
}
async function J(e, t, n) {
  let i;
  try {
    i = await R(t, d.O_WRONLY | d.O_CREAT | d.O_EXCL | ro, n)
  } catch (o) {
    if (k(o) === "EEXIST") return;
    throw o
  }
  let r;
  try {
    r = await i.stat();
    try {
      await i.chmod(n)
    } catch (o) {
      if (!a7(o)) throw o
    }
    return await b(e.createReadStream({
      start: 0,
      autoClose: !1
    }), i.createWriteStream()), E(await l(t), r) ? r : void 0
  } catch (o) {
    throw await i.close().catch(() => {}), await (r === void 0 ? A(t).catch(() => {}) : rve(t, r)), o
  }
}
async function Z(e, t) {
  if (x() !== "linux") return t(e, () => w(e));
  let n = await R(e, d.O_RDONLY | d.O_DIRECTORY | ro);
  try {
    let i = `/proc/self/fd/${n.fd}`;
    return await t(i, () => P(i))
  } finally {
    await n.close()
  }
}
var H = 420;
async function vRt(e, t, n, i) {
  let r = m(t, n),
    o = await w(t),
    c;
  try {
    let s = ZBe(n) ?? _(o, await g(f(r)), r, i);
    if (s !== void 0) return {
      outcome: "refused_name",
      refusal: s
    };
    c = await L(f(r), {
      recursive: !0
    })
  } catch (s) {
    if (z.has(k(s))) return {
      outcome: "path_occupied"
    };
    throw s
  }
  return await Z(f(r), async (s, u) => {
    let y = _(o, await u(), r, i);
    if (y !== void 0) return {
      outcome: "refused_name",
      refusal: y
    };
    let p = await R(e, Go | ro);
    try {
      if (!(await p.stat()).isFile()) {
        let F = Error("the source of a home file is not a regular file");
        throw F.code = "HOME_SOURCE_NOT_REGULAR", F
      }
      await p.chmod(H);
      let h = m(s, O(r)),
        N = await Kwn(e, p, h, H);
      if (N === void 0) return await C(h) ?? {
        outcome: "path_occupied"
      };
      let T = _(o, await u(), r, i);
      if (T !== void 0) return await rve(h, N), {
        outcome: "refused_name",
        refusal: T
      };
      return {
        outcome: "placed",
        ...c !== void 0 && {
          madeDirectory: c
        }
      }
    } finally {
      await p.close()
    }
  })
}
export {
  C5o,
  R5o,
  Jnr,
  A5o,
  ZBe,
  e1e,
  Kwn,
  rve,
  vRt
};
