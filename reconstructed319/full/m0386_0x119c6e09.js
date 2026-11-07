// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  B$r,
  j$r,
  TKs,
  P$e,
  Df,
  $N
} from "B:/~BUN/root/chunk-h4acfc9y.js";
import {
  io,
  Ha,
  Zqe,
  ps,
  ie
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  x
} from "B:/~BUN/root/chunk-mwfggkjt.js";
import {
  KV,
  vH
} from "B:/~BUN/root/chunk-r8p1hzqw.js";
import {
  SUt
} from "B:/~BUN/root/chunk-xqymp2nr.js";
import {
  vA
} from "B:/~BUN/root/chunk-wss0tnsx.js";
import {
  Ge
} from "B:/~BUN/root/chunk-z7bs0q82.js";
import {
  rz,
  BI,
  To,
  tht,
  l3,
  xue,
  Ly,
  Gc,
  Aa,
  rht,
  WLe,
  Tho,
  ytn,
  MGe,
  jks,
  aFn,
  R7e,
  PCe
} from "B:/~BUN/root/chunk-j05gjqgd.js";
import {
  D0n,
  L0n,
  L0t
} from "B:/~BUN/root/chunk-s89g0dw7.js";
import {
  ze
} from "B:/~BUN/root/chunk-xwzn0yxv.js";
import {
  kd
} from "B:/~BUN/root/chunk-jbjsy1k0.js";
import {
  L
} from "B:/~BUN/root/chunk-5ha2avah.js";
import {
  homedir as m
} from "os";
import {
  dirname as P,
  isAbsolute as y,
  resolve as R
} from "path";
var k = 5,
  B = /[{}]/;

function QSr(e) {
  let n = e.length;
  if (n <= k) return e.map((t) => `'${t}'`).join(", ");
  return `${e.slice(0,k).map((t)=>`'${t}'`).join(", ")}, and ${n-k} more`
}

function Sca(e) {
  let n = $N(e);
  if (n === -1) return e;
  let r = e.substring(0, n),
    t = x() === "windows" ? Math.max(r.lastIndexOf("/"), r.lastIndexOf("\\")) : r.lastIndexOf("/");
  if (t === -1) return ".";
  return r.substring(0, t) || "/"
}

function DQt(e, n) {
  if (!Ge.isSandboxingEnabled() || Ge.storedDenyListsMayBeShort()) return !1;
  let {
    allowOnly: r,
    denyWithinAllow: t
  } = Ge.getFsWriteConfig(), s = n ?? ps(e), d = r.flatMap(C), l = t.flatMap(C);
  return s.every((o) => {
    for (let u of l)
      if (Gc(o, u)) return !1;
    return d.some((u) => Gc(o, u, {
      caseFold: !0,
      uncShapeParity: !0
    }))
  })
}

function C(e) {
  let {
    resolvedSandboxConfigPaths: n
  } = vA(), r = n.get(e);
  if (r !== void 0) return r;
  let t = ps(e);
  return n.set(e, t), t
}

function ZSr(e) {
  return e?.type === "safetyCheck" || e?.type === "other" ? e.reason : void 0
}

function ewr(e) {
  return e?.type === "safetyCheck" && e.circuitBreaker !== void 0 && KV(e) ? e.circuitBreaker : void 0
}

function _uo(e, n, r) {
  let t = ZSr(e.decisionReason) ?? e.message,
    s = ewr(e.decisionReason);
  return {
    type: "safetyCheck",
    reason: r === void 0 ? t : `${t.endsWith(".")?t:`${t}.`} ${r.sentence}.`,
    ...n ? {
      classifierApprovable: !1,
      circuitBreaker: "restrictedMode",
      also: ["internalHardDeny", ...s !== void 0 ? [s] : []]
    } : s !== void 0 ? {
      classifierApprovable: !1,
      circuitBreaker: s,
      also: ["internalHardDeny"]
    } : {
      classifierApprovable: r?.personOnly !== !0,
      circuitBreaker: "internalHardDeny"
    }
  }
}

function LQt(e) {
  return !e.allowed && e.refusedByDefault === !0 && e.decisionReason === void 0 && e.isInWorkingDir === !1
}

