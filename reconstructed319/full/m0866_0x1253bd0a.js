// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  lne,
  ZVn
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  f
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  qe,
  d
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  or,
  yS,
  bl,
  jb
} from "B:/~BUN/root/chunk-h4acfc9y.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  g,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  E4,
  v,
  Le,
  fe
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  t,
  u$e,
  ZS
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  YU,
  Ute
} from "B:/~BUN/root/chunk-1g25msn4.js";
import {
  pa,
  x_
} from "B:/~BUN/root/chunk-bkfncj77.js";
import {
  yt,
  tl
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  Se
} from "B:/~BUN/root/chunk-x24hm796.js";
import {
  tN
} from "B:/~BUN/root/chunk-trd3c21n.js";
import {
  Ehr,
  NXt,
  FXt,
  Kd
} from "B:/~BUN/root/chunk-p2ta953m.js";
import {
  GXe,
  IS
} from "B:/~BUN/root/chunk-98qgaht2.js";
import {
  KT
} from "B:/~BUN/root/chunk-fc7k1zas.js";
import {
  Nf
} from "B:/~BUN/root/chunk-cvm7zk4p.js";
import {
  Gr
} from "B:/~BUN/root/chunk-tmdrwqnv.js";
import {
  Cle,
  g8
} from "B:/~BUN/root/chunk-gghehvvc.js";
import {
  O,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
j();

function h6n() {
  let e = Gr(),
    r = Nf();
  O(() => {
    return
  }, [e, r])
}
var r3s = {
  CLAUDE_CODE_TUI_TRIAL: "fullscreen"
};

function b(e, r) {
  Le((n) => (n.fullscreenUpsellSeenCount ?? 0) >= e ? n : {
    ...n,
    fullscreenUpsellSeenCount: e
  }, r)
}

function R1r(e) {
  b(FXt, e)
}

function DLo(e) {
  let r = Ehr();
  if (r.upsellImpression !== void 0) return r.upsellImpression;
  let n = Math.min((fe().fullscreenUpsellSeenCount ?? 0) + 1, FXt);
  return r.upsellImpression = n, b(n, e), n
}
async function o3s(e) {
  let r = Ehr();
  if (r.persisted || NXt() !== "fullscreen") return !1;
  if (yt().tui !== void 0) return t("fullscreen trial: settings.tui was set explicitly during the trial \u2014 not persisting"), !1;
  if (!Kd()) return t("fullscreen trial: renderer is not fullscreen this session (auto-off) \u2014 not persisting"), !1;
  let n = !1,
    {
      error: o
    } = await tl("userSettings", (i) => (n = i?.tui !== void 0, n ? null : {
      tui: "fullscreen"
    }), void 0, e);
  if (o) return a(o), c("tui_fullscreen_upsell_trial", "settings_write_failed"), !1;
  if (n) return t("fullscreen trial: settings.tui was set explicitly during the trial (seen inside the queued write) \u2014 not persisting"), !1;
  return R1r(e), r.persisted = !0, g("tui_fullscreen_upsell_trial"), l("tengu_fullscreen_upsell_trial_persisted", {
    session_age_ms: Math.round(process.uptime() * 1000)
  }), t("fullscreen trial: healthy \u2014 persisted settings.tui=fullscreen"), !0
}
async function s3s(e) {
  let r = tN();
  if (!r?.teamName || !r?.agentName) {
    t("[Reconnection] computeInitialTeamContext: No teammate context set (not a teammate)");
    return
  }
  let {
    teamName: n,
    agentId: o,
    agentName: i
  } = r, u = await IS(n, e);
  if (!u) {
    a(qe(Error(`[computeInitialTeamContext] Could not read team file for ${n}`), "[computeInitialTeamContext] Could not read team file"));
    return
  }
  let s = GXe(n),
    m = !o;
  return t(`[Reconnection] Computed initial team context for ${m?"leader":`teammate ${i}`} in team ${n}`), {
    teamName: n,
    teamFilePath: s,
    leadAgentId: u.leadAgentId,
    selfAgentId: o,
    selfAgentName: i,
    isLeader: m,
    teammates: {}
  }
}
async function i3s(e, r, n, o) {
  let i = await IS(r, o);
  if (!i) {
    t(`[initializeTeammateContextFromSession] Could not read team file for ${r} (agent: ${n}) \u2014 team may have been disbanded`, {
      level: "error"
    });
    return
  }
  let u = i.members.find((h) => h.name === n);
  if (!u) t(`[Reconnection] Member ${n} not found in team ${r} - may have been removed`);
  let s = u?.agentId,
    m = GXe(r);
  e((h) => ({
    ...h,
    teamContext: {
      teamName: r,
      teamFilePath: m,
      leadAgentId: i.leadAgentId,
      selfAgentId: s,
      selfAgentName: n,
      isLeader: !1,
      teammates: {}
    }
  })), t(`[Reconnection] Initialized agent context from session for ${n} in team ${r}`)
}
import {
  stat as k
} from "fs/promises";
import {
  homedir as C
} from "os";
import {
  join as y,
  sep as x
} from "path";
var E = 604800000,
  NLo = 1000;

function a3s(e) {
  let r = [`This session was opened by an external deep link in ${w(e.cwd)}`];
  if (e.repo) {
    let n = e.lastFetch ? x_(e.lastFetch) : "never",
      o = !e.lastFetch || Date.now() - e.lastFetch.getTime() > E;
    r.push(`Resolved ${e.repo} from local clones \xB7 last fetched ${n}${o?" \u2014 CLAUDE.md may be stale":""}`)
  }
  if (e.prefillLength) r.push(e.prefillLength > NLo ? `The prompt below (${pa(e.prefillLength)} chars) was supplied by the link \u2014 scroll to review the entire prompt before pressing Enter.` : "The prompt below was supplied by the link \u2014 review carefully before pressing Enter.");
  return r.join(`
`)
}
async function l3s(e) {
  let r = await Ute(e);
  if (!r) return;
  let n = await YU(r),
    [o, i] = await Promise.all([_(y(r, "FETCH_HEAD")), n ? _(y(n, "FETCH_HEAD")) : Promise.resolve(void 0)]);
  if (o && i) return o > i ? o : i;
  return o ?? i
}
async function _(e) {
  try {
    let {
      mtime: r
    } = await k(e);
    return r
  } catch {
    return
  }
}

function w(e) {
  let r = C();
  if (e === r) return "~";
  if (e.startsWith(r + x)) return "~" + e.slice(r.length);
  return e
}

function tpn(e, {
  replacesProcess: r
}) {
  return E4() === void 0 && KT() && !(r && ZVn()) && v("tengu_resume_open_live_bg", !0) ? e.jobId : void 0
}
async function A1r(e) {
  let r = await L(e);
  return c("resume_live_background_open", r.reason, {
    entrypoint: f(e.entrypoint)
  }), r
}
async function L({
  holder: e,
  entrypoint: r,
  prompt: n,
  storageV5: o
}) {
  if (!process.stdin.isTTY || !process.stdout.isTTY) return {
    reason: "not_openable"
  };
  let i = tpn(e, {
    replacesProcess: !0
  });
  if (i === void 0) return {
    reason: "not_openable"
  };
  try {
    await Cle()
  } catch (s) {
    return {
      reason: "open_failed",
      detail: d(s),
      promptSent: !1
    }
  }
  let u = typeof n === "string" && n.trim() !== "";
  if (u) {
    let s = n.trimStart();
    if (s.startsWith("!") || s.startsWith("/")) return {
      reason: "prompt_undelivered",
      detail: `a prompt starting with ${s.startsWith("!")?"!":"/"} would run as a command there`,
      delivery: "failed"
    };
    let [{
      replyToJob: m
    }, {
      getJobDir: h,
      readJobState: F
    }] = await Promise.all([import("B:/~BUN/root/chunk-62tn299a.js"), import("B:/~BUN/root/chunk-9a7qj1t6.js")]);
    if ((await F(h(i), o))?.block !== void 0) return {
      reason: "prompt_undelivered",
      detail: "it is waiting on your answer to a question",
      delivery: "failed"
    };
    process.stdout.write(Se.dim(`Sending your prompt to the background session (${i})\u2026
`));
    let p = await m(i, n, void 0, void 0, void 0, o, {
      nextTurn: !0
    });
    if (p) {
      let S = p.code === "ENOCONN" || p.code === "ETIMEOUT";
      return {
        reason: "prompt_undelivered",
        detail: S ? "its supervisor did not answer" : p.code === "ENOJOB" ? "it is no longer running" : p.err,
        delivery: p.queued === !0 ? "queued" : S ? "unconfirmed" : "failed"
      }
    }
  }
  try {
    return await LLo(i, r, o, {
      promptSent: u
    })
  } catch (s) {
    return {
      reason: "open_failed",
      detail: d(s),
      promptSent: u
    }
  }
}
async function LLo(e, r, n, {
  promptSent: o = !1
} = {}) {
  return g("resume_live_background_open", {
    entrypoint: f(r),
    prompt_sent: o
  }), g8({
    args: ["attach", e],
    preSpawn: () => process.stdout.write(Se.dim(o ? `Sent your prompt to the background session (${e}); opening it\u2026
` : `Opening the background session (${e})\u2026
`))
  }, n)
}
import {
  isAbsolute as R,
  resolve as A,
  win32 as T
} from "path";
async function g6n(e, r, n = ZS) {
  if (!(R(e) || T.isAbsolute(e)) || or(e) || yS(e) || yS(T.normalize(e)) || jb(e) || jb(A(e)) || bl(e)) return t(`[${r}] session reported a network-path cwd \u2014 not adopting`, {
    level: "warn"
  }), !1;
  if (await u$e(e, lne(), n)) return t(`[${r}] session-reported cwd's local ancestry could not be verified as network-free \u2014 not adopting`, {
    level: "warn"
  }), !1;
  return !0
}
export {
  h6n,
  r3s,
  R1r,
  DLo,
  o3s,
  tpn,
  A1r,
  LLo,
  s3s,
  i3s,
  g6n,
  NLo,
  a3s,
  l3s
};
