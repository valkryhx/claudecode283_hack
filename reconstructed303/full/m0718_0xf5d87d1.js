// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Ye,
  H
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  T_,
  bYn,
  Px,
  FYn
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  cr
} from "B:/~BUN/root/chunk-pjgzz98k.js";
import {
  Vd,
  Mb
} from "B:/~BUN/root/chunk-9grc6xh0.js";
var NYr = "https://code.claude.com/docs/en/model-config",
  FYr = `${NYr}#correct-the-window-for-a-gateway-or-custom-model-id`;

function HXo(o, e) {
  if (t(`[autocompact] ${o.detail}`, {
      level: "warn"
    }), e.interactive) return o;
  return e.headless(o.text), null
}

function $Xo(o, e, n) {
  try {
    return u(o, e, n)
  } catch (s) {
    return l(Ye(H(s), "unknown-model notice failed")), null
  }
}

function u(o, e, n) {
  let {
    source: s,
    window: i
  } = Mb(Vd(o, n), e, n);
  if (s !== "unknown-model") return null;
  let d = FYn(o),
    m = a.CLAUDE_CODE_MAX_CONTEXT_TOKENS;
  if (d && m !== void 0 && m > 0) return null;
  let w = i < 1e6,
    r = [];
  if (!Px() && w) r.push("append [1m] to the model name for 1M");
  if (d) r.push("set CLAUDE_CODE_MAX_CONTEXT_TOKENS to its real window");
  let c = r.length > 0 ? `; if the model accepts ${w?"more":"less"}, ${r.join(", or ")}` : "";
  return {
    model: o,
    window: i,
    text: `Claude Code doesn't recognize the model "${T_(o)}", so it assumes a context window of ${cr(i)} tokens. Update Claude Code, or see ${FYr} to set the window.`,
    detail: `${bYn(o)} Until then auto-compact keeps this session within ${cr(i)} tokens (the context window it assumes)${c}; CLAUDE_CODE_DISABLE_UNKNOWN_MODEL_WINDOW_ENFORCEMENT=1 restores the previous wait-for-the-API behavior.`
  }
}
export {
  NYr,
  FYr,
  HXo,
  $Xo
};
