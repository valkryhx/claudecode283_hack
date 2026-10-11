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
  jn,
  Ae
} from "B:/~BUN/root/chunk-5w2ecytn.js";
import {
  Me
} from "B:/~BUN/root/chunk-ekrhn4q1.js";
import {
  q,
  j
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  H
} from "B:/~BUN/root/chunk-dkxhwhft.js";
import {
  l,
  v,
  B,
  Et
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  Se
} from "B:/~BUN/root/chunk-4p6z9qq1.js";
import {
  f
} from "B:/~BUN/root/chunk-zv3zxqya.js";
import {
  b,
  J,
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  Br
} from "B:/~BUN/root/chunk-3daz140w.js";
import {
  nnn,
  FL,
  g9
} from "B:/~BUN/root/chunk-0av24qsq.js";
import {
  rX
} from "B:/~BUN/root/chunk-zfjnfpf7.js";
import {
  Hs
} from "B:/~BUN/root/chunk-aky7m4ay.js";
import {
  JR
} from "B:/~BUN/root/chunk-dfh5rt4g.js";
import {
  o,
  u,
  fe
} from "B:/~BUN/root/chunk-n8qdr73v.js";
import {
  cp,
  Ks
} from "B:/~BUN/root/chunk-1652axk8.js";
import {
  rt
} from "B:/~BUN/root/chunk-mmkravm0.js";
import {
  readdir as I,
  readFile as F,
  stat as K
} from "fs/promises";
import {
  basename as S,
  extname as D,
  join as w
} from "path";
import {
  isDeepStrictEqual as M
} from "util";
class N {
  customThemeBases = void 0;
  userThemes = void 0;
  pluginThemes = Hs([]);
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
    if (this.customThemeBases = new Map(e.map((r) => [r.slug, r.base])), this.addCustomThemeBases(this.pluginThemes.getState()), this.userThemes === void 0 || !M(this.userThemes, e)) this.userThemes = e;
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
var A = new q(() => new N);

function hL() {
  return A.of(j().host)
}
var E = "custom:",
  P = 262144;

function fdr(e) {
  return hL().customThemeBase(e)
}

function CAn() {
  return hL().cachedUserThemes()
}

function mdr(e) {
  let r = hL();
  return r.cachedUserThemes().find((s) => s.slug === e) ?? r.pluginThemes.getState().find((s) => s.slug === e)
}

function qze() {
  return w(Se(), "themes")
}

function b7(e) {
  return `${E}${e}`
}

function rR(e) {
  return e.startsWith(E) ? e.slice(E.length) : null
}

function x(e, r, s) {
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
    h = nnn(m.base) ? m.base : "dark",
    c = typeof m.name === "string" ? m.name : e,
    n = {};
  if (typeof m.overrides === "object" && m.overrides !== null) {
    let p = FL(h);
    for (let [g, y] of Object.entries(m.overrides))
      if (Object.hasOwn(p, g) && g9(y)) n[g] = y
  }
  return {
    slug: e,
    name: c,
    base: h,
    overrides: n,
    source: s
  }
}
async function k(e, r, s, i, m, h) {
  if (i && m) {
    let n;
    try {
      n = await i.read([m])
    } catch (g) {
      if (h) h.readErrors++;
      t(`[theme] failed to read ${e}: ${l(g)}`, {
        level: "warn"
      });
      return
    }
    if (!n.ok) {
      if (h) h.readErrors++;
      t(`[theme] failed to read ${e}: ${rt(n.error)}`, {
        level: "warn"
      });
      return
    }
    let p = n.value.items[0];
    return p?.found ? x(r, Buffer.from(p.value).toString("utf8"), s) : void 0
  }
  let c;
  try {
    if ((await K(e)).size > P) {
      t(`[theme] ${e} exceeds 256KB; skipping`, {
        level: "warn"
      });
      return
    }
    c = await F(e, "utf8")
  } catch (n) {
    if (!B(n)) t(`[theme] failed to read ${e}`, {
      level: "warn"
    });
    return
  }
  return x(r, c, s)
}
async function RAn(e, r, s = "") {
  return await R(e, r, s) ?? []
}
async function R(e, r, s, i) {
  if (i && r === "user" && e === qze()) {
    let c = {
        namespace: "userConfigDir",
        dir: "themes"
      },
      n = [],
      p = await Ks((a) => i.listEntries(c, a === void 0 ? void 0 : {
        cursor: a
      }), (a) => {
        for (let d of a) {
          if (d.kind !== "key") continue;
          let T = d.key.namespace === "userConfigDir" ? d.key.relPath.at(-1) ?? "" : "";
          if (D(T) !== ".json") continue;
          if ((d.size ?? 0) > P) {
            t(`[theme] ${w(e,T)} exceeds 256KB; skipping`, {
              level: "warn"
            });
            continue
          }
          n.push({
            slug: s + S(T, ".json"),
            name: T
          })
        }
      }).catch((a) => (t(`[theme] list themes failed: ${l(a)}; keeping the previously loaded themes (if any)`, {
        level: "warn"
      }), null));
    if (p === null) return null;
    switch (p.status) {
      case "done":
        break;
      case "error":
        return t(`[theme] list themes failed: ${rt(p.error)}; keeping the previously loaded themes (if any)`, {
          level: "warn"
        }), null;
      case "capped":
        return t(`[theme] list themes exceeded ${cp} pages; keeping the previously loaded themes (if any)`, {
          level: "warn"
        }), null
    }
    if (n.length === 0) return [];
    let g = n.map((a) => Ae.userConfigDir("themes", [a.name])),
      y;
    try {
      y = await i.read(g)
    } catch (a) {
      t(`[theme] batched theme read failed: ${l(a)}`, {
        level: "warn"
      })
    }
    let C = [];
    if (y?.ok) {
      for (let [a, d] of y.value.items.entries()) {
        if (!d.found) continue;
        let T = x(n[a].slug, Buffer.from(d.value).toString("utf8"), r);
        if (T) C.push(T)
      }
      return C
    }
    let z = {
      readErrors: 0
    };
    for (let [a, d] of n.entries()) {
      let T = await k(w(e, d.name), d.slug, r, i, g[a], z);
      if (T) C.push(T)
    }
    if (C.length === 0 && z.readErrors > 0) return t(`[theme] could not read any of ${n.length} listed theme files; keeping the previously loaded themes (if any)`, {
      level: "warn"
    }), null;
    return C
  }
  let m;
  try {
    m = await I(e)
  } catch (c) {
    if (v(c) === "ENOTDIR") {
      let n = await k(e, s + S(e, ".json"), r);
      return n ? [n] : []
    }
    if (!Et(c)) t(`[theme] readdir ${e} failed`, {
      level: "warn"
    });
    return []
  }
  let h = [];
  for (let c of m) {
    if (D(c) !== ".json") continue;
    let n = await k(w(e, c), s + S(c, ".json"), r);
    if (n) h.push(n)
  }
  return h
}
var YZe = JR(async (e) => {
    let r = hL(),
      s = Br("themes") ? [] : await R(qze(), "user", "", e) ?? r.cachedUserThemes();
    return s.sort((i, m) => i.name.localeCompare(m.name)), r.commitUserThemes(s)
  }),
  U = f(() => u({
    name: o(),
    base: o(),
    overrides: fe(o(), o())
  }));
async function rkt(e, r) {
  let s = {
      name: e.name,
      base: e.base,
      overrides: e.overrides
    },
    i = `${e.slug}.json`;
  if (H() && r !== void 0 && jn(i)) {
    let m = b(s, null, 2) + `
`,
      h = await r.write(Ae.userConfigDir("themes", [i]), m, {
        publishDiscipline: "atomic",
        mode: 438 & ~process.umask()
      });
    if (!h.ok) throw t(`[theme] v5 save ${e.slug} failed: ${rt(h.error)}`, {
      level: "warn"
    }), Error("theme save failed");
    return
  }
  await rX(w(qze(), `${e.slug}.json`), U, {
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

function gdr(e) {
  return e.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "theme"
}

function AAn(e) {
  if (Br("themes")) return () => {};
  let r = ub.watch(qze(), {
    persistent: !0,
    ignoreInitial: !0,
    depth: 0,
    awaitWriteFinish: {
      stabilityThreshold: 300,
      pollInterval: 100
    },
    ignorePermissionErrors: !0
  });
  return r.on("add", e), r.on("change", e), r.on("unlink", e), r.on("error", (s) => t(`[theme] watcher error: ${l(s)}`, {
    level: "warn"
  })), () => void r.close()
}
export {
  hL,
  fdr,
  CAn,
  mdr,
  qze,
  b7,
  rR,
  RAn,
  YZe,
  rkt,
  gdr,
  AAn
};
