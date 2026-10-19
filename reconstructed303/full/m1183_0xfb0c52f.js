// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  MLn,
  cdo
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  randomUUID as n
} from "crypto";

function yFe(t) {
  let e = cdo(t, MLn(t, t));
  return e === null ? t : [...t, r(e)]
}
var Aeo = (t) => r(cdo(t, MLn(t, t)) ?? {
    type: "session_cron_carry",
    tasks: []
  }),
  r = (t) => ({
    attachment: t,
    type: "attachment",
    uuid: n(),
    timestamp: new Date().toISOString()
  });
export {
  yFe,
  Aeo
};
