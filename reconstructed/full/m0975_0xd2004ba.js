// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  en
} from "B:/~BUN/root/chunk-bvn0mpsk.js";
import {
  Y,
  R2r,
  we,
  kr,
  OGr,
  EBe,
  Te,
  Oy,
  WY,
  Bmt,
  TK,
  Nxe,
  Bl
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  Ke,
  st,
  te
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  _
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  za,
  Cc
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  d
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  jt
} from "B:/~BUN/root/chunk-dv435n4g.js";
import {
  LJt,
  jG,
  ZU,
  AQt,
  Rfe,
  FA,
  TVe,
  _p,
  jp,
  Bve,
  ey,
  QG,
  e3,
  Lrt,
  Wfe,
  _c,
  tV,
  sB,
  nV,
  NSr,
  FSr,
  Ei,
  $Sr,
  cHn,
  bp,
  Die,
  QAt,
  Yfe,
  IM,
  Lie,
  KSr,
  nxt,
  BP,
  Q8,
  fS
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  KKe,
  HAr
} from "B:/~BUN/root/chunk-1mdeqc2r.js";
import {
  Rd
} from "B:/~BUN/root/chunk-06ra9xdn.js";
import {
  m0r
} from "B:/~BUN/root/chunk-ewv6w8xv.js";
import {
  Tp
} from "B:/~BUN/root/chunk-196w7fz7.js";
import {
  In
} from "B:/~BUN/root/chunk-y39emrp9.js";
import {
  tTe
} from "B:/~BUN/root/chunk-r6m7remx.js";
import {
  dHe
} from "B:/~BUN/root/chunk-2pww2v3x.js";
import {
  Qge,
  H3e,
  zTe,
  F3e,
  $3e
} from "B:/~BUN/root/chunk-65tbbnf1.js";
import {
  qMt
} from "B:/~BUN/root/chunk-faawr4jv.js";
import {
  Yae
} from "B:/~BUN/root/chunk-x8507144.js";
import {
  Gee
} from "B:/~BUN/root/chunk-rtxwm8ds.js";
import {
  vkr
} from "B:/~BUN/root/chunk-9sy3w2pa.js";
import {
  J3t
} from "B:/~BUN/root/chunk-2zbbrncj.js";
import {
  U5
} from "B:/~BUN/root/chunk-a8n50m8y.js";
import {
  sYt,
  iYt
} from "B:/~BUN/root/chunk-y19pnsxj.js";
import {
  Coe
} from "B:/~BUN/root/chunk-hs9ewgjt.js";
import {
  $We
} from "B:/~BUN/root/chunk-zwdmb8n5.js";
import {
  dir
} from "B:/~BUN/root/chunk-tmkbdk3b.js";
import {
  r4
} from "B:/~BUN/root/chunk-4gthywt6.js";
import {
  A4t
} from "B:/~BUN/root/chunk-gff94s4f.js";
import {
  Qu,
  dLe
} from "B:/~BUN/root/chunk-ydzwkn0c.js";
import {
  ui
} from "B:/~BUN/root/chunk-3qp6kts8.js";
import {
  f6
} from "B:/~BUN/root/chunk-tqj9zsrn.js";
import {
  U
} from "B:/~BUN/root/chunk-z1enakv9.js";
import {
  randomUUID as oe
} from "crypto";
var re = null;
async function* air({
  session: o,
  setMessages: m,
  readFileState: j,
  loadedNestedMemoryPaths: C,
  sessionEnvVars: L,
  toolState: H,
  memorySelector: F,
  getAppState: i,
  setAppState: k,
  sessionHooksRegistry: B,
  dialogStore: x,
  isolationLatch: f,
  taskRegistry: b,
  clearedSessionTitle: p,
  storageV5: r,
  credentials: T,
  deferSessionStartHooks: E,
  releaseDeferredSessionStartHooks: q,
  resetTrigger: h,
  resetUserMessageUuid: G
}) {
  J3t(o), fS(Q8), F3e(), zTe(), Qge();
  let K = Wfe();
  await Lrt(o, "clear", {
    sessionHooks: B,
    getAppState: i,
    signal: AbortSignal.timeout(K),
    storageV5: r,
    credentials: T
  }), LJt("conversation_clear");
  let l = new Set,
    I = [];
  if (i)
    for (let e of Object.values(i().tasks)) {
      if (v(e)) continue;
      if (In(e)) l.add(e.agentId), I.push(e);
      else if (Qu(e)) l.add(e.identity.agentId)
    }
  q?.(), QG("clear"), m((e) => {
    if (Rfe() === "padded-countdown") AQt.of(o).rollOverContext("main", jG(e));
    return []
  });
  let W = i ? Object.values(i().tasks).some((e) => !v(e) && dLe.has(e.type) && (e.status === "running" || In(e) && ey(e))) : !1;
  dir(o, l, k, H, r, W);
  let O = we();
  try {
    jp(O)
  } catch {
    t(`/clear: originalCwd "${O}" no longer exists; falling back`);
    let e = kr();
    if (e !== O) try {
      jp(e)
    } catch {}
  }
  if (j.clear(), Coe.of(o.host).reset(), FA.of(o).discardAll(), fS((e) => e.mode === "task-notification" && typeof e.value === "string" && TVe(e.value) !== null), C)
    for (let e of Object.keys(C)) delete C[e];
  if (L?.clear(), ZU(F), f && l.size === 0) f.current = null;
  if (i) iYt(i);
  let c = bp(Y()),
    R = Die(),
    S = !p && c !== void 0,
    z = S && cHn(Ei(Y())),
    g, M;
  if (H3e(), k) {
    if (x?.dismissKind(U5.kind), qMt(new Set), k((e) => {
        let s = {};
        for (let [y, n] of Object.entries(e.tasks)) {
          if (!v(n)) {
            s[y] = n;
            continue
          }
          try {
            if (n.status === "running") {
              if (_p(n)) n.shellCommand?.kill(), n.shellCommand?.cleanup();
              if ("abortController" in n) n.abortController?.abort()
            }
          } catch (ee) {
            d(ee)
          }
          Tp(y)
        }
        return g = U(Object.values(s), (y) => !se.has(y.type)), M = e.activeGoal, {
          ...sYt(e),
          tasks: s,
          runningSubagents: g === 0 ? 0 : e.runningSubagents,
          ...{
            endedByModel: !1
          },
          attribution: KKe(),
          cacheBreakerPhrase: void 0,
          sendMessagePins: {},
          agentNameRegistry: A4t(e.agentNameRegistry, s),
          frameUrls: {},
          standaloneAgentContext: S && e.standaloneAgentContext?.name ? {
            name: e.standaloneAgentContext.name
          } : void 0,
          fileHistory: {
            snapshots: [],
            trackedFiles: new Set,
            snapshotSequence: 0
          }
        }
      }), M !== void 0) f6(M, "session_clear");
    r4({})
  }
  if (b && g === 0) b.resetWebSearchCalls();
  if (i) {
    for (let e of i().mcp.clients)
      if (e.name === "ide" && e.type === "connected") {
        Gee(e, void 0);
        let {
          clearServerCache: s
        } = import.meta.require("B:/~BUN/root/chunk-m4dhr7e5.js").mcpClientModule();
        await s(e.name, e.config).catch(() => {})
      }
  }
  m0r();
  let Q = Y(),
    X = p ? _c() ?? Rd() : void 0,
    J = nV(),
    A = g === 0 && l.size === 0 ? void 0 : TK(),
    Z = re?.pauseStampsCarriedAcrossClear(i?.().mcp.clients, nxt()) ?? [],
    V = !1;
  if (QAt(), J) NSr();
  if (V) WY(!0), Bmt(!0);
  if (A !== void 0) Nxe(A);
  let P = oe();
  if (Te() || Bl() && Yae()) {
    let e = h === "clear" ? en(G) : null;
    za({
      type: "conversation_reset",
      new_conversation_id: P,
      ...h !== void 0 && {
        trigger: h
      },
      ...e !== null && {
        user_message_uuid: e
      },
      timestamp: new Date().toISOString()
    }), _("bridge_conversation_reset")
  }
  $We.of(o.host).conversationReset(), yield {
    type: "conversation_reset",
    newConversationId: P
  }, OGr(r), EBe();
  let w = Ei(Y()),
    ie = z || S && cHn(w);
  if (R2r({
      setCurrentAsParent: !0
    }), S && c !== void 0) IM(c);
  let ne = Promise.resolve(!0);
  if (dHe(), $3e(), HAr.of(o).reset(), jt().needsAuthNoticedThisSession.clear(), tTe(o), a.CLAUDE_CODE_SESSION_ID) process.env.CLAUDE_CODE_SESSION_ID = Y();
  if (await tV(), Oy())
    for (let e of Z) KSr({
      ...e,
      afterUuid: null
    }, r);
  if (FSr(), $Sr(w), await vkr(Y(), Rd(), r), p) await sB(Q, p, X, "user", r);
  else if (c) {
    if (await sB(Y(), c, void 0, "user", r), R) await Yfe(Y(), R, void 0, "user", r)
  }
  for (let e of I)
    if (e.status === "running") Bve(e.agentId);
  {
    let {
      saveMode: e
    } = import.meta.require("B:/~BUN/root/chunk-dyyzq0g4.js"), {
      isCoordinatorMode: s
    } = import.meta.require("B:/~BUN/root/chunk-q413jja7.js");
    e(s() ? "coordinator" : "normal")
  }
  let D = Cc();
  if (D) BP(D, r);
  if (f?.current) Lie(f.current, r);
  if (E) {
    E((e) => e3(o, "clear", {
      signal: e,
      storageV5: r,
      credentials: T
    }).catch((s) => {
      if (Ke(s)) t(`SessionStart hooks after /clear aborted: ${te(s).message}`);
      else d(st(te(s), "SessionStart hooks after /clear threw"));
      return []
    }));
    return
  }
  let N = await e3(o, "clear", {
    storageV5: r,
    credentials: T
  });
  if (N.length > 0) m(() => N)
}

function v(o) {
  return "isBackgrounded" in o && o.isBackgrounded === !1
}
var se = new Set(["local_bash", "monitor_mcp", "monitor_ws", "mcp_task"]);

function lir(o) {
  return Object.values(o).some((m) => !v(m) && dLe.has(m.type) && !ui(m.status))
}
export {
  air,
  lir
};
