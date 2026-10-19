// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { E } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { cu as v, IG, jU } from "B:/~BUN/root/chunk-hkc0g0wr.js";
var c = "tengu_synthetic_fog",
  l = 5242880,
  p = 65536,
  m = 33554432,
  _ = 65536;
function f() {
  let e = E(c, l);
  return typeof e === "number" && Number.isSafeInteger(e) && e >= p && e <= m ? e : l;
}
function kvt() {
  return f() - _;
}
function z5o({
  answer: answer,
  bytes: bytes,
  status: status,
  tooLarge: tooLarge
}) {
  let n = tooLarge ? `is too large for the session service to carry back (${bytes} bytes)` : `was refused by the session service (HTTP ${status})`,
    r = IG(typeof answer === "object" && answer !== null ? Reflect.get(answer, "result") : void 0),
    t = r.envelope.status === "present" ? r.envelope.envelope : void 0;
  if (t === void 0) return {
    content: [{
      type: "text",
      text: `(this machine's answer ${n}, so it was not returned)`
    }],
    isError: !0
  };
  let s = t.target.name,
    a = tooLarge ? " Run a narrower command instead: read part of the file (offset and limit), filter the output (head, tail, grep), or for an image or screenshot save a smaller copy on the machine and read that." : "",
    u = t.outcome === "completed" ? `The command ran to completion on ${s}, but its result ${n}, so it was not returned. Its effects stand \u2014 do not re-run it just to see the output.${a}` : `${s} answered this call, but the answer ${n}, so it was not returned.${a}`;
  return jU({
    envelope: {
      v: v,
      outcome: "failed",
      ...(t.call_id !== void 0 && {
        call_id: t.call_id
      }),
      target: t.target,
      code: "tool_error",
      message: u,
      ...mKr(t)
    },
    content: [{
      type: "text",
      text: u
    }]
  });
}
function mKr(e) {
  return "replayed" in e && e.replayed === !0 ? {
    replayed: !0,
    ...("served_at" in e && e.served_at !== void 0 && {
      served_at: e.served_at
    })
  } : {};
}
export { kvt, z5o, mKr };