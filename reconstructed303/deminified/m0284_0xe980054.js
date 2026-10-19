// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { _I, L, ke, cS, cT, de } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { Kjr, zh, sWt, Qa, bhn, fQn, mQn, gQn, Sv, tCe, UQ, uS, Ym, hP } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { Pe } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { xo } from "B:/~BUN/root/chunk-6za2ez23.js";
import { vl } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { wO } from "B:/~BUN/root/chunk-qk52d0gf.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { ud, yD, kRo } from "B:/~BUN/root/chunk-472kxa0t.js";
import { Ne } from "B:/~BUN/root/chunk-nvdqbkrt.js";
import { _ae } from "B:/~BUN/root/chunk-bhfm57j1.js";
import { o, oe, T, u } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { join as O, resolve as p, sep as _ } from "path";
function m3(e, r, n = Date.now()) {
  return Number.isFinite(e) && Math.abs(n - e) < r;
}
import { normalize as v, sep as b } from "path";
var x = 1024;
function PS(e) {
  let foldedSegmentsBySpelling = wO().foldedSegmentsBySpelling,
    n = foldedSegmentsBySpelling.get(e);
  if (n === void 0) {
    if (n = v(e).split(b).map(vl).join(b), foldedSegmentsBySpelling.size >= x) foldedSegmentsBySpelling.clear();
    foldedSegmentsBySpelling.set(e, n);
  }
  return n;
}
var Uon = "cache";
function HC() {
  return p(ke(), ud());
}
function zee() {
  return O(HC(), Uon);
}
function A2n() {
  return L([p(Pe(), "plugins"), p(Pe(), "cowork_plugins"), HC(), ...yD().map(item => p(ke(), item))]);
}
function iRo() {
  return L([...cS(), ...cT()].map(item => p(ke(), item)));
}
function vDs(e) {
  let r = iRo();
  if (r.length === 0) return !1;
  if (tCe(e, h)) return !0;
  let roots = r.join("\x00"),
    i = Ne(),
    inlinePluginRootsComparableMemo = i.inlinePluginRootsComparableMemo;
  if (inlinePluginRootsComparableMemo?.roots !== roots || !m3(inlinePluginRootsComparableMemo.at, N)) inlinePluginRootsComparableMemo = {
    roots: roots,
    comparable: r.map(item => uS(item, {
      foldCase: !0,
      knownNotSuspect: !tCe(item, h)
    })),
    at: Date.now()
  }, i.inlinePluginRootsComparableMemo = inlinePluginRootsComparableMemo;
  let g = uS(e, {
    foldCase: !0,
    knownNotSuspect: !0
  });
  return inlinePluginRootsComparableMemo.comparable.some(item => Ym(item, g, {
    alreadyComparable: !0
  }));
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
  if (r.map(PS).some(item => n === item || n.startsWith(item + _))) return !0;
  let i = hP(e) || Sv(e),
    knownNotSuspect = !zh(e) && (!i || Qa(e));
  if (knownNotSuspect && tCe(e, h)) return !0;
  let g = uS(e, {
    foldCase: !0,
    knownNotSuspect: knownNotSuspect
  });
  return r.some(item => Ym(uS(item, {
    foldCase: !0
  }), g, {
    alreadyComparable: !0
  }));
}
import { readFileSync as W, statSync as I } from "fs";
import { isAbsolute as w, join as M, resolve as S } from "path";
var k = 4194304,
  E = f(() => u({
    sourceCommand: o().optional().catch(void 0),
    sourceProducerPath: o().optional().catch(void 0),
    previousProducerPaths: T(oe()).transform(e => e.filter(item => typeof item === "string")).optional().catch(void 0)
  }).passthrough());
function aRo(e) {
  let r = Ne(),
    commandProducerDirsDenied = r.commandProducerDirsDenied,
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
      s = JSON.parse(c);
    } catch {
      continue;
    }
    let a = typeof s === "object" && s !== null && "plugins" in s ? s.plugins : void 0;
    if (typeof a !== "object" || a === null) continue;
    for (let m of Object.values(a)) {
      if (!Array.isArray(m)) continue;
      for (let P of m) {
        let c = E().safeParse(P);
        if (!c.success) continue;
        for (let C of [c.data.sourceProducerPath, ...(c.data.previousProducerPaths ?? [])]) {
          let d = C === void 0 ? void 0 : UQ(C),
            D = d === void 0 ? void 0 : y(d, t);
          if (D !== void 0) commandProducerDirsDenied.add(D);
        }
      }
    }
  }
  return [...commandProducerDirsDenied];
}
function k9e(e, {
  emit = !0
} = {}) {
  let n = R(),
    i = y(UQ(e), n === "undeterminable" ? void 0 : n);
  if (i === void 0) return;
  let commandProducerDirsDenied_2 = Ne().commandProducerDirsDenied;
  if (commandProducerDirsDenied_2.has(i)) return;
  if (commandProducerDirsDenied_2.add(i), Ne().commandProducerDirsComparable = null, emit) S1e();
}
function S1e() {
  try {
    Ne().commandProducerDirsChanged.emit();
  } catch (error) {
    l(error);
  }
}
var lRo = _I(() => Ne().commandProducerDirsChanged);
function EDs(e, r, n, {
  maxAgeMs = 0
} = {}) {
  let t = Ne();
  if (!(maxAgeMs > 0 && Date.now() - t.commandProducerDirsScannedAt < maxAgeMs) || t.commandProducerDirsComparable === null) {
    let a = {
        foldCase: !0
      },
      m = uS(ke(), a),
      P = uS(n, a),
      c = r.map(item => uS(item, a)).filter(item => !Ym(item, m, {
        alreadyComparable: !0
      })),
      C = aRo(r).map(item => uS(item, a));
    t.commandProducerDirsComparable = [...c, ...C], t.commandProducerDirsNeedCanonicalCandidate = C.length > 0 || c.some(item => !Ym(P, item, {
      alreadyComparable: !0
    }));
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
  return t.commandProducerDirsComparable.some(item => Ym(item, s, {
    alreadyComparable: !0
  }));
}
function R() {
  let e = Ne(),
    root = HC(),
    wslProviderOfPluginsRootMemo = e.wslProviderOfPluginsRootMemo;
  if (wslProviderOfPluginsRootMemo?.root === root && m3(wslProviderOfPluginsRootMemo.at, A)) return wslProviderOfPluginsRootMemo.value;
  let i = kRo(root);
  if (i === "undeterminable") return "undeterminable";
  let value = i === void 0 ? void 0 : {
    prefix: i.prefix
  };
  return e.wslProviderOfPluginsRootMemo = {
    root: root,
    value: value,
    at: Date.now()
  }, value;
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
  });
}
export { m3, PS, Uon, HC, zee, A2n, iRo, vDs, kDs, aRo, k9e, S1e, lRo, EDs };