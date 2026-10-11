// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Y,
  qe
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  c
} from "B:/~BUN/root/chunk-kks4mj3w.js";
import {
  l,
  Et
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  Q
} from "B:/~BUN/root/chunk-17wqwt36.js";
import {
  Tr
} from "B:/~BUN/root/chunk-4p6z9qq1.js";
import {
  SW,
  uJt,
  pMn,
  BJt,
  IO,
  ydo,
  _do,
  Whr,
  cie,
  kDn,
  Vnt,
  DQt,
  sLn,
  P_r,
  I_r,
  qRt,
  _mo,
  aNn,
  lNn,
  cNn,
  H7t,
  VSr,
  qSr,
  oa,
  Ti
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  H0
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  gt,
  t,
  HY
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  _,
  m,
  p
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  xa
} from "B:/~BUN/root/chunk-qqgpf856.js";
import {
  he
} from "B:/~BUN/root/chunk-3rzkfay5.js";
import {
  Br
} from "B:/~BUN/root/chunk-3daz140w.js";
import {
  _te,
  Bb
} from "B:/~BUN/root/chunk-mrt797ke.js";
import {
  Nle
} from "B:/~BUN/root/chunk-8xaxa0y1.js";
import {
  U3,
  B3
} from "B:/~BUN/root/chunk-384x2wn9.js";
import {
  ub
} from "B:/~BUN/root/chunk-zz5hnasr.js";
import {
  FM
} from "B:/~BUN/root/chunk-y39emrp9.js";
import {
  n0
} from "B:/~BUN/root/chunk-r6m7remx.js";
import {
  KW
} from "B:/~BUN/root/chunk-4mcmxrhr.js";
import {
  Ykt,
  c2e
} from "B:/~BUN/root/chunk-antaq155.js";
import {
  vH
} from "B:/~BUN/root/chunk-bx8sc61q.js";
import {
  vo
} from "B:/~BUN/root/chunk-yv67t8hr.js";
import {
  mkdirSync as Ue
} from "fs";
import {
  join as $o
} from "path";
var b = (o) => $o(pMn(), o);
var oo = [{
  refusal: "hooks_modules_off",
  isRefused: () => !Nle()
}, {
  refusal: "all_hooks_disabled",
  isRefused: Bb
}, {
  refusal: "sideload_disabled",
  isRefused: B3
}, {
  refusal: "local_dirs_blocked",
  isRefused: () => !U3()
}, {
  refusal: "managed_hooks_only",
  isRefused: () => he("policySettings")?.allowManagedHooksOnly === !0
}, {
  refusal: "hooks_disabled_in_settings",
  isRefused: _te
}, {
  refusal: "safe_mode",
  isRefused: Tr
}, {
  refusal: "bare_mode",
  isRefused: () => Br("hooks")
}, {
  refusal: "untrusted",
  isRefused: () => !H0()
}];

function g() {
  return oo.find((o) => o.isRefused())?.refusal
}

function T() {
  let o = g();
  if (o !== void 0) p("plugin_dev_mods", o), t(`dev mods: mod hot-reloading is off here (${o})`);
  return o
}
import {
  mkdir as Se
} from "fs/promises";
import {
  basename as To
} from "path";
var eo = 2000;

function ro(o) {
  switch (o.kind) {
    case "chose":
      return o.value === "allow" ? "enable" : "decline";
    case "declined":
      return "decline";
    case "aborted":
      return "withdrawn";
    case "unanswered":
      return o.reason === "no_one_to_ask" ? "no_one_to_ask" : "retry"
  }
}
var q = "this session's folder";

function to(o) {
  let e = FM(o);
  if (e === null) return `${q} (${xa(o)})`;
  return `[${q}](${e.replaceAll("(","%28").replaceAll(")","%29")})`
}
var so = (o, e) => `Mods in ${to(o)} load ${e==="now"?"now":"when this turn ends"} and reload when their files change. They run with your permissions.`;
var Go = [{
  value: "not_now",
  label: "Not now"
}, {
  value: "allow",
  label: "Enable for this session"
}];
var Jo = "Mods";
var no = "Enable hot reloading for this session?";
var Zo = (o, e) => `${no}

${so(o,e)}`;
var oe = "mod_hot_reload";
async function ao(o, e) {
  let r = KW();
  if (r === void 0) return p("plugin_dev_mods", "no_session"), "no_one_to_ask";
  let s = new AbortController;
  e?.addEventListener("abort", () => s.abort(), {
    once: !0
  });
  try {
    let n = ro(await c2e({
      canUseTool: r.canUseTool,
      toolUseContext: r.toolContext(s),
      source: oe,
      header: Jo,
      question: Zo(o, H7t.isRunning() ? "turn-end" : "now"),
      choices: Go,
      personOnly: !0
    }));
    return n === "no_one_to_ask" ? p("plugin_dev_mods", "no_one_to_ask") : _("plugin_dev_mods", {
      answer: c(n)
    }), n
  } catch (n) {
    return t(`dev mods: the ask failed, asked again later: ${l(n)}`, {
      level: "error"
    }), "retry"
  }
}

