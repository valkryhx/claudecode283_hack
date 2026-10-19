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
  Cr,
  Be
} from "B:/~BUN/root/chunk-d9rmnpx3.js";
import {
  Me
} from "B:/~BUN/root/chunk-rwkgcmm8.js";
import {
  j
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  W
} from "B:/~BUN/root/chunk-hg8ngszx.js";
import {
  d,
  k,
  G,
  Wt
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  z
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  Pe
} from "B:/~BUN/root/chunk-fbyz9h0p.js";
import {
  _,
  J,
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  xr
} from "B:/~BUN/root/chunk-vttg4n7q.js";
import {
  f
} from "B:/~BUN/root/chunk-frrkt2bs.js";
import {
  JUn,
  dj,
  V6
} from "B:/~BUN/root/chunk-d69870x4.js";
import {
  uie
} from "B:/~BUN/root/chunk-m5caq93p.js";
import {
  _s
} from "B:/~BUN/root/chunk-b4xxgr0r.js";
import {
  o,
  u,
  fe
} from "B:/~BUN/root/chunk-g3snhg6n.js";
import {
  Em,
  pa
} from "B:/~BUN/root/chunk-wg7rg6k5.js";
import {
  l0
} from "B:/~BUN/root/chunk-q9dtdza4.js";
import {
  yt
} from "B:/~BUN/root/chunk-hz8x9zsh.js";
import {
  readdir as A,
  readFile as I,
  stat as F
} from "fs/promises";
import {
  basename as w,
  extname as N,
  join as C
} from "path";
import {
  isDeepStrictEqual as R
} from "util";
class x {
  customThemeBases = void 0;
  userThemes = void 0;
  pluginThemes = _s([]);
  systemTheme = void 0;
  systemThemeChanged = Me();
  onSystemThemeChange = this.systemThemeChanged.subscribe;
  customThemeBase(e) {
    return this.customThemeBases?.get(e)
  }
  addCustomThemeBases(e) {
    this.customThemeBases ??= new Map;
    for (let r of e) this.customThemeBases.set(r.slug, r.base)
  }
  commitUserThemes(e) {
    if (this.customThemeBases = new Map(e.map((r) => [r.slug, r.base])), this.addCustomThemeBases(this.pluginThemes.getState()), this.userThemes === void 0 || !R(this.userThemes, e)) this.userThemes = e;
    return this.userThemes
  }
  cachedUserThemes() {
    return this.userThemes ?? []
  }
  cachedSystemTheme() {
    return this.systemTheme
  }
  setSystemTheme(e) {
    if (this.systemTheme === e) return;
    this.systemTheme = e, this.systemThemeChanged.emit()
  }
}
var M = new z(() => new x);

function C1() {
  return M.of(j().host)
}
var b = "custom:",
  D = 262144;

function Z7r(e) {
  return C1().customThemeBase(e)
}

function scr() {
  return C1().cachedUserThemes()
}

function eZr(e) {
  let r = C1();
  return r.cachedUserThemes().find((s) => s.slug === e) ?? r.pluginThemes.getState().find((s) => s.slug === e)
}

function Jot() {
  return C(Pe(), "themes")
}

function P7(e) {
  return `${b}${e}`
}

function BI(e) {
  return e.startsWith(b) ? e.slice(b.length) : null
}

