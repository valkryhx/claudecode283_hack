// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Bo } from "B:/~BUN/root/chunk-game8aqv.js";
import { g, m } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { xVn } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { uq } from "B:/~BUN/root/chunk-11wz0rq6.js";
import { zH } from "B:/~BUN/root/chunk-zmnkk1pw.js";
function ama(e, r) {
  let {
      shell: shell
    } = zH.of(r),
    {
      cwd: cwd,
      originalCwd: originalCwd
    } = Bo(r);
  if (!shell.isWatched) shell.isWatched = !0, shell.hasMoved = cwd !== originalCwd, r.subscribe(() => {
    if (shell.hasMoved ||= r.project?.cwd !== originalCwd, r.project?.cwd !== shell.taken) shell.taken = void 0;
  });
  if (e === void 0 || e === cwd || shell.hasMoved) return;
  if (typeof e !== "string" || !xVn(e)) {
    m("mcp_serve_shell_directory_held", "not_a_plain_directory");
    return;
  }
  if (!e.startsWith(`${originalCwd}/`)) {
    m("mcp_serve_shell_directory_held", "outside_launch_directory");
    return;
  }
  shell.taken = e, r.setCwd(e), uq(), g("mcp_serve_shell_directory_held");
}
function DUr(e, r) {
  return zH.peek(e)?.shell.taken === r;
}
export { ama, DUr };