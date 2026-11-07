// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { R, F, d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { Fr } from "B:/~BUN/root/chunk-ge2k1jpp.js";
import { m } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Q, Dt } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { Tc, ku, ERo, WBt, zFs, ri as path, i0 } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { $o } from "B:/~BUN/root/chunk-6n5g80b8.js";
import { be, Cr, HSe } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { RPr, Vee } from "B:/~BUN/root/chunk-t0w3xyzh.js";
import { $e } from "B:/~BUN/root/chunk-fg0appz9.js";
import { Hgt } from "B:/~BUN/root/chunk-2ey7et03.js";
import { j2e, vPr, EPr } from "B:/~BUN/root/chunk-r0s8ec1v.js";
import { O3 } from "B:/~BUN/root/chunk-jy87sa4x.js";
import { G2e } from "B:/~BUN/root/chunk-1ppr2tqn.js";
import { D } from "B:/~BUN/root/chunk-8mqsat26.js";
import { Kte } from "B:/~BUN/root/chunk-3cca501e.js";
import { Go } from "B:/~BUN/root/chunk-cf143bsb.js";
import { po } from "B:/~BUN/root/chunk-67erjrg5.js";
import { hG } from "B:/~BUN/root/chunk-99vcrndq.js";
import { Of } from "B:/~BUN/root/chunk-bvb659eh.js";
import { L } from "B:/~BUN/root/chunk-5ha2avah.js";
import { je } from "B:/~BUN/root/chunk-4qfwb3rf.js";
var On = 4294967295,
  Rn = On - 1,
  {
    floor: floor,
    min: min
  } = Math;
function Fn(e, o, t, r) {
  var n = 0,
    s = e == null ? 0 : e.length;
  if (s === 0) return 0;
  o = t(o);
  var p = o !== o,
    i = o === null,
    f = hG(o),
    l = o === void 0;
  while (n < s) {
    var u = floor((n + s) / 2),
      x = t(e[u]),
      y = x !== void 0,
      c = x === null,
      g = x === x,
      h = hG(x);
    if (p) var k = r || g;else if (l) k = g && (r || y);else if (i) k = g && y && (r || !c);else if (f) k = g && y && !c && (r || !h);else if (c || h) k = !1;else k = r ? x <= o : x < o;
    if (k) n = u + 1;else s = u;
  }
  return min(s, Rn);
}
var rt = Fn;
var Hn = 4294967295,
  Dn = Hn >>> 1;
