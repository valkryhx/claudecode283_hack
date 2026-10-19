// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Vt
} from "B:/~BUN/root/chunk-9ka04m0y.js";
import {
  F,
  K,
  gzo,
  ke,
  Qr,
  wGo,
  net,
  we,
  nre,
  iet,
  zjt,
  aet,
  FQ,
  XGe,
  Sc
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  Ve,
  Ye,
  H
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  g
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  Vn,
  Ei,
  Cl
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  Ft
} from "B:/~BUN/root/chunk-ejm0pmyj.js";
import {
  iut
} from "B:/~BUN/root/chunk-dn8rakwm.js";
import {
  y0n,
  zp,
  cZ,
  kxt,
  yq,
  eyr,
  Kat,
  Ok,
  Rp,
  zHe,
  vS,
  tNn,
  IXt,
  CZ,
  oOt,
  Txe,
  rd,
  S9,
  Oq,
  w9,
  _fo,
  Sfo,
  Pa,
  wfo,
  GSr,
  Zm,
  cwe,
  RQt,
  Mxe,
  yU,
  tG,
  uwe,
  xfo,
  MQt,
  rN,
  sG,
  Fg,
  Fb
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  Lu
} from "B:/~BUN/root/chunk-9080897a.js";
import {
  xX
} from "B:/~BUN/root/chunk-hkc0g0wr.js";
import {
  ZCo
} from "B:/~BUN/root/chunk-9w4ppz44.js";
import {
  Pp
} from "B:/~BUN/root/chunk-7j5tvnqj.js";
import {
  xp,
  V6e,
  SU,
  vn
} from "B:/~BUN/root/chunk-k382hx6g.js";
import {
  bBe
} from "B:/~BUN/root/chunk-8gzvb73z.js";
import {
  pIe,
  Umt,
  rje,
  Bmt,
  jmt
} from "B:/~BUN/root/chunk-t63e78w2.js";
import {
  kin
} from "B:/~BUN/root/chunk-ydtn2zrk.js";
import {
  G8e
} from "B:/~BUN/root/chunk-8zz6429p.js";
import {
  Gve
} from "B:/~BUN/root/chunk-1g2t7gtx.js";
import {
  Qpe
} from "B:/~BUN/root/chunk-xyxdcn7p.js";
import {
  Lgo
} from "B:/~BUN/root/chunk-nq10jsxs.js";
import {
  Foe
} from "B:/~BUN/root/chunk-j5se4hdw.js";
import {
  tOn,
  nOn
} from "B:/~BUN/root/chunk-5bdzgv0s.js";
import {
  $Y
} from "B:/~BUN/root/chunk-8yntdh0k.js";
import {
  kbe
} from "B:/~BUN/root/chunk-0rjqhdsp.js";
import {
  mst
} from "B:/~BUN/root/chunk-c2s47cg2.js";
import {
  Reo
} from "B:/~BUN/root/chunk-71vwhz3n.js";
import {
  keo
} from "B:/~BUN/root/chunk-tgb9ye7p.js";
import {
  yFe
} from "B:/~BUN/root/chunk-sz82pwm1.js";
import {
  U7
} from "B:/~BUN/root/chunk-f0nxnwqq.js";
import {
  KPn
} from "B:/~BUN/root/chunk-bq1ehv15.js";
import {
  JPn
} from "B:/~BUN/root/chunk-wyn3ry16.js";
import {
  zs
} from "B:/~BUN/root/chunk-c2nm18xm.js";
import {
  Qee
} from "B:/~BUN/root/chunk-stjjr4k8.js";
import {
  randomUUID as me
} from "crypto";
var le = null;
async function* weo({
  session: o,
  setMessages: i,
  readFileState: p,
  sessionEnvVars: z,
  toolState: q,
  memorySelector: W,
  getAppState: s,
  setAppState: E,
  sessionHooksRegistry: Y,
  dialogStore: Q,
  isolationLatch: c,
  taskRegistry: _,
  clearedSessionTitle: C,
  storageV5: n,
  credentials: O,
  deferSessionStartHooks: D,
  releaseDeferredSessionStartHooks: X,
  resetTrigger: I,
  resetUserMessageUuid: J
}) {
  JPn(o), Fb(sG), Bmt(), rje(), pIe();
  let Z = Txe();
  await oOt(o, "clear", {
    sessionHooks: Y,
    getAppState: s,
    signal: AbortSignal.timeout(Z),
    storageV5: n,
    credentials: O
  }), y0n("conversation_clear");
  let S = new Set,
    A = new Map;
  if (s && c?.current != null) {
    let e = Object.values(s().tasks).filter((r) => !P(r) && (vn(r) || xp(r)));
    if (e.every(ce)) {
      for (let r of e)
        if (S.add(r.id), vn(r)) A.set(r.id, r.agentId)
    }
  }
  let R = (e) => P(e) || S.has(e.id),
    u = new Set,
    U = [];
  if (s)
    for (let e of Object.values(s().tasks)) {
      if (R(e)) continue;
      if (vn(e)) u.add(e.agentId), U.push(e);
      else if (xp(e)) u.add(e.identity.agentId)
    }
  X?.(), xX("clear"), $Y(o, void 0), i((e) => {
    if (IXt() === "padded-countdown") tNn.of(o).rollOverContext("main", cZ(e));
    return []
  });
  let V = s ? Object.values(s().tasks).some((e) => !R(e) && V6e.has(e.type) && (e.status === "running" || vn(e) && vS(e))) : !1;
  keo(o, u, E, q, n, V);
  let b = ke();
  try {
    Rp(b)
  } catch {
    t(`/clear: originalCwd "${b}" no longer exists; falling back`);
    let e = Qr();
    if (e !== b) try {
      Rp(e)
    } catch {}
  }
  if (p.clear(), kbe.of(o.host).reset(), Ok.of(o).discardAll(), Fb((e) => e.mode === "task-notification" && typeof e.value === "string" && Kat(e.value) !== null), z?.clear(), yq(W), c && u.size === 0 && S.size === 0) c.current = null;
  if (s) nOn(s);
  let v = Zm(K()),
    j = cwe(),
    T = !C && v !== void 0,
    ee = T && GSr(Pa(K())),
    h, w;
  if (Umt(), E) {
    if (Q?.dismissKind(Foe.kind), kin(new Set), E((e) => {
        let r = {},
          M = [];
        for (let [d, m] of Object.entries(e.tasks)) {
          if (!R(m)) {
            r[d] = m;
            continue
          }
          M.push(d);
          try {
            if (m.status === "running") {
              if (zp(m)) m.shellCommand?.kill(), m.shellCommand?.cleanup();
              if ("abortController" in m) m.abortController?.abort()
            }
          } catch (de) {
            l(de)
          }
          Pp(d)
        }
        h = F(Object.values(r), (d) => !ue.has(d.type) && !kxt(d)), w = e.activeGoal;
        let f = e.transcripts;
        if (f && M.length > 0) {
          f = {
            ...f
          };
          for (let d of M) delete f[d]
        }
        return {
          ...tOn(e),
          tasks: r,
          ...f !== e.transcripts && {
            transcripts: f
          },
          ...e.viewingAgentTaskId !== void 0 && M.includes(e.viewingAgentTaskId) && {
            viewingAgentTaskId: void 0,
            viewSelectionMode: "none"
          },
          runningSubagents: h === 0 ? 0 : e.runningSubagents,
          ...{
            endedByModel: !1
          },
          attribution: iut(),
          cacheBreakerPhrase: void 0,
          sendMessagePins: {},
          agentNameRegistry: KPn(e.agentNameRegistry, r),
          frameUrls: {},
          standaloneAgentContext: T && e.standaloneAgentContext?.name ? {
            name: e.standaloneAgentContext.name
          } : void 0,
          fileHistory: {
            snapshots: [],
            trackedFiles: new Set,
            snapshotSequence: 0
          }
        }
      }), w !== void 0) Qee(w, "session_clear");
    U7({})
  }
  if (c && u.size === 0 && S.size > 0 && s && ![...S].some((e) => Object.hasOwn(s().tasks, e) || G(e, A.get(e) ?? e)) && !Object.values(s().tasks).some((e) => vn(e) && [...A.values()].includes(e.agentId))) c.current = null;
  if (_ && h === 0) _.resetWebSearchBudget();
  if (s) {
    for (let e of s().mcp.clients)
      if (e.name === "ide" && e.type === "connected") {
        Qpe(e, void 0);
        let {
          clearServerCache: r
        } = import.meta.require("B:/~BUN/root/chunk-xk11xf74.js").mcpClientModule();
        await r(e.name, e.config).catch(() => {})
      }
  }
  ZCo();
  let te = K(),
    oe = C ? rd() ?? Lu() : void 0,
    re = w9(),
    N = h === 0 && u.size === 0 ? void 0 : FQ(),
    se = [...MQt()],
    ne = !1,
    ie = !1;
  if (RQt(), re) _fo();
  if (ne) nre(!0), zjt(!0);
  if (ie) iet(!0), aet(!0);
  if (N !== void 0) XGe(N);
  let k = me();
  if (we() || Sc() && Gve()) {
    let e = I === "clear" ? Vt(J) : null;
    $Y(o, k), Ei({
      type: "conversation_reset",
      new_conversation_id: k,
      uuid: k,
      ...I !== void 0 && {
        trigger: I
      },
      ...e !== null && {
        user_message_uuid: e
      },
      timestamp: new Date().toISOString()
    }), g("bridge_conversation_reset")
  }
  mst.of(o.host).conversationReset(), yield {
    type: "conversation_reset",
    newConversationId: k
  }, wGo(n), net();
  let L = Pa(K()),
    fe = ee || T && GSr(L);
  if (gzo({
      setCurrentAsParent: !0
    }), T && v !== void 0) yU(v);
  let pe = Promise.resolve(!0);
  if (G8e(), jmt(), Reo.of(o).reset(), Ft().needsAuthNoticedThisSession.clear(), bBe(o), a.CLAUDE_CODE_SESSION_ID) process.env.CLAUDE_CODE_SESSION_ID = K();
  await S9();
  for (let e of le?.pauseStampsCarriedAcrossClear(s?.().mcp.clients, se) ?? []) xfo({
    ...e,
    afterUuid: null
  }, n);
  if (Sfo(), wfo(L), await Lgo(K(), Lu(), n), C) await Oq(te, C, oe, "user", n);
  else if (v) {
    if (await Oq(K(), v, void 0, "user", n), j) await Mxe(K(), j, void 0, "user", n)
  }
  for (let e of U)
    if (e.status === "running") zHe(e.agentId);
  let {
    isCoordinatorMode: ae
  } = import.meta.require("B:/~BUN/root/chunk-mx0e3fc7.js");
  tG(ae() ? "coordinator" : "normal");
  let B = Cl();
  if (B) rN(B, n);
  if (c?.current) uwe(c.current, n);
  if (D) {
    if (D((e) => CZ(o, "clear", {
        signal: e,
        storageV5: n,
        credentials: O
      }).catch((r) => {
        if (Ve(r)) t(`SessionStart hooks after /clear aborted: ${H(r).message}`);
        else l(Ye(H(r), "SessionStart hooks after /clear threw"));
        return []
      })), eyr()) i(yFe);
    return
  }
  let x = await CZ(o, "clear", {
    storageV5: n,
    credentials: O
  });
  if (x.length > 0) i(() => x);
  if (eyr()) i(yFe)
}

function P(o) {
  return "isBackgrounded" in o && o.isBackgrounded === !1
}

function ce(o) {
  return vn(o) && SU(o) && (o.keepaliveReasons?.size ?? 0) === 0 && o.finalizing !== !0 && o.resuming !== !0 && (o.pendingMessages?.length ?? 0) === 0 && !G(o.id, o.agentId)
}

function G(o, i) {
  return Vn().resumesInFlight.has(i) || Fg().getCommandQueue().some((p) => p.mode === "task-notification" && (p.taskId === o || p.agentId === i))
}
var ue = new Set(["local_bash", "monitor_mcp", "monitor_ws", "mcp_task"]);

function veo(o) {
  return Object.values(o).some((i) => !P(i) && V6e.has(i.type) && !zs(i.status))
}
export {
  weo,
  veo
};
