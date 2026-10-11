// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  H,
  FBo
} from "B:/~BUN/root/chunk-dkxhwhft.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  Se,
  Wde
} from "B:/~BUN/root/chunk-4p6z9qq1.js";
import {
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";

function rLr(e = hVn) {
  let o = a.CLAUDE_CODE_HOVER_REST;
  if (o === void 0) return;
  if (gVn(o) !== "pinned") return;
  return {
    backend: H() ? e() : void 0,
    configHome: Se()
  }
}

function oLr(e) {
  let o = H() ? e.backend : void 0;
  if (o === void 0) return;
  if (!Wde(e.configHome)) {
    t(`CLAUDE_CONFIG_DIR now names ${Se()}, not ${e.configHome} where the v5 storage backend was built at start-up; not handing it on, so this process keeps today's direct file access`, {
      level: "warn"
    });
    return
  }
  return o
}

function gVn(e) {
  if (typeof e !== "boolean") t(`tengu_hover_rest served a ${typeof e}, not a boolean; treating it as off`, {
    level: "warn"
  });
  let o = FBo(e);
  if (o === "conflict") t(`tengu_hover_rest read ${String(e)} at a second pin in this process; keeping the first decision`, {
    level: "warn"
  });
  return o
}

function hVn() {
  if (!H()) return;
  return
}
export {
  rLr,
  oLr,
  gVn,
  hVn
};
