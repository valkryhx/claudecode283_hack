// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Cr,
  Be
} from "B:/~BUN/root/chunk-d9rmnpx3.js";
import {
  G
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  W
} from "B:/~BUN/root/chunk-hg8ngszx.js";
import {
  _,
  J,
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  An
} from "B:/~BUN/root/chunk-rvc0n7zm.js";
import {
  Y1t,
  Vm,
  cE
} from "B:/~BUN/root/chunk-4bgg5sdy.js";
import {
  f
} from "B:/~BUN/root/chunk-frrkt2bs.js";
import {
  uF
} from "B:/~BUN/root/chunk-k9zm82w3.js";
import {
  Urn
} from "B:/~BUN/root/chunk-1g2t7gtx.js";
import {
  o,
  v,
  T,
  u,
  $e,
  U,
  C
} from "B:/~BUN/root/chunk-g3snhg6n.js";
import {
  yt
} from "B:/~BUN/root/chunk-hz8x9zsh.js";
import {
  mkdir as I,
  readFile as w,
  stat as y,
  unlink as j
} from "fs/promises";
import {
  dirname as B,
  join as x
} from "path";
var h = 50,
  C5s = 14400000,
  b = 604800000;

function k(e, r, n) {
  return Urn() && Boolean(e?.length) && r !== void 0 && x5s(r, n, b)
}

function R5s(e, r) {
  return k(e.projectThreadSessionIds, e.projectThreadSessionIdsPersistedAt, r) ? e.projectThreadSessionIds : void 0
}

function A5s(e, r) {
  return k(e.parkedProjectThreadSessionIds, e.parkedProjectThreadSessionIdsPersistedAt, r) ? e.parkedProjectThreadSessionIds ?? [] : []
}

function E(e, r, n) {
  if (r?.projectThreadResume && (R5s(e, n) !== void 0 || A5s(e, n).length > 0)) return b;
  return C5s
}
var fti = 900000,
  M = 120000;

function x5s(e, r, n) {
  return r - e <= n && e - r <= M
}
var akt = 64,
  p = f(() => o().max(256).refine(uF)),
  R = f(() => u({
    sessionId: $e([C(""), p()]),
    environmentId: p(),
    source: U(["standalone", "repl"]),
    pid: v().optional(),
    procStart: o().optional(),
    activeSessionIds: T(p()).max(akt).optional(),
    activeSessionIdsPersistedAt: v().int().min(0).max(8640000000000000).optional(),
    projectThreadSessionIds: T(p()).max(akt).optional(),
    parkedProjectThreadSessionIds: T(p()).max(akt).optional(),
    parkedProjectThreadSessionIdsPersistedAt: v().int().min(0).max(8640000000000000).optional(),
    projectThreadSessionIdsPersistedAt: v().int().min(0).max(8640000000000000).optional()
  }));

function P(e) {
  return x(Vm(), cE(e), "bridge-pointer.json")
}

function S(e) {
  let r = cE(e);
  return Cr(r) ? Be.bridgePointer(r) : null
}
async function mti(e, r, n) {
  let s = P(e),
    i = W() && n !== void 0 ? S(e) : null;
  if (W() && n !== void 0 && i) {
    let d = await n.write(i, _(r), {
      mode: 438 & ~process.umask()
    });
    if (!d.ok) return t(`[bridge:pointer] write failed: ${yt(d.error)}`, {
      level: "warn"
    }), !1;
    return t(`[bridge:pointer] wrote ${s}`), !0
  }
  try {
    return await I(B(s), {
      recursive: !0
    }), await An(s, _(r)), t(`[bridge:pointer] wrote ${s}`), !0
  } catch (d) {
    return t(`[bridge:pointer] write failed: ${d}`, {
      level: "warn"
    }), !1
  }
}

function gti() {
  let e = Promise.resolve();
  return (r) => (e = e.then(r, r), e)
}
async function O9o(e, r, n) {
  let s = P(e),
    i, d, g = n ? S(e) : null;
  if (n && g) {
    let l = await n.read([g]);
    if (!l.ok || !l.value.items[0].found) return null;
    d = l.value.items[0].mtimeMs, i = Buffer.from(l.value.items[0].value).toString("utf8")
  } else try {
    d = (await y(s)).mtimeMs, i = await w(s, "utf8")
  } catch {
    return null
  }
  let m = R().safeParse(z(i));
  if (!m.success) {
    if (!r?.noClear) t(`[bridge:pointer] invalid schema, clearing: ${s}`), await I9o(e, n);
    return null
  }
  let c = Date.now(),
    a = Math.max(0, c - d);
  if (!r?.ignoreTtl && a > E(m.data, r, c)) {
    if (!r?.noClear) t(`[bridge:pointer] stale mtime, clearing: ${s}`), await I9o(e, n);
    return null
  }
  return {
    ...m.data,
    ageMs: a
  }
}
async function hti(e, r, n) {
  let s = await O9o(e, n, r);
  if (s) return {
    pointer: s,
    dir: e
  };
  let i = await Y1t(e);
  if (i.length <= 1) return null;
  if (i.length > h) return t(`[bridge:pointer] ${i.length} worktrees exceeds fanout cap ${h}, skipping`), null;
  let d = cE(e),
    g = i.filter((a) => cE(a) !== d),
    m = await Promise.all(g.map(async (a) => {
      let l = await O9o(a, void 0, r);
      return l ? {
        pointer: l,
        dir: a
      } : null
    })),
    c = null;
  for (let a of m)
    if (a && (!c || a.pointer.ageMs < c.pointer.ageMs)) c = a;
  if (c) t(`[bridge:pointer] fanout found pointer in worktree ${c.dir} (ageMs=${c.pointer.ageMs})`);
  return c
}
async function I9o(e, r) {
  let n = P(e),
    s = r ? S(e) : null;
  if (r && s) {
    let i = await r.delete(s);
    if (i.ok || i.error.code === "NotFound") t(`[bridge:pointer] cleared ${n}`);
    else t(`[bridge:pointer] clear failed: ${yt(i.error)}`, {
      level: "warn"
    });
    return
  }
  try {
    await j(n), t(`[bridge:pointer] cleared ${n}`)
  } catch (i) {
    if (!G(i)) t(`[bridge:pointer] clear failed: ${i}`, {
      level: "warn"
    })
  }
}

function z(e) {
  try {
    return J(e)
  } catch {
    return null
  }
}
export {
  C5s,
  R5s,
  A5s,
  fti,
  x5s,
  akt,
  mti,
  gti,
  O9o,
  hti,
  I9o
};
