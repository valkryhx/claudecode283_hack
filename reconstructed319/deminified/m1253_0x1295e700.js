// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Yi } from "B:/~BUN/root/chunk-3xdsa4p8.js";
var YSs = {
  delete_asset: "ask",
  delete_artifact: "ask",
  read_shared_artifact: "blocked",
  ...{}
};
function Pvr(e) {
  return {
    ...e,
    ...Yi(YSs, (s, r) => e?.[r] === "blocked")
  };
}
export { YSs, Pvr };