function qP(e, n, r, t, s) {
  let d = r === "read" ? "read" : "edit",
    l = t ?? Ha(e),
    o = l.spellings,
    u = s ? new Set([...o, ...s]) : o;
  for (let i of u) {
    let f = Aa(i, n, d, "deny");
    if (f !== null) return {
      allowed: !1,
      decisionReason: {
        type: "rule",
        rule: f
      }
    }
  }
  if (l.unresolved) {
    let i = SUt(e);
    if (r === "read" && !n.restricted) return n.blockReadsOutsideWorkingDirectories === !0 ? {
      allowed: !1,
      decisionReason: {
        type: "safetyCheck",
        reason: i,
        classifierApprovable: !1,
        circuitBreaker: "outsideReadsBlocked"
      }
    } : {
      allowed: !1,
      decisionReason: {
        type: "other",
        reason: i
      }
    };
    return {
      allowed: !1,
      decisionReason: {
        type: "safetyCheck",
        reason: i,
        classifierApprovable: !1,
        ...n.restricted && {
          circuitBreaker: "restrictedMode"
        }
      }
    }
  }
  if (r === "read" && xue(e, n, o)) return {
    allowed: !1,
    decisionReason: {
      type: "safetyCheck",
      reason: vH,
      classifierApprovable: !1,
      circuitBreaker: "outsideReadsBlocked"
    }
  };
  let a;
  if (r !== "read") {
    let i = R7e(e, {}, o, {
      restricted: n.restricted
    });
    if (i.behavior === "deny") a = i;
    if (i.behavior === "allow" && aFn(i, n)) return {
      allowed: !0,
      decisionReason: i.decisionReason
    }
  }
  if (r !== "read") {
    let i = l3(e, o, void 0, tht(n), n.trustedNetworkDirectories);
    if (!i.safe) {
      let f = Tho(l.requested, l, n),
        h = ZSr(a?.decisionReason) ?? i.message,
        g = ewr(a?.decisionReason),
        S = a !== void 0 && f !== null && !ytn(l.requested, n),
        D = n.restricted ? "restrictedMode" : i.circuitBreaker ?? g,
        b = [...i.circuitBreaker !== void 0 ? [i.circuitBreaker] : [], ...i.also ?? [], ...a !== void 0 ? ["internalHardDeny"] : [], ...g !== void 0 ? [g] : []].filter((A, W, _) => A !== D && _.indexOf(A) === W);
      return {
        allowed: !1,
        decisionReason: {
          type: "safetyCheck",
          reason: f === null ? h : `${h.endsWith(".")?h:`${h}.`} ${f.sentence}.`,
          ...n.restricted ? {
            classifierApprovable: !1,
            circuitBreaker: "restrictedMode"
          } : {
            classifierApprovable: i.classifierApprovable && !f?.personOnly && !S && g === void 0,
            ...D !== void 0 && {
              circuitBreaker: D
            }
          },
          ...b.length > 0 && {
            also: b
          }
        }
      }
    }
  }
  if (a !== void 0) {
    let i = WLe(l, n);
    return {
      allowed: !1,
      decisionReason: _uo(a, n.restricted, i === null ? void 0 : {
        sentence: MGe(l.requested, i),
        personOnly: i.carriedOut || !ytn(l.requested, n)
      })
    }
  }
  let c = Ly(e, n, o);
  if (c) {
    if (r === "read" || n.mode === "acceptEdits") return {
      allowed: !0
    }
  }
  if (r === "read") {
    let i = PCe(e, {}, o, {
      restricted: n.restricted
    });
    if (i.behavior === "deny") return {
      allowed: !1,
      decisionReason: jks(i.decisionReason)
    };
    if (i.behavior === "allow" && aFn(i, n)) return {
      allowed: !0,
      decisionReason: i.decisionReason
    }
  }
  if (r !== "read" && !c && !kd() && n.servedCall !== !0 && !Ge.isOnButNotRunning() && DQt(e, o)) return {
    allowed: !0,
    decisionReason: {
      type: "other",
      reason: "Path is in sandbox write allowlist"
    }
  };
  let p = rht(o, n, d);
  if (p !== null) return {
    allowed: !0,
    decisionReason: {
      type: "rule",
      rule: p
    }
  };
  if (r !== "read") {
    let i = WLe(l, n);
    if (i?.carriedOut) return {
      allowed: !1,
      isInWorkingDir: c,
      decisionReason: {
        type: "safetyCheck",
        reason: MGe(l.requested, i),
        classifierApprovable: !1
      }
    }
  }
  return {
    allowed: !1,
    isInWorkingDir: c,
    refusedByDefault: !0
  }
}

function E(e) {
  return Object.values(e.alwaysDenyRules).some((n) => (n?.length ?? 0) > 0)
}

