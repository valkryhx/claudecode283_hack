// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { o, v, M, T, u } from "B:/~BUN/root/chunk-g3snhg6n.js";
var e = f(() => u({
  path: o(),
  text: o(),
  chars: v().int().min(0),
  clipped: M().optional()
}));
function uEn() {
  return {
    init_references: u({
      docs: T(e()),
      unavailable: T(u({
        path: o(),
        why: o()
      })).optional()
    }).optional()
  };
}
function _qt() {
  return {
    design_system: u({
      url: o().optional(),
      default: o().optional(),
      title: o().optional(),
      store: M().optional(),
      docs: T(e()).optional(),
      unavailable: o().optional()
    }).optional()
  };
}
var t = f(() => u({
    dir: o(),
    files: T(u({
      path: o(),
      bytes: v()
    })),
    skipped: T(u({
      path: o(),
      reason: o()
    }))
  })),
  pEn = f(() => u({
    type: t().optional(),
    system_url: o().optional(),
    system: t().optional(),
    skill_in_result: M(),
    capabilities_skill: M(),
    repl_tool: M().optional()
  }));
export { uEn, _qt, pEn };