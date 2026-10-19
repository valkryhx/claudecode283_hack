// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  J5,
  ugn
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  c
} from "B:/~BUN/root/chunk-jthpk6wv.js";
import {
  Ye,
  d
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  jn,
  r_,
  ul,
  Ry
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  i
} from "B:/~BUN/root/chunk-1kfn24jp.js";
import {
  g,
  p
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  LTe,
  W_,
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  cW,
  E,
  Ce,
  ue
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  DW,
  R5
} from "B:/~BUN/root/chunk-2zk4vqr8.js";
import {
  ei,
  mv
} from "B:/~BUN/root/chunk-pjgzz98k.js";
import {
  ut,
  ca
} from "B:/~BUN/root/chunk-1gpjpba6.js";
import {
  he
} from "B:/~BUN/root/chunk-4qqgabd5.js";
import {
  vW
} from "B:/~BUN/root/chunk-8v3gkznb.js";
import {
  I$n,
  CIt,
  RIt,
  sd
} from "B:/~BUN/root/chunk-j2ppas05.js";
import {
  Ov
} from "B:/~BUN/root/chunk-78zw0pmb.js";
import {
  EBe,
  Ub
} from "B:/~BUN/root/chunk-p7n9drc0.js";
import {
  Ou
} from "B:/~BUN/root/chunk-t70eh59h.js";
import {
  Ar
} from "B:/~BUN/root/chunk-tgzmva3g.js";
import {
  G_e,
  _7
} from "B:/~BUN/root/chunk-qvgd0dpp.js";
import {
  P,
  B
} from "B:/~BUN/root/chunk-5hr2ysa5.js";
B();

function ibn() {
  let e = Ar(),
    n = Ou();
  P(() => {
    return
  }, [e, n])
}
var a6o = {
  CLAUDE_CODE_TUI_TRIAL: "fullscreen"
};

function v(e, n) {
  Ce((r) => (r.fullscreenUpsellSeenCount ?? 0) >= e ? r : {
    ...r,
    fullscreenUpsellSeenCount: e
  }, n)
}

function AZn(e) {
  v(RIt, e)
}

function k2r(e) {
  let n = I$n();
  if (n.upsellImpression !== void 0) return n.upsellImpression;
  let r = Math.min((ue().fullscreenUpsellSeenCount ?? 0) + 1, RIt);
  return n.upsellImpression = r, v(r, e), r
}
async function l6o(e) {
  let n = I$n();
  if (n.persisted || CIt() !== "fullscreen") return !1;
  if (ut().tui !== void 0) return t("fullscreen trial: settings.tui was set explicitly during the trial \u2014 not persisting"), !1;
  if (!sd()) return t("fullscreen trial: renderer is not fullscreen this session (auto-off) \u2014 not persisting"), !1;
  let r = !1,
    {
      error: o
    } = await ca("userSettings", (s) => (r = s?.tui !== void 0, r ? null : {
      tui: "fullscreen"
    }), void 0, e);
  if (o) return l(o), p("tui_fullscreen_upsell_trial", "settings_write_failed"), !1;
  if (r) return t("fullscreen trial: settings.tui was set explicitly during the trial (seen inside the queued write) \u2014 not persisting"), !1;
  return AZn(e), n.persisted = !0, g("tui_fullscreen_upsell_trial"), i("tengu_fullscreen_upsell_trial_persisted", {
    session_age_ms: Math.round(process.uptime() * 1000)
  }), t("fullscreen trial: healthy \u2014 persisted settings.tui=fullscreen"), !0
}
async function d6o(e) {
  let n = vW();
  if (!n?.teamName || !n?.agentName) {
    t("[Reconnection] computeInitialTeamContext: No teammate context set (not a teammate)");
    return
  }
  let {
    teamName: r,
    agentId: o,
    agentName: s
  } = n, u = await Ub(r, e);
  if (!u) {
    l(Ye(Error(`[computeInitialTeamContext] Could not read team file for ${r}`), "[computeInitialTeamContext] Could not read team file"));
    return
  }
  let a = EBe(r),
    m = !o;
  return t(`[Reconnection] Computed initial team context for ${m?"leader":`teammate ${s}`} in team ${r}`), {
    teamName: r,
    teamFilePath: a,
    leadAgentId: u.leadAgentId,
    selfAgentId: o,
    selfAgentName: s,
    isLeader: m,
    teammates: {}
  }
}
async function c6o(e, n, r, o) {
  let s = await Ub(n, o);
  if (!s) {
    t(`[initializeTeammateContextFromSession] Could not read team file for ${n} (agent: ${r}) \u2014 team may have been disbanded`, {
      level: "error"
    });
    return
  }
  let u = s.members.find((b) => b.name === r);
  if (!u) t(`[Reconnection] Member ${r} not found in team ${n} - may have been removed`);
  let a = u?.agentId,
    m = EBe(n);
  e((b) => ({
    ...b,
    teamContext: {
      teamName: n,
      teamFilePath: m,
      leadAgentId: s.leadAgentId,
      selfAgentId: a,
      selfAgentName: r,
      isLeader: !1,
      teammates: {}
    }
  })), t(`[Reconnection] Initialized agent context from session for ${r} in team ${n}`)
}
import {
  stat as T
} from "fs/promises";
import {
  homedir as w
} from "os";
import {
  join as y,
  sep as F
} from "path";
var I = 604800000,
  T2r = 1000;

