// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Vt } from "B:/~BUN/root/chunk-9ka04m0y.js";
import { F, K, gzo, ke, Qr, wGo, net, we, nre, iet, zjt, aet, FQ, XGe, Sc } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { Ve, Ye, H } from "B:/~BUN/root/chunk-3aez4b53.js";
import { g } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { Vn, Ei, Cl } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { Ft } from "B:/~BUN/root/chunk-ejm0pmyj.js";
import { iut } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { y0n, zp, cZ, kxt, yq, eyr, Kat, Ok, Rp, zHe, vS, tNn, IXt, CZ, oOt, Txe, rd, S9, Oq, w9, _fo, Sfo, Pa, wfo, GSr, Zm, cwe, RQt, Mxe, yU, tG, uwe, xfo, MQt, rN, sG, Fg, Fb } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { Lu } from "B:/~BUN/root/chunk-9080897a.js";
import { xX } from "B:/~BUN/root/chunk-hkc0g0wr.js";
import { ZCo } from "B:/~BUN/root/chunk-9w4ppz44.js";
import { Pp } from "B:/~BUN/root/chunk-7j5tvnqj.js";
import { xp, V6e, SU, vn } from "B:/~BUN/root/chunk-k382hx6g.js";
import { bBe } from "B:/~BUN/root/chunk-8gzvb73z.js";
import { pIe, Umt, rje, Bmt, jmt } from "B:/~BUN/root/chunk-t63e78w2.js";
import { kin } from "B:/~BUN/root/chunk-ydtn2zrk.js";
import { G8e } from "B:/~BUN/root/chunk-8zz6429p.js";
import { Gve } from "B:/~BUN/root/chunk-1g2t7gtx.js";
import { Qpe } from "B:/~BUN/root/chunk-xyxdcn7p.js";
import { Lgo } from "B:/~BUN/root/chunk-nq10jsxs.js";
import { Foe } from "B:/~BUN/root/chunk-j5se4hdw.js";
import { tOn, nOn } from "B:/~BUN/root/chunk-5bdzgv0s.js";
import { $Y } from "B:/~BUN/root/chunk-8yntdh0k.js";
import { kbe } from "B:/~BUN/root/chunk-0rjqhdsp.js";
import { mst } from "B:/~BUN/root/chunk-c2s47cg2.js";
import { Reo } from "B:/~BUN/root/chunk-71vwhz3n.js";
import { keo } from "B:/~BUN/root/chunk-tgb9ye7p.js";
import { yFe } from "B:/~BUN/root/chunk-sz82pwm1.js";
import { U7 } from "B:/~BUN/root/chunk-f0nxnwqq.js";
import { KPn } from "B:/~BUN/root/chunk-bq1ehv15.js";
import { JPn } from "B:/~BUN/root/chunk-wyn3ry16.js";
import { zs } from "B:/~BUN/root/chunk-c2nm18xm.js";
import { Qee } from "B:/~BUN/root/chunk-stjjr4k8.js";
import { randomUUID as me } from "crypto";
var le = null;
async function* weo({
  session: session,
  setMessages: setMessages,
  readFileState: readFileState,
  sessionEnvVars: sessionEnvVars,
  toolState: toolState,
  memorySelector: memorySelector,
  getAppState: getAppState,
  setAppState: setAppState,
  sessionHooksRegistry: Y,
  dialogStore: dialogStore,
  isolationLatch: isolationLatch,
  taskRegistry: taskRegistry,
  clearedSessionTitle: clearedSessionTitle,
  storageV5: storageV5,
  credentials: credentials,
  deferSessionStartHooks: deferSessionStartHooks,
  releaseDeferredSessionStartHooks: releaseDeferredSessionStartHooks,
  resetTrigger: I,
  resetUserMessageUuid: resetUserMessageUuid
}) {
  JPn(session), Fb(sG), Bmt(), rje(), pIe();
  let Z = Txe();
  await oOt(session, "clear", {
    sessionHooks: Y,
    getAppState: getAppState,
    signal: AbortSignal.timeout(Z),
    storageV5: storageV5,
    credentials: credentials
  }), y0n("conversation_clear");
  let S = new Set(),
    A = new Map();
  if (getAppState && isolationLatch?.current != null) {
    let e = Object.values(getAppState().tasks).filter(item => !P(item) && (vn(item) || xp(item)));
    if (e.every(ce)) {
      for (let r of e) if (S.add(r.id), vn(r)) A.set(r.id, r.agentId);
    }
  }
  let R = e => P(e) || S.has(e.id),
    u = new Set(),
    U = [];
  if (getAppState) for (let e of Object.values(getAppState().tasks)) {
    if (R(e)) continue;
    if (vn(e)) u.add(e.agentId), U.push(e);else if (xp(e)) u.add(e.identity.agentId);
  }
  releaseDeferredSessionStartHooks?.(), xX("clear"), $Y(session, void 0), setMessages(e => {
    if (IXt() === "padded-countdown") tNn.of(session).rollOverContext("main", cZ(e));
    return [];
  });
  let V = getAppState ? Object.values(getAppState().tasks).some(item => !R(item) && V6e.has(item.type) && (item.status === "running" || vn(item) && vS(item))) : !1;
  keo(session, u, setAppState, toolState, storageV5, V);
  let b = ke();
  try {
    Rp(b);
  } catch {
    t(`/clear: originalCwd "${b}" no longer exists; falling back`);
    let e = Qr();
    if (e !== b) try {
      Rp(e);
    } catch {}
  }
  if (readFileState.clear(), kbe.of(session.host).reset(), Ok.of(session).discardAll(), Fb(e => e.mode === "task-notification" && typeof e.value === "string" && Kat(e.value) !== null), sessionEnvVars?.clear(), yq(memorySelector), isolationLatch && u.size === 0 && S.size === 0) isolationLatch.current = null;
  if (getAppState) nOn(getAppState);
  let v = Zm(K()),
    j = cwe(),
    T = !clearedSessionTitle && v !== void 0,
    ee = T && GSr(Pa(K())),
    h,
    w;
  if (Umt(), setAppState) {
    if (dialogStore?.dismissKind(Foe.kind), kin(new Set()), setAppState(e => {
      let tasks = {},
        M = [];
      for (let [d, m] of Object.entries(e.tasks)) {
        if (!R(m)) {
          tasks[d] = m;
          continue;
        }
        M.push(d);
        try {
          if (m.status === "running") {
            if (zp(m)) m.shellCommand?.kill(), m.shellCommand?.cleanup();
            if ("abortController" in m) m.abortController?.abort();
          }
        } catch (error) {
          l(error);
        }
        Pp(d);
      }
      h = F(Object.values(tasks), d => !ue.has(d.type) && !kxt(d)), w = e.activeGoal;
      let transcripts = e.transcripts;
      if (transcripts && M.length > 0) {
        transcripts = {
          ...transcripts
        };
        for (let d of M) delete transcripts[d];
      }
      return {
        ...tOn(e),
        tasks: tasks,
        ...(transcripts !== e.transcripts && {
          transcripts: transcripts
        }),
        ...(e.viewingAgentTaskId !== void 0 && M.includes(e.viewingAgentTaskId) && {
          viewingAgentTaskId: void 0,
          viewSelectionMode: "none"
        }),
        runningSubagents: h === 0 ? 0 : e.runningSubagents,
        ...{
          endedByModel: !1
        },
        attribution: iut(),
        cacheBreakerPhrase: void 0,
        sendMessagePins: {},
        agentNameRegistry: KPn(e.agentNameRegistry, tasks),
        frameUrls: {},
        standaloneAgentContext: T && e.standaloneAgentContext?.name ? {
          name: e.standaloneAgentContext.name
        } : void 0,
        fileHistory: {
          snapshots: [],
          trackedFiles: new Set(),
          snapshotSequence: 0
        }
      };
    }), w !== void 0) Qee(w, "session_clear");
    U7({});
  }
  if (isolationLatch && u.size === 0 && S.size > 0 && getAppState && ![...S].some(item => Object.hasOwn(getAppState().tasks, item) || G(item, A.get(item) ?? item)) && !Object.values(getAppState().tasks).some(item => vn(item) && [...A.values()].includes(item.agentId))) isolationLatch.current = null;
  if (taskRegistry && h === 0) taskRegistry.resetWebSearchBudget();
  if (getAppState) {
    for (let e of getAppState().mcp.clients) if (e.name === "ide" && e.type === "connected") {
      Qpe(e, void 0);
      let {
        clearServerCache: clearServerCache
      } = import.meta.require("B:/~BUN/root/chunk-xk11xf74.js").mcpClientModule();
      await clearServerCache(e.name, e.config).catch(() => {});
    }
  }
  ZCo();
  let te = K(),
    oe = clearedSessionTitle ? rd() ?? Lu() : void 0,
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
    let user_message_uuid = I === "clear" ? Vt(resetUserMessageUuid) : null;
    $Y(session, k), Ei({
      type: "conversation_reset",
      new_conversation_id: k,
      uuid: k,
      ...(I !== void 0 && {
        trigger: I
      }),
      ...(user_message_uuid !== null && {
        user_message_uuid: user_message_uuid
      }),
      timestamp: new Date().toISOString()
    }), g("bridge_conversation_reset");
  }
  mst.of(session.host).conversationReset(), yield {
    type: "conversation_reset",
    newConversationId: k
  }, wGo(storageV5), net();
  let L = Pa(K()),
    fe = ee || T && GSr(L);
  if (gzo({
    setCurrentAsParent: !0
  }), T && v !== void 0) yU(v);
  let pe = Promise.resolve(!0);
  if (G8e(), jmt(), Reo.of(session).reset(), Ft().needsAuthNoticedThisSession.clear(), bBe(session), a.CLAUDE_CODE_SESSION_ID) process.env.CLAUDE_CODE_SESSION_ID = K();
  await S9();
  for (let e of le?.pauseStampsCarriedAcrossClear(getAppState?.().mcp.clients, se) ?? []) xfo({
    ...e,
    afterUuid: null
  }, storageV5);
  if (Sfo(), wfo(L), await Lgo(K(), Lu(), storageV5), clearedSessionTitle) await Oq(te, clearedSessionTitle, oe, "user", storageV5);else if (v) {
    if (await Oq(K(), v, void 0, "user", storageV5), j) await Mxe(K(), j, void 0, "user", storageV5);
  }
  for (let e of U) if (e.status === "running") zHe(e.agentId);
  let {
    isCoordinatorMode: isCoordinatorMode
  } = import.meta.require("B:/~BUN/root/chunk-mx0e3fc7.js");
  tG(isCoordinatorMode() ? "coordinator" : "normal");
  let B = Cl();
  if (B) rN(B, storageV5);
  if (isolationLatch?.current) uwe(isolationLatch.current, storageV5);
  if (deferSessionStartHooks) {
    if (deferSessionStartHooks(signal => CZ(session, "clear", {
      signal: signal,
      storageV5: storageV5,
      credentials: credentials
    }).catch(r => {
      if (Ve(r)) t(`SessionStart hooks after /clear aborted: ${H(r).message}`);else l(Ye(H(r), "SessionStart hooks after /clear threw"));
      return [];
    })), eyr()) setMessages(yFe);
    return;
  }
  let x = await CZ(session, "clear", {
    storageV5: storageV5,
    credentials: credentials
  });
  if (x.length > 0) setMessages(() => x);
  if (eyr()) setMessages(yFe);
}
function P(o) {
  return "isBackgrounded" in o && o.isBackgrounded === !1;
}
function ce(o) {
  return vn(o) && SU(o) && (o.keepaliveReasons?.size ?? 0) === 0 && o.finalizing !== !0 && o.resuming !== !0 && (o.pendingMessages?.length ?? 0) === 0 && !G(o.id, o.agentId);
}
function G(o, i) {
  return Vn().resumesInFlight.has(i) || Fg().getCommandQueue().some(item => item.mode === "task-notification" && (item.taskId === o || item.agentId === i));
}
var ue = new Set(["local_bash", "monitor_mcp", "monitor_ws", "mcp_task"]);
function veo(o) {
  return Object.values(o).some(item => !P(item) && V6e.has(item.type) && !zs(item.status));
}
export { weo, veo };