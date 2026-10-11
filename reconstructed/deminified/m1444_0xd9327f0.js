// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { we } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { P } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { b } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { I, Gt } from "B:/~BUN/root/chunk-y04k89s2.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { Pce, On } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { Zn } from "B:/~BUN/root/chunk-1x7a47hz.js";
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { pe } from "B:/~BUN/root/chunk-nf4z9ga7.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { Uv } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { YR, ZUt, Jn, Mn } from "B:/~BUN/root/chunk-1f9marcm.js";
import { g2 } from "B:/~BUN/root/chunk-tsjnk8ma.js";
import { xa } from "B:/~BUN/root/chunk-qqgpf856.js";
import { ie, Wu, ot, rA, YN, ohn } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { s, n, Jr, _t, Vs, Xi } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { Z2, U8r } from "B:/~BUN/root/chunk-trcn2d68.js";
import { Yt } from "B:/~BUN/root/chunk-jdm3bsma.js";
import { GL } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { BLt, zs, S6, Za, DR, ig, l1, ZHe, Ule, TCe, WLt, ai, T_, fGn, uN, Fs } from "B:/~BUN/root/chunk-3hjtxzqy.js";
import { W, dn } from "B:/~BUN/root/chunk-h23911wn.js";
import { ve } from "B:/~BUN/root/chunk-cxqcvpm0.js";
import { Wt } from "B:/~BUN/root/chunk-r2yrqvry.js";
import { ii as selectedValue, Fe } from "B:/~BUN/root/chunk-bt71g93n.js";
import { Oc } from "B:/~BUN/root/chunk-q52x4j16.js";
import { F } from "B:/~BUN/root/chunk-acd2tycn.js";
import { ye } from "B:/~BUN/root/chunk-41008fhm.js";
import { Zr } from "B:/~BUN/root/chunk-cpg4rjtx.js";
import { GC } from "B:/~BUN/root/chunk-txdt16r9.js";
import { SJe } from "B:/~BUN/root/chunk-kxqh0yc7.js";
import { Rn, aln } from "B:/~BUN/root/chunk-d36ctpgs.js";
import { Zw, iet } from "B:/~BUN/root/chunk-0mn860zt.js";
import { yp } from "B:/~BUN/root/chunk-3jyp964r.js";
import { ZS } from "B:/~BUN/root/chunk-255yrpq9.js";
import { hwn } from "B:/~BUN/root/chunk-qzz7wd45.js";
import { sIe } from "B:/~BUN/root/chunk-q87kdcms.js";
import { JD } from "B:/~BUN/root/chunk-5dn8wsxz.js";
import { xi } from "B:/~BUN/root/chunk-bwmvn5s6.js";
import { q_ } from "B:/~BUN/root/chunk-y1h4hnnm.js";
import { Ba } from "B:/~BUN/root/chunk-vf07m8qt.js";
import { V, e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { MH } from "B:/~BUN/root/chunk-evn8cf3v.js";
import { Upr } from "B:/~BUN/root/chunk-mngsveaw.js";
import { se, R, X, T, g, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
import { at } from "B:/~BUN/root/chunk-2h7x7bdj.js";
import { $Re, SLo, wLo, m$r } from "B:/~BUN/root/chunk-6pbxcdg3.js";
import { Us } from "B:/~BUN/root/chunk-w5bkq1td.js";
import { lp } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { qne } from "B:/~BUN/root/chunk-nfc48pcb.js";
import { L } from "B:/~BUN/root/chunk-z1enakv9.js";
import { S, hn } from "B:/~BUN/root/chunk-yv67t8hr.js";
function zi(t) {
  let l = w(4),
    {
      multiline: multiline,
      children: children
    } = t;
  if (_t()) {
    let c;
    if (l[0] !== children) c = e(s, {
      "aria-role": "blockquote",
      children: children
    }), l[0] = children, l[1] = c;else c = l[1];
    return c;
  }
  if (!multiline) {
    return children;
  }
  let c;
  if (l[2] !== children) c = e(s, {
    borderStyle: "single",
    borderLeft: !0,
    borderRight: !1,
    borderTop: !1,
    borderBottom: !1,
    borderDimColor: !0,
    paddingLeft: 1,
    children: children
  }), l[2] = children, l[3] = c;else c = l[3];
  return c;
}
function cn(t) {
  return aln(t);
}
function dr(t) {
  let u = [];
  for (let o of t) {
    if (o === null || typeof o !== "object") continue;
    if (o.type !== "addRules") {
      u.push(o);
      continue;
    }
    if (!Array.isArray(o.rules)) continue;
    let rules = o.rules.filter(item => item !== null && typeof item === "object" && typeof item.toolName === "string" && (item.ruleContent === void 0 || typeof item.ruleContent === "string") && (item.ruleContent === void 0 ? ze(item.toolName) : cn({
      toolName: item.toolName,
      ruleContent: item.ruleContent
    })));
    if (rules.length > 0) u.push({
      ...o,
      rules: rules
    });
  }
  return u;
}
var abe = 8,
  oue = 64,
  d1e = 160,
  pr = new Set(["localSettings", "session"]);
function au(t, u, o) {
  let l = dr(t).filter(item => {
      if (!u.has(item.type)) return !1;
      if ((item.type === "addRules" || item.type === "replaceRules" || item.type === "removeRules") && item.behavior !== "allow") return !1;
      return item.destination !== void 0 && pr.has(item.destination);
    }),
    c = [];
  for (let D of l) {
    if (D.type !== "addRules") {
      if (D.type === "addDirectories") {
        if (!Array.isArray(D.directories)) continue;
        let directories = D.directories.filter(item => typeof item === "string" && item.trim() !== "" && ie(item) > 0 && Ule(item));
        if (directories.length === 0) continue;
        c.push({
          ...D,
          directories: directories
        });
        continue;
      }
      c.push(D);
      continue;
    }
    if (D.rules === void 0) continue;
    let a = D.rules.filter(item => Ule(Mn({
        toolName: item.toolName,
        ...(item.ruleContent !== void 0 && {
          ruleContent: item.ruleContent
        })
      }))),
      rules_2 = o === void 0 ? a : a.filter(o);
    if (rules_2.length > 0) c.push({
      ...D,
      rules: rules_2
    });
  }
  return c;
}
var mbn = new Set(["addRules", "addDirectories"]),
  Y3r = new Set(["addRules"]);
function Fr(t) {
  return t.trim() !== t || t === "" || S6(t) || zs(t) !== t || /[\t\n]/.test(t) || ie(t) === 0;
}
function ze(toolName) {
  if (toolName === $Re) return !1;
  if (Fr(toolName)) return !1;
  let u = Jn(Mn({
    toolName: toolName
  }));
  if (u.toolName !== toolName || u.ruleContent !== void 0) return !1;
  if (YR(toolName)) return !1;
  let o = Us(toolName);
  if (o !== null && !o.toolName) return !1;
  return !0;
}
function lu(t) {
  if (typeof t !== "string" || t.trim() === "" || ie(t) === 0 || !Ule(t)) return null;
  return wLo(t);
}
function pn(t) {
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
function fPe(t) {
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
    children: [t.slice(0, -1).map((u, index) => r(n, {
      children: [e(n, {
        bold: !0,
        children: u
      }), ",", " "]
    }, index)), "and ", e(n, {
      bold: !0,
      children: t.at(-1)
    })]
  });
}
function eht(t) {
  return ZUt((t?.replace(/\/\*\*$/, "") || "").replace(/^\.\//, "").replace(/^\/\//, "/"));
}
function Fn(t) {
  if (!t) return "";
  return t.endsWith(":*") || t.endsWith(" *") ? t.slice(0, -2) : t;
}
function tht(t, u, o) {
  if (t.toolName === u) {
    let l = Fn(t.ruleContent);
    if (!l) return !1;
    return Boolean(o ? o(l) : l);
  }
  if (t.toolName === at) return Boolean(eht(t.ruleContent));
  return !1;
}
function l5(t) {
  return t !== void 0 && zs(t) === t && !/[\t\n\u2028\u2029]/.test(t) && !S6(t) ? SLo(t) : void 0;
}
function ZI(t) {
  return fGn(t);
}
function gbn(t, u, o, children_2) {
  if (!Array.isArray(t)) return null;
  if (t.length > oue) return null;
  if (t.some(item => item === null || typeof item !== "object")) return null;
  let c = t.filter(item => item.type === "addRules").flatMap(item => item.rules || []),
    D = t.filter(item => item.type === "addDirectories").flatMap(item => Array.isArray(item.directories) ? item.directories : []);
  if (c.some(item => item === null || typeof item !== "object" || typeof item.toolName !== "string" || item.ruleContent !== void 0 && typeof item.ruleContent !== "string")) return null;
  if (c.length + D.length > abe) return null;
  let a = c.filter(item => item.toolName === at),
    p = c.filter(item => item.toolName === u);
  if (D.some(item => typeof item !== "string" || item.trim() === "" || ie(item) === 0 || !Ule(item))) return null;
  let C = L(D),
    E = L(a.flatMap(item => item.ruleContent && eht(item.ruleContent) ? item.ruleContent : []));
  if (E.some(item => !Ule(item))) return null;
  let y = L(p.flatMap(item => {
    if (!item.ruleContent) return [];
    return Fn(item.ruleContent) ? [item.ruleContent] : [];
  }));
  if (y.some(item => !Ule(item))) return null;
  let x = TCe(y, m => {
      let M = Fn(m) || m;
      return ZI(o ? o(M) : M);
    }),
    k = TCe([...E, ...C], m => E.includes(m) ? ZI(eht(m)) : ZI(m)),
    h = k.slice(0, E.length),
    B = k.slice(E.length);
  if (ie([...x, ...h, ...B].join(" and ")) > d1e) return null;
  let U = C.length > 0,
    Y = h.length > 0,
    j = x.length > 0;
  if (Y && !U && !j) return r(n, {
    children: ["Yes, allow reading from ", fPe(h), " from this project"]
  });
  if (U && !Y && !j) return r(n, {
    children: ["Yes, and always allow access to ", fPe(B), " from this project"]
  });
  if (j && !U && !Y) return r(n, {
    children: ["Yes, and don't ask again for ", pn(x), " commands", " ", children_2 === void 0 ? r(V, {
      children: ["in", " ", e(n, {
        bold: !0,
        children: Rn(we())
      })]
    }) : r(V, {
      children: ["on ", e(n, {
        bold: !0,
        children: children_2
      })]
    })]
  });
  if ((U || Y) && !j) {
    let m = [...B, ...h];
    return r(n, {
      children: ["Yes, and always allow access to ", fPe(m), " from this project"]
    });
  }
  if ((U || Y) && j) {
    let m = [...B, ...h];
    if (m.length === 1 && x.length === 1) return r(n, {
      children: ["Yes, and allow access to ", fPe(m), " and", " ", pn(x), " commands"]
    });
    return r(n, {
      children: ["Yes, and allow ", fPe(m), " access and", " ", pn(x), " commands"]
    });
  }
  return null;
}
var Ee = Symbol("ConsentRow mint token");
class le {
  #e = !0;
  node;
  applies;
  constructor(t, u, o) {
    if (t !== Ee) throw Error("ConsentRow may only be constructed by the consentRows factories");
    this.node = u, this.applies = o, Object.freeze(this);
  }
  static is(t) {
    return typeof t === "object" && t !== null && #e in t;
  }
}
var is = le.is,
  X3r = f(() => lp(is));
function Xe(t) {
  if (t.length > oue) return null;
  let u = [];
  for (let o of t) {
    let l;
    try {
      l = GL().safeParse(o);
    } catch {
      return null;
    }
    if (!l.success) return null;
    u.push(l.data);
  }
  return m$r(u);
}
function mA(t, u) {
  if (!Array.isArray(t)) return null;
  let o;
  try {
    o = t.length;
  } catch {
    return null;
  }
  if (typeof o !== "number" || !Number.isSafeInteger(o) || o < 0 || o > oue) return null;
  let l = 0,
    c = [];
  for (let E = 0; E < o; E++) try {
    let y = t[E],
      x = y !== null && typeof y === "object" ? {
        ...y
      } : y,
      k = !1;
    if (x !== null && typeof x === "object") {
      let h = x;
      for (let B of ["rules", "directories"]) {
        let A = h[B];
        if (!Array.isArray(A)) continue;
        let U = A.length;
        if (typeof U !== "number" || !Number.isSafeInteger(U) || U < 0) {
          k = !0;
          break;
        }
        if (l += U, l > oue * abe) return null;
        let Y = [];
        for (let j = 0; j < U; j++) Y.push(A[j]);
        h[B] = Y;
      }
    }
    if (k) continue;
    c.push(x);
  } catch {}
  let D = [];
  for (let E of c) {
    let y;
    try {
      y = GL().safeParse(E);
    } catch {
      continue;
    }
    if (y.success) D.push(y.data);
  }
  if (D.length === 0) return null;
  let a = au(D, u.displayedTypes, u.labelPredicate);
  if (a.length === 0) return null;
  let p = m$r(a),
    C = u.renderLabel(p);
  if (C == null || typeof C === "boolean" || C === "") return null;
  return new le(Ee, C, p);
}
var fr = {
  default: "default (ask each time)",
  acceptEdits: "accept edits (auto-approve file edits and common file commands)",
  auto: "auto (no routine prompts; a reviewer model screens actions)",
  dontAsk: "don't ask (auto-deny anything that would prompt)",
  plan: "plan mode (research and propose changes without making them)",
  bypassPermissions: "BYPASS PERMISSIONS (no further prompts)"
};
function sue(mode, u) {
  if (mode === "bypassPermissions" && u?.isBypassPermissionsModeAvailable === !1) return null;
  let o = Xe([{
    type: "setMode",
    destination: "session",
    mode: mode
  }]);
  if (o === null) throw Error("setModeRow: schema rejected a designed setMode update");
  if (u?.labelVariant === "plan-keep-context") {
    let children_3 = mode === "acceptEdits" ? "Yes, auto-accept edits" : mode === "default" ? "Yes, manually approve edits" : null;
    if (children_3 !== null) return new le(Ee, e(n, {
      children: children_3
    }), o);
  }
  return new le(Ee, r(n, {
    children: ["Yes, and switch to ", e(n, {
      bold: !0,
      children: fr[mode]
    }), " for this session"]
  }), o);
}
function Izt(t) {
  if (!Array.isArray(t)) return null;
  let u;
  try {
    u = t.length;
  } catch {
    return null;
  }
  if (typeof u !== "number" || !Number.isSafeInteger(u) || u < 0 || u > oue) return null;
  let o = [];
  for (let a = 0; a < u; a++) try {
    let p = t[a],
      C = lu(p);
    if (C !== null) o.push(C);
  } catch {}
  let directories_2 = L(o);
  if (directories_2.length === 0) return null;
  if (directories_2.length > abe) return null;
  let c = uN(directories_2, a => fGn(a));
  if (ie(c.join(", ")) > d1e) return null;
  let D = Xe([{
    type: "addDirectories",
    destination: "session",
    directories: directories_2
  }]);
  if (D === null) return null;
  return new le(Ee, r(n, {
    children: ["Yes, and always allow access to ", e(n, {
      bold: !0,
      children: c.join(", ")
    }), " for this session"]
  }), D);
}
function hbn(t, u, toolName_2) {
  if (typeof t !== "string" || l5(t) !== t) return null;
  if (typeof u !== "string") return null;
  let ruleContent = u.trim();
  if (ruleContent === "" || l5(ruleContent) !== ruleContent) return null;
  if (ruleContent === "*") {
    if (!ze(toolName_2)) return null;
    let D = Xe([{
      type: "addRules",
      rules: [{
        toolName: toolName_2
      }],
      behavior: "allow",
      destination: "localSettings"
    }]);
    if (D === null) return null;
    return new le(Ee, `Yes, and don\u2019t ask again for any ${toolName_2} command`, D);
  }
  if (!ze(toolName_2) || !cn({
    toolName: toolName_2,
    ruleContent: ruleContent
  })) return null;
  let c = Xe([{
    type: "addRules",
    rules: [{
      toolName: toolName_2,
      ruleContent: ruleContent
    }],
    behavior: "allow",
    destination: "localSettings"
  }]);
  if (c === null) return null;
  return new le(Ee, `Yes, and don\u2019t ask again for: ${ruleContent}`, c);
}
var TJn = {
    workflow: "Yes, and switch to auto mode",
    "exit-plan-resume": "Yes, and use auto mode"
  },
  mr = (() => {
    let t = Xe([]);
    if (t === null) throw Error("NO_DISPLAYED_UPDATES: empty intake rejected");
    return t;
  })();
function Ozt(t) {
  return new le(Ee, TJn[t], mr);
}
function ybn(t, ...u) {
  let o = [t, ...u];
  for (let D of o) if (!is(D)) throw Error("combineRows accepts only constructor-produced ConsentRows");
  let l = o.flatMap(item => [...item.applies]);
  if (l.length > oue) throw Error("combineRows: combined updates exceed the display intake cap");
  let c = Xe(l);
  if (c === null) throw Error("combineRows: schema rejected already-minted updates");
  return new le(Ee, e(n, {
    children: o.map((item, index) => r(n, {
      children: [index > 0 ? "; " : "", item.node]
    }, index))
  }), c);
}
function fn({
  onlyFirst = !1
} = {}) {
  let o = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?(?:\\u0007|\\u001B\\u005C|\\u009C))", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|");
  return new RegExp(o, onlyFirst ? void 0 : "g");
}
var Cr = fn();
function lt(t) {
  if (typeof t !== "string") throw TypeError(`Expected a \`string\`, got \`${typeof t}\``);
  return t.replace(Cr, "");
}
var cu = () => /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE89\uDE8F-\uDEC2\uDEC6\uDECE-\uDEDC\uDEDF-\uDEE9]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
var Er = new Intl.Segmenter(),
  gr = /^\p{Default_Ignorable_Code_Point}$/u;
