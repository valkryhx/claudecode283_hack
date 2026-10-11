// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { IZ, IZt } from "B:/~BUN/root/chunk-3jyp964r.js";
import { $u } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { L } from "B:/~BUN/root/chunk-z1enakv9.js";
function $Q(e) {
  return e.filter(item => !(item.type === "attachment" && item.attachment.type === "cowork_memory_context" && item.attachment.leg === "laptop") && !(item.type === "system" && "persist" in item && item.persist === !1));
}
function ikn(e, t) {
  let n = {
    keys: L(e.filter(item => item.trim() !== "").flatMap(u)).sort((itemA, itemB) => itemB.length - itemA.length),
    hits: 0
  };
  return {
    messages: n.keys.length === 0 ? t : t.flatMap(item => {
      if (item.role !== "user") return [item];
      let content = p(item.content, n);
      return content === void 0 ? [] : [{
        ...item,
        content: content
      }];
    }),
    keys: n.keys.length,
    hits: n.hits
  };
}
function u(content_2) {
  return (IZt({
    type: "cowork_memory_context",
    version: null,
    content: content_2,
    leg: "laptop"
  }).rendered ?? []).flatMap(({
    content: content_3
  }) => typeof content_3 === "string" ? [content_3] : content_3.flatMap(item => item.type === "text" ? [item.text] : [])).flatMap(item => [item.trim(), IZ(item).trim()]).filter(item => item !== "" && item !== $u);
}
function p(e, t) {
  if (typeof e === "string") {
    let r = i(e, t);
    return a(r) ? void 0 : r;
  }
  let n = e.flatMap(item => {
    if (l(item)) {
      let text = i(item.text, t);
      return a(text) ? [] : [{
        ...item,
        text: text
      }];
    }
    if (y(item) && item.content !== void 0) return [{
      ...item,
      content: p(item.content, t) ?? ""
    }];
    return [item];
  });
  return n.length === 0 ? void 0 : n;
}
function l(e) {
  return e.type === "text" && "text" in e && typeof e.text === "string";
}
function y(e) {
  return e.type === "tool_result";
}
function i(e, t) {
  let n = e;
  for (;;) {
    let r = t.keys.find(item => n.includes(item));
    if (r === void 0) return n;
    let s = n.split(r);
    t.hits += s.length - 1, n = s.join("");
  }
}
function a(e) {
  return IZ(e).trim() === "";
}
export { $Q, ikn };