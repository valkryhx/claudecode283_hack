// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { De } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { H } from "B:/~BUN/root/chunk-game8aqv.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
class t {
  inFlightSnapshot = {
    tasks: 0,
    queued: 0,
    kinds: [],
    items: []
  };
  inFlightSnapshotChanged = De();
  pendingStructuredResult = void 0;
  relocatedCwd = void 0;
  ownStateWriteDepth = 0;
  warnedUnknownDisabledSurface = !1;
  publishInFlightSnapshot(n) {
    this.inFlightSnapshot = n;
    try {
      this.inFlightSnapshotChanged.emit();
    } catch {}
  }
  reset() {
    this.pendingStructuredResult = void 0, this.relocatedCwd = void 0, this.warnedUnknownDisabledSurface = !1, this.publishInFlightSnapshot({
      tasks: 0,
      queued: 0,
      kinds: [],
      items: []
    });
  }
}
var e = new W(() => new t());
function gZ() {
  return e.of(H().host);
}
export { gZ };