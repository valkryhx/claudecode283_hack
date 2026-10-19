// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Da } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { _ } from "B:/~BUN/root/chunk-6za2ez23.js";
import { oTe } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { Hae } from "B:/~BUN/root/chunk-8pqw0dhk.js";
import { kEe } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { randomUUID as k } from "crypto";
var c = Symbol("isolationDispatchGate.mintedReentry");
async function Gqt({
  tool: tool,
  input: input,
  ask: ask,
  permissionPhase: permissionPhase,
  alreadyApproved: alreadyApproved,
  recipientLabel: recipientLabel,
  resolution: p,
  askUnconditionally = !1,
  parse: parse
}) {
  if (!((askUnconditionally || oTe()) && !alreadyApproved)) return {
    proceed: !0,
    input: input,
    asked: !1
  };
  let reentry = {
    ...permissionPhase,
    ...(p !== void 0 && {
      dispatchResolution: {
        input: input,
        note: p
      }
    })
  };
  Object.defineProperty(reentry, c, {
    value: !0,
    configurable: !0
  });
  let toolUseId = k(),
    f = Hae(),
    t;
  try {
    t = await ask(input, {
      toolUseId: toolUseId,
      reentry: reentry
    });
  } finally {
    f(), Reflect.deleteProperty(reentry, c);
  }
  if (t.behavior !== "allow") return {
    proceed: !1,
    asked: !0,
    reason: "denied",
    message: t.behavior === "deny" && t.message ? t.message : askUnconditionally ? `Sending to ${recipientLabel} needs your approval \u2014 nothing was sent.` : `isolatePeerMachines is enabled: sending to ${recipientLabel} needs your approval \u2014 nothing was sent.`,
    ...(t.behavior === "deny" && t.decisionReason && {
      decisionReason: t.decisionReason
    })
  };
  if (t.updatedInput === void 0 || kEe(t.updatedInput)) return {
    proceed: !0,
    input: input,
    asked: !0,
    ...(t.decisionReason && {
      decisionReason: t.decisionReason
    })
  };
  let d = P(parse, t.updatedInput);
  if (!d.success) return {
    proceed: !1,
    asked: !0,
    reason: "bad_shape",
    message: `The permission handler narrowed the input to a shape ${tool.name} does not accept \u2014 nothing was sent.`
  };
  if (d.data.to !== input.to) return {
    proceed: !1,
    asked: !0,
    reason: "recipient_changed",
    message: `The permission handler changed the recipient (from ${recipientLabel}) after this send was resolved \u2014 nothing was sent. Send again to the recipient you intend.`
  };
  if (d.data.message !== void 0 && typeof d.data.message !== "string") return {
    proceed: !1,
    asked: !0,
    reason: "non_text_message",
    message: "The permission handler rewrote the message into a structured (non-text) form, which cannot be sent to another session \u2014 nothing was sent."
  };
  return {
    proceed: !0,
    input: d.data,
    asked: !0,
    ...(t.decisionReason && {
      decisionReason: t.decisionReason
    })
  };
}
function Vqt(e, n, o, s) {
  let i = e.permissionPhase?.pipeline;
  if (i === void 0) return !1;
  let r = i.result.behavior === "ask" ? i.result : i.answered;
  if (r === void 0 || r.behavior !== "ask" || !s(r)) return !1;
  return a(o(i.input), o(n));
}
function N7o(e, n, o) {
  let s = e.permissionPhase?.checked;
  if (s === void 0) return;
  return a(o(s.input), o(n)) ? s.result : void 0;
}
function MEn(e, n, o) {
  let s = e.permissionPhase?.checked;
  if (s === void 0 || !("note" in s)) return;
  return a(o(s.input), o(n)) ? s.note : void 0;
}
function F7o(e, n, input_2, s) {
  if (e === void 0) return;
  let i = s(n),
    r = {
      ...e
    };
  if (e.checked !== void 0 && a(s(e.checked.input), i)) r.checked = {
    ...e.checked,
    input: input_2
  };
  if (e.pipeline !== void 0 && a(s(e.pipeline.input), i)) r.pipeline = {
    ...e.pipeline,
    input: input_2
  };
  return r;
}
function H7o(e, n, o) {
  let s = e.permissionPhase?.dispatchResolution;
  if (s === void 0) return;
  return a(o(s.input), o(n)) ? s.note : void 0;
}
function R_e(e) {
  let permissionPhase_2 = e.permissionPhase;
  return permissionPhase_2 !== void 0 && Object.hasOwn(permissionPhase_2, c);
}
function qqt(e) {
  return e.behavior === "ask" && e.decisionReason?.type === "safetyCheck" && e.decisionReason.circuitBreaker === "isolatePeerMachines";
}
function a(e, n) {
  return _(e) === _(n);
}
function P(e, n) {
  let o = e(n);
  if (o.success || o.error === void 0) return o;
  let s = new Set();
  for (let i of o.error.issues) {
    if (i.code !== "unrecognized_keys" || i.path.length > 0) return o;
    for (let r of i.keys) s.add(r);
  }
  if (s.size === 0 || typeof n !== "object" || n === null) return o;
  return e(Da(n, (i, r) => s.has(r)));
}
export { Gqt, Vqt, N7o, MEn, F7o, H7o, R_e, qqt };