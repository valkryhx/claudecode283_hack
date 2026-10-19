// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { e } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { qt, Ee, y, Dt, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { _s } from "B:/~BUN/root/chunk-b4xxgr0r.js";
B();
function h() {
  let store = _s(v);
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
var i = qt(null);
function Unr(o) {
  let s = w(3),
    {
      children: children
    } = o,
    [value] = y(h),
    c;
  if (s[0] !== children || s[1] !== value) c = e(i.Provider, {
    value: value,
    children: children
  }), s[0] = children, s[1] = value, s[2] = c;else c = s[2];
  return c;
}
function r() {
  let o = Ee(i);
  if (!o) {
    throw Error("useVoiceState must be used within a VoiceProvider");
  }
  return o;
}
function WVe() {
  return r().store;
}
function T4r() {
  return r().levelSmoother;
}
function oh(o) {
  let n = w(3),
    t = WVe(),
    s;
  if (n[0] !== o || n[1] !== t) s = () => o(t.getState()), n[0] = o, n[1] = t, n[2] = s;else s = n[2];
  let c = s;
  return Dt(t.subscribe, c, c);
}
function Gwn() {
  return WVe().setState;
}
function xLe() {
  return WVe().getState;
}
export { Unr, WVe, T4r, oh, Gwn, xLe };