// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Me } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { L, ke } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { d, k, G } from "B:/~BUN/root/chunk-3aez4b53.js";
import { g, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { _, J, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { Tc, oi, Kx, fc } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { An } from "B:/~BUN/root/chunk-rvc0n7zm.js";
import { dl, zm } from "B:/~BUN/root/chunk-7c8rc0p5.js";
import { ce } from "B:/~BUN/root/chunk-nxwmyxnk.js";
import { yr } from "B:/~BUN/root/chunk-2zk4vqr8.js";
import { w2 } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { VE } from "B:/~BUN/root/chunk-h2myanpn.js";
import { Ie } from "B:/~BUN/root/chunk-hkh6hras.js";
import { Co } from "B:/~BUN/root/chunk-d544j3ga.js";
import { JVn, Ne } from "B:/~BUN/root/chunk-nvdqbkrt.js";
import { Qn, l0r, SHt, U3, Kme, OO, Egt, Jme } from "B:/~BUN/root/chunk-nw686kdq.js";
import { FD, ue } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { sD } from "B:/~BUN/root/chunk-01qdq3qc.js";
import { ud } from "B:/~BUN/root/chunk-472kxa0t.js";
import { lke } from "B:/~BUN/root/chunk-efcxwmhb.js";
import { MZt } from "B:/~BUN/root/chunk-vnmfp48d.js";
import { JP, GZ, Zdt } from "B:/~BUN/root/chunk-0x393xyp.js";
import { _ae } from "B:/~BUN/root/chunk-bhfm57j1.js";
import { N } from "B:/~BUN/root/chunk-nkxgam12.js";
import { o, u } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { He } from "B:/~BUN/root/chunk-8znbjmp4.js";
import { Mr } from "B:/~BUN/root/chunk-ef0msk7r.js";
var cM = {};
Mr(cM, {
  ASKED_MAX: () => K,
  ASKED_ROW_SCHEMA: () => V,
  EMPTY_PANES: () => JVn,
  PANE_ID_MAX: () => l0r,
  askedLatch: () => M,
  askedPaneOf: () => mZt,
  closePane: () => _Zt,
  closePanesOf: () => yvs,
  cycledPaneId: () => _vs,
  default: () => cM,
  everyPane: () => Iwe,
  focusPane: () => L9,
  forgetAsked: () => q,
  forgetDismissed: () => H,
  hasAsked: () => h,
  isToastHoldShown: () => aho,
  keepAsked: () => T,
  keptAsked: () => O,
  nextPaneId: () => lho,
  offerPlacement: () => bZt,
  openFloor: () => E,
  openPane: () => bvs,
  paneCloseProblem: () => Svs,
  paneIdProblem: () => SHt,
  paneManners: () => Q,
  paneOpenProblem: () => vvs,
  panesOf: () => kvs,
  panesStore: () => Ui,
  placeWaiting: () => Evs,
  placeWaitingRemote: () => Xvr,
  placedPanes: () => A,
  placementAtOpen: () => X,
  raiseClose: () => Qdt,
  rememberAsked: () => Tvs,
  remotePlacement: () => K$n,
  seedAsked: () => I,
  settleFocusRequest: () => Jvr,
  showPane: () => Qvr,
  shownPane: () => GIt,
  withKeptAsked: () => z,
  withoutPane: () => W
});
function se() {
  let e = new Map(),
    r = new Set(),
    list = () => [...e.values()],
    i = Me();
  return {
    attach: s => {
      let a = e.get(s.clientId);
      if (r.delete(s.clientId), a === void 0) return e.set(s.clientId, s), !0;
      if (s.viewport !== void 0 || s.answers !== void 0) e.set(s.clientId, {
        ...a,
        ...(s.viewport !== void 0 && {
          viewport: {
            ...a.viewport,
            ...s.viewport
          }
        }),
        ...(s.answers !== void 0 && {
          answers: s.answers
        })
      });
      return !1;
    },
    detach: s => {
      let a = e.get(s);
      return e.delete(s), r.delete(s), i.emit(s), a;
    },
    hasSurface: s => list().some(item => item.surface === s),
    list: list,
    surfaces: () => L(list().map(item => item.surface)),
    onDetach: s => i.subscribe(s),
    missed: s => {
      if (e.has(s)) r.add(s);
    },
    heard: s => void r.delete(s),
    isSilent: s => r.has(s)
  };
}
var Kw = He(se(), e => {
  for (let r of e.list()) e.detach(r.clientId);
});
var q$n = () => Kw.list().filter(item => item.viewport?.isFullscreen !== void 0);
function ie() {
  return Kw.list().filter(item => item.viewport !== void 0);
}
var Fq = He(Co(), e => e.set(void 0));
function L6(e) {
  let {
    name: name,
    marketplace: marketplace
  } = fc(e);
  return marketplace === oi && VE(name) !== void 0;
}
var M = He(Co(), e => e.set(void 0));
var K = 64;
var mZt = (plugin, id) => ({
  plugin: plugin,
  id: id
});
var V = f(() => u({
  plugin: o(),
  id: o()
}));
var gZt = He(Co(), e => e.set(void 0));
var hZt = He(Co(), e => e.set(void 0));
var yZt = He(Co(), e => e.set(void 0));
var WIt = (e, r) => `${e}\x00${r}`;
function zIt(e, r) {
  return yZt.get()?.get(WIt(e, r)) ?? 0;
}
function Jdt(e, r) {
  let n = new Map(e);
  for (let i of r) n.delete(i);
  return n;
}
function iho(e, r) {
  let n = WIt(e, r),
    i = zIt(e, r) + 1;
  gZt.set(Jdt(gZt.get() ?? new Map(), [n])), hZt.set(Jdt(hZt.get() ?? new Map(), [n])), yZt.set(new Map(yZt.get()).set(n, i));
}
var Ui = He(() => Ne().panes, e => e().setState(() => JVn));
function W(e, r) {
  let open = e.open.filter(item => !r(item)),
    unplaced = e.unplaced.filter(item => !r(item));
  if (open.length === e.open.length && unplaced.length === e.unplaced.length) return e;
  let a = new Set([...open, ...unplaced].map(item => item.id)),
    m = l => a.has(l ?? "") ? l : null;
  return {
    open: open,
    unplaced: unplaced,
    asked: e.asked,
    shownId: m(e.shownId) ?? open.at(-1)?.id ?? null,
    focusedId: m(e.focusedId),
    focusRequest: m(e.focusRequest),
    placements: e.placements,
    closing: e.closing.filter(item => a.has(item))
  };
}
function _Zt(e) {
  Ui().setState(r => W(r, n => n.id === e)), iho("Pane", e);
}
var Iwe = e => [...e.open, ...e.unplaced];
function h(e, r) {
  return e.asked.some(item => item.id === r.id && item.plugin === r.plugin);
}
import { dirname as pe, resolve as po } from "path";
function N6({
  pluginStorageId: pluginStorageId,
  pluginRoot: pluginRoot
}) {
  let {
      name: name_2,
      marketplace: marketplace_2
    } = fc(pluginStorageId),
    s = lke(pluginStorageId),
    a = pe(po(pluginRoot)),
    l = [a, pe(a)].includes(_ae()) ? "dev_mods" : "plugin_dir",
    w = s ? "managed" : marketplace_2 === Tc ? l : "installed",
    b = L6(pluginStorageId) ? "builtin" : w;
  return {
    provenance: c(b),
    ...MZt(name_2, marketplace_2, s ? new Set([name_2]) : null)
  };
}
function O(e) {
  let r = e.pluginPanes?.asked;
  return Array.isArray(r) ? r.flatMap(item => {
    let i = V().safeParse(item);
    return i.success ? [i.data] : [];
  }) : [];
}
var z = (e, asked) => ({
  ...e,
  pluginPanes: {
    ...e.pluginPanes,
    asked: asked
  }
});
function T(e, r) {
  let n = r === "asked",
    i = !1;
  FD(s => {
    let a = O(s),
      m = a.filter(item => item.plugin !== e.plugin || item.id !== e.id);
    return i = m.length < a.length !== n, i ? z(s, n ? [...m, mZt(e.plugin, e.id)].slice(-K) : m) : s;
  }).then(s => {
    if (i) {
      let a = JP(e.plugin),
        m = a && N6(a);
      s ? g("plugin_function_hooks_pane_ask", m) : p("plugin_function_hooks_pane_ask", "not_persisted", m);
    }
  });
}
function q(e) {
  Ui().setState(r => h(r, e) ? {
    ...r,
    asked: r.asked.filter(item => item.plugin !== e.plugin || item.id !== e.id)
  } : r), T(e, "dismissed");
}
function H(e, r, n) {
  if (r.kind === "person" && n !== void 0) q(mZt(n, e));
}
async function Qdt(id_2, origin) {
  let n = Ui().getState(),
    i = n.closing.includes(id_2),
    s = origin.kind === "unload",
    a = Iwe(n).find(item => item.id === id_2)?.plugin,
    m = !1;
  if (s) _Zt(id_2);
  if (i) return;
  let handlers = sD("ui.close").filter(item => !s || item.name !== a);
  if (handlers.length === 0) {
    _Zt(id_2), H(id_2, origin, a);
    return;
  }
  if (!s) Ui().setState(x => ({
    ...x,
    closing: [...x.closing, id_2]
  }));
  try {
    let x = await OO({
        e: {
          id: id_2,
          origin: origin
        },
        handlers: handlers,
        site: Kme("ui.close"),
        bottom: P => {
          if (P.id !== id_2 || Ui().getState().closing.includes(id_2)) _Zt(P.id), m = P.id === id_2;
          return Promise.resolve({
            value: void 0
          });
        }
      }),
      w = Ui().getState();
    if (w.closing.includes(id_2) && Iwe(w).some(item => item.id === id_2)) t(`ui.close ${id_2} (${origin.kind}): kept open by a hook` + (x.deny === void 0 ? "" : ` (${x.deny})`));
  } catch (error) {
    t(`ui.close ${id_2} (${origin.kind}): the chain failed: ` + d(error), {
      level: "error"
    });
  } finally {
    if (Ui().setState(x => x.closing.includes(id_2) ? {
      ...x,
      closing: x.closing.filter(item => item !== id_2)
    } : x), m) H(id_2, origin, a);
  }
}
function yvs(e) {
  let r = Iwe(Ui().getState());
  for (let n of r) if (n.plugin === e) Qdt(n.id, {
    kind: "unload"
  });
}
function _vs(e, r) {
  let n = e.open.length,
    i = e.open.findIndex(item => item.id === e.shownId);
  return n > 1 && i >= 0 ? e.open[(i + r + n) % n]?.id ?? null : null;
}
var L9 = e => Ui().setState(r => {
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
var GIt = e => e.open.find(item => item.id === e.shownId);
var aho = e => e.placements > 0 && GIt(e)?.holdToasts === !0;
function lho(e) {
  let r = e.open.findIndex(item => item.id === e.focusedId);
  return e.open[r + 1]?.id ?? null;
}
function bZt() {
  return Ui().setState(e => ({
    ...e,
    placements: e.placements + 1
  })), () => Ui().setState(e => ({
    ...e,
    placements: e.placements - 1
  }));
}
var E = (e, r) => h(e, r) ? GZ : Zdt;
function Q(e) {
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
function A(e, r, focusRequest) {
  let i = e.open.some(item => item.id === r.id),
    s = e.open.map(item => item.id === r.id ? {
      ...r,
      plugin: item.plugin
    } : item);
  return {
    open: i ? s : [...e.open, r],
    unplaced: e.unplaced.filter(item => item.id !== r.id),
    asked: e.asked,
    shownId: i ? e.shownId : e.focusedId ?? r.id,
    focusedId: e.focusedId,
    focusRequest: focusRequest,
    placements: e.placements,
    closing: e.closing
  };
}
function K$n() {
  let e = ie();
  if (e.length === 0) return;
  if (q$n().length > 0) return {
    isPlaced: !0
  };
  return {
    isPlaced: !1,
    reason: `no attached surface places panes (${e.map(item => item.clientId).join(", ")}): placed when a surface that does attaches; once they detach, as a fresh open is`
  };
}
function X(e, r, n) {
  let i = Fq.get()?.columns,
    s = E(e, r);
  if (i === void 0) return K$n() ?? {
    isPlaced: !0
  };
  if (n || i >= s) return {
    isPlaced: !0
  };
  return {
    isPlaced: !1,
    reason: `unasked below ${s} columns (${i} now${s === GZ ? ", an id the person opened before" : ""}): placed when the person opens it, or when the terminal is widened to ${s} columns`
  };
}
function I() {
  if (M.get()) return;
  M.set(!0);
  let e = O(ue());
  if (e.length === 0) return;
  Ui().setState(r => ({
    ...r,
    asked: [...e.filter(item => !h(r, item)), ...r.asked]
  }));
}
function bvs(e, plugin_2, n) {
  I();
  let title = e.title ?? e.id,
    s = e.focus === !0 ? e.id : void 0,
    a = Q(e),
    m = {
      id: e.id,
      plugin: plugin_2
    },
    l = y => y?.title === title && y.closeOnEscape === a.closeOnEscape && y.holdToasts === a.holdToasts && y.rows === a.rows && y.columns === a.columns,
    x,
    w = !1;
  if (Ui().setState(y => {
    let R = n && !h(y, m),
      ee = y.open.find(item => item.id === e.id),
      B = y.unplaced.find(item => item.id === e.id),
      oe = ee !== void 0,
      $e = B !== void 0,
      te = {
        id: e.id,
        plugin: B?.plugin ?? plugin_2
      };
    x = oe ? {
      isPlaced: !0
    } : X(y, te, n), w = R;
    let isPlaced = x.isPlaced,
      Ee = l(ee) && s === void 0 && !R,
      D = {
        ...te,
        title: title,
        ...a
      },
      ne = R ? {
        ...y,
        asked: [...y.asked, m]
      } : y,
      Re = {
        ...ne,
        unplaced: $e ? y.unplaced.map(item => item.id === e.id ? D : item) : [...y.unplaced, D]
      },
      _e = oe ? Ee : !isPlaced && l(B) && !R,
      ve = isPlaced ? A(ne, D, s ?? y.focusRequest) : Re;
    return _e ? y : ve;
  }), w) T(m, "asked");
  let b = x ?? {
      isPlaced: !0
    },
    P = Fq.get()?.columns ?? "unmeasured",
    Z = n ? "asked" : "unasked",
    Oe = b.isPlaced ? "placed" : `waits unplaced (${b.reason})`;
  return t(`ui.open ${plugin_2} ${e.id} (${Z}, ${P} columns): ${Oe}`), b;
}
function Svs(e) {
  let r = Qn(e?.origin) === Qn({
    kind: "plugin"
  });
  return SHt(e?.id) ?? (r ? void 0 : "origin is the engine's to set");
}
function v(e) {
  return Array.isArray(e) && e.length > 0 && e.every(item => typeof item === "string") && e[0] !== "" ? void 0 : "takes argv, a non-empty list of strings naming the command first";
}
function F(e, r) {
  return e === void 0 || N(e) && Object.values(e).every(item => typeof item === "string") ? void 0 : `${r} is an object of strings`;
}
function BXs(e) {
  let r = typeof e?.name !== "string" || e.name === "",
    n = e?.fallback === void 0;
  return r ? "takes the flag's name" : n ? "takes a fallback, the value where the flag table has no say" : void 0;
}
var wvs = e => e !== void 0 && typeof e !== "string";
function dho(e, r) {
  return typeof e === "number" && Number.isInteger(e) && e > 0 && e <= r;
}
function cho(e) {
  let r;
  try {
    r = _(e);
  } catch (error) {
    return `value is not JSON data: ${d(error)}`;
  }
  let n = r;
  if (typeof n !== "string") return `value is not JSON data: ${e === void 0 ? "undefined" : `a ${typeof e}`}`;
  return n.length > Jme ? `the value is ${n.length} characters, over the ${Jme} limit` : void 0;
}
function Kvr(e) {
  return typeof e?.key === "string" ? void 0 : "takes a key";
}
function jXs(e) {
  let r = e?.agentId,
    n = e?.as,
    i = r === void 0 || typeof r === "string" && r !== "",
    s = n === void 0 || n === "api";
  if (!i) return `takes agentId, a non-empty string (got ${String(r)})`;
  return s ? void 0 : `takes as "api" or none (got ${String(n)})`;
}
import { isAbsolute as vo, win32 as Fo } from "path";
function WXs(e) {
  let r = e?.names;
  if (!Array.isArray(r)) return "takes names, a list of relative .md file names";
  for (let n of ["of", "below"]) {
    let i = e?.[n];
    if (i !== void 0 && (typeof i !== "string" || i === "")) return `takes ${n}, a path, when given`;
  }
  for (let n of r) {
    if (typeof n !== "string" || !n.toLowerCase().endsWith(".md")) return `takes names, each a .md file name (${JSON.stringify(n)})`;
    if (vo(n) || Fo.isAbsolute(n) || n.split(/[\\/]/).includes("..")) return `takes names, each relative with no ".." (${n})`;
  }
  return;
}
function VIt(e) {
  let r = e?.path;
  return typeof r !== "string" || r === "" ? "takes a path" : void 0;
}
function zXs(e) {
  let r = e?.as === "text" || e?.as === "bytes";
  return VIt(e) ?? (r ? void 0 : 'as is "text" or "bytes"');
}
function GXs(e) {
  let r = typeof e?.resolve === "boolean";
  return VIt(e) ?? (r ? void 0 : "resolve is true or false");
}
var Y$n = 600000;
function VXs(e) {
  let r = v(e?.argv);
  if (r !== void 0) return r;
  let n = e?.init;
  if (n === void 0) return;
  if (!N(n)) return "takes init, { cwd?, env?, stdin?, timeoutMs? }";
  if (n.cwd !== void 0 && (typeof n.cwd !== "string" || n.cwd === "")) return "init.cwd is a non-empty path";
  let s = F(n.env, "init.env");
  if (s !== void 0) return s;
  if (n.stdin !== void 0 && typeof n.stdin !== "string") return "init.stdin is a string";
  return n.timeoutMs !== void 0 && !dho(n.timeoutMs, Y$n) ? `init.timeoutMs is a whole number of ms, 1 to ${Y$n}` : void 0;
}
function qXs(e) {
  if (!N(e)) return "takes { argv, cwd?, env?, input? }";
  let {
      argv: argv,
      cwd: cwd,
      env: env,
      input: input
    } = e,
    a = cwd !== void 0 && (typeof cwd !== "string" || cwd === ""),
    m = input !== void 0 && typeof input !== "string";
  return v(argv) ?? (a ? "cwd is a non-empty path" : void 0) ?? F(env, "env") ?? (m ? "input is a string" : void 0);
}
function uho(e) {
  let r = e?.name,
    n = e?.description,
    i = typeof r !== "string" || !Egt.test(r),
    s = typeof n === "string" && !!n.trim();
  return (i ? "name is letters, digits, _ or - (up to 64)" : void 0) ?? (s ? void 0 : "needs a description");
}
var KXs = e => Kvr(e) ?? cho(e?.value);
function YXs(e) {
  if (!N(e)) return "inputSchema must be a JSON schema object";
  try {
    _(e);
    return;
  } catch (error) {
    return `inputSchema is not JSON data: ${d(error)}`;
  }
}
var T3e = e => typeof e === "string" ? void 0 : "takes a string text";
function XXs(e) {
  let r = e?.breakdown,
    n = e?.columns;
  if (!(r === void 0 || r === "summary" || r === "full")) return `takes breakdown "summary" or "full" (got ${String(r)})`;
  return n === void 0 || typeof n === "number" && Number.isInteger(n) && n > 0 ? void 0 : `takes columns, a positive whole number (got ${String(n)})`;
}
var regExp = new RegExp(`[${U3.escape}${U3.loneSurrogate}${U3.placeholder}]`, "u");
var dx = e => regExp.test(e);
function vvs(e) {
  let r = e?.title,
    n = r !== void 0,
    i = typeof r === "string" && dx(r),
    s = ["focus", "closeOnEscape", "holdToasts"].find(item => e?.[item] !== void 0 && e[item] !== !0),
    a = ["rows", "columns"].find(item => {
      let l = e?.[item];
      return l !== void 0 && !(typeof l === "number" && Number.isInteger(l) && l > 0);
    });
  return SHt(e?.id) ?? (n ? T3e(r) : void 0) ?? (i ? "title holds a control character" : void 0) ?? (s === void 0 ? void 0 : `${s} is true or left out`) ?? (a === void 0 ? void 0 : `${a} is a positive whole number or left out (got ${String(e?.[a])})`);
}
function kvs(e) {
  let r = Ui().getState(),
    n = new Set(r.open);
  return Object.freeze(Iwe(r).filter(item => item.plugin === e).map(item => Object.freeze({
    id: item.id,
    title: item.title,
    isShown: r.shownId === item.id,
    isFocused: r.focusedId === item.id,
    isPlaced: n.has(item)
  })));
}
function Evs(e) {
  let unplaced_2 = Ui().getState().unplaced;
  Ui().setState(i => i.unplaced.filter(item => e >= E(i, item)).reduce((acc, item) => A(acc, item, acc.focusRequest), i));
  let n = new Set(Ui().getState().open);
  for (let i of unplaced_2.filter(item => n.has(item))) t(`ui.open ${i.plugin} ${i.id} (waiting, ${e} columns): placed`);
}
function Xvr(e) {
  let unplaced_3 = Ui().getState().unplaced;
  if (unplaced_3.length === 0) return;
  Ui().setState(n => n.unplaced.reduce((acc, item) => A(acc, item, acc.focusRequest), n));
  for (let n of unplaced_3) t(`ui.open ${n.plugin} ${n.id} (waiting, ${e}): placed`);
}
function Tvs(e) {
  I();
  let r = !1;
  if (Ui().setState(n => (r = !h(n, e), r ? {
    ...n,
    asked: [...n.asked, {
      ...e
    }]
  } : n)), r) T(e, "asked");
}
function Jvr(e) {
  let {
    focusRequest: focusRequest_2
  } = Ui().getState();
  if (focusRequest_2 === null) return;
  e ? L9(focusRequest_2) : Ui().setState(n => ({
    ...n,
    focusRequest: null
  }));
}
var Qvr = shownId_2 => Ui().setState(r => r.shownId === shownId_2 || !r.open.some(item => item.id === shownId_2) ? r : {
  ...r,
  shownId: shownId_2,
  focusedId: r.focusedId === null ? null : shownId_2
});
function JXs(e) {
  let r = e ?? ce();
  return w2(r) ?? yr(r) ?? ke();
}
var ae = e => e.catch(() => {
  return;
});
function lUe() {
  let e = Promise.resolve();
  return r => {
    let n = e.then(r, r);
    return e = ae(n), n;
  };
}
var it = /^(con|prn|aux|nul|com[1-9]|lpt[1-9])(\.|$)/i;
var me = 64;
var pt = 12;
var ft = {
  realpath: !1,
  retries: {
    retries: 10,
    minTimeout: 5,
    maxTimeout: 100
  },
  onCompromised: e => {
    t(`$.store lock compromised: ${d(e)}`, {
      level: "warn"
    });
  }
};
function de() {
  let e = new Map();
  return r => {
    let n = e.get(r) ?? lUe();
    return e.set(r, n), n;
  };
}
var mt = /^[a-z0-9._-]+$/;
var dt = de();
import { mkdir as gt } from "fs/promises";
import { dirname as yt } from "path";
import { join as ut } from "path";
import { createHash as lt } from "crypto";
function le(e) {
  if (mt.test(e) && !it.test(e) && e.length <= me && e !== "." && e !== "..") return `${e}.json`;
  let n = e.replace(/[^a-zA-Z0-9_-]/g, "_"),
    i = lt("sha256").update(e).digest("hex").slice(0, pt);
  return `${n.slice(0, me) || "plugin"}-${i}.json`;
}
var S = e => ut(ud(), "store", le(e));
async function xe(e) {
  let r = S(e);
  return await gt(yt(r), {
    recursive: !0,
    mode: 448
  }), r;
}
import { utimes as ht } from "fs/promises";
async function kt(e, r) {
  let date = new Date();
  try {
    await ht(r, date, date);
  } catch (error) {
    t(`$.store (${e}): could not touch ${r}: ${d(error)}`, {
      level: "warn"
    });
  }
}
import { randomUUID as Pt } from "crypto";
import { constants as Tt } from "fs";
import { copyFile as At, link as bt, mkdir as Ct, unlink as Ot, writeFile as $t } from "fs/promises";
import { dirname as Et } from "path";
import { readFile as wt } from "fs/promises";
async function ye(e) {
  let r = await wt(S(e), "utf8").catch(n => {
    if (G(n)) return;
    throw n;
  });
  return r === void 0 ? void 0 : [e, r];
}
async function he(e) {
  let r = await Kx(e).reduce(async (acc, item) => (await acc) ?? ye(item), Promise.resolve(void 0));
  if (r === void 0) return !1;
  let [n, i] = r,
    s = S(e),
    a = `${s}.carry-${Pt()}`;
  try {
    if (!N(J(i))) return !1;
    return await Ct(Et(s), {
      recursive: !0
    }), await $t(a, i, {
      flag: "wx"
    }), await bt(a, s).catch(async m => {
      if (k(m) === "EEXIST") throw m;
      await At(a, s, Tt.COPYFILE_EXCL);
    }), !0;
  } catch (error) {
    let l = k(error) === "EEXIST";
    return t(`$.store (${e}): ` + (l ? `${n}'s store was carried by another session` : `could not carry ${n}'s store: ${d(error)}`), {
      level: l ? "debug" : "warn"
    }), l;
  } finally {
    await Ot(a).catch(() => {
      return;
    });
  }
}
import { readFile as we } from "fs/promises";
async function Rt(e, r) {
  try {
    return await we(r, "utf8");
  } catch (error) {
    if (!G(error)) throw error;
  }
  if (!(await he(e))) return;
  try {
    return await we(r, "utf8");
  } catch (error) {
    if (G(error)) return;
    throw error;
  }
}
var Pe = {
  async read(e) {
    let r = S(e),
      n;
    try {
      n = await Rt(e, r);
    } catch (error) {
      throw new Ie(`${e}: store file ${r} is unreadable (${d(error)})`);
    }
    if (n === void 0) return {};
    let i;
    try {
      i = J(n);
    } catch (error) {
      throw new Ie(`${e}: store file ${r} is malformed (${d(error)})`);
    }
    if (!N(i)) throw new Ie(`${e}: store file ${r} is malformed (the JSON is not an object)`);
    return await kt(e, r), i;
  },
  write: async (e, r) => An(await xe(e), `${_(r, null, 2)}
`, 384),
  async lock(e) {
    let r = await xe(e);
    return dl(r, {
      lockfilePath: `${r}.lock`,
      ...ft
    });
  }
};
function Te() {
  let e = Co();
  return {
    setBackend: e.set,
    backendOverride: e.get
  };
}
var Lt = Te();
var be = () => Lt.backendOverride() ?? Pe;
var Y = 256;
async function Ce(e, r) {
  try {
    if (e.event !== "keys" && e.key.length > Y) throw new Ie(`${r}: $.store.${e.event}: the key is ${e.key.length} characters, over the ${Y} limit`);
    let n = be(),
      s = e.event === "set" || e.event === "delete" ? await n.lock?.(r) : void 0;
    try {
      let a = await n.read(r);
      switch (e.event) {
        case "get":
          return Object.hasOwn(a, e.key) ? a[e.key] : void 0;
        case "keys":
          return Object.keys(a);
        case "set":
          {
            let m = {
                ...a,
                [e.key]: e.value
              },
              l = _(m).length;
            if (l > Jme) throw new Ie(`${r}: $.store.set: the store would be ${l} characters, over the ${Jme} limit`);
            await n.write(r, m), t(`$.store.set (${r}): ${e.key}`);
            return;
          }
        case "delete":
          {
            if (!Object.hasOwn(a, e.key)) return;
            let m = {
              ...a
            };
            delete m[e.key], await n.write(r, m);
            return;
          }
      }
    } finally {
      await zm(s, `$.store.${e.event} (${r})`);
    }
  } catch (error) {
    if (error instanceof Ie) throw error;
    throw new Ie(`${r}: $.store.${e.event} failed: ${d(error)}`);
  }
}
var qIt = (e, r) => dt(r)(() => Ce(e, r));
export { Kw, q$n, Fq, L6, mZt, gZt, hZt, yZt, WIt, zIt, Jdt, iho, Ui, _Zt, Iwe, N6, Qdt, yvs, _vs, L9, GIt, aho, lho, bZt, K$n, bvs, Svs, BXs, wvs, dho, cho, Kvr, jXs, WXs, VIt, zXs, GXs, Y$n, VXs, qXs, uho, KXs, YXs, T3e, XXs, regExp as Yvr, dx, vvs, kvs, Evs, Xvr, Tvs, Jvr, Qvr, cM, JXs, lUe, qIt };