// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  tc
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  Ct,
  wn,
  Ue,
  St
} from "B:/~BUN/root/chunk-bt3h0syz.js";
import {
  ht
} from "B:/~BUN/root/chunk-zmeajjrz.js";
import {
  at
} from "B:/~BUN/root/chunk-2h7x7bdj.js";
var r = null,
  s = null,
  n = null,
  e = {
    name: import.meta.require("B:/~BUN/root/chunk-abkff2j2.js").ARTIFACT_TOOL_NAME,
    names: import.meta.require("B:/~BUN/root/chunk-abkff2j2.js"),
    ui: import.meta.require("B:/~BUN/root/chunk-s3r6k3y6.js")
  },
  M = [ht, Ue, Ct, wn, at, tc, St, ...r ? [r.name] : [], ...s ? [s.name] : [], ...n ? [n.name] : [], ...e ? [e.name, e.names.ARTIFACT_COMMENTS_TOOL_NAME, e.names.ARTIFACT_DATA_TOOL_NAME, e.names.ARTIFACT_CHECK_TOOL_NAME] : []],
  T = {
    get [ht]() {
      return import.meta.require("B:/~BUN/root/chunk-512mpxf3.js").renderToolUseMessage
    },
    get [Ue]() {
      return import.meta.require("B:/~BUN/root/chunk-xpjf75jy.js").renderToolUseMessage
    },
    get [Ct]() {
      return import.meta.require("B:/~BUN/root/chunk-kqbmj9jc.js").renderToolUseMessage
    },
    get [wn]() {
      return import.meta.require("B:/~BUN/root/chunk-jtrhzw9d.js").renderToolUseMessage
    },
    get [at]() {
      return import.meta.require("B:/~BUN/root/chunk-9kq19g59.js").renderToolUseMessage
    },
    get [tc]() {
      return import.meta.require("B:/~BUN/root/chunk-c41ecms0.js").renderToolUseMessage
    },
    get [St]() {
      return import.meta.require("B:/~BUN/root/chunk-1zfebc7t.js").renderToolUseMessage
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
      [e.name]: e.ui.renderToolUseMessage,
      [e.names.ARTIFACT_COMMENTS_TOOL_NAME]: e.ui.renderCommentsToolUseMessage,
      [e.names.ARTIFACT_DATA_TOOL_NAME]: e.ui.renderDataToolUseMessage,
      [e.names.ARTIFACT_CHECK_TOOL_NAME]: e.ui.renderCheckToolUseMessage
    }
  };

function Y1e(o, t, l) {
  if (o.renderToolUseMessage) return o.renderToolUseMessage(t, l);
  return SJe(o.name, t, l)
}

function SJe(o, t, l) {
  if (Object.hasOwn(T, o)) return T[o]?.(t, l);
  return null
}
export {
  Y1e,
  SJe
};
