// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { F, k, wr, qt } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { RG } from "B:/~BUN/root/chunk-h4acfc9y.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { Go } from "B:/~BUN/root/chunk-cf143bsb.js";
import { U } from "B:/~BUN/root/chunk-5ha2avah.js";
import { constants as g } from "fs";
import { lstat as p, open as h, realpath as w, statfs as E } from "fs/promises";
import { dirname as f, join as c } from "path";
var s = {
  head: "HEAD",
  objects: "objects",
  refs: "refs"
};
function L(e) {
  let t = !1,
    r = !1,
    o = !1;
  for (let i of e) {
    let n = i.isDirectory || i.isSymbolicLink;
    t ||= i.name === s.head && !i.isDirectory, r ||= i.name === s.objects && n, o ||= i.name === s.refs && n;
  }
  return t && r && o;
}
var oGr = ["commondir", "packed-refs", "FETCH_HEAD", "ORIG_HEAD"],
  u = [s.head, "config", "config.worktree", "config.lock", "config.worktree.lock"],
  P = [...oGr, "description"];
async function B9s(e) {
  let t = await Promise.all(u.map(item => l(e, item, "file")));
  if (!t.includes(!0)) return !1;
  let [r, [o, i]] = await Promise.all([Promise.all(P.map(item => l(e, item, "file"))), Promise.all([s.objects, s.refs].map(item => l(e, item, "any")))]);
  return U(t, n => n) > 1 || r.includes(!0) || o === !0 && i === !0 || t[u.indexOf(s.head)] === !0 && i === !0;
}
function l(e, t, r) {
  return p(c(e, t)).then(o => r === "any" || !o.isDirectory(), o => !wr(o));
}
var m = "gitdir: ",
  d = 391;
async function b(e) {
  return p(e).catch(t => {
    if (["ENOENT", "ENOTDIR"].includes(k(t) ?? "")) return null;
    throw t;
  });
}
async function D(e) {
  if (RG(e)) return !0;
  if (!["linux", "wsl"].includes(x())) return !1;
  return (await E(e).catch(() => null))?.type === d;
}
async function y(e) {
  let t = await Promise.all([s.head, s.objects, s.refs].map(async r => {
    let o = await b(c(e, r));
    return o && {
      name: r,
      isDirectory: o.isDirectory(),
      isSymbolicLink: o.isSymbolicLink()
    };
  }));
  return L(t.filter(item => item !== null));
}
async function S(e) {
  let t = await h(e, g.O_RDONLY | Go);
  try {
    if (!(await t.stat()).isFile()) return !1;
    let r = Buffer.alloc(m.length);
    return await t.read(r, 0, r.length, 0), r.toString() === m;
  } finally {
    await t.close();
  }
}
async function q$o(e) {
  try {
    let t = [];
    for (let r = await w(e);; r = f(r)) {
      if (await D(r)) return !1;
      if (await y(r)) {
        for (let n of t) if (await S(n)) return !1;
        return !0;
      }
      let o = c(r, ".git"),
        i = await b(o);
      if (i?.isDirectory() && (await y(o))) return !1;
      if (i?.isFile()) t.push(o);
      if (f(r) === r) return !1;
    }
  } catch (error) {
    if (!qt(error)) a(F(error));
    return !0;
  }
}
export { oGr, B9s, q$o };