// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Je } from "B:/~BUN/root/chunk-9wbhv9z5.js";
var vEn = new Je(() => ({}));
function EEn(r, e) {
  let o = r?.servers.get(e.name);
  return o !== void 0 && e.config.type === "http" && e.config.url === o.url && r?.heldSinceBoot(e.name) === !0 ? o.server : void 0;
}
export { vEn, EEn };