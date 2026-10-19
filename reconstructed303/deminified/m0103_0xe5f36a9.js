// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Xc, Yg, p$r, T_t, N$o, oi as path, Kx, rr } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { x, H, d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { _ } from "B:/~BUN/root/chunk-6za2ez23.js";
import { ne, $t } from "B:/~BUN/root/chunk-nggrknsv.js";
import { xde, YZe, L } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { eo } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { hr } from "B:/~BUN/root/chunk-7gwemd3j.js";
import { m } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { Hp } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { Wo } from "B:/~BUN/root/chunk-6a9s3k2y.js";
import { me, nr, nTe } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { Ie, xIe } from "B:/~BUN/root/chunk-hkh6hras.js";
import { FHt } from "B:/~BUN/root/chunk-akjvg0af.js";
import { PIe, N4n, F4n } from "B:/~BUN/root/chunk-xj6zztfr.js";
import { OIe } from "B:/~BUN/root/chunk-9czrnnv8.js";
import { Lgt } from "B:/~BUN/root/chunk-dyer18a2.js";
import { H4n, W3 } from "B:/~BUN/root/chunk-xpy44yvr.js";
import { VG } from "B:/~BUN/root/chunk-et37ax67.js";
import { N } from "B:/~BUN/root/chunk-nkxgam12.js";
import { Us } from "B:/~BUN/root/chunk-t7350kw8.js";
import { Ue } from "B:/~BUN/root/chunk-ef0msk7r.js";
var Wn = 4294967295,
  zn = Wn - 1,
  {
    floor: floor,
    min: min
  } = Math;
function Kn(e, o, r, t) {
  var n = 0,
    s = e == null ? 0 : e.length;
  if (s === 0) return 0;
  o = r(o);
  var p = o !== o,
    i = o === null,
    a = xde(o),
    f = o === void 0;
  while (n < s) {
    var u = floor((n + s) / 2),
      y = r(e[u]),
      g = y !== void 0,
      c = y === null,
      h = y === y,
      j = xde(y);
    if (p) var k = t || h;else if (f) k = h && (t || g);else if (i) k = h && g && (t || !c);else if (a) k = h && g && !c && (t || !j);else if (c || j) k = !1;else k = t ? y <= o : y < o;
    if (k) n = u + 1;else s = u;
  }
  return min(s, zn);
}
var jr = Kn;
var Yn = 4294967295,
  Jn = Yn >>> 1;
