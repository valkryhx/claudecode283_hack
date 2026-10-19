// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { k } from "B:/~BUN/root/chunk-3aez4b53.js";
import { sQn, iQn } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { nt } from "B:/~BUN/root/chunk-nggrknsv.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { cCs } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { vl } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { LG } from "B:/~BUN/root/chunk-2zdc0br5.js";
import { Zs } from "B:/~BUN/root/chunk-wegca9zh.js";
import { PG } from "B:/~BUN/root/chunk-c44qc88s.js";
import { Non } from "B:/~BUN/root/chunk-9w4ppz44.js";
import { tAn } from "B:/~BUN/root/chunk-aavacqjw.js";
import { Us } from "B:/~BUN/root/chunk-t7350kw8.js";
import { constants as f } from "fs";
import { link as A, lstat as d, mkdir as C, open as O, readlink as L, realpath as w, stat as x, unlink as P } from "fs/promises";
import { posix as D } from "path";
import { pipeline as M } from "stream/promises";
var {
    basename: basename,
    dirname: dirname,
    join: join,
    relative: relative,
    sep: sep
  } = D,
  G = new Set(["claude.md", "claude.local.md", "agent.md"]),
  X = new Set(["head", "commondir", "node_modules", "site-packages", "dist-packages", "__pycache__"]),
  W = new Set(["config", "config.worktree"]),
  Y = new Set(["sitecustomize", "usercustomize"]),
  v = /^-|\s-\S|[^\P{ASCII}\w .()+,=@#%[\]-]/u,
  B = /[\p{Cc}\p{Zl}\p{Zp}]|(?![\u200c\u200d])\p{Cf}|(?:^|\p{ASCII})[\u200c\u200d]/u,
  Akn = 255;
function z(e, t) {
  let n = vl(e);
  if (n.startsWith(".")) return "dot_name";
  if (G.has(n) || tAn.has(n)) return "instruction_file";
  if (X.has(n) || Y.has(nt(n, ".")) || t && (LG.has(n) || W.has(n))) return "unsafe_name";
  if (iQn(e) || sQn.test(e) || v.test(e) || B.test(e)) return "odd_spelling";
  return;
}
function dRe(e) {
  let t = e.split(sep);
  for (let [n, r] of t.entries()) {
    let i = z(r, n === t.length - 1);
    if (i !== void 0) return i;
  }
  return;
}
async function g(e) {
  try {
    return await w(e);
  } catch (error) {
    if (k(error) !== "ENOENT" || dirname(e) === e) throw error;
    return join(await g(dirname(e)), basename(e));
  }
}
function _(e, t, n) {
  if (!Non(e, t)) return "outside_home";
  let r = join(t, basename(n));
  return dRe(relative(e, r)) ?? (PG(n, [n, r]).safe ? void 0 : "write_would_ask");
}
var J = new Set(["EEXIST", "ENOTDIR", "ENOENT"]);
async function H(e) {
  try {
    return {
      outcome: (await d(e)).isFile() ? "already_present" : "path_occupied"
    };
  } catch (error) {
    if (k(error) === "ENOENT") return;
    throw error;
  }
}
async function cRe(e, t) {
  let n = join(e, t),
    r = await w(e);
  try {
    let refusal = dRe(t) ?? _(r, await g(dirname(n)), n);
    return refusal === void 0 ? await H(n) : {
      outcome: "refused_name",
      refusal: refusal
    };
  } catch (error) {
    if (k(error) === "ENOTDIR") return {
      outcome: "path_occupied"
    };
    throw error;
  }
}
async function Z(e, t, n, r) {
  try {
    await A(e, n);
  } catch (error) {
    if (k(error) === "EEXIST") return;
    if (!cCs(error) && k(error) !== "EXDEV") throw error;
    return await j(t, n, r);
  }
  let [i, o] = await Promise.all([t.stat(), d(n)]);
  if (E(o, i)) return i;
  let a = await S(d(e));
  if (E(a, i)) return;
  for (let s of [a, await S(x(e))]) if (s !== void 0 && (await ort(n, s))) break;
  let c = Error("the source of a home file was exchanged while it was published");
  throw c.code = "HOME_SOURCE_EXCHANGED", c;
}
function E(e, t) {
  return e?.ino === t.ino && e.dev === t.dev;
}
async function S(e) {
  try {
    return await e;
  } catch (error) {
    if (k(error) === "ENOENT") return;
    throw error;
  }
}
async function ort(e, t) {
  try {
    if (!E(await S(d(e)), t)) return !1;
    return await P(e), !0;
  } catch (error) {
    if (k(error) !== "ENOENT") l(error);
    return !1;
  }
}
async function j(e, t, n) {
  let r;
  try {
    r = await O(t, f.O_WRONLY | f.O_CREAT | f.O_EXCL | Zs, n);
  } catch (error) {
    if (k(error) === "EEXIST") return;
    throw error;
  }
  let i;
  try {
    return i = await r.stat(), await r.chmod(n), await M(e.createReadStream({
      start: 0,
      autoClose: !1
    }), r.createWriteStream()), E(await d(t), i) ? i : void 0;
  } catch (error) {
    throw await r.close().catch(() => {}), await (i === void 0 ? P(t).catch(() => {}) : ort(t, i)), error;
  }
}
async function K(e, t) {
  if (I() !== "linux") return t(e, () => w(e));
  let n = await O(e, f.O_RDONLY | f.O_DIRECTORY | Zs);
  try {
    let r = `/proc/self/fd/${n.fd}`;
    return await t(r, () => L(r));
  } finally {
    await n.close();
  }
}
var F = 420;
async function srt(e, t, n) {
  let r = join(t, n),
    i = await w(t),
    madeDirectory;
  try {
    let refusal_2 = dRe(n) ?? _(i, await g(dirname(r)), r);
    if (refusal_2 !== void 0) return {
      outcome: "refused_name",
      refusal: refusal_2
    };
    madeDirectory = await C(dirname(r), {
      recursive: !0
    });
  } catch (error) {
    if (J.has(k(error))) return {
      outcome: "path_occupied"
    };
    throw error;
  }
  return await K(dirname(r), async (a, c) => {
    let refusal_3 = _(i, await c(), r);
    if (refusal_3 !== void 0) return {
      outcome: "refused_name",
      refusal: refusal_3
    };
    let p = await O(e, Us | Zs);
    try {
      if (!(await p.stat()).isFile()) {
        let T = Error("the source of a home file is not a regular file");
        throw T.code = "HOME_SOURCE_NOT_REGULAR", T;
      }
      await p.chmod(F);
      let h = join(a, basename(r)),
        N = await Z(e, p, h, F);
      if (N === void 0) return (await H(h)) ?? {
        outcome: "path_occupied"
      };
      let refusal_4 = _(i, await c(), r);
      if (refusal_4 !== void 0) return await ort(h, N), {
        outcome: "refused_name",
        refusal: refusal_4
      };
      return {
        outcome: "placed",
        ...(madeDirectory !== void 0 && {
          madeDirectory: madeDirectory
        })
      };
    } finally {
      await p.close();
    }
  });
}
export { Akn, dRe, cRe, ort, srt };