// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  z,
  st,
  ye,
  q
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  b,
  f
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  d,
  qt
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  J
} from "B:/~BUN/root/chunk-r5zmhp23.js";
import {
  mC
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  Zr
} from "B:/~BUN/root/chunk-eev762xg.js";
import {
  vt,
  t,
  p7
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  g,
  m,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  be
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  Ae
} from "B:/~BUN/root/chunk-eds8xkh8.js";
import {
  Tse,
  $m
} from "B:/~BUN/root/chunk-79dw4seg.js";
import {
  ur
} from "B:/~BUN/root/chunk-y5gyn2hc.js";
import {
  Kue,
  Jq
} from "B:/~BUN/root/chunk-esnm3r09.js";
import {
  L8
} from "B:/~BUN/root/chunk-fnfdeqaa.js";
import {
  cs
} from "B:/~BUN/root/chunk-kfm993xq.js";
import {
  G6t,
  OP,
  Zhi,
  egi,
  AQo,
  klr,
  f7r,
  p7r,
  yp,
  bdr,
  $ge,
  Eto,
  Ans,
  Pns,
  FRn,
  xro,
  Pro,
  rEi,
  Dro,
  Lro,
  $Ot,
  Yfr,
  sEi,
  Nro,
  K8e,
  ki,
  eis,
  tis,
  el,
  Ie,
  ll,
  Oy
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  nC
} from "B:/~BUN/root/chunk-eswth6m1.js";
import {
  Vyr,
  Hye,
  qJt,
  wq,
  kq
} from "B:/~BUN/root/chunk-0s00dkj6.js";
import {
  Nm
} from "B:/~BUN/root/chunk-63btkzab.js";
import {
  Zw
} from "B:/~BUN/root/chunk-sa4785jr.js";
import {
  ylo
} from "B:/~BUN/root/chunk-ybkgfvgz.js";
import {
  Kat,
  uge
} from "B:/~BUN/root/chunk-p8dmgxyc.js";
import {
  WG
} from "B:/~BUN/root/chunk-0aj3426j.js";
import {
  hse
} from "B:/~BUN/root/chunk-dzjj3jwh.js";
import {
  Rr
} from "B:/~BUN/root/chunk-4qfwb3rf.js";
var H = {};
Rr(H, {
  DEV_MODS_PLACEHOLDER: () => fr,
  default: () => H
});
var ho = {
  explain: "explain",
  allow: "enable",
  not_now: "decline"
};
var xo = {
  no_one_to_ask: "no_one_to_ask",
  host_closed: "closed",
  no_selection: "unpicked",
  error: "retry"
};

function yo(o) {
  switch (o.kind) {
    case "chose":
      return ho[o.value];
    case "declined":
      return "decline";
    case "aborted":
      return "withdrawn";
    case "unanswered":
      return xo[o.reason]
  }
}
var vo = (o) => o === "now" ? "now" : "when this turn ends";
var wo = (o) => `They'll load ${vo(o)}, and they'll reload whenever they change. A mod is code, and it runs with the same access you have here.`;
var io = [{
  value: "explain",
  label: "How does this work?"
}, {
  value: "allow",
  label: "Turn them on"
}, {
  value: "not_now",
  label: "Not now"
}];

function Do(o) {
  let e = o === "now",
    r = !ye();
  return ["A mod is a small program that changes how Claude looks or behaves here.", "Claude wrote these mods, and they run with the same access you have.", e ? "If you turn them on, they'll load now and reload whenever they change." : "Once they're on, they load when this turn ends and reload when they change.", "That lasts for the rest of this session, even if it restarts.", "If you choose Not now, nothing new will load until this session next starts.", ...r ? ["You can see what's loaded, and turn it off, with /plugin."] : []].join(`
`)
}
var _o = "Mods";
var R = "Turn on the mods Claude writes in this session?";
var de = (o) => `${R}

${wo(o)}`;
var Hqr = "mod_hot_reload";
var me = (o) => `${R}

${Do(o)}`;