function u6o(e) {
  let n = [`This session was opened by an external deep link in ${R(e.cwd)}`];
  if (e.repo) {
    let r = e.lastFetch ? mv(e.lastFetch) : "never",
      o = !e.lastFetch || Date.now() - e.lastFetch.getTime() > I;
    n.push(`Resolved ${e.repo} from local clones \xB7 last fetched ${r}${o?" \u2014 CLAUDE.md may be stale":""}`)
  }
  if (e.prefillLength) n.push(e.prefillLength > T2r ? `The prompt below (${ei(e.prefillLength)} chars) was supplied by the link \u2014 scroll to review the entire prompt before pressing Enter.` : "The prompt below was supplied by the link \u2014 review carefully before pressing Enter.");
  return n.join(`
`)
}
async function p6o(e) {
  let n = await R5(e);
  if (!n) return;
  let r = await DW(n),
    [o, s] = await Promise.all([A(y(n, "FETCH_HEAD")), r ? A(y(r, "FETCH_HEAD")) : Promise.resolve(void 0)]);
  if (o && s) return o > s ? o : s;
  return o ?? s
}
async function A(e) {
  try {
    let {
      mtime: n
    } = await T(e);
    return n
  } catch {
    return
  }
}

function R(e) {
  let n = w();
  if (e === n) return "~";
  if (e.startsWith(n + F)) return "~" + e.slice(n.length);
  return e
}

function Mzt(e, {
  replacesProcess: n
}) {
  return cW() === void 0 && Ov() && !(n && ugn()) && E("tengu_resume_open_live_bg", !0) ? e.jobId : void 0
}
async function xZn(e) {
  let n = await L(e);
  return p("resume_live_background_open", n.reason, {
    entrypoint: c(e.entrypoint)
  }), n
}
async function L({
  holder: e,
  entrypoint: n,
  prompt: r,
  storageV5: o
}) {
  if (!process.stdin.isTTY || !process.stdout.isTTY) return {
    reason: "not_openable"
  };
  let s = Mzt(e, {
    replacesProcess: !0
  });
  if (s === void 0) return {
    reason: "not_openable"
  };
  try {
    await G_e()
  } catch (a) {
    return {
      reason: "open_failed",
      detail: d(a),
      promptSent: !1
    }
  }
  let u = typeof r === "string" && r.trim() !== "";
  if (u) {
    let a = r.trimStart();
    if (a.startsWith("!") || a.startsWith("/")) return {
      reason: "prompt_undelivered",
      detail: `a prompt starting with ${a.startsWith("!")?"!":"/"} would run as a command there`,
      delivery: "failed"
    };
    let [{
      replyToJob: m
    }, {
      getJobDir: b,
      readJobState: h
    }] = await Promise.all([import("B:/~BUN/root/chunk-6rqb8fhk.js"), import("B:/~BUN/root/chunk-7ach19n3.js")]);
    if ((await h(b(s), o))?.block !== void 0) return {
      reason: "prompt_undelivered",
      detail: "it is waiting on your answer to a question",
      delivery: "failed"
    };
    process.stdout.write(he.dim(`Sending your prompt to the background session (${s})\u2026
`));
    let f = await m(s, r, void 0, void 0, void 0, o, {
      nextTurn: !0
    });
    if (f) {
      let S = f.code === "ENOCONN" || f.code === "ETIMEOUT";
      return {
        reason: "prompt_undelivered",
        detail: S ? "its supervisor did not answer" : f.code === "ENOJOB" ? "it is no longer running" : f.err,
        delivery: f.queued === !0 ? "queued" : S ? "unconfirmed" : "failed"
      }
    }
  }
  try {
    return await E2r(s, n, o, {
      promptSent: u
    })
  } catch (a) {
    return {
      reason: "open_failed",
      detail: d(a),
      promptSent: u
    }
  }
}
async function E2r(e, n, r, {
  promptSent: o = !1
} = {}) {
  return g("resume_live_background_open", {
    entrypoint: c(n),
    prompt_sent: o
  }), _7({
    args: ["attach", e],
    preSpawn: () => process.stdout.write(he.dim(o ? `Sent your prompt to the background session (${e}); opening it\u2026
` : `Opening the background session (${e})\u2026
`))
  }, r)
}
import {
  isAbsolute as D,
  resolve as O,
  win32 as _
} from "path";
async function abn(e, n, r = W_) {
  if (!(D(e) || _.isAbsolute(e)) || jn(e) || r_(e) || r_(_.normalize(e)) || Ry(e) || Ry(O(e)) || ul(e)) return t(`[${n}] session reported a network-path cwd \u2014 not adopting`, {
    level: "warn"
  }), !1;
  if (await LTe(e, J5(), r)) return t(`[${n}] session-reported cwd's local ancestry could not be verified as network-free \u2014 not adopting`, {
    level: "warn"
  }), !1;
  return !0
}
export {
  ibn,
  a6o,
  AZn,
  k2r,
  l6o,
  Mzt,
  xZn,
  E2r,
  d6o,
  c6o,
  abn,
  T2r,
  u6o,
  p6o
};
