// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { d, k } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Vhe } from "B:/~BUN/root/chunk-6za2ez23.js";
import { Bo, pt } from "B:/~BUN/root/chunk-cqkcn3bx.js";
import { CYs, RTe } from "B:/~BUN/root/chunk-3rzwkd15.js";
import { open as l, realpath as f, stat as g } from "fs/promises";
import { resolve as h } from "path";
var UXo = "Error: --agents takes a JSON object, or a file path only with --print (-p). Pass the agents as inline JSON, or run with -p to read them from a file.",
  s = 268435456;
function Wvn(t) {
  let e = Bo(t).trimStart();
  return e.startsWith("{") || pt(e, !1) !== null;
}
async function BXo(t) {
  let filePath = h(t);
  try {
    await using r = await l(filePath, Vhe());
    let a = await r.stat({
      bigint: !0
    });
    CYs(a, filePath);
    let realPath = await f(filePath).catch(() => filePath),
      n = await g(realPath, {
        bigint: !0
      });
    if (n.dev !== a.dev || n.ino !== a.ino) return {
      ok: !1,
      error: `Error: --agents file changed while it was read: ${filePath}`
    };
    let {
      content: i
    } = await RTe(r, filePath, s);
    return {
      ok: !0,
      json: i,
      filePath: filePath,
      realPath: realPath
    };
  } catch (r) {
    switch (k(r)) {
      case "ENOENT":
        return {
          ok: !1,
          error: `Error: --agents file not found: ${filePath} (a value that is not a JSON object is read as a file path)`
        };
      case "ERR_FILE_TOO_LARGE":
        return {
          ok: !1,
          error: `Error: --agents file is larger than ${s} bytes: ${filePath}`
        };
      case "ERR_MULTIPLE_LINKS":
        return {
          ok: !1,
          error: `Error: --agents file has more than one hard link: ${filePath} (its other names are not write-protected; pass a file with one name)`
        };
      default:
        return {
          ok: !1,
          error: `Error reading --agents file ${filePath}: ${d(r)}`
        };
    }
  }
}
export { UXo, Wvn, BXo };