function $e(t, u = {}) {
  if (typeof t !== "string" || t.length === 0) return 0;
  let {
    ambiguousIsNarrow = !0,
    countAnsiEscapeCodes = !1
  } = u;
  if (!countAnsiEscapeCodes) t = lt(t);
  if (t.length === 0) return 0;
  let c = 0,
    D = {
      ambiguousAsWide: !ambiguousIsNarrow
    };
  for (let {
    segment: segment
  } of Er.segment(t)) {
    let p = segment.codePointAt(0);
    if (p <= 31 || p >= 127 && p <= 159) continue;
    if (p >= 8203 && p <= 8207 || p === 65279) continue;
    if (p >= 768 && p <= 879 || p >= 6832 && p <= 6911 || p >= 7616 && p <= 7679 || p >= 8400 && p <= 8447 || p >= 65056 && p <= 65071) continue;
    if (p >= 55296 && p <= 57343) continue;
    if (p >= 65024 && p <= 65039) continue;
    if (gr.test(segment)) continue;
    if (cu().test(segment)) {
      c += 2;
      continue;
    }
    c += U8r(p, D);
  }
  return c;
}
var wt = new Set(["\x1B", "\x9B"]),
  hr = 39,
  Cn = "\x07",
  Fu = "[",
  yr = "]",
  fu = "m",
  Rt = `${yr}8;;`,
  du = t => `${wt.values().next().value}${Fu}${t}${fu}`,
  pu = t => `${wt.values().next().value}${Rt}${t}${Cn}`,
  br = t => t.split(" ").map(item => $e(item)),
  mn = (t, u, o) => {
    let l = [...u],
      c = !1,
      D = !1,
      a = $e(lt(t.at(-1)));
    for (let [p, C] of l.entries()) {
      let E = $e(C);
      if (a + E <= o) t[t.length - 1] += C;else t.push(C), a = 0;
      if (wt.has(C)) c = !0, D = l.slice(p + 1, p + 1 + Rt.length).join("") === Rt;
      if (c) {
        if (D) {
          if (C === Cn) c = !1, D = !1;
        } else if (C === fu) c = !1;
        continue;
      }
      if (a += E, a === o && p < l.length - 1) t.push(""), a = 0;
    }
    if (!a && t.at(-1).length > 0 && t.length > 1) t[t.length - 2] += t.pop();
  },
  Ar = t => {
    let u = t.split(" "),
      o = u.length;
    while (o > 0) {
      if ($e(u[o - 1]) > 0) break;
      o--;
    }
    if (o === u.length) return t;
    return u.slice(0, o).join(" ") + u.slice(o).join("");
  },
  Br = (t, u, o = {}) => {
    if (o.trim !== !1 && t.trim() === "") return "";
    let l = "",
      c,
      D,
      a = br(t),
      p = [""];
    for (let [x, k] of t.split(" ").entries()) {
      if (o.trim !== !1) p[p.length - 1] = p.at(-1).trimStart();
      let h = $e(p.at(-1));
      if (x !== 0) {
        if (h >= u && (o.wordWrap === !1 || o.trim === !1)) p.push(""), h = 0;
        if (h > 0 || o.trim === !1) p[p.length - 1] += " ", h++;
      }
      if (o.hard && a[x] > u) {
        let B = u - h,
          A = 1 + Math.floor((a[x] - B - 1) / u);
        if (Math.floor((a[x] - 1) / u) < A) p.push("");
        mn(p, k, u);
        continue;
      }
      if (h + a[x] > u && h > 0 && a[x] > 0) {
        if (o.wordWrap === !1 && h < u) {
          mn(p, k, u);
          continue;
        }
        p.push("");
      }
      if (h + a[x] > u && o.wordWrap === !1) {
        mn(p, k, u);
        continue;
      }
      p[p.length - 1] += k;
    }
    if (o.trim !== !1) p = p.map(item => Ar(item));
    let C = p.join(`
`),
      E = [...C],
      y = 0;
    for (let [x, k] of E.entries()) {
      if (l += k, wt.has(k)) {
        let {
          groups: groups
        } = new RegExp(`(?:\\${Fu}(?<code>\\d+)m|\\${Rt}(?<uri>.*)${Cn})`).exec(C.slice(y)) || {
          groups: {}
        };
        if (groups.code !== void 0) {
          let A = Number.parseFloat(groups.code);
          c = A === hr ? void 0 : A;
        } else if (groups.uri !== void 0) D = groups.uri.length === 0 ? void 0 : groups.uri;
      }
      let h = Z2.codes.get(Number(c));
      if (E[x + 1] === `
`) {
        if (D) l += pu("");
        if (c && h) l += du(h);
      } else if (k === `
`) {
        if (c && h) l += du(c);
        if (D) l += pu(D);
      }
      y += k.length;
    }
    return l;
  };
