// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { j } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { qp, Zr, XP } from "B:/~BUN/root/chunk-nq10jsxs.js";
var r = "--inherit-permission-mode";
function s(e) {
  return e === r || e.startsWith(`${r}=`);
}
class m {
  mode;
}
var u = new z(() => new m());
function f() {
  return u.of(j().host);
}
function fJo({
  inheritPermissionModeCli: inheritPermissionModeCli,
  resolvedMode: resolvedMode,
  storageV5: storageV5
}) {
  if (!inheritPermissionModeCli) return;
  f().mode = resolvedMode, XP("--permission-mode", [r], resolvedMode, void 0, storageV5).catch(o => l(o));
}
async function mJo(e) {
  let n = f(),
    mode = n.mode;
  if (mode === void 0) return;
  let CLAUDE_JOB_DIR = a.CLAUDE_JOB_DIR;
  if (!CLAUDE_JOB_DIR || a.CLAUDE_CODE_SESSION_KIND !== "bg") {
    n.mode = void 0;
    return;
  }
  let t = await Zr(CLAUDE_JOB_DIR, e);
  if (!t?.respawnFlags) return;
  if (!t.respawnFlags.some(s)) {
    n.mode = void 0;
    return;
  }
  await XP("--permission-mode", [r], mode, void 0, e, void 0, p => p.some(s)), qp(CLAUDE_JOB_DIR);
  let d = await Zr(CLAUDE_JOB_DIR, e);
  if (d?.respawnFlags && !d.respawnFlags.some(s)) n.mode = void 0;
}
export { fJo, mJo };