function C() {
  let o = KW();
  if (o === void 0) return !0;
  try {
    return Ykt(o.toolContext(new AbortController))
  } catch (e) {
    return t(`dev mods: no context to ask in yet: ${l(e)}`, {
      level: "error"
    }), !0
  }
}

function fo(o, e) {
  let r = new Set,
    s = new Set(e.loaded),
    n = !1,
    d = !1,
    i = !1,
    f, a = 0,
    A = Number.NEGATIVE_INFINITY,
    k = !1,
    S = !1,
    j = !1,
    y = !1,
    O, Oo = e.watchRoot(o, () => {
      n = !0, J()
    }),
    Lo = e.turn.onBegin(() => {
      if (a += 1, !(f !== void 0 && !f.signal.aborted && e.turn.isPersonTurn())) return;
      if (f?.abort(), !S) S = !0, e.unanswered()
    }),
    Co = e.turn.onEnd(() => void K(Ho));

  function G() {
    O?.(), O = void 0
  }

  function J() {
    if (y || d) return;
    if (G(), e.turn.isRunning()) {
      K(B);
      return
    }
    O = e.clock.setTimeout(() => void K(B), e.quietMs)
  }
  async function K(u) {
    try {
      await u()
    } catch (L) {
      t(`dev mods: the watch on ${o} failed: ${l(L)}`, {
        level: "error"
      })
    }
  }
  async function Ho() {
    if (i) {
      i = !1;
      for (let u of await e.listChildren(o) ?? []) r.add(u)
    }
    if (d) {
      await X();
      return
    }
    if (k) k = !1, await B()
  }
  async function X() {
    if (y) return;
    if (e.refusal()) {
      await R(), e.stopped("refused");
      return
    }
    await Promise.all([R(), e.enable(o)]), e.stopped("enabled")
  }
  async function B() {
    O = void 0;
    let u = e.turn.isRunning() && n && A === Number.NEGATIVE_INFINITY,
      L = y || d,
      Fo = e.turn.isRunning() && !u;
    if (L || j || Fo || A === a) {
      k = !L;
      return
    }
    j = !0;
    try {
      let V = u ? [] : (await e.listChildren(o) ?? []).filter((E) => !r.has(E)),
        Wo = u || V.length > 0 && (n || V.some((E) => !s.has(E)));
      if (y || !Wo) return;
      if (e.turn.isRunning() && !u) {
        k = !0;
        return
      }
      if (e.refusal()) {
        await R(), e.stopped("refused");
        return
      }
      A = a;
      let Z = new AbortController;
      f = Z;
      let No = await e.ask(o, Z.signal).finally(() => {
        f = void 0
      });
      if (y) return;
      switch (No) {
        case "enable":
          if (e.turn.isRunning() && !e.refusal()) {
            d = !0, e.deferred();
            return
          }
          await X();
          return;
        case "decline": {
          S = !1, i = e.turn.isRunning();
          let E = await e.listChildren(o);
          for (let Io of [...V, ...E ?? []]) r.add(Io);
          return
        }
        case "withdrawn":
          if (e.withdrawn(), !S) S = !0, e.unanswered();
          k = !0;
          return;
        case "retry":
          k = !0;
          return;
        case "no_one_to_ask":
          await R(), e.stopped("no_one_to_ask");
          return
      }
    } finally {
      j = !1
    }
  }
  async function R() {
    if (y) return;
    y = !0, k = !1, G(), f?.abort(), Lo(), Co(), await Oo.close()
  }
  return J(), {
    declined: () => [...r],
    isClosed: () => y,
    dispose: R
  }
}
var mo = "Mod hot-reloading is on; this session's mods load when this turn ends.";

