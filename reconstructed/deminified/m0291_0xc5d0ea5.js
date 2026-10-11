// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { we, N2 } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { l, v } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Rt, XY, JY, Yi, q$, Ujt, Uxe, ns } from "B:/~BUN/root/chunk-54p0h65d.js";
import { Fn } from "B:/~BUN/root/chunk-339q6g5w.js";
import { b, J, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { _, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { oe } from "B:/~BUN/root/chunk-shgdrs47.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { Cn } from "B:/~BUN/root/chunk-2swveyqa.js";
import { Eln, dt } from "B:/~BUN/root/chunk-hhgrczac.js";
import { gq, E0, $n, NS, IVn, bdt, $Ce, j6e, Pte } from "B:/~BUN/root/chunk-0w5kpsps.js";
import { De, ni } from "B:/~BUN/root/chunk-5dk9zqaz.js";
import { G } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { AD } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { E1, le } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { Ri, $m } from "B:/~BUN/root/chunk-vpejnsp4.js";
import { pB } from "B:/~BUN/root/chunk-yeg3gem6.js";
import { Zc } from "B:/~BUN/root/chunk-hfe3cbfz.js";
import { h3, Xqe } from "B:/~BUN/root/chunk-3p1f5rvt.js";
import { vn } from "B:/~BUN/root/chunk-z24e0xw2.js";
import { o, u } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { L } from "B:/~BUN/root/chunk-z1enakv9.js";
import { vo } from "B:/~BUN/root/chunk-yv67t8hr.js";
function me() {
  let e,
    r = new Set();
  return {
    bind: n => {
      e = n;
      let s = [...r];
      if (r.clear(), !n) return;
      for (let i of s) i(n);
    },
    release: n => {
      if (e === n) e = void 0;
    },
    current: () => e,
    whenBound: n => e ? n(e) : void r.add(n)
  };
}
var y = Rt(me(), e => e.bind(void 0));
var Pkr = y.bind;
var release = y.release;
var Ikr = () => y.current()?.composer;
var current = y.current;
var whenBound = y.whenBound;
function Nzo(e) {
  let r = e ?? oe();
  return AD(r) ?? Fn(r) ?? we();
}
var Da = Rt(() => dt().panes, e => e().setState(() => Eln));
var yS = {};
vo(yS, {
  ASKED_MAX: () => U,
  ASKED_ROW_SCHEMA: () => D,
  EMPTY_PANES: () => Eln,
  PANE_ID_MAX: () => IVn,
  askedLatch: () => I,
  askedPaneOf: () => cPt,
  closePane: () => fPt,
  closePanesOf: () => ayo,
  cycledPaneId: () => lyo,
  default: () => yS,
  everyPane: () => WDe,
  focusPane: () => l9,
  forgetAsked: () => V,
  forgetDismissed: () => E,
  hasAsked: () => x,
  isToastHoldShown: () => Fkr,
  keepAsked: () => S,
  keptAsked: () => P,
  nextPaneId: () => $kr,
  offerPlacement: () => Ukr,
  openFloor: () => A,
  openPane: () => cyo,
  paneCloseProblem: () => dyo,
  paneIdProblem: () => bdt,
  paneManners: () => W,
  paneOpenProblem: () => uyo,
  panesOf: () => pyo,
  panesStore: () => Da,
  placeWaiting: () => fyo,
  placeWaitingRemote: () => ft,
  placedPanes: () => w,
  placementAtOpen: () => Y,
  raiseClose: () => mPt,
  rememberAsked: () => myo,
  remotePlacement: () => X,
  seedAsked: () => O,
  settleFocusRequest: () => JFn,
  showPane: () => gyo,
  shownPane: () => Kot,
  withKeptAsked: () => z,
  withoutPane: () => q
});
var I = Rt(ni(), e => e.set(void 0));
var U = 64;
var cPt = (plugin, id) => ({
  plugin: plugin,
  id: id
});
var D = f(() => u({
  plugin: o(),
  id: o()
}));
var dPt = Rt(ni(), e => e.set(void 0));
var uPt = Rt(ni(), e => e.set(void 0));
var pPt = Rt(ni(), e => e.set(void 0));
var Vot = (e, r) => `${e}\x00${r}`;
function qot(e, r) {
  return pPt.get()?.get(Vot(e, r)) ?? 0;
}
function Mqe(e, r) {
  let n = new Map(e);
  for (let s of r) n.delete(s);
  return n;
}
function Hkr(e, r) {
  let n = Vot(e, r),
    s = qot(e, r) + 1;
  dPt.set(Mqe(dPt.get() ?? new Map(), [n])), uPt.set(Mqe(uPt.get() ?? new Map(), [n])), pPt.set(new Map(pPt.get()).set(n, s));
}
function q(e, r) {
  let open = e.open.filter(item => !r(item)),
    unplaced = e.unplaced.filter(item => !r(item));
  if (open.length === e.open.length && unplaced.length === e.unplaced.length) return e;
  let m = new Set([...open, ...unplaced].map(item => item.id)),
    a = d => m.has(d ?? "") ? d : null;
  return {
    open: open,
    unplaced: unplaced,
    asked: e.asked,
    shownId: a(e.shownId) ?? open.at(-1)?.id ?? null,
    focusedId: a(e.focusedId),
    focusRequest: a(e.focusRequest),
    placements: e.placements,
    closing: e.closing.filter(item => m.has(item))
  };
}
function fPt(e) {
  Da().setState(r => q(r, n => n.id === e)), Hkr("Pane", e);
}
var WDe = e => [...e.open, ...e.unplaced];
function x(e, r) {
  return e.asked.some(item => item.id === r.id && item.plugin === r.plugin);
}
function P(e) {
  let r = e.pluginPanes?.asked;
  return Array.isArray(r) ? r.flatMap(item => {
    let s = D().safeParse(item);
    return s.success ? [s.data] : [];
  }) : [];
}
var z = (e, asked) => ({
  ...e,
  pluginPanes: {
    ...e.pluginPanes,
    asked: asked
  }
});
function S(e, r) {
  let n = r === "asked",
    s = !1;
  E1(i => {
    let m = P(i),
      a = m.filter(item => item.plugin !== e.plugin || item.id !== e.id);
    return s = a.length < m.length !== n, s ? z(i, n ? [...a, cPt(e.plugin, e.id)].slice(-U) : a) : i;
  }).then(i => {
    if (s) i ? _("plugin_function_hooks_pane_ask") : p("plugin_function_hooks_pane_ask", "not_persisted");
  });
}
function V(e) {
  Da().setState(r => x(r, e) ? {
    ...r,
    asked: r.asked.filter(item => item.plugin !== e.plugin || item.id !== e.id)
  } : r), S(e, "dismissed");
}
function E(e, r, n) {
  if (r.kind === "person" && n !== void 0) V(cPt(n, e));
}
async function mPt(id_2, origin) {
  let n = Da().getState(),
    s = n.closing.includes(id_2),
    i = origin.kind === "unload",
    m = WDe(n).find(item => item.id === id_2)?.plugin,
    a = !1;
  if (i) fPt(id_2);
  if (s) return;
  let handlers = pB("ui.close").filter(item => !i || item.name !== m);
  if (handlers.length === 0) {
    fPt(id_2), E(id_2, origin, m);
    return;
  }
  if (!i) Da().setState(c => ({
    ...c,
    closing: [...c.closing, id_2]
  }));
  try {
    let c = await E0({
        e: {
          id: id_2,
          origin: origin
        },
        handlers: handlers,
        site: $Ce("ui.close"),
        bottom: k => {
          if (k.id !== id_2 || Da().getState().closing.includes(id_2)) fPt(k.id), a = k.id === id_2;
          return Promise.resolve({
            value: void 0
          });
        }
      }),
      h = Da().getState();
    if (h.closing.includes(id_2) && WDe(h).some(item => item.id === id_2)) t(`ui.close ${id_2} (${origin.kind}): kept open by a hook` + (c.deny === void 0 ? "" : ` (${c.deny})`));
  } catch (error) {
    t(`ui.close ${id_2} (${origin.kind}): the chain failed: ` + l(error), {
      level: "error"
    });
  } finally {
    if (Da().setState(c => c.closing.includes(id_2) ? {
      ...c,
      closing: c.closing.filter(item => item !== id_2)
    } : c), a) E(id_2, origin, m);
  }
}
function ayo(e) {
  let r = WDe(Da().getState());
  for (let n of r) if (n.plugin === e) mPt(n.id, {
    kind: "unload"
  });
}
function lyo(e, r) {
  let n = e.open.length,
    s = e.open.findIndex(item => item.id === e.shownId);
  return n > 1 && s >= 0 ? e.open[(s + r + n) % n]?.id ?? null : null;
}
var l9 = e => Da().setState(r => {
  let n = e === null || r.open.some(item => item.id === e),
    focusedId = n ? e : r.focusedId,
    shownId = n && e !== null ? e : r.shownId;
  return r.focusedId === focusedId && r.shownId === shownId && r.focusRequest === null ? r : {
    ...r,
    focusedId: focusedId,
    shownId: shownId,
    focusRequest: null
  };
});
var Kot = e => e.open.find(item => item.id === e.shownId);
var Fkr = e => e.placements > 0 && Kot(e)?.holdToasts === !0;
function $kr(e) {
  let r = e.open.findIndex(item => item.id === e.focusedId);
  return e.open[r + 1]?.id ?? null;
}
function Ukr() {
  return Da().setState(e => ({
    ...e,
    placements: e.placements + 1
  })), () => Da().setState(e => ({
    ...e,
    placements: e.placements - 1
  }));
}
var A = (e, r) => x(e, r) ? h3 : Xqe;
var Ake = Rt(ni(), e => e.set(void 0));
function W(e) {
  return {
    ...(e.closeOnEscape && {
      closeOnEscape: e.closeOnEscape
    }),
    ...(e.holdToasts && {
      holdToasts: e.holdToasts
    }),
    ...(e.rows !== void 0 && {
      rows: e.rows
    }),
    ...(e.columns !== void 0 && {
      columns: e.columns
    })
  };
}
function w(e, r, focusRequest) {
  let s = e.open.some(item => item.id === r.id),
    i = e.open.map(item => item.id === r.id ? {
      ...r,
      plugin: item.plugin
    } : item);
  return {
    open: s ? i : [...e.open, r],
    unplaced: e.unplaced.filter(item => item.id !== r.id),
    asked: e.asked,
    shownId: s ? e.shownId : e.focusedId ?? r.id,
    focusedId: e.focusedId,
    focusRequest: focusRequest,
    placements: e.placements,
    closing: e.closing
  };
}
function de() {
  let e = new Map(),
    list = () => [...e.values()];
  return {
    attach: n => {
      let s = e.get(n.clientId);
      if (s === void 0) return e.set(n.clientId, n), !0;
      if (n.viewport !== void 0) e.set(n.clientId, {
        ...s,
        viewport: {
          ...s.viewport,
          ...n.viewport
        }
      });
      return !1;
    },
    detach: n => {
      let s = e.get(n);
      return e.delete(n), s;
    },
    hasSurface: n => list().some(item => item.surface === n),
    list: list,
    surfaces: () => L(list().map(item => item.surface))
  };
}
var lPt = Rt(de(), e => {
  for (let r of e.list()) e.detach(r.clientId);
});
var ce = () => lPt.list().filter(item => item.viewport?.isFullscreen !== void 0);
function ue() {
  return lPt.list().filter(item => item.viewport !== void 0);
}
function X() {
  let e = ue();
  if (e.length === 0) return;
  if (ce().length > 0) return {
    isPlaced: !0
  };
  return {
    isPlaced: !1,
    reason: `no attached surface places panes (${e.map(item => item.clientId).join(", ")}): placed when a surface that does attaches, or once they detach`
  };
}
function Y(e, r, n) {
  let s = Ake.get()?.columns,
    i = A(e, r);
  if (s === void 0) return X() ?? {
    isPlaced: !0
  };
  if (n || s >= i) return {
    isPlaced: !0
  };
  return {
    isPlaced: !1,
    reason: `unasked below ${i} columns (${s} now${i === h3 ? ", an id the person opened before" : ""}): placed when the person opens it, or when the terminal is widened to ${i} columns`
  };
}
function O() {
  if (I.get()) return;
  I.set(!0);
  let e = P(le());
  if (e.length === 0) return;
  Da().setState(r => ({
    ...r,
    asked: [...e.filter(item => !x(r, item)), ...r.asked]
  }));
}
function cyo(e, plugin_2, n) {
  O();
  let title = e.title ?? e.id,
    i = e.focus === !0 ? e.id : void 0,
    m = W(e),
    a = {
      id: e.id,
      plugin: plugin_2
    },
    d = g => g?.title === title && g.closeOnEscape === m.closeOnEscape && g.holdToasts === m.holdToasts && g.rows === m.rows && g.columns === m.columns,
    c,
    h = !1;
  if (Da().setState(g => {
    let R = n && !x(g, a),
      ne = g.open.find(item => item.id === e.id),
      N = g.unplaced.find(item => item.id === e.id),
      se = ne !== void 0,
      Ee = N !== void 0,
      ie = {
        id: e.id,
        plugin: N?.plugin ?? plugin_2
      };
    c = se ? {
      isPlaced: !0
    } : Y(g, ie, n), h = R;
    let isPlaced = c.isPlaced,
      He = d(ne) && i === void 0 && !R,
      K = {
        ...ie,
        title: title,
        ...m
      },
      fe = R ? {
        ...g,
        asked: [...g.asked, a]
      } : g,
      Me = {
        ...fe,
        unplaced: Ee ? g.unplaced.map(item => item.id === e.id ? K : item) : [...g.unplaced, K]
      },
      _e = se ? He : !isPlaced && d(N) && !R,
      je = isPlaced ? w(fe, K, i ?? g.focusRequest) : Me;
    return _e ? g : je;
  }), h) S(a, "asked");
  let C = c ?? {
      isPlaced: !0
    },
    k = Ake.get()?.columns ?? "unmeasured",
    re = n ? "asked" : "unasked",
    $e = C.isPlaced ? "placed" : `waits unplaced (${C.reason})`;
  return t(`ui.open ${plugin_2} ${e.id} (${re}, ${k} columns): ${$e}`), C;
}
function dyo(e) {
  let r = $n(e?.origin) === $n({
    kind: "plugin"
  });
  return bdt(e?.id) ?? (r ? void 0 : "origin is the engine's to set");
}
function H(e) {
  return Array.isArray(e) && e.length > 0 && e.every(item => typeof item === "string") && e[0] !== "" ? void 0 : "takes argv, a non-empty list of strings naming the command first";
}
function M(e, r) {
  return e === void 0 || G(e) && Object.values(e).every(item => typeof item === "string") ? void 0 : `${r} is an object of strings`;
}
function Hzo(e) {
  let r = typeof e?.name !== "string" || e.name === "",
    n = e?.fallback === void 0;
  return r ? "takes the flag's name" : n ? "takes a fallback, the value where the flag table has no say" : void 0;
}
var iyo = e => e !== void 0 && typeof e !== "string";
function Mkr(e, r) {
  return typeof e === "number" && Number.isInteger(e) && e > 0 && e <= r;
}
function Dkr(e) {
  let r;
  try {
    r = b(e);
  } catch (error) {
    return `value is not JSON data: ${l(error)}`;
  }
  let n = r;
  if (typeof n !== "string") return `value is not JSON data: ${e === void 0 ? "undefined" : `a ${typeof e}`}`;
  return n.length > Pte ? `the value is ${n.length} characters, over the ${Pte} limit` : void 0;
}
function XFn(e) {
  return typeof e?.key === "string" ? void 0 : "takes a key";
}
function Fzo(e) {
  let r = e?.agentId,
    n = e?.as,
    s = r === void 0 || typeof r === "string" && r !== "",
    i = n === void 0 || n === "api";
  if (!s) return `takes agentId, a non-empty string (got ${String(r)})`;
  return i ? void 0 : `takes as "api" or none (got ${String(n)})`;
}
import { isAbsolute as No, win32 as Ko } from "path";
function Kie(e) {
  let r = N2(),
    n = r === null ? [] : Uxe(r);
  if (Uxe(e).some(item => !n.includes(item))) return !0;
  if (!(Ujt(e) || q$(e))) return !1;
  if (ns(e)) return r === null || XY(e, r);
  let m = Yi(e) ? JY(e) : null,
    a = r === null ? null : JY(r);
  return m === null || m !== a;
}
function $zo(e) {
  let r = e?.names;
  if (!Array.isArray(r)) return "takes names, a list of relative .md file names";
  for (let n of ["of", "below"]) {
    let s = e?.[n];
    if (s !== void 0 && (typeof s !== "string" || s === "")) return `takes ${n}, a path, when given`;
    if (typeof s === "string" && Kie(s)) return "a network location is not reached from here";
  }
  for (let n of r) {
    if (typeof n !== "string" || !n.toLowerCase().endsWith(".md")) return `takes names, each a .md file name (${JSON.stringify(n)})`;
    if (No(n) || Ko.isAbsolute(n) || n.split(/[\\/]/).includes("..")) return `takes names, each relative with no ".." (${n})`;
  }
  return;
}
function Got(e) {
  let r = e?.path;
  if (typeof r !== "string" || r === "") return "takes a path";
  return Kie(r) ? "a network location is not reached from here" : void 0;
}
function Uzo(e) {
  let r = e?.as === "text" || e?.as === "bytes";
  return Got(e) ?? (r ? void 0 : 'as is "text" or "bytes"');
}
function Bzo(e) {
  let r = typeof e?.resolve === "boolean";
  return Got(e) ?? (r ? void 0 : "resolve is true or false");
}
var Qen = 600000;
function jzo(e) {
  let r = H(e?.argv);
  if (r !== void 0) return r;
  let n = e?.init;
  if (n === void 0) return;
  if (!G(n)) return "takes init, { cwd?, env?, stdin?, timeoutMs? }";
  if (n.cwd !== void 0 && (typeof n.cwd !== "string" || n.cwd === "")) return "init.cwd is a non-empty path";
  let i = M(n.env, "init.env");
  if (i !== void 0) return i;
  if (n.stdin !== void 0 && typeof n.stdin !== "string") return "init.stdin is a string";
  return n.timeoutMs !== void 0 && !Mkr(n.timeoutMs, Qen) ? `init.timeoutMs is a whole number of ms, 1 to ${Qen}` : void 0;
}
function Wzo(e) {
  if (!G(e)) return "takes { argv, cwd?, env?, input? }";
  let {
      argv: argv,
      cwd: cwd,
      env: env,
      input: input
    } = e,
    m = cwd !== void 0 && (typeof cwd !== "string" || cwd === ""),
    a = input !== void 0 && typeof input !== "string";
  return H(argv) ?? (m ? "cwd is a non-empty path" : void 0) ?? M(env, "env") ?? (a ? "input is a string" : void 0);
}
function Lkr(e) {
  let r = e?.name,
    n = e?.description,
    s = typeof r !== "string" || !j6e.test(r),
    i = typeof n === "string" && !!n.trim();
  return (s ? "name is letters, digits, _ or - (up to 64)" : void 0) ?? (i ? void 0 : "needs a description");
}
var zzo = e => XFn(e) ?? Dkr(e?.value);
var a9 = {};
vo(a9, {
  TOOL_SCHEMA_LIMIT: () => ee,
  default: () => a9,
  forgetRegisteredTools: () => Jen,
  registered: () => uB,
  registeredToolsOf: () => list_2,
  registrations: () => Z,
  unchangedRegistration: () => syo
});
function Z() {
  let e = new Map(),
    r = new Map(),
    n = new Set();
  return {
    list: s => [...(e.get(s)?.values() ?? [])],
    own: s => {
      let i = e.get(s) ?? new Map();
      return e.set(s, i), i;
    },
    serverKey: s => r.get(s),
    ownerOfKey: s => [...r.entries()].find(([, i]) => i === s)?.[0],
    keyed: (s, i) => {
      r.set(s, i), n.add(i);
    },
    minted: s => n.has(s),
    forget: s => {
      e.delete(s), r.delete(s);
    }
  };
}
var uB = Z();
function Jen(e) {
  let r = uB.serverKey(e);
  if (uB.forget(e), r !== void 0) current()?.removeMcpServer(r);
}
var list_2 = uB.list;
var ee = 65536;
var YFn = (e, r) => `mcp__${vn(e)}__${r}`;
function ge() {
  let e;
  return {
    set: r => {
      e = r;
    },
    current: () => e
  };
}
var j = ge();
var Lzo = e => {
  j.set(e);
};
var current_2 = j.current;
function syo(e, r, n) {
  let s = uB.list(n).find(item => item.name === r.name),
    i = uB.serverKey(n);
  if (s === void 0 || i === void 0 || b(s) !== b(r)) return;
  let a = YFn(i, r.name);
  return e.tools().some(item => item.name === a) ? a : void 0;
}
function Gzo(e) {
  if (!G(e)) return "inputSchema must be a JSON schema object";
  let r;
  try {
    r = b(e).length;
  } catch (error) {
    return `inputSchema is not JSON data: ${l(error)}`;
  }
  return r > ee ? `inputSchema is ${r} characters serialized, over the ${ee} limit` : void 0;
}
function Oqe(e) {
  if (typeof e !== "string") return "takes a string text";
  return e.length > NS ? `text over ${NS} characters` : void 0;
}
function Vzo(e) {
  let r = e?.breakdown,
    n = e?.columns;
  if (!(r === void 0 || r === "summary" || r === "full")) return `takes breakdown "summary" or "full" (got ${String(r)})`;
  return n === void 0 || typeof n === "number" && Number.isInteger(n) && n > 0 ? void 0 : `takes columns, a positive whole number (got ${String(n)})`;
}
var regExp = new RegExp(`[${gq.escape}${gq.loneSurrogate}${gq.placeholder}]`, "u");
var GA = e => regExp.test(e);
function uyo(e) {
  let r = e?.title,
    n = r !== void 0,
    s = typeof r === "string" && GA(r),
    i = ["focus", "closeOnEscape", "holdToasts"].find(item => e?.[item] !== void 0 && e[item] !== !0),
    m = ["rows", "columns"].find(item => {
      let d = e?.[item];
      return d !== void 0 && !(typeof d === "number" && Number.isInteger(d) && d > 0);
    });
  return bdt(e?.id) ?? (n ? Oqe(r) : void 0) ?? (s ? "title holds a control character" : void 0) ?? (i === void 0 ? void 0 : `${i} is true or left out`) ?? (m === void 0 ? void 0 : `${m} is a positive whole number or left out (got ${String(e?.[m])})`);
}
function pyo(e) {
  let r = Da().getState(),
    n = new Set(r.open);
  return Object.freeze(WDe(r).filter(item => item.plugin === e).map(item => Object.freeze({
    id: item.id,
    title: item.title,
    isShown: r.shownId === item.id,
    isFocused: r.focusedId === item.id,
    isPlaced: n.has(item)
  })));
}
function fyo(e) {
  let unplaced_2 = Da().getState().unplaced;
  Da().setState(s => s.unplaced.filter(item => e >= A(s, item)).reduce((acc, item) => w(acc, item, acc.focusRequest), s));
  let n = new Set(Da().getState().open);
  for (let s of unplaced_2.filter(item => n.has(item))) t(`ui.open ${s.plugin} ${s.id} (waiting, ${e} columns): placed`);
}
function ft(e) {
  let unplaced_3 = Da().getState().unplaced;
  if (unplaced_3.length === 0) return;
  Da().setState(n => n.unplaced.reduce((acc, item) => w(acc, item, acc.focusRequest), n));
  for (let n of unplaced_3) t(`ui.open ${n.plugin} ${n.id} (waiting, ${e}): placed`);
}
function myo(e) {
  O();
  let r = !1;
  if (Da().setState(n => (r = !x(n, e), r ? {
    ...n,
    asked: [...n.asked, {
      ...e
    }]
  } : n)), r) S(e, "asked");
}
function JFn(e) {
  let {
    focusRequest: focusRequest_2
  } = Da().getState();
  if (focusRequest_2 === null) return;
  e ? l9(focusRequest_2) : Da().setState(n => ({
    ...n,
    focusRequest: null
  }));
}
var gyo = shownId_2 => Da().setState(r => r.shownId === shownId_2 || !r.open.some(item => item.id === shownId_2) ? r : {
  ...r,
  shownId: shownId_2,
  focusedId: r.focusedId === null ? null : shownId_2
});
var xt = /^(con|prn|aux|nul|com[1-9]|lpt[1-9])(\.|$)/i;
var he = 64;
var yt = 12;
var ht = {
  realpath: !1,
  retries: {
    retries: 10,
    minTimeout: 5,
    maxTimeout: 100
  },
  onCompromised: e => {
    t(`$.store lock compromised: ${l(e)}`, {
      level: "warn"
    });
  }
};
var ke = e => e.catch(() => {
  return;
});
function jDe() {
  let e = Promise.resolve();
  return r => {
    let n = e.then(r, r);
    return e = ke(n), n;
  };
}
function Se() {
  let e = new Map();
  return r => {
    let n = e.get(r) ?? jDe();
    return e.set(r, n), n;
  };
}
var Pt = /^[a-z0-9._-]+$/;
var At = Se();
import { mkdir as $t } from "fs/promises";
import { dirname as Et } from "path";
import { join as Ct } from "path";
import { createHash as bt } from "crypto";
function Te(e) {
  if (Pt.test(e) && !xt.test(e) && e.length <= he && e !== "." && e !== "..") return `${e}.json`;
  let n = e.replace(/[^a-zA-Z0-9_-]/g, "_"),
    s = bt("sha256").update(e).digest("hex").slice(0, yt);
  return `${n.slice(0, he) || "plugin"}-${s}.json`;
}
var B = e => Ct(Zc(), "store", Te(e));
async function Pe(e) {
  let r = B(e);
  return await $t(Et(r), {
    recursive: !0
  }), r;
}
import { utimes as Ht } from "fs/promises";
async function Mt(e, r) {
  let date = new Date();
  try {
    await Ht(r, date, date);
  } catch (error) {
    t(`$.store (${e}): could not touch ${r}: ${l(error)}`, {
      level: "warn"
    });
  }
}
import { readFile as vt } from "fs/promises";
var be = {
  async read(e) {
    let r = B(e),
      n;
    try {
      n = await vt(r, "utf8");
    } catch (error) {
      if (v(error) === "ENOENT") return {};
      throw new De(`${e}: store file ${r} is unreadable (${l(error)})`);
    }
    let s;
    try {
      s = J(n);
    } catch (error) {
      throw new De(`${e}: store file ${r} is malformed (${l(error)})`);
    }
    if (!G(s)) throw new De(`${e}: store file ${r} is malformed (the JSON is not an object)`);
    return await Mt(e, r), s;
  },
  write: async (e, r) => Cn(await Pe(e), `${b(r, null, 2)}
`),
  async lock(e) {
    let r = await Pe(e);
    return Ri(r, {
      lockfilePath: `${r}.lock`,
      ...ht
    });
  }
};
function Oe() {
  let e = ni();
  return {
    setBackend: e.set,
    backendOverride: e.get
  };
}
var Kt = Oe();
var Re = () => Kt.backendOverride() ?? be;
var te = 256;
async function Ie(e, r) {
  try {
    if (e.event !== "keys" && e.key.length > te) throw new De(`${r}: $.store.${e.event}: the key is ${e.key.length} characters, over the ${te} limit`);
    let n = Re(),
      i = e.event === "set" || e.event === "delete" ? await n.lock?.(r) : void 0;
    try {
      let m = await n.read(r);
      switch (e.event) {
        case "get":
          return Object.hasOwn(m, e.key) ? m[e.key] : void 0;
        case "keys":
          return Object.keys(m);
        case "set":
          {
            let a = {
                ...m,
                [e.key]: e.value
              },
              d = b(a).length;
            if (d > Pte) throw new De(`${r}: $.store.set: the store would be ${d} characters, over the ${Pte} limit`);
            await n.write(r, a), t(`$.store.set (${r}): ${e.key}`);
            return;
          }
        case "delete":
          {
            if (!Object.hasOwn(m, e.key)) return;
            let a = {
              ...m
            };
            delete a[e.key], await n.write(r, a);
            return;
          }
      }
    } finally {
      await $m(i, `$.store.${e.event} (${r})`);
    }
  } catch (error) {
    if (error instanceof De) throw error;
    throw new De(`${r}: $.store.${e.event} failed: ${l(error)}`);
  }
}
var Yot = (e, r) => At(r)(() => Ie(e, r));
export { Pkr, Ikr, current as KW, release as Okr, whenBound as Dzo, uB, Jen, list_2 as ryo, YFn, Lzo, current_2 as oyo, syo, a9, Nzo, lPt, Ake, Hzo, iyo, Mkr, Dkr, XFn, Fzo, Kie, $zo, Got, Uzo, Bzo, Qen, jzo, Wzo, Lkr, zzo, Gzo, Oqe, Vzo, jDe, regExp as Nkr, GA, cPt, dPt, uPt, pPt, Vot, qot, Mqe, Hkr, Da, fPt, WDe, mPt, ayo, lyo, l9, Kot, Fkr, $kr, Ukr, cyo, dyo, uyo, pyo, fyo, myo, JFn, gyo, yS, Yot };