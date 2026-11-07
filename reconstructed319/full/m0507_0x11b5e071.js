// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  H,
  z
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  d,
  k
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  Ve
} from "B:/~BUN/root/chunk-myfamxtp.js";
import {
  t,
  ie
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Ue
} from "B:/~BUN/root/chunk-eev762xg.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  x
} from "B:/~BUN/root/chunk-mwfggkjt.js";
import {
  Ht
} from "B:/~BUN/root/chunk-cbjnh04j.js";
import {
  X
} from "B:/~BUN/root/chunk-g9pw24zp.js";
import {
  readdir as I,
  readFile as S,
  writeFile as D
} from "fs/promises";
import {
  join as g
} from "path";
class P {
  script = void 0;
  owner = void 0;
  store(a, e) {
    this.script = a, this.owner = e
  }
  reset() {
    this.script = void 0, this.owner = void 0
  }
}
var O = new W(() => new P);

function C() {
  return O.of(H().host)
}
async function E(a = z()) {
  let e = g(Ue(), "session-env", a);
  return await ie().mkdir(e), e
}

function N(a, e) {
  return Ve.userConfigDir("session-env", [a, e])
}
async function _(a, e) {
  let o = [],
    n;
  do {
    let c = await a.listEntries({
      namespace: "userConfigDir",
      dir: "session-env",
      relPath: [e]
    }, n === void 0 ? void 0 : {
      cursor: n
    });
    if (!c.ok) return {
      error: c.error
    };
    for (let r of c.value.items) {
      if (r.kind !== "key" || r.key.namespace !== "userConfigDir") continue;
      let s = r.key.relPath.at(-1);
      if (s !== void 0) o.push(s)
    }
    n = c.value.cursor
  } while (n !== void 0);
  return o
}
async function JTi(a, e, o) {
  let n = a.toLowerCase();
  return g(await E(o), `${n}-hook-${e}.sh`)
}
async function QTi(a) {
  if (X() && a !== void 0) {
    let e = z(),
      o = await _(a, e);
    if (!Array.isArray(o)) {
      t(`Failed to clear cwd env files: ${Ht(o.error)}`);
      return
    }
    let n = o.filter((r) => (r.startsWith("filechanged-hook-") || r.startsWith("cwdchanged-hook-")) && p.test(r)),
      c = await Promise.all(n.map((r) => a.write(N(e, r), "", {
        publishDiscipline: "inPlace"
      })));
    for (let r of c)
      if (!r.ok) t(`Failed to clear cwd env files: ${Ht(r.error)}`);
    return
  }
  try {
    let e = await E(),
      o = await I(e);
    await Promise.all(o.filter((n) => (n.startsWith("filechanged-hook-") || n.startsWith("cwdchanged-hook-")) && p.test(n)).map((n) => D(g(e, n), "")))
  } catch (e) {
    if (k(e) !== "ENOENT") t(`Failed to clear cwd env files: ${d(e)}`)
  }
}

function uq() {
  t("Invalidating session environment cache"), C().reset()
}
async function bas(a) {
  let e = z(),
    o = C();
  if (o.script !== void 0 && o.owner === e) return o.script;
  let n = [],
    c = i.CLAUDE_ENV_FILE;
  if (c) try {
    let s = (await S(c, "utf8")).trim();
    if (s) n.push(s), t(`Session environment loaded from CLAUDE_ENV_FILE: ${c} (${s.length} chars)`)
  } catch (s) {
    if (k(s) !== "ENOENT") t(`Failed to read CLAUDE_ENV_FILE: ${d(s)}`)
  }
  if (X() && a !== void 0) {
    let s = await _(a, e);
    if (!Array.isArray(s)) t(`Failed to load session environment from hooks: ${Ht(s.error)}`);
    else {
      let u = s.filter((m) => p.test(m)).sort(F);
      if (u.length > 0) {
        let m = await Promise.all(u.map((f) => a.read([N(e, f)])));
        for (let f = 0; f < u.length; f++) {
          let h = m[f];
          if (!h.ok) {
            t(`Failed to read hook file ${u[f]}: ${Ht(h.error)}`);
            continue
          }
          let v = h.value.items[0];
          if (!v?.found) continue;
          let w = Buffer.from(v.value).toString("utf-8").trim();
          if (w) n.push(w)
        }
        t(`Session environment loaded from ${u.length} hook file(s)`)
      }
    }
    if (n.length === 0) return t("No session environment scripts found"), o.store(null, e), null;
    let l = n.join(`
`);
    return o.store(l, e), t(`Session environment script ready (${l.length} chars total)`), l
  }
  try {
    let s = await E(),
      u = (await I(s)).filter((m) => p.test(m)).sort(F);
    for (let m of u) {
      let f = g(s, m);
      try {
        let h = (await S(f, "utf8")).trim();
        if (h) n.push(h)
      } catch (h) {
        if (k(h) !== "ENOENT") t(`Failed to read hook file ${f}: ${d(h)}`)
      }
    }
    if (u.length > 0) t(`Session environment loaded from ${u.length} hook file(s)`)
  } catch (s) {
    if (k(s) !== "ENOENT") t(`Failed to load session environment from hooks: ${d(s)}`)
  }
  if (n.length === 0) return t("No session environment scripts found"), o.store(null, e), null;
  let r = n.join(`
`);
  return o.store(r, e), t(`Session environment script ready (${r.length} chars total)`), r
}
var A = /^(?:\s*(?:#.*)?|(?:export +|declare -x +)?([A-Za-z_]\w*)=((?:[\w@%+=:,./-]|'[^'\0]*'|"(?:[^"\\$`\0]|\\[^\0])*")*))$/,
  L = /'([^']*)'|"((?:[^"\\]|\\.)*)"/g,
  b = /[/\\]/;
async function ZTi(a) {
  let e = await bas(a),
    o = new Map;
  for (let n of e?.split(`
`) ?? []) {
    let c = A.exec(n.trimEnd());
    if (c === null) return t("Session environment is not all plain assignments"), new Map;
    let [, r, s] = c;
    if (r === void 0 || s === void 0) continue;
    let l = s.replace(L, (u, m, f) => m ?? f?.replace(/\\([$`"\\])/g, "$1") ?? "");
    if (x() === "windows" && b.test(l)) o.delete(r);
    else o.set(r, l)
  }
  return o
}
var y = {
    setup: 0,
    sessionstart: 1,
    cwdchanged: 2,
    filechanged: 3
  },
  p = /^(setup|sessionstart|cwdchanged|filechanged)-hook-(\d+)\.sh$/;

function F(a, e) {
  let o = a.match(p),
    n = e.match(p),
    c = o?.[1] || "",
    r = n?.[1] || "";
  if (c !== r) return (y[c] ?? 99) - (y[r] ?? 99);
  let s = parseInt(o?.[2] || "0", 10),
    l = parseInt(n?.[2] || "0", 10);
  return s - l
}
export {
  JTi,
  QTi,
  uq,
  bas,
  ZTi
};
