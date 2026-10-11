// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  ub
} from "B:/~BUN/root/chunk-zz5hnasr.js";
import {
  l,
  v
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  So,
  io
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  H
} from "B:/~BUN/root/chunk-dkxhwhft.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  O
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  Qt
} from "B:/~BUN/root/chunk-bpp59nyd.js";
import {
  ct
} from "B:/~BUN/root/chunk-tsjnk8ma.js";
import {
  f
} from "B:/~BUN/root/chunk-zv3zxqya.js";
import {
  UQ
} from "B:/~BUN/root/chunk-gh4t1xg0.js";
import {
  hIe,
  dQe
} from "B:/~BUN/root/chunk-rg6271cv.js";
import {
  XC
} from "B:/~BUN/root/chunk-wp4rvaf5.js";
import {
  o,
  C,
  u,
  $e
} from "B:/~BUN/root/chunk-n8qdr73v.js";
import {
  stat as h
} from "fs/promises";
import {
  basename as w,
  dirname as x,
  normalize as y
} from "path";

function D(r) {
  return $e([r, C(r)]).optional().transform((n) => n === void 0 ? [] : Array.isArray(n) ? n : [n])
}
var p = f(() => {
  let r = io(UQ, (n) => D(n.schema()));
  return u({
    $schema: o().optional(),
    ...r
  })
});

function Xbn() {
  return p().parse({})
}
async function SPe(r, n) {
  let i;
  if (H() && n !== void 0 && r === XC()) {
    let e = await K(n, r);
    if (!e.ok) return e.result;
    i = e.raw
  } else try {
    let e = await h(r).catch((m) => v(m) === "ENOENT" ? null : Promise.reject(m));
    if (e && (!e.isFile() || e.size > hIe)) return {
      ok: !1,
      error: `${r} is not a regular file (or exceeds 1MiB)`
    };
    i = await Qt().read(r)
  } catch (e) {
    if (v(e) === "ENOENT") return {
      ok: !0,
      config: Xbn(),
      unknownKeys: []
    };
    return {
      ok: !1,
      error: `failed to read ${r}: ${l(e)}`
    }
  }
  let s = ct(i, !1);
  if (s === null) return {
    ok: !1,
    error: `failed to parse ${r} as JSON`
  };
  let c = p().safeParse(s);
  if (!c.success) return {
    ok: !1,
    error: `config validation failed: ${c.error.message}`
  };
  let a = new Set(Object.keys(p().shape)),
    d = typeof s === "object" && s !== null ? Object.keys(s).filter((e) => !a.has(e)) : [];
  return {
    ok: !0,
    config: c.data,
    unknownKeys: d
  }
}
async function K(r, n) {
  let i = await dQe(r);
  switch (i.kind) {
    case "text":
      return {
        ok: !0, raw: i.text
      };
    case "absent":
      return {
        ok: !1, result: {
          ok: !0,
          config: Xbn(),
          unknownKeys: []
        }
      };
    case "refused":
      return {
        ok: !1, result: {
          ok: !1,
          error: `${n} is not a regular file (or exceeds 1MiB)`
        }
      };
    case "failed":
      return {
        ok: !1, result: {
          ok: !1,
          error: `failed to read ${n}: ${i.error.code}`
        }
      };
    case "threw":
      return {
        ok: !1, result: {
          ok: !1,
          error: `failed to read ${n}: ${l(i.error)}`
        }
      }
  }
}

function Jbn(r, n) {
  let i = x(r),
    s = y(i),
    c = w(r),
    a = ub.watch(i, {
      persistent: !0,
      ignoreInitial: !0,
      depth: 0,
      usePolling: O() === "macos",
      interval: 100,
      ignored: (d) => {
        let e = y(d);
        return e !== s && w(e) !== c
      },
      awaitWriteFinish: {
        stabilityThreshold: 300,
        pollInterval: 100
      },
      atomic: !0,
      ignorePermissionErrors: !0
    });
  return a.on("add", n), a.on("change", n), a.on("unlink", n), a.on("error", (d) => t(`[daemon-config] watcher error: ${l(d)}`, {
    level: "warn"
  })), () => void a.close().catch(() => {})
}

function mYr(r, n) {
  let i = {
    stop: [],
    start: [],
    restart: []
  };
  for (let s of Object.keys(UQ)) {
    let c = r[s] ?? [],
      a = n[s] ?? [],
      d = Math.max(c.length, a.length);
    for (let e = 0; e < d; e++) {
      let m = `${s}:${e}`,
        k = c[e],
        g = a[e];
      if (k !== void 0 && g === void 0) i.stop.push({
        id: m,
        kind: s,
        previousConfig: k
      });
      else if (k === void 0 && g !== void 0) i.start.push({
        id: m,
        kind: s,
        config: g
      });
      else if (!So(k, g)) i.restart.push({
        id: m,
        kind: s,
        config: g,
        previousConfig: k
      })
    }
  }
  return i
}
export {
  Xbn,
  SPe,
  Jbn,
  mYr
};
