// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { pdn, LCe, TVn, pLr, _Nt, CVn, fLr, Dhe, E0, mdn, qz, WIo, lu, $Ce, Nhe, YIo, u1, F2o, XIo, GVn, xLr, $2o, PLr, eOo } from "B:/~BUN/root/chunk-0w5kpsps.js";
import { gN } from "B:/~BUN/root/chunk-n5swsemr.js";
import { JVn, $Lr, z6e } from "B:/~BUN/root/chunk-gbtzpa3e.js";
import { De, MNt } from "B:/~BUN/root/chunk-5dk9zqaz.js";
import { io } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { l } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { G } from "B:/~BUN/root/chunk-ah3egpyh.js";
var ie = () => io(qz, (e, r) => WIo(r));
function ae(e) {
  let r = "kind" in e,
    t = "value" in e;
  return r ? "ui.input" : t ? "ui.select" : "ui.press";
}
function fe(e) {
  let r = e.answering.getStore();
  return r !== void 0 && r.isLive && Date.now() < r.answersUntil ? r.event : void 0;
}
var ze = e => ({
  event: ae(e),
  isLive: !0,
  answersUntil: Date.now() + Dhe
});
function X(e) {
  let r = e.serving.getStore();
  return r !== void 0 && e.servingLive.has(r.callId) ? r.callers : [];
}
function ue(e, r, t) {
  let {
    result: result,
    resolver: resolver
  } = t;
  if (!G(result)) return result;
  let p = {},
    m = Object.entries(result);
  for (let [a, f] of m) {
    let d = typeof f === "function" && mdn.nameOf(f) !== a;
    p[a] = d ? y => $2o(e.stamp, () => eOo(e.stamp, [...X(e), resolver], () => r.invokeSync(f, y))) : f;
  }
  return p;
}
import { AsyncLocalStorage as I } from "async_hooks";
var Xe = (hostOps, hostStreamOps, stamp) => ({
  environments: new Map(),
  loading: new Map(),
  dispatching: new I(),
  framing: new I(),
  serving: new I(),
  answering: new I(),
  servingLive: new Set(),
  hostOps: hostOps,
  hostStreamOps: hostStreamOps,
  presses: new Map(),
  taking: new Map(),
  resolving: new Map(),
  stamp: stamp
});
function L({
  environment: environment,
  name: name,
  event: event,
  e: e_2
}) {
  try {
    return environment.argumentFor(e_2);
  } catch (error) {
    throw new De(`${name}: ${event}: could not be given its argument: ${l(error)}`);
  }
}
var M = e => e === "engine" || e === "Svg";
var A = e => e === "Button" || e === "Input" || e === "Select" || e === "Markdown";
var le = e => !M(e) && e !== "Client" && e !== "Raster" && e !== "Image" && !A(e);
function O(e, r) {
  let {
    children: children
  } = e;
  return Array.isArray(children) && le(e.type) ? children.flatMap(r) : [];
}
function ce(e) {
  if (!Array.isArray(e)) return;
  let r = e.map(item => typeof item === "object" && item !== null && "value" in item ? item.value : void 0);
  return r.every(item => typeof item === "string") ? r : void 0;
}
function adn(e) {
  if (typeof e !== "object" || !e || Array.isArray(e)) return [];
  let r = e,
    tag = r.type;
  if (!A(tag)) return O(r, adn);
  let {
    press: press,
    props: props
  } = r;
  if (!(typeof press === "object" && press !== null)) return [];
  let {
      plugin: plugin,
      handle: handle
    } = press,
    element = props?.key;
  if (!(typeof plugin === "string" && typeof handle === "number" && typeof element === "string")) return [];
  let pressableLinks = props?.pressableLinks,
    v = Array.isArray(pressableLinks) && pressableLinks.every(item => typeof item === "string"),
    options = tag === "Select" ? ce(props?.options) : void 0;
  return [{
    tag: tag,
    plugin: plugin,
    handle: handle,
    element: element,
    ...(v && {
      pressableLinks: pressableLinks
    }),
    ...(options !== void 0 && {
      options: options
    })
  }];
}
var Z = e => `${e.plugin}\x00client\x00${e.key}\x00${e.module}`;
var S = e => G(e) ? e.plugin : void 0;
function aLr(e) {
  if (!G(e)) return [];
  let r = e;
  if (r.type !== "Client") return O(r, aLr);
  let {
      props: props_2
    } = r,
    plugin_2 = S(r.client),
    key = G(props_2) ? props_2.key : void 0,
    module = G(props_2) ? props_2.module : void 0;
  return typeof plugin_2 === "string" && plugin_2 !== "" && typeof key === "string" && typeof module === "string" ? [{
    plugin: plugin_2,
    module: module,
    key: key
  }] : [];
}
var xr = () => ({
  seen: new Set(),
  groups: new Map(),
  counted: new WeakSet()
});
var yVn = e => `${e.plugin}\x00scope\x00${e.scope}`;
var ldn = e => e === "Box" || e === "Text";
function ydt(e) {
  let r = G(e) ? e.scope : void 0;
  return typeof r === "string" ? r : void 0;
}
function de(e) {
  let r = G(e) ? e : {},
    {
      hover: hover,
      press: press_2,
      group: group
    } = r,
    scope = ydt(hover),
    m = r.type,
    f = G(press_2) && typeof press_2.handle === "number" ? press_2 : void 0,
    d = A(m) ? f : ldn(m) ? group : void 0,
    plugin_3 = S(d);
  return [...(scope !== void 0 && typeof plugin_3 === "string" && plugin_3 !== "" ? [{
    plugin: plugin_3,
    scope: scope
  }] : []), ...O(r, de)];
}
var pNt = String.fromCharCode(0);
var ee = e => ["image", e.plugin, e.key ?? ""].join(pNt);
function B(e, r, t) {
  let o = t === "Raster",
    n = o ? "a Raster" : "an Image",
    p = o ? "cells" : "source";
  return `returned ${n} it did not draw (${String(r)}/${String(e)}); a render hook may keep the ones next(e) returned and change their ${p}, not which plugin or key they name`;
}
var restamp = (e, plugin_4) => ({
  ...e,
  image: {
    plugin: plugin_4
  }
});
var xe = {
  stampOf: e => e.image,
  restamp: restamp,
  seenKeyOf: (e, plugin_5) => {
    let key_2 = e.props.key;
    return key_2 === void 0 || typeof key_2 === "string" ? ee({
      plugin: plugin_5,
      key: key_2
    }) : void 0;
  },
  refusal: (e, r) => B(e.props.key, r, "Image")
};
function ge(e) {
  if (!G(e)) return [];
  let r = e;
  if (r.type !== "Image") return O(r, ge);
  let {
      props: props_3
    } = r,
    plugin_6 = S(r.image),
    n = G(props_3) ? props_3.key : void 0;
  return typeof plugin_6 === "string" && plugin_6 !== "" ? [{
    plugin: plugin_6,
    key: typeof n === "string" ? n : void 0
  }] : [];
}
function ke(e) {
  return e === "onPress" || e === "onEvent";
}
var ve = e => gN(e) && typeof e.type === "string";
var K = e => typeof e === "string" || M(e.type);
var W = e => A(e.type) && "press" in e && G(e.press);
var we = e => ldn(e.type);
function U(e, r) {
  let t = Object.getOwnPropertyDescriptor(e, r);
  return t && "value" in t ? t.value : void 0;
}
function re(e, r, t) {
  return e.set(r, t), t;
}
function Mr(e, r) {
  let weakMap = new WeakMap();
  function o(m) {
    if (Array.isArray(m)) {
      let f = U(m, "length"),
        d = typeof f === "number" ? f : 0,
        y = re(weakMap, m, []);
      for (let v = 0; v < d; v += 1) y[v] = p(U(m, String(v)));
      return y;
    }
    let a = re(weakMap, m, {});
    for (let f of Object.keys(m)) if (f !== "__proto__") a[f] = n(f, U(m, f));
    return a;
  }
  function n(m, a) {
    return typeof a === "function" && ke(m) ? a : p(a);
  }
  function p(m) {
    let a = Array.isArray(m) || gN(m);
    if (typeof m === "function") throw new De(`${r}: returned a drawing with a function where plain data goes; a closure rides only in an element's onPress or onEvent`);
    if (!a && G(m)) throw new De(`${r}: returned a drawing that holds an object that is not plain data (a class instance); an element, its props and its hover are plain objects and arrays`);
    return a ? weakMap.get(m) ?? o(m) : m;
  }
  return p(e);
}
var te = (e, r) => `${e}\x00${r}`;
var oe = e => ["raster", e.plugin, e.key].join(pNt);
var restamp_2 = (e, plugin_7) => ({
  ...e,
  raster: {
    plugin: plugin_7
  }
});
var he = {
  stampOf: e => e.raster,
  restamp: restamp_2,
  seenKeyOf: (e, plugin_8) => {
    let key_3 = e.props.key;
    return typeof key_3 === "string" ? oe({
      plugin: plugin_8,
      key: key_3
    }) : void 0;
  },
  refusal: (e, r) => B(e.props.key, r, "Raster")
};
function Se(e) {
  if (!G(e)) return [];
  let r = e;
  if (r.type !== "Raster") return O(r, Se);
  let {
      props: props_4
    } = r,
    plugin_9 = S(r.raster),
    key_4 = G(props_4) ? props_4.key : void 0;
  return typeof plugin_9 === "string" && plugin_9 !== "" && typeof key_4 === "string" ? [{
    plugin: plugin_9,
    key: key_4
  }] : [];
}
function Re(e, handle_2) {
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
function _(e, r) {
  let t = e,
    o = "children" in t ? t.children : void 0;
  return Array.isArray(o) ? {
    ...e,
    children: o.map(r)
  } : e;
}
function ne(e, r) {
  if (K(e)) return e;
  if (W(e)) {
    let t = r(e.press.plugin, e.press.handle);
    return t === void 0 ? e : Re(e, t);
  }
  return _(e, t => ne(t, r));
}
var C2o = (e, r) => ne(e, r);
var Ee = (e, plugin_10) => ({
  ...e,
  client: {
    plugin: plugin_10
  }
});
function He(e, r) {
  let plugin_11 = S(e.client),
    key_5 = e.props.key,
    module_2 = e.props.module;
  if (plugin_11 === "" || plugin_11 === void 0) return Ee(e, r.plugin);
  if (!(typeof plugin_11 === "string" && typeof key_5 === "string" && typeof module_2 === "string" && r.seen.has(Z({
    plugin: plugin_11,
    key: key_5,
    module: module_2
  })))) throw new De(`${r.plugin}: returned a Client it did not draw (${String(plugin_11)}/${String(key_5)} ${String(module_2)}); a render hook may keep the ones next(e) returned and change their props, not which plugin, key or module they name`);
  return e;
}
var be = (e, plugin_12) => ({
  ...e,
  group: {
    plugin: plugin_12
  }
});
function z(e, r, t) {
  let o = yVn(r),
    n = e.groups.get(o) ?? 0;
  if (n < 1) throw new De(`${e.plugin}: returned a ${t} in another plugin's hover scope that next(e) did not hand it; a render hook may keep the ones next(e) returned and restyle them, not join another plugin's group`);
  e.groups.set(o, n - 1);
}
function Oe(e, r) {
  let scope_2 = ydt(e.hover);
  if (scope_2 === void 0) return e;
  let o = S(e.group);
  if (o === "" || o === void 0 || o === r.plugin) return be(e, r.plugin);
  return z(r, {
    plugin: String(o),
    scope: scope_2
  }, e.type), e;
}
function V(e, r, t) {
  let o = S(t.stampOf(e));
  if (o === "" || o === void 0) return t.restamp(e, r.plugin);
  let p = typeof o === "string" ? t.seenKeyOf(e, o) : void 0;
  if (!(p !== void 0 && r.seen.has(p))) throw new De(`${r.plugin}: ${t.refusal(e, o)}`);
  return e;
}
var Ae = (e, r) => V(e, r, xe);
var Pe = {
  Button: "a Button",
  Input: "an Input",
  Select: "a Select",
  Markdown: "a Markdown"
};
var Ne = (e, r) => V(e, r, he);
function je(e, plugin_13, handle_3) {
  let press_4 = {
    plugin: plugin_13,
    handle: handle_3
  };
  switch (e.type) {
    case "Button":
      {
        let n = {
          type: "Button",
          props: e.props,
          press: press_4
        };
        return e.hover === void 0 ? n : {
          ...n,
          hover: e.hover
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
var Ce = {
  Button: "returned a Button without an onPress function; a render hook draws one with <Button key label onPress>",
  Input: "returned an Input without an onSubmit function; a render hook draws one with <Input key onSubmit>",
  Select: "returned a Select without an onSelect function; a render hook draws one with <Select key options onSelect>",
  Markdown: "returned a pressable Markdown without an onLinkPress function; a render hook draws one with <Markdown key text onLinkPress>"
};
function se(e, r) {
  if (K(e)) return e;
  if (e.type === "Client") return He(e, r);
  if (e.type === "Raster") return Ne(e, r);
  if (e.type === "Image") return Ae(e, r);
  if (!W(e)) {
    let P = we(e) ? Oe(e, r) : e;
    return _(P, s => se(s, r));
  }
  let t = e,
    {
      press: press_5,
      onPress: onPress,
      onEvent: onEvent
    } = e,
    a = t.type === "Button" ? onPress : onEvent;
  if (typeof press_5 !== "object" || press_5 === null) return e;
  let {
    handle: handle_4,
    plugin: plugin_14
  } = press_5;
  if (typeof handle_4 !== "number") return e;
  if (plugin_14 === "") {
    if (typeof a !== "function") throw new De(`${r.plugin}: ${Ce[t.type]}`);
    return r.take(handle_4, a), je(t, r.plugin, handle_4);
  }
  if (typeof plugin_14 !== "string" || !r.seen.has(te(plugin_14, handle_4))) throw new De(`${r.plugin}: returned ${Pe[t.type]} it did not draw (${String(plugin_14)}#${handle_4}); a render hook may keep the ones next(e) returned, not address another plugin's`);
  let {
      hover: hover_2
    } = t,
    scope_3 = ydt(hover_2);
  if (scope_3 !== void 0 && plugin_14 !== r.plugin) z(r, {
    plugin: plugin_14,
    scope: scope_3
  }, t.type);
  return e;
}
var yt = ({
  tree: tree,
  ...r
}) => se(tree, r);
var N = (e, r) => `${e}\x00${r}`;
function wt(e, r, t) {
  let o = e.taking.get(r);
  if (e.taking.delete(r), o === void 0) return;
  let n = new Set();
  for (let {
    plugin: plugin_15,
    handle: handle_5
  } of adn(t)) for (let [a, f] of e.environments) if (f.name === plugin_15) n.add(N(a, handle_5));
  for (let p of o) if (!n.has(p)) e.presses.delete(p);
}
function H(e, r) {
  let t = e.environments.get(r);
  if (t === void 0) throw new De(`environment ${r} is not loaded`);
  return t;
}
function Fe(e, r) {
  let t = e.framing.getStore();
  return t?.environmentId === r ? t.registration : void 0;
}
var D = (e, r) => YIo({
  next: () => r(() => e.next()),
  return: () => r(() => e.return(void 0))
});
function Y(e, r) {
  let {
    name: name_2,
    nextTo: nextTo
  } = e;
  for (let n of r) if (JVn(n) && !nextTo.has(n)) throw new De(`${name_2}: next.to("${n}") refused: its hooks module does not spell ${$Lr(n)} in a literal the scan reads (host rule)`);
}
function Me(e, r, t) {
  let {
      environmentId: environmentId,
      name: n
    } = r,
    tree_2 = Mr(r.result, n);
  return ve(tree_2) ? yt({
    tree: tree_2,
    plugin: n,
    seen: t.seen,
    groups: t.groups,
    take: (m, a) => {
      let f = N(environmentId, m);
      e.presses.set(f, a);
      let d = e.dispatching.getStore();
      if (d !== void 0) e.taking.get(d)?.add(f);
    }
  }) : tree_2;
}
function j(e, r, t) {
  let {
      environmentId: environmentId_2,
      event: event_2,
      resolver: resolver_2,
      leftOut: leftOut
    } = r,
    {
      environment: environment_2,
      name: name_3,
      tier: tier,
      answersForEngine: answersForEngine
    } = H(e, environmentId_2),
    v = t ?? environment_2.activation.registrations.get(event_2, leftOut);
  if (!v) throw new De(`${name_3}: no ${event_2} handler`);
  let {
    run: run,
    catch: w
  } = v;
  function h(result_2, c) {
    return resolver_2 !== void 0 ? ue(e, environment_2, {
      result: result_2,
      resolver: resolver_2
    }) : event_2 === "ui.render" ? Me(e, {
      environmentId: environmentId_2,
      name: name_3,
      result: result_2
    }, c) : result_2;
  }
  function b(i, {
    seen: seen,
    groups: groups,
    counted: counted
  }) {
    function C(k) {
      if (event_2 === "ui.render" && ve(k) && !counted.has(k)) {
        counted.add(k);
        for (let R of adn(k)) seen.add(te(R.plugin, R.handle));
        for (let R of aLr(k)) seen.add(Z(R));
        for (let R of Se(k)) seen.add(oe(R));
        for (let R of ge(k)) seen.add(ee(R));
        for (let R of de(k)) {
          let me = yVn(R);
          groups.set(me, (groups.get(me) ?? 0) + 1);
        }
      }
      return k;
    }
    return environment_2.nextFor(LCe({
      call: async k => (environment_2.freezeForNext(MNt(k, name_3)), C(await i(k))),
      to: async (k, ...F) => (environment_2.freezeForNext(MNt(k, name_3)), Y(H(e, environmentId_2), F), C(await _Nt(k, i, F))),
      signal: i.signal,
      is: i.is,
      event: i.event,
      origin: i.origin,
      trace: () => i.trace,
      budget: () => i.budget,
      caught: pdn(i)
    }), event_2);
  }
  let weakMap_2 = new WeakMap();
  function s(e_3) {
    let c = weakMap_2.get(e_3) ?? L({
      environment: environment_2,
      name: name_3,
      event: event_2,
      e: e_3
    });
    return weakMap_2.set(e_3, c), c;
  }
  async function u(i, c, g) {
    let T = xr();
    return h(await i(s(c), b(g, T)), T);
  }
  return {
    name: name_3,
    environmentId: environmentId_2,
    tier: tier,
    ...(answersForEngine && {
      answersForEngine: answersForEngine
    }),
    ...(w && {
      catch: (i, c) => u(w, i, c)
    }),
    run: (i, c) => u(run, i, c)
  };
}
function Be(e) {
  let r = e.serving.getStore();
  return r !== void 0 && e.servingLive.has(r.callId) ? r.callId : void 0;
}
var J = (e, environmentId_3) => ({
  environmentId: environmentId_3,
  dispatchId: e.dispatching.getStore(),
  registration: Fe(e, environmentId_3),
  serving: Be(e),
  rootEvent: fe(e)
});
var Lt = (e, r) => (op, args, signal) => {
  let p = () => e.hostOps({
    ...J(e, r),
    op: op,
    args: args,
    signal: signal
  });
  return Nhe(op) ? p() : fLr(p);
};
var Mt = (e, r) => (op_2, args_2, n) => {
  let abortController = new AbortController(),
    signal_2 = n === void 0 ? abortController.signal : AbortSignal.any([n, abortController.signal]),
    a = D(e.hostStreamOps({
      ...J(e, r),
      op: op_2,
      args: args_2,
      signal: signal_2
    }), fLr);
  async function* f() {
    try {
      return yield* a;
    } catch (error) {
      if (abortController.signal.aborted) return;
      throw error;
    }
  }
  return XIo(u1(f), () => abortController.abort(new De(`${op_2}: the stream was let go`)));
};
function $t(e, r) {
  let {
      environmentId: t,
      request: request,
      core: core
    } = r,
    e_4 = {
      surface: request.surface,
      component: request.component
    },
    m = H(e, t);
  return E0({
    e: e_4,
    handlers: request.environments.filter(item => e.environments.has(item)).map(a => j(e, {
      environmentId: a,
      event: "ui.resolve",
      resolver: t
    })),
    site: lu["ui.resolve"],
    bottom: () => Promise.resolve(core),
    origin: {
      plugin: m.name,
      tier: m.tier
    }
  });
}
var _t = (e, r) => {
  e.delete(r);
};
function pe(e, r) {
  let {
      environmentId: environmentId_4,
      event: event_3,
      leftOut: leftOut_2
    } = r,
    {
      environment: environment_3,
      name: name_4,
      tier: tier_2
    } = H(e, environmentId_4),
    weakMap_3 = new WeakMap();
  function d(e_5) {
    let w = weakMap_3.get(e_5) ?? L({
      environment: environment_3,
      name: name_4,
      event: event_3,
      e: e_5
    });
    return weakMap_3.set(e_5, w), w;
  }
  function y(x) {
    let w = x;
    return environment_3.streamNextFor(TVn({
      ...CVn(x),
      call: h => (environment_3.freezeForNext(MNt(h, name_4)), w(h)),
      to: (h, ...b) => (environment_3.freezeForNext(MNt(h, name_4)), Y(H(e, environmentId_4), b), pLr(h, w, b))
    }));
  }
  let v = (registration, w) => D(w, h => e.framing.run({
    environmentId: environmentId_4,
    registration: registration
  }, h));
  return environment_3.activation.registrations.streamClauses(event_3, leftOut_2).map(item => {
    if (item.kind === "value") return F2o(j(e, r, item.hook));
    let {
        registration: registration_2
      } = item,
      h = P => async (s, u) => v(registration_2, await P(d(s), y(u))),
      b = item.catch;
    return {
      name: name_4,
      environmentId: environmentId_4,
      tier: tier_2,
      run: h(item.open),
      ...(b !== void 0 && {
        catch: h(b)
      })
    };
  });
}
function Yt(e, {
  request: request_2,
  hostNext: hostNext,
  signal: signal_3
}) {
  let {
      event: event_4,
      leftOut: leftOut_3,
      environments: environments
    } = request_2,
    handlers = environments.flatMap(d => pe(e, {
      environmentId: d,
      event: event_4,
      leftOut: leftOut_3?.find(y => y.environmentId === d)?.registrations
    })),
    bottom = (d, y, v = z6e) => hostNext(d, y, v);
  return {
    e: request_2.payload,
    handlers: handlers,
    site: $Ce(event_4, request_2.raise),
    signal: signal_3,
    bottom: bottom,
    origin: request_2.origin,
    floors: request_2.floors
  };
}
function lLr({
  hostOps: hostOps_2,
  hostStreamOps: hostStreamOps_2,
  stamp: t,
  createEnvironment: createEnvironment
}) {
  let n = Xe(hostOps_2, hostStreamOps_2, t),
    p = createEnvironment ?? xLr,
    {
      environments: environments_2,
      loading: loading,
      dispatching: dispatching,
      framing: framing,
      serving: serving,
      answering: answering,
      presses: presses
    } = n;
  async function within(s, u, i) {
    if (u === "ui.render") n.taking.set(s, new Set());
    let c;
    try {
      return c = await dispatching.run(s, () => answering.run(void 0, i)), c;
    } finally {
      wt(n, s, c);
    }
  }
  let dispatch = async (s, u, signal_4) => ({
      result: await within(s.id, s.event, () => E0({
        e: s.payload,
        handlers: s.environments.map(c => j(n, {
          environmentId: c,
          event: s.event,
          leftOut: s.leftOut?.find(g => g.environmentId === c)?.registrations
        })),
        site: $Ce(s.event, s.raise),
        signal: signal_4,
        bottom: (c, g, T = z6e) => u(c, g, T),
        origin: s.origin,
        floors: s.floors,
        cutAt: s.cutAt
      }))
    }),
    withinSteps = (s, u) => D(u, i => dispatching.run(s, () => answering.run(void 0, i)));
  return {
    currentDispatch: () => dispatching.getStore(),
    opFailureOf: s => Array.from(environments_2.values(), u => u.environment.opFailureOf(s)).find(item => item !== void 0),
    ownsValue: s => Array.from(environments_2.values()).some(item => item.environment.ownsValue(s)),
    has: s => environments_2.has(s),
    async load(environmentId_5, u) {
      let abortController_2 = new AbortController();
      loading.set(environmentId_5, abortController_2);
      let environment_4;
      try {
        environment_4 = await p(u, Lt(n, environmentId_5), {
          stamp: t ? {
            view: t,
            environmentId: environmentId_5
          } : void 0,
          signal: abortController_2.signal,
          hostStream: Mt(n, environmentId_5),
          framed: (registration_3, T) => framing.run({
            environmentId: environmentId_5,
            registration: registration_3
          }, T),
          blamedFor: () => X(n)[0]
        });
      } finally {
        loading.delete(environmentId_5);
      }
      return environments_2.set(environmentId_5, {
        environment: environment_4,
        name: u.pluginName,
        tier: u.tier,
        nextTo: new Set(u.scan.nextTo ?? []),
        answersForEngine: PLr(u.modulePath)
      }), {
        registered: environment_4.activation.registrations.registered
      };
    },
    unload(s) {
      loading.get(s)?.abort(), loading.delete(s);
      let u = environments_2.get(s);
      if (u) environments_2.delete(s), n.resolving.delete(s), u.environment.dispose();
      for (let i of presses.keys()) if (i.startsWith(N(s, 0).slice(0, -1))) presses.delete(i);
    },
    dispatch: dispatch,
    dispatchStream: (request_3, hostNext_2, signal_5) => u1(withinSteps(request_3.id, GVn(Yt(n, {
      request: request_3,
      hostNext: hostNext_2,
      signal: signal_5
    })))),
    link: s => j(n, s),
    linkStreams: s => pe(n, s),
    within: within,
    withinSteps: withinSteps,
    async resolveTables(environmentId_6, u) {
      let {
          environment: environment_5
        } = H(n, environmentId_6),
        c = (n.resolving.get(environmentId_6) ?? 0) + 1;
      n.resolving.set(environmentId_6, c);
      let g = ie(),
        T = await Promise.all(u.map(async k => ({
          surface: k.surface,
          component: k.component,
          answer: await $t(n, {
            environmentId: environmentId_6,
            request: k,
            core: g[k.surface]
          })
        })));
      if (environments_2.get(environmentId_6)?.environment === environment_5 && n.resolving.get(environmentId_6) === c) environment_5.storeResolved(T);
    },
    build: (s, u, i) => {
      H(n, s).environment.activation.finalize(u, i);
    },
    callInterface(s, {
      name: name_5,
      method: method,
      args: args_3
    }, g) {
      let {
        environment: environment_6
      } = H(n, s);
      if (g) n.servingLive.add(g.callId);
      let C = g ? setTimeout(_t, Dhe, n.servingLive, g.callId) : void 0;
      function k() {
        if (clearTimeout(C), g) n.servingLive.delete(g.callId);
      }
      let F = () => eOo(t, g?.callers ?? [], () => environment_6.activation.callInterface(name_5, method, environment_6.cloneIn(args_3)));
      try {
        return framing.run(void 0, () => answering.run(void 0, () => serving.run(g, F))).finally(k);
      } catch (error) {
        throw k(), error;
      }
    },
    press(s, u, i) {
      let {
          environment: environment_7
        } = H(n, s),
        g = presses.get(N(s, u));
      if (g === void 0) return Promise.reject(new De(`ui.press/ui.input/ui.select: no handler is held under handle ${u}`));
      let T = ze(i);
      return framing.run(void 0, () => answering.run(T, () => environment_7.invoke(g, [environment_7.cloneIn(i)]).then(() => {
        return;
      }).finally(() => {
        T.isLive = !1;
      })));
    },
    releasePresses: (s, u) => {
      for (let i of u) presses.delete(N(s, i));
    }
  };
}
function Vz(e, r) {
  let t = e.get(r);
  return e.delete(r), t;
}
function fNt(e, r) {
  for (let t of e.values()) t.reject(new De(r));
  e.clear();
}
var _Vn = 0;
var cLr = 2;
var dLr = 1;
var R2o = 3;
export { adn, aLr, yVn, ldn, ydt, pNt, C2o, lLr, _Vn, R2o, cLr, dLr, fNt, Vz };