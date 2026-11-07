// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  fIe,
  $5r,
  s3e,
  I4t
} from "B:/~BUN/root/chunk-ahv8vexc.js";
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

function Kga(e) {
  let t = $5r.safeParse(e?.[fIe]);
  return t.success ? {
    taskId: t.data.taskId
  } : null
}

function qga(e, t, s, c, r) {
  if (NI({
      name: t
    }) !== void 0) return;
  let o = _Yt(e, {
    serverName: t,
    pluginSource: r,
    requestDialog: s,
    transportErrorState: c,
    runElicitationHooks: K7n,
    runElicitationResultHooks: q7n
  });
  try {
    e.setRequestHandler(s3e, (n, i) => o.handle(n, {
      signal: i.signal
    })), e.setNotificationHandler(I4t, (n) => {
      let {
        elicitationId: i
      } = n.params;
      if (ae(t, `Received elicitation completion notification: ${i}`), T$(s6(), {
          message: `MCP server "${t}" confirmed elicitation ${i} complete`,
          notificationType: "elicitation_complete"
        }).catch(u6), !o.complete(i)) ae(t, `Ignoring completion notification for unknown elicitation: ${i}`)
    })
  } catch {
    return
  }
}

function Yga({
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
    runElicitationHooks: K7n,
    runElicitationResultHooks: q7n
  }).handle({
    params: t
  }, {
    signal: s,
    transportErrorState: r
  })
}
async function K7n(e, t, s) {
  let c = s6();
  if (c.project === null && !q()) throw new YA;
  try {
    let r = t.mode === "url" ? "url" : "form",
      o = "url" in t ? t.url : void 0,
      n = "elicitationId" in t ? t.elicitationId : void 0,
      {
        elicitationResponse: i,
        blockingError: a
      } = await M8t({
        session: c,
        serverName: e,
        message: t.message,
        requestedSchema: "requestedSchema" in t ? t.requestedSchema : void 0,
        signal: s,
        mode: r,
        url: o,
        elicitationId: n
      });
    if (a) return {
      action: "decline"
    };
    if (i) return {
      action: i.action,
      content: i.content
    };
    return
  } catch (r) {
    Gs(e, `Elicitation hook error: ${r}`);
    return
  }
}
async function q7n(e, t, s, c, r) {
  let o = s6();
  if (o.project === null && !q()) throw new YA;
  try {
    let {
      elicitationResultResponse: n,
      blockingError: i
    } = await D8t({
      session: o,
      serverName: e,
      action: t.action,
      content: t.content,
      signal: s,
      mode: c,
      elicitationId: r
    });
    if (i) return T$(o, {
      message: `Elicitation response for server "${e}": decline`,
      notificationType: "elicitation_response"
    }).catch(u6), {
      action: "decline"
    };
    let a = n ? {
      action: n.action,
      content: n.content ?? t.content
    } : t;
    return T$(o, {
      message: `Elicitation response for server "${e}": ${a.action}`,
      notificationType: "elicitation_response"
    }).catch(u6), a
  } catch (n) {
    return Gs(e, `ElicitationResult hook error: ${n}`), T$(o, {
      message: `Elicitation response for server "${e}": ${t.action}`,
      notificationType: "elicitation_response"
    }).catch(u6), t
  }
}
export {
  Kga,
  qga,
  Yga,
  K7n,
  q7n
};
