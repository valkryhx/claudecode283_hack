// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Fvo, unn } from "B:/~BUN/root/chunk-90t607hy.js";
import { R } from "B:/~BUN/root/chunk-ef0msk7r.js";
var it = R(function (zr) {
  Object.defineProperty(zr, "__esModule", {
    value: !0
  });
  zr.regexpCode = zr.getEsmExportName = zr.getProperty = zr.safeStringify = zr.stringify = zr.strConcat = zr.addCodeArg = zr.str = zr._ = zr.nil = zr._Code = zr.Name = zr.IDENTIFIER = zr._CodeOrName = void 0;
  class ht {}
  zr._CodeOrName = ht;
  zr.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
  class De extends ht {
    constructor(e) {
      super();
      if (!zr.IDENTIFIER.test(e)) throw Error("CodeGen: name must be a valid identifier");
      this.str = e;
    }
    toString() {
      return this.str;
    }
    emptyStr() {
      return !1;
    }
    get names() {
      return {
        [this.str]: 1
      };
    }
  }
  zr.Name = De;
  class Z extends ht {
    constructor(e) {
      super();
      this._items = typeof e === "string" ? [e] : e;
    }
    toString() {
      return this.str;
    }
    emptyStr() {
      if (this._items.length > 1) return !1;
      let e = this._items[0];
      return e === "" || e === '""';
    }
    get str() {
      var e;
      return (e = this._str) !== null && e !== void 0 ? e : this._str = this._items.reduce((acc, item) => `${acc}${item}`, "");
    }
    get names() {
      var e;
      return (e = this._names) !== null && e !== void 0 ? e : this._names = this._items.reduce((acc, item) => {
        if (item instanceof De) acc[item.str] = (acc[item.str] || 0) + 1;
        return acc;
      }, {});
    }
  }
  zr._Code = Z;
  zr.nil = new Z("");
  function Dr(e, ...t) {
    let r = [e[0]],
      s = 0;
    while (s < t.length) tr(r, t[s]), r.push(e[++s]);
    return new Z(r);
  }
  zr._ = Dr;
  var er = new Z("+");
  function Vr(e, ...t) {
    let r = [ot(e[0])],
      s = 0;
    while (s < t.length) r.push(er), tr(r, t[s]), r.push(er, ot(e[++s]));
    return ha(r), new Z(r);
  }
  zr.str = Vr;
  function tr(e, t) {
    if (t instanceof Z) e.push(...t._items);else if (t instanceof De) e.push(t);else e.push(_a(t));
  }
  zr.addCodeArg = tr;
  function ha(e) {
    let t = 1;
    while (t < e.length - 1) {
      if (e[t] === er) {
        let r = ma(e[t - 1], e[t + 1]);
        if (r !== void 0) {
          e.splice(t - 1, 3, r);
          continue;
        }
        e[t++] = "+";
      }
      t++;
    }
  }
  function ma(e, t) {
    if (t === '""') return e;
    if (e === '""') return t;
    if (typeof e == "string") {
      if (t instanceof De || e[e.length - 1] !== '"') return;
      if (typeof t != "string") return `${e.slice(0, -1)}${t}"`;
      if (t[0] === '"') return e.slice(0, -1) + t.slice(1);
      return;
    }
    if (typeof t == "string" && t[0] === '"' && !(e instanceof De)) return `"${e}${t.slice(1)}`;
    return;
  }
  function ya(e, t) {
    return t.emptyStr() ? e : e.emptyStr() ? t : Vr`${e}${t}`;
  }
  zr.strConcat = ya;
  function _a(e) {
    return typeof e == "number" || typeof e == "boolean" || e === null ? e : ot(Array.isArray(e) ? e.join(",") : e);
  }
  function ga(e) {
    return new Z(ot(e));
  }
  zr.stringify = ga;
  function ot(e) {
    return JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
  }
  zr.safeStringify = ot;
  function $a(e) {
    return typeof e == "string" && zr.IDENTIFIER.test(e) ? new Z(`.${e}`) : Dr`[${e}]`;
  }
  zr.getProperty = $a;
  function va(e) {
    if (typeof e == "string" && zr.IDENTIFIER.test(e)) return new Z(`${e}`);
    throw Error(`CodeGen: invalid export name: ${e}, use explicit $id name mapping`);
  }
  zr.getEsmExportName = va;
  function wa(e) {
    return new Z(e.toString());
  }
  zr.regexpCode = wa;
});
var or = R(function (Lr) {
  Object.defineProperty(Lr, "__esModule", {
    value: !0
  });
  Lr.ValueScope = Lr.ValueScopeName = Lr.Scope = Lr.varKinds = Lr.UsedValueState = void 0;
  var T = it();
  class Kr extends Error {
    constructor(e) {
      super(`CodeGen: "code" for ${e} not defined`);
      this.value = e.value;
    }
  }
  var yt;
  (function (e) {
    e[e.Started = 0] = "Started", e[e.Completed = 1] = "Completed";
  })(yt || (Lr.UsedValueState = yt = {}));
  Lr.varKinds = {
    const: new T.Name("const"),
    let: new T.Name("let"),
    var: new T.Name("var")
  };
  class sr {
    constructor({
      prefixes: prefixes,
      parent: parent
    } = {}) {
      this._names = {}, this._prefixes = prefixes, this._parent = parent;
    }
    toName(e) {
      return e instanceof T.Name ? e : this.name(e);
    }
    name(e) {
      return new T.Name(this._newName(e));
    }
    _newName(e) {
      let t = this._names[e] || this._nameGroup(e);
      return `${e}${t.index++}`;
    }
    _nameGroup(prefix) {
      var t, r;
      if (((r = (t = this._parent) === null || t === void 0 ? void 0 : t._prefixes) === null || r === void 0 ? void 0 : r.has(prefix)) || this._prefixes && !this._prefixes.has(prefix)) throw Error(`CodeGen: prefix "${prefix}" is not allowed in this scope`);
      return this._names[prefix] = {
        prefix: prefix,
        index: 0
      };
    }
  }
  Lr.Scope = sr;
  class nr extends T.Name {
    constructor(e, t) {
      super(t);
      this.prefix = e;
    }
    setValue(e, {
      property: property,
      itemIndex: itemIndex
    }) {
      this.value = e, this.scopePath = T._`.${new T.Name(property)}[${itemIndex}]`;
    }
  }
  Lr.ValueScopeName = nr;
  var Ta = T._`\n`;
  class Fr extends sr {
    constructor(e) {
      super(e);
      this._values = {}, this._scope = e.scope, this.opts = {
        ...e,
        _n: e.lines ? Ta : T.nil
      };
    }
    get() {
      return this._scope;
    }
    name(e) {
      return new nr(e, this._newName(e));
    }
    value(e, t) {
      var r;
      if (t.ref === void 0) throw Error("CodeGen: ref must be passed in value");
      let s = this.toName(e),
        {
          prefix: n
        } = s,
        o = (r = t.key) !== null && r !== void 0 ? r : t.ref,
        i = this._values[n];
      if (i) {
        let u = i.get(o);
        if (u) return u;
      } else i = this._values[n] = new Map();
      i.set(o, s);
      let a = this._scope[n] || (this._scope[n] = []),
        itemIndex_2 = a.length;
      return a[itemIndex_2] = t.ref, s.setValue(t, {
        property: n,
        itemIndex: itemIndex_2
      }), s;
    }
    getValue(e, t) {
      let r = this._values[e];
      if (!r) return;
      return r.get(t);
    }
    scopeRefs(e, t = this._values) {
      return this._reduceValues(t, r => {
        if (r.scopePath === void 0) throw Error(`CodeGen: name "${r}" has no value`);
        return T._`${e}${r.scopePath}`;
      });
    }
    scopeCode(e = this._values, t, r) {
      return this._reduceValues(e, s => {
        if (s.value === void 0) throw Error(`CodeGen: name "${s}" has no value`);
        return s.value.code;
      }, t, r);
    }
    _reduceValues(e, t, r = {}, s) {
      let nil = T.nil;
      for (let o in e) {
        let i = e[o];
        if (!i) continue;
        let a = r[o] = r[o] || new Map();
        i.forEach(item => {
          if (a.has(item)) return;
          a.set(item, yt.Started);
          let u = t(item);
          if (u) {
            let l = this.opts.es5 ? Lr.varKinds.var : Lr.varKinds.const;
            nil = T._`${nil}${l} ${item} = ${u};${this.opts._n}`;
          } else if (u = s === null || s === void 0 ? void 0 : s(item)) nil = T._`${nil}${u}${this.opts._n}`;else throw new Kr(item);
          a.set(item, yt.Completed);
        });
      }
      return nil;
    }
  }
  Lr.ValueScope = Fr;
});
var Dm = R(function (H) {
  Object.defineProperty(H, "__esModule", {
    value: !0
  });
  H.or = H.and = H.not = H.CodeGen = H.operators = H.varKinds = H.ValueScopeName = H.ValueScope = H.Scope = H.Name = H.regexpCode = H.stringify = H.getProperty = H.nil = H.strConcat = H.str = H._ = void 0;
  var g = it(),
    D = or(),
    me = it();
  Object.defineProperty(H, "_", {
    enumerable: !0,
    get: function () {
      return me._;
    }
  });
  Object.defineProperty(H, "str", {
    enumerable: !0,
    get: function () {
      return me.str;
    }
  });
  Object.defineProperty(H, "strConcat", {
    enumerable: !0,
    get: function () {
      return me.strConcat;
    }
  });
  Object.defineProperty(H, "nil", {
    enumerable: !0,
    get: function () {
      return me.nil;
    }
  });
  Object.defineProperty(H, "getProperty", {
    enumerable: !0,
    get: function () {
      return me.getProperty;
    }
  });
  Object.defineProperty(H, "stringify", {
    enumerable: !0,
    get: function () {
      return me.stringify;
    }
  });
  Object.defineProperty(H, "regexpCode", {
    enumerable: !0,
    get: function () {
      return me.regexpCode;
    }
  });
  Object.defineProperty(H, "Name", {
    enumerable: !0,
    get: function () {
      return me.Name;
    }
  });
  var bt = or();
  Object.defineProperty(H, "Scope", {
    enumerable: !0,
    get: function () {
      return bt.Scope;
    }
  });
  Object.defineProperty(H, "ValueScope", {
    enumerable: !0,
    get: function () {
      return bt.ValueScope;
    }
  });
  Object.defineProperty(H, "ValueScopeName", {
    enumerable: !0,
    get: function () {
      return bt.ValueScopeName;
    }
  });
  Object.defineProperty(H, "varKinds", {
    enumerable: !0,
    get: function () {
      return bt.varKinds;
    }
  });
  H.operators = {
    GT: new g._Code(">"),
    GTE: new g._Code(">="),
    LT: new g._Code("<"),
    LTE: new g._Code("<="),
    EQ: new g._Code("==="),
    NEQ: new g._Code("!=="),
    NOT: new g._Code("!"),
    OR: new g._Code("||"),
    AND: new g._Code("&&"),
    ADD: new g._Code("+")
  };
  class ye {
    optimizeNodes() {
      return this;
    }
    optimizeNames(e, t) {
      return this;
    }
  }
  class Gr extends ye {
    constructor(e, t, r) {
      super();
      this.varKind = e, this.name = t, this.rhs = r;
    }
    render({
      es5: es5,
      _n: _n_2
    }) {
      let r = es5 ? D.varKinds.var : this.varKind,
        s = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
      return `${r} ${this.name}${s};` + _n_2;
    }
    optimizeNames(e, t) {
      if (!e[this.name.str]) return;
      if (this.rhs) this.rhs = ze(this.rhs, e, t);
      return this;
    }
    get names() {
      return this.rhs instanceof g._CodeOrName ? this.rhs.names : {};
    }
  }
  class cr extends ye {
    constructor(e, t, r) {
      super();
      this.lhs = e, this.rhs = t, this.sideEffects = r;
    }
    render({
      _n: _n_3
    }) {
      return `${this.lhs} = ${this.rhs};` + _n_3;
    }
    optimizeNames(e, t) {
      if (this.lhs instanceof g.Name && !e[this.lhs.str] && !this.sideEffects) return;
      return this.rhs = ze(this.rhs, e, t), this;
    }
    get names() {
      let e = this.lhs instanceof g.Name ? {} : {
        ...this.lhs.names
      };
      return wt(e, this.rhs);
    }
  }
  class Jr extends cr {
    constructor(e, t, r, s) {
      super(e, r, s);
      this.op = t;
    }
    render({
      _n: _n_4
    }) {
      return `${this.lhs} ${this.op}= ${this.rhs};` + _n_4;
    }
  }
  class Wr extends ye {
    constructor(e) {
      super();
      this.label = e, this.names = {};
    }
    render({
      _n: _n_5
    }) {
      return `${this.label}:` + _n_5;
    }
  }
  class Br extends ye {
    constructor(e) {
      super();
      this.label = e, this.names = {};
    }
    render({
      _n: _n_6
    }) {
      return `break${this.label ? ` ${this.label}` : ""};` + _n_6;
    }
  }
  class Qr extends ye {
    constructor(e) {
      super();
      this.error = e;
    }
    render({
      _n: _n_7
    }) {
      return `throw ${this.error};` + _n_7;
    }
    get names() {
      return this.error.names;
    }
  }
  class Xr extends ye {
    constructor(e) {
      super();
      this.code = e;
    }
    render({
      _n: _n_8
    }) {
      return `${this.code};` + _n_8;
    }
    optimizeNodes() {
      return `${this.code}` ? this : void 0;
    }
    optimizeNames(e, t) {
      return this.code = ze(this.code, e, t), this;
    }
    get names() {
      return this.code instanceof g._CodeOrName ? this.code.names : {};
    }
  }
  class Et extends ye {
    constructor(e = []) {
      super();
      this.nodes = e;
    }
    render(e) {
      return this.nodes.reduce((acc, item) => acc + item.render(e), "");
    }
    optimizeNodes() {
      let {
          nodes: nodes
        } = this,
        t = nodes.length;
      while (t--) {
        let r = nodes[t].optimizeNodes();
        if (Array.isArray(r)) nodes.splice(t, 1, ...r);else if (r) nodes[t] = r;else nodes.splice(t, 1);
      }
      return nodes.length > 0 ? this : void 0;
    }
    optimizeNames(e, t) {
      let {
          nodes: nodes_2
        } = this,
        s = nodes_2.length;
      while (s--) {
        let n = nodes_2[s];
        if (n.optimizeNames(e, t)) continue;
        Da(e, n.names), nodes_2.splice(s, 1);
      }
      return nodes_2.length > 0 ? this : void 0;
    }
    get names() {
      return this.nodes.reduce((acc, item) => Ie(acc, item.names), {});
    }
  }
  class _e extends Et {
    render(e) {
      return "{" + e._n + super.render(e) + "}" + e._n;
    }
  }
  class Yr extends Et {}
  class at extends _e {}
  at.kind = "else";
  class pe extends _e {
    constructor(e, t) {
      super(t);
      this.condition = e;
    }
    render(e) {
      let t = `if(${this.condition})` + super.render(e);
      if (this.else) t += "else " + this.else.render(e);
      return t;
    }
    optimizeNodes() {
      super.optimizeNodes();
      let condition = this.condition;
      if (condition === !0) return this.nodes;
      let t = this.else;
      if (t) {
        let r = t.optimizeNodes();
        t = this.else = Array.isArray(r) ? new at(r) : r;
      }
      if (t) {
        if (condition === !1) return t instanceof pe ? t : t.nodes;
        if (this.nodes.length) return this;
        return new pe(ss(condition), t instanceof pe ? [t] : t.nodes);
      }
      if (condition === !1 || !this.nodes.length) return;
      return this;
    }
    optimizeNames(e, t) {
      var r;
      if (this.else = (r = this.else) === null || r === void 0 ? void 0 : r.optimizeNames(e, t), !(super.optimizeNames(e, t) || this.else)) return;
      return this.condition = ze(this.condition, e, t), this;
    }
    get names() {
      let names = super.names;
      if (wt(names, this.condition), this.else) Ie(names, this.else.names);
      return names;
    }
  }
  pe.kind = "if";
  class Ve extends _e {}
  Ve.kind = "for";
  class Zr extends Ve {
    constructor(e) {
      super();
      this.iteration = e;
    }
    render(e) {
      return `for(${this.iteration})` + super.render(e);
    }
    optimizeNames(e, t) {
      if (!super.optimizeNames(e, t)) return;
      return this.iteration = ze(this.iteration, e, t), this;
    }
    get names() {
      return Ie(super.names, this.iteration.names);
    }
  }
  class es extends Ve {
    constructor(e, t, r, s) {
      super();
      this.varKind = e, this.name = t, this.from = r, this.to = s;
    }
    render(e) {
      let t = e.es5 ? D.varKinds.var : this.varKind,
        {
          name: name,
          from: s,
          to: to_2
        } = this;
      return `for(${t} ${name}=${s}; ${name}<${to_2}; ${name}++)` + super.render(e);
    }
    get names() {
      let e = wt(super.names, this.from);
      return wt(e, this.to);
    }
  }
  class ir extends Ve {
    constructor(e, t, r, s) {
      super();
      this.loop = e, this.varKind = t, this.name = r, this.iterable = s;
    }
    render(e) {
      return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(e);
    }
    optimizeNames(e, t) {
      if (!super.optimizeNames(e, t)) return;
      return this.iterable = ze(this.iterable, e, t), this;
    }
    get names() {
      return Ie(super.names, this.iterable.names);
    }
  }
  class _t extends _e {
    constructor(e, t, r) {
      super();
      this.name = e, this.args = t, this.async = r;
    }
    render(e) {
      return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(e);
    }
  }
  _t.kind = "func";
  class gt extends Et {
    render(e) {
      return "return " + super.render(e);
    }
  }
  gt.kind = "return";
  class ts extends _e {
    render(e) {
      let t = "try" + super.render(e);
      if (this.catch) t += this.catch.render(e);
      if (this.finally) t += this.finally.render(e);
      return t;
    }
    optimizeNodes() {
      var e, t;
      return super.optimizeNodes(), (e = this.catch) === null || e === void 0 || e.optimizeNodes(), (t = this.finally) === null || t === void 0 || t.optimizeNodes(), this;
    }
    optimizeNames(e, t) {
      var r, s;
      return super.optimizeNames(e, t), (r = this.catch) === null || r === void 0 || r.optimizeNames(e, t), (s = this.finally) === null || s === void 0 || s.optimizeNames(e, t), this;
    }
    get names() {
      let names_2 = super.names;
      if (this.catch) Ie(names_2, this.catch.names);
      if (this.finally) Ie(names_2, this.finally.names);
      return names_2;
    }
  }
  class $t extends _e {
    constructor(e) {
      super();
      this.error = e;
    }
    render(e) {
      return `catch(${this.error})` + super.render(e);
    }
  }
  $t.kind = "catch";
  class vt extends _e {
    render(e) {
      return "finally" + super.render(e);
    }
  }
  vt.kind = "finally";
  class rs {
    constructor(parent_2, t = {}) {
      this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = {
        ...t,
        _n: t.lines ? `
` : ""
      }, this._extScope = parent_2, this._scope = new D.Scope({
        parent: parent_2
      }), this._nodes = [new Yr()];
    }
    toString() {
      return this._root.render(this.opts);
    }
    name(e) {
      return this._scope.name(e);
    }
    scopeName(e) {
      return this._extScope.name(e);
    }
    scopeValue(e, t) {
      let r = this._extScope.value(e, t);
      return (this._values[r.prefix] || (this._values[r.prefix] = new Set())).add(r), r;
    }
    getScopeValue(e, t) {
      return this._extScope.getValue(e, t);
    }
    scopeRefs(e) {
      return this._extScope.scopeRefs(e, this._values);
    }
    scopeCode() {
      return this._extScope.scopeCode(this._values);
    }
    _def(e, t, r, s) {
      let n = this._scope.toName(t);
      if (r !== void 0 && s) this._constants[n.str] = r;
      return this._leafNode(new Gr(e, n, r)), n;
    }
    const(e, t, r) {
      return this._def(D.varKinds.const, e, t, r);
    }
    let(e, t, r) {
      return this._def(D.varKinds.let, e, t, r);
    }
    var(e, t, r) {
      return this._def(D.varKinds.var, e, t, r);
    }
    assign(e, t, r) {
      return this._leafNode(new cr(e, t, r));
    }
    add(e, t) {
      return this._leafNode(new Jr(e, H.operators.ADD, t));
    }
    code(e) {
      if (typeof e == "function") e();else if (e !== g.nil) this._leafNode(new Xr(e));
      return this;
    }
    object(...e) {
      let t = ["{"];
      for (let [r, s] of e) {
        if (t.length > 1) t.push(",");
        if (t.push(r), r !== s || this.opts.es5) t.push(":"), g.addCodeArg(t, s);
      }
      return t.push("}"), new g._Code(t);
    }
    if(e, t, r) {
      if (this._blockNode(new pe(e)), t && r) this.code(t).else().code(r).endIf();else if (t) this.code(t).endIf();else if (r) throw Error('CodeGen: "else" body without "then" body');
      return this;
    }
    elseIf(e) {
      return this._elseNode(new pe(e));
    }
    else() {
      return this._elseNode(new at());
    }
    endIf() {
      return this._endBlockNode(pe, at);
    }
    _for(e, t) {
      if (this._blockNode(e), t) this.code(t).endFor();
      return this;
    }
    for(e, t) {
      return this._for(new Zr(e), t);
    }
    forRange(e, t, r, s, n = this.opts.es5 ? D.varKinds.var : D.varKinds.let) {
      let o = this._scope.toName(e);
      return this._for(new es(n, o, t, r), () => s(o));
    }
    forOf(e, t, r, s = D.varKinds.const) {
      let n = this._scope.toName(e);
      if (this.opts.es5) {
        let o = t instanceof g.Name ? t : this.var("_arr", t);
        return this.forRange("_i", 0, g._`${o}.length`, i => {
          this.var(n, g._`${o}[${i}]`), r(n);
        });
      }
      return this._for(new ir("of", s, n, t), () => r(n));
    }
    forIn(e, t, r, s = this.opts.es5 ? D.varKinds.var : D.varKinds.const) {
      if (this.opts.ownProperties) return this.forOf(e, g._`Object.keys(${t})`, r);
      let n = this._scope.toName(e);
      return this._for(new ir("in", s, n, t), () => r(n));
    }
    endFor() {
      return this._endBlockNode(Ve);
    }
    label(e) {
      return this._leafNode(new Wr(e));
    }
    break(e) {
      return this._leafNode(new Br(e));
    }
    return(e) {
      let t = new gt();
      if (this._blockNode(t), this.code(e), t.nodes.length !== 1) throw Error('CodeGen: "return" should have one node');
      return this._endBlockNode(gt);
    }
    try(e, t, r) {
      if (!t && !r) throw Error('CodeGen: "try" without "catch" and "finally"');
      let s = new ts();
      if (this._blockNode(s), this.code(e), t) {
        let n = this.name("e");
        this._currNode = s.catch = new $t(n), t(n);
      }
      if (r) this._currNode = s.finally = new vt(), this.code(r);
      return this._endBlockNode($t, vt);
    }
    throw(e) {
      return this._leafNode(new Qr(e));
    }
    block(e, t) {
      if (this._blockStarts.push(this._nodes.length), e) this.code(e).endBlock(t);
      return this;
    }
    endBlock(e) {
      let t = this._blockStarts.pop();
      if (t === void 0) throw Error("CodeGen: not in self-balancing block");
      let r = this._nodes.length - t;
      if (r < 0 || e !== void 0 && r !== e) throw Error(`CodeGen: wrong number of nodes: ${r} vs ${e} expected`);
      return this._nodes.length = t, this;
    }
    func(e, t = g.nil, r, s) {
      if (this._blockNode(new _t(e, t, r)), s) this.code(s).endFunc();
      return this;
    }
    endFunc() {
      return this._endBlockNode(_t);
    }
    optimize(e = 1) {
      while (e-- > 0) this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
    }
    _leafNode(e) {
      return this._currNode.nodes.push(e), this;
    }
    _blockNode(e) {
      this._currNode.nodes.push(e), this._nodes.push(e);
    }
    _endBlockNode(e, t) {
      let _currNode = this._currNode;
      if (_currNode instanceof e || t && _currNode instanceof t) return this._nodes.pop(), this;
      throw Error(`CodeGen: not in block "${t ? `${e.kind}/${t.kind}` : e.kind}"`);
    }
    _elseNode(e) {
      let _currNode_2 = this._currNode;
      if (!(_currNode_2 instanceof pe)) throw Error('CodeGen: "else" without "if"');
      return this._currNode = _currNode_2.else = e, this;
    }
    get _root() {
      return this._nodes[0];
    }
    get _currNode() {
      let _nodes = this._nodes;
      return _nodes[_nodes.length - 1];
    }
    set _currNode(e) {
      let _nodes_2 = this._nodes;
      _nodes_2[_nodes_2.length - 1] = e;
    }
  }
  H.CodeGen = rs;
  function Ie(e, t) {
    for (let r in t) e[r] = (e[r] || 0) + (t[r] || 0);
    return e;
  }
  function wt(e, t) {
    return t instanceof g._CodeOrName ? Ie(e, t.names) : e;
  }
  function ze(e, t, r) {
    if (e instanceof g.Name) return s(e);
    if (!n(e)) return e;
    return new g._Code(e._items.reduce((acc, item) => {
      if (item instanceof g.Name) item = s(item);
      if (item instanceof g._Code) acc.push(...item._items);else acc.push(item);
      return acc;
    }, []));
    function s(o) {
      let i = r[o.str];
      if (i === void 0 || t[o.str] !== 1) return o;
      return delete t[o.str], i;
    }
    function n(o) {
      return o instanceof g._Code && o._items.some(item => item instanceof g.Name && t[item.str] === 1 && r[item.str] !== void 0);
    }
  }
  function Da(e, t) {
    for (let r in t) e[r] = (e[r] || 0) - (t[r] || 0);
  }
  function ss(e) {
    return typeof e == "boolean" || typeof e == "number" || e === null ? !e : g._`!${ar(e)}`;
  }
  H.not = ss;
  var Va = ns(H.operators.AND);
  function za(...e) {
    return e.reduce(Va);
  }
  H.and = za;
  var Ua = ns(H.operators.OR);
  function Ka(...e) {
    return e.reduce(Ua);
  }
  H.or = Ka;
  function ns(e) {
    return (t, r) => t === g.nil ? r : r === g.nil ? t : g._`${ar(t)} ${e} ${ar(r)}`;
  }
  function ar(e) {
    return e instanceof g.Name ? e : g._`(${e})`;
  }
});
var ab = R(function (hs) {
  Object.defineProperty(hs, "__esModule", {
    value: !0
  });
  hs.checkStrictMode = hs.getErrorPath = hs.Type = hs.useFunc = hs.setEvaluated = hs.evaluatedPropsToName = hs.mergeEvaluated = hs.eachItem = hs.unescapeJsonPointer = hs.escapeJsonPointer = hs.escapeFragment = hs.unescapeFragment = hs.schemaRefOrVal = hs.schemaHasRulesButRef = hs.schemaHasRules = hs.checkUnknownRules = hs.alwaysValidSchema = hs.toHash = void 0;
  var E = Dm(),
    cs = it();
  function Ga(e) {
    let t = {};
    for (let r of e) t[r] = !0;
    return t;
  }
  hs.toHash = Ga;
  function Ja(e, t) {
    if (typeof t == "boolean") return t;
    if (Object.keys(t).length === 0) return !0;
    return us(e, t), !ls(t, e.self.RULES.all);
  }
  hs.alwaysValidSchema = Ja;
  function us(e, t = e.schema) {
    let {
      opts: opts,
      self: self
    } = e;
    if (!opts.strictSchema) return;
    if (typeof t === "boolean") return;
    let keywords = self.RULES.keywords;
    for (let o in t) if (!keywords[o]) ps(e, `unknown keyword: "${o}"`);
  }
  hs.checkUnknownRules = us;
  function ls(e, t) {
    if (typeof e == "boolean") return !e;
    for (let r in e) if (t[r]) return !0;
    return !1;
  }
  hs.schemaHasRules = ls;
  function Wa(e, t) {
    if (typeof e == "boolean") return !e;
    for (let r in e) if (r !== "$ref" && t.all[r]) return !0;
    return !1;
  }
  hs.schemaHasRulesButRef = Wa;
  function Ba({
    topSchemaRef: topSchemaRef,
    schemaPath: schemaPath
  }, r, s, n) {
    if (!n) {
      if (typeof r == "number" || typeof r == "boolean") return r;
      if (typeof r == "string") return E._`${r}`;
    }
    return E._`${topSchemaRef}${schemaPath}${E.getProperty(s)}`;
  }
  hs.schemaRefOrVal = Ba;
  function Qa(e) {
    return ds(decodeURIComponent(e));
  }
  hs.unescapeFragment = Qa;
  function Xa(e) {
    return encodeURIComponent(lr(e));
  }
  hs.escapeFragment = Xa;
  function lr(e) {
    if (typeof e == "number") return `${e}`;
    return e.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  hs.escapeJsonPointer = lr;
  function ds(e) {
    return e.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  hs.unescapeJsonPointer = ds;
  function Ya(e, t) {
    if (Array.isArray(e)) for (let r of e) t(r);else t(e);
  }
  hs.eachItem = Ya;
  function is({
    mergeNames: mergeNames,
    mergeToName: mergeToName,
    mergeValues: mergeValues,
    resultToName: resultToName
  }) {
    return (n, o, i, a) => {
      let c = i === void 0 ? o : i instanceof E.Name ? (o instanceof E.Name ? mergeNames(n, o, i) : mergeToName(n, o, i), i) : o instanceof E.Name ? (mergeToName(n, i, o), o) : mergeValues(o, i);
      return a === E.Name && !(c instanceof E.Name) ? resultToName(n, c) : c;
    };
  }
  hs.mergeEvaluated = {
    props: is({
      mergeNames: (e, t, r) => e.if(E._`${r} !== true && ${t} !== undefined`, () => {
        e.if(E._`${t} === true`, () => e.assign(r, !0), () => e.assign(r, E._`${r} || {}`).code(E._`Object.assign(${r}, ${t})`));
      }),
      mergeToName: (e, t, r) => e.if(E._`${r} !== true`, () => {
        if (t === !0) e.assign(r, !0);else e.assign(r, E._`${r} || {}`), dr(e, r, t);
      }),
      mergeValues: (e, t) => e === !0 ? !0 : {
        ...e,
        ...t
      },
      resultToName: resultToName_2
    }),
    items: is({
      mergeNames: (e, t, r) => e.if(E._`${r} !== true && ${t} !== undefined`, () => e.assign(r, E._`${t} === true ? true : ${r} > ${t} ? ${r} : ${t}`)),
      mergeToName: (e, t, r) => e.if(E._`${r} !== true`, () => e.assign(r, t === !0 ? !0 : E._`${r} > ${t} ? ${r} : ${t}`)),
      mergeValues: (e, t) => e === !0 ? !0 : Math.max(e, t),
      resultToName: (e, t) => e.var("items", t)
    })
  };
  function resultToName_2(e, t) {
    if (t === !0) return e.var("props", !0);
    let r = e.var("props", E._`{}`);
    if (t !== void 0) dr(e, r, t);
    return r;
  }
  hs.evaluatedPropsToName = resultToName_2;
  function dr(e, t, r) {
    Object.keys(r).forEach(item => e.assign(E._`${t}${E.getProperty(item)}`, !0));
  }
  hs.setEvaluated = dr;
  var as = {};
  function Za(e, ref) {
    return e.scopeValue("func", {
      ref: ref,
      code: as[ref.code] || (as[ref.code] = new cs._Code(ref.code))
    });
  }
  hs.useFunc = Za;
  var ur;
  (function (e) {
    e[e.Num = 0] = "Num", e[e.Str = 1] = "Str";
  })(ur || (hs.Type = ur = {}));
  function ec(e, t, r) {
    if (e instanceof E.Name) {
      let s = t === ur.Num;
      return r ? s ? E._`"[" + ${e} + "]"` : E._`"['" + ${e} + "']"` : s ? E._`"/" + ${e}` : E._`"/" + ${e}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return r ? E.getProperty(e).toString() : "/" + lr(e);
  }
  hs.getErrorPath = ec;
  function ps(e, t, r = e.opts.strictSchema) {
    if (!r) return;
    if (t = `strict mode: ${t}`, r === !0) throw Error(t);
    e.self.logger.warn(t);
  }
  hs.checkStrictMode = ps;
});
var Eve = R(function (ys) {
  Object.defineProperty(ys, "__esModule", {
    value: !0
  });
  var x = Dm(),
    gc = {
      data: new x.Name("data"),
      valCxt: new x.Name("valCxt"),
      instancePath: new x.Name("instancePath"),
      parentData: new x.Name("parentData"),
      parentDataProperty: new x.Name("parentDataProperty"),
      rootData: new x.Name("rootData"),
      dynamicAnchors: new x.Name("dynamicAnchors"),
      vErrors: new x.Name("vErrors"),
      errors: new x.Name("errors"),
      this: new x.Name("this"),
      self: new x.Name("self"),
      scope: new x.Name("scope"),
      json: new x.Name("json"),
      jsonPos: new x.Name("jsonPos"),
      jsonLen: new x.Name("jsonLen"),
      jsonPart: new x.Name("jsonPart")
    };
  ys.default = gc;
});
var ct = R(function (vs) {
  Object.defineProperty(vs, "__esModule", {
    value: !0
  });
  vs.extendErrors = vs.resetErrorsCount = vs.reportExtraError = vs.reportError = vs.keyword$DataError = vs.keywordError = void 0;
  var w = Dm(),
    ge = ab(),
    L = Eve();
  vs.keywordError = {
    message: ({
      keyword: keyword
    }) => w.str`must pass "${keyword}" keyword validation`
  };
  vs.keyword$DataError = {
    message: ({
      keyword: keyword_2,
      schemaType: schemaType
    }) => schemaType ? w.str`"${keyword_2}" keyword must be ${schemaType} ($data)` : w.str`"${keyword_2}" keyword is invalid ($data)`
  };
  function vc(e, t = vs.keywordError, r, s) {
    let {
        it: it_2
      } = e,
      {
        gen: gen,
        compositeRule: compositeRule,
        allErrors: allErrors
      } = it_2,
      c = $s(e, t, r);
    if (s !== null && s !== void 0 ? s : compositeRule || allErrors) _s(gen, c);else gs(it_2, w._`[${c}]`);
  }
  vs.reportError = vc;
  function wc(e, t = vs.keywordError, r) {
    let {
        it: it_3
      } = e,
      {
        gen: gen_2,
        compositeRule: compositeRule_2,
        allErrors: allErrors_2
      } = it_3,
      a = $s(e, t, r);
    if (_s(gen_2, a), !(compositeRule_2 || allErrors_2)) gs(it_3, L.default.vErrors);
  }
  vs.reportExtraError = wc;
  function bc(e, t) {
    e.assign(L.default.errors, t), e.if(w._`${L.default.vErrors} !== null`, () => e.if(t, () => e.assign(w._`${L.default.vErrors}.length`, t), () => e.assign(L.default.vErrors, null)));
  }
  vs.resetErrorsCount = bc;
  function Ec({
    gen: gen_3,
    keyword: keyword_3,
    schemaValue: schemaValue,
    data: data,
    errsCount: errsCount,
    it: it_4
  }) {
    if (errsCount === void 0) throw Error("ajv implementation error");
    let i = gen_3.name("err");
    gen_3.forRange("i", errsCount, L.default.errors, a => {
      if (gen_3.const(i, w._`${L.default.vErrors}[${a}]`), gen_3.if(w._`${i}.instancePath === undefined`, () => gen_3.assign(w._`${i}.instancePath`, w.strConcat(L.default.instancePath, it_4.errorPath))), gen_3.assign(w._`${i}.schemaPath`, w.str`${it_4.errSchemaPath}/${keyword_3}`), it_4.opts.verbose) gen_3.assign(w._`${i}.schema`, schemaValue), gen_3.assign(w._`${i}.data`, data);
    });
  }
  vs.extendErrors = Ec;
  function _s(e, t) {
    let r = e.const("err", t);
    e.if(w._`${L.default.vErrors} === null`, () => e.assign(L.default.vErrors, w._`[${r}]`), w._`${L.default.vErrors}.push(${r})`), e.code(w._`${L.default.errors}++`);
  }
  function gs(e, t) {
    let {
      gen: gen_4,
      validateName: validateName,
      schemaEnv: schemaEnv
    } = e;
    if (schemaEnv.$async) gen_4.throw(w._`new ${e.ValidationError}(${t})`);else gen_4.assign(w._`${validateName}.errors`, t), gen_4.return(!1);
  }
  var Te = {
    keyword: new w.Name("keyword"),
    schemaPath: new w.Name("schemaPath"),
    params: new w.Name("params"),
    propertyName: new w.Name("propertyName"),
    message: new w.Name("message"),
    schema: new w.Name("schema"),
    parentSchema: new w.Name("parentSchema")
  };
  function $s(e, t, r) {
    let {
      createErrors: createErrors
    } = e.it;
    if (createErrors === !1) return w._`{}`;
    return Sc(e, t, r);
  }
  function Sc(e, t, r = {}) {
    let {
        gen: gen_5,
        it: it_5
      } = e,
      o = [Pc(it_5, r), Nc(e, r)];
    return kc(e, t, o), gen_5.object(...o);
  }
  function Pc({
    errorPath: errorPath
  }, {
    instancePath: instancePath
  }) {
    let r = instancePath ? w.str`${errorPath}${ge.getErrorPath(instancePath, ge.Type.Str)}` : errorPath;
    return [L.default.instancePath, w.strConcat(L.default.instancePath, r)];
  }
  function Nc({
    keyword: keyword_4,
    it: {
      errSchemaPath: errSchemaPath
    }
  }, {
    schemaPath: schemaPath_2,
    parentSchema: parentSchema
  }) {
    let n = parentSchema ? errSchemaPath : w.str`${errSchemaPath}/${keyword_4}`;
    if (schemaPath_2) n = w.str`${n}${ge.getErrorPath(schemaPath_2, ge.Type.Str)}`;
    return [Te.schemaPath, n];
  }
  function kc(e, {
    params: params,
    message: message
  }, s) {
    let {
        keyword: keyword_5,
        data: data_2,
        schemaValue: schemaValue_2,
        it: it_6
      } = e,
      {
        opts: opts_2,
        propertyName: propertyName,
        topSchemaRef: topSchemaRef_2,
        schemaPath: schemaPath_3
      } = it_6;
    if (s.push([Te.keyword, keyword_5], [Te.params, typeof params == "function" ? params(e) : params || w._`{}`]), opts_2.messages) s.push([Te.message, typeof message == "function" ? message(e) : message]);
    if (opts_2.verbose) s.push([Te.schema, schemaValue_2], [Te.parentSchema, w._`${topSchemaRef_2}${schemaPath_3}`], [L.default.data, data_2]);
    if (propertyName) s.push([Te.propertyName, propertyName]);
  }
});
var ks = R(function (Ps) {
  Object.defineProperty(Ps, "__esModule", {
    value: !0
  });
  Ps.boolOrEmptySchema = Ps.topBoolOrEmptySchema = void 0;
  var bs = ct(),
    Es = Dm(),
    Rc = Eve(),
    Ic = {
      message: "boolean schema is false"
    };
  function Tc(e) {
    let {
      gen: gen_6,
      schema: schema,
      validateName: validateName_2
    } = e;
    if (schema === !1) Ss(e, !1);else if (typeof schema == "object" && schema.$async === !0) gen_6.return(Rc.default.data);else gen_6.assign(Es._`${validateName_2}.errors`, null), gen_6.return(!0);
  }
  Ps.topBoolOrEmptySchema = Tc;
  function Cc(e, t) {
    let {
      gen: gen_7,
      schema: schema_2
    } = e;
    if (schema_2 === !1) gen_7.var(t, !1), Ss(e);else gen_7.var(t, !0);
  }
  Ps.boolOrEmptySchema = Cc;
  function Ss(it_7, t) {
    let {
      gen: gen_8,
      data: data_3
    } = it_7;
    bs.reportError({
      gen: gen_8,
      keyword: "false schema",
      data: data_3,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: it_7
    }, Ic, void 0, t);
  }
});
var pr = R(function (qs) {
  Object.defineProperty(qs, "__esModule", {
    value: !0
  });
  qs.getRules = qs.isJSONType = void 0;
  var Ac = ["string", "number", "integer", "boolean", "null", "object", "array"],
    Dc = new Set(Ac);
  function Vc(e) {
    return typeof e == "string" && Dc.has(e);
  }
  qs.isJSONType = Vc;
  function zc() {
    let e = {
      number: {
        type: "number",
        rules: []
      },
      string: {
        type: "string",
        rules: []
      },
      array: {
        type: "array",
        rules: []
      },
      object: {
        type: "object",
        rules: []
      }
    };
    return {
      types: {
        ...e,
        integer: !0,
        boolean: !0,
        null: !0
      },
      rules: [{
        rules: []
      }, e.number, e.string, e.array, e.object],
      post: {
        rules: []
      },
      all: {},
      keywords: {}
    };
  }
  qs.getRules = zc;
});
var hr = R(function (Rs) {
  Object.defineProperty(Rs, "__esModule", {
    value: !0
  });
  Rs.shouldUseRule = Rs.shouldUseGroup = Rs.schemaHasRulesForType = void 0;
  function Kc({
    schema: schema_3,
    self: self_2
  }, r) {
    let s = self_2.RULES.types[r];
    return s && s !== !0 && js(schema_3, s);
  }
  Rs.schemaHasRulesForType = Kc;
  function js(e, t) {
    return t.rules.some(item => xs(e, item));
  }
  Rs.shouldUseGroup = js;
  function xs(e, t) {
    var r;
    return e[t.keyword] !== void 0 || ((r = t.definition.implements) === null || r === void 0 ? void 0 : r.some(item => e[item] !== void 0));
  }
  Rs.shouldUseRule = xs;
});
var ut = R(function (Vs) {
  Object.defineProperty(Vs, "__esModule", {
    value: !0
  });
  Vs.reportTypeError = Vs.checkDataTypes = Vs.checkDataType = Vs.coerceAndCheckDataType = Vs.getJSONTypes = Vs.getSchemaTypes = Vs.DataType = void 0;
  var Ts = pr(),
    Cs = hr(),
    Ms = ct(),
    m = Dm(),
    Pt = ab(),
    Ue;
  (function (e) {
    e[e.Correct = 0] = "Correct", e[e.Wrong = 1] = "Wrong";
  })(Ue || (Vs.DataType = Ue = {}));
  function Hc(e) {
    let t = As(e.type);
    if (t.includes("null")) {
      if (e.nullable === !1) throw Error("type: null contradicts nullable: false");
    } else {
      if (!t.length && e.nullable !== void 0) throw Error('"nullable" cannot be used without "type"');
      if (e.nullable === !0) t.push("null");
    }
    return t;
  }
  Vs.getSchemaTypes = Hc;
  function As(e) {
    let t = Array.isArray(e) ? e : e ? [e] : [];
    if (t.every(Ts.isJSONType)) return t;
    throw Error("type must be JSONType or JSONType[]: " + t.join(","));
  }
  Vs.getJSONTypes = As;
  function Gc(e, t) {
    let {
        gen: gen_9,
        data: data_4,
        opts: opts_3
      } = e,
      o = Jc(t, opts_3.coerceTypes),
      i = t.length > 0 && !(o.length === 0 && t.length === 1 && Cs.schemaHasRulesForType(e, t[0]));
    if (i) {
      let a = yr(t, data_4, opts_3.strictNumbers, Ue.Wrong);
      gen_9.if(a, () => {
        if (o.length) Wc(e, t, o);else _r(e);
      });
    }
    return i;
  }
  Vs.coerceAndCheckDataType = Gc;
  var Ds = new Set(["string", "number", "integer", "boolean", "null"]);
  function Jc(e, t) {
    return t ? e.filter(item => Ds.has(item) || t === "array" && item === "array") : [];
  }
  function Wc(e, t, r) {
    let {
        gen: gen_10,
        data: data_5,
        opts: opts_4
      } = e,
      i = gen_10.let("dataType", m._`typeof ${data_5}`),
      a = gen_10.let("coerced", m._`undefined`);
    if (opts_4.coerceTypes === "array") gen_10.if(m._`${i} == 'object' && Array.isArray(${data_5}) && ${data_5}.length == 1`, () => gen_10.assign(data_5, m._`${data_5}[0]`).assign(i, m._`typeof ${data_5}`).if(yr(t, data_5, opts_4.strictNumbers), () => gen_10.assign(a, data_5)));
    gen_10.if(m._`${a} !== undefined`);
    for (let u of r) if (Ds.has(u) || u === "array" && opts_4.coerceTypes === "array") c(u);
    gen_10.else(), _r(e), gen_10.endIf(), gen_10.if(m._`${a} !== undefined`, () => {
      gen_10.assign(data_5, a), Bc(e, a);
    });
    function c(u) {
      switch (u) {
        case "string":
          gen_10.elseIf(m._`${i} == "number" || ${i} == "boolean"`).assign(a, m._`"" + ${data_5}`).elseIf(m._`${data_5} === null`).assign(a, m._`""`);
          return;
        case "number":
          gen_10.elseIf(m._`${i} == "boolean" || ${data_5} === null
              || (${i} == "string" && ${data_5} && ${data_5} == +${data_5})`).assign(a, m._`+${data_5}`);
          return;
        case "integer":
          gen_10.elseIf(m._`${i} === "boolean" || ${data_5} === null
              || (${i} === "string" && ${data_5} && ${data_5} == +${data_5} && !(${data_5} % 1))`).assign(a, m._`+${data_5}`);
          return;
        case "boolean":
          gen_10.elseIf(m._`${data_5} === "false" || ${data_5} === 0 || ${data_5} === null`).assign(a, !1).elseIf(m._`${data_5} === "true" || ${data_5} === 1`).assign(a, !0);
          return;
        case "null":
          gen_10.elseIf(m._`${data_5} === "" || ${data_5} === 0 || ${data_5} === false`), gen_10.assign(a, null);
          return;
        case "array":
          gen_10.elseIf(m._`${i} === "string" || ${i} === "number"
              || ${i} === "boolean" || ${data_5} === null`).assign(a, m._`[${data_5}]`);
      }
    }
  }
  function Bc({
    gen: gen_11,
    parentData: parentData,
    parentDataProperty: parentDataProperty
  }, s) {
    gen_11.if(m._`${parentData} !== undefined`, () => gen_11.assign(m._`${parentData}[${parentDataProperty}]`, s));
  }
  function mr(e, t, r, s = Ue.Correct) {
    let n = s === Ue.Correct ? m.operators.EQ : m.operators.NEQ,
      o;
    switch (e) {
      case "null":
        return m._`${t} ${n} null`;
      case "array":
        o = m._`Array.isArray(${t})`;
        break;
      case "object":
        o = m._`${t} && typeof ${t} == "object" && !Array.isArray(${t})`;
        break;
      case "integer":
        o = i(m._`!(${t} % 1) && !isNaN(${t})`);
        break;
      case "number":
        o = i();
        break;
      default:
        return m._`typeof ${t} ${n} ${e}`;
    }
    return s === Ue.Correct ? o : m.not(o);
    function i(a = m.nil) {
      return m.and(m._`typeof ${t} == "number"`, a, r ? m._`isFinite(${t})` : m.nil);
    }
  }
  Vs.checkDataType = mr;
  function yr(e, t, r, s) {
    if (e.length === 1) return mr(e[0], t, r, s);
    let n,
      o = Pt.toHash(e);
    if (o.array && o.object) {
      let i = m._`typeof ${t} != "object"`;
      n = o.null ? i : m._`!${t} || ${i}`, delete o.null, delete o.array, delete o.object;
    } else n = m.nil;
    if (o.number) delete o.integer;
    for (let i in o) n = m.and(n, mr(i, t, r, s));
    return n;
  }
  Vs.checkDataTypes = yr;
  var Qc = {
    message: ({
      schema: schema_4
    }) => `must be ${schema_4}`,
    params: ({
      schema: schema_5,
      schemaValue: schemaValue_3
    }) => typeof schema_5 == "string" ? m._`{type: ${schema_5}}` : m._`{type: ${schemaValue_3}}`
  };
  function _r(e) {
    let t = Xc(e);
    Ms.reportError(t, Qc);
  }
  Vs.reportTypeError = _r;
  function Xc(it_8) {
    let {
        gen: gen_12,
        data: data_6,
        schema: s
      } = it_8,
      n = Pt.schemaRefOrVal(it_8, s, "type");
    return {
      gen: gen_12,
      keyword: "type",
      data: data_6,
      schema: s.type,
      schemaCode: n,
      schemaValue: n,
      parentSchema: s,
      params: {},
      it: it_8
    };
  }
});
var Hs = R(function (Fs) {
  Object.defineProperty(Fs, "__esModule", {
    value: !0
  });
  Fs.assignDefaults = void 0;
  var B = Dm(),
    Ks = ab();
  function nu(e, t) {
    let {
      properties: properties,
      items: items
    } = e.schema;
    if (t === "object" && properties) for (let n in properties) Us(e, n, properties[n].default);else if (t === "array" && Array.isArray(items)) items.forEach((item, index) => Us(e, index, item.default));
  }
  Fs.assignDefaults = nu;
  function Us(e, t, r) {
    let {
      gen: gen_13,
      compositeRule: compositeRule_3,
      data: data_7,
      opts: opts_5
    } = e;
    if (r === void 0) return;
    let a = B._`${data_7}${B.getProperty(t)}`;
    if (compositeRule_3) {
      Ks.checkStrictMode(e, `default is ignored for: ${a}`);
      return;
    }
    let c = B._`${a} === undefined`;
    if (opts_5.useDefaults === "empty") c = B._`${c} || ${a} === null || ${a} === ""`;
    gen_13.if(c, B._`${a} = ${B.stringify(r)}`);
  }
});
var Q = R(function (Bs) {
  Object.defineProperty(Bs, "__esModule", {
    value: !0
  });
  Bs.validateUnion = Bs.validateArray = Bs.usePattern = Bs.callValidateCode = Bs.schemaProperties = Bs.allSchemaProperties = Bs.noPropertyInData = Bs.propertyInData = Bs.isOwnProperty = Bs.hasPropFunc = Bs.reportMissingProp = Bs.checkMissingProp = Bs.checkReportMissingProp = void 0;
  var S = Dm(),
    Ke = ab(),
    $e = Eve(),
    Gs = ab();
  function ou(e, t) {
    let {
      gen: gen_14,
      data: data_8,
      it: it_9
    } = e;
    gen_14.if($r(gen_14, data_8, t, it_9.opts.ownProperties), () => {
      e.setParams({
        missingProperty: S._`${t}`
      }, !0), e.error();
    });
  }
  Bs.checkReportMissingProp = ou;
  function iu({
    gen: gen_15,
    data: data_9,
    it: {
      opts: opts_6
    }
  }, s, n) {
    return S.or(...s.map(item => S.and($r(gen_15, data_9, item, opts_6.ownProperties), S._`${n} = ${item}`)));
  }
  Bs.checkMissingProp = iu;
  function au(e, missingProperty) {
    e.setParams({
      missingProperty: missingProperty
    }, !0), e.error();
  }
  Bs.reportMissingProp = au;
  function Js(e) {
    return e.scopeValue("func", {
      ref: Object.prototype.hasOwnProperty,
      code: S._`Object.prototype.hasOwnProperty`
    });
  }
  Bs.hasPropFunc = Js;
  function gr(e, t, r) {
    return S._`${Js(e)}.call(${t}, ${r})`;
  }
  Bs.isOwnProperty = gr;
  function cu(e, t, r, s) {
    let n = S._`${t}${S.getProperty(r)} !== undefined`;
    return s ? S._`${n} && ${gr(e, t, r)}` : n;
  }
  Bs.propertyInData = cu;
  function $r(e, t, r, s) {
    let n = S._`${t}${S.getProperty(r)} === undefined`;
    return s ? S.or(n, S.not(gr(e, t, r))) : n;
  }
  Bs.noPropertyInData = $r;
  function Ws(e) {
    return e ? Object.keys(e).filter(item => item !== "__proto__") : [];
  }
  Bs.allSchemaProperties = Ws;
  function uu(e, t) {
    return Ws(t).filter(item => !Ke.alwaysValidSchema(e, t[item]));
  }
  Bs.schemaProperties = uu;
  function lu({
    schemaCode: schemaCode,
    data: data_10,
    it: {
      gen: gen_16,
      topSchemaRef: topSchemaRef_3,
      schemaPath: schemaPath_4,
      errorPath: errorPath_2
    },
    it: it_10
  }, a, c, u) {
    let l = u ? S._`${schemaCode}, ${data_10}, ${topSchemaRef_3}${schemaPath_4}` : data_10,
      f = [[$e.default.instancePath, S.strConcat($e.default.instancePath, errorPath_2)], [$e.default.parentData, it_10.parentData], [$e.default.parentDataProperty, it_10.parentDataProperty], [$e.default.rootData, $e.default.rootData]];
    if (it_10.opts.dynamicRef) f.push([$e.default.dynamicAnchors, $e.default.dynamicAnchors]);
    let b = S._`${l}, ${gen_16.object(...f)}`;
    return c !== S.nil ? S._`${a}.call(${c}, ${b})` : S._`${a}(${b})`;
  }
  Bs.callValidateCode = lu;
  var du = S._`new RegExp`;
  function fu({
    gen: gen_17,
    it: {
      opts: opts_7
    }
  }, r) {
    let s = opts_7.unicodeRegExp ? "u" : "",
      {
        regExp: regExp
      } = opts_7.code,
      ref_2 = regExp(r, s);
    return gen_17.scopeValue("pattern", {
      key: ref_2.toString(),
      ref: ref_2,
      code: S._`${regExp.code === "new RegExp" ? du : Gs.useFunc(gen_17, regExp)}(${r}, ${s})`
    });
  }
  Bs.usePattern = fu;
  function pu(e) {
    let {
        gen: gen_18,
        data: data_11,
        keyword: keyword_6,
        it: it_11
      } = e,
      o = gen_18.name("valid");
    if (it_11.allErrors) {
      let a = gen_18.let("valid", !0);
      return i(() => gen_18.assign(a, !1)), a;
    }
    return gen_18.var(o, !0), i(() => gen_18.break()), o;
    function i(a) {
      let c = gen_18.const("len", S._`${data_11}.length`);
      gen_18.forRange("i", 0, c, dataProp => {
        e.subschema({
          keyword: keyword_6,
          dataProp: dataProp,
          dataPropType: Ke.Type.Num
        }, o), gen_18.if(S.not(o), a);
      });
    }
  }
  Bs.validateArray = pu;
  function hu(e) {
    let {
      gen: gen_19,
      schema: schema_6,
      keyword: keyword_7,
      it: it_12
    } = e;
    if (!Array.isArray(schema_6)) throw Error("ajv implementation error");
    if (schema_6.some(item => Ke.alwaysValidSchema(it_12, item)) && !it_12.opts.unevaluated) return;
    let i = gen_19.let("valid", !1),
      a = gen_19.name("_valid");
    gen_19.block(() => schema_6.forEach((item, u) => {
      let l = e.subschema({
        keyword: keyword_7,
        schemaProp: u,
        compositeRule: !0
      }, a);
      if (gen_19.assign(i, S._`${i} || ${a}`), !e.mergeValidEvaluated(l, a)) gen_19.if(S.not(i));
    })), e.result(i, () => e.reset(), () => e.error(!0));
  }
  Bs.validateUnion = hu;
});
var sn = R(function (tn) {
  Object.defineProperty(tn, "__esModule", {
    value: !0
  });
  tn.validateKeywordUsage = tn.validSchemaType = tn.funcKeywordCode = tn.macroKeywordCode = void 0;
  var I = Dm(),
    Ce = Eve(),
    Ys = Q(),
    Zs = ct();
  function ku(e, t) {
    let {
        gen: gen_20,
        keyword: keyword_8,
        schema: schema_7,
        parentSchema: parentSchema_2,
        it: it_13
      } = e,
      schema_8 = t.macro.call(it_13.self, schema_7, parentSchema_2, it_13),
      topSchemaRef_4 = en(gen_20, keyword_8, schema_8);
    if (it_13.opts.validateSchema !== !1) it_13.self.validateSchema(schema_8, !0);
    let u = gen_20.name("valid");
    e.subschema({
      schema: schema_8,
      schemaPath: I.nil,
      errSchemaPath: `${it_13.errSchemaPath}/${keyword_8}`,
      topSchemaRef: topSchemaRef_4,
      compositeRule: !0
    }, u), e.pass(u, () => e.error(!0));
  }
  tn.macroKeywordCode = ku;
  function qu(e, t) {
    var r;
    let {
      gen: gen_21,
      keyword: keyword_9,
      schema: schema_9,
      parentSchema: parentSchema_3,
      $data: $data,
      it: it_14
    } = e;
    ju(it_14, t);
    let u = !$data && t.compile ? t.compile.call(it_14.self, schema_9, parentSchema_3, it_14) : t.validate,
      l = en(gen_21, keyword_9, u),
      f = gen_21.let("valid");
    e.block$data(f, b), e.ok((r = t.valid) !== null && r !== void 0 ? r : f);
    function b() {
      if (t.errors === !1) {
        if (p(), t.modifying) Xs(e);
        y(() => e.error());
      } else {
        let v = t.async ? _() : h();
        if (t.modifying) Xs(e);
        y(() => Ou(e, v));
      }
    }
    function _() {
      let v = gen_21.let("ruleErrs", null);
      return gen_21.try(() => p(I._`await `), O => gen_21.assign(f, !1).if(I._`${O} instanceof ${it_14.ValidationError}`, () => gen_21.assign(v, I._`${O}.errors`), () => gen_21.throw(O))), v;
    }
    function h() {
      let v = I._`${l}.errors`;
      return gen_21.assign(v, null), p(I.nil), v;
    }
    function p(v = t.async ? I._`await ` : I.nil) {
      let O = it_14.opts.passContext ? Ce.default.this : Ce.default.self,
        q = !("compile" in t && !$data || t.schema === !1);
      gen_21.assign(f, I._`${v}${Ys.callValidateCode(e, l, O, q)}`, t.modifying);
    }
    function y(v) {
      var O;
      gen_21.if(I.not((O = t.valid) !== null && O !== void 0 ? O : f), v);
    }
  }
  tn.funcKeywordCode = qu;
  function Xs(e) {
    let {
      gen: gen_22,
      data: data_12,
      it: it_15
    } = e;
    gen_22.if(it_15.parentData, () => gen_22.assign(data_12, I._`${it_15.parentData}[${it_15.parentDataProperty}]`));
  }
  function Ou(e, t) {
    let {
      gen: gen_23
    } = e;
    gen_23.if(I._`Array.isArray(${t})`, () => {
      gen_23.assign(Ce.default.vErrors, I._`${Ce.default.vErrors} === null ? ${t} : ${Ce.default.vErrors}.concat(${t})`).assign(Ce.default.errors, I._`${Ce.default.vErrors}.length`), Zs.extendErrors(e);
    }, () => e.error());
  }
  function ju({
    schemaEnv: schemaEnv_2
  }, t) {
    if (t.async && !schemaEnv_2.$async) throw Error("async keyword in sync schema");
  }
  function en(e, t, ref_3) {
    if (ref_3 === void 0) throw Error(`keyword "${t}" failed to compile`);
    return e.scopeValue("keyword", typeof ref_3 == "function" ? {
      ref: ref_3
    } : {
      ref: ref_3,
      code: I.stringify(ref_3)
    });
  }
  function xu(e, t, r = !1) {
    return !t.length || t.some(item => item === "array" ? Array.isArray(e) : item === "object" ? e && typeof e == "object" && !Array.isArray(e) : typeof e == item || r && typeof e > "u");
  }
  tn.validSchemaType = xu;
  function Ru({
    schema: schema_10,
    opts: opts_8,
    self: self_3,
    errSchemaPath: errSchemaPath_2
  }, n, o) {
    if (Array.isArray(n.keyword) ? !n.keyword.includes(o) : n.keyword !== o) throw Error("ajv implementation error");
    let dependencies = n.dependencies;
    if (dependencies === null || dependencies === void 0 ? void 0 : dependencies.some(item => !Object.prototype.hasOwnProperty.call(schema_10, item))) throw Error(`parent schema must have dependencies of ${o}: ${dependencies.join(",")}`);
    if (n.validateSchema) {
      if (!n.validateSchema(schema_10[o])) {
        let c = `keyword "${o}" value is invalid at path "${errSchemaPath_2}": ` + self_3.errorsText(n.validateSchema.errors);
        if (opts_8.validateSchema === "log") self_3.logger.error(c);else throw Error(c);
      }
    }
  }
  tn.validateKeywordUsage = Ru;
});
var an = R(function (nn) {
  Object.defineProperty(nn, "__esModule", {
    value: !0
  });
  nn.extendSubschemaMode = nn.extendSubschemaData = nn.getSubschema = void 0;
  var K = Dm(),
    Nt = ab();
  function Mu(e, {
    keyword: keyword_10,
    schemaProp: schemaProp,
    schema: schema_11,
    schemaPath: schemaPath_5,
    errSchemaPath: errSchemaPath_3,
    topSchemaRef: topSchemaRef_5
  }) {
    if (keyword_10 !== void 0 && schema_11 !== void 0) throw Error('both "keyword" and "schema" passed, only one allowed');
    if (keyword_10 !== void 0) {
      let schema_12 = e.schema[keyword_10];
      return schemaProp === void 0 ? {
        schema: schema_12,
        schemaPath: K._`${e.schemaPath}${K.getProperty(keyword_10)}`,
        errSchemaPath: `${e.errSchemaPath}/${keyword_10}`
      } : {
        schema: schema_12[schemaProp],
        schemaPath: K._`${e.schemaPath}${K.getProperty(keyword_10)}${K.getProperty(schemaProp)}`,
        errSchemaPath: `${e.errSchemaPath}/${keyword_10}/${Nt.escapeFragment(schemaProp)}`
      };
    }
    if (schema_11 !== void 0) {
      if (schemaPath_5 === void 0 || errSchemaPath_3 === void 0 || topSchemaRef_5 === void 0) throw Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: schema_11,
        schemaPath: schemaPath_5,
        topSchemaRef: topSchemaRef_5,
        errSchemaPath: errSchemaPath_3
      };
    }
    throw Error('either "keyword" or "schema" must be passed');
  }
  nn.getSubschema = Mu;
  function Au(e, t, {
    dataProp: dataProp_2,
    dataPropType: dataPropType,
    data: data_13,
    dataTypes: dataTypes,
    propertyName: propertyName_2
  }) {
    if (data_13 !== void 0 && dataProp_2 !== void 0) throw Error('both "data" and "dataProp" passed, only one allowed');
    let {
      gen: gen_24
    } = t;
    if (dataProp_2 !== void 0) {
      let {
          errorPath: errorPath_3,
          dataPathArr: dataPathArr,
          opts: opts_9
        } = t,
        b = gen_24.let("data", K._`${t.data}${K.getProperty(dataProp_2)}`, !0);
      c(b), e.errorPath = K.str`${errorPath_3}${Nt.getErrorPath(dataProp_2, dataPropType, opts_9.jsPropertySyntax)}`, e.parentDataProperty = K._`${dataProp_2}`, e.dataPathArr = [...dataPathArr, e.parentDataProperty];
    }
    if (data_13 !== void 0) {
      let u = data_13 instanceof K.Name ? data_13 : gen_24.let("data", data_13, !0);
      if (c(u), propertyName_2 !== void 0) e.propertyName = propertyName_2;
    }
    if (dataTypes) e.dataTypes = dataTypes;
    function c(u) {
      e.data = u, e.dataLevel = t.dataLevel + 1, e.dataTypes = [], t.definedProperties = new Set(), e.parentData = t.data, e.dataNames = [...t.dataNames, u];
    }
  }
  nn.extendSubschemaData = Au;
  function Du(e, {
    jtdDiscriminator: jtdDiscriminator,
    jtdMetadata: jtdMetadata,
    compositeRule: compositeRule_4,
    createErrors: createErrors_2,
    allErrors: allErrors_3
  }) {
    if (compositeRule_4 !== void 0) e.compositeRule = compositeRule_4;
    if (createErrors_2 !== void 0) e.createErrors = createErrors_2;
    if (allErrors_3 !== void 0) e.allErrors = allErrors_3;
    e.jtdDiscriminator = jtdDiscriminator, e.jtdMetadata = jtdMetadata;
  }
  nn.extendSubschemaMode = Du;
});
var un = R(function (nm, cn) {
  var ve = cn.exports = function exports(e, t, r) {
    if (typeof t == "function") r = t, t = {};
    r = t.cb || r;
    var s = typeof r == "function" ? r : r.pre || function () {},
      n = r.post || function () {};
    kt(t, s, n, e, "", e);
  };
  ve.keywords = {
    additionalItems: !0,
    items: !0,
    contains: !0,
    additionalProperties: !0,
    propertyNames: !0,
    not: !0,
    if: !0,
    then: !0,
    else: !0
  };
  ve.arrayKeywords = {
    items: !0,
    allOf: !0,
    anyOf: !0,
    oneOf: !0
  };
  ve.propsKeywords = {
    $defs: !0,
    definitions: !0,
    properties: !0,
    patternProperties: !0,
    dependencies: !0
  };
  ve.skipKeywords = {
    default: !0,
    enum: !0,
    const: !0,
    required: !0,
    maximum: !0,
    minimum: !0,
    exclusiveMaximum: !0,
    exclusiveMinimum: !0,
    multipleOf: !0,
    maxLength: !0,
    minLength: !0,
    pattern: !0,
    format: !0,
    maxItems: !0,
    minItems: !0,
    uniqueItems: !0,
    maxProperties: !0,
    minProperties: !0
  };
  function kt(e, t, r, s, n, o, i, a, c, u) {
    if (s && typeof s == "object" && !Array.isArray(s)) {
      t(s, n, o, i, a, c, u);
      for (var l in s) {
        var f = s[l];
        if (Array.isArray(f)) {
          if (l in ve.arrayKeywords) for (var b = 0; b < f.length; b++) kt(e, t, r, f[b], n + "/" + l + "/" + b, o, n, l, s, b);
        } else if (l in ve.propsKeywords) {
          if (f && typeof f == "object") for (var _ in f) kt(e, t, r, f[_], n + "/" + l + "/" + Uu(_), o, n, l, s, _);
        } else if (l in ve.keywords || e.allKeys && !(l in ve.skipKeywords)) kt(e, t, r, f, n + "/" + l, o, n, l, s);
      }
      r(s, n, o, i, a, c, u);
    }
  }
  function Uu(e) {
    return e.replace(/~/g, "~0").replace(/\//g, "~1");
  }
});
var lt = R(function (hn) {
  Object.defineProperty(hn, "__esModule", {
    value: !0
  });
  hn.getSchemaRefs = hn.resolveUrl = hn.normalizeId = hn._getFullPath = hn.getFullPath = hn.inlineRef = void 0;
  var ln = ab(),
    Ku = Fvo(),
    Fu = un(),
    Lu = new Set(["type", "format", "pattern", "maxLength", "minLength", "maxProperties", "minProperties", "maxItems", "minItems", "maximum", "minimum", "uniqueItems", "multipleOf", "required", "enum", "const"]);
  function Hu(e, t = !0) {
    if (typeof e == "boolean") return !0;
    if (t === !0) return !vr(e);
    if (!t) return !1;
    return dn(e) <= t;
  }
  hn.inlineRef = Hu;
  var Gu = new Set(["$ref", "$recursiveRef", "$recursiveAnchor", "$dynamicRef", "$dynamicAnchor"]);
  function vr(e) {
    for (let t in e) {
      if (Gu.has(t)) return !0;
      let r = e[t];
      if (Array.isArray(r) && r.some(vr)) return !0;
      if (typeof r == "object" && vr(r)) return !0;
    }
    return !1;
  }
  function dn(e) {
    let t = 0;
    for (let r in e) {
      if (r === "$ref") return 1 / 0;
      if (t++, Lu.has(r)) continue;
      if (typeof e[r] == "object") ln.eachItem(e[r], s => t += dn(s));
      if (t === 1 / 0) return 1 / 0;
    }
    return t;
  }
  function fn(e, t = "", r) {
    if (r !== !1) t = Fe(t);
    let s = e.parse(t);
    return pn(e, s);
  }
  hn.getFullPath = fn;
  function pn(e, t) {
    return e.serialize(t).split("#")[0] + "#";
  }
  hn._getFullPath = pn;
  var Ju = /#\/?$/;
  function Fe(e) {
    return e ? e.replace(Ju, "") : "";
  }
  hn.normalizeId = Fe;
  function Wu(e, t, r) {
    return r = Fe(r), e.resolve(t, r);
  }
  hn.resolveUrl = Wu;
  var Bu = /^[a-z_][-a-z0-9._]*$/i;
  function Qu(e, t) {
    if (typeof e == "boolean") return {};
    let {
        schemaId: schemaId,
        uriResolver: uriResolver
      } = this.opts,
      n = Fe(e[schemaId] || t),
      o = {
        "": n
      },
      i = fn(uriResolver, n, !1),
      a = {},
      c = new Set();
    return Fu(e, {
      allKeys: !0
    }, (f, b, _, h) => {
      if (h === void 0) return;
      let p = i + b,
        y = o[h];
      if (typeof f[schemaId] == "string") y = v.call(this, f[schemaId]);
      O.call(this, f.$anchor), O.call(this, f.$dynamicAnchor), o[b] = y;
      function v(q) {
        let M = this.opts.uriResolver.resolve;
        if (q = Fe(y ? M(y, q) : q), c.has(q)) throw l(q);
        c.add(q);
        let N = this.refs[q];
        if (typeof N == "string") N = this.refs[N];
        if (typeof N == "object") u(f, N.schema, q);else if (q !== Fe(p)) if (q[0] === "#") u(f, a[q], q), a[q] = f;else this.refs[q] = p;
        return q;
      }
      function O(q) {
        if (typeof q == "string") {
          if (!Bu.test(q)) throw Error(`invalid anchor "${q}"`);
          v.call(this, `#${q}`);
        }
      }
    }), a;
    function u(f, b, _) {
      if (b !== void 0 && !Ku(f, b)) throw l(_);
    }
    function l(f) {
      return Error(`reference "${f}" resolves to more than one schema`);
    }
  }
  hn.getSchemaRefs = Qu;
});
var dnn = R(function (jn) {
  Object.defineProperty(jn, "__esModule", {
    value: !0
  });
  jn.getData = jn.KeywordCxt = jn.validateFunctionCode = void 0;
  var Ot = ks(),
    qt = ut(),
    He = hr(),
    we = ut(),
    $n = Hs(),
    re = sn(),
    Le = an(),
    d = Dm(),
    P = Eve(),
    vn = lt(),
    F = ab(),
    te = ct();
  function rl(e) {
    if (En(e)) {
      if (Sn(e), bn(e)) {
        ol(e);
        return;
      }
    }
    wn(e, () => Ot.topBoolOrEmptySchema(e));
  }
  jn.validateFunctionCode = rl;
  function wn({
    gen: gen_25,
    validateName: validateName_3,
    schema: schema_13,
    schemaEnv: schemaEnv_3,
    opts: opts_10
  }, o) {
    if (opts_10.code.es5) gen_25.func(validateName_3, d._`${P.default.data}, ${P.default.valCxt}`, schemaEnv_3.$async, () => {
      gen_25.code(d._`"use strict"; ${yn(schema_13, opts_10)}`), nl(gen_25, opts_10), gen_25.code(o);
    });else gen_25.func(validateName_3, d._`${P.default.data}, ${sl(opts_10)}`, schemaEnv_3.$async, () => gen_25.code(yn(schema_13, opts_10)).code(o));
  }
  function sl(e) {
    return d._`{${P.default.instancePath}="", ${P.default.parentData}, ${P.default.parentDataProperty}, ${P.default.rootData}=${P.default.data}${e.dynamicRef ? d._`, ${P.default.dynamicAnchors}={}` : d.nil}}={}`;
  }
  function nl(e, t) {
    e.if(P.default.valCxt, () => {
      if (e.var(P.default.instancePath, d._`${P.default.valCxt}.${P.default.instancePath}`), e.var(P.default.parentData, d._`${P.default.valCxt}.${P.default.parentData}`), e.var(P.default.parentDataProperty, d._`${P.default.valCxt}.${P.default.parentDataProperty}`), e.var(P.default.rootData, d._`${P.default.valCxt}.${P.default.rootData}`), t.dynamicRef) e.var(P.default.dynamicAnchors, d._`${P.default.valCxt}.${P.default.dynamicAnchors}`);
    }, () => {
      if (e.var(P.default.instancePath, d._`""`), e.var(P.default.parentData, d._`undefined`), e.var(P.default.parentDataProperty, d._`undefined`), e.var(P.default.rootData, P.default.data), t.dynamicRef) e.var(P.default.dynamicAnchors, d._`{}`);
    });
  }
  function ol(e) {
    let {
      schema: schema_14,
      opts: opts_11,
      gen: gen_26
    } = e;
    wn(e, () => {
      if (opts_11.$comment && schema_14.$comment) Nn(e);
      if (ll(e), gen_26.let(P.default.vErrors, null), gen_26.let(P.default.errors, 0), opts_11.unevaluated) il(e);
      Pn(e), pl(e);
    });
    return;
  }
  function il(e) {
    let {
      gen: gen_27,
      validateName: validateName_4
    } = e;
    e.evaluated = gen_27.const("evaluated", d._`${validateName_4}.evaluated`), gen_27.if(d._`${e.evaluated}.dynamicProps`, () => gen_27.assign(d._`${e.evaluated}.props`, d._`undefined`)), gen_27.if(d._`${e.evaluated}.dynamicItems`, () => gen_27.assign(d._`${e.evaluated}.items`, d._`undefined`));
  }
  function yn(e, t) {
    let r = typeof e == "object" && e[t.schemaId];
    return r && (t.code.source || t.code.process) ? d._`/*# sourceURL=${r} */` : d.nil;
  }
  function al(e, t) {
    if (En(e)) {
      if (Sn(e), bn(e)) {
        cl(e, t);
        return;
      }
    }
    Ot.boolOrEmptySchema(e, t);
  }
  function bn({
    schema: schema_15,
    self: self_4
  }) {
    if (typeof schema_15 == "boolean") return !schema_15;
    for (let r in schema_15) if (self_4.RULES.all[r]) return !0;
    return !1;
  }
  function En(e) {
    return typeof e.schema != "boolean";
  }
  function cl(e, t) {
    let {
      schema: schema_16,
      gen: gen_28,
      opts: opts_12
    } = e;
    if (opts_12.$comment && schema_16.$comment) Nn(e);
    dl(e), fl(e);
    let o = gen_28.const("_errs", P.default.errors);
    Pn(e, o), gen_28.var(t, d._`${o} === ${P.default.errors}`);
  }
  function Sn(e) {
    F.checkUnknownRules(e), ul(e);
  }
  function Pn(e, t) {
    if (e.opts.jtd) return _n(e, [], !1, t);
    let r = qt.getSchemaTypes(e.schema),
      s = qt.coerceAndCheckDataType(e, r);
    _n(e, r, !s, t);
  }
  function ul(e) {
    let {
      schema: schema_17,
      errSchemaPath: errSchemaPath_4,
      opts: opts_13,
      self: self_5
    } = e;
    if (schema_17.$ref && opts_13.ignoreKeywordsWithRef && F.schemaHasRulesButRef(schema_17, self_5.RULES)) self_5.logger.warn(`$ref: keywords ignored in schema at path "${errSchemaPath_4}"`);
  }
  function ll(e) {
    let {
      schema: schema_18,
      opts: opts_14
    } = e;
    if (schema_18.default !== void 0 && opts_14.useDefaults && opts_14.strictSchema) F.checkStrictMode(e, "default is ignored in the schema root");
  }
  function dl(e) {
    let t = e.schema[e.opts.schemaId];
    if (t) e.baseId = vn.resolveUrl(e.opts.uriResolver, e.baseId, t);
  }
  function fl(e) {
    if (e.schema.$async && !e.schemaEnv.$async) throw Error("async schema in sync schema");
  }
  function Nn({
    gen: gen_29,
    schemaEnv: schemaEnv_4,
    schema: schema_19,
    errSchemaPath: errSchemaPath_5,
    opts: opts_15
  }) {
    let $comment = schema_19.$comment;
    if (opts_15.$comment === !0) gen_29.code(d._`${P.default.self}.logger.log(${$comment})`);else if (typeof opts_15.$comment == "function") {
      let i = d.str`${errSchemaPath_5}/$comment`,
        a = gen_29.scopeValue("root", {
          ref: schemaEnv_4.root
        });
      gen_29.code(d._`${P.default.self}.opts.$comment(${$comment}, ${i}, ${a}.schema)`);
    }
  }
  function pl(e) {
    let {
      gen: gen_30,
      schemaEnv: schemaEnv_5,
      validateName: validateName_5,
      ValidationError: ValidationError,
      opts: opts_16
    } = e;
    if (schemaEnv_5.$async) gen_30.if(d._`${P.default.errors} === 0`, () => gen_30.return(P.default.data), () => gen_30.throw(d._`new ${ValidationError}(${P.default.vErrors})`));else {
      if (gen_30.assign(d._`${validateName_5}.errors`, P.default.vErrors), opts_16.unevaluated) hl(e);
      gen_30.return(d._`${P.default.errors} === 0`);
    }
  }
  function hl({
    gen: gen_31,
    evaluated: evaluated,
    props: props,
    items: items_2
  }) {
    if (props instanceof d.Name) gen_31.assign(d._`${evaluated}.props`, props);
    if (items_2 instanceof d.Name) gen_31.assign(d._`${evaluated}.items`, items_2);
  }
  function _n(e, t, r, s) {
    let {
        gen: gen_32,
        schema: schema_20,
        data: data_14,
        allErrors: allErrors_4,
        opts: opts_17,
        self: self_6
      } = e,
      {
        RULES: RULES
      } = self_6;
    if (schema_20.$ref && (opts_17.ignoreKeywordsWithRef || !F.schemaHasRulesButRef(schema_20, RULES))) {
      gen_32.block(() => qn(e, "$ref", RULES.all.$ref.definition));
      return;
    }
    if (!opts_17.jtd) ml(e, t);
    gen_32.block(() => {
      for (let b of RULES.rules) f(b);
      f(RULES.post);
    });
    function f(b) {
      if (!He.shouldUseGroup(schema_20, b)) return;
      if (b.type) {
        if (gen_32.if(we.checkDataType(b.type, data_14, opts_17.strictNumbers)), gn(e, b), t.length === 1 && t[0] === b.type && r) gen_32.else(), we.reportTypeError(e);
        gen_32.endIf();
      } else gn(e, b);
      if (!allErrors_4) gen_32.if(d._`${P.default.errors} === ${s || 0}`);
    }
  }
  function gn(e, t) {
    let {
      gen: gen_33,
      schema: schema_21,
      opts: {
        useDefaults: useDefaults
      }
    } = e;
    if (useDefaults) $n.assignDefaults(e, t.type);
    gen_33.block(() => {
      for (let o of t.rules) if (He.shouldUseRule(schema_21, o)) qn(e, o.keyword, o.definition, t.type);
    });
  }
  function ml(e, t) {
    if (e.schemaEnv.meta || !e.opts.strictTypes) return;
    if (yl(e, t), !e.opts.allowUnionTypes) _l(e, t);
    gl(e, e.dataTypes);
  }
  function yl(e, t) {
    if (!t.length) return;
    if (!e.dataTypes.length) {
      e.dataTypes = t;
      return;
    }
    t.forEach(item => {
      if (!kn(e.dataTypes, item)) wr(e, `type "${item}" not allowed by context "${e.dataTypes.join(",")}"`);
    }), vl(e, t);
  }
  function _l(e, t) {
    if (t.length > 1 && !(t.length === 2 && t.includes("null"))) wr(e, "use allowUnionTypes to allow union type keyword");
  }
  function gl(e, t) {
    let r = e.self.RULES.all;
    for (let s in r) {
      let n = r[s];
      if (typeof n == "object" && He.shouldUseRule(e.schema, n)) {
        let {
          type: type
        } = n.definition;
        if (type.length && !type.some(item => $l(t, item))) wr(e, `missing type "${type.join(",")}" for keyword "${s}"`);
      }
    }
  }
  function $l(e, t) {
    return e.includes(t) || t === "number" && e.includes("integer");
  }
  function kn(e, t) {
    return e.includes(t) || t === "integer" && e.includes("number");
  }
  function vl(e, t) {
    let r = [];
    for (let s of e.dataTypes) if (kn(t, s)) r.push(s);else if (t.includes("integer") && s === "number") r.push("integer");
    e.dataTypes = r;
  }
  function wr(e, t) {
    let r = e.schemaEnv.baseId + e.errSchemaPath;
    t += ` at "${r}" (strictTypes)`, F.checkStrictMode(e, t, e.opts.strictTypes);
  }
  class br {
    constructor(e, t, r) {
      if (re.validateKeywordUsage(e, t, r), this.gen = e.gen, this.allErrors = e.allErrors, this.keyword = r, this.data = e.data, this.schema = e.schema[r], this.$data = t.$data && e.opts.$data && this.schema && this.schema.$data, this.schemaValue = F.schemaRefOrVal(e, this.schema, r, this.$data), this.schemaType = t.schemaType, this.parentSchema = e.schema, this.params = {}, this.it = e, this.def = t, this.$data) this.schemaCode = e.gen.const("vSchema", On(this.$data, e));else if (this.schemaCode = this.schemaValue, !re.validSchemaType(this.schema, t.schemaType, t.allowUndefined)) throw Error(`${r} value must be ${JSON.stringify(t.schemaType)}`);
      if ("code" in t ? t.trackErrors : t.errors !== !1) this.errsCount = e.gen.const("_errs", P.default.errors);
    }
    result(e, t, r) {
      this.failResult(d.not(e), t, r);
    }
    failResult(e, t, r) {
      if (this.gen.if(e), r) r();else this.error();
      if (t) {
        if (this.gen.else(), t(), this.allErrors) this.gen.endIf();
      } else if (this.allErrors) this.gen.endIf();else this.gen.else();
    }
    pass(e, t) {
      this.failResult(d.not(e), void 0, t);
    }
    fail(e) {
      if (e === void 0) {
        if (this.error(), !this.allErrors) this.gen.if(!1);
        return;
      }
      if (this.gen.if(e), this.error(), this.allErrors) this.gen.endIf();else this.gen.else();
    }
    fail$data(e) {
      if (!this.$data) return this.fail(e);
      let {
        schemaCode: schemaCode_2
      } = this;
      this.fail(d._`${schemaCode_2} !== undefined && (${d.or(this.invalid$data(), e)})`);
    }
    error(e, t, r) {
      if (t) {
        this.setParams(t), this._error(e, r), this.setParams({});
        return;
      }
      this._error(e, r);
    }
    _error(e, t) {
      (e ? te.reportExtraError : te.reportError)(this, this.def.error, t);
    }
    $dataError() {
      te.reportError(this, this.def.$dataError || te.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0) throw Error('add "trackErrors" to keyword definition');
      te.resetErrorsCount(this.gen, this.errsCount);
    }
    ok(e) {
      if (!this.allErrors) this.gen.if(e);
    }
    setParams(e, t) {
      if (t) Object.assign(this.params, e);else this.params = e;
    }
    block$data(e, t, r = d.nil) {
      this.gen.block(() => {
        this.check$data(e, r), t();
      });
    }
    check$data(e = d.nil, t = d.nil) {
      if (!this.$data) return;
      let {
        gen: gen_34,
        schemaCode: schemaCode_3,
        schemaType: schemaType_2,
        def: def
      } = this;
      if (gen_34.if(d.or(d._`${schemaCode_3} === undefined`, t)), e !== d.nil) gen_34.assign(e, !0);
      if (schemaType_2.length || def.validateSchema) {
        if (gen_34.elseIf(this.invalid$data()), this.$dataError(), e !== d.nil) gen_34.assign(e, !1);
      }
      gen_34.else();
    }
    invalid$data() {
      let {
        gen: gen_35,
        schemaCode: schemaCode_4,
        schemaType: schemaType_3,
        def: def_2,
        it: it_16
      } = this;
      return d.or(o(), i());
      function o() {
        if (schemaType_3.length) {
          if (!(schemaCode_4 instanceof d.Name)) throw Error("ajv implementation error");
          let a = Array.isArray(schemaType_3) ? schemaType_3 : [schemaType_3];
          return d._`${we.checkDataTypes(a, schemaCode_4, it_16.opts.strictNumbers, we.DataType.Wrong)}`;
        }
        return d.nil;
      }
      function i() {
        if (def_2.validateSchema) {
          let a = gen_35.scopeValue("validate$data", {
            ref: def_2.validateSchema
          });
          return d._`!${a}(${schemaCode_4})`;
        }
        return d.nil;
      }
    }
    subschema(e, t) {
      let r = Le.getSubschema(this.it, e);
      Le.extendSubschemaData(r, this.it, e), Le.extendSubschemaMode(r, e);
      let s = {
        ...this.it,
        ...r,
        items: void 0,
        props: void 0
      };
      return al(s, t), s;
    }
    mergeEvaluated(e, t) {
      let {
        it: it_17,
        gen: gen_36
      } = this;
      if (!it_17.opts.unevaluated) return;
      if (it_17.props !== !0 && e.props !== void 0) it_17.props = F.mergeEvaluated.props(gen_36, e.props, it_17.props, t);
      if (it_17.items !== !0 && e.items !== void 0) it_17.items = F.mergeEvaluated.items(gen_36, e.items, it_17.items, t);
    }
    mergeValidEvaluated(e, t) {
      let {
        it: it_18,
        gen: gen_37
      } = this;
      if (it_18.opts.unevaluated && (it_18.props !== !0 || it_18.items !== !0)) return gen_37.if(t, () => this.mergeEvaluated(e, d.Name)), !0;
    }
  }
  jn.KeywordCxt = br;
  function qn(e, t, r, s) {
    let n = new br(e, r, t);
    if ("code" in r) r.code(n, s);else if (n.$data && r.validate) re.funcKeywordCode(n, r);else if ("macro" in r) re.macroKeywordCode(n, r);else if (r.compile || r.validate) re.funcKeywordCode(n, r);
  }
  var wl = /^\/(?:[^~]|~0|~1)*$/,
    bl = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function On(e, {
    dataLevel: dataLevel,
    dataNames: dataNames,
    dataPathArr: dataPathArr_2
  }) {
    let n, o;
    if (e === "") return P.default.rootData;
    if (e[0] === "/") {
      if (!wl.test(e)) throw Error(`Invalid JSON-pointer: ${e}`);
      n = e, o = P.default.rootData;
    } else {
      let u = bl.exec(e);
      if (!u) throw Error(`Invalid JSON-pointer: ${e}`);
      let l = +u[1];
      if (n = u[2], n === "#") {
        if (l >= dataLevel) throw Error(c("property/index", l));
        return dataPathArr_2[dataLevel - l];
      }
      if (l > dataLevel) throw Error(c("data", l));
      if (o = dataNames[dataLevel - l], !n) return o;
    }
    let i = o,
      a = n.split("/");
    for (let u of a) if (u) o = d._`${o}${d.getProperty(F.unescapeJsonPointer(u))}`, i = d._`${i} && ${o}`;
    return i;
    function c(u, l) {
      return `Cannot access ${u} ${l} levels up, current level is ${dataLevel}`;
    }
  }
  jn.getData = On;
});
var hWn = R(function (In) {
  Object.defineProperty(In, "__esModule", {
    value: !0
  });
  class Rn extends Error {
    constructor(e) {
      super("validation failed");
      this.errors = e, this.ajv = this.validation = !0;
    }
  }
  In.default = Rn;
});
var cnn = R(function (Cn) {
  Object.defineProperty(Cn, "__esModule", {
    value: !0
  });
  var Ge = lt();
  class Tn extends Error {
    constructor(e, t, r, s) {
      super(s || `can't resolve reference ${r} from id ${t}`);
      this.missingRef = Ge.resolveUrl(e, t, r), this.missingSchema = Ge.normalizeId(Ge.getFullPath(e, this.missingRef));
    }
  }
  Cn.default = Tn;
});
var yWn = R(function (Dn) {
  Object.defineProperty(Dn, "__esModule", {
    value: !0
  });
  Dn.resolveSchema = Dn.getCompilingSchema = Dn.resolveRef = Dn.compileSchema = Dn.SchemaEnv = void 0;
  var V = Dm(),
    kl = hWn(),
    Me = Eve(),
    z = lt(),
    jt = ab(),
    Mn = dnn();
  class dt {
    constructor(e) {
      var t;
      this.refs = {}, this.dynamicAnchors = {};
      let r;
      if (typeof e.schema == "object") r = e.schema;
      this.schema = e.schema, this.schemaId = e.schemaId, this.root = e.root || this, this.baseId = (t = e.baseId) !== null && t !== void 0 ? t : z.normalizeId(r === null || r === void 0 ? void 0 : r[e.schemaId || "$id"]), this.schemaPath = e.schemaPath, this.localRefs = e.localRefs, this.meta = e.meta, this.$async = r === null || r === void 0 ? void 0 : r.$async, this.refs = {};
    }
  }
  Dn.SchemaEnv = dt;
  function Sr(schemaEnv_6) {
    let t = An.call(this, schemaEnv_6);
    if (t) return t;
    let rootId = z.getFullPath(this.opts.uriResolver, schemaEnv_6.root.baseId),
      {
        es5: es5_2,
        lines: lines
      } = this.opts.code,
      {
        ownProperties: ownProperties
      } = this.opts,
      gen_38 = new V.CodeGen(this.scope, {
        es5: es5_2,
        lines: lines,
        ownProperties: ownProperties
      }),
      ValidationError_2;
    if (schemaEnv_6.$async) ValidationError_2 = gen_38.scopeValue("Error", {
      ref: kl.default,
      code: V._`require("ajv/dist/runtime/validation_error").default`
    });
    let validateName_6 = gen_38.scopeName("validate");
    schemaEnv_6.validateName = validateName_6;
    let u = {
        gen: gen_38,
        allErrors: this.opts.allErrors,
        data: Me.default.data,
        parentData: Me.default.parentData,
        parentDataProperty: Me.default.parentDataProperty,
        dataNames: [Me.default.data],
        dataPathArr: [V.nil],
        dataLevel: 0,
        dataTypes: [],
        definedProperties: new Set(),
        topSchemaRef: gen_38.scopeValue("schema", this.opts.code.source === !0 ? {
          ref: schemaEnv_6.schema,
          code: V.stringify(schemaEnv_6.schema)
        } : {
          ref: schemaEnv_6.schema
        }),
        validateName: validateName_6,
        ValidationError: ValidationError_2,
        schema: schemaEnv_6.schema,
        schemaEnv: schemaEnv_6,
        rootId: rootId,
        baseId: schemaEnv_6.baseId || rootId,
        schemaPath: V.nil,
        errSchemaPath: schemaEnv_6.schemaPath || (this.opts.jtd ? "" : "#"),
        errorPath: V._`""`,
        opts: this.opts,
        self: this
      },
      l;
    try {
      this._compilations.add(schemaEnv_6), Mn.validateFunctionCode(u), gen_38.optimize(this.opts.code.optimize);
      let validateCode = gen_38.toString();
      if (l = `${gen_38.scopeRefs(Me.default.scope)}return ${validateCode}`, this.opts.code.process) l = this.opts.code.process(l, schemaEnv_6);
      let ref_4 = Function(`${Me.default.self}`, `${Me.default.scope}`, l)(this, this.scope.get());
      if (this.scope.value(validateName_6, {
        ref: ref_4
      }), ref_4.errors = null, ref_4.schema = schemaEnv_6.schema, ref_4.schemaEnv = schemaEnv_6, schemaEnv_6.$async) ref_4.$async = !0;
      if (this.opts.code.source === !0) ref_4.source = {
        validateName: validateName_6,
        validateCode: validateCode,
        scopeValues: gen_38._values
      };
      if (this.opts.unevaluated) {
        let {
          props: props_2,
          items: items_3
        } = u;
        if (ref_4.evaluated = {
          props: props_2 instanceof V.Name ? void 0 : props_2,
          items: items_3 instanceof V.Name ? void 0 : items_3,
          dynamicProps: props_2 instanceof V.Name,
          dynamicItems: items_3 instanceof V.Name
        }, ref_4.source) ref_4.source.evaluated = V.stringify(ref_4.evaluated);
      }
      return schemaEnv_6.validate = ref_4, schemaEnv_6;
    } catch (f) {
      if (delete schemaEnv_6.validate, delete schemaEnv_6.validateName, l) this.logger.error("Error compiling schema, function code:", l);
      throw f;
    } finally {
      this._compilations.delete(schemaEnv_6);
    }
  }
  Dn.compileSchema = Sr;
  function ql(root, baseId, r) {
    var s;
    r = z.resolveUrl(this.opts.uriResolver, baseId, r);
    let n = root.refs[r];
    if (n) return n;
    let o = xl.call(this, root, r);
    if (o === void 0) {
      let schema_22 = (s = root.localRefs) === null || s === void 0 ? void 0 : s[r],
        {
          schemaId: schemaId_2
        } = this.opts;
      if (schema_22) o = new dt({
        schema: schema_22,
        schemaId: schemaId_2,
        root: root,
        baseId: baseId
      });
    }
    if (o === void 0) return;
    return root.refs[r] = Ol.call(this, o);
  }
  Dn.resolveRef = ql;
  function Ol(e) {
    if (z.inlineRef(e.schema, this.opts.inlineRefs)) return e.schema;
    return e.validate ? e : Sr.call(this, e);
  }
  function An(e) {
    for (let t of this._compilations) if (jl(t, e)) return t;
  }
  Dn.getCompilingSchema = An;
  function jl(e, t) {
    return e.schema === t.schema && e.root === t.root && e.baseId === t.baseId;
  }
  function xl(e, t) {
    let r;
    while (typeof (r = this.refs[t]) == "string") t = r;
    return r || this.schemas[t] || xt.call(this, e, t);
  }
  function xt(root_2, t) {
    let r = this.opts.uriResolver.parse(t),
      s = z._getFullPath(this.opts.uriResolver, r),
      baseId_2 = z.getFullPath(this.opts.uriResolver, root_2.baseId, void 0);
    if (Object.keys(root_2.schema).length > 0 && s === baseId_2) return Er.call(this, r, root_2);
    let o = z.normalizeId(s),
      i = this.refs[o] || this.schemas[o];
    if (typeof i == "string") {
      let a = xt.call(this, root_2, i);
      if (typeof (a === null || a === void 0 ? void 0 : a.schema) !== "object") return;
      return Er.call(this, r, a);
    }
    if (typeof (i === null || i === void 0 ? void 0 : i.schema) !== "object") return;
    if (!i.validate) Sr.call(this, i);
    if (o === z.normalizeId(t)) {
      let {
          schema: schema_23
        } = i,
        {
          schemaId: schemaId_3
        } = this.opts,
        u = schema_23[schemaId_3];
      if (u) baseId_2 = z.resolveUrl(this.opts.uriResolver, baseId_2, u);
      return new dt({
        schema: schema_23,
        schemaId: schemaId_3,
        root: root_2,
        baseId: baseId_2
      });
    }
    return Er.call(this, r, i);
  }
  Dn.resolveSchema = xt;
  var Rl = new Set(["properties", "patternProperties", "enum", "dependencies", "definitions"]);
  function Er(e, {
    baseId: baseId_3,
    schema: schema_24,
    root: root_3
  }) {
    var n;
    if (((n = e.fragment) === null || n === void 0 ? void 0 : n[0]) !== "/") return;
    for (let a of e.fragment.slice(1).split("/")) {
      if (typeof schema_24 === "boolean") return;
      let c = schema_24[jt.unescapeFragment(a)];
      if (c === void 0) return;
      schema_24 = c;
      let u = typeof schema_24 === "object" && schema_24[this.opts.schemaId];
      if (!Rl.has(a) && u) baseId_3 = z.resolveUrl(this.opts.uriResolver, baseId_3, u);
    }
    let o;
    if (typeof schema_24 != "boolean" && schema_24.$ref && !jt.schemaHasRulesButRef(schema_24, this.RULES)) {
      let a = z.resolveUrl(this.opts.uriResolver, baseId_3, schema_24.$ref);
      o = xt.call(this, root_3, a);
    }
    let {
      schemaId: schemaId_4
    } = this.opts;
    if (o = o || new dt({
      schema: schema_24,
      schemaId: schemaId_4,
      root: root_3,
      baseId: baseId_3
    }), o.schema !== o.root.schema) return o;
    return;
  }
});
var zn = R(function (lm, Al) {
  Al.exports = {
    $id: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#",
    description: "Meta-schema for $data reference (JSON AnySchema extension proposal)",
    type: "object",
    required: ["$data"],
    properties: {
      $data: {
        type: "string",
        anyOf: [{
          format: "relative-json-pointer"
        }, {
          format: "json-pointer"
        }]
      }
    },
    additionalProperties: !1
  };
});
var kr = R(function (dm, Gn) {
  var isUUID = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu),
    isIPv4 = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u),
    Pr = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu),
    Fn = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu),
    Vl = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
  function stringArrayToHexStripped(e) {
    let t = "",
      r = 0,
      s = 0;
    for (s = 0; s < e.length; s++) {
      if (r = e[s].charCodeAt(0), r === 48) continue;
      if (!(r >= 48 && r <= 57 || r >= 65 && r <= 70 || r >= 97 && r <= 102)) return "";
      t += e[s];
      break;
    }
    for (s += 1; s < e.length; s++) {
      if (r = e[s].charCodeAt(0), !(r >= 48 && r <= 57 || r >= 65 && r <= 70 || r >= 97 && r <= 102)) return "";
      t += e[s];
    }
    return t;
  }
  var nonSimpleDomain = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function Un(e) {
    return e.length = 0, !0;
  }
  function Ul(e, t, r) {
    if (e.length) {
      let s = stringArrayToHexStripped(e);
      if (s !== "") t.push(s);else return r.error = !0, !1;
      e.length = 0;
    }
    return !0;
  }
  function Kl(e) {
    let t = 0,
      r = {
        error: !1,
        address: "",
        zone: ""
      },
      s = [],
      n = [],
      o = !1,
      i = !1,
      a = Ul;
    for (let c = 0; c < e.length; c++) {
      let u = e[c];
      if (u === "[" || u === "]") continue;
      if (u === ":") {
        if (o === !0) i = !0;
        if (!a(n, s, r)) break;
        if (++t > 7) {
          r.error = !0;
          break;
        }
        if (c > 0 && e[c - 1] === ":") o = !0;
        s.push(":");
        continue;
      } else if (u === "%") {
        if (!a(n, s, r)) break;
        a = Un;
      } else {
        n.push(u);
        continue;
      }
    }
    if (n.length) if (a === Un) r.zone = n.join("");else if (i) s.push(n.join(""));else s.push(stringArrayToHexStripped(n));
    return r.address = s.join(""), r;
  }
  function normalizeIPv6(host) {
    if (Fl(host, ":") < 2) return {
      host: host,
      isIPV6: !1
    };
    let t = Kl(host);
    if (!t.error) {
      let {
        address: r,
        address: s
      } = t;
      if (t.zone) r += "%" + t.zone, s += "%25" + t.zone;
      return {
        host: r,
        isIPV6: !0,
        escapedHost: s
      };
    } else return {
      host: host,
      isIPV6: !1
    };
  }
  function Fl(e, t) {
    let r = 0;
    for (let s = 0; s < e.length; s++) if (e[s] === t) r++;
    return r;
  }
  function removeDotSegments(e) {
    let t = e,
      r = [],
      s = -1,
      n = 0;
    while (n = t.length) {
      if (n === 1) {
        if (t === ".") break;else if (t === "/") {
          r.push("/");
          break;
        } else {
          r.push(t);
          break;
        }
      } else if (n === 2) {
        if (t[0] === ".") {
          if (t[1] === ".") break;else if (t[1] === "/") {
            t = t.slice(2);
            continue;
          }
        } else if (t[0] === "/") {
          if (t[1] === "." || t[1] === "/") {
            r.push("/");
            break;
          }
        }
      } else if (n === 3) {
        if (t === "/..") {
          if (r.length !== 0) r.pop();
          r.push("/");
          break;
        }
      }
      if (t[0] === ".") {
        if (t[1] === ".") {
          if (t[2] === "/") {
            t = t.slice(3);
            continue;
          }
        } else if (t[1] === "/") {
          t = t.slice(2);
          continue;
        }
      } else if (t[0] === "/") {
        if (t[1] === ".") {
          if (t[2] === "/") {
            t = t.slice(2);
            continue;
          } else if (t[2] === ".") {
            if (t[3] === "/") {
              if (t = t.slice(3), r.length !== 0) r.pop();
              continue;
            }
          }
        }
      }
      if ((s = t.indexOf("/", 1)) === -1) {
        r.push(t);
        break;
      } else r.push(t.slice(0, s)), t = t.slice(s);
    }
    return r.join("");
  }
  var Hl = {
      "@": "%40",
      "/": "%2F",
      "?": "%3F",
      "#": "%23",
      ":": "%3A"
    },
    Gl = /[@/?#:]/g,
    Jl = /[@/?#]/g;
  function reescapeHostDelimiters(e, t) {
    let r = t ? Jl : Gl;
    return r.lastIndex = 0, e.replace(r, s => Hl[s]);
  }
  function normalizePercentEncoding(e, t = !1) {
    if (e.indexOf("%") === -1) return e;
    let r = "";
    for (let s = 0; s < e.length; s++) {
      if (e[s] === "%" && s + 2 < e.length) {
        let n = e.slice(s + 1, s + 3);
        if (Pr(n)) {
          let o = n.toUpperCase(),
            i = String.fromCharCode(parseInt(o, 16));
          if (t && Fn(i)) r += i;else r += "%" + o;
          s += 2;
          continue;
        }
      }
      r += e[s];
    }
    return r;
  }
  function normalizePathEncoding(e) {
    let t = "";
    for (let r = 0; r < e.length; r++) {
      if (e[r] === "%" && r + 2 < e.length) {
        let s = e.slice(r + 1, r + 3);
        if (Pr(s)) {
          let n = s.toUpperCase(),
            o = String.fromCharCode(parseInt(n, 16));
          if (o !== "." && Fn(o)) t += o;else t += "%" + n;
          r += 2;
          continue;
        }
      }
      if (Vl(e[r])) t += e[r];else t += escape(e[r]);
    }
    return t;
  }
  function escapePreservingEscapes(e) {
    let t = "";
    for (let r = 0; r < e.length; r++) {
      if (e[r] === "%" && r + 2 < e.length) {
        let s = e.slice(r + 1, r + 3);
        if (Pr(s)) {
          t += "%" + s.toUpperCase(), r += 2;
          continue;
        }
      }
      t += escape(e[r]);
    }
    return t;
  }
  function recomposeAuthority(e) {
    let t = [];
    if (e.userinfo !== void 0) t.push(e.userinfo), t.push("@");
    if (e.host !== void 0) {
      let r = unescape(e.host);
      if (!isIPv4(r)) {
        let s = normalizeIPv6(r);
        if (s.isIPV6 === !0) r = `[${s.escapedHost}]`;else r = reescapeHostDelimiters(r, !1);
      }
      t.push(r);
    }
    if (typeof e.port === "number" || typeof e.port === "string") t.push(":"), t.push(String(e.port));
    return t.length ? t.join("") : void 0;
  }
  Gn.exports = {
    nonSimpleDomain: nonSimpleDomain,
    recomposeAuthority: recomposeAuthority,
    reescapeHostDelimiters: reescapeHostDelimiters,
    normalizePercentEncoding: normalizePercentEncoding,
    normalizePathEncoding: normalizePathEncoding,
    escapePreservingEscapes: escapePreservingEscapes,
    removeDotSegments: removeDotSegments,
    isIPv4: isIPv4,
    isUUID: isUUID,
    normalizeIPv6: normalizeIPv6,
    stringArrayToHexStripped: stringArrayToHexStripped
  };
});
var Xn = R(function (fm, Qn) {
  var {
      isUUID: isUUID_2
    } = kr(),
    Zl = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu,
    ed = ["http", "https", "ws", "wss", "urn", "urn:uuid"];
  function isValidSchemeName(e) {
    return ed.indexOf(e) !== -1;
  }
  function wsIsSecure(e) {
    if (e.secure === !0) return !0;else if (e.secure === !1) return !1;else if (e.scheme) return e.scheme.length === 3 && (e.scheme[0] === "w" || e.scheme[0] === "W") && (e.scheme[1] === "s" || e.scheme[1] === "S") && (e.scheme[2] === "s" || e.scheme[2] === "S");else return !1;
  }
  function parse(e) {
    if (!e.host) e.error = e.error || "HTTP URIs must have a host.";
    return e;
  }
  function serialize(e) {
    let t = String(e.scheme).toLowerCase() === "https";
    if (e.port === (t ? 443 : 80) || e.port === "") e.port = void 0;
    if (!e.path) e.path = "/";
    return e;
  }
  function parse_2(e) {
    return e.secure = wsIsSecure(e), e.resourceName = (e.path || "/") + (e.query ? "?" + e.query : ""), e.path = void 0, e.query = void 0, e;
  }
  function serialize_2(e) {
    if (e.port === (wsIsSecure(e) ? 443 : 80) || e.port === "") e.port = void 0;
    if (typeof e.secure === "boolean") e.scheme = e.secure ? "wss" : "ws", e.secure = void 0;
    if (e.resourceName) {
      let [t, r] = e.resourceName.split("?");
      e.path = t && t !== "/" ? t : void 0, e.query = r, e.resourceName = void 0;
    }
    return e.fragment = void 0, e;
  }
  function parse_3(e, t) {
    if (!e.path) return e.error = "URN can not be parsed", e;
    let r = e.path.match(Zl);
    if (r) {
      let s = t.scheme || e.scheme || "urn";
      e.nid = r[1].toLowerCase(), e.nss = r[2];
      let n = `${s}:${t.nid || e.nid}`,
        o = getSchemeHandler(n);
      if (e.path = void 0, o) e = o.parse(e, t);
    } else e.error = e.error || "URN can not be parsed.";
    return e;
  }
  function serialize_3(e, t) {
    if (e.nid === void 0) throw Error("URN without nid cannot be serialized");
    let r = t.scheme || e.scheme || "urn",
      s = e.nid.toLowerCase(),
      n = `${r}:${t.nid || s}`,
      o = getSchemeHandler(n);
    if (o) e = o.serialize(e, t);
    let i = e,
      nss = e.nss;
    return i.path = `${s || t.nid}:${nss}`, t.skipEscape = !0, i;
  }
  function parse_4(e, t) {
    let r = e;
    if (r.uuid = r.nss, r.nss = void 0, !t.tolerant && (!r.uuid || !isUUID_2(r.uuid))) r.error = r.error || "UUID is not valid.";
    return r;
  }
  function serialize_4(e) {
    let t = e;
    return t.nss = (e.uuid || "").toLowerCase(), t;
  }
  var http = {
      scheme: "http",
      domainHost: !0,
      parse: parse,
      serialize: serialize
    },
    https = {
      scheme: "https",
      domainHost: http.domainHost,
      parse: parse,
      serialize: serialize
    },
    ws = {
      scheme: "ws",
      domainHost: !0,
      parse: parse_2,
      serialize: serialize_2
    },
    wss = {
      scheme: "wss",
      domainHost: ws.domainHost,
      parse: ws.parse,
      serialize: ws.serialize
    },
    urn = {
      scheme: "urn",
      parse: parse_3,
      serialize: serialize_3,
      skipNormalize: !0
    },
    dd = {
      scheme: "urn:uuid",
      parse: parse_4,
      serialize: serialize_4,
      skipNormalize: !0
    },
    SCHEMES = {
      http: http,
      https: https,
      ws: ws,
      wss: wss,
      urn: urn,
      "urn:uuid": dd
    };
  Object.setPrototypeOf(SCHEMES, null);
  function getSchemeHandler(e) {
    return e && (SCHEMES[e] || SCHEMES[e.toLowerCase()]) || void 0;
  }
  Qn.exports = {
    wsIsSecure: wsIsSecure,
    SCHEMES: SCHEMES,
    isValidSchemeName: isValidSchemeName,
    getSchemeHandler: getSchemeHandler
  };
});
var so = R(function (pm, Tt) {
  var {
      normalizeIPv6: normalizeIPv6_2,
      removeDotSegments: removeDotSegments_2,
      recomposeAuthority: recomposeAuthority_2,
      normalizePercentEncoding: normalizePercentEncoding_2,
      normalizePathEncoding: normalizePathEncoding_2,
      escapePreservingEscapes: escapePreservingEscapes_2,
      reescapeHostDelimiters: reescapeHostDelimiters_2,
      isIPv4: isIPv4_2,
      nonSimpleDomain: nonSimpleDomain_2
    } = kr(),
    {
      SCHEMES: SCHEMES_2,
      getSchemeHandler: getSchemeHandler_2
    } = Xn();
  function normalize(e, t) {
    if (typeof e === "string") e = Nd(e, t);else if (typeof e === "object") e = parse_5(serialize_5(e, t), t);
    return e;
  }
  function resolve(e, t, r) {
    let s = r ? Object.assign({
        scheme: "null"
      }, r) : {
        scheme: "null"
      },
      n = resolveComponent(parse_5(e, s), parse_5(t, s), s, !0);
    return s.skipEscape = !0, serialize_5(n, s);
  }
  function resolveComponent(e, t, r, s) {
    let n = {};
    if (!s) e = parse_5(serialize_5(e, r), r), t = parse_5(serialize_5(t, r), r);
    if (r = r || {}, !r.tolerant && t.scheme) n.scheme = t.scheme, n.userinfo = t.userinfo, n.host = t.host, n.port = t.port, n.path = removeDotSegments_2(t.path || ""), n.query = t.query;else {
      if (t.userinfo !== void 0 || t.host !== void 0 || t.port !== void 0) n.userinfo = t.userinfo, n.host = t.host, n.port = t.port, n.path = removeDotSegments_2(t.path || ""), n.query = t.query;else {
        if (!t.path) {
          if (n.path = e.path, t.query !== void 0) n.query = t.query;else n.query = e.query;
        } else {
          if (t.path[0] === "/") n.path = removeDotSegments_2(t.path);else {
            if ((e.userinfo !== void 0 || e.host !== void 0 || e.port !== void 0) && !e.path) n.path = "/" + t.path;else if (!e.path) n.path = t.path;else n.path = e.path.slice(0, e.path.lastIndexOf("/") + 1) + t.path;
            n.path = removeDotSegments_2(n.path);
          }
          n.query = t.query;
        }
        n.userinfo = e.userinfo, n.host = e.host, n.port = e.port;
      }
      n.scheme = e.scheme;
    }
    return n.fragment = t.fragment, n;
  }
  function equal(e, t, r) {
    let s = Yn(e, r),
      n = Yn(t, r);
    return s !== void 0 && n !== void 0 && s.toLowerCase() === n.toLowerCase();
  }
  function serialize_5(e, t) {
    let r = {
        host: e.host,
        scheme: e.scheme,
        userinfo: e.userinfo,
        port: e.port,
        path: e.path,
        query: e.query,
        nid: e.nid,
        nss: e.nss,
        uuid: e.uuid,
        fragment: e.fragment,
        reference: e.reference,
        resourceName: e.resourceName,
        secure: e.secure,
        error: ""
      },
      s = Object.assign({}, t),
      n = [],
      o = getSchemeHandler_2(s.scheme || r.scheme);
    if (o && o.serialize) o.serialize(r, s);
    if (r.path !== void 0) if (!s.skipEscape) {
      if (r.path = escapePreservingEscapes_2(r.path), r.scheme !== void 0) r.path = r.path.split("%3A").join(":");
    } else r.path = normalizePercentEncoding_2(r.path);
    if (s.reference !== "suffix" && r.scheme) n.push(r.scheme, ":");
    let i = recomposeAuthority_2(r);
    if (i !== void 0) {
      if (s.reference !== "suffix") n.push("//");
      if (n.push(i), r.path && r.path[0] !== "/") n.push("/");
    }
    if (r.path !== void 0) {
      let a = r.path;
      if (!s.absolutePath && (!o || !o.absolutePath)) a = removeDotSegments_2(a);
      if (i === void 0 && a[0] === "/" && a[1] === "/") a = "/%2F" + a.slice(2);
      n.push(a);
    }
    if (r.query !== void 0) n.push("?", r.query);
    if (r.fragment !== void 0) n.push("#", r.fragment);
    return n.join("");
  }
  var Sd = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
  function Pd(e, t) {
    if (t[2] !== void 0 && e.path && e.path[0] !== "/") return 'URI path must start with "/" when authority is present.';
    if (typeof e.port === "number" && (e.port < 0 || e.port > 65535)) return "URI port is malformed.";
    return;
  }
  function to(e, t) {
    let r = Object.assign({}, t),
      parsed = {
        scheme: void 0,
        userinfo: void 0,
        host: "",
        port: void 0,
        path: "",
        query: void 0,
        fragment: void 0
      },
      malformedAuthorityOrPort = !1,
      o = !1;
    if (r.reference === "suffix") if (r.scheme) e = r.scheme + ":" + e;else e = "//" + e;
    let i = e.match(Sd);
    if (i) {
      if (parsed.scheme = i[1], parsed.userinfo = i[3], parsed.host = i[4], parsed.port = parseInt(i[5], 10), parsed.path = i[6] || "", parsed.query = i[7], parsed.fragment = i[8], isNaN(parsed.port)) parsed.port = i[5];
      let a = Pd(parsed, i);
      if (a !== void 0) parsed.error = parsed.error || a, malformedAuthorityOrPort = !0;
      if (parsed.host) if (isIPv4_2(parsed.host) === !1) {
        let l = normalizeIPv6_2(parsed.host);
        parsed.host = l.host.toLowerCase(), o = l.isIPV6;
      } else o = !0;
      if (parsed.scheme === void 0 && parsed.userinfo === void 0 && parsed.host === void 0 && parsed.port === void 0 && parsed.query === void 0 && !parsed.path) parsed.reference = "same-document";else if (parsed.scheme === void 0) parsed.reference = "relative";else if (parsed.fragment === void 0) parsed.reference = "absolute";else parsed.reference = "uri";
      if (r.reference && r.reference !== "suffix" && r.reference !== parsed.reference) parsed.error = parsed.error || "URI is not a " + r.reference + " reference.";
      let c = getSchemeHandler_2(r.scheme || parsed.scheme);
      if (!r.unicodeSupport && (!c || !c.unicodeSupport)) {
        if (parsed.host && (r.domainHost || c && c.domainHost) && o === !1 && nonSimpleDomain_2(parsed.host)) try {
          parsed.host = URL.domainToASCII(parsed.host.toLowerCase());
        } catch (u) {
          parsed.error = parsed.error || "Host's domain name can not be converted to ASCII: " + u;
        }
      }
      if (!c || c && !c.skipNormalize) {
        if (e.indexOf("%") !== -1) {
          if (parsed.scheme !== void 0) parsed.scheme = unescape(parsed.scheme);
          if (parsed.host !== void 0) parsed.host = reescapeHostDelimiters_2(unescape(parsed.host), o);
        }
        if (parsed.path) parsed.path = normalizePathEncoding_2(parsed.path);
        if (parsed.fragment) try {
          parsed.fragment = encodeURI(decodeURIComponent(parsed.fragment));
        } catch {
          parsed.error = parsed.error || "URI malformed";
        }
      }
      if (c && c.parse) c.parse(parsed, r);
    } else parsed.error = parsed.error || "URI can not be parsed.";
    return {
      parsed: parsed,
      malformedAuthorityOrPort: malformedAuthorityOrPort
    };
  }
  function parse_5(e, t) {
    return to(e, t).parsed;
  }
  function Nd(e, t) {
    return ro(e, t).normalized;
  }
  function ro(e, t) {
    let {
      parsed: parsed_2,
      malformedAuthorityOrPort: malformedAuthorityOrPort_2
    } = to(e, t);
    return {
      normalized: malformedAuthorityOrPort_2 ? e : serialize_5(parsed_2, t),
      malformedAuthorityOrPort: malformedAuthorityOrPort_2
    };
  }
  function Yn(e, t) {
    if (typeof e === "string") {
      let {
        normalized: normalized,
        malformedAuthorityOrPort: malformedAuthorityOrPort_3
      } = ro(e, t);
      return malformedAuthorityOrPort_3 ? void 0 : normalized;
    }
    if (typeof e === "object") return serialize_5(e, t);
  }
  var jr = {
    SCHEMES: SCHEMES_2,
    normalize: normalize,
    resolve: resolve,
    resolveComponent: resolveComponent,
    equal: equal,
    serialize: serialize_5,
    parse: parse_5
  };
  Tt.exports = jr;
  Tt.exports.default = jr;
  Tt.exports.fastUri = jr;
});
var io = R(function (oo) {
  Object.defineProperty(oo, "__esModule", {
    value: !0
  });
  var no = so();
  no.code = 'require("ajv/dist/runtime/uri").default';
  oo.default = no;
});
var Pvo = R(function (he) {
  Object.defineProperty(he, "__esModule", {
    value: !0
  });
  he.CodeGen = he.Name = he.nil = he.stringify = he.str = he._ = he.KeywordCxt = void 0;
  var qd = dnn();
  Object.defineProperty(he, "KeywordCxt", {
    enumerable: !0,
    get: function () {
      return qd.KeywordCxt;
    }
  });
  var Be = Dm();
  Object.defineProperty(he, "_", {
    enumerable: !0,
    get: function () {
      return Be._;
    }
  });
  Object.defineProperty(he, "str", {
    enumerable: !0,
    get: function () {
      return Be.str;
    }
  });
  Object.defineProperty(he, "stringify", {
    enumerable: !0,
    get: function () {
      return Be.stringify;
    }
  });
  Object.defineProperty(he, "nil", {
    enumerable: !0,
    get: function () {
      return Be.nil;
    }
  });
  Object.defineProperty(he, "Name", {
    enumerable: !0,
    get: function () {
      return Be.Name;
    }
  });
  Object.defineProperty(he, "CodeGen", {
    enumerable: !0,
    get: function () {
      return Be.CodeGen;
    }
  });
  var Od = hWn(),
    fo = cnn(),
    po = pr(),
    se = yWn(),
    ho = Dm(),
    ne = lt(),
    be = ut(),
    We = ab(),
    ao = zn(),
    jd = io(),
    mo = (e, t) => new RegExp(e, t);
  mo.code = "new RegExp";
  var xd = ["removeAdditional", "useDefaults", "coerceTypes"],
    prefixes_2 = new Set(["validate", "serialize", "parse", "wrapper", "root", "schema", "keyword", "pattern", "formats", "validate$data", "func", "obj", "Error"]),
    Id = {
      errorDataPath: "",
      format: "`validateFormats: false` can be used instead.",
      nullable: '"nullable" keyword is supported by default.',
      jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
      extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
      missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.",
      processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`",
      sourceCode: "Use option `code: {source: true}`",
      strictDefaults: "It is default now, see option `strict`.",
      strictKeywords: "It is default now, see option `strict`.",
      uniqueItems: '"uniqueItems" keyword is always validated.',
      unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
      cache: "Map is used as cache, schema object as key.",
      serialize: "Map is used as cache, schema object as key.",
      ajvErrors: "It is default now."
    },
    Td = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    },
    co = 200;
  function Cd(e) {
    var t, r, s, n, o, i, a, c, u, l, f, b, _, h, p, y, v, O, q, M, N, ee, fe, Xt, Yt;
    let strict = e.strict,
      Zt = (t = e.code) === null || t === void 0 ? void 0 : t.optimize,
      optimize = Zt === !0 || Zt === void 0 ? 1 : Zt || 0,
      regExp_2 = (s = (r = e.code) === null || r === void 0 ? void 0 : r.regExp) !== null && s !== void 0 ? s : mo,
      uriResolver_2 = (n = e.uriResolver) !== null && n !== void 0 ? n : jd.default;
    return {
      strictSchema: (i = (o = e.strictSchema) !== null && o !== void 0 ? o : strict) !== null && i !== void 0 ? i : !0,
      strictNumbers: (c = (a = e.strictNumbers) !== null && a !== void 0 ? a : strict) !== null && c !== void 0 ? c : !0,
      strictTypes: (l = (u = e.strictTypes) !== null && u !== void 0 ? u : strict) !== null && l !== void 0 ? l : "log",
      strictTuples: (b = (f = e.strictTuples) !== null && f !== void 0 ? f : strict) !== null && b !== void 0 ? b : "log",
      strictRequired: (h = (_ = e.strictRequired) !== null && _ !== void 0 ? _ : strict) !== null && h !== void 0 ? h : !1,
      code: e.code ? {
        ...e.code,
        optimize: optimize,
        regExp: regExp_2
      } : {
        optimize: optimize,
        regExp: regExp_2
      },
      loopRequired: (p = e.loopRequired) !== null && p !== void 0 ? p : co,
      loopEnum: (y = e.loopEnum) !== null && y !== void 0 ? y : co,
      meta: (v = e.meta) !== null && v !== void 0 ? v : !0,
      messages: (O = e.messages) !== null && O !== void 0 ? O : !0,
      inlineRefs: (q = e.inlineRefs) !== null && q !== void 0 ? q : !0,
      schemaId: (M = e.schemaId) !== null && M !== void 0 ? M : "$id",
      addUsedSchema: (N = e.addUsedSchema) !== null && N !== void 0 ? N : !0,
      validateSchema: (ee = e.validateSchema) !== null && ee !== void 0 ? ee : !0,
      validateFormats: (fe = e.validateFormats) !== null && fe !== void 0 ? fe : !0,
      unicodeRegExp: (Xt = e.unicodeRegExp) !== null && Xt !== void 0 ? Xt : !0,
      int32range: (Yt = e.int32range) !== null && Yt !== void 0 ? Yt : !0,
      uriResolver: uriResolver_2
    };
  }
  class Ct {
    constructor(e = {}) {
      this.schemas = {}, this.refs = {}, this.formats = {}, this._compilations = new Set(), this._loading = {}, this._cache = new Map(), e = this.opts = {
        ...e,
        ...Cd(e)
      };
      let {
        es5: es5_3,
        lines: lines_2
      } = this.opts.code;
      this.scope = new ho.ValueScope({
        scope: {},
        prefixes: prefixes_2,
        es5: es5_3,
        lines: lines_2
      }), this.logger = Ud(e.logger);
      let validateFormats = e.validateFormats;
      if (e.validateFormats = !1, this.RULES = po.getRules(), uo.call(this, Id, e, "NOT SUPPORTED"), uo.call(this, Td, e, "DEPRECATED", "warn"), this._metaOpts = Vd.call(this), e.formats) Ad.call(this);
      if (this._addVocabularies(), this._addDefaultMetaSchema(), e.keywords) Dd.call(this, e.keywords);
      if (typeof e.meta == "object") this.addMetaSchema(e.meta);
      Md.call(this), e.validateFormats = validateFormats;
    }
    _addVocabularies() {
      this.addKeyword("$async");
    }
    _addDefaultMetaSchema() {
      let {
          $data: $data_2,
          meta: meta,
          schemaId: schemaId_5
        } = this.opts,
        s = ao;
      if (schemaId_5 === "id") s = {
        ...ao
      }, s.id = s.$id, delete s.$id;
      if (meta && $data_2) this.addMetaSchema(s, s[schemaId_5], !1);
    }
    defaultMeta() {
      let {
        meta: meta_2,
        schemaId: schemaId_6
      } = this.opts;
      return this.opts.defaultMeta = typeof meta_2 == "object" ? meta_2[schemaId_6] || meta_2 : void 0;
    }
    validate(e, t) {
      let r;
      if (typeof e == "string") {
        if (r = this.getSchema(e), !r) throw Error(`no schema with key or ref "${e}"`);
      } else r = this.compile(e);
      let s = r(t);
      if (!("$async" in r)) this.errors = r.errors;
      return s;
    }
    compile(e, t) {
      let r = this._addSchema(e, t);
      return r.validate || this._compileSchemaEnv(r);
    }
    compileAsync(e, t) {
      if (typeof this.opts.loadSchema != "function") throw Error("options.loadSchema should be a function");
      let {
        loadSchema: loadSchema
      } = this.opts;
      return s.call(this, e, t);
      async function s(u, l) {
        await n.call(this, u.$schema);
        let f = this._addSchema(u, l);
        return f.validate || o.call(this, f);
      }
      async function n($ref) {
        if ($ref && !this.getSchema($ref)) await s.call(this, {
          $ref: $ref
        }, !0);
      }
      async function o(u) {
        try {
          return this._compileSchemaEnv(u);
        } catch (error) {
          if (!(error instanceof fo.default)) throw error;
          return i.call(this, error), await a.call(this, error.missingSchema), o.call(this, u);
        }
      }
      function i({
        missingSchema: missingSchema,
        missingRef: missingRef
      }) {
        if (this.refs[missingSchema]) throw Error(`AnySchema ${missingSchema} is loaded but ${missingRef} cannot be resolved`);
      }
      async function a(u) {
        let l = await c.call(this, u);
        if (!this.refs[u]) await n.call(this, l.$schema);
        if (!this.refs[u]) this.addSchema(l, u, t);
      }
      async function c(u) {
        let l = this._loading[u];
        if (l) return l;
        try {
          return await (this._loading[u] = loadSchema(u));
        } finally {
          delete this._loading[u];
        }
      }
    }
    addSchema(e, t, r, s = this.opts.validateSchema) {
      if (Array.isArray(e)) {
        for (let o of e) this.addSchema(o, void 0, r, s);
        return this;
      }
      let n;
      if (typeof e === "object") {
        let {
          schemaId: schemaId_7
        } = this.opts;
        if (n = e[schemaId_7], n !== void 0 && typeof n != "string") throw Error(`schema ${schemaId_7} must be string`);
      }
      return t = ne.normalizeId(t || n), this._checkUnique(t), this.schemas[t] = this._addSchema(e, r, t, s, !0), this;
    }
    addMetaSchema(e, t, r = this.opts.validateSchema) {
      return this.addSchema(e, t, !0, r), this;
    }
    validateSchema(e, t) {
      if (typeof e == "boolean") return !0;
      let r;
      if (r = e.$schema, r !== void 0 && typeof r != "string") throw Error("$schema must be a string");
      if (r = r || this.opts.defaultMeta || this.defaultMeta(), !r) return this.logger.warn("meta-schema not available"), this.errors = null, !0;
      let s = this.validate(r, e);
      if (!s && t) {
        let n = "schema is invalid: " + this.errorsText();
        if (this.opts.validateSchema === "log") this.logger.error(n);else throw Error(n);
      }
      return s;
    }
    getSchema(e) {
      let t;
      while (typeof (t = lo.call(this, e)) == "string") e = t;
      if (t === void 0) {
        let {
            schemaId: schemaId_8
          } = this.opts,
          s = new se.SchemaEnv({
            schema: {},
            schemaId: schemaId_8
          });
        if (t = se.resolveSchema.call(this, s, e), !t) return;
        this.refs[e] = t;
      }
      return t.validate || this._compileSchemaEnv(t);
    }
    removeSchema(e) {
      if (e instanceof RegExp) return this._removeAllSchemas(this.schemas, e), this._removeAllSchemas(this.refs, e), this;
      switch (typeof e) {
        case "undefined":
          return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
        case "string":
          {
            let t = lo.call(this, e);
            if (typeof t == "object") this._cache.delete(t.schema);
            return delete this.schemas[e], delete this.refs[e], this;
          }
        case "object":
          {
            let t = e;
            this._cache.delete(t);
            let r = e[this.opts.schemaId];
            if (r) r = ne.normalizeId(r), delete this.schemas[r], delete this.refs[r];
            return this;
          }
        default:
          throw Error("ajv.removeSchema: invalid parameter");
      }
    }
    addVocabulary(e) {
      for (let t of e) this.addKeyword(t);
      return this;
    }
    addKeyword(e, t) {
      let r;
      if (typeof e == "string") {
        if (r = e, typeof t == "object") this.logger.warn("these parameters are deprecated, see docs for addKeyword"), t.keyword = r;
      } else if (typeof e == "object" && t === void 0) {
        if (t = e, r = t.keyword, Array.isArray(r) && !r.length) throw Error("addKeywords: keyword must be string or non-empty array");
      } else throw Error("invalid addKeywords parameters");
      if (Fd.call(this, r, t), !t) return We.eachItem(r, n => xr.call(this, n)), this;
      Hd.call(this, t);
      let s = {
        ...t,
        type: be.getJSONTypes(t.type),
        schemaType: be.getJSONTypes(t.schemaType)
      };
      return We.eachItem(r, s.type.length === 0 ? n => xr.call(this, n, s) : n => s.type.forEach(item => xr.call(this, n, s, item))), this;
    }
    getKeyword(e) {
      let t = this.RULES.all[e];
      return typeof t == "object" ? t.definition : !!t;
    }
    removeKeyword(e) {
      let {
        RULES: RULES_2
      } = this;
      delete RULES_2.keywords[e], delete RULES_2.all[e];
      for (let r of RULES_2.rules) {
        let s = r.rules.findIndex(item => item.keyword === e);
        if (s >= 0) r.rules.splice(s, 1);
      }
      return this;
    }
    addFormat(e, t) {
      if (typeof t == "string") t = new RegExp(t);
      return this.formats[e] = t, this;
    }
    errorsText(e = this.errors, {
      separator = ", ",
      dataVar = "data"
    } = {}) {
      if (!e || e.length === 0) return "No errors";
      return e.map(item => `${dataVar}${item.instancePath} ${item.message}`).reduce((acc, item) => acc + separator + item);
    }
    $dataMetaSchema(e, t) {
      let r = this.RULES.all;
      e = JSON.parse(JSON.stringify(e));
      for (let s of t) {
        let n = s.split("/").slice(1),
          o = e;
        for (let i of n) o = o[i];
        for (let i in r) {
          let a = r[i];
          if (typeof a != "object") continue;
          let {
              $data: $data_3
            } = a.definition,
            u = o[i];
          if ($data_3 && u) o[i] = yo(u);
        }
      }
      return e;
    }
    _removeAllSchemas(e, t) {
      for (let r in e) {
        let s = e[r];
        if (!t || t.test(r)) {
          if (typeof s == "string") delete e[r];else if (s && !s.meta) this._cache.delete(s.schema), delete e[r];
        }
      }
    }
    _addSchema(schema_25, meta_3, baseId_4, s = this.opts.validateSchema, n = this.opts.addUsedSchema) {
      let o,
        {
          schemaId: schemaId_9
        } = this.opts;
      if (typeof schema_25 == "object") o = schema_25[schemaId_9];else if (this.opts.jtd) throw Error("schema must be object");else if (typeof schema_25 != "boolean") throw Error("schema must be object or boolean");
      let a = this._cache.get(schema_25);
      if (a !== void 0) return a;
      baseId_4 = ne.normalizeId(o || baseId_4);
      let localRefs = ne.getSchemaRefs.call(this, schema_25, baseId_4);
      if (a = new se.SchemaEnv({
        schema: schema_25,
        schemaId: schemaId_9,
        meta: meta_3,
        baseId: baseId_4,
        localRefs: localRefs
      }), this._cache.set(a.schema, a), n && !baseId_4.startsWith("#")) {
        if (baseId_4) this._checkUnique(baseId_4);
        this.refs[baseId_4] = a;
      }
      if (s) this.validateSchema(schema_25, !0);
      return a;
    }
    _checkUnique(e) {
      if (this.schemas[e] || this.refs[e]) throw Error(`schema with key or id "${e}" already exists`);
    }
    _compileSchemaEnv(e) {
      if (e.meta) this._compileMetaSchema(e);else se.compileSchema.call(this, e);
      if (!e.validate) throw Error("ajv implementation error");
      return e.validate;
    }
    _compileMetaSchema(e) {
      let opts_18 = this.opts;
      this.opts = this._metaOpts;
      try {
        se.compileSchema.call(this, e);
      } finally {
        this.opts = opts_18;
      }
    }
  }
  Ct.ValidationError = Od.default;
  Ct.MissingRefError = fo.default;
  he.default = Ct;
  function uo(e, t, r, s = "error") {
    for (let n in e) {
      let o = n;
      if (o in t) this.logger[s](`${r}: option ${n}. ${e[o]}`);
    }
  }
  function lo(e) {
    return e = ne.normalizeId(e), this.schemas[e] || this.refs[e];
  }
  function Md() {
    let schemas = this.opts.schemas;
    if (!schemas) return;
    if (Array.isArray(schemas)) this.addSchema(schemas);else for (let t in schemas) this.addSchema(schemas[t], t);
  }
  function Ad() {
    for (let e in this.opts.formats) {
      let t = this.opts.formats[e];
      if (t) this.addFormat(e, t);
    }
  }
  function Dd(e) {
    if (Array.isArray(e)) {
      this.addVocabulary(e);
      return;
    }
    this.logger.warn("keywords option as map is deprecated, pass array");
    for (let t in e) {
      let r = e[t];
      if (!r.keyword) r.keyword = t;
      this.addKeyword(r);
    }
  }
  function Vd() {
    let e = {
      ...this.opts
    };
    for (let t of xd) delete e[t];
    return e;
  }
  var zd = {
    log() {},
    warn() {},
    error() {}
  };
  function Ud(e) {
    if (e === !1) return zd;
    if (e === void 0) return console;
    if (e.log && e.warn && e.error) return e;
    throw Error("logger must implement log, warn and error methods");
  }
  var Kd = /^[a-z_$][a-z0-9_$:-]*$/i;
  function Fd(e, t) {
    let {
      RULES: RULES_3
    } = this;
    if (We.eachItem(e, s => {
      if (RULES_3.keywords[s]) throw Error(`Keyword ${s} is already defined`);
      if (!Kd.test(s)) throw Error(`Keyword ${s} has invalid name`);
    }), !t) return;
    if (t.$data && !("code" in t || "validate" in t)) throw Error('$data keyword must have "code" or "validate" function');
  }
  function xr(keyword_11, t, type_3) {
    var s;
    let n = t === null || t === void 0 ? void 0 : t.post;
    if (type_3 && n) throw Error('keyword with "post" flag cannot have "type"');
    let {
        RULES: RULES_4
      } = this,
      i = n ? RULES_4.post : RULES_4.rules.find(({
        type: type_2
      }) => type_2 === type_3);
    if (!i) i = {
      type: type_3,
      rules: []
    }, RULES_4.rules.push(i);
    if (RULES_4.keywords[keyword_11] = !0, !t) return;
    let a = {
      keyword: keyword_11,
      definition: {
        ...t,
        type: be.getJSONTypes(t.type),
        schemaType: be.getJSONTypes(t.schemaType)
      }
    };
    if (t.before) Ld.call(this, i, a, t.before);else i.rules.push(a);
    RULES_4.all[keyword_11] = a, (s = t.implements) === null || s === void 0 || s.forEach(item => this.addKeyword(item));
  }
  function Ld(e, t, r) {
    let s = e.rules.findIndex(item => item.keyword === r);
    if (s >= 0) e.rules.splice(s, 0, t);else e.rules.push(t), this.logger.warn(`rule ${r} is not defined`);
  }
  function Hd(e) {
    let {
      metaSchema: metaSchema
    } = e;
    if (metaSchema === void 0) return;
    if (e.$data && this.opts.$data) metaSchema = yo(metaSchema);
    e.validateSchema = this.compile(metaSchema, !0);
  }
  var Gd = {
    $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
  };
  function yo(e) {
    return {
      anyOf: [e, Gd]
    };
  }
});
var go = R(function (_o) {
  Object.defineProperty(_o, "__esModule", {
    value: !0
  });
  var Bd = {
    keyword: "id",
    code() {
      throw Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  _o.default = Bd;
});
var XCr = R(function (vo) {
  Object.defineProperty(vo, "__esModule", {
    value: !0
  });
  vo.callRef = vo.getValidate = void 0;
  var Xd = cnn(),
    At = Q(),
    C = Dm(),
    Qe = Eve(),
    Dt = yWn(),
    Ee = ab(),
    Yd = {
      keyword: "$ref",
      schemaType: "string",
      code(e) {
        let {
            gen: gen_39,
            schema: r,
            it: it_19
          } = e,
          {
            baseId: baseId_5,
            schemaEnv: schemaEnv_7,
            validateName: validateName_7,
            opts: opts_19,
            self: self_7
          } = it_19,
          {
            root: u
          } = schemaEnv_7;
        if ((r === "#" || r === "#/") && baseId_5 === u.baseId) return f();
        let l = Dt.resolveRef.call(self_7, u, baseId_5, r);
        if (l === void 0) throw new Xd.default(it_19.opts.uriResolver, baseId_5, r);
        if (l instanceof Dt.SchemaEnv) return b(l);
        return _(l);
        function f() {
          if (schemaEnv_7 === u) return Mt(e, validateName_7, schemaEnv_7, schemaEnv_7.$async);
          let h = gen_39.scopeValue("root", {
            ref: u
          });
          return Mt(e, C._`${h}.validate`, u, u.$async);
        }
        function b(h) {
          let p = $o(e, h);
          Mt(e, p, h, h.$async);
        }
        function _(h) {
          let topSchemaRef_6 = gen_39.scopeValue("schema", opts_19.code.source === !0 ? {
              ref: h,
              code: C.stringify(h)
            } : {
              ref: h
            }),
            y = gen_39.name("valid"),
            v = e.subschema({
              schema: h,
              dataTypes: [],
              schemaPath: C.nil,
              topSchemaRef: topSchemaRef_6,
              errSchemaPath: r
            }, y);
          e.mergeEvaluated(v), e.ok(y);
        }
      }
    };
  function $o(e, ref_5) {
    let {
      gen: gen_40
    } = e;
    return ref_5.validate ? gen_40.scopeValue("validate", {
      ref: ref_5.validate
    }) : C._`${gen_40.scopeValue("wrapper", {
      ref: ref_5
    })}.validate`;
  }
  vo.getValidate = $o;
  function Mt(e, t, r, s) {
    let {
        gen: gen_41,
        it: it_20
      } = e,
      {
        allErrors: allErrors_5,
        schemaEnv: schemaEnv_8,
        opts: opts_20
      } = it_20,
      u = opts_20.passContext ? Qe.default.this : C.nil;
    if (s) l();else f();
    function l() {
      if (!schemaEnv_8.$async) throw Error("async schema referenced by sync schema");
      let h = gen_41.let("valid");
      gen_41.try(() => {
        if (gen_41.code(C._`await ${At.callValidateCode(e, t, u)}`), _(t), !allErrors_5) gen_41.assign(h, !0);
      }, p => {
        if (gen_41.if(C._`!(${p} instanceof ${it_20.ValidationError})`, () => gen_41.throw(p)), b(p), !allErrors_5) gen_41.assign(h, !1);
      }), e.ok(h);
    }
    function f() {
      e.result(At.callValidateCode(e, t, u), () => _(t), () => b(t));
    }
    function b(h) {
      let p = C._`${h}.errors`;
      gen_41.assign(Qe.default.vErrors, C._`${Qe.default.vErrors} === null ? ${p} : ${Qe.default.vErrors}.concat(${p})`), gen_41.assign(Qe.default.errors, C._`${Qe.default.vErrors}.length`);
    }
    function _(h) {
      var p;
      if (!it_20.opts.unevaluated) return;
      let y = (p = r === null || r === void 0 ? void 0 : r.validate) === null || p === void 0 ? void 0 : p.evaluated;
      if (it_20.props !== !0) if (y && !y.dynamicProps) {
        if (y.props !== void 0) it_20.props = Ee.mergeEvaluated.props(gen_41, y.props, it_20.props);
      } else {
        let v = gen_41.var("props", C._`${h}.evaluated.props`);
        it_20.props = Ee.mergeEvaluated.props(gen_41, v, it_20.props, C.Name);
      }
      if (it_20.items !== !0) if (y && !y.dynamicItems) {
        if (y.items !== void 0) it_20.items = Ee.mergeEvaluated.items(gen_41, y.items, it_20.items);
      } else {
        let v = gen_41.var("items", C._`${h}.evaluated.items`);
        it_20.items = Ee.mergeEvaluated.items(gen_41, v, it_20.items, C.Name);
      }
    }
  }
  vo.callRef = Mt;
  vo.default = Yd;
});
var Ovo = R(function (bo) {
  Object.defineProperty(bo, "__esModule", {
    value: !0
  });
  var tf = go(),
    rf = XCr(),
    sf = ["$schema", "$id", "$defs", "$vocabulary", {
      keyword: "$comment"
    }, "definitions", tf.default, rf.default];
  bo.default = sf;
});
var So = R(function (Eo) {
  Object.defineProperty(Eo, "__esModule", {
    value: !0
  });
  var Pe = Dm(),
    operators = Pe.operators,
    Vt = {
      maximum: {
        okStr: "<=",
        ok: operators.LTE,
        fail: operators.GT
      },
      minimum: {
        okStr: ">=",
        ok: operators.GTE,
        fail: operators.LT
      },
      exclusiveMaximum: {
        okStr: "<",
        ok: operators.LT,
        fail: operators.GTE
      },
      exclusiveMinimum: {
        okStr: ">",
        ok: operators.GT,
        fail: operators.LTE
      }
    },
    of = {
      message: ({
        keyword: keyword_12,
        schemaCode: schemaCode_5
      }) => Pe.str`must be ${Vt[keyword_12].okStr} ${schemaCode_5}`,
      params: ({
        keyword: keyword_13,
        schemaCode: schemaCode_6
      }) => Pe._`{comparison: ${Vt[keyword_13].okStr}, limit: ${schemaCode_6}}`
    },
    af = {
      keyword: Object.keys(Vt),
      type: "number",
      schemaType: "number",
      $data: !0,
      error: of,
      code(e) {
        let {
          keyword: keyword_14,
          data: data_15,
          schemaCode: schemaCode_7
        } = e;
        e.fail$data(Pe._`${data_15} ${Vt[keyword_14].fail} ${schemaCode_7} || isNaN(${data_15})`);
      }
    };
  Eo.default = af;
});
var No = R(function (Po) {
  Object.defineProperty(Po, "__esModule", {
    value: !0
  });
  var oe = Dm(),
    error_2 = {
      message: ({
        schemaCode: schemaCode_8
      }) => oe.str`must be multiple of ${schemaCode_8}`,
      params: ({
        schemaCode: schemaCode_9
      }) => oe._`{multipleOf: ${schemaCode_9}}`
    },
    lf = {
      keyword: "multipleOf",
      type: "number",
      schemaType: "number",
      $data: !0,
      error: error_2,
      code(e) {
        let {
            gen: gen_42,
            data: data_16,
            schemaCode: schemaCode_10,
            it: it_21
          } = e,
          multipleOfPrecision = it_21.opts.multipleOfPrecision,
          i = gen_42.let("res"),
          a = multipleOfPrecision ? oe._`Math.abs(Math.round(${i}) - ${i}) > 1e-${multipleOfPrecision}` : oe._`${i} !== parseInt(${i})`;
        e.fail$data(oe._`(${schemaCode_10} === 0 || (${i} = ${data_16}/${schemaCode_10}, ${a}))`);
      }
    };
  Po.default = lf;
});
var Oo = R(function (qo) {
  Object.defineProperty(qo, "__esModule", {
    value: !0
  });
  function ko(e) {
    let t = e.length,
      r = 0,
      s = 0,
      n;
    while (s < t) if (r++, n = e.charCodeAt(s++), n >= 55296 && n <= 56319 && s < t) {
      if (n = e.charCodeAt(s), (n & 64512) === 56320) s++;
    }
    return r;
  }
  qo.default = ko;
  ko.code = 'require("ajv/dist/runtime/ucs2length").default';
});
var Ro = R(function (xo) {
  Object.defineProperty(xo, "__esModule", {
    value: !0
  });
  var G = Dm(),
    jo = ab(),
    pf = Oo(),
    error_3 = {
      message({
        keyword: keyword_15,
        schemaCode: schemaCode_11
      }) {
        return G.str`must NOT have ${keyword_15 === "maxLength" ? "more" : "fewer"} than ${schemaCode_11} characters`;
      },
      params: ({
        schemaCode: schemaCode_12
      }) => G._`{limit: ${schemaCode_12}}`
    },
    mf = {
      keyword: ["maxLength", "minLength"],
      type: "string",
      schemaType: "number",
      $data: !0,
      error: error_3,
      code(e) {
        let {
            keyword: keyword_16,
            data: data_17,
            schemaCode: schemaCode_13,
            it: it_22
          } = e,
          o = keyword_16 === "maxLength" ? G.operators.GT : G.operators.LT,
          i = it_22.opts.unicode === !1 ? G._`${data_17}.length` : G._`${jo.useFunc(e.gen, pf.default)}(${data_17})`;
        e.fail$data(G._`${i} ${o} ${schemaCode_13}`);
      }
    };
  xo.default = mf;
});
var Mo = R(function (Co) {
  Object.defineProperty(Co, "__esModule", {
    value: !0
  });
  var Io = Q(),
    To = ab(),
    X = Dm(),
    error_4 = {
      message: ({
        schemaCode: schemaCode_14
      }) => X.str`must match pattern "${schemaCode_14}"`,
      params: ({
        schemaCode: schemaCode_15
      }) => X._`{pattern: ${schemaCode_15}}`
    },
    gf = {
      keyword: "pattern",
      type: "string",
      schemaType: "string",
      $data: !0,
      error: error_4,
      code(e) {
        let {
            gen: gen_43,
            data: data_18,
            $data: $data_4,
            schema: schema_26,
            schemaCode: schemaCode_16,
            it: it_23
          } = e,
          a = it_23.opts.unicodeRegExp ? "u" : "";
        if ($data_4) {
          let {
              regExp: regExp_3
            } = it_23.opts.code,
            u = regExp_3.code === "new RegExp" ? X._`new RegExp` : To.useFunc(gen_43, regExp_3),
            l = gen_43.let("valid");
          gen_43.try(() => gen_43.assign(l, X._`${u}(${schemaCode_16}, ${a}).test(${data_18})`), () => gen_43.assign(l, !1)), e.fail$data(X._`!${l}`);
        } else {
          let c = Io.usePattern(e, schema_26);
          e.fail$data(X._`!${c}.test(${data_18})`);
        }
      }
    };
  Co.default = gf;
});
var Do = R(function (Ao) {
  Object.defineProperty(Ao, "__esModule", {
    value: !0
  });
  var ie = Dm(),
    error_5 = {
      message({
        keyword: keyword_17,
        schemaCode: schemaCode_17
      }) {
        return ie.str`must NOT have ${keyword_17 === "maxProperties" ? "more" : "fewer"} than ${schemaCode_17} properties`;
      },
      params: ({
        schemaCode: schemaCode_18
      }) => ie._`{limit: ${schemaCode_18}}`
    },
    wf = {
      keyword: ["maxProperties", "minProperties"],
      type: "object",
      schemaType: "number",
      $data: !0,
      error: error_5,
      code(e) {
        let {
            keyword: keyword_18,
            data: data_19,
            schemaCode: schemaCode_19
          } = e,
          n = keyword_18 === "maxProperties" ? ie.operators.GT : ie.operators.LT;
        e.fail$data(ie._`Object.keys(${data_19}).length ${n} ${schemaCode_19}`);
      }
    };
  Ao.default = wf;
});
var Uo = R(function (zo) {
  Object.defineProperty(zo, "__esModule", {
    value: !0
  });
  var ae = Q(),
    ce = Dm(),
    Vo = ab(),
    error_6 = {
      message: ({
        params: {
          missingProperty: missingProperty_2
        }
      }) => ce.str`must have required property '${missingProperty_2}'`,
      params: ({
        params: {
          missingProperty: missingProperty_3
        }
      }) => ce._`{missingProperty: ${missingProperty_3}}`
    },
    Sf = {
      keyword: "required",
      type: "object",
      schemaType: "array",
      $data: !0,
      error: error_6,
      code(e) {
        let {
            gen: gen_44,
            schema: schema_27,
            schemaCode: schemaCode_20,
            data: data_20,
            $data: $data_5,
            it: it_24
          } = e,
          {
            opts: opts_21
          } = it_24;
        if (!$data_5 && schema_27.length === 0) return;
        let c = schema_27.length >= opts_21.loopRequired;
        if (it_24.allErrors) u();else l();
        if (opts_21.strictRequired) {
          let properties_2 = e.parentSchema.properties,
            {
              definedProperties: definedProperties
            } = e.it;
          for (let p of schema_27) if ((properties_2 === null || properties_2 === void 0 ? void 0 : properties_2[p]) === void 0 && !definedProperties.has(p)) {
            let y = it_24.schemaEnv.baseId + it_24.errSchemaPath,
              v = `required property "${p}" is not defined at "${y}" (strictRequired)`;
            Vo.checkStrictMode(it_24, v, it_24.opts.strictRequired);
          }
        }
        function u() {
          if (c || $data_5) e.block$data(ce.nil, f);else for (let _ of schema_27) ae.checkReportMissingProp(e, _);
        }
        function l() {
          let _ = gen_44.let("missing");
          if (c || $data_5) {
            let h = gen_44.let("valid", !0);
            e.block$data(h, () => b(_, h)), e.ok(h);
          } else gen_44.if(ae.checkMissingProp(e, schema_27, _)), ae.reportMissingProp(e, _), gen_44.else();
        }
        function f() {
          gen_44.forOf("prop", schemaCode_20, missingProperty_4 => {
            e.setParams({
              missingProperty: missingProperty_4
            }), gen_44.if(ae.noPropertyInData(gen_44, data_20, missingProperty_4, opts_21.ownProperties), () => e.error());
          });
        }
        function b(missingProperty_5, h) {
          e.setParams({
            missingProperty: missingProperty_5
          }), gen_44.forOf(missingProperty_5, schemaCode_20, () => {
            gen_44.assign(h, ae.propertyInData(gen_44, data_20, missingProperty_5, opts_21.ownProperties)), gen_44.if(ce.not(h), () => {
              e.error(), gen_44.break();
            });
          }, ce.nil);
        }
      }
    };
  zo.default = Sf;
});
var Fo = R(function (Ko) {
  Object.defineProperty(Ko, "__esModule", {
    value: !0
  });
  var ue = Dm(),
    error_7 = {
      message({
        keyword: keyword_19,
        schemaCode: schemaCode_21
      }) {
        return ue.str`must NOT have ${keyword_19 === "maxItems" ? "more" : "fewer"} than ${schemaCode_21} items`;
      },
      params: ({
        schemaCode: schemaCode_22
      }) => ue._`{limit: ${schemaCode_22}}`
    },
    kf = {
      keyword: ["maxItems", "minItems"],
      type: "array",
      schemaType: "number",
      $data: !0,
      error: error_7,
      code(e) {
        let {
            keyword: keyword_20,
            data: data_21,
            schemaCode: schemaCode_23
          } = e,
          n = keyword_20 === "maxItems" ? ue.operators.GT : ue.operators.LT;
        e.fail$data(ue._`${data_21}.length ${n} ${schemaCode_23}`);
      }
    };
  Ko.default = kf;
});
var Go = R(function (Ho) {
  Object.defineProperty(Ho, "__esModule", {
    value: !0
  });
  var Xe = ut(),
    j = Dm(),
    Lo = ab(),
    Of = unn(),
    error_8 = {
      message: ({
        params: {
          i: i_2,
          j: j_2
        }
      }) => j.str`must NOT have duplicate items (items ## ${j_2} and ${i_2} are identical)`,
      params: ({
        params: {
          i: i_3,
          j: j_3
        }
      }) => j._`{i: ${i_3}, j: ${j_3}}`
    },
    xf = {
      keyword: "uniqueItems",
      type: "array",
      schemaType: "boolean",
      $data: !0,
      error: error_8,
      code(e) {
        let {
          gen: gen_45,
          data: data_22,
          $data: $data_6,
          schema: schema_28,
          parentSchema: parentSchema_4,
          schemaCode: schemaCode_24,
          it: it_25
        } = e;
        if (!$data_6 && !schema_28) return;
        let c = gen_45.let("valid"),
          u = parentSchema_4.items ? Xe.getSchemaTypes(parentSchema_4.items) : [];
        e.block$data(c, l, j._`${schemaCode_24} === false`), e.ok(c);
        function l() {
          let i_4 = gen_45.let("i", j._`${data_22}.length`),
            j_4 = gen_45.let("j");
          e.setParams({
            i: i_4,
            j: j_4
          }), gen_45.assign(c, !0), gen_45.if(j._`${i_4} > 1`, () => (f() ? b : _)(i_4, j_4));
        }
        function f() {
          return u.length > 0 && !u.some(item => item === "object" || item === "array");
        }
        function b(h, p) {
          let y = gen_45.name("item"),
            v = Xe.checkDataTypes(u, y, it_25.opts.strictNumbers, Xe.DataType.Wrong),
            O = gen_45.const("indices", j._`{}`);
          gen_45.for(j._`;${h}--;`, () => {
            if (gen_45.let(y, j._`${data_22}[${h}]`), gen_45.if(v, j._`continue`), u.length > 1) gen_45.if(j._`typeof ${y} == "string"`, j._`${y} += "_"`);
            gen_45.if(j._`typeof ${O}[${y}] == "number"`, () => {
              gen_45.assign(p, j._`${O}[${y}]`), e.error(), gen_45.assign(c, !1).break();
            }).code(j._`${O}[${y}] = ${h}`);
          });
        }
        function _(h, p) {
          let y = Lo.useFunc(gen_45, Of.default),
            v = gen_45.name("outer");
          gen_45.label(v).for(j._`;${h}--;`, () => gen_45.for(j._`${p} = ${h}; ${p}--;`, () => gen_45.if(j._`${y}(${data_22}[${h}], ${data_22}[${p}])`, () => {
            e.error(), gen_45.assign(c, !1).break(v);
          })));
        }
      }
    };
  Ho.default = xf;
});
var Bo = R(function (Wo) {
  Object.defineProperty(Wo, "__esModule", {
    value: !0
  });
  var Ye = Dm(),
    Jo = ab(),
    If = unn(),
    error_9 = {
      message: "must be equal to constant",
      params: ({
        schemaCode: schemaCode_25
      }) => Ye._`{allowedValue: ${schemaCode_25}}`
    },
    Cf = {
      keyword: "const",
      $data: !0,
      error: error_9,
      code(e) {
        let {
          gen: gen_46,
          data: data_23,
          $data: $data_7,
          schemaCode: schemaCode_26,
          schema: schema_29
        } = e;
        if ($data_7 || schema_29 && typeof schema_29 == "object") e.fail$data(Ye._`!${Jo.useFunc(gen_46, If.default)}(${data_23}, ${schemaCode_26})`);else e.fail(Ye._`${schema_29} !== ${data_23}`);
      }
    };
  Wo.default = Cf;
});
var Yo = R(function (Xo) {
  Object.defineProperty(Xo, "__esModule", {
    value: !0
  });
  var le = Dm(),
    Qo = ab(),
    Af = unn(),
    error_10 = {
      message: "must be equal to one of the allowed values",
      params: ({
        schemaCode: schemaCode_27
      }) => le._`{allowedValues: ${schemaCode_27}}`
    },
    Vf = {
      keyword: "enum",
      schemaType: "array",
      $data: !0,
      error: error_10,
      code(e) {
        let {
          gen: gen_47,
          data: data_24,
          $data: $data_8,
          schema: schema_30,
          schemaCode: schemaCode_28,
          it: it_26
        } = e;
        if (!$data_8 && schema_30.length === 0) throw Error("enum must have non-empty array");
        let a = schema_30.length >= it_26.opts.loopEnum,
          c,
          u = () => c !== null && c !== void 0 ? c : c = Qo.useFunc(gen_47, Af.default),
          l;
        if (a || $data_8) l = gen_47.let("valid"), e.block$data(l, f);else {
          if (!Array.isArray(schema_30)) throw Error("ajv implementation error");
          let _ = gen_47.const("vSchema", schemaCode_28);
          l = le.or(...schema_30.map((item, index) => b(_, index)));
        }
        e.pass(l);
        function f() {
          gen_47.assign(l, !1), gen_47.forOf("v", schemaCode_28, _ => gen_47.if(le._`${u()}(${data_24}, ${_})`, () => gen_47.assign(l, !0).break()));
        }
        function b(_, h) {
          let p = schema_30[h];
          return typeof p === "object" && p !== null ? le._`${u()}(${data_24}, ${_}[${h}])` : le._`${data_24} === ${p}`;
        }
      }
    };
  Xo.default = Vf;
});
var Ivo = R(function (Zo) {
  Object.defineProperty(Zo, "__esModule", {
    value: !0
  });
  var Uf = So(),
    Kf = No(),
    Ff = Ro(),
    Lf = Mo(),
    Hf = Do(),
    Gf = Uo(),
    Jf = Fo(),
    Wf = Go(),
    Bf = Bo(),
    Qf = Yo(),
    Xf = [Uf.default, Kf.default, Ff.default, Lf.default, Hf.default, Gf.default, Jf.default, Wf.default, {
      keyword: "type",
      schemaType: ["string", "array"]
    }, {
      keyword: "nullable",
      schemaType: "boolean"
    }, Bf.default, Qf.default];
  Zo.default = Xf;
});
var Rr = R(function (ti) {
  Object.defineProperty(ti, "__esModule", {
    value: !0
  });
  ti.validateAdditionalItems = void 0;
  var J = Dm(),
    Ze = ab(),
    error_11 = {
      message: ({
        params: {
          len: len
        }
      }) => J.str`must NOT have more than ${len} items`,
      params: ({
        params: {
          len: len_2
        }
      }) => J._`{limit: ${len_2}}`
    },
    ep = {
      keyword: "additionalItems",
      type: "array",
      schemaType: ["boolean", "object"],
      before: "uniqueItems",
      error: error_11,
      code(e) {
        let {
            parentSchema: parentSchema_5,
            it: it_27
          } = e,
          {
            items: items_4
          } = parentSchema_5;
        if (!Array.isArray(items_4)) {
          Ze.checkStrictMode(it_27, '"additionalItems" is ignored when "items" is not an array of schemas');
          return;
        }
        ei(e, items_4);
      }
    };
  function ei(e, t) {
    let {
      gen: gen_48,
      schema: schema_31,
      data: data_25,
      keyword: keyword_21,
      it: it_28
    } = e;
    it_28.items = !0;
    let a = gen_48.const("len", J._`${data_25}.length`);
    if (schema_31 === !1) e.setParams({
      len: t.length
    }), e.pass(J._`${a} <= ${t.length}`);else if (typeof schema_31 == "object" && !Ze.alwaysValidSchema(it_28, schema_31)) {
      let u = gen_48.var("valid", J._`${a} <= ${t.length}`);
      gen_48.if(J.not(u), () => c(u)), e.ok(u);
    }
    function c(u) {
      gen_48.forRange("i", t.length, a, dataProp_3 => {
        if (e.subschema({
          keyword: keyword_21,
          dataProp: dataProp_3,
          dataPropType: Ze.Type.Num
        }, u), !it_28.allErrors) gen_48.if(J.not(u), () => gen_48.break());
      });
    }
  }
  ti.validateAdditionalItems = ei;
  ti.default = ep;
});
var Ir = R(function (oi) {
  Object.defineProperty(oi, "__esModule", {
    value: !0
  });
  oi.validateTuple = void 0;
  var zt = Dm(),
    Ne = ab(),
    si = Q(),
    rp = {
      keyword: "items",
      type: "array",
      schemaType: ["object", "array", "boolean"],
      before: "uniqueItems",
      code(e) {
        let {
          schema: schema_32,
          it: it_29
        } = e;
        if (Array.isArray(schema_32)) return ni(e, "additionalItems", schema_32);
        if (it_29.items = !0, Ne.alwaysValidSchema(it_29, schema_32)) return;
        e.ok(si.validateArray(e));
      }
    };
  function ni(e, t, r = e.schema) {
    let {
      gen: gen_49,
      parentSchema: parentSchema_6,
      data: data_26,
      keyword: keyword_22,
      it: it_30
    } = e;
    if (l(parentSchema_6), it_30.opts.unevaluated && r.length && it_30.items !== !0) it_30.items = Ne.mergeEvaluated.items(gen_49, r.length, it_30.items);
    let c = gen_49.name("valid"),
      u = gen_49.const("len", zt._`${data_26}.length`);
    r.forEach((item, b) => {
      if (Ne.alwaysValidSchema(it_30, item)) return;
      gen_49.if(zt._`${u} > ${b}`, () => e.subschema({
        keyword: keyword_22,
        schemaProp: b,
        dataProp: b
      }, c)), e.ok(c);
    });
    function l(f) {
      let {
          opts: opts_22,
          errSchemaPath: errSchemaPath_6
        } = it_30,
        h = r.length,
        p = h === f.minItems && (h === f.maxItems || f[t] === !1);
      if (opts_22.strictTuples && !p) {
        let y = `"${keyword_22}" is ${h}-tuple, but minItems or maxItems/${t} are not specified or different at path "${errSchemaPath_6}"`;
        Ne.checkStrictMode(it_30, y, opts_22.strictTuples);
      }
    }
  }
  oi.validateTuple = ni;
  oi.default = rp;
});
var ui = R(function (ci) {
  Object.defineProperty(ci, "__esModule", {
    value: !0
  });
  var ai = Ir(),
    np = {
      keyword: "prefixItems",
      type: "array",
      schemaType: ["array"],
      before: "uniqueItems",
      code: e => ai.validateTuple(e, "items")
    };
  ci.default = np;
});
var hi = R(function (pi) {
  Object.defineProperty(pi, "__esModule", {
    value: !0
  });
  var Ut = Dm(),
    li = ab(),
    di = Q(),
    fi = Rr(),
    error_12 = {
      message: ({
        params: {
          len: len_3
        }
      }) => Ut.str`must NOT have more than ${len_3} items`,
      params: ({
        params: {
          len: len_4
        }
      }) => Ut._`{limit: ${len_4}}`
    },
    ap = {
      keyword: "items",
      type: "array",
      schemaType: ["object", "boolean"],
      before: "uniqueItems",
      error: error_12,
      code(e) {
        let {
            schema: schema_33,
            parentSchema: parentSchema_7,
            it: it_31
          } = e,
          {
            prefixItems: prefixItems
          } = parentSchema_7;
        if (it_31.items = !0, li.alwaysValidSchema(it_31, schema_33)) return;
        if (prefixItems) fi.validateAdditionalItems(e, prefixItems);else e.ok(di.validateArray(e));
      }
    };
  pi.default = ap;
});
var yi = R(function (mi) {
  Object.defineProperty(mi, "__esModule", {
    value: !0
  });
  var A = Dm(),
    ke = ab(),
    error_13 = {
      message: ({
        params: {
          min: min,
          max: max
        }
      }) => max === void 0 ? A.str`must contain at least ${min} valid item(s)` : A.str`must contain at least ${min} and no more than ${max} valid item(s)`,
      params: ({
        params: {
          min: min_2,
          max: max_2
        }
      }) => max_2 === void 0 ? A._`{minContains: ${min_2}}` : A._`{minContains: ${min_2}, maxContains: ${max_2}}`
    },
    lp = {
      keyword: "contains",
      type: "array",
      schemaType: ["object", "boolean"],
      before: "uniqueItems",
      trackErrors: !0,
      error: error_13,
      code(e) {
        let {
            gen: gen_50,
            schema: schema_34,
            parentSchema: parentSchema_8,
            data: data_27,
            it: it_32
          } = e,
          min_3,
          max_3,
          {
            minContains: minContains,
            maxContains: maxContains
          } = parentSchema_8;
        if (it_32.opts.next) min_3 = minContains === void 0 ? 1 : minContains, max_3 = maxContains;else min_3 = 1;
        let l = gen_50.const("len", A._`${data_27}.length`);
        if (e.setParams({
          min: min_3,
          max: max_3
        }), max_3 === void 0 && min_3 === 0) {
          ke.checkStrictMode(it_32, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
          return;
        }
        if (max_3 !== void 0 && min_3 > max_3) {
          ke.checkStrictMode(it_32, '"minContains" > "maxContains" is always invalid'), e.fail();
          return;
        }
        if (ke.alwaysValidSchema(it_32, schema_34)) {
          let p = A._`${l} >= ${min_3}`;
          if (max_3 !== void 0) p = A._`${p} && ${l} <= ${max_3}`;
          e.pass(p);
          return;
        }
        it_32.items = !0;
        let f = gen_50.name("valid");
        if (max_3 === void 0 && min_3 === 1) _(f, () => gen_50.if(f, () => gen_50.break()));else if (min_3 === 0) {
          if (gen_50.let(f, !0), max_3 !== void 0) gen_50.if(A._`${data_27}.length > 0`, b);
        } else gen_50.let(f, !1), b();
        e.result(f, () => e.reset());
        function b() {
          let p = gen_50.name("_valid"),
            y = gen_50.let("count", 0);
          _(p, () => gen_50.if(p, () => h(y)));
        }
        function _(p, y) {
          gen_50.forRange("i", 0, l, dataProp_4 => {
            e.subschema({
              keyword: "contains",
              dataProp: dataProp_4,
              dataPropType: ke.Type.Num,
              compositeRule: !0
            }, p), y();
          });
        }
        function h(p) {
          if (gen_50.code(A._`${p}++`), max_3 === void 0) gen_50.if(A._`${p} >= ${min_3}`, () => gen_50.assign(f, !0).break());else if (gen_50.if(A._`${p} > ${max_3}`, () => gen_50.assign(f, !1).break()), min_3 === 1) gen_50.assign(f, !0);else gen_50.if(A._`${p} >= ${min_3}`, () => gen_50.assign(f, !0));
        }
      }
    };
  mi.default = lp;
});
var JCr = R(function (vi) {
  Object.defineProperty(vi, "__esModule", {
    value: !0
  });
  vi.validateSchemaDeps = vi.validatePropertyDeps = vi.error = void 0;
  var et = Dm(),
    _i = ab(),
    de = Q();
  vi.error = {
    message: ({
      params: {
        property: property_2,
        depsCount: depsCount,
        deps: deps
      }
    }) => et.str`must have ${depsCount === 1 ? "property" : "properties"} ${deps} when property ${property_2} is present`,
    params: ({
      params: {
        property: property_3,
        depsCount: depsCount_2,
        deps: deps_2,
        missingProperty: missingProperty_6
      }
    }) => et._`{property: ${property_3},
    missingProperty: ${missingProperty_6},
    depsCount: ${depsCount_2},
    deps: ${deps_2}}`
  };
  var fp = {
    keyword: "dependencies",
    type: "object",
    schemaType: "object",
    error: vi.error,
    code(e) {
      let [t, r] = pp(e);
      gi(e, t), $i(e, r);
    }
  };
  function pp({
    schema: schema_35
  }) {
    let t = {},
      r = {};
    for (let s in schema_35) {
      if (s === "__proto__") continue;
      let n = Array.isArray(schema_35[s]) ? t : r;
      n[s] = schema_35[s];
    }
    return [t, r];
  }
  function gi(e, t = e.schema) {
    let {
      gen: gen_51,
      data: data_28,
      it: it_33
    } = e;
    if (Object.keys(t).length === 0) return;
    let o = gen_51.let("missing");
    for (let property_4 in t) {
      let a = t[property_4];
      if (a.length === 0) continue;
      let c = de.propertyInData(gen_51, data_28, property_4, it_33.opts.ownProperties);
      if (e.setParams({
        property: property_4,
        depsCount: a.length,
        deps: a.join(", ")
      }), it_33.allErrors) gen_51.if(c, () => {
        for (let u of a) de.checkReportMissingProp(e, u);
      });else gen_51.if(et._`${c} && (${de.checkMissingProp(e, a, o)})`), de.reportMissingProp(e, o), gen_51.else();
    }
  }
  vi.validatePropertyDeps = gi;
  function $i(e, t = e.schema) {
    let {
        gen: gen_52,
        data: data_29,
        keyword: keyword_23,
        it: it_34
      } = e,
      i = gen_52.name("valid");
    for (let schemaProp_2 in t) {
      if (_i.alwaysValidSchema(it_34, t[schemaProp_2])) continue;
      gen_52.if(de.propertyInData(gen_52, data_29, schemaProp_2, it_34.opts.ownProperties), () => {
        let c = e.subschema({
          keyword: keyword_23,
          schemaProp: schemaProp_2
        }, i);
        e.mergeValidEvaluated(c, i);
      }, () => gen_52.var(i, !0)), e.ok(i);
    }
  }
  vi.validateSchemaDeps = $i;
  vi.default = fp;
});
var Pi = R(function (Si) {
  Object.defineProperty(Si, "__esModule", {
    value: !0
  });
  var Kt = Dm(),
    Ei = ab(),
    error_14 = {
      message: "property name must be valid",
      params: ({
        params: params_2
      }) => Kt._`{propertyName: ${params_2.propertyName}}`
    },
    _p = {
      keyword: "propertyNames",
      type: "object",
      schemaType: ["object", "boolean"],
      error: error_14,
      code(e) {
        let {
          gen: gen_53,
          schema: schema_36,
          data: data_30,
          it: it_35
        } = e;
        if (Ei.alwaysValidSchema(it_35, schema_36)) return;
        let o = gen_53.name("valid");
        gen_53.forIn("key", data_30, i => {
          e.setParams({
            propertyName: i
          }), e.subschema({
            keyword: "propertyNames",
            data: i,
            dataTypes: ["string"],
            propertyName: i,
            compositeRule: !0
          }, o), gen_53.if(Kt.not(o), () => {
            if (e.error(!0), !it_35.allErrors) gen_53.break();
          });
        }), e.ok(o);
      }
    };
  Si.default = _p;
});
var Tr = R(function (Ni) {
  Object.defineProperty(Ni, "__esModule", {
    value: !0
  });
  var qe = Q(),
    U = Dm(),
    $p = Eve(),
    Oe = ab(),
    error_15 = {
      message: "must NOT have additional properties",
      params: ({
        params: params_3
      }) => U._`{additionalProperty: ${params_3.additionalProperty}}`
    },
    wp = {
      keyword: "additionalProperties",
      type: ["object"],
      schemaType: ["boolean", "object"],
      allowUndefined: !0,
      trackErrors: !0,
      error: error_15,
      code(e) {
        let {
          gen: gen_54,
          schema: schema_37,
          parentSchema: parentSchema_9,
          data: data_31,
          errsCount: errsCount_2,
          it: it_36
        } = e;
        if (!errsCount_2) throw Error("ajv implementation error");
        let {
          allErrors: allErrors_6,
          opts: opts_23
        } = it_36;
        if (it_36.props = !0, opts_23.removeAdditional !== "all" && Oe.alwaysValidSchema(it_36, schema_37)) return;
        let u = qe.allSchemaProperties(parentSchema_9.properties),
          l = qe.allSchemaProperties(parentSchema_9.patternProperties);
        f(), e.ok(U._`${errsCount_2} === ${$p.default.errors}`);
        function f() {
          gen_54.forIn("key", data_31, y => {
            if (!u.length && !l.length) h(y);else gen_54.if(b(y), () => h(y));
          });
        }
        function b(y) {
          let v;
          if (u.length > 8) {
            let O = Oe.schemaRefOrVal(it_36, parentSchema_9.properties, "properties");
            v = qe.isOwnProperty(gen_54, O, y);
          } else if (u.length) v = U.or(...u.map(item => U._`${y} === ${item}`));else v = U.nil;
          if (l.length) v = U.or(v, ...l.map(item => U._`${qe.usePattern(e, item)}.test(${y})`));
          return U.not(v);
        }
        function _(y) {
          gen_54.code(U._`delete ${data_31}[${y}]`);
        }
        function h(additionalProperty) {
          if (opts_23.removeAdditional === "all" || opts_23.removeAdditional && schema_37 === !1) {
            _(additionalProperty);
            return;
          }
          if (schema_37 === !1) {
            if (e.setParams({
              additionalProperty: additionalProperty
            }), e.error(), !allErrors_6) gen_54.break();
            return;
          }
          if (typeof schema_37 == "object" && !Oe.alwaysValidSchema(it_36, schema_37)) {
            let v = gen_54.name("valid");
            if (opts_23.removeAdditional === "failing") p(additionalProperty, v, !1), gen_54.if(U.not(v), () => {
              e.reset(), _(additionalProperty);
            });else if (p(additionalProperty, v), !allErrors_6) gen_54.if(U.not(v), () => gen_54.break());
          }
        }
        function p(dataProp_5, v, O) {
          let q = {
            keyword: "additionalProperties",
            dataProp: dataProp_5,
            dataPropType: Oe.Type.Str
          };
          if (O === !1) Object.assign(q, {
            compositeRule: !0,
            createErrors: !1,
            allErrors: !1
          });
          e.subschema(q, v);
        }
      }
    };
  Ni.default = wp;
});
var ji = R(function (Oi) {
  Object.defineProperty(Oi, "__esModule", {
    value: !0
  });
  var qi = dnn(),
    Ft = Q(),
    tt = ab(),
    ki = Tr(),
    Ep = {
      keyword: "properties",
      type: "object",
      schemaType: "object",
      code(e) {
        let {
          gen: gen_55,
          schema: schema_38,
          parentSchema: parentSchema_10,
          data: data_32,
          it: it_37
        } = e;
        if (it_37.opts.removeAdditional === "all" && parentSchema_10.additionalProperties === void 0) ki.default.code(new qi.KeywordCxt(it_37, ki.default, "additionalProperties"));
        let i = Ft.allSchemaProperties(schema_38);
        for (let f of i) it_37.definedProperties.add(f);
        if (it_37.opts.unevaluated && i.length && it_37.props !== !0) it_37.props = tt.mergeEvaluated.props(gen_55, tt.toHash(i), it_37.props);
        let a = i.filter(item => !tt.alwaysValidSchema(it_37, schema_38[item]));
        if (a.length === 0) return;
        let c = gen_55.name("valid");
        for (let f of a) {
          if (u(f)) l(f);else {
            if (gen_55.if(Ft.propertyInData(gen_55, data_32, f, it_37.opts.ownProperties)), l(f), !it_37.allErrors) gen_55.else().var(c, !0);
            gen_55.endIf();
          }
          e.it.definedProperties.add(f), e.ok(c);
        }
        function u(f) {
          return it_37.opts.useDefaults && !it_37.compositeRule && schema_38[f].default !== void 0;
        }
        function l(f) {
          e.subschema({
            keyword: "properties",
            schemaProp: f,
            dataProp: f
          }, c);
        }
      }
    };
  Oi.default = Ep;
});
var Ri = R(function (xi) {
  Object.defineProperty(xi, "__esModule", {
    value: !0
  });
  var Lt = Q(),
    je = Dm(),
    Ht = ab(),
    Gt = ab(),
    Pp = {
      keyword: "patternProperties",
      type: "object",
      schemaType: "object",
      code(e) {
        let {
            gen: gen_56,
            schema: schema_39,
            data: data_33,
            parentSchema: parentSchema_11,
            it: it_38
          } = e,
          {
            opts: opts_24
          } = it_38,
          a = Lt.allSchemaProperties(schema_39),
          c = a.filter(item => Ht.alwaysValidSchema(it_38, schema_39[item]));
        if (a.length === 0 || c.length === a.length && (!it_38.opts.unevaluated || it_38.props === !0)) return;
        let u = opts_24.strictSchema && !opts_24.allowMatchingProperties && parentSchema_11.properties,
          l = gen_56.name("valid");
        if (it_38.props !== !0 && !(it_38.props instanceof je.Name)) it_38.props = Gt.evaluatedPropsToName(gen_56, it_38.props);
        let {
          props: props_3
        } = it_38;
        b();
        function b() {
          for (let p of a) {
            if (u) _(p);
            if (it_38.allErrors) h(p);else gen_56.var(l, !0), h(p), gen_56.if(l);
          }
        }
        function _(p) {
          for (let y in u) if (new RegExp(p).test(y)) Ht.checkStrictMode(it_38, `property ${y} matches pattern ${p} (use allowMatchingProperties)`);
        }
        function h(schemaProp_3) {
          gen_56.forIn("key", data_33, dataProp_6 => {
            gen_56.if(je._`${Lt.usePattern(e, schemaProp_3)}.test(${dataProp_6})`, () => {
              let v = c.includes(schemaProp_3);
              if (!v) e.subschema({
                keyword: "patternProperties",
                schemaProp: schemaProp_3,
                dataProp: dataProp_6,
                dataPropType: Gt.Type.Str
              }, l);
              if (it_38.opts.unevaluated && props_3 !== !0) gen_56.assign(je._`${props_3}[${dataProp_6}]`, !0);else if (!v && !it_38.allErrors) gen_56.if(je.not(l), () => gen_56.break());
            });
          });
        }
      }
    };
  xi.default = Pp;
});
var Ci = R(function (Ti) {
  Object.defineProperty(Ti, "__esModule", {
    value: !0
  });
  var Ii = ab(),
    kp = {
      keyword: "not",
      schemaType: ["object", "boolean"],
      trackErrors: !0,
      code(e) {
        let {
          gen: gen_57,
          schema: schema_40,
          it: it_39
        } = e;
        if (Ii.alwaysValidSchema(it_39, schema_40)) {
          e.fail();
          return;
        }
        let n = gen_57.name("valid");
        e.subschema({
          keyword: "not",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, n), e.failResult(n, () => e.reset(), () => e.error());
      },
      error: {
        message: "must NOT be valid"
      }
    };
  Ti.default = kp;
});
var Di = R(function (Ai) {
  Object.defineProperty(Ai, "__esModule", {
    value: !0
  });
  var Mi = Q(),
    Op = {
      keyword: "anyOf",
      schemaType: "array",
      trackErrors: !0,
      code: Mi.validateUnion,
      error: {
        message: "must match a schema in anyOf"
      }
    };
  Ai.default = Op;
});
var Ui = R(function (zi) {
  Object.defineProperty(zi, "__esModule", {
    value: !0
  });
  var xe = Dm(),
    Vi = ab(),
    error_16 = {
      message: "must match exactly one schema in oneOf",
      params: ({
        params: params_4
      }) => xe._`{passingSchemas: ${params_4.passing}}`
    },
    Rp = {
      keyword: "oneOf",
      schemaType: "array",
      trackErrors: !0,
      error: error_16,
      code(e) {
        let {
          gen: gen_58,
          schema: schema_41,
          parentSchema: parentSchema_12,
          it: it_40
        } = e;
        if (!Array.isArray(schema_41)) throw Error("ajv implementation error");
        if (it_40.opts.discriminator && parentSchema_12.discriminator) return;
        let o = schema_41,
          i = gen_58.let("valid", !1),
          passing = gen_58.let("passing", null),
          c = gen_58.name("_valid");
        e.setParams({
          passing: passing
        }), gen_58.block(u), e.result(i, () => e.reset(), () => e.error(!0));
        function u() {
          o.forEach((item, f) => {
            let b;
            if (Vi.alwaysValidSchema(it_40, item)) gen_58.var(c, !0);else b = e.subschema({
              keyword: "oneOf",
              schemaProp: f,
              compositeRule: !0
            }, c);
            if (f > 0) gen_58.if(xe._`${c} && ${i}`).assign(i, !1).assign(passing, xe._`[${passing}, ${f}]`).else();
            gen_58.if(c, () => {
              if (gen_58.assign(i, !0), gen_58.assign(passing, f), b) e.mergeEvaluated(b, xe.Name);
            });
          });
        }
      }
    };
  zi.default = Rp;
});
var Li = R(function (Fi) {
  Object.defineProperty(Fi, "__esModule", {
    value: !0
  });
  var Ki = ab(),
    Tp = {
      keyword: "allOf",
      schemaType: "array",
      code(e) {
        let {
          gen: gen_59,
          schema: schema_42,
          it: it_41
        } = e;
        if (!Array.isArray(schema_42)) throw Error("ajv implementation error");
        let n = gen_59.name("valid");
        schema_42.forEach((item, i) => {
          if (Ki.alwaysValidSchema(it_41, item)) return;
          let a = e.subschema({
            keyword: "allOf",
            schemaProp: i
          }, n);
          e.ok(n), e.mergeEvaluated(a);
        });
      }
    };
  Fi.default = Tp;
});
var Ji = R(function (Gi) {
  Object.defineProperty(Gi, "__esModule", {
    value: !0
  });
  var Re = Dm(),
    Jt = ab(),
    error_17 = {
      message: ({
        params: params_5
      }) => Re.str`must match "${params_5.ifClause}" schema`,
      params: ({
        params: params_6
      }) => Re._`{failingKeyword: ${params_6.ifClause}}`
    },
    Ap = {
      keyword: "if",
      schemaType: ["object", "boolean"],
      trackErrors: !0,
      error: error_17,
      code(e) {
        let {
          gen: gen_60,
          parentSchema: parentSchema_13,
          it: it_42
        } = e;
        if (parentSchema_13.then === void 0 && parentSchema_13.else === void 0) Jt.checkStrictMode(it_42, '"if" without "then" and "else" is ignored');
        let n = Hi(it_42, "then"),
          o = Hi(it_42, "else");
        if (!n && !o) return;
        let i = gen_60.let("valid", !0),
          a = gen_60.name("_valid");
        if (c(), e.reset(), n && o) {
          let ifClause = gen_60.let("ifClause");
          e.setParams({
            ifClause: ifClause
          }), gen_60.if(a, u("then", ifClause), u("else", ifClause));
        } else if (n) gen_60.if(a, u("then"));else gen_60.if(Re.not(a), u("else"));
        e.pass(i, () => e.error(!0));
        function c() {
          let l = e.subschema({
            keyword: "if",
            compositeRule: !0,
            createErrors: !1,
            allErrors: !1
          }, a);
          e.mergeEvaluated(l);
        }
        function u(l, f) {
          return () => {
            let b = e.subschema({
              keyword: l
            }, a);
            if (gen_60.assign(i, a), e.mergeValidEvaluated(b, i), f) gen_60.assign(f, Re._`${l}`);else e.setParams({
              ifClause: l
            });
          };
        }
      }
    };
  function Hi(e, t) {
    let r = e.schema[t];
    return r !== void 0 && !Jt.alwaysValidSchema(e, r);
  }
  Gi.default = Ap;
});
var Qi = R(function (Bi) {
  Object.defineProperty(Bi, "__esModule", {
    value: !0
  });
  var Wi = ab(),
    Vp = {
      keyword: ["then", "else"],
      schemaType: ["object", "boolean"],
      code({
        keyword: keyword_24,
        parentSchema: parentSchema_14,
        it: it_43
      }) {
        if (parentSchema_14.if === void 0) Wi.checkStrictMode(it_43, `"${keyword_24}" without "if" is ignored`);
      }
    };
  Bi.default = Vp;
});
var Mvo = R(function (Xi) {
  Object.defineProperty(Xi, "__esModule", {
    value: !0
  });
  var Up = Rr(),
    Kp = ui(),
    Fp = Ir(),
    Lp = hi(),
    Hp = yi(),
    Gp = JCr(),
    Jp = Pi(),
    Wp = Tr(),
    Bp = ji(),
    Qp = Ri(),
    Xp = Ci(),
    Yp = Di(),
    Zp = Ui(),
    eh = Li(),
    th = Ji(),
    rh = Qi();
  function sh(e = !1) {
    let t = [Xp.default, Yp.default, Zp.default, eh.default, th.default, rh.default, Jp.default, Wp.default, Gp.default, Bp.default, Qp.default];
    if (e) t.push(Kp.default, Lp.default);else t.push(Up.default, Fp.default);
    return t.push(Hp.default), t;
  }
  Xi.default = sh;
});
var Zi = R(function (Yi) {
  Object.defineProperty(Yi, "__esModule", {
    value: !0
  });
  var k = Dm(),
    error_18 = {
      message: ({
        schemaCode: schemaCode_29
      }) => k.str`must match format "${schemaCode_29}"`,
      params: ({
        schemaCode: schemaCode_30
      }) => k._`{format: ${schemaCode_30}}`
    },
    ih = {
      keyword: "format",
      type: ["number", "string"],
      schemaType: "string",
      $data: !0,
      error: error_18,
      code(e, t) {
        let {
            gen: gen_61,
            data: data_34,
            $data: $data_9,
            schema: o,
            schemaCode: schemaCode_31,
            it: it_44
          } = e,
          {
            opts: opts_25,
            errSchemaPath: errSchemaPath_7,
            schemaEnv: schemaEnv_9,
            self: self_8
          } = it_44;
        if (!opts_25.validateFormats) return;
        if ($data_9) b();else _();
        function b() {
          let h = gen_61.scopeValue("formats", {
              ref: self_8.formats,
              code: opts_25.code.formats
            }),
            p = gen_61.const("fDef", k._`${h}[${schemaCode_31}]`),
            y = gen_61.let("fType"),
            v = gen_61.let("format");
          gen_61.if(k._`typeof ${p} == "object" && !(${p} instanceof RegExp)`, () => gen_61.assign(y, k._`${p}.type || "string"`).assign(v, k._`${p}.validate`), () => gen_61.assign(y, k._`"string"`).assign(v, p)), e.fail$data(k.or(O(), q()));
          function O() {
            if (opts_25.strictSchema === !1) return k.nil;
            return k._`${schemaCode_31} && !${v}`;
          }
          function q() {
            let M = schemaEnv_9.$async ? k._`(${p}.async ? await ${v}(${data_34}) : ${v}(${data_34}))` : k._`${v}(${data_34})`,
              N = k._`(typeof ${v} == "function" ? ${M} : ${v}.test(${data_34}))`;
            return k._`${v} && ${v} !== true && ${y} === ${t} && !${N}`;
          }
        }
        function _() {
          let h = self_8.formats[o];
          if (!h) {
            O();
            return;
          }
          if (h === !0) return;
          let [p, y, v] = q(h);
          if (p === t) e.pass(M());
          function O() {
            if (opts_25.strictSchema === !1) {
              self_8.logger.warn(N());
              return;
            }
            throw Error(N());
            function N() {
              return `unknown format "${o}" ignored in schema at path "${errSchemaPath_7}"`;
            }
          }
          function q(ref_6) {
            let code = ref_6 instanceof RegExp ? k.regexpCode(ref_6) : opts_25.code.formats ? k._`${opts_25.code.formats}${k.getProperty(o)}` : void 0,
              fe = gen_61.scopeValue("formats", {
                key: o,
                ref: ref_6,
                code: code
              });
            if (typeof ref_6 == "object" && !(ref_6 instanceof RegExp)) return [ref_6.type || "string", ref_6.validate, k._`${fe}.validate`];
            return ["string", ref_6, fe];
          }
          function M() {
            if (typeof h == "object" && !(h instanceof RegExp) && h.async) {
              if (!schemaEnv_9.$async) throw Error("async format in sync schema");
              return k._`await ${v}(${data_34})`;
            }
            return typeof y == "function" ? k._`${v}(${data_34})` : k._`${v}.test(${data_34})`;
          }
        }
      }
    };
  Yi.default = ih;
});
var Dvo = R(function (ea) {
  Object.defineProperty(ea, "__esModule", {
    value: !0
  });
  var ch = Zi(),
    uh = [ch.default];
  ea.default = uh;
});
var Lvo = R(function (ta) {
  Object.defineProperty(ta, "__esModule", {
    value: !0
  });
  ta.contentVocabulary = ta.metadataVocabulary = void 0;
  ta.metadataVocabulary = ["title", "description", "default", "deprecated", "readOnly", "writeOnly", "examples"];
  ta.contentVocabulary = ["contentMediaType", "contentEncoding", "contentSchema"];
});
var na = R(function (sa) {
  Object.defineProperty(sa, "__esModule", {
    value: !0
  });
  var fh = Ovo(),
    ph = Ivo(),
    hh = Mvo(),
    mh = Dvo(),
    Wt = Lvo(),
    yh = [fh.default, ph.default, (0, hh.default)(), mh.default, Wt.metadataVocabulary, Wt.contentVocabulary];
  sa.default = yh;
});
var ca = R(function (ia) {
  Object.defineProperty(ia, "__esModule", {
    value: !0
  });
  ia.DiscrError = void 0;
  var oa;
  (function (e) {
    e.Tag = "tag", e.Mapping = "mapping";
  })(oa || (ia.DiscrError = oa = {}));
});
var Nvo = R(function (la) {
  Object.defineProperty(la, "__esModule", {
    value: !0
  });
  var Y = Dm(),
    rt = ca(),
    Bt = yWn(),
    gh = cnn(),
    ua = ab(),
    error_19 = {
      message: ({
        params: {
          discrError: discrError,
          tagName: tagName
        }
      }) => discrError === rt.DiscrError.Tag ? `tag "${tagName}" must be string` : `value of tag "${tagName}" must be in oneOf`,
      params: ({
        params: {
          discrError: discrError_2,
          tag: tag,
          tagName: tagName_2
        }
      }) => Y._`{error: ${discrError_2}, tag: ${tagName_2}, tagValue: ${tag}}`
    },
    vh = {
      keyword: "discriminator",
      type: "object",
      schemaType: "object",
      error: error_19,
      code(e) {
        let {
            gen: gen_62,
            data: data_35,
            schema: schema_43,
            parentSchema: parentSchema_15,
            it: it_45
          } = e,
          {
            oneOf: oneOf
          } = parentSchema_15;
        if (!it_45.opts.discriminator) throw Error("discriminator: requires discriminator option");
        let a = schema_43.propertyName;
        if (typeof a != "string") throw Error("discriminator: requires propertyName");
        if (schema_43.mapping) throw Error("discriminator: mapping is not supported");
        if (!oneOf) throw Error("discriminator: requires oneOf keyword");
        let c = gen_62.let("valid", !1),
          tag_2 = gen_62.const("tag", Y._`${data_35}${Y.getProperty(a)}`);
        gen_62.if(Y._`typeof ${tag_2} == "string"`, () => l(), () => e.error(!1, {
          discrError: rt.DiscrError.Tag,
          tag: tag_2,
          tagName: a
        })), e.ok(c);
        function l() {
          let _ = b();
          gen_62.if(!1);
          for (let h in _) gen_62.elseIf(Y._`${tag_2} === ${h}`), gen_62.assign(c, f(_[h]));
          gen_62.else(), e.error(!1, {
            discrError: rt.DiscrError.Mapping,
            tag: tag_2,
            tagName: a
          }), gen_62.endIf();
        }
        function f(schemaProp_4) {
          let h = gen_62.name("valid"),
            p = e.subschema({
              keyword: "oneOf",
              schemaProp: schemaProp_4
            }, h);
          return e.mergeEvaluated(p, Y.Name), h;
        }
        function b() {
          var _;
          let h = {},
            p = v(parentSchema_15),
            y = !0;
          for (let M = 0; M < oneOf.length; M++) {
            let N = oneOf[M];
            if ((N === null || N === void 0 ? void 0 : N.$ref) && !ua.schemaHasRulesButRef(N, it_45.self.RULES)) {
              let $ref_2 = N.$ref;
              if (N = Bt.resolveRef.call(it_45.self, it_45.schemaEnv.root, it_45.baseId, $ref_2), N instanceof Bt.SchemaEnv) N = N.schema;
              if (N === void 0) throw new gh.default(it_45.opts.uriResolver, it_45.baseId, $ref_2);
            }
            let ee = (_ = N === null || N === void 0 ? void 0 : N.properties) === null || _ === void 0 ? void 0 : _[a];
            if (typeof ee != "object") throw Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${a}"`);
            y = y && (p || v(N)), O(ee, M);
          }
          if (!y) throw Error(`discriminator: "${a}" must be required`);
          return h;
          function v({
            required: required
          }) {
            return Array.isArray(required) && required.includes(a);
          }
          function O(M, N) {
            if (M.const) q(M.const, N);else if (M.enum) for (let ee of M.enum) q(ee, N);else throw Error(`discriminator: "properties/${a}" must have "const" or "enum"`);
          }
          function q(M, N) {
            if (typeof M != "string" || M in h) throw Error(`discriminator: "${a}" values must be unique strings`);
            h[M] = N;
          }
        }
      }
    };
  la.default = vh;
});
var da = R(function (ay, bh) {
  bh.exports = {
    $schema: "http://json-schema.org/draft-07/schema#",
    $id: "http://json-schema.org/draft-07/schema#",
    title: "Core schema meta-schema",
    definitions: {
      schemaArray: {
        type: "array",
        minItems: 1,
        items: {
          $ref: "#"
        }
      },
      nonNegativeInteger: {
        type: "integer",
        minimum: 0
      },
      nonNegativeIntegerDefault0: {
        allOf: [{
          $ref: "#/definitions/nonNegativeInteger"
        }, {
          default: 0
        }]
      },
      simpleTypes: {
        enum: ["array", "boolean", "integer", "null", "number", "object", "string"]
      },
      stringArray: {
        type: "array",
        items: {
          type: "string"
        },
        uniqueItems: !0,
        default: []
      }
    },
    type: ["object", "boolean"],
    properties: {
      $id: {
        type: "string",
        format: "uri-reference"
      },
      $schema: {
        type: "string",
        format: "uri"
      },
      $ref: {
        type: "string",
        format: "uri-reference"
      },
      $comment: {
        type: "string"
      },
      title: {
        type: "string"
      },
      description: {
        type: "string"
      },
      default: !0,
      readOnly: {
        type: "boolean",
        default: !1
      },
      examples: {
        type: "array",
        items: !0
      },
      multipleOf: {
        type: "number",
        exclusiveMinimum: 0
      },
      maximum: {
        type: "number"
      },
      exclusiveMaximum: {
        type: "number"
      },
      minimum: {
        type: "number"
      },
      exclusiveMinimum: {
        type: "number"
      },
      maxLength: {
        $ref: "#/definitions/nonNegativeInteger"
      },
      minLength: {
        $ref: "#/definitions/nonNegativeIntegerDefault0"
      },
      pattern: {
        type: "string",
        format: "regex"
      },
      additionalItems: {
        $ref: "#"
      },
      items: {
        anyOf: [{
          $ref: "#"
        }, {
          $ref: "#/definitions/schemaArray"
        }],
        default: !0
      },
      maxItems: {
        $ref: "#/definitions/nonNegativeInteger"
      },
      minItems: {
        $ref: "#/definitions/nonNegativeIntegerDefault0"
      },
      uniqueItems: {
        type: "boolean",
        default: !1
      },
      contains: {
        $ref: "#"
      },
      maxProperties: {
        $ref: "#/definitions/nonNegativeInteger"
      },
      minProperties: {
        $ref: "#/definitions/nonNegativeIntegerDefault0"
      },
      required: {
        $ref: "#/definitions/stringArray"
      },
      additionalProperties: {
        $ref: "#"
      },
      definitions: {
        type: "object",
        additionalProperties: {
          $ref: "#"
        },
        default: {}
      },
      properties: {
        type: "object",
        additionalProperties: {
          $ref: "#"
        },
        default: {}
      },
      patternProperties: {
        type: "object",
        additionalProperties: {
          $ref: "#"
        },
        propertyNames: {
          format: "regex"
        },
        default: {}
      },
      dependencies: {
        type: "object",
        additionalProperties: {
          anyOf: [{
            $ref: "#"
          }, {
            $ref: "#/definitions/stringArray"
          }]
        }
      },
      propertyNames: {
        $ref: "#"
      },
      const: !0,
      enum: {
        type: "array",
        items: !0,
        minItems: 1,
        uniqueItems: !0
      },
      type: {
        anyOf: [{
          $ref: "#/definitions/simpleTypes"
        }, {
          type: "array",
          items: {
            $ref: "#/definitions/simpleTypes"
          },
          minItems: 1,
          uniqueItems: !0
        }]
      },
      format: {
        type: "string"
      },
      contentMediaType: {
        type: "string"
      },
      contentEncoding: {
        type: "string"
      },
      if: {
        $ref: "#"
      },
      then: {
        $ref: "#"
      },
      else: {
        $ref: "#"
      },
      allOf: {
        $ref: "#/definitions/schemaArray"
      },
      anyOf: {
        $ref: "#/definitions/schemaArray"
      },
      oneOf: {
        $ref: "#/definitions/schemaArray"
      },
      not: {
        $ref: "#"
      }
    },
    default: !0
  };
});
var _Wn = R(function (W, Cr) {
  Object.defineProperty(W, "__esModule", {
    value: !0
  });
  W.MissingRefError = W.ValidationError = W.CodeGen = W.Name = W.nil = W.stringify = W.str = W._ = W.KeywordCxt = W.Ajv = void 0;
  var Eh = Pvo(),
    Sh = na(),
    Ph = Nvo(),
    fa = da(),
    Nh = ["/properties"],
    Qt = "http://json-schema.org/draft-07/schema";
  class pt extends Eh.default {
    _addVocabularies() {
      if (super._addVocabularies(), Sh.default.forEach(item => this.addVocabulary(item)), this.opts.discriminator) this.addKeyword(Ph.default);
    }
    _addDefaultMetaSchema() {
      if (super._addDefaultMetaSchema(), !this.opts.meta) return;
      let e = this.opts.$data ? this.$dataMetaSchema(fa, Nh) : fa;
      this.addMetaSchema(e, Qt, !1), this.refs["http://json-schema.org/schema"] = Qt;
    }
    defaultMeta() {
      return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(Qt) ? Qt : void 0);
    }
  }
  W.Ajv = pt;
  Cr.exports = W = pt;
  Cr.exports.Ajv = pt;
  Object.defineProperty(W, "__esModule", {
    value: !0
  });
  W.default = pt;
  var kh = dnn();
  Object.defineProperty(W, "KeywordCxt", {
    enumerable: !0,
    get: function () {
      return kh.KeywordCxt;
    }
  });
  var st = Dm();
  Object.defineProperty(W, "_", {
    enumerable: !0,
    get: function () {
      return st._;
    }
  });
  Object.defineProperty(W, "str", {
    enumerable: !0,
    get: function () {
      return st.str;
    }
  });
  Object.defineProperty(W, "stringify", {
    enumerable: !0,
    get: function () {
      return st.stringify;
    }
  });
  Object.defineProperty(W, "nil", {
    enumerable: !0,
    get: function () {
      return st.nil;
    }
  });
  Object.defineProperty(W, "Name", {
    enumerable: !0,
    get: function () {
      return st.Name;
    }
  });
  Object.defineProperty(W, "CodeGen", {
    enumerable: !0,
    get: function () {
      return st.CodeGen;
    }
  });
  var qh = hWn();
  Object.defineProperty(W, "ValidationError", {
    enumerable: !0,
    get: function () {
      return qh.default;
    }
  });
  var Oh = cnn();
  Object.defineProperty(W, "MissingRefError", {
    enumerable: !0,
    get: function () {
      return Oh.default;
    }
  });
});
export { Dm, ab, Eve, dnn, hWn, cnn, yWn, Pvo, XCr, Ovo, Ivo, JCr, Mvo, Dvo, Lvo, Nvo, _Wn };