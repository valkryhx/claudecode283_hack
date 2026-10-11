// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { P, te, l } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { re, Gt } from "B:/~BUN/root/chunk-y04k89s2.js";
import { fs } from "B:/~BUN/root/chunk-290k5gh5.js";
import { Mm, Fv, G, m6n, s8e, y1r } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { m } from "B:/~BUN/root/chunk-51n463p1.js";
import { b } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Yd } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { he, Vn } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { no } from "B:/~BUN/root/chunk-ewvnv67m.js";
import { De } from "B:/~BUN/root/chunk-5dk9zqaz.js";
import { q6e } from "B:/~BUN/root/chunk-vkf9secw.js";
import { Uhe, Rdn, Adn } from "B:/~BUN/root/chunk-yzqr5eyd.js";
import { Wd, Ad as path, gs } from "B:/~BUN/root/chunk-gsxez0fk.js";
import { L } from "B:/~BUN/root/chunk-z1enakv9.js";
import { Re } from "B:/~BUN/root/chunk-yv67t8hr.js";
var GF = ["userSettings", "flagSettings", "policySettings"];
function jCe(e) {
  let o = new Set(fs()),
    r = Jle(e),
    options,
    mcpServers;
  for (let n of GF) {
    if (!o.has(n)) continue;
    let p = he(n)?.pluginConfigs;
    for (let i of r) {
      let a = p?.[i];
      if (a?.options) options = {
        ...options,
        ...a.options
      };
      if (a?.mcpServers) {
        mcpServers = mcpServers ?? {};
        for (let [f, c] of Object.entries(a.mcpServers)) mcpServers[f] = {
          ...mcpServers[f],
          ...c
        };
      }
    }
  }
  return {
    options: options,
    mcpServers: mcpServers
  };
}
function Jle(e) {
  let o = `@${Wd}`,
    r = e.endsWith(o) ? e.slice(0, -o.length) : "";
  return r !== "" && !r.includes("@") ? [r, e] : [e];
}
function QVn(e) {
  let o = new Set(fs()),
    r;
  for (let t of GF) {
    if (!o.has(t)) continue;
    let s = he(t)?.enabledPlugins?.[e];
    if (s !== void 0) r = s;
  }
  return r;
}
import { join as Bt } from "path";
var vt = "scripts/bundle-builtin-hooks-module.ts";
function Nt(e) {
  let o = G(e) ? e.files : void 0;
  return Object.freeze(Object.fromEntries((G(o) ? Object.entries(o) : []).filter(item => typeof item[1] === "string")));
}
function Tt(e, o) {
  let r = G(e) ? e.scan : void 0;
  if (G(r) && Array.isArray(r.hooks) && Array.isArray(r.calls) && (r.nextTo === void 0 || Array.isArray(r.nextTo))) return r;
  throw new P(`the build carried no hooks module scan for ${o}`, "the build carried no hooks module scan for a built-in");
}
var Ot = (e, o) => new P(`the hooks module of ${e} cannot ship: ${o}`, "the hooks module of a built-in cannot ship");
var me = "hooks/register.ts";
var Co = e => `builtin:${e}/${me}`;
var to = "vendor/claude-code-mods/mods";
var so = "mods/";
import { resolve as Rt } from "path";
var le = () => Rt(import.meta.dirname, "../../../../../..");
import { dirname as Ct, relative as $t, resolve as Mt, sep as _t } from "path";
var $o = "builtin-hooks-module:";
function Lt(e, o) {
  let r = o.slice($o.length);
  return r.startsWith(so) ? `${to}/${r.slice(so.length)}` : $t(le(), Mt(Ct(e), r)).split(_t).join("/");
}
var po = "builtin-hooks-module";
var Uh = {
  name: po,
  setup(e) {
    e.onResolve({
      filter: /^builtin-hooks-module:/
    }, o => ({
      path: Lt(o.importer, o.path),
      namespace: po
    })), e.onLoad({
      filter: /.*/,
      namespace: po
    }, async o => {
      let r = Bun.spawn([process.execPath, "--smol", Bt(le(), vt), o.path], {
          cwd: le(),
          stdout: "pipe",
          stderr: "pipe",
          windowsHide: !0
        }),
        [t, s, n] = await Promise.all([new Response(r.stdout).text(), new Response(r.stderr).text(), r.exited]);
      if (n !== 0) throw Ot(o.path, s);
      return {
        contents: `module.exports = ${t}`,
        loader: "js"
      };
    });
  }
};
var J = e => e instanceof Error && "code" in e ? String(e.code) : "EIO";
var Mo = (e, o, r) => new De(`${e}: ${o}: no such file`, {
  cause: J(r)
});
var _o = ["EMFILE", "ENFILE"];
async function io(e, o) {
  try {
    return await e;
  } catch (error) {
    throw o(error);
  }
}
function Lo(e, o, r) {
  let t = J(r);
  return _o.includes(t) ? new De(`${e}: ${o}: not read, no file descriptor free (${t})`) : Mo(e, o, r);
}
var Kt = (e, o, r) => new De(`${e}: ${o}: not readable (${J(r)})`);
import { sep as es } from "path";
var Bo = `/** @jsxRuntime classic */
/** @jsx h */
/** @jsxFrag Fragment */
`;
var fo = e => m6n[s8e.find(item => e.endsWith(item)) ?? ""] ?? "js";
function Uo(e) {
  let o = typeof e === "object" && e ? e : {},
    r = "errors" in o ? o.errors : void 0;
  return Array.isArray(r) ? r : [o];
}
function Go(e, o) {
  let r = typeof e === "object" && e !== null,
    t = r && "message" in e ? String(e.message) : "",
    s = r && "position" in e ? e.position : void 0;
  if (!(typeof s === "object" && s !== null && "line" in s && typeof s.line === "number" && "column" in s)) return t;
  return `${t} (line ${Number(s.line) - o}, column ${String(s.column)})`;
}
var Vo = (e, o) => Uo(e).map(item => Go(item, o)).filter(item => item !== "").join("; ") || String(e);
function wdn(e, o) {
  let loader = fo(e),
    t = loader === "js",
    s = loader === "ts" ? "" : Bo;
  if (t) return o;
  try {
    let n = {
      loader: loader,
      macro: !1
    };
    return new Bun.Transpiler(n).transformSync(`${s}${o}`);
  } catch (error) {
    throw new De(Vo(error, Gt(s, `
`)));
  }
}
var ULr = e => s8e.some(item => e.endsWith(item));
var mo = 32;
var lo = 1048576;
var zo = 8388608;
function Wo(e) {
  let o = [e];
  if (e.endsWith(".js")) {
    let r = e.slice(0, -3);
    o.push(`${r}.ts`, `${r}.tsx`);
  }
  if (e.endsWith(".jsx")) o.push(`${e.slice(0, -4)}.tsx`);
  if (e.endsWith(".mjs")) o.push(`${e.slice(0, -4)}.mts`);
  if (e.endsWith(".cjs")) o.push(`${e.slice(0, -4)}.cts`);
  for (let r of s8e) o.push(`${e}${r}`), o.push(`${e}${es}index${r}`);
  return o;
}
var G6e = "claude-code";
var iOo = (e, o, r) => new De(`${e}: cannot import "${o}" (from ${r}): a hooks module imports its own files by relative path and "${G6e}", nothing else`);
import { dirname as Ko, resolve as qo } from "path";
var Xo = (e, o) => [".", "..", "./", "../"].includes(e) ? qo(Ko(o), e, "index") : qo(Ko(o), e);
var BLr = e => e === "." || e === ".." || e.startsWith("./") || e.startsWith("../");
var Yo = ["no such file", "not a regular file", "resolves outside the plugin's folder"];
import { isAbsolute as Es, relative as Zo, sep as bs } from "path";
import { readFile as is } from "fs/promises";
var uo = (e, o) => new De(`${e}: ${o} is over ${lo} bytes and was not read`);
async function Ee(e, {
  real: real,
  size: size
}, t) {
  if (size > lo) throw uo(t, e);
  try {
    return {
      real: real,
      source: await is(real, "utf8")
    };
  } catch (error) {
    throw Lo(t, e, error);
  }
}
import { lstat as ms, realpath as Jo } from "fs/promises";
import { basename as ls, isAbsolute as ds, relative as us, sep as cs } from "path";
async function _Fe(e, o, r) {
  let t = await io(Jo(o), f => Kt(r, ls(o), f)),
    s = f => Lo(r, e, f),
    real_2 = await io(Jo(e), s),
    p = us(t, real_2);
  if (p === ".." || p.startsWith(`..${cs}`) || ds(p)) throw new De(`${r}: ${e}: ${real_2} resolves outside the plugin's folder`);
  let a = await io(ms(real_2), s);
  if (!a.isFile()) throw new De(`${r}: ${e}: not a regular file`);
  return {
    real: real_2,
    size: a.size
  };
}
var Qo = (e, o) => new De(`${e}: ${o} is not named like code and was not loaded: a hooks module and the files it imports end in ` + y1r);
function be(e, o, r) {
  let t = [o, r].find(item => !ULr(item));
  if (t !== void 0) throw Qo(e, t);
}
var jLr = (e, o) => o.startsWith(`${e}: `) ? o.slice(`${e}: `.length) : o;
async function aOo({
  spelled: spelled,
  importer: importer,
  root: root,
  pluginName: pluginName
}, s, n) {
  let p = `${pluginName}: cannot import "${spelled}" (from ${Zo(root, importer) || importer}):`,
    i = Xo(spelled, importer),
    a = Zo(root, i);
  if (a === ".." || a.startsWith(`..${bs}`) || Es(a)) throw new De(`${p} it is outside the plugin's folder (${root})`);
  let c = [];
  for (let file of Wo(i)) {
    let source = s.get(file);
    if (source !== void 0) return {
      file: file,
      source: source
    };
    try {
      let x = await _Fe(file, root, pluginName);
      be(pluginName, file, x.real);
      let file_2 = n.get(x.real),
        source_2 = file_2 === void 0 ? void 0 : s.get(file_2);
      if (file_2 !== void 0 && source_2 !== void 0) return {
        file: file_2,
        source: source_2
      };
      let {
        real: real_3,
        source: source_3
      } = await Ee(file, x, pluginName);
      return {
        file: file,
        source: source_3,
        real: real_3
      };
    } catch (error) {
      let g = l(error);
      if (!(error instanceof De) || !Yo.some(item => g.endsWith(item))) throw new De(`${p} ${jLr(pluginName, g)}`);
      let j = error.cause === void 0;
      c.push(j ? g : `${g} (${String(error.cause)})`);
    }
  }
  throw new De(`${p} no such file under ${root}`, c.length === 0 ? void 0 : {
    cause: c.join("; ")
  });
}
var er = (e, o, r) => new De(`${e}: ${o} ${r}`);
var Ts = (e, o) => er(e, o, `takes the module over ${zo} bytes in total and was not read`);
async function As(e, o, r) {
  let t = await _Fe(e, o, r);
  return be(r, e, t.real), Ee(e, t, r);
}
var WLr = () => q6e();
var Se = or();
var rr = 80;
function vdn() {
  let e = new Map();
  return {
    get: o => e.get(o),
    set: (o, r) => {
      e.set(o, r);
    }
  };
}
var tr = vdn();
function or() {
  let e = vdn(),
    o = vdn();
  return {
    register: (r, t) => {
      e.set(r, t);
    },
    source: r => e.get(r),
    registerScan: (r, t) => {
      o.set(r, t);
    },
    scan: r => o.get(r)
  };
}
function sr(e, o) {
  let r = o(e);
  while (r !== void 0) {
    if (r.type === "FunctionExpression" || r.type === "ArrowFunctionExpression" || r.type === "FunctionDeclaration") return r;
    r = o(r);
  }
  return;
}
function Q({
  call: call,
  scanned: scanned,
  what: what,
  holder: holder
}) {
  let call_2 = scanned.parentOf(call),
    n = call_2 === void 0 || call_2.type === "ExpressionStatement" || (call_2.type === "ReturnStatement" || call_2.type === "ArrowFunctionExpression" && call_2.body === call) && sr(call, scanned.parentOf) === holder,
    p = call_2 !== void 0 && (call_2.type === "SequenceExpression" || call_2.type === "ChainExpression" || call_2.type === "ParenthesizedExpression" || call_2.type === "LogicalExpression" && call_2.right === call || call_2.type === "ConditionalExpression" && call_2.test !== call || call_2.type === "UnaryExpression" && call_2.operator === "void" || call_2.type === "AwaitExpression");
  if (n) return;
  if (p) {
    Q({
      call: call_2,
      scanned: scanned,
      what: what,
      holder: holder
    });
    return;
  }
  throw scanned.refuse(call, `the value of ${what} is kept (assigned, passed, read, or returned from a nested function); it takes .catch(handler) where it is called and nothing else`);
}
var Z = "Client";
var nr = (e, o) => e.id === o || e.params.includes(o);
var ir = {
  VariableDeclarator: (e, o) => e.id === o,
  FunctionDeclaration: nr,
  FunctionExpression: nr,
  ArrowFunctionExpression: (e, o) => e.params.includes(o),
  ClassDeclaration: (e, o) => e.id === o,
  ClassExpression: (e, o) => e.id === o,
  CatchClause: (e, o) => e.param === o,
  AssignmentPattern: (e, o) => e.left === o,
  RestElement: (e, o) => e.argument === o,
  ArrayPattern: (e, o) => e.elements.includes(o),
  Property: (e, o, r) => e.value === o && r?.type === "ObjectPattern",
  ImportSpecifier: (e, o) => e.local === o,
  ImportDefaultSpecifier: (e, o) => e.local === o,
  ImportNamespaceSpecifier: (e, o) => e.local === o
};
var Bs = e => ir[e.type];
var Us = (e, o) => (o?.type === "Property" || o?.type === "PropertyDefinition" || o?.type === "MethodDefinition") && o.key === e && !o.computed;
var ar = e => typeof e === "object" && e !== null && typeof e.type === "string";
function bx(node_2, o, r) {
  function t(s) {
    if (o(s), r?.(s.node)) return;
    let {
      node: n
    } = s;
    function p(node) {
      if (ar(node)) t({
        node: node,
        parent: n,
        grandparent: s.parent
      });
    }
    for (let i of Object.keys(n)) {
      if (i === "loc" || i === "type" || i === "start" || i === "end") continue;
      let a = n[i];
      Array.isArray(a) ? a.forEach(p) : p(a);
    }
  }
  t({
    node: node_2,
    parent: void 0,
    grandparent: void 0
  });
}
function Ws(e) {
  let o = new Map();
  return bx(e, ({
    node: node_3,
    parent: parent
  }) => {
    if (parent !== void 0) o.set(node_3, parent);
  }), o;
}
function fr(e) {
  let o;
  for (let property of e.properties) {
    if (property.type === "SpreadElement") {
      o = o && {
        ...o,
        isSpreadAfter: !0
      };
      continue;
    }
    let {
      key: key
    } = property;
    if (!property.computed && property.kind === "init" && (key.type === "Identifier" && key.name === "module" || key.type === "Literal" && key.value === "module")) o = {
      property: property,
      isSpreadAfter: !1
    };
  }
  return o;
}
function V(e) {
  if (e === void 0) return "no argument";
  switch (e.type) {
    case "Identifier":
      return `the variable ${e.name}`;
    case "TemplateLiteral":
      return "a template with a substitution";
    case "SpreadElement":
      return "a spread";
    case "Literal":
      return `the literal ${e.raw ?? String(e.value)}`;
    case "MemberExpression":
      return "a member read";
    case "CallExpression":
      return "a call";
    case "BinaryExpression":
      return "a concatenation";
    case "ObjectExpression":
      return "an object whose plugin or key is not a string literal";
    default:
      return `a ${e.type}`;
  }
}
function M(e) {
  if (e.type === "Literal") return typeof e.value === "string" ? e.value : void 0;
  if (e.type !== "TemplateLiteral" || e.expressions.length !== 0) return;
  let o = e.quasis[0]?.value.cooked;
  return o === void 0 || o === null ? void 0 : o;
}
function mr(e, at_2) {
  if (!at_2 || at_2.type !== "ObjectExpression") return {
    at: at_2 ?? e,
    problem: `Client takes its props as an object literal ({ module: "./board.tsx", key }), so the surface module it names can be read before it runs (got ${V(at_2)})`
  };
  let r = fr(at_2);
  if (!r) return {
    at: at_2,
    problem: `Client names no module: give it module, the surface module's path as a string literal ("./board.tsx")`
  };
  if (r.isSpreadAfter) return {
    at: r.property,
    problem: "a spread after module in Client(...) could replace it: put module after the spread"
  };
  let {
      value: t
    } = r.property,
    spelled_2 = M(t);
  if (spelled_2 === void 0) return {
    at: t,
    problem: `Client module must be a string literal, the surface module's path relative to this file (got ${V(t)})`
  };
  return {
    at: t,
    spelled: spelled_2
  };
}
var co = e => e.type === "Identifier" && e.name === Z || e.type === "Literal" && e.value === Z || e.type === "MemberExpression" && !e.computed && e.property.type === "Identifier" && e.property.name === Z;
var lr = "h";
function dr(e) {
  let {
    callee: callee
  } = e;
  if (callee.type !== "Super" && co(callee)) return {
    argument: e.arguments[0]
  };
  let [r, argument] = e.arguments;
  return callee.type === "Identifier" && callee.name === lr && r !== void 0 && r.type !== "SpreadElement" && co(r) ? {
    argument: argument
  } : void 0;
}
function xo(e) {
  let o = [];
  return bx(e, ({
    node: node_4
  }) => {
    if (node_4.type !== "CallExpression") return;
    let t = dr(node_4);
    if (t) o.push(mr(node_4, t.argument));
  }), o.toSorted((r, t) => t.at.start - r.at.start);
}
var component = "default";
function I(e) {
  let o = e.type === "Identifier",
    r = e.type === "Literal";
  return o ? e.name : r ? String(e.value) : "";
}
function ur(e) {
  let o = [];
  for (let r of e.body) if (r.type === "ExportDefaultDeclaration") o.push(component);else if (r.type === "ExportAllDeclaration") {
    if (r.exported !== null && r.exported) o.push(I(r.exported));
  } else if (r.type === "ExportNamedDeclaration") {
    let {
      declaration: declaration
    } = r;
    if (declaration?.type === "FunctionDeclaration" || declaration?.type === "ClassDeclaration") o.push(declaration.id.name);else if (declaration?.type === "VariableDeclaration") {
      for (let {
        id: id
      } of declaration.declarations) if (id.type === "Identifier") o.push(id.name);
    }
    for (let n of r.specifiers) o.push(I(n.exported));
  }
  return o;
}
var cr = e => /^[A-Z][A-Za-z0-9]*$/.test(e) && /[a-z]/.test(e);
function V2o(e) {
  let o = ur(e);
  if (o.includes(component)) return {
    component: component
  };
  let r = o.filter(cr),
    [component_2] = r;
  if (r.length === 1 && component_2 !== void 0) return {
    component: component_2
  };
  return {
    problem: `exports ${r.length === 0 ? "no component" : r.join(", ")}: give it a default export or a single capitalized one (export function Board(props, surface) { ... })`
  };
}
import { dirname as mn, isAbsolute as ln, relative as dn, resolve as xr, sep as yr } from "path";
function yo(e) {
  let {
      spelled: spelled_3,
      file: file_3,
      root: root_2
    } = e,
    s = `Client module "${spelled_3}"`;
  if (!BLr(spelled_3)) return {
    problem: `${s} is not relative: spell the surface module's path from this file ("./board.tsx")`
  };
  if (!ULr(spelled_3)) return {
    problem: `${s} is not named like code: a surface module's path ends in ` + y1r
  };
  let n = xr(mn(file_3), spelled_3),
    p = dn(xr(root_2), n);
  return p === ".." || p.startsWith(`..${yr}`) || ln(p) ? {
    problem: `${s} leaves the plugin's folder`
  } : {
    module: p.split(yr).join("/")
  };
}
function gr(e) {
  try {
    return WLr().parse(e, {
      ecmaVersion: "latest",
      sourceType: "module"
    });
  } catch {
    return;
  }
}
function q2o(e, file_4, root_3) {
  if (!e.includes(Z)) return e;
  let t = gr(e),
    s = e;
  for (let n of t ? xo(t) : []) {
    if (!("spelled" in n)) continue;
    let p = yo({
      spelled: n.spelled,
      file: file_4,
      root: root_3
    });
    if ("module" in p) s = s.slice(0, n.at.start) + b(p.module) + s.slice(n.at.end);
  }
  return s;
}
function jr(e) {
  let o = new Set();
  for (let [file_5, t] of e.files) for (let s of xo(t.scanned.program)) {
    if ("problem" in s) throw t.scanned.refuse(s.at, s.problem);
    let n = yo({
      spelled: s.spelled,
      file: file_5,
      root: e.root
    });
    if ("problem" in n) throw t.scanned.refuse(s.at, n.problem);
    o.add(n.module);
  }
  return [...o].sort();
}
function kr(e) {
  let o = !1;
  for (let {
    scanned: scanned_2
  } of e.files.values()) bx(scanned_2.program, t => {
    if (t.node.type === "ImportExpression") o = !0;
  }, () => o);
  return o;
}
function Er(e) {
  let o = new Set();
  function r(t) {
    if (t === null) return;
    switch (t.type) {
      case "Identifier":
        o.add(t.name);
        return;
      case "ArrayPattern":
        t.elements.forEach(r);
        return;
      case "ObjectPattern":
        for (let s of t.properties) r(s.type === "Property" ? s.value : s);
        return;
      case "AssignmentPattern":
        r(t.left);
        return;
      case "RestElement":
        r(t.argument);
        return;
      default:
        return;
    }
  }
  return bx(e, ({
    node: node_5
  }) => {
    let s = (node_5.type === "ForInStatement" || node_5.type === "ForOfStatement") && node_5.left.type !== "VariableDeclaration";
    if (node_5.type === "AssignmentExpression") r(node_5.left);else if (node_5.type === "UpdateExpression") r(node_5.argument);else if (s) r(node_5.left);
  }), o;
}
var ee = (e, o, r) => o !== void 0 && (Bs(o)?.(o, e, r) ?? !1);
function go(e, o) {
  let r = [];
  return bx(e, ({
    node: node_6,
    parent: parent_2,
    grandparent: grandparent
  }) => {
    if (node_6.type === "Identifier" && node_6.name === o && ee(node_6, parent_2, grandparent)) r.push(node_6);
  }), r;
}
function bn(e, o) {
  let r = o(e);
  return r?.type === "ImportSpecifier" || r?.type === "ImportDefaultSpecifier" || r?.type === "ImportNamespaceSpecifier";
}
var ve = (e, o, r) => !ee(e, o, r) && !(o?.type === "MemberExpression" && o.property === e && !o.computed) && !Us(e, o) && o?.type !== "LabeledStatement" && o?.type !== "BreakStatement" && o?.type !== "ContinueStatement" && o?.type !== "ExportSpecifier" && o?.type !== "ImportSpecifier" && o?.type !== "ImportDefaultSpecifier" && o?.type !== "ImportNamespaceSpecifier";
function br(e) {
  let o = new Map();
  function r(t) {
    let s = t.type === "VariableDeclaration" && t.kind === "const";
    if (t.type === "FunctionDeclaration" && t.id !== null) o.set(t.id.name, t);else if (s) for (let n of t.declarations) {
      let {
        id: id_2,
        init: init
      } = n;
      if (id_2.type === "Identifier" && (init?.type === "FunctionExpression" || init?.type === "ArrowFunctionExpression")) o.set(id_2.name, init);
    }
  }
  for (let t of e.body) if (r(t), t.type === "ExportNamedDeclaration" || t.type === "ExportDefaultDeclaration") {
    let declaration_2 = t.declaration;
    if (declaration_2 !== null && declaration_2 !== void 0) r(declaration_2);
  }
  return o;
}
function ho(e) {
  let o = [],
    r = [];
  return bx(e, ({
    node: node_7,
    parent: parent_3,
    grandparent: grandparent_2
  }) => {
    if (node_7.type !== "Identifier") return;
    if (ee(node_7, parent_3, grandparent_2)) o.push(node_7);else if (ve(node_7, parent_3, grandparent_2)) r.push(node_7);
  }), {
    declared: Map.groupBy(o, t => t.name),
    read: Map.groupBy(r, t => t.name)
  };
}
function Tn(e) {
  let functions = br(e),
    {
      declared: declared,
      read: read
    } = ho(e);
  return {
    functions: functions,
    assigned: Er(e),
    declared: declared,
    read: read,
    declaredOnce: new Set([...functions.keys()].filter(item => declared.get(item)?.length === 1))
  };
}
function z(e, o, r = "all") {
  let t = [];
  return bx(e, ({
    node: node_8,
    parent: parent_4,
    grandparent: grandparent_3
  }) => {
    if (node_8.type === "Identifier" && node_8.name === o && ve(node_8, parent_4, grandparent_3)) t.push(node_8);
  }, r === "own" ? n => n !== e && (n.type === "FunctionExpression" || n.type === "FunctionDeclaration") : void 0), t;
}
function Sr(e, o, r) {
  let t = new Set();
  for (let s of e.body) {
    if (s.type === "ExportDefaultDeclaration") {
      let {
        declaration: declaration_3
      } = s;
      if (declaration_3 === o || declaration_3.type === "Identifier" && r !== void 0 && declaration_3.name === r) t.add("default");
      continue;
    }
    if (s.type !== "ExportNamedDeclaration") continue;
    let {
      declaration: declaration_4,
      source: source_4,
      specifiers: specifiers
    } = s;
    if (declaration_4?.type === "FunctionDeclaration" && declaration_4 === o) t.add(declaration_4.id.name);
    if (declaration_4?.type === "VariableDeclaration") {
      for (let a of declaration_4.declarations) if (a.init === o && a.id.type === "Identifier") t.add(a.id.name);
    }
    if (source_4 !== null && source_4 !== void 0) continue;
    for (let a of specifiers) if (r !== void 0 && I(a.local) === r) t.add(I(a.exported));
  }
  return t;
}
function ue(e, o) {
  return e.type === "Identifier" ? e.name === o : go(e, o).length > 0;
}
function T(e, o) {
  switch (e.type) {
    case "VariableDeclaration":
      return e.declarations.some(item => ue(item.id, o));
    case "FunctionDeclaration":
    case "ClassDeclaration":
      return e.id?.name === o;
    case "ImportDeclaration":
      return e.specifiers.some(item => item.local.name === o);
    case "ExportNamedDeclaration":
    case "ExportDefaultDeclaration":
      return e.declaration !== null && e.declaration !== void 0 && T(e.declaration, o);
    default:
      return !1;
  }
}
function jo(e, o) {
  let r = !1;
  return bx(o, ({
    node: node_9
  }) => {
    if (node_9.type === "VariableDeclaration" && node_9.kind === "var" && T(node_9, e)) r = !0;
  }, t => t !== o && (t.type === "FunctionDeclaration" || t.type === "FunctionExpression" || t.type === "ArrowFunctionExpression" || t.type === "StaticBlock")), r;
}
function _(e, o) {
  switch (e.type) {
    case "BlockStatement":
    case "Program":
      return e.body.some(item => T(item, o));
    case "StaticBlock":
      return e.body.some(item => T(item, o)) || jo(o, e);
    case "SwitchStatement":
      return e.cases.some(item => item.consequent.some(item => T(item, o)));
    case "FunctionDeclaration":
    case "FunctionExpression":
    case "ArrowFunctionExpression":
      {
        let r = e.id?.name === o,
          t = e.params.some(item => ue(item, o));
        return r || t || jo(o, e.body);
      }
    case "ClassDeclaration":
    case "ClassExpression":
      return e.id?.name === o;
    case "CatchClause":
      return e.param !== null && e.param !== void 0 && ue(e.param, o);
    case "ForStatement":
      return e.init?.type === "VariableDeclaration" && T(e.init, o);
    case "ForInStatement":
    case "ForOfStatement":
      return e.left.type === "VariableDeclaration" && T(e.left, o);
    default:
      return !1;
  }
}
var wr = 4;
function Ne(e, o) {
  for (let r of e.program.body) {
    let s = r.type === "ExportNamedDeclaration" ? r.declaration : r;
    if (!(s?.type === "VariableDeclaration" && s.kind === "const")) continue;
    for (let p of s.declarations) if (p.id.type === "Identifier" && p.id.name === o && p.init) return p.init;
  }
  return;
}
var vr = /^(?!(?:true|false|null|undefined|NaN|Infinity)$)(?![-\d])[\w:@*!$#-]+$/;
var Nr = 16;
var Te = 120;
function Ae(e) {
  let o = e.slice(0, Te),
    r = e.length - o.length,
    t = JSON.stringify(o).replace(/[^\x20-\x7e]/g, s => "\\u".concat(s.charCodeAt(0).toString(Nr).padStart(wr, "0"))).replace(/ {2,}/g, s => " ".concat(s.slice(1).replaceAll(" ", "\\u0020")));
  return r === 0 ? t : `${t}[+${r} chars]`;
}
function D(e) {
  return e.length <= Te && vr.test(e) ? e : Ae(e);
}
function R(e) {
  if (e.type !== "Property") return;
  let {
      key: key_2
    } = e,
    r = !e.computed && key_2.type === "Identifier",
    t = !e.computed && key_2.type === "Literal";
  return r ? key_2.name : t ? String(key_2.value) : void 0;
}
var N = "?";
function Oe(e, o, r) {
  let t = e.properties.map(item => R(item)),
    s = t.lastIndexOf(void 0);
  return e.properties.flatMap((item, index) => {
    let i = t[index],
      a = item.type !== "Property",
      f = i !== void 0 && t.includes(i, index + 1),
      c = i !== void 0 && index < s,
      u = i === void 0 ? N : D(i),
      y = `${u}=${N}`,
      x = a ? `...${N}` : `${u}${Tr(item.value, o, r)}`;
    return f ? [] : [c ? y : x];
  }).join(", ");
}
var W = e => e.properties.some(item => item.type === "Property" && (item.kind !== "init" || !item.shorthand && R(item) === "__proto__"));
function oe(e, o) {
  let r = o;
  for (let loop = e.parentOf(o); loop !== void 0 && loop.type !== "Program"; r = loop, loop = e.parentOf(loop)) {
    let s = loop.type === "ForOfStatement" ? loop.left : void 0,
      n = s?.type === "VariableDeclaration" ? s : void 0,
      [p, ...i] = n?.declarations ?? [];
    if (n?.kind === "const" && i.length === 0 && p?.id.type === "Identifier" && p.id.name === o.name && loop.type === "ForOfStatement") return r === loop.body ? {
      kind: "loop",
      loop: loop
    } : {
      kind: "shadowed"
    };
    if (_(loop, o.name)) return {
      kind: "shadowed"
    };
  }
  return {
    kind: "free"
  };
}
function Ar(e, o) {
  let t = oe(e, o).kind === "free" ? Ne(e, o.name) : void 0;
  return t?.type === "Literal" && t.regex === void 0 && typeof t.value !== "bigint" || t?.type === "TemplateLiteral" && t.expressions.length === 0 || t?.type === "Identifier" ? t : void 0;
}
function Or(e, o) {
  let t = oe(e, o).kind === "free" ? Ne(e, o.name) : void 0;
  return (t?.type === "ObjectExpression" || t?.type === "ArrayExpression" || t?.type === "Literal" && t.regex !== void 0) && e.isSealed(o.name) ? t : void 0;
}
var se = (e, o) => Ar(e, o) ?? Or(e, o);
function Pe(e, o, r) {
  let t = e,
    seen = r;
  while (t.type === "Identifier" && !seen.has(t.name)) {
    let i = se(o, t);
    if (i === void 0) break;
    seen = new Set([...seen, t.name]), t = i;
  }
  let node_10 = t.type === "ObjectExpression" ? t : void 0;
  return node_10 !== void 0 && !W(node_10) ? {
    node: node_10,
    seen: seen
  } : void 0;
}
function ko(e, o) {
  let [r, ...t] = e.node.properties,
    s = t.length === 0 && r?.type === "Property",
    n = s ? R(r) : void 0,
    p = s ? Pe(r.value, o, e.seen) : void 0;
  return n !== void 0 && p !== void 0 ? `.${D(n)}${ko(p, o)}` : ` has {${Oe(e.node, o, e.seen)}}`;
}
function Pr(e) {
  let o = [];
  for (let r of e.elements) {
    if (r === null) return;
    if (r.type === "Literal") {
      let {
        value: value
      } = r;
      if (!(typeof value === "string" || typeof value === "number" || typeof value === "boolean")) return;
      o.push(typeof value === "string" ? D(value) : String(value));
      continue;
    }
    let s = r.type === "TemplateLiteral" && r.expressions.length === 0 ? r.quasis[0]?.value.cooked : void 0;
    if (s === void 0 || s === null) return;
    o.push(D(s));
  }
  return L(o);
}
function Ir(e, o, r) {
  let {
    right: right
  } = o;
  return right.type === "ArrayExpression" && !e.program.body.some(item => item.type === "ImportDeclaration" && T(item, r)) ? Pr(right)?.join("|") : void 0;
}
function Dr(e, o, r) {
  if (r.has(e.name)) return N;
  let t = oe(o, e),
    s = t.kind === "loop",
    n = s ? Ir(o, t.loop, e.name) : void 0;
  if (s) return n ?? N;
  let p = se(o, e);
  if (p === void 0) return N;
  return K(p, o, new Set([...r, e.name]));
}
var Rr = (e, o) => `/${Ae(e)}/${o}`;
function K(e, o, r = new Set()) {
  switch (e.type) {
    case "Literal":
      {
        let {
            regex: regex,
            value: value_2
          } = e,
          n = typeof value_2 === "string",
          p = typeof value_2 === "bigint",
          i = n ? D(value_2) : String(value_2);
        return regex ? Rr(regex.pattern, regex.flags) : p ? N : i;
      }
    case "TemplateLiteral":
      {
        let t = e.quasis[0]?.value.cooked;
        return e.expressions.length === 0 && t !== void 0 && t !== null ? D(t) : N;
      }
    case "ArrayExpression":
      return e.elements.map(item => item === null ? "" : K(item, o, r)).join("|");
    case "ObjectExpression":
      return W(e) ? N : `{${Oe(e, o, r)}}`;
    case "Identifier":
      return Dr(e, o, r);
    default:
      return N;
  }
}
function Tr(e, o, r) {
  let t = Pe(e, o, r);
  if (t === void 0) return `=${K(e, o, r)}`;
  return ko(t, o);
}
var sp = (e, o, r) => o === void 0 ? e : `${e}${K(o, r)}`;
function Ie(e, o, r = new Set()) {
  if (e.type === "Literal") return e.regex ? e.value ?? new RegExp("") : e.value;
  if (e.type === "ArrayExpression") return e.elements.map(item => item ? Ie(item, o, r) : new RegExp(""));
  if (e.type === "ObjectExpression") {
    if (W(e)) return new RegExp("");
    let s = [];
    for (let n of e.properties) {
      let p = R(n);
      if (n.type !== "Property" || p === void 0) return new RegExp("");
      s.push([p, Ie(n.value, o, r)]);
    }
    return Object.fromEntries(s);
  }
  if (e.type !== "Identifier" || r.has(e.name)) return new RegExp("");
  let t = se(o, e);
  if (!t) return new RegExp("");
  return Ie(t, o, new Set([...r, e.name]));
}
var Fe = (e, o) => e.body.some(item => {
  if (item.type === "ExportDefaultDeclaration") {
    let {
      declaration: declaration_5
    } = item;
    return declaration_5.type === "Identifier" && declaration_5.name === o;
  }
  if (item.type !== "ExportNamedDeclaration") return !1;
  let {
      declaration: declaration_6,
      source: source_5,
      specifiers: specifiers_2
    } = item,
    p = declaration_6 !== null && declaration_6 !== void 0 && T(declaration_6, o),
    i = (source_5 === null || source_5 === void 0) && specifiers_2.some(item => I(item.local) === o);
  return p || i;
});
function Hr(e, o) {
  let r = e.holderFiles.get(o);
  if (r === void 0) return;
  let {
      scanned: scanned_3
    } = r,
    s = [...scanned_3.names.functions].find(([, a]) => a === o)?.[0],
    n = s === void 0 ? [] : scanned_3.names.read.get(s) ?? [],
    p = Sr(scanned_3.program, o, s),
    i = [];
  for (let reference of n) if (scanned_3.parentOf(reference)?.type !== "ExportDefaultDeclaration") i.push({
    reference: reference,
    scanned: scanned_3
  });
  for (let a of e.graph.files.values()) for (let f of a.scanned.program.body) {
    let u = f.type === "ImportDeclaration" || f.type === "ExportAllDeclaration" || f.type === "ExportNamedDeclaration" ? f.source : void 0;
    if (!(p.size > 0 && u !== null && u !== void 0 && a.links.get(String(u.value)) === scanned_3.file)) continue;
    if (f.type === "ExportAllDeclaration" || f.type === "ExportNamedDeclaration" && f.specifiers.some(item => p.has(I(item.local))) || f.type === "ImportDeclaration" && f.specifiers.some(item => item.type === "ImportNamespaceSpecifier")) return;
    let h = f.type === "ImportDeclaration" ? f.specifiers : [];
    for (let j of h) {
      let E = j.type === "ImportSpecifier" ? I(j.imported) : "default",
        O = j.local.name;
      if (!p.has(E)) continue;
      if (Fe(a.scanned.program, O)) return;
      for (let reference_2 of a.scanned.names.read.get(O) ?? []) i.push({
        reference: reference_2,
        scanned: a.scanned
      });
    }
  }
  return i;
}
function Fr(e) {
  let o = new Map(),
    r = new Map(),
    t = Map.groupBy(e.holderCalls, i => i.call),
    s;
  function n({
    reference: reference_3,
    scanned: scanned_4
  }, f, c) {
    let u = scanned_4.parentOf(reference_3);
    return (u?.type === "CallExpression" && u.callee === reference_3 ? t.get(u) ?? [] : []).some(item => item.callee === f && item.position === c && p(item.caller, item.callerPosition));
  }
  function p(i, a) {
    s ??= kr(e.graph);
    let f = o.get(i)?.get(a),
      c = r.get(i)?.has(a) === !0;
    if (s || c || f !== void 0) return f ?? !1;
    r.set(i, (r.get(i) ?? new Set()).add(a));
    let y = i.type === "FunctionExpression" && i.id !== null && i.id !== void 0 ? void 0 : Hr(e, i),
      x = i === e.register && a === 0,
      g = y !== void 0 && (y.length > 0 || x) && y.every(item => n(item, i, a));
    return o.set(i, (o.get(i) ?? new Map()).set(a, g)), r.get(i)?.delete(a), g;
  }
  return p;
}
function Cr(e, o, r) {
  let t = r;
  for (;;) {
    let s = o.parentOf(t);
    if (s?.type === "ArrayExpression") {
      t = s;
      continue;
    }
    if (s?.type === "Property" && s.value === t) {
      let a = o.parentOf(s);
      if (!(a?.type === "ObjectExpression" && !W(a))) return;
      t = a;
      continue;
    }
    if (s?.type === "VariableDeclarator" && s.init === t) {
      let {
          id: id_3
        } = s,
        f = o.parentOf(s),
        c = f && o.parentOf(f);
      return id_3.type === "Identifier" && f?.type === "VariableDeclaration" && f.kind === "const" && (c?.type === "Program" || c?.type === "ExportNamedDeclaration") ? {
        kind: "const",
        name: id_3.name
      } : void 0;
    }
    let held = s?.type === "CallExpression" ? e.registrations.get(s) : void 0;
    return held !== void 0 && held.matcher === t ? {
      kind: "matcher",
      held: held
    } : void 0;
  }
}
function $r(e, o) {
  let r = new Map(),
    t = new Map();
  function s(n, p) {
    let i = r.get(n)?.get(p);
    if (t.get(n)?.has(p) === !0 || i !== void 0) return i ?? !1;
    t.set(n, (t.get(n) ?? new Set()).add(p));
    let {
        scanned: scanned_5
      } = n,
      c = scanned_5.names.read.get(p) ?? [],
      u = !Fe(scanned_5.program, p) && c.length > 0 && c.every(item => {
        let x = Cr(e, scanned_5, item);
        switch (x?.kind) {
          case "matcher":
            return o(x.held.holder, x.held.position);
          case "const":
            return s(n, x.name);
          case void 0:
            return !1;
        }
      });
    return r.set(n, (r.get(n) ?? new Map()).set(p, u)), t.get(n)?.delete(p), u;
  }
  return s;
}
function Mr(e) {
  let o = $r(e, Fr(e)),
    r = new Map(),
    registrations = [],
    renderMatchers = [];
  for (let {
    event: event,
    matcher: matcher,
    linked: linked
  } of e.registrations.values()) {
    let {
        program: program,
        parentOf: parentOf
      } = linked.scanned,
      c = r.get(linked) ?? {
        program: program,
        parentOf: parentOf,
        isSealed: y => o(linked, y)
      };
    r.set(linked, c);
    let registration = sp(event, matcher, c);
    if (registrations.push(registration), event === "ui.render" && matcher !== void 0) renderMatchers.push({
      registration: registration,
      matcher: Ie(matcher, c)
    });
  }
  return {
    registrations: registrations,
    renderMatchers: renderMatchers
  };
}
var hp = (root_4, pluginName_2) => (spelled_4, importer_2, {
  known: known,
  reals: reals
}) => aOo({
  spelled: spelled_4,
  importer: importer_2,
  root: root_4,
  pluginName: pluginName_2
}, known, reals);
var Ce = (e, o) => o === "env.get" ? e.envReads : e.envWrites;
function $e({
  graph: graph,
  pluginName: pluginName_3
}, r) {
  let t = graph.files.get(r);
  if (t === void 0) throw new De(`${pluginName_3}: ${r} was not linked`);
  return t;
}
var ne = Symbol.for("claude-code.state.atom");
function Eo(e) {
  if (typeof e !== "object" || e === null || Object.isFrozen(e)) return e;
  for (let o of Object.values(e)) Eo(o);
  return Object.freeze(e);
}
function q(e, id_4 = e.id) {
  let {
    plugin: plugin,
    key: key_3
  } = e;
  return Object.freeze(id_4 === void 0 ? {
    plugin: plugin,
    key: key_3
  } : {
    plugin: plugin,
    key: key_3,
    id: id_4
  });
}
var vp = (e, o, r) => Object.freeze({
  [ne]: !0,
  ref: q(e),
  initial: Eo(o),
  ...(r?.shape !== void 0 && {
    shape: r.shape
  })
});
function Me(e, o) {
  if (e.shape === void 0) return o === void 0 ? e.initial : o;
  let r = o;
  return r?.shape === e.shape && r.value !== void 0 ? r.value : e.initial;
}
var pe = Symbol.for("claude-code.state.derived");
var _e = (e, o) => typeof e === "object" && e !== null && e[o] !== void 0;
var H = e => _e(e, ne);
var Le = e => _e(e, pe);
var Dp = (e, compute) => {
  let r = {};
  return Object.freeze({
    [pe]: r,
    sources: Object.freeze(e.map(item => H(item) || Le(item) ? item : q(item))),
    compute: compute
  });
};
var Cp = (e, o) => H(e) ? Object.freeze({
  ...e,
  [ne]: !0,
  ref: q(e.ref, o.requestId)
}) : q(e, o.requestId);
async function bo(e, o) {
  if (H(o)) {
    let p = await e.get(o.ref);
    return {
      value: Me(o, p.value),
      versions: [p.version]
    };
  }
  if (!Le(o)) {
    let p = await e.get(o);
    return {
      value: p.value,
      versions: [p.version]
    };
  }
  let r = await Promise.all(o.sources.map(item => bo(e, item))),
    versions = r.flatMap(item => item.versions),
    s = versions.join(","),
    n = o[pe];
  if (n?.versions !== s && n !== void 0) n.value = o.compute(...r.map(item => item.value)), n.versions = s;
  return {
    value: n?.value,
    versions: versions
  };
}
var Lp = async (e, o) => (await bo(e.state, o)).value;
var _r = (e, value_3) => e.shape === void 0 ? value_3 : {
  shape: e.shape,
  value: value_3
};
var Lr = 64;
var Vp = async (e, o, r) => {
  let state = e.state,
    s = H(o) ? o.ref : o;
  for (let n = 0; n < Lr; n += 1) {
    let p = await state.get(s),
      i = H(o) ? Me(o, p.value) : p.value,
      a = r(i),
      f = H(o) ? _r(o, a) : a;
    if ((await state.set(s, f, {
      ifVersion: p.version
    })).isSet) return a;
  }
  throw Error("update: the value was written by another every time it was read, up to the bound on tries; nothing was written");
};
var Kp = ["atom", "derive", "memberOf", "read", "update"];
var Br = Re("B:/~BUN/root/state-library.js-wy8y4843.txt");
var ZVn = Br;
function X(e, o) {
  let {
    callee: callee_2
  } = o;
  if (callee_2.type !== "Identifier" || o.optional) return;
  let t = e.imports.get(callee_2.name),
    s = Kp.find(item => item === t?.imported);
  if (!(t?.specifier === G6e && s !== void 0)) return;
  for (let p = e.parentOf(callee_2); p !== void 0 && p.type !== "Program"; p = e.parentOf(p)) if (_(p, callee_2.name)) return;
  return s;
}
var ce = (e, o) => e.type === "Identifier" && e.name === o;
function Be(e) {
  return e.type === "Program" || e.type === "BlockStatement" || e.type === "StaticBlock" ? e.body : [];
}
function Gr(e, o, r) {
  let t = o(e);
  if (t?.type === "CallExpression") {
    let s = r.library.get(t),
      n = s === "read" || s === "update",
      p = s === "atom" || s === "memberOf" || r.state.has(t);
    return t.arguments[n ? 1 : 0] === e && (n || p);
  }
  if (t?.type === "ArrayExpression") {
    let s = o(t);
    return s?.type === "CallExpression" && r.library.get(s) === "derive" && s.arguments[0] === t;
  }
  return t?.type === "SpreadElement" && t.argument === e && o(t)?.type === "ObjectExpression";
}
function Vr({
  read: read_2,
  binding: binding
}, r, t) {
  let {
      scope: scope
    } = binding,
    {
      name: name
    } = read_2,
    p = Be(scope).find(item => {
      if (item.type === "ExportDefaultDeclaration") return ce(item.declaration, name);
      if (item.type !== "ExportNamedDeclaration") return !1;
      let {
        declaration: declaration_7,
        specifiers: specifiers_3
      } = item;
      return [...(declaration_7?.type === "VariableDeclaration" ? declaration_7.declarations.map(item => item.id) : []), ...specifiers_3.map(item => item.local)].some(item => ce(item, name));
    });
  if (p !== void 0) return p;
  function i(a) {
    for (let f = r(a); f !== void 0; f = r(f)) {
      if (f === scope) return !0;
      if (_(f, a.name)) return !1;
    }
    return !1;
  }
  return z(scope, name).filter(i).find(item => !Gr(item, r, t));
}
function ri(e) {
  for (let {
    followed: followed,
    spelling: spelling,
    refuse: refuse,
    parentOf: parentOf_2
  } of e.stateConsts) {
    let n = Vr(followed, parentOf_2, {
      state: e.stateCalls,
      library: e.libraryCalls
    });
    if (n !== void 0) throw refuse(n, `the const ${followed.read.name}, read as the reference of a $.${spelling} call, is also written through, handed on or exported here, and const does not freeze: what it holds at the call could not be listed. Use it only as the reference of $.state calls, as a source of the state library's functions imported from "claude-code", and in a spread into an object literal ({ ...${followed.read.name}, id }), or write the reference at the call`);
  }
}
function Ue(e, o) {
  for (let scope_2 = o(e); scope_2 !== void 0; scope_2 = o(scope_2)) {
    if (!_(scope_2, e.name)) continue;
    for (let t of Be(scope_2)) {
      let s = t.type === "ExportNamedDeclaration",
        n = s ? t.declaration : t;
      if (!(n?.type === "VariableDeclaration" && (n.kind === "const" || n.kind === "var" && scope_2.type === "Program" && !s))) continue;
      let {
        init: init_2
      } = n.declarations.find(item => ce(item.id, e.name)) ?? {};
      if (init_2) return {
        init: init_2,
        scope: scope_2
      };
    }
    return;
  }
  return;
}
function Ge(read_3, o, r = new Set()) {
  if (read_3.type === "Identifier") {
    let binding_2 = r.has(read_3.name) ? void 0 : Ue(read_3, o),
      n = binding_2 === void 0 ? void 0 : Ge(binding_2.init, o, new Set([...r, read_3.name]));
    return binding_2 !== void 0 && n !== void 0 ? {
      ...n,
      consts: [{
        read: read_3,
        binding: binding_2
      }, ...n.consts]
    } : void 0;
  }
  if (read_3.type !== "ObjectExpression") return;
  let t = {
    consts: []
  };
  for (let s of read_3.properties) {
    if (s.type === "SpreadElement") {
      let p = Ge(s.argument, o, r);
      if (p === void 0) return;
      t = {
        ...t,
        ...p,
        consts: [...t.consts, ...p.consts]
      };
      continue;
    }
    let n = R(s);
    if (n === void 0 || s.kind !== "init") return;
    if (n === "plugin" || n === "key") {
      let p = M(s.value);
      if (p === void 0) return;
      t = {
        ...t,
        [n]: p
      };
    }
  }
  return t;
}
function Y(e, o, r = new Set()) {
  if (e.type === "Identifier" && r.has(e.name)) return;
  let s = e.type === "Identifier" ? Ue(e, o.parentOf) : void 0;
  if (s !== void 0 && s.init.type !== "ObjectExpression" && e.type === "Identifier") return Y(s.init, o, new Set([...r, e.name]));
  if (e.type !== "CallExpression") {
    let u = Ge(e, o.parentOf);
    return u === void 0 ? void 0 : [u];
  }
  let p = o.libraryHelper(e),
    [i] = e.arguments;
  if ((p === "atom" || p === "memberOf") && i !== void 0 && i.type !== "SpreadElement") return Y(i, o, r);
  if (p !== "derive" || i?.type !== "ArrayExpression") return;
  let f = i.elements.map(item => item !== null && item.type !== "SpreadElement" ? Y(item, o, r) : void 0);
  return f.every(item => item !== void 0) ? f.flat() : void 0;
}
function pi(e) {
  for (let {
    scanned: scanned_6
  } of e.graph.files.values()) {
    let {
      refuse: refuse_2,
      parentOf: parentOf_3
    } = scanned_6;
    bx(scanned_6.program, ({
      node: node_11
    }) => {
      let n = node_11.type === "CallExpression",
        p = n ? X(scanned_6, node_11) : void 0;
      if (p === void 0 || !n) return;
      e.libraryCalls.set(node_11, p);
      let i = p === "read" || p === "update",
        a = i ? node_11.arguments[1] : node_11,
        c = a !== void 0 && a.type !== "SpreadElement" ? Y(a, {
          parentOf: parentOf_3,
          libraryHelper: x => X(scanned_6, x)
        }) : void 0,
        u = c?.every(({
          plugin: plugin_2,
          key: key_4
        }) => plugin_2 !== void 0 && key_4 !== void 0);
      if (c === void 0 || u !== !0) throw refuse_2(a ?? node_11, `the state library's ${p} takes a source the scan can read: a reference whose plugin and key are string literals, or what atom, memberOf or derive (imported from "claude-code") made of one, written there or in a const of this file, so the values a module reads and writes can be listed`);
      let spelling_2 = p === "update" ? "state.set" : "state.get";
      for (let {
        plugin: plugin_3 = "",
        key: key_5 = "",
        consts: consts
      } of c) {
        let j = `${plugin_3}\x00${key_5}`;
        if (e.stateReads.set(j, {
          plugin: plugin_3,
          key: key_5
        }), p === "update") e.stateWrites.set(j, {
          plugin: plugin_3,
          key: key_5
        });
        for (let followed_2 of consts) e.stateConsts.add({
          followed: followed_2,
          spelling: spelling_2,
          refuse: refuse_2,
          parentOf: parentOf_3
        });
      }
      if (i) e.calls.add("state.get");
      if (p === "update") e.calls.add("state.set");
    });
  }
}
function So(e, {
  call: call_3,
  spelling: spelling_3,
  named: named,
  consts: consts_2
}, {
  refuse: refuse_3,
  parentOf: parentOf_4
}) {
  let i = `${named.plugin}\x00${named.key}`;
  (spelling_3 === "state.get" ? e.stateReads : e.stateWrites).set(i, named), e.stateCalls.add(call_3);
  for (let followed_3 of consts_2) e.stateConsts.add({
    followed: followed_3,
    spelling: spelling_3,
    refuse: refuse_3,
    parentOf: parentOf_4
  });
}
function ii(e) {
  let o = e.stateReads.size > 0 || e.stateWrites.size > 0,
    r = t => [...t.entries()].sort(([s], [n]) => s < n ? -1 : s > n ? 1 : 0).map(([, s]) => s);
  return o ? {
    reads: r(e.stateReads),
    writes: r(e.stateWrites)
  } : void 0;
}
function vo(e, o, r = "") {
  let {
      program: program_2,
      names: names,
      refuse: refuse_4
    } = e.scanned,
    {
      functions: functions_2,
      assigned: assigned,
      declaredOnce: declaredOnce
    } = names,
    f = o === "default" ? "the default export" : o;
  function c(y, x) {
    if (assigned.has(y)) throw refuse_4(x, `${f} ("${y}") is assigned to elsewhere`);
    if (!declaredOnce.has(y)) throw refuse_4(x, `${f} ("${y}") is declared more than once in this file`);
  }
  for (let y of program_2.body) {
    if (y.type === "ExportDefaultDeclaration" && o === "default") {
      let {
        declaration: declaration_8
      } = y;
      if (declaration_8.type === "FunctionDeclaration") {
        if (declaration_8.id !== null) c(declaration_8.id.name, declaration_8);
        return declaration_8;
      }
      if (declaration_8.type === "FunctionExpression" || declaration_8.type === "ArrowFunctionExpression") return declaration_8;
      let E = declaration_8.type === "Identifier" ? functions_2.get(declaration_8.name) : void 0;
      if (E === void 0 || declaration_8.type !== "Identifier") throw refuse_4(declaration_8, `${f} is something other than a function declared at the top of this file`);
      return c(declaration_8.name, declaration_8), E;
    }
    if (y.type !== "ExportNamedDeclaration") continue;
    let {
      declaration: declaration_9
    } = y;
    if (declaration_9?.type === "FunctionDeclaration" && declaration_9.id.name === o) return c(o, declaration_9), declaration_9;
    if (declaration_9?.type === "VariableDeclaration") {
      for (let h of declaration_9.declarations) if (h.id.type === "Identifier" && h.id.name === o) {
        let {
          init: init_3
        } = h;
        if (declaration_9.kind === "const" && (init_3?.type === "FunctionExpression" || init_3?.type === "ArrowFunctionExpression")) return init_3;
        throw refuse_4(h, `${f} is exported as something other than a const function`);
      }
    }
    for (let h of y.specifiers) {
      if (I(h.exported) !== o) continue;
      if (y.source !== null) throw refuse_4(h, `${f} is re-exported from another file`);
      let j = I(h.local),
        k = functions_2.get(j);
      if (k === void 0) throw refuse_4(h, `${f} is exported as "${j}", which is not a function declared at the top of this file`);
      return c(j, h), k;
    }
  }
  let u = program_2.body.find(item => item.type === "ExportAllDeclaration");
  if (u !== void 0) throw refuse_4(u, `${f} is not exported here by name; what \`export *\` re-exports from another file is not followed`);
  throw refuse_4(void 0, `no export named ${f}${r}`);
}
function zr(e, {
  names: {
    functions: functions_3,
    assigned: assigned_2,
    declaredOnce: declaredOnce_2
  },
  refuse: refuse_5,
  what: what_2
}) {
  let p = functions_3.get(e.name);
  if (p === void 0) return;
  if (assigned_2.has(e.name)) throw refuse_5(e, `${what_2} "${e.name}" is assigned to elsewhere`);
  if (!declaredOnce_2.has(e.name)) throw refuse_5(e, `${what_2} "${e.name}" is declared more than once in this file`);
  return p;
}
function No(e, {
  refuse: refuse_6
}) {
  if (e.type !== "ObjectPattern") throw refuse_6(e, "next is destructured other than into an object pattern of plain keys");
  for (let r of e.properties) {
    if (r.type === "RestElement") throw refuse_6(r, "a rest of next (it holds next.to)");
    if (!(!r.computed && r.key.type === "Identifier")) throw refuse_6(r, "a computed or quoted key destructured from next");
    if (r.key.type === "Identifier" && r.key.name === "to") throw refuse_6(r, `next.to is destructured from next; it is reached only as next.to(e, "<tier>") on the hook's own next`);
  }
}
var KVn = Mm;
var Ve = KVn.map(item => `classic.${item}`);
var _dn = ["model.complete", "model.classify", "model.fork", "audio.play", "audio.speak", "mcp.call", "session.cwd", "session.root", "session.model", "session.turns", "session.id", "session.messages", "session.repo", "session.surface", "session.surfaces", "session.authorize", "session.usage", "session.version", "turn.abort", "prompt.read", "flag.value", "tool.list", "tool.register", "command.list", "command.register", "config.list", "agent.list", "agent.register", "ui.toast", "ui.status", "ui.log", "ui.notice", "ui.invalidate", "ui.open", "ui.close", "ui.panes", "ui.copy", "ui.blit", "fs.read", "fs.write", "fs.list", "fs.exists", "fs.stat", "fs.ancestors", "store.get", "store.set", "store.delete", "store.keys", "state.get", "state.set", "clock.now", "clock.sleep", "clock.after", "clock.every", "http.fetch", "process.run", "process.spawn", "settings.read", "env.get", "env.set"];
var PNt = [...Ve, "tool.call", "tool.check", "ui.render", "ui.resolve", "ui.press", "ui.input", "ui.select", "ui.message", "ui.scroll", "ui.focus", "agent.offer", "agent.spawn", "prompt.submit", "prompt.fill", "prompt.suggest", "prompt.edit", "prompt.section", "prompt.context", "prompt.attachment", "tool.describe", "command.run", "command.describe", "config.set", "config.describe", "skill.prompt", "attribution.text", "session.start", "session.receive", "session.send", "session.compact", "session.attach", "session.detach", "session.measure", "session.end", "plugin.register", "turn.start", "turn.step", "turn.complete", "engine.create", ..._dn];
var W2o = Ve.filter(item => item !== "classic.PreToolUse");
var kdt = e => PNt.includes(e);
var FLr = e => _dn.includes(e);
var YVn = ["turn.step", "process.spawn"];
var INt = e => YVn.includes(e);
var qr = new Set(PNt.filter(item => item.includes(".")).map(item => item.slice(0, item.indexOf("."))));
var ze = String.raw`(?!\p{Default_Ignorable_Code_Point})[\p{ID_Start}$_]` + String.raw`(?:(?!\p{Default_Ignorable_Code_Point})[\p{ID_Continue}$])*`;
var regExp = new RegExp(String.raw`^${ze}\.${ze}$`, "u");
var bdn = e => regExp.test(e) && !qr.has(e.slice(0, e.indexOf(".")));
var oOo = ["managed", "user", "project", "local", "memory"];
var ONt = ["replace", "append", "insert"];
var Sdn = e => typeof e === "string" && ONt.includes(e);
var TC = vp;
var PC = Dp;
var RC = Cp;
var CC = Lp;
var _C = Vp;
var gu = ["prepend", "user", "append", "builtin", "core"];
var sOo = ["allow", "ask", "deny"];
var Xle = e => gu.indexOf(e);
function z2o(e, o) {
  let r = Xle(o);
  return e.find(item => Xle(item.from) < r && r < Xle(item.to))?.plugin;
}
var Edt = e => ({
  prepend: ["append", "builtin", "core"],
  user: [],
  append: ["core"],
  builtin: [],
  core: []
})[e];
var JVn = e => Edt("prepend").includes(e);
function G2o(e, o) {
  return Object.freeze([...e, Object.freeze({
    ...o,
    to: e.reduce((acc, item) => Xle(item.to) > Xle(acc) ? item.to : acc, o.to)
  })]);
}
var $Lr = e => `next.to:${e}`;
var z6e = Object.freeze([]);
function V6e(e, o, r) {
  let t = gs(e);
  if (SI(e)) return r.outermost.includes(t) ? "prepend" : "builtin";
  let s = [...(o ?? [])].some(item => gs(item) === t),
    n = a => r[a].includes(t) && (r.from[a] === "user" ? !s : s),
    p = s ? "prepend" : "user",
    i = n("prepend") ? "prepend" : "append";
  return n("prepend") || n("append") ? i : p;
}
function Jr(e, {
  refuse: refuse_7,
  parentOf: parentOf_5,
  recordTo: recordTo
}) {
  if (e.optional) throw refuse_7(e, "next.to is reached through optional chaining");
  let s = parentOf_5(e);
  if (!(s?.type === "CallExpression" && s.callee === e && !s.optional)) throw refuse_7(e, 'next.to is used as a value (bound, passed or read) instead of called as next.to(e, "<tier>")');
  let [p, i, a] = s.arguments;
  if (p === void 0 || p.type === "SpreadElement") throw refuse_7(s, 'next.to is called without (e, "<tier>") or with a spread');
  if (a !== void 0) throw refuse_7(a, 'next.to is called with more than (e, "<tier>")');
  if (!(i?.type === "Literal" && typeof i.value === "string")) throw refuse_7(i ?? s, "next.to names its tier other than as a string literal (a variable, a template or an expression)");
  let c = i.value;
  if (!JVn(c)) throw refuse_7(i, `next.to names "${String(c)}", which is not a tier a dispatch continues at (append, builtin, core)`);
  return recordTo(c), s;
}
var Hc = e => vo(e, "register", " (export function register(on, options) {...})");
var regExp_2 = new RegExp(`^${ze}$`, "u");
var W6e = e => e === "*" || e.endsWith(".*") || e.startsWith("!");
function Ke(e) {
  if (typeof e !== "string") return `${typeof e} is not an event name or a pattern (a string)`;
  let isNegated = e.startsWith("!"),
    name_2 = isNegated ? e.slice(1) : e;
  if (isNegated && name_2 === "*") return `"${e}" is not a pattern: it selects no event`;
  if (isNegated && name_2.startsWith("!")) return `"${e}" is not a pattern: "!" negates once`;
  let t = name_2 === "*",
    s = name_2.endsWith(".*"),
    n = (s ? name_2.slice(0, -2) : name_2).split(".");
  if (!(t || n.every(item => regExp_2.test(item)))) return `"${e}" is not an event name or a pattern ("*", "<prefix>.*", or "!" before either)`;
  return {
    isNegated: isNegated,
    selection: t ? {
      kind: "every"
    } : s ? {
      kind: "prefix",
      prefix: n.join(".")
    } : {
      kind: "name",
      name: name_2
    }
  };
}
function qe(e) {
  let o = Ke(e);
  if (typeof o === "string") throw new De(o);
  return o;
}
function rOo(e) {
  let {
    selection: selection
  } = qe(e);
  return selection.kind === "name" ? selection.name : void 0;
}
function XVn(e) {
  let o = Ke(e);
  return typeof o === "string" ? o : void 0;
}
function x6(e, o) {
  let {
      isNegated: isNegated_2,
      selection: selection_2
    } = qe(e),
    s;
  switch (selection_2.kind) {
    case "every":
      s = !0;
      break;
    case "prefix":
      s = o.startsWith(`${selection_2.prefix}.`);
      break;
    case "name":
      s = o === selection_2.name;
      break;
  }
  return isNegated_2 ? !s : s;
}
var xe = e => e.arguments.find(item => item.type === "SpreadElement");
function Bc(e, o, r) {
  let t = xe(e);
  if (t !== void 0) throw o(t, `${r}() is called with a spread argument`);
  let [s, ...n] = e.arguments;
  if (s === void 0 || n.length === 0 || n.length > 2) throw o(e, `${r}() takes (event, hook) or (event, matcher, hook); got ${e.arguments.length} argument(s)`);
  let event_2 = M(s);
  if (event_2 === void 0) throw o(s, `the event name passed to ${r}() is not a string literal`);
  let a = XVn(event_2);
  if (a !== void 0) throw o(s, a);
  let f = W6e(event_2) || kdt(event_2) || bdn(event_2),
    c = rOo(event_2),
    u = c !== void 0 && !kdt(c) && !bdn(c);
  if (!f || u) throw o(s, `"${c ?? event_2}" is not an event`);
  let hook = n.at(-1);
  if (hook === void 0) throw o(e, `${r}() takes (event, hook); got no hook`);
  return {
    event: event_2,
    hook: hook,
    matcher: n.length === 2 ? n[0] : void 0
  };
}
var Zr = {
  VariableDeclarator: "bound to a name",
  AssignmentExpression: "assigned",
  SpreadElement: "spread",
  ReturnStatement: "returned",
  ArrowFunctionExpression: "returned",
  Property: "put in an object",
  ArrayExpression: "put in an array",
  ChainExpression: "optionally chained",
  TemplateLiteral: "put in a template"
};
function Ao(e, o) {
  if (!(e.type === "CallExpression" || e.type === "NewExpression")) return Zr[e.type] ?? `used in a ${e.type}`;
  return e.callee === o ? "called" : "passed as an argument";
}
var ye = "plugin";
var et = ["env.get", "env.set"];
var lOo = e => et.includes(e);
var ot = ["state.get", "state.set"];
var kdn = e => ot.includes(e);
var Oo = e => /^[\w$@-]+$/.test(e) ? e : JSON.stringify(e);
var bFe = e => `${Oo(e.plugin)}.${Oo(e.key)}`;
var $he = "core";
var j2o = e => e.withheldBy?.at(-1);
var HLr = (e, o) => `$.${e}: removed by plugin \`${o}\``;
function tt(e, o, r) {
  let [t] = e.arguments,
    n = t !== void 0 && t.type !== "SpreadElement" ? M(t) : void 0;
  if (n === void 0) throw r(t ?? e, `$.${o} takes a literal name as its first argument, so the variables a module reads and writes can be listed (got ${V(t)})`);
  return n;
}
var Po = (e, o) => e?.type === "MemberExpression" && e.object === o && !e.computed && !e.optional;
function st(call_4, spelling_4, {
  refuse: refuse_8,
  parentOf: parentOf_6,
  libraryHelper: libraryHelper
}) {
  let [n] = call_4.arguments,
    p = n !== void 0 && n.type !== "SpreadElement",
    [i, ...a] = (p ? Y(n, {
      parentOf: parentOf_6,
      libraryHelper: libraryHelper
    }) : void 0) ?? [],
    {
      plugin: plugin_4,
      key: key_6,
      consts: consts_3 = []
    } = i ?? {};
  if (!(a.length === 0 && plugin_4 !== void 0 && key_6 !== void 0)) throw refuse_8(n ?? call_4, `$.${spelling_4} takes a reference whose plugin and key are string literals ({ plugin: "p", key: "k" }, written there or in a const of this file; only id may be computed), so the values a module reads and writes can be listed (got ${V(n)})`);
  return {
    call: call_4,
    spelling: spelling_4,
    named: {
      plugin: plugin_4,
      key: key_6
    },
    consts: consts_3
  };
}
function Io(e, o, {
  refuse: refuse_9,
  parentOf: parentOf_7,
  record: record,
  recordEnv: recordEnv,
  recordState: recordState,
  libraryHelper: libraryHelper_2,
  bind: bind,
  follow: follow
}) {
  let c = e,
    u = parentOf_7(c);
  while (u?.type === "AwaitExpression") c = u, u = parentOf_7(c);
  if (u === void 0) throw refuse_9(e, "$ stands alone");
  if (u.type === "MemberExpression" && u.object === c) {
    if (u.computed || u.optional) throw refuse_9(u, "a computed or optional member access on $");
    let property_2 = u.property;
    if (property_2.type !== "Identifier") throw refuse_9(u, "a member access on $ that is not a name");
    if (property_2.name === ye) {
      let O = parentOf_7(u);
      if (Po(O, u) && O.property.type === "Identifier") return;
      throw refuse_9(u, `$.${ye} is used other than as $.${ye}.name or $.${ye}.root`);
    }
    let g = parentOf_7(u);
    if (!Po(g, u) || g.property.type !== "Identifier") throw refuse_9(u, `$.${property_2.name} is used as a value (a noun of $ bound, passed or read)`);
    let j = parentOf_7(g);
    if (j?.type !== "CallExpression" || j.callee !== g || j.optional) throw refuse_9(g, `$.${property_2.name}.${g.property.name} is used as a value (an event of $ bound, passed or read) instead of called`);
    let E = `${property_2.name}.${g.property.name}`;
    if (record(E), lOo(E)) recordEnv(E, tt(j, E, refuse_9));
    if (kdn(E)) recordState(st(j, E, {
      refuse: refuse_9,
      parentOf: parentOf_7,
      libraryHelper: libraryHelper_2
    }));
    return;
  }
  if (u.type === "CallExpression" && e.type === "Identifier") {
    let x = o === "parameter" && c === e && u.callee !== c && !u.optional && u.callee.type === "Identifier",
      g = x ? libraryHelper_2(u) : void 0;
    if ((g === "read" || g === "update") && u.arguments[0] === e) return;
    if (g !== void 0) throw refuse_9(e, `$ is passed to the state library's ${g} other than as the first argument of read($, source) or update($, target, fn)`);
    if (x) {
      follow(u, e);
      return;
    }
  }
  if (o === "parameter") throw refuse_9(c, `$ itself is ${Ao(u, c)} (bound, passed, spread, returned or read)`);
  if (u.type === "SpreadElement") {
    if (parentOf_7(u)?.type === "ObjectExpression") return;
    throw refuse_9(u, "the value of next(e) at engine.create is spread other than into an object literal");
  }
  if (u.type === "ReturnStatement" || u.type === "ArrowFunctionExpression" && u.body === c) return;
  if (u.type === "VariableDeclarator" && u.init === c) {
    let x = parentOf_7(u);
    if (x?.type !== "VariableDeclaration" || x.kind !== "const") throw refuse_9(u, "the value of next(e) at engine.create is bound with let or var (const only)");
    let {
      id: id_5
    } = u;
    if (id_5.type === "Identifier") {
      bind.dollar(id_5);
      return;
    }
    if (id_5.type === "ObjectPattern") {
      for (let j of id_5.properties) if (j.type === "RestElement") {
        if (j.argument.type !== "Identifier") throw refuse_9(j, "a rest of next(e) at engine.create that is not a plain name");
        bind.dollar(j.argument);
      } else if (j.value.type === "Identifier" && !j.computed) bind.unread(j.value);else throw refuse_9(j, "a destructuring of next(e) at engine.create with a nested pattern, a default or a computed key");
      return;
    }
    throw refuse_9(id_5, "the value of next(e) at engine.create is destructured into an array");
  }
  throw refuse_9(c, `the value of next(e) at engine.create is ${Ao(u, c)}`);
}
var nt = "engine.create";
function Ye(e, o, r) {
  let {
    refuse: refuse_10
  } = r;
  for (let {
    name: name_3,
    declaration: declaration_10,
    origin: origin
  } of o) {
    for (let i of go(e, name_3)) if (i !== declaration_10) throw refuse_10(i, `"${name_3}" (which holds $) is declared again (shadowed)`);
    for (let i of z(e, name_3)) Io(i, origin, r);
  }
}
function by(e, o, r) {
  let {
    refuse: refuse_11
  } = r;
  if (e.type !== "ArrowFunctionExpression") for (let i of z(e, "arguments", "own")) throw refuse_11(i, '"arguments" is read inside a function handed $ (it holds $)');
  let s = e.params.at(-1);
  if (s?.type === "RestElement" && o >= e.params.length - 1) throw refuse_11(s, "$ is passed into a rest parameter");
  let declaration_11 = e.params[o];
  if (declaration_11 === void 0) return;
  if (declaration_11.type !== "Identifier") throw refuse_11(declaration_11, "the parameter that receives $ is not a plain name (a pattern or a default)");
  Ye(e, [{
    name: declaration_11.name,
    declaration: declaration_11,
    origin: "parameter"
  }], {
    ...r,
    bind: {
      dollar: i => {
        throw refuse_11(i, "next(e) is bound outside an engine.create hook");
      },
      unread: i => {
        throw refuse_11(i, "next(e) is bound outside an engine.create hook");
      }
    }
  });
}
function pt({
  fn: fn,
  next: next,
  engineCreate: engineCreate
}, t) {
  let {
    refuse: refuse_12,
    parentOf: parentOf_8
  } = t;
  if (next.type !== "Identifier") {
    if (engineCreate) throw refuse_12(next, "the third parameter of an engine.create hook (next) is not a plain name");
    No(next, t);
    return;
  }
  for (let p of go(fn, next.name)) if (p !== next) throw refuse_12(p, `"${next.name}" (the continuation) is declared again (shadowed); rename the inner binding`);
  for (let p of z(fn, next.name)) {
    let i = parentOf_8(p);
    if (i?.type === "CallExpression" && i.callee === p && !i.optional) {
      if (engineCreate) Io(i, "next", t);
      continue;
    }
    if (i?.type === "MemberExpression" && i.object === p) {
      if (i.computed) {
        if (i.property.type === "Literal" && typeof i.property.value === "string" && i.property.value !== "to") continue;
        throw refuse_12(i, `a computed member access on "${next.name}" (it may reach next.to)`);
      }
      if (i.property.type === "Identifier" && i.property.name === "to") {
        let c = Jr(i, t);
        if (engineCreate) Io(c, "next", t);
      }
      continue;
    }
    if (engineCreate) throw refuse_12(p, `"${next.name}" is passed on or bound inside an engine.create hook (its value is $)`);
    if (i?.type === "VariableDeclarator" && i.init === p) {
      if (i.id.type === "Identifier") throw refuse_12(i, `"${next.name}" (the hook's next) is bound to another name; next.to is reached only on the hook's own next`);
      No(i.id, t);
      continue;
    }
    if (i?.type === "AssignmentExpression" && i.right === p) throw refuse_12(i, `"${next.name}" (the hook's next) is assigned to another name; next.to is reached only on the hook's own next`);
  }
}
function vy(fn_2, engineCreate_2, r) {
  let {
      refuse: refuse_13
    } = r,
    [declaration_12, n, next_2] = fn_2.params;
  if (fn_2.type !== "ArrowFunctionExpression") for (let c of z(fn_2, "arguments", "own")) throw refuse_13(c, '"arguments" is read inside a hook (it holds $)');
  let i = [];
  if (declaration_12 !== void 0) {
    if (declaration_12.type !== "Identifier") throw refuse_13(declaration_12, "the first parameter of a hook ($) is not a plain name (a pattern, a rest or a default)");
    i.push({
      name: declaration_12.name,
      declaration: declaration_12,
      origin: "parameter"
    });
  }
  for (let c of [declaration_12, n, next_2]) if (c?.type === "RestElement") throw refuse_13(c, "a hook takes $, e or next into a rest parameter (it would hold next)");
  for (let c of fn_2.params) bx(c, ({
    node: node_12
  }) => {
    if (node_12.type === "AssignmentPattern") throw refuse_13(node_12, "a parameter of a hook has a default value");
  });
  let f = {
    ...r,
    bind: {
      dollar: declaration_13 => {
        i.push({
          name: declaration_13.name,
          declaration: declaration_13,
          origin: "next"
        });
      },
      unread: c => {
        for (let u of z(fn_2, c.name)) throw refuse_13(u, `"${c.name}", destructured from $ at engine.create, is read (a noun bound to a name); leave it unread or call it as $.noun.event(...)`);
      }
    }
  };
  if (next_2 !== void 0) pt({
    fn: fn_2,
    next: next_2,
    engineCreate: engineCreate_2
  }, f);
  Ye(fn_2, i, f);
}
function it(e) {
  let {
      scan: scan,
      linked: linked_2
    } = e,
    {
      scanned: scanned_7
    } = linked_2,
    {
      refuse: refuse_14,
      parentOf: parentOf_9
    } = scanned_7,
    follow_2 = (i, a) => {
      let {
        callee: callee_3
      } = i;
      if (callee_3.type !== "Identifier") throw refuse_14(callee_3, "$ is passed to something other than a named function");
      let c = xe(i);
      if (c !== void 0) throw refuse_14(c, "$ is passed in a call with a spread argument");
      let u = zr(callee_3, {
        names: scanned_7.names,
        refuse: refuse_14,
        what: "the function handed $"
      });
      if (u === void 0) {
        let g = scanned_7.imports.get(callee_3.name);
        throw refuse_14(callee_3, g === void 0 ? `$ is passed to "${callee_3.name}", which is not a function declared at the top of this file (a function declaration, or a const bound to one); $ is followed nowhere else` : `$ is passed to "${callee_3.name}", imported from "${g.specifier}": $ is followed only into a function declared in this same file, never across an import`);
      }
      let y = i.arguments.indexOf(a),
        x = scan.helpers.get(u) ?? new Set();
      if (x.has(y)) return;
      x.add(y), scan.helpers.set(u, x), by(u, y, {
        refuse: refuse_14,
        parentOf: parentOf_9,
        record: g => {
          scan.calls.add(g), scan.via.set(g, (scan.via.get(g) ?? new Set()).add(callee_3.name));
        },
        recordTo: g => {
          scan.nextTo.add(g);
        },
        recordEnv: (g, h) => {
          Ce(scan, g).add(h);
        },
        recordState: g => {
          So(scan, g, {
            refuse: refuse_14,
            parentOf: parentOf_9
          });
        },
        libraryHelper: g => X(scanned_7, g),
        follow: follow_2
      });
    };
  return follow_2;
}
function Je({
  scan: scan_2,
  linked: linked_3
}, r, what_3) {
  let {
      scanned: scanned_8
    } = linked_3,
    fn_3 = zr(r, {
      names: scanned_8.names,
      refuse: scanned_8.refuse,
      what: what_3
    });
  if (fn_3 !== void 0) return {
    fn: fn_3,
    linked: linked_3
  };
  let p = scanned_8.imports.get(r.name);
  if (p === void 0) throw scanned_8.refuse(r, `${what_3} "${r.name}" is not a function declared at the top of this file (a function declaration, or a const bound to a function), nor imported from one of the module's own files`);
  if (p.imported === void 0) throw scanned_8.refuse(r, `${what_3} "${r.name}" is a namespace import, not a function`);
  if (scanned_8.names.assigned.has(r.name)) throw scanned_8.refuse(r, `${what_3} "${r.name}" is assigned to elsewhere`);
  let i = scanned_8.names.declared.get(r.name)?.find(c => !bn(c, scanned_8.parentOf));
  if (i !== void 0) throw scanned_8.refuse(i, `${what_3} "${r.name}" is declared again in this file, shadowing the import`);
  let a = linked_3.links.get(p.specifier);
  if (a === void 0) throw scanned_8.refuse(r, `"${p.specifier}" was not linked`);
  let linked_4 = $e(scan_2, a);
  return {
    fn: vo(linked_4, p.imported),
    linked: linked_4
  };
}
import { createHash as Dy } from "crypto";
var ae = e => `${e.length}:${e}`;
function Ry(e) {
  let o = Dy("sha256").update(ae(e.root));
  for (let [r, {
    compiled: compiled,
    links: links
  }] of e.files) {
    o.update(ae(r) + ae(compiled));
    for (let [n, p] of links) o.update(ae(n) + ae(p));
  }
  return o.digest("hex");
}
function at(e) {
  return {
    argumentsRead: e.type === "ArrowFunctionExpression" ? [] : z(e, "arguments", "own"),
    names: ho(e)
  };
}
function ft(e, o) {
  let r = e.holderNames.get(o);
  if (r !== void 0) return r;
  let t = at(o);
  return e.holderNames.set(o, t), t;
}
function Qe(e, {
  fn: fn_4,
  what: what_4,
  event: event_3,
  engineCreate: engineCreate_3
}) {
  let {
      scan: scan_3,
      linked: linked_5
    } = e,
    i = fn_4.type === "FunctionExpression" || fn_4.type === "ArrowFunctionExpression",
    a = fn_4.type === "Identifier",
    f = i ? {
      fn: fn_4,
      linked: linked_5
    } : a ? Je(e, fn_4, what_4) : void 0;
  if (f === void 0) throw linked_5.scanned.refuse(fn_4, `${what_4} is not a function literal or the name of one`);
  let c = f.fn.async === !0 && f.fn.generator === !0,
    u = INt(event_3);
  if (u && !c) throw linked_5.scanned.refuse(fn_4, `${what_4} on "${event_3}" is not an async generator: ${event_3} streams, so it takes async function* ($, e, next) { ... }, which yields the chunks and returns the result`);
  if (!u && c) throw linked_5.scanned.refuse(fn_4, `${what_4} on "${event_3}" is an async generator: only a streaming event named as itself (${YVn.join(", ")}) takes one; this pattern takes ($, e, next) => result`);
  scan_3.registered.set(f.fn, {
    linked: f.linked,
    engineCreate: scan_3.registered.get(f.fn)?.engineCreate === !0 || engineCreate_3
  });
}
function mt(e, {
  call: call_5,
  event: event_4,
  onName: onName,
  holder: holder_2
}) {
  let {
      scanned: scanned_9
    } = e.linked,
    {
      parentOf: parentOf_10,
      refuse: refuse_15
    } = scanned_9,
    a = parentOf_10(call_5),
    what_5 = `${onName}("${event_4}")`;
  if (a?.type !== "MemberExpression" || a.object !== call_5) {
    Q({
      call: call_5,
      scanned: scanned_9,
      what: what_5,
      holder: holder_2
    });
    return;
  }
  if (!(!a.computed && !a.optional && a.property.type === "Identifier" && a.property.name === "catch")) throw refuse_15(a, `${what_5} is read for something other than .catch; a registration has .catch(handler) and nothing else`);
  let call_6 = parentOf_10(a);
  if (!(call_6?.type === "CallExpression" && call_6.callee === a && !call_6.optional)) throw refuse_15(a, `${what_5}.catch is read without being called`);
  if (event_4 === nt) throw refuse_15(call_6, `${what_5}.catch(): an engine.create hook has no budget and its failure fails the load; .catch does not apply`);
  let x = xe(call_6);
  if (x !== void 0) throw refuse_15(x, `${what_5}.catch() is called with a spread argument`);
  let [fn_5, ...h] = call_6.arguments;
  if (fn_5 === void 0 || h.length > 0) throw refuse_15(call_6, `${what_5}.catch() takes (handler); got ${call_6.arguments.length} argument(s)`);
  Qe(e, {
    fn: fn_5,
    what: "the .catch handler",
    event: event_4,
    engineCreate: !1
  });
  let j = parentOf_10(call_6);
  if (j?.type === "MemberExpression" && j.object === call_6) throw refuse_15(j, `${what_5}.catch(...) is followed by another member; a registration takes one .catch`);
  Q({
    call: call_6,
    scanned: scanned_9,
    what: `${what_5}.catch()`,
    holder: holder_2
  });
}
function lt(e, o) {
  let {
      call: call_7,
      onName: onName_2,
      holder: holder_3,
      position: position
    } = o,
    {
      scan: scan_4,
      linked: linked_6
    } = e,
    {
      scanned: scanned_10
    } = linked_6,
    {
      event: event_5,
      hook: c,
      matcher: matcher_2
    } = Bc(call_7, scanned_10.refuse, onName_2),
    y = matcher_2 !== void 0,
    x = W6e(event_5),
    g = scan_4.unmatched.get(event_5);
  if (g !== void 0 && (!y || x)) throw scanned_10.refuse(call_7, `${onName_2}("${event_5}") is registered twice${y ? "" : " without a matcher"}; the first is at ${g}`);
  if (!y || x) scan_4.unmatched.set(event_5, `${scanned_10.file}:${call_7.loc?.start.line ?? "unknown line"}`);
  scan_4.hooks.add(event_5), scan_4.registrations.set(call_7, {
    event: event_5,
    matcher: matcher_2,
    linked: linked_6,
    holder: holder_3,
    position: position
  }), Qe(e, {
    fn: c,
    what: "the hook",
    event: event_5,
    engineCreate: event_5 === nt
  }), mt(e, {
    ...o,
    event: event_5
  });
}
function Do(e, o, r) {
  let {
      scan: scan_5,
      linked: linked_7
    } = e,
    n = scan_5.holders.get(o) ?? new Set();
  if (n.has(r)) return;
  n.add(r), scan_5.holders.set(o, n), scan_5.holderFiles.set(o, linked_7);
  let {
      scanned: scanned_11
    } = linked_7,
    {
      refuse: refuse_16,
      parentOf: parentOf_11
    } = scanned_11,
    f = ft(scan_5, o);
  for (let y of f.argumentsRead) throw refuse_16(y, '"arguments" is read inside a function that holds on');
  let c = o.params[r];
  if (c === void 0) {
    let y = o.params.at(-1);
    if (y?.type === "RestElement") throw refuse_16(y, "on is passed into a rest parameter");
    return;
  }
  if (c.type !== "Identifier") throw refuse_16(c, "the parameter that receives on is not a plain name");
  let onName_3 = c.name;
  for (let y of f.names.declared.get(onName_3) ?? []) if (y !== c) throw refuse_16(y, `"${onName_3}" is declared again (shadowed)`);
  for (let y of f.names.read.get(onName_3) ?? []) {
    let call_8 = parentOf_11(y);
    if (call_8?.type !== "CallExpression" || call_8.optional) throw refuse_16(y, `"${onName_3}" is used other than as a call or an argument to a function of the module's own (bound, spread or read)`);
    if (call_8.callee === y) {
      lt(e, {
        call: call_8,
        onName: onName_3,
        holder: o,
        position: r
      });
      continue;
    }
    if (call_8.callee.type !== "Identifier") throw refuse_16(call_8.callee, `"${onName_3}" is passed to something other than a function named at the top of this file or imported from one of the module's own files`);
    let g = xe(call_8);
    if (g !== void 0) throw refuse_16(g, `"${onName_3}" is passed in a call with a spread argument`);
    Q({
      call: call_8,
      scanned: scanned_11,
      what: `${call_8.callee.name}(${onName_3})`,
      holder: o
    });
    let h = Je(e, call_8.callee, "the callee"),
      position_2 = call_8.arguments.indexOf(y);
    scan_5.holderCalls.add({
      call: call_8,
      callee: h.fn,
      position: position_2,
      caller: o,
      callerPosition: r
    }), Do({
      scan: scan_5,
      linked: h.linked
    }, h.fn, position_2);
  }
}
var dt = (graph_2, pluginName_4, register) => ({
  graph: graph_2,
  pluginName: pluginName_4,
  register: register,
  hooks: new Set(),
  registrations: new Map(),
  holderCalls: new Set(),
  holderFiles: new Map(),
  unmatched: new Map(),
  calls: new Set(),
  nextTo: new Set(),
  envReads: new Set(),
  envWrites: new Set(),
  stateReads: new Map(),
  stateWrites: new Map(),
  stateCalls: new Set(),
  libraryCalls: new Map(),
  stateConsts: new Set(),
  direct: new Set(),
  via: new Map(),
  helpers: new Map(),
  registered: new Map(),
  holders: new Map(),
  holderNames: new Map()
});
function Ze(graph_3, pluginName_5) {
  let linked_8 = $e({
      graph: graph_3,
      pluginName: pluginName_5
    }, graph_3.entry),
    t = Hc(linked_8),
    scan_6 = dt(graph_3, pluginName_5, t);
  return Do({
    scan: scan_6,
    linked: linked_8
  }, t, 0), scan_6;
}
function eo(e, o) {
  let scan_7 = Ze(e, o);
  for (let [t, {
    linked: linked_9,
    engineCreate: engineCreate_4
  }] of scan_7.registered) vy(t, engineCreate_4, {
    refuse: linked_9.scanned.refuse,
    parentOf: linked_9.scanned.parentOf,
    record: p => {
      scan_7.calls.add(p), scan_7.direct.add(p);
    },
    recordTo: p => {
      scan_7.nextTo.add(p);
    },
    recordEnv: (p, i) => {
      Ce(scan_7, p).add(i);
    },
    recordState: p => {
      So(scan_7, p, linked_9.scanned);
    },
    libraryHelper: p => X(linked_9.scanned, p),
    follow: it({
      scan: scan_7,
      linked: linked_9
    })
  });
  return pi(scan_7), ri(scan_7), scan_7;
}
function qy(e, o) {
  let {
      via: via,
      direct: direct
    } = eo(e, o),
    s = new Map();
  for (let [n, p] of via) if (!direct.has(n)) s.set(n, [...p].sort());
  return s;
}
import { relative as ng } from "path";
var oo = (e, o, r) => new De(`${e}: ${o} does not parse: ${l(r)}`);
function cOo(e, o, r) {
  try {
    return wdn(o, e);
  } catch (error) {
    throw oo(r, o, error);
  }
}
var ut = (e, o) => fo(e) === "js" ? void 0 : o.split(`
`);
function ct(e) {
  let o = new Map();
  for (let r of e.body) {
    if (r.type !== "ImportDeclaration") continue;
    let specifier = String(r.source.value);
    for (let s of r.specifiers) {
      let imported_2;
      if (s.type === "ImportSpecifier") {
        let imported = s.imported;
        imported_2 = imported.type === "Identifier" ? imported.name : String(imported.value);
      } else imported_2 = s.type === "ImportDefaultSpecifier" ? "default" : void 0;
      o.set(s.local.name, {
        specifier: specifier,
        imported: imported_2
      });
    }
  }
  return o;
}
function xt(e) {
  let o = new Set();
  for (let r of e.body) {
    let t = r.type === "ImportDeclaration" || r.type === "ExportAllDeclaration",
      s = r.type === "ExportNamedDeclaration",
      n = t ? r.source : s ? r.source ?? null : null;
    if (n !== null) o.add(String(n.value));
  }
  return [...o];
}
class Ro extends De {
  name = "ScanRefusal";
  plugin;
  file;
  line;
  excerpt;
  construct;
  constructor({
    plugin: plugin_5,
    file: file_6,
    line: line,
    excerpt: excerpt,
    construct: construct
  }) {
    super(`${plugin_5}: ${file_6}${line === void 0 ? "" : excerpt === void 0 ? `:${line}` : `, compiled line ${line} \`${excerpt}\``}: ${construct}; $ is always spelled $.noun.event(...) at the call site, on is always on("<event>", hook), and next.to always next.to(e, "<tier>")`);
    this.plugin = plugin_5, this.file = file_6, this.line = line, this.excerpt = excerpt, this.construct = construct;
  }
}
function rg(e, file_7, plugin_6) {
  let t = ut(file_7, e);
  function refuse_17(a, construct_2) {
    let line_2 = a?.loc?.start.line,
      y = t === void 0 || line_2 === void 0 ? void 0 : t[line_2 - 1]?.trim() ?? "",
      x = y !== void 0 && y.length > rr;
    return new Ro({
      plugin: plugin_6,
      file: file_7,
      line: line_2,
      excerpt: x ? `${re(y, rr)}...` : y,
      construct: construct_2
    });
  }
  let {
      parse: parse
    } = WLr(),
    program_3;
  try {
    program_3 = parse(e, {
      ecmaVersion: "latest",
      sourceType: "module",
      locations: !0
    });
  } catch (error) {
    throw oo(plugin_6, file_7, error);
  }
  let i = Ws(program_3);
  return {
    file: file_7,
    program: program_3,
    names: Tn(program_3),
    parentOf: a => i.get(a),
    refuse: refuse_17,
    imports: ct(program_3),
    specifiers: xt(program_3)
  };
}
function sg(e) {
  let o;
  return bx(e, ({
    node: node_13
  }) => {
    if (o === void 0 && (node_13.type === "AwaitExpression" || node_13.type === "ForOfStatement" && node_13.await || node_13.type === "VariableDeclaration" && node_13.kind === "await using")) o = node_13;
  }, r => r.type === "FunctionDeclaration" || r.type === "FunctionExpression" || r.type === "ArrowFunctionExpression"), o;
}
async function gt(e, o, r) {
  let files = new Map(),
    known_2 = new Map([[e.file, e.source]]),
    reals_2 = new Map(e.real === void 0 ? [] : [[e.real, e.file]]),
    p = {
      known: known_2,
      reals: reals_2
    },
    i = Buffer.byteLength(e.source, "utf8"),
    a = [e];
  while (a.length > 0) {
    let f = [],
      c = 0;
    for (let {
      file: y,
      source: source_6
    } of a) {
      if (files.has(y)) continue;
      if (c > 0 && c % mo === 0) await Fv();
      if (c += 1, Buffer.byteLength(source_6, "utf8") > lo) throw uo(o, y);
      let compiled_2 = cOo(source_6, y, o),
        scanned_12 = rg(compiled_2, y, o),
        E = sg(scanned_12.program);
      if (y !== e.file && E !== void 0) throw scanned_12.refuse(E, "a top-level await in a file the entry imports; the environment links the entry alone as an async module");
      let links_2 = new Map();
      for (let specifier_2 of scanned_12.specifiers) {
        if (specifier_2 === G6e) continue;
        if (!BLr(specifier_2)) throw iOo(o, specifier_2, ng(e.root, y) || y);
        f.push({
          importer: y,
          specifier: specifier_2,
          links: links_2
        });
      }
      files.set(y, {
        source: source_6,
        compiled: compiled_2,
        scanned: scanned_12,
        links: links_2
      });
    }
    let u = [];
    for (let y = 0; y < f.length; y += mo) {
      let x = await Promise.allSettled(f.slice(y, y + mo).map(async g => ({
        pending: g,
        answer: await r(g.specifier, g.importer, p)
      })));
      for (let g of x) {
        if (g.status === "rejected") throw g.reason;
        let {
            pending: pending,
            answer: answer
          } = g.value,
          {
            real: real_4
          } = answer,
          file_8 = real_4 === void 0 ? void 0 : reals_2.get(real_4),
          w = file_8 === void 0 ? answer : {
            file: file_8,
            source: known_2.get(file_8) ?? answer.source
          };
        if (!known_2.has(w.file)) {
          if (i += Buffer.byteLength(w.source, "utf8"), i > zo) throw Ts(o, w.file);
          if (known_2.set(w.file, w.source), real_4 !== void 0) reals_2.set(real_4, w.file);
        }
        pending.links.set(pending.specifier, w.file), u.push(w);
      }
    }
    a = u;
  }
  return {
    entry: e.file,
    root: e.root,
    files: files
  };
}
function ht(e) {
  switch (e.type) {
    case "Literal":
      {
        let o = e.value;
        return typeof o === "string" ? [o] : void 0;
      }
    case "ArrayExpression":
      {
        let o = e.elements.map(item => {
          let s = item?.type === "Literal" ? item.value : void 0;
          return typeof s === "string" ? s : void 0;
        });
        return o.every(item => item !== void 0) ? o.filter(item => item !== void 0) : void 0;
      }
    default:
      return;
  }
}
function Ho(e) {
  switch (e?.type) {
    case "ObjectExpression":
      {
        let o = e.properties.filter(item => item.type === "Property" && (item.key.type === "Identifier" && item.key.name === "command" || item.key.type === "Literal" && item.key.value === "command")),
          r = e.properties.some(item => item.type === "SpreadElement" || item.computed || item.kind !== "init"),
          [t] = o;
        return !r && o.length === 1 && t?.type === "Property" ? ht(t.value) : void 0;
      }
    case "ArrayExpression":
      {
        let o = e.elements.map(item => item === null || item.type === "SpreadElement" ? void 0 : Ho(item));
        return o.every(item => item !== void 0) ? o.flatMap(item => item ?? []) : void 0;
      }
    default:
      return;
  }
}
function jt(e) {
  let o = [...e.registrations.values()].filter(item => x6(item.event, "command.run")),
    r = o.map(item => Ho(item.matcher));
  return o.length > 0 && r.every(item => item !== void 0) ? L(r.flatMap(item => item ?? [])).toSorted() : void 0;
}
function ug(e, o) {
  let r = eo(e, o),
    nextTo = Edt("prepend").filter(item => r.nextTo.has(item)),
    s = r.envReads.size > 0 || r.envWrites.size > 0,
    clients = jr(e),
    state_2 = ii(r),
    runCommands = jt(r);
  return {
    hooks: Array.from(r.hooks),
    calls: Array.from(r.calls).sort(),
    ...(runCommands !== void 0 && {
      runCommands: runCommands
    }),
    ...(nextTo.length === 0 ? {} : {
      nextTo: nextTo
    }),
    ...(s && {
      env: {
        reads: Array.from(r.envReads).sort(),
        writes: Array.from(r.envWrites).sort()
      }
    }),
    ...(state_2 !== void 0 && {
      state: state_2
    }),
    ...(clients.length > 0 && {
      clients: clients
    })
  };
}
var cg = e => (o, r) => Promise.reject(new De(`${e}: cannot import "${o}" (from ${r}): the module is one text with no files beside it`));
async function Edn(file_9, root_5, r) {
  let source_7 = Se.source(file_9);
  if (source_7 !== void 0) return {
    source: source_7,
    graph: await gt({
      file: file_9,
      source: source_7,
      root: root_5
    }, r, cg(r))
  };
  let {
    real: real_5,
    source: source_8
  } = await As(file_9, root_5, r);
  return {
    source: source_8,
    graph: await gt({
      file: file_9,
      source: source_8,
      root: root_5,
      real: real_5
    }, r, hp(root_5, r))
  };
}
function ke(e, o) {
  let r = Ry(e),
    t = tr.get(r);
  if (t !== void 0) return t;
  let s = ug(e, o);
  return tr.set(r, s), s;
}
async function K2o(e, o, r) {
  let {
      graph: graph_4
    } = await Edn(e, o, r),
    {
      registrations: registrations_2,
      renderMatchers: renderMatchers_2
    } = Mr(Ze(graph_4, r));
  return {
    scan: ke(graph_4, r),
    registrations: registrations_2,
    renderMatchers: renderMatchers_2,
    helperCalls: qy(graph_4, r)
  };
}
var Y2o = (e, o) => ({
  linked: [...e.files].filter(([r]) => r !== o).map(([file_10, t]) => ({
    file: file_10,
    source: t.source
  })),
  links: [...e.files].flatMap(([r, t]) => [...t.links].map(([spelled_5, file_11]) => ({
    from: r,
    spelled: spelled_5,
    file: file_11
  })))
});
async function zLr(e, o, r) {
  let scan_8 = Se.scan(e);
  if (scan_8 !== void 0) return {
    source: "",
    linked: [],
    links: [],
    scan: scan_8
  };
  let {
    source: source_9,
    graph: graph_5
  } = await Edn(e, o, r);
  return {
    source: source_9,
    linked: [...graph_5.files].filter(([p]) => p !== e).map(([file_12, i]) => ({
      file: file_12,
      source: i.source
    })),
    links: [...graph_5.files].flatMap(([p, i]) => [...i.links].map(([spelled_6, file_13]) => ({
      from: p,
      spelled: spelled_6,
      file: file_13
    }))),
    scan: ke(graph_5, r)
  };
}
var kt = (module, o, r) => ({
  module: module,
  scan: Tt(o, r),
  files: Nt(o)
});
var GLr = "agents";
var P6 = (folder, module_2, r) => Yd() ? kt(module_2, r(), folder) : {
  module: module_2,
  folder: folder
};
import { join as Dg } from "path";
function Rg(e, o) {
  return "folder" in o ? {
    path: o.folder,
    modulePath: Dg(o.folder, me)
  } : {
    path: path,
    modulePath: Co(e)
  };
}
import { join as Hg } from "path";
var Tdn = e => Hg(le(), to, e);
function Cg(e) {
  return e === null || e === void 0 ? String(e) : typeof e === "object" ? `an object with keys [${Object.keys(e).join(", ")}]` : `a ${typeof e}`;
}
function $g(e) {
  if (typeof e === "object" && e !== null && "registerPlugin" in e && typeof e.registerPlugin === "function") return e;
  throw new P(`a built-in module has no registerPlugin function: ${Cg(e)}`, "a built-in module has no registerPlugin function");
}
function WCe(e, o) {
  let r;
  try {
    r = o();
  } catch (error) {
    ro(e, "require", error);
    return;
  }
  let t;
  try {
    t = $g(r);
  } catch (error) {
    ro(e, "shape", error);
    return;
  }
  try {
    t.registerPlugin();
  } catch (error) {
    no().builtinPlugins.delete(e), ro(e, "register", error);
  }
}
function ro(name_4, phase, r) {
  let builtinPluginFailures = no().builtinPluginFailures;
  if (builtinPluginFailures.has(name_4)) return;
  builtinPluginFailures.set(name_4, {
    name: name_4,
    phase: phase,
    message: l(r)
  }), d(te(r)), m("plugin_bundled_register", phase);
}
function _g(e) {
  let o = no(),
    r = o.builtinPlugins.get(e);
  if (r === void 0 || o.builtinPluginFailures.has(e)) return !1;
  if (r.isAvailable === void 0) return !0;
  try {
    return r.isAvailable();
  } catch (error) {
    return ro(e, "is_available", error), !1;
  }
}
function oC(e) {
  no().builtinPlugins.set(e.name, e);
  let hooksModule = e.hooksModule;
  if (hooksModule === void 0) return;
  let r = Co(e.name);
  if ("scan" in hooksModule) Se.registerScan(r, hooksModule.scan);else if ("shipped" in hooksModule) Se.register(r, hooksModule.shipped);
}
function SI(e) {
  return e.endsWith(`@${path}`);
}
function VF(e) {
  return no().builtinPlugins.get(e);
}
function Qle() {
  let e = Vn(),
    enabled_2 = [],
    disabled = [];
  for (let [name_5, s] of no().builtinPlugins) {
    if (!_g(name_5)) continue;
    let n = `${name_5}@${path}`,
      p = s.enabledFromPolicyOnly ? he("policySettings")?.enabledPlugins?.[n] : s.enabledFromTrustedSettingsOnly ? QVn(n) : e?.enabledPlugins?.[n],
      enabled = p !== void 0 ? p === !0 : s.defaultEnabled ?? !0,
      a = {
        name: name_5,
        manifest: {
          name: name_5,
          description: s.description,
          version: s.version,
          ...(s.defaultEnabled === void 0 ? {} : {
            defaultEnabled: s.defaultEnabled
          }),
          ...(s.userConfig === void 0 ? {} : {
            userConfig: s.userConfig
          })
        },
        path: path,
        source: n,
        repository: n,
        enabled: enabled,
        isBuiltin: !0,
        hooksConfig: s.hooks,
        mcpServers: s.mcpServers,
        ...(s.hooksModule === void 0 ? {} : Rg(name_5, s.hooksModule))
      };
    if (enabled) enabled_2.push(a);else disabled.push(a);
  }
  return {
    enabled: enabled_2,
    disabled: disabled
  };
}
function Cdn() {
  let {
      enabled: enabled_3
    } = Qle(),
    o = [],
    builtinPlugins = no().builtinPlugins;
  for (let t of enabled_3) {
    let s = builtinPlugins.get(t.name);
    if (!s?.skills) continue;
    for (let n of s.skills) o.push(Lg(n));
  }
  return o;
}
function VLr() {
  let e = [];
  for (let o of no().builtinPlugins.values()) for (let r of o.skills ?? []) e.push(r.name, ...(r.aliases ?? []));
  return e;
}
function Lg(e) {
  let builtinPluginWiredSkills = no().builtinPluginWiredSkills,
    r = builtinPluginWiredSkills.get(e);
  if (!r) {
    let {
      wireSkillFilesExtraction: wireSkillFilesExtraction
    } = import.meta.require("B:/~BUN/root/chunk-fatfddww.js");
    r = wireSkillFilesExtraction(e), builtinPluginWiredSkills.set(e, r);
  }
  let {
      skillRoot: skillRoot,
      getPromptForCommand: getPromptForCommand
    } = r,
    n = {
      type: "prompt",
      name: e.name,
      description: typeof e.description === "function" ? "" : e.description,
      menuDescription: typeof e.menuDescription === "function" ? void 0 : e.menuDescription,
      aliases: e.aliases,
      hasUserSpecifiedDescription: !0,
      allowedTools: e.allowedTools ?? [],
      getAllowedTools: e.getAllowedTools,
      disallowedTools: e.disallowedTools ?? [],
      argumentHint: typeof e.argumentHint === "function" ? void 0 : e.argumentHint,
      whenToUse: typeof e.whenToUse === "function" ? void 0 : e.whenToUse,
      subcommands: e.subcommands,
      subcommandsBareOnly: e.subcommandsBareOnly,
      model: e.model,
      disableModelInvocation: typeof e.disableModelInvocation === "function" ? !0 : e.disableModelInvocation ?? !1,
      disableBridgeInvocation: e.disableBridgeInvocation,
      userInvocable: e.userInvocable ?? !0,
      terminalOriented: e.terminalOriented,
      argsMayContainSlashCommands: e.argsMayContainSlashCommands,
      contentLength: 0,
      source: "bundled",
      loadedFrom: "bundled",
      hooks: e.hooks,
      context: e.context,
      getContext: e.getContext,
      agent: e.agent,
      background: e.background,
      skillRoot: skillRoot,
      isEnabled: e.isEnabled ?? (() => !0),
      policyGate: typeof e.policyGate === "function" ? void 0 : e.policyGate,
      requires: e.requires,
      isHidden: !(e.userInvocable ?? !0),
      progressMessage: e.progressMessage ?? "running",
      getPromptForCommand: getPromptForCommand,
      getEffort: e.getEffort,
      getDefaultEffort: e.getDefaultEffort,
      onUserTypedArgs: e.onUserTypedArgs,
      getArgumentCompletions: e.getArgumentCompletions
    };
  return Uhe(n, "description", e.description), Uhe(n, "menuDescription", e.menuDescription), Uhe(n, "argumentHint", e.argumentHint), Uhe(n, "whenToUse", e.whenToUse), Rdn(n, "disableModelInvocation", e.disableModelInvocation), Adn(n, e.policyGate), n;
}
export { $he, j2o, HLr, KVn, _dn, PNt, W2o, kdt, FLr, YVn, INt, bdn, W6e, rOo, XVn, x6, oOo, ONt, Sdn, sOo, Xle, z2o, Edt, JVn, G2o, $Lr, z6e, GF, jCe, Jle, QVn, wdn, ULr, G6e, iOo, BLr, _Fe, jLr, aOo, WLr, vdn, bx, V2o, q2o, ZVn, lOo, kdn, bFe, cOo, Edn, K2o, Y2o, zLr, GLr, P6, Tdn, WCe, oC, SI, VF, Qle, Cdn, VLr, V6e };