/* ==========================================================================
 * m0869.Jor   [m0869_0xd12567a.js @ 4573]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var Jor = k(function (sn, Xn) {
  (function (e, r) {
    typeof sn === "object" && typeof Xn < "u" ? r(sn) : typeof define === "function" && define.amd ? define(["exports"], r) : (e = typeof globalThis < "u" ? globalThis : e || self, r((e.acorn = e.acorn || {}, e.acorn.walk = {})));
  })(sn, function (e) {
    function r(o, u, n, S, T) {
      if (!n) n = h;
      (function C(X, N, Z) {
        var se = Z || X.type;
        if (ie(n, se, X, N, C), u[se]) u[se](X, N);
      })(o, S, T);
    }
    function s(o, u, n, S, T) {
      var C = [];
      if (!n) n = h;
      (function X(N, Z, se) {
        var he = se || N.type,
          Se = N !== C[C.length - 1];
        if (Se) C.push(N);
        if (ie(n, he, N, Z, X), u[he]) u[he](N, Z || C, C);
        if (Se) C.pop();
      })(o, S, T);
    }
    function g(o, u, n, S, T) {
      var C = n ? z(n, S || void 0) : S;
      (function X(N, Z, se) {
        C[se || N.type](N, Z, X);
      })(o, u, T);
    }
    function f(o) {
      if (typeof o === "string") return function (u) {
        return u === o;
      };else if (!o) return function () {
        return !0;
      };else return o;
    }
    var w = function (u, n) {
      this.node = u, this.state = n;
    };
    function A(o, u, n, S, T) {
      if (!n) n = h;
      var C;
      (function X(N, Z, se) {
        var he = se || N.type;
        if (ie(n, he, N, Z, X), C !== N) u(N, Z, he), C = N;
      })(o, S, T);
    }
    function F(o, u, n, S) {
      if (!n) n = h;
      var T = [],
        C;
      (function X(N, Z, se) {
        var he = se || N.type,
          Se = N !== T[T.length - 1];
        if (Se) T.push(N);
        if (ie(n, he, N, Z, X), C !== N) u(N, Z || T, T, he), C = N;
        if (Se) T.pop();
      })(o, S);
    }
    function R(o, u, n, S, T, C) {
      if (!T) T = h;
      S = f(S);
      try {
        (function X(N, Z, se) {
          var he = se || N.type;
          if ((u == null || N.start <= u) && (n == null || N.end >= n)) ie(T, he, N, Z, X);
          if ((u == null || N.start === u) && (n == null || N.end === n) && S(he, N)) throw new w(N, Z);
        })(o, C);
      } catch (X) {
        if (X instanceof w) return X;
        throw X;
      }
    }
    function ce(o, u, n, S, T) {
      if (n = f(n), !S) S = h;
      try {
        (function C(X, N, Z) {
          var se = Z || X.type;
          if (X.start > u || X.end < u) return;
          if (ie(S, se, X, N, C), n(se, X)) throw new w(X, N);
        })(o, T);
      } catch (C) {
        if (C instanceof w) return C;
        throw C;
      }
    }
    function W(o, u, n, S, T) {
      if (n = f(n), !S) S = h;
      try {
        (function C(X, N, Z) {
          if (X.end < u) return;
          var se = Z || X.type;
          if (X.start >= u && n(se, X)) throw new w(X, N);
          ie(S, se, X, N, C);
        })(o, T);
      } catch (C) {
        if (C instanceof w) return C;
        throw C;
      }
    }
    function H(o, u, n, S, T) {
      if (n = f(n), !S) S = h;
      var C;
      return function X(N, Z, se) {
        if (N.start > u) return;
        var he = se || N.type;
        if (N.end <= u && (!C || C.node.end < N.end) && n(he, N)) C = new w(N, Z);
        ie(S, he, N, Z, X);
      }(o, T), C;
    }
    function z(o, u) {
      var n = Object.create(u || h);
      for (var S in o) n[S] = o[S];
      return n;
    }
    function ge(o, u, n) {
      n(o, u);
    }
    function _e(o, u, n) {}
    function ie(o, u, n, S, T) {
      if (o[u] == null) throw Error("No walker function defined for node type " + u);
      o[u](n, S, T);
    }
    var h = {};
    h.Program = h.BlockStatement = h.StaticBlock = function (o, u, n) {
      for (var S = 0, T = o.body; S < T.length; S += 1) {
        var C = T[S];
        n(C, u, "Statement");
      }
    }, h.Statement = ge, h.EmptyStatement = _e, h.ExpressionStatement = h.ParenthesizedExpression = h.ChainExpression = function (o, u, n) {
      return n(o.expression, u, "Expression");
    }, h.IfStatement = function (o, u, n) {
      if (n(o.test, u, "Expression"), n(o.consequent, u, "Statement"), o.alternate) n(o.alternate, u, "Statement");
    }, h.LabeledStatement = function (o, u, n) {
      return n(o.body, u, "Statement");
    }, h.BreakStatement = h.ContinueStatement = _e, h.WithStatement = function (o, u, n) {
      n(o.object, u, "Expression"), n(o.body, u, "Statement");
    }, h.SwitchStatement = function (o, u, n) {
      n(o.discriminant, u, "Expression");
      for (var S = 0, T = o.cases; S < T.length; S += 1) {
        var C = T[S];
        n(C, u);
      }
    }, h.SwitchCase = function (o, u, n) {
      if (o.test) n(o.test, u, "Expression");
      for (var S = 0, T = o.consequent; S < T.length; S += 1) {
        var C = T[S];
        n(C, u, "Statement");
      }
    }, h.ReturnStatement = h.YieldExpression = h.AwaitExpression = function (o, u, n) {
      if (o.argument) n(o.argument, u, "Expression");
    }, h.ThrowStatement = h.SpreadElement = function (o, u, n) {
      return n(o.argument, u, "Expression");
    }, h.TryStatement = function (o, u, n) {
      if (n(o.block, u, "Statement"), o.handler) n(o.handler, u);
      if (o.finalizer) n(o.finalizer, u, "Statement");
    }, h.CatchClause = function (o, u, n) {
      if (o.param) n(o.param, u, "Pattern");
      n(o.body, u, "Statement");
    }, h.WhileStatement = h.DoWhileStatement = function (o, u, n) {
      n(o.test, u, "Expression"), n(o.body, u, "Statement");
    }, h.ForStatement = function (o, u, n) {
      if (o.init) n(o.init, u, "ForInit");
      if (o.test) n(o.test, u, "Expression");
      if (o.update) n(o.update, u, "Expression");
      n(o.body, u, "Statement");
    }, h.ForInStatement = h.ForOfStatement = function (o, u, n) {
      n(o.left, u, "ForInit"), n(o.right, u, "Expression"), n(o.body, u, "Statement");
    }, h.ForInit = function (o, u, n) {
      if (o.type === "VariableDeclaration") n(o, u);else n(o, u, "Expression");
    }, h.DebuggerStatement = _e, h.FunctionDeclaration = function (o, u, n) {
      return n(o, u, "Function");
    }, h.VariableDeclaration = function (o, u, n) {
      for (var S = 0, T = o.declarations; S < T.length; S += 1) {
        var C = T[S];
        n(C, u);
      }
    }, h.VariableDeclarator = function (o, u, n) {
      if (n(o.id, u, "Pattern"), o.init) n(o.init, u, "Expression");
    }, h.Function = function (o, u, n) {
      if (o.id) n(o.id, u, "Pattern");
      for (var S = 0, T = o.params; S < T.length; S += 1) {
        var C = T[S];
        n(C, u, "Pattern");
      }
      n(o.body, u, o.expression ? "Expression" : "Statement");
    }, h.Pattern = function (o, u, n) {
      if (o.type === "Identifier") n(o, u, "VariablePattern");else if (o.type === "MemberExpression") n(o, u, "MemberPattern");else n(o, u);
    }, h.VariablePattern = _e, h.MemberPattern = ge, h.RestElement = function (o, u, n) {
      return n(o.argument, u, "Pattern");
    }, h.ArrayPattern = function (o, u, n) {
      for (var S = 0, T = o.elements; S < T.length; S += 1) {
        var C = T[S];
        if (C) n(C, u, "Pattern");
      }
    }, h.ObjectPattern = function (o, u, n) {
      for (var S = 0, T = o.properties; S < T.length; S += 1) {
        var C = T[S];
        if (C.type === "Property") {
          if (C.computed) n(C.key, u, "Expression");
          n(C.value, u, "Pattern");
        } else if (C.type === "RestElement") n(C.argument, u, "Pattern");
      }
    }, h.Expression = ge, h.ThisExpression = h.Super = h.MetaProperty = _e, h.ArrayExpression = function (o, u, n) {
      for (var S = 0, T = o.elements; S < T.length; S += 1) {
        var C = T[S];
        if (C) n(C, u, "Expression");
      }
    }, h.ObjectExpression = function (o, u, n) {
      for (var S = 0, T = o.properties; S < T.length; S += 1) {
        var C = T[S];
        n(C, u);
      }
    }, h.FunctionExpression = h.ArrowFunctionExpression = h.FunctionDeclaration, h.SequenceExpression = function (o, u, n) {
      for (var S = 0, T = o.expressions; S < T.length; S += 1) {
        var C = T[S];
        n(C, u, "Expression");
      }
    }, h.TemplateLiteral = function (o, u, n) {
      for (var S = 0, T = o.quasis; S < T.length; S += 1) {
        var C = T[S];
        n(C, u);
      }
      for (var X = 0, N = o.expressions; X < N.length; X += 1) {
        var Z = N[X];
        n(Z, u, "Expression");
      }
    }, h.TemplateElement = _e, h.UnaryExpression = h.UpdateExpression = function (o, u, n) {
      n(o.argument, u, "Expression");
    }, h.BinaryExpression = h.LogicalExpression = function (o, u, n) {
      n(o.left, u, "Expression"), n(o.right, u, "Expression");
    }, h.AssignmentExpression = h.AssignmentPattern = function (o, u, n) {
      n(o.left, u, "Pattern"), n(o.right, u, "Expression");
    }, h.ConditionalExpression = function (o, u, n) {
      n(o.test, u, "Expression"), n(o.consequent, u, "Expression"), n(o.alternate, u, "Expression");
    }, h.NewExpression = h.CallExpression = function (o, u, n) {
      if (n(o.callee, u, "Expression"), o.arguments) for (var S = 0, T = o.arguments; S < T.length; S += 1) {
        var C = T[S];
        n(C, u, "Expression");
      }
    }, h.MemberExpression = function (o, u, n) {
      if (n(o.object, u, "Expression"), o.computed) n(o.property, u, "Expression");
    }, h.ExportNamedDeclaration = h.ExportDefaultDeclaration = function (o, u, n) {
      if (o.declaration) n(o.declaration, u, o.type === "ExportNamedDeclaration" || o.declaration.id ? "Statement" : "Expression");
      if (o.source) n(o.source, u, "Expression");
      if (o.attributes) for (var S = 0, T = o.attributes; S < T.length; S += 1) {
        var C = T[S];
        n(C, u);
      }
    }, h.ExportAllDeclaration = function (o, u, n) {
      if (o.exported) n(o.exported, u);
      if (n(o.source, u, "Expression"), o.attributes) for (var S = 0, T = o.attributes; S < T.length; S += 1) {
        var C = T[S];
        n(C, u);
      }
    }, h.ImportAttribute = function (o, u, n) {
      n(o.value, u, "Expression");
    }, h.ImportDeclaration = function (o, u, n) {
      for (var S = 0, T = o.specifiers; S < T.length; S += 1) {
        var C = T[S];
        n(C, u);
      }
      if (n(o.source, u, "Expression"), o.attributes) for (var X = 0, N = o.attributes; X < N.length; X += 1) {
        var Z = N[X];
        n(Z, u);
      }
    }, h.ImportExpression = function (o, u, n) {
      if (n(o.source, u, "Expression"), o.options) n(o.options, u, "Expression");
    }, h.ImportSpecifier = h.ImportDefaultSpecifier = h.ImportNamespaceSpecifier = h.Identifier = h.PrivateIdentifier = h.Literal = _e, h.TaggedTemplateExpression = function (o, u, n) {
      n(o.tag, u, "Expression"), n(o.quasi, u, "Expression");
    }, h.ClassDeclaration = h.ClassExpression = function (o, u, n) {
      return n(o, u, "Class");
    }, h.Class = function (o, u, n) {
      if (o.id) n(o.id, u, "Pattern");
      if (o.superClass) n(o.superClass, u, "Expression");
      n(o.body, u);
    }, h.ClassBody = function (o, u, n) {
      for (var S = 0, T = o.body; S < T.length; S += 1) {
        var C = T[S];
        n(C, u);
      }
    }, h.MethodDefinition = h.PropertyDefinition = h.Property = function (o, u, n) {
      if (o.computed) n(o.key, u, "Expression");
      if (o.value) n(o.value, u, "Expression");
    }, e.ancestor = s, e.base = h, e.findNodeAfter = W, e.findNodeAround = ce, e.findNodeAt = R, e.findNodeBefore = H, e.full = A, e.fullAncestor = F, e.make = z, e.recursive = g, e.simple = r;
  });
});
