// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { xC, we, Vv, mH } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { _9n, G$, HC, $jt, iM, gQ, FBe, $yn, W9e, v9n, k9n, E9n, uA, ngt, Bxe, AK, QS, Km } from "B:/~BUN/root/chunk-54p0h65d.js";
import { Se } from "B:/~BUN/root/chunk-4p6z9qq1.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { d, O } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { Zc, QT } from "B:/~BUN/root/chunk-hfe3cbfz.js";
import { dt } from "B:/~BUN/root/chunk-hhgrczac.js";
import { o, ae, C, u } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { L } from "B:/~BUN/root/chunk-z1enakv9.js";
import { join as y, resolve as h } from "path";
function Az(e, n, i = Date.now()) {
  return Number.isFinite(e) && Math.abs(i - e) < n;
}
var jDt = "cache";
function Sv() {
  return h(we(), Zc());
}
function o6() {
  return y(Sv(), jDt);
}
function Sln() {
  return L([h(Se(), "plugins"), h(Se(), "cowork_plugins"), Sv(), ...QT().map(item => h(we(), item))]);
}
function k() {
  return L([...Vv(), ...mH()].map(item => h(we(), item)));
}
function zAo(e) {
  let n = k();
  if (n.length === 0) return !1;
  if (Bxe(e, {
    allowLocalWsl: !0
  })) return !0;
  let roots = n.join("\x00"),
    t = dt(),
    inlinePluginRootsComparableMemo = t.inlinePluginRootsComparableMemo;
  if (inlinePluginRootsComparableMemo?.roots !== roots || !Az(inlinePluginRootsComparableMemo.at, W)) inlinePluginRootsComparableMemo = {
    roots: roots,
    comparable: n.map(item => QS(item, {
      foldCase: !0
    })),
    at: Date.now()
  }, t.inlinePluginRootsComparableMemo = inlinePluginRootsComparableMemo;
  let c = QS(e, {
    foldCase: !0,
    knownNotSuspect: !0
  });
  return inlinePluginRootsComparableMemo.comparable.some(item => Km(item, c, {
    alreadyComparable: !0
  }));
}
var W = 30000;
import { normalize as I, parse as _, resolve as w, sep as T } from "path";
var RHe = "is network-shaped, carries a dot segment or link component, or could not be classified";
function JT(e, {
  trustedRoots = []
} = {}) {
  let i = N(e, trustedRoots),
    {
      absolute: absolute,
      root: root,
      tail: tail
    } = i;
  if (i.dotSegmentInTail) return {
    absolute: absolute,
    suspect: !0
  };
  if (root !== void 0) {
    let a = w(we(), root);
    return {
      absolute: absolute,
      suspect: ngt(a, tail)
    };
  }
  let suspect = i.networkShapedUnvouched || FBe(absolute);
  return {
    absolute: absolute,
    suspect: suspect
  };
}
function N(e, n) {
  if (e.trim() === "") return {
    absolute: e,
    root: void 0,
    tail: e,
    dotSegmentInTail: !1,
    networkShapedUnvouched: !0
  };
  let absolute_2 = w(we(), e),
    {
      root: root_2,
      tail: tail_2
    } = E(e, n);
  return {
    absolute: absolute_2,
    root: root_2,
    tail: tail_2,
    dotSegmentInTail: G$(tail_2),
    networkShapedUnvouched: root_2 === void 0 && (uA(e) || uA(absolute_2))
  };
}
function A(e) {
  return [Zc(), ...QT(), ...e];
}
function E(tail_4, n) {
  let i = W9e(tail_4),
    t;
  for (let root_3 of A(n)) for (let c of [root_3, I(root_3)]) {
    let s = W9e(c.replace(/[\\/]+$/, ""));
    if (s === "" || s === ".") continue;
    let tail_3;
    if (i === s) tail_3 = "";else if (i.startsWith(s + T) || i.startsWith(s + "/")) tail_3 = tail_4.slice(tail_4.length - (i.length - s.length));
    if (tail_3 !== void 0 && (t === void 0 || tail_3.length < t.tail.length)) t = {
      root: root_3,
      tail: tail_3
    };
  }
  return t ?? {
    root: void 0,
    tail: tail_4
  };
}
function s6(e) {
  switch (O()) {
    case "windows":
      return HC(W9e(e));
    case "macos":
      return HC(e);
    default:
      return e;
  }
}
function WDt(e) {
  if (e.trim() === "") return;
  return s6(QS(w(we(), e), {
    foldCase: !0
  }));
}
function b(e) {
  if (O() !== "windows") return;
  let walkRoot = _(e).root,
    i = r => $jt(iM(r)),
    t = i(walkRoot);
  if (t === void 0) {
    let r = gQ(walkRoot);
    if (r === null) return "undeterminable";
    t = i(r);
  }
  return t === void 0 ? void 0 : {
    walkRoot: walkRoot,
    ...t
  };
}
function t2n(e) {
  let n = b(e);
  if (n === void 0 || n === "undeterminable") return n;
  return {
    walkRoot: n.walkRoot,
    distroDir: n.rest.replace(/[\\/]+$/, "").replace(/[\\/]+/g, "/")
  };
}
function n2n(e, n) {
  return E9n(e, {
    exactDots: !0
  }) ?? k9n(e, {
    exactDots: !0
  }) ?? (n === void 0 ? void 0 : v9n(e, n.walkRoot, n.distroDir));
}
import { readFileSync as M, statSync as U } from "fs";
import { isAbsolute as S, join as V, resolve as R } from "path";
var z = 4194304,
  j = f(() => u({
    sourceCommand: o().optional().catch(void 0),
    sourceProducerPath: o().optional().catch(void 0),
    previousProducerPaths: C(ae()).transform(e => e.filter(item => typeof item === "string")).optional().catch(void 0)
  }).passthrough());
