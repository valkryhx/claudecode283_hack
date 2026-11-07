// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  U
} from "B:/~BUN/root/chunk-5ha2avah.js";
import {
  je
} from "B:/~BUN/root/chunk-4qfwb3rf.js";
import {
  he
} from "B:/~BUN/root/chunk-fet34rqr.js";
var d = 3600000,
  e = he({
    isDecided: !1,
    toFirstMessage: void 0,
    toFirstResult: void 0,
    atFirstMessage: void 0,
    giveUp: void 0
  }, (t) => {
    Z$r(), t.isDecided = !1
  });

function Wva() {
  if (e.isDecided) return;
  e.isDecided = !0;
  try {
    if (process.env.CLAUDE_CODE_REMOTE !== "true" || process.env.CLAUDE_CODE_COUNT_GARBAGE_COLLECTIONS !== "1") return;
    let {
      GCProfiler: t
    } = je("v8"), s = new t, i = new t;
    s.start(), i.start(), e.toFirstMessage = s, e.toFirstResult = i, e.giveUp = setTimeout(Z$r, d), e.giveUp.unref()
  } catch {}
}

function o(t) {
  if (t === void 0) return;
  try {
    let s = t.stop().statistics.filter((n) => n.gcType === "Scavenge" || n.gcType === "MarkSweepCompact"),
      i = U(s, (n) => n.gcType === "Scavenge"),
      r = s.at(-1)?.afterGC.heapStatistics.usedHeapSize,
      a = {
        eden: i,
        full: s.length - i,
        wall_ms: Math.round(s.reduce((n, u) => n + u.cost, 0) / 1000),
        ...r !== void 0 && {
          heap_after_mib: Math.round(r / 1048576)
        }
      };
    return Object.values(a).every(Number.isSafeInteger) ? a : void 0
  } catch {
    return
  }
}

function WKs() {
  e.atFirstMessage ??= o(e.toFirstMessage), e.toFirstMessage = void 0
}

function Z$r() {
  let {
    atFirstMessage: t
  } = e;
  clearTimeout(e.giveUp), o(e.toFirstMessage);
  let s = o(e.toFirstResult);
  return e.toFirstMessage = void 0, e.toFirstResult = void 0, e.atFirstMessage = void 0, e.giveUp = void 0, s && {
    ...t && {
      to_first_message: t
    },
    to_first_result: s
  }
}
export {
  Wva,
  WKs,
  Z$r
};
