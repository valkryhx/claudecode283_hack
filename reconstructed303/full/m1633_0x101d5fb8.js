// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  b,
  c
} from "B:/~BUN/root/chunk-jthpk6wv.js";
import {
  d,
  Wt
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  K,
  Ze,
  de
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  Y
} from "B:/~BUN/root/chunk-89mss1tj.js";
import {
  g,
  m,
  p
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  $M
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  vr
} from "B:/~BUN/root/chunk-fbyz9h0p.js";
import {
  bt,
  t,
  V4
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  Es
} from "B:/~BUN/root/chunk-ek28wssa.js";
import {
  me
} from "B:/~BUN/root/chunk-1gpjpba6.js";
import {
  Ut
} from "B:/~BUN/root/chunk-cx57tr4b.js";
import {
  bme,
  fh
} from "B:/~BUN/root/chunk-0n2201tc.js";
import {
  w0n,
  WP,
  Fus,
  Hus,
  Hio,
  L0n,
  Qh,
  fse,
  M_r,
  Fco,
  $co,
  mJt,
  dys,
  N_r,
  F_r,
  gJt,
  HNn,
  Ys,
  Rfo,
  Afo,
  el
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  Uv
} from "B:/~BUN/root/chunk-vfmvkxsr.js";
import {
  Kee,
  Oj
} from "B:/~BUN/root/chunk-472kxa0t.js";
import {
  J0
} from "B:/~BUN/root/chunk-k382hx6g.js";
import {
  xr
} from "B:/~BUN/root/chunk-vttg4n7q.js";
import {
  Af
} from "B:/~BUN/root/chunk-1fjjnb3f.js";
import {
  li
} from "B:/~BUN/root/chunk-mtfk0qfd.js";
import {
  J$n,
  iie,
  XIt,
  F9,
  oj
} from "B:/~BUN/root/chunk-01qdq3qc.js";
import {
  y_
} from "B:/~BUN/root/chunk-s6jt7ap6.js";
import {
  Lqe,
  Wrt
} from "B:/~BUN/root/chunk-k3359v7z.js";
import {
  $$
} from "B:/~BUN/root/chunk-ndxtmc2k.js";
import {
  _ae
} from "B:/~BUN/root/chunk-bhfm57j1.js";
import {
  Mr
} from "B:/~BUN/root/chunk-ef0msk7r.js";
var L = {};
Mr(L, {
  DEV_MODS_PLACEHOLDER: () => nr,
  default: () => L
});
var ao = {
  explain: "explain",
  allow: "enable",
  not_now: "decline"
};
var fo = {
  no_one_to_ask: "no_one_to_ask",
  host_closed: "closed",
  no_selection: "unpicked",
  error: "retry"
};

function mo(o) {
  switch (o.kind) {
    case "chose":
      return ao[o.value];
    case "declined":
      return "decline";
    case "aborted":
      return "withdrawn";
    case "unanswered":
      return fo[o.reason]
  }
}
var lo = 2000;
var N = (o) => o === "now" ? "now" : "when this turn ends";
var G = "this session's folder";

