// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Nt
} from "B:/~BUN/root/chunk-q78ga0zw.js";
import {
  z,
  Vs,
  q
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  k,
  wr
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  Ajs,
  Up,
  ene,
  yra,
  _ra,
  bra,
  Sra
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  Kpe,
  CC
} from "B:/~BUN/root/chunk-1g25msn4.js";
import {
  nze,
  F$,
  P_r
} from "B:/~BUN/root/chunk-ftj46fnn.js";
import {
  x
} from "B:/~BUN/root/chunk-mwfggkjt.js";
import {
  Ac
} from "B:/~BUN/root/chunk-d10hhz4p.js";
import {
  To
} from "B:/~BUN/root/chunk-j05gjqgd.js";
import {
  te,
  gD
} from "B:/~BUN/root/chunk-6v74v9ar.js";
import {
  lstatSync as P,
  realpathSync as y
} from "fs";
import {
  lstat as v,
  realpath as C,
  writeFile as T
} from "fs/promises";
import {
  basename as c,
  dirname as a,
  join as s,
  sep as I
} from "path";
var dqt = `${yra}
<${ene}>
`,
  cqt = `
</${ene}>

${_ra}`,
  f = {
    enveloped: !1
  },
  l = 256;

function p() {
  return gD() ? te().savedArtifactCopies : void 0
}

function S(e) {
  let n = x();
  return n === "macos" || n === "windows" ? To(e) : e
}
async function F(e) {
  if (q()) return e;
  let n = [];
  for (let t = e;; t = a(t)) {
    let r = await C(t).catch(() => {
      return
    });
    if (r !== void 0) return s(r, ...n.reverse());
    if (a(t) === t) return e;
    n.push(c(t))
  }
}

function R(e) {
  if (q()) return e;
  let n = [];
  for (let t = e;; t = a(t)) try {
    return s(y(t), ...n.reverse())
  } catch {
    if (a(t) === t) return e;
    n.push(c(t))
  }
}
async function u(e) {
  let n = Ac(e);
  return n === null ? null : S(s(await F(a(n)), c(n)))
}
async function L(e) {
  let n = Ac(e);
  if (n === null) return null;
  return (q() ? void 0 : await C(n).catch(() => {
    return
  })) ?? s(await F(a(n)), c(n))
}

function O(e) {
  if (q()) return e;
  try {
    return y(e)
  } catch {
    return s(R(a(e)), c(e))
  }
}

function EBe(e, n) {
  let {
    artifactInlineEnvelope: t
  } = import.meta.require("B:/~BUN/root/chunk-k8d3q3m2.js"), {
    enveloped: r,
    lead: i,
    tail: o
  } = t({
    ...e,
    html: ""
  });
  return r ? {
    enveloped: !0,
    notice: n,
    lead: i,
    tail: o
  } : f
}

function ICt(e) {
  return {
    enveloped: !0,
    notice: e,
    lead: dqt,
    tail: cqt
  }
}

function e6r(e) {
  return {
    enveloped: !0,
    notice: e,
    lead: `${bra}
<${ene}>
`,
    tail: `
</${ene}>

${Sra}`
  }
}

function MCt(e) {
  return `.${e},by-others`
}
async function t6r(e, n) {
  let t = s(e, MCt(n));
  if (await v(t).then(() => !0, () => !1)) return !1;
  try {
    return await T(t, "", {
      flag: "wx"
    }), !0
  } catch (r) {
    if (k(r) === "EEXIST") return !1;
    throw r
  }
}
var N = /^(.+\.json)(?:\.tmp\.[0-9a-f]{8})?$/i;

function A(e) {
  let n = q() ? void 0 : N.exec(c(e))?.[1];
  return n === void 0 ? void 0 : s(a(e), MCt(n))
}

function w(e) {
  return wr(e) || k(e) === "ENAMETOOLONG"
}

function d(e, n, t) {
  let r = e.copies.get(n);
  if (e.unwrapped -= r !== void 0 && !r.enveloped ? 1 : 0, e.copies.delete(n), t !== void 0) e.copies.set(n, t), e.unwrapped += t.enveloped ? 0 : 1
}

