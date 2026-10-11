// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import "B:/~BUN/root/chunk-bvn0mpsk.js";
import "B:/~BUN/root/chunk-ekrhn4q1.js";
import "B:/~BUN/root/chunk-4rk7cwxz.js";
import "B:/~BUN/root/chunk-dkxhwhft.js";
import "B:/~BUN/root/chunk-kks4mj3w.js";
import "B:/~BUN/root/chunk-bgthmgyc.js";
import "B:/~BUN/root/chunk-17wqwt36.js";
import "B:/~BUN/root/chunk-54p0h65d.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import "B:/~BUN/root/chunk-4p6z9qq1.js";
import "B:/~BUN/root/chunk-0fnha6bz.js";
import "B:/~BUN/root/chunk-y04k89s2.js";
import "B:/~BUN/root/chunk-zv3zxqya.js";
import "B:/~BUN/root/chunk-6j6ra85q.js";
import "B:/~BUN/root/chunk-nkmmqnq7.js";
import "B:/~BUN/root/chunk-zksmb712.js";
import "B:/~BUN/root/chunk-zs3ycjed.js";
import "B:/~BUN/root/chunk-zk6g628v.js";
import "B:/~BUN/root/chunk-snmb1kqg.js";
import {
  Po
} from "B:/~BUN/root/chunk-6cq25d8x.js";
import "B:/~BUN/root/chunk-728mwbhs.js";
import "B:/~BUN/root/chunk-51n463p1.js";
import "B:/~BUN/root/chunk-shgdrs47.js";
import "B:/~BUN/root/chunk-2swveyqa.js";
import "B:/~BUN/root/chunk-e7p62566.js";
import "B:/~BUN/root/chunk-qqgpf856.js";
import "B:/~BUN/root/chunk-zv4xh2j0.js";
import "B:/~BUN/root/chunk-8hs4bwwk.js";
import {
  wsr
} from "B:/~BUN/root/chunk-j8qra55j.js";
import "B:/~BUN/root/chunk-t1t358ee.js";
import "B:/~BUN/root/chunk-81280fc2.js";
import "B:/~BUN/root/chunk-tndjj29v.js";
import {
  basename as l
} from "path";
async function x(r, e) {
  let o = await wsr(),
    a = Po(e.session);
  if (!o.success) {
    if (a) return t(`heapdump failed: ${o.error}`, {
      level: "error"
    }), {
      type: "text",
      value: "Failed to create heap dump (detail withheld on this connection)"
    };
    return {
      type: "text",
      value: `Failed to create heap dump: ${o.error}`
    }
  }
  let i = a ? l(o.heapPath) : o.heapPath,
    p = a ? l(o.diagPath) : o.diagPath;
  if (a) t(`heapdump written: ${o.heapPath} ${o.diagPath}`);
  let h = [i, p, "", d(o.diagnostics)];
  return h.push("", "Open the .heapsnapshot in Chrome DevTools \u2192 Memory \u2192 Load to inspect retainers."), {
    type: "text",
    value: h.join(`
`)
  }
}

function d(r) {
  let {
    memoryUsage: e,
    resourceUsage: o,
    analysis: a
  } = r, i = a.potentialLeaks.length ? a.potentialLeaks.map((n) => `  \u26A0 ${n}`).join(`
`) : "  (no obvious leak indicators)", p = (n, u) => `RSS ${s(e.rss)} (peak ${s(o.maxRSS)}) ${n>u?"\u2014 most memory is JS heap (inspect the .heapsnapshot)":"\u2014 most memory is native (NOT in the .heapsnapshot)"}`;
  if (r.runtime === "bun") {
    let n = Math.max(0, e.rss - e.heapUsed);
    return [p(e.heapUsed, n), `  JS heap          ${s(e.heapUsed).padStart(8)}  in snapshot`, `  strings, buffers ${s(e.external).padStart(8)}  part of the JS heap, in snapshot`, `  outside the heap ${s(n).padStart(8)}  not in snapshot (code/JIT/stacks/allocator)`, i].join(`
`)
  }
  let h = e.external - e.arrayBuffers,
    c = Math.max(0, e.rss - e.heapTotal - e.external);
  return [p(e.heapTotal, e.external + c), `  JS heap        ${s(e.heapTotal).padStart(8)}  in snapshot`, `  array buffers  ${s(e.arrayBuffers).padStart(8)}  not in snapshot`, `  other external ${s(h).padStart(8)}  not in snapshot`, `  unaccounted    ${s(c).padStart(8)}  not in snapshot (code/JIT/stacks/allocator)`, i].join(`
`)
}

function s(r) {
  return `${(r/1073741824).toFixed(2)} GB`
}
export {
  x as call
};
