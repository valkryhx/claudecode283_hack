// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { W, u3s } from "B:/~BUN/root/chunk-hg8ngszx.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { vf, lre } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
function tIo(e = e0r) {
  let CLAUDE_CODE_HOVER_REST = a.CLAUDE_CODE_HOVER_REST;
  if (CLAUDE_CODE_HOVER_REST === void 0) return;
  if (ZMr(CLAUDE_CODE_HOVER_REST) !== "pinned") return;
  return {
    backend: W() ? e() : void 0,
    configHome: vf()
  };
}
function nIo(e) {
  let o = W() ? e.backend : void 0;
  if (o === void 0) return;
  if (!lre(e.configHome)) {
    let r = vf();
    t(r !== null && e.configHome !== null ? `CLAUDE_CONFIG_DIR now names ${r}, not ${e.configHome} where the v5 storage backend was built at start-up; not handing it on, so this process keeps today's direct file access` : `The v5 storage backend is not used: the config home was ${e.configHome ?? "absent"} when it was built at start-up and is ${r ?? "absent"} now`, {
      level: "warn"
    });
    return;
  }
  return o;
}
function ZMr(e) {
  if (typeof e !== "boolean") t(`tengu_hover_rest served a ${typeof e}, not a boolean; treating it as off`, {
    level: "warn"
  });
  let o = u3s(e);
  if (o === "conflict") t(`tengu_hover_rest read ${String(e)} at a second pin in this process; keeping the first decision`, {
    level: "warn"
  });
  return o;
}
function e0r() {
  if (!W()) return;
  return;
}
export { tIo, nIo, ZMr, e0r };