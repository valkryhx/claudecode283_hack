// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  H,
  Ml
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  Kna
} from "B:/~BUN/root/chunk-65j2302z.js";
import {
  wN
} from "B:/~BUN/root/chunk-83p1z1q5.js";
import {
  es
} from "B:/~BUN/root/chunk-0s9zh2h6.js";
import {
  AsyncLocalStorage as p
} from "async_hooks";
var u = new p;

function eN() {
  return u.getStore()
}

function MXi(e, t) {
  return u.run(e, t)
}

function AV() {
  return u.getStore() !== void 0
}

function DXi(e) {
  return {
    ...e,
    isInProcess: !0
  }
}
import {
  spawnSync as b
} from "child_process";

function iM() {
  let e = eN();
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
var Cfa = new W(() => new g);

function n() {
  return Cfa.of(H().host)
}

function Qka(e) {
  n().setCliParentSessionId(e)
}

function Zka(e) {
  n().setDynamicTeamContext(e)
}

function eva() {
  n().setDynamicTeamContext(null)
}

function tN() {
  return n().dynamicTeamContext
}

function qD() {
  let e = eN();
  if (e) return e.agentId;
  return n().dynamicTeamContext?.agentId
}

function CE() {
  let e = eN();
  if (e) return e.agentName;
  return n().dynamicTeamContext?.agentName
}

function kc(e) {
  let t = eN();
  if (t) return t.teamName;
  let {
    dynamicTeamContext: r
  } = n();
  if (r?.teamName) return r.teamName;
  return e?.teamName
}

function Fc() {
  if (eN()) return !0;
  let {
    dynamicTeamContext: t
  } = n();
  return !!(t?.agentId && t?.teamName)
}

function rj(e) {
  return e !== void 0 || Fc() || i.CLAUDE_CODE_CHILD_SESSION
}

function E_t() {
  if (i.CLAUDE_CODE_FORCE_SESSION_PERSISTENCE) return !1;
  if (!(i.CLAUDE_CODE_CHILD_SESSION && Ml() && !Fc())) return !1;
  return !n().isChildSessionMarkerAmbientInTmux()
}

function ZDs() {
  if (!i.CLAUDE_CODE_CHILD_SESSION) return !1;
  if (process.stdin.isTTY || process.stdout.isTTY) return !1;
  if (!Kna()) return !1;
  return n().ambientMarkerProbe() === "absent"
}

function Wz() {
  if (i.CLAUDE_CODE_CHILD_SESSION) return !0;
  if (!i.CLAUDECODE) return !1;
  return i.CLAUDE_CODE_SKIP_PROMPT_HISTORY || !process.stdin.isTTY && !process.stdout.isTTY
}

function tva(e) {
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
  if (!i.TMUX) return "absent";
  let e = wN("tmux");
  if (e === null) return "unknown";
  let t;
  try {
    t = b(e, ["show-environment", "-g"], {
      encoding: "utf8",
      timeout: 250,
      stdio: ["ignore", "pipe", "ignore"],
      cwd: void 0,
      env: es(),
      windowsHide: !0
    })
  } catch {
    return "unknown"
  }
  if (t.status !== 0) return "unknown";
  return Rfa(t.stdout) ? "ambient" : "absent"
}

function Rfa(e) {
  return e.split(`
`).some((t) => t.startsWith("CLAUDE_CODE_CHILD_SESSION="))
}

function RO() {
  let e = eN();
  if (e) return e.color;
  return n().dynamicTeamContext?.color
}

function e0s() {
  let e = eN();
  if (e) return e.planModeRequired;
  let {
    dynamicTeamContext: t
  } = n();
  if (t !== null) return t.planModeRequired;
  return i.CLAUDE_CODE_PLAN_MODE_REQUIRED
}

function UFe(e) {
  if (!e) return !1;
  let {
    leadAgentId: t,
    teammates: r
  } = e;
  return Object.keys(r).some((s) => s !== t)
}

function zz(e) {
  if (!e?.leadAgentId) return !1;
  let t = qD(),
    r = e.leadAgentId;
  if (t === r) return !0;
  if (!t) return !0;
  return !1
}

function JVe(e) {
  for (let t of Object.values(e.tasks))
    if (t.type === "in_process_teammate" && t.status === "running") return !0;
  return !1
}

function Djn(e) {
  for (let t of Object.values(e.tasks))
    if (t.type === "in_process_teammate" && t.status === "running" && !t.isIdle) return !0;
  return !1
}

function t0s(e, t) {
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
        let a = m[c];
        if (a && a.type === "in_process_teammate")
          if (a.isIdle) d();
          else m[c] = {
            ...a,
            onIdleCallbacks: [...a.onIdleCallbacks ?? [], d]
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
  eN,
  MXi,
  AV,
  DXi,
  iM,
  Cfa,
  Qka,
  Zka,
  eva,
  tN,
  qD,
  CE,
  kc,
  Fc,
  rj,
  E_t,
  ZDs,
  Wz,
  tva,
  Rfa,
  RO,
  e0s,
  UFe,
  zz,
  JVe,
  Djn,
  t0s
};
