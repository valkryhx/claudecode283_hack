// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { _pr, Aet } from "B:/~BUN/root/chunk-gyysn9h9.js";
import { IC } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { Oo, ne } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { XH, oZ, Mrt, Drt, FO } from "B:/~BUN/root/chunk-3jyp964r.js";
import { att } from "B:/~BUN/root/chunk-xh2245md.js";
import { Ts } from "B:/~BUN/root/chunk-cz23t9h8.js";
function k4o(e) {
  let t = Aet.safeParse(e?.[_pr]);
  return t.success ? {
    taskId: t.data.taskId
  } : null;
}
function E4o(e, serverName, requestDialog, transportErrorState) {
  let n = att(e, {
    serverName: serverName,
    requestDialog: requestDialog,
    transportErrorState: transportErrorState,
    runElicitationHooks: runElicitationHooks,
    runElicitationResultHooks: runElicitationResultHooks
  });
  try {
    e.setRequestHandler("elicitation/create", (i, o) => n.handle(i, {
      signal: o.mcpReq.signal
    })), e.setNotificationHandler("notifications/elicitation/complete", i => {
      let {
        elicitationId: elicitationId
      } = i.params;
      if (ne(serverName, `Received elicitation completion notification: ${elicitationId}`), FO(XH(), {
        message: `MCP server "${serverName}" confirmed elicitation ${elicitationId} complete`,
        notificationType: "elicitation_complete"
      }).catch(oZ), !n.complete(elicitationId)) ne(serverName, `Ignoring completion notification for unknown elicitation: ${elicitationId}`);
    });
  } catch {
    return;
  }
}
function ppr({
  connected: connected,
  params: params,
  signal: signal,
  requestDialog: requestDialog_2,
  transportErrorState: transportErrorState_2
}) {
  return att(Ts(connected.client), {
    serverName: connected.name,
    requestDialog: requestDialog_2,
    transportErrorState: connected.transportErrorState,
    runElicitationHooks: runElicitationHooks,
    runElicitationResultHooks: runElicitationResultHooks
  }).handle({
    params: params
  }, {
    signal: signal,
    transportErrorState: transportErrorState_2
  });
}
async function runElicitationHooks(serverName_2, t, signal_2) {
  let session = XH();
  if (session.project === null) throw new IC();
  try {
    let mode = t.mode === "url" ? "url" : "form",
      url = "url" in t ? t.url : void 0,
      elicitationId_2 = "elicitationId" in t ? t.elicitationId : void 0,
      {
        elicitationResponse: elicitationResponse,
        blockingError: blockingError
      } = await Mrt({
        session: session,
        serverName: serverName_2,
        message: t.message,
        requestedSchema: "requestedSchema" in t ? t.requestedSchema : void 0,
        signal: signal_2,
        mode: mode,
        url: url,
        elicitationId: elicitationId_2
      });
    if (blockingError) return {
      action: "decline"
    };
    if (elicitationResponse) return {
      action: elicitationResponse.action,
      content: elicitationResponse.content
    };
    return;
  } catch (error) {
    Oo(serverName_2, `Elicitation hook error: ${error}`);
    return;
  }
}
async function runElicitationResultHooks(serverName_3, t, signal_3, mode_2, elicitationId_3) {
  let session_2 = XH();
  if (session_2.project === null) throw new IC();
  try {
    let {
      elicitationResultResponse: elicitationResultResponse,
      blockingError: blockingError_2
    } = await Drt({
      session: session_2,
      serverName: serverName_3,
      action: t.action,
      content: t.content,
      signal: signal_3,
      mode: mode_2,
      elicitationId: elicitationId_3
    });
    if (blockingError_2) return FO(session_2, {
      message: `Elicitation response for server "${serverName_3}": decline`,
      notificationType: "elicitation_response"
    }).catch(oZ), {
      action: "decline"
    };
    let a = elicitationResultResponse ? {
      action: elicitationResultResponse.action,
      content: elicitationResultResponse.content ?? t.content
    } : t;
    return FO(session_2, {
      message: `Elicitation response for server "${serverName_3}": ${a.action}`,
      notificationType: "elicitation_response"
    }).catch(oZ), a;
  } catch (error) {
    return Oo(serverName_3, `ElicitationResult hook error: ${error}`), FO(session_2, {
      message: `Elicitation response for server "${serverName_3}": ${t.action}`,
      notificationType: "elicitation_response"
    }).catch(oZ), t;
  }
}
export { k4o, E4o, ppr, runElicitationHooks as F5t, runElicitationResultHooks as $5t };