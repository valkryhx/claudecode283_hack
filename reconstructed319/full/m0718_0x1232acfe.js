// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  d,
  k
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  xae
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  gs,
  et
} from "B:/~BUN/root/chunk-fkr27nhj.js";
import {
  Cna,
  t$e
} from "B:/~BUN/root/chunk-x3gsqe09.js";
import {
  open as l,
  realpath as f,
  stat as g
} from "fs/promises";
import {
  resolve as h
} from "path";
var h7s = "Error: --agents takes a JSON object, or a file path only with --print (-p). Pass the agents as inline JSON, or run with -p to read them from a file.",
  s = 268435456;

function k9n(t) {
  let e = gs(t).trimStart();
  return e.startsWith("{") || et(e, !1) !== null
}
async function g7s(t) {
  let e = h(t);
  try {
    await using r = await l(e, xae());
    let a = await r.stat({
      bigint: !0
    });
    Cna(a, e);
    let o = await f(e).catch(() => e),
      n = await g(o, {
        bigint: !0
      });
    if (n.dev !== a.dev || n.ino !== a.ino) return {
      ok: !1,
      error: `Error: --agents file changed while it was read: ${e}`
    };
    let {
      content: i
    } = await t$e(r, e, s);
    return {
      ok: !0,
      json: i,
      filePath: e,
      realPath: o
    }
  } catch (r) {
    switch (k(r)) {
      case "ENOENT":
        return {
          ok: !1, error: `Error: --agents file not found: ${e} (a value that is not a JSON object is read as a file path)`
        };
      case "ERR_FILE_TOO_LARGE":
        return {
          ok: !1, error: `Error: --agents file is larger than ${s} bytes: ${e}`
        };
      case "ERR_MULTIPLE_LINKS":
        return {
          ok: !1, error: `Error: --agents file has more than one hard link: ${e} (its other names are not write-protected; pass a file with one name)`
        };
      default:
        return {
          ok: !1, error: `Error reading --agents file ${e}: ${d(r)}`
        }
    }
  }
}
export {
  h7s,
  k9n,
  g7s
};