function E(e, r, s) {
  let i;
  try {
    i = J(r)
  } catch {
    t(`[theme] ${e}.json: invalid JSON`, {
      level: "warn"
    });
    return
  }
  if (typeof i !== "object" || i === null || Array.isArray(i)) return;
  let m = i,
    h = JUn(m.base) ? m.base : "dark",
    c = typeof m.name === "string" ? m.name : e,
    n = {};
  if (typeof m.overrides === "object" && m.overrides !== null) {
    let p = dj(h);
    for (let [g, y] of Object.entries(m.overrides))
      if (Object.hasOwn(p, g) && V6(y)) n[g] = y
  }
  return {
    slug: e,
    name: c,
    base: h,
    overrides: n,
    source: s
  }
}
async function S(e, r, s, i, m, h) {
  if (i && m) {
    let n;
    try {
      n = await i.read([m])
    } catch (g) {
      if (h) h.readErrors++;
      t(`[theme] failed to read ${e}: ${d(g)}`, {
        level: "warn"
      });
      return
    }
    if (!n.ok) {
      if (h) h.readErrors++;
      t(`[theme] failed to read ${e}: ${yt(n.error)}`, {
        level: "warn"
      });
      return
    }
    let p = n.value.items[0];
    return p?.found ? E(r, Buffer.from(p.value).toString("utf8"), s) : void 0
  }
  let c;
  try {
    if ((await F(e)).size > D) {
      t(`[theme] ${e} exceeds 256KB; skipping`, {
        level: "warn"
      });
      return
    }
    c = await I(e, "utf8")
  } catch (n) {
    if (!G(n)) t(`[theme] failed to read ${e}`, {
      level: "warn"
    });
    return
  }
  return E(r, c, s)
}
async function icr(e, r, s = "") {
  return await P(e, r, s) ?? []
}
async function P(e, r, s, i) {
  if (i && r === "user" && e === Jot()) {
    let c = {
        namespace: "userConfigDir",
        dir: "themes"
      },
      n = [],
      p = await pa((a) => i.listEntries(c, a === void 0 ? void 0 : {
        cursor: a
      }), (a) => {
        for (let l of a) {
          if (l.kind !== "key") continue;
          let T = l.key.namespace === "userConfigDir" ? l.key.relPath.at(-1) ?? "" : "";
          if (N(T) !== ".json") continue;
          if ((l.size ?? 0) > D) {
            t(`[theme] ${C(e,T)} exceeds 256KB; skipping`, {
              level: "warn"
            });
            continue
          }
          n.push({
            slug: s + w(T, ".json"),
            name: T
          })
        }
      }).catch((a) => (t(`[theme] list themes failed: ${d(a)}; keeping the previously loaded themes (if any)`, {
        level: "warn"
      }), null));
    if (p === null) return null;
    switch (p.status) {
      case "done":
        break;
      case "error":
        return t(`[theme] list themes failed: ${yt(p.error)}; keeping the previously loaded themes (if any)`, {
          level: "warn"
        }), null;
      case "capped":
        return t(`[theme] list themes exceeded ${Em} pages; keeping the previously loaded themes (if any)`, {
          level: "warn"
        }), null
    }
    if (n.length === 0) return [];
    let g = n.map((a) => Be.userConfigDir("themes", [a.name])),
      y;
    try {
      y = await i.read(g)
    } catch (a) {
      t(`[theme] batched theme read failed: ${d(a)}`, {
        level: "warn"
      })
    }
    let v = [];
    if (y?.ok) {
      for (let [a, l] of y.value.items.entries()) {
        if (!l.found) continue;
        let T = E(n[a].slug, Buffer.from(l.value).toString("utf8"), r);
        if (T) v.push(T)
      }
      return v
    }
    let B = {
      readErrors: 0
    };
    for (let [a, l] of n.entries()) {
      let T = await S(C(e, l.name), l.slug, r, i, g[a], B);
      if (T) v.push(T)
    }
    if (v.length === 0 && B.readErrors > 0) return t(`[theme] could not read any of ${n.length} listed theme files; keeping the previously loaded themes (if any)`, {
      level: "warn"
    }), null;
    return v
  }
  let m;
  try {
    m = await A(e)
  } catch (c) {
    if (k(c) === "ENOTDIR") {
      let n = await S(e, s + w(e, ".json"), r);
      return n ? [n] : []
    }
    if (!Wt(c)) t(`[theme] readdir ${e} failed`, {
      level: "warn"
    });
    return []
  }
  let h = [];
  for (let c of m) {
    if (N(c) !== ".json") continue;
    let n = await S(C(e, c), s + w(c, ".json"), r);
    if (n) h.push(n)
  }
  return h
}
var fCt = l0(async (e) => {
    let r = C1(),
      s = xr("themes") ? [] : await P(Jot(), "user", "", e) ?? r.cachedUserThemes();
    return s.sort((i, m) => i.name.localeCompare(m.name)), r.commitUserThemes(s)
  }),
  K = f(() => u({
    name: o(),
    base: o(),
    overrides: fe(o(), o())
  }));
async function k6t(e, r) {
  let s = {
      name: e.name,
      base: e.base,
      overrides: e.overrides
    },
    i = `${e.slug}.json`;
  if (W() && r !== void 0 && Cr(i)) {
    let m = _(s, null, 2) + `
`,
      h = await r.write(Be.userConfigDir("themes", [i]), m, {
        publishDiscipline: "atomic",
        mode: 438 & ~process.umask()
      });
    if (!h.ok) throw t(`[theme] v5 save ${e.slug} failed: ${yt(h.error)}`, {
      level: "warn"
    }), Error("theme save failed");
    return
  }
  await uie(C(Jot(), `${e.slug}.json`), K, {
    defaultValue: () => ({
      name: e.slug,
      base: "dark",
      overrides: {}
    }),
    ensureDir: !0,
    indent: 2,
    trailingNewline: !0
  }).write(s)
}

function tZr(e) {
  return e.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "theme"
}

function acr(e) {
  if (xr("themes")) return () => {};
  let r = Uv.watch(Jot(), {
    persistent: !0,
    ignoreInitial: !0,
    depth: 0,
    awaitWriteFinish: {
      stabilityThreshold: 300,
      pollInterval: 100
    },
    ignorePermissionErrors: !0
  });
  return r.on("add", e), r.on("change", e), r.on("unlink", e), r.on("error", (s) => t(`[theme] watcher error: ${d(s)}`, {
    level: "warn"
  })), () => void r.close()
}
export {
  C1,
  Z7r,
  scr,
  eZr,
  Jot,
  P7,
  BI,
  icr,
  fCt,
  k6t,
  tZr,
  acr
};
