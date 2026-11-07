// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import "B:/~BUN/root/chunk-vz9zea4j.js";
import "B:/~BUN/root/chunk-q78ga0zw.js";
import "B:/~BUN/root/chunk-db8vh085.js";
import "B:/~BUN/root/chunk-game8aqv.js";
import "B:/~BUN/root/chunk-wt4dg253.js";
import "B:/~BUN/root/chunk-drx9cnw1.js";
import "B:/~BUN/root/chunk-y2g9f85n.js";
import "B:/~BUN/root/chunk-r5zmhp23.js";
import "B:/~BUN/root/chunk-h4acfc9y.js";
import "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import "B:/~BUN/root/chunk-dayhhbfr.js";
import "B:/~BUN/root/chunk-eev762xg.js";
import "B:/~BUN/root/chunk-15vbkr6z.js";
import "B:/~BUN/root/chunk-n8cnxns2.js";
import "B:/~BUN/root/chunk-09sn55yf.js";
import "B:/~BUN/root/chunk-jdtvghyw.js";
import "B:/~BUN/root/chunk-kjwczfsg.js";
import "B:/~BUN/root/chunk-j6pt0v41.js";
import "B:/~BUN/root/chunk-y1kkrqy9.js";
import "B:/~BUN/root/chunk-xrwdh0g4.js";
import "B:/~BUN/root/chunk-mwfggkjt.js";
import "B:/~BUN/root/chunk-4jt3t3ds.js";
import "B:/~BUN/root/chunk-65j2302z.js";
import "B:/~BUN/root/chunk-rr294jrm.js";
import "B:/~BUN/root/chunk-nzh2qzgc.js";
import "B:/~BUN/root/chunk-1fg2bpc3.js";
import {
  Eo
} from "B:/~BUN/root/chunk-b3jc87kv.js";
import "B:/~BUN/root/chunk-mb9chr1y.js";
import "B:/~BUN/root/chunk-3z3yrbk4.js";
import "B:/~BUN/root/chunk-thn0wk2x.js";
import "B:/~BUN/root/chunk-nsneqfcc.js";
import "B:/~BUN/root/chunk-83p1z1q5.js";
import "B:/~BUN/root/chunk-d10hhz4p.js";
import "B:/~BUN/root/chunk-0w2htvr6.js";
import "B:/~BUN/root/chunk-t4qpmjt5.js";
import "B:/~BUN/root/chunk-5xx1vfdh.js";
import "B:/~BUN/root/chunk-3xdsa4p8.js";
import "B:/~BUN/root/chunk-z6138ats.js";
import "B:/~BUN/root/chunk-myfamxtp.js";
import "B:/~BUN/root/chunk-8998nbf3.js";
import "B:/~BUN/root/chunk-pc24rkga.js";
import "B:/~BUN/root/chunk-r8p1hzqw.js";
import "B:/~BUN/root/chunk-acjt1b7f.js";
import "B:/~BUN/root/chunk-fjzk7kwf.js";
import "B:/~BUN/root/chunk-2f1svh63.js";
import "B:/~BUN/root/chunk-begxsvab.js";
import "B:/~BUN/root/chunk-44q965xg.js";
import "B:/~BUN/root/chunk-sy1h8mf0.js";
import "B:/~BUN/root/chunk-46ahshhq.js";
import "B:/~BUN/root/chunk-88zb3509.js";
import "B:/~BUN/root/chunk-fkr27nhj.js";
import "B:/~BUN/root/chunk-pwj77283.js";
import "B:/~BUN/root/chunk-8f4z6bdn.js";
import "B:/~BUN/root/chunk-1g25msn4.js";
import "B:/~BUN/root/chunk-f9dwrymq.js";
import "B:/~BUN/root/chunk-gq1er5y2.js";
import "B:/~BUN/root/chunk-3mm90xb6.js";
import "B:/~BUN/root/chunk-1w2vha2y.js";
import "B:/~BUN/root/chunk-x1xft50h.js";
import "B:/~BUN/root/chunk-bkfncj77.js";
import "B:/~BUN/root/chunk-9jpwd6f1.js";
import "B:/~BUN/root/chunk-6n5g80b8.js";
import "B:/~BUN/root/chunk-hwg4hdxm.js";
import "B:/~BUN/root/chunk-7wn6n2hd.js";
import "B:/~BUN/root/chunk-sxvr9rzb.js";
import "B:/~BUN/root/chunk-ctmjjbhk.js";
import "B:/~BUN/root/chunk-4vxp7kvb.js";
import "B:/~BUN/root/chunk-x2th98na.js";
import "B:/~BUN/root/chunk-qfq22jk9.js";
import {
  XVo
} from "B:/~BUN/root/chunk-4537r7kb.js";
import "B:/~BUN/root/chunk-65zedn3n.js";
import "B:/~BUN/root/chunk-zpne314q.js";
import "B:/~BUN/root/chunk-ww0cdpg4.js";
import "B:/~BUN/root/chunk-q15wjdnk.js";
import "B:/~BUN/root/chunk-x3gsqe09.js";
import "B:/~BUN/root/chunk-4hj5k2m3.js";
import "B:/~BUN/root/chunk-12nc74pv.js";
import "B:/~BUN/root/chunk-9wbhv9z5.js";
import "B:/~BUN/root/chunk-jbjsy1k0.js";
import {
  basename as l
} from "path";
async function x(r, e) {
  let o = await XVo(),
    a = Eo(e.session);
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
