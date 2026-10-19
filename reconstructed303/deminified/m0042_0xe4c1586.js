// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Tjt, S1r, v1r, Cjt, VZe, k1r, DGe, E1r, Qne, ere, NGe, Zhe, Pde, KZe, n1 } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { eCe, lC } from "B:/~BUN/root/chunk-4bx17ygx.js";
var l = E1r(Object.getPrototypeOf, Object),
  dmn = l;
var u = Object.prototype,
  m = u.hasOwnProperty;
function R(e, r, o) {
  var n = e[r];
  if (!(m.call(e, r) && eCe(n, o)) || o === void 0 && !(r in e)) ere(e, r, o);
}
var sZe = R;
function S(e) {
  var r = [];
  if (e != null) for (var o in Object(e)) r.push(o);
  return r;
}
var f = S;
var G = Object.prototype,
  N = G.hasOwnProperty;
function A(e) {
  if (!lC(e)) return f(e);
  var r = DGe(e),
    o = [];
  for (var n in e) if (!(n == "constructor" && (r || !N.call(e, n)))) o.push(n);
  return o;
}
var a = A;
function P(e) {
  return Qne(e) ? k1r(e, !0) : a(e);
}
var iGe = P;
var g = Object.getOwnPropertySymbols,
  C = !g ? v1r : function (e) {
    var r = [];
    while (e) Tjt(r, Cjt(e)), e = dmn(e);
    return r;
  },
  yBr = C;
function y(e) {
  return S1r(e, iGe, yBr);
}
var cmn = y;
function L(e, r, o, n) {
  if (!lC(e)) return e;
  r = Zhe(r, e);
  var s = -1,
    i = r.length,
    I = i - 1,
    t = e;
  while (t != null && ++s < i) {
    var _ = Pde(r[s]),
      T = o;
    if (_ === "__proto__" || _ === "constructor" || _ === "prototype") return e;
    if (s != I) {
      var O = t[_];
      if (T = n ? n(O, _, t) : void 0, T === void 0) T = lC(O) ? O : VZe(r[s + 1]) ? [] : {};
    }
    sZe(t, _, T), t = t[_];
  }
  return e;
}
var d = L;
function v(e, r, o) {
  var n = -1,
    s = r.length,
    i = {};
  while (++n < s) {
    var I = r[n],
      t = KZe(e, I);
    if (o(t, I)) d(i, Zhe(I, e), t);
  }
  return i;
}
var hBr = v;
function w(e, r) {
  if (e == null) return {};
  var o = NGe(cmn(e), function (n) {
    return [n];
  });
  return r = n1(r), hBr(e, o, function (n, s) {
    return r(n, s[0]);
  });
}
var Bs = w;
var kn = Object.freeze(["-c", "core.hooksPath=/dev/null", "-c", "core.fsmonitor="]),
  sS = "--ignore-submodules=dirty",
  uQ = Object.freeze(["status", "--porcelain", "--untracked-files=normal", "--ignore-submodules=dirty"]),
  cXn = Object.freeze({
    GIT_LFS_SKIP_SMUDGE: "1"
  }),
  aGe = "/",
  E = ["'alias.remote-none=version'", "'alias.remote-none.command=version'", "'alias.remote-/.command=version'", "'fetch.bundleURI='", "'help.autocorrect=0'"],
  GIT_CONFIG_PARAMETERS = E.join(" "),
  x = Object.freeze({
    GIT_ALLOW_PROTOCOL: "/",
    GIT_CONFIG_PARAMETERS: GIT_CONFIG_PARAMETERS,
    GIT_NO_LAZY_FETCH: "1",
    GIT_NO_REPLACE_OBJECTS: "1",
    GIT_TERMINAL_PROMPT: "0",
    ...cXn
  }),
  D = Object.freeze({
    GIT_SSH_COMMAND: "false"
  }),
  uXn = 2000,
  Tbt = Object.freeze([...kn, "-c", "safe.bareRepository=explicit", "-c", "protocol.file.allow=never"]),
  iZe = ["GIT_DIR", "GIT_WORK_TREE", "GIT_COMMON_DIR", "GIT_INDEX_FILE", "GIT_CEILING_DIRECTORIES", "GIT_DISCOVERY_ACROSS_FILESYSTEM", "GIT_OBJECT_DIRECTORY", "GIT_ALTERNATE_OBJECT_DIRECTORIES", "GIT_SHALLOW_FILE", "GIT_NAMESPACE", "GIT_IMPLICIT_WORK_TREE", "GIT_REFERENCE_BACKEND"],
  pQ = [...iZe, "GIT_CONFIG_COUNT", "GIT_CONFIG_PARAMETERS", "GIT_CONFIG_GLOBAL", "GIT_CONFIG_SYSTEM", "GIT_CONFIG"],
  M = /^GIT_CONFIG_(KEY|VALUE)_\d+$/,
  regExp = new RegExp(M.source, "i"),
  pXn = /^GIT_(?:SSL|PROXY)_/i,
  F = new Set(pQ);
