// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { o, E, I, u } from "B:/~BUN/root/chunk-4bfd0jkf.js";
var c = p(() => u({
    file_uuid: o(),
    file_name: o(),
    is_image: I().nullish(),
    sha256: o().nullish().catch(null),
    file_size: E().nullish().catch(void 0),
    from_connector: I().nullish().catch(!0),
    project_folder_name: o().nullish().catch(void 0)
  })),
  s = p(() => u({
    from_connector: I().nullish().catch(!0)
  })),
  l = 256;
function JP(n) {
  if (typeof n !== "object" || n === null || !("file_attachments" in n)) return [];
  let file_attachments = n.file_attachments;
  if (!Array.isArray(file_attachments)) return [];
  let r = c();
  return file_attachments.slice(0, l).flatMap(item => {
    let t = r.safeParse(item);
    return t.success ? [t.data] : [];
  });
}
function cLe(n) {
  return JP(n).some(item => item.from_connector === !0) || s().safeParse(n).data?.from_connector === !0;
}
var i = p(() => u({
  shouldQuery: I().optional()
}));
function J0n(n) {
  return i().safeParse(n).data?.shouldQuery;
}
export { JP, cLe, J0n };