function J(o) {
  let e = J0(o);
  if (e === null) return `${G} (${Es(o)})`;
  return `[${G}](${e.replaceAll("(","%28").replaceAll(")","%29")})`
}
var po = (o, e) => `Mods in ${J(o)} load ${N(e)} and reload when their files change. They run with your permissions.`;
var te = [{
  value: "explain",
  label: "How does this work?"
}, {
  value: "allow",
  label: "Enable for this session"
}, {
  value: "not_now",
  label: "Not now"
}];
var co = (o, e) => [`Mods live in ${J(o)}.`, "A mod is code Claude wrote; it runs with your permissions.", `Enable: they load ${N(e)} and reload when their files change.`, "Enable holds for this session, also after a restart.", "Not now: they stay unloaded until this session next starts.", "/plugin lists what loaded and turns it off."].join(`
`);
var ne = "Mods";
var W = "Enable hot reloading for this session?";
var ae = (o, e) => `${W}

${po(o,e)}`;
var fe = "mod_hot_reload";
var le = (o, e) => `${W}

${co(o,e)}`;
var ho = 3;
async function Z(o, e) {
  let r = HNn.isRunning() ? "turn-end" : "now",
    n = e === 0 ? ae(o.folder, r) : le(o.folder, r),
    i = mo(await Wrt({
      canUseTool: o.binding.canUseTool,
      toolUseContext: o.binding.toolContext(o.abortController),
      source: fe,
      header: ne,
      question: n,
      choices: te,
      personOnly: !0
    }));
  if (i !== "explain") return i;
  return g("plugin_dev_mods", {
    answer: b("explain")
  }), e < ho ? Z(o, e + 1) : "decline"
}
var xo = {
  no_one_to_ask: "no_one_to_ask",
  closed: "host_closed",
  unpicked: "no_selection"
};
async function yo(o, e) {
  let r = Qh();
  if (r === void 0) return p("plugin_dev_mods", "no_session"), "no_one_to_ask";
  let s = new AbortController;
  e?.addEventListener("abort", () => s.abort(), {
    once: !0
  });
  try {
    let n = await Z({
        binding: r,
        folder: o,
        abortController: s
      }, 0),
      i = xo[n];
    return i === void 0 ? g("plugin_dev_mods", {
      answer: c(n)
    }) : p("plugin_dev_mods", i), n
  } catch (n) {
    return t(`dev mods: the ask failed, asked again later: ${d(n)}`, {
      level: "error"
    }), "retry"
  }
}

function I() {
  let o = Qh();
  if (o === void 0) return !0;
  try {
    return Lqe(o.toolContext(new AbortController))
  } catch (e) {
    return t(`dev mods: no context to ask in yet: ${d(e)}`, {
      level: "error"
    }), !0
  }
}
import {
  join as xe
} from "path";
var R = (o) => xe(_ae(), o);
var vo = [{
  refusal: "diskless",
  isRefused: de
}, {
  refusal: "hooks_modules_off",
  isRefused: () => !y_()
}, {
  refusal: "all_hooks_disabled",
  isRefused: fh
}, {
  refusal: "sideload_disabled",
  isRefused: Oj
}, {
  refusal: "local_dirs_blocked",
  isRefused: () => !Kee()
}, {
  refusal: "managed_hooks_only",
  isRefused: () => me("policySettings")?.allowManagedHooksOnly === !0
}, {
  refusal: "hooks_disabled_in_settings",
  isRefused: bme
}, {
  refusal: "safe_mode",
  isRefused: vr
}, {
  refusal: "bare_mode",
  isRefused: () => xr("hooks")
}, {
  refusal: "untrusted",
  isRefused: () => !$M()
}];

function x() {
  return vo.find((o) => o.isRefused())?.refusal
}

function P() {
  let o = x();
  if (o !== void 0) p("plugin_dev_mods", o), t(`dev mods: mod hot-reloading is off here (${o})`);
  return o
}
import {
  mkdir as qe
} from "fs/promises";
import {
  basename as No
} from "path";
var wo = 3;