function F(e, n, r, t) {
  let s = ie(),
    d = Sca(e),
    l = y(d) ? d : R(n, d),
    o = y(e) ? e : R(n, e);
  for (;;) {
    let {
      resolvedPath: u,
      isSymlink: a,
      isCanonical: c
    } = io(s, o), p = P(o);
    if (c || o === l || p === o) return {
      ...qP(u, r, t, c ? Zqe(u) : void 0, c && a && E(r) ? ps(o) : void 0),
      resolvedPath: u
    };
    o = p
  }
}
var H = /^[A-Za-z]:\/?$/,
  T = /^[A-Za-z]:\/[^/]+$/,
  N = /^[A-Za-z]:\//,
  O = /^\\\\([^\\]+)\\([a-z])\$(?=$|\\)/,
  M = /^\/\.(?:vol|file)(?:\/|$)/i,
  G = /^(?:[A-Za-z]:[\\/]|[\\/]{2}|[\\/]\?\?[\\/])/,
  q = /^[\\/]{2}(?:[?.][\\/]|;|[^\\/]+[\\/]admin\$(?=$|[\\/]))/i;

function cJe(e) {
  return X(e).some((n) => {
    let r = v(n);
    if (q.test(r) || z(r)) return !0;
    let t = r.replace(/[\\/]+/g, "/");
    if (x() === "macos" && M.test(t)) return !0;
    return j(t)
  })
}

function X(e) {
  let n = [e, e.split("/").filter((r, t) => r !== "." || t === 0).join("/") || (e.startsWith("/") ? "/" : "")];
  if (G.test(e) || x() === "windows")
    for (let r of L([e, j$r(e)])) n.push(...w(L0n(r)), ...w(L0n(r.replace(/[^\\/]+/g, (t) => {
      let s = rz(t);
      return s === "." || s === ".." ? s : t
    }))));
  return L(n)
}

function w(e) {
  let n = O.exec(e);
  return n !== null && I(n[1]) === "own_host" ? [e, `${n[2]}:${e.slice(n[0].length)||"\\"}`] : [e]
}

function I(e) {
  return L0t(`\\\\${e}\\`)
}

function z(e) {
  if (!/^[\\/]{2}/.test(e)) return !1;
  let n = O.exec(L0n(e)),
    r = n === null ? void 0 : I(n[1]);
  return r === "numeric_host" || r === "odd_host"
}

function j(e) {
  if (e === "*" || e.endsWith("/*")) return !0;
  let n = x() === "macos",
    r = (a) => n ? a.replace(/^\/private\/(etc|var|tmp|home)(\/|$)/i, "/$1$2") : a,
    t = r(e),
    s = t === "/" ? t : t.replace(/\/$/, "");
  if (s === "/") return !0;
  if (H.test(s)) return !0;
  let d = r(v(m()).replace(/[\\/]+/g, "/")).replace(/\/$/, "");
  if (To(s) === To(d)) return !0;
  let l = U(m()),
    o = L([d, l, .../^[\\/]{2}/.test(m()) ? w(L0n(j$r(m()))).map((a) => a.replace(/[\\/]+/g, "/").replace(/\/$/, "")) : []]);
  if (o.some((a) => a !== d && To(s) === To(a))) return !0;
  for (let a of o) {
    let c = N.exec(a)?.[0];
    if (c !== void 0 && To(s.slice(0, c.length)) === To(c) && B$r(a.slice(c.length), s.slice(c.length)).some((p) => p.length === 0)) return !0
  }
  if (P(s) === "/") return !0;
  if (T.test(s)) return !0;
  return !1
}

function v(e) {
  return P$e(D0n(j$r(e).replace(TKs, "$1:")))
}

function U(e) {
  let {
    canonicalHomedirByHome: n
  } = vA(), r = n.get(e);
  if (r !== void 0) return r;
  let t = v(io(ie(), e).resolvedPath).replace(/[\\/]+/g, "/").replace(/\/$/, "");
  return n.set(e, t), t
}

function LDn(e) {
  let n = e.split(/\/+/);
  return x() === "windows" ? [...e.split(/[\\/]+/), ...n] : n
}

function W0e(e) {
  let n = e.split(x() === "windows" ? /[\\/]/ : "/"),
    r = !1;
  for (let t of n) {
    if (t === "" || t === ".") continue;
    if (t === "..") {
      if (r) return !0
    } else r = !0
  }
  return !1
}

function NDn(e) {
  let n = e.split(/[\\/]+/);
  return n.some((r, t) => {
    if (r !== "..") return !1;
    let s = n.slice(0, t).join("/");
    return $N(s) !== -1 || s.includes("[") && n.slice(t + 1).join("/").includes("]")
  })
}

