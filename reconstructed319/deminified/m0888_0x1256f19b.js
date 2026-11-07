// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { H } from "B:/~BUN/root/chunk-game8aqv.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { rh, Fo, lL } from "B:/~BUN/root/chunk-4vcs773m.js";
var s = "--inherit-permission-mode";
function t(e) {
  return e === s || e.startsWith(`${s}=`);
}
class f {
  mode;
}
var c = new W(() => new f());
function p() {
  return c.of(H().host);
}
function O7s({
  inheritPermissionModeCli: inheritPermissionModeCli,
  resolvedMode: resolvedMode,
  storageV5: storageV5
}) {
  if (!inheritPermissionModeCli) return;
  p().mode = resolvedMode, lL("--permission-mode", [s], resolvedMode, void 0, storageV5).catch(o => a(o));
}
async function I7s(e) {
  let n = p(),
    mode = n.mode;
  if (mode === void 0) return;
  let CLAUDE_JOB_DIR = i.CLAUDE_JOB_DIR;
  if (!CLAUDE_JOB_DIR || i.CLAUDE_CODE_SESSION_KIND !== "bg") {
    n.mode = void 0;
    return;
  }
  let d = await Fo(CLAUDE_JOB_DIR, e);
  if (!d?.respawnFlags) return;
  if (!d.respawnFlags.some(t)) {
    n.mode = void 0;
    return;
  }
  await lL("--permission-mode", [s], mode, void 0, e, void 0, u => u.some(t)), rh(CLAUDE_JOB_DIR);
  let m = await Fo(CLAUDE_JOB_DIR, e);
  if (m?.respawnFlags && !m.respawnFlags.some(t)) n.mode = void 0;
}
export { O7s, I7s };