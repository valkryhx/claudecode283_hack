// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Qi,
  E
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  Fe
} from "B:/~BUN/root/chunk-rwkgcmm8.js";
import {
  a,
  or
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  Ga
} from "B:/~BUN/root/chunk-nggrknsv.js";
import {
  eF
} from "B:/~BUN/root/chunk-6a9s3k2y.js";

function SIt() {
  return r() !== null
}

function r() {
  if (a.CLAUDE_CODE_DISABLE_AGENT_VIEW) return "is disabled by CLAUDE_CODE_DISABLE_AGENT_VIEW";
  if (eF()?.settings.disableAgentView === !0) return "is disabled by the 'disableAgentView' setting";
  return null
}

function Ov() {
  return !SIt()
}
var i = "tengu_fleetview_simple";

function sgo() {
  return a.CLAUDE_CODE_FLEETVIEW_SIMPLE || E(i, !1)
}
async function wIt(e = {}) {
  if (eF() === null) {
    let {
      getSettingsWithErrors: t
    } = await import("B:/~BUN/root/chunk-3pxr4gzq.js");
    t()
  }
  if (e.kickGrowthBook !== !1) Qi().catch(() => {})
}

function H7t() {
  return or.CLAUDE_CODE_FLEET_PAST_SESSIONS === !0 || E("tengu_fleet_past_sessions", !1)
}

function n3e() {
  return Ov()
}

function D9() {
  return !1
}

function r3e() {
  return E("tengu_amber_anchor", !1)
}

function igo() {
  return E("tengu_copper_lantern", !1)
}

function s() {
  return E("tengu_quiet_harbor", !1) ? "ask" : "transient"
}

function Evr() {
  let e = process.env.CLAUDE_CODE_DAEMON_COLD_START;
  if (e === "transient" || e === "ask") return e;
  let t = eF()?.settings.daemonColdStart;
  if (t !== void 0) return t;
  return s()
}

function uf() {
  return r3e() ? "daemon" : "background service"
}

function Fpe() {
  return Ga(uf())
}

function Rwe(e) {
  return n3e() ? ` \u2014 run 'claude daemon ${e}'` : ""
}

function o3e(e, t) {
  let o = t ?? r() ?? "is not available in this environment";
  process.stderr.write(`'${e}' ${o}.
`), process.exit(1)
}
var b$n = "CLAUDE_CODE_AGENT_VIEW_RELAUNCH";

function Tvr() {
  return !1
}

function ago() {
  return !!a.CLAUDE_AGENTS_SELECT
}

function lgo() {
  let e = Fe(process.env[b$n]);
  return delete process.env[b$n], e
}
export {
  SIt,
  Ov,
  sgo,
  wIt,
  H7t,
  n3e,
  D9,
  r3e,
  igo,
  Evr,
  uf,
  Fpe,
  Rwe,
  o3e,
  b$n,
  Tvr,
  ago,
  lgo
};