function ko(o, e) {
  let r = [{
      question: R,
      header: _o,
      options: io.filter((i) => i.value !== "explain").map((i) => ({
        label: i.label,
        description: ""
      })),
      multiSelect: !1
    }],
    s = {
      questions: r,
      answers: {
        [R]: e
      }
    },
    n = el({
      content: [{
        type: "tool_use",
        id: o,
        name: cs,
        input: {
          questions: r
        }
      }],
      isVirtual: !0
    }),
    l = Ie({
      content: [L8.mapToolResultToToolResultBlockParam(s, o)],
      toolUseResult: s,
      isVirtual: !0
    });
  return [{
    ...n,
    message: {
      ...n.message,
      stop_reason: "tool_use"
    }
  }, l]
}
var To = 2000;
var Mo = "Not turned on.";

function mo(o, e) {
  if (bo(() => {
      let r = yp(),
        s = o.kind === "chose" ? io.find((l) => l.value === o.value)?.label : void 0,
        n = o.kind === "declined" ? o.typedAnswer : s;
      if (n !== void 0) r?.sendDisplayRows?.(ko(e, n));
      if (s !== void 0 && r?.surface === "terminal") wq(K8e, `${R} \u2192 ${s}`)
    }), o.kind === "declined") bo(() => wq(K8e, Mo))
}

function bo(o) {
  try {
    o()
  } catch (e) {
    c("plugin_dev_mods", "answer_not_shown"), a(e)
  }
}
var So = 3;
async function fo(o, e) {
  let r = Yfr.isRunning() ? "turn-end" : "now",
    n = e === 0 ? de(r) : me(r),
    l = {
      id: ""
    },
    i = await uge({
      canUseTool: (...y) => (l.id = y[4], o.binding.canUseTool(...y)),
      toolUseContext: o.binding.toolContext(o.abortController),
      source: Hqr,
      header: _o,
      question: n,
      choices: io,
      personOnly: !0
    }),
    u = yo(i),
    p = i.kind === "declined" && i.typedAnswer !== void 0 && !/^\[.*\]$/u.test(i.typedAnswer);
  if (u !== "explain" && !p) return mo(i, l.id), u;
  if (u === "explain") g("plugin_dev_mods", {
    answer: b("explain")
  });
  if (e < So) return fo(o, e + 1);
  return mo(p ? i : {
    kind: "declined"
  }, l.id), "decline"
}
var Eo = {
  no_one_to_ask: "no_one_to_ask",
  closed: "host_closed",
  unpicked: "no_selection"
};
async function Ro(o, e) {
  let r = yp();
  if (r === void 0) return c("plugin_dev_mods", "no_session"), "no_one_to_ask";
  let s = new AbortController;
  e?.addEventListener("abort", () => s.abort(), {
    once: !0
  });
  try {
    let n = await fo({
        binding: r,
        folder: o,
        abortController: s
      }, 0),
      l = Eo[n];
    return l === void 0 ? g("plugin_dev_mods", {
      answer: f(n)
    }) : c("plugin_dev_mods", l), n
  } catch (n) {
    return t(`dev mods: the ask failed, asked again later: ${d(n)}`, {
      level: "error"
    }), "retry"
  }
}

function Y() {
  let o = yp();
  if (o === void 0) return !0;
  try {
    return Kat(o.toolContext(new AbortController))
  } catch (e) {
    return t(`dev mods: no context to ask in yet: ${d(e)}`, {
      level: "error"
    }), !0
  }
}
import {
  join as we
} from "path";
var O = (o) => we(hse(), o);
var Ao = [{
  refusal: "diskless",
  isRefused: q
}, {
  refusal: "hooks_modules_off",
  isRefused: () => !Zw()
}, {
  refusal: "all_hooks_disabled",
  isRefused: $m
}, {
  refusal: "sideload_disabled",
  isRefused: Jq
}, {
  refusal: "local_dirs_blocked",
  isRefused: () => !Kue()
}, {
  refusal: "managed_hooks_only",
  isRefused: () => be("policySettings")?.allowManagedHooksOnly === !0
}, {
  refusal: "hooks_disabled_in_settings",
  isRefused: Tse
}, {
  refusal: "safe_mode",
  isRefused: Zr
}, {
  refusal: "bare_mode",
  isRefused: () => ur("hooks")
}, {
  refusal: "untrusted",
  isRefused: () => !mC()
}];

function w() {
  return Ao.find((o) => o.isRefused())?.refusal
}

function P() {
  let o = w();
  if (o !== void 0) c("plugin_dev_mods", o), t(`dev mods: mod hot-reloading is off here (${o})`);
  return o
}
import {
  mkdir as or
} from "fs/promises";
var Oo = 3;

