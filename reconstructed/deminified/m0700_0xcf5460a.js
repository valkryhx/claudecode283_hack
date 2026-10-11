// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { e } from "B:/~BUN/root/chunk-qkvevvte.js";
import { Vt, Pe, g, At, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
import { Hs } from "B:/~BUN/root/chunk-aky7m4ay.js";
N();
function x() {
  let store = Hs(v);
  let levelSmoother = new l();
  return store.subscribe(() => {
    if (store.getState().voiceState !== "recording") levelSmoother.reset();
  }), {
    store: store,
    levelSmoother: levelSmoother
  };
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
    return this.#e = this.#e * t + o * (1 - t), this.#e;
  }
  reset() {
    this.#e = 0;
  }
}
var i = Vt(null);
function Pvn(o) {
  let s = w(3),
    {
      children: children
    } = o,
    [value] = g(x),
    c;
  if (s[0] !== children || s[1] !== value) c = e(i.Provider, {
    value: value,
    children: children
  }), s[0] = children, s[1] = value, s[2] = c;else c = s[2];
  return c;
}
function r() {
  let o = Pe(i);
  if (!o) {
    throw Error("useVoiceState must be used within a VoiceProvider");
  }
  return o;
}
function dIe() {
  return r().store;
}
function Der() {
  return r().levelSmoother;
}
function _g(o) {
  let n = w(3),
    t = dIe(),
    s;
  if (n[0] !== o || n[1] !== t) s = () => o(t.getState()), n[0] = o, n[1] = t, n[2] = s;else s = n[2];
  let c = s;
  return At(t.subscribe, c, c);
}
function rVt() {
  return dIe().setState;
}
function jbe() {
  return dIe().getState;
}
export { Pvn, dIe, Der, _g, rVt, jbe };