function Do(o, e) {
  let r = new Set,
    s = new Set(e.loaded),
    n = !1,
    i = !1,
    a = !1,
    l, f = 0,
    S = Number.NEGATIVE_INFINITY,
    v = !1,
    Q = 0,
    T = !1,
    q = !1,
    w = !1,
    C, Ko = e.watchRoot(o, () => {
      n = !0, ro()
    }),
    Bo = e.turn.onBegin(() => {
      if (f += 1, !(l !== void 0 && !l.signal.aborted && e.turn.isPersonTurn())) return;
      if (l?.abort(), !T) T = !0, e.unanswered()
    }),
    Vo = e.turn.onEnd(() => void z(Yo));

  function eo() {
    C?.(), C = void 0
  }

  function ro() {
    if (w || i) return;
    if (eo(), e.turn.isRunning()) {
      z(F);
      return
    }
    C = e.clock.setTimeout(() => void z(F), e.quietMs)
  }
  async function z(u) {
    try {
      await u()
    } catch (H) {
      t(`dev mods: the watch on ${o} failed: ${d(H)}`, {
        level: "error"
      })
    }
  }
  async function Yo() {
    if (a) {
      a = !1;
      for (let u of await e.listChildren(o) ?? []) r.add(u)
    }
    if (i) {
      await to();
      return
    }
    if (v) v = !1, await F()
  }
  async function to() {
    if (w) return;
    if (e.refusal()) {
      await E(), e.stopped("refused");
      return
    }
    await Promise.all([E(), e.enable(o)]), e.stopped("enabled")
  }
  async function F() {
    C = void 0;
    let u = e.turn.isRunning() && n && S === Number.NEGATIVE_INFINITY,
      H = w || i,
      Qo = e.turn.isRunning() && !u;
    if (H || q || Qo || S === f) {
      v = !H;
      return
    }
    q = !0;
    let so = !1;
    try {
      let X = u ? [] : (await e.listChildren(o) ?? []).filter((A) => !r.has(A)),
        qo = u || X.length > 0 && (n || X.some((A) => !s.has(A)));
      if (w || !qo) return;
      if (e.turn.isRunning() && !u) {
        v = !0;
        return
      }
      if (e.refusal()) {
        await E(), e.stopped("refused");
        return
      }
      S = f;
      let no = new AbortController;
      l = no;
      let io = await e.ask(o, no.signal).finally(() => {
        l = void 0
      });
      if (w) return;
      switch (io) {
        case "enable":
          if (e.turn.isRunning() && !e.refusal()) {
            i = !0, e.deferred();
            return
          }
          await to();
          return;
        case "decline": {
          T = !1, Q = 0, a = e.turn.isRunning();
          let A = await e.listChildren(o);
          for (let zo of [...X, ...A ?? []]) r.add(zo);
          return
        }
        case "withdrawn":
          if (e.withdrawn(), !T) T = !0, e.unanswered();
          v = !0;
          return;
        case "retry":
          v = !0;
          return;
        case "closed":
        case "unpicked":
          if (!T) T = !0, e.unanswered();
          if (Q += 1, Q >= wo) {
            await E(), e.stopped("no_pick");
            return
          }
          if (io === "unpicked") {
            S = e.turn.isRunning() ? f - 1 : f, v = !0;
            return
          }
          S = f - 1, so = !0;
          break;
        case "no_one_to_ask":
          await E(), e.stopped("no_one_to_ask");
          return
      }
    } finally {
      q = !1
    }
    if (so) await F()
  }
  async function E() {
    if (w) return;
    w = !0, v = !1, eo(), l?.abort(), Bo(), Vo(), await Ko.close()
  }
  return ro(), {
    declined: () => [...r],
    isClosed: () => w,
    dispose: E
  }
}
var _o = "Mod hot-reloading is on; this session's mods load when this turn ends.";

function ko(o, e) {
  let r = WP.get();
  if (r?.stage !== "watching" || r.folder !== o) return;
  switch (e) {
    case "refused":
      WP.set({
        stage: "wanted",
        folder: o,
        ...r.loaded !== void 0 && {
          loaded: r.loaded
        }
      });
      return;
    case "no_one_to_ask":
    case "no_pick":
      WP.set({
        stage: "off",
        folder: o
      });
      return;
    case "enabled":
      return
  }
}
import {
  utimes as be
} from "fs/promises";
async function D(o) {
  let e = new Date;
  await be(o, e, e).catch((r) => t(`dev mods: ${o} keeps its old time: ${d(r)}`))
}

