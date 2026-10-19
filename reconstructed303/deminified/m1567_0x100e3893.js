// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { L, ke } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { x } from "B:/~BUN/root/chunk-3aez4b53.js";
import { _ } from "B:/~BUN/root/chunk-6za2ez23.js";
import { O, Sr, $t } from "B:/~BUN/root/chunk-nggrknsv.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { bEe, On } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { br } from "B:/~BUN/root/chunk-g5gf7tps.js";
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { he } from "B:/~BUN/root/chunk-4qqgabd5.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { vh } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { nE, sfn, zn, Sn } from "B:/~BUN/root/chunk-a0k8qg0d.js";
import { v5 } from "B:/~BUN/root/chunk-cqkcn3bx.js";
import { Es } from "B:/~BUN/root/chunk-ek28wssa.js";
import { G0e, di } from "B:/~BUN/root/chunk-2zk4vqr8.js";
import { Lc, mt, n0, LW, oXn } from "B:/~BUN/root/chunk-pjgzz98k.js";
import { s, n, Go, dn, ot, sa, Ws } from "B:/~BUN/root/chunk-damrp3r8.js";
import { Yq } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { V, Un, Fo } from "B:/~BUN/root/chunk-tgzmva3g.js";
import { Te } from "B:/~BUN/root/chunk-smy4yvhm.js";
import { Ro } from "B:/~BUN/root/chunk-exdm7pa7.js";
import { Gn, l2n } from "B:/~BUN/root/chunk-c44qc88s.js";
import { _T, TCt } from "B:/~BUN/root/chunk-62ynkm2y.js";
import { td } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { jmo, w7t } from "B:/~BUN/root/chunk-5vcgesja.js";
import { q } from "B:/~BUN/root/chunk-bf7csy4f.js";
import { Fa } from "B:/~BUN/root/chunk-a3hh790f.js";
import { on } from "B:/~BUN/root/chunk-pw5vpw1q.js";
import { Hi as selectedValue, Xe } from "B:/~BUN/root/chunk-nbjke4gr.js";
import { Se } from "B:/~BUN/root/chunk-7dpyfa5r.js";
import { fE } from "B:/~BUN/root/chunk-mhftza1y.js";
import { Ea } from "B:/~BUN/root/chunk-ynpv705a.js";
import { Vwt } from "B:/~BUN/root/chunk-y11hm1s1.js";
import { wv } from "B:/~BUN/root/chunk-5p31k8qe.js";
import { Wer } from "B:/~BUN/root/chunk-z7dx70bj.js";
import { bVe } from "B:/~BUN/root/chunk-dej6hn79.js";
import { m1 } from "B:/~BUN/root/chunk-c050gts0.js";
import { Ol } from "B:/~BUN/root/chunk-n5g6ryax.js";
import { hd } from "B:/~BUN/root/chunk-q6bapw2s.js";
import { Q, e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { jw } from "B:/~BUN/root/chunk-tmxfgevx.js";
import { T9r } from "B:/~BUN/root/chunk-v0rh8eyd.js";
import { _z } from "B:/~BUN/root/chunk-6azkz4wv.js";
import { ae, P, Z, A, y, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { GX, Md, NS, hh, jN, vXe, Lke, hje, ran, Xi, iv, xMr, Jj, Wi } from "B:/~BUN/root/chunk-mbz8rhex.js";
import { Qe } from "B:/~BUN/root/chunk-5k20pvvh.js";
import { HWe, CGs, RGs, qLo } from "B:/~BUN/root/chunk-f2a36mfn.js";
import { co } from "B:/~BUN/root/chunk-b0487zs4.js";
import { Jc } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { Nhe } from "B:/~BUN/root/chunk-pp80ffk4.js";
import { ie } from "B:/~BUN/root/chunk-t7350kw8.js";
import { S, yn } from "B:/~BUN/root/chunk-ef0msk7r.js";
function gn(t) {
  return l2n(t);
}
function wi(t) {
  let o = [];
  for (let a of t) {
    if (a === null || typeof a !== "object") continue;
    if (a.type !== "addRules") {
      o.push(a);
      continue;
    }
    if (!Array.isArray(a.rules)) continue;
    let rules = a.rules.filter(item => item !== null && typeof item === "object" && typeof item.toolName === "string" && (item.ruleContent === void 0 || typeof item.ruleContent === "string") && (item.ruleContent === void 0 ? nt(item.toolName) : gn({
      toolName: item.toolName,
      ruleContent: item.ruleContent
    })));
    if (rules.length > 0) o.push({
      ...a,
      rules: rules
    });
  }
  return o;
}
var tLe = 8,
  gCe = 64,
  Jet = 160,
  xi = new Set(["localSettings", "session"]);
function ho(t, o, a, d = xi) {
  let p = wi(t).filter(item => {
      if (!o.has(item.type)) return !1;
      if ((item.type === "addRules" || item.type === "replaceRules" || item.type === "removeRules") && item.behavior !== "allow") return !1;
      return item.destination !== void 0 && d.has(item.destination);
    }),
    u = [];
  for (let c of p) {
    if (c.type !== "addRules") {
      if (c.type === "addDirectories") {
        if (!Array.isArray(c.directories)) continue;
        let directories = c.directories.filter(item => typeof item === "string" && item.trim() !== "" && ie(item) > 0 && Lke(item));
        if (directories.length === 0) continue;
        u.push({
          ...c,
          directories: directories
        });
        continue;
      }
      u.push(c);
      continue;
    }
    if (c.rules === void 0) continue;
    let b = c.rules.filter(item => Lke(Sn({
        toolName: item.toolName,
        ...(item.ruleContent !== void 0 && {
          ruleContent: item.ruleContent
        })
      }))),
      rules_2 = a === void 0 ? b : b.filter(a);
    if (rules_2.length > 0) u.push({
      ...c,
      rules: rules_2
    });
  }
  return u;
}
var sZn = new Set(["addRules", "addDirectories"]),
  CYo = new Set(["addRules"]);
function Si(t) {
  return t.trim() !== t || t === "" || GX(t) || di(t) !== t || /[\t\n]/.test(t) || ie(t) === 0;
}
function nt(toolName) {
  if (toolName === HWe) return !1;
  if (Si(toolName)) return !1;
  let o = zn(Sn({
    toolName: toolName
  }));
  if (o.toolName !== toolName || o.ruleContent !== void 0) return !1;
  if (nE(toolName)) return !1;
  let a = co(toolName);
  if (a !== null && !a.toolName) return !1;
  return !0;
}
function yo(t) {
  if (typeof t !== "string" || t.trim() === "" || ie(t) === 0 || !Lke(t)) return null;
  return RGs(t);
}
function hn(t) {
  switch (t.length) {
    case 0:
      return "";
    case 1:
      return e(n, {
        bold: !0,
        children: t[0]
      });
    case 2:
      return r(n, {
        children: [e(n, {
          bold: !0,
          children: t[0]
        }), " and ", e(n, {
          bold: !0,
          children: t[1]
        })]
      });
    default:
      return r(n, {
        children: [e(n, {
          bold: !0,
          children: t.slice(0, -1).join(", ")
        }), ", and", " ", e(n, {
          bold: !0,
          children: t.slice(-1)[0]
        })]
      });
  }
}
function A2e(t) {
  if (t.length === 0) return "";
  if (t.length === 1) return e(n, {
    bold: !0,
    children: t[0]
  });
  if (t.length === 2) return r(n, {
    children: [e(n, {
      bold: !0,
      children: t[0]
    }), " and ", e(n, {
      bold: !0,
      children: t[1]
    })]
  });
  return r(n, {
    children: [t.slice(0, -1).map((o, index) => r(n, {
      children: [e(n, {
        bold: !0,
        children: o
      }), ",", " "]
    }, index)), "and ", e(n, {
      bold: !0,
      children: t.at(-1)
    })]
  });
}
function bzt(t) {
  return sfn((t?.replace(/\/\*\*$/, "") || "").replace(/^\.\//, "").replace(/^\/\//, "/"));
}
function bn(t) {
  if (!t) return "";
  return t.endsWith(":*") || t.endsWith(" *") ? t.slice(0, -2) : t;
}
function Szt(t, o, a) {
  if (t.toolName === o) {
    let d = bn(t.ruleContent);
    if (!d) return !1;
    return Boolean(a ? a(d) : d);
  }
  if (t.toolName === Qe) return Boolean(bzt(t.ruleContent));
  return !1;
}
function Cre(t) {
  return t !== void 0 && di(t) === t && !/[\t\n\u2028\u2029]/.test(t) && !GX(t) ? CGs(t) : void 0;
}
function kF(t) {
  return xMr(t);
}
function iZn(t, o, a, children) {
  if (!Array.isArray(t)) return null;
  if (t.length > gCe) return null;
  if (t.some(item => item === null || typeof item !== "object")) return null;
  let p = t.filter(item => item.type === "addRules").flatMap(item => item.rules || []),
    u = t.filter(item => item.type === "addDirectories").flatMap(item => Array.isArray(item.directories) ? item.directories : []);
  if (p.some(item => item === null || typeof item !== "object" || typeof item.toolName !== "string" || item.ruleContent !== void 0 && typeof item.ruleContent !== "string")) return null;
  if (p.length + u.length > tLe) return null;
  let c = p.filter(item => item.toolName === Qe),
    b = p.filter(item => item.toolName === o);
  if (u.some(item => typeof item !== "string" || item.trim() === "" || ie(item) === 0 || !Lke(item))) return null;
  let k = L(u),
    m = L(c.flatMap(item => item.ruleContent && bzt(item.ruleContent) ? item.ruleContent : []));
  if (m.some(item => !Lke(item))) return null;
  let R = L(b.flatMap(item => {
    if (!item.ruleContent) return [];
    return bn(item.ruleContent) ? [item.ruleContent] : [];
  }));
  if (R.some(item => !Lke(item))) return null;
  let T = hje(R, g => {
      let D = bn(g) || g;
      return kF(a ? a(D) : D);
    }),
    N = hje([...m, ...k], g => m.includes(g) ? kF(bzt(g)) : kF(g)),
    h = N.slice(0, m.length),
    M = N.slice(m.length);
  if (ie([...T, ...h, ...M].join(" and ")) > Jet) return null;
  let F = k.length > 0,
    U = h.length > 0,
    v = T.length > 0;
  if (U && !F && !v) return r(n, {
    children: ["Yes, allow reading from ", A2e(h), " from this project"]
  });
  if (F && !U && !v) return r(n, {
    children: ["Yes, and always allow access to ", A2e(M), " from this project"]
  });
  if (v && !F && !U) return r(n, {
    children: ["Yes, and don't ask again for ", hn(T), " commands", " ", children === void 0 ? r(Q, {
      children: ["in", " ", e(n, {
        bold: !0,
        children: Gn(ke())
      })]
    }) : r(Q, {
      children: ["on ", e(n, {
        bold: !0,
        children: children
      })]
    })]
  });
  if ((F || U) && !v) {
    let g = [...M, ...h];
    return r(n, {
      children: ["Yes, and always allow access to ", A2e(g), " from this project"]
    });
  }
  if ((F || U) && v) {
    let g = [...M, ...h];
    if (g.length === 1 && T.length === 1) return r(n, {
      children: ["Yes, and allow access to ", A2e(g), " and", " ", hn(T), " commands"]
    });
    return r(n, {
      children: ["Yes, and allow ", A2e(g), " access and", " ", hn(T), " commands"]
    });
  }
  return null;
}
var we = Symbol("ConsentRow mint token");
class me {
  #e = !0;
  node;
  applies;
  constructor(t, o, a) {
    if (t !== we) throw Error("ConsentRow may only be constructed by the consentRows factories");
    this.node = o, this.applies = a, Object.freeze(this);
  }
  static is(t) {
    return typeof t === "object" && t !== null && #e in t;
  }
}
var is = me.is,
  RYo = f(() => Jc(is));
function rt(t) {
  if (t.length > gCe) return null;
  let o = [];
  for (let a of t) {
    let d;
    try {
      d = Yq().safeParse(a);
    } catch {
      return null;
    }
    if (!d.success) return null;
    o.push(d.data);
  }
  return qLo(o);
}
function _0(t, o) {
  if (!Array.isArray(t)) return null;
  let a;
  try {
    a = t.length;
  } catch {
    return null;
  }
  if (typeof a !== "number" || !Number.isSafeInteger(a) || a < 0 || a > gCe) return null;
  let d = 0,
    p = [];
  for (let m = 0; m < a; m++) try {
    let R = t[m],
      T = R !== null && typeof R === "object" ? {
        ...R
      } : R,
      N = !1;
    if (T !== null && typeof T === "object") {
      let h = T;
      for (let M of ["rules", "directories"]) {
        let C = h[M];
        if (!Array.isArray(C)) continue;
        let F = C.length;
        if (typeof F !== "number" || !Number.isSafeInteger(F) || F < 0) {
          N = !0;
          break;
        }
        if (d += F, d > gCe * tLe) return null;
        let U = [];
        for (let v = 0; v < F; v++) U.push(C[v]);
        h[M] = U;
      }
    }
    if (N) continue;
    p.push(T);
  } catch {}
  let u = [];
  for (let m of p) {
    let R;
    try {
      R = Yq().safeParse(m);
    } catch {
      continue;
    }
    if (R.success) u.push(R.data);
  }
  if (u.length === 0) return null;
  let c = ho(u, o.displayedTypes, o.labelPredicate, o.displayedDestinations);
  if (c.length === 0) return null;
  let b = qLo(c),
    k = o.renderLabel(b);
  if (k == null || typeof k === "boolean" || k === "") return null;
  return new me(we, k, b);
}
var Ci = {
  default: "default (ask each time)",
  acceptEdits: "accept edits (auto-approve file edits and common file commands)",
  auto: "auto (no routine prompts; a reviewer model screens actions)",
  dontAsk: "don't ask (auto-deny anything that would prompt)",
  plan: "plan mode (research and propose changes without making them)",
  bypassPermissions: "BYPASS PERMISSIONS (no further prompts)"
};
function hCe(mode, o) {
  if (mode === "bypassPermissions" && o?.isBypassPermissionsModeAvailable === !1) return null;
  let a = rt([{
    type: "setMode",
    destination: "session",
    mode: mode
  }]);
  if (a === null) throw Error("setModeRow: schema rejected a designed setMode update");
  if (o?.labelVariant === "plan-keep-context") {
    let children_2 = mode === "acceptEdits" ? "Yes, auto-accept edits" : mode === "default" ? "Yes, manually approve edits" : null;
    if (children_2 !== null) return new me(we, e(n, {
      children: children_2
    }), a);
  }
  return new me(we, r(n, {
    children: ["Yes, and switch to ", e(n, {
      bold: !0,
      children: Ci[mode]
    }), " for this session"]
  }), a);
}
function G_n(t) {
  if (!Array.isArray(t)) return null;
  let o;
  try {
    o = t.length;
  } catch {
    return null;
  }
  if (typeof o !== "number" || !Number.isSafeInteger(o) || o < 0 || o > gCe) return null;
  let a = [];
  for (let c = 0; c < o; c++) try {
    let b = t[c],
      k = yo(b);
    if (k !== null) a.push(k);
  } catch {}
  let directories_2 = L(a);
  if (directories_2.length === 0) return null;
  if (directories_2.length > tLe) return null;
  let p = Jj(directories_2, c => xMr(c));
  if (ie(p.join(", ")) > Jet) return null;
  let u = rt([{
    type: "addDirectories",
    destination: "session",
    directories: directories_2
  }]);
  if (u === null) return null;
  return new me(we, r(n, {
    children: ["Yes, and always allow access to ", e(n, {
      bold: !0,
      children: p.join(", ")
    }), " for this session"]
  }), u);
}
function aZn(t, o, toolName_2) {
  if (typeof t !== "string" || Cre(t) !== t) return null;
  if (typeof o !== "string") return null;
  let ruleContent = o.trim();
  if (ruleContent === "" || Cre(ruleContent) !== ruleContent) return null;
  if (ruleContent === "*") {
    if (!nt(toolName_2)) return null;
    let u = rt([{
      type: "addRules",
      rules: [{
        toolName: toolName_2
      }],
      behavior: "allow",
      destination: "localSettings"
    }]);
    if (u === null) return null;
    return new me(we, `Yes, and don\u2019t ask again for any ${toolName_2} command`, u);
  }
  if (!nt(toolName_2) || !gn({
    toolName: toolName_2,
    ruleContent: ruleContent
  })) return null;
  let p = rt([{
    type: "addRules",
    rules: [{
      toolName: toolName_2,
      ruleContent: ruleContent
    }],
    behavior: "allow",
    destination: "localSettings"
  }]);
  if (p === null) return null;
  return new me(we, `Yes, and don\u2019t ask again for: ${ruleContent}`, p);
}
var qGr = {
    workflow: "Yes, and switch to auto mode",
    "exit-plan-resume": "Yes, and use auto mode"
  },
  Ti = (() => {
    let t = rt([]);
    if (t === null) throw Error("NO_DISPLAYED_UPDATES: empty intake rejected");
    return t;
  })();
function V_n(t) {
  return new me(we, qGr[t], Ti);
}
function lZn(t, ...o) {
  let a = [t, ...o];
  for (let u of a) if (!is(u)) throw Error("combineRows accepts only constructor-produced ConsentRows");
  let d = a.flatMap(item => [...item.applies]);
  if (d.length > gCe) throw Error("combineRows: combined updates exceed the display intake cap");
  let p = rt(d);
  if (p === null) throw Error("combineRows: schema rejected already-minted updates");
  return new me(we, e(n, {
    children: a.map((item, index) => r(n, {
      children: [index > 0 ? "; " : "", item.node]
    }, index))
  }), p);
}
function Fi(t) {
  let d = w(4),
    {
      multiline: multiline,
      children: children_3
    } = t;
  if (ot()) {
    let p;
    if (d[0] !== children_3) p = e(s, {
      "aria-role": "blockquote",
      children: children_3
    }), d[0] = children_3, d[1] = p;else p = d[1];
    return p;
  }
  if (!multiline) {
    return children_3;
  }
  let p;
  if (d[2] !== children_3) p = e(s, {
    borderStyle: "single",
    borderLeft: !0,
    borderRight: !1,
    borderTop: !1,
    borderBottom: !1,
    borderDimColor: !0,
    paddingLeft: 1,
    children: children_3
  }), d[2] = children_3, d[3] = p;else p = d[3];
  return p;
}
B();
B();
function Li(X) {
  return X + 1;
}
function Lt(t) {
  let u = w(18),
    {
      permissionResult: permissionResult
    } = t,
    a = permissionResult?.behavior === "ask" ? permissionResult.denialLimitFallback?.deadlineEpochMs ?? permissionResult.autoDenyWindow?.deadlineEpochMs : void 0,
    d = ot(),
    p = dn(),
    clockAt;
  if (u[0] !== p) clockAt = p.now(), u[0] = p, u[1] = clockAt;else clockAt = u[1];
  let epochAt;
  if (u[2] === S) epochAt = Date.now(), u[2] = epochAt;else epochAt = u[2];
  let k;
  if (u[3] !== clockAt) k = {
    clockAt: clockAt,
    epochAt: epochAt
  }, u[3] = clockAt, u[4] = k;else k = u[4];
  let m = k,
    R;
  if (u[5] !== m.clockAt || u[6] !== m.epochAt || u[7] !== p) R = () => m.epochAt + (p.now() - m.clockAt), u[5] = m.clockAt, u[6] = m.epochAt, u[7] = p, u[8] = R;else R = u[8];
  let T = R,
    [, N] = y(0),
    h;
  if (u[9] === S) h = () => N(Li), u[9] = h;else h = u[9];
  if (sa(h, a !== void 0 && !d ? 1000 : null), a === void 0) {
    return null;
  }
  if (d) {
    let M = Math.max(0, a - T());
    let C;
    if (u[10] !== M) {
      let F = Math.round(M / 60000);
      let U = Math.max(1, Math.round(M / 1000));
      C = M >= 60000 ? `about ${F} ${O(F, "minute")}` : `about ${U} ${O(U, "second")}`;
      u[10] = M, u[11] = C;
    } else C = u[11];
    let v = C;
    const children_4 = `${vh} Claude Code will automatically deny this request in ${v}, to avoid blocking progress on an unattended session`;
    let D;
    if (u[12] !== children_4) D = e(s, {
      marginBottom: 1,
      children: e(n, {
        color: "warning",
        children: children_4
      })
    }), u[12] = children_4, u[13] = D;else D = u[13];
    return D;
  }
  let Y = Math.max(0, a - T()),
    re = Math.floor(Y / 60000),
    j = Math.floor(Y % 60000 / 1000);
  const C = String(j);
  let g;
  if (u[14] !== C) g = C.padStart(2, "0"), u[14] = C, u[15] = g;else g = u[15];
  let H = `${re}:${g}`;
  const children_5 = `${vh} Claude Code will automatically deny this request in ${H}, to avoid blocking progress on an unattended session`;
  let W;
  if (u[16] !== children_5) W = e(s, {
    marginBottom: 1,
    children: e(n, {
      color: "warning",
      children: children_5
    })
  }), u[16] = children_5, u[17] = W;else W = u[17];
  return W;
}
function qi(Ze) {
  return Ze.toolPermissionContext.mode;
}
function Vi(po, children_6) {
  return e(Fi, {
    multiline: NS(po),
    children: children_6
  });
}
var wzt = 7;
function Oi(t) {
  if (t?.startsWith("plugin")) return "plugin hooks.json";
  if (t?.startsWith("skill")) return "SKILL.md";
  return "settings.json";
}
function Ut(t) {
  if (t?.type === "rule" && t.rule.ruleBehavior === "ask") return t.rule;
  if (t?.type === "subcommandResults") {
    for (let o of t.reasons.values()) if (o.behavior === "ask") {
      let a = Ut(o.decisionReason);
      if (a) return a;
    }
  }
  return;
}
function Oe(t, o, a) {
  if (!t) return null;
  let d = p => Xi(p).text;
  if (t.type === "classifier") {
    if (t.classifier === "auto-mode") return {
      reasonString: `Auto mode classifier requires confirmation for this ${o}.
${d(t.reason)}`,
      configString: void 0,
      themeColor: "error"
    };
    return {
      reasonString: `Classifier ${he.bold(d(t.classifier))} requires confirmation for this ${o}.
${d(t.reason)}`,
      configString: void 0
    };
  }
  if (t.type === "subcommandResults") {
    let rule = Ut(t);
    if (rule) return Oe({
      type: "rule",
      rule: rule
    }, o, a);
    for (let u of t.reasons.values()) if (u.behavior === "ask" || u.behavior === "passthrough") {
      let c = Oe(u.decisionReason, o, a);
      if (c) return c;
    }
  }
  switch (t.type) {
    case "rule":
      {
        let p = he.bold(d(Sn(t.rule.ruleValue)));
        if (a === "auto" && t.rule.ruleBehavior === "ask" && t.rule.source !== "policySettings") return {
          reasonString: `Ask rule ${p} overrides auto mode for this ${o}.`,
          configString: "/permissions to let auto mode decide"
        };
        return {
          reasonString: `Permission rule ${p} requires confirmation for this ${o}.`,
          configString: t.rule.source === "policySettings" ? void 0 : "/permissions to update rules"
        };
      }
    case "hook":
      {
        let p = t.reason ? `:
${d(t.reason)}` : ".",
          u = t.hookSource ? ` ${he.dim(`[${d(t.hookSource)}]`)}` : "";
        return {
          reasonString: `Hook ${he.bold(d(t.hookName))} requires confirmation for this ${o}${p}${u}`,
          configString: `${Oi(t.hookSource)} to update hooks`
        };
      }
    case "safetyCheck":
    case "other":
      return {
        reasonString: d(t.reason),
        configString: void 0
      };
    case "workingDir":
      return {
        reasonString: d(t.reason),
        configString: "/permissions to update rules"
      };
    default:
      return null;
  }
}
function bk(t) {
  let N = w(30),
    {
      permissionResult: permissionResult_2,
      toolType: toolType,
      rowBudget: rowBudget,
      rowColumns: rowColumns
    } = t,
    u = V(qi),
    c = permissionResult_2?.behavior === "ask" ? permissionResult_2.denialLimitFallback?.disclosure : void 0,
    b = Oe(permissionResult_2?.decisionReason, toolType, u),
    k = c !== void 0 && c !== permissionResult_2?.decisionReason ? Oe(c, toolType, u) : null,
    columns = Te().columns,
    R = c !== void 0 || rowBudget !== void 0,
    T = rowColumns !== void 0 ? Math.max(1, rowColumns) : Math.max(20, columns - 8),
    h;
  if (N[0] !== R || N[1] !== T || N[2] !== rowColumns) h = (M, C) => {
    if (!R) {
      return M;
    }
    let F = C;
    let v = Lc(M, T, {
      trim: !0,
      hard: !0
    }).split(`
`).map(item => mt(item, T));
    if (v.length <= F) {
      return v.join(`
`);
    }
    let g = Math.max(1, F - 1);
    let D = `\u2026 (+${v.length - g} more lines)`;
    return [...v.slice(0, g), rowColumns === void 0 ? D : mt(D, T)].join(`
`);
  }, N[0] = R, N[1] = T, N[2] = rowColumns, N[3] = h;else h = N[3];
  let Y = h,
    rule_2 = permissionResult_2?.behavior === "ask" ? permissionResult_2.matchedAskRule : void 0,
    j = rule_2 !== void 0 && Ut(permissionResult_2?.decisionReason) === void 0 ? Oe({
      type: "rule",
      rule: rule_2
    }, toolType, u) : null,
    H;
  if (N[4] !== R || N[5] !== T) H = W => {
    if (W === void 0 || !R) {
      return 0;
    }
    return $t(Lc(W, T, {
      trim: !0,
      hard: !0
    }), `
`) + 1;
  }, N[4] = R, N[5] = T, N[6] = H;else H = N[6];
  let X = H,
    I = k && rowBudget !== void 0 ? [mt(Sr(k.reasonString), T), ...k.reasonString.split(`
`).slice(1)].join(`
`) : k?.reasonString,
    G = {
      consent: X(b?.reasonString),
      streak: X(I),
      askRule: X(j?.reasonString)
    },
    K;
  if (N[7] !== rowBudget) K = rowBudget === void 0 ? {
    consent: 4,
    streak: 4,
    askRule: 4
  } : {
    consent: 2,
    streak: 3,
    askRule: 2
  }, N[7] = rowBudget, N[8] = K;else K = N[8];
  let se = K,
    le = Math.min(12, Math.max(wzt, rowBudget ?? 12)),
    z = {
      consent: Math.min(G.consent, se.consent),
      streak: Math.min(G.streak, se.streak),
      askRule: Math.min(G.askRule, se.askRule)
    },
    J = le - (z.consent + z.streak + z.askRule);
  for (const ge of rowBudget === void 0 ? ["consent", "streak", "askRule"] : ["streak", "consent", "askRule"]) {
    if (J <= 0) {
      break;
    }
    let De = Math.min(G[ge] - z[ge], J);
    z[ge] = z[ge] + De, J = J - De;
  }
  let ye = b !== null && b !== void 0 ? Y(b.reasonString, z.consent) : void 0,
    ce = I !== void 0 ? Y(I, z.streak) : void 0,
    ee = j ? Y(j.reasonString, z.askRule) : void 0,
    He;
  if (N[9] !== permissionResult_2) He = e(Lt, {
    permissionResult: permissionResult_2
  }), N[9] = permissionResult_2, N[10] = He;else He = N[10];
  let be = He;
  if (!b && !j && !k) {
    return be;
  }
  let color = b?.themeColor ?? (permissionResult_2?.decisionReason?.type === "hook" && u === "auto" ? "warning" : void 0),
    st = Vi,
    ne;
  if (N[11] !== ye || N[12] !== b || N[13] !== color) ne = b && st(ye ?? b.reasonString, color ? e(n, {
    color: color,
    children: ye ?? b.reasonString
  }) : e(n, {
    children: e(Go, {
      children: ye ?? b.reasonString
    })
  })), N[11] = ye, N[12] = b, N[13] = color, N[14] = ne;else ne = N[14];
  let ze;
  if (N[15] !== b) ze = b?.configString && e(n, {
    dimColor: !0,
    children: b.configString
  }), N[15] = b, N[16] = ze;else ze = N[16];
  let Dt;
  if (N[17] !== j || N[18] !== ee || N[19] !== b?.configString) Dt = j && r(Q, {
    children: [st(ee ?? j.reasonString, e(n, {
      children: e(Go, {
        children: ee ?? j.reasonString
      })
    })), j.configString && j.configString !== b?.configString && e(n, {
      dimColor: !0,
      children: j.configString
    })]
  }), N[17] = j, N[18] = ee, N[19] = b?.configString, N[20] = Dt;else Dt = N[20];
  let Et;
  if (N[21] !== ce || N[22] !== k) Et = k && st(ce ?? k.reasonString, k.themeColor ? e(n, {
    color: k.themeColor,
    children: ce ?? k.reasonString
  }) : e(n, {
    children: e(Go, {
      children: ce ?? k.reasonString
    })
  })), N[21] = ce, N[22] = k, N[23] = Et;else Et = N[23];
  let Ie;
  if (N[24] !== be || N[25] !== ne || N[26] !== ze || N[27] !== Dt || N[28] !== Et) Ie = r(s, {
    marginBottom: 1,
    flexDirection: "column",
    children: [ne, ze, Dt, Et, be]
  }), N[24] = be, N[25] = ne, N[26] = ze, N[27] = Dt, N[28] = Et, N[29] = Ie;else Ie = N[29];
  return Ie;
}
B();
function ns(C) {
  return C.toolPermissionContext;
}
var description = "\xB7 workflows run best with it on";
function vzt(t) {
  let p = w(10),
    o = V(ns),
    a = Un(),
    {
      addNotification: addNotification
    } = Ro(),
    u;
  if (p[0] !== o) u = (o.mode === "default" || o.mode === "acceptEdits") && _z(o), p[0] = o, p[1] = u;else u = p[1];
  let canOfferAutoMode = u,
    offered = t?.type === "workflow-agent" && canOfferAutoMode,
    k;
  if (p[2] !== addNotification || p[3] !== a || p[4] !== o) k = m => {
    let R = m === void 0 ? "workflow_permission_prompt" : m;
    if (!_T("auto", o, T => a(N => {
      let toolPermissionContext = T(N.toolPermissionContext);
      if (toolPermissionContext === N.toolPermissionContext) {
        return N;
      }
      return {
        ...N,
        toolPermissionContext: toolPermissionContext
      };
    }), R).ok) {
      return addNotification({
        key: "workflow-auto-mode-unavailable",
        kind: "warning",
        text: TCt(),
        color: "warning",
        priority: "high"
      }), !1;
    }
    return !0;
  }, p[2] = addNotification, p[3] = a, p[4] = o, p[5] = k;else k = p[5];
  let enableAutoMode = k,
    m;
  if (p[6] !== canOfferAutoMode || p[7] !== enableAutoMode || p[8] !== offered) m = {
    offered: offered,
    canOfferAutoMode: canOfferAutoMode,
    enableAutoMode: enableAutoMode
  }, p[6] = canOfferAutoMode, p[7] = enableAutoMode, p[8] = offered, p[9] = m;else m = p[9];
  return m;
}
B();
function Rs(ne) {
  return {
    ...ne,
    attribution: {
      ...ne.attribution,
      escapeCount: ne.attribution.escapeCount + 1
    }
  };
}
function kzt(t) {
  return t === "yes" ? "accept" : t === "no" ? "reject" : void 0;
}
function yCe(t) {
  let Y = w(35),
    {
      feedbackTypeOf: feedbackTypeOf,
      toolName: toolName_3,
      isMcp: isMcp,
      initialFocusedType: initialFocusedType
    } = t,
    u = Un(),
    c = ot(),
    [acceptFeedback, setAcceptFeedback] = y(""),
    [rejectFeedback, setRejectFeedback] = y(""),
    [acceptInputMode, N] = y(!1),
    [rejectInputMode, M] = y(!1),
    [C, F] = y(!1),
    [U, v] = y(!1),
    [g, D] = y(void 0),
    re;
  if (Y[0] !== feedbackTypeOf || Y[1] !== g || Y[2] !== initialFocusedType) re = g === void 0 ? initialFocusedType : feedbackTypeOf(g), Y[0] = feedbackTypeOf, Y[1] = g, Y[2] = initialFocusedType, Y[3] = re;else re = Y[3];
  let j = re,
    H;
  if (Y[4] !== acceptInputMode || Y[5] !== feedbackTypeOf || Y[6] !== isMcp || Y[7] !== rejectInputMode || Y[8] !== toolName_3) H = W => {
    let X = feedbackTypeOf(W);
    let I = {
      toolName: toolName_3,
      isMcp: isMcp
    };
    if (X === "accept") {
      if (acceptInputMode) N(!1), i("tengu_accept_feedback_mode_collapsed", I);else N(!0), F(!0), i("tengu_accept_feedback_mode_entered", I);
    } else if (X === "reject") {
      if (rejectInputMode) M(!1), i("tengu_reject_feedback_mode_collapsed", I);else M(!0), v(!0), i("tengu_reject_feedback_mode_entered", I);
    }
  }, Y[4] = acceptInputMode, Y[5] = feedbackTypeOf, Y[6] = isMcp, Y[7] = rejectInputMode, Y[8] = toolName_3, Y[9] = H;else H = Y[9];
  let handleInputModeToggle = H,
    K;
  if (Y[10] !== acceptFeedback || Y[11] !== acceptInputMode || Y[12] !== feedbackTypeOf || Y[13] !== rejectFeedback || Y[14] !== rejectInputMode) K = se => {
    let le = feedbackTypeOf(se);
    if (le !== "accept" && acceptInputMode && !acceptFeedback.trim()) N(!1);
    if (le !== "reject" && rejectInputMode && !rejectFeedback.trim()) M(!1);
    D(se);
  }, Y[10] = acceptFeedback, Y[11] = acceptInputMode, Y[12] = feedbackTypeOf, Y[13] = rejectFeedback, Y[14] = rejectInputMode, Y[15] = K;else K = Y[15];
  let handleFocus = K,
    J;
  if (Y[16] !== C || Y[17] !== isMcp || Y[18] !== U || Y[19] !== toolName_3) J = (ge, De) => {
    i(ge === "accept" ? "tengu_accept_submitted" : "tengu_reject_submitted", {
      toolName: toolName_3,
      isMcp: isMcp,
      has_instructions: !!De,
      instructions_length: De?.length ?? 0,
      entered_feedback_mode: ge === "accept" ? C : U
    });
  }, Y[16] = C, Y[17] = isMcp, Y[18] = U, Y[19] = toolName_3, Y[20] = J;else J = Y[20];
  let logSubmitted = J,
    ce;
  if (Y[21] !== u) ce = () => {
    i("tengu_permission_request_escape", {}), u(Rs);
  }, Y[21] = u, Y[22] = ce;else ce = Y[22];
  let logEscape = ce,
    He = !c && (j === "accept" && !acceptInputMode || j === "reject" && !rejectInputMode),
    be;
  if (Y[23] !== He) be = He && e(q, {
    chord: "tab",
    action: "amend"
  }), Y[23] = He, Y[24] = be;else be = Y[24];
  let hintNode = be,
    st;
  if (Y[25] !== acceptFeedback || Y[26] !== acceptInputMode || Y[27] !== handleFocus || Y[28] !== handleInputModeToggle || Y[29] !== hintNode || Y[30] !== logEscape || Y[31] !== logSubmitted || Y[32] !== rejectFeedback || Y[33] !== rejectInputMode) st = {
    acceptFeedback: acceptFeedback,
    rejectFeedback: rejectFeedback,
    setAcceptFeedback: setAcceptFeedback,
    setRejectFeedback: setRejectFeedback,
    acceptInputMode: acceptInputMode,
    rejectInputMode: rejectInputMode,
    handleInputModeToggle: handleInputModeToggle,
    handleFocus: handleFocus,
    logSubmitted: logSubmitted,
    logEscape: logEscape,
    hintNode: hintNode
  }, Y[25] = acceptFeedback, Y[26] = acceptInputMode, Y[27] = handleFocus, Y[28] = handleInputModeToggle, Y[29] = hintNode, Y[30] = logEscape, Y[31] = logSubmitted, Y[32] = rejectFeedback, Y[33] = rejectInputMode, Y[34] = st;else st = Y[34];
  return st;
}
function Ss(m) {
  return m.notifications.current?.key === "kill-agents-confirm";
}
var format = {
  keyCase: "lower"
};
function nLe(t) {
  let u = w(6),
    chord = Fa("chat:killAgents", "Chat", "ctrl+x ctrl+k"),
    a = Fo(Ss);
  if (!((t?.type === "subagent" || t?.type === "workflow-agent") && t.stoppableByKillAgents === !0) || chord === "") {
    return null;
  }
  const action = a === !0 ? "again to stop background agents" : "twice to stop background agents";
  let c;
  if (u[0] !== chord || u[1] !== action) c = e(q, {
    chord: chord,
    action: action,
    format: format,
    terse: !0
  }), u[0] = chord, u[1] = action, u[2] = c;else c = u[2];
  let children_7 = c,
    k;
  if (u[3] !== a || u[4] !== children_7) k = a === !0 ? e(n, {
    color: "text",
    children: children_7
  }) : children_7, u[3] = a, u[4] = children_7, u[5] = k;else k = u[5];
  return k;
}
B();
var Tr = {
  accept: "tell Claude what to do next",
  reject: "tell Claude what to do differently"
};
function jQ({
  options: options,
  onSelect: onSelect,
  onCancel: onCancel,
  question: d = "Do you want to proceed?",
  toolAnalyticsContext: toolAnalyticsContext,
  defaultFocusValue: defaultFocusValue,
  hideIndexes: hideIndexes,
  requestSource: requestSource
}) {
  let [defaultFocusValue_2, m] = y(defaultFocusValue);
  P(() => {
    m(void 0);
  }, []);
  let feedbackTypeOf_2 = ae(I => options.find(item => item.value === I)?.feedbackConfig?.type, [options]),
    {
      acceptFeedback: acceptFeedback_2,
      rejectFeedback: rejectFeedback_2,
      setAcceptFeedback: setAcceptFeedback_2,
      setRejectFeedback: setRejectFeedback_2,
      acceptInputMode: acceptInputMode_2,
      rejectInputMode: rejectInputMode_2,
      handleInputModeToggle: U,
      handleFocus: v,
      logSubmitted: logSubmitted_2,
      logEscape: logEscape_2,
      hintNode: hintNode_2
    } = yCe({
      feedbackTypeOf: feedbackTypeOf_2,
      toolName: toolAnalyticsContext?.toolName,
      isMcp: toolAnalyticsContext?.isMcp ?? !1
    }),
    re = nLe(requestSource),
    options_2 = Z(() => options.map(item => {
      let {
        value: value,
        label: label,
        feedbackConfig: feedbackConfig
      } = item;
      if (!feedbackConfig) return {
        label: label,
        value: value,
        description: item.description
      };
      let {
          type: type,
          placeholder: placeholder
        } = feedbackConfig,
        J = type === "accept" ? acceptInputMode_2 : rejectInputMode_2,
        onChange = type === "accept" ? setAcceptFeedback_2 : setRejectFeedback_2,
        De = Tr[type];
      if (J) return {
        type: "input",
        label: label,
        value: value,
        placeholder: placeholder ?? De,
        onChange: onChange,
        allowEmptySubmitToCancel: !0
      };
      return {
        label: label,
        value: value,
        description: item.description
      };
    }), [options, acceptInputMode_2, rejectInputMode_2]),
    onChange_2 = ae(I => {
      let G = options.find(item => item.value === I);
      if (!G) return;
      let feedbackConfig_2 = G.feedbackConfig,
        se,
        le = "";
      if (feedbackConfig_2) {
        if (le = (feedbackConfig_2.type === "accept" ? acceptFeedback_2 : rejectFeedback_2).trim(), le) se = le;
      }
      if (onSelect(I, se) === !1) return !1;
      if (feedbackConfig_2) logSubmitted_2(feedbackConfig_2.type, le);
    }, [options, acceptFeedback_2, rejectFeedback_2, onSelect, logSubmitted_2]),
    W = Z(() => {
      let I = options.find(item => item.feedbackConfig?.type === "accept" && acceptInputMode_2 || item.feedbackConfig?.type === "reject" && rejectInputMode_2),
        G = {};
      for (let K of options) if (K.keybinding) G[K.keybinding] = () => I ? U(I.value) : onChange_2(K.value);
      return G;
    }, [options, acceptInputMode_2, rejectInputMode_2, U, onChange_2]);
  on(W, {
    context: "Confirmation"
  });
  let onCancel_2 = ae(() => {
    if (onCancel?.() === !1) return;
    logEscape_2();
  }, [onCancel, logEscape_2]);
  return r(s, {
    flexDirection: "column",
    children: [typeof d === "string" ? e(n, {
      children: d
    }) : d, e(Xe, {
      selectedValue: selectedValue,
      options: options_2,
      defaultFocusValue: defaultFocusValue_2,
      hideIndexes: hideIndexes,
      inlineDescriptions: !0,
      onChange: onChange_2,
      onCancel: onCancel_2,
      onFocus: v,
      onInputModeToggle: U
    }), e(s, {
      marginTop: 1,
      children: e(n, {
        dimColor: !0,
        wrap: re ? "truncate" : void 0,
        children: r(Se, {
          children: [e(q, {
            chord: "escape",
            action: "cancel"
          }), hintNode_2, re]
        })
      })
    })]
  });
}
B();
function ea(t) {
  let {
    style: style
  } = t;
  return style === "value";
}
function ta(t) {
  let {
    style: style_2
  } = t;
  return style_2 !== "value";
}
function na(t, se) {
  let {
    text: le,
    style: style_3
  } = t;
  return e(n, {
    bold: style_3 === "question",
    children: le
  }, se);
}
function oa(t, J) {
  let {
    text: ge
  } = t;
  return e(n, {
    dimColor: !0,
    children: ge
  }, `value-${J}`);
}
var qe = 12,
  zt = 60,
  eo = qe * zt,
  to = 4,
  $s = /^(?:replacing|source|into|type|artifact)(?: \d+)?: https?:\/\/[^\s/]+\/(?:[^\s/]+\/)*(?:artifact|frame)\/(?:[A-Za-z0-9_-]*-)?(?:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}|[A-Za-z0-9_-]{22})\/?$/;
function Ys(t, o) {
  if (ie(t) <= o) return t;
  let a = LW(t, Math.floor(o / 2));
  return a + n0(t, o - ie(a));
}
function no(t, o) {
  let a = Math.max(1, o),
    d = [...(t.question === void 0 ? [] : [{
      text: t.question,
      style: "question"
    }]), ...t.lines.map(c => ({
      text: c,
      style: "line"
    })), ...t.values.map(c => ({
      text: c,
      style: "value"
    }))],
    p = -1,
    rows = d.flatMap(({
      text: text,
      style: style_4
    }) => {
      let k = text.replace(/\r\n|[\r\n\u2028\u2029]/g, " "),
        value_2 = style_4 === "value" ? p += 1 : void 0;
      return style_4 === "value" && !$s.test(k) ? [{
        text: Ys(k, a),
        style: style_4,
        value: value_2
      }] : Lc(style_4 === "value" ? k : text, a, {
        trim: !0,
        hard: !0
      }).split(`
`).map(item => ({
        text: mt(item, a),
        style: style_4,
        ...(value_2 !== void 0 && {
          value: value_2
        })
      }));
    });
  return {
    rows: rows,
    gutter: t.values.length > 0 || t.lines.length > 0 || rows.length > d.length || d.some(({
      text: text_2
    }) => NS(text_2))
  };
}
function Zt(t) {
  let a = w(31),
    {
      card: card
    } = t;
  if (card.rows.length === 0) {
    return null;
  }
  let d, p, u, c, flexDirection, k, m, R, multiline_2, flexDirection_2;
  if (a[0] !== card.gutter || a[1] !== card.rows) {
    let h = card.rows.filter(ea);
    let M = card.rows.filter(ta);
    let C = card.rows.length <= qe;
    let F = h;
    if (!C) {
      let U = qe - 3;
      let v = 0;
      while (v < h.length) {
        let g = h[v].value;
        let D = v;
        while (D < h.length && h[D].value === g) D = D + 1;
        if (D > U) {
          break;
        }
        v = D;
      }
      F = h.slice(0, v);
    }
    c = h.length - F.length;
    let Y = qe - 1 - F.length - (c > 0 ? 1 : 0);
    let re = C ? M : M.slice(0, Math.max(1, Y));
    let j = M.length - re.length;
    u = s;
    flexDirection_2 = "column";
    p = Fi;
    multiline_2 = card.gutter;
    d = s;
    flexDirection = "column";
    k = re.map(na);
    if (a[12] !== j) m = j > 0 && r(n, {
      dimColor: !0,
      children: ["\u2026 (+", j, " more lines)"]
    }), a[12] = j, a[13] = m;else m = a[13];
    R = F.map(oa);
    a[0] = card.gutter, a[1] = card.rows, a[2] = d, a[3] = p, a[4] = u, a[5] = c, a[6] = flexDirection, a[7] = k, a[8] = m, a[9] = R, a[10] = multiline_2, a[11] = flexDirection_2;
  } else d = a[2], p = a[3], u = a[4], c = a[5], flexDirection = a[6], k = a[7], m = a[8], R = a[9], multiline_2 = a[10], flexDirection_2 = a[11];
  let H;
  if (a[14] !== c) H = c > 0 && r(n, {
    dimColor: !0,
    children: ["\u2026 (+", c, " more lines)"]
  }), a[14] = c, a[15] = H;else H = a[15];
  let children_8;
  if (a[16] !== d || a[17] !== flexDirection || a[18] !== k || a[19] !== m || a[20] !== R || a[21] !== H) children_8 = r(d, {
    flexDirection: flexDirection,
    children: [k, m, R, H]
  }), a[16] = d, a[17] = flexDirection, a[18] = k, a[19] = m, a[20] = R, a[21] = H, a[22] = children_8;else children_8 = a[22];
  let children_9;
  if (a[23] !== p || a[24] !== multiline_2 || a[25] !== children_8) children_9 = e(p, {
    multiline: multiline_2,
    children: children_8
  }), a[23] = p, a[24] = multiline_2, a[25] = children_8, a[26] = children_9;else children_9 = a[26];
  let I;
  if (a[27] !== u || a[28] !== flexDirection_2 || a[29] !== children_9) I = e(u, {
    flexDirection: flexDirection_2,
    children: children_9
  }), a[27] = u, a[28] = flexDirection_2, a[29] = children_9, a[30] = I;else I = a[30];
  return I;
}
B();
var unitsRemaining = 200000,
  oo = unitsRemaining,
  remaining = 1e4,
  ia = 1000,
  aa = 200000;
function Er(t) {
  return typeof t === "string" && t.length <= 256;
}
var St = 80,
  la = new Set(["channel_id", "channel"]),
  ca = new Set(["ts", "thread_ts"]),
  da = /^\d{10}\.\d{6}$/,
  ua = /\b\d{4}\b/,
  pa = /\d{1,2}:\d{2}/;
function Fe(t, o, a, d) {
  return ie(t) + 2 + ie(o) + (a === void 0 ? 0 : ie(a) + 3) <= Math.min(St, d - 2);
}
var ma = 64;
function io(t, o, a = 0, d = {
  remaining: remaining,
  unitsRemaining: unitsRemaining
}) {
  if (typeof t === "string") {
    if (t.length + 2 > d.unitsRemaining) throw Error("value exceeds the units display budget");
    let p = _(t);
    if (d.unitsRemaining -= p.length, d.unitsRemaining < 0) throw Error("value exceeds the units display budget");
    return p;
  }
  if (t === null || typeof t === "number" || typeof t === "boolean") {
    let p = String(t);
    if (d.unitsRemaining -= p.length, d.unitsRemaining < 0) throw Error("value exceeds the units display budget");
    return p;
  }
  if (a >= ma) throw Error("value exceeds the display depth bound");
  if (Array.isArray(t)) {
    if (t.length === 0) return "[]";
    let p = t.length;
    if (typeof p !== "number" || !Number.isSafeInteger(p) || p < 0) throw Error("value exceeds the element display budget");
    if (d.remaining -= p, d.remaining < 0) throw Error("value exceeds the element display budget");
    let u = [];
    for (let k = 0; k < p; k++) u.push(io(t[k], o + 1, a + 1, d));
    if (u.every(item => !item.includes(`
`))) {
      let k = `[${u.join(", ")}]`;
      if (ie(k) <= St) return k;
    }
    let c = "  ".repeat(o + 1),
      b = "  ".repeat(o);
    return `[
${u.map(item => c + item).join(`,
`)}
${b}]`;
  }
  if (typeof t === "object") {
    let p = Object.entries(t);
    if (p.length === 0) return "{}";
    if (d.remaining -= p.length, d.remaining < 0) throw Error("value exceeds the element display budget");
    for (let [m] of p) {
      if (m.length > aa) throw Error("nested key exceeds the display bound");
      if (m.length > d.unitsRemaining) throw Error("keys exceed the units display budget");
      if (hh(m) !== m) throw Error("nested key display would drop code points");
      d.unitsRemaining -= m.length;
    }
    let u = ran(p.map(([m]) => m));
    for (let [m] of p) {
      let R = u.get(m) ?? m;
      if (R.length > m.length) {
        if (d.unitsRemaining -= R.length - m.length, d.unitsRemaining < 0) throw Error("keys exceed the units display budget");
      }
    }
    let c = p.map(([m, R]) => `${u.get(m) ?? m}: ${io(R, o + 1, a + 1, d)}`);
    if (c.every(item => !item.includes(`
`))) {
      let m = `{ ${c.join(", ")} }`;
      if (ie(m) <= St) return m;
    }
    let b = "  ".repeat(o + 1),
      k = "  ".repeat(o);
    return `{
${c.map(item => b + item).join(`,
`)}
${k}}`;
  }
  if (typeof t === "bigint") throw Error("bigint value cannot be rendered");
  return "undefined";
}
var Nr = /^(\d{4})-(\d{2})-(\d{2})[Tt ](\d{2}):(\d{2})(?::(\d{2})(?:\.\d{1,9})?)?(?:[Zz]|[+-]\d{2}:?\d{2})?$/;
function Ar(t) {
  let o = t.trim(),
    a = o.match(Nr);
  if (!a) return null;
  let d = Number(a[1] ?? ""),
    p = Number(a[2] ?? ""),
    u = Number(a[3] ?? ""),
    c = Number(a[4] ?? ""),
    b = Number(a[5] ?? ""),
    k = a[6] === void 0 ? 0 : Number(a[6]);
  if (d < 100) return null;
  let m = new Date(Date.UTC(d, p, 0)).getUTCDate();
  if (p < 1 || p > 12 || u < 1 || u > m) return null;
  if (c > 24 || b > 59 || k > 59 || c === 24 && (b > 0 || k > 0)) return null;
  let R = Date.parse(o);
  if (Number.isNaN(R)) return null;
  if (!/(?:[Zz]|[+-]\d{2}:?\d{2})$/.test(o)) {
    let date = new Date(Date.UTC(d, p - 1, u, c, b)),
      date_2 = new Date(R);
    if (date_2.getFullYear() !== date.getUTCFullYear() || date_2.getMonth() !== date.getUTCMonth() || date_2.getDate() !== date.getUTCDate() || date_2.getHours() !== date.getUTCHours() || date_2.getMinutes() !== date.getUTCMinutes()) return null;
  }
  let N = Date.UTC(d, p - 1, u, c, b, k);
  if (Math.abs(R - N) > 50400000) return null;
  return new Date(R).toLocaleString(void 0, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short"
  });
}
function so(t, o, a = St) {
  if (t === null || typeof t !== "object" || Array.isArray(t)) return [{
    kind: "inline",
    key: "input",
    text: "(parameters are not an object \u2014 deny unless expected)",
    unrenderable: !0
  }];
  let d = Object.entries(t),
    text_3 = v5(t);
  if (text_3 !== null) return [{
    kind: "inline",
    key: "input",
    text: text_3,
    unrenderable: !0,
    parseFailureSentinel: !0
  }];
  let u = [],
    c = d.length;
  if (c > ia) return [{
    kind: "inline",
    key: "input",
    text: `(${c} parameters \u2014 too many to show \u2014 deny unless expected)`,
    unrenderable: !0
  }];
  let b = [],
    k = 0,
    m = 0;
  for (let [h, M] of d) {
    if (h.length > unitsRemaining) {
      k += 1;
      continue;
    }
    if (b.push(h), m += h.length, typeof M === "string" && M.length <= unitsRemaining) m += M.length;
  }
  if (m > oo) return [{
    kind: "inline",
    key: "input",
    text: `(parameters total ${m.toLocaleString()} characters \u2014 too much to show \u2014 deny unless expected)`,
    unrenderable: !0
  }];
  if (k > 0) u.push({
    kind: "inline",
    key: "input",
    text: `(${k} parameter ${k === 1 ? "name is" : "names are"} too large to show \u2014 deny unless expected)`,
    unrenderable: !0
  });
  let R = ran(b),
    T = d.find(([h]) => h === "language")?.[1],
    N = 0;
  for (let [h, M] of d) {
    if (h.length > unitsRemaining) continue;
    let key = R.get(h) ?? h;
    if (hh(h) !== h) {
      N += 1;
      continue;
    }
    if (typeof M === "string") {
      if (M.length > unitsRemaining) {
        let text_4 = `(value of ${M.length.toLocaleString()} characters cannot be shown \u2014 deny unless expected)`;
        if (!Fe(key, text_4, void 0, a)) u.push({
          kind: "block",
          key: key,
          text: text_4,
          unrenderable: !0
        });else u.push({
          kind: "inline",
          key: key,
          text: text_4,
          unrenderable: !0
        });
        continue;
      }
      let g = Md(M),
        D = hh(g);
      if (G0e.test(D) || D !== g) {
        let text_5 = `(value of ${M.length.toLocaleString()} characters cannot be shown in full \u2014 deny unless expected)`;
        if (!Fe(key, text_5, void 0, a)) u.push({
          kind: "block",
          key: key,
          text: text_5,
          unrenderable: !0
        });else u.push({
          kind: "inline",
          key: key,
          text: text_5,
          unrenderable: !0
        });
        continue;
      }
      let text_6 = D.replace(/\t/g, " ");
      if (D.includes(`
`) || ie(D) > St) {
        let language = h === "code" && Er(T) ? Md(T) : void 0;
        u.push({
          kind: "block",
          key: key,
          text: text_6,
          language: language
        });
        continue;
      }
      let text_7 = _(D),
        j = o?.[h] === "date-time" && ua.test(D) && pa.test(D),
        annotation = ca.has(h) && da.test(D) ? Ar(new Date(Number(D) * 1000).toISOString()) ?? void 0 : j || Nr.test(D) ? Ar(D) ?? void 0 : void 0;
      if (!Fe(key, text_7, annotation, a)) {
        let language_2 = h === "code" && Er(T) ? Md(T) : void 0;
        u.push({
          kind: "block",
          key: key,
          text: text_6,
          annotation: annotation,
          language: language_2
        });
        continue;
      }
      let linkUrl = la.has(h) ? T9r(D) ?? void 0 : /^https?:\/\/\S+$/.test(D) && !GX(D) ? D : void 0;
      u.push({
        kind: "inline",
        key: key,
        text: text_7,
        linkUrl: linkUrl,
        annotation: annotation
      });
      continue;
    }
    if (M === null || typeof M === "number" || typeof M === "boolean") {
      let text_8 = String(M);
      if (!Fe(key, text_8, void 0, a)) {
        u.push({
          kind: "block",
          key: key,
          text: text_8
        });
        continue;
      }
      u.push({
        kind: "inline",
        key: key,
        text: text_8
      });
      continue;
    }
    let text_11,
      U = "",
      v = 0;
    try {
      let g = io(M, 0);
      if (v = g.length, g.length > unitsRemaining) {
        let text_9 = `(value of ${g.length.toLocaleString()} formatted characters cannot be shown \u2014 deny unless expected)`;
        if (!Fe(key, text_9, void 0, a)) u.push({
          kind: "block",
          key: key,
          text: text_9,
          unrenderable: !0
        });else u.push({
          kind: "inline",
          key: key,
          text: text_9,
          unrenderable: !0
        });
        continue;
      }
      U = Md(g), text_11 = hh(U);
    } catch {
      if (!Fe(key, "(value too large or too deeply nested to render \u2014 deny unless expected)", void 0, a)) u.push({
        kind: "block",
        key: key,
        text: "(value too large or too deeply nested to render \u2014 deny unless expected)",
        unrenderable: !0
      });else u.push({
        kind: "inline",
        key: key,
        text: "(value too large or too deeply nested to render \u2014 deny unless expected)",
        unrenderable: !0
      });
      continue;
    }
    if (m += v, m > oo) return [{
      kind: "inline",
      key: "input",
      text: `(parameters total over ${oo.toLocaleString()} rendered characters \u2014 too much to show \u2014 deny unless expected)`,
      unrenderable: !0
    }];
    if (G0e.test(text_11) || hh(U) !== U) {
      let text_10 = `(value of ${v.toLocaleString()} formatted characters cannot be shown in full \u2014 deny unless expected)`;
      if (!Fe(key, text_10, void 0, a)) u.push({
        kind: "block",
        key: key,
        text: text_10,
        unrenderable: !0
      });else u.push({
        kind: "inline",
        key: key,
        text: text_10,
        unrenderable: !0
      });
      continue;
    }
    if (!text_11.includes(`
`) && Fe(key, text_11, void 0, a)) u.push({
      kind: "inline",
      key: key,
      text: text_11
    });else u.push({
      kind: "block",
      key: key,
      text: text_11,
      language: "javascript"
    });
  }
  if (N > 0) u.push({
    kind: "inline",
    key: "input",
    text: `(${N} parameter ${N === 1 ? "name" : "names"} cannot be shown in full \u2014 deny unless expected)`,
    unrenderable: !0
  });
  return u;
}
function fa(t, o) {
  return t.language !== void 0 && o !== null && jmo(t.text, w7t(t.language) ?? t.language) && o.supportsLanguage(t.language);
}
function Lr(t) {
  let d = w(38),
    {
      keyText: keyText,
      contentColumns: contentColumns
    } = t,
    p,
    u,
    c,
    dimColor,
    paddingLeft,
    flexDirection_3,
    R,
    T,
    children_11,
    marginLeft,
    borderStyle,
    borderLeft,
    borderRight,
    borderTop,
    borderBottom,
    borderDimColor;
  if (d[0] !== contentColumns || d[1] !== keyText) {
    T = yn;
    re: {
      let children_10 = Lc(`${keyText}:`, Math.max(10, contentColumns - 2), {
        hard: !0,
        trim: !1
      });
      let Y = children_10.indexOf(`
`);
      if (Y === -1) {
        T = e(n, {
          dimColor: !0,
          children: children_10
        });
        break re;
      }
      c = s;
      flexDirection_3 = "column";
      R = e(n, {
        dimColor: !0,
        children: children_10.slice(0, Y)
      });
      u = s;
      marginLeft = 2;
      borderStyle = "single";
      borderLeft = !0;
      borderRight = !1;
      borderTop = !1;
      borderBottom = !1;
      borderDimColor = !0;
      paddingLeft = 1;
      p = n;
      dimColor = !0;
      children_11 = Lc(children_10.slice(Y + 1).replace(/\n/g, ""), Math.max(10, contentColumns - 4), {
        hard: !0,
        trim: !1
      });
    }
    d[0] = contentColumns, d[1] = keyText, d[2] = p, d[3] = u, d[4] = c, d[5] = dimColor, d[6] = paddingLeft, d[7] = flexDirection_3, d[8] = R, d[9] = T, d[10] = children_11, d[11] = marginLeft, d[12] = borderStyle, d[13] = borderLeft, d[14] = borderRight, d[15] = borderTop, d[16] = borderBottom, d[17] = borderDimColor;
  } else p = d[2], u = d[3], c = d[4], dimColor = d[5], paddingLeft = d[6], flexDirection_3 = d[7], R = d[8], T = d[9], children_11 = d[10], marginLeft = d[11], borderStyle = d[12], borderLeft = d[13], borderRight = d[14], borderTop = d[15], borderBottom = d[16], borderDimColor = d[17];
  if (T !== yn) return T;
  let children_12;
  if (d[18] !== p || d[19] !== dimColor || d[20] !== children_11) children_12 = e(p, {
    dimColor: dimColor,
    children: children_11
  }), d[18] = p, d[19] = dimColor, d[20] = children_11, d[21] = children_12;else children_12 = d[21];
  let H;
  if (d[22] !== u || d[23] !== paddingLeft || d[24] !== children_12 || d[25] !== marginLeft || d[26] !== borderStyle || d[27] !== borderLeft || d[28] !== borderRight || d[29] !== borderTop || d[30] !== borderBottom || d[31] !== borderDimColor) H = e(u, {
    marginLeft: marginLeft,
    borderStyle: borderStyle,
    borderLeft: borderLeft,
    borderRight: borderRight,
    borderTop: borderTop,
    borderBottom: borderBottom,
    borderDimColor: borderDimColor,
    paddingLeft: paddingLeft,
    children: children_12
  }), d[22] = u, d[23] = paddingLeft, d[24] = children_12, d[25] = marginLeft, d[26] = borderStyle, d[27] = borderLeft, d[28] = borderRight, d[29] = borderTop, d[30] = borderBottom, d[31] = borderDimColor, d[32] = H;else H = d[32];
  let W;
  if (d[33] !== c || d[34] !== flexDirection_3 || d[35] !== R || d[36] !== H) W = r(c, {
    flexDirection: flexDirection_3,
    children: [R, H]
  }), d[33] = c, d[34] = flexDirection_3, d[35] = R, d[36] = H, d[37] = W;else W = d[37];
  return W;
}
function ao({
  entries: entries,
  contentColumns: contentColumns_2
}) {
  let [a] = br(),
    p = hd().syntaxHighlightingDisabled ?? !1,
    u = A(new Map()),
    c = Z(() => {
      let R = p ? null : m1(),
        T = new Map(),
        N = entries.map(item => {
          if (item.kind !== "block") return null;
          let M = `${a}\x00${p}\x00${item.language ?? ""}\x00${item.text}`,
            C = T.get(M) ?? u.current.get(M);
          if (C === void 0) C = fa(item, R) && item.language !== void 0 && R !== null ? R.highlight(item.text, {
            language: item.language
          }) : GX(item.text) ? item.text : Wer(item.text, a);
          return T.set(M, C), C;
        });
      return u.current = T, N;
    }, [entries, a, p]),
    b = Z(() => c.map(item => item === null ? null : Lc(item, Math.max(10, contentColumns_2 - 4), {
      hard: !0,
      trim: !1
    })), [c, contentColumns_2]),
    k = bVe(),
    m = entries.length === 1 && entries[0].kind === "inline" && entries[0].parseFailureSentinel === !0 ? entries[0] : null;
  if (m !== null) return e(n, {
    dimColor: !0,
    children: m.text
  });
  if (entries.length === 0) return null;
  return e(s, {
    flexDirection: "column",
    children: entries.map((item, index) => item.kind === "inline" ? r(n, {
      children: [r(n, {
        dimColor: !0,
        children: [item.key, ": "]
      }), e(Go, {
        children: item.linkUrl !== void 0 && k ? jw(item.linkUrl, item.text) : item.text
      }), item.annotation !== void 0 && r(n, {
        dimColor: !0,
        children: [" (", item.annotation, ")"]
      })]
    }, index) : r(s, {
      flexDirection: "column",
      children: [e(Lr, {
        keyText: item.key,
        contentColumns: contentColumns_2
      }), e(s, {
        marginLeft: 2,
        borderStyle: "single",
        borderLeft: !0,
        borderRight: !1,
        borderTop: !1,
        borderBottom: !1,
        borderDimColor: !0,
        paddingLeft: 1,
        children: e(Go, {
          children: b[index] ?? item.text
        })
      }), item.annotation !== void 0 && e(s, {
        marginLeft: 2,
        children: r(n, {
          dimColor: !0,
          children: ["(", item.annotation, ")"]
        })
      })]
    }, index))
  });
}
function Ua(Va) {
  return Va.unrenderable === !0;
}
function ja(Wa) {
  return jN(Wa);
}
function Ba(Ka) {
  return !Ka;
}
function $a(Ga, Ri) {
  return Ga + ie(Ri) + (Ri.split(/\r\n|[\r\n\u2028\u2029]/).length - 1) * zt;
}
function Or(t, o, a, feedback) {
  switch (t) {
    case "yes":
    case "yes-enable-auto-mode":
      return {
        behavior: "allow",
        updatedInput: o.input,
        ...(feedback && {
          feedback: feedback
        })
      };
    case "yes-dont-ask-again":
      {
        if (a === null || !is(a)) return {
          behavior: "allow",
          updatedInput: o.input
        };
        return {
          behavior: "allow",
          updatedInput: o.input,
          permissionUpdates: a.applies
        };
      }
    case "no":
      return {
        behavior: "deny",
        ...(feedback && {
          feedback: feedback
        })
      };
  }
}
function Fr(t, o) {
  return _0([{
    type: "addRules",
    rules: [{
      toolName: t.toolName
    }],
    behavior: "allow",
    destination: "localSettings"
  }], {
    displayedTypes: displayedTypes,
    renderLabel: a => {
      let d = a.length === 1 ? a[0] : void 0;
      if (d === void 0 || d.type !== "addRules" || d.rules.length !== 1 || d.rules[0]?.toolName !== t.toolName || d.rules[0]?.ruleContent !== void 0) return null;
      let p = String(t.userFacingName);
      if (ie(p) >= vXe || p.includes("\u2026")) return null;
      if (o.cwd.includes("\u2026")) return null;
      let u = Math.max(24, o.maxLabelWidth),
        c = T => `Yes, and don't ask again for ${t.userFacingName} commands in ${T}`,
        b = Gn(o.cwd);
      if (ie(c(b)) <= u) return c(b);
      if (b !== o.cwd) return null;
      let k = Es(o.cwd);
      if (ie(c(k)) <= u) return c(k);
      let m = Nhe(k),
        R = "";
      for (let T = 0; T < m.length; T++) {
        let N = R + m[T];
        if (ie(c(`${N}\u2026`)) > u) break;
        R = N;
      }
      if (R.length > 0) return c(`${R}\u2026`);
      return null;
    }
  });
}
var displayedTypes = new Set(["addRules"]);
function uo(t) {
  let decisionReason = t.permissionResult.decisionReason;
  return td(decisionReason, d => !d.classifierApprovable) !== void 0 || t.isAskCappedByOrg || bEe(t.requestSource);
}
function K_n(t) {
  return t.showAlwaysAllow && !uo(t) && nt(t.toolName);
}
var vr = 2,
  ya = 16,
  ba = 24,
  ka = 80;
function Ir(t, o) {
  return t && o.columns >= ka ? Math.max(vr, Math.min(ya, o.rows - ba)) : vr;
}
function KGr(t) {
  let c = w(155),
    {
      payload: payload,
      answer: answer,
      wouldTakeAnswer: wouldTakeAnswer
    } = t,
    ref = A(null),
    u = Te(),
    b;
  if (c[0] !== u.columns) b = () => Math.max(20, Math.min(40, u.columns - 6)), c[0] = u.columns, c[1] = b;else b = c[1];
  let [k, m] = y(b),
    R;
  if (c[2] === S) R = () => {
    if (ref.current) {
      let {
        width: width
      } = Ws(ref.current);
      if (width > 0) m(Math.max(20, width - 2));
    }
  }, c[2] = R;else R = c[2];
  let N;
  if (c[3] !== u.columns || c[4] !== u.rows) N = [u.columns, u.rows], c[3] = u.columns, c[4] = u.rows, c[5] = N;else N = c[5];
  P(R, N);
  let contentColumns_3 = Math.min(k, Math.max(20, u.columns - 6)),
    M;
  if (c[6] !== contentColumns_3 || c[7] !== payload.input || c[8] !== payload.isMcp || c[9] !== payload.paramFormatHints) M = payload.isMcp ? so(payload.input, payload.paramFormatHints, contentColumns_3) : null, c[6] = contentColumns_3, c[7] = payload.input, c[8] = payload.isMcp, c[9] = payload.paramFormatHints, c[10] = M;else M = c[10];
  let entries_2 = M,
    [theme] = br(),
    U;
  g: {
    if (payload.renderedToolUseMessage != null) {
      let v;
      if (c[11] !== payload.renderedToolUseMessage) v = {
        node: payload.renderedToolUseMessage,
        threw: !1
      }, c[11] = payload.renderedToolUseMessage, c[12] = v;else v = c[12];
      U = v;
      break g;
    }
    ;
    try {
      let node;
      if (c[13] !== payload.input || c[14] !== payload.toolName || c[15] !== theme) node = Vwt(payload.toolName, payload.input, {
        theme: theme,
        verbose: !0
      }), c[13] = payload.input, c[14] = payload.toolName, c[15] = theme, c[16] = node;else node = c[16];
      let Y;
      if (c[17] !== node) Y = {
        node: node,
        threw: !1
      }, c[17] = node, c[18] = Y;else Y = c[18];
      U = Y;
    } catch (error) {
      let re = error;
      let D;
      if (c[19] !== payload.toolName) D = (l(new x(`Error rendering tool use line for ${payload.toolName}: ${re}`, "Error rendering tool use line (permission dialog table fallback)")), {
        node: null,
        threw: !0
      }), c[19] = payload.toolName, c[20] = D;else D = c[20];
      U = D;
    }
  }
  let {
      node: node_2,
      threw: threw
    } = U,
    v;
  if (c[21] !== node_2) v = typeof node_2 === "string" ? iv(node_2) : null, c[21] = node_2, c[22] = v;else v = c[22];
  let W = v,
    D;
  if (c[23] !== entries_2 || c[24] !== W?.kind || c[25] !== payload.toolUseRenderFailed || c[26] !== threw) D = (entries_2?.some(Ua) ?? !1) || payload.toolUseRenderFailed === !0 || threw || W?.kind === "withheld", c[23] = entries_2, c[24] = W?.kind, c[25] = payload.toolUseRenderFailed, c[26] = threw, c[27] = D;else D = c[27];
  let X = D,
    Y;
  if (c[28] !== payload) Y = K_n(payload), c[28] = payload, c[29] = Y;else Y = c[29];
  let I = Y,
    {
      offered: offered_2,
      enableAutoMode: enableAutoMode_2
    } = vzt(payload.requestSource),
    se;
  if (c[30] === S) se = ke(), c[30] = se;else se = c[30];
  let cwd = se,
    z;
  if (c[31] !== I || c[32] !== contentColumns_3 || c[33] !== X || c[34] !== payload) z = I && !X ? Fr(payload, {
    cwd: cwd,
    maxLabelWidth: contentColumns_3 - 8
  }) : null, c[31] = I, c[32] = contentColumns_3, c[33] = X, c[34] = payload, c[35] = z;else z = c[35];
  let J = z,
    ge;
  if (c[36] !== payload) ge = uo(payload), c[36] = payload, c[37] = ge;else ge = c[37];
  let De = ge,
    ye;
  if (c[38] !== offered_2 || c[39] !== X || c[40] !== De) ye = offered_2 && !X && !De ? V_n("workflow") : null, c[38] = offered_2, c[39] = X, c[40] = De, c[41] = ye;else ye = c[41];
  let ce = ye,
    hideIndexes_2 = payload.permissionResult.defaultToNo === !0,
    He;
  if (c[42] !== J || c[43] !== answer || c[44] !== enableAutoMode_2 || c[45] !== payload || c[46] !== wouldTakeAnswer) He = be => {
    let {
      value: value_3,
      feedback: feedback_2
    } = be;
    if (!wouldTakeAnswer()) {
      return !1;
    }
    if (value_3 === "yes-enable-auto-mode") enableAutoMode_2();
    return answer(Or(value_3, payload, J, feedback_2));
  }, c[42] = J, c[43] = answer, c[44] = enableAutoMode_2, c[45] = payload, c[46] = wouldTakeAnswer, c[47] = He;else He = c[47];
  let ne = wv(He),
    answer_2 = ne.answer,
    be;
  if (c[48] !== answer_2) be = (value_4, feedback_3) => answer_2({
    value: value_4,
    feedback: feedback_3
  }), c[48] = answer_2, c[49] = be;else be = c[49];
  let onSelect_2 = be,
    defaultFocusValue_3 = ne.refused === null ? hideIndexes_2 ? "no" : void 0 : ne.refused.value === "yes" && !hideIndexes_2 ? "yes" : "no",
    po;
  if (c[50] !== answer) po = () => answer({
    behavior: "cancelled"
  }), c[50] = answer, c[51] = po;else po = c[51];
  let onCancel_3 = po;
  const mo = typeof payload.description === "string" ? payload.description : "";
  let ai;
  if (c[52] !== mo) ai = mo.split(`
`).filter(ja).join(`
`).trim(), c[52] = mo, c[53] = ai;else ai = c[53];
  let at = ai,
    ln;
  gu: {
    if (W === null) {
      ln = node_2;
      break gu;
    }
    if (W.kind === "withheld") {
      ln = W.marker;
      break gu;
    }
    let lt;
    if (c[54] !== W.text) lt = Wi(W.text).replace(/\s+/g, " ").trim(), c[54] = W.text, c[55] = lt;else lt = c[55];
    ln = lt;
  }
  let et = ln,
    ct = payload.isMcp ? Math.max(10, contentColumns_3 - 2) : contentColumns_3;
  const lt = payload.roomyDescription === !0;
  let li;
  if (c[56] !== lt || c[57] !== u) li = Ir(lt, u), c[56] = lt, c[57] = u, c[58] = li;else li = c[58];
  let fo = li,
    ci;
  if (c[59] !== fo || c[60] !== ct || c[61] !== at) ci = oXn(at, ct, fo), c[59] = fo, c[60] = ct, c[61] = at, c[62] = ci;else ci = c[62];
  let Ue = ci,
    ui;
  if (c[63] !== ct || c[64] !== at) ui = oXn(at, ct, Number.MAX_SAFE_INTEGER), c[63] = ct, c[64] = at, c[65] = ui;else ui = c[65];
  let cn = ui,
    active = cn !== Ue,
    [un, Ya] = y(!1),
    chord_2 = Fa("app:toggleTranscript", "Global", "ctrl+o"),
    pi;
  if (c[66] === S) pi = [{
    action: "app:toggleTranscript",
    run: () => Ya(Ba)
  }], c[66] = pi;else pi = c[66];
  let bindings = pi,
    mi;
  if (c[67] === S) mi = {
    label: "Yes",
    value: "yes",
    feedbackConfig: {
      type: "accept"
    }
  }, c[67] = mi;else mi = c[67];
  let fi = mi,
    gi;
  if (c[68] === S) gi = {
    label: "No",
    value: "no",
    feedbackConfig: {
      type: "reject"
    }
  }, c[68] = gi;else gi = c[68];
  let hi = gi,
    At;
  if (c[69] !== J || c[70] !== ce || c[71] !== hideIndexes_2) {
    At = hideIndexes_2 ? [hi, fi] : [fi];
    if (J !== null) {
      if (typeof J.node === "string") {
        let Re;
        if (c[73] !== J.node) Re = {
          label: J.node,
          value: "yes-dont-ask-again"
        }, c[73] = J.node, c[74] = Re;else Re = c[74];
        At.push(Re);
      }
    }
    if (ce !== null) {
      if (typeof ce.node === "string") {
        let Re;
        if (c[75] !== ce.node) Re = {
          label: ce.node,
          description: description,
          value: "yes-enable-auto-mode"
        }, c[75] = ce.node, c[76] = Re;else Re = c[76];
        At.push(Re);
      }
    }
    if (!hideIndexes_2) At.push(hi);
    c[69] = J, c[70] = ce, c[71] = hideIndexes_2, c[72] = At;
  } else At = c[72];
  let options_3 = At,
    toolName_4;
  if (c[77] !== payload.toolName) toolName_4 = On(payload.toolName), c[77] = payload.toolName, c[78] = toolName_4;else toolName_4 = c[78];
  let yi;
  if (c[79] !== payload.isMcp || c[80] !== toolName_4) yi = {
    toolName: toolName_4,
    isMcp: payload.isMcp
  }, c[79] = payload.isMcp, c[80] = toolName_4, c[81] = yi;else yi = c[81];
  let toolAnalyticsContext_2 = yi,
    pe = payload.toolUseRenderFailed === !0 ? void 0 : payload.card;
  if (pe !== void 0 && [pe.question, ...pe.lines, ...pe.values].reduce($a, 0) <= eo) {
    let bi = payload.requestSource === void 0 && !pe.question.includes(`
`) && ie(pe.question) <= Math.min(contentColumns_3, u.columns - 2);
    const question = bi ? void 0 : pe.question;
    let pn;
    if (c[82] !== pe || c[83] !== k || c[84] !== question || c[85] !== u.columns) pn = no({
      ...pe,
      question: question
    }, Math.min(k, u.columns - 6) - to), c[82] = pe, c[83] = k, c[84] = question, c[85] = u.columns, c[86] = pn;else pn = c[86];
    let card_2 = pn;
    const title = bi ? pe.question : payload.userFacingName;
    let children_13;
    if (c[87] !== card_2) children_13 = card_2.rows.length > 0 && e(Ol, {
      children: e(Zt, {
        card: card_2
      })
    }), c[87] = card_2, c[88] = children_13;else children_13 = c[88];
    let Be;
    if (c[89] !== children_13) Be = e(s, {
      ref: ref,
      width: "100%",
      flexDirection: "column",
      children: children_13
    }), c[89] = children_13, c[90] = Be;else Be = c[90];
    const marginTop = card_2.rows.length === 0 ? 1 : 0;
    let children_14;
    if (c[91] !== onCancel_3 || c[92] !== onSelect_2 || c[93] !== hideIndexes_2 || c[94] !== options_3 || c[95] !== payload.requestSource || c[96] !== ne.attempts || c[97] !== defaultFocusValue_3 || c[98] !== toolAnalyticsContext_2) children_14 = e(jQ, {
      question: null,
      options: options_3,
      defaultFocusValue: defaultFocusValue_3,
      hideIndexes: hideIndexes_2,
      onSelect: onSelect_2,
      onCancel: onCancel_3,
      toolAnalyticsContext: toolAnalyticsContext_2,
      requestSource: payload.requestSource
    }, ne.attempts), c[91] = onCancel_3, c[92] = onSelect_2, c[93] = hideIndexes_2, c[94] = options_3, c[95] = payload.requestSource, c[96] = ne.attempts, c[97] = defaultFocusValue_3, c[98] = toolAnalyticsContext_2, c[99] = children_14;else children_14 = c[99];
    let Ne;
    if (c[100] !== marginTop || c[101] !== children_14) Ne = e(s, {
      paddingX: 1,
      marginTop: marginTop,
      children: children_14
    }), c[100] = marginTop, c[101] = children_14, c[102] = Ne;else Ne = c[102];
    let tt;
    if (c[103] !== payload.requestSource || c[104] !== title || c[105] !== Be || c[106] !== Ne) tt = r(Ea, {
      title: title,
      innerPaddingX: 0,
      requestSource: payload.requestSource,
      children: [Be, Ne]
    }), c[103] = payload.requestSource, c[104] = title, c[105] = Be, c[106] = Ne, c[107] = tt;else tt = c[107];
    return tt;
  }
  let ft;
  if (c[108] !== Ue || c[109] !== un || c[110] !== active || c[111] !== chord_2 || c[112] !== cn || c[113] !== entries_2?.length || c[114] !== payload.isMcp || c[115] !== payload.userFacingName) ft = Ue !== "" && r(s, {
    width: "100%",
    flexDirection: "column",
    paddingX: 1,
    marginTop: entries_2?.length === 0 ? 1 : 0,
    marginBottom: payload.isMcp ? 1 : 0,
    children: [payload.isMcp && r(n, {
      italic: !0,
      wrap: "truncate-end",
      children: ["About the ", e(n, {
        bold: !0,
        children: payload.userFacingName
      }), " Tool:"]
    }), e(s, {
      borderStyle: "single",
      borderLeft: !0,
      borderRight: !1,
      borderTop: !1,
      borderBottom: !1,
      borderDimColor: !0,
      paddingLeft: 1,
      children: e(n, {
        dimColor: !0,
        italic: payload.isMcp,
        children: un ? cn : Ue
      })
    }), active && e(n, {
      dimColor: !0,
      children: e(q, {
        chord: chord_2,
        action: un ? "collapse description" : "expand description",
        parens: !0,
        format: {
          keyCase: "lower"
        }
      })
    })]
  }), c[108] = Ue, c[109] = un, c[110] = active, c[111] = chord_2, c[112] = cn, c[113] = entries_2?.length, c[114] = payload.isMcp, c[115] = payload.userFacingName, c[116] = ft;else ft = c[116];
  let mn = ft;
  const requestSource_2 = payload.requestSource;
  let je;
  if (c[117] !== Ue || c[118] !== mn || c[119] !== entries_2?.length || c[120] !== payload.hasMcpSuffix || c[121] !== payload.isMcp || c[122] !== payload.userFacingName) je = payload.isMcp ? r(s, {
    flexDirection: "row",
    paddingX: 1,
    marginBottom: entries_2?.length === 0 && Ue === "" ? 1 : 0,
    children: [e(n, {
      wrap: "truncate-end",
      children: r(n, {
        bold: !0,
        children: [payload.userFacingName, " Tool:"]
      })
    }), payload.hasMcpSuffix ? e(s, {
      flexShrink: 0,
      children: e(n, {
        dimColor: !0,
        children: " (MCP)"
      })
    }) : null]
  }) : mn, c[117] = Ue, c[118] = mn, c[119] = entries_2?.length, c[120] = payload.hasMcpSuffix, c[121] = payload.isMcp, c[122] = payload.userFacingName, c[123] = je;else je = c[123];
  let Ae;
  if (c[124] !== et || c[125] !== contentColumns_3 || c[126] !== entries_2 || c[127] !== payload.hasMcpSuffix || c[128] !== payload.userFacingName) Ae = (entries_2 === null || entries_2.length > 0) && e(Ol, {
    children: entries_2 !== null ? e(ao, {
      entries: entries_2,
      contentColumns: contentColumns_3
    }) : e(Fi, {
      multiline: typeof et === "string" && NS(`${payload.userFacingName}(${et})`),
      children: r(n, {
        children: [payload.userFacingName, et != null && et !== "" && r(Q, {
          children: ["(", et, ")"]
        }), payload.hasMcpSuffix ? e(n, {
          dimColor: !0,
          children: " (MCP)"
        }) : ""]
      })
    })
  }), c[124] = et, c[125] = contentColumns_3, c[126] = entries_2, c[127] = payload.hasMcpSuffix, c[128] = payload.userFacingName, c[129] = Ae;else Ae = c[129];
  const Be = payload.isMcp && mn;
  let $e;
  if (c[130] !== je || c[131] !== Ae || c[132] !== Be) $e = r(s, {
    ref: ref,
    width: "100%",
    flexDirection: "column",
    children: [je, Ae, Be]
  }), c[130] = je, c[131] = Ae, c[132] = Be, c[133] = $e;else $e = c[133];
  let _e;
  if (c[134] !== payload.permissionResult) _e = e(bk, {
    permissionResult: payload.permissionResult,
    toolType: "tool"
  }), c[134] = payload.permissionResult, c[135] = _e;else _e = c[135];
  let Ne;
  if (c[136] !== onCancel_3 || c[137] !== onSelect_2 || c[138] !== hideIndexes_2 || c[139] !== options_3 || c[140] !== payload.requestSource || c[141] !== ne.attempts || c[142] !== defaultFocusValue_3 || c[143] !== toolAnalyticsContext_2) Ne = e(jQ, {
    options: options_3,
    defaultFocusValue: defaultFocusValue_3,
    hideIndexes: hideIndexes_2,
    onSelect: onSelect_2,
    onCancel: onCancel_3,
    toolAnalyticsContext: toolAnalyticsContext_2,
    requestSource: payload.requestSource
  }, ne.attempts), c[136] = onCancel_3, c[137] = onSelect_2, c[138] = hideIndexes_2, c[139] = options_3, c[140] = payload.requestSource, c[141] = ne.attempts, c[142] = defaultFocusValue_3, c[143] = toolAnalyticsContext_2, c[144] = Ne;else Ne = c[144];
  let tt;
  if (c[145] !== _e || c[146] !== Ne) tt = r(s, {
    flexDirection: "column",
    paddingX: 1,
    children: [_e, Ne]
  }), c[145] = _e, c[146] = Ne, c[147] = tt;else tt = c[147];
  let children_15;
  if (c[148] !== payload.requestSource || c[149] !== $e || c[150] !== tt) children_15 = r(Ea, {
    title: "Tool use",
    innerPaddingX: 0,
    requestSource: requestSource_2,
    children: [$e, tt]
  }), c[148] = payload.requestSource, c[149] = $e, c[150] = tt, c[151] = children_15;else children_15 = c[151];
  let ki;
  if (c[152] !== active || c[153] !== children_15) ki = e(fE, {
    bindings: bindings,
    active: active,
    flexDirection: "column",
    children: children_15
  }), c[152] = active, c[153] = children_15, c[154] = ki;else ki = c[154];
  return ki;
}
export { tLe, gCe, Jet, sZn, CYo, A2e, bzt, Szt, Cre, kF, iZn, Fi, is as _k, RYo, _0, hCe, G_n, aZn, qGr, V_n, lZn, wzt, bk, description as q_n, vzt, kzt, yCe, nLe, jQ, K_n, KGr };