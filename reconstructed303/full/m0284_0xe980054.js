// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  _I,
  L,
  ke,
  cS,
  cT,
  de
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  Kjr,
  zh,
  sWt,
  Qa,
  bhn,
  fQn,
  mQn,
  gQn,
  Sv,
  tCe,
  UQ,
  uS,
  Ym,
  hP
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  Pe
} from "B:/~BUN/root/chunk-fbyz9h0p.js";
import {
  xo
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  vl
} from "B:/~BUN/root/chunk-8ye9n4fk.js";
import {
  wO
} from "B:/~BUN/root/chunk-qk52d0gf.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  f
} from "B:/~BUN/root/chunk-frrkt2bs.js";
import {
  ud,
  yD,
  kRo
} from "B:/~BUN/root/chunk-472kxa0t.js";
import {
  Ne
} from "B:/~BUN/root/chunk-nvdqbkrt.js";
import {
  _ae
} from "B:/~BUN/root/chunk-bhfm57j1.js";
import {
  o,
  oe,
  T,
  u
} from "B:/~BUN/root/chunk-g3snhg6n.js";
import {
  join as O,
  resolve as p,
  sep as _
} from "path";

function m3(e, r, n = Date.now()) {
  return Number.isFinite(e) && Math.abs(n - e) < r
}
import {
  normalize as v,
  sep as b
} from "path";
var x = 1024;

function PS(e) {
  let r = wO().foldedSegmentsBySpelling,
    n = r.get(e);
  if (n === void 0) {
    if (n = v(e).split(b).map(vl).join(b), r.size >= x) r.clear();
    r.set(e, n)
  }
  return n
}
var Uon = "cache";

function HC() {
  return p(ke(), ud())
}

function zee() {
  return O(HC(), Uon)
}

function A2n() {
  return L([p(Pe(), "plugins"), p(Pe(), "cowork_plugins"), HC(), ...yD().map((e) => p(ke(), e))])
}

function iRo() {
  return L([...cS(), ...cT()].map((e) => p(ke(), e)))
}

function vDs(e) {
  let r = iRo();
  if (r.length === 0) return !1;
  if (tCe(e, h)) return !0;
  let n = r.join("\x00"),
    i = Ne(),
    t = i.inlinePluginRootsComparableMemo;
  if (t?.roots !== n || !m3(t.at, N)) t = {
    roots: n,
    comparable: r.map((s) => uS(s, {
      foldCase: !0,
      knownNotSuspect: !tCe(s, h)
    })),
    at: Date.now()
  }, i.inlinePluginRootsComparableMemo = t;
  let g = uS(e, {
    foldCase: !0,
    knownNotSuspect: !0
  });
  return t.comparable.some((s) => Ym(s, g, {
    alreadyComparable: !0
  }))
}
var N = 30000,
  h = {
    allowLocalWsl: !0,
    eisdirIsFolder: !0
  };

function kDs(e) {
  if (de()) return !0;
  let r = xo(p(_ae())),
    n = PS(p(e));
  if (r.map(PS).some((s) => n === s || n.startsWith(s + _))) return !0;
  let i = hP(e) || Sv(e),
    t = !zh(e) && (!i || Qa(e));
  if (t && tCe(e, h)) return !0;
  let g = uS(e, {
    foldCase: !0,
    knownNotSuspect: t
  });
  return r.some((s) => Ym(uS(s, {
    foldCase: !0
  }), g, {
    alreadyComparable: !0
  }))
}
import {
  readFileSync as W,
  statSync as I
} from "fs";
import {
  isAbsolute as w,
  join as M,
  resolve as S
} from "path";
var k = 4194304,
  E = f(() => u({
    sourceCommand: o().optional().catch(void 0),
    sourceProducerPath: o().optional().catch(void 0),
    previousProducerPaths: T(oe()).transform((e) => e.filter((r) => typeof r === "string")).optional().catch(void 0)
  }).passthrough());

