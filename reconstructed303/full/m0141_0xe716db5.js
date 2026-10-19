// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  j,
  kp
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  z
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  QYs
} from "B:/~BUN/root/chunk-gyr2a6wz.js";
import {
  pF
} from "B:/~BUN/root/chunk-j704adqd.js";
import {
  ss
} from "B:/~BUN/root/chunk-5g9fghtv.js";
import {
  AsyncLocalStorage as p
} from "async_hooks";
var u = new p;

function _A() {
  return u.getStore()
}

function S2s(e, t) {
  return u.run(e, t)
}

function a5() {
  return u.getStore() !== void 0
}

function w2s(e) {
  return {
    ...e,
    isInProcess: !0
  }
}
import {
  spawnSync as x
} from "child_process";

function bA() {
  let e = _A();
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
var _7s = new z(() => new g);

function n() {
  return _7s.of(j().host)
}

function pai(e) {
  n().setCliParentSessionId(e)
}

function fai(e) {
  n().setDynamicTeamContext(e)
}

function mai() {
  n().setDynamicTeamContext(null)
}

function vW() {
  return n().dynamicTeamContext
}

function Ux() {
  let e = _A();
  if (e) return e.agentId;
  return n().dynamicTeamContext?.agentId
}

function eS() {
  let e = _A();
  if (e) return e.agentName;
  return n().dynamicTeamContext?.agentName
}

function id(e) {
  let t = _A();
  if (t) return t.teamName;
  let {
    dynamicTeamContext: r
  } = n();
  if (r?.teamName) return r.teamName;
  return e?.teamName
}

function Zd() {
  if (_A()) return !0;
  let {
    dynamicTeamContext: t
  } = n();
  return !!(t?.agentId && t?.teamName)
}

function CB(e) {
  return e !== void 0 || Zd() || a.CLAUDE_CODE_CHILD_SESSION
}

function fQe() {
  if (a.CLAUDE_CODE_FORCE_SESSION_PERSISTENCE) return !1;
  if (!(a.CLAUDE_CODE_CHILD_SESSION && kp() && !Zd())) return !1;
  return !n().isChildSessionMarkerAmbientInTmux()
}

function XNo() {
  if (!a.CLAUDE_CODE_CHILD_SESSION) return !1;
  if (process.stdin.isTTY || process.stdout.isTTY) return !1;
  if (!QYs()) return !1;
  return n().ambientMarkerProbe() === "absent"
}

function WEe() {
  if (a.CLAUDE_CODE_CHILD_SESSION) return !0;
  if (!a.CLAUDECODE) return !1;
  return a.CLAUDE_CODE_SKIP_PROMPT_HISTORY || !process.stdin.isTTY && !process.stdout.isTTY
}

function gai(e) {
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
  let e = pF("tmux");
  if (e === null) return "unknown";
  let t;
  try {
    t = x(e, ["show-environment", "-g"], {
      encoding: "utf8",
      timeout: 250,
      stdio: ["ignore", "pipe", "ignore"],
      cwd: void 0,
      env: ss(),
      windowsHide: !0
    })
  } catch {
    return "unknown"
  }
  if (t.status !== 0) return "unknown";
  return b7s(t.stdout) ? "ambient" : "absent"
}

function b7s(e) {
  return e.split(`
`).some((t) => t.startsWith("CLAUDE_CODE_CHILD_SESSION="))
}

function Bx() {
  let e = _A();
  if (e) return e.color;
  return n().dynamicTeamContext?.color
}

function Bcn() {
  let e = _A();
  if (e) return e.planModeRequired;
  let {
    dynamicTeamContext: t
  } = n();
  if (t !== null) return t.planModeRequired;
  return a.CLAUDE_CODE_PLAN_MODE_REQUIRED
}

function VWe(e) {
  if (!e) return !1;
  let {
    leadAgentId: t,
    teammates: r
  } = e;
  return Object.keys(r).some((s) => s !== t)
}

function e$(e) {
  if (!e?.leadAgentId) return !1;
  let t = Ux(),
    r = e.leadAgentId;
  if (t === r) return !0;
  if (!t) return !0;
  return !1
}

function Tyt(e) {
  for (let t of Object.values(e.tasks))
    if (t.type === "in_process_teammate" && t.status === "running") return !0;
  return !1
}

function jcn(e) {
  for (let t of Object.values(e.tasks))
    if (t.type === "in_process_teammate" && t.status === "running" && !t.isIdle) return !0;
  return !1
}

function JNo(e, t) {
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
  _A,
  S2s,
  a5,
  w2s,
  bA,
  _7s,
  pai,
  fai,
  mai,
  vW,
  Ux,
  eS,
  id,
  Zd,
  CB,
  fQe,
  XNo,
  WEe,
  gai,
  b7s,
  Bx,
  Bcn,
  VWe,
  e$,
  Tyt,
  jcn,
  JNo
};
