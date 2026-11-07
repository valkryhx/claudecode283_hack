// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Hr, Ve } from "B:/~BUN/root/chunk-myfamxtp.js";
import { K } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { t, _, ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { zn } from "B:/~BUN/root/chunk-nsneqfcc.js";
import { zdn, Om, GR } from "B:/~BUN/root/chunk-t4qpmjt5.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { kN } from "B:/~BUN/root/chunk-rr294jrm.js";
import { CLn } from "B:/~BUN/root/chunk-jmka9ye7.js";
import { o, E, C, u, Be, B, T } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { Ht } from "B:/~BUN/root/chunk-cbjnh04j.js";
import { X } from "B:/~BUN/root/chunk-g9pw24zp.js";
import { mkdir as I, readFile as w, stat as y, unlink as j } from "fs/promises";
import { dirname as x, join as M } from "path";
var h = 50,
  jsa = 14400000,
  b = 604800000;
function k(e, r, n) {
  return CLn() && Boolean(e?.length) && r !== void 0 && Gsa(r, n, b);
}
function Wsa(e, r) {
  return k(e.projectThreadSessionIds, e.projectThreadSessionIdsPersistedAt, r) ? e.projectThreadSessionIds : void 0;
}
function zsa(e, r) {
  return k(e.parkedProjectThreadSessionIds, e.parkedProjectThreadSessionIdsPersistedAt, r) ? e.parkedProjectThreadSessionIds ?? [] : [];
}
function R(e, r, n) {
  if (r?.projectThreadResume && (Wsa(e, n) !== void 0 || zsa(e, n).length > 0)) return b;
  return jsa;
}
var Mha = 900000,
  v = 120000;
function Gsa(e, r, n) {
  return r - e <= n && e - r <= v;
}
var F2t = 64,
  f = p(() => o().max(256).refine(kN)),
  z = p(() => u({
    sessionId: Be([T(""), f()]),
    environmentId: f(),
    source: B(["standalone", "repl"]),
    pid: E().optional(),
    procStart: o().optional(),
    activeSessionIds: C(f()).max(F2t).optional(),
    activeSessionIdsPersistedAt: E().int().min(0).max(8640000000000000).optional(),
    projectThreadSessionIds: C(f()).max(F2t).optional(),
    parkedProjectThreadSessionIds: C(f()).max(F2t).optional(),
    parkedProjectThreadSessionIdsPersistedAt: E().int().min(0).max(8640000000000000).optional(),
    projectThreadSessionIdsPersistedAt: E().int().min(0).max(8640000000000000).optional()
  }));
function P(e) {
  return M(Om(), GR(e), "bridge-pointer.json");
}
function S(e) {
  let r = GR(e);
  return Hr(r) ? Ve.bridgePointer(r) : null;
}
async function Dha(e, r, n) {
  let s = P(e),
    i = X() && n !== void 0 ? S(e) : null;
  if (X() && n !== void 0 && i) {
    let d = await n.write(i, _(r), {
      mode: 438 & ~process.umask()
    });
    if (!d.ok) return t(`[bridge:pointer] write failed: ${Ht(d.error)}`, {
      level: "warn"
    }), !1;
    return t(`[bridge:pointer] wrote ${s}`), !0;
  }
  try {
    return await I(x(s), {
      recursive: !0
    }), await zn(s, _(r)), t(`[bridge:pointer] wrote ${s}`), !0;
  } catch (error) {
    return t(`[bridge:pointer] write failed: ${error}`, {
      level: "warn"
    }), !1;
  }
}
function Lha() {
  let e = Promise.resolve();
  return r => (e = e.then(r, r), e);
}
async function EJs(e, r, n) {
  let s = P(e),
    i,
    d,
    g = n ? S(e) : null;
  if (n && g) {
    let l = await n.read([g]);
    if (!l.ok || !l.value.items[0].found) return null;
    d = l.value.items[0].mtimeMs, i = Buffer.from(l.value.items[0].value).toString("utf8");
  } else try {
    d = (await y(s)).mtimeMs, i = await w(s, "utf8");
  } catch {
    return null;
  }
  let m = z().safeParse(A(i));
  if (!m.success) {
    if (!r?.noClear) t(`[bridge:pointer] invalid schema, clearing: ${s}`), await TJs(e, n);
    return null;
  }
  let c = Date.now(),
    ageMs = Math.max(0, c - d);
  if (!r?.ignoreTtl && ageMs > R(m.data, r, c)) {
    if (!r?.noClear) t(`[bridge:pointer] stale mtime, clearing: ${s}`), await TJs(e, n);
    return null;
  }
  return {
    ...m.data,
    ageMs: ageMs
  };
}
async function Nha(dir, r, n) {
  let pointer = await EJs(dir, n, r);
  if (pointer) return {
    pointer: pointer,
    dir: dir
  };
  let i = await zdn(dir);
  if (i.length <= 1) return null;
  if (i.length > h) return t(`[bridge:pointer] ${i.length} worktrees exceeds fanout cap ${h}, skipping`), null;
  let d = GR(dir),
    g = i.filter(item => GR(item) !== d),
    m = await Promise.all(g.map(async a => {
      let pointer_2 = await EJs(a, void 0, r);
      return pointer_2 ? {
        pointer: pointer_2,
        dir: a
      } : null;
    })),
    c = null;
  for (let a of m) if (a && (!c || a.pointer.ageMs < c.pointer.ageMs)) c = a;
  if (c) t(`[bridge:pointer] fanout found pointer in worktree ${c.dir} (ageMs=${c.pointer.ageMs})`);
  return c;
}
async function TJs(e, r) {
  let n = P(e),
    s = r ? S(e) : null;
  if (r && s) {
    let i = await r.delete(s);
    if (i.ok || i.error.code === "NotFound") t(`[bridge:pointer] cleared ${n}`);else t(`[bridge:pointer] clear failed: ${Ht(i.error)}`, {
      level: "warn"
    });
    return;
  }
  try {
    await j(n), t(`[bridge:pointer] cleared ${n}`);
  } catch (error) {
    if (!K(error)) t(`[bridge:pointer] clear failed: ${error}`, {
      level: "warn"
    });
  }
}
function A(e) {
  try {
    return ee(e);
  } catch {
    return null;
  }
}
export { jsa, Wsa, zsa, Mha, Gsa, F2t, Dha, Lha, EJs, Nha, TJs };