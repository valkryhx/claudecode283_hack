// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  mn
} from "B:/~BUN/root/chunk-44q965xg.js";
import {
  Me
} from "B:/~BUN/root/chunk-9kvvd0hy.js";
import {
  fht,
  aU
} from "B:/~BUN/root/chunk-21s8ygah.js";

function _pn(i) {
  if (i.toolName === Me) {
    if (!i.ruleContent) return {
      prefix: "Any Bash command"
    };
    if (i.ruleContent.endsWith(":*") || i.ruleContent.endsWith(" *")) return {
      prefix: "Any Bash command starting with ",
      emphasis: i.ruleContent.slice(0, -2)
    };
    return {
      prefix: "The Bash command ",
      emphasis: i.ruleContent
    }
  }
  if (aU(i)) return {
    prefix: `This rule ${fht(mn(i),i.toolName)}`
  };
  if (!i.ruleContent) return {
    prefix: "Any use of the ",
    emphasis: i.toolName,
    suffix: " tool"
  };
  return null
}
export {
  _pn
};
