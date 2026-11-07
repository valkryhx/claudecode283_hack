// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Pe
} from "B:/~BUN/root/chunk-vz9zea4j.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  Kt
} from "B:/~BUN/root/chunk-6n5g80b8.js";
import {
  v
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  Ei
} from "B:/~BUN/root/chunk-sgy380eg.js";
var rMi = "claude-opus-4-8";

function oMi() {
  return v("tengu_amber_redwood2", "") || v("tengu_amber_redwood3", "")
}
var r = "tengu_goofy_jellyfish";

function sMi() {
  return v(r, "")
}

function n() {
  return Boolean(Pe(process.env.DISABLE_COMPACT) || i.DISABLE_AUTO_COMPACT)
}

function Ku() {
  if (n()) return !1;
  return Ei("autoCompactEnabled", !0).value
}

function ZMt() {
  return Ei("idleCompaction", !0).value
}

function s_r() {
  return Ei("precomputeCompactionEnabled", !0).value
}

function Cfs() {
  if (n()) return !1;
  let e = Ei("autoCompactEnabled", !0);
  if (e.value) return !1;
  if (e.source === "userSettings") return !0;
  if (e.source === "legacyGlobalConfig") return Kt("userSettings");
  return !1
}
class o {
  latched = void 0;
  isOpen() {
    return this.latched ??= v("tengu_reactive_compact_remote", !1), this.latched
  }
  reset() {
    this.latched = void 0
  }
}
var u = new o;

function N$() {
  if (i.CLAUDE_CODE_REMOTE) {
    if (!u.isOpen()) return !1
  }
  return !0
}

function i_r() {
  return v("tengu_hidden_frog", !0)
}

function Rfs() {
  return v("tengu_generic_papert", !1)
}

function iMi() {
  return v("tengu_hazy_prism", !1)
}

function aMi() {
  return v("tengu_valiant_teapot", !1)
}

function r7t() {
  return v("tengu_linked_rose", !0)
}

function o7t() {
  return v("tengu_soft_spark", !1)
}

function lMi() {
  return v("tengu_plain_heron", !0)
}

function dMi() {
  return v("tengu_gentle_anchor", !0)
}

function cMi() {
  return v("tengu_tidy_thimble", !1)
}

function uMi() {
  return v("tengu_sleepy_ripple", !0)
}

function Afs() {
  return v("tengu_serene_rain", !1) && s_r()
}

function fMi() {
  let e = v("tengu_spare_attic", 0);
  return typeof e === "number" ? e : 0
}

function pMi() {
  return v("tengu_dapper_fountain", !0)
}

function mMi() {
  return v("tengu_hashed_pascal", !1)
}

function hMi() {
  return v("tengu_groovy_eclipse", !1)
}
var a = "tengu_wise_comet";

function gMi(e) {
  let t = i.CLAUDE_CODE_WISE_COMET;
  if (t !== void 0) return {
    strip: t,
    source: "env"
  };
  if (e !== "adaptive") return {
    strip: !1,
    source: "thinking_type"
  };
  return {
    strip: v(a, !1),
    source: "flag"
  }
}
var s = new Set(["prompt_suggestion", "away_summary", "agent_summary", "resume_cache_warm", "hook_prompt"]);

function yXe(e) {
  return e !== void 0 && s.has(e)
}
var l = new Set(["side_question", "extract_memories"]);

function qlo(e) {
  return e !== void 0 && l.has(e)
}

function s7t(e) {
  return e === "compact"
}
export {
  rMi,
  oMi,
  sMi,
  Ku,
  ZMt,
  s_r,
  Cfs,
  N$,
  i_r,
  Rfs,
  iMi,
  aMi,
  r7t,
  o7t,
  lMi,
  dMi,
  cMi,
  uMi,
  Afs,
  fMi,
  pMi,
  mMi,
  hMi,
  gMi,
  yXe,
  qlo,
  s7t
};