function $n(e, o, t) {
  var r = 0,
    n = e == null ? r : e.length;
  if (typeof o == "number" && o === o && n <= Dn) {
    while (r < n) {
      var s = r + n >>> 1,
        p = e[s];
      if (p !== null && !hG(p) && (t ? p <= o : p < o)) r = s + 1;else n = s;
    }
    return n;
  }
  return rt(e, o, Kte, t);
}
var He = $n;
function Mn(e, o) {
  return He(e, o);
}
var Eo = Mn;
function Cn(e, o) {
  return He(e, o, !0);
}
var nt = Cn;
var KSo = Tc;
var De = KSo.map(item => `classic.${item}`);
var nPr = ["model.complete", "model.classify", "model.fork", "audio.play", "audio.speak", "mcp.call", "mcp.connect", "session.cwd", "session.root", "session.model", "session.turns", "session.id", "session.messages", "session.repo", "session.surface", "session.surfaces", "session.authorize", "session.identity", "session.usage", "session.version", "turn.abort", "prompt.read", "prompt.paint", "flag.value", "tool.list", "tool.register", "command.list", "command.register", "config.list", "agent.list", "agent.register", "ui.toast", "ui.status", "ui.log", "ui.notice", "ui.invalidate", "ui.open", "ui.close", "ui.panes", "ui.place", "theme.set", "theme.clear", "ui.selection", "ui.copy", "ui.view", "ui.notify", "ui.blit", "fs.read", "fs.write", "fs.list", "fs.exists", "fs.stat", "fs.ancestors", "store.get", "store.set", "store.delete", "store.keys", "state.get", "state.set", "clock.now", "clock.sleep", "clock.after", "clock.every", "http.fetch", "process.run", "process.spawn", "settings.read", "env.get", "env.set"];
var LNe = [...De, "tool.call", "tool.check", "ui.render", "ui.resolve", "ui.press", "ui.input", "ui.select", "ui.message", "ui.fault", "ui.scroll", "ui.focus", "agent.offer", "agent.spawn", "prompt.submit", "prompt.fill", "prompt.suggest", "prompt.edit", "prompt.change", "prompt.autocomplete", "prompt.section", "prompt.context", "prompt.attachment", "prompt.mention", "prompt.compose", "tool.describe", "command.run", "command.describe", "config.set", "config.describe", "telemetry.log", "telemetry.mark", "skill.prompt", "attribution.text", "session.start", "session.receive", "session.append", "session.send", "session.compact", "session.attach", "session.detach", "session.measure", "session.end", "plugin.register", "turn.start", "turn.step", "turn.complete", "engine.create", ...nPr];
var kua = De.filter(item => item !== "classic.PreToolUse");
var L2e = e => LNe.includes(e);
var Cxs = e => nPr.includes(e);
var qSo = ["turn.step", "process.spawn"];
var CUn = e => qSo.includes(e);
var it = new Set(LNe.filter(item => item.includes(".")).map(item => item.slice(0, item.indexOf("."))));
var Me = String.raw`(?!\p{Default_Ignorable_Code_Point})[\p{ID_Start}$_]` + String.raw`(?:(?!\p{Default_Ignorable_Code_Point})[\p{ID_Continue}$])*`;
var regExp = new RegExp(String.raw`^${Me}\.${Me}$`, "u");
var ton = e => regExp.test(e) && !it.has(e.slice(0, e.indexOf(".")));
var D4i = ["managed", "user", "project", "local", "memory"];
var RUn = ["replace", "append", "insert"];
var rPr = e => typeof e === "string" && RUn.includes(e);
var se = Symbol.for("claude-code.state.atom");
function wo(e) {
  if (typeof e !== "object" || e === null || Object.isFrozen(e)) return e;
  for (let o of Object.values(e)) wo(o);
  return Object.freeze(e);
}
function K(e, id = e.id) {
  let {
    plugin: plugin,
    key: key
  } = e;
  return Object.freeze(id === void 0 ? {
    plugin: plugin,
    key: key
  } : {
    plugin: plugin,
    key: key,
    id: id
  });
}
var Nl = (e, o, t) => Object.freeze({
  [se]: !0,
  ref: K(e),
  initial: wo(o),
  ...(t?.shape !== void 0 && {
    shape: t.shape
  })
});
function Ce(e, o) {
  if (e.shape === void 0) return o === void 0 ? e.initial : o;
  let t = o;
  return t?.shape === e.shape && t.value !== void 0 ? t.value : e.initial;
}
var pe = Symbol.for("claude-code.state.derived");
var _e = (e, o) => typeof e === "object" && e !== null && e[o] !== void 0;
var O = e => _e(e, se);
var Le = e => _e(e, pe);
var Hl = (e, compute) => {
  let t = {};
  return Object.freeze({
    [pe]: t,
    sources: Object.freeze(e.map(item => O(item) || Le(item) ? item : K(item))),
    compute: compute
  });
};
var Cl = (e, o) => O(e) ? Object.freeze({
  ...e,
  [se]: !0,
  ref: K(e.ref, o.requestId)
}) : K(e, o.requestId);
async function bo(e, o) {
  if (O(o)) {
    let p = await e.get(o.ref);
    return {
      value: Ce(o, p.value),
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
  let t = await Promise.all(o.sources.map(item => bo(e, item))),
    versions = t.flatMap(item => item.versions),
    n = versions.join(","),
    s = o[pe];
  if (s?.versions !== n && s !== void 0) s.value = o.compute(...t.map(item => item.value)), s.versions = n;
  return {
    value: s?.value,
    versions: versions
  };
}
var Ul = async (e, o) => (await bo(e.state, o)).value;
var mt = (e, value) => e.shape === void 0 ? value : {
  shape: e.shape,
  value: value
};
var lt = 64;
var zl = async (e, o, t) => {
  let state = e.state,
    n = O(o) ? o.ref : o;
  for (let s = 0; s < lt; s += 1) {
    let p = await state.get(n),
      i = O(o) ? Ce(o, p.value) : p.value,
      f = t(i),
      l = O(o) ? mt(o, f) : f;
    if ((await state.set(n, l, {
      ifVersion: p.version
    })).isSet) return f;
  }
  throw Error("update: the value was written by another every time it was read, up to the bound on tries; nothing was written");
};
var hO = Nl;
var EO = Hl;
var SO = Cl;
var NO = Ul;
var RO = zl;
var Axs = ["prepend", "user", "append", "builtin", "core"];
var L4i = ["allow", "ask", "deny"];
var RHt = e => ({
  prepend: ["user", "append", "builtin", "core"],
  user: [],
  append: ["core"],
  builtin: [],
  core: []
})[e];
var oPr = e => RHt("prepend").includes(e);
import { join as Qc } from "path";
var $c = "scripts/bundle-builtin-hooks-module.ts";
function Mc(e) {
  let o = D(e) ? e.files : void 0;
  return Object.freeze(Object.fromEntries((D(o) ? Object.entries(o) : []).filter(item => typeof item[1] === "string")));
}
function Cc(e, o) {
  let t = D(e) ? e.scan : void 0;
  if (D(t) && Array.isArray(t.hooks) && Array.isArray(t.calls) && (t.nextTo === void 0 || Array.isArray(t.nextTo))) return t;
  throw new R(`the build carried no hooks module scan for ${o}`, "the build carried no hooks module scan for a built-in");
}
var Lc = (e, o) => new R(`the hooks module of ${e} cannot ship: ${o}`, "the hooks module of a built-in cannot ship");
var Ee = "hooks/register.ts";
var dt = e => `builtin:${e}/${Ee}`;
var Ao = "mods";
var vo = "mods/";
import { resolve as Vc } from "path";
var we = () => Vc(import.meta.dirname, "../../../../../..");
import { dirname as Xc, relative as Kc, resolve as qc, sep as Yc } from "path";
var ct = "builtin-hooks-module:";
function Jc(e, o) {
  let t = o.slice(ct.length);
  return t.startsWith(vo) ? `${Ao}/${t.slice(vo.length)}` : Kc(we(), qc(Xc(e), t)).split(Yc).join("/");
}
var No = "builtin-hooks-module";
var gF = {
  name: No,
  setup(e) {
    e.onResolve({
      filter: /^builtin-hooks-module:/
    }, o => ({
      path: Jc(o.importer, o.path),
      namespace: No
    })), e.onLoad({
      filter: /.*/,
      namespace: No
    }, async o => {
      let t = Bun.spawn([process.execPath, "--smol", Qc(we(), $c), o.path], {
          cwd: we(),
          stdout: "pipe",
          stderr: "pipe",
          windowsHide: !0
        }),
        [r, n, s] = await Promise.all([new Response(t.stdout).text(), new Response(t.stderr).text(), t.exited]);
      if (s !== 0) throw Lc(o.path, n);
      return {
        contents: `module.exports = ${r}`,
        loader: "js"
      };
    });
  }
};
var Be = (e, o) => new $e(`${e}: ${o}: changed while it was read`);
class Se extends $e {}
var q = e => e instanceof Error && "code" in e ? String(e.code) : "EIO";
var ut = (e, o, t) => new $e(`${e}: ${o}: no such file`, {
  cause: q(t)
});
var xt = ["EMFILE", "ENFILE"];
async function Y(e, o) {
  try {
    return await e;
  } catch (error) {
    throw o(error);
  }
}
function yt(e, o, t) {
  let r = q(t);
  return xt.includes(r) ? new $e(`${e}: ${o}: not read, no file descriptor free (${r})`) : ut(e, o, t);
}
var su = (e, o, t) => new $e(`${e}: ${o}: not readable (${q(t)})`);
import { sep as du } from "path";
var gt = `/** @jsxRuntime classic */
/** @jsx h */
/** @jsxFrag Fragment */
`;
var Oo = e => ERo[WBt.find(item => e.endsWith(item)) ?? ""] ?? "js";
function ht(e) {
  let o = typeof e === "object" && e ? e : {},
    t = "errors" in o ? o.errors : void 0;
  return Array.isArray(t) ? t : [o];
}
function kt(e, o) {
  let t = typeof e === "object" && e !== null,
    r = t && "message" in e ? String(e.message) : "",
    n = t && "position" in e ? e.position : void 0;
  if (!(typeof n === "object" && n !== null && "line" in n && typeof n.line === "number" && "column" in n)) return r;
  return `${r} (line ${Number(n.line) - o}, column ${String(n.column)})`;
}
var jt = (e, o) => ht(e).map(item => kt(item, o)).filter(item => item !== "").join("; ") || String(e);
function sPr(e, o) {
  let loader = Oo(e),
    r = loader === "js",
    n = loader === "ts" ? "" : gt;
  if (r) return o;
  try {
    let s = {
      loader: loader,
      macro: !1
    };
    return new Bun.Transpiler(s).transformSync(`${n}${o}`);
  } catch (error) {
    throw new $e(jt(error, Dt(n, `
`)));
  }
}
var XSo = e => WBt.some(item => e.endsWith(item));
var Ro = 32;
var ron = 1048576;
var Et = 8388608;
function xxs(e) {
  let o = [e];
  if (e.endsWith(".js")) {
    let t = e.slice(0, -3);
    o.push(`${t}.ts`, `${t}.tsx`);
  }
  if (e.endsWith(".jsx")) o.push(`${e.slice(0, -4)}.tsx`);
  if (e.endsWith(".mjs")) o.push(`${e.slice(0, -4)}.mts`);
  if (e.endsWith(".cjs")) o.push(`${e.slice(0, -4)}.cts`);
  for (let t of WBt) o.push(`${e}${t}`), o.push(`${e}${du}index${t}`);
  return o;
}
var AHt = "claude-code";
var AUn = (e, o, t) => new $e(`${e}: cannot import "${o}" (from ${t}): a hooks module imports its own files by relative path and "${AHt}", nothing else`);
import { dirname as wt, resolve as bt } from "path";
var Pxs = (e, o) => [".", "..", "./", "../"].includes(e) ? bt(wt(o), e, "index") : bt(wt(o), e);
var Oxs = e => e === "." || e === ".." || e.startsWith("./") || e.startsWith("../");
var St = ["no such file", "not a regular file", "resolves outside the plugin's folder"];
import { isAbsolute as Mu, relative as Ot, sep as Cu } from "path";
import { constants as Su } from "fs";
import { open as Au } from "fs/promises";
class Po extends Se {}
var Ae = (e, o) => new Po(`${e}: ${o} is over ${ron} bytes and was not read`);
async function At(e, o) {
  let t = Buffer.allocUnsafe(o),
    r = 0;
  for (;;) {
    let {
      bytesRead: bytesRead
    } = await e.read(t, r, o - r, r);
    if (r += bytesRead, bytesRead === 0 || r === o) return t.subarray(0, r);
  }
}
import { realpath as wu } from "fs/promises";
function vt(e, o) {
  return wu(o);
}
async function Ue(e, {
  real: real,
  size: size
}, r) {
  if (size > ron) throw Ae(r, e);
  let n = l => yt(r, e, l);
  await using s = await Y(Au(real, Su.O_RDONLY | Go), l => q(l) === "ELOOP" ? Be(r, e) : n(l));
  let p = await Y(s.stat(), n);
  if (!p.isFile()) throw Be(r, e);
  if ((await Y(vt(s.fd, real), n)) !== real) throw Be(r, e);
  if (p.size > ron) throw Ae(r, e);
  let f = await Y(At(s, ron + 1), n);
  if (f.length > ron) throw Ae(r, e);
  return {
    real: real,
    source: f.toString("utf8")
  };
}
import { lstat as Nu, realpath as Nt } from "fs/promises";
import { basename as Tu, isAbsolute as Ou, relative as Ru, sep as Pu } from "path";
async function Ngt(e, o, t) {
  let r = await Y(Nt(o), l => su(t, Tu(o), l)),
    n = l => yt(t, e, l),
    real_2 = await Y(Nt(e), n),
    p = Ru(r, real_2);
  if (p === ".." || p.startsWith(`..${Pu}`) || Ou(p)) throw new $e(`${t}: ${e}: ${real_2} resolves outside the plugin's folder`);
  let f = await Y(Nu(real_2), n);
  if (!f.isFile()) throw new $e(`${t}: ${e}: not a regular file`);
  return {
    real: real_2,
    size: f.size
  };
}
var Tt = (e, o) => new Se(`${e}: ${o} is not named like code and was not loaded: a hooks module and the files it imports end in ` + zFs);
function Ge(e, o, t) {
  let r = [o, t].find(item => !XSo(item));
  if (r !== void 0) throw Tt(e, r);
}
var Ixs = (e, o) => o.startsWith(`${e}: `) ? o.slice(`${e}: `.length) : o;
async function N4i({
  spelled: spelled,
  importer: importer,
  root: root,
  pluginName: pluginName
}, n, s) {
  let p = `${pluginName}: cannot import "${spelled}" (from ${Ot(root, importer) || importer}):`,
    i = Pxs(spelled, importer),
    f = Ot(root, i);
  if (f === ".." || f.startsWith(`..${Cu}`) || Mu(f)) throw new $e(`${p} it is outside the plugin's folder (${root})`);
  let u = [];
  for (let file of xxs(i)) {
    let source = n.get(file);
    if (source !== void 0) return {
      file: file,
      source: source
    };
    try {
      let c = await Ngt(file, root, pluginName);
      Ge(pluginName, file, c.real);
      let file_2 = s.get(c.real),
        source_2 = file_2 === void 0 ? void 0 : n.get(file_2);
      if (file_2 !== void 0 && source_2 !== void 0) return {
        file: file_2,
        source: source_2
      };
      let {
        real: real_3,
        source: source_3
      } = await Ue(file, c, pluginName);
      return {
        file: file,
        source: source_3,
        real: real_3
      };
    } catch (error) {
      let g = d(error);
      if (!(error instanceof $e) || !St.some(item => g.endsWith(item))) throw new $e(`${p} ${Ixs(pluginName, g)}`);
      let k = error.cause === void 0;
      u.push(k ? g : `${g} (${String(error.cause)})`);
    }
  }
  throw new $e(`${p} no such file under ${root}`, u.length === 0 ? void 0 : {
    cause: u.join("; ")
  });
}
var Rt = (e, o, t) => new $e(`${e}: ${o} ${t}`);
var Gu = (e, o) => Rt(e, o, `takes the module over ${Et} bytes in total and was not read`);
async function Vu(e, o, t) {
  let r = await Ngt(e, o, t);
  return Ge(t, e, r.real), Ue(e, r, t);
}
var Mxs = () => Hgt();
function xUn() {
  let e = new Map();
  return {
    get: o => e.get(o),
    set: (o, t) => {
      e.set(o, t);
    }
  };
}
function Pt() {
  let e = xUn(),
    o = xUn();
  return {
    register: (t, r) => {
      e.set(t, r);
    },
    source: t => e.get(t),
    registerScan: (t, r) => {
      o.set(t, r);
    },
    scan: t => o.get(t)
  };
}
var JSo = Pt();
var It = 80;
var Ft = xUn();
var Ht = (root_2, pluginName_2) => (spelled_2, importer_2, {
  known: known,
  reals: reals
}) => N4i({
  spelled: spelled_2,
  importer: importer_2,
  root: root_2,
  pluginName: pluginName_2
}, known, reals);
import { relative as zy } from "path";
var Ve = (e, o, t) => new $e(`${e}: ${o} does not parse: ${d(t)}`);
function F4i(e, o, t) {
  try {
    return sPr(e, o);
  } catch (error) {
    throw Ve(t, e, error);
  }
}
var $t = (e, o) => Oo(e) === "js" ? void 0 : o.split(`
`);
var Mt = (e, o) => e.id === o || e.params.includes(o);
var _t = {
  VariableDeclarator: (e, o) => e.id === o,
  FunctionDeclaration: Mt,
  FunctionExpression: Mt,
  ArrowFunctionExpression: (e, o) => e.params.includes(o),
  ClassDeclaration: (e, o) => e.id === o,
  ClassExpression: (e, o) => e.id === o,
  CatchClause: (e, o) => e.param === o,
  AssignmentPattern: (e, o) => e.left === o,
  RestElement: (e, o) => e.argument === o,
  ArrayPattern: (e, o) => e.elements.includes(o),
  Property: (e, o, t) => e.value === o && t?.type === "ObjectPattern",
  ImportSpecifier: (e, o) => e.local === o,
  ImportDefaultSpecifier: (e, o) => e.local === o,
  ImportNamespaceSpecifier: (e, o) => e.local === o
};
var ox = e => _t[e.type];
var tx = (e, o) => (o?.type === "Property" || o?.type === "PropertyDefinition" || o?.type === "MethodDefinition") && o.key === e && !o.computed;
var Io = e => typeof e === "object" && e !== null && typeof e.type === "string";
function sx(e) {
  let weakMap = new WeakMap();
  return t => {
    let r = weakMap.get(t);
    if (r !== void 0) return r;
    let n = e(t);
    return weakMap.set(t, n), n;
  };
}
function KF(node, o, t) {
  let r = [{
    node: node,
    parent: void 0,
    grandparent: void 0
  }];
  for (let n = r.pop(); n !== void 0; n = r.pop()) {
    if (o(n), t?.(n.node)) continue;
    let s = Object.keys(n.node);
    for (let p = s.length - 1; p >= 0; p -= 1) {
      let i = s[p];
      if (i === void 0 || i === "loc" || i === "type" || i === "start" || i === "end") continue;
      let node_3 = n.node[i];
      if (Array.isArray(node_3)) for (let u = node_3.length - 1; u >= 0; u -= 1) {
        let node_2 = node_3[u];
        if (Io(node_2)) r.push({
          node: node_2,
          parent: n.node,
          grandparent: n.parent
        });
      } else if (Io(node_3)) r.push({
        node: node_3,
        parent: n.node,
        grandparent: n.parent
      });
    }
  }
}
function ax(e) {
  let o = new Map();
  return KF(e, ({
    node: node_4,
    parent: parent
  }) => {
    if (parent !== void 0) o.set(node_4, parent);
  }), o;
}
function H4i(e) {
  let o;
  if (KF(e.program, ({
    node: node_5
  }) => {
    if (node_5.type === "ImportExpression" && (o === void 0 || node_5.start < o.start)) o = node_5;
  }), o === void 0) return;
  return e.refuse(o, 'a dynamic import(); a hooks module imports its own files with an import declaration, as in import { name } from "./file.js"');
}
function Lt(e) {
  let o = new Map();
  for (let t of e.body) {
    if (t.type !== "ImportDeclaration") continue;
    let specifier = String(t.source.value);
    for (let n of t.specifiers) {
      let imported_2;
      if (n.type === "ImportSpecifier") {
        let imported = n.imported;
        imported_2 = imported.type === "Identifier" ? imported.name : String(imported.value);
      } else imported_2 = n.type === "ImportDefaultSpecifier" ? "default" : void 0;
      o.set(n.local.name, {
        specifier: specifier,
        imported: imported_2
      });
    }
  }
  return o;
}
function Bt(e) {
  let o = new Set();
  for (let t of e.body) {
    let r = t.type === "ImportDeclaration" || t.type === "ExportAllDeclaration",
      n = t.type === "ExportNamedDeclaration",
      s = r ? t.source : n ? t.source ?? null : null;
    if (s !== null) o.add(String(s.value));
  }
  return [...o];
}
var Fo = 2000;
class We extends $e {
  name = "ScanRefusal";
  plugin;
  file;
  line;
  excerpt;
  construct;
  constructor({
    plugin: plugin_2,
    file: file_3,
    line: line,
    excerpt: excerpt,
    construct: construct
  }) {
    super(`${plugin_2}: ${file_3}${line === void 0 ? "" : excerpt === void 0 ? `:${line}` : `, compiled line ${line} \`${excerpt}\``}: ${construct}; $ is always spelled $.noun.event(...) at the call site, on is always on("<event>", hook), and next.to always next.to(e, "<tier>")`);
    this.plugin = plugin_2, this.file = file_3, this.line = line, this.excerpt = excerpt, this.construct = construct;
  }
}
function Ut(e, o) {
  switch (e.type) {
    case "SequenceExpression":
    case "ChainExpression":
    case "ParenthesizedExpression":
    case "AwaitExpression":
      return !0;
    case "LogicalExpression":
      return e.right === o;
    case "ConditionalExpression":
      return e.test !== o;
    case "UnaryExpression":
      return e.operator === "void";
    default:
      return !1;
  }
}
function P(e) {
  if (e.type !== "Property") return;
  let {
      key: key_2
    } = e,
    t = !e.computed && key_2.type === "Identifier",
    r = !e.computed && key_2.type === "Literal";
  return t ? key_2.name : r ? String(key_2.value) : void 0;
}
var B = e => e.properties.some(item => item.type === "Property" && (item.kind !== "init" || !item.shorthand && P(item) === "__proto__"));
var U = e => e?.type === "FunctionDeclaration" || e?.type === "FunctionExpression" || e?.type === "ArrowFunctionExpression";
var Gt = (e, o) => U(e) || e.type === "PropertyDefinition" && !e.static && e.value === o;
function Vt(e, o, t) {
  switch (e.type) {
    case "ArrayExpression":
      return !0;
    case "Property":
      return e.value === o;
    case "ObjectExpression":
      return o.type === "Property" && !t(e);
    default:
      return !1;
  }
}
function Wt(e) {
  switch (e.type) {
    case "Program":
    case "FunctionDeclaration":
    case "FunctionExpression":
    case "ArrowFunctionExpression":
    case "StaticBlock":
    case "BlockStatement":
    case "SwitchStatement":
    case "ForStatement":
    case "ForInStatement":
    case "ForOfStatement":
      return !0;
    default:
      return !1;
  }
}
function zt(e) {
  switch (e.type) {
    case "Property":
    case "ObjectPattern":
    case "ArrayPattern":
    case "RestElement":
    case "AssignmentPattern":
      return !0;
    default:
      return !1;
  }
}
function Xt(e, o) {
  switch (e.type) {
    case "Program":
    case "StaticBlock":
      return !0;
    case "BlockStatement":
      return U(o);
    default:
      return U(e);
  }
}
function G(e, o) {
  let t = new Map();
  return r => {
    let n = t.get(r);
    if (n !== void 0) return n ?? void 0;
    let s = r,
      p = e(r),
      i = p === void 0 ? null : o(p, s) ?? t.get(p);
    while (p !== void 0 && i === void 0) s = p, p = e(p), i = p === void 0 ? null : o(p, s) ?? t.get(p);
    for (let f = r; f !== void 0 && f !== p; f = e(f)) t.set(f, i ?? null);
    return i ?? void 0;
  };
}
function vx(parentOf) {
  let o = po(B);
  return {
    parentOf: parentOf,
    functionOf: G(parentOf, t => U(t) ? t : void 0),
    lexicalScopeOf: G(parentOf, t => Wt(t) ? t : void 0),
    varScopeOf: G(parentOf, t => Xt(t, parentOf(t)) ? t : void 0),
    declarerOf: G(parentOf, t => zt(t) ? void 0 : t),
    deferrerOf: G(parentOf, (t, r) => Gt(t, r) ? t : void 0),
    endOf: G(parentOf, (parent_2, value_2) => Ut(parent_2, value_2) ? void 0 : {
      value: value_2,
      parent: parent_2
    }),
    heldAt: G(parentOf, (parent_3, value_3) => Vt(parent_3, value_3, o) ? void 0 : {
      value: value_3,
      parent: parent_3
    })
  };
}
function Nx(e) {
  switch (e.type) {
    case "Program":
    case "FunctionDeclaration":
    case "FunctionExpression":
    case "ArrowFunctionExpression":
    case "ClassDeclaration":
    case "ClassExpression":
    case "StaticBlock":
    case "BlockStatement":
    case "CatchClause":
    case "SwitchStatement":
    case "ForStatement":
    case "ForInStatement":
    case "ForOfStatement":
      return !0;
    default:
      return !1;
  }
}
function Kt(e, o) {
  let t = e.map((r, n) => ({
    use: r,
    at: n
  }));
  return {
    owned: Map.groupBy(t, r => o.writtenShadowOf(r.use)),
    doubted: t.filter(item => o.writtenShadowOf(item.use) !== o.shadowOf(item.use))
  };
}
function qt(e) {
  return e.type === "Program" || e.type === "BlockStatement" || e.type === "StaticBlock" ? e.body : [];
}
function Yt(e) {
  let o = new Map();
  for (let t of qt(e)) {
    let r = t.type === "ExportNamedDeclaration",
      n = r ? t.declaration : t,
      isVar = n?.type === "VariableDeclaration" && n.kind === "var" && e.type === "Program" && !r;
    if (!(n?.type === "VariableDeclaration" && (n.kind === "const" || isVar))) continue;
    for (let {
      id: id_2,
      init: init
    } of n.declarations) if (id_2.type === "Identifier" && init) o.set(id_2.name, {
      id: id_2,
      init: init,
      isVar: isVar
    });
  }
  return o;
}
var Ho = (e, o) => o.writtenShadowOf(e) === void 0 || o.writtenShadowOf(e) !== o.shadowOf(e);
var fe = (cause, at_2) => at_2 === void 0 ? void 0 : {
  at: at_2,
  cause: cause
};
var Mx = Object.freeze({
  declared: "is declared here too, so the value it names cannot be listed. Declare it once",
  assigned: "is assigned here, so the value it names cannot be listed. Leave it unassigned, or write the reference at the call",
  doubted: "may be assigned here, where the engine can bind the name apart from the text, so the value it names cannot be listed. Rename one of the two",
  looped: "is spelled in a loop's head here, and the engine can write such a target past a nearer name of that spelling, so the value it names cannot be listed. Rename one of the two",
  early: "is read here as the file loads, above its declaration, where it is still undefined, so the value it names cannot be listed. Declare it above this read"
});
function Ne(e, {
  parentOf: parentOf_2,
  declarerOf: declarerOf,
  lexicalScopeOf: lexicalScopeOf,
  varScopeOf: varScopeOf
}) {
  let s = declarerOf(e);
  switch (s?.type) {
    case "VariableDeclarator":
      {
        let p = parentOf_2(s);
        return (p?.type === "VariableDeclaration" && p.kind !== "var" ? lexicalScopeOf(s) : varScopeOf(s)) ?? "unplaced";
      }
    case "FunctionDeclaration":
    case "ClassDeclaration":
      return s.id === e ? lexicalScopeOf(s) ?? "unplaced" : s;
    case "FunctionExpression":
    case "ArrowFunctionExpression":
    case "ClassExpression":
    case "CatchClause":
      return s;
    case "ImportSpecifier":
    case "ImportDefaultSpecifier":
    case "ImportNamespaceSpecifier":
      return varScopeOf(s) ?? "unplaced";
    case "AssignmentExpression":
    case "ForInStatement":
    case "ForOfStatement":
      return "nothing";
    default:
      return "unplaced";
  }
}
function Jt(e, {
  names: names,
  climbs: climbs
}) {
  let {
      name: name
    } = e,
    n = (names.declared.get(name) ?? []).filter(item => {
      let i = Ne(item, climbs);
      return typeof i !== "string" && i.type === "Program";
    }),
    s = (names.assignedAt.get(name) ?? []).filter(item => Ho(item, names));
  return fe("declared", n.includes(e) ? n[1] : e) ?? fe("assigned", s.find(item => names.writtenShadowOf(item) === void 0)) ?? fe("doubted", s[0]) ?? fe("looped", names.loopAssigned.get(name)?.[0]) ?? fe("early", names.read.get(name)?.find(p => p.start < e.start && climbs.deferrerOf(p) === void 0 && Ho(p, names)));
}
function I(e) {
  switch (e?.type) {
    case "Identifier":
      return [e];
    case "ArrayPattern":
      return e.elements.flatMap(I);
    case "ObjectPattern":
      return e.properties.flatMap(item => I(item.type === "Property" ? item.value : item));
    case "AssignmentPattern":
      return I(e.left);
    case "RestElement":
      return I(e.argument);
    default:
      return [];
  }
}
function Zt(e) {
  let o = [],
    t = [];
  return KF(e, ({
    node: node_6
  }) => {
    switch (node_6.type) {
      case "AssignmentExpression":
        o.push(...I(node_6.left));
        break;
      case "UpdateExpression":
        o.push(...I(node_6.argument));
        break;
      case "ForInStatement":
      case "ForOfStatement":
        o.push(...I(node_6.left)), t.push(...I(node_6.left));
        break;
      default:
        break;
    }
  }), {
    byName: Map.groupBy(o, r => r.name),
    inLoopHeads: Map.groupBy(t, r => r.name)
  };
}
var me = (e, o, t) => o !== void 0 && (ox(o)?.(o, e, t) ?? !1);
function Do(e, o) {
  let t = [];
  return KF(e, ({
    node: node_7,
    parent: parent_4,
    grandparent: grandparent
  }) => {
    if (node_7.type === "Identifier" && node_7.name === o && me(node_7, parent_4, grandparent)) t.push(node_7);
  }), t;
}
function zse(e) {
  let o = e.type === "Identifier",
    t = e.type === "Literal";
  return o ? e.name : t ? String(e.value) : "";
}
var Xe = (e, o, t) => !me(e, o, t) && !(o?.type === "MemberExpression" && o.property === e && !o.computed) && !tx(e, o) && o?.type !== "LabeledStatement" && o?.type !== "BreakStatement" && o?.type !== "ContinueStatement" && o?.type !== "ExportSpecifier" && o?.type !== "ImportSpecifier" && o?.type !== "ImportDefaultSpecifier" && o?.type !== "ImportNamespaceSpecifier" && o?.type !== "MetaProperty" && o?.type !== "ExportAllDeclaration" && o?.type !== "ImportAttribute";
function er(e) {
  let o = new Map();
  function t(r) {
    let n = r.type === "VariableDeclaration" && r.kind === "const";
    if (r.type === "FunctionDeclaration" && r.id !== null) o.set(r.id.name, r);else if (n) for (let s of r.declarations) {
      let {
        id: id_3,
        init: init_2
      } = s;
      if (id_3.type === "Identifier" && (init_2?.type === "FunctionExpression" || init_2?.type === "ArrowFunctionExpression")) o.set(id_3.name, init_2);
    }
  }
  for (let r of e.body) if (t(r), r.type === "ExportNamedDeclaration" || r.type === "ExportDefaultDeclaration") {
    let declaration = r.declaration;
    if (declaration !== null && declaration !== void 0) t(declaration);
  }
  return o;
}
function Mo(e) {
  let o = [],
    t = [];
  return KF(e, ({
    node: node_8,
    parent: parent_5,
    grandparent: grandparent_2
  }) => {
    if (node_8.type !== "Identifier") return;
    if (me(node_8, parent_5, grandparent_2)) o.push(node_8);else if (Xe(node_8, parent_5, grandparent_2)) t.push(node_8);
  }), {
    declared: Map.groupBy(o, r => r.name),
    read: Map.groupBy(t, r => r.name)
  };
}
function or(e) {
  let o = [],
    t = [],
    r = [];
  return e.filter(item => item.start < item.end).flatMap(n => [{
    place: n.start,
    span: n,
    isStart: !0,
    rank: -n.end
  }, {
    place: n.end,
    span: n,
    isStart: !1,
    rank: -n.start
  }]).toSorted((n, s) => n.place - s.place || Number(n.isStart) - Number(s.isStart) || n.rank - s.rank).forEach(item => {
    item.isStart ? o.push(item.span) : o.splice(o.lastIndexOf(item.span), 1), t.push(item.place), r.push(o.at(-1)?.declaration);
  }), n => r[nt(t, n) - 1];
}
var tr = e => typeof e === "string" || Nx(e) ? e : "unplaced";
function rr(e, o, t) {
  return [...e].flatMap(([r, declaration_2]) => {
    if (typeof r === "string") return [];
    if (r.type === "SwitchStatement") {
      let {
        discriminant: discriminant
      } = r;
      return [{
        start: r.start,
        end: discriminant.start,
        declaration: declaration_2
      }, {
        start: discriminant.end,
        end: r.end,
        declaration: declaration_2
      }];
    }
    let s = o(r),
      i = t === "engine" && r.type === "BlockStatement" && s !== void 0 && U(s) && !e.has(s) ? s : r;
    return [{
      start: i.start,
      end: i.end,
      declaration: declaration_2
    }];
  });
}
function Co(e, o, t) {
  let r = new Map(),
    n = new Map(),
    s = new Map(),
    {
      parentOf: parentOf_3
    } = o;
  return i => {
    let f = s.get(i);
    if (f !== void 0) return f ?? void 0;
    let l = r.get(i.name) ?? new Map((e.get(i.name) ?? []).map(item => [tr(Ne(item, o)), item]).filter(([c]) => c !== "nothing" && (typeof c === "string" || c.type !== "Program")));
    if (r.set(i.name, l), parentOf_3(i) === void 0) return i;
    if (l.size === 0) return;
    let u = l.get("unplaced");
    if (u !== void 0) return u;
    let x = n.get(i.name) ?? or(rr(l, parentOf_3, t));
    n.set(i.name, x);
    let y = x(i.start);
    return s.set(i, y ?? null), y;
  };
}
function ny(e, o) {
  let {
      declared: declared,
      read: read
    } = Mo(e),
    n = Zt(e);
  return {
    functions: er(e),
    assigned: new Set(n.byName.keys()),
    assignedAt: n.byName,
    loopAssigned: n.inLoopHeads,
    declared: declared,
    read: read,
    shadowOf: Co(declared, o, "engine"),
    writtenShadowOf: Co(declared, o, "written")
  };
}
function sy(e, o) {
  for (let t of e.scanned.program.body) {
    let r = t.type === "ExportNamedDeclaration",
      n = r ? t.source : null,
      specifier_2 = r ? t.specifiers.find(item => zse(item.exported) === o) : void 0;
    if (n !== null && n !== void 0 && specifier_2 !== void 0) return {
      specifier: specifier_2,
      spelled: String(n.value)
    };
  }
  return;
}
function xHt(e, o, t = "all") {
  let r = [];
  return KF(e, ({
    node: node_9,
    parent: parent_6,
    grandparent: grandparent_3
  }) => {
    if (node_9.type === "Identifier" && node_9.name === o && Xe(node_9, parent_6, grandparent_3)) r.push(node_9);
  }, t === "own" ? s => s !== e && (s.type === "FunctionExpression" || s.type === "FunctionDeclaration") : void 0), r;
}
function nr(e, o) {
  return e.type === "Identifier" ? e.name === o : Do(e, o).length > 0;
}
function le(e) {
  switch (e.type) {
    case "Identifier":
      return [e.name];
    case "ObjectPattern":
      return e.properties.flatMap(item => le(item.type === "RestElement" ? item.argument : item.value));
    case "ArrayPattern":
      return e.elements.flatMap(item => item === null ? [] : le(item));
    case "AssignmentPattern":
      return le(e.left);
    case "RestElement":
      return le(e.argument);
    default:
      return [];
  }
}
var sr = 4;
function Ke(e, o) {
  for (let t of e.program.body) {
    let n = t.type === "ExportNamedDeclaration" ? t.declaration : t;
    if (!(n?.type === "VariableDeclaration" && n.kind === "const")) continue;
    for (let p of n.declarations) if (p.id.type === "Identifier" && p.id.name === o && p.init) return p.init;
  }
  return;
}
function qe(e) {
  let o = e === null || e === void 0;
  return e?.type === "VariableDeclaration" ? e.declarations.flatMap(item => le(item.id)) : o ? [] : [e.id.name];
}
function Ye(e, o) {
  switch (e.type) {
    case "VariableDeclaration":
      return e.declarations.some(item => nr(item.id, o));
    case "FunctionDeclaration":
    case "ClassDeclaration":
      return e.id?.name === o;
    case "ImportDeclaration":
      return e.specifiers.some(item => item.local.name === o);
    case "ExportNamedDeclaration":
    case "ExportDefaultDeclaration":
      return e.declaration !== null && e.declaration !== void 0 && Ye(e.declaration, o);
    default:
      return !1;
  }
}
var pr = /^(?!(?:true|false|null|undefined|NaN|Infinity)$)(?![-\d])[\w:@*!$#-]+$/;
var ir = 16;
var Je = 120;
function Qe(e) {
  let o = e.slice(0, Je),
    t = e.length - o.length,
    r = JSON.stringify(o).replace(/[^\x20-\x7e]/g, n => "\\u".concat(n.charCodeAt(0).toString(ir).padStart(sr, "0"))).replace(/ {2,}/g, n => " ".concat(n.slice(1).replaceAll(" ", "\\u0020")));
  return t === 0 ? r : `${r}[+${t} chars]`;
}
function H(e) {
  return e.length <= Je && pr.test(e) ? e : Qe(e);
}
var v = "?";
function Ze(e, o, t) {
  let r = e.properties.map(item => P(item)),
    n = r.lastIndexOf(void 0);
  return e.properties.flatMap((item, index) => {
    let i = r[index],
      f = item.type !== "Property",
      l = i !== void 0 && r.includes(i, index + 1),
      u = i !== void 0 && index < n,
      x = i === void 0 ? v : H(i),
      y = `${x}=${v}`,
      c = f ? `...${v}` : `${x}${ar(item.value, o, t)}`;
    return l ? [] : [u ? y : c];
  }).join(", ");
}
function de(e, o) {
  let t = e.shadowOf(o);
  if (t === void 0) return {
    kind: "free"
  };
  let r = e.parentOf(t),
    n = r && e.parentOf(r),
    loop = n && e.parentOf(n);
  return r?.type === "VariableDeclarator" && r.id === t && n?.type === "VariableDeclaration" && n.kind === "const" && n.declarations.length === 1 && loop?.type === "ForOfStatement" && loop.left === n && o.start >= loop.body.start && o.start < loop.body.end ? {
    kind: "loop",
    loop: loop
  } : {
    kind: "shadowed"
  };
}
function fr(e, o) {
  let r = de(e, o).kind === "free" ? Ke(e, o.name) : void 0;
  return r?.type === "Literal" && r.regex === void 0 && typeof r.value !== "bigint" || r?.type === "TemplateLiteral" && r.expressions.length === 0 || r?.type === "Identifier" ? r : void 0;
}
function mr(e, o) {
  let r = de(e, o).kind === "free" ? Ke(e, o.name) : void 0;
  return (r?.type === "ObjectExpression" || r?.type === "ArrayExpression" || r?.type === "Literal" && r.regex !== void 0) && e.isSealed(o.name) ? r : void 0;
}
var ce = (e, o) => fr(e, o) ?? mr(e, o);
function eo(e, o, t) {
  let r = e,
    seen = t;
  while (r.type === "Identifier" && !seen.has(r.name)) {
    let i = ce(o, r);
    if (i === void 0) break;
    seen = new Set([...seen, r.name]), r = i;
  }
  let node_10 = r.type === "ObjectExpression" ? r : void 0;
  return node_10 !== void 0 && !B(node_10) ? {
    node: node_10,
    seen: seen
  } : void 0;
}
function _o(e, o) {
  let [t, ...r] = e.node.properties,
    n = r.length === 0 && t?.type === "Property",
    s = n ? P(t) : void 0,
    p = n ? eo(t.value, o, e.seen) : void 0;
  return s !== void 0 && p !== void 0 ? `.${H(s)}${_o(p, o)}` : ` has {${Ze(e.node, o, e.seen)}}`;
}
function lr(e) {
  let o = [];
  for (let t of e.elements) {
    if (t === null) return;
    if (t.type === "Literal") {
      let {
        value: value_4
      } = t;
      if (!(typeof value_4 === "string" || typeof value_4 === "number" || typeof value_4 === "boolean")) return;
      o.push(typeof value_4 === "string" ? H(value_4) : String(value_4));
      continue;
    }
    let n = t.type === "TemplateLiteral" && t.expressions.length === 0 ? t.quasis[0]?.value.cooked : void 0;
    if (n === void 0 || n === null) return;
    o.push(H(n));
  }
  return L(o);
}
function dr(e, o, t) {
  let {
    right: right
  } = o;
  return right.type === "ArrayExpression" && !e.program.body.some(item => item.type === "ImportDeclaration" && Ye(item, t)) ? lr(right)?.join("|") : void 0;
}
function cr(e, o, t) {
  if (t.has(e.name)) return v;
  let r = de(o, e),
    n = r.kind === "loop",
    s = n ? dr(o, r.loop, e.name) : void 0;
  if (n) return s ?? v;
  let p = ce(o, e);
  if (p === void 0) return v;
  return Z(p, o, new Set([...t, e.name]));
}
var ur = (e, o) => `/${Qe(e)}/${o}`;
function Z(e, o, t = new Set()) {
  switch (e.type) {
    case "Literal":
      {
        let {
            regex: regex,
            value: value_5
          } = e,
          s = typeof value_5 === "string",
          p = typeof value_5 === "bigint",
          i = s ? H(value_5) : String(value_5);
        return regex ? ur(regex.pattern, regex.flags) : p ? v : i;
      }
    case "TemplateLiteral":
      {
        let r = e.quasis[0]?.value.cooked;
        return e.expressions.length === 0 && r !== void 0 && r !== null ? H(r) : v;
      }
    case "ArrayExpression":
      return e.elements.map(item => item === null ? "" : Z(item, o, t)).join("|");
    case "ObjectExpression":
      return B(e) ? v : `{${Ze(e, o, t)}}`;
    case "Identifier":
      return cr(e, o, t);
    default:
      return v;
  }
}
function ar(e, o, t) {
  let r = eo(e, o, t);
  if (r === void 0) return `=${Z(e, o, t)}`;
  return _o(r, o);
}
var vua = (e, o, t) => o === void 0 ? e : `${e}${Z(o, t)}`;
function QSo(e, o, t = new Set()) {
  if (e.type === "Literal") return e.regex ? e.value ?? new RegExp("") : e.value;
  if (e.type === "ArrayExpression") return e.elements.map(item => item ? QSo(item, o, t) : new RegExp(""));
  if (e.type === "ObjectExpression") {
    if (B(e)) return new RegExp("");
    let n = [];
    for (let s of e.properties) {
      let p = P(s);
      if (s.type !== "Property" || p === void 0) return new RegExp("");
      n.push([p, QSo(s.value, o, t)]);
    }
    return Object.fromEntries(n);
  }
  if (e.type !== "Identifier" || t.has(e.name)) return new RegExp("");
  let r = ce(o, e);
  if (!r) return new RegExp("");
  return QSo(r, o, new Set([...t, e.name]));
}
function Lo(e, o) {
  if (e.type === "ExportDefaultDeclaration") {
    let {
      declaration: declaration_3
    } = e;
    return declaration_3.type === "Identifier" && declaration_3.name === o;
  }
  if (e.type !== "ExportNamedDeclaration") return !1;
  let {
      declaration: declaration_4,
      source: source_4,
      specifiers: specifiers
    } = e,
    s = declaration_4 !== null && declaration_4 !== void 0 && Ye(declaration_4, o),
    p = (source_4 === null || source_4 === void 0) && specifiers.some(item => zse(item.local) === o);
  return s || p;
}
var ZSo = (e, o) => e.body.some(item => Lo(item, o));
function gr(e) {
  let o = new Map();
  for (let t of e.body) {
    let r = t.type === "ExportDefaultDeclaration",
      n = t.type === "ExportNamedDeclaration",
      s = n ? t.declaration : void 0,
      p = s?.type === "VariableDeclaration",
      i = [...(r ? [t.declaration] : []), ...(p ? s.declarations.flatMap(item => I(item.id)) : [s?.id]), ...(n ? t.specifiers.map(item => item.local) : [])];
    for (let f of i) if (f?.type === "Identifier" && !o.has(f.name) && Lo(t, f.name)) o.set(f.name, t);
  }
  return o;
}
function oo(e, o, t) {
  let r = o(e);
  if (r?.type === "CallExpression") {
    let n = t.library.get(r),
      s = n === "read" || n === "update",
      p = n === "atom" || n === "memberOf" || t.state.has(r);
    return r.arguments[s ? 1 : 0] === e && (s || p);
  }
  if (r?.type === "ArrayExpression") {
    let n = o(r);
    return n?.type === "CallExpression" && t.library.get(n) === "derive" && n.arguments[0] === r;
  }
  return r?.type === "SpreadElement" && r.argument === e && o(r)?.type === "ObjectExpression";
}
function hr(e) {
  let placed = e.toSorted((t, r) => t.use.start - r.use.start);
  return {
    placed: placed,
    starts: placed.map(item => item.use.start)
  };
}
function kr(e, names_2, climbs_2) {
  let counted = po(n => Kt(names_2.read.get(n) ?? [], names_2));
  return {
    inits: sx(Yt),
    exporting: gr(e),
    rebound: po(n => Jt(n, {
      names: names_2,
      climbs: climbs_2
    })),
    counted: counted,
    apart: po(n => po(s => hr(counted(n).doubted.filter(item => !oo(item.use, climbs_2.parentOf, s)))))
  };
}
var jr = (e, o) => t => class extends t {
  enterScope = r => {
    if (t.prototype.enterScope.call(this, r), this.scopeStack.length > e + 1) throw o(this.lastTokStartLoc.line);
  };
};
function $4i(file_4, o, plugin_3) {
  let r = $t(file_4, o);
  function refuse(u, construct_2) {
    let line_2 = typeof u === "number" ? u : u?.loc?.start.line,
      g = r === void 0 || line_2 === void 0 ? void 0 : r[line_2 - 1]?.trim() ?? "",
      h = g !== void 0 && g.length > It;
    return new We({
      plugin: plugin_3,
      file: file_4,
      line: line_2,
      excerpt: h ? `${Q(g, It)}...` : g,
      construct: construct_2
    });
  }
  let {
      Parser: Parser
    } = Mxs(),
    program;
  try {
    program = Parser.extend(jr(Fo, u => refuse(u, `code nested too deep to scan: more than ${Fo} scopes (functions, blocks, loops) open inside one another`))).parse(o, {
      ecmaVersion: "latest",
      sourceType: "module",
      locations: !0
    });
  } catch (error) {
    if (error instanceof We) throw error;
    throw error instanceof RangeError ? refuse(void 0, `code nested too deep to scan (the parser stopped: ${error.message})`) : Ve(plugin_3, file_4, error);
  }
  let i = ax(program),
    climbs_3 = vx(u => i.get(u)),
    names_3 = ny(program, climbs_3);
  return {
    file: file_4,
    program: program,
    names: names_3,
    consts: kr(program, names_3, climbs_3),
    parentOf: climbs_3.parentOf,
    climbs: climbs_3,
    refuse: refuse,
    imports: Lt(program),
    specifiers: Bt(program)
  };
}
function Wy(e) {
  let o;
  return KF(e, ({
    node: node_11
  }) => {
    if (o === void 0 && (node_11.type === "AwaitExpression" || node_11.type === "ForOfStatement" && node_11.await || node_11.type === "VariableDeclaration" && node_11.kind === "await using")) o = node_11;
  }, t => t.type === "FunctionDeclaration" || t.type === "FunctionExpression" || t.type === "ArrowFunctionExpression"), o;
}
async function iPr(e, o, t) {
  let files = new Map(),
    known_2 = new Map([[e.file, e.source]]),
    reals_2 = new Map(e.real === void 0 ? [] : [[e.real, e.file]]),
    p = {
      known: known_2,
      reals: reals_2
    },
    i = Buffer.byteLength(e.source, "utf8"),
    f = [e];
  while (f.length > 0) {
    let l = [],
      u = 0;
    for (let {
      file: y,
      source: source_5
    } of f) {
      if (files.has(y)) continue;
      if (u > 0 && u % Ro === 0) await ku();
      if (u += 1, Buffer.byteLength(source_5, "utf8") > ron) throw Ae(o, y);
      let compiled = F4i(y, source_5, o),
        scanned = $4i(y, compiled, o),
        j = H4i(scanned);
      if (j !== void 0) throw j;
      let w = Wy(scanned.program);
      if (y !== e.file && w !== void 0) throw scanned.refuse(w, "a top-level await in a file the entry imports; the environment links the entry alone as an async module");
      let links = new Map();
      for (let specifier_3 of scanned.specifiers) {
        if (specifier_3 === AHt) continue;
        if (!Oxs(specifier_3)) throw AUn(o, specifier_3, zy(e.root, y) || y);
        l.push({
          importer: y,
          specifier: specifier_3,
          links: links
        });
      }
      files.set(y, {
        source: source_5,
        compiled: compiled,
        scanned: scanned,
        links: links
      });
    }
    let x = [];
    for (let y = 0; y < l.length; y += Ro) {
      let c = await Promise.allSettled(l.slice(y, y + Ro).map(async g => ({
        pending: g,
        answer: await t(g.specifier, g.importer, p)
      })));
      for (let g of c) {
        if (g.status === "rejected") throw g.reason;
        let {
            pending: pending,
            answer: answer
          } = g.value,
          {
            real: real_4
          } = answer,
          file_5 = real_4 === void 0 ? void 0 : reals_2.get(real_4),
          b = file_5 === void 0 ? answer : {
            file: file_5,
            source: known_2.get(file_5) ?? answer.source
          };
        if (!known_2.has(b.file)) {
          if (i += Buffer.byteLength(b.source, "utf8"), i > Et) throw Gu(o, b.file);
          if (known_2.set(b.file, b.source), real_4 !== void 0) reals_2.set(real_4, b.file);
        }
        pending.links.set(pending.specifier, b.file), x.push(b);
      }
    }
    f = x;
  }
  return {
    entry: e.file,
    root: e.root,
    files: files
  };
}
var Bo = e => (o, t) => Promise.reject(new $e(`${e}: cannot import "${o}" (from ${t}): the module is one text with no files beside it`));
async function PUn(file_6, root_3, t) {
  let source_6 = JSo.source(file_6);
  if (source_6 !== void 0) return {
    source: source_6,
    graph: await iPr({
      file: file_6,
      source: source_6,
      root: root_3
    }, t, Bo(t))
  };
  let {
    real: real_5,
    source: source_7
  } = await Vu(file_6, root_3, t);
  return {
    source: source_7,
    graph: await iPr({
      file: file_6,
      source: source_7,
      root: root_3,
      real: real_5
    }, t, Ht(root_3, t))
  };
}
import { createHash as Yy } from "crypto";
var ue = e => `${e.length}:${e}`;
function wr(e) {
  let o = Yy("sha256").update(ue(e.root));
  for (let [t, {
    compiled: compiled_2,
    links: links_2
  }] of e.files) {
    o.update(ue(t) + ue(compiled_2));
    for (let [s, p] of links_2) o.update(ue(s) + ue(p));
  }
  return o.digest("hex");
}
var xe = "Client";
function br(e) {
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
      key: key_3
    } = property;
    if (!property.computed && property.kind === "init" && (key_3.type === "Identifier" && key_3.name === "module" || key_3.type === "Literal" && key_3.value === "module")) o = {
      property: property,
      isSpreadAfter: !1
    };
  }
  return o;
}
function ee(e) {
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
function V(e) {
  if (e.type === "Literal") return typeof e.value === "string" ? e.value : void 0;
  if (e.type !== "TemplateLiteral" || e.expressions.length !== 0) return;
  let o = e.quasis[0]?.value.cooked;
  return o === void 0 || o === null ? void 0 : o;
}
function Sr(e, at_3) {
  if (!at_3 || at_3.type !== "ObjectExpression") return {
    at: at_3 ?? e,
    problem: `Client takes its props as an object literal ({ module: "./board.tsx", key }), so the surface module it names can be read before it runs (got ${ee(at_3)})`
  };
  let t = br(at_3);
  if (!t) return {
    at: at_3,
    problem: `Client names no module: give it module, the surface module's path as a string literal ("./board.tsx")`
  };
  if (t.isSpreadAfter) return {
    at: t.property,
    problem: "a spread after module in Client(...) could replace it: put module after the spread"
  };
  let {
      value: r
    } = t.property,
    spelled_3 = V(r);
  if (spelled_3 === void 0) return {
    at: r,
    problem: `Client module must be a string literal, the surface module's path relative to this file (got ${ee(r)})`
  };
  return {
    at: r,
    spelled: spelled_3
  };
}
var Uo = e => e.type === "Identifier" && e.name === xe || e.type === "Literal" && e.value === xe || e.type === "MemberExpression" && !e.computed && e.property.type === "Identifier" && e.property.name === xe;
var Ar = "h";
function vr(e) {
  let {
    callee: callee
  } = e;
  if (callee.type !== "Super" && Uo(callee)) return {
    argument: e.arguments[0]
  };
  let [t, argument] = e.arguments;
  return callee.type === "Identifier" && callee.name === Ar && t !== void 0 && t.type !== "SpreadElement" && Uo(t) ? {
    argument: argument
  } : void 0;
}
function Vo(e) {
  let o = [];
  return KF(e, ({
    node: node_12
  }) => {
    if (node_12.type !== "CallExpression") return;
    let r = vr(node_12);
    if (r) o.push(Sr(node_12, r.argument));
  }), o.toSorted((t, r) => r.at.start - t.at.start);
}
var component = "default";
function Nr(e) {
  let o = [];
  for (let t of e.body) if (t.type === "ExportDefaultDeclaration") o.push(component);else if (t.type === "ExportAllDeclaration") {
    if (t.exported !== null && t.exported) o.push(zse(t.exported));
  } else if (t.type === "ExportNamedDeclaration") {
    let {
      declaration: declaration_5
    } = t;
    if (declaration_5?.type === "FunctionDeclaration" || declaration_5?.type === "ClassDeclaration") o.push(declaration_5.id.name);else if (declaration_5?.type === "VariableDeclaration") {
      for (let {
        id: id_4
      } of declaration_5.declarations) if (id_4.type === "Identifier") o.push(id_4.name);
    }
    for (let s of t.specifiers) o.push(zse(s.exported));
  }
  return o;
}
var Tr = e => /^[A-Z][A-Za-z0-9]*$/.test(e) && /[a-z]/.test(e);
function Eua(e) {
  let o = Nr(e);
  if (o.includes(component)) return {
    component: component
  };
  let t = o.filter(Tr),
    [component_2] = t;
  if (t.length === 1 && component_2 !== void 0) return {
    component: component_2
  };
  return {
    problem: `exports ${t.length === 0 ? "no component" : t.join(", ")}: give it a default export or a single capitalized one (export function Board(props, surface) { ... })`
  };
}
import { dirname as dg, isAbsolute as cg, relative as ug, resolve as Or, sep as Rr } from "path";
function Wo(e) {
  let {
      spelled: spelled_4,
      file: file_7,
      root: root_4
    } = e,
    n = `Client module "${spelled_4}"`;
  if (!Oxs(spelled_4)) return {
    problem: `${n} is not relative: spell the surface module's path from this file ("./board.tsx")`
  };
  if (!XSo(spelled_4)) return {
    problem: `${n} is not named like code: a surface module's path ends in ` + zFs
  };
  let s = Or(dg(file_7), spelled_4),
    p = ug(Or(root_4), s);
  return p === ".." || p.startsWith(`..${Rr}`) || cg(p) ? {
    problem: `${n} leaves the plugin's folder`
  } : {
    module: p.split(Rr).join("/")
  };
}
function Pr(e) {
  try {
    return Mxs().parse(e, {
      ecmaVersion: "latest",
      sourceType: "module"
    });
  } catch {
    return;
  }
}
function Tua(e, file_8, root_5) {
  if (!e.includes(xe)) return e;
  let r = Pr(e),
    n = e;
  for (let s of r ? Vo(r) : []) {
    if (!("spelled" in s)) continue;
    let p = Wo({
      spelled: s.spelled,
      file: file_8,
      root: root_5
    });
    if ("module" in p) n = n.slice(0, s.at.start) + _(p.module) + n.slice(s.at.end);
  }
  return n;
}
function Hr(e) {
  let o = new Set();
  for (let [file_9, r] of e.files) for (let n of Vo(r.scanned.program)) {
    if ("problem" in n) throw r.scanned.refuse(n.at, n.problem);
    let s = Wo({
      spelled: n.spelled,
      file: file_9,
      root: e.root
    });
    if ("problem" in s) throw r.scanned.refuse(n.at, s.problem);
    o.add(s.module);
  }
  return [...o].sort();
}
function Dr(e) {
  let o = e.stateReads.size > 0 || e.stateWrites.size > 0,
    t = r => [...r.entries()].sort(([n], [s]) => n < s ? -1 : n > s ? 1 : 0).map(([, n]) => n);
  return o ? {
    reads: t(e.stateReads),
    writes: t(e.stateWrites)
  } : void 0;
}
var regExp_2 = new RegExp(`^${Me}$`, "u");
var Lgt = e => e === "*" || e.endsWith(".*") || e.startsWith("!");
var to = e => e.startsWith("telemetry.");
function ro(e) {
  if (typeof e !== "string") return `${typeof e} is not an event name or a pattern (a string)`;
  let isNegated = e.startsWith("!"),
    name_2 = isNegated ? e.slice(1) : e;
  if (isNegated && name_2 === "*") return `"${e}" is not a pattern: it selects no event`;
  if (isNegated && name_2.startsWith("!")) return `"${e}" is not a pattern: "!" negates once`;
  let r = name_2 === "*",
    n = name_2.endsWith(".*"),
    s = (n ? name_2.slice(0, -2) : name_2).split(".");
  if (!(r || s.every(item => regExp_2.test(item)))) return `"${e}" is not an event name or a pattern ("*", "<prefix>.*", or "!" before either)`;
  return {
    isNegated: isNegated,
    selection: r ? {
      kind: "every"
    } : n ? {
      kind: "prefix",
      prefix: s.join(".")
    } : {
      kind: "name",
      name: name_2
    }
  };
}
function no(e) {
  let o = ro(e);
  if (typeof o === "string") throw new $e(o);
  return o;
}
function M4i(e) {
  let {
    selection: selection
  } = no(e);
  return selection.kind === "name" ? selection.name : void 0;
}
function YSo(e) {
  let o = ro(e);
  return typeof o === "string" ? o : void 0;
}
function dV(e, o) {
  let {
      isNegated: isNegated_2,
      selection: selection_2
    } = no(e),
    n;
  switch (selection_2.kind) {
    case "every":
      n = !0;
      break;
    case "prefix":
      n = o.startsWith(`${selection_2.prefix}.`);
      break;
    case "name":
      n = o === selection_2.name;
      break;
  }
  return isNegated_2 ? !n : n;
}
function Rxs(e, o) {
  return (e.toUserOn ?? []).some(item => dV(item, o));
}
var non = (e, o, t) => dV(e, o) && (t.isBuiltin || !to(o) || to(e));
var so = e => e.type === "SpreadElement" || e.computed || e.kind !== "init";
var ye = (e, o) => e.type === "Property" && (e.key.type === "Identifier" && e.key.name === o || e.key.type === "Literal" && e.key.value === o);
function Mr(e) {
  switch (e.type) {
    case "Literal":
      {
        let o = e.value;
        return typeof o === "string" ? [o] : void 0;
      }
    case "ArrayExpression":
      {
        let o = e.elements.map(item => {
          let n = item?.type === "Literal" ? item.value : void 0;
          return typeof n === "string" ? n : void 0;
        });
        return o.every(item => item !== void 0) ? o.filter(item => item !== void 0) : void 0;
      }
    default:
      return;
  }
}
function oon(e) {
  switch (e?.type) {
    case "ObjectExpression":
      {
        let o = e.properties.filter(item => ye(item, "command")),
          t = e.properties.some(so),
          [r] = o;
        return !t && o.length === 1 && r?.type === "Property" ? Mr(r.value) : void 0;
      }
    case "ArrayExpression":
      {
        let o = e.elements.map(item => item === null || item.type === "SpreadElement" ? void 0 : oon(item));
        return o.every(item => item !== void 0) ? o.flatMap(item => item ?? []) : void 0;
      }
    default:
      return;
  }
}
function _r(e) {
  let o = [...e.registrations.values()].filter(item => dV(item.event, "command.run")),
    t = o.map(item => oon(item.matcher));
  return o.length > 0 && t.every(item => item !== void 0) ? L(t.flatMap(item => item ?? [])).toSorted() : void 0;
}
var Dg = ["atom", "derive", "memberOf", "read", "update"];
var Lr = je("B:/~BUN/root/state-library.js-wy8y4843.txt");
var ewo = Lr;
function oe(e, o) {
  let {
    callee: callee_2
  } = o;
  if (callee_2.type !== "Identifier" || o.optional) return;
  let r = e.imports.get(callee_2.name),
    n = Dg.find(item => item === r?.imported);
  return r?.specifier === AHt && n !== void 0 && e.names.shadowOf(callee_2) === void 0 ? n : void 0;
}
var io = (e, o) => o === "env.get" ? e.envReads : e.envWrites;
function W({
  graph: graph,
  pluginName: pluginName_3
}, t) {
  let r = graph.files.get(t);
  if (r === void 0) throw new $e(`${pluginName_3}: ${t} was not linked`);
  return r;
}
function ao(e, o, t) {
  let {
      scan: scan,
      linked: linked
    } = e,
    s = linked.links.get(o);
  if (s === void 0) throw linked.scanned.refuse(void 0, `"${t}" is looked for through a re-export from "${o}", which is not a file of the module's own: nothing is followed through it`);
  return {
    scan: scan,
    linked: W(scan, s)
  };
}
function z(e) {
  let {
      scan: scan_2,
      linked: linked_2
    } = e,
    r = scan_2.ownExports.get(linked_2);
  if (r !== void 0) return r;
  let named = new Map(),
    listed = new Map(),
    namespaces = new Map(),
    stars = [],
    foreign = [];
  for (let statement of linked_2.scanned.program.body) {
    if (statement.type === "ExportDefaultDeclaration") named.set("default", statement);
    if (statement.type === "ExportNamedDeclaration") {
      for (let g of qe(statement.declaration)) named.set(g, statement);
      for (let g of statement.specifiers) named.set(zse(g.exported), statement), listed.set(zse(g.exported), g);
    }
    if (statement.type !== "ExportAllDeclaration") continue;
    let {
        exported: exported
      } = statement,
      y = linked_2.links.get(String(statement.source.value));
    if (exported !== null && exported !== void 0) {
      namespaces.set(zse(exported), statement);
      continue;
    }
    y === void 0 ? foreign.push(statement) : stars.push({
      from: linked_2,
      statement: statement,
      to: W(scan_2, y)
    });
  }
  let l = {
    named: named,
    listed: listed,
    namespaces: namespaces,
    stars: stars,
    foreign: foreign
  };
  return scan_2.ownExports.set(linked_2, l), l;
}
var zo = 500000;
function T(e, o) {
  let {
    scan: scan_3,
    linked: linked_3
  } = e;
  if (scan_3.exportSteps.taken += o, scan_3.exportSteps.taken > zo) throw linked_3.scanned.refuse(void 0, `the re-exports of "${scan_3.pluginName}" took ${scan_3.exportSteps.taken} steps to follow, more than the ${zo} a scan allows: write fewer \`export *\`, or import each name from the file that declares it`);
}
function fo(e, o, t) {
  let {
      names: names_4,
      refuse: refuse_2
    } = e.scanned,
    s = t === "default" ? "the default export" : t,
    p = zse(o.local),
    i = names_4.functions.get(p);
  if (i === void 0) throw refuse_2(o, `${s} is exported as "${p}", which is not a function declared at the top of this file`);
  if (names_4.assigned.has(p)) throw refuse_2(o, `${s} ("${p}") is assigned to elsewhere`);
  return i;
}
function mo(e, o, t) {
  let {
      names: names_5,
      refuse: refuse_3
    } = e.scanned,
    {
      functions: functions,
      assigned: assigned
    } = names_5,
    i = t === "default" ? "the default export" : t;
  function f(c, g) {
    if (assigned.has(c)) throw refuse_3(g, `${i} ("${c}") is assigned to elsewhere`);
  }
  if (o.type === "ExportDefaultDeclaration" && t === "default") {
    let {
      declaration: declaration_6
    } = o;
    if (declaration_6.type === "FunctionDeclaration") {
      if (declaration_6.id !== null) f(declaration_6.id.name, declaration_6);
      return declaration_6;
    }
    if (declaration_6.type === "FunctionExpression" || declaration_6.type === "ArrowFunctionExpression") return declaration_6;
    let k = declaration_6.type === "Identifier" ? functions.get(declaration_6.name) : void 0;
    if (k === void 0 || declaration_6.type !== "Identifier") throw refuse_3(declaration_6, `${i} is something other than a function declared at the top of this file`);
    return f(declaration_6.name, declaration_6), k;
  }
  if (o.type !== "ExportNamedDeclaration") return;
  let {
    declaration: declaration_7
  } = o;
  if (declaration_7?.type === "FunctionDeclaration" && declaration_7.id.name === t) return f(t, declaration_7), declaration_7;
  if (declaration_7?.type === "VariableDeclaration") {
    for (let c of declaration_7.declarations) if (c.id.type === "Identifier" && c.id.name === t) {
      let {
        init: init_3
      } = c;
      if (declaration_7.kind === "const" && (init_3?.type === "FunctionExpression" || init_3?.type === "ArrowFunctionExpression")) return init_3;
      throw refuse_3(c, `${i} is exported as something other than a const function`);
    }
  }
  if (qe(declaration_7).includes(t)) throw refuse_3(o, `${i} is exported as something other than a function declared at the top of this file`);
  let x = o.specifiers.find(item => zse(item.exported) === t);
  return x !== void 0 && o.source === null ? fo(e, x, t) : void 0;
}
function ge(e, o, t) {
  let {
      linked: linked_4
    } = e,
    n = z(e),
    s = n.named.get(o),
    p = n.namespaces.get(o);
  if (p !== void 0) throw linked_4.scanned.refuse(p, `${o === "default" ? "the default export" : o} is the namespace of "${String(p.source.value)}" (export * as), not a function`);
  let i = n.listed.get(o),
    f = s?.type === "ExportNamedDeclaration" ? s.source : null;
  if (i !== void 0 && f !== null && f !== void 0) return t(ao(e, String(f.value), o), zse(i.local));
  if (i !== void 0) return {
    fn: fo(linked_4, i, o),
    linked: linked_4
  };
  let x = s?.type === "ExportNamedDeclaration" ? s.declaration : void 0,
    y = x?.type === "VariableDeclaration";
  T(e, y ? x.declarations.length : 0);
  let fn_2 = s === void 0 ? void 0 : mo(linked_4, s, o);
  return fn_2 === void 0 ? void 0 : {
    fn: fn_2,
    linked: linked_4
  };
}
var lo = (e, o, t) => {
  e.set(o, (e.get(o) ?? new Set()).add(t));
};
function co(e) {
  let {
      scan: scan_4,
      linked: linked_5
    } = e,
    r = scan_4.exportTables.get(linked_5);
  if (r !== void 0) return r;
  let givers = new Map(),
    parents = new Map(),
    wild = [],
    i = new Set([linked_5]),
    f = [linked_5];
  for (let linked_6 = f.pop(); linked_6 !== void 0; linked_6 = f.pop()) {
    let x = z({
        scan: scan_4,
        linked: linked_6
      }),
      y = linked_6 === linked_5 ? [] : [...x.named.keys(), ...x.namespaces.keys()];
    if (T(e, x.stars.length + y.length + 1), x.foreign.length > 0) wild.push(linked_6);
    for (let c of y) if (c !== "default") givers.set(c, (givers.get(c) ?? new Set()).add(linked_6));
    for (let c of x.stars) if (lo(parents, c.to, c), !i.has(c.to)) i.add(c.to), f.push(c.to);
  }
  let l = {
    givers: givers,
    parents: parents,
    wild: wild
  };
  return scan_4.exportTables.set(linked_5, l), l;
}
function Ur(e, o) {
  let t = co(e),
    r = new Map(),
    n = new Set(),
    s = [...(t.givers.get(o) ?? []), ...t.wild];
  for (let p = s.pop(); p !== void 0; p = s.pop()) {
    let f = n.has(p) ? [] : [...(t.parents.get(p) ?? [])];
    n.add(p), T(e, f.length + 1);
    for (let l of f) lo(r, l.from, l), s.push(l.from);
  }
  return r;
}
function Gr(e, o, t) {
  let {
      scan: scan_5
    } = e,
    n = Ur(e, o),
    s = new Set();
  function p(linked_7) {
    let f = {
        scan: scan_5,
        linked: linked_7
      },
      l = z(f),
      u = s.has(linked_7);
    if (s.add(linked_7), T(e, 1), u) return;
    if (l.named.has(o)) return ge(f, o, t);
    let x = l.namespaces.get(o),
      c = [...[...(x === void 0 ? [] : [x]), ...l.foreign].map(h => ({
        statement: h,
        to: void 0
      })), ...(n.get(linked_7) ?? [])].toSorted((h, k) => h.statement.start - k.statement.start),
      g;
    T(e, c.length);
    for (let {
      statement: statement_2,
      to: to_2
    } of c) {
      let j = statement_2.exported !== null && statement_2.exported !== void 0 ? ge(f, o, t) : p(to_2 ?? ao(f, String(statement_2.source.value), o).linked);
      if (j !== void 0 && g !== void 0 && j.fn !== g.fn) throw linked_7.scanned.refuse(statement_2, `${o} is given by more than one \`export *\` of this file, each from a different declaration: the engine binds neither`);
      g = j ?? g;
    }
    return g;
  }
  return p(e.linked);
}
function Vr(e, o, t) {
  let r = z(e),
    n = r.namespaces.has(o);
  if (r.named.has(o) || o === "default" && n) return ge(e, o, t);
  if (o === "default") return;
  let p = co(e),
    i = p.givers.get(o) ?? new Set(),
    [linked_8] = i;
  if (!(!n && p.wild.length === 0 && i.size <= 1)) return Gr(e, o, t);
  if (linked_8 === void 0) return;
  return ge({
    scan: e.scan,
    linked: linked_8
  }, o, t);
}
function Xo(e, o) {
  let {
      scan: scan_6,
      linked: linked_9
    } = e,
    {
      exportsOpen: exportsOpen,
      exportsUnderWay: exportsUnderWay,
      exportsHeld: exportsHeld
    } = scan_6,
    i = scan_6.exportsRead.get(linked_9) ?? new Map(),
    f = exportsHeld.get(linked_9) ?? new Map(),
    l = exportsOpen.get(linked_9) ?? new Map(),
    u = l.get(o),
    x = f.get(o);
  if (i.has(o)) return i.get(o);
  if (x !== void 0 || u !== void 0) return exportsUnderWay.lowest = Math.min(exportsUnderWay.lowest, u ?? 0), x?.found;
  let {
    depth: depth,
    lowest: lowest
  } = exportsUnderWay;
  T(e, 1), exportsUnderWay.depth = depth + 1, exportsUnderWay.lowest = depth, exportsOpen.set(linked_9, l.set(o, depth)), exportsHeld.set(linked_9, f), scan_6.exportsRead.set(linked_9, i);
  try {
    let found = Vr(e, o, Xo);
    return exportsUnderWay.lowest === depth ? i.set(o, found) : f.set(o, {
      found: found
    }), found;
  } finally {
    if (exportsUnderWay.lowest = Math.min(lowest, exportsUnderWay.lowest), exportsUnderWay.depth = depth, l.delete(o), depth === 0) exportsOpen.clear(), exportsHeld.clear();
  }
}
function Wr(e, {
  names: names_6,
  refuse: refuse_4,
  what: what
}) {
  let n = names_6.functions.get(e.name);
  if (n === void 0) return;
  if (names_6.assigned.has(e.name)) throw refuse_4(e, `${what} "${e.name}" is assigned to elsewhere`);
  let s = names_6.shadowOf(e);
  if (s !== void 0) throw refuse_4(s, `${what} "${e.name}" is declared more than once in this file: this declaration hides the top-level function where it is used`);
  return n;
}
function he({
  scan: scan_7,
  linked: linked_10
}, t, what_2) {
  let {
      scanned: scanned_2
    } = linked_10,
    fn_3 = Wr(t, {
      names: scanned_2.names,
      refuse: scanned_2.refuse,
      what: what_2
    });
  if (fn_3 !== void 0) return {
    fn: fn_3,
    linked: linked_10
  };
  let p = scanned_2.imports.get(t.name);
  if (p === void 0) throw scanned_2.refuse(t, `${what_2} "${t.name}" is not a function declared at the top of this file (a function declaration, or a const bound to a function), nor imported from one of the module's own files`);
  if (p.imported === void 0) throw scanned_2.refuse(t, `${what_2} "${t.name}" is a namespace import, not a function`);
  if (scanned_2.names.assigned.has(t.name)) throw scanned_2.refuse(t, `${what_2} "${t.name}" is assigned to elsewhere`);
  let i = scanned_2.names.shadowOf(t);
  if (i !== void 0) throw scanned_2.refuse(i, `${what_2} "${t.name}" is declared again in this file, shadowing the import`);
  let f = linked_10.links.get(p.specifier);
  if (f === void 0) throw scanned_2.refuse(t, `${what_2} "${t.name}" is imported from "${p.specifier}", which is not a file of the module's own`);
  let l = Xo({
    scan: scan_7,
    linked: W(scan_7, f)
  }, p.imported);
  if (l === void 0) throw scanned_2.refuse(t, `${what_2} "${t.name}" is imported from "${p.specifier}", which exports no function of that name: neither its own nor one it re-exports from a file of the module's own`);
  return l;
}
function zr(e) {
  let [o] = e.arguments,
    t = o?.type === "ObjectExpression" ? o.properties : [],
    r = t.some(so),
    [n, s] = t.filter(item => ye(item, "name")),
    i = !r && s === void 0 && n?.type === "Property" ? n.value : void 0,
    f = i?.type === "Literal" ? i.value : void 0;
  return typeof f === "string" ? f : void 0;
}
function uo(e, o) {
  let t = zr(o);
  if (t !== void 0) e.registeredCommands.add(t);
}
function Ko(e, {
  call: call,
  spelling: spelling,
  named: named_2,
  consts: consts
}, scanned_3) {
  let p = `${named_2.plugin}\x00${named_2.key}`;
  (spelling === "state.get" ? e.stateReads : e.stateWrites).set(p, named_2), e.stateCalls.add(call);
  for (let followed of consts) e.stateConsts.add({
    followed: followed,
    spelling: spelling,
    scanned: scanned_3
  });
}
var Xr = "command.register";
var Kr = {
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
function qo(e, o) {
  if (!(e.type === "CallExpression" || e.type === "NewExpression")) return Kr[e.type] ?? `used in a ${e.type}`;
  return e.callee === o ? "called" : "passed as an argument";
}
var Re = "plugin";
var qr = ["env.get", "env.set"];
var U4i = e => qr.includes(e);
var Yr = ["state.get", "state.set"];
var aPr = e => Yr.includes(e);
var Yo = e => /^[\w$@-]+$/.test(e) ? e : JSON.stringify(e);
var PHt = e => `${Yo(e.plugin)}.${Yo(e.key)}`;
var son = e => e(() => !1, (o, t) => t(), o => o());
var ion = e => e.endsWith("@builtin") && e.indexOf("@") === e.length - 8 && e.length > 8;
var B4i = "anthropic";
var ke = ["anthropic", "collector"];
var Wh = e => ke.includes(e);
var N2e = "core";
var Cua = e => e.withheldBy?.at(-1);
var Dxs = (e, o) => `$.${e}: removed by plugin \`${o}\``;
var two = e => [e, ...(e.surfaceModules ?? [])].flatMap(item => [{
  file: item.modulePath,
  source: item.source
}, ...item.linked]);
function Qr(e, o, t) {
  let [r] = e.arguments,
    s = r !== void 0 && r.type !== "SpreadElement" ? V(r) : void 0;
  if (s === void 0) throw t(r ?? e, `$.${o} takes a literal name as its first argument, so the variables a module reads and writes can be listed (got ${ee(r)})`);
  return s;
}
var Jo = (e, o) => e?.type === "MemberExpression" && e.object === o && !e.computed && !e.optional;
function xo(e, {
  consts: consts_2,
  names: names_7,
  climbs: climbs_4,
  program: program_2,
  refuse: refuse_5
}) {
  let p = names_7.shadowOf(e);
  if (p !== names_7.writtenShadowOf(e)) throw refuse_5(e, `"${e.name}" is read among the parameters of a function whose body declares that name again: the engine may bind such a read apart from the text, so the value it names cannot be listed. Rename one of the two`);
  let scope = p === void 0 ? program_2 : Ne(p, climbs_4);
  if (typeof scope === "string") return;
  let f = consts_2.inits(scope).get(e.name),
    l = f?.isVar ? consts_2.rebound(f.id) : void 0;
  if (l !== void 0) throw refuse_5(l.at, `the var ${e.name}, read for a $.state reference, ` + Mx[l.cause]);
  return f === void 0 ? void 0 : {
    init: f.init,
    scope: scope
  };
}
var Zr = ({
  placed: placed_2,
  starts: starts
}, t) => placed_2.slice(Eo(starts, t.start), Eo(starts, t.end)).toSorted((r, n) => r.at - n.at);
function en({
  read: read_2,
  binding: binding
}, {
  consts: consts_3,
  names: names_8,
  parentOf: parentOf_4,
  refuse: refuse_6
}, p) {
  let {
      scope: scope_2
    } = binding,
    {
      name: name_3
    } = read_2,
    l = names_8.writtenShadowOf(read_2),
    u = scope_2.type === "Program" ? consts_3.exporting.get(name_3) : void 0;
  if (u !== void 0) return u;
  let x = (consts_3.counted(name_3).owned.get(l) ?? []).filter(item => item.use.start >= scope_2.start && item.use.start < scope_2.end);
  if (!x.some(item => item.use === read_2)) throw refuse_6(read_2, `the scan lost track of this read of "${name_3}" and cannot show that every use of the const is a plain read. This is a fault of the scan, not of the module, which is refused rather than passed`);
  let c = x.find(item => !oo(item.use, parentOf_4, p)),
    g = Zr(consts_3.apart(name_3)(p), scope_2).at(0);
  return g !== void 0 && (c === void 0 || g.at < c.at) ? g.use : c?.use;
}
function yo(read_3, o, t = new Set()) {
  if (read_3.type === "Identifier") {
    let binding_2 = t.has(read_3.name) ? void 0 : xo(read_3, o),
      s = binding_2 === void 0 ? void 0 : yo(binding_2.init, o, new Set([...t, read_3.name]));
    return binding_2 !== void 0 && s !== void 0 ? {
      ...s,
      consts: [{
        read: read_3,
        binding: binding_2
      }, ...s.consts]
    } : void 0;
  }
  if (read_3.type !== "ObjectExpression") return;
  let r = {
    consts: []
  };
  for (let n of read_3.properties) {
    if (n.type === "SpreadElement") {
      let p = yo(n.argument, o, t);
      if (p === void 0) return;
      r = {
        ...r,
        ...p,
        consts: [...r.consts, ...p.consts]
      };
      continue;
    }
    let s = P(n);
    if (s === void 0 || n.kind !== "init") return;
    if (s === "plugin" || s === "key") {
      let p = V(n.value);
      if (p === void 0) return;
      r = {
        ...r,
        [s]: p
      };
    }
  }
  return r;
}
function te(e, o, t = new Set()) {
  if (e.type === "Identifier" && t.has(e.name)) return;
  let n = e.type === "Identifier" ? xo(e, o.scanned) : void 0;
  if (n !== void 0 && n.init.type !== "ObjectExpression" && e.type === "Identifier") return te(n.init, o, new Set([...t, e.name]));
  if (e.type !== "CallExpression") {
    let x = yo(e, o.scanned);
    return x === void 0 ? void 0 : [x];
  }
  let p = o.libraryHelper(e),
    [i] = e.arguments;
  if ((p === "atom" || p === "memberOf") && i !== void 0 && i.type !== "SpreadElement") return te(i, o, t);
  if (p !== "derive" || i?.type !== "ArrayExpression") return;
  let l = i.elements.map(item => item !== null && item.type !== "SpreadElement" ? te(item, o, t) : void 0);
  return l.every(item => item !== void 0) ? l.flat() : void 0;
}
function on(call_2, spelling_2, {
  refuse: refuse_7,
  scanned: scanned_4,
  libraryHelper: libraryHelper
}) {
  let [s] = call_2.arguments,
    p = s !== void 0 && s.type !== "SpreadElement",
    [i, ...f] = (p ? te(s, {
      scanned: scanned_4,
      libraryHelper: libraryHelper
    }) : void 0) ?? [],
    {
      plugin: plugin_4,
      key: key_4,
      consts: consts_4 = []
    } = i ?? {};
  if (!(f.length === 0 && plugin_4 !== void 0 && key_4 !== void 0)) throw refuse_7(s ?? call_2, `$.${spelling_2} takes a reference whose plugin and key are string literals ({ plugin: "p", key: "k" }, written there or in a const of this file; only id may be computed), so the values a module reads and writes can be listed (got ${ee(s)})`);
  return {
    call: call_2,
    spelling: spelling_2,
    named: {
      plugin: plugin_4,
      key: key_4
    },
    consts: consts_4
  };
}
function Qo(e, o, {
  refuse: refuse_8,
  parentOf: parentOf_5,
  scanned: scanned_5,
  record: record,
  recordEnv: recordEnv,
  recordCommand: recordCommand,
  recordState: recordState,
  libraryHelper: libraryHelper_2,
  bind: bind,
  follow: follow
}) {
  let y = e,
    c = parentOf_5(y);
  while (c?.type === "AwaitExpression") y = c, c = parentOf_5(y);
  if (c === void 0) throw refuse_8(e, "$ stands alone");
  if (c.type === "MemberExpression" && c.object === y) {
    if (c.computed || c.optional) throw refuse_8(c, "a computed or optional member access on $");
    let property_2 = c.property;
    if (property_2.type !== "Identifier") throw refuse_8(c, "a member access on $ that is not a name");
    if (property_2.name === Re) {
      let re = parentOf_5(c);
      if (Jo(re, c) && re.property.type === "Identifier") return;
      throw refuse_8(c, `$.${Re} is used other than as $.${Re}.name or $.${Re}.root`);
    }
    let k = parentOf_5(c);
    if (!Jo(k, c) || k.property.type !== "Identifier") throw refuse_8(c, `$.${property_2.name} is used as a value (a noun of $ bound, passed or read)`);
    let j = parentOf_5(k);
    if (j?.type !== "CallExpression" || j.callee !== k || j.optional) throw refuse_8(k, `$.${property_2.name}.${k.property.name} is used as a value (an event of $ bound, passed or read) instead of called`);
    let b = `${property_2.name}.${k.property.name}`;
    if (record(b), U4i(b)) recordEnv(b, Qr(j, b, refuse_8));
    if (b === Xr) recordCommand(j);
    if (aPr(b)) recordState(on(j, b, {
      refuse: refuse_8,
      scanned: scanned_5,
      libraryHelper: libraryHelper_2
    }));
    return;
  }
  if (c.type === "CallExpression" && e.type === "Identifier") {
    let h = o === "parameter" && y === e && c.callee !== y && !c.optional && c.callee.type === "Identifier",
      k = h ? libraryHelper_2(c) : void 0;
    if ((k === "read" || k === "update") && c.arguments[0] === e) return;
    if (k !== void 0) throw refuse_8(e, `$ is passed to the state library's ${k} other than as the first argument of read($, source) or update($, target, fn)`);
    if (h) {
      follow(c, e);
      return;
    }
  }
  if (o === "parameter") throw refuse_8(y, `$ itself is ${qo(c, y)} (bound, passed, spread, returned or read)`);
  if (c.type === "SpreadElement") {
    if (parentOf_5(c)?.type === "ObjectExpression") return;
    throw refuse_8(c, "the value of next(e) at engine.create is spread other than into an object literal");
  }
  if (c.type === "ReturnStatement" || c.type === "ArrowFunctionExpression" && c.body === y) return;
  if (c.type === "VariableDeclarator" && c.init === y) {
    let h = parentOf_5(c);
    if (h?.type !== "VariableDeclaration" || h.kind !== "const") throw refuse_8(c, "the value of next(e) at engine.create is bound with let or var (const only)");
    let {
      id: id_5
    } = c;
    if (id_5.type === "Identifier") {
      bind.dollar(id_5);
      return;
    }
    if (id_5.type === "ObjectPattern") {
      for (let j of id_5.properties) if (j.type === "RestElement") {
        if (j.argument.type !== "Identifier") throw refuse_8(j, "a rest of next(e) at engine.create that is not a plain name");
        bind.dollar(j.argument);
      } else if (j.value.type === "Identifier" && !j.computed) bind.unread(j.value);else throw refuse_8(j, "a destructuring of next(e) at engine.create with a nested pattern, a default or a computed key");
      return;
    }
    throw refuse_8(id_5, "the value of next(e) at engine.create is destructured into an array");
  }
  throw refuse_8(y, `the value of next(e) at engine.create is ${qo(c, y)}`);
}
var tn = "engine.create";
function go(e, o, t) {
  let {
    refuse: refuse_9
  } = t;
  for (let {
    name: name_4,
    declaration: declaration_8,
    origin: origin
  } of o) {
    for (let i of Do(e, name_4)) if (i !== declaration_8) throw refuse_9(i, `"${name_4}" (which holds $) is declared again (shadowed)`);
    for (let i of xHt(e, name_4)) Qo(i, origin, t);
  }
}
function rn(e, o, t) {
  let {
    refuse: refuse_10
  } = t;
  if (e.type !== "ArrowFunctionExpression") for (let i of xHt(e, "arguments", "own")) throw refuse_10(i, '"arguments" is read inside a function handed $ (it holds $)');
  let n = e.params.at(-1);
  if (n?.type === "RestElement" && o >= e.params.length - 1) throw refuse_10(n, "$ is passed into a rest parameter");
  let declaration_9 = e.params[o];
  if (declaration_9 === void 0) return;
  if (declaration_9.type !== "Identifier") throw refuse_10(declaration_9, "the parameter that receives $ is not a plain name (a pattern or a default)");
  go(e, [{
    name: declaration_9.name,
    declaration: declaration_9,
    origin: "parameter"
  }], {
    ...t,
    bind: {
      dollar: i => {
        throw refuse_10(i, "next(e) is bound outside an engine.create hook");
      },
      unread: i => {
        throw refuse_10(i, "next(e) is bound outside an engine.create hook");
      }
    }
  });
}
var X = e => e.arguments.find(item => item.type === "SpreadElement");
function Zo(e, o = e.linked) {
  let {
      scan: scan_8,
      linked: linked_11
    } = e,
    {
      scanned: scanned_6
    } = linked_11,
    {
      refuse: refuse_11
    } = scanned_6,
    p = (i, f) => {
      let {
        callee: callee_3
      } = i;
      if (callee_3.type !== "Identifier") throw refuse_11(callee_3, "$ is passed to something other than a named function");
      let u = X(i);
      if (u !== void 0) throw refuse_11(u, "$ is passed in a call with a spread argument");
      if (!(scanned_6.names.functions.has(callee_3.name) || scanned_6.imports.has(callee_3.name))) throw refuse_11(callee_3, `$ is passed to "${callee_3.name}", which is not a function declared at the top of this file (a function declaration, or a const bound to one), nor one imported from a file of the module's own; $ is followed nowhere else`);
      if (scanned_6.imports.has(callee_3.name) && scanned_6.names.shadowOf(callee_3) !== void 0) throw refuse_11(callee_3, `$ is passed to "${callee_3.name}", a name declared again over this call: the engine may not bind it to the import of that name. Rename one of the two`);
      let {
          fn: fn_4,
          linked: linked_12
        } = he(e, callee_3, "the function handed $"),
        scanned_7 = linked_12.scanned;
      if (fn_4.type !== "FunctionDeclaration" && (linked_12 !== o || linked_11 !== o)) throw refuse_11(callee_3, `$ is passed to "${callee_3.name}", a name bound to a function expression, outside the hook's own file: past an import $ is followed only into a function declaration (function ${callee_3.name}($) { ... }), which a bundle of the module keeps as written`);
      let E = i.arguments.indexOf(f),
        j = scan_8.helpers.get(fn_4) ?? new Set();
      if (j.has(E)) return;
      j.add(E), scan_8.helpers.set(fn_4, j), rn(fn_4, E, {
        refuse: scanned_7.refuse,
        parentOf: scanned_7.parentOf,
        scanned: scanned_7,
        record: w => {
          scan_8.calls.add(w), scan_8.via.set(w, (scan_8.via.get(w) ?? new Set()).add(callee_3.name));
        },
        recordTo: w => {
          scan_8.nextTo.add(w);
        },
        recordEnv: (w, b) => {
          io(scan_8, w).add(b);
        },
        recordCommand: w => {
          uo(scan_8, w);
        },
        recordState: w => {
          Ko(scan_8, w, scanned_7);
        },
        libraryHelper: w => oe(scanned_7, w),
        follow: linked_12 === linked_11 ? p : Zo({
          scan: scan_8,
          linked: linked_12
        }, o)
      });
    };
  return p;
}
function mj(e) {
  let o = new Set(),
    t = {
      state: e.stateCalls,
      library: e.libraryCalls
    };
  for (let {
    followed: followed_2,
    spelling: spelling_3,
    scanned: scanned_8
  } of e.stateConsts) {
    let {
      init: init_4
    } = followed_2.binding;
    if (o.has(init_4)) continue;
    o.add(init_4);
    let i = en(followed_2, scanned_8, t);
    if (i !== void 0) throw scanned_8.refuse(i, `the const ${followed_2.read.name}, read as the reference of a $.${spelling_3} call, is also written through, handed on or exported here, and const does not freeze: what it holds at the call could not be listed. Use it only as the reference of $.state calls, as a source of the state library's functions imported from "claude-code", and in a spread into an object literal ({ ...${followed_2.read.name}, id }), or write the reference at the call`);
  }
}
function lj(e) {
  for (let {
    scanned: scanned_9
  } of e.graph.files.values()) KF(scanned_9.program, ({
    node: node_13
  }) => {
    let r = node_13.type === "CallExpression",
      n = r ? oe(scanned_9, node_13) : void 0;
    if (n === void 0 || !r) return;
    e.libraryCalls.set(node_13, n);
    let s = n === "read" || n === "update",
      p = s ? node_13.arguments[1] : node_13,
      f = p !== void 0 && p.type !== "SpreadElement" ? te(p, {
        scanned: scanned_9,
        libraryHelper: x => oe(scanned_9, x)
      }) : void 0,
      l = f?.every(({
        plugin: plugin_5,
        key: key_5
      }) => plugin_5 !== void 0 && key_5 !== void 0);
    if (f === void 0 || l !== !0) throw scanned_9.refuse(p ?? node_13, `the state library's ${n} takes a source the scan can read: a reference whose plugin and key are string literals, or what atom, memberOf or derive (imported from "claude-code") made of one, written there or in a const of this file, so the values a module reads and writes can be listed`);
    let spelling_4 = n === "update" ? "state.set" : "state.get";
    for (let {
      plugin: plugin_6 = "",
      key: key_6 = "",
      consts: consts_5
    } of f) {
      let g = `${plugin_6}\x00${key_6}`;
      if (e.stateReads.set(g, {
        plugin: plugin_6,
        key: key_6
      }), n === "update") e.stateWrites.set(g, {
        plugin: plugin_6,
        key: key_6
      });
      for (let followed_3 of consts_5) e.stateConsts.add({
        followed: followed_3,
        spelling: spelling_4,
        scanned: scanned_9
      });
    }
    if (s) e.calls.add("state.get");
    if (n === "update") e.calls.add("state.set");
  });
}
function Fe({
  call: call_3,
  scanned: scanned_10,
  what: what_3,
  holder: holder
}) {
  let {
      endOf: endOf,
      functionOf: functionOf
    } = scanned_10.climbs,
    p = endOf(call_3);
  if (p === void 0) return;
  let {
    value: value_6,
    parent: parent_7
  } = p;
  if (!(parent_7.type === "ExpressionStatement" || (parent_7.type === "ReturnStatement" || parent_7.type === "ArrowFunctionExpression" && parent_7.body === value_6) && functionOf(value_6) === holder)) throw scanned_10.refuse(value_6, `the value of ${what_3} is kept (assigned, passed, read, or returned from a nested function); it takes .catch(handler) where it is called and nothing else`);
}
function sn(e) {
  return {
    argumentsRead: e.type === "ArrowFunctionExpression" ? [] : xHt(e, "arguments", "own"),
    names: Mo(e)
  };
}
function pn(e, o) {
  let t = e.holderNames.get(o);
  if (t !== void 0) return t;
  let r = sn(o);
  return e.holderNames.set(o, r), r;
}
function ho(e, {
  fn: fn_5,
  what: what_4,
  event: event,
  engineCreate: engineCreate
}) {
  let {
      scan: scan_9,
      linked: linked_13
    } = e,
    i = fn_5.type === "FunctionExpression" || fn_5.type === "ArrowFunctionExpression",
    f = fn_5.type === "Identifier",
    l = i ? {
      fn: fn_5,
      linked: linked_13
    } : f ? he(e, fn_5, what_4) : void 0;
  if (l === void 0) throw linked_13.scanned.refuse(fn_5, `${what_4} is not a function literal or the name of one`);
  let u = l.fn.async === !0 && l.fn.generator === !0,
    x = CUn(event);
  if (x && !u) throw linked_13.scanned.refuse(fn_5, `${what_4} on "${event}" is not an async generator: ${event} streams, so it takes async function* ($, e, next) { ... }, which yields the chunks and returns the result`);
  if (!x && u) throw linked_13.scanned.refuse(fn_5, `${what_4} on "${event}" is an async generator: only a streaming event named as itself (${qSo.join(", ")}) takes one; this pattern takes ($, e, next) => result`);
  scan_9.registered.set(l.fn, {
    linked: l.linked,
    patterns: new Set(scan_9.registered.get(l.fn)?.patterns).add(event),
    engineCreate: scan_9.registered.get(l.fn)?.engineCreate === !0 || engineCreate
  });
}
function an(e, {
  call: call_4,
  event: event_2,
  onName: onName,
  holder: holder_2
}) {
  let {
      scanned: scanned_11
    } = e.linked,
    {
      parentOf: parentOf_6,
      refuse: refuse_12
    } = scanned_11,
    f = parentOf_6(call_4),
    what_5 = `${onName}("${event_2}")`;
  if (f?.type !== "MemberExpression" || f.object !== call_4) {
    Fe({
      call: call_4,
      scanned: scanned_11,
      what: what_5,
      holder: holder_2
    });
    return;
  }
  if (!(!f.computed && !f.optional && f.property.type === "Identifier" && f.property.name === "catch")) throw refuse_12(f, `${what_5} is read for something other than .catch; a registration has .catch(handler) and nothing else`);
  let call_5 = parentOf_6(f);
  if (!(call_5?.type === "CallExpression" && call_5.callee === f && !call_5.optional)) throw refuse_12(f, `${what_5}.catch is read without being called`);
  if (event_2 === tn) throw refuse_12(call_5, `${what_5}.catch(): an engine.create hook has no budget and its failure fails the load; .catch does not apply`);
  let c = X(call_5);
  if (c !== void 0) throw refuse_12(c, `${what_5}.catch() is called with a spread argument`);
  let [fn_6, ...h] = call_5.arguments;
  if (fn_6 === void 0 || h.length > 0) throw refuse_12(call_5, `${what_5}.catch() takes (handler); got ${call_5.arguments.length} argument(s)`);
  ho(e, {
    fn: fn_6,
    what: "the .catch handler",
    event: event_2,
    engineCreate: !1
  });
  let k = parentOf_6(call_5);
  if (k?.type === "MemberExpression" && k.object === call_5) throw refuse_12(k, `${what_5}.catch(...) is followed by another member; a registration takes one .catch`);
  Fe({
    call: call_5,
    scanned: scanned_11,
    what: `${what_5}.catch()`,
    holder: holder_2
  });
}
function fn(e, o, t) {
  let r = X(e);
  if (r !== void 0) throw o(r, `${t}() is called with a spread argument`);
  let [n, ...s] = e.arguments;
  if (n === void 0 || s.length === 0 || s.length > 2) throw o(e, `${t}() takes (event, hook) or (event, matcher, hook); got ${e.arguments.length} argument(s)`);
  let event_3 = V(n);
  if (event_3 === void 0) throw o(n, `the event name passed to ${t}() is not a string literal`);
  let f = YSo(event_3);
  if (f !== void 0) throw o(n, f);
  let l = Lgt(event_3) || L2e(event_3) || ton(event_3),
    u = M4i(event_3),
    x = u !== void 0 && !L2e(u) && !ton(u);
  if (!l || x) throw o(n, `"${u ?? event_3}" is not an event`);
  let hook = s.at(-1);
  if (hook === void 0) throw o(e, `${t}() takes (event, hook); got no hook`);
  return {
    event: event_3,
    hook: hook,
    matcher: s.length === 2 ? s[0] : void 0
  };
}
function mn(e, o) {
  let {
      call: call_6,
      onName: onName_2,
      holder: holder_3,
      position: position
    } = o,
    {
      scan: scan_10,
      linked: linked_14
    } = e,
    {
      scanned: scanned_12
    } = linked_14,
    {
      event: event_4,
      hook: u,
      matcher: matcher
    } = fn(call_6, scanned_12.refuse, onName_2),
    y = matcher !== void 0,
    c = Lgt(event_4),
    g = scan_10.unmatched.get(event_4);
  if (g !== void 0 && (!y || c)) throw scanned_12.refuse(call_6, `${onName_2}("${event_4}") is registered twice${y ? "" : " without a matcher"}; the first is at ${g}`);
  if (!y || c) scan_10.unmatched.set(event_4, `${scanned_12.file}:${call_6.loc?.start.line ?? "unknown line"}`);
  scan_10.hooks.add(event_4), scan_10.registrations.set(call_6, {
    event: event_4,
    matcher: matcher,
    linked: linked_14,
    holder: holder_3,
    position: position
  }), ho(e, {
    fn: u,
    what: "the hook",
    event: event_4,
    engineCreate: event_4 === tn
  }), an(e, {
    ...o,
    event: event_4
  });
}
function et(e, o, t) {
  let {
      scan: scan_11,
      linked: linked_15
    } = e,
    s = scan_11.holders.get(o) ?? new Set();
  if (s.has(t)) return;
  s.add(t), scan_11.holders.set(o, s), scan_11.holderFiles.set(o, linked_15);
  let {
      scanned: scanned_13
    } = linked_15,
    {
      refuse: refuse_13,
      parentOf: parentOf_7
    } = scanned_13,
    l = pn(scan_11, o);
  for (let y of l.argumentsRead) throw refuse_13(y, '"arguments" is read inside a function that holds on');
  let u = o.params[t];
  if (u === void 0) {
    let y = o.params.at(-1);
    if (y?.type === "RestElement") throw refuse_13(y, "on is passed into a rest parameter");
    return;
  }
  if (u.type !== "Identifier") throw refuse_13(u, "the parameter that receives on is not a plain name");
  let onName_3 = u.name;
  for (let y of l.names.declared.get(onName_3) ?? []) if (y !== u) throw refuse_13(y, `"${onName_3}" is declared again (shadowed)`);
  for (let y of l.names.read.get(onName_3) ?? []) {
    let call_7 = parentOf_7(y);
    if (call_7?.type !== "CallExpression" || call_7.optional) throw refuse_13(y, `"${onName_3}" is used other than as a call or an argument to a function of the module's own (bound, spread or read)`);
    if (call_7.callee === y) {
      mn(e, {
        call: call_7,
        onName: onName_3,
        holder: o,
        position: t
      });
      continue;
    }
    if (call_7.callee.type !== "Identifier") throw refuse_13(call_7.callee, `"${onName_3}" is passed to something other than a function named at the top of this file or imported from one of the module's own files`);
    let g = X(call_7);
    if (g !== void 0) throw refuse_13(g, `"${onName_3}" is passed in a call with a spread argument`);
    Fe({
      call: call_7,
      scanned: scanned_13,
      what: `${call_7.callee.name}(${onName_3})`,
      holder: o
    });
    let h = he(e, call_7.callee, "the callee"),
      position_2 = call_7.arguments.indexOf(y);
    scan_11.holderCalls.add({
      call: call_7,
      callee: h.fn,
      position: position_2,
      caller: o,
      callerPosition: t
    }), et({
      scan: scan_11,
      linked: h.linked
    }, h.fn, position_2);
  }
}
var ln = (graph_2, pluginName_4, register) => ({
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
  toUserOn: new Set(),
  envReads: new Set(),
  envWrites: new Set(),
  registeredCommands: new Set(),
  stateReads: new Map(),
  stateWrites: new Map(),
  stateCalls: new Set(),
  libraryCalls: new Map(),
  stateConsts: new Set(),
  direct: new Set(),
  via: new Map(),
  helpers: new Map(),
  exportsRead: new Map(),
  exportsOpen: new Map(),
  exportsUnderWay: {
    depth: 0,
    lowest: 0
  },
  exportsHeld: new Map(),
  exportSteps: {
    taken: 0
  },
  ownExports: new Map(),
  exportTables: new Map(),
  registered: new Map(),
  holders: new Map(),
  holderNames: new Map()
});
function dn(e, o) {
  for (let t of e.scanned.program.body) {
    let r = mo(e, t, o);
    if (r !== void 0) return r;
  }
  return;
}
function cn(e, o, t = "") {
  let r = dn(e, o);
  if (r !== void 0) return r;
  let {
      program: program_3,
      refuse: refuse_14
    } = e.scanned,
    p = o === "default" ? "the default export" : o,
    i = sy(e, o);
  if (i !== void 0) throw refuse_14(i.specifier, `${p} is re-exported from another file`);
  let f = program_3.body.find(item => item.type === "ExportAllDeclaration");
  if (f !== void 0) throw refuse_14(f, `${p} is not exported here by name; what \`export *\` re-exports from another file is not followed`);
  throw refuse_14(void 0, `no export named ${p}${t}`);
}
var un = e => cn(e, "register", " (export function register(on, options) {...})");
function xn(graph_3, pluginName_5) {
  let linked_16 = W({
      graph: graph_3,
      pluginName: pluginName_5
    }, graph_3.entry),
    r = un(linked_16),
    scan_12 = ln(graph_3, pluginName_5, r);
  return et({
    scan: scan_12,
    linked: linked_16
  }, r, 0), scan_12;
}
function ot(e, {
  refuse: refuse_15
}) {
  if (e.type !== "ObjectPattern") throw refuse_15(e, "next is destructured other than into an object pattern of plain keys");
  for (let t of e.properties) {
    if (t.type === "RestElement") throw refuse_15(t, "a rest of next (it holds next.to)");
    if (!(!t.computed && t.key.type === "Identifier")) throw refuse_15(t, "a computed or quoted key destructured from next");
    if (t.key.type === "Identifier" && t.key.name === "to") throw refuse_15(t, `next.to is destructured from next; it is reached only as next.to(e, "<tier>") on the hook's own next`);
  }
}
function yn(e, {
  refuse: refuse_16,
  parentOf: parentOf_8,
  recordTo: recordTo
}) {
  if (e.optional) throw refuse_16(e, "next.to is reached through optional chaining");
  let n = parentOf_8(e);
  if (!(n?.type === "CallExpression" && n.callee === e && !n.optional)) throw refuse_16(e, 'next.to is used as a value (bound, passed or read) instead of called as next.to(e, "<tier>")');
  let [p, i, f] = n.arguments;
  if (p === void 0 || p.type === "SpreadElement") throw refuse_16(n, 'next.to is called without (e, "<tier>") or with a spread');
  if (f !== void 0) throw refuse_16(f, 'next.to is called with more than (e, "<tier>")');
  if (!(i?.type === "Literal" && typeof i.value === "string")) throw refuse_16(i ?? n, "next.to names its tier other than as a string literal (a variable, a template or an expression)");
  let u = i.value;
  if (!oPr(u)) throw refuse_16(i, `next.to names "${String(u)}", which is not a tier a dispatch continues at (user, append, builtin, core)`);
  return recordTo(u), n;
}
function gn({
  fn: fn_7,
  next: next,
  engineCreate: engineCreate_2
}, r) {
  let {
    refuse: refuse_17,
    parentOf: parentOf_9
  } = r;
  if (next.type !== "Identifier") {
    if (engineCreate_2) throw refuse_17(next, "the third parameter of an engine.create hook (next) is not a plain name");
    ot(next, r);
    return;
  }
  for (let p of Do(fn_7, next.name)) if (p !== next) throw refuse_17(p, `"${next.name}" (the continuation) is declared again (shadowed); rename the inner binding`);
  for (let p of xHt(fn_7, next.name)) {
    let i = parentOf_9(p);
    if (i?.type === "CallExpression" && i.callee === p && !i.optional) {
      if (engineCreate_2) Qo(i, "next", r);
      continue;
    }
    if (i?.type === "MemberExpression" && i.object === p) {
      if (i.computed) {
        if (i.property.type === "Literal" && typeof i.property.value === "string" && i.property.value !== "to") continue;
        throw refuse_17(i, `a computed member access on "${next.name}" (it may reach next.to)`);
      }
      if (i.property.type === "Identifier" && i.property.name === "to") {
        let u = yn(i, r);
        if (engineCreate_2) Qo(u, "next", r);
      }
      continue;
    }
    if (engineCreate_2) throw refuse_17(p, `"${next.name}" is passed on or bound inside an engine.create hook (its value is $)`);
    if (i?.type === "VariableDeclarator" && i.init === p) {
      if (i.id.type === "Identifier") throw refuse_17(i, `"${next.name}" (the hook's next) is bound to another name; next.to is reached only on the hook's own next`);
      ot(i.id, r);
      continue;
    }
    if (i?.type === "AssignmentExpression" && i.right === p) throw refuse_17(i, `"${next.name}" (the hook's next) is assigned to another name; next.to is reached only on the hook's own next`);
  }
}
function hn(fn_8, engineCreate_3, t) {
  let {
      refuse: refuse_18
    } = t,
    [declaration_10, s, next_2] = fn_8.params;
  if (fn_8.type !== "ArrowFunctionExpression") for (let u of xHt(fn_8, "arguments", "own")) throw refuse_18(u, '"arguments" is read inside a hook (it holds $)');
  let i = [];
  if (declaration_10 !== void 0) {
    if (declaration_10.type !== "Identifier") throw refuse_18(declaration_10, "the first parameter of a hook ($) is not a plain name (a pattern, a rest or a default)");
    i.push({
      name: declaration_10.name,
      declaration: declaration_10,
      origin: "parameter"
    });
  }
  for (let u of [declaration_10, s, next_2]) if (u?.type === "RestElement") throw refuse_18(u, "a hook takes $, e or next into a rest parameter (it would hold next)");
  for (let u of fn_8.params) KF(u, ({
    node: node_14
  }) => {
    if (node_14.type === "AssignmentPattern") throw refuse_18(node_14, "a parameter of a hook has a default value");
  });
  let l = {
    ...t,
    bind: {
      dollar: declaration_11 => {
        i.push({
          name: declaration_11.name,
          declaration: declaration_11,
          origin: "next"
        });
      },
      unread: u => {
        for (let x of xHt(fn_8, u.name)) throw refuse_18(x, `"${u.name}", destructured from $ at engine.create, is read (a noun bound to a name); leave it unread or call it as $.noun.event(...)`);
      }
    }
  };
  if (next_2 !== void 0) gn({
    fn: fn_8,
    next: next_2,
    engineCreate: engineCreate_3
  }, l);
  go(fn_8, i, l);
}
function OUn(e, o) {
  let scan_13 = xn(e, o);
  for (let [r, {
    linked: linked_17,
    patterns: patterns,
    engineCreate: engineCreate_4
  }] of scan_13.registered) hn(r, engineCreate_4, {
    refuse: linked_17.scanned.refuse,
    parentOf: linked_17.scanned.parentOf,
    scanned: linked_17.scanned,
    record: i => {
      scan_13.calls.add(i), scan_13.direct.add(i);
    },
    recordTo: i => {
      if (scan_13.nextTo.add(i), i === "user") patterns.forEach(item => scan_13.toUserOn.add(item));
    },
    recordEnv: (i, f) => {
      io(scan_13, i).add(f);
    },
    recordCommand: i => {
      uo(scan_13, i);
    },
    recordState: i => {
      Ko(scan_13, i, linked_17.scanned);
    },
    libraryHelper: i => oe(linked_17.scanned, i),
    follow: Zo({
      scan: scan_13,
      linked: linked_17
    })
  });
  return lj(scan_13), mj(scan_13), scan_13;
}
function ko(e) {
  switch (e.type) {
    case "Identifier":
      return `the variable ${e.name}`;
    case "TemplateLiteral":
      return "a template string";
    case "CallExpression":
      return "a call";
    case "ConditionalExpression":
      return "a conditional";
    case "MemberExpression":
      return "a member read";
    case "BinaryExpression":
      return "a concatenation";
    case "SpreadElement":
      return "a spread";
    case "Literal":
      return "regex" in e ? "a RegExp" : `the literal ${e.raw ?? String(e.value)}`;
    default:
      return `a ${e.type}`;
  }
}
var M = ({
  onName: onName_4,
  event: event_5
}) => '"to" is a string literal, or a list of them, from ' + ke.map(item => `"${item}"`).join(", ") + `, written in the call, so the streams a module's hooks stand on can be listed: ${onName_4}("${event_5}", { to: "collector" }, hook)`;
function kn(e, o) {
  let {
    onName: onName_5,
    event: event_6,
    refuse: refuse_19
  } = o;
  return (e.type === "ArrayExpression" ? e.elements : [e]).map(item => {
    if (item === null) throw refuse_19(e, `${onName_5}("${event_6}") names its destinations as a list with a hole; ${M(o)}`);
    let p = item.type === "Literal" ? item.value : void 0;
    if (typeof p !== "string") throw refuse_19(item, `${onName_5}("${event_6}") names its destination as ${ko(item)}; ${M(o)}`);
    if (!Wh(p)) throw refuse_19(item, `${onName_5}("${event_6}") names the destination "${p}", which is no telemetry stream; ${M(o)}`);
    return p;
  });
}
function tt(e, o) {
  let {
    onName: onName_6,
    event: event_7,
    refuse: refuse_20
  } = o;
  if (e === void 0) return ke;
  switch (e.type) {
    case "ObjectExpression":
      {
        let s = e.properties.find(item => item.type === "SpreadElement" || item.computed || item.kind !== "init");
        if (s !== void 0) throw refuse_20(s, `${onName_6}("${event_7}") has a matcher with a spread, a computed key or an accessor, which may set "to" to anything; ` + M(o));
        let [p, i] = e.properties.filter(item => ye(item, "to"));
        if (i !== void 0) throw refuse_20(i, `${onName_6}("${event_7}") names "to" twice in one matcher; ` + M(o));
        return p?.type === "Property" ? kn(p.value, o) : ke;
      }
    case "ArrayExpression":
      return e.elements.flatMap(item => {
        if (item === null || item.type === "SpreadElement") throw refuse_20(item ?? e, `${onName_6}("${event_7}") has a list of matchers with a hole or a spread; ${M(o)}`);
        return tt(item, o);
      });
    default:
      throw refuse_20(e, `${onName_6}("${event_7}") takes its matcher as ${ko(e)}, not an object written in the call; ${M(o)}`);
  }
}
function jn(e) {
  let o = [...e.registrations].filter(([, r]) => to(r.event));
  if (o.length === 0) return;
  let t = new Set(o.flatMap(([r, {
    event: event_8,
    matcher: matcher_2,
    linked: linked_18
  }]) => tt(matcher_2, {
    onName: r.callee.type === "Identifier" ? r.callee.name : "on",
    event: event_8,
    refuse: linked_18.scanned.refuse
  })));
  return ke.filter(item => t.has(item));
}
function En(e, o) {
  let t = OUn(e, o),
    nextTo = RHt("prepend").filter(item => t.nextTo.has(item)),
    n = t.envReads.size > 0 || t.envWrites.size > 0,
    clients = Hr(e),
    state_2 = Dr(t),
    runCommands = _r(t),
    telemetry = jn(t);
  return {
    hooks: Array.from(t.hooks),
    calls: Array.from(t.calls).sort(),
    ...(runCommands !== void 0 && {
      runCommands: runCommands
    }),
    ...(nextTo.length === 0 ? {} : {
      nextTo: nextTo
    }),
    ...(t.toUserOn.size > 0 && {
      toUserOn: Array.from(t.toUserOn)
    }),
    ...(telemetry !== void 0 && {
      telemetry: telemetry
    }),
    ...(n && {
      env: {
        reads: Array.from(t.envReads).sort(),
        writes: Array.from(t.envWrites).sort()
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
function lPr(e, o) {
  let t = wr(e),
    r = Ft.get(t);
  if (r !== void 0) return r;
  let n = En(e, o);
  return Ft.set(t, n), n;
}
var wn = (module, o, t) => ({
  module: module,
  scan: Cc(o, t),
  files: Mc(o)
});
var Lxs = "agents";
var qF = (folder, module_2, t) => Of() ? wn(module_2, t(), folder) : {
  module: module_2,
  folder: folder
};
import { join as Kj } from "path";
function qj(e, o) {
  return "folder" in o ? {
    path: o.folder,
    modulePath: Kj(o.folder, Ee)
  } : {
    path: path,
    modulePath: dt(e)
  };
}
import { join as Yj } from "path";
var dPr = e => Yj(we(), Ao, e);
function Qj(e) {
  return e === null || e === void 0 ? String(e) : typeof e === "object" ? `an object with keys [${Object.keys(e).join(", ")}]` : `a ${typeof e}`;
}
function Zj(e) {
  if (typeof e === "object" && e !== null && "registerPlugin" in e && typeof e.registerPlugin === "function") return e;
  throw new R(`a built-in module has no registerPlugin function: ${Qj(e)}`, "a built-in module has no registerPlugin function");
}
function bfe(e, o) {
  let t;
  try {
    t = o();
  } catch (error) {
    jo(e, "require", error);
    return;
  }
  let r;
  try {
    r = Zj(t);
  } catch (error) {
    jo(e, "shape", error);
    return;
  }
  try {
    r.registerPlugin();
  } catch (error) {
    Fr().builtinPlugins.delete(e), jo(e, "register", error);
  }
}
function jo(name_5, phase, t) {
  let builtinPluginFailures = Fr().builtinPluginFailures;
  if (builtinPluginFailures.has(name_5)) return;
  builtinPluginFailures.set(name_5, {
    name: name_5,
    phase: phase,
    message: d(t)
  }), a(F(t)), m("plugin_bundled_register", phase);
}
function Fgt(e) {
  let o = Fr(),
    t = o.builtinPlugins.get(e);
  if (t === void 0 || o.builtinPluginFailures.has(e)) return !1;
  if (t.isAvailable === void 0) return !0;
  try {
    return t.isAvailable();
  } catch (error) {
    return jo(e, "is_available", error), !1;
  }
}
function __(e) {
  Fr().builtinPlugins.set(e.name, e);
  let hooksModule = e.hooksModule;
  if (hooksModule === void 0) return;
  let t = dt(e.name);
  if ("scan" in hooksModule) JSo.registerScan(t, hooksModule.scan);else if ("shipped" in hooksModule) JSo.register(t, hooksModule.shipped);
}
function Gf(e) {
  return e.endsWith(`@${path}`);
}
var j4i = () => [...Fr().builtinPlugins.keys()];
function wR(e) {
  return Fr().builtinPlugins.get(e);
}
function c4() {
  let e = Cr(),
    enabled_2 = [],
    disabled = [];
  for (let [name_6, n] of Fr().builtinPlugins) {
    if (!Fgt(name_6)) continue;
    let s = `${name_6}@${path}`,
      p = i0(s).length > 0,
      i = n.enabledFromPolicyOnly ? Tn(s) : n.enabledFromTrustedSettingsOnly ? RPr(s) : !p ? e?.enabledPlugins?.[s] : IUn(s),
      enabled = i !== void 0 ? i === !0 : n.defaultEnabled ?? !0,
      l = {
        name: name_6,
        manifest: {
          name: name_6,
          description: n.description,
          version: n.version,
          ...(n.defaultEnabled === void 0 ? {} : {
            defaultEnabled: n.defaultEnabled
          }),
          ...(n.userConfig === void 0 ? {} : {
            userConfig: n.userConfig
          })
        },
        path: path,
        source: s,
        repository: s,
        enabled: enabled,
        isBuiltin: !0,
        hooksConfig: n.hooks,
        mcpServers: n.mcpServers,
        ...(n.hooksModule === void 0 ? {} : qj(name_6, n.hooksModule))
      };
    if (enabled) enabled_2.push(l);else disabled.push(l);
  }
  return {
    enabled: enabled_2,
    disabled: disabled
  };
}
function cPr() {
  return Nn().filter(item => !O3(item.name));
}
function W4i() {
  return Nn();
}
function Nn() {
  let {
      enabled: enabled_3
    } = c4(),
    o = [],
    builtinPlugins = Fr().builtinPlugins;
  for (let r of enabled_3) {
    let n = builtinPlugins.get(r.name);
    if (!n?.skills) continue;
    for (let s of n.skills) o.push(oE(s, `${r.name}@${path}`));
  }
  return o;
}
function nwo(e = new Set()) {
  let o = [];
  for (let [t, r] of Fr().builtinPlugins) {
    if (e.has(t)) continue;
    for (let n of r.skills ?? []) o.push(n.name, ...(n.aliases ?? []));
  }
  return o;
}
function IUn(e) {
  let o = $o();
  for (let t = o.length - 1; t >= 0; t--) {
    let r = o[t];
    if (r === void 0) continue;
    let n = Vee(be(r)?.enabledPlugins, e);
    if (n !== void 0) return n;
  }
  return;
}
function z4i() {
  return Object.fromEntries([...Fr().builtinPlugins].filter(([, e]) => e.enabledFromPolicyOnly).map(([e]) => `${e}@${path}`).map(item => [item, Tn(item)]));
}
function Tn(e) {
  let [o, t] = [HSe(), be("policySettings")].map(item => Vee(item?.enabledPlugins, e));
  return o === !1 && t !== !1 ? t : o;
}
function oE(e, o) {
  let builtinPluginWiredSkills = Fr().builtinPluginWiredSkills,
    r = builtinPluginWiredSkills.get(e);
  if (!r) {
    let {
      wireSkillFilesExtraction: wireSkillFilesExtraction
    } = import.meta.require("B:/~BUN/root/chunk-bvzvmbea.js");
    r = wireSkillFilesExtraction(e), builtinPluginWiredSkills.set(e, r);
  }
  let {
    skillRoot: skillRoot,
    getPromptForCommand: getPromptForCommand
  } = r;
  G2e(e.hooks ?? {}, o);
  let p = {
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
    formatForegroundForkResult: e.formatForegroundForkResult,
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
    getArgumentCompletions: e.getArgumentCompletions,
    enterTakesArgumentCompletion: e.enterTakesArgumentCompletion
  };
  return j2e(p, "description", e.description), j2e(p, "menuDescription", e.menuDescription), j2e(p, "argumentHint", e.argumentHint), j2e(p, "whenToUse", e.whenToUse), vPr(p, "disableModelInvocation", e.disableModelInvocation), EPr(p, e.policyGate), p;
}
export { KSo, nPr, LNe, kua, L2e, Cxs, qSo, CUn, ton, Lgt, M4i, YSo, dV, Rxs, non, D4i, RUn, rPr, Axs, L4i, RHt, oPr, sPr, XSo, ron, xxs, AHt, AUn, Pxs, Oxs, Ngt, Ixs, N4i, Mxs, xUn, JSo, F4i, KF, H4i, zse, xHt, vua, QSo, ZSo, $4i, iPr, PUn, Eua, Tua, oon, ewo, U4i, aPr, PHt, son, ion, B4i, N2e, Cua, Dxs, two, OUn, lPr, Lxs, qF, dPr, bfe, Fgt, __, Gf, j4i, wR, c4, cPr, W4i, nwo, IUn, z4i };