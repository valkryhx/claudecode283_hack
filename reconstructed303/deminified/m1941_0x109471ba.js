// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { J_e, ylr, $Ne, LTt } from "B:/~BUN/root/chunk-d8rhtyyx.js";
import { f0, de } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { Lo, re } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { Hz, Vz, nOt, rOt, V0 } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { qR } from "B:/~BUN/root/chunk-xyxdcn7p.js";
import { FEt } from "B:/~BUN/root/chunk-ggycahmy.js";
import { Ai } from "B:/~BUN/root/chunk-0r89607w.js";
function zti(e) {
  let t = ylr.safeParse(e?.[J_e]);
  return t.success ? {
    taskId: t.data.taskId
  } : null;
}
function Gti(e, t, requestDialog, transportErrorState) {
  if (qR({
    name: t
  }) !== void 0) return;
  let n = FEt(e, {
    serverName: t,
    requestDialog: requestDialog,
    transportErrorState: transportErrorState,
    runElicitationHooks: runElicitationHooks,
    runElicitationResultHooks: runElicitationResultHooks
  });
  try {
    e.setRequestHandler($Ne, (i, o) => n.handle(i, {
      signal: o.signal
    })), e.setNotificationHandler(LTt, i => {
      let {
        elicitationId: elicitationId
      } = i.params;
      if (re(t, `Received elicitation completion notification: ${elicitationId}`), V0(Hz(), {
        message: `MCP server "${t}" confirmed elicitation ${elicitationId} complete`,
        notificationType: "elicitation_complete"
      }).catch(Vz), !n.complete(elicitationId)) re(t, `Ignoring completion notification for unknown elicitation: ${elicitationId}`);
    });
  } catch {
    return;
  }
}
function Vti({
  connected: connected,
  params: params,
  signal: signal,
  requestDialog: requestDialog_2,
  transportErrorState: transportErrorState_2
}) {
  return FEt(Ai(connected.client), {
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
async function runElicitationHooks(serverName, t, signal_2) {
  let session = Hz();
  if (session.project === null && !de()) throw new f0();
  try {
    let mode = t.mode === "url" ? "url" : "form",
      url = "url" in t ? t.url : void 0,
      elicitationId_2 = "elicitationId" in t ? t.elicitationId : void 0,
      {
        elicitationResponse: elicitationResponse,
        blockingError: blockingError
      } = await nOt({
        session: session,
        serverName: serverName,
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
    Lo(serverName, `Elicitation hook error: ${error}`);
    return;
  }
}
async function runElicitationResultHooks(serverName_2, t, signal_3, mode_2, elicitationId_3) {
  let session_2 = Hz();
  if (session_2.project === null && !de()) throw new f0();
  try {
    let {
      elicitationResultResponse: elicitationResultResponse,
      blockingError: blockingError_2
    } = await rOt({
      session: session_2,
      serverName: serverName_2,
      action: t.action,
      content: t.content,
      signal: signal_3,
      mode: mode_2,
      elicitationId: elicitationId_3
    });
    if (blockingError_2) return V0(session_2, {
      message: `Elicitation response for server "${serverName_2}": decline`,
      notificationType: "elicitation_response"
    }).catch(Vz), {
      action: "decline"
    };
    let a = elicitationResultResponse ? {
      action: elicitationResultResponse.action,
      content: elicitationResultResponse.content ?? t.content
    } : t;
    return V0(session_2, {
      message: `Elicitation response for server "${serverName_2}": ${a.action}`,
      notificationType: "elicitation_response"
    }).catch(Vz), a;
  } catch (error) {
    return Lo(serverName_2, `ElicitationResult hook error: ${error}`), V0(session_2, {
      message: `Elicitation response for server "${serverName_2}": ${t.action}`,
      notificationType: "elicitation_response"
    }).catch(Vz), t;
  }
}
export { zti, Gti, Vti, runElicitationHooks as iTn, runElicitationResultHooks as aTn };