// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { zkn, Gkn } from "B:/~BUN/root/chunk-w089myk0.js";
import { YA, q } from "B:/~BUN/root/chunk-game8aqv.js";
import { Gs, ae } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { NI } from "B:/~BUN/root/chunk-yhafkw66.js";
import { s6, u6, M8t, D8t, T$ } from "B:/~BUN/root/chunk-27h4st9h.js";
import { _Yt } from "B:/~BUN/root/chunk-3rd5gzq1.js";
import { _a } from "B:/~BUN/root/chunk-5xe4wxb1.js";
function V_a(e) {
  let t = Gkn.safeParse(e?.[zkn]);
  return t.success ? {
    taskId: t.data.taskId
  } : null;
}
function K_a(e, t, requestDialog, transportErrorState, pluginSource) {
  if (NI({
    name: t
  }) !== void 0) return;
  let i = _Yt(e, {
    serverName: t,
    pluginSource: pluginSource,
    requestDialog: requestDialog,
    transportErrorState: transportErrorState,
    runElicitationHooks: runElicitationHooks,
    runElicitationResultHooks: runElicitationResultHooks
  });
  try {
    e.setRequestHandler("elicitation/create", (n, o) => i.handle(n, {
      signal: o.mcpReq.signal
    })), e.setNotificationHandler("notifications/elicitation/complete", n => {
      let {
        elicitationId: elicitationId
      } = n.params;
      if (ae(t, `Received elicitation completion notification: ${elicitationId}`), T$(s6(), {
        message: `MCP server "${t}" confirmed elicitation ${elicitationId} complete`,
        notificationType: "elicitation_complete"
      }).catch(u6), !i.complete(elicitationId)) ae(t, `Ignoring completion notification for unknown elicitation: ${elicitationId}`);
    });
  } catch {
    return;
  }
}
function Y8o({
  connected: connected,
  params: params,
  signal: signal,
  requestDialog: requestDialog_2,
  transportErrorState: transportErrorState_2
}) {
  return _Yt(_a(connected.client), {
    serverName: connected.name,
    pluginSource: connected.config.pluginSource,
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
  let session = s6();
  if (session.project === null && !q()) throw new YA();
  try {
    let mode = t.mode === "url" ? "url" : "form",
      url = "url" in t ? t.url : void 0,
      elicitationId_2 = "elicitationId" in t ? t.elicitationId : void 0,
      {
        elicitationResponse: elicitationResponse,
        blockingError: blockingError
      } = await M8t({
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
    Gs(serverName, `Elicitation hook error: ${error}`);
    return;
  }
}
async function runElicitationResultHooks(serverName_2, t, signal_3, mode_2, elicitationId_3) {
  let session_2 = s6();
  if (session_2.project === null && !q()) throw new YA();
  try {
    let {
      elicitationResultResponse: elicitationResultResponse,
      blockingError: blockingError_2
    } = await D8t({
      session: session_2,
      serverName: serverName_2,
      action: t.action,
      content: t.content,
      signal: signal_3,
      mode: mode_2,
      elicitationId: elicitationId_3
    });
    if (blockingError_2) return T$(session_2, {
      message: `Elicitation response for server "${serverName_2}": decline`,
      notificationType: "elicitation_response"
    }).catch(u6), {
      action: "decline"
    };
    let a = elicitationResultResponse ? {
      action: elicitationResultResponse.action,
      content: elicitationResultResponse.content ?? t.content
    } : t;
    return T$(session_2, {
      message: `Elicitation response for server "${serverName_2}": ${a.action}`,
      notificationType: "elicitation_response"
    }).catch(u6), a;
  } catch (error) {
    return Gs(serverName_2, `ElicitationResult hook error: ${error}`), T$(session_2, {
      message: `Elicitation response for server "${serverName_2}": ${t.action}`,
      notificationType: "elicitation_response"
    }).catch(u6), t;
  }
}
export { V_a, K_a, Y8o, runElicitationHooks as asr, runElicitationResultHooks as lsr };