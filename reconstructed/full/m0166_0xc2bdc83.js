// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  xC,
  we,
  Vv,
  mH
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  _9n,
  G$,
  HC,
  $jt,
  iM,
  gQ,
  FBe,
  $yn,
  W9e,
  v9n,
  k9n,
  E9n,
  uA,
  ngt,
  Bxe,
  AK,
  QS,
  Km
} from "B:/~BUN/root/chunk-54p0h65d.js";
import {
  Se
} from "B:/~BUN/root/chunk-4p6z9qq1.js";
import {
  f
} from "B:/~BUN/root/chunk-zv3zxqya.js";
import {
  d,
  O
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  Zc,
  QT
} from "B:/~BUN/root/chunk-hfe3cbfz.js";
import {
  dt
} from "B:/~BUN/root/chunk-hhgrczac.js";
import {
  o,
  ae,
  C,
  u
} from "B:/~BUN/root/chunk-n8qdr73v.js";
import {
  L
} from "B:/~BUN/root/chunk-z1enakv9.js";
import {
  join as y,
  resolve as h
} from "path";

function Az(e, n, i = Date.now()) {
  return Number.isFinite(e) && Math.abs(i - e) < n
}
var jDt = "cache";

function Sv() {
  return h(we(), Zc())
}

function o6() {
  return y(Sv(), jDt)
}

function Sln() {
  return L([h(Se(), "plugins"), h(Se(), "cowork_plugins"), Sv(), ...QT().map((e) => h(we(), e))])
}

function k() {
  return L([...Vv(), ...mH()].map((e) => h(we(), e)))
}

function zAo(e) {
  let n = k();
  if (n.length === 0) return !1;
  if (Bxe(e, {
      allowLocalWsl: !0
    })) return !0;
  let i = n.join("\x00"),
    t = dt(),
    r = t.inlinePluginRootsComparableMemo;
  if (r?.roots !== i || !Az(r.at, W)) r = {
    roots: i,
    comparable: n.map((s) => QS(s, {
      foldCase: !0
    })),
    at: Date.now()
  }, t.inlinePluginRootsComparableMemo = r;
  let c = QS(e, {
    foldCase: !0,
    knownNotSuspect: !0
  });
  return r.comparable.some((s) => Km(s, c, {
    alreadyComparable: !0
  }))
}
var W = 30000;
import {
  normalize as I,
  parse as _,
  resolve as w,
  sep as T
} from "path";
var RHe = "is network-shaped, carries a dot segment or link component, or could not be classified";

function JT(e, {
  trustedRoots: n = []
} = {}) {
  let i = N(e, n),
    {
      absolute: t,
      root: r,
      tail: c
    } = i;
  if (i.dotSegmentInTail) return {
    absolute: t,
    suspect: !0
  };
  if (r !== void 0) {
    let a = w(we(), r);
    return {
      absolute: t,
      suspect: ngt(a, c)
    }
  }
  let s = i.networkShapedUnvouched || FBe(t);
  return {
    absolute: t,
    suspect: s
  }
}

function N(e, n) {
  if (e.trim() === "") return {
    absolute: e,
    root: void 0,
    tail: e,
    dotSegmentInTail: !1,
    networkShapedUnvouched: !0
  };
  let i = w(we(), e),
    {
      root: t,
      tail: r
    } = E(e, n);
  return {
    absolute: i,
    root: t,
    tail: r,
    dotSegmentInTail: G$(r),
    networkShapedUnvouched: t === void 0 && (uA(e) || uA(i))
  }
}

function A(e) {
  return [Zc(), ...QT(), ...e]
}

function E(e, n) {
  let i = W9e(e),
    t;
  for (let r of A(n))
    for (let c of [r, I(r)]) {
      let s = W9e(c.replace(/[\\/]+$/, ""));
      if (s === "" || s === ".") continue;
      let a;
      if (i === s) a = "";
      else if (i.startsWith(s + T) || i.startsWith(s + "/")) a = e.slice(e.length - (i.length - s.length));
      if (a !== void 0 && (t === void 0 || a.length < t.tail.length)) t = {
        root: r,
        tail: a
      }
    }
  return t ?? {
    root: void 0,
    tail: e
  }
}

function s6(e) {
  switch (O()) {
    case "windows":
      return HC(W9e(e));
    case "macos":
      return HC(e);
    default:
      return e
  }
}

function WDt(e) {
  if (e.trim() === "") return;
  return s6(QS(w(we(), e), {
    foldCase: !0
  }))
}

function b(e) {
  if (O() !== "windows") return;
  let n = _(e).root,
    i = (r) => $jt(iM(r)),
    t = i(n);
  if (t === void 0) {
    let r = gQ(n);
    if (r === null) return "undeterminable";
    t = i(r)
  }
  return t === void 0 ? void 0 : {
    walkRoot: n,
    ...t
  }
}

function t2n(e) {
  let n = b(e);
  if (n === void 0 || n === "undeterminable") return n;
  return {
    walkRoot: n.walkRoot,
    distroDir: n.rest.replace(/[\\/]+$/, "").replace(/[\\/]+/g, "/")
  }
}

