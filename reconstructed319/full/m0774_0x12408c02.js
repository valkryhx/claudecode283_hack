// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  qfe
} from "B:/~BUN/root/chunk-1s0yt4vj.js";
import {
  ez
} from "B:/~BUN/root/chunk-m4674qtc.js";

function kBe(e, o) {
  if (qfe(e)) return;
  return {
    uuid: typeof e.source_uuid === "string" && e.source_uuid ? e.source_uuid : o,
    content: e.prompt,
    isMeta: Boolean(e.isMeta),
    origin: ez(e.origin, e.commandMode, e.runId)
  }
}
export {
  kBe
};
