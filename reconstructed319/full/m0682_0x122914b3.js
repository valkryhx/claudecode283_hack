// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  nC
} from "B:/~BUN/root/chunk-eswth6m1.js";
import {
  d,
  k
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  x
} from "B:/~BUN/root/chunk-mwfggkjt.js";
import {
  Dn
} from "B:/~BUN/root/chunk-9jpwd6f1.js";
import {
  et
} from "B:/~BUN/root/chunk-fkr27nhj.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  ln
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  Er
} from "B:/~BUN/root/chunk-pc24rkga.js";
import {
  yke
} from "B:/~BUN/root/chunk-02efx09k.js";
import {
  Vhn,
  dGr
} from "B:/~BUN/root/chunk-5yr8g0ct.js";
import {
  BG
} from "B:/~BUN/root/chunk-gn3x9avq.js";
import {
  o,
  C,
  u,
  Be
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
import {
  X
} from "B:/~BUN/root/chunk-g9pw24zp.js";
import {
  stat as D
} from "fs/promises";
import {
  basename as y,
  dirname as K,
  normalize as h
} from "path";

function W(r) {
  return Be([r, C(r)]).optional().transform((n) => n === void 0 ? [] : Array.isArray(n) ? n : [n])
}
var w = p(() => {
  let r = Er(yke, (n) => W(n.schema()));
  return u({
    $schema: o().optional(),
    ...r
  })
});

function v1r() {
  return w().parse({})
}
async function not(r, n) {
  let i;
  if (X() && n !== void 0 && r === BG()) {
    let e = await z(n, r);
    if (!e.ok) return e.result;
    i = e.raw
  } else try {
    let e = await D(r).catch((l) => k(l) === "ENOENT" ? null : Promise.reject(l));
    if (e && (!e.isFile() || e.size > Vhn)) return {
      ok: !1,
      error: `${r} is not a regular file (or exceeds 1MiB)`
    };
    i = await Dn().read(r)
  } catch (e) {
    if (k(e) === "ENOENT") return {
      ok: !0,
      config: v1r(),
      unknownKeys: []
    };
    return {
      ok: !1,
      error: `failed to read ${r}: ${d(e)}`
    }
  }
  let s = et(i, !1);
  if (s === null) return {
    ok: !1,
    error: `failed to parse ${r} as JSON`
  };
  let f = w().safeParse(s);
  if (!f.success) return {
    ok: !1,
    error: `config validation failed: ${f.error.message}`
  };
  let a = new Set(Object.keys(w().shape)),
    c = typeof s === "object" && s !== null ? Object.keys(s).filter((e) => !a.has(e)) : [];
  return {
    ok: !0,
    config: f.data,
    unknownKeys: c
  }
}
async function z(r, n) {
  let i = await dGr(r);
  switch (i.kind) {
    case "text":
      return {
        ok: !0, raw: i.text
      };
    case "absent":
      return {
        ok: !1, result: {
          ok: !0,
          config: v1r(),
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

function E1r(r, n) {
  let i = K(r),
    s = h(i),
    f = y(r),
    a = nC.watch(i, {
      persistent: !0,
      ignoreInitial: !0,
      depth: 0,
      usePolling: x() === "macos",
      interval: 100,
      ignored: (c) => {
        let e = h(c);
        return e !== s && y(e) !== f
      },
      awaitWriteFinish: {
        stabilityThreshold: 300,
        pollInterval: 100
      },
      atomic: !0,
      ignorePermissionErrors: !0
    });
  return a.on("add", n), a.on("change", n), a.on("unlink", n), a.on("error", (c) => t(`[daemon-config] watcher error: ${d(c)}`, {
    level: "warn"
  })), () => void a.close().catch(() => {})
}

function Z6s(r, n) {
  let i = {
    stop: [],
    start: [],
    restart: []
  };
  for (let s of Object.keys(yke)) {
    let f = r[s] ?? [],
      a = n[s] ?? [],
      c = Math.max(f.length, a.length);
    for (let e = 0; e < c; e++) {
      let l = `${s}:${e}`,
        m = f[e],
        g = a[e];
      if (m !== void 0 && g === void 0) i.stop.push({
        id: l,
        kind: s,
        previousConfig: m
      });
      else if (m === void 0 && g !== void 0) i.start.push({
        id: l,
        kind: s,
        config: g
      });
      else if (!ln(m, g)) i.restart.push({
        id: l,
        kind: s,
        config: g,
        previousConfig: m
      })
    }
  }
  return i
}
export {
  v1r,
  not,
  E1r,
  Z6s
};