function n2n(e, n) {
  return E9n(e, {
    exactDots: !0
  }) ?? k9n(e, {
    exactDots: !0
  }) ?? (n === void 0 ? void 0 : v9n(e, n.walkRoot, n.distroDir))
}
import {
  readFileSync as M,
  statSync as U
} from "fs";
import {
  isAbsolute as S,
  join as V,
  resolve as R
} from "path";
var z = 4194304,
  j = f(() => u({
    sourceCommand: o().optional().catch(void 0),
    sourceProducerPath: o().optional().catch(void 0),
    previousProducerPaths: C(ae()).transform((e) => e.filter((n) => typeof n === "string")).optional().catch(void 0)
  }).passthrough());

function v0r(e) {
  let n = dt(),
    i = n.commandProducerDirsDenied,
    t = x();
  n.commandProducerDirsWslProviderUndeterminable = t === "undeterminable";
  let r = t === "undeterminable" ? void 0 : t;
  n.commandProducerDirsScannedAt = Date.now(), n.commandProducerDirsComparable = null;
  for (let c of new Set(e)) {
    let s;
    try {
      let p = V(c, "installed_plugins.json"),
        g = U(p);
      if (!g.isFile() || g.size > z) continue;
      let m = M(p, "utf8");
      s = JSON.parse(m)
    } catch {
      continue
    }
    let a = typeof s === "object" && s !== null && "plugins" in s ? s.plugins : void 0;
    if (typeof a !== "object" || a === null) continue;
    for (let p of Object.values(a)) {
      if (!Array.isArray(p)) continue;
      for (let g of p) {
        let m = j().safeParse(g);
        if (!m.success) continue;
        for (let P of [m.data.sourceProducerPath, ...m.data.previousProducerPaths ?? []]) {
          let l = P === void 0 ? void 0 : AK(P),
            D = l === void 0 ? void 0 : v(l, r);
          if (D !== void 0) i.add(D)
        }
      }
    }
  }
  return [...i]
}

function AHe(e, {
  emit: n = !0
} = {}) {
  let i = x(),
    t = v(AK(e), i === "undeterminable" ? void 0 : i);
  if (t === void 0) return;
  let r = dt().commandProducerDirsDenied;
  if (r.has(t)) return;
  if (r.add(t), dt().commandProducerDirsComparable = null, n) sCe()
}

function sCe() {
  try {
    dt().commandProducerDirsChanged.emit()
  } catch (e) {
    d(e)
  }
}
var GAo = xC(() => dt().commandProducerDirsChanged);

function VAo(e, n, i, {
  maxAgeMs: t = 0
} = {}) {
  let r = dt();
  if (!(t > 0 && Date.now() - r.commandProducerDirsScannedAt < t) || r.commandProducerDirsComparable === null) {
    let a = {
        foldCase: !0
      },
      p = QS(we(), a),
      g = QS(i, a),
      m = n.map((l) => QS(l, a)).filter((l) => !Km(l, p, {
        alreadyComparable: !0
      })),
      P = v0r(n).map((l) => QS(l, a));
    r.commandProducerDirsComparable = [...m, ...P], r.commandProducerDirsNeedCanonicalCandidate = P.length > 0 || m.some((l) => !Km(g, l, {
      alreadyComparable: !0
    }))
  }
  if (r.commandProducerDirsWslProviderUndeterminable && ($jt(AK(e)) !== void 0 || $jt(QS(e, {
      foldCase: !0
    })) !== void 0)) return !0;
  if (r.commandProducerDirsComparable.length === 0) return !1;
  if (r.commandProducerDirsNeedCanonicalCandidate && Bxe(S(e) ? e : R(e), {
      allowLocalWsl: !0
    })) return !0;
  let s = r.commandProducerDirsNeedCanonicalCandidate ? QS(e, {
    foldCase: !0,
    knownNotSuspect: !0
  }) : R(e).normalize("NFC").toLowerCase();
  return r.commandProducerDirsComparable.some((a) => Km(a, s, {
    alreadyComparable: !0
  }))
}

function x() {
  let e = dt(),
    n = Sv(),
    i = e.wslProviderOfPluginsRootMemo;
  if (i?.root === n && Az(i.at, F)) return i.value;
  let t = b(n);
  if (t === "undeterminable") return "undeterminable";
  let r = t === void 0 ? void 0 : {
    prefix: t.prefix
  };
  return e.wslProviderOfPluginsRootMemo = {
    root: n,
    value: r,
    at: Date.now()
  }, r
}
var F = 30000;

function v(e, n) {
  let i = k9n(e, {
    exactDots: !0
  }) ?? (n === void 0 ? void 0 : v9n(e, n.prefix));
  if (i !== void 0) return i;
  if (S(e)) return !_9n(e) && (!uA(e) || $yn(e)) ? e : void 0;
  return E9n(e, {
    exactDots: !0
  })
}
export {
  Az,
  jDt,
  Sv,
  o6,
  Sln,
  zAo,
  RHe,
  JT,
  s6,
  WDt,
  t2n,
  n2n,
  v0r,
  AHe,
  sCe,
  GAo,
  VAo
};
