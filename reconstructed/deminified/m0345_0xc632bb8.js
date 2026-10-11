// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { si } from "B:/~BUN/root/chunk-yv67t8hr.js";
function b(t) {
  if (t === null || typeof t !== "object") return null;
  return t = C && t[C] || t["@@iterator"], typeof t === "function" ? t : null;
}
function c(t, e, n) {
  this.props = t, this.context = e, this.refs = h, this.updater = n || d;
}
function H() {}
function v(t, e, n) {
  this.props = t, this.context = e, this.refs = h, this.updater = n || d;
}
function y() {}
function O(type, key, props) {
  var ref = props.ref;
  return {
    $$typeof: $$typeof,
    type: type,
    key: key,
    ref: ref !== void 0 ? ref : null,
    props: props
  };
}
function z(t, e) {
  return O(t.type, e, t.props);
}
function m(t) {
  return typeof t === "object" && t !== null && t.$$typeof === $$typeof;
}
function G(t) {
  var e = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + t.replace(/[=:]/g, function (n) {
    return e[n];
  });
}
function E(t, e) {
  return typeof t === "object" && t !== null && t.key != null ? G("" + t.key) : e.toString(36);
}
function K(t) {
  switch (t.status) {
    case "fulfilled":
      return t.value;
    case "rejected":
      throw t.reason;
    default:
      switch (typeof t.status === "string" ? t.then(y, y) : (t.status = "pending", t.then(function (e) {
        t.status === "pending" && (t.status = "fulfilled", t.value = e);
      }, function (e) {
        t.status === "pending" && (t.status = "rejected", t.reason = e);
      })), t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw t.reason;
      }
  }
  throw t;
}
function p(t, e, n, r, o) {
  var f = typeof t;
  if (f === "undefined" || f === "boolean") t = null;
  var u = !1;
  if (t === null) u = !0;else switch (f) {
    case "bigint":
    case "string":
    case "number":
      u = !0;
      break;
    case "object":
      switch (t.$$typeof) {
        case $$typeof:
        case j:
          u = !0;
          break;
        case U:
          return u = t._init, p(u(t._payload), e, n, r, o);
      }
  }
  if (u) return o = o(t), u = r === "" ? "." + E(t, 0) : r, A(o) ? (n = "", u != null && (n = u.replace(S, "$&/") + "/"), p(o, e, n, "", function (P) {
    return P;
  })) : o != null && (m(o) && (o = z(o, n + (o.key == null || t && t.key === o.key ? "" : ("" + o.key).replace(S, "$&/") + "/") + u)), e.push(o)), 1;
  u = 0;
  var _ = r === "" ? "." : r + ":";
  if (A(t)) for (var i = 0; i < t.length; i++) r = t[i], f = _ + E(r, i), u += p(r, e, n, f, o);else if (i = b(t), typeof i === "function") for (t = i.call(t), i = 0; !(r = t.next()).done;) r = r.value, f = _ + E(r, i++), u += p(r, e, n, f, o);else if (f === "object") {
    if (typeof t.then === "function") return p(K(t), e, n, r, o);
    throw e = String(t), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
  }
  return u;
}
function map(t, e, n) {
  if (t == null) return t;
  var r = [],
    o = 0;
  return p(t, r, "", "", function (f) {
    return e.call(n, f, o++);
  }), r;
}
var $$typeof,
  j,
  Y,
  $$typeof_3,
  $$typeof_2,
  L,
  $$typeof_4,
  U,
  C,
  d,
  D,
  h,
  x,
  A,
  s,
  q,
  S,
  w,
  B,
  Qg,
  NEr,
  sl,
  HEr,
  Sr,
  QPt,
  Vt = function (t) {
    return t = {
      $$typeof: $$typeof_2,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, t.Provider = t, t.Consumer = {
      $$typeof: $$typeof_3,
      _context: t
    }, t;
  },
  ad = function (t, e, n) {
    var r,
      o = {},
      f = null;
    if (e != null) for (r in e.key !== void 0 && (f = "" + e.key), e) q.call(e, r) && r !== "key" && r !== "__self" && r !== "__source" && (o[r] = e[r]);
    var u = arguments.length - 2;
    if (u === 1) o.children = n;else if (1 < u) {
      for (var _ = Array(u), i = 0; i < u; i++) _[i] = arguments[i + 2];
      o.children = _;
    }
    if (t && t.defaultProps) for (r in u = t.defaultProps, u) o[r] === void 0 && (o[r] = u[r]);
    return O(t, f, o);
  },
  FEr = function () {
    return {
      current: null
    };
  },
  Du,
  Gp = function (type_2, e) {
    return {
      $$typeof: $$typeof_4,
      type: type_2,
      compare: e === void 0 ? null : e
    };
  },
  V$n = function (t) {
    var T_2 = s.T,
      n = {};
    s.T = n;
    try {
      var r = t(),
        S_2 = s.S;
      S_2 !== null && S_2(n, r), typeof r === "object" && r !== null && typeof r.then === "function" && r.then(y, w);
    } catch (error) {
      w(error);
    } finally {
      T_2 !== null && n.types !== null && (T_2.types = n.types), s.T = T_2;
    }
  },
  mr = function (t) {
    return s.H.use(t);
  },
  se = function (t, e) {
    return s.H.useCallback(t, e);
  },
  Pe = function (t) {
    return s.H.useContext(t);
  },
  f9 = function (t, e) {
    return s.H.useDeferredValue(t, e);
  },
  R = function (t, e) {
    return s.H.useEffect(t, e);
  },
  Gr = function (t) {
    return s.H.useEffectEvent(t);
  },
  $Er = function () {
    return s.H.useId();
  },
  aae = function (t, e, n) {
    return s.H.useImperativeHandle(t, e, n);
  },
  Wke = function (t, e) {
    return s.H.useInsertionEffect(t, e);
  },
  sn = function (t, e) {
    return s.H.useLayoutEffect(t, e);
  },
  X = function (t, e) {
    return s.H.useMemo(t, e);
  },
  RE = function (t, e, n) {
    return s.H.useReducer(t, e, n);
  },
  T = function (t) {
    return s.H.useRef(t);
  },
  g = function (t) {
    return s.H.useState(t);
  },
  At = function (t, e, n) {
    return s.H.useSyncExternalStore(t, e, n);
  },
  q$n = function () {
    return s.H.useTransition();
  };
var N = si(() => {
  $$typeof = Symbol.for("react.transitional.element"), j = Symbol.for("react.portal"), Y = Symbol.for("react.fragment"), $$typeof_3 = Symbol.for("react.consumer"), $$typeof_2 = Symbol.for("react.context"), L = Symbol.for("react.suspense"), $$typeof_4 = Symbol.for("react.memo"), U = Symbol.for("react.lazy"), C = Symbol.iterator;
  d = {
    isMounted: function isMounted() {
      return !1;
    },
    enqueueForceUpdate: function enqueueForceUpdate() {},
    enqueueReplaceState: function enqueueReplaceState() {},
    enqueueSetState: function enqueueSetState() {}
  }, D = Object.assign, h = {};
  c.prototype.isReactComponent = {};
  c.prototype.setState = function setState(t, e) {
    if (typeof t !== "object" && typeof t !== "function" && t != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, t, e, "setState");
  };
  c.prototype.forceUpdate = function forceUpdate(t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate");
  };
  H.prototype = c.prototype;
  x = v.prototype = new H();
  x.constructor = v;
  D(x, c.prototype);
  x.isPureReactComponent = !0;
  A = Array.isArray;
  s = {
    H: null,
    A: null,
    T: null,
    S: null
  }, q = Object.prototype.hasOwnProperty;
  S = /\/+/g;
  w = typeof reportError === "function" ? reportError : function (error_2) {
    if (typeof window === "object" && typeof window.ErrorEvent === "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof error_2 === "object" && error_2 !== null && typeof error_2.message === "string" ? String(error_2.message) : String(error_2),
        error: error_2
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process === "object" && typeof process.emit === "function") {
      process.emit("uncaughtException", error_2);
      return;
    }
    console.error(error_2);
  }, B = {
    map: map,
    forEach: function forEach(t, e, n) {
      map(t, function () {
        e.apply(this, arguments);
      }, n);
    },
    count: function count(t) {
      var e = 0;
      return map(t, function () {
        e++;
      }), e;
    },
    toArray: function toArray(t) {
      return map(t, function (e) {
        return e;
      }) || [];
    },
    only: function only(t) {
      if (!m(t)) throw Error("React.Children.only expected to receive a single React element child.");
      return t;
    }
  };
  Qg = B, NEr = c, sl = Y, HEr = v, Sr = L, QPt = s, Du = m;
});
export { Qg, NEr, sl, HEr, Sr, QPt, Vt, ad, FEr, Du, Gp, V$n, mr, se, Pe, f9, R, Gr, $Er, aae, Wke, sn, X, RE, T, g, At, q$n, N };