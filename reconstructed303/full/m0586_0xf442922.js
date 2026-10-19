// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  I2,
  Sn
} from "B:/~BUN/root/chunk-a0k8qg0d.js";
import {
  cn,
  x_,
  mg,
  GM,
  mcn,
  gcn,
  Yt,
  QH,
  VM,
  Hn,
  Ecn,
  nQe,
  LEe
} from "B:/~BUN/root/chunk-qp0344nb.js";
import {
  vs
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  wA
} from "B:/~BUN/root/chunk-6a9s3k2y.js";
import {
  dg
} from "B:/~BUN/root/chunk-ydtn2zrk.js";
import {
  Fh,
  le
} from "B:/~BUN/root/chunk-e7tskyjv.js";
import {
  h1e,
  Ho,
  Ul,
  Bg,
  MN
} from "B:/~BUN/root/chunk-ses0c36n.js";
import {
  jqn,
  Wv,
  Pme
} from "B:/~BUN/root/chunk-66hg7026.js";
import {
  KY,
  git
} from "B:/~BUN/root/chunk-36awbxtc.js";
import {
  Znn
} from "B:/~BUN/root/chunk-cxg2mbf6.js";
import {
  pr,
  oqn
} from "B:/~BUN/root/chunk-j1zjtkgf.js";
var _ = /^([A-Za-z][A-Za-z0-9+.-]*):\/\/([^/?#]*)(.*)$/;

function P(n) {
  let e = n.match(_);
  if (!e) return n;
  let t = e[1].toLowerCase();
  if (t === "http") t = "https";
  let o = e[2].toLowerCase().replace(/:(?:443|80)$/, "").replace(/\.(?=$|:\d+$)/, "");
  return `${t}://${o}${e[3]??""}`
}

function PCt(n, e, t, o = "url") {
  if (n.size === 0) return null;
  let r = nQe(e),
    l = new Set([...Ecn(e), r, `${r}/`]);
  if (typeof t === "string") l.add(QH(t).trim());
  for (let [u, a] of n) {
    let i = u.indexOf(":");
    if (i <= 0) continue;
    let s = u.slice(0, i).trim(),
      c = u.slice(i + 1).trim();
    if (s !== o || c === "") continue;
    let f = VM(c.replace(/\*$/, ""));
    if (f?.slug === e.slug && f.env === e.env) return a;
    let R = new Set([c, P(c)]);
    for (let y of R)
      for (let A of l)
        if (I2(y, A)) return a
  }
  return null
}

function E(n) {
  let e = Yt(n),
    t = VM(n);
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
        let R = PCt(n, c, i, f);
        if (R !== null) return R
      }
  }
  return null
}
var k = {
  comments: x_,
  data: mg,
  check: GM
};

function sst(n, e) {
  let t = e?.action,
    o = typeof t === "string" && Object.hasOwn(KY, t) ? KY[t] : void 0;
  return o === void 0 ? void 0 : {
    tool: {
      name: k[o],
      ruleContentField: n.ruleContentField
    },
    input: git(o, e)
  }
}

function yPn(n, e, t, o) {
  let r = sst(e, t);
  if (r === void 0) return null;
  return (o === "deny" ? Ho(n, r.tool) : Ul(n, r.tool)) ?? Bg(n, r.tool, r.input, o)
}

function Cz(n, e, t) {
  let o = sst({
    name: cn
  }, e)?.tool.name;
  for (let r of [cn, ...o ? [o] : []]) {
    let l = T(MN(n, r, t), e);
    if (l !== null) return l
  }
  return null
}

function LZr(n, e, t, o) {
  let r = sst(e, t);
  return Bg(n, e, t, o) ?? (r === void 0 ? null : Bg(n, r.tool, r.input, o))
}
var w = {
    name: pr,
    mcpInfo: void 0,
    ruleContentField: oqn
  },
  d = {
    name: cn,
    mcpInfo: void 0,
    ruleContentField: mcn
  };

