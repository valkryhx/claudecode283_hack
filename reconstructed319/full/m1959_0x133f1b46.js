// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  vTr
} from "B:/~BUN/root/chunk-jh04j3yr.js";

function rBe(e, r) {
  return e.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    ...r?.includeYear && {
      year: "numeric"
    },
    hour: "numeric",
    minute: "2-digit",
    timeZone: vTr()
  }).replace(/,? at |, (?=\d{1,2}:)/, " ").replace(/[ \u202f]([AP]M)/i, (o, t) => t.toLowerCase())
}
export {
  rBe
};
