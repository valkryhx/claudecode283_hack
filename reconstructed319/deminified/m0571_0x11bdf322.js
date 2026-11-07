// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Oi } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { fm } from "B:/~BUN/root/chunk-tq5dzbq9.js";
function PIn(path, version, n, r) {
  return {
    method: "project_read",
    path: path,
    ...(version !== void 0 && {
      version: version
    }),
    ...n,
    ...r
  };
}
function Tfs(path_2) {
  return {
    method: "project_read",
    path: path_2
  };
}
var r_r = "tengu_glittery_crayon",
  c = 500,
  o = "A doc of this project.";
function nMi(t) {
  let title = Oi(t.path, c);
  return {
    type: "document",
    source: {
      type: "text",
      media_type: "text/plain",
      data: t.content
    },
    ...(title !== "" && {
      title: title
    }),
    context: t.version !== void 0 && fm.test(t.version) ? `${o} version: ${t.version}` : o
  };
}
function Klo(t) {
  return t.type === "document" && typeof t.source === "object" && t.source !== null && "type" in t.source && t.source.type === "text" && typeof t.context === "string" && t.context.startsWith(o);
}
function o_r({
  docId: docId,
  read: read
}) {
  return {
    input: _(Tfs(docId)),
    result: _(read)
  };
}
export { PIn, Tfs, r_r, nMi, Klo, o_r };