function m(n, e, t, o) {
  let r = e ?? gcn;
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

function Lcr(n, e, t, o, r) {
  let l = r === void 0 ? null : Bg(n, w, m(t, r.prompt).webFetch, o);
  if (l !== null) return l;
  let u = MN(n, pr, o);
  if (u.size === 0) return null;
  let a = new Set([new URL(Hn(e)).hostname, new URL(nQe(e)).hostname]);
  if (typeof t === "string") try {
    a.add(new URL(t).hostname)
  } catch {}
  for (let i of a) {
    let s = Znn(u, `domain:${i}`);
    if (s !== void 0) return s
  }
  return null
}

function u_(n, e, t, o, r = {}) {
  let l = sst({
      name: cn
    }, {
      action: r.action
    })?.tool.name,
    u = Lcr(n, e, t, o, r.read);
  if (u !== null) return u;
  for (let a of [cn, ...l ? [l] : []]) {
    let i = MN(n, a, o),
      s = PCt(i, e, t) ?? (r.copySource === !0 ? PCt(i, e, t, "from_url") : null);
    if (s !== null) return s
  }
  return null
}

function g(n) {
  if (!h1e.some((t) => (n.alwaysDenyRules[t]?.length ?? 0) > 0)) return n;
  let e = {
    ...n.alwaysDenyRules
  };
  for (let t of h1e) delete e[t];
  return {
    ...n,
    alwaysDenyRules: e
  }
}

function p(n, e, t, o) {
  let {
    action: r,
    ...l
  } = t;
  return (r === void 0 ? null : Bg(g(n), e, {
    action: r
  }, o)) ?? Bg(n, e, l, o)
}

function NZr(n, e, t, o, r = {}) {
  let l = g(n);
  return (o === "deny" ? Ho(l, d) : Ul(l, d)) ?? p(n, d, m(t, r.prompt, r.page, r.version).artifact, o) ?? PCt(MN(n, cn, o), e, t)
}

function wE(n, e, t, o, r) {
  let l = {
      ...r.fields,
      ...r.read !== void 0 ? m(t, r.read.prompt, r.read.page, r.read.version).artifact : {
        ...typeof r.action === "string" && {
          action: r.action
        },
        url: Hn(e)
      }
    },
    u = sst(d, l),
    a = g(n),
    i = (s) => o === "deny" ? Ho(a, s) : r.wholeToolAskAnswered === !0 && s.name === cn ? null : Ul(a, s);
  return i(d) ?? p(n, d, l, o) ?? (u === void 0 ? null : i(u.tool) ?? p(n, u.tool, u.input, o)) ?? u_(n, e, t, o, r)
}

function UKe(n) {
  return `the ${LEe(Sn(n.ruleValue))} deny rule from ${wA(n.source)}`
}
var ist = 'some tag-like sequences or line-opening turn markers in the copy below carry an inserted "\\"';

function _Pn(n, e, t, o = {}) {
  let r = le(n),
    l = {
      action: "read",
      read: o
    };
  return C(n, e) && !(dg(e.slug) && !vs(n.agentContext)) && wE(r, e, t, "deny", l) === null && wE(r, e, t, "ask", l) === null
}

function C(n, e) {
  let {
    mode: t,
    modeBeforeRewrite: o
  } = le(n);
  return t !== "plan" && (t !== "auto" && o !== "auto" || Wv(e) || Pme(e.slug))
}

function FZr(n, e, t, o = {}) {
  return le(n).mode !== "dontAsk" && !Fh(n) && _Pn(n, e, t, o)
}

function OCt(n, e, t, o = {}) {
  return jqn(n.artifactRegistries, e.slug) && _Pn(n, e, t, o)
}
export {
  PCt,
  sst,
  yPn,
  Cz,
  LZr,
  Lcr,
  u_,
  NZr,
  wE,
  UKe,
  ist,
  _Pn,
  FZr,
  OCt
};
