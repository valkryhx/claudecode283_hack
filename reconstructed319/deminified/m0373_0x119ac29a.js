// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { De } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { Ee } from "B:/~BUN/root/chunk-game8aqv.js";
import { f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { d, k, K } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { g, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { t, _, ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { hp, ri, i0, uc } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { zn } from "B:/~BUN/root/chunk-nsneqfcc.js";
import { pe } from "B:/~BUN/root/chunk-thn0wk2x.js";
import { fr } from "B:/~BUN/root/chunk-1g25msn4.js";
import { r5 } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { wR } from "B:/~BUN/root/chunk-zstr1969.js";
import { $e } from "B:/~BUN/root/chunk-fg0appz9.js";
import { KJt, vZ } from "B:/~BUN/root/chunk-apgsnbqk.js";
import { APr, Ae } from "B:/~BUN/root/chunk-eds8xkh8.js";
import { Lbo, GQe, SR, yfe, _O, EHt, yRe } from "B:/~BUN/root/chunk-n98vg3jf.js";
import { Jk, fe } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Zd, uS } from "B:/~BUN/root/chunk-3vtkd50k.js";
import { Js } from "B:/~BUN/root/chunk-yr3hf5bg.js";
import { hL } from "B:/~BUN/root/chunk-0s00dkj6.js";
import { Kc } from "B:/~BUN/root/chunk-esnm3r09.js";
import { oNe } from "B:/~BUN/root/chunk-fzefftbw.js";
import { JMt } from "B:/~BUN/root/chunk-ex2shtaj.js";
import { W$ } from "B:/~BUN/root/chunk-6sbka0ts.js";
import { yce, jMt } from "B:/~BUN/root/chunk-31hh2zwx.js";
import { sR } from "B:/~BUN/root/chunk-vxbt81wk.js";
import { hse } from "B:/~BUN/root/chunk-dzjj3jwh.js";
import { go } from "B:/~BUN/root/chunk-eyrj3wyr.js";
import { D } from "B:/~BUN/root/chunk-8mqsat26.js";
import { o, u } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { L } from "B:/~BUN/root/chunk-5ha2avah.js";
import { Rr } from "B:/~BUN/root/chunk-4qfwb3rf.js";
import { he } from "B:/~BUN/root/chunk-fet34rqr.js";
var N6 = {};
Rr(N6, {
  ASKED_MAX: () => W,
  ASKED_ROW_SCHEMA: () => V,
  EMPTY_PANES: () => APr,
  PANE_ID_MAX: () => Lbo,
  askedLatch: () => M,
  askedPaneOf: () => cIn,
  channelsInRange: () => z,
  closePane: () => mIn,
  closePanesOf: () => bIi,
  cycledPaneId: () => SIi,
  default: () => N6,
  everyPane: () => o0e,
  focusPane: () => goe,
  forgetAsked: () => X,
  forgetDismissed: () => H,
  hasAsked: () => w,
  isToastHoldShown: () => rfs,
  keepAsked: () => T,
  keptAsked: () => O,
  nextPaneId: () => ofs,
  offerPlacement: () => hIn,
  openFloor: () => I,
  openPane: () => wIi,
  paneCloseProblem: () => kIi,
  paneIdProblem: () => GQe,
  paneManners: () => Q,
  paneOpenProblem: () => vIi,
  panesOf: () => EIi,
  panesStore: () => Rl,
  placeWaiting: () => TIi,
  placeWaitingRemote: () => Clo,
  placedPanes: () => b,
  placementAtOpen: () => J,
  raiseClose: () => UMt,
  rememberAsked: () => CIi,
  remotePlacement: () => zyr,
  seedAsked: () => E,
  settleFocusRequest: () => Rlo,
  showPane: () => Alo,
  shownPane: () => BMt,
  withKeptAsked: () => q,
  withoutPane: () => G
});
function ie() {
  let e = new Map(),
    r = new Set(),
    list = () => [...e.values()],
    i = De();
  return {
    attach: s => {
      let a = e.get(s.clientId);
      if (r.delete(s.clientId), a === void 0) return e.set(s.clientId, s), !0;
      if (s.viewport !== void 0 || s.answers !== void 0 || s.draws !== void 0) e.set(s.clientId, {
        ...a,
        ...(s.viewport !== void 0 && {
          viewport: {
            ...a.viewport,
            ...s.viewport
          }
        }),
        ...(s.answers !== void 0 && {
          answers: s.answers
        }),
        ...(s.draws !== void 0 && {
          draws: s.draws
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
var KE = he(ie(), e => {
  for (let r of e.list()) e.detach(r.clientId);
});
var Le = {
  Backdrop: !0,
  Input: !0,
  Select: !0
};
function ica(e) {
  return e === void 0 ? void 0 : L(e.filter(item => Object.hasOwn(Le, item)));
}
var ze = {
  type: "Box",
  props: {
    flexDirection: "column"
  },
  children: []
};
function tfs(e) {
  return e === "Input" || e === "Select";
}
function _Ii(e, r, n) {
  if (r !== "mobile") return e;
  if (tfs(e.type)) return n?.includes(e.type) === !0 ? e : ze;
  if (e.type !== "Box") return e;
  let {
      children: children
    } = e,
    children_2 = children?.map(m => typeof m === "string" ? m : _Ii(m, r, n));
  return children_2 !== void 0 && children_2.some((item, index) => item !== children?.[index]) ? {
    ...e,
    children: children_2
  } : e;
}
var jyr = () => KE.list().filter(item => item.viewport?.isFullscreen !== void 0);
function ae() {
  return KE.list().filter(item => item.viewport !== void 0);
}
function bq(e) {
  let {
    name: name,
    marketplace: marketplace
  } = uc(e);
  return marketplace === ri && wR(name) !== void 0;
}
var Tlo = {
  black: "#000000",
  red: "#e5484d",
  green: "#46a758",
  yellow: "#f5d90a",
  blue: "#3e63dd",
  magenta: "#d6409f",
  cyan: "#05a2c2",
  white: "#ffffff",
  gray: "#8b8d98",
  grey: "#8b8d98",
  blackBright: "#6e6e6e",
  redBright: "#ff6369",
  greenBright: "#5bd07f",
  yellowBright: "#ffe629",
  blueBright: "#5b8def",
  magentaBright: "#ee6ac2",
  cyanBright: "#3ec2e0",
  whiteBright: "#ffffff"
};
var Wyr = e => Object.hasOwn(Tlo, e) ? Tlo[e] : void 0;
var GWe = e => Wyr(e) ?? e;
var me = e => vZ(e);
function HMt(e) {
  return e !== void 0 && (KJt(e) || me(e)) ? e : void 0;
}
var M = he(go(), e => e.set(void 0));
var W = 64;
var cIn = (plugin, id) => ({
  plugin: plugin,
  id: id
});
var V = p(() => u({
  plugin: o(),
  id: o()
}));
var z = e => !/^(?:rgb|ansi256)\(.*\b(?:[3-9]\d\d|2[6-9]\d|25[6-9])\b/.test(e);
var uIn = he(go(), e => e.set(void 0));
var fIn = he(go(), e => e.set(void 0));
var pIn = he(go(), e => e.set(void 0));
var zJt = (e, r) => `${e}\x00${r}`;
function GJt(e, r) {
  return pIn.get()?.get(zJt(e, r)) ?? 0;
}
function $Mt(e, r) {
  let n = new Map(e);
  for (let i of r) n.delete(i);
  return n;
}
function nfs(e, r) {
  let n = zJt(e, r),
    i = GJt(e, r) + 1;
  uIn.set($Mt(uIn.get() ?? new Map(), [n])), fIn.set($Mt(fIn.get() ?? new Map(), [n])), pIn.set(new Map(pIn.get()).set(n, i));
}
var Rl = he(() => Ae().panes, e => e().setState(() => APr));
function G(e, r) {
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
function mIn(e) {
  Rl().setState(r => G(r, n => n.id === e)), nfs("Pane", e);
}
var o0e = e => [...e.open, ...e.unplaced];
function w(e, r) {
  return e.asked.some(item => item.id === r.id && item.plugin === r.plugin);
}
import { dirname as de, resolve as So } from "path";
function kZ({
  pluginStorageId: pluginStorageId,
  pluginRoot: pluginRoot
}) {
  let {
      name: name_2,
      marketplace: marketplace_2
    } = uc(pluginStorageId),
    s = oNe(pluginStorageId),
    a = de(So(pluginRoot)),
    l = [a, de(a)].includes(hse()) ? "dev_mods" : "plugin_dir",
    h = s ? "managed" : marketplace_2 === hp ? l : "installed",
    A = bq(pluginStorageId) ? "builtin" : h;
  return {
    provenance: f(A),
    ...JMt(name_2, marketplace_2, s ? new Set([name_2]) : null)
  };
}
function O(e) {
  let r = e.pluginPanes?.asked;
  return Array.isArray(r) ? r.flatMap(item => {
    let i = V().safeParse(item);
    return i.success ? [i.data] : [];
  }) : [];
}
var q = (e, asked) => ({
  ...e,
  pluginPanes: {
    ...e.pluginPanes,
    asked: asked
  }
});
function T(e, r) {
  let n = r === "asked",
    i = !1;
  Jk(s => {
    let a = O(s),
      m = a.filter(item => item.plugin !== e.plugin || item.id !== e.id);
    return i = m.length < a.length !== n, i ? q(s, n ? [...m, cIn(e.plugin, e.id)].slice(-W) : m) : s;
  }).then(s => {
    if (i) {
      let a = sR(e.plugin),
        m = a && kZ(a);
      s ? g("plugin_function_hooks_pane_ask", m) : c("plugin_function_hooks_pane_ask", "not_persisted", m);
    }
  });
}
function X(e) {
  Rl().setState(r => w(r, e) ? {
    ...r,
    asked: r.asked.filter(item => item.plugin !== e.plugin || item.id !== e.id)
  } : r), T(e, "dismissed");
}
function H(e, r, n) {
  if (r.kind === "person" && n !== void 0) X(cIn(n, e));
}
async function UMt(id_2, origin) {
  let n = Rl().getState(),
    i = n.closing.includes(id_2),
    s = origin.kind === "unload",
    a = o0e(n).find(item => item.id === id_2)?.plugin,
    m = !1;
  if (s) mIn(id_2);
  if (i) return;
  let handlers = hL("ui.close").filter(item => !s || item.name !== a);
  if (handlers.length === 0) {
    mIn(id_2), H(id_2, origin, a);
    return;
  }
  if (!s) Rl().setState(x => ({
    ...x,
    closing: [...x.closing, id_2]
  }));
  try {
    let x = await _O({
        e: {
          id: id_2,
          origin: origin
        },
        handlers: handlers,
        site: yfe("ui.close"),
        bottom: P => {
          if (P.id !== id_2 || Rl().getState().closing.includes(id_2)) mIn(P.id), m = P.id === id_2;
          return Promise.resolve({
            value: void 0
          });
        }
      }),
      h = Rl().getState();
    if (h.closing.includes(id_2) && o0e(h).some(item => item.id === id_2)) t(`ui.close ${id_2} (${origin.kind}): kept open by a hook` + (x.deny === void 0 ? "" : ` (${x.deny})`));
  } catch (error) {
    t(`ui.close ${id_2} (${origin.kind}): the chain failed: ` + d(error), {
      level: "error"
    });
  } finally {
    if (Rl().setState(x => x.closing.includes(id_2) ? {
      ...x,
      closing: x.closing.filter(item => item !== id_2)
    } : x), m) H(id_2, origin, a);
  }
}
function bIi(e) {
  let r = o0e(Rl().getState());
  for (let n of r) if (n.plugin === e) UMt(n.id, {
    kind: "unload"
  });
}
function SIi(e, r) {
  let n = e.open.length,
    i = e.open.findIndex(item => item.id === e.shownId);
  return n > 1 && i >= 0 ? e.open[(i + r + n) % n]?.id ?? null : null;
}
var goe = e => Rl().setState(r => {
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
var BMt = e => e.open.find(item => item.id === e.shownId);
var rfs = e => e.placements > 0 && BMt(e)?.holdToasts === !0;
function ofs(e) {
  let r = e.open.findIndex(item => item.id === e.focusedId);
  return e.open[r + 1]?.id ?? null;
}
function hIn() {
  return Rl().setState(e => ({
    ...e,
    placements: e.placements + 1
  })), () => Rl().setState(e => ({
    ...e,
    placements: e.placements - 1
  }));
}
var I = (e, r) => w(e, r) ? yce : jMt;
function Q(e) {
  return {
    ...(e.closeOnEscape && {
      closeOnEscape: e.closeOnEscape
    }),
    ...(e.holdToasts && {
      holdToasts: e.holdToasts
    }),
    ...(e.backgroundColor !== void 0 && {
      backgroundColor: e.backgroundColor
    }),
    ...(e.rows !== void 0 && {
      rows: e.rows
    }),
    ...(e.columns !== void 0 && {
      columns: e.columns
    })
  };
}
function b(e, r, focusRequest) {
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
function zyr() {
  let e = ae();
  if (e.length === 0) return;
  if (jyr().length > 0) return {
    isPlaced: !0
  };
  return {
    isPlaced: !1,
    reason: `no attached surface places panes (${e.map(item => item.clientId).join(", ")}): placed when a surface that does attaches; once they detach, as a fresh open is`
  };
}
function J(e, r, n) {
  let i = W$.get()?.columns,
    s = I(e, r);
  if (i === void 0) return zyr() ?? {
    isPlaced: !0
  };
  if (n || i >= s) return {
    isPlaced: !0
  };
  return {
    isPlaced: !1,
    reason: `unasked below ${s} columns (${i} now${s === yce ? ", an id the person opened before" : ""}): placed when the person opens it, or when the terminal is widened to ${s} columns`
  };
}
function E() {
  if (M.get()) return;
  M.set(!0);
  let e = O(fe());
  if (e.length === 0) return;
  Rl().setState(r => ({
    ...r,
    asked: [...e.filter(item => !w(r, item)), ...r.asked]
  }));
}
function wIi(e, plugin_2, n) {
  E();
  let title = e.title ?? e.id,
    s = e.focus === !0 ? e.id : void 0,
    a = Q(e),
    m = {
      id: e.id,
      plugin: plugin_2
    },
    l = y => y?.title === title && y.closeOnEscape === a.closeOnEscape && y.holdToasts === a.holdToasts && y.backgroundColor === a.backgroundColor && y.rows === a.rows && y.columns === a.columns,
    x,
    h = !1;
  if (Rl().setState(y => {
    let R = n && !w(y, m),
      oe = y.open.find(item => item.id === e.id),
      B = y.unplaced.find(item => item.id === e.id),
      te = oe !== void 0,
      He = B !== void 0,
      re = {
        id: e.id,
        plugin: B?.plugin ?? plugin_2
      };
    x = te ? {
      isPlaced: !0
    } : J(y, re, n), h = R;
    let isPlaced = x.isPlaced,
      _e = l(oe) && s === void 0 && !R,
      N = {
        ...re,
        title: title,
        ...a
      },
      se = R ? {
        ...y,
        asked: [...y.asked, m]
      } : y,
      Fe = {
        ...se,
        unplaced: He ? y.unplaced.map(item => item.id === e.id ? N : item) : [...y.unplaced, N]
      },
      je = te ? _e : !isPlaced && l(B) && !R,
      ve = isPlaced ? b(se, N, s ?? y.focusRequest) : Fe;
    return je ? y : ve;
  }), h) T(m, "asked");
  let A = x ?? {
      isPlaced: !0
    },
    P = W$.get()?.columns ?? "unmeasured",
    Z = n ? "asked" : "unasked",
    Me = A.isPlaced ? "placed" : `waits unplaced (${A.reason})`;
  return t(`ui.open ${plugin_2} ${e.id} (${Z}, ${P} columns): ${Me}`), A;
}
function kIi(e) {
  let r = Js(e?.origin) === Js({
    kind: "plugin"
  });
  return GQe(e?.id) ?? (r ? void 0 : "origin is the engine's to set");
}
function F(e) {
  return Array.isArray(e) && e.length > 0 && e.every(item => typeof item === "string") && e[0] !== "" ? void 0 : "takes argv, a non-empty list of strings naming the command first";
}
function j(e, r) {
  return e === void 0 || D(e) && Object.values(e).every(item => typeof item === "string") ? void 0 : `${r} is an object of strings`;
}
function Xda(e) {
  let r = typeof e?.name !== "string" || e.name === "",
    n = e?.fallback === void 0;
  return r ? "takes the flag's name" : n ? "takes a fallback, the value where the flag table has no say" : void 0;
}
var yIi = e => e !== void 0 && typeof e !== "string";
function Qus(e, r) {
  return typeof e === "number" && Number.isInteger(e) && e > 0 && e <= r;
}
function Zus(e) {
  let r;
  try {
    r = _(e);
  } catch (error) {
    return `value is not JSON data: ${d(error)}`;
  }
  let n = r;
  if (typeof n !== "string") return `value is not JSON data: ${e === void 0 ? "undefined" : `a ${typeof e}`}`;
  return n.length > yRe ? `the value is ${n.length} characters, over the ${yRe} limit` : void 0;
}
function Elo(e) {
  return typeof e?.key === "string" ? void 0 : "takes a key";
}
function Jda(e) {
  let r = e?.agentId,
    n = e?.as,
    i = r === void 0 || typeof r === "string" && r !== "",
    s = n === void 0 || n === "api";
  if (!i) return `takes agentId, a non-empty string (got ${String(r)})`;
  return s ? void 0 : `takes as "api" or none (got ${String(n)})`;
}
import { isAbsolute as Go, win32 as qo } from "path";
function Qda(e) {
  let r = e?.names;
  if (!Array.isArray(r)) return "takes names, a list of relative .md file names";
  for (let n of ["of", "below"]) {
    let i = e?.[n];
    if (i !== void 0 && (typeof i !== "string" || i === "")) return `takes ${n}, a path, when given`;
  }
  for (let n of r) {
    if (typeof n !== "string" || !n.toLowerCase().endsWith(".md")) return `takes names, each a .md file name (${JSON.stringify(n)})`;
    if (Go(n) || qo.isAbsolute(n) || n.split(/[\\/]/).includes("..")) return `takes names, each relative with no ".." (${n})`;
  }
  return;
}
function WJt(e) {
  let r = e?.path;
  return typeof r !== "string" || r === "" ? "takes a path" : void 0;
}
function Zda(e) {
  let r = e?.as === "text" || e?.as === "bytes";
  return WJt(e) ?? (r ? void 0 : 'as is "text" or "bytes"');
}
function eca(e) {
  let r = typeof e?.resolve === "boolean";
  return WJt(e) ?? (r ? void 0 : "resolve is true or false");
}
var Byr = 600000;
function tca(e) {
  let r = F(e?.argv);
  if (r !== void 0) return r;
  let n = e?.init;
  if (n === void 0) return;
  if (!D(n)) return "takes init, { cwd?, env?, stdin?, timeoutMs? }";
  if (n.cwd !== void 0 && (typeof n.cwd !== "string" || n.cwd === "")) return "init.cwd is a non-empty path";
  let s = j(n.env, "init.env");
  if (s !== void 0) return s;
  if (n.stdin !== void 0 && typeof n.stdin !== "string") return "init.stdin is a string";
  return n.timeoutMs !== void 0 && !Qus(n.timeoutMs, Byr) ? `init.timeoutMs is a whole number of ms, 1 to ${Byr}` : void 0;
}
function nca(e) {
  if (!D(e)) return "takes { argv, cwd?, env?, input? }";
  let {
      argv: argv,
      cwd: cwd,
      env: env,
      input: input
    } = e,
    a = cwd !== void 0 && (typeof cwd !== "string" || cwd === ""),
    m = input !== void 0 && typeof input !== "string";
  return F(argv) ?? (a ? "cwd is a non-empty path" : void 0) ?? j(env, "env") ?? (m ? "input is a string" : void 0);
}
function efs(e) {
  let r = e?.name,
    n = e?.description,
    i = typeof r !== "string" || !EHt.test(r),
    s = typeof n === "string" && !!n.trim();
  return (i ? "name is letters, digits, _ or - (up to 64)" : void 0) ?? (s ? void 0 : "needs a description");
}
var rca = e => Elo(e) ?? Zus(e?.value);
function oca(e) {
  if (!D(e)) return "inputSchema must be a JSON schema object";
  try {
    _(e);
    return;
  } catch (error) {
    return `inputSchema is not JSON data: ${d(error)}`;
  }
}
var fft = e => typeof e === "string" ? void 0 : "takes a string text";
function sca(e) {
  let r = e?.breakdown,
    n = e?.columns;
  if (!(r === void 0 || r === "summary" || r === "full")) return `takes breakdown "summary" or "full" (got ${String(r)})`;
  return n === void 0 || typeof n === "number" && Number.isInteger(n) && n > 0 ? void 0 : `takes columns, a positive whole number (got ${String(n)})`;
}
function vIi(e) {
  let r = e?.title,
    n = r !== void 0,
    i = typeof r === "string" && SR(r),
    s = ["focus", "closeOnEscape", "holdToasts"].find(item => e?.[item] !== void 0 && e[item] !== !0),
    a = e?.backgroundColor,
    m = a === void 0 || a === "transparent" || typeof a === "string" && !/[^\S ]/.test(a) && HMt(GWe(a)) !== void 0 && z(a),
    l = ["rows", "columns"].find(item => {
      let h = e?.[item];
      return h !== void 0 && !(typeof h === "number" && Number.isInteger(h) && h > 0);
    });
  return GQe(e?.id) ?? (n ? fft(r) : void 0) ?? (i ? "title holds a control character" : void 0) ?? (s === void 0 ? void 0 : `${s} is true or left out`) ?? (l === void 0 ? void 0 : `${l} is a positive whole number or left out (got ${String(e?.[l])})`) ?? (m ? void 0 : 'backgroundColor is a theme key, a raw color or "transparent"');
}
function EIi(e) {
  let r = Rl().getState(),
    n = new Set(r.open);
  return Object.freeze(o0e(r).filter(item => item.plugin === e).map(item => Object.freeze({
    id: item.id,
    title: item.title,
    isShown: r.shownId === item.id,
    isFocused: r.focusedId === item.id,
    isPlaced: n.has(item)
  })));
}
function TIi(e) {
  let unplaced_2 = Rl().getState().unplaced;
  Rl().setState(i => i.unplaced.filter(item => e >= I(i, item)).reduce((acc, item) => b(acc, item, acc.focusRequest), i));
  let n = new Set(Rl().getState().open);
  for (let i of unplaced_2.filter(item => n.has(item))) t(`ui.open ${i.plugin} ${i.id} (waiting, ${e} columns): placed`);
}
function Clo(e) {
  let unplaced_3 = Rl().getState().unplaced;
  if (unplaced_3.length === 0) return;
  Rl().setState(n => n.unplaced.reduce((acc, item) => b(acc, item, acc.focusRequest), n));
  for (let n of unplaced_3) t(`ui.open ${n.plugin} ${n.id} (waiting, ${e}): placed`);
}
function CIi(e) {
  E();
  let r = !1;
  if (Rl().setState(n => (r = !w(n, e), r ? {
    ...n,
    asked: [...n.asked, {
      ...e
    }]
  } : n)), r) T(e, "asked");
}
function Rlo(e) {
  let {
    focusRequest: focusRequest_2
  } = Rl().getState();
  if (focusRequest_2 === null) return;
  e ? goe(focusRequest_2) : Rl().setState(n => ({
    ...n,
    focusRequest: null
  }));
}
var Alo = shownId_2 => Rl().setState(r => r.shownId === shownId_2 || !r.open.some(item => item.id === shownId_2) ? r : {
  ...r,
  shownId: shownId_2,
  focusedId: r.focusedId === null ? null : shownId_2
});
function Yda(e) {
  let r = e ?? pe();
  return r5(r) ?? fr(r) ?? Ee();
}
var ce = e => e.catch(() => {
  return;
});
function hXe() {
  let e = Promise.resolve();
  return r => {
    let n = e.then(r, r);
    return e = ce(n), n;
  };
}
var xt = /^(con|prn|aux|nul|com[1-9]|lpt[1-9])(\.|$)/i;
var ue = 64;
var yt = 12;
var ht = {
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
function ge() {
  let e = new Map();
  return r => {
    let n = e.get(r) ?? hXe();
    return e.set(r, n), n;
  };
}
var wt = /^[a-z0-9._-]+$/;
var St = ge();
import { mkdir as Ct } from "fs/promises";
import { dirname as Ot } from "path";
import { join as bt } from "path";
import { createHash as Pt } from "crypto";
function xe(e) {
  if (wt.test(e) && !xt.test(e) && e.length <= ue && e !== "." && e !== "..") return `${e}.json`;
  let n = e.replace(/[^a-zA-Z0-9_-]/g, "_"),
    i = Pt("sha256").update(e).digest("hex").slice(0, yt);
  return `${n.slice(0, ue) || "plugin"}-${i}.json`;
}
var S = e => bt(Kc(), "store", xe(e));
async function ye(e) {
  let r = S(e);
  return await Ct(Ot(r), {
    recursive: !0,
    mode: 448
  }), r;
}
import { utimes as It } from "fs/promises";
async function Et(e, r) {
  let date = new Date();
  try {
    await It(r, date, date);
  } catch (error) {
    t(`$.store (${e}): could not touch ${r}: ${d(error)}`, {
      level: "warn"
    });
  }
}
import { randomUUID as Mt } from "crypto";
import { constants as Ht } from "fs";
import { copyFile as _t, link as Ft, mkdir as jt, unlink as vt, writeFile as Dt } from "fs/promises";
import { dirname as Bt } from "path";
import { readFile as $t } from "fs/promises";
async function we(e) {
  let r = await $t(S(e), "utf8").catch(n => {
    if (K(n)) return;
    throw n;
  });
  return r === void 0 ? void 0 : [e, r];
}
async function Se(e) {
  let r = await i0(e).reduce(async (acc, item) => (await acc) ?? we(item), Promise.resolve(void 0));
  if (r === void 0) return !1;
  let [n, i] = r,
    s = S(e),
    a = `${s}.carry-${Mt()}`;
  try {
    if (!D(ee(i))) return !1;
    return await jt(Bt(s), {
      recursive: !0
    }), await Dt(a, i, {
      flag: "wx"
    }), await Ft(a, s).catch(async m => {
      if (k(m) === "EEXIST") throw m;
      await _t(a, s, Ht.COPYFILE_EXCL);
    }), !0;
  } catch (error) {
    let l = k(error) === "EEXIST";
    return t(`$.store (${e}): ` + (l ? `${n}'s store was carried by another session` : `could not carry ${n}'s store: ${d(error)}`), {
      level: l ? "debug" : "warn"
    }), l;
  } finally {
    await vt(a).catch(() => {
      return;
    });
  }
}
import { readFile as Pe } from "fs/promises";
async function Nt(e, r) {
  try {
    return await Pe(r, "utf8");
  } catch (error) {
    if (!K(error)) throw error;
  }
  if (!(await Se(e))) return;
  try {
    return await Pe(r, "utf8");
  } catch (error) {
    if (K(error)) return;
    throw error;
  }
}
var be = {
  async read(e) {
    let r = S(e),
      n;
    try {
      n = await Nt(e, r);
    } catch (error) {
      throw new $e(`${e}: store file ${r} is unreadable (${d(error)})`);
    }
    if (n === void 0) return {};
    let i;
    try {
      i = ee(n);
    } catch (error) {
      throw new $e(`${e}: store file ${r} is malformed (${d(error)})`);
    }
    if (!D(i)) throw new $e(`${e}: store file ${r} is malformed (the JSON is not an object)`);
    return await Et(e, r), i;
  },
  write: async (e, r) => zn(await ye(e), `${_(r, null, 2)}
`, 384),
  async lock(e) {
    let r = await ye(e);
    return Zd(r, {
      lockfilePath: `${r}.lock`,
      ...ht
    });
  }
};
function Ce() {
  let e = go();
  return {
    setBackend: e.set,
    backendOverride: e.get
  };
}
var qt = Ce();
var Ie = () => qt.backendOverride() ?? be;
var Y = 256;
async function Re(e, r) {
  try {
    if (e.event !== "keys" && e.key.length > Y) throw new $e(`${r}: $.store.${e.event}: the key is ${e.key.length} characters, over the ${Y} limit`);
    let n = Ie(),
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
            if (l > yRe) throw new $e(`${r}: $.store.set: the store would be ${l} characters, over the ${yRe} limit`);
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
      await uS(s, `$.store.${e.event} (${r})`);
    }
  } catch (error) {
    if (error instanceof $e) throw error;
    throw new $e(`${r}: $.store.${e.event} failed: ${d(error)}`);
  }
}
var VJt = (e, r) => St(r)(() => Re(e, r));
export { bq, Yda, Rl, Xda, yIi, Qus, Zus, Elo, Jda, Qda, WJt, Zda, eca, Byr, tca, nca, efs, rca, oca, fft, sca, KE, ica, tfs, _Ii, jyr, Tlo, Wyr, GWe, HMt, cIn, uIn, fIn, pIn, zJt, GJt, $Mt, nfs, mIn, o0e, kZ, UMt, bIi, SIi, goe, BMt, rfs, ofs, hIn, zyr, wIi, kIi, vIi, EIi, TIi, Clo, CIi, Rlo, Alo, N6, hXe, VJt };