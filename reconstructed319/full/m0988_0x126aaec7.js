// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  H
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  ao
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  _,
  ee
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  zn,
  ZU
} from "B:/~BUN/root/chunk-nsneqfcc.js";
import {
  yd
} from "B:/~BUN/root/chunk-xqymp2nr.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  Ve
} from "B:/~BUN/root/chunk-myfamxtp.js";
import {
  Tio,
  Cio,
  M$
} from "B:/~BUN/root/chunk-4vcs773m.js";
import {
  o,
  E,
  C,
  u
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
import {
  X
} from "B:/~BUN/root/chunk-g9pw24zp.js";
import {
  createHash as D
} from "crypto";
import {
  mkdir as S,
  readdir as h,
  rm as w,
  unlink as z
} from "fs/promises";
import {
  join as d
} from "path";
var l = 86400000,
  m = 8388608;

function c(t) {
  return D("sha256").update(t).digest("hex").slice(0, 8)
}

function n(t) {
  return d(M$(), `.draft-${c(t)}`)
}

function f(t) {
  return _({
    ...t,
    ts: Date.now()
  })
}
async function anr(t, r, e) {
  await Q3r(t, r, e)
}
async function Q3r(t, r, e) {
  if (X() && e) return (await e.write(Ve.jobDraft(c(t)), f(r), {
    publishDiscipline: "atomic",
    mode: 438 & ~process.umask()
  }).catch(() => {
    return
  }))?.ok === !0;
  try {
    return await S(M$(), {
      recursive: !0
    }), await zn(n(t), f(r)), !0
  } catch {
    return !1
  }
}

function h3o(t, r) {
  try {
    ZU(n(t), f(r))
  } catch {}
}
async function nci(t, r) {
  if (r) {
    await r.delete(Ve.jobDraft(c(t))).catch(() => {});
    return
  }
  await z(n(t)).catch(() => {})
}
var g = p(() => u({
  q: o(),
  collapsed: C(o()).optional(),
  ts: E()
}));
async function rci(t, r) {
  let e = r ? await k(r, t) : await yd(n(t), m);
  if (e === null) return;
  let a;
  try {
    a = g().safeParse(ee(e))
  } catch {
    return
  }
  if (!a.success) return;
  let {
    q: i,
    collapsed: s,
    ts: y
  } = a.data;
  if (Date.now() - y > l) return;
  return {
    q: i,
    collapsed: s ?? []
  }
}
async function k(t, r) {
  return Cio(t, Ve.jobDraft(c(r)), {
    cap: m,
    screens: P(),
    screenKey: n(r)
  })
}

function P() {
  return Tio.of(H().host).drafts
}
async function lnr() {
  return ao("job_sweep_drafts", async () => {
    let t;
    try {
      t = await h(M$())
    } catch {
      return
    }
    let r = Date.now();
    await Promise.all(t.filter((e) => e.startsWith(".draft-")).map(async (e) => {
      let a = d(M$(), e),
        i = await yd(a, m);
      if (i !== null) try {
        let s = g().safeParse(ee(i));
        if (s.success && r - s.data.ts <= l) return
      } catch {}
      await w(a, {
        recursive: !0,
        force: !0
      }).catch(() => {})
    }))
  })
}
export {
  anr,
  Q3r,
  h3o,
  nci,
  rci,
  lnr
};
