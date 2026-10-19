// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { L1e } from "B:/~BUN/root/chunk-hkc0g0wr.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { We, xt } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { o, v, M, u, U, C } from "B:/~BUN/root/chunk-g3snhg6n.js";
var d = 2147483647;
var bKr = 2,
  c = 64,
  p = /^(?:[0-9a-f]{40}|[0-9a-f]{64})$/,
  l = f(() => v().int().min(0).max(d)),
  y = f(() => u({
    side: U(["device", "cloud"]),
    generation: l(),
    tree: o().regex(p).nullable(),
    appliedGeneration: l(),
    mayHaveUnuploadedChanges: M(),
    shipping: l().nullable(),
    appliesOtherSide: M(),
    instanceId: o().regex(L1e),
    sequence: v().int().min(0).max(d)
  })),
  S = ["shipped", "shipping", "unchanged", "deferred", "kept_here", "failed", "not_running"],
  m = e => o().max(e).regex(/^[a-z0-9_]+$/),
  s = f(() => m(c)),
  h = f(() => u({
    v: C(bKr),
    frame: y(),
    outcome: u({
      kind: U(S),
      reason: s().optional()
    }),
    ask_id: o().regex(L1e).optional()
  }));
function l8o(e) {
  let n = h().safeParse(e);
  if (!n.success) return null;
  let {
    v: v_2,
    frame: frame,
    outcome: outcome,
    ask_id: i
  } = n.data;
  if (frame.side !== "device") return null;
  return {
    v: v_2,
    frame: frame,
    outcome: {
      kind: outcome.kind,
      ...(outcome.reason !== void 0 && {
        reason: outcome.reason
      })
    },
    ...(i !== void 0 && {
      askId: i
    })
  };
}
function d8o(e) {
  let n = s().safeParse(e.outcome.reason);
  return {
    v: e.v,
    frame: e.frame,
    outcome: {
      kind: e.outcome.kind,
      ...(n.success && {
        reason: n.data
      })
    },
    ...(e.askId !== void 0 && {
      ask_id: e.askId
    })
  };
}
var g = {
  frame: null,
  heardAt: null,
  stale: !0
};
function gnt() {
  let e = new Map(),
    n = r => `${r.source}:${r.name}`,
    t = r => {
      let a = e.get(n(r));
      return a !== void 0 && a.servingEpoch === r.description?.epoch ? a.value : void 0;
    };
  return {
    of: t,
    file(r, a) {
      let servingEpoch = r.description?.epoch;
      if (servingEpoch !== void 0) e.set(n(r), {
        servingEpoch: servingEpoch,
        value: a(t(r))
      });
    }
  };
}
function c8o() {
  let e = gnt(),
    era = 0;
  return {
    peer(t) {
      let r = e.of(t);
      return r === void 0 ? g : {
        frame: r.frame,
        heardAt: r.heardAt,
        stale: r.era < era
      };
    },
    heard(t, frame_2, heardAt) {
      e.file(t, i => i === void 0 || i.frame.instanceId !== frame_2.instanceId || frame_2.sequence > i.frame.sequence ? {
        frame: frame_2,
        heardAt: heardAt,
        era: era
      } : i);
    },
    invalidateAll() {
      era += 1;
    }
  };
}
var _ = /^(bash|powershell|bash\+powershell)(?::(core|desktop))?$/;
function i8o(e) {
  let n = [...(e.bash ? ["bash"] : []), ...(e.powershell ? ["powershell"] : [])];
  if (n.length === 0) return;
  let t = e.powershell?.edition;
  return `${n.join("+")}${t === void 0 ? "" : `:${t}`}`;
}
function dwn(e) {
  let n = e === void 0 ? null : _.exec(e);
  if (n === null) return;
  let edition = n[2];
  if (n[1] === "bash") return edition === void 0 ? {
    bash: !0,
    powershell: void 0
  } : void 0;
  return {
    bash: n[1] === "bash+powershell",
    powershell: {
      edition: edition
    }
  };
}
function a8o(e, n) {
  return {
    bash: e.includes(We),
    powershell: e.includes(xt) ? {
      edition: n ?? void 0
    } : void 0
  };
}
var QQ = 86400000;
export { i8o, dwn, a8o, QQ, bKr, l8o, d8o, gnt, c8o };