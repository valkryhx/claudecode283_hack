// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  q,
  j,
  yu
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  HUo
} from "B:/~BUN/root/chunk-snmb1kqg.js";
import {
  Q0
} from "B:/~BUN/root/chunk-e7p62566.js";
import {
  hs
} from "B:/~BUN/root/chunk-ceg1zct0.js";
import {
  AsyncLocalStorage as p
} from "async_hooks";
var u = new p;

function Gk() {
  return u.getStore()
}

function VLo(e, t) {
  return u.run(e, t)
}

function Hq() {
  return u.getStore() !== void 0
}

function qLo(e) {
  return {
    ...e,
    isInProcess: !0
  }
}
import {
  spawnSync as x
} from "child_process";

function Vk() {
  let e = Gk();
  if (e) return e.parentSessionId;
  let t = n();
  return t.dynamicTeamContext?.parentSessionId ?? t.cliParentSessionId
}
class g {
  cliParentSessionId = void 0;
  dynamicTeamContext = null;
  ambientMarkerProbe = f(C);
  isChildSessionMarkerAmbientInTmux = () => this.ambientMarkerProbe() === "ambient";
  setCliParentSessionId(e) {
    this.cliParentSessionId = e
  }
  setDynamicTeamContext(e) {
    this.dynamicTeamContext = e
  }
  setAmbientMarkerProbe(e) {
    this.ambientMarkerProbe = f(e)
  }
}
var NGo = new q(() => new g);

function n() {
  return NGo.of(j().host)
}

function n5o(e) {
  n().setCliParentSessionId(e)
}

function r5o(e) {
  n().setDynamicTeamContext(e)
}

function o5o() {
  n().setDynamicTeamContext(null)
}

function a2() {
  return n().dynamicTeamContext
}

function zE() {
  let e = Gk();
  if (e) return e.agentId;
  return n().dynamicTeamContext?.agentId
}

function cg() {
  let e = Gk();
  if (e) return e.agentName;
  return n().dynamicTeamContext?.agentName
}

function ca(e) {
  let t = Gk();
  if (t) return t.teamName;
  let {
    dynamicTeamContext: r
  } = n();
  if (r?.teamName) return r.teamName;
  return e?.teamName
}

function nl() {
  if (Gk()) return !0;
  let {
    dynamicTeamContext: t
  } = n();
  return !!(t?.agentId && t?.teamName)
}

function d$(e) {
  return e !== void 0 || nl() || a.CLAUDE_CODE_CHILD_SESSION
}

function S$e() {
  if (a.CLAUDE_CODE_FORCE_SESSION_PERSISTENCE) return !1;
  if (!(a.CLAUDE_CODE_CHILD_SESSION && yu() && !nl())) return !1;
  return !n().isChildSessionMarkerAmbientInTmux()
}

function P$r() {
  if (!a.CLAUDE_CODE_CHILD_SESSION) return !1;
  if (process.stdin.isTTY || process.stdout.isTTY) return !1;
  if (!HUo()) return !1;
  return n().ambientMarkerProbe() === "absent"
}

function DFt() {
  if (a.CLAUDE_CODE_CHILD_SESSION) return !0;
  if (!a.CLAUDECODE) return !1;
  return a.CLAUDE_CODE_SKIP_PROMPT_HISTORY || !process.stdin.isTTY && !process.stdout.isTTY
}

function s5o(e) {
  n().setAmbientMarkerProbe(e === null ? C : () => {
    let t = e();
    return t === !0 ? "ambient" : t === !1 ? "absent" : t
  })
}

function f(e) {
  let t = null;
  return () => {
    if (t === null) try {
      t = e()
    } catch {
      t = "unknown"
    }
    return t
  }
}

function C() {
  if (!a.TMUX) return "absent";
  let e = Q0("tmux");
  if (e === null) return "unknown";
  let t;
  try {
    t = x(e, ["show-environment", "-g"], {
      encoding: "utf8",
      timeout: 250,
      stdio: ["ignore", "pipe", "ignore"],
      cwd: void 0,
      env: hs(),
      windowsHide: !0
    })
  } catch {
    return "unknown"
  }
  if (t.status !== 0) return "unknown";
  return HGo(t.stdout) ? "ambient" : "absent"
}

function HGo(e) {
  return e.split(`
`).some((t) => t.startsWith("CLAUDE_CODE_CHILD_SESSION="))
}

function GE() {
  let e = Gk();
  if (e) return e.color;
  return n().dynamicTeamContext?.color
}

function LFt() {
  let e = Gk();
  if (e) return e.planModeRequired;
  let {
    dynamicTeamContext: t
  } = n();
  if (t !== null) return t.planModeRequired;
  return a.CLAUDE_CODE_PLAN_MODE_REQUIRED
}

function BRe(e) {
  if (!e) return !1;
  let {
    leadAgentId: t,
    teammates: r
  } = e;
  return Object.keys(r).some((s) => s !== t)
}

function B0(e) {
  if (!e?.leadAgentId) return !1;
  let t = zE(),
    r = e.leadAgentId;
  if (t === r) return !0;
  if (!t) return !0;
  return !1
}

function n5e(e) {
  for (let t of Object.values(e.tasks))
    if (t.type === "in_process_teammate" && t.status === "running") return !0;
  return !1
}

function NFt(e) {
  for (let t of Object.values(e.tasks))
    if (t.type === "in_process_teammate" && t.status === "running" && !t.isIdle) return !0;
  return !1
}

function I$r(e, t) {
  let r = [];
  for (let [s, o] of Object.entries(t.tasks))
    if (o.type === "in_process_teammate" && o.status === "running" && !o.isIdle) r.push(s);
  if (r.length === 0) return Promise.resolve();
  return new Promise((s) => {
    let o = r.length,
      d = () => {
        if (o--, o === 0) s()
      };
    e((l) => {
      let m = {
        ...l.tasks
      };
      for (let c of r) {
        let i = m[c];
        if (i && i.type === "in_process_teammate")
          if (i.isIdle) d();
          else m[c] = {
            ...i,
            onIdleCallbacks: [...i.onIdleCallbacks ?? [], d]
          }
      }
      return {
        ...l,
        tasks: m
      }
    })
  })
}
export {
  Gk,
  VLo,
  Hq,
  qLo,
  Vk,
  NGo,
  n5o,
  r5o,
  o5o,
  a2,
  zE,
  cg,
  ca,
  nl,
  d$,
  S$e,
  P$r,
  DFt,
  s5o,
  HGo,
  GE,
  LFt,
  BRe,
  B0,
  n5e,
  NFt,
  I$r
};
