// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  _
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Oi
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  fm
} from "B:/~BUN/root/chunk-tq5dzbq9.js";

function PIn(t, e, n, r) {
  return {
    method: "project_read",
    path: t,
    ...e !== void 0 && {
      version: e
    },
    ...n,
    ...r
  }
}

function Tfs(t) {
  return {
    method: "project_read",
    path: t
  }
}
var r_r = "tengu_glittery_crayon",
  c = 500,
  o = "A doc of this project.";

function nMi(t) {
  let e = Oi(t.path, c);
  return {
    type: "document",
    source: {
      type: "text",
      media_type: "text/plain",
      data: t.content
    },
    ...e !== "" && {
      title: e
    },
    context: t.version !== void 0 && fm.test(t.version) ? `${o} version: ${t.version}` : o
  }
}

function Klo(t) {
  return t.type === "document" && typeof t.source === "object" && t.source !== null && "type" in t.source && t.source.type === "text" && typeof t.context === "string" && t.context.startsWith(o)
}

function o_r({
  docId: t,
  read: e
}) {
  return {
    input: _(Tfs(t)),
    result: _(e)
  }
}
export {
  PIn,
  Tfs,
  r_r,
  nMi,
  Klo,
  o_r
};
