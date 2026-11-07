// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { De } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { st } from "B:/~BUN/root/chunk-game8aqv.js";
import { R } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { yt } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { Ne } from "B:/~BUN/root/chunk-qdyt0gq6.js";
import { jQr } from "B:/~BUN/root/chunk-27h4st9h.js";
import { e } from "B:/~BUN/root/chunk-t16eynda.js";
import { Jt, ve, Z, A, At, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { Hs } from "B:/~BUN/root/chunk-3xtmwvra.js";
import { rme } from "B:/~BUN/root/chunk-3cca501e.js";
import { l7, hS } from "B:/~BUN/root/chunk-99vcrndq.js";
import { w } from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();
var E = Jt(null),
  N = 20;
function VGt(t) {
  let o = S(8),
    {
      children: children
    } = t,
    g;
  if (o[0] === w) g = [], o[0] = g;else g = o[0];
  let l = A(g),
    p;
  if (o[1] === w) p = De(), o[1] = p;else p = o[1];
  let n = p,
    getDenials,
    recordDenial,
    removeDenial;
  if (o[2] === w) getDenials = () => l.current, recordDenial = y => {
    l.current = [y, ...l.current.slice(0, N - 1)], n.emit();
  }, removeDenial = h => {
    l.current = l.current.filter(item => item.toolName !== h.toolName || item.inputKey !== h.inputKey), n.emit();
  }, o[2] = getDenials, o[3] = recordDenial, o[4] = removeDenial;else getDenials = o[2], recordDenial = o[3], removeDenial = o[4];
  let x;
  if (o[5] === w) x = {
    getDenials: getDenials,
    recordDenial: recordDenial,
    removeDenial: removeDenial,
    subscribe: n.subscribe,
    rowTexts: new WeakMap()
  }, o[5] = x;else x = o[5];
  let value = x,
    P;
  if (o[6] !== children) P = e(E.Provider, {
    value: value,
    children: children
  }), o[6] = children, o[7] = P;else P = o[7];
  return P;
}
function F() {
  return () => {};
}
function KGt(t) {
  let o = S(3),
    r = ve(E),
    g;
  if (o[0] !== t || o[1] !== r) g = () => r?.getDenials().some(l => t.includes(l.toolUseId)) ?? !1, o[0] = t, o[1] = r, o[2] = g;else g = o[2];
  let p = g;
  return At(r?.subscribe ?? F, p, p);
}
function C() {
  let t = ve(E);
  if (!t) {
    throw ReferenceError("useAutoModeDenials and useDenialRowTexts cannot be called outside of an <AutoModeDenialsProvider /> (mounted by <AppStateProvider />)");
  }
  return t;
}
function SYe() {
  return C();
}
function thn() {
  return C().rowTexts;
}
var {
  floor: floor,
  random: random
} = Math;
function ge(t, r) {
  return t + floor(random() * (r - t + 1));
}
var G = ge;
function de(t) {
  var r = t.length;
  return r ? t[G(0, r - 1)] : void 0;
}
var k = de;
function pe(t, r) {
  return l7(r, function (o) {
    return t[o];
  });
}
var U = pe;
function ce(t) {
  return t == null ? [] : U(t, rme(t));
}
var K = ce;
function me(t) {
  return k(K(t));
}
var Y = me;
function fe(t) {
  var r = hS(t) ? k : Y;
  return r(t);
}
var gK = fe;
j();
function nhn() {
  let spinnerVerbs = yt().spinnerVerbs;
  if (!spinnerVerbs) return O;
  if (spinnerVerbs.mode === "replace") return spinnerVerbs.verbs.length > 0 ? spinnerVerbs.verbs : O;
  return [...O, ...spinnerVerbs.verbs];
}
var O = ["Accomplishing", "Actioning", "Actualizing", "Architecting", "Baking", "Beaming", "Beboppin'", "Befuddling", "Billowing", "Blanching", "Bloviating", "Boogieing", "Boondoggling", "Booping", "Bootstrapping", "Brewing", "Bunning", "Burrowing", "Calculating", "Caramelizing", "Cascading", "Catapulting", "Cerebrating", "Channeling", "Choreographing", "Churning", "Clauding", "Coalescing", "Cogitating", "Combobulating", "Composing", "Computing", "Concocting", "Considering", "Contemplating", "Cooking", "Crafting", "Creating", "Crunching", "Crystallizing", "Cultivating", "Deciphering", "Deliberating", "Determining", "Dilly-dallying", "Discombobulating", "Doing", "Doodling", "Drizzling", "Ebbing", "Effecting", "Elucidating", "Embellishing", "Enchanting", "Envisioning", "Fermenting", "Fiddle-faddling", "Finagling", "Flamb\xE9ing", "Flibbertigibbeting", "Flowing", "Flummoxing", "Fluttering", "Forging", "Forming", "Frolicking", "Frosting", "Gallivanting", "Galloping", "Garnishing", "Generating", "Gesticulating", "Germinating", "Gitifying", "Grooving", "Gusting", "Harmonizing", "Hashing", "Hatching", "Herding", "Honking", "Hullaballooing", "Hyperspacing", "Ideating", "Imagining", "Improvising", "Incubating", "Inferring", "Infusing", "Ionizing", "Jitterbugging", "Julienning", "Kerfuffling", "Kneading", "Leavening", "Levitating", "Lollygagging", "Manifesting", "Marinating", "Meandering", "Metamorphosing", "Misting", "Moonwalking", "Moseying", "Mulling", "Mustering", "Nebulizing", "Nesting", "Newspapering", "Noodling", "Nucleating", "Onioning", "Orbiting", "Orchestrating", "Osmosing", "Perambulating", "Percolating", "Perusing", "Philosophizing", "Photosynthesizing", "Polishing", "Pollinating", "Pondering", "Pontificating", "Pouncing", "Precipitating", "Prestidigitating", "Processing", "Proofing", "Propagating", "Puttering", "Puzzling", "Quantumizing", "Razzle-dazzling", "Razzmatazzing", "Recombobulating", "Reticulating", "Roosting", "Ruminating", "Saut\xE9ing", "Scampering", "Schlepping", "Scurrying", "Seasoning", "Shenaniganing", "Shimmying", "Simmering", "Skedaddling", "Sketching", "Slithering", "Smooshing", "Sock-hopping", "Spelunking", "Spinning", "Sprouting", "Stewing", "Sublimating", "Swirling", "Swooping", "Symbioting", "Synthesizing", "Tempering", "Thinking", "Thundering", "Tinkering", "Tomfoolering", "Topsy-turvying", "Transfiguring", "Transmogrifying", "Transmuting", "Twisting", "Undulating", "Unfurling", "Unraveling", "Vibing", "Waddling", "Wandering", "Warping", "Whatchamacalliting", "Whirlpooling", "Whirring", "Whisking", "Wibbling", "Working", "Wrangling", "Zesting", "Zigzagging"];
var v5n = "API error";
function q(t) {
  try {
    let malformed = ye(t);
    if (malformed === null || malformed === "not_a_retry_status" || t === null || t.kind !== "retrying") return {
      status: malformed === null ? t : null,
      malformed: malformed
    };
    if (![t.attempt, t.maxRetries, t.deadline].every(Number.isFinite)) return {
      status: null,
      malformed: "counters_are_not_numbers"
    };
    let o = t.error,
      g = typeof o === "object" && o !== null && "status" in o ? o.status : void 0;
    return {
      status: {
        ...t,
        error: {
          ...Se,
          status: typeof g === "number" && Number.isFinite(g) ? g : void 0
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
function Q(t) {
  a(new MalformedRetryStatusError(_e[t]));
}
var J = {
    retrying: !0,
    stalled: !1,
    auto_mode_unavailable: !1,
    low_priority_waiting: !1
  },
  Se = {
    message: v5n,
    status: void 0,
    requestId: void 0,
    formatted: v5n,
    connection: null,
    isNetworkDown: !1,
    rateLimits: null,
    noResponse: null
  },
  H = "Spinner ignored an API retry status it could not draw (session unaffected): ",
  f = "Spinner replaced the error details of an API retry status it could not draw (session unaffected): ",
  _e = {
    not_a_retry_status: H + "it is not an object with a known kind",
    unreadable: H + "reading it threw",
    counters_are_not_numbers: H + "its error field is unusable and its counters are not numbers",
    error_is_nullish: f + "its error field is undefined or null",
    error_is_a_string: f + "its error field is a string",
    error_is_not_an_object: f + "its error field is a number, boolean, bigint, symbol or function",
    formatted_is_not_a_string: f + "error.formatted is set but is not a string",
    rate_limit_type_is_not_a_string: f + "error.rateLimits.rateLimitType is set but is not a string",
    error_is_an_error_instance: f + "error.formatted is undefined on an Error instance",
    error_has_no_keys: f + "error.formatted is undefined on an object with no keys",
    error_has_api_error_keys: f + "error.formatted is undefined on an object that has the headers or requestID key of an SDK APIError",
    error_has_snapshot_keys: f + "error.formatted is undefined on an object that has the connection or isNetworkDown key of an error snapshot",
    error_is_another_object: f + "error.formatted is undefined on another kind of object"
  };
class MalformedRetryStatusError extends R {
  constructor(t) {
    super(t);
    this.name = "MalformedRetryStatusError";
  }
}
function ye(t) {
  if (t === null) return null;
  let r = typeof t === "object" && "kind" in t ? t.kind : void 0;
  if (!Re(r)) return "not_a_retry_status";
  if (!J[r]) return null;
  let o = typeof t === "object" && "error" in t ? t.error : void 0;
  if (o === void 0 || o === null) return "error_is_nullish";
  if (typeof o === "string") return "error_is_a_string";
  if (typeof o !== "object") return "error_is_not_an_object";
  let g = "formatted" in o ? o.formatted : void 0;
  if (typeof g === "string") {
    let l = "rateLimits" in o ? o.rateLimits : void 0,
      p = (typeof l === "object" || typeof l === "function") && l !== null && "rateLimitType" in l ? l.rateLimitType : void 0;
    return p === void 0 || p === null || typeof p === "string" ? null : "rate_limit_type_is_not_a_string";
  }
  if (g !== void 0) return "formatted_is_not_a_string";
  return o instanceof Error ? "error_is_an_error_instance" : Object.keys(o).length === 0 ? "error_has_no_keys" : "headers" in o || "requestID" in o ? "error_has_api_error_keys" : "connection" in o || "isNetworkDown" in o ? "error_has_snapshot_keys" : "error_is_another_object";
}
function Re(t) {
  return typeof t === "string" && Object.hasOwn(J, t);
}
var T = Object.freeze({
  mode: "responding",
  overrideMessage: null,
  overrideHeading: null,
  waitLine: null,
  overrideColor: null,
  overrideShimmerColor: null,
  isCompacting: !1,
  isResponseHeld: !1,
  compactingHintText: null,
  compactingStartTime: null,
  turnEffort: null,
  turnModel: null,
  sentEffort: null,
  retryStatus: null,
  thinkingStartedAt: null,
  outputLimitRecovery: null,
  defaultVerb: ""
});
function zHo({
  onMalformedRetryStatus = Q
} = {}) {
  let r = Hs({}),
    o = new Set();
  function g(n, d, {
    materialize = !0
  } = {}) {
    r.setState(m => {
      let y = n in m;
      if (!y && !materialize) return m;
      let h = m[n] ?? {
          ...T,
          defaultVerb: gK(nhn()) ?? ""
        },
        v = d(h);
      if (v === h && y) return m;
      return {
        ...m,
        [n]: v
      };
    });
  }
  function bind(n) {
    function setMode(mode, s) {
      let u = Date.now(),
        outputLimitRecovery = mode === "requesting" ? s ?? null : null;
      g(n, b => b.mode === mode && b.outputLimitRecovery === outputLimitRecovery ? b : {
        ...b,
        mode: mode,
        thinkingStartedAt: mode === "thinking" ? u : null,
        outputLimitRecovery: outputLimitRecovery
      });
    }
    function setMessage(overrideMessage, overrideHeading = null) {
      g(n, u => u.overrideMessage === overrideMessage && u.overrideHeading?.words === overrideHeading?.words && u.overrideHeading?.detail === overrideHeading?.detail ? u : {
        ...u,
        overrideMessage: overrideMessage,
        overrideHeading: overrideHeading
      });
    }
    function setWaitLine(waitLine) {
      g(n, s => s.waitLine === waitLine ? s : {
        ...s,
        waitLine: waitLine
      });
    }
    function setColors(overrideColor, overrideShimmerColor) {
      g(n, u => u.overrideColor === overrideColor && u.overrideShimmerColor === overrideShimmerColor ? u : {
        ...u,
        overrideColor: overrideColor,
        overrideShimmerColor: overrideShimmerColor
      });
    }
    function setTurnEffort(turnEffort, turnModel = null) {
      g(n, u => u.turnEffort === turnEffort && u.turnModel === turnModel ? u : {
        ...u,
        turnEffort: turnEffort,
        turnModel: turnModel
      }, {
        materialize: turnEffort !== null || turnModel !== null
      });
    }
    function setSentEffort(sentEffort) {
      g(n, s => s.sentEffort === sentEffort ? s : {
        ...s,
        sentEffort: sentEffort
      });
    }
    function setRetryStatus(i) {
      let {
        status: s,
        malformed: malformed_2
      } = q(i);
      if (malformed_2 !== null && !o.has(malformed_2)) {
        o.add(malformed_2);
        try {
          onMalformedRetryStatus(malformed_2);
        } catch {}
      }
      g(n, c => c.retryStatus === s ? c : {
        ...c,
        retryStatus: s
      });
    }
    function setCompacting(isCompacting, compactingHintText = null) {
      let u = Date.now();
      g(n, c => {
        if (c.isCompacting === isCompacting && c.compactingHintText === compactingHintText) return c;
        let compactingStartTime = isCompacting ? c.compactingStartTime ?? u : null;
        return {
          ...c,
          isCompacting: isCompacting,
          compactingHintText: compactingHintText,
          compactingStartTime: compactingStartTime
        };
      });
    }
    function P() {
      g(n, i => i.overrideMessage === null && i.overrideColor === null && i.overrideShimmerColor === null && !i.isCompacting && i.compactingHintText === null && i.compactingStartTime === null ? i : {
        ...i,
        overrideMessage: null,
        overrideHeading: null,
        overrideColor: null,
        overrideShimmerColor: null,
        isCompacting: !1,
        compactingHintText: null,
        compactingStartTime: null
      });
    }
    function setResponseHeld(isResponseHeld) {
      g(n, s => s.isResponseHeld === isResponseHeld ? s : {
        ...s,
        isResponseHeld: isResponseHeld
      });
    }
    function resetOverrides() {
      let defaultVerb = gK(nhn()) ?? "";
      g(n, s => ({
        ...s,
        overrideMessage: null,
        overrideHeading: null,
        overrideColor: null,
        overrideShimmerColor: null,
        isCompacting: !1,
        isResponseHeld: !1,
        compactingHintText: null,
        compactingStartTime: null,
        turnEffort: null,
        turnModel: null,
        sentEffort: null,
        retryStatus: null,
        outputLimitRecovery: null,
        defaultVerb: defaultVerb
      }));
    }
    function applyCompactProgress(i) {
      switch (i.type) {
        case "hooks_start":
          setColors("claudeBlue_FOR_SYSTEM_SPINNER", "claudeBlueShimmer_FOR_SYSTEM_SPINNER"), setMessage(i.hookType === "pre_compact" ? "Running PreCompact hooks\u2026" : i.hookType === "post_compact" ? "Running PostCompact hooks\u2026" : jQr);
          return;
        case "compact_start":
          setMessage("Compacting conversation"), setCompacting(!0, i.hintText ?? null);
          return;
        case "compact_end":
          P();
          return;
      }
    }
    return {
      setMode: setMode,
      setMessage: setMessage,
      setWaitLine: setWaitLine,
      setColors: setColors,
      setTurnEffort: setTurnEffort,
      setSentEffort: setSentEffort,
      setRetryStatus: setRetryStatus,
      setCompacting: setCompacting,
      setResponseHeld: setResponseHeld,
      resetOverrides: resetOverrides,
      applyCompactProgress: applyCompactProgress
    };
  }
  let main = {
    setMode: (n, d) => bind(st()).setMode(n, d),
    setMessage: (n, d) => bind(st()).setMessage(n, d),
    setWaitLine: n => bind(st()).setWaitLine(n),
    setColors: (n, d) => bind(st()).setColors(n, d),
    setTurnEffort: (n, d) => bind(st()).setTurnEffort(n, d),
    setSentEffort: n => bind(st()).setSentEffort(n),
    setRetryStatus: n => bind(st()).setRetryStatus(n),
    setCompacting: (n, d) => bind(st()).setCompacting(n, d),
    setResponseHeld: n => bind(st()).setResponseHeld(n),
    resetOverrides: () => bind(st()).resetOverrides(),
    applyCompactProgress: n => bind(st()).applyCompactProgress(n)
  };
  return {
    getSnapshot: r.getSnapshot,
    getState: r.getState,
    setState: r.setState,
    subscribe: r.subscribe,
    get(n) {
      return r.getState()[n ?? st()] ?? T;
    },
    bind: bind,
    main: main,
    evict(n) {
      r.setState(d => {
        if (!(n in d)) return d;
        let {
          [n]: _,
          ...m
        } = d;
        return m;
      });
    },
    applyEvent(n) {
      switch (n.kind) {
        case "agent-mode":
          bind(n.agentId).setMode(n.mode, n.outputLimitRecovery);
          return;
        case "agent-retry-status":
          bind(n.agentId).setRetryStatus(n.retryStatus);
          return;
        case "agent-turn-effort":
          bind(n.agentId).setTurnEffort(n.turnEffort, n.turnModel);
          return;
        case "main-message":
          main.setMessage(n.message);
          return;
        case "main-colors":
          main.setColors(n.color, n.shimmerColor);
          return;
        case "main-response-held":
          main.setResponseHeld(n.held);
          return;
      }
    }
  };
}
var Qvt = Jt(null);
function ske() {
  let t = ve(Qvt);
  if (!t) throw ReferenceError("useSpinnerStore cannot be called outside of a SpinnerStoreContext provider (mounted by <AppStateProvider />)");
  return t;
}
function qGt(t) {
  let r = t ?? st();
  return Ne(ske(), o => o[r] ?? T);
}
function GHo(t) {
  return Ne(ske(), r => (r[t] ?? T).thinkingStartedAt);
}
function VHo(t) {
  return Ne(ske(), r => (r[t] ?? T).retryStatus);
}
function E5n(t) {
  let r = st();
  return Ne(ske(), o => (o[r] ?? T)[t]);
}
export { VGt, KGt, SYe, thn, gK, nhn, v5n, zHo, Qvt, ske, qGt, GHo, VHo, E5n };