// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  ne
} from "B:/~BUN/root/chunk-nggrknsv.js";
import {
  rn
} from "B:/~BUN/root/chunk-pjgzz98k.js";
var Zpe = 128,
  aj = /^[\x21-\x7e]+$/,
  Skr = "io.modelcontextprotocol/tasks";

function pie(r) {
  return ne(r.replace(/[\p{Cc}\p{Cf}\p{Cs}\p{Zl}\p{Zp}\p{Variation_Selector}]+/gu, ""), Zpe)
}

function j6(r) {
  return ne(pie(r), 8)
}

function Bho(r) {
  if (!Number.isFinite(r) || r <= 0) return;
  return r < 1000 ? `${r}ms` : rn(r)
}
export {
  Zpe,
  aj,
  Skr,
  pie,
  j6,
  Bho
};
