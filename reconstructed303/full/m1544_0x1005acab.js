// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  ht
} from "B:/~BUN/root/chunk-2fccb5hn.js";
import {
  Ji
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  dt,
  Kt,
  We,
  xt
} from "B:/~BUN/root/chunk-kad4nq7y.js";
import {
  Qe
} from "B:/~BUN/root/chunk-5k20pvvh.js";
var r = null,
  s = null,
  n = null,
  e = {
    name: import.meta.require("B:/~BUN/root/chunk-4h1ezzvc.js").ARTIFACT_TOOL_NAME,
    names: import.meta.require("B:/~BUN/root/chunk-4h1ezzvc.js"),
    ui: import.meta.require("B:/~BUN/root/chunk-hwy6aeht.js")
  },
  M = [ht, We, dt, Kt, Qe, Ji, xt, ...r ? [r.name] : [], ...s ? [s.name] : [], ...n ? [n.name] : [], ...e ? [e.name, e.names.ARTIFACT_COMMENTS_TOOL_NAME, e.names.ARTIFACT_DATA_TOOL_NAME, e.names.ARTIFACT_CHECK_TOOL_NAME] : []],
  T = {
    get [ht]() {
      return import.meta.require("B:/~BUN/root/chunk-qnsrns18.js").renderToolUseMessage
    },
    get [We]() {
      return import.meta.require("B:/~BUN/root/chunk-p1nr3mjg.js").renderToolUseMessage
    },
    get [dt]() {
      return import.meta.require("B:/~BUN/root/chunk-56cmy9ct.js").renderToolUseMessage
    },
    get [Kt]() {
      return import.meta.require("B:/~BUN/root/chunk-r6ghtwhh.js").renderToolUseMessage
    },
    get [Qe]() {
      return import.meta.require("B:/~BUN/root/chunk-9a6p3hdq.js").renderToolUseMessage
    },
    get [Ji]() {
      return import.meta.require("B:/~BUN/root/chunk-gnpx8cta.js").renderToolUseMessage
    },
    get [xt]() {
      return import.meta.require("B:/~BUN/root/chunk-ph5m7pax.js").renderToolUseMessage
    },
    ...r && {
      [r.name]: r.ui.renderToolUseMessage
    },
    ...s && {
      [s.name]: s.ui.renderToolUseMessage
    },
    ...n && {
      [n.name]: n.ui.renderToolUseMessage
    },
    ...e && {
      [e.name]: e.ui.renderToolUseLine,
      [e.names.ARTIFACT_COMMENTS_TOOL_NAME]: e.ui.renderCommentsToolUseMessage,
      [e.names.ARTIFACT_DATA_TOOL_NAME]: e.ui.renderDataToolUseMessage,
      [e.names.ARTIFACT_CHECK_TOOL_NAME]: e.ui.renderCheckToolUseMessage
    }
  };

function Mtt(o, t, l) {
  if (o.renderToolUseMessage) return o.renderToolUseMessage(t, l);
  return Vwt(o.name, t, l)
}

function Vwt(o, t, l) {
  if (Object.hasOwn(T, o)) return T[o]?.(t, l);
  return null
}
export {
  Mtt,
  Vwt
};
