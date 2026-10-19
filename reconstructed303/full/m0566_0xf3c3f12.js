// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Uv
} from "B:/~BUN/root/chunk-vfmvkxsr.js";
import {
  d,
  k
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  Nn,
  Gr
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  W
} from "B:/~BUN/root/chunk-hg8ngszx.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  I
} from "B:/~BUN/root/chunk-je1b1drr.js";
import {
  gn
} from "B:/~BUN/root/chunk-pjgzz98k.js";
import {
  pt
} from "B:/~BUN/root/chunk-cqkcn3bx.js";
import {
  f
} from "B:/~BUN/root/chunk-frrkt2bs.js";
import {
  oce
} from "B:/~BUN/root/chunk-m68cfket.js";
import {
  xVe,
  Svt
} from "B:/~BUN/root/chunk-0y880t27.js";
import {
  HI
} from "B:/~BUN/root/chunk-szr0ry4b.js";
import {
  o,
  T,
  u,
  $e
} from "B:/~BUN/root/chunk-g3snhg6n.js";
import {
  stat as h
} from "fs/promises";
import {
  basename as y,
  dirname as x,
  normalize as C
} from "path";

function D(r) {
  return $e([r, T(r)]).optional().transform((n) => n === void 0 ? [] : Array.isArray(n) ? n : [n])
}
var w = f(() => {
  let r = Gr(oce, (n) => D(n.schema()));
  return u({
    $schema: o().optional(),
    ...r
  })
});

function EZn() {
  return w().parse({})
}
async function N2e(r, n) {
  let i;
  if (W() && n !== void 0 && r === HI()) {
    let e = await K(n, r);
    if (!e.ok) return e.result;
    i = e.raw
  } else try {
    let e = await h(r).catch((m) => k(m) === "ENOENT" ? null : Promise.reject(m));
    if (e && (!e.isFile() || e.size > xVe)) return {
      ok: !1,
      error: `${r} is not a regular file (or exceeds 1MiB)`
    };
    i = await gn().read(r)
  } catch (e) {
    if (k(e) === "ENOENT") return {
      ok: !0,
      config: EZn(),
      unknownKeys: []
    };
    return {
      ok: !1,
      error: `failed to read ${r}: ${d(e)}`
    }
  }
  let s = pt(i, !1);
  if (s === null) return {
    ok: !1,
    error: `failed to parse ${r} as JSON`
  };
  let c = w().safeParse(s);
  if (!c.success) return {
    ok: !1,
    error: `config validation failed: ${c.error.message}`
  };
  let a = new Set(Object.keys(w().shape)),
    l = typeof s === "object" && s !== null ? Object.keys(s).filter((e) => !a.has(e)) : [];
  return {
    ok: !0,
    config: c.data,
    unknownKeys: l
  }
}
async function K(r, n) {
  let i = await Svt(r);
  switch (i.kind) {
    case "text":
      return {
        ok: !0, raw: i.text
      };
    case "absent":
      return {
        ok: !1, result: {
          ok: !0,
          config: EZn(),
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
          error: `failed to read ${n}: ${d(i.error)}`
        }
      }
  }
}

function TZn(r, n) {
  let i = x(r),
    s = C(i),
    c = y(r),
    a = Uv.watch(i, {
      persistent: !0,
      ignoreInitial: !0,
      depth: 0,
      usePolling: I() === "macos",
      interval: 100,
      ignored: (l) => {
        let e = C(l);
        return e !== s && y(e) !== c
      },
      awaitWriteFinish: {
        stabilityThreshold: 300,
        pollInterval: 100
      },
      atomic: !0,
      ignorePermissionErrors: !0
    });
  return a.on("add", n), a.on("change", n), a.on("unlink", n), a.on("error", (l) => t(`[daemon-config] watcher error: ${d(l)}`, {
    level: "warn"
  })), () => void a.close().catch(() => {})
}

function s6o(r, n) {
  let i = {
    stop: [],
    start: [],
    restart: []
  };
  for (let s of Object.keys(oce)) {
    let c = r[s] ?? [],
      a = n[s] ?? [],
      l = Math.max(c.length, a.length);
    for (let e = 0; e < l; e++) {
      let m = `${s}:${e}`,
        g = c[e],
        p = a[e];
      if (g !== void 0 && p === void 0) i.stop.push({
        id: m,
        kind: s,
        previousConfig: g
      });
      else if (g === void 0 && p !== void 0) i.start.push({
        id: m,
        kind: s,
        config: p
      });
      else if (!Nn(g, p)) i.restart.push({
        id: m,
        kind: s,
        config: p,
        previousConfig: g
      })
    }
  }
  return i
}
export {
  EZn,
  N2e,
  TZn,
  s6o
};
