// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
class ParseError extends Error {
  constructor(o, i) {
    super(o), this.name = "ParseError", this.type = i.type, this.field = i.field, this.value = i.value, this.line = i.line;
  }
}
var L = 10,
  U = 13,
  v = 32;
function O(o) {}
function sOn(o) {
  if (typeof o == "function") throw TypeError("`callbacks` must be an object, got a function instead. Did you mean `{onEvent: fn}`?");
  let {
      onEvent = O,
      onError = O,
      onRetry = O,
      onComment: onComment
    } = o,
    s = [],
    g = !0,
    id,
    data = "",
    f = 0,
    event;
  function feed(t) {
    if (g && (g = !1, t.charCodeAt(0) === 239 && t.charCodeAt(1) === 187 && t.charCodeAt(2) === 191 && (t = t.slice(3))), s.length === 0) {
      let d = b(t);
      d !== "" && s.push(d);
      return;
    }
    if (t.indexOf(`
`) === -1 && t.indexOf("\r") === -1) {
      s.push(t);
      return;
    }
    s.push(t);
    let e = s.join("");
    s.length = 0;
    let r = b(e);
    r !== "" && s.push(r);
  }
  function b(t) {
    let e = 0;
    if (t.indexOf("\r") === -1) {
      let r = t.indexOf(`
`, e);
      for (; r !== -1;) {
        if (e === r) {
          f > 0 && onEvent({
            id: id,
            event: event,
            data: data
          }), id = void 0, data = "", f = 0, event = void 0, e = r + 1, r = t.indexOf(`
`, e);
          continue;
        }
        let d = t.charCodeAt(e);
        if (P(t, e, d)) {
          let n = t.charCodeAt(e + 5) === v ? e + 6 : e + 5,
            data_2 = t.slice(n, r);
          if (f === 0 && t.charCodeAt(r + 1) === L) {
            onEvent({
              id: id,
              event: event,
              data: data_2
            }), id = void 0, data = "", event = void 0, e = r + 2, r = t.indexOf(`
`, e);
            continue;
          }
          data = f === 0 ? data_2 : `${data}
${data_2}`, f++;
        } else S(t, e, d) ? event = t.slice(t.charCodeAt(e + 6) === v ? e + 7 : e + 6, r) || void 0 : y(t, e, r);
        e = r + 1, r = t.indexOf(`
`, e);
      }
      return t.slice(e);
    }
    for (; e < t.length;) {
      let r = t.indexOf("\r", e),
        d = t.indexOf(`
`, e),
        n = -1;
      if (r !== -1 && d !== -1 ? n = r < d ? r : d : r !== -1 ? r === t.length - 1 ? n = -1 : n = r : d !== -1 && (n = d), n === -1) break;
      y(t, e, n), e = n + 1, t.charCodeAt(e - 1) === U && t.charCodeAt(e) === L && e++;
    }
    return t.slice(e);
  }
  function y(t, e, r) {
    if (e === r) {
      j();
      return;
    }
    let d = t.charCodeAt(e);
    if (P(t, e, d)) {
      let x = t.charCodeAt(e + 5) === v ? e + 6 : e + 5,
        I = t.slice(x, r);
      data = f === 0 ? I : `${data}
${I}`, f++;
      return;
    }
    if (S(t, e, d)) {
      event = t.slice(t.charCodeAt(e + 6) === v ? e + 7 : e + 6, r) || void 0;
      return;
    }
    if (d === 105 && t.charCodeAt(e + 1) === 100 && t.charCodeAt(e + 2) === 58) {
      let x = t.slice(t.charCodeAt(e + 3) === v ? e + 4 : e + 3, r);
      id = x.includes("\x00") ? void 0 : x;
      return;
    }
    if (d === 58) {
      if (onComment) {
        let x = t.slice(e, r);
        onComment(x.slice(t.charCodeAt(e + 1) === v ? 2 : 1));
      }
      return;
    }
    let n = t.slice(e, r),
      A = n.indexOf(":");
    if (A === -1) {
      w(n, "", n);
      return;
    }
    let D = n.slice(0, A),
      R = n.charCodeAt(A + 1) === v ? 2 : 1,
      q = n.slice(A + R);
    w(D, q, n);
  }
  function w(field, value, line) {
    switch (field) {
      case "event":
        event = value || void 0;
        break;
      case "data":
        data = f === 0 ? value : `${data}
${value}`, f++;
        break;
      case "id":
        id = value.includes("\x00") ? void 0 : value;
        break;
      case "retry":
        /^\d+$/.test(value) ? onRetry(parseInt(value, 10)) : onError(new ParseError(`Invalid \`retry\` value: "${value}"`, {
          type: "invalid-retry",
          value: value,
          line: line
        }));
        break;
      default:
        onError(new ParseError(`Unknown field "${field.length > 20 ? `${field.slice(0, 20)}\u2026` : field}"`, {
          type: "unknown-field",
          field: field,
          value: value,
          line: line
        }));
        break;
    }
  }
  function j() {
    f > 0 && onEvent({
      id: id,
      event: event,
      data: data
    }), id = void 0, data = "", f = 0, event = void 0;
  }
  function reset(t = {}) {
    if (t.consume && s.length > 0) {
      let e = s.join("");
      y(e, 0, e.length);
    }
    g = !0, id = void 0, data = "", f = 0, event = void 0, s.length = 0;
  }
  return {
    feed: feed,
    reset: reset
  };
}
function P(o, i, C) {
  return C === 100 && o.charCodeAt(i + 1) === 97 && o.charCodeAt(i + 2) === 116 && o.charCodeAt(i + 3) === 97 && o.charCodeAt(i + 4) === 58;
}
function S(o, i, C) {
  return C === 101 && o.charCodeAt(i + 1) === 118 && o.charCodeAt(i + 2) === 101 && o.charCodeAt(i + 3) === 110 && o.charCodeAt(i + 4) === 116 && o.charCodeAt(i + 5) === 58;
}
class tTt extends TransformStream {
  constructor({
    onError: onError_2,
    onRetry: onRetry_2,
    onComment: onComment_2
  } = {}) {
    let m;
    super({
      start(p) {
        m = sOn({
          onEvent: s => {
            p.enqueue(s);
          },
          onError(s) {
            onError_2 === "terminate" ? p.error(s) : typeof onError_2 == "function" && onError_2(s);
          },
          onRetry: onRetry_2,
          onComment: onComment_2
        });
      },
      transform(p) {
        m.feed(p);
      }
    });
  }
}
export { sOn, tTt };