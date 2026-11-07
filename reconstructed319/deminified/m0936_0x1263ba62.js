// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { H } from "B:/~BUN/root/chunk-game8aqv.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { Q } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { Byi } from "B:/~BUN/root/chunk-27h4st9h.js";
var n = 4096,
  r = 1024,
  i = new W(() => new o());
function Ng() {
  return i.of(H().host);
}
function lYt(e, t) {
  if (!e || !t) return;
  try {
    return btoa(`${e}:${t}`);
  } catch {
    return;
  }
}
function s() {
  return Byi() !== void 0;
}
class o {
  seen = new Set();
  off = !1;
  incomplete = !1;
  overflowNotice = null;
  record(e) {
    if (this.recordingOff()) return;
    if (typeof e !== "string" || e === "") return;
    let t = Q(e, r);
    if (this.seen.has(t)) return;
    if (this.seen.size >= n) {
      this.incomplete = !0, this.overflowNotice ??= !0;
      return;
    }
    this.seen.add(t);
  }
  recordingOff() {
    if (!this.off && s()) this.off = !0, this.seen.clear(), this.incomplete = !1, this.overflowNotice = null;
    return this.off;
  }
  takeOverflowNotice() {
    if (this.overflowNotice === !0) return this.overflowNotice = !1, !0;
    return !1;
  }
  snapshot() {
    return this.recordingOff(), {
      atoms: [...this.seen],
      complete: !this.incomplete
    };
  }
}
export { Ng, lYt };