function aRo(e) {
  let r = Ne(),
    n = r.commandProducerDirsDenied,
    i = R();
  r.commandProducerDirsWslProviderUndeterminable = i === "undeterminable";
  let t = i === "undeterminable" ? void 0 : i;
  r.commandProducerDirsScannedAt = Date.now(), r.commandProducerDirsComparable = null;
  for (let g of new Set(e)) {
    let s;
    try {
      let m = M(g, "installed_plugins.json"),
        P = I(m);
      if (!P.isFile() || P.size > k) continue;
      let c = W(m, "utf8");
      s = JSON.parse(c)
    } catch {
      continue
    }
    let a = typeof s === "object" && s !== null && "plugins" in s ? s.plugins : void 0;
    if (typeof a !== "object" || a === null) continue;
    for (let m of Object.values(a)) {
      if (!Array.isArray(m)) continue;
      for (let P of m) {
        let c = E().safeParse(P);
        if (!c.success) continue;
        for (let C of [c.data.sourceProducerPath, ...c.data.previousProducerPaths ?? []]) {
          let d = C === void 0 ? void 0 : UQ(C),
            D = d === void 0 ? void 0 : y(d, t);
          if (D !== void 0) n.add(D)
        }
      }
    }
  }
  return [...n]
}

function k9e(e, {
  emit: r = !0
} = {}) {
  let n = R(),
    i = y(UQ(e), n === "undeterminable" ? void 0 : n);
  if (i === void 0) return;
  let t = Ne().commandProducerDirsDenied;
  if (t.has(i)) return;
  if (t.add(i), Ne().commandProducerDirsComparable = null, r) S1e()
}

function S1e() {
  try {
    Ne().commandProducerDirsChanged.emit()
  } catch (e) {
    l(e)
  }
}
var lRo = _I(() => Ne().commandProducerDirsChanged);

function EDs(e, r, n, {
  maxAgeMs: i = 0
} = {}) {
  let t = Ne();
  if (!(i > 0 && Date.now() - t.commandProducerDirsScannedAt < i) || t.commandProducerDirsComparable === null) {
    let a = {
        foldCase: !0
      },
      m = uS(ke(), a),
      P = uS(n, a),
      c = r.map((d) => uS(d, a)).filter((d) => !Ym(d, m, {
        alreadyComparable: !0
      })),
      C = aRo(r).map((d) => uS(d, a));
    t.commandProducerDirsComparable = [...c, ...C], t.commandProducerDirsNeedCanonicalCandidate = C.length > 0 || c.some((d) => !Ym(P, d, {
      alreadyComparable: !0
    }))
  }
  if (t.commandProducerDirsWslProviderUndeterminable && (sWt(UQ(e)) !== void 0 || sWt(uS(e, {
      foldCase: !0
    })) !== void 0)) return !0;
  if (t.commandProducerDirsComparable.length === 0) return !1;
  if (t.commandProducerDirsNeedCanonicalCandidate && tCe(w(e) ? e : S(e), {
      allowLocalWsl: !0
    })) return !0;
  let s = t.commandProducerDirsNeedCanonicalCandidate ? uS(e, {
    foldCase: !0,
    knownNotSuspect: !0
  }) : S(e).normalize("NFC").toLowerCase();
  return t.commandProducerDirsComparable.some((a) => Ym(a, s, {
    alreadyComparable: !0
  }))
}

function R() {
  let e = Ne(),
    r = HC(),
    n = e.wslProviderOfPluginsRootMemo;
  if (n?.root === r && m3(n.at, A)) return n.value;
  let i = kRo(r);
  if (i === "undeterminable") return "undeterminable";
  let t = i === void 0 ? void 0 : {
    prefix: i.prefix
  };
  return e.wslProviderOfPluginsRootMemo = {
    root: r,
    value: t,
    at: Date.now()
  }, t
}
var A = 30000;

function y(e, r) {
  let n = mQn(e, {
    exactDots: !0
  }) ?? (r === void 0 ? void 0 : fQn(e, r.prefix));
  if (n !== void 0) return n;
  if (w(e)) return !Kjr(e) && (!Sv(e) || bhn(e)) ? e : void 0;
  return gQn(e, {
    exactDots: !0
  })
}
export {
  m3,
  PS,
  Uon,
  HC,
  zee,
  A2n,
  iRo,
  vDs,
  kDs,
  aRo,
  k9e,
  S1e,
  lRo,
  EDs
};
