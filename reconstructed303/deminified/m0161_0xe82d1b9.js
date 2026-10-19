// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { bIe, a4n, B3, iBs, bgt, uu, Kme, uBs, jK, p4n, Aje, C0r, EIo, Lan, R0r, eQs, Nan, f4n, OO, Xme, fBs, P0r, kgt, EIe, HIo, rQs, $Io, TBs } from "B:/~BUN/root/chunk-nw686kdq.js";
import { Ie, Xan, P4n, nDr, O4n, Gy, oMo } from "B:/~BUN/root/chunk-hkh6hras.js";
import { d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { J0r, GIo, Rgt, LHt } from "B:/~BUN/root/chunk-h2myanpn.js";
import { Gr } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { N } from "B:/~BUN/root/chunk-nkxgam12.js";
var he = () => Gr(B3, (e, t) => iBs(t));
var z = "classic.PostToolUse";
var Te = "this could not be given to a hook that checks it, so it was not done";
var V = "this tool input could not be given to a hook that checks it, so the tool was not run";
function we(e, t) {
  let r = {
      "classic.PreToolUse": {
        deny: V
      },
      "classic.PermissionRequest": {
        decision: {
          behavior: "deny",
          message: V
        }
      }
    },
    o = e === "tool.call" || e === "tool.check",
    i = e === "session.compact" || (m => e === "session.append")(t) && !bgt(t) ? void 0 : bIe[e];
  return Object.hasOwn(bIe, e) ? i?.(o ? V : Te) : r[e];
}
var deny = "a hook that checks this result could not hand back its answer";
var ve = new Set(["tool.check", "agent.offer", "plugin.register", "classic.PreToolUse", "classic.PermissionRequest"]);
function iIo(e, t) {
  if (e === z) return {
    isNoted: !0
  };
  let r = we(e, t);
  if (r === void 0) return;
  if (ve.has(e)) return {
    answer: r,
    afterNext: r
  };
  return e === "tool.call" ? {
    answer: r,
    afterNext: {
      deny: deny
    },
    isWithholding: !0
  } : {
    answer: r
  };
}
function He(e) {
  let t = "kind" in e,
    r = "value" in e;
  return t ? "ui.input" : r ? "ui.select" : "ui.press";
}
function Se(e, t) {
  let r = e.answering.getStore();
  return r !== void 0 && r.isLive && Date.now() < r.answersUntil && (r.event === "session.start" || r.environmentId === t) ? r.event : void 0;
}
var ht = (environmentId, t) => ({
  event: He(t),
  isLive: !0,
  answersUntil: Date.now() + Xme,
  environmentId: environmentId
});
function wt(e, t) {
  let weakMap = new WeakMap(),
    weakSet = new WeakSet();
  return s => {
    let {
      stamp: stamp,
      environments: environments
    } = e;
    if (stamp === void 0) return LHt(s);
    let m = stamp,
      a = Atomics.load(m, kgt),
      y = new Map(),
      x = c => Atomics.store(m, kgt, c ?? a);
    function f(c, h) {
      x(c);
      let H = h(),
        A = c !== void 0 && typeof H === "object" && H !== null;
      if (A) oMo(H, new Set((Gy(H) ? Object.values(H) : []).filter(item => Gy(item) && weakMap.has(item))));
      if (A && Object.isFrozen(H)) weakMap.set(H, c);
      return H;
    }
    function k(c, h) {
      if (!y.has(c)) {
        let H = [...environments].filter(([, A]) => A.name === c);
        y.set(c, H.length === 1 ? H[0]?.[0] : void 0);
      }
      return f(y.get(c), h);
    }
    try {
      return s(c => (x(c ? weakMap.get(c) : void 0), c !== void 0 && weakSet.has(c)), k, c => {
        let h = f(t, c);
        if (weakMap.has(h)) weakSet.add(h);
        return h;
      });
    } finally {
      Atomics.store(m, kgt, a);
    }
  };
}
import { isProxy as Ee } from "util/types";
function fe(e) {
  let t = e.serving.getStore();
  return t !== void 0 && e.servingLive.has(t.callId) ? t.callers : [];
}
function Re(e, t, r) {
  let {
    result: result,
    resolver: resolver
  } = r;
  if (Ee(result)) throw new Ie("the ui.resolve answer is a Proxy; a table of elements is a plain object");
  if (!N(result)) return result;
  let n = Object.create(null);
  for (let i of Reflect.ownKeys(result)) {
    if (typeof i !== "string" || i === "then" || i === "__proto__") continue;
    let m = Reflect.getOwnPropertyDescriptor(result, i);
    if (m?.enumerable !== !0) continue;
    let a = m.value,
      y = !Ee(a) && typeof a === "function",
      x = y && a4n.nameOf(a) === i;
    n[i] = !y ? void 0 : x ? a : f => rQs(e.stamp, () => TBs(e.stamp, [...fe(e), resolver], () => t.invokeSync(a, f)));
  }
  return n;
}
import { AsyncLocalStorage as q } from "async_hooks";
var bt = (hostOps, hostStreamOps, stamp_2) => ({
  environments: new Map(),
  loading: new Map(),
  dispatching: new q(),
  framing: new q(),
  serving: new q(),
  answering: new q(),
  servingLive: new Set(),
  hostOps: hostOps,
  hostStreamOps: hostStreamOps,
  presses: new Map(),
  taking: new Map(),
  resolving: new Map(),
  stamp: stamp_2
});
function Y({
  environment: environment,
  name: name,
  event: event,
  e: e_2
}) {
  try {
    return environment.argumentFor(e_2);
  } catch (error) {
    throw O4n(new Ie(`${name}: ${event}: could not be given its argument: ${d(error)}`));
  }
}
function J(e) {
  let weakMap_2 = new WeakMap();
  return e_3 => {
    let o = weakMap_2.get(e_3) ?? Y({
      ...e,
      e: e_3
    });
    return weakMap_2.set(e_3, o), o;
  };
}
var Q = e => e === "engine" || e === "Svg";
var L = e => e === "Button" || e === "Input" || e === "Select" || e === "Markdown";
var be = e => e === "Button" || !Q(e) && e !== "Client" && e !== "Raster" && e !== "Image" && !L(e);
function C(e, t) {
  let {
    children: children
  } = e;
  return Array.isArray(children) && be(e.type) ? children.flatMap(t) : [];
}
function Fe(e) {
  if (!Array.isArray(e)) return;
  let t = e.map(item => typeof item === "object" && item !== null && "value" in item ? item.value : void 0);
  return t.every(item => typeof item === "string") ? t : void 0;
}
function mHt(e) {
  if (typeof e !== "object" || !e || Array.isArray(e)) return [];
  let t = e,
    tag = t.type,
    o = C(t, mHt);
  if (!L(tag)) return o;
  let {
    press: press,
    props: props
  } = t;
  if (!(typeof press === "object" && press !== null)) return o;
  let {
      plugin: plugin,
      handle: handle
    } = press,
    element = props?.key;
  if (!(typeof plugin === "string" && typeof handle === "number" && typeof element === "string")) return o;
  let pressableLinks = props?.pressableLinks,
    k = Array.isArray(pressableLinks) && pressableLinks.every(item => typeof item === "string"),
    options = tag === "Select" ? Fe(props?.options) : void 0;
  return [{
    tag: tag,
    plugin: plugin,
    handle: handle,
    element: element,
    ...(k && {
      pressableLinks: pressableLinks
    }),
    ...(options !== void 0 && {
      options: options
    })
  }, ...o];
}
var ue = e => `${e.plugin}\x00client\x00${e.key}\x00${e.module}`;
var R = e => N(e) ? e.plugin : void 0;
function sIo(e) {
  if (!N(e)) return [];
  let t = e;
  if (t.type !== "Client") return C(t, sIo);
  let {
      props: props_2
    } = t,
    plugin_2 = R(t.client),
    key = N(props_2) ? props_2.key : void 0,
    module = N(props_2) ? props_2.module : void 0;
  return typeof plugin_2 === "string" && plugin_2 !== "" && typeof key === "string" && typeof module === "string" ? [{
    plugin: plugin_2,
    module: module,
    key: key
  }] : [];
}
var zt = () => ({
  seen: new Set(),
  groups: new Map(),
  parts: new Map(),
  counted: new WeakSet()
});
var t0r = e => `${e.plugin}\x00scope\x00${e.scope}`;
var gHt = e => e === "Box" || e === "Text";
function hHt(e) {
  let t = N(e) ? e.scope : void 0;
  return typeof t === "string" ? t : void 0;
}
function Oe(e) {
  let t = N(e) ? e : {},
    {
      hover: hover,
      press: press_2,
      group: group
    } = t,
    scope = hHt(hover),
    i = t.type,
    a = N(press_2) && typeof press_2.handle === "number" ? press_2 : void 0,
    y = L(i) ? a : gHt(i) ? group : void 0,
    plugin_3 = R(y);
  return [...(scope !== void 0 && typeof plugin_3 === "string" && plugin_3 !== "" ? [{
    plugin: plugin_3,
    scope: scope
  }] : []), ...C(t, Oe)];
}
var van = String.fromCharCode(0);
var ce = e => ["image", e.plugin, e.key ?? ""].join(van);
function X(e, t, r) {
  let o = r === "Raster",
    s = o ? "a Raster" : "an Image",
    n = o ? "cells" : "source";
  return `returned ${s} it did not draw (${String(t)}/${String(e)}); a render hook may keep the ones next(e) returned and change their ${n}, not which plugin or key they name`;
}
var restamp = (e, plugin_4) => ({
  ...e,
  image: {
    plugin: plugin_4
  }
});
var Ne = {
  stampOf: e => e.image,
  restamp: restamp,
  seenKeyOf: (e, plugin_5) => {
    let key_2 = e.props.key;
    return key_2 === void 0 || typeof key_2 === "string" ? ce({
      plugin: plugin_5,
      key: key_2
    }) : void 0;
  },
  refusal: (e, t) => X(e.props.key, t, "Image")
};
function Ae(e) {
  if (!N(e)) return [];
  let t = e;
  if (t.type !== "Image") return C(t, Ae);
  let {
      props: props_3
    } = t,
    plugin_6 = R(t.image),
    s = N(props_3) ? props_3.key : void 0;
  return typeof plugin_6 === "string" && plugin_6 !== "" ? [{
    plugin: plugin_6,
    key: typeof s === "string" ? s : void 0
  }] : [];
}
function je(e) {
  return e === "onPress" || e === "onEvent";
}
var Ce = e => Gy(e) && typeof e.type === "string";
var Z = e => typeof e === "string" || Q(e.type);
var ee = e => L(e.type) && "press" in e && N(e.press);
var _ = e => gHt(e.type);
import { isProxy as De } from "util/types";
function te(e, t) {
  let r = Object.getOwnPropertyDescriptor(e, t);
  return r && "value" in r ? r.value : void 0;
}
function le(e, t, r) {
  return e.set(t, r), r;
}
function dr(e, t) {
  let weakMap_3 = new WeakMap();
  function o(i) {
    if (Array.isArray(i)) {
      let a = te(i, "length"),
        y = typeof a === "number" ? a : 0,
        x = le(weakMap_3, i, []);
      for (let f = 0; f < y; f += 1) x[f] = n(te(i, String(f)));
      return x;
    }
    let m = le(weakMap_3, i, {});
    for (let a of Object.keys(i)) if (a !== "__proto__") m[a] = s(a, te(i, a));
    return m;
  }
  function s(i, m) {
    return !De(m) && typeof m === "function" && je(i) ? m : n(m);
  }
  function n(i) {
    if (De(i)) throw new Ie(`${t}: returned a drawing that holds a Proxy; an element, its props and its hover are plain objects and arrays`);
    let m = Array.isArray(i) || Gy(i);
    if (typeof i === "function") throw new Ie(`${t}: returned a drawing with a function where plain data goes; a closure rides only in an element's onPress or onEvent`);
    if (!m && N(i)) throw new Ie(`${t}: returned a drawing that holds an object that is not plain data (a class instance); an element, its props and its hover are plain objects and arrays`);
    return m ? weakMap_3.get(i) ?? o(i) : i;
  }
  return n(e);
}
function Le(e) {
  let t = N(e) ? e : {},
    r = R(t.part);
  return [...(gHt(t.type) && typeof r === "string" && r !== "" ? [r] : []), ...C(t, Le)];
}
var de = (e, t) => `${e}\x00${t}`;
var ye = e => ["raster", e.plugin, e.key].join(van);
var restamp_2 = (e, plugin_7) => ({
  ...e,
  raster: {
    plugin: plugin_7
  }
});
var Me = {
  stampOf: e => e.raster,
  restamp: restamp_2,
  seenKeyOf: (e, plugin_8) => {
    let key_3 = e.props.key;
    return typeof key_3 === "string" ? ye({
      plugin: plugin_8,
      key: key_3
    }) : void 0;
  },
  refusal: (e, t) => X(e.props.key, t, "Raster")
};
function _e(e) {
  if (!N(e)) return [];
  let t = e;
  if (t.type !== "Raster") return C(t, _e);
  let {
      props: props_4
    } = t,
    plugin_9 = R(t.raster),
    key_4 = N(props_4) ? props_4.key : void 0;
  return typeof plugin_9 === "string" && plugin_9 !== "" && typeof key_4 === "string" ? [{
    plugin: plugin_9,
    key: key_4
  }] : [];
}
function Ke(e, handle_2) {
  let press_3 = {
    plugin: e.press.plugin,
    handle: handle_2
  };
  switch (e.type) {
    case "Button":
      return {
        ...e,
        press: press_3
      };
    case "Input":
      return {
        type: "Input",
        props: e.props,
        press: press_3
      };
    case "Select":
      return {
        type: "Select",
        props: e.props,
        press: press_3
      };
    case "Markdown":
      return {
        type: "Markdown",
        props: e.props,
        press: press_3
      };
  }
}
function K(e, t) {
  let r = e,
    o = "children" in r ? r.children : void 0;
  return Array.isArray(o) ? {
    ...e,
    children: o.map(t)
  } : e;
}
function xe(e, t) {
  if (Z(e)) return e;
  if (ee(e)) {
    let r = t(e.press.plugin, e.press.handle);
    return r === void 0 ? e : Ke(e, r);
  }
  return K(e, r => xe(r, t));
}
var qJs = (e, t) => xe(e, t);
var We = (e, plugin_10) => ({
  ...e,
  client: {
    plugin: plugin_10
  }
});
function Be(e, t) {
  let plugin_11 = R(e.client),
    key_5 = e.props.key,
    module_2 = e.props.module;
  if (plugin_11 === "" || plugin_11 === void 0) return We(e, t.plugin);
  if (!(typeof plugin_11 === "string" && typeof key_5 === "string" && typeof module_2 === "string" && t.seen.has(ue({
    plugin: plugin_11,
    key: key_5,
    module: module_2
  })))) throw new Ie(`${t.plugin}: returned a Client it did not draw (${String(plugin_11)}/${String(key_5)} ${String(module_2)}); a render hook may keep the ones next(e) returned and change their props, not which plugin, key or module they name`);
  return e;
}
var $e = (e, plugin_12) => ({
  ...e,
  group: {
    plugin: plugin_12
  }
});
function re(e, t, r) {
  let o = t0r(t),
    s = e.groups.get(o) ?? 0;
  if (s < 1) throw new Ie(`${e.plugin}: returned a ${r} in another plugin's hover scope that next(e) did not hand it; a render hook may keep the ones next(e) returned and restyle them, not join another plugin's group`);
  e.groups.set(o, s - 1);
}
function Ge(e, t) {
  let scope_2 = hHt(e.hover);
  if (scope_2 === void 0) return e;
  let o = R(e.group);
  if (o === "" || o === void 0 || o === t.plugin) return $e(e, t.plugin);
  return re(t, {
    plugin: String(o),
    scope: scope_2
  }, e.type), e;
}
function oe(e, t, r) {
  let o = R(r.stampOf(e));
  if (o === "" || o === void 0) return r.restamp(e, t.plugin);
  let n = typeof o === "string" ? r.seenKeyOf(e, o) : void 0;
  if (!(n !== void 0 && t.seen.has(n))) throw new Ie(`${t.plugin}: ${r.refusal(e, o)}`);
  return e;
}
var ze = (e, t) => oe(e, t, Ne);
var Ve = {
  Button: "a Button",
  Input: "an Input",
  Select: "a Select",
  Markdown: "a Markdown"
};
var W = (e, plugin_13) => ({
  ...e,
  part: {
    plugin: plugin_13
  }
});
function ne(e) {
  let {
    part: part,
    ...r
  } = e;
  return r;
}
function qe(e, t) {
  if (!("part" in e)) return e;
  let r = R(e.part);
  if (r === t.plugin) return W(e, t.plugin);
  let o = typeof r === "string" ? t.parts.get(r) ?? 0 : 0;
  if (typeof r !== "string" || r === "" || o < 1) return ne(e);
  return t.parts.set(r, o - 1), W(e, r);
}
var Ye = (e, t) => oe(e, t, Me);
function Je(e, plugin_14, handle_3) {
  let press_4 = {
    plugin: plugin_14,
    handle: handle_3
  };
  switch (e.type) {
    case "Button":
      {
        let s = {
            type: "Button",
            props: e.props,
            press: press_4
          },
          i = e.hover === void 0 ? s : {
            ...s,
            hover: e.hover
          };
        return e.children === void 0 ? i : {
          ...i,
          children: e.children
        };
      }
    case "Input":
      return {
        type: "Input",
        props: e.props,
        press: press_4
      };
    case "Select":
      return {
        type: "Select",
        props: e.props,
        press: press_4
      };
    case "Markdown":
      return {
        type: "Markdown",
        props: e.props,
        press: press_4
      };
  }
}
var Qe = {
  Button: "returned a Button without an onPress function; a render hook draws one with <Button key label onPress>",
  Input: "returned an Input without an onSubmit function; a render hook draws one with <Input key onSubmit>",
  Select: "returned a Select without an onSelect function; a render hook draws one with <Select key options onSelect>",
  Markdown: "returned a pressable Markdown without an onLinkPress function; a render hook draws one with <Markdown key text onLinkPress>"
};
function B(e, t) {
  if (typeof e === "object" && e !== null && e.type === "engine") return {
    type: "engine",
    ref: e.ref
  };
  if (typeof e === "object" && !_(e) && "part" in e) return B(ne(e), t);
  if (Z(e)) return e;
  if (e.type === "Client") return Be(e, t);
  if (e.type === "Raster") return Ye(e, t);
  if (e.type === "Image") return ze(e, t);
  if (!ee(e)) {
    let D = _(e) ? qe(Ge(e, t), t) : e;
    return K(D, p => B(p, t));
  }
  let {
      press: press_5,
      onPress: onPress,
      onEvent: onEvent
    } = e,
    i = e.type === "Button",
    m = i ? onPress : onEvent,
    a = i ? K(e, D => B(D, t)) : e;
  if (typeof press_5 !== "object" || press_5 === null) return a;
  let {
    handle: handle_4,
    plugin: plugin_15
  } = press_5;
  if (typeof handle_4 !== "number") return a;
  if (plugin_15 === "") {
    if (typeof m !== "function") throw new Ie(`${t.plugin}: ${Qe[a.type]}`);
    return t.take(handle_4, m), Je(a, t.plugin, handle_4);
  }
  if (typeof plugin_15 !== "string" || !t.seen.has(de(plugin_15, handle_4))) throw new Ie(`${t.plugin}: returned ${Ve[a.type]} it did not draw (${String(plugin_15)}#${handle_4}); a render hook may keep the ones next(e) returned, not address another plugin's`);
  let {
      hover: hover_2
    } = a,
    scope_3 = hHt(hover_2);
  if (scope_3 !== void 0 && plugin_15 !== t.plugin) re(t, {
    plugin: plugin_15,
    scope: scope_3
  }, a.type);
  return a;
}
function Jr({
  tree: tree,
  ...t
}) {
  let r = B(tree, t);
  return _(r) && r.part === void 0 ? W(r, t.plugin) : r;
}
var U = (e, t) => `${e}\x00${t}`;
function to(e, t, r) {
  let o = e.taking.get(t);
  if (e.taking.delete(t), o === void 0) return;
  let s = new Set();
  for (let {
    plugin: plugin_16,
    handle: handle_5
  } of mHt(r)) for (let [m, a] of e.environments) if (a.name === plugin_16) s.add(U(m, handle_5));
  for (let n of o) if (!s.has(n)) e.presses.delete(n);
}
function O(e, t) {
  let r = e.environments.get(t);
  if (r === void 0) throw new Ie(`environment ${t} is not loaded`);
  return r;
}
function Xe(e, t) {
  let r = e.framing.getStore();
  return r?.environmentId === t ? r.registration : void 0;
}
var G = (e, t) => uBs({
  next: () => t(() => e.next()),
  return: () => t(() => e.return(void 0))
});
function pe(e, t) {
  let {
    name: name_2,
    nextTo: nextTo
  } = e;
  for (let s of t) if (J0r(s) && !nextTo.has(s)) throw new Ie(`${name_2}: next.to("${s}") refused: its hooks module does not spell ${GIo(s)} in a literal the scan reads (host rule)`);
}
function tt(e, t, r) {
  let {
      environmentId: environmentId_2,
      name: s
    } = t,
    tree_2 = dr(t.result, s);
  return Ce(tree_2) ? Jr({
    tree: tree_2,
    plugin: s,
    seen: r.seen,
    groups: r.groups,
    parts: r.parts,
    take: (i, m) => {
      let a = U(environmentId_2, i);
      e.presses.set(a, m);
      let y = e.dispatching.getStore();
      if (y !== void 0) e.taking.get(y)?.add(a);
    }
  }) : tree_2;
}
function rt(e, t, r) {
  let o = nDr(r) ? iIo(e, t) : void 0;
  return o === void 0 ? r : P4n(r, o);
}
function M(e, t, r) {
  let {
      environmentId: environmentId_3,
      event: event_2,
      resolver: resolver_2,
      leftOut: leftOut,
      ended: ended,
      caughtAnswered: caughtAnswered,
      endedReached: endedReached,
      withheld: withheld
    } = t,
    {
      environment: environment_2,
      name: name_3,
      tier: tier,
      answersForEngine: answersForEngine
    } = O(e, environmentId_3),
    H = r ?? environment_2.activation.registrations.get(event_2, leftOut);
  if (!H) throw new Ie(`${name_3}: no ${event_2} handler`);
  let {
    run: run,
    catch: D
  } = H;
  function p(result_2, v) {
    return resolver_2 !== void 0 ? Re(e, environment_2, {
      result: result_2,
      resolver: resolver_2
    }) : event_2 === "ui.render" ? tt(e, {
      environmentId: environmentId_3,
      name: name_3,
      result: result_2
    }, v) : environment_2.leaving(result_2, event_2);
  }
  function l(u, {
    seen: seen,
    groups: groups,
    parts: parts,
    counted: counted
  }) {
    function j(E) {
      if (event_2 === "ui.render" && Ce(E) && !counted.has(E)) {
        counted.add(E);
        for (let P of mHt(E)) seen.add(de(P.plugin, P.handle));
        for (let P of sIo(E)) seen.add(ue(P));
        for (let P of _e(E)) seen.add(ye(P));
        for (let P of Ae(E)) seen.add(ce(P));
        for (let P of Oe(E)) {
          let ke = t0r(P);
          groups.set(ke, (groups.get(ke) ?? 0) + 1);
        }
        for (let P of Le(E)) parts.set(P, (parts.get(P) ?? 0) + 1);
      }
      return E;
    }
    return environment_2.nextFor(Aje({
      call: async E => (environment_2.freezeForNext(Xan(E, name_3)), j(await u(E))),
      to: async (E, ...me) => (environment_2.freezeForNext(Xan(E, name_3)), pe(O(e, environmentId_3), me), j(await Lan(E, u, me))),
      signal: u.signal,
      is: u.is,
      event: u.event,
      origin: u.origin,
      trace: () => u.trace,
      budget: () => u.budget,
      caught: p4n(u)
    }), event_2);
  }
  let g = J({
    environment: environment_2,
    name: name_3,
    event: event_2
  });
  async function T(u, v, S) {
    let I = zt();
    try {
      return p(await u(g(v), l(S, I)), I);
    } catch (error) {
      throw rt(event_2, v, error);
    }
  }
  async function w(u, v, S) {
    if (endedReached?.(environmentId_3, v), u.called) await S(v).then(void 0, () => {
      return;
    });
    throw new Ie(u.reason);
  }
  return {
    name: name_3,
    environmentId: environmentId_3,
    tier: tier,
    ...(answersForEngine && {
      answersForEngine: answersForEngine
    }),
    ...(D && {
      catch: async (u, v) => {
        let S = await T(D, u, v);
        if (S !== void 0) caughtAnswered?.(environmentId_3);
        return S;
      }
    }),
    ...(withheld && {
      withheld: withheld
    }),
    run: (u, v) => ended === void 0 ? T(run, u, v) : w(ended, u, v)
  };
}
function ot(e) {
  let t = e.serving.getStore();
  return t !== void 0 && e.servingLive.has(t.callId) ? t.callId : void 0;
}
var ie = (e, environmentId_4) => ({
  environmentId: environmentId_4,
  dispatchId: e.dispatching.getStore(),
  registration: Xe(e, environmentId_4),
  serving: ot(e),
  rootEvent: Se(e, environmentId_4)
});
var To = (e, t) => (op, args, signal) => {
  let n = () => e.hostOps({
    ...ie(e, t),
    op: op,
    args: args,
    signal: signal
  });
  return EIe(op) ? n() : f4n(n);
};
var wo = (e, t) => (op_2, args_2, s) => {
  let abortController = new AbortController(),
    signal_2 = s === void 0 ? abortController.signal : AbortSignal.any([s, abortController.signal]),
    m = G(e.hostStreamOps({
      ...ie(e, t),
      op: op_2,
      args: args_2,
      signal: signal_2
    }), f4n);
  async function* a() {
    try {
      return yield* m;
    } catch (error) {
      if (abortController.signal.aborted) return;
      throw error;
    }
  }
  return fBs(jK(a), () => abortController.abort(new Ie(`${op_2}: the stream was let go`)));
};
function vo(e, {
  event: event_3,
  leftOut: leftOut_2
}, [o, e_4]) {
  let {
    environment: environment_3,
    name: name_4
  } = O(e, o);
  return environment_3.activation.registrations.catches(event_3, Y({
    environment: environment_3,
    name: name_4,
    event: event_3,
    e: e_4
  }), leftOut_2?.find(m => m.environmentId === o)?.registrations);
}
function Eo(e, t) {
  let {
      environmentId: r,
      request: request,
      core: core
    } = t,
    e_5 = {
      surface: request.surface,
      component: request.component
    },
    i = O(e, r);
  return OO({
    e: e_5,
    handlers: request.environments.filter(item => e.environments.has(item)).map(m => M(e, {
      environmentId: m,
      event: "ui.resolve",
      resolver: r
    })),
    site: uu["ui.resolve"],
    bottom: () => Promise.resolve(core),
    origin: {
      plugin: i.name,
      tier: i.tier
    }
  });
}
var Po = (e, t) => {
  e.delete(t);
};
var No = () => ({
  event: "session.start",
  isLive: !0,
  answersUntil: Number.POSITIVE_INFINITY
});
function ge(e, t) {
  let {
      environmentId: environmentId_5,
      event: event_4,
      leftOut: leftOut_3
    } = t,
    {
      environment: environment_4,
      name: name_5,
      tier: tier_2
    } = O(e, environmentId_5),
    a = J({
      environment: environment_4,
      name: name_5,
      event: event_4
    });
  function y(f) {
    let k = f;
    return environment_4.streamNextFor(C0r({
      ...R0r(f),
      call: c => (environment_4.freezeForNext(Xan(c, name_5)), k(c)),
      to: (c, ...h) => (environment_4.freezeForNext(Xan(c, name_5)), pe(O(e, environmentId_5), h), EIo(c, k, h))
    }));
  }
  let x = (registration, k) => G(k, c => e.framing.run({
    environmentId: environmentId_5,
    registration: registration
  }, c));
  return environment_4.activation.registrations.streamClauses(event_4, leftOut_3).map(item => {
    if (item.kind === "value") return eQs(M(e, t, item.hook));
    let {
        registration: registration_2
      } = item,
      c = H => async (A, D) => x(registration_2, await H(a(A), y(D))),
      h = item.catch;
    return {
      name: name_5,
      environmentId: environmentId_5,
      tier: tier_2,
      run: c(item.open),
      ...(h !== void 0 && {
        catch: c(h)
      })
    };
  });
}
function Lo(e, {
  request: request_2,
  hostNext: hostNext,
  signal: signal_3
}) {
  let {
      event: event_5,
      leftOut: leftOut_4,
      environments: environments_2
    } = request_2,
    handlers = environments_2.flatMap(y => ge(e, {
      environmentId: y,
      event: event_5,
      leftOut: leftOut_4?.find(x => x.environmentId === y)?.registrations
    })),
    bottom = (y, x, f = Rgt) => hostNext(y, x, f);
  return {
    e: request_2.payload,
    handlers: handlers,
    site: Kme(event_5, request_2.raise),
    signal: signal_3,
    isHopFold: !0,
    bottom: bottom,
    origin: request_2.origin,
    floors: request_2.floors
  };
}
function aIo({
  hostOps: hostOps_2,
  hostStreamOps: hostStreamOps_2,
  stamp: r,
  createEnvironment: createEnvironment,
  servedBudgetMs = Xme
}) {
  let n = bt(hostOps_2, hostStreamOps_2, r),
    i = createEnvironment ?? HIo,
    {
      environments: environments_3,
      loading: loading,
      dispatching: dispatching,
      framing: framing,
      serving: serving,
      answering: answering,
      presses: presses
    } = n;
  async function within(p, l, g) {
    if (l === "ui.render") n.taking.set(p, new Set());
    let T,
      u = l === "session.start" ? No() : void 0;
    try {
      return T = await dispatching.run(p, () => answering.run(u, g)), T;
    } finally {
      if (u !== void 0) u.isLive = !1;
      to(n, p, T);
    }
  }
  async function dispatch(p, l, signal_4) {
    let T = new Set(),
      w = p.event === z ? {
        isGiven: !1
      } : void 0,
      u = new Map(),
      result_3;
    try {
      result_3 = await within(p.id, p.event, () => OO({
        e: p.payload,
        handlers: p.environments.map(b => M(n, {
          environmentId: b,
          event: p.event,
          leftOut: p.leftOut?.find(j => j.environmentId === b)?.registrations,
          ended: p.ended,
          caughtAnswered: j => T.add(j),
          ...(w && {
            withheld: () => {
              w.isGiven = !0;
            }
          }),
          endedReached: (j, E) => u.set(j, E)
        })),
        site: Kme(p.event, p.raise),
        signal: signal_4,
        isHopFold: !0,
        bottom: (b, j, E = Rgt) => l(b, j, E),
        origin: p.origin,
        floors: p.floors,
        cutAt: p.cutAt
      }));
    } catch (error) {
      throw w?.isGiven === !0 ? P4n(error, {
        isNoted: !0
      }) : error;
    }
    let S = [...u].find(([b]) => b === p.ended?.kept),
      I = S !== void 0 && !T.has(S[0]) && !vo(n, p, S);
    return {
      result: result_3,
      ...(p.ended !== void 0 && {
        answered: [...T]
      }),
      ...(I && {
        unmatched: !0
      }),
      ...(w?.isGiven === !0 && {
        withheld: !0
      })
    };
  }
  let withinSteps = (p, l) => G(l, g => dispatching.run(p, () => answering.run(void 0, g)));
  return {
    currentDispatch: () => dispatching.getStore(),
    opFailureOf: p => Array.from(environments_3.values(), l => l.environment.opFailureOf(p)).find(item => item !== void 0),
    ownsValue: p => Array.from(environments_3.values()).some(item => item.environment.ownsValue(p)),
    has: p => environments_3.has(p),
    async load(environmentId_6, l) {
      let abortController_2 = new AbortController();
      loading.set(environmentId_6, abortController_2);
      let environment_5;
      try {
        environment_5 = await i(To(n, environmentId_6), l, {
          stamp: r ? {
            view: r,
            environmentId: environmentId_6
          } : void 0,
          signal: abortController_2.signal,
          hostStream: wo(n, environmentId_6),
          framed: (registration_3, u) => framing.run({
            environmentId: environmentId_6,
            registration: registration_3
          }, u),
          blamedFor: () => fe(n)[0],
          blamedWalk: wt(n, environmentId_6)
        });
      } finally {
        loading.delete(environmentId_6);
      }
      return environments_3.set(environmentId_6, {
        environment: environment_5,
        name: l.pluginName,
        tier: l.tier,
        nextTo: new Set(l.scan.nextTo ?? []),
        answersForEngine: $Io(l.modulePath)
      }), {
        registered: environment_5.activation.registrations.registered
      };
    },
    unload(p) {
      loading.get(p)?.abort(), loading.delete(p);
      let l = environments_3.get(p);
      if (l) environments_3.delete(p), n.resolving.delete(p), l.environment.dispose();
      for (let g of presses.keys()) if (g.startsWith(U(p, 0).slice(0, -1))) presses.delete(g);
    },
    dispatch: dispatch,
    dispatchStream: (request_3, hostNext_2, signal_5) => jK(withinSteps(request_3.id, P0r(Lo(n, {
      request: request_3,
      hostNext: hostNext_2,
      signal: signal_5
    })))),
    link: p => M(n, p),
    linkStreams: p => ge(n, p),
    within: within,
    withinSteps: withinSteps,
    async resolveTables(environmentId_7, l) {
      let {
          environment: environment_6
        } = O(n, environmentId_7),
        T = (n.resolving.get(environmentId_7) ?? 0) + 1;
      n.resolving.set(environmentId_7, T);
      let w = he(),
        u = await Promise.all(l.map(async S => ({
          surface: S.surface,
          component: S.component,
          answer: await Eo(n, {
            environmentId: environmentId_7,
            request: S,
            core: w[S.surface]
          })
        })));
      if (environments_3.get(environmentId_7)?.environment === environment_6 && n.resolving.get(environmentId_7) === T) environment_6.storeResolved(u);
    },
    build: (p, l, g) => {
      O(n, p).environment.activation.finalize(l, g);
    },
    callInterface(p, {
      name: name_6,
      method: method,
      args: args_3
    }, w) {
      let {
        environment: environment_7
      } = O(n, p);
      if (w) n.servingLive.add(w.callId);
      let S = w !== void 0 && servedBudgetMs !== Number.POSITIVE_INFINITY ? setTimeout(Po, servedBudgetMs, n.servingLive, w.callId) : void 0;
      function I() {
        if (clearTimeout(S), w) n.servingLive.delete(w.callId);
      }
      let b = () => TBs(r, w?.callers ?? [], () => environment_7.activation.callInterface(name_6, method, environment_7.cloneIn(args_3))).then(environment_7.leaving);
      try {
        return Nan.exit(() => framing.run(void 0, () => answering.run(void 0, () => serving.run(w, b)))).finally(I);
      } catch (error) {
        throw I(), error;
      }
    },
    press(p, l, g) {
      let {
          environment: environment_8
        } = O(n, p),
        w = presses.get(U(p, l));
      if (w === void 0) return Promise.reject(new Ie(`ui.press/ui.input/ui.select: no handler is held under handle ${l}`));
      let u = ht(p, g);
      return framing.run(void 0, () => answering.run(u, () => environment_8.invoke(w, [environment_8.cloneIn(g)]).then(() => {
        return;
      }).finally(() => {
        u.isLive = !1;
      })));
    },
    releasePresses: (p, l) => {
      for (let g of l) presses.delete(U(p, g));
    }
  };
}
function kan(e, t) {
  for (let r of e.values()) r.reject(new Ie(t));
  e.clear();
}
function $3(e, t) {
  let r = e.get(t);
  return e.delete(t), r;
}
var n0r = 0;
var KJs = 3;
var lIo = 2;
var dIo = 1;
export { deny as wan, mHt, sIo, t0r, gHt, hHt, van, qJs, iIo, aIo, n0r, KJs, lIo, dIo, kan, $3 };