function V(e) {
  return Object.values(e.alwaysDenyRules).some((n) => n?.some((r) => r === ze || r.startsWith(`${ze}(`)))
}

function K(e, n, r, t) {
  if (x() === "windows") return;
  let s = Z(e, n, r, t);
  if (t === "read" && s?.decisionReason?.type !== "rule" && NDn(e) && (r.blockReadsOutsideWorkingDirectories === !0 || V(r))) return {
    allowed: !1,
    resolvedPath: e,
    decisionReason: {
      type: "safetyCheck",
      reason: `A glob before the '..' in '${e}' is expanded by the shell before the path is opened, so the target cannot be checked against the read block (permissions.blockReadsOutsideWorkingDirectories) or the Read deny rules. Spell the path without the glob.`,
      classifierApprovable: !1,
      circuitBreaker: "outsideReadsBlocked"
    }
  };
  return s
}

function Z(e, n, r, t) {
  let s = ie(),
    d = y(e) ? e : `${n}/${e}`,
    l = "/",
    o = [];
  for (let i of d.split("/")) {
    if (i === "" || i === ".") continue;
    if (i !== "..") {
      o.push(i);
      continue
    }
    if (o.length > 0) {
      let f = io(s, R(l, ...o));
      if (!f.isCanonical) return;
      l = f.resolvedPath, o = []
    }
    l = P(l)
  }
  let u = R(l, ...o);
  if (t !== "read") {
    let i = {
        ...Ha(u),
        requested: d
      },
      f = qP(i.unresolved ? u : i.landing, r, t, i);
    if (f.allowed || f.isInWorkingDir === !0 && f.decisionReason === void 0) return;
    let h = WLe(i, r);
    return {
      ...f,
      resolvedPath: h?.carriedOut ? h.landing : u
    }
  }
  let {
    resolvedPath: a,
    isCanonical: c
  } = io(s, u), p = qP(a, r, t, c ? Zqe(a) : void 0);
  if (p.allowed || p.isInWorkingDir === !0 && p.decisionReason === void 0) return;
  return {
    ...p,
    resolvedPath: a
  }
}

function _1(e, n, r, t) {
  let s = Df(e);
  if (BI(s, !0)) return {
    allowed: !1,
    resolvedPath: s,
    decisionReason: {
      type: "other",
      reason: "UNC network paths require manual approval"
    }
  };
  if (s.startsWith("~")) return {
    allowed: !1,
    resolvedPath: s,
    decisionReason: {
      type: "other",
      reason: "Tilde expansion variants (~user, ~+, ~-) in paths require manual approval"
    }
  };
  if (s.includes("$") || x() === "windows" && s.includes("%") || s.includes("`") || s.startsWith("=")) return {
    allowed: !1,
    resolvedPath: s,
    decisionReason: {
      type: "other",
      reason: "Shell expansion syntax in paths requires manual approval"
    }
  };
  if (W0e(s)) return K(s, n, r, t) ?? {
    allowed: !1,
    resolvedPath: s,
    decisionReason: {
      type: "other",
      reason: "Path contains '..' traversal after a directory segment, which may follow a symlink outside the working directory"
    }
  };
  if ((t === "write" || t === "create") && B.test(s)) return {
    allowed: !1,
    resolvedPath: s,
    decisionReason: {
      type: "other",
      reason: "Brace characters in write target require manual approval \u2014 bash may brace-expand to paths outside the working directory"
    }
  };
  if ($N(s) !== -1) {
    if (t === "write" || t === "create") return {
      allowed: !1,
      resolvedPath: s,
      decisionReason: {
        type: "other",
        reason: "Glob patterns are not allowed in write operations. Please specify an exact file path."
      }
    };
    return F(s, n, r, t)
  }
  let d = y(s) ? s : R(n, s);
  return buo(d, r, t)
}

function buo(e, n, r) {
  if (r !== "read") {
    let o = Ha(e),
      u = o.unresolved ? e : o.landing,
      a = qP(u, n, r, o),
      c = a.allowed ? null : WLe(o, n);
    return {
      ...a,
      resolvedPath: c?.carriedOut ? c.landing : e
    }
  }
  let {
    resolvedPath: t,
    isSymlink: s,
    isCanonical: d
  } = io(ie(), e);
  return {
    ...qP(t, n, r, d ? Zqe(t) : void 0, d && s && E(n) ? ps(e) : void 0),
    resolvedPath: t
  }
}
export {
  QSr,
  Sca,
  DQt,
  ZSr,
  ewr,
  _uo,
  LQt,
  qP,
  cJe,
  LDn,
  W0e,
  NDn,
  _1,
  buo
};
