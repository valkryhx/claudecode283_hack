// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Ts
} from "B:/~BUN/root/chunk-cz23t9h8.js";

function BB(e, o, t) {
  return import.meta.require("B:/~BUN/root/chunk-m4dhr7e5.js").mcpClientModule().invokeToolRaw(e.client, o, t)
}

function $ge(e, o, t) {
  return import.meta.require("B:/~BUN/root/chunk-m4dhr7e5.js").mcpClientModule().readResourceRaw(e.client, o, t)
}

function Win(e, o) {
  return import.meta.require("B:/~BUN/root/chunk-m4dhr7e5.js").mcpClientModule().listToolsRaw(e.client, o)
}

function jB(e, o, t) {
  import.meta.require("B:/~BUN/root/chunk-m4dhr7e5.js").mcpClientModule().onMcpNotification(e, o, t)
}

function Gee(e, o) {
  Ts(e.client).onclose = o
}

function XCo(e, o) {
  let t = Ts(e.client),
    n = t.onclose;
  t.onclose = () => {
    n?.(), o()
  }
}

function JCo(e, o) {
  return Ts(e.client).notification(o)
}

function QCo(e, o) {
  Ts(e.client)?.transport?.onmessage?.(o)
}
export {
  BB,
  $ge,
  Win,
  jB,
  Gee,
  XCo,
  JCo,
  QCo
};