function Qn(e, o, r) {
  var t = 0,
    n = e == null ? t : e.length;
  if (typeof o == "number" && o === o && n <= Jn) {
    while (t < n) {
      var s = t + n >>> 1,
        p = e[s];
      if (p !== null && !xde(p) && (r ? p <= o : p < o)) t = s + 1;else n = s;
    }
    return n;
  }
  return jr(e, o, YZe, r);
}
var Ge = Qn;
function Zn(e, o) {
  return Ge(e, o);
}
var Fo = Zn;
function es(e, o) {
  return Ge(e, o, !0);
}
var Er = es;
var V0r = Xc;
var Ve = V0r.map(item => `classic.${item}`);
var S4n = ["model.complete", "model.classify", "model.fork", "audio.play", "audio.speak", "mcp.call", "mcp.connect", "session.cwd", "session.root", "session.model", "session.turns", "session.id", "session.messages", "session.repo", "session.surface", "session.surfaces", "session.authorize", "session.identity", "session.usage", "session.version", "turn.abort", "prompt.read", "flag.value", "tool.list", "tool.register", "command.list", "command.register", "config.list", "agent.list", "agent.register", "ui.toast", "ui.status", "ui.log", "ui.notice", "ui.invalidate", "ui.open", "ui.close", "ui.panes", "ui.selection", "ui.copy", "ui.view", "ui.notify", "ui.blit", "fs.read", "fs.write", "fs.list", "fs.exists", "fs.stat", "fs.ancestors", "store.get", "store.set", "store.delete", "store.keys", "state.get", "state.set", "clock.now", "clock.sleep", "clock.after", "clock.every", "http.fetch", "process.run", "process.spawn", "settings.read", "env.get", "env.set"];
var TIe = [...Ve, "tool.call", "tool.check", "ui.render", "ui.resolve", "ui.press", "ui.input", "ui.select", "ui.message", "ui.fault", "ui.scroll", "ui.focus", "agent.offer", "agent.spawn", "prompt.submit", "prompt.fill", "prompt.suggest", "prompt.edit", "prompt.change", "prompt.autocomplete", "prompt.section", "prompt.context", "prompt.attachment", "prompt.mention", "prompt.compose", "tool.describe", "command.run", "command.describe", "config.set", "config.describe", "telemetry.log", "telemetry.mark", "skill.prompt", "attribution.text", "session.start", "session.receive", "session.append", "session.send", "session.compact", "session.attach", "session.detach", "session.measure", "session.end", "plugin.register", "turn.start", "turn.step", "turn.complete", "engine.create", ...S4n];
var aQs = Ve.filter(item => item !== "classic.PreToolUse");
var Dje = e => TIe.includes(e);
var zIo = e => S4n.includes(e);
var q0r = ["turn.step", "process.spawn"];
var zan = e => q0r.includes(e);
var Sr = new Set(TIe.filter(item => item.includes(".")).map(item => item.slice(0, item.indexOf("."))));
var We = String.raw`(?!\p{Default_Ignorable_Code_Point})[\p{ID_Start}$_]` + String.raw`(?:(?!\p{Default_Ignorable_Code_Point})[\p{ID_Continue}$])*`;
var regExp = new RegExp(String.raw`^${We}\.${We}$`, "u");
var w4n = e => regExp.test(e) && !Sr.has(e.slice(0, e.indexOf(".")));
var xBs = ["managed", "user", "project", "local", "memory"];
var Van = ["replace", "append", "insert"];
var v4n = e => typeof e === "string" && Van.includes(e);
var fe = Symbol.for("claude-code.state.atom");
function Ho(e) {
  if (typeof e !== "object" || e === null || Object.isFrozen(e)) return e;
  for (let o of Object.values(e)) Ho(o);
  return Object.freeze(e);
}
function J(e, id = e.id) {
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
var Ml = (e, o, r) => Object.freeze({
  [fe]: !0,
  ref: J(e),
  initial: Ho(o),
  ...(r?.shape !== void 0 && {
    shape: r.shape
  })
});
function ze(e, o) {
  if (e.shape === void 0) return o === void 0 ? e.initial : o;
  let r = o;
  return r?.shape === e.shape && r.value !== void 0 ? r.value : e.initial;
}
var le = Symbol.for("claude-code.state.derived");
var Xe = (e, o) => typeof e === "object" && e !== null && e[o] !== void 0;
var I = e => Xe(e, fe);
var qe = e => Xe(e, le);
var Gl = (e, compute) => {
  let r = {};
  return Object.freeze({
    [le]: r,
    sources: Object.freeze(e.map(item => I(item) || qe(item) ? item : J(item))),
    compute: compute
  });
};
var Xl = (e, o) => I(e) ? Object.freeze({
  ...e,
  [fe]: !0,
  ref: J(e.ref, o.requestId)
}) : J(e, o.requestId);
async function Do(e, o) {
  if (I(o)) {
    let p = await e.get(o.ref);
    return {
      value: ze(o, p.value),
      versions: [p.version]
    };
  }
  if (!qe(o)) {
    let p = await e.get(o);
    return {
      value: p.value,
      versions: [p.version]
    };
  }
  let r = await Promise.all(o.sources.map(item => Do(e, item))),
    versions = r.flatMap(item => item.versions),
    n = versions.join(","),
    s = o[le];
  if (s?.versions !== n && s !== void 0) s.value = o.compute(...r.map(item => item.value)), s.versions = n;
  return {
    value: s?.value,
    versions: versions
  };
}
var Jl = async (e, o) => (await Do(e.state, o)).value;
var vr = (e, value) => e.shape === void 0 ? value : {
  shape: e.shape,
  value: value
};
var Ar = 64;
var od = async (e, o, r) => {
  let state = e.state,
    n = I(o) ? o.ref : o;
  for (let s = 0; s < Ar; s += 1) {
    let p = await state.get(n),
      i = I(o) ? ze(o, p.value) : p.value,
      a = r(i),
      f = I(o) ? vr(o, a) : a;
    if ((await state.set(n, f, {
      ifVersion: p.version
    })).isSet) return a;
  }
  throw Error("update: the value was written by another every time it was read, up to the bound on tries; nothing was written");
};
var PR = Ml;
var HR = Gl;
var CR = Xl;
var _R = Jl;
var GR = od;
var vd = ["prepend", "user", "append", "builtin", "core"];
var PBs = ["allow", "ask", "deny"];
var Cgt = e => vd.indexOf(e);
function lQs(e, o) {
  let r = Cgt(o);
  return e.find(item => Cgt(item.from) < r && r < Cgt(item.to))?.plugin;
}
var DHt = e => ({
  prepend: ["append", "builtin", "core"],
  user: [],
  append: ["core"],
  builtin: [],
  core: []
})[e];
var J0r = e => DHt("prepend").includes(e);
var OBs = ["prepend", "append"];
function dQs(e, o) {
  return Object.freeze([...e, Object.freeze({
    ...o,
    to: e.reduce((acc, item) => Cgt(item.to) > Cgt(acc) ? item.to : acc, o.to)
  })]);
}
var GIo = e => `next.to:${e}`;
var Rgt = Object.freeze([]);
import { join as cu } from "path";
var Jc = "scripts/bundle-builtin-hooks-module.ts";
function Qc(e) {
  let o = N(e) ? e.files : void 0;
  return Object.freeze(Object.fromEntries((N(o) ? Object.entries(o) : []).filter(item => typeof item[1] === "string")));
}
function Zc(e, o) {
  let r = N(e) ? e.scan : void 0;
  if (N(r) && Array.isArray(r.hooks) && Array.isArray(r.calls) && (r.nextTo === void 0 || Array.isArray(r.nextTo))) return r;
  throw new x(`the build carried no hooks module scan for ${o}`, "the build carried no hooks module scan for a built-in");
}
var ou = (e, o) => new x(`the hooks module of ${e} cannot ship: ${o}`, "the hooks module of a built-in cannot ship");
var Te = "hooks/register.ts";
var Or = e => `builtin:${e}/${Te}`;
var Mo = "mods";
var Co = "mods/";
import { resolve as su } from "path";
var ve = () => su(import.meta.dirname, "../../../../../..");
import { dirname as au, relative as fu, resolve as mu, sep as lu } from "path";
var Rr = "builtin-hooks-module:";
function du(e, o) {
  let r = o.slice(Rr.length);
  return r.startsWith(Co) ? `${Mo}/${r.slice(Co.length)}` : fu(ve(), mu(au(e), r)).split(lu).join("/");
}
var $o = "builtin-hooks-module";
var BH = {
  name: $o,
  setup(e) {
    e.onResolve({
      filter: /^builtin-hooks-module:/
    }, o => ({
      path: du(o.importer, o.path),
      namespace: $o
    })), e.onLoad({
      filter: /.*/,
      namespace: $o
    }, async o => {
      let r = Bun.spawn([process.execPath, "--smol", cu(ve(), Jc), o.path], {
          cwd: ve(),
          stdout: "pipe",
          stderr: "pipe",
          windowsHide: !0
        }),
        [t, n, s] = await Promise.all([new Response(r.stdout).text(), new Response(r.stderr).text(), r.exited]);
      if (s !== 0) throw ou(o.path, n);
      return {
        contents: `module.exports = ${t}`,
        loader: "js"
      };
    });
  }
};
var Ye = (e, o) => new Ie(`${e}: ${o}: changed while it was read`);
class Ae extends Ie {}
var Q = e => e instanceof Error && "code" in e ? String(e.code) : "EIO";
var Pr = (e, o, r) => new Ie(`${e}: ${o}: no such file`, {
  cause: Q(r)
});
var Ir = ["EMFILE", "ENFILE"];
async function Z(e, o) {
  try {
    return await e;
  } catch (error) {
    throw o(error);
  }
}
function Fr(e, o, r) {
  let t = Q(r);
  return Ir.includes(t) ? new Ie(`${e}: ${o}: not read, no file descriptor free (${t})`) : Pr(e, o, r);
}
var ju = (e, o, r) => new Ie(`${e}: ${o}: not readable (${Q(r)})`);
import { sep as vu } from "path";
var Hr = `/** @jsxRuntime classic */
/** @jsx h */
/** @jsxFrag Fragment */
`;
var _o = e => p$r[T_t.find(item => e.endsWith(item)) ?? ""] ?? "js";
function Dr(e) {
  let o = typeof e === "object" && e ? e : {},
    r = "errors" in o ? o.errors : void 0;
  return Array.isArray(r) ? r : [o];
}
function Mr(e, o) {
  let r = typeof e === "object" && e !== null,
    t = r && "message" in e ? String(e.message) : "",
    n = r && "position" in e ? e.position : void 0;
  if (!(typeof n === "object" && n !== null && "line" in n && typeof n.line === "number" && "column" in n)) return t;
  return `${t} (line ${Number(n.line) - o}, column ${String(n.column)})`;
}
var Cr = (e, o) => Dr(e).map(item => Mr(item, o)).filter(item => item !== "").join("; ") || String(e);
function _4n(e, o) {
  let loader = _o(e),
    t = loader === "js",
    n = loader === "ts" ? "" : Hr;
  if (t) return o;
  try {
    let s = {
      loader: loader,
      macro: !1
    };
    return new Bun.Transpiler(s).transformSync(`${n}${o}`);
  } catch (error) {
    throw new Ie(Cr(error, $t(n, `
`)));
  }
}
var UIo = e => T_t.some(item => e.endsWith(item));
var Bo = 32;
var OHt = 1048576;
var $r = 8388608;
function Lr(e) {
  let o = [e];
  if (e.endsWith(".js")) {
    let r = e.slice(0, -3);
    o.push(`${r}.ts`, `${r}.tsx`);
  }
  if (e.endsWith(".jsx")) o.push(`${e.slice(0, -4)}.tsx`);
  if (e.endsWith(".mjs")) o.push(`${e.slice(0, -4)}.mts`);
  if (e.endsWith(".cjs")) o.push(`${e.slice(0, -4)}.cts`);
  for (let r of T_t) o.push(`${e}${r}`), o.push(`${e}${vu}index${r}`);
  return o;
}
var Tgt = "claude-code";
var CBs = (e, o, r) => new Ie(`${e}: cannot import "${o}" (from ${r}): a hooks module imports its own files by relative path and "${Tgt}", nothing else`);
import { dirname as _r, resolve as Br } from "path";
var Ur = (e, o) => [".", "..", "./", "../"].includes(e) ? Br(_r(o), e, "index") : Br(_r(o), e);
var BIo = e => e === "." || e === ".." || e.startsWith("./") || e.startsWith("../");
var Gr = ["no such file", "not a regular file", "resolves outside the plugin's folder"];
import { isAbsolute as Ju, relative as qr, sep as Qu } from "path";
import { constants as $u } from "fs";
import { open as Lu } from "fs/promises";
class Uo extends Ae {}
var Oe = (e, o) => new Uo(`${e}: ${o} is over ${OHt} bytes and was not read`);
async function Vr(e, o) {
  let r = Buffer.allocUnsafe(o),
    t = 0;
  for (;;) {
    let {
      bytesRead: bytesRead
    } = await e.read(r, t, o - t, t);
    if (t += bytesRead, bytesRead === 0 || t === o) return r.subarray(0, t);
  }
}
import { realpath as Mu } from "fs/promises";
function Wr(e, o) {
  return Mu(o);
}
async function Je(e, {
  real: real,
  size: size
}, t) {
  if (size > OHt) throw Oe(t, e);
  let n = f => Fr(t, e, f);
  await using s = await Z(Lu(real, $u.O_RDONLY | Us), f => Q(f) === "ELOOP" ? Ye(t, e) : n(f));
  let p = await Z(s.stat(), n);
  if (!p.isFile()) throw Ye(t, e);
  if ((await Z(Wr(s.fd, real), n)) !== real) throw Ye(t, e);
  if (p.size > OHt) throw Oe(t, e);
  let a = await Z(Vr(s, OHt + 1), n);
  if (a.length > OHt) throw Oe(t, e);
  return {
    real: real,
    source: a.toString("utf8")
  };
}
import { lstat as Bu, realpath as zr } from "fs/promises";
import { basename as Uu, isAbsolute as Gu, relative as Vu, sep as Wu } from "path";
async function HXe(e, o, r) {
  let t = await Z(zr(o), f => ju(r, Uu(o), f)),
    n = f => Fr(r, e, f),
    real_2 = await Z(zr(e), n),
    p = Vu(t, real_2);
  if (p === ".." || p.startsWith(`..${Wu}`) || Gu(p)) throw new Ie(`${r}: ${e}: ${real_2} resolves outside the plugin's folder`);
  let a = await Z(Bu(real_2), n);
  if (!a.isFile()) throw new Ie(`${r}: ${e}: not a regular file`);
  return {
    real: real_2,
    size: a.size
  };
}
var Xr = (e, o) => new Ae(`${e}: ${o} is not named like code and was not loaded: a hooks module and the files it imports end in ` + N$o);
function Qe(e, o, r) {
  let t = [o, r].find(item => !UIo(item));
  if (t !== void 0) throw Xr(e, t);
}
var jIo = (e, o) => o.startsWith(`${e}: `) ? o.slice(`${e}: `.length) : o;
async function RBs({
  spelled: spelled,
  importer: importer,
  root: root,
  pluginName: pluginName
}, n, s) {
  let p = `${pluginName}: cannot import "${spelled}" (from ${qr(root, importer) || importer}):`,
    i = Ur(spelled, importer),
    a = qr(root, i);
  if (a === ".." || a.startsWith(`..${Qu}`) || Ju(a)) throw new Ie(`${p} it is outside the plugin's folder (${root})`);
  let u = [];
  for (let file of Lr(i)) {
    let source = n.get(file);
    if (source !== void 0) return {
      file: file,
      source: source
    };
    try {
      let c = await HXe(file, root, pluginName);
      Qe(pluginName, file, c.real);
      let file_2 = s.get(c.real),
        source_2 = file_2 === void 0 ? void 0 : n.get(file_2);
      if (file_2 !== void 0 && source_2 !== void 0) return {
        file: file_2,
        source: source_2
      };
      let {
        real: real_3,
        source: source_3
      } = await Je(file, c, pluginName);
      return {
        file: file,
        source: source_3,
        real: real_3
      };
    } catch (error) {
      let h = d(error);
      if (!(error instanceof Ie) || !Gr.some(item => h.endsWith(item))) throw new Ie(`${p} ${jIo(pluginName, h)}`);
      let k = error.cause === void 0;
      u.push(k ? h : `${h} (${String(error.cause)})`);
    }
  }
  throw new Ie(`${p} no such file under ${root}`, u.length === 0 ? void 0 : {
    cause: u.join("; ")
  });
}
var Kr = (e, o, r) => new Ie(`${e}: ${o} ${r}`);
var tx = (e, o) => Kr(e, o, `takes the module over ${$r} bytes in total and was not read`);
async function nx(e, o, r) {
  let t = await HXe(e, o, r);
  return Qe(r, e, t.real), Je(e, t, r);
}
var WIo = () => FHt();
var Ze = Yr();
var Jr = 80;
function b4n() {
  let e = new Map();
  return {
    get: o => e.get(o),
    set: (o, r) => {
      e.set(o, r);
    }
  };
}
var Qr = b4n();
function Yr() {
  let e = b4n(),
    o = b4n();
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
function Re({
  call: call,
  scanned: scanned,
  what: what,
  holder: holder
}) {
  let {
      endOf: endOf,
      functionOf: functionOf
    } = scanned.climbs,
    p = endOf(call);
  if (p === void 0) return;
  let {
    value: value_2,
    parent: parent
  } = p;
  if (!(parent.type === "ExpressionStatement" || (parent.type === "ReturnStatement" || parent.type === "ArrowFunctionExpression" && parent.body === value_2) && functionOf(value_2) === holder)) throw scanned.refuse(value_2, `the value of ${what} is kept (assigned, passed, read, or returned from a nested function); it takes .catch(handler) where it is called and nothing else`);
}
var ce = "Client";
var Zr = (e, o) => e.id === o || e.params.includes(o);
var ot = {
  VariableDeclarator: (e, o) => e.id === o,
  FunctionDeclaration: Zr,
  FunctionExpression: Zr,
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
var yx = e => ot[e.type];
var gx = (e, o) => (o?.type === "Property" || o?.type === "PropertyDefinition" || o?.type === "MethodDefinition") && o.key === e && !o.computed;
var Go = e => typeof e === "object" && e !== null && typeof e.type === "string";
function jx(e) {
  let weakMap = new WeakMap();
  return r => {
    let t = weakMap.get(r);
    if (t !== void 0) return t;
    let n = e(r);
    return weakMap.set(r, n), n;
  };
}
function AD(node, o, r) {
  let t = [{
    node: node,
    parent: void 0,
    grandparent: void 0
  }];
  for (let n = t.pop(); n !== void 0; n = t.pop()) {
    if (o(n), r?.(n.node)) continue;
    let s = Object.keys(n.node);
    for (let p = s.length - 1; p >= 0; p -= 1) {
      let i = s[p];
      if (i === void 0 || i === "loc" || i === "type" || i === "start" || i === "end") continue;
      let node_3 = n.node[i];
      if (Array.isArray(node_3)) for (let u = node_3.length - 1; u >= 0; u -= 1) {
        let node_2 = node_3[u];
        if (Go(node_2)) t.push({
          node: node_2,
          parent: n.node,
          grandparent: n.parent
        });
      } else if (Go(node_3)) t.push({
        node: node_3,
        parent: n.node,
        grandparent: n.parent
      });
    }
  }
}
function bx(e) {
  let o = new Map();
  return AD(e, ({
    node: node_4,
    parent: parent_2
  }) => {
    if (parent_2 !== void 0) o.set(node_4, parent_2);
  }), o;
}
function rt(e) {
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
      key: key_2
    } = property;
    if (!property.computed && property.kind === "init" && (key_2.type === "Identifier" && key_2.name === "module" || key_2.type === "Literal" && key_2.value === "module")) o = {
      property: property,
      isSpreadAfter: !1
    };
  }
  return o;
}
function oe(e) {
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
function G(e) {
  if (e.type === "Literal") return typeof e.value === "string" ? e.value : void 0;
  if (e.type !== "TemplateLiteral" || e.expressions.length !== 0) return;
  let o = e.quasis[0]?.value.cooked;
  return o === void 0 || o === null ? void 0 : o;
}
function tt(e, at_2) {
  if (!at_2 || at_2.type !== "ObjectExpression") return {
    at: at_2 ?? e,
    problem: `Client takes its props as an object literal ({ module: "./board.tsx", key }), so the surface module it names can be read before it runs (got ${oe(at_2)})`
  };
  let r = rt(at_2);
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
    spelled_2 = G(t);
  if (spelled_2 === void 0) return {
    at: t,
    problem: `Client module must be a string literal, the surface module's path relative to this file (got ${oe(t)})`
  };
  return {
    at: t,
    spelled: spelled_2
  };
}
var Vo = e => e.type === "Identifier" && e.name === ce || e.type === "Literal" && e.value === ce || e.type === "MemberExpression" && !e.computed && e.property.type === "Identifier" && e.property.name === ce;
var nt = "h";
function st(e) {
  let {
    callee: callee
  } = e;
  if (callee.type !== "Super" && Vo(callee)) return {
    argument: e.arguments[0]
  };
  let [r, argument] = e.arguments;
  return callee.type === "Identifier" && callee.name === nt && r !== void 0 && r.type !== "SpreadElement" && Vo(r) ? {
    argument: argument
  } : void 0;
}
function zo(e) {
  let o = [];
  return AD(e, ({
    node: node_5
  }) => {
    if (node_5.type !== "CallExpression") return;
    let t = st(node_5);
    if (t) o.push(tt(node_5, t.argument));
  }), o.toSorted((r, t) => t.at.start - r.at.start);
}
var component = "default";
function v(e) {
  let o = e.type === "Identifier",
    r = e.type === "Literal";
  return o ? e.name : r ? String(e.value) : "";
}
function pt(e) {
  let o = [];
  for (let r of e.body) if (r.type === "ExportDefaultDeclaration") o.push(component);else if (r.type === "ExportAllDeclaration") {
    if (r.exported !== null && r.exported) o.push(v(r.exported));
  } else if (r.type === "ExportNamedDeclaration") {
    let {
      declaration: declaration
    } = r;
    if (declaration?.type === "FunctionDeclaration" || declaration?.type === "ClassDeclaration") o.push(declaration.id.name);else if (declaration?.type === "VariableDeclaration") {
      for (let {
        id: id_2
      } of declaration.declarations) if (id_2.type === "Identifier") o.push(id_2.name);
    }
    for (let s of r.specifiers) o.push(v(s.exported));
  }
  return o;
}
var it = e => /^[A-Z][A-Za-z0-9]*$/.test(e) && /[a-z]/.test(e);
function sQs(e) {
  let o = pt(e);
  if (o.includes(component)) return {
    component: component
  };
  let r = o.filter(it),
    [component_2] = r;
  if (r.length === 1 && component_2 !== void 0) return {
    component: component_2
  };
  return {
    problem: `exports ${r.length === 0 ? "no component" : r.join(", ")}: give it a default export or a single capitalized one (export function Board(props, surface) { ... })`
  };
}
import { dirname as _x, isAbsolute as Bx, relative as Ux, resolve as at, sep as ft } from "path";
function Xo(e) {
  let {
      spelled: spelled_3,
      file: file_3,
      root: root_2
    } = e,
    n = `Client module "${spelled_3}"`;
  if (!BIo(spelled_3)) return {
    problem: `${n} is not relative: spell the surface module's path from this file ("./board.tsx")`
  };
  if (!UIo(spelled_3)) return {
    problem: `${n} is not named like code: a surface module's path ends in ` + N$o
  };
  let s = at(_x(file_3), spelled_3),
    p = Ux(at(root_2), s);
  return p === ".." || p.startsWith(`..${ft}`) || Bx(p) ? {
    problem: `${n} leaves the plugin's folder`
  } : {
    module: p.split(ft).join("/")
  };
}
function mt(e) {
  try {
    return WIo().parse(e, {
      ecmaVersion: "latest",
      sourceType: "module"
    });
  } catch {
    return;
  }
}
function iQs(e, file_4, root_3) {
  if (!e.includes(ce)) return e;
  let t = mt(e),
    n = e;
  for (let s of t ? zo(t) : []) {
    if (!("spelled" in s)) continue;
    let p = Xo({
      spelled: s.spelled,
      file: file_4,
      root: root_3
    });
    if ("module" in p) n = n.slice(0, s.at.start) + _(p.module) + n.slice(s.at.end);
  }
  return n;
}
function dt(e) {
  let o = new Set();
  for (let [file_5, t] of e.files) for (let n of zo(t.scanned.program)) {
    if ("problem" in n) throw t.scanned.refuse(n.at, n.problem);
    let s = Xo({
      spelled: n.spelled,
      file: file_5,
      root: e.root
    });
    if ("problem" in s) throw t.scanned.refuse(n.at, s.problem);
    o.add(s.module);
  }
  return [...o].sort();
}
function oo(e) {
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
var regExp_2 = new RegExp(`^${We}$`, "u");
var $Xe = e => e === "*" || e.endsWith(".*") || e.startsWith("!");
var ro = e => e.startsWith("telemetry.");
function to(e) {
  if (typeof e !== "string") return `${typeof e} is not an event name or a pattern (a string)`;
  let isNegated = e.startsWith("!"),
    name = isNegated ? e.slice(1) : e;
  if (isNegated && name === "*") return `"${e}" is not a pattern: it selects no event`;
  if (isNegated && name.startsWith("!")) return `"${e}" is not a pattern: "!" negates once`;
  let t = name === "*",
    n = name.endsWith(".*"),
    s = (n ? name.slice(0, -2) : name).split(".");
  if (!(t || s.every(item => regExp_2.test(item)))) return `"${e}" is not an event name or a pattern ("*", "<prefix>.*", or "!" before either)`;
  return {
    isNegated: isNegated,
    selection: t ? {
      kind: "every"
    } : n ? {
      kind: "prefix",
      prefix: s.join(".")
    } : {
      kind: "name",
      name: name
    }
  };
}
function no(e) {
  let o = to(e);
  if (typeof o === "string") throw new Ie(o);
  return o;
}
function ABs(e) {
  let {
    selection: selection
  } = no(e);
  return selection.kind === "name" ? selection.name : void 0;
}
function K0r(e) {
  let o = to(e);
  return typeof o === "string" ? o : void 0;
}
function JX(e, o) {
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
var IHt = (e, o, r) => JX(e, o) && (r.isBuiltin || !ro(o) || ro(e));
function ut(e) {
  let o = !1;
  for (let {
    scanned: scanned_2
  } of e.files.values()) AD(scanned_2.program, t => {
    if (t.node.type === "ImportExpression") o = !0;
  }, () => o);
  return o;
}
function F(e) {
  switch (e?.type) {
    case "Identifier":
      return [e];
    case "ArrayPattern":
      return e.elements.flatMap(F);
    case "ObjectPattern":
      return e.properties.flatMap(item => F(item.type === "Property" ? item.value : item));
    case "AssignmentPattern":
      return F(e.left);
    case "RestElement":
      return F(e.argument);
    default:
      return [];
  }
}
function xt(e) {
  let o = [],
    r = [];
  return AD(e, ({
    node: node_6
  }) => {
    switch (node_6.type) {
      case "AssignmentExpression":
        o.push(...F(node_6.left));
        break;
      case "UpdateExpression":
        o.push(...F(node_6.argument));
        break;
      case "ForInStatement":
      case "ForOfStatement":
        o.push(...F(node_6.left)), r.push(...F(node_6.left));
        break;
      default:
        break;
    }
  }), {
    byName: Map.groupBy(o, t => t.name),
    inLoopHeads: Map.groupBy(r, t => t.name)
  };
}
var xe = (e, o, r) => o !== void 0 && (yx(o)?.(o, e, r) ?? !1);
function qo(e, o) {
  let r = [];
  return AD(e, ({
    node: node_7,
    parent: parent_3,
    grandparent: grandparent
  }) => {
    if (node_7.type === "Identifier" && node_7.name === o && xe(node_7, parent_3, grandparent)) r.push(node_7);
  }), r;
}
var so = (e, o, r) => !xe(e, o, r) && !(o?.type === "MemberExpression" && o.property === e && !o.computed) && !gx(e, o) && o?.type !== "LabeledStatement" && o?.type !== "BreakStatement" && o?.type !== "ContinueStatement" && o?.type !== "ExportSpecifier" && o?.type !== "ImportSpecifier" && o?.type !== "ImportDefaultSpecifier" && o?.type !== "ImportNamespaceSpecifier" && o?.type !== "MetaProperty" && o?.type !== "ExportAllDeclaration" && o?.type !== "ImportAttribute";
function yt(e) {
  let o = new Map();
  function r(t) {
    let n = t.type === "VariableDeclaration" && t.kind === "const";
    if (t.type === "FunctionDeclaration" && t.id !== null) o.set(t.id.name, t);else if (n) for (let s of t.declarations) {
      let {
        id: id_3,
        init: init
      } = s;
      if (id_3.type === "Identifier" && (init?.type === "FunctionExpression" || init?.type === "ArrowFunctionExpression")) o.set(id_3.name, init);
    }
  }
  for (let t of e.body) if (r(t), t.type === "ExportNamedDeclaration" || t.type === "ExportDefaultDeclaration") {
    let declaration_2 = t.declaration;
    if (declaration_2 !== null && declaration_2 !== void 0) r(declaration_2);
  }
  return o;
}
function Ko(e) {
  let o = [],
    r = [];
  return AD(e, ({
    node: node_8,
    parent: parent_4,
    grandparent: grandparent_2
  }) => {
    if (node_8.type !== "Identifier") return;
    if (xe(node_8, parent_4, grandparent_2)) o.push(node_8);else if (so(node_8, parent_4, grandparent_2)) r.push(node_8);
  }), {
    declared: Map.groupBy(o, t => t.name),
    read: Map.groupBy(r, t => t.name)
  };
}
function gt(e) {
  let o = [],
    r = [],
    t = [];
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
    item.isStart ? o.push(item.span) : o.splice(o.lastIndexOf(item.span), 1), r.push(item.place), t.push(o.at(-1)?.declaration);
  }), n => t[Er(r, n) - 1];
}
function ht(e, o) {
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
function D(e) {
  if (e.type !== "Property") return;
  let {
      key: key_3
    } = e,
    r = !e.computed && key_3.type === "Identifier",
    t = !e.computed && key_3.type === "Literal";
  return r ? key_3.name : t ? String(key_3.value) : void 0;
}
var V = e => e.properties.some(item => item.type === "Property" && (item.kind !== "init" || !item.shorthand && D(item) === "__proto__"));
var W = e => e?.type === "FunctionDeclaration" || e?.type === "FunctionExpression" || e?.type === "ArrowFunctionExpression";
var kt = (e, o) => W(e) || e.type === "PropertyDefinition" && !e.static && e.value === o;
function jt(e, o, r) {
  switch (e.type) {
    case "ArrayExpression":
      return !0;
    case "Property":
      return e.value === o;
    case "ObjectExpression":
      return o.type === "Property" && !r(e);
    default:
      return !1;
  }
}
function Et(e) {
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
function wt(e) {
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
function bt(e, o) {
  switch (e.type) {
    case "Program":
    case "StaticBlock":
      return !0;
    case "BlockStatement":
      return W(o);
    default:
      return W(e);
  }
}
function z(e, o) {
  let r = new Map();
  return t => {
    let n = r.get(t);
    if (n !== void 0) return n ?? void 0;
    let s = t,
      p = e(t),
      i = p === void 0 ? null : o(p, s) ?? r.get(p);
    while (p !== void 0 && i === void 0) s = p, p = e(p), i = p === void 0 ? null : o(p, s) ?? r.get(p);
    for (let a = t; a !== void 0 && a !== p; a = e(a)) r.set(a, i ?? null);
    return i ?? void 0;
  };
}
function Ty(parentOf) {
  let o = eo(V);
  return {
    parentOf: parentOf,
    functionOf: z(parentOf, r => W(r) ? r : void 0),
    lexicalScopeOf: z(parentOf, r => Et(r) ? r : void 0),
    varScopeOf: z(parentOf, r => bt(r, parentOf(r)) ? r : void 0),
    declarerOf: z(parentOf, r => wt(r) ? void 0 : r),
    deferrerOf: z(parentOf, (r, t) => kt(r, t) ? r : void 0),
    endOf: z(parentOf, (parent_5, value_3) => ht(parent_5, value_3) ? void 0 : {
      value: value_3,
      parent: parent_5
    }),
    heldAt: z(parentOf, (parent_6, value_4) => jt(parent_6, value_4, o) ? void 0 : {
      value: value_4,
      parent: parent_6
    })
  };
}
function vy(e) {
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
var St = e => typeof e === "string" || vy(e) ? e : "unplaced";
function He(e, {
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
function Nt(e, o, r) {
  return [...e].flatMap(([t, declaration_3]) => {
    if (typeof t === "string") return [];
    if (t.type === "SwitchStatement") {
      let {
        discriminant: discriminant
      } = t;
      return [{
        start: t.start,
        end: discriminant.start,
        declaration: declaration_3
      }, {
        start: discriminant.end,
        end: t.end,
        declaration: declaration_3
      }];
    }
    let s = o(t),
      i = r === "engine" && t.type === "BlockStatement" && s !== void 0 && W(s) && !e.has(s) ? s : t;
    return [{
      start: i.start,
      end: i.end,
      declaration: declaration_3
    }];
  });
}
function Yo(e, o, r) {
  let t = new Map(),
    n = new Map(),
    s = new Map(),
    {
      parentOf: parentOf_3
    } = o;
  return i => {
    let a = s.get(i);
    if (a !== void 0) return a ?? void 0;
    let f = t.get(i.name) ?? new Map((e.get(i.name) ?? []).map(item => [St(He(item, o)), item]).filter(([c]) => c !== "nothing" && (typeof c === "string" || c.type !== "Program")));
    if (t.set(i.name, f), parentOf_3(i) === void 0) return i;
    if (f.size === 0) return;
    let u = f.get("unplaced");
    if (u !== void 0) return u;
    let y = n.get(i.name) ?? gt(Nt(f, parentOf_3, r));
    n.set(i.name, y);
    let g = y(i.start);
    return s.set(i, g ?? null), g;
  };
}
function $y(e, o) {
  let {
      declared: declared,
      read: read
    } = Ko(e),
    n = xt(e);
  return {
    functions: yt(e),
    assigned: new Set(n.byName.keys()),
    assignedAt: n.byName,
    loopAssigned: n.inLoopHeads,
    declared: declared,
    read: read,
    shadowOf: Yo(declared, o, "engine"),
    writtenShadowOf: Yo(declared, o, "written")
  };
}
function Ly(e, o) {
  for (let r of e.scanned.program.body) {
    let t = r.type === "ExportNamedDeclaration",
      n = t ? r.source : null,
      specifier = t ? r.specifiers.find(item => v(item.exported) === o) : void 0;
    if (n !== null && n !== void 0 && specifier !== void 0) return {
      specifier: specifier,
      spelled: String(n.value)
    };
  }
  return;
}
function X(e, o, r = "all") {
  let t = [];
  return AD(e, ({
    node: node_9,
    parent: parent_7,
    grandparent: grandparent_3
  }) => {
    if (node_9.type === "Identifier" && node_9.name === o && so(node_9, parent_7, grandparent_3)) t.push(node_9);
  }, r === "own" ? s => s !== e && (s.type === "FunctionExpression" || s.type === "FunctionDeclaration") : void 0), t;
}
function Tt(e, o, r) {
  let t = new Set();
  for (let n of e.body) {
    if (n.type === "ExportDefaultDeclaration") {
      let {
        declaration: declaration_4
      } = n;
      if (declaration_4 === o || declaration_4.type === "Identifier" && r !== void 0 && declaration_4.name === r) t.add("default");
      continue;
    }
    if (n.type !== "ExportNamedDeclaration") continue;
    let {
      declaration: declaration_5,
      source: source_4,
      specifiers: specifiers
    } = n;
    if (declaration_5?.type === "FunctionDeclaration" && declaration_5 === o) t.add(declaration_5.id.name);
    if (declaration_5?.type === "VariableDeclaration") {
      for (let a of declaration_5.declarations) if (a.init === o && a.id.type === "Identifier") t.add(a.id.name);
    }
    if (source_4 !== null && source_4 !== void 0) continue;
    for (let a of specifiers) if (r !== void 0 && v(a.local) === r) t.add(v(a.exported));
  }
  return t;
}
function vt(e, o) {
  return e.type === "Identifier" ? e.name === o : qo(e, o).length > 0;
}
function ye(e) {
  switch (e.type) {
    case "Identifier":
      return [e.name];
    case "ObjectPattern":
      return e.properties.flatMap(item => ye(item.type === "RestElement" ? item.argument : item.value));
    case "ArrayPattern":
      return e.elements.flatMap(item => item === null ? [] : ye(item));
    case "AssignmentPattern":
      return ye(e.left);
    case "RestElement":
      return ye(e.argument);
    default:
      return [];
  }
}
var At = 4;
function io(e, o) {
  for (let r of e.program.body) {
    let n = r.type === "ExportNamedDeclaration" ? r.declaration : r;
    if (!(n?.type === "VariableDeclaration" && n.kind === "const")) continue;
    for (let p of n.declarations) if (p.id.type === "Identifier" && p.id.name === o && p.init) return p.init;
  }
  return;
}
function ao(e) {
  let o = e === null || e === void 0;
  return e?.type === "VariableDeclaration" ? e.declarations.flatMap(item => ye(item.id)) : o ? [] : [e.id.name];
}
function fo(e, o) {
  switch (e.type) {
    case "VariableDeclaration":
      return e.declarations.some(item => vt(item.id, o));
    case "FunctionDeclaration":
    case "ClassDeclaration":
      return e.id?.name === o;
    case "ImportDeclaration":
      return e.specifiers.some(item => item.local.name === o);
    case "ExportNamedDeclaration":
    case "ExportDefaultDeclaration":
      return e.declaration !== null && e.declaration !== void 0 && fo(e.declaration, o);
    default:
      return !1;
  }
}
var Ot = /^(?!(?:true|false|null|undefined|NaN|Infinity)$)(?![-\d])[\w:@*!$#-]+$/;
var Rt = 16;
var mo = 120;
function lo(e) {
  let o = e.slice(0, mo),
    r = e.length - o.length,
    t = JSON.stringify(o).replace(/[^\x20-\x7e]/g, n => "\\u".concat(n.charCodeAt(0).toString(Rt).padStart(At, "0"))).replace(/ {2,}/g, n => " ".concat(n.slice(1).replaceAll(" ", "\\u0020")));
  return r === 0 ? t : `${t}[+${r} chars]`;
}
function M(e) {
  return e.length <= mo && Ot.test(e) ? e : lo(e);
}
var O = "?";
function co(e, o, r) {
  let t = e.properties.map(item => D(item)),
    n = t.lastIndexOf(void 0);
  return e.properties.flatMap((item, index) => {
    let i = t[index],
      a = item.type !== "Property",
      f = i !== void 0 && t.includes(i, index + 1),
      u = i !== void 0 && index < n,
      y = i === void 0 ? O : M(i),
      g = `${y}=${O}`,
      c = a ? `...${O}` : `${y}${Pt(item.value, o, r)}`;
    return f ? [] : [u ? g : c];
  }).join(", ");
}
function ge(e, o) {
  let r = e.shadowOf(o);
  if (r === void 0) return {
    kind: "free"
  };
  let t = e.parentOf(r),
    n = t && e.parentOf(t),
    loop = n && e.parentOf(n);
  return t?.type === "VariableDeclarator" && t.id === r && n?.type === "VariableDeclaration" && n.kind === "const" && n.declarations.length === 1 && loop?.type === "ForOfStatement" && loop.left === n && o.start >= loop.body.start && o.start < loop.body.end ? {
    kind: "loop",
    loop: loop
  } : {
    kind: "shadowed"
  };
}
function It(e, o) {
  let t = ge(e, o).kind === "free" ? io(e, o.name) : void 0;
  return t?.type === "Literal" && t.regex === void 0 && typeof t.value !== "bigint" || t?.type === "TemplateLiteral" && t.expressions.length === 0 || t?.type === "Identifier" ? t : void 0;
}
function Ft(e, o) {
  let t = ge(e, o).kind === "free" ? io(e, o.name) : void 0;
  return (t?.type === "ObjectExpression" || t?.type === "ArrayExpression" || t?.type === "Literal" && t.regex !== void 0) && e.isSealed(o.name) ? t : void 0;
}
var he = (e, o) => It(e, o) ?? Ft(e, o);
function uo(e, o, r) {
  let t = e,
    seen = r;
  while (t.type === "Identifier" && !seen.has(t.name)) {
    let i = he(o, t);
    if (i === void 0) break;
    seen = new Set([...seen, t.name]), t = i;
  }
  let node_10 = t.type === "ObjectExpression" ? t : void 0;
  return node_10 !== void 0 && !V(node_10) ? {
    node: node_10,
    seen: seen
  } : void 0;
}
function Jo(e, o) {
  let [r, ...t] = e.node.properties,
    n = t.length === 0 && r?.type === "Property",
    s = n ? D(r) : void 0,
    p = n ? uo(r.value, o, e.seen) : void 0;
  return s !== void 0 && p !== void 0 ? `.${M(s)}${Jo(p, o)}` : ` has {${co(e.node, o, e.seen)}}`;
}
function Ht(e) {
  let o = [];
  for (let r of e.elements) {
    if (r === null) return;
    if (r.type === "Literal") {
      let {
        value: value_5
      } = r;
      if (!(typeof value_5 === "string" || typeof value_5 === "number" || typeof value_5 === "boolean")) return;
      o.push(typeof value_5 === "string" ? M(value_5) : String(value_5));
      continue;
    }
    let n = r.type === "TemplateLiteral" && r.expressions.length === 0 ? r.quasis[0]?.value.cooked : void 0;
    if (n === void 0 || n === null) return;
    o.push(M(n));
  }
  return L(o);
}
function Dt(e, o, r) {
  let {
    right: right
  } = o;
  return right.type === "ArrayExpression" && !e.program.body.some(item => item.type === "ImportDeclaration" && fo(item, r)) ? Ht(right)?.join("|") : void 0;
}
function Mt(e, o, r) {
  if (r.has(e.name)) return O;
  let t = ge(o, e),
    n = t.kind === "loop",
    s = n ? Dt(o, t.loop, e.name) : void 0;
  if (n) return s ?? O;
  let p = he(o, e);
  if (p === void 0) return O;
  return re(p, o, new Set([...r, e.name]));
}
var Ct = (e, o) => `/${lo(e)}/${o}`;
function re(e, o, r = new Set()) {
  switch (e.type) {
    case "Literal":
      {
        let {
            regex: regex,
            value: value_6
          } = e,
          s = typeof value_6 === "string",
          p = typeof value_6 === "bigint",
          i = s ? M(value_6) : String(value_6);
        return regex ? Ct(regex.pattern, regex.flags) : p ? O : i;
      }
    case "TemplateLiteral":
      {
        let t = e.quasis[0]?.value.cooked;
        return e.expressions.length === 0 && t !== void 0 && t !== null ? M(t) : O;
      }
    case "ArrayExpression":
      return e.elements.map(item => item === null ? "" : re(item, o, r)).join("|");
    case "ObjectExpression":
      return V(e) ? O : `{${co(e, o, r)}}`;
    case "Identifier":
      return Mt(e, o, r);
    default:
      return O;
  }
}
function Pt(e, o, r) {
  let t = uo(e, o, r);
  if (t === void 0) return `=${re(e, o, r)}`;
  return Jo(t, o);
}
var yg = (e, o, r) => o === void 0 ? e : `${e}${re(o, r)}`;
function De(e, o, r = new Set()) {
  if (e.type === "Literal") return e.regex ? e.value ?? new RegExp("") : e.value;
  if (e.type === "ArrayExpression") return e.elements.map(item => item ? De(item, o, r) : new RegExp(""));
  if (e.type === "ObjectExpression") {
    if (V(e)) return new RegExp("");
    let n = [];
    for (let s of e.properties) {
      let p = D(s);
      if (s.type !== "Property" || p === void 0) return new RegExp("");
      n.push([p, De(s.value, o, r)]);
    }
    return Object.fromEntries(n);
  }
  if (e.type !== "Identifier" || r.has(e.name)) return new RegExp("");
  let t = he(o, e);
  if (!t) return new RegExp("");
  return De(t, o, new Set([...r, e.name]));
}
function Zo(e, o) {
  if (e.type === "ExportDefaultDeclaration") {
    let {
      declaration: declaration_6
    } = e;
    return declaration_6.type === "Identifier" && declaration_6.name === o;
  }
  if (e.type !== "ExportNamedDeclaration") return !1;
  let {
      declaration: declaration_7,
      source: source_5,
      specifiers: specifiers_2
    } = e,
    s = declaration_7 !== null && declaration_7 !== void 0 && fo(declaration_7, o),
    p = (source_5 === null || source_5 === void 0) && specifiers_2.some(item => v(item.local) === o);
  return s || p;
}
var xo = (e, o) => e.body.some(item => Zo(item, o));
function _t(e, o) {
  let r = e.holderFiles.get(o);
  if (r === void 0) return;
  let {
      scanned: scanned_3
    } = r,
    n = [...scanned_3.names.functions].find(([, a]) => a === o)?.[0],
    s = n === void 0 ? [] : scanned_3.names.read.get(n) ?? [],
    p = Tt(scanned_3.program, o, n),
    i = [];
  for (let reference of s) if (scanned_3.parentOf(reference)?.type !== "ExportDefaultDeclaration") i.push({
    reference: reference,
    scanned: scanned_3
  });
  for (let a of e.graph.files.values()) for (let f of a.scanned.program.body) {
    let y = f.type === "ImportDeclaration" || f.type === "ExportAllDeclaration" || f.type === "ExportNamedDeclaration" ? f.source : void 0;
    if (!(p.size > 0 && y !== null && y !== void 0 && a.links.get(String(y.value)) === scanned_3.file)) continue;
    if (f.type === "ExportAllDeclaration" || f.type === "ExportNamedDeclaration" && f.specifiers.some(item => p.has(v(item.local))) || f.type === "ImportDeclaration" && f.specifiers.some(item => item.type === "ImportNamespaceSpecifier")) return;
    let j = f.type === "ImportDeclaration" ? f.specifiers : [];
    for (let k of j) {
      let E = k.type === "ImportSpecifier" ? v(k.imported) : "default",
        b = k.local.name;
      if (!p.has(E)) continue;
      if (xo(a.scanned.program, b)) return;
      for (let reference_2 of a.scanned.names.read.get(b) ?? []) i.push({
        reference: reference_2,
        scanned: a.scanned
      });
    }
  }
  return i;
}
function Bt(e) {
  let o = new Map(),
    r = new Map(),
    t = Map.groupBy(e.holderCalls, i => i.call),
    n;
  function s({
    reference: reference_3,
    scanned: scanned_4
  }, f, u) {
    let y = scanned_4.parentOf(reference_3);
    return (y?.type === "CallExpression" && y.callee === reference_3 ? t.get(y) ?? [] : []).some(item => item.callee === f && item.position === u && p(item.caller, item.callerPosition));
  }
  function p(i, a) {
    n ??= ut(e.graph);
    let f = o.get(i)?.get(a),
      u = r.get(i)?.has(a) === !0;
    if (n || u || f !== void 0) return f ?? !1;
    r.set(i, (r.get(i) ?? new Set()).add(a));
    let g = i.type === "FunctionExpression" && i.id !== null && i.id !== void 0 ? void 0 : _t(e, i),
      c = i === e.register && a === 0,
      h = g !== void 0 && (g.length > 0 || c) && g.every(item => s(item, i, a));
    return o.set(i, (o.get(i) ?? new Map()).set(a, h)), r.get(i)?.delete(a), h;
  }
  return p;
}
function yo(e, o) {
  let r = o.scanned.parentOf(e);
  return r?.type === "MemberExpression" && r.object === e && !r.computed && r.property.type === "Identifier" && r.property.name === "catch";
}
function Ut(e, o) {
  let t = o.type === "Identifier" ? e.scanned.names.functions.get(o.name) : o;
  if (!(t?.type === "FunctionExpression" || t?.type === "ArrowFunctionExpression" || t?.type === "FunctionDeclaration")) return !0;
  let [,, s] = t.params;
  return s !== void 0 && (s.type !== "Identifier" || X(t, s.name).length > 0) || X(t, "eval").length > 0;
}
var go = e => e.type === "SpreadElement" || e.computed || e.kind !== "init";
var ke = (e, o) => e.type === "Property" && (e.key.type === "Identifier" && e.key.name === o || e.key.type === "Literal" && e.key.value === o);
function Gt(e) {
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
function te(e) {
  switch (e?.type) {
    case "ObjectExpression":
      {
        let o = e.properties.filter(item => ke(item, "command")),
          r = e.properties.some(go),
          [t] = o;
        return !r && o.length === 1 && t?.type === "Property" ? Gt(t.value) : void 0;
      }
    case "ArrayExpression":
      {
        let o = e.elements.map(item => item === null || item.type === "SpreadElement" ? void 0 : te(item));
        return o.every(item => item !== void 0) ? o.flatMap(item => item ?? []) : void 0;
      }
    default:
      return;
  }
}
function Vt(e, o, r) {
  let {
      parentOf: parentOf_4
    } = o.linked.scanned,
    n = yo(e, o.linked) ? parentOf_4(e) : void 0,
    s = n === void 0 ? void 0 : parentOf_4(n),
    p = [...e.arguments.slice(-1), ...(s?.type === "CallExpression" ? s.arguments : [])],
    i = te(o.matcher) ?? [];
  return o.event === "command.run" && !p.some(item => Ut(o.linked, item)) && i.length > 0 && i.every(item => r.has(item));
}
function Wt(e, o, r) {
  let t = o.climbs.heldAt(r);
  if (t === void 0) return;
  let {
    value: value_7,
    parent: parent_8
  } = t;
  if (parent_8.type === "VariableDeclarator" && parent_8.init === value_7) {
    let {
        id: id_4
      } = parent_8,
      u = o.parentOf(parent_8),
      y = u && o.parentOf(u);
    return id_4.type === "Identifier" && u?.type === "VariableDeclaration" && u.kind === "const" && (y?.type === "Program" || y?.type === "ExportNamedDeclaration") ? {
      kind: "const",
      name: id_4.name
    } : void 0;
  }
  let held = parent_8.type === "CallExpression" ? e.registrations.get(parent_8) : void 0;
  return held !== void 0 && held.matcher === value_7 ? {
    kind: "matcher",
    held: held
  } : void 0;
}
function zt(e, o) {
  let r = new Map(),
    t = new Map();
  function n(s, p) {
    let i = r.get(s)?.get(p);
    if (t.get(s)?.has(p) === !0 || i !== void 0) return i ?? !1;
    t.set(s, (t.get(s) ?? new Set()).add(p));
    let {
        scanned: scanned_5
      } = s,
      u = scanned_5.names.read.get(p) ?? [],
      y = !xo(scanned_5.program, p) && u.length > 0 && u.every(item => {
        let c = Wt(e, scanned_5, item);
        switch (c?.kind) {
          case "matcher":
            return o(c.held.holder, c.held.position);
          case "const":
            return n(s, c.name);
          case void 0:
            return !1;
        }
      });
    return r.set(s, (r.get(s) ?? new Map()).set(p, y)), t.get(s)?.delete(p), y;
  }
  return n;
}
function Gan(e, o) {
  if (!xIe(e) || !Object.hasOwn(e, o)) return;
  let r = e[o];
  if (typeof r === "string") return [r];
  return Array.isArray(r) && r.length > 0 && r.every(item => typeof item === "string") ? r : void 0;
}
function MHt(e) {
  if (Array.isArray(e)) {
    let o = e.map(MHt);
    return o.length > 0 && o.every(item => item !== void 0) ? o.flatMap(item => item ?? []) : void 0;
  }
  return Gan(e, "door");
}
function Y0r(e) {
  let o = Array.isArray(e),
    r = [xIe(e) ? e.door : e].flat().some(item => item instanceof RegExp && item.source === "(?:)");
  return o ? e.some(Y0r) : r;
}
function Xt(e) {
  let o = zt(e, Bt(e)),
    r = new Map(),
    registrations = [],
    renderMatchers = [],
    catchReads = [];
  for (let [p, i] of e.registrations) {
    let {
        event: a,
        matcher: matcher,
        linked: linked
      } = i,
      {
        program: program,
        parentOf: parentOf_5,
        names: names
      } = linked.scanned,
      h = r.get(linked) ?? {
        program: program,
        parentOf: parentOf_5,
        shadowOf: names.shadowOf,
        isSealed: b => o(linked, b)
      };
    r.set(linked, h);
    let registration = yg(a, matcher, h),
      k = a === "command.run",
      E = matcher !== void 0 && JX(a, "session.append") ? De(matcher, h) : void 0;
    if (registrations.push(registration), catchReads.push({
      registration: registration,
      pattern: a,
      hasCatch: yo(p, linked),
      isOwnCommand: Vt(p, i, e.registeredCommands),
      commands: (k ? te(matcher) : void 0) ?? [],
      doors: MHt(E) ?? [],
      isDoorUnread: Y0r(E)
    }), a === "ui.render" && matcher !== void 0) renderMatchers.push({
      registration: registration,
      matcher: De(matcher, h)
    });
  }
  return {
    registrations: registrations,
    renderMatchers: renderMatchers,
    catchReads: catchReads
  };
}
var qt = "anthropic";
var je = ["anthropic", "collector"];
var Gg = e => je.includes(e);
var C = ({
  onName: onName,
  event: event
}) => '"to" is a string literal, or a list of them, from ' + je.map(item => `"${item}"`).join(", ") + `, written in the call, so the streams a module's hooks stand on can be listed: ${onName}("${event}", { to: "collector" }, hook)`;
function Kt(e, o) {
  let {
    onName: onName_2,
    event: event_2,
    refuse: refuse
  } = o;
  return (e.type === "ArrayExpression" ? e.elements : [e]).map(item => {
    if (item === null) throw refuse(e, `${onName_2}("${event_2}") names its destinations as a list with a hole; ${C(o)}`);
    let p = item.type === "Literal" ? item.value : void 0;
    if (typeof p !== "string") throw refuse(item, `${onName_2}("${event_2}") names its destination as ${oo(item)}; ${C(o)}`);
    if (!Gg(p)) throw refuse(item, `${onName_2}("${event_2}") names the destination "${p}", which is no telemetry stream; ${C(o)}`);
    return p;
  });
}
var zg = (root_4, pluginName_2) => (spelled_4, importer_2, {
  known: known,
  reals: reals
}) => RBs({
  spelled: spelled_4,
  importer: importer_2,
  root: root_4,
  pluginName: pluginName_2
}, known, reals);
var ho = (e, o) => o === "env.get" ? e.envReads : e.envWrites;
function q({
  graph: graph,
  pluginName: pluginName_3
}, r) {
  let t = graph.files.get(r);
  if (t === void 0) throw new Ie(`${pluginName_3}: ${r} was not linked`);
  return t;
}
function ko(e, o, r) {
  let {
      scan: scan,
      linked: linked_2
    } = e,
    s = linked_2.links.get(o);
  if (s === void 0) throw linked_2.scanned.refuse(void 0, `"${r}" is looked for through a re-export from "${o}", which is not a file of the module's own: nothing is followed through it`);
  return {
    scan: scan,
    linked: q(scan, s)
  };
}
function K(e) {
  let {
      scan: scan_2,
      linked: linked_3
    } = e,
    t = scan_2.ownExports.get(linked_3);
  if (t !== void 0) return t;
  let named = new Map(),
    listed = new Map(),
    namespaces = new Map(),
    stars = [],
    foreign = [];
  for (let statement of linked_3.scanned.program.body) {
    if (statement.type === "ExportDefaultDeclaration") named.set("default", statement);
    if (statement.type === "ExportNamedDeclaration") {
      for (let h of ao(statement.declaration)) named.set(h, statement);
      for (let h of statement.specifiers) named.set(v(h.exported), statement), listed.set(v(h.exported), h);
    }
    if (statement.type !== "ExportAllDeclaration") continue;
    let {
        exported: exported
      } = statement,
      g = linked_3.links.get(String(statement.source.value));
    if (exported !== null && exported !== void 0) {
      namespaces.set(v(exported), statement);
      continue;
    }
    g === void 0 ? foreign.push(statement) : stars.push({
      from: linked_3,
      statement: statement,
      to: q(scan_2, g)
    });
  }
  let f = {
    named: named,
    listed: listed,
    namespaces: namespaces,
    stars: stars,
    foreign: foreign
  };
  return scan_2.ownExports.set(linked_3, f), f;
}
var er = 500000;
function P(e, o) {
  let {
    scan: scan_3,
    linked: linked_4
  } = e;
  if (scan_3.exportSteps.taken += o, scan_3.exportSteps.taken > er) throw linked_4.scanned.refuse(void 0, `the re-exports of "${scan_3.pluginName}" took ${scan_3.exportSteps.taken} steps to follow, more than the ${er} a scan allows: write fewer \`export *\`, or import each name from the file that declares it`);
}
function jo(e, o, r) {
  let {
      names: names_2,
      refuse: refuse_2
    } = e.scanned,
    s = r === "default" ? "the default export" : r,
    p = v(o.local),
    i = names_2.functions.get(p);
  if (i === void 0) throw refuse_2(o, `${s} is exported as "${p}", which is not a function declared at the top of this file`);
  if (names_2.assigned.has(p)) throw refuse_2(o, `${s} ("${p}") is assigned to elsewhere`);
  return i;
}
function Eo(e, o, r) {
  let {
      names: names_3,
      refuse: refuse_3
    } = e.scanned,
    {
      functions: functions,
      assigned: assigned
    } = names_3,
    i = r === "default" ? "the default export" : r;
  function a(c, h) {
    if (assigned.has(c)) throw refuse_3(h, `${i} ("${c}") is assigned to elsewhere`);
  }
  if (o.type === "ExportDefaultDeclaration" && r === "default") {
    let {
      declaration: declaration_8
    } = o;
    if (declaration_8.type === "FunctionDeclaration") {
      if (declaration_8.id !== null) a(declaration_8.id.name, declaration_8);
      return declaration_8;
    }
    if (declaration_8.type === "FunctionExpression" || declaration_8.type === "ArrowFunctionExpression") return declaration_8;
    let k = declaration_8.type === "Identifier" ? functions.get(declaration_8.name) : void 0;
    if (k === void 0 || declaration_8.type !== "Identifier") throw refuse_3(declaration_8, `${i} is something other than a function declared at the top of this file`);
    return a(declaration_8.name, declaration_8), k;
  }
  if (o.type !== "ExportNamedDeclaration") return;
  let {
    declaration: declaration_9
  } = o;
  if (declaration_9?.type === "FunctionDeclaration" && declaration_9.id.name === r) return a(r, declaration_9), declaration_9;
  if (declaration_9?.type === "VariableDeclaration") {
    for (let c of declaration_9.declarations) if (c.id.type === "Identifier" && c.id.name === r) {
      let {
        init: init_2
      } = c;
      if (declaration_9.kind === "const" && (init_2?.type === "FunctionExpression" || init_2?.type === "ArrowFunctionExpression")) return init_2;
      throw refuse_3(c, `${i} is exported as something other than a const function`);
    }
  }
  if (ao(declaration_9).includes(r)) throw refuse_3(o, `${i} is exported as something other than a function declared at the top of this file`);
  let y = o.specifiers.find(item => v(item.exported) === r);
  return y !== void 0 && o.source === null ? jo(e, y, r) : void 0;
}
function we(e, o, r) {
  let {
      linked: linked_5
    } = e,
    n = K(e),
    s = n.named.get(o),
    p = n.namespaces.get(o);
  if (p !== void 0) throw linked_5.scanned.refuse(p, `${o === "default" ? "the default export" : o} is the namespace of "${String(p.source.value)}" (export * as), not a function`);
  let i = n.listed.get(o),
    a = s?.type === "ExportNamedDeclaration" ? s.source : null;
  if (i !== void 0 && a !== null && a !== void 0) return r(ko(e, String(a.value), o), v(i.local));
  if (i !== void 0) return {
    fn: jo(linked_5, i, o),
    linked: linked_5
  };
  let y = s?.type === "ExportNamedDeclaration" ? s.declaration : void 0,
    g = y?.type === "VariableDeclaration";
  P(e, g ? y.declarations.length : 0);
  let fn = s === void 0 ? void 0 : Eo(linked_5, s, o);
  return fn === void 0 ? void 0 : {
    fn: fn,
    linked: linked_5
  };
}
var wo = (e, o, r) => {
  e.set(o, (e.get(o) ?? new Set()).add(r));
};
function bo(e) {
  let {
      scan: scan_4,
      linked: linked_6
    } = e,
    t = scan_4.exportTables.get(linked_6);
  if (t !== void 0) return t;
  let givers = new Map(),
    parents = new Map(),
    wild = [],
    i = new Set([linked_6]),
    a = [linked_6];
  for (let linked_7 = a.pop(); linked_7 !== void 0; linked_7 = a.pop()) {
    let y = K({
        scan: scan_4,
        linked: linked_7
      }),
      g = linked_7 === linked_6 ? [] : [...y.named.keys(), ...y.namespaces.keys()];
    if (P(e, y.stars.length + g.length + 1), y.foreign.length > 0) wild.push(linked_7);
    for (let c of g) if (c !== "default") givers.set(c, (givers.get(c) ?? new Set()).add(linked_7));
    for (let c of y.stars) if (wo(parents, c.to, c), !i.has(c.to)) i.add(c.to), a.push(c.to);
  }
  let f = {
    givers: givers,
    parents: parents,
    wild: wild
  };
  return scan_4.exportTables.set(linked_6, f), f;
}
function Yt(e, o) {
  let r = bo(e),
    t = new Map(),
    n = new Set(),
    s = [...(r.givers.get(o) ?? []), ...r.wild];
  for (let p = s.pop(); p !== void 0; p = s.pop()) {
    let a = n.has(p) ? [] : [...(r.parents.get(p) ?? [])];
    n.add(p), P(e, a.length + 1);
    for (let f of a) wo(t, f.from, f), s.push(f.from);
  }
  return t;
}
function Jt(e, o, r) {
  let {
      scan: scan_5
    } = e,
    n = Yt(e, o),
    s = new Set();
  function p(linked_8) {
    let a = {
        scan: scan_5,
        linked: linked_8
      },
      f = K(a),
      u = s.has(linked_8);
    if (s.add(linked_8), P(e, 1), u) return;
    if (f.named.has(o)) return we(a, o, r);
    let y = f.namespaces.get(o),
      c = [...[...(y === void 0 ? [] : [y]), ...f.foreign].map(j => ({
        statement: j,
        to: void 0
      })), ...(n.get(linked_8) ?? [])].toSorted((j, k) => j.statement.start - k.statement.start),
      h;
    P(e, c.length);
    for (let {
      statement: statement_2,
      to: to_2
    } of c) {
      let E = statement_2.exported !== null && statement_2.exported !== void 0 ? we(a, o, r) : p(to_2 ?? ko(a, String(statement_2.source.value), o).linked);
      if (E !== void 0 && h !== void 0 && E.fn !== h.fn) throw linked_8.scanned.refuse(statement_2, `${o} is given by more than one \`export *\` of this file, each from a different declaration: the engine binds neither`);
      h = E ?? h;
    }
    return h;
  }
  return p(e.linked);
}
function Qt(e, o, r) {
  let t = K(e),
    n = t.namespaces.has(o);
  if (t.named.has(o) || o === "default" && n) return we(e, o, r);
  if (o === "default") return;
  let p = bo(e),
    i = p.givers.get(o) ?? new Set(),
    [linked_9] = i;
  if (!(!n && p.wild.length === 0 && i.size <= 1)) return Jt(e, o, r);
  if (linked_9 === void 0) return;
  return we({
    scan: e.scan,
    linked: linked_9
  }, o, r);
}
function or(e, o) {
  let {
      scan: scan_6,
      linked: linked_10
    } = e,
    {
      exportsOpen: exportsOpen,
      exportsUnderWay: exportsUnderWay,
      exportsHeld: exportsHeld
    } = scan_6,
    i = scan_6.exportsRead.get(linked_10) ?? new Map(),
    a = exportsHeld.get(linked_10) ?? new Map(),
    f = exportsOpen.get(linked_10) ?? new Map(),
    u = f.get(o),
    y = a.get(o);
  if (i.has(o)) return i.get(o);
  if (y !== void 0 || u !== void 0) return exportsUnderWay.lowest = Math.min(exportsUnderWay.lowest, u ?? 0), y?.found;
  let {
    depth: depth,
    lowest: lowest
  } = exportsUnderWay;
  P(e, 1), exportsUnderWay.depth = depth + 1, exportsUnderWay.lowest = depth, exportsOpen.set(linked_10, f.set(o, depth)), exportsHeld.set(linked_10, a), scan_6.exportsRead.set(linked_10, i);
  try {
    let found = Qt(e, o, or);
    return exportsUnderWay.lowest === depth ? i.set(o, found) : a.set(o, {
      found: found
    }), found;
  } finally {
    if (exportsUnderWay.lowest = Math.min(lowest, exportsUnderWay.lowest), exportsUnderWay.depth = depth, f.delete(o), depth === 0) exportsOpen.clear(), exportsHeld.clear();
  }
}
var ch = ["atom", "derive", "memberOf", "read", "update"];
var Zt = Ue("B:/~BUN/root/state-library.js-wy8y4843.txt");
var X0r = Zt;
function se(e, o) {
  let {
    callee: callee_2
  } = o;
  if (callee_2.type !== "Identifier" || o.optional) return;
  let t = e.imports.get(callee_2.name),
    n = ch.find(item => item === t?.imported);
  return t?.specifier === Tgt && n !== void 0 && e.names.shadowOf(callee_2) === void 0 ? n : void 0;
}
function on(e, o) {
  for (let r of e.scanned.program.body) {
    let t = Eo(e, r, o);
    if (t !== void 0) return t;
  }
  return;
}
function rn(e, o, r = "") {
  let t = on(e, o);
  if (t !== void 0) return t;
  let {
      program: program_2,
      refuse: refuse_4
    } = e.scanned,
    p = o === "default" ? "the default export" : o,
    i = Ly(e, o);
  if (i !== void 0) throw refuse_4(i.specifier, `${p} is re-exported from another file`);
  let a = program_2.body.find(item => item.type === "ExportAllDeclaration");
  if (a !== void 0) throw refuse_4(a, `${p} is not exported here by name; what \`export *\` re-exports from another file is not followed`);
  throw refuse_4(void 0, `no export named ${p}${r}`);
}
function Nh(e, {
  names: names_4,
  refuse: refuse_5,
  what: what_2
}) {
  let n = names_4.functions.get(e.name);
  if (n === void 0) return;
  if (names_4.assigned.has(e.name)) throw refuse_5(e, `${what_2} "${e.name}" is assigned to elsewhere`);
  let s = names_4.shadowOf(e);
  if (s !== void 0) throw refuse_5(s, `${what_2} "${e.name}" is declared more than once in this file: this declaration hides the top-level function where it is used`);
  return n;
}
function tr(e, {
  refuse: refuse_6
}) {
  if (e.type !== "ObjectPattern") throw refuse_6(e, "next is destructured other than into an object pattern of plain keys");
  for (let r of e.properties) {
    if (r.type === "RestElement") throw refuse_6(r, "a rest of next (it holds next.to)");
    if (!(!r.computed && r.key.type === "Identifier")) throw refuse_6(r, "a computed or quoted key destructured from next");
    if (r.key.type === "Identifier" && r.key.name === "to") throw refuse_6(r, `next.to is destructured from next; it is reached only as next.to(e, "<tier>") on the hook's own next`);
  }
}
function tn(e, {
  refuse: refuse_7,
  parentOf: parentOf_6,
  recordTo: recordTo
}) {
  if (e.optional) throw refuse_7(e, "next.to is reached through optional chaining");
  let n = parentOf_6(e);
  if (!(n?.type === "CallExpression" && n.callee === e && !n.optional)) throw refuse_7(e, 'next.to is used as a value (bound, passed or read) instead of called as next.to(e, "<tier>")');
  let [p, i, a] = n.arguments;
  if (p === void 0 || p.type === "SpreadElement") throw refuse_7(n, 'next.to is called without (e, "<tier>") or with a spread');
  if (a !== void 0) throw refuse_7(a, 'next.to is called with more than (e, "<tier>")');
  if (!(i?.type === "Literal" && typeof i.value === "string")) throw refuse_7(i ?? n, "next.to names its tier other than as a string literal (a variable, a template or an expression)");
  let u = i.value;
  if (!J0r(u)) throw refuse_7(i, `next.to names "${String(u)}", which is not a tier a dispatch continues at (append, builtin, core)`);
  return recordTo(u), n;
}
var Oh = e => rn(e, "register", " (export function register(on, options) {...})");
var Me = e => e.arguments.find(item => item.type === "SpreadElement");
function Ph(e, o, r) {
  let t = Me(e);
  if (t !== void 0) throw o(t, `${r}() is called with a spread argument`);
  let [n, ...s] = e.arguments;
  if (n === void 0 || s.length === 0 || s.length > 2) throw o(e, `${r}() takes (event, hook) or (event, matcher, hook); got ${e.arguments.length} argument(s)`);
  let event_3 = G(n);
  if (event_3 === void 0) throw o(n, `the event name passed to ${r}() is not a string literal`);
  let a = K0r(event_3);
  if (a !== void 0) throw o(n, a);
  let f = $Xe(event_3) || Dje(event_3) || w4n(event_3),
    u = ABs(event_3),
    y = u !== void 0 && !Dje(u) && !w4n(u);
  if (!f || y) throw o(n, `"${u ?? event_3}" is not an event`);
  let hook = s.at(-1);
  if (hook === void 0) throw o(e, `${r}() takes (event, hook); got no hook`);
  return {
    event: event_3,
    hook: hook,
    matcher: s.length === 2 ? s[0] : void 0
  };
}
var nn = "command.register";
var sn = {
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
function pr(e, o) {
  if (!(e.type === "CallExpression" || e.type === "NewExpression")) return sn[e.type] ?? `used in a ${e.type}`;
  return e.callee === o ? "called" : "passed as an argument";
}
var Ce = "plugin";
var pn = ["env.get", "env.set"];
var IBs = e => pn.includes(e);
var an = ["state.get", "state.set"];
var E4n = e => an.includes(e);
var ir = e => /^[\w$@-]+$/.test(e) ? e : JSON.stringify(e);
var Agt = e => `${ir(e.plugin)}.${ir(e.key)}`;
var LHt = e => e(() => !1, (o, r) => r(), o => o());
var NHt = e => e.endsWith("@builtin") && e.indexOf("@") === e.length - 8 && e.length > 8;
var CIe = "core";
var cQs = e => e.withheldBy?.at(-1);
var VIo = (e, o) => `$.${e}: removed by plugin \`${o}\``;
var Q0r = e => [e, ...(e.surfaceModules ?? [])].flatMap(item => [{
  file: item.modulePath,
  source: item.source
}, ...item.linked]);
function mn(e, o, r) {
  let [t] = e.arguments,
    s = t !== void 0 && t.type !== "SpreadElement" ? G(t) : void 0;
  if (s === void 0) throw r(t ?? e, `$.${o} takes a literal name as its first argument, so the variables a module reads and writes can be listed (got ${oe(t)})`);
  return s;
}
var ar = (e, o) => e?.type === "MemberExpression" && e.object === o && !e.computed && !e.optional;
var fr = (e, o) => o.writtenShadowOf(e) === void 0 || o.writtenShadowOf(e) !== o.shadowOf(e);
var be = (cause, at_3) => at_3 === void 0 ? void 0 : {
  at: at_3,
  cause: cause
};
var cj = Object.freeze({
  declared: "is declared here too, so the value it names cannot be listed. Declare it once",
  assigned: "is assigned here, so the value it names cannot be listed. Leave it unassigned, or write the reference at the call",
  doubted: "may be assigned here, where the engine can bind the name apart from the text, so the value it names cannot be listed. Rename one of the two",
  looped: "is spelled in a loop's head here, and the engine can write such a target past a nearer name of that spelling, so the value it names cannot be listed. Rename one of the two",
  early: "is read here as the file loads, above its declaration, where it is still undefined, so the value it names cannot be listed. Declare it above this read"
});
function ln(e, {
  names: names_5,
  climbs: climbs
}) {
  let {
      name: name_2
    } = e,
    n = (names_5.declared.get(name_2) ?? []).filter(item => {
      let i = He(item, climbs);
      return typeof i !== "string" && i.type === "Program";
    }),
    s = (names_5.assignedAt.get(name_2) ?? []).filter(item => fr(item, names_5));
  return be("declared", n.includes(e) ? n[1] : e) ?? be("assigned", s.find(item => names_5.writtenShadowOf(item) === void 0)) ?? be("doubted", s[0]) ?? be("looped", names_5.loopAssigned.get(name_2)?.[0]) ?? be("early", names_5.read.get(name_2)?.find(p => p.start < e.start && climbs.deferrerOf(p) === void 0 && fr(p, names_5)));
}
function So(e, {
  consts: consts,
  names: names_6,
  climbs: climbs_2,
  program: program_3,
  refuse: refuse_8
}) {
  let p = names_6.shadowOf(e);
  if (p !== names_6.writtenShadowOf(e)) throw refuse_8(e, `"${e.name}" is read among the parameters of a function whose body declares that name again: the engine may bind such a read apart from the text, so the value it names cannot be listed. Rename one of the two`);
  let scope = p === void 0 ? program_3 : He(p, climbs_2);
  if (typeof scope === "string") return;
  let a = consts.inits(scope).get(e.name),
    f = a?.isVar ? consts.rebound(a.id) : void 0;
  if (f !== void 0) throw refuse_8(f.at, `the var ${e.name}, read for a $.state reference, ` + cj[f.cause]);
  return a === void 0 ? void 0 : {
    init: a.init,
    scope: scope
  };
}
function cn(e) {
  return e.type === "Program" || e.type === "BlockStatement" || e.type === "StaticBlock" ? e.body : [];
}
function un(e) {
  let o = new Map();
  for (let r of cn(e)) {
    let t = r.type === "ExportNamedDeclaration",
      n = t ? r.declaration : r,
      isVar = n?.type === "VariableDeclaration" && n.kind === "var" && e.type === "Program" && !t;
    if (!(n?.type === "VariableDeclaration" && (n.kind === "const" || isVar))) continue;
    for (let {
      id: id_5,
      init: init_3
    } of n.declarations) if (id_5.type === "Identifier" && init_3) o.set(id_5.name, {
      id: id_5,
      init: init_3,
      isVar: isVar
    });
  }
  return o;
}
function xn(e) {
  let o = new Map();
  for (let r of e.body) {
    let t = r.type === "ExportDefaultDeclaration",
      n = r.type === "ExportNamedDeclaration",
      s = n ? r.declaration : void 0,
      p = s?.type === "VariableDeclaration",
      i = [...(t ? [r.declaration] : []), ...(p ? s.declarations.flatMap(item => F(item.id)) : [s?.id]), ...(n ? r.specifiers.map(item => item.local) : [])];
    for (let a of i) if (a?.type === "Identifier" && !o.has(a.name) && Zo(r, a.name)) o.set(a.name, r);
  }
  return o;
}
function No(e, o, r) {
  let t = o(e);
  if (t?.type === "CallExpression") {
    let n = r.library.get(t),
      s = n === "read" || n === "update",
      p = n === "atom" || n === "memberOf" || r.state.has(t);
    return t.arguments[s ? 1 : 0] === e && (s || p);
  }
  if (t?.type === "ArrayExpression") {
    let n = o(t);
    return n?.type === "CallExpression" && r.library.get(n) === "derive" && n.arguments[0] === t;
  }
  return t?.type === "SpreadElement" && t.argument === e && o(t)?.type === "ObjectExpression";
}
var yn = ({
  placed: placed,
  starts: starts
}, r) => placed.slice(Fo(starts, r.start), Fo(starts, r.end)).toSorted((t, n) => t.at - n.at);
function gn({
  read: read_2,
  binding: binding
}, {
  consts: consts_2,
  names: names_7,
  parentOf: parentOf_7,
  refuse: refuse_9
}, p) {
  let {
      scope: scope_2
    } = binding,
    {
      name: name_3
    } = read_2,
    f = names_7.writtenShadowOf(read_2),
    u = scope_2.type === "Program" ? consts_2.exporting.get(name_3) : void 0;
  if (u !== void 0) return u;
  let y = (consts_2.counted(name_3).owned.get(f) ?? []).filter(item => item.use.start >= scope_2.start && item.use.start < scope_2.end);
  if (!y.some(item => item.use === read_2)) throw refuse_9(read_2, `the scan lost track of this read of "${name_3}" and cannot show that every use of the const is a plain read. This is a fault of the scan, not of the module, which is refused rather than passed`);
  let c = y.find(item => !No(item.use, parentOf_7, p)),
    h = yn(consts_2.apart(name_3)(p), scope_2).at(0);
  return h !== void 0 && (c === void 0 || h.at < c.at) ? h.use : c?.use;
}
function hn(e, o) {
  let r = e.map((t, n) => ({
    use: t,
    at: n
  }));
  return {
    owned: Map.groupBy(r, t => o.writtenShadowOf(t.use)),
    doubted: r.filter(item => o.writtenShadowOf(item.use) !== o.shadowOf(item.use))
  };
}
function kn(e) {
  let placed_2 = e.toSorted((r, t) => r.use.start - t.use.start);
  return {
    placed: placed_2,
    starts: placed_2.map(item => item.use.start)
  };
}
function jn(e, names_8, climbs_3) {
  let counted = eo(n => hn(names_8.read.get(n) ?? [], names_8));
  return {
    inits: jx(un),
    exporting: xn(e),
    rebound: eo(n => ln(n, {
      names: names_8,
      climbs: climbs_3
    })),
    counted: counted,
    apart: eo(n => eo(s => kn(counted(n).doubted.filter(item => !No(item.use, climbs_3.parentOf, s)))))
  };
}
function To(read_3, o, r = new Set()) {
  if (read_3.type === "Identifier") {
    let binding_2 = r.has(read_3.name) ? void 0 : So(read_3, o),
      s = binding_2 === void 0 ? void 0 : To(binding_2.init, o, new Set([...r, read_3.name]));
    return binding_2 !== void 0 && s !== void 0 ? {
      ...s,
      consts: [{
        read: read_3,
        binding: binding_2
      }, ...s.consts]
    } : void 0;
  }
  if (read_3.type !== "ObjectExpression") return;
  let t = {
    consts: []
  };
  for (let n of read_3.properties) {
    if (n.type === "SpreadElement") {
      let p = To(n.argument, o, r);
      if (p === void 0) return;
      t = {
        ...t,
        ...p,
        consts: [...t.consts, ...p.consts]
      };
      continue;
    }
    let s = D(n);
    if (s === void 0 || n.kind !== "init") return;
    if (s === "plugin" || s === "key") {
      let p = G(n.value);
      if (p === void 0) return;
      t = {
        ...t,
        [s]: p
      };
    }
  }
  return t;
}
function pe(e, o, r = new Set()) {
  if (e.type === "Identifier" && r.has(e.name)) return;
  let n = e.type === "Identifier" ? So(e, o.scanned) : void 0;
  if (n !== void 0 && n.init.type !== "ObjectExpression" && e.type === "Identifier") return pe(n.init, o, new Set([...r, e.name]));
  if (e.type !== "CallExpression") {
    let y = To(e, o.scanned);
    return y === void 0 ? void 0 : [y];
  }
  let p = o.libraryHelper(e),
    [i] = e.arguments;
  if ((p === "atom" || p === "memberOf") && i !== void 0 && i.type !== "SpreadElement") return pe(i, o, r);
  if (p !== "derive" || i?.type !== "ArrayExpression") return;
  let f = i.elements.map(item => item !== null && item.type !== "SpreadElement" ? pe(item, o, r) : void 0);
  return f.every(item => item !== void 0) ? f.flat() : void 0;
}
function En(call_2, spelling, {
  refuse: refuse_10,
  scanned: scanned_6,
  libraryHelper: libraryHelper
}) {
  let [s] = call_2.arguments,
    p = s !== void 0 && s.type !== "SpreadElement",
    [i, ...a] = (p ? pe(s, {
      scanned: scanned_6,
      libraryHelper: libraryHelper
    }) : void 0) ?? [],
    {
      plugin: plugin_2,
      key: key_4,
      consts: consts_3 = []
    } = i ?? {};
  if (!(a.length === 0 && plugin_2 !== void 0 && key_4 !== void 0)) throw refuse_10(s ?? call_2, `$.${spelling} takes a reference whose plugin and key are string literals ({ plugin: "p", key: "k" }, written there or in a const of this file; only id may be computed), so the values a module reads and writes can be listed (got ${oe(s)})`);
  return {
    call: call_2,
    spelling: spelling,
    named: {
      plugin: plugin_2,
      key: key_4
    },
    consts: consts_3
  };
}
function mr(e, o, {
  refuse: refuse_11,
  parentOf: parentOf_8,
  scanned: scanned_7,
  record: record,
  recordEnv: recordEnv,
  recordCommand: recordCommand,
  recordState: recordState,
  libraryHelper: libraryHelper_2,
  bind: bind,
  follow: follow
}) {
  let g = e,
    c = parentOf_8(g);
  while (c?.type === "AwaitExpression") g = c, c = parentOf_8(g);
  if (c === void 0) throw refuse_11(e, "$ stands alone");
  if (c.type === "MemberExpression" && c.object === g) {
    if (c.computed || c.optional) throw refuse_11(c, "a computed or optional member access on $");
    let property_2 = c.property;
    if (property_2.type !== "Identifier") throw refuse_11(c, "a member access on $ that is not a name");
    if (property_2.name === Ce) {
      let ie = parentOf_8(c);
      if (ar(ie, c) && ie.property.type === "Identifier") return;
      throw refuse_11(c, `$.${Ce} is used other than as $.${Ce}.name or $.${Ce}.root`);
    }
    let k = parentOf_8(c);
    if (!ar(k, c) || k.property.type !== "Identifier") throw refuse_11(c, `$.${property_2.name} is used as a value (a noun of $ bound, passed or read)`);
    let E = parentOf_8(k);
    if (E?.type !== "CallExpression" || E.callee !== k || E.optional) throw refuse_11(k, `$.${property_2.name}.${k.property.name} is used as a value (an event of $ bound, passed or read) instead of called`);
    let S = `${property_2.name}.${k.property.name}`;
    if (record(S), IBs(S)) recordEnv(S, mn(E, S, refuse_11));
    if (S === nn) recordCommand(E);
    if (E4n(S)) recordState(En(E, S, {
      refuse: refuse_11,
      scanned: scanned_7,
      libraryHelper: libraryHelper_2
    }));
    return;
  }
  if (c.type === "CallExpression" && e.type === "Identifier") {
    let j = o === "parameter" && g === e && c.callee !== g && !c.optional && c.callee.type === "Identifier",
      k = j ? libraryHelper_2(c) : void 0;
    if ((k === "read" || k === "update") && c.arguments[0] === e) return;
    if (k !== void 0) throw refuse_11(e, `$ is passed to the state library's ${k} other than as the first argument of read($, source) or update($, target, fn)`);
    if (j) {
      follow(c, e);
      return;
    }
  }
  if (o === "parameter") throw refuse_11(g, `$ itself is ${pr(c, g)} (bound, passed, spread, returned or read)`);
  if (c.type === "SpreadElement") {
    if (parentOf_8(c)?.type === "ObjectExpression") return;
    throw refuse_11(c, "the value of next(e) at engine.create is spread other than into an object literal");
  }
  if (c.type === "ReturnStatement" || c.type === "ArrowFunctionExpression" && c.body === g) return;
  if (c.type === "VariableDeclarator" && c.init === g) {
    let j = parentOf_8(c);
    if (j?.type !== "VariableDeclaration" || j.kind !== "const") throw refuse_11(c, "the value of next(e) at engine.create is bound with let or var (const only)");
    let {
      id: id_6
    } = c;
    if (id_6.type === "Identifier") {
      bind.dollar(id_6);
      return;
    }
    if (id_6.type === "ObjectPattern") {
      for (let E of id_6.properties) if (E.type === "RestElement") {
        if (E.argument.type !== "Identifier") throw refuse_11(E, "a rest of next(e) at engine.create that is not a plain name");
        bind.dollar(E.argument);
      } else if (E.value.type === "Identifier" && !E.computed) bind.unread(E.value);else throw refuse_11(E, "a destructuring of next(e) at engine.create with a nested pattern, a default or a computed key");
      return;
    }
    throw refuse_11(id_6, "the value of next(e) at engine.create is destructured into an array");
  }
  throw refuse_11(g, `the value of next(e) at engine.create is ${pr(c, g)}`);
}
var wn = "engine.create";
function vo(e, o, r) {
  let {
    refuse: refuse_12
  } = r;
  for (let {
    name: name_4,
    declaration: declaration_10,
    origin: origin
  } of o) {
    for (let i of qo(e, name_4)) if (i !== declaration_10) throw refuse_12(i, `"${name_4}" (which holds $) is declared again (shadowed)`);
    for (let i of X(e, name_4)) mr(i, origin, r);
  }
}
function Uj(e, o, r) {
  let {
    refuse: refuse_13
  } = r;
  if (e.type !== "ArrowFunctionExpression") for (let i of X(e, "arguments", "own")) throw refuse_13(i, '"arguments" is read inside a function handed $ (it holds $)');
  let n = e.params.at(-1);
  if (n?.type === "RestElement" && o >= e.params.length - 1) throw refuse_13(n, "$ is passed into a rest parameter");
  let declaration_11 = e.params[o];
  if (declaration_11 === void 0) return;
  if (declaration_11.type !== "Identifier") throw refuse_13(declaration_11, "the parameter that receives $ is not a plain name (a pattern or a default)");
  vo(e, [{
    name: declaration_11.name,
    declaration: declaration_11,
    origin: "parameter"
  }], {
    ...r,
    bind: {
      dollar: i => {
        throw refuse_13(i, "next(e) is bound outside an engine.create hook");
      },
      unread: i => {
        throw refuse_13(i, "next(e) is bound outside an engine.create hook");
      }
    }
  });
}
function bn({
  fn: fn_2,
  next: next,
  engineCreate: engineCreate
}, t) {
  let {
    refuse: refuse_14,
    parentOf: parentOf_9
  } = t;
  if (next.type !== "Identifier") {
    if (engineCreate) throw refuse_14(next, "the third parameter of an engine.create hook (next) is not a plain name");
    tr(next, t);
    return;
  }
  for (let p of qo(fn_2, next.name)) if (p !== next) throw refuse_14(p, `"${next.name}" (the continuation) is declared again (shadowed); rename the inner binding`);
  for (let p of X(fn_2, next.name)) {
    let i = parentOf_9(p);
    if (i?.type === "CallExpression" && i.callee === p && !i.optional) {
      if (engineCreate) mr(i, "next", t);
      continue;
    }
    if (i?.type === "MemberExpression" && i.object === p) {
      if (i.computed) {
        if (i.property.type === "Literal" && typeof i.property.value === "string" && i.property.value !== "to") continue;
        throw refuse_14(i, `a computed member access on "${next.name}" (it may reach next.to)`);
      }
      if (i.property.type === "Identifier" && i.property.name === "to") {
        let u = tn(i, t);
        if (engineCreate) mr(u, "next", t);
      }
      continue;
    }
    if (engineCreate) throw refuse_14(p, `"${next.name}" is passed on or bound inside an engine.create hook (its value is $)`);
    if (i?.type === "VariableDeclarator" && i.init === p) {
      if (i.id.type === "Identifier") throw refuse_14(i, `"${next.name}" (the hook's next) is bound to another name; next.to is reached only on the hook's own next`);
      tr(i.id, t);
      continue;
    }
    if (i?.type === "AssignmentExpression" && i.right === p) throw refuse_14(i, `"${next.name}" (the hook's next) is assigned to another name; next.to is reached only on the hook's own next`);
  }
}
function Wj(fn_3, engineCreate_2, r) {
  let {
      refuse: refuse_15
    } = r,
    [declaration_12, s, next_2] = fn_3.params;
  if (fn_3.type !== "ArrowFunctionExpression") for (let u of X(fn_3, "arguments", "own")) throw refuse_15(u, '"arguments" is read inside a hook (it holds $)');
  let i = [];
  if (declaration_12 !== void 0) {
    if (declaration_12.type !== "Identifier") throw refuse_15(declaration_12, "the first parameter of a hook ($) is not a plain name (a pattern, a rest or a default)");
    i.push({
      name: declaration_12.name,
      declaration: declaration_12,
      origin: "parameter"
    });
  }
  for (let u of [declaration_12, s, next_2]) if (u?.type === "RestElement") throw refuse_15(u, "a hook takes $, e or next into a rest parameter (it would hold next)");
  for (let u of fn_3.params) AD(u, ({
    node: node_11
  }) => {
    if (node_11.type === "AssignmentPattern") throw refuse_15(node_11, "a parameter of a hook has a default value");
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
      unread: u => {
        for (let y of X(fn_3, u.name)) throw refuse_15(y, `"${u.name}", destructured from $ at engine.create, is read (a noun bound to a name); leave it unread or call it as $.noun.event(...)`);
      }
    }
  };
  if (next_2 !== void 0) bn({
    fn: fn_3,
    next: next_2,
    engineCreate: engineCreate_2
  }, f);
  vo(fn_3, i, f);
}
function Se({
  scan: scan_7,
  linked: linked_11
}, r, what_3) {
  let {
      scanned: scanned_8
    } = linked_11,
    fn_4 = Nh(r, {
      names: scanned_8.names,
      refuse: scanned_8.refuse,
      what: what_3
    });
  if (fn_4 !== void 0) return {
    fn: fn_4,
    linked: linked_11
  };
  let p = scanned_8.imports.get(r.name);
  if (p === void 0) throw scanned_8.refuse(r, `${what_3} "${r.name}" is not a function declared at the top of this file (a function declaration, or a const bound to a function), nor imported from one of the module's own files`);
  if (p.imported === void 0) throw scanned_8.refuse(r, `${what_3} "${r.name}" is a namespace import, not a function`);
  if (scanned_8.names.assigned.has(r.name)) throw scanned_8.refuse(r, `${what_3} "${r.name}" is assigned to elsewhere`);
  let i = scanned_8.names.shadowOf(r);
  if (i !== void 0) throw scanned_8.refuse(i, `${what_3} "${r.name}" is declared again in this file, shadowing the import`);
  let a = linked_11.links.get(p.specifier);
  if (a === void 0) throw scanned_8.refuse(r, `${what_3} "${r.name}" is imported from "${p.specifier}", which is not a file of the module's own`);
  let f = or({
    scan: scan_7,
    linked: q(scan_7, a)
  }, p.imported);
  if (f === void 0) throw scanned_8.refuse(r, `${what_3} "${r.name}" is imported from "${p.specifier}", which exports no function of that name: neither its own nor one it re-exports from a file of the module's own`);
  return f;
}
function Sn(e) {
  let [o] = e.arguments,
    r = o?.type === "ObjectExpression" ? o.properties : [],
    t = r.some(go),
    [n, s] = r.filter(item => ke(item, "name")),
    i = !t && s === void 0 && n?.type === "Property" ? n.value : void 0,
    a = i?.type === "Literal" ? i.value : void 0;
  return typeof a === "string" ? a : void 0;
}
function Ao(e, o) {
  let r = Sn(o);
  if (r !== void 0) e.registeredCommands.add(r);
}
function Jj(e) {
  let o = new Set(),
    r = {
      state: e.stateCalls,
      library: e.libraryCalls
    };
  for (let {
    followed: followed,
    spelling: spelling_2,
    scanned: scanned_9
  } of e.stateConsts) {
    let {
      init: init_4
    } = followed.binding;
    if (o.has(init_4)) continue;
    o.add(init_4);
    let i = gn(followed, scanned_9, r);
    if (i !== void 0) throw scanned_9.refuse(i, `the const ${followed.read.name}, read as the reference of a $.${spelling_2} call, is also written through, handed on or exported here, and const does not freeze: what it holds at the call could not be listed. Use it only as the reference of $.state calls, as a source of the state library's functions imported from "claude-code", and in a spread into an object literal ({ ...${followed.read.name}, id }), or write the reference at the call`);
  }
}
function Qj(e) {
  for (let {
    scanned: scanned_10
  } of e.graph.files.values()) AD(scanned_10.program, ({
    node: node_12
  }) => {
    let t = node_12.type === "CallExpression",
      n = t ? se(scanned_10, node_12) : void 0;
    if (n === void 0 || !t) return;
    e.libraryCalls.set(node_12, n);
    let s = n === "read" || n === "update",
      p = s ? node_12.arguments[1] : node_12,
      a = p !== void 0 && p.type !== "SpreadElement" ? pe(p, {
        scanned: scanned_10,
        libraryHelper: y => se(scanned_10, y)
      }) : void 0,
      f = a?.every(({
        plugin: plugin_3,
        key: key_5
      }) => plugin_3 !== void 0 && key_5 !== void 0);
    if (a === void 0 || f !== !0) throw scanned_10.refuse(p ?? node_12, `the state library's ${n} takes a source the scan can read: a reference whose plugin and key are string literals, or what atom, memberOf or derive (imported from "claude-code") made of one, written there or in a const of this file, so the values a module reads and writes can be listed`);
    let spelling_3 = n === "update" ? "state.set" : "state.get";
    for (let {
      plugin: plugin_4 = "",
      key: key_6 = "",
      consts: consts_4
    } of a) {
      let h = `${plugin_4}\x00${key_6}`;
      if (e.stateReads.set(h, {
        plugin: plugin_4,
        key: key_6
      }), n === "update") e.stateWrites.set(h, {
        plugin: plugin_4,
        key: key_6
      });
      for (let followed_2 of consts_4) e.stateConsts.add({
        followed: followed_2,
        spelling: spelling_3,
        scanned: scanned_10
      });
    }
    if (s) e.calls.add("state.get");
    if (n === "update") e.calls.add("state.set");
  });
}
function lr(e, {
  call: call_3,
  spelling: spelling_4,
  named: named_2,
  consts: consts_5
}, scanned_11) {
  let p = `${named_2.plugin}\x00${named_2.key}`;
  (spelling_4 === "state.get" ? e.stateReads : e.stateWrites).set(p, named_2), e.stateCalls.add(call_3);
  for (let followed_3 of consts_5) e.stateConsts.add({
    followed: followed_3,
    spelling: spelling_4,
    scanned: scanned_11
  });
}
function Zj(e) {
  let o = e.stateReads.size > 0 || e.stateWrites.size > 0,
    r = t => [...t.entries()].sort(([n], [s]) => n < s ? -1 : n > s ? 1 : 0).map(([, n]) => n);
  return o ? {
    reads: r(e.stateReads),
    writes: r(e.stateWrites)
  } : void 0;
}
function cr(e, o = e.linked) {
  let {
      scan: scan_8,
      linked: linked_12
    } = e,
    {
      scanned: scanned_12
    } = linked_12,
    {
      refuse: refuse_16
    } = scanned_12,
    p = (i, a) => {
      let {
        callee: callee_3
      } = i;
      if (callee_3.type !== "Identifier") throw refuse_16(callee_3, "$ is passed to something other than a named function");
      let u = Me(i);
      if (u !== void 0) throw refuse_16(u, "$ is passed in a call with a spread argument");
      if (!(scanned_12.names.functions.has(callee_3.name) || scanned_12.imports.has(callee_3.name))) throw refuse_16(callee_3, `$ is passed to "${callee_3.name}", which is not a function declared at the top of this file (a function declaration, or a const bound to one), nor one imported from a file of the module's own; $ is followed nowhere else`);
      if (scanned_12.imports.has(callee_3.name) && scanned_12.names.shadowOf(callee_3) !== void 0) throw refuse_16(callee_3, `$ is passed to "${callee_3.name}", a name declared again over this call: the engine may not bind it to the import of that name. Rename one of the two`);
      let {
          fn: fn_5,
          linked: linked_13
        } = Se(e, callee_3, "the function handed $"),
        scanned_13 = linked_13.scanned;
      if (fn_5.type !== "FunctionDeclaration" && (linked_13 !== o || linked_12 !== o)) throw refuse_16(callee_3, `$ is passed to "${callee_3.name}", a name bound to a function expression, outside the hook's own file: past an import $ is followed only into a function declaration (function ${callee_3.name}($) { ... }), which a bundle of the module keeps as written`);
      let w = i.arguments.indexOf(a),
        E = scan_8.helpers.get(fn_5) ?? new Set();
      if (E.has(w)) return;
      E.add(w), scan_8.helpers.set(fn_5, E), Uj(fn_5, w, {
        refuse: scanned_13.refuse,
        parentOf: scanned_13.parentOf,
        scanned: scanned_13,
        record: b => {
          scan_8.calls.add(b), scan_8.via.set(b, (scan_8.via.get(b) ?? new Set()).add(callee_3.name));
        },
        recordTo: b => {
          scan_8.nextTo.add(b);
        },
        recordEnv: (b, S) => {
          ho(scan_8, b).add(S);
        },
        recordCommand: b => {
          Ao(scan_8, b);
        },
        recordState: b => {
          lr(scan_8, b, scanned_13);
        },
        libraryHelper: b => se(scanned_13, b),
        follow: linked_13 === linked_12 ? p : cr({
          scan: scan_8,
          linked: linked_13
        }, o)
      });
    };
  return p;
}
import { createHash as tE } from "crypto";
var Ne = e => `${e.length}:${e}`;
function nE(e) {
  let o = tE("sha256").update(Ne(e.root));
  for (let [r, {
    compiled: compiled,
    links: links
  }] of e.files) {
    o.update(Ne(r) + Ne(compiled));
    for (let [s, p] of links) o.update(Ne(s) + Ne(p));
  }
  return o.digest("hex");
}
function Nn(e) {
  return {
    argumentsRead: e.type === "ArrowFunctionExpression" ? [] : X(e, "arguments", "own"),
    names: Ko(e)
  };
}
function Tn(e, o) {
  let r = e.holderNames.get(o);
  if (r !== void 0) return r;
  let t = Nn(o);
  return e.holderNames.set(o, t), t;
}
function Oo(e, {
  fn: fn_6,
  what: what_4,
  event: event_4,
  engineCreate: engineCreate_3
}) {
  let {
      scan: scan_9,
      linked: linked_14
    } = e,
    i = fn_6.type === "FunctionExpression" || fn_6.type === "ArrowFunctionExpression",
    a = fn_6.type === "Identifier",
    f = i ? {
      fn: fn_6,
      linked: linked_14
    } : a ? Se(e, fn_6, what_4) : void 0;
  if (f === void 0) throw linked_14.scanned.refuse(fn_6, `${what_4} is not a function literal or the name of one`);
  let u = f.fn.async === !0 && f.fn.generator === !0,
    y = zan(event_4);
  if (y && !u) throw linked_14.scanned.refuse(fn_6, `${what_4} on "${event_4}" is not an async generator: ${event_4} streams, so it takes async function* ($, e, next) { ... }, which yields the chunks and returns the result`);
  if (!y && u) throw linked_14.scanned.refuse(fn_6, `${what_4} on "${event_4}" is an async generator: only a streaming event named as itself (${q0r.join(", ")}) takes one; this pattern takes ($, e, next) => result`);
  scan_9.registered.set(f.fn, {
    linked: f.linked,
    engineCreate: scan_9.registered.get(f.fn)?.engineCreate === !0 || engineCreate_3
  });
}
function vn(e, {
  call: call_4,
  event: event_5,
  onName: onName_3,
  holder: holder_2
}) {
  let {
      scanned: scanned_14
    } = e.linked,
    {
      parentOf: parentOf_10,
      refuse: refuse_17
    } = scanned_14,
    a = parentOf_10(call_4),
    what_5 = `${onName_3}("${event_5}")`;
  if (a?.type !== "MemberExpression" || a.object !== call_4) {
    Re({
      call: call_4,
      scanned: scanned_14,
      what: what_5,
      holder: holder_2
    });
    return;
  }
  if (!(!a.computed && !a.optional && a.property.type === "Identifier" && a.property.name === "catch")) throw refuse_17(a, `${what_5} is read for something other than .catch; a registration has .catch(handler) and nothing else`);
  let call_5 = parentOf_10(a);
  if (!(call_5?.type === "CallExpression" && call_5.callee === a && !call_5.optional)) throw refuse_17(a, `${what_5}.catch is read without being called`);
  if (event_5 === wn) throw refuse_17(call_5, `${what_5}.catch(): an engine.create hook has no budget and its failure fails the load; .catch does not apply`);
  let c = Me(call_5);
  if (c !== void 0) throw refuse_17(c, `${what_5}.catch() is called with a spread argument`);
  let [fn_7, ...j] = call_5.arguments;
  if (fn_7 === void 0 || j.length > 0) throw refuse_17(call_5, `${what_5}.catch() takes (handler); got ${call_5.arguments.length} argument(s)`);
  Oo(e, {
    fn: fn_7,
    what: "the .catch handler",
    event: event_5,
    engineCreate: !1
  });
  let k = parentOf_10(call_5);
  if (k?.type === "MemberExpression" && k.object === call_5) throw refuse_17(k, `${what_5}.catch(...) is followed by another member; a registration takes one .catch`);
  Re({
    call: call_5,
    scanned: scanned_14,
    what: `${what_5}.catch()`,
    holder: holder_2
  });
}
function An(e, o) {
  let {
      call: call_6,
      onName: onName_4,
      holder: holder_3,
      position: position
    } = o,
    {
      scan: scan_10,
      linked: linked_15
    } = e,
    {
      scanned: scanned_15
    } = linked_15,
    {
      event: event_6,
      hook: u,
      matcher: matcher_2
    } = Ph(call_6, scanned_15.refuse, onName_4),
    g = matcher_2 !== void 0,
    c = $Xe(event_6),
    h = scan_10.unmatched.get(event_6);
  if (h !== void 0 && (!g || c)) throw scanned_15.refuse(call_6, `${onName_4}("${event_6}") is registered twice${g ? "" : " without a matcher"}; the first is at ${h}`);
  if (!g || c) scan_10.unmatched.set(event_6, `${scanned_15.file}:${call_6.loc?.start.line ?? "unknown line"}`);
  scan_10.hooks.add(event_6), scan_10.registrations.set(call_6, {
    event: event_6,
    matcher: matcher_2,
    linked: linked_15,
    holder: holder_3,
    position: position
  }), Oo(e, {
    fn: u,
    what: "the hook",
    event: event_6,
    engineCreate: event_6 === wn
  }), vn(e, {
    ...o,
    event: event_6
  });
}
function ur(e, o, r) {
  let {
      scan: scan_11,
      linked: linked_16
    } = e,
    s = scan_11.holders.get(o) ?? new Set();
  if (s.has(r)) return;
  s.add(r), scan_11.holders.set(o, s), scan_11.holderFiles.set(o, linked_16);
  let {
      scanned: scanned_16
    } = linked_16,
    {
      refuse: refuse_18,
      parentOf: parentOf_11
    } = scanned_16,
    f = Tn(scan_11, o);
  for (let g of f.argumentsRead) throw refuse_18(g, '"arguments" is read inside a function that holds on');
  let u = o.params[r];
  if (u === void 0) {
    let g = o.params.at(-1);
    if (g?.type === "RestElement") throw refuse_18(g, "on is passed into a rest parameter");
    return;
  }
  if (u.type !== "Identifier") throw refuse_18(u, "the parameter that receives on is not a plain name");
  let onName_5 = u.name;
  for (let g of f.names.declared.get(onName_5) ?? []) if (g !== u) throw refuse_18(g, `"${onName_5}" is declared again (shadowed)`);
  for (let g of f.names.read.get(onName_5) ?? []) {
    let call_7 = parentOf_11(g);
    if (call_7?.type !== "CallExpression" || call_7.optional) throw refuse_18(g, `"${onName_5}" is used other than as a call or an argument to a function of the module's own (bound, spread or read)`);
    if (call_7.callee === g) {
      An(e, {
        call: call_7,
        onName: onName_5,
        holder: o,
        position: r
      });
      continue;
    }
    if (call_7.callee.type !== "Identifier") throw refuse_18(call_7.callee, `"${onName_5}" is passed to something other than a function named at the top of this file or imported from one of the module's own files`);
    let h = Me(call_7);
    if (h !== void 0) throw refuse_18(h, `"${onName_5}" is passed in a call with a spread argument`);
    Re({
      call: call_7,
      scanned: scanned_16,
      what: `${call_7.callee.name}(${onName_5})`,
      holder: o
    });
    let j = Se(e, call_7.callee, "the callee"),
      position_2 = call_7.arguments.indexOf(g);
    scan_11.holderCalls.add({
      call: call_7,
      callee: j.fn,
      position: position_2,
      caller: o,
      callerPosition: r
    }), ur({
      scan: scan_11,
      linked: j.linked
    }, j.fn, position_2);
  }
}
var On = (graph_2, pluginName_4, register) => ({
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
function xr(graph_3, pluginName_5) {
  let linked_17 = q({
      graph: graph_3,
      pluginName: pluginName_5
    }, graph_3.entry),
    t = Oh(linked_17),
    scan_12 = On(graph_3, pluginName_5, t);
  return ur({
    scan: scan_12,
    linked: linked_17
  }, t, 0), scan_12;
}
function Le(e, o) {
  let scan_13 = xr(e, o);
  for (let [t, {
    linked: linked_18,
    engineCreate: engineCreate_4
  }] of scan_13.registered) Wj(t, engineCreate_4, {
    refuse: linked_18.scanned.refuse,
    parentOf: linked_18.scanned.parentOf,
    scanned: linked_18.scanned,
    record: p => {
      scan_13.calls.add(p), scan_13.direct.add(p);
    },
    recordTo: p => {
      scan_13.nextTo.add(p);
    },
    recordEnv: (p, i) => {
      ho(scan_13, p).add(i);
    },
    recordCommand: p => {
      Ao(scan_13, p);
    },
    recordState: p => {
      lr(scan_13, p, linked_18.scanned);
    },
    libraryHelper: p => se(linked_18.scanned, p),
    follow: cr({
      scan: scan_13,
      linked: linked_18
    })
  });
  return Qj(scan_13), Jj(scan_13), scan_13;
}
function kE(e, o) {
  let {
      via: via,
      direct: direct
    } = Le(e, o),
    n = new Map();
  for (let [s, p] of via) if (!direct.has(s)) n.set(s, [...p].sort());
  return n;
}
import { relative as IE } from "path";
var Ro = (e, o, r) => new Ie(`${e}: ${o} does not parse: ${d(r)}`);
function MBs(e, o, r) {
  try {
    return _4n(e, o);
  } catch (error) {
    throw Ro(r, e, error);
  }
}
var Rn = (e, o) => _o(e) === "js" ? void 0 : o.split(`
`);
function DBs(e) {
  let o;
  if (AD(e.program, ({
    node: node_13
  }) => {
    if (node_13.type === "ImportExpression" && (o === void 0 || node_13.start < o.start)) o = node_13;
  }), o === void 0) return;
  return e.refuse(o, 'a dynamic import(); a hooks module imports its own files with an import declaration, as in import { name } from "./file.js"');
}
function Pn(e) {
  let o = new Map();
  for (let r of e.body) {
    if (r.type !== "ImportDeclaration") continue;
    let specifier_2 = String(r.source.value);
    for (let n of r.specifiers) {
      let imported_2;
      if (n.type === "ImportSpecifier") {
        let imported = n.imported;
        imported_2 = imported.type === "Identifier" ? imported.name : String(imported.value);
      } else imported_2 = n.type === "ImportDefaultSpecifier" ? "default" : void 0;
      o.set(n.local.name, {
        specifier: specifier_2,
        imported: imported_2
      });
    }
  }
  return o;
}
function In(e) {
  let o = new Set();
  for (let r of e.body) {
    let t = r.type === "ImportDeclaration" || r.type === "ExportAllDeclaration",
      n = r.type === "ExportNamedDeclaration",
      s = t ? r.source : n ? r.source ?? null : null;
    if (s !== null) o.add(String(s.value));
  }
  return [...o];
}
var yr = 2000;
class Po extends Ie {
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
var Fn = (e, o) => r => class extends r {
  enterScope = t => {
    if (r.prototype.enterScope.call(this, t), this.scopeStack.length > e + 1) throw o(this.lastTokStartLoc.line);
  };
};
function LBs(file_7, o, plugin_6) {
  let t = Rn(file_7, o);
  function refuse_19(u, construct_2) {
    let line_2 = typeof u === "number" ? u : u?.loc?.start.line,
      h = t === void 0 || line_2 === void 0 ? void 0 : t[line_2 - 1]?.trim() ?? "",
      j = h !== void 0 && h.length > Jr;
    return new Po({
      plugin: plugin_6,
      file: file_7,
      line: line_2,
      excerpt: j ? `${ne(h, Jr)}...` : h,
      construct: construct_2
    });
  }
  let {
      Parser: Parser
    } = WIo(),
    program_4;
  try {
    program_4 = Parser.extend(Fn(yr, u => refuse_19(u, `code nested too deep to scan: more than ${yr} scopes (functions, blocks, loops) open inside one another`))).parse(o, {
      ecmaVersion: "latest",
      sourceType: "module",
      locations: !0
    });
  } catch (error) {
    if (error instanceof Po) throw error;
    throw error instanceof RangeError ? refuse_19(void 0, `code nested too deep to scan (the parser stopped: ${error.message})`) : Ro(plugin_6, file_7, error);
  }
  let i = bx(program_4),
    climbs_4 = Ty(u => i.get(u)),
    names_9 = $y(program_4, climbs_4);
  return {
    file: file_7,
    program: program_4,
    names: names_9,
    consts: jn(program_4, names_9, climbs_4),
    parentOf: climbs_4.parentOf,
    climbs: climbs_4,
    refuse: refuse_19,
    imports: Pn(program_4),
    specifiers: In(program_4)
  };
}
function PE(e) {
  let o;
  return AD(e, ({
    node: node_14
  }) => {
    if (o === void 0 && (node_14.type === "AwaitExpression" || node_14.type === "ForOfStatement" && node_14.await || node_14.type === "VariableDeclaration" && node_14.kind === "await using")) o = node_14;
  }, r => r.type === "FunctionDeclaration" || r.type === "FunctionExpression" || r.type === "ArrowFunctionExpression"), o;
}
async function Dn(e, o, r) {
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
      u = 0;
    for (let {
      file: g,
      source: source_6
    } of a) {
      if (files.has(g)) continue;
      if (u > 0 && u % Bo === 0) await Yg();
      if (u += 1, Buffer.byteLength(source_6, "utf8") > OHt) throw Oe(o, g);
      let compiled_2 = MBs(g, source_6, o),
        scanned_17 = LBs(g, compiled_2, o),
        E = DBs(scanned_17);
      if (E !== void 0) throw E;
      let b = PE(scanned_17.program);
      if (g !== e.file && b !== void 0) throw scanned_17.refuse(b, "a top-level await in a file the entry imports; the environment links the entry alone as an async module");
      let links_2 = new Map();
      for (let specifier_3 of scanned_17.specifiers) {
        if (specifier_3 === Tgt) continue;
        if (!BIo(specifier_3)) throw CBs(o, specifier_3, IE(e.root, g) || g);
        f.push({
          importer: g,
          specifier: specifier_3,
          links: links_2
        });
      }
      files.set(g, {
        source: source_6,
        compiled: compiled_2,
        scanned: scanned_17,
        links: links_2
      });
    }
    let y = [];
    for (let g = 0; g < f.length; g += Bo) {
      let c = await Promise.allSettled(f.slice(g, g + Bo).map(async h => ({
        pending: h,
        answer: await r(h.specifier, h.importer, p)
      })));
      for (let h of c) {
        if (h.status === "rejected") throw h.reason;
        let {
            pending: pending,
            answer: answer
          } = h.value,
          {
            real: real_4
          } = answer,
          file_8 = real_4 === void 0 ? void 0 : reals_2.get(real_4),
          S = file_8 === void 0 ? answer : {
            file: file_8,
            source: known_2.get(file_8) ?? answer.source
          };
        if (!known_2.has(S.file)) {
          if (i += Buffer.byteLength(S.source, "utf8"), i > $r) throw tx(o, S.file);
          if (known_2.set(S.file, S.source), real_4 !== void 0) reals_2.set(real_4, S.file);
        }
        pending.links.set(pending.specifier, S.file), y.push(S);
      }
    }
    a = y;
  }
  return {
    entry: e.file,
    root: e.root,
    files: files
  };
}
function gr(e, o) {
  let {
    onName: onName_6,
    event: event_7,
    refuse: refuse_20
  } = o;
  if (e === void 0) return je;
  switch (e.type) {
    case "ObjectExpression":
      {
        let s = e.properties.find(item => item.type === "SpreadElement" || item.computed || item.kind !== "init");
        if (s !== void 0) throw refuse_20(s, `${onName_6}("${event_7}") has a matcher with a spread, a computed key or an accessor, which may set "to" to anything; ` + C(o));
        let [p, i] = e.properties.filter(item => ke(item, "to"));
        if (i !== void 0) throw refuse_20(i, `${onName_6}("${event_7}") names "to" twice in one matcher; ` + C(o));
        return p?.type === "Property" ? Kt(p.value, o) : je;
      }
    case "ArrayExpression":
      return e.elements.flatMap(item => {
        if (item === null || item.type === "SpreadElement") throw refuse_20(item ?? e, `${onName_6}("${event_7}") has a list of matchers with a hole or a spread; ${C(o)}`);
        return gr(item, o);
      });
    default:
      throw refuse_20(e, `${onName_6}("${event_7}") takes its matcher as ${oo(e)}, not an object written in the call; ${C(o)}`);
  }
}
function Mn(e) {
  let o = [...e.registrations.values()].filter(item => JX(item.event, "command.run")),
    r = o.map(item => te(item.matcher));
  return o.length > 0 && r.every(item => item !== void 0) ? L(r.flatMap(item => item ?? [])).toSorted() : void 0;
}
function Cn(e) {
  let o = [...e.registrations].filter(([, t]) => ro(t.event));
  if (o.length === 0) return;
  let r = new Set(o.flatMap(([t, {
    event: event_8,
    matcher: matcher_3,
    linked: linked_19
  }]) => gr(matcher_3, {
    onName: t.callee.type === "Identifier" ? t.callee.name : "on",
    event: event_8,
    refuse: linked_19.scanned.refuse
  })));
  return je.filter(item => r.has(item));
}
function _E(e, o) {
  let r = Le(e, o),
    nextTo = DHt("prepend").filter(item => r.nextTo.has(item)),
    n = r.envReads.size > 0 || r.envWrites.size > 0,
    clients = dt(e),
    state_2 = Zj(r),
    runCommands = Mn(r),
    telemetry = Cn(r);
  return {
    hooks: Array.from(r.hooks),
    calls: Array.from(r.calls).sort(),
    ...(runCommands !== void 0 && {
      runCommands: runCommands
    }),
    ...(nextTo.length === 0 ? {} : {
      nextTo: nextTo
    }),
    ...(telemetry !== void 0 && {
      telemetry: telemetry
    }),
    ...(n && {
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
var UE = e => (o, r) => Promise.reject(new Ie(`${e}: cannot import "${o}" (from ${r}): the module is one text with no files beside it`));
async function T4n(file_9, root_5, r) {
  let source_7 = Ze.source(file_9);
  if (source_7 !== void 0) return {
    source: source_7,
    graph: await Dn({
      file: file_9,
      source: source_7,
      root: root_5
    }, r, UE(r))
  };
  let {
    real: real_5,
    source: source_8
  } = await nx(file_9, root_5, r);
  return {
    source: source_8,
    graph: await Dn({
      file: file_9,
      source: source_8,
      root: root_5,
      real: real_5
    }, r, zg(root_5, r))
  };
}
function Be(e, o) {
  let r = nE(e),
    t = Qr.get(r);
  if (t !== void 0) return t;
  let n = _E(e, o);
  return Qr.set(r, n), n;
}
async function uQs(e, o, r) {
  let {
      graph: graph_4
    } = await T4n(e, o, r),
    {
      registrations: registrations_2,
      renderMatchers: renderMatchers_2,
      catchReads: catchReads_2
    } = Xt(Le(graph_4, r));
  return {
    scan: Be(graph_4, r),
    registrations: registrations_2,
    renderMatchers: renderMatchers_2,
    catchReads: catchReads_2,
    helperCalls: kE(graph_4, r)
  };
}
var pQs = (e, o) => ({
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
async function qIo(e, o, r) {
  let scan_14 = Ze.scan(e);
  if (scan_14 !== void 0) return {
    source: "",
    linked: [],
    links: [],
    scan: scan_14
  };
  let {
    source: source_9,
    graph: graph_5
  } = await T4n(e, o, r);
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
    scan: Be(graph_5, r)
  };
}
function KIo(e, o) {
  if (!(!o.isBuiltin && e.telemetry?.includes(qt) === !0)) return;
  return `its hooks stand on the telemetry stream "${qt}" (a matcher names it, or a telemetry hook names no "to" and so stands on every stream), which is for the plugins built into the CLI; name the collector on each telemetry hook: on("telemetry.log", { to: "collector" }, hook)`;
}
function YIo(e) {
  let o = e.telemetry?.join(", ");
  return o === "" ? "nothing" : o;
}
var $n = (module, o, r) => ({
  module: module,
  scan: Zc(o, r),
  files: Qc(o)
});
var XIo = "agents";
var VN = (folder, module_2, r) => Hp() ? $n(module_2, r(), folder) : {
  module: module_2,
  folder: folder
};
import { join as lw } from "path";
function dw(e, o) {
  return "folder" in o ? {
    path: o.folder,
    modulePath: lw(o.folder, Te)
  } : {
    path: path,
    modulePath: Or(e)
  };
}
import { join as cw } from "path";
var C4n = e => cw(ve(), Mo, e);
function xw(e) {
  return e === null || e === void 0 ? String(e) : typeof e === "object" ? `an object with keys [${Object.keys(e).join(", ")}]` : `a ${typeof e}`;
}
function yw(e) {
  if (typeof e === "object" && e !== null && "registerPlugin" in e && typeof e.registerPlugin === "function") return e;
  throw new x(`a built-in module has no registerPlugin function: ${xw(e)}`, "a built-in module has no registerPlugin function");
}
function Qme(e, o) {
  let r;
  try {
    r = o();
  } catch (error) {
    Io(e, "require", error);
    return;
  }
  let t;
  try {
    t = yw(r);
  } catch (error) {
    Io(e, "shape", error);
    return;
  }
  try {
    t.registerPlugin();
  } catch (error) {
    hr().builtinPlugins.delete(e), Io(e, "register", error);
  }
}
function Io(name_5, phase, r) {
  let builtinPluginFailures = hr().builtinPluginFailures;
  if (builtinPluginFailures.has(name_5)) return;
  builtinPluginFailures.set(name_5, {
    name: name_5,
    phase: phase,
    message: d(r)
  }), l(H(r)), m("plugin_bundled_register", phase);
}
function qan(e) {
  let o = hr(),
    r = o.builtinPlugins.get(e);
  if (r === void 0 || o.builtinPluginFailures.has(e)) return !1;
  if (r.isAvailable === void 0) return !0;
  try {
    return r.isAvailable();
  } catch (error) {
    return Io(e, "is_available", error), !1;
  }
}
function gb(e) {
  hr().builtinPlugins.set(e.name, e);
  let hooksModule = e.hooksModule;
  if (hooksModule === void 0) return;
  let r = Or(e.name);
  if ("scan" in hooksModule) Ze.registerScan(r, hooksModule.scan);else if ("shipped" in hooksModule) Ze.register(r, hooksModule.shipped);
}
function Df(e) {
  return e.endsWith(`@${path}`);
}
function VE(e) {
  return hr().builtinPlugins.get(e);
}
function WG() {
  let e = nr(),
    enabled_2 = [],
    disabled = [];
  for (let [name_6, n] of hr().builtinPlugins) {
    if (!qan(name_6)) continue;
    let s = `${name_6}@${path}`,
      p = Kx(s).length > 0,
      i = n.enabledFromPolicyOnly ? Vn(s) : n.enabledFromTrustedSettingsOnly ? H4n(s) : !p ? e?.enabledPlugins?.[s] : Kan(s),
      enabled = i !== void 0 ? i === !0 : n.defaultEnabled ?? !0,
      f = {
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
        ...(n.hooksModule === void 0 ? {} : dw(name_6, n.hooksModule))
      };
    if (enabled) enabled_2.push(f);else disabled.push(f);
  }
  return {
    enabled: enabled_2,
    disabled: disabled
  };
}
function R4n() {
  return Gn().filter(item => !VG(item.name));
}
function NBs() {
  return Gn();
}
function Gn() {
  let {
      enabled: enabled_3
    } = WG(),
    o = [],
    builtinPlugins = hr().builtinPlugins;
  for (let t of enabled_3) {
    let n = builtinPlugins.get(t.name);
    if (!n?.skills) continue;
    for (let s of n.skills) o.push(hw(s, `${t.name}@${path}`));
  }
  return o;
}
function Z0r(e = new Set()) {
  let o = [];
  for (let [r, t] of hr().builtinPlugins) {
    if (e.has(r)) continue;
    for (let n of t.skills ?? []) o.push(n.name, ...(n.aliases ?? []));
  }
  return o;
}
function Kan(e) {
  let o = Wo();
  for (let r = o.length - 1; r >= 0; r--) {
    let t = o[r];
    if (t === void 0) continue;
    let n = W3(me(t)?.enabledPlugins, e);
    if (n !== void 0) return n;
  }
  return;
}
function FBs() {
  return Object.fromEntries([...hr().builtinPlugins].filter(([, e]) => e.enabledFromPolicyOnly).map(([e]) => `${e}@${path}`).map(item => [item, Vn(item)]));
}
function Vn(e) {
  let [o, r] = [nTe(), me("policySettings")].map(item => W3(item?.enabledPlugins, e));
  return o === !1 && r !== !1 ? r : o;
}
function hw(e, o) {
  let builtinPluginWiredSkills = hr().builtinPluginWiredSkills,
    t = builtinPluginWiredSkills.get(e);
  if (!t) {
    let {
      wireSkillFilesExtraction: wireSkillFilesExtraction
    } = import.meta.require("B:/~BUN/root/chunk-n47gcawf.js");
    t = wireSkillFilesExtraction(e), builtinPluginWiredSkills.set(e, t);
  }
  let {
    skillRoot: skillRoot,
    getPromptForCommand: getPromptForCommand
  } = t;
  OIe(e.hooks ?? {}, o);
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
  return PIe(p, "description", e.description), PIe(p, "menuDescription", e.menuDescription), PIe(p, "argumentHint", e.argumentHint), PIe(p, "whenToUse", e.whenToUse), N4n(p, "disableModelInvocation", e.disableModelInvocation), F4n(p, e.policyGate), p;
}
function k4n(e, o, r) {
  let t = rr(e);
  if (Df(e)) return r.outermost.includes(t) ? "prepend" : "builtin";
  let n = Lgt(e, o),
    s = a => r[a].includes(t) && (r.from[a] === "user" ? !n : n),
    p = n ? "prepend" : "user",
    i = s("prepend") ? "prepend" : "append";
  return s("prepend") || s("append") ? i : p;
}
export { _4n, UIo, OHt, Tgt, CBs, BIo, HXe, jIo, RBs, WIo, b4n, AD, sQs, iQs, V0r, S4n, TIe, aQs, Dje, zIo, q0r, zan, w4n, $Xe, ABs, K0r, JX, IHt, Gan, MHt, Y0r, X0r, xBs, Van, v4n, PBs, Cgt, lQs, DHt, J0r, OBs, dQs, GIo, Rgt, k4n, IBs, E4n, Agt, LHt, NHt, CIe, cQs, VIo, Q0r, MBs, DBs, LBs, T4n, uQs, pQs, qIo, KIo, YIo, XIo, VN, C4n, Qme, qan, gb, Df, VE, WG, R4n, NBs, Z0r, Kan, FBs };