function Po(o, e) {
  let r = new Set,
    s = new Set(e.loaded),
    n = !1,
    l = !1,
    i = !1,
    u, p = 0,
    y = Number.NEGATIVE_INFINITY,
    _ = !1,
    W = 0,
    F = !1,
    U = !1,
    C = !1,
    ro = !1,
    k = !1,
    K, zo = e.watchRoot(o, () => {
      n = !0, uo()
    }),
    Go = e.turn.onBegin(() => {
      if (p += 1, F = e.turn.isPersonTurn(), U && F) W -= 1;
      U = !1
    }),
    Xo = e.turn.onEnd((h) => void to(() => Jo(h ? "wait" : "wake")));

  function po() {
    K?.(), K = void 0
  }

  function uo() {
    if (k || l) return;
    if (po(), e.turn.isRunning()) {
      to(j);
      return
    }
    K = e.clock.setTimeout(() => void to(j), e.quietMs)
  }
  async function to(h) {
    try {
      await h()
    } catch (x) {
      t(`dev mods: the watch on ${o} failed: ${d(x)}`, {
        level: "error"
      })
    }
  }
  async function Jo(h) {
    if (i) {
      i = !1;
      for (let x of await e.listChildren(o) ?? []) r.add(x)
    }
    if (l) {
      await co(h);
      return
    }
    if (_) _ = !1, await j()
  }
  async function co(h) {
    if (k) return;
    if (e.refusal()) {
      await A(), e.stopped("refused");
      return
    }
    let x = h,
      so = e.turn.onBegin(() => {
        x = "wait"
      }),
      B = e.turn.onEnd((L) => {
        x = L ? "wait" : "wake"
      });
    try {
      await Promise.all([A(), e.enable(o, () => x)])
    } finally {
      so(), B()
    }
    e.stopped("enabled")
  }
  async function j() {
    K = void 0;
    let h = e.turn.isRunning() && n && y === Number.NEGATIVE_INFINITY,
      x = k || l,
      so = e.turn.isRunning() && !h;
    if (x || ro || so || y === p) {
      _ = !x;
      return
    }
    ro = !0;
    let B = !1;
    try {
      let L = h ? [] : (await e.listChildren(o) ?? []).filter((N) => !r.has(N)),
        Zo = h || L.length > 0 && (n || L.some((N) => !s.has(N)));
      if (k || !Zo) return;
      if (e.turn.isRunning() && !h) {
        _ = !0;
        return
      }
      if (e.refusal()) {
        await A(), e.stopped("refused");
        return
      }
      y = p, F = !1, U = !1;
      let go = new AbortController;
      u = go;
      let no = await e.ask(o, go.signal).finally(() => {
        u = void 0
      });
      if (k) return;
      switch (no) {
        case "enable":
          if (e.turn.isRunning() && !e.refusal()) {
            l = !0, e.deferred();
            return
          }
          await co("wake");
          return;
        case "decline": {
          C = !1, W = 0, i = e.turn.isRunning();
          let N = await e.listChildren(o);
          for (let oe of [...L, ...N ?? []]) r.add(oe);
          return
        }
        case "withdrawn":
          if (!C) C = !0, e.unanswered();
          _ = !0;
          return;
        case "retry":
          _ = !0;
          return;
        case "closed":
        case "unpicked":
          if (!C) C = !0, e.unanswered();
          if (!F) W += 1, U = no === "unpicked";
          if (W >= Oo) {
            await A(), e.stopped("no_pick");
            return
          }
          if (no === "unpicked") {
            y = e.turn.isRunning() ? p - 1 : p, _ = !0;
            return
          }
          y = p - 1, B = !0;
          break;
        case "no_one_to_ask":
          await A(), e.stopped("no_one_to_ask");
          return
      }
    } finally {
      ro = !1
    }
    if (B) await j()
  }
  async function A() {
    if (k) return;
    k = !0, _ = !1, po(), u?.abort(), Go(), Xo(), await zo.close()
  }
  return uo(), {
    declined: () => [...r],
    isClosed: () => k,
    dispose: A
  }
}
var Co = "They'll load when this turn ends.";

