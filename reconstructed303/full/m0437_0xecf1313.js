// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  ho
} from "B:/~BUN/root/chunk-fqc7tjgr.js";
import {
  He
} from "B:/~BUN/root/chunk-8znbjmp4.js";
import {
  posix as o
} from "path";
var eSs = "cc-shell",
  e = He({
    joinCommand: void 0
  }, (n) => {
    n.joinCommand = void 0
  });

function s7t(n) {
  e.joinCommand = n === void 0 ? void 0 : `{ { \\builtin echo 0 >| ${ho([o.join(n,"tasks")])}; } 2>/dev/null || :; }`
}

function tSs() {
  return e.joinCommand
}
export {
  eSs,
  s7t,
  tSs
};