function ks(e, r = {}) {
  let o = e?.GIT_ALLOW_PROTOCOL?.split(":").includes("ssh") ?? !1;
  return U(p({
    ...x,
    ...(!o && D)
  }, e, r));
}
function fXn(e, r = {}) {
  let o = p({}, e, r);
  for (let n of h) if (!(n in o)) o[n] = void 0;
  return o;
}
var h = ["GIT_LFS_SKIP_SMUDGE", "GIT_NO_LAZY_FETCH", "GIT_NO_REPLACE_OBJECTS"];
function p(e, r, {
  base = process.env,
  repository: repository
}) {
  let s = K({
      ...e,
      ...(repository !== void 0 && {
        GIT_DIR: repository.gitDir,
        GIT_COMMON_DIR: repository.commonDir
      }),
      ...(repository !== void 0 && (repository.workTree !== null ? {
        GIT_WORK_TREE: repository.workTree
      } : {
        GIT_IMPLICIT_WORK_TREE: "0"
      })),
      ...r
    }),
    i = {};
  for (let t of pQ) i[t] = void 0;
  let I = new Set(Object.keys(s).map(item => item.toUpperCase()));
  for (let t of Object.keys(base)) {
    let _ = t.toUpperCase();
    if (F.has(_) || regExp.test(t) || I.has(_) && !(t in s)) i[t] = void 0;
  }
  return {
    ...base,
    ...i,
    ...s
  };
}
function K(e) {
  let GIT_ALLOW_PROTOCOL = e.GIT_ALLOW_PROTOCOL;
  if (GIT_ALLOW_PROTOCOL === void 0) return {
    ...e
  };
  let o = GIT_ALLOW_PROTOCOL.split(":").filter(item => item !== "/");
  if (o.find(item => !/^[A-Za-z0-9-]*$/.test(item)) !== void 0) throw Error('GIT_ALLOW_PROTOCOL may list only transport names made of letters, digits and "-"');
  let s = [...new Set([...E, ...o.flatMap(item => [`'alias.remote-${item}=version'`, `'alias.remote-${item}.command=version'`])])],
    GIT_CONFIG_PARAMETERS_2 = e.GIT_CONFIG_PARAMETERS;
  return {
    ...e,
    GIT_CONFIG_PARAMETERS: [...(GIT_CONFIG_PARAMETERS_2 === void 0 || GIT_CONFIG_PARAMETERS_2 === "" || GIT_CONFIG_PARAMETERS_2 === GIT_CONFIG_PARAMETERS ? [] : [GIT_CONFIG_PARAMETERS_2]), ...s].join(" ")
  };
}
function U(e) {
  let n = t => t.replaceAll('"', ""),
    s = t => /^(?:[A-Za-z]:[\\/]|[\\/]{2})/.test(t),
    i = t => {
      if (t === void 0) return;
      let _ = t.split(";").map(n).filter(item => item !== "" && s(item));
      return _.length > 0 ? _.join(";") : "\\\\.\\nul";
    },
    I = Object.keys(e).filter(item => item.toUpperCase() === "PATH");
  return {
    ...e,
    ...Object.fromEntries(I.map(item => [item, i(e[item])]))
  };
}
export { sZe, hBr, dmn, yBr, iGe, cmn, Bs, kn, sS, uQ, cXn, aGe, uXn, Tbt, iZe, pQ, regExp as aZe, pXn, ks, fXn };