function v0r(e) {
  let n = dt(),
    commandProducerDirsDenied = n.commandProducerDirsDenied,
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
      s = JSON.parse(m);
    } catch {
      continue;
    }
    let a = typeof s === "object" && s !== null && "plugins" in s ? s.plugins : void 0;
    if (typeof a !== "object" || a === null) continue;
    for (let p of Object.values(a)) {
      if (!Array.isArray(p)) continue;
      for (let g of p) {
        let m = j().safeParse(g);
        if (!m.success) continue;
        for (let P of [m.data.sourceProducerPath, ...(m.data.previousProducerPaths ?? [])]) {
          let l = P === void 0 ? void 0 : AK(P),
            D = l === void 0 ? void 0 : v(l, r);
          if (D !== void 0) commandProducerDirsDenied.add(D);
        }
      }
    }
  }
  return [...commandProducerDirsDenied];
}
function AHe(e, {
  emit = !0
} = {}) {
  let i = x(),
    t = v(AK(e), i === "undeterminable" ? void 0 : i);
  if (t === void 0) return;
  let commandProducerDirsDenied_2 = dt().commandProducerDirsDenied;
  if (commandProducerDirsDenied_2.has(t)) return;
  if (commandProducerDirsDenied_2.add(t), dt().commandProducerDirsComparable = null, emit) sCe();
}
function sCe() {
  try {
    dt().commandProducerDirsChanged.emit();
  } catch (error) {
    d(error);
  }
}
var GAo = xC(() => dt().commandProducerDirsChanged);
function VAo(e, n, i, {
  maxAgeMs = 0
} = {}) {
  let r = dt();
  if (!(maxAgeMs > 0 && Date.now() - r.commandProducerDirsScannedAt < maxAgeMs) || r.commandProducerDirsComparable === null) {
    let a = {
        foldCase: !0
      },
      p = QS(we(), a),
      g = QS(i, a),
      m = n.map(item => QS(item, a)).filter(item => !Km(item, p, {
        alreadyComparable: !0
      })),
      P = v0r(n).map(item => QS(item, a));
    r.commandProducerDirsComparable = [...m, ...P], r.commandProducerDirsNeedCanonicalCandidate = P.length > 0 || m.some(item => !Km(g, item, {
      alreadyComparable: !0
    }));
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
  return r.commandProducerDirsComparable.some(item => Km(item, s, {
    alreadyComparable: !0
  }));
}
function x() {
  let e = dt(),
    root_4 = Sv(),
    wslProviderOfPluginsRootMemo = e.wslProviderOfPluginsRootMemo;
  if (wslProviderOfPluginsRootMemo?.root === root_4 && Az(wslProviderOfPluginsRootMemo.at, F)) return wslProviderOfPluginsRootMemo.value;
  let t = b(root_4);
  if (t === "undeterminable") return "undeterminable";
  let value = t === void 0 ? void 0 : {
    prefix: t.prefix
  };
  return e.wslProviderOfPluginsRootMemo = {
    root: root_4,
    value: value,
    at: Date.now()
  }, value;
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
  });
}
export { Az, jDt, Sv, o6, Sln, zAo, RHe, JT, s6, WDt, t2n, n2n, v0r, AHe, sCe, GAo, VAo };