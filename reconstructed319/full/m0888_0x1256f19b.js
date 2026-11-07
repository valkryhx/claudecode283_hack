// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  H
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  rh,
  Fo,
  lL
} from "B:/~BUN/root/chunk-4vcs773m.js";
var s = "--inherit-permission-mode";

function t(e) {
  return e === s || e.startsWith(`${s}=`)
}
class f {
  mode
}
var c = new W(() => new f);

function p() {
  return c.of(H().host)
}

function O7s({
  inheritPermissionModeCli: e,
  resolvedMode: n,
  storageV5: r
}) {
  if (!e) return;
  p().mode = n, lL("--permission-mode", [s], n, void 0, r).catch((o) => a(o))
}
async function I7s(e) {
  let n = p(),
    r = n.mode;
  if (r === void 0) return;
  let o = i.CLAUDE_JOB_DIR;
  if (!o || i.CLAUDE_CODE_SESSION_KIND !== "bg") {
    n.mode = void 0;
    return
  }
  let d = await Fo(o, e);
  if (!d?.respawnFlags) return;
  if (!d.respawnFlags.some(t)) {
    n.mode = void 0;
    return
  }
  await lL("--permission-mode", [s], r, void 0, e, void 0, (u) => u.some(t)), rh(o);
  let m = await Fo(o, e);
  if (m?.respawnFlags && !m.respawnFlags.some(t)) n.mode = void 0
}
export {
  O7s,
  I7s
};
