// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { j } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { W } from "B:/~BUN/root/chunk-hg8ngszx.js";
import { po } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { _, J } from "B:/~BUN/root/chunk-6za2ez23.js";
import { An, dL } from "B:/~BUN/root/chunk-rvc0n7zm.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { Be } from "B:/~BUN/root/chunk-d9rmnpx3.js";
import { Rvr, Avr, tD } from "B:/~BUN/root/chunk-nq10jsxs.js";
import { al } from "B:/~BUN/root/chunk-v6pbq6dm.js";
import { o, v, T, u } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { createHash as D } from "crypto";
import { mkdir as S, readdir as h, rm as w, unlink as z } from "fs/promises";
import { join as p } from "path";
var l = 86400000,
  cap = 8388608;
function c(t) {
  return D("sha256").update(t).digest("hex").slice(0, 8);
}
function n(t) {
  return p(tD(), `.draft-${c(t)}`);
}
function m(t) {
  return _({
    ...t,
    ts: Date.now()
  });
}
async function a3t(t, r, e) {
  await cur(t, r, e);
}
async function cur(t, r, e) {
  if (W() && e) return (await e.write(Be.jobDraft(c(t)), m(r), {
    publishDiscipline: "atomic",
    mode: 438 & ~process.umask()
  }).catch(() => {
    return;
  }))?.ok === !0;
  try {
    return await S(tD(), {
      recursive: !0
    }), await An(n(t), m(r)), !0;
  } catch {
    return !1;
  }
}
function Xeo(t, r) {
  try {
    dL(n(t), m(r));
  } catch {}
}
async function Jeo(t, r) {
  if (r) {
    await r.delete(Be.jobDraft(c(t))).catch(() => {});
    return;
  }
  await z(n(t)).catch(() => {});
}
var g = f(() => u({
  q: o(),
  collapsed: T(o()).optional(),
  ts: v()
}));
async function Cas(t, r) {
  let e = r ? await k(r, t) : await al(n(t), cap);
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
  return Avr(t, Be.jobDraft(c(r)), {
    cap: cap,
    screens: P(),
    screenKey: n(r)
  });
}
function P() {
  return Rvr.of(j().host).drafts;
}
async function hOn() {
  return po("job_sweep_drafts", async () => {
    let t;
    try {
      t = await h(tD());
    } catch {
      return;
    }
    let r = Date.now();
    await Promise.all(t.filter(item => item.startsWith(".draft-")).map(async item => {
      let a = p(tD(), item),
        i = await al(a, cap);
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
export { a3t, cur, Xeo, Jeo, Cas, hOn };