// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  z
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  createHash as e
} from "crypto";

function pmr() {
  return e("sha256").update(`${z()} ${process.hrtime.bigint()}`).digest().readUInt32BE(0) / 4294967296
}
export {
  pmr
};
