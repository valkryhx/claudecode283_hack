// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { j } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { H } from "B:/~BUN/root/chunk-dkxhwhft.js";
import { Or } from "B:/~BUN/root/chunk-51n463p1.js";
import { b, J } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Cn, eH } from "B:/~BUN/root/chunk-2swveyqa.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { Ae } from "B:/~BUN/root/chunk-5w2ecytn.js";
import { $Fn, UFn, WA } from "B:/~BUN/root/chunk-9sy3w2pa.js";
import { cl } from "B:/~BUN/root/chunk-3wnb3s8p.js";
import { o, E, C, u } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { createHash as D } from "crypto";
import { mkdir as S, readdir as h, rm as w, unlink as z } from "fs/promises";
import { join as p } from "path";
var l = 86400000,
  cap = 8388608;
function c(t) {
  return D("sha256").update(t).digest("hex").slice(0, 8);
}
function n(t) {
  return p(WA(), `.draft-${c(t)}`);
}
function m(t) {
  return b({
    ...t,
    ts: Date.now()
  });
}
async function Vwt(t, r, e) {
  await XCn(t, r, e);
}
async function XCn(t, r, e) {
  if (H() && e) return (await e.write(Ae.jobDraft(c(t)), m(r), {
    publishDiscipline: "atomic",
    mode: 438 & ~process.umask()
  }).catch(() => {
    return;
  }))?.ok === !0;
  try {
    return await S(WA(), {
      recursive: !0
    }), await Cn(n(t), m(r)), !0;
  } catch {
    return !1;
  }
}
function Mar(t, r) {
  try {
    eH(n(t), m(r));
  } catch {}
}
async function Dar(t, r) {
  if (r) {
    await r.delete(Ae.jobDraft(c(t))).catch(() => {});
    return;
  }
  await z(n(t)).catch(() => {});
}
var g = f(() => u({
  q: o(),
  collapsed: C(o()).optional(),
  ts: E()
}));
async function uto(t, r) {
  let e = r ? await k(r, t) : await cl(n(t), cap);
  if (e === null) return;
  let a;
  try {
    a = g().safeParse(J(e));
  } catch {
    return;
  }
  if (!a.success) return;
  let {
    q: q,
    collapsed: collapsed,
    ts: ts
  } = a.data;
  if (Date.now() - ts > l) return;
  return {
    q: q,
    collapsed: collapsed ?? []
  };
}
async function k(t, r) {
  return UFn(t, Ae.jobDraft(c(r)), {
    cap: cap,
    screens: P(),
    screenKey: n(r)
  });
}
function P() {
  return $Fn.of(j().host).drafts;
}
async function S3t() {
  return Or("job_sweep_drafts", async () => {
    let t;
    try {
      t = await h(WA());
    } catch {
      return;
    }
    let r = Date.now();
    await Promise.all(t.filter(item => item.startsWith(".draft-")).map(async item => {
      let a = p(WA(), item),
        i = await cl(a, cap);
      if (i !== null) try {
        let s = g().safeParse(J(i));
        if (s.success && r - s.data.ts <= l) return;
      } catch {}
      await w(a, {
        recursive: !0,
        force: !0
      }).catch(() => {});
    }));
  });
}
export { Vwt, XCn, Mar, Dar, uto, S3t };