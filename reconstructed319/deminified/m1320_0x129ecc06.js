// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { H } from "B:/~BUN/root/chunk-game8aqv.js";
import { J } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { M } from "B:/~BUN/root/chunk-4qfwb3rf.js";
var sbn = M(function (A, F) {
  (function (p, m) {
    typeof A === "object" && typeof F < "u" ? m(A) : typeof define === "function" && define.amd ? define(["exports"], m) : (p = typeof globalThis < "u" ? globalThis : p || self, m((p.acorn = p.acorn || {}, p.acorn.walk = {})));
  })(A, function (p) {
    function m(e, r, t, n, o) {
      if (!t) t = a;
      (function f(u, s, c) {
        var l = c || u.type;
        if (y(t, l, u, s, f), r[l]) r[l](u, s);
      })(e, n, o);
    }
    function h(e, r, t, n, o) {
      var f = [];
      if (!t) t = a;
      (function u(s, c, l) {
        var v = l || s.type,
          P = s !== f[f.length - 1];
        if (P) f.push(s);
        if (y(t, v, s, c, u), r[v]) r[v](s, c || f, f);
        if (P) f.pop();
      })(e, n, o);
    }
    function g(e, r, t, n, o) {
      var f = t ? D(t, n || void 0) : n;
      (function u(s, c, l) {
        f[l || s.type](s, c, u);
      })(e, r, o);
    }
    function E(e) {
      if (typeof e === "string") return function (r) {
        return r === e;
      };else if (!e) return function () {
        return !0;
      };else return e;
    }
    var x = function (r, t) {
      this.node = r, this.state = t;
    };
    function b(e, r, t, n, o) {
      if (!t) t = a;
      var f;
      (function u(s, c, l) {
        var v = l || s.type;
        if (y(t, v, s, c, u), f !== s) r(s, c, v), f = s;
      })(e, n, o);
    }
    function w(e, r, t, n) {
      if (!t) t = a;
      var o = [],
        f;
      (function u(s, c, l) {
        var v = l || s.type,
          P = s !== o[o.length - 1];
        if (P) o.push(s);
        if (y(t, v, s, c, u), f !== s) r(s, c || o, o, v), f = s;
        if (P) o.pop();
      })(e, n);
    }
    function d(e, r, t, n, o, f) {
      if (!o) o = a;
      n = E(n);
      try {
        (function u(s, c, l) {
          var v = l || s.type;
          if ((r == null || s.start <= r) && (t == null || s.end >= t)) y(o, v, s, c, u);
          if ((r == null || s.start === r) && (t == null || s.end === t) && n(v, s)) throw new x(s, c);
        })(e, f);
      } catch (error) {
        if (error instanceof x) return error;
        throw error;
      }
    }
    function T(e, r, t, n, o) {
      if (t = E(t), !n) n = a;
      try {
        (function f(u, s, c) {
          var l = c || u.type;
          if (u.start > r || u.end < r) return;
          if (y(n, l, u, s, f), t(l, u)) throw new x(u, s);
        })(e, o);
      } catch (error) {
        if (error instanceof x) return error;
        throw error;
      }
    }
    function _(e, r, t, n, o) {
      if (t = E(t), !n) n = a;
      try {
        (function f(u, s, c) {
          if (u.end < r) return;
          var l = c || u.type;
          if (u.start >= r && t(l, u)) throw new x(u, s);
          y(n, l, u, s, f);
        })(e, o);
      } catch (error) {
        if (error instanceof x) return error;
        throw error;
      }
    }
    function N(e, r, t, n, o) {
      if (t = E(t), !n) n = a;
      var f;
      return function u(s, c, l) {
        if (s.start > r) return;
        var v = l || s.type;
        if (s.end <= r && (!f || f.node.end < s.end) && t(v, s)) f = new x(s, c);
        y(n, v, s, c, u);
      }(e, o), f;
    }
    function D(e, r) {
      var t = Object.create(r || a);
      for (var n in e) t[n] = e[n];
      return t;
    }
    function C(e, r, t) {
      t(e, r);
    }
    function S(e, r, t) {}
    function y(e, r, t, n, o) {
      if (e[r] == null) throw Error("No walker function defined for node type " + r);
      e[r](t, n, o);
    }
    var a = {};
    a.Program = a.BlockStatement = a.StaticBlock = function StaticBlock(e, r, t) {
      for (var n = 0, o = e.body; n < o.length; n += 1) {
        var f = o[n];
        t(f, r, "Statement");
      }
    }, a.Statement = C, a.EmptyStatement = S, a.ExpressionStatement = a.ParenthesizedExpression = a.ChainExpression = function ChainExpression(e, r, t) {
      return t(e.expression, r, "Expression");
    }, a.IfStatement = function IfStatement(e, r, t) {
      if (t(e.test, r, "Expression"), t(e.consequent, r, "Statement"), e.alternate) t(e.alternate, r, "Statement");
    }, a.LabeledStatement = function LabeledStatement(e, r, t) {
      return t(e.body, r, "Statement");
    }, a.BreakStatement = a.ContinueStatement = S, a.WithStatement = function WithStatement(e, r, t) {
      t(e.object, r, "Expression"), t(e.body, r, "Statement");
    }, a.SwitchStatement = function SwitchStatement(e, r, t) {
      t(e.discriminant, r, "Expression");
      for (var n = 0, cases = e.cases; n < cases.length; n += 1) {
        var f = cases[n];
        t(f, r);
      }
    }, a.SwitchCase = function SwitchCase(e, r, t) {
      if (e.test) t(e.test, r, "Expression");
      for (var n = 0, consequent = e.consequent; n < consequent.length; n += 1) {
        var f = consequent[n];
        t(f, r, "Statement");
      }
    }, a.ReturnStatement = a.YieldExpression = a.AwaitExpression = function AwaitExpression(e, r, t) {
      if (e.argument) t(e.argument, r, "Expression");
    }, a.ThrowStatement = a.SpreadElement = function SpreadElement(e, r, t) {
      return t(e.argument, r, "Expression");
    }, a.TryStatement = function TryStatement(e, r, t) {
      if (t(e.block, r, "Statement"), e.handler) t(e.handler, r);
      if (e.finalizer) t(e.finalizer, r, "Statement");
    }, a.CatchClause = function CatchClause(e, r, t) {
      if (e.param) t(e.param, r, "Pattern");
      t(e.body, r, "Statement");
    }, a.WhileStatement = a.DoWhileStatement = function DoWhileStatement(e, r, t) {
      t(e.test, r, "Expression"), t(e.body, r, "Statement");
    }, a.ForStatement = function ForStatement(e, r, t) {
      if (e.init) t(e.init, r, "ForInit");
      if (e.test) t(e.test, r, "Expression");
      if (e.update) t(e.update, r, "Expression");
      t(e.body, r, "Statement");
    }, a.ForInStatement = a.ForOfStatement = function ForOfStatement(e, r, t) {
      t(e.left, r, "ForInit"), t(e.right, r, "Expression"), t(e.body, r, "Statement");
    }, a.ForInit = function ForInit(e, r, t) {
      if (e.type === "VariableDeclaration") t(e, r);else t(e, r, "Expression");
    }, a.DebuggerStatement = S, a.FunctionDeclaration = function FunctionDeclaration(e, r, t) {
      return t(e, r, "Function");
    }, a.VariableDeclaration = function VariableDeclaration(e, r, t) {
      for (var n = 0, declarations = e.declarations; n < declarations.length; n += 1) {
        var f = declarations[n];
        t(f, r);
      }
    }, a.VariableDeclarator = function VariableDeclarator(e, r, t) {
      if (t(e.id, r, "Pattern"), e.init) t(e.init, r, "Expression");
    }, a.Function = function Function(e, r, t) {
      if (e.id) t(e.id, r, "Pattern");
      for (var n = 0, params = e.params; n < params.length; n += 1) {
        var f = params[n];
        t(f, r, "Pattern");
      }
      t(e.body, r, e.expression ? "Expression" : "Statement");
    }, a.Pattern = function Pattern(e, r, t) {
      if (e.type === "Identifier") t(e, r, "VariablePattern");else if (e.type === "MemberExpression") t(e, r, "MemberPattern");else t(e, r);
    }, a.VariablePattern = S, a.MemberPattern = C, a.RestElement = function RestElement(e, r, t) {
      return t(e.argument, r, "Pattern");
    }, a.ArrayPattern = function ArrayPattern(e, r, t) {
      for (var n = 0, elements = e.elements; n < elements.length; n += 1) {
        var f = elements[n];
        if (f) t(f, r, "Pattern");
      }
    }, a.ObjectPattern = function ObjectPattern(e, r, t) {
      for (var n = 0, properties = e.properties; n < properties.length; n += 1) {
        var f = properties[n];
        if (f.type === "Property") {
          if (f.computed) t(f.key, r, "Expression");
          t(f.value, r, "Pattern");
        } else if (f.type === "RestElement") t(f.argument, r, "Pattern");
      }
    }, a.Expression = C, a.ThisExpression = a.Super = a.MetaProperty = S, a.ArrayExpression = function ArrayExpression(e, r, t) {
      for (var n = 0, elements_2 = e.elements; n < elements_2.length; n += 1) {
        var f = elements_2[n];
        if (f) t(f, r, "Expression");
      }
    }, a.ObjectExpression = function ObjectExpression(e, r, t) {
      for (var n = 0, properties_2 = e.properties; n < properties_2.length; n += 1) {
        var f = properties_2[n];
        t(f, r);
      }
    }, a.FunctionExpression = a.ArrowFunctionExpression = a.FunctionDeclaration, a.SequenceExpression = function SequenceExpression(e, r, t) {
      for (var n = 0, expressions = e.expressions; n < expressions.length; n += 1) {
        var f = expressions[n];
        t(f, r, "Expression");
      }
    }, a.TemplateLiteral = function TemplateLiteral(e, r, t) {
      for (var n = 0, quasis = e.quasis; n < quasis.length; n += 1) {
        var f = quasis[n];
        t(f, r);
      }
      for (var u = 0, expressions_2 = e.expressions; u < expressions_2.length; u += 1) {
        var c = expressions_2[u];
        t(c, r, "Expression");
      }
    }, a.TemplateElement = S, a.UnaryExpression = a.UpdateExpression = function UpdateExpression(e, r, t) {
      t(e.argument, r, "Expression");
    }, a.BinaryExpression = a.LogicalExpression = function LogicalExpression(e, r, t) {
      t(e.left, r, "Expression"), t(e.right, r, "Expression");
    }, a.AssignmentExpression = a.AssignmentPattern = function AssignmentPattern(e, r, t) {
      t(e.left, r, "Pattern"), t(e.right, r, "Expression");
    }, a.ConditionalExpression = function ConditionalExpression(e, r, t) {
      t(e.test, r, "Expression"), t(e.consequent, r, "Expression"), t(e.alternate, r, "Expression");
    }, a.NewExpression = a.CallExpression = function CallExpression(e, r, t) {
      if (t(e.callee, r, "Expression"), e.arguments) for (var n = 0, o = e.arguments; n < o.length; n += 1) {
        var f = o[n];
        t(f, r, "Expression");
      }
    }, a.MemberExpression = function MemberExpression(e, r, t) {
      if (t(e.object, r, "Expression"), e.computed) t(e.property, r, "Expression");
    }, a.ExportNamedDeclaration = a.ExportDefaultDeclaration = function ExportDefaultDeclaration(e, r, t) {
      if (e.declaration) t(e.declaration, r, e.type === "ExportNamedDeclaration" || e.declaration.id ? "Statement" : "Expression");
      if (e.source) t(e.source, r, "Expression");
      if (e.attributes) for (var n = 0, attributes = e.attributes; n < attributes.length; n += 1) {
        var f = attributes[n];
        t(f, r);
      }
    }, a.ExportAllDeclaration = function ExportAllDeclaration(e, r, t) {
      if (e.exported) t(e.exported, r);
      if (t(e.source, r, "Expression"), e.attributes) for (var n = 0, attributes_2 = e.attributes; n < attributes_2.length; n += 1) {
        var f = attributes_2[n];
        t(f, r);
      }
    }, a.ImportAttribute = function ImportAttribute(e, r, t) {
      t(e.value, r, "Expression");
    }, a.ImportDeclaration = function ImportDeclaration(e, r, t) {
      for (var n = 0, specifiers = e.specifiers; n < specifiers.length; n += 1) {
        var f = specifiers[n];
        t(f, r);
      }
      if (t(e.source, r, "Expression"), e.attributes) for (var u = 0, attributes_3 = e.attributes; u < attributes_3.length; u += 1) {
        var c = attributes_3[u];
        t(c, r);
      }
    }, a.ImportExpression = function ImportExpression(e, r, t) {
      if (t(e.source, r, "Expression"), e.options) t(e.options, r, "Expression");
    }, a.ImportSpecifier = a.ImportDefaultSpecifier = a.ImportNamespaceSpecifier = a.Identifier = a.PrivateIdentifier = a.Literal = S, a.TaggedTemplateExpression = function TaggedTemplateExpression(e, r, t) {
      t(e.tag, r, "Expression"), t(e.quasi, r, "Expression");
    }, a.ClassDeclaration = a.ClassExpression = function ClassExpression(e, r, t) {
      return t(e, r, "Class");
    }, a.Class = function Class(e, r, t) {
      if (e.id) t(e.id, r, "Pattern");
      if (e.superClass) t(e.superClass, r, "Expression");
      t(e.body, r);
    }, a.ClassBody = function ClassBody(e, r, t) {
      for (var n = 0, o = e.body; n < o.length; n += 1) {
        var f = o[n];
        t(f, r);
      }
    }, a.MethodDefinition = a.PropertyDefinition = a.Property = function Property(e, r, t) {
      if (e.computed) t(e.key, r, "Expression");
      if (e.value) t(e.value, r, "Expression");
    }, p.ancestor = h, p.base = a, p.findNodeAfter = _, p.findNodeAround = T, p.findNodeAt = d, p.findNodeBefore = N, p.full = b, p.fullAncestor = w, p.make = D, p.recursive = g, p.simple = m;
  });
});
var k = 5000,
  R = 270000;
