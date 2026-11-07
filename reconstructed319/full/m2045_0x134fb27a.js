// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  ft
} from "B:/~BUN/root/chunk-2x2z0t2k.js";
import {
  dt,
  Yt,
  Me
} from "B:/~BUN/root/chunk-9kvvd0hy.js";
import {
  gi
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  ze
} from "B:/~BUN/root/chunk-xwzn0yxv.js";
import {
  kt
} from "B:/~BUN/root/chunk-86hj8bna.js";
var r = null,
  s = null,
  n = null,
  e = {
    name: import.meta.require("B:/~BUN/root/chunk-6xz7p8gr.js").ARTIFACT_TOOL_NAME,
    names: import.meta.require("B:/~BUN/root/chunk-6xz7p8gr.js"),
    ui: import.meta.require("B:/~BUN/root/chunk-m5vj3wdm.js")
  },
  M = [ft, Me, dt, Yt, ze, gi, kt, ...r ? [r.name] : [], ...s ? [s.name] : [], ...n ? [n.name] : [], ...e ? [e.name, e.names.ARTIFACT_COMMENTS_TOOL_NAME, e.names.ARTIFACT_DATA_TOOL_NAME, e.names.ARTIFACT_CHECK_TOOL_NAME] : []],
  T = {
    get [ft]() {
      return import.meta.require("B:/~BUN/root/chunk-fqwwmykv.js").renderToolUseMessage
    },
    get [Me]() {
      return import.meta.require("B:/~BUN/root/chunk-nk3bk9df.js").renderToolUseMessage
    },
    get [dt]() {
      return import.meta.require("B:/~BUN/root/chunk-bwzhv2kb.js").renderToolUseMessage
    },
    get [Yt]() {
      return import.meta.require("B:/~BUN/root/chunk-1d9n25xa.js").renderToolUseMessage
    },
    get [ze]() {
      return import.meta.require("B:/~BUN/root/chunk-es9w1q02.js").renderToolUseMessage
    },
    get [gi]() {
      return import.meta.require("B:/~BUN/root/chunk-qv6mr3gv.js").renderToolUseMessage
    },
    get [kt]() {
      return import.meta.require("B:/~BUN/root/chunk-eahtdmna.js").renderToolUseMessage
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

function Tot(o, t, l) {
  if (o.renderToolUseMessage) return o.renderToolUseMessage(t, l);
  return Cot(o.name, t, l)
}

function Cot(o, t, l) {
  if (Object.hasOwn(T, o)) return T[o]?.(t, l);
  return null
}
export {
  Tot,
  Cot
};