function lo(o, e) {
  let r = IO.get();
  if (r?.stage !== "watching" || r.folder !== o) return;
  switch (e) {
    case "refused":
      IO.set({
        stage: "wanted",
        folder: o,
        ...r.loaded !== void 0 && {
          loaded: r.loaded
        }
      });
      return;
    case "no_one_to_ask":
      IO.set({
        stage: "off",
        folder: o
      });
      return;
    case "enabled":
      return
  }
}
import {
  utimes as ie
} from "fs/promises";
async function v(o) {
  let e = new Date;
  await ie(o, e, e).catch((r) => t(`dev mods: ${o} keeps its old time: ${l(r)}`))
}

function H() {
  if (_do.get() !== void 0) return;
  _do.set(H7t.onEnd(() => {
    try {
      for (let o of [...Vnt.get() ?? [], ...DQt.get() ?? []]) v(o)
    } catch (o) {
      t(`dev mods: the turn-end refresh failed: ${l(o)}`, {
        level: "error"
      })
    }
  }))
}
import {
  basename as po
} from "path";

function F(o, e, r) {
  let s = r === "enable_failed" ? "enabling" : "loading";
  return SW(po(o), sLn(po(o), e)), m("plugin_dev_mods", r), t(`dev mods: ${s} ${o} failed: ${l(e)}`, {
    level: "error"
  }), "failed"
}

function co(o, e, r) {
  return {
    root: o,
    before: new Map,
    after: r.after,
    present: r.present,
    outcome: e
  }
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
      return "in this session's mods folder; restart to apply"
  }
}
async function ho(o, e, r) {
  let s = await lNn(o) ?? [],
    d = e === "reloaded" ? await Ti(r.storageV5, r.credentials) : {
      enabled: [],
      disabled: []
    },
    [i] = _mo([...d.enabled, ...d.disabled], [o]),
    f = i?.loaded ?? new Map;
  for (let a of P_r(co(o, e, {
      present: s,
      after: f
    }), go)) SW(a.plugin, a.text)
}
async function W(o, e) {
  let r = KW()?.toolContext(new AbortController);
  await ho(o, e, {
    storageV5: r?.storageV5,
    credentials: r?.credentials
  }).catch((s) => t(`dev mods: the lines for ${o} were not told: ${l(s)}`, {
    level: "error"
  }))
}
async function N(o) {
  try {
    IO.set({
      stage: "enabled",
      folder: o
    }), cie.get()?.joinPluginDir(o), Vnt.set(vH(Vnt.get() ?? [], [o])), H(), await v(o), await Q(0);
    let e = KW()?.toolContext(new AbortController);
    VSr(o, e?.storageV5);
    let r = await cNn();
    return await W(o, r), _("plugin_dev_mods", {
      enabled: !0
    }), r
  } catch (e) {
    return F(o, e, "enable_failed")
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
      return `The person enabled mod hot-reloading for this session, but the mods under ${o} did not load (the load failed; the transcript says why, and /reload-plugins tries again).`
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
      return `Mod hot-reloading is off in this session (${e.reason}): mods under ${o} are not loaded.`
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
var I = "nobody could be asked";

function U(o) {
  if (Whr.get() === o) return;
  Whr.set(o), w(o, {
    kind: "off",
    reason: I
  })
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
        kind: "off", reason: wo[e]
      };
    case "no_one_to_ask":
      return {
        kind: "off", reason: I
      }
  }
}

function _o(o, e) {
  let r = Do(e, g());
  if (e === "no_one_to_ask") U(o);
  else if (r !== void 0) w(o, r)
}
var Mo = {
  kind: "unanswered"
};

function ko(o, e) {
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
  return r.on("add", s), r.on("addDir", s), r.on("change", s), r.on("unlink", s), r.on("unlinkDir", s), r.on("error", (n) => t(`dev mods: the watch on ${o}: ${l(n)}`, {
    level: "warn"
  })), {
    close: () => r.close()
  }
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
      return
    }
    await Se(o.folder, {
      recursive: !0
    });
    let e = IO.get();
    if (e?.stage !== "wanted") return;
    let {
      folder: r,
      loaded: s
    } = e, n = {}, d = fo(r, {
      watchRoot: ko,
      loaded: s ?? [],
      listChildren: lNn,
      refusal: T,
      ask: async (i, f) => {
        let a = await ao(i, f);
        if (a !== "no_one_to_ask" && a !== "retry") Whr.set(void 0);
        if (a === "decline") w(i, {
          kind: "declined"
        });
        return a
      },
      enable: async (i) => w(i, {
        kind: "enabled",
        load: await N(i)
      }),
      deferred: () => SW(To(r), mo),
      withdrawn: () => SW(To(r), bo),
      unanswered: () => w(r, Mo),
      stopped: (i) => {
        n.release?.(), lo(r, i), _o(r, i)
      },
      clock: aNn,
      turn: H7t,
      quietMs: eo
    });
    IO.set({
      stage: "watching",
      folder: r,
      watch: d,
      ...s !== void 0 && {
        loaded: s
      }
    }), n.release = gt(() => d.dispose())
  } catch (o) {
    t(`dev mods: the watch did not start: ${l(o)}`, {
      level: "error"
    })
  }
}
import {
  readdirSync as Ae
} from "fs";
import {
  join as Oe
} from "path";
import {
  statSync as Ee
} from "fs";