function Lo(o, e) {
  let r = OP.get();
  if (r?.stage !== "watching" || r.folder !== o) return;
  switch (e) {
    case "refused":
      OP.set({
        stage: "wanted",
        folder: o,
        ...r.loaded !== void 0 && {
          loaded: r.loaded
        }
      });
      return;
    case "no_one_to_ask":
    case "no_pick":
      OP.set({
        stage: "off",
        folder: o
      });
      return;
    case "enabled":
      return
  }
}
import {
  utimes as Pe
} from "fs/promises";
async function T(o) {
  let e = new Date;
  await Pe(o, e, e).catch((r) => t(`dev mods: ${o} keeps its old time: ${d(r)}`))
}

function G() {
  if (egi.get() !== void 0) return;
  egi.set(Yfr.onEnd(() => {
    try {
      for (let o of [...Hye.get() ?? [], ...qJt.get() ?? []]) T(o)
    } catch (o) {
      t(`dev mods: the turn-end refresh failed: ${d(o)}`, {
        level: "error"
      })
    }
  }))
}
import {
  basename as Ne
} from "path";

function I(o, e, r) {
  let s = r === "enable_failed" ? "enabling" : "loading";
  if (r === "enable_failed") wq(K8e, sEi(d(e)));
  else kq(K8e, Eto(Ne(o), e));
  return m("plugin_dev_mods", r), t(`dev mods: ${s} ${o} failed: ${d(e)}`, {
    level: "error"
  }), "failed"
}

function No(o, e, r) {
  return {
    root: o,
    before: new Map,
    after: r.after,
    present: r.present,
    unserved: r.unserved,
    outcome: e
  }
}
async function Io(o, e, r) {
  let s = await Lro(o) ?? [],
    l = e === "reloaded" ? await ki(r.storageV5, r.credentials) : {
      enabled: [],
      disabled: []
    },
    [i] = rEi([...l.enabled, ...l.disabled], [o]);
  for (let u of Ans(No(o, e, {
      present: s,
      after: i?.loaded ?? new Map,
      unserved: i?.unserved ?? new Set
    }), Nro, (p) => bdr.get()?.isUnloaded(p) ?? !1)) wq(u.plugin, u.text)
}
async function X(o, e) {
  let r = yp()?.toolContext(new AbortController);
  await Io(o, e, {
    storageV5: r?.storageV5,
    credentials: r?.credentials
  }).catch((s) => t(`dev mods: the lines for ${o} were not told: ${d(s)}`, {
    level: "error"
  }))
}
async function Z(o) {
  try {
    await $ge.get()?.joinPluginDir(o)
  } catch (e) {
    let r = OP.get();
    if ((r?.stage === "watching" || r?.stage === "consented") && r.folder === o) OP.set({
      stage: "wanted",
      folder: o,
      ...r.stage === "watching" && r.loaded !== void 0 && {
        loaded: r.loaded
      }
    });
    return I(o, e, "enable_failed"), {
      kind: "off",
      reason: d(e)
    }
  }
  try {
    OP.set({
      stage: "enabled",
      folder: o
    }), Hye.set(WG(Hye.get() ?? [], [o])), G(), await T(o), await J(0);
    let e = yp()?.toolContext(new AbortController);
    eis(o, e?.storageV5);
    let r = await $Ot(),
      s = Ae(),
      l = r === "reloaded" && (f7r(s) || p7r(s)) ? {
        kind: "enabled",
        load: "kept-out",
        cause: ylo()
      } : {
        kind: "enabled",
        load: r
      };
    return await X(o, r), g("plugin_dev_mods", {
      enabled: !0
    }), l
  } catch (e) {
    return {
      kind: "enabled",
      load: I(o, e, "enable_failed")
    }
  }
}

function Ho(o, e) {
  switch (e.load) {
    case "reloaded":
      return `The person enabled mod hot-reloading for this session and the mods under ${o} loaded: they load and reload by themselves as their files change; the transcript names any mod that failed.`;
    case "held":
      return `The person enabled mod hot-reloading for this session, but the mods under ${o} wait for /reload-plugins (the load would rewrite the prompt cache): they are NOT loaded yet.`;
    case "kept-out":
      return `The person enabled mod hot-reloading for this session, but the hooks modules of the mods under ${o} had NOT loaded when this notice was written. They count as a person's hooks modules, not an organization's. The reason: ${e.cause}. You get no further notice about them, so do not say they are running, and /reload-plugins does not load them sooner. A mod with no hooks module did load.`;
    case "unbound":
      return `The person enabled mod hot-reloading for this session, but the mods under ${o} did not load (this session cannot reload its plugins; only a restart loads them).`;
    case "failed":
      return `The person enabled mod hot-reloading for this session, but the mods under ${o} did not load (the load failed; the transcript says why, and /reload-plugins tries again).`
  }
}

