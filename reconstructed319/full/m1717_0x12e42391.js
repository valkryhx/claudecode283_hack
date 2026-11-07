// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  De
} from "B:/~BUN/root/chunk-vz9zea4j.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Je
} from "B:/~BUN/root/chunk-9wbhv9z5.js";

function u() {
  let r = De(),
    e = new Map,
    o = 0;
  return {
    emit(i, s) {
      if (o === 0) {
        e.set(i, s);
        return
      }
      r.emit(i, s)
    },
    subscribe(i) {
      o++;
      let s = [...e];
      e.clear();
      for (let [g, l] of s) i(g, l);
      let c = r.subscribe(i),
        n = !0;
      return () => {
        if (n) n = !1, o--, c()
      }
    }
  }
}
var YBr = new Je(u),
  gzt = "device-mcp-not-now";

function BYn(r) {
  return (e, o) => {
    t(`[remote-tools] ${e}: ${o}`), YBr.of(r).emit(e, o)
  }
}
export {
  YBr,
  gzt,
  BYn
};