function U() {
  if (Hus.get() !== void 0) return;
  Hus.set(HNn.onEnd(() => {
    try {
      for (let o of [...iie.get() ?? [], ...XIt.get() ?? []]) D(o)
    } catch (o) {
      t(`dev mods: the turn-end refresh failed: ${d(o)}`, {
        level: "error"
      })
    }
  }))
}
import {
  basename as Mo
} from "path";

function O(o, e, r) {
  let s = r === "enable_failed" ? "enabling" : "loading";
  return oj(Mo(o), M_r(Mo(o), e)), m("plugin_dev_mods", r), t(`dev mods: ${s} ${o} failed: ${d(e)}`, {
    level: "error"
  }), "failed"
}

function To(o, e, r) {
  return {
    root: o,
    before: new Map,
    after: r.after,
    present: r.present,
    outcome: e
  }
}

function bo(o, e) {
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
async function So(o, e, r) {
  let s = await F_r(o) ?? [],
    i = e === "reloaded" ? await Ys(r.storageV5, r.credentials) : {
      enabled: [],
      disabled: []
    },
    [a] = dys([...i.enabled, ...i.disabled], [o]),
    l = a?.loaded ?? new Map;
  for (let f of Fco(To(o, e, {
      present: s,
      after: l
    }), bo)) F9(f.plugin, f.text)
}
async function j(o, e) {
  let r = Qh()?.toolContext(new AbortController);
  await So(o, e, {
    storageV5: r?.storageV5,
    credentials: r?.credentials
  }).catch((s) => t(`dev mods: the lines for ${o} were not told: ${d(s)}`, {
    level: "error"
  }))
}
async function B(o) {
  try {
    await fse.get()?.joinPluginDir(o)
  } catch (e) {
    let r = WP.get();
    if ((r?.stage === "watching" || r?.stage === "consented") && r.folder === o) WP.set({
      stage: "wanted",
      folder: o,
      ...r.stage === "watching" && r.loaded !== void 0 && {
        loaded: r.loaded
      }
    });
    return O(o, e, "enable_failed"), {
      kind: "off",
      reason: d(e)
    }
  }
  try {
    WP.set({
      stage: "enabled",
      folder: o
    }), iie.set($$(iie.get() ?? [], [o])), U(), await D(o), await Y(0);
    let e = Qh()?.toolContext(new AbortController);
    Rfo(o, e?.storageV5);
    let r = await gJt();
    return await j(o, r), g("plugin_dev_mods", {
      enabled: !0
    }), {
      kind: "enabled",
      load: r
    }
  } catch (e) {
    return {
      kind: "enabled",
      load: O(o, e, "enable_failed")
    }
  }
}

function Eo(o, e) {
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

function Ro(o, e) {
  switch (e.kind) {
    case "enabled":
      return Eo(o, e.load);
    case "declined":
      return `The person declined mod hot-reloading: what this run wrote under ${o} is written but NOT loaded (a mod that loaded when the session started keeps running as it loaded). Do not say the change is running. It loads the next time this session starts (/reload-plugins reloads only a mod that loaded at the start); the person can ask again.`;
    case "unanswered":
      return `The person has not answered the mod hot-reloading question yet; it is asked again once a turn ends. What this run wrote under ${o} is written but NOT loaded yet. Do not say it was declined, and do not suggest --plugin-dir or a restart.`;
    case "off":
      return `Mod hot-reloading is off in this session (${e.reason}): mods under ${o} are not loaded.`
  }
}
var _ = (o, e) => el({
  agentId: Ze(),
  value: li({
    body: `
${Ut(Ro(o,e))}`
  }),
  mode: "task-notification",
  skipAttachments: !0,
  isMeta: !0,
  passive: !0,
  priority: "next"
});
var fKt = "nobody could be asked";

function V(o) {
  if (Hio.get() === o) return;
  Hio.set(o), _(o, {
    kind: "off",
    reason: fKt
  })
}
var Po = "the question got no pick three times";
var Ao = {
  hooks_modules_off: "hooks modules are switched off in this process",
  all_hooks_disabled: "the organization disables all hooks",
  sideload_disabled: "the organization forbids side-loaded plugins",
  local_dirs_blocked: "the organization blocks plugins from local folders",
  managed_hooks_only: "the organization allows only managed hooks",
  hooks_disabled_in_settings: "hooks are turned off in your settings (disableAllHooks)",
  safe_mode: "the session runs in safe mode",
  diskless: "this kind of cloud session has no disk to load mods from",
  bare_mode: "the session runs in bare mode",
  untrusted: "the workspace is not trusted"
};

function Oo(o, e) {
  switch (o) {
    case "enabled":
      return;
    case "refused":
      if (e === void 0) return;
      return {
        kind: "off", reason: Ao[e]
      };
    case "no_one_to_ask":
      return {
        kind: "off", reason: fKt
      };
    case "no_pick":
      return {
        kind: "off", reason: Po
      }
  }
}

function Lo(o, e) {
  let r = Oo(e, x());
  if (e === "no_one_to_ask") V(o);
  else if (r !== void 0) _(o, r)
}
var Co = {
  kind: "unanswered"
};

function Fo(o, e) {
  let r = Uv.watch(o, {
      persistent: !0,
      ignoreInitial: !0,
      followSymlinks: !1,
      ignorePermissionErrors: !0,
      ignored: $co(o, V4(), () => !1),
      usePolling: !0,
      interval: mJt,
      binaryInterval: mJt
    }),
    s = () => e();
  return r.on("add", s), r.on("addDir", s), r.on("change", s), r.on("unlink", s), r.on("unlinkDir", s), r.on("error", (n) => t(`dev mods: the watch on ${o}: ${d(n)}`, {
    level: "warn"
  })), {
    close: () => r.close()
  }
}
var Ho = "Mod hot-reloading was not answered; it will be asked again once a turn ends.";
async function k() {
  try {
    let o = WP.get();
    if (o?.stage !== "wanted") return;
    if (x() !== void 0) return;
    if (!I()) {
      if (p("plugin_dev_mods", "no_one_to_ask"), WP.set({
          stage: "off",
          folder: o.folder
        }), o.loaded === void 0) V(o.folder);
      return
    }
    await qe(o.folder, {
      recursive: !0
    });
    let e = WP.get();
    if (e?.stage !== "wanted") return;
    let {
      folder: r,
      loaded: s
    } = e, n = {}, i = Do(r, {
      watchRoot: Fo,
      loaded: s ?? [],
      listChildren: F_r,
      refusal: P,
      ask: async (a, l) => {
        let f = await yo(a, l);
        if (f !== "no_one_to_ask" && f !== "retry") Hio.set(void 0);
        if (f === "decline") _(a, {
          kind: "declined"
        });
        return f
      },
      enable: async (a) => _(a, await B(a)),
      deferred: () => F9(No(r), _o),
      withdrawn: () => F9(No(r), Ho),
      unanswered: () => _(r, Co),
      stopped: (a) => {
        n.release?.(), ko(r, a), Lo(r, a)
      },
      clock: N_r,
      turn: HNn,
      quietMs: lo
    });
    WP.set({
      stage: "watching",
      folder: r,
      watch: i,
      ...s !== void 0 && {
        loaded: s
      }
    }), n.release = bt(() => i.dispose())
  } catch (o) {
    t(`dev mods: the watch did not start: ${d(o)}`, {
      level: "error"
    })
  }
}
import {
  readdirSync as Je
} from "fs";
import {
  join as or
} from "path";
import {
  statSync as Xe
} from "fs";

function Wo(o) {
  try {
    return Xe(o, {
      throwIfNoEntry: !1
    })?.isFile() === !0
  } catch (e) {
    if (Wt(e)) return !1;
    throw e
  }
}

function Io(o) {
  try {
    return Je(o, {
      withFileTypes: !0
    }).filter((e) => (e.isDirectory() || e.isSymbolicLink()) && L0n(e.name)).map((e) => e.name).filter((e) => Wo(or(o, e, Af))).toSorted()
  } catch (e) {
    if (Wt(e)) return;
    throw e
  }
}
async function $o(o) {
  try {
    let e = Io(o);
    if (e === void 0 || e.length === 0) {
      let r = e !== void 0 && I();
      WP.set(r ? {
        stage: "wanted",
        folder: o,
        loaded: e
      } : void 0), await k();
      return
    }
    WP.set({
      stage: "wanted",
      folder: o,
      loaded: e
    }), XIt.set($$(XIt.get() ?? [], [o])), await fse.get()?.joinPluginDir(o), U(), await D(o), await Y(0), await j(o, await gJt()), g("plugin_dev_mods", {
      loaded_at_start: !0
    }), await k()
  } catch (e) {
    let r = WP.get();
    if ((r?.stage === "wanted" || r?.stage === "present") && r.folder === o) WP.set({
      stage: "wanted",
      folder: o
    }), k();
    O(o, e, "load_failed")
  }
}

function M() {
  try {
    let o = WP.get();
    switch (o?.stage) {
      case "consented":
        if (x() === void 0) B(o.folder);
        return;
      case "present":
        if (x() === void 0) $o(o.folder);
        return;
      case "wanted":
        k();
        return;
      case "enabled":
        D(o.folder);
        return;
      case void 0:
      case "watching":
      case "off":
        return
    }
  } catch (o) {
    t(`dev mods: the catch-up failed: ${d(o)}`, {
      level: "error"
    })
  }
}
async function Uo() {
  let o = WP.get(),
    e = R(K());
  try {
    if (o?.stage === "watching" && o.folder !== e) await o.watch.dispose();
    let r = WP.get(),
      s = r !== void 0 && r.folder !== e,
      n = r === void 0 || r.stage === "off" || r.stage === "watching" && r.watch.isClosed();
    if (s || n) WP.set({
      stage: "wanted",
      folder: e
    });
    if (J$n.set(M), P() === void 0) await k()
  } catch (r) {
    t(`dev mods: handing out ${e} started nothing: ${d(r)}`, {
      level: "error"
    })
  }
  return e
}
var nr = "${CLAUDE_DEV_MODS_DIR}";
async function q8r(o, e) {
  let {
    DEV_MODS_PLACEHOLDER: r
  } = L;
  if (!o.includes(r)) return o;
  let s = e.isPreload ? R(K()) : await Uo();
  return o.replaceAll(r, s)
}

function jo() {
  let o = R(K()),
    e = WP.get();
  if (e !== void 0 && e.folder === o && e.stage !== "off") return;
  if (e?.stage === "watching") e.watch.dispose().catch((s) => t(`dev mods: the watch did not close: ${d(s)}`));
  WP.set({
    stage: "present",
    folder: o
  }), J$n.set(M), M()
}
import {
  mkdirSync as fr
} from "fs";

function vir() {
  Fus.set(q8r);
  try {
    let o = Afo(),
      e = WP.get();
    if (!(o !== void 0 && w0n(o, K()) && !(e?.stage === "enabled" && e.folder === o))) {
      jo();
      return
    }
    if (e?.stage === "watching") e.watch.dispose().catch((s) => t(`dev mods: the watch did not close: ${d(s)}`));
    if (WP.set({
        stage: "consented",
        folder: o
      }), J$n.set(M), P() === void 0) fr(o, {
      recursive: !0
    }), M()
  } catch (o) {
    t(`dev mods: the restore failed: ${d(o)}`, {
      level: "error"
    })
  }
}
export {
  fKt,
  q8r,
  vir
};