function Wo(o, e) {
  switch (e.kind) {
    case "enabled":
      return Ho(o, e);
    case "declined":
      return `The person declined mod hot-reloading: what this run wrote under ${o} is written but NOT loaded (a mod that loaded when the session started keeps running as it loaded). Do not say the change is running. It loads the next time this session starts (/reload-plugins reloads only a mod that loaded at the start); the person can ask again.`;
    case "unanswered":
      return `The person has not answered the mod hot-reloading question yet; it is asked again once a turn ends. What this run wrote under ${o} is written but NOT loaded yet. Do not say it was declined, and do not suggest --plugin-dir or a restart.`;
    case "off":
      return `Mod hot-reloading is off in this session (${e.reason}): mods under ${o} are not loaded.`
  }
}
var lo = (o, e) => Pro(Wo(o, e));
var oo = {
  kind: "unanswered"
};

function M(o, e, r = "wake") {
  let s = e.kind === "enabled",
    n = s && r === "wake";
  if (s) Oy((l) => l.value === lo(o, oo));
  ll({
    agentId: st(),
    value: lo(o, e),
    mode: "task-notification",
    skipAttachments: !0,
    isMeta: xro,
    ...!n && {
      passive: !0
    },
    priority: "next"
  })
}
var __n = "nobody could be asked";

