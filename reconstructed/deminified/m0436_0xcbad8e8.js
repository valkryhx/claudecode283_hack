// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
var $$typeof = Symbol.for("react.transitional.element"),
  x = Symbol.for("react.fragment");
function k(type, t, props) {
  var key = null;
  if (props !== void 0 && (key = "" + props), t.key !== void 0 && (key = "" + t.key), "key" in t) {
    props = {};
    for (var E in t) E !== "key" && (props[E] = t[E]);
  } else props = t;
  return t = props.ref, {
    $$typeof: $$typeof,
    type: type,
    key: key,
    ref: t !== void 0 ? t : null,
    props: props
  };
}
var V = x,
  e = k,
  r = k;
export { V, e, r };