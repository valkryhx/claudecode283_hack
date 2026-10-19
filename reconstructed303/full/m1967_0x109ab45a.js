// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  GKt,
  VKt
} from "B:/~BUN/root/chunk-n2zx2zrd.js";
import {
  f0,
  de
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  Lo,
  re
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  Hz,
  Vz,
  nOt,
  rOt,
  V0
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  qR
} from "B:/~BUN/root/chunk-xyxdcn7p.js";
import {
  FEt
} from "B:/~BUN/root/chunk-ggycahmy.js";
import {
  Ai
} from "B:/~BUN/root/chunk-0r89607w.js";

function wni(e) {
  let t = VKt.safeParse(e?.[GKt]);
  return t.success ? {
    taskId: t.data.taskId
  } : null
}

function vni(e, t, c, r) {
  if (qR({
      name: t
    }) !== void 0) return;
  let n = FEt(e, {
    serverName: t,
    requestDialog: c,
    transportErrorState: r,
    runElicitationHooks: vCn,
    runElicitationResultHooks: kCn
  });
  try {
    e.setRequestHandler("elicitation/create", (i, o) => n.handle(i, {
      signal: o.mcpReq.signal
    })), e.setNotificationHandler("notifications/elicitation/complete", (i) => {
      let {
        elicitationId: o
      } = i.params;
      if (re(t, `Received elicitation completion notification: ${o}`), V0(Hz(), {
          message: `MCP server "${t}" confirmed elicitation ${o} complete`,
          notificationType: "elicitation_complete"
        }).catch(Vz), !n.complete(o)) re(t, `Ignoring completion notification for unknown elicitation: ${o}`)
    })
  } catch {
    return
  }
}

function L9r({
  connected: e,
  params: t,
  signal: c,
  requestDialog: r,
  transportErrorState: n
}) {
  return FEt(Ai(e.client), {
    serverName: e.name,
    requestDialog: r,
    transportErrorState: e.transportErrorState,
    runElicitationHooks: vCn,
    runElicitationResultHooks: kCn
  }).handle({
    params: t
  }, {
    signal: c,
    transportErrorState: n
  })
}
async function vCn(e, t, c) {
  let r = Hz();
  if (r.project === null && !de()) throw new f0;
  try {
    let n = t.mode === "url" ? "url" : "form",
      i = "url" in t ? t.url : void 0,
      o = "elicitationId" in t ? t.elicitationId : void 0,
      {
        elicitationResponse: s,
        blockingError: a
      } = await nOt({
        session: r,
        serverName: e,
        message: t.message,
        requestedSchema: "requestedSchema" in t ? t.requestedSchema : void 0,
        signal: c,
        mode: n,
        url: i,
        elicitationId: o
      });
    if (a) return {
      action: "decline"
    };
    if (s) return {
      action: s.action,
      content: s.content
    };
    return
  } catch (n) {
    Lo(e, `Elicitation hook error: ${n}`);
    return
  }
}
async function kCn(e, t, c, r, n) {
  let i = Hz();
  if (i.project === null && !de()) throw new f0;
  try {
    let {
      elicitationResultResponse: o,
      blockingError: s
    } = await rOt({
      session: i,
      serverName: e,
      action: t.action,
      content: t.content,
      signal: c,
      mode: r,
      elicitationId: n
    });
    if (s) return V0(i, {
      message: `Elicitation response for server "${e}": decline`,
      notificationType: "elicitation_response"
    }).catch(Vz), {
      action: "decline"
    };
    let a = o ? {
      action: o.action,
      content: o.content ?? t.content
    } : t;
    return V0(i, {
      message: `Elicitation response for server "${e}": ${a.action}`,
      notificationType: "elicitation_response"
    }).catch(Vz), a
  } catch (o) {
    return Lo(e, `ElicitationResult hook error: ${o}`), V0(i, {
      message: `Elicitation response for server "${e}": ${t.action}`,
      notificationType: "elicitation_response"
    }).catch(Vz), t
  }
}
export {
  wni,
  vni,
  L9r,
  vCn,
  kCn
};