function Ze(t, u, o) {
  return String(t).normalize().replaceAll(`\r
`, `
`).split(`
`).map(item => Br(item, u, o)).join(`
`);
}
N();
N();
function Mr(G) {
  return G + 1;
}
function Tt(t) {
  let D = w(18),
    {
      permissionResult: permissionResult
    } = t,
    o = permissionResult?.behavior === "ask" ? permissionResult.denialLimitFallback?.deadlineEpochMs ?? permissionResult.autoDenyWindow?.deadlineEpochMs : void 0,
    l = _t(),
    c = Yt(),
    clockAt;
  if (D[0] !== c) clockAt = c.now(), D[0] = c, D[1] = clockAt;else clockAt = D[1];
  let epochAt;
  if (D[2] === S) epochAt = Date.now(), D[2] = epochAt;else epochAt = D[2];
  let C;
  if (D[3] !== clockAt) C = {
    clockAt: clockAt,
    epochAt: epochAt
  }, D[3] = clockAt, D[4] = C;else C = D[4];
  let E = C,
    y;
  if (D[5] !== E.clockAt || D[6] !== E.epochAt || D[7] !== c) y = () => E.epochAt + (c.now() - E.clockAt), D[5] = E.clockAt, D[6] = E.epochAt, D[7] = c, D[8] = y;else y = D[8];
  let x = y,
    [, k] = g(0),
    h;
  if (D[9] === S) h = () => k(Mr), D[9] = h;else h = D[9];
  if (Vs(h, o !== void 0 && !l ? 1000 : null), o === void 0) {
    return null;
  }
  if (l) {
    let B = Math.max(0, o - x());
    let A;
    if (D[10] !== B) {
      let U = Math.round(B / 60000);
      let Y = Math.max(1, Math.round(B / 1000));
      A = B >= 60000 ? `about ${U} ${I(U, "minute")}` : `about ${Y} ${I(Y, "second")}`;
      D[10] = B, D[11] = A;
    } else A = D[11];
    let j = A;
    const children_4 = `${Uv} Claude Code will automatically deny this request in ${j}, to avoid blocking progress on an unattended session`;
    let M;
    if (D[12] !== children_4) M = e(s, {
      marginBottom: 1,
      children: e(n, {
        color: "warning",
        children: children_4
      })
    }), D[12] = children_4, D[13] = M;else M = D[13];
    return M;
  }
  let q = Math.max(0, o - x()),
    re = Math.floor(q / 60000),
    H = Math.floor(q % 60000 / 1000);
  const A = String(H);
  let m;
  if (D[14] !== A) m = A.padStart(2, "0"), D[14] = A, D[15] = m;else m = D[15];
  let K = `${re}:${m}`;
  const children_5 = `${Uv} Claude Code will automatically deny this request in ${K}, to avoid blocking progress on an unattended session`;
  let O;
  if (D[16] !== children_5) O = e(s, {
    marginBottom: 1,
    children: e(n, {
      color: "warning",
      children: children_5
    })
  }), D[16] = children_5, D[17] = O;else O = D[17];
  return O;
}
function Ur(bt) {
  return bt.toolPermissionContext.mode;
}
function jr(At, children_6) {
  return e(zi, {
    multiline: DR(At),
    children: children_6
  });
}
function _r(t) {
  if (t?.startsWith("plugin")) return "plugin hooks.json";
  if (t?.startsWith("skill")) return "SKILL.md";
  return "settings.json";
}
function Lt(t) {
  if (t?.type === "rule" && t.rule.ruleBehavior === "ask") return t.rule;
  if (t?.type === "subcommandResults") {
    for (let u of t.reasons.values()) if (u.behavior === "ask") {
      let o = Lt(u.decisionReason);
      if (o) return o;
    }
  }
  return;
}
function _e(t, u, o) {
  if (!t) return null;
  let l = c => ai(c).text;
  if (t.type === "classifier") {
    if (t.classifier === "auto-mode") return {
      reasonString: `Auto mode classifier requires confirmation for this ${u}.
${l(t.reason)}`,
      configString: void 0,
      themeColor: "error"
    };
    return {
      reasonString: `Classifier ${pe.bold(l(t.classifier))} requires confirmation for this ${u}.
${l(t.reason)}`,
      configString: void 0
    };
  }
  if (t.type === "subcommandResults") {
    let rule = Lt(t);
    if (rule) return _e({
      type: "rule",
      rule: rule
    }, u, o);
    for (let D of t.reasons.values()) if (D.behavior === "ask" || D.behavior === "passthrough") {
      let a = _e(D.decisionReason, u, o);
      if (a) return a;
    }
  }
  switch (t.type) {
    case "rule":
      {
        let c = pe.bold(l(Mn(t.rule.ruleValue)));
        if (o === "auto" && t.rule.ruleBehavior === "ask" && t.rule.source !== "policySettings") return {
          reasonString: `Ask rule ${c} overrides auto mode for this ${u}.`,
          configString: "/permissions to let auto mode decide"
        };
        return {
          reasonString: `Permission rule ${c} requires confirmation for this ${u}.`,
          configString: t.rule.source === "policySettings" ? void 0 : "/permissions to update rules"
        };
      }
    case "hook":
      {
        let c = t.reason ? `:
${l(t.reason)}` : ".",
          D = t.hookSource ? ` ${pe.dim(`[${l(t.hookSource)}]`)}` : "";
        return {
          reasonString: `Hook ${pe.bold(l(t.hookName))} requires confirmation for this ${u}${c}${D}`,
          configString: `${_r(t.hookSource)} to update hooks`
        };
      }
    case "safetyCheck":
    case "other":
      return {
        reasonString: l(t.reason),
        configString: void 0
      };
    case "workingDir":
      return {
        reasonString: l(t.reason),
        configString: "/permissions to update rules"
      };
    default:
      return null;
  }
}
function Cb(t) {
  let C = w(27),
    {
      permissionResult: permissionResult_2,
      toolType: toolType
    } = t,
    l = W(Ur),
    c = permissionResult_2?.behavior === "ask" ? permissionResult_2.denialLimitFallback?.disclosure : void 0,
    D = _e(permissionResult_2?.decisionReason, toolType, l),
    a = c !== void 0 && c !== permissionResult_2?.decisionReason ? _e(c, toolType, l) : null,
    columns = ve().columns,
    E;
  if (C[0] !== c || C[1] !== columns) E = (y, x) => {
    if (c === void 0) {
      return y;
    }
    let k = x;
    let h = Math.max(20, columns - 8);
    let A = Ze(y, h, {
      trim: !0,
      hard: !0
    }).split(`
`).map(item => ot(item, h));
    if (A.length <= k) {
      return A.join(`
`);
    }
    let U = Math.max(1, k - 1);
    return A.slice(0, U).join(`
`) + `
\u2026 (+${A.length - U} more lines)`;
  }, C[0] = c, C[1] = columns, C[2] = E;else E = C[2];
  let Y = E,
    rule_2 = permissionResult_2?.behavior === "ask" ? permissionResult_2.matchedAskRule : void 0,
    m = rule_2 !== void 0 && Lt(permissionResult_2?.decisionReason) === void 0 ? _e({
      type: "rule",
      rule: rule_2
    }, toolType, l) : null,
    M;
  if (C[3] !== c || C[4] !== columns) M = q => {
    if (q === void 0 || c === void 0) {
      return 0;
    }
    let re = Math.max(20, columns - 8);
    return Gt(Ze(q, re, {
      trim: !0,
      hard: !0
    }), `
`) + 1;
  }, C[3] = c, C[4] = columns, C[5] = M;else M = C[5];
  let H = M,
    K = {
      consent: H(D?.reasonString),
      streak: H(a?.reasonString),
      askRule: H(m?.reasonString)
    },
    O = {
      consent: Math.min(K.consent, 4),
      streak: Math.min(K.streak, 4),
      askRule: Math.min(K.askRule, 4)
    },
    G = 12 - (O.consent + O.streak + O.askRule);
  for (const v of ["consent", "streak", "askRule"]) {
    if (G <= 0) {
      break;
    }
    let ee = Math.min(K[v] - O[v], G);
    O[v] = O[v] + ee, G = G - ee;
  }
  let z = D !== null && D !== void 0 ? Y(D.reasonString, O.consent) : void 0,
    te = a ? Y(a.reasonString, O.streak) : void 0,
    De = m ? Y(m.reasonString, O.askRule) : void 0,
    Be;
  if (C[6] !== permissionResult_2) Be = e(Tt, {
    permissionResult: permissionResult_2
  }), C[6] = permissionResult_2, C[7] = Be;else Be = C[7];
  let Z = Be;
  if (!D && !m && !a) {
    return Z;
  }
  let color = D?.themeColor ?? (permissionResult_2?.decisionReason?.type === "hook" && l === "auto" ? "warning" : void 0),
    fe = jr,
    Le;
  if (C[8] !== z || C[9] !== D || C[10] !== color) Le = D && fe(z ?? D.reasonString, color ? e(n, {
    color: color,
    children: z ?? D.reasonString
  }) : e(n, {
    children: e(Jr, {
      children: z ?? D.reasonString
    })
  })), C[8] = z, C[9] = D, C[10] = color, C[11] = Le;else Le = C[11];
  let ue;
  if (C[12] !== D) ue = D?.configString && e(n, {
    dimColor: !0,
    children: D.configString
  }), C[12] = D, C[13] = ue;else ue = C[13];
  let Q;
  if (C[14] !== m || C[15] !== De || C[16] !== D?.configString) Q = m && r(V, {
    children: [fe(De ?? m.reasonString, e(n, {
      children: e(Jr, {
        children: De ?? m.reasonString
      })
    })), m.configString && m.configString !== D?.configString && e(n, {
      dimColor: !0,
      children: m.configString
    })]
  }), C[14] = m, C[15] = De, C[16] = D?.configString, C[17] = Q;else Q = C[17];
  let Ie;
  if (C[18] !== te || C[19] !== a) Ie = a && fe(te ?? a.reasonString, a.themeColor ? e(n, {
    color: a.themeColor,
    children: te ?? a.reasonString
  }) : e(n, {
    children: e(Jr, {
      children: te ?? a.reasonString
    })
  })), C[18] = te, C[19] = a, C[20] = Ie;else Ie = C[20];
  let ke;
  if (C[21] !== Z || C[22] !== Le || C[23] !== ue || C[24] !== Q || C[25] !== Ie) ke = r(s, {
    marginBottom: 1,
    flexDirection: "column",
    children: [Le, ue, Q, Ie, Z]
  }), C[21] = Z, C[22] = Le, C[23] = ue, C[24] = Q, C[25] = Ie, C[26] = ke;else ke = C[26];
  return ke;
}
N();
N();
function ri(At) {
  return {
    ...At,
    attribution: {
      ...At.attribution,
      escapeCount: At.attribution.escapeCount + 1
    }
  };
}
function rht(t) {
  return t === "yes" ? "accept" : t === "no" ? "reject" : void 0;
}
function lbe(t) {
  let M = w(35),
    {
      feedbackTypeOf: feedbackTypeOf,
      toolName: toolName_3,
      isMcp: isMcp,
      initialFocusedType: initialFocusedType
    } = t,
    D = dn(),
    [acceptFeedback, setAcceptFeedback] = g(""),
    [rejectFeedback, setRejectFeedback] = g(""),
    [acceptInputMode, x] = g(!1),
    [rejectInputMode, h] = g(!1),
    [B, A] = g(!1),
    [U, Y] = g(!1),
    [j, m] = g(void 0),
    q;
  if (M[0] !== feedbackTypeOf || M[1] !== j || M[2] !== initialFocusedType) q = j === void 0 ? initialFocusedType : feedbackTypeOf(j), M[0] = feedbackTypeOf, M[1] = j, M[2] = initialFocusedType, M[3] = q;else q = M[3];
  let re = q,
    H;
  if (M[4] !== acceptInputMode || M[5] !== feedbackTypeOf || M[6] !== isMcp || M[7] !== rejectInputMode || M[8] !== toolName_3) H = K => {
    let O = feedbackTypeOf(K);
    let G = {
      toolName: toolName_3,
      isMcp: isMcp
    };
    if (O === "accept") {
      if (acceptInputMode) x(!1), i("tengu_accept_feedback_mode_collapsed", G);else x(!0), A(!0), i("tengu_accept_feedback_mode_entered", G);
    } else if (O === "reject") {
      if (rejectInputMode) h(!1), i("tengu_reject_feedback_mode_collapsed", G);else h(!0), Y(!0), i("tengu_reject_feedback_mode_entered", G);
    }
  }, M[4] = acceptInputMode, M[5] = feedbackTypeOf, M[6] = isMcp, M[7] = rejectInputMode, M[8] = toolName_3, M[9] = H;else H = M[9];
  let handleInputModeToggle = H,
    ee;
  if (M[10] !== acceptFeedback || M[11] !== acceptInputMode || M[12] !== feedbackTypeOf || M[13] !== rejectFeedback || M[14] !== rejectInputMode) ee = z => {
    let te = feedbackTypeOf(z);
    if (te !== "accept" && acceptInputMode && !acceptFeedback.trim()) x(!1);
    if (te !== "reject" && rejectInputMode && !rejectFeedback.trim()) h(!1);
    m(z);
  }, M[10] = acceptFeedback, M[11] = acceptInputMode, M[12] = feedbackTypeOf, M[13] = rejectFeedback, M[14] = rejectInputMode, M[15] = ee;else ee = M[15];
  let handleFocus = ee,
    Be;
  if (M[16] !== B || M[17] !== isMcp || M[18] !== U || M[19] !== toolName_3) Be = (Z, xe) => {
    i(Z === "accept" ? "tengu_accept_submitted" : "tengu_reject_submitted", {
      toolName: toolName_3,
      isMcp: isMcp,
      has_instructions: !!xe,
      instructions_length: xe?.length ?? 0,
      entered_feedback_mode: Z === "accept" ? B : U
    });
  }, M[16] = B, M[17] = isMcp, M[18] = U, M[19] = toolName_3, M[20] = Be;else Be = M[20];
  let logSubmitted = Be,
    Le;
  if (M[21] !== D) Le = () => {
    i("tengu_permission_request_escape", {}), D(ri);
  }, M[21] = D, M[22] = Le;else Le = M[22];
  let logEscape = Le,
    Q = re === "accept" && !acceptInputMode || re === "reject" && !rejectInputMode,
    Ie;
  if (M[23] !== Q) Ie = Q && e(F, {
    chord: "tab",
    action: "amend"
  }), M[23] = Q, M[24] = Ie;else Ie = M[24];
  let hintNode = Ie,
    bt;
  if (M[25] !== acceptFeedback || M[26] !== acceptInputMode || M[27] !== handleFocus || M[28] !== handleInputModeToggle || M[29] !== hintNode || M[30] !== logEscape || M[31] !== logSubmitted || M[32] !== rejectFeedback || M[33] !== rejectInputMode) bt = {
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
  }, M[25] = acceptFeedback, M[26] = acceptInputMode, M[27] = handleFocus, M[28] = handleInputModeToggle, M[29] = hintNode, M[30] = logEscape, M[31] = logSubmitted, M[32] = rejectFeedback, M[33] = rejectInputMode, M[34] = bt;else bt = M[34];
  return bt;
}
var po = {
  accept: "tell Claude what to do next",
  reject: "tell Claude what to do differently"
};
function OK({
  options: options,
  onSelect: onSelect,
  onCancel: onCancel,
  question: l = "Do you want to proceed?",
  toolAnalyticsContext: toolAnalyticsContext,
  defaultFocusValue: defaultFocusValue,
  hideIndexes: hideIndexes
}) {
  let [defaultFocusValue_2, C] = g(defaultFocusValue);
  R(() => {
    C(void 0);
  }, []);
  let feedbackTypeOf_2 = se(O => options.find(item => item.value === O)?.feedbackConfig?.type, [options]),
    {
      acceptFeedback: acceptFeedback_2,
      rejectFeedback: rejectFeedback_2,
      setAcceptFeedback: setAcceptFeedback_2,
      setRejectFeedback: setRejectFeedback_2,
      acceptInputMode: acceptInputMode_2,
      rejectInputMode: rejectInputMode_2,
      handleInputModeToggle: U,
      handleFocus: Y,
      logSubmitted: logSubmitted_2,
      logEscape: logEscape_2,
      hintNode: hintNode_2
    } = lbe({
      feedbackTypeOf: feedbackTypeOf_2,
      toolName: toolAnalyticsContext?.toolName,
      isMcp: toolAnalyticsContext?.isMcp ?? !1
    }),
    options_2 = X(() => options.map(item => {
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
        De = type === "accept" ? acceptInputMode_2 : rejectInputMode_2,
        onChange = type === "accept" ? setAcceptFeedback_2 : setRejectFeedback_2,
        Z = po[type];
      if (De) return {
        type: "input",
        label: label,
        value: value,
        placeholder: placeholder ?? Z,
        onChange: onChange,
        allowEmptySubmitToCancel: !0
      };
      return {
        label: label,
        value: value,
        description: item.description
      };
    }), [options, acceptInputMode_2, rejectInputMode_2]),
    onChange_2 = se(O => {
      let G = options.find(item => item.value === O);
      if (!G) return;
      let feedbackConfig_2 = G.feedbackConfig,
        ee,
        z = "";
      if (feedbackConfig_2) {
        if (z = (feedbackConfig_2.type === "accept" ? acceptFeedback_2 : rejectFeedback_2).trim(), z) ee = z;
      }
      if (onSelect(O, ee) === !1) return !1;
      if (feedbackConfig_2) logSubmitted_2(feedbackConfig_2.type, z);
    }, [options, acceptFeedback_2, rejectFeedback_2, onSelect, logSubmitted_2]),
    H = X(() => {
      let O = options.find(item => item.feedbackConfig?.type === "accept" && acceptInputMode_2 || item.feedbackConfig?.type === "reject" && rejectInputMode_2),
        G = {};
      for (let v of options) if (v.keybinding) G[v.keybinding] = () => O ? U(O.value) : onChange_2(v.value);
      return G;
    }, [options, acceptInputMode_2, rejectInputMode_2, U, onChange_2]);
  Wt(H, {
    context: "Confirmation"
  });
  let onCancel_2 = se(() => {
    if (onCancel?.() === !1) return;
    logEscape_2();
  }, [onCancel, logEscape_2]);
  return r(s, {
    flexDirection: "column",
    children: [typeof l === "string" ? e(n, {
      children: l
    }) : l, e(Fe, {
      selectedValue: selectedValue,
      options: options_2,
      defaultFocusValue: defaultFocusValue_2,
      hideIndexes: hideIndexes,
      inlineDescriptions: !0,
      onChange: onChange_2,
      onCancel: onCancel_2,
      onFocus: Y,
      onInputModeToggle: U
    }), e(s, {
      marginTop: 1,
      children: e(n, {
        dimColor: !0,
        children: r(ye, {
          children: [e(F, {
            chord: "escape",
            action: "cancel"
          }), hintNode_2]
        })
      })
    })]
  });
}
N();
function Oi(t) {
  let {
    style: style
  } = t;
  return style === "value";
}
function vi(t) {
  let {
    style: style_2
  } = t;
  return style_2 !== "value";
}
function Ui(t, De) {
  let {
    text: Be,
    style: style_3
  } = t;
  return e(n, {
    bold: style_3 === "question",
    children: Be
  }, De);
}
function ji(t, xe) {
  let {
    text: fe
  } = t;
  return e(n, {
    dimColor: !0,
    children: fe
  }, `value-${xe}`);
}
var We = 12,
  Kt = 60,
  Gn = We * Kt,
  qn = 4,
  Bi = /^(?:replacing|source|into|type|artifact)(?: \d+)?: https?:\/\/[^\s/]+\/(?:[^\s/]+\/)*(?:artifact|frame)\/(?:[A-Za-z0-9_-]*-)?(?:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}|[A-Za-z0-9_-]{22})\/?$/;
