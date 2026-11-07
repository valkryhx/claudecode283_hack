// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  af,
  xme
} from "B:/~BUN/root/chunk-eev762xg.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  X,
  Boa
} from "B:/~BUN/root/chunk-g9pw24zp.js";

function pAs(e = Ebo) {
  let o = i.CLAUDE_CODE_HOVER_REST;
  if (o === void 0) return;
  if (vbo(o) !== "pinned") return;
  return {
    backend: X() ? e() : void 0,
    configHome: af()
  }
}

function mAs(e) {
  let o = X() ? e.backend : void 0;
  if (o === void 0) return;
  if (!xme(e.configHome)) {
    let r = af();
    t(r !== null && e.configHome !== null ? `CLAUDE_CONFIG_DIR now names ${r}, not ${e.configHome} where the v5 storage backend was built at start-up; not handing it on, so this process keeps today's direct file access` : `The v5 storage backend is not used: the config home was ${e.configHome??"absent"} when it was built at start-up and is ${r??"absent"} now`, {
      level: "warn"
    });
    return
  }
  return o
}

function vbo(e) {
  if (typeof e !== "boolean") t(`tengu_hover_rest served a ${typeof e}, not a boolean; treating it as off`, {
    level: "warn"
  });
  let o = Boa(e);
  if (o === "conflict") t(`tengu_hover_rest read ${String(e)} at a second pin in this process; keeping the first decision`, {
    level: "warn"
  });
  return o
}

function Ebo() {
  if (!X()) return;
  return
}
export {
  pAs,
  mAs,
  vbo,
  Ebo
};
