// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Gf,
  uP
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  XP
} from "B:/~BUN/root/chunk-nq10jsxs.js";
import {
  dr
} from "B:/~BUN/root/chunk-6a9s3k2y.js";
import {
  yv
} from "B:/~BUN/root/chunk-5ygt6t95.js";

function jxn(e, n) {
  let o = yv("--fast-mode");
  if (o !== "on" && o !== "off") return;
  uP({
    ...Gf() ?? {},
    fastMode: e
  }), dr(), XP("--fast-mode", [], e ? "on" : "off", void 0, n)
}
export {
  jxn
};
