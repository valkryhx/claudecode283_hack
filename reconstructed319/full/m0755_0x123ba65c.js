// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  wC,
  mn
} from "B:/~BUN/root/chunk-44q965xg.js";
import {
  Qt,
  qm,
  Yf,
  fH,
  nWn,
  rWn,
  fn,
  Gz,
  aM,
  Bn,
  pWn,
  Yet,
  Pie
} from "B:/~BUN/root/chunk-3v92y8yw.js";
import {
  Qs
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  gT
} from "B:/~BUN/root/chunk-6n5g80b8.js";
import {
  Dy
} from "B:/~BUN/root/chunk-h6zqt1s4.js";
import {
  sh,
  se
} from "B:/~BUN/root/chunk-9bs2y8fc.js";
import {
  JLe,
  lo,
  dl,
  Wf,
  bE
} from "B:/~BUN/root/chunk-detjgwj4.js";
import {
  rEr,
  ZT,
  i7e
} from "B:/~BUN/root/chunk-0xtfwyhv.js";
import {
  AQ,
  AAt
} from "B:/~BUN/root/chunk-syedbbsr.js";
import {
  hJe
} from "B:/~BUN/root/chunk-cjd8dpgw.js";
import {
  Vn,
  ETr
} from "B:/~BUN/root/chunk-tacrdmts.js";
var _ = /^([A-Za-z][A-Za-z0-9+.-]*):\/\/([^/?#]*)(.*)$/;

function P(n) {
  let e = n.match(_);
  if (!e) return n;
  let t = e[1].toLowerCase();
  if (t === "http") t = "https";
  let o = e[2].toLowerCase().replace(/:(?:443|80)$/, "").replace(/\.(?=$|:\d+$)/, "");
  return `${t}://${o}${e[3]??""}`
}

function Y4t(n, e, t, o = "url") {
  if (n.size === 0) return null;
  let r = Yet(e),
    l = new Set([...pWn(e), r, `${r}/`]);
  if (typeof t === "string") l.add(Gz(t).trim());
  for (let [u, a] of n) {
    let i = u.indexOf(":");
    if (i <= 0) continue;
    let s = u.slice(0, i).trim(),
      c = u.slice(i + 1).trim();
    if (s !== o || c === "") continue;
    let f = aM(c.replace(/\*$/, ""));
    if (f?.slug === e.slug && f.env === e.env) return a;
    let p = new Set([c, P(c)]);
    for (let A of p)
      for (let y of l)
        if (wC(A, y)) return a
  }
  return null
}

function E(n) {
  let e = fn(n),
    t = aM(n);
  return [...e !== null ? [e] : [], ...t !== null && (e === null || e.slug !== t.slug || e.env !== t.env) ? [t] : []]
}

function T(n, e) {
  if (n.size === 0 || typeof e !== "object" || e === null) return null;
  let {
    url: t,
    type_url: o,
    from_url: r,
    files: l
  } = e, u = typeof l === "object" && l !== null && !Array.isArray(l) ? Object.values(l).map((i) => typeof i === "object" && i !== null ? i.artifact : void 0) : [], a = [
    [t, ["url"]],
    [o, ["url", "type_url"]],
    [r, ["url", "from_url"]], ...u.map((i) => [i, ["url", "from_url"]])
  ];
  for (let [i, s] of a) {
    if (typeof i !== "string") continue;
    for (let c of E(i))
      for (let f of s) {
        let p = Y4t(n, c, i, f);
        if (p !== null) return p
      }
  }
  return null
}
var NRt = {
  comments: qm,
  data: Yf,
  check: fH
};

function f1e(n, e) {
  let t = e?.action,
    o = typeof t === "string" && Object.hasOwn(AQ, t) ? AQ[t] : void 0;
  return o === void 0 ? void 0 : {
    tool: {
      name: NRt[o],
      ruleContentField: n.ruleContentField
    },
    input: AAt(o, e)
  }
}

function FRt(n, e, t, o) {
  let r = f1e(e, t);
  if (r === void 0) return null;
  return (o === "deny" ? lo(n, r.tool) : dl(n, r.tool)) ?? Wf(n, r.tool, r.input, o)
}

function tW(n, e, t) {
  let o = f1e({
    name: Qt
  }, e)?.tool.name;
  for (let r of [Qt, ...o ? [o] : []]) {
    let l = T(bE(n, r, t), e);
    if (l !== null) return l
  }
  return null
}

function Skn(n, e, t, o) {
  let r = f1e(e, t);
  return Wf(n, e, t, o) ?? (r === void 0 ? null : Wf(n, r.tool, r.input, o))
}
var w = {
    name: Vn,
    mcpInfo: void 0,
    ruleContentField: ETr
  },
  d = {
    name: Qt,
    mcpInfo: void 0,
    ruleContentField: nWn
  };

function m(n, e, t, o) {
  let r = e ?? rWn;
  return {
    webFetch: {
      url: n,
      prompt: r,
      offset: void 0
    },
    artifact: {
      action: "read",
      url: n,
      prompt: r,
      ...t !== void 0 && {
        page: t
      },
      ...o !== void 0 && {
        version: o
      }
    }
  }
}
var x8r = new Set(["read", "read_db", "comments", "list_files", "read_file", "list_assets", "read_asset", "get_endpoints", "call_endpoint", "run_script"]);

function Hat(n, e, t, o, r) {
  let l = r === void 0 ? null : Wf(n, w, m(t, r.prompt).webFetch, o);
  if (l !== null) return l;
  let u = bE(n, Vn, o);
  if (u.size === 0) return null;
  let a = new Set([new URL(Bn(e)).hostname, new URL(Yet(e)).hostname]);
  if (typeof t === "string") try {
    a.add(new URL(t).hostname)
  } catch {}
  for (let i of a) {
    let s = hJe(u, `domain:${i}`);
    if (s !== void 0) return s
  }
  return null
}

function iE(n, e, t, o, r = {}) {
  let l = f1e({
      name: Qt
    }, {
      action: r.action
    })?.tool.name,
    u = Hat(n, e, t, o, r.read);
  if (u !== null) return u;
  for (let a of [Qt, ...l ? [l] : []]) {
    let i = bE(n, a, o),
      s = Y4t(i, e, t) ?? (r.copySource === !0 ? Y4t(i, e, t, "from_url") : null);
    if (s !== null) return s
  }
  return null
}

function g(n) {
  if (!JLe.some((t) => (n.alwaysDenyRules[t]?.length ?? 0) > 0)) return n;
  let e = {
    ...n.alwaysDenyRules
  };
  for (let t of JLe) delete e[t];
  return {
    ...n,
    alwaysDenyRules: e
  }
}

function R(n, e, t, o) {
  let {
    action: r,
    ...l
  } = t;
  return (r === void 0 ? null : Wf(g(n), e, {
    action: r
  }, o)) ?? Wf(n, e, l, o)
}

function v8o(n, e, t, o, r = {}) {
  let l = g(n);
  return (o === "deny" ? lo(l, d) : dl(l, d)) ?? R(n, d, m(t, r.prompt, r.page, r.version).artifact, o) ?? Y4t(bE(n, Qt, o), e, t)
}

function AP(n, e, t, o, r) {
  let l = {
      ...r.fields,
      ...r.read !== void 0 ? m(t, r.read.prompt, r.read.page, r.read.version).artifact : {
        ...typeof r.action === "string" && {
          action: r.action
        },
        url: Bn(e)
      }
    },
    u = f1e(d, l),
    a = g(n),
    i = (s) => o === "deny" ? lo(a, s) : r.wholeToolAskAnswered === !0 && s.name === Qt ? null : dl(a, s);
  return i(d) ?? R(n, d, l, o) ?? (u === void 0 ? null : i(u.tool) ?? R(n, u.tool, u.input, o)) ?? iE(n, e, t, o, r)
}

function gIe(n) {
  return `the ${Pie(mn(n.ruleValue))} deny rule from ${gT(n.source)}`
}
var HRt = 'some tag-like sequences or line-opening turn markers in the copy below carry an inserted "\\"';

function Brr(n, e, t, o = {}) {
  let r = se(n),
    l = {
      action: "read",
      read: o
    };
  return k(n, e) && !(Dy(e.slug) && !Qs(n.agentContext)) && AP(r, e, t, "deny", l) === null && AP(r, e, t, "ask", l) === null
}

function k(n, e) {
  let {
    mode: t,
    modeBeforeRewrite: o
  } = se(n);
  return t !== "plan" && (t !== "auto" && o !== "auto" || ZT(e) || i7e(e.slug))
}

function E8o(n, e, t, o = {}) {
  return se(n).mode !== "dontAsk" && !sh(n) && Brr(n, e, t, o)
}

function X4t(n, e, t, o = {}) {
  return rEr(n.artifactRegistries, e.slug) && Brr(n, e, t, o)
}
export {
  Y4t,
  NRt,
  f1e,
  FRt,
  tW,
  Skn,
  x8r,
  Hat,
  iE,
  v8o,
  AP,
  gIe,
  HRt,
  Brr,
  E8o,
  X4t
};