function ki(t, u) {
  if (ie(t) <= u) return t;
  let o = YN(t, Math.floor(u / 2));
  return o + rA(t, u - ie(o));
}
function Hn(t, u) {
  let o = Math.max(1, u),
    l = [...(t.question === void 0 ? [] : [{
      text: t.question,
      style: "question"
    }]), ...t.lines.map(a => ({
      text: a,
      style: "line"
    })), ...t.values.map(a => ({
      text: a,
      style: "value"
    }))],
    c = -1,
    rows = l.flatMap(({
      text: text,
      style: style_4
    }) => {
      let C = text.replace(/\r\n|[\r\n\u2028\u2029]/g, " "),
        value_2 = style_4 === "value" ? c += 1 : void 0;
      return style_4 === "value" && !Bi.test(C) ? [{
        text: ki(C, o),
        style: style_4,
        value: value_2
      }] : Wu(style_4 === "value" ? C : text, o, {
        trim: !0,
        hard: !0
      }).split(`
`).map(item => ({
        text: ot(item, o),
        style: style_4,
        ...(value_2 !== void 0 && {
          value: value_2
        })
      }));
    });
  return {
    rows: rows,
    gutter: t.values.length > 0 || t.lines.length > 0 || rows.length > l.length || l.some(({
      text: text_2
    }) => DR(text_2))
  };
}
function zt(t) {
  let o = w(33),
    {
      card: card
    } = t;
  if (card.rows.length === 0) {
    return null;
  }
  let l, c, D, a, flexDirection, C, E, y, multiline_2, flexDirection_2, paddingY;
  if (o[0] !== card.gutter || o[1] !== card.rows) {
    let B = card.rows.filter(Oi);
    let A = card.rows.filter(vi);
    let U = card.rows.length <= We;
    let Y = B;
    if (!U) {
      let j = We - 3;
      let m = 0;
      while (m < B.length) {
        let M = B[m].value;
        let q = m;
        while (q < B.length && B[q].value === M) q = q + 1;
        if (q > j) {
          break;
        }
        m = q;
      }
      Y = B.slice(0, m);
    }
    a = B.length - Y.length;
    let re = We - 1 - Y.length - (a > 0 ? 1 : 0);
    let H = U ? A : A.slice(0, Math.max(1, re));
    let K = A.length - H.length;
    D = s;
    flexDirection_2 = "column";
    paddingY = 1;
    c = zi;
    multiline_2 = card.gutter;
    l = s;
    flexDirection = "column";
    C = H.map(Ui);
    if (o[13] !== K) E = K > 0 && r(n, {
      dimColor: !0,
      children: ["\u2026 (+", K, " more lines)"]
    }), o[13] = K, o[14] = E;else E = o[14];
    y = Y.map(ji);
    o[0] = card.gutter, o[1] = card.rows, o[2] = l, o[3] = c, o[4] = D, o[5] = a, o[6] = flexDirection, o[7] = C, o[8] = E, o[9] = y, o[10] = multiline_2, o[11] = flexDirection_2, o[12] = paddingY;
  } else l = o[2], c = o[3], D = o[4], a = o[5], flexDirection = o[6], C = o[7], E = o[8], y = o[9], multiline_2 = o[10], flexDirection_2 = o[11], paddingY = o[12];
  let O;
  if (o[15] !== a) O = a > 0 && r(n, {
    dimColor: !0,
    children: ["\u2026 (+", a, " more lines)"]
  }), o[15] = a, o[16] = O;else O = o[16];
  let children_7;
  if (o[17] !== l || o[18] !== flexDirection || o[19] !== C || o[20] !== E || o[21] !== y || o[22] !== O) children_7 = r(l, {
    flexDirection: flexDirection,
    children: [C, E, y, O]
  }), o[17] = l, o[18] = flexDirection, o[19] = C, o[20] = E, o[21] = y, o[22] = O, o[23] = children_7;else children_7 = o[23];
  let children_8;
  if (o[24] !== c || o[25] !== multiline_2 || o[26] !== children_7) children_8 = e(c, {
    multiline: multiline_2,
    children: children_7
  }), o[24] = c, o[25] = multiline_2, o[26] = children_7, o[27] = children_8;else children_8 = o[27];
  let ee;
  if (o[28] !== D || o[29] !== children_8 || o[30] !== flexDirection_2 || o[31] !== paddingY) ee = e(D, {
    flexDirection: flexDirection_2,
    paddingY: paddingY,
    children: children_8
  }), o[28] = D, o[29] = children_8, o[30] = flexDirection_2, o[31] = paddingY, o[32] = ee;else ee = o[32];
  return ee;
}
N();
function Zi(A) {
  return A.toolPermissionContext;
}
var description = "\xB7 workflows run best with it on";
function nht(t) {
  let c = w(10),
    u = W(Zi),
    o = dn(),
    {
      addNotification: addNotification
    } = Zr(),
    D;
  if (c[0] !== u) D = (u.mode === "default" || u.mode === "acceptEdits") && MH(u), c[0] = u, c[1] = D;else D = c[1];
  let canOfferAutoMode = D,
    offered = t?.type === "workflow-agent" && canOfferAutoMode,
    C;
  if (c[2] !== addNotification || c[3] !== o || c[4] !== u) C = E => {
    let y = E === void 0 ? "workflow_permission_prompt" : E;
    if (!Zw("auto", u, x => o(k => {
      let toolPermissionContext = x(k.toolPermissionContext);
      if (toolPermissionContext === k.toolPermissionContext) {
        return k;
      }
      return {
        ...k,
        toolPermissionContext: toolPermissionContext
      };
    }), y).ok) {
      return addNotification({
        key: "workflow-auto-mode-unavailable",
        kind: "warning",
        text: iet(),
        color: "warning",
        priority: "high"
      }), !1;
    }
    return !0;
  }, c[2] = addNotification, c[3] = o, c[4] = u, c[5] = C;else C = c[5];
  let enableAutoMode = C,
    E;
  if (c[6] !== canOfferAutoMode || c[7] !== enableAutoMode || c[8] !== offered) E = {
    offered: offered,
    canOfferAutoMode: canOfferAutoMode,
    enableAutoMode: enableAutoMode
  }, c[6] = canOfferAutoMode, c[7] = enableAutoMode, c[8] = offered, c[9] = E;else E = c[9];
  return E;
}
N();
var unitsRemaining = 200000,
  Kn = unitsRemaining,
  remaining = 1e4,
  Ji = 1000,
  eD = 200000;
