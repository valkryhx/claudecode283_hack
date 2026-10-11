// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { l, v } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { hxe } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Jo, ct } from "B:/~BUN/root/chunk-tsjnk8ma.js";
import { FFo, ude } from "B:/~BUN/root/chunk-t1t358ee.js";
import { open as f, realpath as g, stat as h } from "fs/promises";
import { resolve as c } from "path";
var l5r = "Error: --agents takes a JSON object, or a file path only with --print (-p). Pass the agents as inline JSON, or run with -p to read them from a file.",
  s = 268435456;
function O2t(t) {
  let e = Jo(t).trimStart();
  return e.startsWith("{") || ct(e, !1) !== null;
}
async function c5r(t) {
  let filePath = c(t);
  try {
    await using r = await f(filePath, hxe());
    let a = await r.stat({
      bigint: !0
    });
    FFo(a, filePath);
    let realPath = await g(filePath).catch(() => filePath),
      n = await h(realPath, {
        bigint: !0
      });
    if (n.dev !== a.dev || n.ino !== a.ino) return {
      ok: !1,
      error: `Error: --agents file changed while it was read: ${filePath}`
    };
    let {
      content: i
    } = await ude(r, filePath, s);
    return {
      ok: !0,
      json: i,
      filePath: filePath,
      realPath: realPath
    };
  } catch (r) {
    switch (v(r)) {
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
          error: `Error reading --agents file ${filePath}: ${l(r)}`
        };
    }
  }
}
export { l5r, O2t, c5r };