function So(o) {
  try {
    return Ee(o, {
      throwIfNoEntry: !1
    })?.isFile() === !0
  } catch (e) {
    if (Et(e)) return !1;
    throw e
  }
}

function Ro(o) {
  try {
    return Ae(o, {
      withFileTypes: !0
    }).filter((e) => (e.isDirectory() || e.isSymbolicLink()) && uJt(e.name)).map((e) => e.name).filter((e) => So(Oe(o, e, n0))).toSorted()
  } catch (e) {
    if (Et(e)) return;
    throw e
  }
}
async function Eo(o) {
  try {
    let e = Ro(o);
    if (e === void 0 || e.length === 0) {
      let r = e !== void 0 && C();
      IO.set(r ? {
        stage: "wanted",
        folder: o,
        loaded: e
      } : void 0), await D();
      return
    }
    IO.set({
      stage: "wanted",
      folder: o,
      loaded: e
    }), DQt.set(vH(DQt.get() ?? [], [o])), cie.get()?.joinPluginDir(o), H(), await v(o), await Q(0), await W(o, await cNn()), _("plugin_dev_mods", {
      loaded_at_start: !0
    }), await D()
  } catch (e) {
    let r = IO.get();
    if ((r?.stage === "wanted" || r?.stage === "present") && r.folder === o) IO.set({
      stage: "wanted",
      folder: o
    }), D();
    F(o, e, "load_failed")
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
        return
    }
  } catch (o) {
    t(`dev mods: the catch-up failed: ${l(o)}`, {
      level: "error"
    })
  }
}
async function Po() {
  let o = IO.get(),
    e = b(Y());
  try {
    if (o?.stage === "watching" && o.folder !== e) await o.watch.dispose();
    let r = IO.get(),
      s = r !== void 0 && r.folder !== e,
      n = r === void 0 || r.stage === "off" || r.stage === "watching" && r.watch.isClosed();
    if (s || n) IO.set({
      stage: "wanted",
      folder: e
    });
    if (kDn.set(M), T() === void 0) await D()
  } catch (r) {
    t(`dev mods: handing out ${e} started nothing: ${l(r)}`, {
      level: "error"
    })
  }
  return e
}
var P = {};
vo(P, {
  DEV_MODS_PLACEHOLDER: () => We,
  default: () => P
});
var We = "${CLAUDE_DEV_MODS_DIR}";
async function cQn(o, e) {
  let {
    DEV_MODS_PLACEHOLDER: r
  } = P;
  if (!o.includes(r)) return o;
  let s = e.isPreload ? b(Y()) : await Po();
  return o.replaceAll(r, s)
}

function Ao() {
  let o = b(Y()),
    e = IO.get();
  if (e !== void 0 && e.folder === o && e.stage !== "off") return;
  if (e?.stage === "watching") e.watch.dispose().catch((s) => t(`dev mods: the watch did not close: ${l(s)}`));
  IO.set({
    stage: "present",
    folder: o
  }), kDn.set(M), M()
}

function Nbn() {
  ydo.set(cQn);
  try {
    let o = qSr(),
      e = IO.get();
    if (!(o !== void 0 && BJt(o, Y()) && !(e?.stage === "enabled" && e.folder === o))) {
      Ao();
      return
    }
    if (e?.stage === "watching") e.watch.dispose().catch((s) => t(`dev mods: the watch did not close: ${l(s)}`));
    if (IO.set({
        stage: "consented",
        folder: o
      }), kDn.set(M), T() === void 0) Ue(o, {
      recursive: !0
    }), M()
  } catch (o) {
    t(`dev mods: the restore failed: ${l(o)}`, {
      level: "error"
    })
  }
}
export {
  cQn,
  Nbn
};
