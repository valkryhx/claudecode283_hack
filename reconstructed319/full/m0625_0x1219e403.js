// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  nC
} from "B:/~BUN/root/chunk-eswth6m1.js";
import {
  Hr,
  Ve
} from "B:/~BUN/root/chunk-myfamxtp.js";
import {
  De
} from "B:/~BUN/root/chunk-vz9zea4j.js";
import {
  H
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  d,
  k,
  K,
  qt
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  Ue
} from "B:/~BUN/root/chunk-eev762xg.js";
import {
  t,
  _,
  ee
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  ur
} from "B:/~BUN/root/chunk-y5gyn2hc.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  Gyr,
  Sq,
  vZ
} from "B:/~BUN/root/chunk-apgsnbqk.js";
import {
  Uye
} from "B:/~BUN/root/chunk-v04fapnf.js";
import {
  Hs
} from "B:/~BUN/root/chunk-3xtmwvra.js";
import {
  o,
  u,
  me
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
import {
  ny,
  qa
} from "B:/~BUN/root/chunk-qzcyr88d.js";
import {
  vN
} from "B:/~BUN/root/chunk-tx4kppkg.js";
import {
  Ht
} from "B:/~BUN/root/chunk-cbjnh04j.js";
import {
  X
} from "B:/~BUN/root/chunk-g9pw24zp.js";
import {
  readdir as M,
  readFile as A,
  stat as I
} from "fs/promises";
import {
  basename as S,
  extname as z,
  join as C
} from "path";
import {
  isDeepStrictEqual as D
} from "util";
class x {
  customThemeBases = void 0;
  userThemes = void 0;
  pluginThemes = Hs([]);
  systemTheme = void 0;
  systemThemeChanged = De();
  onSystemThemeChange = this.systemThemeChanged.subscribe;
  customThemeBase(e) {
    return this.customThemeBases?.get(e)
  }
  addCustomThemeBases(e) {
    this.customThemeBases ??= new Map;
    for (let r of e) this.customThemeBases.set(r.slug, r.base)
  }
  commitUserThemes(e) {
    if (this.customThemeBases = new Map(e.map((r) => [r.slug, r.base])), this.addCustomThemeBases(this.pluginThemes.getState()), this.userThemes === void 0 || !D(this.userThemes, e)) this.userThemes = e;
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
var R = new W(() => new x);

function DK() {
  return R.of(H().host)
}
var j = "custom:",
  N = 262144;

function GYo(e) {
  return DK().customThemeBase(e)
}

function E3r() {
  return DK().cachedUserThemes()
}

function VYo(e) {
  let r = DK();
  return r.cachedUserThemes().find((s) => s.slug === e) ?? r.pluginThemes.getState().find((s) => s.slug === e)
}

function KCt() {
  return C(Ue(), "themes")
}

function Nle(e) {
  return `${j}${e}`
}

function oF(e) {
  return e.startsWith(j) ? e.slice(j.length) : null
}

function E(e, r, s) {
  let n;
  try {
    n = ee(r)
  } catch {
    t(`[theme] ${e}.json: invalid JSON`, {
      level: "warn"
    });
    return
  }
  if (typeof n !== "object" || n === null || Array.isArray(n)) return;
  let m = n,
    c = Gyr(m.base) ? m.base : "dark",
    g = typeof m.name === "string" ? m.name : e,
    i = {};
  if (typeof m.overrides === "object" && m.overrides !== null) {
    let a = Sq(c);
    for (let [T, y] of Object.entries(m.overrides))
      if (Object.hasOwn(a, T) && vZ(y)) i[T] = y
  }
  return {
    slug: e,
    name: g,
    base: c,
    overrides: i,
    source: s
  }
}
async function b(e, r, s, n, m, c) {
  if (n && m) {
    let i;
    try {
      i = await n.read([m])
    } catch (T) {
      if (c) c.readErrors++;
      t(`[theme] failed to read ${e}: ${d(T)}`, {
        level: "warn"
      });
      return
    }
    if (!i.ok) {
      if (c) c.readErrors++;
      t(`[theme] failed to read ${e}: ${Ht(i.error)}`, {
        level: "warn"
      });
      return
    }
    let a = i.value.items[0];
    return a?.found ? E(r, Buffer.from(a.value).toString("utf8"), s) : void 0
  }
  let g;
  try {
    if ((await I(e)).size > N) {
      t(`[theme] ${e} exceeds 256KB; skipping`, {
        level: "warn"
      });
      return
    }
    g = await A(e, "utf8")
  } catch (i) {
    if (!K(i)) t(`[theme] failed to read ${e}`, {
      level: "warn"
    });
    return
  }
  return E(r, g, s)
}
async function T3r(e, r, s = "", n) {
  return await P(e, r, s, void 0, n) ?? []
}
async function P(e, r, s, n, m) {
  if (n && r === "user" && e === KCt()) {
    let i = {
        namespace: "userConfigDir",
        dir: "themes"
      },
      a = [],
      T = await qa((h) => n.listEntries(i, h === void 0 ? void 0 : {
        cursor: h
      }), (h) => {
        for (let f of h) {
          if (f.kind !== "key") continue;
          let l = f.key.namespace === "userConfigDir" ? f.key.relPath.at(-1) ?? "" : "";
          if (z(l) !== ".json") continue;
          if ((f.size ?? 0) > N) {
            t(`[theme] ${C(e,l)} exceeds 256KB; skipping`, {
              level: "warn"
            });
            continue
          }
          a.push({
            slug: s + S(l, ".json"),
            name: l
          })
        }
      }).catch((h) => (t(`[theme] list themes failed: ${d(h)}; keeping the previously loaded themes (if any)`, {
        level: "warn"
      }), null));
    if (T === null) return null;
    switch (T.status) {
      case "done":
        break;
      case "error":
        return t(`[theme] list themes failed: ${Ht(T.error)}; keeping the previously loaded themes (if any)`, {
          level: "warn"
        }), null;
      case "capped":
        return t(`[theme] list themes exceeded ${ny} pages; keeping the previously loaded themes (if any)`, {
          level: "warn"
        }), null
    }
    if (a.length === 0) return [];
    let y = a.map((h) => Ve.userConfigDir("themes", [h.name])),
      w;
    try {
      w = await n.read(y)
    } catch (h) {
      t(`[theme] batched theme read failed: ${d(h)}`, {
        level: "warn"
      })
    }
    let v = [];
    if (w?.ok) {
      for (let [h, f] of w.value.items.entries()) {
        if (!f.found) continue;
        let l = E(a[h].slug, Buffer.from(f.value).toString("utf8"), r);
        if (l) v.push(l)
      }
      return v
    }
    let B = {
      readErrors: 0
    };
    for (let [h, f] of a.entries()) {
      let l = await b(C(e, f.name), f.slug, r, n, y[h], B);
      if (l) v.push(l)
    }
    if (v.length === 0 && B.readErrors > 0) return t(`[theme] could not read any of ${a.length} listed theme files; keeping the previously loaded themes (if any)`, {
      level: "warn"
    }), null;
    return v
  }
  let c;
  try {
    c = await M(e)
  } catch (i) {
    if (k(i) === "ENOTDIR") {
      let a = await b(e, s + S(e, ".json"), r);
      return a ? [a] : []
    }
    if (!qt(i)) t(`[theme] readdir ${e} failed`, {
      level: "warn"
    });
    return []
  }
  let g = [];
  for (let i of c) {
    if (z(i) !== ".json") continue;
    if (m !== void 0 && await m(e, i)) continue;
    let a = await b(C(e, i), s + S(i, ".json"), r);
    if (a) g.push(a)
  }
  return g
}
var Bqt = vN(async (e) => {
    let r = DK(),
      s = ur("themes") ? [] : await P(KCt(), "user", "", e) ?? r.cachedUserThemes();
    return s.sort((n, m) => n.name.localeCompare(m.name)), r.commitUserThemes(s)
  }),
  U = p(() => u({
    name: o(),
    base: o(),
    overrides: me(o(), o())
  }));
async function ZSn(e, r) {
  let s = {
      name: e.name,
      base: e.base,
      overrides: e.overrides
    },
    n = `${e.slug}.json`;
  if (X() && r !== void 0 && Hr(n)) {
    let m = _(s, null, 2) + `
`,
      c = await r.write(Ve.userConfigDir("themes", [n]), m, {
        publishDiscipline: "atomic",
        mode: 438 & ~process.umask()
      });
    if (!c.ok) throw t(`[theme] v5 save ${e.slug} failed: ${Ht(c.error)}`, {
      level: "warn"
    }), Error("theme save failed");
    return
  }
  await Uye(C(KCt(), `${e.slug}.json`), U, {
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

function KYo(e) {
  return e.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "theme"
}

function C3r(e) {
  if (ur("themes")) return () => {};
  let r = nC.watch(KCt(), {
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
  DK,
  GYo,
  E3r,
  VYo,
  KCt,
  Nle,
  oF,
  T3r,
  Bqt,
  ZSn,
  KYo,
  C3r
};
