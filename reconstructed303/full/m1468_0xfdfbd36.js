// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  b,
  c
} from "B:/~BUN/root/chunk-jthpk6wv.js";
import {
  H,
  k,
  G
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  i
} from "B:/~BUN/root/chunk-1kfn24jp.js";
import {
  _,
  J
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  Sr
} from "B:/~BUN/root/chunk-nggrknsv.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  I
} from "B:/~BUN/root/chunk-je1b1drr.js";
import {
  dL
} from "B:/~BUN/root/chunk-rvc0n7zm.js";
import {
  f
} from "B:/~BUN/root/chunk-frrkt2bs.js";
import {
  bf
} from "B:/~BUN/root/chunk-8ye9n4fk.js";
import {
  mo
} from "B:/~BUN/root/chunk-c44qc88s.js";
import {
  uj
} from "B:/~BUN/root/chunk-dn8rakwm.js";
import {
  o,
  u,
  U,
  C
} from "B:/~BUN/root/chunk-g3snhg6n.js";
import {
  Us
} from "B:/~BUN/root/chunk-t7350kw8.js";
import {
  g$
} from "B:/~BUN/root/chunk-3rzwkd15.js";
import {
  st
} from "B:/~BUN/root/chunk-7aw74be3.js";
import {
  constants as X,
  lstatSync as E,
  mkdirSync as B,
  unlinkSync as Y,
  utimesSync as W,
  writeFileSync as h
} from "fs";
import {
  lstat as v,
  mkdir as K,
  open as V,
  readdir as q,
  rm as j,
  writeFile as Q
} from "fs/promises";
import {
  randomBytes as Z
} from "crypto";
import {
  basename as ee,
  join as w,
  resolve as z
} from "path";
var y = 1,
  te = 8 * bf,
  re = 900000,
  N = "accepted-",
  S = ".jsonl",
  ne = ".seen",
  A = ".accepting-";

function unt(e) {
  return e === null ? null : st(e)
}
var oe = f(() => u({
    v: C(y),
    kind: C("file"),
    path: o(),
    text: o().nullable(),
    sha256: o().regex(/^[0-9a-f]{64}$/).nullable(),
    at: o(),
    by: U(["first_attach", "own_write", "person"])
  })),
  ie = f(() => u({
    v: C(y),
    kind: C("folder"),
    key: o(),
    project: o().nullable(),
    local: o().nullable(),
    legacy: o().nullable(),
    at: o()
  }));

function O(e, a) {
  return I() === "windows" ? R(e) === R(a) : e === a
}

function R(e) {
  return e.replace(/^[a-z](?=:)/, (a) => a.toUpperCase())
}

function P(e) {
  return mo(e.normalize("NFC"))
}

function F(e, a = uj()) {
  return w(a, `${N}settings-${st(P(z(e))).slice(0,32)}${S}`)
}

function x(e, a = uj()) {
  return w(a, `${N}folder-${st(P(e)).slice(0,32)}${S}`)
}

function D(e) {
  return `${e.slice(0,-S.length)}${ne}`
}

function L(e) {
  try {
    return g$(e, te)
  } catch (a) {
    if (!G(a)) throw a
  }
  try {
    E(D(e))
  } catch (a) {
    if (G(a)) return;
    throw a
  }
  throw Error("record aged out")
}

function T(e) {
  try {
    let a = new Date;
    W(e, a, a)
  } catch {}
}

