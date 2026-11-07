// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Ey
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  stripVTControlCharacters as t
} from "util";

function Ca(r) {
  return t(Ey(r)).replace(/(?![\t\n])[\p{Cc}\p{Cf}\u2028\u2029]/gu, "")
}
export {
  Ca
};
