// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  jn,
  Ae
} from "B:/~BUN/root/chunk-5w2ecytn.js";
import {
  B
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  H
} from "B:/~BUN/root/chunk-dkxhwhft.js";
import {
  b,
  J,
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  Cn
} from "B:/~BUN/root/chunk-2swveyqa.js";
import {
  Zft,
  zu,
  nS
} from "B:/~BUN/root/chunk-zv4xh2j0.js";
import {
  f
} from "B:/~BUN/root/chunk-zv3zxqya.js";
import {
  E$
} from "B:/~BUN/root/chunk-1rjcv085.js";
import {
  J0t
} from "B:/~BUN/root/chunk-x8507144.js";
import {
  o,
  E,
  C,
  u,
  $e,
  z,
  A
} from "B:/~BUN/root/chunk-n8qdr73v.js";
import {
  rt
} from "B:/~BUN/root/chunk-mmkravm0.js";
import {
  mkdir as _,
  readFile as I,
  stat as w,
  unlink as y
} from "fs/promises";
import {
  dirname as j,
  join as x
} from "path";
var h = 50,
  ojo = 14400000,
  T = 604800000;

function k(e, r, n) {
  return J0t() && Boolean(e?.length) && r !== void 0 && ajo(r, n, T)
}

function sjo(e, r) {
  return k(e.projectThreadSessionIds, e.projectThreadSessionIdsPersistedAt, r) ? e.projectThreadSessionIds : void 0
}

function ijo(e, r) {
  return k(e.parkedProjectThreadSessionIds, e.parkedProjectThreadSessionIdsPersistedAt, r) ? e.parkedProjectThreadSessionIds ?? [] : []
}

function M(e, r, n) {
  if (r?.projectThreadResume && (sjo(e, n) !== void 0 || ijo(e, n).length > 0)) return T;
  return ojo
}
var eKo = 900000,
  R = 120000;

function ajo(e, r, n) {
  return r - e <= n && e - r <= R
}
var s7e = 64,
  p = f(() => o().max(256).refine(E$)),
  v = f(() => u({
    sessionId: $e([A(""), p()]),
    environmentId: p(),
    source: z(["standalone", "repl"]),
    pid: E().optional(),
    procStart: o().optional(),
    activeSessionIds: C(p()).max(s7e).optional(),
    activeSessionIdsPersistedAt: E().int().min(0).max(8640000000000000).optional(),
    projectThreadSessionIds: C(p()).max(s7e).optional(),
    parkedProjectThreadSessionIds: C(p()).max(s7e).optional(),
    parkedProjectThreadSessionIdsPersistedAt: E().int().min(0).max(8640000000000000).optional(),
    projectThreadSessionIdsPersistedAt: E().int().min(0).max(8640000000000000).optional()
  }));

function P(e) {
  return x(zu(), nS(e), "bridge-pointer.json")
}

function S(e) {
  let r = nS(e);
  return jn(r) ? Ae.bridgePointer(r) : null
}
async function tKo(e, r, n) {
  let s = P(e),
    i = H() && n !== void 0 ? S(e) : null;
  if (H() && n !== void 0 && i) {
    let d = await n.write(i, b(r), {
      mode: 438 & ~process.umask()
    });
    if (!d.ok) return t(`[bridge:pointer] write failed: ${rt(d.error)}`, {
      level: "warn"
    }), !1;
    return t(`[bridge:pointer] wrote ${s}`), !0
  }
  try {
    return await _(j(s), {
      recursive: !0
    }), await Cn(s, b(r)), t(`[bridge:pointer] wrote ${s}`), !0
  } catch (d) {
    return t(`[bridge:pointer] write failed: ${d}`, {
      level: "warn"
    }), !1
  }
}

function nKo() {
  let e = Promise.resolve();
  return (r) => (e = e.then(r, r), e)
}
async function YQr(e, r, n) {
  let s = P(e),
    i, d, g = n ? S(e) : null;
  if (n && g) {
    let l = await n.read([g]);
    if (!l.ok || !l.value.items[0].found) return null;
    d = l.value.items[0].mtimeMs, i = Buffer.from(l.value.items[0].value).toString("utf8")
  } else try {
    d = (await w(s)).mtimeMs, i = await I(s, "utf8")
  } catch {
    return null
  }
  let m = v().safeParse(O(i));
  if (!m.success) {
    if (!r?.noClear) t(`[bridge:pointer] invalid schema, clearing: ${s}`), await XQr(e, n);
    return null
  }
  let c = Date.now(),
    a = Math.max(0, c - d);
  if (!r?.ignoreTtl && a > M(m.data, r, c)) {
    if (!r?.noClear) t(`[bridge:pointer] stale mtime, clearing: ${s}`), await XQr(e, n);
    return null
  }
  return {
    ...m.data,
    ageMs: a
  }
}
async function rKo(e, r, n) {
  let s = await YQr(e, n, r);
  if (s) return {
    pointer: s,
    dir: e
  };
  let i = await Zft(e);
  if (i.length <= 1) return null;
  if (i.length > h) return t(`[bridge:pointer] ${i.length} worktrees exceeds fanout cap ${h}, skipping`), null;
  let d = nS(e),
    g = i.filter((a) => nS(a) !== d),
    m = await Promise.all(g.map(async (a) => {
      let l = await YQr(a, void 0, r);
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
async function XQr(e, r) {
  let n = P(e),
    s = r ? S(e) : null;
  if (r && s) {
    let i = await r.delete(s);
    if (i.ok || i.error.code === "NotFound") t(`[bridge:pointer] cleared ${n}`);
    else t(`[bridge:pointer] clear failed: ${rt(i.error)}`, {
      level: "warn"
    });
    return
  }
  try {
    await y(n), t(`[bridge:pointer] cleared ${n}`)
  } catch (i) {
    if (!B(i)) t(`[bridge:pointer] clear failed: ${i}`, {
      level: "warn"
    })
  }
}

function O(e) {
  try {
    return J(e)
  } catch {
    return null
  }
}
export {
  ojo,
  sjo,
  ijo,
  eKo,
  ajo,
  s7e,
  tKo,
  nKo,
  YQr,
  rKo,
  XQr
};
