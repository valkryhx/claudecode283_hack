// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  st
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  N2
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  Dn,
  Gh,
  Ka,
  qg
} from "B:/~BUN/root/chunk-54p0h65d.js";
import {
  i
} from "B:/~BUN/root/chunk-728mwbhs.js";
import {
  _,
  p
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  Ee,
  le
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  Ade,
  ph,
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  d
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  cj,
  S2
} from "B:/~BUN/root/chunk-339q6g5w.js";
import {
  is,
  nE
} from "B:/~BUN/root/chunk-bpp59nyd.js";
import {
  Je,
  Ha
} from "B:/~BUN/root/chunk-3rzkfay5.js";
import {
  a2
} from "B:/~BUN/root/chunk-6spmd6p4.js";
import {
  jtn,
  Dst,
  Lst,
  Tl
} from "B:/~BUN/root/chunk-rfp59gnb.js";
import {
  KEe,
  ay
} from "B:/~BUN/root/chunk-8p6es4nr.js";
var SYr = {
  CLAUDE_CODE_TUI_TRIAL: "fullscreen"
};

function f(e, n) {
  Ee((r) => (r.fullscreenUpsellSeenCount ?? 0) >= e ? r : {
    ...r,
    fullscreenUpsellSeenCount: e
  }, n)
}

function tSn(e) {
  f(Lst, e)
}

function PQn(e) {
  let n = jtn();
  if (n.upsellImpression !== void 0) return n.upsellImpression;
  let r = Math.min((le().fullscreenUpsellSeenCount ?? 0) + 1, Lst);
  return n.upsellImpression = r, f(r, e), r
}
async function wYr(e) {
  let n = jtn();
  if (n.persisted || Dst() !== "fullscreen") return !1;
  if (Je().tui !== void 0) return t("fullscreen trial: settings.tui was set explicitly during the trial \u2014 not persisting"), !1;
  if (!Tl()) return t("fullscreen trial: renderer is not fullscreen this session (auto-off) \u2014 not persisting"), !1;
  let r = !1,
    {
      error: o
    } = await Ha("userSettings", (s) => (r = s?.tui !== void 0, r ? null : {
      tui: "fullscreen"
    }), void 0, e);
  if (o) return d(o), p("tui_fullscreen_upsell_trial", "settings_write_failed"), !1;
  if (r) return t("fullscreen trial: settings.tui was set explicitly during the trial (seen inside the queued write) \u2014 not persisting"), !1;
  return tSn(e), n.persisted = !0, _("tui_fullscreen_upsell_trial"), i("tengu_fullscreen_upsell_trial_persisted", {
    session_age_ms: Math.round(process.uptime() * 1000)
  }), t("fullscreen trial: healthy \u2014 persisted settings.tui=fullscreen"), !0
}
async function vYr(e) {
  let n = a2();
  if (!n?.teamName || !n?.agentName) {
    t("[Reconnection] computeInitialTeamContext: No teammate context set (not a teammate)");
    return
  }
  let {
    teamName: r,
    agentId: o,
    agentName: s
  } = n, a = await ay(r, e);
  if (!a) {
    d(st(Error(`[computeInitialTeamContext] Could not read team file for ${r}`), "[computeInitialTeamContext] Could not read team file"));
    return
  }
  let m = KEe(r),
    l = !o;
  return t(`[Reconnection] Computed initial team context for ${l?"leader":`teammate ${s}`} in team ${r}`), {
    teamName: r,
    teamFilePath: m,
    leadAgentId: a.leadAgentId,
    selfAgentId: o,
    selfAgentName: s,
    isLeader: l,
    teammates: {}
  }
}
async function kYr(e, n, r, o) {
  let s = await ay(n, o);
  if (!s) {
    t(`[initializeTeammateContextFromSession] Could not read team file for ${n} (agent: ${r}) \u2014 team may have been disbanded`, {
      level: "error"
    });
    return
  }
  let a = s.members.find((u) => u.name === r);
  if (!a) t(`[Reconnection] Member ${r} not found in team ${n} - may have been removed`);
  let m = a?.agentId,
    l = KEe(n);
  e((u) => ({
    ...u,
    teamContext: {
      teamName: n,
      teamFilePath: l,
      leadAgentId: s.leadAgentId,
      selfAgentId: m,
      selfAgentName: r,
      isLeader: !1,
      teammates: {}
    }
  })), t(`[Reconnection] Initialized agent context from session for ${r} in team ${n}`)
}
import {
  isAbsolute as S,
  resolve as F,
  win32 as c
} from "path";
async function r2t(e, n, r = ph) {
  if (!(S(e) || c.isAbsolute(e)) || Dn(e) || Gh(e) || Gh(c.normalize(e)) || qg(e) || qg(F(e)) || Ka(e)) return t(`[${n}] session reported a network-path cwd \u2014 not adopting`, {
    level: "warn"
  }), !1;
  if (await Ade(e, N2(), r)) return t(`[${n}] session-reported cwd's local ancestry could not be verified as network-free \u2014 not adopting`, {
    level: "warn"
  }), !1;
  return !0
}
import {
  stat as C
} from "fs/promises";
import {
  homedir as b
} from "os";
import {
  join as g,
  sep as T
} from "path";
var x = 604800000,
  IQn = 1000;

function EYr(e) {
  let n = [`This session was opened by an external deep link in ${y(e.cwd)}`];
  if (e.repo) {
    let r = e.lastFetch ? nE(e.lastFetch) : "never",
      o = !e.lastFetch || Date.now() - e.lastFetch.getTime() > x;
    n.push(`Resolved ${e.repo} from local clones \xB7 last fetched ${r}${o?" \u2014 CLAUDE.md may be stale":""}`)
  }
  if (e.prefillLength) n.push(e.prefillLength > IQn ? `The prompt below (${is(e.prefillLength)} chars) was supplied by the link \u2014 scroll to review the entire prompt before pressing Enter.` : "The prompt below was supplied by the link \u2014 review carefully before pressing Enter.");
  return n.join(`
`)
}
async function TYr(e) {
  let n = await S2(e);
  if (!n) return;
  let r = await cj(n),
    [o, s] = await Promise.all([h(g(n, "FETCH_HEAD")), r ? h(g(r, "FETCH_HEAD")) : Promise.resolve(void 0)]);
  if (o && s) return o > s ? o : s;
  return o ?? s
}
async function h(e) {
  try {
    let {
      mtime: n
    } = await C(e);
    return n
  } catch {
    return
  }
}

function y(e) {
  let n = b();
  if (e === n) return "~";
  if (e.startsWith(n + T)) return "~" + e.slice(n.length);
  return e
}
export {
  SYr,
  tSn,
  PQn,
  wYr,
  vYr,
  kYr,
  r2t,
  IQn,
  EYr,
  TYr
};
