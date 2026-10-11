// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  kse,
  VIn,
  Lwe,
  ftt
} from "B:/~BUN/root/chunk-1wfkh4zw.js";
import {
  IC
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  Oo,
  ne
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  XH,
  oZ,
  Mrt,
  Drt,
  FO
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  att
} from "B:/~BUN/root/chunk-xh2245md.js";
import {
  Ts
} from "B:/~BUN/root/chunk-cz23t9h8.js";

function F4o(e) {
  let t = VIn.safeParse(e?.[kse]);
  return t.success ? {
    taskId: t.data.taskId
  } : null
}

function $4o(e, t, c, r) {
  let n = att(e, {
    serverName: t,
    requestDialog: c,
    transportErrorState: r,
    runElicitationHooks: S8t,
    runElicitationResultHooks: w8t
  });
  try {
    e.setRequestHandler(Lwe, (i, o) => n.handle(i, {
      signal: o.signal
    })), e.setNotificationHandler(ftt, (i) => {
      let {
        elicitationId: o
      } = i.params;
      if (ne(t, `Received elicitation completion notification: ${o}`), FO(XH(), {
          message: `MCP server "${t}" confirmed elicitation ${o} complete`,
          notificationType: "elicitation_complete"
        }).catch(oZ), !n.complete(o)) ne(t, `Ignoring completion notification for unknown elicitation: ${o}`)
    })
  } catch {
    return
  }
}

function U4o({
  connected: e,
  params: t,
  signal: c,
  requestDialog: r,
  transportErrorState: n
}) {
  return att(Ts(e.client), {
    serverName: e.name,
    requestDialog: r,
    transportErrorState: e.transportErrorState,
    runElicitationHooks: S8t,
    runElicitationResultHooks: w8t
  }).handle({
    params: t
  }, {
    signal: c,
    transportErrorState: n
  })
}
async function S8t(e, t, c) {
  let r = XH();
  if (r.project === null) throw new IC;
  try {
    let n = t.mode === "url" ? "url" : "form",
      i = "url" in t ? t.url : void 0,
      o = "elicitationId" in t ? t.elicitationId : void 0,
      {
        elicitationResponse: s,
        blockingError: a
      } = await Mrt({
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
    Oo(e, `Elicitation hook error: ${n}`);
    return
  }
}
async function w8t(e, t, c, r, n) {
  let i = XH();
  if (i.project === null) throw new IC;
  try {
    let {
      elicitationResultResponse: o,
      blockingError: s
    } = await Drt({
      session: i,
      serverName: e,
      action: t.action,
      content: t.content,
      signal: c,
      mode: r,
      elicitationId: n
    });
    if (s) return FO(i, {
      message: `Elicitation response for server "${e}": decline`,
      notificationType: "elicitation_response"
    }).catch(oZ), {
      action: "decline"
    };
    let a = o ? {
      action: o.action,
      content: o.content ?? t.content
    } : t;
    return FO(i, {
      message: `Elicitation response for server "${e}": ${a.action}`,
      notificationType: "elicitation_response"
    }).catch(oZ), a
  } catch (o) {
    return Oo(e, `ElicitationResult hook error: ${o}`), FO(i, {
      message: `Elicitation response for server "${e}": ${t.action}`,
      notificationType: "elicitation_response"
    }).catch(oZ), t
  }
}
export {
  F4o,
  $4o,
  U4o,
  S8t,
  w8t
};
