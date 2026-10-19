// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { KFt, MMr, xOo, POo, EXe } from "B:/~BUN/root/chunk-8d9x5cx1.js";
import { b, c, pe } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Vt } from "B:/~BUN/root/chunk-9ka04m0y.js";
import { F, K4 } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { Ay, Y, SP, je } from "B:/~BUN/root/chunk-89mss1tj.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { DM, Jl, LNr, E, Ce, ue } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { _L } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { qne, bt, wQ, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { O } from "B:/~BUN/root/chunk-nggrknsv.js";
import { Pl, At, l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { oo, Dl, er } from "B:/~BUN/root/chunk-k9zm82w3.js";
import { X } from "B:/~BUN/root/chunk-yrjpmz6e.js";
import { Bs } from "B:/~BUN/root/chunk-yw21pggd.js";
import { es } from "B:/~BUN/root/chunk-pjgzz98k.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { bn as processExiting, ALo, i3n, We, xt } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { am, ek, O_ } from "B:/~BUN/root/chunk-2ypz4cxh.js";
import { im } from "B:/~BUN/root/chunk-hvvs3ef6.js";
import { OEe, bh } from "B:/~BUN/root/chunk-qp0344nb.js";
import { Jpt } from "B:/~BUN/root/chunk-ks7h6f0s.js";
import { ht, Op } from "B:/~BUN/root/chunk-2fccb5hn.js";
import { Xo } from "B:/~BUN/root/chunk-9tkh434c.js";
import { nLt, exr, mTo, tft as inboundReadReceipts, Vve, txr, wTo, wG } from "B:/~BUN/root/chunk-1g2t7gtx.js";
import { zae, can, jMr, $Kn, xUs, OUs, UKn, LOo, qX, WKn, zKn } from "B:/~BUN/root/chunk-7z3ndmqr.js";
import { lA } from "B:/~BUN/root/chunk-7ybsx93y.js";
import { RMs, zEo, AMs, MMs, DMs, Arn, eGn, iGn, Orn, Ypt, MC } from "B:/~BUN/root/chunk-fb07w30y.js";
import { fAt, Wso, LMn, Kso, Yso } from "B:/~BUN/root/chunk-4hz43zp6.js";
import { q8, qFe } from "B:/~BUN/root/chunk-dam0g4d0.js";
import { ATo, MTo, DTo, LTo, NTo, FTo, HTo } from "B:/~BUN/root/chunk-aqd86p9a.js";
import { jMn } from "B:/~BUN/root/chunk-ewvp948s.js";
import { HMn, z4e } from "B:/~BUN/root/chunk-2w966ew9.js";
import { Y8e, S0s } from "B:/~BUN/root/chunk-rnh5g2g4.js";
import { Bme, VX, FS as getTrustedDeviceToken, jae, UH, GFt, Hke } from "B:/~BUN/root/chunk-gygbhz84.js";
import { Kmt, DFt, Nae, FH, Ymt, mKn as refusal, XIr, Bin, JIr } from "B:/~BUN/root/chunk-rsxy354n.js";
import { Jfe, ZBe } from "B:/~BUN/root/chunk-xf25v2pj.js";
import { WFe, _it } from "B:/~BUN/root/chunk-3gsbhf9p.js";
import { ycs } from "B:/~BUN/root/chunk-0s9qz1dg.js";
import { Sit } from "B:/~BUN/root/chunk-81z6g28t.js";
import { Eue } from "B:/~BUN/root/chunk-wzrsgk7e.js";
import { UEo } from "B:/~BUN/root/chunk-f561y43v.js";
import { uO } from "B:/~BUN/root/chunk-bz6z3szz.js";
import { Nu } from "B:/~BUN/root/chunk-hdc8p5sh.js";
import { mb } from "B:/~BUN/root/chunk-97bdq2mm.js";
import { $X } from "B:/~BUN/root/chunk-6n2cf80v.js";
import { cje, QIr } from "B:/~BUN/root/chunk-vjc7rbsd.js";
import { Ght } from "B:/~BUN/root/chunk-4qc55bxf.js";
import { Kte } from "B:/~BUN/root/chunk-61xa715y.js";
import { Ia } from "B:/~BUN/root/chunk-9xr0x7gd.js";
import { si } from "B:/~BUN/root/chunk-b0487zs4.js";
import { an } from "B:/~BUN/root/chunk-31x8pa20.js";
import { o, v, M, u, _t, U } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { ye } from "B:/~BUN/root/chunk-shj1mfyk.js";
async function ns({
  heldEpoch: heldEpoch,
  send: send,
  maySendAgain: maySendAgain
}) {
  let C = heldEpoch,
    sessionEpoch;
  for (let followUps = 0;; followUps++) {
    let z = [],
      answer = await send(C, J => {
        z.push(J);
      });
    if (z.length === 0) return {
      ending: followUps === 0 ? "not_refused" : "followed_up",
      answer: answer,
      followUps: followUps,
      sessionEpoch: sessionEpoch
    };
    let A = z.at(-1);
    if (sessionEpoch = A ?? sessionEpoch, !maySendAgain()) return {
      ending: "withheld",
      answer: null,
      followUps: followUps,
      sessionEpoch: sessionEpoch
    };
    if (A === void 0 || followUps === 2) return {
      ending: "unfenced_fallback",
      answer: await send(void 0, () => {}),
      followUps: followUps,
      sessionEpoch: sessionEpoch,
      fallbackReason: A === void 0 ? "no_session_epoch" : "follow_up_cap"
    };
    C = A;
  }
}
var qa = 50;
async function os(n, h) {
  let S = h.now ?? Date.now,
    C = h.sleep ?? ((ie, me) => Y(ie, me)),
    H = h.pollMs ?? qa,
    L = Number.isFinite(h.budgetMs) ? h.budgetMs : 0,
    z = 0,
    q = 0,
    A = () => {
      try {
        return S() - z;
      } catch {
        return 0;
      }
    },
    J = [],
    sessionKind = "live",
    se = "connect",
    Le = ie => {
      try {
        h.log?.(ie);
      } catch {}
    },
    Te = () => {
      if (h.signal?.aborted) return "aborted";
      if (n.isSessionOver()) return "session_changed";
      if (n.hasFailedForGood()) return "bridge_failed";
      return S() >= q ? "budget_passed" : void 0;
    },
    rt = ie => {
      se = ie, J.push(ie);
    },
    Re = async ie => {
      for (;;) {
        let me = Te();
        if (me === "aborted" || me === "session_changed" || me === "bridge_failed") return me;
        if (ie()) return;
        if (me !== void 0) return me;
        await C(Math.min(H, q - S()), h.signal);
      }
    },
    ne = async ie => {
      let me = "pending",
        K,
        Be = ie.then(() => {
          me = "settled";
        }, He => {
          me = "threw", K = He;
        });
      await Promise.race([Be, Promise.resolve()]);
      for (;;) {
        let He = (() => me)();
        if (He === "threw") throw K;
        if (He === "settled") return;
        let st = Te();
        if (st !== void 0) return st;
        await Promise.race([Be, C(Math.min(H, q - S()), h.signal)]);
      }
    },
    nt = ie => {
      let me = ie.ok ? "uploads handed over, queues empty" : `${ie.reason} on ${ie.waitingOn}`;
      return Le(`[handoff-wait] end: ${me} after ${ie.elapsedMs} ms; session kind ${ie.sessionKind}; awaited ${J.join(", ") || "nothing"}`), ie;
    },
    he = (reason, waitingOn) => {
      if (reason === "budget_passed") try {
        h.onBudgetPassed?.(waitingOn);
      } catch {}
      return nt({
        ok: !1,
        reason: reason,
        sessionKind: sessionKind,
        waitingOn: waitingOn,
        elapsedMs: A()
      });
    },
    it = () => C(Math.max(0, Math.min(H, q - S())), h.signal),
    $e = async () => {
      if (sessionKind = n.sessionKind(), sessionKind !== "deferred") return;
      let ie = Te();
      if (ie !== void 0) return ie;
      return rt("release"), ne(n.release());
    };
  try {
    z = S(), q = z + L, sessionKind = n.sessionKind(), Le(`[handoff-wait] start: session kind ${sessionKind}, budget ${L} ms`);
    let ie = n.transport(),
      me = n.droppedBatches(ie),
      K = await $e();
    if (K !== void 0) return he(K, "release");
    let transcriptCopy = n.transcriptCopy;
    for (;;) {
      if (K = Te(), K !== void 0) return he(K, "connect");
      let He = n.transport(),
        st = He === ie ? me : 0,
        at = () => {
          let Xe = n.droppedBatches(He) - st;
          if (Xe > 0) Le(`[handoff-wait] batches dropped during the wait: ${Xe}`);
          return Xe > 0;
        };
      if (rt("connect"), K = await Re(n.isConnected), K !== void 0) return he(K, "connect");
      if (K = await $e(), K !== void 0) return he(K, "release");
      if (transcriptCopy !== void 0) {
        if (rt("transcript_copy_install"), K = await Re(transcriptCopy.isInstalledOnCurrentTransport), K !== void 0) return he(K, "transcript_copy_install");
        rt("transcript_copy_catch_up");
        let Xe = transcriptCopy.catchUp();
        if (transcriptCopy.wakeCatchUp(), K = await ne(Xe), K !== void 0) return he(K, "transcript_copy_catch_up");
        if (transcriptCopy.catchUp() !== Xe) {
          if (at()) return he("rows_dropped", "transcript_copy_catch_up");
          await it();
          continue;
        }
      }
      se = "first_history_flush";
      let dt = n.firstHistoryFlush();
      if (dt !== void 0) {
        if (J.push("first_history_flush"), K = await ne(dt), K !== void 0) return he(K, "first_history_flush");
      }
      if (se = "held_writes", n.holdsWrites()) {
        if (J.push("held_writes"), K = await Re(() => !n.holdsWrites()), K !== void 0) return he(K, "held_writes");
      }
      rt("upload_lanes");
      let Ot = !1;
      if (K = await ne(n.drainLanes(Math.max(0, q - S())).then(Xe => {
        Ot = Xe === !1;
      })), K !== void 0 || Ot) return he(K ?? "budget_passed", "upload_lanes");
      if (at()) return he("rows_dropped", "upload_lanes");
      if (n.transport() !== He || !n.isConnected() || n.holdsWrites()) {
        await it();
        continue;
      }
      break;
    }
    if (h.signal?.aborted) return he("aborted", "upload_lanes");
    if (n.isSessionOver()) return he("session_changed", "upload_lanes");
    if (n.hasFailedForGood()) return he("bridge_failed", "upload_lanes");
    return nt({
      ok: !0,
      reason: "handed_over",
      sessionKind: sessionKind,
      elapsedMs: A()
    });
  } catch (error) {
    Le(`[handoff-wait] ${se} threw: ${d(error)}`);
    try {
      h.onFault?.(se);
    } catch {}
    return he("fault", se);
  }
}
async function fcs() {
  return;
}
function PMn(n) {}
function OMn(n, h) {}
var Xt = "[account memory withheld from Remote Control; shown in the terminal session]",
  wo = "[tool result withheld from Remote Control; shown in the terminal session]",
  text_2 = "[message content withheld from Remote Control; shown in the terminal session]",
  Ga = "[command output withheld from Remote Control: it may repeat the conversation summary, which can include account memory; shown in the terminal session]",
  Va = "This session is being continued from a previous conversation that ran out of context. The summary of that conversation is not included here: it was withheld from Remote Control because it may include account memory, and can be read only in the terminal session where it was written. If you need details from the earlier conversation, ask the user.",
  Dr = 32768,
  Ka = new Set(["assistant", "user", "stream_event", "attachment", "system", "control_request"]),
  is = new Set(["cowork_memory_context", "account_memory_recall"]),
  za = "anthropic/memory.",
  ss = "account_memory_saved",
  Ya = "account_memory",
  To = ["type", "subtype", "uuid", "parentUuid", "logicalParentUuid", "timestamp", "sessionId", "cwd", "version", "gitBranch", "isSidechain", "agentId", "userType", "entrypoint", "teamName", "agentName", "promptId", "requestId", "isMeta", "isVirtual", "isCompactSummary", "repeatsCompactSummary", "isVisibleInTranscriptOnly", "sourceToolAssistantUUID"],
  as = ["role", "id", "type", "model", "stop_reason", "usage"],
  Ja = {
    string: ["type", "toolUseID", "processId", "hookName", "hookEvent", "toolName", "permissionMode", "host", "decision", "disposition", "traceparent"],
    number: ["exitCode", "durationMs", "timeoutMs"],
    boolean: ["timedOut", "unverified", "heldForServedCall", "accountMemoryBatch"]
  },
  Xa = ["content", "message", "stdout", "stderr", "lines"],
  ds = ["wireToolInputs", "wire_tool_inputs", "wireIngestContext", "wire_ingest_context"],
  Tn = new Set(["tool_use", "server_tool_use", "mcp_tool_use"]),
  Co = new Set(["tool_result", "mcp_tool_result"]),
  Qa = new Set(["PostToolBatch", "Elicitation", "ElicitationResult"]),
  Za = new Set(["PreToolUse", "PostToolUse", "PostToolUseFailure", "PostToolBatch", "PermissionRequest", "PermissionDenied", "Elicitation", "ElicitationResult"]),
  ed = "PostCompact",
  td = new Set(["text", "thinking", "redacted_thinking"]);
function ke(n) {
  return typeof n === "object" && n !== null;
}
class gt {
  max;
  ids = new Set();
  constructor(n) {
    this.max = n;
  }
  has(n) {
    return this.ids.has(n);
  }
  add(n) {
    if (this.ids.has(n)) return;
    if (this.ids.add(n), this.ids.size > this.max) {
      let h = this.ids.values().next().value;
      if (h !== void 0) this.ids.delete(h);
    }
  }
  delete(n) {
    return this.ids.delete(n);
  }
}
function Mo(n) {
  for (let h of WFe) {
    let S = n[h];
    if (!ke(S)) continue;
    let C = ke(S._meta) ? S._meta : S;
    if (Object.keys(C).some(item => item.startsWith(za))) return !0;
  }
  return !1;
}
function rd(n) {
  if (typeof n.name !== "string") return;
  if (n.type !== "mcp_tool_use") return n.name;
  return typeof n.server_name === "string" ? si(n.server_name, n.name) : void 0;
}
function Oo(n, h) {
  if (n.subtype === "can_use_tool") return typeof n.tool_name !== "string" || $X(n.tool_name, h, "live");
  if (n.subtype === "request_user_dialog") return typeof n.dialog_kind !== "string" || n.dialog_kind.includes(Ya);
  return !1;
}
function ko(n) {
  return n.isCompactSummary === !0 || n.is_compact_summary === !0;
}
function ls(n) {
  return n.repeatsCompactSummary === !0 || n.type === "user" && ke(n.message) && Orn(n.message.content);
}
function Ao(n) {
  let content = n.content;
  return Array.isArray(content) ? content.filter(ke) : void 0;
}
function nd(n) {
  return ke(n.message) ? Ao(n.message) : void 0;
}
function od(n, h) {
  return h.some(item => n[item] !== void 0);
}
function Br(n, h) {
  let S = {};
  for (let C of h) if (n[C] !== void 0) S[C] = n[C];
  return S;
}
function Ffr(n) {
  let placeAccountMemoryTool = n.placeAccountMemoryTool,
    S = new gt(Dr),
    C = new gt(Dr),
    H = new gt(Dr),
    L = new gt(Dr),
    z = new gt(Dr),
    q = !1,
    A = new Map(),
    J = Symbol("drop");
  function te(s, D) {
    let P = rd(s),
      ee = P === void 0 || $X(P, placeAccountMemoryTool, "live"),
      G = !ee && P !== void 0 && $X(P, placeAccountMemoryTool, "history");
    if (typeof s.id === "string") {
      if (ee) S.add(s.id);else if (G) C.add(s.id);
    }
    return ee || D === "history" && G;
  }
  function se(s, D) {
    return S.has(s) || D === "history" && C.has(s);
  }
  function Le(s, D) {
    if (!ke(s)) return;
    if (s.type === "progress") {
      if (ke(s.data)) Le(s.data.message, D);
      return;
    }
    rt(s), Te(s);
    for (let P of nd(s) ?? []) {
      if (!Tn.has(P.type) || typeof P.id !== "string") continue;
      if (H.add(P.id), te(P, D)) q = !0;
    }
  }
  function Te(s) {
    if (s.type === "attachment" && ke(s.attachment) && is.has(s.attachment.type) && s.attachment.content !== null || Mo(s)) q = !0;
  }
  function rt(s) {
    if (typeof s.uuid !== "string") return;
    if (ko(s)) L.add(s.uuid);else if (ls(s)) z.add(s.uuid);
  }
  function Re(s, D) {
    let P;
    try {
      P = D.type;
    } catch {
      P = void 0;
    }
    try {
      n.onDropped?.(s, typeof P === "string" && Ka.has(P) ? P : "other");
    } catch {}
  }
  function ne(s, D) {
    return Re(s, D), J;
  }
  function nt() {
    try {
      return n.mode() === "drop" ? "drop" : "redact";
    } catch {
      return "redact";
    }
  }
  function he(s) {
    return typeof s === "string" ? s : Xt;
  }
  function it(s, D) {
    return {
      type: s.type,
      id: he(s.id),
      name: he(s.name),
      ...(s.server_name !== void 0 && {
        server_name: he(s.server_name)
      }),
      input: D ? {} : Arn(s.input, 0, Xt, !0)
    };
  }
  function $e(s, content_2) {
    return {
      type: s.type,
      tool_use_id: he(s.tool_use_id),
      content: content_2,
      ...(s.is_error === !0 && {
        is_error: !0
      })
    };
  }
  function ie(s, D, P) {
    let ee = Mo(s),
      G = ke(s.message) ? s.message : void 0,
      le = G === void 0 ? void 0 : Ao(G);
    if (G === void 0 || le === void 0) {
      if (ee) return q = !0, D === "transcript" ? Be(s, []) : ne("memory_row", s);
      let _e = [...ds, ...WFe];
      if (!od(s, _e)) return s;
      let qe = {
        ...s
      };
      for (let ot of _e) delete qe[ot];
      return qe;
    }
    let Ee = !1,
      Ne = !1,
      Pt = !1,
      It = !1,
      Wr = new Set(),
      content_3 = le.map(item => {
        if (Tn.has(item.type)) {
          if (typeof item.id === "string") H.add(item.id);
          if (!te(item, P)) {
            if (typeof item.id === "string") Wr.add(item.id);
            return item;
          }
          return q = !0, Ee = !0, it(item, !1);
        }
        if (Co.has(item.type)) {
          let tool_use_id = item.tool_use_id,
            ot = Xt;
          if (typeof tool_use_id === "string" && se(tool_use_id, P)) ;else if (typeof tool_use_id === "string" && H.has(tool_use_id)) return Pt = !0, item;else if (typeof tool_use_id === "string" && ee) ;else ot = wo;
          if (ot === Xt) q = !0;
          return Ne = !0, $e(item, ot);
        }
        return item;
      });
    if (ee && !Ne) {
      if (!Pt) return q = !0, D === "transcript" ? Be(s, le) : ne("memory_row", s);
      It = !0;
    }
    if (!Ee && !Ne && !It) return s;
    if (nt() === "drop") return D === "transcript" ? Be(s, le) : ne("kill_switch", s);
    let vt = {
      ...s,
      message: {
        ...G,
        content: content_3
      }
    };
    for (let _e of _it) delete vt[_e];
    if (Ne || It) for (let _e of WFe) delete vt[_e];
    if (Ee) for (let _e of ds) {
      let qe = vt[_e];
      if (!ke(qe)) continue;
      let ot = Bs(qe, (Lo, Nn) => Wr.has(Nn));
      if (Object.keys(ot).length > 0) vt[_e] = ot;else delete vt[_e];
    }
    return vt;
  }
  function me(s, D, P) {
    let ee = ko(s) || typeof s.uuid === "string" && L.has(s.uuid);
    if (rt(s), !K()) return ie(s, D, P);
    let G = ke(s.message) ? s.message : void 0;
    if (nt() === "drop") return D === "transcript" ? Be(s, G === void 0 ? [] : Ao(G) ?? []) : ne("kill_switch", s);
    let text = ee ? Va : `<${Pl}>${Ga}</${Pl}>`,
      Ee = {
        ...s,
        message: {
          ...(G === void 0 ? {
            role: "user"
          } : Br(G, as)),
          content: G !== void 0 && typeof G.content === "string" ? text : [{
            type: "text",
            text: text
          }]
        }
      };
    delete Ee.modelOnlyText;
    for (let Ne of [...WFe, ..._it]) if (Ne !== "summarizeMetadata") delete Ee[Ne];
    return Ee;
  }
  function K() {
    if (q) return !0;
    try {
      return n.accountMemoryInPlay?.() !== !1;
    } catch {
      return !0;
    }
  }
  function Be(s, D) {
    let P = Br(s, To);
    if (s.type === "system") return P;
    if (ke(s.attachment)) return P.attachment = {
      type: s.attachment.type,
      version: null,
      content: null
    }, P;
    let ee = D.map(item => Tn.has(item.type) ? it(item, !0) : Co.has(item.type) ? $e(item, typeof item.tool_use_id === "string" && se(item.tool_use_id, "history") ? Xt : wo) : {
      type: "text",
      text: text_2
    });
    return P.message = {
      role: s.type === "assistant" ? "assistant" : "user",
      ...Br(ke(s.message) ? s.message : {}, as),
      content: ee.length > 0 ? ee : [{
        type: "text",
        text: text_2
      }]
    }, P;
  }
  function He(s, D) {
    if (s.type === "async_hook_response") {
      if (typeof s.toolName === "string") return $X(s.toolName, placeAccountMemoryTool, D);
      if (typeof s.hookEvent !== "string") return !0;
      return s.hookEvent === ed ? K() : Za.has(s.hookEvent);
    }
    return Qa.has(s.hookEvent) && s.accountMemoryBatch !== !1 || typeof s.toolUseID === "string" && se(s.toolUseID, D);
  }
  function st(s, D) {
    return typeof s.toolName === "string" && $X(s.toolName, placeAccountMemoryTool, D) || typeof s.toolUseID === "string" && se(s.toolUseID, D);
  }
  function at(s, D) {
    let P = Br(s, To),
      ee = {};
    for (let [G, le] of Object.entries(Ja)) for (let Ee of le) if (typeof D[Ee] === G) ee[Ee] = D[Ee];
    for (let G of Xa) if (D[G] !== void 0) ee[G] = Array.isArray(D[G]) ? [] : "";
    if (D.type === "hook_system_message") ee.content = text_2;
    if (D.blockingError !== void 0) ee.blockingError = {
      blockingError: "",
      command: ""
    };
    if (D.response !== void 0) ee.response = {};
    if (D.toolInput !== void 0) ee.toolInput = {};
    return P.attachment = ee, P;
  }
  function dt(s) {
    let D = A.get(s);
    if (D === void 0) D = new Map(), A.set(s, D);
    return D;
  }
  function Ot(s, D, P, ee, G, le) {
    let tool_use_id_2 = P.tool_use_id,
      Ne = Xt;
    if (typeof tool_use_id_2 === "string" && se(tool_use_id_2, le)) ;else if (Mo(s)) ;else if (typeof tool_use_id_2 === "string" && H.has(tool_use_id_2)) {
      if (G !== void 0) dt(ee).delete(G);
      return s;
    } else Ne = wo;
    if (G !== void 0) dt(ee).set(G, !0);
    if (Ne === Xt) q = !0;
    if (nt() === "drop") return ne("kill_switch", s);
    let Pt = {
      ...s,
      event: {
        ...D,
        content_block: $e(P, Ne)
      }
    };
    for (let It of [...WFe, ..._it]) delete Pt[It];
    return Pt;
  }
  function Xe(s, D) {
    let event = s.event;
    if (!ke(event)) return s;
    let ee = typeof s.parent_tool_use_id === "string" ? s.parent_tool_use_id : "";
    if (event.type === "message_start" || event.type === "message_stop") return A.delete(ee), s;
    let G = typeof event.index === "number" ? event.index : void 0;
    if (event.type === "content_block_start") {
      let le = ke(event.content_block) ? event.content_block : {};
      if (Co.has(le.type)) return Ot(s, event, le, ee, G, D);
      let Ee = Tn.has(le.type),
        Ne = Ee && te(le, D);
      if (Ee && typeof le.id === "string") H.add(le.id);
      if (Ne) q = !0;
      if (G !== void 0) if (Ee || td.has(le.type)) dt(ee).set(G, Ne);else dt(ee).delete(G);
      if (!Ne) return s;
      if (nt() === "drop") return ne("kill_switch", s);
      return {
        ...s,
        event: {
          ...event,
          content_block: it(le, !1)
        }
      };
    }
    if (event.type === "content_block_stop" && G !== void 0) return A.get(ee)?.delete(G), s;
    if (event.type === "content_block_delta") {
      let le = G === void 0 ? void 0 : A.get(ee)?.get(G);
      if (le === !0) return ne("memory_row", s);
      if (le === void 0) return ne("untracked_delta", s);
    }
    return s;
  }
  function Hr(s, D, P) {
    if (!ke(s)) return;
    switch (s.type) {
      case "stream_event":
        return Xe(s, P);
      case "attachment":
        if (!ke(s.attachment)) return s;
        if (is.has(s.attachment.type)) {
          if (s.attachment.content === null) return s;
          return q = !0, D === "transcript" ? Be(s, []) : ne("memory_row", s);
        }
        if (He(s.attachment, P)) {
          if (st(s.attachment, P)) q = !0;
          return D === "transcript" ? at(s, s.attachment) : ne("memory_row", s);
        }
        return s;
      case "system":
        if (s.subtype !== ss && s.persist !== !1 && ![s.tool_use_id, s.toolUseID].some(item => typeof item === "string" && se(item, P))) return s;
        if (s.subtype === ss || s.persist !== !1) q = !0;
        return D === "transcript" ? Be(s, []) : ne("memory_row", s);
      case "control_request":
        if (ke(s.request) && Oo(s.request, placeAccountMemoryTool)) {
          if (typeof s.request.tool_name === "string" || typeof s.request.dialog_kind === "string") q = !0;
          return ne("memory_row", s);
        }
        return s;
      default:
        return ko(s) || ls(s) || typeof s.uuid === "string" && (L.has(s.uuid) || z.has(s.uuid)) ? me(s, D, P) : ie(s, D, P);
    }
  }
  function xr(s, D) {
    if (D === "transcript") try {
      let P = Br(s, To);
      return P.message = {
        role: P.type === "assistant" ? "assistant" : "user",
        content: [{
          type: "text",
          text: text_2
        }]
      }, Re("unreadable", s), P;
    } catch {}
    return ne("unreadable", s);
  }
  function Bn(s, D, P) {
    try {
      return Hr(s, D, P) ?? s;
    } catch {
      return ke(s) ? xr(s, D) : J;
    }
  }
  function redact(s, D = "events", P = "history") {
    return s.flatMap(item => {
      let G = Bn(item, D, P);
      return G === J ? [] : [G];
    });
  }
  function note(s, D = "history") {
    for (let P of s) try {
      Le(P, D);
    } catch {}
  }
  return {
    note: note,
    redact: redact,
    withoutMemoryCallAttachments(s, D = "history") {
      return note(s, D), s.filter(item => {
        if (!ke(item)) return !0;
        try {
          if (item.type !== "attachment" || !ke(item.attachment) || !He(item.attachment, D)) return !0;
          if (st(item.attachment, D)) q = !0;
          return Re("memory_row", item), !1;
        } catch {
          return Re("unreadable", item), !1;
        }
      });
    },
    wrapInternalEventWriter(s, D = "history") {
      return (P, ee, G) => {
        let [le] = redact([ee], "transcript", D);
        return le === void 0 ? Promise.resolve() : s(P, le, G);
      };
    }
  };
}
var id = new Set(["auto_default", "auto_settings", "explicit", "sdk"]);
function Po(n) {
  return typeof n === "string" && id.has(n);
}
var backfillMessages = 200,
  sd = 50,
  ad = 500,
  Io = {
    scope: "off",
    backfillMessages: backfillMessages,
    eagerResult: !1
  },
  dd = f(() => u({
    scope: U(["off", "auto_default", "auto", "auto_and_sdk", "all"]).catch("off"),
    backfill_messages: v().int().transform(n => Math.min(ad, Math.max(sd, n))).catch(backfillMessages),
    eager_result: M().catch(!1)
  }));
function ld(n) {
  let h = dd().safeParse(n);
  if (!h.success) return Io;
  return {
    scope: h.data.scope,
    backfillMessages: h.data.backfill_messages,
    eagerResult: h.data.eager_result
  };
}
function fs() {
  return ld(E("tengu_noble_snowflake", null));
}
function jr(n, h) {
  if (h === void 0) return !1;
  switch (n) {
    case "off":
      return !1;
    case "auto_default":
      return h === "auto_default";
    case "auto":
      return h === "auto_default" || h === "auto_settings";
    case "auto_and_sdk":
      return h === "auto_default" || h === "auto_settings" || h === "sdk";
    case "all":
      return !0;
  }
}
function Do(n) {
  return n.type === "assistant" && Array.isArray(n.message.content) && n.message.content.some(item => item.type === "tool_use" && (item.name === im || item.name === uO));
}
function Cn(n) {
  return Wso(n) || n.type === "system" && "subtype" in n && (n.subtype === "post_turn_summary" || n.subtype === "task_started" || n.subtype === "task_updated" || n.subtype === "task_notification");
}
class Mn {
  _active = !1;
  _pending = [];
  _evictedCount = 0;
  get active() {
    return this._active;
  }
  get pendingCount() {
    return this._pending.length;
  }
  get pending() {
    return this._pending;
  }
  get evictedCount() {
    return this._evictedCount;
  }
  start() {
    this._active = !0;
  }
  end() {
    return this._active = !1, this._evictedCount = 0, this._pending.splice(0);
  }
  enqueue(...n) {
    if (!this._active) return !1;
    return this._pending.push(...n), !0;
  }
  evictOldest(n, h) {
    let S = F(this._pending, n) - h;
    if (S <= 0) return;
    this._evictedCount += S, this._pending = this._pending.filter(item => !n(item) || S-- <= 0);
  }
  drop() {
    this._active = !1, this._evictedCount = 0;
    let n = this._pending.length;
    return this._pending.length = 0, n;
  }
  deactivate() {
    this._active = !1;
  }
}
var _s = 3,
  ps = 3600000,
  hs = 24 * _s,
  ud = 24 * ps,
  cd = 600000,
  ms = 30000,
  Bo = 300000,
  gs = 5000,
  attempts = 14,
  exhaustedDetail = "could not reach the Remote Control server for about 30 minutes",
  vs = "the connection to the Remote Control server kept dropping after each reconnect",
  bs = `the connection to the Remote Control server dropped more than ${hs} times in 24 hours`,
  remintCap = {
    attempts: attempts,
    exhaustedDetail: exhaustedDetail
  };
function Rs() {
  let n = [],
    NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
  return {
    charge(S, C) {
      if (n = n.filter(item => S - item < ud), C && n.length >= hs) return "daily_exhausted";
      if (F(n, L => S - L < ps && (!C || L >= NEGATIVE_INFINITY)) >= _s) return "hourly_exhausted";
      return n.push(S), "charged";
    },
    noteHealthyBeat(S) {
      let C = n.at(-1);
      if (C !== void 0 && S - C >= cd) NEGATIVE_INFINITY = S;
    }
  };
}
var pd = f(() => _t({
  pid: v().int(),
  procStart: o().optional().catch(void 0),
  createdAt: v(),
  titleSha: o().optional(),
  usedAt: v().optional()
}));
function Ur(n) {
  if (typeof n !== "object" || n === null || Array.isArray(n)) return [];
  return Object.entries(n).flatMap(([h, S]) => {
    let C = pd().safeParse(S);
    if (!C.success) return [];
    let {
      procStart: procStart,
      ...L
    } = C.data;
    return [[h, procStart === void 0 ? L : {
      ...L,
      procStart: procStart
    }]];
  });
}
var hd = 300000,
  md = 2592000000,
  Es = 20,
  gd = 15000,
  vd = /^(session|cse)_[A-Za-z0-9_-]+$/;
async function ws() {
  if (At()) return !1;
  let {
    getFeatureValue_CACHED_MAY_BE_STALE: getFeatureValue_CACHED_MAY_BE_STALE
  } = await import("B:/~BUN/root/chunk-xvnv0v80.js");
  return getFeatureValue_CACHED_MAY_BE_STALE("tengu_bridge_placeholder_sweep", !0);
}
function jo(n) {
  let h = oo();
  return h.placeholderWriteChain = h.placeholderWriteChain.then(n, n), h.placeholderWriteChain;
}
function Ts(n, h, S) {
  return jo(async () => {
    if (!(await ws())) return;
    let procStart_2 = await O_(),
      H = {
        pid: process.pid,
        procStart: procStart_2,
        createdAt: Date.now(),
        ...(h !== void 0 && {
          titleSha: an(h)
        })
      };
    await Ce(L => {
      let z = Ur(L.replBridgePlaceholders),
        q = z.filter(([te]) => !Nr(te, n)),
        A = h === void 0 ? z.find(([te]) => Nr(te, n))?.[1] : void 0;
      q.push([n, {
        ...H,
        ...(A?.titleSha !== void 0 && {
          titleSha: A.titleSha
        }),
        ...(A?.usedAt !== void 0 && {
          usedAt: A.usedAt
        })
      }]), q.sort((itemA, itemB) => itemB[1].createdAt - itemA[1].createdAt);
      let J = q.slice(Es);
      if (J.length > 0) t(`[bridge:placeholder] evicting ${J.length} record(s) past cap: ${J.map(([te]) => te).join(", ")}`);
      return {
        ...L,
        replBridgePlaceholders: Object.fromEntries(q.slice(0, Es))
      };
    }, S);
  });
}
async function mcs() {
  try {
    let n = Ur(ue().replBridgePlaceholders).map(([, C]) => C),
      h = 1,
      S = new Set();
    for (let C of n) {
      if (C.pid === process.pid || S.has(C.pid)) continue;
      if (C.procStart !== void 0 ? Ia(C.pid) && (await ek(C.pid, C.procStart)) : Ia(C.pid)) S.add(C.pid), h++;
    }
    return h;
  } catch {
    return 0;
  }
}
function Fr(n, h) {
  return jo(async () => {
    await Ce(S => {
      let C = Object.keys(S.replBridgePlaceholders ?? {}).filter(item => Nr(item, n));
      if (C.length === 0) return S;
      let replBridgePlaceholders = {
        ...S.replBridgePlaceholders
      };
      for (let L of C) delete replBridgePlaceholders[L];
      return {
        ...S,
        replBridgePlaceholders: replBridgePlaceholders
      };
    }, h);
  });
}
function Cs(n, h) {
  return jo(async () => {
    await Ce(S => {
      let C = Ur(S.replBridgePlaceholders).filter(([L, z]) => Nr(L, n) && z.usedAt === void 0);
      if (C.length === 0) return S;
      let replBridgePlaceholders_2 = {
        ...S.replBridgePlaceholders
      };
      for (let [L, z] of C) replBridgePlaceholders_2[L] = {
        ...z,
        usedAt: Date.now()
      };
      return {
        ...S,
        replBridgePlaceholders: replBridgePlaceholders_2
      };
    }, h);
  }).catch(S => {
    t(`[bridge:placeholder] use stamp failed: ${d(S)}`, {
      level: "error"
    });
  });
}
function Nr(n, h) {
  return er(n) === er(h);
}
async function bd(n) {
  if (am(n.pid)) return !0;
  return Ia(n.pid) && !(await ek(n.pid, n.procStart));
}
function An(n) {
  if (n === "invalid" || n === "skipped_superseded" || n === "skipped_owner_changed") return !0;
  return typeof n === "number" && n < 500 && n !== 401 && n !== 408 && n !== 429;
}
function Ss(n) {
  if (!n) return;
  let h = Eue(n.replace(/\.\d+/, ""));
  if (Number.isNaN(h)) return;
  let S = /\.(\d+)/.exec(n)?.[1] ?? "";
  return `${h}.${S.replace(/0+$/, "")}`;
}
async function yd(n, h, S) {
  if (!(await bd(h))) return "keep";
  if (h.usedAt !== void 0) return kn("used_marker");
  let {
    session: session,
    notFound: notFound
  } = await Ypt(n, {
    baseUrl: S.baseUrl,
    getAccessToken: S.getAccessToken
  });
  if (notFound) return "remove";
  if (!session) return "keep";
  if (h.titleSha !== void 0) {
    if (typeof session.title !== "string") return t(`[bridge:placeholder] session GET carried no title for ${n}; keeping`), "keep";
    if (an(session.title) !== h.titleSha) return kn("retitled");
  }
  let connection_status = session.connection_status;
  if (connection_status !== void 0 && connection_status !== "disconnected") return connection_status === "connected" ? "keep_connected" : "keep_unreadable";
  let z = Ss(session.created_at),
    q = Ss(session.updated_at);
  if (z === void 0 || q === void 0) return "keep_unreadable";
  if (q !== z) return kn("updated_at"), connection_status === void 0 ? "remove_active_no_connection_state" : "remove_active_disconnected";
  let A = Ur(ue().replBridgePlaceholders).find(([te]) => Nr(te, n))?.[1];
  if (A === void 0) return "remove";
  if (A.pid !== h.pid || A.procStart !== h.procStart || A.createdAt !== h.createdAt) return "keep";
  if (A.usedAt !== void 0) return kn("used_marker");
  let J = await S.archive(n);
  if (!An(J)) return m("bridge_placeholder_sweep", typeof J === "number" ? `http_${J}` : J), "keep";
  return g("bridge_placeholder_sweep"), t(`[bridge:placeholder] archived orphaned placeholder ${n} (status=${J})`), "remove";
}
function Ms(n) {
  let h = oo();
  if (h.placeholderSweepStarted) return Promise.resolve();
  return h.placeholderSweepStarted = !0, (async () => {
    if (await Y(n.startDelayMs ?? gd), !(await ws())) return;
    let replBridgePlaceholders_3 = ue().replBridgePlaceholders;
    if (!replBridgePlaceholders_3) return;
    let C = n.skipSessionId ? er(n.skipSessionId) : void 0,
      H = Ur(replBridgePlaceholders_3),
      L = new Set(H.map(([A]) => A)),
      z = Object.keys(replBridgePlaceholders_3).filter(item => !L.has(item)),
      q = {
        keep_connected: 0,
        keep_unreadable: 0,
        remove_active_disconnected: 0,
        remove_active_no_connection_state: 0
      };
    for (let [A, J] of H) {
      let te = Date.now() - J.createdAt;
      if (Math.abs(te) < hd || er(A) === C) continue;
      if (!vd.test(A)) {
        z.push(A);
        continue;
      }
      let se = await yd(A, J, n);
      if (se !== "remove" && se !== "keep") q[se]++, t(`[bridge:placeholder] ${A}: ${se}`);
      if (!(se === "keep" || se === "keep_connected" || se === "keep_unreadable") || te > md) z.push(A);
    }
    if (Object.values(q).some(item => item > 0)) p("bridge_placeholder_sweep", "not_archived_on_server_state", q);
    if (z.length > 0) await Ce(A => {
      if (!A.replBridgePlaceholders) return A;
      let replBridgePlaceholders_4 = {
        ...A.replBridgePlaceholders
      };
      for (let te of z) delete replBridgePlaceholders_4[te];
      return {
        ...A,
        replBridgePlaceholders: replBridgePlaceholders_4
      };
    }, n.storageV5);
  })().catch(S => {
    t(`[bridge:placeholder] sweep failed: ${d(S)}`, {
      level: "error"
    });
  });
}
function kn(n) {
  return i("tengu_bridge_placeholder_used_session", {
    signal: c(n)
  }), "remove";
}
var Rd = 120000;
function On(n) {
  return n <= Rd ? b("le_2m") : b("gt_2m");
}
var ks = {
    init_retry_max_attempts: 3,
    init_retry_base_delay_ms: 500,
    init_retry_jitter_fraction: 0.25,
    init_retry_max_delay_ms: 4000,
    http_timeout_ms: 1e4,
    uuid_dedup_buffer_size: 2000,
    heartbeat_interval_ms: 20000,
    heartbeat_jitter_fraction: 0.1,
    token_refresh_buffer_ms: 300000,
    teardown_archive_timeout_ms: 1500,
    connect_timeout_ms: 15000,
    oauth_retry_max_attempts: 3,
    oauth_retry_base_delay_ms: 2000,
    min_version: "0.0.0"
  },
  Ed = f(() => u({
    init_retry_max_attempts: v().int().min(1).max(10).default(3),
    init_retry_base_delay_ms: v().int().min(100).default(500),
    init_retry_jitter_fraction: v().min(0).max(1).default(0.25),
    init_retry_max_delay_ms: v().int().min(500).default(4000),
    http_timeout_ms: v().int().min(2000).default(1e4),
    uuid_dedup_buffer_size: v().int().min(100).max(50000).default(2000),
    heartbeat_interval_ms: v().int().min(5000).max(30000).default(20000),
    heartbeat_jitter_fraction: v().min(0).max(0.5).default(0.1),
    token_refresh_buffer_ms: v().int().min(30000).max(1800000).default(300000),
    teardown_archive_timeout_ms: v().int().min(500).max(2000).default(1500),
    connect_timeout_ms: v().int().min(5000).max(60000).default(15000),
    oauth_retry_max_attempts: v().int().min(0).max(6).default(3),
    oauth_retry_base_delay_ms: v().int().min(100).max(1e4).default(2000),
    min_version: o().refine(n => {
      try {
        return DM(n, "0.0.0"), !0;
      } catch {
        return !1;
      }
    }).default("0.0.0")
  }));
async function No() {
  let n = await LNr("tengu_bridge_repl_v2_config", ks),
    h = Ed().safeParse(n);
  return h.success ? h.data : ks;
}
async function IMn() {
  let n = await No();
  if (n.min_version && DM({
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.303",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-18T20:20:57Z",
    GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
    HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "win32"
  }.VERSION, n.min_version)) return `Your version of Claude Code (${{
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.303",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-18T20:20:57Z",
    GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
    HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "win32"
  }.VERSION}) is too old for Remote Control.
Version ${n.min_version} or higher is required. Run \`claude update\` to update.`;
  return null;
}
function Uo(n, h, S) {
  switch (n) {
    case void 0:
      return "no close code received";
    case 4090:
      switch (h) {
        case "superseded_by_worker":
          return "another connection took over this session (usually another device or Claude Code session) \u2014 this device is standing down (code 4090)";
        case "session_not_active":
          return "this session was ended or archived from another device or app (code 4090)";
        case "session_not_found":
          return "the server no longer reports this session \u2014 it may have been deleted from another device or app (code 4090)";
        case "epoch_stale":
          return "the session worker registration went stale \u2014 no active worker holds it (code 4090)";
        default:
          return "this connection is no longer the active worker for the session (code 4090)";
      }
    case 4091:
      return "transport init failed (code 4091)";
    case 4092:
      return "connection dropped \u2014 no close reason from server (code 4092)";
    case 4093:
      return "presence heartbeats to the server kept failing (code 4093)";
    case 4094:
      return "worker credential expired or rejected (code 4094)";
    case 401:
      return "auth token expired (code 401)";
    case 403:
      {
        if (!cje(S?.rejectSource)) return "server rejected connection (code 403)";
        let C = QIr(S.rejectSource);
        if (S.streak === void 0) return C;
        let H = Math.max(1, Math.round(S.streak.streakMs / 60000));
        return `${C}, and kept refusing for ${H} ${O(H, "minute")}`;
      }
    case 404:
      return "session not found on server (code 404)";
    case 1002:
      return "server rejected the connection handshake (code 1002)";
    case 4001:
      return "session expired or not found on server (code 4001)";
    case 4003:
      return "server rejected credentials (code 4003)";
    default:
      return `code ${n}`;
  }
}
var Sd = 5000;
var As = 300,
  wd = 200,
  xs = 300,
  Td = 600,
  Cd = qne - xs - Td,
  Fo = 2000,
  Md = 3000,
  Ho = 100,
  kd = 5000,
  Os = 200,
  Ps = 20000,
  maxConsecutiveFailures = 8,
  maxBatchBytes = 1048576,
  requestTimeoutMs = 30000,
  Id = "tengu_encapsulated_dusk";
function mode() {
  return E(Id, !1) ? "drop" : "redact";
}
async function gcs(n) {
  let {
      baseUrl: baseUrl,
      orgUUID: orgUUID,
      title: title,
      reattachOrFail: reattachOrFail,
      reattachOrigin: reattachOrigin,
      reviveInitiated: reviveInitiated,
      neverArchive: neverArchive,
      onAuthProven: onAuthProven,
      noHistoryBackfill: noHistoryBackfill,
      onReattachGoneBounce: onReattachGoneBounce,
      neutralFallbackTitle: neutralFallbackTitle,
      onReattachPointerDead: onReattachPointerDead,
      ownerPin: ownerPin,
      onOwnerChanged: onOwnerChanged,
      getAccessToken: getAccessToken,
      onAuth401: onAuth401,
      classifyFailedOAuthRefresh: classifyFailedOAuthRefresh,
      onReadFreshOAuthToken: onReadFreshOAuthToken,
      onClassifyMissingOAuthToken: onClassifyMissingOAuthToken,
      onProactiveRefresh: onProactiveRefresh,
      toSDKMessages: toSDKMessages,
      initialHistoryCap: initialHistoryCap,
      initialMessages: initialMessages,
      conversationForPairing: conversationForPairing,
      placeAccountMemoryTool: placeAccountMemoryTool_2,
      accountMemoryInPlay: accountMemoryInPlay,
      onInboundMessage: onInboundMessage,
      onQueuedNotification: onQueuedNotification,
      onUserMessage: onUserMessage,
      onSessionEstablished: onSessionEstablished,
      onBeforePushTriggeringState: onBeforePushTriggeringState,
      onPermissionResponse: onPermissionResponse,
      onInterrupt: onInterrupt,
      onStopTask: onStopTask,
      onBackgroundTasks: onBackgroundTasks,
      onCancelAsyncMessage: onCancelAsyncMessage,
      getInitializeState: getInitializeState,
      getCommands: getCommands,
      isTurnLive: isTurnLive,
      onDialogKindsDeclared: onDialogKindsDeclared,
      onClientInitialize: onClientInitialize,
      onSetModel: onSetModel,
      onSetMaxThinkingTokens: onSetMaxThinkingTokens,
      onSetPermissionMode: onSetPermissionMode,
      onApplyFlagSettings: onApplyFlagSettings,
      onRenameSession: onRenameSession,
      onSetColor: onSetColor,
      onFileSuggestions: onFileSuggestions,
      onReadFile: onReadFile,
      onGetWorkspaceDiff: onGetWorkspaceDiff,
      onSideQuestion: onSideQuestion,
      onGetContextUsage: onGetContextUsage,
      answerSharedControlRequest: answerSharedControlRequest,
      onMcpAuthenticate: onMcpAuthenticate,
      onMcpOauthCallbackUrl: onMcpOauthCallbackUrl,
      onMcpReconnect: onMcpReconnect,
      onForkConversation: onForkConversation,
      onStateChange: onStateChange,
      onBridgeInjectedMcp: onBridgeInjectedMcp,
      onProjectsBindingHint: onProjectsBindingHint,
      outboundOnly: outboundOnly,
      tags: tags,
      sessionGroupingId: sessionGroupingId,
      requestedSessionGroupingId: requestedSessionGroupingId,
      gitRepoUrl = null,
      branch = "",
      defaultBranch = null,
      nameSourceForCreate: nameSourceForCreate,
      onTransportPersistenceReady: onTransportPersistenceReady,
      onTransportPersistenceTeardown: onTransportPersistenceTeardown,
      onTransportRebuilt: onTransportRebuilt,
      remoteControlOrigin: remoteControlOrigin,
      getBackfillMessages: getBackfillMessages,
      reattachSessionId: reattachSessionId,
      reattachSequenceNum: reattachSequenceNum,
      credentialsStore: credentialsStore,
      workSecretCredentials: workSecretCredentials,
      storageV5: storageV5
    } = n,
    Ze = Ffr({
      mode: mode,
      placeAccountMemoryTool: placeAccountMemoryTool_2,
      accountMemoryInPlay: accountMemoryInPlay,
      onDropped: (e, r) => {
        if (t(`[remote-bridge] Kept one '${r}' row's content out of the upload for account memory (reason: ${e})`), e === "unreadable") m("bridge_account_memory_redaction", `unredactable_${r}_row`);
      }
    });
  Ze.note(conversationForPairing?.() ?? initialMessages ?? []);
  let Un = (e, r = "history") => Ze.redact(toSDKMessages(Ze.withoutMemoryCallAttachments(e, r)), "events", r),
    neverArchive_2 = workSecretCredentials !== void 0 ? !0 : neverArchive,
    Fn = title,
    reattach = !!reattachSessionId,
    Q = await No(),
    Go = !1,
    Gr = e => {
      if (!workSecretCredentials) ownerPin?.noteAcceptedToken(e);
    },
    Vo = "work-secret-lane",
    Ko = () => workSecretCredentials ? Vo : getAccessToken(),
    Hn = workSecretCredentials ? () => {
      let e = Go ? "refresh" : "initial";
      return workSecretCredentials.register(e, {
        stillWanted: () => !I && Pe === void 0,
        reuseHeldAboveS: Math.ceil(Q.token_refresh_buffer_ms / 1000) + 60
      }).then(r => {
        if (r !== null && !Nae(r)) Go = !0;
        return r;
      });
    } : jd,
    Vr = getAccessToken();
  if (!Vr) return t("[remote-bridge] No OAuth token"), m("bridge_connect", "bridge_connect_no_token"), null;
  let getAccessToken_2 = () => getAccessToken() ?? Vr,
    zo = () => ownerPin?.ownerToken() ?? getAccessToken() ?? Vr,
    recoveryAttemptedTokens = new Set(),
    {
      getOriginalCwd: getOriginalCwd
    } = await import("B:/~BUN/root/chunk-amdj78pb.js"),
    {
      getMainLoopModel: getMainLoopModel
    } = await import("B:/~BUN/root/chunk-sc0eap70.js"),
    Kr = requestedSessionGroupingId ?? sessionGroupingId,
    sessionGroupingId_2 = sessionGroupingId,
    Yo = !1;
  async function Jo() {
    let repositoryUrl = gitRepoUrl ? void 0 : await nameSourceForCreate?.(),
      r = repositoryUrl ? {
        repositoryUrl: repositoryUrl
      } : void 0;
    Yo = r !== void 0;
    let a = {},
      y = async () => {
        if (gitRepoUrl) {
          let {
              buildGitSessionContext: buildGitSessionContext
            } = await import("B:/~BUN/root/chunk-0gaqxbnf.js"),
            {
              reportGitSessionContext: reportGitSessionContext
            } = await import("B:/~BUN/root/chunk-aaa8anxs.js"),
            {
              report: report
            } = await buildGitSessionContext(gitRepoUrl, branch, defaultBranch ?? void 0);
          reportGitSessionContext(report);
        }
      },
      R = w => xo((B, N) => DFt(baseUrl, B, Fn, Q.http_timeout_ms, tags, gitRepoUrl ? {
        gitRepoUrl: gitRepoUrl,
        branch: branch,
        defaultBranch: defaultBranch ?? void 0
      } : r, getOriginalCwd(), getMainLoopModel(), w, a, N).then(x => {
        if (typeof x === "string") ownerPin?.noteAcceptedToken(B);
        return x;
      }), "createCodeSession", Q, {
        getAccessToken: getAccessToken_2,
        onAuth401: onAuth401,
        recoveryAttemptedTokens: recoveryAttemptedTokens
      }),
      _ = await R(Kr);
    if (Kmt(_) && _.reason === "grouping_rejected" && requestedSessionGroupingId === void 0 && Kr !== void 0) {
      let w = await R(void 0);
      if (typeof w === "string") {
        if (sessionGroupingId_2 = void 0, await y(), r) PMn("connect");
        return X("info", "bridge_repl_v2_grouping_dropped", {
          status: _.status
        }), t("[bridge:core] persisted Project no longer available; recreated session outside it"), t(`[remote-bridge] Created session ${w}`), X("info", "bridge_repl_v2_session_created"), w;
      }
      if (r && !FH(w)) OMn("connect", w);
      return _;
    }
    if (typeof _ === "string") {
      if (sessionGroupingId_2 = Kr, await y(), r) PMn("connect");
      t(`[remote-bridge] Created session ${_}`), X("info", "bridge_repl_v2_session_created");
    }
    return _;
  }
  function Zs(e) {
    if (e?.reason === "grouping_rejected" && Kr !== void 0) {
      let r = e.detail ? `: ${e.detail}` : "";
      return requestedSessionGroupingId !== void 0 ? `Couldn't create a session in the requested Project (server ${e.status}${r}). The Project may not exist or may not be available to you.` : `Couldn't recreate the session in its previous Project (server ${e.status}${r}) \u2014 the Project may have been deleted or is no longer available.`;
    }
    if (e?.reason === "request_rejected") return `Session creation failed (server ${e.status}) \u2014 see debug log`;
    if (e?.reason === "malformed_response") return KFt;
    return "Session creation failed \u2014 see debug log";
  }
  function Qo(e) {
    if (e !== null && e.terminal === !1) {
      onStateChange?.("failed", $n, "auth"), lA("v2_session_create_oauth_rejected", void 0, !0), m("bridge_connect", "bridge_connect_create_oauth_rejected");
      return;
    }
    if (Yo) OMn("connect", Kmt(e) ? e : null);
    onStateChange?.("failed", Zs(Kmt(e) ? e : null)), lA("v2_session_create_failed", void 0, !0), m("bridge_connect", "bridge_connect_session_create_failed");
  }
  let ea = "JWT refresh failed: no OAuth token \u2014 run /login",
    $n = "Claude.ai login was rejected \u2014 run /login, then /remote-control",
    ta = "Claude.ai login expired \u2014 run /login, then /remote-control",
    ra = "Claude.ai login expired \u2014 run /login to restore Remote Control",
    na = "Signed out of Claude \u2014 run /login, then /remote-control",
    Wn = !1,
    Yr = !1;
  if (reattachSessionId && MC(reattachSessionId)) {
    if (reattachOrFail) return t(`[remote-bridge] Reattach-or-fail: ${reattachSessionId} is teleported; failing terminally instead of minting fresh`), X("info", "bridge_repl_v2_revive_reattach_teleported"), onReattachPointerDead?.(), onStateChange?.("failed", EXe, "terminal"), lA("v2_revive_reattach_teleported", void 0, !0), m("bridge_connect", "bridge_connect_reattach_teleported"), null;
    t(`[remote-bridge] Reattach suppressed for teleported session ${reattachSessionId} \u2014 minting fresh`), Wn = !0, reattach = !1;
  }
  let k;
  if (workSecretCredentials) {
    if (!reattachSessionId || Wn) return t("[remote-bridge] Work-secret attach has no session to reattach; failing", {
      level: "error"
    }), onStateChange?.("failed", "Remote Control could not attach: the host supplied a session credential but no session to attach to", "terminal"), lA("v2_work_secret_no_session", void 0, !0), m("bridge_connect", "bridge_connect_work_secret_no_session"), null;
    k = reattachSessionId, t(`[remote-bridge] Attaching to session ${k} with the host's work secret`), X("info", "bridge_repl_v2_work_secret_attach");
  } else if (reattachSessionId && !Wn) {
    k = reattachSessionId, t(`[remote-bridge] Reattaching to session ${k}`), X("info", "bridge_repl_v2_session_reattached");
    let e = await xo((r, a) => Fd(k, baseUrl, r, orgUUID, Q.http_timeout_ms, a, credentialsStore), "unarchiveSession", Q, {
      getAccessToken: getAccessToken_2,
      onAuth401: onAuth401,
      recoveryAttemptedTokens: recoveryAttemptedTokens
    });
    if (e?.outcome === "elevated_auth") {
      t(`[remote-bridge] Reattach ${k}: unarchive elevated-auth (${e.reason}) \u2014 surfacing the failure, pointer preserved`), X("info", "bridge_repl_v2_reattach_elevated_auth");
      let r = e.reason === "untrusted_device" && !VX(),
        {
          outcome: outcome,
          ...y
        } = e,
        R = r ? {
          terminal: !0,
          reason: "request_rejected",
          status: 403
        } : {
          terminal: !0,
          ...y
        };
      return onStateChange?.("failed", IAe(R), kt(R)), lA("v2_reattach_elevated_auth", void 0, !0), m("bridge_connect", "bridge_connect_reattach_elevated_auth"), null;
    }
    if (e?.outcome === "gone" && reattachOrFail) return t(`[remote-bridge] Reattach-or-fail: ${k} gone (unarchive ${e.status}); failing terminally instead of minting fresh`), X("info", "bridge_repl_v2_revive_reattach_gone"), onReattachGoneBounce(), onReattachPointerDead?.(), onStateChange?.("failed", EXe, "terminal"), lA("v2_revive_reattach_gone", void 0, !0, {
      reattach_origin: pe(reattachOrigin),
      revive_initiated: reviveInitiated === !0
    }), m("bridge_connect", "bridge_connect_reattach_gone"), null;
    if (e?.outcome === "gone") {
      t(`[remote-bridge] Reattach ${k} gone (unarchive ${e.status}); minting fresh session`), Yr = !0, onReattachGoneBounce(), Fn = neutralFallbackTitle ?? `${ZBe()}-${Kte()}`, X("info", "bridge_repl_v2_reattach_fallback", {
        via: "unarchive",
        status: e.status
      }), i("tengu_bridge_repl_env_expired_fresh_session", {
        v2: !0,
        via: c("unarchive"),
        status: typeof e.status === "number" ? e.status : c(e.status),
        reattach_origin: pe(reattachOrigin),
        revive_initiated: reviveInitiated === !0
      });
      let r = await Jo();
      if (typeof r !== "string") return Qo(r), null;
      k = r, reattach = !1;
    }
  } else {
    if (reattachOrFail) return t("[remote-bridge] Reattach-or-fail: no reattach pointer for this init; failing terminally instead of minting fresh"), X("info", "bridge_repl_v2_revive_fresh_refused"), onReattachGoneBounce(), onStateChange?.("failed", EXe, "terminal"), lA("v2_revive_fresh_refused", void 0, !0), m("bridge_connect", "bridge_connect_revive_fresh_refused"), null;
    let e = await Jo();
    if (typeof e !== "string") return Qo(e), null;
    k = e;
  }
  if (reattach && requestedSessionGroupingId !== void 0 && requestedSessionGroupingId !== sessionGroupingId_2) t("[bridge:core] --project ignored: reattached to existing session (Project is fixed at create)");
  if (neverArchive_2 && reattach) Fr(k, storageV5);else if (!outboundOnly) Ts(k, reattach ? void 0 : Fn, storageV5);
  Ms({
    baseUrl: baseUrl,
    getAccessToken: getAccessToken_2,
    skipSessionId: k,
    archive: e => Qt(e, baseUrl, getAccessToken_2(), orgUUID, Q.http_timeout_ms, void 0, storageV5),
    storageV5: storageV5
  });
  let oa = Bo + 60000,
    ct;
  function qn() {
    ct = void 0;
  }
  function Gn(e) {
    if (!Nae(e) || !Dn(e)) {
      if (e !== null && !Nae(e) && !FH(e)) qn();
      return e;
    }
    if (!exr()) return e;
    let r = Date.now();
    if (ct === void 0 || r - ct.lastAtMs > oa) ct = {
      startedAtMs: r,
      lastAtMs: r,
      refusals: 0
    };
    ct.lastAtMs = r, ct.refusals++;
    let a = r - ct.startedAtMs;
    if (ct.refusals > 1 && a >= Kso) return t(`[remote-bridge] /bridge refused by ${e.source} ${ct.refusals}\xD7 over ${Math.round(a / 1000)}s with nothing reaching Anthropic since \u2014 treating as a verdict`), e;
    return t(`[remote-bridge] /bridge 403 not written by Anthropic's origin (${e.source}) \u2014 treating as unreachable`), X("warn", "bridge_repl_v2_bridge_403_nonorigin", {
      source: e.source
    }), null;
  }
  function Jr(e, r) {
    if (I || Pe !== void 0 || ae !== r) return Promise.resolve(null);
    let a = () => Kn(k, e).then(y => {
      if (ae !== r) return y;
      let R = Gn(y);
      if (R !== null && !Nae(R) && !FH(R)) Gr(e), po();
      return R;
    });
    if (!Wt()) return a();
    return dr("owner_changed_recovery").then(y => y || I || Pe !== void 0 || ae !== r ? null : a());
  }
  let Zo = Vr,
    ce = await xo((e, r) => (Zo = e, Hn(k, baseUrl, e, Q.http_timeout_ms, r, credentialsStore)), "fetchRemoteCredentials", Q, {
      getAccessToken: getAccessToken_2,
      onAuth401: onAuth401,
      recoveryAttemptedTokens: recoveryAttemptedTokens
    });
  if (reattach && ce === null) t(`[remote-bridge] Reattach ${k}: /bridge failed after unarchive; surfacing retry prompt`), X("info", "v2_remote_creds_reattach_transient");
  if (!ce || Nae(ce) || FH(ce)) {
    let e = ce === null ? reattach ? "Couldn't reconnect to your Remote Control session. Retry, or start a fresh session without --resume." : "Remote credentials fetch failed \u2014 see debug log" : FH(ce) ? ta : IAe(ce),
      r = ce === null ? reviveInitiated ? "auth" : "terminal" : FH(ce) ? "auth" : kt(ce),
      a = ce === null ? reattach ? "v2_remote_creds_reattach_transient" : "v2_remote_creds_failed" : FH(ce) ? "v2_remote_creds_oauth_rejected" : Dn(ce) ? `v2_remote_creds_request_rejected_${ce.source}` : `v2_remote_creds_${ce.reason}`;
    if (t(`[remote-bridge] Creds failed; onStateChange ${onStateChange ? "set" : "UNSET"}, msg="${e}"`), onStateChange?.("failed", e, r), lA(a, void 0, !0), m("bridge_connect", "bridge_connect_creds_failed"), !reattach) Fs(k, () => Qt(k, baseUrl, zo(), orgUUID, Q.http_timeout_ms, void 0, storageV5));
    return null;
  }
  t(`[remote-bridge] Fetched bridge credentials (expires_in=${ce.expires_in}s)`), Gr(Zo), onSessionEstablished?.(k);
  let worker_epoch = ce.worker_epoch;
  function ei(e) {
    worker_epoch = Math.max(worker_epoch, e);
  }
  function Kn(e, r) {
    if (workSecretCredentials || !mTo()) return Hn(e, baseUrl, r, Q.http_timeout_ms, void 0, credentialsStore);
    let a = worker_epoch,
      y = ae;
    return ns({
      heldEpoch: a,
      send: (expectedEpoch, onRefused) => Hn(e, baseUrl, r, Q.http_timeout_ms, void 0, credentialsStore, expectedEpoch === void 0 ? void 0 : {
        expectedEpoch: expectedEpoch,
        onRefused: onRefused
      }),
      maySendAgain: () => {
        if (MC(k)) return !1;
        return !I && !re && Pe === void 0 && ae === y;
      }
    }).then(R => {
      let answer_2 = R.answer;
      try {
        let w = answer_2 !== null && !Nae(answer_2) && !FH(answer_2) ? answer_2.worker_epoch : void 0;
        if (w !== void 0 && !I && ae === y) ei(w);
        if (R.ending !== "not_refused" && $t()) {
          let accepted = w !== void 0;
          i("tengu_bridge_repl_attach_conflict", {
            outcome: c(R.ending === "followed_up" ? accepted ? "resolved" : "unresolved" : R.ending),
            accepted: accepted,
            stated_epoch: a,
            session_epoch: R.sessionEpoch,
            follow_ups: R.followUps,
            fallback_reason: pe(R.ending === "unfenced_fallback" ? R.fallbackReason : void 0)
          });
        }
      } catch (error) {
        l(error), X("error", "bridge_repl_v2_attach_fence_failed");
      }
      return answer_2;
    });
  }
  let sessionUrl = qFe(ce.api_base_url, k);
  t(`[remote-bridge] v2 session URL: ${sessionUrl}`);
  function ia() {
    return E("tengu_bridge_selfheal_heartbeats", !0);
  }
  function zn() {
    return E("tengu_bridge_recovery_patience", !0);
  }
  function ri() {
    return E("tengu_dazzling_garden", !0);
  }
  function ni() {
    return E("tengu_ccr_stream_event_flush_ms", fAt);
  }
  function oi() {
    return E("tengu_ccr_stream_first_flush_ms", 0);
  }
  function ii() {
    return E("tengu_ccr_no_subscriber_flush_ms", 0);
  }
  function jt() {
    return outboundOnly ? 0 : E("tengu_ccr_no_subscriber_hold_ms", 0);
  }
  function Zt() {
    return jt() > 0 || transport.mayHoldUploads?.() === !0;
  }
  function sseKeepaliveMaxIntervalSeconds() {
    return E("tengu_ccr_sse_keepalive_max_interval_s", 0);
  }
  function ai() {
    return outboundOnly ? !1 : E("tengu_ccr_drop_unwatched_stream_events", !1);
  }
  function tr() {
    return outboundOnly ? Io : fs();
  }
  function aa() {
    return E("tengu_ccr_idle_heartbeat", !1);
  }
  function da() {
    return E("tengu_ccr_reconnect_beat", !1);
  }
  function la() {
    return E("tengu_ccr_reactivation_beat", !1);
  }
  function ua() {
    return E("tengu_ccr_skip_redundant_heartbeat", !1);
  }
  let idleTracker = LMn(),
    gzipRequestBodyFetch = Jpt("ccr_worker", storageV5);
  function di() {
    return {
      heartbeatIntervalMs: Q.heartbeat_interval_ms,
      heartbeatJitterFraction: Q.heartbeat_jitter_fraction,
      onRequestAuthOk: onRequestAuthOk,
      causeTypedCloseCodes: !0,
      selfHealHeartbeats: ia(),
      advertiseHeartbeatProbeSupport: aa(),
      beatOnStaleReconnect: da(),
      idleTracker: idleTracker,
      beatOnReactivation: la(),
      skipRedundantHeartbeats: ua(),
      uploadTrim: () => E("tengu_ccr_upload_trim", {}),
      uploadHoldMarker: () => E("tengu_ccr_upload_hold_marker", !1),
      eventHoldEnabled: () => E("tengu_ccr_event_hold_enabled", !0),
      processExiting: processExiting,
      streamEventFlushIntervalMs: ni(),
      streamEventFirstFlushMs: oi(),
      sseConnectTimeoutMs: () => q8().sse_connect_timeout_ms,
      gzipRequestBodyFetch: gzipRequestBodyFetch,
      noSubscriberStreamEventFlushIntervalMs: ii(),
      noSubscriberUploadHoldMs: jt(),
      dropUnwatchedStreamEvents: ai(),
      sseKeepaliveMaxIntervalSeconds: sseKeepaliveMaxIntervalSeconds,
      outboundOnly: outboundOnly,
      nonOrigin403Retry: exr(),
      inboundReadReceipts: inboundReadReceipts,
      onNonOriginRejectionRecovered: onNonOriginRejectionRecovered,
      retainUndeliveredOnClose: !0,
      internalEventUploader: {
        maxConsecutiveFailures: maxConsecutiveFailures,
        maxBatchBytes: maxBatchBytes,
        requestTimeoutMs: requestTimeoutMs
      }
    };
  }
  let transport;
  try {
    transport = await Yso({
      ...di(),
      sessionUrl: sessionUrl,
      ingressToken: ce.worker_jwt,
      sessionId: k,
      epoch: ce.worker_epoch,
      initialSequenceNum: reattach ? reattachSequenceNum : void 0,
      getAuthToken: () => ce.worker_jwt
    });
  } catch (error) {
    if (t(`[remote-bridge] v2 transport setup failed: ${d(error)}`, {
      level: "error"
    }), onStateChange?.("failed", `Transport setup failed: ${d(error)}`), lA("v2_transport_setup_failed", void 0, !0), m("bridge_connect", "bridge_connect_transport_failed"), !reattach) Fs(k, () => Qt(k, baseUrl, zo(), orgUUID, Q.http_timeout_ms, void 0, storageV5));
    return null;
  }
  t(`[remote-bridge] v2 transport created (epoch=${ce.worker_epoch})`), onStateChange?.("ready");
  let {
      worker_jwt: Yn,
      worker_epoch: worker_epoch_2,
      api_base_url: api_base_url
    } = ce,
    Ld = null,
    $d = new Set(),
    fa = new Set(),
    _a = !1,
    Wd = !1,
    Xr = 0;
  function qd() {
    Xr++, _a = !1, fa = new Set();
  }
  let pa = null;
  function Gd(e, r = !1) {}
  function Vd() {
    pa = null;
  }
  function canAdoptInjectedMcp() {
    return !1;
  }
  function Kd(e, r, a = !1) {
    return {
      added: [],
      removed: []
    };
  }
  function ma(e, r = !1) {}
  let onMcpSetServers = e => {
      if (Object.keys(e).length === 0) return onProjectsBindingHint?.(), {
        ok: !0,
        added: [],
        removed: [],
        errors: {},
        unknownServerCount: 0
      };
      return {
        ok: !1,
        error: "Server-injected MCP servers are disabled for this Remote Control session"
      };
    },
    Nt = 0,
    Ut = !1;
  function requestInjectedMcpReassert() {
    if (I) return;
    let e = Date.now();
    if (e - Nt < Sd) {
      Ut = !0;
      return;
    }
    Nt = e, Ut = !1, St.refreshNow(k);
  }
  function ci() {
    if (I || !Ut) return;
    Ut = !1, Nt = Date.now(), St.refreshNow(k);
  }
  function Qr() {
    try {
      ba("withdrawn");
    } catch (error) {
      l(error), m("bridge_webagent_mcp_inject", "relinquish_threw");
    }
  }
  function ba(e) {}
  let rr = new qX(Q.uuid_dedup_buffer_size),
    Zr = new Set();
  if (initialMessages) for (let e of initialMessages) Zr.add(e.uuid), rr.add(e.uuid);
  let ya = new qX(Q.uuid_dedup_buffer_size),
    cancellableRequests = new Map(),
    Jn = new qX(Q.uuid_dedup_buffer_size),
    Ae = new Mn(),
    ge = new Mn(),
    Xn = 0,
    Ft = !1,
    yt = !1,
    nr = new Map(),
    Ra = 64,
    br = reattach,
    Qn,
    yr,
    Oe = !reattach && !noHistoryBackfill && !Yr && jr(tr().scope, remoteControlOrigin) ? "deferred" : "live",
    en = remoteControlOrigin,
    tn = new qX(Q.uuid_dedup_buffer_size),
    Rt,
    Rr = {},
    I = !1,
    rn,
    recovery_in_flight = !1,
    _i = 0,
    ae = 0;
  function pi() {
    return _i++, ae = _i, recovery_in_flight = !0, or = Date.now(), Er = !1, ae;
  }
  function hi(e) {
    if (ae !== e) return !1;
    return ae = 0, recovery_in_flight = !1, or = 0, mi(), !0;
  }
  let nn = !1;
  function mi() {
    if (!nn || I || re) {
      nn = !1;
      return;
    }
    if (nn = !1, ft !== void 0 || !transport.isConnectedStatus()) return;
    if (Ae.active || ge.active) Kt();
    yo();
  }
  function gi() {
    ae = 0, recovery_in_flight = !1, or = 0, mi();
  }
  let or = 0,
    Er = !1,
    vi = Q.init_retry_max_attempts * Q.http_timeout_ms + (Q.init_retry_max_attempts - 1) * Q.init_retry_max_delay_ms,
    Ea = Q.oauth_retry_base_delay_ms * (2 ** Q.oauth_retry_max_attempts - 1) + Q.oauth_retry_max_attempts * vi,
    bi = 2 * (15000 + vi + Ea),
    ir = 0,
    yi = 3,
    on = 0,
    Ri = Rs();
  function onRequestAuthOk() {
    on = 0, Ri.noteHealthyBeat(Date.now()), qn(), onAuthProven?.();
  }
  let sn = !1,
    ft;
  function sr() {
    clearTimeout(ft), ft = void 0;
  }
  let Ht = !1;
  function dn(e) {
    Ht = !1, onStateChange?.("reconnecting", e);
  }
  function Sr() {
    Ht = !1, onStateChange?.("connected");
  }
  function ve(e, r = "terminal") {
    Ht = !0, sr(), tt = void 0, ln(), bo?.end(), onStateChange?.("failed", e, r);
  }
  function Ei() {
    let retryNow = Zt();
    return Promise.all([transport.flush({
      retryNow: retryNow
    }), retryNow && transport.flushInternalEvents?.({
      retryNow: retryNow
    })]).then(() => {});
  }
  function wr(e = As) {
    let r = Y(e),
      a = Promise.race([Ei().then(() => !0), r.then(() => !1)]),
      y = Promise.race([transport.flushDeliveryAcks?.({
        retryNow: !0
      }), r]);
    return Promise.all([a, y]).then(([R]) => R);
  }
  async function Si(e, r = Date.now()) {
    let a = transport.getUploadBacklog?.(),
      hold_preflush_landed = await wr(Cd),
      R = {
        hold_preflush_ms: Date.now() - r,
        hold_preflush_landed: hold_preflush_landed,
        hold_preflush_inflight_age_ms: a?.oldestInFlightMs,
        hold_preflush_lane_in_backoff: a?.backingOff
      };
    if (!hold_preflush_landed) p("ccr_no_subscriber_hold", e);
    return R;
  }
  function wi() {
    let e = transport.getUploadBacklog?.();
    return {
      unsent_client_events_at_close: e?.unsentClientEvents,
      unsent_internal_events_at_close: e?.unsentInternalEvents
    };
  }
  function ln() {
    let e = Ae.end(),
      r = ge.end().map(item => item.frame);
    Ft = !1, Ti(e.length + r.length, r, transport.discardUndeliveredEvents?.() ?? []);
  }
  function Ti(queued, r, a) {
    if (queued === 0 && a.length === 0) return;
    X("warn", "bridge_repl_v2_client_events_lost", {
      queued: queued,
      undelivered: a.length
    }), p("bridge_repl", "client_events_lost_at_dead_end", {
      queued: queued,
      undelivered: a.length
    });
    let y = [...a.map(item => item.payload.subtype), ...r.map(item => item.type === "system" && "subtype" in item ? item.subtype : void 0)],
      has_terminal_bookend = y.includes("task_notification"),
      has_level = y.includes("background_tasks_changed");
    if (has_terminal_bookend || has_level) p("ccr_task_status_publish", "status_events_lost_at_dead_end", {
      has_terminal_bookend: has_terminal_bookend,
      has_level: has_level
    });
  }
  let be,
    Pe,
    Lt = !1,
    ar,
    Et,
    tt,
    we = !1,
    Tr,
    re = !1,
    Cr;
  function $t() {
    return !0;
  }
  function pt(e, r, a = !0) {
    if (a) ar = void 0, Et = void 0;
    if (!Lt || !$t()) return !1;
    if (r === void 0) p("bridge_presence", e);else p("bridge_presence", e, r);
    return !0;
  }
  function Me(e, r) {
    if (ar = void 0, Et = void 0, we = !0, !$t()) return !1;
    if (!Lt) return m("bridge_connect", "bridge_connect_died_before_presence"), !1;
    if (r === void 0) m("bridge_presence", e);else m("bridge_presence", e, r);
    return !0;
  }
  let un = !1;
  function onNonOriginRejectionRecovered(e) {
    if (I || re || we) return;
    if (t(`[remote-bridge] SSE stream live again after ${e.attempts} non-origin 403(s) over ${Math.round(e.streakMs / 1000)}s (source=${e.source})`), pt(Bd[e.source], {
      attempts: e.attempts,
      streak_s: Math.round(e.streakMs / 1000),
      first_in_episode: un ? 0 : 1,
      recovery_bucket: On(e.streakMs)
    }, !1)) un = !0;
  }
  function Zn(e) {
    if (!cje(e?.rejectSource)) {
      Me(Is(e));
      return;
    }
    if (Me(Is(e), {
      ...(e.streak !== void 0 && {
        attempts: e.streak.attempts,
        streak_s: Math.round(e.streak.streakMs / 1000)
      }),
      first_in_episode: un ? 0 : 1
    })) un = !0;
  }
  function Ci(e) {
    if (MC(k)) return;
    let r = be === void 0 ? void 0 : Ds(be.code, be.cause);
    if (Pe !== void 0 || be === void 0 || r === void 0 || Er && js(r)) return;
    if (Pe = r, t(`[remote-bridge] ${e} latched a stashed supersession close (${be.code}/${be.cause ?? "uncaused"}) \u2014 archive suppressed`), !we) {
      if (be.code === 403) Zn(be.detail);else if (be.code === 404) Me("transport_closed_404");else pt("transport_closed_4090"), we = !0;
      tt = void 0;
    }
  }
  function eo(e) {
    if (!$t()) return;
    switch (e.leg) {
      case "ok":
        g("bridge_token_refresh");
        return;
      case "sad":
        p("bridge_token_refresh", e.code);
        return;
      case "bad":
        m("bridge_token_refresh", e.code);
        return;
    }
  }
  function Mi(e) {
    if (!txr()) return;
    let r = ALo();
    if (r === void 0 || r.generation <= e) return Ai();
    return ki(r.reason);
  }
  function ki(e) {
    switch (e) {
      case "signed_out":
        return "host_signed_out";
      case "identity_changed":
        return "host_account_changed";
      case "transient":
      case "refresh_failed":
        return;
    }
  }
  function Ai() {
    if (Et === void 0) return;
    if (Et.generation === i3n()) return Et.code;
    let e = ALo();
    return e === void 0 ? void 0 : ki(e.reason);
  }
  function Oi(e) {
    return e === "host_signed_out" ? xOo : POo;
  }
  function Pi(e) {
    return e === "host_signed_out" ? "auth" : "terminal";
  }
  function to() {
    return ownerPin !== void 0 && !I && !re && Vve();
  }
  function Wt() {
    return to() && ownerPin !== void 0 && ownerPin.identityLooksChanged();
  }
  async function Ii(e, r) {
    if (re) return "changed";
    if (!to() || ownerPin === void 0) return "unchanged";
    let a = await ownerPin.confirmChanged(r);
    if (a === "changed") return await Ta(e), "changed";
    return re ? "changed" : a;
  }
  async function dr(e) {
    return (await Ii(e)) === "changed";
  }
  async function Mr(e, r) {
    if (Wt() && (await dr(e))) return !0;
    return I || ae !== r;
  }
  async function Ta(e) {
    if (I || re || ownerPin === void 0) return;
    if (re = !0, Cr?.(), Cr = void 0, St.cancelAll(), gi(), onOwnerChanged?.(), sn = !1, Ci("owner_changed"), be = void 0, clearTimeout(ur), sr(), fn?.(), fn = void 0, ji(), Ni(), zEo(owner), MC(k)) {
      t(`[remote-bridge] Signed-in account changed under teleported session ${k} (${e}) \u2014 latched only`), ln(), vn(), Qr(), transport.close();
      return;
    }
    let episode_already_dead = we || Pe !== void 0;
    if (t(`[remote-bridge] Signed-in account changed under ${k} (${e}${episode_already_dead ? ", episode already dead" : ""}) \u2014 stopping`), X("info", "bridge_repl_v2_owner_changed"), !episode_already_dead) pt(e), we = !0, ve(MMr, "terminal"), transport.write(LOo(k, "account_changed")), await wr(Zt() ? Q.teardown_archive_timeout_ms : As).catch(() => {
      return;
    });else if (!Ht) ve(MMr, "terminal");else ln();
    if (vn(), Qr(), !I) transport.close();
    if (Pe !== void 0) return;
    let a;
    if (neverArchive_2) a = "skipped_host_owned", t(`[remote-bridge] Owner-changed settle left host-owned session ${k} unarchived`);else {
      let y = await Qt(k, baseUrl, ownerPin.ownerToken(), orgUUID, Q.teardown_archive_timeout_ms, void 0, storageV5);
      a = Ns(y, Pe), t(`[remote-bridge] Owner-changed settle archived ${k} with the owner's credential (archive=${y})`);
    }
    if ($t()) i("tengu_bridge_owner_changed", {
      site: c(e),
      archive_status: c(a),
      episode_already_dead: episode_already_dead
    });
  }
  function Di() {
    if (Pe !== void 0) return Pe;
    if (re) return "owner_changed";
    return;
  }
  function ro() {
    if (ownerPin !== void 0 && Vve() && ownerPin.identityLooksChanged()) return {
      token: ownerPin.ownerToken(),
      source: "pinned_owner"
    };
    return {
      token: getAccessToken(),
      source: "current"
    };
  }
  let cn = reattach,
    Ie = new Map(),
    zd = void 0,
    qt = new Set(),
    no = new gt(256),
    Bi = new gt(Q.uuid_dedup_buffer_size);
  function io(e, r) {
    if (qt.delete(e), Ie.delete(e) && r) zKn(e);
  }
  function so() {
    let e,
      r = !1;
    for (let [a, y] of Ie) {
      if (qt.has(a)) continue;
      r = !0, e = y.details ?? e;
    }
    if (r) xe("requires_action", e);else xe("running");
  }
  let ao,
    xe = (e, pending_action) => {
      if (onBeforePushTriggeringState && !re && (e === "requires_action" || e === "idle")) onBeforePushTriggeringState();
      if (transport.reportState(e, pending_action), e === "requires_action" && pending_action) {
        cn = !0;
        let a = [...Ie.values()].flatMap(item => item.details ? [item.details] : []).reverse();
        transport.reportMetadata({
          pending_action: pending_action,
          pending_actions: UEo(pending_action, a.filter(item => item !== pending_action))
        });
      } else if (cn) cn = !1, transport.reportMetadata({
        pending_action: null,
        pending_actions: null
      });
      if (e === "running" && ao !== "running") {
        if (transport.reportMetadata({
          post_turn_summary: null,
          recap: null
        }), DTo(), Oe === "deferred") delete Rr.post_turn_summary, delete Rr.recap;
      }
      ao = e;
    };
  function getPendingPrompts() {
    return qt.clear(), [...Ie.values()].map(item => item.request);
  }
  let fn, lo, _n, uo;
  if (gitRepoUrl) (async () => {
    let {
        isNestedGitLabProject: isNestedGitLabProject,
        parseGitRemote: parseGitRemote,
        parseGitHubRepository: parseGitHubRepository
      } = await import("B:/~BUN/root/chunk-1fs5q5r1.js"),
      {
        addWatchedRepo: addWatchedRepo,
        removeWatchedRepo: removeWatchedRepo,
        getCachedBranchForRepo: getCachedBranchForRepo,
        onRepoBranchChange: onRepoBranchChange,
        getRemoteUrlForDir: getRemoteUrlForDir
      } = await import("B:/~BUN/root/chunk-8fg38ht5.js"),
      N = await import("B:/~BUN/root/chunk-s8h29tpb.js"),
      x = parseGitRemote(gitRepoUrl);
    if (x && isNestedGitLabProject(x)) return;
    let j = x ? `${x.owner}/${x.name}` : parseGitHubRepository(gitRepoUrl);
    if (!j) return;
    let oe = x ? `${x.host}/${x.owner}/${x.name}` : `github.com/${j}`,
      W = getOriginalCwd();
    if (await addWatchedRepo(W), I || re) {
      removeWatchedRepo(W);
      return;
    }
    let Z,
      de = reattach,
      fe = reattach,
      Ke = 0,
      ze = !1,
      mt = !1,
      yn = async () => {
        ze = !0;
        try {
          do {
            mt = !1;
            let Ue = Ke;
            if (I || re) return;
            let Jt = getOriginalCwd();
            if (Jt !== W) {
              if (removeWatchedRepo(W), W = Jt, await addWatchedRepo(Jt), I || re) {
                removeWatchedRepo(Jt);
                return;
              }
            }
            let Mt = await getCachedBranchForRepo(Jt);
            if (Ue !== Ke) {
              mt = !0;
              continue;
            }
            if (I || et("branch_metadata")) return;
            if (Mt === void 0) {
              if (Z !== null) if (Z = null, de) de = !1, transport.reportMetadata({
                current_branches: {
                  [j]: null
                },
                worktree_state: {
                  [j]: null
                }
              });else transport.reportMetadata({
                current_branches: {
                  [j]: null
                }
              });
              continue;
            }
            if (E("tengu_ccr_handoff_metadata", !1)) {
              let [Wa, En] = await Promise.all([N.collectWorktreeState(Jt, Mt), N.withCollectTimeout(getRemoteUrlForDir(Jt)).catch(() => null)]);
              if (Ue !== Ke) {
                mt = !0;
                continue;
              }
              if (I || et("branch_metadata")) return;
              let Sn = En ? parseGitRemote(En) : null,
                Zi = En ? parseGitHubRepository(En) : null,
                ts = (Sn ? `${Sn.host}/${Sn.owner}/${Sn.name}` : Zi ? `github.com/${Zi}` : null) === oe,
                So = ts ? Mt : null,
                Je = ts ? Wa : null,
                rs = Je ? JSON.stringify([So, Je.head_sha, Je.unpushed_count, Je.is_dirty, Je.mid_operation, Je.upstream_exists, Je.has_submodules, Je.submodules_unverified, Je.has_lfs]) : JSON.stringify([So]);
              if (rs === Z) continue;
              if (Z = rs, t(`[remote-bridge] worktree_state \u2192 ${j}: ${JSON.stringify(Je)}`), de = Je !== null, Je !== null) fe = !0;
              transport.reportMetadata({
                current_branches: {
                  [j]: So
                },
                worktree_state: {
                  [j]: Je
                }
              });
              continue;
            }
            if (de) {
              de = !1, Z = Mt, transport.reportMetadata({
                current_branches: {
                  [j]: Mt
                },
                worktree_state: {
                  [j]: null
                }
              });
              continue;
            }
            if (Mt === Z) continue;
            Z = Mt, transport.reportMetadata({
              current_branches: {
                [j]: Mt
              }
            });
          } while (mt);
        } catch (error) {
          t(`[remote-bridge] current_branches emit failed: ${d(error)}`);
        } finally {
          ze = !1;
        }
      };
    lo = () => {
      if (Z = void 0, de = fe, Ke++, ze) mt = !0;
    };
    let Ct = Promise.resolve(),
      Ye = () => {
        if (ze) mt = !0;else Ct = yn();
        return Ct;
      };
    uo = () => je(Ye().then(() => transport.flushWorkerState?.() ?? !0), N.WORKTREE_COLLECT_TIMEOUT_MS + Fo), _n = () => void Ye();
    let Rn = onRepoBranchChange(_n);
    fn = () => {
      Rn(), removeWatchedRepo(W);
    }, Ye();
  })().catch(e => t(`[remote-bridge] current_branches setup failed: ${d(e)}`));
  let ji = K4(() => idleTracker.noteActivity()),
    Ni = Jl(() => {
      transport.setStreamEventFlushIntervalMs?.(ni()), transport.setStreamEventFirstFlushMs?.(oi()), transport.setNoSubscriberStreamEventFlushIntervalMs?.(ii()), transport.setNoSubscriberUploadHoldMs?.(jt()), transport.setDropUnwatchedStreamEvents?.(ai()), Fa();
    }),
    owner = {};
  RMs({
    owner: owner,
    sessionId: k,
    report: (e, r) => transport.reportDelivery(e, r)
  });
  let lr = new Map(),
    Ui = !onUserMessage,
    Fi = !1,
    pn = "initial",
    remint_attempts = 0,
    ur;
  function Hi(e) {
    if (I) return;
    if (i("tengu_bridge_repl_connect_timeout", {
      v2: !0,
      elapsed_ms: Q.connect_timeout_ms,
      cause: c(e)
    }), m("bridge_connect", "bridge_connect_timeout"), we) ;else if (Object.values(Ve).some(item => item.cause === e)) tt = "recovery_connect_timeout";else if (e === "proactive_refresh") tt = "refresh_connect_timeout";
  }
  async function Ma(e) {
    if (!onAuth401) return "rejected";
    try {
      if (await onAuth401(e)) return "recovered";
    } catch (error) {
      t(`[remote-bridge] Proactive forced OAuth refresh threw: ${d(error)}`, {
        level: "error"
      });
    }
    if (!ri() || !classifyFailedOAuthRefresh) return "rejected";
    return classifyFailedOAuthRefresh();
  }
  let ka = 3,
    _o,
    early_retry = 0;
  function po() {
    _o = void 0, early_retry = 0;
  }
  function xi(e) {
    return e !== void 0 && e === _o && ri();
  }
  let St = Ght({
    refreshBufferMs: Q.token_refresh_buffer_ms,
    onExhausted: e => {
      if (!I && !we) eo({
        leg: "bad",
        code: "chain_exhausted_no_oauth"
      });
      if (recovery_in_flight || I) return;
      if (Ht) {
        t(`[remote-bridge] Token refresh chain exhausted for ${e} \u2014 terminal state already showing, not repainting`);
        return;
      }
      t(`[remote-bridge] Token refresh chain exhausted for ${e} \u2014 surfacing auth failure`, {
        level: "error"
      }), onStateChange?.("failed", "OAuth token unavailable \u2014 run /login to restore Remote Control", "auth");
    },
    getAccessToken: async () => {
      if (re) return;
      if (Wt()) {
        let a = we;
        if (await dr("owner_changed_refresh")) {
          if (re && !a) eo({
            leg: "sad",
            code: "owner_changed"
          });
          return;
        }
      }
      if (workSecretCredentials) return Vo;
      let e = getAccessToken(),
        r = xi(e);
      try {
        if (r) await onReadFreshOAuthToken?.();else await onProactiveRefresh?.();
      } catch (error) {
        t(`[remote-bridge] scheduler token refresh failed: ${d(error)}`, {
          level: "error"
        });
      }
      return getAccessToken() ?? e;
    },
    onRefresh: (e, r) => {
      (async () => {
        if (Pe !== void 0 || re) {
          t(`[remote-bridge] Proactive refresh skipped: session ${re ? "stopped for an owner change" : "superseded"}`);
          return;
        }
        if (recovery_in_flight || I) {
          if (t("[remote-bridge] Recovery already in flight, skipping proactive refresh"), recovery_in_flight && Nt !== 0) Ut = !0;
          return;
        }
        if (MC(e)) {
          t(`[remote-bridge] Proactive refresh suppressed for teleported session ${e}`);
          return;
        }
        let a = pi(),
          y = we,
          R = !1,
          _,
          w,
          B,
          N,
          x = !1;
        function j(W, Z, de = "refresh_credentials_rejected", code) {
          if (I) return;
          if (tt !== void 0 && be === void 0) Me(tt), tt = void 0;else if (!y) ar = de, Et = code === void 0 ? void 0 : {
            code: code,
            generation: i3n()
          };
          _ = W, w = "refresh_credentials_rejected", B = Z;
        }
        async function oe() {
          if (!(await Mr("owner_changed_refresh", a))) return !1;
          if (re) N = {
            leg: "sad",
            code: "owner_changed"
          };
          return !0;
        }
        try {
          if (await oe()) return;
          let W = xi(r);
          if (!W) po();
          let Z = Date.now(),
            de = Xr,
            fe = await _r(() => {
              if (W) return Promise.resolve({
                terminal: !1,
                reason: "oauth_rejected"
              });
              if (I || Pe !== void 0 || ae !== a) return Promise.resolve(null);
              return Kn(e, r).then(ze => I || ae !== a ? ze : Gn(ze));
            }, "fetchRemoteCredentials (proactive)", Q);
          if (I || ae !== a) return;
          if (FH(fe)) {
            if (t(W ? "[remote-bridge] Proactive cycle: bearer already rejected by /bridge \u2014 retrying the forced OAuth refresh without re-registering" : "[remote-bridge] Proactive /bridge re-mint rejected (oauth_rejected) \u2014 attempting forced OAuth refresh"), !W) X("error", "bridge_repl_v2_proactive_oauth_rejected");
            if (await oe()) return;
            let ze = i3n(),
              mt = await Ma(r),
              yn = getAccessToken() ?? r;
            if (await oe()) return;
            if (mt === "unreachable") {
              if (t("[remote-bridge] Proactive forced OAuth refresh got no verdict (token endpoint unreachable); keeping transport, a later cycle retries the refresh"), !W) N = {
                leg: "sad",
                code: "refresh_deferred_transient"
              };
              _o = r;
              let rearmed = early_retry < ka;
              if (MC(e)) rearmed = !1;
              if (rearmed) early_retry++, St.scheduleFromExpiresIn(e, 0);
              X("info", "bridge_repl_v2_proactive_refresh_unreachable", {
                early_retry: early_retry,
                rearmed: rearmed
              });
              return;
            }
            let Ct = mt === "recovered";
            if (Ct) po();
            let Ye = Ct ? await _r(() => {
              if (I || Pe !== void 0 || ae !== a) return Promise.resolve(null);
              return Kn(e, yn).then(Ue => I || ae !== a ? Ue : Gn(Ue));
            }, "fetchRemoteCredentials (proactive post-refresh)", Q) : null;
            if (I || ae !== a) return;
            if (Ct && Ye === null) {
              if (t("[remote-bridge] Proactive post-refresh re-mint failed (transient); fallback refresh will retry"), Pe === void 0) N = {
                leg: "sad",
                code: "post_refresh_remint_null"
              };
              return;
            }
            if (Nae(Ye)) {
              N = {
                leg: "bad",
                code: `post_refresh_credentials_${kt(Ye)}`
              }, j(IAe(Ye), kt(Ye), Pn("refresh", Ye));
              return;
            }
            if (Ye === null || FH(Ye)) {
              let code_2 = Ct ? void 0 : Mi(ze);
              if (code_2 !== void 0) {
                N = {
                  leg: "sad",
                  code: code_2
                }, X("info", "bridge_repl_v2_proactive_host_declined"), j(Oi(code_2), Pi(code_2), "refresh_credentials_rejected", code_2);
                return;
              }
              N = {
                leg: "bad",
                code: Ct ? "oauth_rejected_after_refresh" : onAuth401 ? "oauth_rejected_refresh_failed" : "oauth_rejected_no_refresh_path"
              }, j(ra, "auth");
              return;
            }
            Gr(yn);
            let Rn = await ho(Ye, "proactive_refresh", 0, Z, de);
            if (Rn === "suppressed_teleported") x = !0;
            if (Rn === "rebuilt") R = !0, N = {
              leg: "sad",
              code: "oauth_rejected_recovered"
            }, t("[remote-bridge] Transport rebuilt (proactive refresh after forced OAuth refresh)");
            return;
          }
          if (!fe) {
            if (t("[remote-bridge] Proactive /bridge re-mint failed (transient); fallback refresh will retry"), X("warn", "bridge_repl_v2_proactive_remint_null"), Pe === void 0) N = {
              leg: "sad",
              code: "remint_null"
            };
            return;
          }
          if (Nae(fe)) {
            N = {
              leg: "bad",
              code: `credentials_${kt(fe)}`
            }, j(IAe(fe), kt(fe), Pn("refresh", fe));
            return;
          }
          Gr(r);
          let Ke = await ho(fe, "proactive_refresh", 0, Z, de);
          if (Ke === "suppressed_teleported") x = !0;
          if (Ke === "rebuilt") R = !0, N = {
            leg: "ok"
          }, t("[remote-bridge] Transport rebuilt (proactive refresh)");
        } catch (error) {
          if (t(`[remote-bridge] Proactive refresh rebuild failed: ${d(error)}`, {
            level: "error"
          }), X("error", "bridge_repl_v2_proactive_refresh_failed"), !I && !re) _ = `Refresh failed: ${d(error)}`, w = "refresh_rebuild_failed", B = "terminal", N = {
            leg: "bad",
            code: "rebuild_threw"
          };
        } finally {
          let W = x;
          if (MC(e)) W = !0;
          if (N !== void 0 && !y && !I && !(W && N.leg === "bad")) eo(N);
          if (!hi(a)) return;
          ci();
          let Z = be;
          if (be = void 0, W) {
            if (Z !== void 0 && !I) ve("Session teleported to cloud");
          } else if (Z !== void 0 && !R && !I && !we) {
            let de = mn(Z.code, Z.cause, Z.detail, !0, Z.at);
            if (_ !== void 0 && !de && !I && !recovery_in_flight) ve(_, B);
          } else if (Z !== void 0 && R && !I) {
            if (Wi(Z.code) && !y) pt(Ve[Z.code].recoveredCode, {
              recovery_bucket: On(Date.now() - Z.at)
            });
          } else if (_ !== void 0 && !I) {
            if (ve(_, B), w !== void 0 && w !== "refresh_credentials_rejected" && !y) Me(w);
          }
        }
      })();
    },
    label: "remote"
  });
  if (St.scheduleFromExpiresIn(k, ce.expires_in), Cr = ownerPin?.subscribe(() => {
    dr("owner_changed");
  }), Wt()) dr("owner_changed");
  let Gt;
  function Li() {
    transport.setOnConnect(y => {
      if (re) return;
      if (clearTimeout(ur), ir = 0, Tr = void 0, tt = void 0, we = !1, ar = void 0, Et = void 0, Ht = !1, qn(), Pe = void 0, Ie.size > 0) {
        let R = [...Ie.values()].findLast(_ => _.details !== void 0);
        xe("requires_action", R?.details), qt.clear();
      } else if (ao === "running" && wt(() => !0)) xe("running");
      if (t("[remote-bridge] v2 transport connected"), X("info", "bridge_repl_v2_transport_connected"), DMs(), ja(y), Oe === "deferred") {
        if (zt === void 0 && !Ki) gn(en, () => {
          Ki = !0;
        });
      } else {
        if (cr) gn(null, () => {
          cr = !1;
        });
        yo();
      }
      if (i("tengu_bridge_repl_ws_connected", {
        v2: !0,
        cause: c(pn),
        ...(remint_attempts > 0 && {
          remint_attempts: remint_attempts
        })
      }), !Lt && $t()) Lt = !0, g("bridge_presence");
      if (Oe === "deferred") {
        if (!br && Ie.size === 0) {
          let R = initialMessages?.filter(_ => zae(_)).findLast(_ => !jMr(_));
          if (wt(() => R !== void 0 && can(R) && !In(R))) xe("running");
        }
        br = !0;
      }
      if (!br && initialMessages && initialMessages.length > 0 && !Yr) {
        br = !0;
        let R = transport,
          _ = Ba(initialMessages),
          w = Promise.withResolvers();
        _.catch(B => t(`[remote-bridge] flushHistory failed: ${B}`)).finally(() => {
          if (w.resolve(), transport !== R || I || re || recovery_in_flight) return;
          Kt(), Sr();
        }), Qn = Promise.all([_, w.promise]), Qn.catch(() => {});
      } else if (Ar) Sr();else if ((Ae.active || ge.active) && !recovery_in_flight) sr(), Kt(), Sr();else if (!Ae.active) Sr();
      Na(), yr = transport;
    }), transport.setOnData(y => {
      if (re) return;
      if (Gt !== void 0) {
        Gt.push(y);
        return;
      }
      if (!Wt()) {
        a(y);
        return;
      }
      Gt = [y], r();
    });
    let e = transport;
    transport.setOnClose((y, R, _) => {
      if (yr === e) yr = void 0;
      let w = Date.now();
      return mn(y, R, _, !1, Math.min(w, e.lastFrameReadAt() ?? w));
    });
    function r() {
      dr("owner_changed").then(y => {
        let R = Gt;
        if (R === void 0) return;
        if (y || I) {
          Gt = void 0;
          return;
        }
        let _ = R.length;
        while (R.length > 0) {
          if (re || I) {
            Gt = void 0;
            return;
          }
          if (_ === 0 && Wt()) {
            r();
            return;
          }
          _ = Math.max(0, _ - 1);
          let w = R.shift();
          if (w !== void 0) a(w);
        }
        Gt = void 0;
      });
    }
    function a(y) {
      xUs(y, rr, ya, R => {
        if (jMn(R, "bridge")) idleTracker.noteActivity(), Tt("client_prompt");
        let _ = onInboundMessage !== void 0 && R.type === "user" && inboundReadReceipts() ? Vt(R.uuid) : null;
        if (_ === null) return onInboundMessage?.(R);
        return AMs(_, () => onInboundMessage?.(R));
      }, onPermissionResponse ? R => {
        if (onPermissionResponse(R)) {
          let _ = R.response.subtype === "success" && !!R.response.response;
          if (_) idleTracker.noteActivity(), Tt("client_input");
          if (io(R.response.request_id, _), !yt) so();
        }
      } : void 0, R => {
        if (HMn(R)) idleTracker.noteActivity(), Tt("client_input");
        OUs(R, {
          transport: transport,
          sessionId: k,
          onInterrupt: onInterrupt,
          onStopTask: onStopTask,
          onBackgroundTasks: onBackgroundTasks,
          onCancelAsyncMessage: onCancelAsyncMessage,
          reportsInboundReadReceipts: () => onInboundMessage !== void 0 && inboundReadReceipts(),
          getInitializeState: getInitializeState,
          claudeCodeVersion: {
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.303",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-18T20:20:57Z",
            GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
            HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "win32"
          }.VERSION,
          getCommands: getCommands,
          getPendingPrompts: getPendingPrompts,
          onDialogKindsDeclared: onDialogKindsDeclared,
          onClientInitialize: onClientInitialize_2,
          onSetModel: onSetModel,
          onSetMaxThinkingTokens: onSetMaxThinkingTokens,
          onSetPermissionMode: onSetPermissionMode,
          onApplyFlagSettings: onApplyFlagSettings,
          onRenameSession: onRenameSession,
          onSetColor: onSetColor,
          onFileSuggestions: onFileSuggestions,
          onReadFile: onReadFile,
          onGetWorkspaceDiff: onGetWorkspaceDiff,
          onSideQuestion: onSideQuestion,
          onGetContextUsage: onGetContextUsage,
          answerSharedControlRequest: answerSharedControlRequest,
          onMcpAuthenticate: onMcpAuthenticate,
          onMcpOauthCallbackUrl: onMcpOauthCallbackUrl,
          onMcpReconnect: onMcpReconnect,
          onMcpSetServers: onMcpSetServers,
          onForkConversation: onForkConversation,
          hasPendingPrompts: () => Ie.size > 0,
          outboundOnly: outboundOnly,
          writeFrame: _ => {
            if (et(_.type)) return;
            kr(_, _.type);
          },
          cancellableRequests: cancellableRequests
        });
      }, R => cancellableRequests.get(R)?.abort(), onQueuedNotification);
    }
  }
  function mn(e, cause, detail, y, R) {
    let _ = !1;
    if (clearTimeout(ur), I || re) return Ti(0, [], transport.discardUndeliveredEvents?.() ?? []), !1;
    if (!y) t(`[remote-bridge] v2 transport closed (code=${e}${detail ? ` source=${detail.rejectSource}` : ""})`), i("tengu_bridge_repl_ws_closed", {
      code: e,
      v2: !0,
      close_cause: pe(cause),
      recovery_in_flight: recovery_in_flight,
      ...(detail !== void 0 && {
        reject_source: c(detail.rejectSource)
      })
    });
    if (recovery_in_flight) {
      let j = or ? Date.now() - or : 0;
      if (j <= bi) return be = {
        code: e ?? 4092,
        cause: cause,
        detail: detail,
        at: be?.at ?? Tr ?? R
      }, !1;
      t(`[remote-bridge] authRecoveryInFlight held ${Math.round(j / 1000)}s (> ceiling ${Math.round(bi / 1000)}s) \u2014 treating as leaked, handling close directly`, {
        level: "error"
      }), X("error", "bridge_repl_v2_recovery_flag_leaked"), gi(), be = void 0, _ = !0;
    }
    if (Wi(e)) {
      if (ir >= yi) {
        if (t(`[remote-bridge] ${e} recovery exhausted after ${ir} attempts`, {
          level: "error"
        }), ve(`Transport recovery exhausted (code ${e})`), !we) Me("recovery_exhausted", {
          close_code: e
        });
        return !1;
      }
      if (e === 4094 && !y) {
        if (on >= yi) {
          if (t(`[remote-bridge] worker-credential recovery exhausted after ${on} attempts with no successful heartbeat between them`, {
            level: "error"
          }), ve("Transport recovery exhausted (worker credential failures)", "auth"), !we) Me("cred_recovery_exhausted");
          return !1;
        }
        on++;
      }
      if (e === 4093 && !y) {
        let j = Ri.charge(Date.now(), zn());
        switch (j) {
          case "hourly_exhausted":
          case "daily_exhausted":
            {
              let window_h = j === "hourly_exhausted" ? 1 : 24;
              if (t(`[remote-bridge] heartbeat recovery budget exhausted (${window_h}h window)`, {
                level: "error"
              }), ve(j === "hourly_exhausted" ? vs : bs), !we) Me("heartbeat_budget_exhausted", {
                window_h: window_h
              });
              return !1;
            }
          case "charged":
            break;
        }
      }
      return ir++, Tr ??= R, Pa(e), !1;
    }
    let w = (y || _) && Er,
      B = Ds(e, cause);
    if (B !== void 0 && !(w && js(B))) Pe = B;
    let N = w && cause === "superseded_by_worker" ? void 0 : cause,
      x = e === 4090 && (N === "superseded_by_worker" || N === "session_not_active" || N === "session_not_found");
    if (ve(x ? Uo(e, N) : `Transport closed: ${Uo(e, N, detail)}`, x ? "ended_elsewhere" : "terminal"), we) return x;
    if (e === 4090) {
      if (y && Er) Me("transport_closed_4090");else pt("transport_closed_4090"), we = !0;
    } else if (e === 403) Zn(detail);else Me(e === 404 ? "transport_closed_404" : "transport_closed_other");
    return x;
  }
  async function ho(e, r, a, y, R) {
    if (ei(e.worker_epoch), MC(k)) return t(`[remote-bridge] Rebuild suppressed for teleported session ${k}`), "suppressed_teleported";
    pn = r, remint_attempts = a, Pe = void 0, Er = !0, cn = !1, lo?.(), vn(), Ae.start(), ge.start();
    try {
      let _ = transport,
        initialSequenceNum = _.getLastSequenceNum();
      if (yr = void 0, _.close({
        goodbye: !1,
        retainUndelivered: !0
      }), transport = await Yso({
        ...di(),
        sessionUrl: qFe(e.api_base_url, k),
        ingressToken: e.worker_jwt,
        sessionId: k,
        epoch: e.worker_epoch,
        initialSequenceNum: initialSequenceNum,
        getAuthToken: () => e.worker_jwt
      }), I) return transport.close(), "rebuilt";
      if (re) return transport.close(), "suppressed_owner_changed";
      Li(), transport.connect(), Da(_), _n?.(), ATo(), MTo(), NTo(), HTo(), LTo(), ycs(), FTo(), onTransportRebuilt?.(), ur = setTimeout(Hi, Q.connect_timeout_ms, pn), St.scheduleFromExpiresIn(k, e.expires_in), Yn = e.worker_jwt, worker_epoch_2 = e.worker_epoch, api_base_url = e.api_base_url;
      let B = Nt !== 0 && (Ut || y < Nt);
      Nt = 0;
      let N = R < Xr;
      Ut = B || N;
      try {
        ma(e, N);
      } catch (error) {
        l(error), m("bridge_webagent_mcp_inject", "refresh_threw");
      }
      Kt();
    } finally {
      Ae.deactivate(), ge.deactivate();
    }
    return "rebuilt";
  }
  async function $i(e, r, a) {
    let y = !a && onClassifyMissingOAuthToken !== void 0 && $t() && wTo(),
      R = y ? await onClassifyMissingOAuthToken(e) : void 0;
    if (y && (I || ae !== r)) return;
    if (R === "signed_out") {
      if (t(`[remote-bridge] Signed out on this machine under ${k} (${e}) \u2014 stopping`), X("info", "bridge_repl_v2_signed_out"), pt("signed_out"), !Lt) p("bridge_connect", "signed_out");
      we = !0, ve(na, "auth");
      return;
    }
    if (ve(ea, "auth"), !a) Me("recovery_no_oauth_token");
  }
  async function Aa(close_code, r, a, y) {
    let R = Date.now();
    X("info", "bridge_repl_v2_remint_loop_entered"), sn = !0;
    let _ = 0;
    try {
      let w = !1,
        B = 0;
      for (let attempts_2 = 1; !I; attempts_2++) {
        if (ae !== r) return {
          creds: null,
          attempts: _
        };
        let x = Math.round((Date.now() - R) / 60000);
        dn(`${workSecretCredentials ? "Remote Control credentials unavailable" : "Remote Control server unreachable"} \u2014 retrying (attempt ${attempts_2}${x > 0 ? `, ${x}m elapsed` : ""})`);
        let j = Math.min(ms * 2 ** (attempts_2 - 1), Bo);
        if (await Y(Math.max(Math.random() * j, gs)), I) break;
        if (ae !== r) return {
          creds: null,
          attempts: _
        };
        if (or = Date.now(), MC(k)) return ve("Session teleported to cloud"), X("info", "bridge_repl_v2_remint_loop_teleported"), {
          creds: null,
          attempts: _
        };
        let oe = Ko();
        if (!oe) return X("info", "bridge_repl_v2_remint_loop_no_oauth"), await $i("remint_loop", r, a), {
          creds: null,
          attempts: _
        };
        let creds = await Jr(oe, r);
        if (_ = attempts_2, I) break;
        if (ae !== r) return {
          creds: null,
          attempts: _
        };
        if (creds === null) {
          if (B++, y === void 0 || B < y.attempts) continue;
          if (t(`[remote-bridge] Re-mint loop exhausted (code ${close_code}): ${B} unreachable attempts, ${Math.round((Date.now() - R) / 1000)}s`, {
            level: "error"
          }), X("info", "bridge_repl_v2_remint_loop_exhausted", {
            attempts: _,
            elapsed_ms: Date.now() - R,
            queued_writes_dropped: Ae.pendingCount + ge.pendingCount + ge.evictedCount
          }), ve(y.exhaustedDetail), !a) Me("recovery_exhausted", {
            close_code: close_code,
            remint_attempts: _
          });
          return {
            creds: null,
            attempts: _
          };
        }
        if (FH(creds)) {
          if (onAuth401 && !w) {
            if (await Mr("owner_changed_recovery", r)) return {
              creds: null,
              attempts: _
            };
            w = !0;
            let Z = !1;
            try {
              Z = await onAuth401(oe);
            } catch (error) {
              t(`[remote-bridge] Re-mint loop OAuth refresh threw: ${d(error)}`, {
                level: "error"
              });
            }
            if (I) break;
            if (ae !== r) return {
              creds: null,
              attempts: _
            };
            if (Z) {
              t("[remote-bridge] Re-mint rejected after outage \u2014 OAuth refresh succeeded; retrying with the refreshed credential");
              continue;
            }
          }
          if (ve($n, "auth"), !a) Me("recovery_credentials_rejected");
          return X("info", "bridge_repl_v2_remint_loop_rejected"), {
            creds: null,
            attempts: _
          };
        }
        if (Nae(creds)) {
          if (ve(IAe(creds), kt(creds)), !a) Me(Pn("recovery", creds));
          return X("info", "bridge_repl_v2_remint_loop_denied"), {
            creds: null,
            attempts: _
          };
        }
        return t(`[remote-bridge] Re-mint loop succeeded (code ${close_code}, attempt ${attempts_2}, ${Math.round((Date.now() - R) / 1000)}s)`), X("info", "bridge_repl_v2_remint_loop_recovered", {
          attempts: attempts_2,
          elapsed_ms: Date.now() - R
        }), {
          creds: creds,
          attempts: _
        };
      }
      return {
        creds: null,
        attempts: _
      };
    } finally {
      if (ae === r) sn = !1;
    }
  }
  let Ve = {
    401: {
      reconnectingDetail: "JWT expired \u2014 refreshing",
      cause: "auth_401_recovery",
      failureDiagnostic: "bridge_repl_v2_jwt_refresh_failed",
      fetchFailure: "terminal",
      remintCap: void 0,
      recoveredCode: "recovered_auth_401",
      needsOAuthRefresh: !0
    },
    4091: {
      reconnectingDetail: "CCR init failed \u2014 retrying",
      cause: "init_4091_recovery",
      failureDiagnostic: "bridge_repl_v2_4091_recovery_failed",
      fetchFailure: "terminal",
      remintCap: void 0,
      recoveredCode: "recovered_init_4091",
      needsOAuthRefresh: !1
    },
    4093: {
      reconnectingDetail: "presence heartbeats failing \u2014 reconnecting",
      cause: "heartbeat_4093_recovery",
      failureDiagnostic: "bridge_repl_v2_4093_recovery_failed",
      fetchFailure: "retry",
      remintCap: remintCap,
      recoveredCode: "recovered_heartbeat_4093",
      needsOAuthRefresh: !1
    },
    4094: {
      reconnectingDetail: "worker credential expired \u2014 re-minting",
      cause: "cred_4094_recovery",
      failureDiagnostic: "bridge_repl_v2_4094_recovery_failed",
      fetchFailure: "terminal",
      remintCap: void 0,
      recoveredCode: "recovered_cred_4094",
      needsOAuthRefresh: !0
    }
  };
  function Wi(e) {
    if (e === 4094) return nLt();
    return e === 401 || e === 4091 || e === 4093;
  }
  let qi = 30000,
    Oa = 5000;
  function Gi(e, r) {
    if (Ve[e].fetchFailure === "terminal") {
      ve(r);
      return;
    }
    Ae.start(), ge.start(), dn("presence recovery failed \u2014 retrying"), t(`[remote-bridge] ${e} recovery fetch failed \u2014 retrying in ${qi}ms`), sr();
    let a = transport;
    function y() {
      if (ft = void 0, I) return;
      if (ir === 0) {
        if (Ae.active || ge.active) {
          if (recovery_in_flight) {
            ft = setTimeout(y, Oa);
            return;
          }
          Kt(), Sr();
        }
        return;
      }
      if (transport !== a) return;
      mn(e, void 0, void 0, !0, Tr ?? Date.now());
    }
    ft = setTimeout(y, qi);
  }
  async function Pa(e) {
    let r = we,
      a = Tr ?? Date.now();
    if (MC(k)) {
      ve("Session teleported to cloud");
      return;
    }
    if (recovery_in_flight) return;
    let y = pi();
    Ae.start(), ge.start(), dn(Ve[e].reconnectingDetail), t(`[remote-bridge] ${e} on transport \u2014 attempting credential refresh + rebuild`);
    try {
      if (await Mr("owner_changed_recovery", y)) return;
      let R = getAccessToken(),
        _ = !0,
        w = i3n();
      if (!workSecretCredentials && Ve[e].needsOAuthRefresh && onAuth401) try {
        _ = await onAuth401(R ?? "");
      } catch (error) {
        _ = !1, t(`[remote-bridge] ${e} recovery OAuth refresh threw: ${d(error)}`, {
          level: "error"
        });
      } else if (!workSecretCredentials && onProactiveRefresh) try {
        await onProactiveRefresh();
      } catch (error) {
        t(`[remote-bridge] pre-recovery token refresh failed: ${d(error)}`, {
          level: "error"
        });
      }
      if (ae !== y) return;
      let B = Ko() ?? R;
      if (!B || I) {
        if (!I) await $i("recovery", y, r);
        return;
      }
      if (MC(k)) {
        ve("Session teleported to cloud");
        return;
      }
      let N = Date.now(),
        x = Xr,
        j = await _r(() => Jr(B, y), "fetchRemoteCredentials (recovery)", Q);
      if (ae !== y) return;
      if ((!j || FH(j)) && !I && Ve[e].needsOAuthRefresh && onAuth401 && !_) {
        let Z = !1;
        for (let attempt = 1; attempt <= Q.oauth_retry_max_attempts && !I; attempt++) {
          if (dn(`OAuth refresh failed \u2014 waiting for a fresh login (${attempt}/${Q.oauth_retry_max_attempts})`), await Y(Ay({
            attempt: attempt,
            baseMs: Q.oauth_retry_base_delay_ms,
            jitter: {
              kind: "symmetric",
              ratio: Q.init_retry_jitter_fraction
            }
          })), await Mr("owner_changed_recovery", y)) return;
          let fe;
          try {
            fe = onReadFreshOAuthToken ? await onReadFreshOAuthToken() : (await onAuth401(R ?? "")) ? getAccessToken() : void 0;
          } catch (error) {
            t(`[remote-bridge] Adopt-loop token read threw (attempt ${attempt}): ${d(error)}`, {
              level: "error"
            });
          }
          if (I || ae !== y) return;
          let Ke = fe !== void 0 && fe !== (R ?? "") ? fe : void 0;
          if (!Ke) continue;
          if (Z = !0, MC(k)) {
            ve("Session teleported to cloud");
            return;
          }
          j = await _r(() => Jr(Ke, y), "fetchRemoteCredentials (recovery re-poll)", Q);
          break;
        }
        if (ae !== y) return;
        if (FH(j) && !Z) {
          if (!I) {
            let de = Mi(w);
            if (de !== void 0) {
              if (X("info", "bridge_repl_v2_recovery_host_declined"), ve(Oi(de), Pi(de)), !r) if (Lt) pt(de), we = !0;else Me("recovery_reauth_required");
              return;
            }
            if (ve("OAuth token refresh failed \u2014 run /login to re-authenticate", "auth"), !r) Me("recovery_reauth_required");
          }
          return;
        }
      }
      if (I) return;
      if (!j && Ve[e].fetchFailure === "retry" && !zn()) {
        Gi(e, `could not fetch fresh session credentials after code ${e}`);
        return;
      }
      if (FH(j) && !Ve[e].needsOAuthRefresh && onAuth401) {
        if (await Mr("owner_changed_recovery", y)) return;
        let Z = !1;
        try {
          Z = await onAuth401(R ?? "");
        } catch (error) {
          t(`[remote-bridge] ${e} late OAuth refresh threw: ${d(error)}`, {
            level: "error"
          });
        }
        if (I || ae !== y) return;
        if (Z) {
          if (j = await _r(() => Jr(getAccessToken() ?? R ?? "", y), `fetchRemoteCredentials (${e} late refresh)`, Q), I || ae !== y) return;
        }
      }
      if (FH(j)) {
        if (ve($n, "auth"), !r) Me("recovery_credentials_rejected");
        return;
      }
      let remint_attempts_2 = 0;
      if (!j) {
        let Z = await Aa(e, y, r, zn() ? Ve[e].remintCap : void 0);
        if (j = Z.creds, remint_attempts_2 = Z.attempts, !j || I || ae !== y) return;
      }
      if (Nae(j)) {
        if (!I) {
          if (ve(IAe(j), kt(j)), !r) Me(Pn("recovery", j));
        }
        return;
      }
      if (ae !== y) return;
      let W = await ho(j, Ve[e].cause, remint_attempts_2, N, x);
      if (W === "suppressed_teleported") {
        ve("Session teleported to cloud");
        return;
      }
      if (W === "suppressed_owner_changed") return;
      if (t(`[remote-bridge] Transport rebuilt after ${e}`), !I) {
        if (!r) pt(Ve[e].recoveredCode, {
          ...(remint_attempts_2 > 0 && {
            remint_attempts: remint_attempts_2
          }),
          recovery_bucket: On(Date.now() - a)
        });
      }
    } catch (error) {
      if (t(`[remote-bridge] ${e} recovery failed: ${d(error)}`, {
        level: "error"
      }), X("error", Ve[e].failureDiagnostic), !I && !re) {
        if (Gi(e, `Transport recovery failed (${e}): ${d(error)}`), Ve[e].fetchFailure === "terminal" && !r) Me("recovery_failed");
      }
    } finally {
      if (hi(y)) {
        if (ci(), ft !== void 0 && be !== void 0) {
          sr();
          let R = be;
          be = void 0, mn(R.code, R.cause, R.detail, !0, R.at);
        } else be = void 0;
        if (ft === void 0 && !recovery_in_flight) Ae.drop(), ge.drop(), Ft = !1;
      }
    }
  }
  if (Li(), !reattach && initialMessages && initialMessages.length > 0) Ae.start(), ge.start();
  transport.connect(), ur = setTimeout(Hi, Q.connect_timeout_ms, pn);
  function wt(e) {
    return isTurnLive ? isTurnLive(e) : e();
  }
  function Vi(e) {
    return Un(e, "live").map(item => {
      if (item.type !== "assistant" || item.parent_tool_use_id !== null || item.uuid === void 0) return {
        ...item,
        session_id: k
      };
      let user_message_uuid = nr.get(item.uuid);
      if (user_message_uuid === void 0) return {
        ...item,
        session_id: k
      };
      return nr.delete(item.uuid), {
        ...item,
        session_id: k,
        user_message_uuid: user_message_uuid,
        user_message_uuids: [user_message_uuid]
      };
    });
  }
  function Kt() {
    let e = Oe === "deferred",
      r = e ? Ae.end().filter(item => Do(item.message)) : Ae.end(),
      a = e ? ge.end().filter(item => !Cn(item.frame)) : ge.end(),
      y = Ft;
    if (Ft = !1, r.length === 0 && a.length === 0) {
      if (e && wt(() => y) && Ie.size === 0) xe("running");
      return;
    }
    let R = [],
      _ = [],
      w = () => {
        if (_.length > 0) R.push(...Vi(_)), _ = [];
      },
      B = 0,
      N = 0;
    while (B < r.length || N < a.length) {
      let x = r[B],
        j = a[N];
      if (x && (!j || x.seq < j.seq)) rr.add(x.message.uuid), tn.add(x.message.uuid), go = !0, _.push(x.message), B++;else if (j) {
        w();
        let frame = j.frame;
        if ("uuid" in frame && typeof frame.uuid === "string") Jn.add(frame.uuid);
        R.push(Object.assign({}, frame, {
          session_id: k
        })), N++;
      }
    }
    if (w(), wt(() => y) && Ie.size === 0) xe("running");
    t(`[remote-bridge] Drained ${r.length} queued message(s) and ${a.length} SDK event(s) / control frame(s) after flush`), transport.writeBatch(R);
  }
  function Da(e) {
    let r = e.takeUndeliveredEvents?.() ?? [];
    if (r.length === 0) return;
    t(`[remote-bridge] Carrying ${r.length} undelivered client event(s) over to the rebuilt transport`), X("info", "bridge_repl_v2_events_carried_over", {
      count: r.length
    }), i("tengu_bridge_repl_events_carried_over", {
      count: r.length
    }), transport.adoptUndeliveredEvents?.(r);
  }
  function kr(e, r) {
    let a = e.type !== "result" && Ar && !recovery_in_flight,
      [frame_2] = Ze.redact([e], "events", "live");
    if (frame_2 === void 0) return;
    if (!a && ge.enqueue({
      seq: Xn++,
      frame: frame_2
    })) {
      t(`[remote-bridge] Queued ${r} during flush`);
      return;
    }
    transport.write(frame_2), t(`[remote-bridge] Sent ${r}`);
  }
  async function Ba(e) {
    Ze.note(e);
    let r = e.filter(zae),
      a = Hfr(r, initialHistoryCap);
    if (a.length < r.length) t(`[remote-bridge] Capped initial flush: ${r.length} -> ${a.length} (cap=${initialHistoryCap})`);
    let y = Un(a).map(item => ({
      ...item,
      session_id: k,
      historical: !0
    }));
    if (y.length === 0) return;
    let R = r.findLast(_ => !jMr(_));
    if (wt(() => R !== void 0 && can(R) && !In(R)) && Ie.size === 0) xe("running");
    t(`[remote-bridge] Flushing ${y.length} history events`), await transport.writeBatch(y);
  }
  let mo = !1,
    Ar = !1,
    go = !1,
    Ki = !1,
    cr = !1;
  function gn(transcript_upload_deferred, r) {
    let a = transport,
      y = a.droppedWorkerStatePatchCount?.() ?? 0;
    a.reportInternalMetadata?.({
      transcript_upload_deferred: transcript_upload_deferred
    }), a.flushWorkerState?.().then(R => {
      if (R && (a.droppedWorkerStatePatchCount?.() ?? 0) === y) r();
    });
  }
  let Or;
  function ja(e) {
    if (mo) return;
    if (mo = !0, Oe === "deferred") {
      transport.reportMetadata({
        transcript_mirror: "deferred"
      }), zi();
      return;
    }
    if (!reattach || remoteControlOrigin === void 0 && !noHistoryBackfill) return;
    let r = e === void 0 || e.readFailed === !0,
      a = r ? void 0 : e.internal?.transcript_upload_deferred;
    if (Po(a) && (noHistoryBackfill || remoteControlOrigin === void 0)) {
      if (!re) transport.reportMetadata({
        transcript_mirror: "live"
      });
      cr = !0, gn(null, () => {
        cr = !1;
      });
    } else if (Po(a)) {
      if (en = a, Oe = "deferred", zi(), go) zt = "rows_already_live";else if (!jr(tr().scope, en)) zt = "flag_off";
    } else if ((r || a !== void 0 && a !== null) && jr(tr().scope, remoteControlOrigin)) Oe = "deferred", zt = "marker_unreadable";
  }
  let zt;
  function Na() {
    if (zt === void 0) return;
    let e = zt;
    zt = void 0, Tt(e);
  }
  function zi() {
    Or = Date.now(), t("[remote-bridge] Transcript upload deferred until a client opens this session"), X("info", "bridge_repl_transcript_deferred", {
      reattach: reattach
    }), i("tengu_bridge_transcript_deferral", {
      phase: c("deferred"),
      reattach: reattach,
      hold_ms: jt()
    });
  }
  let Yi = !1;
  function onClientInitialize_2() {
    if (Oe !== "deferred" || Yi) {
      onClientInitialize?.();
      return;
    }
    Yi = !0;
    let e = Ha();
    queueMicrotask(() => {
      Tt("client_open", e);
      try {
        onClientInitialize?.();
      } catch (error) {
        t(`[remote-bridge] onClientInitialize failed after transcript release: ${d(error)}`);
      }
    });
  }
  function Fa() {
    if (Oe === "deferred" && !jr(tr().scope, en)) Tt("flag_off");
  }
  function Tt(e, r = Promise.resolve()) {
    if (Rt) return Rt;
    if (I || Oe !== "deferred") return Promise.resolve();
    if (!re) transport.reportMetadata({
      ...Rr,
      transcript_mirror: "live"
    });
    Rr = {}, Oe = "live", br = !0;
    let a = Ie.size > 0;
    t(`[remote-bridge] Releasing deferred transcript (${e})`), Ar = !0, Ae.start(), ge.start(), Pr = onTransportPersistenceReady ? vo() : Promise.resolve();
    let y = transport;
    return Rt = r.then(() => xa(e, a)).catch(R => t(`[remote-bridge] Transcript back-fill failed: ${d(R)}`, {
      level: "error"
    })).finally(() => {
      if (Ar = !1, transport !== y || I || re || !mo) return;
      if (recovery_in_flight) {
        nn = !0;
        return;
      }
      Kt(), yo();
    }), Rt;
  }
  let Yt,
    Pr = Promise.resolve(),
    Ji = [];
  function vo() {
    return new Promise(e => {
      Ji.push(e);
    });
  }
  let Ir = !1,
    bo;
  function Xi() {
    return Promise.resolve().then(() => bo?.runNow()).catch(l);
  }
  function vn() {
    if (Yt !== void 0) Ir = !0, Pr = vo();
    onTransportPersistenceTeardown?.();
  }
  function yo() {
    if (!onTransportPersistenceReady || Yt === transport) return;
    let e = transport.getInternalEventWriter?.(),
      r = e && Ze.wrapInternalEventWriter(e),
      a = e && Ze.wrapInternalEventWriter(e, "live"),
      y = r && a && ((_, w, B) => (typeof w.uuid === "string" && Bi.has(w.uuid) ? a : r)(_, w, B)),
      R = transport.getInternalEventReaders?.();
    if (r && R) {
      let _ = !reattach && Yt === void 0,
        w = transport;
      Yt = w, Ir = !0, Pr = vo(), bo = onTransportPersistenceReady(r, R, k, _, B => {
        if (B && Yt === w) {
          Ir = !1;
          for (let N of Ji.splice(0)) N();
        }
      }, Ze.note, y);
    }
  }
  function Ha() {
    let e = transport;
    if (!e.setSubscribersReportedListener) return Promise.resolve();
    let promise = new Promise(a => {
      e.setSubscribersReportedListener?.(y => {
        if (y) a();
      });
    });
    return Promise.race([promise, Y(Md, void 0, {
      unref: !0
    })]).finally(() => e.setSubscribersReportedListener?.(void 0));
  }
  async function xa(reason_2, r) {
    if (I) return;
    let a = et("transcript backfill") ? void 0 : getBackfillMessages?.(k);
    Ze.note(a ?? []);
    let y = new Set(Ae.pending.map(item => item.message.uuid)),
      R = (a ?? []).filter(item => zae(item) && !tn.has(item.uuid) && !y.has(item.uuid)),
      _ = Hfr(R, tr().backfillMessages);
    t(`[remote-bridge] Back-filling ${_.length} of ${R.length} eligible message(s)${a === void 0 ? " (history withheld by host)" : ""}`), X("info", "bridge_repl_transcript_released", {
      reason: reason_2,
      backfilled: _.length,
      eligible: R.length,
      withheld: a === void 0
    }), i("tengu_bridge_transcript_deferral", {
      phase: c("released"),
      reason: c(reason_2),
      backfilled: _.length,
      eligible: R.length,
      history_withheld: a === void 0,
      deferred_ms: Or === void 0 ? void 0 : Date.now() - Or,
      hold_ms: jt()
    });
    let w = Un(_).map(item => ({
      ...item,
      session_id: k,
      historical: !0
    }));
    for (let W of R) rr.add(W.uuid), Zr.add(W.uuid);
    for (let W of _) tn.add(W.uuid);
    let B = R.findLast(W => !jMr(W)),
      N = r || Ie.size > 0 || wt(() => B !== void 0 && can(B) && !In(B));
    if (reason_2 !== "client_prompt" && !N && w.length > 0) w.push(Object.assign(UKn(k), {
      historical: !0
    }));
    let x = transport.droppedDurableBatchCount?.() ?? 0,
      j = transport;
    for (let W = 0; W < w.length; W += Ho) {
      if (I || re) return;
      if (transport !== j) {
        await transport.writeBatch(w.slice(W));
        break;
      }
      if (await transport.writeBatch(w.slice(W, W + Ho)), W + Ho < w.length) await Promise.race([transport.flush(), Y(kd, void 0, {
        unref: !0
      })]);
    }
    let oe = transport;
    oe.flush().then(() => {
      if ((oe.droppedDurableBatchCount?.() ?? 0) > x) X("warn", "bridge_repl_transcript_backfill_dropped"), i("tengu_bridge_transcript_deferral", {
        phase: c("backfill_dropped"),
        reason: c(reason_2),
        hold_ms: jt()
      });
      if (I || re) return;
      cr = !0, gn(null, () => {
        cr = !1;
      });
    });
  }
  let Ro = neverArchive_2 === !0,
    fr;
  function teardown(e) {
    if (e?.skipArchive) Ro = !0;
    if (e?.reason) fr = e.reason;
    if (rn) return rn;
    return I = !0, rn = $a(), rn;
  }
  async function $a() {
    if (Ci("teardown"), Oe === "deferred") i("tengu_bridge_transcript_deferral", {
      phase: c("exited_unopened"),
      deferred_ms: Or === void 0 ? void 0 : Date.now() - Or,
      hold_ms: jt()
    });
    let e = tt ?? ar;
    if (e !== void 0) {
      if (!MC(k)) {
        let fe = tt === void 0 ? Ai() : void 0;
        if (fe !== void 0 && Lt && txr()) pt(fe);else Me(e);
      }
      tt = void 0, ar = void 0, Et = void 0;
    } else if (!we && be?.code === 403 && !MC(k)) Zn(be.detail);else if (!we && (ir > 0 && (ft !== void 0 || recovery_in_flight) || be !== void 0 && be.code !== 4090) && !MC(k)) Me("recovery_abandoned_at_teardown");
    if (fn?.(), ji(), Ni(), zEo(owner), Cr?.(), Cr = void 0, vn(), Qr(), St.cancelAll(), clearTimeout(ur), sr(), ln(), transport.writeBatch(fr !== void 0 ? [LOo(k, fr), UKn(k)] : [UKn(k)]), xe("idle"), Ro || sn && fr !== "remote_control_disabled") {
      let fe = neverArchive_2 ? "skipped_host_owned" : Ro ? "skipped_teleport" : "skipped_remint_loop",
        Ke;
      if (Zt()) Ke = await Si("skip_archive_flush_timeout");else if (fr !== void 0) await wr();
      let ze = wi();
      transport.close(), i("tengu_bridge_repl_teardown", {
        v2: !0,
        archive_status: c(fe),
        archive_ok: !1,
        ...Ke,
        ...ze
      }), await transport.flushGoodbye(), t(`[remote-bridge] Teardown complete (skipArchive): session=${k}`), X("info", "bridge_repl_v2_teardown"), Qi();
      return;
    }
    let teardown_archive_timeout_ms = Q.teardown_archive_timeout_ms,
      a = Date.now(),
      y = Di(),
      R,
      _ = a,
      archive_budget_ms = teardown_archive_timeout_ms;
    if (Zt() && y === void 0) {
      let fe = a + qne - xs;
      R = await Si("exit_flush_timeout", a), _ = a + R.hold_preflush_ms, archive_budget_ms = Math.max(1, Math.min(teardown_archive_timeout_ms, fe - _));
    }
    let B = _ + archive_budget_ms,
      N = y === void 0 ? ro() : void 0,
      x = N?.token,
      j = await Qt(k, baseUrl, x, orgUUID, archive_budget_ms, y, storageV5),
      oe = B - Date.now();
    if (j === 401 && N?.source === "current" && onAuth401 && oe >= wd) try {
      await Promise.race([onAuth401(x ?? ""), Y(oe)]), N = ro(), x = N.token, j = await Qt(k, baseUrl, x, orgUUID, Math.max(1, B - Date.now()), y, storageV5);
    } catch (error) {
      t(`[remote-bridge] Teardown 401 retry threw: ${d(error)}`, {
        level: "error"
      });
    }
    let archive_ms = Date.now() - _;
    if (fr !== void 0 && R === void 0) await wr();
    let Z = wi();
    transport.close();
    let de = Ns(j, Pe);
    i("tengu_bridge_repl_teardown", {
      v2: !0,
      archive_status: c(de),
      archive_credential: pe(N?.source),
      archive_ok: typeof j === "number" && j < 400,
      archive_http_status: typeof j === "number" ? j : j === "untrusted_device" ? 403 : void 0,
      archive_timeout: j === "timeout",
      archive_no_token: j === "no_token",
      ...R,
      archive_budget_ms: archive_budget_ms,
      archive_ms: archive_ms,
      ...Z
    }), await transport.flushGoodbye(), t(`[remote-bridge] Torn down (archive=${j})`), X("info", "bridge_repl_v2_teardown"), Qi();
  }
  i("tengu_bridge_repl_started", {
    has_initial_messages: !!(initialMessages && initialMessages.length > 0),
    v2: !0,
    ccr_session_id: ye(Dl(k)),
    expires_in_s: ce.expires_in,
    inProtectedNamespace: _L(),
    ...Sit()
  }), g("bridge_connect");
  function et(e) {
    if (!re) return !1;
    return t(`[remote-bridge] Dropping ${e} after owner change`), !0;
  }
  let Eo = {
    bridgeSessionId: k,
    titleWriter: n.titleWriter,
    noHistoryBackfill: noHistoryBackfill || Yr,
    getJoinedProjectThread: void 0,
    requestInjectedMcpReassert: requestInjectedMcpReassert,
    canAdoptInjectedMcp: canAdoptInjectedMcp,
    detachForHandoff: () => {
      St.cancelAll(), Qr();
    },
    sessionGroupingId: sessionGroupingId_2,
    outboundOnly: outboundOnly ?? !1,
    environmentId: "",
    sessionIngressUrl: ce.api_base_url,
    gitRepoUrl: gitRepoUrl,
    ...(workSecretCredentials && {
      getWorkerBearerToken: () => I ? null : Yn,
      getWorkerEpoch: () => worker_epoch_2
    }),
    getLastSequenceNum: () => transport.getLastSequenceNum(),
    settleUploadsBeforeHandoff: () => {
      if (Rt !== void 0 || Oe === "deferred" || Ir) {
        let e = async () => {
          let r = Date.now() + Ps,
            a = async (y, what, _) => {
              let w = !1;
              if (await Promise.race([y.finally(() => {
                w = !0;
              }), Y(Math.max(0, _ - Date.now()), void 0, {
                unref: !0
              })]), !w) X("warn", "bridge_repl_handoff_wait_expired", {
                what: what
              });
            };
          if (await a(Yt === transport ? Xi() : Pr, "transcript_copy_catch_up", r - Fo), Ir) X("warn", "bridge_repl_handoff_transcript_copy_behind");
          await a(Promise.all([transport.flush({
            retryNow: !0
          }), transport.flushInternalEvents?.({
            retryNow: !0
          })]), "upload_lanes", r);
        };
        return (Rt ?? Tt("handoff")).then(e).then(() => {}, () => {});
      }
      return Zt() ? wr(Fo).then(() => {}, () => {}) : Promise.resolve();
    },
    awaitUploadsForHandoff: e => os({
      sessionKind: () => {
        if (Rt !== void 0 || Oe === "deferred") return "deferred";
        if (Zt()) return "held";
        return onTransportPersistenceReady ? "live" : "no_transcript_copy";
      },
      release: () => Rt ?? (Oe === "deferred" ? Tt("handoff") : Promise.resolve()),
      isSessionOver: () => I || re,
      hasFailedForGood: () => Ht,
      transport: () => transport,
      droppedBatches: r => (r.droppedDurableBatchCount?.() ?? 0) + (r.getInternalEventBacklog?.().droppedBatches ?? 0),
      isConnected: () => yr === transport && transport.isConnectedStatus(),
      transcriptCopy: onTransportPersistenceReady && {
        isInstalledOnCurrentTransport: () => Yt === transport,
        catchUp: () => Pr,
        wakeCatchUp: () => void Xi()
      },
      firstHistoryFlush: () => Qn,
      holdsWrites: () => Ae.active || ge.active || Ae.pendingCount + ge.pendingCount > 0,
      drainLanes: () => Promise.all([transport.flush({
        retryNow: !0
      }), transport.flushInternalEvents?.({
        retryNow: !0
      })]).then(() => {})
    }, {
      budgetMs: e?.budgetMs ?? Ps,
      signal: e?.signal,
      log: r => t(r),
      onBudgetPassed: what_2 => X("warn", "bridge_repl_handoff_upload_wait_expired", {
        what: what_2
      }),
      onFault: what_3 => X("warn", "bridge_repl_handoff_upload_wait_fault", {
        what: what_3
      })
    }),
    flush: () => (Kt(), Ei()),
    writeMessages(e) {
      if (et("writeMessages")) return;
      Ze.note(e, "live");
      for (let _ of e) if (!Zr.has(_.uuid)) Bi.add(_.uuid);
      let r = e.filter(item => zae(item) && !Zr.has(item.uuid) && !rr.has(item.uuid));
      if (r.length === 0) return;
      if (!Ui) for (let _ of r) {
        let w = $Kn(_);
        if (w !== void 0 && onUserMessage?.(w, k)) {
          Ui = !0;
          break;
        }
      }
      let a = r.some(yt ? Hd : can);
      if (a) yt = !1;
      if (!Fi && a) Fi = !0, Cs(k, storageV5);
      let y = r;
      if (Oe === "deferred") {
        if (y = r.filter(Do), y.length === 0) {
          if (Ae.active) Ft ||= a;else if (wt(() => a) && Ie.size === 0) xe("running");
          return;
        }
      }
      if (Ae.enqueue(...y.map(_ => ({
        seq: Xn++,
        message: _
      })))) {
        if (a) Ft = !0;
        t(`[remote-bridge] Queued ${y.length} message(s) during flush`);
        return;
      }
      for (let _ of y) tn.add(_.uuid), rr.add(_.uuid);
      go = !0;
      let R = Vi(y);
      if (wt(() => a) && Ie.size === 0) xe("running");
      t(`[remote-bridge] Sending ${y.length} message(s)`), transport.writeBatch(R);
    },
    reportMetadata(e) {
      if (et("reportMetadata")) return;
      if (Oe === "deferred") {
        let {
            post_turn_summary: post_turn_summary,
            task_summary: task_summary,
            recap: recap,
            ...R
          } = e,
          _ = {
            post_turn_summary: post_turn_summary,
            task_summary: task_summary,
            recap: recap
          };
        for (let B of Object.keys(_)) if (B in e) Rr[B] = _[B];
        let w = R;
        if ("post_turn_summary" in e) w.post_turn_summary = typeof post_turn_summary === "object" && post_turn_summary !== null && "status_category" in post_turn_summary ? {
          status_category: post_turn_summary.status_category
        } : null;
        if (Object.keys(w).length === 0) return;
        transport.reportMetadata(w);
        return;
      }
      transport.reportMetadata(e);
    },
    reportInternalMetadata(e) {
      if (et("reportInternalMetadata")) return !1;
      return transport.reportInternalMetadata?.(e) ?? !1;
    },
    workerEpoch: () => ({
      sessionId: k,
      epoch: transport.getEpoch()
    }),
    refreshGitBranch() {
      _n?.();
    },
    async publishGitStateBeforeHandoff() {
      if (!uo) return;
      try {
        lo?.();
        let e = await uo();
        if (e === void 0) t("[remote-bridge] git state publish before handoff ran past its bound");else if (!e) t("[remote-bridge] git state publish before handoff ended with the transport closed");
      } catch (error) {
        t(`[remote-bridge] git state publish before handoff failed: ${d(error)}`, {
          level: "error"
        });
      }
    },
    writeSdkMessages(e) {
      if (et("writeSdkMessages")) return;
      Ze.note(e);
      let r = e.filter(item => !item.uuid || !Jn.has(item.uuid)),
        a = Oe === "deferred" ? r.filter(item => !Cn(item)) : r,
        y = Ze.redact(a);
      if (y.length === 0) return;
      if (ge.active) {
        let _ = y.filter(item => item.type !== "stream_event"),
          w = y.length - _.length;
        if (w > 0) t(`[remote-bridge] Dropped ${w} stream_event frame(s) during flush`);
        if (_.length > 0) {
          ge.enqueue(..._.map(B => ({
            seq: Xn++,
            frame: B
          }))), t(`[remote-bridge] Queued ${_.length} SDK event(s) during flush`);
          try {
            if (_.some(Hs)) {
              let B = ge.evictedCount > 0;
              if (ge.evictOldest(N => Hs(N.frame), Os), !B && ge.evictedCount > 0) t(`[remote-bridge] Over ${Os} subagent frames queued during flush; dropping the oldest until it drains`);
            }
          } catch (error) {
            t(`[remote-bridge] Subagent frame cap failed: ${d(error)}`, {
              level: "error"
            });
          }
        }
        return;
      }
      for (let _ of y) if (_.uuid) Jn.add(_.uuid);
      let R = y.map(item => ({
        ...item,
        session_id: k
      }));
      transport.writeBatch(R);
    },
    sendControlRequest(request_2) {
      WKn(request_2.request_id, {
        automated: !z4e(request_2)
      });
      let request = request_2.request;
      if (Oo(request, placeAccountMemoryTool_2)) return no.add(request_2.request_id), t(`[remote-bridge] Keeping an account memory prompt at the terminal (not sent to Remote Control): ${request_2.request_id}`), !1;
      if (request.subtype === "can_use_tool" || request.subtype === "request_user_dialog") Ie.delete(request_2.request_id), Ie.set(request_2.request_id, {
        request: request_2
      }), qt.delete(request_2.request_id);
      if (request.subtype === "request_user_dialog" && (ge.active && !Ar || recovery_in_flight)) return qt.add(request_2.request_id), t(`[remote-bridge] Not forwarding request_user_dialog while writes are gated / transport recovering (local-only): ${request_2.request_id}`), !1;
      if (et("control_request")) return !1;
      let a = {
        ...request_2,
        session_id: k
      };
      if (request.subtype === "can_use_tool") {
        let details;
        if (E("tengu_bridge_requires_action_details", !1)) {
          let R = request.tool_name === We || request.tool_name === xt,
            _;
          if (request.tool_name === Xo) {
            let x = Array.isArray(request.input?.questions) ? request.input.questions : [],
              j = x[0],
              oe = j?.header || j?.question;
            _ = {
              label: "Question",
              body: oe ? oe + (x.length > 1 ? ` (+${x.length - 1} more)` : "") : "Tap to answer"
            };
          } else if (request.tool_name === mb) _ = {
            label: "Plan",
            body: "Plan ready for review"
          };
          if (!_ && request.requires_user_interaction) _ = {
            label: request.display_name ?? request.tool_name,
            body: ""
          };
          let w = R && typeof request.input?.command === "string" ? wQ(request.input.command) : void 0,
            B = R && (request.description === void 0 || Nu(request.input)),
            N = R && typeof request.input?.description === "string" ? request.input.description : void 0;
          details = {
            tool_name: request.tool_name,
            display_tool_name: _?.label ?? request.display_name ?? request.tool_name,
            action_description: _?.body ?? wQ(!B && (request.description || N) || w && es(w, 120) || ""),
            raw_command: _ ? void 0 : w,
            tool_use_id: request.tool_use_id,
            request_id: _ ? "" : request_2.request_id,
            ...(_ && request_2.request_id && {
              suppressed_request_id: request_2.request_id
            }),
            input: request.input
          };
        }
        if (details) Ie.set(request_2.request_id, {
          request: request_2,
          details: details
        });
        yt = !1, xe("requires_action", details);
      } else if (request.subtype === "request_user_dialog") {
        let details_2;
        if (E("tengu_bridge_requires_action_details", !1)) details_2 = iGn(request.dialog_kind, request.payload, request_2.request_id, request.tool_use_id);
        if (details_2) Ie.set(request_2.request_id, {
          request: request_2,
          details: details_2
        });
        yt = !1, xe("requires_action", details_2);
      }
      return kr(a, `control_request request_id=${request_2.request_id}`), !0;
    },
    sendControlResponse(e, r) {
      if (no.has(e.response.request_id)) return;
      if (!r?.skipStateReport) io(e.response.request_id, !0);
      if (et("control_response")) return;
      let a = {
        ...e,
        session_id: k
      };
      if (!r?.skipStateReport && !yt) so();
      kr(a, "control_response");
    },
    sendControlCancelRequest(request_id) {
      if (no.delete(request_id)) return;
      if (qt.delete(request_id)) {
        Ie.delete(request_id), t(`[remote-bridge] Local-only retract of a declined dialog forward request_id=${request_id}`);
        return;
      }
      if (io(request_id, !0), et("control_cancel_request")) return;
      let r = {
        type: "control_cancel_request",
        request_id: request_id,
        session_id: k
      };
      if (!yt) so();
      kr(r, `control_cancel_request request_id=${request_id}`);
    },
    sendResult(e) {
      if (Ft = !1, yt = !0, et("result")) return;
      if (MMs(), xe("idle"), Oe === "deferred" && !tr().eagerResult) {
        t("[remote-bridge] Withheld result (transcript deferred)");
        return;
      }
      let r = UKn(k, Oe === "deferred" && e?.outcome !== void 0 ? {
        ...e,
        outcome: {
          ...e.outcome,
          result: void 0
        }
      } : e);
      kr(r, `result ${r.subtype} is_error=${r.is_error} num_turns=${r.num_turns}${r.user_message_uuid ? ` user_message_uuid=${r.user_message_uuid}` : ""}`);
    },
    stampReply({
      assistantUuid: assistantUuid,
      userMessageUuid: userMessageUuid
    }) {
      if (nr.set(assistantUuid, userMessageUuid), nr.size > Ra) {
        let a = nr.keys().next().value;
        if (a !== void 0) nr.delete(a);
      }
    },
    async subscribePR(repo, prNumber, agentId) {
      if (re) return {
        ok: !1,
        reason: "owner_changed"
      };
      let y = `${repo}#${prNumber}`,
        R = lr.get(y);
      if (agentId) lr.set(y, {
        agentId: agentId,
        repo: repo,
        prNumber: prNumber
      });
      let _ = await Y8e("subscribe", {
        sessionId: k,
        repo: repo,
        prNumber: prNumber,
        baseUrl: baseUrl,
        getAccessToken: getAccessToken,
        getTrustedDeviceToken: getTrustedDeviceToken
      });
      if (!_.ok && agentId) if (R) lr.set(y, R);else lr.delete(y);
      return _;
    },
    async unsubscribePR(repo_2, prNumber_2) {
      if (re) return {
        ok: !1,
        reason: "owner_changed"
      };
      let a = await Y8e("unsubscribe", {
        sessionId: k,
        repo: repo_2,
        prNumber: prNumber_2,
        baseUrl: baseUrl,
        getAccessToken: getAccessToken,
        getTrustedDeviceToken: getTrustedDeviceToken
      });
      if (a.ok) lr.delete(`${repo_2}#${prNumber_2}`);
      return a;
    },
    async recordCreatedPR(e, timeoutMs) {
      if (I) return {
        ok: !1,
        skipped: "no_bridge"
      };
      if (re) return {
        ok: !1,
        skipped: "owner_changed"
      };
      return S0s({
        sessionUrl: qFe(api_base_url, k),
        workerToken: Yn,
        ...e,
        timeoutMs: timeoutMs
      });
    },
    async fetchInboxMessage(fileId) {
      let r = reason_3 => (m("bridge_inbox_fetch", reason_3), {
        ok: !1,
        reason: reason_3
      });
      if (I) return r("no_bridge");
      if (re) return r("owner_changed");
      {
        let a = async B => {
            if (I) return "no_bridge";
            if (re) return "owner_changed";
            if (B?.fresh ? to() : Wt()) {
              let N = await Ii("owner_changed_inbox", B);
              if (N === "changed") return "owner_changed";
              if (N === "inconclusive") return I ? "no_bridge" : "owner_unverified";
            }
            return I ? "no_bridge" : void 0;
          },
          y = await a();
        if (y) return r(y);
        if (onProactiveRefresh) try {
          await onProactiveRefresh();
        } catch (error) {
          t(`[remote-bridge] inbox fetch: token refresh failed: ${d(error)}`, {
            level: "error"
          });
        }
        let R = getAccessToken(),
          _ = await getTrustedDeviceToken();
        if (onProactiveRefresh) {
          let B = await a({
            fresh: !0
          });
          if (B) return r(B);
        }
        let {
          fetchSessionInboxMessage: fetchSessionInboxMessage
        } = import.meta.require("B:/~BUN/root/chunk-ssy7bny5.js");
        return fetchSessionInboxMessage({
          sessionId: k,
          fileId: fileId,
          baseUrl: baseUrl,
          getAccessToken: () => R,
          getTrustedDeviceToken: () => Promise.resolve(_)
        });
      }
      return r("feature_disabled");
    },
    getPRWebhookTargets() {
      return [...lr.values()];
    },
    teardown: teardown,
    neverArchive: neverArchive_2,
    async archive() {
      if (neverArchive_2) return;
      let e = Di();
      await Qt(k, baseUrl, e === void 0 ? ro().token : void 0, orgUUID, Q.teardown_archive_timeout_ms, e, storageV5);
    },
    [Symbol.asyncDispose]() {
      return Eo.teardown({
        reason: "host_exit"
      });
    }
  };
  if (neverArchive_2 && !reattach) Fr(k, storageV5);
  let Qi = bt(Eo);
  return Eo;
}
async function _r(n, h, S) {
  let init_retry_max_attempts = S.init_retry_max_attempts;
  for (let attempt_2 = 1; attempt_2 <= init_retry_max_attempts; attempt_2++) {
    let L = await n();
    if (L !== null) return L;
    if (attempt_2 < init_retry_max_attempts) {
      let z = Math.min(Ay({
        attempt: attempt_2,
        baseMs: S.init_retry_base_delay_ms,
        jitter: {
          kind: "symmetric",
          ratio: S.init_retry_jitter_fraction
        }
      }), S.init_retry_max_delay_ms);
      t(`[remote-bridge] ${h} failed (attempt ${attempt_2}/${init_retry_max_attempts}), retrying in ${Math.round(z)}ms`), await Y(z);
    }
  }
  return null;
}
async function xo(n, h, S, C) {
  let H = !1,
    L = !1,
    z = await _r(async () => {
      if (H) L = !0;
      let q = C.getAccessToken(),
        A = !1,
        J = await n(q, () => {
          A = !0;
        }),
        te = FH(J);
      if ((J === null || te) && A && C.onAuth401 && !H && !C.recoveryAttemptedTokens.has(q)) {
        C.recoveryAttemptedTokens.add(q);
        let refreshed = !1;
        try {
          refreshed = await C.onAuth401(q);
        } catch (error) {
          t(`[remote-bridge] ${h} 401 \u2014 OAuth refresh threw: ${d(error)}`, {
            level: "error"
          });
        }
        if (H = refreshed, t(`[remote-bridge] ${h} 401 \u2014 OAuth ${refreshed ? "refreshed; retrying with the fresh token" : "refresh unavailable"}`), X("info", "bridge_repl_v2_init_401_refresh", {
          refreshed: refreshed
        }), H && te) return null;
      }
      return J;
    }, h, S);
  if (z === null && H && !L) return t(`[remote-bridge] ${h} refreshed on the final attempt; one extra try with the fresh token`), n(C.getAccessToken(), () => {});
  return z;
}
function Dd(n) {
  if (n.reason === "untrusted_device") return n.refusal?.kind !== "signature_wanted" && !Bme();
  return n.reason === "session_stale_relogin";
}
function kt(n) {
  return Dd(n) ? "auth" : "terminal";
}
function Dn(n) {
  return n.reason === "request_rejected" && n.status === 403 && cje(n.source);
}
function Pn(n, h) {
  return Dn(h) ? `${n}_credentials_rejected_nonorigin` : `${n}_credentials_rejected`;
}
var Bd = {
  nonorigin_cf: "recovered_403_nonorigin_cf",
  nonorigin_other: "recovered_403_nonorigin_other"
};
function Is(n) {
  switch (n?.rejectSource) {
    case "nonorigin_cf":
      return "transport_closed_403_nonorigin_cf";
    case "nonorigin_other":
      return "transport_closed_403_nonorigin_other";
    case "origin":
    case void 0:
      return "transport_closed_403";
  }
}
function IAe(n) {
  switch (n.reason) {
    case "untrusted_device":
      return Hke(n.refusal);
    case "session_stale_relogin":
      return "session expired for trusted-device check \u2014 run /login to re-authenticate";
    case "invalid_session_id":
      return "session id contains unsupported characters \u2014 check the --session-id value";
    case "request_rejected":
      if (Dn(n)) return `${QIr(n.source)} \u2014 run /remote-control to retry`;
      return `Remote Control server rejected the request (HTTP ${n.status}) \u2014 run /remote-control to retry`;
    case "malformed_response":
      return KFt;
  }
}
async function jd(n, api_base_url_2, S, C, H, L, z) {
  let q = await getTrustedDeviceToken(),
    A = await XIr(n, api_base_url_2, S, C, q, H, z),
    J = Nae(A) && A.reason === "untrusted_device" ? A.refusal : void 0;
  if (J !== void 0 && Ymt(J)) A = (await GFt(q, te => XIr(n, api_base_url_2, S, C, te, H, z), L)) ?? A;else if (J !== void 0) jae("[remote-bridge]", J), UH();
  if (!A) return null;
  if (FH(A)) return A;
  if (Nae(A)) {
    if (A.reason === "untrusted_device" && !VX()) return {
      terminal: !0,
      reason: "request_rejected",
      status: 403
    };
    return A;
  }
  return Jfe() ? {
    ...A,
    api_base_url: api_base_url_2
  } : A;
}
function Ds(n, h) {
  if (n === 403 || n === 404) return "superseded_unknown";
  if (n !== 4090) return;
  switch (h) {
    case "superseded_by_worker":
      return "superseded";
    case "session_not_active":
      return "session_archived";
    case "epoch_conflict":
    case void 0:
      return "superseded_unknown";
    case "epoch_stale":
    case "session_not_found":
    case "token_expired":
    case "auth_exhausted":
      return;
  }
}
function js(n) {
  return n !== "session_archived";
}
function Ns(n, h) {
  return n === "skipped_superseded" ? h === "session_archived" ? "skipped_archived" : "skipped_superseded" : n === "skipped_owner_changed" ? "skipped_owner_changed" : n === "no_token" ? "skipped_no_token" : n === "invalid" ? "invalid_id" : n === "untrusted_device" ? "server_403_untrusted" : n === "timeout" || n === "error" ? "network_error" : n >= 500 ? "server_5xx" : n >= 400 ? "server_4xx" : "ok";
}
async function Qt(n, h, S, orgUUID_2, H, L, z) {
  if (MC(n)) return t(`[remote-bridge] Archive suppressed for teleported session ${n}`), Fr(n, z), 200;
  if (L === "owner_changed") return t(`[remote-bridge] Archive suppressed for owner-changed session ${n}`), X("info", "bridge_repl_archive_suppressed_owner_changed"), "skipped_owner_changed";
  if (L !== void 0) return t(`[remote-bridge] Archive suppressed for ${L} session ${n}`), X("info", L === "superseded" ? "bridge_repl_archive_suppressed_superseded" : L === "session_archived" ? "bridge_repl_archive_suppressed_archived" : "bridge_repl_archive_suppressed_superseded_unknown"), "skipped_superseded";
  if (!S) return "no_token";
  let trustedDeviceToken = await getTrustedDeviceToken().catch(() => {
      return;
    }),
    A = await Bin(h, S, n, H, {
      useV2: wG(),
      orgUUID: orgUUID_2,
      trustedDeviceToken: trustedDeviceToken
    });
  if (An(A)) Fr(n, z);
  return A;
}
var Us = 8,
  baseMs = 5000,
  floorMs = 2000;
async function Fs(n, h) {
  for (let S = 0; S < Us; S++) {
    if (S > 0) await Y(SP({
      baseMs: baseMs,
      floorMs: floorMs,
      attempt: S - 1
    }), void 0, {
      unref: !0
    });
    let C = await h();
    if (An(C) || C === "untrusted_device") return;
    t(`[remote-bridge] Archive of abandoned session ${n} not confirmed (attempt ${S + 1}/${Us}, status=${C})`);
  }
}
async function Fd(n, h, S, orgUUID_3, H, L, z) {
  if (!S) return {
    outcome: "ok"
  };
  let trustedDeviceToken_2 = await getTrustedDeviceToken().catch(() => {
      return;
    }),
    A = await JIr(h, S, n, H, {
      useV2: wG(),
      orgUUID: orgUUID_3,
      trustedDeviceToken: trustedDeviceToken_2
    });
  if (A === "invalid") return X("info", "bridge_repl_v2_unarchive_invalid_id"), {
    outcome: "gone",
    status: "invalid"
  };
  if (A === "untrusted_device" || A === "untrusted_device_no_enroll" || A === "session_stale_relogin") {
    if (A === "untrusted_device") {
      let te = await GFt(trustedDeviceToken_2, trustedDeviceToken_3 => JIr(h, S, n, H, {
        useV2: wG(),
        orgUUID: orgUUID_3,
        trustedDeviceToken: trustedDeviceToken_3
      }), z);
      if (typeof te === "number" && (te < 300 || te === 409)) return X("info", "bridge_repl_v2_unarchive_ok"), {
        outcome: "ok"
      };
      if (te === "untrusted_device_no_enroll") return X("info", "bridge_repl_v2_unarchive_elevated_auth"), {
        outcome: "elevated_auth",
        reason: "untrusted_device",
        refusal: refusal
      };
    }
    if (X("info", "bridge_repl_v2_unarchive_elevated_auth"), A === "untrusted_device_no_enroll") return jae("[remote-bridge]", refusal), UH(), {
      outcome: "elevated_auth",
      reason: "untrusted_device",
      refusal: refusal
    };
    return {
      outcome: "elevated_auth",
      reason: A
    };
  }
  if (typeof A !== "number") return X("info", "bridge_repl_v2_unarchive_failed"), null;
  let J = A < 300 || A === 409;
  if (X("info", J ? "bridge_repl_v2_unarchive_ok" : "bridge_repl_v2_unarchive_failed"), J) return {
    outcome: "ok"
  };
  if (A === 400 || A === 403 || A === 404) return {
    outcome: "gone",
    status: A
  };
  if (A === 401) L?.();
  return null;
}
function Hfr(n, h) {
  if (h <= 0 || n.length <= h) return n;
  let S = n.length - h;
  for (let {
    fromIdx: fromIdx,
    toIdx: toIdx
  } of eGn(n)) if (S > fromIdx && S <= toIdx) {
    S = fromIdx;
    break;
  }
  return n.slice(S);
}
function Hd(n) {
  if (n.type !== "user" || !can(n) || In(n)) return !1;
  let content_4 = n.message.content;
  return typeof content_4 === "string" || !content_4.some(item => item.type === "tool_result");
}
function Hs(n) {
  if (n.type !== "assistant" && n.type !== "user" || n.parent_tool_use_id == null || !Cn(n)) return !1;
  return n.type === "user" || !n.message.content.some(item => item.type === "tool_use" && (item.name === ht || item.name === Op));
}
function In(n) {
  if (n.type !== "user" || !bh(n)) return !1;
  let content_5 = n.message.content;
  return typeof content_5 === "string" ? OEe.includes(content_5) : content_5.every(item => item.type !== "text" || OEe.includes(item.text));
}
export { fcs, PMn, OMn, Ffr, mcs, IMn, mode as Bso, gcs, IAe, Hfr };