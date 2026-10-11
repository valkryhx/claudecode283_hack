// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Y, qe } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { l, Et } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Q } from "B:/~BUN/root/chunk-17wqwt36.js";
import { Tr as isRefused_4 } from "B:/~BUN/root/chunk-4p6z9qq1.js";
import { SW, uJt, pMn, BJt, IO, ydo, _do, Whr, cie, kDn, Vnt, DQt, sLn, P_r, I_r, qRt, _mo, aNn as clock, lNn as listChildren, cNn, H7t as turn, VSr, qSr, oa, Ti } from "B:/~BUN/root/chunk-3jyp964r.js";
import { H0 } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { gt, t, HY } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { xa } from "B:/~BUN/root/chunk-qqgpf856.js";
import { he } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { Br } from "B:/~BUN/root/chunk-3daz140w.js";
import { _te as isRefused_3, Bb as isRefused } from "B:/~BUN/root/chunk-mrt797ke.js";
import { Nle } from "B:/~BUN/root/chunk-8xaxa0y1.js";
import { U3, B3 as isRefused_2 } from "B:/~BUN/root/chunk-384x2wn9.js";
import { ub } from "B:/~BUN/root/chunk-zz5hnasr.js";
import { FM } from "B:/~BUN/root/chunk-y39emrp9.js";
import { n0 } from "B:/~BUN/root/chunk-r6m7remx.js";
import { KW } from "B:/~BUN/root/chunk-4mcmxrhr.js";
import { Ykt, c2e } from "B:/~BUN/root/chunk-antaq155.js";
import { vH } from "B:/~BUN/root/chunk-bx8sc61q.js";
import { vo } from "B:/~BUN/root/chunk-yv67t8hr.js";
import { mkdirSync as Ue } from "fs";
import { join as $o } from "path";
var b = o => $o(pMn(), o);
var oo = [{
  refusal: "hooks_modules_off",
  isRefused: () => !Nle()
}, {
  refusal: "all_hooks_disabled",
  isRefused: isRefused
}, {
  refusal: "sideload_disabled",
  isRefused: isRefused_2
}, {
  refusal: "local_dirs_blocked",
  isRefused: () => !U3()
}, {
  refusal: "managed_hooks_only",
  isRefused: () => he("policySettings")?.allowManagedHooksOnly === !0
}, {
  refusal: "hooks_disabled_in_settings",
  isRefused: isRefused_3
}, {
  refusal: "safe_mode",
  isRefused: isRefused_4
}, {
  refusal: "bare_mode",
  isRefused: () => Br("hooks")
}, {
  refusal: "untrusted",
  isRefused: () => !H0()
}];
function g() {
  return oo.find(item => item.isRefused())?.refusal;
}
function refusal() {
  let o = g();
  if (o !== void 0) p("plugin_dev_mods", o), t(`dev mods: mod hot-reloading is off here (${o})`);
  return o;
}
import { mkdir as Se } from "fs/promises";
import { basename as To } from "path";
var quietMs = 2000;
function ro(o) {
  switch (o.kind) {
    case "chose":
      return o.value === "allow" ? "enable" : "decline";
    case "declined":
      return "decline";
    case "aborted":
      return "withdrawn";
    case "unanswered":
      return o.reason === "no_one_to_ask" ? "no_one_to_ask" : "retry";
  }
}
var q = "this session's folder";
function to(o) {
  let e = FM(o);
  if (e === null) return `${q} (${xa(o)})`;
  return `[${q}](${e.replaceAll("(", "%28").replaceAll(")", "%29")})`;
}
var so = (o, e) => `Mods in ${to(o)} load ${e === "now" ? "now" : "when this turn ends"} and reload when their files change. They run with your permissions.`;
var choices = [{
  value: "not_now",
  label: "Not now"
}, {
  value: "allow",
  label: "Enable for this session"
}];
var header = "Mods";
var no = "Enable hot reloading for this session?";
var Zo = (o, e) => `${no}

${so(o, e)}`;
var source = "mod_hot_reload";
async function ao(o, e) {
  let r = KW();
  if (r === void 0) return p("plugin_dev_mods", "no_session"), "no_one_to_ask";
  let abortController = new AbortController();
  e?.addEventListener("abort", () => abortController.abort(), {
    once: !0
  });
  try {
    let n = ro(await c2e({
      canUseTool: r.canUseTool,
      toolUseContext: r.toolContext(abortController),
      source: source,
      header: header,
      question: Zo(o, turn.isRunning() ? "turn-end" : "now"),
      choices: choices,
      personOnly: !0
    }));
    return n === "no_one_to_ask" ? p("plugin_dev_mods", "no_one_to_ask") : _("plugin_dev_mods", {
      answer: c(n)
    }), n;
  } catch (error) {
    return t(`dev mods: the ask failed, asked again later: ${l(error)}`, {
      level: "error"
    }), "retry";
  }
}
function C() {
  let o = KW();
  if (o === void 0) return !0;
  try {
    return Ykt(o.toolContext(new AbortController()));
  } catch (error) {
    return t(`dev mods: no context to ask in yet: ${l(error)}`, {
      level: "error"
    }), !0;
  }
}
function fo(o, e) {
  let r = new Set(),
    s = new Set(e.loaded),
    n = !1,
    d = !1,
    i = !1,
    f,
    a = 0,
    NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY,
    k = !1,
    S = !1,
    j = !1,
    y = !1,
    O,
    Oo = e.watchRoot(o, () => {
      n = !0, J();
    }),
    Lo = e.turn.onBegin(() => {
      if (a += 1, !(f !== void 0 && !f.signal.aborted && e.turn.isPersonTurn())) return;
      if (f?.abort(), !S) S = !0, e.unanswered();
    }),
    Co = e.turn.onEnd(() => void K(Ho));
  function G() {
    O?.(), O = void 0;
  }
  function J() {
    if (y || d) return;
    if (G(), e.turn.isRunning()) {
      K(B);
      return;
    }
    O = e.clock.setTimeout(() => void K(B), e.quietMs);
  }
  async function K(u) {
    try {
      await u();
    } catch (error) {
      t(`dev mods: the watch on ${o} failed: ${l(error)}`, {
        level: "error"
      });
    }
  }
  async function Ho() {
    if (i) {
      i = !1;
      for (let u of (await e.listChildren(o)) ?? []) r.add(u);
    }
    if (d) {
      await X();
      return;
    }
    if (k) k = !1, await B();
  }
  async function X() {
    if (y) return;
    if (e.refusal()) {
      await dispose(), e.stopped("refused");
      return;
    }
    await Promise.all([dispose(), e.enable(o)]), e.stopped("enabled");
  }
  async function B() {
    O = void 0;
    let u = e.turn.isRunning() && n && NEGATIVE_INFINITY === Number.NEGATIVE_INFINITY,
      L = y || d,
      Fo = e.turn.isRunning() && !u;
    if (L || j || Fo || NEGATIVE_INFINITY === a) {
      k = !L;
      return;
    }
    j = !0;
    try {
      let V = u ? [] : ((await e.listChildren(o)) ?? []).filter(item => !r.has(item)),
        Wo = u || V.length > 0 && (n || V.some(item => !s.has(item)));
      if (y || !Wo) return;
      if (e.turn.isRunning() && !u) {
        k = !0;
        return;
      }
      if (e.refusal()) {
        await dispose(), e.stopped("refused");
        return;
      }
      NEGATIVE_INFINITY = a;
      let abortController_2 = new AbortController();
      f = abortController_2;
      let No = await e.ask(o, abortController_2.signal).finally(() => {
        f = void 0;
      });
      if (y) return;
      switch (No) {
        case "enable":
          if (e.turn.isRunning() && !e.refusal()) {
            d = !0, e.deferred();
            return;
          }
          await X();
          return;
        case "decline":
          {
            S = !1, i = e.turn.isRunning();
            let E = await e.listChildren(o);
            for (let Io of [...V, ...(E ?? [])]) r.add(Io);
            return;
          }
        case "withdrawn":
          if (e.withdrawn(), !S) S = !0, e.unanswered();
          k = !0;
          return;
        case "retry":
          k = !0;
          return;
        case "no_one_to_ask":
          await dispose(), e.stopped("no_one_to_ask");
          return;
      }
    } finally {
      j = !1;
    }
  }
  async function dispose() {
    if (y) return;
    y = !0, k = !1, G(), f?.abort(), Lo(), Co(), await Oo.close();
  }
  return J(), {
    declined: () => [...r],
    isClosed: () => y,
    dispose: dispose
  };
}
var mo = "Mod hot-reloading is on; this session's mods load when this turn ends.";
function lo(folder, e) {
  let r = IO.get();
  if (r?.stage !== "watching" || r.folder !== folder) return;
  switch (e) {
    case "refused":
      IO.set({
        stage: "wanted",
        folder: folder,
        ...(r.loaded !== void 0 && {
          loaded: r.loaded
        })
      });
      return;
    case "no_one_to_ask":
      IO.set({
        stage: "off",
        folder: folder
      });
      return;
    case "enabled":
      return;
  }
}
import { utimes as ie } from "fs/promises";
async function v(o) {
  let date = new Date();
  await ie(o, date, date).catch(r => t(`dev mods: ${o} keeps its old time: ${l(r)}`));
}
function H() {
  if (_do.get() !== void 0) return;
  _do.set(turn.onEnd(() => {
    try {
      for (let o of [...(Vnt.get() ?? []), ...(DQt.get() ?? [])]) v(o);
    } catch (error) {
      t(`dev mods: the turn-end refresh failed: ${l(error)}`, {
        level: "error"
      });
    }
  }));
}
import { basename as po } from "path";
function F(o, e, r) {
  let s = r === "enable_failed" ? "enabling" : "loading";
  return SW(po(o), sLn(po(o), e)), m("plugin_dev_mods", r), t(`dev mods: ${s} ${o} failed: ${l(e)}`, {
    level: "error"
  }), "failed";
}
function co(root, outcome, r) {
  return {
    root: root,
    before: new Map(),
    after: r.after,
    present: r.present,
    outcome: outcome
  };
}
function go(o, e) {
  let r = o === "new";
  switch (e) {
    case "reloaded":
      return r ? "loaded from this session's mods folder" : "unloaded (gone from this session's mods folder)";
    case "not-loaded":
      return "in this session's mods folder, not loaded; /plugin shows why";
    case "held":
      return "in this session's mods folder, on hold: /reload-plugins applies it";
    case "unbound":
      return "in this session's mods folder; restart to apply";
  }
}
async function ho(o, e, r) {
  let present = (await listChildren(o)) ?? [],
    d = e === "reloaded" ? await Ti(r.storageV5, r.credentials) : {
      enabled: [],
      disabled: []
    },
    [i] = _mo([...d.enabled, ...d.disabled], [o]),
    after = i?.loaded ?? new Map();
  for (let a of P_r(co(o, e, {
    present: present,
    after: after
  }), go)) SW(a.plugin, a.text);
}
async function W(o, e) {
  let r = KW()?.toolContext(new AbortController());
  await ho(o, e, {
    storageV5: r?.storageV5,
    credentials: r?.credentials
  }).catch(s => t(`dev mods: the lines for ${o} were not told: ${l(s)}`, {
    level: "error"
  }));
}
async function N(folder_2) {
  try {
    IO.set({
      stage: "enabled",
      folder: folder_2
    }), cie.get()?.joinPluginDir(folder_2), Vnt.set(vH(Vnt.get() ?? [], [folder_2])), H(), await v(folder_2), await Q(0);
    let e = KW()?.toolContext(new AbortController());
    VSr(folder_2, e?.storageV5);
    let r = await cNn();
    return await W(folder_2, r), _("plugin_dev_mods", {
      enabled: !0
    }), r;
  } catch (error) {
    return F(folder_2, error, "enable_failed");
  }
}
function xo(o, e) {
  switch (e) {
    case "reloaded":
      return `The person enabled mod hot-reloading for this session and the mods under ${o} loaded: they load and reload by themselves as their files change; the transcript names any mod that failed.`;
    case "held":
      return `The person enabled mod hot-reloading for this session, but the mods under ${o} wait for /reload-plugins (the load would rewrite the prompt cache): they are NOT loaded yet.`;
    case "unbound":
      return `The person enabled mod hot-reloading for this session, but the mods under ${o} did not load (this session cannot reload its plugins; only a restart loads them).`;
    case "failed":
      return `The person enabled mod hot-reloading for this session, but the mods under ${o} did not load (the load failed; the transcript says why, and /reload-plugins tries again).`;
  }
}
function yo(o, e) {
  switch (e.kind) {
    case "enabled":
      return xo(o, e.load);
    case "declined":
      return `The person declined mod hot-reloading: what this run wrote under ${o} is written but NOT loaded (a mod that loaded when the session started keeps running as it loaded). Do not say the change is running. It loads the next time this session starts, or its plugins are reloaded (/reload-plugins); the person can ask again.`;
    case "unanswered":
      return `The person has not answered the mod hot-reloading question yet; it is asked again once a turn ends. What this run wrote under ${o} is written but NOT loaded yet. Do not say it was declined, and do not suggest --plugin-dir or a restart.`;
    case "off":
      return `Mod hot-reloading is off in this session (${e.reason}): mods under ${o} are not loaded.`;
  }
}
var w = (o, e) => oa({
  agentId: qe(),
  value: yo(o, e),
  mode: "task-notification",
  skipAttachments: !0,
  passive: !0,
  priority: "next"
});
var reason = "nobody could be asked";
function U(o) {
  if (Whr.get() === o) return;
  Whr.set(o), w(o, {
    kind: "off",
    reason: reason
  });
}
var wo = {
  hooks_modules_off: "hooks modules are switched off in this process",
  all_hooks_disabled: "the organization disables all hooks",
  sideload_disabled: "the organization forbids side-loaded plugins",
  local_dirs_blocked: "the organization blocks plugins from local folders",
  managed_hooks_only: "the organization allows only managed hooks",
  hooks_disabled_in_settings: "hooks are turned off in your settings (disableAllHooks)",
  safe_mode: "the session runs in safe mode",
  bare_mode: "the session runs in bare mode",
  untrusted: "the workspace is not trusted"
};
function Do(o, e) {
  switch (o) {
    case "enabled":
      return;
    case "refused":
      if (e === void 0) return;
      return {
        kind: "off",
        reason: wo[e]
      };
    case "no_one_to_ask":
      return {
        kind: "off",
        reason: reason
      };
  }
}
function _o(o, e) {
  let r = Do(e, g());
  if (e === "no_one_to_ask") U(o);else if (r !== void 0) w(o, r);
}
var Mo = {
  kind: "unanswered"
};
function watchRoot(o, e) {
  let r = ub.watch(o, {
      persistent: !0,
      ignoreInitial: !0,
      followSymlinks: !1,
      ignorePermissionErrors: !0,
      ignored: I_r(o, HY(), () => !1),
      usePolling: !0,
      interval: qRt,
      binaryInterval: qRt
    }),
    s = () => e();
  return r.on("add", s), r.on("addDir", s), r.on("change", s), r.on("unlink", s), r.on("unlinkDir", s), r.on("error", n => t(`dev mods: the watch on ${o}: ${l(n)}`, {
    level: "warn"
  })), {
    close: () => r.close()
  };
}
var bo = "Mod hot-reloading was not answered; it will be asked again once a turn ends.";
async function D() {
  try {
    let o = IO.get();
    if (o?.stage !== "wanted") return;
    if (g() !== void 0) return;
    if (!C()) {
      if (p("plugin_dev_mods", "no_one_to_ask"), IO.set({
        stage: "off",
        folder: o.folder
      }), o.loaded === void 0) U(o.folder);
      return;
    }
    await Se(o.folder, {
      recursive: !0
    });
    let e = IO.get();
    if (e?.stage !== "wanted") return;
    let {
        folder: folder_3,
        loaded: loaded
      } = e,
      n = {},
      watch = fo(folder_3, {
        watchRoot: watchRoot,
        loaded: loaded ?? [],
        listChildren: listChildren,
        refusal: refusal,
        ask: async (i, f) => {
          let a = await ao(i, f);
          if (a !== "no_one_to_ask" && a !== "retry") Whr.set(void 0);
          if (a === "decline") w(i, {
            kind: "declined"
          });
          return a;
        },
        enable: async i => w(i, {
          kind: "enabled",
          load: await N(i)
        }),
        deferred: () => SW(To(folder_3), mo),
        withdrawn: () => SW(To(folder_3), bo),
        unanswered: () => w(folder_3, Mo),
        stopped: i => {
          n.release?.(), lo(folder_3, i), _o(folder_3, i);
        },
        clock: clock,
        turn: turn,
        quietMs: quietMs
      });
    IO.set({
      stage: "watching",
      folder: folder_3,
      watch: watch,
      ...(loaded !== void 0 && {
        loaded: loaded
      })
    }), n.release = gt(() => watch.dispose());
  } catch (error) {
    t(`dev mods: the watch did not start: ${l(error)}`, {
      level: "error"
    });
  }
}
import { readdirSync as Ae } from "fs";
import { join as Oe } from "path";
import { statSync as Ee } from "fs";
function So(o) {
  try {
    return Ee(o, {
      throwIfNoEntry: !1
    })?.isFile() === !0;
  } catch (error) {
    if (Et(error)) return !1;
    throw error;
  }
}
function Ro(o) {
  try {
    return Ae(o, {
      withFileTypes: !0
    }).filter(item => (item.isDirectory() || item.isSymbolicLink()) && uJt(item.name)).map(item => item.name).filter(item => So(Oe(o, item, n0))).toSorted();
  } catch (error) {
    if (Et(error)) return;
    throw error;
  }
}
async function Eo(folder_4) {
  try {
    let loaded_2 = Ro(folder_4);
    if (loaded_2 === void 0 || loaded_2.length === 0) {
      let r = loaded_2 !== void 0 && C();
      IO.set(r ? {
        stage: "wanted",
        folder: folder_4,
        loaded: loaded_2
      } : void 0), await D();
      return;
    }
    IO.set({
      stage: "wanted",
      folder: folder_4,
      loaded: loaded_2
    }), DQt.set(vH(DQt.get() ?? [], [folder_4])), cie.get()?.joinPluginDir(folder_4), H(), await v(folder_4), await Q(0), await W(folder_4, await cNn()), _("plugin_dev_mods", {
      loaded_at_start: !0
    }), await D();
  } catch (error) {
    let r = IO.get();
    if ((r?.stage === "wanted" || r?.stage === "present") && r.folder === folder_4) IO.set({
      stage: "wanted",
      folder: folder_4
    }), D();
    F(folder_4, error, "load_failed");
  }
}
function M() {
  try {
    let o = IO.get();
    switch (o?.stage) {
      case "consented":
        if (g() === void 0) N(o.folder);
        return;
      case "present":
        if (g() === void 0) Eo(o.folder);
        return;
      case "wanted":
        D();
        return;
      case "enabled":
        v(o.folder);
        return;
      case void 0:
      case "watching":
      case "off":
        return;
    }
  } catch (error) {
    t(`dev mods: the catch-up failed: ${l(error)}`, {
      level: "error"
    });
  }
}
async function Po() {
  let o = IO.get(),
    folder_5 = b(Y());
  try {
    if (o?.stage === "watching" && o.folder !== folder_5) await o.watch.dispose();
    let r = IO.get(),
      s = r !== void 0 && r.folder !== folder_5,
      n = r === void 0 || r.stage === "off" || r.stage === "watching" && r.watch.isClosed();
    if (s || n) IO.set({
      stage: "wanted",
      folder: folder_5
    });
    if (kDn.set(M), refusal() === void 0) await D();
  } catch (error) {
    t(`dev mods: handing out ${folder_5} started nothing: ${l(error)}`, {
      level: "error"
    });
  }
  return folder_5;
}
var P = {};
vo(P, {
  DEV_MODS_PLACEHOLDER: () => We,
  default: () => P
});
var We = "${CLAUDE_DEV_MODS_DIR}";
async function cQn(o, e) {
  let {
    DEV_MODS_PLACEHOLDER: DEV_MODS_PLACEHOLDER
  } = P;
  if (!o.includes(DEV_MODS_PLACEHOLDER)) return o;
  let s = e.isPreload ? b(Y()) : await Po();
  return o.replaceAll(DEV_MODS_PLACEHOLDER, s);
}
function Ao() {
  let folder_6 = b(Y()),
    e = IO.get();
  if (e !== void 0 && e.folder === folder_6 && e.stage !== "off") return;
  if (e?.stage === "watching") e.watch.dispose().catch(s => t(`dev mods: the watch did not close: ${l(s)}`));
  IO.set({
    stage: "present",
    folder: folder_6
  }), kDn.set(M), M();
}
function Nbn() {
  ydo.set(cQn);
  try {
    let folder_7 = qSr(),
      e = IO.get();
    if (!(folder_7 !== void 0 && BJt(folder_7, Y()) && !(e?.stage === "enabled" && e.folder === folder_7))) {
      Ao();
      return;
    }
    if (e?.stage === "watching") e.watch.dispose().catch(s => t(`dev mods: the watch did not close: ${l(s)}`));
    if (IO.set({
      stage: "consented",
      folder: folder_7
    }), kDn.set(M), refusal() === void 0) Ue(folder_7, {
      recursive: !0
    }), M();
  } catch (error) {
    t(`dev mods: the restore failed: ${l(error)}`, {
      level: "error"
    });
  }
}
export { cQn, Nbn };