function D(e, n) {
  let t = te().savedArtifactCopies;
  d(t, e, n);
  let r = t.pending.get(e);
  if (r !== void 0) r.prior = n;
  if (t.unwrapped <= l) return;
  for (let [i, o] of t.copies) {
    if (t.unwrapped <= l) break;
    if (!o.enveloped && _(i) === void 0) d(t, i, void 0)
  }
}
async function Oya(e) {
  let n = await u(e);
  return n === null ? void 0 : p()?.copies.get(n)
}
async function IK(e, n) {
  let t = await u(e);
  if (t !== null) D(t, n)
}
async function Vke(e, n) {
  if (!n.enveloped) return;
  let t = await u(e);
  if (t === null) return;
  let r = te().savedArtifactCopies,
    i = r.pending.get(t);
  if (i === void 0) r.pending.set(t, {
    prior: r.copies.get(t),
    saves: 1
  });
  else i.saves++;
  d(r, t, n)
}
async function Ghe(e, n) {
  if (!n.enveloped) return;
  let t = await u(e),
    r = p(),
    i = t === null ? void 0 : r?.pending.get(t);
  if (t === null || r === void 0 || i === void 0) return;
  if (d(r, t, n), i.prior = n, --i.saves === 0) r.pending.delete(t)
}
async function $ne(e, n) {
  if (!n.enveloped) return;
  let t = await u(e),
    r = p(),
    i = t === null ? void 0 : r?.pending.get(t);
  if (t === null || r === void 0 || i === void 0) return;
  if (--i.saves === 0) r.pending.delete(t), d(r, t, i.prior)
}
async function h4o(e) {
  let n = await u(e),
    t = p();
  if (n !== null && t !== void 0) d(t, n, void 0), t.pending.delete(n)
}
async function $it(e, ...n) {
  let [, t, r] = n, i = Vs() === null ? void 0 : s(CC(), `${r}.${nze(t)}`);
  if (i !== void 0) await Vke(i, e);
  let o = await F$(...n).catch(async (h) => {
    if (i !== void 0) await $ne(i, e);
    throw h
  });
  if (i !== void 0) await ("error" in o || o.filepath !== i ? $ne(i, e) : Ghe(i, e));
  if (!("error" in o)) await IK(o.filepath, e);
  return o
}
async function Iya(e) {
  let n = await L(e);
  if (n === null) return f;
  let t = A(n),
    r = t !== void 0 && !await v(t).then(() => !1, w);
  return E(n, r)
}

function Mya(e) {
  let n = Ac(e);
  if (n === null) return f;
  let t = O(n),
    r = A(t),
    i = r !== void 0;
  try {
    if (r !== void 0) P(r)
  } catch (o) {
    i = !w(o)
  }
  return E(t, i)
}

function E(e, n) {
  let t = S(e),
    r = p()?.copies.get(t) ?? W(t);
  return n ? jia(e6r(Up(!0, Ajs)), r) : r
}

function jia(e, n) {
  return g(n) >= g(e) ? n : e
}

function g(e) {
  return !e.enveloped ? 0 : e.notice === "" ? 1 : 2
}

function Dya(e) {
  let {
    scrubArtifactEnvelopeTags: n
  } = import.meta.require("B:/~BUN/root/chunk-6xz7p8gr.js");
  return n(e, "page")
}

function b(e) {
  let n = Up(!0, Ajs);
  switch (e) {
    case "page":
      return EBe({
        role: "owner",
        cowritten: !1,
        vouchedOwn: !1
      }, n);
    case "working_page":
      return EBe({
        role: "writer",
        cowritten: !0,
        vouchedOwn: !1
      }, n);
    case "file":
      return ICt(n)
  }
}
var M = /^artifact-[^-]+-.+-.*-[0-9a-f]{32}\.[^.]+$/,
  B = /^(session|cse)_/,
  U = [Kpe, "scratchpad"];

function _(e) {
  let n = e.toLowerCase().split(I);
  if (P_r(e) && m(n.at(-3) ?? "")) return M.test(n.at(-1) ?? "") ? "file" : "page";
  let t = n.findIndex((i, o) => i === "artifact-files" && U.includes(n[o - 1] ?? "") && m(n[o - 2] ?? "")),
    r = n.slice(t + 1);
  if (t < 0 || r.length < 2 || r[1]?.startsWith("_") === !0) return;
  return r[1] === "working-copy" && r.length === 3 && r[2] === "index.html" ? "working_page" : "file"
}

function m(e) {
  return Nt(e) !== null || B.test(e) || e === z().toLowerCase()
}

function W(e) {
  let n = _(e);
  return n === void 0 ? f : b(n)
}
export {
  dqt,
  cqt,
  EBe,
  ICt,
  e6r,
  MCt,
  t6r,
  Oya,
  IK,
  Vke,
  Ghe,
  $ne,
  h4o,
  $it,
  Iya,
  Mya,
  jia,
  Dya
};
