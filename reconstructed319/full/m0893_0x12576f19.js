// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  qe,
  F
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  U4,
  Ete,
  sd,
  Te,
  us,
  Ci
} from "B:/~BUN/root/chunk-8f4z6bdn.js";
import {
  iPs,
  JX,
  Az,
  pf,
  AOr,
  RA,
  FOr
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  Ite,
  VJ
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  Ur
} from "B:/~BUN/root/chunk-bkfncj77.js";
import {
  tGe
} from "B:/~BUN/root/chunk-yhafkw66.js";
import {
  sc,
  Kb
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  HJ,
  Mb,
  $t
} from "B:/~BUN/root/chunk-zpne314q.js";
var g = /^claude-\S+$/;

function e6o(e) {
  let o = e.trim();
  if (!o) return {
    recognized: !1,
    shape: "empty"
  };
  if (Te() !== "firstParty" || !Ci()) return {
    recognized: !0
  };
  let n = o.toLowerCase(),
    r = $t(n).trim();
  if (Mb(n) || Mb(r)) return {
    recognized: !0
  };
  if (sd(r) || Ete(r)) return {
    recognized: !0
  };
  if (AOr(o)) return {
    recognized: !0
  };
  if (tGe().some((s) => s.value === o)) return {
    recognized: !0
  };
  if (iPs(r) !== void 0) return {
    recognized: !0
  };
  if (g.test(n)) return {
    recognized: !0
  };
  return {
    recognized: !1,
    ...w(o)
  }
}

function w(e) {
  let o = e.replace(/^\[(.+)\]$/s, "$1").trim(),
    n = U4().models.find((r) => r.display_name.toLowerCase() === o.toLowerCase());
  if (n) return Az(n.id) ? {
    shape: "display_name"
  } : {
    shape: "display_name",
    suggestion: n.id
  };
  if (/^\d+$/.test(e)) return {
    shape: "numeric"
  };
  if (e.startsWith("[")) return {
    shape: "bracketed",
    ...c(o)
  };
  if (/\s/.test(e)) return {
    shape: "whitespace",
    ...c(e)
  };
  return {
    shape: "other",
    ...c(e)
  }
}

function c(e) {
  let o = e.toLowerCase(),
    n = [...HJ, ...U4().models.map((d) => d.id)],
    r = `claude-${o}`,
    [s] = n.includes(r) ? [r] : Ite(o, n, 1);
  return s !== void 0 && (Mb(s) || !Az(s)) ? {
    suggestion: s
  } : {}
}

function h(e) {
  let o = e.trim(),
    n = o.toLowerCase();
  if (!us() || g.test(n)) return;
  if (AOr(o) || iPs($t(n).trim()) !== void 0) return;
  let {
    suggestion: r
  } = w(o);
  if (r === void 0 || r === n) return;
  if (Mb(r) && (/\d/.test(n) || n[0] !== r[0] || VJ(n, r, 1) > 1)) return;
  return r
}

function t6o(e, o) {
  let n = JX("model"),
    r = o !== void 0 ? ` Did you mean '${o}'?` : n ? ` Run ${n} to see available models.` : " Switch to a different model.";
  return `Model "${e}" is not a recognized model id.${r}`
}
var n6o = "https://code.claude.com/docs/en/model-config",
  r6o = `${n6o}#correct-the-window-for-a-gateway-or-custom-model-id`;

function rdi(e, o) {
  if (t(`[autocompact] ${e.detail}`, {
      level: "warn"
    }), o.interactive) return e;
  return o.headless(e.text), null
}

function Etr(e, o, n) {
  try {
    return M(e, o, n)
  } catch (r) {
    return a(qe(F(r), "unknown-model notice failed")), null
  }
}

function M(e, o, n) {
  let {
    source: r,
    window: s
  } = Kb(sc(e, n), o, n);
  if (r !== "unknown-model") return null;
  let d = FOr(e),
    m = i.CLAUDE_CODE_MAX_CONTEXT_TOKENS;
  if (d && m !== void 0 && m > 0) return null;
  let p = s < 1e6,
    u = [];
  if (!RA() && p) u.push("append [1m] to the model name for 1M");
  if (d) u.push("set CLAUDE_CODE_MAX_CONTEXT_TOKENS to its real window");
  let C = u.length > 0 ? `; if the model accepts ${p?"more":"less"}, ${u.join(", or ")}` : "",
    f = pf(e),
    l = h(e);
  return {
    model: e,
    window: s,
    suggestion: l,
    text: l === void 0 ? `Claude Code doesn't recognize the model "${f}", so it assumes a context window of ${Ur(s)} tokens. Update Claude Code, or see ${r6o} to set the window.` : `Claude Code doesn't recognize the model "${f}". Did you mean "${l}"?`,
    detail: `"${e}" isn't described by this version's model catalog; update Claude Code, or map it with behavesAs on a modelPicker row (or modelOverrides, if it is a provider id of a model this version knows). Until then auto-compact keeps this session within ${Ur(s)} tokens (the context window it assumes)${C}; CLAUDE_CODE_DISABLE_UNKNOWN_MODEL_WINDOW_ENFORCEMENT=1 restores the previous wait-for-the-API behavior.`
  }
}
export {
  e6o,
  t6o,
  n6o,
  r6o,
  rdi,
  Etr
};
