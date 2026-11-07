// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  le
} from "B:/~BUN/root/chunk-begxsvab.js";
import {
  hi
} from "B:/~BUN/root/chunk-7pxn9dsp.js";
import {
  Ka
} from "B:/~BUN/root/chunk-tjfmeakx.js";
import {
  dWe,
  Yct
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  tT,
  Que,
  VI,
  mNe,
  dQe,
  jht
} from "B:/~BUN/root/chunk-hr1m6fe3.js";
import {
  yen
} from "B:/~BUN/root/chunk-dgabw6gm.js";
import {
  uwn,
  Wdi
} from "B:/~BUN/root/chunk-7e5enyah.js";
import {
  mqo
} from "B:/~BUN/root/chunk-zb7ahm7v.js";
import {
  Ale
} from "B:/~BUN/root/chunk-f8djjaxt.js";
import {
  Nq
} from "B:/~BUN/root/chunk-nwbzcxqm.js";
import {
  bue
} from "B:/~BUN/root/chunk-ccfjrhpx.js";
import {
  Ine
} from "B:/~BUN/root/chunk-n598yzss.js";
import {
  vVt
} from "B:/~BUN/root/chunk-2cc509qx.js";

function iVr(o) {
  if (!le()) return "";
  return `eval #${o} never settled: the process that was running it exited. Its result is lost and the script is no longer running; a command it had started may have run on.`
}

function p(o) {
  if (!le()) return "";
  return `eval #${o} never reported back: your earlier run ended or was stopped, or Claude Code exited, before its result reached you. Its result is lost and the script is no longer running. A command the script had started may still have run to completion.`
}

function c(o, e) {
  if (!le()) return [];
  let s = Array.isArray(e) && e.length === o.length ? e : [],
    l = [];
  for (let [a, r] of o.entries()) {
    let n = s[a] == null ? void 0 : uwn(r, s[a]);
    if (n !== void 0) {
      l.push(n.evalId);
      continue
    }
    for (let i of Wdi(r)) l.push(i.evalId)
  }
  return l
}

function m(o) {
  if (!le()) return "";
  if (o === null || typeof o !== "object") return "";
  let e = o,
    s = "content" in e ? e.content : void 0;
  return typeof s === "string" && dQe(s) ? s : ""
}

function v(o) {
  if (!le()) return [];
  let e = m(o),
    s = e !== "" && typeof o === "object" && o !== null && "declared" in o ? o.declared : void 0,
    l = Array.isArray(s) ? jht(e) : void 0;
  return l === void 0 ? c([e], void 0) : c(l, s)
}

function gXn(o) {
  if (!le()) return [];
  let e = new Set,
    s = new Set,
    l = [],
    a = (r) => {
      let n = l.findLastIndex((i) => i.evalId === r);
      if (n !== -1) l.splice(n, 1)
    };
  for (let r of o) {
    if (r.type === "attachment") {
      if (r.attachment.type === "poll_events") c(r.attachment.envelopes, r.attachment.declared).forEach(a);
      continue
    }
    if (r.type === "assistant" && !r.isVirtual) {
      for (let i of r.message.content) {
        if (i.type !== "tool_use") continue;
        if (Ka(i.name)) e.add(i.id);
        else if (i.name === hi) s.add(i.id)
      }
      continue
    }
    if (r.type !== "user" || r.isVirtual) continue;
    let n = r.message.content;
    if (!Array.isArray(n)) continue;
    for (let i of n) {
      if (i.type !== "tool_result") continue;
      if (s.has(i.tool_use_id)) v(r.toolUseResult).forEach(a);
      else if (e.has(i.tool_use_id)) {
        let u = mqo(r.toolUseResult);
        if (u !== void 0) l.push({
          toolUseId: i.tool_use_id,
          evalId: u,
          recordedAt: r.timestamp
        })
      }
    }
  }
  return l
}

function oga(o) {
  if (!le()) return;
  let e = gXn(o).filter((s) => Date.parse(s.recordedAt) < performance.timeOrigin);
  if (e.length === 0) return;
  if (!VI()) {
    t(`resume: ${e.length} async REPL eval(s) never settled, and poll-event delivery is off, so no lost event is queued`, {
      level: "warn"
    });
    return
  }
  t(`resume: ${e.length} async REPL eval(s) never settled (${e.map((s)=>`#${s.evalId}`).join(", ")}); answering each with a lost event`), f(e, {
    text: iVr,
    rowText: "Lost: Claude Code exited before this finished"
  })
}

function sga(o, e, s) {
  if (!le() || !VI()) return;
  let l = s.get(bue),
    a = new Set(dWe().filter((n) => mNe(n, e)).flatMap((n) => n.pollEvent === void 0 ? [] : c([n.pollEvent.envelope], n.pollEvent.declared === void 0 ? void 0 : [{
      kind: n.pollEvent.kind,
      ...n.pollEvent.declared
    }]))),
    r = gXn(o).filter(({
      evalId: n
    }) => !l.tracks(e, n) && !a.has(n));
  if (r.length === 0) return;
  t(`subagent resume: ${r.length} async REPL eval(s) never settled; answering each with a lost event`), f(r, {
    text: p,
    rowText: "Lost: the result never reached the agent",
    agentId: e
  })
}

function f(o, {
  text: e,
  rowText: s,
  agentId: l
}) {
  if (!le()) return;
  let a = Ale(),
    r = Ine();
  for (let {
      evalId: n
    }
    of o) {
    let i = new Date().toISOString();
    Yct({
      kind: tT,
      ...r ? {
        typed: {
          at: i,
          fields: {
            eval: n,
            status: yen,
            text: e(n)
          }
        }
      } : {
        element: Que({
          kind: tT,
          at: i,
          content: e(n),
          attributes: {
            eval: String(n),
            status: yen
          }
        })
      },
      ...l !== void 0 && {
        agentId: l
      },
      allowReservedKind: !0,
      ...a ? {
        displayRows: vVt(s, {
          clientsDrawCalls: !0,
          shownOnCall: !0
        })
      } : {
        keepsRow: !0
      }
    }).catch((u) => {
      t(`async REPL lost event for eval #${n} not queued: ${Nq(u)?u.message:"non-Error rejection"}`, {
        level: "warn"
      })
    })
  }
}
export {
  iVr,
  gXn,
  oga,
  sga
};
