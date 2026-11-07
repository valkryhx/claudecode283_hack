// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  zkn,
  Gkn
} from "B:/~BUN/root/chunk-w089myk0.js";
import {
  YA,
  q
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  Gs,
  ae
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  NI
} from "B:/~BUN/root/chunk-yhafkw66.js";
import {
  s6,
  u6,
  M8t,
  D8t,
  T$
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  _Yt
} from "B:/~BUN/root/chunk-3rd5gzq1.js";
import {
  _a
} from "B:/~BUN/root/chunk-5xe4wxb1.js";

function V_a(e) {
  let t = Gkn.safeParse(e?.[zkn]);
  return t.success ? {
    taskId: t.data.taskId
  } : null
}

function K_a(e, t, s, c, r) {
  if (NI({
      name: t
    }) !== void 0) return;
  let i = _Yt(e, {
    serverName: t,
    pluginSource: r,
    requestDialog: s,
    transportErrorState: c,
    runElicitationHooks: asr,
    runElicitationResultHooks: lsr
  });
  try {
    e.setRequestHandler("elicitation/create", (n, o) => i.handle(n, {
      signal: o.mcpReq.signal
    })), e.setNotificationHandler("notifications/elicitation/complete", (n) => {
      let {
        elicitationId: o
      } = n.params;
      if (ae(t, `Received elicitation completion notification: ${o}`), T$(s6(), {
          message: `MCP server "${t}" confirmed elicitation ${o} complete`,
          notificationType: "elicitation_complete"
        }).catch(u6), !i.complete(o)) ae(t, `Ignoring completion notification for unknown elicitation: ${o}`)
    })
  } catch {
    return
  }
}

function Y8o({
  connected: e,
  params: t,
  signal: s,
  requestDialog: c,
  transportErrorState: r
}) {
  return _Yt(_a(e.client), {
    serverName: e.name,
    pluginSource: e.config.pluginSource,
    requestDialog: c,
    transportErrorState: e.transportErrorState,
    runElicitationHooks: asr,
    runElicitationResultHooks: lsr
  }).handle({
    params: t
  }, {
    signal: s,
    transportErrorState: r
  })
}
async function asr(e, t, s) {
  let c = s6();
  if (c.project === null && !q()) throw new YA;
  try {
    let r = t.mode === "url" ? "url" : "form",
      i = "url" in t ? t.url : void 0,
      n = "elicitationId" in t ? t.elicitationId : void 0,
      {
        elicitationResponse: o,
        blockingError: a
      } = await M8t({
        session: c,
        serverName: e,
        message: t.message,
        requestedSchema: "requestedSchema" in t ? t.requestedSchema : void 0,
        signal: s,
        mode: r,
        url: i,
        elicitationId: n
      });
    if (a) return {
      action: "decline"
    };
    if (o) return {
      action: o.action,
      content: o.content
    };
    return
  } catch (r) {
    Gs(e, `Elicitation hook error: ${r}`);
    return
  }
}
async function lsr(e, t, s, c, r) {
  let i = s6();
  if (i.project === null && !q()) throw new YA;
  try {
    let {
      elicitationResultResponse: n,
      blockingError: o
    } = await D8t({
      session: i,
      serverName: e,
      action: t.action,
      content: t.content,
      signal: s,
      mode: c,
      elicitationId: r
    });
    if (o) return T$(i, {
      message: `Elicitation response for server "${e}": decline`,
      notificationType: "elicitation_response"
    }).catch(u6), {
      action: "decline"
    };
    let a = n ? {
      action: n.action,
      content: n.content ?? t.content
    } : t;
    return T$(i, {
      message: `Elicitation response for server "${e}": ${a.action}`,
      notificationType: "elicitation_response"
    }).catch(u6), a
  } catch (n) {
    return Gs(e, `ElicitationResult hook error: ${n}`), T$(i, {
      message: `Elicitation response for server "${e}": ${t.action}`,
      notificationType: "elicitation_response"
    }).catch(u6), t
  }
}
export {
  V_a,
  K_a,
  Y8o,
  asr,
  lsr
};
