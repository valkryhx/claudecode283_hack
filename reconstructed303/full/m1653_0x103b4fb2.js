// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  d
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  bo
} from "B:/~BUN/root/chunk-wje8pvrc.js";

function qtt(e, o) {
  if (!bo(o)) return d(e);
  return t(`bash spawn failure detail: ${d(e)}`, {
    level: "error"
  }), "shell command failed (detail withheld on this connection)"
}
export {
  qtt
};
