// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { pEe } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { tar } from "B:/~BUN/root/chunk-a3ac8bzj.js";
import { o, E, M, u, z, A } from "B:/~BUN/root/chunk-n8qdr73v.js";
var G_t = 1,
  c = 64,
  l = /^(?:[0-9a-f]{40}|[0-9a-f]{64})$/,
  s = f(() => E().int().min(0).max(tar)),
  m = f(() => u({
    side: z(["laptop", "container"]),
    gen: s(),
    tree: o().regex(l).nullable(),
    taken: s(),
    dirty: M(),
    shipping: s().nullable(),
    takes: M(),
    instance: o().regex(pEe),
    seq: E().int().min(0).max(tar)
  })),
  p = ["shipped", "shipping", "unchanged", "deferred", "kept_here", "failed", "not_running"],
  y = n => o().max(n).regex(/^[a-z0-9_]+$/),
  d = f(() => y(c)),
  S = f(() => u({
    v: A(G_t),
    frame: m(),
    outcome: u({
      kind: z(p),
      reason: d().optional()
    }),
    ask_id: o().regex(pEe).optional()
  }));
function Etr(n) {
  let r = S().safeParse(n);
  if (!r.success) return null;
  let {
    v: v,
    frame: frame,
    outcome: outcome,
    ask_id: i
  } = r.data;
  if (frame.side !== "laptop") return null;
  return {
    v: v,
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
function j9r(n) {
  let r = d().safeParse(n.outcome.reason);
  return {
    v: n.v,
    frame: n.frame,
    outcome: {
      kind: n.outcome.kind,
      ...(r.success && {
        reason: r.data
      })
    },
    ...(n.askId !== void 0 && {
      ask_id: n.askId
    })
  };
}
var g = {
  frame: null,
  heardAt: null,
  stale: !0
};
function Skn() {
  let n = new Map(),
    r = e => `${e.source}:${e.name}`,
    a = e => {
      let t = n.get(r(e));
      return t !== void 0 && t.servingEpoch === e.description?.epoch ? t.value : void 0;
    };
  return {
    of: a,
    file(e, t) {
      let servingEpoch = e.description?.epoch;
      if (servingEpoch !== void 0) n.set(r(e), {
        servingEpoch: servingEpoch,
        value: t(a(e))
      });
    }
  };
}
function W9r() {
  let n = Skn(),
    era = 0;
  return {
    peer(a) {
      let e = n.of(a);
      return e === void 0 ? g : {
        frame: e.frame,
        heardAt: e.heardAt,
        stale: e.era < era
      };
    },
    heard(a, frame_2, heardAt) {
      n.file(a, i => i === void 0 || i.frame.instance !== frame_2.instance || frame_2.seq > i.frame.seq ? {
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
function z9r({
  view: view,
  upTo: upTo,
  newest: newest,
  laptopJournalUnread: laptopJournalUnread
}) {
  return laptopJournalUnread || view.stale || view.frame === null || !view.frame.takes || view.frame.taken > newest || view.frame.taken < upTo;
}
export { G_t, Etr, j9r, Skn, W9r, z9r };