function go(t) {
  return typeof t === "string" && t.length <= 256;
}
var Et = 80,
  tD = 50000,
  nD = new Set(["channel_id", "channel"]),
  uD = new Set(["ts", "thread_ts"]),
  oD = /^\d{10}\.\d{6}$/,
  rD = /\b\d{4}\b/,
  iD = /\d{1,2}:\d{2}/;
function Pe(t, u, o, l) {
  return ie(t) + 2 + ie(u) + (o === void 0 ? 0 : ie(o) + 3) <= Math.min(Et, l - 2);
}
var DD = 64;
function Xn(t, u, o = 0, l = {
  remaining: remaining,
  unitsRemaining: unitsRemaining
}) {
  if (typeof t === "string") {
    if (t.length + 2 > l.unitsRemaining) throw Error("value exceeds the units display budget");
    let c = b(t);
    if (l.unitsRemaining -= c.length, l.unitsRemaining < 0) throw Error("value exceeds the units display budget");
    return c;
  }
  if (t === null || typeof t === "number" || typeof t === "boolean") {
    let c = String(t);
    if (l.unitsRemaining -= c.length, l.unitsRemaining < 0) throw Error("value exceeds the units display budget");
    return c;
  }
  if (o >= DD) throw Error("value exceeds the display depth bound");
  if (Array.isArray(t)) {
    if (t.length === 0) return "[]";
    let c = t.length;
    if (typeof c !== "number" || !Number.isSafeInteger(c) || c < 0) throw Error("value exceeds the element display budget");
    if (l.remaining -= c, l.remaining < 0) throw Error("value exceeds the element display budget");
    let D = [];
    for (let C = 0; C < c; C++) D.push(Xn(t[C], u + 1, o + 1, l));
    if (D.every(item => !item.includes(`
`))) {
      let C = `[${D.join(", ")}]`;
      if (ie(C) <= Et) return C;
    }
    let a = "  ".repeat(u + 1),
      p = "  ".repeat(u);
    return `[
${D.map(item => a + item).join(`,
`)}
${p}]`;
  }
  if (typeof t === "object") {
    let c = Object.entries(t);
    if (c.length === 0) return "{}";
    if (l.remaining -= c.length, l.remaining < 0) throw Error("value exceeds the element display budget");
    for (let [E] of c) {
      if (E.length > eD) throw Error("nested key exceeds the display bound");
      if (E.length > l.unitsRemaining) throw Error("keys exceed the units display budget");
      if (ig(E) !== E) throw Error("nested key display would drop code points");
      l.unitsRemaining -= E.length;
    }
    let D = WLt(c.map(([E]) => E));
    for (let [E] of c) {
      let y = D.get(E) ?? E;
      if (y.length > E.length) {
        if (l.unitsRemaining -= y.length - E.length, l.unitsRemaining < 0) throw Error("keys exceed the units display budget");
      }
    }
    let a = c.map(([E, y]) => `${D.get(E) ?? E}: ${Xn(y, u + 1, o + 1, l)}`);
    if (a.every(item => !item.includes(`
`))) {
      let E = `{ ${a.join(", ")} }`;
      if (ie(E) <= Et) return E;
    }
    let p = "  ".repeat(u + 1),
      C = "  ".repeat(u);
    return `{
${a.map(item => p + item).join(`,
`)}
${C}}`;
  }
  if (typeof t === "bigint") throw Error("bigint value cannot be rendered");
  return "undefined";
}
var bo = /^(\d{4})-(\d{2})-(\d{2})[Tt ](\d{2}):(\d{2})(?::(\d{2})(?:\.\d{1,9})?)?(?:[Zz]|[+-]\d{2}:?\d{2})?$/;
function ho(t) {
  let u = t.trim(),
    o = u.match(bo);
  if (!o) return null;
  let l = Number(o[1] ?? ""),
    c = Number(o[2] ?? ""),
    D = Number(o[3] ?? ""),
    a = Number(o[4] ?? ""),
    p = Number(o[5] ?? ""),
    C = o[6] === void 0 ? 0 : Number(o[6]);
  if (l < 100) return null;
  let E = new Date(Date.UTC(l, c, 0)).getUTCDate();
  if (c < 1 || c > 12 || D < 1 || D > E) return null;
  if (a > 24 || p > 59 || C > 59 || a === 24 && (p > 0 || C > 0)) return null;
  let y = Date.parse(u);
  if (Number.isNaN(y)) return null;
  if (!/(?:[Zz]|[+-]\d{2}:?\d{2})$/.test(u)) {
    let date = new Date(Date.UTC(l, c - 1, D, a, p)),
      date_2 = new Date(y);
    if (date_2.getFullYear() !== date.getUTCFullYear() || date_2.getMonth() !== date.getUTCMonth() || date_2.getDate() !== date.getUTCDate() || date_2.getHours() !== date.getUTCHours() || date_2.getMinutes() !== date.getUTCMinutes()) return null;
  }
  let k = Date.UTC(l, c - 1, D, a, p, C);
  if (Math.abs(y - k) > 50400000) return null;
  return new Date(y).toLocaleString(void 0, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short"
  });
}
function Qn(t, u, o = Et) {
  if (t === null || typeof t !== "object" || Array.isArray(t)) return [{
    kind: "inline",
    key: "input",
    text: "(parameters are not an object \u2014 deny unless expected)",
    unrenderable: !0
  }];
  let l = Object.entries(t),
    text_3 = g2(t);
  if (text_3 !== null) return [{
    kind: "inline",
    key: "input",
    text: text_3,
    unrenderable: !0,
    parseFailureSentinel: !0
  }];
  let D = [],
    a = l.length;
  if (a > Ji) return [{
    kind: "inline",
    key: "input",
    text: `(${a} parameters \u2014 too many to show \u2014 deny unless expected)`,
    unrenderable: !0
  }];
  let p = [],
    C = 0,
    E = 0;
  for (let [h, B] of l) {
    if (h.length > unitsRemaining) {
      C += 1;
      continue;
    }
    if (p.push(h), E += h.length, typeof B === "string" && B.length <= unitsRemaining) E += B.length;
  }
  if (E > Kn) return [{
    kind: "inline",
    key: "input",
    text: `(parameters total ${E.toLocaleString()} characters \u2014 too much to show \u2014 deny unless expected)`,
    unrenderable: !0
  }];
  if (C > 0) D.push({
    kind: "inline",
    key: "input",
    text: `(${C} parameter ${C === 1 ? "name is" : "names are"} too large to show \u2014 deny unless expected)`,
    unrenderable: !0
  });
  let y = WLt(p),
    x = l.find(([h]) => h === "language")?.[1],
    k = 0;
  for (let [h, B] of l) {
    if (h.length > unitsRemaining) continue;
    let key = y.get(h) ?? h;
    if (ig(h) !== h) {
      k += 1;
      continue;
    }
    if (typeof B === "string") {
      if (B.length > unitsRemaining) {
        let text_4 = `(value of ${B.length.toLocaleString()} characters cannot be shown \u2014 deny unless expected)`;
        if (!Pe(key, text_4, void 0, o)) D.push({
          kind: "block",
          key: key,
          text: text_4,
          unrenderable: !0
        });else D.push({
          kind: "inline",
          key: key,
          text: text_4,
          unrenderable: !0
        });
        continue;
      }
      let m = Za(B),
        M = ig(m);
      if (BLt.test(M) || M !== m) {
        let text_5 = `(value of ${B.length.toLocaleString()} characters cannot be shown in full \u2014 deny unless expected)`;
        if (!Pe(key, text_5, void 0, o)) D.push({
          kind: "block",
          key: key,
          text: text_5,
          unrenderable: !0
        });else D.push({
          kind: "inline",
          key: key,
          text: text_5,
          unrenderable: !0
        });
        continue;
      }
      let text_6 = M.replace(/\t/g, " ");
      if (M.includes(`
`) || ie(M) > Et) {
        let language = h === "code" && go(x) ? Za(x) : void 0;
        D.push({
          kind: "block",
          key: key,
          text: text_6,
          language: language
        });
        continue;
      }
      let text_7 = b(M),
        H = u?.[h] === "date-time" && rD.test(M) && iD.test(M),
        annotation = uD.has(h) && oD.test(M) ? ho(new Date(Number(M) * 1000).toISOString()) ?? void 0 : H || bo.test(M) ? ho(M) ?? void 0 : void 0;
      if (!Pe(key, text_7, annotation, o)) {
        let language_2 = h === "code" && go(x) ? Za(x) : void 0;
        D.push({
          kind: "block",
          key: key,
          text: text_6,
          annotation: annotation,
          language: language_2
        });
        continue;
      }
      let linkUrl = nD.has(h) ? Upr(M) ?? void 0 : /^https?:\/\/\S+$/.test(M) && !S6(M) ? M : void 0;
      D.push({
        kind: "inline",
        key: key,
        text: text_7,
        linkUrl: linkUrl,
        annotation: annotation
      });
      continue;
    }
    if (B === null || typeof B === "number" || typeof B === "boolean") {
      let text_8 = String(B);
      if (!Pe(key, text_8, void 0, o)) {
        D.push({
          kind: "block",
          key: key,
          text: text_8
        });
        continue;
      }
      D.push({
        kind: "inline",
        key: key,
        text: text_8
      });
      continue;
    }
    let text_11,
      Y = "",
      j = 0;
    try {
      let m = Xn(B, 0);
      if (j = m.length, m.length > unitsRemaining) {
        let text_9 = `(value of ${m.length.toLocaleString()} formatted characters cannot be shown \u2014 deny unless expected)`;
        if (!Pe(key, text_9, void 0, o)) D.push({
          kind: "block",
          key: key,
          text: text_9,
          unrenderable: !0
        });else D.push({
          kind: "inline",
          key: key,
          text: text_9,
          unrenderable: !0
        });
        continue;
      }
      Y = Za(m), text_11 = ig(Y);
    } catch {
      if (!Pe(key, "(value too large or too deeply nested to render \u2014 deny unless expected)", void 0, o)) D.push({
        kind: "block",
        key: key,
        text: "(value too large or too deeply nested to render \u2014 deny unless expected)",
        unrenderable: !0
      });else D.push({
        kind: "inline",
        key: key,
        text: "(value too large or too deeply nested to render \u2014 deny unless expected)",
        unrenderable: !0
      });
      continue;
    }
    if (E += j, E > Kn) return [{
      kind: "inline",
      key: "input",
      text: `(parameters total over ${Kn.toLocaleString()} rendered characters \u2014 too much to show \u2014 deny unless expected)`,
      unrenderable: !0
    }];
    if (BLt.test(text_11) || ig(Y) !== Y) {
      let text_10 = `(value of ${j.toLocaleString()} formatted characters cannot be shown in full \u2014 deny unless expected)`;
      if (!Pe(key, text_10, void 0, o)) D.push({
        kind: "block",
        key: key,
        text: text_10,
        unrenderable: !0
      });else D.push({
        kind: "inline",
        key: key,
        text: text_10,
        unrenderable: !0
      });
      continue;
    }
    if (!text_11.includes(`
`) && Pe(key, text_11, void 0, o)) D.push({
      kind: "inline",
      key: key,
      text: text_11
    });else D.push({
      kind: "block",
      key: key,
      text: text_11,
      language: "javascript"
    });
  }
  if (k > 0) D.push({
    kind: "inline",
    key: "input",
    text: `(${k} parameter ${k === 1 ? "name" : "names"} cannot be shown in full \u2014 deny unless expected)`,
    unrenderable: !0
  });
  return D;
}
function sD(t, u) {
  return t.language !== void 0 && u !== null && t.text.length <= tD && u.supportsLanguage(t.language);
}
function Ao(t) {
  let l = w(38),
    {
      keyText: keyText,
      contentColumns: contentColumns
    } = t,
    c,
    D,
    a,
    dimColor,
    paddingLeft,
    flexDirection_3,
    y,
    x,
    children_10,
    marginLeft,
    borderStyle,
    borderLeft,
    borderRight,
    borderTop,
    borderBottom,
    borderDimColor;
  if (l[0] !== contentColumns || l[1] !== keyText) {
    x = hn;
    re: {
      let children_9 = Wu(`${keyText}:`, Math.max(10, contentColumns - 2), {
        hard: !0,
        trim: !1
      });
      let q = children_9.indexOf(`
`);
      if (q === -1) {
        x = e(n, {
          dimColor: !0,
          children: children_9
        });
        break re;
      }
      a = s;
      flexDirection_3 = "column";
      y = e(n, {
        dimColor: !0,
        children: children_9.slice(0, q)
      });
      D = s;
      marginLeft = 2;
      borderStyle = "single";
      borderLeft = !0;
      borderRight = !1;
      borderTop = !1;
      borderBottom = !1;
      borderDimColor = !0;
      paddingLeft = 1;
      c = n;
      dimColor = !0;
      children_10 = Wu(children_9.slice(q + 1).replace(/\n/g, ""), Math.max(10, contentColumns - 4), {
        hard: !0,
        trim: !1
      });
    }
    l[0] = contentColumns, l[1] = keyText, l[2] = c, l[3] = D, l[4] = a, l[5] = dimColor, l[6] = paddingLeft, l[7] = flexDirection_3, l[8] = y, l[9] = x, l[10] = children_10, l[11] = marginLeft, l[12] = borderStyle, l[13] = borderLeft, l[14] = borderRight, l[15] = borderTop, l[16] = borderBottom, l[17] = borderDimColor;
  } else c = l[2], D = l[3], a = l[4], dimColor = l[5], paddingLeft = l[6], flexDirection_3 = l[7], y = l[8], x = l[9], children_10 = l[10], marginLeft = l[11], borderStyle = l[12], borderLeft = l[13], borderRight = l[14], borderTop = l[15], borderBottom = l[16], borderDimColor = l[17];
  if (x !== hn) return x;
  let children_11;
  if (l[18] !== c || l[19] !== dimColor || l[20] !== children_10) children_11 = e(c, {
    dimColor: dimColor,
    children: children_10
  }), l[18] = c, l[19] = dimColor, l[20] = children_10, l[21] = children_11;else children_11 = l[21];
  let K;
  if (l[22] !== D || l[23] !== paddingLeft || l[24] !== children_11 || l[25] !== marginLeft || l[26] !== borderStyle || l[27] !== borderLeft || l[28] !== borderRight || l[29] !== borderTop || l[30] !== borderBottom || l[31] !== borderDimColor) K = e(D, {
    marginLeft: marginLeft,
    borderStyle: borderStyle,
    borderLeft: borderLeft,
    borderRight: borderRight,
    borderTop: borderTop,
    borderBottom: borderBottom,
    borderDimColor: borderDimColor,
    paddingLeft: paddingLeft,
    children: children_11
  }), l[22] = D, l[23] = paddingLeft, l[24] = children_11, l[25] = marginLeft, l[26] = borderStyle, l[27] = borderLeft, l[28] = borderRight, l[29] = borderTop, l[30] = borderBottom, l[31] = borderDimColor, l[32] = K;else K = l[32];
  let O;
  if (l[33] !== a || l[34] !== flexDirection_3 || l[35] !== y || l[36] !== K) O = r(a, {
    flexDirection: flexDirection_3,
    children: [y, K]
  }), l[33] = a, l[34] = flexDirection_3, l[35] = y, l[36] = K, l[37] = O;else O = l[37];
  return O;
}
function eu({
  entries: entries,
  contentColumns: contentColumns_2
}) {
  let [o] = Zn(),
    c = Ba().syntaxHighlightingDisabled ?? !1,
    D = T(new Map()),
    a = X(() => {
      let y = c ? null : JD(),
        x = new Map(),
        k = entries.map(item => {
          if (item.kind !== "block") return null;
          let B = `${o}\x00${c}\x00${item.language ?? ""}\x00${item.text}`,
            A = x.get(B) ?? D.current.get(B);
          if (A === void 0) A = sD(item, y) && item.language !== void 0 && y !== null ? y.highlight(item.text, {
            language: item.language
          }) : S6(item.text) ? item.text : hwn(item.text, o);
          return x.set(B, A), A;
        });
      return D.current = x, k;
    }, [entries, o, c]),
    p = X(() => a.map(item => item === null ? null : Wu(item, Math.max(10, contentColumns_2 - 4), {
      hard: !0,
      trim: !1
    })), [a, contentColumns_2]),
    C = sIe(),
    E = entries.length === 1 && entries[0].kind === "inline" && entries[0].parseFailureSentinel === !0 ? entries[0] : null;
  if (E !== null) return e(s, {
    marginTop: 1,
    children: e(n, {
      dimColor: !0,
      children: E.text
    })
  });
  if (entries.length === 0) return null;
  return e(s, {
    flexDirection: "column",
    marginTop: 1,
    children: entries.map((item, index) => item.kind === "inline" ? r(n, {
      children: [r(n, {
        dimColor: !0,
        children: [item.key, ": "]
      }), e(Jr, {
        children: item.linkUrl !== void 0 && C ? q_(item.linkUrl, item.text) : item.text
      }), item.annotation !== void 0 && r(n, {
        dimColor: !0,
        children: [" (", item.annotation, ")"]
      })]
    }, index) : r(s, {
      flexDirection: "column",
      children: [e(Ao, {
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
        children: e(Jr, {
          children: p[index] ?? item.text
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
function TD(vD) {
  return vD.unrenderable === !0;
}
function MD(UD) {
  return l1(UD);
}
function _D(jD) {
  return !jD;
}
function PD($D, lr) {
  return $D + ie(lr) + (lr.split(/\r\n|[\r\n\u2028\u2029]/).length - 1) * Kt;
}
function Bo(t, u, o, feedback) {
  switch (t) {
    case "yes":
    case "yes-enable-auto-mode":
      return {
        behavior: "allow",
        updatedInput: u.input,
        ...(feedback && {
          feedback: feedback
        })
      };
    case "yes-dont-ask-again":
      {
        if (o === null || !is(o)) return {
          behavior: "allow",
          updatedInput: u.input
        };
        return {
          behavior: "allow",
          updatedInput: u.input,
          permissionUpdates: o.applies
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
function xo(t, u) {
  return mA([{
    type: "addRules",
    rules: [{
      toolName: t.toolName
    }],
    behavior: "allow",
    destination: "localSettings"
  }], {
    displayedTypes: displayedTypes,
    renderLabel: o => {
      let l = o.length === 1 ? o[0] : void 0;
      if (l === void 0 || l.type !== "addRules" || l.rules.length !== 1 || l.rules[0]?.toolName !== t.toolName || l.rules[0]?.ruleContent !== void 0) return null;
      let c = String(t.userFacingName);
      if (ie(c) >= ZHe || c.includes("\u2026")) return null;
      if (u.cwd.includes("\u2026")) return null;
      let D = Math.max(24, u.maxLabelWidth),
        a = x => `Yes, and don't ask again for ${t.userFacingName} commands in ${x}`,
        p = Rn(u.cwd);
      if (ie(a(p)) <= D) return a(p);
      if (p !== u.cwd) return null;
      let C = xa(u.cwd);
      if (ie(a(C)) <= D) return a(C);
      let E = qne(C),
        y = "";
      for (let x = 0; x < E.length; x++) {
        let k = y + E[x];
        if (ie(a(`${k}\u2026`)) > D) break;
        y = k;
      }
      if (y.length > 0) return a(`${y}\u2026`);
      return null;
    }
  });
}
var displayedTypes = new Set(["addRules"]);
function ou(t) {
  let decisionReason = t.permissionResult.decisionReason;
  return yp(decisionReason, l => !l.classifierApprovable) !== void 0 || t.isAskCappedByOrg || Pce(t.requestSource);
}
function Dzt(t) {
  return t.showAlwaysAllow && !ou(t) && ze(t.toolName);
}
var ko = 2,
  cD = 16,
  dD = 24,
  pD = 80;
function Ro(t, u) {
  return t && u.columns >= pD ? Math.max(ko, Math.min(cD, u.rows - dD)) : ko;
}
function CJn(t) {
  let a = w(147),
    {
      payload: payload,
      answer: answer,
      wouldTakeAnswer: wouldTakeAnswer
    } = t,
    ref = T(null),
    D = ve(),
    p;
  if (a[0] !== D.columns) p = () => Math.max(20, Math.min(40, D.columns - 6)), a[0] = D.columns, a[1] = p;else p = a[1];
  let [C, E] = g(p),
    y;
  if (a[2] === S) y = () => {
    if (ref.current) {
      let {
        width: width
      } = Xi(ref.current);
      if (width > 0) E(Math.max(20, width - 2));
    }
  }, a[2] = y;else y = a[2];
  let k;
  if (a[3] !== D.columns || a[4] !== D.rows) k = [D.columns, D.rows], a[3] = D.columns, a[4] = D.rows, a[5] = k;else k = a[5];
  R(y, k);
  let contentColumns_3 = Math.min(C, Math.max(20, D.columns - 6)),
    B;
  if (a[6] !== contentColumns_3 || a[7] !== payload.input || a[8] !== payload.isMcp || a[9] !== payload.paramFormatHints) B = payload.isMcp ? Qn(payload.input, payload.paramFormatHints, contentColumns_3) : null, a[6] = contentColumns_3, a[7] = payload.input, a[8] = payload.isMcp, a[9] = payload.paramFormatHints, a[10] = B;else B = a[10];
  let entries_2 = B,
    [theme] = Zn(),
    Y;
  m: {
    if (payload.renderedToolUseMessage != null) {
      let j;
      if (a[11] !== payload.renderedToolUseMessage) j = {
        node: payload.renderedToolUseMessage,
        threw: !1
      }, a[11] = payload.renderedToolUseMessage, a[12] = j;else j = a[12];
      Y = j;
      break m;
    }
    ;
    try {
      let node;
      if (a[13] !== payload.input || a[14] !== payload.toolName || a[15] !== theme) node = SJe(payload.toolName, payload.input, {
        theme: theme,
        verbose: !0
      }), a[13] = payload.input, a[14] = payload.toolName, a[15] = theme, a[16] = node;else node = a[16];
      let q;
      if (a[17] !== node) q = {
        node: node,
        threw: !1
      }, a[17] = node, a[18] = q;else q = a[18];
      Y = q;
    } catch (error) {
      let re = error;
      let M;
      if (a[19] !== payload.toolName) M = (d(new P(`Error rendering tool use line for ${payload.toolName}: ${re}`, "Error rendering tool use line (permission dialog table fallback)")), {
        node: null,
        threw: !0
      }), a[19] = payload.toolName, a[20] = M;else M = a[20];
      Y = M;
    }
  }
  let {
      node: node_2,
      threw: threw
    } = Y,
    j;
  if (a[21] !== node_2) j = typeof node_2 === "string" ? T_(node_2) : null, a[21] = node_2, a[22] = j;else j = a[22];
  let O = j,
    M;
  if (a[23] !== entries_2 || a[24] !== O?.kind || a[25] !== payload.toolUseRenderFailed || a[26] !== threw) M = (entries_2?.some(TD) ?? !1) || payload.toolUseRenderFailed === !0 || threw || O?.kind === "withheld", a[23] = entries_2, a[24] = O?.kind, a[25] = payload.toolUseRenderFailed, a[26] = threw, a[27] = M;else M = a[27];
  let G = M,
    q;
  if (a[28] !== payload) q = Dzt(payload), a[28] = payload, a[29] = q;else q = a[29];
  let v = q,
    {
      offered: offered_2,
      enableAutoMode: enableAutoMode_2
    } = nht(payload.requestSource),
    te;
  if (a[30] === S) te = we(), a[30] = te;else te = a[30];
  let cwd = te,
    Be;
  if (a[31] !== v || a[32] !== contentColumns_3 || a[33] !== G || a[34] !== payload) Be = v && !G ? xo(payload, {
    cwd: cwd,
    maxLabelWidth: contentColumns_3 - 8
  }) : null, a[31] = v, a[32] = contentColumns_3, a[33] = G, a[34] = payload, a[35] = Be;else Be = a[35];
  let Z = Be,
    xe;
  if (a[36] !== payload) xe = ou(payload), a[36] = payload, a[37] = xe;else xe = a[37];
  let fe = xe,
    Le;
  if (a[38] !== offered_2 || a[39] !== G || a[40] !== fe) Le = offered_2 && !G && !fe ? Ozt("workflow") : null, a[38] = offered_2, a[39] = G, a[40] = fe, a[41] = Le;else Le = a[41];
  let ue = Le,
    hideIndexes_2 = payload.permissionResult.defaultToNo === !0,
    Ie;
  if (a[42] !== Z || a[43] !== answer || a[44] !== enableAutoMode_2 || a[45] !== payload || a[46] !== wouldTakeAnswer) Ie = ke => {
    let {
      value: value_3,
      feedback: feedback_2
    } = ke;
    if (!wouldTakeAnswer()) {
      return !1;
    }
    if (value_3 === "yes-enable-auto-mode") enableAutoMode_2();
    return answer(Bo(value_3, payload, Z, feedback_2));
  }, a[42] = Z, a[43] = answer, a[44] = enableAutoMode_2, a[45] = payload, a[46] = wouldTakeAnswer, a[47] = Ie;else Ie = a[47];
  let me = ZS(Ie),
    answer_2 = me.answer,
    ke;
  if (a[48] !== answer_2) ke = (value_4, feedback_3) => answer_2({
    value: value_4,
    feedback: feedback_3
  }), a[48] = answer_2, a[49] = ke;else ke = a[49];
  let onSelect_2 = ke,
    defaultFocusValue_3 = me.refused === null ? hideIndexes_2 ? "no" : void 0 : me.refused.value === "yes" && !hideIndexes_2 ? "yes" : "no",
    Zo;
  if (a[50] !== answer) Zo = () => answer({
    behavior: "cancelled"
  }), a[50] = answer, a[51] = Zo;else Zo = a[51];
  let onCancel_3 = Zo;
  const iu = typeof payload.description === "string" ? payload.description : "";
  let Qo;
  if (a[52] !== iu) Qo = iu.split(`
`).filter(MD).join(`
`).trim(), a[52] = iu, a[53] = Qo;else Qo = a[53];
  let nt = Qo,
    on;
  lc: {
    if (O === null) {
      on = node_2;
      break lc;
    }
    if (O.kind === "withheld") {
      on = O.marker;
      break lc;
    }
    let ut;
    if (a[54] !== O.text) ut = Fs(O.text).replace(/\s+/g, " ").trim(), a[54] = O.text, a[55] = ut;else ut = a[55];
    on = ut;
  }
  let Bt = on,
    rt = payload.isMcp ? Math.max(10, contentColumns_3 - 2) : contentColumns_3;
  const ut = payload.roomyDescription === !0;
  let Jo;
  if (a[56] !== ut || a[57] !== D) Jo = Ro(ut, D), a[56] = ut, a[57] = D, a[58] = Jo;else Jo = a[58];
  let Du = Jo,
    er;
  if (a[59] !== Du || a[60] !== rt || a[61] !== nt) er = ohn(nt, rt, Du), a[59] = Du, a[60] = rt, a[61] = nt, a[62] = er;else er = a[62];
  let xt = er,
    tr;
  if (a[63] !== rt || a[64] !== nt) tr = ohn(nt, rt, Number.MAX_SAFE_INTEGER), a[63] = rt, a[64] = nt, a[65] = tr;else tr = a[65];
  let rn = tr,
    active = rn !== xt,
    [Dn, ID] = g(!1),
    chord = Oc("app:toggleTranscript", "Global", "ctrl+o"),
    nr;
  if (a[66] === S) nr = [{
    action: "app:toggleTranscript",
    run: () => ID(_D)
  }], a[66] = nr;else nr = a[66];
  let bindings = nr,
    ur;
  if (a[67] === S) ur = {
    label: "Yes",
    value: "yes",
    feedbackConfig: {
      type: "accept"
    }
  }, a[67] = ur;else ur = a[67];
  let or = ur,
    rr;
  if (a[68] === S) rr = {
    label: "No",
    value: "no",
    feedbackConfig: {
      type: "reject"
    }
  }, a[68] = rr;else rr = a[68];
  let ir = rr,
    kt;
  if (a[69] !== Z || a[70] !== ue || a[71] !== hideIndexes_2) {
    kt = hideIndexes_2 ? [ir, or] : [or];
    if (Z !== null) {
      if (typeof Z.node === "string") {
        let Ce;
        if (a[73] !== Z.node) Ce = {
          label: Z.node,
          value: "yes-dont-ask-again"
        }, a[73] = Z.node, a[74] = Ce;else Ce = a[74];
        kt.push(Ce);
      }
    }
    if (ue !== null) {
      if (typeof ue.node === "string") {
        let Ce;
        if (a[75] !== ue.node) Ce = {
          label: ue.node,
          description: description,
          value: "yes-enable-auto-mode"
        }, a[75] = ue.node, a[76] = Ce;else Ce = a[76];
        kt.push(Ce);
      }
    }
    if (!hideIndexes_2) kt.push(ir);
    a[69] = Z, a[70] = ue, a[71] = hideIndexes_2, a[72] = kt;
  } else kt = a[72];
  let options_3 = kt,
    toolName_4;
  if (a[77] !== payload.toolName) toolName_4 = On(payload.toolName), a[77] = payload.toolName, a[78] = toolName_4;else toolName_4 = a[78];
  let Dr;
  if (a[79] !== payload.isMcp || a[80] !== toolName_4) Dr = {
    toolName: toolName_4,
    isMcp: payload.isMcp
  }, a[79] = payload.isMcp, a[80] = toolName_4, a[81] = Dr;else Dr = a[81];
  let toolAnalyticsContext_2 = Dr,
    ae = payload.toolUseRenderFailed === !0 ? void 0 : payload.card;
  if (ae !== void 0 && [ae.question, ...ae.lines, ...ae.values].reduce(PD, 0) <= Gn) {
    let sr = payload.requestSource === void 0 && !ae.question.includes(`
`) && ie(ae.question) <= Math.min(contentColumns_3, D.columns - 2);
    const question = sr ? void 0 : ae.question;
    let He;
    if (a[82] !== ae || a[83] !== C || a[84] !== question || a[85] !== D.columns) He = Hn({
      ...ae,
      question: question
    }, Math.min(C, D.columns - 6) - qn), a[82] = ae, a[83] = C, a[84] = question, a[85] = D.columns, a[86] = He;else He = a[86];
    let card_2 = He;
    const title = sr ? ae.question : payload.userFacingName;
    let Re;
    if (a[87] !== card_2) Re = e(s, {
      flexDirection: "column",
      paddingX: 2,
      children: e(s, {
        ref: ref,
        width: "100%",
        flexDirection: "column",
        children: e(zt, {
          card: card_2
        })
      })
    }), a[87] = card_2, a[88] = Re;else Re = a[88];
    const marginTop = card_2.rows.length === 0 ? 1 : 0;
    let children_12;
    if (a[89] !== onCancel_3 || a[90] !== onSelect_2 || a[91] !== hideIndexes_2 || a[92] !== options_3 || a[93] !== me.attempts || a[94] !== defaultFocusValue_3 || a[95] !== toolAnalyticsContext_2) children_12 = e(OK, {
      question: null,
      options: options_3,
      defaultFocusValue: defaultFocusValue_3,
      hideIndexes: hideIndexes_2,
      onSelect: onSelect_2,
      onCancel: onCancel_3,
      toolAnalyticsContext: toolAnalyticsContext_2
    }, me.attempts), a[89] = onCancel_3, a[90] = onSelect_2, a[91] = hideIndexes_2, a[92] = options_3, a[93] = me.attempts, a[94] = defaultFocusValue_3, a[95] = toolAnalyticsContext_2, a[96] = children_12;else children_12 = a[96];
    let Te;
    if (a[97] !== marginTop || a[98] !== children_12) Te = e(s, {
      marginTop: marginTop,
      children: children_12
    }), a[97] = marginTop, a[98] = children_12, a[99] = Te;else Te = a[99];
    let Ke;
    if (a[100] !== payload.requestSource || a[101] !== title || a[102] !== Re || a[103] !== Te) Ke = r(xi, {
      title: title,
      requestSource: payload.requestSource,
      children: [Re, Te]
    }), a[100] = payload.requestSource, a[101] = title, a[102] = Re, a[103] = Te, a[104] = Ke;else Ke = a[104];
    return Ke;
  }
  let Oe;
  if (a[105] !== Bt || a[106] !== payload.hasMcpSuffix || a[107] !== payload.isMcp || a[108] !== payload.userFacingName) Oe = payload.isMcp ? r(s, {
    flexDirection: "row",
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
  }) : r(n, {
    children: [payload.userFacingName, Bt != null && Bt !== "" && r(V, {
      children: ["(", Bt, ")"]
    }), payload.hasMcpSuffix ? e(n, {
      dimColor: !0,
      children: " (MCP)"
    }) : ""]
  }), a[105] = Bt, a[106] = payload.hasMcpSuffix, a[107] = payload.isMcp, a[108] = payload.userFacingName, a[109] = Oe;else Oe = a[109];
  let He;
  if (a[110] !== contentColumns_3 || a[111] !== entries_2) He = entries_2 !== null && e(eu, {
    entries: entries_2,
    contentColumns: contentColumns_3
  }), a[110] = contentColumns_3, a[111] = entries_2, a[112] = He;else He = a[112];
  let Ue;
  if (a[113] !== xt || a[114] !== Dn || a[115] !== active || a[116] !== chord || a[117] !== rn || a[118] !== payload.isMcp || a[119] !== payload.userFacingName) Ue = xt !== "" && r(s, {
    width: "100%",
    flexDirection: "column",
    marginTop: payload.isMcp ? 1 : 0,
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
        children: Dn ? rn : xt
      })
    }), active && e(n, {
      dimColor: !0,
      children: e(F, {
        chord: chord,
        action: Dn ? "collapse description" : "expand description",
        parens: !0,
        format: {
          keyCase: "lower"
        }
      })
    })]
  }), a[113] = xt, a[114] = Dn, a[115] = active, a[116] = chord, a[117] = rn, a[118] = payload.isMcp, a[119] = payload.userFacingName, a[120] = Ue;else Ue = a[120];
  let Re;
  if (a[121] !== He || a[122] !== Ue) Re = r(s, {
    ref: ref,
    width: "100%",
    flexDirection: "column",
    children: [He, Ue]
  }), a[121] = He, a[122] = Ue, a[123] = Re;else Re = a[123];
  let je;
  if (a[124] !== Oe || a[125] !== Re) je = r(s, {
    flexDirection: "column",
    paddingX: 2,
    paddingY: 1,
    children: [Oe, Re]
  }), a[124] = Oe, a[125] = Re, a[126] = je;else je = a[126];
  let Se;
  if (a[127] !== payload.permissionResult) Se = e(Cb, {
    permissionResult: payload.permissionResult,
    toolType: "tool"
  }), a[127] = payload.permissionResult, a[128] = Se;else Se = a[128];
  let Te;
  if (a[129] !== onCancel_3 || a[130] !== onSelect_2 || a[131] !== hideIndexes_2 || a[132] !== options_3 || a[133] !== me.attempts || a[134] !== defaultFocusValue_3 || a[135] !== toolAnalyticsContext_2) Te = e(OK, {
    options: options_3,
    defaultFocusValue: defaultFocusValue_3,
    hideIndexes: hideIndexes_2,
    onSelect: onSelect_2,
    onCancel: onCancel_3,
    toolAnalyticsContext: toolAnalyticsContext_2
  }, me.attempts), a[129] = onCancel_3, a[130] = onSelect_2, a[131] = hideIndexes_2, a[132] = options_3, a[133] = me.attempts, a[134] = defaultFocusValue_3, a[135] = toolAnalyticsContext_2, a[136] = Te;else Te = a[136];
  let Ke;
  if (a[137] !== Se || a[138] !== Te) Ke = r(s, {
    flexDirection: "column",
    children: [Se, Te]
  }), a[137] = Se, a[138] = Te, a[139] = Ke;else Ke = a[139];
  let children_13;
  if (a[140] !== payload.requestSource || a[141] !== je || a[142] !== Ke) children_13 = r(xi, {
    title: "Tool use",
    requestSource: payload.requestSource,
    children: [je, Ke]
  }), a[140] = payload.requestSource, a[141] = je, a[142] = Ke, a[143] = children_13;else children_13 = a[143];
  let ar;
  if (a[144] !== active || a[145] !== children_13) ar = e(GC, {
    bindings: bindings,
    active: active,
    flexDirection: "column",
    children: children_13
  }), a[144] = active, a[145] = children_13, a[146] = ar;else ar = a[146];
  return ar;
}
export { abe, oue, d1e, mbn, Y3r, fPe, eht, tht, l5, ZI, gbn, zi, is as Tb, X3r, mA, sue, Izt, hbn, TJn, Ozt, ybn, Cb, description as Mzt, nht, rht, lbe, OK, Dzt, CJn };