// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Bo
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  g,
  m
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  xVn
} from "B:/~BUN/root/chunk-jdtvghyw.js";
import {
  uq
} from "B:/~BUN/root/chunk-11wz0rq6.js";
import {
  zH
} from "B:/~BUN/root/chunk-zmnkk1pw.js";

function ama(e, r) {
  let {
    shell: t
  } = zH.of(r), {
    cwd: i,
    originalCwd: o
  } = Bo(r);
  if (!t.isWatched) t.isWatched = !0, t.hasMoved = i !== o, r.subscribe(() => {
    if (t.hasMoved ||= r.project?.cwd !== o, r.project?.cwd !== t.taken) t.taken = void 0
  });
  if (e === void 0 || e === i || t.hasMoved) return;
  if (typeof e !== "string" || !xVn(e)) {
    m("mcp_serve_shell_directory_held", "not_a_plain_directory");
    return
  }
  if (!e.startsWith(`${o}/`)) {
    m("mcp_serve_shell_directory_held", "outside_launch_directory");
    return
  }
  t.taken = e, r.setCwd(e), uq(), g("mcp_serve_shell_directory_held")
}

function DUr(e, r) {
  return zH.peek(e)?.shell.taken === r
}
export {
  ama,
  DUr
};
