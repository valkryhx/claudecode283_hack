// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  e
} from "B:/~BUN/root/chunk-t16eynda.js";
import {
  Jt,
  ve,
  y,
  At,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
import {
  Hs
} from "B:/~BUN/root/chunk-3xtmwvra.js";
j();

function x() {
  let u = Hs(v);
  let b = new l;
  return u.subscribe(() => {
    if (u.getState().voiceState !== "recording") b.reset()
  }), {
    store: u,
    levelSmoother: b
  }
}
var v = {
  voiceState: "idle",
  voiceError: null,
  voiceInterimTranscript: "",
  voiceAudioLevels: [],
  voiceWarmingUp: !1,
  awaitingVoiceSubmitDoubleTap: !1
};
class l {
  #e = 0;
  next(o, t) {
    return this.#e = this.#e * t + o * (1 - t), this.#e
  }
  reset() {
    this.#e = 0
  }
}
var i = Jt(null);

function Ezr(o) {
  let s = S(3),
    {
      children: t
    } = o,
    [n] = y(x),
    c;
  if (s[0] !== t || s[1] !== n) c = e(i.Provider, {
    value: n,
    children: t
  }), s[0] = t, s[1] = n, s[2] = c;
  else c = s[2];
  return c
}

function r() {
  let o = ve(i);
  if (!o) {
    throw Error("useVoiceState must be used within a VoiceProvider")
  }
  return o
}

function nst() {
  return r().store
}

function n$o() {
  return r().levelSmoother
}

function B_(o) {
  let n = S(3),
    t = nst(),
    s;
  if (n[0] !== o || n[1] !== t) s = () => o(t.getState()), n[0] = o, n[1] = t, n[2] = s;
  else s = n[2];
  let c = s;
  return At(t.subscribe, c, c)
}

function M5n() {
  return nst().setState
}

function CYe() {
  return nst().getState
}
export {
  Ezr,
  nst,
  n$o,
  B_,
  M5n,
  CYe
};
