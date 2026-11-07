// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { z, st, ye, q as isRefused } from "B:/~BUN/root/chunk-game8aqv.js";
import { b, f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { d, qt } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { J } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { mC } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Zr as isRefused_5 } from "B:/~BUN/root/chunk-eev762xg.js";
import { vt, t, p7 } from "B:/~BUN/root/chunk-2pp12te6.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { be } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { Ae } from "B:/~BUN/root/chunk-eds8xkh8.js";
import { Tse as isRefused_4, $m as isRefused_2 } from "B:/~BUN/root/chunk-79dw4seg.js";
import { ur } from "B:/~BUN/root/chunk-y5gyn2hc.js";
import { Kue, Jq as isRefused_3 } from "B:/~BUN/root/chunk-esnm3r09.js";
import { L8 } from "B:/~BUN/root/chunk-fnfdeqaa.js";
import { cs as name } from "B:/~BUN/root/chunk-kfm993xq.js";
import { G6t, OP, Zhi, egi, AQo, klr, f7r, p7r, yp, bdr, $ge, Eto, Ans, Pns, FRn, xro as isMeta, Pro, rEi, Dro as clock, Lro as listChildren, $Ot, Yfr as turn, sEi, Nro, K8e, ki, eis, tis, el, Ie, ll, Oy } from "B:/~BUN/root/chunk-27h4st9h.js";
import { nC } from "B:/~BUN/root/chunk-eswth6m1.js";
import { Vyr, Hye, qJt, wq, kq } from "B:/~BUN/root/chunk-0s00dkj6.js";
import { Nm } from "B:/~BUN/root/chunk-63btkzab.js";
import { Zw } from "B:/~BUN/root/chunk-sa4785jr.js";
import { ylo } from "B:/~BUN/root/chunk-ybkgfvgz.js";
import { Kat, uge } from "B:/~BUN/root/chunk-p8dmgxyc.js";
import { WG } from "B:/~BUN/root/chunk-0aj3426j.js";
import { hse } from "B:/~BUN/root/chunk-dzjj3jwh.js";
import { Rr } from "B:/~BUN/root/chunk-4qfwb3rf.js";
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
      return xo[o.reason];
  }
}
var vo = o => o === "now" ? "now" : "when this turn ends";
var wo = o => `They'll load ${vo(o)}, and they'll reload whenever they change. A mod is code, and it runs with the same access you have here.`;
var choices = [{
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
  return ["A mod is a small program that changes how Claude looks or behaves here.", "Claude wrote these mods, and they run with the same access you have.", e ? "If you turn them on, they'll load now and reload whenever they change." : "Once they're on, they load when this turn ends and reload when they change.", "That lasts for the rest of this session, even if it restarts.", "If you choose Not now, nothing new will load until this session next starts.", ...(r ? ["You can see what's loaded, and turn it off, with /plugin."] : [])].join(`
`);
}
var header = "Mods";
var question = "Turn on the mods Claude writes in this session?";
var de = o => `${question}

${wo(o)}`;
var source = "mod_hot_reload";
var me = o => `${question}

${Do(o)}`;
function ko(id, e) {
  let questions = [{
      question: question,
      header: header,
      options: choices.filter(item => item.value !== "explain").map(item => ({
        label: item.label,
        description: ""
      })),
      multiSelect: !1
    }],
    toolUseResult = {
      questions: questions,
      answers: {
        [question]: e
      }
    },
    n = el({
      content: [{
        type: "tool_use",
        id: id,
        name: name,
        input: {
          questions: questions
        }
      }],
      isVirtual: !0
    }),
    l = Ie({
      content: [L8.mapToolResultToToolResultBlockParam(toolUseResult, id)],
      toolUseResult: toolUseResult,
      isVirtual: !0
    });
  return [{
    ...n,
    message: {
      ...n.message,
      stop_reason: "tool_use"
    }
  }, l];
}
var quietMs = 2000;
var Mo = "Not turned on.";
function mo(o, e) {
  if (bo(() => {
    let r = yp(),
      s = o.kind === "chose" ? choices.find(item => item.value === o.value)?.label : void 0,
      n = o.kind === "declined" ? o.typedAnswer : s;
    if (n !== void 0) r?.sendDisplayRows?.(ko(e, n));
    if (s !== void 0 && r?.surface === "terminal") wq(K8e, `${question} \u2192 ${s}`);
  }), o.kind === "declined") bo(() => wq(K8e, Mo));
}
function bo(o) {
  try {
    o();
  } catch (error) {
    c("plugin_dev_mods", "answer_not_shown"), a(error);
  }
}
var So = 3;
async function fo(o, e) {
  let r = turn.isRunning() ? "turn-end" : "now",
    question_2 = e === 0 ? de(r) : me(r),
    l = {
      id: ""
    },
    i = await uge({
      canUseTool: (...y) => (l.id = y[4], o.binding.canUseTool(...y)),
      toolUseContext: o.binding.toolContext(o.abortController),
      source: source,
      header: header,
      question: question_2,
      choices: choices,
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
  }, l.id), "decline";
}
var Eo = {
  no_one_to_ask: "no_one_to_ask",
  closed: "host_closed",
  unpicked: "no_selection"
};
async function Ro(folder, e) {
  let binding = yp();
  if (binding === void 0) return c("plugin_dev_mods", "no_session"), "no_one_to_ask";
  let abortController = new AbortController();
  e?.addEventListener("abort", () => abortController.abort(), {
    once: !0
  });
  try {
    let n = await fo({
        binding: binding,
        folder: folder,
        abortController: abortController
      }, 0),
      l = Eo[n];
    return l === void 0 ? g("plugin_dev_mods", {
      answer: f(n)
    }) : c("plugin_dev_mods", l), n;
  } catch (error) {
    return t(`dev mods: the ask failed, asked again later: ${d(error)}`, {
      level: "error"
    }), "retry";
  }
}
function Y() {
  let o = yp();
  if (o === void 0) return !0;
  try {
    return Kat(o.toolContext(new AbortController()));
  } catch (error) {
    return t(`dev mods: no context to ask in yet: ${d(error)}`, {
      level: "error"
    }), !0;
  }
}
import { join as we } from "path";
var O = o => we(hse(), o);
var Ao = [{
  refusal: "diskless",
  isRefused: isRefused
}, {
  refusal: "hooks_modules_off",
  isRefused: () => !Zw()
}, {
  refusal: "all_hooks_disabled",
  isRefused: isRefused_2
}, {
  refusal: "sideload_disabled",
  isRefused: isRefused_3
}, {
  refusal: "local_dirs_blocked",
  isRefused: () => !Kue()
}, {
  refusal: "managed_hooks_only",
  isRefused: () => be("policySettings")?.allowManagedHooksOnly === !0
}, {
  refusal: "hooks_disabled_in_settings",
  isRefused: isRefused_4
}, {
  refusal: "safe_mode",
  isRefused: isRefused_5
}, {
  refusal: "bare_mode",
  isRefused: () => ur("hooks")
}, {
  refusal: "untrusted",
  isRefused: () => !mC()
}];
function w() {
  return Ao.find(item => item.isRefused())?.refusal;
}
function refusal() {
  let o = w();
  if (o !== void 0) c("plugin_dev_mods", o), t(`dev mods: mod hot-reloading is off here (${o})`);
  return o;
}
import { mkdir as or } from "fs/promises";
var Oo = 3;
function Po(o, e) {
  let r = new Set(),
    s = new Set(e.loaded),
    n = !1,
    l = !1,
    i = !1,
    u,
    p = 0,
    NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY,
    _ = !1,
    W = 0,
    F = !1,
    U = !1,
    C = !1,
    ro = !1,
    k = !1,
    K,
    zo = e.watchRoot(o, () => {
      n = !0, uo();
    }),
    Go = e.turn.onBegin(() => {
      if (p += 1, F = e.turn.isPersonTurn(), U && F) W -= 1;
      U = !1;
    }),
    Xo = e.turn.onEnd(h => void to(() => Jo(h ? "wait" : "wake")));
  function po() {
    K?.(), K = void 0;
  }
  function uo() {
    if (k || l) return;
    if (po(), e.turn.isRunning()) {
      to(j);
      return;
    }
    K = e.clock.setTimeout(() => void to(j), e.quietMs);
  }
  async function to(h) {
    try {
      await h();
    } catch (error) {
      t(`dev mods: the watch on ${o} failed: ${d(error)}`, {
        level: "error"
      });
    }
  }
  async function Jo(h) {
    if (i) {
      i = !1;
      for (let x of (await e.listChildren(o)) ?? []) r.add(x);
    }
    if (l) {
      await co(h);
      return;
    }
    if (_) _ = !1, await j();
  }
  async function co(h) {
    if (k) return;
    if (e.refusal()) {
      await dispose(), e.stopped("refused");
      return;
    }
    let x = h,
      so = e.turn.onBegin(() => {
        x = "wait";
      }),
      B = e.turn.onEnd(L => {
        x = L ? "wait" : "wake";
      });
    try {
      await Promise.all([dispose(), e.enable(o, () => x)]);
    } finally {
      so(), B();
    }
    e.stopped("enabled");
  }
  async function j() {
    K = void 0;
    let h = e.turn.isRunning() && n && NEGATIVE_INFINITY === Number.NEGATIVE_INFINITY,
      x = k || l,
      so = e.turn.isRunning() && !h;
    if (x || ro || so || NEGATIVE_INFINITY === p) {
      _ = !x;
      return;
    }
    ro = !0;
    let B = !1;
    try {
      let L = h ? [] : ((await e.listChildren(o)) ?? []).filter(item => !r.has(item)),
        Zo = h || L.length > 0 && (n || L.some(item => !s.has(item)));
      if (k || !Zo) return;
      if (e.turn.isRunning() && !h) {
        _ = !0;
        return;
      }
      if (e.refusal()) {
        await dispose(), e.stopped("refused");
        return;
      }
      NEGATIVE_INFINITY = p, F = !1, U = !1;
      let abortController_2 = new AbortController();
      u = abortController_2;
      let no = await e.ask(o, abortController_2.signal).finally(() => {
        u = void 0;
      });
      if (k) return;
      switch (no) {
        case "enable":
          if (e.turn.isRunning() && !e.refusal()) {
            l = !0, e.deferred();
            return;
          }
          await co("wake");
          return;
        case "decline":
          {
            C = !1, W = 0, i = e.turn.isRunning();
            let N = await e.listChildren(o);
            for (let oe of [...L, ...(N ?? [])]) r.add(oe);
            return;
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
            await dispose(), e.stopped("no_pick");
            return;
          }
          if (no === "unpicked") {
            NEGATIVE_INFINITY = e.turn.isRunning() ? p - 1 : p, _ = !0;
            return;
          }
          NEGATIVE_INFINITY = p - 1, B = !0;
          break;
        case "no_one_to_ask":
          await dispose(), e.stopped("no_one_to_ask");
          return;
      }
    } finally {
      ro = !1;
    }
    if (B) await j();
  }
  async function dispose() {
    if (k) return;
    k = !0, _ = !1, po(), u?.abort(), Go(), Xo(), await zo.close();
  }
  return uo(), {
    declined: () => [...r],
    isClosed: () => k,
    dispose: dispose
  };
}
var Co = "They'll load when this turn ends.";
function Lo(folder_2, e) {
  let r = OP.get();
  if (r?.stage !== "watching" || r.folder !== folder_2) return;
  switch (e) {
    case "refused":
      OP.set({
        stage: "wanted",
        folder: folder_2,
        ...(r.loaded !== void 0 && {
          loaded: r.loaded
        })
      });
      return;
    case "no_one_to_ask":
    case "no_pick":
      OP.set({
        stage: "off",
        folder: folder_2
      });
      return;
    case "enabled":
      return;
  }
}
import { utimes as Pe } from "fs/promises";
async function T(o) {
  let date = new Date();
  await Pe(o, date, date).catch(r => t(`dev mods: ${o} keeps its old time: ${d(r)}`));
}
function G() {
  if (egi.get() !== void 0) return;
  egi.set(turn.onEnd(() => {
    try {
      for (let o of [...(Hye.get() ?? []), ...(qJt.get() ?? [])]) T(o);
    } catch (error) {
      t(`dev mods: the turn-end refresh failed: ${d(error)}`, {
        level: "error"
      });
    }
  }));
}
import { basename as Ne } from "path";
function I(o, e, r) {
  let s = r === "enable_failed" ? "enabling" : "loading";
  if (r === "enable_failed") wq(K8e, sEi(d(e)));else kq(K8e, Eto(Ne(o), e));
  return m("plugin_dev_mods", r), t(`dev mods: ${s} ${o} failed: ${d(e)}`, {
    level: "error"
  }), "failed";
}
function No(root, outcome, r) {
  return {
    root: root,
    before: new Map(),
    after: r.after,
    present: r.present,
    unserved: r.unserved,
    outcome: outcome
  };
}
async function Io(o, e, r) {
  let present = (await listChildren(o)) ?? [],
    l = e === "reloaded" ? await ki(r.storageV5, r.credentials) : {
      enabled: [],
      disabled: []
    },
    [i] = rEi([...l.enabled, ...l.disabled], [o]);
  for (let u of Ans(No(o, e, {
    present: present,
    after: i?.loaded ?? new Map(),
    unserved: i?.unserved ?? new Set()
  }), Nro, p => bdr.get()?.isUnloaded(p) ?? !1)) wq(u.plugin, u.text);
}
async function X(o, e) {
  let r = yp()?.toolContext(new AbortController());
  await Io(o, e, {
    storageV5: r?.storageV5,
    credentials: r?.credentials
  }).catch(s => t(`dev mods: the lines for ${o} were not told: ${d(s)}`, {
    level: "error"
  }));
}
async function Z(folder_3) {
  try {
    await $ge.get()?.joinPluginDir(folder_3);
  } catch (error) {
    let r = OP.get();
    if ((r?.stage === "watching" || r?.stage === "consented") && r.folder === folder_3) OP.set({
      stage: "wanted",
      folder: folder_3,
      ...(r.stage === "watching" && r.loaded !== void 0 && {
        loaded: r.loaded
      })
    });
    return I(folder_3, error, "enable_failed"), {
      kind: "off",
      reason: d(error)
    };
  }
  try {
    OP.set({
      stage: "enabled",
      folder: folder_3
    }), Hye.set(WG(Hye.get() ?? [], [folder_3])), G(), await T(folder_3), await J(0);
    let e = yp()?.toolContext(new AbortController());
    eis(folder_3, e?.storageV5);
    let load = await $Ot(),
      s = Ae(),
      l = load === "reloaded" && (f7r(s) || p7r(s)) ? {
        kind: "enabled",
        load: "kept-out",
        cause: ylo()
      } : {
        kind: "enabled",
        load: load
      };
    return await X(folder_3, load), g("plugin_dev_mods", {
      enabled: !0
    }), l;
  } catch (error) {
    return {
      kind: "enabled",
      load: I(folder_3, error, "enable_failed")
    };
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
      return `The person enabled mod hot-reloading for this session, but the mods under ${o} did not load (the load failed; the transcript says why, and /reload-plugins tries again).`;
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
      return `Mod hot-reloading is off in this session (${e.reason}): mods under ${o} are not loaded.`;
  }
}
var lo = (o, e) => Pro(Wo(o, e));
var oo = {
  kind: "unanswered"
};
function M(o, e, r = "wake") {
  let s = e.kind === "enabled",
    n = s && r === "wake";
  if (s) Oy(l => l.value === lo(o, oo));
  ll({
    agentId: st(),
    value: lo(o, e),
    mode: "task-notification",
    skipAttachments: !0,
    isMeta: isMeta,
    ...(!n && {
      passive: !0
    }),
    priority: "next"
  });
}
var reason = "nobody could be asked";
function eo(o) {
  if (AQo.get() === o) return;
  AQo.set(o), M(o, {
    kind: "off",
    reason: reason
  });
}
var reason_2 = "the question got no pick three times";
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
        kind: "off",
        reason: Uo[e]
      };
    case "no_one_to_ask":
      return {
        kind: "off",
        reason: reason
      };
    case "no_pick":
      return {
        kind: "off",
        reason: reason_2
      };
  }
}
function Ko(o, e) {
  let r = $o(e, w());
  if (e === "no_one_to_ask") eo(o);else if (r !== void 0) M(o, r);
}
function watchRoot(o, e) {
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
  return r.on("add", s), r.on("addDir", s), r.on("change", s), r.on("unlink", s), r.on("unlinkDir", s), r.on("error", n => t(`dev mods: the watch on ${o}: ${d(n)}`, {
    level: "warn"
  })), {
    close: () => r.close()
  };
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
      return;
    }
    await or(o.folder, {
      recursive: !0
    });
    let e = OP.get();
    if (e?.stage !== "wanted") return;
    let {
        folder: folder_4,
        loaded: loaded
      } = e,
      n = {},
      watch = Po(folder_4, {
        watchRoot: watchRoot,
        loaded: loaded ?? [],
        listChildren: listChildren,
        refusal: refusal,
        ask: async (i, u) => {
          let p = await Ro(i, u);
          if (p !== "no_one_to_ask" && p !== "retry") AQo.set(void 0);
          if (p === "decline") M(i, {
            kind: "declined"
          });
          return p;
        },
        enable: async (i, u) => M(i, await Z(i), u()),
        deferred: () => wq(K8e, Co),
        unanswered: () => M(folder_4, oo),
        stopped: i => {
          n.release?.(), Lo(folder_4, i), Ko(folder_4, i);
        },
        clock: clock,
        turn: turn,
        quietMs: quietMs
      });
    OP.set({
      stage: "watching",
      folder: folder_4,
      watch: watch,
      ...(loaded !== void 0 && {
        loaded: loaded
      })
    }), n.release = vt(() => watch.dispose());
  } catch (error) {
    t(`dev mods: the watch did not start: ${d(error)}`, {
      level: "error"
    });
  }
}
import { readdirSync as sr } from "fs";
import { join as nr } from "path";
import { statSync as rr } from "fs";
function Bo(o) {
  try {
    return rr(o, {
      throwIfNoEntry: !1
    })?.isFile() === !0;
  } catch (error) {
    if (qt(error)) return !1;
    throw error;
  }
}
function Vo(o) {
  try {
    return sr(o, {
      withFileTypes: !0
    }).filter(item => (item.isDirectory() || item.isSymbolicLink()) && klr(item.name)).map(item => item.name).filter(item => Bo(nr(o, item, Nm))).toSorted();
  } catch (error) {
    if (qt(error)) return;
    throw error;
  }
}
async function Qo(folder_5) {
  try {
    let loaded_2 = Vo(folder_5);
    if (loaded_2 === void 0 || loaded_2.length === 0) {
      let r = loaded_2 !== void 0 && Y();
      OP.set(r ? {
        stage: "wanted",
        folder: folder_5,
        loaded: loaded_2
      } : void 0), await S();
      return;
    }
    OP.set({
      stage: "wanted",
      folder: folder_5,
      loaded: loaded_2
    }), qJt.set(WG(qJt.get() ?? [], [folder_5])), await $ge.get()?.joinPluginDir(folder_5), G(), await T(folder_5), await J(0), await X(folder_5, await $Ot()), g("plugin_dev_mods", {
      loaded_at_start: !0
    }), await S();
  } catch (error) {
    let r = OP.get();
    if ((r?.stage === "wanted" || r?.stage === "present") && r.folder === folder_5) OP.set({
      stage: "wanted",
      folder: folder_5
    }), S();
    I(folder_5, error, "load_failed");
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
        return;
    }
  } catch (error) {
    t(`dev mods: the catch-up failed: ${d(error)}`, {
      level: "error"
    });
  }
}
async function Yo() {
  let o = OP.get(),
    folder_6 = O(z());
  try {
    if (o?.stage === "watching" && o.folder !== folder_6) await o.watch.dispose();
    let r = OP.get(),
      s = r !== void 0 && r.folder !== folder_6,
      n = r === void 0 || r.stage === "off" || r.stage === "watching" && r.watch.isClosed();
    if (s || n) OP.set({
      stage: "wanted",
      folder: folder_6
    });
    if (Vyr.set(E), refusal() === void 0) await S();
  } catch (error) {
    t(`dev mods: handing out ${folder_6} started nothing: ${d(error)}`, {
      level: "error"
    });
  }
  return folder_6;
}
var fr = "${CLAUDE_DEV_MODS_DIR}";
async function S2o(o, e) {
  let {
    DEV_MODS_PLACEHOLDER: DEV_MODS_PLACEHOLDER
  } = H;
  if (!o.includes(DEV_MODS_PLACEHOLDER)) return o;
  let s = e.isPreload ? O(z()) : await Yo();
  return o.replaceAll(DEV_MODS_PLACEHOLDER, s);
}
function qo() {
  let folder_7 = O(z()),
    e = OP.get();
  if (e !== void 0 && e.folder === folder_7 && e.stage !== "off") return;
  if (e?.stage === "watching") e.watch.dispose().catch(s => t(`dev mods: the watch did not close: ${d(s)}`));
  OP.set({
    stage: "present",
    folder: folder_7
  }), Vyr.set(E), E();
}
import { mkdirSync as cr } from "fs";
function $qr() {
  Zhi.set(S2o);
  try {
    let folder_8 = tis(),
      e = OP.get();
    if (!(folder_8 !== void 0 && G6t(folder_8, z()) && !(e?.stage === "enabled" && e.folder === folder_8))) {
      qo();
      return;
    }
    if (e?.stage === "watching") e.watch.dispose().catch(s => t(`dev mods: the watch did not close: ${d(s)}`));
    if (OP.set({
      stage: "consented",
      folder: folder_8
    }), Vyr.set(E), refusal() === void 0) cr(folder_8, {
      recursive: !0
    }), E();
  } catch (error) {
    t(`dev mods: the restore failed: ${d(error)}`, {
      level: "error"
    });
  }
}
export { source as Hqr, reason as __n, S2o, $qr };