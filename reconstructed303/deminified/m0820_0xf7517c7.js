// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { KS, Jhe, NGe, Ze } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { x } from "B:/~BUN/root/chunk-3aez4b53.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { ut } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { Ae } from "B:/~BUN/root/chunk-jjcfcfrs.js";
import { uUn } from "B:/~BUN/root/chunk-0p489043.js";
import { qt, Ee, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { _s } from "B:/~BUN/root/chunk-b4xxgr0r.js";
var {
  floor: floor,
  random: random
} = Math;
function D(e, n) {
  return e + floor(random() * (n - e + 1));
}
var E = D;
function F(e) {
  var n = e.length;
  return n ? e[E(0, n - 1)] : void 0;
}
var b = F;
function V(e, n) {
  return NGe(n, function (i) {
    return e[i];
  });
}
var T = V;
function H(e) {
  return e == null ? [] : T(e, Jhe(e));
}
var k = H;
function G(e) {
  return b(k(e));
}
var M = G;
function W(e) {
  var n = KS(e) ? b : M;
  return n(e);
}
var y1 = W;
B();
function W2t() {
  let spinnerVerbs = ut().spinnerVerbs;
  if (!spinnerVerbs) return v;
  if (spinnerVerbs.mode === "replace") return spinnerVerbs.verbs.length > 0 ? spinnerVerbs.verbs : v;
  return [...v, ...spinnerVerbs.verbs];
}
var v = ["Accomplishing", "Actioning", "Actualizing", "Architecting", "Baking", "Beaming", "Beboppin'", "Befuddling", "Billowing", "Blanching", "Bloviating", "Boogieing", "Boondoggling", "Booping", "Bootstrapping", "Brewing", "Bunning", "Burrowing", "Calculating", "Canoodling", "Caramelizing", "Cascading", "Catapulting", "Cerebrating", "Channeling", "Choreographing", "Churning", "Clauding", "Coalescing", "Cogitating", "Combobulating", "Composing", "Computing", "Concocting", "Considering", "Contemplating", "Cooking", "Crafting", "Creating", "Crunching", "Crystallizing", "Cultivating", "Deciphering", "Deliberating", "Determining", "Dilly-dallying", "Discombobulating", "Doing", "Doodling", "Drizzling", "Ebbing", "Effecting", "Elucidating", "Embellishing", "Enchanting", "Envisioning", "Fermenting", "Fiddle-faddling", "Finagling", "Flamb\xE9ing", "Flibbertigibbeting", "Flowing", "Flummoxing", "Fluttering", "Forging", "Forming", "Frolicking", "Frosting", "Gallivanting", "Galloping", "Garnishing", "Generating", "Gesticulating", "Germinating", "Gitifying", "Grooving", "Gusting", "Harmonizing", "Hashing", "Hatching", "Herding", "Honking", "Hullaballooing", "Hyperspacing", "Ideating", "Imagining", "Improvising", "Incubating", "Inferring", "Infusing", "Ionizing", "Jitterbugging", "Julienning", "Kerfuffling", "Kneading", "Leavening", "Levitating", "Lollygagging", "Manifesting", "Marinating", "Meandering", "Metamorphosing", "Misting", "Moonwalking", "Moseying", "Mulling", "Mustering", "Nebulizing", "Nesting", "Newspapering", "Noodling", "Nucleating", "Onioning", "Orbiting", "Orchestrating", "Osmosing", "Perambulating", "Percolating", "Perusing", "Philosophizing", "Photosynthesizing", "Polishing", "Pollinating", "Pondering", "Pontificating", "Pouncing", "Precipitating", "Prestidigitating", "Processing", "Proofing", "Propagating", "Puttering", "Puzzling", "Quantumizing", "Razzle-dazzling", "Razzmatazzing", "Recombobulating", "Reticulating", "Roosting", "Ruminating", "Saut\xE9ing", "Scampering", "Schlepping", "Scurrying", "Seasoning", "Shenaniganing", "Shimmying", "Simmering", "Skedaddling", "Sketching", "Slithering", "Smooshing", "Sock-hopping", "Spelunking", "Spinning", "Sprouting", "Stewing", "Sublimating", "Swirling", "Swooping", "Symbioting", "Synthesizing", "Tempering", "Thinking", "Thundering", "Tinkering", "Tomfoolering", "Topsy-turvying", "Transfiguring", "Transmogrifying", "Transmuting", "Twisting", "Undulating", "Unfurling", "Unraveling", "Vibing", "Waddling", "Wandering", "Warping", "Whatchamacalliting", "Whirlpooling", "Whirring", "Whisking", "Wibbling", "Working", "Wrangling", "Zesting", "Zigzagging"];
var Nwn = "API error";
function w(e) {
  try {
    let malformed = Y(e);
    if (malformed === null || malformed === "not_a_retry_status" || e === null || e.kind !== "retrying") return {
      status: malformed === null ? e : null,
      malformed: malformed
    };
    if (![e.attempt, e.maxRetries, e.deadline].every(Number.isFinite)) return {
      status: null,
      malformed: "counters_are_not_numbers"
    };
    let i = e.error,
      u = typeof i === "object" && i !== null && "status" in i ? i.status : void 0;
    return {
      status: {
        ...e,
        error: {
          ...U,
          status: typeof u === "number" && Number.isFinite(u) ? u : void 0
        }
      },
      malformed: malformed
    };
  } catch {
    return {
      status: null,
      malformed: "unreadable"
    };
  }
}
function P(e) {
  l(new MalformedRetryStatusError(K[e]));
}
var A = {
    retrying: !0,
    stalled: !1,
    auto_mode_unavailable: !1,
    low_priority_waiting: !1
  },
  U = {
    message: Nwn,
    status: void 0,
    requestId: void 0,
    formatted: Nwn,
    connection: null,
    isNetworkDown: !1,
    rateLimits: null,
    noResponse: null
  },
  C = "Spinner ignored an API retry status it could not draw (session unaffected): ",
  c = "Spinner replaced the error details of an API retry status it could not draw (session unaffected): ",
  K = {
    not_a_retry_status: C + "it is not an object with a known kind",
    unreadable: C + "reading it threw",
    counters_are_not_numbers: C + "its error field is unusable and its counters are not numbers",
    error_is_nullish: c + "its error field is undefined or null",
    error_is_a_string: c + "its error field is a string",
    error_is_not_an_object: c + "its error field is a number, boolean, bigint, symbol or function",
    formatted_is_not_a_string: c + "error.formatted is set but is not a string",
    rate_limit_type_is_not_a_string: c + "error.rateLimits.rateLimitType is set but is not a string",
    error_is_an_error_instance: c + "error.formatted is undefined on an Error instance",
    error_has_no_keys: c + "error.formatted is undefined on an object with no keys",
    error_has_api_error_keys: c + "error.formatted is undefined on an object that has the headers or requestID key of an SDK APIError",
    error_has_snapshot_keys: c + "error.formatted is undefined on an object that has the connection or isNetworkDown key of an error snapshot",
    error_is_another_object: c + "error.formatted is undefined on another kind of object"
  };
class MalformedRetryStatusError extends x {
  constructor(e) {
    super(e);
    this.name = "MalformedRetryStatusError";
  }
}
function Y(e) {
  if (e === null) return null;
  let n = typeof e === "object" && "kind" in e ? e.kind : void 0;
  if (!q(n)) return "not_a_retry_status";
  if (!A[n]) return null;
  let i = typeof e === "object" && "error" in e ? e.error : void 0;
  if (i === void 0 || i === null) return "error_is_nullish";
  if (typeof i === "string") return "error_is_a_string";
  if (typeof i !== "object") return "error_is_not_an_object";
  let u = "formatted" in i ? i.formatted : void 0;
  if (typeof u === "string") {
    let a = "rateLimits" in i ? i.rateLimits : void 0,
      d = (typeof a === "object" || typeof a === "function") && a !== null && "rateLimitType" in a ? a.rateLimitType : void 0;
    return d === void 0 || d === null || typeof d === "string" ? null : "rate_limit_type_is_not_a_string";
  }
  if (u !== void 0) return "formatted_is_not_a_string";
  return i instanceof Error ? "error_is_an_error_instance" : Object.keys(i).length === 0 ? "error_has_no_keys" : "headers" in i || "requestID" in i ? "error_has_api_error_keys" : "connection" in i || "isNetworkDown" in i ? "error_has_snapshot_keys" : "error_is_another_object";
}
function q(e) {
  return typeof e === "string" && Object.hasOwn(A, e);
}
var y = Object.freeze({
  mode: "responding",
  overrideMessage: null,
  overrideColor: null,
  overrideShimmerColor: null,
  isCompacting: !1,
  compactingHintText: null,
  compactingStartTime: null,
  turnEffort: null,
  turnModel: null,
  retryStatus: null,
  thinkingStartedAt: null,
  outputLimitRecovery: null,
  defaultVerb: ""
});
function f4r({
  onMalformedRetryStatus = P
} = {}) {
  let n = _s({}),
    i = new Set();
  function u(t, g, {
    materialize = !0
  } = {}) {
    n.setState(p => {
      let h = t in p;
      if (!h && !materialize) return p;
      let R = p[t] ?? {
          ...y,
          defaultVerb: y1(W2t()) ?? ""
        },
        _ = g(R);
      if (_ === R && h) return p;
      return {
        ...p,
        [t]: _
      };
    });
  }
  function bind(t) {
    function setMode(mode, o) {
      let s = Date.now(),
        outputLimitRecovery = mode === "requesting" ? o ?? null : null;
      u(t, S => S.mode === mode && S.outputLimitRecovery === outputLimitRecovery ? S : {
        ...S,
        mode: mode,
        thinkingStartedAt: mode === "thinking" ? s : null,
        outputLimitRecovery: outputLimitRecovery
      });
    }
    function setMessage(overrideMessage) {
      u(t, o => o.overrideMessage === overrideMessage ? o : {
        ...o,
        overrideMessage: overrideMessage
      });
    }
    function setColors(overrideColor, overrideShimmerColor) {
      u(t, s => s.overrideColor === overrideColor && s.overrideShimmerColor === overrideShimmerColor ? s : {
        ...s,
        overrideColor: overrideColor,
        overrideShimmerColor: overrideShimmerColor
      });
    }
    function setTurnEffort(turnEffort, turnModel = null) {
      u(t, s => s.turnEffort === turnEffort && s.turnModel === turnModel ? s : {
        ...s,
        turnEffort: turnEffort,
        turnModel: turnModel
      }, {
        materialize: turnEffort !== null || turnModel !== null
      });
    }
    function setRetryStatus(r) {
      let {
        status: o,
        malformed: malformed_2
      } = w(r);
      if (malformed_2 !== null && !i.has(malformed_2)) {
        i.add(malformed_2);
        try {
          onMalformedRetryStatus(malformed_2);
        } catch {}
      }
      u(t, m => m.retryStatus === o ? m : {
        ...m,
        retryStatus: o
      });
    }
    function setCompacting(isCompacting, compactingHintText = null) {
      let s = Date.now();
      u(t, m => {
        if (m.isCompacting === isCompacting && m.compactingHintText === compactingHintText) return m;
        let compactingStartTime = isCompacting ? m.compactingStartTime ?? s : null;
        return {
          ...m,
          isCompacting: isCompacting,
          compactingHintText: compactingHintText,
          compactingStartTime: compactingStartTime
        };
      });
    }
    function L() {
      u(t, r => r.overrideMessage === null && r.overrideColor === null && r.overrideShimmerColor === null && !r.isCompacting && r.compactingHintText === null && r.compactingStartTime === null ? r : {
        ...r,
        overrideMessage: null,
        overrideColor: null,
        overrideShimmerColor: null,
        isCompacting: !1,
        compactingHintText: null,
        compactingStartTime: null
      });
    }
    function resetOverrides() {
      let defaultVerb = y1(W2t()) ?? "";
      u(t, o => ({
        ...o,
        overrideMessage: null,
        overrideColor: null,
        overrideShimmerColor: null,
        isCompacting: !1,
        compactingHintText: null,
        compactingStartTime: null,
        turnEffort: null,
        turnModel: null,
        retryStatus: null,
        outputLimitRecovery: null,
        defaultVerb: defaultVerb
      }));
    }
    function applyCompactProgress(r) {
      switch (r.type) {
        case "hooks_start":
          setColors("claudeBlue_FOR_SYSTEM_SPINNER", "claudeBlueShimmer_FOR_SYSTEM_SPINNER"), setMessage(r.hookType === "pre_compact" ? "Running PreCompact hooks\u2026" : r.hookType === "post_compact" ? "Running PostCompact hooks\u2026" : uUn);
          return;
        case "compact_start":
          setMessage("Compacting conversation"), setCompacting(!0, r.hintText ?? null);
          return;
        case "compact_end":
          L();
          return;
      }
    }
    return {
      setMode: setMode,
      setMessage: setMessage,
      setColors: setColors,
      setTurnEffort: setTurnEffort,
      setRetryStatus: setRetryStatus,
      setCompacting: setCompacting,
      resetOverrides: resetOverrides,
      applyCompactProgress: applyCompactProgress
    };
  }
  let main = {
    setMode: (t, g) => bind(Ze()).setMode(t, g),
    setMessage: t => bind(Ze()).setMessage(t),
    setColors: (t, g) => bind(Ze()).setColors(t, g),
    setTurnEffort: (t, g) => bind(Ze()).setTurnEffort(t, g),
    setRetryStatus: t => bind(Ze()).setRetryStatus(t),
    setCompacting: (t, g) => bind(Ze()).setCompacting(t, g),
    resetOverrides: () => bind(Ze()).resetOverrides(),
    applyCompactProgress: t => bind(Ze()).applyCompactProgress(t)
  };
  return {
    getSnapshot: n.getSnapshot,
    getState: n.getState,
    setState: n.setState,
    subscribe: n.subscribe,
    get(t) {
      return n.getState()[t ?? Ze()] ?? y;
    },
    bind: bind,
    main: main,
    evict(t) {
      n.setState(g => {
        if (!(t in g)) return g;
        let {
          [t]: f,
          ...p
        } = g;
        return p;
      });
    },
    applyEvent(t) {
      switch (t.kind) {
        case "agent-mode":
          bind(t.agentId).setMode(t.mode, t.outputLimitRecovery);
          return;
        case "agent-retry-status":
          bind(t.agentId).setRetryStatus(t.retryStatus);
          return;
        case "agent-turn-effort":
          bind(t.agentId).setTurnEffort(t.turnEffort, t.turnModel);
          return;
        case "main-message":
          main.setMessage(t.message);
          return;
        case "main-colors":
          main.setColors(t.color, t.shimmerColor);
          return;
      }
    }
  };
}
var Enr = qt(null);
function d_e() {
  let e = Ee(Enr);
  if (!e) throw ReferenceError("useSpinnerStore cannot be called outside of a SpinnerStoreContext provider (mounted by <AppStateProvider />)");
  return e;
}
function m4r(e) {
  let n = e ?? Ze();
  return Ae(d_e(), i => i[n] ?? y);
}
function g4r(e) {
  return Ae(d_e(), n => (n[e] ?? y).thinkingStartedAt);
}
function h4r(e) {
  return Ae(d_e(), n => (n[e] ?? y).retryStatus);
}
export { y1, W2t, Nwn, f4r, Enr, d_e, m4r, g4r, h4r };