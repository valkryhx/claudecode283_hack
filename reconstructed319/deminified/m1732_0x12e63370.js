// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { b, f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { F, k, K } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { _, ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Wn } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { ZU } from "B:/~BUN/root/chunk-nsneqfcc.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { Xf } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { To } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { gq } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { o, u, B, T } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { PH } from "B:/~BUN/root/chunk-x3gsqe09.js";
import { Go } from "B:/~BUN/root/chunk-cf143bsb.js";
import { nt } from "B:/~BUN/root/chunk-tq5dzbq9.js";
import { constants as H, lstatSync as z, mkdirSync as Y, unlinkSync as U, utimesSync as W, writeFileSync as h } from "fs";
import { lstat as A, mkdir as G, open as J, readdir as V, rm as N, writeFile as q } from "fs/promises";
import { randomBytes as Q } from "crypto";
import { basename as Z, join as w, resolve as O } from "path";
var v_2 = 1,
  te = 8 * Xf,
  re = 900000,
  P = "accepted-",
  S = ".jsonl",
  ne = ".seen",
  R = ".accepting-";
function CEt(e) {
  return e === null ? null : nt(e);
}
var oe = p(() => u({
    v: T(v_2),
    kind: T("file"),
    path: o(),
    text: o().nullable(),
    sha256: o().regex(/^[0-9a-f]{64}$/).nullable(),
    at: o(),
    by: B(["first_attach", "own_write", "person"])
  })),
  ie = p(() => u({
    v: T(v_2),
    kind: T("folder"),
    key: o(),
    project: o().nullable(),
    local: o().nullable(),
    legacy: o().nullable(),
    at: o()
  }));
function C(e, i) {
  return x() === "windows" ? I(e) === I(i) : e === i;
}
function I(e) {
  return e.replace(/^[a-z](?=:)/, i => i.toUpperCase());
}
function D(e) {
  return To(e.normalize("NFC"));
}
function E(e, i = gq()) {
  return w(i, `${P}settings-${nt(D(O(e))).slice(0, 32)}${S}`);
}
function v(e, i = gq()) {
  return w(i, `${P}folder-${nt(D(e)).slice(0, 32)}${S}`);
}
function M(e) {
  return `${e.slice(0, -S.length)}${ne}`;
}
function L(e) {
  try {
    return PH(e, te);
  } catch (error) {
    if (!K(error)) throw error;
  }
  try {
    z(M(e));
  } catch (error) {
    if (K(error)) return;
    throw error;
  }
  throw Error("record aged out");
}
function j(e) {
  try {
    let date = new Date();
    W(e, date, date);
  } catch {}
}
function ZPe(e = gq()) {
  let i = (r, n) => {
      Y(e, {
        recursive: !0,
        mode: 448
      });
      let t = M(r),
        g = !1;
      try {
        h(t, "", {
          mode: 384,
          flag: "wx"
        }), g = !0;
      } catch (error) {
        if (k(error) !== "EEXIST") throw error;
      }
      try {
        ZU(r, `${_(n)}
`, 384);
      } catch (error) {
        let m;
        try {
          m = z(r).isFile();
        } catch (error) {
          m = !K(error);
        }
        if (g && !m) {
          try {
            U(t);
          } catch {}
          try {
            if (z(r).isFile()) h(t, "", {
              mode: 384,
              flag: "wx"
            });
          } catch {}
        }
        throw error;
      }
      try {
        h(t, "", {
          mode: 384,
          flag: "wx"
        });
      } catch (error) {
        if (k(error) !== "EEXIST") throw error;
      }
    },
    c = new Set(),
    s = (r, n, t) => {
      let g = Wn(t);
      if (t.length > g.length + 1 && !c.has(n)) {
        c.add(n);
        try {
          l("tengu_remote_tool_serving", {
            event: b("accepted_record_has_tail"),
            record_kind: f(r)
          });
        } catch (error) {
          a(F(error));
        }
      }
      return g;
    };
  return {
    file: r => {
      try {
        let n = L(E(r, e));
        if (n === void 0) return "none";
        let t = oe().safeParse(ee(s("file", r, n)));
        if (!t.success || !C(O(t.data.path), O(r)) || CEt(t.data.text) !== t.data.sha256) return "unreadable";
        return {
          text: t.data.text,
          sha256: t.data.sha256
        };
      } catch {
        return "unreadable";
      }
    },
    recordFile: (path, text, by) => {
      if (text !== null && Buffer.byteLength(text) > Xf) throw Error("accepted settings text exceeds the settings size limit");
      i(E(path, e), {
        v: v_2,
        kind: "file",
        path: path,
        text: text,
        sha256: CEt(text),
        at: new Date().toISOString(),
        by: by
      }), c.delete(path);
    },
    folder: r => {
      try {
        let n = L(v(r, e));
        if (n === void 0) return "none";
        let t = ie().safeParse(ee(s("folder", r, n)));
        if (!t.success || !C(t.data.key, r)) return "unreadable";
        let {
          project: project,
          local: local,
          legacy: legacy
        } = t.data;
        return {
          project: project,
          local: local,
          legacy: legacy
        };
      } catch {
        return "unreadable";
      }
    },
    recordFolder: (key, n) => {
      i(v(key, e), {
        v: v_2,
        kind: "folder",
        key: key,
        project: n.project,
        local: n.local,
        legacy: n.legacy,
        at: new Date().toISOString()
      }), c.delete(key);
    },
    noteServed: (r, n) => {
      j(v(r, e));
      for (let t of n) j(E(t, e));
    }
  };
}
async function ae(e) {
  try {
    let i = Date.now() - re;
    for (let c of await V(e)) {
      let s = c.lastIndexOf(R);
      if (s <= 0 || !/^[0-9a-f]{8}\.jsonl$/.test(c.slice(s + R.length))) continue;
      let r = w(e, c);
      if ((await A(r)).mtimeMs < i) await N(r, {
        recursive: !0,
        force: !0
      });
    }
  } catch {}
}
async function _Xs(e, i) {
  let c = e.dir ?? gq();
  await G(c, {
    recursive: !0,
    mode: 448
  }), await ae(c);
  let s = w(c, `${Z(e.name)}${R}${Q(4).toString("hex")}${S}`);
  await q(s, e.text, {
    mode: 384,
    flag: "wx"
  });
  try {
    let r = await A(s);
    if (await i(s)) return "blocked";
    let n;
    try {
      if (x() === "windows" && (await A(s)).isSymbolicLink()) return "tampered";
      n = await J(s, H.O_RDONLY | Go);
      let t = await n.stat();
      return t.isFile() && t.nlink === 1 && t.ino === r.ino && t.dev === r.dev && t.size === r.size && (await n.readFile({
        encoding: "utf8"
      })) === e.text ? "allowed" : "tampered";
    } catch (error) {
      if (K(error) || k(error) === "ELOOP") return "tampered";
      throw error;
    } finally {
      await n?.close().catch(() => {});
    }
  } finally {
    await N(s, {
      recursive: !0,
      force: !0
    }).catch(() => {});
  }
}
export { CEt, ZPe, _Xs };