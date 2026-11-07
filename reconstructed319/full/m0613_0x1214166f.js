// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
var F6r = "[3P telemetry] OTEL diag error:";
class cYo {
  error(r, ...e) {
    if (i.CLAUDE_CODE_OTEL_DIAG_STDERR) process.stderr.write(`${F6r} ${r}
`);
    t(`${F6r} ${r}`, {
      level: "error"
    })
  }
  warn(r, ...e) {
    t(`[3P telemetry] OTEL diag warn: ${r}`, {
      level: "warn"
    })
  }
  info(r, ...e) {
    return
  }
  debug(r, ...e) {
    return
  }
  verbose(r, ...e) {
    return
  }
}
export {
  F6r,
  cYo
};