function e_e(e = uj()) {
  let a = (r, n) => {
      B(e, {
        recursive: !0,
        mode: 448
      });
      let t = D(r),
        p = !1;
      try {
        h(t, "", {
          mode: 384,
          flag: "wx"
        }), p = !0
      } catch (g) {
        if (k(g) !== "EEXIST") throw g
      }
      try {
        dL(r, `${_(n)}
`, 384)
      } catch (g) {
        let m;
        try {
          m = E(r).isFile()
        } catch (M) {
          m = !G(M)
        }
        if (p && !m) {
          try {
            Y(t)
          } catch {}
          try {
            if (E(r).isFile()) h(t, "", {
              mode: 384,
              flag: "wx"
            })
          } catch {}
        }
        throw g
      }
      try {
        h(t, "", {
          mode: 384,
          flag: "wx"
        })
      } catch (g) {
        if (k(g) !== "EEXIST") throw g
      }
    },
    s = new Set,
    d = (r, n, t) => {
      let p = Sr(t);
      if (t.length > p.length + 1 && !s.has(n)) {
        s.add(n);
        try {
          i("tengu_remote_tool_serving", {
            event: b("accepted_record_has_tail"),
            record_kind: c(r)
          })
        } catch (g) {
          l(H(g))
        }
      }
      return p
    };
  return {
    file: (r) => {
      try {
        let n = L(F(r, e));
        if (n === void 0) return "none";
        let t = oe().safeParse(J(d("file", r, n)));
        if (!t.success || !O(z(t.data.path), z(r)) || unt(t.data.text) !== t.data.sha256) return "unreadable";
        return {
          text: t.data.text,
          sha256: t.data.sha256
        }
      } catch {
        return "unreadable"
      }
    },
    recordFile: (r, n, t) => {
      if (n !== null && Buffer.byteLength(n) > bf) throw Error("accepted settings text exceeds the settings size limit");
      a(F(r, e), {
        v: y,
        kind: "file",
        path: r,
        text: n,
        sha256: unt(n),
        at: new Date().toISOString(),
        by: t
      }), s.delete(r)
    },
    folder: (r) => {
      try {
        let n = L(x(r, e));
        if (n === void 0) return "none";
        let t = ie().safeParse(J(d("folder", r, n)));
        if (!t.success || !O(t.data.key, r)) return "unreadable";
        let {
          project: p,
          local: g,
          legacy: m
        } = t.data;
        return {
          project: p,
          local: g,
          legacy: m
        }
      } catch {
        return "unreadable"
      }
    },
    recordFolder: (r, n) => {
      a(x(r, e), {
        v: y,
        kind: "folder",
        key: r,
        project: n.project,
        local: n.local,
        legacy: n.legacy,
        at: new Date().toISOString()
      }), s.delete(r)
    },
    noteServed: (r, n) => {
      T(x(r, e));
      for (let t of n) T(F(t, e))
    }
  }
}
async function ae(e) {
  try {
    let a = Date.now() - re;
    for (let s of await q(e)) {
      let d = s.lastIndexOf(A);
      if (d <= 0 || !/^[0-9a-f]{8}\.jsonl$/.test(s.slice(d + A.length))) continue;
      let r = w(e, s);
      if ((await v(r)).mtimeMs < a) await j(r, {
        recursive: !0,
        force: !0
      })
    }
  } catch {}
}
async function W5o(e, a) {
  let s = e.dir ?? uj();
  await K(s, {
    recursive: !0,
    mode: 448
  }), await ae(s);
  let d = w(s, `${ee(e.name)}${A}${Z(4).toString("hex")}${S}`);
  await Q(d, e.text, {
    mode: 384,
    flag: "wx"
  });
  try {
    let r = await v(d);
    if (await a(d)) return "blocked";
    let n;
    try {
      if (I() === "windows" && (await v(d)).isSymbolicLink()) return "tampered";
      n = await V(d, X.O_RDONLY | Us);
      let t = await n.stat();
      return t.isFile() && t.nlink === 1 && t.ino === r.ino && t.dev === r.dev && t.size === r.size && await n.readFile({
        encoding: "utf8"
      }) === e.text ? "allowed" : "tampered"
    } catch (t) {
      if (G(t) || k(t) === "ELOOP") return "tampered";
      throw t
    } finally {
      await n?.close().catch(() => {})
    }
  } finally {
    await j(d, {
      recursive: !0,
      force: !0
    }).catch(() => {})
  }
}
export {
  unt,
  e_e,
  W5o
};