class I {
  now;
  entries = new Map();
  constructor(p = Date.now) {
    this.now = p;
  }
  async enter(p, m) {
    let h = this.now();
    for (let [w, d] of this.entries) if (d.state === "warm" && d.until <= h) this.entries.delete(w);
    let g = this.entries.get(p),
      E,
      waitedMs = 0;
    if (g === void 0) E = L(), this.entries.set(p, E);else if (g.state === "warming" && m.capMs > 0) {
      let w = this.now();
      await O(g.ready, m.capMs, m.signal), waitedMs = Math.max(0, this.now() - w);
    }
    let b = !1;
    return {
      leader: E !== void 0,
      waitedMs: waitedMs,
      responded: () => {
        b = !0, this.markWarm(p);
      },
      done: () => {
        if (b || E === void 0) return;
        if (this.entries.get(p) === E && E.state === "warming") this.entries.delete(p), E.release();
      }
    };
  }
  stateOf(p) {
    let m = this.entries.get(p);
    if (m === void 0) return "cold";
    if (m.state === "warm") return m.until > this.now() ? "warm" : "cold";
    return "warming";
  }
  clear() {
    for (let p of this.entries.values()) if (p.state === "warming") p.release();
    this.entries.clear();
  }
  markWarm(p) {
    let m = this.entries.get(p);
    if (this.entries.set(p, {
      state: "warm",
      until: this.now() + R
    }), m?.state === "warming") m.release();
  }
}
function L() {
  let release;
  return {
    state: "warming",
    ready: new Promise(h => {
      release = h;
    }),
    release: release
  };
}
function O(p, m, h) {
  if (h?.aborted) return Promise.resolve();
  let abortController = new AbortController(),
    E = () => abortController.abort();
  return h?.addEventListener("abort", E, {
    once: !0
  }), Promise.race([p, J(m, abortController.signal)]).finally(() => {
    abortController.abort(), h?.removeEventListener("abort", E);
  });
}
var B = new W(() => new I());
function MQn() {
  return B.of(H().host);
}
function G(p) {
  return p ?? k;
}
function DQn() {
  return i.DISABLE_PROMPT_CACHING ? 0 : G(i.CLAUDE_CODE_WORKFLOW_PREFIX_STAGGER_MS);
}
export { sbn, MQn, DQn };