function eo(o) {
  if (AQo.get() === o) return;
  AQo.set(o), M(o, {
    kind: "off",
    reason: __n
  })
}
var Fo = "the question got no pick three times";
var Uo = {
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

function $o(o, e) {
  switch (o) {
    case "enabled":
      return;
    case "refused":
      if (e === void 0) return;
      return {
        kind: "off", reason: Uo[e]
      };
    case "no_one_to_ask":
      return {
        kind: "off", reason: __n
      };
    case "no_pick":
      return {
        kind: "off", reason: Fo
      }
  }
}

function Ko(o, e) {
  let r = $o(e, w());
  if (e === "no_one_to_ask") eo(o);
  else if (r !== void 0) M(o, r)
}

function jo(o, e) {
  let r = nC.watch(o, {
      persistent: !0,
      ignoreInitial: !0,
      followSymlinks: !1,
      ignorePermissionErrors: !0,
      ignored: Pns(o, p7(), () => !1),
      usePolling: !0,
      interval: FRn,
      binaryInterval: FRn
    }),
    s = () => e();
  return r.on("add", s), r.on("addDir", s), r.on("change", s), r.on("unlink", s), r.on("unlinkDir", s), r.on("error", (n) => t(`dev mods: the watch on ${o}: ${d(n)}`, {
    level: "warn"
  })), {
    close: () => r.close()
  }
}
async function S() {
  try {
    let o = OP.get();
    if (o?.stage !== "wanted") return;
    if (w() !== void 0) return;
    if (!Y()) {
      if (c("plugin_dev_mods", "no_one_to_ask"), OP.set({
          stage: "off",
          folder: o.folder
        }), o.loaded === void 0) eo(o.folder);
      return
    }
    await or(o.folder, {
      recursive: !0
    });
    let e = OP.get();
    if (e?.stage !== "wanted") return;
    let {
      folder: r,
      loaded: s
    } = e, n = {}, l = Po(r, {
      watchRoot: jo,
      loaded: s ?? [],
      listChildren: Lro,
      refusal: P,
      ask: async (i, u) => {
        let p = await Ro(i, u);
        if (p !== "no_one_to_ask" && p !== "retry") AQo.set(void 0);
        if (p === "decline") M(i, {
          kind: "declined"
        });
        return p
      },
      enable: async (i, u) => M(i, await Z(i), u()),
      deferred: () => wq(K8e, Co),
      unanswered: () => M(r, oo),
      stopped: (i) => {
        n.release?.(), Lo(r, i), Ko(r, i)
      },
      clock: Dro,
      turn: Yfr,
      quietMs: To
    });
    OP.set({
      stage: "watching",
      folder: r,
      watch: l,
      ...s !== void 0 && {
        loaded: s
      }
    }), n.release = vt(() => l.dispose())
  } catch (o) {
    t(`dev mods: the watch did not start: ${d(o)}`, {
      level: "error"
    })
  }
}
import {
  readdirSync as sr
} from "fs";
import {
  join as nr
} from "path";
import {
  statSync as rr
} from "fs";

function Bo(o) {
  try {
    return rr(o, {
      throwIfNoEntry: !1
    })?.isFile() === !0
  } catch (e) {
    if (qt(e)) return !1;
    throw e
  }
}

function Vo(o) {
  try {
    return sr(o, {
      withFileTypes: !0
    }).filter((e) => (e.isDirectory() || e.isSymbolicLink()) && klr(e.name)).map((e) => e.name).filter((e) => Bo(nr(o, e, Nm))).toSorted()
  } catch (e) {
    if (qt(e)) return;
    throw e
  }
}
async function Qo(o) {
  try {
    let e = Vo(o);
    if (e === void 0 || e.length === 0) {
      let r = e !== void 0 && Y();
      OP.set(r ? {
        stage: "wanted",
        folder: o,
        loaded: e
      } : void 0), await S();
      return
    }
    OP.set({
      stage: "wanted",
      folder: o,
      loaded: e
    }), qJt.set(WG(qJt.get() ?? [], [o])), await $ge.get()?.joinPluginDir(o), G(), await T(o), await J(0), await X(o, await $Ot()), g("plugin_dev_mods", {
      loaded_at_start: !0
    }), await S()
  } catch (e) {
    let r = OP.get();
    if ((r?.stage === "wanted" || r?.stage === "present") && r.folder === o) OP.set({
      stage: "wanted",
      folder: o
    }), S();
    I(o, e, "load_failed")
  }
}

function E() {
  try {
    let o = OP.get();
    switch (o?.stage) {
      case "consented":
        if (w() === void 0) Z(o.folder);
        return;
      case "present":
        if (w() === void 0) Qo(o.folder);
        return;
      case "wanted":
        S();
        return;
      case "enabled":
        T(o.folder);
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
async function Yo() {
  let o = OP.get(),
    e = O(z());
  try {
    if (o?.stage === "watching" && o.folder !== e) await o.watch.dispose();
    let r = OP.get(),
      s = r !== void 0 && r.folder !== e,
      n = r === void 0 || r.stage === "off" || r.stage === "watching" && r.watch.isClosed();
    if (s || n) OP.set({
      stage: "wanted",
      folder: e
    });
    if (Vyr.set(E), P() === void 0) await S()
  } catch (r) {
    t(`dev mods: handing out ${e} started nothing: ${d(r)}`, {
      level: "error"
    })
  }
  return e
}
var fr = "${CLAUDE_DEV_MODS_DIR}";
async function S2o(o, e) {
  let {
    DEV_MODS_PLACEHOLDER: r
  } = H;
  if (!o.includes(r)) return o;
  let s = e.isPreload ? O(z()) : await Yo();
  return o.replaceAll(r, s)
}

function qo() {
  let o = O(z()),
    e = OP.get();
  if (e !== void 0 && e.folder === o && e.stage !== "off") return;
  if (e?.stage === "watching") e.watch.dispose().catch((s) => t(`dev mods: the watch did not close: ${d(s)}`));
  OP.set({
    stage: "present",
    folder: o
  }), Vyr.set(E), E()
}
import {
  mkdirSync as cr
} from "fs";

function $qr() {
  Zhi.set(S2o);
  try {
    let o = tis(),
      e = OP.get();
    if (!(o !== void 0 && G6t(o, z()) && !(e?.stage === "enabled" && e.folder === o))) {
      qo();
      return
    }
    if (e?.stage === "watching") e.watch.dispose().catch((s) => t(`dev mods: the watch did not close: ${d(s)}`));
    if (OP.set({
        stage: "consented",
        folder: o
      }), Vyr.set(E), P() === void 0) cr(o, {
      recursive: !0
    }), E()
  } catch (o) {
    t(`dev mods: the restore failed: ${d(o)}`, {
      level: "error"
    })
  }
}
export {
  Hqr,
  __n,
  S2o,
  $qr
};
