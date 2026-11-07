// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  H,
  Ee,
  Rk,
  qR,
  q
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  LIo,
  lb,
  oun,
  ad,
  Ywt,
  G$r,
  V$r,
  K$r,
  DT,
  M$e,
  Vae,
  nw,
  Wp,
  C0
} from "B:/~BUN/root/chunk-h4acfc9y.js";
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  Ue
} from "B:/~BUN/root/chunk-eev762xg.js";
import {
  ps
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Ol
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  Kc,
  dU,
  HEs
} from "B:/~BUN/root/chunk-esnm3r09.js";
import {
  Ae
} from "B:/~BUN/root/chunk-eds8xkh8.js";
import {
  hse
} from "B:/~BUN/root/chunk-dzjj3jwh.js";
import {
  o,
  oe,
  C,
  u
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
import {
  E0
} from "B:/~BUN/root/chunk-9wbhv9z5.js";
import {
  L
} from "B:/~BUN/root/chunk-5ha2avah.js";
import {
  join as N,
  resolve as f,
  sep as T
} from "path";

function sU(e, n, r = Date.now()) {
  return Number.isFinite(e) && Math.abs(r - e) < n
}
import {
  normalize as x,
  sep as D
} from "path";
class w {
  claudeTempDir = void 0;
  childProcessTmpDir = void 0;
  bundledSkillsRoot = void 0;
  scratchpadDirBySessionId = new Map;
  resolvedWorkingDirPaths = new Map;
  workingDirPathsHeldAsNamed = new Set;
  compiledPatternsByRules = new WeakMap;
  physicalTwinsByPattern = new Map;
  composedRepoRules = {};
  giveUpProbes = new WeakMap;
  reportedGiveUps = new Set;
  reportedSecondRootMountMatches = new Set;
  reportedSecondRootMountFlagThrow = !1;
  eventsLoggedOnce = new Set;
  trustedSymlinkEquivalences = void 0;
  userSkillsBaseSpellingsFolded = void 0;
  resolvedSandboxConfigPaths = new Map;
  canonicalHomedirByHome = new Map;
  foldedSegmentsBySpelling = new Map;
  settingsFileLinks = void 0;
  reset() {
    delete this.composedRepoRules.native, delete this.composedRepoRules.upload, this.claudeTempDir = void 0, this.childProcessTmpDir = void 0, this.bundledSkillsRoot = void 0, this.scratchpadDirBySessionId.clear(), this.resolvedWorkingDirPaths.clear(), this.workingDirPathsHeldAsNamed.clear(), this.trustedSymlinkEquivalences = void 0, this.userSkillsBaseSpellingsFolded = void 0, this.resolvedSandboxConfigPaths.clear(), this.canonicalHomedirByHome.clear(), this.foldedSegmentsBySpelling.clear(), this.physicalTwinsByPattern.clear(), this.reportedGiveUps.clear(), this.reportedSecondRootMountMatches.clear(), this.reportedSecondRootMountFlagThrow = !1, this.eventsLoggedOnce.clear(), this.settingsFileLinks = void 0
  }
}
var M = new W(() => new w);

function vA() {
  return M.of(H().host)
}

function Fji() {
  return H().host.clock
}
var O = 1024;

function zk(e) {
  let n = vA().foldedSegmentsBySpelling,
    r = n.get(e);
  if (r === void 0) {
    if (r = x(e).split(D).map(Ol).join(D), n.size >= O) n.clear();
    n.set(e, r)
  }
  return r
}
var lFn = "cache";

function sO() {
  return f(Ee(), Kc())
}

function Pue() {
  return N(sO(), lFn)
}

function qEr() {
  return L([f(Ue(), "plugins"), f(Ue(), "cowork_plugins"), sO(), ...dU().map((e) => f(Ee(), e))])
}

function Wks() {
  return L([...Rk(), ...qR()].map((e) => f(Ee(), e)))
}

function Hji(e) {
  let n = Wks();
  if (n.length === 0) return !1;
  if (M$e(e, S)) return !0;
  let r = n.join("\x00"),
    i = Ae(),
    t = i.inlinePluginRootsComparableMemo;
  if (t?.roots !== r || !sU(t.at, _)) t = {
    roots: r,
    comparable: n.map((s) => nw(s, {
      foldCase: !0,
      knownNotSuspect: !M$e(s, S)
    })),
    at: Date.now()
  }, i.inlinePluginRootsComparableMemo = t;
  let g = nw(e, {
    foldCase: !0,
    knownNotSuspect: !0
  });
  return t.comparable.some((s) => Wp(s, g, {
    alreadyComparable: !0
  }))
}
var _ = 30000,
  S = {
    allowLocalWsl: !0,
    eisdirIsFolder: !0
  };

function $ji(e) {
  if (q()) return !0;
  let n = ps(f(hse())),
    r = zk(f(e));
  if (n.map(zk).some((s) => r === s || r.startsWith(s + T))) return !0;
  let i = C0(e) || DT(e),
    t = !lb(e) && (!i || ad(e));
  if (t && M$e(e, S)) return !0;
  let g = nw(e, {
    foldCase: !0,
    knownNotSuspect: t
  });
  return n.some((s) => Wp(nw(s, {
    foldCase: !0
  }), g, {
    alreadyComparable: !0
  }))
}
import {
  readFileSync as I,
  statSync as E
} from "fs";
import {
  isAbsolute as R,
  join as F,
  resolve as b
} from "path";
var A = 4194304,
  B = p(() => u({
    sourceCommand: o().optional().catch(void 0),
    sourceProducerPath: o().optional().catch(void 0),
    previousProducerPaths: C(oe()).transform((e) => e.filter((n) => typeof n === "string")).optional().catch(void 0)
  }).passthrough());

function zks(e) {
  let n = Ae(),
    r = n.commandProducerDirsDenied,
    i = v();
  n.commandProducerDirsWslProviderUndeterminable = i === "undeterminable";
  let t = i === "undeterminable" ? void 0 : i;
  n.commandProducerDirsScannedAt = Date.now(), n.commandProducerDirsComparable = null;
  for (let g of new Set(e)) {
    let s;
    try {
      let m = F(g, "installed_plugins.json"),
        P = E(m);
      if (!P.isFile() || P.size > A) continue;
      let c = I(m, "utf8");
      s = JSON.parse(c)
    } catch {
      continue
    }
    let d = typeof s === "object" && s !== null && "plugins" in s ? s.plugins : void 0;
    if (typeof d !== "object" || d === null) continue;
    for (let m of Object.values(d)) {
      if (!Array.isArray(m)) continue;
      for (let P of m) {
        let c = B().safeParse(P);
        if (!c.success) continue;
        for (let h of [c.data.sourceProducerPath, ...c.data.previousProducerPaths ?? []]) {
          let l = h === void 0 ? void 0 : Vae(h),
            y = l === void 0 ? void 0 : k(l, t);
          if (y !== void 0) r.add(y)
        }
      }
    }
  }
  return [...r]
}

function sht(e, {
  emit: n = !0
} = {}) {
  let r = v(),
    i = k(Vae(e), r === "undeterminable" ? void 0 : r);
  if (i === void 0) return;
  let t = Ae().commandProducerDirsDenied;
  if (t.has(i)) return;
  if (t.add(i), Ae().commandProducerDirsComparable = null, n) A7e()
}

function A7e() {
  try {
    Ae().commandProducerDirsChanged.emit()
  } catch (e) {
    a(e)
  }
}
var Gks = E0(() => Ae().commandProducerDirsChanged);

function Uji(e, n, r, {
  maxAgeMs: i = 0
} = {}) {
  let t = Ae();
  if (!(i > 0 && Date.now() - t.commandProducerDirsScannedAt < i) || t.commandProducerDirsComparable === null) {
    let d = {
        foldCase: !0
      },
      m = nw(Ee(), d),
      P = nw(r, d),
      c = n.map((l) => nw(l, d)).filter((l) => !Wp(l, m, {
        alreadyComparable: !0
      })),
      h = zks(n).map((l) => nw(l, d));
    t.commandProducerDirsComparable = [...c, ...h], t.commandProducerDirsNeedCanonicalCandidate = h.length > 0 || c.some((l) => !Wp(P, l, {
      alreadyComparable: !0
    }))
  }
  if (t.commandProducerDirsWslProviderUndeterminable && (oun(Vae(e)) !== void 0 || oun(nw(e, {
      foldCase: !0
    })) !== void 0)) return !0;
  if (t.commandProducerDirsComparable.length === 0) return !1;
  if (t.commandProducerDirsNeedCanonicalCandidate && M$e(R(e) ? e : b(e), {
      allowLocalWsl: !0
    })) return !0;
  let s = t.commandProducerDirsNeedCanonicalCandidate ? nw(e, {
    foldCase: !0,
    knownNotSuspect: !0
  }) : b(e).normalize("NFC").toLowerCase();
  return t.commandProducerDirsComparable.some((d) => Wp(d, s, {
    alreadyComparable: !0
  }))
}

function v() {
  let e = Ae(),
    n = sO(),
    r = e.wslProviderOfPluginsRootMemo;
  if (r?.root === n && sU(r.at, j)) return r.value;
  let i = HEs(n);
  if (i === "undeterminable") return "undeterminable";
  let t = i === void 0 ? void 0 : {
    prefix: i.prefix
  };
  return e.wslProviderOfPluginsRootMemo = {
    root: n,
    value: t,
    at: Date.now()
  }, t
}
var j = 30000;

function k(e, n) {
  let r = V$r(e, {
    exactDots: !0
  }) ?? (n === void 0 ? void 0 : G$r(e, n.prefix));
  if (r !== void 0) return r;
  if (R(e)) return !LIo(e) && (!DT(e) || Ywt(e)) ? e : void 0;
  return K$r(e, {
    exactDots: !0
  })
}
export {
  sU,
  vA,
  Fji,
  zk,
  lFn,
  sO,
  Pue,
  qEr,
  Wks,
  Hji,
  $ji,
  zks,
  sht,
  A7e,
  Gks,
  Uji
};
